// app/modules/premium/promotions/PromotionsActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var9 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var10 = dependencyMap;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var10;
    var5 = function fetchActivePromotions() {
        var1 = undefined;
        var4 = _closure1_slot12;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot11 = var5;
    var1 = function _fetchActivePromotions() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var2 = undefined;
                    var8 = undefined;
                    var7 = undefined;
                    var10 = undefined;
                    var12 = undefined;
case 4: // try_start_0
                    var5 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var6 = 10;
                    var3 = var9[var6];
                    var11 = var5.bind(var2)(var3);
                    var5 = var11.dispatch;
                    var3 = {};
                    var13 = 'ACTIVE_PROMOTIONS_FETCH';
                    var3['type'] = var13;
                    var3 = var5.bind(var11)(var3);
                    var5 = _closure1_slot0;
                    var3 = 11;
                    var3 = var9[var3];
                    var3 = var5.bind(var2)(var3);
                    var3 = var3.MarketingComponentPlatform;
                    var13 = var3.MOBILE;
                    var3 = 12;
                    var3 = var9[var3];
                    var3 = var5.bind(var2)(var3);
                    var9 = var3.HTTP;
                    var5 = var9.get;
                    var3 = {};
                    var11 = _closure1_slot10;
                    var11 = var11.PROMOTIONS;
                    var3['url'] = var11;
                    var11 = {};
                    var14 = _closure1_slot4;
                    var14 = var14.locale;
                    var11['locale'] = var14;
                    var11['platform'] = var13;
                    var3['query'] = var11;
                    var11 = true;
                    var3['oldFormErrors'] = var11;
                    var3['rejectWithError'] = var11;
                    var3 = var5.bind(var9)(var3);
                    SaveGenerator(address=177);
case 5:
                    return var3;
case 6:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0001_ip = 7; continue _fun0001 }
case 8:
                    var8 = var3;
                    var5 = _closure1_slot7;
                    var7 = var5.consumedInboundPromotionId;
                    var5 = _closure1_slot7;
                    var5 = var5.hasFetchedConsumedInboundPromotionId;
                    if(var5) { _fun0001_ip = 9; continue _fun0001 }
case 10:
                    var9 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var5 = 13;
                    var5 = var11[var5];
                    var13 = var9.bind(var2)(var5);
                    var11 = var13.fetchUserEntitlementsForApplication;
                    var9 = _closure1_slot8;
                    var5 = false;
                    var5 = var11.bind(var13)(var9, var5);
                    SaveGenerator(address=254);
case 11:
                    return var5;
case 12:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=8);
                    if(var9) { _fun0001_ip = 13; continue _fun0001 }
case 14:
                    var11 = var5.find;
                    var9 = function(arg1) {
                        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                            var2 = arg1;
                            var3 = var2.promotion_id;
                            var1 = null;
                            var1 = var1 != var3;
                            if(!var1) { _fun0002_ip = 15; continue _fun0002 }
case 16:
                            var3 = var2.consumed;
                            var2 = true;
                            var1 = var2 === var3;
case 15:
                            return var1;
                        }
                    };
                    var11 = var11.bind(var5)(var9);
                    var12 = var11;
                    var9 = null;
                    var13 = var9 == var11;
                    var11 = undefined;
                    if(var13) { _fun0001_ip = 17; continue _fun0001 }
case 18:
                    var11 = var12.promotion_id;
case 17:
                    var10 = var11;
                    var11 = var9 != var11;
                    var9 = null;
                    if(!var11) { _fun0001_ip = 19; continue _fun0001 }
case 20:
                    var9 = var10;
case 19:
                    var7 = var9;
                    _fun0001_ip = 9; continue _fun0001;
case 13: // try_end0
                    return var5;
case 9: // try_start_1
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var4 = var4[var6];
                    var6 = var5.bind(var2)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var9 = 'ACTIVE_PROMOTIONS_FETCH_SUCCESS';
                    var4['type'] = var9;
                    var8 = var8.body;
                    var4['promotions'] = var8;
                    var4['consumedInboundPromotionId'] = var7;
                    var4 = var5.bind(var6)(var4);
case 21: // try_end1
                    _fun0001_ip = 22; continue _fun0001;
case 7:
                    return var3;
