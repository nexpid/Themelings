// app/modules/premium/promotions/PromotionsStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
case 2: // try_start_0
            var2 = global;
            var3 = var2.Boolean;
            var3 = var3.prototype;
            var4 = var3.valueOf;
            var3 = var4.call;
            var8 = var2.Reflect;
            var7 = var8.construct;
            var6 = var2.Boolean;
            var5 = new Array(0);
            var2 = function() {
                var1 = undefined;
                return var1;
            };
            var2 = var7.bind(var8)(var6, var5, var2);
            var2 = var3.bind(var4)(var2);
            var2 = !var2;
            var _closure2_slot0 = var2;
case 3: // try_end0
            _fun0001_ip = 4; continue _fun0001;
case 5: // catch_target0
            CatchBlockStart(arg_register=1);
case 4:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot21 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot21 = var1;
    var10 = function createEmptyPromotionsByType() {
        var1 = {};
        var4 = _closure1_slot0;
        var5 = _closure1_slot1;
        var2 = 8;
        var6 = var5[var2];
        var3 = undefined;
        var6 = var4.bind(var3)(var6);
        var6 = var6.PromotionTypes;
        var7 = var6.THIRD_PARTY;
        var6 = {};
        var1[6] = var6;
        var6 = var5[var2];
        var6 = var4.bind(var3)(var6);
        var6 = var6.PromotionTypes;
        var7 = var6.BOGO;
        var6 = {};
        var1[6] = var6;
        var6 = var5[var2];
        var6 = var4.bind(var3)(var6);
        var6 = var6.PromotionTypes;
        var7 = var6.THIRD_PARTY_DIRECT_FULFILLMENT;
        var6 = {};
        var1[6] = var6;
        var6 = var5[var2];
        var6 = var4.bind(var3)(var6);
        var6 = var6.PromotionTypes;
        var7 = var6.MARKETING_MOMENT;
        var6 = {};
        var1[6] = var6;
        var6 = var5[var2];
        var6 = var4.bind(var3)(var6);
        var6 = var6.PromotionTypes;
        var7 = var6.THIRD_PARTY_INBOUND;
        var6 = {};
        var1[6] = var6;
        var6 = var5[var2];
        var6 = var4.bind(var3)(var6);
        var6 = var6.PromotionTypes;
        var7 = var6.THIRD_PARTY_OUTBOUND;
        var6 = {};
        var1[6] = var6;
        var6 = var5[var2];
        var6 = var4.bind(var3)(var6);
        var6 = var6.PromotionTypes;
        var7 = var6.GIFT_PROMOTION;
        var6 = {};
        var1[6] = var6;
        var2 = var5[var2];
        var2 = var4.bind(var3)(var2);
        var2 = var2.PromotionTypes;
        var3 = var2.THIRD_PARTY_OUTBOUND_RECURRING;
        var2 = {};
        var1[2] = var2;
        return var1;
    };
    var _closure1_slot22 = var10;
    var1 = function getLatestActiveOutboundPromotionStartDate() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = global;
            var4 = var1.Object;
            var3 = var4.values;
            var5 = _closure1_slot16;
            var6 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 8;
            var1 = var2[var1];
            var2 = undefined;
            var1 = var6.bind(var2)(var1);
            var1 = var1.PromotionTypes;
            var1 = var1.THIRD_PARTY_OUTBOUND;
            var1 = var5[var1];
            var7 = var3.bind(var4)(var1);
            var1 = var7.length;
            var6 = 0;
            var3 = var6 < var1;
            var1 = null;
            var5 = null;
            var4 = null;
            if(!var3) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var3 = var7[var6];
            var8 = var1 == var5;
            if(var8) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var9 = var3.startDate;
            var8 = var9 > var5;
case 8:
            if(!var8) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var5 = var3.startDate;
case 10:
            var6 = var6 + 1;
            var3 = var7.length;
            var4 = var5;
            if(var6 < var3) { _fun0002_ip = 7; continue _fun0002 }
