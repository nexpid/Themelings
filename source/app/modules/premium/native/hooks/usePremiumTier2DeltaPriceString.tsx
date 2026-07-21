// app/modules/premium/native/hooks/usePremiumTier2DeltaPriceString.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function getViewerProductId(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var2 = var3;
            var1 = null;
            if(!(var1 != var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3: // try_start_0
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var3 = 5;
            var4 = var4[var3];
            var3 = undefined;
            var5 = var5.bind(var3)(var4);
            var4 = var5.getProductIdFromSubscription;
            var3 = var2;
            var2 = false;
            var2 = var4.bind(var5)(var3, var2);
case 4: // try_end0
            return var2;
case 5: // catch_target0
            CatchBlockStart(arg_register=1);
            return var1;
case 2:
            return var1;
        }
    };
    var _closure1_slot9 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.useNativeCheckoutStore;
    var _closure1_slot3 = var4;
    var4 = 2;
    var7 = var6[var4];
    var4 = metroImportDefault;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.PremiumTypes;
    var _closure1_slot5 = var7;
    var4 = var4.SubscriptionIntervalTypes;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.CurrencyCodes;
    var _closure1_slot7 = var4;
    var4 = {'priceString': null, 'failure': null};
    var _closure1_slot8 = var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/native/hooks/usePremiumTier2DeltaPriceString.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function usePremiumTier2DeltaPriceString(arg1, arg2, arg3, arg4) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var9 = arg1;
            var7 = arg2;
            var8 = arg3;
            var3 = _closure1_slot3;
            var4 = undefined;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.orderRequired;
                return var1;
            };
            var6 = var3.bind(var4)(var1);
            var1 = _closure1_slot9;
            var1 = var1.bind(var4)(var7);
            var _closure2_slot0 = var1;
            var3 = _closure1_slot0;
            var10 = _closure1_slot1;
            var1 = 11;
            var1 = var10[var1];
            var11 = var3.bind(var4)(var1);
            var10 = var11.useStateFromStores;
            var1 = _closure1_slot4;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var1 = null;
                    var3 = var1 != var3;
                    if(!var3) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                    var4 = _closure1_slot4;
                    var3 = var4.getProduct;
                    var2 = _closure2_slot0;
                    var1 = var3.bind(var4)(var2);
case 6:
                    return var1;
                }
            };
            var1 = var10.bind(var11)(var3, var1);
            var16 = false;
            var10 = arg4;
            var3 = false;
            if(!var10) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var3 = false;
            if(var6) { _fun0002_ip = 8; continue _fun0002 }
case 10:
            var10 = var9.premiumTier;
            var6 = _closure1_slot5;
            var6 = var6.TIER_2;
            var3 = false;
            if(!(var10 === var6)) { _fun0002_ip = 8; continue _fun0002 }
case 11:
            var10 = var9.interval;
            var6 = _closure1_slot6;
            var6 = var6.MONTH;
            var3 = false;
            if(!(var10 === var6)) { _fun0002_ip = 8; continue _fun0002 }
case 12:
            var10 = var9.numPremiumGuild;
            var6 = 1;
            var6 = var10 < var6;
            var3 = false;
            if(var6) { _fun0002_ip = 8; continue _fun0002 }
case 13:
            var6 = _closure1_slot9;
            var11 = var6.bind(var4)(var7);
            var6 = null;
            var10 = var6 != var11;
            var7 = null;
            if(!var10) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var12 = _closure1_slot0;
            var13 = _closure1_slot1;
            var10 = 6;
            var10 = var13[var10];
            var10 = var12.bind(var4)(var10);
            var10 = var10.AppStorePremiumProductIdsToPremiumBundledItems;
            var7 = var10[var11];
case 14:
            var6 = var6 != var7;
            if(!var6) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var11 = var7.basePlanId;
            var10 = var9.basePlanId;
            var6 = var11 === var10;
case 16:
            if(!var6) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var10 = var7.numPremiumGuild;
            var7 = 0;
            var6 = var7 === var10;
