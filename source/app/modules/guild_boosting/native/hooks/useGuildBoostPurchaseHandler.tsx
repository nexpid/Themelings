// app/modules/guild_boosting/native/hooks/useGuildBoostPurchaseHandler.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
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
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var8 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.CustomCheckoutFlow;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var8 = var7.bind(var1)(var4);
    var4 = var8.prototype;
    var7 = Object.create(var4, {constructor: {value: var8}});
    var12 = 'useGuildBoostPurchaseHandler';
    var13 = var7;
    var4 = new var13[var8](var12, var11);
    var4 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot8 = var4;
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_boosting/native/hooks/useGuildBoostPurchaseHandler.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useGuildBoostPurchaseHandler(arg1) {
        var6 = arg1;
        var _closure2_slot0 = var6;
        var7 = _closure1_slot0;
        var8 = _closure1_slot2;
        var2 = 6;
        var3 = var8[var2];
        var2 = undefined;
        var9 = var7.bind(var2)(var3);
        var5 = var9.useApplePaymentLinkExperimentConfig;
        var3 = {};
        var3['location'] = var6;
        var3 = var5.bind(var9)(var3);
        var3 = var3.enabled;
        var _closure2_slot1 = var3;
        var5 = 7;
        var5 = var8[var5];
        var9 = var7.bind(var2)(var5);
        var8 = var9.useStateFromStores;
        var5 = _closure1_slot5;
        var7 = new Array(1);
        var7[0] = var5;
        var5 = new Array(1);
        var5[0] = var3;
        var3 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var1 = _closure2_slot1;
                if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var1 = false;
                return var1;
case 2:
                var3 = _closure1_slot5;
                var2 = var3.getPremiumSubscription;
                var7 = var2.bind(var3)();
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 8;
                var2 = var5[var1];
                var3 = undefined;
                var6 = var4.bind(var3)(var2);
                var2 = var6.getPremiumManagementMethod;
                var2 = var2.bind(var6)(var7);
                var1 = var5[var1];
                var1 = var4.bind(var3)(var1);
                var1 = var1.PremiumManagementMethod;
                var1 = var1.IN_WEB;
                var1 = var2 === var1;
                return var1;
            }
        };
        var3 = var8.bind(var9)(var7, var3, var5);
        var5 = _closure1_slot4;
        var4 = var5.useCallback;
        var1 = function() {
            var4 = _closure1_slot3;
            var3 = undefined;
            var2 = function* (arg1, arg2) {
                var1 = function* anon_0_(arg1, arg2) {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        StartGenerator();
                        var10 = arg2;
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                        if(var3) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                        var3 = arg1;
                        var _closure5_slot0 = var3;
                        var _closure5_slot1 = var10;
                        var3 = undefined;
                        var _closure5_slot2 = var3;
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var5 = 9;
                        var5 = var7[var5];
                        var8 = var6.bind(var3)(var5);
                        var5 = var8.getNewAnalyticsLoadId;
                        var9 = var5.bind(var8)();
                        _closure5_slot2 = var9;
                        var5 = 10;
                        var5 = var7[var5];
                        var8 = var6.bind(var3)(var5);
                        var7 = var8.goToStandaloneGuildBoostCheckoutFromMobileApp;
                        var15 = _closure2_slot0;
                        var12 = function() {
                            var4 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var1 = 11;
                            var3 = var3[var1];
                            var1 = undefined;
                            var6 = var4.bind(var1)(var3);
                            var5 = var6.track;
                            var3 = _closure1_slot6;
                            var4 = var3.MOBILE_OPEN_STANDALONE_GUILD_BOOST_CHECKOUT_PAGE;
                            var3 = {};
                            var8 = _closure5_slot1;
                            var3['guild_id'] = var8;
                            var8 = _closure5_slot2;
                            var3['load_id'] = var8;
                            var11 = _closure5_slot0;
                            var7 = new Array(0);
                            var10 = 0;
                            var12 = var7;
                            var8 = arraySpread(var12, var11, var10);
                            var3['location_stack'] = var7;
                            var7 = _closure1_slot7;
                            var7 = var7.APPLE_PAYMENT_LINK;
                            var3['custom_checkout_flow'] = var7;
                            var3 = var5.bind(var6)(var4, var3);
                            var4 = _closure1_slot8;
                            var3 = var4.log;
                            var2 = 'Successfully opened mobile web Guild Boost Management page';
                            var2 = var3.bind(var4)(var2);
                            return var1;
                        };
                        var11 = function(arg1) {
                            var4 = _closure1_slot8;
                            var3 = var4.error;
                            var2 = 'Failed to open mobile web Guild Boost Management page, error response: ';
                            var1 = arg1;
                            var1 = var3.bind(var4)(var2, var1);
                            var3 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var1 = 12;
                            var2 = var9[var1];
                            var1 = undefined;
                            var4 = var3.bind(var1)(var2);
                            var3 = var4.show;
                            var2 = {};
                            var8 = _closure1_slot0;
                            var5 = 13;
                            var6 = var9[var5];
                            var6 = var8.bind(var1)(var6);
                            var10 = var6.intl;
                            var7 = var10.string;
                            var6 = var9[var5];
                            var6 = var8.bind(var1)(var6);
                            var6 = var6.t;
                            var6 = var6.vgvbiP;
                            var6 = var7.bind(var10)(var6);
                            var2['title'] = var6;
                            var6 = var9[var5];
                            var6 = var8.bind(var1)(var6);
                            var7 = var6.intl;
                            var6 = var7.string;
                            var5 = var9[var5];
                            var5 = var8.bind(var1)(var5);
                            var5 = var5.t;
                            var5 = var5.ycleJf;
                            var5 = var6.bind(var7)(var5);
                            var2['body'] = var5;
                            var5 = true;
                            var2['hideActionSheet'] = var5;
                            var2 = var3.bind(var4)(var2);
                            return var1;
                        };
                        var16 = var8;
                        var14 = var10;
                        var13 = var9;
                        var2 = var16[var7](var15, var14, var13, var12, var11, var10);
                        SaveGenerator(address=121);
case 6:
                        return var2;
case 7:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                        if(var5) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var4 = 14;
                        var4 = var6[var4];
                        var5 = var5.bind(var3)(var4);
                        var4 = var5.closeApplyBoostModal;
                        var4 = var4.bind(var5)();
                        return var3;
case 8:
                        return var2;
case 4:
                        return var1;
                    }
                };
                return var1;
            };
            var2 = var4.bind(var3)(var2);
            var _closure3_slot0 = var2;
            var1 = function() {
                var1 = undefined;
                var4 = _closure3_slot0;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            return var1;
        };
        var2 = var1.bind(var2)();
        var1 = new Array(1);
        var1[0] = var6;
        var2 = var4.bind(var5)(var2, var1);
        var1 = {};
        var1['shouldUseMwebRedirect'] = var3;
        var1['handleMwebRedirect'] = var2;
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();