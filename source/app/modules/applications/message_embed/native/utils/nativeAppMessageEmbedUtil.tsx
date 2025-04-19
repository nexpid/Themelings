// app/modules/applications/message_embed/native/utils/nativeAppMessageEmbedUtil.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    offset = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = offset;
    var _closure1_slot2 = oscard;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = offset.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    option = 1;
    tangon = oscard[option];
    yankee = report.bind(entity)(tangon);
    verify = yankee.hexToRgba;
    golfie = 2;
    tangon = oscard[golfie];
    tangon = offset.bind(entity)(tangon);
    tangon = tangon.unsafe_rawColors;
    tangon = tangon.BLACK_460;
    verify = verify.bind(yankee)(tangon);
    tangon = new Array(2);
    tangon[0] = verify;
    option = oscard[option];
    verify = report.bind(entity)(option);
    option = verify.hexToRgba;
    golfie = oscard[golfie];
    golfie = offset.bind(entity)(golfie);
    golfie = golfie.unsafe_rawColors;
    golfie = golfie.BLACK_460;
    golfie = option.bind(verify)(golfie);
    tangon[1] = golfie;
    var _closure1_slot4 = tangon;
    tangon = 9;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/applications/message_embed/native/utils/nativeAppMessageEmbedUtil.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: getAppGradientColors
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            report = argFoo;
            entity = _closure1_slot4;
            michal = null;
            if(!(michal != report)) { _fun00002_ip = 212; continue _fun00001 }
 19:
            oscard = _closure1_slot0;
            tangon = _closure1_slot2;
            michal = 3;
            tangon = tangon[michal];
            golfie = undefined;
            oscard = oscard.bind(golfie)(tangon);
            tangon = oscard.hasFetchedColors;
            option = tangon.bind(oscard)(report);
            tangon = _closure1_slot0;
            oscard = _closure1_slot2;
            if(option) { _fun00002_ip = 85; continue _fun00001 }
 63:
            michal = oscard[michal];
            option = tangon.bind(golfie)(michal);
            michal = option.maybeFetchColors;
            michal = michal.bind(option)(report);
            return entity;
 85:
            michal = 4;
            michal = oscard[michal];
            tangon = tangon.bind(golfie)(michal);
            michal = tangon.getHeroColors;
            michal = michal.bind(tangon)(report);
            offset = michal.primaryColor;
            oscard = michal.secondaryColor;
            michal = '#000000';
            report = offset === michal;
            if(!report) { _fun00002_ip = 135; continue _fun00001 }
 131:
            report = oscard === michal;
 135:
            tangon = false;
            michal = entity;
            if(!(tangon === report)) { _fun00002_ip = 210; continue _fun00001 }
 144:
            report = _closure1_slot0;
            option = _closure1_slot2;
            tangon = 1;
            zuuluu = option[tangon];
            verify = report.bind(golfie)(zuuluu);
            zuuluu = verify.hexToRgba;
            verify = zuuluu.bind(verify)(offset);
            zuuluu = new Array(2);
            zuuluu[0] = verify;
            tangon = option[tangon];
            report = report.bind(golfie)(tangon);
            tangon = report.hexToRgba;
            tangon = tangon.bind(report)(oscard);
            zuuluu[1] = tangon;
            michal = zuuluu;
 210:
            return michal;
 212:
            return entity;
        }
    };
    zuuluu['getAppGradientColors'] = tangon;
    tangon = function(argFoo, argBar, argBaz) { // Original name: getAppIconSrc
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 5;
            michal = michal[entity];
            entity = undefined;
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.getApplicationIconURL;
            entity = {};
            tangon = argFoo;
            entity['id'] = tangon;
            tangon = argBar;
            entity['icon'] = tangon;
            tangon = argBaz;
            entity['bot'] = tangon;
            tangon = false;
            entity['fallbackAvatar'] = tangon;
            michal = michal.bind(zuuluu)(entity);
            entity = null;
            zuuluu = entity != michal;
            if(!zuuluu) { _fun00004_ip = 79; continue _fun00003 }
 76:
            entity = michal;
 79:
            return entity;
        }
    };
    zuuluu['getAppIconSrc'] = tangon;
    michal = function(argFoo) { // Original name: getViewAction
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            report = argFoo;
            zuuluu = _closure1_slot0;
            entity = _closure1_slot2;
            option = 6;
            entity = entity[option];
            oscard = undefined;
            zuuluu = zuuluu.bind(oscard)(entity);
            entity = zuuluu.isEmbeddedApp;
            zuuluu = entity.bind(zuuluu)(report);
            tangon = _closure1_slot3;
            entity = tangon.getGuildId;
            entity = entity.bind(tangon)();
            tangon = null;
            tangon = tangon != entity;
            golfie = undefined;
            if(!tangon) { _fun00006_ip = 67; continue _fun00005 }
 64:
            golfie = entity;
 67:
            tangon = _closure1_slot0;
            entity = _closure1_slot2;
            entity = entity[option];
            tangon = tangon.bind(oscard)(entity);
            entity = tangon.isAppAvailableInAppLauncher;
            entity = entity.bind(tangon)(report, golfie);
            if(entity) { _fun00006_ip = 252; continue _fun00005 }
 102:
            entity = false;
            if(!(entity === zuuluu)) { _fun00006_ip = 177; continue _fun00005 }
 108:
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot2;
            entity = 8;
            entity = tangon[entity];
            tangon = zuuluu.bind(oscard)(entity);
            zuuluu = tangon.canInstallApplication;
            entity = {};
            golfie = report.customInstallUrl;
            entity['customInstallUrl'] = golfie;
            golfie = report.installParams;
            entity['installParams'] = golfie;
            report = report.integrationTypesConfig;
            entity['integrationTypesConfig'] = report;
            entity = zuuluu.bind(tangon)(entity);
            if(entity) { _fun00006_ip = 179; continue _fun00005 }
 177:
            return oscard;
 179:
            entity = {};
            zuuluu = 'add_app';
            entity['id'] = zuuluu;
            golfie = _closure1_slot0;
            option = _closure1_slot2;
            zuuluu = 7;
            tangon = option[zuuluu];
            tangon = golfie.bind(oscard)(tangon);
            report = tangon.intl;
            tangon = report.string;
            zuuluu = option[zuuluu];
            zuuluu = golfie.bind(oscard)(zuuluu);
            zuuluu = zuuluu.t;
            zuuluu = zuuluu.NgXl3N;
            zuuluu = tangon.bind(report)(zuuluu);
            entity['label'] = zuuluu;
            return entity;
 252:
            entity = {};
            zuuluu = 'view_in_app_launcher';
            entity['id'] = zuuluu;
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
            michal = michal.HO/oXl;
            michal = zuuluu.bind(tangon)(michal);
            entity['label'] = michal;
            return entity;
        }
    };
    zuuluu['getViewAction'] = michal;
    return entity;
})();