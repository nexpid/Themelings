// app/modules/main_tabs_v2/native/settings/definitions/AccountAgeGroupNonAdultSetting.tsx
export default (function(_, argBar, argBaz, __, ___, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscard;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    michal = {};
    golfie = true;
    michal['value'] = golfie;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, michal);
    entity = 0;
    michal = oscard[entity];
    entity = undefined;
    michal = report.bind(entity)(michal);
    option = michal.MobileSetting;
    michal = {};
    verify = 1;
    verify = oscard[verify];
    verify = report.bind(entity)(verify);
    verify = verify.RendererType;
    verify = verify.PRESSABLE;
    michal['type'] = verify;
    verify = function() { // Original name: title
        report = _closure1_slot0;
        oscard = _closure1_slot2;
        entity = 5;
        michal = oscard[entity];
        tangon = undefined;
        michal = report.bind(tangon)(michal);
        zuuluu = michal.intl;
        michal = zuuluu.string;
        entity = oscard[entity];
        entity = report.bind(tangon)(entity);
        entity = entity.t;
        entity = entity.2UzQiY;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    michal['title'] = verify;
    option = option.ACCOUNT;
    michal['parent'] = option;
    option = function() { // Original name: useAccountAgeGroupNonAdultSettingTrailing
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot2;
            entity = 4;
            entity = tangon[entity];
            oscard = undefined;
            zuuluu = zuuluu.bind(oscard)(entity);
            entity = zuuluu.useIsAgeVerified;
            entity = entity.bind(zuuluu)();
            report = _closure1_slot0;
            golfie = _closure1_slot2;
            michal = 5;
            zuuluu = golfie[michal];
            zuuluu = report.bind(oscard)(zuuluu);
            tangon = zuuluu.intl;
            zuuluu = tangon.string;
            michal = golfie[michal];
            michal = report.bind(oscard)(michal);
            michal = michal.t;
            if(entity) { _fun00002_ip = 97; continue _fun00001 }
 82:
            entity = michal.Qdv3DA;
            entity = zuuluu.bind(tangon)(entity);
            _fun00002_ip = 110; continue _fun00001;
 97:
            michal = michal.dJOmCw;
            entity = zuuluu.bind(tangon)(michal);
 110:
            return entity;
        }
    };
    michal['useTrailing'] = option;
    option = function() { // Original name: onAccountAgeGroupNonAdultSettingPress
        tangon = _closure1_slot1;
        oscard = _closure1_slot2;
        entity = 2;
        zuuluu = oscard[entity];
        entity = undefined;
        tangon = tangon.bind(entity)(zuuluu);
        zuuluu = tangon.showAgeVerificationGetStartedModal;
        report = _closure1_slot0;
        michal = 3;
        michal = oscard[michal];
        michal = report.bind(entity)(michal);
        michal = michal.AgeVerificationModalEntryPoint;
        michal = michal.ACCOUNT_AGE_GROUP;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    michal['onPress'] = option;
    michal['withArrow'] = golfie;
    tangon = function() { // Original name: AccountAgeGroupNonAdultSettingPredicate
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            report = _closure1_slot0;
            oscard = _closure1_slot2;
            entity = 4;
            michal = oscard[entity];
            tangon = undefined;
            zuuluu = report.bind(tangon)(michal);
            michal = zuuluu.useIsAgeVerified;
            michal = michal.bind(zuuluu)();
            entity = oscard[entity];
            zuuluu = report.bind(tangon)(entity);
            entity = zuuluu.useIsVerifiedTeen;
            zuuluu = entity.bind(zuuluu)();
            entity = 6;
            entity = oscard[entity];
            report = report.bind(tangon)(entity);
            tangon = report.useIsEligibleForSensitiveContentDefaults;
            entity = 'explicit_media_redaction_utils';
            entity = tangon.bind(report)(entity);
            if(!entity) { _fun00004_ip = 98; continue _fun00003 }
 86:
            michal = !michal;
            if(michal) { _fun00004_ip = 95; continue _fun00003 }
 92:
            michal = zuuluu;
 95:
            entity = michal;
 98:
            return entity;
        }
    };
    michal['usePredicate'] = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/main_tabs_v2/native/settings/definitions/AccountAgeGroupNonAdultSetting.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();