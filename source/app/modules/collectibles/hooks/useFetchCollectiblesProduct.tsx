// app/modules/collectibles/hooks/useFetchCollectiblesProduct.tsx
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
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/hooks/useFetchCollectiblesProduct.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useFetchCollectiblesProduct(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var9 = arg1;
            var _closure2_slot0 = var9;
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var7 = 5;
            var2 = var2[var7];
            var6 = undefined;
            var8 = var3.bind(var6)(var2);
            var5 = var8.useStateFromStores;
            var2 = _closure1_slot4;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure2_slot0;
                    var1 = null;
                    var3 = var1 != var3;
                    if(!var3) { _fun0002_ip = 37; continue _fun0002 }
 16:
                    var4 = _closure1_slot4;
                    var3 = var4.get;
                    var2 = _closure2_slot0;
                    var1 = var3.bind(var4)(var2);
 37:
                    return var1;
                }
            };
            var2 = var5.bind(var8)(var3, var2);
            var5 = null;
            var8 = var5 != var2;
            if(!var8) { _fun0001_ip = 91; continue _fun0001 }
 71:
            var3 = var2.productLine;
            var2 = _closure1_slot6;
            var2 = var2.COLLECTIBLES;
            var8 = var3 !== var2;
 91:
            var _closure2_slot1 = var8;
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var7];
            var10 = var3.bind(var6)(var2);
            var7 = var10.useStateFromStoresArray;
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
            var7 = var7.bind(var10)(var3, var2);
            var3 = _closure1_slot2;
            var2 = 4;
            var11 = var3.bind(var6)(var7, var2);
            var2 = 0;
            var2 = var11[var2];
            var _closure2_slot2 = var2;
            var3 = 1;
            var3 = var11[var3];
            var _closure2_slot3 = var3;
            var7 = 2;
            var7 = var11[var7];
            var10 = 3;
            var10 = var11[var10];
            var7 = var5 != var7;
            if(!var7) { _fun0001_ip = 200; continue _fun0001 }
 196:
            var7 = var5 != var10;
 200:
            if(!var7) { _fun0001_ip = 234; continue _fun0001 }
 203:
            var5 = global;
            var11 = var5.Date;
            var5 = var11.now;
            var5 = var5.bind(var11)();
            var10 = var5 - var10;
            var5 = 3600000;
            var7 = var10 < var5;
 234:
            var _closure2_slot4 = var7;
            var5 = _closure1_slot3;
            var4 = new Array(5);
            var4[0] = var9;
            var4[1] = var3;
            var4[2] = var8;
            var4[3] = var2;
            var4[4] = var7;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var2 = _closure2_slot0;
                    var4 = null;
                    var2 = var4 == var2;
                    if(var2) { _fun0003_ip = 24; continue _fun0003 }
 16:
                    var3 = _closure2_slot3;
                    var2 = var4 != var3;
 24:
                    if(var2) { _fun0003_ip = 31; continue _fun0003 }
 27:
                    var2 = _closure2_slot1;
 31:
                    if(var2) { _fun0003_ip = 38; continue _fun0003 }
 34:
                    var2 = _closure2_slot2;
 38:
                    if(var2) { _fun0003_ip = 45; continue _fun0003 }
 41:
                    var2 = _closure2_slot4;
 45:
                    if(var2) { _fun0003_ip = 88; continue _fun0003 }
 48:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 6;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.fetchCollectiblesProduct;
                    var1 = _closure2_slot0;
                    var1 = var2.bind(var3)(var1);
 88:
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