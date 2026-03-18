// app/modules/in_app_notifications/native/InAppNotificationContainer.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var1 = function hasMultipleChannelsOnStack() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 8;
            var1 = var3[var1];
            var8 = undefined;
            var2 = var2.bind(var8)(var1);
            var1 = var2.getRootNavigationRef;
            var2 = var1.bind(var2)();
            var7 = null;
            if(!(var7 != var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var2.isReady;
            var1 = var1.bind(var2)();
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var1 = var2.getRootState;
            var1 = var1.bind(var2)();
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var6 = 9;
            var2 = var2[var6];
            var4 = var3.bind(var8)(var2);
            var3 = var4.coerceMainRoute;
            var2 = var1.routes;
            var1 = 0;
            var2 = var2[var1];
            var2 = var3.bind(var4)(var2);
            var4 = var7 == var2;
            var3 = undefined;
            if(var4) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var3 = var2.state;
case 5:
            if(!(var7 != var3)) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var3 = var2.state;
            var5 = var3.routes;
            var2 = var2.state;
            var4 = var2.index;
            var10 = var1 <= var4;
            var3 = 2;
            var2 = 0;
            var1 = 0;
            if(!var10) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var11 = _closure1_slot0;
            var10 = _closure1_slot2;
            var10 = var10[var6];
            var12 = var11.bind(var8)(var10);
            var11 = var12.coerceChannelRoute;
            var10 = var5[var1];
            var11 = var11.bind(var12)(var10);
            var10 = var2;
            if(!(var7 != var11)) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var10 = var2 + 1;
            if(!(!(var10 >= var3))) { _fun0001_ip = 13; continue _fun0001 }
case 11:
            var1 = var1 + 1;
            var2 = var10;
            if(var1 <= var4) { _fun0001_ip = 10; continue _fun0001 }
case 9:
            var1 = false;
            return var1;
case 13:
            var1 = true;
            return var1;
case 7:
            var1 = false;
            return var1;
case 2:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot28 = var1;
    var1 = function trackDismissed(arg1) {
        var1 = arg1;
        var9 = var1.guildId;
        var8 = var1.channelId;
        var10 = var1.type;
        var7 = var1.dismissReason;
        var6 = var1.inAppNotificationId;
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 30;
        var3 = var3[var1];
        var1 = undefined;
        var5 = var4.bind(var1)(var3);
        var4 = var5.trackWithMetadata;
        var2 = _closure1_slot9;
        var3 = var2.IN_APP_NOTIFICATION_DISMISSED;
        var2 = {};
        var2['type'] = var10;
        var2['guild_id'] = var9;
        var2['channel_id'] = var8;
        var2['dismiss_reason'] = var7;
        var2['in_app_notification_id'] = var6;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var _closure1_slot29 = var1;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var4);
    var7 = 0;
    var4 = var6[var7];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var9 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var9);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.InAppNotificationTypes;
    var _closure1_slot7 = var8;
    var8 = var4.UserSettingsSections;
    var _closure1_slot8 = var8;
    var4 = var4.AnalyticEvents;
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot10 = var4;
    var4 = {'mass': 1, 'overshootClamping': true, 'damping': 27, 'stiffness': 300};
    var _closure1_slot11 = var4;
    var4 = new Array(3);
    var8 = -100;
    var4[0] = var8;
    var4[1] = var7;
    var7 = 100;
    var4[2] = var7;
    var _closure1_slot12 = var4;
    var4 = {};
    var7 = 200;
    var4['duration'] = var7;
    var7 = 6;
    var8 = var6[var7];
    var8 = var5.bind(var1)(var8);
    var9 = var8.Easing;
    var8 = var9.in;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.Easing;
    var7 = var7.ease;
    var7 = var8.bind(var9)(var7);
    var4['easing'] = var7;
    var _closure1_slot13 = var4;
    var4 = {'extrapolateRight': 'clamp', 'extrapolateLeft': 'clamp'};
    var _closure1_slot14 = var4;
    var4 = 7;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'marginLeft': 16, 'marginRight': 16};
    var4['animatedContainer'] = var9;
    var9 = {'position': 'absolute', 'left': 0, 'right': 0, 'backgroundColor': 'transparent', 'marginTop': 8};
    var4['safeAreaContainer'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot15 = var4;
    var4 = {};
    var7 = 'function InAppNotificationContainerTsx1(){const{runOnJS,setInitialized}=this.__closure;return runOnJS(setInitialized)(true);}';
    var4['code'] = var7;
    var _closure1_slot16 = var4;
    var4 = {};
    var7 = "function InAppNotificationContainerTsx2(finished){const{runOnJS,handleDismissNotification}=this.__closure;if(finished){runOnJS(handleDismissNotification)('timeout');}}";
    var4['code'] = var7;
    var _closure1_slot17 = var4;
    var4 = {};
    var7 = 'function InAppNotificationContainerTsx3(){const{pressed,withSpring,ON_PRESS_SPRING_CONFIG}=this.__closure;pressed.set(withSpring(0,ON_PRESS_SPRING_CONFIG));}';
    var4['code'] = var7;
    var _closure1_slot18 = var4;
    var4 = {};
    var7 = 'function InAppNotificationContainerTsx4(_,success){const{runOnJS,handlePress}=this.__closure;if(success){runOnJS(handlePress)();}}';
    var4['code'] = var7;
    var _closure1_slot19 = var4;
    var4 = {};
    var7 = 'function InAppNotificationContainerTsx5(){const{pressed,withSpring,ON_PRESS_SPRING_CONFIG}=this.__closure;pressed.set(withSpring(1,ON_PRESS_SPRING_CONFIG));}';
    var4['code'] = var7;
    var _closure1_slot20 = var4;
    var4 = {};
    var7 = 'function InAppNotificationContainerTsx6(){const{runOnJS,setProgressPaused}=this.__closure;runOnJS(setProgressPaused)(false);}';
    var4['code'] = var7;
    var _closure1_slot21 = var4;
    var4 = {};
    var7 = "function InAppNotificationContainerTsx7(event){const{velocityY,MIN_SWIPE_VELOCITY,MIN_SWIPE_DISTANCE,notificationGestureY,withTiming,PAN_INPUT_RANGE,Easing,runOnJS,handleDismissNotification,setProgressPaused,withSpring}=this.__closure;const shouldDismiss=Math.abs(velocityY.get())>=MIN_SWIPE_VELOCITY||Math.abs(event.translationY)>=MIN_SWIPE_DISTANCE;if(shouldDismiss){notificationGestureY.set(withTiming(event.translationY>0?PAN_INPUT_RANGE[2]:PAN_INPUT_RANGE[0],{duration:200,easing:Easing.out(Easing.ease)},'animate-always',function(finished){if(finished){runOnJS(handleDismissNotification)('swipe');}}));}else{runOnJS(setProgressPaused)(false);notificationGestureY.set(withSpring(0,{damping:10,mass:1,stiffness:100,velocity:velocityY.get()},'animate-always'));}}";
    var4['code'] = var7;
    var _closure1_slot22 = var4;
    var4 = {};
    var7 = 'function InAppNotificationContainerTsx8(event){const{notificationGestureY,startY,velocityY}=this.__closure;notificationGestureY.set(startY.get()+event.translationY);velocityY.set(event.velocityY);}';
    var4['code'] = var7;
    var _closure1_slot23 = var4;
    var4 = {};
    var7 = 'function InAppNotificationContainerTsx9(){const{startY,notificationGestureY,velocityY,runOnJS,setProgressPaused}=this.__closure;startY.set(notificationGestureY.get());velocityY.set(0);runOnJS(setProgressPaused)(true);}';
    var4['code'] = var7;
    var _closure1_slot24 = var4;
    var4 = {};
    var7 = "function InAppNotificationContainerTsx10(finished){const{runOnJS,handleDismissNotification}=this.__closure;if(finished){runOnJS(handleDismissNotification)('swipe');}}";
    var4['code'] = var7;
    var _closure1_slot25 = var4;
    var4 = {};
    var7 = 'function InAppNotificationContainerTsx11(){const{initialized,interpolate,notificationGestureY,PAN_INPUT_RANGE,extrapolateConfig,scale}=this.__closure;const scaleTransform=initialized?interpolate(notificationGestureY.get(),PAN_INPUT_RANGE,[0.3,1,0.3],extrapolateConfig):scale.get();const opacityTransform=initialized?interpolate(notificationGestureY.get(),PAN_INPUT_RANGE,[0,1,0],extrapolateConfig):scale.get();return{transform:[{translateY:notificationGestureY.get()},{scale:scaleTransform}],opacity:opacityTransform};}';
    var4['code'] = var7;
    var _closure1_slot26 = var4;
    var4 = {};
    var7 = 'function InAppNotificationContainerTsx12(){const{interpolate,pressed}=this.__closure;const tapScale=interpolate(pressed.get(),[0,1],[1,0.95]);return{transform:[{scale:tapScale}]};}';
    var4['code'] = var7;
    var _closure1_slot27 = var4;
    var4 = 40;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/in_app_notifications/native/InAppNotificationContainer.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function InAppNotificationContainer(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var17 = var2.notification;
            var _closure2_slot0 = var17;
            var2 = _closure1_slot15;
            var4 = undefined;
            var21 = var2.bind(var4)();
            var2 = function getRenderProps(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var12 = arg1;
                    var _closure3_slot0 = var12;
                    var2 = var12.type;
                    var1 = _closure1_slot7;
                    var1 = var1.MESSAGE;
                    if(!(var1 !== var2)) { _fun0003_ip = 14; continue _fun0003 }
case 15:
                    var1 = _closure1_slot7;
                    var1 = var1.MESSAGE_FAILED_TO_SEND;
                    if(!(var1 !== var2)) { _fun0003_ip = 16; continue _fun0003 }
case 17:
                    var1 = _closure1_slot7;
                    var1 = var1.FORUM_THREAD_CREATED;
                    if(!(var1 !== var2)) { _fun0003_ip = 18; continue _fun0003 }
case 19:
                    var1 = _closure1_slot7;
                    var1 = var1.BUG_REPORTER;
                    if(!(var1 !== var2)) { _fun0003_ip = 20; continue _fun0003 }
case 21:
                    var1 = _closure1_slot7;
                    var1 = var1.ALERT;
                    if(!(var1 !== var2)) { _fun0003_ip = 22; continue _fun0003 }
case 23:
                    var1 = _closure1_slot7;
                    var1 = var1.REACTION;
                    if(!(var1 !== var2)) { _fun0003_ip = 24; continue _fun0003 }
case 25:
                    var1 = _closure1_slot7;
                    var1 = var1.MESSAGE_REMINDER;
                    if(!(var1 !== var2)) { _fun0003_ip = 26; continue _fun0003 }
case 27:
                    var1 = {};
                    var2 = null;
                    var1['content'] = var2;
                    return var1;
case 26:
                    var1 = var12.channel;
                    var5 = var1.guild_id;
                    var _closure3_slot11 = var5;
                    var2 = var1.id;
                    var _closure3_slot12 = var2;
                    var1 = {};
                    var6 = function onPress() {
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var3 = 11;
                        var6 = var5[var3];
                        var1 = undefined;
                        var7 = var4.bind(var1)(var6);
                        var6 = var7.popAll;
                        var6 = var6.bind(var7)();
                        var3 = var5[var3];
                        var10 = var4.bind(var1)(var3);
                        var9 = var10.pushLazy;
                        var6 = _closure1_slot0;
                        var3 = 15;
                        var3 = var5[var3];
                        var7 = var6.bind(var1)(var3);
                        var3 = 27;
                        var6 = var5[var3];
                        var3 = var5.paths;
                        var14 = var7.bind(var1)(var6, var3);
                        var7 = {};
                        var3 = 'modal';
                        var7['presentation'] = var3;
                        var13 = {};
                        var12 = 'for-later-modal';
                        var15 = var10;
                        var11 = var7;
                        var3 = var15[var9](var14, var13, var12, var11, var10);
                        var3 = _closure3_slot0;
                        var7 = var3.savedMessage;
                        var6 = var3.author;
                        var3 = 28;
                        var3 = var5[var3];
                        var5 = var4.bind(var1)(var3);
                        var4 = var5.track;
                        var2 = _closure1_slot9;
                        var3 = var2.FOR_LATER_REMINDER_NOTIFICATION_CLICKED;
                        var2 = {};
                        var9 = _closure3_slot11;
                        var2['guild_id'] = var9;
                        var8 = _closure3_slot12;
                        var2['channel_id'] = var8;
                        var7 = var7.saveData;
                        var7 = var7.messageId;
                        var2['message_id'] = var7;
                        var6 = var6.id;
                        var2['message_author_id'] = var6;
                        var6 = 'IN_APP';
                        var2['notification_type'] = var6;
                        var2 = var4.bind(var5)(var3, var2);
                        return var1;
                    };
                    var1['onPress'] = var6;
                    var9 = _closure1_slot10;
                    var7 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var6 = 29;
                    var6 = var8[var6];
                    var8 = undefined;
                    var7 = var7.bind(var8)(var6);
                    var6 = {};
                    var6['notification'] = var12;
                    var6 = var9.bind(var8)(var7, var6);
                    var1['content'] = var6;
                    var1['guildId'] = var5;
                    var1['channelId'] = var2;
                    return var1;
case 24:
                    var1 = var12.channel;
                    var _closure3_slot7 = var1;
                    var6 = var12.guild;
                    var2 = var12.message;
                    var _closure3_slot8 = var2;
                    var2 = null;
                    var7 = var2 == var6;
                    var9 = undefined;
                    var5 = undefined;
                    if(var7) { _fun0003_ip = 28; continue _fun0003 }
case 29:
                    var5 = var6.id;
case 28:
                    if(!(var2 == var5)) { _fun0003_ip = 30; continue _fun0003 }
case 31:
                    var5 = var1.guild_id;
case 30:
                    var _closure3_slot9 = var5;
                    var2 = var1.id;
                    var _closure3_slot10 = var2;
                    var1 = {};
                    var6 = function onPress() {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                            var5 = _closure1_slot29;
                            var4 = {};
                            var1 = _closure3_slot0;
                            var6 = var1.type;
                            var4['type'] = var6;
                            var6 = 'notification_clicked';
                            var4['dismissReason'] = var6;
                            var6 = _closure3_slot9;
                            var4['guildId'] = var6;
                            var6 = _closure3_slot10;
                            var4['channelId'] = var6;
                            var1 = var1.inAppNotificationId;
                            var4['inAppNotificationId'] = var1;
                            var1 = undefined;
                            var4 = var5.bind(var1)(var4);
                            var5 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var4 = 11;
                            var4 = var6[var4];
                            var5 = var5.bind(var1)(var4);
                            var4 = var5.popAll;
                            var4 = var4.bind(var5)();
                            var4 = _closure1_slot28;
                            var4 = var4.bind(var1)();
                            var9 = true;
                            if(var4) { _fun0004_ip = 32; continue _fun0004 }
case 33:
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var4 = 12;
                            var4 = var6[var4];
                            var4 = var5.bind(var1)(var4);
                            var6 = var4.InAppNotificationNavigationExperiment;
                            var5 = var6.getConfig;
                            var4 = {};
                            var7 = 'in-app-notification';
                            var4['location'] = var7;
                            var4 = var5.bind(var6)(var4);
                            var4 = var4.enableStackNavigation;
                            var9 = !var4;
case 32:
                            var6 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var5 = 13;
                            var5 = var4[var5];
                            var8 = var6.bind(var1)(var5);
                            var7 = var8.transitionToMessage;
                            var5 = _closure3_slot7;
                            var6 = var5.id;
                            var3 = _closure3_slot8;
                            var5 = var3.id;
                            var3 = {};
                            var3['navigationReplace'] = var9;
                            var3 = var7.bind(var8)(var6, var5, var3);
                            var3 = _closure1_slot1;
                            var2 = 21;
                            var2 = var4[var2];
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.clearNotification;
                            var2 = var2.bind(var3)();
                            return var1;
                        }
                    };
                    var1['onPress'] = var6;
                    var6 = function onSettingsPress() {
                        var4 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var3 = 11;
                        var3 = var1[var3];
                        var6 = undefined;
                        var4 = var4.bind(var6)(var3);
                        var3 = var4.pushLazy;
                        var5 = _closure1_slot0;
                        var2 = 15;
                        var2 = var1[var2];
                        var5 = var5.bind(var6)(var2);
                        var2 = 14;
                        var2 = var1[var2];
                        var1 = var1.paths;
                        var2 = var5.bind(var6)(var2, var1);
                        var1 = {};
                        var5 = _closure3_slot10;
                        var1['channelId'] = var5;
                        var1 = var3.bind(var4)(var2, var1);
                        return var1;
                    };
                    var1['onSettingsPress'] = var6;
                    var8 = _closure1_slot10;
                    var7 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var6 = 26;
                    var6 = var10[var6];
                    var7 = var7.bind(var9)(var6);
                    var6 = {};
                    var6['notification'] = var12;
                    var6 = var8.bind(var9)(var7, var6);
                    var1['content'] = var6;
                    var1['guildId'] = var5;
                    var1['channelId'] = var2;
                    return var1;
case 22:
                    var2 = var12.channel;
                    var _closure3_slot6 = var2;
                    var1 = {};
                    var8 = _closure1_slot10;
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var5 = 25;
                    var5 = var7[var5];
                    var7 = undefined;
                    var6 = var6.bind(var7)(var5);
                    var5 = {};
                    var5['notification'] = var12;
                    var5 = var8.bind(var7)(var6, var5);
                    var1['content'] = var5;
                    var5 = function onPress() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 13;
                        var2 = var2[var1];
                        var1 = undefined;
                        var5 = var3.bind(var1)(var2);
                        var4 = var5.transitionToChannel;
                        var2 = _closure3_slot6;
                        var3 = var2.id;
                        var2 = {};
                        var6 = true;
                        var2['navigationReplace'] = var6;
                        var2 = var4.bind(var5)(var3, var2);
                        return var1;
                    };
                    var1['onPress'] = var5;
                    var5 = var2.guild_id;
                    var1['guildId'] = var5;
                    var2 = var2.id;
                    var1['channelId'] = var2;
                    return var1;
case 20:
                    var1 = {};
                    var7 = _closure1_slot10;
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var2 = 24;
                    var2 = var6[var2];
                    var6 = undefined;
                    var2 = var5.bind(var6)(var2);
                    var5 = var2.BugReporterNotification;
                    var2 = {};
                    var2['notification'] = var12;
                    var2 = var7.bind(var6)(var5, var2);
                    var1['content'] = var2;
                    var2 = function onPress() {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                            var4 = _closure1_slot5;
                            var3 = var4.getField;
                            var1 = 'isReportOpen';
                            var1 = var3.bind(var4)(var1);
                            if(var1) { _fun0005_ip = 2; continue _fun0005 }
case 34:
                            var3 = _closure1_slot29;
                            var1 = {};
                            var5 = _closure3_slot0;
                            var4 = var5.type;
                            var1['type'] = var4;
                            var4 = 'notification_clicked';
                            var1['dismissReason'] = var4;
                            var4 = var5.inAppNotificationId;
                            var1['inAppNotificationId'] = var4;
                            var7 = undefined;
                            var1 = var3.bind(var7)(var1);
                            var4 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var3 = 11;
                            var6 = var1[var3];
                            var8 = var4.bind(var7)(var6);
                            var6 = var8.popAll;
                            var6 = var6.bind(var8)();
                            var6 = 21;
                            var6 = var1[var6];
                            var8 = var4.bind(var7)(var6);
                            var6 = var8.clearNotification;
                            var6 = var6.bind(var8)();
                            var9 = _closure1_slot5;
                            var8 = var9.setState;
                            var6 = {};
                            var10 = true;
                            var6['isReportOpen'] = var10;
                            var6 = var8.bind(var9)(var6);
                            var3 = var1[var3];
                            var4 = var4.bind(var7)(var3);
                            var3 = var4.pushLazy;
                            var6 = _closure1_slot0;
                            var2 = 15;
                            var2 = var1[var2];
                            var6 = var6.bind(var7)(var2);
                            var2 = 22;
                            var2 = var1[var2];
                            var1 = var1.paths;
                            var2 = var6.bind(var7)(var2, var1);
                            var1 = {};
                            var6 = var5.imageUri;
                            var1['screenshotUri'] = var6;
                            var5 = var5.image;
                            var1['screenshot'] = var5;
                            var1 = var3.bind(var4)(var2, var1);
case 2:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var1['onPress'] = var2;
                    var2 = function onSettingsPress() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 23;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.openUserSettings;
                        var2 = {};
                        var5 = _closure1_slot8;
                        var5 = var5.OVERVIEW;
                        var2['screen'] = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var1['onSettingsPress'] = var2;
                    return var1;
case 18:
                    var2 = var12.thread;
                    var _closure3_slot5 = var2;
                    var1 = {};
                    var8 = _closure1_slot10;
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var5 = 20;
                    var5 = var7[var5];
                    var7 = undefined;
                    var6 = var6.bind(var7)(var5);
                    var5 = {};
                    var5['notification'] = var12;
                    var5 = var8.bind(var7)(var6, var5);
                    var1['content'] = var5;
                    var5 = function onPress() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 13;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.transitionToThread;
                        var2 = _closure3_slot5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var1['onPress'] = var5;
                    var5 = function onSettingsPress() {
                        var4 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var3 = 11;
                        var3 = var1[var3];
                        var6 = undefined;
                        var4 = var4.bind(var6)(var3);
                        var3 = var4.pushLazy;
                        var5 = _closure1_slot0;
                        var2 = 15;
                        var2 = var1[var2];
                        var5 = var5.bind(var6)(var2);
                        var2 = 14;
                        var2 = var1[var2];
                        var1 = var1.paths;
                        var2 = var5.bind(var6)(var2, var1);
                        var1 = {};
                        var5 = _closure3_slot0;
                        var5 = var5.parentChannel;
                        var5 = var5.id;
                        var1['channelId'] = var5;
                        var1 = var3.bind(var4)(var2, var1);
                        return var1;
                    };
                    var1['onSettingsPress'] = var5;
                    var5 = var2.guild_id;
                    var1['guildId'] = var5;
                    var2 = var2.id;
                    var1['channelId'] = var2;
                    return var1;
case 16:
                    var2 = var12.channelId;
                    var _closure3_slot3 = var2;
                    var1 = var12.messageId;
                    var _closure3_slot4 = var1;
                    var1 = {};
                    var8 = _closure1_slot10;
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var5 = 19;
                    var5 = var7[var5];
                    var7 = undefined;
                    var6 = var6.bind(var7)(var5);
                    var5 = {};
                    var5['notification'] = var12;
                    var5 = var8.bind(var7)(var6, var5);
                    var1['content'] = var5;
                    var5 = function onPress() {
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var1 = 13;
                        var2 = var9[var1];
                        var1 = undefined;
                        var6 = var8.bind(var1)(var2);
                        var5 = var6.transitionToMessage;
                        var4 = _closure3_slot3;
                        var3 = _closure3_slot4;
                        var2 = {};
                        var7 = 18;
                        var7 = var9[var7];
                        var7 = var8.bind(var1)(var7);
                        var7 = var7.JumpTypes;
                        var7 = var7.INSTANT;
                        var2['jumpType'] = var7;
                        var2 = var5.bind(var6)(var4, var3, var2);
                        return var1;
                    };
                    var1['onPress'] = var5;
                    var1['channelId'] = var2;
                    return var1;
case 14:
                    var2 = var12.channel;
                    var _closure3_slot1 = var2;
                    var8 = var12.message;
                    var _closure3_slot2 = var8;
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var1 = 10;
                    var1 = var11[var1];
                    var5 = undefined;
                    var6 = var10.bind(var5)(var1);
                    var1 = var6.getMessageAuthor;
                    var9 = var1.bind(var6)(var8);
                    var1 = {};
                    var7 = _closure1_slot10;
                    var6 = _closure1_slot1;
                    var4 = 16;
                    var4 = var11[var4];
                    var6 = var6.bind(var5)(var4);
                    var4 = {};
                    var4['notification'] = var12;
                    var4 = var7.bind(var5)(var6, var4);
                    var1['content'] = var4;
                    var4 = 17;
                    var6 = var11[var4];
                    var6 = var10.bind(var5)(var6);
                    var7 = var6.intl;
                    var6 = var7.formatToPlainString;
                    var4 = var11[var4];
                    var4 = var10.bind(var5)(var4);
                    var4 = var4.t;
                    var5 = var4.Hjp1LH;
                    var4 = {};
                    var9 = var9.nick;
                    var4['userName'] = var9;
                    var8 = var8.content;
                    var4['message'] = var8;
                    var4 = var6.bind(var7)(var5, var4);
                    var1['screenReaderAnnouncement'] = var4;
                    var4 = function onPress() {
                        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                            var4 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var1 = 11;
                            var3 = var3[var1];
                            var1 = undefined;
                            var4 = var4.bind(var1)(var3);
                            var3 = var4.popAll;
                            var3 = var3.bind(var4)();
                            var3 = _closure1_slot28;
                            var3 = var3.bind(var1)();
                            var7 = true;
                            if(var3) { _fun0006_ip = 35; continue _fun0006 }
case 36:
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var3 = 12;
                            var3 = var5[var3];
                            var3 = var4.bind(var1)(var3);
                            var5 = var3.InAppNotificationNavigationExperiment;
                            var4 = var5.getConfig;
                            var3 = {};
                            var6 = 'in-app-notification';
                            var3['location'] = var6;
                            var3 = var4.bind(var5)(var3);
                            var3 = var3.enableStackNavigation;
                            var7 = !var3;
case 35:
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var2 = 13;
                            var2 = var4[var2];
                            var6 = var3.bind(var1)(var2);
                            var5 = var6.transitionToMessage;
                            var3 = _closure3_slot1;
                            var4 = var3.id;
                            var2 = _closure3_slot2;
                            var3 = var2.id;
                            var2 = {};
                            var2['navigationReplace'] = var7;
                            var2 = var5.bind(var6)(var4, var3, var2);
                            return var1;
                        }
                    };
                    var1['onPress'] = var4;
                    var3 = function onSettingsPress() {
                        var4 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var3 = 11;
                        var3 = var1[var3];
                        var6 = undefined;
                        var4 = var4.bind(var6)(var3);
                        var3 = var4.pushLazy;
                        var5 = _closure1_slot0;
                        var2 = 15;
                        var2 = var1[var2];
                        var5 = var5.bind(var6)(var2);
                        var2 = 14;
                        var2 = var1[var2];
                        var1 = var1.paths;
                        var2 = var5.bind(var6)(var2, var1);
                        var1 = {};
                        var5 = _closure3_slot1;
                        var5 = var5.id;
                        var1['channelId'] = var5;
                        var1 = var3.bind(var4)(var2, var1);
                        return var1;
                    };
                    var1['onSettingsPress'] = var3;
                    var3 = var2.guild_id;
                    var1['guildId'] = var3;
                    var2 = var2.id;
                    var1['channelId'] = var2;
                    return var1;
                }
            };
            var2 = var2.bind(var4)(var17);
            var16 = var2.content;
            var3 = var2.screenReaderAnnouncement;
            var _closure2_slot1 = var3;
            var7 = var2.onPress;
            var _closure2_slot2 = var7;
            var5 = var2.onSettingsPress;
            var _closure2_slot3 = var5;
            var15 = var2.guildId;
            var _closure2_slot4 = var15;
            var9 = var2.channelId;
            var _closure2_slot5 = var9;
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var12 = 6;
            var2 = var8[var12];
            var11 = var6.bind(var4)(var2);
            var2 = var11.useSharedValue;
            var19 = 0;
            var24 = var2.bind(var11)(var19);
            var _closure2_slot6 = var24;
            var2 = var8[var12];
            var11 = var6.bind(var4)(var2);
            var2 = var11.useSharedValue;
            var22 = var2.bind(var11)(var19);
            var _closure2_slot7 = var22;
            var2 = var8[var12];
            var13 = var6.bind(var4)(var2);
            var11 = var13.useSharedValue;
            var2 = 100;
            var18 = var11.bind(var13)(var2);
            var _closure2_slot8 = var18;
            var13 = _closure1_slot4;
            var11 = var13.useRef;
            var2 = var17.duration;
            var2 = var11.bind(var13)(var2);
            var _closure2_slot9 = var2;
            var2 = var13.useState;
            var23 = false;
            var2 = var2.bind(var13)(var23);
            var20 = _closure1_slot3;
            var11 = 2;
            var2 = var20.bind(var4)(var2, var11);
            var25 = var2[var19];
            var _closure2_slot10 = var25;
            var14 = 1;
            var2 = var2[var14];
            var _closure2_slot11 = var2;
            var2 = var13.useState;
            var2 = var2.bind(var13)(var23);
            var2 = var20.bind(var4)(var2, var11);
            var11 = var2[var19];
            var _closure2_slot12 = var11;
            var26 = var2[var14];
            var _closure2_slot13 = var26;
            var20 = var13.useCallback;
            var14 = new Array(3);
            var14[0] = var17;
            var14[1] = var15;
            var14[2] = var9;
            var2 = function(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var5 = arg1;
                    var3 = null;
                    if(!(var3 != var5)) { _fun0007_ip = 37; continue _fun0007 }
case 38:
                    var4 = _closure1_slot29;
                    var2 = {};
                    var1 = _closure2_slot0;
                    var7 = var1.type;
                    var2['type'] = var7;
                    var7 = _closure2_slot4;
                    var2['guildId'] = var7;
                    var6 = _closure2_slot5;
                    var2['channelId'] = var6;
                    var2['dismissReason'] = var5;
                    var1 = var1.inAppNotificationId;
                    var2['inAppNotificationId'] = var1;
                    var1 = undefined;
                    var1 = var4.bind(var1)(var2);
case 37:
                    var2 = _closure2_slot0;
                    var2 = var2.onDismiss;
                    if(!(var3 != var2)) { _fun0007_ip = 39; continue _fun0007 }
case 40:
                    var2 = _closure2_slot0;
                    var1 = var2.onDismiss;
                    var1 = var1.bind(var2)();
case 39:
                    var1 = undefined;
                    return var1;
                }
            };
            var28 = var20.bind(var13)(var2, var14);
            var _closure2_slot14 = var28;
            var2 = _closure1_slot1;
            var14 = 31;
            var14 = var8[var14];
            var20 = var2.bind(var4)(var14);
            var14 = function() {
                var4 = _closure2_slot7;
                var3 = var4.set;
                var13 = _closure1_slot0;
                var14 = _closure1_slot2;
                var5 = 32;
                var5 = var14[var5];
                var12 = undefined;
                var9 = var13.bind(var12)(var5);
                var8 = var9.withTiming;
                var17 = _closure1_slot13;
                var6 = function n() {
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 6;
                    var1 = var3[var1];
                    var3 = undefined;
                    var4 = var2.bind(var3)(var1);
                    var2 = var4.runOnJS;
                    var1 = _closure2_slot11;
                    var2 = var2.bind(var4)(var1);
                    var1 = true;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var5 = {};
                var11 = 6;
                var11 = var14[var11];
                var11 = var13.bind(var12)(var11);
                var11 = var11.runOnJS;
                var5['runOnJS'] = var11;
                var10 = _closure2_slot11;
                var5['setInitialized'] = var10;
                var6['__closure'] = var5;
                var5 = 16158991995287.0;
                var6['__workletHash'] = var5;
                var2 = _closure1_slot16;
                var6['__initData'] = var2;
                var18 = 1;
                var16 = 'respect-motion-settings';
                var19 = var9;
                var15 = var6;
                var2 = var19[var8](var18, var17, var16, var15, var14);
                var2 = var3.bind(var4)(var2);
                var1 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.cancelAnimation;
                    var1 = _closure2_slot7;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                return var1;
            };
            var14 = var20.bind(var4)(var14);
            var23 = var13.useEffect;
            var20 = new Array(5);
            var20[0] = var25;
            var14 = var17.type;
            var20[1] = var14;
            var20[2] = var15;
            var20[3] = var9;
            var14 = var17.inAppNotificationId;
            var20[4] = var14;
            var14 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var1 = _closure2_slot10;
                    if(!var1) { _fun0008_ip = 41; continue _fun0008 }
case 42:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 28;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.track;
                    var1 = _closure1_slot9;
                    var2 = var1.IN_APP_NOTIFICATION_SHOWN;
                    var1 = {};
                    var5 = _closure2_slot0;
                    var7 = var5.type;
                    var1['type'] = var7;
                    var7 = _closure2_slot4;
                    var1['guild_id'] = var7;
                    var6 = _closure2_slot5;
                    var1['channel_id'] = var6;
                    var5 = var5.inAppNotificationId;
                    var1['in_app_notification_id'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
case 41:
                    var1 = undefined;
                    return var1;
                }
            };
            var14 = var23.bind(var13)(var14, var20);
            var20 = var13.useEffect;
            var14 = new Array(5);
            var14[0] = var25;
            var14[1] = var11;
            var14[2] = var17;
            var14[3] = var18;
            var14[4] = var28;
            var11 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var2 = _closure2_slot10;
                    if(!var2) { _fun0009_ip = 43; continue _fun0009 }
