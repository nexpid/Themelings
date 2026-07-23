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
            var3 = 4;
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
    var _closure1_slot8 = var1;
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
    var4 = {'priceString': null, 'failure': null};
    var _closure1_slot7 = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/native/hooks/usePremiumTier2DeltaPriceString.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function usePremiumTier2DeltaPriceString(arg1, arg2, arg3, arg4) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var5 = arg1;
            var10 = arg2;
            var11 = arg3;
            var3 = _closure1_slot3;
            var4 = undefined;
            var1 = function(arg1) {
                var3 = arg1;
                var1 = {};
                var2 = var3.orderRequired;
                var1['orderRequired'] = var2;
                var2 = var3.getCheckoutContextRecord;
                var2 = var2.bind(var3)();
                var1['checkoutContext'] = var2;
                return var1;
            };
            var1 = var3.bind(var4)(var1);
            var3 = var1.orderRequired;
            var9 = var1.checkoutContext;
            var1 = _closure1_slot8;
            var1 = var1.bind(var4)(var10);
            var _closure2_slot0 = var1;
            var8 = _closure1_slot0;
            var7 = _closure1_slot1;
            var1 = 9;
            var1 = var7[var1];
            var14 = var8.bind(var4)(var1);
            var13 = var14.useStateFromStores;
            var1 = _closure1_slot4;
            var12 = new Array(1);
            var12[0] = var1;
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
            var1 = var13.bind(var14)(var12, var1);
            var15 = 6;
            var7 = var7[var15];
            var8 = var8.bind(var4)(var7);
            var7 = var8.isIOS;
            var7 = var7.bind(var8)();
            if(!var7) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var7 = var3;
case 8:
            var14 = false;
            var8 = arg4;
            var3 = false;
            if(!var8) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var12 = var5.premiumTier;
            var8 = _closure1_slot5;
            var8 = var8.TIER_2;
            var3 = false;
            if(!(var12 === var8)) { _fun0002_ip = 10; continue _fun0002 }
case 12:
            var12 = var5.interval;
            var8 = _closure1_slot6;
            var8 = var8.MONTH;
            var3 = false;
            if(!(var12 === var8)) { _fun0002_ip = 10; continue _fun0002 }
case 13:
            var12 = var5.numPremiumGuild;
            var8 = 1;
            var8 = var12 < var8;
            var3 = false;
            if(var8) { _fun0002_ip = 10; continue _fun0002 }
case 14:
            var8 = _closure1_slot8;
            var13 = var8.bind(var4)(var10);
            var8 = null;
            var12 = var8 != var13;
            var10 = null;
            if(!var12) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var16 = _closure1_slot0;
            var17 = _closure1_slot1;
            var12 = 5;
            var12 = var17[var12];
            var12 = var16.bind(var4)(var12);
            var12 = var12.AppStorePremiumProductIdsToPremiumBundledItems;
            var10 = var12[var13];
case 15:
            var8 = var8 != var10;
            if(!var8) { _fun0002_ip = 17; continue _fun0002 }
case 18:
            var13 = var10.basePlanId;
            var12 = var5.basePlanId;
            var8 = var13 === var12;
case 17:
            if(!var8) { _fun0002_ip = 19; continue _fun0002 }
case 20:
            var12 = var10.numPremiumGuild;
            var10 = 0;
            var8 = var10 === var12;
case 19:
            var3 = var8;
case 10:
            if(var3) { _fun0002_ip = 21; continue _fun0002 }
case 22:
            var3 = _closure1_slot7;
            _fun0002_ip = 23; continue _fun0002;
case 21:
            var8 = null;
            if(var7) { _fun0002_ip = 24; continue _fun0002 }
case 25:
            if(!(var8 != var11)) { _fun0002_ip = 26; continue _fun0002 }
case 27:
            if(!(var8 != var1)) { _fun0002_ip = 26; continue _fun0002 }
case 28:
            var10 = _closure1_slot0;
            var7 = _closure1_slot1;
            var7 = var7[var15];
            var10 = var10.bind(var4)(var7);
            var7 = var10.getPlatformName;
            var12 = var7.bind(var10)();
            var10 = var11.currencyCode;
            var7 = var1.currencyCode;
            if(!(var10 === var7)) { _fun0002_ip = 29; continue _fun0002 }
case 30:
            var7 = var11.price;
            var1 = var1.price;
            var10 = var7 - var1;
            var1 = 0;
            if(!(var10 > var1)) { _fun0002_ip = 31; continue _fun0002 }
case 32:
            var1 = var11.price;
            if(!(!(var10 < var1))) { _fun0002_ip = 33; continue _fun0002 }
case 31:
            var1 = {};
            var1['priceString'] = var8;
            var7 = {};
            var13 = 'delta_out_of_range';
            var7['kind'] = var13;
            var7['platform'] = var12;
            var13 = var5.productId;
            var7['productId'] = var13;
            var13 = var11.currencyCode;
            var7['currencyCode'] = var13;
            var1['failure'] = var7;
            _fun0002_ip = 34; continue _fun0002;
case 33:
            var13 = _closure1_slot0;
            var7 = _closure1_slot1;
            var7 = var7[var15];
            var13 = var13.bind(var4)(var7);
            var7 = var13.isAndroid;
            var7 = var7.bind(var13)();
            var17 = var10;
            if(!var7) { _fun0002_ip = 35; continue _fun0002 }
case 36:
            var7 = 100;
            var17 = var10 / var7;
