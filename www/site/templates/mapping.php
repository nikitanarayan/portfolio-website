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
                <div class="js-mappingPlay play"></div>
              </div>
              <div class="mapping__progress">
                <span class="js-mappingProgress">00:00</span> <span>/</span> <span class="mapping__length js-mappingLength"><?= $block->length() ?></span>
              </div>
            </div>
          <?php endif; ?>
          <div class="mapping__text"><?= $block->text()->kt() ?></div>
        </div>
      <?php endforeach; ?>
    </div>
    <div class="mapping__col mapping__col--map mapping__col--fixed"></div>
  </article>
</section>

<?php snippet('foot') ?>