// app/modules/premium/native/useStoreConnectionErrorAlert.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/native/useStoreConnectionErrorAlert.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useStoreConnectionErrorAlert() {
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var1 = 2;
        var4 = var4[var1];
        var1 = undefined;
        var7 = var5.bind(var1)(var4);
        var6 = var7.useStateFromStores;
        var4 = _closure1_slot4;
        var5 = new Array(1);
        var5[0] = var4;
        var4 = function() {
            var2 = _closure1_slot4;
            var1 = var2.hasConnectionError;
            var1 = var1.bind(var2)();
            return var1;
        };
        var6 = var6.bind(var7)(var5, var4);
        var _closure2_slot0 = var6;
        var5 = _closure1_slot3;
        var4 = var5.useEffect;
        var3 = new Array(1);
        var3[0] = var6;
        var2 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var1 = _closure2_slot0;
                if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var2 = _closure1_slot1;
                var9 = _closure1_slot2;
                var1 = 3;
                var1 = var9[var1];
                var8 = undefined;
                var3 = var2.bind(var8)(var1);
                var2 = var3.show;
                var1 = {};
                var7 = _closure1_slot0;
                var4 = 4;
                var5 = var9[var4];
                var5 = var7.bind(var8)(var5);
                var10 = var5.intl;
                var6 = var10.string;
                var5 = var9[var4];
                var5 = var7.bind(var8)(var5);
                var5 = var5.t;
                var5 = var5.U+H+kZ;
                var5 = var6.bind(var10)(var5);
                var1['title'] = var5;
                var5 = var9[var4];
                var5 = var7.bind(var8)(var5);
                var6 = var5.intl;
                var5 = var6.string;
                var4 = var9[var4];
                var4 = var7.bind(var8)(var4);
                var4 = var4.t;
                var4 = var4.Q9OYlJ;
                var4 = var5.bind(var6)(var4);
                var1['body'] = var4;
                var1 = var2.bind(var3)(var1);
case 2:
                var1 = undefined;
                return var1;
            }
        };
        var2 = var4.bind(var5)(var2, var3);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();