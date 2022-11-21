(function ($, Drupal) {

  "use strict";

  Drupal.behaviors.zirconEduModal = {
    attach: function (context, settings) {
      // if($(context).fi)
      // console.log($(context).find('.edu-modal').css("display", "block"));
      $(context).find('.colorbox-inline.cboxElement').once().click(function(e){
        let eduHref = $(e.target).parents('.vidStrok').find('.edu-modal__link').attr('href');
        let eduImg = $(e.target).parents('.vidStrok').find('.edu-modal__icon');
        console.log(eduImg.attr('src', 'http://mini.s-shot.ru/1024x768/PNG/1024/Z80/?' + eduHref));
      });
    }
  };

})(jQuery, Drupal);
