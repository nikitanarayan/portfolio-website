export default class Video {
  constructor() {
    this.init();
  }

  init() {
    $(".js-playVideo").on("click", (e) => {
      const block = $(e.currentTarget).parents(".js-mappingBlock");
      if ($(block).hasClass("playing")) {
        this.stopVideo(block);
      } else {
        this.playVideo(block);
      }
    });
  }

  playVideo(block) {
    const video = $(block).find(".js-videoURL").data("video");
    const poster = $(block).find(".js-mappingPoster").attr("src");
    const length = $(block).find(".js-mappingLength").text();
    $(".js-mappingBlock").not(block).removeClass("playing");
    $(block).addClass("playing");
    $(".js-mappingVideo").remove();
    $(".js-mappingInner").append(
      `<div class="mapping__video js-mappingVideo">
        <div>
          <div class="mapping__video__inner">
            <video class="mapping__video__source" poster="${poster}">
              <source type="video/mp4" src="${video}" />
            </video>
          </div>
        </div>
        <div class="mapping__video__footer">
          <div class="mapping__video__player">
            <div class="mapping__player__inner">
              <div class="js-mappingPlay js-playVideo play"></div>
            </div>
            <div class="mapping__progress">
              <span class="js-mappingProgress">00:00</span> <span>/</span> <span class="mapping__length">${length}</span>
            </div>
          </div>
          <div class="mapping__fullscreen">
            <span>Fullscreen</span>
          </div>
        </div>
      </div>`
    );
  }
}
