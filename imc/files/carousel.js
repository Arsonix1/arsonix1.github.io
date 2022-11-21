(function ($, Drupal) {

  "use strict";
  Drupal.behaviors.zirconCarousel = {
    attach: function (context, settings) {
      /*функция вывода из куки*/
      function init(){
        var fontSize = Cookies.get('fontSize');
        if (fontSize === undefined) {
          fontSize = 'sm';
        }
        changeFontSize(fontSize);

        var backGround = Cookies.get('backGround');
        if (backGround === undefined) {
          backGround = 'nn';
        }
        changeBackGround(backGround);

        var visibiliti = Cookies.get('visibiliti')
        if (visibiliti === undefined) {
          visibiliti = 'off';
        }
        visibilitiBlocksv(visibiliti);

        var changeImage = Cookies.get('changeImage')
        if (changeImage === undefined) {
          changeImage = 'app';
        }
        changeImageMapping(changeImage);

        var clickFontsActiv = Cookies.get('clickFontsActiv')
        if (clickFontsActiv === undefined) {
          clickFontsActiv = 'asf';
        }
        clickFontsActivSV(clickFontsActiv);

        var clickImgActiv = Cookies.get('clickImgActiv')
        if (clickImgActiv === undefined) {
          clickImgActiv = 'adi';
        }
        clickImgActivSV(clickImgActiv);
      }

      /*функция изменения шрифта*/
      function changeFontSize(fontSize) {
        Cookies.set('fontSize', fontSize, { expires: 365, path: '/' });

        var sizeMapping = {
          sm: 'small-Fonts',
          md: 'medium-Fonts',
          lg: 'big-Fonts'
        };

        $('body').removeClass("small-Fonts medium-Fonts big-Fonts")
        .addClass(sizeMapping[fontSize]);
      }

      /*функция изменения бекграунда*/
      function changeBackGround(backGround) {
        Cookies.set('backGround', backGround, { expires: 365, path: '/' });

        var colorGround = {
          wh: 'white',
          bl: 'black',
          gr: 'green',
          blu: 'blue',
          nn: 'none'
        };

        $('body, nav, section').removeClass("white black green blue none")
        .addClass(colorGround[backGround]);
      }
      /*функция отображения блока*/
      function visibilitiBlocksv(visibiliti) {
        Cookies.set('visibiliti', visibiliti, { expires: 365, path: '/' });

        var visibilitiBlock = {
          on: 'visibilitiOn',
          off: 'visibilitiOff'
        };

        $('#block-blokdlaslabovidasih').removeClass("visibilitiOn visibilitiOff")
        .addClass(visibilitiBlock[visibiliti]);
        if (visibiliti == 'off') {
          $('#ShowSL').css({'display':'block'});
          $('#CloseSL').removeClass('visibilitiOn').addClass('visibilitiOff')
        } else {
          $('#ShowSL').css({'display':'none'});
          $('#CloseSL').removeClass('visibilitiOff').addClass('visibilitiOn')
        }
      }
      /*функция картинок*/
      function changeImageMapping(changeImage) {
        Cookies.set('changeImage', changeImage, { expires: 365, path: '/' });

        if (changeImage == 'wit') {
          $('img').each(function() {
            var $t = $(this);
            $t
            .attr({
              srcRemoved : $t.attr('src'),
            })
            .removeAttr('src');
          });
        } else {
          $('img').each(function() {
            var $t = $(this);
            $t
            .attr({
              src : $t.attr('srcRemoved'),
            });
          });
        }

        if (changeImage == 'bnw') {
          $('body').addClass("blacknwhite");
        } else {
          $('body').removeClass("blacknwhite");
        }
      }

      function clickFontsActivSV(clickFontsActiv){
        Cookies.set('clickFontsActiv', clickFontsActiv, { expires: 365, path: '/' });

        if (clickFontsActiv == 'asf') {
          $('#SmallFonts, #AddImg').addClass('activSV');
        } else {
          $('#SmallFonts, #AddImg').removeClass('activSV');
        }
        if (clickFontsActiv == 'amf') {
          $('#MediumFonts, #DelImg').addClass('activSV');
        } else {
          $('#MediumFonts, #DelImg').removeClass('activSV');
        }
        if (clickFontsActiv == 'abf') {
          $('#BigFonts, #BlackImg').addClass('activSV');
        } else {
          $('#BigFonts, #BlackImg').removeClass('activSV');
        }
      }

      function clickImgActivSV(clickImgActiv){
        Cookies.set('clickImgActiv', clickImgActiv, { expires: 365, path: '/' });

        if (clickImgActiv == 'adi') {
          $('#AddImg').addClass('activSV');
        } else {
          $('#AddImg').removeClass('activSV');
        }
        if (clickImgActiv == 'dli') {
          $('#DelImg').addClass('activSV');
        } else {
          $('#DelImg').removeClass('activSV');
        }
        if (clickImgActiv == 'bli') {
          $('#BlackImg').addClass('activSV');
        } else {
          $('#BlackImg').removeClass('activSV');
        }
      }

      $(document).ready(function(){
        /*вывод куки*/
        init();
        /*Вывод размера текста*/
        $('#SmallFonts').click(function() { changeFontSize('sm'); clickFontsActivSV('asf'); window.location.reload(); });
        $('#MediumFonts').click(function() { changeFontSize('md'); clickFontsActivSV('amf'); window.location.reload(); });
        $('#BigFonts').click(function() { changeFontSize('lg'); clickFontsActivSV('abf'); window.location.reload(); });
        /*вывод бекграунда*/
        $('#WhiteBack').click(function() { changeBackGround('wh'); });
        $('#BlackBack').click(function() { changeBackGround('bl'); });
        $('#GreenBack').click(function() { changeBackGround('gr'); });
        $('#BlueBack').click(function() { changeBackGround('blu'); });
        $('#NoneBack').click(function() { changeBackGround('nn'); });
        /*Вывод картинок*/
        $('#AddImg').click(function() { changeImageMapping('app'); clickImgActivSV('adi'); });
        $('#DelImg').click(function() { changeImageMapping('wit'); clickImgActivSV('dli'); });
        $('#BlackImg').click(function() { changeImageMapping('bnw'); clickImgActivSV('bli'); });

        $('#ShowSL').click(function() { visibilitiBlocksv('on'); });
        $('#CloseSL').click(function() {
          changeBackGround('nn');
          changeImageMapping('app');
          changeFontSize('sm');
          visibilitiBlocksv('off');
          clickFontsActivSV('asf');
          clickImgActivSV('adi');
          window.location.reload();
        });
        $('.container').each(function(){
            var highestBox = 0;
            $('.Block-pod ', this).each(function(){
                if($(this).height() > highestBox) {
                    highestBox = $(this).height();
                }
            });
            $('.Block-pod',this).height(highestBox);
        });
      });
    }
  };


})(jQuery, Drupal);


