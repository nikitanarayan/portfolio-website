<?php snippet('head') ?>

<section class="mapping content">
  <article class="mapping__inner js-mappingInner">
    <div class="mapping__col mapping__col--videos">
      <?php foreach ($page->blocks()->toBlocks() as $block) : ?>
        <div class="mapping__block js-mappingBlock">
          <?php if ($block->video()->toFiles()->count()) : ?>
            <div class="mapping__image js-playVideo js-videoURL" data-video="<?= $block->video()->toFile()->url() ?>">
              <div class="mapping__image__inner">
                <img class="js-mappingPoster" src="<?= $block->poster()->toFile()->url() ?>">
              </div>
            </div>
            <div class="mapping__title">
              <h2><?= $block->title()->kt() ?></h2>
            </div>
            <div class="mapping__player">
              <div class="mapping__player__inner js-playVideo">
                <div class="play"></div>
              </div>
              <div class="mapping__progress">
                <span class="js-videoProgress">00:00</span> <span>/</span> <span class="mapping__length js-mappingLength"><?= $block->length() ?></span>
              </div>
            </div>
          <?php endif; ?>
          <div class="mapping__text"><?= $block->text()->kt() ?></div>
        </div>
      <?php endforeach; ?>
    </div>
    <div class="mapping__col mapping__col--map mapping__col--fixed">
      <div class="map js-mapContainer">
        <div class="map__inner js-map"></div>
        <div class="map__popup js-mapPopup"></div>
      </div>
      <div class="map__caption js-mapCaption">
        <div class="map__caption__title js-mapCaptionTitle">
          <div>
            <div class="js-mapCaptionText">Show legend</div>
            <div class="map__info">
              <svg viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                <path d="m7 0a7 7 0 1 0 7 7 7 7 0 0 0 -7-7zm.6 11h-1.2v-5.41h1.2zm0-6.89h-1.2v-1.11h1.2z" />
              </svg>
            </div>
          </div>
        </div>
        <div class="map__caption__body js-mapCaptionBody">
          <?php foreach ($page->caption()->toStructure() as $caption) : ?>
            <div class="map__caption__item js-mapCaptionItem" style="--color: <?= $caption->color() ?>">
              <span class="map__caption__subtitle"><?= $caption->title()->smartypants() ?></span>
              <span>Number of stores: <?= $caption->numberOfStores()->value() ?></span>
              <span>Commonly sold: <?php e($caption->sold()->isNotEmpty(), $caption->sold(), '/') ?></span>
            </div>
          <?php endforeach; ?>
        </div>
      </div>
    </div>
  </article>
</section>

<?php snippet('foot') ?>