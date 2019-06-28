import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import { action } from '@storybook/addon-actions';

import { Button } from './Button';
import { Icon } from './Icon';

const CustomButton = styled.button`
  border: 1px solid green;
  background: lightgreen;
  color: rebeccapurple;
  padding: 1.5em;
  font-size: 1.5em;
`;

const CustomAnchor = styled.a`
  border: 1px solid green;
  background: lightgreen;
  color: rebeccapurple;
  font-size: 1.5em;
`;

function ButtonWrapper(props) {
  return <CustomButton onClick={action('button action click')} {...props} />;
}

storiesOf('Design System|Button', module)
  .addParameters({ component: Button })
  .add('all buttons', () => (
    <div>
      <Button appearance="primary">Primary</Button>
      <Button appearance="secondary">Secondary</Button>
      <Button appearance="tertiary">Tertiary</Button>
      <Button appearance="outline">Outline</Button>
      <Button appearance="primaryOutline">Outline primary</Button>
      <Button appearance="secondaryOutline">Outline secondary</Button>
      <Button appearance="primary" isDisabled>
        Disabled
      </Button>
      <br />
      <Button appearance="primary" isLoading>
        Primary
      </Button>
      <Button appearance="secondary" isLoading>
        Secondary
      </Button>
      <Button appearance="tertiary" isLoading>
        Tertiary
      </Button>
      <Button appearance="outline" isLoading>
        Outline
      </Button>
      <Button appearance="outline" isLoading loadingText="Custom...">
        Outline
      </Button>
      <br />
      <Button appearance="primary" size="small">
        Primary
      </Button>
      <Button appearance="secondary" size="small">
        Secondary
      </Button>
      <Button appearance="tertiary" size="small">
        Tertiary
      </Button>
      <Button appearance="outline" size="small">
        Outline
      </Button>
      <Button appearance="primary" isDisabled size="small">
        Disabled
      </Button>
      <Button appearance="outline" size="small" containsIcon>
        <Icon icon="link" aria-label="Link" />
      </Button>
      <Button appearance="outline" size="small">
        <Icon icon="link" />
        Link
      </Button>
    </div>
  ))
  .add('button wrapper', () => (
    <div>
      <ButtonWrapper>Original Button Wrapper</ButtonWrapper>
      <br />
      <Button ButtonWrapper={ButtonWrapper} appearance="primary">
        Primary
      </Button>
      <Button ButtonWrapper={ButtonWrapper} appearance="secondary">
        Secondary
      </Button>
      <Button ButtonWrapper={ButtonWrapper} appearance="tertiary">
        Tertiary
      </Button>
      <Button ButtonWrapper={ButtonWrapper} appearance="outline">
        Outline
      </Button>
      <Button ButtonWrapper={ButtonWrapper} appearance="primaryOutline">
        Outline primary
      </Button>
      <Button ButtonWrapper={ButtonWrapper} appearance="secondaryOutline">
        Outline secondary
      </Button>
      <Button ButtonWrapper={ButtonWrapper} appearance="primary" isDisabled>
        Disabled
      </Button>
      <br />
      <Button ButtonWrapper={ButtonWrapper} appearance="primary" isLoading>
        Primary
      </Button>
      <Button ButtonWrapper={ButtonWrapper} appearance="secondary" isLoading>
        Secondary
      </Button>
      <Button ButtonWrapper={ButtonWrapper} appearance="tertiary" isLoading>
        Tertiary
      </Button>
      <Button ButtonWrapper={ButtonWrapper} appearance="outline" isLoading>
        Outline
      </Button>
      <Button ButtonWrapper={ButtonWrapper} appearance="outline" isLoading loadingText="Custom...">
        Outline
      </Button>
      <br />
      <Button ButtonWrapper={ButtonWrapper} appearance="primary" size="small">
        Primary
      </Button>
      <Button ButtonWrapper={ButtonWrapper} appearance="secondary" size="small">
        Secondary
      </Button>
      <Button ButtonWrapper={ButtonWrapper} appearance="tertiary" size="small">
        Tertiary
      </Button>
      <Button ButtonWrapper={ButtonWrapper} appearance="outline" size="small">
        Outline
      </Button>
      <Button ButtonWrapper={ButtonWrapper} appearance="primary" isDisabled size="small">
        Disabled
      </Button>
      <Button ButtonWrapper={ButtonWrapper} appearance="outline" size="small" containsIcon>
        <Icon icon="link" aria-label="Link" />
      </Button>
      <Button ButtonWrapper={ButtonWrapper} appearance="outline" size="small">
        <Icon icon="link" />
        Link
      </Button>
    </div>
  ))

  .add('anchor wrapper', () => (
    <div>
      <CustomAnchor href="http://storybook.js.org">Original Anchor Wrapper</CustomAnchor>
      <br />
      <Button ButtonWrapper={CustomAnchor} appearance="primary" href="http://storybook.js.org">
        Primary
      </Button>
      <Button ButtonWrapper={CustomAnchor} appearance="secondary" href="http://storybook.js.org">
        Secondary
      </Button>
      <Button ButtonWrapper={CustomAnchor} appearance="tertiary" href="http://storybook.js.org">
        Tertiary
      </Button>
      <Button ButtonWrapper={CustomAnchor} appearance="outline" href="http://storybook.js.org">
        Outline
      </Button>
      <Button
        ButtonWrapper={CustomAnchor}
        appearance="primaryOutline"
        href="http://storybook.js.org"
      >
        Outline primary
      </Button>
      <Button
        ButtonWrapper={CustomAnchor}
        appearance="secondaryOutline"
        href="http://storybook.js.org"
      >
        Outline secondary
      </Button>
      <Button
        ButtonWrapper={CustomAnchor}
        appearance="primary"
        isDisabled
        href="http://storybook.js.org"
      >
        Disabled
      </Button>
      <br />
      <Button
        ButtonWrapper={CustomAnchor}
        appearance="primary"
        isLoading
        href="http://storybook.js.org"
      >
        Primary
      </Button>
      <Button
        ButtonWrapper={CustomAnchor}
        appearance="secondary"
        isLoading
        href="http://storybook.js.org"
      >
        Secondary
      </Button>
      <Button
        ButtonWrapper={CustomAnchor}
        appearance="tertiary"
        isLoading
        href="http://storybook.js.org"
      >
        Tertiary
      </Button>
      <Button
        ButtonWrapper={CustomAnchor}
        appearance="outline"
        isLoading
        href="http://storybook.js.org"
      >
        Outline
      </Button>
      <Button
        ButtonWrapper={CustomAnchor}
        appearance="outline"
        isLoading
        loadingText="Custom..."
        href="http://storybook.js.org"
      >
        Outline
      </Button>
      <br />
      <Button
        ButtonWrapper={CustomAnchor}
        appearance="primary"
        size="small"
        href="http://storybook.js.org"
      >
        Primary
      </Button>
      <Button
        ButtonWrapper={CustomAnchor}
        appearance="secondary"
        size="small"
        href="http://storybook.js.org"
      >
        Secondary
      </Button>
      <Button
        ButtonWrapper={CustomAnchor}
        appearance="tertiary"
        size="small"
        href="http://storybook.js.org"
      >
        Tertiary
      </Button>
      <Button
        ButtonWrapper={CustomAnchor}
        appearance="outline"
        size="small"
        href="http://storybook.js.org"
      >
        Outline
      </Button>
      <Button
        ButtonWrapper={CustomAnchor}
        appearance="primary"
        isDisabled
        size="small"
        href="http://storybook.js.org"
      >
        Disabled
      </Button>
      <Button
        ButtonWrapper={CustomAnchor}
        appearance="outline"
        size="small"
        containsIcon
        href="http://storybook.js.org"
      >
        <Icon icon="link" aria-label="Link" />
      </Button>
      <Button
        ButtonWrapper={CustomAnchor}
        appearance="outline"
        size="small"
        href="http://storybook.js.org"
      >
        <Icon icon="link" />
        Link
      </Button>
    </div>
  ));
