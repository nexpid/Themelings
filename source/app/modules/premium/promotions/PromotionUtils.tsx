// app/modules/premium/promotions/PromotionUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var8;
    var1 = function claimedOutboundPromotionCodeFromServer(arg1) {
        var2 = arg1;
        var1 = {};
        var3 = var2.code;
        var1['code'] = var3;
        var3 = var2.user_id;
        var1['userId'] = var3;
        var3 = var2.claimed_at;
        var1['claimedAt'] = var3;
        var4 = _closure1_slot6;
        var3 = var4.createFromServer;
        var2 = var2.promotion;
        var2 = var3.bind(var4)(var2);
        var1['promotion'] = var2;
        return var1;
    };
    var _closure1_slot14 = var1;
    var1 = function _fetchClaimedOutboundPromotionCodes() {
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
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 11;
                    var4 = var4[var2];
                    var2 = undefined;
                    var2 = var5.bind(var2)(var4);
                    var5 = var2.HTTP;
                    var4 = var5.get;
                    var2 = {};
                    var6 = _closure1_slot12;
                    var6 = var6.CLAIMED_OUTBOUND_PROMOTION_CODES;
                    var2['url'] = var6;
                    var6 = {};
                    var7 = _closure1_slot4;
                    var7 = var7.locale;
                    var6['locale'] = var7;
                    var2['query'] = var6;
                    var6 = true;
                    var2['oldFormErrors'] = var6;
                    var6 = false;
                    var2['rejectWithError'] = var6;
                    var2 = var4.bind(var5)(var2);
                    SaveGenerator(address=105);
case 4:
                    return var2;
case 5:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                    var5 = var2.body;
                    var4 = var5.map;
                    var3 = _closure1_slot14;
                    var3 = var4.bind(var5)(var3);
                    return var3;
case 6:
                    return var2;
case 2:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot15 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot15 = var1;
    var1 = function _claimOutboundPromotion() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var11 = var2.promotionId;
                    var14 = var2.promotionTitle;
                    var12 = var2.partnerId;
                    var13 = var2.analyticsLocations;
                    var6 = undefined;
                    SaveGenerator(address=43);
case 10:
                    return var6;
case 11:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var3 = 11;
                    var3 = var7[var3];
                    var3 = var5.bind(var6)(var3);
                    var7 = var3.HTTP;
                    var5 = var7.post;
                    var3 = {};
                    var9 = _closure1_slot12;
                    var8 = var9.CLAIM_OUTBOUND_PROMOTION_CODE;
                    var8 = var8.bind(var9)(var11);
                    var3['url'] = var8;
                    var8 = false;
                    var3['rejectWithError'] = var8;
                    var3 = var5.bind(var7)(var3);
                    SaveGenerator(address=122);
case 14:
                    return var3;
case 15:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0002_ip = 16; continue _fun0002 }
case 17:
                    var5 = var3.body;
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var7 = 12;
                    var7 = var9[var7];
                    var8 = var8.bind(var6)(var7);
                    var7 = var8.isIOS;
                    var8 = var7.bind(var8)();
                    var7 = _closure1_slot13;
                    if(var8) { _fun0002_ip = 18; continue _fun0002 }
case 19:
                    var15 = var7.ANDROID;
                    _fun0002_ip = 20; continue _fun0002;
case 18:
                    var15 = var7.IOS;
case 20:
                    var8 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var7 = 13;
                    var7 = var9[var7];
                    var10 = var8.bind(var6)(var7);
                    var9 = var10.track;
                    var7 = _closure1_slot11;
                    var8 = var7.OUTBOUND_PROMOTION_CLAIMED;
                    var7 = {};
                    var7['platform'] = var15;
                    var15 = var3.status;
                    var7['status'] = var15;
                    var7['location_stack'] = var13;
                    var7['promotion_id'] = var11;
                    var11 = null;
                    var15 = var11 != var14;
                    var13 = null;
                    if(!var15) { _fun0002_ip = 21; continue _fun0002 }
case 22:
                    var13 = var14;
case 21:
                    var7['name'] = var13;
                    var13 = var11 != var12;
                    var11 = null;
                    if(!var13) { _fun0002_ip = 23; continue _fun0002 }
