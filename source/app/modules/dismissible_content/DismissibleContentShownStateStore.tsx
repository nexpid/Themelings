// app/modules/dismissible_content/DismissibleContentShownStateStore.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = report.bind(entity)(tangon);
    tangon = tangon.TaskRunner;
    golfie = tangon.prototype;
    golfie = Object.create(golfie, {constructor: {value: tangon}});
    romeon = golfie;
    tangon = new romeon[tangon](yankee);
    tangon = tangon instanceof Object ? tangon : golfie;
    var _closure1_slot2 = tangon;
    option = function() { // Original name: initState
        entity = {'candidates': null, 'shownFatigableCandidate': null, 'prevFatigableCandidate': null};
        michal = global;
        zuuluu = michal.Map;
        tangon = zuuluu.prototype;
        tangon = Object.create(tangon, {constructor: {value: zuuluu}});
        report = tangon;
        zuuluu = new report[zuuluu](tangon);
        zuuluu = zuuluu instanceof Object ? zuuluu : tangon;
        entity['candidates'] = zuuluu;
        zuuluu = new Array(0);
        entity['recentlyShown'] = zuuluu;
        zuuluu = michal.Set;
        tangon = zuuluu.prototype;
        tangon = Object.create(tangon, {constructor: {value: zuuluu}});
        report = tangon;
        zuuluu = new report[zuuluu](tangon);
        zuuluu = zuuluu instanceof Object ? zuuluu : tangon;
        entity['currentlyShown'] = zuuluu;
        michal = michal.Set;
        zuuluu = michal.prototype;
        zuuluu = Object.create(zuuluu, {constructor: {value: michal}});
        report = zuuluu;
        michal = new report[michal](tangon);
        michal = michal instanceof Object ? michal : zuuluu;
        entity['currentlyShownGroup'] = michal;
        michal = 0;
        entity['lastWinnerTime'] = michal;
        return entity;
    };
    var _closure1_slot3 = option;
    tangon = 1;
    tangon = oscard[tangon];
    golfie = report.bind(entity)(tangon);
    tangon = golfie.createWithEqualityFn;
    tangon = tangon.bind(golfie)(option);
    var _closure1_slot4 = tangon;
    tangon = function(argFoo) { // Original name: cloneState
        michal = argFoo;
        entity = {};
        option = entity;
        golfie = michal;
        zuuluu = copyDataProperties(option, golfie);
        zuuluu = global;
        oscard = zuuluu.Map;
        option = michal.candidates;
        report = oscard.prototype;
        report = Object.create(report, {constructor: {value: oscard}});
        verify = report;
        tangon = new verify[oscard](option, golfie);
        report = tangon instanceof Object ? tangon : report;
        tangon = 'candidates';
        entity[tangon] = report;
        oscard = zuuluu.Set;
        option = michal.currentlyShown;
        report = oscard.prototype;
        report = Object.create(report, {constructor: {value: oscard}});
        verify = report;
        tangon = new verify[oscard](option, golfie);
        report = tangon instanceof Object ? tangon : report;
        tangon = 'currentlyShown';
        entity[tangon] = report;
        tangon = zuuluu.Set;
        option = michal.currentlyShownGroup;
        zuuluu = tangon.prototype;
        zuuluu = Object.create(zuuluu, {constructor: {value: tangon}});
        verify = zuuluu;
        michal = new verify[tangon](option, golfie);
        zuuluu = michal instanceof Object ? michal : zuuluu;
        michal = 'currentlyShownGroup';
        entity[michal] = zuuluu;
        return entity;
    };
    var _closure1_slot5 = tangon;
    tangon = function(argFoo, argBar) { // Original name: withoutContent
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            zuuluu = argBar;
            michal = null;
            if(!(michal != zuuluu)) { _fun00002_ip = 109; continue _fun00001 }
 12:
            tangon = zuuluu.content;
            if(!(michal != tangon)) { _fun00002_ip = 42; continue _fun00001 }
 21:
            oscard = entity.currentlyShown;
            report = oscard.delete;
            tangon = zuuluu.content;
            tangon = report.bind(oscard)(tangon);
 42:
            tangon = zuuluu.groupName;
            if(!(michal != tangon)) { _fun00002_ip = 74; continue _fun00001 }
 52:
            oscard = entity.currentlyShownGroup;
            report = oscard.delete;
            tangon = zuuluu.groupName;
            tangon = report.bind(oscard)(tangon);
 74:
            report = entity.shownFatigableCandidate;
            oscard = michal == report;
            tangon = undefined;
            if(oscard) { _fun00002_ip = 94; continue _fun00001 }
 89:
            tangon = report.content;
 94:
            zuuluu = zuuluu.content;
            if(!(tangon === zuuluu)) { _fun00002_ip = 109; continue _fun00001 }
 103:
            entity['shownFatigableCandidate'] = michal;
 109:
            return entity;
        }
    };
    var _closure1_slot6 = tangon;
    tangon = function(argFoo, argBar) { // Original name: withContent
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            zuuluu = argBar;
            var _closure2_slot0 = zuuluu;
            tangon = null;
            if(!(tangon != zuuluu)) { _fun00004_ip = 287; continue _fun00003 }
 21:
            golfie = entity.currentlyShown;
            oscard = golfie.add;
            report = zuuluu.content;
            report = oscard.bind(golfie)(report);
            oscard = entity.recentlyShown;
            report = oscard.filter;
            michal = function(argFoo) {
                entity = _closure2_slot0;
                michal = entity.content;
                entity = argFoo;
                entity = entity !== michal;
                return entity;
            };
            michal = report.bind(oscard)(michal);
            oscard = michal.unshift;
            report = zuuluu.content;
            report = oscard.bind(michal)(report);
            oscard = michal.splice;
            report = 5;
            report = oscard.bind(michal)(report);
            entity['recentlyShown'] = michal;
            michal = zuuluu.groupName;
            if(!(tangon != michal)) { _fun00004_ip = 131; continue _fun00003 }
 109:
            oscard = entity.currentlyShownGroup;
            report = oscard.add;
            michal = zuuluu.groupName;
            michal = report.bind(oscard)(michal);
 131:
            oscard = _closure1_slot0;
            report = _closure1_slot1;
            michal = 2;
            michal = report[michal];
            report = undefined;
            michal = oscard.bind(report)(michal);
            golfie = michal.CONTENT_TYPES_WITH_BYPASS_FATIGUE;
            oscard = golfie.has;
            michal = zuuluu.content;
            michal = oscard.bind(golfie)(michal);
            if(michal) { _fun00004_ip = 265; continue _fun00003 }
 180:
            entity['shownFatigableCandidate'] = zuuluu;
            michal = entity.prevFatigableCandidate;
            oscard = tangon == michal;
            report = undefined;
            if(oscard) { _fun00004_ip = 206; continue _fun00003 }
 201:
            report = michal.content;
 206:
            michal = zuuluu.content;
            if(!(report !== michal)) { _fun00004_ip = 265; continue _fun00003 }
 215:
            entity['prevFatigableCandidate'] = zuuluu;
            michal = global;
            michal = michal.Date;
            report = michal.prototype;
            report = Object.create(report, {constructor: {value: michal}});
            verify = report;
            michal = new verify[michal](option);
            report = michal instanceof Object ? michal : report;
            michal = report.getTime;
            michal = michal.bind(report)();
            entity['lastWinnerTime'] = michal;
 265:
            michal = zuuluu.onAdded;
            if(!(tangon != michal)) { _fun00004_ip = 285; continue _fun00003 }
 275:
            michal = zuuluu.onAdded;
            michal = michal.bind(zuuluu)();
 285:
            return entity;
 287:
            return entity;
        }
    };
    var _closure1_slot7 = tangon;
    tangon = function(argFoo, argBar) { // Original name: withoutCandidate
        entity = argFoo;
        tangon = entity.candidates;
        zuuluu = tangon.delete;
        michal = argBar;
        michal = michal.content;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    var _closure1_slot8 = tangon;
    tangon = function(argFoo, argBar) { // Original name: swapFatigableContent
        entity = argFoo;
        tangon = _closure1_slot7;
        report = _closure1_slot6;
        michal = entity.shownFatigableCandidate;
        zuuluu = undefined;
        michal = report.bind(zuuluu)(entity, michal);
        michal = argBar;
        michal = tangon.bind(zuuluu)(entity, michal);
        return entity;
    };
    var _closure1_slot9 = tangon;
    tangon = function(argFoo) { // Original name: withUpdateWinner
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            michal = entity.candidates;
            zuuluu = michal.size;
            michal = 0;
            if(!(michal !== zuuluu)) { _fun00006_ip = 352; continue _fun00005 }
 23:
            zuuluu = global;
            michal = zuuluu.Date;
            tangon = michal.prototype;
            tangon = Object.create(tangon, {constructor: {value: michal}});
            foxtra = tangon;
            michal = new foxtra[michal](romeon);
            tangon = michal instanceof Object ? michal : tangon;
            michal = tangon.getTime;
            tangon = michal.bind(tangon)();
            michal = entity.lastWinnerTime;
            tangon = tangon - michal;
            michal = 300000;
            michal = tangon > michal;
            report = entity.prevFatigableCandidate;
            tangon = null;
            report = tangon != report;
            if(!report) { _fun00006_ip = 123; continue _fun00005 }
 96:
            option = entity.candidates;
            golfie = option.has;
            oscard = entity.prevFatigableCandidate;
            oscard = oscard.content;
            report = golfie.bind(option)(oscard);
 123:
            if(!report) { _fun00006_ip = 136; continue _fun00005 }
 126:
            oscard = entity.shownFatigableCandidate;
            report = tangon == oscard;
 136:
            if(!report) { _fun00006_ip = 215; continue _fun00005 }
 139:
            if(michal) { _fun00006_ip = 215; continue _fun00005 }
 142:
            golfie = _closure1_slot2;
            oscard = golfie.unschedule;
            oscard = oscard.bind(golfie)();
            golfie = _closure1_slot9;
            report = entity.prevFatigableCandidate;
            option = tangon != report;
            oscard = undefined;
            report = undefined;
            if(!option) { _fun00006_ip = 207; continue _fun00005 }
 180:
            offset = entity.candidates;
            verify = offset.get;
            option = entity.prevFatigableCandidate;
            option = option.content;
            report = verify.bind(offset)(option);
 207:
            report = golfie.bind(oscard)(entity, report);
            return entity;
 215:
            report = entity.shownFatigableCandidate;
            if(!(tangon != report)) { _fun00006_ip = 230; continue _fun00005 }
 225:
            if(michal) { _fun00006_ip = 230; continue _fun00005 }
 228:
            return entity;
 230:
            oscard = _closure1_slot2;
            report = oscard.scheduled;
            report = report.bind(oscard)();
            if(report) { _fun00006_ip = 350; continue _fun00005 }
 250:
            zuuluu = zuuluu.Date;
            report = zuuluu.prototype;
            report = Object.create(report, {constructor: {value: zuuluu}});
            foxtra = report;
            zuuluu = new foxtra[zuuluu](romeon);
            report = zuuluu instanceof Object ? zuuluu : report;
            zuuluu = report.getTime;
            report = zuuluu.bind(report)();
            zuuluu = entity.shownFatigableCandidate;
            zuuluu = tangon == zuuluu;
            if(!zuuluu) { _fun00006_ip = 319; continue _fun00005 }
 299:
            tangon = entity.lastWinnerTime;
            report = report - tangon;
            tangon = 3600000;
            zuuluu = report < tangon;
 319:
            if(zuuluu) { _fun00006_ip = 348; continue _fun00005 }
 322:
            report = _closure1_slot2;
            tangon = report.schedule;
            zuuluu = function() {
                zuuluu = _closure1_slot0;
                michal = _closure1_slot1;
                entity = 3;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.batchUpdates;
                michal = function() {
                    zuuluu = _closure1_slot4;
                    michal = zuuluu.setState;
                    entity = function(argFoo) {
                        zuuluu = _closure1_slot5;
                        tangon = undefined;
                        entity = argFoo;
                        entity = zuuluu.bind(tangon)(entity);
                        zuuluu = _closure1_slot9;
                        michal = function(argFoo) {
                            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                                entity = argFoo;
                                var _closure6_slot0 = entity;
                                tangon = entity.candidates;
                                zuuluu = tangon.keys;
                                verify = zuuluu.bind(tangon)();
                                report = new Array(0);
                                option = 0;
                                offset = report;
                                zuuluu = arraySpread(offset, verify, option);
                                tangon = entity.prevFatigableCandidate;
                                zuuluu = null;
                                zuuluu = zuuluu !== tangon;
                                if(!zuuluu) { _fun00008_ip = 79; continue _fun00007 }
 52:
                                golfie = entity.candidates;
                                oscard = golfie.has;
                                tangon = entity.prevFatigableCandidate;
                                tangon = tangon.content;
                                zuuluu = oscard.bind(golfie)(tangon);
 79:
                                if(!zuuluu) { _fun00008_ip = 100; continue _fun00007 }
 82:
                                tangon = entity.candidates;
                                oscard = tangon.size;
                                tangon = 1;
                                zuuluu = oscard > tangon;
 100:
                                tangon = report;
                                if(!zuuluu) { _fun00008_ip = 121; continue _fun00007 }
 106:
                                zuuluu = report.filter;
                                michal = function(argFoo) {
                                    _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                                        entity = _closure6_slot0;
                                        entity = entity.prevFatigableCandidate;
                                        michal = null;
                                        zuuluu = michal == entity;
                                        michal = undefined;
                                        if(zuuluu) { _fun00010_ip = 29; continue _fun00009 }
 24:
                                        michal = entity.content;
 29:
                                        entity = argFoo;
                                        entity = entity !== michal;
                                        return entity;
                                    }
                                };
                                tangon = zuuluu.bind(report)(michal);
 121:
                                zuuluu = entity.candidates;
                                michal = zuuluu.get;
                                entity = global;
                                oscard = entity.Math;
                                report = oscard.floor;
                                golfie = entity.Math;
                                entity = golfie.random;
                                golfie = entity.bind(golfie)();
                                entity = tangon.length;
                                entity = golfie * entity;
                                entity = report.bind(oscard)(entity);
                                entity = tangon[entity];
                                entity = michal.bind(zuuluu)(entity);
                                return entity;
                            }
                        };
                        michal = michal.bind(tangon)(entity);
                        michal = zuuluu.bind(tangon)(entity, michal);
                        return entity;
                    };
                    entity = michal.bind(zuuluu)(entity);
                    entity = undefined;
                    return entity;
                };
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            michal = 250;
            michal = tangon.bind(report)(zuuluu, michal);
 348:
            return entity;
 350:
            return entity;
 352:
            return entity;
        }
    };
    var _closure1_slot10 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/dismissible_content/DismissibleContentShownStateStore.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo, argBar) { // Original name: useDismissibleContentShownStateStore
        tangon = _closure1_slot4;
        zuuluu = undefined;
        michal = argFoo;
        entity = argBar;
        entity = tangon.bind(zuuluu)(michal, entity);
        return entity;
    };
    zuuluu['default'] = tangon;
    tangon = function(argFoo) {
        zuuluu = argFoo;
        var _closure2_slot0 = zuuluu;
        tangon = _closure1_slot0;
        report = _closure1_slot1;
        entity = 2;
        oscard = report[entity];
        entity = undefined;
        oscard = tangon.bind(entity)(oscard);
        golfie = oscard.CONTENT_TYPES_WITH_BYPASS_FATIGUE;
        oscard = golfie.has;
        zuuluu = zuuluu.content;
        zuuluu = oscard.bind(golfie)(zuuluu);
        var _closure2_slot1 = zuuluu;
        zuuluu = 3;
        zuuluu = report[zuuluu];
        tangon = tangon.bind(entity)(zuuluu);
        zuuluu = tangon.batchUpdates;
        michal = function() {
            zuuluu = _closure1_slot4;
            michal = zuuluu.setState;
            entity = function(argFoo) {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    michal = _closure1_slot5;
                    tangon = undefined;
                    entity = argFoo;
                    entity = michal.bind(tangon)(entity);
                    report = _closure2_slot1;
                    if(report) { _fun00012_ip = 64; continue _fun00011 }
 27:
                    report = _closure1_slot10;
                    verify = _closure2_slot0;
                    option = entity.candidates;
                    golfie = option.set;
                    oscard = verify.content;
                    oscard = golfie.bind(option)(oscard, verify);
                    report = report.bind(tangon)(entity);
                    _fun00012_ip = 78; continue _fun00011;
 64:
                    zuuluu = _closure1_slot7;
                    michal = _closure2_slot0;
                    michal = zuuluu.bind(tangon)(entity, michal);
 78:
                    return entity;
                }
            };
            entity = michal.bind(zuuluu)(entity);
            entity = undefined;
            return entity;
        };
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['addCandidateContent'] = tangon;
    tangon = function(argFoo, argBar) {
        entity = argFoo;
        var _closure2_slot0 = entity;
        entity = argBar;
        var _closure2_slot1 = entity;
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot1;
        entity = 3;
        zuuluu = zuuluu[entity];
        entity = undefined;
        tangon = tangon.bind(entity)(zuuluu);
        zuuluu = tangon.batchUpdates;
        michal = function() {
            zuuluu = _closure1_slot4;
            michal = zuuluu.setState;
            entity = function(argFoo) {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    michal = _closure1_slot5;
                    zuuluu = undefined;
                    entity = argFoo;
                    entity = michal.bind(zuuluu)(entity);
                    michal = _closure2_slot1;
                    if(michal) { _fun00014_ip = 53; continue _fun00013 }
 27:
                    report = _closure1_slot6;
                    golfie = _closure1_slot8;
                    michal = _closure2_slot0;
                    golfie = golfie.bind(zuuluu)(entity, michal);
                    michal = report.bind(zuuluu)(entity, michal);
                    _fun00014_ip = 86; continue _fun00013;
 53:
                    michal = _closure1_slot10;
                    report = _closure1_slot6;
                    oscard = _closure1_slot8;
                    tangon = _closure2_slot0;
                    oscard = oscard.bind(zuuluu)(entity, tangon);
                    tangon = report.bind(zuuluu)(entity, tangon);
                    michal = michal.bind(zuuluu)(entity);
 86:
                    return entity;
                }
            };
            entity = michal.bind(zuuluu)(entity);
            entity = undefined;
            return entity;
        };
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['removeCandidateContent'] = tangon;
    tangon = function(argFoo) {
        michal = _closure1_slot4;
        entity = michal.getState;
        entity = entity.bind(michal)();
        zuuluu = entity.currentlyShown;
        michal = zuuluu.has;
        entity = argFoo;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    zuuluu['isContentShown'] = tangon;
    tangon = function(argFoo) {
        michal = argFoo;
        var _closure2_slot0 = michal;
        zuuluu = _closure1_slot4;
        michal = undefined;
        entity = function(argFoo) {
            entity = argFoo;
            zuuluu = entity.currentlyShown;
            michal = zuuluu.has;
            entity = _closure2_slot0;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        entity = zuuluu.bind(michal)(entity);
        return entity;
    };
    zuuluu['useIsContentShown'] = tangon;
    tangon = function(argFoo) {
        michal = argFoo;
        var _closure2_slot0 = michal;
        zuuluu = _closure1_slot4;
        michal = undefined;
        entity = function(argFoo) {
            michal = argFoo;
            var _closure3_slot0 = michal;
            zuuluu = _closure2_slot0;
            michal = zuuluu.some;
            entity = function(argFoo) {
                entity = _closure3_slot0;
                zuuluu = entity.currentlyShown;
                michal = zuuluu.has;
                entity = argFoo;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        entity = zuuluu.bind(michal)(entity);
        return entity;
    };
    zuuluu['useIsAnyContentShown'] = tangon;
    tangon = function(argFoo) {
        zuuluu = argFoo;
        tangon = _closure1_slot4;
        michal = tangon.getState;
        michal = michal.bind(tangon)();
        michal = michal.currentlyShown;
        var _closure2_slot0 = michal;
        michal = zuuluu.find;
        entity = function(argFoo) {
            zuuluu = _closure2_slot0;
            michal = zuuluu.has;
            entity = argFoo;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    zuuluu['isAnyContentShown'] = tangon;
    tangon = function() {
        zuuluu = _closure1_slot4;
        entity = zuuluu.getState;
        entity = entity.bind(zuuluu)();
        oscard = entity.currentlyShown;
        tangon = new Array(0);
        report = 0;
        golfie = tangon;
        entity = arraySpread(golfie, oscard, report);
        michal = tangon.filter;
        entity = function(argFoo) {
            zuuluu = _closure1_slot0;
            michal = _closure1_slot1;
            entity = 2;
            michal = michal[entity];
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            zuuluu = entity.CONTENT_TYPES_WITH_BYPASS_FATIGUE;
            michal = zuuluu.has;
            entity = argFoo;
            entity = michal.bind(zuuluu)(entity);
            entity = !entity;
            return entity;
        };
        entity = michal.bind(tangon)(entity);
        michal = entity.length;
        entity = zuuluu.getState;
        entity = entity.bind(zuuluu)();
        entity = entity.currentlyShown;
        zuuluu = entity.size;
        entity = new Array(2);
        entity[0] = zuuluu;
        entity[1] = michal;
        return entity;
    };
    zuuluu['getCurrentlyShownCounts'] = tangon;
    michal = function() {
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot1;
        entity = 3;
        zuuluu = zuuluu[entity];
        entity = undefined;
        report = tangon.bind(entity)(zuuluu);
        tangon = report.batchUpdates;
        zuuluu = function() {
            zuuluu = _closure1_slot4;
            michal = zuuluu.setState;
            entity = _closure1_slot3;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        zuuluu = tangon.bind(report)(zuuluu);
        zuuluu = _closure1_slot2;
        michal = zuuluu.unschedule;
        michal = michal.bind(zuuluu)();
        return entity;
    };
    zuuluu['reset'] = michal;
    return entity;
})();