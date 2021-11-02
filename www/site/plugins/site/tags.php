<?php

return [
  'glossary' => [
    'attr' => [
      'text'
    ],
    'html' => function ($tag) {
      $val = $tag->text;
      $index = $tag->value;
      return "<span class='glossary__item js-glossaryCTA' data-index='$index'>$val</span>";
    }
  ],

  'fig' => [
    'html' => function ($tag) {
      $val = $tag->value;
      return "<span class='figure js-figureCTA' data-index='$val'>[Fig.$val]</span>";
    }
  ]
];
