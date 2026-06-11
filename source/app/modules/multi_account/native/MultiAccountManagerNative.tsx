// app/modules/multi_account/native/MultiAccountManagerNative.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
    var8 = var7.bind(var1)(var2);
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
    var2 = var5.bind(var1)(var2);
    var2 = var2.SWITCH_ACCOUNTS_MODAL_KEY;
    var _closure1_slot5 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var9 = var2.AnalyticEvents;
    var _closure1_slot6 = var9;
    var9 = var2.ComponentActions;
    var _closure1_slot7 = var9;
    var2 = var2.Routes;
    var _closure1_slot8 = var2;
    var2 = 5;
    var2 = var6[var2];
    var10 = var7.bind(var1)(var2);
    var2 = var10.prototype;
    var9 = Object.create(var2, {constructor: {value: var10}});
    var13 = 'MultiAccountManagerNative';
    var14 = var9;
    var2 = new var14[var10](var13, var12);
    var2 = var2 instanceof Object ? var2 : var9;
    var _closure1_slot9 = var2;
    var2 = 6;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var2 = var2.Millis;
    var9 = var2.SECOND;
    var2 = 15;
    var2 = var2 * var9;
    var _closure1_slot10 = var2;
    var2 = null;
    var _closure1_slot11 = var2;
    var2 = function MultiAccountModalManagerImpl() {
        var3 = this;
        var _closure2_slot0 = var3;
        var5 = _closure1_slot3;
        var4 = _closure1_slot13;
        var1 = undefined;
        var4 = var5.bind(var1)(var3, var4);
        var4 = false;
        var3['cancelled'] = var4;
        var4 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var6 = _closure1_slot1;
                var3 = _closure1_slot2;
                var5 = 7;
                var4 = var3[var5];
                var1 = undefined;
                var8 = var6.bind(var1)(var4);
                var7 = var8.pushLazy;
                var6 = _closure1_slot0;
                var4 = 9;
                var4 = var3[var4];
                var6 = var6.bind(var1)(var4);
                var4 = 8;
                var4 = var3[var4];
                var3 = var3.paths;
                var6 = var6.bind(var1)(var4, var3);
                var3 = {};
                var4 = 'switch-accounts-spinner-modal';
                var3 = var7.bind(var8)(var6, var3, var4);
                var3 = _closure2_slot0;
                var3 = var3.cancelled;
                if(!var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var2 = var2[var5];
                var3 = var3.bind(var1)(var2);
                var2 = var3.popWithKey;
                var2 = var2.bind(var3)(var4);
case 2:
                return var1;
            }
        };
        var3['push'] = var4;
        var4 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var3 = _closure2_slot0;
                var1 = false;
                var3['cancelled'] = var1;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 10;
                var4 = var4[var1];
                var1 = undefined;
                var5 = var5.bind(var1)(var4);
                var4 = var5.getRootNavigationRef;
                var5 = var4.bind(var5)();
                var4 = null;
                if(!(var4 != var5)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                var4 = var5.isReady;
                var4 = var4.bind(var5)();
                if(var4) { _fun0002_ip = 6; continue _fun0002 }
case 4:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var4 = 11;
                var4 = var6[var4];
                var4 = var5.bind(var1)(var4);
                var6 = var4.ComponentDispatch;
                var5 = var6.subscribeOnce;
                var3 = _closure1_slot7;
                var4 = var3.NAVIGATOR_READY;
                var3 = function() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var2 = _closure2_slot0;
                        var2 = var2.cancelled;
                        if(var2) { _fun0003_ip = 7; continue _fun0003 }
case 8:
                        var2 = _closure2_slot0;
                        var1 = var2.push;
                        var1 = var1.bind(var2)();
case 7:
                        var1 = undefined;
                        return var1;
                    }
                };
                var3 = var5.bind(var6)(var4, var3);
                _fun0002_ip = 9; continue _fun0002;
