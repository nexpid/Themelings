// app/modules/user_settings/native/openUserSettings.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
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
    tangon = report.bind(entity)(tangon);
    tangon = tangon.UserSettingsSections;
    var _closure1_slot3 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/user_settings/native/openUserSettings.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) {
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            report = argFoo;
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 1;
            michal = michal[entity];
            entity = undefined;
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.getRootNavigationRef;
            tangon = michal.bind(zuuluu)();
            golfie = null;
            michal = golfie != tangon;
            if(!michal) { _fun00002_ip = 57; continue _fun00001 }
 47:
            zuuluu = tangon.isReady;
            michal = zuuluu.bind(tangon)();
 57:
            if(!michal) { _fun00002_ip = 174; continue _fun00001 }
 60:
            zuuluu = _closure1_slot1;
            oscard = _closure1_slot2;
            michal = 2;
            michal = oscard[michal];
            oscard = zuuluu.bind(entity)(michal);
            zuuluu = oscard.dispatch;
            michal = {};
            option = 'USER_SETTINGS_MODAL_INIT';
            michal['type'] = option;
            option = report.screen;
            if(!(golfie == option)) { _fun00002_ip = 115; continue _fun00001 }
 105:
            verify = _closure1_slot3;
            option = verify.OVERVIEW;
 115:
            michal['section'] = option;
            option = report.subsection;
            verify = golfie != option;
            golfie = null;
            if(!verify) { _fun00002_ip = 137; continue _fun00001 }
 134:
            golfie = option;
 137:
            michal['subsection'] = golfie;
            golfie = report.analyticsLocation;
            michal['analyticsLocation'] = golfie;
            michal = zuuluu.bind(oscard)(michal);
            zuuluu = tangon.navigate;
            michal = 'settings';
            michal = zuuluu.bind(tangon)(michal, report);
 174:
            return entity;
        }
    };
    zuuluu['openUserSettings'] = michal;
    return entity;
})();