case 6:
            var3 = var1 == var4;
            var2 = undefined;
            if(var3) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var3 = var4.toISOString;
            var2 = var3.bind(var4)();
case 12:
            var3 = var1 != var2;
            var1 = null;
            if(!var3) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var1 = var2;
case 14:
            return var1;
        }
    };
    var _closure1_slot23 = var1;
    var1 = function initializeFromUserSettings() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = _closure1_slot7;
            var1 = var1.settings;
            var5 = var1.userContent;
            var2 = null;
            var6 = var2 == var5;
            var1 = undefined;
            var4 = undefined;
            if(var6) { _fun0003_ip = 16; continue _fun0003 }
case 17:
            var5 = var5.lastDismissedOutboundPromotionStartDate;
            var6 = var2 == var5;
            var4 = undefined;
            if(var6) { _fun0003_ip = 16; continue _fun0003 }
case 18:
            var4 = var5.value;
case 16:
            var5 = var2 != var4;
            var2 = null;
            if(!var5) { _fun0003_ip = 19; continue _fun0003 }
case 20:
            var2 = var4;
case 19:
            _closure1_slot17 = var2;
            return var1;
        }
    };
    var _closure1_slot24 = var1;
    var8 = global;
    var11 = var8.Object;
    var9 = var11.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var11)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 5;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 6;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 7;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot9 = var2;
    var2 = false;
    var9 = null;
    var11 = {'hasFetchedConsumedInboundPromotionId': false, 'consumedInboundPromotionId': null, 'lastSeenOutboundPromotionStartDate': null};
    var _closure1_slot10 = var11;
    var _closure1_slot11 = var9;
    var _closure1_slot12 = var2;
    var _closure1_slot13 = var9;
    var _closure1_slot14 = var2;
    var _closure1_slot15 = var9;
    var10 = var10.bind(var1)();
    var _closure1_slot16 = var10;
    var _closure1_slot17 = var9;
    var8 = var8.Map;
    var9 = var8.prototype;
    var9 = Object.create(var9, {constructor: {value: var8}});
    var15 = var9;
    var8 = new var15[var8](var14);
    var8 = var8 instanceof Object ? var8 : var9;
    var _closure1_slot18 = var8;
    var8 = new Array(0);
    var _closure1_slot19 = var8;
    var _closure1_slot20 = var2;
    var2 = 9;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.PersistedStore;
    var2 = function(arg1) {
        var4 = function PromotionsStore() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot2;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot5;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot4;
                var1 = _closure1_slot21;
                var1 = var1.bind(var3)();
                if(var1) { _fun0004_ip = 21; continue _fun0004 }
case 22:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0004_ip = 23; continue _fun0004;
case 21:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 23:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot6;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot3;
        var5 = {};
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var2 = arg1;
                var4 = this;
                var1 = null;
                if(!(var1 != var2)) { _fun0005_ip = 24; continue _fun0005 }
case 25:
                _closure1_slot10 = var2;
case 24:
                var3 = var4.waitFor;
                var2 = _closure1_slot7;
                var2 = var3.bind(var4)(var2);
                var3 = var4.syncWith;
                var5 = _closure1_slot7;
                var2 = new Array(1);
                var2[0] = var5;
                var1 = _closure1_slot24;
                var1 = var3.bind(var4)(var2, var1);
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(24);
        var1[0] = var5;
        var5 = {};
        var7 = 'outboundPromotions';
        var5['key'] = var7;
        var7 = function get() {
            var1 = global;
            var3 = var1.Object;
            var2 = var3.values;
            var4 = _closure1_slot16;
            var6 = _closure1_slot0;
            var5 = _closure1_slot1;
            var1 = 8;
            var5 = var5[var1];
            var1 = undefined;
            var1 = var6.bind(var1)(var5);
            var1 = var1.PromotionTypes;
            var1 = var1.THIRD_PARTY_OUTBOUND;
            var1 = var4[var1];
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['get'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'outboundRecurringPromotions';
        var5['key'] = var7;
        var7 = function get() {
            var1 = global;
            var3 = var1.Object;
            var2 = var3.values;
            var4 = _closure1_slot16;
            var6 = _closure1_slot0;
            var5 = _closure1_slot1;
            var1 = 8;
            var5 = var5[var1];
            var1 = undefined;
            var1 = var6.bind(var1)(var5);
            var1 = var1.PromotionTypes;
            var1 = var1.THIRD_PARTY_OUTBOUND_RECURRING;
            var1 = var4[var1];
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['get'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'lastSeenOutboundPromotionStartDate';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot10;
            var1 = var1.lastSeenOutboundPromotionStartDate;
            return var1;
        };
        var5['get'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'lastDismissedOutboundPromotionStartDate';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot17;
            return var1;
        };
        var5['get'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'lastFetchedActivePromotions';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot15;
            return var1;
        };
        var5['get'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'isFetchingActivePromotions';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot14;
            return var1;
        };
        var5['get'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'hasFetchedConsumedInboundPromotionId';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot10;
            var1 = var1.hasFetchedConsumedInboundPromotionId;
            return var1;
        };
        var5['get'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'consumedInboundPromotionId';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot10;
            var1 = var1.consumedInboundPromotionId;
            return var1;
        };
        var5['get'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'bogoPromotion';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot11;
            return var1;
        };
        var5['get'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'isFetchingActiveBogoPromotion';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot12;
            return var1;
        };
        var5['get'] = var7;
        var1[10] = var5;
        var5 = {};
        var7 = 'lastFetchedActiveBogoPromotion';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot13;
            return var1;
        };
        var5['get'] = var7;
        var1[11] = var5;
        var5 = {};
        var7 = 'promotionsByType';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot16;
            return var1;
        };
        var5['get'] = var7;
        var1[12] = var5;
        var5 = {};
        var7 = 'getPromotionByTypeAndId';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var2 = _closure1_slot16;
                var1 = arg1;
                var3 = var2[var1];
                var1 = null;
                var2 = var1 == var3;
                var1 = undefined;
                if(var2) { _fun0006_ip = 17; continue _fun0006 }
case 26:
                var2 = arg2;
                var1 = var3[var2];
case 17:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[13] = var5;
        var5 = {};
        var7 = 'getPromotionByTypeAndKey';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            var2 = arg2;
            var _closure3_slot0 = var2;
            var2 = global;
            var4 = var2.Object;
            var3 = var4.values;
            var5 = _closure1_slot16;
            var2 = arg1;
            var2 = var5[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.find;
            var1 = function(arg1) {
                var1 = arg1;
                var2 = var1.promotionKey;
                var1 = _closure3_slot0;
                var1 = var2 === var1;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[14] = var5;
        var5 = {};
        var7 = 'getState';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot10;
            return var1;
        };
        var5['value'] = var7;
        var1[15] = var5;
        var5 = {};
        var7 = 'getMarketingComponentByType';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var3 = _closure1_slot18;
                var2 = var3.get;
                var1 = arg1;
                var2 = var2.bind(var3)(var1);
                var1 = null;
                var3 = var1 != var2;
                if(!var3) { _fun0007_ip = 17; continue _fun0007 }
case 27:
                var1 = var2;
case 17:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[16] = var5;
        var5 = {};
        var7 = 'getPromotionsByPartner';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var1 = arg1;
            var _closure3_slot0 = var1;
            var1 = {};
            var4 = global;
            var11 = var4.Object;
            var10 = var11.values;
            var12 = _closure1_slot16;
            var8 = _closure1_slot0;
            var9 = _closure1_slot1;
            var3 = 8;
            var5 = var9[var3];
            var7 = undefined;
            var5 = var8.bind(var7)(var5);
            var5 = var5.PromotionTypes;
            var5 = var5.THIRD_PARTY_OUTBOUND;
            var5 = var12[var5];
            var11 = var10.bind(var11)(var5);
            var10 = var11.filter;
            var5 = function(arg1) {
                var1 = arg1;
                var2 = var1.partnerId;
                var1 = _closure3_slot0;
                var1 = var2 === var1;
                return var1;
            };
            var5 = var10.bind(var11)(var5);
            var1['oneTime'] = var5;
            var5 = var4.Object;
            var4 = var5.values;
            var6 = _closure1_slot16;
            var3 = var9[var3];
            var3 = var8.bind(var7)(var3);
            var3 = var3.PromotionTypes;
            var3 = var3.THIRD_PARTY_OUTBOUND_RECURRING;
            var3 = var6[var3];
            var4 = var4.bind(var5)(var3);
            var3 = var4.filter;
            var2 = function(arg1) {
                var1 = arg1;
                var2 = var1.partnerId;
                var1 = _closure3_slot0;
                var1 = var2 === var1;
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            var1['recurring'] = var2;
            return var1;
        };
        var5['value'] = var7;
        var1[17] = var5;
        var5 = {};
        var7 = 'getGiftPromotion';
        var5['key'] = var7;
        var7 = function value() {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var2 = _closure1_slot16;
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 8;
                var3 = var3[var1];
                var1 = undefined;
                var1 = var4.bind(var1)(var3);
                var1 = var1.PromotionTypes;
                var1 = var1.GIFT_PROMOTION;
                var3 = var2[var1];
                var1 = global;
                var2 = var1.Object;
                var1 = var2.keys;
                var4 = var1.bind(var2)(var3);
                var5 = var4.length;
                var2 = 0;
                var1 = null;
                if(!(var2 !== var5)) { _fun0008_ip = 28; continue _fun0008 }
case 29:
                var2 = var4[var2];
                var1 = var3[var2];
case 28:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[18] = var5;
        var5 = {};
        var7 = 'getGiftPromotionRewardSkuIds';
        var5['key'] = var7;
        var7 = function value() {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var2 = this;
                var1 = var2.getGiftPromotion;
                var3 = var1.bind(var2)();
                var2 = null;
                var4 = var2 == var3;
                var1 = undefined;
                if(var4) { _fun0009_ip = 30; continue _fun0009 }
case 31:
                var1 = var3.rewardSkuIds;
case 30:
                if(!(var2 == var1)) { _fun0009_ip = 32; continue _fun0009 }
case 33:
                var1 = new Array(0);
case 32:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[19] = var5;
        var5 = {};
        var7 = 'getMarketingMomentPromotion';
        var5['key'] = var7;
        var7 = function value() {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var2 = _closure1_slot16;
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 8;
                var3 = var3[var1];
                var1 = undefined;
                var1 = var4.bind(var1)(var3);
                var1 = var1.PromotionTypes;
                var1 = var1.MARKETING_MOMENT;
                var3 = var2[var1];
                var1 = global;
                var4 = var1.Object;
                var2 = var4.keys;
                var4 = var2.bind(var4)(var3);
                var5 = var4.length;
                var2 = 0;
                if(!(var2 !== var5)) { _fun0010_ip = 6; continue _fun0010 }
case 4:
                var2 = var4[var2];
                var2 = var3[var2];
                var3 = var2.endDate;
                var1 = var1.Date;
                var4 = var1.prototype;
                var4 = Object.create(var4, {constructor: {value: var1}});
                var7 = var4;
                var1 = new var7[var1](var6);
                var1 = var1 instanceof Object ? var1 : var4;
                var3 = var3 < var1;
                var1 = null;
                if(var3) { _fun0010_ip = 34; continue _fun0010 }
case 35:
                var1 = var2;
case 34:
                return var1;
case 6:
                var1 = null;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[20] = var5;
        var5 = {};
        var7 = 'getMarketingMomentRewardSkuIds';
        var5['key'] = var7;
        var7 = function value() {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var2 = this;
                var1 = var2.getMarketingMomentPromotion;
                var3 = var1.bind(var2)();
                var2 = null;
                var4 = var2 == var3;
                var1 = undefined;
                if(var4) { _fun0011_ip = 17; continue _fun0011 }
case 36:
                var1 = var3.rewardSkuIds;
case 17:
                if(!(var2 == var1)) { _fun0011_ip = 37; continue _fun0011 }
case 38:
                var1 = new Array(0);
case 37:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[21] = var5;
        var5 = {};
        var7 = 'claimedOutboundPromotionCodes';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot19;
            return var1;
        };
        var5['get'] = var7;
        var1[22] = var5;
        var5 = {};
        var7 = 'claimedOutboundPromotionCodesLoaded';
        var5['key'] = var7;
        var6 = function get() {
            var1 = _closure1_slot20;
            return var1;
        };
        var5['get'] = var6;
        var1[23] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'PromotionsStore';
    var8['displayName'] = var2;
    var2 = 'PromotionsPersistedStore';
    var8['persistKey'] = var2;
    var2 = new Array(1);
    var9 = function(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var1 = arg1;
case 39: // try_start_0
            var2 = var1;
            var2 = delete var2.bogoPromotion;
case 40: // try_end0
            _fun0012_ip = 41; continue _fun0012;
case 42: // catch_target0
            CatchBlockStart(arg_register=1);
case 41:
            return var1;
        }
    };
    var2[0] = var9;
    var8['migrations'] = var2;
    var2 = 10;
    var2 = var6[var2];
    var14 = var7.bind(var1)(var2);
    var2 = {};
    var9 = function handleActivePromotionsFetchSuccess(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var1 = arg1;
            var7 = var1.promotions;
            var3 = var1.consumedInboundPromotionId;
            var4 = _closure1_slot22;
            var1 = undefined;
            var4 = var4.bind(var1)();
            _closure1_slot16 = var4;
            var4 = global;
            var5 = var4.Map;
            var6 = var5.prototype;
            var6 = Object.create(var6, {constructor: {value: var5}});
            var9 = var6;
            var5 = new var9[var5](var8);
            var5 = var5 instanceof Object ? var5 : var6;
            _closure1_slot18 = var5;
            var6 = var7.forEach;
            var5 = function(arg1) {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    var1 = arg1;
                    var4 = _closure1_slot8;
                    var3 = var4.createFromServer;
                    var4 = var3.bind(var4)(var1);
                    var3 = _closure1_slot16;
                    var2 = var1.promotion_type;
                    var3 = var3[var2];
                    var2 = var1.id;
                    var3[var2] = var4;
                    var3 = var1.marketing_components;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0014_ip = 43; continue _fun0014 }
case 44:
                    var2 = var3.forEach;
                    var1 = function(arg1) {
                        var6 = arg1;
                        var4 = _closure1_slot18;
                        var3 = var4.set;
                        var2 = var6.component_type;
                        var5 = _closure1_slot9;
                        var1 = var5.createFromServer;
                        var1 = var1.bind(var5)(var6);
                        var1 = var3.bind(var4)(var2, var1);
                        var1 = undefined;
                        return var1;
                    };
                    var1 = var2.bind(var3)(var1);
case 43:
                    var1 = undefined;
                    return var1;
                }
            };
            var5 = var6.bind(var7)(var5);
            var5 = var4.Date;
            var4 = var5.now;
            var4 = var4.bind(var5)();
            _closure1_slot15 = var4;
            var4 = false;
            _closure1_slot14 = var4;
            var4 = _closure1_slot10;
            var4 = var4.hasFetchedConsumedInboundPromotionId;
            if(var4) { _fun0013_ip = 45; continue _fun0013 }
case 46:
            var5 = _closure1_slot10;
            var4 = true;
            var5['hasFetchedConsumedInboundPromotionId'] = var4;
            var2 = _closure1_slot10;
            var2['consumedInboundPromotionId'] = var3;
case 45:
            return var1;
        }
    };
    var2['ACTIVE_PROMOTIONS_FETCH_SUCCESS'] = var9;
    var9 = function handleActivePromotionsFetchStart() {
        var1 = true;
        _closure1_slot14 = var1;
        var1 = undefined;
        return var1;
    };
    var2['ACTIVE_PROMOTIONS_FETCH'] = var9;
    var9 = function handleActivePromotionsFetchFail() {
        var2 = _closure1_slot22;
        var1 = undefined;
        var2 = var2.bind(var1)();
        _closure1_slot16 = var2;
        var2 = global;
        var2 = var2.Map;
        var4 = var2.prototype;
        var4 = Object.create(var4, {constructor: {value: var2}});
        var5 = var4;
        var2 = new var5[var2](var4);
        var2 = var2 instanceof Object ? var2 : var4;
        _closure1_slot18 = var2;
        var2 = false;
        _closure1_slot14 = var2;
        return var1;
    };
    var2['ACTIVE_PROMOTIONS_FETCH_FAIL'] = var9;
    var9 = function handleActiveBogoPromotionFetchSuccess(arg1) {
        var1 = arg1;
        var2 = var1.activePromotion;
        var1 = {};
        var3 = var2.id;
        var1['id'] = var3;
        var4 = var2.startDate;
        var3 = var4.toISOString;
        var3 = var3.bind(var4)();
        var1['startDate'] = var3;
        var3 = var2.endDate;
        var2 = var3.toISOString;
        var2 = var2.bind(var3)();
        var1['endDate'] = var2;
        _closure1_slot11 = var1;
        var1 = global;
        var3 = var1.Date;
        var1 = var3.now;
        var1 = var1.bind(var3)();
        _closure1_slot13 = var1;
        var1 = false;
        _closure1_slot12 = var1;
        var1 = undefined;
        return var1;
    };
    var2['ACTIVE_BOGO_PROMOTION_FETCH_SUCCESS'] = var9;
    var9 = function handleActiveBogoPromotionFetchStart() {
        var1 = true;
        _closure1_slot12 = var1;
        var1 = undefined;
        return var1;
    };
    var2['ACTIVE_BOGO_PROMOTION_FETCH'] = var9;
    var9 = function handleActiveBogoPromotionFetchFail() {
        var1 = null;
        _closure1_slot11 = var1;
        var1 = false;
        _closure1_slot12 = var1;
        var1 = undefined;
        return var1;
    };
    var2['ACTIVE_BOGO_PROMOTION_FETCH_FAIL'] = var9;
    var9 = function handleDismissOutboundPromotionNotice() {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var1 = global;
            var5 = var1.Object;
            var4 = var5.values;
            var6 = _closure1_slot16;
            var7 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 8;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var7.bind(var1)(var2);
            var2 = var2.PromotionTypes;
            var2 = var2.THIRD_PARTY_OUTBOUND;
            var2 = var6[var2];
            var2 = var4.bind(var5)(var2);
            var4 = var2.length;
            var2 = 0;
            if(!(var2 !== var4)) { _fun0015_ip = 9; continue _fun0015 }
case 4:
            var2 = _closure1_slot23;
            var2 = var2.bind(var1)();
            var4 = null;
            if(!(var4 != var2)) { _fun0015_ip = 47; continue _fun0015 }
case 48:
            _closure1_slot17 = var2;
case 47:
            return var1;
case 9:
            var1 = false;
            return var1;
        }
    };
    var2['OUTBOUND_PROMOTION_NOTICE_DISMISS'] = var9;
    var9 = function handleOutboundPromotionsSeen() {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var1 = global;
            var5 = var1.Object;
            var4 = var5.values;
            var6 = _closure1_slot16;
            var7 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 8;
            var3 = var3[var1];
            var1 = undefined;
            var3 = var7.bind(var1)(var3);
            var3 = var3.PromotionTypes;
            var3 = var3.THIRD_PARTY_OUTBOUND;
            var3 = var6[var3];
            var3 = var4.bind(var5)(var3);
            var4 = var3.length;
            var3 = 0;
            if(!(var3 !== var4)) { _fun0016_ip = 8; continue _fun0016 }
case 4:
            var3 = _closure1_slot23;
            var3 = var3.bind(var1)();
            var4 = null;
            if(!(var4 != var3)) { _fun0016_ip = 49; continue _fun0016 }
case 48:
            _closure1_slot17 = var3;
            var2 = _closure1_slot10;
            var2['lastSeenOutboundPromotionStartDate'] = var3;
case 49:
            return var1;
case 8:
            var1 = false;
            return var1;
        }
    };
    var2['OUTBOUND_PROMOTIONS_SEEN'] = var9;
    var9 = function handleClaimedOutboundPromotionCodesFetchSuccess(arg1) {
        var1 = arg1;
        var1 = var1.claimedOutboundPromotionCodes;
        _closure1_slot19 = var1;
        var1 = true;
        _closure1_slot20 = var1;
        var1 = undefined;
        return var1;
    };
    var2['CLAIMED_OUTBOUND_PROMOTION_CODES_FETCH_SUCCESS'] = var9;
    var9 = function handleClaimedOutboundPromotionCodesFetchFail() {
        var1 = new Array(0);
        _closure1_slot19 = var1;
        var1 = true;
        _closure1_slot20 = var1;
        var1 = undefined;
        return var1;
    };
    var2['CLAIMED_OUTBOUND_PROMOTION_CODES_FETCH_FAIL'] = var9;
    var9 = function handleClaimedOutboundPromotionCodeAdd(arg1) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
            var2 = arg1;
            var3 = var2.claimedOutboundPromotionCode;
            var _closure2_slot0 = var3;
            var5 = _closure1_slot19;
            var4 = var5.some;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.promotion;
                var2 = var1.id;
                var1 = _closure2_slot0;
                var1 = var1.promotion;
                var1 = var1.id;
                var1 = var2 === var1;
                return var1;
            };
            var1 = var4.bind(var5)(var1);
            if(var1) { _fun0017_ip = 50; continue _fun0017 }
