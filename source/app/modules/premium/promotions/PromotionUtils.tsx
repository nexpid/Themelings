// app/modules/premium/promotions/PromotionUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var10 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var11 = dependencyMap;
    var _closure1_slot0 = var10;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var11;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
case 2:
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var3["@@iterator"];
case 4:
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var7 = {};
            var9 = var7.toString;
            var7 = var9.call;
            var11 = var7.bind(var9)(var3);
            var10 = var11.slice;
            var9 = 8;
            var7 = -1;
            var9 = var10.bind(var11)(var9, var7);
            var7 = 'Object';
            var7 = var7 === var9;
            if(!var7) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var7 = var3.constructor;
case 14:
            var10 = var9;
            if(!var7) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var7 = var3.constructor;
            var10 = var7.name;
case 16:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 20:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 23; continue _fun0001 }
case 21:
            var9 = _closure1_slot14;
            var7 = var9.bind(var8)(var3, var8);
case 23:
            _fun0001_ip = 24; continue _fun0001;
case 18:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
case 24:
            var6 = var7;
            _fun0001_ip = 10; continue _fun0001;
case 12:
            var7 = _closure1_slot14;
            var6 = var7.bind(var8)(var3, var8);
case 10:
            var4 = var6;
            if(var4) { _fun0001_ip = 8; continue _fun0001 }
case 25:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
case 8:
            if(!var4) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            _closure2_slot0 = var4;
case 26:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 28; continue _fun0002 }
case 29:
                    var1 = {};
                    var2 = false;
                    var1['done'] = var2;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var2 = parseFloat(var2);
                    var4 = var2 + 1;
                    _closure2_slot1 = var4;
                    var2 = var3[var2];
                    var1['value'] = var2;
                    _fun0002_ip = 30; continue _fun0002;
case 28:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
case 30:
                    return var1;
                }
            };
            return var1;
case 6:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 31; continue _fun0003 }
case 32:
            var2 = var4.length;
            var1 = var3 > var2;
case 31:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
case 34:
            var2 = var4.length;
case 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 35; continue _fun0003 }
case 4:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 4; continue _fun0003 }
case 35:
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var8 = function claimedOutboundPromotionCodeFromServer(arg1) {
        var2 = arg1;
        var1 = {};
        var3 = var2.code;
        var1['code'] = var3;
        var3 = var2.user_id;
        var1['userId'] = var3;
        var3 = var2.claimed_at;
        var1['claimedAt'] = var3;
        var4 = _closure1_slot5;
        var3 = var4.createFromServer;
        var2 = var2.promotion;
        var2 = var3.bind(var4)(var2);
        var1['promotion'] = var2;
        return var1;
    };
    var _closure1_slot15 = var8;
    var1 = function _claimOutboundPromotion() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0004_ip = 36; continue _fun0004 }
case 37:
                    var11 = var2.promotionId;
                    var14 = var2.promotionTitle;
                    var12 = var2.partnerId;
                    var13 = var2.analyticsLocations;
                    var6 = undefined;
                    SaveGenerator(address=43);
case 38:
                    return var6;
case 39:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0004_ip = 40; continue _fun0004 }
case 41:
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var3 = 10;
                    var3 = var7[var3];
                    var3 = var5.bind(var6)(var3);
                    var7 = var3.HTTP;
                    var5 = var7.post;
                    var3 = {};
                    var9 = _closure1_slot11;
                    var8 = var9.CLAIM_OUTBOUND_PROMOTION_CODE;
                    var8 = var8.bind(var9)(var11);
                    var3['url'] = var8;
                    var8 = false;
                    var3['rejectWithError'] = var8;
                    var3 = var5.bind(var7)(var3);
                    SaveGenerator(address=122);
case 42:
                    return var3;
case 43:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0004_ip = 44; continue _fun0004 }
case 45:
                    var5 = var3.body;
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var7 = 11;
                    var7 = var9[var7];
                    var8 = var8.bind(var6)(var7);
                    var7 = var8.isIOS;
                    var8 = var7.bind(var8)();
                    var7 = _closure1_slot12;
                    if(var8) { _fun0004_ip = 46; continue _fun0004 }
case 47:
                    var15 = var7.ANDROID;
                    _fun0004_ip = 19; continue _fun0004;
case 46:
                    var15 = var7.IOS;
case 19:
                    var8 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var7 = 12;
                    var7 = var9[var7];
                    var10 = var8.bind(var6)(var7);
                    var9 = var10.track;
                    var7 = _closure1_slot10;
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
                    if(!var15) { _fun0004_ip = 48; continue _fun0004 }
case 49:
                    var13 = var14;
case 48:
                    var7['name'] = var13;
                    var13 = var11 != var12;
                    var11 = null;
                    if(!var13) { _fun0004_ip = 50; continue _fun0004 }
