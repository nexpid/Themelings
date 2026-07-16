// app/modules/checkout/native/useSyncGiftOptionsToOrder.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
            var9 = _closure1_slot6;
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
            var7 = _closure1_slot6;
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
    var _closure1_slot5 = var1;
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
    var _closure1_slot6 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var8 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var8 = var7.bind(var1)(var4);
    var4 = var8.prototype;
    var7 = Object.create(var4, {constructor: {value: var8}});
    var12 = 'useSyncGiftOptionsToOrder';
    var13 = var7;
    var4 = new var13[var8](var12, var11);
    var4 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot4 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/checkout/native/useSyncGiftOptionsToOrder.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useSyncGiftOptionsToOrder(arg1, arg2) {
        var2 = arg1;
        var8 = arg2;
        var _closure2_slot0 = var2;
        var _closure2_slot1 = var8;
        var4 = _closure1_slot3;
        var3 = var4.useRef;
        var7 = null;
        var3 = var3.bind(var4)(var7);
        var _closure2_slot2 = var3;
        var3 = var4.useRef;
        var3 = var3.bind(var4)(var7);
        var _closure2_slot3 = var3;
        var6 = var4.useRef;
        var3 = false;
        var3 = var6.bind(var4)(var3);
        var _closure2_slot4 = var3;
        var3 = var4.useRef;
        var9 = undefined;
        var3 = var3.bind(var4)(var9);
        var _closure2_slot5 = var3;
        var3 = var4.useRef;
        var3 = var3.bind(var4)(var7);
        var _closure2_slot6 = var3;
        var6 = var4.useRef;
        var3 = 0;
        var6 = var6.bind(var4)(var3);
        var _closure2_slot7 = var6;
        var6 = var4.useRef;
        var6 = var6.bind(var4)(var7);
        var _closure2_slot8 = var6;
        var6 = var4.useRef;
        var6 = var6.bind(var4)(var7);
        var _closure2_slot9 = var6;
        var7 = var4.useRef;
        var6 = new Array(0);
        var6 = var7.bind(var4)(var6);
        var _closure2_slot10 = var6;
        var6 = var4.useState;
        var7 = var6.bind(var4)(var3);
        var6 = _closure1_slot2;
        var5 = 2;
        var5 = var6.bind(var9)(var7, var5);
        var7 = var5[var3];
        var3 = 1;
        var3 = var5[var3];
        var _closure2_slot11 = var3;
        var6 = var4.useCallback;
        var5 = function(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var5 = arg1;
                var2 = _closure2_slot10;
                var3 = var2.current;
                var1 = new Array(0);
                var2['current'] = var1;
                var2 = _closure1_slot5;
                var1 = undefined;
                var4 = var2.bind(var1)(var3);
                var3 = var4.bind(var1)();
                var2 = var3.done;
                if(var2) { _fun0004_ip = 36; continue _fun0004 }
case 37:
                var2 = var3.value;
                var2 = var2.bind(var1)(var5);
                var6 = var4.bind(var1)();
                var2 = var6.done;
                var3 = var6;
                if(!var2) { _fun0004_ip = 37; continue _fun0004 }
case 36:
                return var1;
            }
        };
        var3 = new Array(0);
        var3 = var6.bind(var4)(var5, var3);
        var _closure2_slot12 = var3;
        var9 = var4.useEffect;
        var6 = new Array(1);
        var6[0] = var3;
        var5 = function() {
            var1 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var2 = _closure2_slot9;
                    var3 = var2.current;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0005_ip = 38; continue _fun0005 }
case 39:
                    var2 = global;
                    var4 = var2.clearTimeout;
                    var2 = _closure2_slot9;
                    var3 = var2.current;
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
case 38:
                    var3 = _closure2_slot12;
                    var1 = undefined;
                    var2 = false;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            return var1;
        };
        var5 = var9.bind(var4)(var5, var6);
        var6 = var4.useEffect;
        var5 = new Array(4);
        var5[0] = var2;
        var5[1] = var8;
        var5[2] = var7;
        var5[3] = var3;
        var3 = function() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var2 = _closure2_slot0;
                var3 = null;
                if(!(var3 == var2)) { _fun0006_ip = 33; continue _fun0006 }
case 40:
                var6 = _closure2_slot12;
                var4 = undefined;
                var2 = true;
                var2 = var6.bind(var4)(var2);
                _fun0006_ip = 41; continue _fun0006;
case 33:
                var2 = _closure2_slot0;
                var6 = var2.id;
                var _closure3_slot0 = var6;
                var4 = _closure2_slot3;
                var2 = _closure2_slot1;
                var4['current'] = var2;
                var2 = _closure2_slot6;
                var2 = var2.current;
                if(!(var2 !== var6)) { _fun0006_ip = 42; continue _fun0006 }
