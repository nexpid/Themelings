// app/modules/application_commands/ApplicationCommandQueryApi.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun71027: for(var _fun71027_ip = 0; ; ) switch(_fun71027_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun71027_ip = 46; continue _fun71027 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun71027_ip = 55; continue _fun71027 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun71027_ip = 345; continue _fun71027 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun71027_ip = 323; continue _fun71027 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun71027_ip = 283; continue _fun71027 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun71027_ip = 270; continue _fun71027 }
 110:
            golf = {};
            verify = golf.toString;
            golf = verify.call;
            yankee = golf.bind(verify)(zulu);
            offset = yankee.slice;
            verify = 8;
            golf = -1;
            verify = offset.bind(yankee)(verify, golf);
            golf = 'Object';
            golf = golf === verify;
            if(!golf) { _fun71027_ip = 163; continue _fun71027 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun71027_ip = 179; continue _fun71027 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun71027_ip = 249; continue _fun71027 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun71027_ip = 249; continue _fun71027 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun71027_ip = 234; continue _fun71027 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun71027_ip = 247; continue _fun71027 }
 234:
            verify = _closure1_slot14;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun71027_ip = 265; continue _fun71027;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun71027_ip = 283; continue _fun71027;
 270:
            golf = _closure1_slot14;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun71027_ip = 323; continue _fun71027 }
 289:
            golf = report.TypeError;
            report = golf.prototype;
            oscar = Object.create(report, {constructor: {value: golf}});
            foxtrot = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            backup = oscar;
            report = new backup[golf](foxtrot, romeo);
            report = report instanceof Object ? report : oscar;
            throw report;
 323:
            if(!tango) { _fun71027_ip = 330; continue _fun71027 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun71028: for(var _fun71028_ip = 0; ; ) switch(_fun71028_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun71028_ip = 56; continue _fun71028 }
 20:
                    entity = {};
                    mike = false;
                    entity['done'] = mike;
                    zulu = _closure2_slot0;
                    mike = _closure2_slot1;
                    mike = parseFloat(mike);
                    tango = mike + 1;
                    _closure2_slot1 = tango;
                    mike = zulu[mike];
                    entity['value'] = mike;
                    _fun71028_ip = 67; continue _fun71028;
 56:
                    mike = {};
                    zulu = true;
                    mike['done'] = zulu;
                    entity = mike;
 67:
                    return entity;
                }
            };
            return entity;
 345:
            entity = mike.call;
            zulu = entity.bind(mike)(zulu);
            mike = zulu.next;
            entity = mike.bind;
            entity = entity.bind(mike)(zulu);
            return entity;
        }
    };
    var _closure1_slot13 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun71029: for(var _fun71029_ip = 0; ; ) switch(_fun71029_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun71029_ip = 23; continue _fun71029 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun71029_ip = 33; continue _fun71029 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun71029_ip = 70; continue _fun71029 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun71029_ip = 55; continue _fun71029 }
 70:
            return entity;
        }
    };
    var _closure1_slot14 = entity;
    entity = function(argFoo, argBar) { // Original name: findCommandInSection
        _fun71030: for(var _fun71030_ip = 0; ; ) switch(_fun71030_ip) {
 0:
            entity = argFoo;
            mike = argBar;
            var _closure2_slot0 = mike;
            golf = null;
            if(!(golf == mike)) { _fun71030_ip = 22; continue _fun71030 }
 18:
            tango = undefined;
            return tango;
 22:
            tango = entity.commands;
            tango = tango[mike];
            if(!(golf == tango)) { _fun71030_ip = 197; continue _fun71030 }
 39:
            tango = global;
            oscar = tango.Object;
            report = oscar.values;
            tango = entity.commands;
            report = report.bind(oscar)(tango);
            tango = report.find;
            zulu = function(argFoo) {
                _fun71031: for(var _fun71031_ip = 0; ; ) switch(_fun71031_ip) {
 0:
                    entity = argFoo;
                    entity = entity.rootCommand;
                    mike = null;
                    zulu = mike == entity;
                    mike = undefined;
                    if(zulu) { _fun71031_ip = 25; continue _fun71031 }
 20:
                    mike = entity.id;
 25:
                    entity = _closure2_slot0;
                    entity = mike === entity;
                    return entity;
                }
            };
            zulu = tango.bind(report)(zulu);
            tango = golf == zulu;
            options = undefined;
            verify = undefined;
            if(tango) { _fun71030_ip = 97; continue _fun71030 }
 91:
            verify = zulu.rootCommand;
 97:
            tango = golf != verify;
            zulu = undefined;
            if(!tango) { _fun71030_ip = 195; continue _fun71030 }
 106:
            report = _closure1_slot0;
            oscar = _closure1_slot1;
            tango = 6;
            tango = oscar[tango];
            oscar = report.bind(options)(tango);
            report = oscar.buildCommand;
            tango = {};
            tango['rootCommand'] = verify;
            tango['command'] = verify;
            verify = entity.descriptor;
            verify = verify.application;
            offset = golf == verify;
            options = undefined;
            if(offset) { _fun71030_ip = 172; continue _fun71030 }
 167:
            options = verify.id;
 172:
            verify = golf != options;
            golf = '';
            if(!verify) { _fun71030_ip = 186; continue _fun71030 }
 183:
            golf = options;
 186:
            tango['applicationId'] = golf;
            zulu = report.bind(oscar)(tango);
 195:
            return zulu;
 197:
            entity = entity.commands;
            entity = entity[mike];
            return entity;
        }
    };
    var _closure1_slot15 = entity;
    entity = function(argFoo, argBar) { // Original name: createPlaceholderCommands
        _fun71032: for(var _fun71032_ip = 0; ; ) switch(_fun71032_ip) {
 0:
            oscar = argFoo;
            report = argBar;
            entity = new Array(0);
            tango = 0;
            golf = tango < oscar;
            mike = undefined;
            if(!golf) { _fun71032_ip = 51; continue _fun71032 }
 24:
            options = entity.push;
            golf = _closure1_slot17;
            golf = golf.bind(mike)(tango, report);
            golf = options.bind(entity)(golf);
            tango = tango + 1;
            if(tango < oscar) { _fun71032_ip = 24; continue _fun71032 }
 51:
            return entity;
        }
    };
    var _closure1_slot16 = entity;
    entity = function(argFoo, argBar) { // Original name: createPlaceholderCommand
        entity = {'type': null, 'inputType': null, 'id': null, 'untranslatedName': '', 'displayName': '', 'untranslatedDescription': '', 'displayDescription': '', 'applicationId': ''};
        mike = argBar;
        entity['type'] = mike;
        report = _closure1_slot0;
        tango = _closure1_slot1;
        zulu = 11;
        tango = tango[zulu];
        zulu = undefined;
        zulu = report.bind(zulu)(tango);
        zulu = zulu.ApplicationCommandInputType;
        zulu = zulu.PLACEHOLDER;
        entity['inputType'] = zulu;
        zulu = global;
        zulu = zulu.HermesInternal;
        report = zulu.concat;
        tango = 'placeholder-';
        zulu = argFoo;
        zulu = report.bind(tango)(zulu);
        entity['id'] = zulu;
        mike = _closure1_slot12;
        entity['section'] = mike;
        return entity;
    };
    var _closure1_slot17 = entity;
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
    var _closure1_slot2 = tango;
    tango = 1;
    options = oscar[tango];
    tango = argCorge;
    tango = tango.bind(entity)(options);
    var _closure1_slot3 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 3;
    options = oscar[tango];
    options = report.bind(entity)(options);
    verify = options.useContextIndexState;
    var _closure1_slot5 = verify;
    verify = options.useDiscoveryState;
    var _closure1_slot6 = verify;
    verify = options.useQueryState;
    var _closure1_slot7 = verify;
    options = options.useUserIndexState;
    var _closure1_slot8 = options;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot9 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.BuiltInSectionId;
    var _closure1_slot10 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.NOOP;
    var _closure1_slot11 = tango;
    tango = {'id': 'placeholder-section', 'type': null, 'name': ''};
    golf = 11;
    golf = oscar[golf];
    golf = report.bind(entity)(golf);
    golf = golf.ApplicationCommandSectionType;
    golf = golf.APPLICATION;
    tango['type'] = golf;
    var _closure1_slot12 = tango;
    tango = 12;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/application_commands/ApplicationCommandQueryApi.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo, argBar, argBaz) { // Original name: getCachedCommand
        _fun71034: for(var _fun71034_ip = 0; ; ) switch(_fun71034_ip) {
 0:
            tango = argBar;
            oscar = argBaz;
            var _closure2_slot0 = oscar;
            report = null;
            if(!(report != tango)) { _fun71034_ip = 308; continue _fun71034 }
 21:
            verify = _closure1_slot9;
            mike = verify.getUserState;
            mike = mike.bind(verify)();
            options = verify.getContextState;
            golf = argFoo;
            golf = options.bind(verify)(golf);
            offset = global;
            yankee = offset.Object;
            verify = yankee.values;
            romeo = mike.result;
            foxtrot = report == romeo;
            mike = undefined;
            options = undefined;
            if(foxtrot) { _fun71034_ip = 88; continue _fun71034 }
 82:
            options = romeo.sections;
 88:
            if(!(report == options)) { _fun71034_ip = 94; continue _fun71034 }
 92:
            options = {};
 94:
            verify = verify.bind(yankee)(options);
            options = verify.concat;
            yankee = offset.Object;
            offset = yankee.values;
            romeo = golf.result;
            foxtrot = report == romeo;
            golf = undefined;
            if(foxtrot) { _fun71034_ip = 136; continue _fun71034 }
 130:
            golf = romeo.sections;
 136:
            if(!(report == golf)) { _fun71034_ip = 142; continue _fun71034 }
 140:
            golf = {};
 142:
            golf = offset.bind(yankee)(golf);
            golf = options.bind(verify)(golf);
            if(!(report == oscar)) { _fun71034_ip = 240; continue _fun71034 }
 156:
            oscar = _closure1_slot13;
            yankee = oscar.bind(mike)(golf);
            options = yankee.bind(mike)();
            oscar = options.done;
            offset = options;
            if(oscar) { _fun71034_ip = 261; continue _fun71034 }
 180:
            verify = offset.value;
            oscar = _closure1_slot15;
            options = oscar.bind(mike)(verify, tango);
            if(!(report == options)) { _fun71034_ip = 216; continue _fun71034 }
 199:
            romeo = yankee.bind(mike)();
            oscar = romeo.done;
            offset = romeo;
            if(oscar) { _fun71034_ip = 261; continue _fun71034 }
 214:
            _fun71034_ip = 180; continue _fun71034;
 216:
            oscar = {};
            verify = verify.descriptor;
            verify = verify.application;
            oscar['application'] = verify;
            oscar['command'] = options;
            return oscar;
 240:
            oscar = golf.find;
            zulu = function(argFoo) {
                _fun71035: for(var _fun71035_ip = 0; ; ) switch(_fun71035_ip) {
 0:
                    entity = argFoo;
                    entity = entity.descriptor;
                    entity = entity.application;
                    mike = null;
                    zulu = mike == entity;
                    mike = undefined;
                    if(zulu) { _fun71035_ip = 30; continue _fun71035 }
 25:
                    mike = entity.id;
 30:
                    entity = _closure2_slot0;
                    entity = mike === entity;
                    return entity;
                }
            };
            zulu = oscar.bind(golf)(zulu);
            if(!(report == zulu)) { _fun71034_ip = 274; continue _fun71034 }
 261:
            report = {};
            report['application'] = mike;
            report['command'] = mike;
            return report;
 274:
            entity = _closure1_slot15;
            mike = entity.bind(mike)(zulu, tango);
            entity = {};
            zulu = zulu.descriptor;
            zulu = zulu.application;
            entity['application'] = zulu;
            entity['command'] = mike;
            return entity;
 308:
            entity = {};
            mike = undefined;
            entity['application'] = mike;
            entity['command'] = mike;
            return entity;
        }
    };
    zulu['getCachedCommand'] = tango;
    tango = function(argFoo, argBar, argBaz) { // Original name: getCachedApplicationSection
        _fun71036: for(var _fun71036_ip = 0; ; ) switch(_fun71036_ip) {
 0:
            oscar = argBaz;
            zulu = _closure1_slot9;
            entity = zulu.getUserState;
            entity = entity.bind(zulu)();
            tango = zulu.getContextState;
            mike = argFoo;
            report = tango.bind(zulu)(mike);
            mike = zulu.getApplicationState;
            tango = mike.bind(zulu)(oscar);
            golf = entity.result;
            zulu = null;
            options = zulu == golf;
            mike = undefined;
            if(options) { _fun71036_ip = 81; continue _fun71036 }
 62:
            golf = golf.sections;
            options = zulu == golf;
            mike = undefined;
            if(options) { _fun71036_ip = 81; continue _fun71036 }
 77:
            mike = golf[oscar];
 81:
            if(!(zulu == mike)) { _fun71036_ip = 122; continue _fun71036 }
 85:
            golf = report.result;
            options = zulu == golf;
            report = undefined;
            if(options) { _fun71036_ip = 119; continue _fun71036 }
 100:
            golf = golf.sections;
            options = zulu == golf;
            report = undefined;
            if(options) { _fun71036_ip = 119; continue _fun71036 }
 115:
            report = golf[oscar];
 119:
            mike = report;
 122:
            if(!(zulu == mike)) { _fun71036_ip = 163; continue _fun71036 }
 126:
            report = tango.result;
            golf = zulu == report;
            tango = undefined;
            if(golf) { _fun71036_ip = 160; continue _fun71036 }
 141:
            report = report.sections;
            golf = zulu == report;
            tango = undefined;
            if(golf) { _fun71036_ip = 160; continue _fun71036 }
 156:
            tango = report[oscar];
 160:
            mike = tango;
 163:
            zulu = zulu == mike;
            entity = undefined;
            if(zulu) { _fun71036_ip = 178; continue _fun71036 }
 172:
            entity = mike.descriptor;
 178:
            return entity;
        }
    };
    zulu['getCachedApplicationSection'] = tango;
    tango = function(argFoo, argBar, argBaz) { // Original name: getCachedResults
        report = _closure1_slot9;
        tango = report.query;
        zulu = {};
        mike = new Array(1);
        oscar = argBar;
        mike[0] = oscar;
        zulu['commandTypes'] = mike;
        mike = argBaz;
        zulu['text'] = mike;
        mike = {};
        golf = _closure1_slot0;
        oscar = _closure1_slot1;
        entity = 7;
        oscar = oscar[entity];
        entity = undefined;
        entity = golf.bind(entity)(oscar);
        entity = entity.ScoreMethod;
        entity = entity.COMMAND_OR_APPLICATION;
        mike['scoreMethod'] = entity;
        entity = false;
        mike['allowFetch'] = entity;
        entity = argFoo;
        mike = tango.bind(report)(entity, zulu, mike);
        entity = {};
        zulu = mike.commands;
        entity['commands'] = zulu;
        mike = mike.descriptors;
        entity['sections'] = mike;
        return entity;
    };
    zulu['getCachedResults'] = tango;
    tango = function(argFoo) { // Original name: getChangeKeys
        _fun71038: for(var _fun71038_ip = 0; ; ) switch(_fun71038_ip) {
 0:
            tango = _closure1_slot9;
            entity = tango.getUserState;
            entity = entity.bind(tango)();
            zulu = tango.getContextState;
            mike = argFoo;
            zulu = zulu.bind(tango)(mike);
            tango = null;
            oscar = tango == entity;
            report = undefined;
            if(oscar) { _fun71038_ip = 48; continue _fun71038 }
 42:
            report = entity.result;
 48:
            entity = new Array(2);
            entity[0] = report;
            tango = tango == zulu;
            mike = undefined;
            if(tango) { _fun71038_ip = 71; continue _fun71038 }
 65:
            mike = zulu.result;
 71:
            entity[1] = mike;
            return entity;
        }
    };
    zulu['getChangeKeys'] = tango;
    tango = function(argFoo, argBar, argBaz) { // Original name: useCachedResults
        oscar = argBar;
        var _closure2_slot0 = oscar;
        report = _closure1_slot3;
        tango = report.useMemo;
        zulu = new Array(1);
        zulu[0] = oscar;
        entity = function() {
            mike = _closure2_slot0;
            entity = new Array(1);
            entity[0] = mike;
            return entity;
        };
        entity = tango.bind(report)(entity, zulu);
        report = _closure1_slot7;
        tango = {};
        tango['commandTypes'] = entity;
        entity = argBaz;
        tango['text'] = entity;
        zulu = {};
        entity = false;
        zulu['allowFetch'] = entity;
        mike = undefined;
        entity = argFoo;
        mike = report.bind(mike)(entity, tango, zulu);
        entity = {};
        zulu = mike.commands;
        entity['commands'] = zulu;
        mike = mike.descriptors;
        entity['sections'] = mike;
        return entity;
    };
    zulu['useCachedResults'] = tango;
    tango = function(argFoo) { // Original name: useDiscovery
        _fun71041: for(var _fun71041_ip = 0; ; ) switch(_fun71041_ip) {
 0:
            tango = argFoo;
            options = tango.context;
            zulu = tango.filters;
            var _closure2_slot0 = zulu;
            mike = tango.options;
            var _closure2_slot1 = mike;
            offset = tango.allowFetch;
            romeo = undefined;
            var _closure2_slot2 = romeo;
            var _closure2_slot3 = romeo;
            var _closure2_slot4 = romeo;
            var _closure2_slot5 = romeo;
            var _closure2_slot6 = romeo;
            var _closure2_slot7 = romeo;
            var _closure2_slot8 = romeo;
            var _closure2_slot9 = romeo;
            oscar = options.type;
            yankee = null;
            report = 'channel';
            tango = null;
            if(!(report === oscar)) { _fun71041_ip = 96; continue _fun71041 }
 86:
            report = options.channel;
            tango = report.guild_id;
 96:
            _closure2_slot2 = tango;
            golf = _closure1_slot0;
            verify = _closure1_slot1;
            oscar = 8;
            oscar = verify[oscar];
            foxtrot = golf.bind(romeo)(oscar);
            verify = foxtrot.useStateFromStores;
            oscar = _closure1_slot4;
            golf = new Array(1);
            golf[0] = oscar;
            oscar = new Array(1);
            oscar[0] = tango;
            tango = function() {
                zulu = _closure1_slot4;
                mike = zulu.getGuild;
                entity = _closure2_slot2;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            golf = verify.bind(foxtrot)(golf, tango, oscar);
            oscar = _closure1_slot6;
            tango = {};
            output = tango;
            sizing = mike;
            verify = copyDataProperties(output, sizing);
            verify = 'allowFetch';
            tango[verify] = offset;
            result = undefined;
            output = options;
            sizing = golf;
            kilo = zulu;
            backup = tango;
            tango = result[oscar](output, sizing, kilo, backup, foxtrot);
            verify = tango.descriptors;
            _closure2_slot3 = verify;
            offset = tango.commands;
            _closure2_slot4 = offset;
            golf = tango.sectionedCommands;
            _closure2_slot5 = golf;
            oscar = tango.loading;
            _closure2_slot6 = oscar;
            tango = _closure1_slot3;
            options = tango.useState;
            yankee = options.bind(tango)(yankee);
            options = _closure1_slot2;
            report = 2;
            yankee = options.bind(romeo)(yankee, report);
            report = 0;
            options = yankee[report];
            _closure2_slot7 = options;
            report = 1;
            report = yankee[report];
            _closure2_slot8 = report;
            report = tango.useMemo;
            yankee = zulu.commandTypes;
            zulu = new Array(2);
            zulu[0] = yankee;
            mike = mike.placeholderCount;
            zulu[1] = mike;
            mike = function() {
                _fun71043: for(var _fun71043_ip = 0; ; ) switch(_fun71043_ip) {
 0:
                    tango = _closure1_slot16;
                    mike = _closure2_slot1;
                    report = mike.placeholderCount;
                    mike = null;
                    oscar = mike != report;
                    mike = 0;
                    zulu = 0;
                    if(!oscar) { _fun71043_ip = 36; continue _fun71043 }
 33:
                    zulu = report;
 36:
                    entity = _closure2_slot0;
                    entity = entity.commandTypes;
                    mike = entity[mike];
                    entity = undefined;
                    entity = tango.bind(entity)(zulu, mike);
                    return entity;
                }
            };
            report = report.bind(tango)(mike, zulu);
            _closure2_slot9 = report;
            zulu = tango.useMemo;
            mike = new Array(6);
            mike[0] = offset;
            mike[1] = verify;
            mike[2] = options;
            mike[3] = golf;
            mike[4] = oscar;
            mike[5] = report;
            entity = function() {
                _fun71044: for(var _fun71044_ip = 0; ; ) switch(_fun71044_ip) {
 0:
                    entity = {};
                    tango = _closure2_slot6;
                    entity['loading'] = tango;
                    tango = _closure2_slot4;
                    entity['commands'] = tango;
                    tango = _closure2_slot3;
                    entity['activeSections'] = tango;
                    tango = _closure2_slot5;
                    entity['commandsByActiveSection'] = tango;
                    tango = _closure2_slot7;
                    entity['filteredSectionId'] = tango;
                    tango = false;
                    entity['hasMoreAfter'] = tango;
                    tango = _closure2_slot6;
                    if(tango) { _fun71044_ip = 72; continue _fun71044 }
 66:
                    tango = new Array(0);
                    _fun71044_ip = 76; continue _fun71044;
 72:
                    tango = _closure2_slot9;
 76:
                    entity['placeholders'] = tango;
                    tango = _closure2_slot3;
                    entity['sectionDescriptors'] = tango;
                    tango = function(argFoo) { // Original name: filterSection
                        zulu = _closure2_slot8;
                        entity = undefined;
                        mike = argFoo;
                        mike = zulu.bind(entity)(mike);
                        return entity;
                    };
                    entity['filterSection'] = tango;
                    report = _closure1_slot11;
                    entity['scrollDown'] = report;
                    report = _closure2_slot7;
                    oscar = null;
                    if(!(oscar != report)) { _fun71044_ip = 204; continue _fun71044 }
 124:
                    golf = _closure2_slot5;
                    report = golf.find;
                    mike = function(argFoo) {
                        entity = argFoo;
                        entity = entity.section;
                        mike = entity.id;
                        entity = _closure2_slot7;
                        entity = mike === entity;
                        return entity;
                    };
                    golf = report.bind(golf)(mike);
                    if(!(oscar == golf)) { _fun71044_ip = 155; continue _fun71044 }
 149:
                    mike = new Array(0);
                    _fun71044_ip = 171; continue _fun71044;
 155:
                    options = golf.section;
                    report = new Array(1);
                    report[0] = options;
                    mike = report;
 171:
                    entity['activeSections'] = mike;
                    if(!(oscar == golf)) { _fun71044_ip = 187; continue _fun71044 }
 181:
                    mike = new Array(0);
                    _fun71044_ip = 198; continue _fun71044;
 187:
                    report = new Array(1);
                    report[0] = golf;
                    mike = report;
 198:
                    entity['commandsByActiveSection'] = mike;
 204:
                    mike = _closure2_slot6;
                    if(!mike) { _fun71044_ip = 433; continue _fun71044 }
 214:
                    mike = _closure2_slot5;
                    report = 0;
                    mike = mike[report];
                    if(!(oscar == mike)) { _fun71044_ip = 314; continue _fun71044 }
 228:
                    options = _closure1_slot0;
                    golf = _closure1_slot1;
                    oscar = 9;
                    golf = golf[oscar];
                    oscar = undefined;
                    oscar = options.bind(oscar)(golf);
                    oscar = oscar.BUILT_IN_SECTIONS;
                    tango = _closure1_slot10;
                    tango = tango.BUILT_IN;
                    tango = oscar[tango];
                    oscar = new Array(1);
                    oscar[0] = tango;
                    entity['activeSections'] = oscar;
                    oscar = {};
                    oscar['section'] = tango;
                    tango = _closure2_slot9;
                    oscar['data'] = tango;
                    tango = new Array(1);
                    tango[0] = oscar;
                    entity['commandsByActiveSection'] = tango;
                    _fun71044_ip = 399; continue _fun71044;
 314:
                    tango = {};
                    oscar = mike.section;
                    tango['section'] = oscar;
                    offset = mike.data;
                    mike = new Array(0);
                    yankee = mike;
                    verify = 0;
                    verify = arraySpread(yankee, offset, verify);
                    offset = _closure2_slot9;
                    yankee = mike;
                    oscar = arraySpread(yankee, offset, verify);
                    tango['data'] = mike;
                    mike = new Array(1);
                    mike[0] = tango;
                    golf = _closure2_slot5;
                    tango = golf.slice;
                    oscar = 1;
                    offset = tango.bind(golf)(oscar);
                    yankee = mike;
                    verify = oscar;
                    tango = arraySpread(yankee, offset, verify);
                    entity['commandsByActiveSection'] = mike;
 399:
                    offset = _closure2_slot4;
                    mike = new Array(0);
                    yankee = mike;
                    verify = 0;
                    verify = arraySpread(yankee, offset, verify);
                    offset = _closure2_slot9;
                    yankee = mike;
                    zulu = arraySpread(yankee, offset, verify);
                    entity['commands'] = mike;
 433:
                    return entity;
                }
            };
            entity = zulu.bind(tango)(entity, mike);
            return entity;
        }
    };
    zulu['useDiscovery'] = tango;
    tango = function(argFoo, argBar, argBaz) { // Original name: executeQuery
        _fun71047: for(var _fun71047_ip = 0; ; ) switch(_fun71047_ip) {
 0:
            entity = argBar;
            oscar = argBaz;
            report = _closure1_slot9;
            tango = report.query;
            mike = argFoo;
            mike = tango.bind(report)(mike, entity, oscar);
            golf = mike.descriptors;
            verify = mike.commands;
            tango = mike.loading;
            options = _closure1_slot16;
            report = 0;
            mike = 0;
            if(!tango) { _fun71047_ip = 77; continue _fun71047 }
 57:
            oscar = oscar.placeholderCount;
            offset = null;
            offset = offset != oscar;
            mike = 0;
            if(!offset) { _fun71047_ip = 77; continue _fun71047 }
 74:
            mike = oscar;
 77:
            entity = entity.commandTypes;
            entity = entity[report];
            oscar = undefined;
            offset = options.bind(oscar)(mike, entity);
            entity = {};
            mike = verify;
            if(!tango) { _fun71047_ip = 132; continue _fun71047 }
 103:
            options = new Array(0);
            foxtrot = options;
            romeo = verify;
            yankee = 0;
            yankee = arraySpread(foxtrot, romeo, yankee);
            foxtrot = options;
            romeo = offset;
            verify = arraySpread(foxtrot, romeo, yankee);
            mike = options;
 132:
            entity['commands'] = mike;
            mike = golf;
            if(!tango) { _fun71047_ip = 206; continue _fun71047 }
 143:
            tango = golf.length;
            mike = golf;
            if(!(report === tango)) { _fun71047_ip = 206; continue _fun71047 }
 155:
            report = _closure1_slot0;
            golf = _closure1_slot1;
            tango = 9;
            tango = golf[tango];
            tango = report.bind(oscar)(tango);
            tango = tango.BUILT_IN_SECTIONS;
            zulu = _closure1_slot10;
            zulu = zulu.BUILT_IN;
            tango = tango[zulu];
            zulu = new Array(1);
            zulu[0] = tango;
            mike = zulu;
 206:
            entity['sections'] = mike;
            return entity;
        }
    };
    zulu['executeQuery'] = tango;
    tango = function(argFoo, argBar, argBaz) { // Original name: useQuery
        zulu = argBar;
        mike = argBaz;
        var _closure2_slot0 = zulu;
        var _closure2_slot1 = mike;
        options = _closure1_slot7;
        golf = {};
        romeo = golf;
        yankee = mike;
        report = copyDataProperties(romeo, yankee);
        oscar = true;
        report = 'allowFetch';
        golf[report] = oscar;
        oscar = undefined;
        report = argFoo;
        report = options.bind(oscar)(report, zulu, golf);
        oscar = report.descriptors;
        var _closure2_slot2 = oscar;
        golf = report.commands;
        var _closure2_slot3 = golf;
        options = report.loading;
        var _closure2_slot4 = options;
        tango = _closure1_slot3;
        report = tango.useMemo;
        verify = zulu.commandTypes;
        zulu = new Array(2);
        zulu[0] = verify;
        mike = mike.placeholderCount;
        zulu[1] = mike;
        mike = function() {
            _fun71049: for(var _fun71049_ip = 0; ; ) switch(_fun71049_ip) {
 0:
                tango = _closure1_slot16;
                mike = _closure2_slot1;
                report = mike.placeholderCount;
                mike = null;
                oscar = mike != report;
                mike = 0;
                zulu = 0;
                if(!oscar) { _fun71049_ip = 36; continue _fun71049 }
 33:
                zulu = report;
 36:
                entity = _closure2_slot0;
                entity = entity.commandTypes;
                mike = entity[mike];
                entity = undefined;
                entity = tango.bind(entity)(zulu, mike);
                return entity;
            }
        };
        report = report.bind(tango)(mike, zulu);
        var _closure2_slot5 = report;
        zulu = tango.useMemo;
        mike = new Array(4);
        mike[0] = options;
        mike[1] = golf;
        mike[2] = oscar;
        mike[3] = report;
        entity = function() {
            _fun71050: for(var _fun71050_ip = 0; ; ) switch(_fun71050_ip) {
 0:
                entity = {};
                zulu = _closure2_slot4;
                oscar = _closure2_slot3;
                if(zulu) { _fun71050_ip = 21; continue _fun71050 }
 16:
                zulu = oscar;
                _fun71050_ip = 51; continue _fun71050;
 21:
                tango = new Array(0);
                golf = 0;
                verify = tango;
                options = oscar;
                golf = arraySpread(verify, options, golf);
                options = _closure2_slot5;
                verify = tango;
                report = arraySpread(verify, options, golf);
                zulu = tango;
 51:
                entity['commands'] = zulu;
                zulu = _closure2_slot4;
                if(!zulu) { _fun71050_ip = 78; continue _fun71050 }
 63:
                zulu = _closure2_slot2;
                tango = zulu.length;
                zulu = 0;
                if(!(zulu !== tango)) { _fun71050_ip = 84; continue _fun71050 }
 78:
                mike = _closure2_slot2;
                _fun71050_ip = 140; continue _fun71050;
 84:
                oscar = _closure1_slot0;
                report = _closure1_slot1;
                tango = 9;
                report = report[tango];
                tango = undefined;
                tango = oscar.bind(tango)(report);
                tango = tango.BUILT_IN_SECTIONS;
                zulu = _closure1_slot10;
                zulu = zulu.BUILT_IN;
                tango = tango[zulu];
                zulu = new Array(1);
                zulu[0] = tango;
                mike = zulu;
 140:
                entity['sections'] = mike;
                mike = _closure1_slot11;
                entity['scrollDown'] = mike;
                return entity;
            }
        };
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['useQuery'] = tango;
    tango = function(argFoo, argBar) { // Original name: useCommand
        report = argBar;
        var _closure2_slot0 = report;
        mike = _closure1_slot8;
        options = undefined;
        golf = true;
        oscar = mike.bind(options)(golf, golf);
        var _closure2_slot1 = oscar;
        tango = _closure1_slot5;
        mike = argFoo;
        mike = tango.bind(options)(mike, golf, golf);
        var _closure2_slot2 = mike;
        tango = _closure1_slot3;
        zulu = tango.useMemo;
        golf = mike.result;
        mike = new Array(3);
        mike[0] = golf;
        oscar = oscar.result;
        mike[1] = oscar;
        mike[2] = report;
        entity = function() {
            _fun71052: for(var _fun71052_ip = 0; ; ) switch(_fun71052_ip) {
 0:
                entity = _closure2_slot0;
                golf = null;
                if(!(golf != entity)) { _fun71052_ip = 215; continue _fun71052 }
 16:
                mike = _closure1_slot13;
                entity = global;
                report = entity.Object;
                tango = report.values;
                zulu = _closure2_slot1;
                verify = zulu.result;
                offset = golf == verify;
                oscar = undefined;
                zulu = undefined;
                if(offset) { _fun71052_ip = 63; continue _fun71052 }
 57:
                zulu = verify.sections;
 63:
                if(!(golf == zulu)) { _fun71052_ip = 69; continue _fun71052 }
 67:
                zulu = {};
 69:
                tango = tango.bind(report)(zulu);
                zulu = tango.concat;
                verify = entity.Object;
                report = verify.values;
                entity = _closure2_slot2;
                offset = entity.result;
                yankee = golf == offset;
                entity = undefined;
                if(yankee) { _fun71052_ip = 115; continue _fun71052 }
 109:
                entity = offset.sections;
 115:
                if(!(golf == entity)) { _fun71052_ip = 121; continue _fun71052 }
 119:
                entity = {};
 121:
                entity = report.bind(verify)(entity);
                entity = zulu.bind(tango)(entity);
                report = mike.bind(oscar)(entity);
                mike = report.bind(oscar)();
                entity = mike.done;
                tango = mike;
                if(entity) { _fun71052_ip = 215; continue _fun71052 }
 151:
                mike = tango.value;
                zulu = mike.commands;
                entity = _closure2_slot0;
                zulu = zulu[entity];
                if(!(golf == zulu)) { _fun71052_ip = 191; continue _fun71052 }
 174:
                verify = report.bind(oscar)();
                entity = verify.done;
                tango = verify;
                if(entity) { _fun71052_ip = 215; continue _fun71052 }
 189:
                _fun71052_ip = 151; continue _fun71052;
 191:
                entity = {};
                entity['command'] = zulu;
                mike = mike.descriptor;
                mike = mike.application;
                entity['application'] = mike;
                return entity;
 215:
                entity = {};
                mike = undefined;
                entity['command'] = mike;
                entity['application'] = mike;
                return entity;
            }
        };
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['useCommand'] = tango;
    mike = function(argFoo, argBar, argBaz) { // Original name: useCommandsForApplication
        _fun71053: for(var _fun71053_ip = 0; ; ) switch(_fun71053_ip) {
 0:
            oscar = argBar;
            report = argBaz;
            var _closure2_slot0 = oscar;
            var _closure2_slot1 = report;
            mike = _closure1_slot8;
            golf = undefined;
            verify = true;
            mike = mike.bind(golf)(verify, verify);
            var _closure2_slot2 = mike;
            options = _closure1_slot5;
            tango = argFoo;
            options = options.bind(golf)(tango, verify, verify);
            var _closure2_slot3 = options;
            tango = _closure1_slot3;
            zulu = tango.useMemo;
            verify = null;
            yankee = verify == mike;
            offset = undefined;
            if(yankee) { _fun71053_ip = 81; continue _fun71053 }
 75:
            offset = mike.result;
 81:
            mike = new Array(4);
            mike[0] = offset;
            verify = verify == options;
            golf = undefined;
            if(verify) { _fun71053_ip = 104; continue _fun71053 }
 98:
            golf = options.result;
 104:
            mike[1] = golf;
            mike[2] = oscar;
            mike[3] = report;
            entity = function() {
                _fun71054: for(var _fun71054_ip = 0; ; ) switch(_fun71054_ip) {
 0:
                    entity = _closure2_slot2;
                    entity = entity.result;
                    golf = null;
                    tango = golf == entity;
                    oscar = undefined;
                    report = undefined;
                    if(tango) { _fun71054_ip = 51; continue _fun71054 }
 28:
                    tango = entity.sections;
                    entity = golf == tango;
                    report = undefined;
                    if(entity) { _fun71054_ip = 51; continue _fun71054 }
 43:
                    entity = _closure2_slot0;
                    report = tango[entity];
 51:
                    if(!(golf == report)) { _fun71054_ip = 91; continue _fun71054 }
 55:
                    entity = _closure2_slot3;
                    tango = entity.result;
                    options = golf == tango;
                    entity = undefined;
                    if(options) { _fun71054_ip = 88; continue _fun71054 }
 74:
                    options = tango.sections;
                    tango = _closure2_slot0;
                    entity = options[tango];
 88:
                    report = entity;
 91:
                    entity = global;
                    options = entity.Object;
                    tango = options.values;
                    verify = golf == report;
                    entity = undefined;
                    if(verify) { _fun71054_ip = 119; continue _fun71054 }
 113:
                    entity = report.commands;
 119:
                    if(!(golf == entity)) { _fun71054_ip = 125; continue _fun71054 }
 123:
                    entity = {};
 125:
                    options = tango.bind(options)(entity);
                    tango = options.map;
                    entity = function(argFoo) {
                        _fun71055: for(var _fun71055_ip = 0; ; ) switch(_fun71055_ip) {
 0:
                            report = argFoo;
                            zulu = report.rootCommand;
                            mike = null;
                            entity = report;
                            if(!(mike != zulu)) { _fun71055_ip = 87; continue _fun71055 }
 18:
                            tango = _closure1_slot0;
                            zulu = _closure1_slot1;
                            mike = 6;
                            zulu = zulu[mike];
                            mike = undefined;
                            tango = tango.bind(mike)(zulu);
                            zulu = tango.buildCommand;
                            mike = {};
                            oscar = report.rootCommand;
                            mike['rootCommand'] = oscar;
                            oscar = report.rootCommand;
                            mike['command'] = oscar;
                            report = report.applicationId;
                            mike['applicationId'] = report;
                            entity = zulu.bind(tango)(mike);
 87:
                            return entity;
                        }
                    };
                    verify = tango.bind(options)(entity);
                    options = verify.reduce;
                    tango = function(argFoo, argBar) {
                        entity = argFoo;
                        zulu = argBar;
                        mike = zulu.id;
                        entity[mike] = zulu;
                        return entity;
                    };
                    entity = {};
                    entity = options.bind(verify)(tango, entity);
                    var _closure3_slot0 = entity;
                    entity = {};
                    options = golf == report;
                    tango = undefined;
                    if(options) { _fun71054_ip = 203; continue _fun71054 }
 183:
                    report = report.descriptor;
                    golf = golf == report;
                    tango = undefined;
                    if(golf) { _fun71054_ip = 203; continue _fun71054 }
 198:
                    tango = report.application;
 203:
                    entity['application'] = tango;
                    tango = _closure2_slot1;
                    zulu = tango.map;
                    mike = function(argFoo) {
                        mike = _closure3_slot0;
                        entity = argFoo;
                        entity = mike[entity];
                        return entity;
                    };
                    tango = zulu.bind(tango)(mike);
                    zulu = tango.filter;
                    report = _closure1_slot0;
                    golf = _closure1_slot1;
                    mike = 10;
                    mike = golf[mike];
                    mike = report.bind(oscar)(mike);
                    mike = mike.isNotNullish;
                    mike = zulu.bind(tango)(mike);
                    entity['commands'] = mike;
                    return entity;
                }
            };
            entity = zulu.bind(tango)(entity, mike);
            return entity;
        }
    };
    zulu['useCommandsForApplication'] = mike;
    return entity;
})();