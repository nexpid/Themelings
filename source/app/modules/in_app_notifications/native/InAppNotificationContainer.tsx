// app/modules/in_app_notifications/native/InAppNotificationContainer.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    verify = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = verify;
    var _closure1_slot2 = oscard;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    golfie = 0;
    tangon = oscard[golfie];
    entity = undefined;
    tangon = verify.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    option = oscard[tangon];
    tangon = argCor;
    tangon = tangon.bind(entity)(option);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    option = tangon.StyleSheet;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = verify.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    verify = tangon.InAppNotificationTypes;
    var _closure1_slot6 = verify;
    verify = tangon.UserSettingsSections;
    var _closure1_slot7 = verify;
    tangon = tangon.AnalyticEvents;
    var _closure1_slot8 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot9 = tangon;
    tangon = new Array(3);
    verify = -100;
    tangon[0] = verify;
    tangon[1] = golfie;
    golfie = 100;
    tangon[2] = golfie;
    var _closure1_slot10 = tangon;
    tangon = {};
    golfie = 200;
    tangon['duration'] = golfie;
    golfie = 6;
    verify = oscard[golfie];
    verify = report.bind(entity)(verify);
    offset = verify.Easing;
    verify = offset.in;
    golfie = oscard[golfie];
    golfie = report.bind(entity)(golfie);
    golfie = golfie.Easing;
    golfie = golfie.ease;
    golfie = verify.bind(offset)(golfie);
    tangon['easing'] = golfie;
    var _closure1_slot11 = tangon;
    tangon = {'extrapolateRight': 'clamp', 'extrapolateLeft': 'clamp'};
    var _closure1_slot12 = tangon;
    golfie = option.create;
    tangon = {};
    verify = {'marginLeft': 16, 'marginRight': 16};
    tangon['notificationsContainer'] = verify;
    tangon = golfie.bind(option)(tangon);
    var _closure1_slot13 = tangon;
    tangon = {};
    golfie = 'function InAppNotificationContainerTsx1(){const{runOnJS,setInitialized}=this.__closure;return runOnJS(setInitialized)(true);}';
    tangon['code'] = golfie;
    var _closure1_slot14 = tangon;
    tangon = {};
    golfie = 'function InAppNotificationContainerTsx2(finished){const{runOnJS,handleDismissNotication}=this.__closure;if(finished){runOnJS(handleDismissNotication)();}}';
    tangon['code'] = golfie;
    var _closure1_slot15 = tangon;
    tangon = {};
    golfie = 'function InAppNotificationContainerTsx3(){const{startY,notificationGestureY,velocityY,runOnJS,setProgressPaused}=this.__closure;startY.set(notificationGestureY.get());velocityY.set(0);runOnJS(setProgressPaused)(true);}';
    tangon['code'] = golfie;
    var _closure1_slot16 = tangon;
    tangon = {};
    golfie = 'function InAppNotificationContainerTsx4(event){const{notificationGestureY,startY,velocityY}=this.__closure;notificationGestureY.set(startY.get()+event.translationY);velocityY.set(event.velocityY);}';
    tangon['code'] = golfie;
    var _closure1_slot17 = tangon;
    tangon = {};
    golfie = "function InAppNotificationContainerTsx5(event){const{velocityY,MIN_SWIPE_VELOCITY,MIN_SWIPE_DISTANCE,notificationGestureY,withTiming,PAN_INPUT_RANGE,Easing,runOnJS,handleDismissNotication,setProgressPaused,withSpring}=this.__closure;const shouldDismiss=Math.abs(velocityY.get())>=MIN_SWIPE_VELOCITY||Math.abs(event.translationY)>=MIN_SWIPE_DISTANCE;if(shouldDismiss){notificationGestureY.set(withTiming(event.translationY>0?PAN_INPUT_RANGE[2]:PAN_INPUT_RANGE[0],{duration:200,easing:Easing.out(Easing.ease)},'animate-always',function(finished){if(finished){runOnJS(handleDismissNotication)();}}));}else{runOnJS(setProgressPaused)(false);notificationGestureY.set(withSpring(0,{damping:10,mass:1,stiffness:100,velocity:velocityY.get()},'animate-always'));}}";
    tangon['code'] = golfie;
    var _closure1_slot18 = tangon;
    tangon = {};
    golfie = 'function InAppNotificationContainerTsx6(finished){const{runOnJS,handleDismissNotication}=this.__closure;if(finished){runOnJS(handleDismissNotication)();}}';
    tangon['code'] = golfie;
    var _closure1_slot19 = tangon;
    tangon = {};
    golfie = 'function InAppNotificationContainerTsx7(){const{runOnJS,setProgressPaused}=this.__closure;runOnJS(setProgressPaused)(false);}';
    tangon['code'] = golfie;
    var _closure1_slot20 = tangon;
    tangon = {};
    golfie = 'function InAppNotificationContainerTsx8(){const{initialized,interpolate,notificationGestureY,PAN_INPUT_RANGE,extrapolateConfig,scale}=this.__closure;const scaleTransform=initialized?interpolate(notificationGestureY.get(),PAN_INPUT_RANGE,[0.3,1,0.3],extrapolateConfig):scale.get();const opacityTransform=initialized?interpolate(notificationGestureY.get(),PAN_INPUT_RANGE,[0,1,0],extrapolateConfig):scale.get();return{transform:[{translateY:notificationGestureY.get()},{scale:scaleTransform}],opacity:opacityTransform};}';
    tangon['code'] = golfie;
    var _closure1_slot21 = tangon;
    tangon = 33;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/in_app_notifications/native/InAppNotificationContainer.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: InAppNotificationContainer
        entity = argFoo;
        entity = entity.notification;
        var _closure2_slot0 = entity;
        michal = function(argFoo) { // Original name: getRenderProps
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                romeon = argFoo;
                var _closure3_slot0 = romeon;
                michal = romeon.type;
                entity = _closure1_slot6;
                entity = entity.MESSAGE;
                if(!(entity !== michal)) { _fun00002_ip = 607; continue _fun00001 }
 34:
                entity = _closure1_slot6;
                entity = entity.MESSAGE_FAILED_TO_SEND;
                if(!(entity !== michal)) { _fun00002_ip = 527; continue _fun00001 }
 51:
                entity = _closure1_slot6;
                entity = entity.FORUM_THREAD_CREATED;
                if(!(entity !== michal)) { _fun00002_ip = 429; continue _fun00001 }
 68:
                entity = _closure1_slot6;
                entity = entity.BUG_REPORTER;
                if(!(entity !== michal)) { _fun00002_ip = 353; continue _fun00001 }
 85:
                entity = _closure1_slot6;
                entity = entity.ALERT;
                if(!(entity !== michal)) { _fun00002_ip = 286; continue _fun00001 }
 102:
                entity = _closure1_slot6;
                entity = entity.REACTION;
                if(!(entity !== michal)) { _fun00002_ip = 198; continue _fun00001 }
 116:
                entity = _closure1_slot6;
                entity = entity.MESSAGE_REMINDER;
                if(!(entity !== michal)) { _fun00002_ip = 140; continue _fun00001 }
 130:
                entity = {};
                michal = null;
                entity['content'] = michal;
                return entity;
 140:
                entity = {};
                michal = function() { // Original name: onPress
                    tangon = _closure1_slot1;
                    report = _closure1_slot2;
                    zuuluu = 8;
                    oscard = report[zuuluu];
                    entity = undefined;
                    golfie = tangon.bind(entity)(oscard);
                    oscard = golfie.popAll;
                    oscard = oscard.bind(golfie)();
                    zuuluu = report[zuuluu];
                    offset = tangon.bind(entity)(zuuluu);
                    verify = offset.pushLazy;
                    oscard = _closure1_slot0;
                    zuuluu = 11;
                    zuuluu = report[zuuluu];
                    golfie = oscard.bind(entity)(zuuluu);
                    zuuluu = 23;
                    oscard = report[zuuluu];
                    zuuluu = report.paths;
                    backup = golfie.bind(entity)(oscard, zuuluu);
                    golfie = {};
                    zuuluu = 'modal';
                    golfie['presentation'] = zuuluu;
                    foxtra = {};
                    romeon = 'for-later-modal';
                    kiloes = offset;
                    yankee = golfie;
                    zuuluu = kiloes[verify](backup, foxtra, romeon, yankee, offset);
                    zuuluu = _closure3_slot0;
                    golfie = zuuluu.savedMessage;
                    option = zuuluu.channel;
                    oscard = zuuluu.author;
                    zuuluu = 24;
                    zuuluu = report[zuuluu];
                    report = tangon.bind(entity)(zuuluu);
                    tangon = report.track;
                    michal = _closure1_slot8;
                    zuuluu = michal.FOR_LATER_REMINDER_NOTIFICATION_CLICKED;
                    michal = {};
                    verify = option.guild_id;
                    michal['guild_id'] = verify;
                    option = option.id;
                    michal['channel_id'] = option;
                    golfie = golfie.saveData;
                    golfie = golfie.messageId;
                    michal['message_id'] = golfie;
                    oscard = oscard.id;
                    michal['message_author_id'] = oscard;
                    oscard = 'IN_APP';
                    michal['notification_type'] = oscard;
                    michal = tangon.bind(report)(zuuluu, michal);
                    return entity;
                };
                entity['onPress'] = michal;
                golfie = _closure1_slot9;
                report = _closure1_slot1;
                oscard = _closure1_slot2;
                michal = 25;
                michal = oscard[michal];
                oscard = undefined;
                report = report.bind(oscard)(michal);
                michal = {};
                michal['notification'] = romeon;
                michal = golfie.bind(oscard)(report, michal);
                entity['content'] = michal;
                return entity;
 198:
                entity = romeon.channel;
                var _closure3_slot7 = entity;
                entity = romeon.message;
                var _closure3_slot8 = entity;
                entity = {};
                michal = function() { // Original name: onPress
                    zuuluu = _closure1_slot1;
                    tangon = _closure1_slot2;
                    entity = 8;
                    report = tangon[entity];
                    entity = undefined;
                    oscard = zuuluu.bind(entity)(report);
                    report = oscard.popAll;
                    report = report.bind(oscard)();
                    report = _closure1_slot0;
                    michal = 9;
                    michal = tangon[michal];
                    option = report.bind(entity)(michal);
                    golfie = option.transitionToMessage;
                    report = _closure3_slot7;
                    oscard = report.id;
                    michal = _closure3_slot8;
                    report = michal.id;
                    michal = {};
                    verify = true;
                    michal['navigationReplace'] = verify;
                    michal = golfie.bind(option)(oscard, report, michal);
                    michal = 21;
                    michal = tangon[michal];
                    zuuluu = zuuluu.bind(entity)(michal);
                    michal = zuuluu.clearNotification;
                    michal = michal.bind(zuuluu)();
                    return entity;
                };
                entity['onPress'] = michal;
                michal = function() { // Original name: onSettingsPress
                    tangon = _closure1_slot1;
                    entity = _closure1_slot2;
                    zuuluu = 8;
                    zuuluu = entity[zuuluu];
                    oscard = undefined;
                    tangon = tangon.bind(oscard)(zuuluu);
                    zuuluu = tangon.pushLazy;
                    report = _closure1_slot0;
                    michal = 11;
                    michal = entity[michal];
                    report = report.bind(oscard)(michal);
                    michal = 10;
                    michal = entity[michal];
                    entity = entity.paths;
                    michal = report.bind(oscard)(michal, entity);
                    entity = {};
                    report = _closure3_slot7;
                    report = report.id;
                    entity['channelId'] = report;
                    entity = zuuluu.bind(tangon)(michal, entity);
                    return entity;
                };
                entity['onSettingsPress'] = michal;
                golfie = _closure1_slot9;
                report = _closure1_slot1;
                oscard = _closure1_slot2;
                michal = 22;
                michal = oscard[michal];
                oscard = undefined;
                report = report.bind(oscard)(michal);
                michal = {};
                michal['notification'] = romeon;
                michal = golfie.bind(oscard)(report, michal);
                entity['content'] = michal;
                return entity;
 286:
                entity = romeon.channel;
                var _closure3_slot6 = entity;
                entity = {};
                golfie = _closure1_slot9;
                report = _closure1_slot1;
                oscard = _closure1_slot2;
                michal = 20;
                michal = oscard[michal];
                oscard = undefined;
                report = report.bind(oscard)(michal);
                michal = {};
                michal['notification'] = romeon;
                michal = golfie.bind(oscard)(report, michal);
                entity['content'] = michal;
                michal = function() { // Original name: onPress
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot2;
                    entity = 9;
                    michal = michal[entity];
                    entity = undefined;
                    report = zuuluu.bind(entity)(michal);
                    tangon = report.transitionToChannel;
                    michal = _closure3_slot6;
                    zuuluu = michal.id;
                    michal = {};
                    oscard = true;
                    michal['navigationReplace'] = oscard;
                    michal = tangon.bind(report)(zuuluu, michal);
                    return entity;
                };
                entity['onPress'] = michal;
                return entity;
 353:
                entity = {};
                golfie = _closure1_slot9;
                report = _closure1_slot0;
                oscard = _closure1_slot2;
                michal = 19;
                michal = oscard[michal];
                oscard = undefined;
                michal = report.bind(oscard)(michal);
                report = michal.BugReporterNotification;
                michal = {};
                michal['notification'] = romeon;
                michal = golfie.bind(oscard)(report, michal);
                entity['content'] = michal;
                michal = function() { // Original name: onPress
                    _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                        tangon = _closure1_slot5;
                        zuuluu = tangon.getField;
                        entity = 'isReportOpen';
                        entity = zuuluu.bind(tangon)(entity);
                        if(entity) { _fun00004_ip = 151; continue _fun00003 }
 28:
                        tangon = _closure1_slot5;
                        zuuluu = tangon.setState;
                        entity = {};
                        report = true;
                        entity['isReportOpen'] = report;
                        entity = zuuluu.bind(tangon)(entity);
                        tangon = _closure1_slot1;
                        entity = _closure1_slot2;
                        zuuluu = 8;
                        zuuluu = entity[zuuluu];
                        oscard = undefined;
                        tangon = tangon.bind(oscard)(zuuluu);
                        zuuluu = tangon.pushLazy;
                        report = _closure1_slot0;
                        michal = 11;
                        michal = entity[michal];
                        report = report.bind(oscard)(michal);
                        michal = 17;
                        michal = entity[michal];
                        entity = entity.paths;
                        michal = report.bind(oscard)(michal, entity);
                        entity = {};
                        report = _closure3_slot0;
                        oscard = report.imageUri;
                        entity['screenshotUri'] = oscard;
                        report = report.image;
                        entity['screenshot'] = report;
                        entity = zuuluu.bind(tangon)(michal, entity);
 151:
                        entity = undefined;
                        return entity;
                    }
                };
                entity['onPress'] = michal;
                michal = function() { // Original name: onSettingsPress
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot2;
                    entity = 18;
                    michal = michal[entity];
                    entity = undefined;
                    tangon = zuuluu.bind(entity)(michal);
                    zuuluu = tangon.openUserSettings;
                    michal = {};
                    report = _closure1_slot7;
                    report = report.OVERVIEW;
                    michal['screen'] = report;
                    michal = zuuluu.bind(tangon)(michal);
                    return entity;
                };
                entity['onSettingsPress'] = michal;
                return entity;
 429:
                michal = romeon.thread;
                var _closure3_slot5 = michal;
                entity = {};
                option = _closure1_slot9;
                oscard = _closure1_slot1;
                golfie = _closure1_slot2;
                report = 16;
                report = golfie[report];
                golfie = undefined;
                oscard = oscard.bind(golfie)(report);
                report = {};
                report['notification'] = romeon;
                report = option.bind(golfie)(oscard, report);
                entity['content'] = report;
                report = function() { // Original name: onPress
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot2;
                    entity = 9;
                    michal = michal[entity];
                    entity = undefined;
                    tangon = zuuluu.bind(entity)(michal);
                    zuuluu = tangon.transitionToThread;
                    michal = _closure3_slot5;
                    michal = zuuluu.bind(tangon)(michal);
                    return entity;
                };
                entity['onPress'] = report;
                report = function() { // Original name: onSettingsPress
                    tangon = _closure1_slot1;
                    entity = _closure1_slot2;
                    zuuluu = 8;
                    zuuluu = entity[zuuluu];
                    oscard = undefined;
                    tangon = tangon.bind(oscard)(zuuluu);
                    zuuluu = tangon.pushLazy;
                    report = _closure1_slot0;
                    michal = 11;
                    michal = entity[michal];
                    report = report.bind(oscard)(michal);
                    michal = 10;
                    michal = entity[michal];
                    entity = entity.paths;
                    michal = report.bind(oscard)(michal, entity);
                    entity = {};
                    report = _closure3_slot0;
                    report = report.parentChannel;
                    report = report.id;
                    entity['channelId'] = report;
                    entity = zuuluu.bind(tangon)(michal, entity);
                    return entity;
                };
                entity['onSettingsPress'] = report;
                report = michal.guild_id;
                entity['guildId'] = report;
                michal = michal.id;
                entity['channelId'] = michal;
                return entity;
 527:
                michal = romeon.channelId;
                var _closure3_slot3 = michal;
                entity = romeon.messageId;
                var _closure3_slot4 = entity;
                entity = {};
                option = _closure1_slot9;
                oscard = _closure1_slot1;
                golfie = _closure1_slot2;
                report = 15;
                report = golfie[report];
                golfie = undefined;
                oscard = oscard.bind(golfie)(report);
                report = {};
                report['notification'] = romeon;
                report = option.bind(golfie)(oscard, report);
                entity['content'] = report;
                report = function() { // Original name: onPress
                    option = _closure1_slot0;
                    verify = _closure1_slot2;
                    entity = 9;
                    michal = verify[entity];
                    entity = undefined;
                    oscard = option.bind(entity)(michal);
                    report = oscard.transitionToMessage;
                    tangon = _closure3_slot3;
                    zuuluu = _closure3_slot4;
                    michal = {};
                    golfie = 14;
                    golfie = verify[golfie];
                    golfie = option.bind(entity)(golfie);
                    golfie = golfie.JumpTypes;
                    golfie = golfie.INSTANT;
                    michal['jumpType'] = golfie;
                    michal = report.bind(oscard)(tangon, zuuluu, michal);
                    return entity;
                };
                entity['onPress'] = report;
                entity['channelId'] = michal;
                return entity;
 607:
                michal = romeon.channel;
                var _closure3_slot1 = michal;
                option = romeon.message;
                var _closure3_slot2 = option;
                offset = _closure1_slot0;
                yankee = _closure1_slot2;
                entity = 7;
                entity = yankee[entity];
                report = undefined;
                oscard = offset.bind(report)(entity);
                entity = oscard.getMessageAuthor;
                verify = entity.bind(oscard)(option);
                entity = {};
                golfie = _closure1_slot9;
                oscard = _closure1_slot1;
                tangon = 12;
                tangon = yankee[tangon];
                oscard = oscard.bind(report)(tangon);
                tangon = {};
                tangon['notification'] = romeon;
                tangon = golfie.bind(report)(oscard, tangon);
                entity['content'] = tangon;
                tangon = 13;
                oscard = yankee[tangon];
                oscard = offset.bind(report)(oscard);
                golfie = oscard.intl;
                oscard = golfie.formatToPlainString;
                tangon = yankee[tangon];
                tangon = offset.bind(report)(tangon);
                tangon = tangon.t;
                report = tangon.Hjp1LC;
                tangon = {};
                verify = verify.nick;
                tangon['userName'] = verify;
                option = option.content;
                tangon['message'] = option;
                tangon = oscard.bind(golfie)(report, tangon);
                entity['screenReaderAnnouncement'] = tangon;
                tangon = function() { // Original name: onPress
                    report = _closure1_slot1;
                    tangon = _closure1_slot2;
                    entity = 8;
                    zuuluu = tangon[entity];
                    entity = undefined;
                    report = report.bind(entity)(zuuluu);
                    zuuluu = report.popAll;
                    zuuluu = zuuluu.bind(report)();
                    zuuluu = _closure1_slot0;
                    michal = 9;
                    michal = tangon[michal];
                    oscard = zuuluu.bind(entity)(michal);
                    report = oscard.transitionToMessage;
                    zuuluu = _closure3_slot1;
                    tangon = zuuluu.id;
                    michal = _closure3_slot2;
                    zuuluu = michal.id;
                    michal = {};
                    golfie = true;
                    michal['navigationReplace'] = golfie;
                    michal = report.bind(oscard)(tangon, zuuluu, michal);
                    return entity;
                };
                entity['onPress'] = tangon;
                zuuluu = function() { // Original name: onSettingsPress
                    tangon = _closure1_slot1;
                    entity = _closure1_slot2;
                    zuuluu = 8;
                    zuuluu = entity[zuuluu];
                    oscard = undefined;
                    tangon = tangon.bind(oscard)(zuuluu);
                    zuuluu = tangon.pushLazy;
                    report = _closure1_slot0;
                    michal = 11;
                    michal = entity[michal];
                    report = report.bind(oscard)(michal);
                    michal = 10;
                    michal = entity[michal];
                    entity = entity.paths;
                    michal = report.bind(oscard)(michal, entity);
                    entity = {};
                    report = _closure3_slot1;
                    report = report.id;
                    entity['channelId'] = report;
                    entity = zuuluu.bind(tangon)(michal, entity);
                    return entity;
                };
                entity['onSettingsPress'] = zuuluu;
                zuuluu = michal.guild_id;
                entity['guildId'] = zuuluu;
                michal = michal.id;
                entity['channelId'] = michal;
                return entity;
            }
        };
        tangon = undefined;
        zuuluu = michal.bind(tangon)(entity);
        verify = zuuluu.content;
        michal = zuuluu.screenReaderAnnouncement;
        var _closure2_slot1 = michal;
        report = zuuluu.onPress;
        var _closure2_slot2 = report;
        yankee = zuuluu.onSettingsPress;
        report = zuuluu.guildId;
        var _closure2_slot3 = report;
        zuuluu = zuuluu.channelId;
        var _closure2_slot4 = zuuluu;
        option = _closure1_slot0;
        foxtra = _closure1_slot2;
        report = 6;
        zuuluu = foxtra[report];
        oscard = option.bind(tangon)(zuuluu);
        zuuluu = oscard.useSharedValue;
        backup = 0;
        source = zuuluu.bind(oscard)(backup);
        var _closure2_slot5 = source;
        zuuluu = foxtra[report];
        oscard = option.bind(tangon)(zuuluu);
        zuuluu = oscard.useSharedValue;
        echoed = zuuluu.bind(oscard)(backup);
        var _closure2_slot6 = echoed;
        zuuluu = foxtra[report];
        offset = option.bind(tangon)(zuuluu);
        oscard = offset.useSharedValue;
        zuuluu = 100;
        offset = oscard.bind(offset)(zuuluu);
        var _closure2_slot7 = offset;
        output = _closure1_slot4;
        oscard = output.useRef;
        zuuluu = entity.duration;
        zuuluu = oscard.bind(output)(zuuluu);
        var _closure2_slot8 = zuuluu;
        zuuluu = output.useState;
        result = false;
        zuuluu = zuuluu.bind(output)(result);
        sizing = _closure1_slot3;
        kiloes = 2;
        zuuluu = sizing.bind(tangon)(zuuluu, kiloes);
        ctrled = zuuluu[backup];
        var _closure2_slot9 = ctrled;
        oscard = 1;
        zuuluu = zuuluu[oscard];
        var _closure2_slot10 = zuuluu;
        zuuluu = output.useState;
        zuuluu = zuuluu.bind(output)(result);
        zuuluu = sizing.bind(tangon)(zuuluu, kiloes);
        sizing = zuuluu[backup];
        var _closure2_slot11 = sizing;
        result = zuuluu[oscard];
        var _closure2_slot12 = result;
        vacuum = function() { // Original name: handleDismissNotication
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                michal = _closure2_slot0;
                zuuluu = michal.onDismiss;
                michal = null;
                if(!(michal != zuuluu)) { _fun00006_ip = 33; continue _fun00005 }
 19:
                michal = _closure2_slot0;
                entity = michal.onDismiss;
                entity = entity.bind(michal)();
 33:
                entity = undefined;
                return entity;
            }
        };
        var _closure2_slot13 = vacuum;
        oscard = _closure1_slot1;
        zuuluu = 26;
        zuuluu = foxtra[zuuluu];
        kiloes = oscard.bind(tangon)(zuuluu);
        zuuluu = function() {
            tangon = _closure2_slot6;
            zuuluu = tangon.set;
            foxtra = _closure1_slot0;
            backup = _closure1_slot2;
            report = 27;
            report = backup[report];
            romeon = undefined;
            verify = foxtra.bind(romeon)(report);
            option = verify.withTiming;
            output = _closure1_slot11;
            oscard = function() { // Original name: n
                michal = _closure1_slot0;
                zuuluu = _closure1_slot2;
                entity = 6;
                entity = zuuluu[entity];
                zuuluu = undefined;
                tangon = michal.bind(zuuluu)(entity);
                michal = tangon.runOnJS;
                entity = _closure2_slot10;
                michal = michal.bind(tangon)(entity);
                entity = true;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            report = {};
            yankee = 6;
            yankee = backup[yankee];
            yankee = foxtra.bind(romeon)(yankee);
            yankee = yankee.runOnJS;
            report['runOnJS'] = yankee;
            offset = _closure2_slot10;
            report['setInitialized'] = offset;
            oscard['__closure'] = report;
            report = 16158991995287.0;
            oscard['__workletHash'] = report;
            michal = _closure1_slot14;
            oscard['__initData'] = michal;
            result = 1;
            sizing = 'respect-motion-settings';
            echoed = verify;
            kiloes = oscard;
            michal = echoed[option](result, output, sizing, kiloes, backup);
            michal = zuuluu.bind(tangon)(michal);
            entity = function() {
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 6;
                michal = michal[entity];
                entity = undefined;
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.cancelAnimation;
                entity = _closure2_slot6;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            return entity;
        };
        zuuluu = kiloes.bind(tangon)(zuuluu);
        kiloes = output.useEffect;
        zuuluu = new Array(4);
        zuuluu[0] = ctrled;
        zuuluu[1] = sizing;
        zuuluu[2] = entity;
        zuuluu[3] = offset;
        entity = function() {
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                zuuluu = _closure2_slot9;
                if(!zuuluu) { _fun00008_ip = 248; continue _fun00007 }
 15:
                zuuluu = _closure2_slot11;
                if(zuuluu) { _fun00008_ip = 248; continue _fun00007 }
 25:
                zuuluu = global;
                tangon = zuuluu.Date;
                zuuluu = tangon.now;
                tangon = zuuluu.bind(tangon)();
                report = _closure2_slot8;
                zuuluu = report.current;
                zuuluu = tangon + zuuluu;
                var _closure3_slot0 = zuuluu;
                offset = function() { // Original name: handleDismissNotication
                    _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                        michal = _closure2_slot0;
                        zuuluu = michal.onDismiss;
                        michal = null;
                        if(!(michal != zuuluu)) { _fun00010_ip = 33; continue _fun00009 }
 19:
                        michal = _closure2_slot0;
                        entity = michal.onDismiss;
                        entity = entity.bind(michal)();
 33:
                        entity = undefined;
                        return entity;
                    }
                };
                var _closure3_slot1 = offset;
                tangon = _closure2_slot7;
                zuuluu = tangon.set;
                foxtra = _closure1_slot0;
                backup = _closure1_slot2;
                oscard = 27;
                oscard = backup[oscard];
                romeon = undefined;
                verify = foxtra.bind(romeon)(oscard);
                option = verify.withTiming;
                golfie = {};
                report = report.current;
                golfie['duration'] = report;
                yankee = 6;
                report = backup[yankee];
                report = foxtra.bind(romeon)(report);
                report = report.Easing;
                report = report.linear;
                golfie['easing'] = report;
                oscard = function(argFoo) { // Original name: n
                    _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                        entity = argFoo;
                        if(!entity) { _fun00012_ip = 52; continue _fun00011 }
 6:
                        zuuluu = _closure1_slot0;
                        michal = _closure1_slot2;
                        entity = 6;
                        entity = michal[entity];
                        michal = undefined;
                        tangon = zuuluu.bind(michal)(entity);
                        zuuluu = tangon.runOnJS;
                        entity = _closure3_slot1;
                        entity = zuuluu.bind(tangon)(entity);
                        entity = entity.bind(michal)();
 52:
                        entity = undefined;
                        return entity;
                    }
                };
                report = {};
                yankee = backup[yankee];
                yankee = foxtra.bind(romeon)(yankee);
                yankee = yankee.runOnJS;
                report['runOnJS'] = yankee;
                report['handleDismissNotication'] = offset;
                oscard['__closure'] = report;
                report = 8418346915328.0;
                oscard['__workletHash'] = report;
                michal = _closure1_slot15;
                oscard['__initData'] = michal;
                result = 0;
                sizing = 'animate-always';
                echoed = verify;
                output = golfie;
                kiloes = oscard;
                michal = echoed[option](result, output, sizing, kiloes, backup);
                michal = zuuluu.bind(tangon)(michal);
                entity = function() {
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot2;
                    entity = 6;
                    michal = michal[entity];
                    entity = undefined;
                    report = zuuluu.bind(entity)(michal);
                    tangon = report.cancelAnimation;
                    zuuluu = _closure2_slot7;
                    zuuluu = tangon.bind(report)(zuuluu);
                    zuuluu = _closure2_slot8;
                    tangon = _closure3_slot0;
                    michal = global;
                    report = michal.Date;
                    michal = report.now;
                    michal = michal.bind(report)();
                    michal = tangon - michal;
                    zuuluu['current'] = michal;
                    return entity;
                };
                return entity;
 248:
                entity = undefined;
                return entity;
            }
        };
        entity = kiloes.bind(output)(entity, zuuluu);
        entity = foxtra[report];
        zuuluu = option.bind(tangon)(entity);
        entity = zuuluu.useSharedValue;
        sequen = entity.bind(zuuluu)(backup);
        var _closure2_slot14 = sequen;
        entity = foxtra[report];
        zuuluu = option.bind(tangon)(entity);
        entity = zuuluu.useSharedValue;
        update = entity.bind(zuuluu)(backup);
        var _closure2_slot15 = update;
        entity = 28;
        zuuluu = foxtra[entity];
        zuuluu = option.bind(tangon)(zuuluu);
        backup = zuuluu.Gesture;
        zuuluu = backup.Pan;
        kiloes = zuuluu.bind(backup)();
        backup = kiloes.onBegin;
        zuuluu = function() { // Original name: q
            tangon = _closure2_slot14;
            zuuluu = tangon.set;
            report = _closure2_slot5;
            entity = report.get;
            entity = entity.bind(report)();
            entity = zuuluu.bind(tangon)(entity);
            tangon = _closure2_slot15;
            zuuluu = tangon.set;
            entity = 0;
            entity = zuuluu.bind(tangon)(entity);
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 6;
            zuuluu = zuuluu[entity];
            entity = undefined;
            tangon = tangon.bind(entity)(zuuluu);
            zuuluu = tangon.runOnJS;
            michal = _closure2_slot12;
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = true;
            michal = zuuluu.bind(entity)(michal);
            return entity;
        };
        sizing = {};
        sizing['startY'] = sequen;
        sizing['notificationGestureY'] = source;
        sizing['velocityY'] = update;
        config = foxtra[report];
        config = option.bind(tangon)(config);
        config = config.runOnJS;
        sizing['runOnJS'] = config;
        sizing['setProgressPaused'] = result;
        zuuluu['__closure'] = sizing;
        sizing = 13063567097082.0;
        zuuluu['__workletHash'] = sizing;
        sizing = _closure1_slot16;
        zuuluu['__initData'] = sizing;
        kiloes = backup.bind(kiloes)(zuuluu);
        backup = kiloes.onUpdate;
        zuuluu = function(argFoo) { // Original name: K
            entity = argFoo;
            report = _closure2_slot5;
            tangon = report.set;
            oscard = _closure2_slot14;
            zuuluu = oscard.get;
            oscard = zuuluu.bind(oscard)();
            zuuluu = entity.translationY;
            zuuluu = oscard + zuuluu;
            zuuluu = tangon.bind(report)(zuuluu);
            zuuluu = _closure2_slot15;
            michal = zuuluu.set;
            entity = entity.velocityY;
            entity = michal.bind(zuuluu)(entity);
            entity = undefined;
            return entity;
        };
        sizing = {};
        sizing['notificationGestureY'] = source;
        sizing['startY'] = sequen;
        sizing['velocityY'] = update;
        zuuluu['__closure'] = sizing;
        sizing = 14599266811227.0;
        zuuluu['__workletHash'] = sizing;
        sizing = _closure1_slot17;
        zuuluu['__initData'] = sizing;
        kiloes = backup.bind(kiloes)(zuuluu);
        backup = kiloes.onEnd;
        zuuluu = function(argFoo) { // Original name: B
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                tangon = argFoo;
                entity = global;
                report = entity.Math;
                zuuluu = report.abs;
                oscard = _closure2_slot15;
                michal = oscard.get;
                michal = michal.bind(oscard)();
                zuuluu = zuuluu.bind(report)(michal);
                michal = 100;
                if(!(!(zuuluu >= michal))) { _fun00014_ip = 210; continue _fun00013 }
 48:
                zuuluu = entity.Math;
                michal = zuuluu.abs;
                entity = tangon.translationY;
                michal = michal.bind(zuuluu)(entity);
                entity = 25;
                if(!(!(michal >= entity))) { _fun00014_ip = 210; continue _fun00013 }
 81:
                oscard = _closure1_slot0;
                golfie = _closure1_slot2;
                entity = 6;
                entity = golfie[entity];
                report = undefined;
                zuuluu = oscard.bind(report)(entity);
                michal = zuuluu.runOnJS;
                entity = _closure2_slot12;
                michal = michal.bind(zuuluu)(entity);
                entity = false;
                entity = michal.bind(report)(entity);
                zuuluu = _closure2_slot5;
                michal = zuuluu.set;
                entity = 29;
                entity = golfie[entity];
                option = oscard.bind(report)(entity);
                golfie = option.withSpring;
                oscard = {'damping': 10, 'mass': 1, 'stiffness': 100};
                report = _closure2_slot15;
                entity = report.get;
                entity = entity.bind(report)();
                oscard['velocity'] = entity;
                report = 0;
                entity = 'animate-always';
                entity = golfie.bind(option)(report, oscard, entity);
                entity = michal.bind(zuuluu)(entity);
                _fun00014_ip = 451; continue _fun00013;
 210:
                zuuluu = _closure2_slot5;
                michal = zuuluu.set;
                oscard = _closure1_slot0;
                golfie = _closure1_slot2;
                report = 27;
                report = golfie[report];
                foxtra = undefined;
                option = oscard.bind(foxtra)(report);
                golfie = option.withTiming;
                tangon = tangon.translationY;
                report = 0;
                if(!(!(tangon > report))) { _fun00014_ip = 271; continue _fun00013 }
 261:
                tangon = _closure1_slot10;
                oscard = tangon[report];
                _fun00014_ip = 282; continue _fun00013;
 271:
                report = _closure1_slot10;
                tangon = 2;
                oscard = report[tangon];
 282:
                report = {};
                tangon = 200;
                report['duration'] = tangon;
                romeon = _closure1_slot0;
                backup = _closure1_slot2;
                yankee = 6;
                tangon = backup[yankee];
                tangon = romeon.bind(foxtra)(tangon);
                kiloes = tangon.Easing;
                verify = kiloes.out;
                tangon = backup[yankee];
                tangon = romeon.bind(foxtra)(tangon);
                tangon = tangon.Easing;
                tangon = tangon.ease;
                tangon = verify.bind(kiloes)(tangon);
                report['easing'] = tangon;
                tangon = function(argFoo) { // Original name: t
                    _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                        entity = argFoo;
                        if(!entity) { _fun00016_ip = 52; continue _fun00015 }
 6:
                        zuuluu = _closure1_slot0;
                        michal = _closure1_slot2;
                        entity = 6;
                        entity = michal[entity];
                        michal = undefined;
                        tangon = zuuluu.bind(michal)(entity);
                        zuuluu = tangon.runOnJS;
                        entity = _closure2_slot13;
                        entity = zuuluu.bind(tangon)(entity);
                        entity = entity.bind(michal)();
 52:
                        entity = undefined;
                        return entity;
                    }
                };
                verify = {};
                yankee = backup[yankee];
                yankee = romeon.bind(foxtra)(yankee);
                yankee = yankee.runOnJS;
                verify['runOnJS'] = yankee;
                offset = _closure2_slot13;
                verify['handleDismissNotication'] = offset;
                tangon['__closure'] = verify;
                verify = 14149012899076.0;
                tangon['__workletHash'] = verify;
                entity = _closure1_slot19;
                tangon['__initData'] = entity;
                output = 'animate-always';
                update = option;
                echoed = oscard;
                result = report;
                sizing = tangon;
                entity = update[golfie](echoed, result, output, sizing, kiloes);
                entity = michal.bind(zuuluu)(entity);
 451:
                entity = undefined;
                return entity;
            }
        };
        sizing = {'velocityY': null, 'MIN_SWIPE_VELOCITY': 100, 'MIN_SWIPE_DISTANCE': 25};
        sizing['velocityY'] = update;
        sizing['notificationGestureY'] = source;
        update = 27;
        update = foxtra[update];
        update = option.bind(tangon)(update);
        update = update.withTiming;
        sizing['withTiming'] = update;
        update = _closure1_slot10;
        sizing['PAN_INPUT_RANGE'] = update;
        sequen = foxtra[report];
        sequen = option.bind(tangon)(sequen);
        sequen = sequen.Easing;
        sizing['Easing'] = sequen;
        sequen = foxtra[report];
        sequen = option.bind(tangon)(sequen);
        sequen = sequen.runOnJS;
        sizing['runOnJS'] = sequen;
        sizing['handleDismissNotication'] = vacuum;
        sizing['setProgressPaused'] = result;
        vacuum = 29;
        vacuum = foxtra[vacuum];
        vacuum = option.bind(tangon)(vacuum);
        vacuum = vacuum.withSpring;
        sizing['withSpring'] = vacuum;
        zuuluu['__closure'] = sizing;
        sizing = 4090851366383.0;
        zuuluu['__workletHash'] = sizing;
        sizing = _closure1_slot18;
        zuuluu['__initData'] = sizing;
        kiloes = backup.bind(kiloes)(zuuluu);
        backup = kiloes.onFinalize;
        zuuluu = function() { // Original name: j
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 6;
            michal = michal[entity];
            entity = undefined;
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.runOnJS;
            michal = _closure2_slot12;
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = false;
            michal = zuuluu.bind(entity)(michal);
            return entity;
        };
        sizing = {};
        vacuum = foxtra[report];
        vacuum = option.bind(tangon)(vacuum);
        vacuum = vacuum.runOnJS;
        sizing['runOnJS'] = vacuum;
        sizing['setProgressPaused'] = result;
        zuuluu['__closure'] = sizing;
        sizing = 10763542283312.0;
        zuuluu['__workletHash'] = sizing;
        sizing = _closure1_slot20;
        zuuluu['__initData'] = sizing;
        kiloes = backup.bind(kiloes)(zuuluu);
        zuuluu = foxtra[report];
        sizing = option.bind(tangon)(zuuluu);
        backup = sizing.useAnimatedStyle;
        zuuluu = function() { // Original name: Q
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                entity = _closure2_slot9;
                if(entity) { _fun00018_ip = 25; continue _fun00017 }
 10:
                michal = _closure2_slot6;
                entity = michal.get;
                report = entity.bind(michal)();
                _fun00018_ip = 94; continue _fun00017;
 25:
                oscard = _closure1_slot0;
                tangon = _closure1_slot2;
                michal = 6;
                tangon = tangon[michal];
                michal = undefined;
                option = oscard.bind(michal)(tangon);
                golfie = option.interpolate;
                tangon = _closure2_slot5;
                michal = tangon.get;
                foxtra = michal.bind(tangon)();
                romeon = _closure1_slot10;
                offset = _closure1_slot12;
                yankee = [0.3, 1, 0.3];
                backup = option;
                report = backup[golfie](foxtra, romeon, yankee, offset, verify);
 94:
                entity = _closure2_slot9;
                if(entity) { _fun00018_ip = 116; continue _fun00017 }
 101:
                michal = _closure2_slot6;
                entity = michal.get;
                michal = entity.bind(michal)();
                _fun00018_ip = 185; continue _fun00017;
 116:
                golfie = _closure1_slot0;
                oscard = _closure1_slot2;
                tangon = 6;
                oscard = oscard[tangon];
                tangon = undefined;
                verify = golfie.bind(tangon)(oscard);
                option = verify.interpolate;
                oscard = _closure2_slot5;
                tangon = oscard.get;
                foxtra = tangon.bind(oscard)();
                romeon = _closure1_slot10;
                offset = _closure1_slot12;
                yankee = [0, 1, 0];
                backup = verify;
                michal = backup[option](foxtra, romeon, yankee, offset, verify);
 185:
                entity = {};
                tangon = {};
                oscard = _closure2_slot5;
                zuuluu = oscard.get;
                zuuluu = zuuluu.bind(oscard)();
                tangon['translateY'] = zuuluu;
                zuuluu = new Array(2);
                zuuluu[0] = tangon;
                tangon = {};
                tangon['scale'] = report;
                zuuluu[1] = tangon;
                entity['transform'] = zuuluu;
                entity['opacity'] = michal;
                return entity;
            }
        };
        result = {};
        result['initialized'] = ctrled;
        ctrled = foxtra[report];
        ctrled = option.bind(tangon)(ctrled);
        ctrled = ctrled.interpolate;
        result['interpolate'] = ctrled;
        result['notificationGestureY'] = source;
        result['PAN_INPUT_RANGE'] = update;
        update = _closure1_slot12;
        result['extrapolateConfig'] = update;
        result['scale'] = echoed;
        zuuluu['__closure'] = result;
        result = 3032584613781.0;
        zuuluu['__workletHash'] = result;
        result = _closure1_slot21;
        zuuluu['__initData'] = result;
        backup = backup.bind(sizing)(zuuluu);
        sizing = output.useEffect;
        zuuluu = new Array(1);
        zuuluu[0] = michal;
        michal = function() {
            _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                zuuluu = _closure2_slot1;
                michal = null;
                if(!(michal != zuuluu)) { _fun00020_ip = 59; continue _fun00019 }
 13:
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot2;
                michal = 30;
                zuuluu = zuuluu[michal];
                michal = undefined;
                michal = tangon.bind(michal)(zuuluu);
                zuuluu = michal.AccessibilityAnnouncer;
                michal = zuuluu.announce;
                entity = _closure2_slot1;
                entity = michal.bind(zuuluu)(entity);
 59:
                entity = undefined;
                return entity;
            }
        };
        michal = sizing.bind(output)(michal, zuuluu);
        zuuluu = _closure1_slot9;
        entity = foxtra[entity];
        entity = option.bind(tangon)(entity);
        michal = entity.GestureDetector;
        entity = {};
        entity['gesture'] = kiloes;
        report = foxtra[report];
        report = oscard.bind(tangon)(report);
        oscard = report.View;
        report = {};
        golfie = _closure1_slot13;
        kiloes = golfie.notificationsContainer;
        golfie = new Array(2);
        golfie[0] = kiloes;
        golfie[1] = backup;
        report['style'] = golfie;
        golfie = 31;
        golfie = foxtra[golfie];
        golfie = option.bind(tangon)(golfie);
        option = golfie.NotificationPressable;
        golfie = {};
        romeon = function() { // Original name: onPress
            _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                tangon = _closure1_slot1;
                zuuluu = _closure1_slot2;
                entity = 32;
                zuuluu = zuuluu[entity];
                entity = undefined;
                oscard = tangon.bind(entity)(zuuluu);
                report = oscard.trackWithMetadata;
                michal = _closure1_slot8;
                tangon = michal.IN_APP_NOTIFICATION_CLICKED;
                zuuluu = {};
                golfie = _closure2_slot0;
                golfie = golfie.type;
                zuuluu['type'] = golfie;
                golfie = _closure2_slot3;
                zuuluu['notif_guild_id'] = golfie;
                golfie = _closure2_slot4;
                zuuluu['notif_channel_id'] = golfie;
                golfie = global;
                verify = golfie.Math;
                option = verify.floor;
                golfie = _closure2_slot7;
                offset = 'number';
                golfie = typeof golfie;
                if(!(offset !== golfie)) { _fun00022_ip = 125; continue _fun00021 }
 110:
                offset = _closure2_slot7;
                golfie = offset.get;
                golfie = golfie.bind(offset)();
                _fun00022_ip = 129; continue _fun00021;
 125:
                golfie = _closure2_slot7;
 129:
                golfie = option.bind(verify)(golfie);
                zuuluu['percent'] = golfie;
                zuuluu = report.bind(oscard)(tangon, zuuluu);
                tangon = _closure2_slot2;
                zuuluu = null;
                if(!(zuuluu != tangon)) { _fun00022_ip = 163; continue _fun00021 }
 155:
                michal = _closure2_slot2;
                michal = michal.bind(entity)();
 163:
                return entity;
            }
        };
        golfie['onPress'] = romeon;
        golfie['onLongPress'] = yankee;
        golfie['percent'] = offset;
        golfie['children'] = verify;
        golfie = zuuluu.bind(tangon)(option, golfie);
        report['children'] = golfie;
        report = zuuluu.bind(tangon)(oscard, report);
        entity['children'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['default'] = michal;
    return entity;
})();