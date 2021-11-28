# react-highlight  [![Tests CI](https://github.com/zekroTJA/react-highlight/actions/workflows/tests.yml/badge.svg)](https://github.com/zekroTJA/react-highlight/actions/workflows/tests.yml) [![](https://img.shields.io/npm/v/@zekro/react-highlight.svg)](https://www.npmjs.com/package/@zekro/react-highlight)

This library adds a component to highlight keyword occurences in text.

![](https://user-images.githubusercontent.com/16734205/143767608-7bcbaddc-3106-44e6-aa95-5c6c85ade38e.png)  
![](https://user-images.githubusercontent.com/16734205/143767609-781b8b08-2cbf-4ffb-b895-d005b628598d.png)

## Usage

```
npm install --save @zekro/react-highlight
```

This is a simple example using the `Highlight` component.

> App.tsx
```tsx
import React from 'react';
import { Highlight, Provider } from '@zekro/react-highlight';

export const App: React.FC = () => {
  return (
    <div>
      <Highlight
        content="Hey, this is a demo!"
        keywords={['demo', 'hey']}
      ></Highlight>
    </div>
  );
};
```

If you want to propagate keywords into multiple sub-components containing `Highlight` components, you can use the `Provider` component to do so.

> App.tsx
```tsx
import React from 'react';
import { Highlight, Provider } from '@zekro/react-highlight';

export const App: React.FC = () => {
  return (
    <div>
      <Provider
        keywords={['demo', 'hey', 'strong']}
        highlightClassName="my-highlight-class"
      >
        <Highlight content="Hey, this is a demo!"></Highlight>
        <br />
        <strong>
          <Highlight content="And this is some strong content!"></Highlight>
        </strong>
      </Provider>
    </div>
  );
};
```

## Storybook

You can also try around yourself with the components using the provided storybook. Just clone the repository, install the dependencies and start the storybook.

```
$ git clone https://github.com/zekroTJA/react-highlight.git .
$ npm install
$ npm start
```