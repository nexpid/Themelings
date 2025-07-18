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
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/gif_picker/native/GIFPickerUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = 56;
    var3['GIF_HEADER_HEIGHT'] = var4;
    var2 = function useFavoriteGIFsMobile() {
        var4 = _closure1_slot1;
        var6 = _closure1_slot2;
        var3 = 4;
        var3 = var6[var3];
        var5 = undefined;
        var8 = var4.bind(var5)(var3);
        var7 = var8.useExperiment;
        var4 = {};
        var3 = 'useFavoriteGIFsMobile';
        var4['location'] = var3;
        var3 = {};
        var9 = true;
        var3['autoTrackExposure'] = var9;
        var3 = var7.bind(var8)(var4, var3);
        var4 = var3.optimizationsEnabled;
        var _closure2_slot0 = var4;
        var3 = var3.sendParam;
        var _closure2_slot1 = var3;
        var4 = _closure1_slot0;
        var3 = 5;
        var3 = var6[var3];
        var5 = var4.bind(var5)(var3);
        var4 = var5.useSortedFavoriteGIFs;
        var3 = function(arg1, arg2) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var1 = arg1;
                var12 = arg2;
                var6 = _closure2_slot0;
                var11 = _closure2_slot1;
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 2;
                var2 = var4[var2];
                var10 = undefined;
                var3 = var3.bind(var10)(var2);
                var2 = var3.toURLSafe;
                var3 = var2.bind(var3)(var1);
                var8 = null;
                if(!(var8 != var3)) { _fun0001_ip = 268; continue _fun0001 }
 62:
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var5 = 3;
                var2 = var2[var5];
                var4 = var4.bind(var10)(var2);
                var2 = var4.isExternalProxiedAttachmentUrl;
                var2 = var2.bind(var4)(var3);
                if(var2) { _fun0001_ip = 130; continue _fun0001 }
 96:
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var5];
                var4 = var4.bind(var10)(var2);
                var2 = var4.isAttachmentUrl;
                var2 = var2.bind(var4)(var3);
                if(!var2) { _fun0001_ip = 268; continue _fun0001 }
 130:
                var4 = var3.pathname;
                var2 = var4.toLowerCase;
                var5 = var2.bind(var4)();
                var4 = var5.endsWith;
                var2 = '.webp';
                var5 = var4.bind(var5)(var2);
                var4 = var3.pathname;
                var2 = var4.toLowerCase;
                var7 = var2.bind(var4)();
                var4 = var7.endsWith;
                var2 = '.avif';
                var2 = var4.bind(var7)(var2);
                var7 = var3.pathname;
                var4 = var7.toLowerCase;
                var13 = var4.bind(var7)();
                var7 = var13.endsWith;
                var4 = '.gif';
                var7 = var7.bind(var13)(var4);
                var4 = var7;
                if(!var7) { _fun0001_ip = 238; continue _fun0001 }
 235:
                var4 = var6;
 238:
                if(!var7) { _fun0001_ip = 244; continue _fun0001 }
 241:
                var7 = var11;
 244:
                if(var5) { _fun0001_ip = 421; continue _fun0001 }
 250:
                if(var2) { _fun0001_ip = 421; continue _fun0001 }
 256:
                if(var4) { _fun0001_ip = 421; continue _fun0001 }
 262:
                if(var7) { _fun0001_ip = 421; continue _fun0001 }
 268:
                var13 = _closure1_slot5;
                var11 = var13.test;
                var11 = var11.bind(var13)(var12);
                if(var11) { _fun0001_ip = 333; continue _fun0001 }
 285:
                var13 = _closure1_slot6;
                var11 = var13.test;
                var11 = var11.bind(var13)(var12);
                if(!var11) { _fun0001_ip = 331; continue _fun0001 }
 302:
                var11 = global;
                var11 = var11.HermesInternal;
                var14 = var11.concat;
                var13 = '';
                var11 = '.gif';
                var1 = var14.bind(var13)(var12, var11);
 331:
                _fun0001_ip = 416; continue _fun0001;
 333:
                var11 = _closure1_slot7;
                var9 = var11.exec;
                var11 = var9.bind(var11)(var12);
                var9 = var8 == var11;
                var12 = undefined;
                if(var9) { _fun0001_ip = 385; continue _fun0001 }
 357:
                var9 = 0;
                var11 = var11[var9];
                var8 = var8 == var11;
                var12 = undefined;
                if(var8) { _fun0001_ip = 385; continue _fun0001 }
 372:
                var9 = var11.slice;
                var8 = 1;
                var12 = var9.bind(var11)(var8);
 385:
                var8 = global;
                var8 = var8.HermesInternal;
                var11 = var8.concat;
                var9 = 'https://media.giphy.com/media/';
                var8 = '/giphy.gif';
                var1 = var11.bind(var9)(var12, var8);
 416:
                _fun0001_ip = 548; continue _fun0001;
 421:
                if(!var7) { _fun0001_ip = 463; continue _fun0001 }
 424:
                var9 = var3.searchParams;
                var8 = var9.set;
                var7 = global;
                var7 = var7.String;
                var6 = var6 - 0;
                var7 = var7.bind(var10)(var6);
                var6 = 'gif_treatment';
                var6 = var8.bind(var9)(var6, var7);
 463:
                if(var5) { _fun0001_ip = 469; continue _fun0001 }
 466:
                var5 = var2;
 469:
                if(var5) { _fun0001_ip = 475; continue _fun0001 }
 472:
                var5 = var4;
 475:
                if(!var5) { _fun0001_ip = 503; continue _fun0001 }
 478:
                var8 = var3.searchParams;
                var7 = var8.set;
                var6 = 'animated';
                var5 = 'true';
                var5 = var7.bind(var8)(var6, var5);
 503:
                if(var2) { _fun0001_ip = 509; continue _fun0001 }
 506:
                var2 = var4;
 509:
                if(!var2) { _fun0001_ip = 539; continue _fun0001 }
 512:
                var6 = var3.searchParams;
                var5 = var6.set;
                var4 = 'format';
                var2 = 'webp';
                var2 = var5.bind(var6)(var4, var2);
 539:
                var2 = var3.toString;
                var1 = var2.bind(var3)();
 548:
                return var1;
            }
        };
        var3 = var4.bind(var5)(var3);
        var _closure2_slot2 = var3;
        var5 = _closure1_slot3;
        var4 = var5.useMemo;
        var2 = new Array(1);
        var2[0] = var3;
        var1 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var1 = _closure2_slot2;
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
                var5 = 6;
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
                var3 = _closure2_slot2;
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