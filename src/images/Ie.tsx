import * as React from 'react';
import { SVGProps } from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgIe = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="1.32 -0.605 220 220"
    xmlSpace="preserve"
    role="img"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="#1EBBEE"
      d="M218.64 114.331c0-16.969-4.388-32.91-12.08-46.762 32.791-74.213-35.137-63.343-38.918-62.603-14.392 2.816-27.705 7.337-39.986 13.068a97.198 97.198 0 0 0-5.469-.158c-45.833 0-84.198 31.968-94.018 74.823 24.157-27.101 41.063-38.036 51.188-42.412a229.998 229.998 0 0 0-4.754 4.375c-.519.489-1.018.985-1.528 1.477-1.026.987-2.05 1.975-3.05 2.972-.595.593-1.174 1.191-1.76 1.788-.888.903-1.772 1.805-2.639 2.713-.614.645-1.215 1.292-1.818 1.938-.81.866-1.613 1.733-2.402 2.603-.613.676-1.216 1.352-1.818 2.03-.748.842-1.488 1.684-2.22 2.528-.605.7-1.207 1.4-1.801 2.101-.693.818-1.377 1.636-2.054 2.454-.6.724-1.196 1.447-1.782 2.17-.634.782-1.254 1.563-1.873 2.343-.601.756-1.2 1.511-1.786 2.266-.558.719-1.1 1.435-1.646 2.152-.615.81-1.236 1.62-1.837 2.426-.429.577-.841 1.148-1.262 1.723a299.19 299.19 0 0 0-10.461 15.235 308.393 308.393 0 0 0-2.41 3.821l-.128.206a311.086 311.086 0 0 0-2.279 3.738l-.078.13a311.028 311.028 0 0 0-5.481 9.506c-8.687 15.743-12.916 26.742-13.099 27.396-27.433 98.072 58.184 56.656 70.131 50.475 12.864 6.355 27.346 9.932 42.666 9.932 41.939 0 77.623-26.771 90.904-64.156h-50.68c-7.499 12.67-21.936 21.25-38.521 21.25-24.302 0-44-18.412-44-41.125h137.96a97.54 97.54 0 0 0 .794-12.422h-.005zm-18.018-94.917c8.306 5.606 14.968 14.41 3.527 44.059-10.974-17.647-27.482-31.49-47.104-39.099 8.926-4.311 31.031-13.429 43.577-4.96zm-176.52 181.24c-6.766-6.938-7.961-23.836 6.967-54.628 7.534 21.661 22.568 39.811 42 51.33-9.664 5.318-35.32 17.295-48.967 3.298zm55.571-100.28c.771-22.075 19.983-39.75 43.588-39.75s42.817 17.675 43.589 39.75H79.673z"
    />
  </svg>
);

export default SvgIe;
