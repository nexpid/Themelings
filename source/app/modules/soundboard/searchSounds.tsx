// app/modules/soundboard/searchSounds.tsx
export default (function(argFoo, argBar, argBaz, argCorge, argGrault, argFred, argPlugh) {
    options = argBar;
    romeo = argBaz;
    zulu = argFred;
    verify = argPlugh;
    var _closure1_slot0 = options;
    var _closure1_slot1 = romeo;
    var _closure1_slot2 = verify;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun65517: for(var _fun65517_ip = 0; ; ) switch(_fun65517_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun65517_ip = 46; continue _fun65517 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun65517_ip = 55; continue _fun65517 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun65517_ip = 343; continue _fun65517 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun65517_ip = 323; continue _fun65517 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun65517_ip = 283; continue _fun65517 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun65517_ip = 270; continue _fun65517 }
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
            if(!golf) { _fun65517_ip = 163; continue _fun65517 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun65517_ip = 179; continue _fun65517 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun65517_ip = 249; continue _fun65517 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun65517_ip = 249; continue _fun65517 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun65517_ip = 234; continue _fun65517 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun65517_ip = 247; continue _fun65517 }
 234:
            verify = _closure1_slot19;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun65517_ip = 265; continue _fun65517;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun65517_ip = 283; continue _fun65517;
 270:
            golf = _closure1_slot19;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun65517_ip = 323; continue _fun65517 }
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
            if(!tango) { _fun65517_ip = 330; continue _fun65517 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun65518: for(var _fun65518_ip = 0; ; ) switch(_fun65518_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun65518_ip = 56; continue _fun65518 }
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
                    _fun65518_ip = 67; continue _fun65518;
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
 343:
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
        _fun65519: for(var _fun65519_ip = 0; ; ) switch(_fun65519_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun65519_ip = 23; continue _fun65519 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun65519_ip = 33; continue _fun65519 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun65519_ip = 70; continue _fun65519 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun65519_ip = 55; continue _fun65519 }
 70:
            return entity;
        }
    };
    var _closure1_slot19 = entity;
    oscar = function(argFoo, argBar) { // Original name: trackSearchStart
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 3;
        mike = mike[entity];
        entity = undefined;
        report = zulu.bind(entity)(mike);
        tango = report.track;
        mike = _closure1_slot4;
        zulu = mike.SEARCH_STARTED;
        mike = {};
        golf = argBar;
        mike['channel_id'] = golf;
        oscar = _closure1_slot5;
        oscar = oscar.SOUNDBOARD;
        mike['search_type'] = oscar;
        oscar = argFoo;
        mike['location_stack'] = oscar;
        mike = tango.bind(report)(zulu, mike);
        return entity;
    };
    report = function(argFoo, argBar, argBaz, argCorge) { // Original name: trackSearchResultViewed
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 3;
        mike = mike[entity];
        entity = undefined;
        report = zulu.bind(entity)(mike);
        tango = report.track;
        mike = _closure1_slot4;
        zulu = mike.SEARCH_RESULT_VIEWED;
        mike = {};
        oscar = _closure1_slot5;
        oscar = oscar.SOUNDBOARD;
        mike['search_type'] = oscar;
        oscar = argBaz;
        mike['channel_id'] = oscar;
        oscar = argCorge;
        mike['query'] = oscar;
        oscar = argFoo;
        oscar = oscar.length;
        mike['total_results'] = oscar;
        oscar = argBar;
        mike['location_stack'] = oscar;
        mike = tango.bind(report)(zulu, mike);
        return entity;
    };
    tango = function(argFoo, argBar, argBaz, argCorge, argGrault) { // Original name: searchSounds
        _fun65522: for(var _fun65522_ip = 0; ; ) switch(_fun65522_ip) {
 0:
            oscar = argFoo;
            tango = argBar;
            golf = argCorge;
            report = argGrault;
            var _closure2_slot0 = oscar;
            mike = argBaz;
            var _closure2_slot1 = mike;
            var _closure2_slot2 = golf;
            var _closure2_slot3 = report;
            options = tango.reduce;
            zulu = function(argFoo, argBar) {
                _fun65523: for(var _fun65523_ip = 0; ; ) switch(_fun65523_ip) {
 0:
                    entity = argFoo;
                    options = argBar;
                    report = _closure1_slot16;
                    tango = _closure2_slot3;
                    oscar = _closure2_slot2;
                    zulu = null;
                    oscar = zulu == oscar;
                    golf = undefined;
                    zulu = undefined;
                    if(oscar) { _fun65523_ip = 46; continue _fun65523 }
 37:
                    oscar = _closure2_slot2;
                    zulu = oscar.id;
 46:
                    zulu = report.bind(golf)(tango, zulu);
                    zulu = options.soundId;
                    report = _closure2_slot0;
                    tango = report.toLocaleLowerCase;
                    romeo = tango.bind(report)();
                    offset = _closure2_slot1;
                    verify = _closure2_slot2;
                    mike = function(argFoo, argBar, argBaz, argCorge) { // Original name: getScore
                        _fun65524: for(var _fun65524_ip = 0; ; ) switch(_fun65524_ip) {
 0:
                            offset = argFoo;
                            options = argBar;
                            var _closure4_slot0 = offset;
                            mike = options.name;
                            entity = mike.toLocaleLowerCase;
                            tango = entity.bind(mike)();
                            entity = options.emojiId;
                            mike = null;
                            report = mike != entity;
                            entity = null;
                            if(!report) { _fun65524_ip = 68; continue _fun65524 }
 44:
                            golf = _closure1_slot3;
                            oscar = golf.getCustomEmojiById;
                            report = options.emojiId;
                            entity = oscar.bind(golf)(report);
 68:
                            report = options.emojiName;
                            report = mike != report;
                            verify = null;
                            if(!report) { _fun65524_ip = 128; continue _fun65524 }
 83:
                            golf = _closure1_slot1;
                            oscar = _closure1_slot2;
                            report = 4;
                            oscar = oscar[report];
                            report = undefined;
                            yankee = golf.bind(report)(oscar);
                            golf = yankee.convertSurrogateToName;
                            oscar = options.emojiName;
                            report = false;
                            verify = golf.bind(yankee)(oscar, report);
 128:
                            oscar = mike != verify;
                            report = null;
                            if(!oscar) { _fun65524_ip = 173; continue _fun65524 }
 137:
                            yankee = _closure1_slot1;
                            golf = _closure1_slot2;
                            oscar = 4;
                            golf = golf[oscar];
                            oscar = undefined;
                            golf = yankee.bind(oscar)(golf);
                            oscar = golf.getByName;
                            report = oscar.bind(golf)(verify);
 173:
                            if(!(mike == entity)) { _fun65524_ip = 201; continue _fun65524 }
 177:
                            oscar = mike == report;
                            golf = undefined;
                            if(oscar) { _fun65524_ip = 191; continue _fun65524 }
 186:
                            golf = report.names;
 191:
                            if(!(mike == golf)) { _fun65524_ip = 199; continue _fun65524 }
 195:
                            golf = new Array(0);
 199:
                            _fun65524_ip = 217; continue _fun65524;
 201:
                            mike = entity.name;
                            entity = new Array(1);
                            entity[0] = mike;
                            golf = entity;
 217:
                            entity = 0;
                            oscar = 0;
                            if(!(offset === tango)) { _fun65524_ip = 236; continue _fun65524 }
 225:
                            mike = _closure1_slot7;
                            oscar = entity + mike;
 236:
                            mike = golf.includes;
                            mike = mike.bind(golf)(offset);
                            report = oscar;
                            if(!mike) { _fun65524_ip = 263; continue _fun65524 }
 252:
                            mike = _closure1_slot8;
                            report = oscar + mike;
 263:
                            mike = tango.startsWith;
                            mike = mike.bind(tango)(offset);
                            oscar = report;
                            if(!mike) { _fun65524_ip = 291; continue _fun65524 }
 280:
                            mike = _closure1_slot9;
                            oscar = report + mike;
 291:
                            report = golf.some;
                            mike = function(argFoo) {
                                zulu = argFoo;
                                mike = zulu.startsWith;
                                entity = _closure4_slot0;
                                entity = mike.bind(zulu)(entity);
                                return entity;
                            };
                            mike = report.bind(golf)(mike);
                            report = oscar;
                            if(!mike) { _fun65524_ip = 324; continue _fun65524 }
 313:
                            mike = _closure1_slot10;
                            report = oscar + mike;
 324:
                            mike = tango.endsWith;
                            mike = mike.bind(tango)(offset);
                            tango = report;
                            if(!mike) { _fun65524_ip = 352; continue _fun65524 }
 341:
                            mike = _closure1_slot11;
                            tango = report + mike;
 352:
                            report = golf.some;
                            mike = function(argFoo) {
                                zulu = argFoo;
                                mike = zulu.endsWith;
                                entity = _closure4_slot0;
                                entity = mike.bind(zulu)(entity);
                                return entity;
                            };
                            mike = report.bind(golf)(mike);
                            verify = tango;
                            if(!mike) { _fun65524_ip = 385; continue _fun65524 }
 374:
                            mike = _closure1_slot12;
                            verify = tango + mike;
 385:
                            report = _closure1_slot1;
                            oscar = _closure1_slot2;
                            tango = 5;
                            tango = oscar[tango];
                            oscar = undefined;
                            report = report.bind(oscar)(tango);
                            yankee = options.name;
                            tango = yankee.toLocaleLowerCase;
                            tango = tango.bind(yankee)();
                            tango = report.bind(oscar)(offset, tango);
                            report = verify;
                            if(!tango) { _fun65524_ip = 445; continue _fun65524 }
 437:
                            tango = _closure1_slot13;
                            report = verify + tango;
 445:
                            tango = golf.some;
                            zulu = function(argFoo) {
                                mike = _closure1_slot1;
                                zulu = _closure1_slot2;
                                entity = 5;
                                entity = zulu[entity];
                                tango = undefined;
                                zulu = mike.bind(tango)(entity);
                                mike = _closure4_slot0;
                                entity = argFoo;
                                entity = zulu.bind(tango)(mike, entity);
                                return entity;
                            };
                            tango = tango.bind(golf)(zulu);
                            zulu = report;
                            if(!tango) { _fun65524_ip = 475; continue _fun65524 }
 467:
                            tango = _closure1_slot14;
                            zulu = report + tango;
 475:
                            tango = zulu > entity;
                            if(!tango) { _fun65524_ip = 521; continue _fun65524 }
 482:
                            report = _closure1_slot0;
                            golf = _closure1_slot2;
                            entity = 6;
                            entity = golf[entity];
                            golf = report.bind(oscar)(entity);
                            oscar = golf.canUseSoundboardSound;
                            report = argBaz;
                            entity = argCorge;
                            tango = oscar.bind(golf)(report, options, entity);
 521:
                            entity = zulu;
                            if(!tango) { _fun65524_ip = 535; continue _fun65524 }
 527:
                            mike = _closure1_slot6;
                            entity = zulu + mike;
 535:
                            return entity;
                        }
                    };
                    foxtrot = undefined;
                    yankee = options;
                    mike = foxtrot[mike](romeo, yankee, offset, verify, options);
                    entity[zulu] = mike;
                    return entity;
                }
            };
            mike = {};
            mike = options.bind(tango)(zulu, mike);
            var _closure2_slot4 = mike;
            zulu = tango.filter;
            mike = function(argFoo) {
                mike = _closure2_slot4;
                entity = argFoo;
                entity = entity.soundId;
                mike = mike[entity];
                entity = 0;
                entity = mike > entity;
                return entity;
            };
            zulu = zulu.bind(tango)(mike);
            mike = zulu.sort;
            entity = function(argFoo, argBar) {
                zulu = _closure2_slot4;
                entity = argBar;
                entity = entity.soundId;
                mike = zulu[entity];
                entity = argFoo;
                entity = entity.soundId;
                entity = zulu[entity];
                entity = mike - entity;
                return entity;
            };
            entity = mike.bind(zulu)(entity);
            tango = _closure1_slot17;
            mike = null;
            options = mike == golf;
            mike = undefined;
            if(options) { _fun65522_ip = 110; continue _fun65522 }
 105:
            mike = golf.id;
 110:
            foxtrot = undefined;
            romeo = entity;
            yankee = report;
            offset = mike;
            verify = oscar;
            mike = foxtrot[tango](romeo, yankee, offset, verify, options);
            return entity;
        }
    };
    var _closure1_slot20 = tango;
    entity = global;
    yankee = entity.Object;
    offset = yankee.defineProperty;
    golf = {};
    entity = true;
    golf['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(yankee)(zulu, entity, golf);
    entity = 0;
    golf = verify[entity];
    entity = undefined;
    golf = romeo.bind(entity)(golf);
    var _closure1_slot3 = golf;
    yankee = 1;
    golf = verify[yankee];
    golf = options.bind(entity)(golf);
    offset = golf.AnalyticEvents;
    var _closure1_slot4 = offset;
    golf = golf.SearchTypes;
    var _closure1_slot5 = golf;
    golf = 100;
    var _closure1_slot6 = golf;
    golf = 8;
    var _closure1_slot7 = golf;
    offset = 7;
    var _closure1_slot8 = offset;
    offset = 6;
    var _closure1_slot9 = offset;
    offset = 5;
    var _closure1_slot10 = offset;
    offset = 4;
    var _closure1_slot11 = offset;
    offset = 3;
    var _closure1_slot12 = offset;
    offset = 2;
    var _closure1_slot13 = offset;
    var _closure1_slot14 = yankee;
    yankee = new Array(0);
    var _closure1_slot15 = yankee;
    yankee = verify[offset];
    foxtrot = romeo.bind(entity)(yankee);
    yankee = 350;
    foxtrot = foxtrot.bind(entity)(oscar, yankee);
    var _closure1_slot16 = foxtrot;
    offset = verify[offset];
    offset = romeo.bind(entity)(offset);
    offset = offset.bind(entity)(report, yankee);
    var _closure1_slot17 = offset;
    golf = verify[golf];
    verify = options.bind(entity)(golf);
    options = verify.fileFinishedImporting;
    golf = 'modules/soundboard/searchSounds.tsx';
    golf = options.bind(verify)(golf);
    zulu['trackSearchStart'] = oscar;
    zulu['trackSearchResultViewed'] = report;
    zulu['searchSounds'] = tango;
    mike = function(argFoo, argBar, argBaz, argCorge, argGrault) { // Original name: searchSoundsWithSections
        _fun65530: for(var _fun65530_ip = 0; ; ) switch(_fun65530_ip) {
 0:
            golf = argFoo;
            tango = argBar;
            mike = golf.length;
            entity = 0;
            if(!(entity !== mike)) { _fun65530_ip = 67; continue _fun65530 }
 17:
            oscar = _closure1_slot20;
            zulu = tango.reduce;
            mike = function(argFoo, argBar) {
                _fun65531: for(var _fun65531_ip = 0; ; ) switch(_fun65531_ip) {
 0:
                    entity = argFoo;
                    options = argBar;
                    zulu = _closure1_slot18;
                    mike = options.items;
                    oscar = undefined;
                    report = zulu.bind(oscar)(mike);
                    zulu = report.bind(oscar)();
                    mike = zulu.done;
                    tango = 7;
                    if(mike) { _fun65531_ip = 168; continue _fun65531 }
 44:
                    mike = zulu.value;
                    verify = options.categoryInfo;
                    offset = verify.type;
                    yankee = _closure1_slot0;
                    verify = _closure1_slot2;
                    verify = verify[tango];
                    verify = yankee.bind(oscar)(verify);
                    verify = verify.SoundboardSoundGridSectionType;
                    verify = verify.FAVORITES;
                    verify = offset !== verify;
                    if(!verify) { _fun65531_ip = 134; continue _fun65531 }
 96:
                    yankee = mike.type;
                    romeo = _closure1_slot0;
                    offset = _closure1_slot2;
                    offset = offset[tango];
                    offset = romeo.bind(oscar)(offset);
                    offset = offset.SoundboardSoundItemType;
                    offset = offset.SOUND;
                    verify = yankee === offset;
 134:
                    if(!verify) { _fun65531_ip = 153; continue _fun65531 }
 137:
                    verify = entity.push;
                    mike = mike.sound;
                    mike = verify.bind(entity)(mike);
 153:
                    verify = report.bind(oscar)();
                    mike = verify.done;
                    zulu = verify;
                    if(!mike) { _fun65531_ip = 44; continue _fun65531 }
 168:
                    return entity;
                }
            };
            entity = new Array(0);
            yankee = zulu.bind(tango)(mike, entity);
            foxtrot = undefined;
            offset = argBaz;
            verify = argCorge;
            options = argGrault;
            romeo = golf;
            entity = foxtrot[oscar](romeo, yankee, offset, verify, options, golf);
            _fun65530_ip = 74; continue _fun65530;
 67:
            entity = _closure1_slot15;
 74:
            return entity;
        }
    };
    zulu['searchSoundsWithSections'] = mike;
    return entity;
})();