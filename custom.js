if(window.snake) {
  window.snake.scheme = function(settings = {}) {
    
    if(settings.score_bar === undefined)
      settings.score_bar = settings.scoreBar || '#4A752C';
    if(settings.borders === undefined)
      settings.borders = '#578A34';
    if(settings.walls === undefined)
      settings.walls = settings.borders;
    if(settings.shadows === undefined)
      settings.shadows = '#94BD46';
    if(settings.light_squares === undefined)
      settings.light_squares = settings.lightSquares || '#AAD751';
    if(settings.dark_squares === undefined)
      settings.dark_squares = settings.darkSquares || '#A2D149';
    if(settings.sky === undefined)
      settings.sky = '#4DC1F9';
    if(settings.separators === undefined)
      settings.separators = '#87CEFA';
    if(settings.buttons === undefined)
      settings.buttons = '#1155CC';
    if(settings.light_goal === undefined) {
      let f = settings.light_squares;
      f = f.replace('#', '');
      let { h, s, v, } = rgb_to_hsv({
        r: parseInt(f.substring(0, 2), 16),
        g: parseInt(f.substring(2, 4), 16),
        b: parseInt(f.substring(4, 6), 16),
      });
      s += 0.03;
      v += 0.07;
      s = s > 1 ? 1 : s;
      v = v > 1 ? 1 : v;

      let { r, g, b } = hsv_to_rgb({ h: h, s: s, v: v });
      // settings.light_goal = '#' + (~~r).toString(16) + (~~g).toString(16) + (~~b).toString(16);
      settings.light_goal = rgb_to_hex({ r: Math.round(r), g: Math.round(g), b: Math.round(b) });
    }
    if(settings.dark_goal === undefined) {
      let f = settings.dark_squares;
      f = f.replace('#', '');
      let { h, s, v, } = rgb_to_hsv({
        r: parseInt(f.substring(0, 2), 16), 
        g: parseInt(f.substring(2, 4), 16),
        b: parseInt(f.substring(4, 6), 16),
      });
      s += 0.03;
      v -= 0.08;
      s = s > 1 ? 1 : s;
      v = v > 1 ? 1 : v < 0 ? 0 : v;

      let { r, g, b } = hsv_to_rgb({ h: h, s: s, v: v });
      // settings.dark_goal = '#' + (~~r).toString(16) + (~~g).toString(16) + (~~b).toString(16);
      settings.dark_goal = rgb_to_hex({ r: Math.round(r), g: Math.round(g), b: Math.round(b) });
    }
    let f = settings.dark_goal;
    f = f.replace('#', '');
    let { h, s, v, } = rgb_to_hsv({
      r: parseInt(f.substring(0, 2), 16), 
      g: parseInt(f.substring(2, 4), 16),
      b: parseInt(f.substring(4, 6), 16),
    });
    v -= .11;
    v = v < 0 ? 0 : v;
    let { r, g, b } = hsv_to_rgb({ h: h, s: s, v: v });
    // settings.darker_goal = '#' + (~~r).toString(16) + (~~g).toString(16) + (~~b).toString(16);
    settings.darker_goal = rgb_to_hex({ r: Math.round(r), g: Math.round(g), b: Math.round(b) });

    // console.log(settings.dark_goal, settings.light_goal, settings.darker_goal)


    
    document.body.bgColor = settings.background || settings.score_bar;
    document.getElementsByClassName('sEOCsb')[0].style.backgroundColor = settings.score_bar;
    let bacon = document.getElementsByClassName('T7SB3d');
    for(let b of bacon)
      b.style.background = settings.sky;
    let pork = document.getElementsByClassName('e1XC2b');
    for(let p of pork)
      p.style.borderBottomColor = settings.separators;
    let ham = document.getElementsByClassName('FL0z2d');
    for(let h of ham)
      h.style.background = settings.buttons;



    const standard = document.createElement('canvas');
    standard.width = 128;
    standard.height = 128;
    const mctx = standard.getContext('2d');
    mctx.fillStyle = settings.borders;
    roundRect(mctx, 16, 16, 95, 95, 5, true);
    for(let i = 0; i < 3; i++) {
      for(let j = 0; j < 3; j++){
        if(i % 2 == 0 ^ j % 2 == 0)
          mctx.fillStyle = settings.light_squares;
        else
          mctx.fillStyle = settings.dark_squares;
        mctx.fillRect(20 + i * 29, 20 + j * 29, 29, 29);
      }
    }
    
    
    const url_m = standard.toDataURL();
    document.getElementsByClassName('iLZj5e')[4].children[0].src = url_m;



    const small = document.createElement('canvas');
    small.width = 128;
    small.height = 128;
    const sctx = small.getContext('2d');
    sctx.fillStyle = settings.borders;
    roundRect(sctx, 26, 26, 75, 75, 5, true);

    for(let i = 0; i < 2; i++) {
      for(let j = 0; j < 2; j++) {
        if(i % 2 == 0 ^ j % 2 == 0)
          sctx.fillStyle = settings.light_squares;
        else
          sctx.fillStyle = settings.dark_squares;

        sctx.fillRect(30 + 34 * i, 30 + 34 * j, 34, 34);
      }
    }

    const url_s = small.toDataURL();
    document.getElementsByClassName('iLZj5e')[4].children[1].src = url_s;



    const large = document.createElement('canvas');
    large.width = 128;
    large.height = 128;
    const lctx = large.getContext('2d');
    lctx.fillStyle = settings.borders;
    roundRect(lctx, 6, 6, 115, 115, 5, true);

    for(let i = 0; i < 4; i++) 
      for(let j = 0; j < 4; j++) {
        if(i % 2 === 0 ^ j % 2 === 0)
          lctx.fillStyle = settings.light_squares;
        else
          lctx.fillStyle = settings.dark_squares;
        
        lctx.fillRect(10 + 27 * i, 10 + 27 * j, 27, 27);
      }
    
    const url_l = large.toDataURL();
    document.getElementsByClassName('iLZj5e')[4].children[2].src = url_l;


    const wall_img = new Image();
    wall_img.src = 'https://i.postimg.cc/XN8CGSPy/trophy-01.png';
    wall_img.crossOrigin = 'Anonymous';
    setTimeout(function() {
      const wall_mode = document.createElement('canvas');
      wall_mode.width = 128;
      wall_mode.height = 128;
      const wctx = wall_mode.getContext('2d');
      wctx.drawImage(wall_img, 0, 0);

      let wall_data = wctx.getImageData(0, 0, 128, 128);
      let pix = wall_data.data;

      let w_f = settings.walls;
      w_f = w_f.replace('#', '');
      let w_r = parseInt(w_f.substring(0, 2), 16);
      let w_g = parseInt(w_f.substring(2, 4), 16);
      let w_b = parseInt(w_f.substring(4, 6), 16);

      let l_f = settings.light_squares;
      l_f = l_f.replace('#', '');
      let l_r = parseInt(l_f.substring(0, 2), 16);
      let l_g = parseInt(l_f.substring(2, 4), 16);
      let l_b = parseInt(l_f.substring(4, 6), 16);

      for(let y = 0; y < 128; y++)
        for(let x = 0; x < 128; x++) {
          let index = 4 * (x + y * 128);
          let { h, s, v, } = rgb_to_hsv({
            r: pix[index],
            g: pix[1 + index],
            b: pix[2 + index],
          });


          

          if(Math.abs(h - 95) < 2) {
            pix[index] = w_r;
            pix[1 + index] = w_g;
            pix[2 + index] = w_b;
          } else {
            pix[index] = l_r;
            pix[1 + index] = l_g;
            pix[2 + index] = l_b;
          }

        }
      
      wctx.putImageData(wall_data, 0, 0);

      const url_w = wall_mode.toDataURL();
      document.getElementsByClassName('e1XC2b')[1].children[0].children[1].src = url_w;
      document.getElementsByClassName('vuOknd')[1].children[0].src = url_w;


      let key_img = new Image();
      key_img.src = 'https://i.postimg.cc/nzkFstB8/key-types-dark.png';
      key_img.crossOrigin = 'Anonymous';
      setTimeout(_ => {
        const key_types = document.createElement('canvas');
        key_types.width = 640;
        key_types.height = 128;
        const kctx = key_types.getContext('2d');
        kctx.drawImage(key_img, 0, 0);

        const kdata = kctx.getImageData(0, 0, 640, 128);
        pix = kdata.data;

        const wrgb = hex_to_rgb(settings.walls);
        const whsv = rgb_to_hsv({ r: wrgb.r, g: wrgb.g, b: wrgb.b, });
        let new_hsv;
        if(settings.keyBlockMarks) {
          const kbm_rgb = hex_to_rgb(settings.keyBlockMarks);
          new_hsv = rgb_to_hsv({ r: kbm_rgb.r, g: kbm_rgb.g, b: kbm_rgb.b, });
        } else if(whsv.s > .1)
          new_hsv = {
            h: Math.max(whsv.h - 5, 0),
            s: Math.min(whsv.s + .24, 1),
            v: Math.max(whsv.v - .16, 0),
          };
        else 
          new_hsv = {
            h: Math.max(whsv.h - 5, 0),
            s: Math.max(whsv.s - .24, 0),
            v: Math.min(whsv.v + .16, 1),
          };
        const new_rgb = hsv_to_rgb({ h: new_hsv.h, s: new_hsv.s, v: new_hsv.v, });

        for(let y = 0; y < key_img.height; y++) {
          for(let x = 0; x < key_img.width; x++) {
            let index = 4 * (x + y * key_img.width);
            let { h, s, v, } = rgb_to_hsv({
              r: pix[index],
              g: pix[1 + index],
              b: pix[2 + index],
            });

            if(Math.abs(h - 90) < 2) {
              pix[index] = new_rgb.r;
              pix[1 + index] = new_rgb.g;
              pix[2 + index] = new_rgb.b;
            }
          }
        }
        kctx.putImageData(kdata, 0, 0);

        const url_k = key_types.toDataURL();
        



        const scripts = document.body.getElementsByTagName('script');
        for(let script of scripts) {
          if(script.src === '' || script.src.includes('apis.google.com'))continue;
          console.log(script.src);
          const req = new XMLHttpRequest();
          req.open('GET', script.src);
          req.onload = function() {
            if(this.responseText.indexOf('trophy') !== -1)
              processCode(this.responseText);
          };
          req.send();
        }

        function processCode(code) {

          const poisonsnake = code.match(
            /([a-zA-Z0-9_$]{1,8}\(this\.[a-zA-Z0-9_$]{1,8},"#5282F2","#909090"\);){3}/
          )[0];
          console.log(poisonsnake);

          settings.custom_poison = settings.custom_poison || '#909090';

          eval(
            code.match(
              /[a-zA-Z0-9_$]{1,8}\.prototype\.update=function\(\){if\([a-zA-Z0-9_$]{1,8}\(this,9\)[^]*?this\)}}}}/
            )[0].replace(
              '{',
              `{
                ${poisonsnake.replace(/#909090/g, settings.custom_poison)}
              `
            )
          );

          const psrgb = hex_to_rgb(settings.custom_poison);
          eval(
            code.match(
              /[a-zA-Z0-9_$]{1,8}=\[145,145,145\]/
            )[0].replace(
              '145,145,145',
              `${psrgb.r},${psrgb.g},${psrgb.b}`
            )
          );

          const br = new Image();
          br.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAADY0lEQVR4nO2ZMU8VQRRG9///AFsrOytjZSKNDbEiGhMrKUls1ERCMMBagBv37dtl9+3c+e69c04yFZDsnO8AD17XAQAAAAAAAAAAAABUoZ85kJy54YkhOVuGJ4Rk7BmfAIIzGfTs4ra/vnnoj3F5dUcEyRgNOTf8IYdf162LgGCcMRrw8upu1fgbIuBXiXNGAxzy6cu3vu+60Xn1+v3w8e8/7ve+diACIYvj//z1ezL+v/P23fnweWcXtxYREEIFFgOYG384T1zfPBBAUIoEsPBaoHYERLWRCAGsGY2fMCeyGMCH88/ZA2g+hOWfAH3/+Ir/mfENXwOsGalmaOkYCZj7H8D/fwq+ePlm8nHDvwJqB0AEW6n03T83jCK4dEwu73B8RQBEsMTCG0KZAmgmgqOX//j1z+SNIcHw6gCaCEE1aqQA0kagHjZSAOkiUI8aMYA0EagHLSXc4zO5Rz1oadlen8st6kEtJHt+NleoB7UUHOEZpagHrSE20rNWRT1obaERn9kU9agqkVGfuyjqUT2Iy3SXTagH9iQr670WUQ/tUVD2+w2ox3YrpmvkrurR3Qk5IPV91aO7EfEMae/O+OtJd3/G304qD4x/GilcMP4+wjshgP2EdsL4+wnrhfHLEdIP45clnCMCKEs4R4xfnjCe+O63IYwrxrchjC8CsCOELwKwI4QvxrcjhDMCsMW9MwKwxbUzxrfHtTsCsMe1OwKwx7U7ArDHtTsCsMe1OwKwx7U7ArDHtTsCsMe1OwKwx707ArAjhDcCsCOENwKwI4S3WgG0GEEIZwRgQxhnBGBDGGcEYEMYZzUDaCWCcL4IoCzhXBFAOUK6qhlA9ghCeiKAMoT2RAT7Ce2ndgDZIgjvhgBOJ40bIjiNNE4UAUSPIJ0PIlhPSg+qAFxcfgOpHRDBMunvrgzAlYgjNHNvIpjS1H3VAXiS0tJdR6gD8CAn+/0WUQ+vFJX1XptRj15bWKa7FEM9uLXAyM9eDfXQJaWqnzHc+F2nF5bthEQtLcsJjVpe9JMCtcSoJxVqmdFOStRSo5zUqOV6P02gluz1NIVatrfTLGrxHk7zqAdgeAeox2B8J6iHYXwHqAdieCeoB2N4J6gHZHwnqMdkdCeoB2Z4RzA6DDA6HIWhAQAAAAAAALruL5cwHSTkvUUiAAAAAElFTkSuQmCC';
          br.crossOrigin = 'Anonymous';

          

          const br2_ = document.createElement('canvas');
          br2_.width = br2_.height = 47;
          const br2_ctx = br2_.getContext('2d');

          

          setTimeout(function() {

            const br_ = document.createElement('canvas');
            br_.width = br_.height = 47;
            const br_ctx = br_.getContext('2d');

            br_ctx.drawImage(br, 0, 0, 47, 47);

            const br_data = br_ctx.getImageData(0, 0, 47, 47);
            const br_pix = br_data.data;

            settings.custom_gradient = settings.custom_gradient || [ '#0095ff', '#ff004d' ];
            settings.custom_yinyang  = settings.custom_yinyang  || [ '#ff5a00', '#00ffb3' ];

            let snek1 = hex_to_rgb(settings.custom_gradient[0]);
            let snek2 = hex_to_rgb(settings.custom_gradient[1]);
            let snek_eye = rgb_to_hsv(snek1);
            snek_eye.s = Math.min(snek_eye.s + .13, 1);
            snek_eye.v = Math.max(snek_eye.v - .62, 0);
            snek_eye = hsv_to_rgb(snek_eye);


            for(let y = 0; y < 47; y++) {
              for(let x = 0; x < 47; x++) {
                let i = 4 * (x + y * 47);
                const c = {
                  r: br_pix[0 + i],
                  g: br_pix[1 + i],
                  b: br_pix[2 + i],
                };

                if(x < 27 && close(c, { r: 0, g: 0, b: 0, }, 8)) {
                  br_pix[0 + i] = snek1.r;
                  br_pix[1 + i] = snek1.g;
                  br_pix[2 + i] = snek1.b;
                } else if(close(c, { r: 0, g: 0, b: 0, }, 8)) {
                  br_pix[0 + i] = snek2.r;
                  br_pix[1 + i] = snek2.g;
                  br_pix[2 + i] = snek2.b;
                } else if(close(c, { r: 255, g: 0, b: 0, }, 10, 100, 100)) {
                  br_pix[0 + i] = snek_eye.r;
                  br_pix[1 + i] = snek_eye.g;
                  br_pix[2 + i] = snek_eye.b;
                }
              }
            }


            br_ctx.putImageData(br_data, 0, 0);

            console.log(br_.toDataURL());

            br2_ctx.drawImage(br, 0, 0, 47, 47);

            const br2_data = br2_ctx.getImageData(0, 0, 47, 47);
            const br2_pix = br2_data.data;

            let snek21 = hex_to_rgb(settings.custom_yinyang[0]);
            let snek22 = hex_to_rgb(settings.custom_yinyang[1]);
            let snek2_eye = rgb_to_hsv(snek21);
            snek2_eye.s = Math.min(snek2_eye.s + .13, 1);
            snek2_eye.v = Math.max(snek2_eye.v - .62, 0);
            snek2_eye = hsv_to_rgb(snek2_eye);
            

            for(let y = 0; y < 47; y++) {
              for(let x = 0; x < 47; x++) {
                let i = 4 * (x + y * 47);
                const c = {
                  r: br2_pix[0 + i],
                  g: br2_pix[1 + i],
                  b: br2_pix[2 + i],
                };

                if(x < 27 && close(c, { r: 0, g: 0, b: 0, }, 8)) {
                  br2_pix[0 + i] = snek21.r;
                  br2_pix[1 + i] = snek21.g;
                  br2_pix[2 + i] = snek21.b;
                } else if(close(c, { r: 0, g: 0, b: 0, }, 8)) {
                  br2_pix[0 + i] = snek22.r;
                  br2_pix[1 + i] = snek22.g;
                  br2_pix[2 + i] = snek22.b;
                } else if(close(c, { r: 255, g: 0, b: 0, }, 10, 100, 100)) {
                  br2_pix[0 + i] = snek2_eye.r;
                  br2_pix[1 + i] = snek2_eye.g;
                  br2_pix[2 + i] = snek2_eye.b;
                }
              }
            }

            br2_ctx.putImageData(br2_data, 0, 0);




            if(document.querySelector('#color').childElementCount > 18)
              for(let i = document.querySelector('#color').childElementCount - 1; i >= 19; i--)
                document.querySelector('#color').removeChild(document.querySelector('#color').children[i]);

            let q = new Image();
            q.src = 'https://www.google.com/logos/fnbx/snake_arcade/v5/color_18.png';
            q.width = q.height = 47;
            let c = document.querySelector('#color').children;
            document.querySelector('#color').replaceChild(br_, c[c.length - 1]);
            document.querySelector('#color').appendChild(br2_);
            document.querySelector('#color').appendChild(q);
            


            eval(
              code.match(
                /[a-zA-Z0-9_$]{1,8}=\[\["#4E7CF6","#17439F"\],[^]*?"#6B6B6B"\]\]/
              )[0].replace(
                '"#6B6B6B"]]',
                `"#6B6B6B"], ["${settings.custom_gradient[0]}", "${settings.custom_gradient[1]}"], ["${settings.custom_yinyang[0]}", "${settings.custom_yinyang[1]}"]]`
              )
            );

            eval(
              code.match(
                /[a-zA-Z0-9_$]{1,8}=\[5,4,7,7,1,2,0,3,9,8,0,14,15,15,11,12,17,16\]/
              )[0].replace(
                ']', ', 19, 18]'
              )
            );
            
            if(settings.grey_skull || settings.burger || settings.cactus || settings.hotdog || settings.egg || settings.lime || settings.red_pepper || settings.cane || settings.cracker || settings.tree || settings.custom_url) {
              const normal = {
                burg:    i('https://i.postimg.cc/B6ycxmBb/porga.png'),
                cact:    i('https://i.postimg.cc/RCDVL7Bf/index.png'),
                dog:     i('https://i.postimg.cc/rsrbW0x6/dog.png'),
                egg:     i('https://i.postimg.cc/501jDL9g/eg.png'),
                lime:    i('https://i.postimg.cc/k5kWcyFB/lime.png'),
                pepper:  i('https://i.postimg.cc/BQqHMbDc/redpepper.png'),
                cane:    i('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAMCklEQVR4nO2d+3cTZRrH+UMmt2Z6pRdAhC7KXdEqroC6IhcRdEEQ1+WmHlwBKRTF2x5P8YKLtOhBKiBSFxYplDZtKSUtTZoUCr0BvZfOZGb+ge/+0obJJJPMpK1pJs/nnOcnwuTt8/3M7c07yaRJCYbdYkW4ivX4iDEkUthaK9Z/B6GDsQqdZIgz9AaZnpyCqVnZmJKZhVQ7SyLEK5GCykhJxYqXl+PgJ5+gtLQU7qYm9A8MQJQkfwmiiK7ubly/fh0lJ05g94cfYnHeM0i2JZEEExm1YFKS7FizejVOnTyJvv7+gLD1VHt7Ow5/9x2efTqPRJhIqAWRZrFie3IavF5v1KGrVUVFBVa9soIkiDVqAawx2+Bi7OBfWjnm4currKwMTy5YQBLEglBNn2Kx4rjJDo5hwTEsfAUHx1UAUZIwxHHYl58f8hoh1j0yLKHCzzPb0MQ8DJ9jWAinzoy7ACP1x4ULmJaTQxKMN6HCX222oUsWvF+Aa3XjHrxQfwO+rw6B37AZjTNnY7bFRhKMJ8rmrjXb0B8ifI5hIbbcHp/gBQHCTz+DX5gX9J43GRZzSYLxQdnUl8029KmEzzEsxLt3x36P93jB5y1RfU+OYeFh7JhJF4Zji7KZ8y02dIYJgWNYiLfvqAb5YGgIPb29uHv/Pjo676KtoxPtHZ3ovHcPPb294Hg+OPxKB7iMqWHfc6SqTHZkkARjR8DUrcWKWpM9YgjKa4DBB0No7+yEp/km3B5vxGq504q+4ZlCob4BXFqOpvBH6rCJ7gzGBGUTvzQlaQpAOPmr/1btTmubptBDVWvLbTyY/YSu8DmGxRDDYpWZrgdGjbx5T5ltGNAYgG9vAbp6etDkbY46fLfHi2u79uOqORP9TLJuCTxM8Kkg1v2MK5R7zzkNh/6RurX4pVEF7/Z44apz4kpGLsrNWag1T8YDnQJwDIu9ZjoVRI28acvMNs1NbzalozxpKly1daMSoO7AFyg3Z/nLZcrQLUAHwyKLBNCPcq85rXHv7zSl+gOr+/jLUQngWLQsQIBycxbumVJ0S7CTjgL6kTcr12LFoIZGDzLJqDJn+sOqfOxpuJs80R3+a2pRbs0JEuCaebJuAa6b7GBJAH3Im/WvjGzth35FYNcLD0clgPPIsaBtjeYokKe4I4h1fyc0ysPl5bNnwU1/LGyDHzAsKmV7/0hVTF8Al7NB/9X/B/mqAjREcS1QoDgNxLrHExp5ozLT0vFgaAjChYvgTOq3Yq2yc7+yrm7eoVuAmnWbVbd3xZyFQY23hfycJ8BvegeXt79H1wFakTfphaVL/bN5vt35qo2uN2WoBlZuyYbz++KAgG+43CgqPoYd23dg3Wtr8ffX38CuD3fht7OlcHu8qFqyUn175iy0m1LVQ5/3FHyF30JsbfOPfWBgIGjRaaz7PGGRN+n9d997OKXL+8C/uCJk06tDHP4D9tq0GbhReg5ujxdHfjiKx3L/orqsa8lfn0dJ7sKw2wt1S8gvfAbC7+cgimLIzyAWzptPAmhB3qRDhYWBjezqBj93UVDzqyIIUG7OQkXObOx6ZytYa/AUrbIyLTZ8Y1Y/qtSYMx++P5sJX+E3EH2+sJ8mvvbqqySAFuRNKjlREtzMO63gc+cGCODQIMAn5vSIwSslKDFPVt3eIJMMfs6TEBpdmj5O3r51GwmgBXmTzp87H7qhd1rByz6kiSTA/8yZmKJhsYby35dZWNVtdi1fA7G3V/N6go927yEBtCBvUtnFMvWm3u8Cv2y5JgE+MqdpvgqXv4a1WEMeBWrWbER3V5euBSX79uaTAFoImAO4dDl8Y3kevj37UWkLnrWT198s2q/AlaLsNqcFbKv6ldfhdjfh7r37ugTI/2gvCaAFXQIMV+PZc3A8sURVgPkWu67my1+7yZLi345j0TK4Ghrh9njR1tFBAowH0QjQ5G2Gu8kD59ffwzFvcZAAcyz6ZuLkr33Dkuy/i2isrPbPJdyW3edrqT27d5MAWohagJGJniYPGkpO4+rGrah4dMGoBXjRwqLcko36Yz8HTCbdCrPuMFRtenMjCaCFUQugqMbKKszPnRW1ANMsNlRv3Bq03eZbLZrDF0QRs2fpG0PColcAQRQjzu0vmDsvagHsFit+LCoO2qb35i3NAjgcDs13IQnPRBBAOY7nnl0Ml2Jtgaf5pjYBRDHoieLx7mFcMxEFsFusKCg4EJUARUeP0t6vh4CJoP0HJowAKUl2HDr0tewUEFmA386cQRqbTALoQd6oi8mTIUS42BovAZRjsVusYK02bN2yFXXOejSHuQYYHBzE/n376NHxaAgQwGQHv2pdzARQjsd/Z5AzBe+/9z4cDgd6enrA8Tx6entRXV2NjwsOYOb0R4P+D4WvEaUAHMNCOB7iU8Hh8gnCuAqgHFOoo0KqnY34MfN49MqQhBKAy5iq+sj3nyGAclx6a6x7ZGhCCsCw4J9dCnGIi5kAocZHwY8DagJwDAvfP7YFLbn6swVQGyuFPkaEE4Bjgr8Aivf5YiYAMQ5EEoBjWPi++IoEMCpaBOAYFr49+yGKIglgNLQKwDEs+LXrwXV1kQBGQo8AHMNiIHcu6k+cIgGMgl4B+plklFuyUfPG22iscJAA8Y5eAfqY5IdPALGP4OqbW3Dj9/MkQLwyGgHkVTk7D7VbdsJ5+CjmKx4Fi/XfSIRhrAQYzaJQIoaQAAkOCZDg6BWglwQwFiRAgqNXgB4mhQQwEgECpGRGFKCbBDAW8qAuHTgY9suhSAADIg/q8qXL4Ne/FVaALhLAWCgFENs7wE2eRgIkCkECSBKE4yUkQKIQSgBRksBveiekAPdJAGOhJoA4MBDy17pIAIOhKoAkQWy5DW5qLglgZMIKIEkQnPXgMh/xC3DPRAIYikgCiJIE4boTXPajJIAR0SKAKA3/kOPjC3E3zDeFkwBxiFYBREmC2N2De2vfJAGMhC4BJAn9AwO4/u+vcSVzFglgBPQK0Nc/ALfHC1dtHWq3fYArqTNIgHgmWgFGynWtDnUFn8OxaKn/h59IgDhCvwD9qg+ENNbUwvnDj5g3bToJEC+MpQD0XEAcQgIkOHoF6O0jAQwFCZDg6BWgp6+PBDASugXoJQEMRcCi0OJjJECiIQ/q4szHIQ4OhhWgu7eXBDASAQKY7PDlh//CaBLAYCgF4GzpEJz16gL0kACGIkgAhgW/MA/i0BAJkAiEEoBjWPh27CQBEgE1ATiGhVD8U5AAXT09JICRCCcAZ0uH8Efgz8l2dZMAhiKsAAwLLjUbQoWDBDAqEQUYkWD4SHC/q5sEMBKaBBg+HfiOFJMARkOzAMPV9vomuOqcJIBR0CvATVMaKqbNg/PbI3ArftyRBIhDohFgZPWvY9EyOP9TDLe7iQSIV/QK0GxKD1oGXvHIfNRu2Yn647/AVX+DBIgnxkKAgLLmYI6NJQHihTEXgJ4LiC/0CuAlAYxFgACWFBIg0ZAHVfbPbREF8JAAxiJgUWhZGfjnXiABEokAAS5dhlDfAM6WTgIkCkoBREmC7+PPVAVoIgGMRSgBRJ8P/HMvhhTATQIYi5ACSBLEO63gcmaQAEZHVQBJglBZBc4+mQQwMuEEECUJwpmz4CypJIBRiSSAKEkQfjkNzpoGjmHhMmWQAEZCiwCiJEE4fwFcWg4aSQBjoVUAUZIgNLrgnvsMCWAk9AggShJab7Xg6tvv+r8RjASIc/QK0NbRAbfHi4bf/ouq51eSAPFOtAKMVMPps6hZtxlX0maQAPGIPKhLZZcinwLaO0IuBHU1NKL+xxO4tnMv5mVmkwDxgjyo30tLoxZAXrNmzCQB4gV5UIcKCzUI0B42fGd9A1LttCYwbpAHtWb16sgCtIUXoLj4WED4JMAERx5Uqp1FS0vLqARYvXIVhR9PKPfWtzZuCivAnbY21fB/OXkKyTa6A4g7lBIcKy7WLUBVdQ1mzcylw388ogwtJcmO4qKikALcbg0W4FL5laCngSj8OEMZnt1ixcb1G9Dc3KwqQP2NRhw8+ClyMrMofCMQSoKUJDtWvLwcX37+BU6dPImiomJ8+uln2LB+A6blTAl6PQkQ56gFqrViPX5iDKDwiUmTJmkXIdbjJIi44v9rH0pltpFnLQAAAABJRU5ErkJggg=='),
                cracker: i('data:image/png;base64,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'),
                tree:    i('data:image/png;base64,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'),
                skull:   i('https://www.google.com/logos/fnbx/snake_arcade/v4/apple_00.png')
              };
              if(settings.custom_url)normal.custom = i(settings.custom_url);
              

              const dead = {
                burg:    i('https://i.postimg.cc/BZkXydHc/porga.png'),
                cact:    i('https://i.postimg.cc/vHcpNKby/cact.png'),
                dog:     i('https://i.postimg.cc/YS6cxmkm/dog.png'),
                egg:     i('https://i.postimg.cc/PxyBgsCX/eg.png'),
                lime:    i('https://i.postimg.cc/JnMfY44Y/lime.png'),
                pepper:  i('https://i.postimg.cc/HnLfHZMQ/redpepper.png'),
                cane:    i('https://i.postimg.cc/Sx9Hyznt/cane.png'),
                cracker: i('https://i.postimg.cc/d0KpDtdQ/cracker.png'),
                tree:    i('https://i.postimg.cc/05tTZvgZ/tree.png'),
                skull:   i('https://www.google.com/logos/fnbx/snake_arcade/v12/trophy_10.png'),
              };
              if(settings.custom_url) {
                dead.custom = document.createElement('canvas');

                dead.custom.width = dead.custom.height = 128;
                window.____ctx = dead.custom.getContext('2d');
                window.____ = new Image();
                ____.src = settings.custom_url;
                ____.crossOrigin = 'Anonymous';
                ____.width = ____.height = 128;
              }
              setTimeout(_ => {
                if(settings.custom_url) {

                  ____ctx.drawImage(____, 0, 0, 128, 128);
                  const ____data = ____ctx.getImageData(0, 0, 128, 128);
                  const ____pix = ____data.data;
                  for(let y = 0; y < 128; y++)
                    for(let x = 0; x < 128; x++) {
                      const i = 4 * (x + y * 128);
                      const c = {
                        r: ____pix[i],
                        g: ____pix[i + 1],
                        b: ____pix[i + 2],
                        a: ____pix[i + 3],
                      };

                      if(c.a > 0) {                    
                        const _y = 0.299 * c.r + 0.587 * c.g + 0.114 * c.b;
                        ____pix[i] = ____pix[i + 1] = ____pix[i + 2] = _y;
                      }
                    }

                  ____ctx.putImageData(____data, 0, 0);

                }

                if(document.querySelector('#apple').childElementCount > 21)
                  for(let i = document.querySelector('#apple').childElementCount - 1; i >= 22; i--)
                    document.querySelector('#apple').removeChild(document.querySelector('#apple').children[i]);

                window.darks = [
                  i('https://i.postimg.cc/pTMsq0k2/apple-00-1.png'),
                  i('https://i.postimg.cc/Pxb2cmF1/apple-01.png'),
                  i('https://i.postimg.cc/rs8QLKv3/apple-02.png'),
                  i('https://i.postimg.cc/CKqvCyGP/apple-03-1.png'),
                  i('https://i.postimg.cc/VkTGbsC0/apple-04-1.png'),
                  i('https://i.postimg.cc/yY1rMbKx/apple-05.png'),
                  i('https://i.postimg.cc/280Xr7jw/apple-06.png'),
                  i('https://i.postimg.cc/qvgDR6zd/apple-07.png'),
                  i('https://i.postimg.cc/PJ4VLmWd/apple-08-1.png'),
                  i('https://i.postimg.cc/2jFKXfPg/apple-09.png'),
                  i('https://i.postimg.cc/NFYPfNrN/apple-10.png'),
                  i('https://i.postimg.cc/ZR6Mmk0B/apple-11.png'),
                  i('https://i.postimg.cc/XYDhccTJ/apple-12-1.png'),
                  i('https://i.postimg.cc/rpBP7yy2/apple-13.png'),
                  i('https://i.postimg.cc/9QfK7NgK/apple-14.png'),
                  i('https://i.postimg.cc/bvD56ShR/apple-15.png'),
                  i('https://i.postimg.cc/NfBWg06g/apple-16.png'),
                  i('https://i.postimg.cc/yYj2Wzj0/apple-17.png'),
                  i('https://i.postimg.cc/0jdFYgsR/apple-18.png'),
                  i('https://i.postimg.cc/05pTRSJW/apple-19.png'),
                  i('https://i.postimg.cc/vTdCxYCt/apple-20.png'),
                  new Image(),
                ];

                settings.burger     && (window.darks.push(dead.burg),    document.querySelector('#apple').appendChild(normal.burg));
                settings.cactus     && (window.darks.push(dead.cact),    document.querySelector('#apple').appendChild(normal.cact));
                settings.hotdog     && (window.darks.push(dead.dog),     document.querySelector('#apple').appendChild(normal.dog));
                settings.egg        && (window.darks.push(dead.egg),     document.querySelector('#apple').appendChild(normal.egg));
                settings.lime       && (window.darks.push(dead.lime),    document.querySelector('#apple').appendChild(normal.lime));
                settings.red_pepper && (window.darks.push(dead.pepper),  document.querySelector('#apple').appendChild(normal.pepper));
                settings.cane       && (window.darks.push(dead.cane),    document.querySelector('#apple').appendChild(normal.cane));
                settings.cracker    && (window.darks.push(dead.cracker), document.querySelector('#apple').appendChild(normal.cracker));
                settings.tree       && (window.darks.push(dead.tree),    document.querySelector('#apple').appendChild(normal.tree));
                settings.custom_url && (window.darks.push(dead.custom),  document.querySelector('#apple').appendChild(normal.custom));
                settings.grey_skull && (window.darks.push(dead.skull),   document.querySelector('#apple').appendChild(normal.skull));

                const HZ = code.match(
                  /f\.type<this\.[a-zA-Z0-9_$]{1,8}\.length\?f\.type:0/
                )[0].match(/this\.[a-zA-Z0-9_$]{1,8}/)[0];
                eval(
                  code.match(
                    /[a-zA-Z0-9_$]{1,8}\.prototype\.[a-zA-Z0-9_$]{1,8}=function\(\){if\(!this\.[a-zA-Z0-9_$]{1,8}&&[^]*?return this\.reset\(\)}/
                  )[0].replace(
                    '{',
                    `{
                      // ${HZ} = [...document.querySelector('#apple').children].map(e => [{ wa: { canvas: e }, oa: { canvas: e } }][0]);
                      
                      ${HZ} = [...document.querySelector('#apple').children].map((e, j) => [{ wa: { canvas: e }, oa: { canvas: window.darks[j] } }][0]);


                      // if(${HZ}.length >= 22) {
                      //   for(let j = document.querySelector('#apple').children.length - 1; j >= 22; j++) {
                      //     ${HZ}.splice(j, 1);
                      //   }
                      // }
                      // if(${HZ}.length < 22) {
                      //   ${HZ}.push({ wa: { canvas: new Image }, oa: { canvas: new Image } });
                      //   for(let j = 22; j < document.querySelector('#apple').children.length; j++) {
                      //     ${HZ}.push({
                      //       wa: { canvas: document.querySelector('#apple').children[j] },
                      //       oa: { canvas: window.darks[j] },
                      //     });
                      //   }
                      // }
                      console.log(${HZ})
                    `
                  )
                );
              }, 250);


              // eval(`var bu_ = new Image(); bu_.src = 'https://i.postimg.cc/B6ycxmBb/porga.png';`);
              // eval(`var ca_ = new Image(); ca_.src = 'https://i.postimg.cc/RCDVL7Bf/index.png';`);
              // eval(`var do_ = new Image(); do_.src = 'https://i.postimg.cc/rsrbW0x6/dog.png';`);
              // eval(`var eg_ = new Image(); eg_.src = 'https://i.postimg.cc/501jDL9g/eg.png';`);
              // eval(`var li_ = new Image(); li_.src = 'https://i.postimg.cc/k5kWcyFB/lime.png';`);
              // eval(`var pe_ = new Image(); pe_.src = 'https://i.postimg.cc/BQqHMbDc/redpepper.png';`);
              // eval(
              //   code.match(
              //     /[a-zA-Z0-9_$]{1,8}=function\(a\){return a\.[a-zA-Z0-9_$]{1,8}\.canvas}/
              //   )[0].replace(
              //     '{',
              //     `{
              //       if(a.path && a.path.includes('apple') && [...document.querySelector('#apple').children].indexOf(document.getElementsByClassName('DqMRee tuJOWd')[0]) > 21)
              //         return document.querySelector('#apple').getElementsByClassName('DqMRee tuJOWd')[0].src.includes('porga') 
              //           ? bu_ 
              //         : document.querySelector('#apple').getElementsByClassName('DqMRee tuJOWd')[0].src.includes('index') 
              //           ? ca_ 
              //         : document.querySelector('#apple').getElementsByClassName('DqMRee tuJOWd')[0].src.includes('dog')
              //           ? do_ 
              //         : document.querySelector('#apple').getElementsByClassName('DqMRee tuJOWd')[0].src.includes('lime')
              //           ? li_
              //         : document.querySelector('#apple').getElementsByClassName('DqMRee tuJOWd')[0].src.includes('pepper')
              //           ? pe_
              //         : eg_;
                    
                    
              //     `
              //   )
              // );



              eval(
                code.match(
                  /[a-zA-Z0-9_$]{1,8}\.prototype\.[a-zA-Z0-9_$]{1,8}=function\(\){[^}]*?apple[^]*?el\(\)\)}}/
                )[0].replace(
                  'Math.floor(21*Math.random());',
                  `Math.floor((21 + ~~${settings.burger} + ~~${settings.cactus} + ~~${settings.hotdog} + ~~${settings.egg} + ~~${settings.lime} + ~~${settings.red_pepper} + ~~${settings.cane} + ~~${!!settings.custom_url} + ~~${settings.grey_skull}) * Math.random());`
                )
              );
            }

            eval(`var boxImage = new Image; boxImage.src = 'https://i.postimg.cc/C1w3nYcZ/box.png';`);
            setTimeout(function() {
              

              const box = code.match(
                /this\.[a-zA-Z0-9_$]{1,8}=new [a-zA-Z0-9_$]{1,8}\([^)}]*?box\.png[^})]*?\);/
              )[0].replace('this.', '').replace(/=new[^]*/g, '');

              
              eval(
                `
                var boxCanvas = document.createElement('canvas');
                boxCanvas.width = 1024;boxCanvas.height = 128;
                var bctx = boxCanvas.getContext('2d');

                bctx.drawImage(boxImage, 0, 0);
          
                bctx.fillStyle = '${settings.light_goal}';
                bctx.fillRect(256, 0, 128, 128);

                bctx.fillStyle = '${settings.dark_goal}';
                bctx.fillRect(277, 21, 85, 85);

                bctx.fillStyle = '${settings.light_goal}';
                bctx.fillRect(298, 42, 42, 42);

                bctx.fillStyle = '${settings.dark_goal}';
                bctx.fillRect(384, 0, 128, 128);

                bctx.fillStyle = '${settings.light_goal}';
                bctx.fillRect(405, 21, 85, 85);

                bctx.fillStyle = '${settings.dark_goal}';
                bctx.fillRect(426, 42, 42, 42);

                bctx.fillStyle = '${settings.light_goal}';
                bctx.fillRect(512, 0, 128, 128);

                bctx.fillStyle = '${settings.darker_goal}';
                bctx.fillRect(533, 21, 85, 85);

                bctx.fillStyle = '${settings.light_goal}';
                bctx.fillRect(554, 42, 42, 42);

                bctx.fillStyle = '${settings.darker_goal}';
                bctx.fillRect(640, 0, 128, 128);

                bctx.fillStyle = '${settings.light_goal}';
                bctx.fillRect(661, 21, 85, 85);

                bctx.fillStyle = '${settings.darker_goal}';
                bctx.fillRect(682, 42, 42, 42);


                `
              );

              eval(
                code.match(
                  /[a-zA-Z0-9_$]{1,8}=function\(a\){a\.[a-zA-Z0-9_$]{1,8}\.globalCompositeOperation[^}]*"source-over"}/
                )[0].replace(
                  /#94BD46/g,
                  settings.shadows
                )
              );

              const tkb = code.match(
                /this\.[a-zA-Z0-9_$]{1,8}=new [a-zA-Z0-9_$]{1,8}\("snake_arcade\/key_types_dark\.png",[^)]*?\)/
              )[0].match(/this\.[a-zA-Z0-9_$]{1,8}/)[0];

              const oa = code.match(
                /[a-zA-Z0-9_$]{1,8}=function\(a\){return a\.[a-zA-Z0-9_$]{1,8}\.canvas}/
              )[0].match(/a\.[a-zA-Z0-9_$]{1,8}\.canvas/)[0].replace('a.', '').replace('.canvas', '');


              eval(
                `_boorg = new Image;_boorg.src='${url_k}';_boorg.crossOrigin='Anonymous';
                boorg = { wa: { canvas: _boorg, }, oa: { canvas: _boorg, }, };`
              );
              eval(
                code.match(
                  /[a-zA-Z0-9_$]{1,8}\.prototype\.render=function\(a,b\){this\.[a-zA-Z0-9_$]{1,8}&&this[^]*?el\(\),a\)}/
                )[0].replace(
                  '{',
                  `{
                    this\.${box}\.wa = this.${box}.oa = { canvas: boxCanvas, };
                  `
                ).replace(
                  '#578A34',
                  settings.borders
                ).replaceAll(
                  '#578A34',
                  settings.walls
                ).replaceAll(
                  '#a2d149',
                  settings.light_squares
                ).replaceAll(
                  '#AAD751',
                  settings.dark_squares
                ).replaceAll(
                  tkb, 
                  'boorg'
                )
              );
              eval(
                code.match(
                  /[a-zA-Z0-9_$]{1,8}=function\(a,b,c,d\){a\.context\.fillStyle[^}]*?}}/
                )[0].replaceAll(
                  '#a2d149',
                  settings.light_squares
                ).replaceAll(
                  '#AAD751',
                  settings.dark_squares
                )
              );
              eval(
                code.match(
                  /[a-zA-Z0-9_$]{1,8}\.prototype\.[a-zA-Z0-9_$]{1,8}=function\(\){var a=this,b=[^]*?return b\.promise}/
                )[0].replaceAll(
                  '#a2d149',
                  settings.light_squares
                ).replaceAll(
                  '#AAD751',
                  settings.dark_squares
                )
              );

          
              
          
              eval(
                code.match(
                  /[a-zA-Z0-9_$]{1,8}\.prototype\.[a-zA-Z0-9_$]{1,8}=function\(a,b,c,d,e\){this\.[a-zA-Z0-9_$]{1,8}&&\(this\.[a-zA-Z0-9_$]{1,8}\.translate[^}]*?y\)\)}/
                )[0].replace(
                  '{',
                  `{
                    let canv = document.createElement('canvas');
                    canv.width = 403;canv.height = 110;
          
                    let ctx = canv.getContext('2d');
          
                    for(let i = 0; i < 12; i++) {
                      if(i % 2 === 0)
                        ctx.fillStyle = '${settings.dark_ee || settings.dark_squares}';
                      else
                        ctx.fillStyle = '${settings.light_ee || settings.light_squares}';
                      
                      ctx.fillRect(i * 34, 0, (i + 1) * 34, 34);
                    }
          
                    for(let i = 0; i < 12; i++) {
                      if(i % 2 === 0)
                        ctx.fillStyle = '${settings.light_ee || settings.light_squares}';
                      else
                        ctx.fillStyle = '${settings.dark_ee || settings.dark_squares}';
                      
                      ctx.fillRect(i * 34, 34, (i + 1) * 34, 69);
                    }
          
                    for(let i = 0; i < 12; i++) {
                      if(i % 2 === 0)
                        ctx.fillStyle = '${settings.dark_ee || settings.dark_squares}';
                      else
                        ctx.fillStyle = '${settings.light_ee || settings.light_squares}';
                      
                      ctx.fillRect(i * 34, 70, (i + 1) * 34, canv.height);
                    }
                    
                  `
                ).replace(
                  'drawImage(',
                  `
                  drawImage(Object.values(this).reduce(
                    (s, el) => s || (typeof el === 'string' ? el.includes('end_empty') : false), false
                  ) ? canv : 
                  `
                )
              );
            }, 250);
          }, 250);
        }
      }, 250);
    }, 500);
    window.snake_scheme_epic_cool = settings;
  };

  window.snake.dark = function() {
    return window.snake.scheme({
      score_bar:     '#262428',
      walls:         '#101010',
      borders:       '#2E2933',
      shadows:       '#302C35',
      light_squares: '#47404F',
      dark_squares:  '#423C49',
      buttons:       '#131323',
      sky:           '#191970',
      separators:    '#201559',
      burger:        true,
      lime:          true,
      red_pepper:    true,
      grey_skull:    true,
    });
  };
  window.snake.desert = function() {
    return window.snake.scheme({
      score_bar:     '#B2A350',
      background:    '#8C8340',
      borders:       '#B2A350',
      walls:         '#7F7339',
      shadows:       '#A9993C',
      light_squares: '#E8D56A',
      dark_squares:  '#C9B95C',
      cactus:        true,
    });
  };
  window.snake.pool = function() {
    return window.snake.scheme({
      score_bar:     '#192544',
      background:    '#214172',
      borders:       '#152549',
      shadows:       '#11529F',
      light_squares: '#359ECE',
      dark_squares:  '#3172AF',
      hotdog:        true,
    });
  };
  window.snake.colorful = function() {
    return window.snake.scheme({
      score_bar:     '#5C3E84',
      background:    '#4B4FA0',
      borders:       '#686EE2',
      shadows:       '#D75C4E',
      light_squares: '#FFA87B',
      dark_squares:  '#F35C6E',
    });
  };
  window.snake.light = function() {
    return window.snake.scheme({
      score_bar:     '#555273',
      background:    '#C0DDE8',
      borders:       '#65799B',
      shadows:       '#A6CCDE',
      light_squares: '#E2EFF1',
      dark_squares:  '#B6D5E1',
      buttons:       '#90B6D1', 
    });
  };
  window.snake.pink = function() {
    return window.snake.scheme({
      score_bar:     '#DB3C8A',
      background:    '#821655',
      borders:       '#A03271',
      shadows:       '#B64C9E',
      light_squares: '#EB92FB',
      dark_squares:  '#C855BC',
      buttons:       '#CA50CE',
    });
  };
  window.snake.end = function() {
    return window.snake.scheme({
      score_bar:     '#BBBBBB',
      background:    '#000000',
      borders:       '#888888',
      shadows:       '#DDDDDD',
      light_squares: '#FFFFFF',
      dark_squares:  '#FFFFFF',
      sky:           '#eaeaea',
      separators:    '#aeaeae',
      buttons:       '#bdbdbd',
      egg:           true,
    });
  };
  window.snake.christmas = function() {
    return window.snake.scheme({
      score_bar:       '#820003', 
      borders:         '#710000', 
      walls:           '#8a0000', 
      background:      '#000000', 
      shadows:         '#275812', 
      light_squares:   '#11a70a', 
      dark_squares:    '#20970f', 
      sky:             '#AAAAFF', 
      separators:      '#8888aa', 
      light_ee:        '#E2EFF1',
      dark_ee:         '#B6D5E1',
      buttons:         '#90B6D1', 
      custom_gradient: [ '#ff0000', '#008800', ],
      custom_yinyang:  [ '#00ffff', '#ff77ff', ],
      cane:            true,
      cracker:         true,
      tree:            true,
    });
  };



  function rgb_to_hsv(col) {
    let R = col.r / 255, G = col.g / 255, B = col.b / 255;
    let xmax = Math.max(R, G, B);
    let xmin = Math.min(R, G, B);
    let C = xmax - xmin;
    let h, s, v;
    v = xmax;
    h = (
      C === 0
        ? 0 
      : v === R
        ? 60 * (G - B) / C 
      : v === G
        ? 60 * (2 + (B - R) / C)
      : v === B
        ? 60 * (4 + (R - G) / C) 
      : 0
    );
    s = v == 0 ? 0 : C / v;
    return { h: h < 0 ? h + 360 : h, s: s, v: v, };
  }

  function hsv_to_rgb(col) {
    let C = col.v * col.s;
    let H = col.h / 60;
    let X = C * (1 - Math.abs((H % 2) - 1));
    
    let [ R, G, B, ] = (
      0 <= H && H <= 1 
        ? [ C, X, 0, ]
      : H <= 2 
        ? [ X, C, 0, ] 
      : H <= 3 
        ? [ 0, C, X, ] 
      : H <= 4 
        ? [ 0, X, C, ] 
      : H <= 5
        ? [ X, 0, C, ]
      : H <= 6
        ? [ C, 0, X, ] 
      : [ 0, 0, 0, ]
    );

    let m = col.v - C;
    let r = R + m, 
        g = G + m, 
        b = B + m;

    return { r: r * 255, g: g * 255, b: b * 255, };
  }


  function roundRect(ctx, x, y, width, height, radius, fill, stroke) {
    if(typeof stroke === 'undefined')
      stroke = false;
    if(typeof radius === 'undefined')
      radius = 5;
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    ctx.lineTo(x + radius, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();
    if(stroke)
      ctx.stroke();
    if(fill)
      ctx.fill();
  }

  function hex_to_rgb(hex) {
    hex = hex.replace('#', '');
    return {
      r: parseInt(hex.substring(0, 2), 16),
      g: parseInt(hex.substring(2, 4), 16),
      b: parseInt(hex.substring(4, 6), 16),
    };
  }

  function rgb_to_hex(col) {
    return `#${col.r.toString(16).padStart(2, '0')}${col.g.toString(16).padStart(2, '0')}${col.b.toString(16).padStart(2, '0')}`
  }

  function close(c0, c1, rr = 1, rg = rr, rb = rr) {
    return Math.abs(c0.r - c1.r) < rr &&
          Math.abs(c0.g - c1.g) < rg &&
          Math.abs(c0.b - c1.b) < rb;
  }

  function i(src) {
    let img = new Image();
    img.src = src;
    img.crossOrigin = 'Anonymous';
    img.width = img.height = 47;
    return img;
  }
}
