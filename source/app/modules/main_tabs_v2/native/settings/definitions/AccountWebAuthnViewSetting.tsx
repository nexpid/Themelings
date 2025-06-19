// app/modules/main_tabs_v2/native/settings/definitions/AccountWebAuthnViewSetting.tsx
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
    tangon = michal.MobileSetting;
    michal = 4;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    verify = michal.RendererType;
    michal = 5;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    option = michal.UserSettingsSections;
    michal = {};
    verify = verify.ROUTE;
    michal['type'] = verify;
    verify = function() { // Original name: title
        report = _closure1_slot0;
        oscard = _closure1_slot2;
        entity = 7;
        michal = oscard[entity];
        tangon = undefined;
        michal = report.bind(tangon)(michal);
        zuuluu = michal.intl;
        michal = zuuluu.string;
        entity = oscard[entity];
        entity = report.bind(tangon)(entity);
        entity = entity.t;
        entity = entity.y7SXYW;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    michal['title'] = verify;
    tangon = tangon.ACCOUNT;
    michal['parent'] = tangon;
    tangon = function() { // Original name: useAccountCanUseWebAuthnView
        tangon = _closure1_slot3;
        zuuluu = tangon.useCallback;
        michal = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                michal = _closure1_slot5;
                entity = michal.getCurrentUser;
                zuuluu = entity.bind(michal)();
                entity = null;
                tangon = entity == zuuluu;
                verify = undefined;
                michal = undefined;
                if(tangon) { _fun00002_ip = 35; continue _fun00001 }
 29:
                michal = zuuluu.verified;
 35:
                entity = entity != michal;
                if(!entity) { _fun00002_ip = 45; continue _fun00001 }
 42:
                entity = michal;
 45:
                if(entity) { _fun00002_ip = 187; continue _fun00001 }
 51:
                zuuluu = _closure1_slot1;
                offset = _closure1_slot2;
                michal = 6;
                michal = offset[michal];
                tangon = zuuluu.bind(verify)(michal);
                zuuluu = tangon.show;
                michal = {};
                option = _closure1_slot0;
                report = 7;
                oscard = offset[report];
                oscard = option.bind(verify)(oscard);
                yankee = oscard.intl;
                golfie = yankee.string;
                oscard = offset[report];
                oscard = option.bind(verify)(oscard);
                oscard = oscard.t;
                oscard = oscard.v740sr;
                oscard = golfie.bind(yankee)(oscard);
                michal['title'] = oscard;
                oscard = offset[report];
                oscard = option.bind(verify)(oscard);
                golfie = oscard.intl;
                oscard = golfie.string;
                report = offset[report];
                report = option.bind(verify)(report);
                report = report.t;
                report = report.uggF7u;
                report = oscard.bind(golfie)(report);
                michal['body'] = report;
                michal = zuuluu.bind(tangon)(michal);
 187:
                return entity;
            }
        };
        entity = new Array(0);
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    michal['usePreNavigationAction'] = tangon;
    tangon = function() { // Original name: useAccountSecurityKeysSettingTrailing
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zuuluu = _closure1_slot4;
            michal = zuuluu.hasFetchedCredentials;
            michal = michal.bind(zuuluu)();
            if(michal) { _fun00004_ip = 52; continue _fun00003 }
 20:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            michal = 8;
            zuuluu = zuuluu[michal];
            michal = undefined;
            zuuluu = tangon.bind(michal)(zuuluu);
            michal = zuuluu.fetchWebAuthnCredentials;
            michal = michal.bind(zuuluu)();
 52:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            michal = 9;
            zuuluu = zuuluu[michal];
            michal = undefined;
            tangon = tangon.bind(michal)(zuuluu);
            zuuluu = tangon.useStateFromStores;
            entity = _closure1_slot4;
            michal = new Array(1);
            michal[0] = entity;
            entity = function() {
                oscard = _closure1_slot0;
                golfie = _closure1_slot2;
                entity = 7;
                zuuluu = golfie[entity];
                michal = undefined;
                zuuluu = oscard.bind(michal)(zuuluu);
                tangon = zuuluu.intl;
                zuuluu = tangon.formatToPlainString;
                entity = golfie[entity];
                entity = oscard.bind(michal)(entity);
                entity = entity.t;
                michal = entity.n8mZ0d;
                entity = {};
                oscard = _closure1_slot4;
                report = oscard.getCredentials;
                report = report.bind(oscard)();
                report = report.length;
                entity['count'] = report;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    michal['useTrailing'] = tangon;
    tangon = {};
    option = option.WEBAUTHN_VIEW;
    tangon['route'] = option;
    golfie = function() { // Original name: getComponent
        zuuluu = _closure1_slot0;
        michal = _closure1_slot2;
        entity = 10;
        michal = michal[entity];
        entity = undefined;
        entity = zuuluu.bind(entity)(michal);
        entity = entity.default;
        return entity;
    };
    tangon['getComponent'] = golfie;
    michal['screen'] = tangon;
    tangon = 11;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/main_tabs_v2/native/settings/definitions/AccountWebAuthnViewSetting.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();