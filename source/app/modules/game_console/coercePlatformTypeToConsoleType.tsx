// app/modules/game_console/coercePlatformTypeToConsoleType.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = report.bind(entity)(tangon);
    tangon = tangon.GameConsoleTypes;
    var _closure1_slot0 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.PlatformTypes;
    var _closure1_slot1 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/game_console/coercePlatformTypeToConsoleType.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: coercePlatformTypeToConsoleType
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            michal = _closure1_slot1;
            michal = michal.XBOX;
            if(!(michal !== zuuluu)) { _fun00002_ip = 64; continue _fun00001 }
 20:
            michal = _closure1_slot1;
            michal = michal.PLAYSTATION;
            if(!(michal !== zuuluu)) { _fun00002_ip = 52; continue _fun00001 }
 34:
            michal = _closure1_slot1;
            michal = michal.PLAYSTATION_STAGING;
            if(!(michal !== zuuluu)) { _fun00002_ip = 52; continue _fun00001 }
 48:
            michal = null;
            return michal;
 52:
            michal = _closure1_slot0;
            michal = michal.PLAYSTATION;
            return michal;
 64:
            entity = _closure1_slot0;
            entity = entity.XBOX;
            return entity;
        }
    };
    zuuluu['coercePlatformTypeToConsoleType'] = tangon;
    michal = function(argFoo, argBar) { // Original name: coerceConsoleTypeToPlatformType
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            tangon = argFoo;
            report = argBar;
            michal = _closure1_slot0;
            michal = michal.XBOX;
            if(!(michal !== tangon)) { _fun00004_ip = 109; continue _fun00003 }
 25:
            michal = _closure1_slot0;
            michal = michal.PLAYSTATION;
            if(!(michal !== tangon)) { _fun00004_ip = 43; continue _fun00003 }
 39:
            michal = null;
            return michal;
 43:
            tangon = report.some;
            michal = function(argFoo) {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    entity = argFoo;
                    zuuluu = entity.type;
                    michal = entity.twoWayLink;
                    entity = _closure1_slot1;
                    entity = entity.PLAYSTATION_STAGING;
                    entity = zuuluu === entity;
                    if(!entity) { _fun00006_ip = 37; continue _fun00005 }
 34:
                    entity = michal;
 37:
                    return entity;
                }
            };
            michal = tangon.bind(report)(michal);
            tangon = report.some;
            zuuluu = function(argFoo) {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    entity = argFoo;
                    zuuluu = entity.type;
                    michal = entity.twoWayLink;
                    entity = _closure1_slot1;
                    entity = entity.PLAYSTATION;
                    entity = zuuluu === entity;
                    if(!entity) { _fun00008_ip = 37; continue _fun00007 }
 34:
                    entity = michal;
 37:
                    return entity;
                }
            };
            zuuluu = tangon.bind(report)(zuuluu);
            if(zuuluu) { _fun00004_ip = 97; continue _fun00003 }
 82:
            if(!michal) { _fun00004_ip = 97; continue _fun00003 }
 85:
            michal = _closure1_slot1;
            michal = michal.PLAYSTATION_STAGING;
            _fun00004_ip = 107; continue _fun00003;
 97:
            zuuluu = _closure1_slot1;
            michal = zuuluu.PLAYSTATION;
 107:
            return michal;
 109:
            entity = _closure1_slot1;
            entity = entity.XBOX;
            return entity;
        }
    };
    zuuluu['coerceConsoleTypeToPlatformType'] = michal;
    return entity;
})();