case 24:
                    var11 = var12;
case 23:
                    var7['partner'] = var11;
                    var7 = var9.bind(var10)(var8, var7);
                    var4 = _closure1_slot14;
                    var4 = var4.bind(var6)(var5);
                    return var4;
case 16:
                    return var3;
case 12:
                    return var2;
case 8:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot16 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot16 = var1;
    var5 = function getNextUnseenOutboundPromotionId() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = _closure1_slot9;
            var5 = var1.outboundPromotions;
            var1 = _closure1_slot9;
            var1 = var1.consumedInboundPromotionId;
            var _closure2_slot0 = var1;
            var4 = var5.filter;
            var1 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var4 = arg1;
                    var2 = var4.id;
                    var1 = _closure2_slot0;
                    var1 = var2 !== var1;
                    if(!var1) { _fun0004_ip = 25; continue _fun0004 }
case 26:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 14;
                    var5 = var5[var3];
                    var3 = undefined;
                    var6 = var6.bind(var3)(var5);
                    var5 = var6.hasFlag;
                    var3 = var4.flags;
                    var2 = _closure1_slot10;
                    var2 = var2.SUPPRESS_NOTIFICATION;
                    var2 = var5.bind(var6)(var3, var2);
                    var1 = !var2;
case 25:
                    if(!var1) { _fun0004_ip = 27; continue _fun0004 }
case 28:
                    var3 = _closure1_slot18;
                    var2 = undefined;
                    var2 = var3.bind(var2)(var4);
                    var1 = !var2;
case 27:
                    return var1;
                }
            };
            var7 = var4.bind(var5)(var1);
            var1 = _closure1_slot5;
            var1 = var1.settings;
            var5 = var1.userContent;
            var1 = null;
            var6 = var1 == var5;
            var8 = undefined;
            var4 = undefined;
            if(var6) { _fun0003_ip = 29; continue _fun0003 }
case 30:
            var6 = var5.recurringDismissibleContentStates;
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var5 = 15;
            var5 = var10[var5];
            var5 = var9.bind(var8)(var5);
            var5 = var5.DismissibleContent;
            var5 = var5.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR;
            var5 = var6[var5];
            var6 = var1 == var5;
            var4 = undefined;
            if(var6) { _fun0003_ip = 29; continue _fun0003 }
case 31:
            var4 = var5.lastDismissedObjectId;
case 29:
            var _closure2_slot1 = var4;
            var6 = var7;
            if(!(var1 != var4)) { _fun0003_ip = 32; continue _fun0003 }
case 33:
            var5 = var7.filter;
            var4 = function(arg1) {
                var1 = arg1;
                var4 = var1.id;
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 16;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.compare;
                var1 = _closure2_slot1;
                var2 = var2.bind(var3)(var4, var1);
                var1 = 1;
                var1 = var1 === var2;
                return var1;
            };
            var6 = var5.bind(var7)(var4);
case 32:
            var5 = _closure1_slot7;
            var4 = var5.getPremiumTypeSubscription;
            var5 = var4.bind(var5)();
            var4 = var1 == var5;
            if(var4) { _fun0003_ip = 34; continue _fun0003 }
case 35:
            var5 = var5.hasActiveTrial;
            var4 = !var5;
case 34:
            var5 = _closure1_slot8;
            var3 = var5.hasAnyUnexpiredOffer;
            var3 = var3.bind(var5)();
            if(!var4) { _fun0003_ip = 36; continue _fun0003 }
case 37:
            var5 = var6;
            if(!var3) { _fun0003_ip = 38; continue _fun0003 }
case 36:
            var4 = var6.filter;
            var3 = function(arg1) {
                var2 = arg1;
                var1 = var2.isRedeemableByTrialUsers;
                var1 = var1.bind(var2)();
                return var1;
            };
            var5 = var4.bind(var6)(var3);
case 38:
            var4 = var5.length;
            var3 = 0;
            var1 = null;
            if(!(var3 !== var4)) { _fun0003_ip = 21; continue _fun0003 }
