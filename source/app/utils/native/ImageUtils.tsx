// app/utils/native/ImageUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var10 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var11 = dependencyMap;
    var _closure1_slot0 = var10;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var11;
    var1 = function clampDimension(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var3 = _closure1_slot6;
            if(!(var1 > var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = _closure1_slot6;
case 2:
            return var1;
        }
    };
    var _closure1_slot9 = var1;
    var5 = function getSrcWithWidthAndHeight(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var3 = var1.src;
            var10 = var1.sourceWidth;
            var11 = var1.sourceHeight;
            var9 = var1.targetWidth;
            var12 = var1.targetHeight;
            var5 = var1.format;
            var7 = undefined;
            if(!(var5 === var7)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var5 = null;
case 4:
            var1 = var1.animated;
            if(!(var1 === var7)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var1 = false;
case 6:
            var2 = var3.split;
            var4 = '?';
            var6 = var2.bind(var3)(var4);
            var3 = _closure1_slot3;
            var15 = 2;
            var8 = var3.bind(var7)(var6, var15);
            var3 = 0;
            var6 = var8[var3];
            var13 = 1;
            var17 = var8[var13];
            var14 = new Array(2);
            var14[0] = var6;
            var16 = _closure1_slot1;
            var6 = _closure1_slot2;
            var8 = 4;
            var6 = var6[var8];
            var16 = var16.bind(var7)(var6);
            var6 = var16.parse;
            var6 = var6.bind(var16)(var17);
            var14[1] = var6;
            var6 = _closure1_slot3;
            var6 = var6.bind(var7)(var14, var15);
            var3 = var6[var3];
            var6 = var6[var13];
            var14 = _closure1_slot8;
            var13 = var14.test;
            var13 = var13.bind(var14)(var3);
            if(var13) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var13 = null;
            if(!(var13 != var5)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var6['format'] = var5;
            _fun0002_ip = 10; continue _fun0002;
case 8:
            var5 = 'webp';
            var6['format'] = var5;
case 10:
            var5 = _closure1_slot9;
            var9 = var5.bind(var7)(var9);
            var5 = var5.bind(var7)(var12);
            var10 = var9 === var10;
            if(!var10) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var10 = var5 === var11;
case 12:
            if(var10) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var9 = var9 | 0;
            var6['width'] = var9;
            var5 = var5 | 0;
            var6['height'] = var5;
case 14:
            if(!var1) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var1 = true;
            var6['animated'] = var1;
case 16:
            var5 = _closure1_slot1;
            var9 = _closure1_slot2;
            var1 = 5;
            var1 = var9[var1];
            var5 = var5.bind(var7)(var1);
            var1 = var5.isEmpty;
            var5 = var1.bind(var5)(var6);
            var1 = var3;
            if(var5) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var5 = _closure1_slot1;
            var2 = _closure1_slot2;
            var2 = var2[var8];
            var5 = var5.bind(var7)(var2);
            var2 = var5.stringify;
            var2 = var2.bind(var5)(var6);
            var2 = var4 + var2;
            var1 = var3 + var2;
case 18:
            return var1;
        }
    };
    var _closure1_slot10 = var5;
    var4 = function getMobileOptimizedSrc(arg1, arg2, arg3) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var9 = arg1;
            var8 = arg2;
            var7 = arg3;
            var4 = arguments[3];
            var3 = undefined;
            if(!(var4 === var3)) { _fun0003_ip = 20; continue _fun0003 }
case 2:
            var4 = null;
case 20:
            var5 = _closure1_slot7;
            var2 = var5.test;
            var2 = var2.bind(var5)(var9);
            var10 = 1;
            var6 = var10;
            if(!var2) { _fun0003_ip = 7; continue _fun0003 }
case 4:
            var6 = 0.3;
case 7:
            var5 = _closure1_slot0;
            var11 = _closure1_slot2;
            var2 = 3;
            var2 = var11[var2];
            var5 = var5.bind(var3)(var2);
            var2 = var5.getWindowDimensions;
            var5 = var2.bind(var5)();
            var12 = _closure1_slot5;
            var11 = var12.getPixelSizeForLayoutSize;
            var2 = var5.width;
            var2 = var11.bind(var12)(var2);
            var2 = var2 * var6;
            var12 = _closure1_slot5;
            var11 = var12.getPixelSizeForLayoutSize;
            var13 = var5.height;
            var5 = 2;
            var5 = var13 / var5;
            var5 = var11.bind(var12)(var5);
            var5 = var5 * var6;
            if(!(!(var8 > var7))) { _fun0003_ip = 21; continue _fun0003 }
case 22:
            var6 = var5 / var7;
            _fun0003_ip = 23; continue _fun0003;
case 21:
            var6 = var2 / var8;
case 23:
            var11 = global;
            var5 = var11.Math;
            var2 = var5.min;
            var2 = var2.bind(var5)(var6, var10);
            var6 = var8;
            var5 = var7;
            if(!(var2 < var10)) { _fun0003_ip = 24; continue _fun0003 }
case 25:
            var13 = var11.Math;
            var12 = var13.ceil;
            var10 = var8 * var2;
            var6 = var12.bind(var13)(var10);
            var12 = var11.Math;
            var11 = var12.ceil;
            var2 = var7 * var2;
            var5 = var11.bind(var12)(var2);
case 24:
            var2 = _closure1_slot10;
            var1 = {};
            var1['src'] = var9;
            var1['sourceWidth'] = var8;
            var1['sourceHeight'] = var7;
            var1['targetWidth'] = var6;
            var1['targetHeight'] = var5;
            var1['format'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var2 = function getPaletteForAvatarMobile(arg1) {
        var6 = _closure1_slot0;
        var7 = _closure1_slot2;
        var2 = 6;
        var2 = var7[var2];
        var5 = undefined;
        var4 = var6.bind(var5)(var2);
        var3 = var4.ensureAvatarSource;
        var2 = 7;
        var2 = var7[var2];
        var6 = var6.bind(var5)(var2);
        var5 = var6.makeSource;
        var2 = arg1;
        var2 = var5.bind(var6)(var2);
        var3 = var3.bind(var4)(var2);
        var1 = _closure1_slot4;
        var2 = var1.ImageManager;
        var1 = var2.getDominantColors;
        var1 = var1.bind(var2)(var3);
        return var1;
    };
    var1 = global;
    var12 = var1.Object;
    var9 = var12.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var12)(var3, var1, var6);
    var1 = 0;
    var6 = var11[var1];
    var1 = undefined;
    var6 = var7.bind(var1)(var6);
    var _closure1_slot3 = var6;
    var6 = 1;
    var6 = var11[var6];
    var6 = var10.bind(var1)(var6);
    var7 = var6.NativeModules;
    var _closure1_slot4 = var7;
    var6 = var6.PixelRatio;
    var _closure1_slot5 = var6;
    var6 = 2;
    var6 = var11[var6];
    var6 = var10.bind(var1)(var6);
    var6 = var6.MEDIA_PROXY_MAX_TARGET_RESOLUTION;
    var _closure1_slot6 = var6;
    var7 = /\.(gif)$/i;
    var _closure1_slot7 = var7;
    var6 = /\.(avif)$/i;
    var _closure1_slot8 = var6;
    var8 = {};
    var8['getMobileOptimizedSrc'] = var4;
    var8['getPaletteForAvatarMobile'] = var2;
    var9 = 8;
    var9 = var11[var9];
    var11 = var10.bind(var1)(var9);
    var10 = var11.fileFinishedImporting;
    var9 = 'utils/native/ImageUtils.tsx';
    var9 = var10.bind(var11)(var9);
    var3['default'] = var8;
    var3['GIF_RE'] = var7;
    var3['AVIF_RE'] = var6;
    var3['getSrcWithWidthAndHeight'] = var5;
    var3['getMobileOptimizedSrc'] = var4;
    var3['getPaletteForAvatarMobile'] = var2;
    return var1;
})();