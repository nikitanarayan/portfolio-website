<header class="header js-header">
  <div class="header__section header__section--left">
    <h1 class="header__title"><a href="<?= $site->url() ?>"><?= $site->title() ?></a></h1>
  </div>
  <div class="header__section header__section--center">
    <div class="header__arrow header__arrow--w js-menuPrev">
      <svg viewBox="0 0 19 7" xmlns="http://www.w3.org/2000/svg">
        <path d="m4.15 0h.77c-.4.77-.7 1.3-.9 1.61s-.55.77-1.02 1.39h16v1h-16a11.19 11.19 0 0 1 2 3h-.84a18.76 18.76 0 0 0 -2.23-2.13 10.37 10.37 0 0 0 -1.93-1.19v-.44a8.62 8.62 0 0 0 1.85-1.1 19.67 19.67 0 0 0 2.3-2.14z" />
      </svg>
    </div>
    <div class="header__count">
      <span class="js-headerCount"><?= toDigit($page->num(), 2) ?></span>/<?= toDigit($site->children()->listed()->count(), 2) ?>
    </div>
    <div class="header__arrow header__arrow--e js-menuNext">
      <svg viewBox="0 0 19 7" xmlns="http://www.w3.org/2000/svg">
        <path d="m14.85 7h-.77c.4-.77.7-1.3.9-1.61a16.55 16.55 0 0 1 1.02-1.39h-16v-1h16a11.36 11.36 0 0 1 -2-3h.79a20.55 20.55 0 0 0 2.23 2.13 10.37 10.37 0 0 0 1.98 1.19v.44a8.22 8.22 0 0 0 -1.85 1.1 18.83 18.83 0 0 0 -2.3 2.14z" />
      </svg>
    </div>
  </div>
  <div class="header__section header__section--right">
    <a class="header__about" href="<?= page('about')->url() ?>">
      <svg viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
        <path d="m7 0a7 7 0 1 0 7 7 7 7 0 0 0 -7-7zm.6 11h-1.2v-5.41h1.2zm0-6.89h-1.2v-1.11h1.2z" />
      </svg>
    </a>
  </div>
</header>