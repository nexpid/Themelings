// app/modules/payments/utils/ApplePaymentLinkUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var9;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var4);
    var1 = 0;
    var4 = var9[var1];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var5 = var4.Routes;
    var _closure1_slot3 = var5;
    var4 = var4.LinkingTypes;
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var9[var4];
    var4 = var8.bind(var1)(var4);
    var4 = var4.PREMIUM_TIER_2_PLANS;
    var _closure1_slot5 = var4;
    var6 = function getApplePaymentLinkExperimentConfig(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var4 = var1.location;
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 3;
            var2 = var3[var2];
            var3 = undefined;
            var2 = var5.bind(var3)(var2);
            var6 = var2.TurtleExperiment;
            var5 = var6.getCurrentConfig;
            var2 = {};
            var2['location'] = var4;
            var2 = var5.bind(var6)(var2);
            var2 = var2.enabled;
            if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 4;
            var1 = var5[var1];
            var1 = var2.bind(var3)(var1);
            var3 = var1.MobileApplePaymentLinkExperiment;
            var2 = var3.getConfig;
            var1 = {};
            var1['location'] = var4;
            var1 = var2.bind(var3)(var1);
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var1 = {'enabled': false, 'discountEnabled': false};
case 4:
            return var1;
        }
    };
    var _closure1_slot6 = var6;
    var5 = function useApplePaymentLinkExperimentConfig(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var5 = var1.location;
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 3;
            var1 = var6[var1];
            var3 = undefined;
            var1 = var4.bind(var3)(var1);
            var7 = var1.TurtleExperiment;
            var2 = var7.useExperiment;
            var1 = {};
            var1['location'] = var5;
            var1 = var2.bind(var7)(var1);
            var2 = var1.enabled;
            var1 = 4;
            var1 = var6[var1];
            var1 = var4.bind(var3)(var1);
            var4 = var1.MobileApplePaymentLinkExperiment;
            var3 = var4.useConfig;
            var1 = {};
            var1['location'] = var5;
            var1 = var3.bind(var4)(var1);
            if(!var2) { _fun0002_ip = 5; continue _fun0002 }
case 6:
            var1 = {'enabled': false, 'discountEnabled': false};
case 5:
            return var1;
        }
    };
    var _closure1_slot7 = var5;
    var4 = function checkForAPLCustomCheckoutFlow(arg1, arg2, arg3) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var3 = arg1;
            var5 = arg2;
            var4 = var5.startsWith;
            var1 = _closure1_slot3;
            var1 = var1.BILLING_MANAGE_SUBSCRIPTION;
            var1 = var4.bind(var5)(var1);
            var1 = !var1;
            if(!var1) { _fun0003_ip = 7; continue _fun0003 }
case 8:
            var2 = _closure1_slot4;
            var4 = var2.APPLE_PAYMENT_LINK;
            var2 = arg3;
            var2 = var2 === var4;
            if(!var2) { _fun0003_ip = 9; continue _fun0003 }
case 10:
            var2 = var3;
case 9:
            var1 = var2;
