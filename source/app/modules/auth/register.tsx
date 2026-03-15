// app/modules/auth/register.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var1 = metroImportAll;
    var _closure1_slot2 = var1;
    var _closure1_slot3 = var7;
    var1 = function _scorePassword() {
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
                    var7 = arg1;
case 4: // try_start_0
                    var3 = _closure1_slot1;
                    var9 = _closure1_slot3;
                    var2 = 6;
                    var2 = var9[var2];
                    var8 = undefined;
                    var4 = var3.bind(var8)(var2);
                    var3 = var4.post;
                    var2 = {};
                    var5 = _closure1_slot8;
                    var5 = var5.SCORE_PASSWORD;
                    var2['url'] = var5;
                    var5 = {};
                    var5['password'] = var7;
                    var2['body'] = var5;
                    var5 = {};
                    var7 = _closure1_slot0;
                    var6 = 7;
                    var6 = var9[var6];
                    var6 = var7.bind(var8)(var6);
                    var6 = var6.NetworkActionNames;
                    var6 = var6.PASSWORD_VALIDATE;
                    var5['event'] = var6;
                    var2['trackedActionData'] = var5;
                    var5 = false;
                    var2['rejectWithError'] = var5;
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=126);
case 5:
                    return var2;
case 6:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 7; continue _fun0001 }
case 8:
                    var3 = var2.body;
case 9: // try_end0
                    return var3;
case 7:
                    return var2;
case 10: // catch_target0
                    CatchBlockStart(arg_register=3);
                    var5 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var2 = 8;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var5.bind(var2)(var3);
                    var3 = var2.prototype;
                    var3 = Object.create(var3, {constructor: {value: var2}});
                    var11 = var3;
                    var10 = var4;
                    var2 = new var11[var2](var10, var9);
                    var2 = var2 instanceof Object ? var2 : var3;
                    throw var2;
case 2:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot11 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot11 = var1;
    var1 = function _registerPhone() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 11; continue _fun0002 }
case 3:
                    var2 = arg1;
                    var10 = var2.phone;
                    var6 = undefined;
                    SaveGenerator(address=25);
case 12:
                    return var6;
case 13:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0002_ip = 14; continue _fun0002 }
case 15: // try_start_0
                    var5 = _closure1_slot1;
                    var11 = _closure1_slot3;
                    var4 = 6;
                    var4 = var11[var4];
                    var7 = var5.bind(var6)(var4);
                    var5 = var7.post;
                    var4 = {};
                    var8 = _closure1_slot8;
                    var8 = var8.REGISTER_PHONE;
                    var4['url'] = var8;
                    var8 = {};
                    var8['phone'] = var10;
                    var4['body'] = var8;
                    var8 = {};
                    var10 = _closure1_slot0;
                    var9 = 7;
                    var9 = var11[var9];
                    var9 = var10.bind(var6)(var9);
                    var9 = var9.NetworkActionNames;
                    var9 = var9.USER_REGISTER_PHONE;
                    var8['event'] = var9;
                    var4['trackedActionData'] = var8;
                    var8 = false;
                    var4['rejectWithError'] = var8;
                    var4 = var5.bind(var7)(var4);
                    SaveGenerator(address=145);
case 10:
                    return var4;
case 16:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(var5) { _fun0002_ip = 17; continue _fun0002 }
case 18: // try_end0
                    return var4;
case 17:
                    return var4;
case 19: // catch_target0
                    CatchBlockStart(arg_register=6);
                    var3 = var7;
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot3;
                    var5 = 9;
                    var5 = var9[var5];
                    var5 = var8.bind(var6)(var5);
                    var5 = var5.CaptchaCancelError;
                    var5 = var7 instanceof var5;
                    if(var5) { _fun0002_ip = 20; continue _fun0002 }
case 21:
                    var5 = _closure1_slot1;
                    var7 = _closure1_slot3;
                    var4 = 8;
                    var4 = var7[var4];
                    var6 = var5.bind(var6)(var4);
                    var12 = var3;
                    var5 = var6.prototype;
                    var5 = Object.create(var5, {constructor: {value: var6}});
                    var13 = var5;
                    var4 = new var13[var6](var12, var11);
                    var4 = var4 instanceof Object ? var4 : var5;
                    throw var4;
case 20:
                    throw var3;
case 14:
                    return var2;
