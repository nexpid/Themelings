// app/modules/push_notifications/PushNotificationConstants.tsx
export default (function(_, argBar, __, ___, ____, argFre, argPlu) {
    _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
        verify = argBar;
        zuuluu = argFre;
        offset = argPlu;
        var _closure1_slot0 = verify;
        var _closure1_slot1 = offset;
        entity = global;
        oscard = entity.Object;
        report = oscard.defineProperty;
        michal = {};
        entity = true;
        michal['value'] = entity;
        entity = '__esModule';
        entity = report.bind(oscard)(zuuluu, entity, michal);
        entity = 0;
        michal = offset[entity];
        entity = undefined;
        report = verify.bind(entity)(michal);
        michal = report.getConstants;
        michal = michal.bind(report)();
        report = michal.Identifier;
        if(report) { _fun00002_ip = 87; continue _fun00001 }
 83:
        report = '';
 87:
        oscard = report.startsWith;
        michal = 'com.discord.kodiak';
        michal = oscard.bind(report)(michal);
        oscard = 'apns';
        golfie = report;
        if(!michal) { _fun00002_ip = 122; continue _fun00001 }
 116:
        oscard = 'apns_internal';
 122:
        var _closure1_slot2 = oscard;
        report = 'apns_voip';
        if(!michal) { _fun00002_ip = 141; continue _fun00001 }
 135:
        report = 'apns_internal_voip';
 141:
        michal = {};
        option = 'reminder';
        michal['REMINDER'] = option;
        option = 'top_messages_push';
        michal['TOP_MESSAGE_PUSH'] = option;
        option = 'trending_content_push';
        michal['TRENDING_CONTENT_PUSH'] = option;
        option = 2;
        option = offset[option];
        offset = verify.bind(entity)(option);
        verify = offset.fileFinishedImporting;
        option = 'modules/push_notifications/PushNotificationConstants.tsx';
        option = verify.bind(offset)(option);
        zuuluu['BUNDLE_ID'] = golfie;
        golfie = 'gcm';
        zuuluu['DEVICE_PUSH_PROVIDER_ANDROID'] = golfie;
        zuuluu['DEVICE_PUSH_PROVIDER_IOS'] = oscard;
        zuuluu['DEVICE_PUSH_VOIP_PROVIDER'] = report;
        tangon = function() { // Original name: getDevicePushProvider
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot1;
                entity = 1;
                zuuluu = zuuluu[entity];
                entity = undefined;
                zuuluu = tangon.bind(entity)(zuuluu);
                entity = zuuluu.isAndroid;
                zuuluu = entity.bind(zuuluu)();
                entity = 'gcm';
                if(zuuluu) { _fun00004_ip = 45; continue _fun00003 }
 41:
                entity = _closure1_slot2;
 45:
                return entity;
            }
        };
        zuuluu['getDevicePushProvider'] = tangon;
        zuuluu['NotificationTypes'] = michal;
        return entity;
    }
})();