case 51:
                    var11 = var12;
case 50:
                    var7['partner'] = var11;
                    var7 = var9.bind(var10)(var8, var7);
                    var4 = _closure1_slot15;
                    var4 = var4.bind(var6)(var5);
                    return var4;
case 44:
                    return var3;
case 40:
                    return var2;
case 36:
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
    var7 = function getNextUnseenOutboundPromotionId() {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = _closure1_slot8;
            var5 = var1.outboundPromotions;
            var1 = _closure1_slot8;
            var1 = var1.consumedInboundPromotionId;
            var _closure2_slot0 = var1;
            var4 = var5.filter;
            var1 = function(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var4 = arg1;
                    var2 = var4.id;
                    var1 = _closure2_slot0;
                    var1 = var2 !== var1;
                    if(!var1) { _fun0006_ip = 52; continue _fun0006 }
case 53:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 13;
                    var5 = var5[var3];
                    var3 = undefined;
                    var6 = var6.bind(var3)(var5);
                    var5 = var6.hasFlag;
                    var3 = var4.flags;
                    var2 = _closure1_slot9;
                    var2 = var2.SUPPRESS_NOTIFICATION;
                    var2 = var5.bind(var6)(var3, var2);
                    var1 = !var2;
case 52:
                    if(!var1) { _fun0006_ip = 54; continue _fun0006 }
case 55:
                    var3 = _closure1_slot18;
                    var2 = undefined;
                    var2 = var3.bind(var2)(var4);
                    var1 = !var2;
case 54:
                    return var1;
                }
            };
            var7 = var4.bind(var5)(var1);
            var1 = _closure1_slot4;
            var1 = var1.settings;
            var5 = var1.userContent;
            var1 = null;
            var6 = var1 == var5;
            var8 = undefined;
            var4 = undefined;
            if(var6) { _fun0005_ip = 56; continue _fun0005 }
case 57:
            var6 = var5.recurringDismissibleContentStates;
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var5 = 14;
            var5 = var10[var5];
            var5 = var9.bind(var8)(var5);
            var5 = var5.DismissibleContent;
            var5 = var5.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR;
            var5 = var6[var5];
            var6 = var1 == var5;
            var4 = undefined;
            if(var6) { _fun0005_ip = 56; continue _fun0005 }
case 58:
            var4 = var5.lastDismissedObjectId;
case 56:
            var _closure2_slot1 = var4;
            var6 = var7;
            if(!(var1 != var4)) { _fun0005_ip = 59; continue _fun0005 }
case 60:
            var5 = var7.filter;
            var4 = function(arg1) {
                var1 = arg1;
                var4 = var1.id;
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 15;
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
case 59:
            var5 = _closure1_slot6;
            var4 = var5.getPremiumTypeSubscription;
            var5 = var4.bind(var5)();
            var4 = var1 == var5;
            if(var4) { _fun0005_ip = 61; continue _fun0005 }
case 62:
            var5 = var5.hasActiveTrial;
            var4 = !var5;
case 61:
            var5 = _closure1_slot7;
            var3 = var5.hasAnyUnexpiredOffer;
            var3 = var3.bind(var5)();
            if(!var4) { _fun0005_ip = 63; continue _fun0005 }
case 64:
            var5 = var6;
            if(!var3) { _fun0005_ip = 65; continue _fun0005 }
case 63:
            var4 = var6.filter;
            var3 = function(arg1) {
                var2 = arg1;
                var1 = var2.isRedeemableByTrialUsers;
                var1 = var1.bind(var2)();
                return var1;
            };
            var5 = var4.bind(var6)(var3);
case 65:
            var4 = var5.length;
            var3 = 0;
            var1 = null;
            if(!(var3 !== var4)) { _fun0005_ip = 48; continue _fun0005 }
case 66:
            var4 = var5.sort;
            var2 = function(arg1, arg2) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
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
                    if(!var2) { _fun0007_ip = 67; continue _fun0007 }
case 68:
                    var1 = -1;
case 67:
                    return var1;
                }
            };
            var2 = var4.bind(var5)(var2);
            var2 = var2[var3];
            var1 = var2.id;
