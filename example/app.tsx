import * as React from 'react';
import { useState } from 'react';
import {GHCorner} from 'react-gh-corner';
import Button from '@atlaskit/button';
import {AppWrapper, BlanketContent, GlobalStyles} from './styled';
import { Blanket } from '../src';

const repoUrl = 'https://github.com/zzarcon/react-blanket';

const App = () => {
  const [isBlanketVisible, setIsBlanketVisible] = useState(false);
  const showBlanket = () => setIsBlanketVisible(true);
  const hideBlanket = () => setIsBlanketVisible(false);

  return (
    <AppWrapper>
      <GlobalStyles />
      <GHCorner openInNewTab href={repoUrl} />
      <Button appearance="primary" onClick={showBlanket}>Open blanket 👻</Button>
      {isBlanketVisible && (
        <Blanket onClose={hideBlanket}>
          <BlanketContent>
            <Button appearance="danger" onClick={hideBlanket}>Close 🙀</Button>
          </BlanketContent>
        </Blanket>
      )}
    </AppWrapper>
  )
}

export default App