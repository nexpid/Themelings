// app/modules/stickers/native/Sticker.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var2 = function getStickerAssetUrl(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arg1;
            var8 = arg2;
            var9 = arg3;
            var3 = var4.format_type;
            var6 = _closure1_slot0;
            var2 = _closure1_slot2;
            var7 = 4;
            var2 = var2[var7];
            var5 = undefined;
            var2 = var6.bind(var5)(var2);
            var2 = var2.StickerFormat;
            var2 = var2.LOTTIE;
            if(!(var3 !== var2)) { _fun0001_ip = 209; continue _fun0001 }
 59:
            var3 = var4.format_type;
            var6 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var7];
            var2 = var6.bind(var5)(var2);
            var2 = var2.StickerFormat;
            var2 = var2.APNG;
            if(!(var3 !== var2)) { _fun0001_ip = 161; continue _fun0001 }
 98:
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 5;
            var2 = var6[var2];
            var6 = var3.bind(var5)(var2);
            var3 = var6.getStickerAssetUrl;
            var2 = {};
            var7 = !var9;
            var2['isPreview'] = var7;
            var10 = _closure1_slot3;
            var7 = var10.getPixelSizeForLayoutSize;
            var7 = var7.bind(var10)(var8);
            var2['size'] = var7;
            var2 = var3.bind(var6)(var4, var2);
            _fun0001_ip = 207; continue _fun0001;
 161:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 5;
            var3 = var7[var3];
            var7 = var6.bind(var5)(var3);
            var6 = var7.getStickerAssetUrl;
            var3 = {};
            var9 = !var9;
            var3['isPreview'] = var9;
            var3['size'] = var8;
            var2 = var6.bind(var7)(var4, var3);
 207:
            _fun0001_ip = 240; continue _fun0001;
 209:
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 5;
            var1 = var6[var1];
            var3 = var3.bind(var5)(var1);
            var1 = var3.getStickerAssetUrl;
            var2 = var1.bind(var3)(var4);
 240:
            var1 = null;
            var3 = var1 != var2;
            var1 = '';
            if(!var3) { _fun0001_ip = 256; continue _fun0001 }
 253:
            var1 = var2;
 256:
            return var1;
        }
    };
    var _closure1_slot6 = var2;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var9 = var7[var1];
    var5 = metroImportAll;
    var1 = undefined;
    var5 = var5.bind(var1)(var9);
    var5 = 1;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.PixelRatio;
    var _closure1_slot3 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.jsx;
    var _closure1_slot5 = var5;
    var5 = 13;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/stickers/native/Sticker.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function _default(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var11 = var1.sticker;
            var10 = var1.size;
            var6 = var1.animated;
            var4 = undefined;
            if(!(var6 === var4)) { _fun0002_ip = 28; continue _fun0002 }
 26:
            var6 = true;
 28:
            var1 = var1.opaque;
            if(!(var1 === var4)) { _fun0002_ip = 40; continue _fun0002 }
 38:
            var1 = true;
 40:
            var8 = 0.3;
            if(!var1) { _fun0002_ip = 56; continue _fun0002 }
 53:
            var8 = 1;
 56:
            var1 = _closure1_slot6;
            var12 = var1.bind(var4)(var11, var10, var6);
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var2 = 6;
            var5 = var1[var2];
            var5 = var3.bind(var4)(var5);
            var13 = var5.intl;
            var9 = var13.formatToPlainString;
            var2 = var1[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.t;
            var5 = var2.rk6pOz;
            var2 = {};
            var14 = var11.name;
            var2['stickerName'] = var14;
            var5 = var9.bind(var13)(var5, var2);
            var2 = var11.format_type;
            var9 = 4;
            var1 = var1[var9];
            var1 = var3.bind(var4)(var1);
            var1 = var1.StickerFormat;
            var1 = var1.LOTTIE;
            if(!(var2 !== var1)) { _fun0002_ip = 568; continue _fun0002 }
 175:
            var2 = var11.format_type;
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var9];
            var1 = var3.bind(var4)(var1);
            var1 = var1.StickerFormat;
            var1 = var1.APNG;
            if(!(var2 === var1)) { _fun0002_ip = 407; continue _fun0002 }
 217:
            var1 = 'type';
            var1 = var1 in var11;
            if(!var1) { _fun0002_ip = 265; continue _fun0002 }
 228:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 5;
            var1 = var3[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.isGuildSticker;
            var1 = var1.bind(var2)(var11);
            if(!var1) { _fun0002_ip = 407; continue _fun0002 }
 265:
            var9 = {};
            var1 = {};
            var1['height'] = var10;
            var1['width'] = var10;
            var1['opacity'] = var8;
            var9['style'] = var1;
            var9['url'] = var12;
            var15 = var11.id;
            var2 = _closure1_slot0;
            var13 = _closure1_slot2;
            var1 = 5;
            var1 = var13[var1];
            var3 = var2.bind(var4)(var1);
            var2 = var3.getStickerExtensionFromFormatType;
            var1 = var11.format_type;
            var14 = var2.bind(var3)(var1);
            var1 = global;
            var1 = var1.HermesInternal;
            var3 = var1.concat;
            var2 = '';
            var1 = '.';
            var1 = var3.bind(var2)(var15, var1, var14);
            var9['name'] = var1;
            var9['accessibilityLabel'] = var5;
            var3 = _closure1_slot5;
            var2 = _closure1_slot1;
            var1 = 8;
            var1 = var13[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var18 = var1;
            var17 = var9;
            var9 = copyDataProperties(var18, var17);
            var1 = var3.bind(var4)(var2, var1);
            return var1;
 407:
            var3 = _closure1_slot5;
            var2 = _closure1_slot1;
            var14 = _closure1_slot2;
            var1 = 9;
            var1 = var14[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var9 = 'contain';
            var1['resizeMode'] = var9;
            var9 = {};
            var9['height'] = var10;
            var9['width'] = var10;
            var9['opacity'] = var8;
            var1['style'] = var9;
            var13 = _closure1_slot0;
            var9 = 10;
            var9 = var14[var9];
            var14 = var13.bind(var4)(var9);
            var13 = var14.isThemeDark;
            var9 = _closure1_slot4;
            var9 = var9.theme;
            var9 = var13.bind(var14)(var9);
            var14 = _closure1_slot1;
            var15 = _closure1_slot2;
            if(var9) { _fun0002_ip = 521; continue _fun0002 }
 507:
            var9 = 12;
            var9 = var15[var9];
            var9 = var14.bind(var4)(var9);
            _fun0002_ip = 533; continue _fun0002;
 521:
            var13 = 11;
            var13 = var15[var13];
            var9 = var14.bind(var4)(var13);
 533:
            var1['placeholder'] = var9;
            var9 = {};
            var9['uri'] = var12;
            var1['source'] = var9;
            var9 = true;
            var1['accessible'] = var9;
            var1['accessibilityLabel'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
 568:
            var3 = _closure1_slot5;
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var9 = 7;
            var1 = var1[var9];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['url'] = var12;
            var12 = var11.id;
            var11 = null;
            var13 = var11 != var12;
            var11 = '';
            if(!var13) { _fun0002_ip = 619; continue _fun0002 }
 616:
            var11 = var12;
 619:
            var1['asset'] = var11;
            var1['width'] = var10;
            var1['height'] = var10;
            var1['opacity'] = var8;
            var8 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var9];
            var7 = var8.bind(var4)(var7);
            var7 = var7.NativeLottieRenderMode;
            if(var6) { _fun0002_ip = 670; continue _fun0002 }
 662:
            var6 = var7.STILL;
            _fun0002_ip = 676; continue _fun0002;
 670:
            var6 = var7.LOOP;
 676:
            var1['renderMode'] = var6;
            var1['accessibilityLabel'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var4;
    var3['getStickerAssetUrl'] = var2;
    return var1;
})();