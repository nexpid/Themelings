// app/modules/collectibles/hooks/useBadBundleFilter.tsx
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.useCallback;
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
    var4 = 'modules/collectibles/hooks/useBadBundleFilter.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var3 = 3;
            var3 = var4[var3];
            var4 = undefined;
            var7 = var5.bind(var4)(var3);
            var6 = var7.useStateFromStores;
            var3 = _closure1_slot4;
            var5 = new Array(1);
            var5[0] = var3;
            var3 = function() {
                var2 = _closure1_slot4;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var7 = var6.bind(var7)(var5, var3);
            var3 = null;
            var5 = var3 != var7;
            if(!var5) { _fun0001_ip = 97; continue _fun0001 }
 66:
            var6 = _closure1_slot1;
            var8 = _closure1_slot2;
            var3 = 4;
            var3 = var8[var3];
            var6 = var6.bind(var4)(var3);
            var3 = var6.canUseCollectibles;
            var5 = var3.bind(var6)(var7);
 97:
            var _closure2_slot0 = var5;
            var3 = _closure1_slot3;
            var2 = new Array(1);
            var2[0] = var5;
            var1 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var4 = arg1;
                    var2 = null;
                    var1 = var4;
                    if(!(var2 != var4)) { _fun0002_ip = 45; continue _fun0002 }
 12:
                    var3 = var4.length;
                    var2 = 0;
                    var1 = var4;
                    if(!(var2 !== var3)) { _fun0002_ip = 45; continue _fun0002 }
 26:
                    var3 = var4.filter;
                    var2 = function(arg1) {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                            var4 = arg1;
                            var8 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var2 = 5;
                            var2 = var5[var2];
                            var6 = undefined;
                            var9 = var8.bind(var6)(var2);
                            var7 = var9.getProductPurchaseState;
                            var2 = _closure1_slot5;
                            var2 = var7.bind(var9)(var2, var4);
                            var2 = var2.isPurchased;
                            var7 = 6;
                            var5 = var5[var7];
                            var8 = var8.bind(var6)(var5);
                            var5 = var8.isBundleProduct;
                            var5 = var5.bind(var8)(var4);
                            if(!var5) { _fun0003_ip = 255; continue _fun0003 }
 81:
                            var8 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var5 = var5[var7];
                            var8 = var8.bind(var6)(var5);
                            var5 = var8.isFreeCollectiblesProduct;
                            var5 = var5.bind(var8)(var4);
                            if(var5) { _fun0003_ip = 255; continue _fun0003 }
 115:
                            if(var2) { _fun0003_ip = 255; continue _fun0003 }
 121:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var5 = var1[var7];
                            var9 = var2.bind(var6)(var5);
                            var8 = var9.getDefaultPriceSetAssignmentPurchaseType;
                            var5 = _closure2_slot0;
                            var5 = var8.bind(var9)(var5);
                            var _closure4_slot0 = var5;
                            var1 = var1[var7];
                            var2 = var2.bind(var6)(var1);
                            var1 = var2.extractPriceByPurchaseTypes;
                            var1 = var1.bind(var2)(var4, var5);
                            var5 = null;
                            if(!(var5 != var1)) { _fun0003_ip = 251; continue _fun0003 }
 187:
                            var2 = var1.amount;
                            var6 = 0;
                            if(!(var6 !== var2)) { _fun0003_ip = 251; continue _fun0003 }
 199:
                            var2 = var4.bundledProducts;
                            var5 = var5 != var2;
                            var2 = 0;
                            if(!var5) { _fun0003_ip = 239; continue _fun0003 }
 214:
                            var5 = var4.bundledProducts;
                            var4 = var5.reduce;
                            var3 = function(arg1, arg2) {
                                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                                    var3 = _closure1_slot0;
                                    var2 = _closure1_slot2;
                                    var1 = 6;
                                    var2 = var2[var1];
                                    var1 = undefined;
                                    var5 = var3.bind(var1)(var2);
                                    var4 = var5.extractPriceByPurchaseTypes;
                                    var3 = _closure4_slot0;
                                    var2 = arg2;
                                    var3 = var4.bind(var5)(var2, var3);
                                    var2 = null;
                                    var4 = var2 == var3;
                                    if(var4) { _fun0004_ip = 62; continue _fun0004 }
 56:
                                    var1 = var3.amount;
 62:
                                    var3 = var2 != var1;
                                    var2 = 0;
                                    if(!var3) { _fun0004_ip = 74; continue _fun0004 }
 71:
                                    var2 = var1;
 74:
                                    var1 = arg1;
                                    var1 = var1 + var2;
                                    return var1;
                                }
                            };
                            var2 = var4.bind(var5)(var3, var6);
 239:
                            var1 = var1.amount;
                            var1 = var1 < var2;
                            return var1;
 251:
                            var1 = true;
                            return var1;
 255:
                            var1 = true;
                            return var1;
                        }
                    };
                    var1 = var3.bind(var4)(var2);
 45:
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        }
    };
    var3['useBadBundleFilter'] = var2;
    return var1;
})();