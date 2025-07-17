// app/modules/quests/QuestBarRenderDelayTracker.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
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
    tangon = report.bind(entity)(tangon);
    tangon = tangon.QuestsExperimentLocations;
    var _closure1_slot5 = tangon;
    michal = function() {
        tangon = _closure1_slot4;
        zuuluu = function() { // Original name: QuestBarRenderDelayTracker
            zuuluu = this;
            tangon = _closure1_slot3;
            michal = _closure2_slot0;
            entity = undefined;
            michal = tangon.bind(entity)(zuuluu, michal);
            michal = null;
            zuuluu['startTime'] = michal;
            zuuluu['questId'] = michal;
            zuuluu['timeoutTimer'] = michal;
            return entity;
        };
        var _closure2_slot0 = zuuluu;
        entity = {};
        michal = 'isEligible';
        entity['key'] = michal;
        michal = function() { // Original name: value
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            michal = 3;
            zuuluu = zuuluu[michal];
            michal = undefined;
            zuuluu = tangon.bind(michal)(zuuluu);
            michal = zuuluu.isEligibleForQuestBarRenderDelay;
            entity = _closure1_slot5;
            entity = entity.QUESTS_BAR;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        entity['value'] = michal;
        michal = new Array(6);
        michal[0] = entity;
        entity = {};
        oscard = 'clearTimeoutTimer';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                michal = this;
                zuuluu = michal.timeoutTimer;
                entity = null;
                if(!(entity != zuuluu)) { _fun00002_ip = 42; continue _fun00001 }
 15:
                zuuluu = global;
                report = zuuluu.clearTimeout;
                tangon = michal.timeoutTimer;
                zuuluu = undefined;
                zuuluu = report.bind(zuuluu)(tangon);
                michal['timeoutTimer'] = entity;
 42:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[1] = entity;
        entity = {};
        oscard = 'sendMetric';
        entity['key'] = oscard;
        oscard = function(argFoo, argBar, argBaz) { // Original name: value
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                report = global;
                michal = report.Math;
                entity = michal.random;
                michal = entity.bind(michal)();
                entity = 0.1;
                if(!(!(michal > entity))) { _fun00004_ip = 176; continue _fun00003 }
 35:
                zuuluu = _closure1_slot1;
                option = _closure1_slot2;
                michal = 4;
                michal = option[michal];
                golfie = undefined;
                tangon = zuuluu.bind(golfie)(michal);
                zuuluu = tangon.distribution;
                michal = {};
                oscard = _closure1_slot0;
                entity = 5;
                entity = option[entity];
                entity = oscard.bind(golfie)(entity);
                entity = entity.MetricEvents;
                entity = entity.QUEST_BAR_RENDER_DELAY;
                michal['name'] = entity;
                entity = report.HermesInternal;
                golfie = entity.concat;
                oscard = 'quest_id:';
                entity = argFoo;
                oscard = golfie.bind(oscard)(entity);
                entity = new Array(2);
                entity[0] = oscard;
                report = report.HermesInternal;
                golfie = report.concat;
                oscard = 'timeout:';
                report = argBar;
                report = golfie.bind(oscard)(report);
                entity[1] = report;
                michal['tags'] = entity;
                entity = argBaz;
                entity = zuuluu.bind(tangon)(michal, entity);
 176:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[2] = entity;
        entity = {};
        oscard = 'startTracking';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                tangon = argFoo;
                michal = this;
                var _closure3_slot0 = michal;
                var _closure3_slot1 = tangon;
                zuuluu = michal.isEligible;
                zuuluu = zuuluu.bind(michal)();
                if(!zuuluu) { _fun00006_ip = 101; continue _fun00005 }
 29:
                zuuluu = michal.clearTracking;
                zuuluu = zuuluu.bind(michal)();
                zuuluu = global;
                oscard = zuuluu.performance;
                report = oscard.now;
                report = report.bind(oscard)();
                michal['startTime'] = report;
                michal['questId'] = tangon;
                report = zuuluu.setTimeout;
                tangon = undefined;
                zuuluu = function() {
                    tangon = _closure3_slot0;
                    zuuluu = tangon.stopTracking;
                    michal = _closure3_slot1;
                    entity = true;
                    entity = zuuluu.bind(tangon)(michal, entity);
                    entity = undefined;
                    return entity;
                };
                entity = 30000;
                entity = report.bind(tangon)(zuuluu, entity);
                michal['timeoutTimer'] = entity;
 101:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[3] = entity;
        entity = {};
        oscard = 'stopTracking';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                oscard = argFoo;
                report = arguments[1];
                tangon = this;
                entity = undefined;
                if(!(report === entity)) { _fun00008_ip = 17; continue _fun00007 }
 15:
                report = false;
 17:
                michal = tangon.isEligible;
                michal = michal.bind(tangon)();
                if(!michal) { _fun00008_ip = 129; continue _fun00007 }
 30:
                zuuluu = tangon.startTime;
                michal = null;
                if(!(michal !== zuuluu)) { _fun00008_ip = 129; continue _fun00007 }
 42:
                michal = tangon.questId;
                if(!(michal === oscard)) { _fun00008_ip = 129; continue _fun00007 }
 52:
                zuuluu = 30000;
                if(report) { _fun00008_ip = 104; continue _fun00007 }
 61:
                michal = global;
                option = michal.Math;
                golfie = option.round;
                verify = michal.performance;
                michal = verify.now;
                verify = michal.bind(verify)();
                michal = tangon.startTime;
                michal = verify - michal;
                zuuluu = golfie.bind(option)(michal);
 104:
                michal = tangon.clearTracking;
                michal = michal.bind(tangon)();
                michal = tangon.sendMetric;
                michal = michal.bind(tangon)(oscard, report, zuuluu);
 129:
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[4] = entity;
        entity = {};
        oscard = 'clearTracking';
        entity['key'] = oscard;
        report = function() { // Original name: value
            michal = this;
            entity = michal.clearTimeoutTimer;
            entity = entity.bind(michal)();
            entity = null;
            michal['startTime'] = entity;
            michal['questId'] = entity;
            entity = undefined;
            return entity;
        };
        entity['value'] = report;
        michal[5] = entity;
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
    tangon = 6;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/quests/QuestBarRenderDelayTracker.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();