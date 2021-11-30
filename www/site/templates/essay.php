<?php snippet('head') ?>

<section class="essay content js-content">
  <article class="essay__inner">
    <div class="essay__col essay__col--fixed essay__col--menu">
      <div class="essay__col__inner">
        <ul class="essay__menu">
          <?php foreach ($page->text()->toBlocks()->filter(function ($block) {
            return $block->title()->isNotEmpty();
          }) as $block) : ?>
            <li class="essay__menu__item">
              <a class="js-essayMenuItem" href="#<?= Str::slug($block->title()) ?>"><?= $block->title()->kt() ?></a>
            </li>
          <?php endforeach; ?>
        </ul>
      </div>
    </div>
    <div class="essay__col essay__col--content">
      <div class="essay__text">
        <?php foreach ($page->text()->toBlocks() as $block) : ?>
          <div class="essay__chapter js-essayChapter" id="<?= Str::slug($block->title()) ?>">
            <?php if ($block->title()->isNotEmpty()) : ?>
              <h2 class="essay__title"><?= $block->title()->kt() ?></h2>
              <div class="essay__text__inner">
                <?= $block->text()->kt() ?>
              </div>
            <?php endif; ?>
          </div>
        <?php endforeach; ?>
      </div>
    </div>
    <div class="essay__col essay__col--fixed essay__col--images js-colImages">
      <div class="essay__figures">
        <?php foreach ($page->getFigures() as $image) : ?>
          <div class='essay__figure js-figureItem'>
            <div class="essay__figure__image">
              <img src="<?= $image->url() ?>">
            </div>
            <div class="essay__figure__caption">
              <p>Fig.<?= $image->sort() ?></p>
              <p><?= $image->caption()->kirbytextinline() ?></p>
            </div>
          </div>
        <?php endforeach; ?>
      </div>
    </div>
    <div class="essay__col essay__col--fixed essay__col--glossary js-colGlossary">
      <ul class="essay__glossary">
        <?php foreach ($page->text()->toBlocks() as $block) : ?>
          <?php foreach ($block->glossary()->toStructure() as $definition) : ?>
            <li class="essay__glossary__item js-glossaryItem">
              <?= $definition->text()->kt() ?>
            </li>
          <?php endforeach; ?>
        <?php endforeach; ?>
      </ul>
    </div>
  </article>
</section>

<?php snippet('foot') ?>