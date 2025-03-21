// app/modules/themes/resolveTheme.native.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.PROTO_THEME_MAP_MOBILE;
    var _closure1_slot5 = golfie;
    golfie = tangon.SystemTheme;
    var _closure1_slot6 = golfie;
    tangon = tangon.SystemThemeState;
    var _closure1_slot7 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/themes/resolveTheme.native.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo, argBar) { // Original name: resolveTheme
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            entity = argBar;
            zuuluu = _closure1_slot3;
            report = zuuluu.useSystemTheme;
            oscard = _closure1_slot0;
            golfie = _closure1_slot1;
            zuuluu = 4;
            zuuluu = golfie[zuuluu];
            option = undefined;
            oscard = oscard.bind(option)(zuuluu);
            zuuluu = oscard.isAuthenticated;
            zuuluu = zuuluu.bind(oscard)();
            if(!zuuluu) { _fun00002_ip = 68; continue _fun00001 }
 54:
            zuuluu = _closure1_slot7;
            zuuluu = zuuluu.ON;
            if(!(report === zuuluu)) { _fun00002_ip = 85; continue _fun00001 }
 68:
            zuuluu = _closure1_slot6;
            zuuluu = zuuluu.NO_PREFERENCE;
            if(!(michal === zuuluu)) { _fun00002_ip = 258; continue _fun00001 }
 85:
            report = _closure1_slot2;
            zuuluu = report.getAppearanceSettings;
            report = zuuluu.bind(report)();
            oscard = null;
            golfie = oscard == report;
            zuuluu = undefined;
            if(golfie) { _fun00002_ip = 116; continue _fun00001 }
 110:
            zuuluu = report.theme;
 116:
            if(!(oscard == zuuluu)) { _fun00002_ip = 256; continue _fun00001 }
 123:
            report = _closure1_slot4;
            report = report.settings;
            golfie = report.appearance;
            verify = oscard == golfie;
            report = undefined;
            if(verify) { _fun00002_ip = 154; continue _fun00001 }
 148:
            report = golfie.theme;
 154:
            if(!(oscard == report)) { _fun00002_ip = 190; continue _fun00001 }
 158:
            golfie = _closure1_slot0;
            verify = _closure1_slot1;
            oscard = 5;
            oscard = verify[oscard];
            oscard = golfie.bind(option)(oscard);
            oscard = oscard.Theme;
            report = oscard.UNSET;
 190:
            golfie = _closure1_slot0;
            verify = _closure1_slot1;
            oscard = 5;
            oscard = verify[oscard];
            oscard = golfie.bind(option)(oscard);
            oscard = oscard.Theme;
            oscard = oscard.UNSET;
            if(!(report === oscard)) { _fun00002_ip = 240; continue _fun00001 }
 226:
            oscard = _closure1_slot6;
            oscard = oscard.NO_PREFERENCE;
            if(!(michal === oscard)) { _fun00002_ip = 250; continue _fun00001 }
 240:
            tangon = _closure1_slot5;
            tangon = tangon[report];
            _fun00002_ip = 254; continue _fun00001;
 250:
            tangon = entity[michal];
 254:
            return tangon;
 256:
            return zuuluu;
 258:
            entity = entity[michal];
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();