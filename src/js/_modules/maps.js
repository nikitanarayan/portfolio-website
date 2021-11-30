import L from "leaflet";

export default class Maps {
  constructor() {
    this.init();
  }

  init() {
    this.access = {
      maxZoom: 22,
      id: "nnikita/ckrlw73ap20dw17lpearimoqx",
      tileSize: 512,
      zoomOffset: -1,
      accessToken: "pk.eyJ1Ijoibm5pa2l0YSIsImEiOiJjazdtYzV2MDYwMzliM2dubnVubnJuMTRrIn0.6KqRhtWgMc_nGwMPAqmstQ",
    };

    this.popup = {
      closeButton: false,
      className: "map__popup",
    };

    if ($(".js-map").length > 0) this.showMap();
  }

  showMap() {
    const map = L.map($(".js-map")[0]).setView([17.374769, 78.472504], 19);
    L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", this.access).addTo(map);
  }
}
