export default class Home {
  constructor() {
    this.getInnerHeight();

    $(window).on("resize", () => {
      this.getInnerHeight();
    });
  }

  getInnerHeight() {
    const height = $(".js-header").outerHeight() + $(".js-menuContainer").outerHeight();
    $("html").css({ "--top-height": height + "px" });
  }
}
