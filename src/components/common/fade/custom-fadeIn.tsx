import { keyframes } from "@emotion/react";

export const customFadeIn = keyframes`
from {
  opacity: 0;
  transform: translateY(10%);
}
to {
  opacity: 1;
  transform: translateY(0);
}
`;