case 23: // catch_target0 // catch_target1
                    CatchBlockStart(arg_register=2);
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 10;
                    var3 = var5[var3];
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var6 = 'ACTIVE_PROMOTIONS_FETCH_FAIL';
                    var3['type'] = var6;
                    var3 = var4.bind(var5)(var3);
case 22:
                    return var2;
case 2:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot12 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot12 = var1;
    var4 = function dismissOutboundPromotionNotice() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 10;
            var4 = var4[var1];
            var1 = undefined;
            var6 = var5.bind(var1)(var4);
            var5 = var6.dispatch;
            var4 = {};
            var7 = 'OUTBOUND_PROMOTION_NOTICE_DISMISS';
            var4['type'] = var7;
            var4 = var5.bind(var6)(var4);
            var4 = _closure1_slot7;
            var5 = var4.lastDismissedOutboundPromotionStartDate;
            var _closure2_slot0 = var5;
            var4 = null;
            if(!(var4 != var5)) { _fun0003_ip = 24; continue _fun0003 }
case 25:
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 14;
            var5 = var7[var3];
            var5 = var4.bind(var1)(var5);
            var6 = var5.PreloadedUserSettingsActionCreators;
            var5 = var6.updateAsync;
            var3 = var7[var3];
            var3 = var4.bind(var1)(var3);
            var3 = var3.UserSettingsDelay;
            var4 = var3.INFREQUENT_USER_ACTION;
            var3 = 'userContent';
            var2 = function(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 15;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var4 = var2.StringValue;
                var3 = var4.create;
                var2 = {};
                var5 = _closure2_slot0;
                var2['value'] = var5;
                var3 = var3.bind(var4)(var2);
                var2 = arg1;
                var2['lastDismissedOutboundPromotionStartDate'] = var3;
                return var1;
            };
            var2 = var5.bind(var6)(var3, var2, var4);
case 24:
            return var1;
        }
    };
    var2 = function fetchActiveBogoPromotion() {
        var1 = undefined;
        var4 = _closure1_slot13;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var1 = function _fetchActiveBogoPromotion() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0004_ip = 26; continue _fun0004 }
case 3:
                    var3 = _closure1_slot7;
                    var3 = var3.isFetchingActiveBogoPromotion;
                    if(var3) { _fun0004_ip = 27; continue _fun0004 }
case 28: // try_start_0
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var7 = 10;
                    var3 = var5[var7];
                    var6 = undefined;
                    var8 = var4.bind(var6)(var3);
                    var4 = var8.dispatch;
                    var3 = {};
                    var9 = 'ACTIVE_BOGO_PROMOTION_FETCH';
                    var3['type'] = var9;
                    var3 = var4.bind(var8)(var3);
                    var4 = _closure1_slot0;
                    var3 = 12;
                    var3 = var5[var3];
                    var3 = var4.bind(var6)(var3);
                    var5 = var3.HTTP;
                    var4 = var5.get;
                    var3 = {};
                    var8 = _closure1_slot10;
                    var8 = var8.BOGO_PROMOTIONS;
                    var3['url'] = var8;
                    var8 = {};
                    var9 = _closure1_slot4;
                    var9 = var9.locale;
                    var8['locale'] = var9;
                    var3['query'] = var8;
                    var8 = true;
                    var3['rejectWithError'] = var8;
                    var3 = var4.bind(var5)(var3);
                    SaveGenerator(address=153);
case 29:
                    return var3;
case 30:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0004_ip = 31; continue _fun0004 }
case 32:
                    var9 = var3.body;
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var4 = var4[var7];
                    var6 = var5.bind(var6)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var7 = 'ACTIVE_BOGO_PROMOTION_FETCH_SUCCESS';
                    var4['type'] = var7;
                    var8 = _closure1_slot5;
                    var7 = var8.createFromServer;
                    var7 = var7.bind(var8)(var9);
                    var4['activePromotion'] = var7;
                    var4 = var5.bind(var6)(var4);
case 33: // try_end0
                    _fun0004_ip = 27; continue _fun0004;
case 31:
                    return var3;
case 34: // catch_target0
                    CatchBlockStart(arg_register=2);
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 10;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.dispatch;
                    var2 = {};
                    var5 = 'ACTIVE_BOGO_PROMOTION_FETCH_FAIL';
                    var2['type'] = var5;
                    var2 = var3.bind(var4)(var2);
case 27:
                    var2 = undefined;
                    return var2;
