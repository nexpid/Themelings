// app/actions/MFAActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar) { // Original name: toggleSMS
        oscar = _closure1_slot1;
        report = _closure1_slot2;
        zulu = 3;
        zulu = report[zulu];
        tango = undefined;
        golf = oscar.bind(tango)(zulu);
        oscar = golf.dispatch;
        zulu = {};
        options = 'MFA_SMS_TOGGLE';
        zulu['type'] = options;
        zulu = oscar.bind(golf)(zulu);
        zulu = _closure1_slot0;
        mike = 4;
        mike = report[mike];
        mike = zulu.bind(tango)(mike);
        tango = mike.HTTP;
        zulu = tango.post;
        mike = {};
        report = argFoo;
        mike['url'] = report;
        report = {};
        oscar = argBar;
        report['password'] = oscar;
        mike['body'] = report;
        report = true;
        mike['oldFormErrors'] = report;
        report = false;
        mike['rejectWithError'] = report;
        tango = zulu.bind(tango)(mike);
        zulu = tango.then;
        mike = function(argFoo) {
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 3;
            mike = mike[entity];
            entity = undefined;
            zulu = zulu.bind(entity)(mike);
            mike = zulu.dispatch;
            entity = {};
            tango = 'MFA_SMS_TOGGLE_COMPLETE';
            entity['type'] = tango;
            entity = mike.bind(zulu)(entity);
            entity = argFoo;
            return entity;
        };
        entity = function(argFoo) {
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 3;
            mike = mike[entity];
            entity = undefined;
            zulu = zulu.bind(entity)(mike);
            mike = zulu.dispatch;
            entity = {};
            tango = 'MFA_SMS_TOGGLE_COMPLETE';
            entity['type'] = tango;
            entity = mike.bind(zulu)(entity);
            entity = argFoo;
            throw entity;
        };
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    var _closure1_slot6 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, mike);
    entity = 0;
    mike = oscar[entity];
    entity = undefined;
    mike = golf.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = 1;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot4 = mike;
    mike = 2;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    mike = mike.Endpoints;
    var _closure1_slot5 = mike;
    mike = {};
    golf = function(argFoo) { // Original name: enableMFAStart
        mike = argFoo;
        var _closure2_slot0 = mike;
        zulu = _closure1_slot3;
        mike = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun92934: for(var _fun92934_ip = 0; ; ) switch(_fun92934_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun92934_ip = 116; continue _fun92934 }
 7:
                    tango = _closure1_slot0;
                    zulu = _closure1_slot2;
                    mike = 4;
                    zulu = zulu[mike];
                    mike = undefined;
                    mike = tango.bind(mike)(zulu);
                    tango = mike.HTTP;
                    zulu = tango.post;
                    mike = {};
                    report = _closure1_slot5;
                    report = report.MFA_TOTP_ENABLE;
                    mike['url'] = report;
                    report = {};
                    oscar = _closure2_slot0;
                    report['password'] = oscar;
                    mike['body'] = report;
                    report = true;
                    mike['oldFormErrors'] = report;
                    report = false;
                    mike['rejectWithError'] = report;
                    mike = zulu.bind(tango)(mike);
                    SaveGenerator(address=99);
 97:
                    return mike;
 99:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun92934_ip = 113; continue _fun92934 }
 105:
                    zulu = mike.body;
                    return zulu;
 113:
                    return mike;
 116:
                    return entity;
                }
            };
            return entity;
        };
        entity = zulu.bind(mike)(entity);
        entity = entity.bind(mike)();
        return entity;
    };
    mike['enableMFAStart'] = golf;
    golf = function(argFoo) { // Original name: verifyEmailCode
        mike = argFoo;
        var _closure2_slot0 = mike;
        zulu = _closure1_slot3;
        mike = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun92937: for(var _fun92937_ip = 0; ; ) switch(_fun92937_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun92937_ip = 108; continue _fun92937 }
 7:
                    tango = _closure1_slot0;
                    zulu = _closure1_slot2;
                    mike = 4;
                    zulu = zulu[mike];
                    mike = undefined;
                    mike = tango.bind(mike)(zulu);
                    tango = mike.HTTP;
                    zulu = tango.post;
                    mike = {};
                    report = _closure1_slot5;
                    report = report.MFA_TOTP_ENABLE_VERIFY;
                    mike['url'] = report;
                    report = {};
                    oscar = _closure2_slot0;
                    report['code'] = oscar;
                    mike['body'] = report;
                    report = false;
                    mike['rejectWithError'] = report;
                    mike = zulu.bind(tango)(mike);
                    SaveGenerator(address=91);
 89:
                    return mike;
 91:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun92937_ip = 105; continue _fun92937 }
 97:
                    zulu = mike.body;
                    return zulu;
 105:
                    return mike;
 108:
                    return entity;
                }
            };
            return entity;
        };
        entity = zulu.bind(mike)(entity);
        entity = entity.bind(mike)();
        return entity;
    };
    mike['verifyEmailCode'] = golf;
    golf = function(argFoo) { // Original name: resendEmailCode
        zulu = _closure1_slot0;
        mike = _closure1_slot2;
        entity = 4;
        mike = mike[entity];
        entity = undefined;
        entity = zulu.bind(entity)(mike);
        zulu = entity.HTTP;
        mike = zulu.post;
        entity = {};
        tango = _closure1_slot5;
        tango = tango.MFA_TOTP_ENABLE_RESEND;
        entity['url'] = tango;
        tango = {};
        report = argFoo;
        tango['password'] = report;
        entity['body'] = tango;
        tango = false;
        entity['rejectWithError'] = tango;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    mike['resendEmailCode'] = golf;
    golf = function(argFoo) { // Original name: setEmailToken
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 3;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'MFA_ENABLE_EMAIL_TOKEN';
        mike['type'] = report;
        report = argFoo;
        mike['token'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    mike['setEmailToken'] = golf;
    golf = function(argFoo) { // Original name: enable
        entity = argFoo;
        oscar = entity.password;
        options = entity.code;
        golf = entity.secret;
        report = entity.emailToken;
        zulu = _closure1_slot0;
        mike = _closure1_slot2;
        entity = 4;
        mike = mike[entity];
        entity = undefined;
        entity = zulu.bind(entity)(mike);
        zulu = entity.HTTP;
        mike = zulu.post;
        entity = {};
        tango = _closure1_slot5;
        tango = tango.MFA_TOTP_ENABLE;
        entity['url'] = tango;
        tango = {};
        tango['code'] = options;
        tango['secret'] = golf;
        tango['password'] = oscar;
        tango['email_token'] = report;
        entity['body'] = tango;
        tango = true;
        entity['oldFormErrors'] = tango;
        tango = false;
        entity['rejectWithError'] = tango;
        zulu = mike.bind(zulu)(entity);
        mike = zulu.then;
        entity = function(argFoo) {
            tango = argFoo;
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 3;
            mike = mike[entity];
            entity = undefined;
            zulu = zulu.bind(entity)(mike);
            mike = zulu.dispatch;
            entity = {};
            report = 'MFA_ENABLE_SUCCESS';
            entity['type'] = report;
            report = tango.body;
            report = report.token;
            entity['token'] = report;
            tango = tango.body;
            tango = tango.backup_codes;
            entity['codes'] = tango;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    mike['enable'] = golf;
    golf = function() { // Original name: disable
        zulu = _closure1_slot0;
        mike = _closure1_slot2;
        entity = 4;
        mike = mike[entity];
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        tango = mike.HTTP;
        zulu = tango.post;
        mike = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
        report = _closure1_slot5;
        report = report.MFA_TOTP_DISABLE;
        mike['url'] = report;
        tango = zulu.bind(tango)(mike);
        zulu = tango.then;
        mike = function(argFoo) {
            entity = argFoo;
            entity = entity.body;
            tango = entity.token;
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 3;
            mike = mike[entity];
            entity = undefined;
            zulu = zulu.bind(entity)(mike);
            mike = zulu.dispatch;
            entity = {};
            report = 'MFA_DISABLE_SUCCESS';
            entity['type'] = report;
            entity['token'] = tango;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    mike['disable'] = golf;
    golf = function(argFoo) { // Original name: enableSMS
        tango = _closure1_slot6;
        entity = _closure1_slot5;
        zulu = entity.MFA_SMS_ENABLE;
        mike = undefined;
        entity = argFoo;
        entity = tango.bind(mike)(zulu, entity);
        return entity;
    };
    mike['enableSMS'] = golf;
    golf = function(argFoo) { // Original name: disableSMS
        tango = _closure1_slot6;
        entity = _closure1_slot5;
        zulu = entity.MFA_SMS_DISABLE;
        mike = undefined;
        entity = argFoo;
        entity = tango.bind(mike)(zulu, entity);
        return entity;
    };
    mike['disableSMS'] = golf;
    golf = function(argFoo) { // Original name: sendMFABackupCodesVerificationKeyEmail
        tango = _closure1_slot0;
        zulu = _closure1_slot2;
        mike = 4;
        zulu = zulu[mike];
        mike = undefined;
        mike = tango.bind(mike)(zulu);
        tango = mike.HTTP;
        zulu = tango.post;
        mike = {};
        report = _closure1_slot5;
        report = report.MFA_SEND_VERIFICATION_KEY;
        mike['url'] = report;
        report = {};
        oscar = argFoo;
        report['password'] = oscar;
        mike['body'] = report;
        report = true;
        mike['oldFormErrors'] = report;
        report = false;
        mike['rejectWithError'] = report;
        tango = zulu.bind(tango)(mike);
        zulu = tango.then;
        mike = function(argFoo) {
            report = argFoo;
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 3;
            mike = mike[entity];
            entity = undefined;
            zulu = zulu.bind(entity)(mike);
            mike = zulu.dispatch;
            entity = {};
            tango = 'MFA_SEND_VERIFICATION_KEY';
            entity['type'] = tango;
            tango = {};
            oscar = report.body;
            oscar = oscar.nonce;
            tango['viewNonce'] = oscar;
            report = report.body;
            report = report.regenerate_nonce;
            tango['regenerateNonce'] = report;
            entity['nonces'] = tango;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        entity = function(argFoo) {
            entity = argFoo;
            throw entity;
        };
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    mike['sendMFABackupCodesVerificationKeyEmail'] = golf;
    golf = function(argFoo, argBar) { // Original name: confirmViewBackupCodes
        _fun92949: for(var _fun92949_ip = 0; ; ) switch(_fun92949_ip) {
 0:
            options = argFoo;
            oscar = argBar;
            var _closure2_slot0 = options;
            zulu = _closure1_slot4;
            mike = zulu.getNonces;
            mike = mike.bind(zulu)();
            golf = mike.viewNonce;
            mike = mike.regenerateNonce;
            if(!oscar) { _fun92949_ip = 49; continue _fun92949 }
 46:
            golf = mike;
 49:
            tango = _closure1_slot0;
            zulu = _closure1_slot2;
            mike = 4;
            zulu = zulu[mike];
            mike = undefined;
            mike = tango.bind(mike)(zulu);
            tango = mike.HTTP;
            zulu = tango.post;
            mike = {};
            report = _closure1_slot5;
            report = report.MFA_CODES_VERIFICATION;
            mike['url'] = report;
            report = {};
            report['key'] = options;
            report['nonce'] = golf;
            report['regenerate'] = oscar;
            mike['body'] = report;
            report = true;
            mike['oldFormErrors'] = report;
            report = false;
            mike['rejectWithError'] = report;
            tango = zulu.bind(tango)(mike);
            zulu = tango.then;
            mike = function(argFoo) {
                zulu = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 3;
                mike = mike[entity];
                entity = undefined;
                zulu = zulu.bind(entity)(mike);
                mike = zulu.dispatch;
                entity = {};
                tango = 'MFA_VIEW_BACKUP_CODES';
                entity['type'] = tango;
                tango = argFoo;
                tango = tango.body;
                tango = tango.backup_codes;
                entity['codes'] = tango;
                tango = _closure2_slot0;
                entity['key'] = tango;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity = function(argFoo) {
                entity = argFoo;
                throw entity;
            };
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    mike['confirmViewBackupCodes'] = golf;
    tango = function() { // Original name: clearBackupCodes
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 3;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'MFA_CLEAR_BACKUP_CODES';
        mike['type'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    mike['clearBackupCodes'] = tango;
    tango = 5;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'actions/MFAActionCreators.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();