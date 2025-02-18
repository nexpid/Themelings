// app/modules/phone/PhoneActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    tangon = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = tangon;
    var _closure1_slot2 = golfie;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, michal);
    entity = 0;
    michal = golfie[entity];
    entity = undefined;
    michal = tangon.bind(entity)(michal);
    var _closure1_slot3 = michal;
    michal = 1;
    michal = golfie[michal];
    michal = tangon.bind(entity)(michal);
    var _closure1_slot4 = michal;
    michal = 2;
    michal = golfie[michal];
    michal = oscard.bind(entity)(michal);
    michal = michal.PHONE_VERIFICATION_MODAL_KEY;
    var _closure1_slot5 = michal;
    michal = 3;
    michal = golfie[michal];
    michal = oscard.bind(entity)(michal);
    michal = michal.Endpoints;
    var _closure1_slot6 = michal;
    michal = {};
    tangon = 'user_action_required';
    michal['USER_ACTION_REQUIRED'] = tangon;
    tangon = 'user_settings_update';
    michal['USER_SETTINGS_UPDATE'] = tangon;
    tangon = 'guild_phone_required';
    michal['GUILD_PHONE_REQUIRED'] = tangon;
    tangon = 'mfa_phone_update';
    michal['MFA_PHONE_UPDATE'] = tangon;
    tangon = 'contact_sync';
    michal['CONTACT_SYNC'] = tangon;
    tangon = {};
    option = function(argFoo) { // Original name: setCountryCode
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 4;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'PHONE_SET_COUNTRY_CODE';
        michal['type'] = report;
        report = argFoo;
        michal['countryCode'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    tangon['setCountryCode'] = option;
    option = function(argFoo, argBar) { // Original name: removePhone
        zuuluu = _closure1_slot0;
        michal = _closure1_slot2;
        entity = 5;
        michal = michal[entity];
        entity = undefined;
        entity = zuuluu.bind(entity)(michal);
        zuuluu = entity.HTTP;
        michal = zuuluu.del;
        entity = {};
        tangon = _closure1_slot6;
        tangon = tangon.PHONE;
        entity['url'] = tangon;
        tangon = {};
        report = argFoo;
        tangon['password'] = report;
        report = argBar;
        tangon['change_phone_reason'] = report;
        entity['body'] = tangon;
        tangon = true;
        entity['oldFormErrors'] = tangon;
        tangon = false;
        entity['rejectWithError'] = tangon;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    tangon['removePhone'] = option;
    option = function(argFoo) { // Original name: resendCode
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = {};
            michal = _closure1_slot4;
            entity = michal.getFingerprint;
            entity = entity.bind(michal)();
            michal = null;
            michal = michal != entity;
            if(!michal) { _fun00002_ip = 36; continue _fun00001 }
 28:
            zuuluu = '';
            michal = zuuluu !== entity;
 36:
            if(!michal) { _fun00002_ip = 45; continue _fun00001 }
 39:
            tangon['X-Fingerprint'] = entity;
 45:
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 5;
            michal = michal[entity];
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            zuuluu = entity.HTTP;
            michal = zuuluu.post;
            entity = {};
            report = _closure1_slot6;
            report = report.RESEND_PHONE;
            entity['url'] = report;
            entity['headers'] = tangon;
            tangon = {};
            report = argFoo;
            tangon['phone'] = report;
            entity['body'] = tangon;
            tangon = false;
            entity['rejectWithError'] = tangon;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        }
    };
    tangon['resendCode'] = option;
    option = function(argFoo, argBar) { // Original name: beginAddPhone
        zuuluu = _closure1_slot0;
        michal = _closure1_slot2;
        entity = 5;
        michal = michal[entity];
        entity = undefined;
        entity = zuuluu.bind(entity)(michal);
        zuuluu = entity.HTTP;
        michal = zuuluu.post;
        entity = {};
        tangon = _closure1_slot6;
        tangon = tangon.PHONE;
        entity['url'] = tangon;
        tangon = {};
        report = argFoo;
        tangon['phone'] = report;
        report = argBar;
        tangon['change_phone_reason'] = report;
        entity['body'] = tangon;
        tangon = false;
        entity['rejectWithError'] = tangon;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    tangon['beginAddPhone'] = option;
    option = function(argFoo, argBar, argBaz) { // Original name: addPhone
        zuuluu = _closure1_slot0;
        michal = _closure1_slot2;
        entity = 5;
        michal = michal[entity];
        entity = undefined;
        entity = zuuluu.bind(entity)(michal);
        zuuluu = entity.HTTP;
        michal = zuuluu.post;
        entity = {};
        tangon = _closure1_slot6;
        tangon = tangon.PHONE;
        entity['url'] = tangon;
        tangon = {};
        report = argFoo;
        tangon['phone_token'] = report;
        report = argBar;
        tangon['password'] = report;
        report = argBaz;
        tangon['change_phone_reason'] = report;
        entity['body'] = tangon;
        tangon = true;
        entity['oldFormErrors'] = tangon;
        tangon = false;
        entity['rejectWithError'] = tangon;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    tangon['addPhone'] = option;
    option = function(argFoo) { // Original name: addPhoneWithoutPassword
        zuuluu = _closure1_slot0;
        michal = _closure1_slot2;
        entity = 5;
        michal = michal[entity];
        entity = undefined;
        entity = zuuluu.bind(entity)(michal);
        zuuluu = entity.HTTP;
        michal = zuuluu.post;
        entity = {};
        tangon = _closure1_slot6;
        tangon = tangon.PHONE_VERIFY_NO_PASSWORD;
        entity['url'] = tangon;
        tangon = {};
        report = argFoo;
        tangon['code'] = report;
        entity['body'] = tangon;
        tangon = false;
        entity['rejectWithError'] = tangon;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    tangon['addPhoneWithoutPassword'] = option;
    option = function(argFoo, argBar) { // Original name: beginReverifyPhone
        zuuluu = _closure1_slot0;
        michal = _closure1_slot2;
        entity = 5;
        michal = michal[entity];
        entity = undefined;
        entity = zuuluu.bind(entity)(michal);
        zuuluu = entity.HTTP;
        michal = zuuluu.post;
        entity = {};
        tangon = _closure1_slot6;
        tangon = tangon.PHONE_REVERIFY;
        entity['url'] = tangon;
        tangon = {};
        report = argFoo;
        tangon['phone'] = report;
        report = argBar;
        tangon['change_phone_reason'] = report;
        entity['body'] = tangon;
        tangon = false;
        entity['rejectWithError'] = tangon;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    tangon['beginReverifyPhone'] = option;
    option = function(argFoo, argBar, argBaz) { // Original name: reverifyPhone
        zuuluu = _closure1_slot0;
        michal = _closure1_slot2;
        entity = 5;
        michal = michal[entity];
        entity = undefined;
        entity = zuuluu.bind(entity)(michal);
        zuuluu = entity.HTTP;
        michal = zuuluu.post;
        entity = {};
        tangon = _closure1_slot6;
        tangon = tangon.PHONE_REVERIFY;
        entity['url'] = tangon;
        tangon = {};
        report = argFoo;
        tangon['phone_token'] = report;
        report = argBar;
        tangon['password'] = report;
        report = argBaz;
        tangon['change_phone_reason'] = report;
        entity['body'] = tangon;
        tangon = true;
        entity['oldFormErrors'] = tangon;
        tangon = false;
        entity['rejectWithError'] = tangon;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    tangon['reverifyPhone'] = option;
    option = function(argFoo) { // Original name: validatePhoneForSupport
        zuuluu = _closure1_slot0;
        michal = _closure1_slot2;
        entity = 5;
        michal = michal[entity];
        entity = undefined;
        entity = zuuluu.bind(entity)(michal);
        zuuluu = entity.HTTP;
        michal = zuuluu.post;
        entity = {};
        tangon = _closure1_slot6;
        tangon = tangon.VERIFY_PHONE_FOR_TICKET;
        entity['url'] = tangon;
        tangon = {};
        report = argFoo;
        tangon['token'] = report;
        entity['body'] = tangon;
        tangon = true;
        entity['oldFormErrors'] = tangon;
        tangon = false;
        entity['rejectWithError'] = tangon;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    tangon['validatePhoneForSupport'] = option;
    report = function(argFoo, argBar) { // Original name: verifyPhone
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            tangon = arguments[2];
            zuuluu = arguments[3];
            michal = argFoo;
            var _closure2_slot0 = michal;
            michal = argBar;
            var _closure2_slot1 = michal;
            michal = undefined;
            if(!(tangon === michal)) { _fun00004_ip = 30; continue _fun00003 }
 28:
            tangon = true;
 30:
            var _closure2_slot2 = tangon;
            if(!(zuuluu === michal)) { _fun00004_ip = 40; continue _fun00003 }
 38:
            zuuluu = false;
 40:
            var _closure2_slot3 = zuuluu;
            zuuluu = _closure1_slot3;
            entity = function* () {
                entity = function* () { // Original name: ?anon_0_
                    _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(michal) { _fun00006_ip = 283; continue _fun00005 }
 10:
                        option = {};
                        zuuluu = _closure1_slot4;
                        michal = zuuluu.getFingerprint;
                        michal = michal.bind(zuuluu)();
                        zuuluu = null;
                        zuuluu = zuuluu != michal;
                        if(!zuuluu) { _fun00006_ip = 46; continue _fun00005 }
 38:
                        tangon = '';
                        zuuluu = tangon !== michal;
 46:
                        if(!zuuluu) { _fun00006_ip = 55; continue _fun00005 }
 49:
                        option['X-Fingerprint'] = michal;
 55:
                        michal = _closure2_slot3;
                        if(!michal) { _fun00006_ip = 75; continue _fun00005 }
 65:
                        michal = '';
                        option['authorization'] = michal;
 75:
                        tangon = _closure1_slot1;
                        yankee = _closure1_slot2;
                        michal = 6;
                        michal = yankee[michal];
                        report = undefined;
                        golfie = tangon.bind(report)(michal);
                        tangon = golfie.post;
                        michal = {};
                        verify = _closure1_slot6;
                        verify = verify.VERIFY_PHONE;
                        michal['url'] = verify;
                        michal['headers'] = option;
                        option = {};
                        verify = _closure2_slot0;
                        option['phone'] = verify;
                        verify = _closure2_slot1;
                        option['code'] = verify;
                        michal['body'] = option;
                        option = true;
                        michal['oldFormErrors'] = option;
                        option = {};
                        offset = _closure1_slot0;
                        verify = 7;
                        verify = yankee[verify];
                        verify = offset.bind(report)(verify);
                        verify = verify.NetworkActionNames;
                        verify = verify.USER_VERIFY_PHONE;
                        option['event'] = verify;
                        michal['trackedActionData'] = option;
                        option = false;
                        michal['rejectWithError'] = option;
                        michal = tangon.bind(golfie)(michal);
                        SaveGenerator(address=209);
 207:
                        return michal;
 209:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(tangon) { _fun00006_ip = 280; continue _fun00005 }
 215:
                        zuuluu = _closure2_slot2;
                        if(!zuuluu) { _fun00006_ip = 272; continue _fun00005 }
 222:
                        tangon = _closure1_slot1;
                        golfie = _closure1_slot2;
                        zuuluu = 4;
                        zuuluu = golfie[zuuluu];
                        report = tangon.bind(report)(zuuluu);
                        tangon = report.dispatch;
                        zuuluu = {};
                        golfie = 'MODAL_POP';
                        zuuluu['type'] = golfie;
                        oscard = _closure1_slot5;
                        zuuluu['key'] = oscard;
                        zuuluu = tangon.bind(report)(zuuluu);
 272:
                        zuuluu = michal.body;
                        return zuuluu;
 280:
                        return michal;
 283:
                        return entity;
                    }
                };
                return entity;
            };
            entity = zuuluu.bind(michal)(entity);
            entity = entity.bind(michal)();
            return entity;
        }
    };
    tangon['verifyPhone'] = report;
    report = 8;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/phone/PhoneActionCreators.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['default'] = tangon;
    zuuluu['ChangePhoneReason'] = michal;
    return entity;
})();