// app/modules/multi_account/native/MultiAccountManagerNative.tsx
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
            _closure1_slot15 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot15 = var1;
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
    var8 = var7.bind(var1)(var4);
    var _closure1_slot6 = var8;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.SWITCH_ACCOUNTS_MODAL_KEY;
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var9 = var4.ComponentActions;
    var _closure1_slot9 = var9;
    var4 = var4.Routes;
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var6[var4];
    var10 = var7.bind(var1)(var4);
    var4 = var10.prototype;
    var9 = Object.create(var4, {constructor: {value: var10}});
    var13 = 'MultiAccountManagerNative';
    var14 = var9;
    var4 = new var14[var10](var13, var12);
    var4 = var4 instanceof Object ? var4 : var9;
    var _closure1_slot11 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var4 = var4.Millis;
    var9 = var4.SECOND;
    var4 = 15;
    var4 = var4 * var9;
    var _closure1_slot12 = var4;
    var4 = null;
    var _closure1_slot13 = var4;
    var4 = function MultiAccountModalManagerImpl() {
        var3 = this;
        var _closure2_slot0 = var3;
        var5 = _closure1_slot7;
        var4 = _closure1_slot16;
        var1 = undefined;
        var4 = var5.bind(var1)(var3, var4);
        var4 = false;
        var3['cancelled'] = var4;
        var4 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var6 = _closure1_slot1;
                var3 = _closure1_slot2;
                var5 = 9;
                var4 = var3[var5];
                var1 = undefined;
                var8 = var6.bind(var1)(var4);
                var7 = var8.pushLazy;
                var6 = _closure1_slot0;
                var4 = 11;
                var4 = var3[var4];
                var6 = var6.bind(var1)(var4);
                var4 = 10;
                var4 = var3[var4];
                var3 = var3.paths;
                var6 = var6.bind(var1)(var4, var3);
                var3 = {};
                var4 = 'switch-accounts-spinner-modal';
                var3 = var7.bind(var8)(var6, var3, var4);
                var3 = _closure2_slot0;
                var3 = var3.cancelled;
                if(!var3) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var2 = var2[var5];
                var3 = var3.bind(var1)(var2);
                var2 = var3.popWithKey;
                var2 = var2.bind(var3)(var4);
case 6:
                return var1;
            }
        };
        var3['push'] = var4;
        var4 = function() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var3 = _closure2_slot0;
                var1 = false;
                var3['cancelled'] = var1;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 12;
                var4 = var4[var1];
                var1 = undefined;
                var5 = var5.bind(var1)(var4);
                var4 = var5.getRootNavigationRef;
                var5 = var4.bind(var5)();
                var4 = null;
                if(!(var4 != var5)) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                var4 = var5.isReady;
                var4 = var4.bind(var5)();
                if(var4) { _fun0003_ip = 10; continue _fun0003 }
case 8:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var4 = 13;
                var4 = var6[var4];
                var4 = var5.bind(var1)(var4);
                var6 = var4.ComponentDispatch;
                var5 = var6.subscribeOnce;
                var3 = _closure1_slot9;
                var4 = var3.NAVIGATOR_READY;
                var3 = function() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        var2 = _closure2_slot0;
                        var2 = var2.cancelled;
                        if(var2) { _fun0004_ip = 11; continue _fun0004 }
case 12:
                        var2 = _closure2_slot0;
                        var1 = var2.push;
                        var1 = var1.bind(var2)();
case 11:
                        var1 = undefined;
                        return var1;
                    }
                };
                var3 = var5.bind(var6)(var4, var3);
                _fun0003_ip = 13; continue _fun0003;
case 10:
                var3 = _closure2_slot0;
                var2 = var3.push;
                var2 = var2.bind(var3)();
