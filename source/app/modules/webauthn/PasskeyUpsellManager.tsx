// app/modules/webauthn/PasskeyUpsellManager.tsx
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
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
    var4 = var4.LoginStates;
    var _closure1_slot12 = var4;
    var4 = false;
    var _closure1_slot13 = var4;
    var _closure1_slot14 = var4;
    var4 = 18;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var2 = function(arg1) {
        var4 = function PasskeyUpsellManager(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var5 = this;
                var13 = 0;
                var1 = copyRestArgs(var13);
                var7 = _closure1_slot3;
                var3 = _closure2_slot0;
                var4 = undefined;
                var7 = var7.bind(var4)(var5, var3);
                var10 = new Array(0);
                var13 = var10;
                var12 = var1;
                var11 = 0;
                var1 = arraySpread(var13, var12, var11);
                var1 = _closure1_slot6;
                var9 = var1.bind(var4)(var3);
                var3 = _closure1_slot5;
                var1 = _closure1_slot15;
                var1 = var1.bind(var4)();
                if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var5, var10);
                _fun0002_ip = 8; continue _fun0002;
case 6:
                var6 = global;
                var8 = var6.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var4)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
case 8:
                var1 = var3.bind(var4)(var5, var1);
                var3 = {};
                var4 = var1.handlePasskeyUpsellShow;
                var3['POST_CONNECTION_OPEN'] = var4;
                var4 = var1.handleLogout;
                var3['LOGIN_RESET'] = var4;
                var4 = var1.handleLoginSuccess;
                var3['LOGIN_SUCCESS'] = var4;
                var4 = var1.handleLogout;
                var3['LOGOUT'] = var4;
                var1['actions'] = var3;
                var3 = global;
                var3 = var3.Map;
                var4 = var3.prototype;
                var4 = Object.create(var4, {constructor: {value: var3}});
                var14 = var4;
                var3 = new var14[var3](var13);
                var6 = var3 instanceof Object ? var3 : var4;
                var5 = var6.set;
                var4 = _closure1_slot9;
                var3 = var1.handlePasskeyUpsellShow;
                var6 = var5.bind(var6)(var4, var3);
                var5 = var6.set;
                var4 = _closure1_slot8;
                var3 = var1.handlePasskeyUpsellShow;
                var6 = var5.bind(var6)(var4, var3);
                var5 = var6.set;
                var4 = _closure1_slot10;
                var3 = var1.handlePasskeyUpsellShow;
                var5 = var5.bind(var6)(var4, var3);
                var4 = var5.set;
                var3 = _closure1_slot11;
                var2 = var1.handlePasskeyUpsellShow;
                var2 = var4.bind(var5)(var3, var2);
                var1['stores'] = var2;
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
        var1 = 'handlePasskeyUpsellShow';
        var5['key'] = var1;
        var1 = function value() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var2 = _closure1_slot14;
                if(!var2) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 10;
                var2 = var3[var2];
                var3 = undefined;
                var2 = var4.bind(var3)(var2);
                var2 = var2.hasWebAuthn;
                if(!var2) { _fun0003_ip = 9; continue _fun0003 }
case 11:
                var4 = _closure1_slot9;
                var2 = var4.getLoginStatus;
                var4 = var2.bind(var4)();
                var2 = _closure1_slot12;
                var2 = var2.NONE;
                if(!(var4 === var2)) { _fun0003_ip = 9; continue _fun0003 }
case 12:
                var4 = _closure1_slot9;
                var2 = var4.attemptedPasswordLogin;
                var2 = var2.bind(var4)();
                if(!var2) { _fun0003_ip = 9; continue _fun0003 }
case 13:
                var2 = _closure1_slot8;
                var2 = var2.hasLoadedExperiments;
                if(!var2) { _fun0003_ip = 9; continue _fun0003 }
