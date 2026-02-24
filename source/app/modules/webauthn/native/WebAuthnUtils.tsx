// app/modules/webauthn/native/WebAuthnUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function _promptForRegisterCredential() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot2;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    var7 = arguments[0];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var6 = undefined;
                    if(!(var7 === var6)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                    var2 = _closure1_slot3;
                    var2 = var2.DCDSecurityKeyManager;
                    var7 = var2.register;
case 4:
                    SaveGenerator(address=42);
case 6:
                    return var6;
case 7:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var3 = 3;
                    var3 = var5[var3];
                    var4 = var4.bind(var6)(var3);
                    var3 = var4.startRegisterWebAuthnCredential;
                    var3 = var3.bind(var4)();
                    SaveGenerator(address=85);
case 10:
                    return var3;
case 11:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 12; continue _fun0001 }
case 13:
                    var8 = var3.ticket;
                    var4 = var3.challenge;
                    var5 = {};
                    var5['ticket'] = var8;
                    var4 = var7.bind(var6)(var4);
                    SaveGenerator(address=119);
case 14:
                    return var4;
case 15:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(var6) { _fun0001_ip = 16; continue _fun0001 }
case 17:
                    var5['credential'] = var4;
                    return var5;
case 16:
                    return var4;
case 12:
                    return var3;
case 8:
                    return var2;
