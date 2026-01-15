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
            _closure1_slot20 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot20 = var1;
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
    var _closure1_slot21 = var1;
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
            _closure1_slot18 = var2;
            return var1;
        }
    };
    var _closure1_slot22 = var1;
    var2 = global;
    var10 = var2.Object;
    var9 = var10.defineProperty;
    var8 = {};
    var1 = true;
    var8['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var8);
    var1 = 0;
    var8 = var6[var1];
    var1 = undefined;
    var8 = var7.bind(var1)(var8);
    var _closure1_slot2 = var8;
    var8 = 1;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot3 = var8;
    var8 = 2;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot4 = var8;
    var8 = 3;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot5 = var8;
    var8 = 4;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot6 = var8;
    var8 = 5;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot7 = var8;
    var8 = 6;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot8 = var8;
    var8 = 7;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot9 = var8;
    var9 = false;
    var8 = null;
    var10 = {'hasFetchedConsumedInboundPromotionId': false, 'consumedInboundPromotionId': null, 'lastSeenOutboundPromotionStartDate': null};
    var _closure1_slot10 = var10;
    var _closure1_slot11 = var8;
    var _closure1_slot12 = var9;
    var _closure1_slot13 = var8;
    var _closure1_slot14 = var9;
    var _closure1_slot15 = var8;
    var9 = {};
    var10 = 8;
    var11 = var6[var10];
    var11 = var5.bind(var1)(var11);
    var11 = var11.PromotionTypes;
    var12 = var11.BOGO;
    var11 = {};
    var9[var12] = var11;
    var11 = var6[var10];
    var11 = var5.bind(var1)(var11);
    var11 = var11.PromotionTypes;
    var12 = var11.MARKETING_MOMENT;
    var11 = {};
    var9[var12] = var11;
    var11 = var6[var10];
    var11 = var5.bind(var1)(var11);
    var11 = var11.PromotionTypes;
    var12 = var11.THIRD_PARTY_INBOUND;
    var11 = {};
    var9[var12] = var11;
    var11 = var6[var10];
    var11 = var5.bind(var1)(var11);
    var11 = var11.PromotionTypes;
    var12 = var11.THIRD_PARTY_OUTBOUND;
    var11 = {};
    var9[var12] = var11;
    var11 = var6[var10];
    var11 = var5.bind(var1)(var11);
    var11 = var11.PromotionTypes;
    var12 = var11.GIFT_PROMOTION;
    var11 = {};
    var9[var12] = var11;
    var10 = var6[var10];
    var10 = var5.bind(var1)(var10);
    var10 = var10.PromotionTypes;
    var11 = var10.THIRD_PARTY_OUTBOUND_RECURRING;
    var10 = {};
    var9[var11] = var10;
    var _closure1_slot16 = var9;
    var9 = {};
    var _closure1_slot17 = var9;
    var _closure1_slot18 = var8;
    var2 = var2.Map;
    var8 = var2.prototype;
    var8 = Object.create(var8, {constructor: {value: var2}});
    var16 = var8;
    var2 = new var16[var2](var15);
    var2 = var2 instanceof Object ? var2 : var8;
    var _closure1_slot19 = var2;
    var2 = 10;
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
                var1 = _closure1_slot20;
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
                var1 = _closure1_slot22;
                var1 = var3.bind(var4)(var2, var1);
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(17);
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
            var1 = _closure1_slot17;
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
            var1 = _closure1_slot18;
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
        var7 = 'getState';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot10;
            return var1;
        };
        var5['value'] = var7;
        var1[14] = var5;
        var5 = {};
        var7 = 'getMarketingComponentByType';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var3 = _closure1_slot19;
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
        var1[15] = var5;
        var5 = {};
        var7 = 'getGiftPromotionRewardSkuIds';
        var5['key'] = var7;
        var6 = function value() {
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
                var2 = var2[var1];
                var1 = global;
                var3 = var1.Object;
                var1 = var3.keys;
                var3 = var1.bind(var3)(var2);
                var4 = var3.length;
                var1 = 0;
                if(!(var1 !== var4)) { _fun0008_ip = 28; continue _fun0008 }
case 4:
                var1 = var3[var1];
                var1 = var2[var1];
                var1 = var1.rewardSkuIds;
                _fun0008_ip = 9; continue _fun0008;
case 28:
                var1 = new Array(0);
case 9:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[16] = var5;
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
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var1 = arg1;
case 29: // try_start_0
            var2 = var1;
            var2 = delete var2.bogoPromotion;
case 30: // try_end0
            _fun0009_ip = 31; continue _fun0009;
case 32: // catch_target0
            CatchBlockStart(arg_register=1);
case 31:
            return var1;
        }
    };
    var2[0] = var9;
    var8['migrations'] = var2;
    var2 = 11;
    var2 = var6[var2];
    var15 = var7.bind(var1)(var2);
    var2 = {};
    var9 = function handleActivePromotionsFetchSuccess(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var1 = arg1;
            var7 = var1.promotions;
            var3 = var1.consumedInboundPromotionId;
            var1 = {};
            _closure1_slot17 = var1;
            var4 = {};
            var6 = _closure1_slot0;
            var8 = _closure1_slot1;
            var5 = 8;
            var9 = var8[var5];
            var1 = undefined;
            var9 = var6.bind(var1)(var9);
            var9 = var9.PromotionTypes;
            var10 = var9.BOGO;
            var9 = {};
            var4[var10] = var9;
            var9 = var8[var5];
            var9 = var6.bind(var1)(var9);
            var9 = var9.PromotionTypes;
            var10 = var9.MARKETING_MOMENT;
            var9 = {};
            var4[var10] = var9;
            var9 = var8[var5];
            var9 = var6.bind(var1)(var9);
            var9 = var9.PromotionTypes;
            var10 = var9.THIRD_PARTY_INBOUND;
            var9 = {};
            var4[var10] = var9;
            var9 = var8[var5];
            var9 = var6.bind(var1)(var9);
            var9 = var9.PromotionTypes;
            var10 = var9.THIRD_PARTY_OUTBOUND;
            var9 = {};
            var4[var10] = var9;
            var9 = var8[var5];
            var9 = var6.bind(var1)(var9);
            var9 = var9.PromotionTypes;
            var10 = var9.GIFT_PROMOTION;
            var9 = {};
            var4[var10] = var9;
            var5 = var8[var5];
            var5 = var6.bind(var1)(var5);
            var5 = var5.PromotionTypes;
            var6 = var5.THIRD_PARTY_OUTBOUND_RECURRING;
            var5 = {};
            var4[var6] = var5;
            _closure1_slot16 = var4;
            var4 = global;
            var5 = var4.Map;
            var6 = var5.prototype;
            var6 = Object.create(var6, {constructor: {value: var5}});
            var12 = var6;
            var5 = new var12[var5](var11);
            var5 = var5 instanceof Object ? var5 : var6;
            _closure1_slot19 = var5;
            var6 = var7.forEach;
            var5 = function(arg1) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var3 = arg1;
                    var4 = _closure1_slot8;
                    var1 = var4.createFromServer;
                    var4 = var1.bind(var4)(var3);
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var1 = 9;
                    var5 = var5[var1];
                    var1 = undefined;
                    var7 = var6.bind(var1)(var5);
                    var6 = var7.isRecurringPromotion;
                    var5 = {};
                    var8 = var4.outboundTitle;
                    var5['promotionPartner'] = var8;
                    var8 = var4.promotionType;
                    var5['promotionType'] = var8;
                    var6 = var6.bind(var7)(var5);
                    var5 = true;
                    if(!(var5 !== var6)) { _fun0011_ip = 33; continue _fun0011 }
case 34:
                    var6 = var3.promotion_type;
                    var7 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var8 = 8;
                    var5 = var5[var8];
                    var5 = var7.bind(var1)(var5);
                    var5 = var5.PromotionTypes;
                    var5 = var5.THIRD_PARTY;
                    if(!(var6 !== var5)) { _fun0011_ip = 35; continue _fun0011 }
case 36:
                    var6 = _closure1_slot16;
                    var5 = var3.promotion_type;
                    var6 = var6[var5];
                    var5 = var3.id;
                    var6[var5] = var4;
                    var7 = var3.marketing_components;
                    var5 = null;
                    if(!(var5 != var7)) { _fun0011_ip = 37; continue _fun0011 }
case 38:
                    var6 = var7.forEach;
                    var5 = function(arg1) {
                        var6 = arg1;
                        var4 = _closure1_slot19;
                        var3 = var4.set;
                        var2 = var6.component_type;
                        var5 = _closure1_slot9;
                        var1 = var5.createFromServer;
                        var1 = var1.bind(var5)(var6);
                        var1 = var3.bind(var4)(var2, var1);
                        var1 = undefined;
                        return var1;
                    };
                    var5 = var6.bind(var7)(var5);
                    _fun0011_ip = 37; continue _fun0011;
case 35:
                    var6 = _closure1_slot16;
                    var7 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var5 = var5[var8];
                    var5 = var7.bind(var1)(var5);
                    var5 = var5.PromotionTypes;
                    var5 = var5.THIRD_PARTY_OUTBOUND;
                    var5 = var6[var5];
                    var3 = var3.id;
                    var5[var3] = var4;
                    _fun0011_ip = 37; continue _fun0011;
case 33:
                    var5 = var4.id;
                    var3 = _closure1_slot17;
                    var3 = var5 in var3;
                    if(var3) { _fun0011_ip = 37; continue _fun0011 }
case 39:
                    var3 = _closure1_slot17;
                    var2 = var4.id;
                    var3[var2] = var4;
case 37:
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
            if(var4) { _fun0010_ip = 40; continue _fun0010 }
case 41:
            var5 = _closure1_slot10;
            var4 = true;
            var5['hasFetchedConsumedInboundPromotionId'] = var4;
            var2 = _closure1_slot10;
            var2['consumedInboundPromotionId'] = var3;
case 40:
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
        var2 = {};
        var5 = _closure1_slot0;
        var6 = _closure1_slot1;
        var4 = 8;
        var7 = var6[var4];
        var1 = undefined;
        var7 = var5.bind(var1)(var7);
        var7 = var7.PromotionTypes;
        var8 = var7.BOGO;
        var7 = {};
        var2[var8] = var7;
        var7 = var6[var4];
        var7 = var5.bind(var1)(var7);
        var7 = var7.PromotionTypes;
        var8 = var7.MARKETING_MOMENT;
        var7 = {};
        var2[var8] = var7;
        var7 = var6[var4];
        var7 = var5.bind(var1)(var7);
        var7 = var7.PromotionTypes;
        var8 = var7.THIRD_PARTY_INBOUND;
        var7 = {};
        var2[var8] = var7;
        var7 = var6[var4];
        var7 = var5.bind(var1)(var7);
        var7 = var7.PromotionTypes;
        var8 = var7.THIRD_PARTY_OUTBOUND;
        var7 = {};
        var2[var8] = var7;
        var7 = var6[var4];
        var7 = var5.bind(var1)(var7);
        var7 = var7.PromotionTypes;
        var8 = var7.GIFT_PROMOTION;
        var7 = {};
        var2[var8] = var7;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var4 = var4.PromotionTypes;
        var5 = var4.THIRD_PARTY_OUTBOUND_RECURRING;
        var4 = {};
        var2[var5] = var4;
        _closure1_slot16 = var2;
        var2 = global;
        var2 = var2.Map;
        var4 = var2.prototype;
        var4 = Object.create(var4, {constructor: {value: var2}});
        var10 = var4;
        var2 = new var10[var2](var9);
        var2 = var2 instanceof Object ? var2 : var4;
        _closure1_slot19 = var2;
        var2 = false;
        _closure1_slot14 = var2;
        var2 = {};
        _closure1_slot17 = var2;
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
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
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
            if(!(var2 !== var4)) { _fun0012_ip = 9; continue _fun0012 }
case 4:
            var2 = _closure1_slot21;
            var2 = var2.bind(var1)();
            var4 = null;
            if(!(var4 != var2)) { _fun0012_ip = 42; continue _fun0012 }
case 43:
            _closure1_slot18 = var2;
case 42:
            return var1;
case 9:
            var1 = false;
            return var1;
        }
    };
    var2['OUTBOUND_PROMOTION_NOTICE_DISMISS'] = var9;
    var9 = function handleOutboundPromotionsSeen() {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
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
            if(!(var3 !== var4)) { _fun0013_ip = 8; continue _fun0013 }
case 4:
            var3 = _closure1_slot21;
            var3 = var3.bind(var1)();
            var4 = null;
            if(!(var4 != var3)) { _fun0013_ip = 44; continue _fun0013 }
case 43:
            _closure1_slot18 = var3;
            var2 = _closure1_slot10;
            var2['lastSeenOutboundPromotionStartDate'] = var3;
case 44:
            return var1;
case 8:
            var1 = false;
            return var1;
        }
    };
    var2['OUTBOUND_PROMOTIONS_SEEN'] = var9;
    var9 = function handleLogout() {
        var1 = false;
        var3 = null;
        var4 = {'hasFetchedConsumedInboundPromotionId': false, 'consumedInboundPromotionId': null, 'lastSeenOutboundPromotionStartDate': null};
        _closure1_slot10 = var4;
        _closure1_slot14 = var1;
        _closure1_slot15 = var3;
        _closure1_slot12 = var1;
        _closure1_slot13 = var3;
        var4 = {};
        var6 = _closure1_slot0;
        var7 = _closure1_slot1;
        var5 = 8;
        var8 = var7[var5];
        var1 = undefined;
        var8 = var6.bind(var1)(var8);
        var8 = var8.PromotionTypes;
        var9 = var8.BOGO;
        var8 = {};
        var4[var9] = var8;
        var8 = var7[var5];
        var8 = var6.bind(var1)(var8);
        var8 = var8.PromotionTypes;
        var9 = var8.MARKETING_MOMENT;
        var8 = {};
        var4[var9] = var8;
        var8 = var7[var5];
        var8 = var6.bind(var1)(var8);
        var8 = var8.PromotionTypes;
        var9 = var8.THIRD_PARTY_INBOUND;
        var8 = {};
        var4[var9] = var8;
        var8 = var7[var5];
        var8 = var6.bind(var1)(var8);
        var8 = var8.PromotionTypes;
        var9 = var8.THIRD_PARTY_OUTBOUND;
        var8 = {};
        var4[var9] = var8;
        var8 = var7[var5];
        var8 = var6.bind(var1)(var8);
        var8 = var8.PromotionTypes;
        var9 = var8.GIFT_PROMOTION;
        var8 = {};
        var4[var9] = var8;
        var5 = var7[var5];
        var5 = var6.bind(var1)(var5);
        var5 = var5.PromotionTypes;
        var6 = var5.THIRD_PARTY_OUTBOUND_RECURRING;
        var5 = {};
        var4[var6] = var5;
        _closure1_slot16 = var4;
        _closure1_slot11 = var3;
        var3 = {};
        _closure1_slot17 = var3;
        var3 = _closure1_slot19;
        var2 = var3.clear;
        var2 = var2.bind(var3)();
        return var1;
    };
    var2['LOGOUT'] = var9;
    var4 = function handlePremiumMarketingPreview(arg1) {
        var1 = arg1;
        var4 = var1.data;
        var3 = _closure1_slot9;
        var2 = var3.createFromServer;
        var4 = var2.bind(var3)(var4);
        var3 = _closure1_slot19;
        var2 = var3.set;
        var1 = var4.componentType;
        var1 = var2.bind(var3)(var1, var4);
        var1 = undefined;
        return var1;
    };
    var2['PREMIUM_MARKETING_PREVIEW'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var16 = var4;
    var14 = var2;
    var2 = new var16[var8](var15, var14, var13);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/promotions/PromotionsStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();