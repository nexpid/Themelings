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
            var1 = 9;
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
            var6 = 10;
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
    var _closure1_slot26 = var1;
    var1 = function trackDismissed(arg1) {
        var1 = arg1;
        var9 = var1.guildId;
        var8 = var1.channelId;
        var10 = var1.type;
        var7 = var1.dismissReason;
        var6 = var1.inAppNotificationId;
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 32;
        var3 = var3[var1];
        var1 = undefined;
        var5 = var4.bind(var1)(var3);
        var4 = var5.trackWithMetadata;
        var2 = _closure1_slot10;
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
    var _closure1_slot27 = var1;
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.InAppNotificationTypes;
    var _closure1_slot8 = var8;
    var8 = var4.UserSettingsSections;
    var _closure1_slot9 = var8;
    var4 = var4.AnalyticEvents;
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot11 = var8;
    var4 = var4.jsxs;
    var _closure1_slot12 = var4;
    var4 = new Array(3);
    var8 = -100;
    var4[0] = var8;
    var4[1] = var7;
    var7 = 100;
    var4[2] = var7;
    var _closure1_slot13 = var4;
    var4 = {};
    var7 = 200;
    var4['duration'] = var7;
    var7 = 7;
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
    var _closure1_slot14 = var4;
    var4 = {'extrapolateRight': 'clamp', 'extrapolateLeft': 'clamp'};
    var _closure1_slot15 = var4;
    var4 = 8;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'marginLeft': 16, 'marginRight': 16};
    var4['animatedContainer'] = var9;
    var10 = 'absolute';
    var9 = {'position': 'absolute', 'left': 0, 'right': 0, 'backgroundColor': 'transparent', 'marginTop': 8};
    var4['safeAreaContainer'] = var9;
    var9 = {};
    var9['position'] = var10;
    var4['backdrop'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot16 = var4;
    var4 = {};
    var7 = 'function InAppNotificationContainerTsx1(){const{runOnJS,setInitialized}=this.__closure;return runOnJS(setInitialized)(true);}';
    var4['code'] = var7;
    var _closure1_slot17 = var4;
    var4 = {};
    var7 = "function InAppNotificationContainerTsx2(finished){const{runOnJS,handleDismissNotification}=this.__closure;if(finished){runOnJS(handleDismissNotification)('timeout');}}";
    var4['code'] = var7;
    var _closure1_slot18 = var4;
    var4 = {};
    var7 = 'function InAppNotificationContainerTsx3(){const{runOnJS,setPanning}=this.__closure;runOnJS(setPanning)(false);}';
    var4['code'] = var7;
    var _closure1_slot19 = var4;
    var4 = {};
    var7 = "function InAppNotificationContainerTsx4(event){const{velocityY,MIN_SWIPE_VELOCITY,MIN_SWIPE_DISTANCE,disableSwipeDown,notificationGestureY,withTiming,PAN_INPUT_RANGE,Easing,runOnJS,handleDismissNotification,setPanning,withSpring}=this.__closure;const shouldDismiss=Math.abs(velocityY.get())>=MIN_SWIPE_VELOCITY||Math.abs(event.translationY)>=MIN_SWIPE_DISTANCE;const validSwipeDirection=disableSwipeDown?event.translationY<=0:true;if(shouldDismiss&&validSwipeDirection){notificationGestureY.set(withTiming(event.translationY>0?PAN_INPUT_RANGE[2]:PAN_INPUT_RANGE[0],{duration:200,easing:Easing.out(Easing.ease)},'animate-always',function(finished){if(finished){runOnJS(handleDismissNotification)('swipe');}}));}else{runOnJS(setPanning)(false);notificationGestureY.set(withSpring(0,{damping:10,mass:1,stiffness:100,velocity:velocityY.get()},'animate-always'));}}";
    var4['code'] = var7;
    var _closure1_slot20 = var4;
    var4 = {};
    var7 = 'function InAppNotificationContainerTsx5(event){const{disableSwipeDown,startY,notificationGestureY,velocityY}=this.__closure;const newY=disableSwipeDown?Math.min(startY.get()+event.translationY,startY.get()):startY.get()+event.translationY;notificationGestureY.set(newY);velocityY.set(event.velocityY);}';
    var4['code'] = var7;
    var _closure1_slot21 = var4;
    var4 = {};
    var7 = 'function InAppNotificationContainerTsx6(){const{startY,notificationGestureY,velocityY,runOnJS,setPanning}=this.__closure;startY.set(notificationGestureY.get());velocityY.set(0);runOnJS(setPanning)(true);}';
    var4['code'] = var7;
    var _closure1_slot22 = var4;
    var4 = {};
    var7 = "function InAppNotificationContainerTsx7(finished){const{runOnJS,handleDismissNotification}=this.__closure;if(finished){runOnJS(handleDismissNotification)('swipe');}}";
    var4['code'] = var7;
    var _closure1_slot23 = var4;
    var4 = {};
    var7 = 'function InAppNotificationContainerTsx8(){const{initialized,interpolate,notificationGestureY,PAN_INPUT_RANGE,extrapolateConfig,scale}=this.__closure;const scaleTransform=initialized?interpolate(notificationGestureY.get(),PAN_INPUT_RANGE,[0.3,1,0.3],extrapolateConfig):scale.get();const opacityTransform=initialized?interpolate(notificationGestureY.get(),PAN_INPUT_RANGE,[0,1,0],extrapolateConfig):scale.get();return{transform:[{translateY:notificationGestureY.get()},{scale:scaleTransform}],opacity:opacityTransform};}';
    var4['code'] = var7;
    var _closure1_slot24 = var4;
    var4 = {};
    var7 = 'function InAppNotificationContainerTsx9(){const{withTiming,expandedSV,Easing}=this.__closure;return{opacity:withTiming(expandedSV.get()?1:0,{duration:200,easing:Easing.out(Easing.ease)})};}';
    var4['code'] = var7;
    var _closure1_slot25 = var4;
    var4 = 49;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/in_app_notifications/native/InAppNotificationContainer.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function InAppNotificationContainer(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var19 = var1.notification;
            var _closure2_slot0 = var19;
            var1 = _closure1_slot16;
            var4 = undefined;
            var15 = var1.bind(var4)();
            var2 = _closure1_slot0;
            var5 = _closure1_slot2;
            var13 = 7;
            var1 = var5[var13];
            var3 = var2.bind(var4)(var1);
            var1 = var3.useSharedValue;
            var21 = 0;
            var28 = var1.bind(var3)(var21);
            var _closure2_slot1 = var28;
            var1 = var5[var13];
            var3 = var2.bind(var4)(var1);
            var1 = var3.useSharedValue;
            var24 = var1.bind(var3)(var21);
            var _closure2_slot2 = var24;
            var1 = var5[var13];
            var6 = var2.bind(var4)(var1);
            var3 = var6.useSharedValue;
            var1 = 100;
            var20 = var3.bind(var6)(var1);
            var _closure2_slot3 = var20;
            var12 = _closure1_slot4;
            var3 = var12.useRef;
            var1 = var19.duration;
            var1 = var3.bind(var12)(var1);
            var _closure2_slot4 = var1;
            var1 = var12.useState;
            var8 = false;
            var1 = var1.bind(var12)(var8);
            var11 = _closure1_slot3;
            var7 = 2;
            var1 = var11.bind(var4)(var1, var7);
            var29 = var1[var21];
            var _closure2_slot5 = var29;
            var6 = 1;
            var1 = var1[var6];
            var _closure2_slot6 = var1;
            var1 = var12.useState;
            var1 = var1.bind(var12)(var8);
            var1 = var11.bind(var4)(var1, var7);
            var9 = var1[var21];
            var _closure2_slot7 = var9;
            var25 = var1[var6];
            var _closure2_slot8 = var25;
            var1 = var5[var13];
            var3 = var2.bind(var4)(var1);
            var1 = var3.useSharedValue;
            var8 = var1.bind(var3)(var8);
            var _closure2_slot9 = var8;
            var3 = _closure1_slot1;
            var1 = 33;
            var1 = var5[var1];
            var1 = var3.bind(var4)(var1);
            var18 = var1.bind(var4)(var8);
            var _closure2_slot10 = var18;
            var16 = var12.useCallback;
            var10 = new Array(1);
            var10[0] = var8;
            var1 = function(arg1) {
                var3 = _closure2_slot9;
                var2 = var3.set;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var10 = var16.bind(var12)(var1, var10);
            var _closure2_slot11 = var10;
            var16 = var12.useState;
            var1 = null;
            var1 = var16.bind(var12)(var1);
            var1 = var11.bind(var4)(var1, var7);
            var7 = var1[var21];
            var1 = var1[var6];
            var _closure2_slot12 = var1;
            var11 = var12.useCallback;
            var6 = new Array(2);
            var6[0] = var10;
            var6[1] = var1;
            var1 = function(arg1, arg2, arg3) {
                var5 = arg1;
                var3 = arg2;
                var4 = _closure1_slot0;
                var10 = _closure1_slot2;
                var2 = 34;
                var6 = var10[var2];
                var1 = undefined;
                var7 = var4.bind(var1)(var6);
                var6 = var7.triggerHapticFeedback;
                var2 = var10[var2];
                var2 = var4.bind(var1)(var2);
                var2 = var2.HapticFeedbackTypes;
                var2 = var2.IMPACT_LIGHT;
                var2 = var6.bind(var7)(var2);
                var2 = 35;
                var6 = var10[var2];
                var9 = var4.bind(var1)(var6);
                var8 = var9.addReaction;
                var6 = var5.channel;
                var7 = var6.id;
                var5 = var5.message;
                var15 = var5.id;
                var5 = 36;
                var5 = var10[var5];
                var11 = var4.bind(var1)(var5);
                var5 = var11.toReactionEmoji;
                var14 = var5.bind(var11)(var3);
                var2 = var10[var2];
                var2 = var4.bind(var1)(var2);
                var2 = var2.ReactionLocations;
                var13 = var2.IN_APP_NOTIFICATION;
                var2 = {};
                var10 = arg3;
                var2['burst'] = var10;
                var17 = var9;
                var16 = var7;
                var12 = var2;
                var2 = var17[var8](var16, var15, var14, var13, var12, var11);
                var5 = _closure2_slot11;
                var4 = false;
                var4 = var5.bind(var1)(var4);
                var2 = _closure2_slot12;
                var2 = var2.bind(var1)(var3);
                return var1;
            };
            var1 = var11.bind(var12)(var1, var6);
            var6 = {};
            var6['notification'] = var19;
            var6['isExpanded'] = var18;
            var6['setExpanded'] = var10;
            var6['reaction'] = var7;
            var6['onReactionPress'] = var1;
            var1 = function getRenderProps(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = arg1;
                    var8 = var1.notification;
                    var _closure3_slot0 = var8;
                    var4 = var1.isExpanded;
                    var2 = var1.setExpanded;
                    var _closure3_slot1 = var2;
                    var15 = var1.reaction;
                    var1 = var1.onReactionPress;
                    var _closure3_slot2 = var1;
                    var6 = undefined;
                    var _closure3_slot3 = var6;
                    var _closure3_slot4 = var6;
                    var _closure3_slot5 = var6;
                    var _closure3_slot6 = var6;
                    var _closure3_slot7 = var6;
                    var _closure3_slot8 = var6;
                    var _closure3_slot9 = var6;
                    var _closure3_slot10 = var6;
                    var _closure3_slot11 = var6;
                    var _closure3_slot12 = var6;
                    var _closure3_slot13 = var6;
                    var _closure3_slot14 = var6;
                    var2 = var8.type;
                    var1 = _closure1_slot8;
                    var1 = var1.MESSAGE;
                    if(!(var1 !== var2)) { _fun0003_ip = 14; continue _fun0003 }
case 6:
                    var1 = _closure1_slot8;
                    var1 = var1.MESSAGE_FAILED_TO_SEND;
                    if(!(var1 !== var2)) { _fun0003_ip = 15; continue _fun0003 }
case 16:
                    var1 = _closure1_slot8;
                    var1 = var1.FORUM_THREAD_CREATED;
                    if(!(var1 !== var2)) { _fun0003_ip = 17; continue _fun0003 }
case 18:
                    var1 = _closure1_slot8;
                    var1 = var1.BUG_REPORTER;
                    if(!(var1 !== var2)) { _fun0003_ip = 19; continue _fun0003 }
case 20:
                    var1 = _closure1_slot8;
                    var1 = var1.ALERT;
                    if(!(var1 !== var2)) { _fun0003_ip = 21; continue _fun0003 }
case 22:
                    var1 = _closure1_slot8;
                    var1 = var1.REACTION;
                    if(!(var1 !== var2)) { _fun0003_ip = 23; continue _fun0003 }
case 24:
                    var1 = _closure1_slot8;
                    var1 = var1.MESSAGE_REMINDER;
                    if(!(var1 !== var2)) { _fun0003_ip = 25; continue _fun0003 }
case 26:
                    var1 = {};
                    var2 = null;
                    var1['content'] = var2;
                    return var1;
case 25:
                    var1 = var8.channel;
                    var5 = var1.guild_id;
                    _closure3_slot13 = var5;
                    var2 = var1.id;
                    _closure3_slot14 = var2;
                    var1 = {};
                    var9 = function onPress() {
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var3 = 12;
                        var6 = var5[var3];
                        var1 = undefined;
                        var7 = var4.bind(var1)(var6);
                        var6 = var7.popAll;
                        var6 = var6.bind(var7)();
                        var3 = var5[var3];
                        var10 = var4.bind(var1)(var3);
                        var9 = var10.pushLazy;
                        var6 = _closure1_slot0;
                        var3 = 16;
                        var3 = var5[var3];
                        var7 = var6.bind(var1)(var3);
                        var3 = 29;
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
                        var3 = 30;
                        var3 = var5[var3];
                        var5 = var4.bind(var1)(var3);
                        var4 = var5.track;
                        var2 = _closure1_slot10;
                        var3 = var2.FOR_LATER_REMINDER_NOTIFICATION_CLICKED;
                        var2 = {};
                        var9 = _closure3_slot13;
                        var2['guild_id'] = var9;
                        var8 = _closure3_slot14;
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
                    var1['onPress'] = var9;
                    var11 = _closure1_slot11;
                    var10 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var9 = 31;
                    var9 = var12[var9];
                    var10 = var10.bind(var6)(var9);
                    var9 = {};
                    var9['notification'] = var8;
                    var9 = var11.bind(var6)(var10, var9);
                    var1['content'] = var9;
                    var1['guildId'] = var5;
                    var1['channelId'] = var2;
                    return var1;
case 23:
                    var1 = var8.channel;
                    _closure3_slot9 = var1;
                    var9 = var8.guild;
                    var2 = var8.message;
                    _closure3_slot10 = var2;
                    var2 = null;
                    var10 = var2 == var9;
                    var5 = undefined;
                    if(var10) { _fun0003_ip = 27; continue _fun0003 }
case 28:
                    var5 = var9.id;
case 27:
                    if(!(var2 == var5)) { _fun0003_ip = 29; continue _fun0003 }
case 30:
                    var5 = var1.guild_id;
case 29:
                    _closure3_slot11 = var5;
                    var2 = var1.id;
                    _closure3_slot12 = var2;
                    var1 = {};
                    var9 = function onPress() {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                            var5 = _closure1_slot27;
                            var4 = {};
                            var1 = _closure3_slot0;
                            var6 = var1.type;
                            var4['type'] = var6;
                            var6 = 'notification_clicked';
                            var4['dismissReason'] = var6;
                            var6 = _closure3_slot11;
                            var4['guildId'] = var6;
                            var6 = _closure3_slot12;
                            var4['channelId'] = var6;
                            var1 = var1.inAppNotificationId;
                            var4['inAppNotificationId'] = var1;
                            var1 = undefined;
                            var4 = var5.bind(var1)(var4);
                            var5 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var4 = 12;
                            var4 = var6[var4];
                            var5 = var5.bind(var1)(var4);
                            var4 = var5.popAll;
                            var4 = var4.bind(var5)();
                            var4 = _closure1_slot26;
                            var4 = var4.bind(var1)();
                            var9 = true;
                            if(var4) { _fun0004_ip = 31; continue _fun0004 }
case 32:
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var4 = 13;
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
case 31:
                            var6 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var5 = 14;
                            var5 = var4[var5];
                            var8 = var6.bind(var1)(var5);
                            var7 = var8.transitionToMessage;
                            var5 = _closure3_slot9;
                            var6 = var5.id;
                            var3 = _closure3_slot10;
                            var5 = var3.id;
                            var3 = {};
                            var3['navigationReplace'] = var9;
                            var3 = var7.bind(var8)(var6, var5, var3);
                            var3 = _closure1_slot1;
                            var2 = 23;
                            var2 = var4[var2];
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.clearNotification;
                            var2 = var2.bind(var3)();
                            return var1;
                        }
                    };
                    var1['onPress'] = var9;
                    var9 = function onSettingsPress() {
                        var4 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var3 = 12;
                        var3 = var1[var3];
                        var6 = undefined;
                        var4 = var4.bind(var6)(var3);
                        var3 = var4.pushLazy;
                        var5 = _closure1_slot0;
                        var2 = 16;
                        var2 = var1[var2];
                        var5 = var5.bind(var6)(var2);
                        var2 = 15;
                        var2 = var1[var2];
                        var1 = var1.paths;
                        var2 = var5.bind(var6)(var2, var1);
                        var1 = {};
                        var5 = _closure3_slot12;
                        var1['channelId'] = var5;
                        var1 = var3.bind(var4)(var2, var1);
                        return var1;
                    };
                    var1['onSettingsPress'] = var9;
                    var11 = _closure1_slot11;
                    var10 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var9 = 28;
                    var9 = var12[var9];
                    var10 = var10.bind(var6)(var9);
                    var9 = {};
                    var9['notification'] = var8;
                    var9 = var11.bind(var6)(var10, var9);
                    var1['content'] = var9;
                    var1['guildId'] = var5;
                    var1['channelId'] = var2;
                    return var1;
case 21:
                    var2 = var8.channel;
                    _closure3_slot8 = var2;
                    var1 = {};
                    var10 = _closure1_slot11;
                    var9 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var5 = 27;
                    var5 = var11[var5];
                    var9 = var9.bind(var6)(var5);
                    var5 = {};
                    var5['notification'] = var8;
                    var5 = var10.bind(var6)(var9, var5);
                    var1['content'] = var5;
                    var5 = function onPress() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 14;
                        var2 = var2[var1];
                        var1 = undefined;
                        var5 = var3.bind(var1)(var2);
                        var4 = var5.transitionToChannel;
                        var2 = _closure3_slot8;
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
case 19:
                    var1 = {};
                    var9 = _closure1_slot11;
                    var5 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var2 = 26;
                    var2 = var10[var2];
                    var2 = var5.bind(var6)(var2);
                    var5 = var2.BugReporterNotification;
                    var2 = {};
                    var2['notification'] = var8;
                    var2 = var9.bind(var6)(var5, var2);
                    var1['content'] = var2;
                    var2 = function onPress() {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                            var4 = _closure1_slot6;
                            var3 = var4.getField;
                            var1 = 'isReportOpen';
                            var1 = var3.bind(var4)(var1);
                            if(var1) { _fun0005_ip = 2; continue _fun0005 }
case 33:
                            var3 = _closure1_slot27;
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
                            var3 = 12;
                            var6 = var1[var3];
                            var8 = var4.bind(var7)(var6);
                            var6 = var8.popAll;
                            var6 = var6.bind(var8)();
                            var6 = 23;
                            var6 = var1[var6];
                            var8 = var4.bind(var7)(var6);
                            var6 = var8.clearNotification;
                            var6 = var6.bind(var8)();
                            var9 = _closure1_slot6;
                            var8 = var9.setState;
                            var6 = {};
                            var10 = true;
                            var6['isReportOpen'] = var10;
                            var6 = var8.bind(var9)(var6);
                            var3 = var1[var3];
                            var4 = var4.bind(var7)(var3);
                            var3 = var4.pushLazy;
                            var6 = _closure1_slot0;
                            var2 = 16;
                            var2 = var1[var2];
                            var6 = var6.bind(var7)(var2);
                            var2 = 24;
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
                        var1 = 25;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.openUserSettings;
                        var2 = {};
                        var5 = _closure1_slot9;
                        var5 = var5.OVERVIEW;
                        var2['screen'] = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var1['onSettingsPress'] = var2;
                    return var1;
case 17:
                    var2 = var8.thread;
                    _closure3_slot7 = var2;
                    var1 = {};
                    var10 = _closure1_slot11;
                    var9 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var5 = 22;
                    var5 = var11[var5];
                    var9 = var9.bind(var6)(var5);
                    var5 = {};
                    var5['notification'] = var8;
                    var5 = var10.bind(var6)(var9, var5);
                    var1['content'] = var5;
                    var5 = function onPress() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 14;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.transitionToThread;
                        var2 = _closure3_slot7;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var1['onPress'] = var5;
                    var5 = function onSettingsPress() {
                        var4 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var3 = 12;
                        var3 = var1[var3];
                        var6 = undefined;
                        var4 = var4.bind(var6)(var3);
                        var3 = var4.pushLazy;
                        var5 = _closure1_slot0;
                        var2 = 16;
                        var2 = var1[var2];
                        var5 = var5.bind(var6)(var2);
                        var2 = 15;
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
case 15:
                    var2 = var8.channelId;
                    _closure3_slot5 = var2;
                    var1 = var8.messageId;
                    _closure3_slot6 = var1;
                    var1 = {};
                    var10 = _closure1_slot11;
                    var9 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var5 = 21;
                    var5 = var11[var5];
                    var9 = var9.bind(var6)(var5);
                    var5 = {};
                    var5['notification'] = var8;
                    var5 = var10.bind(var6)(var9, var5);
                    var1['content'] = var5;
                    var5 = function onPress() {
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var1 = 14;
                        var2 = var9[var1];
                        var1 = undefined;
                        var6 = var8.bind(var1)(var2);
                        var5 = var6.transitionToMessage;
                        var4 = _closure3_slot5;
                        var3 = _closure3_slot6;
                        var2 = {};
                        var7 = 20;
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
                    var2 = var8.channel;
                    _closure3_slot3 = var2;
                    var12 = var8.message;
                    _closure3_slot4 = var12;
                    var9 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var1 = 11;
                    var1 = var14[var1];
                    var5 = var9.bind(var6)(var1);
                    var1 = var5.getMessageAuthor;
                    var13 = var1.bind(var5)(var12);
                    var1 = {};
                    var11 = _closure1_slot11;
                    var10 = _closure1_slot1;
                    var5 = 17;
                    var5 = var14[var5];
                    var10 = var10.bind(var6)(var5);
                    var5 = {};
                    var5['notification'] = var8;
                    var16 = function onReactionPress() {
                        var3 = _closure3_slot1;
                        var2 = undefined;
                        var1 = true;
                        var1 = var3.bind(var2)(var1);
                        return var1;
                    };
                    var5['onReactionPress'] = var16;
                    var5['reaction'] = var15;
                    var5['accessoryVisible'] = var4;
                    var5 = var11.bind(var6)(var10, var5);
                    var1['content'] = var5;
                    var5 = 18;
                    var10 = var14[var5];
                    var10 = var9.bind(var6)(var10);
                    var11 = var10.intl;
                    var10 = var11.formatToPlainString;
                    var5 = var14[var5];
                    var5 = var9.bind(var6)(var5);
                    var5 = var5.t;
                    var9 = var5.Hjp1LH;
                    var5 = {};
                    var13 = var13.nick;
                    var5['userName'] = var13;
                    var12 = var12.content;
                    var5['message'] = var12;
                    var5 = var10.bind(var11)(var9, var5);
                    var1['screenReaderAnnouncement'] = var5;
                    var5 = function onPress() {
                        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                            var4 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var1 = 12;
                            var3 = var3[var1];
                            var1 = undefined;
                            var4 = var4.bind(var1)(var3);
                            var3 = var4.popAll;
                            var3 = var3.bind(var4)();
                            var3 = _closure1_slot26;
                            var3 = var3.bind(var1)();
                            var7 = true;
                            if(var3) { _fun0006_ip = 34; continue _fun0006 }
case 35:
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var3 = 13;
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
case 34:
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var2 = 14;
                            var2 = var4[var2];
                            var6 = var3.bind(var1)(var2);
                            var5 = var6.transitionToMessage;
                            var3 = _closure3_slot3;
                            var4 = var3.id;
                            var2 = _closure3_slot4;
                            var3 = var2.id;
                            var2 = {};
                            var2['navigationReplace'] = var7;
                            var2 = var5.bind(var6)(var4, var3, var2);
                            return var1;
                        }
                    };
                    var1['onPress'] = var5;
                    var5 = function onSettingsPress() {
                        var4 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var3 = 12;
                        var3 = var1[var3];
                        var6 = undefined;
                        var4 = var4.bind(var6)(var3);
                        var3 = var4.pushLazy;
                        var5 = _closure1_slot0;
                        var2 = 16;
                        var2 = var1[var2];
                        var5 = var5.bind(var6)(var2);
                        var2 = 15;
                        var2 = var1[var2];
                        var1 = var1.paths;
                        var2 = var5.bind(var6)(var2, var1);
                        var1 = {};
                        var5 = _closure3_slot3;
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
                    var2 = undefined;
                    if(!var4) { _fun0003_ip = 36; continue _fun0003 }
case 37:
                    var5 = _closure1_slot11;
                    var4 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var3 = 19;
                    var3 = var9[var3];
                    var3 = var4.bind(var6)(var3);
                    var4 = var3.MessageNotificationReactBar;
                    var3 = {};
                    var3['notification'] = var8;
                    var7 = function onReactionPress(arg1, arg2) {
                        var5 = _closure3_slot2;
                        var4 = _closure3_slot0;
                        var3 = undefined;
                        var2 = arg1;
                        var1 = arg2;
                        var1 = var5.bind(var3)(var4, var2, var1);
                        return var1;
                    };
                    var3['onReactionPress'] = var7;
                    var2 = var5.bind(var6)(var4, var3);
case 36:
                    var1['accessoryContent'] = var2;
                    return var1;
                }
            };
            var10 = var1.bind(var4)(var6);
            var17 = var10.content;
            var1 = var10.screenReaderAnnouncement;
            var _closure2_slot13 = var1;
            var7 = var10.onPress;
            var _closure2_slot14 = var7;
            var6 = var10.onSettingsPress;
            var _closure2_slot15 = var6;
            var23 = var10.guildId;
            var _closure2_slot16 = var23;
            var22 = var10.channelId;
            var _closure2_slot17 = var22;
            var10 = var10.accessoryContent;
            var11 = 37;
            var11 = var5[var11];
            var11 = var2.bind(var4)(var11);
            var26 = var11.InAppNotificationDismissExperiment;
            var16 = var26.useConfig;
            var11 = {};
            var30 = 'in-app-notification';
            var11['location'] = var30;
            var11 = var16.bind(var26)(var11);
            var11 = var11.disableSwipeDown;
            var _closure2_slot18 = var11;
            var30 = var12.useCallback;
            var26 = new Array(3);
            var26[0] = var19;
            var26[1] = var23;
            var26[2] = var22;
            var16 = function(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var5 = arg1;
                    var3 = null;
                    if(!(var3 != var5)) { _fun0007_ip = 38; continue _fun0007 }
case 39:
                    var4 = _closure1_slot27;
                    var2 = {};
                    var1 = _closure2_slot0;
                    var7 = var1.type;
                    var2['type'] = var7;
                    var7 = _closure2_slot16;
                    var2['guildId'] = var7;
                    var6 = _closure2_slot17;
                    var2['channelId'] = var6;
                    var2['dismissReason'] = var5;
                    var1 = var1.inAppNotificationId;
                    var2['inAppNotificationId'] = var1;
                    var1 = undefined;
                    var1 = var4.bind(var1)(var2);
case 38:
                    var2 = _closure2_slot0;
                    var2 = var2.onDismiss;
                    if(!(var3 != var2)) { _fun0007_ip = 40; continue _fun0007 }
case 41:
                    var2 = _closure2_slot0;
                    var1 = var2.onDismiss;
                    var1 = var1.bind(var2)();
case 40:
                    var1 = undefined;
                    return var1;
                }
            };
            var30 = var30.bind(var12)(var16, var26);
            var _closure2_slot19 = var30;
            var16 = 38;
            var16 = var5[var16];
            var26 = var3.bind(var4)(var16);
            var16 = function() {
                var4 = _closure2_slot2;
                var3 = var4.set;
                var13 = _closure1_slot0;
                var14 = _closure1_slot2;
                var5 = 39;
                var5 = var14[var5];
                var12 = undefined;
                var9 = var13.bind(var12)(var5);
                var8 = var9.withTiming;
                var17 = _closure1_slot14;
                var6 = function i() {
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 7;
                    var1 = var3[var1];
                    var3 = undefined;
                    var4 = var2.bind(var3)(var1);
                    var2 = var4.runOnJS;
                    var1 = _closure2_slot6;
                    var2 = var2.bind(var4)(var1);
                    var1 = true;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var5 = {};
                var11 = 7;
                var11 = var14[var11];
                var11 = var13.bind(var12)(var11);
                var11 = var11.runOnJS;
                var5['runOnJS'] = var11;
                var10 = _closure2_slot6;
                var5['setInitialized'] = var10;
                var6['__closure'] = var5;
                var5 = 16158991995287.0;
                var6['__workletHash'] = var5;
                var2 = _closure1_slot17;
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
                    var1 = 7;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.cancelAnimation;
                    var1 = _closure2_slot2;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                return var1;
            };
            var16 = var26.bind(var4)(var16);
            var31 = var12.useEffect;
            var26 = new Array(5);
            var26[0] = var29;
            var16 = var19.type;
            var26[1] = var16;
            var26[2] = var23;
            var26[3] = var22;
            var16 = var19.inAppNotificationId;
            var26[4] = var16;
            var16 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var1 = _closure2_slot5;
                    if(!var1) { _fun0008_ip = 42; continue _fun0008 }
case 43:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 30;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.track;
                    var1 = _closure1_slot10;
                    var2 = var1.IN_APP_NOTIFICATION_SHOWN;
                    var1 = {};
                    var5 = _closure2_slot0;
                    var7 = var5.type;
                    var1['type'] = var7;
                    var7 = _closure2_slot16;
                    var1['guild_id'] = var7;
                    var6 = _closure2_slot17;
                    var1['channel_id'] = var6;
                    var5 = var5.inAppNotificationId;
                    var1['in_app_notification_id'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
case 42:
                    var1 = undefined;
                    return var1;
                }
            };
            var16 = var31.bind(var12)(var16, var26);
            var26 = var12.useEffect;
            var16 = new Array(6);
            var16[0] = var29;
            var16[1] = var9;
            var16[2] = var19;
            var16[3] = var20;
            var16[4] = var30;
            var16[5] = var18;
            var9 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var2 = _closure2_slot5;
                    if(!var2) { _fun0009_ip = 44; continue _fun0009 }
case 45:
                    var2 = _closure2_slot7;
                    if(var2) { _fun0009_ip = 44; continue _fun0009 }
case 46:
                    var2 = _closure2_slot4;
                    var3 = var2.current;
                    var2 = inf;
                    if(!(var3 !== var2)) { _fun0009_ip = 44; continue _fun0009 }
case 47:
                    var2 = _closure2_slot10;
                    if(var2) { _fun0009_ip = 44; continue _fun0009 }
case 48:
                    var2 = global;
                    var3 = var2.Date;
                    var2 = var3.now;
                    var3 = var2.bind(var3)();
                    var5 = _closure2_slot4;
                    var2 = var5.current;
                    var2 = var3 + var2;
                    var _closure3_slot0 = var2;
                    var4 = _closure2_slot3;
                    var3 = var4.set;
                    var13 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var6 = 39;
                    var6 = var14[var6];
                    var12 = undefined;
                    var9 = var13.bind(var12)(var6);
                    var8 = var9.withTiming;
                    var7 = {};
                    var5 = var5.current;
                    var7['duration'] = var5;
                    var11 = 7;
                    var5 = var14[var11];
                    var5 = var13.bind(var12)(var5);
                    var5 = var5.Easing;
                    var5 = var5.linear;
                    var7['easing'] = var5;
                    var6 = function i(arg1) {
                        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                            var1 = arg1;
                            if(!var1) { _fun0010_ip = 49; continue _fun0010 }
case 50:
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 7;
                            var1 = var3[var1];
                            var3 = undefined;
                            var4 = var2.bind(var3)(var1);
                            var2 = var4.runOnJS;
                            var1 = _closure2_slot19;
                            var2 = var2.bind(var4)(var1);
                            var1 = 'timeout';
                            var1 = var2.bind(var3)(var1);
case 49:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var5 = {};
                    var11 = var14[var11];
                    var11 = var13.bind(var12)(var11);
                    var11 = var11.runOnJS;
                    var5['runOnJS'] = var11;
                    var10 = _closure2_slot19;
                    var5['handleDismissNotification'] = var10;
                    var6['__closure'] = var5;
                    var5 = 14095957860155.0;
                    var6['__workletHash'] = var5;
                    var2 = _closure1_slot18;
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
                            var1 = 7;
                            var2 = var2[var1];
                            var1 = undefined;
                            var5 = var3.bind(var1)(var2);
                            var4 = var5.cancelAnimation;
                            var3 = _closure2_slot3;
                            var3 = var4.bind(var5)(var3);
                            var3 = _closure2_slot4;
                            var4 = var3.current;
                            var3 = inf;
                            if(!(var4 !== var3)) { _fun0011_ip = 40; continue _fun0011 }
case 51:
                            var3 = _closure2_slot4;
                            var4 = _closure3_slot0;
                            var2 = global;
                            var5 = var2.Date;
                            var2 = var5.now;
                            var2 = var2.bind(var5)();
                            var2 = var4 - var2;
                            var3['current'] = var2;
case 40:
                            return var1;
                        }
                    };
                    return var1;
case 44:
                    var1 = undefined;
                    return var1;
                }
            };
            var9 = var26.bind(var12)(var9, var16);
            var9 = var5[var13];
            var16 = var2.bind(var4)(var9);
            var9 = var16.useSharedValue;
            var31 = var9.bind(var16)(var21);
            var _closure2_slot20 = var31;
            var9 = var5[var13];
            var16 = var2.bind(var4)(var9);
            var9 = var16.useSharedValue;
            var26 = var9.bind(var16)(var21);
            var _closure2_slot21 = var26;
            var21 = var12.useCallback;
            var16 = new Array(2);
            var16[0] = var26;
            var16[1] = var28;
            var9 = function() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var3 = global;
                    var5 = var3.Math;
                    var4 = var5.abs;
                    var6 = _closure2_slot21;
                    var1 = var6.get;
                    var1 = var1.bind(var6)();
                    var4 = var4.bind(var5)(var1);
                    var1 = 100;
                    var1 = var4 >= var1;
                    if(var1) { _fun0012_ip = 52; continue _fun0012 }
case 53:
                    var4 = var3.Math;
                    var3 = var4.abs;
                    var5 = _closure2_slot1;
                    var2 = var5.get;
                    var2 = var2.bind(var5)();
                    var3 = var3.bind(var4)(var2);
                    var2 = 5;
                    var1 = var3 >= var2;
case 52:
                    return var1;
                }
            };
            var9 = var21.bind(var12)(var9, var16);
            var _closure2_slot22 = var9;
            var21 = var12.useCallback;
            var32 = var19.type;
            var16 = new Array(6);
            var16[0] = var32;
            var16[1] = var20;
            var16[2] = var23;
            var16[3] = var22;
            var22 = var19.inAppNotificationId;
            var16[4] = var22;
            var16[5] = var9;
            var9 = function(arg1, arg2) {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    var2 = arg2;
                    var3 = _closure2_slot22;
                    var1 = undefined;
                    var3 = var3.bind(var1)();
                    if(var3) { _fun0013_ip = 54; continue _fun0013 }
case 55:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 32;
                    var3 = var5[var3];
                    var6 = var4.bind(var1)(var3);
                    var5 = var6.trackWithMetadata;
                    var4 = {};
                    var3 = _closure2_slot0;
                    var7 = var3.type;
                    var4['type'] = var7;
                    var7 = _closure2_slot16;
                    var4['notif_guild_id'] = var7;
                    var7 = _closure2_slot17;
                    var4['notif_channel_id'] = var7;
                    var3 = var3.inAppNotificationId;
                    var4['in_app_notification_id'] = var3;
                    var3 = global;
                    var8 = var3.Math;
                    var7 = var8.floor;
                    var3 = _closure2_slot3;
                    var10 = 'number';
                    var3 = typeof var3;
                    if(!(var10 !== var3)) { _fun0013_ip = 56; continue _fun0013 }
case 57:
                    var10 = _closure2_slot3;
                    var3 = var10.get;
                    var3 = var3.bind(var10)();
                    _fun0013_ip = 58; continue _fun0013;
case 56:
                    var3 = _closure2_slot3;
case 58:
                    var3 = var7.bind(var8)(var3);
                    var4['percent'] = var3;
                    var3 = arg1;
                    var3 = var5.bind(var6)(var3, var4);
                    var3 = null;
                    if(!(var3 != var2)) { _fun0013_ip = 54; continue _fun0013 }
case 59:
                    var2 = var2.bind(var1)();
case 54:
                    return var1;
                }
            };
            var16 = var21.bind(var12)(var9, var16);
            var _closure2_slot23 = var16;
            var21 = var12.useCallback;
            var9 = new Array(2);
            var9[0] = var16;
            var9[1] = var7;
            var7 = function() {
                var4 = _closure2_slot23;
                var2 = _closure1_slot10;
                var3 = var2.IN_APP_NOTIFICATION_CLICKED;
                var2 = _closure2_slot14;
                var1 = undefined;
                var2 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var22 = var21.bind(var12)(var7, var9);
            var9 = var12.useCallback;
            var7 = new Array(2);
            var7[0] = var16;
            var7[1] = var6;
            var6 = function() {
                var4 = _closure2_slot23;
                var2 = _closure1_slot10;
                var3 = var2.IN_APP_NOTIFICATION_LONG_PRESSED;
                var2 = _closure2_slot15;
                var1 = undefined;
                var2 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var21 = var9.bind(var12)(var6, var7);
            var9 = 40;
            var6 = var5[var9];
            var6 = var2.bind(var4)(var6);
            var7 = var6.Gesture;
            var6 = var7.Pan;
            var16 = var6.bind(var7)();
            var7 = var16.enabled;
            var6 = !var18;
            var16 = var7.bind(var16)(var6);
            var7 = var16.onBegin;
            var6 = function di() {
                var4 = _closure2_slot20;
                var3 = var4.set;
                var5 = _closure2_slot1;
                var1 = var5.get;
                var1 = var1.bind(var5)();
                var1 = var3.bind(var4)(var1);
                var4 = _closure2_slot21;
                var3 = var4.set;
                var1 = 0;
                var1 = var3.bind(var4)(var1);
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 7;
                var3 = var3[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = var4.runOnJS;
                var2 = _closure2_slot8;
                var3 = var3.bind(var4)(var2);
                var2 = true;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var23 = {};
            var23['startY'] = var31;
            var23['notificationGestureY'] = var28;
            var23['velocityY'] = var26;
            var32 = var5[var13];
            var32 = var2.bind(var4)(var32);
            var32 = var32.runOnJS;
            var23['runOnJS'] = var32;
            var23['setPanning'] = var25;
            var6['__closure'] = var23;
            var23 = 3498134913055.0;
            var6['__workletHash'] = var23;
            var23 = _closure1_slot22;
            var6['__initData'] = var23;
            var16 = var7.bind(var16)(var6);
            var7 = var16.onUpdate;
            var6 = function li(arg1) {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    var1 = arg1;
                    var3 = _closure2_slot18;
                    if(var3) { _fun0014_ip = 60; continue _fun0014 }
case 61:
                    var4 = _closure2_slot20;
                    var3 = var4.get;
                    var4 = var3.bind(var4)();
                    var3 = var1.translationY;
                    var5 = var4 + var3;
                    _fun0014_ip = 62; continue _fun0014;
case 60:
                    var3 = global;
                    var7 = var3.Math;
                    var6 = var7.min;
                    var8 = _closure2_slot20;
                    var3 = var8.get;
                    var4 = var3.bind(var8)();
                    var3 = var1.translationY;
                    var4 = var4 + var3;
                    var3 = var8.get;
                    var3 = var3.bind(var8)();
                    var5 = var6.bind(var7)(var4, var3);
case 62:
                    var4 = _closure2_slot1;
                    var3 = var4.set;
                    var3 = var3.bind(var4)(var5);
                    var3 = _closure2_slot21;
                    var2 = var3.set;
                    var1 = var1.velocityY;
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                }
            };
            var23 = {};
            var23['disableSwipeDown'] = var11;
            var23['startY'] = var31;
            var23['notificationGestureY'] = var28;
            var23['velocityY'] = var26;
            var6['__closure'] = var23;
            var23 = 14345167075122.0;
            var6['__workletHash'] = var23;
            var23 = _closure1_slot21;
            var6['__initData'] = var23;
            var16 = var7.bind(var16)(var6);
            var7 = var16.onEnd;
            var6 = function ci(arg1) {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                    var4 = arg1;
                    var1 = global;
                    var5 = var1.Math;
                    var3 = var5.abs;
                    var6 = _closure2_slot21;
                    var2 = var6.get;
                    var2 = var2.bind(var6)();
                    var3 = var3.bind(var5)(var2);
                    var2 = 100;
                    var2 = var3 >= var2;
                    if(var2) { _fun0015_ip = 63; continue _fun0015 }
case 35:
                    var5 = var1.Math;
                    var3 = var5.abs;
                    var1 = var4.translationY;
                    var3 = var3.bind(var5)(var1);
                    var1 = 25;
                    var2 = var3 >= var1;
case 63:
                    var1 = _closure2_slot18;
                    var1 = !var1;
                    if(var1) { _fun0015_ip = 64; continue _fun0015 }
case 65:
                    var5 = var4.translationY;
                    var3 = 0;
                    var1 = var5 <= var3;
case 64:
                    if(!var2) { _fun0015_ip = 66; continue _fun0015 }
case 67:
                    if(var1) { _fun0015_ip = 68; continue _fun0015 }
case 66:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var1 = 7;
                    var1 = var7[var1];
                    var5 = undefined;
                    var3 = var6.bind(var5)(var1);
                    var2 = var3.runOnJS;
                    var1 = _closure2_slot8;
                    var2 = var2.bind(var3)(var1);
                    var1 = false;
                    var1 = var2.bind(var5)(var1);
                    var3 = _closure2_slot1;
                    var2 = var3.set;
                    var1 = 41;
                    var1 = var7[var1];
                    var8 = var6.bind(var5)(var1);
                    var7 = var8.withSpring;
                    var6 = {'damping': 10, 'mass': 1, 'stiffness': 100};
                    var5 = _closure2_slot21;
                    var1 = var5.get;
                    var1 = var1.bind(var5)();
                    var6['velocity'] = var1;
                    var5 = 0;
                    var1 = 'animate-always';
                    var1 = var7.bind(var8)(var5, var6, var1);
                    var1 = var2.bind(var3)(var1);
                    _fun0015_ip = 69; continue _fun0015;
case 68:
                    var3 = _closure2_slot1;
                    var2 = var3.set;
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var5 = 39;
                    var5 = var7[var5];
                    var13 = undefined;
                    var8 = var6.bind(var13)(var5);
                    var7 = var8.withTiming;
                    var4 = var4.translationY;
                    var5 = 0;
                    if(!(!(var4 > var5))) { _fun0015_ip = 70; continue _fun0015 }
case 71:
                    var4 = _closure1_slot13;
                    var6 = var4[var5];
                    _fun0015_ip = 72; continue _fun0015;
case 70:
                    var5 = _closure1_slot13;
                    var4 = 2;
                    var6 = var5[var4];
case 72:
                    var5 = {};
                    var4 = 200;
                    var5['duration'] = var4;
                    var12 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var11 = 7;
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
                    var4 = function n(arg1) {
                        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                            var1 = arg1;
                            if(!var1) { _fun0016_ip = 73; continue _fun0016 }
case 50:
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 7;
                            var1 = var3[var1];
                            var3 = undefined;
                            var4 = var2.bind(var3)(var1);
                            var2 = var4.runOnJS;
                            var1 = _closure2_slot19;
                            var2 = var2.bind(var4)(var1);
                            var1 = 'swipe';
                            var1 = var2.bind(var3)(var1);
case 73:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var9 = {};
                    var11 = var14[var11];
                    var11 = var12.bind(var13)(var11);
                    var11 = var11.runOnJS;
                    var9['runOnJS'] = var11;
                    var10 = _closure2_slot19;
                    var9['handleDismissNotification'] = var10;
                    var4['__closure'] = var9;
                    var9 = 8678052186333.0;
                    var4['__workletHash'] = var9;
                    var1 = _closure1_slot23;
                    var4['__initData'] = var1;
                    var17 = 'animate-always';
                    var20 = var8;
                    var19 = var6;
                    var18 = var5;
                    var16 = var4;
                    var1 = var20[var7](var19, var18, var17, var16, var15);
                    var1 = var2.bind(var3)(var1);
case 69:
                    var1 = undefined;
                    return var1;
                }
            };
            var23 = {'velocityY': null, 'MIN_SWIPE_VELOCITY': 100, 'MIN_SWIPE_DISTANCE': 25};
            var23['velocityY'] = var26;
            var23['disableSwipeDown'] = var11;
            var23['notificationGestureY'] = var28;
            var11 = 39;
            var26 = var5[var11];
            var26 = var2.bind(var4)(var26);
            var26 = var26.withTiming;
            var23['withTiming'] = var26;
            var26 = _closure1_slot13;
            var23['PAN_INPUT_RANGE'] = var26;
            var31 = var5[var13];
            var31 = var2.bind(var4)(var31);
            var31 = var31.Easing;
            var23['Easing'] = var31;
            var31 = var5[var13];
            var31 = var2.bind(var4)(var31);
            var31 = var31.runOnJS;
            var23['runOnJS'] = var31;
            var23['handleDismissNotification'] = var30;
            var23['setPanning'] = var25;
            var30 = 41;
            var30 = var5[var30];
            var30 = var2.bind(var4)(var30);
            var30 = var30.withSpring;
            var23['withSpring'] = var30;
            var6['__closure'] = var23;
            var23 = 11607250661323.0;
            var6['__workletHash'] = var23;
            var23 = _closure1_slot20;
            var6['__initData'] = var23;
            var16 = var7.bind(var16)(var6);
            var7 = var16.onFinalize;
            var6 = function ri() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 7;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.runOnJS;
                var2 = _closure2_slot8;
                var3 = var3.bind(var4)(var2);
                var2 = false;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var23 = {};
            var30 = var5[var13];
            var30 = var2.bind(var4)(var30);
            var30 = var30.runOnJS;
            var23['runOnJS'] = var30;
            var23['setPanning'] = var25;
            var6['__closure'] = var23;
            var23 = 15123072742452.0;
            var6['__workletHash'] = var23;
            var23 = _closure1_slot19;
            var6['__initData'] = var23;
            var25 = var7.bind(var16)(var6);
            var6 = var5[var13];
            var16 = var2.bind(var4)(var6);
            var7 = var16.useAnimatedStyle;
            var6 = function ui() {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                    var1 = _closure2_slot5;
                    if(var1) { _fun0017_ip = 46; continue _fun0017 }
case 43:
                    var2 = _closure2_slot2;
                    var1 = var2.get;
                    var5 = var1.bind(var2)();
                    _fun0017_ip = 74; continue _fun0017;
case 46:
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 7;
                    var4 = var4[var2];
                    var2 = undefined;
                    var8 = var6.bind(var2)(var4);
                    var7 = var8.interpolate;
                    var4 = _closure2_slot1;
                    var2 = var4.get;
                    var13 = var2.bind(var4)();
                    var12 = _closure1_slot13;
                    var10 = _closure1_slot15;
                    var11 = [0.3, 1, 0.3];
                    var14 = var8;
                    var5 = var14[var7](var13, var12, var11, var10, var9);
case 74:
                    var1 = _closure2_slot5;
                    if(var1) { _fun0017_ip = 75; continue _fun0017 }
case 76:
                    var2 = _closure2_slot2;
                    var1 = var2.get;
                    var2 = var1.bind(var2)();
                    _fun0017_ip = 77; continue _fun0017;
case 75:
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 7;
                    var6 = var6[var4];
                    var4 = undefined;
                    var9 = var7.bind(var4)(var6);
                    var8 = var9.interpolate;
                    var6 = _closure2_slot1;
                    var4 = var6.get;
                    var13 = var4.bind(var6)();
                    var12 = _closure1_slot13;
                    var10 = _closure1_slot15;
                    var11 = [0, 1, 0];
                    var14 = var9;
                    var2 = var14[var8](var13, var12, var11, var10, var9);
case 77:
                    var1 = {};
                    var4 = {};
                    var6 = _closure2_slot1;
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
            var23 = {};
            var23['initialized'] = var29;
            var29 = var5[var13];
            var29 = var2.bind(var4)(var29);
            var29 = var29.interpolate;
            var23['interpolate'] = var29;
            var23['notificationGestureY'] = var28;
            var23['PAN_INPUT_RANGE'] = var26;
            var26 = _closure1_slot15;
            var23['extrapolateConfig'] = var26;
            var23['scale'] = var24;
            var6['__closure'] = var23;
            var23 = 3032584613781.0;
            var6['__workletHash'] = var23;
            var23 = _closure1_slot24;
            var6['__initData'] = var23;
            var24 = var7.bind(var16)(var6);
            var7 = var12.useEffect;
            var6 = new Array(1);
            var6[0] = var1;
            var1 = function() {
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                    var3 = _closure2_slot13;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0018_ip = 73; continue _fun0018 }
case 61:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 42;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var3 = var2.AccessibilityAnnouncer;
                    var2 = var3.announce;
                    var1 = _closure2_slot13;
                    var1 = var2.bind(var3)(var1);
case 73:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var7.bind(var12)(var1, var6);
            var1 = 43;
            var1 = var5[var1];
            var12 = var2.bind(var4)(var1);
            var7 = var12.useStateFromStores;
            var1 = _closure1_slot7;
            var6 = new Array(1);
            var6[0] = var1;
            var1 = function() {
                var2 = _closure1_slot7;
                var1 = var2.isOpen;
                var1 = var1.bind(var2)();
                return var1;
            };
            var12 = var7.bind(var12)(var6, var1);
            var1 = 44;
            var1 = var5[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var23 = var1.width;
            var16 = var1.height;
            var1 = var5[var13];
            var6 = var2.bind(var4)(var1);
            var3 = var6.useAnimatedStyle;
            var1 = function Ai() {
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                    var1 = {};
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 39;
                    var2 = var4[var2];
                    var10 = undefined;
                    var5 = var3.bind(var10)(var2);
                    var4 = var5.withTiming;
                    var3 = _closure2_slot9;
                    var2 = var3.get;
                    var2 = var2.bind(var3)();
                    var3 = 0;
                    if(!var2) { _fun0019_ip = 78; continue _fun0019 }
case 79:
                    var3 = 1;
case 78:
                    var2 = {};
                    var7 = 200;
                    var2['duration'] = var7;
                    var9 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var6 = 7;
                    var7 = var11[var6];
                    var7 = var9.bind(var10)(var7);
                    var8 = var7.Easing;
                    var7 = var8.out;
                    var6 = var11[var6];
                    var6 = var9.bind(var10)(var6);
                    var6 = var6.Easing;
                    var6 = var6.ease;
                    var6 = var7.bind(var8)(var6);
                    var2['easing'] = var6;
                    var2 = var4.bind(var5)(var3, var2);
                    var1['opacity'] = var2;
                    return var1;
                }
            };
            var7 = {};
            var11 = var5[var11];
            var11 = var2.bind(var4)(var11);
            var11 = var11.withTiming;
            var7['withTiming'] = var11;
            var7['expandedSV'] = var8;
            var8 = var5[var13];
            var8 = var2.bind(var4)(var8);
            var8 = var8.Easing;
            var7['Easing'] = var8;
            var1['__closure'] = var7;
            var7 = 11918814288683.0;
            var1['__workletHash'] = var7;
            var7 = _closure1_slot25;
            var1['__initData'] = var7;
            var28 = var3.bind(var6)(var1);
            var3 = _closure1_slot12;
            var1 = 45;
            var1 = var5[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.OverlayView;
            var1 = {};
            var8 = _closure1_slot11;
            var6 = _closure1_slot5;
            var5 = {};
            var11 = var15.backdrop;
            var7 = new Array(2);
            var7[0] = var11;
            var11 = {};
            var11['width'] = var23;
            var11['height'] = var16;
            var7[1] = var11;
            var5['style'] = var7;
            var7 = 'none';
            if(!var18) { _fun0002_ip = 80; continue _fun0002 }
case 81:
            var7 = 'auto';
case 80:
            var5['pointerEvents'] = var7;
            var26 = _closure1_slot11;
            var7 = _closure1_slot0;
            var11 = _closure1_slot2;
            var16 = 46;
            var16 = var11[var16];
            var16 = var7.bind(var4)(var16);
            var23 = var16.Backdrop;
            var16 = {};
            var16['style'] = var28;
            var27 = function onDismiss() {
                var3 = _closure2_slot11;
                var2 = undefined;
                var1 = false;
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var16['onDismiss'] = var27;
            var27 = true;
            var16['aria-hidden'] = var27;
            var16 = var26.bind(var4)(var23, var16);
            var5['children'] = var16;
            var6 = var8.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot12;
            var6 = 47;
            var6 = var11[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.SafeAreaPaddingView;
            var6 = {'top': true, 'style': null, 'pointerEvents': 'box-none'};
            var11 = var15.safeAreaContainer;
            var6['style'] = var11;
            var11 = undefined;
            if(!var12) { _fun0002_ip = 82; continue _fun0002 }
case 83:
            var11 = 'no-hide-descendants';
case 82:
            var6['importantForAccessibility'] = var11;
            var12 = _closure1_slot11;
            var16 = _closure1_slot0;
            var23 = _closure1_slot2;
            var9 = var23[var9];
            var9 = var16.bind(var4)(var9);
            var11 = var9.GestureDetector;
            var9 = {};
            var9['gesture'] = var25;
            var14 = _closure1_slot1;
            var13 = var23[var13];
            var13 = var14.bind(var4)(var13);
            var14 = var13.View;
            var13 = {};
            var25 = var15.animatedContainer;
            var15 = new Array(2);
            var15[0] = var25;
            var15[1] = var24;
            var13['style'] = var15;
            var15 = 48;
            var15 = var23[var15];
            var15 = var16.bind(var4)(var15);
            var16 = var15.NotificationPressable;
            var15 = {};
            var15['onPress'] = var22;
            var15['onLongPress'] = var21;
            var22 = var19.duration;
            var21 = inf;
            var19 = undefined;
            if(!(var22 !== var21)) { _fun0002_ip = 84; continue _fun0002 }
case 85:
            var19 = var20;
case 84:
            var15['percent'] = var19;
            var15['hideProgress'] = var18;
            var15['children'] = var17;
            var15 = var12.bind(var4)(var16, var15);
            var13['children'] = var15;
            var13 = var12.bind(var4)(var14, var13);
            var9['children'] = var13;
            var11 = var12.bind(var4)(var11, var9);
            var9 = new Array(2);
            var9[0] = var11;
            var9[1] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();