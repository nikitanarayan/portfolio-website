import Flickity from "flickity";

export default class Menu {
  constructor() {
    if ($(".js-menu").length) {
      this.initMenu();
    }
  }

  initMenu() {
    const active = $(".js-menuItem.active").first();
    const index = $(".js-menuItem").index(active);

    var slideOptions = {
      cellSelector: ".js-menuItem",
      cellAlign: "center",
      setGallerySize: true,
      contain: true,
      wrapAround: true,
      freeScroll: true,
      prevNextButtons: false,
      pageDots: false,
      percentPosition: false,
      draggable: true,
      selectedAttraction: 0.05,
      friction: 0.4,
      initialIndex: index,
      on: {
        ready: function () {
          $(".js-menu").css({ opacity: 1 });
        },
      },
    };

    $(".js-menu").each((i, el) => {
      this.initFlickity(el, slideOptions);
    });
  }

  initFlickity(element, options) {
    const carousel = new Flickity($(element)[0], options);
    carousel.resize();

    $(".js-menuPrev").on("click", () => {
      const allCells = carousel.cells;
      const cells = allCells.filter((i) => !$(i.element).hasClass("js-menuSeparator"));
      const index = cells.findIndex((i) => $(i.element).hasClass("is-selected"));
      const prevIndex = index == 0 ? cells.length - 1 : index - 1;
      const prev = cells[prevIndex];
      const realPrevIndex = allCells.indexOf(prev);
      const total = cells.length / 2;
      const adjustedCount = prevIndex + 1 > total ? prevIndex + 1 - total : prevIndex + 1;
      const count = adjustedCount < 10 ? "0" + adjustedCount : adjustedCount;
      carousel.selectCell(realPrevIndex);
      $(".js-headerCount").text(count);
    });

    $(".js-menuNext").on("click", () => {
      const allCells = carousel.cells;
      const cells = allCells.filter((i) => !$(i.element).hasClass("js-menuSeparator"));
      const index = cells.findIndex((i) => $(i.element).hasClass("is-selected"));
      const nextIndex = index == cells.length - 1 ? 0 : index + 1;
      const next = cells[nextIndex];
      const realNextIndex = allCells.indexOf(next);
      const total = cells.length / 2;
      const adjustedCount = nextIndex + 1 > total ? nextIndex + 1 - total : nextIndex + 1;
      const count = adjustedCount < 10 ? "0" + adjustedCount : adjustedCount;
      carousel.selectCell(realNextIndex);
      $(".js-headerCount").text(count);
    });
  }
}
