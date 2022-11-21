(function ($, Drupal) {

  "use strict";

  Drupal.behaviors.zirconSpendEvents = {
    attach: function (context, settings) {

      $('.field--name-field-spend-events-age-1-4 .spend-events__list .spend-events__item').css("display", "none");
      let numberPage = 0;

      $('.field--name-field-spend-events-age-1-4 .spend-events__list .spend-events__item').once().each(function(index){

        let spendIndex = index + 1;

        if(spendIndex % 3 == 0){
          console.log(spendIndex);
          numberPage++;
          console.log(numberPage);
          $('.field--name-field-spend-events-age-1-4').append('<li class="pager-spend__item">' + numberPage + '</li>');
        }
      });
      $('.field--name-field-spend-events-age-1-4 .pager__item').once().wrapAll('<ul class="pager-spend">');

      $(".pager-spend__item").once().click(function(e) {

        let curentPosition = $(this).text() - 1;
        console.log(curentPosition);

        $('.field--name-field-spend-events-age-1-4 .spend-events__list .spend-events__item').slice(curentPosition).css("display", "block");

      });
    }

  };

})(jQuery, Drupal);
