// app/modules/main_tabs_v2/native/settings/definitions/PremiumSetting.tsx
export default (function(_, argBar, argBaz, argCor, __, argFre, argPlu) {
    report = argBar;
    tangon = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = tangon;
    var _closure1_slot2 = oscard;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, michal);
    entity = 0;
    option = oscard[entity];
    michal = argCor;
    entity = undefined;
    michal = michal.bind(entity)(option);
    var _closure1_slot3 = michal;
    michal = 1;
    michal = oscard[michal];
    michal = tangon.bind(entity)(michal);
    var _closure1_slot4 = michal;
    michal = 2;
    michal = oscard[michal];
    michal = tangon.bind(entity)(michal);
    var _closure1_slot5 = michal;
    michal = 3;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    tangon = michal.RendererType;
    michal = 4;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    option = michal.UserSettingsSections;
    michal = 5;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    michal = michal.jsx;
    var _closure1_slot6 = michal;
    michal = {};
    tangon = tangon.ROUTE;
    michal['type'] = tangon;
    tangon = function() { // Original name: getPremiumSettingTitle
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot2;
            entity = 6;
            entity = tangon[entity];
            oscard = undefined;
            report = zuuluu.bind(oscard)(entity);
            tangon = report.hasPremiumSubscriptionToDisplay;
            zuuluu = _closure1_slot4;
            entity = zuuluu.getCurrentUser;
            zuuluu = entity.bind(zuuluu)();
            golfie = _closure1_slot5;
            entity = golfie.getPremiumTypeSubscription;
            entity = entity.bind(golfie)();
            entity = tangon.bind(report)(zuuluu, entity);
            report = _closure1_slot0;
            golfie = _closure1_slot2;
            michal = 7;
            zuuluu = golfie[michal];
            zuuluu = report.bind(oscard)(zuuluu);
            tangon = zuuluu.intl;
            zuuluu = tangon.string;
            michal = golfie[michal];
            michal = report.bind(oscard)(michal);
            michal = michal.t;
            if(entity) { _fun00002_ip = 124; continue _fun00001 }
 111:
            entity = michal.8x0jKS;
            entity = zuuluu.bind(tangon)(entity);
            _fun00002_ip = 135; continue _fun00001;
 124:
            michal = michal.8jmdOD;
            entity = zuuluu.bind(tangon)(michal);
 135:
            return entity;
        }
    };
    michal['title'] = tangon;
    tangon = null;
    michal['parent'] = tangon;
    tangon = 11;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.NitroWheelIcon;
    michal['IconComponent'] = tangon;
    tangon = function() { // Original name: useCanNavigateToPaymentSetting
        tangon = _closure1_slot3;
        zuuluu = tangon.useCallback;
        michal = function() {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                michal = _closure1_slot1;
                tangon = _closure1_slot2;
                entity = 8;
                entity = tangon[entity];
                tangon = undefined;
                golfie = michal.bind(tangon)(entity);
                oscard = golfie.getCurrentConfig;
                report = {};
                entity = 'ddafe5_1';
                report['location'] = entity;
                entity = {};
                michal = false;
                entity['autoTrackExposure'] = michal;
                entity = oscard.bind(golfie)(report, entity);
                entity = entity.paymentsBlocked;
                entity = !entity;
                if(entity) { _fun00004_ip = 96; continue _fun00003 }
 70:
                report = _closure1_slot1;
                oscard = _closure1_slot2;
                zuuluu = 9;
                zuuluu = oscard[zuuluu];
                zuuluu = report.bind(tangon)(zuuluu);
                zuuluu = zuuluu.bind(tangon)();
                entity = false;
 96:
                return entity;
            }
        };
        entity = new Array(0);
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    michal['usePreNavigationAction'] = tangon;
    tangon = function() { // Original name: usePremiumSettingTrailing
        tangon = _closure1_slot6;
        michal = _closure1_slot1;
        zuuluu = _closure1_slot2;
        entity = 10;
        entity = zuuluu[entity];
        zuuluu = undefined;
        michal = michal.bind(zuuluu)(entity);
        entity = {};
        entity = tangon.bind(zuuluu)(michal, entity);
        return entity;
    };
    michal['useTrailing'] = tangon;
    tangon = {};
    option = option.PREMIUM;
    tangon['route'] = option;
    golfie = function() { // Original name: getComponent
        zuuluu = _closure1_slot0;
        michal = _closure1_slot2;
        entity = 12;
        michal = michal[entity];
        entity = undefined;
        entity = zuuluu.bind(entity)(michal);
        entity = entity.default;
        return entity;
    };
    tangon['getComponent'] = golfie;
    michal['screen'] = tangon;
    tangon = 13;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/main_tabs_v2/native/settings/definitions/PremiumSetting.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();