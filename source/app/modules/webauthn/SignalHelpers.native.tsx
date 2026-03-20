// app/modules/webauthn/SignalHelpers.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var4 = global;
    var10 = var4.Object;
    var9 = var10.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var7);
    var1 = 0;
    var7 = var6[var1];
    var1 = undefined;
    var7 = var8.bind(var1)(var7);
    var _closure1_slot2 = var7;
    var7 = 1;
    var7 = var6[var7];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var7 = 2;
    var7 = var6[var7];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var7 = 3;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.NativeModules;
    var _closure1_slot5 = var7;
    var7 = 4;
    var7 = var6[var7];
    var9 = var8.bind(var1)(var7);
    var7 = var9.prototype;
    var8 = Object.create(var7, {constructor: {value: var9}});
    var13 = 'SignalHelpers.native';
    var14 = var8;
    var7 = new var14[var9](var13, var12);
    var7 = var7 instanceof Object ? var7 : var8;
    var _closure1_slot6 = var7;
    var4 = var4.window;
    var4 = var4.GLOBAL_ENV;
    var4 = var4.WEBAUTHN_ORIGIN;
    var _closure1_slot7 = var4;
    var2 = function() {
        var5 = _closure1_slot4;
        var4 = function SignalHelpers() {
            var4 = _closure1_slot3;
            var3 = _closure2_slot3;
            var1 = undefined;
            var2 = this;
            var2 = var4.bind(var1)(var2, var3);
            return var1;
        };
        var _closure2_slot3 = var4;
        var1 = {};
        var3 = 'signalAllAcceptedCredentials';
        var1['key'] = var3;
        var8 = _closure1_slot2;
        var3 = undefined;
        var2 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    var5 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var3 = _closure1_slot5;
                    var3 = var3.DCDSecurityKeyManager;
                    var6 = var3.signalAllAcceptedCredentials;
                    var3 = undefined;
                    if(!(var3 !== var6)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var6 = 5;
                    var6 = var8[var6];
                    var8 = var7.bind(var3)(var6);
                    var7 = var8.encodeUserIdForWebAuthn;
                    var6 = arg2;
                    var8 = var7.bind(var8)(var6);
                    var7 = var5.map;
                    var6 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.cred_id;
                        return var1;
                    };
                    var7 = var7.bind(var5)(var6);
                    var6 = var7.filter;
                    var2 = function(arg1) {
                        var1 = arg1;
                        return var1;
                    };
                    var7 = var6.bind(var7)(var2);
                    var2 = _closure1_slot6;
                    var10 = var2.info;
                    var9 = {};
                    var6 = _closure1_slot7;
                    var9['rpId'] = var6;
                    var9['encodedId'] = var8;
                    var9['allAcceptedCredentialIds'] = var7;
                    var9['credentials'] = var5;
                    var5 = 'signalAllAcceptedCredentials';
                    var5 = var10.bind(var2)(var5, var9);
                    var4 = _closure1_slot5;
                    var5 = var4.DCDSecurityKeyManager;
                    var4 = var5.signalAllAcceptedCredentials;
                    var5 = var4.bind(var5)(var6, var8, var7);
                    var4 = var5.catch;
                    var2 = var2.warn;
                    var2 = var4.bind(var5)(var2);
                    SaveGenerator(address=198);
case 6:
                    return var2;
case 7:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 8; continue _fun0001 }
case 4:
                    return var3;
case 8:
                    return var2;
case 2:
                    return var1;
                }
            };
            return var1;
        };
        var2 = var8.bind(var3)(var2);
        var _closure2_slot2 = var2;
        var2 = function signalAllAcceptedCredentials() {
            var1 = undefined;
            var4 = _closure2_slot2;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var1['value'] = var2;
        var2 = new Array(3);
        var2[0] = var1;
        var1 = {};
        var7 = 'signalCurrentUserDetails';
        var1['key'] = var7;
        var7 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0002_ip = 9; continue _fun0002 }
case 10:
                    var3 = _closure1_slot5;
                    var3 = var3.DCDSecurityKeyManager;
                    var5 = var3.signalCurrentUserDetails;
                    var3 = undefined;
                    if(!(var3 !== var5)) { _fun0002_ip = 11; continue _fun0002 }
