// app/modules/local_push_notification/native/LocalPushNotificationActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscard;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = report.bind(entity)(tangon);
    tangon = tangon.LocalNotificationTypes;
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.AnalyticEvents;
    var _closure1_slot4 = tangon;
    tangon = 11;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/local_push_notification/native/LocalPushNotificationActionCreators.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: receiveLocalNotification
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            oscard = argFoo;
            zuuluu = function() { // Original name: dispatch
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    oscard = _closure1_slot1;
                    golfie = _closure1_slot2;
                    entity = 3;
                    michal = golfie[entity];
                    entity = undefined;
                    option = oscard.bind(entity)(michal);
                    report = option.dispatch;
                    michal = {};
                    verify = 'PUSH_NOTIFICATION_CLICK';
                    michal['type'] = verify;
                    michal = report.bind(option)(michal);
                    michal = 4;
                    michal = golfie[michal];
                    verify = oscard.bind(entity)(michal);
                    option = verify.addBreadcrumb;
                    report = {};
                    michal = 'Notification Clicked';
                    report['message'] = michal;
                    offset = {};
                    yankee = _closure2_slot0;
                    yankee = yankee.type;
                    offset['type'] = yankee;
                    report['data'] = offset;
                    report = option.bind(verify)(report);
                    report = 5;
                    report = golfie[report];
                    option = oscard.bind(entity)(report);
                    golfie = option.track;
                    report = _closure1_slot4;
                    oscard = report.NOTIFICATION_CLICKED;
                    report = {};
                    verify = _closure2_slot0;
                    verify = verify.type;
                    report['notif_type'] = verify;
                    offset = _closure2_slot0;
                    verify = 'guildId';
                    offset = verify in offset;
                    verify = null;
                    if(!offset) { _fun00004_ip = 173; continue _fun00003 }
 164:
                    offset = _closure2_slot0;
                    verify = offset.guildId;
 173:
                    report['guild_id'] = verify;
                    report = golfie.bind(option)(oscard, report);
                    report = _closure2_slot0;
                    oscard = report.type;
                    report = _closure1_slot3;
                    report = report.GUILD_VERIFICATION;
                    if(!(report !== oscard)) { _fun00004_ip = 354; continue _fun00003 }
 209:
                    report = _closure1_slot3;
                    report = report.CALL_RING;
                    if(!(report !== oscard)) { _fun00004_ip = 297; continue _fun00003 }
 223:
                    report = _closure1_slot3;
                    report = report.MESSAGE_SEND_FAILED;
                    if(!(report === oscard)) { _fun00004_ip = 394; continue _fun00003 }
 240:
                    golfie = _closure1_slot0;
                    report = _closure1_slot2;
                    oscard = 8;
                    oscard = report[oscard];
                    golfie = golfie.bind(entity)(oscard);
                    oscard = 9;
                    oscard = report[oscard];
                    report = report.paths;
                    golfie = golfie.bind(entity)(oscard, report);
                    oscard = golfie.then;
                    report = function(argFoo) {
                        entity = argFoo;
                        report = entity.transitionToMessage;
                        michal = _closure2_slot0;
                        tangon = michal.channelId;
                        entity = _closure2_slot0;
                        zuuluu = entity.messageId;
                        michal = {};
                        golfie = _closure1_slot0;
                        oscard = _closure1_slot2;
                        entity = 10;
                        oscard = oscard[entity];
                        entity = undefined;
                        oscard = golfie.bind(entity)(oscard);
                        oscard = oscard.JumpTypes;
                        oscard = oscard.INSTANT;
                        michal['jumpType'] = oscard;
                        entity = report.bind(entity)(tangon, zuuluu, michal);
                        return entity;
                    };
                    report = oscard.bind(golfie)(report);
                    _fun00004_ip = 394; continue _fun00003;
 297:
                    golfie = _closure1_slot0;
                    report = _closure1_slot2;
                    oscard = 8;
                    oscard = report[oscard];
                    golfie = golfie.bind(entity)(oscard);
                    oscard = 7;
                    oscard = report[oscard];
                    report = report.paths;
                    oscard = golfie.bind(entity)(oscard, report);
                    report = oscard.then;
                    tangon = function(argFoo) {
                        entity = argFoo;
                        zuuluu = entity.default;
                        entity = _closure2_slot0;
                        michal = entity.channelId;
                        entity = undefined;
                        entity = zuuluu.bind(entity)(michal);
                        return entity;
                    };
                    tangon = report.bind(oscard)(tangon);
                    _fun00004_ip = 394; continue _fun00003;
 354:
                    tangon = _closure1_slot1;
                    report = _closure1_slot2;
                    zuuluu = 6;
                    zuuluu = report[zuuluu];
                    tangon = tangon.bind(entity)(zuuluu);
                    zuuluu = tangon.transitionToGuildSync;
                    michal = _closure2_slot0;
                    michal = michal.guildId;
                    michal = zuuluu.bind(tangon)(michal);
 394:
                    return entity;
                }
            };
            michal = oscard.getData;
            entity = null;
            if(!(entity != michal)) { _fun00002_ip = 182; continue _fun00001 }
 27:
            golfie = _closure1_slot0;
            tangon = _closure1_slot2;
            michal = 2;
            tangon = tangon[michal];
            michal = undefined;
            option = golfie.bind(michal)(tangon);
            golfie = option.trackAppOpened;
            tangon = 'notification';
            tangon = golfie.bind(option)(tangon);
            tangon = oscard.getData;
            tangon = tangon.bind(oscard)();
            var _closure2_slot0 = tangon;
            report = tangon.type;
            tangon = _closure1_slot3;
            tangon = tangon.GUILD_VERIFICATION;
            if(!(tangon !== report)) { _fun00002_ip = 130; continue _fun00001 }
 100:
            tangon = _closure1_slot3;
            tangon = tangon.CALL_RING;
            if(!(tangon !== report)) { _fun00002_ip = 130; continue _fun00001 }
 114:
            tangon = _closure1_slot3;
            tangon = tangon.MESSAGE_SEND_FAILED;
            if(!(tangon !== report)) { _fun00002_ip = 130; continue _fun00001 }
 128:
            return michal;
 130:
            tangon = _closure1_slot1;
            report = _closure1_slot2;
            entity = 3;
            entity = report[entity];
            tangon = tangon.bind(michal)(entity);
            entity = tangon.isDispatching;
            entity = entity.bind(tangon)();
            if(entity) { _fun00002_ip = 169; continue _fun00001 }
 163:
            entity = zuuluu.bind(michal)();
            _fun00002_ip = 182; continue _fun00001;
 169:
            entity = global;
            entity = entity.setImmediate;
            entity = entity.bind(michal)(zuuluu);
 182:
            entity = undefined;
            return entity;
        }
    };
    zuuluu['receiveLocalNotification'] = michal;
    return entity;
})();