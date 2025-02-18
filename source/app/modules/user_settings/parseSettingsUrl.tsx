// app/modules/user_settings/parseSettingsUrl.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
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
    tangon = /-/g;
    var _closure1_slot4 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/user_settings/parseSettingsUrl.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: parseSettingsUrl
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            michal = zuuluu.split;
            entity = '/';
            zuuluu = michal.bind(zuuluu)(entity);
            michal = _closure1_slot2;
            option = undefined;
            entity = 4;
            michal = michal.bind(option)(zuuluu, entity);
            verify = 2;
            zuuluu = michal[verify];
            entity = 3;
            michal = michal[entity];
            oscard = null;
            entity = oscard == zuuluu;
            report = undefined;
            if(entity) { _fun00002_ip = 89; continue _fun00001 }
 60:
            entity = zuuluu.toUpperCase;
            offset = entity.bind(zuuluu)();
            golfie = offset.replace;
            zuuluu = _closure1_slot4;
            entity = '_';
            report = golfie.bind(offset)(zuuluu, entity);
 89:
            entity = oscard == michal;
            zuuluu = undefined;
            if(entity) { _fun00002_ip = 127; continue _fun00001 }
 98:
            entity = michal.toUpperCase;
            offset = entity.bind(michal)();
            golfie = offset.replace;
            michal = _closure1_slot4;
            entity = '_';
            zuuluu = golfie.bind(offset)(michal, entity);
 127:
            michal = _closure1_slot3;
            entity = michal.hasOwnProperty;
            michal = entity.bind(michal)(report);
            entity = null;
            if(!michal) { _fun00002_ip = 252; continue _fun00001 }
 147:
            if(!(oscard != zuuluu)) { _fun00002_ip = 179; continue _fun00001 }
 151:
            michal = '';
            if(!(michal !== zuuluu)) { _fun00002_ip = 179; continue _fun00001 }
 159:
            golfie = _closure1_slot3;
            michal = golfie.hasOwnProperty;
            michal = michal.bind(golfie)(zuuluu);
            entity = null;
            if(!michal) { _fun00002_ip = 252; continue _fun00001 }
 179:
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
 252:
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();