case 12:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var5 = 5;
                    var5 = var7[var5];
                    var7 = var6.bind(var3)(var5);
                    var6 = var7.encodeUserIdForWebAuthn;
                    var5 = var2.id;
                    var9 = var6.bind(var7)(var5);
                    var8 = var2.email;
                    var5 = null;
                    if(!(var5 == var8)) { _fun0002_ip = 13; continue _fun0002 }
case 14:
                    var8 = var2.global_name;
case 13:
                    if(!(var5 == var8)) { _fun0002_ip = 15; continue _fun0002 }
case 16:
                    var8 = var2.username;
case 15:
                    var7 = var2.username;
                    var2 = _closure1_slot6;
                    var11 = var2.info;
                    var10 = {};
                    var6 = _closure1_slot7;
                    var10['rpId'] = var6;
                    var10['encodedId'] = var9;
                    var10['name'] = var8;
                    var10['displayName'] = var7;
                    var5 = 'signalCurrentUserDetails';
                    var5 = var11.bind(var2)(var5, var10);
                    var4 = _closure1_slot5;
                    var5 = var4.DCDSecurityKeyManager;
                    var4 = var5.signalCurrentUserDetails;
                    var16 = var5;
                    var15 = var6;
                    var14 = var9;
                    var13 = var8;
                    var12 = var7;
                    var5 = var16[var4](var15, var14, var13, var12, var11);
                    var4 = var5.catch;
                    var2 = var2.warn;
                    var2 = var4.bind(var5)(var2);
                    SaveGenerator(address=210);
case 17:
                    return var2;
case 2:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0002_ip = 18; continue _fun0002 }
case 11:
                    return var3;
case 18:
                    return var2;
case 9:
                    return var1;
                }
            };
            return var1;
        };
        var7 = var8.bind(var3)(var7);
        var _closure2_slot1 = var7;
        var7 = function signalCurrentUserDetails() {
            var1 = undefined;
            var4 = _closure2_slot1;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var1['value'] = var7;
        var2[1] = var1;
        var1 = {};
        var7 = 'signalUnknownCredential';
        var1['key'] = var7;
        var7 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    StartGenerator();
                    var6 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0003_ip = 19; continue _fun0003 }
case 10:
                    var2 = _closure1_slot5;
                    var2 = var2.DCDSecurityKeyManager;
                    var2 = var2.signalUnknownCredential;
                    var3 = undefined;
                    if(!(var3 !== var2)) { _fun0003_ip = 20; continue _fun0003 }
case 12:
                    var5 = 'string';
                    var2 = typeof var6;
                    if(!(var5 !== var2)) { _fun0003_ip = 21; continue _fun0003 }
case 22:
                    var7 = var6.cred_id;
                    _fun0003_ip = 23; continue _fun0003;
case 21:
                    var2 = global;
                    var5 = var2.JSON;
                    var2 = var5.parse;
                    var2 = var2.bind(var5)(var6);
                    var7 = var2.id;
case 23:
                    var2 = _closure1_slot6;
                    var9 = var2.info;
                    var8 = {};
                    var6 = _closure1_slot7;
                    var8['rpId'] = var6;
                    var8['credentialId'] = var7;
                    var5 = 'signalUnknownCredential';
                    var5 = var9.bind(var2)(var5, var8);
                    var4 = _closure1_slot5;
                    var5 = var4.DCDSecurityKeyManager;
                    var4 = var5.signalUnknownCredential;
                    var5 = var4.bind(var5)(var6, var7);
                    var4 = var5.catch;
                    var2 = var2.warn;
                    var2 = var4.bind(var5)(var2);
                    SaveGenerator(address=164);
case 24:
                    return var2;
case 25:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0003_ip = 26; continue _fun0003 }
case 20:
                    return var3;
case 26:
                    return var2;
case 19:
                    return var1;
                }
            };
            return var1;
        };
        var7 = var8.bind(var3)(var7);
        var _closure2_slot0 = var7;
        var6 = function signalUnknownCredential() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var1['value'] = var6;
        var2[2] = var1;
        var1 = null;
        var1 = var5.bind(var3)(var4, var1, var2);
        return var1;
    };
    var2 = var2.bind(var1)();
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/webauthn/SignalHelpers.native.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();