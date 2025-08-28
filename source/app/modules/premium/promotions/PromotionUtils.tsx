// app/modules/premium/promotions/PromotionUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
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
    var _closure1_slot12 = var1;
    var1 = function _fetchClaimedOutboundPromotionCodes() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 136; continue _fun0001 }
 10:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 10;
                    var4 = var4[var2];
                    var2 = undefined;
                    var2 = var5.bind(var2)(var4);
                    var5 = var2.HTTP;
                    var4 = var5.get;
                    var2 = {};
                    var6 = _closure1_slot11;
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
 103:
                    return var2;
 105:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 133; continue _fun0001 }
 111:
                    var5 = var2.body;
                    var4 = var5.map;
                    var3 = _closure1_slot12;
                    var3 = var4.bind(var5)(var3);
                    return var3;
 133:
                    return var2;
 136:
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
    var1 = function _claimOutboundPromotion() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 108; continue _fun0002 }
 7:
                    var5 = _closure1_slot12;
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 10;
                    var2 = var4[var2];
                    var4 = undefined;
                    var2 = var3.bind(var4)(var2);
                    var6 = var2.HTTP;
                    var3 = var6.post;
                    var2 = {};
                    var9 = _closure1_slot11;
                    var8 = var9.CLAIM_OUTBOUND_PROMOTION_CODE;
                    var7 = arg1;
                    var7 = var8.bind(var9)(var7);
                    var2['url'] = var7;
                    var7 = false;
                    var2['rejectWithError'] = var7;
                    var2 = var3.bind(var6)(var2);
                    SaveGenerator(address=86);
 84:
                    return var2;
 86:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0002_ip = 105; continue _fun0002 }
 92:
                    var3 = var2.body;
                    var3 = var5.bind(var4)(var3);
                    return var3;
 105:
                    return var2;
 108:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot14 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot14 = var1;
    var4 = function getNextUnseenOutboundPromotionId() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = _closure1_slot9;
            var5 = var1.outboundPromotions;
            var1 = _closure1_slot9;
            var1 = var1.consumedInboundPromotionId;
            var _closure2_slot0 = var1;
            var4 = var5.filter;
            var1 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var1 = arg1;
                    var2 = var1.id;
                    var5 = var1.flags;
                    var1 = _closure2_slot0;
                    var1 = var2 !== var1;
                    if(!var1) { _fun0004_ip = 77; continue _fun0004 }
 27:
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 11;
                    var4 = var4[var3];
                    var3 = undefined;
                    var4 = var6.bind(var3)(var4);
                    var3 = var4.hasFlag;
                    var2 = _closure1_slot10;
                    var2 = var2.SUPPRESS_NOTIFICATION;
                    var2 = var3.bind(var4)(var5, var2);
                    var1 = !var2;
 77:
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
            if(var6) { _fun0003_ip = 130; continue _fun0003 }
 73:
            var6 = var5.recurringDismissibleContentStates;
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var5 = 12;
            var5 = var10[var5];
            var5 = var9.bind(var8)(var5);
            var5 = var5.DismissibleContent;
            var5 = var5.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR;
            var5 = var6[var5];
            var6 = var1 == var5;
            var4 = undefined;
            if(var6) { _fun0003_ip = 130; continue _fun0003 }
 124:
            var4 = var5.lastDismissedObjectId;
 130:
            var _closure2_slot1 = var4;
            var6 = var7;
            if(!(var1 != var4)) { _fun0003_ip = 156; continue _fun0003 }
 141:
            var5 = var7.filter;
            var4 = function(arg1) {
                var1 = arg1;
                var4 = var1.id;
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 13;
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
 156:
            var5 = _closure1_slot7;
            var4 = var5.getPremiumTypeSubscription;
            var5 = var4.bind(var5)();
            var4 = var1 == var5;
            if(var4) { _fun0003_ip = 186; continue _fun0003 }
 177:
            var5 = var5.hasActiveTrial;
            var4 = !var5;
 186:
            var5 = _closure1_slot8;
            var3 = var5.hasAnyUnexpiredOffer;
            var3 = var3.bind(var5)();
            if(!var4) { _fun0003_ip = 209; continue _fun0003 }
 203:
            var5 = var6;
            if(!var3) { _fun0003_ip = 224; continue _fun0003 }
 209:
            var4 = var6.filter;
            var3 = function(arg1) {
                var2 = arg1;
                var1 = var2.isRedeemableByTrialUsers;
                var1 = var1.bind(var2)();
                return var1;
            };
            var5 = var4.bind(var6)(var3);
 224:
            var4 = var5.length;
            var3 = 0;
            var1 = null;
            if(!(var3 !== var4)) { _fun0003_ip = 262; continue _fun0003 }
 237:
            var4 = var5.sort;
            var2 = function(arg1, arg2) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
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
                    if(!var2) { _fun0005_ip = 88; continue _fun0005 }
 82:
                    var1 = -1;
 88:
                    return var1;
                }
            };
            var2 = var4.bind(var5)(var2);
            var2 = var2[var3];
            var1 = var2.id;
 262:
            return var1;
        }
    };
    var _closure1_slot15 = var4;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot6 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot7 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot8 = var5;
    var5 = 6;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot9 = var5;
    var5 = 7;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.PromotionFlags;
    var _closure1_slot10 = var5;
    var5 = 8;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.Endpoints;
    var _closure1_slot11 = var5;
    var5 = 16;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/premium/promotions/PromotionUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function getPromotionImageURL(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var9 = arg1;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 9;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.isThemeDark;
            var1 = arg2;
            var1 = var2.bind(var3)(var1);
            var8 = 'logo-light';
            if(!var1) { _fun0006_ip = 57; continue _fun0006 }
 51:
            var8 = 'logo-dark';
 57:
            var2 = global;
            var1 = var2.window;
            var1 = var1.GLOBAL_ENV;
            var7 = var1.CDN_HOST;
            var1 = null;
            if(!(var1 == var7)) { _fun0006_ip = 156; continue _fun0006 }
 83:
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
            _fun0006_ip = 202; continue _fun0006;
 156:
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
 202:
            return var1;
        }
    };
    var3['getPromotionImageURL'] = var5;
    var5 = function fetchClaimedOutboundPromotionCodes() {
        var1 = undefined;
        var4 = _closure1_slot13;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['fetchClaimedOutboundPromotionCodes'] = var5;
    var5 = function claimOutboundPromotion() {
        var1 = undefined;
        var4 = _closure1_slot14;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['claimOutboundPromotion'] = var5;
    var5 = function getOutboundPromotionRedemptionUrl(arg1, arg2) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var2 = arg2;
            var3 = var2.outboundRedemptionUrlFormat;
            var1 = null;
            if(!(var1 != var3)) { _fun0007_ip = 29; continue _fun0007 }
 15:
            var4 = var2.outboundRedemptionUrlFormat;
            var3 = '';
            if(!(var3 === var4)) { _fun0007_ip = 51; continue _fun0007 }
 29:
            var3 = var2.outboundRedemptionPageLink;
            var4 = var1 != var3;
            var1 = '';
            if(!var4) { _fun0007_ip = 49; continue _fun0007 }
 46:
            var1 = var3;
 49:
            _fun0007_ip = 92; continue _fun0007;
 51:
            var5 = var2.outboundRedemptionUrlFormat;
            var4 = var5.replace;
            var2 = global;
            var6 = var2.encodeURIComponent;
            var3 = undefined;
            var2 = arg1;
            var3 = var6.bind(var3)(var2);
            var2 = '{code}';
            var1 = var4.bind(var5)(var2, var3);
 92:
            return var1;
        }
    };
    var3['getOutboundPromotionRedemptionUrl'] = var5;
    var3['getNextUnseenOutboundPromotionId'] = var4;
    var4 = function shouldShowOutboundPromotionNotice() {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var1 = _closure1_slot15;
            var7 = undefined;
            var6 = var1.bind(var7)();
            var1 = null;
            var1 = var1 != var6;
            if(!var1) { _fun0008_ip = 95; continue _fun0008 }
 22:
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 14;
            var2 = var8[var2];
            var5 = var3.bind(var7)(var2);
            var4 = var5.isTimeRecurringSnowflakeBoundDismissibleContentDismissed;
            var2 = 12;
            var2 = var8[var2];
            var2 = var3.bind(var7)(var2);
            var2 = var2.DismissibleContent;
            var3 = var2.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR;
            var2 = {};
            var7 = 259200000;
            var2['cooldownDurationMs'] = var7;
            var2 = var4.bind(var5)(var3, var6, var2);
            var1 = !var2;
 95:
            return var1;
        }
    };
    var3['shouldShowOutboundPromotionNotice'] = var4;
    var4 = function shouldShowOutboundPromotionOnPlatform(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var4 = arg1;
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 15;
            var3 = var3[var1];
            var1 = undefined;
            var3 = var5.bind(var1)(var3);
            var1 = var3.isIOS;
            var1 = var1.bind(var3)();
            var1 = !var1;
            if(var1) { _fun0009_ip = 68; continue _fun0009 }
 44:
            var3 = var4.hasFlag;
            var2 = _closure1_slot10;
            var2 = var2.IS_BLOCKED_IOS;
            var2 = var3.bind(var4)(var2);
            var1 = !var2;
 68:
            return var1;
        }
    };
    var3['shouldShowOutboundPromotionOnPlatform'] = var4;
    var2 = function isTrialUserEligibleToSeeOutboundPromotion(arg1, arg2) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
            var3 = arg1;
            var2 = var3.id;
            var1 = arg2;
            var2 = var1[var2];
            var1 = null;
            var1 = var1 != var2;
            if(var1) { _fun0010_ip = 34; continue _fun0010 }
 24:
            var2 = var3.isRedeemableByTrialUsers;
            var1 = var2.bind(var3)();
 34:
            return var1;
        }
    };
    var3['isTrialUserEligibleToSeeOutboundPromotion'] = var2;
    return var1;
})();