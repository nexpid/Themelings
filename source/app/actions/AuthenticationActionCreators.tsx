// app/actions/AuthenticationActionCreators.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBar;
    tango = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = tango;
    entity = argCorge;
    var _closure1_slot2 = entity;
    var _closure1_slot3 = golf;
    entity = function(argFoo) { // Original name: dispatchLogout
        tango = {};
        entity = 'LOGOUT';
        tango['type'] = entity;
        report = argFoo;
        oscar = tango;
        entity = copyDataProperties(oscar, report);
        zulu = _closure1_slot1;
        mike = _closure1_slot3;
        entity = 7;
        mike = mike[entity];
        entity = undefined;
        zulu = zulu.bind(entity)(mike);
        mike = zulu.dispatch;
        tango = mike.bind(zulu)(tango);
        zulu = tango.catch;
        mike = function(argFoo) {
            _fun63822: for(var _fun63822_ip = 0; ; ) switch(_fun63822_ip) {
 0:
                entity = argFoo;
                tango = _closure1_slot16;
                zulu = tango.error;
                mike = 'Error while dispatching LOGOUT';
                mike = zulu.bind(tango)(mike, entity);
                mike = global;
                mike = mike.window;
                zulu = mike.DiscordErrors;
                mike = null;
                if(!(mike != zulu)) { _fun63822_ip = 58; continue _fun63822 }
 47:
                mike = zulu.softCrash;
                mike = mike.bind(zulu)(entity);
 58:
                throw entity;
            }
        };
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    var _closure1_slot19 = entity;
    entity = function() { // Original name: handleLogout
        _fun63823: for(var _fun63823_ip = 0; ; ) switch(_fun63823_ip) {
 0:
            oscar = arguments[0];
            entity = undefined;
            if(!(oscar === entity)) { _fun63823_ip = 22; continue _fun63823 }
 9:
            mike = _closure1_slot13;
            oscar = mike.DEFAULT_LOGGED_OUT;
 22:
            zulu = _closure1_slot19;
            zulu = zulu.bind(entity)();
            zulu = null;
            if(!(zulu != oscar)) { _fun63823_ip = 181; continue _fun63823 }
 42:
            report = _closure1_slot0;
            golf = _closure1_slot3;
            tango = 8;
            tango = golf[tango];
            report = report.bind(entity)(tango);
            tango = report.getRootNavigationRef;
            tango = tango.bind(report)();
            if(!(zulu == tango)) { _fun63823_ip = 109; continue _fun63823 }
 76:
            report = _closure1_slot0;
            golf = _closure1_slot3;
            zulu = 9;
            zulu = golf[zulu];
            report = report.bind(entity)(zulu);
            zulu = report.transitionTo;
            zulu = zulu.bind(report)(oscar);
            _fun63823_ip = 181; continue _fun63823;
 109:
            zulu = _closure1_slot1;
            report = _closure1_slot3;
            mike = 10;
            mike = report[mike];
            zulu = zulu.bind(entity)(mike);
            mike = zulu.popAll;
            mike = mike.bind(zulu)();
            zulu = tango.reset;
            mike = {};
            report = 0;
            mike['index'] = report;
            oscar = {};
            report = 'auth';
            oscar['name'] = report;
            report = new Array(1);
            report[0] = oscar;
            mike['routes'] = report;
            mike = zulu.bind(tango)(mike);
 181:
            return entity;
        }
    };
    var _closure1_slot20 = entity;
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
    var _closure1_slot5 = mike;
    mike = 1;
    mike = golf[mike];
    mike = oscar.bind(entity)(mike);
    mike = mike.setPromoEmailConsentState;
    var _closure1_slot6 = mike;
    mike = 2;
    mike = golf[mike];
    mike = tango.bind(entity)(mike);
    var _closure1_slot7 = mike;
    mike = 3;
    mike = golf[mike];
    mike = tango.bind(entity)(mike);
    var _closure1_slot8 = mike;
    mike = 4;
    mike = golf[mike];
    mike = oscar.bind(entity)(mike);
    options = mike.Endpoints;
    var _closure1_slot9 = options;
    options = mike.DEVICE_TOKEN;
    var _closure1_slot10 = options;
    options = mike.DEVICE_VOIP_TOKEN;
    var _closure1_slot11 = options;
    options = mike.AbortCodes;
    var _closure1_slot12 = options;
    mike = mike.Routes;
    var _closure1_slot13 = mike;
    mike = 5;
    mike = golf[mike];
    mike = oscar.bind(entity)(mike);
    options = mike.DEVICE_PUSH_VOIP_PROVIDER;
    var _closure1_slot14 = options;
    mike = mike.getDevicePushProvider;
    var _closure1_slot15 = mike;
    mike = 6;
    mike = golf[mike];
    options = tango.bind(entity)(mike);
    mike = options.prototype;
    tango = Object.create(mike, {constructor: {value: options}});
    romeo = 'AuthenticationActionCreators';
    foxtrot = tango;
    mike = new foxtrot[options](romeo, yankee);
    mike = mike instanceof Object ? mike : tango;
    var _closure1_slot16 = mike;
    mike = null;
    var _closure1_slot17 = mike;
    mike = {};
    tango = 'MFA';
    mike['MFA'] = tango;
    tango = 'SUCCESS';
    mike['SUCCESS'] = tango;
    var _closure1_slot18 = mike;
    tango = {};
    options = function(argFoo) { // Original name: startSession
        entity = argFoo;
        var _closure2_slot0 = entity;
        tango = _closure1_slot1;
        zulu = _closure1_slot3;
        entity = 7;
        zulu = zulu[entity];
        entity = undefined;
        tango = tango.bind(entity)(zulu);
        zulu = tango.wait;
        mike = function() {
            zulu = _closure1_slot1;
            mike = _closure1_slot3;
            entity = 7;
            mike = mike[entity];
            entity = undefined;
            tango = zulu.bind(entity)(mike);
            zulu = tango.dispatch;
            mike = {};
            report = 'START_SESSION';
            mike['type'] = report;
            report = _closure2_slot0;
            mike['token'] = report;
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    tango['startSession'] = options;
    options = function(argFoo) { // Original name: login
        _fun63826: for(var _fun63826_ip = 0; ; ) switch(_fun63826_ip) {
 0:
            mike = argFoo;
            zulu = this;
            var _closure2_slot0 = zulu;
            sizing = mike.login;
            var _closure2_slot1 = sizing;
            kilo = mike.password;
            var _closure2_slot2 = kilo;
            backup = mike.undelete;
            foxtrot = mike.source;
            romeo = mike.giftCodeSKUId;
            verify = mike.invite;
            report = mike.isMultiAccount;
            var _closure2_slot3 = report;
            zulu = _closure1_slot1;
            yankee = _closure1_slot3;
            mike = 7;
            mike = yankee[mike];
            options = undefined;
            offset = zulu.bind(options)(mike);
            tango = offset.dispatch;
            oscar = true;
            mike = {'type': 'LOGIN', 'isPasswordAttempt': true};
            mike = tango.bind(offset)(mike);
            mike = 11;
            mike = yankee[mike];
            tango = zulu.bind(options)(mike);
            zulu = tango.post;
            mike = {};
            offset = _closure1_slot9;
            offset = offset.LOGIN;
            mike['url'] = offset;
            offset = {};
            offset['login'] = sizing;
            offset['password'] = kilo;
            offset['undelete'] = backup;
            offset['login_source'] = foxtrot;
            offset['gift_code_sku_id'] = romeo;
            mike['body'] = offset;
            offset = 2;
            mike['retries'] = offset;
            mike['oldFormErrors'] = oscar;
            oscar = {};
            offset = _closure1_slot0;
            golf = 12;
            golf = yankee[golf];
            golf = offset.bind(options)(golf);
            golf = golf.NetworkActionNames;
            golf = golf.USER_LOGIN;
            oscar['event'] = golf;
            golf = {};
            offset = null;
            offset = offset == verify;
            if(offset) { _fun63826_ip = 245; continue _fun63826 }
 240:
            options = verify.code;
 245:
            golf['invite_code'] = options;
            golf['is_multi_account'] = report;
            oscar['properties'] = golf;
            mike['trackedActionData'] = oscar;
            if(report) { _fun63826_ip = 274; continue _fun63826 }
 270:
            report = {};
            _fun63826_ip = 295; continue _fun63826;
 274:
            oscar = {};
            golf = {};
            options = '';
            golf['authorization'] = options;
            oscar['headers'] = golf;
            report = oscar;
 295:
            result = mike;
            output = report;
            report = copyDataProperties(result, output);
            oscar = false;
            report = 'rejectWithError';
            mike[report] = oscar;
            tango = zulu.bind(tango)(mike);
            zulu = tango.then;
            mike = function(argFoo) {
                _fun63827: for(var _fun63827_ip = 0; ; ) switch(_fun63827_ip) {
 0:
                    entity = argFoo;
                    entity = entity.body;
                    zulu = entity.mfa;
                    options = entity.sms;
                    golf = entity.webauthn;
                    verify = entity.ticket;
                    yankee = entity.token;
                    report = entity.backup;
                    kilo = entity.user_id;
                    backup = entity.required_actions;
                    oscar = entity.totp;
                    romeo = _closure1_slot1;
                    entity = _closure1_slot3;
                    tango = 7;
                    offset = entity[tango];
                    entity = undefined;
                    foxtrot = romeo.bind(entity)(offset);
                    romeo = foxtrot.dispatch;
                    offset = {};
                    sizing = 'LOGIN_ATTEMPTED';
                    offset['type'] = sizing;
                    offset['user_id'] = kilo;
                    offset['required_actions'] = backup;
                    offset = romeo.bind(foxtrot)(offset);
                    if(zulu) { _fun63827_ip = 193; continue _fun63827 }
 122:
                    offset = _closure2_slot3;
                    if(offset) { _fun63827_ip = 176; continue _fun63827 }
 132:
                    romeo = _closure1_slot1;
                    offset = _closure1_slot3;
                    offset = offset[tango];
                    foxtrot = romeo.bind(entity)(offset);
                    romeo = foxtrot.dispatch;
                    offset = {};
                    backup = 'LOGIN_SUCCESS';
                    offset['type'] = backup;
                    offset['token'] = yankee;
                    offset = romeo.bind(foxtrot)(offset);
                    _fun63827_ip = 255; continue _fun63827;
 176:
                    offset = _closure2_slot0;
                    zulu = offset.switchAccountToken;
                    zulu = zulu.bind(offset)(yankee);
                    _fun63827_ip = 255; continue _fun63827;
 193:
                    zulu = _closure1_slot1;
                    mike = _closure1_slot3;
                    mike = mike[tango];
                    tango = zulu.bind(entity)(mike);
                    zulu = tango.dispatch;
                    mike = {};
                    offset = 'LOGIN_MFA_STEP';
                    mike['type'] = offset;
                    mike['ticket'] = verify;
                    mike['sms'] = options;
                    mike['webauthn'] = golf;
                    mike['totp'] = oscar;
                    mike['backup'] = report;
                    mike = zulu.bind(tango)(mike);
 255:
                    return entity;
                }
            };
            entity = function(argFoo) {
                _fun63828: for(var _fun63828_ip = 0; ; ) switch(_fun63828_ip) {
 0:
                    oscar = argFoo;
                    zulu = _closure1_slot0;
                    tango = _closure1_slot3;
                    entity = 13;
                    entity = tango[entity];
                    report = undefined;
                    entity = zulu.bind(report)(entity);
                    entity = entity.V6OrEarlierAPIError;
                    zulu = entity.prototype;
                    zulu = Object.create(zulu, {constructor: {value: entity}});
                    kilo = zulu;
                    backup = oscar;
                    entity = new kilo[entity](backup, foxtrot);
                    entity = entity instanceof Object ? entity : zulu;
                    zulu = oscar.body;
                    golf = null;
                    if(!(golf != zulu)) { _fun63828_ip = 95; continue _fun63828 }
 68:
                    tango = oscar.body;
                    options = golf == tango;
                    zulu = undefined;
                    if(options) { _fun63828_ip = 88; continue _fun63828 }
 82:
                    zulu = tango.suspended_user_token;
 88:
                    if(!(golf == zulu)) { _fun63828_ip = 464; continue _fun63828 }
 95:
                    zulu = oscar.body;
                    options = golf == zulu;
                    tango = undefined;
                    if(options) { _fun63828_ip = 114; continue _fun63828 }
 109:
                    tango = zulu.code;
 114:
                    zulu = _closure1_slot12;
                    zulu = zulu.ACCOUNT_SCHEDULED_FOR_DELETION;
                    if(!(tango === zulu)) { _fun63828_ip = 154; continue _fun63828 }
 128:
                    zulu = _closure2_slot2;
                    if(!(golf != zulu)) { _fun63828_ip = 154; continue _fun63828 }
 139:
                    options = _closure2_slot2;
                    zulu = '';
                    if(!(zulu === options)) { _fun63828_ip = 397; continue _fun63828 }
 154:
                    zulu = _closure1_slot12;
                    zulu = zulu.ACCOUNT_DISABLED;
                    if(!(tango === zulu)) { _fun63828_ip = 194; continue _fun63828 }
 168:
                    zulu = _closure2_slot2;
                    if(!(golf != zulu)) { _fun63828_ip = 194; continue _fun63828 }
 179:
                    options = _closure2_slot2;
                    zulu = '';
                    if(!(zulu === options)) { _fun63828_ip = 330; continue _fun63828 }
 194:
                    zulu = _closure1_slot12;
                    zulu = zulu.PHONE_VERIFICATION_REQUIRED;
                    if(!(tango !== zulu)) { _fun63828_ip = 257; continue _fun63828 }
 208:
                    tango = _closure1_slot1;
                    options = _closure1_slot3;
                    zulu = 7;
                    zulu = options[zulu];
                    options = tango.bind(report)(zulu);
                    tango = options.dispatch;
                    zulu = {};
                    verify = 'LOGIN_FAILURE';
                    zulu['type'] = verify;
                    zulu['error'] = entity;
                    zulu = tango.bind(options)(zulu);
                    _fun63828_ip = 462; continue _fun63828;
 257:
                    tango = _closure1_slot1;
                    options = _closure1_slot3;
                    zulu = 7;
                    zulu = options[zulu];
                    options = tango.bind(report)(zulu);
                    tango = options.dispatch;
                    zulu = {};
                    verify = 'LOGIN_PHONE_IP_AUTHORIZATION_REQUIRED';
                    zulu['type'] = verify;
                    verify = {};
                    foxtrot = _closure2_slot1;
                    verify['login'] = foxtrot;
                    romeo = _closure2_slot2;
                    verify['password'] = romeo;
                    zulu['credentials'] = verify;
                    zulu = tango.bind(options)(zulu);
                    _fun63828_ip = 462; continue _fun63828;
 330:
                    tango = _closure1_slot1;
                    options = _closure1_slot3;
                    zulu = 7;
                    zulu = options[zulu];
                    options = tango.bind(report)(zulu);
                    tango = options.dispatch;
                    zulu = {};
                    verify = 'LOGIN_ACCOUNT_DISABLED';
                    zulu['type'] = verify;
                    verify = {};
                    romeo = _closure2_slot1;
                    verify['login'] = romeo;
                    yankee = _closure2_slot2;
                    verify['password'] = yankee;
                    zulu['credentials'] = verify;
                    zulu = tango.bind(options)(zulu);
                    _fun63828_ip = 462; continue _fun63828;
 397:
                    tango = _closure1_slot1;
                    options = _closure1_slot3;
                    zulu = 7;
                    zulu = options[zulu];
                    options = tango.bind(report)(zulu);
                    tango = options.dispatch;
                    zulu = {};
                    verify = 'LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION';
                    zulu['type'] = verify;
                    verify = {};
                    yankee = _closure2_slot1;
                    verify['login'] = yankee;
                    offset = _closure2_slot2;
                    verify['password'] = offset;
                    zulu['credentials'] = verify;
                    zulu = tango.bind(options)(zulu);
 462:
                    throw entity;
 464:
                    zulu = _closure1_slot1;
                    tango = _closure1_slot3;
                    mike = 7;
                    mike = tango[mike];
                    tango = zulu.bind(report)(mike);
                    zulu = tango.dispatch;
                    mike = {};
                    options = 'LOGIN_SUSPENDED_USER';
                    mike['type'] = options;
                    oscar = oscar.body;
                    golf = golf == oscar;
                    report = undefined;
                    if(golf) { _fun63828_ip = 519; continue _fun63828 }
 513:
                    report = oscar.suspended_user_token;
 519:
                    mike['suspendedUserToken'] = report;
                    mike = zulu.bind(tango)(mike);
                    throw entity;
                }
            };
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    tango['login'] = options;
    options = function(argFoo) { // Original name: loginMFAv2
        mike = argFoo;
        zulu = this;
        var _closure2_slot0 = zulu;
        romeo = mike.code;
        yankee = mike.ticket;
        offset = mike.source;
        golf = mike.giftCodeSKUId;
        zulu = mike.isMultiAccount;
        var _closure2_slot1 = zulu;
        backup = mike.mfaType;
        zulu = _closure1_slot1;
        verify = _closure1_slot3;
        mike = 11;
        mike = verify[mike];
        options = undefined;
        tango = zulu.bind(options)(mike);
        zulu = tango.post;
        mike = {'url': null, 'body': null, 'retries': 2, 'oldFormErrors': true, 'trackedActionData': null, 'rejectWithError': false};
        foxtrot = _closure1_slot9;
        report = foxtrot.LOGIN_MFA;
        report = report.bind(foxtrot)(backup);
        mike['url'] = report;
        report = {};
        report['code'] = romeo;
        report['ticket'] = yankee;
        report['login_source'] = offset;
        report['gift_code_sku_id'] = golf;
        mike['body'] = report;
        report = {};
        golf = _closure1_slot0;
        oscar = 12;
        oscar = verify[oscar];
        oscar = golf.bind(options)(oscar);
        oscar = oscar.NetworkActionNames;
        oscar = oscar.USER_LOGIN_MFA;
        report['event'] = oscar;
        mike['trackedActionData'] = report;
        tango = zulu.bind(tango)(mike);
        zulu = tango.then;
        mike = function(argFoo) {
            _fun63830: for(var _fun63830_ip = 0; ; ) switch(_fun63830_ip) {
 0:
                entity = argFoo;
                zulu = _closure2_slot1;
                if(zulu) { _fun63830_ip = 76; continue _fun63830 }
 13:
                report = _closure1_slot1;
                tango = _closure1_slot3;
                zulu = 7;
                tango = tango[zulu];
                zulu = undefined;
                report = report.bind(zulu)(tango);
                tango = report.dispatch;
                zulu = {};
                oscar = 'LOGIN_SUCCESS';
                zulu['type'] = oscar;
                oscar = entity.body;
                oscar = oscar.token;
                zulu['token'] = oscar;
                zulu = tango.bind(report)(zulu);
                _fun63830_ip = 102; continue _fun63830;
 76:
                zulu = _closure2_slot0;
                mike = zulu.switchAccountToken;
                entity = entity.body;
                entity = entity.token;
                entity = mike.bind(zulu)(entity);
 102:
                entity = undefined;
                return entity;
            }
        };
        zulu = zulu.bind(tango)(mike);
        mike = zulu.catch;
        entity = function(argFoo) {
            _fun63831: for(var _fun63831_ip = 0; ; ) switch(_fun63831_ip) {
 0:
                entity = argFoo;
                mike = entity.body;
                zulu = null;
                if(!(zulu != mike)) { _fun63831_ip = 92; continue _fun63831 }
 14:
                mike = entity.body;
                mike = mike.suspended_user_token;
                if(!(zulu != mike)) { _fun63831_ip = 92; continue _fun63831 }
 29:
                report = _closure1_slot1;
                tango = _closure1_slot3;
                mike = 7;
                tango = tango[mike];
                mike = undefined;
                oscar = report.bind(mike)(tango);
                report = oscar.dispatch;
                tango = {};
                golf = 'LOGIN_SUSPENDED_USER';
                tango['type'] = golf;
                golf = entity.body;
                golf = golf.suspended_user_token;
                tango['suspendedUserToken'] = golf;
                tango = report.bind(oscar)(tango);
                return mike;
 92:
                mike = entity.body;
                tango = zulu == mike;
                zulu = undefined;
                if(tango) { _fun63831_ip = 111; continue _fun63831 }
 106:
                zulu = mike.code;
 111:
                mike = _closure1_slot12;
                mike = mike.MFA_INVALID_CODE;
                if(!(zulu !== mike)) { _fun63831_ip = 130; continue _fun63831 }
 128:
                throw entity;
 130:
                mike = global;
                zulu = mike.Error;
                entity = entity.body;
                options = entity.message;
                mike = zulu.prototype;
                mike = Object.create(mike, {constructor: {value: zulu}});
                verify = mike;
                entity = new verify[zulu](options, golf);
                entity = entity instanceof Object ? entity : mike;
                throw entity;
            }
        };
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    tango['loginMFAv2'] = options;
    options = function(argFoo) { // Original name: authenticatePasswordless
        _fun63832: for(var _fun63832_ip = 0; ; ) switch(_fun63832_ip) {
 0:
            mike = argFoo;
            zulu = this;
            var _closure2_slot0 = zulu;
            zulu = mike.authenticateFunc;
            var _closure2_slot1 = zulu;
            tango = mike.conditionalMediationAbortController;
            zulu = mike.source;
            var _closure2_slot2 = zulu;
            mike = mike.giftCodeSKUId;
            var _closure2_slot3 = mike;
            mike = null;
            if(!(mike != tango)) { _fun63832_ip = 72; continue _fun63832 }
 55:
            zulu = tango.abort;
            mike = 'Starting non-conditional mediation';
            mike = zulu.bind(tango)(mike);
 72:
            oscar = _closure1_slot1;
            report = _closure1_slot3;
            zulu = 7;
            zulu = report[zulu];
            tango = undefined;
            golf = oscar.bind(tango)(zulu);
            oscar = golf.dispatch;
            zulu = {};
            options = 'PASSWORDLESS_START';
            zulu['type'] = options;
            zulu = oscar.bind(golf)(zulu);
            zulu = _closure1_slot0;
            mike = 14;
            mike = report[mike];
            zulu = zulu.bind(tango)(mike);
            mike = zulu.fetchWebAuthnPasswordlessChallenge;
            tango = mike.bind(zulu)();
            zulu = tango.then;
            mike = function(argFoo) {
                mike = argFoo;
                tango = mike.challenge;
                mike = mike.ticket;
                var _closure3_slot0 = mike;
                zulu = _closure2_slot1;
                mike = undefined;
                zulu = zulu.bind(mike)(tango);
                mike = zulu.then;
                entity = function(argFoo) {
                    zulu = _closure2_slot0;
                    mike = zulu.loginWebAuthn;
                    entity = {};
                    report = _closure3_slot0;
                    entity['ticket'] = report;
                    report = argFoo;
                    entity['credential'] = report;
                    report = _closure2_slot2;
                    entity['source'] = report;
                    tango = _closure2_slot3;
                    entity['giftCodeSKUId'] = tango;
                    entity = mike.bind(zulu)(entity);
                    return entity;
                };
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            zulu = zulu.bind(tango)(mike);
            mike = zulu.catch;
            entity = function(argFoo) {
                entity = argFoo;
                tango = _closure1_slot1;
                zulu = _closure1_slot3;
                mike = 7;
                zulu = zulu[mike];
                mike = undefined;
                tango = tango.bind(mike)(zulu);
                zulu = tango.dispatch;
                mike = {};
                report = 'PASSWORDLESS_FAILURE';
                mike['type'] = report;
                mike['error'] = entity;
                mike = zulu.bind(tango)(mike);
                throw entity;
            };
            entity = mike.bind(zulu)(entity);
            return entity;
        }
    };
    tango['authenticatePasswordless'] = options;
    options = function(argFoo) { // Original name: loginWebAuthn
        mike = argFoo;
        yankee = mike.ticket;
        romeo = mike.credential;
        offset = mike.source;
        golf = mike.giftCodeSKUId;
        zulu = _closure1_slot1;
        verify = _closure1_slot3;
        mike = 11;
        mike = verify[mike];
        options = undefined;
        tango = zulu.bind(options)(mike);
        zulu = tango.post;
        mike = {};
        report = _closure1_slot9;
        report = report.WEBAUTHN_CONDITIONAL_UI_LOGIN;
        mike['url'] = report;
        report = {};
        report['credential'] = romeo;
        report['ticket'] = yankee;
        report['source'] = offset;
        report['giftCodeSKUId'] = golf;
        mike['body'] = report;
        report = 1;
        mike['retries'] = report;
        report = {};
        golf = _closure1_slot0;
        oscar = 12;
        oscar = verify[oscar];
        oscar = golf.bind(options)(oscar);
        oscar = oscar.NetworkActionNames;
        oscar = oscar.USER_LOGIN_PASSWORDLESS;
        report['event'] = oscar;
        mike['trackedActionData'] = report;
        report = false;
        mike['rejectWithError'] = report;
        tango = zulu.bind(tango)(mike);
        zulu = tango.then;
        mike = function(argFoo) {
            entity = argFoo;
            entity = entity.body;
            report = entity.token;
            offset = entity.user_id;
            verify = entity.required_actions;
            zulu = _closure1_slot1;
            tango = _closure1_slot3;
            mike = 7;
            oscar = tango[mike];
            entity = undefined;
            options = zulu.bind(entity)(oscar);
            golf = options.dispatch;
            oscar = {};
            yankee = 'LOGIN_ATTEMPTED';
            oscar['type'] = yankee;
            oscar['user_id'] = offset;
            oscar['required_actions'] = verify;
            oscar = golf.bind(options)(oscar);
            mike = tango[mike];
            tango = zulu.bind(entity)(mike);
            zulu = tango.dispatch;
            mike = {};
            oscar = 'LOGIN_SUCCESS';
            mike['type'] = oscar;
            mike['token'] = report;
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        zulu = zulu.bind(tango)(mike);
        mike = zulu.catch;
        entity = function(argFoo) {
            _fun63838: for(var _fun63838_ip = 0; ; ) switch(_fun63838_ip) {
 0:
                entity = argFoo;
                mike = entity.body;
                zulu = null;
                if(!(zulu != mike)) { _fun63838_ip = 92; continue _fun63838 }
 14:
                mike = entity.body;
                mike = mike.suspended_user_token;
                if(!(zulu != mike)) { _fun63838_ip = 92; continue _fun63838 }
 29:
                tango = _closure1_slot1;
                zulu = _closure1_slot3;
                mike = 7;
                zulu = zulu[mike];
                mike = undefined;
                report = tango.bind(mike)(zulu);
                tango = report.dispatch;
                zulu = {};
                oscar = 'LOGIN_SUSPENDED_USER';
                zulu['type'] = oscar;
                oscar = entity.body;
                oscar = oscar.suspended_user_token;
                zulu['suspendedUserToken'] = oscar;
                zulu = tango.bind(report)(zulu);
                return mike;
 92:
                tango = _closure1_slot1;
                zulu = _closure1_slot3;
                mike = 7;
                zulu = zulu[mike];
                mike = undefined;
                tango = tango.bind(mike)(zulu);
                zulu = tango.dispatch;
                mike = {};
                report = 'PASSWORDLESS_FAILURE';
                mike['type'] = report;
                mike['error'] = entity;
                mike = zulu.bind(tango)(mike);
                throw entity;
            }
        };
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    tango['loginWebAuthn'] = options;
    options = function(argFoo) { // Original name: loginToken
        _fun63839: for(var _fun63839_ip = 0; ; ) switch(_fun63839_ip) {
 0:
            mike = arguments[1];
            zulu = this;
            var _closure2_slot0 = zulu;
            zulu = argFoo;
            var _closure2_slot1 = zulu;
            tango = undefined;
            if(!(mike === tango)) { _fun63839_ip = 27; continue _fun63839 }
 25:
            mike = true;
 27:
            var _closure2_slot2 = mike;
            zulu = _closure1_slot1;
            report = _closure1_slot3;
            mike = 7;
            mike = report[mike];
            tango = zulu.bind(tango)(mike);
            zulu = tango.dispatch;
            mike = {};
            report = 'LOGIN';
            mike['type'] = report;
            mike = zulu.bind(tango)(mike);
            mike = global;
            zulu = mike.Promise;
            mike = zulu.prototype;
            mike = Object.create(mike, {constructor: {value: zulu}});
            oscar = function(argFoo) {
                entity = argFoo;
                var _closure3_slot0 = entity;
                entity = global;
                zulu = entity.setImmediate;
                entity = undefined;
                mike = function() {
                    _fun63841: for(var _fun63841_ip = 0; ; ) switch(_fun63841_ip) {
 0:
                        zulu = _closure1_slot1;
                        mike = _closure1_slot3;
                        entity = 7;
                        mike = mike[entity];
                        entity = undefined;
                        report = zulu.bind(entity)(mike);
                        tango = report.dispatch;
                        zulu = {};
                        mike = 'LOGIN_SUCCESS';
                        zulu['type'] = mike;
                        oscar = _closure2_slot1;
                        zulu['token'] = oscar;
                        zulu = tango.bind(report)(zulu);
                        zulu = _closure2_slot2;
                        if(!zulu) { _fun63841_ip = 83; continue _fun63841 }
 64:
                        tango = _closure2_slot0;
                        zulu = tango.startSession;
                        mike = _closure2_slot1;
                        mike = zulu.bind(tango)(mike);
 83:
                        mike = _closure3_slot0;
                        mike = mike.bind(entity)();
                        return entity;
                    }
                };
                mike = zulu.bind(entity)(mike);
                return entity;
            };
            golf = mike;
            entity = new golf[zulu](oscar, report);
            entity = entity instanceof Object ? entity : mike;
            return entity;
        }
    };
    tango['loginToken'] = options;
    options = function(argFoo) { // Original name: loginReset
        zulu = _closure1_slot1;
        mike = _closure1_slot3;
        entity = 7;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'LOGIN_RESET';
        mike['type'] = report;
        report = argFoo;
        mike['isMultiAccount'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    tango['loginReset'] = options;
    options = function() { // Original name: loginStatusReset
        zulu = _closure1_slot1;
        mike = _closure1_slot3;
        entity = 7;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'LOGIN_STATUS_RESET';
        mike['type'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    tango['loginStatusReset'] = options;
    options = function(argFoo) { // Original name: logoutInternal
        zulu = _closure1_slot19;
        entity = undefined;
        mike = argFoo;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango['logoutInternal'] = options;
    options = function() { // Original name: logout
        _fun63845: for(var _fun63845_ip = 0; ; ) switch(_fun63845_ip) {
 0:
            mike = arguments[0];
            yankee = arguments[1];
            romeo = undefined;
            if(!(mike === romeo)) { _fun63845_ip = 27; continue _fun63845 }
 14:
            zulu = _closure1_slot13;
            mike = zulu.DEFAULT_LOGGED_OUT;
 27:
            var _closure2_slot0 = mike;
            var _closure2_slot1 = yankee;
            zulu = _closure1_slot1;
            options = _closure1_slot3;
            mike = 11;
            mike = options[mike];
            tango = zulu.bind(romeo)(mike);
            zulu = tango.post;
            mike = {};
            report = _closure1_slot9;
            report = report.LOGOUT;
            mike['url'] = report;
            report = {};
            oscar = _closure1_slot15;
            oscar = oscar.bind(romeo)();
            report['provider'] = oscar;
            golf = _closure1_slot0;
            oscar = 15;
            offset = options[oscar];
            offset = golf.bind(romeo)(offset);
            backup = offset.Storage;
            foxtrot = backup.get;
            offset = _closure1_slot10;
            offset = foxtrot.bind(backup)(offset);
            report['token'] = offset;
            offset = _closure1_slot14;
            report['voip_provider'] = offset;
            oscar = options[oscar];
            oscar = golf.bind(romeo)(oscar);
            foxtrot = oscar.Storage;
            offset = foxtrot.get;
            oscar = _closure1_slot11;
            oscar = offset.bind(foxtrot)(oscar);
            report['voip_token'] = oscar;
            mike['body'] = report;
            report = true;
            mike['oldFormErrors'] = report;
            report = {};
            oscar = 12;
            oscar = options[oscar];
            oscar = golf.bind(romeo)(oscar);
            oscar = oscar.NetworkActionNames;
            oscar = oscar.USER_LOGOUT;
            report['event'] = oscar;
            mike['trackedActionData'] = report;
            options = null;
            report = options != yankee;
            if(!report) { _fun63845_ip = 301; continue _fun63845 }
 239:
            oscar = {};
            golf = {};
            offset = _closure1_slot2;
            foxtrot = _closure1_slot3;
            verify = 16;
            verify = foxtrot[verify];
            offset = offset.bind(romeo)(verify);
            verify = offset.getToken;
            verify = verify.bind(offset)(yankee);
            offset = options != verify;
            options = '';
            if(!offset) { _fun63845_ip = 288; continue _fun63845 }
 285:
            options = verify;
 288:
            golf['authorization'] = options;
            oscar['headers'] = golf;
            report = oscar;
 301:
            sizing = mike;
            kilo = report;
            report = copyDataProperties(sizing, kilo);
            oscar = false;
            report = 'rejectWithError';
            mike[report] = oscar;
            zulu = zulu.bind(tango)(mike);
            mike = zulu.finally;
            entity = function() {
                _fun63846: for(var _fun63846_ip = 0; ; ) switch(_fun63846_ip) {
 0:
                    zulu = _closure2_slot1;
                    mike = null;
                    mike = mike != zulu;
                    if(!mike) { _fun63846_ip = 41; continue _fun63846 }
 16:
                    tango = _closure2_slot1;
                    report = _closure1_slot7;
                    zulu = report.getId;
                    zulu = zulu.bind(report)();
                    mike = tango !== zulu;
 41:
                    if(mike) { _fun63846_ip = 62; continue _fun63846 }
 44:
                    zulu = _closure1_slot20;
                    mike = _closure2_slot0;
                    entity = undefined;
                    entity = zulu.bind(entity)(mike);
 62:
                    entity = undefined;
                    return entity;
                }
            };
            entity = mike.bind(zulu)(entity);
            return entity;
        }
    };
    tango['logout'] = options;
    options = function(argFoo) { // Original name: switchAccountToken
        _fun63847: for(var _fun63847_ip = 0; ; ) switch(_fun63847_ip) {
 0:
            report = argFoo;
            options = arguments[1];
            tango = this;
            var _closure2_slot0 = report;
            golf = undefined;
            if(!(options === golf)) { _fun63847_ip = 23; continue _fun63847 }
 21:
            options = true;
 23:
            oscar = _closure1_slot7;
            zulu = oscar.getToken;
            zulu = zulu.bind(oscar)();
            offset = _closure1_slot16;
            verify = offset.log;
            oscar = {};
            yankee = null;
            yankee = yankee != zulu;
            oscar['wasLoggedIn'] = yankee;
            zulu = report !== zulu;
            oscar['tokenHasChanged'] = zulu;
            zulu = 'Switching accounts';
            zulu = verify.bind(offset)(zulu, oscar);
            oscar = _closure1_slot19;
            mike = {};
            zulu = true;
            mike['isSwitchingAccount'] = zulu;
            mike['goHomeAfterSwitching'] = options;
            mike = oscar.bind(golf)(mike);
            mike = tango.loginToken;
            zulu = mike.bind(tango)(report, zulu);
            mike = zulu.then;
            entity = function() {
                zulu = _closure1_slot7;
                entity = zulu.getToken;
                zulu = entity.bind(zulu)();
                entity = _closure2_slot0;
                entity = entity === zulu;
                report = _closure1_slot16;
                tango = report.log;
                zulu = {};
                zulu['isCorrectToken'] = entity;
                mike = 'Switched accounts finished';
                mike = tango.bind(report)(mike, zulu);
                return entity;
            };
            entity = mike.bind(zulu)(entity);
            return entity;
        }
    };
    tango['switchAccountToken'] = options;
    options = function() { // Original name: verifySSOToken
        _fun63849: for(var _fun63849_ip = 0; ; ) switch(_fun63849_ip) {
 0:
            mike = arguments[0];
            tango = undefined;
            if(!(mike === tango)) { _fun63849_ip = 24; continue _fun63849 }
 11:
            zulu = _closure1_slot13;
            mike = zulu.DEFAULT_LOGGED_OUT;
 24:
            var _closure2_slot0 = mike;
            zulu = _closure1_slot0;
            oscar = _closure1_slot3;
            mike = 17;
            mike = oscar[mike];
            mike = zulu.bind(tango)(mike);
            tango = mike.HTTP;
            zulu = tango.get;
            mike = {'url': null, 'oldFormErrors': true, 'rejectWithError': true};
            report = _closure1_slot9;
            report = report.ME;
            mike['url'] = report;
            zulu = zulu.bind(tango)(mike);
            mike = zulu.catch;
            entity = function() {
                zulu = _closure1_slot20;
                mike = _closure2_slot0;
                entity = undefined;
                mike = zulu.bind(entity)(mike);
                return entity;
            };
            entity = mike.bind(zulu)(entity);
            return entity;
        }
    };
    tango['verifySSOToken'] = options;
    options = function(argFoo) { // Original name: verify
        mike = argFoo;
        var _closure2_slot0 = mike;
        zulu = _closure1_slot5;
        mike = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun63853: for(var _fun63853_ip = 0; ; ) switch(_fun63853_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun63853_ip = 209; continue _fun63853 }
 10:
                    tango = _closure1_slot1;
                    offset = _closure1_slot3;
                    mike = 11;
                    mike = offset[mike];
                    report = undefined;
                    oscar = tango.bind(report)(mike);
                    tango = oscar.post;
                    mike = {};
                    golf = _closure1_slot9;
                    golf = golf.VERIFY;
                    mike['url'] = golf;
                    golf = {};
                    options = _closure2_slot0;
                    golf['token'] = options;
                    mike['body'] = golf;
                    golf = {};
                    verify = _closure1_slot0;
                    options = 12;
                    options = offset[options];
                    options = verify.bind(report)(options);
                    options = options.NetworkActionNames;
                    options = options.USER_VERIFY;
                    golf['event'] = options;
                    mike['trackedActionData'] = golf;
                    golf = false;
                    mike['rejectWithError'] = golf;
                    mike = tango.bind(oscar)(mike);
                    SaveGenerator(address=130);
 128:
                    return mike;
 130:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tango) { _fun63853_ip = 206; continue _fun63853 }
 136:
                    tango = _closure1_slot1;
                    oscar = _closure1_slot3;
                    zulu = 7;
                    zulu = oscar[zulu];
                    report = tango.bind(report)(zulu);
                    tango = report.dispatch;
                    zulu = {};
                    oscar = 'LOGIN_SUCCESS';
                    zulu['type'] = oscar;
                    oscar = mike.body;
                    oscar = oscar.token;
                    zulu['token'] = oscar;
                    zulu = tango.bind(report)(zulu);
                    zulu = mike.body;
                    zulu = zulu.user_id;
                    return zulu;
 206:
                    return mike;
 209:
                    return entity;
                }
            };
            return entity;
        };
        entity = zulu.bind(mike)(entity);
        entity = entity.bind(mike)();
        return entity;
    };
    tango['verify'] = options;
    options = function(argFoo) { // Original name: authorizePayment
        mike = _closure1_slot1;
        options = _closure1_slot3;
        entity = 11;
        entity = options[entity];
        golf = undefined;
        zulu = mike.bind(golf)(entity);
        mike = zulu.post;
        entity = {};
        tango = _closure1_slot9;
        tango = tango.AUTHORIZE_PAYMENT;
        entity['url'] = tango;
        tango = {};
        oscar = argFoo;
        tango['token'] = oscar;
        entity['body'] = tango;
        tango = {};
        oscar = _closure1_slot0;
        report = 12;
        report = options[report];
        report = oscar.bind(golf)(report);
        report = report.NetworkActionNames;
        report = report.AUTHORIZE_PAYMENT;
        tango['event'] = report;
        entity['trackedActionData'] = tango;
        tango = true;
        entity['rejectWithError'] = tango;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    tango['authorizePayment'] = options;
    options = function(argFoo) { // Original name: authorizeIPAddress
        mike = _closure1_slot1;
        options = _closure1_slot3;
        entity = 11;
        entity = options[entity];
        golf = undefined;
        zulu = mike.bind(golf)(entity);
        mike = zulu.post;
        entity = {};
        tango = _closure1_slot9;
        tango = tango.AUTHORIZE_IP;
        entity['url'] = tango;
        tango = {};
        oscar = argFoo;
        tango['token'] = oscar;
        entity['body'] = tango;
        tango = {};
        oscar = _closure1_slot0;
        report = 12;
        report = options[report];
        report = oscar.bind(golf)(report);
        report = report.NetworkActionNames;
        report = report.AUTHORIZE_IP;
        tango['event'] = report;
        entity['trackedActionData'] = tango;
        tango = true;
        entity['rejectWithError'] = tango;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    tango['authorizeIPAddress'] = options;
    options = function() { // Original name: verifyResend
        mike = _closure1_slot1;
        options = _closure1_slot3;
        entity = 11;
        entity = options[entity];
        golf = undefined;
        zulu = mike.bind(golf)(entity);
        mike = zulu.post;
        entity = {};
        tango = _closure1_slot9;
        tango = tango.VERIFY_RESEND;
        entity['url'] = tango;
        tango = true;
        entity['oldFormErrors'] = tango;
        tango = {};
        oscar = _closure1_slot0;
        report = 12;
        report = options[report];
        report = oscar.bind(golf)(report);
        report = report.NetworkActionNames;
        report = report.USER_VERIFY_RESEND;
        tango['event'] = report;
        entity['trackedActionData'] = tango;
        tango = false;
        entity['rejectWithError'] = tango;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    tango['verifyResend'] = options;
    options = function(argFoo, argBar, argBaz) { // Original name: resetPassword
        mike = argFoo;
        var _closure2_slot0 = mike;
        mike = argBar;
        var _closure2_slot1 = mike;
        mike = argBaz;
        var _closure2_slot2 = mike;
        zulu = _closure1_slot5;
        mike = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun63859: for(var _fun63859_ip = 0; ; ) switch(_fun63859_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun63859_ip = 567; continue _fun63859 }
 10:
                    report = undefined;
                    backup = undefined;
                    romeo = undefined;
                    yankee = undefined;
                    offset = undefined;
                    verify = undefined;
                    options = undefined;
                    golf = undefined;
                    foxtrot = _closure1_slot1;
                    mike = _closure1_slot3;
                    oscar = 7;
                    zulu = mike[oscar];
                    kilo = foxtrot.bind(report)(zulu);
                    foxtrot = kilo.dispatch;
                    zulu = {};
                    sizing = 'LOGIN';
                    zulu['type'] = sizing;
                    zulu = foxtrot.bind(kilo)(zulu);
                    zulu = {};
                    kilo = _closure2_slot0;
                    zulu['token'] = kilo;
                    kilo = _closure2_slot1;
                    zulu['password'] = kilo;
                    foxtrot = _closure2_slot2;
                    zulu['source'] = foxtrot;
                    backup = zulu;
                    zulu = _closure1_slot0;
                    kilo = 15;
                    mike = mike[kilo];
                    mike = zulu.bind(report)(mike);
                    foxtrot = mike.Storage;
                    zulu = foxtrot.get;
                    mike = _closure1_slot10;
                    zulu = zulu.bind(foxtrot)(mike);
                    mike = _closure1_slot15;
                    sizing = mike.bind(report)();
                    foxtrot = null;
                    mike = foxtrot != sizing;
                    if(!mike) { _fun63859_ip = 160; continue _fun63859 }
 156:
                    mike = foxtrot != zulu;
 160:
                    if(!mike) { _fun63859_ip = 178; continue _fun63859 }
 163:
                    mike = backup;
                    mike['push_provider'] = sizing;
                    mike['push_token'] = zulu;
 178:
                    zulu = _closure1_slot0;
                    mike = _closure1_slot3;
                    mike = mike[kilo];
                    mike = zulu.bind(report)(mike);
                    kilo = mike.Storage;
                    zulu = kilo.get;
                    mike = _closure1_slot11;
                    zulu = zulu.bind(kilo)(mike);
                    mike = _closure1_slot14;
                    mike = foxtrot != mike;
                    if(!mike) { _fun63859_ip = 230; continue _fun63859 }
 226:
                    mike = foxtrot != zulu;
 230:
                    if(!mike) { _fun63859_ip = 252; continue _fun63859 }
 233:
                    mike = backup;
                    foxtrot = _closure1_slot14;
                    mike['push_voip_provider'] = foxtrot;
                    mike['push_voip_token'] = zulu;
 252: // try_start_0
                    zulu = _closure1_slot1;
                    output = _closure1_slot3;
                    mike = 11;
                    mike = output[mike];
                    foxtrot = zulu.bind(report)(mike);
                    zulu = foxtrot.post;
                    mike = {};
                    kilo = _closure1_slot9;
                    kilo = kilo.RESET_PASSWORD;
                    mike['url'] = kilo;
                    mike['body'] = backup;
                    backup = true;
                    mike['oldFormErrors'] = backup;
                    backup = {};
                    sizing = _closure1_slot0;
                    kilo = 12;
                    kilo = output[kilo];
                    kilo = sizing.bind(report)(kilo);
                    kilo = kilo.NetworkActionNames;
                    kilo = kilo.USER_RESET_PASSWORD;
                    backup['event'] = kilo;
                    mike['trackedActionData'] = backup;
                    backup = false;
                    mike['rejectWithError'] = backup;
                    mike = zulu.bind(foxtrot)(mike);
                    SaveGenerator(address=360);
 358:
                    return mike;
 360:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun63859_ip = 474; continue _fun63859 }
 366:
                    zulu = mike.body;
                    foxtrot = zulu.mfa;
                    romeo = zulu.sms;
                    yankee = zulu.webauthn;
                    offset = zulu.ticket;
                    verify = zulu.token;
                    options = zulu.backup;
                    golf = zulu.totp;
                    zulu = {};
                    backup = _closure1_slot18;
                    if(foxtrot) { _fun63859_ip = 430; continue _fun63859 }
 422:
                    foxtrot = backup.SUCCESS;
                    _fun63859_ip = 436; continue _fun63859;
 430:
                    foxtrot = backup.MFA;
 436:
                    zulu['result'] = foxtrot;
                    zulu['sms'] = romeo;
                    zulu['webauthn'] = yankee;
                    zulu['ticket'] = offset;
                    zulu['token'] = verify;
                    zulu['backup'] = options;
                    zulu['totp'] = golf;
 471: // try_end0
                    return zulu;
 474:
                    return mike;
 477: // catch_target0
                    CatchBlockStart(arg_register=7);
                    golf = _closure1_slot0;
                    zulu = _closure1_slot3;
                    mike = 13;
                    mike = zulu[mike];
                    mike = golf.bind(report)(mike);
                    mike = mike.V6OrEarlierAPIError;
                    golf = mike.prototype;
                    golf = Object.create(golf, {constructor: {value: mike}});
                    echo = golf;
                    result = options;
                    mike = new echo[mike](result, output);
                    mike = mike instanceof Object ? mike : golf;
                    tango = _closure1_slot1;
                    zulu = zulu[oscar];
                    report = tango.bind(report)(zulu);
                    tango = report.dispatch;
                    zulu = {};
                    oscar = 'LOGIN_FAILURE';
                    zulu['type'] = oscar;
                    zulu['error'] = mike;
                    zulu = tango.bind(report)(zulu);
                    throw mike;
 567:
                    return entity;
                }
            };
            return entity;
        };
        entity = zulu.bind(mike)(entity);
        entity = entity.bind(mike)();
        return entity;
    };
    tango['resetPassword'] = options;
    options = function(argFoo) { // Original name: resetPasswordMFAv2
        mike = argFoo;
        zulu = mike.method;
        var _closure2_slot0 = zulu;
        zulu = mike.code;
        var _closure2_slot1 = zulu;
        zulu = mike.ticket;
        var _closure2_slot2 = zulu;
        zulu = mike.password;
        var _closure2_slot3 = zulu;
        zulu = mike.token;
        var _closure2_slot4 = zulu;
        mike = mike.source;
        var _closure2_slot5 = mike;
        zulu = _closure1_slot5;
        mike = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun63862: for(var _fun63862_ip = 0; ; ) switch(_fun63862_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun63862_ip = 245; continue _fun63862 }
 10:
                    zulu = _closure1_slot1;
                    offset = _closure1_slot3;
                    mike = 7;
                    mike = offset[mike];
                    verify = undefined;
                    report = zulu.bind(verify)(mike);
                    tango = report.dispatch;
                    mike = {};
                    oscar = 'LOGIN_MFA';
                    mike['type'] = oscar;
                    mike = tango.bind(report)(mike);
                    mike = 11;
                    mike = offset[mike];
                    tango = zulu.bind(verify)(mike);
                    zulu = tango.post;
                    mike = {};
                    report = _closure1_slot9;
                    report = report.RESET_PASSWORD;
                    mike['url'] = report;
                    report = {};
                    options = _closure2_slot1;
                    report['code'] = options;
                    options = _closure2_slot2;
                    report['ticket'] = options;
                    options = _closure2_slot3;
                    report['password'] = options;
                    options = _closure2_slot4;
                    report['token'] = options;
                    options = _closure2_slot5;
                    report['source'] = options;
                    oscar = _closure2_slot0;
                    report['method'] = oscar;
                    mike['body'] = report;
                    report = true;
                    mike['oldFormErrors'] = report;
                    oscar = {};
                    options = _closure1_slot0;
                    golf = 12;
                    golf = offset[golf];
                    golf = options.bind(verify)(golf);
                    golf = golf.NetworkActionNames;
                    golf = golf.USER_RESET_PASSWORD;
                    oscar['event'] = golf;
                    golf = {};
                    golf['mfa'] = report;
                    oscar['properties'] = golf;
                    mike['trackedActionData'] = oscar;
                    mike['rejectWithError'] = report;
                    mike = zulu.bind(tango)(mike);
                    SaveGenerator(address=222);
 220:
                    return mike;
 222:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun63862_ip = 242; continue _fun63862 }
 228:
                    zulu = mike.body;
                    zulu = zulu.token;
                    return zulu;
 242:
                    return mike;
 245:
                    return entity;
                }
            };
            return entity;
        };
        entity = zulu.bind(mike)(entity);
        entity = entity.bind(mike)();
        return entity;
    };
    tango['resetPasswordMFAv2'] = options;
    options = function(argFoo) { // Original name: forgotPassword
        mike = argFoo;
        var _closure2_slot0 = mike;
        zulu = _closure1_slot5;
        mike = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun63865: for(var _fun63865_ip = 0; ; ) switch(_fun63865_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun63865_ip = 405; continue _fun63865 }
 10:
                    tango = undefined;
                    zulu = undefined;
                    golf = _closure1_slot1;
                    oscar = _closure1_slot3;
                    report = 7;
                    oscar = oscar[report];
                    options = golf.bind(tango)(oscar);
                    golf = options.dispatch;
                    oscar = {};
                    verify = 'FORGOT_PASSWORD_REQUEST';
                    oscar['type'] = verify;
                    oscar = golf.bind(options)(oscar);
 57: // try_start_0
                    golf = _closure1_slot1;
                    foxtrot = _closure1_slot3;
                    oscar = 11;
                    oscar = foxtrot[oscar];
                    verify = golf.bind(tango)(oscar);
                    options = verify.post;
                    oscar = {};
                    golf = _closure1_slot9;
                    golf = golf.FORGOT_PASSWORD;
                    oscar['url'] = golf;
                    golf = {};
                    offset = _closure2_slot0;
                    golf['login'] = offset;
                    oscar['body'] = golf;
                    golf = true;
                    oscar['oldFormErrors'] = golf;
                    offset = {};
                    romeo = _closure1_slot0;
                    yankee = 12;
                    yankee = foxtrot[yankee];
                    yankee = romeo.bind(tango)(yankee);
                    yankee = yankee.NetworkActionNames;
                    yankee = yankee.FORGOT_PASSWORD;
                    offset['event'] = yankee;
                    oscar['trackedActionData'] = offset;
                    offset = false;
                    oscar['rejectWithError'] = offset;
                    oscar = options.bind(verify)(oscar);
                    SaveGenerator(address=179);
 177:
                    return oscar;
 179:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=7);
                    if(options) { _fun63865_ip = 225; continue _fun63865 }
 185:
                    verify = _closure1_slot1;
                    options = _closure1_slot3;
                    options = options[report];
                    offset = verify.bind(tango)(options);
                    verify = offset.dispatch;
                    options = {};
                    yankee = 'FORGOT_PASSWORD_SENT';
                    options['type'] = yankee;
                    options = verify.bind(offset)(options);
 222: // try_end0
                    return golf;
 225:
                    return oscar;
 228: // catch_target0
                    CatchBlockStart(arg_register=7);
                    golf = _closure1_slot0;
                    verify = _closure1_slot3;
                    oscar = 13;
                    oscar = verify[oscar];
                    oscar = golf.bind(tango)(oscar);
                    oscar = oscar.V6OrEarlierAPIError;
                    golf = oscar.prototype;
                    golf = Object.create(golf, {constructor: {value: oscar}});
                    kilo = golf;
                    backup = options;
                    oscar = new kilo[oscar](backup, foxtrot);
                    oscar = oscar instanceof Object ? oscar : golf;
                    zulu = oscar;
                    golf = oscar.code;
                    oscar = _closure1_slot12;
                    oscar = oscar.PHONE_VERIFICATION_REQUIRED;
                    if(!(golf !== oscar)) { _fun63865_ip = 344; continue _fun63865 }
 301:
                    golf = _closure1_slot1;
                    oscar = _closure1_slot3;
                    oscar = oscar[report];
                    options = golf.bind(tango)(oscar);
                    golf = options.dispatch;
                    oscar = {};
                    verify = 'LOGIN_FAILURE';
                    oscar['type'] = verify;
                    oscar['error'] = zulu;
                    oscar = golf.bind(options)(oscar);
                    throw zulu;
 344:
                    zulu = _closure1_slot1;
                    mike = _closure1_slot3;
                    mike = mike[report];
                    tango = zulu.bind(tango)(mike);
                    zulu = tango.dispatch;
                    mike = {};
                    report = 'LOGIN_PASSWORD_RECOVERY_PHONE_VERIFICATION';
                    mike['type'] = report;
                    report = {};
                    oscar = _closure2_slot0;
                    report['login'] = oscar;
                    mike['credentials'] = report;
                    mike = zulu.bind(tango)(mike);
                    mike = false;
                    return mike;
 405:
                    return entity;
                }
            };
            return entity;
        };
        entity = zulu.bind(mike)(entity);
        entity = entity.bind(mike)();
        return entity;
    };
    tango['forgotPassword'] = options;
    options = function(argFoo) { // Original name: setFingerprint
        zulu = _closure1_slot1;
        mike = _closure1_slot3;
        entity = 7;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'FINGERPRINT';
        mike['type'] = report;
        report = argFoo;
        mike['fingerprint'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    tango['setFingerprint'] = options;
    options = function(argFoo) { // Original name: getExperiments
        zulu = _closure1_slot1;
        mike = _closure1_slot3;
        entity = 7;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'EXPERIMENTS_FETCH';
        mike['type'] = report;
        report = argFoo;
        mike['withGuildExperiments'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    tango['getExperiments'] = options;
    options = function() { // Original name: getLocationMetadata
        _fun63868: for(var _fun63868_ip = 0; ; ) switch(_fun63868_ip) {
 0:
            tango = _closure1_slot17;
            zulu = null;
            if(!(zulu == tango)) { _fun63868_ip = 156; continue _fun63868 }
 18:
            zulu = global;
            oscar = zulu.clearTimeout;
            tango = _closure1_slot4;
            report = undefined;
            tango = oscar.bind(report)(tango);
            oscar = zulu.setTimeout;
            tango = function() {
                zulu = _closure1_slot1;
                mike = _closure1_slot3;
                entity = 7;
                mike = mike[entity];
                entity = undefined;
                tango = zulu.bind(entity)(mike);
                zulu = tango.dispatch;
                mike = {'type': 'SET_CONSENT_REQUIRED', 'consentRequired': true};
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            zulu = 5000;
            zulu = oscar.bind(report)(tango, zulu);
            var _closure1_slot4 = zulu;
            tango = _closure1_slot0;
            oscar = _closure1_slot3;
            zulu = 17;
            zulu = oscar[zulu];
            zulu = tango.bind(report)(zulu);
            report = zulu.HTTP;
            tango = report.get;
            zulu = {'url': null, 'retries': 2, 'oldFormErrors': true, 'rejectWithError': true};
            oscar = _closure1_slot9;
            oscar = oscar.AUTH_LOCATION_METADATA;
            zulu['url'] = oscar;
            report = tango.bind(report)(zulu);
            tango = report.then;
            zulu = function(argFoo) {
                _fun63870: for(var _fun63870_ip = 0; ; ) switch(_fun63870_ip) {
 0:
                    zulu = argFoo;
                    entity = global;
                    report = entity.clearTimeout;
                    tango = _closure1_slot4;
                    entity = undefined;
                    tango = report.bind(entity)(tango);
                    report = _closure1_slot8;
                    tango = report.getAuthenticationConsentRequired;
                    tango = tango.bind(report)();
                    report = null;
                    if(!(report == tango)) { _fun63870_ip = 133; continue _fun63870 }
 45:
                    oscar = report == zulu;
                    tango = undefined;
                    if(oscar) { _fun63870_ip = 76; continue _fun63870 }
 54:
                    oscar = zulu.body;
                    golf = report == oscar;
                    tango = undefined;
                    if(golf) { _fun63870_ip = 76; continue _fun63870 }
 68:
                    tango = oscar.consent_required;
 76:
                    options = report == tango;
                    if(options) { _fun63870_ip = 86; continue _fun63870 }
 83:
                    options = tango;
 86:
                    oscar = _closure1_slot1;
                    golf = _closure1_slot3;
                    tango = 7;
                    tango = golf[tango];
                    golf = oscar.bind(entity)(tango);
                    oscar = golf.dispatch;
                    tango = {};
                    verify = 'SET_CONSENT_REQUIRED';
                    tango['type'] = verify;
                    tango['consentRequired'] = options;
                    tango = oscar.bind(golf)(tango);
 133:
                    oscar = _closure1_slot1;
                    golf = _closure1_slot3;
                    tango = 7;
                    tango = golf[tango];
                    golf = oscar.bind(entity)(tango);
                    oscar = golf.dispatch;
                    tango = {};
                    options = 'SET_LOCATION_METADATA';
                    tango['type'] = options;
                    options = report == zulu;
                    verify = undefined;
                    if(options) { _fun63870_ip = 197; continue _fun63870 }
 177:
                    options = zulu.body;
                    offset = report == options;
                    verify = undefined;
                    if(offset) { _fun63870_ip = 197; continue _fun63870 }
 191:
                    verify = options.country_code;
 197:
                    offset = report != verify;
                    options = undefined;
                    if(!offset) { _fun63870_ip = 209; continue _fun63870 }
 206:
                    options = verify;
 209:
                    tango['countryCode'] = options;
                    tango = oscar.bind(golf)(tango);
                    _closure1_slot17 = report;
                    oscar = report == zulu;
                    tango = undefined;
                    if(oscar) { _fun63870_ip = 252; continue _fun63870 }
 232:
                    oscar = zulu.body;
                    golf = report == oscar;
                    tango = undefined;
                    if(golf) { _fun63870_ip = 252; continue _fun63870 }
 246:
                    tango = oscar.promotional_email_opt_in;
 252:
                    if(!(report != tango)) { _fun63870_ip = 311; continue _fun63870 }
 256:
                    zulu = zulu.body;
                    tango = zulu.promotional_email_opt_in;
                    zulu = _closure1_slot6;
                    mike = {};
                    report = tango.required;
                    mike['required'] = report;
                    report = tango.pre_checked;
                    mike['checked'] = report;
                    tango = tango.pre_checked;
                    mike['preChecked'] = tango;
                    mike = zulu.bind(entity)(mike);
 311:
                    return entity;
                }
            };
            entity = function() {
                entity = global;
                tango = entity.clearTimeout;
                mike = _closure1_slot4;
                entity = undefined;
                mike = tango.bind(entity)(mike);
                tango = _closure1_slot1;
                report = _closure1_slot3;
                mike = 7;
                mike = report[mike];
                report = tango.bind(entity)(mike);
                tango = report.dispatch;
                mike = {'type': 'SET_CONSENT_REQUIRED', 'consentRequired': true};
                mike = tango.bind(report)(mike);
                mike = null;
                _closure1_slot17 = mike;
                return entity;
            };
            entity = tango.bind(report)(zulu, entity);
            _closure1_slot17 = entity;
            _fun63868_ip = 160; continue _fun63868;
 156:
            entity = _closure1_slot17;
 160:
            return entity;
        }
    };
    tango['getLocationMetadata'] = options;
    report = function() { // Original name: closeSuspendedUser
        zulu = _closure1_slot1;
        mike = _closure1_slot3;
        entity = 7;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'CLOSE_SUSPENDED_USER';
        mike['type'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    tango['closeSuspendedUser'] = report;
    report = 18;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'actions/AuthenticationActionCreators.tsx';
    report = oscar.bind(golf)(report);
    zulu['default'] = tango;
    zulu['PasswordResetResult'] = mike;
    return entity;
})();