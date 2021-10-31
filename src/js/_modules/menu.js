import Flickity from "flickity";

export default class Menu {
  constructor() {
    if ($(".js-menu").length) {
      this.initMenu();
    }
  }

  initMenu() {
    var slideOptions = {
      cellSelector: ".js-menuItem",
      cellAlign: "center",
      setGallerySize: true,
      contain: true,
      wrapAround: true,
      prevNextButtons: false,
      pageDots: false,
      percentPosition: false,
      draggable: true,
      selectedAttraction: 0.05,
      friction: 0.4,
      watchCSS: true,
    };

    $(".js-menu").each((i, el) => {
      this.initFlickity(el, slideOptions);
    });
  }

  initFlickity(element, options) {
    const carousel = new Flickity($(element)[0], options);
    carousel.resize();
  }
}