case 11:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot12 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot12 = var1;
    var2 = function registerFull(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var2 = arg1;
            var20 = var2.email;
            var14 = var2.phoneToken;
            var19 = var2.username;
            var18 = var2.globalName;
            var15 = var2.consent;
            var16 = var2.password;
            var12 = var2.guildTemplateCode;
            var17 = var2.birthday;
            var11 = var2.invite;
            var7 = undefined;
            if(!(var11 === var7)) { _fun0003_ip = 22; continue _fun0003 }
case 23:
            var11 = null;
case 22:
            var13 = var2.giftCodeSKUId;
            if(!(var13 === var7)) { _fun0003_ip = 24; continue _fun0003 }
case 25:
            var13 = null;
case 24:
            var8 = var2.promoEmailConsent;
            if(!(var8 === var7)) { _fun0003_ip = 26; continue _fun0003 }
case 27:
            var8 = null;
case 26:
            var10 = var2.usedUsernameSuggestion;
            if(!(var10 === var7)) { _fun0003_ip = 28; continue _fun0003 }
case 29:
            var10 = null;
case 28:
            var3 = _closure1_slot1;
            var4 = _closure1_slot3;
            var2 = 10;
            var2 = var4[var2];
            var4 = var3.bind(var7)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var5 = 'REGISTER';
            var2['type'] = var5;
            var2 = var3.bind(var4)(var2);
            var9 = null;
            if(!(var9 != var17)) { _fun0003_ip = 30; continue _fun0003 }
case 31:
            var3 = _closure1_slot1;
            var5 = _closure1_slot3;
            var2 = 11;
            var2 = var5[var2];
            var4 = var3.bind(var7)(var2);
            var2 = _closure1_slot7;
            var2 = var2.REGISTER;
            var2 = var4.bind(var7)(var17, var2);
            var4 = 5;
            var2 = var5[var4];
            var23 = var3.bind(var7)(var2);
            var22 = var23.track;
            var2 = _closure1_slot6;
            var21 = var2.AGE_GATE_ACTION;
            var2 = {};
            var24 = _closure1_slot10;
            var24 = var24.REGISTER;
            var2['source'] = var24;
            var24 = _closure1_slot9;
            var24 = var24.AGE_GATE_SUBMITTED;
            var2['action'] = var24;
            var2 = var22.bind(var23)(var21, var2);
            var2 = 4;
            var2 = var5[var2];
            var2 = var3.bind(var7)(var2);
            var5 = var2.bind(var7)();
            var3 = var5.diff;
            var2 = 'years';
            var22 = var3.bind(var5)(var17, var2);
            var2 = 13;
            if(!(!(var22 < var2))) { _fun0003_ip = 30; continue _fun0003 }
case 32:
            if(!(var22 >= var2)) { _fun0003_ip = 33; continue _fun0003 }
case 34:
            var2 = 17;
            var2 = var22 <= var2;
            var21 = '13-17';
            if(var2) { _fun0003_ip = 35; continue _fun0003 }
case 33:
            var2 = 18;
            var3 = var22 >= var2;
            var5 = '23+';
            var2 = var5;
            if(!var3) { _fun0003_ip = 36; continue _fun0003 }
case 37:
            var3 = 22;
            var3 = var22 <= var3;
            var2 = var5;
            if(!var3) { _fun0003_ip = 36; continue _fun0003 }
case 38:
            var2 = '18-22';
case 36:
            var21 = var2;
case 35:
            var3 = _closure1_slot1;
            var2 = _closure1_slot3;
            var2 = var2[var4];
            var5 = var3.bind(var7)(var2);
            var4 = var5.track;
            var2 = _closure1_slot6;
            var3 = var2.USER_AGE_SUBMITTED;
            var2 = {};
            var2['age_bucket'] = var21;
            var2 = var4.bind(var5)(var3, var2);
case 30:
            var3 = _closure1_slot1;
            var4 = _closure1_slot3;
            var2 = 6;
            var2 = var4[var2];
            var4 = var3.bind(var7)(var2);
            var3 = var4.post;
            var2 = {};
            var5 = _closure1_slot8;
            var5 = var5.REGISTER;
            var2['url'] = var5;
            var5 = {};
            var22 = _closure1_slot5;
            var21 = var22.getFingerprint;
            var21 = var21.bind(var22)();
            var5['fingerprint'] = var21;
            var5['email'] = var20;
            var5['username'] = var19;
            var5['global_name'] = var18;
            var5['password'] = var16;
            var5['invite'] = var11;
            var5['consent'] = var15;
            var5['phone_token'] = var14;
            var15 = var9 == var17;
            var14 = undefined;
            if(var15) { _fun0003_ip = 39; continue _fun0003 }
case 40:
            var16 = var17.format;
            var15 = 'YYYY-MM-DD';
            var14 = var16.bind(var17)(var15);
case 39:
            var5['date_of_birth'] = var14;
            var5['gift_code_sku_id'] = var13;
            var5['guild_template_code'] = var12;
            var13 = var9 == var8;
            var12 = undefined;
            if(var13) { _fun0003_ip = 41; continue _fun0003 }
case 42:
            var12 = var8.checked;
case 41:
            var5['promotional_email_opt_in'] = var12;
            var2['body'] = var5;
            var5 = {};
            var12 = _closure1_slot0;
            var13 = _closure1_slot3;
            var6 = 7;
            var6 = var13[var6];
            var6 = var12.bind(var7)(var6);
            var6 = var6.NetworkActionNames;
            var6 = var6.USER_REGISTER;
            var5['event'] = var6;
            var6 = {};
            var6['invite_code'] = var11;
            var6['used_username_suggestion'] = var10;
            var11 = var9 == var8;
            var10 = undefined;
            if(var11) { _fun0003_ip = 43; continue _fun0003 }
case 44:
            var10 = var8.checked;
case 43:
            var6['promotional_email_opt_in'] = var10;
            var9 = var9 == var8;
            var7 = undefined;
            if(var9) { _fun0003_ip = 45; continue _fun0003 }
case 46:
            var7 = var8.preChecked;
case 45:
            var6['promotional_email_pre_checked'] = var7;
            var7 = true;
            var6['was_unique_username'] = var7;
            var5['properties'] = var6;
            var2['trackedActionData'] = var5;
            var5 = false;
            var2['rejectWithError'] = var5;
            var4 = var3.bind(var4)(var2);
            var3 = var4.then;
            var2 = function(arg1) {
                var3 = _closure1_slot1;
                var4 = _closure1_slot3;
                var1 = 10;
                var2 = var4[var1];
                var1 = undefined;
                var7 = var3.bind(var1)(var2);
                var5 = var7.dispatch;
                var2 = {};
                var8 = 'REGISTER_SUCCESS';
                var2['type'] = var8;
                var8 = arg1;
                var8 = var8.body;
                var8 = var8.token;
                var2['token'] = var8;
                var2 = var5.bind(var7)(var2);
                var2 = 5;
                var2 = var4[var2];
                var5 = var3.bind(var1)(var2);
                var4 = var5.track;
                var2 = _closure1_slot6;
                var3 = var2.AGE_GATE_ACTION;
                var2 = {};
                var7 = _closure1_slot10;
                var7 = var7.REGISTER;
                var2['source'] = var7;
                var6 = _closure1_slot9;
                var6 = var6.AGE_GATE_SUCCESS;
                var2['action'] = var6;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var1 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = arg1;
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var2 = 9;
                    var2 = var5[var2];
                    var6 = undefined;
                    var2 = var4.bind(var6)(var2);
                    var2 = var2.CaptchaCancelError;
                    var2 = var1 instanceof var2;
                    if(var2) { _fun0004_ip = 47; continue _fun0004 }
case 48:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot3;
                    var2 = 8;
                    var2 = var5[var2];
                    var2 = var4.bind(var6)(var2);
                    var4 = var2.prototype;
                    var4 = Object.create(var4, {constructor: {value: var2}});
                    var12 = var4;
                    var11 = var1;
                    var2 = new var12[var2](var11, var10);
                    var2 = var2 instanceof Object ? var2 : var4;
                    var4 = var2.getFieldErrors;
                    var8 = 'date_of_birth';
                    var5 = var4.bind(var2)(var8);
                    var4 = null;
                    if(!(var4 != var5)) { _fun0004_ip = 49; continue _fun0004 }
case 50:
                    var5 = _closure1_slot2;
                    var7 = _closure1_slot3;
                    var4 = 12;
                    var4 = var7[var4];
                    var7 = var5.bind(var6)(var4);
                    var5 = var7.preventUnderageRegistration;
                    var4 = _closure1_slot10;
                    var4 = var4.REGISTER;
                    var4 = var5.bind(var7)(var4);
case 49:
                    var5 = _closure1_slot1;
                    var7 = _closure1_slot3;
                    var4 = 5;
                    var4 = var7[var4];
                    var6 = var5.bind(var6)(var4);
                    var5 = var6.track;
                    var3 = _closure1_slot6;
                    var4 = var3.REGISTER_SUBMIT_ERRORED;
                    var3 = {};
                    var7 = true;
                    var3['is_unique_username_registration'] = var7;
                    var9 = var2.getFirstFieldErrorMessage;
                    var7 = 'email';
                    var7 = var9.bind(var2)(var7);
                    var3['email_error_reason'] = var7;
                    var9 = var2.getFirstFieldErrorMessage;
                    var7 = 'phone_token';
                    var7 = var9.bind(var2)(var7);
                    var3['phone_error_reason'] = var7;
                    var9 = var2.getFirstFieldErrorMessage;
                    var7 = 'password';
                    var7 = var9.bind(var2)(var7);
                    var3['password_error_reason'] = var7;
                    var9 = var2.getFirstFieldErrorMessage;
                    var7 = 'username';
                    var7 = var9.bind(var2)(var7);
                    var3['username_error_reason'] = var7;
                    var9 = var2.getFirstFieldErrorMessage;
                    var7 = 'global_name';
                    var7 = var9.bind(var2)(var7);
                    var3['global_name_error_reason'] = var7;
                    var7 = var2.getFirstFieldErrorMessage;
                    var7 = var7.bind(var2)(var8);
                    var3['date_of_birth_error_reason'] = var7;
                    var8 = var2.getFirstFieldErrorMessage;
                    var7 = 'promotional_email_opt_in';
                    var7 = var8.bind(var2)(var7);
                    var3['promotional_email_opt_in_error_reason'] = var7;
                    var8 = var2.getFirstFieldErrorMessage;
                    var7 = 'fingerprint';
                    var7 = var8.bind(var2)(var7);
                    var3['fingerprint_error_reason'] = var7;
                    var8 = var2.getFirstFieldErrorMessage;
                    var7 = 'invite';
                    var7 = var8.bind(var2)(var7);
                    var3['invite_error_reason'] = var7;
                    var8 = var2.getFirstFieldErrorMessage;
                    var7 = 'gift_code_sku_id';
                    var7 = var8.bind(var2)(var7);
                    var3['gift_code_sku_id_error_reason'] = var7;
                    var8 = var2.getFirstFieldErrorMessage;
                    var7 = 'guild_template_code';
                    var7 = var8.bind(var2)(var7);
                    var3['guild_template_code_error_reason'] = var7;
                    var8 = var2.getFirstFieldErrorMessage;
                    var7 = 'consent';
                    var7 = var8.bind(var2)(var7);
                    var3['consent_error_reason'] = var7;
                    var7 = var2.getAnyErrorMessage;
                    var7 = var7.bind(var2)();
                    var3['generic_error_reason'] = var7;
                    var3 = var5.bind(var6)(var4, var3);
                    throw var2;
case 47:
                    throw var1;
                }
            };
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot13 = var2;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.AnalyticEvents;
    var _closure1_slot6 = var8;
    var8 = var5.AnalyticsSections;
    var _closure1_slot7 = var8;
    var5 = var5.Endpoints;
    var _closure1_slot8 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.AgeGateAnalyticAction;
    var _closure1_slot9 = var8;
    var5 = var5.AgeGateSource;
    var _closure1_slot10 = var5;
    var5 = 13;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/auth/register.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function register(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var4 = arg1;
            var6 = var4.invite;
            var3 = undefined;
            if(!(var6 === var3)) { _fun0005_ip = 51; continue _fun0005 }
case 52:
            var6 = null;
case 51:
            var5 = var4.giftCodeSKUId;
            if(!(var5 === var3)) { _fun0005_ip = 53; continue _fun0005 }
case 54:
            var5 = null;
case 53:
            var1 = null;
            var2 = Object.create(var1);
            var1 = 0;
            var2['invite'] = var1;
            var2['giftCodeSKUId'] = var1;
            var10 = {};
            var9 = var4;
            var8 = var2;
            var9 = copyDataProperties(var10, var9, var8);
            var2 = _closure1_slot13;
            var1 = {};
            var10 = var1;
            var4 = copyDataProperties(var10, var9);
            var4 = 'invite';
            var1[var4] = var6;
            var4 = 'giftCodeSKUId';
            var1[var4] = var5;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['default'] = var5;
    var5 = function scorePassword() {
        var1 = undefined;
        var4 = _closure1_slot11;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['scorePassword'] = var5;
    var4 = function registerPhone() {
        var1 = undefined;
        var4 = _closure1_slot12;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['registerPhone'] = var4;
    var3['registerFull'] = var2;
    return var1;
})();