case 39:
            var4 = var5.sort;
            var2 = function(arg1, arg2) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = global;
                    var4 = var1.Date;
                    var2 = arg1;
                    var5 = var2.startDate;
                    var3 = var4.prototype;
                    var3 = Object.create(var3, {constructor: {value: var4}});
                    var6 = var3;
                    var2 = new var6[var4](var5, var4);
                    var2 = var2 instanceof Object ? var2 : var3;
                    var4 = var1.Date;
                    var1 = arg2;
                    var5 = var1.startDate;
                    var3 = var4.prototype;
                    var3 = Object.create(var3, {constructor: {value: var4}});
                    var6 = var3;
                    var1 = new var6[var4](var5, var4);
                    var1 = var1 instanceof Object ? var1 : var3;
                    var2 = var2 < var1;
                    var1 = 1;
                    if(!var2) { _fun0005_ip = 40; continue _fun0005 }
case 41:
                    var1 = -1;
case 40:
                    return var1;
                }
            };
            var2 = var4.bind(var5)(var2);
            var2 = var2[var3];
            var1 = var2.id;
case 21:
            return var1;
        }
    };
    var _closure1_slot17 = var5;
    var4 = function isLogitechPromotion(arg1) {
        var1 = arg1;
        var2 = var1.partnerId;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 18;
        var3 = var3[var1];
        var1 = undefined;
        var1 = var4.bind(var1)(var3);
        var1 = var1.LOGITECH_PARTNER_ID;
        var1 = var2 === var1;
        return var1;
    };
    var _closure1_slot18 = var4;
    var1 = global;
    var11 = var1.Object;
    var10 = var11.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var6);
    var1 = 0;
    var6 = var8[var1];
    var1 = undefined;
    var6 = var9.bind(var1)(var6);
    var _closure1_slot3 = var6;
    var6 = 1;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot4 = var6;
    var6 = 2;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot5 = var6;
    var6 = 3;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot6 = var6;
    var6 = 4;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot7 = var6;
    var6 = 5;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot8 = var6;
    var6 = 6;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot9 = var6;
    var6 = 7;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var6 = var6.PromotionFlags;
    var _closure1_slot10 = var6;
    var6 = 8;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var9 = var6.AnalyticEvents;
    var _closure1_slot11 = var9;
    var9 = var6.Endpoints;
    var _closure1_slot12 = var9;
    var6 = var6.Platforms;
    var _closure1_slot13 = var6;
    var6 = 9;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var6 = var6.ActivityPlatform;
    var6 = 19;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/premium/promotions/PromotionUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var6 = function getPromotionImageURL(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var9 = arg1;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 10;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.isThemeDark;
            var1 = arg2;
            var1 = var2.bind(var3)(var1);
            var8 = 'logo-light';
            if(!var1) { _fun0006_ip = 42; continue _fun0006 }
case 43:
            var8 = 'logo-dark';
case 42:
            var2 = global;
            var1 = var2.window;
            var1 = var1.GLOBAL_ENV;
            var7 = var1.CDN_HOST;
            var1 = null;
            if(!(var1 == var7)) { _fun0006_ip = 32; continue _fun0006 }
case 44:
            var1 = var2.location;
            var18 = var1.protocol;
            var1 = var2.window;
            var1 = var1.GLOBAL_ENV;
            var17 = var1.API_ENDPOINT;
            var1 = var2.HermesInternal;
            var6 = var1.concat;
            var19 = '';
            var16 = '/promotions/';
            var14 = '/';
            var12 = '?size=256';
            var15 = var9;
            var13 = var8;
            var1 = var19[var6](var18, var17, var16, var15, var14, var13, var12, var11);
            _fun0006_ip = 45; continue _fun0006;
case 32:
            var2 = var2.HermesInternal;
            var6 = var2.concat;
            var19 = 'https://';
            var17 = '/promotions/';
            var15 = '/';
            var13 = '?size=256';
            var18 = var7;
            var16 = var9;
            var14 = var8;
            var1 = var19[var6](var18, var17, var16, var15, var14, var13, var12);
case 45:
            return var1;
        }
    };
    var3['getPromotionImageURL'] = var6;
    var6 = function fetchClaimedOutboundPromotionCodes() {
        var1 = undefined;
        var4 = _closure1_slot15;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['fetchClaimedOutboundPromotionCodes'] = var6;
    var6 = function claimOutboundPromotion() {
        var1 = undefined;
        var4 = _closure1_slot16;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['claimOutboundPromotion'] = var6;
    var6 = function getOutboundPromotionRedemptionUrl(arg1, arg2) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var2 = arg2;
            var3 = var2.outboundRedemptionUrlFormat;
            var1 = null;
            if(!(var1 != var3)) { _fun0007_ip = 46; continue _fun0007 }
case 47:
            var4 = var2.outboundRedemptionUrlFormat;
            var3 = '';
            if(!(var3 === var4)) { _fun0007_ip = 43; continue _fun0007 }
case 46:
            var3 = var2.outboundRedemptionPageLink;
            var4 = var1 != var3;
            var1 = '';
            if(!var4) { _fun0007_ip = 48; continue _fun0007 }
case 49:
            var1 = var3;
case 48:
            _fun0007_ip = 50; continue _fun0007;
case 43:
            var5 = var2.outboundRedemptionUrlFormat;
            var4 = var5.replace;
            var2 = global;
            var6 = var2.encodeURIComponent;
            var3 = undefined;
            var2 = arg1;
            var3 = var6.bind(var3)(var2);
            var2 = '{code}';
            var1 = var4.bind(var5)(var2, var3);
case 50:
            return var1;
        }
    };
    var3['getOutboundPromotionRedemptionUrl'] = var6;
    var3['getNextUnseenOutboundPromotionId'] = var5;
    var5 = function shouldShowOutboundPromotionNotice() {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var1 = _closure1_slot17;
            var7 = undefined;
            var6 = var1.bind(var7)();
            var1 = null;
            var1 = var1 != var6;
            if(!var1) { _fun0008_ip = 51; continue _fun0008 }
case 26:
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 17;
            var2 = var8[var2];
            var5 = var3.bind(var7)(var2);
            var4 = var5.isTimeRecurringSnowflakeBoundDismissibleContentDismissed;
            var2 = 15;
            var2 = var8[var2];
            var2 = var3.bind(var7)(var2);
            var2 = var2.DismissibleContent;
            var3 = var2.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR;
            var2 = {};
            var7 = 259200000;
            var2['cooldownDurationMs'] = var7;
            var2 = var4.bind(var5)(var3, var6, var2);
            var1 = !var2;
case 51:
            return var1;
        }
    };
    var3['shouldShowOutboundPromotionNotice'] = var5;
    var3['isLogitechPromotion'] = var4;
    var4 = function shouldShowOutboundPromotionOnPlatform(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var4 = arg1;
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 12;
            var3 = var3[var1];
            var1 = undefined;
            var3 = var5.bind(var1)(var3);
            var1 = var3.isIOS;
            var1 = var1.bind(var3)();
            var1 = !var1;
            if(var1) { _fun0009_ip = 52; continue _fun0009 }
case 53:
            var3 = var4.hasFlag;
            var2 = _closure1_slot10;
            var2 = var2.IS_BLOCKED_IOS;
            var2 = var3.bind(var4)(var2);
            var1 = !var2;
case 52:
            return var1;
        }
    };
    var3['shouldShowOutboundPromotionOnPlatform'] = var4;
    var4 = function isTrialUserEligibleToSeeOutboundPromotion(arg1, arg2) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var3 = arg1;
            var2 = var3.id;
            var1 = arg2;
            var2 = var1[var2];
            var1 = null;
            var1 = var1 != var2;
            if(var1) { _fun0010_ip = 54; continue _fun0010 }
case 55:
            var2 = var3.isRedeemableByTrialUsers;
            var1 = var2.bind(var3)();
case 54:
            return var1;
        }
    };
    var3['isTrialUserEligibleToSeeOutboundPromotion'] = var4;
    var2 = function isRecurringPromotion(arg1) {
        var1 = arg1;
        var2 = var1.promotionType;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 18;
        var3 = var3[var1];
        var1 = undefined;
        var1 = var4.bind(var1)(var3);
        var1 = var1.PromotionTypes;
        var1 = var1.THIRD_PARTY_OUTBOUND_RECURRING;
        var1 = var2 === var1;
        return var1;
    };
    var3['isRecurringPromotion'] = var2;
    return var1;
})();