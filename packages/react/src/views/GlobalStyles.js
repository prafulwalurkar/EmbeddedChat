import React from 'react';
import { css, Global } from '@emotion/react';
import { useTheme, alpha } from '@embeddedchat/ui-elements';

const useStyles = (colors, theme) => css`
  .ec-embedded-chat * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  .ec-embedded-chat body {
    font-family: ${theme.typography.default.fontFamily};
    font-size: ${theme.typography.default.fontSize}px;
    font-weight: ${theme.typography.default.fontWeightRegular};
  }

  .ec-embedded-chat a {
    color: ${colors.foreground};
  }

  .ec-embedded-chat ::-webkit-scrollbar {
    width: 4px;
    height: 7.7px;
  }

  .ec-embedded-chat ::-webkit-scrollbar-thumb {
    background: ${alpha(colors.primary, 0.5)};
    border-radius: 4px;
  }

  .ec-embedded-chat ::-webkit-scrollbar-thumb:hover {
    background: ${colors.primary};
  }

  .ec-embedded-chat ::-webkit-scrollbar-button {
    display: none;
  }
`;

const GlobalStyles = () => {
  const { theme, colors } = useTheme();
  const styles = useStyles(colors, theme);

  return <Global styles={styles} />;
};

export default GlobalStyles;
