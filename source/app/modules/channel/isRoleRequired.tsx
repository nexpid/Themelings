// app/modules/channel/isRoleRequired.tsx
export default (function(argFoo, argBar, _, argCorge, __, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    entity = argCorge;
    var _closure1_slot0 = entity;
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
    tango = tango.GUILD_NON_CATEGORY_CHANNEL_TYPES;
    var _closure1_slot2 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.Permissions;
    var _closure1_slot3 = tango;
    tango = 4;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/channel/isRoleRequired.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: isRoleRequired
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zulu = argFoo;
            entity = null;
            if(!(entity != zulu)) { _fun00002_ip = 193; continue _fun00001 }
 12:
            oscar = zulu.type;
            mike = zulu.guild_id;
            if(!(entity != mike)) { _fun00002_ip = 189; continue _fun00001 }
 29:
            report = _closure1_slot2;
            tango = report.has;
            tango = tango.bind(report)(oscar);
            if(!tango) { _fun00002_ip = 189; continue _fun00001 }
 52:
            tango = zulu.isGuildVocal;
            tango = tango.bind(zulu)();
            if(!tango) { _fun00002_ip = 116; continue _fun00001 }
 65:
            oscar = _closure1_slot0;
            report = _closure1_slot1;
            tango = 2;
            report = report[tango];
            tango = undefined;
            oscar = oscar.bind(tango)(report);
            report = oscar.canEveryoneRole;
            tango = _closure1_slot3;
            tango = tango.CONNECT;
            tango = report.bind(oscar)(tango, zulu);
            if(tango) { _fun00002_ip = 116; continue _fun00001 }
 112:
            tango = true;
            return tango;
 116:
            tango = zulu.permissionOverwrites;
            zulu = zulu.guild_id;
            zulu = tango[zulu];
            entity = entity != zulu;
            if(!entity) { _fun00002_ip = 187; continue _fun00001 }
 138:
            oscar = _closure1_slot0;
            report = _closure1_slot1;
            tango = 3;
            report = report[tango];
            tango = undefined;
            report = oscar.bind(tango)(report);
            tango = report.has;
            zulu = zulu.deny;
            mike = _closure1_slot3;
            mike = mike.VIEW_CHANNEL;
            entity = tango.bind(report)(zulu, mike);
 187:
            return entity;
 189:
            entity = false;
            return entity;
 193:
            entity = false;
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();