// app/modules/premium/promotions/PromotionsStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = metroImportDefault;
    var3 = exports;
    var5 = dependencyMap;
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
            _closure1_slot14 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0002_ip = 46; continue _fun0002 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 46:
            if(var2) { _fun0002_ip = 55; continue _fun0002 }
 49:
            var2 = var3.@@iterator;
 55:
            if(var2) { _fun0002_ip = 343; continue _fun0002 }
 61:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0002_ip = 323; continue _fun0002 }
 86:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0002_ip = 283; continue _fun0002 }
 96:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0002_ip = 270; continue _fun0002 }
 110:
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
            if(!var7) { _fun0002_ip = 163; continue _fun0002 }
 158:
            var7 = var3.constructor;
 163:
            var10 = var9;
            if(!var7) { _fun0002_ip = 179; continue _fun0002 }
 169:
            var7 = var3.constructor;
            var10 = var7.name;
 179:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0002_ip = 249; continue _fun0002 }
 187:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0002_ip = 249; continue _fun0002 }
 195:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0002_ip = 234; continue _fun0002 }
 205:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0002_ip = 247; continue _fun0002 }
 234:
            var9 = _closure1_slot16;
            var7 = var9.bind(var8)(var3, var8);
 247:
            _fun0002_ip = 265; continue _fun0002;
 249:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 265:
            var6 = var7;
            _fun0002_ip = 283; continue _fun0002;
 270:
            var7 = _closure1_slot16;
            var6 = var7.bind(var8)(var3, var8);
 283:
            var4 = var6;
            if(var4) { _fun0002_ip = 323; continue _fun0002 }
 289:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
 323:
            if(!var4) { _fun0002_ip = 330; continue _fun0002 }
 326:
            _closure2_slot0 = var4;
 330:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0003_ip = 56; continue _fun0003 }
 20:
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
                    _fun0003_ip = 67; continue _fun0003;
 56:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
 67:
                    return var1;
                }
            };
            return var1;
 343:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0004_ip = 23; continue _fun0004 }
 14:
            var2 = var4.length;
            var1 = var3 > var2;
 23:
            var2 = undefined;
            if(!var1) { _fun0004_ip = 33; continue _fun0004 }
 28:
            var2 = var4.length;
 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0004_ip = 70; continue _fun0004 }
 55:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0004_ip = 55; continue _fun0004 }
 70:
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var1 = function getLatestActiveOutboundPromotionStartDate() {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var3 = _closure1_slot15;
            var1 = _closure1_slot12;
            var2 = undefined;
            var7 = var3.bind(var2)(var1);
            var4 = var7.bind(var2)();
            var3 = var4.done;
            var1 = null;
            var6 = var4;
            var5 = null;
            var4 = null;
            if(var3) { _fun0005_ip = 88; continue _fun0005 }
 39:
            var3 = var6.value;
            var8 = var1 == var5;
            if(var8) { _fun0005_ip = 61; continue _fun0005 }
 51:
            var9 = var3.startDate;
            var8 = var9 > var5;
 61:
            if(!var8) { _fun0005_ip = 70; continue _fun0005 }
 64:
            var5 = var3.startDate;
 70:
            var9 = var7.bind(var2)();
            var3 = var9.done;
            var6 = var9;
            var4 = var5;
            if(!var3) { _fun0005_ip = 39; continue _fun0005 }
 88:
            var3 = var1 == var4;
            var2 = undefined;
            if(var3) { _fun0005_ip = 107; continue _fun0005 }
 97:
            var3 = var4.toISOString;
            var2 = var3.bind(var4)();
 107:
            var3 = var1 != var2;
            var1 = null;
            if(!var3) { _fun0005_ip = 119; continue _fun0005 }
 116:
            var1 = var2;
 119:
            return var1;
        }
    };
    var _closure1_slot17 = var1;
    var1 = function initializeFromUserSettings() {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var1 = _closure1_slot5;
            var1 = var1.settings;
            var5 = var1.userContent;
            var2 = null;
            var6 = var2 == var5;
            var1 = undefined;
            var4 = undefined;
            if(var6) { _fun0006_ip = 52; continue _fun0006 }
 32:
            var5 = var5.lastDismissedOutboundPromotionStartDate;
            var6 = var2 == var5;
            var4 = undefined;
            if(var6) { _fun0006_ip = 52; continue _fun0006 }
 47:
            var4 = var5.value;
 52:
            var5 = var2 != var4;
            var2 = null;
            if(!var5) { _fun0006_ip = 64; continue _fun0006 }
 61:
            var2 = var4;
 64:
            _closure1_slot13 = var2;
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var2);
    var1 = 0;
    var2 = var5[var1];
    var1 = undefined;
    var2 = var6.bind(var1)(var2);
    var _closure1_slot0 = var2;
    var2 = 1;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot1 = var2;
    var2 = 2;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var2 = 3;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 4;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 5;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var7 = false;
    var2 = null;
    var8 = {'hasFetchedConsumedInboundPromotionId': false, 'consumedInboundPromotionId': null, 'lastSeenOutboundPromotionStartDate': null};
    var _closure1_slot6 = var8;
    var _closure1_slot7 = var2;
    var _closure1_slot8 = var7;
    var _closure1_slot9 = var2;
    var _closure1_slot10 = var7;
    var _closure1_slot11 = var2;
    var7 = new Array(0);
    var _closure1_slot12 = var7;
    var _closure1_slot13 = var2;
    var2 = 6;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var7 = var2.PersistedStore;
    var2 = function(arg1) {
        var4 = function PromotionsStore() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot0;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot3;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot2;
                var1 = _closure1_slot14;
                var1 = var1.bind(var3)();
                if(var1) { _fun0007_ip = 69; continue _fun0007 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0007_ip = 105; continue _fun0007;
 69:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot3;
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
        var5 = _closure1_slot4;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot1;
        var5 = {};
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                var2 = arg1;
                var4 = this;
                var1 = null;
                if(!(var1 != var2)) { _fun0008_ip = 19; continue _fun0008 }
 12:
                _closure1_slot6 = var2;
 19:
                var3 = var4.waitFor;
                var2 = _closure1_slot5;
                var2 = var3.bind(var4)(var2);
                var3 = var4.syncWith;
                var5 = _closure1_slot5;
                var2 = new Array(1);
                var2[0] = var5;
                var1 = _closure1_slot18;
                var1 = var3.bind(var4)(var2, var1);
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(12);
        var1[0] = var5;
        var5 = {};
        var7 = 'outboundPromotions';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot12;
            return var1;
        };
        var5['get'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'lastSeenOutboundPromotionStartDate';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot6;
            var1 = var1.lastSeenOutboundPromotionStartDate;
            return var1;
        };
        var5['get'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'lastDismissedOutboundPromotionStartDate';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot13;
            return var1;
        };
        var5['get'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'lastFetchedActivePromotions';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot11;
            return var1;
        };
        var5['get'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'isFetchingActiveOutboundPromotions';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot10;
            return var1;
        };
        var5['get'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'hasFetchedConsumedInboundPromotionId';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot6;
            var1 = var1.hasFetchedConsumedInboundPromotionId;
            return var1;
        };
        var5['get'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'consumedInboundPromotionId';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot6;
            var1 = var1.consumedInboundPromotionId;
            return var1;
        };
        var5['get'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'bogoPromotion';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot7;
            return var1;
        };
        var5['get'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'isFetchingActiveBogoPromotion';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot8;
            return var1;
        };
        var5['get'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'lastFetchedActiveBogoPromotion';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot9;
            return var1;
        };
        var5['get'] = var7;
        var1[10] = var5;
        var5 = {};
        var7 = 'getState';
        var5['key'] = var7;
        var6 = function value() {
            var1 = _closure1_slot6;
            return var1;
        };
        var5['value'] = var6;
        var1[11] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var7 = var2.bind(var1)(var7);
    var2 = 'PromotionsStore';
    var7['displayName'] = var2;
    var2 = 'PromotionsPersistedStore';
    var7['persistKey'] = var2;
    var2 = new Array(1);
    var8 = function(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var1 = arg1;
 3: // try_start_0
            var2 = var1;
            var2 = delete var2.bogoPromotion;
 11: // try_end0
            _fun0009_ip = 15; continue _fun0009;
 13: // catch_target0
            CatchBlockStart(arg_register=1);
 15:
            return var1;
        }
    };
    var2[0] = var8;
    var7['migrations'] = var2;
    var2 = 7;
    var2 = var5[var2];
    var11 = var6.bind(var1)(var2);
    var2 = {};
    var8 = function handleActiveOutboundPromotionsFetchSuccess(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
            var1 = arg1;
            var3 = var1.activeOutboundPromotions;
            var2 = var1.consumedInboundPromotionId;
            _closure1_slot12 = var3;
            var3 = global;
            var4 = var3.Date;
            var3 = var4.now;
            var3 = var3.bind(var4)();
            _closure1_slot11 = var3;
            var3 = false;
            _closure1_slot10 = var3;
            var3 = _closure1_slot6;
            var3 = var3.hasFetchedConsumedInboundPromotionId;
            if(var3) { _fun0010_ip = 84; continue _fun0010 }
 62:
            var4 = _closure1_slot6;
            var3 = true;
            var4['hasFetchedConsumedInboundPromotionId'] = var3;
            var1 = _closure1_slot6;
            var1['consumedInboundPromotionId'] = var2;
 84:
            var1 = undefined;
            return var1;
        }
    };
    var2['ACTIVE_OUTBOUND_PROMOTIONS_FETCH_SUCCESS'] = var8;
    var8 = function handleActiveOutboundPromotionsFetchStart() {
        var1 = true;
        _closure1_slot10 = var1;
        var1 = undefined;
        return var1;
    };
    var2['ACTIVE_OUTBOUND_PROMOTIONS_FETCH'] = var8;
    var8 = function handleActiveOutboundPromotionsFetchFail() {
        var1 = new Array(0);
        _closure1_slot12 = var1;
        var1 = false;
        _closure1_slot10 = var1;
        var1 = undefined;
        return var1;
    };
    var2['ACTIVE_OUTBOUND_PROMOTIONS_FETCH_FAIL'] = var8;
    var8 = function handleActiveBogoPromotionFetchSuccess(arg1) {
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
        _closure1_slot7 = var1;
        var1 = global;
        var3 = var1.Date;
        var1 = var3.now;
        var1 = var1.bind(var3)();
        _closure1_slot9 = var1;
        var1 = false;
        _closure1_slot8 = var1;
        var1 = undefined;
        return var1;
    };
    var2['ACTIVE_BOGO_PROMOTION_FETCH_SUCCESS'] = var8;
    var8 = function handleActiveBogoPromotionFetchStart() {
        var1 = true;
        _closure1_slot8 = var1;
        var1 = undefined;
        return var1;
    };
    var2['ACTIVE_BOGO_PROMOTION_FETCH'] = var8;
    var8 = function handleActiveBogoPromotionFetchFail() {
        var1 = null;
        _closure1_slot7 = var1;
        var1 = false;
        _closure1_slot8 = var1;
        var1 = undefined;
        return var1;
    };
    var2['ACTIVE_BOGO_PROMOTION_FETCH_FAIL'] = var8;
    var8 = function handleDismissOutboundPromotionNotice() {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
            var1 = _closure1_slot12;
            var2 = var1.length;
            var1 = 0;
            if(!(var1 !== var2)) { _fun0011_ip = 40; continue _fun0011 }
 18:
            var2 = _closure1_slot17;
            var1 = undefined;
            var2 = var2.bind(var1)();
            var4 = null;
            if(!(var4 != var2)) { _fun0011_ip = 38; continue _fun0011 }
 34:
            _closure1_slot13 = var2;
 38:
            return var1;
 40:
            var1 = false;
            return var1;
        }
    };
    var2['OUTBOUND_PROMOTION_NOTICE_DISMISS'] = var8;
    var8 = function handleOutboundPromotionsSeen() {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
            var1 = _closure1_slot12;
            var3 = var1.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0012_ip = 50; continue _fun0012 }
 18:
            var3 = _closure1_slot17;
            var1 = undefined;
            var3 = var3.bind(var1)();
            var4 = null;
            if(!(var4 != var3)) { _fun0012_ip = 48; continue _fun0012 }
 34:
            _closure1_slot13 = var3;
            var2 = _closure1_slot6;
            var2['lastSeenOutboundPromotionStartDate'] = var3;
 48:
            return var1;
 50:
            var1 = false;
            return var1;
        }
    };
    var2['OUTBOUND_PROMOTIONS_SEEN'] = var8;
    var4 = function handleLogout() {
        var3 = false;
        var2 = null;
        var4 = {'hasFetchedConsumedInboundPromotionId': false, 'consumedInboundPromotionId': null, 'lastSeenOutboundPromotionStartDate': null};
        _closure1_slot6 = var4;
        _closure1_slot10 = var3;
        _closure1_slot11 = var2;
        _closure1_slot8 = var3;
        _closure1_slot9 = var2;
        var3 = new Array(0);
        _closure1_slot12 = var3;
        _closure1_slot7 = var2;
        var1 = undefined;
        return var1;
    };
    var2['LOGOUT'] = var4;
    var4 = var7.prototype;
    var4 = Object.create(var4, {constructor: {value: var7}});
    var12 = var4;
    var10 = var2;
    var2 = new var12[var7](var11, var10, var9);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 8;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/promotions/PromotionsStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();