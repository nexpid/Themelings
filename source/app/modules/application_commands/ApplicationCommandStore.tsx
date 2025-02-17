// app/modules/application_commands/ApplicationCommandStore.tsx
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
            entity = _closure1_slot12;
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
    var _closure1_slot11 = entity;
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
            _closure1_slot12 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    romeo = function() { // Original name: handleInit
        entity = {};
        _closure1_slot10 = entity;
        entity = true;
        return entity;
    };
    entity = function(argFoo) { // Original name: getOrCreateChannelState
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            mike = argFoo;
            zulu = _closure1_slot10;
            zulu = mike in zulu;
            if(zulu) { _fun00006_ip = 51; continue _fun00005 }
 17:
            tango = _closure1_slot10;
            zulu = {'activeCommand': null, 'activeCommandSection': null, 'activeOptionName': null, 'preferredCommandId': null, 'optionStates': null, 'initialValues': null, 'commandOrigin': null};
            report = {};
            zulu['optionStates'] = report;
            report = {};
            zulu['initialValues'] = report;
            tango[mike] = zulu;
 51:
            entity = _closure1_slot10;
            entity = entity[mike];
            return entity;
        }
    };
    var _closure1_slot13 = entity;
    yankee = function(argFoo) { // Original name: handleSetActiveCommand
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            foxtrot = entity.channelId;
            yankee = entity.command;
            sizing = entity.section;
            romeo = entity.initialValues;
            offset = entity.location;
            verify = entity.triggerSection;
            options = entity.queryLength;
            golf = entity.sectionName;
            oscar = entity.query;
            report = entity.searchResultsPosition;
            tango = entity.source;
            kilo = entity.commandOrigin;
            zulu = undefined;
            var _closure2_slot0 = zulu;
            mike = _closure1_slot13;
            foxtrot = mike.bind(zulu)(foxtrot);
            mike = null;
            output = mike == yankee;
            result = undefined;
            if(output) { _fun00008_ip = 106; continue _fun00007 }
 101:
            result = yankee.id;
 106:
            echo = foxtrot.activeCommand;
            update = mike == echo;
            output = undefined;
            if(update) { _fun00008_ip = 126; continue _fun00007 }
 121:
            output = echo.id;
 126:
            if(!(result !== output)) { _fun00008_ip = 321; continue _fun00007 }
 133:
            foxtrot['activeCommand'] = yankee;
            foxtrot['activeCommandSection'] = sizing;
            foxtrot['activeOptionName'] = mike;
            foxtrot['preferredCommandId'] = mike;
            if(!(mike == romeo)) { _fun00008_ip = 163; continue _fun00007 }
 161:
            romeo = {};
 163:
            foxtrot['initialValues'] = romeo;
            sizing = mike != kilo;
            romeo = null;
            if(!sizing) { _fun00008_ip = 181; continue _fun00007 }
 178:
            romeo = kilo;
 181:
            foxtrot['commandOrigin'] = romeo;
            foxtrot['source'] = tango;
            romeo = {};
            _closure2_slot0 = romeo;
            sizing = mike == yankee;
            kilo = undefined;
            if(sizing) { _fun00008_ip = 213; continue _fun00007 }
 208:
            kilo = yankee.options;
 213:
            if(!(mike != kilo)) { _fun00008_ip = 237; continue _fun00007 }
 217:
            sizing = yankee.options;
            kilo = sizing.forEach;
            backup = function(argFoo) {
                zulu = _closure2_slot0;
                entity = argFoo;
                mike = entity.name;
                entity = {'isActive': false, 'hasValue': false, 'lastValidationResult': null, 'optionValue': null};
                zulu[mike] = entity;
                entity = undefined;
                return entity;
            };
            backup = kilo.bind(sizing)(backup);
 237:
            foxtrot['optionStates'] = romeo;
            if(!(mike != yankee)) { _fun00008_ip = 317; continue _fun00007 }
 247:
            mike = _closure1_slot0;
            romeo = _closure1_slot1;
            entity = 8;
            entity = romeo[entity];
            zulu = mike.bind(zulu)(entity);
            mike = zulu.trackCommandSelected;
            entity = {};
            entity['command'] = yankee;
            entity['location'] = offset;
            entity['triggerSection'] = verify;
            entity['queryLength'] = options;
            entity['sectionName'] = golf;
            entity['query'] = oscar;
            entity['searchResultsPosition'] = report;
            entity['source'] = tango;
            entity = mike.bind(zulu)(entity);
 317:
            entity = true;
            return entity;
 321:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot14 = yankee;
    offset = function(argFoo) { // Original name: handleSetPreferredCommand
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            entity = argFoo;
            zulu = entity.channelId;
            mike = entity.commandId;
            entity = _closure1_slot13;
            oscar = undefined;
            zulu = entity.bind(oscar)(zulu);
            entity = zulu.preferredCommandId;
            entity = mike !== entity;
            if(!entity) { _fun00010_ip = 95; continue _fun00009 }
 41:
            tango = zulu.preferredCommandId;
            report = null;
            tango = report !== tango;
            if(tango) { _fun00010_ip = 92; continue _fun00009 }
 56:
            golf = zulu.activeCommand;
            options = report == golf;
            oscar = undefined;
            if(options) { _fun00010_ip = 76; continue _fun00009 }
 71:
            oscar = golf.id;
 76:
            golf = report != oscar;
            report = null;
            if(!golf) { _fun00010_ip = 88; continue _fun00009 }
 85:
            report = oscar;
 88:
            tango = mike !== report;
 92:
            entity = tango;
 95:
            if(!entity) { _fun00010_ip = 128; continue _fun00009 }
 98:
            tango = null;
            zulu['activeCommand'] = tango;
            zulu['activeOptionName'] = tango;
            zulu['preferredCommandId'] = mike;
            mike = {};
            zulu['optionStates'] = mike;
            entity = true;
 128:
            return entity;
        }
    };
    var _closure1_slot15 = offset;
    verify = function(argFoo) { // Original name: handleUpdateOptionStates
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            entity = argFoo;
            mike = entity.channelId;
            report = entity.changedOptionStates;
            entity = _closure1_slot13;
            sizing = undefined;
            zulu = entity.bind(sizing)(mike);
            mike = {};
            status = zulu.optionStates;
            sierra = mike;
            entity = copyDataProperties(sierra, status);
            entity = global;
            tango = entity.Object;
            entity = tango.entries;
            kilo = entity.bind(tango)(report);
            entity = kilo.length;
            backup = 0;
            tango = backup < entity;
            foxtrot = false;
            romeo = null;
            entity = true;
            yankee = 2;
            offset = 1;
            verify = 0;
            options = undefined;
            golf = undefined;
            oscar = undefined;
            report = undefined;
            if(!tango) { _fun00012_ip = 577; continue _fun00011 }
 101:
            result = kilo[verify];
            tango = _closure1_slot7;
            tango = tango.bind(sizing)(result, yankee);
            config = tango[backup];
            record = tango[offset];
            tango = zulu.optionStates;
            tango = config in tango;
            source = options;
            update = golf;
            echo = oscar;
            result = report;
            if(!tango) { _fun00012_ip = 550; continue _fun00011 }
 151:
            tango = record.hasValue;
            if(!(sizing === tango)) { _fun00012_ip = 173; continue _fun00011 }
 161:
            tango = mike[config];
            tango = tango.hasValue;
            _fun00012_ip = 179; continue _fun00011;
 173:
            tango = record.hasValue;
 179:
            if(tango) { _fun00012_ip = 252; continue _fun00011 }
 182:
            tango = {'hasValue': false, 'isActive': false, 'lastValidationResult': null, 'optionValue': null};
            tango['location'] = sizing;
            tango['length'] = sizing;
            mike[config] = tango;
            tango = zulu.activeOptionName;
            source = options;
            update = golf;
            echo = oscar;
            result = report;
            if(!(tango === config)) { _fun00012_ip = 550; continue _fun00011 }
 229:
            zulu['activeOptionName'] = romeo;
            source = options;
            update = golf;
            echo = oscar;
            result = report;
            _fun00012_ip = 550; continue _fun00011;
 252:
            tango = mike[config];
            context = {};
            context['hasValue'] = entity;
            control = record.isActive;
            if(!(sizing === control)) { _fun00012_ip = 281; continue _fun00011 }
 273:
            control = tango.isActive;
            _fun00012_ip = 287; continue _fun00011;
 281:
            control = record.isActive;
 287:
            context['isActive'] = control;
            control = record.lastValidationResult;
            if(!(sizing === control)) { _fun00012_ip = 310; continue _fun00011 }
 302:
            control = tango.lastValidationResult;
            _fun00012_ip = 316; continue _fun00011;
 310:
            control = record.lastValidationResult;
 316:
            context['lastValidationResult'] = control;
            sequence = record.optionValue;
            control = sequence;
            if(!(romeo == sequence)) { _fun00012_ip = 340; continue _fun00011 }
 334:
            control = tango.optionValue;
 340:
            context['optionValue'] = control;
            vacuum = record.location;
            control = vacuum;
            if(!(romeo == vacuum)) { _fun00012_ip = 362; continue _fun00011 }
 357:
            control = tango.location;
 362:
            context['location'] = control;
            control = record.length;
            papa = control;
            if(!(romeo == control)) { _fun00012_ip = 383; continue _fun00011 }
 378:
            papa = tango.length;
 383:
            context['length'] = papa;
            mike[config] = context;
            context = record.isActive;
            source = sequence;
            update = vacuum;
            echo = control;
            result = tango;
            if(!(sizing !== context)) { _fun00012_ip = 550; continue _fun00011 }
 416:
            context = record.isActive;
            record = zulu.activeOptionName;
            if(context) { _fun00012_ip = 467; continue _fun00011 }
 431:
            source = sequence;
            update = vacuum;
            echo = control;
            result = tango;
            if(!(config === record)) { _fun00012_ip = 550; continue _fun00011 }
 447:
            zulu['activeOptionName'] = romeo;
            source = sequence;
            update = vacuum;
            echo = control;
            result = tango;
            _fun00012_ip = 550; continue _fun00011;
 467:
            record = romeo != record;
            if(!record) { _fun00012_ip = 484; continue _fun00011 }
 474:
            context = zulu.activeOptionName;
            record = context !== config;
 484:
            if(!record) { _fun00012_ip = 532; continue _fun00011 }
 487:
            context = zulu.activeOptionName;
            record = {};
            papa = zulu.activeOptionName;
            status = mike[papa];
            sierra = record;
            papa = copyDataProperties(sierra, status);
            mike[context] = record;
            record = zulu.activeOptionName;
            record = mike[record];
            record['isActive'] = foxtrot;
 532:
            zulu['activeOptionName'] = config;
            source = sequence;
            update = vacuum;
            echo = control;
            result = tango;
 550:
            verify = verify + 1;
            tango = kilo.length;
            options = source;
            golf = update;
            oscar = echo;
            report = result;
            if(verify < tango) { _fun00012_ip = 101; continue _fun00011 }
 577:
            zulu['optionStates'] = mike;
            return entity;
        }
    };
    var _closure1_slot16 = verify;
    entity = global;
    foxtrot = entity.Object;
    options = foxtrot.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = options.bind(foxtrot)(zulu, entity, mike);
    entity = 0;
    mike = oscar[entity];
    entity = undefined;
    mike = golf.bind(entity)(mike);
    var _closure1_slot2 = mike;
    mike = 1;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = 2;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot4 = mike;
    mike = 3;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot5 = mike;
    mike = 4;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot6 = mike;
    mike = 5;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot7 = mike;
    mike = 6;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot8 = mike;
    mike = 7;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot9 = mike;
    mike = {};
    var _closure1_slot10 = mike;
    mike = 9;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    options = mike.Store;
    mike = function(argFoo) {
        tango = function() { // Original name: ApplicationCommandStore
            report = this;
            tango = undefined;
            entity = undefined;
            oscar = _closure1_slot2;
            zulu = _closure2_slot0;
            oscar = oscar.bind(tango)(report, zulu);
            mike = _closure1_slot11;
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
            zulu = _closure1_slot8;
            mike = zulu.addChangeListener;
            entity = function() {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    zulu = _closure1_slot9;
                    entity = zulu.getChannelId;
                    report = entity.bind(zulu)();
                    entity = null;
                    if(!(entity != report)) { _fun00014_ip = 98; continue _fun00013 }
 23:
                    tango = _closure1_slot8;
                    zulu = tango.getCurrentSidebarChannelId;
                    zulu = zulu.bind(tango)(report);
                    if(!(entity != zulu)) { _fun00014_ip = 53; continue _fun00013 }
 42:
                    entity = _closure1_slot10;
                    entity = zulu in entity;
                    if(entity) { _fun00014_ip = 94; continue _fun00013 }
 53:
                    entity = _closure1_slot10;
                    entity = report in entity;
                    if(entity) { _fun00014_ip = 68; continue _fun00013 }
 64:
                    entity = {};
                    _fun00014_ip = 86; continue _fun00013;
 68:
                    zulu = {};
                    tango = _closure1_slot10;
                    tango = tango[report];
                    zulu[report] = tango;
                    entity = zulu;
 86:
                    _closure1_slot10 = entity;
                    entity = undefined;
                    return entity;
 94:
                    entity = false;
                    return entity;
 98:
                    entity = {};
                    _closure1_slot10 = entity;
                    entity = true;
                    return entity;
                }
            };
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        report['value'] = entity;
        entity = new Array(12);
        entity[0] = report;
        report = {};
        golf = 'getActiveCommand';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            zulu = _closure1_slot13;
            mike = undefined;
            entity = argFoo;
            entity = zulu.bind(mike)(entity);
            entity = entity.activeCommand;
            return entity;
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'getActiveCommandSection';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            zulu = _closure1_slot13;
            mike = undefined;
            entity = argFoo;
            entity = zulu.bind(mike)(entity);
            entity = entity.activeCommandSection;
            return entity;
        };
        report['value'] = golf;
        entity[2] = report;
        report = {};
        golf = 'getActiveOptionName';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            zulu = _closure1_slot13;
            mike = undefined;
            entity = argFoo;
            entity = zulu.bind(mike)(entity);
            entity = entity.activeOptionName;
            return entity;
        };
        report['value'] = golf;
        entity[3] = report;
        report = {};
        golf = 'getActiveOption';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                mike = _closure1_slot13;
                oscar = undefined;
                entity = argFoo;
                entity = mike.bind(oscar)(entity);
                var _closure3_slot0 = entity;
                tango = entity.activeCommand;
                entity = null;
                report = entity == tango;
                mike = undefined;
                if(report) { _fun00016_ip = 69; continue _fun00015 }
 40:
                report = tango.options;
                tango = entity == report;
                mike = undefined;
                if(tango) { _fun00016_ip = 69; continue _fun00015 }
 54:
                tango = report.find;
                zulu = function(argFoo) {
                    entity = argFoo;
                    mike = entity.name;
                    entity = _closure3_slot0;
                    entity = entity.activeOptionName;
                    entity = mike === entity;
                    return entity;
                };
                mike = tango.bind(report)(zulu);
 69:
                zulu = entity != mike;
                entity = null;
                if(!zulu) { _fun00016_ip = 81; continue _fun00015 }
 78:
                entity = mike;
 81:
                return entity;
            }
        };
        report['value'] = golf;
        entity[4] = report;
        report = {};
        golf = 'getPreferredCommandId';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            zulu = _closure1_slot13;
            mike = undefined;
            entity = argFoo;
            entity = zulu.bind(mike)(entity);
            entity = entity.preferredCommandId;
            return entity;
        };
        report['value'] = golf;
        entity[5] = report;
        report = {};
        golf = 'getOptionStates';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            zulu = _closure1_slot13;
            mike = undefined;
            entity = argFoo;
            entity = zulu.bind(mike)(entity);
            entity = entity.optionStates;
            return entity;
        };
        report['value'] = golf;
        entity[6] = report;
        report = {};
        golf = 'getOptionState';
        report['key'] = golf;
        golf = function(argFoo, argBar) { // Original name: value
            zulu = _closure1_slot13;
            mike = undefined;
            entity = argFoo;
            entity = zulu.bind(mike)(entity);
            mike = entity.optionStates;
            entity = argBar;
            entity = mike[entity];
            return entity;
        };
        report['value'] = golf;
        entity[7] = report;
        report = {};
        golf = 'getCommandOrigin';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            zulu = _closure1_slot13;
            mike = undefined;
            entity = argFoo;
            entity = zulu.bind(mike)(entity);
            entity = entity.commandOrigin;
            return entity;
        };
        report['value'] = golf;
        entity[8] = report;
        report = {};
        golf = 'getSource';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            zulu = _closure1_slot13;
            mike = undefined;
            entity = argFoo;
            entity = zulu.bind(mike)(entity);
            entity = entity.source;
            return entity;
        };
        report['value'] = golf;
        entity[9] = report;
        report = {};
        golf = 'getOption';
        report['key'] = golf;
        golf = function(argFoo, argBar) { // Original name: value
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                entity = argBar;
                var _closure3_slot0 = entity;
                zulu = _closure1_slot13;
                report = undefined;
                entity = argFoo;
                entity = zulu.bind(report)(entity);
                tango = entity.activeCommand;
                zulu = null;
                oscar = zulu == tango;
                entity = undefined;
                if(oscar) { _fun00018_ip = 72; continue _fun00017 }
 43:
                tango = tango.options;
                zulu = zulu == tango;
                entity = undefined;
                if(zulu) { _fun00018_ip = 72; continue _fun00017 }
 57:
                zulu = tango.find;
                mike = function(argFoo) {
                    entity = argFoo;
                    mike = entity.name;
                    entity = _closure3_slot0;
                    entity = mike === entity;
                    return entity;
                };
                entity = zulu.bind(tango)(mike);
 72:
                return entity;
            }
        };
        report['value'] = golf;
        entity[10] = report;
        report = {};
        golf = 'getState';
        report['key'] = golf;
        oscar = function(argFoo) { // Original name: value
            entity = {};
            tango = _closure1_slot13;
            zulu = undefined;
            mike = argFoo;
            report = tango.bind(zulu)(mike);
            oscar = entity;
            mike = copyDataProperties(oscar, report);
            return entity;
        };
        report['value'] = oscar;
        entity[11] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    options = mike.bind(entity)(options);
    mike = 'ApplicationCommandStore';
    options['displayName'] = mike;
    mike = 10;
    mike = oscar[mike];
    sizing = golf.bind(entity)(mike);
    mike = {};
    mike['CONNECTION_OPEN'] = romeo;
    mike['CHANNEL_SELECT'] = romeo;
    mike['LOGOUT'] = romeo;
    mike['APPLICATION_COMMAND_SET_ACTIVE_COMMAND'] = yankee;
    mike['APPLICATION_COMMAND_SET_PREFERRED_COMMAND'] = offset;
    mike['APPLICATION_COMMAND_UPDATE_OPTIONS'] = verify;
    tango = function(argFoo) { // Original name: handleUpdateChannelState
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            entity = argFoo;
            golf = entity.channelId;
            options = entity.preferredCommandId;
            verify = entity.command;
            report = entity.section;
            tango = entity.location;
            oscar = entity.changedOptionStates;
            mike = _closure1_slot14;
            entity = {};
            offset = 'APPLICATION_COMMAND_SET_ACTIVE_COMMAND';
            entity['type'] = offset;
            entity['channelId'] = golf;
            entity['command'] = verify;
            entity['section'] = report;
            entity['location'] = tango;
            report = undefined;
            entity = mike.bind(report)(entity);
            tango = _closure1_slot15;
            mike = {};
            verify = 'APPLICATION_COMMAND_SET_PREFERRED_COMMAND';
            mike['type'] = verify;
            mike['channelId'] = golf;
            mike['commandId'] = options;
            mike = tango.bind(report)(mike);
            tango = _closure1_slot16;
            zulu = {};
            options = 'APPLICATION_COMMAND_UPDATE_OPTIONS';
            zulu['type'] = options;
            zulu['channelId'] = golf;
            zulu['changedOptionStates'] = oscar;
            zulu = tango.bind(report)(zulu);
            if(entity) { _fun00020_ip = 143; continue _fun00019 }
 140:
            entity = mike;
 143:
            if(entity) { _fun00020_ip = 148; continue _fun00019 }
 146:
            entity = true;
 148:
            return entity;
        }
    };
    mike['APPLICATION_COMMAND_UPDATE_CHANNEL_STATE'] = tango;
    tango = options.prototype;
    tango = Object.create(tango, {constructor: {value: options}});
    output = tango;
    kilo = mike;
    mike = new output[options](sizing, kilo, backup);
    mike = mike instanceof Object ? mike : tango;
    tango = 11;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/application_commands/ApplicationCommandStore.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();