case 43:
                var2 = _closure2_slot6;
                var2['current'] = var6;
                var4 = _closure2_slot5;
                var2 = _closure2_slot0;
                var2 = var2.revision;
                var4['current'] = var2;
                var2 = _closure2_slot2;
                var2['current'] = var3;
                var4 = _closure2_slot7;
                var2 = 0;
                var4['current'] = var2;
case 42:
                var2 = _closure2_slot8;
                var4 = var2.current;
                var2 = _closure2_slot1;
                if(!(var4 !== var2)) { _fun0006_ip = 44; continue _fun0006 }
case 45:
                var4 = _closure2_slot7;
                var2 = 0;
                var4['current'] = var2;
case 44:
                var2 = _closure2_slot4;
                var2 = var2.current;
                if(var2) { _fun0006_ip = 41; continue _fun0006 }
case 17:
                var2 = _closure2_slot2;
                var4 = var2.current;
                var2 = _closure2_slot1;
                if(!(var4 === var2)) { _fun0006_ip = 46; continue _fun0006 }
case 47:
                var7 = _closure2_slot12;
                var4 = undefined;
                var2 = true;
                var2 = var7.bind(var4)(var2);
                _fun0006_ip = 41; continue _fun0006;
case 46:
                var2 = _closure2_slot9;
                var2 = var2.current;
                if(!(var3 != var2)) { _fun0006_ip = 23; continue _fun0006 }
case 48:
                var2 = global;
                var8 = var2.clearTimeout;
                var2 = _closure2_slot9;
                var7 = var2.current;
                var4 = undefined;
                var4 = var8.bind(var4)(var7);
                var2['current'] = var3;
