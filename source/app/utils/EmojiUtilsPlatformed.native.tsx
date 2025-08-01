// app/utils/EmojiUtilsPlatformed.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var9 = function getURL(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arg1;
            var1 = null;
            if(!(var1 != var4)) { _fun0001_ip = 50; continue _fun0001 }
 9:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 5;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var1 = var2.isAndroid;
            var2 = var1.bind(var2)();
            var1 = '';
            if(!var2) { _fun0001_ip = 105; continue _fun0001 }
 50:
            var2 = _closure1_slot7;
            var3 = var2.convert;
            var2 = var3.toCodePoint;
            var5 = var2.bind(var3)(var4);
            var2 = global;
            var2 = var2.HermesInternal;
            var4 = var2.concat;
            var3 = 'asset:/emoji-';
            var2 = '.png';
            var1 = var4.bind(var3)(var5, var2);
 105:
            return var1;
        }
    };
    var _closure1_slot8 = var9;
    var1 = function _getEmojiColors() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    StartGenerator();
                    var3 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 282; continue _fun0002 }
 13:
                    var8 = var3.id;
                    var6 = var3.name;
                    var5 = null;
                    if(!(var5 == var8)) { _fun0002_ip = 45; continue _fun0002 }
 29:
                    var4 = _closure1_slot8;
                    var2 = undefined;
                    var7 = var4.bind(var2)(var6);
                    _fun0002_ip = 101; continue _fun0002;
 45:
                    var6 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 7;
                    var4 = var4[var2];
                    var2 = undefined;
                    var6 = var6.bind(var2)(var4);
                    var4 = var6.getEmojiURL;
                    var2 = {'id': null, 'size': 32, 'animated': false};
                    var2['id'] = var8;
                    var7 = var4.bind(var6)(var2);
 101:
                    var2 = '';
                    if(!(var2 === var7)) { _fun0002_ip = 201; continue _fun0002 }
 109:
                    var4 = _closure1_slot5;
                    var6 = var4.ImageManager;
                    var4 = var6.getEmojiBase64;
                    var3 = var3.name;
                    var9 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var2 = 8;
                    var8 = var8[var2];
                    var2 = undefined;
                    var2 = var9.bind(var2)(var8);
                    var2 = var2.EMOJI_IN_ANIMATION_SIZE;
                    var2 = var4.bind(var6)(var3, var2);
                    SaveGenerator(address=171);
 169:
                    return var2;
 171:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0002_ip = 279; continue _fun0002 }
 177:
                    var3 = global;
                    var3 = var3.HermesInternal;
                    var4 = var3.concat;
                    var3 = 'data:image/png;base64,';
                    var7 = var4.bind(var3)(var2);
 201:
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 9;
                    var3 = var4[var3];
                    var4 = undefined;
                    var6 = var6.bind(var4)(var3);
                    var3 = var6.getPaletteForAvatar;
                    var3 = var3.bind(var6)(var7);
                    SaveGenerator(address=241);
 239:
                    return var3;
 241:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                    if(var6) { _fun0002_ip = 276; continue _fun0002 }
 247:
                    var5 = var5 == var3;
                    var4 = undefined;
                    if(var5) { _fun0002_ip = 273; continue _fun0002 }
 256:
                    var6 = var3.map;
                    var5 = function(arg1) {
                        var4 = _closure1_slot3;
                        var6 = undefined;
                        var3 = arg1;
                        var2 = 3;
                        var3 = var4.bind(var6)(var3, var2);
                        var2 = 0;
                        var5 = var3[var2];
                        var2 = 1;
                        var4 = var3[var2];
                        var2 = 2;
                        var3 = var3[var2];
                        var2 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var1 = 10;
                        var1 = var7[var1];
                        var2 = var2.bind(var6)(var1);
                        var1 = var2.rgbToHex;
                        var1 = var1.bind(var2)(var5, var4, var3);
                        return var1;
                    };
                    var4 = var6.bind(var3)(var5);
 273:
                    return var4;
 276:
                    return var3;
 279:
                    return var2;
 282:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot9 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot9 = var1;
    var1 = global;
    var10 = var1.Object;
    var7 = var10.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var10)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var8.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var7 = var2.NativeModules;
    var _closure1_slot5 = var7;
    var2 = var2.processColor;
    var _closure1_slot6 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = {};
    var7 = 12;
    var7 = var6[var7];
    var8 = var8.bind(var1)(var7);
    var7 = var8.makeMemoizer;
    var7 = var7.bind(var8)(var9);
    var2['getURL'] = var7;
    var7 = function filterUnsupportedEmojis(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var5 = arg1;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 5;
            var1 = var4[var1];
            var4 = undefined;
            var3 = var3.bind(var4)(var1);
            var1 = var3.isAndroid;
            var3 = var1.bind(var3)();
            var1 = var5;
            if(var3) { _fun0003_ip = 81; continue _fun0003 }
 43:
            var3 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 6;
            var2 = var6[var2];
            var4 = var3.bind(var4)(var2);
            var3 = var4.filter;
            var2 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var1 = arg1;
                    var3 = var1.unicodeVersion;
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var7 = 4;
                    var1 = var1[var7];
                    var8 = undefined;
                    var2 = var2.bind(var8)(var1);
                    var1 = var2.getSystemVersion;
                    var4 = var1.bind(var2)();
                    var2 = var4.split;
                    var1 = '.';
                    var1 = var2.bind(var4)(var1);
                    var2 = global;
                    var6 = var2.parseInt;
                    var5 = 0;
                    var4 = var1[var5];
                    var4 = var6.bind(var8)(var4);
                    var9 = var1.length;
                    var6 = 1;
                    var9 = var9 > var6;
                    if(!var9) { _fun0004_ip = 106; continue _fun0004 }
 91:
                    var2 = var2.parseInt;
                    var1 = var1[var6];
                    var5 = var2.bind(var8)(var1);
 106:
                    var1 = 8;
                    var2 = var3 > var1;
                    var1 = true;
                    if(!var2) { _fun0004_ip = 521; continue _fun0004 }
 121:
                    var2 = 9;
                    if(!(var2 !== var3)) { _fun0004_ip = 491; continue _fun0004 }
 131:
                    var2 = 10;
                    if(!(var2 !== var3)) { _fun0004_ip = 462; continue _fun0004 }
 141:
                    var2 = 11;
                    if(!(var2 !== var3)) { _fun0004_ip = 433; continue _fun0004 }
 151:
                    var2 = 12;
                    if(!(var2 !== var3)) { _fun0004_ip = 401; continue _fun0004 }
 161:
                    var2 = 12.1;
                    if(!(var2 !== var3)) { _fun0004_ip = 401; continue _fun0004 }
 178:
                    var2 = 13;
                    if(!(var2 !== var3)) { _fun0004_ip = 369; continue _fun0004 }
 188:
                    var2 = 13.1;
                    if(!(var2 !== var3)) { _fun0004_ip = 334; continue _fun0004 }
 205:
                    var2 = 14;
                    if(!(var2 !== var3)) { _fun0004_ip = 302; continue _fun0004 }
 212:
                    var2 = 15;
                    if(!(var2 !== var3)) { _fun0004_ip = 270; continue _fun0004 }
 219:
                    var1 = false;
                    var2 = 15.1;
                    if(!(var2 === var3)) { _fun0004_ip = 521; continue _fun0004 }
 238:
                    var3 = 17;
                    var2 = var4 > var3;
                    if(var2) { _fun0004_ip = 262; continue _fun0004 }
 248:
                    var3 = var3 === var4;
                    if(!var3) { _fun0004_ip = 259; continue _fun0004 }
 255:
                    var3 = var5 >= var7;
 259:
                    var2 = var3;
 262:
                    var1 = var2;
                    _fun0004_ip = 521; continue _fun0004;
 270:
                    var3 = 16;
                    var2 = var4 > var3;
                    if(var2) { _fun0004_ip = 294; continue _fun0004 }
 280:
                    var3 = var3 === var4;
                    if(!var3) { _fun0004_ip = 291; continue _fun0004 }
 287:
                    var3 = var5 >= var7;
 291:
                    var2 = var3;
 294:
                    var1 = var2;
                    _fun0004_ip = 521; continue _fun0004;
 302:
                    var3 = 15;
                    var2 = var4 > var3;
                    if(var2) { _fun0004_ip = 326; continue _fun0004 }
 312:
                    var3 = var3 === var4;
                    if(!var3) { _fun0004_ip = 323; continue _fun0004 }
 319:
                    var3 = var5 >= var7;
 323:
                    var2 = var3;
 326:
                    var1 = var2;
                    _fun0004_ip = 521; continue _fun0004;
 334:
                    var3 = 14;
                    var2 = var4 > var3;
                    if(var2) { _fun0004_ip = 361; continue _fun0004 }
 344:
                    var3 = var3 === var4;
                    if(!var3) { _fun0004_ip = 358; continue _fun0004 }
 351:
                    var7 = 5;
                    var3 = var5 >= var7;
 358:
                    var2 = var3;
 361:
                    var1 = var2;
                    _fun0004_ip = 521; continue _fun0004;
 369:
                    var3 = 14;
                    var2 = var4 > var3;
                    if(var2) { _fun0004_ip = 396; continue _fun0004 }
 379:
                    var3 = var3 === var4;
                    if(!var3) { _fun0004_ip = 393; continue _fun0004 }
 386:
                    var7 = 2;
                    var3 = var5 >= var7;
 393:
                    var2 = var3;
 396:
                    var1 = var2;
                    _fun0004_ip = 521; continue _fun0004;
 401:
                    var3 = 13;
                    var2 = var4 > var3;
                    if(var2) { _fun0004_ip = 428; continue _fun0004 }
 411:
                    var3 = var3 === var4;
                    if(!var3) { _fun0004_ip = 425; continue _fun0004 }
 418:
                    var7 = 2;
                    var3 = var5 >= var7;
 425:
                    var2 = var3;
 428:
                    var1 = var2;
                    _fun0004_ip = 521; continue _fun0004;
 433:
                    var3 = 12;
                    var2 = var4 > var3;
                    if(var2) { _fun0004_ip = 457; continue _fun0004 }
 443:
                    var3 = var3 === var4;
                    if(!var3) { _fun0004_ip = 454; continue _fun0004 }
 450:
                    var3 = var5 >= var6;
 454:
                    var2 = var3;
 457:
                    var1 = var2;
                    _fun0004_ip = 521; continue _fun0004;
 462:
                    var3 = 11;
                    var2 = var4 > var3;
                    if(var2) { _fun0004_ip = 486; continue _fun0004 }
 472:
                    var3 = var3 === var4;
                    if(!var3) { _fun0004_ip = 483; continue _fun0004 }
 479:
                    var3 = var5 >= var6;
 483:
                    var2 = var3;
 486:
                    var1 = var2;
                    _fun0004_ip = 521; continue _fun0004;
 491:
                    var3 = 10;
                    var2 = var4 > var3;
                    if(var2) { _fun0004_ip = 518; continue _fun0004 }
 501:
                    var3 = var3 === var4;
                    if(!var3) { _fun0004_ip = 515; continue _fun0004 }
 508:
                    var4 = 2;
                    var3 = var5 >= var4;
 515:
                    var2 = var3;
 518:
                    var1 = var2;
 521:
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var5, var2);
 81:
            return var1;
        }
    };
    var2['filterUnsupportedEmojis'] = var7;
    var7 = function applyPlatformToThemedEmojiColorPalette(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var2 = arg1;
            var1 = var2.palette;
            var2 = var2.shouldProcessMobileColors;
            var4 = undefined;
            if(!(var2 === var4)) { _fun0005_ip = 23; continue _fun0005 }
 21:
            var2 = false;
 23:
            if(!var2) { _fun0005_ip = 277; continue _fun0005 }
 29:
            var6 = null;
            if(!(var6 != var1)) { _fun0005_ip = 277; continue _fun0005 }
 38:
            var9 = var1.LIGHT;
            var5 = var1.DARK;
            var2 = {};
            var3 = {};
            var10 = _closure1_slot6;
            var11 = var6 == var9;
            var8 = undefined;
            if(var11) { _fun0005_ip = 76; continue _fun0005 }
 70:
            var8 = var9.accentColor;
 76:
            var8 = var10.bind(var4)(var8);
            var3['accentColor'] = var8;
            var10 = _closure1_slot6;
            var11 = var6 == var9;
            var8 = undefined;
            if(var11) { _fun0005_ip = 104; continue _fun0005 }
 99:
            var8 = var9.backgroundColor;
 104:
            var8 = var10.bind(var4)(var8);
            var3['backgroundColor'] = var8;
            var10 = _closure1_slot6;
            var11 = var6 == var9;
            var8 = undefined;
            if(var11) { _fun0005_ip = 132; continue _fun0005 }
 126:
            var8 = var9.highlightColor;
 132:
            var8 = var10.bind(var4)(var8);
            var3['highlightColor'] = var8;
            var10 = var6 == var9;
            var8 = undefined;
            if(var10) { _fun0005_ip = 156; continue _fun0005 }
 151:
            var8 = var9.opacity;
 156:
            var3['opacity'] = var8;
            var2['LIGHT'] = var3;
            var3 = {};
            var9 = _closure1_slot6;
            var10 = var6 == var5;
            var8 = undefined;
            if(var10) { _fun0005_ip = 186; continue _fun0005 }
 180:
            var8 = var5.accentColor;
 186:
            var8 = var9.bind(var4)(var8);
            var3['accentColor'] = var8;
            var9 = _closure1_slot6;
            var10 = var6 == var5;
            var8 = undefined;
            if(var10) { _fun0005_ip = 214; continue _fun0005 }
 209:
            var8 = var5.backgroundColor;
 214:
            var8 = var9.bind(var4)(var8);
            var3['backgroundColor'] = var8;
            var8 = _closure1_slot6;
            var9 = var6 == var5;
            var7 = undefined;
            if(var9) { _fun0005_ip = 242; continue _fun0005 }
 236:
            var7 = var5.highlightColor;
 242:
            var7 = var8.bind(var4)(var7);
            var3['highlightColor'] = var7;
            var6 = var6 == var5;
            var4 = undefined;
            if(var6) { _fun0005_ip = 266; continue _fun0005 }
 261:
            var4 = var5.opacity;
 266:
            var3['opacity'] = var4;
            var2['DARK'] = var3;
            return var2;
 277:
            return var1;
        }
    };
    var2['applyPlatformToThemedEmojiColorPalette'] = var7;
    var7 = function getEmojiColors() {
        var1 = undefined;
        var4 = _closure1_slot9;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var2['getEmojiColors'] = var7;
    var4 = function triggerFullscreenAnimation(arg1) {
        var1 = arg1;
        var7 = var1.channelId;
        var6 = var1.messageId;
        var5 = var1.emoji;
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 11;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.openBurstReactionFirstSendActionSheet;
        var2 = {};
        var2['channelId'] = var7;
        var2['messageId'] = var6;
        var2['emoji'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['triggerFullscreenAnimation'] = var4;
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'utils/EmojiUtilsPlatformed.native.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();