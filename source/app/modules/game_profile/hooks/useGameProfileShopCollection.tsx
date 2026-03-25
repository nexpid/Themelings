// app/modules/game_profile/hooks/useGameProfileShopCollection.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
    var4 = var4.useEffect;
    var _closure1_slot2 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportDefault;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/game_profile/hooks/useGameProfileShopCollection.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useGameProfileShopCollection(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var7 = arg1;
            var _closure2_slot0 = var7;
            var4 = _closure1_slot0;
            var5 = _closure1_slot1;
            var1 = 2;
            var1 = var5[var1];
            var5 = undefined;
            var8 = var4.bind(var5)(var1);
            var6 = var8.useStateFromStoresObject;
            var1 = _closure1_slot3;
            var4 = new Array(1);
            var4[0] = var1;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = {};
                    var2 = _closure2_slot0;
                    var4 = null;
                    var2 = var4 != var2;
                    if(!var2) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var7 = _closure1_slot3;
                    var6 = var7.hasShopCollectionBeenFetched;
                    var5 = _closure2_slot0;
                    var2 = var6.bind(var7)(var5);
case 2:
                    var1['hasFetched'] = var2;
                    var2 = _closure2_slot0;
                    var4 = var4 != var2;
                    var2 = undefined;
                    if(!var4) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var5 = _closure1_slot3;
                    var4 = var5.getShopCollectionSkuIds;
                    var3 = _closure2_slot0;
                    var2 = var4.bind(var5)(var3);
case 4:
                    var1['skuIds'] = var2;
                    return var1;
                }
            };
            var1 = var6.bind(var8)(var4, var1);
            var6 = var1.hasFetched;
            var _closure2_slot1 = var6;
            var1 = var1.skuIds;
            var4 = _closure1_slot2;
            var3 = new Array(2);
            var3[0] = var7;
            var3[1] = var6;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var2 = null;
                    var2 = var2 == var3;
                    if(var2) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                    var2 = _closure2_slot1;
case 6:
                    if(var2) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                    var5 = _closure1_slot3;
                    var4 = var5.isShopCollectionFetching;
                    var3 = _closure2_slot0;
                    var2 = var4.bind(var5)(var3);
case 8:
                    if(var2) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 3;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.getShopCollection;
                    var1 = _closure2_slot0;
                    var1 = var2.bind(var3)(var1);
case 10:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var4.bind(var5)(var2, var3);
            var2 = null;
            if(!(var2 == var1)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var1 = new Array(0);
case 12:
            return var1;
        }
    };
    var3['useGameProfileShopCollection'] = var2;
    return var1;
})();