import * as React from 'react';
import { SVGProps } from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgRedo = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    viewBox="0 0 48 49"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-labelledby={titleId}
    {...props}
  >
    <path
      opacity="0.7"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M44.8951 32.7893L44.9232 32.7985C41.1686 44.354 28.7572 50.678 17.2016 46.9233C5.64604 43.1687 -0.677883 30.7573 3.07676 19.2017C6.83139 7.64612 19.2428 1.3222 30.7984 5.07684L28.9967 10.6219C20.5035 7.86232 11.3814 12.5103 8.62182 21.0034C5.86223 29.4965 10.5102 38.6187 19.0033 41.3783C27.1423 44.0228 35.8589 39.8647 39.0002 32.039C39.0001 32.026 39 32.0131 39 32.0001C39 30.3432 40.3431 29.0001 42 29.0001C43.6569 29.0001 45 30.3432 45 32.0001C45 32.2732 44.9635 32.5378 44.8951 32.7893Z"
      fill="#96D07C"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M35.5522 8.1696C36.1493 7.8013 36.1493 7.1987 35.5522 6.8304L24.7327 0.157202C24.5597 0.0504998 24.3959 0 24.2504 0C23.8935 0 23.6471 0.303585 23.6471 0.826783V14.1732C23.6471 14.6964 23.8936 15 24.2504 15C24.3959 15 24.5597 14.9495 24.7327 14.8428L35.5522 8.1696Z"
      fill="#96D07C"
    />
  </svg>
);

export default SvgRedo;