case 48:
            return var1;
        }
    };
    var _closure1_slot17 = var7;
    var6 = function isLogitechPromotion(arg1) {
        var1 = arg1;
        var2 = var1.partnerId;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 17;
        var3 = var3[var1];
        var1 = undefined;
        var1 = var4.bind(var1)(var3);
        var1 = var1.LOGITECH_PARTNER_ID;
        var1 = var2 === var1;
        return var1;
    };
    var _closure1_slot18 = var6;
    var5 = function shouldShowOutboundPromotionOnPlatform(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var4 = arg1;
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 11;
            var3 = var3[var1];
            var1 = undefined;
            var3 = var5.bind(var1)(var3);
            var1 = var3.isIOS;
            var1 = var1.bind(var3)();
            var1 = !var1;
            if(var1) { _fun0008_ip = 69; continue _fun0008 }
case 70:
            var3 = var4.hasFlag;
            var2 = _closure1_slot9;
            var2 = var2.IS_BLOCKED_IOS;
            var2 = var3.bind(var4)(var2);
            var1 = !var2;
case 69:
            return var1;
        }
    };
    var _closure1_slot19 = var5;
    var4 = function isRecurringPromotion(arg1) {
        var1 = arg1;
        var2 = var1.promotionType;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 17;
        var3 = var3[var1];
        var1 = undefined;
        var1 = var4.bind(var1)(var3);
        var1 = var1.PromotionTypes;
        var1 = var1.THIRD_PARTY_OUTBOUND_RECURRING;
        var1 = var2 === var1;
        return var1;
    };
    var _closure1_slot20 = var4;
    var1 = global;
    var14 = var1.Object;
    var13 = var14.defineProperty;
    var9 = {};
    var1 = true;
    var9['value'] = var1;
    var1 = '__esModule';
    var1 = var13.bind(var14)(var3, var1, var9);
    var1 = 0;
    var9 = var11[var1];
    var1 = undefined;
    var9 = var12.bind(var1)(var9);
    var _closure1_slot3 = var9;
    var9 = 1;
    var9 = var11[var9];
    var9 = var12.bind(var1)(var9);
    var _closure1_slot4 = var9;
    var9 = 2;
    var9 = var11[var9];
    var9 = var12.bind(var1)(var9);
    var _closure1_slot5 = var9;
    var9 = 3;
    var9 = var11[var9];
    var9 = var12.bind(var1)(var9);
    var _closure1_slot6 = var9;
    var9 = 4;
    var9 = var11[var9];
    var9 = var12.bind(var1)(var9);
    var _closure1_slot7 = var9;
    var9 = 5;
    var9 = var11[var9];
    var9 = var12.bind(var1)(var9);
    var _closure1_slot8 = var9;
    var9 = 6;
    var9 = var11[var9];
    var9 = var10.bind(var1)(var9);
    var9 = var9.PromotionFlags;
    var _closure1_slot9 = var9;
    var9 = 7;
    var9 = var11[var9];
    var9 = var10.bind(var1)(var9);
    var12 = var9.AnalyticEvents;
    var _closure1_slot10 = var12;
    var12 = var9.Endpoints;
    var _closure1_slot11 = var12;
    var9 = var9.Platforms;
    var _closure1_slot12 = var9;
    var9 = 8;
    var9 = var11[var9];
    var9 = var10.bind(var1)(var9);
    var9 = var9.ActivityPlatform;
    var9 = 19;
    var9 = var11[var9];
    var11 = var10.bind(var1)(var9);
    var10 = var11.fileFinishedImporting;
    var9 = 'modules/premium/promotions/PromotionUtils.tsx';
    var9 = var10.bind(var11)(var9);
    var9 = function getPromotionImageURL(arg1, arg2) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
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
            if(!var1) { _fun0009_ip = 71; continue _fun0009 }
case 72:
            var8 = 'logo-dark';
case 71:
            var2 = global;
            var1 = var2.window;
            var1 = var1.GLOBAL_ENV;
            var7 = var1.CDN_HOST;
            var1 = null;
            if(!(var1 == var7)) { _fun0009_ip = 59; continue _fun0009 }
case 73:
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
            _fun0009_ip = 74; continue _fun0009;