case 13:
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
            var1 = 9;
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
    var _closure1_slot16 = var4;
    var4 = var8.bind(var1)(var4);
    var8 = var4.prototype;
    var8 = Object.create(var8, {constructor: {value: var4}});
    var14 = var8;
    var4 = new var14[var4](var13);
    var4 = var4 instanceof Object ? var4 : var8;
    var _closure1_slot14 = var4;
    var4 = 22;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var2 = function(arg1) {
        var4 = function MultiAccountManagerNative() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot7;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot4;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot3;
                var1 = _closure1_slot15;
                var1 = var1.bind(var3)();
                if(var1) { _fun0005_ip = 8; continue _fun0005 }
case 14:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0005_ip = 15; continue _fun0005;
case 8:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot4;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 15:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot5;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot6;
        var5 = {};
        var1 = 'onSwitchStart';
        var5['key'] = var1;
        var1 = function value() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 9;
                var2 = var5[var1];
                var1 = undefined;
                var6 = var4.bind(var1)(var2);
                var4 = var6.popWithKey;
                var2 = _closure1_slot8;
                var2 = var4.bind(var6)(var2);
                var6 = _closure1_slot11;
                var4 = var6.info;
                var2 = 'Closing fast-connect socket because of account switch logout';
                var2 = var4.bind(var6)(var2);
                var4 = _closure1_slot0;
                var2 = 14;
                var2 = var5[var2];
                var4 = var4.bind(var1)(var2);
                var2 = var4.closeFastConnectSocket;
                var2 = var2.bind(var4)();
                var4 = _closure1_slot14;
                var2 = var4.enqueue;
                var2 = var2.bind(var4)();
                var4 = _closure1_slot13;
                var2 = null;
                if(!(var2 !== var4)) { _fun0006_ip = 10; continue _fun0006 }
case 16:
                var2 = global;
                var4 = var2.clearTimeout;
                var2 = _closure1_slot13;
                var2 = var4.bind(var1)(var2);
case 10:
                var2 = global;
                var5 = var2.setTimeout;
                var4 = _closure1_slot12;
                var2 = function() {
                    var3 = _closure1_slot14;
                    var2 = var3.pop;
                    var2 = var2.bind(var3)();
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 15;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.reportAccountSwitchTimeout;
                    var2 = var2.bind(var3)();
                    return var1;
                };
                var2 = var5.bind(var1)(var2, var4);
                _closure1_slot13 = var2;
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(4);
        var1[0] = var5;
        var5 = {};
        var7 = 'onSwitchSuccess';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var1 = arg1;
                var _closure3_slot0 = var1;
                var1 = arg2;
                if(!var1) { _fun0007_ip = 17; continue _fun0007 }
case 18:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 16;
                var3 = var6[var3];
                var4 = undefined;
                var9 = var5.bind(var4)(var3);
                var8 = var9.transitionTo;
                var3 = _closure1_slot10;
                var7 = var3.ME;
                var3 = {};
                var10 = true;
                var3['navigationReplace'] = var10;
                var3 = var8.bind(var9)(var7, var3);
                var3 = 17;
                var3 = var6[var3];
                var3 = var5.bind(var4)(var3);
                var6 = var3.MobileHomeDrawerExperiment;
                var5 = var6.getConfig;
                var3 = {};
                var7 = 'multi-account';
                var3['location'] = var7;
                var3 = var5.bind(var6)(var3);
                var3 = var3.enableHome;
                if(!var3) { _fun0007_ip = 17; continue _fun0007 }
case 6:
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 18;
                var1 = var5[var1];
                var4 = var3.bind(var4)(var1);
                var3 = var4.setHomeDrawerState;
                var1 = false;
                var1 = var3.bind(var4)(var1);
case 17:
                var1 = global;
                var4 = var1.setTimeout;
                var1 = undefined;
                var3 = function() {
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var1 = 19;
                    var2 = var7[var1];
                    var1 = undefined;
                    var4 = var6.bind(var1)(var2);
                    var3 = var4.open;
                    var2 = {};
                    var8 = 'SWITCH_ACCOUNTS_TOAST_LOGIN_SUCCESS';
                    var2['key'] = var8;
                    var8 = _closure1_slot0;
                    var5 = 20;
                    var9 = var7[var5];
                    var9 = var8.bind(var1)(var9);
                    var10 = var9.intl;
                    var9 = var10.formatToPlainString;
                    var5 = var7[var5];
                    var5 = var8.bind(var1)(var5);
                    var5 = var5.t;
                    var8 = var5.wx7O3L;
                    var5 = {};
                    var11 = _closure3_slot0;
                    var11 = var11.username;
                    var5['username'] = var11;
                    var5 = var9.bind(var10)(var8, var5);
                    var2['content'] = var5;
                    var5 = 21;
                    var5 = var7[var5];
                    var5 = var6.bind(var1)(var5);
                    var2['icon'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var2 = 100;
                var2 = var4.bind(var1)(var3, var2);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'onSwitchError';
        var5['key'] = var7;
        var7 = function value() {
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 19;
            var2 = var7[var1];
            var1 = undefined;
            var4 = var6.bind(var1)(var2);
            var3 = var4.open;
            var2 = {};
            var8 = 'SWITCH_ACCOUNTS_TOAST_LOGIN_ERROR';
            var2['key'] = var8;
            var10 = _closure1_slot0;
            var5 = 20;
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
            var5 = 21;
            var5 = var7[var5];
            var5 = var6.bind(var1)(var5);
            var2['icon'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'onSwitchComplete';
        var5['key'] = var7;
        var6 = function value() {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var4 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var4.bind(var1)(var2);
                var4 = var5.popWithKey;
                var2 = _closure1_slot8;
                var2 = var4.bind(var5)(var2);
                var4 = _closure1_slot14;
                var2 = var4.pop;
                var2 = var2.bind(var4)();
                var4 = _closure1_slot13;
                var2 = null;
                if(!(var2 !== var4)) { _fun0008_ip = 19; continue _fun0008 }
case 20:
                var4 = global;
                var5 = var4.clearTimeout;
                var4 = _closure1_slot13;
                var4 = var5.bind(var1)(var4);
                _closure1_slot13 = var2;
case 19:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[3] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var14 = var4;
    var2 = new var14[var2](var13);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 23;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/multi_account/native/MultiAccountManagerNative.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();