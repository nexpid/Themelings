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
            var12 = arg1;
            var10 = arg2;
            var _closure2_slot0 = var12;
            var _closure2_slot1 = var10;
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var14 = 5;
            var2 = var2[var14];
            var3 = undefined;
            var7 = var4.bind(var3)(var2);
            var5 = var7.useStateFromStores;
            var2 = _closure1_slot4;
            var4 = new Array(1);
            var4[0] = var2;
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
            var2 = var5.bind(var7)(var4, var2);
            var4 = null;
            var11 = var4 != var2;
            if(!var11) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var5 = var2.productLine;
            var2 = _closure1_slot6;
            var2 = var2.COLLECTIBLES;
            var11 = var5 !== var2;
case 4:
            var _closure2_slot2 = var11;
            var9 = _closure1_slot0;
            var8 = _closure1_slot1;
            var2 = var8[var14];
            var15 = var9.bind(var3)(var2);
            var13 = var15.useStateFromStoresArray;
            var7 = _closure1_slot5;
            var5 = new Array(1);
            var5[0] = var7;
            var2 = function() {
                var4 = _closure1_slot5;
                var1 = var4.getProduct;
                var3 = _closure2_slot0;
                var2 = var1.bind(var4)(var3);
                var1 = new Array(2);
                var1[0] = var2;
                var2 = var4.getProductFetch;
                var2 = var2.bind(var4)(var3);
                var1[1] = var2;
                return var1;
            };
            var13 = var13.bind(var15)(var5, var2);
            var5 = _closure1_slot2;
            var2 = 2;
            var15 = var5.bind(var3)(var13, var2);
            var13 = 0;
            var5 = var15[var13];
            var _closure2_slot3 = var5;
            var2 = 1;
            var2 = var15[var2];
            var _closure2_slot4 = var2;
            var8 = var8[var14];
            var14 = var9.bind(var3)(var8);
            var9 = var14.useStateFromStores;
            var8 = new Array(1);
            var8[0] = var7;
            var7 = function() {
                var3 = _closure1_slot5;
                var2 = var3.isProductFetchBackedOff;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var8 = var9.bind(var14)(var8, var7);
            var _closure2_slot5 = var8;
            var7 = true;
            var9 = var7 === var10;
            if(!var9) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var7 = var4 == var5;
            var14 = undefined;
            if(var7) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var14 = var5.type;
case 8:
            var15 = _closure1_slot0;
            var16 = _closure1_slot1;
            var7 = 6;
            var7 = var16[var7];
            var7 = var15.bind(var3)(var7);
            var7 = var7.CollectiblesItemType;
            var7 = var7.BUNDLE;
            var9 = var14 === var7;
case 6:
            if(!var9) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var7 = var5.items;
            var7 = var7.length;
            var9 = var13 === var7;
case 10:
            var _closure2_slot6 = var9;
            var7 = _closure1_slot3;
            var6 = new Array(7);
            var6[0] = var12;
            var6[1] = var5;
            var6[2] = var11;
            var6[3] = var2;
            var6[4] = var10;
            var6[5] = var9;
            var6[6] = var8;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = _closure2_slot0;
                    var3 = null;
                    var1 = var3 == var1;
                    if(var1) { _fun0003_ip = 2; continue _fun0003 }
case 3:
                    var2 = _closure2_slot3;
                    var2 = var3 != var2;
                    if(!var2) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                    var4 = _closure2_slot6;
                    var2 = !var4;
case 12:
                    var1 = var2;
case 2:
                    if(var1) { _fun0003_ip = 14; continue _fun0003 }
case 15:
                    var1 = _closure2_slot2;
case 14:
                    if(var1) { _fun0003_ip = 16; continue _fun0003 }
case 17:
                    var2 = _closure2_slot4;
                    var2 = var3 == var2;
                    var3 = undefined;
                    if(var2) { _fun0003_ip = 18; continue _fun0003 }
case 19:
                    var2 = _closure2_slot4;
                    var3 = var2.state;
case 18:
                    var2 = 'fetching';
                    var1 = var2 === var3;
case 16:
                    if(var1) { _fun0003_ip = 20; continue _fun0003 }
case 21:
                    var1 = _closure2_slot5;
case 20:
                    if(var1) { _fun0003_ip = 22; continue _fun0003 }
case 23:
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
case 22:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var7.bind(var3)(var1, var6);
            var1 = {};
            var1['product'] = var5;
            var4 = var4 == var2;
            var3 = undefined;
            if(var4) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var3 = var2.state;
case 24:
            var2 = 'fetching';
            var2 = var2 === var3;
            var1['isFetching'] = var2;
            return var1;
        }
    };
    var3['useFetchCollectiblesProduct'] = var2;
    return var1;
})();