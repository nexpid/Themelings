// app/modules/application_commands/ApplicationCommandAutocompleteStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot5;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot4;
            entity = _closure1_slot13;
            entity = entity.bind(zulu)();
            if(entity) { _fun00002_ip = 51; continue _fun00001 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun00002_ip = 92; continue _fun00001;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun00002_ip = 71; continue _fun00001 }
 67:
            oscar = new Array(0);
 71:
            report = _closure1_slot5;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 92:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
 2: // try_start_0
            mike = global;
            zulu = mike.Boolean;
            zulu = zulu.prototype;
            tango = zulu.valueOf;
            zulu = tango.call;
            options = mike.Reflect;
            golf = options.construct;
            oscar = mike.Boolean;
            report = new Array(0);
            mike = function() {
                entity = undefined;
                return entity;
            };
            mike = golf.bind(options)(oscar, report, mike);
            mike = zulu.bind(tango)(mike);
            mike = !mike;
            var _closure2_slot0 = mike;
 70: // try_end0
            _fun00004_ip = 74; continue _fun00003;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot13 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot13 = entity;
    entity = function(argFoo) { // Original name: getOrCreateChannelState
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            zulu = argFoo;
            tango = _closure1_slot10;
            mike = tango.has;
            mike = mike.bind(tango)(zulu);
            if(mike) { _fun00006_ip = 239; continue _fun00005 }
 26:
            report = _closure1_slot10;
            tango = report.set;
            mike = {};
            golf = _closure1_slot7;
            oscar = golf.getActiveCommand;
            options = oscar.bind(golf)(zulu);
            oscar = null;
            verify = oscar == options;
            oscar = undefined;
            golf = undefined;
            if(verify) { _fun00006_ip = 70; continue _fun00005 }
 65:
            golf = options.id;
 70:
            mike['commandId'] = golf;
            options = _closure1_slot7;
            golf = options.getActiveOptionName;
            golf = golf.bind(options)(zulu);
            mike['optionName'] = golf;
            golf = global;
            options = golf.Map;
            verify = options.prototype;
            verify = Object.create(verify, {constructor: {value: options}});
            romeo = verify;
            options = new romeo[options](yankee);
            options = options instanceof Object ? options : verify;
            mike['optionNameToAutocompleteQueries'] = options;
            options = golf.Map;
            verify = options.prototype;
            verify = Object.create(verify, {constructor: {value: options}});
            romeo = verify;
            options = new romeo[options](yankee);
            options = options instanceof Object ? options : verify;
            mike['optionNameToLastResults'] = options;
            options = golf.Map;
            verify = options.prototype;
            verify = Object.create(verify, {constructor: {value: options}});
            romeo = verify;
            options = new romeo[options](yankee);
            options = options instanceof Object ? options : verify;
            mike['optionNameToNonce'] = options;
            golf = golf.Map;
            options = golf.prototype;
            options = Object.create(options, {constructor: {value: golf}});
            romeo = options;
            golf = new romeo[golf](yankee);
            golf = golf instanceof Object ? golf : options;
            mike['optionNameToLastQuery'] = golf;
            golf = false;
            mike['lastErrored'] = golf;
            mike['lastResponseNonce'] = oscar;
            mike = tango.bind(report)(zulu, mike);
 239:
            mike = _closure1_slot10;
            entity = mike.get;
            entity = entity.bind(mike)(zulu);
            return entity;
        }
    };
    var _closure1_slot14 = entity;
    offset = function() { // Original name: handleInit
        zulu = _closure1_slot9;
        mike = zulu.clear;
        mike = mike.bind(zulu)();
        mike = _closure1_slot10;
        entity = mike.clear;
        entity = entity.bind(mike)();
        entity = true;
        return entity;
    };
    verify = function(argFoo) { // Original name: handleSetActiveCommand
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            tango = entity.channelId;
            report = entity.command;
            zulu = _closure1_slot15;
            entity = null;
            oscar = entity == report;
            entity = undefined;
            mike = undefined;
            if(oscar) { _fun00008_ip = 39; continue _fun00007 }
 34:
            mike = report.id;
 39:
            mike = zulu.bind(entity)(tango, mike);
            return entity;
        }
    };
    entity = function(argFoo, argBar) { // Original name: handleCommandChange
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            report = argFoo;
            tango = argBar;
            zulu = _closure1_slot7;
            mike = zulu.getActiveOptionName;
            zulu = mike.bind(zulu)(report);
            mike = _closure1_slot10;
            entity = mike.get;
            mike = entity.bind(mike)(report);
            report = null;
            entity = report != mike;
            if(!entity) { _fun00010_ip = 73; continue _fun00009 }
 47:
            oscar = mike.commandId;
            oscar = tango !== oscar;
            if(oscar) { _fun00010_ip = 70; continue _fun00009 }
 60:
            golf = mike.optionName;
            oscar = zulu !== golf;
 70:
            entity = oscar;
 73:
            if(!entity) { _fun00010_ip = 182; continue _fun00009 }
 76:
            report = report != tango;
            if(!report) { _fun00010_ip = 93; continue _fun00009 }
 83:
            oscar = mike.commandId;
            report = tango !== oscar;
 93:
            if(!report) { _fun00010_ip = 160; continue _fun00009 }
 96:
            oscar = mike.optionNameToLastResults;
            report = oscar.clear;
            report = report.bind(oscar)();
            oscar = mike.optionNameToNonce;
            report = oscar.clear;
            report = report.bind(oscar)();
            oscar = mike.optionNameToLastQuery;
            report = oscar.clear;
            report = report.bind(oscar)();
            oscar = mike.optionNameToAutocompleteQueries;
            report = oscar.clear;
            report = report.bind(oscar)();
 160:
            report = false;
            mike['lastErrored'] = report;
            mike['commandId'] = tango;
            mike['optionName'] = zulu;
            entity = true;
 182:
            return entity;
        }
    };
    var _closure1_slot15 = entity;
    mike = global;
    romeo = mike.Object;
    yankee = romeo.defineProperty;
    options = {};
    entity = true;
    options['value'] = entity;
    entity = '__esModule';
    entity = yankee.bind(romeo)(zulu, entity, options);
    entity = 0;
    options = oscar[entity];
    entity = undefined;
    options = golf.bind(entity)(options);
    var _closure1_slot2 = options;
    options = 1;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot3 = options;
    options = 2;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot4 = options;
    options = 3;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot5 = options;
    options = 4;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot6 = options;
    options = 5;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot7 = options;
    options = 6;
    options = oscar[options];
    options = report.bind(entity)(options);
    options = options.AnalyticEvents;
    var _closure1_slot8 = options;
    options = mike.Map;
    yankee = options.prototype;
    yankee = Object.create(yankee, {constructor: {value: options}});
    sizing = yankee;
    options = new sizing[options](kilo);
    options = options instanceof Object ? options : yankee;
    var _closure1_slot9 = options;
    options = mike.Map;
    yankee = options.prototype;
    yankee = Object.create(yankee, {constructor: {value: options}});
    sizing = yankee;
    options = new sizing[options](kilo);
    options = options instanceof Object ? options : yankee;
    var _closure1_slot10 = options;
    mike = mike.Map;
    options = mike.prototype;
    options = Object.create(options, {constructor: {value: mike}});
    sizing = options;
    mike = new sizing[mike](kilo);
    mike = mike instanceof Object ? mike : options;
    var _closure1_slot11 = mike;
    mike = 8;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    options = mike.Store;
    mike = function(argFoo) {
        tango = function() { // Original name: ApplicationCommandAutocompleteStore
            report = this;
            tango = undefined;
            entity = undefined;
            oscar = _closure1_slot2;
            zulu = _closure2_slot0;
            oscar = oscar.bind(tango)(report, zulu);
            mike = _closure1_slot12;
            entity = arguments;
            entity = mike.bind(tango)(report, zulu, entity);
            return entity;
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot6;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot3;
        report = {};
        entity = 'initialize';
        report['key'] = entity;
        entity = function() { // Original name: value
            zulu = this;
            mike = zulu.waitFor;
            entity = _closure1_slot7;
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        report['value'] = entity;
        entity = new Array(5);
        entity[0] = report;
        report = {};
        golf = 'getLastErrored';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            zulu = _closure1_slot14;
            mike = undefined;
            entity = argFoo;
            entity = zulu.bind(mike)(entity);
            entity = entity.lastErrored;
            return entity;
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'getAutocompleteChoices';
        report['key'] = golf;
        golf = function(argFoo, argBar, argBaz) { // Original name: value
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                zulu = _closure1_slot14;
                entity = undefined;
                mike = argFoo;
                mike = zulu.bind(entity)(mike);
                tango = mike.optionNameToAutocompleteQueries;
                zulu = tango.get;
                mike = argBar;
                tango = zulu.bind(tango)(mike);
                mike = null;
                mike = mike == tango;
                if(mike) { _fun00012_ip = 58; continue _fun00011 }
 45:
                zulu = tango.get;
                mike = argBaz;
                entity = zulu.bind(tango)(mike);
 58:
                return entity;
            }
        };
        report['value'] = golf;
        entity[2] = report;
        report = {};
        golf = 'getAutocompleteLastChoices';
        report['key'] = golf;
        golf = function(argFoo, argBar) { // Original name: value
            zulu = _closure1_slot14;
            mike = undefined;
            entity = argFoo;
            entity = zulu.bind(mike)(entity);
            zulu = entity.optionNameToLastResults;
            mike = zulu.get;
            entity = argBar;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        report['value'] = golf;
        entity[3] = report;
        report = {};
        golf = 'getLastResponseNonce';
        report['key'] = golf;
        oscar = function(argFoo) { // Original name: value
            zulu = _closure1_slot14;
            mike = undefined;
            entity = argFoo;
            entity = zulu.bind(mike)(entity);
            entity = entity.lastResponseNonce;
            return entity;
        };
        report['value'] = oscar;
        entity[4] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    options = mike.bind(entity)(options);
    mike = 'ApplicationCommandAutocompleteStore';
    options['displayName'] = mike;
    mike = 9;
    mike = oscar[mike];
    kilo = golf.bind(entity)(mike);
    mike = {};
    mike['CONNECTION_OPEN'] = offset;
    mike['LOGOUT'] = offset;
    mike['CHANNEL_SELECT'] = offset;
    offset = function(argFoo) { // Original name: handleApplicationCommandAutocompleteRequest
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            entity = argFoo;
            golf = entity.nonce;
            yankee = entity.channelId;
            offset = entity.query;
            tango = entity.name;
            entity = _closure1_slot14;
            mike = undefined;
            entity = entity.bind(mike)(yankee);
            oscar = entity.optionNameToLastQuery;
            zulu = oscar.get;
            zulu = zulu.bind(oscar)(tango);
            if(!(zulu !== offset)) { _fun00014_ip = 297; continue _fun00013 }
 61:
            oscar = entity.optionNameToLastQuery;
            zulu = oscar.set;
            zulu = zulu.bind(oscar)(tango, offset);
            oscar = entity.optionNameToAutocompleteQueries;
            zulu = oscar.get;
            verify = zulu.bind(oscar)(tango);
            oscar = null;
            options = oscar == verify;
            zulu = undefined;
            if(options) { _fun00014_ip = 115; continue _fun00013 }
 105:
            options = verify.get;
            zulu = options.bind(verify)(offset);
 115:
            if(!(oscar == zulu)) { _fun00014_ip = 268; continue _fun00013 }
 122:
            verify = entity.optionNameToNonce;
            options = verify.get;
            verify = options.bind(verify)(tango);
            if(!(oscar != verify)) { _fun00014_ip = 156; continue _fun00013 }
 142:
            options = _closure1_slot9;
            oscar = options.delete;
            oscar = oscar.bind(options)(verify);
 156:
            verify = _closure1_slot9;
            options = verify.set;
            oscar = {};
            oscar['channelId'] = yankee;
            oscar['query'] = offset;
            oscar['name'] = tango;
            oscar = options.bind(verify)(golf, oscar);
            options = _closure1_slot11;
            oscar = options.set;
            report = global;
            report = report.Date;
            verify = report.prototype;
            verify = Object.create(verify, {constructor: {value: report}});
            backup = verify;
            report = new backup[report](foxtrot);
            report = report instanceof Object ? report : verify;
            report = oscar.bind(options)(golf, report);
            oscar = entity.optionNameToNonce;
            report = oscar.set;
            report = report.bind(oscar)(tango, golf);
            report = entity.lastErrored;
            mike = undefined;
            if(!report) { _fun00014_ip = 266; continue _fun00013 }
 256:
            report = false;
            entity['lastErrored'] = report;
            mike = true;
 266:
            return mike;
 268:
            mike = false;
            entity['lastErrored'] = mike;
            mike = entity.optionNameToLastResults;
            entity = mike.set;
            entity = entity.bind(mike)(tango, zulu);
            entity = true;
            return entity;
 297:
            entity = false;
            return entity;
        }
    };
    mike['APPLICATION_COMMAND_AUTOCOMPLETE_REQUEST'] = offset;
    offset = function(argFoo) { // Original name: handleApplicationCommandAutocompleteResponse
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            entity = argFoo;
            verify = entity.choices;
            mike = entity.nonce;
            tango = _closure1_slot9;
            zulu = tango.get;
            zulu = zulu.bind(tango)(mike);
            report = null;
            if(!(report != zulu)) { _fun00016_ip = 443; continue _fun00015 }
 41:
            oscar = _closure1_slot9;
            tango = oscar.delete;
            tango = tango.bind(oscar)(mike);
            tango = report == verify;
            options = undefined;
            oscar = undefined;
            if(tango) { _fun00016_ip = 83; continue _fun00015 }
 66:
            golf = verify.map;
            tango = function(argFoo) {
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    mike = argFoo;
                    entity = {};
                    oscar = entity;
                    report = mike;
                    zulu = copyDataProperties(oscar, report);
                    zulu = mike.name_localized;
                    tango = null;
                    if(!(tango == zulu)) { _fun00018_ip = 32; continue _fun00017 }
 27:
                    zulu = mike.name;
 32:
                    mike = 'displayName';
                    entity[mike] = zulu;
                    return entity;
                }
            };
            oscar = golf.bind(verify)(tango);
 83:
            if(!(report == oscar)) { _fun00016_ip = 91; continue _fun00015 }
 87:
            oscar = new Array(0);
 91:
            golf = _closure1_slot11;
            tango = golf.get;
            offset = tango.bind(golf)(mike);
            golf = report != offset;
            tango = 0;
            if(!golf) { _fun00016_ip = 166; continue _fun00015 }
 114:
            golf = global;
            golf = golf.Date;
            verify = golf.prototype;
            verify = Object.create(verify, {constructor: {value: golf}});
            kilo = verify;
            golf = new kilo[golf](backup);
            verify = golf instanceof Object ? golf : verify;
            golf = verify.getTime;
            verify = golf.bind(verify)();
            golf = offset.getTime;
            golf = golf.bind(offset)();
            tango = verify - golf;
 166:
            verify = _closure1_slot0;
            offset = _closure1_slot1;
            golf = 7;
            golf = offset[golf];
            yankee = verify.bind(options)(golf);
            offset = yankee.trackWithMetadata;
            golf = _closure1_slot8;
            verify = golf.APPLICATION_COMMAND_OPTION_STRING_AUTOCOMPLETE_PERFORMANCE;
            golf = {};
            golf['duration_ms'] = tango;
            tango = false;
            golf['error'] = tango;
            romeo = oscar.length;
            golf['num_options'] = romeo;
            golf = offset.bind(yankee)(verify, golf);
            verify = _closure1_slot11;
            golf = verify.delete;
            golf = golf.bind(verify)(mike);
            golf = _closure1_slot14;
            entity = zulu.channelId;
            entity = golf.bind(options)(entity);
            verify = entity.optionNameToAutocompleteQueries;
            options = verify.get;
            golf = zulu.name;
            golf = options.bind(verify)(golf);
            if(!(report == golf)) { _fun00016_ip = 334; continue _fun00015 }
 284:
            offset = entity.optionNameToAutocompleteQueries;
            verify = offset.set;
            options = zulu.name;
            golf = global;
            golf = golf.Map;
            yankee = golf.prototype;
            yankee = Object.create(yankee, {constructor: {value: golf}});
            kilo = yankee;
            golf = new kilo[golf](backup);
            golf = golf instanceof Object ? golf : yankee;
            golf = verify.bind(offset)(options, golf);
 334:
            verify = entity.optionNameToAutocompleteQueries;
            options = verify.get;
            golf = zulu.name;
            options = options.bind(verify)(golf);
            if(!(report != options)) { _fun00016_ip = 375; continue _fun00015 }
 359:
            golf = options.set;
            report = zulu.query;
            report = golf.bind(options)(report, oscar);
 375:
            options = entity.optionNameToLastQuery;
            golf = options.get;
            report = zulu.name;
            golf = golf.bind(options)(report);
            report = zulu.query;
            if(!(golf === report)) { _fun00016_ip = 433; continue _fun00015 }
 405:
            entity['lastErrored'] = tango;
            report = entity.optionNameToLastResults;
            tango = report.set;
            zulu = zulu.name;
            zulu = tango.bind(report)(zulu, oscar);
 433:
            entity['lastResponseNonce'] = mike;
            entity = true;
            return entity;
 443:
            entity = false;
            return entity;
        }
    };
    mike['APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE'] = offset;
    offset = function(argFoo) { // Original name: handleInteractionFailure
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            entity = argFoo;
            golf = entity.nonce;
            entity = null;
            if(!(entity != golf)) { _fun00020_ip = 228; continue _fun00019 }
 18:
            tango = _closure1_slot9;
            mike = tango.get;
            mike = mike.bind(tango)(golf);
            if(!(entity != mike)) { _fun00020_ip = 224; continue _fun00019 }
 42:
            report = _closure1_slot9;
            tango = report.delete;
            tango = tango.bind(report)(golf);
            report = _closure1_slot11;
            tango = report.get;
            oscar = tango.bind(report)(golf);
            tango = entity != oscar;
            entity = 0;
            if(!tango) { _fun00020_ip = 131; continue _fun00019 }
 79:
            tango = global;
            tango = tango.Date;
            report = tango.prototype;
            report = Object.create(report, {constructor: {value: tango}});
            foxtrot = report;
            tango = new foxtrot[tango](romeo);
            report = tango instanceof Object ? tango : report;
            tango = report.getTime;
            report = tango.bind(report)();
            tango = oscar.getTime;
            tango = tango.bind(oscar)();
            entity = report - tango;
 131:
            oscar = _closure1_slot0;
            report = _closure1_slot1;
            tango = 7;
            report = report[tango];
            tango = undefined;
            verify = oscar.bind(tango)(report);
            options = verify.trackWithMetadata;
            report = _closure1_slot8;
            oscar = report.APPLICATION_COMMAND_OPTION_STRING_AUTOCOMPLETE_PERFORMANCE;
            report = {};
            report['duration_ms'] = entity;
            entity = true;
            report['error'] = entity;
            report = options.bind(verify)(oscar, report);
            oscar = _closure1_slot11;
            report = oscar.delete;
            report = report.bind(oscar)(golf);
            zulu = _closure1_slot14;
            mike = mike.channelId;
            mike = zulu.bind(tango)(mike);
            mike['lastErrored'] = entity;
            return entity;
 224:
            entity = false;
            return entity;
 228:
            entity = false;
            return entity;
        }
    };
    mike['INTERACTION_FAILURE'] = offset;
    mike['APPLICATION_COMMAND_SET_ACTIVE_COMMAND'] = verify;
    mike['APP_LAUNCHER_SET_ACTIVE_COMMAND'] = verify;
    tango = function(argFoo) { // Original name: handleUpdateChannelState
        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
            entity = argFoo;
            tango = entity.channelId;
            report = entity.command;
            zulu = _closure1_slot15;
            entity = null;
            oscar = entity == report;
            entity = undefined;
            mike = undefined;
            if(oscar) { _fun00022_ip = 39; continue _fun00021 }
 34:
            mike = report.id;
 39:
            mike = zulu.bind(entity)(tango, mike);
            return entity;
        }
    };
    mike['APPLICATION_COMMAND_UPDATE_CHANNEL_STATE'] = tango;
    tango = options.prototype;
    tango = Object.create(tango, {constructor: {value: options}});
    sizing = tango;
    backup = mike;
    mike = new sizing[options](kilo, backup, foxtrot);
    mike = mike instanceof Object ? mike : tango;
    tango = 10;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/application_commands/ApplicationCommandAutocompleteStore.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();