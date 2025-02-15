// app/modules/content_inventory/ContentInventoryExperiments.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    verify = argBar;
    zulu = argFred;
    offset = argPlugh;
    var _closure1_slot0 = verify;
    var _closure1_slot1 = offset;
    entity = global;
    oscar = entity.Object;
    report = oscar.defineProperty;
    mike = {};
    backup = true;
    mike['value'] = backup;
    entity = '__esModule';
    entity = report.bind(oscar)(zulu, entity, mike);
    entity = 0;
    mike = offset[entity];
    entity = undefined;
    mike = verify.bind(entity)(mike);
    yankee = mike.CommonTriggerPoints;
    mike = 1;
    report = offset[mike];
    golf = verify.bind(entity)(report);
    oscar = golf.createExperiment;
    report = {'kind': 'user', 'id': '2024-03_content_inventory_memberlist_and_ranker', 'label': 'Enables the memberlist content feed'};
    options = {'enabled': true, 'impressionCappingEnabled': true};
    report['defaultConfig'] = options;
    romeo = {'id': 4294967295, 'label': 'Not in experiment'};
    options = {};
    foxtrot = false;
    options['enabled'] = foxtrot;
    romeo['config'] = options;
    options = new Array(2);
    options[0] = romeo;
    romeo = {'id': 0, 'label': 'Holdout'};
    kilo = {};
    kilo['enabled'] = foxtrot;
    romeo['config'] = kilo;
    options[1] = romeo;
    report['treatments'] = options;
    golf = oscar.bind(golf)(report);
    var _closure1_slot2 = golf;
    report = offset[mike];
    options = verify.bind(entity)(report);
    oscar = options.createExperiment;
    report = {'kind': 'user', 'id': '2025-02_hotwheels_v2_model', 'label': 'Next iteration of the activity feed ranking model.'};
    yankee = yankee.CONNECTION_OPEN;
    report['commonTriggerPoint'] = yankee;
    yankee = {};
    report['defaultConfig'] = yankee;
    romeo = {'id': 5, 'label': 'ML model V1'};
    yankee = {};
    romeo['config'] = yankee;
    yankee = new Array(2);
    yankee[0] = romeo;
    romeo = {'id': 13, 'label': 'ML model V2'};
    kilo = {};
    romeo['config'] = kilo;
    yankee[1] = romeo;
    report['treatments'] = yankee;
    oscar = oscar.bind(options)(report);
    report = offset[mike];
    yankee = verify.bind(entity)(report);
    options = yankee.createExperiment;
    report = {'kind': 'user', 'id': '2024-08_content_inventory_analytics_sampling', 'label': 'Content Inventory Analytics Sampling'};
    romeo = {};
    romeo['trackingEnabled'] = backup;
    report['defaultConfig'] = romeo;
    kilo = {'id': 1, 'label': 'Tracking disabled'};
    romeo = {};
    romeo['trackingEnabled'] = foxtrot;
    kilo['config'] = romeo;
    romeo = new Array(1);
    romeo[0] = kilo;
    report['treatments'] = romeo;
    report = options.bind(yankee)(report);
    var _closure1_slot3 = report;
    mike = offset[mike];
    yankee = verify.bind(entity)(mike);
    options = yankee.createExperiment;
    mike = {'kind': 'user', 'id': '2025-02_game_profile_reenable', 'label': 'Re-enable content inventory on game profile'};
    romeo = {};
    romeo['enabled'] = foxtrot;
    mike['defaultConfig'] = romeo;
    foxtrot = {'id': 1, 'label': 'Re-enable'};
    romeo = {};
    romeo['enabled'] = backup;
    foxtrot['config'] = romeo;
    romeo = new Array(1);
    romeo[0] = foxtrot;
    mike['treatments'] = romeo;
    mike = options.bind(yankee)(mike);
    options = 3;
    options = offset[options];
    offset = verify.bind(entity)(options);
    verify = offset.fileFinishedImporting;
    options = 'modules/content_inventory/ContentInventoryExperiments.tsx';
    options = verify.bind(offset)(options);
    zulu['MemberlistRankerExperiment'] = golf;
    zulu['HotwheelsActivityFeedMlModelV2Experiment'] = oscar;
    oscar = function(argFoo) { // Original name: isEligibleForContentInventoryV1
        _fun106672: for(var _fun106672_ip = 0; ; ) switch(_fun106672_ip) {
 0:
            report = argFoo;
            oscar = _closure1_slot2;
            tango = oscar.getCurrentConfig;
            zulu = {};
            zulu['location'] = report;
            entity = {};
            golf = true;
            entity['autoTrackExposure'] = golf;
            entity = tango.bind(oscar)(zulu, entity);
            entity = entity.enabled;
            tango = _closure1_slot0;
            zulu = _closure1_slot1;
            mike = 2;
            zulu = zulu[mike];
            mike = undefined;
            tango = tango.bind(mike)(zulu);
            zulu = tango.getICYMIExperiment;
            mike = false;
            mike = zulu.bind(tango)(report, mike);
            if(entity) { _fun106672_ip = 84; continue _fun106672 }
 81:
            entity = mike;
 84:
            return entity;
        }
    };
    zulu['isEligibleForContentInventoryV1'] = oscar;
    oscar = function(argFoo) { // Original name: isEligibleForImpressionCapping
        _fun106673: for(var _fun106673_ip = 0; ; ) switch(_fun106673_ip) {
 0:
            report = _closure1_slot2;
            tango = report.getCurrentConfig;
            mike = {};
            entity = argFoo;
            mike['location'] = entity;
            entity = {};
            zulu = true;
            entity['autoTrackExposure'] = zulu;
            mike = tango.bind(report)(mike, entity);
            entity = mike.enabled;
            mike = mike.impressionCappingEnabled;
            if(!entity) { _fun106673_ip = 55; continue _fun106673 }
 51:
            entity = zulu === mike;
 55:
            return entity;
        }
    };
    zulu['isEligibleForImpressionCapping'] = oscar;
    zulu['ContentInventoryAnalyticsSamplingExperiment'] = report;
    report = function(argFoo) { // Original name: isEligibleForContentInventoryAnalyticsSampling
        tango = _closure1_slot3;
        zulu = tango.getCurrentConfig;
        mike = {};
        entity = argFoo;
        mike['location'] = entity;
        entity = {};
        report = true;
        entity['autoTrackExposure'] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['isEligibleForContentInventoryAnalyticsSampling'] = report;
    tango = function(argFoo) { // Original name: useIsEligibleForContentInventoryAnalyticsSampling
        tango = _closure1_slot3;
        zulu = tango.useExperiment;
        mike = {};
        entity = argFoo;
        mike['location'] = entity;
        entity = {};
        report = true;
        entity['autoTrackExposure'] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['useIsEligibleForContentInventoryAnalyticsSampling'] = tango;
    zulu['ReEnableGameProfileInventoryExperiment'] = mike;
    return entity;
})();