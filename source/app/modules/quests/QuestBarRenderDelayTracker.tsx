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
        michal = 'clearTimeoutTimer';
        entity['key'] = michal;
        michal = function() { // Original name: value
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
        entity['value'] = michal;
        michal = new Array(3);
        michal[0] = entity;
        entity = {};
        oscard = 'startTracking';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                report = argFoo;
                zuuluu = this;
                var _closure3_slot0 = zuuluu;
                var _closure3_slot1 = report;
                golfie = _closure1_slot0;
                oscard = _closure1_slot2;
                entity = 3;
                oscard = oscard[entity];
                entity = undefined;
                golfie = golfie.bind(entity)(oscard);
                oscard = golfie.isEligibleForQuestBarRenderDelay;
                tangon = _closure1_slot5;
                tangon = tangon.QUESTS_BAR;
                tangon = oscard.bind(golfie)(tangon);
                if(!tangon) { _fun00004_ip = 133; continue _fun00003 }
 65:
                tangon = zuuluu.clearTimeoutTimer;
                tangon = tangon.bind(zuuluu)();
                tangon = global;
                golfie = tangon.performance;
                oscard = golfie.now;
                oscard = oscard.bind(golfie)();
                zuuluu['startTime'] = oscard;
                zuuluu['questId'] = report;
                report = tangon.setTimeout;
                tangon = function() {
                    tangon = _closure3_slot0;
                    zuuluu = tangon.stopTracking;
                    michal = _closure3_slot1;
                    entity = true;
                    entity = zuuluu.bind(tangon)(michal, entity);
                    entity = undefined;
                    return entity;
                };
                michal = 10000;
                michal = report.bind(entity)(tangon, michal);
                zuuluu['timeoutTimer'] = michal;
 133:
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[1] = entity;
        entity = {};
        oscard = 'stopTracking';
        entity['key'] = oscard;
        report = function(argFoo) { // Original name: value
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                offset = argFoo;
                verify = arguments[1];
                zuuluu = this;
                entity = undefined;
                if(!(verify === entity)) { _fun00006_ip = 17; continue _fun00005 }
 15:
                verify = false;
 17:
                tangon = _closure1_slot0;
                report = _closure1_slot2;
                michal = 3;
                michal = report[michal];
                report = tangon.bind(entity)(michal);
                tangon = report.isEligibleForQuestBarRenderDelay;
                michal = _closure1_slot5;
                michal = michal.QUESTS_BAR;
                michal = tangon.bind(report)(michal);
                if(!michal) { _fun00006_ip = 317; continue _fun00005 }
 67:
                tangon = zuuluu.startTime;
                michal = null;
                if(!(michal !== tangon)) { _fun00006_ip = 317; continue _fun00005 }
 82:
                tangon = zuuluu.questId;
                if(!(tangon === offset)) { _fun00006_ip = 317; continue _fun00005 }
 95:
                if(verify) { _fun00006_ip = 108; continue _fun00005 }
 98:
                tangon = zuuluu.clearTimeoutTimer;
                tangon = tangon.bind(zuuluu)();
 108:
                golfie = global;
                option = golfie.Math;
                report = option.round;
                yankee = golfie.performance;
                tangon = yankee.now;
                yankee = tangon.bind(yankee)();
                tangon = zuuluu.startTime;
                tangon = yankee - tangon;
                report = report.bind(option)(tangon);
                zuuluu['startTime'] = michal;
                zuuluu = golfie.Math;
                michal = zuuluu.random;
                zuuluu = michal.bind(zuuluu)();
                michal = 0.1;
                if(!(!(zuuluu > michal))) { _fun00006_ip = 317; continue _fun00005 }
 190:
                zuuluu = _closure1_slot1;
                yankee = _closure1_slot2;
                michal = 4;
                michal = yankee[michal];
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.distribution;
                michal = {};
                option = _closure1_slot0;
                oscard = 5;
                oscard = yankee[oscard];
                oscard = option.bind(entity)(oscard);
                oscard = oscard.MetricEvents;
                oscard = oscard.QUEST_BAR_RENDER_DELAY;
                michal['name'] = oscard;
                oscard = golfie.HermesInternal;
                option = oscard.concat;
                oscard = 'quest_id:';
                option = option.bind(oscard)(offset);
                oscard = new Array(2);
                oscard[0] = option;
                golfie = golfie.HermesInternal;
                option = golfie.concat;
                golfie = 'timeout:';
                golfie = option.bind(golfie)(verify);
                oscard[1] = golfie;
                michal['tags'] = oscard;
                michal = zuuluu.bind(tangon)(michal, report);
 317:
                return entity;
            }
        };
        entity['value'] = report;
        michal[2] = entity;
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