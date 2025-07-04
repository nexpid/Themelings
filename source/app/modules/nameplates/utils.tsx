// app/modules/nameplates/utils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
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
    report = 4;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/nameplates/utils.tsx';
    report = oscard.bind(golfie)(report);
    report = function(argFoo, argBar) { // Original name: getBackgroundGradientColors
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            tangon = _closure1_slot4;
            zuuluu = undefined;
            tangon = tangon.bind(zuuluu)(entity);
            if(tangon) { _fun00004_ip = 22; continue _fun00003 }
 20:
            return zuuluu;
 22:
            michal = _closure1_slot3;
            zuuluu = michal.LIGHT;
            michal = argBar;
            if(!(michal !== zuuluu)) { _fun00004_ip = 47; continue _fun00003 }
 39:
            report = entity.darkBackground;
            _fun00004_ip = 53; continue _fun00003;
 47:
            report = entity.lightBackground;
 53:
            entity = {};
            michal = global;
            zuuluu = michal.HermesInternal;
            oscard = zuuluu.concat;
            tangon = '';
            zuuluu = '00';
            zuuluu = oscard.bind(tangon)(report, zuuluu);
            entity['left'] = zuuluu;
            michal = michal.HermesInternal;
            zuuluu = michal.concat;
            michal = '4D';
            michal = zuuluu.bind(tangon)(report, michal);
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
    tangon = function(argFoo) { // Original name: parseFirstFrame
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
    zuuluu['parseFirstFrame'] = tangon;
    michal = function() { // Original name: getNameplateSampleUsers
        entity = {};
        michal = {};
        golfie = _closure1_slot0;
        option = _closure1_slot2;
        zuuluu = 3;
        tangon = option[zuuluu];
        oscard = undefined;
        tangon = golfie.bind(oscard)(tangon);
        verify = tangon.intl;
        report = verify.string;
        tangon = option[zuuluu];
        tangon = golfie.bind(oscard)(tangon);
        tangon = tangon.t;
        tangon = tangon.SbKDHh;
        tangon = report.bind(verify)(tangon);
        michal['name'] = tangon;
        tangon = 'https://cdn.discordapp.com/assets/content/6dcafe1231097505560fd098f0e6698990f0082369d34c35d8c3ee9615709f84.png';
        michal['avatarSrc'] = tangon;
        entity['mallow'] = michal;
        michal = {};
        tangon = option[zuuluu];
        tangon = golfie.bind(oscard)(tangon);
        verify = tangon.intl;
        report = verify.string;
        tangon = option[zuuluu];
        tangon = golfie.bind(oscard)(tangon);
        tangon = tangon.t;
        tangon = tangon.LMSo+P;
        tangon = report.bind(verify)(tangon);
        michal['name'] = tangon;
        tangon = 'https://cdn.discordapp.com/assets/content/17ae2ee3b8476755370ca9fa4d776d0bb811e50962409a7ae2dedd1b96c95eab.png';
        michal['avatarSrc'] = tangon;
        entity['phibi'] = michal;
        michal = {};
        tangon = option[zuuluu];
        tangon = golfie.bind(oscard)(tangon);
        verify = tangon.intl;
        report = verify.string;
        tangon = option[zuuluu];
        tangon = golfie.bind(oscard)(tangon);
        tangon = tangon.t;
        tangon = tangon.g5Dump;
        tangon = report.bind(verify)(tangon);
        michal['name'] = tangon;
        tangon = 'https://cdn.discordapp.com/assets/content/a82a9daadc5c7842f183c0f61966b07d3aeeea478b7c8a4b8af48334eb1ce15f.png';
        michal['avatarSrc'] = tangon;
        entity['locke'] = michal;
        michal = {};
        tangon = option[zuuluu];
        tangon = golfie.bind(oscard)(tangon);
        verify = tangon.intl;
        report = verify.string;
        tangon = option[zuuluu];
        tangon = golfie.bind(oscard)(tangon);
        tangon = tangon.t;
        tangon = tangon.p5Z3Oj;
        tangon = report.bind(verify)(tangon);
        michal['name'] = tangon;
        tangon = 'https://cdn.discordapp.com/assets/content/afc2e8306ce540dccac7da1ca0871684d0bf67e77967ff0f679be84a0a6e51b7.png';
        michal['avatarSrc'] = tangon;
        entity['cherry'] = michal;
        michal = {};
        tangon = option[zuuluu];
        tangon = golfie.bind(oscard)(tangon);
        report = tangon.intl;
        tangon = report.string;
        zuuluu = option[zuuluu];
        zuuluu = golfie.bind(oscard)(zuuluu);
        zuuluu = zuuluu.t;
        zuuluu = zuuluu.ncsliY;
        zuuluu = tangon.bind(report)(zuuluu);
        michal['name'] = zuuluu;
        zuuluu = 'https://cdn.discordapp.com/assets/content/e264a2b0b8d963edd255c223abf1c0554f00a2f3a38640e509a38bc03d73b606.png';
        michal['avatarSrc'] = zuuluu;
        entity['boom'] = michal;
        return entity;
    };
    zuuluu['getNameplateSampleUsers'] = michal;
    return entity;
})();