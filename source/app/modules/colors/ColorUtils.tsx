// app/modules/colors/ColorUtils.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
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
    tangon = 6;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/colors/ColorUtils.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: getColor
        zuuluu = argFoo;
        michal = _closure1_slot5;
        entity = zuuluu.toUpperCase;
        report = entity.bind(zuuluu)();
        tangon = report.replace;
        zuuluu = /-/g;
        entity = '_';
        entity = tangon.bind(report)(zuuluu, entity);
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
    michal = function(argFoo) { // Original name: useDesaturatedColorString
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
    zuuluu['useDesaturatedColorString'] = michal;
    return entity;
})();