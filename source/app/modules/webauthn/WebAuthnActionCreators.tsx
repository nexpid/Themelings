// app/modules/webauthn/WebAuthnActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function() { // Original name: _fetchWebAuthnConditionalChallenge
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun63894: for(var _fun63894_ip = 0; ; ) switch(_fun63894_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun63894_ip = 91; continue _fun63894 }
 7:
                    tango = _closure1_slot0;
                    zulu = _closure1_slot2;
                    mike = 2;
                    zulu = zulu[mike];
                    mike = undefined;
                    mike = tango.bind(mike)(zulu);
                    tango = mike.HTTP;
                    zulu = tango.post;
                    mike = {};
                    report = _closure1_slot4;
                    report = report.WEBAUTHN_CONDITIONAL_UI_CHALLENGE;
                    mike['url'] = report;
                    report = false;
                    mike['rejectWithError'] = report;
                    mike = zulu.bind(tango)(mike);
                    SaveGenerator(address=74);
 72:
                    return mike;
 74:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun63894_ip = 88; continue _fun63894 }
 80:
                    zulu = mike.body;
                    return zulu;
 88:
                    return mike;
 91:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot5 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot5 = entity;
    entity = function() { // Original name: _fetchWebAuthnPasswordlessChallenge
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun63897: for(var _fun63897_ip = 0; ; ) switch(_fun63897_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun63897_ip = 115; continue _fun63897 }
 7:
                    tango = _closure1_slot0;
                    zulu = _closure1_slot2;
                    mike = 2;
                    zulu = zulu[mike];
                    mike = undefined;
                    mike = tango.bind(mike)(zulu);
                    tango = mike.HTTP;
                    zulu = tango.post;
                    mike = {};
                    report = _closure1_slot4;
                    report = report.WEBAUTHN_PASSWORDLESS_CHALLENGE;
                    mike['url'] = report;
                    report = false;
                    mike['rejectWithError'] = report;
                    mike = zulu.bind(tango)(mike);
                    SaveGenerator(address=74);
 72:
                    return mike;
 74:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun63897_ip = 112; continue _fun63897 }
 80:
                    tango = mike.body;
                    zulu = {};
                    report = tango.challenge;
                    zulu['challenge'] = report;
                    tango = tango.ticket;
                    zulu['ticket'] = tango;
                    return zulu;
 112:
                    return mike;
 115:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot6 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot6 = entity;
    entity = function() { // Original name: _deleteWebAuthnCredentialAsync
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun63900: for(var _fun63900_ip = 0; ; ) switch(_fun63900_ip) {
 0:
                    StartGenerator();
                    oscar = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zulu) { _fun63900_ip = 120; continue _fun63900 }
 12:
                    var _closure4_slot0 = oscar;
                    report = _closure1_slot0;
                    tango = _closure1_slot2;
                    zulu = 2;
                    tango = tango[zulu];
                    zulu = undefined;
                    zulu = report.bind(zulu)(tango);
                    report = zulu.HTTP;
                    tango = report.del;
                    zulu = {};
                    options = _closure1_slot4;
                    golf = options.MFA_WEBAUTHN_CREDENTIAL;
                    oscar = oscar.id;
                    oscar = golf.bind(options)(oscar);
                    zulu['url'] = oscar;
                    oscar = false;
                    zulu['rejectWithError'] = oscar;
                    tango = tango.bind(report)(zulu);
                    zulu = tango.then;
                    mike = function() {
                        zulu = _closure1_slot1;
                        mike = _closure1_slot2;
                        entity = 3;
                        mike = mike[entity];
                        entity = undefined;
                        tango = zulu.bind(entity)(mike);
                        zulu = tango.dispatch;
                        mike = {};
                        report = 'AUTHENTICATOR_DELETE';
                        mike['type'] = report;
                        report = _closure4_slot0;
                        mike['credential'] = report;
                        mike = zulu.bind(tango)(mike);
                        return entity;
                    };
                    mike = zulu.bind(tango)(mike);
                    SaveGenerator(address=108);
 106:
                    return mike;
 108:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun63900_ip = 117; continue _fun63900 }
 114:
                    return mike;
 117:
                    return mike;
 120:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot7 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot7 = entity;
    entity = function() { // Original name: _editWebAuthnCredential
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun63904: for(var _fun63904_ip = 0; ; ) switch(_fun63904_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun63904_ip = 162; continue _fun63904 }
 10:
                    report = _closure1_slot0;
                    zulu = _closure1_slot2;
                    mike = 2;
                    mike = zulu[mike];
                    zulu = undefined;
                    mike = report.bind(zulu)(mike);
                    oscar = mike.HTTP;
                    report = oscar.patch;
                    mike = {};
                    verify = _closure1_slot4;
                    options = verify.MFA_WEBAUTHN_CREDENTIAL;
                    golf = argFoo;
                    golf = options.bind(verify)(golf);
                    mike['url'] = golf;
                    golf = {};
                    options = argBar;
                    golf['name'] = options;
                    mike['body'] = golf;
                    golf = false;
                    mike['rejectWithError'] = golf;
                    mike = report.bind(oscar)(mike);
                    SaveGenerator(address=98);
 96:
                    return mike;
 98:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(report) { _fun63904_ip = 159; continue _fun63904 }
 104:
                    report = _closure1_slot1;
                    oscar = _closure1_slot2;
                    tango = 3;
                    tango = oscar[tango];
                    oscar = report.bind(zulu)(tango);
                    report = oscar.dispatch;
                    tango = {};
                    golf = 'AUTHENTICATOR_UPDATE';
                    tango['type'] = golf;
                    golf = mike.body;
                    tango['credential'] = golf;
                    tango = report.bind(oscar)(tango);
                    return zulu;
 159:
                    return mike;
 162:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot8 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot8 = entity;
    entity = function() { // Original name: _startRegisterWebAuthnCredential
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun63907: for(var _fun63907_ip = 0; ; ) switch(_fun63907_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun63907_ip = 121; continue _fun63907 }
 7:
                    tango = _closure1_slot0;
                    zulu = _closure1_slot2;
                    mike = 2;
                    zulu = zulu[mike];
                    mike = undefined;
                    mike = tango.bind(mike)(zulu);
                    tango = mike.HTTP;
                    zulu = tango.post;
                    mike = {};
                    report = _closure1_slot4;
                    report = report.MFA_WEBAUTHN_CREDENTIALS;
                    mike['url'] = report;
                    report = {};
                    mike['body'] = report;
                    report = false;
                    mike['rejectWithError'] = report;
                    mike = zulu.bind(tango)(mike);
                    SaveGenerator(address=80);
 78:
                    return mike;
 80:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun63907_ip = 118; continue _fun63907 }
 86:
                    tango = mike.body;
                    zulu = {};
                    report = tango.ticket;
                    zulu['ticket'] = report;
                    tango = tango.challenge;
                    zulu['challenge'] = tango;
                    return zulu;
 118:
                    return mike;
 121:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot9 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot9 = entity;
    entity = function() { // Original name: _finishRegisterWebAuthnCredential
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo, argBar, argBaz) {
            entity = function* (argFoo, argBar, argBaz) { // Original name: ?anon_0_
                _fun63910: for(var _fun63910_ip = 0; ; ) switch(_fun63910_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun63910_ip = 252; continue _fun63910 }
 10:
                    report = _closure1_slot1;
                    offset = _closure1_slot2;
                    mike = 4;
                    mike = offset[mike];
                    zulu = undefined;
                    oscar = report.bind(zulu)(mike);
                    report = oscar.post;
                    mike = {};
                    golf = _closure1_slot4;
                    golf = golf.MFA_WEBAUTHN_CREDENTIALS;
                    mike['url'] = golf;
                    golf = {};
                    options = argFoo;
                    golf['name'] = options;
                    options = argBar;
                    golf['ticket'] = options;
                    options = argBaz;
                    golf['credential'] = options;
                    mike['body'] = golf;
                    golf = {};
                    verify = _closure1_slot0;
                    options = 5;
                    options = offset[options];
                    options = verify.bind(zulu)(options);
                    options = options.NetworkActionNames;
                    options = options.WEBAUTHN_REGISTER;
                    golf['event'] = options;
                    mike['trackedActionData'] = golf;
                    golf = false;
                    mike['rejectWithError'] = golf;
                    mike = report.bind(oscar)(mike);
                    SaveGenerator(address=141);
 139:
                    return mike;
 141:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(report) { _fun63910_ip = 249; continue _fun63910 }
 147:
                    report = _closure1_slot1;
                    oscar = _closure1_slot2;
                    tango = 3;
                    golf = oscar[tango];
                    verify = report.bind(zulu)(golf);
                    options = verify.dispatch;
                    golf = {};
                    offset = 'AUTHENTICATOR_CREATE';
                    golf['type'] = offset;
                    offset = mike.body;
                    golf['credential'] = offset;
                    golf = options.bind(verify)(golf);
                    tango = oscar[tango];
                    oscar = report.bind(zulu)(tango);
                    report = oscar.dispatch;
                    tango = {};
                    golf = 'MFA_ENABLE_SUCCESS';
                    tango['type'] = golf;
                    golf = mike.body;
                    golf = golf.backup_codes;
                    tango['codes'] = golf;
                    tango = report.bind(oscar)(tango);
                    return zulu;
 249:
                    return mike;
 252:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot10 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot10 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.Endpoints;
    var _closure1_slot4 = tango;
    tango = 6;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/webauthn/WebAuthnActionCreators.tsx';
    tango = report.bind(oscar)(tango);
    tango = function() { // Original name: fetchWebAuthnConditionalChallenge
        entity = undefined;
        tango = _closure1_slot5;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['fetchWebAuthnConditionalChallenge'] = tango;
    tango = function() { // Original name: fetchWebAuthnPasswordlessChallenge
        entity = undefined;
        tango = _closure1_slot6;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['fetchWebAuthnPasswordlessChallenge'] = tango;
    tango = function() { // Original name: fetchWebAuthnCredentials
        zulu = _closure1_slot0;
        mike = _closure1_slot2;
        entity = 2;
        mike = mike[entity];
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        tango = mike.HTTP;
        zulu = tango.get;
        mike = {};
        report = _closure1_slot4;
        report = report.MFA_WEBAUTHN_CREDENTIALS;
        mike['url'] = report;
        report = true;
        mike['rejectWithError'] = report;
        tango = zulu.bind(tango)(mike);
        zulu = tango.then;
        mike = function(argFoo) {
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 3;
            mike = mike[entity];
            entity = undefined;
            tango = zulu.bind(entity)(mike);
            zulu = tango.dispatch;
            mike = {};
            report = 'MFA_WEBAUTHN_CREDENTIALS_LOADED';
            mike['type'] = report;
            report = argFoo;
            report = report.body;
            mike['credentials'] = report;
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['fetchWebAuthnCredentials'] = tango;
    tango = function(argFoo) { // Original name: deleteWebAuthnCredential
        oscar = argFoo;
        var _closure2_slot0 = oscar;
        tango = _closure1_slot0;
        zulu = _closure1_slot2;
        entity = 2;
        zulu = zulu[entity];
        entity = undefined;
        zulu = tango.bind(entity)(zulu);
        report = zulu.HTTP;
        tango = report.del;
        zulu = {};
        options = _closure1_slot4;
        golf = options.MFA_WEBAUTHN_CREDENTIAL;
        oscar = oscar.id;
        oscar = golf.bind(options)(oscar);
        zulu['url'] = oscar;
        oscar = true;
        zulu['rejectWithError'] = oscar;
        tango = tango.bind(report)(zulu);
        zulu = tango.then;
        mike = function() {
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 3;
            mike = mike[entity];
            entity = undefined;
            tango = zulu.bind(entity)(mike);
            zulu = tango.dispatch;
            mike = {};
            report = 'AUTHENTICATOR_DELETE';
            mike['type'] = report;
            report = _closure2_slot0;
            mike['credential'] = report;
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['deleteWebAuthnCredential'] = tango;
    tango = function() { // Original name: deleteWebAuthnCredentialAsync
        entity = undefined;
        tango = _closure1_slot7;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['deleteWebAuthnCredentialAsync'] = tango;
    tango = function() { // Original name: editWebAuthnCredential
        entity = undefined;
        tango = _closure1_slot8;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['editWebAuthnCredential'] = tango;
    tango = function() { // Original name: startRegisterWebAuthnCredential
        entity = undefined;
        tango = _closure1_slot9;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['startRegisterWebAuthnCredential'] = tango;
    mike = function() { // Original name: finishRegisterWebAuthnCredential
        entity = undefined;
        tango = _closure1_slot10;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['finishRegisterWebAuthnCredential'] = mike;
    return entity;
})();