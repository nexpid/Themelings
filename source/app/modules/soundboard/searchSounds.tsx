// app/modules/soundboard/searchSounds.tsx
export default (function(argFoo, argBar, argBaz, argCor, argGra, argFre, argPlu) {
    option = argBar;
    romeon = argBaz;
    zuuluu = argFre;
    verify = argPlu;
    var _closure1_slot0 = option;
    var _closure1_slot1 = romeon;
    var _closure1_slot2 = verify;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            var _closure2_slot0 = zuuluu;
            report = global;
            michal = report.Symbol;
            tangon = 'undefined';
            michal = typeof michal;
            michal = tangon !== michal;
            if(!michal) { _fun00002_ip = 46; continue _fun00001 }
 30:
            tangon = report.Symbol;
            tangon = tangon.iterator;
            michal = zuuluu[tangon];
 46:
            if(michal) { _fun00002_ip = 55; continue _fun00001 }
 49:
            michal = zuuluu.@@iterator;
 55:
            if(michal) { _fun00002_ip = 343; continue _fun00001 }
 61:
            oscard = report.Array;
            tangon = oscard.isArray;
            oscard = tangon.bind(oscard)(zuuluu);
            tangon = michal;
            if(oscard) { _fun00002_ip = 323; continue _fun00001 }
 86:
            option = undefined;
            oscard = undefined;
            if(!zuuluu) { _fun00002_ip = 283; continue _fun00001 }
 96:
            verify = 'string';
            golfie = typeof zuuluu;
            if(!(verify !== golfie)) { _fun00002_ip = 270; continue _fun00001 }
 110:
            golfie = {};
            verify = golfie.toString;
            golfie = verify.call;
            yankee = golfie.bind(verify)(zuuluu);
            offset = yankee.slice;
            verify = 8;
            golfie = -1;
            verify = offset.bind(yankee)(verify, golfie);
            golfie = 'Object';
            golfie = golfie === verify;
            if(!golfie) { _fun00002_ip = 163; continue _fun00001 }
 158:
            golfie = zuuluu.constructor;
 163:
            offset = verify;
            if(!golfie) { _fun00002_ip = 179; continue _fun00001 }
 169:
            golfie = zuuluu.constructor;
            offset = golfie.name;
 179:
            golfie = 'Map';
            if(!(golfie !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 187:
            golfie = 'Set';
            if(!(golfie !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 195:
            golfie = 'Arguments';
            if(!(golfie !== offset)) { _fun00002_ip = 234; continue _fun00001 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golfie = verify.test;
            verify = golfie.bind(verify)(offset);
            golfie = undefined;
            if(!verify) { _fun00002_ip = 247; continue _fun00001 }
 234:
            verify = _closure1_slot19;
            golfie = verify.bind(option)(zuuluu, option);
 247:
            _fun00002_ip = 265; continue _fun00001;
 249:
            offset = report.Array;
            verify = offset.from;
            golfie = verify.bind(offset)(zuuluu);
 265:
            oscard = golfie;
            _fun00002_ip = 283; continue _fun00001;
 270:
            golfie = _closure1_slot19;
            oscard = golfie.bind(option)(zuuluu, option);
 283:
            tangon = oscard;
            if(tangon) { _fun00002_ip = 323; continue _fun00001 }
 289:
            golfie = report.TypeError;
            report = golfie.prototype;
            oscard = Object.create(report, {constructor: {value: golfie}});
            foxtra = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            backup = oscard;
            report = new backup[golfie](foxtra, romeon);
            report = report instanceof Object ? report : oscard;
            throw report;
 323:
            if(!tangon) { _fun00002_ip = 330; continue _fun00001 }
 326:
            _closure2_slot0 = tangon;
 330:
            tangon = 0;
            var _closure2_slot1 = tangon;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    michal = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(michal >= entity))) { _fun00004_ip = 56; continue _fun00003 }
 20:
                    entity = {};
                    michal = false;
                    entity['done'] = michal;
                    zuuluu = _closure2_slot0;
                    michal = _closure2_slot1;
                    michal = parseFloat(michal);
                    tangon = michal + 1;
                    _closure2_slot1 = tangon;
                    michal = zuuluu[michal];
                    entity['value'] = michal;
                    _fun00004_ip = 67; continue _fun00003;
 56:
                    michal = {};
                    zuuluu = true;
                    michal['done'] = zuuluu;
                    entity = michal;
 67:
                    return entity;
                }
            };
            return entity;
 343:
            entity = michal.call;
            zuuluu = entity.bind(michal)(zuuluu);
            michal = zuuluu.next;
            entity = michal.bind;
            entity = entity.bind(michal)(zuuluu);
            return entity;
        }
    };
    var _closure1_slot18 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tangon = argFoo;
            entity = null;
            zuuluu = undefined;
            entity = entity == zuuluu;
            if(entity) { _fun00006_ip = 23; continue _fun00005 }
 14:
            michal = tangon.length;
            entity = zuuluu > michal;
 23:
            michal = undefined;
            if(!entity) { _fun00006_ip = 33; continue _fun00005 }
 28:
            michal = tangon.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zuuluu)(michal);
            zuuluu = 0;
            report = zuuluu < michal;
            if(!report) { _fun00006_ip = 70; continue _fun00005 }
 55:
            report = tangon[zuuluu];
            entity[zuuluu] = report;
            zuuluu = zuuluu + 1;
            if(zuuluu < michal) { _fun00006_ip = 55; continue _fun00005 }
 70:
            return entity;
        }
    };
    var _closure1_slot19 = entity;
    oscard = function(argFoo, argBar) { // Original name: trackSearchStart
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 3;
        michal = michal[entity];
        entity = undefined;
        report = zuuluu.bind(entity)(michal);
        tangon = report.track;
        michal = _closure1_slot4;
        zuuluu = michal.SEARCH_STARTED;
        michal = {};
        golfie = argBar;
        michal['channel_id'] = golfie;
        oscard = _closure1_slot5;
        oscard = oscard.SOUNDBOARD;
        michal['search_type'] = oscard;
        oscard = argFoo;
        michal['location_stack'] = oscard;
        michal = tangon.bind(report)(zuuluu, michal);
        return entity;
    };
    report = function(argFoo, argBar, argBaz, argCor) { // Original name: trackSearchResultViewed
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 3;
        michal = michal[entity];
        entity = undefined;
        report = zuuluu.bind(entity)(michal);
        tangon = report.track;
        michal = _closure1_slot4;
        zuuluu = michal.SEARCH_RESULT_VIEWED;
        michal = {};
        oscard = _closure1_slot5;
        oscard = oscard.SOUNDBOARD;
        michal['search_type'] = oscard;
        oscard = argBaz;
        michal['channel_id'] = oscard;
        oscard = argCor;
        michal['query'] = oscard;
        oscard = argFoo;
        oscard = oscard.length;
        michal['total_results'] = oscard;
        oscard = argBar;
        michal['location_stack'] = oscard;
        michal = tangon.bind(report)(zuuluu, michal);
        return entity;
    };
    tangon = function(argFoo, argBar, argBaz, argCor, argGra) { // Original name: searchSounds
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            oscard = argFoo;
            tangon = argBar;
            golfie = argCor;
            report = argGra;
            var _closure2_slot0 = oscard;
            michal = argBaz;
            var _closure2_slot1 = michal;
            var _closure2_slot2 = golfie;
            var _closure2_slot3 = report;
            option = tangon.reduce;
            zuuluu = function(argFoo, argBar) {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    entity = argFoo;
                    option = argBar;
                    report = _closure1_slot16;
                    tangon = _closure2_slot3;
                    oscard = _closure2_slot2;
                    zuuluu = null;
                    oscard = zuuluu == oscard;
                    golfie = undefined;
                    zuuluu = undefined;
                    if(oscard) { _fun00010_ip = 46; continue _fun00009 }
 37:
                    oscard = _closure2_slot2;
                    zuuluu = oscard.id;
 46:
                    zuuluu = report.bind(golfie)(tangon, zuuluu);
                    zuuluu = option.soundId;
                    report = _closure2_slot0;
                    tangon = report.toLocaleLowerCase;
                    romeon = tangon.bind(report)();
                    offset = _closure2_slot1;
                    verify = _closure2_slot2;
                    michal = function(argFoo, argBar, argBaz, argCor) { // Original name: getScore
                        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                            offset = argFoo;
                            option = argBar;
                            var _closure4_slot0 = offset;
                            michal = option.name;
                            entity = michal.toLocaleLowerCase;
                            tangon = entity.bind(michal)();
                            entity = option.emojiId;
                            michal = null;
                            report = michal != entity;
                            entity = null;
                            if(!report) { _fun00012_ip = 68; continue _fun00011 }
 44:
                            golfie = _closure1_slot3;
                            oscard = golfie.getCustomEmojiById;
                            report = option.emojiId;
                            entity = oscard.bind(golfie)(report);
 68:
                            report = option.emojiName;
                            report = michal != report;
                            verify = null;
                            if(!report) { _fun00012_ip = 128; continue _fun00011 }
 83:
                            golfie = _closure1_slot1;
                            oscard = _closure1_slot2;
                            report = 4;
                            oscard = oscard[report];
                            report = undefined;
                            yankee = golfie.bind(report)(oscard);
                            golfie = yankee.convertSurrogateToName;
                            oscard = option.emojiName;
                            report = false;
                            verify = golfie.bind(yankee)(oscard, report);
 128:
                            oscard = michal != verify;
                            report = null;
                            if(!oscard) { _fun00012_ip = 173; continue _fun00011 }
 137:
                            yankee = _closure1_slot1;
                            golfie = _closure1_slot2;
                            oscard = 4;
                            golfie = golfie[oscard];
                            oscard = undefined;
                            golfie = yankee.bind(oscard)(golfie);
                            oscard = golfie.getByName;
                            report = oscard.bind(golfie)(verify);
 173:
                            if(!(michal == entity)) { _fun00012_ip = 201; continue _fun00011 }
 177:
                            oscard = michal == report;
                            golfie = undefined;
                            if(oscard) { _fun00012_ip = 191; continue _fun00011 }
 186:
                            golfie = report.names;
 191:
                            if(!(michal == golfie)) { _fun00012_ip = 199; continue _fun00011 }
 195:
                            golfie = new Array(0);
 199:
                            _fun00012_ip = 217; continue _fun00011;
 201:
                            michal = entity.name;
                            entity = new Array(1);
                            entity[0] = michal;
                            golfie = entity;
 217:
                            entity = 0;
                            oscard = 0;
                            if(!(offset === tangon)) { _fun00012_ip = 236; continue _fun00011 }
 225:
                            michal = _closure1_slot7;
                            oscard = entity + michal;
 236:
                            michal = golfie.includes;
                            michal = michal.bind(golfie)(offset);
                            report = oscard;
                            if(!michal) { _fun00012_ip = 263; continue _fun00011 }
 252:
                            michal = _closure1_slot8;
                            report = oscard + michal;
 263:
                            michal = tangon.startsWith;
                            michal = michal.bind(tangon)(offset);
                            oscard = report;
                            if(!michal) { _fun00012_ip = 291; continue _fun00011 }
 280:
                            michal = _closure1_slot9;
                            oscard = report + michal;
 291:
                            report = golfie.some;
                            michal = function(argFoo) {
                                zuuluu = argFoo;
                                michal = zuuluu.startsWith;
                                entity = _closure4_slot0;
                                entity = michal.bind(zuuluu)(entity);
                                return entity;
                            };
                            michal = report.bind(golfie)(michal);
                            report = oscard;
                            if(!michal) { _fun00012_ip = 324; continue _fun00011 }
 313:
                            michal = _closure1_slot10;
                            report = oscard + michal;
 324:
                            michal = tangon.endsWith;
                            michal = michal.bind(tangon)(offset);
                            tangon = report;
                            if(!michal) { _fun00012_ip = 352; continue _fun00011 }
 341:
                            michal = _closure1_slot11;
                            tangon = report + michal;
 352:
                            report = golfie.some;
                            michal = function(argFoo) {
                                zuuluu = argFoo;
                                michal = zuuluu.endsWith;
                                entity = _closure4_slot0;
                                entity = michal.bind(zuuluu)(entity);
                                return entity;
                            };
                            michal = report.bind(golfie)(michal);
                            verify = tangon;
                            if(!michal) { _fun00012_ip = 385; continue _fun00011 }
 374:
                            michal = _closure1_slot12;
                            verify = tangon + michal;
 385:
                            report = _closure1_slot1;
                            oscard = _closure1_slot2;
                            tangon = 5;
                            tangon = oscard[tangon];
                            oscard = undefined;
                            report = report.bind(oscard)(tangon);
                            yankee = option.name;
                            tangon = yankee.toLocaleLowerCase;
                            tangon = tangon.bind(yankee)();
                            tangon = report.bind(oscard)(offset, tangon);
                            report = verify;
                            if(!tangon) { _fun00012_ip = 445; continue _fun00011 }
 437:
                            tangon = _closure1_slot13;
                            report = verify + tangon;
 445:
                            tangon = golfie.some;
                            zuuluu = function(argFoo) {
                                michal = _closure1_slot1;
                                zuuluu = _closure1_slot2;
                                entity = 5;
                                entity = zuuluu[entity];
                                tangon = undefined;
                                zuuluu = michal.bind(tangon)(entity);
                                michal = _closure4_slot0;
                                entity = argFoo;
                                entity = zuuluu.bind(tangon)(michal, entity);
                                return entity;
                            };
                            tangon = tangon.bind(golfie)(zuuluu);
                            zuuluu = report;
                            if(!tangon) { _fun00012_ip = 475; continue _fun00011 }
 467:
                            tangon = _closure1_slot14;
                            zuuluu = report + tangon;
 475:
                            tangon = zuuluu > entity;
                            if(!tangon) { _fun00012_ip = 521; continue _fun00011 }
 482:
                            report = _closure1_slot0;
                            golfie = _closure1_slot2;
                            entity = 6;
                            entity = golfie[entity];
                            golfie = report.bind(oscard)(entity);
                            oscard = golfie.canUseSoundboardSound;
                            report = argBaz;
                            entity = argCor;
                            tangon = oscard.bind(golfie)(report, option, entity);
 521:
                            entity = zuuluu;
                            if(!tangon) { _fun00012_ip = 535; continue _fun00011 }
 527:
                            michal = _closure1_slot6;
                            entity = zuuluu + michal;
 535:
                            return entity;
                        }
                    };
                    foxtra = undefined;
                    yankee = option;
                    michal = foxtra[michal](romeon, yankee, offset, verify, option);
                    entity[zuuluu] = michal;
                    return entity;
                }
            };
            michal = {};
            michal = option.bind(tangon)(zuuluu, michal);
            var _closure2_slot4 = michal;
            zuuluu = tangon.filter;
            michal = function(argFoo) {
                michal = _closure2_slot4;
                entity = argFoo;
                entity = entity.soundId;
                michal = michal[entity];
                entity = 0;
                entity = michal > entity;
                return entity;
            };
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = zuuluu.sort;
            entity = function(argFoo, argBar) {
                zuuluu = _closure2_slot4;
                entity = argBar;
                entity = entity.soundId;
                michal = zuuluu[entity];
                entity = argFoo;
                entity = entity.soundId;
                entity = zuuluu[entity];
                entity = michal - entity;
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
            tangon = _closure1_slot17;
            michal = null;
            option = michal == golfie;
            michal = undefined;
            if(option) { _fun00008_ip = 110; continue _fun00007 }
 105:
            michal = golfie.id;
 110:
            foxtra = undefined;
            romeon = entity;
            yankee = report;
            offset = michal;
            verify = oscard;
            michal = foxtra[tangon](romeon, yankee, offset, verify, option);
            return entity;
        }
    };
    var _closure1_slot20 = tangon;
    entity = global;
    yankee = entity.Object;
    offset = yankee.defineProperty;
    golfie = {};
    entity = true;
    golfie['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(yankee)(zuuluu, entity, golfie);
    entity = 0;
    golfie = verify[entity];
    entity = undefined;
    golfie = romeon.bind(entity)(golfie);
    var _closure1_slot3 = golfie;
    yankee = 1;
    golfie = verify[yankee];
    golfie = option.bind(entity)(golfie);
    offset = golfie.AnalyticEvents;
    var _closure1_slot4 = offset;
    golfie = golfie.SearchTypes;
    var _closure1_slot5 = golfie;
    golfie = 100;
    var _closure1_slot6 = golfie;
    golfie = 8;
    var _closure1_slot7 = golfie;
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
    foxtra = romeon.bind(entity)(yankee);
    yankee = 350;
    foxtra = foxtra.bind(entity)(oscard, yankee);
    var _closure1_slot16 = foxtra;
    offset = verify[offset];
    offset = romeon.bind(entity)(offset);
    offset = offset.bind(entity)(report, yankee);
    var _closure1_slot17 = offset;
    golfie = verify[golfie];
    verify = option.bind(entity)(golfie);
    option = verify.fileFinishedImporting;
    golfie = 'modules/soundboard/searchSounds.tsx';
    golfie = option.bind(verify)(golfie);
    zuuluu['trackSearchStart'] = oscard;
    zuuluu['trackSearchResultViewed'] = report;
    zuuluu['searchSounds'] = tangon;
    michal = function(argFoo, argBar, argBaz, argCor, argGra) { // Original name: searchSoundsWithSections
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            golfie = argFoo;
            tangon = argBar;
            michal = golfie.length;
            entity = 0;
            if(!(entity !== michal)) { _fun00014_ip = 67; continue _fun00013 }
 17:
            oscard = _closure1_slot20;
            zuuluu = tangon.reduce;
            michal = function(argFoo, argBar) {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    entity = argFoo;
                    option = argBar;
                    zuuluu = _closure1_slot18;
                    michal = option.items;
                    oscard = undefined;
                    report = zuuluu.bind(oscard)(michal);
                    zuuluu = report.bind(oscard)();
                    michal = zuuluu.done;
                    tangon = 7;
                    if(michal) { _fun00016_ip = 168; continue _fun00015 }
 44:
                    michal = zuuluu.value;
                    verify = option.categoryInfo;
                    offset = verify.type;
                    yankee = _closure1_slot0;
                    verify = _closure1_slot2;
                    verify = verify[tangon];
                    verify = yankee.bind(oscard)(verify);
                    verify = verify.SoundboardSoundGridSectionType;
                    verify = verify.FAVORITES;
                    verify = offset !== verify;
                    if(!verify) { _fun00016_ip = 134; continue _fun00015 }
 96:
                    yankee = michal.type;
                    romeon = _closure1_slot0;
                    offset = _closure1_slot2;
                    offset = offset[tangon];
                    offset = romeon.bind(oscard)(offset);
                    offset = offset.SoundboardSoundItemType;
                    offset = offset.SOUND;
                    verify = yankee === offset;
 134:
                    if(!verify) { _fun00016_ip = 153; continue _fun00015 }
 137:
                    verify = entity.push;
                    michal = michal.sound;
                    michal = verify.bind(entity)(michal);
 153:
                    verify = report.bind(oscard)();
                    michal = verify.done;
                    zuuluu = verify;
                    if(!michal) { _fun00016_ip = 44; continue _fun00015 }
 168:
                    return entity;
                }
            };
            entity = new Array(0);
            yankee = zuuluu.bind(tangon)(michal, entity);
            foxtra = undefined;
            offset = argBaz;
            verify = argCor;
            option = argGra;
            romeon = golfie;
            entity = foxtra[oscard](romeon, yankee, offset, verify, option, golfie);
            _fun00014_ip = 74; continue _fun00013;
 67:
            entity = _closure1_slot15;
 74:
            return entity;
        }
    };
    zuuluu['searchSoundsWithSections'] = michal;
    return entity;
})();