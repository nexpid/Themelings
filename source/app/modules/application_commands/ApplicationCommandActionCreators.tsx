// app/modules/application_commands/ApplicationCommandActionCreators.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBar;
    option = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = option;
    var _closure1_slot2 = golfie;
    tangon = function(argFoo, argBar) { // Original name: updateOptionStates
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 5;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'APPLICATION_COMMAND_UPDATE_OPTIONS';
        michal['type'] = report;
        report = argFoo;
        michal['channelId'] = report;
        report = argBar;
        michal['changedOptionStates'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    var _closure1_slot6 = tangon;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, report);
    entity = 0;
    report = golfie[entity];
    entity = undefined;
    report = option.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 1;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 2;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    report = report.Endpoints;
    var _closure1_slot5 = report;
    report = 9;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/application_commands/ApplicationCommandActionCreators.tsx';
    report = oscard.bind(golfie)(report);
    report = function(argFoo) { // Original name: setActiveCommand
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            sizing = entity.channelId;
            kiloes = entity.command;
            backup = entity.section;
            romeon = entity.location;
            foxtra = entity.initialValues;
            yankee = entity.triggerSection;
            offset = entity.queryLength;
            verify = entity.sectionName;
            option = entity.query;
            golfie = entity.searchResultsPosition;
            oscard = entity.source;
            report = entity.commandOrigin;
            entity = null;
            if(!(entity != kiloes)) { _fun00002_ip = 152; continue _fun00001 }
 77:
            zuuluu = _closure1_slot1;
            result = _closure1_slot2;
            michal = 3;
            michal = result[michal];
            tangon = undefined;
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = kiloes.inputType;
            output = _closure1_slot0;
            entity = 4;
            entity = result[entity];
            entity = output.bind(tangon)(entity);
            entity = entity.ApplicationCommandInputType;
            entity = entity.PLACEHOLDER;
            michal = michal !== entity;
            entity = 'command should not be placeholder';
            entity = zuuluu.bind(tangon)(michal, entity);
 152:
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 5;
            michal = michal[entity];
            entity = undefined;
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.dispatch;
            michal = {};
            output = 'APPLICATION_COMMAND_SET_ACTIVE_COMMAND';
            michal['type'] = output;
            michal['channelId'] = sizing;
            michal['command'] = kiloes;
            michal['section'] = backup;
            michal['initialValues'] = foxtra;
            michal['location'] = romeon;
            michal['triggerSection'] = yankee;
            michal['queryLength'] = offset;
            michal['sectionName'] = verify;
            michal['query'] = option;
            michal['searchResultsPosition'] = golfie;
            michal['source'] = oscard;
            michal['commandOrigin'] = report;
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        }
    };
    zuuluu['setActiveCommand'] = report;
    report = function(argFoo, argBar) { // Original name: setPreferredCommandId
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 5;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'APPLICATION_COMMAND_SET_PREFERRED_COMMAND';
        michal['type'] = report;
        report = argFoo;
        michal['channelId'] = report;
        report = argBar;
        michal['commandId'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['setPreferredCommandId'] = report;
    zuuluu['updateOptionStates'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: updateOptionValidationStates
        tangon = _closure1_slot6;
        entity = global;
        zuuluu = entity.Object;
        michal = zuuluu.fromEntries;
        oscard = entity.Object;
        report = oscard.entries;
        entity = argBar;
        oscard = report.bind(oscard)(entity);
        report = oscard.map;
        entity = function(argFoo) {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                report = argFoo;
                entity = report[Symbol.iterator];
                report = entity().next;
                zuuluu = report().value;
                michal = entity;
                golfie = undefined;
                tangon = michal === golfie;
                michal = undefined;
                if(tangon) { _fun00004_ip = 27; continue _fun00003 }
 24:
                michal = zuuluu;
 27:
                zuuluu = undefined;
                if(tangon) { _fun00004_ip = 57; continue _fun00003 }
 32:
                oscard = report().value;
                report = entity;
                report = report === golfie;
                zuuluu = undefined;
                tangon = report;
                if(report) { _fun00004_ip = 57; continue _fun00003 }
 51:
                zuuluu = oscard;
                tangon = report;
 57:
                if(tangon) { _fun00004_ip = 63; continue _fun00003 }
 60:
                entity.return();
 63:
                entity = new Array(2);
                entity[0] = michal;
                michal = {};
                michal['lastValidationResult'] = zuuluu;
                entity[1] = michal;
                return entity;
            }
        };
        entity = report.bind(oscard)(entity);
        zuuluu = michal.bind(zuuluu)(entity);
        entity = undefined;
        michal = argFoo;
        michal = tangon.bind(entity)(michal, zuuluu);
        return entity;
    };
    zuuluu['updateOptionValidationStates'] = tangon;
    tangon = function(argFoo) { // Original name: updateChannelState
        entity = argFoo;
        offset = entity.channelId;
        verify = entity.command;
        option = entity.section;
        golfie = entity.preferredCommandId;
        oscard = entity.location;
        report = entity.changedOptionStates;
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 5;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        yankee = 'APPLICATION_COMMAND_UPDATE_CHANNEL_STATE';
        michal['type'] = yankee;
        michal['channelId'] = offset;
        michal['command'] = verify;
        michal['section'] = option;
        michal['preferredCommandId'] = golfie;
        michal['location'] = oscard;
        michal['changedOptionStates'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['updateChannelState'] = tangon;
    tangon = function(argFoo, argBar, argBaz, argCor) { // Original name: updateApplicationGuildCommandPermissions
        zuuluu = _closure1_slot0;
        michal = _closure1_slot2;
        entity = 6;
        michal = michal[entity];
        entity = undefined;
        entity = zuuluu.bind(entity)(michal);
        zuuluu = entity.HTTP;
        michal = zuuluu.put;
        entity = {};
        report = {};
        oscard = argCor;
        report['permissions'] = oscard;
        entity['body'] = report;
        option = _closure1_slot5;
        golfie = option.APPLICATION_BOT_GUILD_COMMAND_PERMISSIONS;
        oscard = argFoo;
        report = argBar;
        tangon = argBaz;
        tangon = golfie.bind(option)(oscard, report, tangon);
        entity['url'] = tangon;
        tangon = false;
        entity['rejectWithError'] = tangon;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    zuuluu['updateApplicationGuildCommandPermissions'] = tangon;
    tangon = function(argFoo, argBar, argBaz) { // Original name: performAutocomplete
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            verify = argBar;
            tangon = _closure1_slot1;
            report = _closure1_slot2;
            entity = 3;
            zuuluu = report[entity];
            entity = undefined;
            golfie = tangon.bind(entity)(zuuluu);
            zuuluu = verify.autocomplete;
            offset = null;
            oscard = offset != zuuluu;
            zuuluu = 'Missing autocomplete context';
            zuuluu = golfie.bind(entity)(oscard, zuuluu);
            zuuluu = verify.autocomplete;
            yankee = zuuluu.query;
            oscard = zuuluu.name;
            zuuluu = 7;
            zuuluu = report[zuuluu];
            report = tangon.bind(entity)(zuuluu);
            tangon = report.fromTimestamp;
            zuuluu = global;
            golfie = zuuluu.Date;
            zuuluu = golfie.now;
            zuuluu = zuuluu.bind(golfie)();
            golfie = tangon.bind(report)(zuuluu);
            var _closure2_slot0 = golfie;
            zuuluu = verify.channel;
            if(!(offset != zuuluu)) { _fun00006_ip = 431; continue _fun00005 }
 127:
            tangon = _closure1_slot1;
            report = _closure1_slot2;
            zuuluu = 5;
            zuuluu = report[zuuluu];
            report = tangon.bind(entity)(zuuluu);
            tangon = report.dispatch;
            zuuluu = {};
            romeon = 'APPLICATION_COMMAND_AUTOCOMPLETE_REQUEST';
            zuuluu['type'] = romeon;
            zuuluu['nonce'] = golfie;
            romeon = verify.channel;
            romeon = romeon.id;
            zuuluu['channelId'] = romeon;
            zuuluu['query'] = yankee;
            zuuluu['name'] = oscard;
            zuuluu = tangon.bind(report)(zuuluu);
            report = _closure1_slot4;
            tangon = report.getAutocompleteChoices;
            zuuluu = verify.channel;
            zuuluu = zuuluu.id;
            zuuluu = tangon.bind(report)(zuuluu, oscard, yankee);
            if(!(offset == zuuluu)) { _fun00006_ip = 431; continue _fun00005 }
 231:
            romeon = _closure1_slot0;
            foxtra = _closure1_slot2;
            zuuluu = 6;
            zuuluu = foxtra[zuuluu];
            zuuluu = romeon.bind(entity)(zuuluu);
            report = zuuluu.HTTP;
            tangon = report.post;
            zuuluu = {};
            oscard = _closure1_slot5;
            oscard = oscard.INTERACTIONS;
            zuuluu['url'] = oscard;
            oscard = {};
            yankee = 8;
            yankee = foxtra[yankee];
            yankee = romeon.bind(entity)(yankee);
            yankee = yankee.InteractionTypes;
            yankee = yankee.APPLICATION_COMMAND_AUTOCOMPLETE;
            oscard['type'] = yankee;
            yankee = argFoo;
            yankee = yankee.applicationId;
            oscard['application_id'] = yankee;
            yankee = verify.guild;
            romeon = offset == yankee;
            offset = undefined;
            if(romeon) { _fun00006_ip = 340; continue _fun00005 }
 335:
            offset = yankee.id;
 340:
            oscard['guild_id'] = offset;
            verify = verify.channel;
            verify = verify.id;
            oscard['channel_id'] = verify;
            verify = _closure1_slot3;
            option = verify.getSessionId;
            option = option.bind(verify)();
            oscard['session_id'] = option;
            option = argBaz;
            oscard['data'] = option;
            oscard['nonce'] = golfie;
            zuuluu['body'] = oscard;
            oscard = 3000;
            zuuluu['timeout'] = oscard;
            oscard = true;
            zuuluu['rejectWithError'] = oscard;
            tangon = tangon.bind(report)(zuuluu);
            zuuluu = tangon.catch;
            michal = function() {
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 5;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.dispatch;
                michal = {};
                report = 'INTERACTION_FAILURE';
                michal['type'] = report;
                report = _closure2_slot0;
                michal['nonce'] = report;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            michal = zuuluu.bind(tangon)(michal);
 431:
            return entity;
        }
    };
    zuuluu['performAutocomplete'] = tangon;
    tangon = function(argFoo, argBar, argBaz) { // Original name: fetchCommand
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 5;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'APPLICATION_COMMAND_FETCH';
        michal['type'] = report;
        report = argBar;
        michal['channelId'] = report;
        report = argBaz;
        michal['commandId'] = report;
        report = argFoo;
        michal['guildId'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['fetchCommand'] = tangon;
    tangon = function(argFoo, argBar, argBaz) { // Original name: fetchCommands
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 5;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'APPLICATION_COMMANDS_FETCH';
        michal['type'] = report;
        report = argBar;
        michal['channelId'] = report;
        report = argBaz;
        michal['commandIds'] = report;
        report = argFoo;
        michal['guildId'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['fetchCommands'] = tangon;
    tangon = function(argFoo) { // Original name: fetchCommandsForApplication
        entity = argFoo;
        oscard = entity.guildId;
        golfie = entity.channelId;
        report = entity.applicationId;
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 5;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        option = 'APPLICATION_COMMANDS_FETCH_FOR_APPLICATION';
        michal['type'] = option;
        michal['channelId'] = golfie;
        michal['guildId'] = oscard;
        michal['applicationId'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['fetchCommandsForApplication'] = tangon;
    tangon = function(argFoo, argBar, argBaz) { // Original name: updateRegistry
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 5;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'APPLICATION_COMMAND_REGISTRY_UPDATE';
        michal['type'] = report;
        report = argBar;
        michal['applications'] = report;
        report = argFoo;
        michal['commands'] = report;
        report = argBaz;
        michal['channelId'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['updateRegistry'] = tangon;
    michal = function(argFoo, argBar) { // Original name: setAppLauncherActiveCommand
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            report = argBar;
            entity = null;
            if(!(entity != report)) { _fun00008_ip = 84; continue _fun00007 }
 9:
            zuuluu = _closure1_slot1;
            golfie = _closure1_slot2;
            michal = 3;
            michal = golfie[michal];
            tangon = undefined;
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = report.inputType;
            oscard = _closure1_slot0;
            entity = 4;
            entity = golfie[entity];
            entity = oscard.bind(tangon)(entity);
            entity = entity.ApplicationCommandInputType;
            entity = entity.PLACEHOLDER;
            michal = michal !== entity;
            entity = 'command should not be placeholder';
            entity = zuuluu.bind(tangon)(michal, entity);
 84:
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 5;
            michal = michal[entity];
            entity = undefined;
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.dispatch;
            michal = {};
            oscard = 'APP_LAUNCHER_SET_ACTIVE_COMMAND';
            michal['type'] = oscard;
            oscard = argFoo;
            michal['channelId'] = oscard;
            michal['command'] = report;
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        }
    };
    zuuluu['setAppLauncherActiveCommand'] = michal;
    return entity;
})();