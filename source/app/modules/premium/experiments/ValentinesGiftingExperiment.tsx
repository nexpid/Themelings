// app/modules/premium/experiments/ValentinesGiftingExperiment.tsx
export default (function(_, argBar, __, ___, ____, argFred, argPlugh) {
    oscar = argBar;
    zulu = argFred;
    golf = argPlugh;
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
    tango = {'id': '2025-01_valentines_gifting_2025', 'label': 'Valentines Gifting 2025', 'kind': 'user'};
    offset = {'enableGiftingFlow': false, 'enableCoachmark': false};
    tango['defaultConfig'] = offset;
    report = report.CONNECTION_OPEN;
    tango['commonTriggerPoint'] = report;
    report = {'id': 1, 'label': 'Show Valentines Coachmark and Gifting Flow'};
    offset = {'enableGiftingFlow': true, 'enableCoachmark': true};
    report['config'] = offset;
    offset = new Array(2);
    offset[0] = report;
    yankee = {'id': 2, 'label': 'Show Valentines Gifting Flow only. No Coachmark.'};
    report = 2;
    romeo = {'enableGiftingFlow': true, 'enableCoachmark': false};
    yankee['config'] = romeo;
    offset[1] = yankee;
    tango['treatments'] = offset;
    tango = options.bind(verify)(tango);
    var _closure1_slot0 = tango;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/premium/experiments/ValentinesGiftingExperiment.tsx';
    report = oscar.bind(golf)(report);
    zulu['ValentinesGiftingExperiment'] = tango;
    tango = function() { // Original name: useIsValentinesGiftingActive
        _fun38330: for(var _fun38330_ip = 0; ; ) switch(_fun38330_ip) {
 0:
            tango = _closure1_slot0;
            zulu = tango.useExperiment;
            mike = {};
            entity = 'useIsValentinesGiftingActive';
            mike['location'] = entity;
            entity = {};
            report = false;
            entity['autoTrackExposure'] = report;
            mike = zulu.bind(tango)(mike, entity);
            entity = mike.enableGiftingFlow;
            mike = mike.enableCoachmark;
            if(entity) { _fun38330_ip = 56; continue _fun38330 }
 53:
            entity = mike;
 56:
            return entity;
        }
    };
    zulu['useIsValentinesGiftingActive'] = tango;
    mike = function() { // Original name: useIsValentinesCoachmarkEnabled
        tango = _closure1_slot0;
        zulu = tango.useExperiment;
        mike = {};
        entity = 'useIsValentinesCoachmarkEnabled';
        mike['location'] = entity;
        entity = {};
        report = false;
        entity['autoTrackExposure'] = report;
        entity = zulu.bind(tango)(mike, entity);
        entity = entity.enableCoachmark;
        return entity;
    };
    zulu['useIsValentinesCoachmarkEnabled'] = mike;
    return entity;
})();