export default class CardItem {
  constructor(key, visibleContent, style) {
    this.key = key;
    this.visibleContent = visibleContent;
    this.style = style;
    this.isFlipped = false;
    this.visible = true;
  }
}