case 18:
            var3 = var6;
case 8:
            if(var3) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            var3 = _closure1_slot8;
            _fun0002_ip = 22; continue _fun0002;
case 20:
            var7 = null;
            if(!(var7 != var8)) { _fun0002_ip = 23; continue _fun0002 }
case 24:
            if(!(var7 != var1)) { _fun0002_ip = 23; continue _fun0002 }
case 25:
            var10 = _closure1_slot0;
            var6 = _closure1_slot1;
            var12 = 7;
            var6 = var6[var12];
            var10 = var10.bind(var4)(var6);
            var6 = var10.getPlatformName;
            var10 = var6.bind(var10)();
            var11 = var8.currencyCode;
            var6 = var1.currencyCode;
            if(!(var11 === var6)) { _fun0002_ip = 26; continue _fun0002 }
case 27:
            var6 = var8.price;
            var1 = var1.price;
            var13 = var6 - var1;
            var1 = 0;
            if(!(var13 > var1)) { _fun0002_ip = 28; continue _fun0002 }
case 29:
            var1 = var8.price;
            if(!(!(var13 < var1))) { _fun0002_ip = 30; continue _fun0002 }
case 28:
            var1 = {};
            var1['priceString'] = var7;
            var6 = {};
            var11 = 'delta_out_of_range';
            var6['kind'] = var11;
            var6['platform'] = var10;
            var11 = var9.productId;
            var6['productId'] = var11;
            var11 = var8.currencyCode;
            var6['currencyCode'] = var11;
            var1['failure'] = var6;
            _fun0002_ip = 31; continue _fun0002;
case 30:
            var11 = _closure1_slot0;
            var6 = _closure1_slot1;
            var6 = var6[var12];
            var11 = var11.bind(var4)(var6);
            var6 = var11.isAndroid;
            var6 = var6.bind(var11)();
            var15 = var13;
            if(!var6) { _fun0002_ip = 32; continue _fun0002 }
case 33:
            var11 = _closure1_slot0;
            var12 = _closure1_slot1;
            var6 = 8;
            var6 = var12[var6];
            var12 = var11.bind(var4)(var6);
            var11 = var12.convertToMajorCurrencyUnits;
            var6 = _closure1_slot7;
            var6 = var6.USD;
            var15 = var11.bind(var12)(var13, var6);
case 32:
            var6 = {};
            var12 = _closure1_slot0;
            var13 = _closure1_slot1;
            var11 = 9;
            var11 = var13[var11];
            var14 = var12.bind(var4)(var11);
            var13 = var14.formatPrice;
            var12 = var8.currencyCode;
            var11 = {};
            var11['convertToMajorUnits'] = var16;
            var11 = var13.bind(var14)(var15, var12, var11);
            var6['priceString'] = var11;
            var6['failure'] = var7;
            var1 = var6;
case 31:
            _fun0002_ip = 34; continue _fun0002;
case 26:
            var6 = {};
            var6['priceString'] = var7;
            var7 = {};
            var11 = 'currency_mismatch';
            var7['kind'] = var11;
            var7['platform'] = var10;
            var9 = var9.productId;
            var7['productId'] = var9;
            var8 = var8.currencyCode;
            var7['currencyCode'] = var8;
            var6['failure'] = var7;
            var1 = var6;
            _fun0002_ip = 34; continue _fun0002;
case 23:
            var1 = _closure1_slot8;
case 34:
            var3 = var1;
