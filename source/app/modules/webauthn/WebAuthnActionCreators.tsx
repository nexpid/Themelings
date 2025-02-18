// app/modules/webauthn/WebAuthnActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function() { // Original name: _fetchWebAuthnConditionalChallenge
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00002_ip = 91; continue _fun00001 }
 7:
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    michal = 2;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    michal = tangon.bind(michal)(zuuluu);
                    tangon = michal.HTTP;
                    zuuluu = tangon.post;
                    michal = {};
                    report = _closure1_slot4;
                    report = report.WEBAUTHN_CONDITIONAL_UI_CHALLENGE;
                    michal['url'] = report;
                    report = false;
                    michal['rejectWithError'] = report;
                    michal = zuuluu.bind(tangon)(michal);
                    SaveGenerator(address=74);
 72:
                    return michal;
 74:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00002_ip = 88; continue _fun00001 }
 80:
                    zuuluu = michal.body;
                    return zuuluu;
 88:
                    return michal;
 91:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot5 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot5 = entity;
    entity = function() { // Original name: _fetchWebAuthnPasswordlessChallenge
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00004_ip = 115; continue _fun00003 }
 7:
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    michal = 2;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    michal = tangon.bind(michal)(zuuluu);
                    tangon = michal.HTTP;
                    zuuluu = tangon.post;
                    michal = {};
                    report = _closure1_slot4;
                    report = report.WEBAUTHN_PASSWORDLESS_CHALLENGE;
                    michal['url'] = report;
                    report = false;
                    michal['rejectWithError'] = report;
                    michal = zuuluu.bind(tangon)(michal);
                    SaveGenerator(address=74);
 72:
                    return michal;
 74:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00004_ip = 112; continue _fun00003 }
 80:
                    tangon = michal.body;
                    zuuluu = {};
                    report = tangon.challenge;
                    zuuluu['challenge'] = report;
                    tangon = tangon.ticket;
                    zuuluu['ticket'] = tangon;
                    return zuuluu;
 112:
                    return michal;
 115:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot6 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot6 = entity;
    entity = function() { // Original name: _deleteWebAuthnCredentialAsync
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    StartGenerator();
                    oscard = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zuuluu) { _fun00006_ip = 120; continue _fun00005 }
 12:
                    var _closure4_slot0 = oscard;
                    report = _closure1_slot0;
                    tangon = _closure1_slot2;
                    zuuluu = 2;
                    tangon = tangon[zuuluu];
                    zuuluu = undefined;
                    zuuluu = report.bind(zuuluu)(tangon);
                    report = zuuluu.HTTP;
                    tangon = report.del;
                    zuuluu = {};
                    option = _closure1_slot4;
                    golfie = option.MFA_WEBAUTHN_CREDENTIAL;
                    oscard = oscard.id;
                    oscard = golfie.bind(option)(oscard);
                    zuuluu['url'] = oscard;
                    oscard = false;
                    zuuluu['rejectWithError'] = oscard;
                    tangon = tangon.bind(report)(zuuluu);
                    zuuluu = tangon.then;
                    michal = function() {
                        zuuluu = _closure1_slot1;
                        michal = _closure1_slot2;
                        entity = 3;
                        michal = michal[entity];
                        entity = undefined;
                        tangon = zuuluu.bind(entity)(michal);
                        zuuluu = tangon.dispatch;
                        michal = {};
                        report = 'AUTHENTICATOR_DELETE';
                        michal['type'] = report;
                        report = _closure4_slot0;
                        michal['credential'] = report;
                        michal = zuuluu.bind(tangon)(michal);
                        return entity;
                    };
                    michal = zuuluu.bind(tangon)(michal);
                    SaveGenerator(address=108);
 106:
                    return michal;
 108:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00006_ip = 117; continue _fun00005 }
 114:
                    return michal;
 117:
                    return michal;
 120:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot7 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot7 = entity;
    entity = function() { // Original name: _editWebAuthnCredential
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00008_ip = 162; continue _fun00007 }
 10:
                    report = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    michal = 2;
                    michal = zuuluu[michal];
                    zuuluu = undefined;
                    michal = report.bind(zuuluu)(michal);
                    oscard = michal.HTTP;
                    report = oscard.patch;
                    michal = {};
                    verify = _closure1_slot4;
                    option = verify.MFA_WEBAUTHN_CREDENTIAL;
                    golfie = argFoo;
                    golfie = option.bind(verify)(golfie);
                    michal['url'] = golfie;
                    golfie = {};
                    option = argBar;
                    golfie['name'] = option;
                    michal['body'] = golfie;
                    golfie = false;
                    michal['rejectWithError'] = golfie;
                    michal = report.bind(oscard)(michal);
                    SaveGenerator(address=98);
 96:
                    return michal;
 98:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(report) { _fun00008_ip = 159; continue _fun00007 }
 104:
                    report = _closure1_slot1;
                    oscard = _closure1_slot2;
                    tangon = 3;
                    tangon = oscard[tangon];
                    oscard = report.bind(zuuluu)(tangon);
                    report = oscard.dispatch;
                    tangon = {};
                    golfie = 'AUTHENTICATOR_UPDATE';
                    tangon['type'] = golfie;
                    golfie = michal.body;
                    tangon['credential'] = golfie;
                    tangon = report.bind(oscard)(tangon);
                    return zuuluu;
 159:
                    return michal;
 162:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot8 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot8 = entity;
    entity = function() { // Original name: _startRegisterWebAuthnCredential
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00010_ip = 121; continue _fun00009 }
 7:
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    michal = 2;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    michal = tangon.bind(michal)(zuuluu);
                    tangon = michal.HTTP;
                    zuuluu = tangon.post;
                    michal = {};
                    report = _closure1_slot4;
                    report = report.MFA_WEBAUTHN_CREDENTIALS;
                    michal['url'] = report;
                    report = {};
                    michal['body'] = report;
                    report = false;
                    michal['rejectWithError'] = report;
                    michal = zuuluu.bind(tangon)(michal);
                    SaveGenerator(address=80);
 78:
                    return michal;
 80:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00010_ip = 118; continue _fun00009 }
 86:
                    tangon = michal.body;
                    zuuluu = {};
                    report = tangon.ticket;
                    zuuluu['ticket'] = report;
                    tangon = tangon.challenge;
                    zuuluu['challenge'] = tangon;
                    return zuuluu;
 118:
                    return michal;
 121:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot9 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot9 = entity;
    entity = function() { // Original name: _finishRegisterWebAuthnCredential
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo, argBar, argBaz) {
            entity = function* (argFoo, argBar, argBaz) { // Original name: ?anon_0_
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00012_ip = 252; continue _fun00011 }
 10:
                    report = _closure1_slot1;
                    offset = _closure1_slot2;
                    michal = 4;
                    michal = offset[michal];
                    zuuluu = undefined;
                    oscard = report.bind(zuuluu)(michal);
                    report = oscard.post;
                    michal = {};
                    golfie = _closure1_slot4;
                    golfie = golfie.MFA_WEBAUTHN_CREDENTIALS;
                    michal['url'] = golfie;
                    golfie = {};
                    option = argFoo;
                    golfie['name'] = option;
                    option = argBar;
                    golfie['ticket'] = option;
                    option = argBaz;
                    golfie['credential'] = option;
                    michal['body'] = golfie;
                    golfie = {};
                    verify = _closure1_slot0;
                    option = 5;
                    option = offset[option];
                    option = verify.bind(zuuluu)(option);
                    option = option.NetworkActionNames;
                    option = option.WEBAUTHN_REGISTER;
                    golfie['event'] = option;
                    michal['trackedActionData'] = golfie;
                    golfie = false;
                    michal['rejectWithError'] = golfie;
                    michal = report.bind(oscard)(michal);
                    SaveGenerator(address=141);
 139:
                    return michal;
 141:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(report) { _fun00012_ip = 249; continue _fun00011 }
 147:
                    report = _closure1_slot1;
                    oscard = _closure1_slot2;
                    tangon = 3;
                    golfie = oscard[tangon];
                    verify = report.bind(zuuluu)(golfie);
                    option = verify.dispatch;
                    golfie = {};
                    offset = 'AUTHENTICATOR_CREATE';
                    golfie['type'] = offset;
                    offset = michal.body;
                    golfie['credential'] = offset;
                    golfie = option.bind(verify)(golfie);
                    tangon = oscard[tangon];
                    oscard = report.bind(zuuluu)(tangon);
                    report = oscard.dispatch;
                    tangon = {};
                    golfie = 'MFA_ENABLE_SUCCESS';
                    tangon['type'] = golfie;
                    golfie = michal.body;
                    golfie = golfie.backup_codes;
                    tangon['codes'] = golfie;
                    tangon = report.bind(oscard)(tangon);
                    return zuuluu;
 249:
                    return michal;
 252:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot10 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot10 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.Endpoints;
    var _closure1_slot4 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/webauthn/WebAuthnActionCreators.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function() { // Original name: fetchWebAuthnConditionalChallenge
        entity = undefined;
        tangon = _closure1_slot5;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['fetchWebAuthnConditionalChallenge'] = tangon;
    tangon = function() { // Original name: fetchWebAuthnPasswordlessChallenge
        entity = undefined;
        tangon = _closure1_slot6;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['fetchWebAuthnPasswordlessChallenge'] = tangon;
    tangon = function() { // Original name: fetchWebAuthnCredentials
        zuuluu = _closure1_slot0;
        michal = _closure1_slot2;
        entity = 2;
        michal = michal[entity];
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        tangon = michal.HTTP;
        zuuluu = tangon.get;
        michal = {};
        report = _closure1_slot4;
        report = report.MFA_WEBAUTHN_CREDENTIALS;
        michal['url'] = report;
        report = true;
        michal['rejectWithError'] = report;
        tangon = zuuluu.bind(tangon)(michal);
        zuuluu = tangon.then;
        michal = function(argFoo) {
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 3;
            michal = michal[entity];
            entity = undefined;
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.dispatch;
            michal = {};
            report = 'MFA_WEBAUTHN_CREDENTIALS_LOADED';
            michal['type'] = report;
            report = argFoo;
            report = report.body;
            michal['credentials'] = report;
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['fetchWebAuthnCredentials'] = tangon;
    tangon = function(argFoo) { // Original name: deleteWebAuthnCredential
        oscard = argFoo;
        var _closure2_slot0 = oscard;
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot2;
        entity = 2;
        zuuluu = zuuluu[entity];
        entity = undefined;
        zuuluu = tangon.bind(entity)(zuuluu);
        report = zuuluu.HTTP;
        tangon = report.del;
        zuuluu = {};
        option = _closure1_slot4;
        golfie = option.MFA_WEBAUTHN_CREDENTIAL;
        oscard = oscard.id;
        oscard = golfie.bind(option)(oscard);
        zuuluu['url'] = oscard;
        oscard = true;
        zuuluu['rejectWithError'] = oscard;
        tangon = tangon.bind(report)(zuuluu);
        zuuluu = tangon.then;
        michal = function() {
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 3;
            michal = michal[entity];
            entity = undefined;
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.dispatch;
            michal = {};
            report = 'AUTHENTICATOR_DELETE';
            michal['type'] = report;
            report = _closure2_slot0;
            michal['credential'] = report;
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['deleteWebAuthnCredential'] = tangon;
    tangon = function() { // Original name: deleteWebAuthnCredentialAsync
        entity = undefined;
        tangon = _closure1_slot7;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['deleteWebAuthnCredentialAsync'] = tangon;
    tangon = function() { // Original name: editWebAuthnCredential
        entity = undefined;
        tangon = _closure1_slot8;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['editWebAuthnCredential'] = tangon;
    tangon = function() { // Original name: startRegisterWebAuthnCredential
        entity = undefined;
        tangon = _closure1_slot9;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['startRegisterWebAuthnCredential'] = tangon;
    michal = function() { // Original name: finishRegisterWebAuthnCredential
        entity = undefined;
        tangon = _closure1_slot10;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['finishRegisterWebAuthnCredential'] = michal;
    return entity;
})();