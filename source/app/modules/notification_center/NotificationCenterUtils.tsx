// app/modules/notification_center/NotificationCenterUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    tango = argPlugh;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = tango;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    oscar = {};
    entity = true;
    oscar['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, oscar);
    entity = 4;
    tango = tango[entity];
    entity = undefined;
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/notification_center/NotificationCenterUtils.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) {
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tango = arguments[1];
            zulu = undefined;
            if(!(tango === zulu)) { _fun00002_ip = 11; continue _fun00001 }
 9:
            tango = true;
 11:
            mike = _closure1_slot1;
            entity = _closure1_slot2;
            golf = 0;
            entity = entity[golf];
            mike = mike.bind(zulu)(entity);
            entity = {};
            oscar = argFoo;
            entity['since'] = oscar;
            oscar = _closure1_slot0;
            report = _closure1_slot2;
            report = report[golf];
            report = oscar.bind(zulu)(report);
            if(tango) { _fun00002_ip = 71; continue _fun00001 }
 63:
            tango = report.getFullFormatter;
            _fun00002_ip = 77; continue _fun00001;
 71:
            tango = report.getAbbreviatedFormatter;
 77:
            entity['getFormatter'] = tango;
            entity = mike.bind(zulu)(entity);
            return entity;
        }
    };
    zulu['getRelativeTimestamp'] = tango;
    tango = function(argFoo, argBar) {
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zulu = argFoo;
            oscar = argBar;
            entity = zulu.acked;
            if(entity) { _fun00004_ip = 99; continue _fun00003 }
 15:
            report = _closure1_slot0;
            golf = _closure1_slot2;
            mike = 1;
            mike = golf[mike];
            golf = undefined;
            mike = report.bind(golf)(mike);
            mike = mike.NOTIFICATION_CENTER_ACKED_BEFORE_ID_UNSET;
            mike = oscar !== mike;
            if(!mike) { _fun00004_ip = 96; continue _fun00003 }
 53:
            report = _closure1_slot1;
            options = _closure1_slot2;
            tango = 2;
            tango = options[tango];
            report = report.bind(golf)(tango);
            tango = report.compare;
            zulu = zulu.id;
            tango = tango.bind(report)(oscar, zulu);
            zulu = 0;
            mike = tango >= zulu;
 96:
            entity = mike;
 99:
            return entity;
        }
    };
    zulu['isRemoteAcked'] = tango;
    tango = function(argFoo, argBar, argBaz) { // Original name: incomingFriendRequestLocalItem
        golf = argFoo;
        mike = _closure1_slot1;
        oscar = _closure1_slot2;
        entity = 2;
        entity = oscar[entity];
        report = undefined;
        options = mike.bind(report)(entity);
        mike = options.fromTimestamp;
        tango = global;
        offset = tango.Date;
        entity = offset.prototype;
        verify = Object.create(entity, {constructor: {value: offset}});
        backup = argBar;
        kilo = verify;
        entity = new kilo[offset](backup, foxtrot);
        verify = entity instanceof Object ? entity : verify;
        entity = verify.getTime;
        entity = entity.bind(verify)();
        mike = mike.bind(options)(entity);
        entity = {'acked': false, 'forceUnacked': true, 'other_user': null, 'kind': 'notification-center-item'};
        entity['other_user'] = golf;
        yankee = golf.id;
        options = tango.HermesInternal;
        offset = options.concat;
        verify = 'incoming_friend_requests_';
        options = '_';
        options = offset.bind(verify)(yankee, options, mike);
        entity['local_id'] = options;
        options = golf.id;
        tango = tango.HermesInternal;
        golf = tango.concat;
        tango = 'https://discord.com/users/';
        tango = golf.bind(tango)(options);
        entity['deeplink'] = tango;
        tango = _closure1_slot0;
        zulu = 3;
        zulu = oscar[zulu];
        zulu = tango.bind(report)(zulu);
        zulu = zulu.NotificationCenterLocalItems;
        zulu = zulu.INCOMING_FRIEND_REQUESTS;
        entity['type'] = zulu;
        entity['id'] = mike;
        mike = argBaz;
        entity['applicationId'] = mike;
        return entity;
    };
    zulu['incomingFriendRequestLocalItem'] = tango;
    tango = function(argFoo, argBar, argBaz) { // Original name: incomingGameFriendRequestLocalItem
        golf = argFoo;
        mike = _closure1_slot1;
        oscar = _closure1_slot2;
        entity = 2;
        entity = oscar[entity];
        report = undefined;
        options = mike.bind(report)(entity);
        mike = options.fromTimestamp;
        tango = global;
        offset = tango.Date;
        entity = offset.prototype;
        verify = Object.create(entity, {constructor: {value: offset}});
        backup = argBar;
        kilo = verify;
        entity = new kilo[offset](backup, foxtrot);
        verify = entity instanceof Object ? entity : verify;
        entity = verify.getTime;
        entity = entity.bind(verify)();
        mike = mike.bind(options)(entity);
        entity = {'acked': false, 'forceUnacked': true, 'other_user': null, 'kind': 'notification-center-item'};
        entity['other_user'] = golf;
        yankee = golf.id;
        options = tango.HermesInternal;
        offset = options.concat;
        verify = 'incoming_game_friend_requests_';
        options = '_';
        options = offset.bind(verify)(yankee, options, mike);
        entity['local_id'] = options;
        options = golf.id;
        tango = tango.HermesInternal;
        golf = tango.concat;
        tango = 'https://discord.com/users/';
        tango = golf.bind(tango)(options);
        entity['deeplink'] = tango;
        tango = _closure1_slot0;
        zulu = 3;
        zulu = oscar[zulu];
        zulu = tango.bind(report)(zulu);
        zulu = zulu.NotificationCenterLocalItems;
        zulu = zulu.INCOMING_GAME_FRIEND_REQUESTS;
        entity['type'] = zulu;
        entity['id'] = mike;
        mike = argBaz;
        entity['applicationId'] = mike;
        return entity;
    };
    zulu['incomingGameFriendRequestLocalItem'] = tango;
    tango = function(argFoo) { // Original name: mobileNativeUpdateAvailableLocalItem
        mike = argFoo;
        entity = {'acked': false, 'enableBadge': true, 'id': null, 'kind': 'notification-center-item'};
        golf = _closure1_slot1;
        oscar = _closure1_slot2;
        tango = 2;
        tango = oscar[tango];
        report = undefined;
        verify = golf.bind(report)(tango);
        options = verify.fromTimestamp;
        tango = global;
        golf = tango.Date;
        offset = golf.prototype;
        offset = Object.create(offset, {constructor: {value: golf}});
        romeo = offset;
        golf = new romeo[golf](yankee);
        offset = golf instanceof Object ? golf : offset;
        golf = offset.getTime;
        golf = golf.bind(offset)();
        golf = options.bind(verify)(golf);
        entity['id'] = golf;
        options = mike.build;
        tango = tango.HermesInternal;
        golf = tango.concat;
        tango = 'mobile_update_available_';
        tango = golf.bind(tango)(options);
        entity['local_id'] = tango;
        tango = _closure1_slot0;
        zulu = 3;
        zulu = oscar[zulu];
        zulu = tango.bind(report)(zulu);
        zulu = zulu.NotificationCenterLocalItems;
        zulu = zulu.MOBILE_NATIVE_UPDATE_AVAILABLE;
        entity['type'] = zulu;
        mike = mike.urls;
        zulu = mike.install;
        mike = zulu.toString;
        mike = mike.bind(zulu)();
        entity['deeplink'] = mike;
        return entity;
    };
    zulu['mobileNativeUpdateAvailableLocalItem'] = tango;
    mike = function(argFoo) {
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            zulu = argFoo;
            tango = zulu.type;
            golf = _closure1_slot0;
            entity = _closure1_slot2;
            oscar = 3;
            entity = entity[oscar];
            report = undefined;
            entity = golf.bind(report)(entity);
            entity = entity.NotificationCenterItems;
            entity = entity.RECENT_MENTION;
            entity = tango === entity;
            if(entity) { _fun00006_ip = 90; continue _fun00005 }
 52:
            zulu = zulu.type;
            tango = _closure1_slot0;
            mike = _closure1_slot2;
            mike = mike[oscar];
            mike = tango.bind(report)(mike);
            mike = mike.NotificationCenterItems;
            mike = mike.REPLY_MENTION;
            entity = zulu === mike;
 90:
            return entity;
        }
    };
    zulu['isMentionItem'] = mike;
    return entity;
})();