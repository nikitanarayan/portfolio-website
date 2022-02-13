<?php

return [

  'createDescription' => function () {
    if ($this->description() && $this->description()->isNotEmpty()) :
      return $this->description()->smartypants();
    else :
      return $this->site()->descriptionSEO()->smartypants();
    endif;
  },

  'createTitle' => function () {
    if ($this->template() == 'home') :
      return $this->site()->title()->smartypants();
    elseif ($this->template() == 'error') :
      return $this->site()->title()->smartypants() . ' | This page is not available.';
    else :
      return $this->site()->title()->smartypants() . ' | ' . $this->title()->smartypants();
    endif;
  },

  'createImage' => function () {
    if ($this->images()->count()) :
      $image = $this->images()->sortBy('sort')->first();
    else :
      $image = $this->site()->children()->listed()->first()->images()->sortBy('sort')->first();
    endif;
    return $image->crop(1200, 630, 'center')->url();
  }
];
