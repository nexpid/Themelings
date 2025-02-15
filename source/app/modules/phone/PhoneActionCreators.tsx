// app/modules/phone/PhoneActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    tango = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = tango;
    var _closure1_slot2 = golf;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, mike);
    entity = 0;
    mike = golf[entity];
    entity = undefined;
    mike = tango.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = 1;
    mike = golf[mike];
    mike = tango.bind(entity)(mike);
    var _closure1_slot4 = mike;
    mike = 2;
    mike = golf[mike];
    mike = oscar.bind(entity)(mike);
    mike = mike.PHONE_VERIFICATION_MODAL_KEY;
    var _closure1_slot5 = mike;
    mike = 3;
    mike = golf[mike];
    mike = oscar.bind(entity)(mike);
    mike = mike.Endpoints;
    var _closure1_slot6 = mike;
    mike = {};
    tango = 'user_action_required';
    mike['USER_ACTION_REQUIRED'] = tango;
    tango = 'user_settings_update';
    mike['USER_SETTINGS_UPDATE'] = tango;
    tango = 'guild_phone_required';
    mike['GUILD_PHONE_REQUIRED'] = tango;
    tango = 'mfa_phone_update';
    mike['MFA_PHONE_UPDATE'] = tango;
    tango = 'contact_sync';
    mike['CONTACT_SYNC'] = tango;
    tango = {};
    options = function(argFoo) { // Original name: setCountryCode
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 4;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'PHONE_SET_COUNTRY_CODE';
        mike['type'] = report;
        report = argFoo;
        mike['countryCode'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    tango['setCountryCode'] = options;
    options = function(argFoo, argBar) { // Original name: removePhone
        zulu = _closure1_slot0;
        mike = _closure1_slot2;
        entity = 5;
        mike = mike[entity];
        entity = undefined;
        entity = zulu.bind(entity)(mike);
        zulu = entity.HTTP;
        mike = zulu.del;
        entity = {};
        tango = _closure1_slot6;
        tango = tango.PHONE;
        entity['url'] = tango;
        tango = {};
        report = argFoo;
        tango['password'] = report;
        report = argBar;
        tango['change_phone_reason'] = report;
        entity['body'] = tango;
        tango = true;
        entity['oldFormErrors'] = tango;
        tango = false;
        entity['rejectWithError'] = tango;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    tango['removePhone'] = options;
    options = function(argFoo) { // Original name: resendCode
        _fun88766: for(var _fun88766_ip = 0; ; ) switch(_fun88766_ip) {
 0:
            tango = {};
            mike = _closure1_slot4;
            entity = mike.getFingerprint;
            entity = entity.bind(mike)();
            mike = null;
            mike = mike != entity;
            if(!mike) { _fun88766_ip = 36; continue _fun88766 }
 28:
            zulu = '';
            mike = zulu !== entity;
 36:
            if(!mike) { _fun88766_ip = 45; continue _fun88766 }
 39:
            tango['X-Fingerprint'] = entity;
 45:
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 5;
            mike = mike[entity];
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            zulu = entity.HTTP;
            mike = zulu.post;
            entity = {};
            report = _closure1_slot6;
            report = report.RESEND_PHONE;
            entity['url'] = report;
            entity['headers'] = tango;
            tango = {};
            report = argFoo;
            tango['phone'] = report;
            entity['body'] = tango;
            tango = false;
            entity['rejectWithError'] = tango;
            entity = mike.bind(zulu)(entity);
            return entity;
        }
    };
    tango['resendCode'] = options;
    options = function(argFoo, argBar) { // Original name: beginAddPhone
        zulu = _closure1_slot0;
        mike = _closure1_slot2;
        entity = 5;
        mike = mike[entity];
        entity = undefined;
        entity = zulu.bind(entity)(mike);
        zulu = entity.HTTP;
        mike = zulu.post;
        entity = {};
        tango = _closure1_slot6;
        tango = tango.PHONE;
        entity['url'] = tango;
        tango = {};
        report = argFoo;
        tango['phone'] = report;
        report = argBar;
        tango['change_phone_reason'] = report;
        entity['body'] = tango;
        tango = false;
        entity['rejectWithError'] = tango;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    tango['beginAddPhone'] = options;
    options = function(argFoo, argBar, argBaz) { // Original name: addPhone
        zulu = _closure1_slot0;
        mike = _closure1_slot2;
        entity = 5;
        mike = mike[entity];
        entity = undefined;
        entity = zulu.bind(entity)(mike);
        zulu = entity.HTTP;
        mike = zulu.post;
        entity = {};
        tango = _closure1_slot6;
        tango = tango.PHONE;
        entity['url'] = tango;
        tango = {};
        report = argFoo;
        tango['phone_token'] = report;
        report = argBar;
        tango['password'] = report;
        report = argBaz;
        tango['change_phone_reason'] = report;
        entity['body'] = tango;
        tango = true;
        entity['oldFormErrors'] = tango;
        tango = false;
        entity['rejectWithError'] = tango;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    tango['addPhone'] = options;
    options = function(argFoo) { // Original name: addPhoneWithoutPassword
        zulu = _closure1_slot0;
        mike = _closure1_slot2;
        entity = 5;
        mike = mike[entity];
        entity = undefined;
        entity = zulu.bind(entity)(mike);
        zulu = entity.HTTP;
        mike = zulu.post;
        entity = {};
        tango = _closure1_slot6;
        tango = tango.PHONE_VERIFY_NO_PASSWORD;
        entity['url'] = tango;
        tango = {};
        report = argFoo;
        tango['code'] = report;
        entity['body'] = tango;
        tango = false;
        entity['rejectWithError'] = tango;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    tango['addPhoneWithoutPassword'] = options;
    options = function(argFoo, argBar) { // Original name: beginReverifyPhone
        zulu = _closure1_slot0;
        mike = _closure1_slot2;
        entity = 5;
        mike = mike[entity];
        entity = undefined;
        entity = zulu.bind(entity)(mike);
        zulu = entity.HTTP;
        mike = zulu.post;
        entity = {};
        tango = _closure1_slot6;
        tango = tango.PHONE_REVERIFY;
        entity['url'] = tango;
        tango = {};
        report = argFoo;
        tango['phone'] = report;
        report = argBar;
        tango['change_phone_reason'] = report;
        entity['body'] = tango;
        tango = false;
        entity['rejectWithError'] = tango;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    tango['beginReverifyPhone'] = options;
    options = function(argFoo, argBar, argBaz) { // Original name: reverifyPhone
        zulu = _closure1_slot0;
        mike = _closure1_slot2;
        entity = 5;
        mike = mike[entity];
        entity = undefined;
        entity = zulu.bind(entity)(mike);
        zulu = entity.HTTP;
        mike = zulu.post;
        entity = {};
        tango = _closure1_slot6;
        tango = tango.PHONE_REVERIFY;
        entity['url'] = tango;
        tango = {};
        report = argFoo;
        tango['phone_token'] = report;
        report = argBar;
        tango['password'] = report;
        report = argBaz;
        tango['change_phone_reason'] = report;
        entity['body'] = tango;
        tango = true;
        entity['oldFormErrors'] = tango;
        tango = false;
        entity['rejectWithError'] = tango;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    tango['reverifyPhone'] = options;
    options = function(argFoo) { // Original name: validatePhoneForSupport
        zulu = _closure1_slot0;
        mike = _closure1_slot2;
        entity = 5;
        mike = mike[entity];
        entity = undefined;
        entity = zulu.bind(entity)(mike);
        zulu = entity.HTTP;
        mike = zulu.post;
        entity = {};
        tango = _closure1_slot6;
        tango = tango.VERIFY_PHONE_FOR_TICKET;
        entity['url'] = tango;
        tango = {};
        report = argFoo;
        tango['token'] = report;
        entity['body'] = tango;
        tango = true;
        entity['oldFormErrors'] = tango;
        tango = false;
        entity['rejectWithError'] = tango;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    tango['validatePhoneForSupport'] = options;
    report = function(argFoo, argBar) { // Original name: verifyPhone
        _fun88773: for(var _fun88773_ip = 0; ; ) switch(_fun88773_ip) {
 0:
            tango = arguments[2];
            zulu = arguments[3];
            mike = argFoo;
            var _closure2_slot0 = mike;
            mike = argBar;
            var _closure2_slot1 = mike;
            mike = undefined;
            if(!(tango === mike)) { _fun88773_ip = 30; continue _fun88773 }
 28:
            tango = true;
 30:
            var _closure2_slot2 = tango;
            if(!(zulu === mike)) { _fun88773_ip = 40; continue _fun88773 }
 38:
            zulu = false;
 40:
            var _closure2_slot3 = zulu;
            zulu = _closure1_slot3;
            entity = function* () {
                entity = function* () { // Original name: ?anon_0_
                    _fun88775: for(var _fun88775_ip = 0; ; ) switch(_fun88775_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(mike) { _fun88775_ip = 283; continue _fun88775 }
 10:
                        options = {};
                        zulu = _closure1_slot4;
                        mike = zulu.getFingerprint;
                        mike = mike.bind(zulu)();
                        zulu = null;
                        zulu = zulu != mike;
                        if(!zulu) { _fun88775_ip = 46; continue _fun88775 }
 38:
                        tango = '';
                        zulu = tango !== mike;
 46:
                        if(!zulu) { _fun88775_ip = 55; continue _fun88775 }
 49:
                        options['X-Fingerprint'] = mike;
 55:
                        mike = _closure2_slot3;
                        if(!mike) { _fun88775_ip = 75; continue _fun88775 }
 65:
                        mike = '';
                        options['authorization'] = mike;
 75:
                        tango = _closure1_slot1;
                        yankee = _closure1_slot2;
                        mike = 6;
                        mike = yankee[mike];
                        report = undefined;
                        golf = tango.bind(report)(mike);
                        tango = golf.post;
                        mike = {};
                        verify = _closure1_slot6;
                        verify = verify.VERIFY_PHONE;
                        mike['url'] = verify;
                        mike['headers'] = options;
                        options = {};
                        verify = _closure2_slot0;
                        options['phone'] = verify;
                        verify = _closure2_slot1;
                        options['code'] = verify;
                        mike['body'] = options;
                        options = true;
                        mike['oldFormErrors'] = options;
                        options = {};
                        offset = _closure1_slot0;
                        verify = 7;
                        verify = yankee[verify];
                        verify = offset.bind(report)(verify);
                        verify = verify.NetworkActionNames;
                        verify = verify.USER_VERIFY_PHONE;
                        options['event'] = verify;
                        mike['trackedActionData'] = options;
                        options = false;
                        mike['rejectWithError'] = options;
                        mike = tango.bind(golf)(mike);
                        SaveGenerator(address=209);
 207:
                        return mike;
 209:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(tango) { _fun88775_ip = 280; continue _fun88775 }
 215:
                        zulu = _closure2_slot2;
                        if(!zulu) { _fun88775_ip = 272; continue _fun88775 }
 222:
                        tango = _closure1_slot1;
                        golf = _closure1_slot2;
                        zulu = 4;
                        zulu = golf[zulu];
                        report = tango.bind(report)(zulu);
                        tango = report.dispatch;
                        zulu = {};
                        golf = 'MODAL_POP';
                        zulu['type'] = golf;
                        oscar = _closure1_slot5;
                        zulu['key'] = oscar;
                        zulu = tango.bind(report)(zulu);
 272:
                        zulu = mike.body;
                        return zulu;
 280:
                        return mike;
 283:
                        return entity;
                    }
                };
                return entity;
            };
            entity = zulu.bind(mike)(entity);
            entity = entity.bind(mike)();
            return entity;
        }
    };
    tango['verifyPhone'] = report;
    report = 8;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/phone/PhoneActionCreators.tsx';
    report = oscar.bind(golf)(report);
    zulu['default'] = tango;
    zulu['ChangePhoneReason'] = mike;
    return entity;
})();