// app/modules/application_commands/native/ApplicationCommandManager.tsx
export default (function(argFoo, argBar, argBaz, argCorge, argGrault, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    entity = argCorge;
    var _closure1_slot2 = entity;
    var _closure1_slot3 = oscar;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun101010: for(var _fun101010_ip = 0; ; ) switch(_fun101010_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun101010_ip = 46; continue _fun101010 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun101010_ip = 55; continue _fun101010 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun101010_ip = 345; continue _fun101010 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun101010_ip = 323; continue _fun101010 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun101010_ip = 283; continue _fun101010 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun101010_ip = 270; continue _fun101010 }
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
            if(!golf) { _fun101010_ip = 163; continue _fun101010 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun101010_ip = 179; continue _fun101010 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun101010_ip = 249; continue _fun101010 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun101010_ip = 249; continue _fun101010 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun101010_ip = 234; continue _fun101010 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun101010_ip = 247; continue _fun101010 }
 234:
            verify = _closure1_slot19;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun101010_ip = 265; continue _fun101010;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun101010_ip = 283; continue _fun101010;
 270:
            golf = _closure1_slot19;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun101010_ip = 323; continue _fun101010 }
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
            if(!tango) { _fun101010_ip = 330; continue _fun101010 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun101011: for(var _fun101011_ip = 0; ; ) switch(_fun101011_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun101011_ip = 56; continue _fun101011 }
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
                    _fun101011_ip = 67; continue _fun101011;
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
    var _closure1_slot18 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun101012: for(var _fun101012_ip = 0; ; ) switch(_fun101012_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun101012_ip = 23; continue _fun101012 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun101012_ip = 33; continue _fun101012 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun101012_ip = 70; continue _fun101012 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun101012_ip = 55; continue _fun101012 }
 70:
            return entity;
        }
    };
    var _closure1_slot19 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    verify = 0;
    tango = oscar[verify];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    options = 1;
    tango = oscar[options];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.DraftType;
    var _closure1_slot7 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot8 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot9 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.AnalyticEvents;
    var _closure1_slot10 = golf;
    golf = tango.AutoCompleteResultTypes;
    var _closure1_slot11 = golf;
    tango = tango.WHITESPACE_RE;
    var _closure1_slot12 = tango;
    tango = 7;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.COMMAND_SENTINEL;
    var _closure1_slot13 = tango;
    tango = 8;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.KeyboardTypes;
    var _closure1_slot14 = tango;
    tango = 9;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.MediaKeyboardTarget;
    var _closure1_slot15 = tango;
    tango = function(argFoo, argBar, argBaz) { // Original name: getNextOption
        _fun101013: for(var _fun101013_ip = 0; ; ) switch(_fun101013_ip) {
 0:
            mike = argBar;
            var _closure2_slot0 = mike;
            mike = argBaz;
            var _closure2_slot1 = mike;
            mike = argFoo;
            tango = mike.options;
            report = null;
            mike = report == tango;
            zulu = undefined;
            if(mike) { _fun101013_ip = 52; continue _fun101013 }
 35:
            mike = tango.filter;
            entity = function(argFoo) {
                _fun101014: for(var _fun101014_ip = 0; ; ) switch(_fun101014_ip) {
 0:
                    mike = argFoo;
                    entity = mike.required;
                    if(entity) { _fun101014_ip = 19; continue _fun101014 }
 12:
                    entity = _closure2_slot1;
 19:
                    if(!entity) { _fun101014_ip = 47; continue _fun101014 }
 22:
                    tango = _closure2_slot0;
                    zulu = tango.has;
                    mike = mike.name;
                    mike = zulu.bind(tango)(mike);
                    entity = !mike;
 47:
                    return entity;
                }
            };
            zulu = mike.bind(tango)(entity);
 52:
            mike = report != zulu;
            entity = null;
            if(!mike) { _fun101013_ip = 81; continue _fun101013 }
 61:
            tango = zulu.length;
            mike = 0;
            tango = tango > mike;
            entity = null;
            if(!tango) { _fun101013_ip = 81; continue _fun101013 }
 77:
            entity = zulu[mike];
 81:
            return entity;
        }
    };
    var _closure1_slot16 = tango;
    tango = {};
    tango['FULL_COMMAND'] = verify;
    golf = 'FULL_COMMAND';
    tango[verify] = golf;
    tango['PARTIAL_COMMAND'] = options;
    golf = 'PARTIAL_COMMAND';
    tango[options] = golf;
    var _closure1_slot17 = tango;
    mike = function() {
        tango = _closure1_slot6;
        zulu = function(argFoo) { // Original name: ApplicationCommandManager
            mike = argFoo;
            zulu = this;
            var _closure3_slot0 = zulu;
            var _closure3_slot1 = zulu;
            golf = _closure1_slot5;
            oscar = _closure2_slot0;
            entity = undefined;
            oscar = golf.bind(entity)(zulu, oscar);
            oscar = new Array(0);
            zulu['chatInputNodes'] = oscar;
            oscar = global;
            golf = oscar.Map;
            options = golf.prototype;
            options = Object.create(options, {constructor: {value: golf}});
            yankee = options;
            golf = new yankee[golf](offset);
            golf = golf instanceof Object ? golf : options;
            zulu['optionsToNodes'] = golf;
            oscar = oscar.Map;
            golf = oscar.prototype;
            golf = Object.create(golf, {constructor: {value: oscar}});
            yankee = golf;
            oscar = new yankee[oscar](offset);
            oscar = oscar instanceof Object ? oscar : golf;
            zulu['optionValueNodes'] = oscar;
            oscar = _closure1_slot1;
            golf = _closure1_slot3;
            report = 10;
            report = golf[report];
            report = oscar.bind(entity)(report);
            oscar = report.prototype;
            oscar = Object.create(oscar, {constructor: {value: report}});
            yankee = oscar;
            report = new yankee[report](offset);
            report = report instanceof Object ? report : oscar;
            zulu['parser'] = report;
            report = {};
            zulu['optionValues'] = report;
            report = {};
            zulu['optionValidationResults'] = report;
            report = true;
            zulu['canAutoInsertFirstOption'] = report;
            report = {};
            zulu['preferredOptionValues'] = report;
            report = function(argFoo, argBar, argBaz, argCorge) {
                _fun101017: for(var _fun101017_ip = 0; ; ) switch(_fun101017_ip) {
 0:
                    options = argFoo;
                    tango = argCorge;
                    entity = _closure3_slot0;
                    entity = entity.props;
                    report = entity.activeCommand;
                    oscar = _closure1_slot9;
                    zulu = oscar.getActiveOption;
                    oscar = zulu.bind(oscar)(options);
                    zulu = argBaz;
                    if(!zulu) { _fun101017_ip = 58; continue _fun101017 }
 48:
                    zulu = null;
                    if(!(zulu != report)) { _fun101017_ip = 58; continue _fun101017 }
 54:
                    if(!(zulu == oscar)) { _fun101017_ip = 163; continue _fun101017 }
 58:
                    report = tango.type;
                    zulu = _closure1_slot11;
                    zulu = zulu.SLASH;
                    if(!(report === zulu)) { _fun101017_ip = 159; continue _fun101017 }
 77:
                    golf = _closure3_slot0;
                    report = golf.setCommand;
                    zulu = {};
                    zulu['channelId'] = options;
                    options = tango.command;
                    zulu['command'] = options;
                    options = tango.section;
                    zulu['section'] = options;
                    options = tango.location;
                    zulu['location'] = options;
                    options = tango.visualSection;
                    zulu['visualSection'] = options;
                    options = tango.query;
                    zulu['query'] = options;
                    options = true;
                    zulu['addSpace'] = options;
                    zulu = report.bind(golf)(zulu);
                    _fun101017_ip = 343; continue _fun101017;
 159:
                    zulu = false;
                    return zulu;
 163:
                    report = tango.type;
                    zulu = _closure1_slot11;
                    zulu = zulu.USER;
                    if(!(zulu !== report)) { _fun101017_ip = 266; continue _fun101017 }
 182:
                    zulu = _closure1_slot11;
                    zulu = zulu.ROLE;
                    if(!(zulu !== report)) { _fun101017_ip = 241; continue _fun101017 }
 196:
                    entity = _closure1_slot11;
                    zulu = entity.CHANNEL;
                    entity = undefined;
                    if(!(zulu === report)) { _fun101017_ip = 295; continue _fun101017 }
 212:
                    zulu = {};
                    report = 'channelMention';
                    zulu['type'] = report;
                    report = tango.channel;
                    report = report.id;
                    zulu['channelId'] = report;
                    entity = zulu;
                    _fun101017_ip = 295; continue _fun101017;
 241:
                    zulu = {};
                    report = 'roleMention';
                    zulu['type'] = report;
                    report = tango.id;
                    zulu['roleId'] = report;
                    entity = zulu;
                    _fun101017_ip = 295; continue _fun101017;
 266:
                    zulu = {};
                    report = 'userMention';
                    zulu['type'] = report;
                    tango = tango.user;
                    tango = tango.id;
                    zulu['userId'] = tango;
                    entity = zulu;
 295:
                    report = _closure3_slot0;
                    tango = report.insertOrJumpCommandOption;
                    zulu = {};
                    mike = argBar;
                    zulu['displayText'] = mike;
                    mike = true;
                    zulu['preferred'] = mike;
                    zulu['value'] = entity;
                    yankee = undefined;
                    offset = false;
                    foxtrot = report;
                    romeo = oscar;
                    verify = zulu;
                    entity = foxtrot[tango](romeo, yankee, offset, verify, options);
 343:
                    entity = true;
                    return entity;
                }
            };
            zulu['setAutoCompleteResult'] = report;
            report = function(argFoo) {
                _fun101018: for(var _fun101018_ip = 0; ; ) switch(_fun101018_ip) {
 0:
                    entity = argFoo;
                    kilo = entity.channelId;
                    golf = entity.command;
                    backup = entity.section;
                    verify = entity.location;
                    romeo = entity.visualSection;
                    offset = entity.query;
                    yankee = entity.addSpace;
                    report = entity.commandText;
                    entity = _closure3_slot0;
                    entity = entity.ref;
                    zulu = entity.current;
                    entity = zulu.setText;
                    tango = null;
                    if(!(tango == report)) { _fun101018_ip = 122; continue _fun101018 }
 76:
                    sizing = _closure1_slot13;
                    foxtrot = golf.displayName;
                    oscar = global;
                    oscar = oscar.HermesInternal;
                    options = oscar.concat;
                    oscar = '';
                    options = options.bind(oscar)(sizing, foxtrot);
                    if(!yankee) { _fun101018_ip = 118; continue _fun101018 }
 114:
                    oscar = ' ';
 118:
                    report = options + oscar;
 122:
                    entity = entity.bind(zulu)(report);
                    yankee = _closure1_slot0;
                    foxtrot = _closure1_slot3;
                    entity = 11;
                    zulu = foxtrot[entity];
                    entity = undefined;
                    options = yankee.bind(entity)(zulu);
                    report = options.setActiveCommand;
                    zulu = {};
                    zulu['channelId'] = kilo;
                    zulu['command'] = golf;
                    zulu['section'] = backup;
                    zulu['location'] = verify;
                    verify = 12;
                    verify = foxtrot[verify];
                    yankee = yankee.bind(entity)(verify);
                    verify = yankee.getCommandTriggerSection;
                    verify = verify.bind(yankee)(romeo);
                    zulu['triggerSection'] = verify;
                    yankee = tango == offset;
                    verify = undefined;
                    if(yankee) { _fun101018_ip = 219; continue _fun101018 }
 214:
                    verify = offset.length;
 219:
                    zulu['queryLength'] = verify;
                    zulu = report.bind(options)(zulu);
                    report = golf.id;
                    zulu = _closure3_slot0;
                    options = tango == zulu;
                    zulu = undefined;
                    if(options) { _fun101018_ip = 271; continue _fun101018 }
 247:
                    options = _closure3_slot0;
                    options = options.preferredCommand;
                    verify = tango == options;
                    zulu = undefined;
                    if(verify) { _fun101018_ip = 271; continue _fun101018 }
 266:
                    zulu = options.id;
 271:
                    if(!(report !== zulu)) { _fun101018_ip = 336; continue _fun101018 }
 275:
                    zulu = _closure3_slot0;
                    if(!(tango != zulu)) { _fun101018_ip = 336; continue _fun101018 }
 283:
                    tango = _closure3_slot0;
                    zulu = tango.updateApplicationCommandManagerState;
                    mike = {};
                    report = {};
                    result = report;
                    output = golf;
                    golf = copyDataProperties(result, output);
                    oscar = _closure1_slot17;
                    golf = oscar.FULL_COMMAND;
                    oscar = 'preferredCommandType';
                    report[oscar] = golf;
                    mike['preferredCommand'] = report;
                    mike = zulu.bind(tango)(mike);
 336:
                    return entity;
                }
            };
            zulu['setCommand'] = report;
            report = function(argFoo, argBar, argBaz) {
                _fun101019: for(var _fun101019_ip = 0; ; ) switch(_fun101019_ip) {
 0:
                    options = argFoo;
                    golf = argBar;
                    entity = _closure3_slot0;
                    zulu = entity.ref;
                    report = zulu.current;
                    tango = report.setText;
                    offset = _closure1_slot13;
                    zulu = global;
                    zulu = zulu.HermesInternal;
                    verify = zulu.concat;
                    zulu = '';
                    zulu = verify.bind(zulu)(offset, golf);
                    zulu = tango.bind(report)(zulu);
                    tango = entity.preferredCommand;
                    entity = null;
                    report = entity == tango;
                    entity = undefined;
                    zulu = undefined;
                    if(report) { _fun101019_ip = 88; continue _fun101019 }
 83:
                    zulu = tango.id;
 88:
                    if(!(options !== zulu)) { _fun101019_ip = 151; continue _fun101019 }
 92:
                    tango = _closure3_slot0;
                    zulu = tango.updateApplicationCommandManagerState;
                    mike = {};
                    report = {};
                    report['id'] = options;
                    report['untranslatedName'] = golf;
                    report['displayName'] = golf;
                    oscar = _closure1_slot17;
                    oscar = oscar.PARTIAL_COMMAND;
                    report['preferredCommandType'] = oscar;
                    mike['preferredCommand'] = report;
                    report = argBaz;
                    mike['location'] = report;
                    mike = zulu.bind(tango)(mike);
 151:
                    return entity;
                }
            };
            zulu['setPartialCommand'] = report;
            report = function(argFoo, argBar) {
                _fun101020: for(var _fun101020_ip = 0; ; ) switch(_fun101020_ip) {
 0:
                    yankee = argBar;
                    golf = global;
                    tango = golf.JSON;
                    zulu = tango.parse;
                    entity = argFoo;
                    zulu = zulu.bind(tango)(entity);
                    report = _closure1_slot0;
                    verify = _closure1_slot3;
                    entity = 12;
                    tango = verify[entity];
                    entity = undefined;
                    report = report.bind(entity)(tango);
                    tango = report.extractInteractionDataProps;
                    tango = tango.bind(report)(zulu);
                    offset = tango.commandKey;
                    options = tango.interactionOptions;
                    report = _closure1_slot2;
                    tango = 13;
                    tango = verify[tango];
                    verify = report.bind(entity)(tango);
                    report = verify.getCachedCommand;
                    tango = {};
                    romeo = 'channel';
                    tango['type'] = romeo;
                    tango['channel'] = yankee;
                    report = report.bind(verify)(tango, offset);
                    tango = report.application;
                    report = report.command;
                    var _closure4_slot0 = report;
                    verify = null;
                    if(!(verify == report)) { _fun101020_ip = 205; continue _fun101020 }
 138:
                    backup = _closure3_slot0;
                    foxtrot = backup.setPartialCommand;
                    romeo = zulu.id;
                    offset = zulu.name;
                    kilo = _closure1_slot0;
                    sizing = _closure1_slot3;
                    zulu = 14;
                    zulu = sizing[zulu];
                    zulu = kilo.bind(entity)(zulu);
                    zulu = zulu.ApplicationCommandTriggerLocations;
                    zulu = zulu.PASTE;
                    zulu = foxtrot.bind(backup)(romeo, offset, zulu);
                    _fun101020_ip = 558; continue _fun101020;
 205:
                    zulu = verify != tango;
                    offset = null;
                    if(!zulu) { _fun101020_ip = 310; continue _fun101020 }
 214:
                    zulu = {};
                    foxtrot = _closure1_slot0;
                    backup = _closure1_slot3;
                    romeo = 14;
                    romeo = backup[romeo];
                    romeo = foxtrot.bind(entity)(romeo);
                    romeo = romeo.ApplicationCommandSectionType;
                    romeo = romeo.APPLICATION;
                    zulu['type'] = romeo;
                    romeo = tango.id;
                    zulu['id'] = romeo;
                    romeo = tango.icon;
                    zulu['icon'] = romeo;
                    foxtrot = tango.bot;
                    backup = verify == foxtrot;
                    romeo = undefined;
                    if(backup) { _fun101020_ip = 290; continue _fun101020 }
 285:
                    romeo = foxtrot.username;
 290:
                    if(!(verify == romeo)) { _fun101020_ip = 299; continue _fun101020 }
 294:
                    romeo = tango.name;
 299:
                    zulu['name'] = romeo;
                    zulu['application'] = tango;
                    offset = zulu;
 310:
                    tango = _closure1_slot0;
                    romeo = _closure1_slot3;
                    zulu = 15;
                    zulu = romeo[zulu];
                    tango = tango.bind(entity)(zulu);
                    zulu = tango.getInitialValuesFromInteractionOptions;
                    if(!(verify == options)) { _fun101020_ip = 344; continue _fun101020 }
 340:
                    options = new Array(0);
 344:
                    options = zulu.bind(tango)(report, options);
                    var _closure4_slot1 = options;
                    tango = golf.Object;
                    zulu = tango.keys;
                    options = zulu.bind(tango)(options);
                    tango = options.map;
                    zulu = function(argFoo) {
                        _fun101021: for(var _fun101021_ip = 0; ; ) switch(_fun101021_ip) {
 0:
                            oscar = argFoo;
                            var _closure5_slot0 = oscar;
                            entity = _closure4_slot0;
                            verify = entity.options;
                            entity = null;
                            golf = entity == verify;
                            mike = undefined;
                            if(golf) { _fun101021_ip = 49; continue _fun101021 }
 32:
                            options = verify.find;
                            golf = function(argFoo) {
                                entity = argFoo;
                                mike = entity.name;
                                entity = _closure5_slot0;
                                entity = mike === entity;
                                return entity;
                            };
                            mike = options.bind(verify)(golf);
 49:
                            report = _closure4_slot1;
                            report = report[oscar];
                            var _closure5_slot1 = report;
                            if(!(entity != mike)) { _fun101021_ip = 177; continue _fun101021 }
 65:
                            if(!(entity != report)) { _fun101021_ip = 177; continue _fun101021 }
 69:
                            golf = report.value;
                            report = entity == golf;
                            oscar = undefined;
                            if(report) { _fun101021_ip = 92; continue _fun101021 }
 83:
                            report = golf.toString;
                            oscar = report.bind(golf)();
 92:
                            report = mike.choices;
                            if(!(entity != report)) { _fun101021_ip = 142; continue _fun101021 }
 102:
                            golf = mike.choices;
                            report = golf.find;
                            tango = function(argFoo) {
                                entity = argFoo;
                                mike = entity.value;
                                entity = _closure5_slot1;
                                entity = entity.value;
                                entity = mike === entity;
                                return entity;
                            };
                            tango = report.bind(golf)(tango);
                            report = entity == tango;
                            zulu = undefined;
                            if(report) { _fun101021_ip = 139; continue _fun101021 }
 134:
                            zulu = tango.displayName;
 139:
                            oscar = zulu;
 142:
                            report = mike.displayName;
                            mike = global;
                            mike = mike.HermesInternal;
                            tango = mike.concat;
                            zulu = '';
                            mike = ':';
                            mike = tango.bind(zulu)(report, mike, oscar);
                            return mike;
 177:
                            return entity;
                        }
                    };
                    tango = tango.bind(options)(zulu);
                    zulu = tango.filter;
                    mike = function(argFoo) {
                        mike = null;
                        entity = argFoo;
                        entity = mike != entity;
                        return entity;
                    };
                    zulu = zulu.bind(tango)(mike);
                    mike = zulu.join;
                    verify = ' ';
                    options = mike.bind(zulu)(verify);
                    tango = _closure3_slot0;
                    zulu = tango.setCommand;
                    mike = {};
                    yankee = yankee.id;
                    mike['channelId'] = yankee;
                    mike['command'] = report;
                    mike['section'] = offset;
                    yankee = _closure1_slot0;
                    romeo = _closure1_slot3;
                    offset = 14;
                    offset = romeo[offset];
                    offset = yankee.bind(entity)(offset);
                    offset = offset.ApplicationCommandTriggerLocations;
                    offset = offset.PASTE;
                    mike['location'] = offset;
                    yankee = _closure1_slot13;
                    offset = report.displayName;
                    report = golf.HermesInternal;
                    oscar = report.concat;
                    report = '';
                    oscar = oscar.bind(report)(yankee, offset);
                    yankee = options.length;
                    offset = 0;
                    if(!(offset !== yankee)) { _fun101020_ip = 544; continue _fun101020 }
 528:
                    golf = golf.HermesInternal;
                    golf = golf.concat;
                    report = golf.bind(verify)(options);
 544:
                    report = oscar + report;
                    mike['commandText'] = report;
                    mike = zulu.bind(tango)(mike);
 558:
                    return entity;
                }
            };
            zulu['setPastedCommand'] = report;
            report = function(argFoo) {
                _fun101025: for(var _fun101025_ip = 0; ; ) switch(_fun101025_ip) {
 0:
                    entity = argFoo;
                    tango = entity.newState;
                    oscar = entity.preferredCommand;
                    report = entity.location;
                    zulu = _closure3_slot0;
                    mike = zulu.mergePropsAndUpdate;
                    entity = {};
                    options = null;
                    if(!(options == tango)) { _fun101025_ip = 52; continue _fun101025 }
 43:
                    golf = _closure3_slot0;
                    tango = golf.props;
 52:
                    offset = entity;
                    verify = tango;
                    tango = copyDataProperties(offset, verify);
                    tango = 'preferredCommand';
                    entity[tango] = oscar;
                    tango = 'location';
                    entity[tango] = report;
                    entity = mike.bind(zulu)(entity);
                    entity = undefined;
                    return entity;
                }
            };
            zulu['updateApplicationCommandManagerState'] = report;
            report = function() {
                mike = _closure3_slot0;
                verify = mike.parser;
                tango = verify.addRule;
                zulu = {'ruleId': 'commandOptionParserRuleId', 'type': null, 'matchFunction': null, 'style': null, 'deleteNodeOnBackspace': true, 'editDisabled': true};
                golf = _closure1_slot0;
                options = _closure1_slot3;
                oscar = 10;
                offset = options[oscar];
                entity = undefined;
                offset = golf.bind(entity)(offset);
                offset = offset.ChatInputNodeType;
                offset = offset.COMMAND_OPTION;
                zulu['type'] = offset;
                offset = function(argFoo, argBar) { // Original name: matchFunction
                    zulu = _closure1_slot0;
                    mike = _closure1_slot3;
                    entity = 16;
                    mike = mike[entity];
                    entity = undefined;
                    tango = zulu.bind(entity)(mike);
                    zulu = tango.getMatchedOptions;
                    mike = argFoo;
                    entity = argBar;
                    entity = zulu.bind(tango)(mike, entity);
                    return entity;
                };
                zulu['matchFunction'] = offset;
                offset = function() { // Original name: style
                    entity = _closure3_slot0;
                    mike = entity.styles;
                    entity = mike.commandOption;
                    entity = entity.bind(mike)();
                    return entity;
                };
                zulu['style'] = offset;
                zulu = tango.bind(verify)(zulu);
                verify = mike.parser;
                tango = verify.addRule;
                zulu = {};
                offset = 'commandOptionValueParserRuleId';
                zulu['ruleId'] = offset;
                offset = options[oscar];
                offset = golf.bind(entity)(offset);
                offset = offset.ChatInputNodeType;
                offset = offset.COMMAND_OPTION_WITH_VALUE;
                zulu['type'] = offset;
                offset = function(argFoo, argBar) { // Original name: matchFunction
                    zulu = _closure1_slot0;
                    mike = _closure1_slot3;
                    entity = 16;
                    mike = mike[entity];
                    entity = undefined;
                    tango = zulu.bind(entity)(mike);
                    zulu = tango.getMatchedOptionsWithValue;
                    mike = argFoo;
                    entity = argBar;
                    entity = zulu.bind(tango)(mike, entity);
                    return entity;
                };
                zulu['matchFunction'] = offset;
                offset = function() { // Original name: style
                    entity = _closure3_slot0;
                    mike = entity.styles;
                    entity = mike.commandOption;
                    entity = entity.bind(mike)();
                    return entity;
                };
                zulu['style'] = offset;
                offset = function(argFoo) { // Original name: editDisabled
                    _fun101031: for(var _fun101031_ip = 0; ; ) switch(_fun101031_ip) {
 0:
                        entity = argFoo;
                        entity = entity.data;
                        mike = null;
                        zulu = mike == entity;
                        tango = undefined;
                        mike = undefined;
                        if(zulu) { _fun101031_ip = 32; continue _fun101031 }
 21:
                        entity = entity.option;
                        mike = entity.type;
 32:
                        zulu = _closure1_slot0;
                        report = _closure1_slot3;
                        entity = 17;
                        entity = report[entity];
                        entity = zulu.bind(tango)(entity);
                        entity = entity.ApplicationCommandOptionType;
                        entity = entity.ATTACHMENT;
                        entity = mike === entity;
                        return entity;
                    }
                };
                zulu['editDisabled'] = offset;
                zulu = tango.bind(verify)(zulu);
                verify = mike.parser;
                tango = verify.addRule;
                zulu = {};
                offset = 'emojiHighlightRuleId';
                zulu['ruleId'] = offset;
                offset = options[oscar];
                offset = golf.bind(entity)(offset);
                offset = offset.ChatInputNodeType;
                offset = offset.EMOJI_HIGHLIGHT;
                zulu['type'] = offset;
                offset = function(argFoo) { // Original name: matchFunction
                    zulu = _closure1_slot0;
                    mike = _closure1_slot3;
                    entity = 16;
                    mike = mike[entity];
                    entity = undefined;
                    tango = zulu.bind(entity)(mike);
                    zulu = tango.getEmojiHighlightNodes;
                    entity = _closure3_slot0;
                    entity = entity.props;
                    mike = entity.channel;
                    entity = argFoo;
                    entity = zulu.bind(tango)(mike, entity);
                    return entity;
                };
                zulu['matchFunction'] = offset;
                offset = function() { // Original name: style
                    entity = _closure3_slot0;
                    mike = entity.styles;
                    entity = mike.autocomplete;
                    entity = entity.bind(mike)();
                    return entity;
                };
                zulu['style'] = offset;
                offset = function() { // Original name: editDisabled
                    entity = false;
                    return entity;
                };
                zulu['editDisabled'] = offset;
                zulu = tango.bind(verify)(zulu);
                verify = mike.parser;
                tango = verify.addRule;
                zulu = {};
                offset = 'roleHighlightRuleId';
                zulu['ruleId'] = offset;
                offset = options[oscar];
                offset = golf.bind(entity)(offset);
                offset = offset.ChatInputNodeType;
                offset = offset.ROLE_HIGHLIGHT;
                zulu['type'] = offset;
                offset = function(argFoo) { // Original name: matchFunction
                    zulu = _closure1_slot0;
                    mike = _closure1_slot3;
                    entity = 16;
                    mike = mike[entity];
                    entity = undefined;
                    tango = zulu.bind(entity)(mike);
                    zulu = tango.getRoleHighlightNodes;
                    entity = _closure3_slot0;
                    entity = entity.props;
                    mike = entity.channel;
                    entity = argFoo;
                    entity = zulu.bind(tango)(mike, entity);
                    return entity;
                };
                zulu['matchFunction'] = offset;
                offset = function(argFoo) { // Original name: style
                    _fun101036: for(var _fun101036_ip = 0; ; ) switch(_fun101036_ip) {
 0:
                        entity = argFoo;
                        entity = entity.data;
                        report = null;
                        mike = report == entity;
                        tango = undefined;
                        if(mike) { _fun101036_ip = 24; continue _fun101036 }
 19:
                        tango = entity.color;
 24:
                        entity = _closure3_slot0;
                        mike = entity.styles;
                        entity = mike.autocomplete;
                        report = report != tango;
                        zulu = undefined;
                        if(!report) { _fun101036_ip = 55; continue _fun101036 }
 52:
                        zulu = tango;
 55:
                        entity = entity.bind(mike)(zulu);
                        return entity;
                    }
                };
                zulu['style'] = offset;
                offset = function() { // Original name: editDisabled
                    entity = false;
                    return entity;
                };
                zulu['editDisabled'] = offset;
                zulu = tango.bind(verify)(zulu);
                verify = mike.parser;
                tango = verify.addRule;
                zulu = {};
                offset = 'userHighlightRuleId';
                zulu['ruleId'] = offset;
                offset = options[oscar];
                offset = golf.bind(entity)(offset);
                offset = offset.ChatInputNodeType;
                offset = offset.USER_HIGHLIGHT;
                zulu['type'] = offset;
                offset = function(argFoo) { // Original name: matchFunction
                    zulu = _closure1_slot0;
                    mike = _closure1_slot3;
                    entity = 16;
                    mike = mike[entity];
                    entity = undefined;
                    tango = zulu.bind(entity)(mike);
                    zulu = tango.getUsernameHighlightNodes;
                    entity = _closure3_slot0;
                    entity = entity.props;
                    mike = entity.channel;
                    entity = argFoo;
                    entity = zulu.bind(tango)(mike, entity);
                    return entity;
                };
                zulu['matchFunction'] = offset;
                offset = function() { // Original name: style
                    entity = _closure3_slot0;
                    mike = entity.styles;
                    entity = mike.autocomplete;
                    entity = entity.bind(mike)();
                    return entity;
                };
                zulu['style'] = offset;
                offset = function() { // Original name: editDisabled
                    entity = false;
                    return entity;
                };
                zulu['editDisabled'] = offset;
                zulu = tango.bind(verify)(zulu);
                verify = mike.parser;
                tango = verify.addRule;
                zulu = {};
                offset = 'channelHighlightRuleId';
                zulu['ruleId'] = offset;
                offset = options[oscar];
                offset = golf.bind(entity)(offset);
                offset = offset.ChatInputNodeType;
                offset = offset.CHANNEL_HIGHLIGHT;
                zulu['type'] = offset;
                offset = function(argFoo) { // Original name: matchFunction
                    zulu = _closure1_slot0;
                    mike = _closure1_slot3;
                    entity = 16;
                    mike = mike[entity];
                    entity = undefined;
                    tango = zulu.bind(entity)(mike);
                    zulu = tango.getChannelHighlightNodes;
                    entity = _closure3_slot0;
                    entity = entity.props;
                    mike = entity.channel;
                    entity = argFoo;
                    entity = zulu.bind(tango)(mike, entity);
                    return entity;
                };
                zulu['matchFunction'] = offset;
                offset = function() { // Original name: style
                    entity = _closure3_slot0;
                    mike = entity.styles;
                    entity = mike.autocomplete;
                    entity = entity.bind(mike)();
                    return entity;
                };
                zulu['style'] = offset;
                offset = function() { // Original name: editDisabled
                    entity = false;
                    return entity;
                };
                zulu['editDisabled'] = offset;
                zulu = tango.bind(verify)(zulu);
                tango = mike.parser;
                zulu = tango.addRule;
                mike = {};
                verify = 'silentHighlightRuleId';
                mike['ruleId'] = verify;
                oscar = options[oscar];
                oscar = golf.bind(entity)(oscar);
                oscar = oscar.ChatInputNodeType;
                oscar = oscar.SILENT_HIGHLIGHT;
                mike['type'] = oscar;
                oscar = function(argFoo) { // Original name: matchFunction
                    zulu = _closure1_slot0;
                    mike = _closure1_slot3;
                    entity = 16;
                    mike = mike[entity];
                    entity = undefined;
                    zulu = zulu.bind(entity)(mike);
                    mike = zulu.getSilentHighlightNodes;
                    entity = argFoo;
                    entity = mike.bind(zulu)(entity);
                    return entity;
                };
                mike['matchFunction'] = oscar;
                oscar = function() { // Original name: style
                    entity = _closure3_slot0;
                    mike = entity.styles;
                    entity = mike.autocomplete;
                    entity = entity.bind(mike)();
                    return entity;
                };
                mike['style'] = oscar;
                report = function() { // Original name: editDisabled
                    entity = false;
                    return entity;
                };
                mike['editDisabled'] = report;
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            zulu['addCommandOptionParserRules'] = report;
            report = function(argFoo, argBar, argBaz, argCorge) {
                _fun101047: for(var _fun101047_ip = 0; ; ) switch(_fun101047_ip) {
 0:
                    verify = argFoo;
                    tango = argBar;
                    zulu = argBaz;
                    var _closure4_slot0 = tango;
                    var _closure4_slot1 = zulu;
                    entity = _closure3_slot0;
                    entity = entity.props;
                    mike = entity.commandsDisabled;
                    entity = null;
                    if(!(entity != verify)) { _fun101047_ip = 659; continue _fun101047 }
 46:
                    if(mike) { _fun101047_ip = 659; continue _fun101047 }
 52:
                    oscar = verify.startsWith;
                    mike = _closure1_slot13;
                    mike = oscar.bind(verify)(mike);
                    if(!mike) { _fun101047_ip = 659; continue _fun101047 }
 76:
                    oscar = _closure1_slot0;
                    offset = _closure1_slot3;
                    mike = 16;
                    mike = offset[mike];
                    offset = undefined;
                    oscar = oscar.bind(offset)(mike);
                    mike = oscar.getTextBeforeFirstOption;
                    mike = mike.bind(oscar)(verify);
                    oscar = mike.match;
                    var _closure4_slot2 = oscar;
                    romeo = mike.text;
                    mike = entity != zulu;
                    oscar = false;
                    if(!mike) { _fun101047_ip = 247; continue _fun101047 }
 133:
                    foxtrot = romeo.startsWith;
                    sizing = _closure1_slot13;
                    backup = zulu.displayName;
                    mike = global;
                    yankee = mike.HermesInternal;
                    yankee = yankee.concat;
                    kilo = '';
                    yankee = yankee.bind(kilo)(sizing, backup);
                    yankee = foxtrot.bind(romeo)(yankee);
                    if(yankee) { _fun101047_ip = 222; continue _fun101047 }
 179:
                    yankee = romeo.startsWith;
                    backup = _closure1_slot13;
                    foxtrot = zulu.untranslatedName;
                    mike = mike.HermesInternal;
                    mike = mike.concat;
                    mike = mike.bind(kilo)(backup, foxtrot);
                    mike = yankee.bind(romeo)(mike);
                    oscar = false;
                    if(!mike) { _fun101047_ip = 247; continue _fun101047 }
 222:
                    verify = zulu.preferredCommandType;
                    mike = _closure1_slot17;
                    mike = mike.FULL_COMMAND;
                    oscar = true;
                    if(!(verify !== mike)) { _fun101047_ip = 643; continue _fun101047 }
 247:
                    mike = _closure3_slot0;
                    mike = mike.contextCommands;
                    if(!(entity != mike)) { _fun101047_ip = 641; continue _fun101047 }
 264:
                    verify = _closure1_slot0;
                    yankee = _closure1_slot3;
                    mike = 18;
                    mike = yankee[mike];
                    foxtrot = verify.bind(offset)(mike);
                    yankee = foxtrot.getCommandContext;
                    verify = {};
                    verify['channel'] = tango;
                    mike = 'channel';
                    verify['type'] = mike;
                    verify = yankee.bind(foxtrot)(verify);
                    var _closure4_slot3 = verify;
                    verify = entity == zulu;
                    yankee = undefined;
                    if(verify) { _fun101047_ip = 328; continue _fun101047 }
 322:
                    yankee = zulu.preferredCommandType;
 328:
                    verify = _closure1_slot17;
                    verify = verify.PARTIAL_COMMAND;
                    if(!(yankee !== verify)) { _fun101047_ip = 448; continue _fun101047 }
 342:
                    yankee = romeo.slice;
                    verify = 1;
                    foxtrot = yankee.bind(romeo)(verify);
                    romeo = foxtrot.split;
                    yankee = ' ';
                    verify = 3;
                    kilo = romeo.bind(foxtrot)(yankee, verify);
                    var _closure4_slot4 = kilo;
                    backup = function() { // Original name: _loop
                        _fun101049: for(var _fun101049_ip = 0; ; ) switch(_fun101049_ip) {
 0:
                            oscar = _closure4_slot4;
                            report = oscar.slice;
                            mike = _closure4_slot4;
                            zulu = mike.length;
                            mike = _closure4_slot5;
                            zulu = zulu - mike;
                            mike = 0;
                            oscar = report.bind(oscar)(mike, zulu);
                            report = oscar.join;
                            zulu = ' ';
                            foxtrot = report.bind(oscar)(zulu);
                            var _closure5_slot0 = foxtrot;
                            report = _closure1_slot0;
                            backup = _closure1_slot3;
                            zulu = 12;
                            zulu = backup[zulu];
                            options = undefined;
                            yankee = report.bind(options)(zulu);
                            offset = yankee.getMatchingGroupCommands;
                            zulu = _closure3_slot1;
                            verify = zulu.contextCommands;
                            zulu = global;
                            romeo = zulu.RegExp;
                            golf = _closure1_slot1;
                            report = 19;
                            report = backup[report];
                            golf = golf.bind(options)(report);
                            report = golf.escape;
                            golf = report.bind(golf)(foxtrot);
                            zulu = zulu.HermesInternal;
                            report = zulu.concat;
                            zulu = '^';
                            result = report.bind(zulu)(golf);
                            zulu = romeo.prototype;
                            report = Object.create(zulu, {constructor: {value: romeo}});
                            output = 'i';
                            echo = report;
                            zulu = new echo[romeo](result, output, sizing);
                            output = zulu instanceof Object ? zulu : report;
                            sizing = _closure4_slot3;
                            kilo = 2;
                            echo = yankee;
                            result = verify;
                            zulu = echo[offset](result, output, sizing, kilo, backup);
                            report = zulu.filter;
                            tango = function(argFoo) {
                                _fun101050: for(var _fun101050_ip = 0; ; ) switch(_fun101050_ip) {
 0:
                                    tango = argFoo;
                                    mike = tango.inputType;
                                    report = _closure1_slot0;
                                    zulu = _closure1_slot3;
                                    entity = 14;
                                    zulu = zulu[entity];
                                    entity = undefined;
                                    entity = report.bind(entity)(zulu);
                                    entity = entity.ApplicationCommandInputType;
                                    entity = entity.PLACEHOLDER;
                                    entity = mike !== entity;
                                    if(!entity) { _fun101050_ip = 89; continue _fun101050 }
 53:
                                    report = tango.displayName;
                                    mike = _closure5_slot0;
                                    mike = report === mike;
                                    if(mike) { _fun101050_ip = 86; continue _fun101050 }
 72:
                                    tango = tango.untranslatedName;
                                    zulu = _closure5_slot0;
                                    mike = tango === zulu;
 86:
                                    entity = mike;
 89:
                                    return entity;
                                }
                            };
                            tango = report.bind(zulu)(tango);
                            report = tango.length;
                            if(!(report > mike)) { _fun101049_ip = 263; continue _fun101049 }
 223:
                            golf = tango[mike];
                            tango = _closure4_slot5;
                            tango = tango > mike;
                            if(tango) { _fun101049_ip = 248; continue _fun101049 }
 238:
                            verify = _closure4_slot2;
                            report = null;
                            tango = report != verify;
 248:
                            report = zulu.length;
                            if(tango) { _fun101049_ip = 276; continue _fun101049 }
 256:
                            tango = 1;
                            if(!(tango !== report)) { _fun101049_ip = 276; continue _fun101049 }
 263:
                            zulu = zulu.length;
                            if(!(!(zulu > mike))) { _fun101049_ip = 274; continue _fun101049 }
 272:
                            return options;
 274:
                            return mike;
 276:
                            zulu = _closure1_slot2;
                            verify = _closure1_slot3;
                            mike = 13;
                            mike = verify[mike];
                            report = zulu.bind(options)(mike);
                            tango = report.getCachedApplicationSection;
                            zulu = {};
                            entity = _closure4_slot0;
                            zulu['channel'] = entity;
                            entity = 'channel';
                            zulu['type'] = entity;
                            mike = _closure1_slot0;
                            entity = 17;
                            entity = verify[entity];
                            entity = mike.bind(options)(entity);
                            entity = entity.ApplicationCommandType;
                            mike = entity.CHAT;
                            entity = golf.applicationId;
                            tango = tango.bind(report)(zulu, mike, entity);
                            zulu = null;
                            if(!(zulu != tango)) { _fun101049_ip = 416; continue _fun101049 }
 366:
                            entity = {};
                            mike = {};
                            report = {};
                            result = report;
                            output = golf;
                            golf = copyDataProperties(result, output);
                            oscar = _closure1_slot17;
                            golf = oscar.FULL_COMMAND;
                            oscar = 'preferredCommandType';
                            report[oscar] = golf;
                            mike['command'] = report;
                            mike['section'] = tango;
                            entity['v'] = mike;
                            _fun101049_ip = 425; continue _fun101049;
 416:
                            mike = {};
                            mike['v'] = zulu;
                            entity = mike;
 425:
                            return entity;
                        }
                    };
                    foxtrot = 0;
                    var _closure4_slot5 = foxtrot;
                    verify = kilo.length;
                    if(!(foxtrot < verify)) { _fun101047_ip = 479; continue _fun101047 }
 399:
                    yankee = backup.bind(offset)();
                    romeo = 0;
                    if(!(romeo !== yankee)) { _fun101047_ip = 479; continue _fun101047 }
 409:
                    verify = yankee;
                    if(verify) { _fun101047_ip = 441; continue _fun101047 }
 415:
                    romeo = romeo + 1;
                    _closure4_slot5 = romeo;
                    sizing = kilo.length;
                    if(!(romeo < sizing)) { _fun101047_ip = 479; continue _fun101047 }
 431:
                    yankee = backup.bind(offset)();
                    if(foxtrot !== yankee) { _fun101047_ip = 409; continue _fun101047 }
 439:
                    _fun101047_ip = 479; continue _fun101047;
 441:
                    verify = verify.v;
                    return verify;
 448:
                    options = _closure3_slot0;
                    verify = options.contextCommands;
                    options = verify.find;
                    report = function(argFoo) {
                        entity = argFoo;
                        mike = entity.id;
                        entity = _closure4_slot1;
                        entity = entity.id;
                        entity = mike === entity;
                        return entity;
                    };
                    options = options.bind(verify)(report);
                    if(!(entity == options)) { _fun101047_ip = 509; continue _fun101047 }
 479:
                    report = null;
                    if(!oscar) { _fun101047_ip = 507; continue _fun101047 }
 484:
                    oscar = entity != zulu;
                    report = null;
                    if(!oscar) { _fun101047_ip = 507; continue _fun101047 }
 493:
                    oscar = {};
                    oscar['command'] = zulu;
                    oscar['section'] = entity;
                    report = oscar;
 507:
                    return report;
 509:
                    oscar = _closure1_slot2;
                    yankee = _closure1_slot3;
                    report = 13;
                    report = yankee[report];
                    verify = oscar.bind(offset)(report);
                    oscar = verify.getCachedApplicationSection;
                    report = {};
                    report['channel'] = tango;
                    report['type'] = mike;
                    tango = _closure1_slot0;
                    mike = 17;
                    mike = yankee[mike];
                    mike = tango.bind(offset)(mike);
                    mike = mike.ApplicationCommandType;
                    tango = mike.CHAT;
                    mike = options.applicationId;
                    report = oscar.bind(verify)(report, tango, mike);
                    tango = entity == report;
                    mike = null;
                    if(tango) { _fun101047_ip = 639; continue _fun101047 }
 594:
                    tango = {};
                    oscar = {};
                    echo = oscar;
                    result = options;
                    options = copyDataProperties(echo, result);
                    golf = _closure1_slot17;
                    options = golf.FULL_COMMAND;
                    golf = 'preferredCommandType';
                    oscar[golf] = options;
                    tango['command'] = oscar;
                    tango['section'] = report;
                    mike = tango;
 639:
                    return mike;
 641:
                    return entity;
 643:
                    mike = {};
                    mike['command'] = zulu;
                    zulu = argCorge;
                    mike['section'] = zulu;
                    return mike;
 659:
                    return entity;
                }
            };
            zulu['getCurrentCommand'] = report;
            report = function(argFoo, argBar) {
                _fun101051: for(var _fun101051_ip = 0; ; ) switch(_fun101051_ip) {
 0:
                    tango = argBar;
                    var _closure4_slot0 = tango;
                    mike = argFoo;
                    if(mike) { _fun101051_ip = 19; continue _fun101051 }
 15:
                    mike = null;
                    return mike;
 19:
                    zulu = _closure1_slot1;
                    report = _closure1_slot3;
                    mike = 20;
                    mike = report[mike];
                    report = undefined;
                    golf = zulu.bind(report)(mike);
                    zulu = golf.findLast;
                    mike = global;
                    verify = mike.Array;
                    options = verify.from;
                    mike = _closure3_slot0;
                    offset = mike.optionValueNodes;
                    mike = offset.values;
                    mike = mike.bind(offset)();
                    mike = options.bind(verify)(mike);
                    entity = function(argFoo) {
                        entity = argFoo;
                        mike = entity.location;
                        entity = _closure4_slot0;
                        entity = mike <= entity;
                        return entity;
                    };
                    zulu = zulu.bind(golf)(mike, entity);
                    mike = null;
                    golf = mike == zulu;
                    entity = undefined;
                    if(golf) { _fun101051_ip = 134; continue _fun101051 }
 114:
                    golf = zulu.data;
                    options = mike == golf;
                    entity = undefined;
                    if(options) { _fun101051_ip = 134; continue _fun101051 }
 128:
                    entity = golf.option;
 134:
                    if(!(mike != zulu)) { _fun101051_ip = 225; continue _fun101051 }
 138:
                    if(!(mike != entity)) { _fun101051_ip = 225; continue _fun101051 }
 142:
                    oscar = _closure3_slot0;
                    golf = oscar.preferredOptionValues;
                    oscar = oscar.props;
                    oscar = oscar.channel;
                    oscar = oscar.id;
                    golf = golf[oscar];
                    oscar = mike == golf;
                    report = undefined;
                    if(oscar) { _fun101051_ip = 189; continue _fun101051 }
 180:
                    oscar = entity.name;
                    report = golf[oscar];
 189:
                    if(!(mike != report)) { _fun101051_ip = 227; continue _fun101051 }
 193:
                    oscar = report.displayText;
                    report = '';
                    if(!(report !== oscar)) { _fun101051_ip = 227; continue _fun101051 }
 207:
                    report = zulu.location;
                    zulu = zulu.length;
                    zulu = report + zulu;
                    if(!(!(zulu > tango))) { _fun101051_ip = 227; continue _fun101051 }
 225:
                    return mike;
 227:
                    return entity;
                }
            };
            zulu['getCurrentOption'] = report;
            report = function(argFoo, argBar) {
                _fun101053: for(var _fun101053_ip = 0; ; ) switch(_fun101053_ip) {
 0:
                    kilo = argBar;
                    entity = argFoo;
                    entity = entity.options;
                    backup = null;
                    if(!(backup != entity)) { _fun101053_ip = 370; continue _fun101053 }
 20:
                    entity = {};
                    zulu = _closure1_slot18;
                    mike = _closure3_slot0;
                    mike = mike.optionValueNodes;
                    yankee = undefined;
                    offset = zulu.bind(yankee)(mike);
                    zulu = offset.bind(yankee)();
                    mike = zulu.done;
                    verify = 1;
                    options = 10;
                    golf = 2;
                    oscar = 0;
                    report = zulu;
                    tango = undefined;
                    zulu = undefined;
                    if(mike) { _fun101053_ip = 368; continue _fun101053 }
 82:
                    sizing = report.value;
                    mike = _closure1_slot4;
                    mike = mike.bind(yankee)(sizing, golf);
                    result = mike[oscar];
                    output = mike[verify];
                    mike = output.data;
                    echo = backup == mike;
                    sizing = undefined;
                    if(echo) { _fun101053_ip = 124; continue _fun101053 }
 119:
                    sizing = mike.type;
 124:
                    echo = _closure1_slot0;
                    mike = _closure1_slot3;
                    mike = mike[options];
                    mike = echo.bind(yankee)(mike);
                    mike = mike.ChatInputParseResultDataType;
                    mike = mike.COMMAND_OPTION;
                    if(!(sizing === mike)) { _fun101053_ip = 350; continue _fun101053 }
 160:
                    mike = _closure3_slot0;
                    sizing = mike.preferredOptionValues;
                    mike = mike.props;
                    mike = mike.channel;
                    mike = mike.id;
                    echo = sizing[mike];
                    update = backup == echo;
                    sizing = echo;
                    mike = undefined;
                    if(update) { _fun101053_ip = 226; continue _fun101053 }
 201:
                    update = echo[result];
                    echo = backup == update;
                    sizing = update;
                    mike = undefined;
                    if(echo) { _fun101053_ip = 226; continue _fun101053 }
 217:
                    mike = update.optionValue;
                    sizing = update;
 226:
                    if(!(backup == mike)) { _fun101053_ip = 332; continue _fun101053 }
 230:
                    echo = output.data;
                    source = echo.option;
                    update = kilo.substring;
                    control = output.location;
                    echo = source.displayName;
                    echo = echo.length;
                    echo = control + echo;
                    echo = echo + verify;
                    control = output.location;
                    output = output.length;
                    output = control + output;
                    update = update.bind(kilo)(echo, output);
                    output = _closure3_slot0;
                    echo = output.optionValueParser;
                    output = echo.parse;
                    echo = output.bind(echo)(update, source);
                    output = new Array(1);
                    output[0] = echo;
                    entity[result] = output;
                    tango = sizing;
                    zulu = mike;
                    _fun101053_ip = 350; continue _fun101053;
 332:
                    output = new Array(1);
                    output[0] = mike;
                    entity[result] = output;
                    tango = sizing;
                    zulu = mike;
 350:
                    sizing = offset.bind(yankee)();
                    mike = sizing.done;
                    report = sizing;
                    if(!mike) { _fun101053_ip = 82; continue _fun101053 }
 368:
                    return entity;
 370:
                    entity = {};
                    return entity;
                }
            };
            zulu['getAllCommandOptionValues'] = report;
            report = function(argFoo, argBar, argBaz, argCorge, argGrault) {
                _fun101054: for(var _fun101054_ip = 0; ; ) switch(_fun101054_ip) {
 0:
                    tango = argFoo;
                    golf = argBar;
                    zulu = argBaz;
                    oscar = tango.startsWith;
                    verify = _closure1_slot13;
                    entity = global;
                    report = entity.HermesInternal;
                    options = report.concat;
                    report = '';
                    report = options.bind(report)(verify, zulu);
                    report = oscar.bind(tango)(report);
                    if(!report) { _fun101054_ip = 137; continue _fun101054 }
 53:
                    oscar = tango.length;
                    report = zulu.length;
                    verify = 1;
                    report = report + verify;
                    if(!(oscar > report)) { _fun101054_ip = 137; continue _fun101054 }
 74:
                    options = _closure1_slot12;
                    oscar = options.test;
                    report = zulu.length;
                    report = report + verify;
                    report = tango[report];
                    report = oscar.bind(options)(report);
                    if(!report) { _fun101054_ip = 137; continue _fun101054 }
 104:
                    report = argCorge;
                    if(report) { _fun101054_ip = 141; continue _fun101054 }
 110:
                    report = argGrault;
                    if(!report) { _fun101054_ip = 137; continue _fun101054 }
 116:
                    tango = tango.length;
                    report = zulu.length;
                    zulu = 2;
                    zulu = report + zulu;
                    if(!(!(tango > zulu))) { _fun101054_ip = 141; continue _fun101054 }
 137:
                    zulu = false;
                    return zulu;
 141:
                    tango = _closure1_slot16;
                    report = entity.Set;
                    entity = _closure3_slot0;
                    zulu = entity.optionValueNodes;
                    entity = zulu.keys;
                    backup = entity.bind(zulu)();
                    zulu = report.prototype;
                    zulu = Object.create(zulu, {constructor: {value: report}});
                    kilo = zulu;
                    entity = new kilo[report](backup, foxtrot);
                    zulu = entity instanceof Object ? entity : zulu;
                    oscar = undefined;
                    entity = true;
                    report = tango.bind(oscar)(golf, zulu, entity);
                    zulu = null;
                    if(!(zulu != report)) { _fun101054_ip = 254; continue _fun101054 }
 210:
                    tango = _closure3_slot0;
                    zulu = tango.insertOrJumpCommandOption;
                    mike = golf.displayName;
                    options = mike.length;
                    mike = 2;
                    foxtrot = options + mike;
                    kilo = tango;
                    backup = report;
                    romeo = true;
                    yankee = undefined;
                    offset = golf;
                    mike = kilo[zulu](backup, foxtrot, romeo, yankee, offset, verify);
 254:
                    return entity;
                }
            };
            zulu['insertFirstOptionIfValid'] = report;
            report = function(argFoo, argBar) {
                _fun101055: for(var _fun101055_ip = 0; ; ) switch(_fun101055_ip) {
 0:
                    mike = argFoo;
                    tango = argBar;
                    verify = arguments[2];
                    oscar = arguments[3];
                    kilo = arguments[4];
                    entity = undefined;
                    if(!(verify === entity)) { _fun101055_ip = 23; continue _fun101055 }
 21:
                    verify = false;
 23:
                    report = null;
                    if(!(report == kilo)) { _fun101055_ip = 47; continue _fun101055 }
 29:
                    zulu = _closure3_slot0;
                    zulu = zulu.props;
                    kilo = zulu.activeCommand;
 47:
                    if(!(report != kilo)) { _fun101055_ip = 1407; continue _fun101055 }
 54:
                    golf = _closure3_slot0;
                    options = golf.props;
                    yankee = options.text;
                    offset = options.selectionStart;
                    foxtrot = golf.optionValueNodes;
                    options = report == foxtrot;
                    golf = undefined;
                    if(options) { _fun101055_ip = 107; continue _fun101055 }
 92:
                    romeo = foxtrot.get;
                    options = mike.name;
                    golf = romeo.bind(foxtrot)(options);
 107:
                    romeo = report == oscar;
                    options = undefined;
                    if(romeo) { _fun101055_ip = 122; continue _fun101055 }
 116:
                    options = oscar.displayText;
 122:
                    if(!(report != options)) { _fun101055_ip = 960; continue _fun101055 }
 129:
                    if(!(report == golf)) { _fun101055_ip = 145; continue _fun101055 }
 133:
                    result = offset;
                    if(!(report != tango)) { _fun101055_ip = 143; continue _fun101055 }
 140:
                    result = tango;
 143:
                    _fun101055_ip = 150; continue _fun101055;
 145:
                    result = golf.location;
 150:
                    options = report != golf;
                    output = 0;
                    if(!options) { _fun101055_ip = 164; continue _fun101055 }
 159:
                    output = golf.length;
 164:
                    source = report != yankee;
                    if(!source) { _fun101055_ip = 180; continue _fun101055 }
 171:
                    options = yankee.length;
                    source = result <= options;
 180:
                    if(!source) { _fun101055_ip = 242; continue _fun101055 }
 183:
                    foxtrot = _closure1_slot12;
                    romeo = foxtrot.test;
                    options = global;
                    update = options.Math;
                    sizing = update.min;
                    control = 1;
                    backup = result - control;
                    options = yankee.length;
                    options = options - control;
                    options = sizing.bind(update)(backup, options);
                    options = yankee[options];
                    options = romeo.bind(foxtrot)(options);
                    source = !options;
 242:
                    options = global;
                    backup = options.Set;
                    romeo = _closure3_slot0;
                    foxtrot = romeo.optionValueNodes;
                    romeo = foxtrot.keys;
                    sierra = romeo.bind(foxtrot)();
                    foxtrot = backup.prototype;
                    foxtrot = Object.create(foxtrot, {constructor: {value: backup}});
                    lima = foxtrot;
                    romeo = new lima[backup](sierra, status);
                    foxtrot = romeo instanceof Object ? romeo : foxtrot;
                    backup = foxtrot.add;
                    romeo = mike.name;
                    romeo = backup.bind(foxtrot)(romeo);
                    romeo = _closure1_slot16;
                    romeo = romeo.bind(entity)(kilo, foxtrot);
                    foxtrot = report != oscar;
                    if(!foxtrot) { _fun101055_ip = 404; continue _fun101055 }
 324:
                    sizing = result + output;
                    kilo = yankee.length;
                    kilo = sizing !== kilo;
                    if(!kilo) { _fun101055_ip = 394; continue _fun101055 }
 340:
                    control = _closure1_slot12;
                    update = control.test;
                    config = options.Math;
                    sequence = config.min;
                    vacuum = result + output;
                    record = yankee.length;
                    sizing = 1;
                    sizing = record - sizing;
                    sizing = sequence.bind(config)(vacuum, sizing);
                    sizing = yankee[sizing];
                    sizing = update.bind(control)(sizing);
                    kilo = !sizing;
 394:
                    if(kilo) { _fun101055_ip = 401; continue _fun101055 }
 397:
                    kilo = report != romeo;
 401:
                    foxtrot = kilo;
 404:
                    sizing = report == oscar;
                    kilo = undefined;
                    if(sizing) { _fun101055_ip = 419; continue _fun101055 }
 413:
                    kilo = oscar.displayText;
 419:
                    sizing = '';
                    if(!(sizing === kilo)) { _fun101055_ip = 455; continue _fun101055 }
 427:
                    control = mike.displayName;
                    kilo = options.HermesInternal;
                    update = kilo.concat;
                    kilo = ':';
                    kilo = update.bind(sizing)(control, kilo);
                    _fun101055_ip = 488; continue _fun101055;
 455:
                    sequence = mike.displayName;
                    vacuum = oscar.displayText;
                    update = options.HermesInternal;
                    control = update.concat;
                    update = ':';
                    kilo = control.bind(sizing)(sequence, update, vacuum);
 488:
                    control = sizing;
                    if(!source) { _fun101055_ip = 498; continue _fun101055 }
 494:
                    control = ' ';
 498:
                    update = sizing;
                    if(!foxtrot) { _fun101055_ip = 508; continue _fun101055 }
 504:
                    update = ' ';
 508:
                    foxtrot = options.HermesInternal;
                    foxtrot = foxtrot.concat;
                    foxtrot = foxtrot.bind(sizing)(control, kilo, update);
                    if(!(report == romeo)) { _fun101055_ip = 689; continue _fun101055 }
 533:
                    sequence = _closure3_slot0;
                    update = sequence.ref;
                    vacuum = update.current;
                    control = vacuum.replaceRange;
                    update = {};
                    update['location'] = result;
                    update['length'] = output;
                    update['text'] = foxtrot;
                    config = {};
                    context = _closure1_slot0;
                    papa = _closure1_slot3;
                    record = 10;
                    record = papa[record];
                    record = context.bind(entity)(record);
                    record = record.ChatInputNodeType;
                    record = record.COMMAND_OPTION_WITH_VALUE;
                    config['type'] = record;
                    record = sequence.styles;
                    sequence = record.commandOption;
                    sequence = sequence.bind(record)();
                    config['style'] = sequence;
                    sequence = 0;
                    if(!source) { _fun101055_ip = 633; continue _fun101055 }
 630:
                    sequence = 1;
 633:
                    config['location'] = sequence;
                    sequence = kilo.length;
                    config['length'] = sequence;
                    sequence = new Array(1);
                    sequence[0] = config;
                    update['nodes'] = sequence;
                    update['keepCursorPosition'] = verify;
                    sequence = _closure3_slot0;
                    sequence = sequence.editId;
                    update['editId'] = sequence;
                    update = control.bind(vacuum)(update);
                    _fun101055_ip = 1344; continue _fun101055;
 689:
                    control = romeo.displayName;
                    romeo = options.HermesInternal;
                    update = romeo.concat;
                    romeo = ':';
                    romeo = update.bind(sizing)(control, romeo);
                    options = options.HermesInternal;
                    options = options.concat;
                    sizing = options.bind(sizing)(foxtrot, romeo);
                    options = {};
                    vacuum = _closure1_slot0;
                    control = _closure1_slot3;
                    update = 10;
                    control = control[update];
                    control = vacuum.bind(entity)(control);
                    control = control.ChatInputNodeType;
                    control = control.COMMAND_OPTION_WITH_VALUE;
                    options['type'] = control;
                    control = _closure3_slot0;
                    vacuum = control.styles;
                    control = vacuum.commandOption;
                    control = control.bind(vacuum)();
                    options['style'] = control;
                    echo = 0;
                    if(!source) { _fun101055_ip = 802; continue _fun101055 }
 799:
                    echo = 1;
 802:
                    options['location'] = echo;
                    kilo = kilo.length;
                    options['length'] = kilo;
                    kilo = new Array(2);
                    kilo[0] = options;
                    options = {};
                    echo = _closure1_slot0;
                    backup = _closure1_slot3;
                    backup = backup[update];
                    backup = echo.bind(entity)(backup);
                    backup = backup.ChatInputNodeType;
                    backup = backup.COMMAND_OPTION;
                    options['type'] = backup;
                    backup = _closure3_slot0;
                    update = backup.styles;
                    echo = update.commandOption;
                    echo = echo.bind(update)();
                    options['style'] = echo;
                    foxtrot = foxtrot.length;
                    options['location'] = foxtrot;
                    romeo = romeo.length;
                    options['length'] = romeo;
                    kilo[1] = options;
                    options = backup.ref;
                    foxtrot = options.current;
                    romeo = foxtrot.replaceRange;
                    options = {};
                    options['location'] = result;
                    options['length'] = output;
                    options['text'] = sizing;
                    options['nodes'] = kilo;
                    backup = backup.editId;
                    options['editId'] = backup;
                    options = romeo.bind(foxtrot)(options);
                    _fun101055_ip = 1344; continue _fun101055;
 960:
                    if(!(report != golf)) { _fun101055_ip = 1044; continue _fun101055 }
 964:
                    options = _closure3_slot0;
                    options = options.ref;
                    foxtrot = options.current;
                    romeo = foxtrot.setSelectedRange;
                    backup = golf.location;
                    options = mike.displayName;
                    options = options.length;
                    options = backup + options;
                    backup = 1;
                    options = options + backup;
                    kilo = golf.length;
                    golf = mike.displayName;
                    golf = golf.length;
                    golf = kilo - golf;
                    golf = golf - backup;
                    golf = romeo.bind(foxtrot)(options, golf);
                    _fun101055_ip = 1344; continue _fun101055;
 1044:
                    if(!(report != tango)) { _fun101055_ip = 1051; continue _fun101055 }
 1048:
                    offset = tango;
 1051:
                    romeo = report != yankee;
                    if(!romeo) { _fun101055_ip = 1067; continue _fun101055 }
 1058:
                    tango = yankee.length;
                    romeo = offset <= tango;
 1067:
                    if(!romeo) { _fun101055_ip = 1129; continue _fun101055 }
 1070:
                    options = _closure1_slot12;
                    golf = options.test;
                    tango = global;
                    kilo = tango.Math;
                    backup = kilo.min;
                    sizing = 1;
                    foxtrot = offset - sizing;
                    tango = yankee.length;
                    tango = tango - sizing;
                    tango = backup.bind(kilo)(foxtrot, tango);
                    tango = yankee[tango];
                    tango = golf.bind(options)(tango);
                    romeo = !tango;
 1129:
                    tango = _closure3_slot0;
                    tango = tango.ref;
                    options = tango.current;
                    golf = options.replaceRange;
                    tango = {};
                    tango['location'] = offset;
                    offset = 0;
                    tango['length'] = offset;
                    sizing = '';
                    kilo = sizing;
                    if(!romeo) { _fun101055_ip = 1175; continue _fun101055 }
 1171:
                    kilo = ' ';
 1175:
                    backup = mike.displayName;
                    yankee = global;
                    yankee = yankee.HermesInternal;
                    foxtrot = yankee.concat;
                    yankee = ':';
                    yankee = foxtrot.bind(sizing)(kilo, backup, yankee);
                    tango['text'] = yankee;
                    yankee = {};
                    backup = _closure1_slot0;
                    kilo = _closure1_slot3;
                    foxtrot = 10;
                    foxtrot = kilo[foxtrot];
                    foxtrot = backup.bind(entity)(foxtrot);
                    foxtrot = foxtrot.ChatInputNodeType;
                    foxtrot = foxtrot.COMMAND_OPTION;
                    yankee['type'] = foxtrot;
                    foxtrot = _closure3_slot0;
                    backup = foxtrot.styles;
                    foxtrot = backup.commandOption;
                    foxtrot = foxtrot.bind(backup)();
                    yankee['style'] = foxtrot;
                    offset = 0;
                    if(!romeo) { _fun101055_ip = 1281; continue _fun101055 }
 1278:
                    offset = 1;
 1281:
                    yankee['location'] = offset;
                    offset = mike.displayName;
                    romeo = offset.length;
                    offset = 1;
                    offset = romeo + offset;
                    yankee['length'] = offset;
                    offset = new Array(1);
                    offset[0] = yankee;
                    tango['nodes'] = offset;
                    tango['keepCursorPosition'] = verify;
                    verify = _closure3_slot0;
                    verify = verify.editId;
                    tango['editId'] = verify;
                    tango = golf.bind(options)(tango);
 1344:
                    tango = report != oscar;
                    if(!tango) { _fun101055_ip = 1357; continue _fun101055 }
 1351:
                    tango = oscar.preferred;
 1357:
                    if(!tango) { _fun101055_ip = 1407; continue _fun101055 }
 1360:
                    tango = _closure3_slot0;
                    if(!(report != tango)) { _fun101055_ip = 1407; continue _fun101055 }
 1368:
                    report = _closure3_slot0;
                    tango = report.setPreferredOptionValue;
                    zulu = report.props;
                    zulu = zulu.channel;
                    zulu = zulu.id;
                    mike = mike.name;
                    mike = tango.bind(report)(zulu, mike, oscar);
 1407:
                    return entity;
                }
            };
            zulu['insertOrJumpCommandOption'] = report;
            tango = function(argFoo, argBar, argBaz) {
                _fun101056: for(var _fun101056_ip = 0; ; ) switch(_fun101056_ip) {
 0:
                    report = argFoo;
                    oscar = argBar;
                    entity = _closure3_slot0;
                    entity = entity.props;
                    tango = entity.activeCommand;
                    offset = null;
                    if(!(offset == tango)) { _fun101056_ip = 381; continue _fun101056 }
 35:
                    zulu = _closure1_slot0;
                    entity = _closure1_slot3;
                    yankee = 25;
                    entity = entity[yankee];
                    romeo = undefined;
                    zulu = zulu.bind(romeo)(entity);
                    entity = zulu.getPrefix;
                    zulu = entity.bind(zulu)(report);
                    entity = _closure1_slot13;
                    options = null;
                    if(!(zulu === entity)) { _fun101056_ip = 109; continue _fun101056 }
 81:
                    zulu = _closure1_slot0;
                    entity = _closure1_slot3;
                    entity = entity[yankee];
                    zulu = zulu.bind(romeo)(entity);
                    entity = zulu.getQuery;
                    options = entity.bind(zulu)(report);
 109:
                    if(!(offset != options)) { _fun101056_ip = 264; continue _fun101056 }
 116:
                    zulu = _closure1_slot2;
                    backup = _closure1_slot3;
                    entity = 13;
                    entity = backup[entity];
                    yankee = zulu.bind(romeo)(entity);
                    report = yankee.getCachedResults;
                    zulu = {};
                    zulu['channel'] = oscar;
                    entity = 'channel';
                    zulu['type'] = entity;
                    foxtrot = _closure1_slot0;
                    entity = 17;
                    entity = backup[entity];
                    entity = foxtrot.bind(romeo)(entity);
                    entity = entity.ApplicationCommandType;
                    entity = entity.CHAT;
                    entity = report.bind(yankee)(zulu, entity, options);
                    zulu = entity.commands;
                    report = entity.sections;
                    if(!(offset != zulu)) { _fun101056_ip = 264; continue _fun101056 }
 207:
                    yankee = zulu.length;
                    entity = 0;
                    if(!(yankee > entity)) { _fun101056_ip = 264; continue _fun101056 }
 218:
                    yankee = zulu[entity];
                    backup = yankee.inputType;
                    kilo = _closure1_slot0;
                    yankee = _closure1_slot3;
                    foxtrot = 14;
                    yankee = yankee[foxtrot];
                    yankee = kilo.bind(romeo)(yankee);
                    yankee = yankee.ApplicationCommandInputType;
                    yankee = yankee.PLACEHOLDER;
                    if(!(backup === yankee)) { _fun101056_ip = 268; continue _fun101056 }
 264:
                    yankee = false;
                    return yankee;
 268:
                    yankee = zulu[entity];
                    var _closure4_slot1 = yankee;
                    zulu = report.find;
                    entity = function(argFoo) {
                        _fun101058: for(var _fun101058_ip = 0; ; ) switch(_fun101058_ip) {
 0:
                            entity = argFoo;
                            entity = entity.application;
                            mike = null;
                            zulu = mike == entity;
                            mike = undefined;
                            if(zulu) { _fun101058_ip = 24; continue _fun101058 }
 19:
                            mike = entity.id;
 24:
                            entity = _closure4_slot1;
                            entity = entity.applicationId;
                            entity = mike === entity;
                            return entity;
                        }
                    };
                    backup = zulu.bind(report)(entity);
                    report = _closure3_slot0;
                    zulu = report.setCommand;
                    entity = {};
                    kilo = oscar.id;
                    entity['channelId'] = kilo;
                    entity['command'] = yankee;
                    kilo = offset != backup;
                    yankee = null;
                    if(!kilo) { _fun101056_ip = 331; continue _fun101056 }
 328:
                    yankee = backup;
 331:
                    entity['section'] = yankee;
                    yankee = _closure1_slot0;
                    verify = _closure1_slot3;
                    verify = verify[foxtrot];
                    verify = yankee.bind(romeo)(verify);
                    verify = verify.ApplicationCommandTriggerLocations;
                    verify = verify.DISCOVERY;
                    entity['location'] = verify;
                    entity['query'] = options;
                    entity = zulu.bind(report)(entity);
                    entity = true;
                    return entity;
 381:
                    options = _closure1_slot0;
                    report = _closure1_slot3;
                    zulu = 21;
                    report = report[zulu];
                    zulu = undefined;
                    verify = options.bind(zulu)(report);
                    options = verify.getFirstInvalidOption;
                    report = _closure3_slot0;
                    report = report.optionValidationResults;
                    if(!(offset == report)) { _fun101056_ip = 428; continue _fun101056 }
 426:
                    report = {};
 428:
                    yankee = options.bind(verify)(tango, report);
                    verify = _closure1_slot9;
                    options = verify.getOptionStates;
                    report = oscar.id;
                    romeo = options.bind(verify)(report);
                    report = {};
                    var _closure4_slot0 = report;
                    options = global;
                    verify = options.Object;
                    options = verify.entries;
                    verify = options.bind(verify)(romeo);
                    options = verify.forEach;
                    golf = function(argFoo) {
                        _fun101057: for(var _fun101057_ip = 0; ; ) switch(_fun101057_ip) {
 0:
                            oscar = argFoo;
                            zulu = oscar[Symbol.iterator];
                            oscar = zulu().next;
                            mike = oscar().value;
                            tango = zulu;
                            entity = undefined;
                            report = tango === entity;
                            tango = undefined;
                            if(report) { _fun101057_ip = 27; continue _fun101057 }
 24:
                            tango = mike;
 27:
                            mike = undefined;
                            if(report) { _fun101057_ip = 57; continue _fun101057 }
 32:
                            golf = oscar().value;
                            oscar = zulu;
                            oscar = oscar === entity;
                            mike = undefined;
                            report = oscar;
                            if(oscar) { _fun101057_ip = 57; continue _fun101057 }
 51:
                            mike = golf;
                            report = oscar;
 57:
                            if(report) { _fun101057_ip = 63; continue _fun101057 }
 60:
                            zulu.return();
 63:
                            report = mike.optionValue;
                            zulu = null;
                            if(!(zulu != report)) { _fun101057_ip = 92; continue _fun101057 }
 75:
                            zulu = _closure4_slot0;
                            mike = mike.optionValue;
                            zulu[tango] = mike;
 92:
                            return entity;
                        }
                    };
                    golf = options.bind(verify)(golf);
                    if(!(offset != yankee)) { _fun101056_ip = 746; continue _fun101056 }
 503:
                    golf = _closure3_slot0;
                    mike = golf.insertOrJumpCommandOption;
                    mike = mike.bind(golf)(yankee);
                    mike = golf.updateValidationResults;
                    mike = mike.bind(golf)();
                    golf = _closure1_slot0;
                    options = _closure1_slot3;
                    mike = 23;
                    verify = options[mike];
                    romeo = golf.bind(zulu)(verify);
                    verify = romeo.triggerHapticFeedback;
                    mike = options[mike];
                    mike = golf.bind(zulu)(mike);
                    mike = mike.HapticFeedbackTypes;
                    mike = mike.NOTIFICATION_ERROR;
                    mike = verify.bind(romeo)(mike);
                    mike = 24;
                    mike = options[mike];
                    verify = golf.bind(zulu)(mike);
                    options = verify.trackWithMetadata;
                    mike = _closure1_slot10;
                    golf = mike.APPLICATION_COMMAND_VALIDATION_FAILED;
                    mike = {};
                    foxtrot = offset == tango;
                    romeo = undefined;
                    if(foxtrot) { _fun101056_ip = 626; continue _fun101056 }
 621:
                    romeo = tango.applicationId;
 626:
                    mike['application_id'] = romeo;
                    foxtrot = offset == tango;
                    romeo = undefined;
                    if(foxtrot) { _fun101056_ip = 660; continue _fun101056 }
 640:
                    foxtrot = tango.rootCommand;
                    backup = offset == foxtrot;
                    romeo = undefined;
                    if(backup) { _fun101056_ip = 660; continue _fun101056 }
 655:
                    romeo = foxtrot.id;
 660:
                    mike['command_id'] = romeo;
                    foxtrot = _closure1_slot0;
                    backup = _closure1_slot3;
                    romeo = 17;
                    romeo = backup[romeo];
                    romeo = foxtrot.bind(zulu)(romeo);
                    foxtrot = romeo.ApplicationCommandOptionType;
                    backup = yankee.type;
                    kilo = offset != backup;
                    romeo = 3;
                    if(!kilo) { _fun101056_ip = 709; continue _fun101056 }
 706:
                    romeo = backup;
 709:
                    romeo = foxtrot[romeo];
                    mike['argument_type'] = romeo;
                    romeo = offset == yankee;
                    offset = undefined;
                    if(romeo) { _fun101056_ip = 733; continue _fun101056 }
 727:
                    offset = yankee.required;
 733:
                    mike['is_required'] = offset;
                    mike = options.bind(verify)(golf, mike);
                    _fun101056_ip = 788; continue _fun101056;
 746:
                    mike = _closure1_slot0;
                    golf = _closure1_slot3;
                    entity = 22;
                    entity = golf[entity];
                    mike = mike.bind(zulu)(entity);
                    entity = mike.parseOptionValuesForSend;
                    mike = entity.bind(mike)(oscar, tango, report);
                    entity = argBaz;
                    entity = entity.bind(zulu)(tango, mike);
 788:
                    entity = true;
                    return entity;
                }
            };
            zulu['sendCommand'] = tango;
            tango = mike.props;
            zulu['props'] = tango;
            tango = mike.ref;
            zulu['ref'] = tango;
            tango = mike.optionValueParser;
            zulu['optionValueParser'] = tango;
            mike = mike.styles;
            zulu['styles'] = mike;
            mike = zulu.addCommandOptionParserRules;
            mike = mike.bind(zulu)();
            return entity;
        };
        var _closure2_slot0 = zulu;
        entity = {};
        mike = 'setPreferredOptionValue';
        entity['key'] = mike;
        mike = function(argFoo, argBar, argBaz) { // Original name: setPreferredOptionValue
            _fun101059: for(var _fun101059_ip = 0; ; ) switch(_fun101059_ip) {
 0:
                mike = argFoo;
                entity = this;
                zulu = entity.preferredOptionValues;
                tango = zulu[mike];
                zulu = null;
                if(!(zulu == tango)) { _fun101059_ip = 34; continue _fun101059 }
 22:
                tango = entity.preferredOptionValues;
                zulu = {};
                tango[mike] = zulu;
 34:
                entity = entity.preferredOptionValues;
                zulu = entity[mike];
                mike = argBaz;
                entity = argBar;
                zulu[entity] = mike;
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = mike;
        mike = new Array(3);
        mike[0] = entity;
        entity = {};
        oscar = 'mergePropsAndUpdate';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: mergePropsAndUpdate
            _fun101060: for(var _fun101060_ip = 0; ; ) switch(_fun101060_ip) {
 0:
                verify = argFoo;
                oscar = this;
                var _closure3_slot0 = oscar;
                var _closure3_slot1 = verify;
                entity = oscar.props;
                sizing = entity.text;
                report = entity.selectionStart;
                tango = entity.selectionEnd;
                mike = entity.focused;
                zulu = entity.queryCommands;
                offset = entity.editId;
                foxtrot = entity.channel;
                options = entity.lastCommandAutocompleteResponseNonce;
                entity = verify.editId;
                entity = offset !== entity;
                if(!entity) { _fun101060_ip = 92; continue _fun101060 }
 80:
                yankee = verify.editId;
                golf = null;
                entity = golf != yankee;
 92:
                if(!entity) { _fun101060_ip = 107; continue _fun101060 }
 95:
                entity = verify.editId;
                oscar['editId'] = entity;
 107:
                entity = verify.text;
                backup = sizing !== entity;
                var _closure3_slot2 = backup;
                entity = verify.selectionStart;
                result = report !== entity;
                if(result) { _fun101060_ip = 143; continue _fun101060 }
 133:
                entity = verify.selectionEnd;
                result = tango !== entity;
 143:
                entity = verify.focused;
                output = mike !== entity;
                romeo = oscar.activeCommand;
                mike = oscar.activeCommandSection;
                if(backup) { _fun101060_ip = 201; continue _fun101060 }
 168:
                entity = verify.queryCommands;
                if(!(zulu === entity)) { _fun101060_ip = 201; continue _fun101060 }
 178:
                zulu = verify.preferredCommand;
                entity = null;
                entity = entity != zulu;
                yankee = mike;
                zulu = false;
                if(!entity) { _fun101060_ip = 1157; continue _fun101060 }
 201:
                entity = verify.queryCommands;
                oscar['contextCommands'] = entity;
                report = oscar.preferredCommand;
                entity = verify.preferredCommand;
                context = null;
                if(!(context != entity)) { _fun101060_ip = 254; continue _fun101060 }
 231:
                entity = verify.preferredCommand;
                oscar['preferredCommand'] = entity;
                entity = verify.location;
                oscar['location'] = entity;
 254:
                tango = verify.commandsDisabled;
                entity = null;
                if(tango) { _fun101060_ip = 370; continue _fun101060 }
 265:
                if(backup) { _fun101060_ip = 332; continue _fun101060 }
 268:
                tango = oscar.preferredCommand;
                if(!(context != tango)) { _fun101060_ip = 332; continue _fun101060 }
 278:
                tango = oscar.preferredCommand;
                golf = tango.preferredCommandType;
                tango = _closure1_slot17;
                tango = tango.FULL_COMMAND;
                if(!(golf === tango)) { _fun101060_ip = 332; continue _fun101060 }
 307:
                tango = {};
                golf = oscar.preferredCommand;
                tango['command'] = golf;
                golf = oscar.preferredCommandSection;
                tango['section'] = golf;
                _fun101060_ip = 367; continue _fun101060;
 332:
                control = oscar.getCurrentCommand;
                variable41 = verify.text;
                variable40 = verify.channel;
                variable39 = oscar.preferredCommand;
                variable38 = oscar.preferredCommandSection;
                variable42 = oscar;
                tango = variable42[control](variable41, variable40, variable39, variable38, variable37);
 367:
                entity = tango;
 370:
                golf = context != entity;
                tango = null;
                if(!golf) { _fun101060_ip = 390; continue _fun101060 }
 379:
                tango = entity.command;
                mike = entity.section;
 390:
                entity = oscar.preferredCommand;
                echo = context == entity;
                source = undefined;
                golf = undefined;
                if(echo) { _fun101060_ip = 412; continue _fun101060 }
 407:
                golf = entity.id;
 412:
                echo = context == tango;
                entity = undefined;
                if(echo) { _fun101060_ip = 426; continue _fun101060 }
 421:
                entity = tango.id;
 426:
                if(!(golf === entity)) { _fun101060_ip = 511; continue _fun101060 }
 430:
                entity = oscar.preferredCommand;
                golf = context == entity;
                echo = undefined;
                if(golf) { _fun101060_ip = 451; continue _fun101060 }
 445:
                echo = entity.preferredCommandType;
 451:
                entity = _closure1_slot17;
                entity = entity.PARTIAL_COMMAND;
                entity = echo === entity;
                if(!entity) { _fun101060_ip = 500; continue _fun101060 }
 471:
                update = context == tango;
                echo = undefined;
                if(update) { _fun101060_ip = 486; continue _fun101060 }
 480:
                echo = tango.preferredCommandType;
 486:
                golf = _closure1_slot17;
                golf = golf.FULL_COMMAND;
                entity = echo === golf;
 500:
                if(!entity) { _fun101060_ip = 532; continue _fun101060 }
 503:
                oscar['preferredCommand'] = tango;
                _fun101060_ip = 532; continue _fun101060;
 511:
                if(!backup) { _fun101060_ip = 532; continue _fun101060 }
 514:
                oscar['preferredCommand'] = context;
                oscar['preferredCommandSection'] = context;
                oscar['location'] = source;
 532:
                entity = context == report;
                golf = undefined;
                if(entity) { _fun101060_ip = 546; continue _fun101060 }
 541:
                golf = report.id;
 546:
                echo = oscar.preferredCommand;
                update = context == echo;
                entity = undefined;
                if(update) { _fun101060_ip = 566; continue _fun101060 }
 561:
                entity = echo.id;
 566:
                entity = golf !== entity;
                if(entity) { _fun101060_ip = 613; continue _fun101060 }
 573:
                echo = context == report;
                golf = undefined;
                if(echo) { _fun101060_ip = 588; continue _fun101060 }
 582:
                golf = report.preferredCommandType;
 588:
                echo = oscar.preferredCommand;
                update = context == echo;
                report = undefined;
                if(update) { _fun101060_ip = 609; continue _fun101060 }
 603:
                report = echo.preferredCommandType;
 609:
                entity = golf !== report;
 613:
                golf = oscar.preferredOptionValues;
                report = foxtrot.id;
                echo = golf[report];
                if(!(context == echo)) { _fun101060_ip = 634; continue _fun101060 }
 632:
                echo = {};
 634:
                vacuum = oscar.parser;
                control = vacuum.parse;
                update = verify.text;
                golf = {};
                report = context == tango;
                record = undefined;
                if(report) { _fun101060_ip = 668; continue _fun101060 }
 662:
                record = tango.preferredCommandType;
 668:
                sequence = _closure1_slot17;
                config = sequence.FULL_COMMAND;
                sequence = null;
                if(!(record === config)) { _fun101060_ip = 690; continue _fun101060 }
 687:
                sequence = tango;
 690:
                golf['activeCommand'] = sequence;
                golf['preferredOptionValues'] = echo;
                golf = control.bind(vacuum)(update, golf);
                oscar['chatInputNodes'] = golf;
                update = oscar.optionsToNodes;
                golf = update.clear;
                golf = golf.bind(update)();
                update = oscar.optionValueNodes;
                golf = update.clear;
                golf = golf.bind(update)();
                control = oscar.chatInputNodes;
                update = control.forEach;
                golf = function(argFoo) {
                    _fun101061: for(var _fun101061_ip = 0; ; ) switch(_fun101061_ip) {
 0:
                        report = argFoo;
                        tango = report.type;
                        oscar = _closure1_slot0;
                        entity = _closure1_slot3;
                        golf = 10;
                        mike = entity[golf];
                        entity = undefined;
                        mike = oscar.bind(entity)(mike);
                        mike = mike.ChatInputNodeType;
                        mike = mike.COMMAND_OPTION;
                        if(!(tango === mike)) { _fun101061_ip = 106; continue _fun101061 }
 49:
                        mike = report.data;
                        tango = null;
                        oscar = tango == mike;
                        tango = undefined;
                        if(oscar) { _fun101061_ip = 70; continue _fun101061 }
 65:
                        tango = mike.type;
 70:
                        oscar = _closure1_slot0;
                        mike = _closure1_slot3;
                        mike = mike[golf];
                        mike = oscar.bind(entity)(mike);
                        mike = mike.ChatInputParseResultDataType;
                        mike = mike.COMMAND_OPTION;
                        if(!(tango !== mike)) { _fun101061_ip = 246; continue _fun101061 }
 106:
                        tango = report.type;
                        oscar = _closure1_slot0;
                        mike = _closure1_slot3;
                        mike = mike[golf];
                        mike = oscar.bind(entity)(mike);
                        mike = mike.ChatInputNodeType;
                        mike = mike.COMMAND_OPTION_WITH_VALUE;
                        mike = tango === mike;
                        if(!mike) { _fun101061_ip = 201; continue _fun101061 }
 147:
                        oscar = report.data;
                        tango = null;
                        options = tango == oscar;
                        tango = undefined;
                        if(options) { _fun101061_ip = 168; continue _fun101061 }
 163:
                        tango = oscar.type;
 168:
                        oscar = _closure1_slot0;
                        zulu = _closure1_slot3;
                        zulu = zulu[golf];
                        zulu = oscar.bind(entity)(zulu);
                        zulu = zulu.ChatInputParseResultDataType;
                        zulu = zulu.COMMAND_OPTION;
                        mike = tango === zulu;
 201:
                        if(!mike) { _fun101061_ip = 286; continue _fun101061 }
 204:
                        mike = _closure3_slot0;
                        tango = mike.optionValueNodes;
                        zulu = tango.set;
                        mike = report.data;
                        mike = mike.option;
                        mike = mike.name;
                        mike = zulu.bind(tango)(mike, report);
                        _fun101061_ip = 286; continue _fun101061;
 246:
                        mike = _closure3_slot0;
                        tango = mike.optionsToNodes;
                        zulu = tango.set;
                        mike = report.data;
                        mike = mike.option;
                        mike = mike.name;
                        mike = zulu.bind(tango)(mike, report);
 286:
                        return entity;
                    }
                };
                golf = update.bind(control)(golf);
                if(!backup) { _fun101060_ip = 1133; continue _fun101060 }
 773:
                golf = oscar.activeCommand;
                control = context == golf;
                update = undefined;
                if(control) { _fun101060_ip = 794; continue _fun101060 }
 788:
                update = golf.preferredCommandType;
 794:
                golf = _closure1_slot17;
                golf = golf.FULL_COMMAND;
                if(!(update === golf)) { _fun101060_ip = 1133; continue _fun101060 }
 811:
                control = new Array(0);
                update = _closure1_slot18;
                vacuum = oscar.activeCommand;
                sequence = context == vacuum;
                golf = undefined;
                if(sequence) { _fun101060_ip = 839; continue _fun101060 }
 834:
                golf = vacuum.options;
 839:
                if(!(context == golf)) { _fun101060_ip = 847; continue _fun101060 }
 843:
                golf = new Array(0);
 847:
                record = update.bind(source)(golf);
                update = record.bind(source)();
                golf = update.done;
                config = 17;
                sequence = 1;
                vacuum = '';
                if(golf) { _fun101060_ip = 1074; continue _fun101060 }
 877:
                golf = update.value;
                papa = golf.name;
                sierra = echo[papa];
                status = oscar.optionValueNodes;
                target = status.get;
                lima = target.bind(status)(papa);
                target = context == sierra;
                if(target) { _fun101060_ip = 924; continue _fun101060 }
 914:
                status = sierra.displayText;
                target = vacuum === status;
 924:
                if(target) { _fun101060_ip = 1001; continue _fun101060 }
 927:
                status = context != lima;
                if(!status) { _fun101060_ip = 998; continue _fun101060 }
 934:
                quebec = verify.text;
                equality = quebec.substring;
                variable36 = lima.location;
                whiskey = golf.displayName;
                whiskey = whiskey.length;
                whiskey = variable36 + whiskey;
                whiskey = whiskey + sequence;
                variable36 = lima.location;
                lima = lima.length;
                lima = variable36 + lima;
                lima = equality.bind(quebec)(whiskey, lima);
                sierra = sierra.displayText;
                status = lima === sierra;
 998:
                target = status;
 1001:
                if(target) { _fun101060_ip = 1056; continue _fun101060 }
 1004:
                target = delete echo[papa];
                target = golf.type;
                status = _closure1_slot0;
                golf = _closure1_slot3;
                golf = golf[config];
                golf = status.bind(source)(golf);
                golf = golf.ApplicationCommandOptionType;
                golf = golf.ATTACHMENT;
                if(!(target === golf)) { _fun101060_ip = 1056; continue _fun101060 }
 1046:
                golf = control.push;
                golf = golf.bind(control)(papa);
 1056:
                papa = record.bind(source)();
                golf = papa.done;
                update = papa;
                if(!golf) { _fun101060_ip = 877; continue _fun101060 }
 1074:
                update = control.length;
                golf = 0;
                if(!(update > golf)) { _fun101060_ip = 1133; continue _fun101060 }
 1085:
                update = _closure1_slot1;
                vacuum = _closure1_slot3;
                golf = 26;
                golf = vacuum[golf];
                source = update.bind(source)(golf);
                update = source.removeFiles;
                golf = foxtrot.id;
                report = _closure1_slot7;
                report = report.SlashCommand;
                report = update.bind(source)(golf, control, report);
 1133:
                golf = oscar.preferredOptionValues;
                report = foxtrot.id;
                golf[report] = echo;
                romeo = tango;
                yankee = mike;
                zulu = entity;
 1157:
                golf = null;
                mike = golf == romeo;
                entity = undefined;
                tango = undefined;
                if(mike) { _fun101060_ip = 1175; continue _fun101060 }
 1170:
                tango = romeo.id;
 1175:
                report = oscar.activeCommand;
                echo = golf == report;
                mike = undefined;
                if(echo) { _fun101060_ip = 1195; continue _fun101060 }
 1190:
                mike = report.id;
 1195:
                mike = tango !== mike;
                var _closure3_slot3 = mike;
                tango = oscar.activeOption;
                var _closure3_slot4 = tango;
                report = backup;
                if(backup) { _fun101060_ip = 1222; continue _fun101060 }
 1219:
                report = result;
 1222:
                if(report) { _fun101060_ip = 1228; continue _fun101060 }
 1225:
                report = output;
 1228:
                if(report) { _fun101060_ip = 1234; continue _fun101060 }
 1231:
                report = mike;
 1234:
                if(!report) { _fun101060_ip = 1298; continue _fun101060 }
 1237:
                result = oscar.getCurrentOption;
                output = verify.focused;
                if(output) { _fun101060_ip = 1279; continue _fun101060 }
 1252:
                echo = _closure1_slot8;
                echo = echo.keyboardType;
                report = _closure1_slot14;
                report = report.SYSTEM;
                output = echo !== report;
 1279:
                report = verify.selectionStart;
                report = result.bind(oscar)(output, report);
                _closure3_slot4 = report;
                tango = report;
 1298:
                report = mike;
                if(!mike) { _fun101060_ip = 1314; continue _fun101060 }
 1304:
                output = oscar.activeCommand;
                report = golf != output;
 1314:
                if(!report) { _fun101060_ip = 1367; continue _fun101060 }
 1317:
                result = _closure1_slot1;
                echo = _closure1_slot3;
                output = 26;
                output = echo[output];
                result = result.bind(entity)(output);
                output = result.clearAll;
                foxtrot = foxtrot.id;
                report = _closure1_slot7;
                report = report.SlashCommand;
                report = output.bind(result)(foxtrot, report);
 1367:
                report = golf == tango;
                foxtrot = undefined;
                if(report) { _fun101060_ip = 1381; continue _fun101060 }
 1376:
                foxtrot = tango.name;
 1381:
                output = oscar.activeOption;
                result = golf == output;
                report = undefined;
                if(result) { _fun101060_ip = 1401; continue _fun101060 }
 1396:
                report = output.name;
 1401:
                foxtrot = foxtrot !== report;
                var _closure3_slot5 = foxtrot;
                report = verify.lastCommandAutocompleteResponseNonce;
                options = options !== report;
                report = backup;
                if(backup) { _fun101060_ip = 1428; continue _fun101060 }
 1425:
                report = foxtrot;
 1428:
                if(report) { _fun101060_ip = 1434; continue _fun101060 }
 1431:
                report = options;
 1434:
                if(!report) { _fun101060_ip = 1469; continue _fun101060 }
 1437:
                options = golf == romeo;
                output = undefined;
                if(options) { _fun101060_ip = 1452; continue _fun101060 }
 1446:
                output = romeo.preferredCommandType;
 1452:
                options = _closure1_slot17;
                options = options.FULL_COMMAND;
                report = output === options;
 1469:
                if(!report) { _fun101060_ip = 1600; continue _fun101060 }
 1475:
                options = oscar.getAllCommandOptionValues;
                report = verify.text;
                report = options.bind(oscar)(romeo, report);
                oscar['optionValues'] = report;
                options = _closure1_slot0;
                output = _closure1_slot3;
                report = 27;
                report = output[report];
                update = options.bind(entity)(report);
                echo = update.getValidationResults;
                variable40 = oscar.optionValues;
                report = verify.channel;
                variable39 = report.guild_id;
                report = verify.channel;
                variable38 = report.id;
                variable37 = false;
                variable42 = update;
                variable41 = romeo;
                report = variable42[echo](variable41, variable40, variable39, variable38, variable37, variable36);
                oscar['optionValidationResults'] = report;
                output = oscar.chatInputNodes;
                options = output.map;
                report = function(argFoo) {
                    _fun101062: for(var _fun101062_ip = 0; ; ) switch(_fun101062_ip) {
 0:
                        tango = argFoo;
                        mike = tango.type;
                        zulu = _closure1_slot0;
                        entity = _closure1_slot3;
                        verify = 10;
                        entity = entity[verify];
                        options = undefined;
                        entity = zulu.bind(options)(entity);
                        entity = entity.ChatInputNodeType;
                        entity = entity.COMMAND_OPTION;
                        if(!(mike !== entity)) { _fun101062_ip = 87; continue _fun101062 }
 49:
                        mike = tango.type;
                        zulu = _closure1_slot0;
                        entity = _closure1_slot3;
                        entity = entity[verify];
                        entity = zulu.bind(options)(entity);
                        entity = entity.ChatInputNodeType;
                        entity = entity.COMMAND_OPTION_WITH_VALUE;
                        if(!(mike === entity)) { _fun101062_ip = 98; continue _fun101062 }
 87:
                        entity = tango.data;
                        mike = null;
                        if(!(mike == entity)) { _fun101062_ip = 100; continue _fun101062 }
 98:
                        return tango;
 100:
                        entity = tango.data;
                        zulu = entity.option;
                        oscar = tango.type;
                        golf = _closure1_slot0;
                        entity = _closure1_slot3;
                        entity = entity[verify];
                        entity = golf.bind(options)(entity);
                        entity = entity.ChatInputNodeType;
                        entity = entity.COMMAND_OPTION_WITH_VALUE;
                        if(!(oscar === entity)) { _fun101062_ip = 223; continue _fun101062 }
 149:
                        golf = zulu.name;
                        verify = _closure3_slot4;
                        offset = mike == verify;
                        oscar = undefined;
                        if(offset) { _fun101062_ip = 175; continue _fun101062 }
 170:
                        oscar = verify.name;
 175:
                        if(!(golf === oscar)) { _fun101062_ip = 223; continue _fun101062 }
 179:
                        oscar = _closure3_slot2;
                        if(!oscar) { _fun101062_ip = 223; continue _fun101062 }
 186:
                        oscar = _closure3_slot3;
                        if(!oscar) { _fun101062_ip = 200; continue _fun101062 }
 193:
                        entity = _closure3_slot5;
                        if(entity) { _fun101062_ip = 223; continue _fun101062 }
 200:
                        entity = {};
                        foxtrot = entity;
                        romeo = tango;
                        oscar = copyDataProperties(foxtrot, romeo);
                        oscar = 'style';
                        entity[oscar] = options;
                        return entity;
 223:
                        entity = {};
                        foxtrot = entity;
                        romeo = tango;
                        tango = copyDataProperties(foxtrot, romeo);
                        oscar = _closure3_slot0;
                        golf = oscar.optionValidationResults;
                        oscar = zulu.name;
                        oscar = golf[oscar];
                        verify = zulu.name;
                        offset = _closure3_slot4;
                        yankee = mike == offset;
                        golf = undefined;
                        if(yankee) { _fun101062_ip = 280; continue _fun101062 }
 275:
                        golf = offset.name;
 280:
                        if(!(verify !== golf)) { _fun101062_ip = 325; continue _fun101062 }
 284:
                        if(!(options !== oscar)) { _fun101062_ip = 325; continue _fun101062 }
 288:
                        golf = oscar.success;
                        if(golf) { _fun101062_ip = 325; continue _fun101062 }
 297:
                        golf = _closure3_slot0;
                        verify = golf.styles;
                        golf = verify.commandErrorOption;
                        golf = golf.bind(verify)();
                        entity['style'] = golf;
                        _fun101062_ip = 351; continue _fun101062;
 325:
                        golf = _closure3_slot0;
                        verify = golf.styles;
                        golf = verify.commandOption;
                        golf = golf.bind(verify)();
                        entity['style'] = golf;
 351:
                        mike = mike != oscar;
                        if(!mike) { _fun101062_ip = 364; continue _fun101062 }
 358:
                        mike = oscar.success;
 364:
                        if(!mike) { _fun101062_ip = 408; continue _fun101062 }
 367:
                        oscar = zulu.type;
                        golf = _closure1_slot0;
                        verify = _closure1_slot3;
                        report = 17;
                        report = verify[report];
                        report = golf.bind(options)(report);
                        report = report.ApplicationCommandOptionType;
                        report = report.ATTACHMENT;
                        mike = oscar === report;
 408:
                        if(!mike) { _fun101062_ip = 465; continue _fun101062 }
 411:
                        mike = {};
                        report = 'tapAttachment';
                        mike['action'] = report;
                        tango = _closure3_slot1;
                        tango = tango.channel;
                        tango = tango.id;
                        mike['channelId'] = tango;
                        zulu = zulu.name;
                        mike['optionName'] = zulu;
                        entity['tapAction'] = mike;
                        mike = true;
                        entity['deleteNodeOnBackspace'] = mike;
 465:
                        return entity;
                    }
                };
                report = options.bind(output)(report);
                oscar['chatInputNodes'] = report;
 1600:
                report = backup;
                if(report) { _fun101060_ip = 1609; continue _fun101060 }
 1606:
                report = mike;
 1609:
                if(report) { _fun101060_ip = 1615; continue _fun101060 }
 1612:
                report = foxtrot;
 1615:
                if(report) { _fun101060_ip = 1628; continue _fun101060 }
 1618:
                options = verify.editId;
                report = offset !== options;
 1628:
                if(!report) { _fun101060_ip = 1665; continue _fun101060 }
 1631:
                report = oscar.ref;
                output = report.current;
                offset = output.updateNativeTextBlocksThrottled;
                options = oscar.chatInputNodes;
                report = verify.editId;
                report = offset.bind(output)(options, report);
 1665:
                report = mike;
                if(!mike) { _fun101060_ip = 1675; continue _fun101060 }
 1671:
                report = golf != romeo;
 1675:
                if(!report) { _fun101060_ip = 1686; continue _fun101060 }
 1678:
                report = true;
                oscar['canAutoInsertFirstOption'] = report;
 1686:
                offset = _closure1_slot0;
                report = _closure1_slot3;
                source = 20;
                report = report[source];
                output = offset.bind(entity)(report);
                offset = output.isEmpty;
                report = oscar.optionsToNodes;
                report = offset.bind(output)(report);
                if(report) { _fun101060_ip = 1737; continue _fun101060 }
 1729:
                report = false;
                oscar['canAutoInsertFirstOption'] = report;
 1737:
                report = golf == romeo;
                offset = undefined;
                if(report) { _fun101060_ip = 1752; continue _fun101060 }
 1746:
                offset = romeo.preferredCommandType;
 1752:
                report = _closure1_slot17;
                report = report.FULL_COMMAND;
                if(!(offset === report)) { _fun101060_ip = 1784; continue _fun101060 }
 1766:
                report = golf == romeo;
                output = undefined;
                if(report) { _fun101060_ip = 1780; continue _fun101060 }
 1775:
                output = romeo.options;
 1780:
                if(!(golf == output)) { _fun101060_ip = 1788; continue _fun101060 }
 1784:
                output = new Array(0);
 1788:
                offset = output.filter;
                report = function(argFoo) {
                    entity = argFoo;
                    entity = entity.required;
                    return entity;
                };
                report = offset.bind(output)(report);
                report = report.length;
                offset = 0;
                echo = report > offset;
                report = golf == romeo;
                output = undefined;
                if(report) { _fun101060_ip = 1831; continue _fun101060 }
 1825:
                output = romeo.preferredCommandType;
 1831:
                report = _closure1_slot17;
                report = report.FULL_COMMAND;
                if(!(output === report)) { _fun101060_ip = 1863; continue _fun101060 }
 1845:
                report = golf == romeo;
                result = undefined;
                if(report) { _fun101060_ip = 1859; continue _fun101060 }
 1854:
                result = romeo.options;
 1859:
                if(!(golf == result)) { _fun101060_ip = 1867; continue _fun101060 }
 1863:
                result = new Array(0);
 1867:
                output = result.filter;
                report = function(argFoo) {
                    entity = argFoo;
                    entity = entity.required;
                    entity = !entity;
                    return entity;
                };
                report = output.bind(result)(report);
                output = report.length;
                report = 1;
                result = report === output;
                report = oscar.canAutoInsertFirstOption;
                if(!report) { _fun101060_ip = 1934; continue _fun101060 }
 1905:
                output = golf == romeo;
                update = undefined;
                if(output) { _fun101060_ip = 1920; continue _fun101060 }
 1914:
                update = romeo.preferredCommandType;
 1920:
                output = _closure1_slot17;
                output = output.FULL_COMMAND;
                report = update === output;
 1934:
                if(!report) { _fun101060_ip = 1971; continue _fun101060 }
 1937:
                update = _closure1_slot0;
                output = _closure1_slot3;
                output = output[source];
                source = update.bind(entity)(output);
                update = source.isEmpty;
                output = oscar.optionsToNodes;
                report = update.bind(source)(output);
 1971:
                if(!report) { _fun101060_ip = 1993; continue _fun101060 }
 1974:
                output = verify.text;
                output = output.length;
                sizing = sizing.length;
                report = output >= sizing;
 1993:
                if(!report) { _fun101060_ip = 2064; continue _fun101060 }
 1996:
                output = oscar.insertFirstOptionIfValid;
                variable41 = verify.text;
                variable39 = romeo.displayName;
                variable42 = oscar;
                variable40 = romeo;
                variable38 = echo;
                variable37 = result;
                report = variable42[output](variable41, variable40, variable39, variable38, variable37, variable36);
                if(report) { _fun101060_ip = 2064; continue _fun101060 }
 2031:
                output = oscar.insertFirstOptionIfValid;
                variable41 = verify.text;
                variable39 = romeo.untranslatedName;
                variable42 = oscar;
                variable40 = romeo;
                variable38 = echo;
                variable37 = result;
                report = variable42[output](variable41, variable40, variable39, variable38, variable37, variable36);
 2064:
                if(!foxtrot) { _fun101060_ip = 2213; continue _fun101060 }
 2070:
                report = golf == tango;
                sizing = undefined;
                if(report) { _fun101060_ip = 2084; continue _fun101060 }
 2079:
                sizing = tango.type;
 2084:
                output = _closure1_slot0;
                result = _closure1_slot3;
                report = 17;
                report = result[report];
                report = output.bind(entity)(report);
                report = report.ApplicationCommandOptionType;
                report = report.ATTACHMENT;
                if(!(sizing === report)) { _fun101060_ip = 2213; continue _fun101060 }
 2120:
                sizing = oscar.optionValidationResults;
                report = tango.name;
                report = sizing[report];
                report = report.success;
                if(report) { _fun101060_ip = 2213; continue _fun101060 }
 2144:
                report = oscar.ref;
                output = report.current;
                sizing = output.openCustomKeyboard;
                report = {};
                result = _closure1_slot14;
                result = result.MEDIA;
                report['keyboardType'] = result;
                result = {};
                echo = _closure1_slot15;
                echo = echo.COMMAND;
                result['target'] = echo;
                result['option'] = tango;
                report['context'] = result;
                report = sizing.bind(output)(report);
                _fun101060_ip = 2337; continue _fun101060;
 2213:
                report = foxtrot;
                if(!report) { _fun101060_ip = 2223; continue _fun101060 }
 2219:
                report = golf != tango;
 2223:
                if(!report) { _fun101060_ip = 2267; continue _fun101060 }
 2226:
                output = tango.type;
                result = _closure1_slot0;
                echo = _closure1_slot3;
                sizing = 17;
                sizing = echo[sizing];
                sizing = result.bind(entity)(sizing);
                sizing = sizing.ApplicationCommandOptionType;
                sizing = sizing.ATTACHMENT;
                report = output !== sizing;
 2267:
                if(!report) { _fun101060_ip = 2294; continue _fun101060 }
 2270:
                sizing = _closure1_slot8;
                output = sizing.keyboardType;
                sizing = _closure1_slot14;
                sizing = sizing.SYSTEM;
                report = output !== sizing;
 2294:
                if(!report) { _fun101060_ip = 2337; continue _fun101060 }
 2297:
                report = oscar.ref;
                sizing = report.current;
                report = sizing.closeCustomKeyboard;
                report = report.bind(sizing)();
                report = oscar.ref;
                sizing = report.current;
                report = sizing.focus;
                report = report.bind(sizing)();
 2337:
                oscar['props'] = verify;
                report = {};
                var _closure3_slot6 = report;
                sizing = golf == romeo;
                output = undefined;
                if(sizing) { _fun101060_ip = 2364; continue _fun101060 }
 2358:
                output = romeo.preferredCommandType;
 2364:
                sizing = _closure1_slot17;
                sizing = sizing.FULL_COMMAND;
                if(!(output === sizing)) { _fun101060_ip = 2543; continue _fun101060 }
 2381:
                if(foxtrot) { _fun101060_ip = 2397; continue _fun101060 }
 2384:
                if(!backup) { _fun101060_ip = 2543; continue _fun101060 }
 2390:
                if(!(golf == tango)) { _fun101060_ip = 2543; continue _fun101060 }
 2397:
                sizing = golf == romeo;
                output = romeo;
                if(sizing) { _fun101060_ip = 2419; continue _fun101060 }
 2407:
                result = romeo.options;
                sizing = golf == result;
                output = result;
 2419:
                if(sizing) { _fun101060_ip = 2439; continue _fun101060 }
 2422:
                sizing = output.forEach;
                kilo = function(argFoo) {
                    _fun101065: for(var _fun101065_ip = 0; ; ) switch(_fun101065_ip) {
 0:
                        entity = argFoo;
                        tango = entity.name;
                        entity = _closure3_slot0;
                        entity = entity.optionValues;
                        options = entity[tango];
                        zulu = _closure3_slot6;
                        mike = {};
                        verify = _closure3_slot4;
                        report = null;
                        offset = report == verify;
                        entity = undefined;
                        golf = undefined;
                        if(offset) { _fun101065_ip = 53; continue _fun101065 }
 48:
                        golf = verify.name;
 53:
                        golf = tango === golf;
                        mike['isActive'] = golf;
                        mike['optionValue'] = options;
                        golf = report != options;
                        if(!golf) { _fun101065_ip = 85; continue _fun101065 }
 74:
                        verify = options.length;
                        options = 0;
                        golf = verify > options;
 85:
                        mike['hasValue'] = golf;
                        golf = _closure3_slot0;
                        options = golf.optionsToNodes;
                        golf = options.get;
                        options = golf.bind(options)(tango);
                        verify = report == options;
                        golf = undefined;
                        if(verify) { _fun101065_ip = 124; continue _fun101065 }
 119:
                        golf = options.location;
 124:
                        mike['location'] = golf;
                        oscar = _closure3_slot0;
                        golf = oscar.optionsToNodes;
                        oscar = golf.get;
                        oscar = oscar.bind(golf)(tango);
                        golf = report == oscar;
                        report = undefined;
                        if(golf) { _fun101065_ip = 162; continue _fun101065 }
 157:
                        report = oscar.length;
 162:
                        mike['length'] = report;
                        zulu[tango] = mike;
                        return entity;
                    }
                };
                kilo = sizing.bind(output)(kilo);
 2439:
                if(!foxtrot) { _fun101060_ip = 2543; continue _fun101060 }
 2442:
                if(!(golf != tango)) { _fun101060_ip = 2463; continue _fun101060 }
 2446:
                foxtrot = tango.name;
                kilo = report[foxtrot];
                foxtrot = true;
                kilo['hasValue'] = foxtrot;
 2463:
                foxtrot = oscar.activeOption;
                if(!(golf != foxtrot)) { _fun101060_ip = 2543; continue _fun101060 }
 2473:
                foxtrot = oscar.activeOption;
                foxtrot = foxtrot.name;
                foxtrot = report[foxtrot];
                if(!(golf != foxtrot)) { _fun101060_ip = 2543; continue _fun101060 }
 2492:
                foxtrot = foxtrot.hasValue;
                if(!foxtrot) { _fun101060_ip = 2543; continue _fun101060 }
 2501:
                kilo = oscar.optionValidationResults;
                foxtrot = oscar.activeOption;
                foxtrot = foxtrot.name;
                kilo = kilo[foxtrot];
                foxtrot = oscar.activeOption;
                foxtrot = foxtrot.name;
                foxtrot = report[foxtrot];
                foxtrot['lastValidationResult'] = kilo;
 2543:
                sizing = oscar.getCurrentOption;
                foxtrot = verify.selectionStart;
                kilo = true;
                foxtrot = sizing.bind(oscar)(kilo, foxtrot);
                if(!backup) { _fun101060_ip = 2683; continue _fun101060 }
 2566:
                if(!(golf != foxtrot)) { _fun101060_ip = 2683; continue _fun101060 }
 2570:
                backup = foxtrot.name;
                foxtrot = report[backup];
                if(!(golf == foxtrot)) { _fun101060_ip = 2585; continue _fun101060 }
 2583:
                foxtrot = {};
 2585:
                output = oscar.optionsToNodes;
                sizing = output.get;
                output = sizing.bind(output)(backup);
                result = golf == output;
                sizing = undefined;
                if(result) { _fun101060_ip = 2615; continue _fun101060 }
 2610:
                sizing = output.location;
 2615:
                foxtrot['location'] = sizing;
                output = oscar.optionsToNodes;
                sizing = output.get;
                output = sizing.bind(output)(backup);
                result = golf == output;
                sizing = undefined;
                if(result) { _fun101060_ip = 2651; continue _fun101060 }
 2646:
                sizing = output.length;
 2651:
                foxtrot['length'] = sizing;
                sizing = oscar.optionValues;
                sizing = sizing[backup];
                foxtrot['optionValue'] = sizing;
                foxtrot['hasValue'] = kilo;
                report[backup] = foxtrot;
 2683:
                oscar['activeCommand'] = romeo;
                oscar['activeCommandSection'] = yankee;
                oscar['activeOption'] = tango;
                if(mike) { _fun101060_ip = 2731; continue _fun101060 }
 2704:
                tango = global;
                yankee = tango.Object;
                tango = yankee.keys;
                tango = tango.bind(yankee)(report);
                tango = tango.length;
                mike = tango > offset;
 2731:
                if(mike) { _fun101060_ip = 2737; continue _fun101060 }
 2734:
                mike = zulu;
 2737:
                if(!mike) { _fun101060_ip = 2911; continue _fun101060 }
 2743:
                zulu = _closure1_slot2;
                tango = _closure1_slot3;
                mike = 11;
                mike = tango[mike];
                tango = zulu.bind(entity)(mike);
                zulu = tango.updateChannelState;
                mike = {};
                verify = verify.channel;
                verify = verify.id;
                mike['channelId'] = verify;
                verify = oscar.activeCommand;
                yankee = golf == verify;
                offset = undefined;
                if(yankee) { _fun101060_ip = 2806; continue _fun101060 }
 2800:
                offset = verify.preferredCommandType;
 2806:
                options = _closure1_slot17;
                verify = options.FULL_COMMAND;
                options = null;
                if(!(offset === verify)) { _fun101060_ip = 2828; continue _fun101060 }
 2822:
                options = oscar.activeCommand;
 2828:
                mike['command'] = options;
                verify = oscar.activeCommandSection;
                offset = golf != verify;
                options = null;
                if(!offset) { _fun101060_ip = 2851; continue _fun101060 }
 2848:
                options = verify;
 2851:
                mike['section'] = options;
                verify = oscar.preferredCommand;
                offset = golf == verify;
                options = undefined;
                if(offset) { _fun101060_ip = 2875; continue _fun101060 }
 2870:
                options = verify.id;
 2875:
                verify = golf != options;
                golf = null;
                if(!verify) { _fun101060_ip = 2887; continue _fun101060 }
 2884:
                golf = options;
 2887:
                mike['preferredCommandId'] = golf;
                oscar = oscar.location;
                mike['location'] = oscar;
                mike['changedOptionStates'] = report;
                mike = zulu.bind(tango)(mike);
 2911:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[1] = entity;
        entity = {};
        oscar = 'updateValidationResults';
        entity['key'] = oscar;
        report = function() { // Original name: updateValidationResults
            _fun101066: for(var _fun101066_ip = 0; ; ) switch(_fun101066_ip) {
 0:
                mike = this;
                var _closure3_slot0 = mike;
                report = {};
                var _closure3_slot1 = report;
                zulu = mike.activeCommand;
                verify = null;
                oscar = verify == zulu;
                entity = undefined;
                golf = undefined;
                if(oscar) { _fun101066_ip = 40; continue _fun101066 }
 34:
                golf = zulu.preferredCommandType;
 40:
                oscar = _closure1_slot17;
                oscar = oscar.FULL_COMMAND;
                if(!(golf === oscar)) { _fun101066_ip = 105; continue _fun101066 }
 57:
                options = mike.activeCommand;
                oscar = verify == options;
                golf = options;
                if(oscar) { _fun101066_ip = 85; continue _fun101066 }
 73:
                options = options.options;
                oscar = verify == options;
                golf = options;
 85:
                if(oscar) { _fun101066_ip = 105; continue _fun101066 }
 88:
                oscar = golf.forEach;
                tango = function(argFoo) {
                    entity = argFoo;
                    zulu = entity.name;
                    mike = _closure3_slot1;
                    entity = {};
                    tango = _closure3_slot0;
                    tango = tango.optionValidationResults;
                    tango = tango[zulu];
                    entity['lastValidationResult'] = tango;
                    mike[zulu] = entity;
                    entity = undefined;
                    return entity;
                };
                tango = oscar.bind(golf)(tango);
 105:
                tango = _closure1_slot2;
                oscar = _closure1_slot3;
                zulu = 11;
                zulu = oscar[zulu];
                tango = tango.bind(entity)(zulu);
                zulu = tango.updateOptionStates;
                mike = mike.props;
                mike = mike.channel;
                mike = mike.id;
                mike = zulu.bind(tango)(mike, report);
                return entity;
            }
        };
        entity['value'] = report;
        mike[2] = entity;
        entity = undefined;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    mike = mike.bind(entity)();
    tango = 28;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/application_commands/native/ApplicationCommandManager.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();