// app/modules/premium/promotions/PromotionsActionCreators.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var8 = native2;
    var10 = native3;
    var3 = native6;
    var9 = native7;
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
                    if(var2) { _fun0001_ip = 504; continue _fun0001 }
 12:
                    var2 = undefined;
                    var10 = undefined;
                    var8 = undefined;
                    var11 = undefined;
                    var13 = undefined;
                    var4 = _closure1_slot6;
                    var4 = var4.isFetchingActiveOutboundPromotions;
                    if(var4) { _fun0001_ip = 501; continue _fun0001 }
 43: // try_start_0
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var7 = 6;
                    var4 = var6[var7];
                    var12 = var5.bind(var2)(var4);
                    var5 = var12.dispatch;
                    var4 = {};
                    var14 = 'ACTIVE_OUTBOUND_PROMOTIONS_FETCH';
                    var4['type'] = var14;
                    var4 = var5.bind(var12)(var4);
                    var5 = _closure1_slot0;
                    var4 = 7;
                    var4 = var6[var4];
                    var4 = var5.bind(var2)(var4);
                    var12 = var4.PromotionPreviewExperiment;
                    var6 = var12.getCurrentConfig;
                    var5 = {};
                    var4 = '5731cc_1';
                    var5['location'] = var4;
                    var4 = {};
                    var14 = false;
                    var4['autoTrackExposure'] = var14;
                    var4 = var6.bind(var12)(var5, var4);
                    var5 = var4.previewEnabled;
                    var4 = _closure1_slot8;
                    if(var5) { _fun0001_ip = 161; continue _fun0001 }
 153:
                    var12 = var4.OUTBOUND_PROMOTIONS;
                    _fun0001_ip = 167; continue _fun0001;
 161:
                    var12 = var4.OUTBOUND_PROMOTIONS_PREVIEW;
 167:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 8;
                    var4 = var6[var4];
                    var4 = var5.bind(var2)(var4);
                    var6 = var4.HTTP;
                    var5 = var6.get;
                    var4 = {};
                    var4['url'] = var12;
                    var12 = {};
                    var15 = _closure1_slot4;
                    var15 = var15.locale;
                    var12['locale'] = var15;
                    var4['query'] = var12;
                    var12 = true;
                    var4['oldFormErrors'] = var12;
                    var4['rejectWithError'] = var12;
                    var4 = var5.bind(var6)(var4);
                    SaveGenerator(address=244);
 242:
                    return var4;
 244:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(var5) { _fun0001_ip = 454; continue _fun0001 }
 253:
                    var10 = var4.body;
                    var5 = _closure1_slot6;
                    var8 = var5.consumedInboundPromotionId;
                    var5 = _closure1_slot6;
                    var5 = var5.hasFetchedConsumedInboundPromotionId;
                    if(var5) { _fun0001_ip = 385; continue _fun0001 }
 281:
                    var6 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var5 = 9;
                    var5 = var12[var5];
                    var12 = var6.bind(var2)(var5);
                    var6 = var12.fetchUserEntitlementsForApplication;
                    var5 = _closure1_slot7;
                    var5 = var6.bind(var12)(var5, var14);
                    SaveGenerator(address=321);
 319:
                    return var5;
 321:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                    if(var6) { _fun0001_ip = 382; continue _fun0001 }
 327:
                    var12 = var5.find;
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
                    var12 = var12.bind(var5)(var6);
                    var13 = var12;
                    var6 = null;
                    var14 = var6 == var12;
                    var12 = undefined;
                    if(var14) { _fun0001_ip = 362; continue _fun0001 }
 356:
                    var12 = var13.promotion_id;
 362:
                    var11 = var12;
                    var12 = var6 != var12;
                    var6 = null;
                    if(!var12) { _fun0001_ip = 377; continue _fun0001 }
 374:
                    var6 = var11;
 377:
                    var8 = var6;
                    _fun0001_ip = 385; continue _fun0001;
 382: // try_end0
                    return var5;
 385: // try_start_1
                    var6 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var5 = var5[var7];
                    var7 = var6.bind(var2)(var5);
                    var6 = var7.dispatch;
                    var5 = {};
                    var11 = 'ACTIVE_OUTBOUND_PROMOTIONS_FETCH_SUCCESS';
                    var5['type'] = var11;
                    var11 = var10;
                    var10 = var11.map;
                    var9 = function(arg1) {
                        var3 = _closure1_slot5;
                        var2 = var3.createFromServer;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var9 = var10.bind(var11)(var9);
                    var5['activeOutboundPromotions'] = var9;
                    var5['consumedInboundPromotionId'] = var8;
                    var5 = var6.bind(var7)(var5);
 452: // try_end1
                    _fun0001_ip = 501; continue _fun0001;
 454:
                    return var4;
 457: // catch_target0 // catch_target1
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
 501:
                    return var2;
 504:
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
            var3 = 10;
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
                var1 = 11;
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
                    if(var2) { _fun0004_ip = 279; continue _fun0004 }
 10:
                    var3 = _closure1_slot6;
                    var3 = var3.isFetchingActiveBogoPromotion;
                    if(var3) { _fun0004_ip = 274; continue _fun0004 }
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
                    var3 = 8;
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
                    SaveGenerator(address=153);
 151:
                    return var3;
 153:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0004_ip = 225; continue _fun0004 }
 159:
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
 223: // try_end0
                    _fun0004_ip = 274; continue _fun0004;
 225:
                    return var3;
 228: // catch_target0
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
 274:
                    var2 = undefined;
                    return var2;
 279:
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
    var7 = 12;
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