case 2:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot5 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot5 = var1;
    var4 = function registerSecurityKey(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var5 = arguments[1];
            var3 = undefined;
            if(!(var5 === var3)) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var4 = _closure1_slot3;
            var4 = var4.DCDSecurityKeyManager;
            var5 = var4.register;
case 18:
            var _closure2_slot0 = var3;
            var _closure2_slot1 = var3;
            var4 = var2.onRegisterSuccess;
            var7 = var2.setError;
            _closure2_slot0 = var7;
            var6 = var2.setRegistering;
            _closure2_slot1 = var6;
            if(!(var3 !== var7)) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            var2 = '';
            var2 = var7.bind(var3)(var2);
case 20:
            var2 = true;
            var2 = var6.bind(var3)(var2);
            var2 = function promptForRegisterCredential() {
                var1 = undefined;
                var4 = _closure1_slot5;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var3 = var2.bind(var3)(var5);
            var2 = var3.then;
            var4 = var2.bind(var3)(var4);
            var3 = var4.catch;
            var2 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = arg1;
                    var3 = _closure2_slot0;
                    var4 = undefined;
                    if(!(var4 !== var3)) { _fun0003_ip = 11; continue _fun0003 }
case 22:
                    var3 = _closure2_slot0;
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var2 = 4;
                    var5 = var8[var2];
                    var5 = var7.bind(var4)(var5);
                    var6 = var5.intl;
                    var5 = var6.string;
                    var2 = var8[var2];
                    var2 = var7.bind(var4)(var2);
                    var2 = var2.t;
                    var2 = var2.xSCvBf;
                    var2 = var5.bind(var6)(var2);
                    var2 = var3.bind(var4)(var2);
                    throw var1;
case 11:
                    throw var1;
                }
            };
            var3 = var3.bind(var4)(var2);
            var2 = var3.finally;
            var1 = function() {
                var3 = _closure2_slot1;
                var2 = undefined;
                var1 = false;
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var _closure1_slot6 = var4;
    var1 = function mutateAndroidRegisterChallengeForDiscoverable(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var1 = function(arg1) {
            var1 = global;
            var4 = var1.JSON;
            var3 = var4.parse;
            var2 = arg1;
            var4 = var3.bind(var4)(var2);
            var2 = var4.publicKey;
            var3 = var2.authenticatorSelection;
            var2 = 'required';
            var3['residentKey'] = var2;
            var3 = _closure2_slot0;
            var2 = var1.JSON;
            var1 = var2.stringify;
            var2 = var1.bind(var2)(var4);
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
        };
        return var1;
    };
    var _closure1_slot7 = var1;
    var8 = function registerAndroidCredentialManagerPasskey(arg1) {
        var4 = _closure1_slot6;
        var2 = _closure1_slot7;
        var1 = _closure1_slot3;
        var1 = var1.DCDSecurityKeyManager;
        var1 = var1.registerPasskey;
        var3 = undefined;
        var2 = var2.bind(var3)(var1);
        var1 = arg1;
        var1 = var4.bind(var3)(var1, var2);
        return var1;
    };
    var _closure1_slot8 = var8;
    var1 = global;
    var11 = var1.Object;
    var10 = var11.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var9.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.NativeModules;
    var _closure1_slot3 = var2;
    var2 = 2;
    var2 = var6[var2];
    var10 = var9.bind(var1)(var2);
    var2 = var10.prototype;
    var9 = Object.create(var2, {constructor: {value: var10}});
    var14 = 'WebAuthnUtils';
    var15 = var9;
    var2 = new var15[var10](var14, var13);
    var2 = var2 instanceof Object ? var2 : var9;
    var _closure1_slot4 = var2;
    var2 = {};
    var10 = function get hasAndroidPasskeySupport() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 5;
            var1 = var3[var1];
            var6 = undefined;
            var2 = var2.bind(var6)(var1);
            var1 = var2.isAndroid;
            var1 = var1.bind(var2)();
            if(!var1) { _fun0004_ip = 23; continue _fun0004 }
case 4:
            var2 = _closure1_slot3;
            var3 = null;
            var5 = var3 == var2;
            var2 = undefined;
            if(var5) { _fun0004_ip = 24; continue _fun0004 }
case 25:
            var4 = _closure1_slot3;
            var4 = var4.DCDSecurityKeyManager;
            var5 = var3 == var4;
            var2 = undefined;
            if(var5) { _fun0004_ip = 24; continue _fun0004 }
case 26:
            var2 = var4.registerPasskey;
case 24:
            var1 = var3 != var2;
case 23:
            return var1;
        }
    };
    var9 = 'hasAndroidPasskeySupport';
    Object.defineProperty(var2, var9, {get: var10, set: var1, enumerable: true});
    var10 = function get shouldDisplayAndroidFidoSelector() {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var1 = 5;
            var1 = var4[var1];
            var4 = undefined;
            var3 = var3.bind(var4)(var1);
            var1 = var3.isAndroid;
            var1 = var1.bind(var3)();
            if(!var1) { _fun0005_ip = 21; continue _fun0005 }
case 4:
            var3 = _closure1_slot0;
            var5 = _closure1_slot1;
            var2 = 8;
            var2 = var5[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.isMetaQuest;
            var2 = var2.bind(var3)();
            var1 = !var2;
case 21:
            return var1;
        }
    };
    var9 = 'shouldDisplayAndroidFidoSelector';
    Object.defineProperty(var2, var9, {get: var10, set: var1, enumerable: true});
    var9 = function getPasskeyAuthenticator() {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var3 = _closure1_slot3;
            var3 = var3.DCDSecurityKeyManager;
            var3 = var3.authenticate;
            var _closure2_slot0 = var3;
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var3 = 5;
            var4 = var4[var3];
            var3 = undefined;
            var5 = var5.bind(var3)(var4);
            var4 = var5.isAndroid;
            var4 = var4.bind(var5)();
            if(!var4) { _fun0006_ip = 27; continue _fun0006 }
case 28:
            var5 = _closure1_slot3;
            var6 = null;
            var7 = var6 == var5;
            var5 = undefined;
            if(var7) { _fun0006_ip = 29; continue _fun0006 }
case 30:
            var7 = _closure1_slot3;
            var7 = var7.DCDSecurityKeyManager;
            var8 = var6 == var7;
            var5 = undefined;
            if(var8) { _fun0006_ip = 29; continue _fun0006 }
case 31:
            var5 = var7.authenticatePasskey;
case 29:
            var4 = var6 != var5;
case 27:
            if(!var4) { _fun0006_ip = 32; continue _fun0006 }
case 33:
            var4 = _closure1_slot3;
            var4 = var4.DCDSecurityKeyManager;
            var4 = var4.authenticatePasskey;
            _closure2_slot0 = var4;
case 32:
            var2 = _closure1_slot2;
            var1 = function* (arg1) {
                var1 = function* anon_0_(arg1) {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0007_ip = 34; continue _fun0007 }
case 35:
                        var11 = 0;
                        var3 = copyRestArgs(var11);
                        var5 = undefined;
                        SaveGenerator(address=22);
case 36:
                        return var5;
case 37:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                        if(var6) { _fun0007_ip = 38; continue _fun0007 }
case 39: // try_start_0
                        var6 = _closure2_slot0;
                        var10 = var3;
                        var3 = new Array(0);
                        var11 = var3;
                        var9 = 0;
                        var7 = arraySpread(var11, var10, var9);
                        var11 = var6;
                        var10 = var3;
                        var9 = undefined;
                        var3 = apply(var11, var10, var9);
                        SaveGenerator(address=70);
case 40:
                        return var3;
case 41:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                        if(var6) { _fun0007_ip = 42; continue _fun0007 }
case 43: // try_end0
                        return var3;
case 42:
                        return var3;
case 23: // catch_target0
                        CatchBlockStart(arg_register=2);
                        var4 = var3;
                        var6 = var3.code;
                        var3 = 'AbortError';
                        if(!(var3 !== var6)) { _fun0007_ip = 44; continue _fun0007 }
case 29:
                        var3 = 'NotAllowedError';
                        if(!(var3 !== var6)) { _fun0007_ip = 44; continue _fun0007 }
case 45:
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot1;
                        var3 = 7;
                        var3 = var8[var3];
                        var8 = var7.bind(var5)(var3);
                        var7 = var8.captureWebAuthnException;
                        var3 = var4;
                        var7 = var7.bind(var8)(var3);
                        var7 = _closure1_slot4;
                        var6 = var7.error;
                        var6 = var6.bind(var7)(var3);
                        throw var3;
case 44:
                        var7 = _closure1_slot4;
                        var6 = var7.warn;
                        var4 = var6.bind(var7)(var4);
                        var4 = _closure1_slot0;
                        var6 = _closure1_slot1;
                        var3 = 6;
                        var3 = var6[var3];
                        var3 = var4.bind(var5)(var3);
                        var3 = var3.IgnorableWebAuthnError;
                        var4 = var3.prototype;
                        var4 = Object.create(var4, {constructor: {value: var3}});
                        var12 = var4;
                        var3 = new var12[var3](var11);
                        var3 = var3 instanceof Object ? var3 : var4;
                        throw var3;
case 38:
                        return var2;
case 34:
                        return var1;
                    }
                };
                var2 = var1.next;
                var2 = var2.bind(var1)();
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var2['getPasskeyAuthenticator'] = var9;
    var2['registerAndroidCredentialManagerPasskey'] = var8;
    var8 = function registerAndroidDevicePasskey(arg1) {
        var4 = _closure1_slot6;
        var2 = _closure1_slot7;
        var1 = _closure1_slot3;
        var1 = var1.DCDSecurityKeyManager;
        var1 = var1.register;
        var3 = undefined;
        var2 = var2.bind(var3)(var1);
        var1 = arg1;
        var1 = var4.bind(var3)(var1, var2);
        return var1;
    };
    var2['registerAndroidDevicePasskey'] = var8;
    var7 = function registerPasskey(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var4 = arg1;
            var5 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 5;
            var1 = var3[var1];
            var3 = undefined;
            var5 = var5.bind(var3)(var1);
            var1 = var5.isAndroid;
            var1 = var1.bind(var5)();
            if(var1) { _fun0008_ip = 46; continue _fun0008 }
case 47:
            var1 = _closure1_slot6;
            var1 = var1.bind(var3)(var4);
            _fun0008_ip = 48; continue _fun0008;
case 46:
            var2 = _closure1_slot8;
            var1 = var2.bind(var3)(var4);
case 48:
            return var1;
        }
    };
    var2['registerPasskey'] = var7;
    var2['registerSecurityKey'] = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/webauthn/native/WebAuthnUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();