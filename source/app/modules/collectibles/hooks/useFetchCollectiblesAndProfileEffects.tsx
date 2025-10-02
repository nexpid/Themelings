// app/modules/collectibles/hooks/useFetchCollectiblesAndProfileEffects.tsx
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/hooks/useFetchCollectiblesAndProfileEffects.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useFetchCollectiblesAndProfileEffects() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = _closure1_slot1;
            var8 = _closure1_slot2;
            var2 = 1;
            var2 = var8[var2];
            var7 = undefined;
            var2 = var3.bind(var7)(var2);
            var2 = var2.bind(var7)();
            var4 = var2.isFetching;
            var3 = var2.categories;
            var2 = var2.purchases;
            var6 = _closure1_slot0;
            var5 = 2;
            var5 = var8[var5];
            var7 = var6.bind(var7)(var5);
            var6 = var7.useStateFromStores;
            var1 = _closure1_slot3;
            var5 = new Array(1);
            var5[0] = var1;
            var1 = function() {
                var1 = _closure1_slot3;
                var1 = var1.isFetchingAll;
                return var1;
            };
            var5 = var6.bind(var7)(var5, var1);
            var1 = {};
            if(var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var5;
case 2:
            var1['isFetching'] = var4;
            var1['categories'] = var3;
            var1['purchases'] = var2;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();