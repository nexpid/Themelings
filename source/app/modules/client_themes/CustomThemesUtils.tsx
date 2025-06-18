// app/modules/client_themes/CustomThemesUtils.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    verify = argBar;
    option = argBaz;
    zuuluu = argFre;
    offset = argPlu;
    var _closure1_slot0 = verify;
    var _closure1_slot1 = offset;
    oscard = function(argFoo) { // Original name: findCustomThemeCompatibleBaseTheme
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
    report = function(argFoo) { // Original name: updateBaseThemeForCustomTheme
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
            report = zuuluu.bind(tangon)();
            tangon = report.backgroundGradientPresetId;
            zuuluu = null;
            golfie = zuuluu != tangon;
            if(!golfie) { _fun00004_ip = 73; continue _fun00003 }
 59:
            tangon = report.backgroundGradientPresetId;
            zuuluu = _closure1_slot8;
            golfie = tangon in zuuluu;
 73:
            if(!golfie) { _fun00004_ip = 99; continue _fun00003 }
 76:
            tangon = _closure1_slot8;
            zuuluu = report.backgroundGradientPresetId;
            zuuluu = tangon[zuuluu];
            zuuluu = zuuluu.theme;
            golfie = zuuluu !== oscard;
 99:
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot1;
            michal = 8;
            michal = tangon[michal];
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.saveClientTheme;
            michal = {};
            michal['theme'] = oscard;
            oscard = undefined;
            if(golfie) { _fun00004_ip = 142; continue _fun00003 }
 136:
            oscard = report.backgroundGradientPresetId;
 142:
            michal['backgroundGradientPresetId'] = oscard;
            report = report.customUserThemeSettings;
            michal['customUserThemeSettings'] = report;
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        }
    };
    var _closure1_slot12 = report;
    tangon = function() { // Original name: adjustBaseThemeForCustomTheme
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
    option = 9;
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
    zuuluu['findCustomThemeCompatibleBaseTheme'] = oscard;
    zuuluu['updateBaseThemeForCustomTheme'] = report;
    report = function() { // Original name: useCustomThemeReset
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
            entity = 7;
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
        michal = function(argFoo) {
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                tangon = argFoo;
                report = _closure1_slot0;
                entity = _closure1_slot1;
                verify = 7;
                zuuluu = entity[verify];
                entity = undefined;
                zuuluu = report.bind(entity)(zuuluu);
                report = zuuluu.ClientThemeSettings;
                zuuluu = report.getSetting;
                zuuluu = zuuluu.bind(report)();
                report = zuuluu.customUserThemeSettings;
                oscard = _closure1_slot5;
                zuuluu = oscard.getState;
                option = zuuluu.bind(oscard)();
                oscard = option.setAll;
                zuuluu = {};
                golfie = null;
                yankee = golfie == report;
                offset = undefined;
                if(yankee) { _fun00010_ip = 88; continue _fun00009 }
 83:
                offset = report.colors;
 88:
                if(!(golfie == offset)) { _fun00010_ip = 130; continue _fun00009 }
 92:
                yankee = _closure1_slot10;
                yankee = yankee.RESET_BUTTON;
                if(!(tangon !== yankee)) { _fun00010_ip = 112; continue _fun00009 }
 106:
                yankee = new Array(0);
                _fun00010_ip = 127; continue _fun00009;
 112:
                foxtra = _closure1_slot7;
                romeon = new Array(1);
                romeon[0] = foxtra;
                yankee = romeon;
 127:
                offset = yankee;
 130:
                zuuluu['colors'] = offset;
                offset = golfie == report;
                yankee = undefined;
                if(offset) { _fun00010_ip = 149; continue _fun00009 }
 143:
                yankee = report.gradientAngle;
 149:
                romeon = golfie != yankee;
                offset = 0;
                if(!romeon) { _fun00010_ip = 161; continue _fun00009 }
 158:
                offset = yankee;
 161:
                zuuluu['gradientAngle'] = offset;
                yankee = golfie == report;
                offset = undefined;
                if(yankee) { _fun00010_ip = 181; continue _fun00009 }
 175:
                offset = report.baseMix;
 181:
                if(!(golfie == offset)) { _fun00010_ip = 189; continue _fun00009 }
 185:
                offset = _closure1_slot6;
 189:
                zuuluu['chassisMixAmount'] = offset;
                zuuluu = oscard.bind(option)(zuuluu);
                zuuluu = _closure1_slot10;
                zuuluu = zuuluu.RESET_BUTTON;
                if(!(tangon !== zuuluu)) { _fun00010_ip = 240; continue _fun00009 }
 213:
                zuuluu = _closure2_slot0;
                oscard = zuuluu.current;
                if(!(golfie == oscard)) { _fun00010_ip = 238; continue _fun00009 }
 229:
                zuuluu = _closure1_slot3;
                oscard = zuuluu.theme;
 238:
                _fun00010_ip = 274; continue _fun00009;
 240:
                tangon = _closure1_slot11;
                zuuluu = _closure2_slot0;
                zuuluu = zuuluu.current;
                if(!(golfie == zuuluu)) { _fun00010_ip = 269; continue _fun00009 }
 260:
                golfie = _closure1_slot3;
                zuuluu = golfie.theme;
 269:
                oscard = tangon.bind(entity)(zuuluu);
 274:
                zuuluu = _closure1_slot3;
                zuuluu = zuuluu.theme;
                zuuluu = oscard === zuuluu;
                if(!zuuluu) { _fun00010_ip = 345; continue _fun00009 }
 290:
                tangon = _closure2_slot1;
                golfie = tangon.current;
                option = _closure1_slot0;
                tangon = _closure1_slot1;
                tangon = tangon[verify];
                tangon = option.bind(entity)(tangon);
                option = tangon.ClientThemeSettings;
                tangon = option.getSetting;
                tangon = tangon.bind(option)();
                tangon = tangon.backgroundGradientPresetId;
                zuuluu = golfie === tangon;
 345:
                if(zuuluu) { _fun00010_ip = 407; continue _fun00009 }
 348:
                zuuluu = _closure1_slot0;
                tangon = _closure1_slot1;
                michal = 8;
                michal = tangon[michal];
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.saveClientTheme;
                michal = {};
                michal['theme'] = oscard;
                oscard = _closure2_slot1;
                oscard = oscard.current;
                michal['backgroundGradientPresetId'] = oscard;
                michal['customUserThemeSettings'] = report;
                michal = zuuluu.bind(tangon)(michal);
 407:
                return entity;
            }
        };
        entity = new Array(0);
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['useCustomThemeReset'] = report;
    zuuluu['adjustBaseThemeForCustomTheme'] = tangon;
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