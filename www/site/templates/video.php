<?php snippet('head') ?>

<section class="video content">
  <article class="video__inner js-mappingInner">
    <div class="video__col video__col--video video__col--fixed js-videoBlock">
      <div>
        <div class="video__col__inner">
          <video class="video__source js-videoSource" poster="<?= $page->files()->template('image')->first()->url() ?>">
            <source type="video/mp4" src="<?= $page->files()->template('video')->first()->url() ?>" />
          </video>
        </div>
      </div>
      <div class="video__footer">
        <div class="video__player">
          <div class="video__player__inner js-playVideoInitial">
            <div class="play"></div>
          </div>
          <div class="video__progress js-videoProgressInitial">
            <span class="js-videoProgress">00:00</span> <span>/</span> <span class="video__length"><?= $page->length() ?></span>
          </div>
        </div>
        <div class="video__fullscreen">
          <span>Fullscreen</span>
        </div>
      </div>
    </div>
    <div class="video__col video__col--text">
      <div class="video__text"><?= $page->text()->kt() ?></div>
    </div>
  </article>
</section>

<?php snippet('foot') ?>