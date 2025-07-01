// app/modules/client_themes/CustomThemesUtils.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    verify = argBar;
    option = argBaz;
    zuuluu = argFre;
    offset = argPlu;
    var _closure1_slot0 = verify;
    var _closure1_slot1 = offset;
    oscard = function(argFoo) { // Original name: findCustomThemeCompatibleDefaultTheme
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot1;
            entity = 6;
            zuuluu = zuuluu[entity];
            entity = undefined;
            tangon = tangon.bind(entity)(zuuluu);
            zuuluu = tangon.isThemeDark;
            entity = argFoo;
            entity = zuuluu.bind(tangon)(entity);
            michal = _closure1_slot9;
            if(entity) { _fun00002_ip = 54; continue _fun00001 }
 46:
            entity = michal.LIGHT;
            _fun00002_ip = 60; continue _fun00001;
 54:
            entity = michal.DARK;
 60:
            return entity;
        }
    };
    var _closure1_slot11 = oscard;
    report = function(argFoo) { // Original name: updateDefaultThemePreview
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            oscard = argFoo;
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot1;
            entity = 7;
            zuuluu = zuuluu[entity];
            entity = undefined;
            zuuluu = tangon.bind(entity)(zuuluu);
            tangon = zuuluu.ClientThemeSettings;
            zuuluu = tangon.getSetting;
            tangon = zuuluu.bind(tangon)();
            report = tangon.backgroundGradientPresetId;
            zuuluu = null;
            zuuluu = zuuluu != report;
            if(!zuuluu) { _fun00004_ip = 73; continue _fun00003 }
 59:
            golfie = tangon.backgroundGradientPresetId;
            report = _closure1_slot8;
            zuuluu = golfie in report;
 73:
            if(!zuuluu) { _fun00004_ip = 99; continue _fun00003 }
 76:
            report = _closure1_slot8;
            tangon = tangon.backgroundGradientPresetId;
            tangon = report[tangon];
            tangon = tangon.theme;
            zuuluu = tangon !== oscard;
 99:
            report = _closure1_slot0;
            golfie = _closure1_slot1;
            tangon = 8;
            tangon = golfie[tangon];
            report = report.bind(entity)(tangon);
            tangon = report.setThemeOverride;
            tangon = tangon.bind(report)(oscard);
            if(!zuuluu) { _fun00004_ip = 163; continue _fun00003 }
 133:
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot1;
            michal = 9;
            michal = tangon[michal];
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.resetPreviewClientTheme;
            michal = michal.bind(zuuluu)();
 163:
            return entity;
        }
    };
    var _closure1_slot12 = report;
    tangon = function() { // Original name: adjustDefaultTheme
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tangon = _closure1_slot11;
            entity = _closure1_slot3;
            zuuluu = entity.theme;
            entity = undefined;
            zuuluu = tangon.bind(entity)(zuuluu);
            tangon = _closure1_slot3;
            tangon = tangon.theme;
            if(!(zuuluu !== tangon)) { _fun00006_ip = 45; continue _fun00005 }
 36:
            michal = _closure1_slot12;
            michal = michal.bind(entity)(zuuluu);
 45:
            return entity;
        }
    };
    var _closure1_slot13 = tangon;
    entity = global;
    romeon = entity.Object;
    yankee = romeon.defineProperty;
    golfie = {};
    entity = true;
    golfie['value'] = entity;
    entity = '__esModule';
    entity = yankee.bind(romeon)(zuuluu, entity, golfie);
    entity = 0;
    yankee = offset[entity];
    golfie = argCor;
    entity = undefined;
    golfie = golfie.bind(entity)(yankee);
    var _closure1_slot2 = golfie;
    golfie = 1;
    golfie = offset[golfie];
    golfie = option.bind(entity)(golfie);
    var _closure1_slot3 = golfie;
    golfie = 2;
    golfie = offset[golfie];
    golfie = option.bind(entity)(golfie);
    var _closure1_slot4 = golfie;
    golfie = 3;
    golfie = offset[golfie];
    golfie = verify.bind(entity)(golfie);
    option = golfie.useClientThemeColorPickerStore;
    var _closure1_slot5 = option;
    option = golfie.DEFAULT_COLOR_INTENSITY;
    var _closure1_slot6 = option;
    golfie = golfie.DEFAULT_COLOR;
    var _closure1_slot7 = golfie;
    golfie = 4;
    golfie = offset[golfie];
    golfie = verify.bind(entity)(golfie);
    golfie = golfie.BACKGROUND_GRADIENT_PRESETS_MAP;
    var _closure1_slot8 = golfie;
    golfie = 5;
    golfie = offset[golfie];
    golfie = verify.bind(entity)(golfie);
    golfie = golfie.ThemeTypes;
    var _closure1_slot9 = golfie;
    golfie = {};
    option = 'reset_button';
    golfie['RESET_BUTTON'] = option;
    option = 'editor_close';
    golfie['EDITOR_CLOSE'] = option;
    var _closure1_slot10 = golfie;
    option = 10;
    option = offset[option];
    offset = verify.bind(entity)(option);
    verify = offset.fileFinishedImporting;
    option = 'modules/client_themes/CustomThemesUtils.tsx';
    option = verify.bind(offset)(option);
    option = function() { // Original name: shouldIgnoreThemeChange
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = _closure1_slot4;
            entity = entity.settings;
            zuuluu = entity.appearance;
            michal = null;
            tangon = michal == zuuluu;
            entity = undefined;
            if(tangon) { _fun00008_ip = 51; continue _fun00007 }
 30:
            zuuluu = zuuluu.clientThemeSettings;
            tangon = michal == zuuluu;
            entity = undefined;
            if(tangon) { _fun00008_ip = 51; continue _fun00007 }
 45:
            entity = zuuluu.customUserThemeSettings;
 51:
            entity = michal != entity;
            return entity;
        }
    };
    zuuluu['shouldIgnoreThemeChange'] = option;
    zuuluu['ResetLocation'] = golfie;
    zuuluu['findCustomThemeCompatibleDefaultTheme'] = oscard;
    zuuluu['updateDefaultThemePreview'] = report;
    report = function() { // Original name: useCustomThemeReset
        tangon = _closure1_slot2;
        zuuluu = tangon.useRef;
        michal = null;
        michal = zuuluu.bind(tangon)(michal);
        var _closure2_slot0 = michal;
        report = tangon.useEffect;
        zuuluu = function() {
            michal = _closure2_slot0;
            entity = _closure1_slot3;
            entity = entity.theme;
            michal['current'] = entity;
            entity = undefined;
            return entity;
        };
        michal = new Array(0);
        michal = report.bind(tangon)(zuuluu, michal);
        zuuluu = tangon.useCallback;
        michal = function(argFoo) {
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                report = argFoo;
                tangon = _closure1_slot0;
                entity = _closure1_slot1;
                oscard = 7;
                zuuluu = entity[oscard];
                entity = undefined;
                zuuluu = tangon.bind(entity)(zuuluu);
                tangon = zuuluu.ClientThemeSettings;
                zuuluu = tangon.getSetting;
                zuuluu = zuuluu.bind(tangon)();
                offset = zuuluu.customUserThemeSettings;
                tangon = _closure1_slot5;
                zuuluu = tangon.getState;
                option = zuuluu.bind(tangon)();
                golfie = option.setAll;
                tangon = {};
                zuuluu = null;
                yankee = zuuluu == offset;
                verify = undefined;
                if(yankee) { _fun00010_ip = 88; continue _fun00009 }
 83:
                verify = offset.colors;
 88:
                if(!(zuuluu == verify)) { _fun00010_ip = 130; continue _fun00009 }
 92:
                yankee = _closure1_slot10;
                yankee = yankee.RESET_BUTTON;
                if(!(report !== yankee)) { _fun00010_ip = 112; continue _fun00009 }
 106:
                yankee = new Array(0);
                _fun00010_ip = 127; continue _fun00009;
 112:
                foxtra = _closure1_slot7;
                romeon = new Array(1);
                romeon[0] = foxtra;
                yankee = romeon;
 127:
                verify = yankee;
 130:
                tangon['colors'] = verify;
                verify = zuuluu == offset;
                yankee = undefined;
                if(verify) { _fun00010_ip = 149; continue _fun00009 }
 143:
                yankee = offset.gradientAngle;
 149:
                romeon = zuuluu != yankee;
                verify = 0;
                if(!romeon) { _fun00010_ip = 161; continue _fun00009 }
 158:
                verify = yankee;
 161:
                tangon['gradientAngle'] = verify;
                yankee = zuuluu == offset;
                verify = undefined;
                if(yankee) { _fun00010_ip = 181; continue _fun00009 }
 175:
                verify = offset.baseMix;
 181:
                if(!(zuuluu == verify)) { _fun00010_ip = 189; continue _fun00009 }
 185:
                verify = _closure1_slot6;
 189:
                tangon['chassisMixAmount'] = verify;
                tangon = golfie.bind(option)(tangon);
                tangon = _closure1_slot10;
                tangon = tangon.RESET_BUTTON;
                if(!(report !== tangon)) { _fun00010_ip = 245; continue _fun00009 }
 213:
                report = _closure1_slot0;
                golfie = _closure1_slot1;
                tangon = 8;
                tangon = golfie[tangon];
                report = report.bind(entity)(tangon);
                tangon = report.clearThemeOverride;
                tangon = tangon.bind(report)();
                _fun00010_ip = 288; continue _fun00009;
 245:
                report = _closure1_slot12;
                golfie = _closure1_slot11;
                tangon = _closure2_slot0;
                tangon = tangon.current;
                if(!(zuuluu == tangon)) { _fun00010_ip = 278; continue _fun00009 }
 269:
                option = _closure1_slot3;
                tangon = option.theme;
 278:
                tangon = golfie.bind(entity)(tangon);
                tangon = report.bind(entity)(tangon);
 288:
                report = _closure1_slot0;
                tangon = _closure1_slot1;
                tangon = tangon[oscard];
                tangon = report.bind(entity)(tangon);
                report = tangon.ClientThemeSettings;
                tangon = report.getSetting;
                tangon = tangon.bind(report)();
                tangon = tangon.backgroundGradientPresetId;
                if(!(zuuluu != tangon)) { _fun00010_ip = 362; continue _fun00009 }
 331:
                zuuluu = _closure1_slot0;
                report = _closure1_slot1;
                michal = 9;
                michal = report[michal];
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.updateBackgroundGradientPreset;
                michal = michal.bind(zuuluu)(tangon);
 362:
                return entity;
            }
        };
        entity = new Array(0);
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['useCustomThemeReset'] = report;
    zuuluu['adjustDefaultTheme'] = tangon;
    michal = function(argFoo, argBar, argBaz) { // Original name: setInitialCustomTheme
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            entity = argFoo;
            michal = entity.length;
            entity = 0;
            if(!(entity === michal)) { _fun00012_ip = 35; continue _fun00011 }
 14:
            zuuluu = new Array(1);
            entity = argBar;
            zuuluu[0] = entity;
            michal = argBaz;
            entity = undefined;
            entity = michal.bind(entity)(zuuluu);
 35:
            michal = _closure1_slot13;
            entity = undefined;
            michal = michal.bind(entity)();
            return entity;
        }
    };
    zuuluu['setInitialCustomTheme'] = michal;
    return entity;
})();