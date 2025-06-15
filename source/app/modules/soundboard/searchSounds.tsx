// app/modules/soundboard/searchSounds.tsx
export default (function(argFoo, argBar, argBaz, argCor, argGra, argFre, argPlu) {
    golfie = argBar;
    offset = argBaz;
    zuuluu = argFre;
    option = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = offset;
    var _closure1_slot2 = option;
    report = function(argFoo, argBar) { // Original name: trackSearchStart
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
    tangon = function(argFoo, argBar, argBaz, argCor) { // Original name: trackSearchResultViewed
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
    entity = global;
    yankee = entity.Object;
    verify = yankee.defineProperty;
    oscard = {};
    entity = true;
    oscard['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(yankee)(zuuluu, entity, oscard);
    entity = 0;
    oscard = option[entity];
    entity = undefined;
    oscard = offset.bind(entity)(oscard);
    var _closure1_slot3 = oscard;
    oscard = 1;
    oscard = option[oscard];
    oscard = golfie.bind(entity)(oscard);
    verify = oscard.AnalyticEvents;
    var _closure1_slot4 = verify;
    oscard = oscard.SearchTypes;
    var _closure1_slot5 = oscard;
    oscard = 2;
    verify = option[oscard];
    yankee = offset.bind(entity)(verify);
    verify = 350;
    yankee = yankee.bind(entity)(report, verify);
    var _closure1_slot6 = yankee;
    oscard = option[oscard];
    oscard = offset.bind(entity)(oscard);
    oscard = oscard.bind(entity)(tangon, verify);
    var _closure1_slot7 = oscard;
    oscard = 7;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'modules/soundboard/searchSounds.tsx';
    oscard = golfie.bind(option)(oscard);
    zuuluu['trackSearchStart'] = report;
    zuuluu['trackSearchResultViewed'] = tangon;
    michal = function(argFoo, argBar, argBaz, argCor, argGra) { // Original name: searchSounds
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
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
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    entity = argFoo;
                    option = argBar;
                    report = _closure1_slot6;
                    tangon = _closure2_slot3;
                    oscard = _closure2_slot2;
                    zuuluu = null;
                    oscard = zuuluu == oscard;
                    golfie = undefined;
                    zuuluu = undefined;
                    if(oscard) { _fun00004_ip = 46; continue _fun00003 }
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
                        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                            offset = argFoo;
                            golfie = argBar;
                            var _closure4_slot0 = offset;
                            michal = golfie.name;
                            entity = michal.toLocaleLowerCase;
                            tangon = entity.bind(michal)();
                            entity = golfie.emojiId;
                            michal = null;
                            report = michal != entity;
                            entity = null;
                            if(!report) { _fun00006_ip = 68; continue _fun00005 }
 44:
                            option = _closure1_slot3;
                            oscard = option.getCustomEmojiById;
                            report = golfie.emojiId;
                            entity = oscard.bind(option)(report);
 68:
                            report = golfie.emojiName;
                            report = michal != report;
                            verify = null;
                            if(!report) { _fun00006_ip = 128; continue _fun00005 }
 83:
                            option = _closure1_slot1;
                            oscard = _closure1_slot2;
                            report = 4;
                            oscard = oscard[report];
                            report = undefined;
                            yankee = option.bind(report)(oscard);
                            option = yankee.convertSurrogateToName;
                            oscard = golfie.emojiName;
                            report = false;
                            verify = option.bind(yankee)(oscard, report);
 128:
                            oscard = michal != verify;
                            report = null;
                            if(!oscard) { _fun00006_ip = 173; continue _fun00005 }
 137:
                            yankee = _closure1_slot1;
                            option = _closure1_slot2;
                            oscard = 4;
                            option = option[oscard];
                            oscard = undefined;
                            option = yankee.bind(oscard)(option);
                            oscard = option.getByName;
                            report = oscard.bind(option)(verify);
 173:
                            if(!(michal == entity)) { _fun00006_ip = 201; continue _fun00005 }
 177:
                            oscard = michal == report;
                            option = undefined;
                            if(oscard) { _fun00006_ip = 191; continue _fun00005 }
 186:
                            option = report.names;
 191:
                            if(!(michal == option)) { _fun00006_ip = 199; continue _fun00005 }
 195:
                            option = new Array(0);
 199:
                            _fun00006_ip = 217; continue _fun00005;
 201:
                            michal = entity.name;
                            entity = new Array(1);
                            entity[0] = michal;
                            option = entity;
 217:
                            michal = 0;
                            oscard = 0;
                            if(!(offset === tangon)) { _fun00006_ip = 228; continue _fun00005 }
 225:
                            oscard = 8;
 228:
                            entity = option.includes;
                            entity = entity.bind(option)(offset);
                            report = oscard;
                            if(!entity) { _fun00006_ip = 251; continue _fun00005 }
 244:
                            entity = 7;
                            report = oscard + entity;
 251:
                            entity = tangon.startsWith;
                            entity = entity.bind(tangon)(offset);
                            oscard = report;
                            if(!entity) { _fun00006_ip = 275; continue _fun00005 }
 268:
                            entity = 6;
                            oscard = report + entity;
 275:
                            report = option.some;
                            entity = function(argFoo) {
                                zuuluu = argFoo;
                                michal = zuuluu.startsWith;
                                entity = _closure4_slot0;
                                entity = michal.bind(zuuluu)(entity);
                                return entity;
                            };
                            entity = report.bind(option)(entity);
                            report = oscard;
                            if(!entity) { _fun00006_ip = 306; continue _fun00005 }
 299:
                            entity = 5;
                            report = oscard + entity;
 306:
                            entity = tangon.endsWith;
                            entity = entity.bind(tangon)(offset);
                            tangon = report;
                            if(!entity) { _fun00006_ip = 330; continue _fun00005 }
 323:
                            entity = 4;
                            tangon = report + entity;
 330:
                            report = option.some;
                            entity = function(argFoo) {
                                zuuluu = argFoo;
                                michal = zuuluu.endsWith;
                                entity = _closure4_slot0;
                                entity = michal.bind(zuuluu)(entity);
                                return entity;
                            };
                            entity = report.bind(option)(entity);
                            verify = tangon;
                            if(!entity) { _fun00006_ip = 361; continue _fun00005 }
 354:
                            entity = 3;
                            verify = tangon + entity;
 361:
                            oscard = _closure1_slot1;
                            report = _closure1_slot2;
                            tangon = 5;
                            tangon = report[tangon];
                            report = undefined;
                            oscard = oscard.bind(report)(tangon);
                            yankee = golfie.name;
                            tangon = yankee.toLocaleLowerCase;
                            tangon = tangon.bind(yankee)();
                            tangon = oscard.bind(report)(offset, tangon);
                            oscard = verify;
                            if(!tangon) { _fun00006_ip = 420; continue _fun00005 }
 413:
                            tangon = 2;
                            oscard = verify + tangon;
 420:
                            tangon = option.some;
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
                            tangon = tangon.bind(option)(zuuluu);
                            zuuluu = oscard;
                            if(!tangon) { _fun00006_ip = 451; continue _fun00005 }
 444:
                            tangon = 1;
                            zuuluu = oscard + tangon;
 451:
                            michal = zuuluu > michal;
                            if(!michal) { _fun00006_ip = 497; continue _fun00005 }
 458:
                            tangon = _closure1_slot0;
                            oscard = _closure1_slot2;
                            entity = 6;
                            entity = oscard[entity];
                            oscard = tangon.bind(report)(entity);
                            report = oscard.canUseSoundboardSound;
                            tangon = argBaz;
                            entity = argCor;
                            michal = report.bind(oscard)(tangon, golfie, entity);
 497:
                            entity = zuuluu;
                            if(!michal) { _fun00006_ip = 510; continue _fun00005 }
 503:
                            michal = 100;
                            entity = zuuluu + michal;
 510:
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
            tangon = _closure1_slot7;
            michal = null;
            option = michal == golfie;
            michal = undefined;
            if(option) { _fun00002_ip = 116; continue _fun00001 }
 111:
            michal = golfie.id;
 116:
            foxtra = undefined;
            romeon = entity;
            yankee = report;
            offset = michal;
            verify = oscard;
            michal = foxtra[tangon](romeon, yankee, offset, verify, option);
            return entity;
        }
    };
    zuuluu['searchSounds'] = michal;
    return entity;
})();