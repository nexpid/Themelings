// app/modules/main_tabs_v2/native/settings/definitions/DisableStreamPreviewsSetting.tsx
export default (function(_, argBar, __, ___, ____, argFre, argPlu) {
    oscard = argBar;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = golfie;
    michal = function() { // Original name: usePredicate
        zuuluu = _closure1_slot0;
        michal = _closure1_slot1;
        entity = 2;
        michal = michal[entity];
        entity = undefined;
        zuuluu = zuuluu.bind(entity)(michal);
        michal = zuuluu.useSecureFramesUIExperiment;
        entity = {};
        tangon = 'Disable Stream Previews Setting';
        entity['location'] = tangon;
        entity = michal.bind(zuuluu)(entity);
        entity = entity.enabled;
        return entity;
    };
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = golfie[entity];
    entity = undefined;
    tangon = oscard.bind(entity)(tangon);
    option = tangon.MobileSetting;
    tangon = {};
    verify = 1;
    verify = golfie[verify];
    verify = oscard.bind(entity)(verify);
    verify = verify.RendererType;
    verify = verify.TOGGLE;
    tangon['type'] = verify;
    verify = function() { // Original name: title
        report = _closure1_slot0;
        oscard = _closure1_slot1;
        entity = 4;
        michal = oscard[entity];
        tangon = undefined;
        michal = report.bind(tangon)(michal);
        zuuluu = michal.intl;
        michal = zuuluu.string;
        entity = oscard[entity];
        entity = report.bind(tangon)(entity);
        entity = entity.t;
        entity = entity.1CzWUF;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    tangon['title'] = verify;
    verify = function() { // Original name: useDescription
        report = _closure1_slot0;
        oscard = _closure1_slot1;
        entity = 4;
        michal = oscard[entity];
        tangon = undefined;
        michal = report.bind(tangon)(michal);
        zuuluu = michal.intl;
        michal = zuuluu.string;
        entity = oscard[entity];
        entity = report.bind(tangon)(entity);
        entity = entity.t;
        entity = entity.jTNPHB;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    tangon['useDescription'] = verify;
    option = option.VOICE;
    tangon['parent'] = option;
    report = function() { // Original name: useValue
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = _closure1_slot0;
            michal = _closure1_slot1;
            entity = 3;
            michal = michal[entity];
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            michal = entity.DisableStreamPreviews;
            entity = michal.useSetting;
            michal = entity.bind(michal)();
            entity = null;
            entity = entity != michal;
            if(!entity) { _fun00002_ip = 53; continue _fun00001 }
 50:
            entity = michal;
 53:
            return entity;
        }
    };
    tangon['useValue'] = report;
    report = 3;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    report = report.DisableStreamPreviews;
    report = report.updateSetting;
    tangon['onValueChange'] = report;
    tangon['usePredicate'] = michal;
    report = 5;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/main_tabs_v2/native/settings/definitions/DisableStreamPreviewsSetting.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['default'] = tangon;
    zuuluu['usePredicate'] = michal;
    return entity;
})();