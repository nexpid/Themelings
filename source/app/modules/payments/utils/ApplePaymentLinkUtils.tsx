// app/modules/payments/utils/ApplePaymentLinkUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var7;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var4 = var6.bind(var1)(var4);
    var5 = var4.Routes;
    var _closure1_slot3 = var5;
    var4 = var4.LinkingTypes;
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.PREMIUM_TIER_2_PLANS;
    var _closure1_slot5 = var4;
    var4 = function checkForAPLCustomCheckoutFlow(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var5 = arg2;
            var4 = var5.startsWith;
            var1 = _closure1_slot3;
            var1 = var1.BILLING_MANAGE_SUBSCRIPTION;
            var1 = var4.bind(var5)(var1);
            var1 = !var1;
            if(!var1) { _fun0001_ip = 62; continue _fun0001 }
 36:
            var2 = _closure1_slot4;
            var4 = var2.APPLE_PAYMENT_LINK;
            var2 = arg3;
            var2 = var2 === var4;
            if(!var2) { _fun0001_ip = 59; continue _fun0001 }
 56:
            var2 = var3;
 59:
            var1 = var2;
 62:
            return var1;
        }
    };
    var _closure1_slot6 = var4;
    var4 = function getIsInApplePaymentLinkCustomCheckoutFlow(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var5 = arguments[1];
            var1 = arg1;
            var9 = var1.location;
            var4 = undefined;
            if(!(var5 === var4)) { _fun0002_ip = 19; continue _fun0002 }
 17:
            var5 = false;
 19:
            var2 = global;
            var1 = var2.window;
            var1 = var1.location;
            var3 = var1.pathname;
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var6 = 5;
            var6 = var8[var6];
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
            if(var6) { _fun0002_ip = 186; continue _fun0002 }
 119:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var6 = 4;
            var6 = var8[var6];
            var6 = var7.bind(var4)(var6);
            var8 = var6.MobileApplePaymentLinkExperiment;
            var7 = var8.getConfig;
            var6 = {};
            var6['location'] = var9;
            var6 = var7.bind(var8)(var6);
            var6 = var6.enabled;
            var1 = _closure1_slot6;
            if(var5) { _fun0002_ip = 177; continue _fun0002 }
 174:
            var5 = var6;
 177:
            var1 = var1.bind(var4)(var5, var3, var2);
            return var1;
 186:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot7 = var4;
    var5 = 6;
    var5 = var7[var5];
    var9 = var6.bind(var1)(var5);
    var8 = var9.fileFinishedImporting;
    var5 = 'modules/payments/utils/ApplePaymentLinkUtils.tsx';
    var5 = var8.bind(var9)(var5);
    var5 = 'apple_payment_links';
    var3['APPLE_PAYMENT_LINK_ERROR_TAG'] = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.MobileApplePaymentLinkExperiment;
    var3['MobileApplePaymentLinkExperiment'] = var5;
    var5 = function(arg1, arg2, arg3) {
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
    var3['captureApplePaymentLinkSentryError'] = var5;
    var5 = function(arg1) {
        var1 = arg1;
        var10 = var1.location;
        var6 = _closure1_slot0;
        var8 = _closure1_slot2;
        var2 = 3;
        var2 = var8[var2];
        var5 = undefined;
        var3 = var6.bind(var5)(var2);
        var2 = var3.useLocation;
        var2 = var2.bind(var3)();
        var7 = var2.search;
        var4 = var2.pathname;
        var2 = 4;
        var2 = var8[var2];
        var2 = var6.bind(var5)(var2);
        var9 = var2.MobileApplePaymentLinkExperiment;
        var3 = var9.useConfig;
        var2 = {};
        var2['location'] = var10;
        var2 = var3.bind(var9)(var2);
        var3 = var2.enabled;
        var2 = 5;
        var2 = var8[var2];
        var6 = var6.bind(var5)(var2);
        var2 = var6.parse;
        var2 = var2.bind(var6)(var7);
        var2 = var2.deep_link_type;
        var1 = _closure1_slot6;
        var1 = var1.bind(var5)(var3, var4, var2);
        return var1;
    };
    var3['useIsInApplePaymentLinkCustomCheckoutFlow'] = var5;
    var3['getIsInApplePaymentLinkCustomCheckoutFlow'] = var4;
    var2 = function(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var7 = arg2;
            var1 = arg1;
            var1 = var1.location;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 5;
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
            var3 = _closure1_slot7;
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
            if(var2) { _fun0003_ip = 182; continue _fun0003 }
 139:
            var2 = null;
            var2 = var2 != var7;
            if(!var2) { _fun0003_ip = 162; continue _fun0003 }
 148:
            var6 = _closure1_slot5;
            var5 = var6.has;
            var2 = var5.bind(var6)(var7);
 162:
            if(!var2) { _fun0003_ip = 168; continue _fun0003 }
 165:
            var2 = var3;
 168:
            if(!var2) { _fun0003_ip = 179; continue _fun0003 }
 171:
            var3 = 'true';
            var2 = var3 === var4;
 179:
            var1 = var2;
 182:
            return var1;
        }
    };
    var3['getShouldUseApplePaymentLinkOfferInMobileWeb'] = var2;
    return var1;
})();