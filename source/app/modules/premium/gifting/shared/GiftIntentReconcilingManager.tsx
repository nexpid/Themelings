// app/modules/premium/gifting/shared/GiftIntentReconcilingManager.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
            var9 = _closure1_slot16;
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
            var7 = _closure1_slot16;
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
    var _closure1_slot15 = var1;
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
    var _closure1_slot16 = var1;
    var1 = function _isNativeReflectConstruct() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
case 36: // try_start_0
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
case 37: // try_end0
            _fun0004_ip = 38; continue _fun0004;
case 39: // catch_target0
            CatchBlockStart(arg_register=1);
case 38:
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
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var8 = 5;
    var4 = var6[var8];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.MessageTypes;
    var _closure1_slot12 = var4;
    var4 = 10;
    var9 = var6[var4];
    var9 = var7.bind(var1)(var9);
    var9 = var9.Millis;
    var9 = var9.SECOND;
    var9 = var4 * var9;
    var _closure1_slot13 = var9;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var4 = var4.Millis;
    var4 = var4.MINUTE;
    var4 = var8 * var4;
    var _closure1_slot14 = var4;
    var4 = 16;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var2 = function(arg1) {
        var4 = function GiftIntentReconcilingManager(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var5 = this;
                var14 = 0;
                var1 = copyRestArgs(var14);
                var8 = _closure1_slot3;
                var3 = _closure2_slot0;
                var7 = undefined;
                var8 = var8.bind(var7)(var5, var3);
                var11 = new Array(0);
                var14 = var11;
                var13 = var1;
                var12 = 0;
                var1 = arraySpread(var14, var13, var12);
                var1 = _closure1_slot6;
                var10 = var1.bind(var7)(var3);
                var3 = _closure1_slot5;
                var1 = _closure1_slot17;
                var1 = var1.bind(var7)();
                if(var1) { _fun0005_ip = 9; continue _fun0005 }
case 40:
                var1 = var10.apply;
                var1 = var1.bind(var10)(var5, var11);
                _fun0005_ip = 41; continue _fun0005;
case 9:
                var6 = global;
                var9 = var6.Reflect;
                var8 = var9.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var7)(var5);
                var6 = var6.constructor;
                var1 = var8.bind(var9)(var10, var11, var6);
case 41:
                var1 = var3.bind(var7)(var5, var1);
                var _closure3_slot0 = var1;
                var3 = {};
                var5 = function POST_CONNECTION_OPEN() {
                    var2 = _closure3_slot0;
                    var1 = var2.onPostConnectionOpen;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var3['POST_CONNECTION_OPEN'] = var5;
                var5 = function CHANNEL_SELECT(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.onChannelSelect;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var3['CHANNEL_SELECT'] = var5;
                var5 = function GIFT_INTENT_DISMISSALS_FETCH_SUCCESS(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.onReconcileSuccess;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var3['GIFT_INTENT_DISMISSALS_FETCH_SUCCESS'] = var5;
                var5 = function GIFT_INTENT_DISMISSALS_FETCH_FAILURE() {
                    var3 = _closure3_slot0;
                    var2 = var3.onReconcileSettled;
                    var1 = false;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var3['GIFT_INTENT_DISMISSALS_FETCH_FAILURE'] = var5;
                var5 = function LOGOUT() {
                    var2 = _closure3_slot0;
                    var1 = var2.onLogout;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var3['LOGOUT'] = var5;
                var1['actions'] = var3;
                var3 = global;
                var8 = var3.Map;
                var5 = _closure1_slot11;
                var6 = new Array(2);
                var6[0] = var5;
                var5 = function() {
                    var2 = _closure3_slot0;
                    var1 = var2.onPremiumGiftingIntentStoreChange;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var6[1] = var5;
                var5 = new Array(1);
                var5[0] = var6;
                var6 = var8.prototype;
                var6 = Object.create(var6, {constructor: {value: var8}});
                var15 = var6;
                var14 = var5;
                var5 = new var15[var8](var14, var13);
                var5 = var5 instanceof Object ? var5 : var6;
                var1['stores'] = var5;
                var6 = _closure1_slot1;
                var8 = _closure1_slot2;
                var5 = 11;
                var5 = var8[var5];
                var7 = var6.bind(var7)(var5);
                var14 = _closure1_slot13;
                var13 = _closure1_slot14;
                var5 = var7.prototype;
                var5 = Object.create(var5, {constructor: {value: var7}});
                var15 = var5;
                var4 = new var15[var7](var14, var13, var12);
                var4 = var4 instanceof Object ? var4 : var5;
                var1['reconcileBackoff'] = var4;
                var4 = false;
                var1['isReconciling'] = var4;
                var1['heldGiftingPromptSystemMessage'] = var4;
                var3 = var3.Map;
                var4 = var3.prototype;
                var4 = Object.create(var4, {constructor: {value: var3}});
                var15 = var4;
                var3 = new var15[var3](var14);
                var3 = var3 instanceof Object ? var3 : var4;
                var1['lastReconciledDismissalAtMs'] = var3;
                var2 = function() {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                        var4 = _closure3_slot0;
                        var3 = var4.isReconcileEligible;
                        var2 = 'retryReconcileServerDismissals';
                        var2 = var3.bind(var4)(var2);
                        if(!var2) { _fun0006_ip = 42; continue _fun0006 }
case 43:
                        var2 = _closure3_slot0;
                        var1 = var2.attemptReconcileFetch;
                        var1 = var1.bind(var2)();
case 42:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['retryReconcileServerDismissals'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'onPostConnectionOpen';
        var5['key'] = var1;
        var1 = function value() {
            var2 = this;
            var3 = var2.lastReconciledDismissalAtMs;
            var1 = var3.clear;
            var1 = var1.bind(var3)();
            var1 = var2.sendGiftingPromptSystemMessagesIfEligible;
            var1 = var1.bind(var2)();
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(13);
        var1[0] = var5;
        var5 = {};
        var7 = 'onPremiumGiftingIntentStoreChange';
        var5['key'] = var7;
        var7 = function value() {
            var2 = this;
            var1 = var2.maybeReconcileServerDismissals;
            var1 = var1.bind(var2)();
            var1 = var2.maybeRetryHeldGiftingPromptSystemMessage;
            var1 = var1.bind(var2)();
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'maybeReconcileServerDismissals';
        var5['key'] = var7;
        var7 = function value() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var2 = this;
                var3 = var2.isReconcileEligible;
                var1 = 'maybeReconcileServerDismissals';
                var1 = var3.bind(var2)(var1);
                if(!var1) { _fun0007_ip = 44; continue _fun0007 }
case 31:
                var1 = var2.reconcileBackoff;
                var1 = var1.pending;
                if(var1) { _fun0007_ip = 44; continue _fun0007 }
case 45:
                var1 = var2.attemptReconcileFetch;
                var1 = var1.bind(var2)();
case 44:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'isReconcileEligible';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var3 = _closure1_slot11;
                var1 = var3.getFriendAnniversaries;
                var1 = var1.bind(var3)();
                var3 = var1.length;
                var1 = 0;
                var1 = var1 !== var3;
                if(!var1) { _fun0008_ip = 46; continue _fun0008 }
case 47:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 12;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
                var4 = var2.FriendshipAnniversaryBackendPersistenceExperiment;
                var3 = var4.getConfig;
                var2 = {};
                var5 = arg1;
                var2['location'] = var5;
                var2 = var3.bind(var4)(var2);
                var1 = var2.enabled;
case 46:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getServerDismissalTimestampMs';
        var5['key'] = var7;
        var7 = function value() {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var1 = global;
                var3 = var1.Number;
                var1 = _closure1_slot9;
                var1 = var1.settings;
                var5 = var1.userContent;
                var1 = null;
                var6 = var1 == var5;
                var2 = undefined;
                var4 = undefined;
                if(var6) { _fun0009_ip = 2; continue _fun0009 }
case 48:
                var4 = var5.lastGiftIntentDismissedAtMs;
case 2:
                var5 = var1 != var4;
                var1 = '0';
                if(!var5) { _fun0009_ip = 49; continue _fun0009 }
case 50:
                var1 = var4;
case 49:
                var1 = var3.bind(var2)(var1);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'attemptReconcileFetch';
        var5['key'] = var7;
        var7 = function value() {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var4 = this;
                var1 = var4.getServerDismissalTimestampMs;
                var3 = var1.bind(var4)();
                var5 = _closure1_slot11;
                var2 = var5.getLastKnownGiftIntentDismissedAtMs;
                var2 = var2.bind(var5)();
                var2 = var2 >= var3;
                if(var2) { _fun0010_ip = 51; continue _fun0010 }
case 52:
                var2 = var4.isReconciling;
case 51:
                if(var2) { _fun0010_ip = 53; continue _fun0010 }
case 2:
                var2 = true;
                var4['isReconciling'] = var2;
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 13;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var4.bind(var1)(var2);
                var1 = var2.fetchAndReconcileGiftIntentDismissals;
                var1 = var1.bind(var2)(var3);
case 53:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'onReconcileSuccess';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = this;
            var2 = var3.onReconcileSettled;
            var1 = true;
            var1 = var2.bind(var3)(var1);
            var2 = var3.removeRemotelyDismissedGiftIntentCards;
            var1 = arg1;
            var1 = var1.dismissals;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'onReconcileSettled';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var1 = this;
                var2 = false;
                var1['isReconciling'] = var2;
                var2 = var1.reconcileBackoff;
                var3 = arg1;
                if(var3) { _fun0011_ip = 54; continue _fun0011 }
case 31:
                var3 = var2.fail;
                var1 = var1.retryReconcileServerDismissals;
                var1 = var3.bind(var2)(var1);
                _fun0011_ip = 55; continue _fun0011;
case 54:
                var1 = var2.succeed;
                var1 = var1.bind(var2)();
case 55:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'removeRemotelyDismissedGiftIntentCards';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var16 = this;
                var3 = _closure1_slot15;
                var1 = undefined;
                var2 = arg1;
                var14 = var3.bind(var1)(var2);
                var3 = var14.bind(var1)();
                var2 = var3.done;
                var13 = 14;
                var12 = 'MESSAGE_DELETE';
                var11 = null;
                var10 = global;
                var8 = var3;
                var7 = undefined;
                var6 = undefined;
                var5 = undefined;
                var4 = undefined;
                var3 = undefined;
                if(var2) { _fun0012_ip = 56; continue _fun0012 }
case 50:
                var2 = var8.value;
                var26 = var2.targetId;
                var22 = var2.dismissedAtMs;
                var17 = var16.lastReconciledDismissalAtMs;
                var2 = var17.get;
                var2 = var2.bind(var17)(var26);
                var19 = var16.lastReconciledDismissalAtMs;
                var18 = var19.set;
                var21 = var10.Math;
                var20 = var21.max;
                var23 = var11 != var2;
                var17 = 0;
                if(!var23) { _fun0012_ip = 57; continue _fun0012 }
case 58:
                var17 = var2;
case 57:
                var17 = var20.bind(var21)(var17, var22);
                var17 = var18.bind(var19)(var26, var17);
                var21 = var7;
                var20 = var6;
                var19 = var5;
                var18 = var4;
                var17 = var3;
                if(!(var11 != var2)) { _fun0012_ip = 59; continue _fun0012 }
case 60:
                var21 = var7;
                var20 = var6;
                var19 = var5;
                var18 = var4;
                var17 = var3;
                if(!(!(var22 <= var2))) { _fun0012_ip = 59; continue _fun0012 }
case 61:
                var22 = _closure1_slot10;
                var2 = var22.getDMFromUserId;
                var25 = var2.bind(var22)(var26);
                var21 = var25;
                var20 = var6;
                var19 = var5;
                var18 = var4;
                var17 = var3;
                if(!(var11 != var25)) { _fun0012_ip = 59; continue _fun0012 }
case 62:
                var22 = _closure1_slot15;
                var23 = _closure1_slot8;
                var2 = var23.getMessages;
                var2 = var2.bind(var23)(var25);
                var24 = var22.bind(var1)(var2);
                var27 = var24.bind(var1)();
                var2 = var27.done;
                var23 = var27;
                var22 = var4;
                var21 = var25;
                var20 = var23;
                var19 = var24;
                var18 = var22;
                var17 = var3;
                if(var2) { _fun0012_ip = 59; continue _fun0012 }
case 63:
                var27 = var23.value;
                var28 = var27.type;
                var2 = _closure1_slot12;
                var2 = var2.GIFTING_PROMPT;
                var2 = var28 === var2;
                if(!var2) { _fun0012_ip = 64; continue _fun0012 }
case 65:
                var28 = var27.giftingPrompt;
                var30 = var11 == var28;
                var29 = undefined;
                if(var30) { _fun0012_ip = 66; continue _fun0012 }
case 67:
                var29 = var28.recipientUserId;
case 66:
                var2 = var29 === var26;
                var22 = var28;
case 64:
                var28 = var22;
                if(!var2) { _fun0012_ip = 68; continue _fun0012 }
case 69:
                var29 = _closure1_slot1;
                var2 = _closure1_slot2;
                var2 = var2[var13];
                var30 = var29.bind(var1)(var2);
                var29 = var30.dispatch;
                var2 = {};
                var2['type'] = var12;
                var31 = var27.id;
                var2['id'] = var31;
                var2['channelId'] = var25;
                var2 = var29.bind(var30)(var2);
case 68:
                var29 = var24.bind(var1)();
                var2 = var29.done;
                var23 = var29;
                var22 = var28;
                var21 = var25;
                var20 = var23;
                var19 = var24;
                var18 = var22;
                var17 = var27;
                if(!var2) { _fun0012_ip = 63; continue _fun0012 }
case 59:
                var22 = var14.bind(var1)();
                var2 = var22.done;
                var7 = var21;
                var6 = var20;
                var5 = var19;
                var4 = var18;
                var3 = var17;
                var8 = var22;
                if(!var2) { _fun0012_ip = 50; continue _fun0012 }
case 56:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'onLogout';
        var5['key'] = var7;
        var7 = function value() {
            var1 = this;
            var3 = var1.reconcileBackoff;
            var2 = var3.cancel;
            var2 = var2.bind(var3)();
            var2 = false;
            var1['isReconciling'] = var2;
            var1['heldGiftingPromptSystemMessage'] = var2;
            var2 = var1.lastReconciledDismissalAtMs;
            var1 = var2.clear;
            var1 = var1.bind(var2)();
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'maybeRetryHeldGiftingPromptSystemMessage';
        var5['key'] = var7;
        var7 = function value() {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                var2 = this;
                var1 = var2.heldGiftingPromptSystemMessage;
                if(!var1) { _fun0013_ip = 7; continue _fun0013 }
case 70:
                var3 = _closure1_slot11;
                var1 = var3.getLastKnownGiftIntentDismissedAtMs;
                var3 = var1.bind(var3)();
                var1 = var2.getServerDismissalTimestampMs;
                var1 = var1.bind(var2)();
                if(!(!(var3 < var1))) { _fun0013_ip = 7; continue _fun0013 }
case 51:
                var1 = false;
                var2['heldGiftingPromptSystemMessage'] = var1;
                var1 = var2.sendGiftingPromptSystemMessagesIfEligible;
                var1 = var1.bind(var2)();
case 7:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[10] = var5;
        var5 = {};
        var7 = 'shouldHoldGiftingPromptSystemMessageForServerReconcile';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                var4 = this;
                var5 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 12;
                var3 = var3[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var3);
                var5 = var1.FriendshipAnniversaryBackendPersistenceExperiment;
                var3 = var5.getConfig;
                var1 = {};
                var6 = arg1;
                var1['location'] = var6;
                var1 = var3.bind(var5)(var1);
                var1 = var1.enabled;
                var3 = !var1;
                var1 = !var3;
                if(var3) { _fun0014_ip = 11; continue _fun0014 }
case 71:
                var3 = _closure1_slot11;
                var2 = var3.getLastKnownGiftIntentDismissedAtMs;
                var3 = var2.bind(var3)();
                var2 = var4.getServerDismissalTimestampMs;
                var2 = var2.bind(var4)();
                var1 = var3 < var2;
case 11:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[11] = var5;
        var5 = {};
        var7 = 'trySendGiftingPromptSystemMessage';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3, arg4, arg5) {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                var3 = this;
                var2 = var3.shouldHoldGiftingPromptSystemMessageForServerReconcile;
                var1 = arg5;
                var1 = var2.bind(var3)(var1);
                if(var1) { _fun0015_ip = 72; continue _fun0015 }
case 73:
                var4 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 15;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var4.bind(var1)(var2);
                var4 = var5.sendGiftingPromptSystemMessage;
                var2 = {};
                var1 = arg2;
                var2['giftIntentType'] = var1;
                var1 = arg3;
                var2['recipientUserId'] = var1;
                var1 = arg4;
                var2['giftIntentSecondaryAction'] = var1;
                var1 = arg1;
                var1 = var4.bind(var5)(var1, var2);
                var1 = true;
                _fun0015_ip = 74; continue _fun0015;
case 72:
                var2 = true;
                var3['heldGiftingPromptSystemMessage'] = var2;
                var1 = false;
case 74:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[12] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = 17;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/gifting/shared/GiftIntentReconcilingManager.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();