case 35:
            var7 = {};
            var13 = _closure1_slot0;
            var15 = _closure1_slot1;
            var10 = 7;
            var10 = var15[var10];
            var16 = var13.bind(var4)(var10);
            var15 = var16.formatPrice;
            var13 = var11.currencyCode;
            var10 = {};
            var10['convertToMajorUnits'] = var14;
            var10 = var15.bind(var16)(var17, var13, var10);
            var7['priceString'] = var10;
            var7['failure'] = var8;
            var1 = var7;
case 34:
            _fun0002_ip = 37; continue _fun0002;
case 29:
            var7 = {};
            var7['priceString'] = var8;
            var10 = {};
            var13 = 'currency_mismatch';
            var10['kind'] = var13;
            var10['platform'] = var12;
            var12 = var5.productId;
            var10['productId'] = var12;
            var11 = var11.currencyCode;
            var10['currencyCode'] = var11;
            var7['failure'] = var10;
            var1 = var7;
            _fun0002_ip = 37; continue _fun0002;
case 26:
            var1 = _closure1_slot7;
case 37:
            _fun0002_ip = 38; continue _fun0002;
case 24:
            if(!(var8 != var9)) { _fun0002_ip = 39; continue _fun0002 }
case 40:
            var7 = var9.getAvailablePlanForItems;
            var11 = _closure1_slot0;
            var12 = _closure1_slot1;
            var10 = 4;
            var10 = var12[var10];
            var11 = var11.bind(var4)(var10);
            var10 = var11.getSubscriptionItemsForProduct;
            var5 = var5.productId;
            var5 = var10.bind(var11)(var5);
            var7 = var7.bind(var9)(var5);
            if(!(var8 != var7)) { _fun0002_ip = 41; continue _fun0002 }
case 42:
            var5 = var7.getAddOnPrice;
            var9 = var5.bind(var7)();
            if(!(var8 != var9)) { _fun0002_ip = 43; continue _fun0002 }
case 44:
            var7 = var9.majorUnits;
            var5 = 0;
            if(!(!(var7 > var5))) { _fun0002_ip = 45; continue _fun0002 }
case 43:
            var5 = _closure1_slot7;
            _fun0002_ip = 46; continue _fun0002;
case 45:
            var7 = {};
            var11 = _closure1_slot0;
            var12 = _closure1_slot1;
            var10 = 7;
            var10 = var12[var10];
            var13 = var11.bind(var4)(var10);
            var12 = var13.formatPrice;
            var11 = var9.majorUnits;
            var10 = var9.currency;
            var9 = {};
            var9['convertToMajorUnits'] = var14;
            var9 = var12.bind(var13)(var11, var10, var9);
            var7['priceString'] = var9;
            var7['failure'] = var8;
            var5 = var7;
case 46:
            _fun0002_ip = 47; continue _fun0002;
case 41:
            var5 = _closure1_slot7;
            _fun0002_ip = 47; continue _fun0002;
case 39:
            var5 = _closure1_slot7;
case 47:
            var1 = var5;
case 38:
            var3 = var1;
case 23:
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
                    if(var5) { _fun0004_ip = 48; continue _fun0004 }
case 49:
                    var3 = var4.kind;
case 48:
                    var5 = var6 != var3;
                    var9 = null;
                    if(!var5) { _fun0004_ip = 50; continue _fun0004 }
case 51:
                    var9 = var3;
case 50:
                    var _closure3_slot0 = var9;
                    var5 = var6 == var4;
                    var3 = undefined;
                    if(var5) { _fun0004_ip = 4; continue _fun0004 }
case 52:
                    var3 = var4.platform;
case 4:
                    var5 = var6 != var3;
                    var8 = null;
                    if(!var5) { _fun0004_ip = 53; continue _fun0004 }
case 54:
                    var8 = var3;
case 53:
                    var _closure3_slot1 = var8;
                    var5 = var6 == var4;
                    var3 = undefined;
                    if(var5) { _fun0004_ip = 55; continue _fun0004 }
case 56:
                    var3 = var4.currencyCode;
case 55:
                    var5 = var6 != var3;
                    var7 = null;
                    if(!var5) { _fun0004_ip = 57; continue _fun0004 }
case 58:
                    var7 = var3;
case 57:
                    var _closure3_slot2 = var7;
                    var5 = var6 == var4;
                    var3 = undefined;
                    if(var5) { _fun0004_ip = 59; continue _fun0004 }
case 60:
                    var3 = var4.productId;
case 59:
                    var4 = var6 != var3;
                    var6 = null;
                    if(!var4) { _fun0004_ip = 61; continue _fun0004 }
case 62:
                    var6 = var3;
case 61:
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
                            if(!(var9 != var1)) { _fun0005_ip = 63; continue _fun0005 }
case 7:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot1;
                            var1 = 8;
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
                            if(!var10) { _fun0005_ip = 64; continue _fun0005 }
case 65:
                            var8 = _closure3_slot1;
case 64:
                            var5['delta_platform'] = var8;
                            var8 = _closure3_slot2;
                            var10 = var9 != var8;
                            var8 = var6;
                            if(!var10) { _fun0005_ip = 66; continue _fun0005 }
case 67:
                            var8 = _closure3_slot2;
case 66:
                            var5['delta_currency_code'] = var8;
                            var8 = _closure3_slot3;
                            var8 = var9 != var8;
                            if(!var8) { _fun0005_ip = 68; continue _fun0005 }
case 69:
                            var6 = _closure3_slot3;
case 68:
                            var5['delta_product_id'] = var6;
                            var1['tags'] = var5;
                            var1 = var3.bind(var4)(var2, var1);
case 63:
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