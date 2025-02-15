// app/modules/interactions/SkemaUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    zulu = argFred;
    report = argPlugh;
    entity = function(argFoo, argBar) { // Original name: getFirstSkemaFieldError
        _fun71022: for(var _fun71022_ip = 0; ; ) switch(_fun71022_ip) {
 0:
            report = argFoo;
            oscar = argBar;
            mike = _closure1_slot1;
            mike = report[mike];
            golf = null;
            if(!(golf != mike)) { _fun71022_ip = 44; continue _fun71022 }
 23:
            zulu = global;
            tango = zulu.Array;
            zulu = tango.isArray;
            zulu = zulu.bind(tango)(mike);
            if(zulu) { _fun71022_ip = 165; continue _fun71022 }
 44:
            zulu = global;
            tango = zulu.Object;
            zulu = tango.entries;
            backup = zulu.bind(tango)(report);
            zulu = backup.length;
            foxtrot = 0;
            zulu = foxtrot < zulu;
            romeo = 'object';
            report = undefined;
            yankee = 2;
            offset = 1;
            verify = 0;
            if(!zulu) { _fun71022_ip = 144; continue _fun71022 }
 91:
            tango = backup[verify];
            zulu = _closure1_slot0;
            zulu = zulu.bind(report)(tango, yankee);
            tango = zulu[foxtrot];
            zulu = zulu[offset];
            options = _closure1_slot1;
            if(!(tango !== options)) { _fun71022_ip = 132; continue _fun71022 }
 121:
            if(!(golf != zulu)) { _fun71022_ip = 132; continue _fun71022 }
 125:
            options = typeof zulu;
            if(!(romeo !== options)) { _fun71022_ip = 146; continue _fun71022 }
 132:
            verify = verify + 1;
            options = backup.length;
            if(verify < options) { _fun71022_ip = 91; continue _fun71022 }
 144:
            return golf;
 146:
            entity = _closure1_slot2;
            if(!(golf != oscar)) { _fun71022_ip = 157; continue _fun71022 }
 154:
            tango = oscar;
 157:
            entity = entity.bind(report)(zulu, tango);
            return entity;
 165:
            entity = 0;
            entity = mike[entity];
            return entity;
        }
    };
    var _closure1_slot2 = entity;
    entity = global;
    golf = entity.Object;
    oscar = golf.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = oscar.bind(golf)(zulu, entity, tango);
    entity = 0;
    oscar = report[entity];
    tango = argBaz;
    entity = undefined;
    tango = tango.bind(entity)(oscar);
    var _closure1_slot0 = tango;
    tango = '_errors';
    var _closure1_slot1 = tango;
    tango = 1;
    report = report[tango];
    tango = argBar;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = 'modules/interactions/SkemaUtils.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: getFirstSkemaError
        zulu = _closure1_slot2;
        mike = undefined;
        entity = argFoo;
        entity = zulu.bind(mike)(entity, mike);
        return entity;
    };
    zulu['getFirstSkemaError'] = mike;
    return entity;
})();