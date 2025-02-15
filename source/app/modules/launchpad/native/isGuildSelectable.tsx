// app/modules/launchpad/native/isGuildSelectable.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBaz;
    zulu = argFred;
    report = argPlugh;
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
    var _closure1_slot0 = tango;
    tango = 1;
    tango = report[tango];
    tango = oscar.bind(entity)(tango);
    var _closure1_slot1 = tango;
    tango = 2;
    tango = report[tango];
    tango = oscar.bind(entity)(tango);
    var _closure1_slot2 = tango;
    tango = 3;
    tango = report[tango];
    tango = oscar.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 4;
    report = report[tango];
    tango = argBar;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = 'modules/launchpad/native/isGuildSelectable.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: isGuildSelectable
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            verify = argFoo;
            var _closure2_slot0 = verify;
            mike = _closure1_slot3;
            entity = mike.isMuted;
            entity = entity.bind(mike)(verify);
            entity = !entity;
            if(!entity) { _fun00002_ip = 148; continue _fun00001 }
 33:
            zulu = _closure1_slot2;
            mike = zulu.hasUnread;
            mike = mike.bind(zulu)(verify);
            zulu = !mike;
            mike = !zulu;
            if(!zulu) { _fun00002_ip = 145; continue _fun00001 }
 57:
            zulu = global;
            golf = zulu.Object;
            oscar = golf.keys;
            options = _closure1_slot0;
            zulu = options.getStageInstancesByGuild;
            zulu = zulu.bind(options)(verify);
            zulu = oscar.bind(golf)(zulu);
            oscar = zulu.length;
            zulu = 0;
            zulu = oscar > zulu;
            if(zulu) { _fun00002_ip = 142; continue _fun00001 }
 104:
            oscar = _closure1_slot1;
            report = oscar.getAllApplicationStreams;
            oscar = report.bind(oscar)();
            report = oscar.some;
            tango = function(argFoo) {
                entity = argFoo;
                mike = entity.guildId;
                entity = _closure2_slot0;
                entity = mike === entity;
                return entity;
            };
            tango = report.bind(oscar)(tango);
            tango = !tango;
            zulu = !tango;
 142:
            mike = zulu;
 145:
            entity = mike;
 148:
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();