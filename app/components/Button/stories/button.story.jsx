import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import Button from '../button.jsx';

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')} label="Teste" />
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')} label="😀 😎 👍 💯" />
  ));
