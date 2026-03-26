// app/modules/payments/utils/MobileWebRedirectCheckoutUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var7 = var4.Routes;
    var _closure1_slot3 = var7;
    var4 = var4.LinkingTypes;
    var _closure1_slot4 = var4;
    var4 = function checkForMobileWebRedirectCheckoutFlow(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var3 = var4.startsWith;
            var1 = _closure1_slot3;
            var1 = var1.BILLING_MANAGE_SUBSCRIPTION;
            var1 = var3.bind(var4)(var1);
            var1 = !var1;
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = _closure1_slot4;
            var3 = var2.MOBILE_WEB_REDIRECT_CHECKOUT;
            var2 = arg2;
            var1 = var2 === var3;
case 2:
            return var1;
        }
    };
    var _closure1_slot5 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/payments/utils/MobileWebRedirectCheckoutUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = 'mobile_web_redirect_checkout';
    var3['MOBILE_WEB_REDIRECT_CHECKOUT_ERROR_TAG'] = var4;
    var4 = function(arg1, arg2, arg3) {
        var2 = arg3;
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 1;
        var3 = var3[var1];
        var1 = undefined;
        var5 = var4.bind(var1)(var3);
        var4 = var5.captureException;
        var3 = {};
        var6 = {};
        var7 = 'mobile_web_redirect_checkout';
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
    var3['captureMobileWebRedirectCheckoutSentryError'] = var4;
    var4 = function() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 2;
        var2 = var2[var1];
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        var1 = var2.isMetaQuest;
        var1 = var1.bind(var2)();
        return var1;
    };
    var3['isMobileWebRedirectCheckoutEnabled'] = var4;
    var4 = function() {
        var5 = _closure1_slot0;
        var7 = _closure1_slot2;
        var2 = 3;
        var2 = var7[var2];
        var4 = undefined;
        var3 = var5.bind(var4)(var2);
        var2 = var3.useLocation;
        var2 = var2.bind(var3)();
        var6 = var2.search;
        var3 = var2.pathname;
        var2 = 4;
        var2 = var7[var2];
        var5 = var5.bind(var4)(var2);
        var2 = var5.parse;
        var2 = var2.bind(var5)(var6);
        var2 = var2.deep_link_type;
        var1 = _closure1_slot5;
        var1 = var1.bind(var4)(var3, var2);
        return var1;
    };
    var3['useIsInMobileWebRedirectCheckoutFlow'] = var4;
    var2 = function() {
        var2 = global;
        var1 = var2.window;
        var1 = var1.location;
        var4 = var1.pathname;
        var6 = _closure1_slot0;
        var5 = _closure1_slot2;
        var3 = 4;
        var5 = var5[var3];
        var3 = undefined;
        var6 = var6.bind(var3)(var5);
        var5 = var6.parse;
        var2 = var2.window;
        var2 = var2.location;
        var2 = var2.search;
        var2 = var5.bind(var6)(var2);
        var2 = var2.deep_link_type;
        var1 = _closure1_slot5;
        var1 = var1.bind(var3)(var4, var2);
        return var1;
    };
    var3['getIsInMobileWebRedirectCheckoutFlow'] = var2;
    return var1;
})();