
window.moreMenu = {};

moreMenu.runCodeBefore = function() {
  window.uiImage = function(src) {
    let img = new Image();
    img.src = src;
    img.width = 40;
    img.height = 40;
    img.class = 'DqMRee SsAred';
    return img;
  };
  

  /*--sizes--*/
  for(let src of [
    'https://github.com/carlgustavh/GoogleSnakeCustomMenuStuffImages/blob/main/Micro.png?raw=true',
    'https://github.com/carlgustavh/GoogleSnakeCustomMenuStuffImages/blob/main/Tiny.png?raw=true',
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAAvCAYAAABzJ5OsAAABYElEQVRoQ+2Y2w7DIAxD1///6E2VRsUYJXZuFIm9AuHEMSzleC38OxZmf214oXrvZtxNMEugAtWL0QLX/JY9f3SwBGLgz31G81VHLwq+B1NXw7LvFdsSRKOkZs1tVTY8aNilbeNqmVOwTNssC+9umUzl3VXf8OC5WVb5EL9n2CYMPBPeciVPaw9CvF6ysSiCgIV9iFhtg7Q0oR8lFuUR+HrOKBGVEzLh3ROZBS99aUGWfhI8a0NTS0xv5r1ghvLIFQvl+SR4OikGvhec3XDU67CxKM+3wTVNF/JQBQsKT6xevMo1RislvJrR8Rj4E7r3L8nEmKZ8D54Br9ePHmfhmPDE792l8Xm59qS1qbbRJn63LhQ+w+9QT6NpQe9aWrQCroeVybL1q+TfUdfoclg18PXGjEelZJlYlzBoyaFGaTBJgpPGu6E3PFAWSVlp/NHKA/n/T8myjQpOWrThJYWixj+UTlgwJgIXFAAAAABJRU5ErkJggg==',
    'https://github.com/carlgustavh/GoogleSnakeCustomMenuStuffImages/blob/main/Super%20Big.png?raw=true',
    'https://github.com/carlgustavh/GoogleSnakeCustomMenuStuffImages/blob/main/Too%20Big.png?raw=true',
    'https://github.com/carlgustavh/GoogleSnakeCustomMenuStuffImages/blob/main/Humongous.png?raw=true',
    'https://github.com/carlgustavh/GoogleSnakeCustomMenuStuffImages/blob/main/Too%20Big.png?raw=true',
    'https://github.com/carlgustavh/GoogleSnakeCustomMenuStuffImages/blob/main/Way%20Too%20Big.png?raw=true',
  ]) document.querySelector('#size').appendChild(uiImage(src));
  


  /*--SPEEDS--*/

  for(let src of [
    'https://i.postimg.cc/bNYJfjyZ/Turtle-Bunny.png',
    'https://i.postimg.cc/GtdppWvS/Lightning.png',
    'https://i.postimg.cc/L43XWspd/Snail.png',
    'https://i.postimg.cc/brgwSmTY/Lightning-Snail.png',
    'https://i.postimg.cc/yN3xpXVn/Desert-Bus.png',
    'https://i.postimg.cc/dVLVDmTv/Bullet.png',
    'https://i.postimg.cc/4N83JFyB/Red-Bullet.png',
    'https://i.postimg.cc/MpNKBMyB/Purple-Bullet.png',
    'https://i.postimg.cc/qRdJmPDM/Blue-Bullet.png',
    'https://i.postimg.cc/fL4LGtys/Eternal.png',
    'https://i.postimg.cc/LXzX29g1/Fire-Bunny.png',
  ]) document.querySelector('#speed').appendChild(uiImage(src));


  /*--COUNTS--*/
  
  for(let src of [
    'https://i.postimg.cc/cJx1Lt2W/13-cr.png',
    'https://i.postimg.cc/HWq26Bdv/25.png',
    'https://i.postimg.cc/c4fc2wJx/40.png',
    'https://i.postimg.cc/50sStLRc/87.png',
    'https://i.postimg.cc/YCkxH041/Apple-Bomb.png',
    'https://i.postimg.cc/wMx20pWL/Nuke.png',
  ]) document.querySelector('#count').appendChild(uiImage(src));

};

