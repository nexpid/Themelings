// app/modules/guild_role_subscriptions/useChannelRoleSubscriptionStatus.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    options = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = golf;
    mike = function(argFoo) { // Original name: getChannelRoleSubscriptionStatus
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zulu = arguments[1];
            tango = arguments[2];
            golf = arguments[3];
            entity = undefined;
            if(!(zulu === entity)) { _fun00002_ip = 22; continue _fun00001 }
 15:
            zulu = _closure1_slot3;
 22:
            if(!(tango === entity)) { _fun00002_ip = 33; continue _fun00001 }
 26:
            tango = _closure1_slot2;
 33:
            if(!(golf === entity)) { _fun00002_ip = 44; continue _fun00001 }
 37:
            golf = _closure1_slot4;
 44:
            mike = zulu.getChannel;
            entity = argFoo;
            oscar = mike.bind(zulu)(entity);
            entity = null;
            if(!(entity != oscar)) { _fun00002_ip = 76; continue _fun00001 }
 63:
            mike = oscar.isRoleSubscriptionTemplatePreviewChannel;
            mike = mike.bind(oscar)();
            if(mike) { _fun00002_ip = 191; continue _fun00001 }
 76:
            if(!(entity != oscar)) { _fun00002_ip = 105; continue _fun00001 }
 80:
            zulu = tango.isChannelGated;
            mike = oscar.guild_id;
            entity = oscar.id;
            entity = zulu.bind(tango)(mike, entity);
            if(entity) { _fun00002_ip = 114; continue _fun00001 }
 105:
            entity = _closure1_slot6;
            _fun00002_ip = 189; continue _fun00001;
 114:
            mike = {};
            zulu = true;
            mike['isSubscriptionGated'] = zulu;
            zulu = oscar.isGuildVocal;
            zulu = zulu.bind(oscar)();
            report = golf.can;
            tango = _closure1_slot5;
            if(zulu) { _fun00002_ip = 166; continue _fun00001 }
 149:
            zulu = tango.VIEW_CHANNEL;
            zulu = report.bind(golf)(zulu, oscar);
            zulu = !zulu;
            _fun00002_ip = 181; continue _fun00001;
 166:
            tango = tango.CONNECT;
            tango = report.bind(golf)(tango, oscar);
            zulu = !tango;
 181:
            mike['needSubscriptionToAccess'] = zulu;
            entity = mike;
 189:
            _fun00002_ip = 201; continue _fun00001;
 191:
            entity = {'isSubscriptionGated': true, 'needSubscriptionToAccess': true};
 201:
            return entity;
        }
    };
    var _closure1_slot7 = mike;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, report);
    entity = 0;
    report = golf[entity];
    entity = undefined;
    report = options.bind(entity)(report);
    var _closure1_slot2 = report;
    report = 1;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 2;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 3;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.Permissions;
    var _closure1_slot5 = report;
    report = {'needSubscriptionToAccess': false, 'isSubscriptionGated': false};
    var _closure1_slot6 = report;
    report = 5;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/guild_role_subscriptions/useChannelRoleSubscriptionStatus.tsx';
    report = oscar.bind(golf)(report);
    tango = function(argFoo) { // Original name: useChannelRoleSubscriptionStatus
        oscar = argFoo;
        var _closure2_slot0 = oscar;
        report = _closure1_slot0;
        tango = _closure1_slot1;
        zulu = 4;
        tango = tango[zulu];
        zulu = undefined;
        report = report.bind(zulu)(tango);
        tango = report.useStateFromStoresObject;
        golf = _closure1_slot3;
        zulu = new Array(3);
        zulu[0] = golf;
        golf = _closure1_slot2;
        zulu[1] = golf;
        mike = _closure1_slot4;
        zulu[2] = mike;
        mike = new Array(1);
        mike[0] = oscar;
        entity = function() {
            oscar = _closure1_slot7;
            offset = _closure2_slot0;
            verify = _closure1_slot3;
            options = _closure1_slot2;
            golf = _closure1_slot4;
            yankee = undefined;
            entity = yankee[oscar](offset, verify, options, golf, oscar);
            return entity;
        };
        entity = tango.bind(report)(zulu, entity, mike);
        return entity;
    };
    zulu['default'] = tango;
    zulu['getChannelRoleSubscriptionStatus'] = mike;
    return entity;
})();