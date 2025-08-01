// app/modules/webauthn/native/WebAuthnUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var6;
    var1 = function _promptForRegisterCredential() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    var7 = arguments[0];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 142; continue _fun0001 }
 13:
                    var6 = undefined;
                    if(!(var7 === var6)) { _fun0001_ip = 38; continue _fun0001 }
 19:
                    var2 = _closure1_slot4;
                    var2 = var2.DCDSecurityKeyManager;
                    var7 = var2.register;
 38:
                    SaveGenerator(address=42);
 40:
                    return var6;
 42:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 139; continue _fun0001 }
 48:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 5;
                    var3 = var5[var3];
                    var4 = var4.bind(var6)(var3);
                    var3 = var4.startRegisterWebAuthnCredential;
                    var3 = var3.bind(var4)();
                    SaveGenerator(address=85);
 83:
                    return var3;
 85:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 136; continue _fun0001 }
 91:
                    var8 = var3.ticket;
                    var4 = var3.challenge;
                    var5 = {};
                    var5['ticket'] = var8;
                    var4 = var7.bind(var6)(var4);
                    SaveGenerator(address=119);
 117:
                    return var4;
 119:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(var6) { _fun0001_ip = 133; continue _fun0001 }
 125:
                    var5['credential'] = var4;
                    return var5;
 133:
                    return var4;
 136:
                    return var3;
 139:
                    return var2;
 142:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot7 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot7 = var1;
    var4 = function registerSecurityKey(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = arg1;
            var5 = arguments[1];
            var3 = undefined;
            if(!(var5 === var3)) { _fun0002_ip = 33; continue _fun0002 }
 14:
            var4 = _closure1_slot4;
            var4 = var4.DCDSecurityKeyManager;
            var5 = var4.register;
 33:
            var _closure2_slot0 = var3;
            var _closure2_slot1 = var3;
            var4 = var2.onRegisterSuccess;
            var7 = var2.setError;
            _closure2_slot0 = var7;
            var6 = var2.setRegistering;
            _closure2_slot1 = var6;
            if(!(var3 !== var7)) { _fun0002_ip = 80; continue _fun0002 }
 71:
            var2 = '';
            var2 = var7.bind(var3)(var2);
 80:
            var2 = true;
            var2 = var6.bind(var3)(var2);
            var2 = function promptForRegisterCredential() {
                var1 = undefined;
                var4 = _closure1_slot7;
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
 0:
                    var1 = arg1;
                    var3 = _closure2_slot0;
                    var4 = undefined;
                    if(!(var4 !== var3)) { _fun0003_ip = 85; continue _fun0003 }
 16:
                    var3 = _closure2_slot0;
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var2 = 6;
                    var5 = var8[var2];
                    var5 = var7.bind(var4)(var5);
                    var6 = var5.intl;
                    var5 = var6.string;
                    var2 = var8[var2];
                    var2 = var7.bind(var4)(var2);
                    var2 = var2.t;
                    var2 = var2.xSCvBQ;
                    var2 = var5.bind(var6)(var2);
                    var2 = var3.bind(var4)(var2);
                    throw var1;
 85:
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
    var _closure1_slot8 = var4;
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
    var _closure1_slot9 = var1;
    var8 = function registerAndroidCredentialManagerPasskey(arg1) {
        var4 = _closure1_slot8;
        var2 = _closure1_slot9;
        var1 = _closure1_slot4;
        var1 = var1.DCDSecurityKeyManager;
        var1 = var1.registerPasskey;
        var3 = undefined;
        var2 = var2.bind(var3)(var1);
        var1 = arg1;
        var1 = var4.bind(var3)(var1, var2);
        return var1;
    };
    var _closure1_slot10 = var8;
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
    var _closure1_slot3 = var2;
    var2 = 1;
    var9 = var6[var2];
    var2 = metroImportAll;
    var2 = var2.bind(var1)(var9);
    var2 = 2;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.NativeModules;
    var _closure1_slot4 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.WebAuthnScreens;
    var _closure1_slot5 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.jsx;
    var _closure1_slot6 = var2;
    var2 = {};
    var10 = function get hasAndroidPasskeySupport() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 7;
            var1 = var3[var1];
            var6 = undefined;
            var2 = var2.bind(var6)(var1);
            var1 = var2.isAndroid;
            var1 = var1.bind(var2)();
            if(!var1) { _fun0004_ip = 81; continue _fun0004 }
 37:
            var2 = _closure1_slot4;
            var3 = null;
            var5 = var3 == var2;
            var2 = undefined;
            if(var5) { _fun0004_ip = 77; continue _fun0004 }
 52:
            var4 = _closure1_slot4;
            var4 = var4.DCDSecurityKeyManager;
            var5 = var3 == var4;
            var2 = undefined;
            if(var5) { _fun0004_ip = 77; continue _fun0004 }
 71:
            var2 = var4.registerPasskey;
 77:
            var1 = var3 != var2;
 81:
            return var1;
        }
    };
    var9 = 'hasAndroidPasskeySupport';
    Object.defineProperty(var2, var9, {get: var10, set: var1, enumerable: true});
    var9 = function getScreens(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var1 = arg1;
            var7 = var1.isModal;
            var1 = {};
            var2 = _closure1_slot5;
            var6 = var2.MODAL_UPSELL;
            var3 = {};
            var8 = '';
            var3['title'] = var8;
            var8 = function render() {
                var4 = _closure1_slot6;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 8;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var3['render'] = var8;
            var1[var6] = var3;
            var3 = var2.INIT;
            var2 = {};
            var12 = _closure1_slot0;
            var6 = _closure1_slot2;
            var9 = 6;
            var10 = var6[var9];
            var8 = undefined;
            var10 = var12.bind(var8)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var6 = var6[var9];
            var6 = var12.bind(var8)(var6);
            var6 = var6.t;
            var6 = var6.0N1s8/;
            var6 = var10.bind(var11)(var6);
            var2['title'] = var6;
            var6 = function render() {
                var4 = _closure1_slot6;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 9;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var2['render'] = var6;
            var6 = undefined;
            if(!var7) { _fun0005_ip = 194; continue _fun0005 }
 141:
            var11 = _closure1_slot0;
            var14 = _closure1_slot2;
            var10 = 10;
            var10 = var14[var10];
            var12 = var11.bind(var8)(var10);
            var11 = var12.getHeaderCloseButton;
            var13 = _closure1_slot1;
            var10 = 11;
            var10 = var14[var10];
            var10 = var13.bind(var8)(var10);
            var10 = var10.closePasskeyUpsellModal;
            var6 = var11.bind(var12)(var10);
 194:
            var2['headerLeft'] = var6;
            var1[var3] = var2;
            var2 = _closure1_slot5;
            var10 = var2.EDIT;
            var3 = {};
            var6 = function render(arg1) {
                var4 = _closure1_slot6;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 12;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var6 = arg1;
                var7 = var1;
                var5 = copyDataProperties(var7, var6);
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var3['render'] = var6;
            var12 = _closure1_slot0;
            var6 = _closure1_slot2;
            var11 = var6[var9];
            var11 = var12.bind(var8)(var11);
            var14 = var11.intl;
            var13 = var14.string;
            var11 = var6[var9];
            var11 = var12.bind(var8)(var11);
            var11 = var11.t;
            var11 = var11.UBBwwM;
            var11 = var13.bind(var14)(var11);
            var3['title'] = var11;
            var1[var10] = var3;
            var10 = var2.REGISTER;
            var3 = {};
            var11 = function render() {
                var4 = _closure1_slot6;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 13;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var3['render'] = var11;
            var11 = var6[var9];
            var11 = var12.bind(var8)(var11);
            var14 = var11.intl;
            var13 = var14.string;
            var11 = var6[var9];
            var11 = var12.bind(var8)(var11);
            var11 = var11.t;
            var11 = var11.vrOCCg;
            var11 = var13.bind(var14)(var11);
            var3['title'] = var11;
            var1[var10] = var3;
            var3 = var2.NAME;
            var2 = {};
            var10 = function render(arg1) {
                var4 = _closure1_slot6;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 14;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var6 = arg1;
                var7 = var1;
                var5 = copyDataProperties(var7, var6);
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var2['render'] = var10;
            var10 = var6[var9];
            var10 = var12.bind(var8)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var6 = var6[var9];
            var6 = var12.bind(var8)(var6);
            var6 = var6.t;
            var6 = var6.cY/IOj;
            var6 = var10.bind(var11)(var6);
            var2['title'] = var6;
            var6 = undefined;
            if(!var7) { _fun0005_ip = 494; continue _fun0005 }
 441:
            var10 = _closure1_slot0;
            var13 = _closure1_slot2;
            var7 = 10;
            var7 = var13[var7];
            var11 = var10.bind(var8)(var7);
            var10 = var11.getHeaderCloseButton;
            var12 = _closure1_slot1;
            var7 = 11;
            var7 = var13[var7];
            var7 = var12.bind(var8)(var7);
            var7 = var7.closePasskeyUpsellModal;
            var6 = var10.bind(var11)(var7);
 494:
            var2['headerLeft'] = var6;
            var1[var3] = var2;
            var2 = _closure1_slot5;
            var3 = var2.SUCCESS;
            var2 = {};
            var5 = function render() {
                var4 = _closure1_slot6;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 15;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var2['render'] = var5;
            var7 = _closure1_slot0;
            var4 = _closure1_slot2;
            var5 = var4[var9];
            var5 = var7.bind(var8)(var5);
            var6 = var5.intl;
            var5 = var6.string;
            var4 = var4[var9];
            var4 = var7.bind(var8)(var4);
            var4 = var4.t;
            var4 = var4.7wPZlp;
            var4 = var5.bind(var6)(var4);
            var2['title'] = var4;
            var1[var3] = var2;
            return var1;
        }
    };
    var2['getScreens'] = var9;
    var2['registerAndroidCredentialManagerPasskey'] = var8;
    var8 = function registerAndroidDevicePasskey(arg1) {
        var4 = _closure1_slot8;
        var2 = _closure1_slot9;
        var1 = _closure1_slot4;
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
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var4 = arg1;
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 7;
            var1 = var3[var1];
            var3 = undefined;
            var5 = var5.bind(var3)(var1);
            var1 = var5.isAndroid;
            var1 = var1.bind(var5)();
            if(var1) { _fun0006_ip = 51; continue _fun0006 }
 40:
            var1 = _closure1_slot8;
            var1 = var1.bind(var3)(var4);
            _fun0006_ip = 60; continue _fun0006;
 51:
            var2 = _closure1_slot10;
            var1 = var2.bind(var3)(var4);
 60:
            return var1;
        }
    };
    var2['registerPasskey'] = var7;
    var2['registerSecurityKey'] = var4;
    var4 = 16;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/webauthn/native/WebAuthnUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();