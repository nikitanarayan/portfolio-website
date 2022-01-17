import gsap from "gsap";

export default class Essay {
  constructor() {
    this.initClick();
    this.initScroll();
    this.initMenu();
  }

  initScroll() {
    this.manualScroll = true;
    this.currentFigure = null;
    this.currentGlossary = null;

    $(window).on("scroll", () => {
      this.checkActiveMenuItem();
      this.checkActive(".js-figureCTA", ".js-colImages", "currentFigure", ".js-figureItem");
      this.checkActive(".js-glossaryCTA", ".js-colGlossary", "currentGlossary", ".js-glossaryItem");
    });

    $(".js-essayScrollFigure").on("scroll", (e) => {
      if (this.manualScroll) this.checkActive(".js-figureItem", ".js-colImages", "currentFigure");
    });

    $(".js-essayScrollGlossary").on("scroll", (e) => {
      if (this.manualScroll) this.checkActive(".js-glossaryItem", ".js-colGlossary", "currentGlossary");
    });

    $(".js-figureItem").on("click", (e) => {
      $(".js-colImages").parent().toggleClass("zoomed");
      if ($(".js-colImages").parent().hasClass("zoomed")) {
        const index = $(".js-figureItem").index(e.currentTarget);
        setTimeout(() => {
          this.scrollToItem(index, ".js-colImages", ".js-figureItem");
        }, 300);
      }
    });
  }

  checkActiveMenuItem() {
    const active = $(".js-essayChapter")
      .filter((i, el) => {
        const top = $(el)[0].getBoundingClientRect().top;
        const bottom = $(el)[0].getBoundingClientRect().bottom;
        const min = $(".js-header").outerHeight() + $(".js-menuContainer").outerHeight() + 1;
        const max = $(window).innerHeight();
        return top < max && bottom > min;
      })
      .get();

    const activeItem = $(active).first();
    $(`.js-essayMenuItem[href="#${$(activeItem).attr("id")}"]`)
      .parent()
      .addClass("active");

    $(".js-essayChapter")
      .not(activeItem)
      .each((i, el) => {
        $(`.js-essayMenuItem[href="#${$(el).attr("id")}"]`)
          .parent()
          .removeClass("active");
      });
  }

  checkActive(items, scrolledCol, globalVar, itemToScrollTo) {
    const active = $(items)
      .filter((i, el) => {
        const top = $(el)[0].getBoundingClientRect().top;
        const bottom = $(el)[0].getBoundingClientRect().bottom;
        const min = $(".js-header").outerHeight() + $(".js-menuContainer").outerHeight() + 1;
        const max = $(window).innerHeight();
        return top < max && bottom > min;
      })
      .get();

    const activeItem = $(items).index($(active).first());
    if (activeItem != this[globalVar]) {
      this[globalVar] = activeItem;
      if (itemToScrollTo) this.scrollToItem(activeItem, scrolledCol, itemToScrollTo);
    }
  }

  initMenu() {
    $(".js-essayMenuItem").on("click", (e) => {
      const id = $(e.currentTarget).attr("href");
      const offset = $(id).offset().top - $(".js-header").outerHeight() - $(".js-menuContainer").outerHeight() - 15;
      $("html, body").animate({ scrollTop: offset }, 300);
      e.preventDefault();
    });
  }

  initClick() {
    $(".js-glossaryCTA")
      .on("mouseenter", (e) => {
        if (window.matchMedia("(min-width: 800px)").matches) {
          const index = $(e.currentTarget).parent().data("index") - 1;
          const item = $(".js-glossaryItem").eq(index);
          $(".js-glossaryItem").not(item).removeClass("active");
          $(item).addClass("active");
          this.scrollToItem(index, ".js-colGlossary", ".js-glossaryItem");
        }
      })
      .on("mouseleave", () => {
        if (window.matchMedia("(min-width: 800px)").matches) {
          $(".js-glossaryItem").removeClass("active");
        }
      })
      .on("click", (e) => {
        if (!window.matchMedia("(min-width: 800px)").matches) {
          if ($(e.currentTarget).hasClass("active")) {
            $(e.currentTarget).removeClass("active").next().html("");
          } else {
            const index = $(e.currentTarget).parent().data("index") - 1;
            const text = $(".js-glossaryItem").eq(index).html();
            $(e.currentTarget).addClass("active").next().html(text);
          }
        }
      });

    $(".js-figureCTA")
      .on("mouseenter", (e) => {
        const index = $(e.currentTarget).parent().data("index") - 1;
        const item = $(".js-figureItem").eq(index);
        $(".js-figureItem").not(item).removeClass("active");
        $(item).addClass("active");
        this.scrollToItem(index, ".js-colImages", ".js-figureItem");
      })
      .on("mouseleave", () => {
        $(".js-figureItem").removeClass("active");
      });
  }

  scrollToItem(index, container, itemToScrollTo) {
    if (index > -1) {
      const item = $(itemToScrollTo).eq(index);
      const offset = $(item).offset().top - $(container).offset().top - 15 + $(container).scrollTop();
      this.manualScroll = false;
      $(container).animate({ scrollTop: offset }, 300, () => {
        this.manualScroll = true;
      });
    }
  }
}
