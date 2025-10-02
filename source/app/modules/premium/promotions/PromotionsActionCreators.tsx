// app/modules/premium/promotions/PromotionsActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var10 = metroImportDefault;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var9;
    var5 = function fetchActiveOutboundPromotions() {
        var1 = undefined;
        var4 = _closure1_slot9;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var1 = function _fetchActiveOutboundPromotions() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 567; continue _fun0001 }
 10:
                    var2 = undefined;
                    var11 = undefined;
                    var9 = undefined;
                    var8 = undefined;
                    var10 = undefined;
                    var12 = undefined;
                    var4 = _closure1_slot6;
                    var4 = var4.isFetchingActiveOutboundPromotions;
                    if(var4) { _fun0001_ip = 564; continue _fun0001 }
 43: // try_start_0
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var7 = 6;
                    var4 = var6[var7];
                    var13 = var5.bind(var2)(var4);
                    var5 = var13.dispatch;
                    var4 = {};
                    var14 = 'ACTIVE_OUTBOUND_PROMOTIONS_FETCH';
                    var4['type'] = var14;
                    var4 = var5.bind(var13)(var4);
                    var5 = _closure1_slot0;
                    var4 = 7;
                    var4 = var6[var4];
                    var4 = var5.bind(var2)(var4);
                    var15 = var4.PromotionEndpointMigrationExperiment;
                    var14 = var15.getCurrentConfig;
                    var6 = {};
                    var4 = '5731cc_1';
                    var6['location'] = var4;
                    var5 = {};
                    var13 = false;
                    var5['autoTrackExposure'] = var13;
                    var5 = var14.bind(var15)(var6, var5);
                    var5 = var5.enabled;
                    if(var5) { _fun0001_ip = 231; continue _fun0001 }
 148:
                    var6 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var5 = 8;
                    var5 = var14[var5];
                    var5 = var6.bind(var2)(var5);
                    var14 = var5.PromotionPreviewExperiment;
                    var6 = var14.getCurrentConfig;
                    var5 = {};
                    var5['location'] = var4;
                    var4 = {};
                    var4['autoTrackExposure'] = var13;
                    var4 = var6.bind(var14)(var5, var4);
                    var4 = var4.previewEnabled;
                    var5 = _closure1_slot8;
                    if(var4) { _fun0001_ip = 220; continue _fun0001 }
 212:
                    var4 = var5.OUTBOUND_PROMOTIONS;
                    _fun0001_ip = 226; continue _fun0001;
 220:
                    var4 = var5.OUTBOUND_PROMOTIONS_PREVIEW;
 226:
                    var11 = var4;
                    _fun0001_ip = 241; continue _fun0001;
 231:
                    var4 = _closure1_slot8;
                    var11 = var4.PROMOTIONS;
 241:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 9;
                    var4 = var6[var4];
                    var4 = var5.bind(var2)(var4);
                    var6 = var4.HTTP;
                    var5 = var6.get;
                    var4 = {};
                    var4['url'] = var11;
                    var11 = {};
                    var14 = _closure1_slot4;
                    var14 = var14.locale;
                    var11['locale'] = var14;
                    var4['query'] = var11;
                    var11 = true;
                    var4['oldFormErrors'] = var11;
                    var4['rejectWithError'] = var11;
                    var4 = var5.bind(var6)(var4);
                    SaveGenerator(address=319);
 317:
                    return var4;
 319:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(var5) { _fun0001_ip = 517; continue _fun0001 }
 328:
                    var9 = var4;
                    var5 = _closure1_slot6;
                    var8 = var5.consumedInboundPromotionId;
                    var5 = _closure1_slot6;
                    var5 = var5.hasFetchedConsumedInboundPromotionId;
                    if(var5) { _fun0001_ip = 461; continue _fun0001 }
 354:
                    var6 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var5 = 10;
                    var5 = var11[var5];
                    var11 = var6.bind(var2)(var5);
                    var6 = var11.fetchUserEntitlementsForApplication;
                    var5 = _closure1_slot7;
                    var5 = var6.bind(var11)(var5, var13);
                    SaveGenerator(address=394);
 392:
                    return var5;
 394:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                    if(var6) { _fun0001_ip = 458; continue _fun0001 }
 400:
                    var11 = var5.find;
                    var6 = function(arg1) {
                        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                            var2 = arg1;
                            var3 = var2.promotion_id;
                            var1 = null;
                            var1 = var1 != var3;
                            if(!var1) { _fun0002_ip = 30; continue _fun0002 }
 18:
                            var3 = var2.consumed;
                            var2 = true;
                            var1 = var2 === var3;
 30:
                            return var1;
                        }
                    };
                    var11 = var11.bind(var5)(var6);
                    var12 = var11;
                    var6 = null;
                    var13 = var6 == var11;
                    var11 = undefined;
                    if(var13) { _fun0001_ip = 438; continue _fun0001 }
 432:
                    var11 = var12.promotion_id;
 438:
                    var10 = var11;
                    var11 = var6 != var11;
                    var6 = null;
                    if(!var11) { _fun0001_ip = 453; continue _fun0001 }
 450:
                    var6 = var10;
 453:
                    var8 = var6;
                    _fun0001_ip = 461; continue _fun0001;
 458: // try_end0
                    return var5;
 461: // try_start_1
                    var6 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var5 = var5[var7];
                    var7 = var6.bind(var2)(var5);
                    var6 = var7.dispatch;
                    var5 = {};
                    var10 = 'ACTIVE_OUTBOUND_PROMOTIONS_FETCH_SUCCESS';
                    var5['type'] = var10;
                    var9 = var9.body;
                    var5['promotions'] = var9;
                    var5['consumedInboundPromotionId'] = var8;
                    var5 = var6.bind(var7)(var5);
 515: // try_end1
                    _fun0001_ip = 564; continue _fun0001;
 517:
                    return var4;
 520: // catch_target0 // catch_target1
                    CatchBlockStart(arg_register=3);
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 6;
                    var3 = var5[var3];
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var6 = 'ACTIVE_OUTBOUND_PROMOTIONS_FETCH_FAIL';
                    var3['type'] = var6;
                    var3 = var4.bind(var5)(var3);
 564:
                    return var2;
 567:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot9 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot9 = var1;
    var4 = function dismissOutboundPromotionNotice() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 6;
            var4 = var4[var1];
            var1 = undefined;
            var6 = var5.bind(var1)(var4);
            var5 = var6.dispatch;
            var4 = {};
            var7 = 'OUTBOUND_PROMOTION_NOTICE_DISMISS';
            var4['type'] = var7;
            var4 = var5.bind(var6)(var4);
            var4 = _closure1_slot6;
            var5 = var4.lastDismissedOutboundPromotionStartDate;
            var _closure2_slot0 = var5;
            var4 = null;
            if(!(var4 != var5)) { _fun0003_ip = 138; continue _fun0003 }
 69:
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 11;
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
                var1 = 12;
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
 138:
            return var1;
        }
    };
    var2 = function fetchActiveBogoPromotion() {
        var1 = undefined;
        var4 = _closure1_slot10;
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
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0004_ip = 280; continue _fun0004 }
 10:
                    var3 = _closure1_slot6;
                    var3 = var3.isFetchingActiveBogoPromotion;
                    if(var3) { _fun0004_ip = 275; continue _fun0004 }
 31: // try_start_0
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var7 = 6;
                    var3 = var5[var7];
                    var6 = undefined;
                    var8 = var4.bind(var6)(var3);
                    var4 = var8.dispatch;
                    var3 = {};
                    var9 = 'ACTIVE_BOGO_PROMOTION_FETCH';
                    var3['type'] = var9;
                    var3 = var4.bind(var8)(var3);
                    var4 = _closure1_slot0;
                    var3 = 9;
                    var3 = var5[var3];
                    var3 = var4.bind(var6)(var3);
                    var5 = var3.HTTP;
                    var4 = var5.get;
                    var3 = {};
                    var8 = _closure1_slot8;
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
                    SaveGenerator(address=154);
 152:
                    return var3;
 154:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0004_ip = 226; continue _fun0004 }
 160:
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
 224: // try_end0
                    _fun0004_ip = 275; continue _fun0004;
 226:
                    return var3;
 229: // catch_target0
                    CatchBlockStart(arg_register=2);
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 6;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.dispatch;
                    var2 = {};
                    var5 = 'ACTIVE_BOGO_PROMOTION_FETCH_FAIL';
                    var2['type'] = var5;
                    var2 = var3.bind(var4)(var2);
 275:
                    var2 = undefined;
                    return var2;
 280:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot10 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot10 = var1;
    var1 = global;
    var12 = var1.Object;
    var11 = var12.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var11.bind(var12)(var3, var1, var6);
    var1 = 0;
    var6 = var9[var1];
    var1 = undefined;
    var6 = var10.bind(var1)(var6);
    var _closure1_slot3 = var6;
    var6 = 1;
    var6 = var9[var6];
    var6 = var10.bind(var1)(var6);
    var _closure1_slot4 = var6;
    var6 = 2;
    var6 = var9[var6];
    var6 = var10.bind(var1)(var6);
    var _closure1_slot5 = var6;
    var6 = 3;
    var6 = var9[var6];
    var6 = var10.bind(var1)(var6);
    var _closure1_slot6 = var6;
    var6 = 4;
    var6 = var9[var6];
    var6 = var8.bind(var1)(var6);
    var6 = var6.PREMIUM_SUBSCRIPTION_APPLICATION;
    var _closure1_slot7 = var6;
    var6 = 5;
    var6 = var9[var6];
    var6 = var8.bind(var1)(var6);
    var6 = var6.Endpoints;
    var _closure1_slot8 = var6;
    var6 = {};
    var6['fetchActiveOutboundPromotions'] = var5;
    var6['dismissOutboundPromotionNotice'] = var4;
    var7 = function markOutboundPromotionsSeen() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 6;
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
    var6['markOutboundPromotionsSeen'] = var7;
    var6['fetchActiveBogoPromotion'] = var2;
    var7 = 13;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/premium/promotions/PromotionsActionCreators.tsx';
    var7 = var8.bind(var9)(var7);
    var3['default'] = var6;
    var3['fetchActiveOutboundPromotions'] = var5;
    var3['dismissOutboundPromotionNotice'] = var4;
    var3['fetchActiveBogoPromotion'] = var2;
    return var1;
})();