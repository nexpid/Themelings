// app/modules/channel/getConnectionsRoles.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    options = argCorge;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = options;
    var _closure1_slot1 = oscar;
    entity = global;
    verify = entity.Object;
    golf = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(verify)(zulu, entity, tango);
    entity = 0;
    golf = oscar[entity];
    tango = argBaz;
    entity = undefined;
    tango = tango.bind(entity)(golf);
    var _closure1_slot2 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    verify = tango.ChannelTypes;
    tango = tango.Permissions;
    offset = verify.GUILD_TEXT;
    golf = new Array(6);
    golf[0] = offset;
    offset = verify.GUILD_VOICE;
    golf[1] = offset;
    offset = verify.GUILD_ANNOUNCEMENT;
    golf[2] = offset;
    offset = verify.GUILD_FORUM;
    golf[3] = offset;
    offset = verify.PUBLIC_THREAD;
    golf[4] = offset;
    verify = verify.PRIVATE_THREAD;
    golf[5] = verify;
    var _closure1_slot3 = golf;
    golf = 2;
    golf = oscar[golf];
    verify = options.bind(entity)(golf);
    options = verify.combine;
    golf = tango.VIEW_CHANNEL;
    tango = tango.SEND_MESSAGES;
    tango = options.bind(verify)(golf, tango);
    var _closure1_slot4 = tango;
    tango = 3;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/channel/getConnectionsRoles.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: getConnectionsRoles
        _fun59582: for(var _fun59582_ip = 0; ; ) switch(_fun59582_ip) {
 0:
            mike = argFoo;
            tango = null;
            if(!(tango != mike)) { _fun59582_ip = 143; continue _fun59582 }
 14:
            golf = _closure1_slot3;
            oscar = golf.includes;
            report = mike.type;
            report = oscar.bind(golf)(report);
            if(!report) { _fun59582_ip = 143; continue _fun59582 }
 39:
            oscar = _closure1_slot2;
            report = oscar.getGuild;
            zulu = mike.guild_id;
            zulu = report.bind(oscar)(zulu);
            var _closure2_slot0 = zulu;
            if(!(tango != zulu)) { _fun59582_ip = 137; continue _fun59582 }
 66:
            zulu = global;
            tango = zulu.Object;
            zulu = tango.values;
            mike = mike.permissionOverwrites;
            tango = zulu.bind(tango)(mike);
            zulu = tango.filter;
            mike = function(argFoo) {
                _fun59583: for(var _fun59583_ip = 0; ; ) switch(_fun59583_ip) {
 0:
                    zulu = argFoo;
                    mike = zulu.type;
                    entity = 0;
                    entity = entity === mike;
                    if(!entity) { _fun59583_ip = 92; continue _fun59583 }
 17:
                    report = _closure1_slot2;
                    tango = report.getRoles;
                    mike = _closure2_slot0;
                    mike = mike.id;
                    tango = tango.bind(report)(mike);
                    mike = zulu.id;
                    report = tango[mike];
                    tango = null;
                    oscar = tango == report;
                    mike = undefined;
                    if(oscar) { _fun59583_ip = 88; continue _fun59583 }
 67:
                    report = report.tags;
                    oscar = tango == report;
                    mike = undefined;
                    if(oscar) { _fun59583_ip = 88; continue _fun59583 }
 82:
                    mike = report.guild_connections;
 88:
                    entity = tango === mike;
 92:
                    if(!entity) { _fun59583_ip = 145; continue _fun59583 }
 95:
                    oscar = _closure1_slot0;
                    report = _closure1_slot1;
                    tango = 2;
                    report = report[tango];
                    tango = undefined;
                    report = oscar.bind(tango)(report);
                    tango = report.hasAny;
                    zulu = zulu.deny;
                    mike = _closure1_slot4;
                    mike = tango.bind(report)(zulu, mike);
                    entity = !mike;
 145:
                    return entity;
                }
            };
            tango = zulu.bind(tango)(mike);
            zulu = tango.map;
            mike = function(argFoo) {
                zulu = _closure1_slot2;
                mike = zulu.getRoles;
                entity = _closure2_slot0;
                entity = entity.id;
                mike = mike.bind(zulu)(entity);
                entity = argFoo;
                entity = entity.id;
                entity = mike[entity];
                return entity;
            };
            zulu = zulu.bind(tango)(mike);
            mike = zulu.filter;
            entity = function(argFoo) {
                mike = null;
                entity = argFoo;
                entity = mike != entity;
                return entity;
            };
            entity = mike.bind(zulu)(entity);
            _fun59582_ip = 141; continue _fun59582;
 137:
            entity = new Array(0);
 141:
            return entity;
 143:
            entity = new Array(0);
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();