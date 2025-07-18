// app/modules/auth/RegistrationConstants.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var8 = native2;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var7;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var4);
    var6 = {};
    var1 = 'viewed';
    var6['VIEWED'] = var1;
    var1 = 'submitted';
    var6['SUBMITTED'] = var1;
    var1 = 'resend_code';
    var6['RESEND_CODE'] = var1;
    var1 = 'input_error';
    var6['INPUT_ERROR'] = var1;
    var1 = 'response_error';
    var6['RESPONSE_ERROR'] = var1;
    var1 = 'success';
    var6['SUCCESS'] = var1;
    var5 = {};
    var1 = 'identity';
    var5['IDENTITY'] = var1;
    var1 = 'display_name';
    var5['DISPLAY_NAME'] = var1;
    var1 = 'account_information';
    var5['ACCOUNT_INFORMATION'] = var1;
    var1 = 'username';
    var5['USERNAME'] = var1;
    var1 = 'password';
    var5['PASSWORD'] = var1;
    var1 = 'identity_and_password';
    var5['IDENTITY_AND_PASSWORD'] = var1;
    var1 = 'full';
    var5['FULL'] = var1;
    var1 = 'age_gate';
    var5['AGE_GATE'] = var1;
    var1 = 'invite';
    var5['INVITE'] = var1;
    var1 = 'sms_verify';
    var5['SMS_VERIFY'] = var1;
    var4 = {};
    var1 = 'Account Identity';
    var4['ACCOUNT_IDENTITY'] = var1;
    var1 = 'Account Display Name';
    var4['ACCOUNT_DISPLAY_NAME'] = var1;
    var1 = 'Account Information';
    var4['ACCOUNT_INFORMATION'] = var1;
    var1 = 'Age Gate';
    var4['AGE_GATE'] = var1;
    var1 = 'Age Gate Underage';
    var4['AGE_GATE_UNDERAGE'] = var1;
    var1 = 'Phone Verification';
    var4['PHONE_VERIFICATION'] = var1;
    var1 = 'Register';
    var4['REGISTER'] = var1;
    var1 = 'Captcha';
    var4['CAPTCHA'] = var1;
    var1 = 'Username';
    var4['USERNAME'] = var1;
    var1 = 'Password';
    var4['PASSWORD'] = var1;
    var1 = 'Account Identity and Password';
    var4['ACCOUNT_IDENTITY_AND_PASSWORD'] = var1;
    var _closure1_slot2 = var4;
    var1 = 1;
    var7 = var7[var1];
    var1 = undefined;
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/auth/RegistrationConstants.tsx';
    var7 = var8.bind(var9)(var7);
    var3['RegistrationTransitionActionTypes'] = var6;
    var3['RegistrationSteps'] = var5;
    var3['RegisterTransitionSteps'] = var4;
    var2 = function authStateToRegisterTransitionStep(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arg1;
            var5 = _closure1_slot0;
            var2 = _closure1_slot1;
            var6 = 0;
            var3 = var2[var6];
            var2 = undefined;
            var3 = var5.bind(var2)(var3);
            var3 = var3.AuthStates;
            var3 = var3.REGISTER_IDENTITY;
            if(!(var3 !== var4)) { _fun0001_ip = 375; continue _fun0001 }
 46:
            var5 = _closure1_slot0;
            var3 = _closure1_slot1;
            var3 = var3[var6];
            var3 = var5.bind(var2)(var3);
            var3 = var3.AuthStates;
            var3 = var3.REGISTER_DISPLAY_NAME;
            if(!(var3 !== var4)) { _fun0001_ip = 363; continue _fun0001 }
 82:
            var5 = _closure1_slot0;
            var3 = _closure1_slot1;
            var3 = var3[var6];
            var3 = var5.bind(var2)(var3);
            var3 = var3.AuthStates;
            var3 = var3.REGISTER_ACCOUNT_INFORMATION;
            if(!(var3 !== var4)) { _fun0001_ip = 351; continue _fun0001 }
 118:
            var5 = _closure1_slot0;
            var3 = _closure1_slot1;
            var3 = var3[var6];
            var3 = var5.bind(var2)(var3);
            var3 = var3.AuthStates;
            var3 = var3.AGE_GATE;
            if(!(var3 !== var4)) { _fun0001_ip = 339; continue _fun0001 }
 154:
            var5 = _closure1_slot0;
            var3 = _closure1_slot1;
            var3 = var3[var6];
            var3 = var5.bind(var2)(var3);
            var3 = var3.AuthStates;
            var3 = var3.VERIFY_PHONE;
            if(!(var3 !== var4)) { _fun0001_ip = 327; continue _fun0001 }
 190:
            var5 = _closure1_slot0;
            var3 = _closure1_slot1;
            var3 = var3[var6];
            var3 = var5.bind(var2)(var3);
            var3 = var3.AuthStates;
            var3 = var3.REGISTER_USERNAME;
            if(!(var3 !== var4)) { _fun0001_ip = 315; continue _fun0001 }
 223:
            var5 = _closure1_slot0;
            var3 = _closure1_slot1;
            var3 = var3[var6];
            var3 = var5.bind(var2)(var3);
            var3 = var3.AuthStates;
            var3 = var3.REGISTER_PASSWORD;
            if(!(var3 !== var4)) { _fun0001_ip = 303; continue _fun0001 }
 256:
            var5 = _closure1_slot0;
            var3 = _closure1_slot1;
            var3 = var3[var6];
            var3 = var5.bind(var2)(var3);
            var3 = var3.AuthStates;
            var3 = var3.REGISTER_IDENTITY_AND_PASSWORD;
            if(!(var3 !== var4)) { _fun0001_ip = 291; continue _fun0001 }
 289:
            return var2;
 291:
            var2 = _closure1_slot2;
            var2 = var2.ACCOUNT_IDENTITY_AND_PASSWORD;
            return var2;
 303:
            var2 = _closure1_slot2;
            var2 = var2.PASSWORD;
            return var2;
 315:
            var2 = _closure1_slot2;
            var2 = var2.USERNAME;
            return var2;
 327:
            var2 = _closure1_slot2;
            var2 = var2.PHONE_VERIFICATION;
            return var2;
 339:
            var2 = _closure1_slot2;
            var2 = var2.AGE_GATE;
            return var2;
 351:
            var2 = _closure1_slot2;
            var2 = var2.ACCOUNT_INFORMATION;
            return var2;
 363:
            var2 = _closure1_slot2;
            var2 = var2.ACCOUNT_DISPLAY_NAME;
            return var2;
 375:
            var1 = _closure1_slot2;
            var1 = var1.ACCOUNT_IDENTITY;
            return var1;
        }
    };
    var3['authStateToRegisterTransitionStep'] = var2;
    return var1;
})();