// app/modules/quests/experiments/FetchQuestOnPostConnectionOpenExperiment.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    foxtra = true;
    tangon['value'] = foxtra;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    verify = report.bind(entity)(tangon);
    option = verify.createExperiment;
    golfie = {'id': '2025-04_fetch_quests_on_postconnectionopen', 'kind': 'user', 'label': 'Fetch Quests ON_POST_CONNECTION_OPEN'};
    tangon = {};
    yankee = false;
    tangon['enabled'] = yankee;
    golfie['defaultConfig'] = tangon;
    tangon = {'id': 0, 'label': 'Control'};
    offset = {};
    offset['enabled'] = yankee;
    tangon['config'] = offset;
    offset = new Array(2);
    offset[0] = tangon;
    yankee = {'id': 1, 'label': 'Fetch quests during ON_POST_CONNECTION_OPEN'};
    tangon = 1;
    romeon = {};
    romeon['enabled'] = foxtra;
    yankee['config'] = romeon;
    offset[1] = yankee;
    golfie['treatments'] = offset;
    golfie = option.bind(verify)(golfie);
    var _closure1_slot0 = golfie;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/quests/experiments/FetchQuestOnPostConnectionOpenExperiment.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) {
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            entity = michal.location;
            report = michal.autoTrackExposure;
            michal = undefined;
            if(!(report === michal)) { _fun00002_ip = 22; continue _fun00001 }
 20:
            report = false;
 22:
            tangon = _closure1_slot0;
            zuuluu = tangon.getCurrentConfig;
            michal = {};
            michal['location'] = entity;
            entity = {};
            entity['autoTrackExposure'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            entity = entity.enabled;
            return entity;
        }
    };
    zuuluu['getIsEligibleForFetchQuestOnPostConnectionOpen'] = tangon;
    michal = function(argFoo) {
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            michal = argFoo;
            entity = michal.location;
            report = michal.autoTrackExposure;
            michal = undefined;
            if(!(report === michal)) { _fun00004_ip = 22; continue _fun00003 }
 20:
            report = false;
 22:
            tangon = _closure1_slot0;
            zuuluu = tangon.useExperiment;
            michal = {};
            michal['location'] = entity;
            entity = {};
            entity['autoTrackExposure'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            entity = entity.enabled;
            return entity;
        }
    };
    zuuluu['useIsEligibleForFetchQuestOnPostConnectionOpen'] = michal;
    return entity;
})();