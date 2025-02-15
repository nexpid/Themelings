// app/modules/in_app_notifications/native/InAppNotificationContainer.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    options = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = options;
    var _closure1_slot2 = oscar;
    entity = global;
    verify = entity.Object;
    golf = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(verify)(zulu, entity, tango);
    golf = 0;
    tango = oscar[golf];
    entity = undefined;
    tango = options.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    options = oscar[tango];
    tango = argCorge;
    tango = tango.bind(entity)(options);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    options = tango.StyleSheet;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    verify = tango.setReportOpen;
    var _closure1_slot5 = verify;
    tango = tango.useBugReportStore;
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    verify = tango.InAppNotificationTypes;
    var _closure1_slot7 = verify;
    verify = tango.UserSettingsSections;
    var _closure1_slot8 = verify;
    tango = tango.AnalyticEvents;
    var _closure1_slot9 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot10 = tango;
    tango = new Array(3);
    verify = -100;
    tango[0] = verify;
    tango[1] = golf;
    golf = 100;
    tango[2] = golf;
    var _closure1_slot11 = tango;
    tango = {};
    golf = 200;
    tango['duration'] = golf;
    golf = 6;
    verify = oscar[golf];
    verify = report.bind(entity)(verify);
    offset = verify.Easing;
    verify = offset.in;
    golf = oscar[golf];
    golf = report.bind(entity)(golf);
    golf = golf.Easing;
    golf = golf.ease;
    golf = verify.bind(offset)(golf);
    tango['easing'] = golf;
    var _closure1_slot12 = tango;
    tango = {'extrapolateRight': 'clamp', 'extrapolateLeft': 'clamp'};
    var _closure1_slot13 = tango;
    golf = options.create;
    tango = {};
    verify = {'marginLeft': 16, 'marginRight': 16};
    tango['notificationsContainer'] = verify;
    tango = golf.bind(options)(tango);
    var _closure1_slot14 = tango;
    tango = {};
    golf = 'function InAppNotificationContainerTsx1(){const{runOnJS,setInitialized}=this.__closure;return runOnJS(setInitialized)(true);}';
    tango['code'] = golf;
    var _closure1_slot15 = tango;
    tango = {};
    golf = 'function InAppNotificationContainerTsx2(finished){const{runOnJS,handleDismissNotication}=this.__closure;if(finished){runOnJS(handleDismissNotication)();}}';
    tango['code'] = golf;
    var _closure1_slot16 = tango;
    tango = {};
    golf = 'function InAppNotificationContainerTsx3(){const{startY,notificationGestureY,velocityY,runOnJS,setProgressPaused}=this.__closure;startY.set(notificationGestureY.get());velocityY.set(0);runOnJS(setProgressPaused)(true);}';
    tango['code'] = golf;
    var _closure1_slot17 = tango;
    tango = {};
    golf = 'function InAppNotificationContainerTsx4(event){const{notificationGestureY,startY,velocityY}=this.__closure;notificationGestureY.set(startY.get()+event.translationY);velocityY.set(event.velocityY);}';
    tango['code'] = golf;
    var _closure1_slot18 = tango;
    tango = {};
    golf = "function InAppNotificationContainerTsx5(event){const{velocityY,MIN_SWIPE_VELOCITY,MIN_SWIPE_DISTANCE,notificationGestureY,withTiming,PAN_INPUT_RANGE,Easing,runOnJS,handleDismissNotication,setProgressPaused,withSpring}=this.__closure;const shouldDismiss=Math.abs(velocityY.get())>=MIN_SWIPE_VELOCITY||Math.abs(event.translationY)>=MIN_SWIPE_DISTANCE;if(shouldDismiss){notificationGestureY.set(withTiming(event.translationY>0?PAN_INPUT_RANGE[2]:PAN_INPUT_RANGE[0],{duration:200,easing:Easing.out(Easing.ease)},'animate-always',function(finished){if(finished){runOnJS(handleDismissNotication)();}}));}else{runOnJS(setProgressPaused)(false);notificationGestureY.set(withSpring(0,{damping:10,mass:1,stiffness:100,velocity:velocityY.get()},'animate-always'));}}";
    tango['code'] = golf;
    var _closure1_slot19 = tango;
    tango = {};
    golf = 'function InAppNotificationContainerTsx6(finished){const{runOnJS,handleDismissNotication}=this.__closure;if(finished){runOnJS(handleDismissNotication)();}}';
    tango['code'] = golf;
    var _closure1_slot20 = tango;
    tango = {};
    golf = 'function InAppNotificationContainerTsx7(){const{runOnJS,setProgressPaused}=this.__closure;runOnJS(setProgressPaused)(false);}';
    tango['code'] = golf;
    var _closure1_slot21 = tango;
    tango = {};
    golf = 'function InAppNotificationContainerTsx8(){const{initialized,interpolate,notificationGestureY,PAN_INPUT_RANGE,extrapolateConfig,scale}=this.__closure;const scaleTransform=initialized?interpolate(notificationGestureY.get(),PAN_INPUT_RANGE,[0.3,1,0.3],extrapolateConfig):scale.get();const opacityTransform=initialized?interpolate(notificationGestureY.get(),PAN_INPUT_RANGE,[0,1,0],extrapolateConfig):scale.get();return{transform:[{translateY:notificationGestureY.get()},{scale:scaleTransform}],opacity:opacityTransform};}';
    tango['code'] = golf;
    var _closure1_slot22 = tango;
    tango = 33;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/in_app_notifications/native/InAppNotificationContainer.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: InAppNotificationContainer
        entity = argFoo;
        entity = entity.notification;
        var _closure2_slot0 = entity;
        mike = function(argFoo) { // Original name: getRenderProps
            _fun86697: for(var _fun86697_ip = 0; ; ) switch(_fun86697_ip) {
 0:
                romeo = argFoo;
                var _closure3_slot0 = romeo;
                mike = romeo.type;
                entity = _closure1_slot7;
                entity = entity.MESSAGE;
                if(!(entity !== mike)) { _fun86697_ip = 607; continue _fun86697 }
 34:
                entity = _closure1_slot7;
                entity = entity.MESSAGE_FAILED_TO_SEND;
                if(!(entity !== mike)) { _fun86697_ip = 527; continue _fun86697 }
 51:
                entity = _closure1_slot7;
                entity = entity.FORUM_THREAD_CREATED;
                if(!(entity !== mike)) { _fun86697_ip = 429; continue _fun86697 }
 68:
                entity = _closure1_slot7;
                entity = entity.BUG_REPORTER;
                if(!(entity !== mike)) { _fun86697_ip = 353; continue _fun86697 }
 85:
                entity = _closure1_slot7;
                entity = entity.ALERT;
                if(!(entity !== mike)) { _fun86697_ip = 286; continue _fun86697 }
 102:
                entity = _closure1_slot7;
                entity = entity.REACTION;
                if(!(entity !== mike)) { _fun86697_ip = 198; continue _fun86697 }
 116:
                entity = _closure1_slot7;
                entity = entity.MESSAGE_REMINDER;
                if(!(entity !== mike)) { _fun86697_ip = 140; continue _fun86697 }
 130:
                entity = {};
                mike = null;
                entity['content'] = mike;
                return entity;
 140:
                entity = {};
                mike = function() { // Original name: onPress
                    tango = _closure1_slot1;
                    report = _closure1_slot2;
                    zulu = 8;
                    oscar = report[zulu];
                    entity = undefined;
                    golf = tango.bind(entity)(oscar);
                    oscar = golf.popAll;
                    oscar = oscar.bind(golf)();
                    zulu = report[zulu];
                    offset = tango.bind(entity)(zulu);
                    verify = offset.pushLazy;
                    oscar = _closure1_slot0;
                    zulu = 11;
                    zulu = report[zulu];
                    golf = oscar.bind(entity)(zulu);
                    zulu = 23;
                    oscar = report[zulu];
                    zulu = report.paths;
                    backup = golf.bind(entity)(oscar, zulu);
                    golf = {};
                    zulu = 'modal';
                    golf['presentation'] = zulu;
                    foxtrot = {};
                    romeo = 'for-later-modal';
                    kilo = offset;
                    yankee = golf;
                    zulu = kilo[verify](backup, foxtrot, romeo, yankee, offset);
                    zulu = _closure3_slot0;
                    golf = zulu.savedMessage;
                    options = zulu.channel;
                    oscar = zulu.author;
                    zulu = 24;
                    zulu = report[zulu];
                    report = tango.bind(entity)(zulu);
                    tango = report.track;
                    mike = _closure1_slot9;
                    zulu = mike.FOR_LATER_REMINDER_NOTIFICATION_CLICKED;
                    mike = {};
                    verify = options.guild_id;
                    mike['guild_id'] = verify;
                    options = options.id;
                    mike['channel_id'] = options;
                    golf = golf.saveData;
                    golf = golf.messageId;
                    mike['message_id'] = golf;
                    oscar = oscar.id;
                    mike['message_author_id'] = oscar;
                    oscar = 'IN_APP';
                    mike['notification_type'] = oscar;
                    mike = tango.bind(report)(zulu, mike);
                    return entity;
                };
                entity['onPress'] = mike;
                golf = _closure1_slot10;
                report = _closure1_slot1;
                oscar = _closure1_slot2;
                mike = 25;
                mike = oscar[mike];
                oscar = undefined;
                report = report.bind(oscar)(mike);
                mike = {};
                mike['notification'] = romeo;
                mike = golf.bind(oscar)(report, mike);
                entity['content'] = mike;
                return entity;
 198:
                entity = romeo.channel;
                var _closure3_slot7 = entity;
                entity = romeo.message;
                var _closure3_slot8 = entity;
                entity = {};
                mike = function() { // Original name: onPress
                    zulu = _closure1_slot1;
                    tango = _closure1_slot2;
                    entity = 8;
                    report = tango[entity];
                    entity = undefined;
                    oscar = zulu.bind(entity)(report);
                    report = oscar.popAll;
                    report = report.bind(oscar)();
                    report = _closure1_slot0;
                    mike = 9;
                    mike = tango[mike];
                    options = report.bind(entity)(mike);
                    golf = options.transitionToMessage;
                    report = _closure3_slot7;
                    oscar = report.id;
                    mike = _closure3_slot8;
                    report = mike.id;
                    mike = {};
                    verify = true;
                    mike['navigationReplace'] = verify;
                    mike = golf.bind(options)(oscar, report, mike);
                    mike = 21;
                    mike = tango[mike];
                    zulu = zulu.bind(entity)(mike);
                    mike = zulu.clearNotification;
                    mike = mike.bind(zulu)();
                    return entity;
                };
                entity['onPress'] = mike;
                mike = function() { // Original name: onSettingsPress
                    tango = _closure1_slot1;
                    entity = _closure1_slot2;
                    zulu = 8;
                    zulu = entity[zulu];
                    oscar = undefined;
                    tango = tango.bind(oscar)(zulu);
                    zulu = tango.pushLazy;
                    report = _closure1_slot0;
                    mike = 11;
                    mike = entity[mike];
                    report = report.bind(oscar)(mike);
                    mike = 10;
                    mike = entity[mike];
                    entity = entity.paths;
                    mike = report.bind(oscar)(mike, entity);
                    entity = {};
                    report = _closure3_slot7;
                    report = report.id;
                    entity['channelId'] = report;
                    entity = zulu.bind(tango)(mike, entity);
                    return entity;
                };
                entity['onSettingsPress'] = mike;
                golf = _closure1_slot10;
                report = _closure1_slot1;
                oscar = _closure1_slot2;
                mike = 22;
                mike = oscar[mike];
                oscar = undefined;
                report = report.bind(oscar)(mike);
                mike = {};
                mike['notification'] = romeo;
                mike = golf.bind(oscar)(report, mike);
                entity['content'] = mike;
                return entity;
 286:
                entity = romeo.channel;
                var _closure3_slot6 = entity;
                entity = {};
                golf = _closure1_slot10;
                report = _closure1_slot1;
                oscar = _closure1_slot2;
                mike = 20;
                mike = oscar[mike];
                oscar = undefined;
                report = report.bind(oscar)(mike);
                mike = {};
                mike['notification'] = romeo;
                mike = golf.bind(oscar)(report, mike);
                entity['content'] = mike;
                mike = function() { // Original name: onPress
                    zulu = _closure1_slot0;
                    mike = _closure1_slot2;
                    entity = 9;
                    mike = mike[entity];
                    entity = undefined;
                    report = zulu.bind(entity)(mike);
                    tango = report.transitionToChannel;
                    mike = _closure3_slot6;
                    zulu = mike.id;
                    mike = {};
                    oscar = true;
                    mike['navigationReplace'] = oscar;
                    mike = tango.bind(report)(zulu, mike);
                    return entity;
                };
                entity['onPress'] = mike;
                return entity;
 353:
                entity = {};
                golf = _closure1_slot10;
                report = _closure1_slot0;
                oscar = _closure1_slot2;
                mike = 19;
                mike = oscar[mike];
                oscar = undefined;
                mike = report.bind(oscar)(mike);
                report = mike.BugReporterNotification;
                mike = {};
                mike['notification'] = romeo;
                mike = golf.bind(oscar)(report, mike);
                entity['content'] = mike;
                mike = function() { // Original name: onPress
                    _fun86703: for(var _fun86703_ip = 0; ; ) switch(_fun86703_ip) {
 0:
                        zulu = _closure1_slot6;
                        entity = zulu.getState;
                        entity = entity.bind(zulu)();
                        entity = entity.isReportOpen;
                        if(entity) { _fun86703_ip = 136; continue _fun86703 }
 26:
                        zulu = _closure1_slot5;
                        oscar = undefined;
                        entity = true;
                        entity = zulu.bind(oscar)(entity);
                        tango = _closure1_slot1;
                        entity = _closure1_slot2;
                        zulu = 8;
                        zulu = entity[zulu];
                        tango = tango.bind(oscar)(zulu);
                        zulu = tango.pushLazy;
                        report = _closure1_slot0;
                        mike = 11;
                        mike = entity[mike];
                        report = report.bind(oscar)(mike);
                        mike = 17;
                        mike = entity[mike];
                        entity = entity.paths;
                        mike = report.bind(oscar)(mike, entity);
                        entity = {};
                        report = _closure3_slot0;
                        oscar = report.imageUri;
                        entity['screenshotUri'] = oscar;
                        report = report.image;
                        entity['screenshot'] = report;
                        entity = zulu.bind(tango)(mike, entity);
 136:
                        entity = undefined;
                        return entity;
                    }
                };
                entity['onPress'] = mike;
                mike = function() { // Original name: onSettingsPress
                    zulu = _closure1_slot0;
                    mike = _closure1_slot2;
                    entity = 18;
                    mike = mike[entity];
                    entity = undefined;
                    tango = zulu.bind(entity)(mike);
                    zulu = tango.openUserSettings;
                    mike = {};
                    report = _closure1_slot8;
                    report = report.OVERVIEW;
                    mike['screen'] = report;
                    mike = zulu.bind(tango)(mike);
                    return entity;
                };
                entity['onSettingsPress'] = mike;
                return entity;
 429:
                mike = romeo.thread;
                var _closure3_slot5 = mike;
                entity = {};
                options = _closure1_slot10;
                oscar = _closure1_slot1;
                golf = _closure1_slot2;
                report = 16;
                report = golf[report];
                golf = undefined;
                oscar = oscar.bind(golf)(report);
                report = {};
                report['notification'] = romeo;
                report = options.bind(golf)(oscar, report);
                entity['content'] = report;
                report = function() { // Original name: onPress
                    zulu = _closure1_slot0;
                    mike = _closure1_slot2;
                    entity = 9;
                    mike = mike[entity];
                    entity = undefined;
                    tango = zulu.bind(entity)(mike);
                    zulu = tango.transitionToThread;
                    mike = _closure3_slot5;
                    mike = zulu.bind(tango)(mike);
                    return entity;
                };
                entity['onPress'] = report;
                report = function() { // Original name: onSettingsPress
                    tango = _closure1_slot1;
                    entity = _closure1_slot2;
                    zulu = 8;
                    zulu = entity[zulu];
                    oscar = undefined;
                    tango = tango.bind(oscar)(zulu);
                    zulu = tango.pushLazy;
                    report = _closure1_slot0;
                    mike = 11;
                    mike = entity[mike];
                    report = report.bind(oscar)(mike);
                    mike = 10;
                    mike = entity[mike];
                    entity = entity.paths;
                    mike = report.bind(oscar)(mike, entity);
                    entity = {};
                    report = _closure3_slot0;
                    report = report.parentChannel;
                    report = report.id;
                    entity['channelId'] = report;
                    entity = zulu.bind(tango)(mike, entity);
                    return entity;
                };
                entity['onSettingsPress'] = report;
                report = mike.guild_id;
                entity['guildId'] = report;
                mike = mike.id;
                entity['channelId'] = mike;
                return entity;
 527:
                mike = romeo.channelId;
                var _closure3_slot3 = mike;
                entity = romeo.messageId;
                var _closure3_slot4 = entity;
                entity = {};
                options = _closure1_slot10;
                oscar = _closure1_slot1;
                golf = _closure1_slot2;
                report = 15;
                report = golf[report];
                golf = undefined;
                oscar = oscar.bind(golf)(report);
                report = {};
                report['notification'] = romeo;
                report = options.bind(golf)(oscar, report);
                entity['content'] = report;
                report = function() { // Original name: onPress
                    options = _closure1_slot0;
                    verify = _closure1_slot2;
                    entity = 9;
                    mike = verify[entity];
                    entity = undefined;
                    oscar = options.bind(entity)(mike);
                    report = oscar.transitionToMessage;
                    tango = _closure3_slot3;
                    zulu = _closure3_slot4;
                    mike = {};
                    golf = 14;
                    golf = verify[golf];
                    golf = options.bind(entity)(golf);
                    golf = golf.JumpTypes;
                    golf = golf.INSTANT;
                    mike['jumpType'] = golf;
                    mike = report.bind(oscar)(tango, zulu, mike);
                    return entity;
                };
                entity['onPress'] = report;
                entity['channelId'] = mike;
                return entity;
 607:
                mike = romeo.channel;
                var _closure3_slot1 = mike;
                options = romeo.message;
                var _closure3_slot2 = options;
                offset = _closure1_slot0;
                yankee = _closure1_slot2;
                entity = 7;
                entity = yankee[entity];
                report = undefined;
                oscar = offset.bind(report)(entity);
                entity = oscar.getMessageAuthor;
                verify = entity.bind(oscar)(options);
                entity = {};
                golf = _closure1_slot10;
                oscar = _closure1_slot1;
                tango = 12;
                tango = yankee[tango];
                oscar = oscar.bind(report)(tango);
                tango = {};
                tango['notification'] = romeo;
                tango = golf.bind(report)(oscar, tango);
                entity['content'] = tango;
                tango = 13;
                oscar = yankee[tango];
                oscar = offset.bind(report)(oscar);
                golf = oscar.intl;
                oscar = golf.formatToPlainString;
                tango = yankee[tango];
                tango = offset.bind(report)(tango);
                tango = tango.t;
                report = tango.Hjp1LC;
                tango = {};
                verify = verify.nick;
                tango['userName'] = verify;
                options = options.content;
                tango['message'] = options;
                tango = oscar.bind(golf)(report, tango);
                entity['screenReaderAnnouncement'] = tango;
                tango = function() { // Original name: onPress
                    report = _closure1_slot1;
                    tango = _closure1_slot2;
                    entity = 8;
                    zulu = tango[entity];
                    entity = undefined;
                    report = report.bind(entity)(zulu);
                    zulu = report.popAll;
                    zulu = zulu.bind(report)();
                    zulu = _closure1_slot0;
                    mike = 9;
                    mike = tango[mike];
                    oscar = zulu.bind(entity)(mike);
                    report = oscar.transitionToMessage;
                    zulu = _closure3_slot1;
                    tango = zulu.id;
                    mike = _closure3_slot2;
                    zulu = mike.id;
                    mike = {};
                    golf = true;
                    mike['navigationReplace'] = golf;
                    mike = report.bind(oscar)(tango, zulu, mike);
                    return entity;
                };
                entity['onPress'] = tango;
                zulu = function() { // Original name: onSettingsPress
                    tango = _closure1_slot1;
                    entity = _closure1_slot2;
                    zulu = 8;
                    zulu = entity[zulu];
                    oscar = undefined;
                    tango = tango.bind(oscar)(zulu);
                    zulu = tango.pushLazy;
                    report = _closure1_slot0;
                    mike = 11;
                    mike = entity[mike];
                    report = report.bind(oscar)(mike);
                    mike = 10;
                    mike = entity[mike];
                    entity = entity.paths;
                    mike = report.bind(oscar)(mike, entity);
                    entity = {};
                    report = _closure3_slot1;
                    report = report.id;
                    entity['channelId'] = report;
                    entity = zulu.bind(tango)(mike, entity);
                    return entity;
                };
                entity['onSettingsPress'] = zulu;
                zulu = mike.guild_id;
                entity['guildId'] = zulu;
                mike = mike.id;
                entity['channelId'] = mike;
                return entity;
            }
        };
        tango = undefined;
        zulu = mike.bind(tango)(entity);
        verify = zulu.content;
        mike = zulu.screenReaderAnnouncement;
        var _closure2_slot1 = mike;
        report = zulu.onPress;
        var _closure2_slot2 = report;
        yankee = zulu.onSettingsPress;
        report = zulu.guildId;
        var _closure2_slot3 = report;
        zulu = zulu.channelId;
        var _closure2_slot4 = zulu;
        options = _closure1_slot0;
        foxtrot = _closure1_slot2;
        report = 6;
        zulu = foxtrot[report];
        oscar = options.bind(tango)(zulu);
        zulu = oscar.useSharedValue;
        backup = 0;
        source = zulu.bind(oscar)(backup);
        var _closure2_slot5 = source;
        zulu = foxtrot[report];
        oscar = options.bind(tango)(zulu);
        zulu = oscar.useSharedValue;
        echo = zulu.bind(oscar)(backup);
        var _closure2_slot6 = echo;
        zulu = foxtrot[report];
        offset = options.bind(tango)(zulu);
        oscar = offset.useSharedValue;
        zulu = 100;
        offset = oscar.bind(offset)(zulu);
        var _closure2_slot7 = offset;
        output = _closure1_slot4;
        oscar = output.useRef;
        zulu = entity.duration;
        zulu = oscar.bind(output)(zulu);
        var _closure2_slot8 = zulu;
        zulu = output.useState;
        result = false;
        zulu = zulu.bind(output)(result);
        sizing = _closure1_slot3;
        kilo = 2;
        zulu = sizing.bind(tango)(zulu, kilo);
        control = zulu[backup];
        var _closure2_slot9 = control;
        oscar = 1;
        zulu = zulu[oscar];
        var _closure2_slot10 = zulu;
        zulu = output.useState;
        zulu = zulu.bind(output)(result);
        zulu = sizing.bind(tango)(zulu, kilo);
        sizing = zulu[backup];
        var _closure2_slot11 = sizing;
        result = zulu[oscar];
        var _closure2_slot12 = result;
        vacuum = function() { // Original name: handleDismissNotication
            _fun86709: for(var _fun86709_ip = 0; ; ) switch(_fun86709_ip) {
 0:
                mike = _closure2_slot0;
                zulu = mike.onDismiss;
                mike = null;
                if(!(mike != zulu)) { _fun86709_ip = 33; continue _fun86709 }
 19:
                mike = _closure2_slot0;
                entity = mike.onDismiss;
                entity = entity.bind(mike)();
 33:
                entity = undefined;
                return entity;
            }
        };
        var _closure2_slot13 = vacuum;
        oscar = _closure1_slot1;
        zulu = 26;
        zulu = foxtrot[zulu];
        kilo = oscar.bind(tango)(zulu);
        zulu = function() {
            tango = _closure2_slot6;
            zulu = tango.set;
            foxtrot = _closure1_slot0;
            backup = _closure1_slot2;
            report = 27;
            report = backup[report];
            romeo = undefined;
            verify = foxtrot.bind(romeo)(report);
            options = verify.withTiming;
            output = _closure1_slot12;
            oscar = function() { // Original name: n
                mike = _closure1_slot0;
                zulu = _closure1_slot2;
                entity = 6;
                entity = zulu[entity];
                zulu = undefined;
                tango = mike.bind(zulu)(entity);
                mike = tango.runOnJS;
                entity = _closure2_slot10;
                mike = mike.bind(tango)(entity);
                entity = true;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            report = {};
            yankee = 6;
            yankee = backup[yankee];
            yankee = foxtrot.bind(romeo)(yankee);
            yankee = yankee.runOnJS;
            report['runOnJS'] = yankee;
            offset = _closure2_slot10;
            report['setInitialized'] = offset;
            oscar['__closure'] = report;
            report = 16158991995287.0;
            oscar['__workletHash'] = report;
            mike = _closure1_slot15;
            oscar['__initData'] = mike;
            result = 1;
            sizing = 'respect-motion-settings';
            echo = verify;
            kilo = oscar;
            mike = echo[options](result, output, sizing, kilo, backup);
            mike = zulu.bind(tango)(mike);
            entity = function() {
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 6;
                mike = mike[entity];
                entity = undefined;
                zulu = zulu.bind(entity)(mike);
                mike = zulu.cancelAnimation;
                entity = _closure2_slot6;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            return entity;
        };
        zulu = kilo.bind(tango)(zulu);
        kilo = output.useEffect;
        zulu = new Array(4);
        zulu[0] = control;
        zulu[1] = sizing;
        zulu[2] = entity;
        zulu[3] = offset;
        entity = function() {
            _fun86713: for(var _fun86713_ip = 0; ; ) switch(_fun86713_ip) {
 0:
                zulu = _closure2_slot9;
                if(!zulu) { _fun86713_ip = 248; continue _fun86713 }
 15:
                zulu = _closure2_slot11;
                if(zulu) { _fun86713_ip = 248; continue _fun86713 }
 25:
                zulu = global;
                tango = zulu.Date;
                zulu = tango.now;
                tango = zulu.bind(tango)();
                report = _closure2_slot8;
                zulu = report.current;
                zulu = tango + zulu;
                var _closure3_slot0 = zulu;
                offset = function() { // Original name: handleDismissNotication
                    _fun86714: for(var _fun86714_ip = 0; ; ) switch(_fun86714_ip) {
 0:
                        mike = _closure2_slot0;
                        zulu = mike.onDismiss;
                        mike = null;
                        if(!(mike != zulu)) { _fun86714_ip = 33; continue _fun86714 }
 19:
                        mike = _closure2_slot0;
                        entity = mike.onDismiss;
                        entity = entity.bind(mike)();
 33:
                        entity = undefined;
                        return entity;
                    }
                };
                var _closure3_slot1 = offset;
                tango = _closure2_slot7;
                zulu = tango.set;
                foxtrot = _closure1_slot0;
                backup = _closure1_slot2;
                oscar = 27;
                oscar = backup[oscar];
                romeo = undefined;
                verify = foxtrot.bind(romeo)(oscar);
                options = verify.withTiming;
                golf = {};
                report = report.current;
                golf['duration'] = report;
                yankee = 6;
                report = backup[yankee];
                report = foxtrot.bind(romeo)(report);
                report = report.Easing;
                report = report.linear;
                golf['easing'] = report;
                oscar = function(argFoo) { // Original name: n
                    _fun86715: for(var _fun86715_ip = 0; ; ) switch(_fun86715_ip) {
 0:
                        entity = argFoo;
                        if(!entity) { _fun86715_ip = 52; continue _fun86715 }
 6:
                        zulu = _closure1_slot0;
                        mike = _closure1_slot2;
                        entity = 6;
                        entity = mike[entity];
                        mike = undefined;
                        tango = zulu.bind(mike)(entity);
                        zulu = tango.runOnJS;
                        entity = _closure3_slot1;
                        entity = zulu.bind(tango)(entity);
                        entity = entity.bind(mike)();
 52:
                        entity = undefined;
                        return entity;
                    }
                };
                report = {};
                yankee = backup[yankee];
                yankee = foxtrot.bind(romeo)(yankee);
                yankee = yankee.runOnJS;
                report['runOnJS'] = yankee;
                report['handleDismissNotication'] = offset;
                oscar['__closure'] = report;
                report = 8418346915328.0;
                oscar['__workletHash'] = report;
                mike = _closure1_slot16;
                oscar['__initData'] = mike;
                result = 0;
                sizing = 'animate-always';
                echo = verify;
                output = golf;
                kilo = oscar;
                mike = echo[options](result, output, sizing, kilo, backup);
                mike = zulu.bind(tango)(mike);
                entity = function() {
                    zulu = _closure1_slot0;
                    mike = _closure1_slot2;
                    entity = 6;
                    mike = mike[entity];
                    entity = undefined;
                    report = zulu.bind(entity)(mike);
                    tango = report.cancelAnimation;
                    zulu = _closure2_slot7;
                    zulu = tango.bind(report)(zulu);
                    zulu = _closure2_slot8;
                    tango = _closure3_slot0;
                    mike = global;
                    report = mike.Date;
                    mike = report.now;
                    mike = mike.bind(report)();
                    mike = tango - mike;
                    zulu['current'] = mike;
                    return entity;
                };
                return entity;
 248:
                entity = undefined;
                return entity;
            }
        };
        entity = kilo.bind(output)(entity, zulu);
        entity = foxtrot[report];
        zulu = options.bind(tango)(entity);
        entity = zulu.useSharedValue;
        sequence = entity.bind(zulu)(backup);
        var _closure2_slot14 = sequence;
        entity = foxtrot[report];
        zulu = options.bind(tango)(entity);
        entity = zulu.useSharedValue;
        update = entity.bind(zulu)(backup);
        var _closure2_slot15 = update;
        entity = 28;
        zulu = foxtrot[entity];
        zulu = options.bind(tango)(zulu);
        backup = zulu.Gesture;
        zulu = backup.Pan;
        kilo = zulu.bind(backup)();
        backup = kilo.onBegin;
        zulu = function() { // Original name: Q
            tango = _closure2_slot14;
            zulu = tango.set;
            report = _closure2_slot5;
            entity = report.get;
            entity = entity.bind(report)();
            entity = zulu.bind(tango)(entity);
            tango = _closure2_slot15;
            zulu = tango.set;
            entity = 0;
            entity = zulu.bind(tango)(entity);
            tango = _closure1_slot0;
            zulu = _closure1_slot2;
            entity = 6;
            zulu = zulu[entity];
            entity = undefined;
            tango = tango.bind(entity)(zulu);
            zulu = tango.runOnJS;
            mike = _closure2_slot12;
            zulu = zulu.bind(tango)(mike);
            mike = true;
            mike = zulu.bind(entity)(mike);
            return entity;
        };
        sizing = {};
        sizing['startY'] = sequence;
        sizing['notificationGestureY'] = source;
        sizing['velocityY'] = update;
        config = foxtrot[report];
        config = options.bind(tango)(config);
        config = config.runOnJS;
        sizing['runOnJS'] = config;
        sizing['setProgressPaused'] = result;
        zulu['__closure'] = sizing;
        sizing = 13063567097082.0;
        zulu['__workletHash'] = sizing;
        sizing = _closure1_slot17;
        zulu['__initData'] = sizing;
        kilo = backup.bind(kilo)(zulu);
        backup = kilo.onUpdate;
        zulu = function(argFoo) { // Original name: q
            entity = argFoo;
            report = _closure2_slot5;
            tango = report.set;
            oscar = _closure2_slot14;
            zulu = oscar.get;
            oscar = zulu.bind(oscar)();
            zulu = entity.translationY;
            zulu = oscar + zulu;
            zulu = tango.bind(report)(zulu);
            zulu = _closure2_slot15;
            mike = zulu.set;
            entity = entity.velocityY;
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        sizing = {};
        sizing['notificationGestureY'] = source;
        sizing['startY'] = sequence;
        sizing['velocityY'] = update;
        zulu['__closure'] = sizing;
        sizing = 14599266811227.0;
        zulu['__workletHash'] = sizing;
        sizing = _closure1_slot18;
        zulu['__initData'] = sizing;
        kilo = backup.bind(kilo)(zulu);
        backup = kilo.onEnd;
        zulu = function(argFoo) { // Original name: K
            _fun86719: for(var _fun86719_ip = 0; ; ) switch(_fun86719_ip) {
 0:
                tango = argFoo;
                entity = global;
                report = entity.Math;
                zulu = report.abs;
                oscar = _closure2_slot15;
                mike = oscar.get;
                mike = mike.bind(oscar)();
                zulu = zulu.bind(report)(mike);
                mike = 100;
                if(!(!(zulu >= mike))) { _fun86719_ip = 210; continue _fun86719 }
 48:
                zulu = entity.Math;
                mike = zulu.abs;
                entity = tango.translationY;
                mike = mike.bind(zulu)(entity);
                entity = 25;
                if(!(!(mike >= entity))) { _fun86719_ip = 210; continue _fun86719 }
 81:
                oscar = _closure1_slot0;
                golf = _closure1_slot2;
                entity = 6;
                entity = golf[entity];
                report = undefined;
                zulu = oscar.bind(report)(entity);
                mike = zulu.runOnJS;
                entity = _closure2_slot12;
                mike = mike.bind(zulu)(entity);
                entity = false;
                entity = mike.bind(report)(entity);
                zulu = _closure2_slot5;
                mike = zulu.set;
                entity = 29;
                entity = golf[entity];
                options = oscar.bind(report)(entity);
                golf = options.withSpring;
                oscar = {'damping': 10, 'mass': 1, 'stiffness': 100};
                report = _closure2_slot15;
                entity = report.get;
                entity = entity.bind(report)();
                oscar['velocity'] = entity;
                report = 0;
                entity = 'animate-always';
                entity = golf.bind(options)(report, oscar, entity);
                entity = mike.bind(zulu)(entity);
                _fun86719_ip = 451; continue _fun86719;
 210:
                zulu = _closure2_slot5;
                mike = zulu.set;
                oscar = _closure1_slot0;
                golf = _closure1_slot2;
                report = 27;
                report = golf[report];
                foxtrot = undefined;
                options = oscar.bind(foxtrot)(report);
                golf = options.withTiming;
                tango = tango.translationY;
                report = 0;
                if(!(!(tango > report))) { _fun86719_ip = 271; continue _fun86719 }
 261:
                tango = _closure1_slot11;
                oscar = tango[report];
                _fun86719_ip = 282; continue _fun86719;
 271:
                report = _closure1_slot11;
                tango = 2;
                oscar = report[tango];
 282:
                report = {};
                tango = 200;
                report['duration'] = tango;
                romeo = _closure1_slot0;
                backup = _closure1_slot2;
                yankee = 6;
                tango = backup[yankee];
                tango = romeo.bind(foxtrot)(tango);
                kilo = tango.Easing;
                verify = kilo.out;
                tango = backup[yankee];
                tango = romeo.bind(foxtrot)(tango);
                tango = tango.Easing;
                tango = tango.ease;
                tango = verify.bind(kilo)(tango);
                report['easing'] = tango;
                tango = function(argFoo) { // Original name: t
                    _fun86720: for(var _fun86720_ip = 0; ; ) switch(_fun86720_ip) {
 0:
                        entity = argFoo;
                        if(!entity) { _fun86720_ip = 52; continue _fun86720 }
 6:
                        zulu = _closure1_slot0;
                        mike = _closure1_slot2;
                        entity = 6;
                        entity = mike[entity];
                        mike = undefined;
                        tango = zulu.bind(mike)(entity);
                        zulu = tango.runOnJS;
                        entity = _closure2_slot13;
                        entity = zulu.bind(tango)(entity);
                        entity = entity.bind(mike)();
 52:
                        entity = undefined;
                        return entity;
                    }
                };
                verify = {};
                yankee = backup[yankee];
                yankee = romeo.bind(foxtrot)(yankee);
                yankee = yankee.runOnJS;
                verify['runOnJS'] = yankee;
                offset = _closure2_slot13;
                verify['handleDismissNotication'] = offset;
                tango['__closure'] = verify;
                verify = 14149012899076.0;
                tango['__workletHash'] = verify;
                entity = _closure1_slot20;
                tango['__initData'] = entity;
                output = 'animate-always';
                update = options;
                echo = oscar;
                result = report;
                sizing = tango;
                entity = update[golf](echo, result, output, sizing, kilo);
                entity = mike.bind(zulu)(entity);
 451:
                entity = undefined;
                return entity;
            }
        };
        sizing = {'velocityY': null, 'MIN_SWIPE_VELOCITY': 100, 'MIN_SWIPE_DISTANCE': 25};
        sizing['velocityY'] = update;
        sizing['notificationGestureY'] = source;
        update = 27;
        update = foxtrot[update];
        update = options.bind(tango)(update);
        update = update.withTiming;
        sizing['withTiming'] = update;
        update = _closure1_slot11;
        sizing['PAN_INPUT_RANGE'] = update;
        sequence = foxtrot[report];
        sequence = options.bind(tango)(sequence);
        sequence = sequence.Easing;
        sizing['Easing'] = sequence;
        sequence = foxtrot[report];
        sequence = options.bind(tango)(sequence);
        sequence = sequence.runOnJS;
        sizing['runOnJS'] = sequence;
        sizing['handleDismissNotication'] = vacuum;
        sizing['setProgressPaused'] = result;
        vacuum = 29;
        vacuum = foxtrot[vacuum];
        vacuum = options.bind(tango)(vacuum);
        vacuum = vacuum.withSpring;
        sizing['withSpring'] = vacuum;
        zulu['__closure'] = sizing;
        sizing = 4090851366383.0;
        zulu['__workletHash'] = sizing;
        sizing = _closure1_slot19;
        zulu['__initData'] = sizing;
        kilo = backup.bind(kilo)(zulu);
        backup = kilo.onFinalize;
        zulu = function() { // Original name: B
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 6;
            mike = mike[entity];
            entity = undefined;
            tango = zulu.bind(entity)(mike);
            zulu = tango.runOnJS;
            mike = _closure2_slot12;
            zulu = zulu.bind(tango)(mike);
            mike = false;
            mike = zulu.bind(entity)(mike);
            return entity;
        };
        sizing = {};
        vacuum = foxtrot[report];
        vacuum = options.bind(tango)(vacuum);
        vacuum = vacuum.runOnJS;
        sizing['runOnJS'] = vacuum;
        sizing['setProgressPaused'] = result;
        zulu['__closure'] = sizing;
        sizing = 10763542283312.0;
        zulu['__workletHash'] = sizing;
        sizing = _closure1_slot21;
        zulu['__initData'] = sizing;
        kilo = backup.bind(kilo)(zulu);
        zulu = foxtrot[report];
        sizing = options.bind(tango)(zulu);
        backup = sizing.useAnimatedStyle;
        zulu = function() { // Original name: X
            _fun86722: for(var _fun86722_ip = 0; ; ) switch(_fun86722_ip) {
 0:
                entity = _closure2_slot9;
                if(entity) { _fun86722_ip = 25; continue _fun86722 }
 10:
                mike = _closure2_slot6;
                entity = mike.get;
                report = entity.bind(mike)();
                _fun86722_ip = 94; continue _fun86722;
 25:
                oscar = _closure1_slot0;
                tango = _closure1_slot2;
                mike = 6;
                tango = tango[mike];
                mike = undefined;
                options = oscar.bind(mike)(tango);
                golf = options.interpolate;
                tango = _closure2_slot5;
                mike = tango.get;
                foxtrot = mike.bind(tango)();
                romeo = _closure1_slot11;
                offset = _closure1_slot13;
                yankee = [0.3, 1, 0.3];
                backup = options;
                report = backup[golf](foxtrot, romeo, yankee, offset, verify);
 94:
                entity = _closure2_slot9;
                if(entity) { _fun86722_ip = 116; continue _fun86722 }
 101:
                mike = _closure2_slot6;
                entity = mike.get;
                mike = entity.bind(mike)();
                _fun86722_ip = 185; continue _fun86722;
 116:
                golf = _closure1_slot0;
                oscar = _closure1_slot2;
                tango = 6;
                oscar = oscar[tango];
                tango = undefined;
                verify = golf.bind(tango)(oscar);
                options = verify.interpolate;
                oscar = _closure2_slot5;
                tango = oscar.get;
                foxtrot = tango.bind(oscar)();
                romeo = _closure1_slot11;
                offset = _closure1_slot13;
                yankee = [0, 1, 0];
                backup = verify;
                mike = backup[options](foxtrot, romeo, yankee, offset, verify);
 185:
                entity = {};
                tango = {};
                oscar = _closure2_slot5;
                zulu = oscar.get;
                zulu = zulu.bind(oscar)();
                tango['translateY'] = zulu;
                zulu = new Array(2);
                zulu[0] = tango;
                tango = {};
                tango['scale'] = report;
                zulu[1] = tango;
                entity['transform'] = zulu;
                entity['opacity'] = mike;
                return entity;
            }
        };
        result = {};
        result['initialized'] = control;
        control = foxtrot[report];
        control = options.bind(tango)(control);
        control = control.interpolate;
        result['interpolate'] = control;
        result['notificationGestureY'] = source;
        result['PAN_INPUT_RANGE'] = update;
        update = _closure1_slot13;
        result['extrapolateConfig'] = update;
        result['scale'] = echo;
        zulu['__closure'] = result;
        result = 3032584613781.0;
        zulu['__workletHash'] = result;
        result = _closure1_slot22;
        zulu['__initData'] = result;
        backup = backup.bind(sizing)(zulu);
        sizing = output.useEffect;
        zulu = new Array(1);
        zulu[0] = mike;
        mike = function() {
            _fun86723: for(var _fun86723_ip = 0; ; ) switch(_fun86723_ip) {
 0:
                zulu = _closure2_slot1;
                mike = null;
                if(!(mike != zulu)) { _fun86723_ip = 59; continue _fun86723 }
 13:
                tango = _closure1_slot0;
                zulu = _closure1_slot2;
                mike = 30;
                zulu = zulu[mike];
                mike = undefined;
                mike = tango.bind(mike)(zulu);
                zulu = mike.AccessibilityAnnouncer;
                mike = zulu.announce;
                entity = _closure2_slot1;
                entity = mike.bind(zulu)(entity);
 59:
                entity = undefined;
                return entity;
            }
        };
        mike = sizing.bind(output)(mike, zulu);
        zulu = _closure1_slot10;
        entity = foxtrot[entity];
        entity = options.bind(tango)(entity);
        mike = entity.GestureDetector;
        entity = {};
        entity['gesture'] = kilo;
        report = foxtrot[report];
        report = oscar.bind(tango)(report);
        oscar = report.View;
        report = {};
        golf = _closure1_slot14;
        kilo = golf.notificationsContainer;
        golf = new Array(2);
        golf[0] = kilo;
        golf[1] = backup;
        report['style'] = golf;
        golf = 31;
        golf = foxtrot[golf];
        golf = options.bind(tango)(golf);
        options = golf.NotificationPressable;
        golf = {};
        romeo = function() { // Original name: onPress
            _fun86724: for(var _fun86724_ip = 0; ; ) switch(_fun86724_ip) {
 0:
                tango = _closure1_slot1;
                zulu = _closure1_slot2;
                entity = 32;
                zulu = zulu[entity];
                entity = undefined;
                oscar = tango.bind(entity)(zulu);
                report = oscar.trackWithMetadata;
                mike = _closure1_slot9;
                tango = mike.IN_APP_NOTIFICATION_CLICKED;
                zulu = {};
                golf = _closure2_slot0;
                golf = golf.type;
                zulu['type'] = golf;
                golf = _closure2_slot3;
                zulu['notif_guild_id'] = golf;
                golf = _closure2_slot4;
                zulu['notif_channel_id'] = golf;
                golf = global;
                verify = golf.Math;
                options = verify.floor;
                golf = _closure2_slot7;
                offset = 'number';
                golf = typeof golf;
                if(!(offset !== golf)) { _fun86724_ip = 125; continue _fun86724 }
 110:
                offset = _closure2_slot7;
                golf = offset.get;
                golf = golf.bind(offset)();
                _fun86724_ip = 129; continue _fun86724;
 125:
                golf = _closure2_slot7;
 129:
                golf = options.bind(verify)(golf);
                zulu['percent'] = golf;
                zulu = report.bind(oscar)(tango, zulu);
                tango = _closure2_slot2;
                zulu = null;
                if(!(zulu != tango)) { _fun86724_ip = 163; continue _fun86724 }
 155:
                mike = _closure2_slot2;
                mike = mike.bind(entity)();
 163:
                return entity;
            }
        };
        golf['onPress'] = romeo;
        golf['onLongPress'] = yankee;
        golf['percent'] = offset;
        golf['children'] = verify;
        golf = zulu.bind(tango)(options, golf);
        report['children'] = golf;
        report = zulu.bind(tango)(oscar, report);
        entity['children'] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['default'] = mike;
    return entity;
})();