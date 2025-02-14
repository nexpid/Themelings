// app/modules/game_console/coercePlatformTypeToConsoleType.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = report.bind(entity)(tango);
    tango = tango.GameConsoleTypes;
    var _closure1_slot0 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.PlatformTypes;
    var _closure1_slot1 = tango;
    tango = 2;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/game_console/coercePlatformTypeToConsoleType.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) { // Original name: coercePlatformTypeToConsoleType
        _fun103169: for(var _fun103169_ip = 0; ; ) switch(_fun103169_ip) {
 0:
            zulu = argFoo;
            mike = _closure1_slot1;
            mike = mike.XBOX;
            if(!(mike !== zulu)) { _fun103169_ip = 64; continue _fun103169 }
 20:
            mike = _closure1_slot1;
            mike = mike.PLAYSTATION;
            if(!(mike !== zulu)) { _fun103169_ip = 52; continue _fun103169 }
 34:
            mike = _closure1_slot1;
            mike = mike.PLAYSTATION_STAGING;
            if(!(mike !== zulu)) { _fun103169_ip = 52; continue _fun103169 }
 48:
            mike = null;
            return mike;
 52:
            mike = _closure1_slot0;
            mike = mike.PLAYSTATION;
            return mike;
 64:
            entity = _closure1_slot0;
            entity = entity.XBOX;
            return entity;
        }
    };
    zulu['coercePlatformTypeToConsoleType'] = tango;
    mike = function(argFoo, argBar) { // Original name: coerceConsoleTypeToPlatformType
        _fun103170: for(var _fun103170_ip = 0; ; ) switch(_fun103170_ip) {
 0:
            tango = argFoo;
            report = argBar;
            mike = _closure1_slot0;
            mike = mike.XBOX;
            if(!(mike !== tango)) { _fun103170_ip = 109; continue _fun103170 }
 25:
            mike = _closure1_slot0;
            mike = mike.PLAYSTATION;
            if(!(mike !== tango)) { _fun103170_ip = 43; continue _fun103170 }
 39:
            mike = null;
            return mike;
 43:
            tango = report.some;
            mike = function(argFoo) {
                _fun103171: for(var _fun103171_ip = 0; ; ) switch(_fun103171_ip) {
 0:
                    entity = argFoo;
                    zulu = entity.type;
                    mike = entity.twoWayLink;
                    entity = _closure1_slot1;
                    entity = entity.PLAYSTATION_STAGING;
                    entity = zulu === entity;
                    if(!entity) { _fun103171_ip = 37; continue _fun103171 }
 34:
                    entity = mike;
 37:
                    return entity;
                }
            };
            mike = tango.bind(report)(mike);
            tango = report.some;
            zulu = function(argFoo) {
                _fun103172: for(var _fun103172_ip = 0; ; ) switch(_fun103172_ip) {
 0:
                    entity = argFoo;
                    zulu = entity.type;
                    mike = entity.twoWayLink;
                    entity = _closure1_slot1;
                    entity = entity.PLAYSTATION;
                    entity = zulu === entity;
                    if(!entity) { _fun103172_ip = 37; continue _fun103172 }
 34:
                    entity = mike;
 37:
                    return entity;
                }
            };
            zulu = tango.bind(report)(zulu);
            if(zulu) { _fun103170_ip = 97; continue _fun103170 }
 82:
            if(!mike) { _fun103170_ip = 97; continue _fun103170 }
 85:
            mike = _closure1_slot1;
            mike = mike.PLAYSTATION_STAGING;
            _fun103170_ip = 107; continue _fun103170;
 97:
            zulu = _closure1_slot1;
            mike = zulu.PLAYSTATION;
 107:
            return mike;
 109:
            entity = _closure1_slot1;
            entity = entity.XBOX;
            return entity;
        }
    };
    zulu['coerceConsoleTypeToPlatformType'] = mike;
    return entity;
})();