// app/modules/collectibles/hooks/useFetchCollectiblesCategoriesAndPurchases.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var7 = native2;
    var9 = native3;
    var3 = native6;
    var8 = native7;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var8;
    var4 = function useFetchPurchases() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var12 = arguments[0];
            var13 = arguments[1];
            var10 = undefined;
            if(!(var12 === var10)) { _fun0001_ip = 16; continue _fun0001 }
 14:
            var12 = false;
 16:
            var _closure2_slot0 = var12;
            var _closure2_slot1 = var13;
            var _closure2_slot2 = var10;
            var _closure2_slot3 = var10;
            var _closure2_slot4 = var10;
            var _closure2_slot5 = var10;
            var _closure2_slot6 = var10;
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var3 = 3;
            var2 = var4[var3];
            var7 = var5.bind(var10)(var2);
            var6 = var7.useShopVariantsReturnStyle;
            var2 = 'useFetchPurchases';
            var11 = var6.bind(var7)(var2);
            _closure2_slot2 = var11;
            var2 = 4;
            var4 = var4[var2];
            var7 = var5.bind(var10)(var4);
            var6 = var7.useStateFromStoresArray;
            var4 = _closure1_slot6;
            var5 = new Array(1);
            var5[0] = var4;
            var4 = function() {
                var1 = _closure1_slot6;
                var3 = var1.isFetching;
                var1 = new Array(6);
                var1[0] = var3;
                var3 = _closure1_slot6;
                var3 = var3.isClaiming;
                var1[1] = var3;
                var3 = _closure1_slot6;
                var3 = var3.fetchError;
                var1[2] = var3;
                var3 = _closure1_slot6;
                var3 = var3.claimError;
                var1[3] = var3;
                var3 = _closure1_slot6;
                var3 = var3.purchases;
                var1[4] = var3;
                var2 = _closure1_slot6;
                var2 = var2.hasPreviouslyFetched;
                var1[5] = var2;
                return var1;
            };
            var6 = var6.bind(var7)(var5, var4);
            var5 = _closure1_slot3;
            var4 = 6;
            var9 = var5.bind(var10)(var6, var4);
            var4 = 0;
            var4 = var9[var4];
            var5 = 1;
            var7 = var9[var5];
            var5 = 2;
            var6 = var9[var5];
            _closure2_slot3 = var6;
            var5 = var9[var3];
            var3 = var9[var2];
            var2 = 5;
            var2 = var9[var2];
            _closure2_slot4 = var2;
            var14 = _closure1_slot5;
            var9 = _closure1_slot6;
            var9 = var9.hasPreviouslyFetched;
            var9 = var14.bind(var10)(var9);
            _closure2_slot5 = var9;
            var15 = _closure1_slot4;
            var14 = new Array(1);
            var14[0] = var2;
            var9 = function() {
                var2 = _closure2_slot5;
                var1 = _closure2_slot4;
                var2['current'] = var1;
                var1 = undefined;
                return var1;
            };
            var9 = var15.bind(var10)(var9, var14);
            var14 = _closure1_slot5;
            var9 = _closure1_slot6;
            var9 = var9.fetchError;
            var9 = var14.bind(var10)(var9);
            _closure2_slot6 = var9;
            var15 = _closure1_slot4;
            var14 = new Array(1);
            var14[0] = var6;
            var9 = function() {
                var2 = _closure2_slot6;
                var1 = _closure2_slot3;
                var2['current'] = var1;
                var1 = undefined;
                return var1;
            };
            var9 = var15.bind(var10)(var9, var14);
            var9 = _closure1_slot4;
            var8 = new Array(3);
            var8[0] = var13;
            var8[1] = var12;
            var8[2] = var11;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot0;
                    var1 = true;
                    var1 = var1 === var2;
                    if(!var1) { _fun0002_ip = 25; continue _fun0002 }
 16:
                    var2 = _closure2_slot5;
                    var1 = var2.current;
 25:
                    if(!var1) { _fun0002_ip = 43; continue _fun0002 }
 28:
                    var2 = _closure2_slot6;
                    var3 = var2.current;
                    var2 = null;
                    var1 = var2 == var3;
 43:
                    if(var1) { _fun0002_ip = 101; continue _fun0002 }
 46:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 5;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.fetchCollectiblesPurchases;
                    var1 = {};
                    var5 = _closure2_slot2;
                    var1['variantsReturnStyle'] = var5;
                    var4 = _closure2_slot1;
                    var1['location'] = var4;
                    var1 = var2.bind(var3)(var1);
 101:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var9.bind(var10)(var1, var8);
            var1 = {};
            var1['isClaiming'] = var7;
            var1['fetchPurchasesError'] = var6;
            var1['claimError'] = var5;
            var1['isFetching'] = var4;
            var1['purchases'] = var3;
            var1['hasPreviouslyFetched'] = var2;
            return var1;
        }
    };
    var _closure1_slot7 = var4;
    var5 = function useFetchCollectiblesCategoriesAndPurchases(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var8 = arg1;
            var1 = null;
            var2 = var1 == var8;
            var5 = undefined;
            var3 = undefined;
            if(var2) { _fun0003_ip = 22; continue _fun0003 }
 16:
            var3 = var8.paymentGateway;
 22:
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var4 = 6;
            var4 = var7[var4];
            var6 = var6.bind(var5)(var4);
            var4 = {};
            var4['paymentGateway'] = var3;
            var7 = var1 == var8;
            var3 = undefined;
            if(var7) { _fun0003_ip = 67; continue _fun0003 }
 61:
            var3 = var8.noOp;
 67:
            var4['noOp'] = var3;
            var7 = var1 == var8;
            var3 = undefined;
            if(var7) { _fun0003_ip = 87; continue _fun0003 }
 81:
            var3 = var8.logPerf;
 87:
            var4['logPerf'] = var3;
            var7 = var1 == var8;
            var3 = undefined;
            if(var7) { _fun0003_ip = 107; continue _fun0003 }
 101:
            var3 = var8.countryCode;
 107:
            var4['countryCode'] = var3;
            var3 = arg2;
            var3 = var6.bind(var5)(var4, var3);
            var10 = var3.isFetching;
            var7 = var3.categories;
            var6 = var3.fetchCategoriesError;
            var3 = var3.refreshCategories;
            var4 = _closure1_slot7;
            var9 = var1 == var8;
            var2 = undefined;
            if(var9) { _fun0003_ip = 166; continue _fun0003 }
 158:
            var2 = var8.stalePurchasesOK;
 166:
            var9 = var1 == var8;
            var1 = undefined;
            if(var9) { _fun0003_ip = 180; continue _fun0003 }
 175:
            var1 = var8.location;
 180:
            var2 = var4.bind(var5)(var2, var1);
            var8 = var2.isClaiming;
            var5 = var2.fetchPurchasesError;
            var4 = var2.claimError;
            var9 = var2.isFetching;
            var1 = {};
            var11 = var10;
            if(var11) { _fun0003_ip = 221; continue _fun0003 }
 218:
            var11 = var9;
 221:
            var1['isFetching'] = var11;
            var1['isFetchingCategories'] = var10;
            var1['isFetchingPurchases'] = var9;
            var1['isClaiming'] = var8;
            var1['categories'] = var7;
            var7 = var2.purchases;
            var1['purchases'] = var7;
            var1['fetchCategoriesError'] = var6;
            var1['fetchPurchasesError'] = var5;
            var1['claimError'] = var4;
            var1['refreshCategories'] = var3;
            var2 = var2.hasPreviouslyFetched;
            var1['hasPreviouslyFetched'] = var2;
            return var1;
        }
    };
    var _closure1_slot8 = var5;
    var1 = global;
    var11 = var1.Object;
    var10 = var11.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var6);
    var1 = 0;
    var6 = var8[var1];
    var1 = undefined;
    var6 = var9.bind(var1)(var6);
    var _closure1_slot3 = var6;
    var6 = 1;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var10 = var6.useEffect;
    var _closure1_slot4 = var10;
    var6 = var6.useRef;
    var _closure1_slot5 = var6;
    var6 = 2;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot6 = var6;
    var6 = 7;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/collectibles/hooks/useFetchCollectiblesCategoriesAndPurchases.tsx';
    var6 = var7.bind(var8)(var6);
    var3['default'] = var5;
    var3['useFetchPurchases'] = var4;
    var4 = function(arg1) {
        var4 = _closure1_slot7;
        var3 = undefined;
        var2 = true;
        var1 = arg1;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var3['useGetOrFetchPurchases'] = var4;
    var2 = function(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var1 = arg1;
            var3 = _closure1_slot8;
            var2 = {};
            var4 = null;
            if(!(var4 == var1)) { _fun0004_ip = 20; continue _fun0004 }
 18:
            var1 = {};
 20:
            var6 = var2;
            var5 = var1;
            var1 = copyDataProperties(var6, var5);
            var4 = true;
            var1 = 'stalePurchasesOK';
            var2[var1] = var4;
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
        }
    };
    var3['useGetOrFetchCollectiblesCategoriesAndPurchases'] = var2;
    return var1;
})();