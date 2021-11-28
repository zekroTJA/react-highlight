import React from 'react';
import { HighlightContext } from '../Provider';
import { GlobalProps } from '../../models/props';
import { memo, useContext } from 'react';
import './Highlight.css';

interface Props extends GlobalProps {
  content: string;
}

interface Occurence {
  start: number;
  end: number;
  raw: string;
}

function findOccurrences(
  content: string,
  contentLower: string,
  keyword: string
): Occurence[] {
  keyword = keyword.toLocaleLowerCase();

  const occ: Occurence[] = [];

  for (
    let i = 0;
    (i = contentLower.indexOf(keyword, i)) > -1;
    i += keyword.length
  ) {
    occ.push({
      start: i,
      end: i + keyword.length,
      raw: content.substr(i, keyword.length),
    });
  }

  return occ;
}

function replaceOccurrences(
  content: string,
  keywords: string[],
  wrapHighlight: (content: string, id: number) => JSX.Element
): JSX.Element[] {
  const res: JSX.Element[] = [];

  const contentLower = content.toLocaleLowerCase();

  const occurrences = keywords
    .map((keyword) =>
      findOccurrences(content, contentLower, keyword.toLocaleLowerCase())
    )
    .flat()
    .sort((a, b) => a.start - b.start);

  let i = 0;
  let id = 0;
  for (const occ of occurrences) {
    if (occ.start !== 0)
      res.push(<span key={id++}>{content.substring(i, occ.start)}</span>);
    res.push(wrapHighlight(occ.raw, id++));
    i = occ.end;
  }
  if (i != content.length)
    res.push(<span key={id++}>{content.substr(i)}</span>);

  return res;
}

const _Highlight: React.FC<Props> = ({
  content,
  keywords,
  highlightClassName,
}) => {
  const ctx = useContext(HighlightContext);

  keywords = (keywords ?? []).concat(ctx?.keywords ?? []);
  highlightClassName = ctx?.highlightClassName ?? highlightClassName;

  return (
    <>
      {replaceOccurrences(content, keywords ?? [], (c, id) => (
        <span
          key={id}
          className={highlightClassName ?? 'highlight-highlighted'}
        >
          {c}
        </span>
      ))}
    </>
  );
};

export const Highlight = memo(_Highlight);
