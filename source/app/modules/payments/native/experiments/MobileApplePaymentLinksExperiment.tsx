// app/modules/payments/native/experiments/MobileApplePaymentLinksExperiment.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var8;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var2 = {};
    var11 = true;
    var2['value'] = var11;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var2);
    var1 = 0;
    var2 = var8[var1];
    var1 = undefined;
    var6 = var7.bind(var1)(var2);
    var5 = var6.createApexExperiment;
    var2 = {'name': '2025-08-mobile-apple-payment-links', 'kind': 'user'};
    var9 = {};
    var10 = false;
    var9['enabled'] = var10;
    var2['defaultConfig'] = var9;
    var9 = {};
    var10 = {};
    var10['enabled'] = var11;
    var9[1] = var10;
    var2['variations'] = var9;
    var2 = var5.bind(var6)(var2);
    var _closure1_slot2 = var2;
    var5 = function isMobileApplePaymentLinksEnabled(arg1) {
        var1 = arg1;
        var4 = var1.location;
        var3 = _closure1_slot2;
        var2 = var3.getConfig;
        var1 = {};
        var1['location'] = var4;
        var1 = var2.bind(var3)(var1);
        var1 = var1.enabled;
        return var1;
    };
    var _closure1_slot3 = var5;
    var2 = function useIsMobileApplePaymentLinksEnabled(arg1) {
        var1 = arg1;
        var4 = var1.location;
        var3 = _closure1_slot2;
        var2 = var3.useConfig;
        var1 = {};
        var1['location'] = var4;
        var1 = var2.bind(var3)(var1);
        var1 = var1.enabled;
        return var1;
    };
    var _closure1_slot4 = var2;
    var6 = 2;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/payments/native/experiments/MobileApplePaymentLinksExperiment.tsx';
    var6 = var7.bind(var8)(var6);
    var3['isMobileApplePaymentLinksEnabled'] = var5;
    var5 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var4 = var1.location;
            var2 = _closure1_slot4;
            var1 = {};
            var1['location'] = var4;
            var5 = undefined;
            var2 = var2.bind(var5)(var1);
            var4 = _closure1_slot0;
            var1 = _closure1_slot1;
            var6 = 1;
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
    var3['useShouldAllowApplePaymentDeepLinkToMobileApp'] = var5;
    var4 = function(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var5 = var1.location;
            var3 = _closure1_slot0;
            var1 = _closure1_slot1;
            var7 = 1;
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
            var3 = _closure1_slot3;
            var2 = {};
            var2['location'] = var5;
            var1 = var3.bind(var4)(var2);
 83:
            return var1;
        }
    };
    var3['shouldAllowApplePaymentDeepLinkToMobileApp'] = var4;
    var3['useIsMobileApplePaymentLinksEnabled'] = var2;
    return var1;
})();