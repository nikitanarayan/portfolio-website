import mapboxgl from "mapbox-gl/dist/mapbox-gl.js";

export default class Maps {
  constructor() {
    this.init();
    this.initCaption();

    $(window).on("resize", () => {
      this.toggleZoom();
    });
  }

  init() {
    mapboxgl.accessToken = "pk.eyJ1Ijoibm5pa2l0YSIsImEiOiJjazdtYzV2MDYwMzliM2dubnVubnJuMTRrIn0.6KqRhtWgMc_nGwMPAqmstQ";
    this.state = {};
    if ($(".js-map").length) this.createLayers();
  }

  initPopups() {
    this.map.on("mousemove", (e) => {
      const pageX = e.point.x;
      const pageY = e.point.y;
      const features = this.map.queryRenderedFeatures(e.point, {
        layers: this.layers.map((i) => i.id),
      });
      if (features.length) {
        $(".js-mapPopup")
          .text(features[0].properties.Name)
          .css({
            display: "block",
            top: pageY,
            left: pageX,
            backgroundColor: this.layers.find((i) => i.id == features[0].layer.id).color,
          });
      } else {
        this.resetState();
      }
    });

    this.map.on("drag", () => {
      this.resetState();
    });
  }

  resetState() {
    $(".js-mapPopup").text("").removeAttr("style");
  }

  initCaption() {
    $(".js-mapCaptionTitle").on("click", (e) => {
      if ($(".js-mapCaption").hasClass("active")) {
        this.hideCaption();
      } else {
        this.showCaption();
      }
    });
  }

  showCaption() {
    $(".js-mapCaptionText").text("Hide legend");
    $(".js-mapCaption").addClass("active");
    $(".js-mapCaptionItem").css({ opacity: 0 });
    $(".js-mapCaptionBody").slideDown(200, () => {
      $(".js-mapCaptionItem").animate({ opacity: 1 }, 200);
    });
  }

  hideCaption() {
    $(".js-mapCaptionText").text("Show legend");
    $(".js-mapCaption").removeClass("active");
    $(".js-mapCaptionItem").animate({ opacity: 0 }, 200, () => {
      $(".js-mapCaptionBody").slideUp(200);
    });
  }

  createLayers() {
    fetch(window.location.href + ".json", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((response) => {
        this.layers = response;
        this.map = new mapboxgl.Map({
          container: $(".js-map")[0],
          style: "mapbox://styles/nnikita/ckrlw73ap20dw17lpearimoqx",
          maxZoom: 20,
          minZoom: 15,
        });
        this.toggleZoom();
        this.initPopups();
      });
  }

  toggleZoom() {
    if (this.map) {
      if (window.matchMedia("(min-width: 800px)").matches) {
        this.map.scrollZoom.enable();
      } else {
        this.map.scrollZoom.disable();
      }
    }
  }
}
