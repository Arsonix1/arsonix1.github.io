(function ($, Drupal) {

  "use strict";

  Drupal.behaviors.zirconNav_aside = {
    attach: function (context, settings) {
      // $(context).find("#block-osnovnoemenyu .menu > li > a").addClass('use-ajax');

      $(context).find("#block-osnovnoemenyu .menu > li > a").once().click(function () {

        let menu = $(this).closest('#block-osnovnoemenyu .menu');

        if (false == $(this).next().is(':visible')) {
          menu.find('li').removeClass('active');
          menu.find('ul').slideUp();
        }

        $(this).next().slideToggle();
        // $(this).parent().addClass('slide');
      });
    }
  };

})(jQuery, Drupal);
