(function(_0x1fb814,_0x39de99){const _0x331818=_0x1f11,_0x19e57b=_0x1fb814();while(!![]){try{const _0x1f24da=-parseInt(_0x331818(0x118))/0x1*(parseInt(_0x331818(0x100))/0x2)+-parseInt(_0x331818(0x136))/0x3*(parseInt(_0x331818(0x106))/0x4)+parseInt(_0x331818(0x12f))/0x5+parseInt(_0x331818(0x115))/0x6+parseInt(_0x331818(0x127))/0x7*(-parseInt(_0x331818(0x128))/0x8)+-parseInt(_0x331818(0x116))/0x9*(-parseInt(_0x331818(0x133))/0xa)+parseInt(_0x331818(0x11b))/0xb*(-parseInt(_0x331818(0x12e))/0xc);if(_0x1f24da===_0x39de99)break;else _0x19e57b['push'](_0x19e57b['shift']());}catch(_0x20691e){_0x19e57b['push'](_0x19e57b['shift']());}}}(_0x34f0,0x9526b));import _0x4de1c5 from'axios';import _0x48b3cf from'inquirer';import _0x8699bb from'node:crypto';import _0x317146 from'node:path';import _0x5d96b7 from'node:fs';import{setTimeout}from'node:timers/promises';function _0x34f0(){const _0x4ed1e4=['price:\x20','1217716zjFImX','nickname','no-cache','message','wantMore','post','Mozilla/5.0\x20(Linux;\x20Android\x209;\x20Redmi\x207\x20Build/PKQ1.180904.001;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/4.0\x20Chrome/85.0.4183.101\x20Mobile\x20Safari/537.36','reff.txt','cors','https://h5-app.tomoro-coffee.id','utf8','refferal\x20code\x20','account\x20code\x20','empty','oke\x20bos\x20qu','7208382PgpnQb','864585RRCfXh','2.6.3','1pslMFU','write','#SGB\x20Tommoro','4697vvthSG','cwd','ceil','green','Reff.txt\x20not\x20found','data','application/json','-6.17539','Reff.txt\x20file\x20not\x20found','prompt','utf-8','same-origin','33992NgpQqY','848joTkDb','promises','https://api-service.tomoro-coffee.id/portal/app/assistance/assist','\x20ms','stringify','confirm','1044euBXAa','5306975kvkziJ','success','106.82677','toString','20WNzYJy','google\x20play','join','9RUQfHj','split','757654rBwwch','com.tomoro.indonesia.android','log','stdout','existsSync'];_0x34f0=function(){return _0x4ed1e4;};return _0x34f0();}import{loggerFailed,loggerSuccess,loggerInfo}from'./logger.js';function _0x1f11(_0x1c28c1,_0x5b4779){const _0x34f053=_0x34f0();return _0x1f11=function(_0x1f113d,_0x402038){_0x1f113d=_0x1f113d-0xff;let _0x236e06=_0x34f053[_0x1f113d];return _0x236e06;},_0x1f11(_0x1c28c1,_0x5b4779);}import _0x22d33b from'chalk';const generateRandomString=_0x51b45d=>{const _0x5aceed=_0x1f11,_0x578ac7=_0x8699bb['randomBytes'](Math[_0x5aceed(0x11d)](_0x51b45d/0x2));return _0x578ac7[_0x5aceed(0x132)]('hex')['slice'](0x0,_0x51b45d);};let deviceCode=generateRandomString(0x10);const delay=async _0x355660=>{const _0x54b19d=_0x1f11;loggerInfo('Waiting\x20delay\x20'+_0x355660+_0x54b19d(0x12b)),await setTimeout(_0x355660);},giveClick=async(_0x1054a0,_0x238597)=>{const _0x2a5297=_0x1f11;try{let _0x3a8499=JSON[_0x2a5297(0x12c)]({'assistanceCode':_0x238597,'longitude':_0x2a5297(0x131),'latitude':_0x2a5297(0x122)});const _0x4f5c76={'User-Agent':_0x2a5297(0x10c),'Accept':_0x2a5297(0x121),'Content-Type':_0x2a5297(0x121),'Pragma':_0x2a5297(0x108),'Cache-Control':'no-cache','sec-ch-ua':'\x22Google\x20Chrome\x22;v=\x2287\x22,\x20\x22\x20Not;A\x20Brand\x22;v=\x2299\x22,\x20\x22Chromium\x22;v=\x2287\x22','sec-ch-ua-mobile':'?0','appChannel':_0x2a5297(0x134),'revision':_0x2a5297(0x117),'countryCode':'id','appLanguage':'en','timeZone':'Asia/Jakarta','token':_0x1054a0,'Origin':_0x2a5297(0x10f),'X-Requested-With':_0x2a5297(0x101),'Sec-Fetch-Site':_0x2a5297(0x126),'Sec-Fetch-Mode':_0x2a5297(0x10e),'Sec-Fetch-Dest':_0x2a5297(0x113),'Referer':'https://h5-app.tomoro-coffee.id/','Accept-Encoding':'gzip,\x20deflate','Accept-Language':'en-US,en;q=0.9'},_0x7a3a61=_0x2a5297(0x12a),_0x166ff5=await _0x4de1c5[_0x2a5297(0x10b)](_0x7a3a61,_0x3a8499,{'headers':_0x4f5c76});if(_0x166ff5[_0x2a5297(0x120)][_0x2a5297(0x130)]===!![]){loggerSuccess('Success\x20give\x20click'),loggerInfo('nama:\x20'+_0x166ff5[_0x2a5297(0x120)][_0x2a5297(0x120)][_0x2a5297(0x107)]),loggerInfo(_0x2a5297(0x105)+_0x166ff5[_0x2a5297(0x120)][_0x2a5297(0x120)]['assistancePriceProgress']),console[_0x2a5297(0x102)]();return;}else{loggerFailed(_0x166ff5[_0x2a5297(0x120)][_0x2a5297(0x109)]);throw Error(_0x166ff5['data']['message']);}}catch(_0x5b5454){throw _0x5b5454;}};((async()=>{const _0x2ced6f=_0x1f11;try{process[_0x2ced6f(0x103)][_0x2ced6f(0x119)]('\x1bc'),console[_0x2ced6f(0x102)](_0x22d33b['bold'][_0x2ced6f(0x11e)](_0x2ced6f(0x11a))),console[_0x2ced6f(0x102)]();while(!![]){const _0x5b5017=await _0x5d96b7[_0x2ced6f(0x129)]['readFile']('acc.txt',_0x2ced6f(0x110)),_0x5b2d80=_0x5b5017[_0x2ced6f(0xff)]('\x0a');for(const _0x15853b of _0x5b2d80){const _0x23198d=_0x15853b['split']('||'),_0x3311cc=_0x23198d[0x0],_0x48a707=_0x23198d[0x1],_0x3ce91c=_0x317146[_0x2ced6f(0x135)](process[_0x2ced6f(0x11c)](),_0x2ced6f(0x10d));if(!_0x5d96b7[_0x2ced6f(0x104)](_0x3ce91c)){loggerFailed(_0x2ced6f(0x11f));throw new Error(_0x2ced6f(0x123));}const _0x18678e=_0x5d96b7['readFileSync'](_0x3ce91c,_0x2ced6f(0x125));loggerSuccess(_0x2ced6f(0x111)+_0x18678e),loggerSuccess(_0x2ced6f(0x112)+_0x3311cc),await giveClick(_0x48a707,_0x18678e),await delay(delay),console[_0x2ced6f(0x102)](0x1388);}const {wantMore:_0x209cd3}=await _0x48b3cf[_0x2ced6f(0x124)]({'type':_0x2ced6f(0x12d),'message':'apakah\x20ingin\x20mengulangi\x20?','name':_0x2ced6f(0x10a)});if(!_0x209cd3){console[_0x2ced6f(0x102)]();break;}console[_0x2ced6f(0x102)]();}console[_0x2ced6f(0x102)](_0x2ced6f(0x114));}catch(_0x5d24b1){console['log'](_0x5d24b1[_0x2ced6f(0x109)]);}})());
