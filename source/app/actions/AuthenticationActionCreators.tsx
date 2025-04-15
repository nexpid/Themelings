// app/actions/AuthenticationActionCreators.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBar;
    tangon = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = tangon;
    entity = argCor;
    var _closure1_slot2 = entity;
    var _closure1_slot3 = golfie;
    entity = function(argFoo) { // Original name: dispatchLogout
        tangon = {};
        entity = 'LOGOUT';
        tangon['type'] = entity;
        report = argFoo;
        oscard = tangon;
        entity = copyDataProperties(oscard, report);
        zuuluu = _closure1_slot1;
        michal = _closure1_slot3;
        entity = 7;
        michal = michal[entity];
        entity = undefined;
        zuuluu = zuuluu.bind(entity)(michal);
        michal = zuuluu.dispatch;
        tangon = michal.bind(zuuluu)(tangon);
        zuuluu = tangon.catch;
        michal = function(argFoo) {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                entity = argFoo;
                tangon = _closure1_slot16;
                zuuluu = tangon.error;
                michal = 'Error while dispatching LOGOUT';
                michal = zuuluu.bind(tangon)(michal, entity);
                michal = global;
                michal = michal.window;
                zuuluu = michal.DiscordErrors;
                michal = null;
                if(!(michal != zuuluu)) { _fun00002_ip = 58; continue _fun00001 }
 47:
                michal = zuuluu.softCrash;
                michal = michal.bind(zuuluu)(entity);
 58:
                throw entity;
            }
        };
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    var _closure1_slot19 = entity;
    entity = function(argFoo) { // Original name: handleLogout
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            golfie = arguments[1];
            entity = undefined;
            if(!(golfie === entity)) { _fun00004_ip = 22; continue _fun00003 }
 9:
            michal = _closure1_slot13;
            golfie = michal.DEFAULT_LOGGED_OUT;
 22:
            zuuluu = _closure1_slot19;
            zuuluu = zuuluu.bind(entity)();
            zuuluu = null;
            if(!(zuuluu != golfie)) { _fun00004_ip = 191; continue _fun00003 }
 42:
            report = _closure1_slot0;
            oscard = _closure1_slot3;
            tangon = 8;
            tangon = oscard[tangon];
            report = report.bind(entity)(tangon);
            tangon = report.getRootNavigationRef;
            tangon = tangon.bind(report)();
            if(!(zuuluu == tangon)) { _fun00004_ip = 119; continue _fun00003 }
 76:
            report = _closure1_slot0;
            oscard = _closure1_slot3;
            zuuluu = 9;
            zuuluu = oscard[zuuluu];
            oscard = report.bind(entity)(zuuluu);
            report = oscard.transitionTo;
            zuuluu = {};
            option = argFoo;
            zuuluu['source'] = option;
            zuuluu = report.bind(oscard)(golfie, zuuluu);
            _fun00004_ip = 191; continue _fun00003;
 119:
            zuuluu = _closure1_slot1;
            report = _closure1_slot3;
            michal = 10;
            michal = report[michal];
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.popAll;
            michal = michal.bind(zuuluu)();
            zuuluu = tangon.reset;
            michal = {};
            report = 0;
            michal['index'] = report;
            oscard = {};
            report = 'auth';
            oscard['name'] = report;
            report = new Array(1);
            report[0] = oscard;
            michal['routes'] = report;
            michal = zuuluu.bind(tangon)(michal);
 191:
            return entity;
        }
    };
    var _closure1_slot20 = entity;
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
    var _closure1_slot5 = michal;
    michal = 1;
    michal = golfie[michal];
    michal = oscard.bind(entity)(michal);
    michal = michal.setPromoEmailConsentState;
    var _closure1_slot6 = michal;
    michal = 2;
    michal = golfie[michal];
    michal = tangon.bind(entity)(michal);
    var _closure1_slot7 = michal;
    michal = 3;
    michal = golfie[michal];
    michal = tangon.bind(entity)(michal);
    var _closure1_slot8 = michal;
    michal = 4;
    michal = golfie[michal];
    michal = oscard.bind(entity)(michal);
    option = michal.Endpoints;
    var _closure1_slot9 = option;
    option = michal.DEVICE_TOKEN;
    var _closure1_slot10 = option;
    option = michal.DEVICE_VOIP_TOKEN;
    var _closure1_slot11 = option;
    option = michal.AbortCodes;
    var _closure1_slot12 = option;
    michal = michal.Routes;
    var _closure1_slot13 = michal;
    michal = 5;
    michal = golfie[michal];
    michal = oscard.bind(entity)(michal);
    option = michal.DEVICE_PUSH_VOIP_PROVIDER;
    var _closure1_slot14 = option;
    michal = michal.getDevicePushProvider;
    var _closure1_slot15 = michal;
    michal = 6;
    michal = golfie[michal];
    option = tangon.bind(entity)(michal);
    michal = option.prototype;
    tangon = Object.create(michal, {constructor: {value: option}});
    romeon = 'AuthenticationActionCreators';
    foxtra = tangon;
    michal = new foxtra[option](romeon, yankee);
    michal = michal instanceof Object ? michal : tangon;
    var _closure1_slot16 = michal;
    michal = null;
    var _closure1_slot17 = michal;
    michal = {};
    tangon = 'MFA';
    michal['MFA'] = tangon;
    tangon = 'SUCCESS';
    michal['SUCCESS'] = tangon;
    var _closure1_slot18 = michal;
    tangon = {};
    option = function(argFoo) { // Original name: startSession
        entity = argFoo;
        var _closure2_slot0 = entity;
        tangon = _closure1_slot1;
        zuuluu = _closure1_slot3;
        entity = 7;
        zuuluu = zuuluu[entity];
        entity = undefined;
        tangon = tangon.bind(entity)(zuuluu);
        zuuluu = tangon.wait;
        michal = function() {
            zuuluu = _closure1_slot1;
            michal = _closure1_slot3;
            entity = 7;
            michal = michal[entity];
            entity = undefined;
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.dispatch;
            michal = {};
            report = 'START_SESSION';
            michal['type'] = report;
            report = _closure2_slot0;
            michal['token'] = report;
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    tangon['startSession'] = option;
    option = function(argFoo) { // Original name: login
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            michal = argFoo;
            zuuluu = this;
            var _closure2_slot0 = zuuluu;
            sizing = michal.login;
            var _closure2_slot1 = sizing;
            kiloes = michal.password;
            var _closure2_slot2 = kiloes;
            backup = michal.undelete;
            foxtra = michal.source;
            romeon = michal.giftCodeSKUId;
            verify = michal.invite;
            report = michal.isMultiAccount;
            var _closure2_slot3 = report;
            zuuluu = _closure1_slot1;
            yankee = _closure1_slot3;
            michal = 7;
            michal = yankee[michal];
            option = undefined;
            offset = zuuluu.bind(option)(michal);
            tangon = offset.dispatch;
            oscard = true;
            michal = {'type': 'LOGIN', 'isPasswordAttempt': true};
            michal = tangon.bind(offset)(michal);
            michal = 11;
            michal = yankee[michal];
            tangon = zuuluu.bind(option)(michal);
            zuuluu = tangon.post;
            michal = {};
            offset = _closure1_slot9;
            offset = offset.LOGIN;
            michal['url'] = offset;
            offset = {};
            offset['login'] = sizing;
            offset['password'] = kiloes;
            offset['undelete'] = backup;
            offset['login_source'] = foxtra;
            offset['gift_code_sku_id'] = romeon;
            michal['body'] = offset;
            offset = 2;
            michal['retries'] = offset;
            michal['oldFormErrors'] = oscard;
            oscard = {};
            offset = _closure1_slot0;
            golfie = 12;
            golfie = yankee[golfie];
            golfie = offset.bind(option)(golfie);
            golfie = golfie.NetworkActionNames;
            golfie = golfie.USER_LOGIN;
            oscard['event'] = golfie;
            golfie = {};
            offset = null;
            offset = offset == verify;
            if(offset) { _fun00006_ip = 245; continue _fun00005 }
 240:
            option = verify.code;
 245:
            golfie['invite_code'] = option;
            golfie['is_multi_account'] = report;
            oscard['properties'] = golfie;
            michal['trackedActionData'] = oscard;
            if(report) { _fun00006_ip = 274; continue _fun00005 }
 270:
            report = {};
            _fun00006_ip = 295; continue _fun00005;
 274:
            oscard = {};
            golfie = {};
            option = '';
            golfie['authorization'] = option;
            oscard['headers'] = golfie;
            report = oscard;
 295:
            result = michal;
            output = report;
            report = copyDataProperties(result, output);
            oscard = false;
            report = 'rejectWithError';
            michal[report] = oscard;
            tangon = zuuluu.bind(tangon)(michal);
            zuuluu = tangon.then;
            michal = function(argFoo) {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    entity = argFoo;
                    entity = entity.body;
                    zuuluu = entity.mfa;
                    option = entity.sms;
                    golfie = entity.webauthn;
                    verify = entity.ticket;
                    yankee = entity.token;
                    report = entity.backup;
                    kiloes = entity.user_id;
                    backup = entity.required_actions;
                    oscard = entity.totp;
                    romeon = _closure1_slot1;
                    entity = _closure1_slot3;
                    tangon = 7;
                    offset = entity[tangon];
                    entity = undefined;
                    foxtra = romeon.bind(entity)(offset);
                    romeon = foxtra.dispatch;
                    offset = {};
                    sizing = 'LOGIN_ATTEMPTED';
                    offset['type'] = sizing;
                    offset['user_id'] = kiloes;
                    offset['required_actions'] = backup;
                    offset = romeon.bind(foxtra)(offset);
                    if(zuuluu) { _fun00008_ip = 191; continue _fun00007 }
 120:
                    offset = _closure2_slot3;
                    if(offset) { _fun00008_ip = 174; continue _fun00007 }
 130:
                    romeon = _closure1_slot1;
                    offset = _closure1_slot3;
                    offset = offset[tangon];
                    foxtra = romeon.bind(entity)(offset);
                    romeon = foxtra.dispatch;
                    offset = {};
                    backup = 'LOGIN_SUCCESS';
                    offset['type'] = backup;
                    offset['token'] = yankee;
                    offset = romeon.bind(foxtra)(offset);
                    _fun00008_ip = 253; continue _fun00007;
 174:
                    offset = _closure2_slot0;
                    zuuluu = offset.switchAccountToken;
                    zuuluu = zuuluu.bind(offset)(yankee);
                    _fun00008_ip = 253; continue _fun00007;
 191:
                    zuuluu = _closure1_slot1;
                    michal = _closure1_slot3;
                    michal = michal[tangon];
                    tangon = zuuluu.bind(entity)(michal);
                    zuuluu = tangon.dispatch;
                    michal = {};
                    offset = 'LOGIN_MFA_STEP';
                    michal['type'] = offset;
                    michal['ticket'] = verify;
                    michal['sms'] = option;
                    michal['webauthn'] = golfie;
                    michal['totp'] = oscard;
                    michal['backup'] = report;
                    michal = zuuluu.bind(tangon)(michal);
 253:
                    return entity;
                }
            };
            entity = function(argFoo) {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    oscard = argFoo;
                    zuuluu = _closure1_slot0;
                    tangon = _closure1_slot3;
                    entity = 13;
                    entity = tangon[entity];
                    report = undefined;
                    entity = zuuluu.bind(report)(entity);
                    entity = entity.V6OrEarlierAPIError;
                    zuuluu = entity.prototype;
                    zuuluu = Object.create(zuuluu, {constructor: {value: entity}});
                    kiloes = zuuluu;
                    backup = oscard;
                    entity = new kiloes[entity](backup, foxtra);
                    entity = entity instanceof Object ? entity : zuuluu;
                    zuuluu = oscard.body;
                    golfie = null;
                    if(!(golfie != zuuluu)) { _fun00010_ip = 95; continue _fun00009 }
 68:
                    tangon = oscard.body;
                    option = golfie == tangon;
                    zuuluu = undefined;
                    if(option) { _fun00010_ip = 88; continue _fun00009 }
 82:
                    zuuluu = tangon.suspended_user_token;
 88:
                    if(!(golfie == zuuluu)) { _fun00010_ip = 464; continue _fun00009 }
 95:
                    zuuluu = oscard.body;
                    option = golfie == zuuluu;
                    tangon = undefined;
                    if(option) { _fun00010_ip = 114; continue _fun00009 }
 109:
                    tangon = zuuluu.code;
 114:
                    zuuluu = _closure1_slot12;
                    zuuluu = zuuluu.ACCOUNT_SCHEDULED_FOR_DELETION;
                    if(!(tangon === zuuluu)) { _fun00010_ip = 154; continue _fun00009 }
 128:
                    zuuluu = _closure2_slot2;
                    if(!(golfie != zuuluu)) { _fun00010_ip = 154; continue _fun00009 }
 139:
                    option = _closure2_slot2;
                    zuuluu = '';
                    if(!(zuuluu === option)) { _fun00010_ip = 397; continue _fun00009 }
 154:
                    zuuluu = _closure1_slot12;
                    zuuluu = zuuluu.ACCOUNT_DISABLED;
                    if(!(tangon === zuuluu)) { _fun00010_ip = 194; continue _fun00009 }
 168:
                    zuuluu = _closure2_slot2;
                    if(!(golfie != zuuluu)) { _fun00010_ip = 194; continue _fun00009 }
 179:
                    option = _closure2_slot2;
                    zuuluu = '';
                    if(!(zuuluu === option)) { _fun00010_ip = 330; continue _fun00009 }
 194:
                    zuuluu = _closure1_slot12;
                    zuuluu = zuuluu.PHONE_VERIFICATION_REQUIRED;
                    if(!(tangon !== zuuluu)) { _fun00010_ip = 257; continue _fun00009 }
 208:
                    tangon = _closure1_slot1;
                    option = _closure1_slot3;
                    zuuluu = 7;
                    zuuluu = option[zuuluu];
                    option = tangon.bind(report)(zuuluu);
                    tangon = option.dispatch;
                    zuuluu = {};
                    verify = 'LOGIN_FAILURE';
                    zuuluu['type'] = verify;
                    zuuluu['error'] = entity;
                    zuuluu = tangon.bind(option)(zuuluu);
                    _fun00010_ip = 462; continue _fun00009;
 257:
                    tangon = _closure1_slot1;
                    option = _closure1_slot3;
                    zuuluu = 7;
                    zuuluu = option[zuuluu];
                    option = tangon.bind(report)(zuuluu);
                    tangon = option.dispatch;
                    zuuluu = {};
                    verify = 'LOGIN_PHONE_IP_AUTHORIZATION_REQUIRED';
                    zuuluu['type'] = verify;
                    verify = {};
                    foxtra = _closure2_slot1;
                    verify['login'] = foxtra;
                    romeon = _closure2_slot2;
                    verify['password'] = romeon;
                    zuuluu['credentials'] = verify;
                    zuuluu = tangon.bind(option)(zuuluu);
                    _fun00010_ip = 462; continue _fun00009;
 330:
                    tangon = _closure1_slot1;
                    option = _closure1_slot3;
                    zuuluu = 7;
                    zuuluu = option[zuuluu];
                    option = tangon.bind(report)(zuuluu);
                    tangon = option.dispatch;
                    zuuluu = {};
                    verify = 'LOGIN_ACCOUNT_DISABLED';
                    zuuluu['type'] = verify;
                    verify = {};
                    romeon = _closure2_slot1;
                    verify['login'] = romeon;
                    yankee = _closure2_slot2;
                    verify['password'] = yankee;
                    zuuluu['credentials'] = verify;
                    zuuluu = tangon.bind(option)(zuuluu);
                    _fun00010_ip = 462; continue _fun00009;
 397:
                    tangon = _closure1_slot1;
                    option = _closure1_slot3;
                    zuuluu = 7;
                    zuuluu = option[zuuluu];
                    option = tangon.bind(report)(zuuluu);
                    tangon = option.dispatch;
                    zuuluu = {};
                    verify = 'LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION';
                    zuuluu['type'] = verify;
                    verify = {};
                    yankee = _closure2_slot1;
                    verify['login'] = yankee;
                    offset = _closure2_slot2;
                    verify['password'] = offset;
                    zuuluu['credentials'] = verify;
                    zuuluu = tangon.bind(option)(zuuluu);
 462:
                    throw entity;
 464:
                    zuuluu = _closure1_slot1;
                    tangon = _closure1_slot3;
                    michal = 7;
                    michal = tangon[michal];
                    tangon = zuuluu.bind(report)(michal);
                    zuuluu = tangon.dispatch;
                    michal = {};
                    option = 'LOGIN_SUSPENDED_USER';
                    michal['type'] = option;
                    oscard = oscard.body;
                    golfie = golfie == oscard;
                    report = undefined;
                    if(golfie) { _fun00010_ip = 519; continue _fun00009 }
 513:
                    report = oscard.suspended_user_token;
 519:
                    michal['suspendedUserToken'] = report;
                    michal = zuuluu.bind(tangon)(michal);
                    throw entity;
                }
            };
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    tangon['login'] = option;
    option = function(argFoo) { // Original name: loginMFAv2
        michal = argFoo;
        zuuluu = this;
        var _closure2_slot0 = zuuluu;
        romeon = michal.code;
        yankee = michal.ticket;
        offset = michal.source;
        golfie = michal.giftCodeSKUId;
        zuuluu = michal.isMultiAccount;
        var _closure2_slot1 = zuuluu;
        backup = michal.mfaType;
        zuuluu = _closure1_slot1;
        verify = _closure1_slot3;
        michal = 11;
        michal = verify[michal];
        option = undefined;
        tangon = zuuluu.bind(option)(michal);
        zuuluu = tangon.post;
        michal = {'url': null, 'body': null, 'retries': 2, 'oldFormErrors': true, 'trackedActionData': null, 'rejectWithError': false};
        foxtra = _closure1_slot9;
        report = foxtra.LOGIN_MFA;
        report = report.bind(foxtra)(backup);
        michal['url'] = report;
        report = {};
        report['code'] = romeon;
        report['ticket'] = yankee;
        report['login_source'] = offset;
        report['gift_code_sku_id'] = golfie;
        michal['body'] = report;
        report = {};
        golfie = _closure1_slot0;
        oscard = 12;
        oscard = verify[oscard];
        oscard = golfie.bind(option)(oscard);
        oscard = oscard.NetworkActionNames;
        oscard = oscard.USER_LOGIN_MFA;
        report['event'] = oscard;
        michal['trackedActionData'] = report;
        tangon = zuuluu.bind(tangon)(michal);
        zuuluu = tangon.then;
        michal = function(argFoo) {
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                entity = argFoo;
                zuuluu = _closure2_slot1;
                if(zuuluu) { _fun00012_ip = 76; continue _fun00011 }
 13:
                report = _closure1_slot1;
                tangon = _closure1_slot3;
                zuuluu = 7;
                tangon = tangon[zuuluu];
                zuuluu = undefined;
                report = report.bind(zuuluu)(tangon);
                tangon = report.dispatch;
                zuuluu = {};
                oscard = 'LOGIN_SUCCESS';
                zuuluu['type'] = oscard;
                oscard = entity.body;
                oscard = oscard.token;
                zuuluu['token'] = oscard;
                zuuluu = tangon.bind(report)(zuuluu);
                _fun00012_ip = 102; continue _fun00011;
 76:
                zuuluu = _closure2_slot0;
                michal = zuuluu.switchAccountToken;
                entity = entity.body;
                entity = entity.token;
                entity = michal.bind(zuuluu)(entity);
 102:
                entity = undefined;
                return entity;
            }
        };
        zuuluu = zuuluu.bind(tangon)(michal);
        michal = zuuluu.catch;
        entity = function(argFoo) {
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                entity = argFoo;
                michal = entity.body;
                zuuluu = null;
                if(!(zuuluu != michal)) { _fun00014_ip = 92; continue _fun00013 }
 14:
                michal = entity.body;
                michal = michal.suspended_user_token;
                if(!(zuuluu != michal)) { _fun00014_ip = 92; continue _fun00013 }
 29:
                report = _closure1_slot1;
                tangon = _closure1_slot3;
                michal = 7;
                tangon = tangon[michal];
                michal = undefined;
                oscard = report.bind(michal)(tangon);
                report = oscard.dispatch;
                tangon = {};
                golfie = 'LOGIN_SUSPENDED_USER';
                tangon['type'] = golfie;
                golfie = entity.body;
                golfie = golfie.suspended_user_token;
                tangon['suspendedUserToken'] = golfie;
                tangon = report.bind(oscard)(tangon);
                return michal;
 92:
                michal = entity.body;
                tangon = zuuluu == michal;
                zuuluu = undefined;
                if(tangon) { _fun00014_ip = 111; continue _fun00013 }
 106:
                zuuluu = michal.code;
 111:
                michal = _closure1_slot12;
                michal = michal.MFA_INVALID_CODE;
                if(!(zuuluu !== michal)) { _fun00014_ip = 130; continue _fun00013 }
 128:
                throw entity;
 130:
                michal = global;
                zuuluu = michal.Error;
                entity = entity.body;
                option = entity.message;
                michal = zuuluu.prototype;
                michal = Object.create(michal, {constructor: {value: zuuluu}});
                verify = michal;
                entity = new verify[zuuluu](option, golfie);
                entity = entity instanceof Object ? entity : michal;
                throw entity;
            }
        };
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    tangon['loginMFAv2'] = option;
    option = function(argFoo) { // Original name: authenticatePasswordless
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            michal = argFoo;
            zuuluu = this;
            var _closure2_slot0 = zuuluu;
            zuuluu = michal.authenticateFunc;
            var _closure2_slot1 = zuuluu;
            tangon = michal.conditionalMediationAbortController;
            zuuluu = michal.source;
            var _closure2_slot2 = zuuluu;
            michal = michal.giftCodeSKUId;
            var _closure2_slot3 = michal;
            michal = null;
            if(!(michal != tangon)) { _fun00016_ip = 72; continue _fun00015 }
 55:
            zuuluu = tangon.abort;
            michal = 'Starting non-conditional mediation';
            michal = zuuluu.bind(tangon)(michal);
 72:
            oscard = _closure1_slot1;
            report = _closure1_slot3;
            zuuluu = 7;
            zuuluu = report[zuuluu];
            tangon = undefined;
            golfie = oscard.bind(tangon)(zuuluu);
            oscard = golfie.dispatch;
            zuuluu = {};
            option = 'PASSWORDLESS_START';
            zuuluu['type'] = option;
            zuuluu = oscard.bind(golfie)(zuuluu);
            zuuluu = _closure1_slot0;
            michal = 14;
            michal = report[michal];
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = zuuluu.fetchWebAuthnPasswordlessChallenge;
            tangon = michal.bind(zuuluu)();
            zuuluu = tangon.then;
            michal = function(argFoo) {
                michal = argFoo;
                tangon = michal.challenge;
                michal = michal.ticket;
                var _closure3_slot0 = michal;
                zuuluu = _closure2_slot1;
                michal = undefined;
                zuuluu = zuuluu.bind(michal)(tangon);
                michal = zuuluu.then;
                entity = function(argFoo) {
                    zuuluu = _closure2_slot0;
                    michal = zuuluu.loginWebAuthn;
                    entity = {};
                    report = _closure3_slot0;
                    entity['ticket'] = report;
                    report = argFoo;
                    entity['credential'] = report;
                    report = _closure2_slot2;
                    entity['source'] = report;
                    tangon = _closure2_slot3;
                    entity['giftCodeSKUId'] = tangon;
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                };
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = zuuluu.catch;
            entity = function(argFoo) {
                entity = argFoo;
                tangon = _closure1_slot1;
                zuuluu = _closure1_slot3;
                michal = 7;
                zuuluu = zuuluu[michal];
                michal = undefined;
                tangon = tangon.bind(michal)(zuuluu);
                zuuluu = tangon.dispatch;
                michal = {};
                report = 'PASSWORDLESS_FAILURE';
                michal['type'] = report;
                michal['error'] = entity;
                michal = zuuluu.bind(tangon)(michal);
                throw entity;
            };
            entity = michal.bind(zuuluu)(entity);
            return entity;
        }
    };
    tangon['authenticatePasswordless'] = option;
    option = function(argFoo) { // Original name: loginWebAuthn
        michal = argFoo;
        yankee = michal.ticket;
        romeon = michal.credential;
        offset = michal.source;
        golfie = michal.giftCodeSKUId;
        zuuluu = _closure1_slot1;
        verify = _closure1_slot3;
        michal = 11;
        michal = verify[michal];
        option = undefined;
        tangon = zuuluu.bind(option)(michal);
        zuuluu = tangon.post;
        michal = {};
        report = _closure1_slot9;
        report = report.WEBAUTHN_CONDITIONAL_UI_LOGIN;
        michal['url'] = report;
        report = {};
        report['credential'] = romeon;
        report['ticket'] = yankee;
        report['source'] = offset;
        report['giftCodeSKUId'] = golfie;
        michal['body'] = report;
        report = 1;
        michal['retries'] = report;
        report = {};
        golfie = _closure1_slot0;
        oscard = 12;
        oscard = verify[oscard];
        oscard = golfie.bind(option)(oscard);
        oscard = oscard.NetworkActionNames;
        oscard = oscard.USER_LOGIN_PASSWORDLESS;
        report['event'] = oscard;
        michal['trackedActionData'] = report;
        report = false;
        michal['rejectWithError'] = report;
        tangon = zuuluu.bind(tangon)(michal);
        zuuluu = tangon.then;
        michal = function(argFoo) {
            entity = argFoo;
            entity = entity.body;
            report = entity.token;
            offset = entity.user_id;
            verify = entity.required_actions;
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot3;
            michal = 7;
            oscard = tangon[michal];
            entity = undefined;
            option = zuuluu.bind(entity)(oscard);
            golfie = option.dispatch;
            oscard = {};
            yankee = 'LOGIN_ATTEMPTED';
            oscard['type'] = yankee;
            oscard['user_id'] = offset;
            oscard['required_actions'] = verify;
            oscard = golfie.bind(option)(oscard);
            michal = tangon[michal];
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.dispatch;
            michal = {};
            oscard = 'LOGIN_SUCCESS';
            michal['type'] = oscard;
            michal['token'] = report;
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        zuuluu = zuuluu.bind(tangon)(michal);
        michal = zuuluu.catch;
        entity = function(argFoo) {
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                entity = argFoo;
                michal = entity.body;
                zuuluu = null;
                if(!(zuuluu != michal)) { _fun00018_ip = 92; continue _fun00017 }
 14:
                michal = entity.body;
                michal = michal.suspended_user_token;
                if(!(zuuluu != michal)) { _fun00018_ip = 92; continue _fun00017 }
 29:
                tangon = _closure1_slot1;
                zuuluu = _closure1_slot3;
                michal = 7;
                zuuluu = zuuluu[michal];
                michal = undefined;
                report = tangon.bind(michal)(zuuluu);
                tangon = report.dispatch;
                zuuluu = {};
                oscard = 'LOGIN_SUSPENDED_USER';
                zuuluu['type'] = oscard;
                oscard = entity.body;
                oscard = oscard.suspended_user_token;
                zuuluu['suspendedUserToken'] = oscard;
                zuuluu = tangon.bind(report)(zuuluu);
                return michal;
 92:
                tangon = _closure1_slot1;
                zuuluu = _closure1_slot3;
                michal = 7;
                zuuluu = zuuluu[michal];
                michal = undefined;
                tangon = tangon.bind(michal)(zuuluu);
                zuuluu = tangon.dispatch;
                michal = {};
                report = 'PASSWORDLESS_FAILURE';
                michal['type'] = report;
                michal['error'] = entity;
                michal = zuuluu.bind(tangon)(michal);
                throw entity;
            }
        };
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    tangon['loginWebAuthn'] = option;
    option = function(argFoo) { // Original name: loginToken
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            michal = arguments[1];
            zuuluu = this;
            var _closure2_slot0 = zuuluu;
            zuuluu = argFoo;
            var _closure2_slot1 = zuuluu;
            tangon = undefined;
            if(!(michal === tangon)) { _fun00020_ip = 27; continue _fun00019 }
 25:
            michal = true;
 27:
            var _closure2_slot2 = michal;
            zuuluu = _closure1_slot1;
            report = _closure1_slot3;
            michal = 7;
            michal = report[michal];
            tangon = zuuluu.bind(tangon)(michal);
            zuuluu = tangon.dispatch;
            michal = {};
            report = 'LOGIN';
            michal['type'] = report;
            michal = zuuluu.bind(tangon)(michal);
            michal = global;
            zuuluu = michal.Promise;
            michal = zuuluu.prototype;
            michal = Object.create(michal, {constructor: {value: zuuluu}});
            oscard = function(argFoo) {
                entity = argFoo;
                var _closure3_slot0 = entity;
                entity = global;
                zuuluu = entity.setImmediate;
                entity = undefined;
                michal = function() {
                    _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                        zuuluu = _closure1_slot1;
                        michal = _closure1_slot3;
                        entity = 7;
                        michal = michal[entity];
                        entity = undefined;
                        report = zuuluu.bind(entity)(michal);
                        tangon = report.dispatch;
                        zuuluu = {};
                        michal = 'LOGIN_SUCCESS';
                        zuuluu['type'] = michal;
                        oscard = _closure2_slot1;
                        zuuluu['token'] = oscard;
                        zuuluu = tangon.bind(report)(zuuluu);
                        zuuluu = _closure2_slot2;
                        if(!zuuluu) { _fun00022_ip = 83; continue _fun00021 }
 64:
                        tangon = _closure2_slot0;
                        zuuluu = tangon.startSession;
                        michal = _closure2_slot1;
                        michal = zuuluu.bind(tangon)(michal);
 83:
                        michal = _closure3_slot0;
                        michal = michal.bind(entity)();
                        return entity;
                    }
                };
                michal = zuuluu.bind(entity)(michal);
                return entity;
            };
            golfie = michal;
            entity = new golfie[zuuluu](oscard, report);
            entity = entity instanceof Object ? entity : michal;
            return entity;
        }
    };
    tangon['loginToken'] = option;
    option = function(argFoo) { // Original name: loginReset
        zuuluu = _closure1_slot1;
        michal = _closure1_slot3;
        entity = 7;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'LOGIN_RESET';
        michal['type'] = report;
        report = argFoo;
        michal['isMultiAccount'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    tangon['loginReset'] = option;
    option = function() { // Original name: loginStatusReset
        zuuluu = _closure1_slot1;
        michal = _closure1_slot3;
        entity = 7;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'LOGIN_STATUS_RESET';
        michal['type'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    tangon['loginStatusReset'] = option;
    option = function(argFoo) { // Original name: logoutInternal
        zuuluu = _closure1_slot19;
        entity = undefined;
        michal = argFoo;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon['logoutInternal'] = option;
    option = function(argFoo) { // Original name: logout
        _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
            golfie = argFoo;
            michal = arguments[1];
            yankee = arguments[2];
            var _closure2_slot0 = golfie;
            romeon = undefined;
            if(!(michal === romeon)) { _fun00024_ip = 34; continue _fun00023 }
 21:
            zuuluu = _closure1_slot13;
            michal = zuuluu.DEFAULT_LOGGED_OUT;
 34:
            var _closure2_slot1 = michal;
            var _closure2_slot2 = yankee;
            zuuluu = _closure1_slot1;
            offset = _closure1_slot3;
            michal = 11;
            michal = offset[michal];
            tangon = zuuluu.bind(romeon)(michal);
            zuuluu = tangon.post;
            michal = {};
            report = _closure1_slot9;
            report = report.LOGOUT;
            michal['url'] = report;
            report = {};
            oscard = _closure1_slot15;
            oscard = oscard.bind(romeon)();
            report['provider'] = oscard;
            option = _closure1_slot0;
            oscard = 15;
            foxtra = offset[oscard];
            foxtra = option.bind(romeon)(foxtra);
            kiloes = foxtra.Storage;
            backup = kiloes.get;
            foxtra = _closure1_slot10;
            foxtra = backup.bind(kiloes)(foxtra);
            report['token'] = foxtra;
            foxtra = _closure1_slot14;
            report['voip_provider'] = foxtra;
            oscard = offset[oscard];
            oscard = option.bind(romeon)(oscard);
            backup = oscard.Storage;
            foxtra = backup.get;
            oscard = _closure1_slot11;
            oscard = foxtra.bind(backup)(oscard);
            report['voip_token'] = oscard;
            michal['body'] = report;
            report = true;
            michal['oldFormErrors'] = report;
            report = {};
            oscard = 12;
            oscard = offset[oscard];
            oscard = option.bind(romeon)(oscard);
            oscard = oscard.NetworkActionNames;
            oscard = oscard.USER_LOGOUT;
            report['event'] = oscard;
            oscard = {};
            oscard['logout_source'] = golfie;
            report['properties'] = oscard;
            michal['trackedActionData'] = report;
            option = null;
            report = option != yankee;
            if(!report) { _fun00024_ip = 322; continue _fun00023 }
 260:
            oscard = {};
            golfie = {};
            offset = _closure1_slot2;
            foxtra = _closure1_slot3;
            verify = 16;
            verify = foxtra[verify];
            offset = offset.bind(romeon)(verify);
            verify = offset.getToken;
            verify = verify.bind(offset)(yankee);
            offset = option != verify;
            option = '';
            if(!offset) { _fun00024_ip = 309; continue _fun00023 }
 306:
            option = verify;
 309:
            golfie['authorization'] = option;
            oscard['headers'] = golfie;
            report = oscard;
 322:
            output = michal;
            sizing = report;
            report = copyDataProperties(output, sizing);
            oscard = false;
            report = 'rejectWithError';
            michal[report] = oscard;
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = zuuluu.finally;
            entity = function() {
                _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                    zuuluu = _closure2_slot2;
                    michal = null;
                    michal = michal != zuuluu;
                    if(!michal) { _fun00026_ip = 41; continue _fun00025 }
 16:
                    tangon = _closure2_slot2;
                    report = _closure1_slot7;
                    zuuluu = report.getId;
                    zuuluu = zuuluu.bind(report)();
                    michal = tangon !== zuuluu;
 41:
                    if(michal) { _fun00026_ip = 67; continue _fun00025 }
 44:
                    tangon = _closure1_slot20;
                    zuuluu = _closure2_slot0;
                    michal = _closure2_slot1;
                    entity = undefined;
                    entity = tangon.bind(entity)(zuuluu, michal);
 67:
                    entity = undefined;
                    return entity;
                }
            };
            entity = michal.bind(zuuluu)(entity);
            return entity;
        }
    };
    tangon['logout'] = option;
    option = function(argFoo) { // Original name: switchAccountToken
        _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
            report = argFoo;
            option = arguments[1];
            tangon = this;
            var _closure2_slot0 = report;
            golfie = undefined;
            if(!(option === golfie)) { _fun00028_ip = 23; continue _fun00027 }
 21:
            option = true;
 23:
            oscard = _closure1_slot7;
            zuuluu = oscard.getToken;
            zuuluu = zuuluu.bind(oscard)();
            offset = _closure1_slot16;
            verify = offset.log;
            oscard = {};
            yankee = null;
            yankee = yankee != zuuluu;
            oscard['wasLoggedIn'] = yankee;
            zuuluu = report !== zuuluu;
            oscard['tokenHasChanged'] = zuuluu;
            zuuluu = 'Switching accounts';
            zuuluu = verify.bind(offset)(zuuluu, oscard);
            oscard = _closure1_slot19;
            michal = {};
            zuuluu = true;
            michal['isSwitchingAccount'] = zuuluu;
            michal['goHomeAfterSwitching'] = option;
            michal = oscard.bind(golfie)(michal);
            michal = tangon.loginToken;
            zuuluu = michal.bind(tangon)(report, zuuluu);
            michal = zuuluu.then;
            entity = function() {
                zuuluu = _closure1_slot7;
                entity = zuuluu.getToken;
                zuuluu = entity.bind(zuuluu)();
                entity = _closure2_slot0;
                entity = entity === zuuluu;
                report = _closure1_slot16;
                tangon = report.log;
                zuuluu = {};
                zuuluu['isCorrectToken'] = entity;
                michal = 'Switched accounts finished';
                michal = tangon.bind(report)(michal, zuuluu);
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
            return entity;
        }
    };
    tangon['switchAccountToken'] = option;
    option = function(argFoo) { // Original name: verifySSOToken
        _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
            michal = arguments[1];
            zuuluu = argFoo;
            var _closure2_slot0 = zuuluu;
            tangon = undefined;
            if(!(michal === tangon)) { _fun00030_ip = 31; continue _fun00029 }
 18:
            zuuluu = _closure1_slot13;
            michal = zuuluu.DEFAULT_LOGGED_OUT;
 31:
            var _closure2_slot1 = michal;
            zuuluu = _closure1_slot0;
            oscard = _closure1_slot3;
            michal = 17;
            michal = oscard[michal];
            michal = zuuluu.bind(tangon)(michal);
            tangon = michal.HTTP;
            zuuluu = tangon.get;
            michal = {'url': null, 'oldFormErrors': true, 'rejectWithError': true};
            report = _closure1_slot9;
            report = report.ME;
            michal['url'] = report;
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = zuuluu.catch;
            entity = function() {
                tangon = _closure1_slot20;
                zuuluu = _closure2_slot0;
                michal = _closure2_slot1;
                entity = undefined;
                michal = tangon.bind(entity)(zuuluu, michal);
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
            return entity;
        }
    };
    tangon['verifySSOToken'] = option;
    option = function(argFoo) { // Original name: verify
        michal = argFoo;
        var _closure2_slot0 = michal;
        zuuluu = _closure1_slot5;
        michal = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00032_ip = 209; continue _fun00031 }
 10:
                    tangon = _closure1_slot1;
                    offset = _closure1_slot3;
                    michal = 11;
                    michal = offset[michal];
                    report = undefined;
                    oscard = tangon.bind(report)(michal);
                    tangon = oscard.post;
                    michal = {};
                    golfie = _closure1_slot9;
                    golfie = golfie.VERIFY;
                    michal['url'] = golfie;
                    golfie = {};
                    option = _closure2_slot0;
                    golfie['token'] = option;
                    michal['body'] = golfie;
                    golfie = {};
                    verify = _closure1_slot0;
                    option = 12;
                    option = offset[option];
                    option = verify.bind(report)(option);
                    option = option.NetworkActionNames;
                    option = option.USER_VERIFY;
                    golfie['event'] = option;
                    michal['trackedActionData'] = golfie;
                    golfie = false;
                    michal['rejectWithError'] = golfie;
                    michal = tangon.bind(oscard)(michal);
                    SaveGenerator(address=130);
 128:
                    return michal;
 130:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00032_ip = 206; continue _fun00031 }
 136:
                    tangon = _closure1_slot1;
                    oscard = _closure1_slot3;
                    zuuluu = 7;
                    zuuluu = oscard[zuuluu];
                    report = tangon.bind(report)(zuuluu);
                    tangon = report.dispatch;
                    zuuluu = {};
                    oscard = 'LOGIN_SUCCESS';
                    zuuluu['type'] = oscard;
                    oscard = michal.body;
                    oscard = oscard.token;
                    zuuluu['token'] = oscard;
                    zuuluu = tangon.bind(report)(zuuluu);
                    zuuluu = michal.body;
                    zuuluu = zuuluu.user_id;
                    return zuuluu;
 206:
                    return michal;
 209:
                    return entity;
                }
            };
            return entity;
        };
        entity = zuuluu.bind(michal)(entity);
        entity = entity.bind(michal)();
        return entity;
    };
    tangon['verify'] = option;
    option = function(argFoo) { // Original name: authorizePayment
        michal = _closure1_slot1;
        option = _closure1_slot3;
        entity = 11;
        entity = option[entity];
        golfie = undefined;
        zuuluu = michal.bind(golfie)(entity);
        michal = zuuluu.post;
        entity = {};
        tangon = _closure1_slot9;
        tangon = tangon.AUTHORIZE_PAYMENT;
        entity['url'] = tangon;
        tangon = {};
        oscard = argFoo;
        tangon['token'] = oscard;
        entity['body'] = tangon;
        tangon = {};
        oscard = _closure1_slot0;
        report = 12;
        report = option[report];
        report = oscard.bind(golfie)(report);
        report = report.NetworkActionNames;
        report = report.AUTHORIZE_PAYMENT;
        tangon['event'] = report;
        entity['trackedActionData'] = tangon;
        tangon = true;
        entity['rejectWithError'] = tangon;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    tangon['authorizePayment'] = option;
    option = function(argFoo) { // Original name: authorizeIPAddress
        michal = _closure1_slot1;
        option = _closure1_slot3;
        entity = 11;
        entity = option[entity];
        golfie = undefined;
        zuuluu = michal.bind(golfie)(entity);
        michal = zuuluu.post;
        entity = {};
        tangon = _closure1_slot9;
        tangon = tangon.AUTHORIZE_IP;
        entity['url'] = tangon;
        tangon = {};
        oscard = argFoo;
        tangon['token'] = oscard;
        entity['body'] = tangon;
        tangon = {};
        oscard = _closure1_slot0;
        report = 12;
        report = option[report];
        report = oscard.bind(golfie)(report);
        report = report.NetworkActionNames;
        report = report.AUTHORIZE_IP;
        tangon['event'] = report;
        entity['trackedActionData'] = tangon;
        tangon = true;
        entity['rejectWithError'] = tangon;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    tangon['authorizeIPAddress'] = option;
    option = function() { // Original name: verifyResend
        michal = _closure1_slot1;
        option = _closure1_slot3;
        entity = 11;
        entity = option[entity];
        golfie = undefined;
        zuuluu = michal.bind(golfie)(entity);
        michal = zuuluu.post;
        entity = {};
        tangon = _closure1_slot9;
        tangon = tangon.VERIFY_RESEND;
        entity['url'] = tangon;
        tangon = true;
        entity['oldFormErrors'] = tangon;
        tangon = {};
        oscard = _closure1_slot0;
        report = 12;
        report = option[report];
        report = oscard.bind(golfie)(report);
        report = report.NetworkActionNames;
        report = report.USER_VERIFY_RESEND;
        tangon['event'] = report;
        entity['trackedActionData'] = tangon;
        tangon = false;
        entity['rejectWithError'] = tangon;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    tangon['verifyResend'] = option;
    option = function(argFoo, argBar, argBaz) { // Original name: resetPassword
        michal = argFoo;
        var _closure2_slot0 = michal;
        michal = argBar;
        var _closure2_slot1 = michal;
        michal = argBaz;
        var _closure2_slot2 = michal;
        zuuluu = _closure1_slot5;
        michal = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00034_ip = 567; continue _fun00033 }
 10:
                    report = undefined;
                    backup = undefined;
                    romeon = undefined;
                    yankee = undefined;
                    offset = undefined;
                    verify = undefined;
                    option = undefined;
                    golfie = undefined;
                    foxtra = _closure1_slot1;
                    michal = _closure1_slot3;
                    oscard = 7;
                    zuuluu = michal[oscard];
                    kiloes = foxtra.bind(report)(zuuluu);
                    foxtra = kiloes.dispatch;
                    zuuluu = {};
                    sizing = 'LOGIN';
                    zuuluu['type'] = sizing;
                    zuuluu = foxtra.bind(kiloes)(zuuluu);
                    zuuluu = {};
                    kiloes = _closure2_slot0;
                    zuuluu['token'] = kiloes;
                    kiloes = _closure2_slot1;
                    zuuluu['password'] = kiloes;
                    foxtra = _closure2_slot2;
                    zuuluu['source'] = foxtra;
                    backup = zuuluu;
                    zuuluu = _closure1_slot0;
                    kiloes = 15;
                    michal = michal[kiloes];
                    michal = zuuluu.bind(report)(michal);
                    foxtra = michal.Storage;
                    zuuluu = foxtra.get;
                    michal = _closure1_slot10;
                    zuuluu = zuuluu.bind(foxtra)(michal);
                    michal = _closure1_slot15;
                    sizing = michal.bind(report)();
                    foxtra = null;
                    michal = foxtra != sizing;
                    if(!michal) { _fun00034_ip = 160; continue _fun00033 }
 156:
                    michal = foxtra != zuuluu;
 160:
                    if(!michal) { _fun00034_ip = 178; continue _fun00033 }
 163:
                    michal = backup;
                    michal['push_provider'] = sizing;
                    michal['push_token'] = zuuluu;
 178:
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot3;
                    michal = michal[kiloes];
                    michal = zuuluu.bind(report)(michal);
                    kiloes = michal.Storage;
                    zuuluu = kiloes.get;
                    michal = _closure1_slot11;
                    zuuluu = zuuluu.bind(kiloes)(michal);
                    michal = _closure1_slot14;
                    michal = foxtra != michal;
                    if(!michal) { _fun00034_ip = 230; continue _fun00033 }
 226:
                    michal = foxtra != zuuluu;
 230:
                    if(!michal) { _fun00034_ip = 252; continue _fun00033 }
 233:
                    michal = backup;
                    foxtra = _closure1_slot14;
                    michal['push_voip_provider'] = foxtra;
                    michal['push_voip_token'] = zuuluu;
 252: // try_start_0
                    zuuluu = _closure1_slot1;
                    output = _closure1_slot3;
                    michal = 11;
                    michal = output[michal];
                    foxtra = zuuluu.bind(report)(michal);
                    zuuluu = foxtra.post;
                    michal = {};
                    kiloes = _closure1_slot9;
                    kiloes = kiloes.RESET_PASSWORD;
                    michal['url'] = kiloes;
                    michal['body'] = backup;
                    backup = true;
                    michal['oldFormErrors'] = backup;
                    backup = {};
                    sizing = _closure1_slot0;
                    kiloes = 12;
                    kiloes = output[kiloes];
                    kiloes = sizing.bind(report)(kiloes);
                    kiloes = kiloes.NetworkActionNames;
                    kiloes = kiloes.USER_RESET_PASSWORD;
                    backup['event'] = kiloes;
                    michal['trackedActionData'] = backup;
                    backup = false;
                    michal['rejectWithError'] = backup;
                    michal = zuuluu.bind(foxtra)(michal);
                    SaveGenerator(address=360);
 358:
                    return michal;
 360:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00034_ip = 474; continue _fun00033 }
 366:
                    zuuluu = michal.body;
                    foxtra = zuuluu.mfa;
                    romeon = zuuluu.sms;
                    yankee = zuuluu.webauthn;
                    offset = zuuluu.ticket;
                    verify = zuuluu.token;
                    option = zuuluu.backup;
                    golfie = zuuluu.totp;
                    zuuluu = {};
                    backup = _closure1_slot18;
                    if(foxtra) { _fun00034_ip = 430; continue _fun00033 }
 422:
                    foxtra = backup.SUCCESS;
                    _fun00034_ip = 436; continue _fun00033;
 430:
                    foxtra = backup.MFA;
 436:
                    zuuluu['result'] = foxtra;
                    zuuluu['sms'] = romeon;
                    zuuluu['webauthn'] = yankee;
                    zuuluu['ticket'] = offset;
                    zuuluu['token'] = verify;
                    zuuluu['backup'] = option;
                    zuuluu['totp'] = golfie;
 471: // try_end0
                    return zuuluu;
 474:
                    return michal;
 477: // catch_target0
                    CatchBlockStart(arg_register=7);
                    golfie = _closure1_slot0;
                    zuuluu = _closure1_slot3;
                    michal = 13;
                    michal = zuuluu[michal];
                    michal = golfie.bind(report)(michal);
                    michal = michal.V6OrEarlierAPIError;
                    golfie = michal.prototype;
                    golfie = Object.create(golfie, {constructor: {value: michal}});
                    echoed = golfie;
                    result = option;
                    michal = new echoed[michal](result, output);
                    michal = michal instanceof Object ? michal : golfie;
                    tangon = _closure1_slot1;
                    zuuluu = zuuluu[oscard];
                    report = tangon.bind(report)(zuuluu);
                    tangon = report.dispatch;
                    zuuluu = {};
                    oscard = 'LOGIN_FAILURE';
                    zuuluu['type'] = oscard;
                    zuuluu['error'] = michal;
                    zuuluu = tangon.bind(report)(zuuluu);
                    throw michal;
 567:
                    return entity;
                }
            };
            return entity;
        };
        entity = zuuluu.bind(michal)(entity);
        entity = entity.bind(michal)();
        return entity;
    };
    tangon['resetPassword'] = option;
    option = function(argFoo) { // Original name: resetPasswordMFAv2
        michal = argFoo;
        zuuluu = michal.method;
        var _closure2_slot0 = zuuluu;
        zuuluu = michal.code;
        var _closure2_slot1 = zuuluu;
        zuuluu = michal.ticket;
        var _closure2_slot2 = zuuluu;
        zuuluu = michal.password;
        var _closure2_slot3 = zuuluu;
        zuuluu = michal.token;
        var _closure2_slot4 = zuuluu;
        michal = michal.source;
        var _closure2_slot5 = michal;
        zuuluu = _closure1_slot5;
        michal = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00036_ip = 245; continue _fun00035 }
 10:
                    zuuluu = _closure1_slot1;
                    offset = _closure1_slot3;
                    michal = 7;
                    michal = offset[michal];
                    verify = undefined;
                    report = zuuluu.bind(verify)(michal);
                    tangon = report.dispatch;
                    michal = {};
                    oscard = 'LOGIN_MFA';
                    michal['type'] = oscard;
                    michal = tangon.bind(report)(michal);
                    michal = 11;
                    michal = offset[michal];
                    tangon = zuuluu.bind(verify)(michal);
                    zuuluu = tangon.post;
                    michal = {};
                    report = _closure1_slot9;
                    report = report.RESET_PASSWORD;
                    michal['url'] = report;
                    report = {};
                    option = _closure2_slot1;
                    report['code'] = option;
                    option = _closure2_slot2;
                    report['ticket'] = option;
                    option = _closure2_slot3;
                    report['password'] = option;
                    option = _closure2_slot4;
                    report['token'] = option;
                    option = _closure2_slot5;
                    report['source'] = option;
                    oscard = _closure2_slot0;
                    report['method'] = oscard;
                    michal['body'] = report;
                    report = true;
                    michal['oldFormErrors'] = report;
                    oscard = {};
                    option = _closure1_slot0;
                    golfie = 12;
                    golfie = offset[golfie];
                    golfie = option.bind(verify)(golfie);
                    golfie = golfie.NetworkActionNames;
                    golfie = golfie.USER_RESET_PASSWORD;
                    oscard['event'] = golfie;
                    golfie = {};
                    golfie['mfa'] = report;
                    oscard['properties'] = golfie;
                    michal['trackedActionData'] = oscard;
                    michal['rejectWithError'] = report;
                    michal = zuuluu.bind(tangon)(michal);
                    SaveGenerator(address=222);
 220:
                    return michal;
 222:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00036_ip = 242; continue _fun00035 }
 228:
                    zuuluu = michal.body;
                    zuuluu = zuuluu.token;
                    return zuuluu;
 242:
                    return michal;
 245:
                    return entity;
                }
            };
            return entity;
        };
        entity = zuuluu.bind(michal)(entity);
        entity = entity.bind(michal)();
        return entity;
    };
    tangon['resetPasswordMFAv2'] = option;
    option = function(argFoo) { // Original name: forgotPassword
        michal = argFoo;
        var _closure2_slot0 = michal;
        zuuluu = _closure1_slot5;
        michal = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00037: for(var _fun00038_ip = 0; ; ) switch(_fun00038_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00038_ip = 405; continue _fun00037 }
 10:
                    tangon = undefined;
                    zuuluu = undefined;
                    golfie = _closure1_slot1;
                    oscard = _closure1_slot3;
                    report = 7;
                    oscard = oscard[report];
                    option = golfie.bind(tangon)(oscard);
                    golfie = option.dispatch;
                    oscard = {};
                    verify = 'FORGOT_PASSWORD_REQUEST';
                    oscard['type'] = verify;
                    oscard = golfie.bind(option)(oscard);
 57: // try_start_0
                    golfie = _closure1_slot1;
                    foxtra = _closure1_slot3;
                    oscard = 11;
                    oscard = foxtra[oscard];
                    verify = golfie.bind(tangon)(oscard);
                    option = verify.post;
                    oscard = {};
                    golfie = _closure1_slot9;
                    golfie = golfie.FORGOT_PASSWORD;
                    oscard['url'] = golfie;
                    golfie = {};
                    offset = _closure2_slot0;
                    golfie['login'] = offset;
                    oscard['body'] = golfie;
                    golfie = true;
                    oscard['oldFormErrors'] = golfie;
                    offset = {};
                    romeon = _closure1_slot0;
                    yankee = 12;
                    yankee = foxtra[yankee];
                    yankee = romeon.bind(tangon)(yankee);
                    yankee = yankee.NetworkActionNames;
                    yankee = yankee.FORGOT_PASSWORD;
                    offset['event'] = yankee;
                    oscard['trackedActionData'] = offset;
                    offset = false;
                    oscard['rejectWithError'] = offset;
                    oscard = option.bind(verify)(oscard);
                    SaveGenerator(address=179);
 177:
                    return oscard;
 179:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=7);
                    if(option) { _fun00038_ip = 225; continue _fun00037 }
 185:
                    verify = _closure1_slot1;
                    option = _closure1_slot3;
                    option = option[report];
                    offset = verify.bind(tangon)(option);
                    verify = offset.dispatch;
                    option = {};
                    yankee = 'FORGOT_PASSWORD_SENT';
                    option['type'] = yankee;
                    option = verify.bind(offset)(option);
 222: // try_end0
                    return golfie;
 225:
                    return oscard;
 228: // catch_target0
                    CatchBlockStart(arg_register=7);
                    golfie = _closure1_slot0;
                    verify = _closure1_slot3;
                    oscard = 13;
                    oscard = verify[oscard];
                    oscard = golfie.bind(tangon)(oscard);
                    oscard = oscard.V6OrEarlierAPIError;
                    golfie = oscard.prototype;
                    golfie = Object.create(golfie, {constructor: {value: oscard}});
                    kiloes = golfie;
                    backup = option;
                    oscard = new kiloes[oscard](backup, foxtra);
                    oscard = oscard instanceof Object ? oscard : golfie;
                    zuuluu = oscard;
                    golfie = oscard.code;
                    oscard = _closure1_slot12;
                    oscard = oscard.PHONE_VERIFICATION_REQUIRED;
                    if(!(golfie !== oscard)) { _fun00038_ip = 344; continue _fun00037 }
 301:
                    golfie = _closure1_slot1;
                    oscard = _closure1_slot3;
                    oscard = oscard[report];
                    option = golfie.bind(tangon)(oscard);
                    golfie = option.dispatch;
                    oscard = {};
                    verify = 'LOGIN_FAILURE';
                    oscard['type'] = verify;
                    oscard['error'] = zuuluu;
                    oscard = golfie.bind(option)(oscard);
                    throw zuuluu;
 344:
                    zuuluu = _closure1_slot1;
                    michal = _closure1_slot3;
                    michal = michal[report];
                    tangon = zuuluu.bind(tangon)(michal);
                    zuuluu = tangon.dispatch;
                    michal = {};
                    report = 'LOGIN_PASSWORD_RECOVERY_PHONE_VERIFICATION';
                    michal['type'] = report;
                    report = {};
                    oscard = _closure2_slot0;
                    report['login'] = oscard;
                    michal['credentials'] = report;
                    michal = zuuluu.bind(tangon)(michal);
                    michal = false;
                    return michal;
 405:
                    return entity;
                }
            };
            return entity;
        };
        entity = zuuluu.bind(michal)(entity);
        entity = entity.bind(michal)();
        return entity;
    };
    tangon['forgotPassword'] = option;
    option = function(argFoo) { // Original name: setFingerprint
        zuuluu = _closure1_slot1;
        michal = _closure1_slot3;
        entity = 7;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'FINGERPRINT';
        michal['type'] = report;
        report = argFoo;
        michal['fingerprint'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    tangon['setFingerprint'] = option;
    option = function(argFoo) { // Original name: getExperiments
        zuuluu = _closure1_slot1;
        michal = _closure1_slot3;
        entity = 7;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'EXPERIMENTS_FETCH';
        michal['type'] = report;
        report = argFoo;
        michal['withGuildExperiments'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    tangon['getExperiments'] = option;
    option = function() { // Original name: getLocationMetadata
        _fun00039: for(var _fun00040_ip = 0; ; ) switch(_fun00040_ip) {
 0:
            tangon = _closure1_slot17;
            zuuluu = null;
            if(!(zuuluu == tangon)) { _fun00040_ip = 156; continue _fun00039 }
 18:
            zuuluu = global;
            oscard = zuuluu.clearTimeout;
            tangon = _closure1_slot4;
            report = undefined;
            tangon = oscard.bind(report)(tangon);
            oscard = zuuluu.setTimeout;
            tangon = function() {
                zuuluu = _closure1_slot1;
                michal = _closure1_slot3;
                entity = 7;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.dispatch;
                michal = {'type': 'SET_CONSENT_REQUIRED', 'consentRequired': true};
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            zuuluu = 5000;
            zuuluu = oscard.bind(report)(tangon, zuuluu);
            var _closure1_slot4 = zuuluu;
            tangon = _closure1_slot0;
            oscard = _closure1_slot3;
            zuuluu = 17;
            zuuluu = oscard[zuuluu];
            zuuluu = tangon.bind(report)(zuuluu);
            report = zuuluu.HTTP;
            tangon = report.get;
            zuuluu = {'url': null, 'retries': 2, 'oldFormErrors': true, 'rejectWithError': true};
            oscard = _closure1_slot9;
            oscard = oscard.AUTH_LOCATION_METADATA;
            zuuluu['url'] = oscard;
            report = tangon.bind(report)(zuuluu);
            tangon = report.then;
            zuuluu = function(argFoo) {
                _fun00041: for(var _fun00042_ip = 0; ; ) switch(_fun00042_ip) {
 0:
                    zuuluu = argFoo;
                    entity = global;
                    report = entity.clearTimeout;
                    tangon = _closure1_slot4;
                    entity = undefined;
                    tangon = report.bind(entity)(tangon);
                    report = _closure1_slot8;
                    tangon = report.getAuthenticationConsentRequired;
                    tangon = tangon.bind(report)();
                    report = null;
                    if(!(report == tangon)) { _fun00042_ip = 133; continue _fun00041 }
 45:
                    oscard = report == zuuluu;
                    tangon = undefined;
                    if(oscard) { _fun00042_ip = 76; continue _fun00041 }
 54:
                    oscard = zuuluu.body;
                    golfie = report == oscard;
                    tangon = undefined;
                    if(golfie) { _fun00042_ip = 76; continue _fun00041 }
 68:
                    tangon = oscard.consent_required;
 76:
                    option = report == tangon;
                    if(option) { _fun00042_ip = 86; continue _fun00041 }
 83:
                    option = tangon;
 86:
                    oscard = _closure1_slot1;
                    golfie = _closure1_slot3;
                    tangon = 7;
                    tangon = golfie[tangon];
                    golfie = oscard.bind(entity)(tangon);
                    oscard = golfie.dispatch;
                    tangon = {};
                    verify = 'SET_CONSENT_REQUIRED';
                    tangon['type'] = verify;
                    tangon['consentRequired'] = option;
                    tangon = oscard.bind(golfie)(tangon);
 133:
                    oscard = _closure1_slot1;
                    golfie = _closure1_slot3;
                    tangon = 7;
                    tangon = golfie[tangon];
                    golfie = oscard.bind(entity)(tangon);
                    oscard = golfie.dispatch;
                    tangon = {};
                    option = 'SET_LOCATION_METADATA';
                    tangon['type'] = option;
                    option = report == zuuluu;
                    verify = undefined;
                    if(option) { _fun00042_ip = 197; continue _fun00041 }
 177:
                    option = zuuluu.body;
                    offset = report == option;
                    verify = undefined;
                    if(offset) { _fun00042_ip = 197; continue _fun00041 }
 191:
                    verify = option.country_code;
 197:
                    offset = report != verify;
                    option = undefined;
                    if(!offset) { _fun00042_ip = 209; continue _fun00041 }
 206:
                    option = verify;
 209:
                    tangon['countryCode'] = option;
                    tangon = oscard.bind(golfie)(tangon);
                    _closure1_slot17 = report;
                    oscard = report == zuuluu;
                    tangon = undefined;
                    if(oscard) { _fun00042_ip = 252; continue _fun00041 }
 232:
                    oscard = zuuluu.body;
                    golfie = report == oscard;
                    tangon = undefined;
                    if(golfie) { _fun00042_ip = 252; continue _fun00041 }
 246:
                    tangon = oscard.promotional_email_opt_in;
 252:
                    if(!(report != tangon)) { _fun00042_ip = 311; continue _fun00041 }
 256:
                    zuuluu = zuuluu.body;
                    tangon = zuuluu.promotional_email_opt_in;
                    zuuluu = _closure1_slot6;
                    michal = {};
                    report = tangon.required;
                    michal['required'] = report;
                    report = tangon.pre_checked;
                    michal['checked'] = report;
                    tangon = tangon.pre_checked;
                    michal['preChecked'] = tangon;
                    michal = zuuluu.bind(entity)(michal);
 311:
                    return entity;
                }
            };
            entity = function() {
                entity = global;
                tangon = entity.clearTimeout;
                michal = _closure1_slot4;
                entity = undefined;
                michal = tangon.bind(entity)(michal);
                tangon = _closure1_slot1;
                report = _closure1_slot3;
                michal = 7;
                michal = report[michal];
                report = tangon.bind(entity)(michal);
                tangon = report.dispatch;
                michal = {'type': 'SET_CONSENT_REQUIRED', 'consentRequired': true};
                michal = tangon.bind(report)(michal);
                michal = null;
                _closure1_slot17 = michal;
                return entity;
            };
            entity = tangon.bind(report)(zuuluu, entity);
            _closure1_slot17 = entity;
            _fun00040_ip = 160; continue _fun00039;
 156:
            entity = _closure1_slot17;
 160:
            return entity;
        }
    };
    tangon['getLocationMetadata'] = option;
    report = function() { // Original name: closeSuspendedUser
        zuuluu = _closure1_slot1;
        michal = _closure1_slot3;
        entity = 7;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'CLOSE_SUSPENDED_USER';
        michal['type'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    tangon['closeSuspendedUser'] = report;
    report = 18;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'actions/AuthenticationActionCreators.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['default'] = tangon;
    zuuluu['PasswordResetResult'] = michal;
    return entity;
})();