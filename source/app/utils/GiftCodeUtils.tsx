// app/utils/GiftCodeUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var11 = require;
    var15 = metroImportDefault;
    var3 = exports;
    var12 = dependencyMap;
    var _closure1_slot0 = var11;
    var _closure1_slot1 = var15;
    var _closure1_slot2 = var12;
    var7 = function cleanCode(arg1) {
        var4 = arg1;
        var3 = var4.replace;
        var2 = /[^A-Za-z0-9]/g;
        var1 = '';
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot20 = var7;
    var1 = function _resolveGiftCode() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    var4 = arguments[1];
                    var2 = arguments[2];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var11 = arg1;
                    var6 = undefined;
                    if(!(var4 === var6)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                    var4 = false;
case 4:
                    var10 = var4;
                    if(!(var2 === var6)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                    var2 = false;
case 6:
                    var9 = var2;
                    SaveGenerator(address=43);
case 8:
                    return var6;
case 9:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 10; continue _fun0001 }
case 11: // try_start_0
                    var4 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var3 = 8;
                    var3 = var7[var3];
                    var7 = var4.bind(var6)(var3);
                    var4 = var7.httpGetWithCountryCodeQuery;
                    var3 = {};
                    var13 = _closure1_slot7;
                    var12 = var13.GIFT_CODE_RESOLVE;
                    var8 = var11;
                    var8 = var12.bind(var13)(var8);
                    var3['url'] = var8;
                    var8 = {};
                    var8['with_application'] = var10;
                    var8['with_subscription_plan'] = var9;
                    var3['query'] = var8;
                    var12 = true;
                    var3['oldFormErrors'] = var12;
                    var8 = false;
                    var3['rejectWithError'] = var8;
                    var3 = var4.bind(var7)(var3);
                    SaveGenerator(address=146);
case 12:
                    return var3;
case 13:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 14; continue _fun0001 }
case 15:
                    var4 = var3.body;
                    var8 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var7 = 9;
                    var7 = var9[var7];
                    var10 = var8.bind(var6)(var7);
                    var9 = var10.track;
                    var5 = _closure1_slot8;
                    var8 = var5.GIFT_CODE_RESOLVED;
                    var7 = {};
                    var7['resolved'] = var12;
                    var5 = var4.code;
                    var7['gift_code'] = var5;
                    var5 = var4.max_uses;
                    var7['gift_code_max_uses'] = var5;
                    var5 = var4.store_listing;
                    var5 = var5.sku;
                    var5 = var5.id;
                    var7['sku_id'] = var5;
                    var5 = var4.store_listing;
                    var5 = var5.sku;
                    var5 = var5.type;
                    var7['sku_type'] = var5;
                    var5 = var4.store_listing;
                    var5 = var5.sku;
                    var5 = var5.application_id;
                    var7['application_id'] = var5;
                    var5 = var4.store_listing;
                    var5 = var5.sku;
                    var5 = var5.name;
                    var7['store_title'] = var5;
                    var5 = {};
                    var5['flush'] = var12;
                    var5 = var9.bind(var10)(var8, var7, var5);
case 16: // try_end0
                    return var4;
case 14:
                    return var3;
case 17: // catch_target0
                    CatchBlockStart(arg_register=4);
                    var4 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var8 = 9;
                    var8 = var7[var8];
                    var10 = var4.bind(var6)(var8);
                    var9 = var10.track;
                    var3 = _closure1_slot8;
                    var8 = var3.GIFT_CODE_RESOLVED;
                    var3 = {};
                    var12 = false;
                    var3['resolved'] = var12;
                    var3['gift_code'] = var11;
                    var3 = var9.bind(var10)(var8, var3);
                    var3 = 10;
                    var3 = var7[var3];
                    var3 = var4.bind(var6)(var3);
                    var4 = var3.prototype;
                    var4 = Object.create(var4, {constructor: {value: var3}});
                    var17 = var4;
                    var16 = var5;
                    var3 = new var17[var3](var16, var15);
                    var3 = var3 instanceof Object ? var3 : var4;
                    throw var3;
case 10:
                    return var2;
case 2:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot21 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot21 = var1;
    var6 = function getSubscriptionGiftSuccessText(arg1) {
        var5 = arg1;
        var _closure2_slot0 = var5;
        var6 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 13;
        var4 = var4[var3];
        var3 = undefined;
        var4 = var6.bind(var3)(var4);
        var3 = var4.match;
        var6 = var3.bind(var4)(var5);
        var5 = var6.with;
        var4 = {};
        var3 = _closure1_slot15;
        var3 = var3.MONTH;
        var4['interval'] = var3;
        var3 = _closure1_slot14;
        var3 = var3.TIER_2;
        var4['premiumSubscriptionType'] = var3;
        var3 = function() {
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var5 = 12;
            var1 = var10[var5];
            var8 = undefined;
            var1 = var9.bind(var8)(var1);
            var4 = var1.intl;
            var3 = var4.formatToPlainString;
            var1 = var10[var5];
            var1 = var9.bind(var8)(var1);
            var1 = var1.t;
            var2 = var1.vFfV+P;
            var1 = {};
            var6 = var10[var5];
            var6 = var9.bind(var8)(var6);
            var7 = var6.intl;
            var6 = var7.string;
            var5 = var10[var5];
            var5 = var9.bind(var8)(var5);
            var5 = var5.t;
            var5 = var5.FPybU1;
            var5 = var6.bind(var7)(var5);
            var1['timeInterval'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var6 = var5.bind(var6)(var4, var3);
        var5 = var6.with;
        var4 = {};
        var3 = _closure1_slot15;
        var3 = var3.YEAR;
        var4['interval'] = var3;
        var3 = _closure1_slot14;
        var3 = var3.TIER_2;
        var4['premiumSubscriptionType'] = var3;
        var3 = function() {
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var5 = 12;
            var1 = var10[var5];
            var8 = undefined;
            var1 = var9.bind(var8)(var1);
            var4 = var1.intl;
            var3 = var4.formatToPlainString;
            var1 = var10[var5];
            var1 = var9.bind(var8)(var1);
            var1 = var1.t;
            var2 = var1.vFfV+P;
            var1 = {};
            var6 = var10[var5];
            var6 = var9.bind(var8)(var6);
            var7 = var6.intl;
            var6 = var7.string;
            var5 = var10[var5];
            var5 = var9.bind(var8)(var5);
            var5 = var5.t;
            var5 = var5.tfqrho;
            var5 = var6.bind(var7)(var5);
            var1['timeInterval'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var6 = var5.bind(var6)(var4, var3);
        var5 = var6.with;
        var4 = {};
        var3 = _closure1_slot15;
        var3 = var3.MONTH;
        var4['interval'] = var3;
        var3 = _closure1_slot14;
        var3 = var3.TIER_1;
        var4['premiumSubscriptionType'] = var3;
        var3 = function() {
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 12;
            var3 = var6[var1];
            var2 = undefined;
            var3 = var5.bind(var2)(var3);
            var4 = var3.intl;
            var3 = var4.formatToPlainString;
            var1 = var6[var1];
            var1 = var5.bind(var2)(var1);
            var1 = var1.t;
            var2 = var1.gjKbFx;
            var1 = {};
            var5 = _closure2_slot0;
            var5 = var5.intervalCount;
            var1['intervalCount'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var5 = var5.bind(var6)(var4, var3);
        var4 = var5.with;
        var3 = {};
        var6 = _closure1_slot15;
        var6 = var6.YEAR;
        var3['interval'] = var6;
        var2 = _closure1_slot14;
        var2 = var2.TIER_1;
        var3['premiumSubscriptionType'] = var2;
        var2 = function() {
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 12;
            var3 = var6[var1];
            var2 = undefined;
            var3 = var5.bind(var2)(var3);
            var4 = var3.intl;
            var3 = var4.formatToPlainString;
            var1 = var6[var1];
            var1 = var5.bind(var2)(var1);
            var1 = var1.t;
            var2 = var1.GIe7Bw;
            var1 = {};
            var5 = _closure2_slot0;
            var5 = var5.intervalCount;
            var1['intervalCount'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var3 = var4.bind(var5)(var3, var2);
        var2 = var3.otherwise;
        var1 = function() {
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 12;
            var2 = var6[var1];
            var4 = undefined;
            var2 = var5.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.5ayf7+;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot22 = var6;
    var5 = function getErrorMessage(arg1, arg2, arg3, arg4, arg5) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var6 = arg2;
            var5 = undefined;
            var2 = arg3;
            var4 = undefined;
            if(var2) { _fun0002_ip = 4; continue _fun0002 }
case 3:
            var2 = arg4;
            var4 = undefined;
            if(var2) { _fun0002_ip = 4; continue _fun0002 }
case 18:
            var4 = var1;
case 4:
            var2 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 12;
            var7 = var9[var1];
            var7 = var2.bind(var5)(var7);
            var8 = var7.intl;
            var7 = var8.format;
            var1 = var9[var1];
            var1 = var2.bind(var5)(var1);
            var1 = var1.t;
            var2 = var1.5zyz9/;
            var1 = {};
            var9 = arg5;
            var1['onGoToLibrary'] = var9;
            var1 = var7.bind(var8)(var2, var1);
            var2 = null;
            if(!(var2 == var4)) { _fun0002_ip = 19; continue _fun0002 }
case 20:
            var4 = var2 == var6;
            var2 = null;
            if(var4) { _fun0002_ip = 21; continue _fun0002 }
case 22:
            var4 = _closure1_slot24;
            var7 = _closure1_slot6;
            var3 = var7.getCurrentUser;
            var3 = var3.bind(var7)();
            var2 = var4.bind(var5)(var6, var3);
case 21:
            var1 = var2;
case 19:
            return var1;
        }
    };
    var _closure1_slot23 = var5;
    var4 = function getGiftCodeRedeemError(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var3 = var1.code;
            var2 = _closure1_slot9;
            var2 = var2.INVALID_GIFT_SELF_REDEMPTION;
            if(!(var2 !== var3)) { _fun0003_ip = 23; continue _fun0003 }
case 24:
            var2 = _closure1_slot9;
            var2 = var2.INVALID_GIFT_REDEMPTION_EXHAUSTED;
            if(!(var2 !== var3)) { _fun0003_ip = 25; continue _fun0003 }
case 26:
            var2 = _closure1_slot9;
            var2 = var2.INVALID_GIFT_REDEMPTION_OWNED;
            if(!(var2 !== var3)) { _fun0003_ip = 27; continue _fun0003 }
case 28:
            var2 = _closure1_slot9;
            var2 = var2.UNKNOWN_GIFT_CODE;
            if(!(var2 !== var3)) { _fun0003_ip = 29; continue _fun0003 }
case 30:
            var2 = _closure1_slot9;
            var2 = var2.INVALID_GIFT_REDEMPTION_SUBSCRIPTION_INCOMPATIBLE;
            if(!(var2 !== var3)) { _fun0003_ip = 31; continue _fun0003 }
case 32:
            var2 = _closure1_slot9;
            var2 = var2.INVALID_GIFT_REDEMPTION_SUBSCRIPTION_MANAGED;
            if(!(var2 !== var3)) { _fun0003_ip = 33; continue _fun0003 }
case 22:
            var2 = _closure1_slot9;
            var2 = var2.INVALID_GIFT_REDEMPTION_INVOICE_OPEN;
            if(!(var2 !== var3)) { _fun0003_ip = 34; continue _fun0003 }
case 35:
            var2 = _closure1_slot9;
            var2 = var2.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED;
            if(!(var2 !== var3)) { _fun0003_ip = 36; continue _fun0003 }
case 37:
            var2 = _closure1_slot9;
            var2 = var2.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE;
            if(!(var2 !== var3)) { _fun0003_ip = 38; continue _fun0003 }
case 39:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 12;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.s9+XlJ;
            var2 = var3.bind(var4)(var2);
            return var2;
case 38:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 12;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.mXMmWF;
            var2 = var3.bind(var4)(var2);
            return var2;
case 36:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 12;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.ypuSd3;
            var2 = var3.bind(var4)(var2);
            return var2;
case 34:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 12;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.U26WX1;
            var2 = var3.bind(var4)(var2);
            return var2;
case 33:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 12;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.9i1J39;
            var2 = var3.bind(var4)(var2);
            return var2;
case 31:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var12 = 12;
            var2 = var8[var12];
            var11 = undefined;
            var2 = var7.bind(var11)(var2);
            var5 = var2.intl;
            var4 = var5.formatToPlainString;
            var2 = var8[var12];
            var2 = var7.bind(var11)(var2);
            var2 = var2.t;
            var3 = var2.4YTHKy;
            var2 = {};
            var6 = 16;
            var6 = var8[var6];
            var9 = var7.bind(var11)(var6);
            var8 = var9.isPremiumExactly;
            var6 = _closure1_slot14;
            var7 = var6.TIER_2;
            var6 = arg2;
            var6 = var8.bind(var9)(var6, var7);
            var10 = _closure1_slot0;
            var7 = _closure1_slot2;
            var8 = var7[var12];
            var8 = var10.bind(var11)(var8);
            var9 = var8.intl;
            var8 = var9.string;
            var7 = var7[var12];
            var7 = var10.bind(var11)(var7);
            var7 = var7.t;
            if(var6) { _fun0003_ip = 40; continue _fun0003 }
case 41:
            var6 = var7.FSOz7+;
            var6 = var8.bind(var9)(var6);
            _fun0003_ip = 42; continue _fun0003;
case 40:
            var7 = var7.lG6a5+;
            var6 = var8.bind(var9)(var7);
case 42:
            var2['planName'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
case 29:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 12;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.roztIi;
            var2 = var3.bind(var4)(var2);
            return var2;
case 27:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 12;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.mdLtb2;
            var2 = var3.bind(var4)(var2);
            return var2;
case 25:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 12;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.Iw2TUV;
            var2 = var3.bind(var4)(var2);
            return var2;
case 23:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 12;
            var2 = var6[var1];
            var4 = undefined;
            var2 = var5.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.wa9h7O;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var _closure1_slot24 = var4;
    var8 = global;
    var13 = var8.Object;
    var10 = var13.defineProperty;
    var9 = {};
    var1 = true;
    var9['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var13)(var3, var1, var9);
    var14 = 0;
    var9 = var12[var14];
    var1 = undefined;
    var9 = var15.bind(var1)(var9);
    var _closure1_slot3 = var9;
    var13 = 1;
    var9 = var12[var13];
    var9 = var15.bind(var1)(var9);
    var _closure1_slot4 = var9;
    var10 = 2;
    var9 = var12[var10];
    var9 = var15.bind(var1)(var9);
    var _closure1_slot5 = var9;
    var18 = 3;
    var9 = var12[var18];
    var9 = var15.bind(var1)(var9);
    var _closure1_slot6 = var9;
    var20 = 4;
    var9 = var12[var20];
    var9 = var11.bind(var1)(var9);
    var16 = var9.Endpoints;
    var _closure1_slot7 = var16;
    var16 = var9.AnalyticEvents;
    var _closure1_slot8 = var16;
    var16 = var9.AbortCodes;
    var _closure1_slot9 = var16;
    var16 = var9.GiftCodeModalStates;
    var _closure1_slot10 = var16;
    var16 = var9.MessageEmbedTypes;
    var _closure1_slot11 = var16;
    var16 = var9.MessageTypes;
    var _closure1_slot12 = var16;
    var9 = var9.SKUProductLines;
    var _closure1_slot13 = var9;
    var17 = 5;
    var9 = var12[var17];
    var9 = var11.bind(var1)(var9);
    var16 = var9.PremiumTypes;
    var _closure1_slot14 = var16;
    var9 = var9.SubscriptionIntervalTypes;
    var _closure1_slot15 = var9;
    var19 = 6;
    var9 = var12[var19];
    var16 = var15.bind(var1)(var9);
    var15 = var16.escape;
    var9 = var8.window;
    var9 = var9.GLOBAL_ENV;
    var9 = var9.GIFT_CODE_HOST;
    var9 = var15.bind(var16)(var9);
    var15 = new Array(1);
    var15[0] = var9;
    var21 = ['discordapp.com/gifts', 'discord.com/gifts'];
    var16 = var21.map;
    var9 = function(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 6;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.escape;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var26 = var16.bind(var21)(var9);
    var27 = var15;
    var25 = var13;
    var9 = arraySpread(var27, var26, var25);
    var9 = var15.join;
    var16 = '|';
    var22 = var9.bind(var15)(var16);
    var21 = var8.RegExp;
    var9 = var8.HermesInternal;
    var15 = var9.concat;
    var24 = '(?: |^|https?://)(?:';
    var9 = ')/([a-z0-9-]+)';
    var27 = var15.bind(var24)(var22, var9);
    var15 = var21.prototype;
    var15 = Object.create(var15, {constructor: {value: var21}});
    var22 = 'gi';
    var28 = var15;
    var26 = var22;
    var9 = new var28[var21](var27, var26, var25);
    var9 = var9 instanceof Object ? var9 : var15;
    var _closure1_slot16 = var9;
    var21 = ['discord.com/billing/promotions', 'promos.discord.gg'];
    var15 = var21.map;
    var9 = function(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 6;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.escape;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var26 = var15.bind(var21)(var9);
    var15 = new Array(0);
    var27 = var15;
    var25 = 0;
    var9 = arraySpread(var27, var26, var25);
    var9 = var15.join;
    var23 = var9.bind(var15)(var16);
    var21 = var8.RegExp;
    var9 = var8.HermesInternal;
    var15 = var9.concat;
    var9 = ')(/|(/)?\\?code=)([a-z0-9-]+)';
    var27 = var15.bind(var24)(var23, var9);
    var9 = var21.prototype;
    var28 = Object.create(var9, {constructor: {value: var21}});
    var26 = var22;
    var9 = new var28[var21](var27, var26, var25);
    var9 = function(arg1, arg2) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = global;
        var3 = var2.Array;
        var4 = undefined;
        var2 = arg2;
        var3 = var3.bind(var4)(var2);
        var2 = var3.fill;
        var3 = var2.bind(var3)(var4);
        var2 = var3.map;
        var1 = function() {
            var4 = _closure2_slot0;
            var1 = global;
            var1 = var1.HermesInternal;
            var3 = var1.concat;
            var2 = '[abcdefghjkmnpqrstuvwxyzABCDEFGHJKMNPQRSTUVWXYZ23456789]{';
            var1 = '}';
            var1 = var3.bind(var2)(var4, var1);
            return var1;
        };
        var3 = var2.bind(var3)(var1);
        var2 = var3.join;
        var1 = '-?';
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var21 = var9.bind(var1)(var20, var20);
    var15 = new Array(4);
    var15[0] = var21;
    var19 = var9.bind(var1)(var20, var19);
    var15[1] = var19;
    var9 = var9.bind(var1)(var17, var18);
    var15[2] = var9;
    var9 = '[a-zA-Z]{4}-?[0-9a-zA-Z]{4}-?[a-zA-Z]{4}';
    var15[3] = var9;
    var9 = var15.join;
    var17 = var9.bind(var15)(var16);
    var15 = var8.RegExp;
    var8 = var8.HermesInternal;
    var16 = var8.concat;
    var9 = '^(WUMP-?)?(';
    var8 = ')$';
    var27 = var16.bind(var9)(var17, var8);
    var9 = var15.prototype;
    var9 = Object.create(var9, {constructor: {value: var15}});
    var28 = var9;
    var8 = new var28[var15](var27, var26);
    var8 = var8 instanceof Object ? var8 : var9;
    var _closure1_slot17 = var8;
    var9 = {};
    var9['DEFAULT'] = var14;
    var8 = 'DEFAULT';
    var9[var14] = var8;
    var9['CUSTOM_STYLE'] = var13;
    var8 = 'CUSTOM_STYLE';
    var9[var13] = var8;
    var9['CUSTOM_MESSAGE_EMOJI_SOUNDBOARD'] = var10;
    var8 = 'CUSTOM_MESSAGE_EMOJI_SOUNDBOARD';
    var9[var10] = var8;
    var _closure1_slot18 = var9;
    var8 = function getGiftExperience(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var5 = 7;
            var1 = var1[var5];
            var4 = undefined;
            var1 = var3.bind(var4)(var1);
            var1 = var1.isMobile;
            if(var1) { _fun0004_ip = 43; continue _fun0004 }
case 7:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var5];
            var1 = var3.bind(var4)(var1);
            var1 = var1.isTablet;
            if(var1) { _fun0004_ip = 43; continue _fun0004 }
case 44:
            var3 = null;
            var1 = arg1;
            if(!(var3 == var1)) { _fun0004_ip = 45; continue _fun0004 }
case 46:
            var1 = arg2;
            if(var1) { _fun0004_ip = 45; continue _fun0004 }
case 47:
            var1 = _closure1_slot18;
            var1 = var1.CUSTOM_STYLE;
            _fun0004_ip = 48; continue _fun0004;
case 45:
            var3 = _closure1_slot18;
            var1 = var3.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD;
case 48:
            _fun0004_ip = 49; continue _fun0004;
case 43:
            var2 = _closure1_slot18;
            var1 = var2.DEFAULT;
case 49:
            return var1;
        }
    };
    var _closure1_slot19 = var8;
    var10 = 17;
    var10 = var12[var10];
    var12 = var11.bind(var1)(var10);
    var11 = var12.fileFinishedImporting;
    var10 = 'utils/GiftCodeUtils.tsx';
    var10 = var11.bind(var12)(var10);
    var3['GiftExperience'] = var9;
    var3['getGiftExperience'] = var8;
    var8 = function(arg1) {
        var4 = _closure1_slot19;
        var3 = undefined;
        var2 = arg1;
        var2 = var4.bind(var3)(var2);
        var1 = _closure1_slot18;
        var1 = var1.DEFAULT;
        var1 = var2 !== var1;
        return var1;
    };
    var3['shouldShowCustomGiftExperience'] = var8;
    var8 = function makeComboId(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var3 = arguments[1];
            var1 = arguments[2];
            var2 = undefined;
            if(!(var3 === var2)) { _fun0005_ip = 50; continue _fun0005 }
case 51:
            var3 = null;
case 50:
            var2 = null;
            var4 = var2 != var3;
            var6 = '';
            var5 = var6;
            if(!var4) { _fun0005_ip = 52; continue _fun0005 }
case 53:
            var5 = var3;
case 52:
            var2 = var2 != var1;
            var4 = var6;
            if(!var2) { _fun0005_ip = 54; continue _fun0005 }
case 9:
            var4 = var1;
case 54:
            var1 = global;
            var1 = var1.HermesInternal;
            var3 = var1.concat;
            var11 = arg1;
            var1 = ':';
            var12 = var6;
            var10 = var1;
            var9 = var5;
            var8 = var1;
            var7 = var4;
            var1 = var12[var3](var11, var10, var9, var8, var7, var6);
            return var1;
        }
    };
    var3['makeComboId'] = var8;
    var8 = function parseComboId(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var3 = arg1;
            var2 = var3.split;
            var1 = ':';
            var3 = var2.bind(var3)(var1);
            var2 = _closure1_slot4;
            var4 = undefined;
            var1 = 3;
            var3 = var2.bind(var4)(var3, var1);
            var1 = 0;
            var2 = var3[var1];
            var1 = 1;
            var7 = var3[var1];
            var1 = 2;
            var5 = var3[var1];
            var1 = {};
            var1['skuId'] = var2;
            var3 = null;
            var6 = '';
            var2 = null;
            if(!(var6 !== var7)) { _fun0006_ip = 55; continue _fun0006 }
case 56:
            var2 = var7;
case 55:
            var1['subscriptionPlanId'] = var2;
            var2 = undefined;
            if(!(var6 !== var5)) { _fun0006_ip = 57; continue _fun0006 }
case 58:
            var3 = var3 != var5;
            var2 = undefined;
            if(!var3) { _fun0006_ip = 57; continue _fun0006 }
case 48:
            var3 = global;
            var4 = var3.Number;
            var3 = var4.parseInt;
            var2 = var3.bind(var4)(var5);
case 57:
            var1['giftStyle'] = var2;
            return var1;
        }
    };
    var3['parseComboId'] = var8;
    var3['cleanCode'] = var7;
    var7 = function(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var4 = arg1;
            var5 = null;
            var1 = var5 == var4;
            var6 = undefined;
            if(var1) { _fun0007_ip = 59; continue _fun0007 }
case 50:
            var6 = var4.type;
case 59:
            var1 = _closure1_slot12;
            var1 = var1.CUSTOM_GIFT;
            var1 = var6 === var1;
            if(!var1) { _fun0007_ip = 47; continue _fun0007 }
case 60:
            var6 = var5 == var4;
            var7 = undefined;
            if(var6) { _fun0007_ip = 61; continue _fun0007 }
case 62:
            var6 = var4.embeds;
            var8 = var5 == var6;
            var7 = undefined;
            if(var8) { _fun0007_ip = 61; continue _fun0007 }
case 63:
            var7 = var6.length;
case 61:
            var6 = 1;
            var1 = var6 === var7;
case 47:
            if(!var1) { _fun0007_ip = 64; continue _fun0007 }
case 65:
            var5 = var5 == var4;
            var3 = undefined;
            if(var5) { _fun0007_ip = 20; continue _fun0007 }
case 45:
            var5 = var4.embeds;
            var4 = 0;
            var4 = var5[var4];
            var3 = var4.type;
case 20:
            var2 = _closure1_slot11;
            var2 = var2.GIFT;
            var1 = var3 === var2;
case 64:
            return var1;
        }
    };
    var3['isGiftCodeEmbed'] = var7;
    var7 = function(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var10 = arg1;
            var9 = null;
            if(!(var9 != var10)) { _fun0008_ip = 66; continue _fun0008 }
case 51:
            var1 = global;
            var2 = var1.Set;
            var3 = var2.prototype;
            var3 = Object.create(var3, {constructor: {value: var2}});
            var14 = var3;
            var2 = new var14[var2](var13);
            var3 = var2 instanceof Object ? var2 : var3;
            var4 = _closure1_slot16;
            var2 = var4.exec;
            var4 = var2.bind(var4)(var10);
            if(!(var9 != var4)) { _fun0008_ip = 67; continue _fun0008 }
case 28:
            var2 = var3.size;
            var7 = 3;
            var6 = 1;
            var5 = undefined;
            if(!(var2 < var7)) { _fun0008_ip = 67; continue _fun0008 }
case 30:
            var11 = var3.add;
            var12 = _closure1_slot20;
            var2 = var4[var6];
            var2 = var12.bind(var5)(var2);
            var2 = var11.bind(var3)(var2);
            var11 = _closure1_slot16;
            var2 = var11.exec;
            var11 = var2.bind(var11)(var10);
            if(!(var9 != var11)) { _fun0008_ip = 67; continue _fun0008 }
case 68:
            var2 = var3.size;
            var4 = var11;
            if(var2 < var7) { _fun0008_ip = 30; continue _fun0008 }
case 67:
            var2 = var1.Array;
            var1 = var2.from;
            var1 = var1.bind(var2)(var3);
            return var1;
case 66:
            var1 = new Array(0);
            return var1;
        }
    };
    var3['findGiftCodes'] = var7;
    var7 = function getGiftCodeURL() {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var7 = arguments[0];
            var1 = undefined;
            if(!(var7 === var1)) { _fun0009_ip = 69; continue _fun0009 }
case 70:
            var7 = '';
case 69:
            var1 = global;
            var2 = var1.window;
            var2 = var2.GLOBAL_ENV;
            var2 = var2.GIFT_CODE_HOST;
            var3 = null;
            if(!(var3 == var2)) { _fun0009_ip = 47; continue _fun0009 }
case 60:
            var3 = var1.location;
            var6 = var3.host;
            var3 = var1.HermesInternal;
            var4 = var3.concat;
            var3 = '/gifts/';
            var5 = var4.bind(var3)(var7);
            _fun0009_ip = 71; continue _fun0009;
case 47:
            var3 = var1.HermesInternal;
            var4 = var3.concat;
            var3 = '/';
            var5 = var4.bind(var3)(var7);
            var6 = var2;
case 71:
            var2 = var1.location;
            var11 = var2.protocol;
            var1 = var1.HermesInternal;
            var3 = var1.concat;
            var12 = '';
            var10 = '//';
            var9 = var6;
            var8 = var5;
            var1 = var12[var3](var11, var10, var9, var8, var7);
            return var1;
        }
    };
    var3['getGiftCodeURL'] = var7;
    var7 = function resolveGiftCode() {
        var1 = undefined;
        var4 = _closure1_slot21;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['resolveGiftCode'] = var7;
    var7 = function trackGiftCodeCopy(arg1, arg2) {
        var7 = _closure1_slot1;
        var8 = _closure1_slot2;
        var1 = 9;
        var3 = var8[var1];
        var1 = undefined;
        var5 = var7.bind(var1)(var3);
        var4 = var5.track;
        var2 = _closure1_slot8;
        var3 = var2.GIFT_CODE_COPIED;
        var2 = {};
        var6 = 11;
        var6 = var8[var6];
        var8 = var7.bind(var1)(var6);
        var7 = arg2;
        var6 = false;
        var10 = var8.bind(var1)(var7, var6, var6);
        var11 = var2;
        var6 = copyDataProperties(var11, var10);
        var6 = arg1;
        var10 = var6.analyticsData;
        var11 = var2;
        var6 = copyDataProperties(var11, var10);
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var3['trackGiftCodeCopy'] = var7;
    var7 = function getStep(arg1, arg2, arg3) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var4 = arg1;
            var2 = arg3;
            var8 = var2.error;
            var5 = var2.accepted;
            var1 = var2.accepting;
            var6 = var2.opened;
            var7 = var2.isCustomGift;
            var2 = var2.isPremiumAppGift;
            var3 = null;
            if(!(var3 == var8)) { _fun0010_ip = 19; continue _fun0010 }
case 72:
            if(var5) { _fun0010_ip = 73; continue _fun0010 }
case 74:
            if(var1) { _fun0010_ip = 73; continue _fun0010 }
case 75:
            if(!(var3 == var4)) { _fun0010_ip = 19; continue _fun0010 }
case 73:
            if(!var7) { _fun0010_ip = 76; continue _fun0010 }
case 44:
            if(var6) { _fun0010_ip = 76; continue _fun0010 }
case 63:
            if(var5) { _fun0010_ip = 76; continue _fun0010 }
case 77:
            if(var1) { _fun0010_ip = 76; continue _fun0010 }
case 46:
            var1 = _closure1_slot10;
            var1 = var1.OPEN;
            _fun0010_ip = 78; continue _fun0010;
case 76:
            if(!var5) { _fun0010_ip = 79; continue _fun0010 }
case 45:
            var5 = arg2;
            var5 = var5.isSubscription;
            if(var5) { _fun0010_ip = 68; continue _fun0010 }
case 43:
            if(!(var3 == var4)) { _fun0010_ip = 68; continue _fun0010 }
case 80:
            if(var2) { _fun0010_ip = 68; continue _fun0010 }
case 79:
            var2 = _closure1_slot10;
            var2 = var2.CONFIRM;
            _fun0010_ip = 81; continue _fun0010;
case 68:
            var3 = _closure1_slot10;
            var2 = var3.SUCCESS;
case 81:
            var1 = var2;
case 78:
            _fun0010_ip = 82; continue _fun0010;
case 19:
            var2 = _closure1_slot10;
            var1 = var2.ERROR;
case 82:
            return var1;
        }
    };
    var3['getStep'] = var7;
    var7 = function getHeaderText(arg1, arg2, arg3) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var4 = arg1;
            var2 = arg2;
            var7 = arg3;
            var3 = _closure1_slot10;
            var3 = var3.ERROR;
            if(!(var3 !== var4)) { _fun0011_ip = 83; continue _fun0011 }
case 84:
            var3 = _closure1_slot10;
            var3 = var3.SUCCESS;
            if(!(var3 !== var4)) { _fun0011_ip = 85; continue _fun0011 }
case 54:
            var3 = _closure1_slot10;
            var3 = var3.CONFIRM;
            var3 = var2.isSubscription;
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var4 = 12;
            var6 = var10[var4];
            var5 = undefined;
            var6 = var9.bind(var5)(var6);
            var8 = var6.intl;
            if(var3) { _fun0011_ip = 86; continue _fun0011 }
case 87:
            var6 = var8.string;
            var3 = var10[var4];
            var3 = var9.bind(var5)(var3);
            var3 = var3.t;
            var3 = var3.RmamAA;
            var3 = var6.bind(var8)(var3);
            _fun0011_ip = 88; continue _fun0011;
case 86:
            var6 = var8.formatToPlainString;
            var4 = var10[var4];
            var4 = var9.bind(var5)(var4);
            var4 = var4.t;
            var5 = var4.2VN4Nz;
            var4 = {};
            var9 = var7.name;
            var4['skuName'] = var9;
            var3 = var6.bind(var8)(var5, var4);
case 88:
            return var3;
case 85:
            var2 = var2.isSubscription;
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 12;
            var5 = var9[var3];
            var4 = undefined;
            var5 = var8.bind(var4)(var5);
            var6 = var5.intl;
            if(var2) { _fun0011_ip = 89; continue _fun0011 }
case 90:
            var5 = var6.string;
            var2 = var9[var3];
            var2 = var8.bind(var4)(var2);
            var2 = var2.t;
            var2 = var2.+BNMcH;
            var2 = var5.bind(var6)(var2);
            _fun0011_ip = 91; continue _fun0011;
case 89:
            var5 = var6.formatToPlainString;
            var3 = var9[var3];
            var3 = var8.bind(var4)(var3);
            var3 = var3.t;
            var4 = var3.1C2BGx;
            var3 = {};
            var7 = var7.name;
            var3['skuName'] = var7;
            var2 = var5.bind(var6)(var4, var3);
case 91:
            return var2;
case 83:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 12;
            var3 = var6[var1];
            var2 = undefined;
            var3 = var5.bind(var2)(var3);
            var4 = var3.intl;
            var3 = var4.formatToMarkdownString;
            var1 = var6[var1];
            var1 = var5.bind(var2)(var1);
            var1 = var1.t;
            var2 = var1.JUvC0t;
            var1 = {};
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['getHeaderText'] = var7;
    var7 = function getButtonText(arg1, arg2, arg3) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var5 = arg1;
            var3 = arg2;
            var1 = arg3;
            var2 = var1.isCustomGift;
            var1 = var1.isPremiumAppGift;
            var4 = _closure1_slot10;
            var4 = var4.ERROR;
            if(!(var4 !== var5)) { _fun0012_ip = 92; continue _fun0012 }
case 8:
            var4 = _closure1_slot10;
            var4 = var4.SUCCESS;
            if(!(var4 !== var5)) { _fun0012_ip = 93; continue _fun0012 }
case 94:
            var4 = _closure1_slot10;
            var4 = var4.OPEN;
            if(!(var4 !== var5)) { _fun0012_ip = 95; continue _fun0012 }
case 47:
            var4 = _closure1_slot10;
            var4 = var4.CONFIRM;
            var4 = null;
            if(!(var4 != var2)) { _fun0012_ip = 48; continue _fun0012 }
case 96:
            if(var2) { _fun0012_ip = 97; continue _fun0012 }
case 48:
            var2 = var3.giftStyle;
            if(!(var4 == var2)) { _fun0012_ip = 98; continue _fun0012 }
case 99:
            var2 = var3.isSubscription;
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var4 = 12;
            var5 = var9[var4];
            var7 = undefined;
            var5 = var8.bind(var7)(var5);
            var6 = var5.intl;
            var5 = var6.string;
            var4 = var9[var4];
            var4 = var8.bind(var7)(var4);
            var4 = var4.t;
            if(var2) { _fun0012_ip = 100; continue _fun0012 }
case 101:
            var2 = var4.OgpR0d;
            var2 = var5.bind(var6)(var2);
            _fun0012_ip = 102; continue _fun0012;
case 100:
            var4 = var4.wQ1FHx;
            var2 = var5.bind(var6)(var4);
case 102:
            _fun0012_ip = 103; continue _fun0012;
case 98:
            var3 = var3.isClaimed;
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var4 = 12;
            var5 = var9[var4];
            var7 = undefined;
            var5 = var8.bind(var7)(var5);
            var6 = var5.intl;
            var5 = var6.string;
            var4 = var9[var4];
            var4 = var8.bind(var7)(var4);
            var4 = var4.t;
            if(var3) { _fun0012_ip = 104; continue _fun0012 }
case 105:
            var3 = var4.2BWscn;
            var3 = var5.bind(var6)(var3);
            _fun0012_ip = 106; continue _fun0012;
case 104:
            var4 = var4.OgpR0d;
            var3 = var5.bind(var6)(var4);
case 106:
            var2 = var3;
case 103:
            _fun0012_ip = 107; continue _fun0012;
case 97:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 12;
            var4 = var8[var3];
            var6 = undefined;
            var4 = var7.bind(var6)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var3 = var8[var3];
            var3 = var7.bind(var6)(var3);
            var3 = var3.t;
            var3 = var3.n6I6k5;
            var2 = var4.bind(var5)(var3);
case 107:
            return var2;
case 95:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 12;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.F8ktcn;
            var2 = var3.bind(var4)(var2);
            return var2;
case 93:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 12;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.zW87EB;
            var2 = var3.bind(var4)(var2);
            return var2;
case 92:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 12;
            var2 = var6[var1];
            var4 = undefined;
            var2 = var5.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.w19zb2;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['getButtonText'] = var7;
    var3['getSubscriptionGiftSuccessText'] = var6;
    var6 = function getSubscriptionGiftStartHeaderText(arg1, arg2) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var6 = arg1;
            var4 = arg2;
            var _closure2_slot0 = var4;
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var1 = 12;
            var5 = var10[var1];
            var7 = undefined;
            var5 = var9.bind(var7)(var5);
            var11 = var5.intl;
            var8 = var11.string;
            var5 = var10[var1];
            var5 = var9.bind(var7)(var5);
            var5 = var5.t;
            var5 = var5.FPybU1;
            var5 = var8.bind(var11)(var5);
            var _closure2_slot1 = var5;
            var5 = var10[var1];
            var5 = var9.bind(var7)(var5);
            var8 = var5.intl;
            var5 = var8.string;
            var1 = var10[var1];
            var1 = var9.bind(var7)(var1);
            var1 = var1.t;
            var1 = var1.tfqrho;
            var1 = var5.bind(var8)(var1);
            var _closure2_slot2 = var1;
            var1 = null;
            if(!(var1 == var4)) { _fun0013_ip = 108; continue _fun0013 }
case 67:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 13;
            var1 = var5[var1];
            var4 = var4.bind(var7)(var1);
            var1 = var4.match;
            var8 = var1.bind(var4)(var6);
            var5 = var8.with;
            var4 = {};
            var1 = _closure1_slot15;
            var1 = var1.MONTH;
            var4['interval'] = var1;
            var1 = _closure1_slot14;
            var1 = var1.TIER_2;
            var4['premiumSubscriptionType'] = var1;
            var1 = function() {
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 12;
                var3 = var6[var1];
                var2 = undefined;
                var3 = var5.bind(var2)(var3);
                var4 = var3.intl;
                var3 = var4.formatToPlainString;
                var1 = var6[var1];
                var1 = var5.bind(var2)(var1);
                var1 = var1.t;
                var2 = var1.408Xt7;
                var1 = {};
                var5 = _closure2_slot1;
                var1['timeInterval'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var8 = var5.bind(var8)(var4, var1);
            var5 = var8.with;
            var4 = {};
            var1 = _closure1_slot15;
            var1 = var1.YEAR;
            var4['interval'] = var1;
            var1 = _closure1_slot14;
            var1 = var1.TIER_2;
            var4['premiumSubscriptionType'] = var1;
            var1 = function() {
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 12;
                var3 = var6[var1];
                var2 = undefined;
                var3 = var5.bind(var2)(var3);
                var4 = var3.intl;
                var3 = var4.formatToPlainString;
                var1 = var6[var1];
                var1 = var5.bind(var2)(var1);
                var1 = var1.t;
                var2 = var1.408Xt7;
                var1 = {};
                var5 = _closure2_slot2;
                var1['timeInterval'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var8 = var5.bind(var8)(var4, var1);
            var5 = var8.with;
            var4 = {};
            var1 = _closure1_slot15;
            var1 = var1.MONTH;
            var4['interval'] = var1;
            var1 = _closure1_slot14;
            var1 = var1.TIER_0;
            var4['premiumSubscriptionType'] = var1;
            var1 = function() {
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 12;
                var3 = var6[var1];
                var2 = undefined;
                var3 = var5.bind(var2)(var3);
                var4 = var3.intl;
                var3 = var4.formatToPlainString;
                var1 = var6[var1];
                var1 = var5.bind(var2)(var1);
                var1 = var1.t;
                var2 = var1.e9l3JS;
                var1 = {};
                var5 = _closure2_slot1;
                var1['timeInterval'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var8 = var5.bind(var8)(var4, var1);
            var5 = var8.with;
            var4 = {};
            var1 = _closure1_slot15;
            var1 = var1.YEAR;
            var4['interval'] = var1;
            var1 = _closure1_slot14;
            var1 = var1.TIER_0;
            var4['premiumSubscriptionType'] = var1;
            var1 = function() {
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 12;
                var3 = var6[var1];
                var2 = undefined;
                var3 = var5.bind(var2)(var3);
                var4 = var3.intl;
                var3 = var4.formatToPlainString;
                var1 = var6[var1];
                var1 = var5.bind(var2)(var1);
                var1 = var1.t;
                var2 = var1.e9l3JS;
                var1 = {};
                var5 = _closure2_slot2;
                var1['timeInterval'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var5 = var5.bind(var8)(var4, var1);
            var4 = var5.otherwise;
            var1 = function() {
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 12;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.hrnGnp;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var4.bind(var5)(var1);
            _fun0013_ip = 109; continue _fun0013;
case 108:
            var5 = _closure1_slot0;
            var8 = _closure1_slot2;
            var4 = 13;
            var4 = var8[var4];
            var5 = var5.bind(var7)(var4);
            var4 = var5.match;
            var7 = var4.bind(var5)(var6);
            var6 = var7.with;
            var5 = {};
            var4 = _closure1_slot15;
            var4 = var4.MONTH;
            var5['interval'] = var4;
            var4 = _closure1_slot14;
            var4 = var4.TIER_2;
            var5['premiumSubscriptionType'] = var4;
            var4 = function() {
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 12;
                var3 = var6[var1];
                var2 = undefined;
                var3 = var5.bind(var2)(var3);
                var4 = var3.intl;
                var3 = var4.formatToPlainString;
                var1 = var6[var1];
                var1 = var5.bind(var2)(var1);
                var1 = var1.t;
                var2 = var1.0UR0u7;
                var1 = {};
                var6 = _closure2_slot0;
                var1['sender'] = var6;
                var5 = _closure2_slot1;
                var1['timeInterval'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var7 = var6.bind(var7)(var5, var4);
            var6 = var7.with;
            var5 = {};
            var4 = _closure1_slot15;
            var4 = var4.YEAR;
            var5['interval'] = var4;
            var4 = _closure1_slot14;
            var4 = var4.TIER_2;
            var5['premiumSubscriptionType'] = var4;
            var4 = function() {
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 12;
                var3 = var6[var1];
                var2 = undefined;
                var3 = var5.bind(var2)(var3);
                var4 = var3.intl;
                var3 = var4.formatToPlainString;
                var1 = var6[var1];
                var1 = var5.bind(var2)(var1);
                var1 = var1.t;
                var2 = var1.0UR0u7;
                var1 = {};
                var6 = _closure2_slot0;
                var1['sender'] = var6;
                var5 = _closure2_slot2;
                var1['timeInterval'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var7 = var6.bind(var7)(var5, var4);
            var6 = var7.with;
            var5 = {};
            var4 = _closure1_slot15;
            var4 = var4.MONTH;
            var5['interval'] = var4;
            var4 = _closure1_slot14;
            var4 = var4.TIER_0;
            var5['premiumSubscriptionType'] = var4;
            var4 = function() {
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 12;
                var3 = var6[var1];
                var2 = undefined;
                var3 = var5.bind(var2)(var3);
                var4 = var3.intl;
                var3 = var4.formatToPlainString;
                var1 = var6[var1];
                var1 = var5.bind(var2)(var1);
                var1 = var1.t;
                var2 = var1.sXpBoq;
                var1 = {};
                var6 = _closure2_slot0;
                var1['sender'] = var6;
                var5 = _closure2_slot1;
                var1['timeInterval'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var6 = var6.bind(var7)(var5, var4);
            var5 = var6.with;
            var4 = {};
            var7 = _closure1_slot15;
            var7 = var7.YEAR;
            var4['interval'] = var7;
            var3 = _closure1_slot14;
            var3 = var3.TIER_0;
            var4['premiumSubscriptionType'] = var3;
            var3 = function() {
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 12;
                var3 = var6[var1];
                var2 = undefined;
                var3 = var5.bind(var2)(var3);
                var4 = var3.intl;
                var3 = var4.formatToPlainString;
                var1 = var6[var1];
                var1 = var5.bind(var2)(var1);
                var1 = var1.t;
                var2 = var1.sXpBoq;
                var1 = {};
                var6 = _closure2_slot0;
                var1['sender'] = var6;
                var5 = _closure2_slot2;
                var1['timeInterval'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var4 = var5.bind(var6)(var4, var3);
            var3 = var4.otherwise;
            var2 = function() {
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 12;
                var3 = var6[var1];
                var2 = undefined;
                var3 = var5.bind(var2)(var3);
                var4 = var3.intl;
                var3 = var4.formatToPlainString;
                var1 = var6[var1];
                var1 = var5.bind(var2)(var1);
                var1 = var1.t;
                var2 = var1.td2m3d;
                var1 = {};
                var5 = _closure2_slot0;
                var1['sender'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var1 = var3.bind(var4)(var2);
case 109:
            return var1;
        }
    };
    var3['getSubscriptionGiftStartHeaderText'] = var6;
    var6 = function getBodyText(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var1 = arg1;
            var9 = var1.step;
            var13 = var1.sku;
            var7 = var1.libraryApplication;
            var6 = var1.error;
            var5 = var1.accepted;
            var4 = var1.accepting;
            var3 = var1.onGoToLibrary;
            var10 = var1.subscriptionPlan;
            var2 = undefined;
            if(!(var10 === var2)) { _fun0014_ip = 94; continue _fun0014 }
case 110:
            var10 = null;
case 94:
            var8 = _closure1_slot10;
            var8 = var8.ERROR;
            if(!(var8 !== var9)) { _fun0014_ip = 111; continue _fun0014 }
case 65:
            var8 = _closure1_slot10;
            var8 = var8.SUCCESS;
            if(!(var8 !== var9)) { _fun0014_ip = 17; continue _fun0014 }
case 112:
            var8 = _closure1_slot10;
            var8 = var8.CONFIRM;
            var8 = null;
            if(!(var8 == var10)) { _fun0014_ip = 113; continue _fun0014 }
case 114:
            var9 = _closure1_slot0;
            var14 = _closure1_slot2;
            var8 = 12;
            var11 = var14[var8];
            var11 = var9.bind(var2)(var11);
            var12 = var11.intl;
            var11 = var12.formatToPlainString;
            var8 = var14[var8];
            var8 = var9.bind(var2)(var8);
            var8 = var8.t;
            var9 = var8.l6Ea4e;
            var8 = {};
            var14 = var13.name;
            var8['skuName'] = var14;
            var8 = var11.bind(var12)(var9, var8);
            return var8;
case 113:
            var9 = var10.interval;
            var8 = _closure1_slot15;
            var8 = var8.MONTH;
            if(!(var9 !== var8)) { _fun0014_ip = 115; continue _fun0014 }
case 116:
            var9 = _closure1_slot0;
            var11 = _closure1_slot2;
            var8 = 12;
            var8 = var11[var8];
            var8 = var9.bind(var2)(var8);
            var8 = var8.t;
            var12 = var8.d8rUd3;
            _fun0014_ip = 117; continue _fun0014;
case 115:
            var9 = _closure1_slot0;
            var11 = _closure1_slot2;
            var8 = 12;
            var8 = var11[var8];
            var8 = var9.bind(var2)(var8);
            var8 = var8.t;
            var12 = var8.P9eTKi;
case 117:
            var9 = _closure1_slot0;
            var11 = _closure1_slot2;
            var8 = 12;
            var8 = var11[var8];
            var8 = var9.bind(var2)(var8);
            var11 = var8.intl;
            var9 = var11.format;
            var8 = {};
            var14 = var13.name;
            var8['skuName'] = var14;
            var14 = var10.intervalCount;
            var8['intervalCount'] = var14;
            var8 = var9.bind(var11)(var12, var8);
            return var8;
case 17:
            var8 = null;
            if(!(var8 == var10)) { _fun0014_ip = 118; continue _fun0014 }
case 119:
            var9 = _closure1_slot0;
            var14 = _closure1_slot2;
            var8 = 12;
            var11 = var14[var8];
            var11 = var9.bind(var2)(var11);
            var12 = var11.intl;
            var11 = var12.formatToPlainString;
            var8 = var14[var8];
            var8 = var9.bind(var2)(var8);
            var8 = var8.t;
            var9 = var8.3CPsbm;
            var8 = {};
            var13 = var13.name;
            var8['skuName'] = var13;
            var8 = var11.bind(var12)(var9, var8);
            _fun0014_ip = 120; continue _fun0014;
case 118:
            var9 = _closure1_slot22;
            var8 = var9.bind(var2)(var10);
case 120:
            return var8;
case 111:
            var1 = _closure1_slot23;
            var20 = undefined;
            var19 = var7;
            var18 = var6;
            var17 = var5;
            var16 = var4;
            var15 = var3;
            var1 = var20[var1](var19, var18, var17, var16, var15, var14);
            return var1;
        }
    };
    var3['getBodyText'] = var6;
    var3['getErrorMessage'] = var5;
    var5 = function firstLibraryApplicationForGiftCode(arg1, arg2, arg3) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var1 = arg1;
            var3 = arg3;
            var _closure2_slot0 = var3;
            var3 = arg2;
            var5 = var3.applicationId;
            var _closure2_slot1 = var5;
            var4 = var1.length;
            var3 = 0;
            if(!(!(var4 > var3))) { _fun0015_ip = 54; continue _fun0015 }
case 121:
            var4 = new Array(1);
            var4[0] = var5;
            var1 = var4;
case 54:
            var4 = var1.map;
            var2 = function(arg1) {
                var5 = _closure2_slot0;
                var4 = var5.getLibraryApplication;
                var3 = _closure2_slot1;
                var2 = arg1;
                var1 = true;
                var1 = var4.bind(var5)(var3, var2, var1);
                return var1;
            };
            var5 = var4.bind(var1)(var2);
            var4 = var5.filter;
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 14;
            var6 = var6[var2];
            var2 = undefined;
            var2 = var7.bind(var2)(var6);
            var2 = var2.isNotNullish;
            var2 = var4.bind(var5)(var2);
            var5 = var2.length;
            var4 = var1.length;
            var1 = null;
            if(!(var5 === var4)) { _fun0015_ip = 122; continue _fun0015 }
case 64:
            var1 = var2[var3];
case 122:
            return var1;
        }
    };
    var3['firstLibraryApplicationForGiftCode'] = var5;
    var5 = function processGiftCodeInput(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var2 = arg1;
            var1 = var2.trim;
            var3 = var1.bind(var2)();
            var2 = var3.split;
            var1 = '/';
            var2 = var2.bind(var3)(var1);
            var1 = var2.pop;
            var4 = var1.bind(var2)();
            var3 = var4.match;
            var1 = _closure1_slot17;
            var5 = var3.bind(var4)(var1);
            var1 = null;
            if(!(var1 != var5)) { _fun0016_ip = 123; continue _fun0016 }
case 124:
            var4 = _closure1_slot4;
            var3 = undefined;
            var2 = 3;
            var3 = var4.bind(var3)(var5, var2);
            var2 = 0;
            var2 = var3[var2];
            var2 = 1;
            var2 = var3[var2];
            var2 = 2;
            var6 = var3[var2];
            var3 = var1 == var6;
            var2 = null;
            if(var3) { _fun0016_ip = 125; continue _fun0016 }
case 126:
            var5 = var6.replace;
            var3 = global;
            var8 = var3.RegExp;
            var3 = var8.prototype;
            var4 = Object.create(var3, {constructor: {value: var8}});
            var10 = '-';
            var9 = 'g';
            var11 = var4;
            var3 = new var11[var8](var10, var9, var8);
            var4 = var3 instanceof Object ? var3 : var4;
            var3 = '';
            var2 = var5.bind(var6)(var4, var3);
case 125:
            return var2;
case 123:
            return var1;
        }
    };
    var3['processGiftCodeInput'] = var5;
    var5 = function(arg1, arg2) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 15;
        var4 = var4[var3];
        var3 = undefined;
        var4 = var5.bind(var3)(var4);
        var3 = var4.useStateFromStores;
        var5 = _closure1_slot5;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                var3 = _closure2_slot0;
                var1 = null;
                if(!(var1 != var3)) { _fun0017_ip = 61; continue _fun0017 }
case 69:
                var3 = _closure2_slot1;
                if(!var3) { _fun0017_ip = 61; continue _fun0017 }
case 127:
                var4 = _closure1_slot5;
                var3 = var4.getGiftCode;
                var2 = _closure2_slot0;
                var3 = var3.bind(var4)(var2);
                var4 = var1 == var3;
                var2 = null;
                if(var4) { _fun0017_ip = 77; continue _fun0017 }
case 75:
                var4 = '';
                var2 = null;
                if(!(var4 !== var3)) { _fun0017_ip = 77; continue _fun0017 }
case 63:
                var2 = var3;
case 77:
                return var2;
case 61:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['useGetGiftCode'] = var5;
    var5 = function(arg1) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
            var1 = arg1;
            var10 = var1.step;
            var9 = var1.giftCode;
            var12 = var1.customMessage;
            var8 = var1.emojiName;
            var7 = var1.soundId;
            var6 = var1.productLine;
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 9;
            var2 = var2[var1];
            var1 = undefined;
            var5 = var3.bind(var1)(var2);
            var4 = var5.track;
            var2 = _closure1_slot8;
            var3 = var2.GIFT_ACCEPT_STEP;
            var2 = {};
            var2['to_step'] = var10;
            var10 = var9.giftStyle;
            var13 = null;
            var10 = var13 != var10;
            var2['has_custom_message'] = var10;
            var10 = var9.giftStyle;
            var10 = var13 != var10;
            if(!var10) { _fun0018_ip = 128; continue _fun0018 }
case 64:
            var15 = _closure1_slot0;
            var16 = _closure1_slot2;
            var11 = 12;
            var13 = var16[var11];
            var13 = var15.bind(var1)(var13);
            var14 = var13.intl;
            var13 = var14.string;
            var11 = var16[var11];
            var11 = var15.bind(var1)(var11);
            var11 = var11.t;
            var11 = var11.ZkOo1d;
            var11 = var13.bind(var14)(var11);
            var10 = var12 !== var11;
case 128:
            var2['is_custom_message_edited'] = var10;
            var10 = var9.giftStyle;
            var2['gift_style'] = var10;
            var9 = var9.code;
            var2['gift_code'] = var9;
            var2['emoji_name'] = var8;
            var2['sound_id'] = var7;
            var2['product_line'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        }
    };
    var3['trackStep'] = var5;
    var3['getGiftCodeRedeemError'] = var4;
    var2 = function isPremiumAppGift(arg1) {
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
            var1 = arg1;
            var3 = var1.productLine;
            var1 = _closure1_slot13;
            var1 = var1.APPLICATION;
            var1 = var3 === var1;
            if(var1) { _fun0019_ip = 9; continue _fun0019 }
case 84:
            var2 = _closure1_slot13;
            var2 = var2.SOCIAL_LAYER_GAME_ITEM;
            var1 = var3 === var2;
case 9:
            return var1;
        }
    };
    var3['isPremiumAppGift'] = var2;
    return var1;
})();