case 44:
                    var2 = _closure2_slot12;
                    if(var2) { _fun0009_ip = 43; continue _fun0009 }
case 45:
                    var2 = _closure2_slot9;
                    var3 = var2.current;
                    var2 = inf;
                    if(!(var3 !== var2)) { _fun0009_ip = 43; continue _fun0009 }
case 17:
                    var2 = global;
                    var3 = var2.Date;
                    var2 = var3.now;
                    var3 = var2.bind(var3)();
                    var5 = _closure2_slot9;
                    var2 = var5.current;
                    var2 = var3 + var2;
                    var _closure3_slot0 = var2;
                    var4 = _closure2_slot8;
                    var3 = var4.set;
                    var13 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var6 = 32;
                    var6 = var14[var6];
                    var12 = undefined;
                    var9 = var13.bind(var12)(var6);
                    var8 = var9.withTiming;
                    var7 = {};
                    var5 = var5.current;
                    var7['duration'] = var5;
                    var11 = 6;
                    var5 = var14[var11];
                    var5 = var13.bind(var12)(var5);
                    var5 = var5.Easing;
                    var5 = var5.linear;
                    var7['easing'] = var5;
                    var6 = function n(arg1) {
                        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                            var1 = arg1;
                            if(!var1) { _fun0010_ip = 46; continue _fun0010 }
case 47:
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 6;
                            var1 = var3[var1];
                            var3 = undefined;
                            var4 = var2.bind(var3)(var1);
                            var2 = var4.runOnJS;
                            var1 = _closure2_slot14;
                            var2 = var2.bind(var4)(var1);
                            var1 = 'timeout';
                            var1 = var2.bind(var3)(var1);
case 46:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var5 = {};
                    var11 = var14[var11];
                    var11 = var13.bind(var12)(var11);
                    var11 = var11.runOnJS;
                    var5['runOnJS'] = var11;
                    var10 = _closure2_slot14;
                    var5['handleDismissNotification'] = var10;
                    var6['__closure'] = var5;
                    var5 = 14095957860155.0;
                    var6['__workletHash'] = var5;
                    var2 = _closure1_slot17;
                    var6['__initData'] = var2;
                    var18 = 0;
                    var16 = 'animate-always';
                    var19 = var9;
                    var17 = var7;
                    var15 = var6;
                    var2 = var19[var8](var18, var17, var16, var15, var14);
                    var2 = var3.bind(var4)(var2);
                    var1 = function() {
                        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 6;
                            var2 = var2[var1];
                            var1 = undefined;
                            var5 = var3.bind(var1)(var2);
                            var4 = var5.cancelAnimation;
                            var3 = _closure2_slot8;
                            var3 = var4.bind(var5)(var3);
                            var3 = _closure2_slot9;
                            var4 = var3.current;
                            var3 = inf;
                            if(!(var4 !== var3)) { _fun0011_ip = 39; continue _fun0011 }
case 48:
                            var3 = _closure2_slot9;
                            var4 = _closure3_slot0;
                            var2 = global;
                            var5 = var2.Date;
                            var2 = var5.now;
                            var2 = var2.bind(var5)();
                            var2 = var4 - var2;
                            var3['current'] = var2;
case 39:
                            return var1;
                        }
                    };
                    return var1;
