import styled, { keyframes } from 'styled-components'
import type { LoadingProps } from './index.d'


const anim = keyframes`
  33% {
    background: #cacaca;
    box-shadow: -24px 0 #09009B, 24px 0 #cacaca;
  }
  66% {
    background: #09009B;
    box-shadow: -24px 0 #cacaca, 24px 0 #cacaca;
  }
  100% {
    background: #cacaca;
    box-shadow: -24px 0 #cacaca, 24px 0 #09009B;
  }
`

export const LoadingContainer = styled.div<LoadingProps>`
  ${p => p.fullScreen && `
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    backdrop-filter: blur(20px);
    overflow: hidden;
    z-index: 5000;
    display: flex;
    justify-content: center;
    align-items: center;
  `};
`

export const StyledLoading = styled.span`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  display: block;
  position: relative;
  margin: 15px auto;
  background: #cacaca;
  box-shadow: -24px 0 #cacaca, 24px 0 #cacaca;
  box-sizing: border-box;
  animation: ${anim} 2s linear infinite;
`
