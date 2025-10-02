// app/modules/fastest_list/props/useFastestListPropsEstimatedListSize.native.tsx
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
    var7 = var6[var1];
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot0 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot1 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Dimensions;
    var _closure1_slot2 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/fastest_list/props/useFastestListPropsEstimatedListSize.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useFastestListPropsEstimatedListSize(arg1) {
        var1 = arg1;
        var3 = var1.estimatedListSize;
        var _closure2_slot0 = var3;
        var1 = var1.horizontal;
        var _closure2_slot1 = var1;
        var4 = _closure1_slot1;
        var3 = var4.useState;
        var2 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var3 = _closure2_slot0;
                var1 = 'windowSize';
                if(!(var1 !== var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var1 = _closure2_slot0;
                _fun0001_ip = 4; continue _fun0001;
case 2:
                var2 = _closure2_slot1;
                var5 = _closure1_slot2;
                var4 = var5.get;
                var3 = 'window';
                var3 = var4.bind(var5)(var3);
                if(var2) { _fun0001_ip = 5; continue _fun0001 }
case 6:
                var2 = var3.height;
                _fun0001_ip = 7; continue _fun0001;
case 5:
                var2 = var3.width;
case 7:
                var1 = var2;
case 4:
                return var1;
            }
        };
        var4 = var3.bind(var4)(var2);
        var3 = _closure1_slot0;
        var2 = undefined;
        var1 = 2;
        var3 = var3.bind(var2)(var4, var1);
        var1 = 0;
        var1 = var3[var1];
        var2 = 1;
        var2 = var3[var2];
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();