moreMenu.alterSnakeCode = function(code) {
  const resetFunction = code.match(
    /[a-zA-Z0-9_$]{1,8}\n?\.\n?prototype\n?\.\n?reset\n?=\n?function\n?\(\)\n?{\n?this\n?\.\n?[a-zA-Z0-9_$]{1,8}\n?=\n?\[\];[^]*?Set\n?\)\n?}/
  )[0];

  const selectedAppleCount = resetFunction.match(
    /0\n?!==\n?this\n?\.\n?settings\n?\.\n?[a-zA-Z0-9_$]{1,8}/
  )[0].replace(/0\n?!==/, '').replace(/\n/g, '');

  const applePlacementStem = resetFunction.match(
    /this\n?\.\n?[a-zA-Z0-9_$]{1,8}\n?\.\n?push\n?\(\n?[a-zA-Z0-9_$]{1,8}\n?\(\n?this\n?,/
  )[0];
  const appleArray = applePlacementStem.match(/this\n?\.\n?[a-zA-Z0-9_$]{1,8}/)[0];

  const checkBadMode = code.match(
    /[a-zA-Z0-9_$]{1,8}\n?=\n?function\n?\(a\)\n?{\n?return [a-zA-Z0-9_$]{1,8}\n?\(\n?a\n?,\n?2\n?\)\n?\|\|\n?[a-zA-Z0-9_$]{1,8}\n?\(a\n?,\n?8\n?\)\n?\|\|\n?[a-zA-Z0-9_$]{1,8}\n?\(\n?a\n?,\n?9\n?\)\n?\|\|\n?[a-zA-Z0-9_$]{1,8}\n?\(\n?a\n?,\n?10\n?\)\n?}/
  )[0].match(/[a-zA-Z0-9_$]{1,8}/)[0];
  const isModeSelected = code.match(
    /[a-zA-Z0-9_$]{1,8}\n?=\n?function\n?\(\n?a\n?,\n?b\n?\)\n?{\n?return 16\n?===\n?a[^}]*?===\n?b\n?}/
  )[0].match(/[a-zA-Z0-9_$]{1,8}/)[0];


  // handle new apple counts
  code = code.assertReplace(resetFunction,
    resetFunction.assertReplace(
      'if(a)',
      `
      if(${selectedAppleCount} > 3) {
        if(!${checkBadMode}(this.settings)) {
          if(${selectedAppleCount} === 4) {
            ${applePlacementStem} 1, 2));
            ${applePlacementStem} -1, 2));
            ${applePlacementStem} -3, 2));
            ${applePlacementStem} 0, 1));
            ${applePlacementStem} -2, 1));
            ${applePlacementStem} 1, 0));
            ${applePlacementStem} -1, 0));
            ${applePlacementStem} -3, 0));
            ${applePlacementStem} 0, -1));
            ${applePlacementStem} -2, -1));
            ${applePlacementStem} 1, -2));
            ${applePlacementStem} -1, -2));
            ${applePlacementStem} -3, -2));
          } else if(${selectedAppleCount} === 5) {
            ${applePlacementStem} 1, 2));
            ${applePlacementStem} 0, 2));
            ${applePlacementStem} -1, 2));
            ${applePlacementStem} -2, 2));
            ${applePlacementStem} -3, 2));
            ${applePlacementStem} 1, 1));
            ${applePlacementStem} 0, 1));
            ${applePlacementStem} -1, 1));
            ${applePlacementStem} -2, 1));
            ${applePlacementStem} -3, 1));
            ${applePlacementStem} 1, 0));
            ${applePlacementStem} 0, 0));
            ${applePlacementStem} -1, 0));
            ${applePlacementStem} -2, 0));
            ${applePlacementStem} -3, 0));
            ${applePlacementStem} 1, -1));
            ${applePlacementStem} 0, -1));
            ${applePlacementStem} -1, -1));
            ${applePlacementStem} -2, -1));
            ${applePlacementStem} -3, -1));
            ${applePlacementStem} 1, -2));
            ${applePlacementStem} 0, -2));
            ${applePlacementStem} -1, -2));
            ${applePlacementStem} -2, -2));
            ${applePlacementStem} -3, -2));
          } else if(${selectedAppleCount} === 6) {
            ${applePlacementStem} 1, 2));
            ${applePlacementStem} 0, 2));
            ${applePlacementStem} -1, 2));
            ${applePlacementStem} -2, 2));
            ${applePlacementStem} -3, 2));
            ${applePlacementStem} 1, 1));
            ${applePlacementStem} 0, 1));
            ${applePlacementStem} -1, 1));
            ${applePlacementStem} -2, 1));
            ${applePlacementStem} -3, 1));
            ${applePlacementStem} 1, 0));
            ${applePlacementStem} 0, 0));
            ${applePlacementStem} -1, 0));
            ${applePlacementStem} -2, 0));
            ${applePlacementStem} -3, 0));
            ${applePlacementStem} 1, -1));
            ${applePlacementStem} 0, -1));
            ${applePlacementStem} -1, -1));
            ${applePlacementStem} -2, -1));
            ${applePlacementStem} -3, -1));
            ${applePlacementStem} 1, -2));
            ${applePlacementStem} 0, -2));
            ${applePlacementStem} -1, -2));
            ${applePlacementStem} -2, -2));
            ${applePlacementStem} -3, -2));
            ${applePlacementStem} -3, -3));
            ${applePlacementStem} -2, -3));
            ${applePlacementStem} -1, -3));
            ${applePlacementStem} 0, -3));
            ${applePlacementStem} 1, -3));
            ${applePlacementStem} 2, -2));
            ${applePlacementStem} 2, -1));
            ${applePlacementStem} 2, 0));
            ${applePlacementStem} 2, 1));
            ${applePlacementStem} 2, 2));
            ${applePlacementStem} 1, 3));
            ${applePlacementStem} 0, 3));
            ${applePlacementStem} -1, 3));
            ${applePlacementStem} -2, 3));
            ${applePlacementStem} -3, 3));
          } else if(${selectedAppleCount} === 7) {
            for (i=-7;i<3;i++) {
              ${applePlacementStem} i, -4));
            }
            for (i=-7;i<3;i++) {
              ${applePlacementStem} i, -3));
            }
            for (i=-7;i<3;i++) {
              ${applePlacementStem} i, -2));
            }
            for (i=-7;i<3;i++) {
              ${applePlacementStem} i, -1));
            }
            for (i=-3;i<3;i++) {
              ${applePlacementStem} i, 0));
            }
            for (i=-7;i<3;i++) {
              ${applePlacementStem} i, 1));
            }
            for (i=-7;i<3;i++) {
              ${applePlacementStem} i, 2));
            }
            for (i=-7;i<3;i++) {
              ${applePlacementStem} i, 3));
            }
            for (i=-7;i<3;i++) {
              ${applePlacementStem} i, 4));
            }
          } else if(${selectedAppleCount} === 8) {
            for (i=0;i<200;i++) {
              ${applePlacementStem} -1, 0));
            }
          } else if(${selectedAppleCount} === 9) {
              for (i=0;i<10000;i++) {
                ${applePlacementStem} -1, 0));
              }
          } else
            ${applePlacementStem} 100000, 1));

        } else {
          if(${selectedAppleCount} < 8)
            for(
              let i = 0; i < (
                ${selectedAppleCount} === 4
                  ? 13
                : ${selectedAppleCount} === 5
                  ? 25
                : ${selectedAppleCount} === 6
                  ? 40
                : ${selectedAppleCount} === 7
                  ? 100
                : ${selectedAppleCount} === 8
                  ? 0
                : ${selectedAppleCount} === 9
                  ? 0
                : 0
              ); i++
            ) {
              ${applePlacementStem} i - ~~((
                ${selectedAppleCount} === 4
                  ? 13
                : ${selectedAppleCount} === 5
                  ? 25
                : ${selectedAppleCount} === 6
                  ? 40
                : ${selectedAppleCount} === 7
                  ? 100
                : ${selectedAppleCount} === 8
                  ? 0
                : ${selectedAppleCount} === 9
                  ? 0
                : 0
              ) / 1.25), -4));
              ${applePlacementStem} i- ~~((
                ${selectedAppleCount} === 4
                  ? 13
                : ${selectedAppleCount} === 5
                  ? 25
                : ${selectedAppleCount} === 6
                  ? 40
                : ${selectedAppleCount} === 7
                  ? 100
                : ${selectedAppleCount} === 8
                  ? 0
                : ${selectedAppleCount} === 9
                  ? 0
                : 0
              ) / 1.25), 4));
              
            }
          else {
            for(let i = 0; i < (
              ${selectedAppleCount} === 8
                ? 200
              : 20000
            ); i++)
              ${applePlacementStem} 0, 0));
          }
        }
      } else if(a)
      `
    ).assertReplace(
      'Set)}',
      `Set);
        if(${isModeSelected}(this.settings, 2) && ${selectedAppleCount} > 4) {
          for(let __i___ = 0; __i___ < ${appleArray}.length; __i___ += 2) {
            ${appleArray}[__i___].type = ${appleArray}[__i___ + 1].type = ~~(Math.random() * 21);
          }
        }
        
      }`
    )
  );

  
  const tileLengthSetLine = code.match(
    /this\n?\.\n?[a-zA-Z0-9_$]{1,8}\n?=\n?\(\n?a\n?\.\n?isMobile\n?\?\n?175\n?:\n?135\n?\)\n?\*\n?b\n?;/
  )[0];
  const selectedSpeed = code.match(
    /switch\n?\(\n?a\n?\.\n?[a-zA-Z0-9_$]{1,8}\n?\)\n?{\n?case( |\n)1\n?:\n?b\n?=\n?\.66/
  )[0].match( 
    /a\n?\.\n?[a-zA-Z0-9_$]{1,8}/
  )[0].replace('a', 'this.settings');

  const tickFunction = code.match(
    /[a-zA-Z0-9_$]{1,8}\n?\.\n?prototype\n?\.\n?tick\n?=\n?function\n?\(\)\n?{\n?[^]*?this\n?\.\n?[a-zA-Z0-9_$]{1,8}\n?\.\n?keys\n?,\n?this\n?\.\n?[a-zA-Z0-9_$]{1,8}\n?\.\n?[a-zA-Z0-9_$]{1,8}\n?\)\n?}\n?}\n?}\n?}/
  )[0];
  const replacePoint = tickFunction.match(
    /\.5\n?:\n?1\.25\n?\);\n?this\n?\.\n?[a-zA-Z0-9_$]{1,8}\+\+;/
  )[0];

  window.bunnyTurtleSpeed = 1.33;
  window.lightningSnailSpeed = 1.85;

  code = code.assertReplace(tickFunction,
    tickFunction.assertReplace(
      replacePoint,
      replacePoint + `
        window.bunnyTurtleSpeed = Math.random() < .5 ? .66 : 1.33;
        window.lightningSnailSpeed = Math.random() < .5 ? .45 : 1.85;
        let speedMultiplier;
        switch(${selectedSpeed}) {
          case 1:  speedMultiplier = .66;                        break;
          case 2:  speedMultiplier = 1.33;                       break;
          case 3:  speedMultiplier = window.bunnyTurtleSpeed;    break;
          case 4:  speedMultiplier = .45;                        break;
          case 5:  speedMultiplier = 1.85;                       break;
          case 6:  speedMultiplier = window.lightningSnailSpeed; break;
          case 7:  speedMultiplier = 18.5;                       break;
          case 8:  speedMultiplier = .35;                        break;
          case 9:  speedMultiplier = .25;                        break;
          case 10: speedMultiplier = .15;                        break;
          case 11: speedMultiplier = .05;                        break;
          case 12: speedMultiplier = 26640;                      break;
          case 13: speedMultiplier = .00001;                     break;
          default: speedMultiplier = 1;                          break;
        }
        ${tileLengthSetLine.replace(/\*\n?b/, '* speedMultiplier')}
      `
    )
  );

  const resetFunction1 = code.match(
    /[a-zA-Z0-9_$]{1,8}\n?\.\n?prototype\n?\.\n?reset\n?=\n?function\n?\(a\)\n?{\n?this\n?\.\n?[a-zA-Z0-9_$]{1,8}\n?=\n?null[^]*?\.66[^]*?!0\n?\)\n?\)\n?}/
  )[0];

  code = code.assertReplace(resetFunction1,
    resetFunction1.assertReplace(
      /{case 1:b=\.66[^}]*?1}/,
      `{
        case 1:  b = .66;                        break a;
        case 2:  b = 1.33;                       break a;
        case 3:  b = window.bunnyTurtleSpeed;    break a;
        case 4:  b = .45;                        break a;
        case 5:  b = 1.85;                       break a;
        case 6:  b = window.lightningSnailSpeed; break a;
        case 7:  b = 18.5;                       break a;
        case 8:  b = .35;                        break a;
        case 9:  b = .25;                        break a;
        case 10: b = .15;                        break a;
        case 11: b = .05;                        break a;
        case 12: b = 26640;                      break a;
        case 13: b = .00001;                     break a;
        default: b = 1;                          break a;
      }`
    )
  );

  const speedIconFunction = code.match(
    /[a-zA-Z0-9_$]{1,8}\n?=\n?function\n?\(a\)\n?{\n?var b\n?=\n?1\n?===\n?a\n?\.\n?settings\n?\.\n?[a-zA-Z0-9_$]{1,8};\n?a\n?\.\n?[a-zA-Z0-9_$]{1,8}\n?\.\n?clearRect\n?\(\n?0\n?,\n?0\n?,\n?[^]*?\n?0\n?\)\n?,\n?0\n?,\n?c\n?,\n?a\n?\.\n?settings\n?\.\n?[a-zA-Z0-9_$]{1,8}\n?\)\n?}/
  )[0];
  const canvWidth = speedIconFunction.match(
    /var c\n?=\n?a\n?\.\n?[a-zA-Z0-9_$]{1,8}\n?\.\n?width/
  )[0].assertReplace(/var c\n?=/, '');
  const canv = speedIconFunction.match(
    /a\n?\.\n?[a-zA-Z0-9_$]{1,8}\n?\.\n?render/g
  )[1].assertReplace(/.\n?render/, '');
  const selectedSpeed1 = speedIconFunction.match(
    /1\n?===\n?a\n?\.\n?settings\n?\.\n?[a-zA-Z0-9_$]{1,8}/g
  )[1].assertReplace(/1\n?===/, '');

  code = code.assertReplace(speedIconFunction,
    speedIconFunction.assertReplace(
      '&&', '?'
    ).assertReplace(
      /\)\n?\)\n?;/,
      `)) : ${selectedSpeed1} !== 0 && (${canv}.context.drawImage(document.querySelector('#speed').children[${selectedSpeed1}], ${canvWidth} - 80, d.y - 80, 80, 80));`
    )
  );


  const sizeHandleFunction = code.match(
    /_\n?\.\n?[a-zA-Z0-9_$]{1,8}\n?\.\n?[a-zA-Z0-9_$]{1,8}\n?=\n?function\n?\(\)\n?{\n?var a\n?=\n?_\n?\.\n?[a-zA-Z0-9_$]{1,8}\n?\.\n?[a-zA-Z0-9_$]{1,8}\n?\(\n?this\n?\.\n?[a-zA-Z0-9_$]{1,8}\n?\.\n?[a-zA-Z0-9_$]{1,8}\n?\(\n?\)\n?\);\n?[^]*?\n?a\n?\)\n?}\n?}/
  )[0];
  const selectedSize = sizeHandleFunction.match(
    /switch\n?\(\n?this\n?\.\n?settings\n?\.\n?[a-zA-Z0-9_$]{1,8}\n?\)\n?{\n?case 2\n?:/
  )[0].match(/this\n?\.\n?settings\n?\.\n?[a-zA-Z0-9_$]{1,8}/)[0];
  const sizeHold = sizeHandleFunction.match(
    /d\n?\.\n?[a-zA-Z0-9_$]{1,8}\n?=\n?new _\n?\.\n?[a-zA-Z0-9_$]{1,8}\n?\(\n?Math\n?\.\n?floor\n?\(\n?b\n?\/\n?d\n?\.\n?[a-zA-Z0-9_$]{1,8}\n?\)\n?,\n?Math\n?\.\n?floor\n?\(\n?c\n?\/\n?d\n?\.\n?[a-zA-Z0-9_$]{1,8}\n?\)\n?\)\n?\)\n?;/
  )[0];
  const sizeHolder = sizeHold.match(/d\n?\.\n?[a-zA-Z0-9_$]{1,8}/)[0];
  const dim = sizeHold.match(/b\n?\/\n?d\n?\.\n?[a-zA-Z0-9_$]{1,8}/)[0].replace(/b\n?\//, '');

  code = code.assertReplace(sizeHandleFunction,
    sizeHandleFunction.assertReplace(
      sizeHold,
      `
      ${sizeHolder} = {
        width:  ${selectedSize} === 3 ? 5 : ${selectedSize} === 4 ? 7 : ${selectedSize} === 5 ? 12 : ${selectedSize} === 6 ? 37 : ${selectedSize} === 7 ? 64 : ${selectedSize} === 8 ? 105 : ${selectedSize} === 9 ? 168 : ${selectedSize} === 10 ? 600 : Math.floor(b/${dim}),
        height: ${selectedSize} === 3 ? 4 : ${selectedSize} === 4 ? 6 : ${selectedSize} === 5 ? 11 : ${selectedSize} === 6 ? 32 : ${selectedSize} === 7 ? 56 : ${selectedSize} === 8 ? 92  : ${selectedSize} === 9 ? 147 : ${selectedSize} === 10 ? 530 : Math.floor(c/${dim})
      });

      let squareSize = 600 / ${sizeHolder}.width;
      if(squareSize * ${sizeHolder}.height > 530)
        squareSize = 530 / ${sizeHolder}.height;
      squareSize *= .98;
      if(squareSize > 1) squareSize = ~~squareSize;
      ${selectedSize} >= 3 && (${dim} = squareSize);
      `
    )
  );

  const menuUpdateFunction = code.match(
    /[a-zA-Z0-9_$]{1,8}\n?\.\n?prototype\n?\.\n?[a-zA-Z0-9_$]{1,8}\n?=\n?function\n?\(\)\n?{\n?if\n?\(\n?[a-zA-Z0-9_$]{1,8}\n?\(\n?this\n?\)\n?\)\n?[^]*?"thso6e"\n?\)\n?}\n?}/
  )[0];
  const selectedAppleCount1 = `([...document.querySelector('#count').children].indexOf(document.querySelector('#count').getElementsByClassName('tuJOWd')[0]))`;


  code = code.assertReplace(
    menuUpdateFunction,
    menuUpdateFunction.assertReplace(
      '}}',
      `}
        const appleCountDisplay = document.body.getElementsByClassName('UJhXPd wSwbef EWyEF')[0];

        [...appleCountDisplay.children].forEach((e, i) => i > 1 && (appleCountDisplay.removeChild(appleCountDisplay.children[i])));

        if(${selectedAppleCount1} > 2) {
          const __src = document.querySelector('#count').children[${selectedAppleCount1}].src;
          const __img = window.uiImage(__src);
          __img.style.position = 'relative';
          __img.style.left = '50px';
          appleCountDisplay.appendChild(__img);
        }
      }
      `
    )
  );
  

  return code;
};

moreMenu.runCodeAfter = function() {
  let modIndicator = document.createElement('div');
  modIndicator.style = 'position:absolute;font-family:Roboto,Arial,sans-serif;color:white;font-size:14px;padding-top:4px;padding-left:30px;user-select: none;';
  modIndicator.textContent = 'More Menu Mod';
  let canvasNode = document.getElementsByClassName('jNB0Ic')[0];
  document.getElementsByClassName('EjCLSb')[0].insertBefore(modIndicator, canvasNode);
};
