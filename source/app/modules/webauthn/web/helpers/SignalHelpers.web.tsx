// app/modules/webauthn/web/helpers/SignalHelpers.web.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function deriveWebAuthnUserId(arg1) {
        var1 = global;
        var4 = var1.Uint8Array;
        var2 = var4.prototype;
        var3 = Object.create(var2, {constructor: {value: var4}});
        var11 = 16;
        var12 = var3;
        var2 = new var12[var4](var11, var10);
        var7 = var2 instanceof Object ? var2 : var3;
        var4 = var1.DataView;
        var11 = var7.buffer;
        var3 = var4.prototype;
        var3 = Object.create(var3, {constructor: {value: var4}});
        var12 = var3;
        var2 = new var12[var4](var11, var10);
        var8 = var2 instanceof Object ? var2 : var3;
        var3 = var8.setUint32;
        var6 = 0;
        var2 = 821232635;
        var2 = var3.bind(var8)(var6, var2);
        var4 = var8.setUint16;
        var3 = 4;
        var2 = 35878;
        var2 = var4.bind(var8)(var3, var2);
        var4 = var8.setUint16;
        var3 = 6;
        var2 = 20307;
        var2 = var4.bind(var8)(var3, var2);
        var5 = var8.setBigUint64;
        var4 = var1.BigInt;
        var3 = undefined;
        var2 = arg1;
        var4 = var4.bind(var3)(var2);
        var2 = 8;
        var2 = var5.bind(var8)(var2, var4);
        var5 = var1.String;
        var4 = var5.fromCharCode;
        var2 = new Array(0);
        var11 = var2;
        var10 = var7;
        var9 = 0;
        var6 = arraySpread(var11, var10, var9);
        var11 = var4;
        var10 = var2;
        var9 = var5;
        var2 = apply(var11, var10, var9);
        var1 = var1.btoa;
        var4 = var1.bind(var3)(var2);
        var3 = var4.replace;
        var2 = /\+/g;
        var1 = '-';
        var4 = var3.bind(var4)(var2, var1);
        var3 = var4.replace;
        var2 = /\\//g;
        var1 = '_';
        var4 = var3.bind(var4)(var2, var1);
        var3 = var4.replace;
        var2 = /=/g;
        var1 = '';
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot6 = var1;
    var1 = function hasCapability() {
        var1 = undefined;
        var4 = _closure1_slot8;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot7 = var1;
    var1 = function _hasCapability() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var3 = 3;
                    var4 = var4[var3];
                    var3 = undefined;
                    var4 = var5.bind(var3)(var4);
                    var4 = var4.hasWebAuthn;
                    if(var4) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                    var4 = false;
                    return var4;
case 4:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var2 = 4;
                    var2 = var5[var2];
                    var4 = var4.bind(var3)(var2);
                    var2 = var4.isWeb;
                    var2 = var2.bind(var4)();
                    if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                    var2 = false;
                    return var2;
case 6:
                    var4 = global;
                    var2 = var4.PublicKeyCredential;
                    var5 = var2.getClientCapabilities;
                    var2 = null;
                    var5 = var2 == var5;
                    var2 = undefined;
                    if(var5) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                    var5 = var4.PublicKeyCredential;
                    var4 = var5.getClientCapabilities;
                    var2 = var4.bind(var5)();
case 8:
                    SaveGenerator(address=132);
case 10:
                    return var2;
case 11:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 12; continue _fun0001 }
case 13:
                    var3 = var3 !== var2;
                    if(!var3) { _fun0001_ip = 14; continue _fun0001 }
case 15:
                    var4 = arg1;
                    var3 = var2[var4];
case 14:
                    return var3;
case 12:
                    return var2;
case 2:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot8 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot8 = var1;
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
    var4 = var4.window;
    var4 = var4.PublicKeyCredential;
    var _closure1_slot5 = var4;
    var2 = function() {
        var5 = _closure1_slot3;
        var4 = function SignalHelpers() {
            var4 = _closure1_slot2;
            var3 = _closure2_slot3;
            var1 = undefined;
            var2 = this;
            var2 = var4.bind(var1)(var2, var3);
            return var1;
        };
        var _closure2_slot3 = var4;
        var1 = {};
        var2 = 'signalAllAcceptedCredentials';
        var1['key'] = var2;
        var8 = _closure1_slot4;
        var3 = undefined;
        var2 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    StartGenerator();
                    var6 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 16; continue _fun0002 }
case 17:
                    var3 = _closure1_slot7;
                    var4 = undefined;
                    var2 = 'signalAllAcceptedCredentials';
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=37);
case 18:
                    return var2;
case 19:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0002_ip = 20; continue _fun0002 }
case 21:
                    if(!var2) { _fun0002_ip = 22; continue _fun0002 }
