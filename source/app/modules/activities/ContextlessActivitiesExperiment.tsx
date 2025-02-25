// app/modules/activities/ContextlessActivitiesExperiment.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    oscard = argBar;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = golfie;
    tangon = function() { // Original name: getIsContextlessActivitiesExperimentEnabled
        zuuluu = _closure1_slot3;
        michal = zuuluu.getCurrentConfig;
        entity = {};
        tangon = 'getIsContextlessActivitiesExperimentEnabled';
        entity['location'] = tangon;
        entity = michal.bind(zuuluu)(entity);
        entity = entity.enabled;
        return entity;
    };
    var _closure1_slot4 = tangon;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    report = {};
    romeon = true;
    report['value'] = romeon;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, report);
    entity = 0;
    report = golfie[entity];
    entity = undefined;
    report = oscard.bind(entity)(report);
    report = report.ApplicationFlags;
    var _closure1_slot2 = report;
    report = 1;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    offset = report.CommonTriggerPoints;
    report = 2;
    report = golfie[report];
    verify = oscard.bind(entity)(report);
    option = verify.createExperiment;
    report = {'kind': 'user', 'id': '2024-11_activities_contextless', 'label': 'Contextless Activities Experiment'};
    yankee = {};
    foxtra = false;
    yankee['enabled'] = foxtra;
    report['defaultConfig'] = yankee;
    offset = offset.CONNECTION_OPEN;
    report['commonTriggerPoint'] = offset;
    yankee = {'id': 1, 'label': 'Enable contextless activities'};
    offset = {};
    offset['enabled'] = romeon;
    yankee['config'] = offset;
    offset = new Array(1);
    offset[0] = yankee;
    report['treatments'] = offset;
    report = option.bind(verify)(report);
    var _closure1_slot3 = report;
    report = 4;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/activities/ContextlessActivitiesExperiment.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['getIsContextlessActivitiesExperimentEnabled'] = tangon;
    tangon = function(argFoo) { // Original name: useIsContextlessActivitiesExperimentEnabled
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            report = _closure1_slot3;
            tangon = report.useExperiment;
            entity = {};
            oscard = 'useIsContextlessActivitiesExperimentEnabled';
            entity['location'] = oscard;
            entity = tangon.bind(report)(entity);
            entity = entity.enabled;
            if(!entity) { _fun00002_ip = 45; continue _fun00001 }
 39:
            tangon = null;
            entity = tangon != zuuluu;
 45:
            if(!entity) { _fun00002_ip = 97; continue _fun00001 }
 48:
            oscard = _closure1_slot0;
            report = _closure1_slot1;
            tangon = 3;
            report = report[tangon];
            tangon = undefined;
            report = oscard.bind(tangon)(report);
            tangon = report.hasFlag;
            zuuluu = zuuluu.flags;
            michal = _closure1_slot2;
            michal = michal.CONTEXTLESS_ACTIVITY;
            entity = tangon.bind(report)(zuuluu, michal);
 97:
            return entity;
        }
    };
    zuuluu['useIsContextlessActivitiesExperimentEnabled'] = tangon;
    michal = function(argFoo) { // Original name: isContextlessActivitiesEnabledForApp
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot1;
            entity = 3;
            entity = zuuluu[entity];
            zuuluu = undefined;
            oscard = tangon.bind(zuuluu)(entity);
            report = oscard.hasFlag;
            entity = argFoo;
            tangon = entity.flags;
            entity = _closure1_slot2;
            entity = entity.CONTEXTLESS_ACTIVITY;
            entity = report.bind(oscard)(tangon, entity);
            if(!entity) { _fun00004_ip = 66; continue _fun00003 }
 58:
            michal = _closure1_slot4;
            entity = michal.bind(zuuluu)();
 66:
            return entity;
        }
    };
    zuuluu['isContextlessActivitiesEnabledForApp'] = michal;
    return entity;
})();