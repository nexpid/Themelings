// app/modules/rpc/native/server/commands/auth.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
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
    options = tango.ComponentActions;
    var _closure1_slot4 = options;
    options = tango.ApplicationFlags;
    var _closure1_slot5 = options;
    tango = tango.RPCErrors;
    var _closure1_slot6 = tango;
    tango = 5;
    tango = oscar[tango];
    golf = golf.bind(entity)(tango);
    tango = function(argFoo) {
        mike = argFoo;
        zulu = mike.clientId;
        var _closure2_slot0 = zulu;
        zulu = mike.authorizations;
        var _closure2_slot1 = zulu;
        zulu = mike.scopes;
        var _closure2_slot2 = zulu;
        zulu = mike.parsedPermissions;
        var _closure2_slot3 = zulu;
        zulu = mike.responseType;
        var _closure2_slot4 = zulu;
        zulu = mike.redirectUri;
        var _closure2_slot5 = zulu;
        zulu = mike.codeChallenge;
        var _closure2_slot6 = zulu;
        zulu = mike.codeChallengeMethod;
        var _closure2_slot7 = zulu;
        zulu = mike.state;
        var _closure2_slot8 = zulu;
        zulu = mike.guildId;
        var _closure2_slot9 = zulu;
        zulu = mike.channelId;
        var _closure2_slot10 = zulu;
        zulu = mike.prompt;
        var _closure2_slot11 = zulu;
        zulu = mike.disableGuildSelect;
        var _closure2_slot12 = zulu;
        zulu = mike.disclosures;
        var _closure2_slot13 = zulu;
        mike = mike.integrationType;
        var _closure2_slot14 = mike;
        mike = global;
        zulu = mike.Promise;
        mike = zulu.prototype;
        mike = Object.create(mike, {constructor: {value: zulu}});
        tango = function(argFoo, argBar) {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                entity = argFoo;
                var _closure3_slot0 = entity;
                entity = argBar;
                var _closure3_slot1 = entity;
                entity = _closure2_slot14;
                golf = null;
                report = golf != entity;
                entity = undefined;
                tango = undefined;
                if(!report) { _fun00002_ip = 70; continue _fun00001 }
 36:
                report = _closure2_slot1;
                oscar = golf == report;
                report = undefined;
                if(oscar) { _fun00002_ip = 67; continue _fun00001 }
 49:
                verify = _closure2_slot1;
                options = verify.get;
                oscar = _closure2_slot14;
                report = options.bind(verify)(oscar);
 67:
                tango = report;
 70:
                report = golf == tango;
                oscar = undefined;
                if(report) { _fun00002_ip = 84; continue _fun00001 }
 79:
                oscar = tango.application;
 84:
                if(!(golf == oscar)) { _fun00002_ip = 110; continue _fun00001 }
 88:
                options = _closure1_slot3;
                report = options.getApplication;
                tango = _closure2_slot0;
                oscar = report.bind(options)(tango);
 110:
                report = {};
                tango = _closure2_slot0;
                report['clientId'] = tango;
                tango = _closure2_slot2;
                if(!(golf == tango)) { _fun00002_ip = 135; continue _fun00001 }
 129:
                tango = new Array(0);
                _fun00002_ip = 139; continue _fun00001;
 135:
                tango = _closure2_slot2;
 139:
                report['scopes'] = tango;
                tango = _closure2_slot4;
                report['responseType'] = tango;
                tango = _closure2_slot5;
                report['redirectUri'] = tango;
                tango = _closure2_slot6;
                report['codeChallenge'] = tango;
                tango = _closure2_slot7;
                report['codeChallengeMethod'] = tango;
                tango = _closure2_slot8;
                report['state'] = tango;
                tango = _closure2_slot9;
                report['guildId'] = tango;
                tango = _closure2_slot10;
                report['channelId'] = tango;
                tango = _closure2_slot3;
                report['permissions'] = tango;
                tango = _closure2_slot11;
                report['prompt'] = tango;
                tango = _closure2_slot12;
                options = 'boolean';
                tango = typeof tango;
                if(!(options !== tango)) { _fun00002_ip = 251; continue _fun00001 }
 237:
                options = _closure2_slot12;
                tango = 'true';
                tango = tango === options;
                _fun00002_ip = 255; continue _fun00001;
 251:
                tango = _closure2_slot12;
 255:
                report['disableGuildSelect'] = tango;
                tango = false;
                report['showLogout'] = tango;
                zulu = function(argFoo) { // Original name: callback
                    _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                        entity = argFoo;
                        zulu = entity.location;
                        mike = null;
                        if(!(mike == zulu)) { _fun00004_ip = 99; continue _fun00003 }
 14:
                        tango = _closure3_slot1;
                        oscar = _closure1_slot1;
                        report = _closure1_slot2;
                        zulu = 2;
                        report = report[zulu];
                        zulu = undefined;
                        golf = oscar.bind(zulu)(report);
                        oscar = {};
                        mike = _closure1_slot6;
                        mike = mike.OAUTH2_ERROR;
                        oscar['errorCode'] = mike;
                        mike = golf.prototype;
                        report = Object.create(mike, {constructor: {value: golf}});
                        options = 'User cancelled authorization';
                        offset = report;
                        verify = oscar;
                        mike = new offset[golf](verify, options, golf);
                        mike = mike instanceof Object ? mike : report;
                        mike = tango.bind(zulu)(mike);
                        _fun00004_ip = 118; continue _fun00003;
 99:
                        zulu = _closure3_slot0;
                        mike = entity.location;
                        entity = undefined;
                        entity = zulu.bind(entity)(mike);
 118:
                        entity = undefined;
                        return entity;
                    }
                };
                report['callback'] = zulu;
                zulu = golf != oscar;
                if(!zulu) { _fun00002_ip = 297; continue _fun00001 }
 288:
                tango = oscar.flags;
                zulu = golf != tango;
 297:
                if(!zulu) { _fun00002_ip = 350; continue _fun00001 }
 300:
                options = _closure1_slot0;
                verify = _closure1_slot2;
                golf = 3;
                golf = verify[golf];
                options = options.bind(entity)(golf);
                golf = options.hasFlag;
                oscar = oscar.flags;
                tango = _closure1_slot5;
                tango = tango.EMBEDDED;
                zulu = golf.bind(options)(oscar, tango);
 350:
                report['isEmbeddedFlow'] = zulu;
                zulu = _closure2_slot13;
                report['disclosures'] = zulu;
                mike = _closure2_slot14;
                report['integrationType'] = mike;
                tango = _closure1_slot0;
                oscar = _closure1_slot2;
                zulu = 4;
                zulu = oscar[zulu];
                zulu = tango.bind(entity)(zulu);
                tango = zulu.ComponentDispatch;
                zulu = tango.dispatch;
                mike = _closure1_slot4;
                mike = mike.SHOW_OAUTH2_MODAL;
                mike = zulu.bind(tango)(mike, report);
                return entity;
            }
        };
        report = mike;
        entity = new report[zulu](tango, zulu);
        entity = entity instanceof Object ? entity : mike;
        return entity;
    };
    mike = function() { // Original name: onAuthorizeValidationPassed
        entity = undefined;
        return entity;
    };
    mike = golf.bind(entity)(tango, mike);
    tango = 6;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/rpc/native/server/commands/auth.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();