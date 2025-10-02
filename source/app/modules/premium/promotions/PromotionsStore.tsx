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
 0:
 2: // try_start_0
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
 70: // try_end0
            _fun0001_ip = 74; continue _fun0001;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot17 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot17 = var1;
    var1 = function getLatestActiveOutboundPromotionStartDate() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = global;
            var4 = var1.Object;
            var3 = var4.values;
            var5 = _closure1_slot15;
            var6 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 7;
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
            if(!var3) { _fun0002_ip = 128; continue _fun0002 }
 83:
            var3 = var7[var6];
            var8 = var1 == var5;
            if(var8) { _fun0002_ip = 104; continue _fun0002 }
 94:
            var9 = var3.startDate;
            var8 = var9 > var5;
 104:
            if(!var8) { _fun0002_ip = 113; continue _fun0002 }
 107:
            var5 = var3.startDate;
 113:
            var6 = var6 + 1;
            var3 = var7.length;
            var4 = var5;
            if(var6 < var3) { _fun0002_ip = 83; continue _fun0002 }
 128:
            var3 = var1 == var4;
            var2 = undefined;
            if(var3) { _fun0002_ip = 147; continue _fun0002 }
 137:
            var3 = var4.toISOString;
            var2 = var3.bind(var4)();
 147:
            var3 = var1 != var2;
            var1 = null;
            if(!var3) { _fun0002_ip = 159; continue _fun0002 }
 156:
            var1 = var2;
 159:
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var1 = function initializeFromUserSettings() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = _closure1_slot7;
            var1 = var1.settings;
            var5 = var1.userContent;
            var2 = null;
            var6 = var2 == var5;
            var1 = undefined;
            var4 = undefined;
            if(var6) { _fun0003_ip = 52; continue _fun0003 }
 32:
            var5 = var5.lastDismissedOutboundPromotionStartDate;
            var6 = var2 == var5;
            var4 = undefined;
            if(var6) { _fun0003_ip = 52; continue _fun0003 }
 47:
            var4 = var5.value;
 52:
            var5 = var2 != var4;
            var2 = null;
            if(!var5) { _fun0003_ip = 64; continue _fun0003 }
 61:
            var2 = var4;
 64:
            _closure1_slot16 = var2;
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
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
    var8 = false;
    var2 = null;
    var9 = {'hasFetchedConsumedInboundPromotionId': false, 'consumedInboundPromotionId': null, 'lastSeenOutboundPromotionStartDate': null};
    var _closure1_slot9 = var9;
    var _closure1_slot10 = var2;
    var _closure1_slot11 = var8;
    var _closure1_slot12 = var2;
    var _closure1_slot13 = var8;
    var _closure1_slot14 = var2;
    var8 = {};
    var9 = 7;
    var10 = var6[var9];
    var10 = var5.bind(var1)(var10);
    var10 = var10.PromotionTypes;
    var11 = var10.BOGO;
    var10 = {};
    var8[var11] = var10;
    var10 = var6[var9];
    var10 = var5.bind(var1)(var10);
    var10 = var10.PromotionTypes;
    var11 = var10.MARKETING_MOMENT;
    var10 = {};
    var8[var11] = var10;
    var10 = var6[var9];
    var10 = var5.bind(var1)(var10);
    var10 = var10.PromotionTypes;
    var11 = var10.THIRD_PARTY_INBOUND;
    var10 = {};
    var8[var11] = var10;
    var9 = var6[var9];
    var9 = var5.bind(var1)(var9);
    var9 = var9.PromotionTypes;
    var10 = var9.THIRD_PARTY_OUTBOUND;
    var9 = {};
    var8[var10] = var9;
    var _closure1_slot15 = var8;
    var _closure1_slot16 = var2;
    var2 = 8;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.PersistedStore;
    var2 = function(arg1) {
        var4 = function PromotionsStore() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot2;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot5;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot4;
                var1 = _closure1_slot17;
                var1 = var1.bind(var3)();
                if(var1) { _fun0004_ip = 69; continue _fun0004 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0004_ip = 105; continue _fun0004;
 69:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
 105:
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
 0:
                var2 = arg1;
                var4 = this;
                var1 = null;
                if(!(var1 != var2)) { _fun0005_ip = 19; continue _fun0005 }
 12:
                _closure1_slot9 = var2;
 19:
                var3 = var4.waitFor;
                var2 = _closure1_slot7;
                var2 = var3.bind(var4)(var2);
                var3 = var4.syncWith;
                var5 = _closure1_slot7;
                var2 = new Array(1);
                var2[0] = var5;
                var1 = _closure1_slot19;
                var1 = var3.bind(var4)(var2, var1);
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(13);
        var1[0] = var5;
        var5 = {};
        var7 = 'outboundPromotions';
        var5['key'] = var7;
        var7 = function get() {
            var1 = global;
            var3 = var1.Object;
            var2 = var3.values;
            var4 = _closure1_slot15;
            var6 = _closure1_slot0;
            var5 = _closure1_slot1;
            var1 = 7;
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
        var7 = 'lastSeenOutboundPromotionStartDate';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot9;
            var1 = var1.lastSeenOutboundPromotionStartDate;
            return var1;
        };
        var5['get'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'lastDismissedOutboundPromotionStartDate';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot16;
            return var1;
        };
        var5['get'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'lastFetchedActivePromotions';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot14;
            return var1;
        };
        var5['get'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'isFetchingActiveOutboundPromotions';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot13;
            return var1;
        };
        var5['get'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'hasFetchedConsumedInboundPromotionId';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot9;
            var1 = var1.hasFetchedConsumedInboundPromotionId;
            return var1;
        };
        var5['get'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'consumedInboundPromotionId';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot9;
            var1 = var1.consumedInboundPromotionId;
            return var1;
        };
        var5['get'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'bogoPromotion';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot10;
            return var1;
        };
        var5['get'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'isFetchingActiveBogoPromotion';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot11;
            return var1;
        };
        var5['get'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'lastFetchedActiveBogoPromotion';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot12;
            return var1;
        };
        var5['get'] = var7;
        var1[10] = var5;
        var5 = {};
        var7 = 'promotionsByType';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot15;
            return var1;
        };
        var5['get'] = var7;
        var1[11] = var5;
        var5 = {};
        var7 = 'getState';
        var5['key'] = var7;
        var6 = function value() {
            var1 = _closure1_slot9;
            return var1;
        };
        var5['value'] = var6;
        var1[12] = var5;
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
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var1 = arg1;
 3: // try_start_0
            var2 = var1;
            var2 = delete var2.bogoPromotion;
 11: // try_end0
            _fun0006_ip = 15; continue _fun0006;
 13: // catch_target0
            CatchBlockStart(arg_register=1);
 15:
            return var1;
        }
    };
    var2[0] = var9;
    var8['migrations'] = var2;
    var2 = 9;
    var2 = var6[var2];
    var14 = var7.bind(var1)(var2);
    var2 = {};
    var9 = function handleActiveOutboundPromotionsFetchSuccess(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var1 = arg1;
            var4 = var1.promotions;
            var2 = var1.consumedInboundPromotionId;
            var3 = var4.forEach;
            var1 = function(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var6 = arg1;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var7 = 7;
                    var5 = var3[var7];
                    var1 = undefined;
                    var5 = var4.bind(var1)(var5);
                    var5 = var5.PromotionTypes;
                    var8 = var5.THIRD_PARTY;
                    var5 = new Array(2);
                    var5[0] = var8;
                    var3 = var3[var7];
                    var3 = var4.bind(var1)(var3);
                    var3 = var3.PromotionTypes;
                    var3 = var3.THIRD_PARTY_OUTBOUND;
                    var5[1] = var3;
                    var4 = var5.includes;
                    var3 = var6.promotion_type;
                    var4 = var4.bind(var5)(var3);
                    var3 = true;
                    if(!(var3 === var4)) { _fun0008_ip = 156; continue _fun0008 }
 95:
                    var4 = _closure1_slot15;
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var3 = var3[var7];
                    var3 = var5.bind(var1)(var3);
                    var3 = var3.PromotionTypes;
                    var3 = var3.THIRD_PARTY_OUTBOUND;
                    var4 = var4[var3];
                    var3 = var6.id;
                    var5 = _closure1_slot8;
                    var2 = var5.createFromServer;
                    var2 = var2.bind(var5)(var6);
                    var4[var3] = var2;
 156:
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var1);
            var1 = global;
            var3 = var1.Date;
            var1 = var3.now;
            var3 = var1.bind(var3)();
            _closure1_slot14 = var3;
            var3 = false;
            _closure1_slot13 = var3;
            var3 = _closure1_slot9;
            var3 = var3.hasFetchedConsumedInboundPromotionId;
            if(var3) { _fun0007_ip = 97; continue _fun0007 }
 75:
            var4 = _closure1_slot9;
            var3 = true;
            var4['hasFetchedConsumedInboundPromotionId'] = var3;
            var1 = _closure1_slot9;
            var1['consumedInboundPromotionId'] = var2;
 97:
            var1 = undefined;
            return var1;
        }
    };
    var2['ACTIVE_OUTBOUND_PROMOTIONS_FETCH_SUCCESS'] = var9;
    var9 = function handleActiveOutboundPromotionsFetchStart() {
        var1 = true;
        _closure1_slot13 = var1;
        var1 = undefined;
        return var1;
    };
    var2['ACTIVE_OUTBOUND_PROMOTIONS_FETCH'] = var9;
    var9 = function handleActiveOutboundPromotionsFetchFail() {
        var2 = {};
        var5 = _closure1_slot0;
        var6 = _closure1_slot1;
        var4 = 7;
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
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var4 = var4.PromotionTypes;
        var5 = var4.THIRD_PARTY_OUTBOUND;
        var4 = {};
        var2[var5] = var4;
        _closure1_slot15 = var2;
        var2 = false;
        _closure1_slot13 = var2;
        return var1;
    };
    var2['ACTIVE_OUTBOUND_PROMOTIONS_FETCH_FAIL'] = var9;
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
        _closure1_slot10 = var1;
        var1 = global;
        var3 = var1.Date;
        var1 = var3.now;
        var1 = var1.bind(var3)();
        _closure1_slot12 = var1;
        var1 = false;
        _closure1_slot11 = var1;
        var1 = undefined;
        return var1;
    };
    var2['ACTIVE_BOGO_PROMOTION_FETCH_SUCCESS'] = var9;
    var9 = function handleActiveBogoPromotionFetchStart() {
        var1 = true;
        _closure1_slot11 = var1;
        var1 = undefined;
        return var1;
    };
    var2['ACTIVE_BOGO_PROMOTION_FETCH'] = var9;
    var9 = function handleActiveBogoPromotionFetchFail() {
        var1 = null;
        _closure1_slot10 = var1;
        var1 = false;
        _closure1_slot11 = var1;
        var1 = undefined;
        return var1;
    };
    var2['ACTIVE_BOGO_PROMOTION_FETCH_FAIL'] = var9;
    var9 = function handleDismissOutboundPromotionNotice() {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var1 = global;
            var5 = var1.Object;
            var4 = var5.values;
            var6 = _closure1_slot15;
            var7 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 7;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var7.bind(var1)(var2);
            var2 = var2.PromotionTypes;
            var2 = var2.THIRD_PARTY_OUTBOUND;
            var2 = var6[var2];
            var2 = var4.bind(var5)(var2);
            var4 = var2.length;
            var2 = 0;
            if(!(var2 !== var4)) { _fun0009_ip = 94; continue _fun0009 }
 74:
            var2 = _closure1_slot18;
            var2 = var2.bind(var1)();
            var4 = null;
            if(!(var4 != var2)) { _fun0009_ip = 92; continue _fun0009 }
 88:
            _closure1_slot16 = var2;
 92:
            return var1;
 94:
            var1 = false;
            return var1;
        }
    };
    var2['OUTBOUND_PROMOTION_NOTICE_DISMISS'] = var9;
    var9 = function handleOutboundPromotionsSeen() {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
            var1 = global;
            var5 = var1.Object;
            var4 = var5.values;
            var6 = _closure1_slot15;
            var7 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 7;
            var3 = var3[var1];
            var1 = undefined;
            var3 = var7.bind(var1)(var3);
            var3 = var3.PromotionTypes;
            var3 = var3.THIRD_PARTY_OUTBOUND;
            var3 = var6[var3];
            var3 = var4.bind(var5)(var3);
            var4 = var3.length;
            var3 = 0;
            if(!(var3 !== var4)) { _fun0010_ip = 104; continue _fun0010 }
 74:
            var3 = _closure1_slot18;
            var3 = var3.bind(var1)();
            var4 = null;
            if(!(var4 != var3)) { _fun0010_ip = 102; continue _fun0010 }
 88:
            _closure1_slot16 = var3;
            var2 = _closure1_slot9;
            var2['lastSeenOutboundPromotionStartDate'] = var3;
 102:
            return var1;
 104:
            var1 = false;
            return var1;
        }
    };
    var2['OUTBOUND_PROMOTIONS_SEEN'] = var9;
    var4 = function handleLogout() {
        var1 = false;
        var3 = null;
        var4 = {'hasFetchedConsumedInboundPromotionId': false, 'consumedInboundPromotionId': null, 'lastSeenOutboundPromotionStartDate': null};
        _closure1_slot9 = var4;
        _closure1_slot13 = var1;
        _closure1_slot14 = var3;
        _closure1_slot11 = var1;
        _closure1_slot12 = var3;
        var4 = {};
        var6 = _closure1_slot0;
        var7 = _closure1_slot1;
        var5 = 7;
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
        var5 = var7[var5];
        var5 = var6.bind(var1)(var5);
        var5 = var5.PromotionTypes;
        var6 = var5.THIRD_PARTY_OUTBOUND;
        var5 = {};
        var4[var6] = var5;
        _closure1_slot15 = var4;
        _closure1_slot10 = var3;
        return var1;
    };
    var2['LOGOUT'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var15 = var4;
    var13 = var2;
    var2 = new var15[var8](var14, var13, var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/promotions/PromotionsStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();