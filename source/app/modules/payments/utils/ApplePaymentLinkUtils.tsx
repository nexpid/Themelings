// app/modules/payments/utils/ApplePaymentLinkUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var9 = require;
    var3 = exports;
    var10 = dependencyMap;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var10;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var4);
    var1 = 0;
    var4 = var10[var1];
    var1 = undefined;
    var4 = var9.bind(var1)(var4);
    var5 = var4.Routes;
    var _closure1_slot2 = var5;
    var4 = var4.LinkingTypes;
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var10[var4];
    var4 = var9.bind(var1)(var4);
    var4 = var4.PREMIUM_TIER_2_PLANS;
    var _closure1_slot4 = var4;
    var4 = function isInIOSMobileWeb() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = _closure1_slot0;
            var1 = _closure1_slot1;
            var5 = 2;
            var1 = var1[var5];
            var4 = undefined;
            var1 = var3.bind(var4)(var1);
            var1 = var1.isMobile;
            if(!var1) { _fun0001_ip = 57; continue _fun0001 }
 34:
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var5];
            var2 = var3.bind(var4)(var2);
            var1 = var2.isIOSWeb;
 57:
            return var1;
        }
    };
    var _closure1_slot5 = var4;
    var7 = function isMobileApplePaymentLinksEnabled(arg1) {
        var1 = arg1;
        var4 = var1.location;
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var3 = var1.MobileApplePaymentLinkExperiment;
        var2 = var3.getConfig;
        var1 = {};
        var1['location'] = var4;
        var1 = var2.bind(var3)(var1);
        var1 = var1.enabled;
        return var1;
    };
    var _closure1_slot6 = var7;
    var6 = function useIsInMobileWebApplePaymentLinkFlow(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var3 = var1.location;
            var4 = _closure1_slot8;
            var2 = {};
            var2['location'] = var3;
            var3 = undefined;
            var2 = var4.bind(var3)(var2);
            var1 = _closure1_slot5;
            var1 = var1.bind(var3)();
            if(!var1) { _fun0002_ip = 42; continue _fun0002 }
 39:
            var1 = var2;
 42:
            return var1;
        }
    };
    var _closure1_slot7 = var6;
    var5 = function useIsMobileApplePaymentLinksEnabled(arg1) {
        var1 = arg1;
        var4 = var1.location;
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var3 = var1.MobileApplePaymentLinkExperiment;
        var2 = var3.useConfig;
        var1 = {};
        var1['location'] = var4;
        var1 = var2.bind(var3)(var1);
        var1 = var1.enabled;
        return var1;
    };
    var _closure1_slot8 = var5;
    var4 = function checkForAPLCustomCheckoutFlow(arg1, arg2, arg3) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var3 = arg1;
            var5 = arg2;
            var4 = var5.startsWith;
            var1 = _closure1_slot2;
            var1 = var1.BILLING_MANAGE_SUBSCRIPTION;
            var1 = var4.bind(var5)(var1);
            var1 = !var1;
            if(!var1) { _fun0003_ip = 62; continue _fun0003 }
 36:
            var2 = _closure1_slot3;
            var4 = var2.APPLE_PAYMENT_LINK;
            var2 = arg3;
            var2 = var2 === var4;
            if(!var2) { _fun0003_ip = 59; continue _fun0003 }
 56:
            var2 = var3;
 59:
            var1 = var2;
 62:
            return var1;
        }
    };
    var _closure1_slot9 = var4;
    var4 = function getIsInApplePaymentLinkCustomCheckoutFlow(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var6 = arguments[1];
            var1 = arg1;
            var9 = var1.location;
            var5 = undefined;
            if(!(var6 === var5)) { _fun0004_ip = 19; continue _fun0004 }
 17:
            var6 = false;
 19:
            var2 = global;
            var1 = var2.window;
            var1 = var1.location;
            var4 = var1.pathname;
            var7 = _closure1_slot0;
            var8 = _closure1_slot1;
            var3 = 5;
            var3 = var8[var3];
            var7 = var7.bind(var5)(var3);
            var3 = var7.parse;
            var2 = var2.window;
            var2 = var2.location;
            var2 = var2.search;
            var2 = var3.bind(var7)(var2);
            var3 = var2.deep_link_type;
            var7 = var4.startsWith;
            var2 = _closure1_slot2;
            var2 = var2.BILLING_MANAGE_SUBSCRIPTION;
            var2 = var7.bind(var4)(var2);
            if(var2) { _fun0004_ip = 164; continue _fun0004 }
 119:
            var2 = _closure1_slot5;
            var2 = var2.bind(var5)();
            if(!var2) { _fun0004_ip = 151; continue _fun0004 }
 130:
            if(var6) { _fun0004_ip = 148; continue _fun0004 }
 133:
            var8 = _closure1_slot6;
            var7 = {};
            var7['location'] = var9;
            var6 = var8.bind(var5)(var7);
 148:
            var2 = var6;
 151:
            var1 = _closure1_slot9;
            var1 = var1.bind(var5)(var2, var4, var3);
            return var1;
 164:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot10 = var4;
    var8 = 6;
    var8 = var10[var8];
    var10 = var9.bind(var1)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'modules/payments/utils/ApplePaymentLinkUtils.tsx';
    var8 = var9.bind(var10)(var8);
    var3['isMobileApplePaymentLinksEnabled'] = var7;
    var3['useIsInMobileWebApplePaymentLinkFlow'] = var6;
    var6 = function(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var1 = arg1;
            var5 = var1.location;
            var1 = _closure1_slot5;
            var4 = undefined;
            var1 = var1.bind(var4)();
            if(!var1) { _fun0005_ip = 39; continue _fun0005 }
 24:
            var3 = _closure1_slot6;
            var2 = {};
            var2['location'] = var5;
            var1 = var3.bind(var4)(var2);
 39:
            return var1;
        }
    };
    var3['getIsInMobileWebApplePaymentLinkFlow'] = var6;
    var6 = function(arg1) {
        var1 = arg1;
        var4 = var1.location;
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var3 = var1.MobileApplePaymentLinkExperiment;
        var2 = var3.useConfig;
        var1 = {};
        var1['location'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['useMobileApplePaymentLinksExperimentConfig'] = var6;
    var3['useIsMobileApplePaymentLinksEnabled'] = var5;
    var5 = function(arg1) {
        var1 = arg1;
        var4 = var1.location;
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var3 = var1.MobileApplePaymentLinkExperiment;
        var2 = var3.useConfig;
        var1 = {};
        var1['location'] = var4;
        var1 = var2.bind(var3)(var1);
        var1 = var1.discountEnabled;
        return var1;
    };
    var3['useIsMobileApplePaymentLinksDiscountEnabled'] = var5;
    var5 = function(arg1) {
        var1 = arg1;
        var9 = var1.location;
        var6 = _closure1_slot0;
        var8 = _closure1_slot1;
        var2 = 4;
        var2 = var8[var2];
        var5 = undefined;
        var3 = var6.bind(var5)(var2);
        var2 = var3.useLocation;
        var2 = var2.bind(var3)();
        var7 = var2.search;
        var4 = var2.pathname;
        var3 = _closure1_slot7;
        var2 = {};
        var2['location'] = var9;
        var3 = var3.bind(var5)(var2);
        var2 = 5;
        var2 = var8[var2];
        var6 = var6.bind(var5)(var2);
        var2 = var6.parse;
        var2 = var2.bind(var6)(var7);
        var2 = var2.deep_link_type;
        var1 = _closure1_slot9;
        var1 = var1.bind(var5)(var3, var4, var2);
        return var1;
    };
    var3['useIsInApplePaymentLinkCustomCheckoutFlow'] = var5;
    var3['getIsInApplePaymentLinkCustomCheckoutFlow'] = var4;
    var2 = function(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var6 = arg2;
            var1 = arg1;
            var1 = var1.location;
            var2 = global;
            var2 = var2.window;
            var2 = var2.location;
            var5 = var2.pathname;
            var7 = _closure1_slot10;
            var3 = {};
            var3['location'] = var1;
            var2 = undefined;
            var1 = true;
            var3 = var7.bind(var2)(var3, var1);
            var2 = var5.startsWith;
            var1 = _closure1_slot2;
            var1 = var1.BILLING_PREMIUM_SUBSCRIBE;
            var1 = var2.bind(var5)(var1);
            var2 = !var1;
            var1 = !var2;
            if(var2) { _fun0006_ip = 115; continue _fun0006 }
 83:
            var2 = null;
            var2 = var2 != var6;
            if(!var2) { _fun0006_ip = 106; continue _fun0006 }
 92:
            var5 = _closure1_slot4;
            var4 = var5.has;
            var2 = var4.bind(var5)(var6);
 106:
            if(!var2) { _fun0006_ip = 112; continue _fun0006 }
 109:
            var2 = var3;
 112:
            var1 = var2;
 115:
            return var1;
        }
    };
    var3['getShouldFetchApplePaymentLinkOfferInMobileWeb'] = var2;
    return var1;
})();