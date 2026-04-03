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
    var4 = var4.CustomCheckoutFlow;
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.Routes;
    var _closure1_slot4 = var7;
    var4 = var4.LinkingTypes;
    var _closure1_slot5 = var4;
    var4 = function checkForCustomCheckoutFlow(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var3 = var4.startsWith;
            var1 = _closure1_slot4;
            var1 = var1.BILLING_MANAGE_SUBSCRIPTION;
            var1 = var3.bind(var4)(var1);
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = _closure1_slot5;
            var3 = var1.MOBILE_WEB_REDIRECT_CHECKOUT;
            var1 = arg2;
            if(!(var1 !== var3)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = _closure1_slot3;
            var4 = var1.META_QUEST_WEB_REDIRECT_CHECKOUT;
            var3 = arg3;
            var1 = undefined;
            if(!(var3 === var4)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var3 = _closure1_slot3;
            var1 = var3.META_QUEST_WEB_REDIRECT_CHECKOUT;
case 6:
            _fun0001_ip = 8; continue _fun0001;
case 4:
            var2 = _closure1_slot3;
            var1 = var2.MOBILE_WEB_REDIRECT_CHECKOUT;
case 8:
            return var1;
case 2:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot6 = var4;
    var4 = 6;
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
        var1 = 2;
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
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        var1 = var2.isMetaQuest;
        var1 = var1.bind(var2)();
        return var1;
    };
    var3['isMobileWebRedirectCheckoutEnabled'] = var4;
    var4 = function() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 3;
            var3 = var3[var1];
            var1 = undefined;
            var3 = var4.bind(var1)(var3);
            var1 = var3.isMetaQuest;
            var1 = var1.bind(var3)();
            var2 = _closure1_slot3;
            if(var1) { _fun0002_ip = 9; continue _fun0002 }
case 10:
            var1 = var2.MOBILE_WEB_REDIRECT_CHECKOUT;
            _fun0002_ip = 11; continue _fun0002;
case 9:
            var1 = var2.META_QUEST_WEB_REDIRECT_CHECKOUT;
case 11:
            return var1;
        }
    };
    var3['getCustomCheckoutFlowForAnalytics'] = var4;
    var4 = function() {
        var3 = _closure1_slot0;
        var7 = _closure1_slot2;
        var2 = 4;
        var2 = var7[var2];
        var5 = undefined;
        var4 = var3.bind(var5)(var2);
        var2 = var4.useLocation;
        var2 = var2.bind(var4)();
        var6 = var2.search;
        var4 = var2.pathname;
        var2 = 5;
        var2 = var7[var2];
        var3 = var3.bind(var5)(var2);
        var2 = var3.parse;
        var2 = var2.bind(var3)(var6);
        var3 = var2.deep_link_type;
        var2 = var2.flow_type;
        var1 = _closure1_slot6;
        var1 = var1.bind(var5)(var4, var3, var2);
        return var1;
    };
    var3['useGetCustomCheckoutFlow'] = var4;
    var2 = function() {
        var2 = global;
        var1 = var2.window;
        var1 = var1.location;
        var5 = var1.pathname;
        var6 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 5;
        var3 = var4[var3];
        var4 = undefined;
        var6 = var6.bind(var4)(var3);
        var3 = var6.parse;
        var2 = var2.window;
        var2 = var2.location;
        var2 = var2.search;
        var2 = var3.bind(var6)(var2);
        var3 = var2.deep_link_type;
        var2 = var2.flow_type;
        var1 = _closure1_slot6;
        var1 = var1.bind(var4)(var5, var3, var2);
        return var1;
    };
    var3['getCustomCheckoutFlow'] = var2;
    return var1;
})();