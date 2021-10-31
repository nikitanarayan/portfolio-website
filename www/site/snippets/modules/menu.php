<section class="menu">
  <div class="menu__inner js-menu">
    <?php
    $last = $site->children()->listed()->last();
    foreach ($site->children()->listed() as $menu) snippet('modules/menuItem', ['menu' => $menu, 'last' => $last]);
    foreach ($site->children()->listed() as $menu) snippet('modules/menuItem', ['menu' => $menu, 'last' => $last]);
    ?>
  </div>
</section>