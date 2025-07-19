// app/modules/gif_picker/native/GIFPickerUtils.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var1 = native3;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = native4;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.GIFPickerResultTypes;
    var _closure1_slot4 = var4;
    var4 = /(https?:\\/\\/)(?!media(?:\d+)?\.)(?:[^.]+\.)*giphy\.com/;
    var _closure1_slot5 = var4;
    var4 = /(tenor\.com)/;
    var _closure1_slot6 = var4;
    var4 = /-(?:.(?!-))+$/;
    var _closure1_slot7 = var4;
    var4 = function transformFavoriteGifUrl(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arg1;
            var9 = arg2;
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 2;
            var1 = var3[var1];
            var6 = undefined;
            var2 = var2.bind(var6)(var1);
            var1 = var2.toURLSafe;
            var2 = var1.bind(var2)(var4);
            var5 = null;
            if(!(var5 != var2)) { _fun0001_ip = 233; continue _fun0001 }
 51:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var8 = 3;
            var1 = var1[var8];
            var3 = var3.bind(var6)(var1);
            var1 = var3.isExternalProxiedAttachmentUrl;
            var1 = var1.bind(var3)(var2);
            if(var1) { _fun0001_ip = 116; continue _fun0001 }
 85:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var8];
            var3 = var3.bind(var6)(var1);
            var1 = var3.isAttachmentUrl;
            var1 = var1.bind(var3)(var2);
            if(!var1) { _fun0001_ip = 233; continue _fun0001 }
 116:
            var3 = var2.pathname;
            var1 = var3.toLowerCase;
            var8 = var1.bind(var3)();
            var3 = var8.endsWith;
            var1 = '.webp';
            var8 = var3.bind(var8)(var1);
            var3 = var2.pathname;
            var1 = var3.toLowerCase;
            var10 = var1.bind(var3)();
            var3 = var10.endsWith;
            var1 = '.avif';
            var1 = var3.bind(var10)(var1);
            var10 = var2.pathname;
            var3 = var10.toLowerCase;
            var11 = var3.bind(var10)();
            var10 = var11.endsWith;
            var3 = '.gif';
            var3 = var10.bind(var11)(var3);
            if(var8) { _fun0001_ip = 383; continue _fun0001 }
 221:
            if(var1) { _fun0001_ip = 383; continue _fun0001 }
 227:
            if(var3) { _fun0001_ip = 383; continue _fun0001 }
 233:
            var10 = _closure1_slot5;
            var8 = var10.test;
            var8 = var8.bind(var10)(var9);
            if(var8) { _fun0001_ip = 298; continue _fun0001 }
 250:
            var10 = _closure1_slot6;
            var8 = var10.test;
            var8 = var8.bind(var10)(var9);
            if(!var8) { _fun0001_ip = 296; continue _fun0001 }
 267:
            var8 = global;
            var8 = var8.HermesInternal;
            var11 = var8.concat;
            var10 = '';
            var8 = '.gif';
            var4 = var11.bind(var10)(var9, var8);
 296:
            _fun0001_ip = 381; continue _fun0001;
 298:
            var8 = _closure1_slot7;
            var7 = var8.exec;
            var9 = var7.bind(var8)(var9);
            var7 = var5 == var9;
            var8 = undefined;
            if(var7) { _fun0001_ip = 350; continue _fun0001 }
 322:
            var7 = 0;
            var7 = var9[var7];
            var5 = var5 == var7;
            var8 = undefined;
            if(var5) { _fun0001_ip = 350; continue _fun0001 }
 337:
            var6 = var7.slice;
            var5 = 1;
            var8 = var6.bind(var7)(var5);
 350:
            var5 = global;
            var5 = var5.HermesInternal;
            var7 = var5.concat;
            var6 = 'https://media.giphy.com/media/';
            var5 = '/giphy.gif';
            var4 = var7.bind(var6)(var8, var5);
 381:
            return var4;
 383:
            if(var1) { _fun0001_ip = 389; continue _fun0001 }
 386:
            var1 = var3;
 389:
            if(!var1) { _fun0001_ip = 419; continue _fun0001 }
 392:
            var5 = var2.searchParams;
            var4 = var5.set;
            var3 = 'format';
            var1 = 'webp';
            var1 = var4.bind(var5)(var3, var1);
 419:
            var5 = var2.searchParams;
            var4 = var5.set;
            var3 = 'animated';
            var1 = 'true';
            var1 = var4.bind(var5)(var3, var1);
            var1 = var2.toString;
            var1 = var1.bind(var2)();
            return var1;
        }
    };
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/gif_picker/native/GIFPickerUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = 56;
    var3['GIF_HEADER_HEIGHT'] = var4;
    var2 = function useFavoriteGIFsMobile() {
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 4;
        var4 = var4[var3];
        var3 = undefined;
        var5 = var5.bind(var3)(var4);
        var4 = var5.useSortedFavoriteGIFs;
        var3 = _closure1_slot8;
        var3 = var4.bind(var5)(var3);
        var _closure2_slot0 = var3;
        var5 = _closure1_slot3;
        var4 = var5.useMemo;
        var2 = new Array(1);
        var2[0] = var3;
        var1 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var1 = _closure2_slot0;
                var1 = var1.length;
                var4 = 0;
                var2 = var1 > var4;
                var9 = undefined;
                var1 = undefined;
                if(!var2) { _fun0002_ip = 138; continue _fun0002 }
 25:
                var2 = {};
                var6 = _closure1_slot4;
                var6 = var6.FAVORITES;
                var2['type'] = var6;
                var8 = _closure1_slot0;
                var10 = _closure1_slot2;
                var5 = 5;
                var6 = var10[var5];
                var6 = var8.bind(var9)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var5 = var10[var5];
                var5 = var8.bind(var9)(var5);
                var5 = var5.t;
                var5 = var5.k8fFjo;
                var5 = var6.bind(var7)(var5);
                var2['name'] = var5;
                var3 = _closure2_slot0;
                var5 = var3[var4];
                var5 = var5.src;
                var2['src'] = var5;
                var3 = var3[var4];
                var3 = var3.format;
                var2['format'] = var3;
                var1 = var2;
 138:
                return var1;
            }
        };
        var2 = var4.bind(var5)(var1, var2);
        var1 = {};
        var1['favorites'] = var3;
        var1['favoritesCategory'] = var2;
        return var1;
    };
    var3['useFavoriteGIFsMobile'] = var2;
    var2 = 180;
    var3['GIF_PICKER_ITEM_ESIMTATED_HEIGHT'] = var2;
    var2 = 8;
    var3['GIF_PICKER_GUTTER_SPACING'] = var2;
    var2 = 20;
    var3['DEFAULT_CATEGORY_ROWS'] = var2;
    return var1;
})();