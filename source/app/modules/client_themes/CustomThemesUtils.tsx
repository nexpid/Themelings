// app/modules/client_themes/CustomThemesUtils.tsx
export default (function(_, argBar, argBaz, argCor, __, argFre, argPlu) {
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
    option = oscard[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(option);
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
    golfie = tangon.useClientThemeColorPickerStore;
    var _closure1_slot5 = golfie;
    tangon = tangon.DEFAULT_COLOR_INTENSITY;
    var _closure1_slot6 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/client_themes/CustomThemesUtils.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function() { // Original name: shouldIgnoreThemeChange
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = _closure1_slot4;
            entity = entity.settings;
            zuuluu = entity.appearance;
            michal = null;
            tangon = michal == zuuluu;
            entity = undefined;
            if(tangon) { _fun00002_ip = 51; continue _fun00001 }
 30:
            zuuluu = zuuluu.clientThemeSettings;
            tangon = michal == zuuluu;
            entity = undefined;
            if(tangon) { _fun00002_ip = 51; continue _fun00001 }
 45:
            entity = zuuluu.customUserThemeSettings;
 51:
            entity = michal != entity;
            return entity;
        }
    };
    zuuluu['shouldIgnoreThemeChange'] = tangon;
    michal = function() { // Original name: useCustomThemeReset
        tangon = _closure1_slot2;
        zuuluu = tangon.useRef;
        michal = null;
        michal = zuuluu.bind(tangon)(michal);
        var _closure2_slot0 = michal;
        zuuluu = tangon.useRef;
        michal = undefined;
        michal = zuuluu.bind(tangon)(michal);
        var _closure2_slot1 = michal;
        report = tangon.useEffect;
        zuuluu = function() {
            tangon = _closure2_slot0;
            zuuluu = _closure1_slot3;
            zuuluu = zuuluu.theme;
            tangon['current'] = zuuluu;
            zuuluu = _closure2_slot1;
            tangon = _closure1_slot0;
            michal = _closure1_slot1;
            entity = 4;
            michal = michal[entity];
            entity = undefined;
            michal = tangon.bind(entity)(michal);
            tangon = michal.ClientThemeSettings;
            michal = tangon.getSetting;
            michal = michal.bind(tangon)();
            michal = michal.backgroundGradientPresetId;
            zuuluu['current'] = michal;
            return entity;
        };
        michal = new Array(0);
        michal = report.bind(tangon)(zuuluu, michal);
        zuuluu = tangon.useCallback;
        michal = function() {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                zuuluu = _closure1_slot0;
                entity = _closure1_slot1;
                offset = 4;
                michal = entity[offset];
                entity = undefined;
                michal = zuuluu.bind(entity)(michal);
                zuuluu = michal.ClientThemeSettings;
                michal = zuuluu.getSetting;
                michal = michal.bind(zuuluu)();
                report = michal.customUserThemeSettings;
                zuuluu = _closure1_slot5;
                michal = zuuluu.getState;
                tangon = michal.bind(zuuluu)();
                zuuluu = tangon.setAll;
                michal = {};
                verify = null;
                golfie = verify == report;
                oscard = undefined;
                if(golfie) { _fun00004_ip = 85; continue _fun00003 }
 80:
                oscard = report.colors;
 85:
                if(!(verify == oscard)) { _fun00004_ip = 93; continue _fun00003 }
 89:
                oscard = new Array(0);
 93:
                michal['colors'] = oscard;
                oscard = verify == report;
                golfie = undefined;
                if(oscard) { _fun00004_ip = 112; continue _fun00003 }
 106:
                golfie = report.gradientAngle;
 112:
                yankee = verify != golfie;
                oscard = 0;
                if(!yankee) { _fun00004_ip = 124; continue _fun00003 }
 121:
                oscard = golfie;
 124:
                michal['gradientAngle'] = oscard;
                golfie = verify == report;
                oscard = undefined;
                if(golfie) { _fun00004_ip = 144; continue _fun00003 }
 138:
                oscard = report.baseMix;
 144:
                if(!(verify == oscard)) { _fun00004_ip = 152; continue _fun00003 }
 148:
                oscard = _closure1_slot6;
 152:
                michal['chassisMixAmount'] = oscard;
                michal = zuuluu.bind(tangon)(michal);
                michal = _closure2_slot0;
                zuuluu = michal.current;
                michal = _closure1_slot3;
                michal = michal.theme;
                michal = zuuluu !== michal;
                if(michal) { _fun00004_ip = 243; continue _fun00003 }
 191:
                zuuluu = _closure2_slot1;
                tangon = zuuluu.current;
                golfie = _closure1_slot0;
                zuuluu = _closure1_slot1;
                zuuluu = zuuluu[offset];
                zuuluu = golfie.bind(entity)(zuuluu);
                golfie = zuuluu.ClientThemeSettings;
                zuuluu = golfie.getSetting;
                zuuluu = zuuluu.bind(golfie)();
                zuuluu = zuuluu.backgroundGradientPresetId;
                michal = tangon !== zuuluu;
 243:
                if(!michal) { _fun00004_ip = 326; continue _fun00003 }
 246:
                zuuluu = _closure1_slot0;
                tangon = _closure1_slot1;
                michal = 5;
                michal = tangon[michal];
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.saveClientTheme;
                michal = {};
                golfie = _closure2_slot0;
                golfie = golfie.current;
                if(!(verify == golfie)) { _fun00004_ip = 297; continue _fun00003 }
 287:
                option = _closure1_slot3;
                golfie = option.theme;
 297:
                michal['theme'] = golfie;
                oscard = _closure2_slot1;
                oscard = oscard.current;
                michal['backgroundGradientPresetId'] = oscard;
                michal['customUserThemeSettings'] = report;
                michal = zuuluu.bind(tangon)(michal);
 326:
                return entity;
            }
        };
        entity = new Array(0);
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['useCustomThemeReset'] = michal;
    return entity;
})();