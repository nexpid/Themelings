// app/stores/SearchAutocompleteStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    options = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = options;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot6;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot5;
            entity = _closure1_slot23;
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
            report = _closure1_slot6;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 92:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot22 = entity;
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
 72: // try_end0
            _fun00004_ip = 76; continue _fun00003;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot23 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot23 = entity;
    entity = function(argFoo) { // Original name: stateFactory
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            offset = entity.searchId;
            verify = entity.query;
            oscar = entity.mode;
            tango = entity.tokens;
            report = entity.cursorScope;
            mike = entity.autocompletes;
            entity = _closure1_slot18;
            entity = entity[offset];
            zulu = null;
            if(!(zulu == entity)) { _fun00006_ip = 125; continue _fun00005 }
 54:
            golf = {};
            entity = new Array(0);
            golf['results'] = entity;
            romeo = _closure1_slot1;
            yankee = _closure1_slot2;
            entity = 10;
            yankee = yankee[entity];
            entity = undefined;
            romeo = romeo.bind(entity)(yankee);
            yankee = romeo.getSearchContext;
            foxtrot = _closure1_slot25;
            entity = foxtrot.bind;
            entity = entity.bind(foxtrot)(zulu, offset);
            entity = yankee.bind(romeo)(entity);
            golf['context'] = entity;
            entity = _closure1_slot18;
            entity[offset] = golf;
 125:
            entity = {};
            offset = zulu != verify;
            golf = '';
            if(!offset) { _fun00006_ip = 141; continue _fun00005 }
 138:
            golf = verify;
 141:
            entity['query'] = golf;
            if(!(zulu == oscar)) { _fun00006_ip = 178; continue _fun00005 }
 149:
            golf = {'type': null, 'filter': null, 'token': null};
            options = _closure1_slot12;
            options = options.EMPTY;
            golf['type'] = options;
            oscar = golf;
 178:
            entity['mode'] = oscar;
            if(!(zulu == tango)) { _fun00006_ip = 190; continue _fun00005 }
 186:
            tango = new Array(0);
 190:
            entity['tokens'] = tango;
            oscar = zulu != report;
            tango = null;
            if(!oscar) { _fun00006_ip = 207; continue _fun00005 }
 204:
            tango = report;
 207:
            entity['cursorScope'] = tango;
            if(!(zulu == mike)) { _fun00006_ip = 220; continue _fun00005 }
 216:
            mike = new Array(0);
 220:
            entity['autocompletes'] = mike;
            return entity;
        }
    };
    var _closure1_slot24 = entity;
    entity = function(argFoo, argBar) { // Original name: handleUserSearchResults
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            tango = argFoo;
            entity = argBar;
            options = entity.results;
            mike = _closure1_slot18;
            report = mike[tango];
            mike = _closure1_slot17;
            mike = mike[tango];
            zulu = null;
            if(!(zulu != report)) { _fun00008_ip = 278; continue _fun00007 }
 40:
            if(!(zulu != mike)) { _fun00008_ip = 278; continue _fun00007 }
 47:
            zulu = mike.mode;
            golf = zulu.type;
            oscar = zulu.filter;
            zulu = _closure1_slot12;
            zulu = zulu.EMPTY;
            if(!(golf !== zulu)) { _fun00008_ip = 278; continue _fun00007 }
 79:
            zulu = _closure1_slot12;
            zulu = zulu.FILTER;
            if(!(golf === zulu)) { _fun00008_ip = 124; continue _fun00007 }
 93:
            zulu = _closure1_slot14;
            zulu = zulu.FILTER_FROM;
            if(!(oscar !== zulu)) { _fun00008_ip = 124; continue _fun00007 }
 107:
            zulu = _closure1_slot14;
            zulu = zulu.FILTER_MENTIONS;
            if(!(oscar === zulu)) { _fun00008_ip = 278; continue _fun00007 }
 124:
            golf = _closure1_slot20;
            zulu = mike.mode;
            oscar = zulu.type;
            zulu = _closure1_slot12;
            zulu = zulu.FILTER;
            if(!(oscar === zulu)) { _fun00008_ip = 156; continue _fun00007 }
 152:
            golf = _closure1_slot19;
 156:
            zulu = function(argFoo) { // Original name: fixUserResults
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    report = argFoo;
                    mike = arguments[1];
                    entity = undefined;
                    if(!(mike === entity)) { _fun00010_ip = 19; continue _fun00009 }
 12:
                    mike = _closure1_slot19;
 19:
                    tango = report.reduce;
                    zulu = function(argFoo, argBar) {
                        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                            entity = argFoo;
                            tango = _closure1_slot11;
                            zulu = tango.getUser;
                            mike = argBar;
                            mike = mike.id;
                            tango = zulu.bind(tango)(mike);
                            mike = null;
                            if(!(mike != tango)) { _fun00012_ip = 97; continue _fun00011 }
 35:
                            zulu = entity.push;
                            mike = {};
                            oscar = tango.id;
                            mike['id'] = oscar;
                            golf = _closure1_slot1;
                            oscar = _closure1_slot2;
                            report = 11;
                            oscar = oscar[report];
                            report = undefined;
                            oscar = golf.bind(report)(oscar);
                            report = oscar.getUserTag;
                            report = report.bind(oscar)(tango);
                            mike['text'] = report;
                            mike['user'] = tango;
                            mike = zulu.bind(entity)(mike);
 97:
                            return entity;
                        }
                    };
                    entity = new Array(0);
                    entity = tango.bind(report)(zulu, entity);
                    zulu = entity.length;
                    if(!(zulu > mike)) { _fun00010_ip = 59; continue _fun00009 }
 53:
                    entity['length'] = mike;
 59:
                    return entity;
                }
            };
            oscar = undefined;
            zulu = zulu.bind(oscar)(options, golf);
            report['results'] = zulu;
            yankee = mike.query;
            offset = mike.mode;
            verify = mike.tokens;
            options = mike.cursorScope;
            mike = mike.autocompletes;
            mike = _closure1_slot29;
            golf = mike.bind(oscar)(tango, offset);
            zulu = _closure1_slot17;
            report = _closure1_slot24;
            mike = {};
            mike['searchId'] = tango;
            mike['query'] = yankee;
            mike['mode'] = offset;
            mike['tokens'] = verify;
            mike['cursorScope'] = options;
            mike['autocompletes'] = golf;
            mike = report.bind(oscar)(mike);
            zulu[tango] = mike;
            mike = _closure1_slot21;
            entity = mike.emitChange;
            entity = entity.bind(mike)();
 278:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot25 = entity;
    entity = function(argFoo, argBar, argBaz) { // Original name: generateFilterResults
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            report = argFoo;
            verify = argBar;
            backup = argBaz;
            offset = arguments[3];
            romeo = undefined;
            if(!(offset === romeo)) { _fun00014_ip = 27; continue _fun00013 }
 20:
            offset = _closure1_slot19;
 27:
            var _closure2_slot0 = romeo;
            entity = null;
            if(!(entity != report)) { _fun00014_ip = 620; continue _fun00013 }
 40:
            yankee = '';
            if(!(yankee !== report)) { _fun00014_ip = 620; continue _fun00013 }
 51:
            tango = _closure1_slot9;
            zulu = tango.getSearchType;
            oscar = zulu.bind(tango)(backup);
            zulu = entity == verify;
            tango = undefined;
            if(zulu) { _fun00014_ip = 107; continue _fun00013 }
 78:
            zulu = verify.getFullMatch;
            golf = zulu.bind(verify)();
            zulu = entity == golf;
            tango = undefined;
            if(zulu) { _fun00014_ip = 107; continue _fun00013 }
 97:
            zulu = golf.trim;
            tango = zulu.bind(golf)();
 107:
            golf = entity != tango;
            zulu = yankee;
            if(!golf) { _fun00014_ip = 120; continue _fun00013 }
 117:
            zulu = tango;
 120:
            tango = _closure1_slot14;
            tango = tango.FILTER_FROM;
            golf = report === tango;
            if(golf) { _fun00014_ip = 151; continue _fun00013 }
 137:
            tango = _closure1_slot14;
            tango = tango.FILTER_MENTIONS;
            golf = report === tango;
 151:
            tango = _closure1_slot15;
            tango = tango.GUILD;
            if(!(oscar === tango)) { _fun00014_ip = 168; continue _fun00013 }
 165:
            if(golf) { _fun00014_ip = 234; continue _fun00013 }
 168:
            oscar = _closure1_slot1;
            foxtrot = _closure1_slot2;
            tango = 15;
            tango = foxtrot[tango];
            tango = oscar.bind(romeo)(tango);
            oscar = tango[report];
            foxtrot = entity == oscar;
            tango = undefined;
            if(foxtrot) { _fun00014_ip = 207; continue _fun00013 }
 201:
            tango = oscar.getAutocompletions;
 207:
            if(!(entity == tango)) { _fun00014_ip = 217; continue _fun00013 }
 211:
            oscar = new Array(0);
            _fun00014_ip = 232; continue _fun00013;
 217:
            if(!(entity == offset)) { _fun00014_ip = 225; continue _fun00013 }
 221:
            offset = _closure1_slot19;
 225:
            oscar = tango.bind(romeo)(zulu, backup, offset);
 232:
            _fun00014_ip = 337; continue _fun00013;
 234:
            tango = _closure1_slot18;
            tango = tango[backup];
            offset = entity == tango;
            oscar = null;
            if(offset) { _fun00014_ip = 337; continue _fun00013 }
 251:
            verify = entity != verify;
            if(!verify) { _fun00014_ip = 269; continue _fun00013 }
 258:
            foxtrot = zulu.length;
            offset = 0;
            verify = offset !== foxtrot;
 269:
            if(verify) { _fun00014_ip = 331; continue _fun00013 }
 272:
            offset = _closure1_slot1;
            foxtrot = _closure1_slot2;
            verify = 14;
            verify = foxtrot[verify];
            foxtrot = offset.bind(romeo)(verify);
            offset = foxtrot.getRecentlyTalked;
            verify = _closure1_slot19;
            foxtrot = offset.bind(foxtrot)(backup, verify);
            offset = foxtrot.map;
            verify = function(argFoo) {
                entity = argFoo;
                tango = entity.record;
                entity = {};
                entity['user'] = tango;
                report = _closure1_slot1;
                zulu = _closure1_slot2;
                mike = 11;
                zulu = zulu[mike];
                mike = undefined;
                zulu = report.bind(mike)(zulu);
                mike = zulu.getUserTag;
                mike = mike.bind(zulu)(tango);
                entity['text'] = mike;
                return entity;
            };
            verify = offset.bind(foxtrot)(verify);
            tango['results'] = verify;
 331:
            oscar = tango.results;
 337:
            tango = zulu.toLowerCase;
            offset = tango.bind(zulu)();
            verify = offset.replace;
            tango = /^@/;
            verify = verify.bind(offset)(tango, yankee);
            tango = oscar;
            if(!(entity != tango)) { _fun00014_ip = 581; continue _fun00013 }
 382:
            tango = oscar;
            if(!golf) { _fun00014_ip = 581; continue _fun00013 }
 391:
            golf = zulu.length;
            zulu = 0;
            tango = oscar;
            if(!(golf > zulu)) { _fun00014_ip = 581; continue _fun00013 }
 408:
            yankee = _closure1_slot0;
            foxtrot = _closure1_slot2;
            zulu = 16;
            golf = foxtrot[zulu];
            golf = yankee.bind(romeo)(golf);
            offset = golf.intl;
            golf = offset.string;
            zulu = foxtrot[zulu];
            zulu = yankee.bind(romeo)(zulu);
            zulu = zulu.t;
            zulu = zulu.Qf3ptr;
            golf = golf.bind(offset)(zulu);
            zulu = golf.startsWith;
            zulu = zulu.bind(golf)(verify);
            if(zulu) { _fun00014_ip = 512; continue _fun00013 }
 477:
            offset = _closure1_slot16;
            golf = offset.substr;
            zulu = 1;
            golf = golf.bind(offset)(zulu);
            zulu = golf.startsWith;
            zulu = zulu.bind(golf)(verify);
            tango = oscar;
            if(!zulu) { _fun00014_ip = 581; continue _fun00013 }
 512:
            golf = _closure1_slot11;
            zulu = golf.getCurrentUser;
            golf = zulu.bind(golf)();
            _closure2_slot0 = golf;
            tango = oscar;
            if(!(entity != golf)) { _fun00014_ip = 581; continue _fun00013 }
 536:
            zulu = oscar.filter;
            mike = function(argFoo) {
                entity = argFoo;
                entity = entity.user;
                mike = entity.id;
                entity = _closure2_slot0;
                entity = entity.id;
                entity = mike !== entity;
                return entity;
            };
            mike = zulu.bind(oscar)(mike);
            oscar = mike.unshift;
            zulu = {};
            options = _closure1_slot16;
            zulu['text'] = options;
            zulu['user'] = golf;
            zulu = oscar.bind(mike)(zulu);
            tango = mike;
 581:
            zulu = entity == tango;
            mike = null;
            if(zulu) { _fun00014_ip = 618; continue _fun00013 }
 590:
            oscar = tango.length;
            zulu = 0;
            mike = null;
            if(!(zulu !== oscar)) { _fun00014_ip = 618; continue _fun00013 }
 603:
            zulu = {};
            zulu['group'] = report;
            zulu['results'] = tango;
            mike = zulu;
 618:
            return mike;
 620:
            return entity;
        }
    };
    var _closure1_slot26 = entity;
    entity = function(argFoo) { // Original name: generateSearchOptions
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            tango = argFoo;
            mike = null;
            mike = mike != tango;
            zulu = '';
            if(!mike) { _fun00016_ip = 28; continue _fun00015 }
 18:
            mike = tango.getFullMatch;
            zulu = mike.bind(tango)();
 28:
            mike = zulu.trim;
            report = mike.bind(zulu)();
            mike = {};
            tango = _closure1_slot14;
            oscar = tango.FILTER_FROM;
            tango = _closure1_slot10;
            tango = tango.hidePersonalInformation;
            tango = !tango;
            mike[oscar] = tango;
            tango = _closure1_slot14;
            oscar = tango.FILTER_MENTIONS;
            tango = _closure1_slot10;
            tango = tango.hidePersonalInformation;
            tango = !tango;
            mike[oscar] = tango;
            tango = _closure1_slot14;
            tango = tango.FILTER_HAS;
            oscar = true;
            mike[tango] = oscar;
            tango = _closure1_slot14;
            tango = tango.FILTER_BEFORE;
            mike[tango] = oscar;
            tango = _closure1_slot14;
            tango = tango.FILTER_AFTER;
            mike[tango] = oscar;
            tango = _closure1_slot14;
            tango = tango.FILTER_ON;
            mike[tango] = oscar;
            tango = _closure1_slot14;
            oscar = tango.FILTER_IN;
            golf = _closure1_slot9;
            tango = golf.getSearchType;
            golf = tango.bind(golf)();
            tango = _closure1_slot15;
            tango = tango.GUILD;
            tango = golf === tango;
            mike[oscar] = tango;
            tango = _closure1_slot14;
            oscar = tango.FILTER_PINNED;
            tango = false;
            mike[oscar] = tango;
            var _closure2_slot0 = mike;
            oscar = _closure1_slot0;
            tango = _closure1_slot2;
            mike = 15;
            tango = tango[mike];
            mike = undefined;
            tango = oscar.bind(mike)(tango);
            mike = tango.getFilterAutocompletions;
            tango = mike.bind(tango)(report);
            mike = tango.filter;
            entity = function(argFoo) {
                mike = _closure2_slot0;
                entity = argFoo;
                entity = entity.token;
                entity = mike[entity];
                return entity;
            };
            mike = mike.bind(tango)(entity);
            entity = {};
            zulu = _closure1_slot13;
            zulu = zulu.SEARCH_OPTIONS;
            entity['group'] = zulu;
            entity['results'] = mike;
            return entity;
        }
    };
    var _closure1_slot27 = entity;
    entity = function(argFoo, argBar) { // Original name: generateGlobalResults
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            report = argFoo;
            backup = argBar;
            var _closure2_slot0 = report;
            var _closure2_slot1 = backup;
            tango = null;
            entity = tango != report;
            oscar = '';
            zulu = oscar;
            if(!entity) { _fun00018_ip = 42; continue _fun00017 }
 32:
            entity = report.getFullMatch;
            zulu = entity.bind(report)();
 42:
            entity = zulu.trim;
            golf = entity.bind(zulu)();
            entity = new Array(0);
            var _closure2_slot2 = entity;
            zulu = tango != golf;
            if(!zulu) { _fun00018_ip = 71; continue _fun00017 }
 67:
            zulu = oscar !== golf;
 71:
            if(!zulu) { _fun00018_ip = 522; continue _fun00017 }
 77:
            options = _closure1_slot9;
            zulu = options.getSearchType;
            verify = zulu.bind(options)(backup);
            zulu = _closure1_slot14;
            zulu = zulu.FILTER_HAS;
            options = new Array(1);
            options[0] = zulu;
            zulu = _closure1_slot10;
            zulu = zulu.hidePersonalInformation;
            if(zulu) { _fun00018_ip = 166; continue _fun00017 }
 126:
            offset = options.push;
            zulu = _closure1_slot14;
            zulu = zulu.FILTER_FROM;
            zulu = offset.bind(options)(zulu);
            offset = options.push;
            zulu = _closure1_slot14;
            zulu = zulu.FILTER_MENTIONS;
            zulu = offset.bind(options)(zulu);
 166:
            zulu = _closure1_slot15;
            zulu = zulu.GUILD;
            if(!(verify === zulu)) { _fun00018_ip = 200; continue _fun00017 }
 180:
            verify = options.push;
            zulu = _closure1_slot14;
            zulu = zulu.FILTER_IN;
            zulu = verify.bind(options)(zulu);
 200:
            zulu = options.forEach;
            mike = function(argFoo) {
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    options = argFoo;
                    mike = null;
                    if(!(mike != options)) { _fun00020_ip = 58; continue _fun00019 }
 9:
                    golf = _closure1_slot26;
                    yankee = _closure2_slot0;
                    offset = _closure2_slot1;
                    verify = _closure1_slot20;
                    foxtrot = undefined;
                    romeo = options;
                    zulu = foxtrot[golf](romeo, yankee, offset, verify, options);
                    if(!(mike != zulu)) { _fun00020_ip = 58; continue _fun00019 }
 44:
                    mike = _closure2_slot2;
                    entity = mike.push;
                    entity = entity.bind(mike)(zulu);
 58:
                    entity = undefined;
                    return entity;
                }
            };
            mike = zulu.bind(options)(mike);
            zulu = entity.push;
            mike = tango != report;
            options = oscar;
            if(!mike) { _fun00018_ip = 242; continue _fun00017 }
 232:
            mike = report.getFullMatch;
            options = mike.bind(report)();
 242:
            mike = options.trim;
            foxtrot = mike.bind(options)();
            verify = tango != foxtrot;
            options = undefined;
            mike = undefined;
            if(!verify) { _fun00018_ip = 517; continue _fun00017 }
 266:
            mike = undefined;
            if(!(oscar !== foxtrot)) { _fun00018_ip = 517; continue _fun00017 }
 275:
            verify = _closure1_slot1;
            oscar = _closure1_slot2;
            romeo = 15;
            oscar = oscar[romeo];
            verify = verify.bind(options)(oscar);
            oscar = _closure1_slot14;
            oscar = oscar.FILTER_BEFORE;
            yankee = verify[oscar];
            oscar = tango == yankee;
            offset = undefined;
            if(oscar) { _fun00018_ip = 340; continue _fun00017 }
 318:
            verify = yankee.getAutocompletions;
            oscar = 1;
            verify = verify.bind(yankee)(foxtrot, backup, oscar);
            oscar = 0;
            offset = verify[oscar];
 340:
            verify = _closure1_slot1;
            oscar = _closure1_slot2;
            oscar = oscar[romeo];
            verify = verify.bind(options)(oscar);
            oscar = _closure1_slot14;
            oscar = oscar.FILTER_ON;
            kilo = verify[oscar];
            oscar = tango == kilo;
            verify = undefined;
            if(oscar) { _fun00018_ip = 402; continue _fun00017 }
 380:
            yankee = kilo.getAutocompletions;
            oscar = 1;
            yankee = yankee.bind(kilo)(foxtrot, backup, oscar);
            oscar = 0;
            verify = yankee[oscar];
 402:
            yankee = _closure1_slot1;
            oscar = _closure1_slot2;
            oscar = oscar[romeo];
            yankee = yankee.bind(options)(oscar);
            oscar = _closure1_slot14;
            oscar = oscar.FILTER_AFTER;
            romeo = yankee[oscar];
            oscar = tango == romeo;
            options = undefined;
            if(oscar) { _fun00018_ip = 464; continue _fun00017 }
 442:
            yankee = romeo.getAutocompletions;
            oscar = 1;
            yankee = yankee.bind(romeo)(foxtrot, backup, oscar);
            oscar = 0;
            options = yankee[oscar];
 464:
            oscar = tango == offset;
            tango = null;
            if(oscar) { _fun00018_ip = 514; continue _fun00017 }
 473:
            oscar = {};
            golf = _closure1_slot13;
            golf = golf.DATES;
            oscar['group'] = golf;
            golf = new Array(3);
            golf[0] = offset;
            golf[1] = verify;
            golf[2] = options;
            oscar['results'] = golf;
            tango = oscar;
 514:
            mike = tango;
 517:
            mike = zulu.bind(entity)(mike);
 522:
            oscar = _closure1_slot0;
            tango = _closure1_slot2;
            zulu = 12;
            zulu = tango[zulu];
            tango = undefined;
            oscar = oscar.bind(tango)(zulu);
            zulu = oscar.getTotalResults;
            oscar = zulu.bind(oscar)(entity);
            zulu = 5;
            if(!(oscar < zulu)) { _fun00018_ip = 584; continue _fun00017 }
 565:
            zulu = entity.push;
            mike = _closure1_slot27;
            mike = mike.bind(tango)(report);
            mike = zulu.bind(entity)(mike);
 584:
            return entity;
        }
    };
    var _closure1_slot28 = entity;
    entity = function(argFoo, argBar) { // Original name: getAutocompleteList
        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
            verify = argFoo;
            report = argBar;
            mike = new Array(0);
            tango = report.type;
            entity = _closure1_slot12;
            entity = entity.FILTER;
            if(!(tango !== entity)) { _fun00022_ip = 125; continue _fun00021 }
 32:
            tango = report.type;
            entity = _closure1_slot12;
            entity = entity.FILTER_ALL;
            if(!(tango !== entity)) { _fun00022_ip = 105; continue _fun00021 }
 51:
            oscar = report.type;
            entity = _closure1_slot12;
            tango = entity.EMPTY;
            entity = mike;
            if(!(oscar === tango)) { _fun00022_ip = 166; continue _fun00021 }
 73:
            oscar = mike.push;
            options = _closure1_slot27;
            golf = report.token;
            tango = undefined;
            tango = options.bind(tango)(golf);
            tango = oscar.bind(mike)(tango);
            entity = mike;
            _fun00022_ip = 166; continue _fun00021;
 105:
            golf = _closure1_slot28;
            oscar = report.token;
            tango = undefined;
            entity = golf.bind(tango)(oscar, verify);
            _fun00022_ip = 166; continue _fun00021;
 125:
            tango = mike.push;
            options = _closure1_slot26;
            foxtrot = report.filter;
            romeo = report.token;
            offset = _closure1_slot19;
            backup = undefined;
            yankee = verify;
            zulu = backup[options](foxtrot, romeo, yankee, offset, verify);
            zulu = tango.bind(mike)(zulu);
            entity = mike;
 166:
            return entity;
        }
    };
    var _closure1_slot29 = entity;
    offset = function() { // Original name: handleChannelChange
        zulu = _closure1_slot0;
        mike = _closure1_slot2;
        entity = 12;
        mike = mike[entity];
        entity = undefined;
        zulu = zulu.bind(entity)(mike);
        mike = zulu.clearTokenCache;
        mike = mike.bind(zulu)();
        return entity;
    };
    entity = function(argFoo) { // Original name: removeHistoryFromResults
        _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
            zulu = argFoo;
            entity = _closure1_slot17;
            mike = entity[zulu];
            entity = null;
            if(!(entity != mike)) { _fun00024_ip = 116; continue _fun00023 }
 20:
            verify = mike.query;
            options = mike.mode;
            oscar = mike.tokens;
            entity = mike.cursorScope;
            golf = mike.autocompletes;
            mike = _closure1_slot17;
            report = _closure1_slot24;
            tango = {};
            tango['searchId'] = zulu;
            tango['query'] = verify;
            tango['mode'] = options;
            tango['tokens'] = oscar;
            tango['cursorScope'] = entity;
            oscar = golf.map;
            entity = function(argFoo) {
                _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                    mike = argFoo;
                    entity = null;
                    zulu = entity == mike;
                    tango = undefined;
                    if(zulu) { _fun00026_ip = 20; continue _fun00025 }
 14:
                    tango = mike.group;
 20:
                    zulu = _closure1_slot13;
                    zulu = zulu.HISTORY;
                    entity = null;
                    if(!(tango !== zulu)) { _fun00026_ip = 42; continue _fun00025 }
 39:
                    entity = mike;
 42:
                    return entity;
                }
            };
            entity = oscar.bind(golf)(entity);
            tango['autocompletes'] = entity;
            entity = undefined;
            entity = report.bind(entity)(tango);
            mike[zulu] = entity;
 116:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot30 = entity;
    golf = function() { // Original name: handleMiscActions
        _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
            zulu = _closure1_slot9;
            mike = zulu.getCurrentSearchId;
            zulu = mike.bind(zulu)();
            tango = null;
            if(!(tango != zulu)) { _fun00028_ip = 126; continue _fun00027 }
 25:
            mike = _closure1_slot17;
            mike = mike[zulu];
            if(!(tango != mike)) { _fun00028_ip = 126; continue _fun00027 }
 37:
            mike = _closure1_slot17;
            mike = mike[zulu];
            verify = mike.query;
            golf = mike.mode;
            options = mike.tokens;
            oscar = mike.cursorScope;
            mike = _closure1_slot17;
            report = _closure1_slot24;
            tango = {};
            tango['searchId'] = zulu;
            tango['query'] = verify;
            tango['mode'] = golf;
            tango['tokens'] = options;
            tango['cursorScope'] = oscar;
            oscar = _closure1_slot29;
            entity = undefined;
            oscar = oscar.bind(entity)(zulu, golf);
            tango['autocompletes'] = oscar;
            entity = report.bind(entity)(tango);
            mike[zulu] = entity;
 126:
            entity = undefined;
            return entity;
        }
    };
    entity = global;
    yankee = entity.Object;
    verify = yankee.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(yankee)(zulu, entity, mike);
    entity = 0;
    mike = oscar[entity];
    entity = undefined;
    mike = options.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = 1;
    mike = oscar[mike];
    mike = options.bind(entity)(mike);
    var _closure1_slot4 = mike;
    mike = 2;
    mike = oscar[mike];
    mike = options.bind(entity)(mike);
    var _closure1_slot5 = mike;
    mike = 3;
    verify = oscar[mike];
    verify = options.bind(entity)(verify);
    var _closure1_slot6 = verify;
    verify = 4;
    verify = oscar[verify];
    verify = options.bind(entity)(verify);
    var _closure1_slot7 = verify;
    verify = 5;
    verify = oscar[verify];
    verify = options.bind(entity)(verify);
    var _closure1_slot8 = verify;
    verify = 6;
    verify = oscar[verify];
    verify = options.bind(entity)(verify);
    var _closure1_slot9 = verify;
    verify = 7;
    verify = oscar[verify];
    verify = options.bind(entity)(verify);
    var _closure1_slot10 = verify;
    verify = 8;
    verify = oscar[verify];
    verify = options.bind(entity)(verify);
    var _closure1_slot11 = verify;
    verify = 9;
    verify = oscar[verify];
    verify = report.bind(entity)(verify);
    yankee = verify.SearchPopoutModes;
    var _closure1_slot12 = yankee;
    yankee = verify.SearchAutocompleteGroups;
    var _closure1_slot13 = yankee;
    yankee = verify.SearchTokenTypes;
    var _closure1_slot14 = yankee;
    yankee = verify.SearchTypes;
    var _closure1_slot15 = yankee;
    verify = verify.ME;
    var _closure1_slot16 = verify;
    verify = {};
    var _closure1_slot17 = verify;
    verify = {};
    var _closure1_slot18 = verify;
    verify = 10;
    var _closure1_slot19 = verify;
    var _closure1_slot20 = mike;
    mike = 17;
    mike = oscar[mike];
    mike = options.bind(entity)(mike);
    verify = mike.Store;
    mike = function(argFoo) {
        tango = function() { // Original name: SearchAutocompleteStoreClass
            report = this;
            tango = undefined;
            entity = undefined;
            oscar = _closure1_slot3;
            zulu = _closure2_slot0;
            oscar = oscar.bind(tango)(report, zulu);
            mike = _closure1_slot22;
            entity = arguments;
            entity = mike.bind(tango)(report, zulu, entity);
            return entity;
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot7;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot4;
        report = {};
        entity = 'initialize';
        report['key'] = entity;
        entity = function() { // Original name: value
            tango = this;
            zulu = tango.waitFor;
            mike = _closure1_slot8;
            entity = _closure1_slot10;
            entity = zulu.bind(tango)(mike, entity);
            entity = undefined;
            return entity;
        };
        report['value'] = entity;
        entity = new Array(2);
        entity[0] = report;
        report = {};
        golf = 'getState';
        report['key'] = golf;
        oscar = function(argFoo) { // Original name: value
            _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                mike = argFoo;
                entity = _closure1_slot17;
                entity = entity[mike];
                tango = null;
                if(!(tango == entity)) { _fun00030_ip = 38; continue _fun00029 }
 20:
                tango = _closure1_slot24;
                zulu = {};
                zulu['searchId'] = mike;
                mike = undefined;
                entity = tango.bind(mike)(zulu);
 38:
                return entity;
            }
        };
        report['value'] = oscar;
        entity[1] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    verify = mike.bind(entity)(verify);
    mike = 'SearchAutocompleteStore';
    verify['displayName'] = mike;
    mike = 18;
    mike = oscar[mike];
    backup = options.bind(entity)(mike);
    mike = {};
    yankee = function(argFoo) { // Original name: handleQueryUpdate
        _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
            entity = argFoo;
            tango = entity.searchId;
            verify = entity.tokens;
            options = entity.cursorScope;
            zulu = _closure1_slot0;
            report = _closure1_slot2;
            entity = 12;
            golf = report[entity];
            oscar = undefined;
            offset = zulu.bind(oscar)(golf);
            golf = offset.getQueryFromTokens;
            yankee = golf.bind(offset)(verify);
            entity = report[entity];
            zulu = zulu.bind(oscar)(entity);
            entity = zulu.getAutocompleteMode;
            offset = entity.bind(zulu)(options, verify);
            entity = _closure1_slot17;
            romeo = entity[tango];
            zulu = null;
            if(!(zulu == romeo)) { _fun00032_ip = 94; continue _fun00031 }
 92:
            romeo = {};
 94:
            entity = _closure1_slot18;
            report = entity[tango];
            entity = romeo.query;
            if(!(yankee === entity)) { _fun00032_ip = 152; continue _fun00031 }
 111:
            entity = romeo.mode;
            if(!(zulu != entity)) { _fun00032_ip = 139; continue _fun00031 }
 120:
            entity = romeo.mode;
            golf = entity.filter;
            entity = offset.filter;
            if(!(golf === entity)) { _fun00032_ip = 152; continue _fun00031 }
 139:
            golf = romeo.autocompletes;
            entity = false;
            _fun00032_ip = 472; continue _fun00031;
 152:
            backup = offset.type;
            foxtrot = _closure1_slot12;
            foxtrot = foxtrot.EMPTY;
            if(!(backup !== foxtrot)) { _fun00032_ip = 431; continue _fun00031 }
 174:
            backup = offset.type;
            foxtrot = _closure1_slot12;
            foxtrot = foxtrot.FILTER;
            if(!(backup === foxtrot)) { _fun00032_ip = 234; continue _fun00031 }
 193:
            backup = offset.filter;
            foxtrot = _closure1_slot14;
            foxtrot = foxtrot.FILTER_FROM;
            if(!(backup !== foxtrot)) { _fun00032_ip = 234; continue _fun00031 }
 212:
            backup = offset.filter;
            foxtrot = _closure1_slot14;
            foxtrot = foxtrot.FILTER_MENTIONS;
            if(!(backup === foxtrot)) { _fun00032_ip = 431; continue _fun00031 }
 234:
            backup = zulu != report;
            golf = undefined;
            entity = true;
            if(!backup) { _fun00032_ip = 472; continue _fun00031 }
 248:
            backup = offset.token;
            if(!(zulu != backup)) { _fun00032_ip = 289; continue _fun00031 }
 258:
            kilo = backup.getFullMatch;
            sizing = kilo.bind(backup)();
            kilo = sizing.trim;
            kilo = kilo.bind(sizing)();
            sizing = kilo.length;
            kilo = 0;
            if(!(!(sizing > kilo))) { _fun00032_ip = 321; continue _fun00031 }
 289:
            sizing = report.context;
            kilo = sizing.clearQuery;
            kilo = kilo.bind(sizing)();
            kilo = _closure1_slot29;
            golf = kilo.bind(oscar)(tango, offset);
            entity = true;
            _fun00032_ip = 472; continue _fun00031;
 321:
            kilo = _closure1_slot1;
            sizing = _closure1_slot2;
            foxtrot = 13;
            foxtrot = sizing[foxtrot];
            output = kilo.bind(oscar)(foxtrot);
            sizing = output.requestMembers;
            foxtrot = backup.getFullMatch;
            kilo = foxtrot.bind(backup)();
            foxtrot = kilo.trim;
            kilo = foxtrot.bind(kilo)();
            foxtrot = _closure1_slot19;
            foxtrot = sizing.bind(output)(tango, kilo, foxtrot);
            sizing = report.context;
            kilo = sizing.setQuery;
            foxtrot = backup.getFullMatch;
            backup = foxtrot.bind(backup)();
            foxtrot = backup.trim;
            backup = foxtrot.bind(backup)();
            foxtrot = {};
            foxtrot['guild'] = tango;
            foxtrot = kilo.bind(sizing)(backup, foxtrot);
            golf = romeo.autocompletes;
            entity = false;
            _fun00032_ip = 472; continue _fun00031;
 431:
            if(!(zulu != report)) { _fun00032_ip = 460; continue _fun00031 }
 435:
            romeo = report.context;
            zulu = romeo.clearQuery;
            zulu = zulu.bind(romeo)();
            zulu = new Array(0);
            report['results'] = zulu;
 460:
            zulu = _closure1_slot29;
            golf = zulu.bind(oscar)(tango, offset);
            entity = true;
 472:
            zulu = _closure1_slot17;
            report = _closure1_slot24;
            mike = {};
            mike['searchId'] = tango;
            mike['query'] = yankee;
            mike['mode'] = offset;
            mike['tokens'] = verify;
            mike['cursorScope'] = options;
            mike['autocompletes'] = golf;
            mike = report.bind(oscar)(mike);
            zulu[tango] = mike;
            return entity;
        }
    };
    mike['SEARCH_AUTOCOMPLETE_QUERY_UPDATE'] = yankee;
    yankee = function(argFoo) { // Original name: clearSearchState
        _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
            entity = argFoo;
            mike = entity.searchId;
            zulu = _closure1_slot18;
            tango = zulu[mike];
            zulu = null;
            if(!(zulu != tango)) { _fun00034_ip = 59; continue _fun00033 }
 26:
            report = tango.context;
            zulu = report.destroy;
            zulu = zulu.bind(report)();
            zulu = new Array(0);
            tango['results'] = zulu;
            zulu = _closure1_slot18;
            zulu = delete zulu[mike];
 59:
            entity = _closure1_slot17;
            entity = delete entity[mike];
            entity = undefined;
            return entity;
        }
    };
    mike['SEARCH_EDITOR_STATE_CLEAR'] = yankee;
    mike['CHANNEL_CREATE'] = offset;
    mike['CHANNEL_DELETE'] = offset;
    mike['STREAMER_MODE_UPDATE'] = golf;
    mike['SEARCH_SCREEN_OPEN'] = golf;
    golf = function(argFoo) { // Original name: handleClearHistory
        _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
            entity = argFoo;
            zulu = entity.searchId;
            entity = null;
            if(!(entity == zulu)) { _fun00036_ip = 56; continue _fun00035 }
 15:
            entity = global;
            report = entity.Object;
            tango = report.keys;
            mike = _closure1_slot17;
            tango = tango.bind(report)(mike);
            mike = tango.forEach;
            entity = _closure1_slot30;
            entity = mike.bind(tango)(entity);
            _fun00036_ip = 70; continue _fun00035;
 56:
            mike = _closure1_slot30;
            entity = undefined;
            entity = mike.bind(entity)(zulu);
 70:
            entity = undefined;
            return entity;
        }
    };
    mike['SEARCH_CLEAR_HISTORY'] = golf;
    golf = function() { // Original name: handleLogOut
        entity = global;
        tango = entity.Object;
        zulu = tango.keys;
        mike = _closure1_slot17;
        zulu = zulu.bind(tango)(mike);
        mike = zulu.forEach;
        entity = _closure1_slot30;
        entity = mike.bind(zulu)(entity);
        entity = undefined;
        return entity;
    };
    mike['LOGOUT'] = golf;
    golf = verify.prototype;
    golf = Object.create(golf, {constructor: {value: verify}});
    kilo = golf;
    foxtrot = mike;
    mike = new kilo[verify](backup, foxtrot, romeo);
    mike = mike instanceof Object ? mike : golf;
    var _closure1_slot21 = mike;
    tango = 19;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'stores/SearchAutocompleteStore.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();