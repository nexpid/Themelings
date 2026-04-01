// app/utils/GIFPickerUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var3 = exports;
    var8 = dependencyMap;
    var5 = function isKlipyProvider(arg1) {
        var2 = 'Klipy';
        var1 = arg1;
        var1 = var2 === var1;
        return var1;
    };
    var _closure1_slot1 = var5;
    var4 = function shouldUseAnimatedWebPThumbnail(arg1) {
        var3 = _closure1_slot1;
        var2 = undefined;
        var1 = arg1;
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var _closure1_slot2 = var4;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var6);
    var1 = 0;
    var6 = var8[var1];
    var1 = undefined;
    var6 = var7.bind(var1)(var6);
    var6 = var6.SearchTypes;
    var _closure1_slot0 = var6;
    var6 = 1;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'utils/GIFPickerUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var3['isKlipyProvider'] = var5;
    var3['shouldUseAnimatedWebPThumbnail'] = var4;
    var4 = function getGIFThumbnailForFavorite(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var4 = _closure1_slot2;
            var3 = var2.providerName;
            var1 = undefined;
            var3 = var4.bind(var1)(var3);
            if(!var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var2.thumbnail;
            var3 = null;
            if(!(var3 == var2)) { _fun0001_ip = 4; continue _fun0001 }
case 2:
            return var1;
case 4:
            var1 = var2.proxyURL;
            if(!(var3 == var1)) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var1 = var2.url;
case 5:
            if(!(var3 == var1)) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var1 = var2.uri;
case 7:
            return var1;
        }
    };
    var3['getGIFThumbnailForFavorite'] = var4;
    var2 = function calculateAnalyticsMetadata(arg1, arg2, arg3) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var6 = arg2;
            var1 = arg3;
            var3 = null;
            if(!(var3 == var6)) { _fun0002_ip = 9; continue _fun0002 }
case 10:
            var2 = {};
            _fun0002_ip = 11; continue _fun0002;
case 9:
            var4 = {};
            var5 = 1;
            var4[5] = var5;
            var2 = var4;
case 11:
            if(!(var3 == var1)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var1 = {};
case 12:
            var11 = var1.offset;
            var7 = var1.limit;
            var4 = var1.results;
            var5 = var1.totalResults;
            var1 = {};
            var6 = _closure1_slot0;
            var6 = var6.GIF;
            var1['search_type'] = var6;
            var6 = arg1;
            var1['load_id'] = var6;
            var1['limit'] = var7;
            var1['offset'] = var11;
            var9 = var3 != var7;
            var8 = 1;
            var6 = var8;
            if(!var9) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var9 = var3 != var11;
            var6 = var8;
            if(!var9) { _fun0002_ip = 14; continue _fun0002 }
case 16:
            var9 = global;
            var10 = var9.Math;
            var9 = var10.floor;
            var7 = var11 / var7;
            var7 = var9.bind(var10)(var7);
            var6 = var7 + var8;
case 14:
            var1['page'] = var6;
            var1['total_results'] = var5;
            var5 = var3 != var4;
            var3 = null;
            if(!var5) { _fun0002_ip = 17; continue _fun0002 }
case 18:
            var3 = var4;
case 17:
            var1['page_results'] = var3;
            var3 = global;
            var4 = var3.Object;
            var3 = var4.keys;
            var3 = var3.bind(var4)(var2);
            var3 = var3.length;
            var1['num_modifiers'] = var3;
            var1['modifiers'] = var2;
            return var1;
        }
    };
    var3['calculateAnalyticsMetadata'] = var2;
    return var1;
})();