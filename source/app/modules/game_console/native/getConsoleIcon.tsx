// app/modules/game_console/native/getConsoleIcon.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    verify = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = verify;
    var _closure1_slot1 = oscar;
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
    options = tango.PlatformTypes;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.VoicePlatforms;
    var _closure1_slot2 = tango;
    tango = {};
    offset = options.XBOX;
    golf = 2;
    golf = oscar[golf];
    golf = verify.bind(entity)(golf);
    tango[offset] = golf;
    yankee = options.PLAYSTATION;
    golf = 3;
    offset = oscar[golf];
    offset = verify.bind(entity)(offset);
    tango[yankee] = offset;
    options = options.PLAYSTATION_STAGING;
    golf = oscar[golf];
    golf = verify.bind(entity)(golf);
    tango[options] = golf;
    var _closure1_slot3 = tango;
    tango = 4;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/game_console/native/getConsoleIcon.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) { // Original name: getConsoleIcon
        mike = _closure1_slot3;
        entity = argFoo;
        entity = mike[entity];
        return entity;
    };
    zulu['default'] = tango;
    mike = function(argFoo) { // Original name: getConsoleIconForVoicePlatform
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tango = argFoo;
            entity = _closure1_slot2;
            entity = entity.XBOX;
            if(!(tango !== entity)) { _fun00002_ip = 60; continue _fun00001 }
 20:
            entity = _closure1_slot2;
            zulu = entity.PLAYSTATION;
            entity = null;
            if(!(tango === zulu)) { _fun00002_ip = 58; continue _fun00001 }
 36:
            report = _closure1_slot0;
            tango = _closure1_slot1;
            zulu = 3;
            tango = tango[zulu];
            zulu = undefined;
            entity = report.bind(zulu)(tango);
 58:
            _fun00002_ip = 82; continue _fun00001;
 60:
            tango = _closure1_slot0;
            zulu = _closure1_slot1;
            mike = 2;
            zulu = zulu[mike];
            mike = undefined;
            entity = tango.bind(mike)(zulu);
 82:
            return entity;
        }
    };
    zulu['getConsoleIconForVoicePlatform'] = mike;
    return entity;
})();