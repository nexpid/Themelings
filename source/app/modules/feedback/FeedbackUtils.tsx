// app/modules/feedback/FeedbackUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscard;
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
    golfie = tangon.FeedbackType;
    var _closure1_slot3 = golfie;
    tangon = tangon.MAX_REPRESENTABLE_DATE;
    var _closure1_slot4 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.AnalyticEvents;
    var _closure1_slot5 = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/feedback/FeedbackUtils.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo, argBar) {
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argBar;
            var _closure2_slot0 = entity;
            tangon = _closure1_slot1;
            zuuluu = _closure1_slot2;
            entity = 2;
            zuuluu = zuuluu[entity];
            entity = undefined;
            tangon = tangon.bind(entity)(zuuluu);
            zuuluu = tangon.shuffle;
            entity = argFoo;
            entity = zuuluu.bind(tangon)(entity);
            zuuluu = entity.findIndex;
            michal = function(argFoo) {
                entity = argFoo;
                michal = entity.value;
                entity = _closure2_slot0;
                entity = michal === entity;
                return entity;
            };
            report = zuuluu.bind(entity)(michal);
            michal = -1;
            if(!(report > michal)) { _fun00002_ip = 105; continue _fun00001 }
 76:
            zuuluu = entity[report];
            tangon = entity.splice;
            michal = 1;
            michal = tangon.bind(entity)(report, michal);
            michal = entity.push;
            michal = michal.bind(entity)(zuuluu);
 105:
            return entity;
        }
    };
    zuuluu['shuffleProblems'] = tangon;
    michal = function(argFoo) { // Original name: processOptOut
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            offset = entity.feedbackType;
            var _closure2_slot0 = offset;
            verify = entity.location;
            oscard = _closure1_slot0;
            golfie = _closure1_slot2;
            entity = 3;
            tangon = golfie[entity];
            entity = undefined;
            option = oscard.bind(entity)(tangon);
            report = option.getFeedbackPersistenceExperimentConfig;
            tangon = {};
            tangon['location'] = verify;
            tangon = report.bind(option)(tangon);
            tangon = tangon.persistToBackend;
            report = 4;
            report = golfie[report];
            report = oscard.bind(entity)(report);
            report = report.FeedbackConfig;
            report = report[offset];
            oscard = report.hotspot;
            if(tangon) { _fun00004_ip = 132; continue _fun00003 }
 99:
            report = _closure1_slot0;
            golfie = _closure1_slot2;
            tangon = 7;
            tangon = golfie[tangon];
            report = report.bind(entity)(tangon);
            tangon = report.hideHotspot;
            tangon = tangon.bind(report)(oscard);
            _fun00004_ip = 239; continue _fun00003;
 132:
            oscard = _closure1_slot1;
            report = _closure1_slot2;
            tangon = 5;
            tangon = report[tangon];
            option = oscard.bind(entity)(tangon);
            golfie = option.track;
            tangon = _closure1_slot5;
            oscard = tangon.USER_SETTINGS_IN_APP_FEEDBACK_OPTED_OUT;
            tangon = {};
            verify = _closure1_slot3;
            verify = verify[offset];
            tangon['feedback_type'] = verify;
            verify = _closure1_slot4;
            tangon['opted_out_until'] = verify;
            tangon = golfie.bind(option)(oscard, tangon);
            tangon = _closure1_slot0;
            zuuluu = 6;
            zuuluu = report[zuuluu];
            zuuluu = tangon.bind(entity)(zuuluu);
            tangon = zuuluu.InAppFeedbackStates;
            zuuluu = tangon.updateSetting;
            michal = function(argFoo) {
                tangon = argFoo;
                entity = {};
                golfie = entity;
                oscard = tangon;
                michal = copyDataProperties(golfie, oscard);
                zuuluu = _closure2_slot0;
                michal = {};
                oscard = tangon[zuuluu];
                golfie = michal;
                tangon = copyDataProperties(golfie, oscard);
                report = _closure1_slot4;
                tangon = 'optOutExpiryTime';
                michal[tangon] = report;
                entity[zuuluu] = michal;
                return entity;
            };
            michal = zuuluu.bind(tangon)(michal);
 239:
            return entity;
        }
    };
    zuuluu['processOptOut'] = michal;
    return entity;
})();