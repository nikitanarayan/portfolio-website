<?php

return [
  'glossary' => [
    'attr' => [
      'text'
    ],
    'html' => function ($tag) {
      $val = $tag->text;
      $index = $tag->value;
      return "<span class='glossary__item' data-index='$index'><span class='glossary__item__title js-glossaryCTA'>$val</span><span class='glossary__item__text js-glossaryText'></span></span>";
    }
  ],

  'fig' => [
    'html' => function ($tag) {
      $val = $tag->value;
      $image = $tag->parent()->files()->template('image')->findBy('sort', $val);
      $url = $image->url();
      $caption = $image->caption();
      return "<span class='figure' data-index='$val'><span class='figure__val js-figureCTA'>[Fig.$val]</span><span class='figure__mobile'><span class='figure__mobile__image'><img src='$url'></span><span class='figure__mobile__caption'><span>Fig.$val</span><span>$caption</span></span></span></span>";
    }
  ]
];
