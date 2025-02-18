// app/modules/activities/ActivityPopoutWindowExperiment.tsx
export default (function(_, argBar, __, ___, ____, argFre, argPlu) {
    oscard = argBar;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = golfie;
    entity = global;
    option = entity.Object;
    report = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = report.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = golfie[entity];
    entity = undefined;
    tangon = oscard.bind(entity)(tangon);
    report = tangon.CommonTriggerPoints;
    tangon = 1;
    tangon = golfie[tangon];
    verify = oscard.bind(entity)(tangon);
    option = verify.createExperiment;
    tangon = {'kind': 'user', 'id': '2024-11_activity_popout_window', 'label': 'Activity Popout Window Experiment'};
    offset = {'enabled': false, 'enableOverlayInActivityPopoutWindow': false, 'enableGoLiveFromActivityCard': false};
    tangon['defaultConfig'] = offset;
    report = report.CONNECTION_OPEN;
    tangon['commonTriggerPoint'] = report;
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
    romeon = {'enabled': true, 'enableOverlayInActivityPopoutWindow': true, 'enableGoLiveFromActivityCard': true};
    yankee['config'] = romeon;
    offset[2] = yankee;
    tangon['treatments'] = offset;
    tangon = option.bind(verify)(tangon);
    var _closure1_slot2 = tangon;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/activities/ActivityPopoutWindowExperiment.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['default'] = tangon;
    tangon = function() { // Original name: getIsActivityPopoutOverlayEnabled
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot1;
            michal = 2;
            zuuluu = zuuluu[michal];
            michal = undefined;
            tangon = tangon.bind(michal)(zuuluu);
            zuuluu = tangon.getUseOverlayV3;
            michal = 'ActivityPopout';
            michal = zuuluu.bind(tangon)(michal);
            michal = michal.overlayV3UI;
            tangon = _closure1_slot2;
            zuuluu = tangon.getCurrentConfig;
            entity = {};
            report = 'getIsActivityPopoutOverlayEnabled';
            entity['location'] = report;
            entity = zuuluu.bind(tangon)(entity);
            entity = entity.enableOverlayInActivityPopoutWindow;
            if(!entity) { _fun00002_ip = 87; continue _fun00001 }
 84:
            entity = michal;
 87:
            return entity;
        }
    };
    zuuluu['getIsActivityPopoutOverlayEnabled'] = tangon;
    tangon = function() { // Original name: useIsActivityPopoutOverlayEnabled
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot1;
            michal = 2;
            zuuluu = zuuluu[michal];
            michal = undefined;
            tangon = tangon.bind(michal)(zuuluu);
            zuuluu = tangon.useOverlayV3;
            michal = 'ActivityPopout';
            michal = zuuluu.bind(tangon)(michal);
            michal = michal.overlayV3UI;
            tangon = _closure1_slot2;
            zuuluu = tangon.useExperiment;
            entity = {};
            report = 'useIsActivityPopoutOverlayEnabled';
            entity['location'] = report;
            entity = zuuluu.bind(tangon)(entity);
            entity = entity.enableOverlayInActivityPopoutWindow;
            if(!entity) { _fun00004_ip = 87; continue _fun00003 }
 84:
            entity = michal;
 87:
            return entity;
        }
    };
    zuuluu['useIsActivityPopoutOverlayEnabled'] = tangon;
    michal = function() { // Original name: useCanGoLiveActivityFromActivityCard
        zuuluu = _closure1_slot2;
        michal = zuuluu.useExperiment;
        entity = {};
        tangon = 'useCanGoLiveActivityFromActivityCard';
        entity['location'] = tangon;
        entity = michal.bind(zuuluu)(entity);
        entity = entity.enableGoLiveFromActivityCard;
        return entity;
    };
    zuuluu['useCanGoLiveActivityFromActivityCard'] = michal;
    return entity;
})();