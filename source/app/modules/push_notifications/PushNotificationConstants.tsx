// app/modules/push_notifications/PushNotificationConstants.tsx
export default (function(_, argBar, __, ___, ____, argFred, argPlugh) {
    _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
        verify = argBar;
        zulu = argFred;
        offset = argPlugh;
        var _closure1_slot0 = verify;
        var _closure1_slot1 = offset;
        entity = global;
        oscar = entity.Object;
        report = oscar.defineProperty;
        mike = {};
        entity = true;
        mike['value'] = entity;
        entity = '__esModule';
        entity = report.bind(oscar)(zulu, entity, mike);
        entity = 0;
        mike = offset[entity];
        entity = undefined;
        report = verify.bind(entity)(mike);
        mike = report.getConstants;
        mike = mike.bind(report)();
        report = mike.Identifier;
        if(report) { _fun00002_ip = 87; continue _fun00001 }
 83:
        report = '';
 87:
        oscar = report.startsWith;
        mike = 'com.discord.kodiak';
        mike = oscar.bind(report)(mike);
        oscar = 'apns';
        golf = report;
        if(!mike) { _fun00002_ip = 122; continue _fun00001 }
 116:
        oscar = 'apns_internal';
 122:
        var _closure1_slot2 = oscar;
        report = 'apns_voip';
        if(!mike) { _fun00002_ip = 141; continue _fun00001 }
 135:
        report = 'apns_internal_voip';
 141:
        mike = {};
        options = 'reminder';
        mike['REMINDER'] = options;
        options = 'top_messages_push';
        mike['TOP_MESSAGE_PUSH'] = options;
        options = 'trending_content_push';
        mike['TRENDING_CONTENT_PUSH'] = options;
        options = 2;
        options = offset[options];
        offset = verify.bind(entity)(options);
        verify = offset.fileFinishedImporting;
        options = 'modules/push_notifications/PushNotificationConstants.tsx';
        options = verify.bind(offset)(options);
        zulu['BUNDLE_ID'] = golf;
        golf = 'gcm';
        zulu['DEVICE_PUSH_PROVIDER_ANDROID'] = golf;
        zulu['DEVICE_PUSH_PROVIDER_IOS'] = oscar;
        zulu['DEVICE_PUSH_VOIP_PROVIDER'] = report;
        tango = function() { // Original name: getDevicePushProvider
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                tango = _closure1_slot0;
                zulu = _closure1_slot1;
                entity = 1;
                zulu = zulu[entity];
                entity = undefined;
                zulu = tango.bind(entity)(zulu);
                entity = zulu.isAndroid;
                zulu = entity.bind(zulu)();
                entity = 'gcm';
                if(zulu) { _fun00004_ip = 45; continue _fun00003 }
 41:
                entity = _closure1_slot2;
 45:
                return entity;
            }
        };
        zulu['getDevicePushProvider'] = tango;
        zulu['NotificationTypes'] = mike;
        return entity;
    }
})();