{/* <div id="flexslider-1" class="flexslider optionset-slayder imagestyle-large">

    <ul class="slides">

        <li class="flex-active-slide">
                <a href="http://edu.pkgo.ru/sites/default/files/2020-01/Ustanovlennye_minimalnye_bally_po_predmetam_0.jpg" class="colorbox cboxElement" target="_blank">
                  <img class="image-style-large" alt="" src="/sites/default/files/styles/large/public/2020-01/Ustanovlennye_minimalnye_bally_po_predmetam_0.jpg?itok=Lr_dCi2F" width="343" height="480"/>
                </a>
        </li>
        <div class="field__item">
            <a href="http://edu.pkgo.ru/sites/default/files/2020-01/1%20-%200001_0_0.jpg" class="colorbox cboxElement" target="_blank">
              <img class="image-style-large" alt="" src="/sites/default/files/styles/large/public/2020-01/1%20-%200001_0_0.jpg?itok=PQ9cQ1aL" width="343" height="480"/>
            </a>
        </div>
        <div class="field__item">
            <a href="http://edu.pkgo.ru/sites/default/files/2020-01/1%20-%200002_0_0.jpg" class="colorbox cboxElement" target="_blank">
              <img class="image-style-large" alt="" src="/sites/default/files/styles/large/public/2020-01/1%20-%200002_0_0.jpg?itok=j0K-RZkA" width="343" height="480"/>
            </a>
        </div>
        <div class="field__item">
            <a href="http://edu.pkgo.ru/sites/default/files/2020-01/1%20-%200003_0_0.jpg" class="colorbox cboxElement" target="_blank">
              <img class="image-style-large" alt="" src="/sites/default/files/styles/large/public/2020-01/1%20-%200003_0_0.jpg?itok=Yuk9A6VM" width="343" height="480"/>
            </a>
        </div>
        <div class="field__item">
            <a href="http://edu.pkgo.ru/sites/default/files/2020-01/1%20-%200004.jpg" class="colorbox cboxElement" target="_blank">
              <img class="image-style-large" alt="" src="/sites/default/files/styles/large/public/2020-01/1%20-%200004.jpg?itok=O5sFh88Z" width="343" height="480"/>
            </a>
        </div>
    </ul>
</div> */}