case 7:
            return var1;
        }
    };
    var _closure1_slot8 = var4;
    var4 = function getIsInApplePaymentLinkCustomCheckoutFlow(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var5 = arguments[1];
            var1 = arg1;
            var8 = var1.location;
            var4 = undefined;
            if(!(var5 === var4)) { _fun0004_ip = 11; continue _fun0004 }
case 12:
            var5 = false;
case 11:
            var2 = global;
            var1 = var2.window;
            var1 = var1.location;
            var3 = var1.pathname;
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var6 = 6;
            var6 = var9[var6];
            var7 = var7.bind(var4)(var6);
            var6 = var7.parse;
            var2 = var2.window;
            var2 = var2.location;
            var2 = var2.search;
            var2 = var6.bind(var7)(var2);
            var2 = var2.deep_link_type;
            var7 = var3.startsWith;
            var6 = _closure1_slot3;
            var6 = var6.BILLING_MANAGE_SUBSCRIPTION;
            var6 = var7.bind(var3)(var6);
            if(var6) { _fun0004_ip = 13; continue _fun0004 }
case 14:
            var7 = _closure1_slot6;
            var6 = {};
            var6['location'] = var8;
            var6 = var7.bind(var4)(var6);
            var6 = var6.enabled;
            var1 = _closure1_slot8;
            if(var5) { _fun0004_ip = 15; continue _fun0004 }
case 16:
            var5 = var6;
case 15:
            var1 = var1.bind(var4)(var5, var3, var2);
            return var1;
case 13:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot9 = var4;
    var7 = 7;
    var7 = var9[var7];
    var11 = var8.bind(var1)(var7);
    var10 = var11.fileFinishedImporting;
    var7 = 'modules/payments/utils/ApplePaymentLinkUtils.tsx';
    var7 = var10.bind(var11)(var7);
    var7 = 'apple_payment_links';
    var3['APPLE_PAYMENT_LINK_ERROR_TAG'] = var7;
    var7 = 4;
    var7 = var9[var7];
    var7 = var8.bind(var1)(var7);
    var7 = var7.MobileApplePaymentLinkExperiment;
    var3['MobileApplePaymentLinkExperiment'] = var7;
    var7 = function(arg1, arg2, arg3) {
        var2 = arg3;
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 2;
        var3 = var3[var1];
        var1 = undefined;
        var5 = var4.bind(var1)(var3);
        var4 = var5.captureException;
        var3 = {};
        var6 = {};
        var7 = 'apple_payment_links';
        var6['app_context'] = var7;
        var7 = arg2;
        var6['source'] = var7;
        var8 = var2.tags;
        var9 = var6;
        var7 = copyDataProperties(var9, var8);
        var3['tags'] = var6;
        var2 = var2.extra;
        var3['extra'] = var2;
        var2 = arg1;
        var2 = var4.bind(var5)(var2, var3);
        return var1;
    };
    var3['captureApplePaymentLinkSentryError'] = var7;
    var3['getApplePaymentLinkExperimentConfig'] = var6;
    var3['useApplePaymentLinkExperimentConfig'] = var5;
    var5 = function(arg1) {
        var1 = arg1;
        var9 = var1.location;
        var6 = _closure1_slot0;
        var8 = _closure1_slot2;
        var2 = 5;
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
        var2 = var3.bind(var5)(var2);
        var3 = var2.enabled;
        var2 = 6;
        var2 = var8[var2];
        var6 = var6.bind(var5)(var2);
        var2 = var6.parse;
        var2 = var2.bind(var6)(var7);
        var2 = var2.deep_link_type;
        var1 = _closure1_slot8;
        var1 = var1.bind(var5)(var3, var4, var2);
        return var1;
    };
    var3['useIsInApplePaymentLinkCustomCheckoutFlow'] = var5;
    var3['getIsInApplePaymentLinkCustomCheckoutFlow'] = var4;
    var2 = function(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var7 = arg2;
            var1 = arg1;
            var1 = var1.location;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 6;
            var2 = var4[var2];
            var8 = undefined;
            var6 = var3.bind(var8)(var2);
            var4 = var6.parse;
            var2 = global;
            var3 = var2.window;
            var3 = var3.location;
            var3 = var3.search;
            var3 = var4.bind(var6)(var3);
            var4 = var3.use_preset_offer;
            var2 = var2.window;
            var2 = var2.location;
            var6 = var2.pathname;
            var3 = _closure1_slot9;
            var2 = {};
            var2['location'] = var1;
            var1 = true;
            var3 = var3.bind(var8)(var2, var1);
            var2 = var6.startsWith;
            var1 = _closure1_slot3;
            var1 = var1.BILLING_PREMIUM_SUBSCRIBE;
            var1 = var2.bind(var6)(var1);
            var2 = !var1;
            var1 = !var2;
            if(var2) { _fun0005_ip = 17; continue _fun0005 }
case 18:
            var2 = null;
            var2 = var2 != var7;
            if(!var2) { _fun0005_ip = 19; continue _fun0005 }
case 20:
            var6 = _closure1_slot5;
            var5 = var6.has;
            var2 = var5.bind(var6)(var7);
case 19:
            if(!var2) { _fun0005_ip = 21; continue _fun0005 }
case 22:
            var2 = var3;
case 21:
            if(!var2) { _fun0005_ip = 23; continue _fun0005 }
case 24:
            var3 = 'true';
            var2 = var3 === var4;
case 23:
            var1 = var2;
case 17:
            return var1;
        }
    };
    var3['getShouldUseApplePaymentLinkOfferInMobileWeb'] = var2;
    return var1;
})();