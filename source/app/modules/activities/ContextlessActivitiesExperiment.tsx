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
        entity = entity.enabledOnMobile;
        return entity;
    };
    var _closure1_slot4 = tangon;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
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
    yankee = {'enabledOnDesktop': false, 'enabledOnMobile': false};
    report['defaultConfig'] = yankee;
    offset = offset.CONNECTION_OPEN;
    report['commonTriggerPoint'] = offset;
    yankee = {'id': 1, 'label': 'Enable contextless activities on desktop only'};
    offset = {'enabledOnDesktop': true, 'enabledOnMobile': false};
    yankee['config'] = offset;
    offset = new Array(2);
    offset[0] = yankee;
    yankee = {'id': 2, 'label': 'Enable contextless activities on desktop and mobile'};
    romeon = {'enabledOnDesktop': true, 'enabledOnMobile': true};
    yankee['config'] = romeon;
    offset[1] = yankee;
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
            entity = _closure1_slot4;
            oscard = undefined;
            entity = entity.bind(oscard)();
            if(!entity) { _fun00002_ip = 25; continue _fun00001 }
 19:
            tangon = null;
            entity = tangon != zuuluu;
 25:
            if(!entity) { _fun00002_ip = 75; continue _fun00001 }
 28:
            report = _closure1_slot0;
            golfie = _closure1_slot1;
            tangon = 3;
            tangon = golfie[tangon];
            report = report.bind(oscard)(tangon);
            tangon = report.hasFlag;
            zuuluu = zuuluu.flags;
            michal = _closure1_slot2;
            michal = michal.CONTEXTLESS_ACTIVITY;
            entity = tangon.bind(report)(zuuluu, michal);
 75:
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