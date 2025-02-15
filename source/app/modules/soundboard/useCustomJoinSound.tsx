// app/modules/soundboard/useCustomJoinSound.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = golf;
    entity = function(argFoo, argBar) { // Original name: _getCustomJoinSound
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            oscar = argBar;
            entity = argFoo;
            mike = oscar[entity];
            report = null;
            zulu = report == mike;
            tango = undefined;
            if(zulu) { _fun00002_ip = 27; continue _fun00001 }
 21:
            tango = mike.joinSound;
 27:
            mike = _closure1_slot3;
            mike = oscar[mike];
            golf = report == mike;
            oscar = undefined;
            if(golf) { _fun00002_ip = 53; continue _fun00001 }
 47:
            oscar = mike.joinSound;
 53:
            if(!(report != tango)) { _fun00002_ip = 60; continue _fun00001 }
 57:
            oscar = tango;
 60:
            mike = report != oscar;
            entity = undefined;
            if(!mike) { _fun00002_ip = 119; continue _fun00001 }
 69:
            mike = {};
            verify = mike;
            options = oscar;
            oscar = copyDataProperties(verify, options);
            if(!(report == tango)) { _fun00002_ip = 97; continue _fun00001 }
 85:
            tango = _closure1_slot4;
            tango = tango.GLOBAL;
            _fun00002_ip = 107; continue _fun00001;
 97:
            zulu = _closure1_slot4;
            tango = zulu.GUILD;
 107:
            zulu = 'type';
            mike[zulu] = tango;
            entity = mike;
 119:
            return entity;
        }
    };
    var _closure1_slot5 = entity;
    entity = global;
    options = entity.Object;
    report = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = report.bind(options)(zulu, entity, tango);
    verify = 0;
    report = golf[verify];
    tango = argBaz;
    entity = undefined;
    tango = tango.bind(entity)(report);
    var _closure1_slot2 = tango;
    options = 1;
    tango = golf[options];
    tango = oscar.bind(entity)(tango);
    tango = tango.CUSTOM_CALL_SOUND_GLOBAL_GUILD_ID;
    var _closure1_slot3 = tango;
    tango = {};
    tango['GLOBAL'] = verify;
    report = 'GLOBAL';
    tango[verify] = report;
    tango['GUILD'] = options;
    report = 'GUILD';
    tango[options] = report;
    var _closure1_slot4 = tango;
    report = 3;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/soundboard/useCustomJoinSound.tsx';
    report = oscar.bind(golf)(report);
    zulu['CustomSoundType'] = tango;
    tango = function(argFoo) { // Original name: useCustomJoinSound
        mike = argFoo;
        var _closure2_slot0 = mike;
        report = _closure1_slot0;
        tango = _closure1_slot1;
        zulu = 2;
        tango = tango[zulu];
        zulu = undefined;
        tango = report.bind(zulu)(tango);
        zulu = tango.useStateFromStores;
        report = _closure1_slot2;
        mike = new Array(1);
        mike[0] = report;
        entity = function() {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                mike = _closure1_slot2;
                mike = mike.settings;
                report = mike.guilds;
                mike = null;
                oscar = mike == report;
                tango = undefined;
                zulu = undefined;
                if(oscar) { _fun00004_ip = 38; continue _fun00003 }
 32:
                zulu = report.guilds;
 38:
                if(!(mike == zulu)) { _fun00004_ip = 44; continue _fun00003 }
 42:
                zulu = {};
 44:
                mike = _closure1_slot5;
                entity = _closure2_slot0;
                entity = mike.bind(tango)(entity, zulu);
                return entity;
            }
        };
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['useCustomJoinSound'] = tango;
    mike = function(argFoo) { // Original name: getCustomJoinSound
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tango = _closure1_slot5;
            entity = _closure1_slot2;
            entity = entity.settings;
            report = entity.guilds;
            entity = null;
            oscar = entity == report;
            zulu = undefined;
            mike = undefined;
            if(oscar) { _fun00006_ip = 42; continue _fun00005 }
 36:
            mike = report.guilds;
 42:
            if(!(entity == mike)) { _fun00006_ip = 48; continue _fun00005 }
 46:
            mike = {};
 48:
            entity = argFoo;
            entity = tango.bind(zulu)(entity, mike);
            return entity;
        }
    };
    zulu['getCustomJoinSound'] = mike;
    return entity;
})();