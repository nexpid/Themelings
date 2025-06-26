// app/modules/premium/enhanced_role_colors/native/EnhancedRoleColorUtils.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    golfie = argBar;
    verify = argBaz;
    zuuluu = argFre;
    option = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = verify;
    var _closure1_slot2 = option;
    entity = function(argFoo) { // Original name: processColorStringsInternal
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            michal = _closure1_slot6;
            tangon = michal.theme;
            michal = _closure1_slot7;
            michal = michal.LIGHT;
            if(!(tangon === michal)) { _fun00002_ip = 165; continue _fun00001 }
 32:
            report = undefined;
            if(!(report !== zuuluu)) { _fun00002_ip = 165; continue _fun00001 }
 41:
            oscard = _closure1_slot1;
            golfie = _closure1_slot2;
            michal = 5;
            tangon = golfie[michal];
            tangon = oscard.bind(report)(tangon);
            option = tangon.bind(report)(zuuluu);
            tangon = option.hsl;
            verify = tangon.bind(option)();
            option = _closure1_slot3;
            tangon = 3;
            offset = option.bind(report)(verify, tangon);
            tangon = 0;
            verify = offset[tangon];
            tangon = 1;
            option = offset[tangon];
            tangon = 2;
            offset = offset[tangon];
            tangon = _closure1_slot5;
            michal = golfie[michal];
            golfie = oscard.bind(report)(michal);
            oscard = golfie.hsl;
            michal = 0.85;
            michal = michal * offset;
            oscard = oscard.bind(golfie)(verify, option, michal);
            michal = oscard.hex;
            michal = michal.bind(oscard)();
            michal = tangon.bind(report)(michal);
            return michal;
 165:
            michal = _closure1_slot5;
            entity = undefined;
            entity = michal.bind(entity)(zuuluu);
            return entity;
        }
    };
    var _closure1_slot8 = entity;
    report = function(argFoo) { // Original name: processColorStrings
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            michal = argFoo;
            entity = null;
            if(!(entity == michal)) { _fun00004_ip = 13; continue _fun00003 }
 9:
            entity = undefined;
            return entity;
 13:
            entity = {};
            tangon = _closure1_slot8;
            report = michal.primaryColor;
            zuuluu = undefined;
            report = tangon.bind(zuuluu)(report);
            entity['primaryColor'] = report;
            report = michal.secondaryColor;
            report = tangon.bind(zuuluu)(report);
            entity['secondaryColor'] = report;
            michal = michal.tertiaryColor;
            michal = tangon.bind(zuuluu)(michal);
            entity['tertiaryColor'] = michal;
            return entity;
        }
    };
    var _closure1_slot9 = report;
    tangon = function(argFoo) { // Original name: processColorStringsArray
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            zuuluu = argFoo;
            entity = null;
            if(!(entity != zuuluu)) { _fun00006_ip = 95; continue _fun00005 }
 9:
            michal = _closure1_slot9;
            report = undefined;
            michal = michal.bind(report)(zuuluu);
            tangon = michal.primaryColor;
            zuuluu = new Array(3);
            zuuluu[0] = tangon;
            tangon = michal.secondaryColor;
            zuuluu[1] = tangon;
            michal = michal.tertiaryColor;
            zuuluu[2] = michal;
            michal = zuuluu.filter;
            tangon = _closure1_slot0;
            oscard = _closure1_slot2;
            entity = 6;
            entity = oscard[entity];
            entity = tangon.bind(report)(entity);
            entity = entity.isNotNullish;
            entity = michal.bind(zuuluu)(entity);
            return entity;
 95:
            entity = new Array(0);
            return entity;
        }
    };
    var _closure1_slot10 = tangon;
    entity = global;
    yankee = entity.Object;
    offset = yankee.defineProperty;
    oscard = {};
    entity = true;
    oscard['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(yankee)(zuuluu, entity, oscard);
    entity = 0;
    oscard = option[entity];
    entity = undefined;
    oscard = verify.bind(entity)(oscard);
    var _closure1_slot3 = oscard;
    oscard = 1;
    offset = option[oscard];
    oscard = argCor;
    oscard = oscard.bind(entity)(offset);
    var _closure1_slot4 = oscard;
    oscard = 2;
    oscard = option[oscard];
    oscard = golfie.bind(entity)(oscard);
    oscard = oscard.processColor;
    var _closure1_slot5 = oscard;
    oscard = 3;
    oscard = option[oscard];
    oscard = verify.bind(entity)(oscard);
    var _closure1_slot6 = oscard;
    oscard = 4;
    oscard = option[oscard];
    oscard = golfie.bind(entity)(oscard);
    oscard = oscard.ThemeTypes;
    var _closure1_slot7 = oscard;
    oscard = 8;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'modules/premium/enhanced_role_colors/native/EnhancedRoleColorUtils.tsx';
    oscard = golfie.bind(option)(oscard);
    zuuluu['processColorStrings'] = report;
    zuuluu['processColorStringsArray'] = tangon;
    tangon = function(argFoo) { // Original name: useProcessColorStringsArray
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            oscard = argFoo;
            var _closure2_slot0 = oscard;
            tangon = _closure1_slot4;
            zuuluu = tangon.useMemo;
            golfie = null;
            michal = golfie == oscard;
            option = undefined;
            if(michal) { _fun00008_ip = 38; continue _fun00007 }
 32:
            option = oscard.primaryColor;
 38:
            michal = new Array(3);
            michal[0] = option;
            verify = golfie == oscard;
            option = undefined;
            if(verify) { _fun00008_ip = 61; continue _fun00007 }
 55:
            option = oscard.secondaryColor;
 61:
            michal[1] = option;
            golfie = golfie == oscard;
            report = undefined;
            if(golfie) { _fun00008_ip = 80; continue _fun00007 }
 74:
            report = oscard.tertiaryColor;
 80:
            michal[2] = report;
            entity = function() {
                zuuluu = _closure1_slot10;
                michal = _closure2_slot0;
                entity = undefined;
                entity = zuuluu.bind(entity)(michal);
                return entity;
            };
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        }
    };
    zuuluu['useProcessColorStringsArray'] = tangon;
    tangon = function(argFoo, argBar, argBaz) { // Original name: isNativeMessageEligibleForEnhancedRoleColors
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 7;
            michal = michal[entity];
            entity = undefined;
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.getHasEnhancedRoleColors;
            michal = argFoo;
            entity = argBar;
            entity = zuuluu.bind(tangon)(michal, entity);
            if(!entity) { _fun00010_ip = 57; continue _fun00009 }
 46:
            zuuluu = 'hidden';
            michal = argBaz;
            entity = zuuluu !== michal;
 57:
            return entity;
        }
    };
    zuuluu['isNativeMessageEligibleForEnhancedRoleColors'] = tangon;
    michal = function(argFoo, argBar, argBaz, argCor) { // Original name: useIsRoleStyleAndRoleColorsEligibleForERC
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            michal = _closure1_slot1;
            zuuluu = _closure1_slot2;
            entity = 7;
            entity = zuuluu[entity];
            tangon = undefined;
            zuuluu = michal.bind(tangon)(entity);
            michal = argFoo;
            entity = argBar;
            entity = zuuluu.bind(tangon)(michal, entity);
            if(!entity) { _fun00012_ip = 51; continue _fun00011 }
 40:
            zuuluu = 'hidden';
            michal = argBaz;
            entity = zuuluu !== michal;
 51:
            if(!entity) { _fun00012_ip = 69; continue _fun00011 }
 54:
            michal = argCor;
            zuuluu = michal.length;
            michal = 1;
            entity = zuuluu > michal;
 69:
            return entity;
        }
    };
    zuuluu['useIsRoleStyleAndRoleColorsEligibleForERC'] = michal;
    return entity;
})();