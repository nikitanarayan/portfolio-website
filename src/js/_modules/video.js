export default class Video {
  constructor() {
    this.init();
    this.interval = null;
    this.feed = null;
  }

  init() {
    $(".js-playVideo")
      .off("click")
      .on("click", (e) => {
        const block = $(e.currentTarget).parents(".js-mappingVideo").length
          ? $(".js-mappingBlock.active")
          : $(e.currentTarget).parents(".js-mappingBlock");
        if ($(block).hasClass("playing")) {
          this.pauseVideo(block);
        } else {
          this.playVideo(block);
        }
      });

    $(".js-playVideoInitial")
      .off("click")
      .on("click", (e) => {
        const block = $(".js-videoBlock");
        console.log(block);
        if ($(block).hasClass("playing")) {
          this.pauseVideoInitial(block);
        } else {
          this.playVideoInitial(block);
        }
      });

    $(".js-closeVideo")
      .off("click")
      .on("click", (e) => {
        this.stopVideo();
      });

    $(".js-mappingVideo")
      .off("click")
      .on("click", (e) => {
        if (!this.clickTarget(e, "js-mappingVideoInner", "js-mappingVideoFooter")) {
          this.stopVideo();
        }
      });
  }

  stopVideo() {
    clearInterval(this.interval);
    this.interval = null;
    this.feed.pause();
    this.feed = null;
    $(".js-mappingBlock").removeClass("playing paused active");
    $(".js-mappingVideo").remove();
    $(".js-videoProgress").text("00:00");
  }

  pauseVideo(block) {
    this.feed.pause();
    $(block).removeClass("playing").addClass("paused");
    $(".js-mappingVideo").removeClass("playing").addClass("paused");
  }

  playVideo(block) {
    if (!$(block).hasClass("active")) {
      const video = $(block).find(".js-videoURL").data("video");
      const poster = $(block).find(".js-mappingPoster").attr("src");
      const length = $(block).find(".js-mappingLength").text();
      $(".js-mappingVideo").remove();
      $(".js-mappingInner").append(
        `<div class="mapping__video playing js-mappingVideo">
          <div class="js-mappingVideoInner">
            <div class="mapping__video__inner">
              <video class="mapping__video__source js-videoSource" poster="${poster}">
                <source type="video/mp4" src="${video}" />
              </video>
            </div>
          </div>
          <div class="mapping__video__footer js-mappingVideoFooter">
            <div class="mapping__video__player">
              <div class="mapping__player__inner js-playVideo">
                <div class="play"></div>
              </div>
              <div class="mapping__progress">
                <span class="js-videoProgress">00:00</span> <span>/</span> <span class="mapping__length">${length}</span>
              </div>
            </div>
            <div class="mapping__buttons">
              <div class="mapping__fullscreen">
                <span>Fullscreen</span>
              </div>
              <div class="mapping__close js-closeVideo">
                <span>Close</span>
              </div>
            </div>
          </div>
        </div>`
      );
      this.feed = $(".js-videoSource")[0];
      this.addProgress();
    }
    $(".js-mappingBlock").not(block).removeClass("playing paused active");
    $(block).addClass("playing active").removeClass("paused");
    $(".js-mappingVideo").addClass("playing").removeClass("paused");
    this.feed.play();
    setTimeout(() => {
      this.init();
    }, 100);
  }

  playVideoInitial(block) {
    if (!this.feed) {
      this.feed = $(".js-videoSource")[0];
      this.addProgress();
    }
    $(block).addClass("playing").removeClass("paused");
    this.feed.play();
    setTimeout(() => {
      this.init();
    }, 100);
  }

  pauseVideoInitial(block) {
    this.feed.pause();
    $(block).removeClass("playing").addClass("paused");
  }

  addProgress() {
    this.positionProgress();
    this.interval = setInterval(() => {
      this.positionProgress();
    }, 50);
  }

  positionProgress() {
    const start = 0;
    const now = this.feed.currentTime;
    const currentLength = now - start;
    const str = this.getTimer(currentLength);
    $(".js-mappingBlock.active, .js-mappingVideo, .js-videoProgressInitial").find(".js-videoProgress").text(str);
  }

  getTimer(length) {
    let min = parseInt(length / 60);
    if (min < 10) min = "0" + min;
    let sec = parseInt(length % 60);
    if (sec < 10) sec = "0" + sec;
    let str = min + ":" + sec;
    return str;
  }

  clickTarget(e, ...classes) {
    const arr = classes.map((c) => ($(e.target).hasClass(c) || $(e.target).parents().hasClass(c) ? true : false));
    return arr.some((el) => el);
  }
}
