import type { Metadata } from "next";
import SplitWords from "@/components/SplitWords";
import { BLOG_POSTS, blogPath, formatBlogDate } from "@/content/blogs";
import { asset, link } from "@/lib/paths";

export const metadata: Metadata = {
  title: "Blogs — Go2Ways",
  description: "Insights and updates from Go2Ways on enterprise technology, AI and software products.",
};

export default function BlogsPage() {
  const [featured, ...rest] = [...BLOG_POSTS].sort((a, b) => b.date.localeCompare(a.date));
  return (
    <main>
      <section className="hero svc-hero blog-hero">
        <div className="hero-copy">
          <SplitWords as="h1" className="display-xl split-words" lines={["Insights & Blogs"]} />
          <p className="body-l hero-sub">Ideas, updates and practical guidance from the Go2Ways team on enterprise technology, AI and software.</p>
        </div>
      </section>

      <section className="section container" id="posts">
        {featured ? (
          <>
            <a className="split blog-featured" href={link(blogPath(featured.slug))}>
              <div className="blog-featured-media reveal-scale">
                <img src={asset(featured.image)} alt={featured.imageAlt} width="1200" height="900" />
              </div>
              <div className="split-copy">
                <span className="pill-tag reveal">Latest Article</span>
                <p className="blog-meta reveal" style={{ "--stagger": 1 }}>{formatBlogDate(featured.date)} · {featured.readTime}</p>
                <h2 className="heading-l reveal" style={{ "--stagger": 2 }}>{featured.title}</h2>
                <p className="body-l reveal" style={{ "--stagger": 3 }}>{featured.excerpt}</p>
                <span className="blog-more reveal" style={{ "--stagger": 4 }}>Read the article <span aria-hidden="true">→</span></span>
              </div>
            </a>
            {rest.length > 0 && (
              <div className="card-grid blog-grid" data-stagger-children="">
                {rest.map((post) => (
                  <a className="feature-card blog-card reveal" key={post.slug} href={link(blogPath(post.slug))}>
                    <div className="media" data-tilt="">
                      <div className="media-inner">
                        <img className="photo-fill" src={asset(post.image)} alt={post.imageAlt} width="1200" height="900" loading="lazy" />
                      </div>
                    </div>
                    <div className="text">
                      <p className="blog-meta">{formatBlogDate(post.date)} · {post.readTime}</p>
                      <h2 className="heading-s">{post.title}</h2>
                      <p className="muted">{post.excerpt}</p>
                      <span className="blog-more">Read more <span aria-hidden="true">→</span></span>
                    </div>
                  </a>
                ))}
              </div>
            )}
          </>
        ) : (
          <div className="section-header">
            <span className="pill-tag reveal">Coming Soon</span>
            <h2 className="heading-l reveal" style={{ "--stagger": 1 }}>Our First Articles Are on the Way</h2>
            <p className="body-l reveal" style={{ "--stagger": 2 }}>We&apos;re preparing articles on IBM Maximo, enterprise integration, AI and our products. Check back soon.</p>
          </div>
        )}
      </section>

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
