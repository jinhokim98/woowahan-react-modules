declare module '*.css' {
  const content: { [className: string]: string };
  export = content;
}

declare module '*.svg' {
  const src: string;
  export = src;
}
