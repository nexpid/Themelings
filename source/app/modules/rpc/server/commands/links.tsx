// app/modules/rpc/server/commands/links.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    mike = global;
    verify = mike.Object;
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
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    kilo = tango.RPC_AUTHENTICATED_SCOPE;
    backup = tango.RPC_EMBEDDED_APP_SCOPE;
    foxtrot = tango.RPC_SCOPE_CONFIG;
    tango = 3;
    tango = oscar[tango];
    golf = report.bind(entity)(tango);
    tango = golf.ApplicationFlags;
    var _closure1_slot5 = tango;
    tango = golf.PopoutWindowKeys;
    var _closure1_slot6 = tango;
    tango = golf.RPCCommands;
    options = golf.RPCErrors;
    var _closure1_slot7 = options;
    golf = golf.UserSettingsSections;
    var _closure1_slot8 = golf;
    golf = 4;
    golf = oscar[golf];
    golf = report.bind(entity)(golf);
    verify = golf.AM_HARMONY_PRD_APPLICATION_ID;
    golf = golf.AM_HARMONY_STG_APPLICATION_ID;
    options = mike.Set;
    mike = new Array(2);
    mike[0] = verify;
    mike[1] = golf;
    golf = options.prototype;
    golf = Object.create(golf, {constructor: {value: options}});
    update = golf;
    echo = mike;
    mike = new update[options](echo, result);
    mike = mike instanceof Object ? mike : golf;
    var _closure1_slot9 = mike;
    mike = {};
    options = tango.OPEN_EXTERNAL_LINK;
    golf = {};
    verify = {};
    romeo = foxtrot.ANY;
    offset = new Array(2);
    offset[0] = kilo;
    offset[1] = backup;
    verify[romeo] = offset;
    golf['scope'] = verify;
    verify = function(argFoo) { // Original name: validation
        report = argFoo;
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 5;
        entity = mike[entity];
        mike = undefined;
        entity = zulu.bind(mike)(entity);
        mike = entity.bind(mike)(report);
        entity = mike.required;
        zulu = entity.bind(mike)();
        mike = zulu.keys;
        entity = {};
        tango = report.string;
        report = tango.bind(report)();
        tango = report.required;
        tango = tango.bind(report)();
        entity['url'] = tango;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    golf['validation'] = verify;
    verify = function(argFoo) { // Original name: handler
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            mike = argFoo;
            tango = mike.socket;
            mike = mike.args;
            entity = mike.url;
            report = undefined;
            var _closure2_slot0 = report;
            verify = undefined;
            var _closure2_slot1 = report;
            var _closure2_slot2 = report;
            golf = _closure1_slot0;
            options = _closure1_slot2;
            oscar = 6;
            oscar = options[oscar];
            golf = golf.bind(report)(oscar);
            oscar = golf.validatePostMessageTransport;
            tango = tango.transport;
            tango = oscar.bind(golf)(tango);
 78: // try_start_0
            tango = global;
            options = tango.URL;
            foxtrot = entity;
            golf = options.prototype;
            golf = Object.create(golf, {constructor: {value: options}});
            backup = golf;
            oscar = new backup[options](foxtrot, romeo);
            golf = oscar instanceof Object ? oscar : golf;
            oscar = golf.toString;
            oscar = oscar.bind(golf)();
            _closure2_slot0 = oscar;
            golf = _closure1_slot0;
            options = _closure1_slot2;
            oscar = 7;
            oscar = options[oscar];
            oscar = golf.bind(report)(oscar);
            oscar = oscar.isPlatformEmbedded;
            if(!oscar) { _fun00002_ip = 230; continue _fun00001 }
 151:
            golf = _closure1_slot0;
            options = _closure1_slot2;
            oscar = 8;
            oscar = options[oscar];
            golf = golf.bind(report)(oscar);
            oscar = golf.shouldOpenActivityInPopoutWindow;
            oscar = oscar.bind(golf)();
            offset = null;
            if(!oscar) { _fun00002_ip = 196; continue _fun00001 }
 186:
            oscar = _closure1_slot6;
            offset = oscar.ACTIVITY_POPOUT;
 196:
            golf = _closure1_slot1;
            options = _closure1_slot2;
            oscar = 9;
            oscar = options[oscar];
            options = golf.bind(report)(oscar);
            golf = options.focus;
            oscar = true;
            oscar = golf.bind(options)(offset, oscar);
 230:
            golf = _closure1_slot3;
            oscar = golf.getCurrentEmbeddedActivity;
            oscar = oscar.bind(golf)();
            verify = oscar;
            options = _closure1_slot4;
            golf = options.getApplication;
            offset = null;
            yankee = offset == oscar;
            oscar = undefined;
            if(yankee) { _fun00002_ip = 276; continue _fun00001 }
 268:
            yankee = verify;
            oscar = yankee.applicationId;
 276:
            oscar = golf.bind(options)(oscar);
            _closure2_slot1 = oscar;
            golf = _closure1_slot0;
            options = _closure1_slot2;
            oscar = 10;
            oscar = options[oscar];
            options = golf.bind(report)(oscar);
            golf = options.getEmbeddedActivityLocationChannelId;
            oscar = verify;
            offset = offset == oscar;
            oscar = undefined;
            if(offset) { _fun00002_ip = 328; continue _fun00001 }
 323:
            oscar = verify.location;
 328:
            oscar = golf.bind(options)(oscar);
            _closure2_slot2 = oscar;
            oscar = tango.Promise;
            tango = oscar.prototype;
            tango = Object.create(tango, {constructor: {value: oscar}});
            foxtrot = function(argFoo) {
                mike = argFoo;
                var _closure3_slot0 = mike;
                oscar = _closure1_slot0;
                golf = _closure1_slot2;
                mike = 11;
                mike = golf[mike];
                report = undefined;
                tango = oscar.bind(report)(mike);
                zulu = tango.handleClick;
                mike = {};
                verify = _closure2_slot0;
                mike['href'] = verify;
                verify = true;
                mike['shouldConfirm'] = verify;
                verify = function() { // Original name: onConfirm
                    zulu = _closure1_slot1;
                    mike = _closure1_slot2;
                    entity = 12;
                    mike = mike[entity];
                    entity = undefined;
                    zulu = zulu.bind(entity)(mike);
                    mike = _closure2_slot0;
                    mike = zulu.bind(entity)(mike);
                    zulu = _closure3_slot0;
                    mike = {};
                    tango = true;
                    mike['opened'] = tango;
                    mike = zulu.bind(entity)(mike);
                    return entity;
                };
                mike['onConfirm'] = verify;
                entity = function() { // Original name: onCancel
                    zulu = _closure3_slot0;
                    mike = {};
                    entity = false;
                    mike['opened'] = entity;
                    entity = undefined;
                    mike = zulu.bind(entity)(mike);
                    return entity;
                };
                mike['onCancel'] = entity;
                entity = 13;
                entity = golf[entity];
                golf = oscar.bind(report)(entity);
                oscar = golf.getActivitiesModalContextKey;
                entity = {};
                verify = _closure2_slot1;
                entity['application'] = verify;
                options = _closure2_slot2;
                entity['channelId'] = options;
                offset = oscar.bind(golf)(entity);
                backup = tango;
                foxtrot = mike;
                romeo = undefined;
                yankee = undefined;
                entity = backup[zulu](foxtrot, romeo, yankee, offset, verify);
                return entity;
            };
            backup = tango;
            zulu = new backup[oscar](foxtrot, romeo);
            zulu = zulu instanceof Object ? zulu : tango;
 370: // try_end0
            return zulu;
 372: // catch_target0
            CatchBlockStart(arg_register=2);
            tango = _closure1_slot1;
            oscar = _closure1_slot2;
            zulu = 14;
            zulu = oscar[zulu];
            tango = tango.bind(report)(zulu);
            zulu = {};
            mike = _closure1_slot7;
            mike = mike.INVALID_COMMAND;
            zulu['errorCode'] = mike;
            report = entity;
            entity = global;
            entity = entity.HermesInternal;
            mike = entity.concat;
            entity = 'Invalid URL: ';
            romeo = mike.bind(entity)(report);
            mike = tango.prototype;
            mike = Object.create(mike, {constructor: {value: tango}});
            backup = mike;
            foxtrot = zulu;
            entity = new backup[tango](foxtrot, romeo, yankee);
            entity = entity instanceof Object ? entity : mike;
            throw entity;
        }
    };
    golf['handler'] = verify;
    mike[options] = golf;
    options = tango.NAVIGATE_TO_CONNECTIONS;
    golf = {};
    verify = function(argFoo) { // Original name: validation
        mike = _closure1_slot1;
        zulu = _closure1_slot2;
        entity = 5;
        entity = zulu[entity];
        zulu = undefined;
        mike = mike.bind(zulu)(entity);
        entity = argFoo;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    golf['validation'] = verify;
    verify = {};
    romeo = foxtrot.ANY;
    offset = new Array(1);
    offset[0] = kilo;
    verify[romeo] = offset;
    golf['scope'] = verify;
    verify = function(argFoo) { // Original name: handler
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            mike = entity.socket;
            report = _closure1_slot0;
            oscar = _closure1_slot2;
            zulu = 6;
            golf = oscar[zulu];
            entity = undefined;
            verify = report.bind(entity)(golf);
            options = verify.validatePostMessageTransport;
            golf = mike.transport;
            golf = options.bind(verify)(golf);
            zulu = oscar[zulu];
            report = report.bind(entity)(zulu);
            zulu = report.validateApplication;
            mike = mike.application;
            report = zulu.bind(report)(mike);
            zulu = _closure1_slot9;
            mike = zulu.has;
            mike = mike.bind(zulu)(report);
            if(mike) { _fun00004_ip = 161; continue _fun00003 }
 93:
            zulu = _closure1_slot1;
            report = _closure1_slot2;
            mike = 14;
            mike = report[mike];
            oscar = zulu.bind(entity)(mike);
            report = {};
            mike = _closure1_slot7;
            mike = mike.UNAUTHORIZED_FOR_APPLICATION;
            report['errorCode'] = mike;
            mike = oscar.prototype;
            zulu = Object.create(mike, {constructor: {value: oscar}});
            offset = 'Command not available for this application';
            romeo = zulu;
            yankee = report;
            mike = new romeo[oscar](yankee, offset, verify);
            mike = mike instanceof Object ? mike : zulu;
            throw mike;
 161:
            zulu = _closure1_slot0;
            report = _closure1_slot2;
            mike = 15;
            mike = report[mike];
            mike = zulu.bind(entity)(mike);
            zulu = mike.openUserSettings;
            mike = {};
            tango = _closure1_slot8;
            tango = tango.CONNECTIONS;
            mike['screen'] = tango;
            mike = zulu.bind(entity)(mike);
            return entity;
        }
    };
    golf['handler'] = verify;
    mike[options] = golf;
    golf = tango.SHARE_LINK;
    options = 16;
    options = oscar[options];
    offset = report.bind(entity)(options);
    verify = offset.createRPCCommand;
    options = tango.SHARE_LINK;
    tango = {};
    romeo = {};
    backup = foxtrot.ANY;
    foxtrot = new Array(1);
    foxtrot[0] = kilo;
    romeo[backup] = foxtrot;
    tango['scope'] = romeo;
    yankee = function(argFoo) { // Original name: handler
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            zulu = entity.socket;
            entity = entity.args;
            tango = entity.referrer_id;
            var _closure2_slot0 = tango;
            tango = entity.custom_id;
            var _closure2_slot1 = tango;
            entity = entity.message;
            var _closure2_slot2 = entity;
            tango = undefined;
            var _closure2_slot4 = tango;
            oscar = _closure1_slot0;
            golf = _closure1_slot2;
            report = 6;
            options = golf[report];
            offset = oscar.bind(tango)(options);
            verify = offset.validatePostMessageTransport;
            options = zulu.transport;
            options = verify.bind(offset)(options);
            report = golf[report];
            golf = oscar.bind(tango)(report);
            oscar = golf.validateApplication;
            report = zulu.application;
            oscar = oscar.bind(golf)(report);
            var _closure2_slot3 = oscar;
            report = null;
            if(!(report != oscar)) { _fun00006_ip = 405; continue _fun00005 }
 130:
            golf = _closure1_slot1;
            options = _closure1_slot2;
            oscar = 17;
            oscar = options[oscar];
            oscar = golf.bind(tango)(oscar);
            oscar = oscar.bind(tango)();
            _closure2_slot4 = oscar;
            if(!(report != oscar)) { _fun00006_ip = 337; continue _fun00005 }
 165:
            golf = _closure1_slot0;
            options = _closure1_slot2;
            oscar = 18;
            oscar = options[oscar];
            golf = golf.bind(tango)(oscar);
            oscar = golf.hasFlag;
            zulu = zulu.application;
            zulu = zulu.flags;
            options = report != zulu;
            report = 0;
            if(!options) { _fun00006_ip = 213; continue _fun00005 }
 210:
            report = zulu;
 213:
            zulu = _closure1_slot5;
            zulu = zulu.EMBEDDED;
            zulu = oscar.bind(golf)(report, zulu);
            if(zulu) { _fun00006_ip = 300; continue _fun00005 }
 232:
            report = _closure1_slot1;
            oscar = _closure1_slot2;
            zulu = 14;
            zulu = oscar[zulu];
            golf = report.bind(tango)(zulu);
            oscar = {};
            zulu = _closure1_slot7;
            zulu = zulu.INVALID_COMMAND;
            oscar['errorCode'] = zulu;
            zulu = golf.prototype;
            report = Object.create(zulu, {constructor: {value: golf}});
            yankee = 'This application cannot access this API';
            foxtrot = report;
            romeo = oscar;
            zulu = new foxtrot[golf](romeo, yankee, offset);
            zulu = zulu instanceof Object ? zulu : report;
            throw zulu;
 300:
            zulu = global;
            report = zulu.Promise;
            zulu = report.prototype;
            zulu = Object.create(zulu, {constructor: {value: report}});
            romeo = function(argFoo) {
                entity = argFoo;
                var _closure3_slot0 = entity;
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 19;
                mike = mike[entity];
                entity = undefined;
                tango = zulu.bind(entity)(mike);
                zulu = tango.openActivityShareLinkModal;
                mike = {};
                golf = _closure2_slot3;
                mike['applicationId'] = golf;
                golf = _closure2_slot4;
                golf = golf.id;
                mike['channelId'] = golf;
                golf = {};
                options = _closure2_slot0;
                golf['referrerId'] = options;
                options = _closure2_slot1;
                golf['customId'] = options;
                mike['launchParams'] = golf;
                oscar = _closure2_slot2;
                mike['message'] = oscar;
                report = function(argFoo) { // Original name: onShare
                    zulu = _closure3_slot0;
                    mike = {};
                    entity = argFoo;
                    mike['success'] = entity;
                    entity = undefined;
                    mike = zulu.bind(entity)(mike);
                    return entity;
                };
                mike['onShare'] = report;
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            foxtrot = zulu;
            mike = new foxtrot[report](romeo, yankee);
            mike = mike instanceof Object ? mike : zulu;
            return mike;
 337:
            zulu = _closure1_slot1;
            report = _closure1_slot2;
            mike = 14;
            mike = report[mike];
            oscar = zulu.bind(tango)(mike);
            report = {};
            mike = _closure1_slot7;
            mike = mike.INVALID_COMMAND;
            report['errorCode'] = mike;
            mike = oscar.prototype;
            zulu = Object.create(mike, {constructor: {value: oscar}});
            yankee = 'No channel found';
            foxtrot = zulu;
            romeo = report;
            mike = new foxtrot[oscar](romeo, yankee, offset);
            mike = mike instanceof Object ? mike : zulu;
            throw mike;
 405:
            zulu = _closure1_slot1;
            report = _closure1_slot2;
            mike = 14;
            mike = report[mike];
            tango = zulu.bind(tango)(mike);
            zulu = {};
            entity = _closure1_slot7;
            entity = entity.INVALID_COMMAND;
            zulu['errorCode'] = entity;
            entity = tango.prototype;
            mike = Object.create(entity, {constructor: {value: tango}});
            yankee = 'No application.';
            foxtrot = mike;
            romeo = zulu;
            entity = new foxtrot[tango](romeo, yankee, offset);
            entity = entity instanceof Object ? entity : mike;
            throw entity;
        }
    };
    tango['handler'] = yankee;
    tango = verify.bind(offset)(options, tango);
    mike[golf] = tango;
    tango = 20;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/rpc/server/commands/links.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();