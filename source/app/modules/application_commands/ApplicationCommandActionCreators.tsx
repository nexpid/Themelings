// app/modules/application_commands/ApplicationCommandActionCreators.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBar;
    options = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = options;
    var _closure1_slot2 = golf;
    tango = function(argFoo, argBar) { // Original name: updateOptionStates
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 5;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'APPLICATION_COMMAND_UPDATE_OPTIONS';
        mike['type'] = report;
        report = argFoo;
        mike['channelId'] = report;
        report = argBar;
        mike['changedOptionStates'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    var _closure1_slot6 = tango;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, report);
    entity = 0;
    report = golf[entity];
    entity = undefined;
    report = options.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 1;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 2;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.Endpoints;
    var _closure1_slot5 = report;
    report = 9;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/application_commands/ApplicationCommandActionCreators.tsx';
    report = oscar.bind(golf)(report);
    report = function(argFoo) { // Original name: setActiveCommand
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            sizing = entity.channelId;
            kilo = entity.command;
            backup = entity.section;
            romeo = entity.location;
            foxtrot = entity.initialValues;
            yankee = entity.triggerSection;
            offset = entity.queryLength;
            verify = entity.sectionName;
            options = entity.query;
            golf = entity.searchResultsPosition;
            oscar = entity.source;
            report = entity.commandOrigin;
            entity = null;
            if(!(entity != kilo)) { _fun00002_ip = 151; continue _fun00001 }
 76:
            zulu = _closure1_slot1;
            result = _closure1_slot2;
            mike = 3;
            mike = result[mike];
            tango = undefined;
            zulu = zulu.bind(tango)(mike);
            mike = kilo.inputType;
            output = _closure1_slot0;
            entity = 4;
            entity = result[entity];
            entity = output.bind(tango)(entity);
            entity = entity.ApplicationCommandInputType;
            entity = entity.PLACEHOLDER;
            mike = mike !== entity;
            entity = 'command should not be placeholder';
            entity = zulu.bind(tango)(mike, entity);
 151:
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 5;
            mike = mike[entity];
            entity = undefined;
            tango = zulu.bind(entity)(mike);
            zulu = tango.dispatch;
            mike = {};
            output = 'APPLICATION_COMMAND_SET_ACTIVE_COMMAND';
            mike['type'] = output;
            mike['channelId'] = sizing;
            mike['command'] = kilo;
            mike['section'] = backup;
            mike['initialValues'] = foxtrot;
            mike['location'] = romeo;
            mike['triggerSection'] = yankee;
            mike['queryLength'] = offset;
            mike['sectionName'] = verify;
            mike['query'] = options;
            mike['searchResultsPosition'] = golf;
            mike['source'] = oscar;
            mike['commandOrigin'] = report;
            mike = zulu.bind(tango)(mike);
            return entity;
        }
    };
    zulu['setActiveCommand'] = report;
    report = function(argFoo, argBar) { // Original name: setPreferredCommandId
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 5;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'APPLICATION_COMMAND_SET_PREFERRED_COMMAND';
        mike['type'] = report;
        report = argFoo;
        mike['channelId'] = report;
        report = argBar;
        mike['commandId'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['setPreferredCommandId'] = report;
    zulu['updateOptionStates'] = tango;
    tango = function(argFoo, argBar) { // Original name: updateOptionValidationStates
        tango = _closure1_slot6;
        entity = global;
        zulu = entity.Object;
        mike = zulu.fromEntries;
        oscar = entity.Object;
        report = oscar.entries;
        entity = argBar;
        oscar = report.bind(oscar)(entity);
        report = oscar.map;
        entity = function(argFoo) {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                report = argFoo;
                entity = report[Symbol.iterator];
                report = entity().next;
                zulu = report().value;
                mike = entity;
                golf = undefined;
                tango = mike === golf;
                mike = undefined;
                if(tango) { _fun00004_ip = 27; continue _fun00003 }
 24:
                mike = zulu;
 27:
                zulu = undefined;
                if(tango) { _fun00004_ip = 57; continue _fun00003 }
 32:
                oscar = report().value;
                report = entity;
                report = report === golf;
                zulu = undefined;
                tango = report;
                if(report) { _fun00004_ip = 57; continue _fun00003 }
 51:
                zulu = oscar;
                tango = report;
 57:
                if(tango) { _fun00004_ip = 63; continue _fun00003 }
 60:
                entity.return();
 63:
                entity = new Array(2);
                entity[0] = mike;
                mike = {};
                mike['lastValidationResult'] = zulu;
                entity[1] = mike;
                return entity;
            }
        };
        entity = report.bind(oscar)(entity);
        zulu = mike.bind(zulu)(entity);
        entity = undefined;
        mike = argFoo;
        mike = tango.bind(entity)(mike, zulu);
        return entity;
    };
    zulu['updateOptionValidationStates'] = tango;
    tango = function(argFoo) { // Original name: updateChannelState
        entity = argFoo;
        offset = entity.channelId;
        verify = entity.command;
        options = entity.section;
        golf = entity.preferredCommandId;
        oscar = entity.location;
        report = entity.changedOptionStates;
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 5;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        yankee = 'APPLICATION_COMMAND_UPDATE_CHANNEL_STATE';
        mike['type'] = yankee;
        mike['channelId'] = offset;
        mike['command'] = verify;
        mike['section'] = options;
        mike['preferredCommandId'] = golf;
        mike['location'] = oscar;
        mike['changedOptionStates'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['updateChannelState'] = tango;
    tango = function(argFoo, argBar, argBaz, argCorge) { // Original name: updateApplicationGuildCommandPermissions
        zulu = _closure1_slot0;
        mike = _closure1_slot2;
        entity = 6;
        mike = mike[entity];
        entity = undefined;
        entity = zulu.bind(entity)(mike);
        zulu = entity.HTTP;
        mike = zulu.put;
        entity = {};
        report = {};
        oscar = argCorge;
        report['permissions'] = oscar;
        entity['body'] = report;
        options = _closure1_slot5;
        golf = options.APPLICATION_BOT_GUILD_COMMAND_PERMISSIONS;
        oscar = argFoo;
        report = argBar;
        tango = argBaz;
        tango = golf.bind(options)(oscar, report, tango);
        entity['url'] = tango;
        tango = false;
        entity['rejectWithError'] = tango;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    zulu['updateApplicationGuildCommandPermissions'] = tango;
    tango = function(argFoo, argBar, argBaz) { // Original name: performAutocomplete
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            verify = argBar;
            tango = _closure1_slot1;
            report = _closure1_slot2;
            entity = 3;
            zulu = report[entity];
            entity = undefined;
            golf = tango.bind(entity)(zulu);
            zulu = verify.autocomplete;
            offset = null;
            oscar = offset != zulu;
            zulu = 'Missing autocomplete context';
            zulu = golf.bind(entity)(oscar, zulu);
            zulu = verify.autocomplete;
            yankee = zulu.query;
            oscar = zulu.name;
            zulu = 7;
            zulu = report[zulu];
            report = tango.bind(entity)(zulu);
            tango = report.fromTimestamp;
            zulu = global;
            golf = zulu.Date;
            zulu = golf.now;
            zulu = zulu.bind(golf)();
            golf = tango.bind(report)(zulu);
            var _closure2_slot0 = golf;
            zulu = verify.channel;
            if(!(offset != zulu)) { _fun00006_ip = 431; continue _fun00005 }
 126:
            tango = _closure1_slot1;
            report = _closure1_slot2;
            zulu = 5;
            zulu = report[zulu];
            report = tango.bind(entity)(zulu);
            tango = report.dispatch;
            zulu = {};
            romeo = 'APPLICATION_COMMAND_AUTOCOMPLETE_REQUEST';
            zulu['type'] = romeo;
            zulu['nonce'] = golf;
            romeo = verify.channel;
            romeo = romeo.id;
            zulu['channelId'] = romeo;
            zulu['query'] = yankee;
            zulu['name'] = oscar;
            zulu = tango.bind(report)(zulu);
            report = _closure1_slot4;
            tango = report.getAutocompleteChoices;
            zulu = verify.channel;
            zulu = zulu.id;
            zulu = tango.bind(report)(zulu, oscar, yankee);
            if(!(offset == zulu)) { _fun00006_ip = 431; continue _fun00005 }
 229:
            romeo = _closure1_slot0;
            foxtrot = _closure1_slot2;
            zulu = 6;
            zulu = foxtrot[zulu];
            zulu = romeo.bind(entity)(zulu);
            report = zulu.HTTP;
            tango = report.post;
            zulu = {};
            oscar = _closure1_slot5;
            oscar = oscar.INTERACTIONS;
            zulu['url'] = oscar;
            oscar = {};
            yankee = 8;
            yankee = foxtrot[yankee];
            yankee = romeo.bind(entity)(yankee);
            yankee = yankee.InteractionTypes;
            yankee = yankee.APPLICATION_COMMAND_AUTOCOMPLETE;
            oscar['type'] = yankee;
            yankee = argFoo;
            yankee = yankee.applicationId;
            oscar['application_id'] = yankee;
            yankee = verify.guild;
            romeo = offset == yankee;
            offset = undefined;
            if(romeo) { _fun00006_ip = 338; continue _fun00005 }
 333:
            offset = yankee.id;
 338:
            oscar['guild_id'] = offset;
            verify = verify.channel;
            verify = verify.id;
            oscar['channel_id'] = verify;
            verify = _closure1_slot3;
            options = verify.getSessionId;
            options = options.bind(verify)();
            oscar['session_id'] = options;
            options = argBaz;
            oscar['data'] = options;
            oscar['nonce'] = golf;
            zulu['body'] = oscar;
            oscar = 3000;
            zulu['timeout'] = oscar;
            oscar = true;
            zulu['rejectWithError'] = oscar;
            tango = tango.bind(report)(zulu);
            zulu = tango.catch;
            mike = function() {
                zulu = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 5;
                mike = mike[entity];
                entity = undefined;
                tango = zulu.bind(entity)(mike);
                zulu = tango.dispatch;
                mike = {};
                report = 'INTERACTION_FAILURE';
                mike['type'] = report;
                report = _closure2_slot0;
                mike['nonce'] = report;
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            mike = zulu.bind(tango)(mike);
 431:
            return entity;
        }
    };
    zulu['performAutocomplete'] = tango;
    tango = function(argFoo, argBar, argBaz) { // Original name: fetchCommand
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 5;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'APPLICATION_COMMAND_FETCH';
        mike['type'] = report;
        report = argBar;
        mike['channelId'] = report;
        report = argBaz;
        mike['commandId'] = report;
        report = argFoo;
        mike['guildId'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['fetchCommand'] = tango;
    tango = function(argFoo, argBar, argBaz) { // Original name: fetchCommands
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 5;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'APPLICATION_COMMANDS_FETCH';
        mike['type'] = report;
        report = argBar;
        mike['channelId'] = report;
        report = argBaz;
        mike['commandIds'] = report;
        report = argFoo;
        mike['guildId'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['fetchCommands'] = tango;
    tango = function(argFoo) { // Original name: fetchCommandsForApplication
        entity = argFoo;
        oscar = entity.guildId;
        golf = entity.channelId;
        report = entity.applicationId;
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 5;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        options = 'APPLICATION_COMMANDS_FETCH_FOR_APPLICATION';
        mike['type'] = options;
        mike['channelId'] = golf;
        mike['guildId'] = oscar;
        mike['applicationId'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['fetchCommandsForApplication'] = tango;
    tango = function(argFoo, argBar, argBaz) { // Original name: updateRegistry
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 5;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'APPLICATION_COMMAND_REGISTRY_UPDATE';
        mike['type'] = report;
        report = argBar;
        mike['applications'] = report;
        report = argFoo;
        mike['commands'] = report;
        report = argBaz;
        mike['channelId'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['updateRegistry'] = tango;
    mike = function(argFoo, argBar) { // Original name: setAppLauncherActiveCommand
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            report = argBar;
            entity = null;
            if(!(entity != report)) { _fun00008_ip = 84; continue _fun00007 }
 9:
            zulu = _closure1_slot1;
            golf = _closure1_slot2;
            mike = 3;
            mike = golf[mike];
            tango = undefined;
            zulu = zulu.bind(tango)(mike);
            mike = report.inputType;
            oscar = _closure1_slot0;
            entity = 4;
            entity = golf[entity];
            entity = oscar.bind(tango)(entity);
            entity = entity.ApplicationCommandInputType;
            entity = entity.PLACEHOLDER;
            mike = mike !== entity;
            entity = 'command should not be placeholder';
            entity = zulu.bind(tango)(mike, entity);
 84:
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 5;
            mike = mike[entity];
            entity = undefined;
            tango = zulu.bind(entity)(mike);
            zulu = tango.dispatch;
            mike = {};
            oscar = 'APP_LAUNCHER_SET_ACTIVE_COMMAND';
            mike['type'] = oscar;
            oscar = argFoo;
            mike['channelId'] = oscar;
            mike['command'] = report;
            mike = zulu.bind(tango)(mike);
            return entity;
        }
    };
    zulu['setAppLauncherActiveCommand'] = mike;
    return entity;
})();