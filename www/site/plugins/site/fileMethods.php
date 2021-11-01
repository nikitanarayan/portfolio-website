<?php

return [
  'getEssayCaption' => function () {
    $number = $this->sort();
    $caption = $this->caption();
    return "Fig.$number<br>$caption";
  }
];
