// app/modules/main_tabs_v2/native/settings/definitions/EncryptionSetting.tsx
export default (function(_, argBar, argBaz, __, ___, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = global;
    option = entity.Object;
    tangon = option.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = tangon.bind(option)(zuuluu, entity, michal);
    entity = 0;
    tangon = oscard[entity];
    michal = argBaz;
    entity = undefined;
    michal = michal.bind(entity)(tangon);
    var _closure1_slot2 = michal;
    michal = 1;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    tangon = michal.MobileSetting;
    michal = 2;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    verify = michal.RendererType;
    michal = 3;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    option = michal.UserSettingsSections;
    michal = {};
    verify = verify.ROUTE;
    michal['type'] = verify;
    verify = function() { // Original name: title
        report = _closure1_slot0;
        oscard = _closure1_slot1;
        entity = 7;
        michal = oscard[entity];
        tangon = undefined;
        michal = report.bind(tangon)(michal);
        zuuluu = michal.intl;
        michal = zuuluu.string;
        entity = oscard[entity];
        entity = report.bind(tangon)(entity);
        entity = entity.t;
        entity = entity.x8U2eH;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    michal['title'] = verify;
    verify = function() { // Original name: useSecureFramesEncryptionDescription
        oscard = _closure1_slot0;
        golfie = _closure1_slot1;
        entity = 6;
        entity = golfie[entity];
        michal = undefined;
        zuuluu = oscard.bind(michal)(entity);
        entity = zuuluu.useSecureFramesVerifiedUserIds;
        report = entity.bind(zuuluu)();
        entity = 7;
        zuuluu = golfie[entity];
        zuuluu = oscard.bind(michal)(zuuluu);
        tangon = zuuluu.intl;
        zuuluu = tangon.formatToPlainString;
        entity = golfie[entity];
        entity = oscard.bind(michal)(entity);
        entity = entity.t;
        michal = entity.6vrePT;
        entity = {};
        report = report.length;
        entity['count'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    michal['useDescription'] = verify;
    tangon = tangon.DATA_AND_PRIVACY;
    michal['parent'] = tangon;
    tangon = function() { // Original name: useSecureFramesVerifiedDevicesPredicate
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = function() { // Original name: useSecureFramesPersistentCodesValue
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot1;
                michal = 4;
                zuuluu = zuuluu[michal];
                michal = undefined;
                tangon = tangon.bind(michal)(zuuluu);
                zuuluu = tangon.useStateFromStores;
                entity = _closure1_slot2;
                michal = new Array(1);
                michal[0] = entity;
                entity = function() {
                    michal = _closure1_slot2;
                    entity = michal.getPersistentCodesEnabled;
                    entity = entity.bind(michal)();
                    return entity;
                };
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            tangon = undefined;
            michal = entity.bind(tangon)();
            zuuluu = _closure1_slot0;
            report = _closure1_slot1;
            entity = 5;
            entity = report[entity];
            tangon = zuuluu.bind(tangon)(entity);
            zuuluu = tangon.useSecureFramesUIExperiment;
            entity = {};
            report = 'useSecureFramesVerifiedDevicesPredicate';
            entity['location'] = report;
            entity = zuuluu.bind(tangon)(entity);
            entity = entity.enabled;
            if(!entity) { _fun00002_ip = 72; continue _fun00001 }
 69:
            entity = michal;
 72:
            return entity;
        }
    };
    michal['usePredicate'] = tangon;
    tangon = {};
    option = option.SECURE_FRAMES;
    tangon['route'] = option;
    golfie = function() { // Original name: getComponent
        zuuluu = _closure1_slot0;
        michal = _closure1_slot1;
        entity = 8;
        michal = michal[entity];
        entity = undefined;
        entity = zuuluu.bind(entity)(michal);
        entity = entity.default;
        return entity;
    };
    tangon['getComponent'] = golfie;
    michal['screen'] = tangon;
    tangon = 9;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/main_tabs_v2/native/settings/definitions/EncryptionSetting.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    zuuluu['SecureFramesEncryptionSetting'] = michal;
    return entity;
})();