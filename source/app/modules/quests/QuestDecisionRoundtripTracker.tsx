// app/modules/quests/QuestDecisionRoundtripTracker.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function(argFoo) { // Original name: trackRoundtrip
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            option = argFoo;
            entity = global;
            michal = entity.Math;
            entity = michal.random;
            michal = entity.bind(michal)();
            entity = 0.1;
            if(!(!(michal > entity))) { _fun00002_ip = 263; continue _fun00001 }
 38:
            entity = option.apiResponseTimestamp;
            report = null;
            entity = report == entity;
            verify = null;
            if(entity) { _fun00002_ip = 71; continue _fun00001 }
 55:
            michal = option.apiResponseTimestamp;
            entity = option.initialSendTimestamp;
            verify = michal - entity;
 71:
            michal = _closure1_slot0;
            foxtra = _closure1_slot2;
            entity = 4;
            entity = foxtra[entity];
            yankee = undefined;
            michal = michal.bind(yankee)(entity);
            entity = michal.getSignalStrength;
            golfie = entity.bind(michal)();
            romeon = _closure1_slot1;
            entity = 5;
            entity = foxtra[entity];
            tangon = romeon.bind(yankee)(entity);
            zuuluu = tangon.track;
            entity = _closure1_slot6;
            michal = entity.QUEST_DECISION_ROUNDTRIP;
            entity = {};
            offset = 6;
            offset = foxtra[offset];
            offset = romeon.bind(yankee)(offset);
            backup = offset.bind(yankee)();
            kiloes = entity;
            offset = copyDataProperties(kiloes, backup);
            yankee = option.endpoint;
            offset = 'endpoint';
            entity[offset] = yankee;
            offset = option.wasSuccessful;
            option = 'was_successful';
            entity[option] = offset;
            option = 'api_latency_ms';
            entity[option] = verify;
            option = _closure1_slot5;
            oscard = option.getType;
            option = oscard.bind(option)();
            oscard = 'mobile_network_type';
            entity[oscard] = option;
            report = report != golfie;
            if(!report) { _fun00002_ip = 247; continue _fun00001 }
 237:
            oscard = {};
            oscard['mobile_signal_strength_level'] = golfie;
            report = oscard;
 247:
            kiloes = entity;
            backup = report;
            report = copyDataProperties(kiloes, backup);
            entity = zuuluu.bind(tangon)(michal, entity);
 263:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot7 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.AnalyticEvents;
    var _closure1_slot6 = tangon;
    michal = function() {
        tangon = _closure1_slot4;
        zuuluu = function() { // Original name: QuestDecisionRoundtripTracker
            zuuluu = this;
            tangon = _closure1_slot3;
            michal = _closure2_slot0;
            entity = undefined;
            michal = tangon.bind(entity)(zuuluu, michal);
            michal = global;
            michal = michal.Map;
            tangon = michal.prototype;
            tangon = Object.create(tangon, {constructor: {value: michal}});
            golfie = tangon;
            michal = new golfie[michal](oscard);
            michal = michal instanceof Object ? michal : tangon;
            zuuluu['pendingRequests'] = michal;
            return entity;
        };
        var _closure2_slot0 = zuuluu;
        entity = {};
        michal = 'recordQuestRequestAttempt';
        entity['key'] = michal;
        michal = function(argFoo) { // Original name: value
            oscard = argFoo;
            zuuluu = this;
            var _closure3_slot0 = zuuluu;
            var _closure3_slot1 = oscard;
            report = {};
            entity = global;
            golfie = entity.Date;
            tangon = golfie.now;
            tangon = tangon.bind(golfie)();
            report['initialSendTimestamp'] = tangon;
            report['endpoint'] = oscard;
            tangon = null;
            report['apiResponseTimestamp'] = tangon;
            tangon = false;
            report['wasSuccessful'] = tangon;
            tangon = zuuluu.pendingRequests;
            zuuluu = tangon.set;
            zuuluu = zuuluu.bind(tangon)(oscard, report);
            tangon = entity.setTimeout;
            entity = undefined;
            zuuluu = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    michal = _closure3_slot0;
                    tangon = michal.pendingRequests;
                    zuuluu = tangon.get;
                    michal = _closure3_slot1;
                    tangon = zuuluu.bind(tangon)(michal);
                    michal = null;
                    if(!(michal != tangon)) { _fun00004_ip = 71; continue _fun00003 }
 33:
                    zuuluu = _closure1_slot7;
                    michal = undefined;
                    michal = zuuluu.bind(michal)(tangon);
                    michal = _closure3_slot0;
                    zuuluu = michal.pendingRequests;
                    michal = zuuluu.delete;
                    entity = _closure3_slot1;
                    entity = michal.bind(zuuluu)(entity);
 71:
                    entity = undefined;
                    return entity;
                }
            };
            michal = 30000;
            michal = tangon.bind(entity)(zuuluu, michal);
            return entity;
        };
        entity['value'] = michal;
        michal = new Array(2);
        michal[0] = entity;
        entity = {};
        oscard = 'recordQuestRequestApiResponse';
        entity['key'] = oscard;
        report = function(argFoo, argBar) { // Original name: value
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                zuuluu = argFoo;
                entity = this;
                michal = argBar;
                oscard = michal.wasSuccessful;
                tangon = entity.pendingRequests;
                michal = tangon.get;
                michal = michal.bind(tangon)(zuuluu);
                tangon = null;
                if(!(tangon != michal)) { _fun00006_ip = 114; continue _fun00005 }
 37:
                report = _closure1_slot7;
                tangon = {};
                verify = tangon;
                option = michal;
                michal = copyDataProperties(verify, option);
                michal = global;
                golfie = michal.Date;
                michal = golfie.now;
                golfie = michal.bind(golfie)();
                michal = 'apiResponseTimestamp';
                tangon[michal] = golfie;
                michal = 'wasSuccessful';
                tangon[michal] = oscard;
                michal = undefined;
                michal = report.bind(michal)(tangon);
                michal = entity.pendingRequests;
                entity = michal.delete;
                entity = entity.bind(michal)(zuuluu);
 114:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = report;
        michal[1] = entity;
        entity = undefined;
        entity = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    michal = michal.bind(entity)();
    tangon = michal.prototype;
    tangon = Object.create(tangon, {constructor: {value: michal}});
    foxtra = tangon;
    michal = new foxtra[michal](romeon);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 7;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/quests/QuestDecisionRoundtripTracker.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();