case 26:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot13 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot13 = var1;
    var1 = global;
    var12 = var1.Object;
    var11 = var12.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var11.bind(var12)(var3, var1, var7);
    var1 = 0;
    var7 = var10[var1];
    var1 = undefined;
    var7 = var8.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var7 = 1;
    var7 = var10[var7];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var7 = 2;
    var7 = var10[var7];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot5 = var7;
    var7 = 3;
    var7 = var10[var7];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot6 = var7;
    var7 = 4;
    var7 = var10[var7];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot7 = var7;
    var7 = 5;
    var7 = var10[var7];
    var7 = var9.bind(var1)(var7);
    var8 = var7.PREMIUM_SUBSCRIPTION_APPLICATION;
    var _closure1_slot8 = var8;
    var7 = var7.PremiumTypes;
    var _closure1_slot9 = var7;
    var7 = 6;
    var7 = var10[var7];
    var7 = var9.bind(var1)(var7);
    var7 = var7.Endpoints;
    var _closure1_slot10 = var7;
    var7 = {};
    var7['fetchActivePromotions'] = var5;
    var7['dismissOutboundPromotionNotice'] = var4;
    var8 = function markOutboundPromotionsSeen() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 10;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'OUTBOUND_PROMOTIONS_SEEN';
        var2['type'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var7['markOutboundPromotionsSeen'] = var8;
    var7['fetchActiveBogoPromotion'] = var2;
    var8 = 16;
    var8 = var10[var8];
    var10 = var9.bind(var1)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'modules/premium/promotions/PromotionsActionCreators.tsx';
    var8 = var9.bind(var10)(var8);
    var3['default'] = var7;
    var6 = function maybeFetchActivePromotions() {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var4 = arguments[0];
            var1 = undefined;
            if(!(var4 === var1)) { _fun0005_ip = 35; continue _fun0005 }
case 36:
            var4 = true;
case 35:
            var5 = _closure1_slot6;
            var3 = var5.getCurrentUser;
            var7 = var3.bind(var5)();
            var5 = _closure1_slot1;
            var9 = _closure1_slot2;
            var3 = 7;
            var3 = var9[var3];
            var6 = var5.bind(var1)(var3);
            var5 = var6.isPremiumExactly;
            var3 = _closure1_slot9;
            var3 = var3.TIER_2;
            var6 = var5.bind(var6)(var7, var3);
            var8 = _closure1_slot0;
            var3 = 8;
            var3 = var9[var3];
            var10 = var8.bind(var1)(var3);
            var7 = var10.isFetchingPromotionsEndpointEnabled;
            var3 = {};
            var5 = 'maybeFetchActivePromotions';
            var3['location'] = var5;
            var3 = var7.bind(var10)(var3);
            var7 = 9;
            var7 = var9[var7];
            var7 = var8.bind(var1)(var7);
            var9 = var7.OutboundPromoDesktopUpsellExperiment;
            var8 = var9.getCurrentConfig;
            var7 = {};
            var7['location'] = var5;
            var5 = {};
            var10 = false;
            var5['autoTrackExposure'] = var10;
            var5['disable'] = var6;
            var5 = var8.bind(var9)(var7, var5);
            var5 = var5.enabled;
            if(var3) { _fun0005_ip = 37; continue _fun0005 }
case 38:
            var3 = var6;
case 37:
            if(var3) { _fun0005_ip = 39; continue _fun0005 }
case 40:
            var3 = var5;
case 39:
            if(!var3) { _fun0005_ip = 41; continue _fun0005 }
case 42:
            var3 = _closure1_slot7;
            var3 = var3.isFetchingActivePromotions;
            if(var3) { _fun0005_ip = 43; continue _fun0005 }
case 44:
            if(!var4) { _fun0005_ip = 45; continue _fun0005 }
case 46:
            var5 = _closure1_slot7;
            var6 = var5.lastFetchedActivePromotions;
            var5 = null;
            var4 = var5 != var6;
case 45:
            var3 = var4;
case 43:
            if(var3) { _fun0005_ip = 41; continue _fun0005 }
case 47:
            var2 = _closure1_slot11;
            var2 = var2.bind(var1)();
case 41:
            return var1;
        }
    };
    var3['maybeFetchActivePromotions'] = var6;
    var3['fetchActivePromotions'] = var5;
    var3['dismissOutboundPromotionNotice'] = var4;
    var3['fetchActiveBogoPromotion'] = var2;
    return var1;
})();