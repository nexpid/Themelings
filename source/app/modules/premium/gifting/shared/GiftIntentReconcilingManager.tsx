// app/modules/premium/gifting/shared/GiftIntentReconcilingManager.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
            _closure1_slot12 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot12 = var1;
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
    var9 = var6[var4];
    var9 = var7.bind(var1)(var9);
    var9 = var9.Millis;
    var10 = var9.SECOND;
    var9 = 10;
    var9 = var9 * var10;
    var _closure1_slot10 = var9;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var4 = var4.Millis;
    var4 = var4.MINUTE;
    var4 = var8 * var4;
    var _closure1_slot11 = var4;
    var4 = 12;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var2 = function(arg1) {
        var4 = function GiftIntentReconcilingManager(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var5 = this;
                var14 = 0;
                var1 = copyRestArgs(var14);
                var8 = _closure1_slot3;
                var4 = _closure2_slot0;
                var6 = undefined;
                var8 = var8.bind(var6)(var5, var4);
                var11 = new Array(0);
                var14 = var11;
                var13 = var1;
                var12 = 0;
                var1 = arraySpread(var14, var13, var12);
                var1 = _closure1_slot6;
                var10 = var1.bind(var6)(var4);
                var4 = _closure1_slot5;
                var1 = _closure1_slot12;
                var1 = var1.bind(var6)();
                if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var1 = var10.apply;
                var1 = var1.bind(var10)(var5, var11);
                _fun0002_ip = 8; continue _fun0002;
case 6:
                var7 = global;
                var9 = var7.Reflect;
                var8 = var9.construct;
                var7 = _closure1_slot6;
                var7 = var7.bind(var6)(var5);
                var7 = var7.constructor;
                var1 = var8.bind(var9)(var10, var11, var7);
case 8:
                var1 = var4.bind(var6)(var5, var1);
                var _closure3_slot0 = var1;
                var4 = {};
                var5 = function POST_CONNECTION_OPEN() {
                    var2 = _closure3_slot0;
                    var1 = var2.sendGiftingPromptSystemMessagesIfEligible;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var4['POST_CONNECTION_OPEN'] = var5;
                var5 = function CHANNEL_SELECT(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.onChannelSelect;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var4['CHANNEL_SELECT'] = var5;
                var5 = function GIFT_INTENT_DISMISSALS_FETCH_SUCCESS() {
                    var3 = _closure3_slot0;
                    var2 = var3.onReconcileSettled;
                    var1 = true;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var4['GIFT_INTENT_DISMISSALS_FETCH_SUCCESS'] = var5;
                var5 = function GIFT_INTENT_DISMISSALS_FETCH_FAILURE() {
                    var3 = _closure3_slot0;
                    var2 = var3.onReconcileSettled;
                    var1 = false;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var4['GIFT_INTENT_DISMISSALS_FETCH_FAILURE'] = var5;
                var5 = function LOGOUT() {
                    var2 = _closure3_slot0;
                    var1 = var2.onLogout;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var4['LOGOUT'] = var5;
                var1['actions'] = var4;
                var4 = global;
                var7 = var4.Map;
                var4 = _closure1_slot9;
                var5 = new Array(2);
                var5[0] = var4;
                var4 = function() {
                    var2 = _closure3_slot0;
                    var1 = var2.onPremiumGiftingIntentStoreChange;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var5[1] = var4;
                var4 = new Array(1);
                var4[0] = var5;
                var5 = var7.prototype;
                var5 = Object.create(var5, {constructor: {value: var7}});
                var15 = var5;
                var14 = var4;
                var4 = new var15[var7](var14, var13);
                var4 = var4 instanceof Object ? var4 : var5;
                var1['stores'] = var4;
                var5 = _closure1_slot1;
                var7 = _closure1_slot2;
                var4 = 8;
                var4 = var7[var4];
                var6 = var5.bind(var6)(var4);
                var14 = _closure1_slot10;
                var13 = _closure1_slot11;
                var4 = var6.prototype;
                var4 = Object.create(var4, {constructor: {value: var6}});
                var15 = var4;
                var3 = new var15[var6](var14, var13, var12);
                var3 = var3 instanceof Object ? var3 : var4;
                var1['reconcileBackoff'] = var3;
                var3 = false;
                var1['isReconciling'] = var3;
                var1['heldGiftingPromptSystemMessage'] = var3;
                var2 = function() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var4 = _closure3_slot0;
                        var3 = var4.isReconcileEligible;
                        var2 = 'retryReconcileServerDismissals';
                        var2 = var3.bind(var4)(var2);
                        if(!var2) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                        var2 = _closure3_slot0;
                        var1 = var2.attemptReconcileFetch;
                        var1 = var1.bind(var2)();
case 9:
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
        var1 = 'onPremiumGiftingIntentStoreChange';
        var5['key'] = var1;
        var1 = function value() {
            var2 = this;
            var1 = var2.maybeReconcileServerDismissals;
            var1 = var1.bind(var2)();
            var1 = var2.maybeRetryHeldGiftingPromptSystemMessage;
            var1 = var1.bind(var2)();
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(10);
        var1[0] = var5;
        var5 = {};
        var7 = 'maybeReconcileServerDismissals';
        var5['key'] = var7;
        var7 = function value() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var2 = this;
                var3 = var2.isReconcileEligible;
                var1 = 'maybeReconcileServerDismissals';
                var1 = var3.bind(var2)(var1);
                if(!var1) { _fun0004_ip = 11; continue _fun0004 }
case 12:
                var1 = var2.reconcileBackoff;
                var1 = var1.pending;
                if(var1) { _fun0004_ip = 11; continue _fun0004 }
case 13:
                var1 = var2.attemptReconcileFetch;
                var1 = var1.bind(var2)();
case 11:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'isReconcileEligible';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var3 = _closure1_slot9;
                var1 = var3.getFriendAnniversaries;
                var1 = var1.bind(var3)();
                var3 = var1.length;
                var1 = 0;
                var1 = var1 !== var3;
                if(!var1) { _fun0005_ip = 14; continue _fun0005 }
case 15:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 9;
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
case 14:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getServerDismissalTimestampMs';
        var5['key'] = var7;
        var7 = function value() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var1 = global;
                var3 = var1.Number;
                var1 = _closure1_slot8;
                var1 = var1.settings;
                var5 = var1.userContent;
                var1 = null;
                var6 = var1 == var5;
                var2 = undefined;
                var4 = undefined;
                if(var6) { _fun0006_ip = 16; continue _fun0006 }
case 17:
                var4 = var5.lastGiftIntentDismissedAtMs;
case 16:
                var5 = var1 != var4;
                var1 = '0';
                if(!var5) { _fun0006_ip = 18; continue _fun0006 }
case 19:
                var1 = var4;
case 18:
                var1 = var3.bind(var2)(var1);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'attemptReconcileFetch';
        var5['key'] = var7;
        var7 = function value() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var4 = this;
                var1 = var4.getServerDismissalTimestampMs;
                var3 = var1.bind(var4)();
                var5 = _closure1_slot9;
                var2 = var5.getLastKnownGiftIntentDismissedAtMs;
                var2 = var2.bind(var5)();
                var2 = var2 >= var3;
                if(var2) { _fun0007_ip = 20; continue _fun0007 }
case 21:
                var2 = var4.isReconciling;
case 20:
                if(var2) { _fun0007_ip = 22; continue _fun0007 }
case 16:
                var2 = true;
                var4['isReconciling'] = var2;
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 10;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var4.bind(var1)(var2);
                var1 = var2.fetchAndReconcileGiftIntentDismissals;
                var1 = var1.bind(var2)(var3);
case 22:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'onReconcileSettled';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var1 = this;
                var2 = false;
                var1['isReconciling'] = var2;
                var2 = var1.reconcileBackoff;
                var3 = arg1;
                if(var3) { _fun0008_ip = 23; continue _fun0008 }
case 12:
                var3 = var2.fail;
                var1 = var1.retryReconcileServerDismissals;
                var1 = var3.bind(var2)(var1);
                _fun0008_ip = 24; continue _fun0008;
case 23:
                var1 = var2.succeed;
                var1 = var1.bind(var2)();
case 24:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'onLogout';
        var5['key'] = var7;
        var7 = function value() {
            var2 = this;
            var3 = var2.reconcileBackoff;
            var1 = var3.cancel;
            var1 = var1.bind(var3)();
            var1 = false;
            var2['isReconciling'] = var1;
            var2['heldGiftingPromptSystemMessage'] = var1;
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'maybeRetryHeldGiftingPromptSystemMessage';
        var5['key'] = var7;
        var7 = function value() {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var2 = this;
                var1 = var2.heldGiftingPromptSystemMessage;
                if(!var1) { _fun0009_ip = 25; continue _fun0009 }
case 26:
                var3 = _closure1_slot9;
                var1 = var3.getLastKnownGiftIntentDismissedAtMs;
                var3 = var1.bind(var3)();
                var1 = var2.getServerDismissalTimestampMs;
                var1 = var1.bind(var2)();
                if(!(!(var3 < var1))) { _fun0009_ip = 25; continue _fun0009 }
case 20:
                var1 = false;
                var2['heldGiftingPromptSystemMessage'] = var1;
                var1 = var2.sendGiftingPromptSystemMessagesIfEligible;
                var1 = var1.bind(var2)();
case 25:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'shouldHoldGiftingPromptSystemMessageForServerReconcile';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var4 = this;
                var5 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 9;
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
                if(var3) { _fun0010_ip = 27; continue _fun0010 }
case 28:
                var3 = _closure1_slot9;
                var2 = var3.getLastKnownGiftIntentDismissedAtMs;
                var3 = var2.bind(var3)();
                var2 = var4.getServerDismissalTimestampMs;
                var2 = var2.bind(var4)();
                var1 = var3 < var2;
case 27:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'trySendGiftingPromptSystemMessage';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3, arg4, arg5) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var3 = this;
                var2 = var3.shouldHoldGiftingPromptSystemMessageForServerReconcile;
                var1 = arg5;
                var1 = var2.bind(var3)(var1);
                if(var1) { _fun0011_ip = 29; continue _fun0011 }
case 30:
                var4 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 11;
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
                _fun0011_ip = 31; continue _fun0011;
case 29:
                var2 = true;
                var3['heldGiftingPromptSystemMessage'] = var2;
                var1 = false;
case 31:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[9] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/gifting/shared/GiftIntentReconcilingManager.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();