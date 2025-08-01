// app/modules/stickers/native/premium/openStickersPremiumUpsellAlert.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _openStickersPremiumUpsellAlert() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    var9 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 223; continue _fun0001 }
 15:
                    var _closure4_slot0 = var9;
                    var5 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var2 = 4;
                    var2 = var10[var2];
                    var3 = undefined;
                    var8 = var5.bind(var3)(var2);
                    var6 = var8.track;
                    var2 = _closure1_slot4;
                    var5 = var2.OPEN_MODAL;
                    var2 = {};
                    var11 = _closure1_slot5;
                    var11 = var11.STICKER_PREMIUM_TIER_2_UPSELL_MODAL;
                    var2['type'] = var11;
                    var2['location'] = var9;
                    var2 = var6.bind(var8)(var5, var2);
                    var2 = global;
                    var6 = var2.Promise;
                    var5 = var6.all;
                    var9 = _closure1_slot0;
                    var2 = 5;
                    var2 = var10[var2];
                    var8 = var9.bind(var3)(var2);
                    var2 = var8.fetchPremiumSubscriptionPlans;
                    var8 = var2.bind(var8)();
                    var2 = new Array(2);
                    var2[0] = var8;
                    var8 = 6;
                    var8 = var10[var8];
                    var9 = var9.bind(var3)(var8);
                    var8 = var9.fetchPaymentSources;
                    var8 = var8.bind(var9)();
                    var2[1] = var8;
                    var2 = var5.bind(var6)(var2);
                    SaveGenerator(address=168);
 166:
                    return var2;
 168:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0001_ip = 220; continue _fun0001 }
 174:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var4 = 7;
                    var4 = var6[var4];
                    var6 = var5.bind(var3)(var4);
                    var5 = var6.openLazy;
                    var4 = {};
                    var7 = function importer() {
                        var3 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var2 = 9;
                        var2 = var1[var2];
                        var4 = undefined;
                        var3 = var3.bind(var4)(var2);
                        var2 = 8;
                        var2 = var1[var2];
                        var1 = var1.paths;
                        var3 = var3.bind(var4)(var2, var1);
                        var2 = var3.then;
                        var1 = function(arg1) {
                            var2 = arg1;
                            var2 = var2.default;
                            var _closure6_slot0 = var2;
                            var1 = function(arg1) {
                                var4 = _closure1_slot6;
                                var3 = _closure6_slot0;
                                var2 = {};
                                var6 = arg1;
                                var7 = var2;
                                var1 = copyDataProperties(var7, var6);
                                var5 = _closure4_slot0;
                                var1 = 'analyticsLocation';
                                var2[var1] = var5;
                                var1 = undefined;
                                var1 = var4.bind(var1)(var3, var2);
                                return var1;
                            };
                            return var1;
                        };
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var4['importer'] = var7;
                    var4 = var5.bind(var6)(var4);
                    return var3;
 220:
                    return var2;
 223:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot7 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot7 = var1;
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
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticEvents;
    var _closure1_slot4 = var7;
    var4 = var4.AnalyticsSections;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot6 = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/stickers/native/premium/openStickersPremiumUpsellAlert.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function openStickersPremiumUpsellAlert() {
        var1 = undefined;
        var4 = _closure1_slot7;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();