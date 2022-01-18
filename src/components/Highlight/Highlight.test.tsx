import { Highlight } from '../..';
import { render } from '@testing-library/react';

const HIGHLIGHT_CLASSNAME = 'highlight-highlighted';

describe('Test Highlight', () => {
  it('renders Highlight without occurrences', () => {
    const content = 'inner content';
    const res = render(<Highlight content={content} />);
    expect(res.container.innerHTML).toBe(`<span>${content}</span>`);
  });

  it('renders Highlight with occurrences', () => {
    const content =
      'This is the inner content of this Highlight with keyword occurrences.';
    const keywords = ['keyword occur', 'inner content', 'highlight'];
    const res = render(<Highlight content={content} keywords={keywords} />);

    expect(res.container.childElementCount).toEqual(keywords.length * 2 + 1);

    const children = Array.from(res.container.childNodes);

    const joinedContent = children.map((node) => node.textContent).join('');
    expect(joinedContent).toEqual(content);

    [children[1], children[3], children[5]].forEach((child) =>
      expect((child as HTMLElement).className).toEqual(HIGHLIGHT_CLASSNAME)
    );
    [children[0], children[2], children[4], children[6]].forEach((child) =>
      expect((child as HTMLElement).className).toEqual('')
    );
  });

  it('renders Highlight with custom highlight class', () => {
    const content = 'test';
    const keywords = ['test'];
    const className = 'my-class';
    const res = render(
      <Highlight
        content={content}
        keywords={keywords}
        highlightClassName={className}
      />
    );
    expect(
      (Array.from(res.container.childNodes)[0] as HTMLElement).className
    ).toEqual(className);
  });
});

describe('Negative tests', () => {
  it('should be able to handle empty keyword strings [#1]', () => {
    const res = render(
      <Highlight
        content="this is a test"
        keywords={['test', '', null as any as string]}
      />
    );
    const children = Array.from(res.container.childNodes);
    expect(children.length).toEqual(2);
    expect((children[0] as HTMLElement).className).toEqual('');
    expect((children[1] as HTMLElement).className).toEqual(HIGHLIGHT_CLASSNAME);
  });
});

export {};
