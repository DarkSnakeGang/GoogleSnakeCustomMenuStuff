window.snake.customMenuStuff = function(settings = {}) {
  settings.speed = settings.speed || 10;
  settings.size  = settings.size  || 20;
  settings.lightSquares = settings.lightSquares || (settings.dark ? '#47404F' : '#AAD751');
  settings.darkSquares = settings.darkSquares || (settings.dark ? '#423C49' : '#A2D149');
  

  //--SIZES--

  // beeg
  let img = new Image;
  img.src = 'https://i.postimg.cc/xCbFM77f/index.png';
  img.width = 47;
  img.height = 47;
  document.querySelector('#size').appendChild(img);

  // smol
  img = new Image;
  img.src = 'https://vignette.wikia.nocookie.net/joke-battles/images/1/11/Smol_Nozomi.png/revision/latest?cb=20170403050458';
  img.width = 47;
  img.height = 47;
  document.querySelector('#size').appendChild(img);

  // custom, given in settings
  img = new Image;
  img.src = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F3%2F35%2FOrange_question_mark.svg%2F1200px-Orange_question_mark.svg.png&f=1&nofb=1';
  img.width = 47;
  img.height = 47;
  document.querySelector('#size').appendChild(img);

  
  //--SPEEDS--

  // lightning
  img = new Image;
  img.src = 'https://i.postimg.cc/9Q9KJsnk/bolt.png';
  img.width = 47;
  img.height = 47;
  document.querySelector('#speed').appendChild(img);

  // snail
  img = new Image;
  img.src = 'https://i.postimg.cc/vHkC7G39/snai.png';
  img.width = 47;
  img.height = 47;
  document.querySelector('#speed').appendChild(img);

  // custom
  img = new Image;
  img.src = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F3%2F35%2FOrange_question_mark.svg%2F1200px-Orange_question_mark.svg.png&f=1&nofb=1';
  img.width = 47;
  img.height = 47;
  document.querySelector('#speed').appendChild(img);

  //--COUNTS--

  // 7
  img = new Image;
  img.src = 'https://i.postimg.cc/ht263ZQB/7.png';
  img.width = 47;
  img.height = 47;
  document.querySelector('#count').appendChild(img);

  // 9
  img = new Image;
  img.src = 'https://i.postimg.cc/FKqqhfxC/9.png';
  img.width = 47;
  img.height = 47;
  document.querySelector('#count').appendChild(img);

  // 11
  img = new Image;
  img.src = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffree-tarot-reading.xyz%2FImagenes_TA%2FNumeros%2FNumero-11.png&f=1&nofb=1';
  img.width = 47;
  img.height = 47;
  document.querySelector('#count').appendChild(img);

  // 13
  img = new Image;
  img.src = 'https://i.postimg.cc/wB3ZK5Ds/13.png';
  img.width = 47;
  img.height = 47;
  document.querySelector('#count').appendChild(img);

  // secret
  let shh = document.createElement('canvas');
  shh.width = 47;
  shh.height = 47;
  document.querySelector('#count').appendChild(shh);

  // secret 2
  shh = document.createElement('canvas');
  shh.width = 47;
  shh.height = 47;
  document.querySelector('#count').appendChild(shh);

  // making do things
  const scripts = document.getElementsByTagName('script');
  for(let script of scripts) {
    const req = new XMLHttpRequest();
    req.open('GET', script.src);
    req.onload = function() {
      const code = this.responseText;
      if(code.indexOf('#A2') === -1)
        return;

      const functio = code.match(
        /[a-zA-Z0-9_$]{1,6}\.prototype\.[a-zA-Z0-9_$]{1,6}=function\(a\){a=void 0===a\?!0:a;[^]*?this,!1\)}/
      )[0];
      const thjaselcdtctedaboupplelcountthingffjfjfjfjfjfjfjfjfjfj = functio.match(
        /0!==this\.[a-zA-Z0-9_$]{1,6}/
      )[0].replace('0!==', '');
      const pafihwotyhopyplacetheiopafsjafijplesllllllll = functio.match(
        /this\.[a-zA-Z0-9_$]{1,6}\.push\([a-zA-Z0-9_$]{1,6}\(this,/
      )[0];
      const inevilmodes = functio.match(
        /[a-zA-Z0-9_$]{1,6}\(this,2\)\|\|[a-zA-Z0-9_$]{1,6}\(this,8\)\|\|[a-zA-Z0-9_$]{1,6}\(this,9\)/
      )[0];

      eval(
        functio.replace(
          `if(${inevilmodes})`,
          `
          if(${thjaselcdtctedaboupplelcountthingffjfjfjfjfjfjfjfjfjfj} > 2) {
            if(!(${inevilmodes})) {
              if(${thjaselcdtctedaboupplelcountthingffjfjfjfjfjfjfjfjfjfj} === 3) {
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} -1, 0));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} -3, 2));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} -3, -2));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} 1, -2));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} 1, 2));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} 1, 0));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} -3, 0));
                
              } else if(${thjaselcdtctedaboupplelcountthingffjfjfjfjfjfjfjfjfjfj} === 4) {
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} -1, 0));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} -3, 2));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} -3, -2));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} 1, -2));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} 1, 2));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} 1, 0));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} -3, 0));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} -1, -2));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} -1, 2));
                
                
              } else if(${thjaselcdtctedaboupplelcountthingffjfjfjfjfjfjfjfjfjfj} === 5) {
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} -1, 0));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} -3, 2));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} -3, -2));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} 1, -2));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} 1, 2));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} 1, 0));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} -3, 0));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} -1, -2));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} -1, 2));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} -2, -2));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} 0, 2));
                
                
              } else if(${thjaselcdtctedaboupplelcountthingffjfjfjfjfjfjfjfjfjfj} === 6) {
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} -1, 0));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} -3, 2));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} -3, -2));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} 1, -2));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} 1, 2));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} 1, 0));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} -3, 0));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} -1, -2));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} -1, 2));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} -2, -2));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} 0, 2));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} 1, -1));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} -3, 1));
                
              } else if(${thjaselcdtctedaboupplelcountthingffjfjfjfjfjfjfjfjfjfj} === 7) {
                for(let i = -10; i <= 10; i++)
                  for(let j = -10; j <= 10; j++)
                    ${pafihwotyhopyplacetheiopafsjafijplesllllllll} i, j));
              } else 
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} 100000, 1));
            } else {
              for(
                let i = 0; i < (
                  ${thjaselcdtctedaboupplelcountthingffjfjfjfjfjfjfjfjfjfj} === 3
                    ? 7
                  : ${thjaselcdtctedaboupplelcountthingffjfjfjfjfjfjfjfjfjfj} === 4
                    ? 9
                  : ${thjaselcdtctedaboupplelcountthingffjfjfjfjfjfjfjfjfjfj} === 5
                    ? 11
                  : ${thjaselcdtctedaboupplelcountthingffjfjfjfjfjfjfjfjfjfj} === 6
                    ? 13
                  : ${thjaselcdtctedaboupplelcountthingffjfjfjfjfjfjfjfjfjfj} === 7
                    ? 20
                  : 0
                ); i++
              ) {
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} i - ~~((
                  ${thjaselcdtctedaboupplelcountthingffjfjfjfjfjfjfjfjfjfj} === 3
                    ? 7
                  : ${thjaselcdtctedaboupplelcountthingffjfjfjfjfjfjfjfjfjfj} === 4
                    ? 9
                  : ${thjaselcdtctedaboupplelcountthingffjfjfjfjfjfjfjfjfjfj} === 5
                    ? 11
                  : ${thjaselcdtctedaboupplelcountthingffjfjfjfjfjfjfjfjfjfj} === 6
                    ? 13
                  : ${thjaselcdtctedaboupplelcountthingffjfjfjfjfjfjfjfjfjfj} === 7
                    ? 20
                  : 0
                ) / 1.25), -4));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} i- ~~((
                  ${thjaselcdtctedaboupplelcountthingffjfjfjfjfjfjfjfjfjfj} === 3
                    ? 7
                  : ${thjaselcdtctedaboupplelcountthingffjfjfjfjfjfjfjfjfjfj} === 4
                    ? 9
                  : ${thjaselcdtctedaboupplelcountthingffjfjfjfjfjfjfjfjfjfj} === 5
                    ? 11
                  : ${thjaselcdtctedaboupplelcountthingffjfjfjfjfjfjfjfjfjfj} === 6
                    ? 13
                  : ${thjaselcdtctedaboupplelcountthingffjfjfjfjfjfjfjfjfjfj} === 7
                    ? 20
                  : 0
                ) / 1.25), 4));
                
              }
            }
          } else if(${inevilmodes})
          `
        )
      );

      eval(
        code.match(
          /[a-zA-Z0-9_$]{1,6}=function\(a\){switch\(a\.[a-zA-Z0-9_$]{1,6}\){case 1:return\.66[^}]*?1}}/
        )[0].replace(
          '1.33;',
          `1.33;case 3:return 0.45;case 4:return 1.85;case 5:return ${settings.speed};`
        )
      );

      eval(
        code.match(
          /[a-zA-Z0-9_$]{1,6}\.prototype\.[a-zA-Z0-9_$]{1,6}=function\(\){var a=this,[^}]*?switch\(a\.[a-zA-Z0-9_$]{1,6}\){case 2:e=512[^}]*?}[^]*?};/
        )[0].replace(
          '96;break a;',
          `96;break a;case 3:e = 1024;break a;case 4:e = 48;break a;case 5:e = ${settings.size};break a;`
        ).replace(
          '#AAD751',
          settings.lightSquares
        ).replace(
          '#A2D149',
          settings.darkSquares
        )
      );
    };
    req.send();
  }
};
