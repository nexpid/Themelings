// app/modules/phone/PhoneActionCreators.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var4 = native3;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var7;
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
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var7[var2];
    var2 = var4.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.PHONE_VERIFICATION_MODAL_KEY;
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.Endpoints;
    var _closure1_slot6 = var2;
    var2 = {};
    var4 = 'user_action_required';
    var2['USER_ACTION_REQUIRED'] = var4;
    var4 = 'user_settings_update';
    var2['USER_SETTINGS_UPDATE'] = var4;
    var4 = 'guild_phone_required';
    var2['GUILD_PHONE_REQUIRED'] = var4;
    var4 = 'mfa_phone_update';
    var2['MFA_PHONE_UPDATE'] = var4;
    var4 = 'contact_sync';
    var2['CONTACT_SYNC'] = var4;
    var4 = {};
    var8 = function setCountryCode(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 4;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'PHONE_SET_COUNTRY_CODE';
        var2['type'] = var5;
        var5 = arg1;
        var2['countryCode'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var4['setCountryCode'] = var8;
    var8 = function removePhone(arg1, arg2) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 5;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var3 = var1.HTTP;
        var2 = var3.del;
        var1 = {};
        var4 = _closure1_slot6;
        var4 = var4.PHONE;
        var1['url'] = var4;
        var4 = {};
        var5 = arg1;
        var4['password'] = var5;
        var5 = arg2;
        var4['change_phone_reason'] = var5;
        var1['body'] = var4;
        var4 = true;
        var1['oldFormErrors'] = var4;
        var4 = false;
        var1['rejectWithError'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var4['removePhone'] = var8;
    var8 = function resendCode(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = {};
            var2 = _closure1_slot4;
            var1 = var2.getFingerprint;
            var1 = var1.bind(var2)();
            var2 = null;
            var2 = var2 != var1;
            if(!var2) { _fun0001_ip = 36; continue _fun0001 }
 28:
            var3 = '';
            var2 = var3 !== var1;
 36:
            if(!var2) { _fun0001_ip = 45; continue _fun0001 }
 39:
            var4['X-Fingerprint'] = var1;
 45:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 5;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var3 = var1.HTTP;
            var2 = var3.post;
            var1 = {};
            var5 = _closure1_slot6;
            var5 = var5.RESEND_PHONE;
            var1['url'] = var5;
            var1['headers'] = var4;
            var4 = {};
            var5 = arg1;
            var4['phone'] = var5;
            var1['body'] = var4;
            var4 = false;
            var1['rejectWithError'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var4['resendCode'] = var8;
    var8 = function beginAddPhone(arg1, arg2) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 5;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var3 = var1.HTTP;
        var2 = var3.post;
        var1 = {};
        var4 = _closure1_slot6;
        var4 = var4.PHONE;
        var1['url'] = var4;
        var4 = {};
        var5 = arg1;
        var4['phone'] = var5;
        var5 = arg2;
        var4['change_phone_reason'] = var5;
        var1['body'] = var4;
        var4 = false;
        var1['rejectWithError'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var4['beginAddPhone'] = var8;
    var8 = function addPhone(arg1, arg2, arg3) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 5;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var3 = var1.HTTP;
        var2 = var3.post;
        var1 = {};
        var4 = _closure1_slot6;
        var4 = var4.PHONE;
        var1['url'] = var4;
        var4 = {};
        var5 = arg1;
        var4['phone_token'] = var5;
        var5 = arg2;
        var4['password'] = var5;
        var5 = arg3;
        var4['change_phone_reason'] = var5;
        var1['body'] = var4;
        var4 = true;
        var1['oldFormErrors'] = var4;
        var4 = false;
        var1['rejectWithError'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var4['addPhone'] = var8;
    var8 = function addPhoneWithoutPassword(arg1) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 5;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var3 = var1.HTTP;
        var2 = var3.post;
        var1 = {};
        var4 = _closure1_slot6;
        var4 = var4.PHONE_VERIFY_NO_PASSWORD;
        var1['url'] = var4;
        var4 = {};
        var5 = arg1;
        var4['code'] = var5;
        var1['body'] = var4;
        var4 = false;
        var1['rejectWithError'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var4['addPhoneWithoutPassword'] = var8;
    var8 = function beginReverifyPhone(arg1, arg2) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 5;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var3 = var1.HTTP;
        var2 = var3.post;
        var1 = {};
        var4 = _closure1_slot6;
        var4 = var4.PHONE_REVERIFY;
        var1['url'] = var4;
        var4 = {};
        var5 = arg1;
        var4['phone'] = var5;
        var5 = arg2;
        var4['change_phone_reason'] = var5;
        var1['body'] = var4;
        var4 = false;
        var1['rejectWithError'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var4['beginReverifyPhone'] = var8;
    var8 = function reverifyPhone(arg1, arg2, arg3) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 5;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var3 = var1.HTTP;
        var2 = var3.post;
        var1 = {};
        var4 = _closure1_slot6;
        var4 = var4.PHONE_REVERIFY;
        var1['url'] = var4;
        var4 = {};
        var5 = arg1;
        var4['phone_token'] = var5;
        var5 = arg2;
        var4['password'] = var5;
        var5 = arg3;
        var4['change_phone_reason'] = var5;
        var1['body'] = var4;
        var4 = true;
        var1['oldFormErrors'] = var4;
        var4 = false;
        var1['rejectWithError'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var4['reverifyPhone'] = var8;
    var8 = function validatePhoneForSupport(arg1) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 5;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var3 = var1.HTTP;
        var2 = var3.post;
        var1 = {};
        var4 = _closure1_slot6;
        var4 = var4.VERIFY_PHONE_FOR_TICKET;
        var1['url'] = var4;
        var4 = {};
        var5 = arg1;
        var4['token'] = var5;
        var1['body'] = var4;
        var4 = true;
        var1['oldFormErrors'] = var4;
        var4 = false;
        var1['rejectWithError'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var4['validatePhoneForSupport'] = var8;
    var5 = function verifyPhone(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var4 = arguments[2];
            var3 = arguments[3];
            var2 = arg1;
            var _closure2_slot0 = var2;
            var2 = arg2;
            var _closure2_slot1 = var2;
            var2 = undefined;
            if(!(var4 === var2)) { _fun0002_ip = 30; continue _fun0002 }
 28:
            var4 = true;
 30:
            var _closure2_slot2 = var4;
            if(!(var3 === var2)) { _fun0002_ip = 40; continue _fun0002 }
 38:
            var3 = false;
 40:
            var _closure2_slot3 = var3;
            var3 = _closure1_slot3;
            var1 = function* () {
                var1 = function* anon_0_() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0003_ip = 283; continue _fun0003 }
 10:
                        var8 = {};
                        var3 = _closure1_slot4;
                        var2 = var3.getFingerprint;
                        var2 = var2.bind(var3)();
                        var3 = null;
                        var3 = var3 != var2;
                        if(!var3) { _fun0003_ip = 46; continue _fun0003 }
 38:
                        var4 = '';
                        var3 = var4 !== var2;
 46:
                        if(!var3) { _fun0003_ip = 55; continue _fun0003 }
 49:
                        var8['X-Fingerprint'] = var2;
 55:
                        var2 = _closure2_slot3;
                        if(!var2) { _fun0003_ip = 75; continue _fun0003 }
 65:
                        var2 = '';
                        var8['authorization'] = var2;
 75:
                        var4 = _closure1_slot1;
                        var11 = _closure1_slot2;
                        var2 = 6;
                        var2 = var11[var2];
                        var5 = undefined;
                        var7 = var4.bind(var5)(var2);
                        var4 = var7.post;
                        var2 = {};
                        var9 = _closure1_slot6;
                        var9 = var9.VERIFY_PHONE;
                        var2['url'] = var9;
                        var2['headers'] = var8;
                        var8 = {};
                        var9 = _closure2_slot0;
                        var8['phone'] = var9;
                        var9 = _closure2_slot1;
                        var8['code'] = var9;
                        var2['body'] = var8;
                        var8 = true;
                        var2['oldFormErrors'] = var8;
                        var8 = {};
                        var10 = _closure1_slot0;
                        var9 = 7;
                        var9 = var11[var9];
                        var9 = var10.bind(var5)(var9);
                        var9 = var9.NetworkActionNames;
                        var9 = var9.USER_VERIFY_PHONE;
                        var8['event'] = var9;
                        var2['trackedActionData'] = var8;
                        var8 = false;
                        var2['rejectWithError'] = var8;
                        var2 = var4.bind(var7)(var2);
                        SaveGenerator(address=209);
 207:
                        return var2;
 209:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(var4) { _fun0003_ip = 280; continue _fun0003 }
 215:
                        var3 = _closure2_slot2;
                        if(!var3) { _fun0003_ip = 272; continue _fun0003 }
 222:
                        var4 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var3 = 4;
                        var3 = var7[var3];
                        var5 = var4.bind(var5)(var3);
                        var4 = var5.dispatch;
                        var3 = {};
                        var7 = 'MODAL_POP';
                        var3['type'] = var7;
                        var6 = _closure1_slot5;
                        var3['key'] = var6;
                        var3 = var4.bind(var5)(var3);
 272:
                        var3 = var2.body;
                        return var3;
 280:
                        return var2;
 283:
                        return var1;
                    }
                };
                return var1;
            };
            var1 = var3.bind(var2)(var1);
            var1 = var1.bind(var2)();
            return var1;
        }
    };
    var4['verifyPhone'] = var5;
    var5 = 8;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/phone/PhoneActionCreators.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['ChangePhoneReason'] = var2;
    return var1;
})();