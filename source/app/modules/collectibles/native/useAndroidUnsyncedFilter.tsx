// app/modules/collectibles/native/useAndroidUnsyncedFilter.tsx
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
    var4 = var5.bind(var1)(var4);
    var8 = var4.useCallback;
    var _closure1_slot2 = var8;
    var4 = var4.useMemo;
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/native/useAndroidUnsyncedFilter.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function() {
        var6 = _closure1_slot3;
        var4 = undefined;
        var5 = function() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 3;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var1 = var2.isIOS;
            var1 = var1.bind(var2)();
            return var1;
        };
        var3 = new Array(0);
        var7 = var6.bind(var4)(var5, var3);
        var _closure2_slot0 = var7;
        var5 = _closure1_slot0;
        var9 = _closure1_slot1;
        var3 = 4;
        var6 = var9[var3];
        var11 = var5.bind(var4)(var6);
        var10 = var11.useStateFromStores;
        var6 = _closure1_slot5;
        var8 = new Array(1);
        var8[0] = var6;
        var6 = function() {
            var2 = _closure1_slot5;
            var1 = var2.isFetchingGoogleSkus;
            var1 = var1.bind(var2)();
            return var1;
        };
        var8 = var10.bind(var11)(var8, var6);
        var _closure2_slot1 = var8;
        var3 = var9[var3];
        var11 = var5.bind(var4)(var3);
        var10 = var11.useStateFromStores;
        var3 = _closure1_slot4;
        var6 = new Array(1);
        var6[0] = var3;
        var3 = function() {
            var3 = _closure1_slot4;
            var2 = var3.get;
            var1 = 'bypass_google_sku_sync';
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var6 = var10.bind(var11)(var6, var3);
        var _closure2_slot2 = var6;
        var3 = 5;
        var3 = var9[var3];
        var9 = var5.bind(var4)(var3);
        var5 = var9.useAndroidShopLazyLoadPriceEnabled;
        var3 = 'ShopCategory';
        var5 = var5.bind(var9)(var3);
        var _closure2_slot3 = var5;
        var3 = _closure1_slot2;
        var2 = new Array(4);
        var2[0] = var8;
        var2[1] = var7;
        var2[2] = var6;
        var2[3] = var5;
        var1 = function(arg1) {
            var3 = arg1;
            var2 = var3.filter;
            var1 = function(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    var1 = _closure2_slot0;
                    if(var1) { _fun0001_ip = 14; continue _fun0001 }
 10:
                    var1 = _closure2_slot2;
 14:
                    if(var1) { _fun0001_ip = 31; continue _fun0001 }
 17:
                    var2 = _closure2_slot3;
                    if(!var2) { _fun0001_ip = 28; continue _fun0001 }
 24:
                    var2 = _closure2_slot1;
 28:
                    var1 = var2;
 31:
                    if(var1) { _fun0001_ip = 73; continue _fun0001 }
 34:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 6;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.isGPlaySynced;
                    var2 = arg1;
                    var1 = var3.bind(var4)(var2);
 73:
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useAndroidUnsyncedFilter'] = var2;
    return var1;
})();