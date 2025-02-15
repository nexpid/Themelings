// app/modules/notification_center/useGetOrFetchNotificationCenterItemApplications.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    entity = argBaz;
    var _closure1_slot0 = entity;
    var _closure1_slot1 = oscar;
    tango = global;
    verify = tango.Object;
    options = verify.defineProperty;
    golf = {};
    entity = true;
    golf['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, golf);
    entity = 0;
    options = oscar[entity];
    golf = argCorge;
    entity = undefined;
    golf = golf.bind(entity)(options);
    var _closure1_slot2 = golf;
    options = tango.Set;
    golf = 1;
    tango = oscar[golf];
    tango = report.bind(entity)(tango);
    tango = tango.NotificationCenterLocalItems;
    verify = tango.INCOMING_GAME_FRIEND_REQUESTS;
    tango = new Array(4);
    tango[0] = verify;
    verify = oscar[golf];
    verify = report.bind(entity)(verify);
    verify = verify.NotificationCenterLocalItems;
    verify = verify.INCOMING_GAME_FRIEND_REQUESTS_ACCEPTED;
    tango[1] = verify;
    verify = oscar[golf];
    verify = report.bind(entity)(verify);
    verify = verify.NotificationCenterLocalItems;
    verify = verify.INCOMING_FRIEND_REQUESTS;
    tango[2] = verify;
    golf = oscar[golf];
    golf = report.bind(entity)(golf);
    golf = golf.NotificationCenterLocalItems;
    golf = golf.INCOMING_FRIEND_REQUESTS_ACCEPTED;
    tango[3] = golf;
    golf = options.prototype;
    golf = Object.create(golf, {constructor: {value: options}});
    foxtrot = golf;
    romeo = tango;
    tango = new foxtrot[options](romeo, yankee);
    tango = tango instanceof Object ? tango : golf;
    var _closure1_slot3 = tango;
    tango = 3;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/notification_center/useGetOrFetchNotificationCenterItemApplications.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: useGetOrFetchNotificationCenterItemsApplications
        oscar = argFoo;
        var _closure2_slot0 = oscar;
        report = _closure1_slot2;
        tango = report.useMemo;
        zulu = new Array(1);
        zulu[0] = oscar;
        mike = function() {
            entity = global;
            entity = entity.Set;
            zulu = entity.prototype;
            zulu = Object.create(zulu, {constructor: {value: entity}});
            oscar = zulu;
            entity = new oscar[entity](report);
            entity = entity instanceof Object ? entity : zulu;
            var _closure3_slot0 = entity;
            entity = new Array(0);
            var _closure3_slot1 = entity;
            tango = _closure2_slot0;
            zulu = tango.forEach;
            mike = function(argFoo) {
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    entity = argFoo;
                    zulu = entity.applicationId;
                    tango = entity.type;
                    mike = _closure1_slot3;
                    entity = mike.has;
                    entity = entity.bind(mike)(tango);
                    if(!entity) { _fun00002_ip = 93; continue _fun00001 }
 33:
                    entity = null;
                    entity = entity == zulu;
                    if(entity) { _fun00002_ip = 59; continue _fun00001 }
 42:
                    tango = _closure3_slot0;
                    mike = tango.has;
                    entity = mike.bind(tango)(zulu);
 59:
                    if(entity) { _fun00002_ip = 93; continue _fun00001 }
 62:
                    tango = _closure3_slot0;
                    mike = tango.add;
                    mike = mike.bind(tango)(zulu);
                    mike = _closure3_slot1;
                    entity = mike.push;
                    entity = entity.bind(mike)(zulu);
 93:
                    entity = undefined;
                    return entity;
                }
            };
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        zulu = tango.bind(report)(mike, zulu);
        tango = _closure1_slot0;
        mike = _closure1_slot1;
        entity = 2;
        entity = mike[entity];
        mike = undefined;
        entity = tango.bind(mike)(entity);
        entity = entity.bind(mike)(zulu);
        return entity;
    };
    zulu['useGetOrFetchNotificationCenterItemsApplications'] = mike;
    return entity;
})();