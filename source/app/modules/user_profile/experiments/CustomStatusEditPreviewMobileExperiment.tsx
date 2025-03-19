// app/modules/user_profile/experiments/CustomStatusEditPreviewMobileExperiment.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    oscard = argBar;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = golfie;
    entity = global;
    option = entity.Object;
    report = option.defineProperty;
    tangon = {};
    yankee = true;
    tangon['value'] = yankee;
    entity = '__esModule';
    entity = report.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = golfie[entity];
    entity = undefined;
    option = oscard.bind(entity)(tangon);
    report = option.createExperiment;
    tangon = {'kind': 'user', 'id': '2025-01_custom_status_edit_preview_mobile', 'label': 'Custom Status Edit Preview (Mobile)'};
    verify = {};
    offset = false;
    verify['enabled'] = offset;
    tangon['defaultConfig'] = verify;
    offset = {'id': 1, 'label': 'Enable edit modal with preview'};
    verify = {};
    verify['enabled'] = yankee;
    offset['config'] = verify;
    verify = new Array(1);
    verify[0] = offset;
    tangon['treatments'] = verify;
    tangon = report.bind(option)(tangon);
    var _closure1_slot2 = tangon;
    report = 2;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/user_profile/experiments/CustomStatusEditPreviewMobileExperiment.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['CustomStatusEditPreviewMobileExperiment'] = tangon;
    michal = function(argFoo) { // Original name: useIsEligibleForCustomStatusEditPreviewMobileExperiment
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            entity = michal.location;
            oscard = michal.autoTrackExposure;
            report = undefined;
            if(!(oscard === report)) { _fun00002_ip = 22; continue _fun00001 }
 20:
            oscard = true;
 22:
            tangon = _closure1_slot0;
            golfie = _closure1_slot1;
            zuuluu = 1;
            zuuluu = golfie[zuuluu];
            report = tangon.bind(report)(zuuluu);
            tangon = report.useIsInUserProfileEditingHoldout;
            zuuluu = {};
            zuuluu['location'] = entity;
            zuuluu['autoTrackExposure'] = oscard;
            report = tangon.bind(report)(zuuluu);
            tangon = _closure1_slot2;
            zuuluu = tangon.useExperiment;
            michal = {};
            michal['location'] = entity;
            entity = {};
            entity['autoTrackExposure'] = oscard;
            entity['disable'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            entity = entity.enabled;
            return entity;
        }
    };
    zuuluu['useIsEligibleForCustomStatusEditPreviewMobileExperiment'] = michal;
    return entity;
})();