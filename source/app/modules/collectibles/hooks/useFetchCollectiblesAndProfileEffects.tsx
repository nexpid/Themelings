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
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/hooks/useFetchCollectiblesAndProfileEffects.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useFetchCollectiblesAndProfileEffects() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = _closure1_slot1;
            var12 = _closure1_slot2;
            var5 = 2;
            var2 = var12[var5];
            var10 = undefined;
            var2 = var3.bind(var10)(var2);
            var2 = var2.bind(var10)();
            var8 = var2.isFetching;
            var9 = var2.fetchCategoriesError;
            var7 = var2.fetchPurchasesError;
            var3 = var2.categories;
            var2 = var2.purchases;
            var11 = _closure1_slot0;
            var6 = 3;
            var4 = var12[var6];
            var13 = var11.bind(var10)(var4);
            var4 = var13.useFetchMissingProfileEffects;
            var4 = var4.bind(var13)();
            var4 = 4;
            var4 = var12[var4];
            var13 = var11.bind(var10)(var4);
            var12 = var13.useStateFromStoresArray;
            var4 = _closure1_slot4;
            var11 = new Array(1);
            var11[0] = var4;
            var4 = function() {
                var2 = _closure1_slot4;
                var3 = var2.isFetchingAll;
                var1 = new Array(3);
                var1[0] = var3;
                var3 = var2.fetchError;
                var1[1] = var3;
                var2 = var2.profileEffects;
                var1[2] = var2;
                return var1;
            };
            var4 = var12.bind(var13)(var11, var4);
            var1 = _closure1_slot3;
            var4 = var1.bind(var10)(var4, var6);
            var1 = 0;
            var10 = var4[var1];
            var1 = 1;
            var6 = var4[var1];
            var1 = {};
            if(var8) { _fun0001_ip = 161; continue _fun0001 }
 158:
            var8 = var10;
 161:
            var1['isFetching'] = var8;
            var8 = null;
            if(!(var8 != var9)) { _fun0001_ip = 175; continue _fun0001 }
 172:
            var7 = var9;
 175:
            if(!(var8 != var7)) { _fun0001_ip = 182; continue _fun0001 }
 179:
            var6 = var7;
 182:
            var1['combinedError'] = var6;
            var4 = var4[var5];
            var1['profileEffects'] = var4;
            var1['categories'] = var3;
            var1['purchases'] = var2;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();