declare namespace JSX {
  interface HtmlTag {
    _?: string;
  }
  // add svg to the existing HTMLAttributes
  interface IntrinsicElements {
    circle: HtmlTag;
    defs: HtmlTag;
    g: HtmlTag;
    path: HtmlTag;
    pattern: HtmlTag;
    rect: HtmlTag;
    svg: HtmlTag;
    text: HtmlTag;
    use: HtmlTag;
  }
}