case 22:
            var1 = var3.priceString;
            var3 = var3.failure;
            var2 = function useReportDeltaFailure(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var4 = arg1;
                    var6 = null;
                    var5 = var6 == var4;
                    var1 = undefined;
                    var3 = undefined;
                    if(var5) { _fun0004_ip = 35; continue _fun0004 }
case 36:
                    var3 = var4.kind;
case 35:
                    var5 = var6 != var3;
                    var9 = null;
                    if(!var5) { _fun0004_ip = 37; continue _fun0004 }
case 38:
                    var9 = var3;
case 37:
                    var _closure3_slot0 = var9;
                    var5 = var6 == var4;
                    var3 = undefined;
                    if(var5) { _fun0004_ip = 4; continue _fun0004 }
case 39:
                    var3 = var4.platform;
case 4:
                    var5 = var6 != var3;
                    var8 = null;
                    if(!var5) { _fun0004_ip = 40; continue _fun0004 }
case 41:
                    var8 = var3;
case 40:
                    var _closure3_slot1 = var8;
                    var5 = var6 == var4;
                    var3 = undefined;
                    if(var5) { _fun0004_ip = 42; continue _fun0004 }
case 43:
                    var3 = var4.currencyCode;
case 42:
                    var5 = var6 != var3;
                    var7 = null;
                    if(!var5) { _fun0004_ip = 44; continue _fun0004 }
case 45:
                    var7 = var3;
case 44:
                    var _closure3_slot2 = var7;
                    var5 = var6 == var4;
                    var3 = undefined;
                    if(var5) { _fun0004_ip = 10; continue _fun0004 }
case 46:
                    var3 = var4.productId;
case 10:
                    var4 = var6 != var3;
                    var6 = null;
                    if(!var4) { _fun0004_ip = 47; continue _fun0004 }
case 48:
                    var6 = var3;
case 47:
                    var _closure3_slot3 = var6;
                    var5 = _closure1_slot2;
                    var4 = var5.useEffect;
                    var3 = new Array(4);
                    var3[0] = var9;
                    var3[1] = var8;
                    var3[2] = var7;
                    var3[3] = var6;
                    var2 = function() {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                            var1 = _closure3_slot0;
                            var9 = null;
                            if(!(var9 != var1)) { _fun0005_ip = 49; continue _fun0005 }
case 7:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot1;
                            var1 = 10;
                            var2 = var2[var1];
                            var1 = undefined;
                            var4 = var3.bind(var1)(var2);
                            var3 = var4.captureBillingException;
                            var1 = global;
                            var5 = var1.Error;
                            var6 = _closure3_slot0;
                            var1 = var1.HermesInternal;
                            var2 = var1.concat;
                            var1 = 'delta_price_integrity_';
                            var12 = var2.bind(var1)(var6);
                            var2 = var5.prototype;
                            var2 = Object.create(var2, {constructor: {value: var5}});
                            var13 = var2;
                            var1 = new var13[var5](var12, var11);
                            var2 = var1 instanceof Object ? var1 : var2;
                            var1 = {};
                            var5 = {};
                            var6 = 'usePremiumTier2DeltaPriceString';
                            var5['source'] = var6;
                            var6 = _closure3_slot0;
                            var5['delta_failure_kind'] = var6;
                            var6 = _closure3_slot1;
                            var10 = var9 != var6;
                            var6 = 'unknown';
                            var8 = var6;
                            if(!var10) { _fun0005_ip = 50; continue _fun0005 }
case 51:
                            var8 = _closure3_slot1;
case 50:
                            var5['delta_platform'] = var8;
                            var8 = _closure3_slot2;
                            var10 = var9 != var8;
                            var8 = var6;
                            if(!var10) { _fun0005_ip = 52; continue _fun0005 }
case 53:
                            var8 = _closure3_slot2;
case 52:
                            var5['delta_currency_code'] = var8;
                            var8 = _closure3_slot3;
                            var8 = var9 != var8;
                            if(!var8) { _fun0005_ip = 54; continue _fun0005 }
case 55:
                            var6 = _closure3_slot3;
case 54:
                            var5['delta_product_id'] = var6;
                            var1['tags'] = var5;
                            var1 = var3.bind(var4)(var2, var1);
case 49:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var2 = var4.bind(var5)(var2, var3);
                    return var1;
                }
            };
            var2 = var2.bind(var4)(var3);
            return var1;
        }
    };
    var3['usePremiumTier2DeltaPriceString'] = var2;
    return var1;
})();