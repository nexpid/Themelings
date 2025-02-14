// app/modules/activities/ContextlessActivitiesExperiment.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    oscar = argBar;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = golf;
    tango = function() { // Original name: getIsContextlessActivitiesExperimentEnabled
        zulu = _closure1_slot3;
        mike = zulu.getCurrentConfig;
        entity = {};
        tango = 'getIsContextlessActivitiesExperimentEnabled';
        entity['location'] = tango;
        entity = mike.bind(zulu)(entity);
        entity = entity.enabled;
        return entity;
    };
    var _closure1_slot4 = tango;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    report = {};
    romeo = true;
    report['value'] = romeo;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, report);
    entity = 0;
    report = golf[entity];
    entity = undefined;
    report = oscar.bind(entity)(report);
    report = report.ApplicationFlags;
    var _closure1_slot2 = report;
    report = 1;
    report = golf[report];
    report = oscar.bind(entity)(report);
    offset = report.CommonTriggerPoints;
    report = 2;
    report = golf[report];
    verify = oscar.bind(entity)(report);
    options = verify.createExperiment;
    report = {'kind': 'user', 'id': '2024-11_activities_contextless', 'label': 'Contextless Activities Experiment'};
    yankee = {};
    foxtrot = false;
    yankee['enabled'] = foxtrot;
    report['defaultConfig'] = yankee;
    offset = offset.CONNECTION_OPEN;
    report['commonTriggerPoint'] = offset;
    yankee = {'id': 1, 'label': 'Enable contextless activities'};
    offset = {};
    offset['enabled'] = romeo;
    yankee['config'] = offset;
    offset = new Array(1);
    offset[0] = yankee;
    report['treatments'] = offset;
    report = options.bind(verify)(report);
    var _closure1_slot3 = report;
    report = 4;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/activities/ContextlessActivitiesExperiment.tsx';
    report = oscar.bind(golf)(report);
    zulu['getIsContextlessActivitiesExperimentEnabled'] = tango;
    tango = function() { // Original name: useIsContextlessActivitiesExperimentEnabled
        zulu = _closure1_slot3;
        mike = zulu.useExperiment;
        entity = {};
        tango = 'useIsContextlessActivitiesExperimentEnabled';
        entity['location'] = tango;
        entity = mike.bind(zulu)(entity);
        entity = entity.enabled;
        return entity;
    };
    zulu['useIsContextlessActivitiesExperimentEnabled'] = tango;
    mike = function(argFoo) { // Original name: isContextlessActivitiesEnabledForApp
        _fun54078: for(var _fun54078_ip = 0; ; ) switch(_fun54078_ip) {
 0:
            tango = _closure1_slot0;
            zulu = _closure1_slot1;
            entity = 3;
            entity = zulu[entity];
            zulu = undefined;
            oscar = tango.bind(zulu)(entity);
            report = oscar.hasFlag;
            entity = argFoo;
            tango = entity.flags;
            entity = _closure1_slot2;
            entity = entity.CONTEXTLESS_ACTIVITY;
            entity = report.bind(oscar)(tango, entity);
            if(!entity) { _fun54078_ip = 66; continue _fun54078 }
 58:
            mike = _closure1_slot4;
            entity = mike.bind(zulu)();
 66:
            return entity;
        }
    };
    zulu['isContextlessActivitiesEnabledForApp'] = mike;
    return entity;
})();