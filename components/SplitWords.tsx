import { Fragment } from "react";

type Props = { as?: "h1" | "h2"; className?: string; lines: string[] };

export default function SplitWords({ as: Tag = "h1", className, lines }: Props) {
  let i = 0;
  return (
    <Tag className={className}>
      {lines.map((line, li) => (
        <Fragment key={li}>
          {li > 0 && <br />}
          {line.split(/\s+/).filter(Boolean).map((word, wi) => (
            <Fragment key={wi}>
              {wi > 0 && " "}
              <span className="word"><span style={{ "--i": i++ }}>{word}</span></span>
            </Fragment>
          ))}
        </Fragment>
      ))}
    </Tag>
  );
}
