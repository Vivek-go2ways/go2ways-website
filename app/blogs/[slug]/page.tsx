import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SplitWords from "@/components/SplitWords";
import { BLOG_POSTS, blogBySlug, formatBlogDate, type BlogBlock } from "@/content/blogs";
import { asset, link } from "@/lib/paths";

type Params = { slug: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const post = blogBySlug((await params).slug);
  if (!post) return {};
  return { title: `${post.title} — Go2Ways`, description: post.excerpt };
}

function ListItem({ text }: { text: string }) {
  const [term, ...rest] = text.split(" – ");
  if (!rest.length) return <li>{text}</li>;
  return (
    <li>
      <span><strong>{term}</strong> – {rest.join(" – ")}</span>
    </li>
  );
}

function Block({ block }: { block: BlogBlock }) {
  switch (block.type) {
    case "h2":
      return <h2 className="heading-l">{block.text}</h2>;
    case "h3":
      return <h3 className="heading-s">{block.text}</h3>;
    case "p":
      return <p className="body-l">{block.text}</p>;
    case "list":
      return <ul className="engage-list">{block.items.map((t) => <ListItem key={t} text={t} />)}</ul>;
    case "checklist":
      return <ul className="checklist">{block.items.map((t) => <li key={t}>{t}</li>)}</ul>;
  }
}

export default async function BlogPostPage({ params }: { params: Promise<Params> }) {
  const post = blogBySlug((await params).slug);
  if (!post) notFound();
  return (
    <main>
      <section className="hero svc-hero">
        <div className="silk-wave" data-wave="hero" aria-hidden="true" />
        <div className="hero-copy">
          <a className="pill-tag hero-sub" href={link("/blogs")}><span aria-hidden="true">←</span> All Blogs</a>
          <SplitWords as="h1" className="display-xl split-words" lines={post.titleLines} />
          <p className="body-l hero-sub">{formatBlogDate(post.date)} · {post.readTime}</p>
        </div>
      </section>

      <article className="section container post">
        <figure className="post-cover reveal-scale">
          <img src={asset(post.image)} alt={post.imageAlt} width="1200" height="900" />
        </figure>
        <div className="post-body reveal">
          {post.body.map((block, i) => <Block key={i} block={block} />)}
        </div>
        <div className="post-foot reveal">
          <a className="btn btn-secondary" href={link("/blogs")}>Explore Our Services</a>
          <a className="btn btn-primary" href={link("/contact")}>Talk to Our Team</a>
        </div>
      </article>

      <section className="cta container" id="cta">
        <div className="cta-card reveal-scale">
          <div className="silk-wave" data-wave="cta" data-speed="0.8" aria-hidden="true" />
          <h2 className="heading-l">Let&apos;s Build What&apos;s Next.</h2>
          <p className="body-l">Whether you&apos;re modernising enterprise systems, exploring AI or looking for smarter software solutions, Go2Ways can help you take the next step.</p>
          <div className="cta-actions">
            <a className="btn btn-primary" href={link("/contact")}>Talk to Our Team</a>
          </div>
        </div>
      </section>
    </main>
  );
}
