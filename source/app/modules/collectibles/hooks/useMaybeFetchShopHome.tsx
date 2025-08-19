// app/modules/collectibles/hooks/useMaybeFetchShopHome.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.useEffect;
    var _closure1_slot3 = var8;
    var8 = var4.useCallback;
    var _closure1_slot4 = var8;
    var4 = var4.useMemo;
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ShopVariantsReturnStyle;
    var4 = var4.INDIVIDUAL_PRODUCTS;
    var _closure1_slot9 = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/hooks/useMaybeFetchShopHome.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = 600000;
    var3['COLLECTIBLES_SHOP_HOME_CACHE_DURATION'] = var4;
    var2 = function useMaybeFetchCollectiblesShopHome(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var10 = arg1;
            var22 = arg2;
            var8 = arg3;
            var18 = arguments[3];
            var _closure2_slot0 = var10;
            var _closure2_slot1 = var22;
            var _closure2_slot2 = var8;
            var7 = undefined;
            if(!(var18 === var7)) { _fun0001_ip = 34; continue _fun0001 }
 32:
            var18 = false;
 34:
            var _closure2_slot3 = var7;
            var _closure2_slot4 = var7;
            var _closure2_slot5 = var7;
            var _closure2_slot6 = var7;
            var _closure2_slot7 = var7;
            var _closure2_slot8 = var7;
            var _closure2_slot9 = var7;
            var _closure2_slot10 = var7;
            var _closure2_slot11 = var7;
            var _closure2_slot12 = var7;
            var _closure2_slot13 = var7;
            var _closure2_slot14 = var7;
            var _closure2_slot15 = var7;
            var _closure2_slot16 = var7;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var13 = 6;
            var5 = var3[var13];
            var11 = var4.bind(var7)(var5);
            var9 = var11.useStateFromStores;
            var5 = _closure1_slot6;
            var6 = new Array(1);
            var6[0] = var5;
            var5 = function() {
                var1 = _closure1_slot6;
                var1 = var1.hasLoadedExperiments;
                return var1;
            };
            var16 = var9.bind(var11)(var6, var5);
            _closure2_slot3 = var16;
            var5 = var3[var13];
            var11 = var4.bind(var7)(var5);
            var9 = var11.useStateFromStores;
            var5 = _closure1_slot7;
            var6 = new Array(1);
            var6[0] = var5;
            var5 = function() {
                var1 = _closure1_slot7;
                var1 = var1.skipNumCategories;
                return var1;
            };
            var9 = var9.bind(var11)(var6, var5);
            _closure2_slot4 = var9;
            var19 = 7;
            var3 = var3[var19];
            var4 = var4.bind(var7)(var3);
            var3 = var4.isDesktop;
            var21 = var3.bind(var4)();
            if(var21) { _fun0001_ip = 242; continue _fun0001 }
 215:
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var3 = var3[var19];
            var4 = var4.bind(var7)(var3);
            var3 = var4.isWeb;
            var21 = var3.bind(var4)();
 242:
            _closure2_slot5 = var21;
            var12 = _closure1_slot0;
            var14 = _closure1_slot1;
            var3 = var14[var13];
            var6 = var12.bind(var7)(var3);
            var5 = var6.useStateFromStoresArray;
            var3 = _closure1_slot8;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var6 = _closure1_slot8;
                    var1 = var6.getShopBlocks;
                    var5 = _closure2_slot0;
                    var3 = var1.bind(var6)(var5);
                    var1 = new Array(8);
                    var1[0] = var3;
                    var3 = var6.getLastSuccessfulFetch;
                    var7 = var3.bind(var6)(var5);
                    var6 = null;
                    var8 = var6 != var7;
                    var5 = 0;
                    if(!var8) { _fun0002_ip = 62; continue _fun0002 }
 59:
                    var5 = var7;
 62:
                    var1[1] = var5;
                    var8 = _closure1_slot8;
                    var7 = var8.getLastErrorTimestamp;
                    var5 = _closure2_slot0;
                    var5 = var7.bind(var8)(var5);
                    var6 = var6 != var5;
                    var3 = 0;
                    if(!var6) { _fun0002_ip = 99; continue _fun0002 }
 96:
                    var3 = var5;
 99:
                    var1[2] = var3;
                    var3 = _closure1_slot8;
                    var2 = var3.getLastFetchOptions;
                    var4 = _closure2_slot0;
                    var2 = var2.bind(var3)(var4);
                    var1[3] = var2;
                    var2 = var3.getFetchShopHomeError;
                    var2 = var2.bind(var3)(var4);
                    var1[4] = var2;
                    var2 = var3.getIsFetchingShopHome;
                    var2 = var2.bind(var3)(var4);
                    var1[5] = var2;
                    var2 = var3.getHasKnownStaleData;
                    var2 = var2.bind(var3)(var4);
                    var1[6] = var2;
                    var2 = var3.getShopHomeConfigOverride;
                    var2 = var2.bind(var3)();
                    var1[7] = var2;
                    return var1;
                }
            };
            var5 = var5.bind(var6)(var4, var3);
            var4 = _closure1_slot2;
            var3 = 8;
            var11 = var4.bind(var7)(var5, var3);
            var3 = 0;
            var3 = var11[var3];
            var4 = 1;
            var17 = var11[var4];
            _closure2_slot6 = var17;
            var4 = 2;
            var15 = var11[var4];
            _closure2_slot7 = var15;
            var4 = 3;
            var6 = var11[var4];
            _closure2_slot8 = var6;
            var4 = 4;
            var4 = var11[var4];
            _closure2_slot9 = var4;
            var5 = 5;
            var5 = var11[var5];
            _closure2_slot10 = var5;
            var13 = var11[var13];
            _closure2_slot11 = var13;
            var20 = var11[var19];
            _closure2_slot12 = var20;
            var19 = _closure1_slot5;
            var11 = new Array(4);
            var11[0] = var22;
            var11[1] = var21;
            var11[2] = var20;
            var11[3] = var9;
            var9 = function() {
                var1 = {};
                var5 = _closure2_slot1;
                var6 = var1;
                var3 = copyDataProperties(var6, var5);
                var4 = _closure1_slot9;
                var3 = 'variantsReturnStyle';
                var1[var3] = var4;
                var4 = _closure2_slot5;
                var3 = 'includeBundles';
                var1[var3] = var4;
                var4 = true;
                var3 = 'includePopularPicks';
                var1[var3] = var4;
                var3 = 'includeDynamicBlocks';
                var1[var3] = var4;
                var4 = _closure2_slot12;
                var3 = 'shopHomeConfig';
                var1[var3] = var4;
                var3 = _closure2_slot4;
                var2 = 'skipNumCategories';
                var1[var2] = var3;
                return var1;
            };
            var9 = var19.bind(var7)(var9, var11);
            _closure2_slot13 = var9;
            var11 = new Array(2);
            var11[0] = var6;
            var11[1] = var9;
            var6 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 8;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.areRequestOptionsEqual;
                var2 = _closure2_slot8;
                var1 = _closure2_slot13;
                var1 = var3.bind(var4)(var2, var1);
                var1 = !var1;
                return var1;
            };
            var6 = var19.bind(var7)(var6, var11);
            _closure2_slot14 = var6;
            var11 = 9;
            var11 = var14[var11];
            var14 = var12.bind(var7)(var11);
            var12 = var14.useHasExpiredShopBlocks;
            var11 = null;
            var11 = var11 != var5;
            if(!var11) { _fun0001_ip = 484; continue _fun0001 }
 481:
            var11 = var5;
 484:
            var11 = var12.bind(var14)(var3, var11, var18);
            _closure2_slot15 = var11;
            var14 = _closure1_slot5;
            var12 = new Array(2);
            var12[0] = var17;
            var12[1] = var11;
            var11 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var1 = _closure2_slot15;
                    var1 = !var1;
                    if(!var1) { _fun0003_ip = 48; continue _fun0003 }
 13:
                    var3 = global;
                    var4 = var3.Date;
                    var3 = var4.now;
                    var3 = var3.bind(var4)();
                    var2 = _closure2_slot6;
                    var3 = var3 - var2;
                    var2 = 600000;
                    var1 = var3 < var2;
 48:
                    return var1;
                }
            };
            var14 = var14.bind(var7)(var11, var12);
            _closure2_slot16 = var14;
            var12 = _closure1_slot3;
            var11 = new Array(10);
            var11[0] = var16;
            var11[1] = var5;
            var11[2] = var4;
            var11[3] = var15;
            var11[4] = var14;
            var11[5] = var13;
            var11[6] = var6;
            var11[7] = var9;
            var11[8] = var10;
            var11[9] = var8;
            var6 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var2 = _closure2_slot3;
                    if(!var2) { _fun0004_ip = 151; continue _fun0004 }
 13:
                    var2 = _closure2_slot10;
                    if(var2) { _fun0004_ip = 151; continue _fun0004 }
 23:
                    var2 = global;
                    var3 = var2.Date;
                    var2 = var3.now;
                    var3 = var2.bind(var3)();
                    var2 = _closure2_slot7;
                    var3 = var3 - var2;
                    var2 = 600000;
                    var3 = var3 < var2;
                    var4 = _closure2_slot9;
                    var2 = null;
                    var2 = var2 != var4;
                    if(!var2) { _fun0004_ip = 74; continue _fun0004 }
 71:
                    var2 = var3;
 74:
                    if(var2) { _fun0004_ip = 151; continue _fun0004 }
 77:
                    var2 = _closure2_slot14;
                    if(var2) { _fun0004_ip = 91; continue _fun0004 }
 84:
                    var3 = _closure2_slot16;
                    var2 = !var3;
 91:
                    if(var2) { _fun0004_ip = 98; continue _fun0004 }
 94:
                    var2 = _closure2_slot11;
 98:
                    if(!var2) { _fun0004_ip = 151; continue _fun0004 }
 101:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 8;
                    var3 = var3[var2];
                    var2 = undefined;
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.fetchCollectiblesShopHome;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot13;
                    var1 = _closure2_slot2;
                    var1 = var4.bind(var5)(var3, var2, var1);
 151:
                    var1 = undefined;
                    return var1;
                }
            };
            var6 = var12.bind(var7)(var6, var11);
            var6 = _closure1_slot4;
            var2 = new Array(3);
            var2[0] = var10;
            var2[1] = var9;
            var2[2] = var8;
            var1 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 8;
                var2 = var2[var1];
                var1 = undefined;
                var6 = var3.bind(var1)(var2);
                var5 = var6.fetchCollectiblesShopHome;
                var4 = _closure2_slot0;
                var3 = _closure2_slot13;
                var2 = _closure2_slot2;
                var2 = var5.bind(var6)(var4, var3, var2);
                return var1;
            };
            var2 = var6.bind(var7)(var1, var2);
            var1 = {};
            var1['isFetchingShopHome'] = var5;
            var1['fetchShopHomeError'] = var4;
            var1['shopBlocks'] = var3;
            var1['refreshShopHome'] = var2;
            return var1;
        }
    };
    var3['useMaybeFetchCollectiblesShopHome'] = var2;
    return var1;
})();