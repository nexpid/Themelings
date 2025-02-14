// app/modules/activities/ActivityPopoutWindowExperiment.tsx
export default (function(_, argBar, __, ___, ____, argFred, argPlugh) {
    oscar = argBar;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = golf;
    entity = global;
    options = entity.Object;
    report = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = report.bind(options)(zulu, entity, tango);
    entity = 0;
    tango = golf[entity];
    entity = undefined;
    tango = oscar.bind(entity)(tango);
    report = tango.CommonTriggerPoints;
    tango = 1;
    tango = golf[tango];
    verify = oscar.bind(entity)(tango);
    options = verify.createExperiment;
    tango = {'kind': 'user', 'id': '2024-11_activity_popout_window', 'label': 'Activity Popout Window Experiment'};
    offset = {'enabled': false, 'enableOverlayInActivityPopoutWindow': false, 'enableGoLiveFromActivityCard': false};
    tango['defaultConfig'] = offset;
    report = report.CONNECTION_OPEN;
    tango['commonTriggerPoint'] = report;
    report = {'id': 1, 'label': 'Enable activity popout window'};
    offset = {'enabled': true, 'enableOverlayInActivityPopoutWindow': false, 'enableGoLiveFromActivityCard': false};
    report['config'] = offset;
    offset = new Array(3);
    offset[0] = report;
    report = {'id': 2, 'label': 'Enable activity popout window with overlay'};
    yankee = {'enabled': true, 'enableOverlayInActivityPopoutWindow': true, 'enableGoLiveFromActivityCard': false};
    report['config'] = yankee;
    offset[1] = report;
    yankee = {'id': 3, 'label': 'Enable activity popout window with overlay and GoLive from activity card'};
    report = 3;
    romeo = {'enabled': true, 'enableOverlayInActivityPopoutWindow': true, 'enableGoLiveFromActivityCard': true};
    yankee['config'] = romeo;
    offset[2] = yankee;
    tango['treatments'] = offset;
    tango = options.bind(verify)(tango);
    var _closure1_slot2 = tango;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/activities/ActivityPopoutWindowExperiment.tsx';
    report = oscar.bind(golf)(report);
    zulu['default'] = tango;
    tango = function() { // Original name: getIsActivityPopoutOverlayEnabled
        _fun106660: for(var _fun106660_ip = 0; ; ) switch(_fun106660_ip) {
 0:
            tango = _closure1_slot0;
            zulu = _closure1_slot1;
            mike = 2;
            zulu = zulu[mike];
            mike = undefined;
            tango = tango.bind(mike)(zulu);
            zulu = tango.getUseOverlayV3;
            mike = 'ActivityPopout';
            mike = zulu.bind(tango)(mike);
            mike = mike.overlayV3UI;
            tango = _closure1_slot2;
            zulu = tango.getCurrentConfig;
            entity = {};
            report = 'getIsActivityPopoutOverlayEnabled';
            entity['location'] = report;
            entity = zulu.bind(tango)(entity);
            entity = entity.enableOverlayInActivityPopoutWindow;
            if(!entity) { _fun106660_ip = 87; continue _fun106660 }
 84:
            entity = mike;
 87:
            return entity;
        }
    };
    zulu['getIsActivityPopoutOverlayEnabled'] = tango;
    tango = function() { // Original name: useIsActivityPopoutOverlayEnabled
        _fun106661: for(var _fun106661_ip = 0; ; ) switch(_fun106661_ip) {
 0:
            tango = _closure1_slot0;
            zulu = _closure1_slot1;
            mike = 2;
            zulu = zulu[mike];
            mike = undefined;
            tango = tango.bind(mike)(zulu);
            zulu = tango.useOverlayV3;
            mike = 'ActivityPopout';
            mike = zulu.bind(tango)(mike);
            mike = mike.overlayV3UI;
            tango = _closure1_slot2;
            zulu = tango.useExperiment;
            entity = {};
            report = 'useIsActivityPopoutOverlayEnabled';
            entity['location'] = report;
            entity = zulu.bind(tango)(entity);
            entity = entity.enableOverlayInActivityPopoutWindow;
            if(!entity) { _fun106661_ip = 87; continue _fun106661 }
 84:
            entity = mike;
 87:
            return entity;
        }
    };
    zulu['useIsActivityPopoutOverlayEnabled'] = tango;
    mike = function() { // Original name: useCanGoLiveActivityFromActivityCard
        zulu = _closure1_slot2;
        mike = zulu.useExperiment;
        entity = {};
        tango = 'useCanGoLiveActivityFromActivityCard';
        entity['location'] = tango;
        entity = mike.bind(zulu)(entity);
        entity = entity.enableGoLiveFromActivityCard;
        return entity;
    };
    zulu['useCanGoLiveActivityFromActivityCard'] = mike;
    return entity;
})();