case 51:
            var7 = _closure1_slot19;
            var1 = new Array(1);
            var6 = 0;
            var8 = var1;
            var4 = arraySpread(var8, var7, var6);
            var1[3] = var3;
            var3 = 1;
            var3 = var4 + var3;
            _closure1_slot19 = var1;
            var1 = undefined;
            return var1;
case 50:
            var1 = false;
            return var1;
        }
    };
    var2['CLAIMED_OUTBOUND_PROMOTION_CODE_ADD'] = var9;
    var9 = function handleLogout() {
        var3 = false;
        var4 = null;
        var1 = {'hasFetchedConsumedInboundPromotionId': false, 'consumedInboundPromotionId': null, 'lastSeenOutboundPromotionStartDate': null};
        _closure1_slot10 = var1;
        _closure1_slot14 = var3;
        _closure1_slot15 = var4;
        _closure1_slot12 = var3;
        _closure1_slot13 = var4;
        var5 = _closure1_slot22;
        var1 = undefined;
        var5 = var5.bind(var1)();
        _closure1_slot16 = var5;
        _closure1_slot11 = var4;
        var5 = _closure1_slot18;
        var4 = var5.clear;
        var4 = var4.bind(var5)();
        var4 = new Array(0);
        _closure1_slot19 = var4;
        _closure1_slot20 = var3;
        return var1;
    };
    var2['LOGOUT'] = var9;
    var4 = function handlePremiumMarketingPreview(arg1) {
        var1 = arg1;
        var4 = var1.data;
        var3 = _closure1_slot9;
        var2 = var3.createFromServer;
        var4 = var2.bind(var3)(var4);
        var3 = _closure1_slot18;
        var2 = var3.set;
        var1 = var4.componentType;
        var1 = var2.bind(var3)(var1, var4);
        var1 = undefined;
        return var1;
    };
    var2['PREMIUM_MARKETING_PREVIEW'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var15 = var4;
    var13 = var2;
    var2 = new var15[var8](var14, var13, var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/promotions/PromotionsStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();