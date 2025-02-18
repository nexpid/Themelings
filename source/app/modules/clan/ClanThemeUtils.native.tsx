// app/modules/clan/ClanThemeUtils.native.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    golfie = argBar;
    zuuluu = argFre;
    option = argPlu;
    var _closure1_slot0 = golfie;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = option;
    report = function(argFoo) { // Original name: getAccessibleTextColor
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot2;
            entity = 1;
            entity = tangon[entity];
            tangon = undefined;
            zuuluu = zuuluu.bind(tangon)(entity);
            entity = argFoo;
            golfie = zuuluu.bind(tangon)(entity);
            zuuluu = golfie.get;
            entity = 'rgb.r';
            zuuluu = zuuluu.bind(golfie)(entity);
            entity = 299;
            report = entity * zuuluu;
            zuuluu = golfie.get;
            entity = 'rgb.g';
            zuuluu = zuuluu.bind(golfie)(entity);
            entity = 587;
            entity = entity * zuuluu;
            oscard = golfie.get;
            zuuluu = 'rgb.b';
            oscard = oscard.bind(golfie)(zuuluu);
            zuuluu = 114;
            zuuluu = zuuluu * oscard;
            entity = report + entity;
            zuuluu = entity + zuuluu;
            entity = 1000;
            zuuluu = zuuluu / entity;
            entity = 128;
            if(!(!(zuuluu < entity))) { _fun00002_ip = 166; continue _fun00001 }
 133:
            zuuluu = _closure1_slot1;
            report = _closure1_slot2;
            entity = 3;
            entity = report[entity];
            entity = zuuluu.bind(tangon)(entity);
            entity = entity.unsafe_rawColors;
            entity = entity.PRIMARY_860;
            _fun00002_ip = 197; continue _fun00001;
 166:
            zuuluu = _closure1_slot1;
            report = _closure1_slot2;
            michal = 3;
            michal = report[michal];
            michal = zuuluu.bind(tangon)(michal);
            michal = michal.unsafe_rawColors;
            entity = michal.PRIMARY_130;
 197:
            return entity;
        }
    };
    var _closure1_slot5 = report;
    entity = function(argFoo) { // Original name: getColorFromChroma
        michal = argFoo;
        tangon = _closure1_slot1;
        zuuluu = _closure1_slot2;
        entity = 4;
        zuuluu = zuuluu[entity];
        entity = undefined;
        oscard = tangon.bind(entity)(zuuluu);
        zuuluu = michal.get;
        entity = 'rgb.r';
        report = zuuluu.bind(michal)(entity);
        zuuluu = michal.get;
        entity = 'rgb.g';
        verify = zuuluu.bind(michal)(entity);
        zuuluu = michal.get;
        entity = 'rgb.b';
        option = zuuluu.bind(michal)(entity);
        entity = michal.alpha;
        golfie = entity.bind(michal)();
        michal = oscard.prototype;
        michal = Object.create(michal, {constructor: {value: oscard}});
        yankee = michal;
        offset = report;
        entity = new yankee[oscard](offset, verify, option, golfie, oscard);
        entity = entity instanceof Object ? entity : michal;
        return entity;
    };
    var _closure1_slot6 = entity;
    tangon = function(argFoo, argBar) { // Original name: getAccessibleClanColor
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            tangon = argFoo;
            option = arguments[2];
            zuuluu = undefined;
            if(!(option === zuuluu)) { _fun00004_ip = 46; continue _fun00003 }
 12:
            michal = _closure1_slot0;
            report = _closure1_slot2;
            entity = 5;
            entity = report[entity];
            entity = michal.bind(zuuluu)(entity);
            entity = entity.WCAGContrastRatios;
            option = entity.Text;
 46:
            michal = null;
            if(!(michal != tangon)) { _fun00004_ip = 197; continue _fun00003 }
 55:
            entity = function(argFoo) { // Original name: getClosestBrandPreset
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    report = _closure1_slot1;
                    oscard = _closure1_slot2;
                    entity = 1;
                    tangon = oscard[entity];
                    entity = undefined;
                    golfie = report.bind(entity)(tangon);
                    tangon = argFoo;
                    tangon = golfie.bind(entity)(tangon);
                    var _closure3_slot0 = tangon;
                    tangon = 2;
                    tangon = oscard[tangon];
                    tangon = report.bind(entity)(tangon);
                    zuuluu = _closure1_slot3;
                    report = tangon.bind(entity)(zuuluu);
                    tangon = report.map;
                    zuuluu = function(argFoo) {
                        entity = argFoo;
                        golfie = entity.primary;
                        entity = {};
                        entity['primary'] = golfie;
                        option = _closure1_slot1;
                        verify = _closure1_slot2;
                        michal = 1;
                        tangon = verify[michal];
                        zuuluu = undefined;
                        oscard = option.bind(zuuluu)(tangon);
                        report = oscard.distance;
                        tangon = _closure3_slot0;
                        michal = verify[michal];
                        michal = option.bind(zuuluu)(michal);
                        zuuluu = michal.bind(zuuluu)(golfie);
                        michal = 'hsl';
                        michal = report.bind(oscard)(tangon, zuuluu, michal);
                        entity['distance'] = michal;
                        return entity;
                    };
                    report = tangon.bind(report)(zuuluu);
                    tangon = report.filter;
                    zuuluu = function(argFoo) {
                        entity = argFoo;
                        michal = entity.distance;
                        entity = _closure1_slot4;
                        entity = michal < entity;
                        return entity;
                    };
                    tangon = tangon.bind(report)(zuuluu);
                    zuuluu = tangon.minBy;
                    michal = function(argFoo) {
                        entity = argFoo;
                        entity = entity.distance;
                        return entity;
                    };
                    michal = zuuluu.bind(tangon)(michal);
                    zuuluu = null;
                    zuuluu = zuuluu == michal;
                    if(zuuluu) { _fun00006_ip = 127; continue _fun00005 }
 121:
                    entity = michal.primary;
 127:
                    return entity;
                }
            };
            entity = entity.bind(zuuluu)(tangon);
            verify = tangon;
            if(!(michal != entity)) { _fun00004_ip = 79; continue _fun00003 }
 76:
            verify = entity;
 79:
            oscard = _closure1_slot1;
            golfie = _closure1_slot2;
            report = 1;
            tangon = golfie[report];
            tangon = oscard.bind(zuuluu)(tangon);
            verify = tangon.bind(zuuluu)(verify);
            tangon = golfie[report];
            oscard = oscard.bind(zuuluu)(tangon);
            tangon = argBar;
            yankee = oscard.bind(zuuluu)(tangon);
            oscard = _closure1_slot0;
            tangon = 6;
            tangon = golfie[tangon];
            golfie = oscard.bind(zuuluu)(tangon);
            oscard = golfie.getAccessibleColor;
            tangon = {};
            offset = _closure1_slot6;
            romeon = offset.bind(zuuluu)(verify);
            verify = new Array(2);
            verify[0] = romeon;
            offset = offset.bind(zuuluu)(yankee);
            verify[1] = offset;
            tangon['colors'] = verify;
            tangon['ratio'] = option;
            tangon['saturationFactor'] = report;
            tangon = oscard.bind(golfie)(tangon);
            if(!(michal == tangon)) { _fun00004_ip = 199; continue _fun00003 }
 197:
            return zuuluu;
 199:
            michal = _closure1_slot1;
            entity = _closure1_slot2;
            entity = entity[report];
            michal = michal.bind(zuuluu)(entity);
            entity = tangon.toHexString;
            entity = entity.bind(tangon)();
            entity = michal.bind(zuuluu)(entity);
            return entity;
        }
    };
    var _closure1_slot7 = tangon;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    oscard = {};
    entity = true;
    oscard['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, oscard);
    entity = 0;
    oscard = option[entity];
    entity = undefined;
    oscard = golfie.bind(entity)(oscard);
    oscard = oscard.CLAN_BRAND_PALETTE_PRESETS;
    var _closure1_slot3 = oscard;
    oscard = 15;
    var _closure1_slot4 = oscard;
    oscard = 7;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'modules/clan/ClanThemeUtils.native.tsx';
    oscard = golfie.bind(option)(oscard);
    zuuluu['getAccessibleTextColor'] = report;
    zuuluu['getAccessibleClanColor'] = tangon;
    michal = function(argFoo, argBar) { // Original name: getClanPrimaryButtonStyles
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            golfie = argFoo;
            entity = null;
            michal = entity != golfie;
            tangon = undefined;
            zuuluu = undefined;
            if(!michal) { _fun00008_ip = 83; continue _fun00007 }
 16:
            oscard = _closure1_slot7;
            report = _closure1_slot0;
            option = _closure1_slot2;
            michal = 5;
            michal = option[michal];
            michal = report.bind(tangon)(michal);
            michal = michal.WCAGContrastRatios;
            report = michal.NonText;
            michal = argBar;
            report = oscard.bind(tangon)(golfie, michal, report);
            michal = entity != report;
            zuuluu = undefined;
            if(!michal) { _fun00008_ip = 83; continue _fun00007 }
 74:
            michal = report.hex;
            zuuluu = michal.bind(report)();
 83:
            if(!(entity == zuuluu)) { _fun00008_ip = 89; continue _fun00007 }
 87:
            return tangon;
 89:
            entity = {};
            entity['backgroundColor'] = zuuluu;
            michal = _closure1_slot5;
            michal = michal.bind(tangon)(zuuluu);
            entity['color'] = michal;
            return entity;
        }
    };
    zuuluu['getClanPrimaryButtonStyles'] = michal;
    return entity;
})();