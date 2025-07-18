// app/modules/collectibles/hooks/useMaybeFetchCollectiblesCategories.mobile.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var4 = native7;
    var _closure1_slot0 = var5;
    var1 = native3;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var4;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = 3;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/hooks/useMaybeFetchCollectiblesCategories.mobile.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useMaybeFetchCollectiblesCategories(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var6 = null;
            var3 = var6 == var1;
            var2 = undefined;
            var8 = undefined;
            if(var3) { _fun0001_ip = 22; continue _fun0001 }
 16:
            var8 = var1.paymentGateway;
 22:
            var7 = _closure1_slot1;
            var5 = _closure1_slot2;
            var4 = 0;
            var4 = var5[var4];
            var7 = var7.bind(var2)(var4);
            var4 = 'shop_include_unpublished';
            var9 = var7.bind(var2)(var4);
            var4 = _closure1_slot0;
            var3 = 1;
            var3 = var5[var3];
            var10 = var4.bind(var2)(var3);
            var7 = var10.useCollectiblesMobileBundle;
            var3 = 'useMaybeFetchCollectiblesCategories';
            var7 = var7.bind(var10)(var3);
            var3 = 2;
            var3 = var5[var3];
            var5 = var4.bind(var2)(var3);
            var4 = var5.useMaybeFetchCollectiblesCategoriesShared;
            var3 = {};
            var3['includeUnpublished'] = var9;
            var3['paymentGateway'] = var8;
            var9 = var6 == var1;
            var8 = undefined;
            if(var9) { _fun0001_ip = 133; continue _fun0001 }
 127:
            var8 = var1.countryCode;
 133:
            var3['countryCode'] = var8;
            var3['includeBundles'] = var7;
            var7 = true;
            var3['includeNameplatesOnMobile'] = var7;
            var8 = var6 == var1;
            var7 = undefined;
            if(var8) { _fun0001_ip = 165; continue _fun0001 }
 159:
            var7 = var1.logPerf;
 165:
            var3['logPerf'] = var7;
            var6 = var6 == var1;
            var2 = undefined;
            if(var6) { _fun0001_ip = 185; continue _fun0001 }
 179:
            var2 = var1.noOp;
 185:
            var1 = arg2;
            var1 = var4.bind(var5)(var3, var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();