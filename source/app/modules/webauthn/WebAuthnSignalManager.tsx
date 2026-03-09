// app/modules/webauthn/WebAuthnSignalManager.tsx
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
            _closure1_slot10 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot10 = var1;
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
    var4 = 11;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var2 = function(arg1) {
        var4 = function WebAuthnSignalManager(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var4 = this;
                var12 = 0;
                var1 = copyRestArgs(var12);
                var7 = _closure1_slot4;
                var2 = _closure2_slot3;
                var3 = undefined;
                var7 = var7.bind(var3)(var4, var2);
                var9 = new Array(0);
                var12 = var9;
                var11 = var1;
                var10 = 0;
                var1 = arraySpread(var12, var11, var10);
                var1 = _closure1_slot7;
                var8 = var1.bind(var3)(var2);
                var2 = _closure1_slot6;
                var1 = _closure1_slot10;
                var1 = var1.bind(var3)();
                if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var1 = var8.apply;
                var1 = var1.bind(var8)(var4, var9);
                _fun0002_ip = 8; continue _fun0002;
case 6:
                var6 = global;
                var7 = var6.Reflect;
                var6 = var7.construct;
                var5 = _closure1_slot7;
                var5 = var5.bind(var3)(var4);
                var5 = var5.constructor;
                var1 = var6.bind(var7)(var8, var9, var5);
case 8:
                var1 = var2.bind(var3)(var4, var1);
                var2 = {};
                var3 = var1.handleAuthenticatorDelete;
                var2['AUTHENTICATOR_DELETE'] = var3;
                var3 = var1.handleWebAuthnCredentialsLoaded;
                var2['MFA_WEBAUTHN_CREDENTIALS_LOADED'] = var3;
                var3 = var1.handleCurrentUserUpdate;
                var2['CURRENT_USER_UPDATE'] = var3;
                var1['actions'] = var2;
                return var1;
            }
        };
        var _closure2_slot3 = var4;
        var5 = _closure1_slot8;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot5;
        var5 = {};
        var7 = 'handleAuthenticatorDelete';
        var5['key'] = var7;
        var8 = _closure1_slot3;
        var1 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                    var2 = arg1;
                    var6 = var2.credential;
                    var4 = undefined;
                    SaveGenerator(address=25);
case 11:
                    return var4;
case 12:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0003_ip = 13; continue _fun0003 }
case 14:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var5 = 7;
                    var5 = var8[var5];
                    var5 = var7.bind(var4)(var5);
                    var8 = var5.SignalUnknownCredentialExperiment;
                    var7 = var8.getConfig;
                    var5 = {};
                    var9 = 'manager';
                    var5['location'] = var9;
                    var5 = var7.bind(var8)(var5);
                    var5 = var5.enabled;
                    if(!var5) { _fun0003_ip = 15; continue _fun0003 }
case 16:
                    var5 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var3 = 8;
                    var3 = var7[var3];
                    var5 = var5.bind(var4)(var3);
                    var3 = var5.signalUnknownCredential;
                    var3 = var3.bind(var5)(var6);
                    SaveGenerator(address=124);
case 17:
                    return var3;
case 18:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0003_ip = 19; continue _fun0003 }
case 15:
                    return var4;
case 19:
                    return var3;
case 13:
                    return var2;
case 9:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var1 = var8.bind(var3)(var1);
        var _closure2_slot2 = var1;
        var1 = function handleAuthenticatorDelete() {
            var1 = undefined;
            var4 = _closure2_slot2;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'handleWebAuthnCredentialsLoaded';
        var5['key'] = var7;
        var7 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0004_ip = 20; continue _fun0004 }
case 10:
                    var2 = arg1;
                    var7 = var2.credentials;
                    var4 = undefined;
                    SaveGenerator(address=25);
case 11:
                    return var4;
case 12:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0004_ip = 21; continue _fun0004 }
case 14:
                    var6 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var5 = 9;
                    var5 = var8[var5];
                    var5 = var6.bind(var4)(var5);
                    var8 = var5.SignalAllAcceptedCredentialsExperiment;
                    var6 = var8.getConfig;
                    var5 = {};
                    var9 = 'manager';
                    var5['location'] = var9;
                    var5 = var6.bind(var8)(var5);
                    var5 = var5.enabled;
                    if(!var5) { _fun0004_ip = 22; continue _fun0004 }
case 16:
                    var6 = _closure1_slot9;
                    var5 = var6.getId;
                    var6 = var5.bind(var6)();
                    var5 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var3 = 8;
                    var3 = var8[var3];
                    var5 = var5.bind(var4)(var3);
                    var3 = var5.signalAllAcceptedCredentials;
                    var3 = var3.bind(var5)(var7, var6);
                    SaveGenerator(address=139);
case 23:
                    return var3;
case 9:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0004_ip = 24; continue _fun0004 }
case 22:
                    return var4;
case 24:
                    return var3;
case 21:
                    return var2;
case 20:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var7 = var8.bind(var3)(var7);
        var _closure2_slot1 = var7;
        var7 = function handleWebAuthnCredentialsLoaded() {
            var1 = undefined;
            var4 = _closure2_slot1;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'handleCurrentUserUpdate';
        var5['key'] = var7;
        var7 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0005_ip = 25; continue _fun0005 }
case 10:
                    var2 = arg1;
                    var6 = var2.user;
                    var4 = undefined;
                    SaveGenerator(address=24);
case 26:
                    return var4;
case 27:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0005_ip = 28; continue _fun0005 }
case 29:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var5 = 10;
                    var5 = var8[var5];
                    var5 = var7.bind(var4)(var5);
                    var8 = var5.SignalCurrentUserDetailsExperiment;
                    var7 = var8.getConfig;
                    var5 = {};
                    var9 = 'manager';
                    var5['location'] = var9;
                    var5 = var7.bind(var8)(var5);
                    var5 = var5.enabled;
                    if(!var5) { _fun0005_ip = 30; continue _fun0005 }
case 31:
                    var5 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var3 = 8;
                    var3 = var7[var3];
                    var5 = var5.bind(var4)(var3);
                    var3 = var5.signalCurrentUserDetails;
                    var3 = var3.bind(var5)(var6);
                    SaveGenerator(address=123);
case 32:
                    return var3;
case 33:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0005_ip = 34; continue _fun0005 }
case 30:
                    return var4;
case 34:
                    return var3;
case 28:
                    return var2;
case 25:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var7 = var8.bind(var3)(var7);
        var _closure2_slot0 = var7;
        var6 = function handleCurrentUserUpdate() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var13 = var4;
    var2 = new var13[var2](var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/webauthn/WebAuthnSignalManager.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();