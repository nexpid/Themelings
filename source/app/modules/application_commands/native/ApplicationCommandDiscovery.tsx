// app/modules/application_commands/native/ApplicationCommandDiscovery.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    yankee = argBaz;
    golf = argCorge;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = yankee;
    var _closure1_slot2 = golf;
    var _closure1_slot3 = oscar;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun00002_ip = 46; continue _fun00001 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun00002_ip = 55; continue _fun00001 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun00002_ip = 345; continue _fun00001 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun00002_ip = 323; continue _fun00001 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun00002_ip = 283; continue _fun00001 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun00002_ip = 270; continue _fun00001 }
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
            if(!golf) { _fun00002_ip = 163; continue _fun00001 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun00002_ip = 179; continue _fun00001 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun00002_ip = 234; continue _fun00001 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun00002_ip = 247; continue _fun00001 }
 234:
            verify = _closure1_slot20;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun00002_ip = 265; continue _fun00001;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun00002_ip = 283; continue _fun00001;
 270:
            golf = _closure1_slot20;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun00002_ip = 323; continue _fun00001 }
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
            if(!tango) { _fun00002_ip = 330; continue _fun00001 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun00004_ip = 56; continue _fun00003 }
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
                    _fun00004_ip = 67; continue _fun00003;
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
    var _closure1_slot19 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun00006_ip = 23; continue _fun00005 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun00006_ip = 33; continue _fun00005 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun00006_ip = 70; continue _fun00005 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun00006_ip = 55; continue _fun00005 }
 70:
            return entity;
        }
    };
    var _closure1_slot20 = entity;
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
    tango = yankee.bind(entity)(tango);
    var _closure1_slot4 = tango;
    offset = 1;
    tango = oscar[offset];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.View;
    var _closure1_slot6 = golf;
    tango = tango.SectionList;
    var _closure1_slot7 = tango;
    golf = 3;
    tango = oscar[golf];
    tango = report.bind(entity)(tango);
    options = tango.BuiltInSectionId;
    var _closure1_slot8 = options;
    tango = tango.DISCOVERY_COMMANDS_QUERY_LIMIT;
    var _closure1_slot9 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.ITEM_HEIGHT;
    var _closure1_slot10 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.AUTOCOMPLETE_ROW_HEIGHT;
    var _closure1_slot11 = tango;
    options = 6;
    options = oscar[options];
    options = report.bind(entity)(options);
    verify = options.AnalyticEvents;
    var _closure1_slot12 = verify;
    options = options.SectionListElementType;
    var _closure1_slot13 = options;
    options = 7;
    verify = oscar[options];
    verify = report.bind(entity)(verify);
    verify = verify.jsx;
    var _closure1_slot14 = verify;
    verify = oscar[options];
    verify = report.bind(entity)(verify);
    verify = verify.Fragment;
    var _closure1_slot15 = verify;
    options = oscar[options];
    options = report.bind(entity)(options);
    options = options.jsxs;
    var _closure1_slot16 = options;
    tango = golf * tango;
    var _closure1_slot17 = tango;
    tango = 9;
    tango = oscar[tango];
    options = report.bind(entity)(tango);
    golf = options.createStyles;
    tango = {};
    verify = {};
    verify['flex'] = offset;
    tango['discoveryWrapper'] = verify;
    verify = {'height': 50, 'width': 50, 'marginBottom': 16};
    tango['noCommandsImage'] = verify;
    verify = {'padding': 0, 'height': 100};
    tango['noCommandsContainer'] = verify;
    verify = {};
    offset = 10;
    offset = oscar[offset];
    offset = yankee.bind(entity)(offset);
    offset = offset.colors;
    offset = offset.BACKGROUND_SECONDARY;
    verify['backgroundColor'] = offset;
    tango['commandsList'] = verify;
    tango = golf.bind(options)(tango);
    var _closure1_slot18 = tango;
    tango = 25;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/application_commands/native/ApplicationCommandDiscovery.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: ApplicationCommandDiscovery
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            options = entity.style;
            mike = entity.onPressSlashItem;
            var _closure2_slot0 = mike;
            zulu = entity.onHeightChange;
            var _closure2_slot1 = zulu;
            foxtrot = entity.channel;
            romeo = entity.canOnlyUseTextCommands;
            tango = undefined;
            var _closure2_slot8 = tango;
            var _closure2_slot9 = tango;
            var _closure2_slot10 = tango;
            var _closure2_slot11 = tango;
            var _closure2_slot12 = tango;
            var _closure2_slot13 = tango;
            var _closure2_slot14 = tango;
            var _closure2_slot15 = tango;
            var _closure2_slot16 = tango;
            var _closure2_slot17 = tango;
            entity = _closure1_slot18;
            output = entity.bind(tango)();
            var _closure2_slot2 = output;
            golf = _closure1_slot5;
            entity = golf.createRef;
            echo = entity.bind(golf)();
            var _closure2_slot3 = echo;
            mike = golf.useState;
            entity = 0;
            verify = mike.bind(golf)(entity);
            oscar = _closure1_slot4;
            mike = 2;
            mike = oscar.bind(tango)(verify, mike);
            entity = mike[entity];
            var _closure2_slot4 = entity;
            backup = 1;
            offset = mike[backup];
            var _closure2_slot5 = offset;
            oscar = golf.useRef;
            mike = false;
            mike = oscar.bind(golf)(mike);
            var _closure2_slot6 = mike;
            kilo = _closure1_slot0;
            sizing = _closure1_slot3;
            mike = 11;
            mike = sizing[mike];
            golf = kilo.bind(tango)(mike);
            oscar = golf.useCommandDiscoveryManager;
            mike = function(argFoo) {
                entity = argFoo;
                entity = entity.initialSectionId;
                return entity;
            };
            update = oscar.bind(golf)(mike);
            var _closure2_slot7 = update;
            oscar = _closure1_slot2;
            mike = 12;
            mike = sizing[mike];
            golf = oscar.bind(tango)(mike);
            oscar = golf.useDiscovery;
            mike = {};
            verify = {};
            verify['channel'] = foxtrot;
            foxtrot = 'channel';
            verify['type'] = foxtrot;
            mike['context'] = verify;
            verify = {};
            foxtrot = 13;
            foxtrot = sizing[foxtrot];
            foxtrot = kilo.bind(tango)(foxtrot);
            foxtrot = foxtrot.ApplicationCommandType;
            kilo = foxtrot.CHAT;
            foxtrot = new Array(1);
            foxtrot[0] = kilo;
            verify['commandTypes'] = foxtrot;
            kilo = _closure1_slot0;
            sizing = _closure1_slot3;
            foxtrot = 14;
            foxtrot = sizing[foxtrot];
            foxtrot = kilo.bind(tango)(foxtrot);
            kilo = foxtrot.BuiltInCommandFilter;
            if(romeo) { _fun00008_ip = 336; continue _fun00007 }
 328:
            foxtrot = kilo.ALLOW;
            _fun00008_ip = 342; continue _fun00007;
 336:
            foxtrot = kilo.ONLY_TEXT;
 342:
            verify['builtIns'] = foxtrot;
            romeo = !romeo;
            verify['applicationCommands'] = romeo;
            mike['filters'] = verify;
            romeo = {'placeholderCount': 3, 'limit': null, 'includeFrecency': true};
            verify = _closure1_slot9;
            romeo['limit'] = verify;
            verify = true;
            mike['options'] = romeo;
            mike['allowFetch'] = verify;
            oscar = oscar.bind(golf)(mike);
            golf = oscar.sectionDescriptors;
            _closure2_slot8 = golf;
            mike = oscar.activeSections;
            _closure2_slot9 = mike;
            result = oscar.commandsByActiveSection;
            _closure2_slot10 = result;
            mike = oscar.hasMoreAfter;
            _closure2_slot11 = mike;
            foxtrot = oscar.loading;
            mike = oscar.filteredSectionId;
            _closure2_slot12 = mike;
            romeo = oscar.scrollDown;
            _closure2_slot13 = romeo;
            romeo = oscar.filterSection;
            _closure2_slot14 = romeo;
            oscar = _closure1_slot5;
            sizing = oscar.useEffect;
            kilo = new Array(4);
            kilo[0] = romeo;
            kilo[1] = update;
            kilo[2] = offset;
            kilo[3] = golf;
            offset = function() {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    zulu = _closure2_slot7;
                    mike = null;
                    if(!(mike != zulu)) { _fun00010_ip = 76; continue _fun00009 }
 13:
                    tango = _closure2_slot14;
                    mike = _closure2_slot7;
                    zulu = undefined;
                    mike = tango.bind(zulu)(mike);
                    report = _closure2_slot8;
                    tango = report.findIndex;
                    mike = function(argFoo) {
                        entity = argFoo;
                        mike = entity.id;
                        entity = _closure2_slot7;
                        entity = mike === entity;
                        return entity;
                    };
                    tango = tango.bind(report)(mike);
                    mike = _closure2_slot5;
                    report = -1;
                    entity = 0;
                    if(!(report !== tango)) { _fun00010_ip = 71; continue _fun00009 }
 68:
                    entity = tango;
 71:
                    entity = mike.bind(zulu)(entity);
 76:
                    entity = undefined;
                    return entity;
                }
            };
            offset = sizing.bind(oscar)(offset, kilo);
            sizing = oscar.useEffect;
            kilo = function() {
                tango = _closure1_slot0;
                report = _closure1_slot3;
                mike = 15;
                mike = report[mike];
                zulu = undefined;
                mike = tango.bind(zulu)(mike);
                golf = mike.AccessibilityAnnouncer;
                oscar = golf.announce;
                mike = 16;
                options = report[mike];
                options = tango.bind(zulu)(options);
                verify = options.intl;
                options = verify.string;
                mike = report[mike];
                mike = tango.bind(zulu)(mike);
                mike = mike.t;
                mike = mike.2wfLMj;
                mike = options.bind(verify)(mike);
                mike = oscar.bind(golf)(mike);
                mike = 17;
                mike = report[mike];
                zulu = tango.bind(zulu)(mike);
                mike = zulu.trackWithMetadata;
                entity = _closure1_slot12;
                entity = entity.APPLICATION_COMMAND_BROWSER_OPENED;
                entity = mike.bind(zulu)(entity);
                entity = function() {
                    zulu = _closure1_slot0;
                    mike = _closure1_slot3;
                    entity = 11;
                    mike = mike[entity];
                    entity = undefined;
                    zulu = zulu.bind(entity)(mike);
                    mike = zulu.updateInitialSectionId;
                    mike = mike.bind(zulu)(entity);
                    return entity;
                };
                return entity;
            };
            offset = new Array(0);
            offset = sizing.bind(oscar)(kilo, offset);
            kilo = oscar.useEffect;
            offset = new Array(2);
            offset[0] = result;
            offset[1] = zulu;
            zulu = function() {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    zulu = _closure2_slot1;
                    mike = null;
                    if(!(mike != zulu)) { _fun00012_ip = 62; continue _fun00011 }
 13:
                    zulu = _closure2_slot1;
                    oscar = _closure2_slot10;
                    entity = oscar.length;
                    report = 0;
                    mike = 0;
                    if(!(mike !== entity)) { _fun00012_ip = 55; continue _fun00011 }
 34:
                    tango = oscar.reduce;
                    entity = function(argFoo, argBar) {
                        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                            entity = argBar;
                            mike = entity.data;
                            zulu = mike.length;
                            mike = 0;
                            if(!(mike !== zulu)) { _fun00014_ip = 89; continue _fun00013 }
 19:
                            report = _closure1_slot0;
                            tango = _closure1_slot3;
                            mike = 8;
                            tango = tango[mike];
                            mike = undefined;
                            mike = report.bind(mike)(tango);
                            mike = mike.APPLICATION_SECTION_HEADER_HEIGHT;
                            tango = _closure1_slot11;
                            zulu = _closure1_slot10;
                            zulu = tango + zulu;
                            entity = entity.data;
                            entity = entity.length;
                            entity = zulu * entity;
                            mike = mike + entity;
                            entity = argFoo;
                            entity = entity + mike;
                            _fun00014_ip = 127; continue _fun00013;
 89:
                            tango = _closure1_slot0;
                            zulu = _closure1_slot3;
                            mike = 8;
                            zulu = zulu[mike];
                            mike = undefined;
                            mike = tango.bind(mike)(zulu);
                            zulu = mike.APPLICATION_SECTION_HEADER_HEIGHT;
                            mike = 160;
                            entity = zulu + mike;
 127:
                            return entity;
                        }
                    };
                    mike = tango.bind(oscar)(entity, report);
 55:
                    entity = undefined;
                    entity = zulu.bind(entity)(mike);
 62:
                    entity = undefined;
                    return entity;
                }
            };
            zulu = kilo.bind(oscar)(zulu, offset);
            offset = oscar.useCallback;
            zulu = new Array(3);
            zulu[0] = golf;
            zulu[1] = romeo;
            zulu[2] = mike;
            mike = function(argFoo) {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    tango = argFoo;
                    mike = _closure2_slot8;
                    mike = mike[tango];
                    report = mike.id;
                    zulu = _closure2_slot12;
                    if(!(report !== zulu)) { _fun00016_ip = 76; continue _fun00015 }
 27:
                    report = mike.id;
                    zulu = _closure1_slot8;
                    zulu = zulu.FRECENCY;
                    if(!(report !== zulu)) { _fun00016_ip = 76; continue _fun00015 }
 49:
                    report = _closure2_slot14;
                    mike = mike.id;
                    zulu = undefined;
                    mike = report.bind(zulu)(mike);
                    mike = _closure2_slot5;
                    mike = mike.bind(zulu)(tango);
                    _fun00016_ip = 100; continue _fun00015;
 76:
                    tango = _closure2_slot14;
                    zulu = undefined;
                    mike = null;
                    mike = tango.bind(zulu)(mike);
                    mike = _closure2_slot5;
                    entity = 0;
                    entity = mike.bind(zulu)(entity);
 100:
                    zulu = _closure1_slot0;
                    mike = _closure1_slot3;
                    entity = 11;
                    mike = mike[entity];
                    entity = undefined;
                    zulu = zulu.bind(entity)(mike);
                    mike = zulu.updateInitialSectionId;
                    mike = mike.bind(zulu)(entity);
                    return entity;
                }
            };
            update = offset.bind(oscar)(mike, zulu);
            _closure2_slot15 = update;
            offset = oscar.useCallback;
            zulu = function() {
                mike = _closure2_slot6;
                entity = true;
                mike['current'] = entity;
                tango = _closure1_slot0;
                zulu = _closure1_slot3;
                entity = 17;
                zulu = zulu[entity];
                entity = undefined;
                tango = tango.bind(entity)(zulu);
                zulu = tango.trackWithMetadata;
                mike = _closure1_slot12;
                mike = mike.APPLICATION_COMMAND_BROWSER_SCROLLED;
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            mike = new Array(0);
            sizing = offset.bind(oscar)(zulu, mike);
            offset = oscar.useCallback;
            zulu = function(argFoo) {
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    entity = argFoo;
                    mike = entity.nativeEvent;
                    entity = mike.contentOffset;
                    tango = mike.targetContentOffset;
                    zulu = entity.y;
                    entity = null;
                    report = entity == tango;
                    entity = undefined;
                    mike = undefined;
                    if(report) { _fun00018_ip = 45; continue _fun00017 }
 40:
                    mike = tango.y;
 45:
                    if(!(zulu === mike)) { _fun00018_ip = 64; continue _fun00017 }
 49:
                    zulu = _closure2_slot6;
                    mike = false;
                    zulu['current'] = mike;
 64:
                    return entity;
                }
            };
            mike = new Array(0);
            kilo = offset.bind(oscar)(zulu, mike);
            offset = oscar.useCallback;
            zulu = function() {
                mike = _closure2_slot6;
                entity = false;
                mike['current'] = entity;
                entity = undefined;
                return entity;
            };
            mike = new Array(0);
            romeo = offset.bind(oscar)(zulu, mike);
            offset = oscar.useMemo;
            zulu = new Array(2);
            zulu[0] = golf;
            zulu[1] = result;
            mike = function() {
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    entity = 0;
                    var _closure3_slot0 = entity;
                    entity = new Array(0);
                    var _closure3_slot1 = entity;
                    oscar = function(argFoo) { // Original name: _loop
                        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                            entity = argFoo;
                            var _closure4_slot0 = entity;
                            tango = _closure2_slot10;
                            zulu = tango.findIndex;
                            mike = function(argFoo) {
                                entity = argFoo;
                                entity = entity.section;
                                mike = entity.id;
                                entity = _closure4_slot0;
                                entity = entity.id;
                                entity = mike === entity;
                                return entity;
                            };
                            mike = zulu.bind(tango)(mike);
                            zulu = 0;
                            if(!(!(mike >= zulu))) { _fun00022_ip = 63; continue _fun00021 }
 40:
                            report = _closure3_slot1;
                            tango = report.push;
                            zulu = _closure3_slot0;
                            zulu = tango.bind(report)(zulu);
                            _fun00022_ip = 153; continue _fun00021;
 63:
                            entity = _closure2_slot10;
                            entity = entity[mike];
                            entity = entity.data;
                            zulu = entity.length;
                            mike = _closure1_slot11;
                            mike = zulu * mike;
                            tango = _closure1_slot0;
                            zulu = _closure1_slot3;
                            entity = 8;
                            zulu = zulu[entity];
                            entity = undefined;
                            entity = tango.bind(entity)(zulu);
                            entity = entity.APPLICATION_SECTION_HEADER_HEIGHT;
                            zulu = mike + entity;
                            entity = _closure3_slot0;
                            entity = zulu + entity;
                            tango = _closure3_slot1;
                            zulu = tango.push;
                            zulu = zulu.bind(tango)(entity);
                            _closure3_slot0 = entity;
 153:
                            entity = undefined;
                            return entity;
                        }
                    };
                    zulu = _closure1_slot19;
                    mike = _closure2_slot8;
                    report = undefined;
                    tango = zulu.bind(report)(mike);
                    zulu = tango.bind(report)();
                    mike = zulu.done;
                    if(mike) { _fun00020_ip = 81; continue _fun00019 }
 56:
                    mike = zulu.value;
                    mike = oscar.bind(report)(mike);
                    golf = tango.bind(report)();
                    mike = golf.done;
                    zulu = golf;
                    if(!mike) { _fun00020_ip = 56; continue _fun00019 }
 81:
                    return entity;
                }
            };
            mike = offset.bind(oscar)(mike, zulu);
            _closure2_slot16 = mike;
            offset = oscar.useMemo;
            zulu = new Array(1);
            zulu[0] = mike;
            mike = function() {
                zulu = _closure1_slot1;
                mike = _closure1_slot3;
                entity = 18;
                mike = mike[entity];
                entity = undefined;
                tango = zulu.bind(entity)(mike);
                zulu = tango.throttle;
                mike = function(argFoo) {
                    _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                        golf = argFoo;
                        mike = _closure2_slot16;
                        mike = mike.length;
                        oscar = 0;
                        mike = oscar < mike;
                        zulu = 0;
                        if(!mike) { _fun00024_ip = 124; continue _fun00023 }
 26:
                        mike = _closure2_slot16;
                        mike = mike[oscar];
                        report = 0;
                        tango = 0;
                        if(!(oscar !== mike)) { _fun00024_ip = 63; continue _fun00023 }
 42:
                        mike = _closure2_slot16;
                        mike = mike[oscar];
                        mike = golf >= mike;
                        report = 0;
                        tango = 0;
                        zulu = 0;
                        if(!mike) { _fun00024_ip = 124; continue _fun00023 }
 63:
                        options = report + 1;
                        verify = tango + 1;
                        mike = _closure2_slot16;
                        mike = mike.length;
                        zulu = options;
                        if(!(verify < mike)) { _fun00024_ip = 124; continue _fun00023 }
 85:
                        mike = _closure2_slot16;
                        mike = mike[verify];
                        report = options;
                        tango = verify;
                        if(oscar === mike) { _fun00024_ip = 63; continue _fun00023 }
 103:
                        mike = _closure2_slot16;
                        mike = mike[verify];
                        report = options;
                        tango = verify;
                        zulu = report;
                        if(golf >= mike) { _fun00024_ip = 63; continue _fun00023 }
 124:
                        mike = _closure2_slot5;
                        entity = undefined;
                        mike = mike.bind(entity)(zulu);
                        return entity;
                    }
                };
                entity = 100;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            mike = offset.bind(oscar)(mike, zulu);
            _closure2_slot17 = mike;
            offset = oscar.useCallback;
            zulu = function(argFoo, argBar) {
                _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                    tango = argFoo;
                    mike = argBar;
                    entity = null;
                    if(!(entity != tango)) { _fun00026_ip = 424; continue _fun00025 }
 15:
                    entity = _closure1_slot13;
                    echo = entity.ROW;
                    entity = _closure1_slot19;
                    options = undefined;
                    result = entity.bind(options)(tango);
                    report = result.bind(options)();
                    entity = report.done;
                    yankee = 1;
                    output = report;
                    sizing = 0;
                    kilo = 0;
                    backup = 0;
                    oscar = 0;
                    report = 0;
                    golf = echo;
                    if(entity) { _fun00026_ip = 291; continue _fun00025 }
 73:
                    entity = output.value;
                    offset = sizing + kilo;
                    verify = entity.data;
                    verify = verify.length;
                    verify = offset + verify;
                    verify = verify + backup;
                    romeo = verify + yankee;
                    offset = sizing;
                    verify = kilo;
                    foxtrot = backup;
                    if(!(!(romeo >= mike))) { _fun00026_ip = 168; continue _fun00025 }
 117:
                    sizing = offset + yankee;
                    romeo = entity.data;
                    romeo = romeo.length;
                    kilo = verify + romeo;
                    backup = foxtrot + yankee;
                    control = result.bind(options)();
                    romeo = control.done;
                    output = control;
                    oscar = sizing;
                    report = kilo;
                    golf = echo;
                    if(romeo) { _fun00026_ip = 291; continue _fun00025 }
 166:
                    _fun00026_ip = 73; continue _fun00025;
 168:
                    romeo = offset + verify;
                    romeo = romeo + foxtrot;
                    if(!(mike !== romeo)) { _fun00026_ip = 275; continue _fun00025 }
 180:
                    backup = offset + verify;
                    romeo = entity.data;
                    romeo = romeo.length;
                    romeo = backup + romeo;
                    romeo = romeo + foxtrot;
                    romeo = romeo + yankee;
                    if(!(mike !== romeo)) { _fun00026_ip = 245; continue _fun00025 }
 210:
                    backup = offset + yankee;
                    romeo = mike - backup;
                    romeo = romeo - verify;
                    romeo = romeo - foxtrot;
                    report = verify + romeo;
                    romeo = _closure1_slot13;
                    golf = romeo.ROW;
                    oscar = backup;
                    _fun00026_ip = 291; continue _fun00025;
 245:
                    oscar = offset + yankee;
                    entity = entity.data;
                    entity = entity.length;
                    report = verify + entity;
                    entity = _closure1_slot13;
                    golf = entity.FOOTER;
                    _fun00026_ip = 291; continue _fun00025;
 275:
                    entity = _closure1_slot13;
                    golf = entity.HEADER;
                    oscar = offset;
                    report = verify;
 291:
                    entity = _closure1_slot13;
                    entity = entity.ROW;
                    if(!(entity !== golf)) { _fun00026_ip = 361; continue _fun00025 }
 305:
                    entity = _closure1_slot13;
                    entity = entity.HEADER;
                    if(!(entity !== golf)) { _fun00026_ip = 333; continue _fun00025 }
 319:
                    entity = _closure1_slot13;
                    entity = entity.FOOTER;
                    tango = 0;
                    _fun00026_ip = 365; continue _fun00025;
 333:
                    golf = _closure1_slot0;
                    verify = _closure1_slot3;
                    entity = 8;
                    entity = verify[entity];
                    entity = golf.bind(options)(entity);
                    tango = entity.APPLICATION_SECTION_HEADER_HEIGHT;
                    _fun00026_ip = 365; continue _fun00025;
 361:
                    tango = _closure1_slot11;
 365:
                    entity = {};
                    entity['length'] = tango;
                    golf = _closure1_slot0;
                    verify = _closure1_slot3;
                    tango = 8;
                    tango = verify[tango];
                    tango = golf.bind(options)(tango);
                    tango = tango.APPLICATION_SECTION_HEADER_HEIGHT;
                    tango = oscar * tango;
                    zulu = _closure1_slot11;
                    zulu = report * zulu;
                    zulu = tango + zulu;
                    entity['offset'] = zulu;
                    entity['index'] = mike;
                    return entity;
 424:
                    entity = {'length': 0, 'offset': 0};
                    entity['index'] = mike;
                    return entity;
                }
            };
            mike = new Array(0);
            offset = offset.bind(oscar)(zulu, mike);
            zulu = oscar.useMemo;
            mike = new Array(3);
            mike[0] = update;
            mike[1] = golf;
            mike[2] = entity;
            entity = function() {
                tango = _closure1_slot14;
                mike = _closure1_slot1;
                zulu = _closure1_slot3;
                entity = 19;
                entity = zulu[entity];
                zulu = undefined;
                mike = mike.bind(zulu)(entity);
                entity = {};
                oscar = _closure2_slot15;
                entity['onPressSection'] = oscar;
                oscar = _closure2_slot8;
                entity['sections'] = oscar;
                report = _closure2_slot4;
                entity['selectedIndex'] = report;
                entity = tango.bind(zulu)(mike, entity);
                return entity;
            };
            oscar = zulu.bind(oscar)(entity, mike);
            zulu = _closure1_slot16;
            mike = _closure1_slot6;
            entity = {};
            update = output.discoveryWrapper;
            golf = new Array(2);
            golf[0] = update;
            golf[1] = options;
            entity['style'] = golf;
            options = _closure1_slot14;
            golf = _closure1_slot7;
            report = {};
            report['ref'] = echo;
            report['sections'] = result;
            output = output.commandsList;
            report['style'] = output;
            report['onScrollBeginDrag'] = sizing;
            report['onScrollEndDrag'] = kilo;
            report['onMomentumScrollEnd'] = romeo;
            romeo = function(argFoo) { // Original name: onScroll
                _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                    entity = argFoo;
                    mike = entity.nativeEvent;
                    report = mike.layoutMeasurement;
                    tango = mike.contentSize;
                    entity = mike.contentOffset;
                    zulu = mike.contentInset;
                    oscar = entity.y;
                    golf = _closure2_slot17;
                    entity = undefined;
                    golf = golf.bind(entity)(oscar);
                    golf = _closure2_slot6;
                    golf = golf.current;
                    if(golf) { _fun00028_ip = 287; continue _fun00027 }
 66:
                    golf = _closure2_slot9;
                    golf = golf.length;
                    foxtrot = 0;
                    if(!(golf > foxtrot)) { _fun00028_ip = 287; continue _fun00027 }
 84:
                    golf = zulu.top;
                    if(!(!(oscar < golf))) { _fun00028_ip = 247; continue _fun00027 }
 96:
                    options = tango.height;
                    golf = report.height;
                    golf = options - golf;
                    zulu = zulu.bottom;
                    zulu = golf - zulu;
                    if(!(oscar > zulu)) { _fun00028_ip = 287; continue _fun00027 }
 126:
                    zulu = _closure2_slot3;
                    options = zulu.current;
                    zulu = null;
                    if(!(zulu != options)) { _fun00028_ip = 287; continue _fun00027 }
 144:
                    golf = options.scrollToLocation;
                    zulu = {};
                    verify = _closure2_slot9;
                    offset = verify.length;
                    verify = 1;
                    offset = offset - verify;
                    zulu['sectionIndex'] = offset;
                    offset = global;
                    romeo = offset.Math;
                    yankee = romeo.max;
                    backup = _closure2_slot10;
                    offset = backup.length;
                    offset = offset - verify;
                    offset = backup[offset];
                    offset = offset.data;
                    offset = offset.length;
                    offset = offset - verify;
                    offset = yankee.bind(romeo)(offset, foxtrot);
                    zulu['itemIndex'] = offset;
                    zulu['viewPosition'] = verify;
                    verify = false;
                    zulu['animated'] = verify;
                    zulu = golf.bind(options)(zulu);
                    _fun00028_ip = 287; continue _fun00027;
 247:
                    zulu = _closure2_slot3;
                    options = zulu.current;
                    zulu = null;
                    if(!(zulu != options)) { _fun00028_ip = 287; continue _fun00027 }
 262:
                    golf = options.scrollToLocation;
                    zulu = {'sectionIndex': 0, 'itemIndex': 0, 'viewPosition': 0, 'animated': false};
                    zulu = golf.bind(options)(zulu);
 287:
                    zulu = _closure2_slot11;
                    if(!zulu) { _fun00028_ip = 323; continue _fun00027 }
 294:
                    report = report.height;
                    report = oscar + report;
                    oscar = tango.height;
                    tango = _closure1_slot17;
                    tango = oscar - tango;
                    zulu = report >= tango;
 323:
                    if(!zulu) { _fun00028_ip = 334; continue _fun00027 }
 326:
                    mike = _closure2_slot13;
                    mike = mike.bind(entity)();
 334:
                    return entity;
                }
            };
            report['onScroll'] = romeo;
            romeo = 16;
            report['scrollEventThrottle'] = romeo;
            romeo = function(argFoo) { // Original name: keyExtractor
                entity = argFoo;
                entity = entity.id;
                return entity;
            };
            report['keyExtractor'] = romeo;
            romeo = null;
            if(!foxtrot) { _fun00008_ip = 917; continue _fun00007 }
 907:
            foxtrot = {};
            foxtrot['minIndexForVisible'] = backup;
            romeo = foxtrot;
 917:
            report['maintainVisibleContentPosition'] = romeo;
            romeo = function(argFoo) { // Original name: renderItem
                _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                    entity = argFoo;
                    golf = entity.item;
                    var _closure3_slot0 = golf;
                    oscar = entity.section;
                    var _closure3_slot1 = oscar;
                    tango = undefined;
                    var _closure3_slot2 = tango;
                    zulu = golf.inputType;
                    report = _closure1_slot0;
                    options = _closure1_slot3;
                    mike = 20;
                    mike = options[mike];
                    mike = report.bind(tango)(mike);
                    mike = mike.ApplicationCommandInputType;
                    mike = mike.PLACEHOLDER;
                    if(!(zulu !== mike)) { _fun00030_ip = 180; continue _fun00029 }
 74:
                    report = _closure2_slot8;
                    zulu = report.find;
                    mike = function(argFoo) {
                        entity = argFoo;
                        mike = entity.id;
                        entity = _closure3_slot0;
                        entity = entity.applicationId;
                        entity = mike === entity;
                        return entity;
                    };
                    options = zulu.bind(report)(mike);
                    _closure3_slot2 = options;
                    report = _closure1_slot14;
                    zulu = _closure1_slot1;
                    offset = _closure1_slot3;
                    mike = 22;
                    mike = offset[mike];
                    zulu = zulu.bind(tango)(mike);
                    mike = {};
                    mike['command'] = golf;
                    verify = function() { // Original name: onPress
                        _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                            zulu = _closure2_slot0;
                            entity = null;
                            zulu = entity == zulu;
                            oscar = undefined;
                            entity = undefined;
                            if(zulu) { _fun00032_ip = 51; continue _fun00031 }
 20:
                            report = _closure2_slot0;
                            tango = _closure3_slot0;
                            zulu = _closure3_slot2;
                            mike = _closure3_slot1;
                            mike = mike.section;
                            entity = report.bind(oscar)(tango, zulu, mike);
 51:
                            return entity;
                        }
                    };
                    mike['onPress'] = verify;
                    mike['section'] = options;
                    golf = golf.applicationId;
                    oscar = oscar.section;
                    oscar = oscar.id;
                    oscar = golf !== oscar;
                    mike['showIcon'] = oscar;
                    mike = report.bind(tango)(zulu, mike);
                    return mike;
 180:
                    zulu = _closure1_slot14;
                    mike = _closure1_slot1;
                    report = _closure1_slot3;
                    entity = 21;
                    entity = report[entity];
                    mike = mike.bind(tango)(entity);
                    entity = {};
                    entity = zulu.bind(tango)(mike, entity);
                    return entity;
                }
            };
            report['renderItem'] = romeo;
            yankee = function(argFoo) { // Original name: renderSectionHeader
                _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
                    entity = argFoo;
                    backup = entity.section;
                    tango = _closure1_slot16;
                    zulu = _closure1_slot15;
                    mike = {};
                    options = _closure1_slot14;
                    oscar = _closure1_slot1;
                    report = _closure1_slot3;
                    entity = 8;
                    report = report[entity];
                    entity = undefined;
                    golf = oscar.bind(entity)(report);
                    oscar = {};
                    report = backup.section;
                    oscar['section'] = report;
                    report = backup.section;
                    report = report.id;
                    oscar = options.bind(entity)(golf, oscar, report);
                    report = new Array(2);
                    report[0] = oscar;
                    oscar = backup.data;
                    golf = oscar.length;
                    oscar = 0;
                    oscar = oscar === golf;
                    if(!oscar) { _fun00034_ip = 278; continue _fun00033 }
 105:
                    verify = _closure1_slot14;
                    yankee = _closure1_slot0;
                    kilo = _closure1_slot3;
                    golf = 23;
                    golf = kilo[golf];
                    golf = yankee.bind(entity)(golf);
                    options = golf.ThemedEmptyState;
                    golf = {};
                    romeo = _closure1_slot1;
                    offset = 24;
                    foxtrot = kilo[offset];
                    foxtrot = romeo.bind(entity)(foxtrot);
                    golf['lightSource'] = foxtrot;
                    offset = kilo[offset];
                    offset = romeo.bind(entity)(offset);
                    golf['darkSource'] = offset;
                    offset = 16;
                    romeo = kilo[offset];
                    romeo = yankee.bind(entity)(romeo);
                    foxtrot = romeo.intl;
                    romeo = foxtrot.format;
                    offset = kilo[offset];
                    offset = yankee.bind(entity)(offset);
                    offset = offset.t;
                    yankee = offset.WoQXT0;
                    offset = {};
                    backup = backup.section;
                    backup = backup.name;
                    offset['applicationName'] = backup;
                    offset = romeo.bind(foxtrot)(yankee, offset);
                    golf['body'] = offset;
                    offset = _closure2_slot2;
                    yankee = offset.noCommandsContainer;
                    golf['containerStyle'] = yankee;
                    offset = offset.noCommandsImage;
                    golf['imageStyle'] = offset;
                    oscar = verify.bind(entity)(options, golf);
 278:
                    report[1] = oscar;
                    mike['children'] = report;
                    entity = tango.bind(entity)(zulu, mike);
                    return entity;
                }
            };
            report['renderSectionHeader'] = yankee;
            report['getItemLayout'] = offset;
            report['stickySectionHeadersEnabled'] = verify;
            golf = options.bind(tango)(golf, report);
            report = new Array(2);
            report[0] = golf;
            report[1] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();