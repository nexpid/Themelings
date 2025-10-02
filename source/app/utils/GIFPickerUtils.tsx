// app/utils/GIFPickerUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.SearchTypes;
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'utils/GIFPickerUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function calculateAnalyticsMetadata(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var6 = arg2;
            var1 = arg3;
            var3 = null;
            if(!(var3 == var6)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = {};
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var4 = {};
            var5 = 1;
            var4[var6] = var5;
            var2 = var4;
case 4:
            if(!(var3 == var1)) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var1 = {};
case 5:
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
            if(!var9) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var9 = var3 != var11;
            var6 = var8;
            if(!var9) { _fun0001_ip = 7; continue _fun0001 }
case 9:
            var9 = global;
            var10 = var9.Math;
            var9 = var10.floor;
            var7 = var11 / var7;
            var7 = var9.bind(var10)(var7);
            var6 = var7 + var8;
case 7:
            var1['page'] = var6;
            var1['total_results'] = var5;
            var5 = var3 != var4;
            var3 = null;
            if(!var5) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var3 = var4;
case 10:
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