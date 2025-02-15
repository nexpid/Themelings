// app/modules/rpc/server/commands/application.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    tango = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = tango;
    var _closure1_slot2 = oscar;
    entity = global;
    verify = entity.Object;
    golf = verify.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(verify)(zulu, entity, mike);
    entity = 0;
    mike = oscar[entity];
    entity = undefined;
    mike = tango.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = 1;
    mike = oscar[mike];
    mike = tango.bind(entity)(mike);
    var _closure1_slot4 = mike;
    mike = 2;
    mike = oscar[mike];
    mike = tango.bind(entity)(mike);
    var _closure1_slot5 = mike;
    mike = 3;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    verify = mike.RPC_LOCAL_SCOPE;
    mike = 4;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    tango = mike.ApplicationFlags;
    var _closure1_slot6 = tango;
    tango = mike.Endpoints;
    var _closure1_slot7 = tango;
    tango = mike.RPCCommands;
    mike = mike.RPCErrors;
    var _closure1_slot8 = mike;
    mike = {};
    offset = tango.SEND_ANALYTICS_EVENT;
    golf = {};
    yankee = function(argFoo) { // Original name: validation
        oscar = argFoo;
        golf = _closure1_slot1;
        options = _closure1_slot2;
        tango = 5;
        entity = options[tango];
        report = undefined;
        entity = golf.bind(report)(entity);
        mike = entity.bind(report)(oscar);
        entity = mike.required;
        zulu = entity.bind(mike)();
        mike = zulu.keys;
        entity = {};
        verify = oscar.string;
        offset = verify.bind(oscar)();
        verify = offset.required;
        verify = verify.bind(offset)();
        entity['event_name'] = verify;
        tango = options[tango];
        tango = golf.bind(report)(tango);
        report = tango.bind(report)(oscar);
        tango = report.required;
        tango = tango.bind(report)();
        entity['event_properties'] = tango;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    golf['validation'] = yankee;
    yankee = function(argFoo) { // Original name: handler
        _fun109529: for(var _fun109529_ip = 0; ; ) switch(_fun109529_ip) {
 0:
            entity = argFoo;
            mike = entity.socket;
            entity = entity.args;
            oscar = entity.event_name;
            golf = entity.event_properties;
            options = _closure1_slot0;
            report = _closure1_slot2;
            zulu = 6;
            verify = report[zulu];
            tango = undefined;
            yankee = options.bind(tango)(verify);
            offset = yankee.validatePostMessageTransport;
            verify = mike.transport;
            verify = offset.bind(yankee)(verify);
            zulu = report[zulu];
            verify = options.bind(tango)(zulu);
            options = verify.validateApplication;
            zulu = mike.application;
            zulu = options.bind(verify)(zulu);
            mike = mike.application;
            offset = mike.id;
            zulu = _closure1_slot1;
            mike = 7;
            mike = report[mike];
            mike = zulu.bind(tango)(mike);
            verify = mike.bind(tango)();
            mike = null;
            zulu = mike == verify;
            report = undefined;
            if(zulu) { _fun109529_ip = 145; continue _fun109529 }
 135:
            zulu = verify.getGuildId;
            report = zulu.bind(verify)();
 145:
            if(!(mike != verify)) { _fun109529_ip = 440; continue _fun109529 }
 152:
            options = _closure1_slot4;
            zulu = options.getApplication;
            options = zulu.bind(options)(offset);
            yankee = _closure1_slot0;
            romeo = _closure1_slot2;
            zulu = 9;
            zulu = romeo[zulu];
            romeo = yankee.bind(tango)(zulu);
            yankee = romeo.hasFlag;
            foxtrot = mike == options;
            zulu = undefined;
            if(foxtrot) { _fun109529_ip = 207; continue _fun109529 }
 202:
            zulu = options.flags;
 207:
            foxtrot = mike != zulu;
            options = 0;
            if(!foxtrot) { _fun109529_ip = 219; continue _fun109529 }
 216:
            options = zulu;
 219:
            zulu = _closure1_slot6;
            zulu = zulu.EMBEDDED_FIRST_PARTY;
            zulu = yankee.bind(romeo)(options, zulu);
            if(zulu) { _fun109529_ip = 306; continue _fun109529 }
 238:
            options = _closure1_slot1;
            yankee = _closure1_slot2;
            zulu = 8;
            zulu = yankee[zulu];
            romeo = options.bind(tango)(zulu);
            yankee = {};
            zulu = _closure1_slot8;
            zulu = zulu.INVALID_COMMAND;
            yankee['errorCode'] = zulu;
            zulu = romeo.prototype;
            options = Object.create(zulu, {constructor: {value: romeo}});
            backup = 'This application cannot access this API';
            sizing = options;
            kilo = yankee;
            zulu = new sizing[romeo](kilo, backup, foxtrot);
            zulu = zulu instanceof Object ? zulu : options;
            throw zulu;
 306:
            options = _closure1_slot0;
            yankee = _closure1_slot2;
            zulu = 10;
            zulu = yankee[zulu];
            options = options.bind(tango)(zulu);
            zulu = options.getActiveAnalyticsSessionIDs;
            zulu = zulu.bind(options)(offset);
            options = {};
            options['activity_application_id'] = offset;
            verify = verify.type;
            options['activity_channel_type'] = verify;
            options['activity_guild_id'] = report;
            report = mike == zulu;
            mike = undefined;
            if(report) { _fun109529_ip = 380; continue _fun109529 }
 374:
            mike = zulu.activityUserSessionId;
 380:
            options['activity_user_session_id'] = mike;
            zulu = _closure1_slot1;
            report = _closure1_slot2;
            mike = 11;
            mike = report[mike];
            report = zulu.bind(tango)(mike);
            zulu = report.track;
            mike = {};
            kilo = mike;
            backup = options;
            options = copyDataProperties(kilo, backup);
            kilo = mike;
            backup = golf;
            golf = copyDataProperties(kilo, backup);
            mike = zulu.bind(report)(oscar, mike);
            return tango;
 440:
            zulu = _closure1_slot1;
            report = _closure1_slot2;
            mike = 8;
            mike = report[mike];
            tango = zulu.bind(tango)(mike);
            zulu = {};
            entity = _closure1_slot8;
            entity = entity.INVALID_COMMAND;
            zulu['errorCode'] = entity;
            entity = tango.prototype;
            mike = Object.create(entity, {constructor: {value: tango}});
            backup = 'Invalid channel';
            sizing = mike;
            kilo = zulu;
            entity = new sizing[tango](kilo, backup, foxtrot);
            entity = entity instanceof Object ? entity : mike;
            throw entity;
        }
    };
    golf['handler'] = yankee;
    mike[offset] = golf;
    golf = tango.GET_APPLICATION_TICKET;
    tango = {};
    tango['scope'] = verify;
    options = function(argFoo) { // Original name: handler
        _fun109530: for(var _fun109530_ip = 0; ; ) switch(_fun109530_ip) {
 0:
            entity = argFoo;
            entity = entity.socket;
            entity = entity.application;
            options = entity.id;
            entity = null;
            if(!(entity != options)) { _fun109530_ip = 171; continue _fun109530 }
 28:
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 12;
            mike = mike[entity];
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            zulu = entity.HTTP;
            mike = zulu.post;
            entity = {'url': null, 'body': null, 'retries': 3, 'oldFormErrors': true, 'rejectWithError': false};
            report = _closure1_slot7;
            tango = report.APPLICATION_TICKET;
            tango = tango.bind(report)(options);
            entity['url'] = tango;
            tango = {};
            golf = _closure1_slot5;
            report = golf.inTestModeForApplication;
            report = report.bind(golf)(options);
            if(report) { _fun109530_ip = 134; continue _fun109530 }
 119:
            golf = _closure1_slot3;
            oscar = golf.inDevModeForApplication;
            report = oscar.bind(golf)(options);
 134:
            tango['test_mode'] = report;
            entity['body'] = tango;
            zulu = mike.bind(zulu)(entity);
            mike = zulu.then;
            entity = function(argFoo) {
                entity = argFoo;
                entity = entity.body;
                return entity;
            };
            entity = mike.bind(zulu)(entity);
            return entity;
 171:
            tango = _closure1_slot1;
            zulu = _closure1_slot2;
            mike = 8;
            zulu = zulu[mike];
            mike = undefined;
            tango = tango.bind(mike)(zulu);
            zulu = {};
            entity = _closure1_slot8;
            entity = entity.INVALID_COMMAND;
            zulu['errorCode'] = entity;
            entity = tango.prototype;
            mike = Object.create(entity, {constructor: {value: tango}});
            verify = 'No application.';
            yankee = mike;
            offset = zulu;
            entity = new yankee[tango](offset, verify, options);
            entity = entity instanceof Object ? entity : mike;
            throw entity;
        }
    };
    tango['handler'] = options;
    mike[golf] = tango;
    tango = 13;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/rpc/server/commands/application.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();