<section class="menu js-menuContainer">
  <div class="menu__inner js-menu" style="opacity: 0">
    <?php
    $last = $site->children()->listed()->last();
    foreach ($site->children()->listed() as $menu) snippet('modules/menuItem', ['menu' => $menu, 'last' => $last]);
    foreach ($site->children()->listed() as $menu) snippet('modules/menuItem', ['menu' => $menu, 'last' => $last]);
    ?>
  </div>
</section>