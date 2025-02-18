// app/modules/keyword_filter/KeywordFilterExperiment.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    oscard = argBar;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = golfie;
    entity = global;
    option = entity.Object;
    report = option.defineProperty;
    tangon = {};
    yankee = true;
    tangon['value'] = yankee;
    entity = '__esModule';
    entity = report.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = golfie[entity];
    entity = undefined;
    option = oscard.bind(entity)(tangon);
    report = option.createExperiment;
    tangon = {'kind': 'user', 'id': '2024-04_keyword_filter_experiment', 'label': 'Replace registered keywords with asterisks'};
    verify = {};
    offset = false;
    verify['enabled'] = offset;
    tangon['defaultConfig'] = verify;
    offset = {'id': 1, 'label': 'Enable Keyword Filter'};
    verify = {};
    verify['enabled'] = yankee;
    offset['config'] = verify;
    verify = new Array(1);
    verify[0] = offset;
    tangon['treatments'] = verify;
    tangon = report.bind(option)(tangon);
    var _closure1_slot2 = tangon;
    report = 2;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/keyword_filter/KeywordFilterExperiment.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['KeywordFilterExperiment'] = tangon;
    tangon = function(argFoo) { // Original name: useIsEligibleForKeywordFiltering
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            entity = entity.location;
            report = _closure1_slot0;
            tangon = _closure1_slot1;
            michal = 1;
            tangon = tangon[michal];
            michal = undefined;
            report = report.bind(michal)(tangon);
            tangon = report.useIsEligibleForKeywordFilterUpsell;
            michal = {};
            michal['location'] = entity;
            michal = tangon.bind(report)(michal);
            report = _closure1_slot2;
            tangon = report.useExperiment;
            zuuluu = {};
            zuuluu['location'] = entity;
            entity = {};
            oscard = true;
            entity['autoTrackExposure'] = oscard;
            entity = tangon.bind(report)(zuuluu, entity);
            entity = entity.enabled;
            if(entity) { _fun00002_ip = 92; continue _fun00001 }
 89:
            entity = michal;
 92:
            return entity;
        }
    };
    zuuluu['useIsEligibleForKeywordFiltering'] = tangon;
    michal = function(argFoo) { // Original name: isEligibleForKeywordFiltering
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            report = entity.location;
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot1;
            michal = 1;
            zuuluu = zuuluu[michal];
            michal = undefined;
            tangon = tangon.bind(michal)(zuuluu);
            zuuluu = tangon.isEligibleForKeywordFilterUpsell;
            michal = {};
            michal['location'] = report;
            michal = zuuluu.bind(tangon)(michal);
            tangon = _closure1_slot2;
            zuuluu = tangon.getCurrentConfig;
            entity = {};
            entity['location'] = report;
            entity = zuuluu.bind(tangon)(entity);
            entity = entity.enabled;
            if(entity) { _fun00004_ip = 82; continue _fun00003 }
 79:
            entity = michal;
 82:
            return entity;
        }
    };
    zuuluu['isEligibleForKeywordFiltering'] = michal;
    return entity;
})();