case 43:
                    var1 = undefined;
                    return var1;
                }
            };
            var11 = var20.bind(var13)(var11, var14);
            var11 = var8[var12];
            var14 = var6.bind(var4)(var11);
            var11 = var14.useSharedValue;
            var29 = var11.bind(var14)(var19);
            var _closure2_slot15 = var29;
            var11 = var8[var12];
            var14 = var6.bind(var4)(var11);
            var11 = var14.useSharedValue;
            var23 = var11.bind(var14)(var19);
            var _closure2_slot16 = var23;
            var11 = var8[var12];
            var14 = var6.bind(var4)(var11);
            var11 = var14.useSharedValue;
            var20 = var11.bind(var14)(var19);
            var _closure2_slot17 = var20;
            var14 = var13.useCallback;
            var19 = var17.type;
            var11 = new Array(5);
            var11[0] = var19;
            var11[1] = var18;
            var11[2] = var15;
            var11[3] = var9;
            var9 = var17.inAppNotificationId;
            var11[4] = var9;
            var9 = function(arg1, arg2) {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var2 = arg2;
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 30;
                    var3 = var3[var1];
                    var1 = undefined;
                    var6 = var4.bind(var1)(var3);
                    var5 = var6.trackWithMetadata;
                    var4 = {};
                    var3 = _closure2_slot0;
                    var7 = var3.type;
                    var4['type'] = var7;
                    var7 = _closure2_slot4;
                    var4['notif_guild_id'] = var7;
                    var7 = _closure2_slot5;
                    var4['notif_channel_id'] = var7;
                    var3 = var3.inAppNotificationId;
                    var4['in_app_notification_id'] = var3;
                    var3 = global;
                    var8 = var3.Math;
                    var7 = var8.floor;
                    var3 = _closure2_slot8;
                    var10 = 'number';
                    var3 = typeof var3;
                    if(!(var10 !== var3)) { _fun0012_ip = 49; continue _fun0012 }
case 50:
                    var10 = _closure2_slot8;
                    var3 = var10.get;
                    var3 = var3.bind(var10)();
                    _fun0012_ip = 51; continue _fun0012;
case 49:
                    var3 = _closure2_slot8;
case 51:
                    var3 = var7.bind(var8)(var3);
                    var4['percent'] = var3;
                    var3 = arg1;
                    var3 = var5.bind(var6)(var3, var4);
                    var3 = null;
                    if(!(var3 != var2)) { _fun0012_ip = 52; continue _fun0012 }
case 53:
                    var2 = var2.bind(var1)();
case 52:
                    return var1;
                }
            };
            var11 = var14.bind(var13)(var9, var11);
            var _closure2_slot18 = var11;
            var14 = var13.useCallback;
            var9 = new Array(2);
            var9[0] = var11;
            var9[1] = var7;
            var7 = function() {
                var4 = _closure2_slot18;
                var2 = _closure1_slot9;
                var3 = var2.IN_APP_NOTIFICATION_CLICKED;
                var2 = _closure2_slot2;
                var1 = undefined;
                var2 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var30 = var14.bind(var13)(var7, var9);
            var _closure2_slot19 = var30;
            var9 = var13.useCallback;
            var7 = new Array(2);
            var7[0] = var11;
            var7[1] = var5;
            var5 = function() {
                var4 = _closure2_slot18;
                var2 = _closure1_slot9;
                var3 = var2.IN_APP_NOTIFICATION_LONG_PRESSED;
                var2 = _closure2_slot3;
                var1 = undefined;
                var2 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var19 = var9.bind(var13)(var5, var7);
            var7 = 33;
            var5 = var8[var7];
            var5 = var6.bind(var4)(var5);
            var9 = var5.Gesture;
            var5 = var9.Tap;
            var11 = var5.bind(var9)();
            var9 = var11.onBegin;
            var5 = function tn() {
                var4 = _closure2_slot17;
                var3 = var4.set;
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 34;
                var5 = var5[var1];
                var1 = undefined;
                var7 = var6.bind(var1)(var5);
                var6 = var7.withSpring;
                var5 = _closure1_slot11;
                var2 = 1;
                var2 = var6.bind(var7)(var2, var5);
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var14 = {};
            var14['pressed'] = var20;
            var27 = 34;
            var15 = var8[var27];
            var15 = var6.bind(var4)(var15);
            var15 = var15.withSpring;
            var14['withSpring'] = var15;
            var15 = _closure1_slot11;
            var14['ON_PRESS_SPRING_CONFIG'] = var15;
            var5['__closure'] = var14;
            var14 = 10267808590994.0;
            var5['__workletHash'] = var14;
            var14 = _closure1_slot20;
            var5['__initData'] = var14;
            var11 = var9.bind(var11)(var5);
            var9 = var11.onEnd;
            var5 = function nn(arg1, arg2) {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    var1 = arg2;
                    if(!var1) { _fun0013_ip = 54; continue _fun0013 }
case 47:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 6;
                    var1 = var2[var1];
                    var2 = undefined;
                    var4 = var3.bind(var2)(var1);
                    var3 = var4.runOnJS;
                    var1 = _closure2_slot19;
                    var1 = var3.bind(var4)(var1);
                    var1 = var1.bind(var2)();
case 54:
                    var1 = undefined;
                    return var1;
                }
            };
            var14 = {};
            var31 = var8[var12];
            var31 = var6.bind(var4)(var31);
            var31 = var31.runOnJS;
            var14['runOnJS'] = var31;
            var14['handlePress'] = var30;
            var5['__closure'] = var14;
            var14 = 7061648361077.0;
            var5['__workletHash'] = var14;
            var14 = _closure1_slot19;
            var5['__initData'] = var14;
            var11 = var9.bind(var11)(var5);
            var9 = var11.onFinalize;
            var5 = function $() {
                var4 = _closure2_slot17;
                var3 = var4.set;
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 34;
                var5 = var5[var1];
                var1 = undefined;
                var7 = var6.bind(var1)(var5);
                var6 = var7.withSpring;
                var5 = _closure1_slot11;
                var2 = 0;
                var2 = var6.bind(var7)(var2, var5);
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var14 = {};
            var14['pressed'] = var20;
            var30 = var8[var27];
            var30 = var6.bind(var4)(var30);
            var30 = var30.withSpring;
            var14['withSpring'] = var30;
            var14['ON_PRESS_SPRING_CONFIG'] = var15;
            var5['__closure'] = var14;
            var14 = 2076622441525.0;
            var5['__workletHash'] = var14;
            var14 = _closure1_slot18;
            var5['__initData'] = var14;
            var14 = var9.bind(var11)(var5);
            var5 = var8[var7];
            var5 = var6.bind(var4)(var5);
            var9 = var5.Gesture;
            var5 = var9.Pan;
            var11 = var5.bind(var9)();
            var9 = var11.onBegin;
            var5 = function on() {
                var4 = _closure2_slot15;
                var3 = var4.set;
                var5 = _closure2_slot6;
                var1 = var5.get;
                var1 = var1.bind(var5)();
                var1 = var3.bind(var4)(var1);
                var4 = _closure2_slot16;
                var3 = var4.set;
                var1 = 0;
                var1 = var3.bind(var4)(var1);
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 6;
                var3 = var3[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = var4.runOnJS;
                var2 = _closure2_slot13;
                var3 = var3.bind(var4)(var2);
                var2 = true;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var15 = {};
            var15['startY'] = var29;
            var15['notificationGestureY'] = var24;
            var15['velocityY'] = var23;
            var30 = var8[var12];
            var30 = var6.bind(var4)(var30);
            var30 = var30.runOnJS;
            var15['runOnJS'] = var30;
            var15['setProgressPaused'] = var26;
            var5['__closure'] = var15;
            var15 = 8648800814448.0;
            var5['__workletHash'] = var15;
            var15 = _closure1_slot24;
            var5['__initData'] = var15;
            var11 = var9.bind(var11)(var5);
            var9 = var11.onUpdate;
            var5 = function sn(arg1) {
                var1 = arg1;
                var5 = _closure2_slot6;
                var4 = var5.set;
                var6 = _closure2_slot15;
                var3 = var6.get;
                var6 = var3.bind(var6)();
                var3 = var1.translationY;
                var3 = var6 + var3;
                var3 = var4.bind(var5)(var3);
                var3 = _closure2_slot16;
                var2 = var3.set;
                var1 = var1.velocityY;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var15 = {};
            var15['notificationGestureY'] = var24;
            var15['startY'] = var29;
            var15['velocityY'] = var23;
            var5['__closure'] = var15;
            var15 = 12278427077719.0;
            var5['__workletHash'] = var15;
            var15 = _closure1_slot23;
            var5['__initData'] = var15;
            var11 = var9.bind(var11)(var5);
            var9 = var11.onEnd;
            var5 = function an(arg1) {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    var4 = arg1;
                    var1 = global;
                    var5 = var1.Math;
                    var3 = var5.abs;
                    var6 = _closure2_slot16;
                    var2 = var6.get;
                    var2 = var2.bind(var6)();
                    var3 = var3.bind(var5)(var2);
                    var2 = 100;
                    if(!(!(var3 >= var2))) { _fun0014_ip = 55; continue _fun0014 }
case 36:
                    var3 = var1.Math;
                    var2 = var3.abs;
                    var1 = var4.translationY;
                    var2 = var2.bind(var3)(var1);
                    var1 = 25;
                    if(!(!(var2 >= var1))) { _fun0014_ip = 55; continue _fun0014 }
case 56:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var1 = 6;
                    var1 = var7[var1];
                    var5 = undefined;
                    var3 = var6.bind(var5)(var1);
                    var2 = var3.runOnJS;
                    var1 = _closure2_slot13;
                    var2 = var2.bind(var3)(var1);
                    var1 = false;
                    var1 = var2.bind(var5)(var1);
                    var3 = _closure2_slot6;
                    var2 = var3.set;
                    var1 = 34;
                    var1 = var7[var1];
                    var8 = var6.bind(var5)(var1);
                    var7 = var8.withSpring;
                    var6 = {'damping': 10, 'mass': 1, 'stiffness': 100};
                    var5 = _closure2_slot16;
                    var1 = var5.get;
                    var1 = var1.bind(var5)();
                    var6['velocity'] = var1;
                    var5 = 0;
                    var1 = 'animate-always';
                    var1 = var7.bind(var8)(var5, var6, var1);
                    var1 = var2.bind(var3)(var1);
                    _fun0014_ip = 57; continue _fun0014;
case 55:
                    var3 = _closure2_slot6;
                    var2 = var3.set;
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var5 = 32;
                    var5 = var7[var5];
                    var13 = undefined;
                    var8 = var6.bind(var13)(var5);
                    var7 = var8.withTiming;
                    var4 = var4.translationY;
                    var5 = 0;
                    if(!(!(var4 > var5))) { _fun0014_ip = 58; continue _fun0014 }
case 59:
                    var4 = _closure1_slot12;
                    var6 = var4[var5];
                    _fun0014_ip = 60; continue _fun0014;
case 58:
                    var5 = _closure1_slot12;
                    var4 = 2;
                    var6 = var5[var4];
case 60:
                    var5 = {};
                    var4 = 200;
                    var5['duration'] = var4;
                    var12 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var11 = 6;
                    var4 = var14[var11];
                    var4 = var12.bind(var13)(var4);
                    var15 = var4.Easing;
                    var9 = var15.out;
                    var4 = var14[var11];
                    var4 = var12.bind(var13)(var4);
                    var4 = var4.Easing;
                    var4 = var4.ease;
                    var4 = var9.bind(var15)(var4);
                    var5['easing'] = var4;
                    var4 = function t(arg1) {
                        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                            var1 = arg1;
                            if(!var1) { _fun0015_ip = 61; continue _fun0015 }
case 47:
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 6;
                            var1 = var3[var1];
                            var3 = undefined;
                            var4 = var2.bind(var3)(var1);
                            var2 = var4.runOnJS;
                            var1 = _closure2_slot14;
                            var2 = var2.bind(var4)(var1);
                            var1 = 'swipe';
                            var1 = var2.bind(var3)(var1);
case 61:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var9 = {};
                    var11 = var14[var11];
                    var11 = var12.bind(var13)(var11);
                    var11 = var11.runOnJS;
                    var9['runOnJS'] = var11;
                    var10 = _closure2_slot14;
                    var9['handleDismissNotification'] = var10;
                    var4['__closure'] = var9;
                    var9 = 14854322883083.0;
                    var4['__workletHash'] = var9;
                    var1 = _closure1_slot25;
                    var4['__initData'] = var1;
                    var17 = 'animate-always';
                    var20 = var8;
                    var19 = var6;
                    var18 = var5;
                    var16 = var4;
                    var1 = var20[var7](var19, var18, var17, var16, var15);
                    var1 = var2.bind(var3)(var1);
case 57:
                    var1 = undefined;
                    return var1;
                }
            };
            var15 = {'velocityY': null, 'MIN_SWIPE_VELOCITY': 100, 'MIN_SWIPE_DISTANCE': 25};
            var15['velocityY'] = var23;
            var15['notificationGestureY'] = var24;
            var23 = 32;
            var23 = var8[var23];
            var23 = var6.bind(var4)(var23);
            var23 = var23.withTiming;
            var15['withTiming'] = var23;
            var23 = _closure1_slot12;
            var15['PAN_INPUT_RANGE'] = var23;
            var29 = var8[var12];
            var29 = var6.bind(var4)(var29);
            var29 = var29.Easing;
            var15['Easing'] = var29;
            var29 = var8[var12];
            var29 = var6.bind(var4)(var29);
            var29 = var29.runOnJS;
            var15['runOnJS'] = var29;
            var15['handleDismissNotification'] = var28;
            var15['setProgressPaused'] = var26;
            var27 = var8[var27];
            var27 = var6.bind(var4)(var27);
            var27 = var27.withSpring;
            var15['withSpring'] = var27;
            var5['__closure'] = var15;
            var15 = 15385734347253.0;
            var5['__workletHash'] = var15;
            var15 = _closure1_slot22;
            var5['__initData'] = var15;
            var11 = var9.bind(var11)(var5);
            var9 = var11.onFinalize;
            var5 = function en() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 6;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.runOnJS;
                var2 = _closure2_slot13;
                var3 = var3.bind(var4)(var2);
                var2 = false;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var15 = {};
            var27 = var8[var12];
            var27 = var6.bind(var4)(var27);
            var27 = var27.runOnJS;
            var15['runOnJS'] = var27;
            var15['setProgressPaused'] = var26;
            var5['__closure'] = var15;
            var15 = 3053917690417.0;
            var5['__workletHash'] = var15;
            var15 = _closure1_slot21;
            var5['__initData'] = var15;
            var11 = var9.bind(var11)(var5);
            var5 = var8[var7];
            var5 = var6.bind(var4)(var5);
            var9 = var5.Gesture;
            var5 = var9.Race;
            var11 = var5.bind(var9)(var11, var14);
            var5 = var8[var12];
            var14 = var6.bind(var4)(var5);
            var9 = var14.useAnimatedStyle;
            var5 = function rn() {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                    var1 = _closure2_slot10;
                    if(var1) { _fun0016_ip = 45; continue _fun0016 }
case 42:
                    var2 = _closure2_slot7;
                    var1 = var2.get;
                    var5 = var1.bind(var2)();
                    _fun0016_ip = 62; continue _fun0016;
case 45:
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 6;
                    var4 = var4[var2];
                    var2 = undefined;
                    var8 = var6.bind(var2)(var4);
                    var7 = var8.interpolate;
                    var4 = _closure2_slot6;
                    var2 = var4.get;
                    var13 = var2.bind(var4)();
                    var12 = _closure1_slot12;
                    var10 = _closure1_slot14;
                    var11 = [0.3, 1, 0.3];
                    var14 = var8;
                    var5 = var14[var7](var13, var12, var11, var10, var9);
case 62:
                    var1 = _closure2_slot10;
                    if(var1) { _fun0016_ip = 25; continue _fun0016 }
case 63:
                    var2 = _closure2_slot7;
                    var1 = var2.get;
                    var2 = var1.bind(var2)();
                    _fun0016_ip = 64; continue _fun0016;
case 25:
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 6;
                    var6 = var6[var4];
                    var4 = undefined;
                    var9 = var7.bind(var4)(var6);
                    var8 = var9.interpolate;
                    var6 = _closure2_slot6;
                    var4 = var6.get;
                    var13 = var4.bind(var6)();
                    var12 = _closure1_slot12;
                    var10 = _closure1_slot14;
                    var11 = [0, 1, 0];
                    var14 = var9;
                    var2 = var14[var8](var13, var12, var11, var10, var9);
case 64:
                    var1 = {};
                    var4 = {};
                    var6 = _closure2_slot6;
                    var3 = var6.get;
                    var3 = var3.bind(var6)();
                    var4['translateY'] = var3;
                    var3 = new Array(2);
                    var3[0] = var4;
                    var4 = {};
                    var4['scale'] = var5;
                    var3[1] = var4;
                    var1['transform'] = var3;
                    var1['opacity'] = var2;
                    return var1;
                }
            };
            var15 = {};
            var15['initialized'] = var25;
            var25 = var8[var12];
            var25 = var6.bind(var4)(var25);
            var25 = var25.interpolate;
            var15['interpolate'] = var25;
            var15['notificationGestureY'] = var24;
            var15['PAN_INPUT_RANGE'] = var23;
            var23 = _closure1_slot14;
            var15['extrapolateConfig'] = var23;
            var15['scale'] = var22;
            var5['__closure'] = var15;
            var15 = 7615715012877.0;
            var5['__workletHash'] = var15;
            var15 = _closure1_slot26;
            var5['__initData'] = var15;
            var22 = var9.bind(var14)(var5);
            var5 = var8[var12];
            var14 = var6.bind(var4)(var5);
            var9 = var14.useAnimatedStyle;
            var5 = function cn() {
                var1 = {};
                var3 = {};
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 6;
                var4 = var4[var2];
                var2 = undefined;
                var7 = var5.bind(var2)(var4);
                var6 = var7.interpolate;
                var4 = _closure2_slot17;
                var2 = var4.get;
                var5 = var2.bind(var4)();
                var4 = [0, 1];
                var2 = [1, 0.95];
                var2 = var6.bind(var7)(var5, var4, var2);
                var3['scale'] = var2;
                var2 = new Array(1);
                var2[0] = var3;
                var1['transform'] = var2;
                return var1;
            };
            var15 = {};
            var23 = var8[var12];
            var23 = var6.bind(var4)(var23);
            var23 = var23.interpolate;
            var15['interpolate'] = var23;
            var15['pressed'] = var20;
            var5['__closure'] = var15;
            var15 = 17247148295128.0;
            var5['__workletHash'] = var15;
            var15 = _closure1_slot27;
            var5['__initData'] = var15;
            var14 = var9.bind(var14)(var5);
            var9 = var13.useEffect;
            var5 = new Array(1);
            var5[0] = var3;
            var3 = function() {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0017_ip = 61; continue _fun0017 }
case 65:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 35;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var3 = var2.AccessibilityAnnouncer;
                    var2 = var3.announce;
                    var1 = _closure2_slot1;
                    var1 = var2.bind(var3)(var1);
case 61:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var9.bind(var13)(var3, var5);
            var3 = 36;
            var3 = var8[var3];
            var9 = var6.bind(var4)(var3);
            var5 = var9.useStateFromStores;
            var13 = _closure1_slot6;
            var3 = new Array(1);
            var3[0] = var13;
            var1 = function() {
                var2 = _closure1_slot6;
                var1 = var2.isOpen;
                var1 = var1.bind(var2)();
                return var1;
            };
            var9 = var5.bind(var9)(var3, var1);
            var3 = _closure1_slot10;
            var1 = 37;
            var1 = var8[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var5 = 38;
            var5 = var8[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.SafeAreaPaddingView;
            var5 = {'top': true, 'style': null, 'pointerEvents': 'box-none'};
            var8 = var21.safeAreaContainer;
            var5['style'] = var8;
            var8 = undefined;
            if(!var9) { _fun0002_ip = 66; continue _fun0002 }
case 67:
            var8 = 'no-hide-descendants';
case 66:
            var5['importantForAccessibility'] = var8;
            var9 = _closure1_slot10;
            var15 = _closure1_slot0;
            var20 = _closure1_slot2;
            var7 = var20[var7];
            var7 = var15.bind(var4)(var7);
            var8 = var7.GestureDetector;
            var7 = {};
            var7['gesture'] = var11;
            var13 = _closure1_slot1;
            var10 = var20[var12];
            var10 = var13.bind(var4)(var10);
            var11 = var10.View;
            var10 = {};
            var23 = var21.animatedContainer;
            var21 = new Array(2);
            var21[0] = var23;
            var21[1] = var22;
            var10['style'] = var21;
            var12 = var20[var12];
            var12 = var13.bind(var4)(var12);
            var13 = var12.View;
            var12 = {};
            var12['style'] = var14;
            var14 = 39;
            var14 = var20[var14];
            var14 = var15.bind(var4)(var14);
            var15 = var14.NotificationPressable;
            var14 = {};
            var14['onLongPress'] = var19;
            var20 = var17.duration;
            var19 = inf;
            var17 = undefined;
            if(!(var20 !== var19)) { _fun0002_ip = 68; continue _fun0002 }
case 69:
            var17 = var18;
case 68:
            var14['percent'] = var17;
            var14['children'] = var16;
            var14 = var9.bind(var4)(var15, var14);
            var12['children'] = var14;
            var12 = var9.bind(var4)(var13, var12);
            var10['children'] = var12;
            var10 = var9.bind(var4)(var11, var10);
            var7['children'] = var10;
            var7 = var9.bind(var4)(var8, var7);
            var5['children'] = var7;
            var5 = var3.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();