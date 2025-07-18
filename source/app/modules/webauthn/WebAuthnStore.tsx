// app/modules/webauthn/WebAuthnStore.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
 2: // try_start_0
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
 72: // try_end0
            _fun0001_ip = 76; continue _fun0001;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot9 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot9 = var1;
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
    var2 = var7.bind(var1)(var2);
    var _closure1_slot2 = var2;
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
    var2 = var7.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = false;
    var _closure1_slot7 = var2;
    var2 = new Array(0);
    var _closure1_slot8 = var2;
    var2 = 5;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function WebAuthnStore() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot2;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot5;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot4;
                var1 = _closure1_slot9;
                var1 = var1.bind(var3)();
                if(var1) { _fun0002_ip = 69; continue _fun0002 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0002_ip = 105; continue _fun0002;
 69:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
 105:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot6;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot3;
        var5 = {};
        var1 = 'hasFetchedCredentials';
        var5['key'] = var1;
        var1 = function value() {
            var1 = _closure1_slot7;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'hasCredentials';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot8;
            var2 = var1.length;
            var1 = 0;
            var1 = var2 > var1;
            return var1;
        };
        var5['get'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getCredentials';
        var5['key'] = var7;
        var6 = function value() {
            var1 = _closure1_slot8;
            return var1;
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'WebAuthnStore';
    var8['displayName'] = var2;
    var2 = 6;
    var2 = var6[var2];
    var12 = var7.bind(var1)(var2);
    var2 = {};
    var9 = function handleReset() {
        var1 = new Array(0);
        _closure1_slot8 = var1;
        var1 = false;
        _closure1_slot7 = var1;
        var1 = undefined;
        return var1;
    };
    var2['LOGOUT'] = var9;
    var9 = function MFA_WEBAUTHN_CREDENTIALS_LOADED(arg1) {
        var1 = arg1;
        var1 = var1.credentials;
        _closure1_slot8 = var1;
        var1 = true;
        _closure1_slot7 = var1;
        var1 = undefined;
        return var1;
    };
    var2['MFA_WEBAUTHN_CREDENTIALS_LOADED'] = var9;
    var9 = function AUTHENTICATOR_CREATE(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arg1;
            var4 = var1.credential;
            var _closure2_slot0 = var4;
            var6 = var4.type;
            var7 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 7;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var7.bind(var1)(var2);
            var2 = var2.AuthenticatorType;
            var2 = var2.WEBAUTHN;
            var2 = var6 === var2;
            if(!var2) { _fun0003_ip = 89; continue _fun0003 }
 64:
            var7 = _closure1_slot8;
            var6 = var7.find;
            var5 = function(arg1) {
                var1 = arg1;
                var2 = var1.id;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2 === var1;
                return var1;
            };
            var5 = var6.bind(var7)(var5);
            var2 = var1 === var5;
 89:
            if(!var2) { _fun0003_ip = 125; continue _fun0003 }
 92:
            var9 = _closure1_slot8;
            var2 = new Array(1);
            var8 = 0;
            var10 = var2;
            var5 = arraySpread(var10, var9, var8);
            var2[var5] = var4;
            var4 = 1;
            var4 = var5 + var4;
            _closure1_slot8 = var2;
 125:
            return var1;
        }
    };
    var2['AUTHENTICATOR_CREATE'] = var9;
    var9 = function AUTHENTICATOR_UPDATE(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var1 = arg1;
            var1 = var1.credential;
            var _closure2_slot0 = var1;
            var5 = var1.type;
            var6 = _closure1_slot0;
            var4 = _closure1_slot1;
            var1 = 7;
            var4 = var4[var1];
            var1 = undefined;
            var4 = var6.bind(var1)(var4);
            var4 = var4.AuthenticatorType;
            var4 = var4.WEBAUTHN;
            if(!(var5 === var4)) { _fun0004_ip = 86; continue _fun0004 }
 61:
            var5 = _closure1_slot8;
            var4 = var5.map;
            var2 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var1 = arg1;
                    var4 = var1.id;
                    var3 = _closure2_slot0;
                    var3 = var3.id;
                    if(!(var4 === var3)) { _fun0005_ip = 28; continue _fun0005 }
 24:
                    var1 = _closure2_slot0;
 28:
                    return var1;
                }
            };
            var2 = var4.bind(var5)(var2);
            _closure1_slot8 = var2;
 86:
            return var1;
        }
    };
    var2['AUTHENTICATOR_UPDATE'] = var9;
    var4 = function AUTHENTICATOR_DELETE(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var1 = arg1;
            var1 = var1.credential;
            var _closure2_slot0 = var1;
            var5 = var1.type;
            var6 = _closure1_slot0;
            var4 = _closure1_slot1;
            var1 = 7;
            var4 = var4[var1];
            var1 = undefined;
            var4 = var6.bind(var1)(var4);
            var4 = var4.AuthenticatorType;
            var4 = var4.WEBAUTHN;
            if(!(var5 === var4)) { _fun0006_ip = 86; continue _fun0006 }
 61:
            var5 = _closure1_slot8;
            var4 = var5.filter;
            var2 = function(arg1) {
                var1 = arg1;
                var2 = var1.id;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2 !== var1;
                return var1;
            };
            var2 = var4.bind(var5)(var2);
            _closure1_slot8 = var2;
 86:
            return var1;
        }
    };
    var2['AUTHENTICATOR_DELETE'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var13 = var4;
    var11 = var2;
    var2 = new var13[var8](var12, var11, var10);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/webauthn/WebAuthnStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();