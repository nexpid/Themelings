// app/modules/in_app_notifications/native/InAppNotificationContainer.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function NotificationWrapper(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var5 = var1.notification;
            var3 = var5.type;
            var2 = _closure1_slot17;
            var2 = var2.MESSAGE;
            if(!(var2 !== var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = _closure1_slot17;
            var2 = var2.MESSAGE_FAILED_TO_SEND;
            if(!(var2 !== var3)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = _closure1_slot17;
            var2 = var2.FORUM_THREAD_CREATED;
            if(!(var2 !== var3)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var2 = _closure1_slot17;
            var2 = var2.BUG_REPORTER;
            if(!(var2 !== var3)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var2 = _closure1_slot17;
            var2 = var2.ALERT;
            if(!(var2 !== var3)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var2 = _closure1_slot17;
            var2 = var2.REACTION;
            if(!(var2 !== var3)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var2 = _closure1_slot17;
            var2 = var2.MESSAGE_REMINDER;
            if(!(var2 !== var3)) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var2 = _closure1_slot17;
            var2 = var2.RESTRICTED_HOURS_WARNING;
            if(!(var2 !== var3)) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var2 = _closure1_slot17;
            var2 = var2.RESTRICTED_SCHEDULE_UPDATED;
            if(!(var2 !== var3)) { _fun0001_ip = 16; continue _fun0001 }
case 18:
            var2 = _closure1_slot17;
            var2 = var2.MESSAGE_REQUEST;
            if(!(var2 !== var3)) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var2 = null;
            return var2;
case 19:
            var6 = _closure1_slot22;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 21;
            var2 = var4[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['notification'] = var5;
            var2 = var6.bind(var4)(var3, var2);
            return var2;
case 16:
            var6 = _closure1_slot22;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 20;
            var2 = var4[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['notification'] = var5;
            var2 = var6.bind(var4)(var3, var2);
            return var2;
case 14:
            var6 = _closure1_slot22;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 19;
            var2 = var4[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['notification'] = var5;
            var2 = var6.bind(var4)(var3, var2);
            return var2;
case 12:
            var6 = _closure1_slot22;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 18;
            var2 = var4[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['notification'] = var5;
            var2 = var6.bind(var4)(var3, var2);
            return var2;
case 10:
            var6 = _closure1_slot22;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 17;
            var2 = var4[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['notification'] = var5;
            var2 = var6.bind(var4)(var3, var2);
            return var2;
case 8:
            var6 = _closure1_slot22;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 16;
            var2 = var4[var2];
            var4 = undefined;
            var2 = var3.bind(var4)(var2);
            var3 = var2.BugReporterNotification;
            var2 = {};
            var2['notification'] = var5;
            var2 = var6.bind(var4)(var3, var2);
            return var2;
case 6:
            var6 = _closure1_slot22;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 15;
            var2 = var4[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['notification'] = var5;
            var2 = var6.bind(var4)(var3, var2);
            return var2;
case 4:
            var6 = _closure1_slot22;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 14;
            var2 = var4[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['notification'] = var5;
            var2 = var6.bind(var4)(var3, var2);
            return var2;
case 2:
            var4 = _closure1_slot22;
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 13;
            var1 = var3[var1];
            var3 = undefined;
            var2 = var2.bind(var3)(var1);
            var1 = {};
            var1['notification'] = var5;
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot35 = var1;
    var1 = function DetachedNotificationContent(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var6 = var1.notification;
            var4 = var6.type;
            var1 = _closure1_slot17;
            var3 = var1.MESSAGE;
            var1 = null;
            if(!(var4 === var3)) { _fun0002_ip = 21; continue _fun0002 }
case 22:
            var5 = _closure1_slot22;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 22;
            var2 = var4[var2];
            var4 = undefined;
            var2 = var3.bind(var4)(var2);
            var3 = var2.MessageNotificationDetachedContent;
            var2 = {};
            var2['notification'] = var6;
            var1 = var5.bind(var4)(var3, var2);
case 21:
            return var1;
        }
    };
    var _closure1_slot36 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var8 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.View;
    var _closure1_slot5 = var8;
    var8 = var4.StyleSheet;
    var _closure1_slot6 = var8;
    var4 = var4.Keyboard;
    var _closure1_slot7 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.DEFAULT_ANIMATION_TIMING;
    var _closure1_slot10 = var7;
    var7 = var4.extrapolateConfig;
    var _closure1_slot11 = var7;
    var7 = var4.MIN_SWIPE_DISTANCE;
    var _closure1_slot12 = var7;
    var7 = var4.MIN_SWIPE_VELOCITY;
    var _closure1_slot13 = var7;
    var7 = var4.NOTIFICATION_BOB_RANGE;
    var _closure1_slot14 = var7;
    var7 = var4.EXPANDABLE_MIN_WINDOW_HEIGHT;
    var _closure1_slot15 = var7;
    var4 = var4.PAN_INPUT_RANGE;
    var _closure1_slot16 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.InAppNotificationTypes;
    var _closure1_slot17 = var7;
    var7 = var4.AnalyticEvents;
    var _closure1_slot18 = var7;
    var7 = var4.AnalyticsSections;
    var _closure1_slot19 = var7;
    var7 = var4.AnalyticsObjects;
    var _closure1_slot20 = var7;
    var4 = var4.AnalyticsObjectTypes;
    var _closure1_slot21 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot22 = var7;
    var4 = var4.jsxs;
    var _closure1_slot23 = var4;
    var4 = {};
    var7 = 200;
    var4['duration'] = var7;
    var7 = 8;
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
    var _closure1_slot24 = var4;
    var4 = 9;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'position': 'absolute', 'left': 0, 'right': 0, 'backgroundColor': 'transparent', 'marginTop': 8, 'top': 0, 'bottom': 0};
    var4['safeAreaContainer'] = var9;
    var9 = {'position': 'absolute', 'zIndex': 0};
    var4['backdrop'] = var9;
    var9 = {'marginLeft': 16, 'marginRight': 16};
    var4['animatedContainer'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot25 = var4;
    var4 = {};
    var7 = "function InAppNotificationContainerTsx1(finished){const{runOnJS,handleDismissNotification}=this.__closure;if(finished){runOnJS(handleDismissNotification)('autodismissed');}}";
    var4['code'] = var7;
    var _closure1_slot26 = var4;
    var4 = {};
    var7 = 'function InAppNotificationContainerTsx2(){const{runOnJS,setInitialized}=this.__closure;return runOnJS(setInitialized)(true);}';
    var4['code'] = var7;
    var _closure1_slot27 = var4;
    var4 = {};
    var7 = 'function InAppNotificationContainerTsx3(){const{withTiming,expandedSV,DEFAULT_ANIMATION_TIMING}=this.__closure;return{opacity:withTiming(expandedSV.get()?1:0,DEFAULT_ANIMATION_TIMING)};}';
    var4['code'] = var7;
    var _closure1_slot28 = var4;
    var4 = {};
    var7 = 'function InAppNotificationContainerTsx4(){const{runOnJS,setPanning}=this.__closure;runOnJS(setPanning)(false);}';
    var4['code'] = var7;
    var _closure1_slot29 = var4;
    var4 = {};
    var7 = "function InAppNotificationContainerTsx5(event){const{velocityY,MIN_SWIPE_VELOCITY,MIN_SWIPE_DISTANCE,isExpandableNotification,notificationGestureY,expandedSV,runOnJS,setExpanded,withTiming,PAN_INPUT_RANGE,DEFAULT_ANIMATION_TIMING,handleDismissNotification,setPanning,withSpring}=this.__closure;const shouldDismiss=Math.abs(velocityY.get())>=MIN_SWIPE_VELOCITY||Math.abs(event.translationY)>=MIN_SWIPE_DISTANCE;if(isExpandableNotification&&event.translationY>MIN_SWIPE_DISTANCE){notificationGestureY.set(0);expandedSV.set(true);runOnJS(setExpanded)(true,'swipe');}else if(shouldDismiss&&event.translationY<=0){notificationGestureY.set(withTiming(event.translationY>0?PAN_INPUT_RANGE[2]:PAN_INPUT_RANGE[0],DEFAULT_ANIMATION_TIMING,'animate-always',function(finished){if(finished){runOnJS(handleDismissNotification)('swipe');}}));}else{runOnJS(setPanning)(false);notificationGestureY.set(withSpring(0,{damping:10,mass:1,stiffness:100,velocity:velocityY.get()},'animate-always'));}}";
    var4['code'] = var7;
    var _closure1_slot30 = var4;
    var4 = {};
    var7 = 'function InAppNotificationContainerTsx6(event){const{startY,isExpandableNotification,notificationGestureY,velocityY}=this.__closure;const rawY=startY.get()+event.translationY;const newY=isExpandableNotification&&rawY>0?rawY:Math.min(rawY,startY.get());notificationGestureY.set(newY);velocityY.set(event.velocityY);}';
    var4['code'] = var7;
    var _closure1_slot31 = var4;
    var4 = {};
    var7 = 'function InAppNotificationContainerTsx7(){const{startY,notificationGestureY,velocityY,runOnJS,setPanning}=this.__closure;startY.set(notificationGestureY.get());velocityY.set(0);runOnJS(setPanning)(true);}';
    var4['code'] = var7;
    var _closure1_slot32 = var4;
    var4 = {};
    var7 = "function InAppNotificationContainerTsx8(finished){const{runOnJS,handleDismissNotification}=this.__closure;if(finished){runOnJS(handleDismissNotification)('swipe');}}";
    var4['code'] = var7;
    var _closure1_slot33 = var4;
    var4 = {};
    var7 = 'function InAppNotificationContainerTsx9(){const{notificationGestureY,scale,isExpandableNotification,interpolate,MIN_SWIPE_DISTANCE,PAN_INPUT_RANGE,NOTIFICATION_BOB_RANGE,extrapolateConfig,initialized}=this.__closure;const gestureY=notificationGestureY.get();const scaleValue=scale.get();if(isExpandableNotification&&gestureY>0){return{transform:[{translateY:interpolate(gestureY,[0,MIN_SWIPE_DISTANCE,PAN_INPUT_RANGE[2]],[0,0,NOTIFICATION_BOB_RANGE],extrapolateConfig)},{scale:initialized?1:scaleValue}],opacity:initialized?1:scaleValue};}const scaleTransform=initialized?interpolate(gestureY,PAN_INPUT_RANGE,[0.3,1,0.3],extrapolateConfig):scaleValue;const opacityTransform=initialized?interpolate(gestureY,PAN_INPUT_RANGE,[0,1,0],extrapolateConfig):scaleValue;return{transform:[{translateY:gestureY},{scale:scaleTransform}],opacity:opacityTransform};}';
    var4['code'] = var7;
    var _closure1_slot34 = var4;
    var4 = 44;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/in_app_notifications/native/InAppNotificationContainer.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function InAppNotificationContainer(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var16 = var1.notification;
            var _closure2_slot0 = var16;
            var1 = _closure1_slot25;
            var4 = undefined;
            var21 = var1.bind(var4)();
            var12 = _closure1_slot4;
            var3 = var12.useMemo;
            var2 = new Array(1);
            var2[0] = var16;
            var1 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 23;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.extractMetadataFromNotification;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var3.bind(var12)(var1, var2);
            var34 = var1.guildId;
            var _closure2_slot1 = var34;
            var24 = var1.channelId;
            var _closure2_slot2 = var24;
            var18 = var1.messageId;
            var _closure2_slot3 = var18;
            var5 = var1.channelType;
            var _closure2_slot4 = var5;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var23 = 8;
            var1 = var2[var23];
            var6 = var3.bind(var4)(var1);
            var1 = var6.useSharedValue;
            var14 = 0;
            var29 = var1.bind(var6)(var14);
            var _closure2_slot5 = var29;
            var1 = var2[var23];
            var6 = var3.bind(var4)(var1);
            var1 = var6.useSharedValue;
            var26 = var1.bind(var6)(var14);
            var _closure2_slot6 = var26;
            var1 = var2[var23];
            var6 = var3.bind(var4)(var1);
            var1 = var6.useSharedValue;
            var35 = var1.bind(var6)(var14);
            var _closure2_slot7 = var35;
            var1 = var2[var23];
            var6 = var3.bind(var4)(var1);
            var1 = var6.useSharedValue;
            var28 = var1.bind(var6)(var14);
            var _closure2_slot8 = var28;
            var1 = var12.useState;
            var36 = null;
            var1 = var1.bind(var12)(var36);
            var17 = _closure1_slot3;
            var15 = 2;
            var1 = var17.bind(var4)(var1, var15);
            var8 = var1[var14];
            var _closure2_slot9 = var8;
            var11 = 1;
            var1 = var1[var11];
            var _closure2_slot10 = var1;
            var6 = var12.useState;
            var20 = false;
            var6 = var6.bind(var12)(var20);
            var6 = var17.bind(var4)(var6, var15);
            var30 = var6[var14];
            var _closure2_slot11 = var30;
            var6 = var6[var11];
            var _closure2_slot12 = var6;
            var6 = var12.useState;
            var6 = var6.bind(var12)(var20);
            var6 = var17.bind(var4)(var6, var15);
            var33 = var6[var14];
            var _closure2_slot13 = var33;
            var6 = var6[var11];
            var _closure2_slot14 = var6;
            var6 = var2[var23];
            var7 = var3.bind(var4)(var6);
            var6 = var7.useSharedValue;
            var32 = var6.bind(var7)(var20);
            var _closure2_slot15 = var32;
            var7 = _closure1_slot1;
            var6 = 24;
            var6 = var2[var6];
            var6 = var7.bind(var4)(var6);
            var9 = var6.bind(var4)(var32);
            var _closure2_slot16 = var9;
            var6 = var12.useState;
            var6 = var6.bind(var12)(var20);
            var10 = var17.bind(var4)(var6, var15);
            var6 = var10[var14];
            var _closure2_slot17 = var6;
            var10 = var10[var11];
            var _closure2_slot18 = var10;
            var10 = var12.useState;
            var10 = var10.bind(var12)(var20);
            var10 = var17.bind(var4)(var10, var15);
            var25 = var10[var14];
            var _closure2_slot19 = var25;
            var22 = var10[var11];
            var _closure2_slot20 = var22;
            var10 = 25;
            var10 = var2[var10];
            var15 = var3.bind(var4)(var10);
            var14 = var15.useStateFromStores;
            var10 = _closure1_slot8;
            var11 = new Array(1);
            var11[0] = var10;
            var10 = function() {
                var2 = _closure1_slot8;
                var1 = var2.isOpen;
                var1 = var1.bind(var2)();
                return var1;
            };
            var10 = var14.bind(var15)(var11, var10);
            var15 = var12.useCallback;
            var14 = function() {
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 26;
                var2 = var6[var1];
                var1 = undefined;
                var4 = var5.bind(var1)(var2);
                var3 = var4.UNSAFE_markDismissibleContentAsDismissed;
                var2 = 27;
                var2 = var6[var2];
                var2 = var5.bind(var1)(var2);
                var2 = var2.DismissibleContent;
                var2 = var2.IN_APP_NOTIFICATION_EXPAND_NUX;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var11 = new Array(0);
            var11 = var15.bind(var12)(var14, var11);
            var _closure2_slot21 = var11;
            var15 = var12.useCallback;
            var14 = new Array(6);
            var14[0] = var32;
            var14[1] = var16;
            var14[2] = var34;
            var14[3] = var24;
            var14[4] = var18;
            var14[5] = var11;
            var11 = function(arg1, arg2) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var5 = arg1;
                    var7 = arg2;
                    var2 = _closure2_slot15;
                    var1 = var2.set;
                    var1 = var1.bind(var2)(var5);
                    if(!var5) { _fun0004_ip = 19; continue _fun0004 }
case 23:
                    var4 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var2 = 28;
                    var2 = var8[var2];
                    var3 = undefined;
                    var9 = var4.bind(var3)(var2);
                    var2 = var9.hideAllActionSheets;
                    var2 = var2.bind(var9)();
                    var2 = _closure2_slot21;
                    var2 = var2.bind(var3)();
                    var2 = 29;
                    var2 = var8[var2];
                    var4 = var4.bind(var3)(var2);
                    var3 = var4.trackWithMetadata;
                    var1 = _closure1_slot18;
                    var2 = var1.IN_APP_NOTIFICATION_EXPANDED;
                    var1 = {};
                    var8 = _closure2_slot0;
                    var9 = var8.type;
                    var1['type'] = var9;
                    var9 = _closure2_slot1;
                    var1['notif_guild_id'] = var9;
                    var9 = _closure2_slot2;
                    var1['notif_channel_id'] = var9;
                    var8 = var8.inAppNotificationId;
                    var1['in_app_notification_id'] = var8;
                    var6 = _closure2_slot3;
                    var1['message_id'] = var6;
                    var6 = null;
                    var8 = var6 != var7;
                    var6 = 'unknown';
                    if(!var8) { _fun0004_ip = 24; continue _fun0004 }
case 25:
                    var6 = var7;
case 24:
                    var1['expand_source'] = var6;
                    var1 = var3.bind(var4)(var2, var1);
case 19:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 28;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.setActionSheetZIndex;
                    var2 = undefined;
                    if(!var5) { _fun0004_ip = 26; continue _fun0004 }
case 27:
                    var2 = 1;
case 26:
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var27 = var15.bind(var12)(var11, var14);
            var _closure2_slot22 = var27;
            var15 = var12.useCallback;
            var14 = new Array(2);
            var14[0] = var9;
            var14[1] = var27;
            var11 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = _closure2_slot16;
                    var3 = !var1;
                    var1 = !var3;
                    if(var3) { _fun0005_ip = 28; continue _fun0005 }
case 29:
                    var4 = _closure2_slot22;
                    var3 = undefined;
                    var2 = false;
                    var2 = var4.bind(var3)(var2);
                    var1 = true;
case 28:
                    return var1;
                }
            };
            var14 = var15.bind(var12)(var11, var14);
            var11 = 30;
            var11 = var2[var11];
            var11 = var7.bind(var4)(var11);
            var11 = var11.bind(var4)(var14, var9);
            var11 = 31;
            var11 = var2[var11];
            var14 = var7.bind(var4)(var11);
            var11 = {};
            var15 = true;
            var11['ignoreKeyboard'] = var15;
            var11 = var14.bind(var4)(var11);
            var17 = var11.width;
            var14 = var11.height;
            var15 = {};
            var15['notification'] = var16;
            var15['windowHeight'] = var14;
            var11 = var15.notification;
            var20 = var15.windowHeight;
            var15 = 10;
            var15 = var2[var15];
            var37 = var3.bind(var4)(var15);
            var31 = var37.useCanExpandInAppNotification;
            var15 = 'InAppNotificationContainer';
            var31 = var31.bind(var37)(var15);
            var15 = var31.canExpand;
            var38 = var31.canReact;
            var37 = var11.type;
            var31 = _closure1_slot17;
            var31 = var31.MESSAGE;
            if(!(var37 === var31)) { _fun0003_ip = 30; continue _fun0003 }
case 31:
            var39 = var11.message;
            var31 = var11.channel;
            if(!var15) { _fun0003_ip = 32; continue _fun0003 }
case 33:
            var11 = _closure1_slot15;
            var15 = var20 > var11;
case 32:
            var20 = _closure1_slot0;
            var40 = _closure1_slot2;
            var11 = 11;
            var11 = var40[var11];
            var37 = var20.bind(var4)(var11);
            var11 = var37.canReactToMessage;
            var37 = var11.bind(var37)(var39, var31);
            var11 = 12;
            var11 = var40[var11];
            var20 = var20.bind(var4)(var11);
            var11 = var20.canReplyToMessage;
            var31 = var11.bind(var20)(var31, var39);
            var20 = {};
            var11 = var15;
            if(!var15) { _fun0003_ip = 34; continue _fun0003 }
case 35:
            var11 = var38;
case 34:
            if(!var11) { _fun0003_ip = 36; continue _fun0003 }
case 37:
            var11 = var37;
case 36:
            var20['showReactionBar'] = var11;
            if(!var15) { _fun0003_ip = 38; continue _fun0003 }
case 39:
            var15 = var31;
case 38:
            var20['showReplyInput'] = var15;
            if(var11) { _fun0003_ip = 40; continue _fun0003 }
case 41:
            var11 = var15;
case 40:
            var20['isExpandableNotification'] = var11;
            _fun0003_ip = 42; continue _fun0003;
case 30:
            var20 = {'showReactionBar': false, 'showReplyInput': false, 'isExpandableNotification': false};
case 42:
            var15 = var20.showReactionBar;
            var _closure2_slot23 = var15;
            var11 = var20.showReplyInput;
            var _closure2_slot24 = var11;
            var20 = var20.isExpandableNotification;
            var _closure2_slot25 = var20;
            var37 = var12.useCallback;
            var31 = new Array(5);
            var31[0] = var6;
            var31[1] = var16;
            var31[2] = var34;
            var31[3] = var24;
            var31[4] = var18;
            var6 = function(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var7 = arg1;
                    var3 = null;
                    if(!(var3 != var7)) { _fun0006_ip = 43; continue _fun0006 }
case 44:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 23;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var4.bind(var1)(var2);
                    var2 = var4.trackDismissed;
                    var1 = {};
                    var6 = _closure2_slot0;
                    var8 = var6.type;
                    var1['type'] = var8;
                    var8 = _closure2_slot1;
                    var1['guildId'] = var8;
                    var8 = _closure2_slot2;
                    var1['channelId'] = var8;
                    var1['dismissReason'] = var7;
                    var6 = var6.inAppNotificationId;
                    var1['inAppNotificationId'] = var6;
                    var5 = _closure2_slot3;
                    var1['messageId'] = var5;
                    var1 = var2.bind(var4)(var1);
case 43:
                    var2 = _closure2_slot17;
                    if(!var2) { _fun0006_ip = 45; continue _fun0006 }
case 46:
                    var2 = _closure2_slot0;
                    var5 = var2.type;
                    var2 = _closure1_slot17;
                    var2 = var2.MESSAGE;
                    if(!(var5 === var2)) { _fun0006_ip = 45; continue _fun0006 }
case 47:
                    var6 = _closure1_slot9;
                    var5 = var6.ackMessageId;
                    var2 = _closure2_slot0;
                    var2 = var2.channel;
                    var2 = var2.id;
                    var8 = var5.bind(var6)(var2);
                    var2 = var3 == var8;
                    if(var2) { _fun0006_ip = 48; continue _fun0006 }
case 49:
                    var7 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var5 = 32;
                    var6 = var6[var5];
                    var5 = undefined;
                    var7 = var7.bind(var5)(var6);
                    var6 = var7.compare;
                    var5 = _closure2_slot0;
                    var5 = var5.message;
                    var5 = var5.id;
                    var6 = var6.bind(var7)(var8, var5);
                    var5 = 0;
                    var2 = var6 < var5;
case 48:
                    if(!var2) { _fun0006_ip = 50; continue _fun0006 }
case 51:
                    var5 = _closure2_slot0;
                    var6 = var5.mentionCount;
                    var8 = _closure1_slot9;
                    var7 = var8.getMentionCount;
                    var5 = var5.channel;
                    var5 = var5.id;
                    var5 = var7.bind(var8)(var5);
                    var2 = var6 >= var5;
case 50:
                    if(!var2) { _fun0006_ip = 45; continue _fun0006 }
case 52:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 33;
                    var5 = var5[var2];
                    var2 = undefined;
                    var8 = var6.bind(var2)(var5);
                    var7 = var8.ack;
                    var2 = _closure2_slot0;
                    var5 = var2.channel;
                    var14 = var5.id;
                    var5 = {};
                    var9 = _closure1_slot19;
                    var9 = var9.IN_APP_NOTIFICATION;
                    var5['section'] = var9;
                    var9 = _closure1_slot20;
                    var9 = var9.ACK_IN_APP_NOTIFICATION_ACTION;
                    var5['object'] = var9;
                    var4 = _closure1_slot21;
                    var4 = var4.ACK_SEMI_AUTOMATIC;
                    var5['objectType'] = var4;
                    var2 = var2.message;
                    var10 = var2.id;
                    var15 = var8;
                    var13 = var5;
                    var12 = true;
                    var11 = true;
                    var2 = var15[var7](var14, var13, var12, var11, var10, var9);
case 45:
                    var2 = _closure2_slot0;
                    var2 = var2.onDismiss;
                    if(!(var3 != var2)) { _fun0006_ip = 53; continue _fun0006 }
case 54:
                    var2 = _closure2_slot0;
                    var1 = var2.onDismiss;
                    var1 = var1.bind(var2)();
case 53:
                    var1 = undefined;
                    return var1;
                }
            };
            var31 = var37.bind(var12)(var6, var31);
            var _closure2_slot26 = var31;
            var6 = var12.useRef;
            var6 = var6.bind(var12)(var36);
            var _closure2_slot27 = var6;
            var37 = var12.useEffect;
            var36 = new Array(3);
            var36[0] = var33;
            var36[1] = var29;
            var36[2] = var31;
            var6 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var2 = _closure2_slot13;
                    if(!var2) { _fun0007_ip = 55; continue _fun0007 }
case 56:
                    var3 = _closure2_slot27;
                    var4 = var3.current;
                    var3 = null;
                    var2 = var3 == var4;
case 55:
                    if(!var2) { _fun0007_ip = 57; continue _fun0007 }
case 58:
                    var2 = _closure2_slot27;
                    var1 = global;
                    var5 = var1.setTimeout;
                    var4 = undefined;
                    var3 = function() {
                        var4 = _closure2_slot5;
                        var3 = var4.set;
                        var13 = _closure1_slot0;
                        var14 = _closure1_slot2;
                        var1 = 34;
                        var5 = var14[var1];
                        var1 = undefined;
                        var9 = var13.bind(var1)(var5);
                        var8 = var9.withTiming;
                        var6 = _closure1_slot16;
                        var5 = 0;
                        var7 = var6[var5];
                        var17 = _closure1_slot10;
                        var5 = function t(arg1) {
                            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                                var1 = arg1;
                                if(!var1) { _fun0008_ip = 59; continue _fun0008 }
case 60:
                                var2 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var1 = 8;
                                var1 = var3[var1];
                                var3 = undefined;
                                var4 = var2.bind(var3)(var1);
                                var2 = var4.runOnJS;
                                var1 = _closure2_slot26;
                                var2 = var2.bind(var4)(var1);
                                var1 = 'autodismissed';
                                var1 = var2.bind(var3)(var1);
case 59:
                                var1 = undefined;
                                return var1;
                            }
                        };
                        var10 = {};
                        var12 = 8;
                        var12 = var14[var12];
                        var12 = var13.bind(var1)(var12);
                        var12 = var12.runOnJS;
                        var10['runOnJS'] = var12;
                        var11 = _closure2_slot26;
                        var10['handleDismissNotification'] = var11;
                        var5['__closure'] = var10;
                        var10 = 1150739008183.0;
                        var5['__workletHash'] = var10;
                        var2 = _closure1_slot26;
                        var5['__initData'] = var2;
                        var16 = 'respect-motion-settings';
                        var19 = var9;
                        var18 = var7;
                        var15 = var5;
                        var2 = var19[var8](var18, var17, var16, var15, var14);
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var1 = 2000;
                    var1 = var5.bind(var4)(var3, var1);
                    var2['current'] = var1;
case 57:
                    var1 = undefined;
                    return var1;
                }
            };
            var6 = var37.bind(var12)(var6, var36);
            var6 = 35;
            var36 = var2[var6];
            var38 = var3.bind(var4)(var36);
            var37 = var38.useUnmountEffect;
            var36 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var4 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 28;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var4.bind(var1)(var2);
                    var2 = var4.setActionSheetZIndex;
                    var2 = var2.bind(var4)(var1);
                    var4 = _closure2_slot27;
                    var5 = var4.current;
                    var4 = null;
                    if(!(var4 != var5)) { _fun0009_ip = 61; continue _fun0009 }
case 62:
                    var4 = global;
                    var5 = var4.clearTimeout;
                    var4 = _closure2_slot27;
                    var4 = var4.current;
                    var4 = var5.bind(var1)(var4);
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 8;
                    var3 = var5[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.cancelAnimation;
                    var2 = _closure2_slot5;
                    var2 = var3.bind(var4)(var2);
case 61:
                    return var1;
                }
            };
            var36 = var37.bind(var38)(var36);
            var6 = var2[var6];
            var7 = var7.bind(var4)(var6);
            var6 = function() {
                var4 = _closure2_slot8;
                var3 = var4.set;
                var13 = _closure1_slot0;
                var14 = _closure1_slot2;
                var5 = 34;
                var5 = var14[var5];
                var12 = undefined;
                var9 = var13.bind(var12)(var5);
                var8 = var9.withTiming;
                var17 = _closure1_slot24;
                var6 = function t() {
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 8;
                    var1 = var3[var1];
                    var3 = undefined;
                    var4 = var2.bind(var3)(var1);
                    var2 = var4.runOnJS;
                    var1 = _closure2_slot12;
                    var2 = var2.bind(var4)(var1);
                    var1 = true;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var5 = {};
                var11 = 8;
                var11 = var14[var11];
                var11 = var13.bind(var12)(var11);
                var11 = var11.runOnJS;
                var5['runOnJS'] = var11;
                var10 = _closure2_slot12;
                var5['setInitialized'] = var10;
                var6['__closure'] = var5;
                var5 = 11548697745556.0;
                var6['__workletHash'] = var5;
                var2 = _closure1_slot27;
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
                    var1 = 8;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.cancelAnimation;
                    var1 = _closure2_slot8;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                return var1;
            };
            var6 = var7.bind(var4)(var6);
            var7 = var12.useEffect;
            var6 = new Array(7);
            var6[0] = var30;
            var36 = var16.type;
            var6[1] = var36;
            var6[2] = var34;
            var6[3] = var24;
            var24 = var16.inAppNotificationId;
            var6[4] = var24;
            var6[5] = var18;
            var6[6] = var5;
            var5 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var1 = _closure2_slot11;
                    if(!var1) { _fun0010_ip = 46; continue _fun0010 }
case 56:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 36;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.track;
                    var1 = _closure1_slot18;
                    var2 = var1.IN_APP_NOTIFICATION_SHOWN;
                    var1 = {};
                    var6 = _closure2_slot0;
                    var7 = var6.type;
                    var1['type'] = var7;
                    var7 = _closure2_slot1;
                    var1['guild_id'] = var7;
                    var7 = _closure2_slot2;
                    var1['channel_id'] = var7;
                    var6 = var6.inAppNotificationId;
                    var1['in_app_notification_id'] = var6;
                    var6 = _closure2_slot3;
                    var1['message_id'] = var6;
                    var5 = _closure2_slot4;
                    var1['channel_type'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
case 46:
                    var1 = undefined;
                    return var1;
                }
            };
            var5 = var7.bind(var12)(var5, var6);
            var5 = var2[var23];
            var7 = var3.bind(var4)(var5);
            var6 = var7.useAnimatedStyle;
            var5 = function xi() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var1 = {};
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 34;
                    var4 = var4[var3];
                    var3 = undefined;
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.withTiming;
                    var6 = _closure2_slot15;
                    var3 = var6.get;
                    var6 = var3.bind(var6)();
                    var3 = 0;
                    if(!var6) { _fun0011_ip = 63; continue _fun0011 }
case 64:
                    var3 = 1;
case 63:
                    var2 = _closure1_slot10;
                    var2 = var4.bind(var5)(var3, var2);
                    var1['opacity'] = var2;
                    return var1;
                }
            };
            var12 = {};
            var34 = 34;
            var18 = var2[var34];
            var18 = var3.bind(var4)(var18);
            var18 = var18.withTiming;
            var12['withTiming'] = var18;
            var12['expandedSV'] = var32;
            var18 = _closure1_slot10;
            var12['DEFAULT_ANIMATION_TIMING'] = var18;
            var5['__closure'] = var12;
            var12 = 2841593511002.0;
            var5['__workletHash'] = var12;
            var12 = _closure1_slot28;
            var5['__initData'] = var12;
            var24 = var6.bind(var7)(var5);
            var12 = 37;
            var2 = var2[var12];
            var2 = var3.bind(var4)(var2);
            var3 = var2.Gesture;
            var2 = var3.Pan;
            var5 = var2.bind(var3)();
            var3 = var5.enabled;
            var2 = !var9;
            if(!var2) { _fun0003_ip = 65; continue _fun0003 }
case 66:
            var2 = !var33;
case 65:
            var7 = var3.bind(var5)(var2);
            var6 = var7.onBegin;
            var3 = function bi() {
                var4 = _closure2_slot7;
                var3 = var4.set;
                var5 = _closure2_slot5;
                var1 = var5.get;
                var1 = var1.bind(var5)();
                var1 = var3.bind(var4)(var1);
                var4 = _closure2_slot6;
                var3 = var4.set;
                var1 = 0;
                var1 = var3.bind(var4)(var1);
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 8;
                var3 = var3[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = var4.runOnJS;
                var2 = _closure2_slot20;
                var3 = var3.bind(var4)(var2);
                var2 = true;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var18 = {};
            var18['startY'] = var35;
            var18['notificationGestureY'] = var29;
            var18['velocityY'] = var26;
            var2 = _closure1_slot0;
            var5 = _closure1_slot2;
            var36 = var5[var23];
            var36 = var2.bind(var4)(var36);
            var36 = var36.runOnJS;
            var18['runOnJS'] = var36;
            var18['setPanning'] = var22;
            var3['__closure'] = var18;
            var18 = 11316955045022.0;
            var3['__workletHash'] = var18;
            var18 = _closure1_slot32;
            var3['__initData'] = var18;
            var7 = var6.bind(var7)(var3);
            var6 = var7.onUpdate;
            var3 = function Gi(arg1) {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var1 = arg1;
                    var4 = _closure2_slot7;
                    var3 = var4.get;
                    var4 = var3.bind(var4)();
                    var3 = var1.translationY;
                    var7 = var4 + var3;
                    var3 = _closure2_slot25;
                    if(!var3) { _fun0012_ip = 67; continue _fun0012 }
case 68:
                    var3 = 0;
                    var5 = var7;
                    if(!(!(var5 > var3))) { _fun0012_ip = 21; continue _fun0012 }
case 67:
                    var3 = global;
                    var6 = var3.Math;
                    var4 = var6.min;
                    var8 = _closure2_slot7;
                    var3 = var8.get;
                    var3 = var3.bind(var8)();
                    var5 = var4.bind(var6)(var7, var3);
case 21:
                    var4 = _closure2_slot5;
                    var3 = var4.set;
                    var3 = var3.bind(var4)(var5);
                    var3 = _closure2_slot6;
                    var2 = var3.set;
                    var1 = var1.velocityY;
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                }
            };
            var18 = {};
            var18['startY'] = var35;
            var18['isExpandableNotification'] = var20;
            var18['notificationGestureY'] = var29;
            var18['velocityY'] = var26;
            var3['__closure'] = var18;
            var18 = 16677375054247.0;
            var3['__workletHash'] = var18;
            var18 = _closure1_slot31;
            var3['__initData'] = var18;
            var7 = var6.bind(var7)(var3);
            var6 = var7.onEnd;
            var3 = function vi(arg1) {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    var3 = arg1;
                    var5 = global;
                    var6 = var5.Math;
                    var4 = var6.abs;
                    var7 = _closure2_slot6;
                    var2 = var7.get;
                    var2 = var2.bind(var7)();
                    var6 = var4.bind(var6)(var2);
                    var4 = _closure1_slot13;
                    var4 = var6 >= var4;
                    if(var4) { _fun0013_ip = 69; continue _fun0013 }
case 70:
                    var7 = var5.Math;
                    var6 = var7.abs;
                    var5 = var3.translationY;
                    var6 = var6.bind(var7)(var5);
                    var5 = _closure1_slot12;
                    var4 = var6 >= var5;
case 69:
                    var5 = _closure2_slot25;
                    if(!var5) { _fun0013_ip = 71; continue _fun0013 }
case 72:
                    var6 = var3.translationY;
                    var5 = _closure1_slot12;
                    if(!(!(var6 > var5))) { _fun0013_ip = 73; continue _fun0013 }
case 71:
                    if(!var4) { _fun0013_ip = 74; continue _fun0013 }
case 75:
                    var4 = var3.translationY;
                    var6 = 0;
                    if(!(!(var4 <= var6))) { _fun0013_ip = 76; continue _fun0013 }
case 74:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var4 = 8;
                    var4 = var10[var4];
                    var8 = undefined;
                    var7 = var9.bind(var8)(var4);
                    var5 = var7.runOnJS;
                    var4 = _closure2_slot20;
                    var5 = var5.bind(var7)(var4);
                    var4 = false;
                    var4 = var5.bind(var8)(var4);
                    var7 = _closure2_slot5;
                    var5 = var7.set;
                    var4 = 38;
                    var4 = var10[var4];
                    var11 = var9.bind(var8)(var4);
                    var10 = var11.withSpring;
                    var9 = {'damping': 10, 'mass': 1, 'stiffness': 100};
                    var8 = _closure2_slot6;
                    var4 = var8.get;
                    var4 = var4.bind(var8)();
                    var9['velocity'] = var4;
                    var8 = 0;
                    var4 = 'animate-always';
                    var4 = var10.bind(var11)(var8, var9, var4);
                    var4 = var5.bind(var7)(var4);
                    _fun0013_ip = 77; continue _fun0013;
case 76:
                    var5 = _closure2_slot5;
                    var4 = var5.set;
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var7 = 34;
                    var7 = var9[var7];
                    var13 = undefined;
                    var10 = var8.bind(var13)(var7);
                    var9 = var10.withTiming;
                    var3 = var3.translationY;
                    if(!(!(var3 > var6))) { _fun0013_ip = 78; continue _fun0013 }
case 79:
                    var3 = _closure1_slot16;
                    var8 = var3[var6];
                    _fun0013_ip = 80; continue _fun0013;
case 78:
                    var6 = _closure1_slot16;
                    var3 = 2;
                    var8 = var6[var3];
case 80:
                    var17 = _closure1_slot10;
                    var6 = function n(arg1) {
                        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                            var1 = arg1;
                            if(!var1) { _fun0014_ip = 59; continue _fun0014 }
case 60:
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 8;
                            var1 = var3[var1];
                            var3 = undefined;
                            var4 = var2.bind(var3)(var1);
                            var2 = var4.runOnJS;
                            var1 = _closure2_slot26;
                            var2 = var2.bind(var4)(var1);
                            var1 = 'swipe';
                            var1 = var2.bind(var3)(var1);
case 59:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var3 = {};
                    var12 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var11 = 8;
                    var11 = var14[var11];
                    var11 = var12.bind(var13)(var11);
                    var11 = var11.runOnJS;
                    var3['runOnJS'] = var11;
                    var11 = _closure2_slot26;
                    var3['handleDismissNotification'] = var11;
                    var6['__closure'] = var3;
                    var3 = 1684596854482.0;
                    var6['__workletHash'] = var3;
                    var3 = _closure1_slot33;
                    var6['__initData'] = var3;
                    var16 = 'animate-always';
                    var19 = var10;
                    var18 = var8;
                    var15 = var6;
                    var3 = var19[var9](var18, var17, var16, var15, var14);
                    var3 = var4.bind(var5)(var3);
                    _fun0013_ip = 77; continue _fun0013;
case 73:
                    var5 = _closure2_slot5;
                    var4 = var5.set;
                    var3 = 0;
                    var3 = var4.bind(var5)(var3);
                    var5 = _closure2_slot15;
                    var3 = var5.set;
                    var4 = true;
                    var3 = var3.bind(var5)(var4);
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 8;
                    var2 = var3[var2];
                    var3 = undefined;
                    var5 = var5.bind(var3)(var2);
                    var2 = var5.runOnJS;
                    var1 = _closure2_slot22;
                    var2 = var2.bind(var5)(var1);
                    var1 = 'swipe';
                    var1 = var2.bind(var3)(var4, var1);
case 77:
                    var1 = undefined;
                    return var1;
                }
            };
            var18 = {};
            var18['velocityY'] = var26;
            var35 = _closure1_slot13;
            var18['MIN_SWIPE_VELOCITY'] = var35;
            var35 = _closure1_slot12;
            var18['MIN_SWIPE_DISTANCE'] = var35;
            var18['isExpandableNotification'] = var20;
            var18['notificationGestureY'] = var29;
            var18['expandedSV'] = var32;
            var36 = var5[var23];
            var36 = var2.bind(var4)(var36);
            var36 = var36.runOnJS;
            var18['runOnJS'] = var36;
            var18['setExpanded'] = var27;
            var34 = var5[var34];
            var34 = var2.bind(var4)(var34);
            var34 = var34.withTiming;
            var18['withTiming'] = var34;
            var34 = _closure1_slot16;
            var18['PAN_INPUT_RANGE'] = var34;
            var36 = _closure1_slot10;
            var18['DEFAULT_ANIMATION_TIMING'] = var36;
            var18['handleDismissNotification'] = var31;
            var18['setPanning'] = var22;
            var36 = 38;
            var36 = var5[var36];
            var36 = var2.bind(var4)(var36);
            var36 = var36.withSpring;
            var18['withSpring'] = var36;
            var3['__closure'] = var18;
            var18 = 5165226193044.0;
            var3['__workletHash'] = var18;
            var18 = _closure1_slot30;
            var3['__initData'] = var18;
            var7 = var6.bind(var7)(var3);
            var6 = var7.onFinalize;
            var3 = function Mi() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 8;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.runOnJS;
                var2 = _closure2_slot20;
                var3 = var3.bind(var4)(var2);
                var2 = false;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var18 = {};
            var36 = var5[var23];
            var36 = var2.bind(var4)(var36);
            var36 = var36.runOnJS;
            var18['runOnJS'] = var36;
            var18['setPanning'] = var22;
            var3['__closure'] = var18;
            var18 = 2178187669683.0;
            var3['__workletHash'] = var18;
            var18 = _closure1_slot29;
            var3['__initData'] = var18;
            var18 = var6.bind(var7)(var3);
            var3 = var5[var23];
            var7 = var2.bind(var4)(var3);
            var6 = var7.useAnimatedStyle;
            var3 = function Ri() {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                    var2 = _closure2_slot5;
                    var1 = var2.get;
                    var11 = var1.bind(var2)();
                    var2 = _closure2_slot8;
                    var1 = var2.get;
                    var4 = var1.bind(var2)();
                    var1 = _closure2_slot25;
                    if(!var1) { _fun0015_ip = 67; continue _fun0015 }
case 68:
                    var1 = 0;
                    if(!(!(var11 > var1))) { _fun0015_ip = 81; continue _fun0015 }
case 67:
                    var1 = {};
                    var3 = {};
                    var3['translateY'] = var11;
                    var2 = new Array(2);
                    var2[0] = var3;
                    var3 = {};
                    var7 = _closure2_slot11;
                    var6 = var4;
                    if(!var7) { _fun0015_ip = 82; continue _fun0015 }
case 83:
                    var10 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var8 = 8;
                    var9 = var9[var8];
                    var8 = undefined;
                    var12 = var10.bind(var8)(var9);
                    var10 = var12.interpolate;
                    var15 = _closure1_slot16;
                    var13 = _closure1_slot11;
                    var14 = [0.3, 1, 0.3];
                    var17 = var12;
                    var16 = var11;
                    var6 = var17[var10](var16, var15, var14, var13, var12);
case 82:
                    var3['scale'] = var6;
                    var2[1] = var3;
                    var1['transform'] = var2;
                    var3 = _closure2_slot11;
                    var2 = var4;
                    if(!var3) { _fun0015_ip = 84; continue _fun0015 }
case 85:
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var6 = 8;
                    var7 = var7[var6];
                    var6 = undefined;
                    var9 = var8.bind(var6)(var7);
                    var8 = var9.interpolate;
                    var15 = _closure1_slot16;
                    var13 = _closure1_slot11;
                    var14 = [0, 1, 0];
                    var17 = var9;
                    var16 = var11;
                    var2 = var17[var8](var16, var15, var14, var13, var12);
case 84:
                    var1['opacity'] = var2;
                    _fun0015_ip = 86; continue _fun0015;
case 81:
                    var2 = {};
                    var3 = {};
                    var9 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var7 = 8;
                    var8 = var8[var7];
                    var7 = undefined;
                    var10 = var9.bind(var7)(var8);
                    var9 = var10.interpolate;
                    var7 = _closure1_slot12;
                    var8 = [0];
                    var8[1] = var7;
                    var12 = _closure1_slot16;
                    var7 = 2;
                    var7 = var12[var7];
                    var8[2] = var7;
                    var12 = _closure1_slot14;
                    var7 = [0, 0];
                    var7[2] = var12;
                    var13 = _closure1_slot11;
                    var17 = var10;
                    var16 = var11;
                    var15 = var8;
                    var14 = var7;
                    var6 = var17[var9](var16, var15, var14, var13, var12);
                    var3['translateY'] = var6;
                    var6 = new Array(2);
                    var6[0] = var3;
                    var7 = {};
                    var9 = _closure2_slot11;
                    var3 = 1;
                    var8 = var3;
                    if(var9) { _fun0015_ip = 87; continue _fun0015 }
case 88:
                    var8 = var4;
case 87:
                    var7['scale'] = var8;
                    var6[1] = var7;
                    var2['transform'] = var6;
                    var5 = _closure2_slot11;
                    if(var5) { _fun0015_ip = 89; continue _fun0015 }
case 90:
                    var3 = var4;
case 89:
                    var2['opacity'] = var3;
                    var1 = var2;
case 86:
                    return var1;
                }
            };
            var22 = {};
            var22['notificationGestureY'] = var29;
            var22['scale'] = var28;
            var22['isExpandableNotification'] = var20;
            var36 = var5[var23];
            var36 = var2.bind(var4)(var36);
            var36 = var36.interpolate;
            var22['interpolate'] = var36;
            var22['MIN_SWIPE_DISTANCE'] = var35;
            var22['PAN_INPUT_RANGE'] = var34;
            var34 = _closure1_slot14;
            var22['NOTIFICATION_BOB_RANGE'] = var34;
            var34 = _closure1_slot11;
            var22['extrapolateConfig'] = var34;
            var22['initialized'] = var30;
            var3['__closure'] = var22;
            var22 = 14122965198084.0;
            var3['__workletHash'] = var22;
            var22 = _closure1_slot34;
            var3['__initData'] = var22;
            var22 = var6.bind(var7)(var3);
            var7 = _closure1_slot4;
            var6 = var7.useMemo;
            var3 = new Array(15);
            var3[0] = var33;
            var3[1] = var32;
            var3[2] = var31;
            var3[3] = var30;
            var3[4] = var9;
            var3[5] = var29;
            var3[6] = var28;
            var3[7] = var27;
            var3[8] = var26;
            var3[9] = var25;
            var3[10] = var20;
            var3[11] = var15;
            var3[12] = var11;
            var3[13] = var8;
            var3[14] = var1;
            var1 = function() {
                var1 = {};
                var3 = _closure2_slot5;
                var1['notificationGestureY'] = var3;
                var3 = _closure2_slot6;
                var1['velocityY'] = var3;
                var3 = _closure2_slot8;
                var1['containerScale'] = var3;
                var3 = _closure2_slot11;
                var1['initialized'] = var3;
                var3 = _closure2_slot13;
                var1['autoDismissing'] = var3;
                var3 = _closure2_slot14;
                var1['setAutoDismissing'] = var3;
                var3 = _closure2_slot18;
                var1['setActionTaken'] = var3;
                var3 = _closure2_slot16;
                var1['isExpanded'] = var3;
                var3 = _closure2_slot15;
                var1['expandedSV'] = var3;
                var3 = _closure2_slot22;
                var1['setExpanded'] = var3;
                var3 = _closure2_slot26;
                var1['handleDismissNotification'] = var3;
                var3 = _closure2_slot19;
                var1['panning'] = var3;
                var3 = _closure2_slot25;
                var1['isExpandableNotification'] = var3;
                var3 = _closure2_slot23;
                var1['showReactionBar'] = var3;
                var3 = _closure2_slot24;
                var1['showReplyInput'] = var3;
                var3 = _closure2_slot9;
                var1['confirmation'] = var3;
                var2 = _closure2_slot10;
                var1['setConfirmation'] = var2;
                return var1;
            };
            var15 = var6.bind(var7)(var1, var3);
            var3 = _closure1_slot23;
            var1 = 39;
            var1 = var5[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.OverlayView;
            var1 = {};
            var5 = _closure1_slot6;
            var5 = var5.absoluteFill;
            var1['style'] = var5;
            var20 = 'box-none';
            var1['pointerEvents'] = var20;
            var8 = _closure1_slot22;
            var6 = _closure1_slot5;
            var5 = {};
            var11 = var21.backdrop;
            var7 = new Array(2);
            var7[0] = var11;
            var11 = {};
            var11['width'] = var17;
            var11['height'] = var14;
            var7[1] = var11;
            var5['style'] = var7;
            var7 = 'none';
            if(!var9) { _fun0003_ip = 91; continue _fun0003 }
case 92:
            var7 = 'auto';
case 91:
            var5['pointerEvents'] = var7;
            var17 = _closure1_slot22;
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var11 = 40;
            var11 = var9[var11];
            var11 = var7.bind(var4)(var11);
            var14 = var11.Backdrop;
            var11 = {};
            var11['style'] = var24;
            var19 = function onDismiss() {
                var2 = _closure1_slot7;
                var1 = var2.dismiss;
                var1 = var1.bind(var2)();
                var3 = _closure2_slot22;
                var1 = undefined;
                var2 = false;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var11['onDismiss'] = var19;
            var19 = 41;
            var24 = var9[var19];
            var24 = var7.bind(var4)(var24);
            var25 = var24.intl;
            var24 = var25.string;
            var19 = var9[var19];
            var19 = var7.bind(var4)(var19);
            var19 = var19.t;
            var19 = var19["9sewOj"];
            var19 = var24.bind(var25)(var19);
            var11['accessibilityLabel'] = var19;
            var11 = var17.bind(var4)(var14, var11);
            var5['children'] = var11;
            var6 = var8.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot22;
            var6 = 42;
            var6 = var9[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.SafeAreaPaddingView;
            var6 = {'top': true, 'bottom': true, 'left': true, 'right': true, 'style': null, 'pointerEvents': 'box-none'};
            var9 = var21.safeAreaContainer;
            var6['style'] = var9;
            var9 = undefined;
            if(!var10) { _fun0003_ip = 93; continue _fun0003 }
case 94:
            var9 = 'no-hide-descendants';
case 93:
            var6['importantForAccessibility'] = var9;
            var11 = _closure1_slot23;
            var14 = _closure1_slot0;
            var17 = _closure1_slot2;
            var9 = 43;
            var9 = var17[var9];
            var9 = var14.bind(var4)(var9);
            var9 = var9.InAppNotificationContext;
            var10 = var9.Provider;
            var9 = {};
            var9['value'] = var15;
            var15 = _closure1_slot22;
            var12 = var17[var12];
            var12 = var14.bind(var4)(var12);
            var14 = var12.GestureDetector;
            var12 = {};
            var12['gesture'] = var18;
            var19 = _closure1_slot22;
            var18 = _closure1_slot1;
            var17 = var17[var23];
            var17 = var18.bind(var4)(var17);
            var18 = var17.View;
            var17 = {};
            var23 = var21.animatedContainer;
            var21 = new Array(2);
            var21[0] = var23;
            var21[1] = var22;
            var17['style'] = var21;
            var17['pointerEvents'] = var20;
            var22 = _closure1_slot22;
            var21 = _closure1_slot35;
            var20 = {};
            var20['notification'] = var16;
            var20 = var22.bind(var4)(var21, var20);
            var17['children'] = var20;
            var17 = var19.bind(var4)(var18, var17);
            var12['children'] = var17;
            var14 = var15.bind(var4)(var14, var12);
            var12 = new Array(2);
            var12[0] = var14;
            var15 = _closure1_slot22;
            var14 = _closure1_slot36;
            var13 = {};
            var13['notification'] = var16;
            var13 = var15.bind(var4)(var14, var13);
            var12[1] = var13;
            var9['children'] = var12;
            var9 = var11.bind(var4)(var10, var9);
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