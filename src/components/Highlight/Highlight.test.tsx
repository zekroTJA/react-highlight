import { Highlight } from '../..';
import { render } from '@testing-library/react';

describe('Test Highlight', () => {
  it('renders Highlight without occurences', () => {
    const content = 'inner content';
    const res = render(<Highlight content={content} />);
    expect(res.container.innerHTML).toBe(`<span>${content}</span>`);
  });

  it('renders Highlight with occurences', () => {
    const content =
      'This is the inner content of this Highlight with keyword occurences.';
    const keywords = ['keyword occur', 'inner content', 'highlight'];
    const res = render(<Highlight content={content} keywords={keywords} />);

    expect(res.container.childElementCount).toEqual(keywords.length * 2 + 1);

    const children = Array.from(res.container.childNodes);

    const joinedContent = children.map((node) => node.textContent).join('');
    expect(joinedContent).toEqual(content);

    [children[1], children[3], children[5]].forEach((child) =>
      expect((child as HTMLElement).className).toEqual('highlight-highlighted')
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

export {};
