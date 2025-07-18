// app/modules/webauthn/WebAuthnActionCreators.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _fetchWebAuthnConditionalChallenge() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 91; continue _fun0001 }
 7:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 2;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var4 = var2.HTTP;
                    var3 = var4.post;
                    var2 = {};
                    var5 = _closure1_slot4;
                    var5 = var5.WEBAUTHN_CONDITIONAL_UI_CHALLENGE;
                    var2['url'] = var5;
                    var5 = false;
                    var2['rejectWithError'] = var5;
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=74);
 72:
                    return var2;
 74:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 88; continue _fun0001 }
 80:
                    var3 = var2.body;
                    return var3;
 88:
                    return var2;
 91:
                    return var1;
                }
            };
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
    var1 = function _fetchWebAuthnPasswordlessChallenge() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 115; continue _fun0002 }
 7:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 2;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var4 = var2.HTTP;
                    var3 = var4.post;
                    var2 = {};
                    var5 = _closure1_slot4;
                    var5 = var5.WEBAUTHN_PASSWORDLESS_CHALLENGE;
                    var2['url'] = var5;
                    var5 = false;
                    var2['rejectWithError'] = var5;
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=74);
 72:
                    return var2;
 74:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0002_ip = 112; continue _fun0002 }
 80:
                    var4 = var2.body;
                    var3 = {};
                    var5 = var4.challenge;
                    var3['challenge'] = var5;
                    var4 = var4.ticket;
                    var3['ticket'] = var4;
                    return var3;
 112:
                    return var2;
 115:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot6 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot6 = var1;
    var1 = function _deleteWebAuthnCredentialAsync() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    StartGenerator();
                    var6 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0003_ip = 120; continue _fun0003 }
 12:
                    var _closure4_slot0 = var6;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 2;
                    var4 = var4[var3];
                    var3 = undefined;
                    var3 = var5.bind(var3)(var4);
                    var5 = var3.HTTP;
                    var4 = var5.del;
                    var3 = {};
                    var8 = _closure1_slot4;
                    var7 = var8.MFA_WEBAUTHN_CREDENTIAL;
                    var6 = var6.id;
                    var6 = var7.bind(var8)(var6);
                    var3['url'] = var6;
                    var6 = false;
                    var3['rejectWithError'] = var6;
                    var4 = var4.bind(var5)(var3);
                    var3 = var4.then;
                    var2 = function() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 3;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var5 = 'AUTHENTICATOR_DELETE';
                        var2['type'] = var5;
                        var5 = _closure4_slot0;
                        var2['credential'] = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=108);
 106:
                    return var2;
 108:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0003_ip = 117; continue _fun0003 }
 114:
                    return var2;
 117:
                    return var2;
 120:
                    return var1;
                }
            };
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
    var1 = function _editWebAuthnCredential() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0004_ip = 162; continue _fun0004 }
 10:
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 2;
                    var2 = var3[var2];
                    var3 = undefined;
                    var2 = var5.bind(var3)(var2);
                    var6 = var2.HTTP;
                    var5 = var6.patch;
                    var2 = {};
                    var9 = _closure1_slot4;
                    var8 = var9.MFA_WEBAUTHN_CREDENTIAL;
                    var7 = arg1;
                    var7 = var8.bind(var9)(var7);
                    var2['url'] = var7;
                    var7 = {};
                    var8 = arg2;
                    var7['name'] = var8;
                    var2['body'] = var7;
                    var7 = false;
                    var2['rejectWithError'] = var7;
                    var2 = var5.bind(var6)(var2);
                    SaveGenerator(address=98);
 96:
                    return var2;
 98:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0004_ip = 159; continue _fun0004 }
 104:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var4 = 3;
                    var4 = var6[var4];
                    var6 = var5.bind(var3)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var7 = 'AUTHENTICATOR_UPDATE';
                    var4['type'] = var7;
                    var7 = var2.body;
                    var4['credential'] = var7;
                    var4 = var5.bind(var6)(var4);
                    return var3;
 159:
                    return var2;
 162:
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
    var1 = function _startRegisterWebAuthnCredential() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0005_ip = 121; continue _fun0005 }
 7:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 2;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var4 = var2.HTTP;
                    var3 = var4.post;
                    var2 = {};
                    var5 = _closure1_slot4;
                    var5 = var5.MFA_WEBAUTHN_CREDENTIALS;
                    var2['url'] = var5;
                    var5 = {};
                    var2['body'] = var5;
                    var5 = false;
                    var2['rejectWithError'] = var5;
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=80);
 78:
                    return var2;
 80:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0005_ip = 118; continue _fun0005 }
 86:
                    var4 = var2.body;
                    var3 = {};
                    var5 = var4.ticket;
                    var3['ticket'] = var5;
                    var4 = var4.challenge;
                    var3['challenge'] = var4;
                    return var3;
 118:
                    return var2;
 121:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot9 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot9 = var1;
    var1 = function _finishRegisterWebAuthnCredential() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0006_ip = 252; continue _fun0006 }
 10:
                    var5 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var2 = 4;
                    var2 = var10[var2];
                    var3 = undefined;
                    var6 = var5.bind(var3)(var2);
                    var5 = var6.post;
                    var2 = {};
                    var7 = _closure1_slot4;
                    var7 = var7.MFA_WEBAUTHN_CREDENTIALS;
                    var2['url'] = var7;
                    var7 = {};
                    var8 = arg1;
                    var7['name'] = var8;
                    var8 = arg2;
                    var7['ticket'] = var8;
                    var8 = arg3;
                    var7['credential'] = var8;
                    var2['body'] = var7;
                    var7 = {};
                    var9 = _closure1_slot0;
                    var8 = 5;
                    var8 = var10[var8];
                    var8 = var9.bind(var3)(var8);
                    var8 = var8.NetworkActionNames;
                    var8 = var8.WEBAUTHN_REGISTER;
                    var7['event'] = var8;
                    var2['trackedActionData'] = var7;
                    var7 = false;
                    var2['rejectWithError'] = var7;
                    var2 = var5.bind(var6)(var2);
                    SaveGenerator(address=141);
 139:
                    return var2;
 141:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0006_ip = 249; continue _fun0006 }
 147:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var4 = 3;
                    var7 = var6[var4];
                    var9 = var5.bind(var3)(var7);
                    var8 = var9.dispatch;
                    var7 = {};
                    var10 = 'AUTHENTICATOR_CREATE';
                    var7['type'] = var10;
                    var10 = var2.body;
                    var7['credential'] = var10;
                    var7 = var8.bind(var9)(var7);
                    var4 = var6[var4];
                    var6 = var5.bind(var3)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var7 = 'MFA_ENABLE_SUCCESS';
                    var4['type'] = var7;
                    var7 = var2.body;
                    var7 = var7.backup_codes;
                    var4['codes'] = var7;
                    var4 = var5.bind(var6)(var4);
                    return var3;
 249:
                    return var2;
 252:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot10 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.Endpoints;
    var _closure1_slot4 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/webauthn/WebAuthnActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function fetchWebAuthnConditionalChallenge() {
        var1 = undefined;
        var4 = _closure1_slot5;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['fetchWebAuthnConditionalChallenge'] = var4;
    var4 = function fetchWebAuthnPasswordlessChallenge() {
        var1 = undefined;
        var4 = _closure1_slot6;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['fetchWebAuthnPasswordlessChallenge'] = var4;
    var4 = function fetchWebAuthnCredentials() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 2;
        var2 = var2[var1];
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        var4 = var2.HTTP;
        var3 = var4.get;
        var2 = {};
        var5 = _closure1_slot4;
        var5 = var5.MFA_WEBAUTHN_CREDENTIALS;
        var2['url'] = var5;
        var5 = true;
        var2['rejectWithError'] = var5;
        var4 = var3.bind(var4)(var2);
        var3 = var4.then;
        var2 = function(arg1) {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 3;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var5 = 'MFA_WEBAUTHN_CREDENTIALS_LOADED';
            var2['type'] = var5;
            var5 = arg1;
            var5 = var5.body;
            var2['credentials'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['fetchWebAuthnCredentials'] = var4;
    var4 = function deleteWebAuthnCredential(arg1) {
        var6 = arg1;
        var _closure2_slot0 = var6;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 2;
        var3 = var3[var1];
        var1 = undefined;
        var3 = var4.bind(var1)(var3);
        var5 = var3.HTTP;
        var4 = var5.del;
        var3 = {};
        var8 = _closure1_slot4;
        var7 = var8.MFA_WEBAUTHN_CREDENTIAL;
        var6 = var6.id;
        var6 = var7.bind(var8)(var6);
        var3['url'] = var6;
        var6 = true;
        var3['rejectWithError'] = var6;
        var4 = var4.bind(var5)(var3);
        var3 = var4.then;
        var2 = function() {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 3;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var5 = 'AUTHENTICATOR_DELETE';
            var2['type'] = var5;
            var5 = _closure2_slot0;
            var2['credential'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['deleteWebAuthnCredential'] = var4;
    var4 = function deleteWebAuthnCredentialAsync() {
        var1 = undefined;
        var4 = _closure1_slot7;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['deleteWebAuthnCredentialAsync'] = var4;
    var4 = function editWebAuthnCredential() {
        var1 = undefined;
        var4 = _closure1_slot8;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['editWebAuthnCredential'] = var4;
    var4 = function startRegisterWebAuthnCredential() {
        var1 = undefined;
        var4 = _closure1_slot9;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['startRegisterWebAuthnCredential'] = var4;
    var2 = function finishRegisterWebAuthnCredential() {
        var1 = undefined;
        var4 = _closure1_slot10;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['finishRegisterWebAuthnCredential'] = var2;
    return var1;
})();