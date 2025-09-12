// app/modules/payments/utils/ApplePaymentLinkUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var9;
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
    var _closure1_slot2 = var5;
    var4 = var4.LinkingTypes;
    var _closure1_slot3 = var4;
    var6 = function isMobileApplePaymentLinksEnabled(arg1) {
        var1 = arg1;
        var4 = var1.location;
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 1;
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
    var _closure1_slot4 = var6;
    var5 = function useShouldAllowApplePaymentDeepLinkToMobileApp(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var4 = var1.location;
            var2 = _closure1_slot6;
            var1 = {};
            var1['location'] = var4;
            var5 = undefined;
            var2 = var2.bind(var5)(var1);
            var4 = _closure1_slot0;
            var1 = _closure1_slot1;
            var6 = 2;
            var1 = var1[var6];
            var1 = var4.bind(var5)(var1);
            var1 = var1.isMobile;
            if(!var1) { _fun0001_ip = 80; continue _fun0001 }
 57:
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var3 = var3[var6];
            var3 = var4.bind(var5)(var3);
            var1 = var3.isIOSWeb;
 80:
            if(!var1) { _fun0001_ip = 86; continue _fun0001 }
 83:
            var1 = var2;
 86:
            return var1;
        }
    };
    var _closure1_slot5 = var5;
    var4 = function useIsMobileApplePaymentLinksEnabled(arg1) {
        var1 = arg1;
        var4 = var1.location;
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 1;
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
    var _closure1_slot6 = var4;
    var7 = 5;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/payments/utils/ApplePaymentLinkUtils.tsx';
    var7 = var8.bind(var9)(var7);
    var3['isMobileApplePaymentLinksEnabled'] = var6;
    var3['useShouldAllowApplePaymentDeepLinkToMobileApp'] = var5;
    var5 = function(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var5 = var1.location;
            var3 = _closure1_slot0;
            var1 = _closure1_slot1;
            var7 = 2;
            var1 = var1[var7];
            var4 = undefined;
            var1 = var3.bind(var4)(var1);
            var1 = var1.isMobile;
            if(!var1) { _fun0002_ip = 65; continue _fun0002 }
 42:
            var6 = _closure1_slot0;
            var3 = _closure1_slot1;
            var3 = var3[var7];
            var3 = var6.bind(var4)(var3);
            var1 = var3.isIOSWeb;
 65:
            if(!var1) { _fun0002_ip = 83; continue _fun0002 }
 68:
            var3 = _closure1_slot4;
            var2 = {};
            var2['location'] = var5;
            var1 = var3.bind(var4)(var2);
 83:
            return var1;
        }
    };
    var3['shouldAllowApplePaymentDeepLinkToMobileApp'] = var5;
    var3['useIsMobileApplePaymentLinksEnabled'] = var4;
    var2 = function(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arg1;
            var4 = var1.location;
            var3 = _closure1_slot0;
            var5 = _closure1_slot1;
            var1 = 3;
            var1 = var5[var1];
            var7 = undefined;
            var3 = var3.bind(var7)(var1);
            var1 = var3.useLocation;
            var1 = var1.bind(var3)();
            var6 = var1.search;
            var5 = var1.pathname;
            var3 = _closure1_slot5;
            var1 = {};
            var1['location'] = var4;
            var3 = var3.bind(var7)(var1);
            var4 = var5.startsWith;
            var1 = _closure1_slot2;
            var1 = var1.BILLING_MANAGE_SUBSCRIPTION;
            var1 = var4.bind(var5)(var1);
            var1 = !var1;
            if(!var1) { _fun0003_ip = 159; continue _fun0003 }
 97:
            var5 = _closure1_slot0;
            var8 = _closure1_slot1;
            var4 = 4;
            var4 = var8[var4];
            var5 = var5.bind(var7)(var4);
            var4 = var5.parse;
            var4 = var4.bind(var5)(var6);
            var4 = var4.deep_link_type;
            var2 = _closure1_slot3;
            var2 = var2.APPLE_PAYMENT_LINK;
            var2 = var4 === var2;
            if(!var2) { _fun0003_ip = 156; continue _fun0003 }
 153:
            var2 = var3;
 156:
            var1 = var2;
 159:
            return var1;
        }
    };
    var3['useIsInApplePaymentLinkCustomCheckoutFlow'] = var2;
    return var1;
})();