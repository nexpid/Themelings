// app/modules/applications/QuickLauncherMobileExperiment.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    oscar = argBar;
    zulu = argFred;
    golf = argPlugh;
    entity = global;
    options = entity.Object;
    report = options.defineProperty;
    tango = {};
    yankee = true;
    tango['value'] = yankee;
    entity = '__esModule';
    entity = report.bind(options)(zulu, entity, tango);
    entity = 0;
    tango = golf[entity];
    entity = undefined;
    tango = oscar.bind(entity)(tango);
    verify = tango.CommonTriggerPoints;
    tango = 1;
    tango = golf[tango];
    options = oscar.bind(entity)(tango);
    report = options.createExperiment;
    tango = {'kind': 'user', 'id': '2025-01_quick_launcher_mobile', 'label': 'Quick Launcher - Mobile'};
    offset = {};
    romeo = false;
    offset['enabled'] = romeo;
    tango['defaultConfig'] = offset;
    verify = verify.CONNECTION_OPEN_MOBILE;
    tango['commonTriggerPoint'] = verify;
    offset = {'id': 1, 'label': 'Enabled'};
    verify = {};
    verify['enabled'] = yankee;
    offset['config'] = verify;
    verify = new Array(1);
    verify[0] = offset;
    tango['treatments'] = verify;
    tango = report.bind(options)(tango);
    var _closure1_slot0 = tango;
    report = 2;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/applications/QuickLauncherMobileExperiment.tsx';
    report = oscar.bind(golf)(report);
    zulu['QuickLauncherMobileExperiment'] = tango;
    tango = function(argFoo) { // Original name: useIsQuickLauncherMobileEnabled
        entity = argFoo;
        entity = entity.location;
        tango = _closure1_slot0;
        zulu = tango.useExperiment;
        mike = {};
        mike['location'] = entity;
        entity = {};
        report = false;
        entity['autoTrackExposure'] = report;
        entity = zulu.bind(tango)(mike, entity);
        entity = entity.enabled;
        return entity;
    };
    zulu['useIsQuickLauncherMobileEnabled'] = tango;
    mike = function(argFoo) { // Original name: getIsQuickLauncherMobileEnabled
        entity = argFoo;
        entity = entity.location;
        tango = _closure1_slot0;
        zulu = tango.getCurrentConfig;
        mike = {};
        mike['location'] = entity;
        entity = {};
        report = false;
        entity['autoTrackExposure'] = report;
        entity = zulu.bind(tango)(mike, entity);
        entity = entity.enabled;
        return entity;
    };
    zulu['getIsQuickLauncherMobileEnabled'] = mike;
    return entity;
})();