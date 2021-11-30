import "./_lib/modernizr";
import "../scss/application.scss";
import jquery from "jquery";

window.$ = window.jQuery = jquery;

import Website from "./_modules/website";
import Home from "./_modules/home";
import Menu from "./_modules/menu";
import Essay from "./_modules/essay";
import Video from "./_modules/video";
import Maps from "./_modules/maps";

$(function () {
  new Website();
  new Home();
  new Menu();
  new Essay();
  new Video();
  new Maps();
});
