// app/modules/user_settings/parseSettingsUrl.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = function(argFoo) { // Original name: normalizeSection
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            entity = null;
            michal = entity == zuuluu;
            entity = '';
            if(michal) { _fun00002_ip = 67; continue _fun00001 }
 16:
            michal = zuuluu.toUpperCase;
            oscard = michal.bind(zuuluu)();
            report = oscard.replace;
            tangon = _closure1_slot4;
            zuuluu = '_';
            report = report.bind(oscard)(tangon, zuuluu);
            tangon = report.replace;
            zuuluu = _closure1_slot5;
            michal = 'AND';
            entity = tangon.bind(report)(zuuluu, michal);
 67:
            return entity;
        }
    };
    var _closure1_slot7 = entity;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    golfie = oscard[entity];
    tangon = argBaz;
    entity = undefined;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.UserSettingsSections;
    var _closure1_slot3 = tangon;
    tangon = /(-|%20)/g;
    var _closure1_slot4 = tangon;
    tangon = /%26/g;
    var _closure1_slot5 = tangon;
    tangon = {};
    golfie = 'CLICKER_GAME';
    tangon['THE_LAST_MEADOW'] = golfie;
    var _closure1_slot6 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/user_settings/parseSettingsUrl.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: parseSettingsUrl
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zuuluu = argFoo;
            michal = zuuluu.split;
            entity = '/';
            zuuluu = michal.bind(zuuluu)(entity);
            michal = _closure1_slot2;
            option = undefined;
            entity = 4;
            zuuluu = michal.bind(option)(zuuluu, entity);
            verify = 2;
            michal = zuuluu[verify];
            entity = 3;
            zuuluu = zuuluu[entity];
            entity = _closure1_slot7;
            entity = entity.bind(option)(michal);
            michal = _closure1_slot6;
            michal = michal[entity];
            oscard = null;
            if(!(oscard != michal)) { _fun00004_ip = 75; continue _fun00003 }
 72:
            entity = michal;
 75:
            michal = _closure1_slot7;
            zuuluu = michal.bind(option)(zuuluu);
            report = _closure1_slot3;
            michal = report.hasOwnProperty;
            michal = michal.bind(report)(entity);
            report = entity;
            entity = null;
            if(!michal) { _fun00004_ip = 212; continue _fun00003 }
 107:
            if(!(oscard != zuuluu)) { _fun00004_ip = 139; continue _fun00003 }
 111:
            michal = '';
            if(!(michal !== zuuluu)) { _fun00004_ip = 139; continue _fun00003 }
 119:
            golfie = _closure1_slot3;
            michal = golfie.hasOwnProperty;
            michal = michal.bind(golfie)(zuuluu);
            entity = null;
            if(!michal) { _fun00004_ip = 212; continue _fun00003 }
 139:
            michal = {};
            golfie = _closure1_slot0;
            oscard = _closure1_slot1;
            oscard = oscard[verify];
            option = golfie.bind(option)(oscard);
            golfie = option.parse;
            oscard = global;
            oscard = oscard.location;
            oscard = oscard.search;
            oscard = golfie.bind(option)(oscard);
            oscard = oscard.source;
            michal['source'] = oscard;
            tangon = _closure1_slot3;
            tangon = tangon[report];
            michal['section'] = tangon;
            michal['subsection'] = zuuluu;
            entity = michal;
 212:
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();