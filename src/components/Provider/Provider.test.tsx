import { Highlight } from '../..';
import { render } from '@testing-library/react';
import { Provider } from '.';

describe('Test Highlight inside Provider', () => {
  it('renders Highlight with occurrences inside Provider', () => {
    const content =
      'This is the inner content of this Highlight with keyword occurrences.';
    const keywords = ['keyword occur', 'inner content', 'highlight'];
    const res = render(
      <Provider keywords={keywords}>
        <Highlight content={content} />
      </Provider>
    );

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
      <Provider keywords={keywords} highlightClassName={className}>
        <Highlight content={content} />
      </Provider>
    );
    expect(
      (Array.from(res.container.childNodes)[0] as HTMLElement).className
    ).toEqual(className);
  });
});

export {};