case 23:
                var3 = _closure2_slot4;
                var2 = true;
                var3['current'] = var2;
                var2 = _closure2_slot8;
                var7 = _closure2_slot1;
                var2['current'] = var7;
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 3;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.updateOrder;
                var2 = {};
                var2['orderId'] = var6;
                var6 = {};
                var8 = var7.recipient_id;
                var6['recipient_id'] = var8;
                var8 = var7.gift_style;
                var6['gift_style'] = var8;
                var8 = var7.emoji_id;
                var6['emoji_id'] = var8;
                var8 = var7.emoji_name;
                var6['emoji_name'] = var8;
                var8 = var7.sound_id;
                var6['sound_id'] = var8;
                var8 = var7.reward_sku_ids;
                var6['reward_sku_ids'] = var8;
                var7 = var7.custom_message;
                var6['custom_message_contents'] = var7;
                var2['giftInfo'] = var6;
                var5 = _closure2_slot5;
                var5 = var5.current;
                var2['expectedRevision'] = var5;
                var4 = var3.bind(var4)(var2);
                var3 = var4.then;
                var2 = function(arg1) {
                    var3 = _closure2_slot5;
                    var2 = arg1;
                    var3['current'] = var2;
                    var3 = _closure2_slot2;
                    var2 = _closure2_slot1;
                    var3['current'] = var2;
                    var2 = _closure2_slot7;
                    var1 = 0;
                    var2['current'] = var1;
                    var1 = undefined;
                    return var1;
                };
                var4 = var3.bind(var4)(var2);
                var3 = var4.catch;
                var2 = function(arg1) {
                    var5 = arg1;
                    var2 = _closure2_slot7;
                    var3 = var2.current;
                    var1 = 1;
                    var1 = var3 + var1;
                    var2['current'] = var1;
                    var6 = _closure1_slot4;
                    var4 = var6.error;
                    var3 = {};
                    var3['error'] = var5;
                    var2 = _closure3_slot0;
                    var3['orderId'] = var2;
                    var2 = 'Failed to sync gift customization to order';
                    var2 = var4.bind(var6)(var2, var3);
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 4;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.captureBillingException;
                    var2 = {};
                    var6 = {};
                    var8 = 'useSyncGiftOptionsToOrder';
                    var6['source'] = var8;
                    var2['tags'] = var6;
                    var6 = {};
                    var7 = _closure3_slot0;
                    var6['orderId'] = var7;
                    var2['extra'] = var6;
                    var2 = var3.bind(var4)(var5, var2);
                    return var1;
                };
                var3 = var3.bind(var4)(var2);
                var2 = var3.finally;
                var1 = function() {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                        var3 = _closure2_slot4;
                        var5 = false;
                        var3['current'] = var5;
                        var3 = _closure2_slot2;
                        var4 = var3.current;
                        var3 = _closure2_slot3;
                        var3 = var3.current;
                        if(!(var4 === var3)) { _fun0007_ip = 49; continue _fun0007 }
case 50:
                        var6 = _closure2_slot12;
                        var4 = undefined;
                        var3 = true;
                        var3 = var6.bind(var4)(var3);
                        _fun0007_ip = 19; continue _fun0007;
case 49:
                        var3 = _closure2_slot7;
                        var4 = var3.current;
                        var3 = 0;
                        if(!(var3 !== var4)) { _fun0007_ip = 17; continue _fun0007 }
case 51:
                        var3 = _closure2_slot7;
                        var4 = var3.current;
                        var3 = 3;
                        if(!(!(var4 < var3))) { _fun0007_ip = 52; continue _fun0007 }
case 53:
                        var4 = _closure2_slot12;
                        var3 = undefined;
                        var3 = var4.bind(var3)(var5);
                        _fun0007_ip = 19; continue _fun0007;
case 52:
                        var4 = _closure2_slot9;
                        var3 = global;
                        var7 = var3.setTimeout;
                        var3 = _closure2_slot7;
                        var5 = var3.current;
                        var3 = 1;
                        var8 = var5 - var3;
                        var9 = 2;
                        var5 = exponentiationOperator(var9, var8);
                        var3 = 500;
                        var6 = var3 * var5;
                        var5 = undefined;
                        var3 = function() {
                            var3 = _closure2_slot11;
                            var2 = undefined;
                            var1 = function(arg1) {
                                var2 = arg1;
                                var1 = 1;
                                var1 = var2 + var1;
                                return var1;
                            };
                            var1 = var3.bind(var2)(var1);
                            return var1;
                        };
                        var3 = var7.bind(var5)(var3, var6);
                        var4['current'] = var3;
                        _fun0007_ip = 19; continue _fun0007;
case 17:
                        var3 = _closure2_slot11;
                        var2 = undefined;
                        var1 = function(arg1) {
                            var2 = arg1;
                            var1 = 1;
                            var1 = var2 + var1;
                            return var1;
                        };
                        var1 = var3.bind(var2)(var1);
case 19:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1 = var2.bind(var3)(var1);
case 41:
                var1 = undefined;
                return var1;
            }
        };
        var3 = var6.bind(var4)(var3, var5);
        var5 = var4.useCallback;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = function() {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var3 = _closure2_slot0;
                var2 = null;
                if(!(var2 != var3)) { _fun0008_ip = 54; continue _fun0008 }
case 55:
                var2 = _closure2_slot2;
                var3 = var2.current;
                var2 = _closure2_slot3;
                var2 = var2.current;
                if(!(var3 !== var2)) { _fun0008_ip = 54; continue _fun0008 }
case 56:
                var2 = _closure2_slot7;
                var3 = var2.current;
                var2 = 3;
                if(!(var3 >= var2)) { _fun0008_ip = 57; continue _fun0008 }
case 37:
                var2 = _closure2_slot7;
                var1 = 0;
                var2['current'] = var1;
case 57:
                var1 = global;
                var3 = var1.Promise;
                var1 = var3.prototype;
                var2 = Object.create(var1, {constructor: {value: var3}});
                var5 = function(arg1) {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                        var2 = _closure2_slot10;
                        var4 = var2.current;
                        var3 = var4.push;
                        var2 = arg1;
                        var2 = var3.bind(var4)(var2);
                        var2 = _closure2_slot4;
                        var2 = var2.current;
                        if(var2) { _fun0009_ip = 58; continue _fun0009 }
case 59:
                        var3 = _closure2_slot9;
                        var4 = var3.current;
                        var3 = null;
                        var2 = var3 != var4;
case 58:
                        if(var2) { _fun0009_ip = 60; continue _fun0009 }
case 4:
                        var3 = _closure2_slot11;
                        var2 = undefined;
                        var1 = function(arg1) {
                            var2 = arg1;
                            var1 = 1;
                            var1 = var2 + var1;
                            return var1;
                        };
                        var1 = var3.bind(var2)(var1);
case 60:
                        var1 = undefined;
                        return var1;
                    }
                };
                var6 = var2;
                var1 = new var6[var3](var5, var4);
                var1 = var1 instanceof Object ? var1 : var2;
                _fun0008_ip = 61; continue _fun0008;
case 54:
                var2 = global;
                var4 = var2.Promise;
                var3 = var4.resolve;
                var2 = true;
                var1 = var3.bind(var4)(var2);
case 61:
                return var1;
            }
        };
        var5 = var5.bind(var4)(var2, var3);
        var _closure2_slot13 = var5;
        var3 = var4.useMemo;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            var1 = {};
            var2 = _closure2_slot13;
            var1['awaitSync'] = var2;
            return var1;
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();