// app/modules/collectibles/hooks/useFetchCollectiblesAndProfileEffects.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
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
    var2 = function useFetchCollectiblesAndProfileEffects(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = _closure1_slot1;
            var12 = _closure1_slot2;
            var5 = 2;
            var2 = var12[var5];
            var10 = undefined;
            var3 = var3.bind(var10)(var2);
            var2 = {};
            var4 = arg1;
            var2['location'] = var4;
            var2 = var3.bind(var10)(var2);
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
            if(var8) { _fun0001_ip = 171; continue _fun0001 }
 168:
            var8 = var10;
 171:
            var1['isFetching'] = var8;
            var8 = null;
            if(!(var8 != var9)) { _fun0001_ip = 185; continue _fun0001 }
 182:
            var7 = var9;
 185:
            if(!(var8 != var7)) { _fun0001_ip = 192; continue _fun0001 }
 189:
            var6 = var7;
 192:
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