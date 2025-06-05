// app/modules/main_tabs_v2/native/settings/definitions/AccountAgeGroupAdultSetting.tsx
export default (function(_, argBar, __, ___, ____, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, michal);
    entity = 0;
    michal = oscard[entity];
    entity = undefined;
    michal = report.bind(entity)(michal);
    golfie = michal.MobileSetting;
    michal = {};
    option = 1;
    option = oscard[option];
    option = report.bind(entity)(option);
    option = option.RendererType;
    option = option.STATIC;
    michal['type'] = option;
    option = function() { // Original name: title
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
        entity = entity./52UY2;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    michal['title'] = option;
    golfie = golfie.ACCOUNT;
    michal['parent'] = golfie;
    golfie = function() { // Original name: useTrailing
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
        entity = entity.XxRj7e;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    michal['useTrailing'] = golfie;
    tangon = function() { // Original name: useAccountAgeGroupAdultSettingPredicate
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            report = _closure1_slot0;
            oscard = _closure1_slot1;
            entity = 2;
            michal = oscard[entity];
            tangon = undefined;
            zuuluu = report.bind(tangon)(michal);
            michal = zuuluu.useIsAgeVerified;
            zuuluu = michal.bind(zuuluu)();
            entity = oscard[entity];
            michal = report.bind(tangon)(entity);
            entity = michal.useIsVerifiedTeen;
            michal = entity.bind(michal)();
            entity = 3;
            entity = oscard[entity];
            report = report.bind(tangon)(entity);
            tangon = report.useIsEligibleForSensitiveContentDefaults;
            entity = 'explicit_media_redaction_utils';
            entity = tangon.bind(report)(entity);
            if(!entity) { _fun00002_ip = 89; continue _fun00001 }
 86:
            entity = zuuluu;
 89:
            if(!entity) { _fun00002_ip = 95; continue _fun00001 }
 92:
            entity = !michal;
 95:
            return entity;
        }
    };
    michal['usePredicate'] = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/main_tabs_v2/native/settings/definitions/AccountAgeGroupAdultSetting.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();