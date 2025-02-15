// app/modules/guild_settings/integrations/permission/IntegrationPermissionUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = golf;
    tango = function(argFoo, argBar) { // Original name: toPermissionKey
        entity = global;
        entity = entity.HermesInternal;
        report = entity.concat;
        tango = '';
        zulu = argFoo;
        mike = ':';
        entity = argBar;
        entity = report.bind(tango)(zulu, mike, entity);
        return entity;
    };
    var _closure1_slot3 = tango;
    entity = function(argFoo, argBar) { // Original name: commandPermissions
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            offset = argBar;
            entity = {};
            mike = global;
            tango = mike.Object;
            zulu = tango.entries;
            mike = argFoo;
            verify = zulu.bind(tango)(mike);
            mike = verify.length;
            options = 0;
            mike = options < mike;
            oscar = undefined;
            report = 2;
            tango = 1;
            zulu = 0;
            if(!mike) { _fun00002_ip = 110; continue _fun00001 }
 54:
            yankee = verify[zulu];
            mike = _closure1_slot2;
            mike = mike.bind(oscar)(yankee, report);
            yankee = mike[options];
            mike = mike[tango];
            foxtrot = offset.includes;
            romeo = mike.type;
            romeo = foxtrot.bind(offset)(romeo);
            if(!romeo) { _fun00002_ip = 98; continue _fun00001 }
 94:
            entity[yankee] = mike;
 98:
            zulu = zulu + 1;
            mike = verify.length;
            if(zulu < mike) { _fun00002_ip = 54; continue _fun00001 }
 110:
            return entity;
        }
    };
    var _closure1_slot4 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, report);
    entity = 0;
    options = golf[entity];
    report = argBaz;
    entity = undefined;
    report = report.bind(entity)(options);
    var _closure1_slot2 = report;
    report = 3;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/guild_settings/integrations/permission/IntegrationPermissionUtils.tsx';
    report = oscar.bind(golf)(report);
    report = function(argFoo, argBar) { // Original name: commandName
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zulu = argBar;
            tango = _closure1_slot0;
            mike = _closure1_slot1;
            entity = 1;
            mike = mike[entity];
            entity = undefined;
            entity = tango.bind(entity)(mike);
            entity = entity.ApplicationCommandType;
            tango = entity.CHAT;
            mike = argFoo;
            entity = zulu;
            if(!(mike === tango)) { _fun00004_ip = 58; continue _fun00003 }
 50:
            mike = '/';
            entity = mike + zulu;
 58:
            return entity;
        }
    };
    zulu['commandName'] = report;
    report = function(argFoo) { // Original name: commandPermissionChannels
        tango = _closure1_slot4;
        mike = _closure1_slot0;
        zulu = _closure1_slot1;
        entity = 2;
        entity = zulu[entity];
        zulu = undefined;
        entity = mike.bind(zulu)(entity);
        entity = entity.ApplicationCommandPermissionType;
        entity = entity.CHANNEL;
        mike = new Array(1);
        mike[0] = entity;
        entity = argFoo;
        entity = tango.bind(zulu)(entity, mike);
        return entity;
    };
    zulu['commandPermissionChannels'] = report;
    report = function(argFoo) { // Original name: commandPermissionMembersRoles
        tango = _closure1_slot4;
        report = _closure1_slot0;
        oscar = _closure1_slot1;
        entity = 2;
        mike = oscar[entity];
        zulu = undefined;
        mike = report.bind(zulu)(mike);
        mike = mike.ApplicationCommandPermissionType;
        golf = mike.ROLE;
        mike = new Array(2);
        mike[0] = golf;
        entity = oscar[entity];
        entity = report.bind(zulu)(entity);
        entity = entity.ApplicationCommandPermissionType;
        entity = entity.USER;
        mike[1] = entity;
        entity = argFoo;
        entity = tango.bind(zulu)(entity, mike);
        return entity;
    };
    zulu['commandPermissionMembersRoles'] = report;
    zulu['toPermissionKey'] = tango;
    mike = function(argFoo) { // Original name: keyPermissions
        report = argFoo;
        entity = global;
        zulu = entity.Object;
        mike = zulu.fromEntries;
        tango = report.map;
        entity = function(argFoo) {
            mike = argFoo;
            report = _closure1_slot3;
            tango = mike.id;
            zulu = mike.type;
            entity = undefined;
            zulu = report.bind(entity)(tango, zulu);
            entity = new Array(2);
            entity[0] = zulu;
            entity[1] = mike;
            return entity;
        };
        entity = tango.bind(report)(entity);
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    zulu['keyPermissions'] = mike;
    return entity;
})();