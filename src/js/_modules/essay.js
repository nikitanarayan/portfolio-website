import gsap from "gsap";

export default class Essay {
  constructor() {
    this.initClick();
    this.initScroll();
    this.initMenu();
  }

  initScroll() {
    const height = $(".js-header").outerHeight() + $(".js-menuContainer").outerHeight();
    const rootMargin = `-${height}px 0px 0px 0px`;
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.addActive(entry);
          } else {
            this.removeActive(entry);
          }
        });
      },
      {
        rootMargin: rootMargin,
        threshold: 0,
      }
    );

    $(".js-essayChapter").each((i, el) => {
      observer.observe($(el)[0]);
    });
  }

  addActive(item) {
    const id = $(item.target).attr("id");
    $(`.js-essayMenuItem[href="#${id}"]`).parent().addClass("active");
  }

  removeActive(item) {
    const id = $(item.target).attr("id");
    $(`.js-essayMenuItem[href="#${id}"]`).parent().removeClass("active");
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
          this.scrollToItem(item, $(".js-colGlossary"));
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
        this.scrollToItem(item, $(".js-colImages"));
      })
      .on("mouseleave", () => {
        $(".js-figureItem").removeClass("active");
      });
  }

  scrollToItem(item, container) {
    const offset = $(item).offset().top - $(item).offsetParent().offset().top - 15;
    const scrollContainer = $(container).children().first();
    gsap.to($(scrollContainer), { y: "-=" + offset, duration: 0.3 });
  }
}
