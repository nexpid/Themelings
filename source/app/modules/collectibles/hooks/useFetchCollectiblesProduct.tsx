// app/modules/collectibles/hooks/useFetchCollectiblesProduct.tsx
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
    var4 = var4.useEffect;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.SKUProductLines;
    var _closure1_slot6 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/hooks/useFetchCollectiblesProduct.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useFetchCollectiblesProduct(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var11 = arg1;
            var8 = arg2;
            var _closure2_slot0 = var11;
            var _closure2_slot1 = var8;
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var7 = 5;
            var2 = var2[var7];
            var6 = undefined;
            var9 = var3.bind(var6)(var2);
            var5 = var9.useStateFromStores;
            var2 = _closure1_slot4;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var1 = null;
                    var3 = var1 != var3;
                    if(!var3) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var4 = _closure1_slot4;
                    var3 = var4.get;
                    var2 = _closure2_slot0;
                    var1 = var3.bind(var4)(var2);
case 2:
                    return var1;
                }
            };
            var2 = var5.bind(var9)(var3, var2);
            var5 = null;
            var10 = var5 != var2;
            if(!var10) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = var2.productLine;
            var2 = _closure1_slot6;
            var2 = var2.COLLECTIBLES;
            var10 = var3 !== var2;
case 4:
            var _closure2_slot2 = var10;
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var7];
            var9 = var3.bind(var6)(var2);
            var7 = var9.useStateFromStoresArray;
            var2 = _closure1_slot5;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var4 = _closure1_slot5;
                var1 = var4.isFetchingProduct;
                var3 = _closure2_slot0;
                var2 = var1.bind(var4)(var3);
                var1 = new Array(4);
                var1[0] = var2;
                var2 = var4.getProduct;
                var2 = var2.bind(var4)(var3);
                var1[1] = var2;
                var2 = var4.getProductFetchError;
                var2 = var2.bind(var4)(var3);
                var1[2] = var2;
                var2 = var4.getProductFetchErrorTimestamp;
                var2 = var2.bind(var4)(var3);
                var1[3] = var2;
                return var1;
            };
            var7 = var7.bind(var9)(var3, var2);
            var3 = _closure1_slot2;
            var2 = 4;
            var13 = var3.bind(var6)(var7, var2);
            var12 = 0;
            var2 = var13[var12];
            var _closure2_slot3 = var2;
            var3 = 1;
            var3 = var13[var3];
            var _closure2_slot4 = var3;
            var7 = 2;
            var7 = var13[var7];
            var9 = 3;
            var13 = var13[var9];
            var9 = var5 != var7;
            if(!var9) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var9 = var5 != var13;
case 6:
            if(!var9) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var7 = global;
            var14 = var7.Date;
            var7 = var14.now;
            var7 = var7.bind(var14)();
            var13 = var7 - var13;
            var7 = 3600000;
            var9 = var13 < var7;
case 8:
            var _closure2_slot5 = var9;
            var7 = true;
            var7 = var7 === var8;
            if(!var7) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var5 = var5 == var3;
            var13 = undefined;
            if(var5) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var13 = var3.type;
case 12:
            var14 = _closure1_slot0;
            var15 = _closure1_slot1;
            var5 = 6;
            var5 = var15[var5];
            var5 = var14.bind(var6)(var5);
            var5 = var5.CollectiblesItemType;
            var5 = var5.BUNDLE;
            var7 = var13 === var5;
case 10:
            if(!var7) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var5 = var3.items;
            var5 = var5.length;
            var7 = var12 === var5;
case 14:
            var _closure2_slot6 = var7;
            var5 = _closure1_slot3;
            var4 = new Array(7);
            var4[0] = var11;
            var4[1] = var3;
            var4[2] = var10;
            var4[3] = var2;
            var4[4] = var9;
            var4[5] = var8;
            var4[6] = var7;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = _closure2_slot0;
                    var3 = null;
                    var1 = var3 == var1;
                    if(var1) { _fun0003_ip = 2; continue _fun0003 }
case 3:
                    var2 = _closure2_slot4;
                    var2 = var3 != var2;
                    if(!var2) { _fun0003_ip = 16; continue _fun0003 }
case 17:
                    var3 = _closure2_slot6;
                    var2 = !var3;
case 16:
                    var1 = var2;
case 2:
                    if(var1) { _fun0003_ip = 18; continue _fun0003 }
case 19:
                    var1 = _closure2_slot2;
case 18:
                    if(var1) { _fun0003_ip = 20; continue _fun0003 }
case 21:
                    var1 = _closure2_slot3;
case 20:
                    if(var1) { _fun0003_ip = 22; continue _fun0003 }
case 23:
                    var1 = _closure2_slot5;
case 22:
                    if(var1) { _fun0003_ip = 24; continue _fun0003 }
case 25:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 7;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.fetchCollectiblesProduct;
                    var2 = _closure2_slot0;
                    var1 = {};
                    var5 = _closure2_slot1;
                    var1['includeBundles'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
case 24:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var5.bind(var6)(var1, var4);
            var1 = {};
            var1['product'] = var3;
            var1['isFetching'] = var2;
            return var1;
        }
    };
    var3['useFetchCollectiblesProduct'] = var2;
    return var1;
})();