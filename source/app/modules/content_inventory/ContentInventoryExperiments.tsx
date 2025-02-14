// app/modules/content_inventory/ContentInventoryExperiments.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    options = argBar;
    zulu = argFred;
    verify = argPlugh;
    var _closure1_slot0 = options;
    var _closure1_slot1 = verify;
    entity = global;
    oscar = entity.Object;
    report = oscar.defineProperty;
    tango = {};
    romeo = true;
    tango['value'] = romeo;
    entity = '__esModule';
    entity = report.bind(oscar)(zulu, entity, tango);
    entity = 0;
    tango = verify[entity];
    entity = undefined;
    tango = options.bind(entity)(tango);
    yankee = tango.CommonTriggerPoints;
    tango = 1;
    report = verify[tango];
    golf = options.bind(entity)(report);
    oscar = golf.createExperiment;
    report = {'kind': 'user', 'id': '2024-03_content_inventory_memberlist_and_ranker', 'label': 'Enables the memberlist content feed'};
    offset = {'enabled': true, 'impressionCappingEnabled': true};
    report['defaultConfig'] = offset;
    backup = {'id': 4294967295, 'label': 'Not in experiment'};
    offset = {};
    foxtrot = false;
    offset['enabled'] = foxtrot;
    backup['config'] = offset;
    offset = new Array(2);
    offset[0] = backup;
    backup = {'id': 0, 'label': 'Holdout'};
    kilo = {};
    kilo['enabled'] = foxtrot;
    backup['config'] = kilo;
    offset[1] = backup;
    report['treatments'] = offset;
    oscar = oscar.bind(golf)(report);
    var _closure1_slot2 = oscar;
    report = verify[tango];
    offset = options.bind(entity)(report);
    golf = offset.createExperiment;
    report = {'kind': 'user', 'id': '2025-02_hotwheels_v2_model', 'label': 'Next iteration of the activity feed ranking model.'};
    yankee = yankee.CONNECTION_OPEN;
    report['commonTriggerPoint'] = yankee;
    yankee = {};
    report['defaultConfig'] = yankee;
    backup = {'id': 5, 'label': 'ML model V1'};
    yankee = {};
    backup['config'] = yankee;
    yankee = new Array(2);
    yankee[0] = backup;
    backup = {'id': 13, 'label': 'ML model V2'};
    kilo = {};
    backup['config'] = kilo;
    yankee[1] = backup;
    report['treatments'] = yankee;
    report = golf.bind(offset)(report);
    tango = verify[tango];
    offset = options.bind(entity)(tango);
    golf = offset.createExperiment;
    tango = {'kind': 'user', 'id': '2024-08_content_inventory_analytics_sampling', 'label': 'Content Inventory Analytics Sampling'};
    yankee = {};
    yankee['trackingEnabled'] = romeo;
    tango['defaultConfig'] = yankee;
    romeo = {'id': 1, 'label': 'Tracking disabled'};
    yankee = {};
    yankee['trackingEnabled'] = foxtrot;
    romeo['config'] = yankee;
    yankee = new Array(1);
    yankee[0] = romeo;
    tango['treatments'] = yankee;
    tango = golf.bind(offset)(tango);
    var _closure1_slot3 = tango;
    golf = 3;
    golf = verify[golf];
    verify = options.bind(entity)(golf);
    options = verify.fileFinishedImporting;
    golf = 'modules/content_inventory/ContentInventoryExperiments.tsx';
    golf = options.bind(verify)(golf);
    zulu['MemberlistRankerExperiment'] = oscar;
    zulu['HotwheelsActivityFeedMlModelV2Experiment'] = report;
    report = function(argFoo) { // Original name: isEligibleForContentInventoryV1
        _fun106680: for(var _fun106680_ip = 0; ; ) switch(_fun106680_ip) {
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
            if(entity) { _fun106680_ip = 84; continue _fun106680 }
 81:
            entity = mike;
 84:
            return entity;
        }
    };
    zulu['isEligibleForContentInventoryV1'] = report;
    report = function(argFoo) { // Original name: isEligibleForImpressionCapping
        _fun106681: for(var _fun106681_ip = 0; ; ) switch(_fun106681_ip) {
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
            if(!entity) { _fun106681_ip = 55; continue _fun106681 }
 51:
            entity = zulu === mike;
 55:
            return entity;
        }
    };
    zulu['isEligibleForImpressionCapping'] = report;
    zulu['ContentInventoryAnalyticsSamplingExperiment'] = tango;
    tango = function(argFoo) { // Original name: isEligibleForContentInventoryAnalyticsSampling
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
    zulu['isEligibleForContentInventoryAnalyticsSampling'] = tango;
    mike = function(argFoo) { // Original name: useIsEligibleForContentInventoryAnalyticsSampling
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
    zulu['useIsEligibleForContentInventoryAnalyticsSampling'] = mike;
    return entity;
})();