case 23:
                    var5 = var6.map;
                    var3 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.id;
                        return var1;
                    };
                    var7 = var5.bind(var6)(var3);
                    var6 = _closure1_slot5;
                    var5 = var6.signalAllAcceptedCredentials;
                    var3 = {};
                    var9 = global;
                    var9 = var9.window;
                    var9 = var9.GLOBAL_ENV;
                    var9 = var9.WEBAUTHN_ORIGIN;
                    var3['rpId'] = var9;
                    var9 = _closure1_slot6;
                    var8 = arg2;
                    var8 = var9.bind(var4)(var8);
                    var3['userId'] = var8;
                    var3['allAcceptedCredentialIds'] = var7;
                    var3 = var5.bind(var6)(var3);
                    SaveGenerator(address=134);
case 11:
                    return var3;
case 24:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0002_ip = 25; continue _fun0002 }
case 22:
                    return var4;
case 25:
                    return var3;
case 20:
                    return var2;
case 16:
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
        var8 = 'signalCurrentUserDetails';
        var1['key'] = var8;
        var9 = _closure1_slot4;
        var8 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    StartGenerator();
                    var8 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0003_ip = 26; continue _fun0003 }
case 17:
                    var3 = _closure1_slot7;
                    var4 = undefined;
                    var2 = 'signalCurrentUserDetails';
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=37);
case 18:
                    return var2;
case 19:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0003_ip = 27; continue _fun0003 }
case 21:
                    if(!var2) { _fun0003_ip = 28; continue _fun0003 }
case 23:
                    var6 = _closure1_slot5;
                    var5 = var6.signalCurrentUserDetails;
                    var3 = {};
                    var9 = global;
                    var9 = var9.window;
                    var9 = var9.GLOBAL_ENV;
                    var9 = var9.WEBAUTHN_ORIGIN;
                    var3['rpId'] = var9;
                    var9 = _closure1_slot6;
                    var7 = var8.id;
                    var7 = var9.bind(var4)(var7);
                    var3['userId'] = var7;
                    var7 = var8.username;
                    var3['name'] = var7;
                    var7 = var8.global_name;
                    var9 = null;
                    if(!(var9 == var7)) { _fun0003_ip = 29; continue _fun0003 }
case 30:
                    var7 = var8.username;
case 29:
                    var3['displayName'] = var7;
                    var3 = var5.bind(var6)(var3);
                    SaveGenerator(address=144);
case 31:
                    return var3;
case 32:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0003_ip = 33; continue _fun0003 }
case 28:
                    return var4;
case 33:
                    return var3;
case 27:
                    return var2;
case 26:
                    return var1;
                }
            };
            return var1;
        };
        var8 = var9.bind(var3)(var8);
        var _closure2_slot1 = var8;
        var8 = function signalCurrentUserDetails() {
            var1 = undefined;
            var4 = _closure2_slot1;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var1['value'] = var8;
        var2[1] = var1;
        var1 = {};
        var8 = 'signalUnknownCredential';
        var1['key'] = var8;
        var8 = _closure1_slot4;
        var7 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    StartGenerator();
                    var10 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0004_ip = 14; continue _fun0004 }
case 17:
                    var5 = _closure1_slot7;
                    var4 = undefined;
                    var2 = 'signalUnknownCredential';
                    var2 = var5.bind(var4)(var2);
                    SaveGenerator(address=35);
case 34:
                    return var2;
case 18:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0004_ip = 16; continue _fun0004 }
case 35:
                    if(!var2) { _fun0004_ip = 25; continue _fun0004 }
case 5:
                    var6 = _closure1_slot5;
                    var5 = var6.signalUnknownCredential;
                    var3 = {};
                    var8 = global;
                    var7 = var8.window;
                    var7 = var7.GLOBAL_ENV;
                    var7 = var7.WEBAUTHN_ORIGIN;
                    var3['rpId'] = var7;
                    var9 = 'string';
                    var7 = typeof var10;
                    if(!(var9 !== var7)) { _fun0004_ip = 36; continue _fun0004 }
case 37:
                    var7 = var10.id;
                    _fun0004_ip = 38; continue _fun0004;
case 36:
                    var9 = var8.JSON;
                    var8 = var9.parse;
                    var8 = var8.bind(var9)(var10);
                    var7 = var8.id;
case 38:
                    var3['credentialId'] = var7;
                    var3 = var5.bind(var6)(var3);
                    SaveGenerator(address=137);
case 39:
                    return var3;
case 40:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0004_ip = 20; continue _fun0004 }
case 25:
                    return var4;
case 20:
                    return var3;
case 16:
                    return var2;
case 14:
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
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/webauthn/web/helpers/SignalHelpers.web.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();