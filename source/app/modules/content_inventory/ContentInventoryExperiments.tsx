// app/modules/content_inventory/ContentInventoryExperiments.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    verify = argBar;
    zuuluu = argFre;
    offset = argPlu;
    var _closure1_slot0 = verify;
    var _closure1_slot1 = offset;
    entity = global;
    oscard = entity.Object;
    report = oscard.defineProperty;
    michal = {};
    backup = true;
    michal['value'] = backup;
    entity = '__esModule';
    entity = report.bind(oscard)(zuuluu, entity, michal);
    entity = 0;
    michal = offset[entity];
    entity = undefined;
    michal = verify.bind(entity)(michal);
    yankee = michal.CommonTriggerPoints;
    michal = 1;
    report = offset[michal];
    golfie = verify.bind(entity)(report);
    oscard = golfie.createExperiment;
    report = {'kind': 'user', 'id': '2024-03_content_inventory_memberlist_and_ranker', 'label': 'Enables the memberlist content feed'};
    option = {'enabled': true, 'impressionCappingEnabled': true};
    report['defaultConfig'] = option;
    romeon = {'id': 4294967295, 'label': 'Not in experiment'};
    option = {};
    foxtra = false;
    option['enabled'] = foxtra;
    romeon['config'] = option;
    option = new Array(2);
    option[0] = romeon;
    romeon = {'id': 0, 'label': 'Holdout'};
    kiloes = {};
    kiloes['enabled'] = foxtra;
    romeon['config'] = kiloes;
    option[1] = romeon;
    report['treatments'] = option;
    golfie = oscard.bind(golfie)(report);
    var _closure1_slot2 = golfie;
    report = offset[michal];
    option = verify.bind(entity)(report);
    oscard = option.createExperiment;
    report = {'kind': 'user', 'id': '2025-02_hotwheels_v2_model', 'label': 'Next iteration of the activity feed ranking model.'};
    yankee = yankee.CONNECTION_OPEN;
    report['commonTriggerPoint'] = yankee;
    yankee = {};
    report['defaultConfig'] = yankee;
    romeon = {'id': 5, 'label': 'ML model V1'};
    yankee = {};
    romeon['config'] = yankee;
    yankee = new Array(2);
    yankee[0] = romeon;
    romeon = {'id': 13, 'label': 'ML model V2'};
    kiloes = {};
    romeon['config'] = kiloes;
    yankee[1] = romeon;
    report['treatments'] = yankee;
    oscard = oscard.bind(option)(report);
    report = offset[michal];
    yankee = verify.bind(entity)(report);
    option = yankee.createExperiment;
    report = {'kind': 'user', 'id': '2024-08_content_inventory_analytics_sampling', 'label': 'Content Inventory Analytics Sampling'};
    romeon = {};
    romeon['trackingEnabled'] = backup;
    report['defaultConfig'] = romeon;
    kiloes = {'id': 1, 'label': 'Tracking disabled'};
    romeon = {};
    romeon['trackingEnabled'] = foxtra;
    kiloes['config'] = romeon;
    romeon = new Array(1);
    romeon[0] = kiloes;
    report['treatments'] = romeon;
    report = option.bind(yankee)(report);
    var _closure1_slot3 = report;
    michal = offset[michal];
    yankee = verify.bind(entity)(michal);
    option = yankee.createExperiment;
    michal = {'kind': 'user', 'id': '2025-02_game_profile_reenable', 'label': 'Re-enable content inventory on game profile'};
    romeon = {};
    romeon['enabled'] = foxtra;
    michal['defaultConfig'] = romeon;
    foxtra = {'id': 1, 'label': 'Re-enable'};
    romeon = {};
    romeon['enabled'] = backup;
    foxtra['config'] = romeon;
    romeon = new Array(1);
    romeon[0] = foxtra;
    michal['treatments'] = romeon;
    michal = option.bind(yankee)(michal);
    option = 3;
    option = offset[option];
    offset = verify.bind(entity)(option);
    verify = offset.fileFinishedImporting;
    option = 'modules/content_inventory/ContentInventoryExperiments.tsx';
    option = verify.bind(offset)(option);
    zuuluu['MemberlistRankerExperiment'] = golfie;
    zuuluu['HotwheelsActivityFeedMlModelV2Experiment'] = oscard;
    oscard = function(argFoo) { // Original name: isEligibleForContentInventoryV1
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            report = argFoo;
            oscard = _closure1_slot2;
            tangon = oscard.getCurrentConfig;
            zuuluu = {};
            zuuluu['location'] = report;
            entity = {};
            golfie = true;
            entity['autoTrackExposure'] = golfie;
            entity = tangon.bind(oscard)(zuuluu, entity);
            entity = entity.enabled;
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot1;
            michal = 2;
            zuuluu = zuuluu[michal];
            michal = undefined;
            tangon = tangon.bind(michal)(zuuluu);
            zuuluu = tangon.getICYMIExperiment;
            michal = false;
            michal = zuuluu.bind(tangon)(report, michal);
            if(entity) { _fun00002_ip = 84; continue _fun00001 }
 81:
            entity = michal;
 84:
            return entity;
        }
    };
    zuuluu['isEligibleForContentInventoryV1'] = oscard;
    oscard = function(argFoo) { // Original name: isEligibleForImpressionCapping
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            report = _closure1_slot2;
            tangon = report.getCurrentConfig;
            michal = {};
            entity = argFoo;
            michal['location'] = entity;
            entity = {};
            zuuluu = true;
            entity['autoTrackExposure'] = zuuluu;
            michal = tangon.bind(report)(michal, entity);
            entity = michal.enabled;
            michal = michal.impressionCappingEnabled;
            if(!entity) { _fun00004_ip = 55; continue _fun00003 }
 51:
            entity = zuuluu === michal;
 55:
            return entity;
        }
    };
    zuuluu['isEligibleForImpressionCapping'] = oscard;
    zuuluu['ContentInventoryAnalyticsSamplingExperiment'] = report;
    report = function(argFoo) { // Original name: isEligibleForContentInventoryAnalyticsSampling
        tangon = _closure1_slot3;
        zuuluu = tangon.getCurrentConfig;
        michal = {};
        entity = argFoo;
        michal['location'] = entity;
        entity = {};
        report = true;
        entity['autoTrackExposure'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['isEligibleForContentInventoryAnalyticsSampling'] = report;
    tangon = function(argFoo) { // Original name: useIsEligibleForContentInventoryAnalyticsSampling
        tangon = _closure1_slot3;
        zuuluu = tangon.useExperiment;
        michal = {};
        entity = argFoo;
        michal['location'] = entity;
        entity = {};
        report = true;
        entity['autoTrackExposure'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['useIsEligibleForContentInventoryAnalyticsSampling'] = tangon;
    zuuluu['ReEnableGameProfileInventoryExperiment'] = michal;
    return entity;
})();