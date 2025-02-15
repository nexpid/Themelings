// app/modules/activities/utils/isInviteActive.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBaz;
    zulu = argFred;
    report = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = report;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    tango = report[entity];
    entity = undefined;
    tango = oscar.bind(entity)(tango);
    tango = tango.Millis;
    oscar = tango.HOUR;
    tango = 2;
    oscar = tango * oscar;
    var _closure1_slot2 = oscar;
    report = report[tango];
    tango = argBar;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = 'modules/activities/utils/isInviteActive.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo, argBar, argBaz) { // Original name: isInviteActive
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            zulu = argBar;
            report = null;
            if(!(report != entity)) { _fun00002_ip = 193; continue _fun00001 }
 15:
            mike = zulu.activity;
            mike = report != mike;
            golf = null;
            if(!mike) { _fun00002_ip = 42; continue _fun00001 }
 30:
            mike = zulu.activity;
            golf = mike.party_id;
 42:
            tango = report != golf;
            if(!tango) { _fun00002_ip = 80; continue _fun00001 }
 49:
            mike = entity.party;
            mike = report == mike;
            if(mike) { _fun00002_ip = 77; continue _fun00001 }
 62:
            oscar = entity.party;
            oscar = oscar.id;
            mike = oscar !== golf;
 77:
            tango = mike;
 80:
            options = _closure1_slot0;
            golf = _closure1_slot1;
            oscar = 1;
            golf = golf[oscar];
            oscar = undefined;
            golf = options.bind(oscar)(golf);
            oscar = golf.extractTimestamp;
            zulu = zulu.id;
            zulu = oscar.bind(golf)(zulu);
            mike = _closure1_slot2;
            zulu = zulu + mike;
            mike = global;
            oscar = mike.Date;
            mike = oscar.now;
            mike = mike.bind(oscar)();
            zulu = zulu < mike;
            mike = entity.application_id;
            mike = report != mike;
            if(!mike) { _fun00002_ip = 176; continue _fun00001 }
 163:
            report = entity.application_id;
            entity = argBaz;
            mike = report !== entity;
 176:
            entity = !tango;
            if(tango) { _fun00002_ip = 185; continue _fun00001 }
 182:
            entity = !zulu;
 185:
            if(!entity) { _fun00002_ip = 191; continue _fun00001 }
 188:
            entity = !mike;
 191:
            return entity;
 193:
            entity = false;
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();