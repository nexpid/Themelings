// app/modules/nameplates/utils.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBar;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = golfie;
    tangon = function(argFoo) { // Original name: isValidPalette
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            michal = tangon.name;
            zuuluu = _closure1_slot0;
            entity = _closure1_slot2;
            option = 1;
            entity = entity[option];
            oscard = undefined;
            entity = zuuluu.bind(oscard)(entity);
            entity = entity.INVALID_PALETTE_KEY;
            entity = michal !== entity;
            if(!entity) { _fun00002_ip = 120; continue _fun00001 }
 46:
            zuuluu = tangon.name;
            golfie = _closure1_slot0;
            michal = _closure1_slot2;
            michal = michal[option];
            michal = golfie.bind(oscard)(michal);
            michal = michal.CUSTOM_PALETTE_KEY;
            michal = zuuluu !== michal;
            if(michal) { _fun00002_ip = 117; continue _fun00001 }
 81:
            golfie = _closure1_slot5;
            zuuluu = tangon.darkBackground;
            zuuluu = golfie.bind(oscard)(zuuluu);
            if(!zuuluu) { _fun00002_ip = 114; continue _fun00001 }
 99:
            report = _closure1_slot5;
            tangon = tangon.lightBackground;
            zuuluu = report.bind(oscard)(tangon);
 114:
            michal = zuuluu;
 117:
            entity = michal;
 120:
            return entity;
        }
    };
    var _closure1_slot4 = tangon;
    entity = function(argFoo) { // Original name: isValidHex
        zuuluu = /^#([0-9a-fA-F]{6})$/;
        michal = zuuluu.test;
        entity = argFoo;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    var _closure1_slot5 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, report);
    entity = 0;
    report = golfie[entity];
    entity = undefined;
    report = oscard.bind(entity)(report);
    report = report.ThemeTypes;
    var _closure1_slot3 = report;
    report = 3;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/nameplates/utils.tsx';
    report = oscard.bind(golfie)(report);
    report = function(argFoo, argBar, argBaz, argCor) { // Original name: getBackgroundGradientColors
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            michal = argFoo;
            oscard = argBaz;
            entity = argCor;
            report = _closure1_slot4;
            tangon = undefined;
            report = report.bind(tangon)(michal);
            if(report) { _fun00004_ip = 28; continue _fun00003 }
 26:
            return tangon;
 28:
            zuuluu = _closure1_slot3;
            tangon = zuuluu.LIGHT;
            zuuluu = argBar;
            if(!(zuuluu !== tangon)) { _fun00004_ip = 53; continue _fun00003 }
 45:
            report = michal.darkBackground;
            _fun00004_ip = 59; continue _fun00003;
 53:
            report = michal.lightBackground;
 59:
            if(oscard) { _fun00004_ip = 65; continue _fun00003 }
 62:
            oscard = entity;
 65:
            entity = {};
            golfie = '00';
            if(!oscard) { _fun00004_ip = 82; continue _fun00003 }
 76:
            golfie = '1A';
 82:
            michal = global;
            zuuluu = michal.HermesInternal;
            zuuluu = zuuluu.concat;
            tangon = '';
            zuuluu = zuuluu.bind(tangon)(report, golfie);
            entity['left'] = zuuluu;
            zuuluu = '4D';
            if(!oscard) { _fun00004_ip = 124; continue _fun00003 }
 118:
            zuuluu = '80';
 124:
            michal = michal.HermesInternal;
            michal = michal.concat;
            michal = michal.bind(tangon)(report, zuuluu);
            entity['right'] = michal;
            return entity;
        }
    };
    zuuluu['getBackgroundGradientColors'] = report;
    zuuluu['isValidPalette'] = tangon;
    tangon = function(argFoo) {
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            zuuluu = _closure1_slot0;
            entity = _closure1_slot2;
            report = 1;
            entity = entity[report];
            tangon = undefined;
            entity = zuuluu.bind(tangon)(entity);
            zuuluu = entity.NAMEPLATE_PALETTES;
            entity = argFoo;
            entity = zuuluu[entity];
            zuuluu = null;
            if(!(zuuluu == entity)) { _fun00006_ip = 67; continue _fun00005 }
 44:
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            michal = michal[report];
            michal = zuuluu.bind(tangon)(michal);
            entity = michal.INVALID_NAMEPLATE_PALETTE;
 67:
            return entity;
        }
    };
    zuuluu['getNameplatePalette'] = tangon;
    michal = function(argFoo) { // Original name: parseFirstFrame
        tangon = _closure1_slot1;
        report = _closure1_slot2;
        michal = 2;
        entity = report[michal];
        zuuluu = undefined;
        golfie = tangon.bind(zuuluu)(entity);
        oscard = golfie.decode;
        entity = argFoo;
        entity = oscard.bind(golfie)(entity);
        michal = report[michal];
        zuuluu = tangon.bind(zuuluu)(michal);
        michal = zuuluu.toRGBA8;
        michal = michal.bind(zuuluu)(entity);
        report = 0;
        golfie = michal[report];
        michal = global;
        oscard = michal.document;
        tangon = oscard.createElement;
        zuuluu = 'canvas';
        zuuluu = tangon.bind(oscard)(zuuluu);
        tangon = entity.width;
        zuuluu['width'] = tangon;
        tangon = entity.height;
        zuuluu['height'] = tangon;
        oscard = zuuluu.getContext;
        tangon = '2d';
        tangon = oscard.bind(zuuluu)(tangon);
        option = michal.ImageData;
        michal = michal.Uint8ClampedArray;
        oscard = michal.prototype;
        oscard = Object.create(oscard, {constructor: {value: michal}});
        romeon = oscard;
        yankee = golfie;
        michal = new romeon[michal](yankee, offset);
        yankee = michal instanceof Object ? michal : oscard;
        offset = entity.width;
        verify = entity.height;
        michal = option.prototype;
        michal = Object.create(michal, {constructor: {value: option}});
        romeon = michal;
        entity = new romeon[option](yankee, offset, verify, option);
        michal = entity instanceof Object ? entity : michal;
        entity = tangon.putImageData;
        entity = entity.bind(tangon)(michal, report, report);
        michal = zuuluu.toDataURL;
        entity = 'image/png';
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    zuuluu['parseFirstFrame'] = michal;
    return entity;
})();