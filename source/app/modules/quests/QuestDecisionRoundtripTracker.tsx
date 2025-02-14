// app/modules/quests/QuestDecisionRoundtripTracker.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo) { // Original name: trackRoundtrip
        _fun70771: for(var _fun70771_ip = 0; ; ) switch(_fun70771_ip) {
 0:
            options = argFoo;
            entity = global;
            mike = entity.Math;
            entity = mike.random;
            mike = entity.bind(mike)();
            entity = 0.1;
            if(!(!(mike > entity))) { _fun70771_ip = 263; continue _fun70771 }
 38:
            entity = options.apiResponseTimestamp;
            report = null;
            entity = report == entity;
            verify = null;
            if(entity) { _fun70771_ip = 71; continue _fun70771 }
 55:
            mike = options.apiResponseTimestamp;
            entity = options.initialSendTimestamp;
            verify = mike - entity;
 71:
            mike = _closure1_slot0;
            foxtrot = _closure1_slot2;
            entity = 4;
            entity = foxtrot[entity];
            yankee = undefined;
            mike = mike.bind(yankee)(entity);
            entity = mike.getSignalStrength;
            golf = entity.bind(mike)();
            romeo = _closure1_slot1;
            entity = 5;
            entity = foxtrot[entity];
            tango = romeo.bind(yankee)(entity);
            zulu = tango.track;
            entity = _closure1_slot6;
            mike = entity.QUEST_DECISION_ROUNDTRIP;
            entity = {};
            offset = 6;
            offset = foxtrot[offset];
            offset = romeo.bind(yankee)(offset);
            backup = offset.bind(yankee)();
            kilo = entity;
            offset = copyDataProperties(kilo, backup);
            yankee = options.endpoint;
            offset = 'endpoint';
            entity[offset] = yankee;
            offset = options.wasSuccessful;
            options = 'was_successful';
            entity[options] = offset;
            options = 'api_latency_ms';
            entity[options] = verify;
            options = _closure1_slot5;
            oscar = options.getType;
            options = oscar.bind(options)();
            oscar = 'mobile_network_type';
            entity[oscar] = options;
            report = report != golf;
            if(!report) { _fun70771_ip = 247; continue _fun70771 }
 237:
            oscar = {};
            oscar['mobile_signal_strength_level'] = golf;
            report = oscar;
 247:
            kilo = entity;
            backup = report;
            report = copyDataProperties(kilo, backup);
            entity = zulu.bind(tango)(mike, entity);
 263:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot7 = entity;
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
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.AnalyticEvents;
    var _closure1_slot6 = tango;
    mike = function() {
        tango = _closure1_slot4;
        zulu = function() { // Original name: QuestDecisionRoundtripTracker
            zulu = this;
            tango = _closure1_slot3;
            mike = _closure2_slot0;
            entity = undefined;
            mike = tango.bind(entity)(zulu, mike);
            mike = global;
            mike = mike.Map;
            tango = mike.prototype;
            tango = Object.create(tango, {constructor: {value: mike}});
            golf = tango;
            mike = new golf[mike](oscar);
            mike = mike instanceof Object ? mike : tango;
            zulu['pendingRequests'] = mike;
            return entity;
        };
        var _closure2_slot0 = zulu;
        entity = {};
        mike = 'recordQuestRequestAttempt';
        entity['key'] = mike;
        mike = function(argFoo) { // Original name: value
            oscar = argFoo;
            zulu = this;
            var _closure3_slot0 = zulu;
            var _closure3_slot1 = oscar;
            report = {};
            entity = global;
            golf = entity.Date;
            tango = golf.now;
            tango = tango.bind(golf)();
            report['initialSendTimestamp'] = tango;
            report['endpoint'] = oscar;
            tango = null;
            report['apiResponseTimestamp'] = tango;
            tango = false;
            report['wasSuccessful'] = tango;
            tango = zulu.pendingRequests;
            zulu = tango.set;
            zulu = zulu.bind(tango)(oscar, report);
            tango = entity.setTimeout;
            entity = undefined;
            zulu = function() {
                _fun70775: for(var _fun70775_ip = 0; ; ) switch(_fun70775_ip) {
 0:
                    mike = _closure3_slot0;
                    tango = mike.pendingRequests;
                    zulu = tango.get;
                    mike = _closure3_slot1;
                    tango = zulu.bind(tango)(mike);
                    mike = null;
                    if(!(mike != tango)) { _fun70775_ip = 71; continue _fun70775 }
 33:
                    zulu = _closure1_slot7;
                    mike = undefined;
                    mike = zulu.bind(mike)(tango);
                    mike = _closure3_slot0;
                    zulu = mike.pendingRequests;
                    mike = zulu.delete;
                    entity = _closure3_slot1;
                    entity = mike.bind(zulu)(entity);
 71:
                    entity = undefined;
                    return entity;
                }
            };
            mike = 30000;
            mike = tango.bind(entity)(zulu, mike);
            return entity;
        };
        entity['value'] = mike;
        mike = new Array(2);
        mike[0] = entity;
        entity = {};
        oscar = 'recordQuestRequestApiResponse';
        entity['key'] = oscar;
        report = function(argFoo, argBar) { // Original name: value
            _fun70776: for(var _fun70776_ip = 0; ; ) switch(_fun70776_ip) {
 0:
                zulu = argFoo;
                entity = this;
                mike = argBar;
                oscar = mike.wasSuccessful;
                tango = entity.pendingRequests;
                mike = tango.get;
                mike = mike.bind(tango)(zulu);
                tango = null;
                if(!(tango != mike)) { _fun70776_ip = 114; continue _fun70776 }
 37:
                report = _closure1_slot7;
                tango = {};
                verify = tango;
                options = mike;
                mike = copyDataProperties(verify, options);
                mike = global;
                golf = mike.Date;
                mike = golf.now;
                golf = mike.bind(golf)();
                mike = 'apiResponseTimestamp';
                tango[mike] = golf;
                mike = 'wasSuccessful';
                tango[mike] = oscar;
                mike = undefined;
                mike = report.bind(mike)(tango);
                mike = entity.pendingRequests;
                entity = mike.delete;
                entity = entity.bind(mike)(zulu);
 114:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = report;
        mike[1] = entity;
        entity = undefined;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    mike = mike.bind(entity)();
    tango = mike.prototype;
    tango = Object.create(tango, {constructor: {value: mike}});
    foxtrot = tango;
    mike = new foxtrot[mike](romeo);
    mike = mike instanceof Object ? mike : tango;
    tango = 7;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/quests/QuestDecisionRoundtripTracker.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();