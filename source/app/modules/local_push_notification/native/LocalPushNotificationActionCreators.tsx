// app/modules/local_push_notification/native/LocalPushNotificationActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscar;
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
    tango = tango.LocalNotificationTypes;
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.AnalyticEvents;
    var _closure1_slot4 = tango;
    tango = 11;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/local_push_notification/native/LocalPushNotificationActionCreators.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: receiveLocalNotification
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            oscar = argFoo;
            zulu = function() { // Original name: dispatch
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    oscar = _closure1_slot1;
                    golf = _closure1_slot2;
                    entity = 3;
                    mike = golf[entity];
                    entity = undefined;
                    options = oscar.bind(entity)(mike);
                    report = options.dispatch;
                    mike = {};
                    verify = 'PUSH_NOTIFICATION_CLICK';
                    mike['type'] = verify;
                    mike = report.bind(options)(mike);
                    mike = 4;
                    mike = golf[mike];
                    verify = oscar.bind(entity)(mike);
                    options = verify.addBreadcrumb;
                    report = {};
                    mike = 'Notification Clicked';
                    report['message'] = mike;
                    offset = {};
                    yankee = _closure2_slot0;
                    yankee = yankee.type;
                    offset['type'] = yankee;
                    report['data'] = offset;
                    report = options.bind(verify)(report);
                    report = 5;
                    report = golf[report];
                    options = oscar.bind(entity)(report);
                    golf = options.track;
                    report = _closure1_slot4;
                    oscar = report.NOTIFICATION_CLICKED;
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
                    report = golf.bind(options)(oscar, report);
                    report = _closure2_slot0;
                    oscar = report.type;
                    report = _closure1_slot3;
                    report = report.GUILD_VERIFICATION;
                    if(!(report !== oscar)) { _fun00004_ip = 354; continue _fun00003 }
 209:
                    report = _closure1_slot3;
                    report = report.CALL_RING;
                    if(!(report !== oscar)) { _fun00004_ip = 297; continue _fun00003 }
 223:
                    report = _closure1_slot3;
                    report = report.MESSAGE_SEND_FAILED;
                    if(!(report === oscar)) { _fun00004_ip = 394; continue _fun00003 }
 240:
                    golf = _closure1_slot0;
                    report = _closure1_slot2;
                    oscar = 8;
                    oscar = report[oscar];
                    golf = golf.bind(entity)(oscar);
                    oscar = 9;
                    oscar = report[oscar];
                    report = report.paths;
                    golf = golf.bind(entity)(oscar, report);
                    oscar = golf.then;
                    report = function(argFoo) {
                        entity = argFoo;
                        report = entity.transitionToMessage;
                        mike = _closure2_slot0;
                        tango = mike.channelId;
                        entity = _closure2_slot0;
                        zulu = entity.messageId;
                        mike = {};
                        golf = _closure1_slot0;
                        oscar = _closure1_slot2;
                        entity = 10;
                        oscar = oscar[entity];
                        entity = undefined;
                        oscar = golf.bind(entity)(oscar);
                        oscar = oscar.JumpTypes;
                        oscar = oscar.INSTANT;
                        mike['jumpType'] = oscar;
                        entity = report.bind(entity)(tango, zulu, mike);
                        return entity;
                    };
                    report = oscar.bind(golf)(report);
                    _fun00004_ip = 394; continue _fun00003;
 297:
                    golf = _closure1_slot0;
                    report = _closure1_slot2;
                    oscar = 8;
                    oscar = report[oscar];
                    golf = golf.bind(entity)(oscar);
                    oscar = 7;
                    oscar = report[oscar];
                    report = report.paths;
                    oscar = golf.bind(entity)(oscar, report);
                    report = oscar.then;
                    tango = function(argFoo) {
                        entity = argFoo;
                        zulu = entity.default;
                        entity = _closure2_slot0;
                        mike = entity.channelId;
                        entity = undefined;
                        entity = zulu.bind(entity)(mike);
                        return entity;
                    };
                    tango = report.bind(oscar)(tango);
                    _fun00004_ip = 394; continue _fun00003;
 354:
                    tango = _closure1_slot1;
                    report = _closure1_slot2;
                    zulu = 6;
                    zulu = report[zulu];
                    tango = tango.bind(entity)(zulu);
                    zulu = tango.transitionToGuildSync;
                    mike = _closure2_slot0;
                    mike = mike.guildId;
                    mike = zulu.bind(tango)(mike);
 394:
                    return entity;
                }
            };
            mike = oscar.getData;
            entity = null;
            if(!(entity != mike)) { _fun00002_ip = 182; continue _fun00001 }
 27:
            golf = _closure1_slot0;
            tango = _closure1_slot2;
            mike = 2;
            tango = tango[mike];
            mike = undefined;
            options = golf.bind(mike)(tango);
            golf = options.trackAppOpened;
            tango = 'notification';
            tango = golf.bind(options)(tango);
            tango = oscar.getData;
            tango = tango.bind(oscar)();
            var _closure2_slot0 = tango;
            report = tango.type;
            tango = _closure1_slot3;
            tango = tango.GUILD_VERIFICATION;
            if(!(tango !== report)) { _fun00002_ip = 130; continue _fun00001 }
 100:
            tango = _closure1_slot3;
            tango = tango.CALL_RING;
            if(!(tango !== report)) { _fun00002_ip = 130; continue _fun00001 }
 114:
            tango = _closure1_slot3;
            tango = tango.MESSAGE_SEND_FAILED;
            if(!(tango !== report)) { _fun00002_ip = 130; continue _fun00001 }
 128:
            return mike;
 130:
            tango = _closure1_slot1;
            report = _closure1_slot2;
            entity = 3;
            entity = report[entity];
            tango = tango.bind(mike)(entity);
            entity = tango.isDispatching;
            entity = entity.bind(tango)();
            if(entity) { _fun00002_ip = 169; continue _fun00001 }
 163:
            entity = zulu.bind(mike)();
            _fun00002_ip = 182; continue _fun00001;
 169:
            entity = global;
            entity = entity.setImmediate;
            entity = entity.bind(mike)(zulu);
 182:
            entity = undefined;
            return entity;
        }
    };
    zulu['receiveLocalNotification'] = mike;
    return entity;
})();