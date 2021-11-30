<?php snippet('head') ?>

<section class="data content js-content">
  <article class="data__inner">
    <?php foreach ($page->blocks()->toBlocks() as $block) : ?>
      <div class="data__block">
        <div class="data__col data__col--image">
          <div class="data__image">
            <img src="<?= $block->image()->toFile()->url() ?>">
          </div>
        </div>
        <div class="data__col data__col--text">
          <div class="data__quote"><?= $block->quote()->kt() ?></div>
          <div class="data__text"><?= $block->text()->kt() ?></div>
          <div class="data__source">Source: <?= $block->quote()->kirbytextinline() ?></div>
        </div>
      </div>
    <?php endforeach; ?>
  </article>
</section>

<?php snippet('foot') ?>