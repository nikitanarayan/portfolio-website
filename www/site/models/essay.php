<?php

class EssayPage extends Page
{
  public function getFigures()
  {
    $figuresInText = [];
    $allFigures = $this->text()->toBlocks()->map(function ($block) {
      $text = $block->text()->value();
      preg_match_all("/\(fig: (\d+)\)/", $text, $matches);
      if (array_key_exists(1, $matches)) return $matches[1];
    })->values();
    array_walk_recursive($allFigures, function ($v) use (&$figuresInText) {
      $figuresInText[] = $v;
    });
    $images = new Files();
    foreach ($figuresInText as $fig) $images->add($this->files()->findBy('sort', $fig));
    return $images;
  }
}
