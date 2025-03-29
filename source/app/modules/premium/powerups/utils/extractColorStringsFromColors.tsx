// app/modules/premium/powerups/utils/extractColorStringsFromColors.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    tangon = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = tangon;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    oscard = {};
    entity = true;
    oscard['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, oscard);
    entity = 1;
    tangon = tangon[entity];
    entity = undefined;
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/premium/powerups/utils/extractColorStringsFromColors.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: extractColorStringsFromColors
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            entity = {};
            tangon = zuuluu.primary_color;
            oscard = undefined;
            golfie = 0;
            michal = undefined;
            if(!(golfie !== tangon)) { _fun00002_ip = 75; continue _fun00001 }
 21:
            report = zuuluu.primary_color;
            tangon = null;
            tangon = tangon == report;
            michal = undefined;
            if(tangon) { _fun00002_ip = 75; continue _fun00001 }
 38:
            report = _closure1_slot0;
            tangon = _closure1_slot1;
            tangon = tangon[golfie];
            option = report.bind(oscard)(tangon);
            report = option.int2hex;
            tangon = zuuluu.primary_color;
            michal = report.bind(option)(tangon);
 75:
            entity['primaryColor'] = michal;
            tangon = zuuluu.secondary_color;
            michal = undefined;
            if(!(golfie !== tangon)) { _fun00002_ip = 146; continue _fun00001 }
 92:
            report = zuuluu.secondary_color;
            tangon = null;
            tangon = tangon == report;
            michal = undefined;
            if(tangon) { _fun00002_ip = 146; continue _fun00001 }
 109:
            report = _closure1_slot0;
            tangon = _closure1_slot1;
            tangon = tangon[golfie];
            option = report.bind(oscard)(tangon);
            report = option.int2hex;
            tangon = zuuluu.secondary_color;
            michal = report.bind(option)(tangon);
 146:
            entity['secondaryColor'] = michal;
            tangon = zuuluu.tertiary_color;
            michal = undefined;
            if(!(golfie !== tangon)) { _fun00002_ip = 217; continue _fun00001 }
 163:
            report = zuuluu.tertiary_color;
            tangon = null;
            tangon = tangon == report;
            michal = undefined;
            if(tangon) { _fun00002_ip = 217; continue _fun00001 }
 180:
            report = _closure1_slot0;
            tangon = _closure1_slot1;
            tangon = tangon[golfie];
            report = report.bind(oscard)(tangon);
            tangon = report.int2hex;
            zuuluu = zuuluu.tertiary_color;
            michal = tangon.bind(report)(zuuluu);
 217:
            entity['tertiaryColor'] = michal;
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();