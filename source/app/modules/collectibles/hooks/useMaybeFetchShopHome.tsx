// app/modules/collectibles/hooks/useMaybeFetchShopHome.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
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
    var4 = 9;
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
            var19 = arg2;
            var8 = arg3;
            var _closure2_slot0 = var10;
            var _closure2_slot1 = var19;
            var _closure2_slot2 = var8;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var5 = 5;
            var6 = var3[var5];
            var7 = undefined;
            var12 = var4.bind(var7)(var6);
            var11 = var12.useStateFromStores;
            var6 = _closure1_slot6;
            var9 = new Array(1);
            var9[0] = var6;
            var6 = function() {
                var1 = _closure1_slot6;
                var1 = var1.hasLoadedExperiments;
                return var1;
            };
            var15 = var11.bind(var12)(var9, var6);
            var _closure2_slot3 = var15;
            var6 = var3[var5];
            var12 = var4.bind(var7)(var6);
            var11 = var12.useStateFromStores;
            var6 = _closure1_slot7;
            var9 = new Array(1);
            var9[0] = var6;
            var6 = function() {
                var1 = _closure1_slot7;
                var1 = var1.skipNumCategories;
                return var1;
            };
            var9 = var11.bind(var12)(var9, var6);
            var _closure2_slot4 = var9;
            var13 = 6;
            var6 = var3[var13];
            var12 = var4.bind(var7)(var6);
            var11 = var12.useShopVariantsReturnStyle;
            var6 = 'useMaybeFetchCollectiblesShopHome';
            var18 = var11.bind(var12)(var6);
            var _closure2_slot5 = var18;
            var6 = 7;
            var3 = var3[var6];
            var4 = var4.bind(var7)(var3);
            var3 = var4.isDesktop;
            var17 = var3.bind(var4)();
            if(var17) { _fun0001_ip = 208; continue _fun0001 }
 181:
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var3 = var3[var6];
            var4 = var4.bind(var7)(var3);
            var3 = var4.isWeb;
            var17 = var3.bind(var4)();
 208:
            var _closure2_slot6 = var17;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var3 = var3[var5];
            var12 = var4.bind(var7)(var3);
            var11 = var12.useStateFromStoresArray;
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
                    var1 = new Array(7);
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
                    var2 = var3.getShopHomeConfigOverride;
                    var2 = var2.bind(var3)();
                    var1[6] = var2;
                    return var1;
                }
            };
            var4 = var11.bind(var12)(var4, var3);
            var3 = _closure1_slot2;
            var12 = var3.bind(var7)(var4, var6);
            var3 = 0;
            var3 = var12[var3];
            var4 = 1;
            var11 = var12[var4];
            var _closure2_slot7 = var11;
            var4 = 2;
            var14 = var12[var4];
            var _closure2_slot8 = var14;
            var4 = 3;
            var6 = var12[var4];
            var _closure2_slot9 = var6;
            var4 = 4;
            var4 = var12[var4];
            var _closure2_slot10 = var4;
            var5 = var12[var5];
            var _closure2_slot11 = var5;
            var16 = var12[var13];
            var _closure2_slot12 = var16;
            var13 = _closure1_slot5;
            var12 = new Array(5);
            var12[0] = var19;
            var12[1] = var18;
            var12[2] = var17;
            var12[3] = var16;
            var12[4] = var9;
            var9 = function() {
                var1 = {};
                var5 = _closure2_slot1;
                var6 = var1;
                var3 = copyDataProperties(var6, var5);
                var4 = _closure2_slot5;
                var3 = 'variantsReturnStyle';
                var1[var3] = var4;
                var4 = _closure2_slot6;
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
            var9 = var13.bind(var7)(var9, var12);
            var _closure2_slot13 = var9;
            var12 = new Array(2);
            var12[0] = var6;
            var12[1] = var9;
            var6 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 8;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.areRequestOptionsEqual;
                var2 = _closure2_slot9;
                var1 = _closure2_slot13;
                var1 = var3.bind(var4)(var2, var1);
                var1 = !var1;
                return var1;
            };
            var6 = var13.bind(var7)(var6, var12);
            var _closure2_slot14 = var6;
            var12 = new Array(1);
            var12[0] = var11;
            var11 = function() {
                var1 = global;
                var2 = var1.Date;
                var1 = var2.now;
                var2 = var1.bind(var2)();
                var1 = _closure2_slot7;
                var2 = var2 - var1;
                var1 = 600000;
                var1 = var2 < var1;
                return var1;
            };
            var13 = var13.bind(var7)(var11, var12);
            var _closure2_slot15 = var13;
            var12 = _closure1_slot3;
            var11 = new Array(9);
            var11[0] = var15;
            var11[1] = var5;
            var11[2] = var4;
            var11[3] = var14;
            var11[4] = var13;
            var11[5] = var6;
            var11[6] = var9;
            var11[7] = var10;
            var11[8] = var8;
            var6 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var2 = _closure2_slot3;
                    if(!var2) { _fun0003_ip = 147; continue _fun0003 }
 13:
                    var2 = _closure2_slot11;
                    if(var2) { _fun0003_ip = 147; continue _fun0003 }
 23:
                    var2 = global;
                    var3 = var2.Date;
                    var2 = var3.now;
                    var3 = var2.bind(var3)();
                    var2 = _closure2_slot8;
                    var3 = var3 - var2;
                    var2 = 600000;
                    var3 = var3 < var2;
                    var4 = _closure2_slot10;
                    var2 = null;
                    var2 = var2 != var4;
                    if(!var2) { _fun0003_ip = 74; continue _fun0003 }
 71:
                    var2 = var3;
 74:
                    if(var2) { _fun0003_ip = 94; continue _fun0003 }
 77:
                    var3 = _closure2_slot14;
                    var3 = !var3;
                    if(!var3) { _fun0003_ip = 91; continue _fun0003 }
 87:
                    var3 = _closure2_slot15;
 91:
                    var2 = var3;
 94:
                    if(var2) { _fun0003_ip = 147; continue _fun0003 }
 97:
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
 147:
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