// app/modules/applications/useIsSocialLayerParentApplication.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = metroImportAll;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var6;
    var2 = function getIsSocialLayerParentApplication(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var2 = null;
            var4 = var2 == var3;
            var7 = undefined;
            var1 = undefined;
            if(var4) { _fun0001_ip = 21; continue _fun0001 }
 16:
            var1 = var3.flags;
 21:
            var1 = var2 != var1;
            if(!var1) { _fun0001_ip = 110; continue _fun0001 }
 28:
            var6 = _closure1_slot0;
            var8 = _closure1_slot1;
            var2 = 1;
            var4 = var8[var2];
            var5 = var6.bind(var7)(var4);
            var4 = var5.has;
            var9 = var8[var2];
            var10 = var6.bind(var7)(var9);
            var9 = var10.deserialize;
            var3 = var3.flags;
            var3 = var9.bind(var10)(var3);
            var2 = var8[var2];
            var7 = var6.bind(var7)(var2);
            var6 = var7.getFlag;
            var2 = 33;
            var2 = var6.bind(var7)(var2);
            var1 = var4.bind(var5)(var3, var2);
 110:
            return var1;
        }
    };
    var _closure1_slot3 = var2;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var5);
    var1 = 0;
    var5 = var6[var1];
    var1 = undefined;
    var5 = var7.bind(var1)(var5);
    var _closure1_slot2 = var5;
    var5 = 2;
    var6 = var6[var5];
    var5 = require;
    var7 = var5.bind(var1)(var6);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/applications/useIsSocialLayerParentApplication.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function useIsSocialLayerParentApplication(arg1) {
        var5 = arg1;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot2;
        var3 = var4.useMemo;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            var3 = _closure1_slot3;
            var2 = _closure2_slot0;
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['default'] = var4;
    var3['getIsSocialLayerParentApplication'] = var2;
    return var1;
})();