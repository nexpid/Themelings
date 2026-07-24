// app/modules/premium_marketing/native/hooks/useBuyNitroMarketingLifecycleHooks.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportAll;
    var3 = exports;
    var6 = dependencyMap;
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
    var10 = 0;
    var4 = var6[var10];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.reset;
    var _closure1_slot4 = var7;
    var4 = var4.usePremiumPlanPurchasedStore;
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ContentDismissActionType;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var11 = 4;
    var12 = var6[var11];
    var11 = metroImportDefault;
    var11 = var11.bind(var1)(var12);
    var11 = var11.colors;
    var11 = var11.MOBILE_ACTIONSHEET_BACKGROUND;
    var9['backgroundColor'] = var11;
    var9['borderTopWidth'] = var10;
    var4['navigator'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot7 = var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium_marketing/native/hooks/useBuyNitroMarketingLifecycleHooks.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useBuyNitroMarketingLifecycleHooks(arg1, arg2) {
        var7 = arg1;
        var4 = arg2;
        var _closure2_slot0 = var7;
        var _closure2_slot1 = var4;
        var3 = _closure1_slot7;
        var1 = undefined;
        var3 = var3.bind(var1)();
        var _closure2_slot2 = var3;
        var6 = function useAutoDismissMarketingMomentBadge(arg1) {
            var7 = arg1;
            var _closure3_slot0 = var7;
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 5;
            var4 = var9[var1];
            var1 = undefined;
            var6 = var8.bind(var1)(var4);
            var5 = var6.usePromotionMarketingComponent;
            var4 = 6;
            var4 = var9[var4];
            var4 = var8.bind(var1)(var4);
            var4 = var4.MarketingComponentType;
            var4 = var4.PREMIUM_TAB;
            var6 = var5.bind(var6)(var4);
            var _closure3_slot1 = var6;
            var5 = _closure1_slot3;
            var4 = var5.useEffect;
            var3 = new Array(2);
            var3[0] = var7;
            var3[1] = var6;
            var2 = function() {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    var2 = _closure3_slot0;
                    if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var4 = _closure3_slot1;
                    var3 = null;
                    var2 = var3 != var4;
case 2:
                    if(!var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                    var3 = _closure3_slot1;
                    var3 = var3.properties;
                    var3 = var3.properties;
                    var4 = var3.oneofKind;
                    var3 = 'premiumTab';
                    var2 = var3 === var4;
case 4:
                    if(!var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                    var5 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var4 = 7;
                    var4 = var8[var4];
                    var7 = undefined;
                    var6 = var5.bind(var7)(var4);
                    var5 = var6.UNSAFE_isSnowflakeBoundDismissibleContentDismissed;
                    var4 = _closure1_slot0;
                    var3 = 8;
                    var3 = var8[var3];
                    var3 = var4.bind(var7)(var3);
                    var3 = var3.DismissibleContent;
                    var4 = var3.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE;
                    var3 = _closure3_slot1;
                    var3 = var3.promotionId;
                    var3 = var5.bind(var6)(var4, var3);
                    var3 = var3.isDismissed;
                    var2 = !var3;
case 6:
                    if(!var2) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                    var3 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var2 = 9;
                    var2 = var8[var2];
                    var7 = undefined;
                    var5 = var3.bind(var7)(var2);
                    var4 = var5.markSnowflakeBoundDismissibleContentAsDismissed;
                    var3 = _closure1_slot0;
                    var2 = 8;
                    var2 = var8[var2];
                    var2 = var3.bind(var7)(var2);
                    var2 = var2.DismissibleContent;
                    var3 = var2.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE;
                    var1 = _closure3_slot1;
                    var2 = var1.promotionId;
                    var1 = {};
                    var6 = _closure1_slot6;
                    var6 = var6.AUTO_DISMISS;
                    var1['dismissAction'] = var6;
                    var1 = var4.bind(var5)(var3, var2, var1);
case 8:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var4.bind(var5)(var2, var3);
            return var1;
        };
        var6 = var6.bind(var1)(var4);
        var5 = _closure1_slot3;
        var9 = var5.useEffect;
        var8 = function() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 10;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var2 = var1.BuyNitroPurchaseLock;
            var1 = var2.end;
            var1 = var1.bind(var2)();
            var1 = function() {
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 10;
                var5 = var4[var2];
                var1 = undefined;
                var5 = var3.bind(var1)(var5);
                var6 = var5.BuyNitroPurchaseLock;
                var5 = var6.end;
                var5 = var5.bind(var6)();
                var2 = var4[var2];
                var2 = var3.bind(var1)(var2);
                var4 = var2.BuyNitroPurchaseLock;
                var3 = var4.setInitialLoadComplete;
                var2 = false;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            return var1;
        };
        var6 = new Array(0);
        var6 = var9.bind(var5)(var8, var6);
        var8 = var5.useEffect;
        var6 = new Array(1);
        var6[0] = var4;
        var4 = function() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 10;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var4 = var2.BuyNitroPurchaseLock;
            var3 = var4.setInitialLoadComplete;
            var2 = _closure2_slot1;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var4 = var8.bind(var5)(var4, var6);
        var6 = var5.useLayoutEffect;
        var4 = new Array(2);
        var4[0] = var7;
        var3 = var3.navigator;
        var4[1] = var3;
        var3 = function() {
            var3 = _closure2_slot0;
            var2 = var3.setOptions;
            var1 = {};
            var5 = false;
            var1['headerShown'] = var5;
            var4 = _closure2_slot2;
            var4 = var4.navigator;
            var1['contentStyle'] = var4;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var3 = var6.bind(var5)(var3, var4);
        var4 = var5.useEffect;
        var3 = function() {
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure1_slot5;
                    var2 = var3.getState;
                    var2 = var2.bind(var3)();
                    var2 = var2.isPaymentSuccess;
                    if(var2) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                    var2 = _closure1_slot4;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
case 10:
                    var1 = undefined;
                    return var1;
                }
            };
            return var1;
        };
        var2 = new Array(0);
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var3['useBuyNitroMarketingLifecycleHooks'] = var2;
    return var1;
})();