case 6:
                var3 = _closure2_slot0;
                var2 = var3.push;
                var2 = var2.bind(var3)();
case 9:
                return var1;
            }
        };
        var3['enqueue'] = var4;
        var2 = function() {
            var2 = _closure2_slot0;
            var1 = true;
            var2['cancelled'] = var1;
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 7;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.popWithKey;
            var2 = 'switch-accounts-spinner-modal';
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var3['pop'] = var2;
        return var1;
    };
    var _closure1_slot13 = var2;
    var2 = var8.bind(var1)(var2);
    var8 = var2.prototype;
    var8 = Object.create(var8, {constructor: {value: var2}});
    var14 = var8;
    var2 = new var14[var2](var13);
    var2 = var2 instanceof Object ? var2 : var8;
    var _closure1_slot12 = var2;
    var2 = 12;
    var2 = var6[var2];
    var7 = var7.bind(var1)(var2);
    var2 = {};
    var8 = function onSwitchStart() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = _closure1_slot12;
            var1 = var2.enqueue;
            var1 = var1.bind(var2)();
            var2 = _closure1_slot11;
            var1 = null;
            if(!(var1 !== var2)) { _fun0004_ip = 10; continue _fun0004 }
case 11:
            var1 = global;
            var4 = var1.clearTimeout;
            var2 = _closure1_slot11;
            var1 = undefined;
            var1 = var4.bind(var1)(var2);
case 10:
            var1 = global;
            var5 = var1.setTimeout;
            var4 = _closure1_slot10;
            var1 = undefined;
            var2 = function() {
                var2 = _closure1_slot12;
                var1 = var2.pop;
                var1 = var1.bind(var2)();
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 12;
                var2 = var4[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.getMultiAccountManagerState;
                var2 = var2.bind(var3)();
                var10 = var2.previousUserId;
                var9 = var2.expectedUserId;
                var6 = var2.switchLocation;
                var7 = var2.hasEverConnected;
                var3 = _closure1_slot1;
                var2 = 13;
                var2 = var4[var2];
                var5 = var3.bind(var1)(var2);
                var4 = var5.track;
                var2 = _closure1_slot6;
                var3 = var2.MULTI_ACCOUNT_SWITCH_TIMEOUT;
                var2 = {};
                var2['from_user_id'] = var10;
                var2['to_user_id'] = var9;
                var9 = _closure1_slot4;
                var8 = var9.getUsers;
                var10 = var8.bind(var9)();
                var9 = var10.map;
                var8 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.id;
                    return var1;
                };
                var8 = var9.bind(var10)(var8);
                var2['linked_user_ids'] = var8;
                var2['has_ever_connected'] = var7;
                var2['switch_origin'] = var6;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var2 = var5.bind(var1)(var2, var4);
            _closure1_slot11 = var2;
            return var1;
        }
    };
    var2['onSwitchStart'] = var8;
    var8 = function onSwitchSuccess(arg1, arg2) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var1 = arg2;
        var _closure2_slot1 = var1;
        var1 = global;
        var4 = var1.setTimeout;
        var1 = undefined;
        var3 = function() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var1 = _closure2_slot1;
                if(!var1) { _fun0005_ip = 12; continue _fun0005 }
case 13:
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 14;
                var2 = var5[var2];
                var3 = undefined;
                var7 = var4.bind(var3)(var2);
                var6 = var7.transitionTo;
                var2 = _closure1_slot8;
                var2 = var2.ME;
                var2 = var6.bind(var7)(var2);
                var2 = 15;
                var2 = var5[var2];
                var2 = var4.bind(var3)(var2);
                var5 = var2.MobileHomeDrawerExperiment;
                var4 = var5.getConfig;
                var2 = {};
                var6 = 'multi-account';
                var2['location'] = var6;
                var2 = var4.bind(var5)(var2);
                var2 = var2.enableHome;
                if(!var2) { _fun0005_ip = 12; continue _fun0005 }
