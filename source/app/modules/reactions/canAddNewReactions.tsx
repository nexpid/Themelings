// app/modules/reactions/canAddNewReactions.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot0 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot1 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.Permissions;
    var _closure1_slot2 = tango;
    tango = 3;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/reactions/canAddNewReactions.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) {
        _fun72700: for(var _fun72700_ip = 0; ; ) switch(_fun72700_ip) {
 0:
            zulu = argFoo;
            entity = zulu.getGuildId;
            report = entity.bind(zulu)();
            entity = null;
            entity = entity != report;
            if(!entity) { _fun72700_ip = 40; continue _fun72700 }
 22:
            tango = _closure1_slot0;
            mike = tango.canChatInGuild;
            entity = mike.bind(tango)(report);
 40:
            if(!entity) { _fun72700_ip = 72; continue _fun72700 }
 43:
            report = _closure1_slot1;
            tango = report.can;
            mike = _closure1_slot2;
            mike = mike.ADD_REACTIONS;
            entity = tango.bind(report)(mike, zulu);
 72:
            if(entity) { _fun72700_ip = 85; continue _fun72700 }
 75:
            mike = zulu.isPrivate;
            entity = mike.bind(zulu)();
 85:
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();