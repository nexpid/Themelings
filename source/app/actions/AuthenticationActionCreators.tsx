// app/actions/AuthenticationActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var4 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var4;
    var1 = metroImportAll;
    var _closure1_slot2 = var1;
    var _closure1_slot3 = var7;
    var1 = function dispatchLogout(arg1) {
        var4 = {};
        var1 = 'LOGOUT';
        var4['type'] = var1;
        var5 = arg1;
        var6 = var4;
        var1 = copyDataProperties(var6, var5);
        var3 = _closure1_slot1;
        var2 = _closure1_slot3;
        var1 = 7;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.dispatch;
        var4 = var2.bind(var3)(var4);
        var3 = var4.catch;
        var2 = function(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var1 = arg1;
                var4 = _closure1_slot16;
                var3 = var4.error;
                var2 = 'Error while dispatching LOGOUT';
                var2 = var3.bind(var4)(var2, var1);
                var2 = global;
                var2 = var2.window;
                var3 = var2.DiscordErrors;
                var2 = null;
                if(!(var2 != var3)) { _fun0001_ip = 58; continue _fun0001 }
 47:
                var2 = var3.softCrash;
                var2 = var2.bind(var3)(var1);
 58:
                throw var1;
            }
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var _closure1_slot19 = var1;
    var1 = function handleLogout(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var7 = arguments[1];
            var1 = undefined;
            if(!(var7 === var1)) { _fun0002_ip = 22; continue _fun0002 }
 9:
            var2 = _closure1_slot13;
            var7 = var2.DEFAULT_LOGGED_OUT;
 22:
            var3 = _closure1_slot19;
            var3 = var3.bind(var1)();
            var3 = null;
            if(!(var3 != var7)) { _fun0002_ip = 191; continue _fun0002 }
 42:
            var5 = _closure1_slot0;
            var6 = _closure1_slot3;
            var4 = 8;
            var4 = var6[var4];
            var5 = var5.bind(var1)(var4);
            var4 = var5.getRootNavigationRef;
            var4 = var4.bind(var5)();
            if(!(var3 == var4)) { _fun0002_ip = 119; continue _fun0002 }
 76:
            var5 = _closure1_slot0;
            var6 = _closure1_slot3;
            var3 = 9;
            var3 = var6[var3];
            var6 = var5.bind(var1)(var3);
            var5 = var6.transitionTo;
            var3 = {};
            var8 = arg1;
            var3['source'] = var8;
            var3 = var5.bind(var6)(var7, var3);
            _fun0002_ip = 191; continue _fun0002;
 119:
            var3 = _closure1_slot1;
            var5 = _closure1_slot3;
            var2 = 10;
            var2 = var5[var2];
            var3 = var3.bind(var1)(var2);
            var2 = var3.popAll;
            var2 = var2.bind(var3)();
            var3 = var4.reset;
            var2 = {};
            var5 = 0;
            var2['index'] = var5;
            var6 = {};
            var5 = 'auth';
            var6['name'] = var5;
            var5 = new Array(1);
            var5[0] = var6;
            var2['routes'] = var5;
            var2 = var3.bind(var4)(var2);
 191:
            return var1;
        }
    };
    var _closure1_slot20 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var7[var1];
    var1 = undefined;
    var2 = var4.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 1;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.setPromoEmailConsentState;
    var _closure1_slot6 = var2;
    var2 = 2;
    var2 = var7[var2];
    var2 = var4.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 3;
    var2 = var7[var2];
    var2 = var4.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 4;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var8 = var2.Endpoints;
    var _closure1_slot9 = var8;
    var8 = var2.DEVICE_TOKEN;
    var _closure1_slot10 = var8;
    var8 = var2.DEVICE_VOIP_TOKEN;
    var _closure1_slot11 = var8;
    var8 = var2.AbortCodes;
    var _closure1_slot12 = var8;
    var2 = var2.Routes;
    var _closure1_slot13 = var2;
    var2 = 5;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var8 = var2.DEVICE_PUSH_VOIP_PROVIDER;
    var _closure1_slot14 = var8;
    var2 = var2.getDevicePushProvider;
    var _closure1_slot15 = var2;
    var2 = 6;
    var2 = var7[var2];
    var8 = var4.bind(var1)(var2);
    var2 = var8.prototype;
    var4 = Object.create(var2, {constructor: {value: var8}});
    var12 = 'AuthenticationActionCreators';
    var13 = var4;
    var2 = new var13[var8](var12, var11);
    var2 = var2 instanceof Object ? var2 : var4;
    var _closure1_slot16 = var2;
    var2 = null;
    var _closure1_slot17 = var2;
    var2 = {};
    var4 = 'MFA';
    var2['MFA'] = var4;
    var4 = 'SUCCESS';
    var2['SUCCESS'] = var4;
    var _closure1_slot18 = var2;
    var4 = {};
    var8 = function startSession(arg1) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot1;
        var3 = _closure1_slot3;
        var1 = 7;
        var3 = var3[var1];
        var1 = undefined;
        var4 = var4.bind(var1)(var3);
        var3 = var4.wait;
        var2 = function() {
            var3 = _closure1_slot1;
            var2 = _closure1_slot3;
            var1 = 7;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var5 = 'START_SESSION';
            var2['type'] = var5;
            var5 = _closure2_slot0;
            var2['token'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var4['startSession'] = var8;
    var8 = function login(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var2 = arg1;
            var3 = this;
            var _closure2_slot0 = var3;
            var16 = var2.login;
            var _closure2_slot1 = var16;
            var15 = var2.password;
            var _closure2_slot2 = var15;
            var14 = var2.undelete;
            var13 = var2.source;
            var12 = var2.giftCodeSKUId;
            var9 = var2.invite;
            var5 = var2.isMultiAccount;
            var _closure2_slot3 = var5;
            var3 = _closure1_slot1;
            var11 = _closure1_slot3;
            var2 = 7;
            var2 = var11[var2];
            var8 = undefined;
            var10 = var3.bind(var8)(var2);
            var4 = var10.dispatch;
            var6 = true;
            var2 = {'type': 'LOGIN', 'isPasswordAttempt': true};
            var2 = var4.bind(var10)(var2);
            var2 = 11;
            var2 = var11[var2];
            var4 = var3.bind(var8)(var2);
            var3 = var4.post;
            var2 = {};
            var10 = _closure1_slot9;
            var10 = var10.LOGIN;
            var2['url'] = var10;
            var10 = {};
            var10['login'] = var16;
            var10['password'] = var15;
            var10['undelete'] = var14;
            var10['login_source'] = var13;
            var10['gift_code_sku_id'] = var12;
            var2['body'] = var10;
            var10 = 2;
            var2['retries'] = var10;
            var2['oldFormErrors'] = var6;
            var6 = {};
            var10 = _closure1_slot0;
            var7 = 12;
            var7 = var11[var7];
            var7 = var10.bind(var8)(var7);
            var7 = var7.NetworkActionNames;
            var7 = var7.USER_LOGIN;
            var6['event'] = var7;
            var7 = {};
            var10 = null;
            var10 = var10 == var9;
            if(var10) { _fun0003_ip = 245; continue _fun0003 }
 240:
            var8 = var9.code;
 245:
            var7['invite_code'] = var8;
            var7['is_multi_account'] = var5;
            var6['properties'] = var7;
            var2['trackedActionData'] = var6;
            if(var5) { _fun0003_ip = 274; continue _fun0003 }
 270:
            var5 = {};
            _fun0003_ip = 295; continue _fun0003;
 274:
            var6 = {};
            var7 = {};
            var8 = '';
            var7['authorization'] = var8;
            var6['headers'] = var7;
            var5 = var6;
 295:
            var18 = var2;
            var17 = var5;
            var5 = copyDataProperties(var18, var17);
            var6 = false;
            var5 = 'rejectWithError';
            var2[var5] = var6;
            var4 = var3.bind(var4)(var2);
            var3 = var4.then;
            var2 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var1 = arg1;
                    var1 = var1.body;
                    var3 = var1.mfa;
                    var8 = var1.sms;
                    var7 = var1.webauthn;
                    var9 = var1.ticket;
                    var11 = var1.token;
                    var5 = var1.backup;
                    var15 = var1.user_id;
                    var14 = var1.required_actions;
                    var6 = var1.totp;
                    var12 = _closure1_slot1;
                    var1 = _closure1_slot3;
                    var4 = 7;
                    var10 = var1[var4];
                    var1 = undefined;
                    var13 = var12.bind(var1)(var10);
                    var12 = var13.dispatch;
                    var10 = {};
                    var16 = 'LOGIN_ATTEMPTED';
                    var10['type'] = var16;
                    var10['user_id'] = var15;
                    var10['required_actions'] = var14;
                    var10 = var12.bind(var13)(var10);
                    if(var3) { _fun0004_ip = 191; continue _fun0004 }
 120:
                    var10 = _closure2_slot3;
                    if(var10) { _fun0004_ip = 174; continue _fun0004 }
 130:
                    var12 = _closure1_slot1;
                    var10 = _closure1_slot3;
                    var10 = var10[var4];
                    var13 = var12.bind(var1)(var10);
                    var12 = var13.dispatch;
                    var10 = {};
                    var14 = 'LOGIN_SUCCESS';
                    var10['type'] = var14;
                    var10['token'] = var11;
                    var10 = var12.bind(var13)(var10);
                    _fun0004_ip = 253; continue _fun0004;
 174:
                    var10 = _closure2_slot0;
                    var3 = var10.switchAccountToken;
                    var3 = var3.bind(var10)(var11);
                    _fun0004_ip = 253; continue _fun0004;
 191:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var2 = var2[var4];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.dispatch;
                    var2 = {};
                    var10 = 'LOGIN_MFA_STEP';
                    var2['type'] = var10;
                    var2['ticket'] = var9;
                    var2['sms'] = var8;
                    var2['webauthn'] = var7;
                    var2['totp'] = var6;
                    var2['backup'] = var5;
                    var2 = var3.bind(var4)(var2);
 253:
                    return var1;
                }
            };
            var1 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var6 = arg1;
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var1 = 13;
                    var1 = var4[var1];
                    var5 = undefined;
                    var1 = var3.bind(var5)(var1);
                    var1 = var1.V6OrEarlierAPIError;
                    var3 = var1.prototype;
                    var3 = Object.create(var3, {constructor: {value: var1}});
                    var15 = var3;
                    var14 = var6;
                    var1 = new var15[var1](var14, var13);
                    var1 = var1 instanceof Object ? var1 : var3;
                    var3 = var6.body;
                    var7 = null;
                    if(!(var7 != var3)) { _fun0005_ip = 95; continue _fun0005 }
 68:
                    var4 = var6.body;
                    var8 = var7 == var4;
                    var3 = undefined;
                    if(var8) { _fun0005_ip = 88; continue _fun0005 }
 82:
                    var3 = var4.suspended_user_token;
 88:
                    if(!(var7 == var3)) { _fun0005_ip = 464; continue _fun0005 }
 95:
                    var3 = var6.body;
                    var8 = var7 == var3;
                    var4 = undefined;
                    if(var8) { _fun0005_ip = 114; continue _fun0005 }
 109:
                    var4 = var3.code;
 114:
                    var3 = _closure1_slot12;
                    var3 = var3.ACCOUNT_SCHEDULED_FOR_DELETION;
                    if(!(var4 === var3)) { _fun0005_ip = 154; continue _fun0005 }
 128:
                    var3 = _closure2_slot2;
                    if(!(var7 != var3)) { _fun0005_ip = 154; continue _fun0005 }
 139:
                    var8 = _closure2_slot2;
                    var3 = '';
                    if(!(var3 === var8)) { _fun0005_ip = 397; continue _fun0005 }
 154:
                    var3 = _closure1_slot12;
                    var3 = var3.ACCOUNT_DISABLED;
                    if(!(var4 === var3)) { _fun0005_ip = 194; continue _fun0005 }
 168:
                    var3 = _closure2_slot2;
                    if(!(var7 != var3)) { _fun0005_ip = 194; continue _fun0005 }
 179:
                    var8 = _closure2_slot2;
                    var3 = '';
                    if(!(var3 === var8)) { _fun0005_ip = 330; continue _fun0005 }
 194:
                    var3 = _closure1_slot12;
                    var3 = var3.PHONE_VERIFICATION_REQUIRED;
                    if(!(var4 !== var3)) { _fun0005_ip = 257; continue _fun0005 }
 208:
                    var4 = _closure1_slot1;
                    var8 = _closure1_slot3;
                    var3 = 7;
                    var3 = var8[var3];
                    var8 = var4.bind(var5)(var3);
                    var4 = var8.dispatch;
                    var3 = {};
                    var9 = 'LOGIN_FAILURE';
                    var3['type'] = var9;
                    var3['error'] = var1;
                    var3 = var4.bind(var8)(var3);
                    _fun0005_ip = 462; continue _fun0005;
 257:
                    var4 = _closure1_slot1;
                    var8 = _closure1_slot3;
                    var3 = 7;
                    var3 = var8[var3];
                    var8 = var4.bind(var5)(var3);
                    var4 = var8.dispatch;
                    var3 = {};
                    var9 = 'LOGIN_PHONE_IP_AUTHORIZATION_REQUIRED';
                    var3['type'] = var9;
                    var9 = {};
                    var13 = _closure2_slot1;
                    var9['login'] = var13;
                    var12 = _closure2_slot2;
                    var9['password'] = var12;
                    var3['credentials'] = var9;
                    var3 = var4.bind(var8)(var3);
                    _fun0005_ip = 462; continue _fun0005;
 330:
                    var4 = _closure1_slot1;
                    var8 = _closure1_slot3;
                    var3 = 7;
                    var3 = var8[var3];
                    var8 = var4.bind(var5)(var3);
                    var4 = var8.dispatch;
                    var3 = {};
                    var9 = 'LOGIN_ACCOUNT_DISABLED';
                    var3['type'] = var9;
                    var9 = {};
                    var12 = _closure2_slot1;
                    var9['login'] = var12;
                    var11 = _closure2_slot2;
                    var9['password'] = var11;
                    var3['credentials'] = var9;
                    var3 = var4.bind(var8)(var3);
                    _fun0005_ip = 462; continue _fun0005;
 397:
                    var4 = _closure1_slot1;
                    var8 = _closure1_slot3;
                    var3 = 7;
                    var3 = var8[var3];
                    var8 = var4.bind(var5)(var3);
                    var4 = var8.dispatch;
                    var3 = {};
                    var9 = 'LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION';
                    var3['type'] = var9;
                    var9 = {};
                    var11 = _closure2_slot1;
                    var9['login'] = var11;
                    var10 = _closure2_slot2;
                    var9['password'] = var10;
                    var3['credentials'] = var9;
                    var3 = var4.bind(var8)(var3);
 462:
                    throw var1;
 464:
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    var2 = 7;
                    var2 = var4[var2];
                    var4 = var3.bind(var5)(var2);
                    var3 = var4.dispatch;
                    var2 = {};
                    var8 = 'LOGIN_SUSPENDED_USER';
                    var2['type'] = var8;
                    var6 = var6.body;
                    var7 = var7 == var6;
                    var5 = undefined;
                    if(var7) { _fun0005_ip = 519; continue _fun0005 }
 513:
                    var5 = var6.suspended_user_token;
 519:
                    var2['suspendedUserToken'] = var5;
                    var2 = var3.bind(var4)(var2);
                    throw var1;
                }
            };
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4['login'] = var8;
    var8 = function loginMFAv2(arg1) {
        var2 = arg1;
        var3 = this;
        var _closure2_slot0 = var3;
        var12 = var2.code;
        var11 = var2.ticket;
        var10 = var2.source;
        var7 = var2.giftCodeSKUId;
        var3 = var2.isMultiAccount;
        var _closure2_slot1 = var3;
        var14 = var2.mfaType;
        var3 = _closure1_slot1;
        var9 = _closure1_slot3;
        var2 = 11;
        var2 = var9[var2];
        var8 = undefined;
        var4 = var3.bind(var8)(var2);
        var3 = var4.post;
        var2 = {'url': null, 'body': null, 'retries': 2, 'oldFormErrors': true, 'trackedActionData': null, 'rejectWithError': false};
        var13 = _closure1_slot9;
        var5 = var13.LOGIN_MFA;
        var5 = var5.bind(var13)(var14);
        var2['url'] = var5;
        var5 = {};
        var5['code'] = var12;
        var5['ticket'] = var11;
        var5['login_source'] = var10;
        var5['gift_code_sku_id'] = var7;
        var2['body'] = var5;
        var5 = {};
        var7 = _closure1_slot0;
        var6 = 12;
        var6 = var9[var6];
        var6 = var7.bind(var8)(var6);
        var6 = var6.NetworkActionNames;
        var6 = var6.USER_LOGIN_MFA;
        var5['event'] = var6;
        var2['trackedActionData'] = var5;
        var4 = var3.bind(var4)(var2);
        var3 = var4.then;
        var2 = function(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var1 = arg1;
                var3 = _closure2_slot1;
                if(var3) { _fun0006_ip = 76; continue _fun0006 }
 13:
                var5 = _closure1_slot1;
                var4 = _closure1_slot3;
                var3 = 7;
                var4 = var4[var3];
                var3 = undefined;
                var5 = var5.bind(var3)(var4);
                var4 = var5.dispatch;
                var3 = {};
                var6 = 'LOGIN_SUCCESS';
                var3['type'] = var6;
                var6 = var1.body;
                var6 = var6.token;
                var3['token'] = var6;
                var3 = var4.bind(var5)(var3);
                _fun0006_ip = 102; continue _fun0006;
 76:
                var3 = _closure2_slot0;
                var2 = var3.switchAccountToken;
                var1 = var1.body;
                var1 = var1.token;
                var1 = var2.bind(var3)(var1);
 102:
                var1 = undefined;
                return var1;
            }
        };
        var3 = var3.bind(var4)(var2);
        var2 = var3.catch;
        var1 = function(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var1 = arg1;
                var2 = var1.body;
                var3 = null;
                if(!(var3 != var2)) { _fun0007_ip = 92; continue _fun0007 }
 14:
                var2 = var1.body;
                var2 = var2.suspended_user_token;
                if(!(var3 != var2)) { _fun0007_ip = 92; continue _fun0007 }
 29:
                var5 = _closure1_slot1;
                var4 = _closure1_slot3;
                var2 = 7;
                var4 = var4[var2];
                var2 = undefined;
                var6 = var5.bind(var2)(var4);
                var5 = var6.dispatch;
                var4 = {};
                var7 = 'LOGIN_SUSPENDED_USER';
                var4['type'] = var7;
                var7 = var1.body;
                var7 = var7.suspended_user_token;
                var4['suspendedUserToken'] = var7;
                var4 = var5.bind(var6)(var4);
                return var2;
 92:
                var2 = var1.body;
                var4 = var3 == var2;
                var3 = undefined;
                if(var4) { _fun0007_ip = 111; continue _fun0007 }
 106:
                var3 = var2.code;
 111:
                var2 = _closure1_slot12;
                var2 = var2.MFA_INVALID_CODE;
                if(!(var3 !== var2)) { _fun0007_ip = 130; continue _fun0007 }
 128:
                throw var1;
 130:
                var2 = global;
                var3 = var2.Error;
                var1 = var1.body;
                var8 = var1.message;
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var9 = var2;
                var1 = new var9[var3](var8, var7);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var4['loginMFAv2'] = var8;
    var8 = function authenticatePasswordless(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var2 = arg1;
            var3 = this;
            var _closure2_slot0 = var3;
            var3 = var2.authenticateFunc;
            var _closure2_slot1 = var3;
            var4 = var2.conditionalMediationAbortController;
            var3 = var2.source;
            var _closure2_slot2 = var3;
            var2 = var2.giftCodeSKUId;
            var _closure2_slot3 = var2;
            var2 = null;
            if(!(var2 != var4)) { _fun0008_ip = 72; continue _fun0008 }
 55:
            var3 = var4.abort;
            var2 = 'Starting non-conditional mediation';
            var2 = var3.bind(var4)(var2);
 72:
            var6 = _closure1_slot1;
            var5 = _closure1_slot3;
            var3 = 7;
            var3 = var5[var3];
            var4 = undefined;
            var7 = var6.bind(var4)(var3);
            var6 = var7.dispatch;
            var3 = {};
            var8 = 'PASSWORDLESS_START';
            var3['type'] = var8;
            var3 = var6.bind(var7)(var3);
            var3 = _closure1_slot0;
            var2 = 14;
            var2 = var5[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.fetchWebAuthnPasswordlessChallenge;
            var4 = var2.bind(var3)();
            var3 = var4.then;
            var2 = function(arg1) {
                var2 = arg1;
                var4 = var2.challenge;
                var2 = var2.ticket;
                var _closure3_slot0 = var2;
                var3 = _closure2_slot1;
                var2 = undefined;
                var3 = var3.bind(var2)(var4);
                var2 = var3.then;
                var1 = function(arg1) {
                    var3 = _closure2_slot0;
                    var2 = var3.loginWebAuthn;
                    var1 = {};
                    var5 = _closure3_slot0;
                    var1['ticket'] = var5;
                    var5 = arg1;
                    var1['credential'] = var5;
                    var5 = _closure2_slot2;
                    var1['source'] = var5;
                    var4 = _closure2_slot3;
                    var1['giftCodeSKUId'] = var4;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var3 = var3.bind(var4)(var2);
            var2 = var3.catch;
            var1 = function(arg1) {
                var1 = arg1;
                var4 = _closure1_slot1;
                var3 = _closure1_slot3;
                var2 = 7;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.dispatch;
                var2 = {};
                var5 = 'PASSWORDLESS_FAILURE';
                var2['type'] = var5;
                var2['error'] = var1;
                var2 = var3.bind(var4)(var2);
                throw var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var4['authenticatePasswordless'] = var8;
    var8 = function loginWebAuthn(arg1) {
        var2 = arg1;
        var11 = var2.ticket;
        var12 = var2.credential;
        var10 = var2.source;
        var7 = var2.giftCodeSKUId;
        var3 = _closure1_slot1;
        var9 = _closure1_slot3;
        var2 = 11;
        var2 = var9[var2];
        var8 = undefined;
        var4 = var3.bind(var8)(var2);
        var3 = var4.post;
        var2 = {};
        var5 = _closure1_slot9;
        var5 = var5.WEBAUTHN_CONDITIONAL_UI_LOGIN;
        var2['url'] = var5;
        var5 = {};
        var5['credential'] = var12;
        var5['ticket'] = var11;
        var5['source'] = var10;
        var5['giftCodeSKUId'] = var7;
        var2['body'] = var5;
        var5 = 1;
        var2['retries'] = var5;
        var5 = {};
        var7 = _closure1_slot0;
        var6 = 12;
        var6 = var9[var6];
        var6 = var7.bind(var8)(var6);
        var6 = var6.NetworkActionNames;
        var6 = var6.USER_LOGIN_PASSWORDLESS;
        var5['event'] = var6;
        var2['trackedActionData'] = var5;
        var5 = false;
        var2['rejectWithError'] = var5;
        var4 = var3.bind(var4)(var2);
        var3 = var4.then;
        var2 = function(arg1) {
            var1 = arg1;
            var1 = var1.body;
            var5 = var1.token;
            var10 = var1.user_id;
            var9 = var1.required_actions;
            var3 = _closure1_slot1;
            var4 = _closure1_slot3;
            var2 = 7;
            var6 = var4[var2];
            var1 = undefined;
            var8 = var3.bind(var1)(var6);
            var7 = var8.dispatch;
            var6 = {};
            var11 = 'LOGIN_ATTEMPTED';
            var6['type'] = var11;
            var6['user_id'] = var10;
            var6['required_actions'] = var9;
            var6 = var7.bind(var8)(var6);
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var6 = 'LOGIN_SUCCESS';
            var2['type'] = var6;
            var2['token'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var3 = var3.bind(var4)(var2);
        var2 = var3.catch;
        var1 = function(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                var1 = arg1;
                var2 = var1.body;
                var3 = null;
                if(!(var3 != var2)) { _fun0009_ip = 92; continue _fun0009 }
 14:
                var2 = var1.body;
                var2 = var2.suspended_user_token;
                if(!(var3 != var2)) { _fun0009_ip = 92; continue _fun0009 }
 29:
                var4 = _closure1_slot1;
                var3 = _closure1_slot3;
                var2 = 7;
                var3 = var3[var2];
                var2 = undefined;
                var5 = var4.bind(var2)(var3);
                var4 = var5.dispatch;
                var3 = {};
                var6 = 'LOGIN_SUSPENDED_USER';
                var3['type'] = var6;
                var6 = var1.body;
                var6 = var6.suspended_user_token;
                var3['suspendedUserToken'] = var6;
                var3 = var4.bind(var5)(var3);
                return var2;
 92:
                var4 = _closure1_slot1;
                var3 = _closure1_slot3;
                var2 = 7;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.dispatch;
                var2 = {};
                var5 = 'PASSWORDLESS_FAILURE';
                var2['type'] = var5;
                var2['error'] = var1;
                var2 = var3.bind(var4)(var2);
                throw var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var4['loginWebAuthn'] = var8;
    var8 = function loginToken(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
            var2 = arguments[1];
            var3 = this;
            var _closure2_slot0 = var3;
            var3 = arg1;
            var _closure2_slot1 = var3;
            var4 = undefined;
            if(!(var2 === var4)) { _fun0010_ip = 27; continue _fun0010 }
 25:
            var2 = true;
 27:
            var _closure2_slot2 = var2;
            var3 = _closure1_slot1;
            var5 = _closure1_slot3;
            var2 = 7;
            var2 = var5[var2];
            var4 = var3.bind(var4)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var5 = 'LOGIN';
            var2['type'] = var5;
            var2 = var3.bind(var4)(var2);
            var2 = global;
            var3 = var2.Promise;
            var2 = var3.prototype;
            var2 = Object.create(var2, {constructor: {value: var3}});
            var6 = function(arg1) {
                var1 = arg1;
                var _closure3_slot0 = var1;
                var1 = global;
                var3 = var1.setImmediate;
                var1 = undefined;
                var2 = function() {
                    _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot3;
                        var1 = 7;
                        var2 = var2[var1];
                        var1 = undefined;
                        var5 = var3.bind(var1)(var2);
                        var4 = var5.dispatch;
                        var3 = {};
                        var2 = 'LOGIN_SUCCESS';
                        var3['type'] = var2;
                        var6 = _closure2_slot1;
                        var3['token'] = var6;
                        var3 = var4.bind(var5)(var3);
                        var3 = _closure2_slot2;
                        if(!var3) { _fun0011_ip = 83; continue _fun0011 }
 64:
                        var4 = _closure2_slot0;
                        var3 = var4.startSession;
                        var2 = _closure2_slot1;
                        var2 = var3.bind(var4)(var2);
 83:
                        var2 = _closure3_slot0;
                        var2 = var2.bind(var1)();
                        return var1;
                    }
                };
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var7 = var2;
            var1 = new var7[var3](var6, var5);
            var1 = var1 instanceof Object ? var1 : var2;
            return var1;
        }
    };
    var4['loginToken'] = var8;
    var8 = function loginReset(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot3;
        var1 = 7;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'LOGIN_RESET';
        var2['type'] = var5;
        var5 = arg1;
        var2['isMultiAccount'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var4['loginReset'] = var8;
    var8 = function loginStatusReset() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot3;
        var1 = 7;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'LOGIN_STATUS_RESET';
        var2['type'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var4['loginStatusReset'] = var8;
    var8 = function logoutInternal(arg1) {
        var3 = _closure1_slot19;
        var1 = undefined;
        var2 = arg1;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4['logoutInternal'] = var8;
    var8 = function logout(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
            var7 = arg1;
            var2 = arguments[1];
            var11 = arguments[2];
            var _closure2_slot0 = var7;
            var12 = undefined;
            if(!(var2 === var12)) { _fun0012_ip = 34; continue _fun0012 }
 21:
            var3 = _closure1_slot13;
            var2 = var3.DEFAULT_LOGGED_OUT;
 34:
            var _closure2_slot1 = var2;
            var _closure2_slot2 = var11;
            var3 = _closure1_slot1;
            var10 = _closure1_slot3;
            var2 = 11;
            var2 = var10[var2];
            var4 = var3.bind(var12)(var2);
            var3 = var4.post;
            var2 = {};
            var5 = _closure1_slot9;
            var5 = var5.LOGOUT;
            var2['url'] = var5;
            var5 = {};
            var6 = _closure1_slot15;
            var6 = var6.bind(var12)();
            var5['provider'] = var6;
            var8 = _closure1_slot0;
            var6 = 15;
            var13 = var10[var6];
            var13 = var8.bind(var12)(var13);
            var15 = var13.Storage;
            var14 = var15.get;
            var13 = _closure1_slot10;
            var13 = var14.bind(var15)(var13);
            var5['token'] = var13;
            var13 = _closure1_slot14;
            var5['voip_provider'] = var13;
            var6 = var10[var6];
            var6 = var8.bind(var12)(var6);
            var14 = var6.Storage;
            var13 = var14.get;
            var6 = _closure1_slot11;
            var6 = var13.bind(var14)(var6);
            var5['voip_token'] = var6;
            var2['body'] = var5;
            var5 = true;
            var2['oldFormErrors'] = var5;
            var5 = {};
            var6 = 12;
            var6 = var10[var6];
            var6 = var8.bind(var12)(var6);
            var6 = var6.NetworkActionNames;
            var6 = var6.USER_LOGOUT;
            var5['event'] = var6;
            var6 = {};
            var6['logout_source'] = var7;
            var5['properties'] = var6;
            var2['trackedActionData'] = var5;
            var8 = null;
            var5 = var8 != var11;
            if(!var5) { _fun0012_ip = 322; continue _fun0012 }
 260:
            var6 = {};
            var7 = {};
            var10 = _closure1_slot2;
            var13 = _closure1_slot3;
            var9 = 16;
            var9 = var13[var9];
            var10 = var10.bind(var12)(var9);
            var9 = var10.getToken;
            var9 = var9.bind(var10)(var11);
            var10 = var8 != var9;
            var8 = '';
            if(!var10) { _fun0012_ip = 309; continue _fun0012 }
 306:
            var8 = var9;
 309:
            var7['authorization'] = var8;
            var6['headers'] = var7;
            var5 = var6;
 322:
            var17 = var2;
            var16 = var5;
            var5 = copyDataProperties(var17, var16);
            var6 = false;
            var5 = 'rejectWithError';
            var2[var5] = var6;
            var3 = var3.bind(var4)(var2);
            var2 = var3.finally;
            var1 = function() {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                    var3 = _closure2_slot2;
                    var2 = null;
                    var2 = var2 != var3;
                    if(!var2) { _fun0013_ip = 41; continue _fun0013 }
 16:
                    var4 = _closure2_slot2;
                    var5 = _closure1_slot7;
                    var3 = var5.getId;
                    var3 = var3.bind(var5)();
                    var2 = var4 !== var3;
 41:
                    if(var2) { _fun0013_ip = 67; continue _fun0013 }
 44:
                    var4 = _closure1_slot20;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var1 = undefined;
                    var1 = var4.bind(var1)(var3, var2);
 67:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var4['logout'] = var8;
    var8 = function switchAccountToken(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
            var5 = arg1;
            var8 = arguments[1];
            var4 = this;
            var _closure2_slot0 = var5;
            var7 = undefined;
            if(!(var8 === var7)) { _fun0014_ip = 23; continue _fun0014 }
 21:
            var8 = true;
 23:
            var6 = _closure1_slot7;
            var3 = var6.getToken;
            var3 = var3.bind(var6)();
            var10 = _closure1_slot16;
            var9 = var10.log;
            var6 = {};
            var11 = null;
            var11 = var11 != var3;
            var6['wasLoggedIn'] = var11;
            var3 = var5 !== var3;
            var6['tokenHasChanged'] = var3;
            var3 = 'Switching accounts';
            var3 = var9.bind(var10)(var3, var6);
            var6 = _closure1_slot19;
            var2 = {};
            var3 = true;
            var2['isSwitchingAccount'] = var3;
            var2['goHomeAfterSwitching'] = var8;
            var2 = var6.bind(var7)(var2);
            var2 = var4.loginToken;
            var3 = var2.bind(var4)(var5, var3);
            var2 = var3.then;
            var1 = function() {
                var3 = _closure1_slot7;
                var1 = var3.getToken;
                var3 = var1.bind(var3)();
                var1 = _closure2_slot0;
                var1 = var1 === var3;
                var5 = _closure1_slot16;
                var4 = var5.log;
                var3 = {};
                var3['isCorrectToken'] = var1;
                var2 = 'Switched accounts finished';
                var2 = var4.bind(var5)(var2, var3);
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var4['switchAccountToken'] = var8;
    var8 = function verifySSOToken(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
            var2 = arguments[1];
            var3 = arg1;
            var _closure2_slot0 = var3;
            var4 = undefined;
            if(!(var2 === var4)) { _fun0015_ip = 31; continue _fun0015 }
 18:
            var3 = _closure1_slot13;
            var2 = var3.DEFAULT_LOGGED_OUT;
 31:
            var _closure2_slot1 = var2;
            var3 = _closure1_slot0;
            var6 = _closure1_slot3;
            var2 = 17;
            var2 = var6[var2];
            var2 = var3.bind(var4)(var2);
            var4 = var2.HTTP;
            var3 = var4.get;
            var2 = {'url': null, 'oldFormErrors': true, 'rejectWithError': true};
            var5 = _closure1_slot9;
            var5 = var5.ME;
            var2['url'] = var5;
            var3 = var3.bind(var4)(var2);
            var2 = var3.catch;
            var1 = function() {
                var4 = _closure1_slot20;
                var3 = _closure2_slot0;
                var2 = _closure2_slot1;
                var1 = undefined;
                var2 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var4['verifySSOToken'] = var8;
    var8 = function verify(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var3 = _closure1_slot5;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0016_ip = 209; continue _fun0016 }
 10:
                    var4 = _closure1_slot1;
                    var10 = _closure1_slot3;
                    var2 = 11;
                    var2 = var10[var2];
                    var5 = undefined;
                    var6 = var4.bind(var5)(var2);
                    var4 = var6.post;
                    var2 = {};
                    var7 = _closure1_slot9;
                    var7 = var7.VERIFY;
                    var2['url'] = var7;
                    var7 = {};
                    var8 = _closure2_slot0;
                    var7['token'] = var8;
                    var2['body'] = var7;
                    var7 = {};
                    var9 = _closure1_slot0;
                    var8 = 12;
                    var8 = var10[var8];
                    var8 = var9.bind(var5)(var8);
                    var8 = var8.NetworkActionNames;
                    var8 = var8.USER_VERIFY;
                    var7['event'] = var8;
                    var2['trackedActionData'] = var7;
                    var7 = false;
                    var2['rejectWithError'] = var7;
                    var2 = var4.bind(var6)(var2);
                    SaveGenerator(address=130);
 128:
                    return var2;
 130:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0016_ip = 206; continue _fun0016 }
 136:
                    var4 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var3 = 7;
                    var3 = var6[var3];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var6 = 'LOGIN_SUCCESS';
                    var3['type'] = var6;
                    var6 = var2.body;
                    var6 = var6.token;
                    var3['token'] = var6;
                    var3 = var4.bind(var5)(var3);
                    var3 = var2.body;
                    var3 = var3.user_id;
                    return var3;
 206:
                    return var2;
 209:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var4['verify'] = var8;
    var8 = function authorizePayment(arg1) {
        var2 = _closure1_slot1;
        var8 = _closure1_slot3;
        var1 = 11;
        var1 = var8[var1];
        var7 = undefined;
        var3 = var2.bind(var7)(var1);
        var2 = var3.post;
        var1 = {};
        var4 = _closure1_slot9;
        var4 = var4.AUTHORIZE_PAYMENT;
        var1['url'] = var4;
        var4 = {};
        var6 = arg1;
        var4['token'] = var6;
        var1['body'] = var4;
        var4 = {};
        var6 = _closure1_slot0;
        var5 = 12;
        var5 = var8[var5];
        var5 = var6.bind(var7)(var5);
        var5 = var5.NetworkActionNames;
        var5 = var5.AUTHORIZE_PAYMENT;
        var4['event'] = var5;
        var1['trackedActionData'] = var4;
        var4 = true;
        var1['rejectWithError'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var4['authorizePayment'] = var8;
    var8 = function authorizeIPAddress(arg1) {
        var2 = _closure1_slot1;
        var8 = _closure1_slot3;
        var1 = 11;
        var1 = var8[var1];
        var7 = undefined;
        var3 = var2.bind(var7)(var1);
        var2 = var3.post;
        var1 = {};
        var4 = _closure1_slot9;
        var4 = var4.AUTHORIZE_IP;
        var1['url'] = var4;
        var4 = {};
        var6 = arg1;
        var4['token'] = var6;
        var1['body'] = var4;
        var4 = {};
        var6 = _closure1_slot0;
        var5 = 12;
        var5 = var8[var5];
        var5 = var6.bind(var7)(var5);
        var5 = var5.NetworkActionNames;
        var5 = var5.AUTHORIZE_IP;
        var4['event'] = var5;
        var1['trackedActionData'] = var4;
        var4 = true;
        var1['rejectWithError'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var4['authorizeIPAddress'] = var8;
    var8 = function verifyResend() {
        var2 = _closure1_slot1;
        var8 = _closure1_slot3;
        var1 = 11;
        var1 = var8[var1];
        var7 = undefined;
        var3 = var2.bind(var7)(var1);
        var2 = var3.post;
        var1 = {};
        var4 = _closure1_slot9;
        var4 = var4.VERIFY_RESEND;
        var1['url'] = var4;
        var4 = true;
        var1['oldFormErrors'] = var4;
        var4 = {};
        var6 = _closure1_slot0;
        var5 = 12;
        var5 = var8[var5];
        var5 = var6.bind(var7)(var5);
        var5 = var5.NetworkActionNames;
        var5 = var5.USER_VERIFY_RESEND;
        var4['event'] = var5;
        var1['trackedActionData'] = var4;
        var4 = false;
        var1['rejectWithError'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var4['verifyResend'] = var8;
    var8 = function resetPassword(arg1, arg2, arg3) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var2 = arg3;
        var _closure2_slot2 = var2;
        var3 = _closure1_slot5;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0017_ip = 567; continue _fun0017 }
 10:
                    var5 = undefined;
                    var14 = undefined;
                    var12 = undefined;
                    var11 = undefined;
                    var10 = undefined;
                    var9 = undefined;
                    var8 = undefined;
                    var7 = undefined;
                    var13 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var6 = 7;
                    var3 = var2[var6];
                    var15 = var13.bind(var5)(var3);
                    var13 = var15.dispatch;
                    var3 = {};
                    var16 = 'LOGIN';
                    var3['type'] = var16;
                    var3 = var13.bind(var15)(var3);
                    var3 = {};
                    var15 = _closure2_slot0;
                    var3['token'] = var15;
                    var15 = _closure2_slot1;
                    var3['password'] = var15;
                    var13 = _closure2_slot2;
                    var3['source'] = var13;
                    var14 = var3;
                    var3 = _closure1_slot0;
                    var15 = 15;
                    var2 = var2[var15];
                    var2 = var3.bind(var5)(var2);
                    var13 = var2.Storage;
                    var3 = var13.get;
                    var2 = _closure1_slot10;
                    var3 = var3.bind(var13)(var2);
                    var2 = _closure1_slot15;
                    var16 = var2.bind(var5)();
                    var13 = null;
                    var2 = var13 != var16;
                    if(!var2) { _fun0017_ip = 160; continue _fun0017 }
 156:
                    var2 = var13 != var3;
 160:
                    if(!var2) { _fun0017_ip = 178; continue _fun0017 }
 163:
                    var2 = var14;
                    var2['push_provider'] = var16;
                    var2['push_token'] = var3;
 178:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var2 = var2[var15];
                    var2 = var3.bind(var5)(var2);
                    var15 = var2.Storage;
                    var3 = var15.get;
                    var2 = _closure1_slot11;
                    var3 = var3.bind(var15)(var2);
                    var2 = _closure1_slot14;
                    var2 = var13 != var2;
                    if(!var2) { _fun0017_ip = 230; continue _fun0017 }
 226:
                    var2 = var13 != var3;
 230:
                    if(!var2) { _fun0017_ip = 252; continue _fun0017 }
 233:
                    var2 = var14;
                    var13 = _closure1_slot14;
                    var2['push_voip_provider'] = var13;
                    var2['push_voip_token'] = var3;
 252: // try_start_0
                    var3 = _closure1_slot1;
                    var17 = _closure1_slot3;
                    var2 = 11;
                    var2 = var17[var2];
                    var13 = var3.bind(var5)(var2);
                    var3 = var13.post;
                    var2 = {};
                    var15 = _closure1_slot9;
                    var15 = var15.RESET_PASSWORD;
                    var2['url'] = var15;
                    var2['body'] = var14;
                    var14 = true;
                    var2['oldFormErrors'] = var14;
                    var14 = {};
                    var16 = _closure1_slot0;
                    var15 = 12;
                    var15 = var17[var15];
                    var15 = var16.bind(var5)(var15);
                    var15 = var15.NetworkActionNames;
                    var15 = var15.USER_RESET_PASSWORD;
                    var14['event'] = var15;
                    var2['trackedActionData'] = var14;
                    var14 = false;
                    var2['rejectWithError'] = var14;
                    var2 = var3.bind(var13)(var2);
                    SaveGenerator(address=360);
 358:
                    return var2;
 360:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0017_ip = 474; continue _fun0017 }
 366:
                    var3 = var2.body;
                    var13 = var3.mfa;
                    var12 = var3.sms;
                    var11 = var3.webauthn;
                    var10 = var3.ticket;
                    var9 = var3.token;
                    var8 = var3.backup;
                    var7 = var3.totp;
                    var3 = {};
                    var14 = _closure1_slot18;
                    if(var13) { _fun0017_ip = 430; continue _fun0017 }
 422:
                    var13 = var14.SUCCESS;
                    _fun0017_ip = 436; continue _fun0017;
 430:
                    var13 = var14.MFA;
 436:
                    var3['result'] = var13;
                    var3['sms'] = var12;
                    var3['webauthn'] = var11;
                    var3['ticket'] = var10;
                    var3['token'] = var9;
                    var3['backup'] = var8;
                    var3['totp'] = var7;
 471: // try_end0
                    return var3;
 474:
                    return var2;
 477: // catch_target0
                    CatchBlockStart(arg_register=7);
                    var7 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var2 = 13;
                    var2 = var3[var2];
                    var2 = var7.bind(var5)(var2);
                    var2 = var2.V6OrEarlierAPIError;
                    var7 = var2.prototype;
                    var7 = Object.create(var7, {constructor: {value: var2}});
                    var19 = var7;
                    var18 = var8;
                    var2 = new var19[var2](var18, var17);
                    var2 = var2 instanceof Object ? var2 : var7;
                    var4 = _closure1_slot1;
                    var3 = var3[var6];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var6 = 'LOGIN_FAILURE';
                    var3['type'] = var6;
                    var3['error'] = var2;
                    var3 = var4.bind(var5)(var3);
                    throw var2;
 567:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var4['resetPassword'] = var8;
    var8 = function resetPasswordMFAv2(arg1) {
        var2 = arg1;
        var3 = var2.method;
        var _closure2_slot0 = var3;
        var3 = var2.code;
        var _closure2_slot1 = var3;
        var3 = var2.ticket;
        var _closure2_slot2 = var3;
        var3 = var2.password;
        var _closure2_slot3 = var3;
        var3 = var2.token;
        var _closure2_slot4 = var3;
        var2 = var2.source;
        var _closure2_slot5 = var2;
        var3 = _closure1_slot5;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0018_ip = 245; continue _fun0018 }
 10:
                    var3 = _closure1_slot1;
                    var10 = _closure1_slot3;
                    var2 = 7;
                    var2 = var10[var2];
                    var9 = undefined;
                    var5 = var3.bind(var9)(var2);
                    var4 = var5.dispatch;
                    var2 = {};
                    var6 = 'LOGIN_MFA';
                    var2['type'] = var6;
                    var2 = var4.bind(var5)(var2);
                    var2 = 11;
                    var2 = var10[var2];
                    var4 = var3.bind(var9)(var2);
                    var3 = var4.post;
                    var2 = {};
                    var5 = _closure1_slot9;
                    var5 = var5.RESET_PASSWORD;
                    var2['url'] = var5;
                    var5 = {};
                    var8 = _closure2_slot1;
                    var5['code'] = var8;
                    var8 = _closure2_slot2;
                    var5['ticket'] = var8;
                    var8 = _closure2_slot3;
                    var5['password'] = var8;
                    var8 = _closure2_slot4;
                    var5['token'] = var8;
                    var8 = _closure2_slot5;
                    var5['source'] = var8;
                    var6 = _closure2_slot0;
                    var5['method'] = var6;
                    var2['body'] = var5;
                    var5 = true;
                    var2['oldFormErrors'] = var5;
                    var6 = {};
                    var8 = _closure1_slot0;
                    var7 = 12;
                    var7 = var10[var7];
                    var7 = var8.bind(var9)(var7);
                    var7 = var7.NetworkActionNames;
                    var7 = var7.USER_RESET_PASSWORD;
                    var6['event'] = var7;
                    var7 = {};
                    var7['mfa'] = var5;
                    var6['properties'] = var7;
                    var2['trackedActionData'] = var6;
                    var2['rejectWithError'] = var5;
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=222);
 220:
                    return var2;
 222:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0018_ip = 242; continue _fun0018 }
 228:
                    var3 = var2.body;
                    var3 = var3.token;
                    return var3;
 242:
                    return var2;
 245:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var4['resetPasswordMFAv2'] = var8;
    var8 = function forgotPassword(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var3 = _closure1_slot5;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0019_ip = 405; continue _fun0019 }
 10:
                    var4 = undefined;
                    var3 = undefined;
                    var7 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var5 = 7;
                    var6 = var6[var5];
                    var8 = var7.bind(var4)(var6);
                    var7 = var8.dispatch;
                    var6 = {};
                    var9 = 'FORGOT_PASSWORD_REQUEST';
                    var6['type'] = var9;
                    var6 = var7.bind(var8)(var6);
 57: // try_start_0
                    var7 = _closure1_slot1;
                    var13 = _closure1_slot3;
                    var6 = 11;
                    var6 = var13[var6];
                    var9 = var7.bind(var4)(var6);
                    var8 = var9.post;
                    var6 = {};
                    var7 = _closure1_slot9;
                    var7 = var7.FORGOT_PASSWORD;
                    var6['url'] = var7;
                    var7 = {};
                    var10 = _closure2_slot0;
                    var7['login'] = var10;
                    var6['body'] = var7;
                    var7 = true;
                    var6['oldFormErrors'] = var7;
                    var10 = {};
                    var12 = _closure1_slot0;
                    var11 = 12;
                    var11 = var13[var11];
                    var11 = var12.bind(var4)(var11);
                    var11 = var11.NetworkActionNames;
                    var11 = var11.FORGOT_PASSWORD;
                    var10['event'] = var11;
                    var6['trackedActionData'] = var10;
                    var10 = false;
                    var6['rejectWithError'] = var10;
                    var6 = var8.bind(var9)(var6);
                    SaveGenerator(address=179);
 177:
                    return var6;
 179:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=7);
                    if(var8) { _fun0019_ip = 225; continue _fun0019 }
 185:
                    var9 = _closure1_slot1;
                    var8 = _closure1_slot3;
                    var8 = var8[var5];
                    var10 = var9.bind(var4)(var8);
                    var9 = var10.dispatch;
                    var8 = {};
                    var11 = 'FORGOT_PASSWORD_SENT';
                    var8['type'] = var11;
                    var8 = var9.bind(var10)(var8);
 222: // try_end0
                    return var7;
 225:
                    return var6;
 228: // catch_target0
                    CatchBlockStart(arg_register=7);
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot3;
                    var6 = 13;
                    var6 = var9[var6];
                    var6 = var7.bind(var4)(var6);
                    var6 = var6.V6OrEarlierAPIError;
                    var7 = var6.prototype;
                    var7 = Object.create(var7, {constructor: {value: var6}});
                    var15 = var7;
                    var14 = var8;
                    var6 = new var15[var6](var14, var13);
                    var6 = var6 instanceof Object ? var6 : var7;
                    var3 = var6;
                    var7 = var6.code;
                    var6 = _closure1_slot12;
                    var6 = var6.PHONE_VERIFICATION_REQUIRED;
                    if(!(var7 !== var6)) { _fun0019_ip = 344; continue _fun0019 }
 301:
                    var7 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var6 = var6[var5];
                    var8 = var7.bind(var4)(var6);
                    var7 = var8.dispatch;
                    var6 = {};
                    var9 = 'LOGIN_FAILURE';
                    var6['type'] = var9;
                    var6['error'] = var3;
                    var6 = var7.bind(var8)(var6);
                    throw var3;
 344:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var2 = var2[var5];
                    var4 = var3.bind(var4)(var2);
                    var3 = var4.dispatch;
                    var2 = {};
                    var5 = 'LOGIN_PASSWORD_RECOVERY_PHONE_VERIFICATION';
                    var2['type'] = var5;
                    var5 = {};
                    var6 = _closure2_slot0;
                    var5['login'] = var6;
                    var2['credentials'] = var5;
                    var2 = var3.bind(var4)(var2);
                    var2 = false;
                    return var2;
 405:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var4['forgotPassword'] = var8;
    var8 = function setFingerprint(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot3;
        var1 = 7;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'FINGERPRINT';
        var2['type'] = var5;
        var5 = arg1;
        var2['fingerprint'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var4['setFingerprint'] = var8;
    var8 = function getExperiments(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot3;
        var1 = 7;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'EXPERIMENTS_FETCH';
        var2['type'] = var5;
        var5 = arg1;
        var2['withGuildExperiments'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var4['getExperiments'] = var8;
    var8 = function getLocationMetadata() {
        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
 0:
            var4 = _closure1_slot17;
            var3 = null;
            if(!(var3 == var4)) { _fun0020_ip = 152; continue _fun0020 }
 18:
            var3 = global;
            var6 = var3.clearTimeout;
            var4 = _closure1_slot4;
            var5 = undefined;
            var4 = var6.bind(var5)(var4);
            var6 = var3.setTimeout;
            var4 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot3;
                var1 = 7;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.dispatch;
                var2 = {'type': 'SET_CONSENT_REQUIRED', 'consentRequired': true};
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var3 = 5000;
            var3 = var6.bind(var5)(var4, var3);
            var _closure1_slot4 = var3;
            var4 = _closure1_slot0;
            var6 = _closure1_slot3;
            var3 = 17;
            var3 = var6[var3];
            var3 = var4.bind(var5)(var3);
            var5 = var3.HTTP;
            var4 = var5.get;
            var3 = {'url': null, 'retries': 2, 'oldFormErrors': true, 'rejectWithError': true};
            var6 = _closure1_slot9;
            var6 = var6.AUTH_LOCATION_METADATA;
            var3['url'] = var6;
            var5 = var4.bind(var5)(var3);
            var4 = var5.then;
            var3 = function(arg1) {
                _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
 0:
                    var3 = arg1;
                    var1 = global;
                    var5 = var1.clearTimeout;
                    var4 = _closure1_slot4;
                    var1 = undefined;
                    var4 = var5.bind(var1)(var4);
                    var5 = _closure1_slot8;
                    var4 = var5.getAuthenticationConsentRequired;
                    var4 = var4.bind(var5)();
                    var5 = null;
                    if(!(var5 == var4)) { _fun0021_ip = 133; continue _fun0021 }
 45:
                    var6 = var5 == var3;
                    var4 = undefined;
                    if(var6) { _fun0021_ip = 76; continue _fun0021 }
 54:
                    var6 = var3.body;
                    var7 = var5 == var6;
                    var4 = undefined;
                    if(var7) { _fun0021_ip = 76; continue _fun0021 }
 68:
                    var4 = var6.consent_required;
 76:
                    var8 = var5 == var4;
                    if(var8) { _fun0021_ip = 86; continue _fun0021 }
 83:
                    var8 = var4;
 86:
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot3;
                    var4 = 7;
                    var4 = var7[var4];
                    var7 = var6.bind(var1)(var4);
                    var6 = var7.dispatch;
                    var4 = {};
                    var9 = 'SET_CONSENT_REQUIRED';
                    var4['type'] = var9;
                    var4['consentRequired'] = var8;
                    var4 = var6.bind(var7)(var4);
 133:
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot3;
                    var4 = 7;
                    var4 = var7[var4];
                    var7 = var6.bind(var1)(var4);
                    var6 = var7.dispatch;
                    var4 = {};
                    var8 = 'SET_LOCATION_METADATA';
                    var4['type'] = var8;
                    var8 = var5 == var3;
                    var9 = undefined;
                    if(var8) { _fun0021_ip = 197; continue _fun0021 }
 177:
                    var8 = var3.body;
                    var10 = var5 == var8;
                    var9 = undefined;
                    if(var10) { _fun0021_ip = 197; continue _fun0021 }
 191:
                    var9 = var8.country_code;
 197:
                    var10 = var5 != var9;
                    var8 = undefined;
                    if(!var10) { _fun0021_ip = 209; continue _fun0021 }
 206:
                    var8 = var9;
 209:
                    var4['countryCode'] = var8;
                    var4 = var6.bind(var7)(var4);
                    _closure1_slot17 = var5;
                    var6 = var5 == var3;
                    var4 = undefined;
                    if(var6) { _fun0021_ip = 252; continue _fun0021 }
 232:
                    var6 = var3.body;
                    var7 = var5 == var6;
                    var4 = undefined;
                    if(var7) { _fun0021_ip = 252; continue _fun0021 }
 246:
                    var4 = var6.promotional_email_opt_in;
 252:
                    if(!(var5 != var4)) { _fun0021_ip = 311; continue _fun0021 }
 256:
                    var3 = var3.body;
                    var4 = var3.promotional_email_opt_in;
                    var3 = _closure1_slot6;
                    var2 = {};
                    var5 = var4.required;
                    var2['required'] = var5;
                    var5 = var4.pre_checked;
                    var2['checked'] = var5;
                    var4 = var4.pre_checked;
                    var2['preChecked'] = var4;
                    var2 = var3.bind(var1)(var2);
 311:
                    return var1;
                }
            };
            var1 = function() {
                var1 = global;
                var4 = var1.clearTimeout;
                var2 = _closure1_slot4;
                var1 = undefined;
                var2 = var4.bind(var1)(var2);
                var4 = _closure1_slot1;
                var5 = _closure1_slot3;
                var2 = 7;
                var2 = var5[var2];
                var5 = var4.bind(var1)(var2);
                var4 = var5.dispatch;
                var2 = {'type': 'SET_CONSENT_REQUIRED', 'consentRequired': true};
                var2 = var4.bind(var5)(var2);
                var2 = null;
                _closure1_slot17 = var2;
                return var1;
            };
            var1 = var4.bind(var5)(var3, var1);
            _closure1_slot17 = var1;
            _fun0020_ip = 156; continue _fun0020;
 152:
            var1 = _closure1_slot17;
 156:
            return var1;
        }
    };
    var4['getLocationMetadata'] = var8;
    var5 = function closeSuspendedUser() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot3;
        var1 = 7;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'CLOSE_SUSPENDED_USER';
        var2['type'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var4['closeSuspendedUser'] = var5;
    var5 = 18;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'actions/AuthenticationActionCreators.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['PasswordResetResult'] = var2;
    return var1;
})();