case 14:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 11;
                var2 = var7[var2];
                var5 = var6.bind(var3)(var2);
                var4 = var5.UNSAFE_isDismissibleContentDismissed;
                var2 = 12;
                var2 = var7[var2];
                var2 = var6.bind(var3)(var2);
                var2 = var2.DismissibleContent;
                var2 = var2.PASSWORDLESS_UPSELL;
                var2 = var4.bind(var5)(var2);
                if(var2) { _fun0003_ip = 9; continue _fun0003 }
case 15:
                var4 = _closure1_slot11;
                var2 = var4.hasFetchedCredentials;
                var2 = var2.bind(var4)();
                if(!var2) { _fun0003_ip = 16; continue _fun0003 }
case 17:
                var2 = _closure1_slot11;
                var2 = var2.hasCredentials;
                if(var2) { _fun0003_ip = 9; continue _fun0003 }
case 16:
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 13;
                var2 = var5[var2];
                var4 = var4.bind(var3)(var2);
                var2 = var4.isModalOpen;
                var2 = var2.bind(var4)();
                if(var2) { _fun0003_ip = 9; continue _fun0003 }
case 18:
                var4 = _closure1_slot10;
                var2 = var4.getCurrentUser;
                var2 = var2.bind(var4)();
                if(!(var3 !== var2)) { _fun0003_ip = 9; continue _fun0003 }
case 19:
                var2 = var2.verified;
                if(!var2) { _fun0003_ip = 9; continue _fun0003 }
case 20:
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 14;
                var2 = var5[var2];
                var6 = var4.bind(var3)(var2);
                var5 = var6.getCurrentConfig;
                var4 = {};
                var2 = 'PasskeyUpsellManager';
                var4['location'] = var2;
                var2 = {};
                var7 = false;
                var2['autoTrackExposure'] = var7;
                var2 = var5.bind(var6)(var4, var2);
                var5 = new Array(1);
                var5[0] = var2;
                var4 = var5.some;
                var2 = function(arg1) {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 15;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var1 = var1.PasskeyUpsellOnLoginExperimentState;
                    var2 = var1.None;
                    var1 = arg1;
                    var1 = var1 !== var2;
                    return var1;
                };
                var2 = var4.bind(var5)(var2);
                if(!var2) { _fun0003_ip = 9; continue _fun0003 }
case 21:
                var4 = _closure1_slot11;
                var2 = var4.hasFetchedCredentials;
                var2 = var2.bind(var4)();
                if(var2) { _fun0003_ip = 22; continue _fun0003 }
case 23:
                var2 = _closure1_slot13;
                if(var2) { _fun0003_ip = 9; continue _fun0003 }
case 24:
                var2 = true;
                _closure1_slot13 = var2;
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 16;
                var2 = var5[var2];
                var4 = var4.bind(var3)(var2);
                var2 = var4.fetchWebAuthnCredentials;
                var2 = var2.bind(var4)();
                _fun0003_ip = 9; continue _fun0003;
case 22:
                var2 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 17;
                var1 = var4[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var2.openPasskeyUpsell;
                var1 = var1.bind(var2)();
case 9:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(4);
        var1[0] = var5;
        var5 = {};
        var7 = 'handleLoginSuccess';
        var5['key'] = var7;
        var7 = function value() {
            var1 = true;
            _closure1_slot14 = var1;
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'handleLogout';
        var5['key'] = var7;
        var7 = function value() {
            var1 = false;
            _closure1_slot13 = var1;
            _closure1_slot14 = var1;
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'markDismissed';
        var5['key'] = var7;
        var6 = function value(arg1) {
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 11;
            var1 = var6[var1];
            var2 = undefined;
            var4 = var5.bind(var2)(var1);
            var3 = var4.UNSAFE_markDismissibleContentAsDismissed;
            var1 = 12;
            var1 = var6[var1];
            var1 = var5.bind(var2)(var1);
            var1 = var1.DismissibleContent;
            var2 = var1.PASSWORDLESS_UPSELL;
            var1 = {};
            var5 = arg1;
            var1['dismissAction'] = var5;
            var5 = true;
            var1['forceTrack'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var5['value'] = var6;
        var1[3] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var13 = var4;
    var2 = new var13[var2](var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 19;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/webauthn/PasskeyUpsellManager.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();