// app/modules/user_profile/UserProfileGradientUtils.tsx
export default (function(argFoo, argBar, argBaz, argCor, argGra, argFre, argPlu) {
    option = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    verify = argPlu;
    var _closure1_slot0 = option;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = verify;
    oscard = function(argFoo, argBar, argBaz) { // Original name: getValueInColorGradientByPercentage
        report = argFoo;
        golfie = argBar;
        michal = argBaz;
        entity = 100;
        oscard = michal / entity;
        zuuluu = 1;
        option = zuuluu - oscard;
        michal = global;
        verify = michal.Math;
        tangon = verify.round;
        entity = 0;
        offset = report[entity];
        offset = offset * option;
        entity = golfie[entity];
        entity = entity * oscard;
        entity = offset + entity;
        tangon = tangon.bind(verify)(entity);
        entity = new Array(3);
        entity[0] = tangon;
        verify = michal.Math;
        tangon = verify.round;
        offset = report[zuuluu];
        offset = offset * option;
        zuuluu = golfie[zuuluu];
        zuuluu = zuuluu * oscard;
        zuuluu = offset + zuuluu;
        zuuluu = tangon.bind(verify)(zuuluu);
        entity[1] = zuuluu;
        tangon = michal.Math;
        zuuluu = tangon.round;
        michal = 2;
        report = report[michal];
        report = report * option;
        michal = golfie[michal];
        michal = michal * oscard;
        michal = report + michal;
        michal = zuuluu.bind(tangon)(michal);
        entity[2] = michal;
        return entity;
    };
    var _closure1_slot7 = oscard;
    tangon = function(argFoo, argBar, argBaz) { // Original name: getGradientPercentageColorInRgb
        report = _closure1_slot7;
        tangon = undefined;
        zuuluu = argFoo;
        michal = argBar;
        entity = argBaz;
        michal = report.bind(tangon)(zuuluu, michal, entity);
        entity = 0;
        foxtra = michal[entity];
        entity = 1;
        yankee = michal[entity];
        entity = 2;
        verify = michal[entity];
        entity = global;
        entity = entity.HermesInternal;
        tangon = entity.concat;
        backup = 'rgba(';
        michal = ', ';
        option = ', 1)';
        romeon = michal;
        offset = michal;
        entity = backup[tangon](foxtra, romeon, yankee, offset, verify, option, golfie);
        return entity;
    };
    var _closure1_slot8 = tangon;
    entity = global;
    yankee = entity.Object;
    offset = yankee.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(yankee)(zuuluu, entity, report);
    entity = 0;
    report = verify[entity];
    entity = undefined;
    report = golfie.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 1;
    report = verify[report];
    report = option.bind(entity)(report);
    report = report.useMemo;
    var _closure1_slot4 = report;
    report = 2;
    report = verify[report];
    report = golfie.bind(entity)(report);
    var _closure1_slot5 = report;
    report = 3;
    report = verify[report];
    report = option.bind(entity)(report);
    report = report.ThemeTypes;
    var _closure1_slot6 = report;
    report = 8;
    report = verify[report];
    yankee = option.bind(entity)(report);
    offset = yankee.memoize;
    golfie = function(argFoo) {
        tangon = _closure1_slot0;
        report = _closure1_slot2;
        entity = 9;
        zuuluu = report[entity];
        michal = undefined;
        golfie = tangon.bind(michal)(zuuluu);
        oscard = golfie.getContrastingColor;
        zuuluu = {};
        option = '#ffffff';
        zuuluu['base'] = option;
        entity = report[entity];
        entity = tangon.bind(michal)(entity);
        entity = entity.WCAGContrastRatios;
        entity = entity.HighContrastText;
        zuuluu['contrastRatio'] = entity;
        entity = argFoo;
        zuuluu = oscard.bind(golfie)(entity, zuuluu);
        entity = 6;
        entity = report[entity];
        michal = tangon.bind(michal)(entity);
        entity = michal.hex2int;
        entity = entity.bind(michal)(zuuluu);
        return entity;
    };
    report = function(argFoo) {
        entity = argFoo;
        return entity;
    };
    report = offset.bind(yankee)(golfie, report);
    golfie = 10;
    golfie = verify[golfie];
    verify = option.bind(entity)(golfie);
    option = verify.fileFinishedImporting;
    golfie = 'modules/user_profile/UserProfileGradientUtils.tsx';
    golfie = option.bind(verify)(golfie);
    golfie = function(argFoo) { // Original name: useProfileThemeValues
        oscard = argFoo;
        var _closure2_slot0 = oscard;
        report = _closure1_slot0;
        tangon = _closure1_slot2;
        zuuluu = 4;
        zuuluu = tangon[zuuluu];
        tangon = undefined;
        option = report.bind(tangon)(zuuluu);
        golfie = option.useStateFromStores;
        zuuluu = _closure1_slot5;
        report = new Array(1);
        report[0] = zuuluu;
        zuuluu = function() {
            entity = _closure1_slot5;
            entity = entity.saturation;
            return entity;
        };
        report = golfie.bind(option)(report, zuuluu);
        var _closure2_slot1 = report;
        zuuluu = _closure1_slot4;
        michal = new Array(2);
        michal[0] = oscard;
        michal[1] = report;
        entity = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                zuuluu = _closure2_slot0;
                entity = null;
                if(!(entity != zuuluu)) { _fun00002_ip = 238; continue _fun00001 }
 16:
                oscard = {};
                verify = _closure2_slot0;
                oscard['theme'] = verify;
                michal = _closure2_slot1;
                oscard['saturation'] = michal;
                michal = {};
                option = _closure1_slot0;
                tangon = _closure1_slot2;
                golfie = 5;
                offset = tangon[golfie];
                report = undefined;
                romeon = option.bind(report)(offset);
                yankee = romeon.getResolvedSemanticColor;
                offset = 'PROFILE_GRADIENT_OVERLAY_SYNCED_WITH_USER_THEME';
                offset = yankee.bind(romeon)(offset, oscard);
                michal['overlaySyncedWithUserTheme'] = offset;
                offset = tangon[golfie];
                romeon = option.bind(report)(offset);
                yankee = romeon.getResolvedSemanticColor;
                offset = 'PROFILE_GRADIENT_OVERLAY';
                offset = yankee.bind(romeon)(offset, oscard);
                michal['overlay'] = offset;
                offset = tangon[golfie];
                romeon = option.bind(report)(offset);
                yankee = romeon.getResolvedSemanticColor;
                offset = 'PROFILE_GRADIENT_SECTION_BOX';
                offset = yankee.bind(romeon)(offset, oscard);
                michal['sectionBox'] = offset;
                tangon = tangon[golfie];
                option = option.bind(report)(tangon);
                tangon = option.getThemes;
                tangon = tangon.bind(option)();
                option = tangon.DARK;
                tangon = 0.12;
                if(!(verify === option)) { _fun00002_ip = 193; continue _fun00001 }
 183:
                tangon = 0.24;
 193:
                michal['dividerOpacity'] = tangon;
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot2;
                zuuluu = zuuluu[golfie];
                report = tangon.bind(report)(zuuluu);
                tangon = report.getResolvedSemanticColor;
                zuuluu = 'PROFILE_GRADIENT_ROLE_PILL_BACKGROUND';
                zuuluu = tangon.bind(report)(zuuluu, oscard);
                michal['rolePillBackgroundColor'] = zuuluu;
                return michal;
 238:
                return entity;
            }
        };
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['useProfileThemeValues'] = golfie;
    golfie = function(argFoo) { // Original name: getProfileTheme
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            report = argFoo;
            entity = null;
            michal = entity == report;
            if(michal) { _fun00004_ip = 87; continue _fun00003 }
 12:
            oscard = _closure1_slot0;
            tangon = _closure1_slot2;
            michal = 6;
            tangon = tangon[michal];
            michal = undefined;
            tangon = oscard.bind(michal)(tangon);
            michal = tangon.getDarkness;
            tangon = michal.bind(tangon)(report);
            michal = 0.5;
            if(!(!(tangon > michal))) { _fun00004_ip = 74; continue _fun00003 }
 62:
            michal = _closure1_slot6;
            michal = michal.LIGHT;
            _fun00004_ip = 84; continue _fun00003;
 74:
            zuuluu = _closure1_slot6;
            michal = zuuluu.DARK;
 84:
            entity = michal;
 87:
            return entity;
        }
    };
    zuuluu['getProfileTheme'] = golfie;
    zuuluu['getValueInColorGradientByPercentage'] = oscard;
    oscard = function(argFoo, argBar) { // Original name: calculateOverlayedColor
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            option = argBar;
            oscard = _closure1_slot0;
            zuuluu = _closure1_slot2;
            tangon = 6;
            report = zuuluu[tangon];
            zuuluu = undefined;
            golfie = oscard.bind(zuuluu)(report);
            oscard = golfie.int2rgbArray;
            report = argFoo;
            yankee = oscard.bind(golfie)(report);
            report = null;
            if(!(report != option)) { _fun00006_ip = 291; continue _fun00005 }
 53:
            golfie = _closure1_slot1;
            verify = _closure1_slot2;
            oscard = 7;
            oscard = verify[oscard];
            golfie = golfie.bind(zuuluu)(oscard);
            oscard = golfie.parseString;
            option = oscard.bind(golfie)(option);
            if(!(report != option)) { _fun00006_ip = 287; continue _fun00005 }
 91:
            report = option.red;
            verify = new Array(3);
            verify[0] = report;
            report = option.green;
            verify[1] = report;
            report = option.blue;
            verify[2] = report;
            golfie = 0;
            report = yankee[golfie];
            offset = new Array(3);
            offset[0] = report;
            oscard = 1;
            report = yankee[oscard];
            offset[1] = report;
            report = 2;
            yankee = yankee[report];
            offset[2] = yankee;
            var _closure2_slot0 = offset;
            option = option.alpha;
            var _closure2_slot1 = option;
            option = verify.map;
            michal = function(argFoo, argBar) {
                entity = global;
                zuuluu = entity.Math;
                michal = zuuluu.floor;
                report = _closure2_slot1;
                tangon = argFoo;
                tangon = report * tangon;
                oscard = _closure2_slot1;
                report = 1;
                report = report - oscard;
                oscard = _closure2_slot0;
                entity = argBar;
                entity = oscard[entity];
                entity = report * entity;
                entity = tangon + entity;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            verify = option.bind(verify)(michal);
            option = _closure1_slot3;
            michal = 3;
            michal = option.bind(zuuluu)(verify, michal);
            verify = michal[golfie];
            kiloes = michal[oscard];
            foxtra = michal[report];
            michal = _closure1_slot0;
            entity = _closure1_slot2;
            entity = entity[tangon];
            zuuluu = michal.bind(zuuluu)(entity);
            michal = zuuluu.rgb2int;
            entity = global;
            entity = entity.HermesInternal;
            oscard = entity.concat;
            result = 'rgba(';
            tangon = ', ';
            romeon = ')';
            output = verify;
            sizing = tangon;
            backup = tangon;
            entity = result[oscard](output, sizing, kiloes, backup, foxtra, romeon, yankee);
            entity = michal.bind(zuuluu)(entity);
            return entity;
 287:
            entity = 0;
            return entity;
 291:
            entity = 0;
            return entity;
        }
    };
    zuuluu['calculateOverlayedColor'] = oscard;
    zuuluu['calculateButtonColor'] = report;
    zuuluu['getGradientPercentageColorInRgb'] = tangon;
    tangon = function(argFoo, argBar, argBaz, argCor, argGra) { // Original name: calculateGradientSplitColors
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            golfie = argBaz;
            entity = 0;
            if(!(entity !== golfie)) { _fun00008_ip = 128; continue _fun00007 }
 9:
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot2;
            michal = 6;
            report = tangon[michal];
            oscard = undefined;
            verify = zuuluu.bind(oscard)(report);
            option = verify.int2rgbArray;
            report = argFoo;
            report = option.bind(verify)(report);
            michal = tangon[michal];
            tangon = zuuluu.bind(oscard)(michal);
            zuuluu = tangon.int2rgbArray;
            michal = argBar;
            tangon = zuuluu.bind(tangon)(michal);
            zuuluu = _closure1_slot8;
            option = 100;
            entity = argCor;
            entity = option * entity;
            entity = entity / golfie;
            michal = zuuluu.bind(oscard)(report, tangon, entity);
            entity = new Array(2);
            entity[0] = michal;
            michal = argGra;
            michal = option * michal;
            michal = michal / golfie;
            michal = zuuluu.bind(oscard)(report, tangon, michal);
            entity[1] = michal;
            return entity;
 128:
            entity = new Array(0);
            return entity;
        }
    };
    zuuluu['calculateGradientSplitColors'] = tangon;
    michal = function(argFoo, argBar, argBaz) { // Original name: getUserProfileGradientContainerColors
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            verify = argFoo;
            golfie = argBar;
            zuuluu = argBaz;
            michal = 'string';
            entity = typeof zuuluu;
            if(!(michal !== entity)) { _fun00010_ip = 144; continue _fun00009 }
 23:
            michal = null;
            if(!(michal == verify)) { _fun00010_ip = 37; continue _fun00009 }
 29:
            entity = 0;
            tangon = zuuluu[entity];
            _fun00010_ip = 77; continue _fun00009;
 37:
            oscard = _closure1_slot0;
            report = _closure1_slot2;
            entity = 6;
            report = report[entity];
            entity = undefined;
            oscard = oscard.bind(entity)(report);
            report = oscard.int2rgba;
            entity = 1;
            tangon = report.bind(oscard)(verify, entity);
 77:
            entity = new Array(2);
            entity[0] = tangon;
            if(!(michal == golfie)) { _fun00010_ip = 98; continue _fun00009 }
 89:
            michal = 1;
            michal = zuuluu[michal];
            _fun00010_ip = 138; continue _fun00009;
 98:
            oscard = _closure1_slot0;
            report = _closure1_slot2;
            tangon = 6;
            report = report[tangon];
            tangon = undefined;
            oscard = oscard.bind(tangon)(report);
            report = oscard.int2rgba;
            tangon = 1;
            michal = report.bind(oscard)(golfie, tangon);
 138:
            entity[1] = michal;
            _fun00010_ip = 252; continue _fun00009;
 144:
            tangon = null;
            report = zuuluu;
            if(!(tangon != verify)) { _fun00010_ip = 193; continue _fun00009 }
 153:
            option = _closure1_slot0;
            oscard = _closure1_slot2;
            michal = 6;
            oscard = oscard[michal];
            michal = undefined;
            option = option.bind(michal)(oscard);
            oscard = option.int2rgba;
            michal = 1;
            report = oscard.bind(option)(verify, michal);
 193:
            michal = new Array(2);
            michal[0] = report;
            if(!(tangon != golfie)) { _fun00010_ip = 245; continue _fun00009 }
 205:
            oscard = _closure1_slot0;
            report = _closure1_slot2;
            tangon = 6;
            report = report[tangon];
            tangon = undefined;
            oscard = oscard.bind(tangon)(report);
            report = oscard.int2rgba;
            tangon = 1;
            zuuluu = report.bind(oscard)(golfie, tangon);
 245:
            michal[1] = zuuluu;
            entity = michal;
 252:
            return entity;
        }
    };
    zuuluu['getUserProfileGradientContainerColors'] = michal;
    return entity;
})();