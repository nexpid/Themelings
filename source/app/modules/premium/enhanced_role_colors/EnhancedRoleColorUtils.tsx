// app/modules/premium/enhanced_role_colors/EnhancedRoleColorUtils.tsx
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
    tangon = 'modules/premium/enhanced_role_colors/EnhancedRoleColorUtils.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: extractColorStringsFromServerColors
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            entity = {};
            michal = zuuluu.primary_color;
            tangon = null;
            report = tangon == michal;
            oscard = undefined;
            michal = undefined;
            if(report) { _fun00002_ip = 63; continue _fun00001 }
 24:
            golfie = _closure1_slot0;
            option = _closure1_slot1;
            report = 0;
            report = option[report];
            option = golfie.bind(oscard)(report);
            golfie = option.int2hex;
            report = zuuluu.primary_color;
            michal = golfie.bind(option)(report);
 63:
            entity['primaryColor'] = michal;
            michal = zuuluu.secondary_color;
            report = tangon == michal;
            michal = undefined;
            if(report) { _fun00002_ip = 122; continue _fun00001 }
 83:
            golfie = _closure1_slot0;
            option = _closure1_slot1;
            report = 0;
            report = option[report];
            option = golfie.bind(oscard)(report);
            golfie = option.int2hex;
            report = zuuluu.secondary_color;
            michal = golfie.bind(option)(report);
 122:
            entity['secondaryColor'] = michal;
            michal = zuuluu.tertiary_color;
            tangon = tangon == michal;
            michal = undefined;
            if(tangon) { _fun00002_ip = 181; continue _fun00001 }
 142:
            report = _closure1_slot0;
            golfie = _closure1_slot1;
            tangon = 0;
            tangon = golfie[tangon];
            report = report.bind(oscard)(tangon);
            tangon = report.int2hex;
            zuuluu = zuuluu.tertiary_color;
            michal = tangon.bind(report)(zuuluu);
 181:
            entity['tertiaryColor'] = michal;
            return entity;
        }
    };
    zuuluu['extractColorStringsFromServerColors'] = tangon;
    michal = function(argFoo) { // Original name: extractColorStringsFromColors
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zuuluu = argFoo;
            entity = {};
            michal = zuuluu.primaryColor;
            tangon = null;
            report = tangon == michal;
            oscard = undefined;
            michal = undefined;
            if(report) { _fun00004_ip = 63; continue _fun00003 }
 24:
            golfie = _closure1_slot0;
            option = _closure1_slot1;
            report = 0;
            report = option[report];
            option = golfie.bind(oscard)(report);
            golfie = option.int2hex;
            report = zuuluu.primaryColor;
            michal = golfie.bind(option)(report);
 63:
            entity['primaryColor'] = michal;
            michal = zuuluu.secondaryColor;
            report = tangon == michal;
            michal = undefined;
            if(report) { _fun00004_ip = 122; continue _fun00003 }
 83:
            golfie = _closure1_slot0;
            option = _closure1_slot1;
            report = 0;
            report = option[report];
            option = golfie.bind(oscard)(report);
            golfie = option.int2hex;
            report = zuuluu.secondaryColor;
            michal = golfie.bind(option)(report);
 122:
            entity['secondaryColor'] = michal;
            michal = zuuluu.tertiaryColor;
            tangon = tangon == michal;
            michal = undefined;
            if(tangon) { _fun00004_ip = 181; continue _fun00003 }
 142:
            report = _closure1_slot0;
            golfie = _closure1_slot1;
            tangon = 0;
            tangon = golfie[tangon];
            report = report.bind(oscard)(tangon);
            tangon = report.int2hex;
            zuuluu = zuuluu.tertiaryColor;
            michal = tangon.bind(report)(zuuluu);
 181:
            entity['tertiaryColor'] = michal;
            return entity;
        }
    };
    zuuluu['extractColorStringsFromColors'] = michal;
    return entity;
})();