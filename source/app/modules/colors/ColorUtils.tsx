// app/modules/colors/ColorUtils.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function(argFoo) { // Original name: kebabToShoutingCamelCase
        michal = argFoo;
        entity = michal.toUpperCase;
        tangon = entity.bind(michal)();
        zuuluu = tangon.replace;
        michal = /-/g;
        entity = '_';
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    var _closure1_slot6 = entity;
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
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.HEXColors;
    var _closure1_slot5 = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/colors/ColorUtils.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: getColor
        michal = _closure1_slot5;
        tangon = _closure1_slot6;
        zuuluu = undefined;
        entity = argFoo;
        entity = tangon.bind(zuuluu)(entity);
        entity = michal[entity];
        return entity;
    };
    zuuluu['getColor'] = tangon;
    tangon = function(argFoo) { // Original name: useColorValue
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            entity = null;
            michal = entity != zuuluu;
            if(!michal) { _fun00002_ip = 47; continue _fun00001 }
 12:
            report = _closure1_slot0;
            tangon = _closure1_slot2;
            michal = 3;
            tangon = tangon[michal];
            michal = undefined;
            michal = report.bind(michal)(tangon);
            michal = michal.ColorDetails;
            entity = michal[zuuluu];
 47:
            return entity;
        }
    };
    zuuluu['useColorValue'] = tangon;
    tangon = function(argFoo) { // Original name: useDesaturatedColorString
        oscard = argFoo;
        var _closure2_slot0 = oscard;
        report = _closure1_slot0;
        tangon = _closure1_slot2;
        zuuluu = 4;
        tangon = tangon[zuuluu];
        zuuluu = undefined;
        golfie = report.bind(zuuluu)(tangon);
        report = golfie.useStateFromStores;
        zuuluu = _closure1_slot4;
        tangon = new Array(1);
        tangon[0] = zuuluu;
        zuuluu = function() {
            entity = _closure1_slot4;
            entity = entity.saturation;
            return entity;
        };
        report = report.bind(golfie)(tangon, zuuluu);
        var _closure2_slot1 = report;
        tangon = _closure1_slot3;
        zuuluu = tangon.useMemo;
        michal = new Array(2);
        michal[0] = oscard;
        michal[1] = report;
        entity = function() {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                zuuluu = _closure2_slot0;
                entity = null;
                if(!(entity != zuuluu)) { _fun00004_ip = 140; continue _fun00003 }
 16:
                tangon = _closure2_slot0;
                zuuluu = 'currentColor';
                if(!(zuuluu !== tangon)) { _fun00004_ip = 134; continue _fun00003 }
 30:
                report = _closure2_slot0;
                tangon = report.startsWith;
                zuuluu = 'var(';
                zuuluu = tangon.bind(report)(zuuluu);
                if(zuuluu) { _fun00004_ip = 134; continue _fun00003 }
 54:
                tangon = _closure1_slot1;
                report = _closure1_slot2;
                zuuluu = 5;
                zuuluu = report[zuuluu];
                report = undefined;
                tangon = tangon.bind(report)(zuuluu);
                zuuluu = _closure2_slot0;
                oscard = tangon.bind(report)(zuuluu);
                report = oscard.set;
                zuuluu = oscard.get;
                tangon = 'hsl.s';
                golfie = zuuluu.bind(oscard)(tangon);
                zuuluu = _closure2_slot1;
                zuuluu = golfie * zuuluu;
                tangon = report.bind(oscard)(tangon, zuuluu);
                zuuluu = tangon.hex;
                zuuluu = zuuluu.bind(tangon)();
                return zuuluu;
 134:
                michal = _closure2_slot0;
                return michal;
 140:
                return entity;
            }
        };
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['useDesaturatedColorString'] = tangon;
    michal = function(argFoo, argBar) { // Original name: useThemedColorValue
        option = argFoo;
        report = argBar;
        var _closure2_slot0 = option;
        var _closure2_slot1 = report;
        golfie = _closure1_slot0;
        verify = _closure1_slot2;
        zuuluu = 6;
        zuuluu = verify[zuuluu];
        tangon = undefined;
        oscard = golfie.bind(tangon)(zuuluu);
        zuuluu = oscard.useTheme;
        oscard = zuuluu.bind(oscard)();
        var _closure2_slot2 = oscard;
        zuuluu = 4;
        zuuluu = verify[zuuluu];
        verify = golfie.bind(tangon)(zuuluu);
        golfie = verify.useStateFromStores;
        zuuluu = _closure1_slot4;
        tangon = new Array(1);
        tangon[0] = zuuluu;
        zuuluu = function() {
            entity = _closure1_slot4;
            entity = entity.saturation;
            return entity;
        };
        golfie = golfie.bind(verify)(tangon, zuuluu);
        var _closure2_slot3 = golfie;
        tangon = _closure1_slot3;
        zuuluu = tangon.useMemo;
        michal = new Array(4);
        michal[0] = option;
        michal[1] = golfie;
        michal[2] = oscard;
        michal[3] = report;
        entity = function() {
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                entity = _closure2_slot0;
                verify = null;
                michal = verify == entity;
                entity = null;
                if(michal) { _fun00006_ip = 111; continue _fun00005 }
 18:
                michal = {};
                report = _closure1_slot0;
                oscard = _closure1_slot2;
                tangon = 7;
                tangon = oscard[tangon];
                option = undefined;
                oscard = report.bind(option)(tangon);
                report = oscard.getResolvedSemanticColor;
                tangon = _closure1_slot6;
                zuuluu = _closure2_slot0;
                tangon = tangon.bind(option)(zuuluu);
                zuuluu = {};
                option = _closure2_slot1;
                if(!(verify == option)) { _fun00006_ip = 80; continue _fun00005 }
 74:
                option = _closure2_slot2;
                _fun00006_ip = 84; continue _fun00005;
 80:
                option = _closure2_slot1;
 84:
                zuuluu['theme'] = option;
                golfie = _closure2_slot3;
                zuuluu['saturation'] = golfie;
                zuuluu = report.bind(oscard)(tangon, zuuluu);
                michal['hex'] = zuuluu;
                entity = michal;
 111:
                return entity;
            }
        };
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['useThemedColorValue'] = michal;
    return entity;
})();