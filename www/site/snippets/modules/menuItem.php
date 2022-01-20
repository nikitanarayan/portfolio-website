<a href="<?= $menu->url() ?>" class="menu__item js-menuItem<?php e($menu->is($page), " active") ?>">
  <div class="menu__text">
    <span class="menu__title"><?= $menu->title()->smartypants() ?></span>
    <?php if ($menu->subtitle()) : ?>
      <span class="menu__subtitle"><?= $menu->subtitle()->smartypants() ?></span>
    <?php endif; ?>
  </div>
  <div class="menu__description js-description"><?= $menu->description()->kt() ?></div>
</a>

<?php if ($menu->is($last)) : ?>
  <div class="menu__separator js-menuSeparator js-menuItem"></div>
<?php endif; ?>