case 59:
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
case 74:
            return var1;
        }
    };
    var3['getPromotionImageURL'] = var9;
    var3['claimedOutboundPromotionCodeFromServer'] = var8;
    var8 = function claimOutboundPromotion() {
        var1 = undefined;
        var4 = _closure1_slot16;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['claimOutboundPromotion'] = var8;
    var8 = function getOutboundPromotionRedemptionUrl(arg1, arg2) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var2 = arg2;
            var3 = var2.outboundRedemptionUrlFormat;
            var1 = null;
            if(!(var1 != var3)) { _fun0010_ip = 75; continue _fun0010 }
case 76:
            var4 = var2.outboundRedemptionUrlFormat;
            var3 = '';
            if(!(var3 === var4)) { _fun0010_ip = 72; continue _fun0010 }
case 75:
            var3 = var2.outboundRedemptionPageLink;
            var4 = var1 != var3;
            var1 = '';
            if(!var4) { _fun0010_ip = 5; continue _fun0010 }
case 2:
            var1 = var3;
case 5:
            _fun0010_ip = 77; continue _fun0010;
case 72:
            var5 = var2.outboundRedemptionUrlFormat;
            var4 = var5.replace;
            var2 = global;
            var6 = var2.encodeURIComponent;
            var3 = undefined;
            var2 = arg1;
            var3 = var6.bind(var3)(var2);
            var2 = '{code}';
            var1 = var4.bind(var5)(var2, var3);
case 77:
            return var1;
        }
    };
    var3['getOutboundPromotionRedemptionUrl'] = var8;
    var3['getNextUnseenOutboundPromotionId'] = var7;
    var7 = function shouldShowOutboundPromotionNotice() {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var1 = _closure1_slot17;
            var7 = undefined;
            var6 = var1.bind(var7)();
            var1 = null;
            var1 = var1 != var6;
            if(!var1) { _fun0011_ip = 78; continue _fun0011 }
case 53:
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 16;
            var2 = var8[var2];
            var5 = var3.bind(var7)(var2);
            var4 = var5.isTimeRecurringSnowflakeBoundDismissibleContentDismissed;
            var2 = 14;
            var2 = var8[var2];
            var2 = var3.bind(var7)(var2);
            var2 = var2.DismissibleContent;
            var3 = var2.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR;
            var2 = {};
            var7 = 259200000;
            var2['cooldownDurationMs'] = var7;
            var2 = var4.bind(var5)(var3, var6, var2);
            var1 = !var2;
case 78:
            return var1;
        }
    };
    var3['shouldShowOutboundPromotionNotice'] = var7;
    var3['isLogitechPromotion'] = var6;
    var3['shouldShowOutboundPromotionOnPlatform'] = var5;
    var5 = function isTrialUserEligibleToSeeOutboundPromotion(arg1, arg2) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var3 = arg1;
            var2 = var3.id;
            var1 = arg2;
            var2 = var1[var2];
            var1 = null;
            var1 = var1 != var2;
            if(var1) { _fun0012_ip = 79; continue _fun0012 }
case 80:
            var2 = var3.isRedeemableByTrialUsers;
            var1 = var2.bind(var3)();
case 79:
            return var1;
        }
    };
    var3['isTrialUserEligibleToSeeOutboundPromotion'] = var5;
    var5 = function getClaimedOutboundPromotionCodeMap(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var1 = {};
            var3 = _closure1_slot13;
            var5 = undefined;
            var2 = arg1;
            var4 = var3.bind(var5)(var2);
            var3 = var4.bind(var5)();
            var2 = var3.done;
            if(var2) { _fun0013_ip = 81; continue _fun0013 }
case 82:
            var2 = var3.value;
            var6 = var2.code;
            var2 = var2.promotion;
            var2 = var2.id;
            var1[var2] = var6;
            var6 = var4.bind(var5)();
            var2 = var6.done;
            var3 = var6;
            if(!var2) { _fun0013_ip = 82; continue _fun0013 }
case 81:
            return var1;
        }
    };
    var3['getClaimedOutboundPromotionCodeMap'] = var5;
    var5 = function getClaimedEndedOutboundPromotions(arg1, arg2) {
        var3 = arg1;
        var6 = arg2;
        var2 = global;
        var5 = var2.Set;
        var4 = var6.map;
        var2 = function(arg1) {
            var1 = arg1;
            var1 = var1.id;
            return var1;
        };
        var7 = var4.bind(var6)(var2);
        var4 = var5.prototype;
        var4 = Object.create(var4, {constructor: {value: var5}});
        var8 = var4;
        var2 = new var8[var5](var7, var6);
        var2 = var2 instanceof Object ? var2 : var4;
        var _closure2_slot0 = var2;
        var2 = var3.filter;
        var1 = function(arg1) {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                var1 = arg1;
                var4 = var1.promotion;
                var3 = _closure2_slot0;
                var2 = var3.has;
                var1 = var4.id;
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                if(!var1) { _fun0014_ip = 83; continue _fun0014 }
case 84:
                var3 = _closure1_slot20;
                var2 = undefined;
                var2 = var3.bind(var2)(var4);
                var1 = !var2;
case 83:
                if(!var1) { _fun0014_ip = 85; continue _fun0014 }
case 71:
                var3 = _closure1_slot18;
                var2 = undefined;
                var2 = var3.bind(var2)(var4);
                var1 = !var2;
case 85:
                if(!var1) { _fun0014_ip = 86; continue _fun0014 }
case 52:
                var3 = _closure1_slot19;
                var2 = undefined;
                var1 = var3.bind(var2)(var4);
case 86:
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['getClaimedEndedOutboundPromotions'] = var5;
    var3['isRecurringPromotion'] = var4;
    var2 = function isRecurring3PRewardsLocked(arg1, arg2) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 18;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.isUserEligibleForThirdPartyPerks;
        var2 = arg1;
        var1 = arg2;
        var1 = var3.bind(var4)(var2, var1);
        var1 = !var1;
        return var1;
    };
    var3['isRecurring3PRewardsLocked'] = var2;
    return var1;
})();