// app/modules/auth/RegistrationConstants.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    option = argBar;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = option;
    var _closure1_slot1 = golfie;
    entity = global;
    oscard = entity.Object;
    report = oscard.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = report.bind(oscard)(zuuluu, entity, tangon);
    oscard = {};
    entity = 'viewed';
    oscard['VIEWED'] = entity;
    entity = 'submitted';
    oscard['SUBMITTED'] = entity;
    entity = 'resend_code';
    oscard['RESEND_CODE'] = entity;
    entity = 'input_error';
    oscard['INPUT_ERROR'] = entity;
    entity = 'response_error';
    oscard['RESPONSE_ERROR'] = entity;
    entity = 'success';
    oscard['SUCCESS'] = entity;
    report = {};
    entity = 'identity';
    report['IDENTITY'] = entity;
    entity = 'display_name';
    report['DISPLAY_NAME'] = entity;
    entity = 'account_information';
    report['ACCOUNT_INFORMATION'] = entity;
    entity = 'full';
    report['FULL'] = entity;
    entity = 'age_gate';
    report['AGE_GATE'] = entity;
    entity = 'invite';
    report['INVITE'] = entity;
    entity = 'sms_verify';
    report['SMS_VERIFY'] = entity;
    tangon = {};
    entity = 'Account Identity';
    tangon['ACCOUNT_IDENTITY'] = entity;
    entity = 'Account Display Name';
    tangon['ACCOUNT_DISPLAY_NAME'] = entity;
    entity = 'Account Information';
    tangon['ACCOUNT_INFORMATION'] = entity;
    entity = 'Age Gate';
    tangon['AGE_GATE'] = entity;
    entity = 'Age Gate Underage';
    tangon['AGE_GATE_UNDERAGE'] = entity;
    entity = 'Phone Verification';
    tangon['PHONE_VERIFICATION'] = entity;
    entity = 'Register';
    tangon['REGISTER'] = entity;
    entity = 'Captcha';
    tangon['CAPTCHA'] = entity;
    var _closure1_slot2 = tangon;
    entity = 1;
    golfie = golfie[entity];
    entity = undefined;
    verify = option.bind(entity)(golfie);
    option = verify.fileFinishedImporting;
    golfie = 'modules/auth/RegistrationConstants.tsx';
    golfie = option.bind(verify)(golfie);
    zuuluu['RegistrationTransitionActionTypes'] = oscard;
    zuuluu['RegistrationSteps'] = report;
    zuuluu['RegisterTransitionSteps'] = tangon;
    michal = function(argFoo) { // Original name: authStateToRegisterTransitionStep
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            report = _closure1_slot0;
            michal = _closure1_slot1;
            oscard = 0;
            zuuluu = michal[oscard];
            michal = undefined;
            zuuluu = report.bind(michal)(zuuluu);
            zuuluu = zuuluu.AuthStates;
            zuuluu = zuuluu.REGISTER_IDENTITY;
            if(!(zuuluu !== tangon)) { _fun00002_ip = 231; continue _fun00001 }
 46:
            report = _closure1_slot0;
            zuuluu = _closure1_slot1;
            zuuluu = zuuluu[oscard];
            zuuluu = report.bind(michal)(zuuluu);
            zuuluu = zuuluu.AuthStates;
            zuuluu = zuuluu.REGISTER_DISPLAY_NAME;
            if(!(zuuluu !== tangon)) { _fun00002_ip = 219; continue _fun00001 }
 82:
            report = _closure1_slot0;
            zuuluu = _closure1_slot1;
            zuuluu = zuuluu[oscard];
            zuuluu = report.bind(michal)(zuuluu);
            zuuluu = zuuluu.AuthStates;
            zuuluu = zuuluu.REGISTER_ACCOUNT_INFORMATION;
            if(!(zuuluu !== tangon)) { _fun00002_ip = 207; continue _fun00001 }
 115:
            report = _closure1_slot0;
            zuuluu = _closure1_slot1;
            zuuluu = zuuluu[oscard];
            zuuluu = report.bind(michal)(zuuluu);
            zuuluu = zuuluu.AuthStates;
            zuuluu = zuuluu.AGE_GATE;
            if(!(zuuluu !== tangon)) { _fun00002_ip = 195; continue _fun00001 }
 148:
            report = _closure1_slot0;
            zuuluu = _closure1_slot1;
            zuuluu = zuuluu[oscard];
            zuuluu = report.bind(michal)(zuuluu);
            zuuluu = zuuluu.AuthStates;
            zuuluu = zuuluu.VERIFY_PHONE;
            if(!(zuuluu !== tangon)) { _fun00002_ip = 183; continue _fun00001 }
 181:
            return michal;
 183:
            michal = _closure1_slot2;
            michal = michal.PHONE_VERIFICATION;
            return michal;
 195:
            michal = _closure1_slot2;
            michal = michal.AGE_GATE;
            return michal;
 207:
            michal = _closure1_slot2;
            michal = michal.ACCOUNT_INFORMATION;
            return michal;
 219:
            michal = _closure1_slot2;
            michal = michal.ACCOUNT_DISPLAY_NAME;
            return michal;
 231:
            entity = _closure1_slot2;
            entity = entity.ACCOUNT_IDENTITY;
            return entity;
        }
    };
    zuuluu['authStateToRegisterTransitionStep'] = michal;
    return entity;
})();