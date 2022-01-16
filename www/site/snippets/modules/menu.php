<section class="menu js-menuContainer">
  <div class="menu__inner js-menu" style="opacity: 0">
    <?php
    $last = $site->children()->listed()->filterBy('template', '!=', 'annex')->last();
    foreach ($site->children()->listed()->filterBy('template', '!=', 'annex') as $menu) snippet('modules/menuItem', ['menu' => $menu, 'last' => $last]);
    foreach ($site->children()->listed()->filterBy('template', '!=', 'annex') as $menu) snippet('modules/menuItem', ['menu' => $menu, 'last' => $last]);
    ?>
  </div>
</section>