
import { useEffect, useState } from 'react';
import {
  Close,
  Container, Minimize, TitlebarButton, WrapperBasicIcons
} from './styles';
import { WebviewWindow } from '@tauri-apps/api/window';

export const TitleBar = () => {
  const [appWindow, setAppWindow] = useState<WebviewWindow>()

  async function setupAppWindow() {
    const app = (await import('@tauri-apps/api/window')).appWindow
    setAppWindow(app);
  }

  useEffect(() => {
    setupAppWindow()
  }, []) 

  const handleMinimizeClick = () => appWindow?.minimize();
  const handleMaximizeClick = () => appWindow?.toggleMaximize();
  const handleCloseClick = () => appWindow?.close();
  return (
    <Container data-tauri-drag-region>
      <WrapperBasicIcons >
        <TitlebarButton onClick={handleMinimizeClick}>
          <Minimize />
        </TitlebarButton>
        <TitlebarButton onClick={handleCloseClick}>
          <Close />
        </TitlebarButton>
      </WrapperBasicIcons>
    </Container>
  );
}
