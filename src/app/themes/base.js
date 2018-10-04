import { keyframes } from 'styled-components';

export default {
  colorHeader: "#ffffff",
  colorMain: "#cdcdcd",
  colorDark: "#222222",
  colorLinkActive: "#ffff00",
  
  rotate360: (
    keyframes`
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    `
  ),

  colorTile: (
    keyframes`
      from {background-color: #ffff00;}
      to {background-color: white;}
    `
  )
};
