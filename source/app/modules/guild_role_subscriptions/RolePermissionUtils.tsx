// app/modules/guild_role_subscriptions/RolePermissionUtils.tsx
export default (function(argFoo, argBar, _, argCorge, __, argFred, argPlugh) {
    oscar = argBar;
    zulu = argFred;
    golf = argPlugh;
    entity = argCorge;
    var _closure1_slot0 = entity;
    var _closure1_slot1 = golf;
    tango = function(argFoo, argBar) { // Original name: isChannelAccessDeniedBy
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            oscar = argFoo;
            report = argBar;
            entity = null;
            entity = entity != report;
            if(!entity) { _fun00002_ip = 142; continue _fun00001 }
 18:
            zulu = _closure1_slot0;
            mike = _closure1_slot1;
            verify = 1;
            mike = mike[verify];
            options = undefined;
            offset = zulu.bind(options)(mike);
            golf = offset.has;
            zulu = report.deny;
            mike = _closure1_slot2;
            mike = mike.VIEW_CHANNEL;
            mike = golf.bind(offset)(zulu, mike);
            zulu = !mike;
            mike = !zulu;
            if(!zulu) { _fun00002_ip = 139; continue _fun00001 }
 79:
            zulu = oscar.isGuildVocal;
            zulu = zulu.bind(oscar)();
            if(!zulu) { _fun00002_ip = 136; continue _fun00001 }
 92:
            golf = _closure1_slot0;
            oscar = _closure1_slot1;
            oscar = oscar[verify];
            golf = golf.bind(options)(oscar);
            oscar = golf.has;
            report = report.deny;
            tango = _closure1_slot2;
            tango = tango.CONNECT;
            zulu = oscar.bind(golf)(report, tango);
 136:
            mike = zulu;
 139:
            entity = mike;
 142:
            return entity;
        }
    };
    var _closure1_slot3 = tango;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, report);
    entity = 0;
    report = golf[entity];
    entity = undefined;
    report = oscar.bind(entity)(report);
    report = report.Permissions;
    var _closure1_slot2 = report;
    report = 2;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/guild_role_subscriptions/RolePermissionUtils.tsx';
    report = oscar.bind(golf)(report);
    report = function(argFoo) { // Original name: isAllChannelsRole
        tango = _closure1_slot0;
        zulu = _closure1_slot1;
        mike = 1;
        zulu = zulu[mike];
        mike = undefined;
        tango = tango.bind(mike)(zulu);
        zulu = tango.has;
        mike = argFoo;
        mike = mike.permissions;
        entity = _closure1_slot2;
        entity = entity.VIEW_CHANNEL;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['isAllChannelsRole'] = report;
    zulu['isChannelAccessDeniedBy'] = tango;
    mike = function(argFoo, argBar) { // Original name: isChannelAccessGrantedBy
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            golf = argFoo;
            oscar = argBar;
            entity = null;
            entity = entity != oscar;
            if(!entity) { _fun00004_ip = 167; continue _fun00003 }
 18:
            mike = _closure1_slot3;
            verify = undefined;
            mike = mike.bind(verify)(golf, oscar);
            mike = !mike;
            if(!mike) { _fun00004_ip = 164; continue _fun00003 }
 42:
            tango = _closure1_slot0;
            zulu = _closure1_slot1;
            offset = 1;
            zulu = zulu[offset];
            yankee = tango.bind(verify)(zulu);
            options = yankee.has;
            tango = oscar.allow;
            zulu = _closure1_slot2;
            zulu = zulu.VIEW_CHANNEL;
            zulu = options.bind(yankee)(tango, zulu);
            tango = !zulu;
            zulu = !tango;
            if(tango) { _fun00004_ip = 161; continue _fun00003 }
 98:
            tango = golf.isGuildVocal;
            tango = tango.bind(golf)();
            tango = !tango;
            if(tango) { _fun00004_ip = 158; continue _fun00003 }
 114:
            options = _closure1_slot0;
            golf = _closure1_slot1;
            golf = golf[offset];
            options = options.bind(verify)(golf);
            golf = options.has;
            oscar = oscar.allow;
            report = _closure1_slot2;
            report = report.CONNECT;
            tango = golf.bind(options)(oscar, report);
 158:
            zulu = tango;
 161:
            mike = zulu;
 164:
            entity = mike;
 167:
            return entity;
        }
    };
    zulu['isChannelAccessGrantedBy'] = mike;
    return entity;
})();