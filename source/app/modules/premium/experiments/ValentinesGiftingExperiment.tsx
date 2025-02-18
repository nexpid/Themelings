// app/modules/premium/experiments/ValentinesGiftingExperiment.tsx
export default (function(_, argBar, __, ___, ____, argFre, argPlu) {
    oscard = argBar;
    zuuluu = argFre;
    golfie = argPlu;
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
    tangon = {'id': '2025-01_valentines_gifting_2025', 'label': 'Valentines Gifting 2025', 'kind': 'user'};
    offset = {'enableGiftingFlow': false, 'enableCoachmark': false};
    tangon['defaultConfig'] = offset;
    report = report.CONNECTION_OPEN;
    tangon['commonTriggerPoint'] = report;
    report = {'id': 1, 'label': 'Show Valentines Coachmark and Gifting Flow'};
    offset = {'enableGiftingFlow': true, 'enableCoachmark': true};
    report['config'] = offset;
    offset = new Array(2);
    offset[0] = report;
    yankee = {'id': 2, 'label': 'Show Valentines Gifting Flow only. No Coachmark.'};
    report = 2;
    romeon = {'enableGiftingFlow': true, 'enableCoachmark': false};
    yankee['config'] = romeon;
    offset[1] = yankee;
    tangon['treatments'] = offset;
    tangon = option.bind(verify)(tangon);
    var _closure1_slot0 = tangon;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/premium/experiments/ValentinesGiftingExperiment.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['ValentinesGiftingExperiment'] = tangon;
    tangon = function() { // Original name: useIsValentinesGiftingActive
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = _closure1_slot0;
            zuuluu = tangon.useExperiment;
            michal = {};
            entity = 'useIsValentinesGiftingActive';
            michal['location'] = entity;
            entity = {};
            report = false;
            entity['autoTrackExposure'] = report;
            michal = zuuluu.bind(tangon)(michal, entity);
            entity = michal.enableGiftingFlow;
            michal = michal.enableCoachmark;
            if(entity) { _fun00002_ip = 56; continue _fun00001 }
 53:
            entity = michal;
 56:
            return entity;
        }
    };
    zuuluu['useIsValentinesGiftingActive'] = tangon;
    michal = function() { // Original name: useIsValentinesCoachmarkEnabled
        tangon = _closure1_slot0;
        zuuluu = tangon.useExperiment;
        michal = {};
        entity = 'useIsValentinesCoachmarkEnabled';
        michal['location'] = entity;
        entity = {};
        report = false;
        entity['autoTrackExposure'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        entity = entity.enableCoachmark;
        return entity;
    };
    zuuluu['useIsValentinesCoachmarkEnabled'] = michal;
    return entity;
})();