case 14:
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 16;
                var1 = var4[var1];
                var3 = var2.bind(var3)(var1);
                var2 = var3.setHomeDrawerState;
                var1 = false;
                var1 = var2.bind(var3)(var1);
case 12:
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var1 = 17;
                var2 = var7[var1];
                var1 = undefined;
                var4 = var6.bind(var1)(var2);
                var3 = var4.open;
                var2 = {};
                var8 = 'SWITCH_ACCOUNTS_TOAST_LOGIN_SUCCESS';
                var2['key'] = var8;
                var8 = _closure1_slot0;
                var5 = 18;
                var9 = var7[var5];
                var9 = var8.bind(var1)(var9);
                var10 = var9.intl;
                var9 = var10.formatToPlainString;
                var5 = var7[var5];
                var5 = var8.bind(var1)(var5);
                var5 = var5.t;
                var8 = var5.wx7O3L;
                var5 = {};
                var11 = _closure2_slot0;
                var11 = var11.username;
                var5['username'] = var11;
                var5 = var9.bind(var10)(var8, var5);
                var2['content'] = var5;
                var5 = 19;
                var5 = var7[var5];
                var5 = var6.bind(var1)(var5);
                var2['icon'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            }
        };
        var2 = 100;
        var2 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2['onSwitchSuccess'] = var8;
    var8 = function onSwitchError() {
        var6 = _closure1_slot1;
        var7 = _closure1_slot2;
        var1 = 17;
        var2 = var7[var1];
        var1 = undefined;
        var4 = var6.bind(var1)(var2);
        var3 = var4.open;
        var2 = {};
        var8 = 'SWITCH_ACCOUNTS_TOAST_LOGIN_ERROR';
        var2['key'] = var8;
        var10 = _closure1_slot0;
        var5 = 18;
        var8 = var7[var5];
        var8 = var10.bind(var1)(var8);
        var9 = var8.intl;
        var8 = var9.string;
        var5 = var7[var5];
        var5 = var10.bind(var1)(var5);
        var5 = var5.t;
        var5 = var5.pqvKWA;
        var5 = var8.bind(var9)(var5);
        var2['content'] = var5;
        var5 = 19;
        var5 = var7[var5];
        var5 = var6.bind(var1)(var5);
        var2['icon'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['onSwitchError'] = var8;
    var8 = function onTokenSet() {
        var4 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 7;
        var2 = var2[var1];
        var1 = undefined;
        var5 = var4.bind(var1)(var2);
        var4 = var5.popWithKey;
        var2 = _closure1_slot5;
        var2 = var4.bind(var5)(var2);
        var4 = _closure1_slot12;
        var2 = var4.pop;
        var2 = var2.bind(var4)();
        var2 = global;
        var4 = var2.clearTimeout;
        var2 = _closure1_slot11;
        var2 = var4.bind(var1)(var2);
        var2 = null;
        _closure1_slot11 = var2;
        return var1;
    };
    var2['onTokenSet'] = var8;
    var4 = function onLogout(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var1 = arg1;
            var1 = var1.isSwitchingAccount;
            if(!var1) { _fun0006_ip = 15; continue _fun0006 }
case 16:
            var4 = _closure1_slot9;
            var3 = var4.info;
            var2 = 'Closing fast-connect socket because of account switch logout';
            var2 = var3.bind(var4)(var2);
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 20;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var1 = var2.closeFastConnectSocket;
            var1 = var1.bind(var2)();
case 15:
            var1 = undefined;
            return var1;
        }
    };
    var2['onLogout'] = var4;
    var4 = var7.prototype;
    var4 = Object.create(var4, {constructor: {value: var7}});
    var14 = var4;
    var13 = var2;
    var2 = new var14[var7](var13, var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 21;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/multi_account/native/MultiAccountManagerNative.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();