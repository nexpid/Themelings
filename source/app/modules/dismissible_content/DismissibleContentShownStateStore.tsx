// app/modules/dismissible_content/DismissibleContentShownStateStore.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = report.bind(entity)(tango);
    tango = tango.TaskRunner;
    golf = tango.prototype;
    golf = Object.create(golf, {constructor: {value: tango}});
    romeo = golf;
    tango = new romeo[tango](yankee);
    tango = tango instanceof Object ? tango : golf;
    var _closure1_slot2 = tango;
    options = function() { // Original name: initState
        entity = {'candidates': null, 'shownFatigableCandidate': null, 'prevFatigableCandidate': null};
        mike = global;
        zulu = mike.Map;
        tango = zulu.prototype;
        tango = Object.create(tango, {constructor: {value: zulu}});
        report = tango;
        zulu = new report[zulu](tango);
        zulu = zulu instanceof Object ? zulu : tango;
        entity['candidates'] = zulu;
        zulu = new Array(0);
        entity['recentlyShown'] = zulu;
        zulu = mike.Set;
        tango = zulu.prototype;
        tango = Object.create(tango, {constructor: {value: zulu}});
        report = tango;
        zulu = new report[zulu](tango);
        zulu = zulu instanceof Object ? zulu : tango;
        entity['currentlyShown'] = zulu;
        mike = mike.Set;
        zulu = mike.prototype;
        zulu = Object.create(zulu, {constructor: {value: mike}});
        report = zulu;
        mike = new report[mike](tango);
        mike = mike instanceof Object ? mike : zulu;
        entity['currentlyShownGroup'] = mike;
        mike = 0;
        entity['lastWinnerTime'] = mike;
        return entity;
    };
    var _closure1_slot3 = options;
    tango = 1;
    tango = oscar[tango];
    golf = report.bind(entity)(tango);
    tango = golf.createWithEqualityFn;
    tango = tango.bind(golf)(options);
    var _closure1_slot4 = tango;
    tango = function(argFoo) { // Original name: cloneState
        mike = argFoo;
        entity = {};
        options = entity;
        golf = mike;
        zulu = copyDataProperties(options, golf);
        zulu = global;
        oscar = zulu.Map;
        options = mike.candidates;
        report = oscar.prototype;
        report = Object.create(report, {constructor: {value: oscar}});
        verify = report;
        tango = new verify[oscar](options, golf);
        report = tango instanceof Object ? tango : report;
        tango = 'candidates';
        entity[tango] = report;
        oscar = zulu.Set;
        options = mike.currentlyShown;
        report = oscar.prototype;
        report = Object.create(report, {constructor: {value: oscar}});
        verify = report;
        tango = new verify[oscar](options, golf);
        report = tango instanceof Object ? tango : report;
        tango = 'currentlyShown';
        entity[tango] = report;
        tango = zulu.Set;
        options = mike.currentlyShownGroup;
        zulu = tango.prototype;
        zulu = Object.create(zulu, {constructor: {value: tango}});
        verify = zulu;
        mike = new verify[tango](options, golf);
        zulu = mike instanceof Object ? mike : zulu;
        mike = 'currentlyShownGroup';
        entity[mike] = zulu;
        return entity;
    };
    var _closure1_slot5 = tango;
    tango = function(argFoo, argBar) { // Original name: withoutContent
        _fun38228: for(var _fun38228_ip = 0; ; ) switch(_fun38228_ip) {
 0:
            entity = argFoo;
            zulu = argBar;
            mike = null;
            if(!(mike != zulu)) { _fun38228_ip = 109; continue _fun38228 }
 12:
            tango = zulu.content;
            if(!(mike != tango)) { _fun38228_ip = 42; continue _fun38228 }
 21:
            oscar = entity.currentlyShown;
            report = oscar.delete;
            tango = zulu.content;
            tango = report.bind(oscar)(tango);
 42:
            tango = zulu.groupName;
            if(!(mike != tango)) { _fun38228_ip = 74; continue _fun38228 }
 52:
            oscar = entity.currentlyShownGroup;
            report = oscar.delete;
            tango = zulu.groupName;
            tango = report.bind(oscar)(tango);
 74:
            report = entity.shownFatigableCandidate;
            oscar = mike == report;
            tango = undefined;
            if(oscar) { _fun38228_ip = 94; continue _fun38228 }
 89:
            tango = report.content;
 94:
            zulu = zulu.content;
            if(!(tango === zulu)) { _fun38228_ip = 109; continue _fun38228 }
 103:
            entity['shownFatigableCandidate'] = mike;
 109:
            return entity;
        }
    };
    var _closure1_slot6 = tango;
    tango = function(argFoo, argBar) { // Original name: withContent
        _fun38229: for(var _fun38229_ip = 0; ; ) switch(_fun38229_ip) {
 0:
            entity = argFoo;
            zulu = argBar;
            var _closure2_slot0 = zulu;
            tango = null;
            if(!(tango != zulu)) { _fun38229_ip = 287; continue _fun38229 }
 21:
            golf = entity.currentlyShown;
            oscar = golf.add;
            report = zulu.content;
            report = oscar.bind(golf)(report);
            oscar = entity.recentlyShown;
            report = oscar.filter;
            mike = function(argFoo) {
                entity = _closure2_slot0;
                mike = entity.content;
                entity = argFoo;
                entity = entity !== mike;
                return entity;
            };
            mike = report.bind(oscar)(mike);
            oscar = mike.unshift;
            report = zulu.content;
            report = oscar.bind(mike)(report);
            oscar = mike.splice;
            report = 5;
            report = oscar.bind(mike)(report);
            entity['recentlyShown'] = mike;
            mike = zulu.groupName;
            if(!(tango != mike)) { _fun38229_ip = 131; continue _fun38229 }
 109:
            oscar = entity.currentlyShownGroup;
            report = oscar.add;
            mike = zulu.groupName;
            mike = report.bind(oscar)(mike);
 131:
            oscar = _closure1_slot0;
            report = _closure1_slot1;
            mike = 2;
            mike = report[mike];
            report = undefined;
            mike = oscar.bind(report)(mike);
            golf = mike.CONTENT_TYPES_WITH_BYPASS_FATIGUE;
            oscar = golf.has;
            mike = zulu.content;
            mike = oscar.bind(golf)(mike);
            if(mike) { _fun38229_ip = 265; continue _fun38229 }
 180:
            entity['shownFatigableCandidate'] = zulu;
            mike = entity.prevFatigableCandidate;
            oscar = tango == mike;
            report = undefined;
            if(oscar) { _fun38229_ip = 206; continue _fun38229 }
 201:
            report = mike.content;
 206:
            mike = zulu.content;
            if(!(report !== mike)) { _fun38229_ip = 265; continue _fun38229 }
 215:
            entity['prevFatigableCandidate'] = zulu;
            mike = global;
            mike = mike.Date;
            report = mike.prototype;
            report = Object.create(report, {constructor: {value: mike}});
            verify = report;
            mike = new verify[mike](options);
            report = mike instanceof Object ? mike : report;
            mike = report.getTime;
            mike = mike.bind(report)();
            entity['lastWinnerTime'] = mike;
 265:
            mike = zulu.onAdded;
            if(!(tango != mike)) { _fun38229_ip = 285; continue _fun38229 }
 275:
            mike = zulu.onAdded;
            mike = mike.bind(zulu)();
 285:
            return entity;
 287:
            return entity;
        }
    };
    var _closure1_slot7 = tango;
    tango = function(argFoo, argBar) { // Original name: withoutCandidate
        entity = argFoo;
        tango = entity.candidates;
        zulu = tango.delete;
        mike = argBar;
        mike = mike.content;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    var _closure1_slot8 = tango;
    tango = function(argFoo, argBar) { // Original name: swapFatigableContent
        entity = argFoo;
        tango = _closure1_slot7;
        report = _closure1_slot6;
        mike = entity.shownFatigableCandidate;
        zulu = undefined;
        mike = report.bind(zulu)(entity, mike);
        mike = argBar;
        mike = tango.bind(zulu)(entity, mike);
        return entity;
    };
    var _closure1_slot9 = tango;
    tango = function(argFoo) { // Original name: withUpdateWinner
        _fun38233: for(var _fun38233_ip = 0; ; ) switch(_fun38233_ip) {
 0:
            entity = argFoo;
            mike = entity.candidates;
            zulu = mike.size;
            mike = 0;
            if(!(mike !== zulu)) { _fun38233_ip = 352; continue _fun38233 }
 23:
            zulu = global;
            mike = zulu.Date;
            tango = mike.prototype;
            tango = Object.create(tango, {constructor: {value: mike}});
            foxtrot = tango;
            mike = new foxtrot[mike](romeo);
            tango = mike instanceof Object ? mike : tango;
            mike = tango.getTime;
            tango = mike.bind(tango)();
            mike = entity.lastWinnerTime;
            tango = tango - mike;
            mike = 300000;
            mike = tango > mike;
            report = entity.prevFatigableCandidate;
            tango = null;
            report = tango != report;
            if(!report) { _fun38233_ip = 123; continue _fun38233 }
 96:
            options = entity.candidates;
            golf = options.has;
            oscar = entity.prevFatigableCandidate;
            oscar = oscar.content;
            report = golf.bind(options)(oscar);
 123:
            if(!report) { _fun38233_ip = 136; continue _fun38233 }
 126:
            oscar = entity.shownFatigableCandidate;
            report = tango == oscar;
 136:
            if(!report) { _fun38233_ip = 215; continue _fun38233 }
 139:
            if(mike) { _fun38233_ip = 215; continue _fun38233 }
 142:
            golf = _closure1_slot2;
            oscar = golf.unschedule;
            oscar = oscar.bind(golf)();
            golf = _closure1_slot9;
            report = entity.prevFatigableCandidate;
            options = tango != report;
            oscar = undefined;
            report = undefined;
            if(!options) { _fun38233_ip = 207; continue _fun38233 }
 180:
            offset = entity.candidates;
            verify = offset.get;
            options = entity.prevFatigableCandidate;
            options = options.content;
            report = verify.bind(offset)(options);
 207:
            report = golf.bind(oscar)(entity, report);
            return entity;
 215:
            report = entity.shownFatigableCandidate;
            if(!(tango != report)) { _fun38233_ip = 230; continue _fun38233 }
 225:
            if(mike) { _fun38233_ip = 230; continue _fun38233 }
 228:
            return entity;
 230:
            oscar = _closure1_slot2;
            report = oscar.scheduled;
            report = report.bind(oscar)();
            if(report) { _fun38233_ip = 350; continue _fun38233 }
 250:
            zulu = zulu.Date;
            report = zulu.prototype;
            report = Object.create(report, {constructor: {value: zulu}});
            foxtrot = report;
            zulu = new foxtrot[zulu](romeo);
            report = zulu instanceof Object ? zulu : report;
            zulu = report.getTime;
            report = zulu.bind(report)();
            zulu = entity.shownFatigableCandidate;
            zulu = tango == zulu;
            if(!zulu) { _fun38233_ip = 319; continue _fun38233 }
 299:
            tango = entity.lastWinnerTime;
            report = report - tango;
            tango = 3600000;
            zulu = report < tango;
 319:
            if(zulu) { _fun38233_ip = 348; continue _fun38233 }
 322:
            report = _closure1_slot2;
            tango = report.schedule;
            zulu = function() {
                zulu = _closure1_slot0;
                mike = _closure1_slot1;
                entity = 3;
                mike = mike[entity];
                entity = undefined;
                tango = zulu.bind(entity)(mike);
                zulu = tango.batchUpdates;
                mike = function() {
                    zulu = _closure1_slot4;
                    mike = zulu.setState;
                    entity = function(argFoo) {
                        zulu = _closure1_slot5;
                        tango = undefined;
                        entity = argFoo;
                        entity = zulu.bind(tango)(entity);
                        zulu = _closure1_slot9;
                        mike = function(argFoo) {
                            _fun38237: for(var _fun38237_ip = 0; ; ) switch(_fun38237_ip) {
 0:
                                entity = argFoo;
                                var _closure6_slot0 = entity;
                                tango = entity.candidates;
                                zulu = tango.keys;
                                verify = zulu.bind(tango)();
                                report = new Array(0);
                                options = 0;
                                offset = report;
                                zulu = arraySpread(offset, verify, options);
                                tango = entity.prevFatigableCandidate;
                                zulu = null;
                                zulu = zulu !== tango;
                                if(!zulu) { _fun38237_ip = 79; continue _fun38237 }
 52:
                                golf = entity.candidates;
                                oscar = golf.has;
                                tango = entity.prevFatigableCandidate;
                                tango = tango.content;
                                zulu = oscar.bind(golf)(tango);
 79:
                                if(!zulu) { _fun38237_ip = 100; continue _fun38237 }
 82:
                                tango = entity.candidates;
                                oscar = tango.size;
                                tango = 1;
                                zulu = oscar > tango;
 100:
                                tango = report;
                                if(!zulu) { _fun38237_ip = 121; continue _fun38237 }
 106:
                                zulu = report.filter;
                                mike = function(argFoo) {
                                    _fun38238: for(var _fun38238_ip = 0; ; ) switch(_fun38238_ip) {
 0:
                                        entity = _closure6_slot0;
                                        entity = entity.prevFatigableCandidate;
                                        mike = null;
                                        zulu = mike == entity;
                                        mike = undefined;
                                        if(zulu) { _fun38238_ip = 29; continue _fun38238 }
 24:
                                        mike = entity.content;
 29:
                                        entity = argFoo;
                                        entity = entity !== mike;
                                        return entity;
                                    }
                                };
                                tango = zulu.bind(report)(mike);
 121:
                                zulu = entity.candidates;
                                mike = zulu.get;
                                entity = global;
                                oscar = entity.Math;
                                report = oscar.floor;
                                golf = entity.Math;
                                entity = golf.random;
                                golf = entity.bind(golf)();
                                entity = tango.length;
                                entity = golf * entity;
                                entity = report.bind(oscar)(entity);
                                entity = tango[entity];
                                entity = mike.bind(zulu)(entity);
                                return entity;
                            }
                        };
                        mike = mike.bind(tango)(entity);
                        mike = zulu.bind(tango)(entity, mike);
                        return entity;
                    };
                    entity = mike.bind(zulu)(entity);
                    entity = undefined;
                    return entity;
                };
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            mike = 250;
            mike = tango.bind(report)(zulu, mike);
 348:
            return entity;
 350:
            return entity;
 352:
            return entity;
        }
    };
    var _closure1_slot10 = tango;
    tango = 4;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/dismissible_content/DismissibleContentShownStateStore.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo, argBar) { // Original name: useDismissibleContentShownStateStore
        tango = _closure1_slot4;
        zulu = undefined;
        mike = argFoo;
        entity = argBar;
        entity = tango.bind(zulu)(mike, entity);
        return entity;
    };
    zulu['default'] = tango;
    tango = function(argFoo) {
        zulu = argFoo;
        var _closure2_slot0 = zulu;
        tango = _closure1_slot0;
        report = _closure1_slot1;
        entity = 2;
        oscar = report[entity];
        entity = undefined;
        oscar = tango.bind(entity)(oscar);
        golf = oscar.CONTENT_TYPES_WITH_BYPASS_FATIGUE;
        oscar = golf.has;
        zulu = zulu.content;
        zulu = oscar.bind(golf)(zulu);
        var _closure2_slot1 = zulu;
        zulu = 3;
        zulu = report[zulu];
        tango = tango.bind(entity)(zulu);
        zulu = tango.batchUpdates;
        mike = function() {
            zulu = _closure1_slot4;
            mike = zulu.setState;
            entity = function(argFoo) {
                _fun38242: for(var _fun38242_ip = 0; ; ) switch(_fun38242_ip) {
 0:
                    mike = _closure1_slot5;
                    tango = undefined;
                    entity = argFoo;
                    entity = mike.bind(tango)(entity);
                    report = _closure2_slot1;
                    if(report) { _fun38242_ip = 64; continue _fun38242 }
 27:
                    report = _closure1_slot10;
                    verify = _closure2_slot0;
                    options = entity.candidates;
                    golf = options.set;
                    oscar = verify.content;
                    oscar = golf.bind(options)(oscar, verify);
                    report = report.bind(tango)(entity);
                    _fun38242_ip = 78; continue _fun38242;
 64:
                    zulu = _closure1_slot7;
                    mike = _closure2_slot0;
                    mike = zulu.bind(tango)(entity, mike);
 78:
                    return entity;
                }
            };
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['addCandidateContent'] = tango;
    tango = function(argFoo, argBar) {
        entity = argFoo;
        var _closure2_slot0 = entity;
        entity = argBar;
        var _closure2_slot1 = entity;
        tango = _closure1_slot0;
        zulu = _closure1_slot1;
        entity = 3;
        zulu = zulu[entity];
        entity = undefined;
        tango = tango.bind(entity)(zulu);
        zulu = tango.batchUpdates;
        mike = function() {
            zulu = _closure1_slot4;
            mike = zulu.setState;
            entity = function(argFoo) {
                _fun38245: for(var _fun38245_ip = 0; ; ) switch(_fun38245_ip) {
 0:
                    mike = _closure1_slot5;
                    zulu = undefined;
                    entity = argFoo;
                    entity = mike.bind(zulu)(entity);
                    mike = _closure2_slot1;
                    if(mike) { _fun38245_ip = 53; continue _fun38245 }
 27:
                    report = _closure1_slot6;
                    golf = _closure1_slot8;
                    mike = _closure2_slot0;
                    golf = golf.bind(zulu)(entity, mike);
                    mike = report.bind(zulu)(entity, mike);
                    _fun38245_ip = 86; continue _fun38245;
 53:
                    mike = _closure1_slot10;
                    report = _closure1_slot6;
                    oscar = _closure1_slot8;
                    tango = _closure2_slot0;
                    oscar = oscar.bind(zulu)(entity, tango);
                    tango = report.bind(zulu)(entity, tango);
                    mike = mike.bind(zulu)(entity);
 86:
                    return entity;
                }
            };
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['removeCandidateContent'] = tango;
    tango = function(argFoo) {
        mike = _closure1_slot4;
        entity = mike.getState;
        entity = entity.bind(mike)();
        zulu = entity.currentlyShown;
        mike = zulu.has;
        entity = argFoo;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    zulu['isContentShown'] = tango;
    tango = function(argFoo) {
        mike = argFoo;
        var _closure2_slot0 = mike;
        zulu = _closure1_slot4;
        mike = undefined;
        entity = function(argFoo) {
            entity = argFoo;
            zulu = entity.currentlyShown;
            mike = zulu.has;
            entity = _closure2_slot0;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        entity = zulu.bind(mike)(entity);
        return entity;
    };
    zulu['useIsContentShown'] = tango;
    tango = function(argFoo) {
        mike = argFoo;
        var _closure2_slot0 = mike;
        zulu = _closure1_slot4;
        mike = undefined;
        entity = function(argFoo) {
            mike = argFoo;
            var _closure3_slot0 = mike;
            zulu = _closure2_slot0;
            mike = zulu.some;
            entity = function(argFoo) {
                entity = _closure3_slot0;
                zulu = entity.currentlyShown;
                mike = zulu.has;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        entity = zulu.bind(mike)(entity);
        return entity;
    };
    zulu['useIsAnyContentShown'] = tango;
    tango = function(argFoo) {
        zulu = argFoo;
        tango = _closure1_slot4;
        mike = tango.getState;
        mike = mike.bind(tango)();
        mike = mike.currentlyShown;
        var _closure2_slot0 = mike;
        mike = zulu.find;
        entity = function(argFoo) {
            zulu = _closure2_slot0;
            mike = zulu.has;
            entity = argFoo;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    zulu['isAnyContentShown'] = tango;
    tango = function() {
        zulu = _closure1_slot4;
        entity = zulu.getState;
        entity = entity.bind(zulu)();
        oscar = entity.currentlyShown;
        tango = new Array(0);
        report = 0;
        golf = tango;
        entity = arraySpread(golf, oscar, report);
        mike = tango.filter;
        entity = function(argFoo) {
            zulu = _closure1_slot0;
            mike = _closure1_slot1;
            entity = 2;
            mike = mike[entity];
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            zulu = entity.CONTENT_TYPES_WITH_BYPASS_FATIGUE;
            mike = zulu.has;
            entity = argFoo;
            entity = mike.bind(zulu)(entity);
            entity = !entity;
            return entity;
        };
        entity = mike.bind(tango)(entity);
        mike = entity.length;
        entity = zulu.getState;
        entity = entity.bind(zulu)();
        entity = entity.currentlyShown;
        zulu = entity.size;
        entity = new Array(2);
        entity[0] = zulu;
        entity[1] = mike;
        return entity;
    };
    zulu['getCurrentlyShownCounts'] = tango;
    mike = function() {
        tango = _closure1_slot0;
        zulu = _closure1_slot1;
        entity = 3;
        zulu = zulu[entity];
        entity = undefined;
        report = tango.bind(entity)(zulu);
        tango = report.batchUpdates;
        zulu = function() {
            zulu = _closure1_slot4;
            mike = zulu.setState;
            entity = _closure1_slot3;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        zulu = tango.bind(report)(zulu);
        zulu = _closure1_slot2;
        mike = zulu.unschedule;
        mike = mike.bind(zulu)();
        return entity;
    };
    zulu['reset'] = mike;
    return entity;
})();