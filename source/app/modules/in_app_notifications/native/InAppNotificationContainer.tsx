// app/modules/in_app_notifications/native/InAppNotificationContainer.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var1 = function trackDismissed(arg1) {
        var1 = arg1;
        var10 = var1.guildId;
        var9 = var1.channelId;
        var11 = var1.type;
        var8 = var1.dismissReason;
        var7 = var1.inAppNotificationId;
        var6 = var1.messageId;
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 35;
        var3 = var3[var1];
        var1 = undefined;
        var5 = var4.bind(var1)(var3);
        var4 = var5.trackWithMetadata;
        var2 = _closure1_slot13;
        var3 = var2.IN_APP_NOTIFICATION_DISMISSED;
        var2 = {};
        var2['type'] = var11;
        var2['guild_id'] = var10;
        var2['channel_id'] = var9;
        var2['dismiss_reason'] = var8;
        var2['in_app_notification_id'] = var7;
        var2['message_id'] = var6;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var _closure1_slot36 = var1;
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
    var11 = 1;
    var9 = var6[var11];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var9);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var9 = var4.View;
    var _closure1_slot5 = var9;
    var9 = var4.StyleSheet;
    var _closure1_slot6 = var9;
    var4 = var4.Keyboard;
    var _closure1_slot7 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.InAppNotificationTypes;
    var _closure1_slot11 = var8;
    var8 = var4.UserSettingsSections;
    var _closure1_slot12 = var8;
    var8 = var4.AnalyticEvents;
    var _closure1_slot13 = var8;
    var8 = var4.AnalyticsSections;
    var _closure1_slot14 = var8;
    var8 = var4.AnalyticsObjects;
    var _closure1_slot15 = var8;
    var4 = var4.AnalyticsObjectTypes;
    var _closure1_slot16 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot17 = var8;
    var4 = var4.jsxs;
    var _closure1_slot18 = var4;
    var4 = new Array(3);
    var8 = -100;
    var4[0] = var8;
    var4[1] = var7;
    var7 = 100;
    var4[2] = var7;
    var _closure1_slot19 = var4;
    var4 = {};
    var7 = 200;
    var4['duration'] = var7;
    var7 = 8;
    var8 = var6[var7];
    var8 = var5.bind(var1)(var8);
    var10 = var8.Easing;
    var9 = var10.in;
    var8 = var6[var7];
    var8 = var5.bind(var1)(var8);
    var8 = var8.Easing;
    var8 = var8.ease;
    var8 = var9.bind(var10)(var8);
    var4['easing'] = var8;
    var _closure1_slot20 = var4;
    var4 = {};
    var8 = 220;
    var4['duration'] = var8;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var10 = var7.Easing;
    var9 = var10.bezier;
    var15 = 0.16;
    var13 = 0.3;
    var16 = var10;
    var14 = var11;
    var12 = var11;
    var7 = var16[var9](var15, var14, var13, var12, var11);
    var4['easing'] = var7;
    var _closure1_slot21 = var4;
    var4 = {'extrapolateRight': 'clamp', 'extrapolateLeft': 'clamp'};
    var _closure1_slot22 = var4;
    var4 = 9;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'marginLeft': 16, 'marginRight': 16, 'overflow': 'hidden'};
    var4['animatedContainer'] = var9;
    var9 = {'position': 'absolute', 'left': 0, 'right': 0, 'backgroundColor': 'transparent', 'marginTop': 8, 'top': 0, 'bottom': 0};
    var4['safeAreaContainer'] = var9;
    var9 = {'position': 'absolute', 'zIndex': 0};
    var4['backdrop'] = var9;
    var9 = {'position': 'absolute', 'bottom': 4, 'left': 0, 'right': 0};
    var4['expandFooterContainer'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot23 = var4;
    var4 = {};
    var7 = "function InAppNotificationContainerTsx1(finished){const{runOnJS,handleDismissNotification}=this.__closure;if(finished){runOnJS(handleDismissNotification)('autodismissed');}}";
    var4['code'] = var7;
    var _closure1_slot24 = var4;
    var4 = {};
    var7 = 'function InAppNotificationContainerTsx2(){const{runOnJS,setInitialized}=this.__closure;return runOnJS(setInitialized)(true);}';
    var4['code'] = var7;
    var _closure1_slot25 = var4;
    var4 = {};
    var7 = "function InAppNotificationContainerTsx3(finished){const{runOnJS,handleDismissNotification}=this.__closure;if(finished){runOnJS(handleDismissNotification)('timeout');}}";
    var4['code'] = var7;
    var _closure1_slot26 = var4;
    var4 = {};
    var7 = 'function InAppNotificationContainerTsx4(){const{runOnJS,setPanning}=this.__closure;runOnJS(setPanning)(false);}';
    var4['code'] = var7;
    var _closure1_slot27 = var4;
    var4 = {};
    var7 = "function InAppNotificationContainerTsx5(event){const{velocityY,MIN_SWIPE_VELOCITY,MIN_SWIPE_DISTANCE,isExpandableNotification,notificationGestureY,expandedSV,runOnJS,setExpanded,withTiming,PAN_INPUT_RANGE,DEFAULT_ANIMATION_TIMING,handleDismissNotification,setPanning,withSpring}=this.__closure;const shouldDismiss=Math.abs(velocityY.get())>=MIN_SWIPE_VELOCITY||Math.abs(event.translationY)>=MIN_SWIPE_DISTANCE;if(isExpandableNotification&&event.translationY>MIN_SWIPE_DISTANCE){notificationGestureY.set(0);expandedSV.set(true);runOnJS(setExpanded)(true,'swipe');}else if(shouldDismiss&&event.translationY<=0){notificationGestureY.set(withTiming(event.translationY>0?PAN_INPUT_RANGE[2]:PAN_INPUT_RANGE[0],DEFAULT_ANIMATION_TIMING,'animate-always',function(finished){if(finished){runOnJS(handleDismissNotification)('swipe');}}));}else{runOnJS(setPanning)(false);notificationGestureY.set(withSpring(0,{damping:10,mass:1,stiffness:100,velocity:velocityY.get()},'animate-always'));}}";
    var4['code'] = var7;
    var _closure1_slot28 = var4;
    var4 = {};
    var7 = 'function InAppNotificationContainerTsx6(event){const{startY,isExpandableNotification,notificationGestureY,velocityY}=this.__closure;const rawY=startY.get()+event.translationY;const newY=isExpandableNotification&&rawY>0?rawY:Math.min(rawY,startY.get());notificationGestureY.set(newY);velocityY.set(event.velocityY);}';
    var4['code'] = var7;
    var _closure1_slot29 = var4;
    var4 = {};
    var7 = 'function InAppNotificationContainerTsx7(){const{startY,notificationGestureY,velocityY,runOnJS,setPanning}=this.__closure;startY.set(notificationGestureY.get());velocityY.set(0);runOnJS(setPanning)(true);}';
    var4['code'] = var7;
    var _closure1_slot30 = var4;
    var4 = {};
    var7 = "function InAppNotificationContainerTsx8(finished){const{runOnJS,handleDismissNotification}=this.__closure;if(finished){runOnJS(handleDismissNotification)('swipe');}}";
    var4['code'] = var7;
    var _closure1_slot31 = var4;
    var4 = {};
    var7 = 'function InAppNotificationContainerTsx9(){const{notificationGestureY,scale,isExpandableNotification,interpolate,MIN_SWIPE_DISTANCE,PAN_INPUT_RANGE,NOTIFICATION_BOB_RANGE,extrapolateConfig,initialized}=this.__closure;const gestureY=notificationGestureY.get();const scaleValue=scale.get();if(isExpandableNotification&&gestureY>0){return{transform:[{translateY:interpolate(gestureY,[0,MIN_SWIPE_DISTANCE,PAN_INPUT_RANGE[2]],[0,0,NOTIFICATION_BOB_RANGE],extrapolateConfig)},{scale:initialized?1:scaleValue}],opacity:initialized?1:scaleValue};}const scaleTransform=initialized?interpolate(gestureY,PAN_INPUT_RANGE,[0.3,1,0.3],extrapolateConfig):scaleValue;const opacityTransform=initialized?interpolate(gestureY,PAN_INPUT_RANGE,[0,1,0],extrapolateConfig):scaleValue;return{transform:[{translateY:gestureY},{scale:scaleTransform}],opacity:opacityTransform};}';
    var4['code'] = var7;
    var _closure1_slot32 = var4;
    var4 = {};
    var7 = 'function InAppNotificationContainerTsx10(){const{withTiming,expandedSV,DEFAULT_ANIMATION_TIMING}=this.__closure;return{opacity:withTiming(expandedSV.get()?1:0,DEFAULT_ANIMATION_TIMING)};}';
    var4['code'] = var7;
    var _closure1_slot33 = var4;
    var4 = {};
    var7 = 'function InAppNotificationContainerTsx11(){const{withTiming,expandedSV,DEFAULT_ANIMATION_TIMING}=this.__closure;return{opacity:withTiming(expandedSV.get()?1:0,DEFAULT_ANIMATION_TIMING),transform:[{scale:withTiming(expandedSV.get()?1:0.8,DEFAULT_ANIMATION_TIMING)}]};}';
    var4['code'] = var7;
    var _closure1_slot34 = var4;
    var4 = {};
    var7 = 'function InAppNotificationContainerTsx12(){const{withTiming,expandedSV,DEFAULT_ANIMATION_TIMING}=this.__closure;return{opacity:withTiming(expandedSV.get()?1:0,DEFAULT_ANIMATION_TIMING),maxHeight:withTiming(expandedSV.get()?60:0,DEFAULT_ANIMATION_TIMING)};}';
    var4['code'] = var7;
    var _closure1_slot35 = var4;
    var4 = 60;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/in_app_notifications/native/InAppNotificationContainer.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function InAppNotificationContainer(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var30 = var1.notification;
            var _closure2_slot0 = var30;
            var4 = undefined;
            var _closure2_slot21 = var4;
            var _closure2_slot22 = var4;
            var _closure2_slot23 = var4;
            var _closure2_slot24 = var4;
            var _closure2_slot25 = var4;
            var _closure2_slot26 = var4;
            var _closure2_slot27 = var4;
            var _closure2_slot28 = var4;
            var _closure2_slot29 = var4;
            var _closure2_slot30 = var4;
            var _closure2_slot31 = var4;
            var _closure2_slot32 = var4;
            var1 = _closure1_slot23;
            var15 = var1.bind(var4)();
            var20 = _closure1_slot4;
            var3 = var20.useMemo;
            var2 = new Array(1);
            var2[0] = var30;
            var1 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 36;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.extractGuildAndChannelAndMessageIdFromNotification;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var3.bind(var20)(var1, var2);
            var37 = var1.guildId;
            var _closure2_slot1 = var37;
            var33 = var1.channelId;
            var _closure2_slot2 = var33;
            var7 = var1.messageId;
            var _closure2_slot3 = var7;
            var6 = _closure1_slot0;
            var16 = _closure1_slot2;
            var17 = 8;
            var1 = var16[var17];
            var2 = var6.bind(var4)(var1);
            var1 = var2.useSharedValue;
            var26 = 0;
            var39 = var1.bind(var2)(var26);
            var _closure2_slot4 = var39;
            var1 = var16[var17];
            var2 = var6.bind(var4)(var1);
            var1 = var2.useSharedValue;
            var38 = var1.bind(var2)(var26);
            var _closure2_slot5 = var38;
            var1 = var16[var17];
            var3 = var6.bind(var4)(var1);
            var2 = var3.useSharedValue;
            var1 = 100;
            var36 = var2.bind(var3)(var1);
            var _closure2_slot6 = var36;
            var1 = var20.useState;
            var3 = false;
            var1 = var1.bind(var20)(var3);
            var21 = _closure1_slot3;
            var9 = 2;
            var1 = var21.bind(var4)(var1, var9);
            var18 = var1[var26];
            var _closure2_slot7 = var18;
            var5 = 1;
            var1 = var1[var5];
            var _closure2_slot8 = var1;
            var1 = var20.useState;
            var1 = var1.bind(var20)(var3);
            var1 = var21.bind(var4)(var1, var9);
            var41 = var1[var26];
            var _closure2_slot9 = var41;
            var19 = var1[var5];
            var _closure2_slot10 = var19;
            var1 = var20.useState;
            var1 = var1.bind(var20)(var3);
            var1 = var21.bind(var4)(var1, var9);
            var35 = var1[var26];
            var _closure2_slot11 = var35;
            var1 = var1[var5];
            var _closure2_slot12 = var1;
            var2 = var20.useState;
            var13 = null;
            var2 = var2.bind(var20)(var13);
            var2 = var21.bind(var4)(var2, var9);
            var28 = var2[var26];
            var2 = var2[var5];
            var _closure2_slot13 = var2;
            var2 = var16[var17];
            var8 = var6.bind(var4)(var2);
            var2 = var8.useSharedValue;
            var10 = var2.bind(var8)(var3);
            var _closure2_slot14 = var10;
            var14 = _closure1_slot1;
            var2 = 37;
            var2 = var16[var2];
            var2 = var14.bind(var4)(var2);
            var12 = var2.bind(var4)(var10);
            var _closure2_slot15 = var12;
            var2 = var20.useState;
            var2 = var2.bind(var20)(var3);
            var3 = var21.bind(var4)(var2, var9);
            var2 = var3[var26];
            var _closure2_slot16 = var2;
            var3 = var3[var5];
            var _closure2_slot17 = var3;
            var22 = var20.useCallback;
            var8 = function() {
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 38;
                var2 = var6[var1];
                var1 = undefined;
                var4 = var5.bind(var1)(var2);
                var3 = var4.UNSAFE_markDismissibleContentAsDismissed;
                var2 = 39;
                var2 = var6[var2];
                var2 = var5.bind(var1)(var2);
                var2 = var2.DismissibleContent;
                var2 = var2.IN_APP_NOTIFICATION_EXPAND_NUX;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var3 = new Array(0);
            var3 = var22.bind(var20)(var8, var3);
            var _closure2_slot18 = var3;
            var22 = var20.useCallback;
            var8 = new Array(6);
            var8[0] = var10;
            var8[1] = var30;
            var8[2] = var37;
            var8[3] = var33;
            var8[4] = var7;
            var8[5] = var3;
            var3 = function(arg1, arg2) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var5 = arg1;
                    var7 = arg2;
                    var2 = _closure2_slot14;
                    var1 = var2.set;
                    var1 = var1.bind(var2)(var5);
                    if(!var5) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var4 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var2 = 40;
                    var2 = var8[var2];
                    var3 = undefined;
                    var9 = var4.bind(var3)(var2);
                    var2 = var9.hideAllActionSheets;
                    var2 = var2.bind(var9)();
                    var2 = _closure2_slot18;
                    var2 = var2.bind(var3)();
                    var2 = 35;
                    var2 = var8[var2];
                    var4 = var4.bind(var3)(var2);
                    var3 = var4.trackWithMetadata;
                    var1 = _closure1_slot13;
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
                    if(!var8) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var6 = var7;
case 4:
                    var1['expand_source'] = var6;
                    var1 = var3.bind(var4)(var2, var1);
case 2:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 40;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.setActionSheetZIndex;
                    var2 = undefined;
                    if(!var5) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var2 = 1;
case 6:
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var8 = var22.bind(var20)(var3, var8);
            var _closure2_slot19 = var8;
            var23 = var20.useCallback;
            var22 = new Array(2);
            var22[0] = var12;
            var22[1] = var8;
            var3 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = _closure2_slot15;
                    var3 = !var1;
                    var1 = !var3;
                    if(var3) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                    var4 = _closure2_slot19;
                    var3 = undefined;
                    var2 = false;
                    var2 = var4.bind(var3)(var2);
                    var1 = true;
case 8:
                    return var1;
                }
            };
            var22 = var23.bind(var20)(var3, var22);
            var3 = 41;
            var3 = var16[var3];
            var3 = var14.bind(var4)(var3);
            var3 = var3.bind(var4)(var22, var12);
            var3 = var20.useState;
            var3 = var3.bind(var20)(var13);
            var3 = var21.bind(var4)(var3, var9);
            var27 = var3[var26];
            var9 = var3[var5];
            var _closure2_slot20 = var9;
            var5 = var20.useCallback;
            var3 = new Array(3);
            var3[0] = var8;
            var3[1] = var9;
            var3[2] = var1;
            var1 = function(arg1, arg2, arg3) {
                var3 = arg1;
                var5 = arg2;
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 42;
                var4 = var7[var2];
                var1 = undefined;
                var8 = var6.bind(var1)(var4);
                var4 = var8.triggerHapticFeedback;
                var2 = var7[var2];
                var2 = var6.bind(var1)(var2);
                var2 = var2.HapticFeedbackTypes;
                var2 = var2.IMPACT_LIGHT;
                var2 = var4.bind(var8)(var2);
                var2 = 43;
                var4 = var7[var2];
                var11 = var6.bind(var1)(var4);
                var10 = var11.addReaction;
                var4 = var3.channel;
                var9 = var4.id;
                var3 = var3.message;
                var16 = var3.id;
                var3 = 44;
                var3 = var7[var3];
                var4 = var6.bind(var1)(var3);
                var3 = var4.toReactionEmoji;
                var15 = var3.bind(var4)(var5);
                var2 = var7[var2];
                var2 = var6.bind(var1)(var2);
                var2 = var2.ReactionLocations;
                var14 = var2.IN_APP_NOTIFICATION;
                var2 = {};
                var12 = arg3;
                var2['burst'] = var12;
                var18 = var11;
                var17 = var9;
                var13 = var2;
                var2 = var18[var10](var17, var16, var15, var14, var13, var12);
                var3 = _closure2_slot17;
                var4 = true;
                var3 = var3.bind(var1)(var4);
                var8 = _closure2_slot19;
                var3 = false;
                var3 = var8.bind(var1)(var3);
                var3 = _closure2_slot20;
                var3 = var3.bind(var1)(var5);
                var3 = _closure2_slot12;
                var3 = var3.bind(var1)(var4);
                var3 = _closure2_slot13;
                var2 = 13;
                var4 = var7[var2];
                var4 = var6.bind(var1)(var4);
                var5 = var4.intl;
                var4 = var5.string;
                var2 = var7[var2];
                var2 = var6.bind(var1)(var2);
                var2 = var2.t;
                var2 = var2.UjTvrz;
                var2 = var4.bind(var5)(var2);
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var5 = var5.bind(var20)(var1, var3);
            var9 = var20.useCallback;
            var3 = new Array(1);
            var3[0] = var8;
            var1 = function() {
                var3 = _closure1_slot7;
                var1 = var3.dismiss;
                var1 = var1.bind(var3)();
                var4 = _closure2_slot17;
                var1 = undefined;
                var5 = true;
                var4 = var4.bind(var1)(var5);
                var6 = _closure2_slot19;
                var4 = false;
                var4 = var6.bind(var1)(var4);
                var4 = _closure2_slot12;
                var4 = var4.bind(var1)(var5);
                var3 = _closure2_slot13;
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 13;
                var4 = var7[var2];
                var4 = var6.bind(var1)(var4);
                var5 = var4.intl;
                var4 = var5.string;
                var2 = var7[var2];
                var2 = var6.bind(var1)(var2);
                var2 = var2.t;
                var2 = var2.b/4dOF;
                var2 = var4.bind(var5)(var2);
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var1 = var9.bind(var20)(var1, var3);
            var3 = 45;
            var3 = var16[var3];
            var9 = var6.bind(var4)(var3);
            var6 = var9.useCanExpandInAppNotification;
            var3 = 'InAppNotificationContainer';
            var3 = var6.bind(var9)(var3);
            var9 = var3.canExpand;
            var6 = var3.canReact;
            var3 = 46;
            var3 = var16[var3];
            var14 = var14.bind(var4)(var3);
            var3 = {};
            var16 = true;
            var3['ignoreKeyboard'] = var16;
            var3 = var14.bind(var4)(var3);
            var21 = var3.width;
            var20 = var3.height;
            var14 = var30.type;
            var3 = _closure1_slot11;
            var3 = var3.MESSAGE;
            var3 = var14 === var3;
            if(!var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var3 = var9;
case 10:
            if(!var3) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var9 = 500;
            var3 = var20 > var9;
case 12:
            var16 = _closure1_slot4;
            var14 = var16.useCallback;
            var9 = new Array(5);
            var9[0] = var2;
            var9[1] = var30;
            var9[2] = var37;
            var9[3] = var33;
            var9[4] = var7;
            var2 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var6 = arg1;
                    var3 = null;
                    if(!(var3 != var6)) { _fun0004_ip = 14; continue _fun0004 }
case 15:
                    var4 = _closure1_slot36;
                    var2 = {};
                    var5 = _closure2_slot0;
                    var7 = var5.type;
                    var2['type'] = var7;
                    var7 = _closure2_slot1;
                    var2['guildId'] = var7;
                    var7 = _closure2_slot2;
                    var2['channelId'] = var7;
                    var2['dismissReason'] = var6;
                    var5 = var5.inAppNotificationId;
                    var2['inAppNotificationId'] = var5;
                    var1 = _closure2_slot3;
                    var2['messageId'] = var1;
                    var1 = undefined;
                    var1 = var4.bind(var1)(var2);
case 14:
                    var2 = _closure2_slot16;
                    if(!var2) { _fun0004_ip = 16; continue _fun0004 }
case 17:
                    var2 = _closure2_slot0;
                    var5 = var2.type;
                    var2 = _closure1_slot11;
                    var2 = var2.MESSAGE;
                    if(!(var5 === var2)) { _fun0004_ip = 16; continue _fun0004 }
case 18:
                    var6 = _closure1_slot10;
                    var5 = var6.ackMessageId;
                    var2 = _closure2_slot0;
                    var2 = var2.channel;
                    var2 = var2.id;
                    var8 = var5.bind(var6)(var2);
                    var2 = var3 == var8;
                    if(var2) { _fun0004_ip = 19; continue _fun0004 }
case 20:
                    var7 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var5 = 47;
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
case 19:
                    if(!var2) { _fun0004_ip = 21; continue _fun0004 }
case 22:
                    var5 = _closure2_slot0;
                    var6 = var5.mentionCount;
                    var8 = _closure1_slot10;
                    var7 = var8.getMentionCount;
                    var5 = var5.channel;
                    var5 = var5.id;
                    var5 = var7.bind(var8)(var5);
                    var2 = var6 >= var5;
case 21:
                    if(!var2) { _fun0004_ip = 16; continue _fun0004 }
case 23:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 48;
                    var5 = var5[var2];
                    var2 = undefined;
                    var8 = var6.bind(var2)(var5);
                    var7 = var8.ack;
                    var2 = _closure2_slot0;
                    var5 = var2.channel;
                    var14 = var5.id;
                    var5 = {};
                    var9 = _closure1_slot14;
                    var9 = var9.IN_APP_NOTIFICATION;
                    var5['section'] = var9;
                    var9 = _closure1_slot15;
                    var9 = var9.ACK_IN_APP_NOTIFICATION_ACTION;
                    var5['object'] = var9;
                    var4 = _closure1_slot16;
                    var4 = var4.ACK_SEMI_AUTOMATIC;
                    var5['objectType'] = var4;
                    var2 = var2.message;
                    var10 = var2.id;
                    var15 = var8;
                    var13 = var5;
                    var12 = true;
                    var11 = true;
                    var2 = var15[var7](var14, var13, var12, var11, var10, var9);
case 16:
                    var2 = _closure2_slot0;
                    var2 = var2.onDismiss;
                    if(!(var3 != var2)) { _fun0004_ip = 24; continue _fun0004 }
case 25:
                    var2 = _closure2_slot0;
                    var1 = var2.onDismiss;
                    var1 = var1.bind(var2)();
case 24:
                    var1 = undefined;
                    return var1;
                }
            };
            var40 = var14.bind(var16)(var2, var9);
            _closure2_slot21 = var40;
            var2 = {};
            var2['notification'] = var30;
            var2['isExpandEligible'] = var3;
            var2['canReact'] = var6;
            var2['isExpanded'] = var12;
            var2['expandedSV'] = var10;
            var2['setExpanded'] = var8;
            var2['reaction'] = var27;
            var2['onReactionPress'] = var5;
            var2['onMessageSent'] = var1;
            var1 = null;
            if(!var3) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            var1 = var39;
case 26:
            var2['notificationGestureY'] = var1;
            var1 = null;
            if(!var3) { _fun0001_ip = 28; continue _fun0001 }
case 29:
            var1 = var40;
case 28:
            var2['onDismiss'] = var1;
            var1 = function getRenderProps(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = arg1;
                    var11 = var1.notification;
                    var _closure3_slot0 = var11;
                    var7 = var1.isExpandEligible;
                    var4 = var1.canReact;
                    var21 = var1.isExpanded;
                    var _closure3_slot1 = var21;
                    var19 = var1.expandedSV;
                    var2 = var1.setExpanded;
                    var _closure3_slot2 = var2;
                    var10 = var1.onMessageSent;
                    var2 = var1.onReactionPress;
                    var _closure3_slot3 = var2;
                    var20 = var1.notificationGestureY;
                    var15 = var1.onDismiss;
                    var9 = undefined;
                    var _closure3_slot4 = var9;
                    var _closure3_slot5 = var9;
                    var _closure3_slot6 = var9;
                    var _closure3_slot7 = var9;
                    var _closure3_slot8 = var9;
                    var _closure3_slot9 = var9;
                    var _closure3_slot10 = var9;
                    var _closure3_slot11 = var9;
                    var _closure3_slot12 = var9;
                    var _closure3_slot13 = var9;
                    var18 = function onAccessibilityExpand() {
                        var4 = _closure3_slot2;
                        var1 = _closure3_slot1;
                        var3 = !var1;
                        var1 = undefined;
                        var2 = 'accessibility_expand';
                        var2 = var4.bind(var1)(var3, var2);
                        return var1;
                    };
                    var _closure3_slot14 = var18;
                    var2 = var11.type;
                    var1 = _closure1_slot11;
                    var1 = var1.MESSAGE;
                    if(!(var1 !== var2)) { _fun0005_ip = 30; continue _fun0005 }
case 20:
                    var1 = _closure1_slot11;
                    var1 = var1.MESSAGE_FAILED_TO_SEND;
                    if(!(var1 !== var2)) { _fun0005_ip = 31; continue _fun0005 }
case 32:
                    var1 = _closure1_slot11;
                    var1 = var1.FORUM_THREAD_CREATED;
                    if(!(var1 !== var2)) { _fun0005_ip = 33; continue _fun0005 }
case 34:
                    var1 = _closure1_slot11;
                    var1 = var1.BUG_REPORTER;
                    if(!(var1 !== var2)) { _fun0005_ip = 35; continue _fun0005 }
case 36:
                    var1 = _closure1_slot11;
                    var1 = var1.ALERT;
                    if(!(var1 !== var2)) { _fun0005_ip = 37; continue _fun0005 }
case 38:
                    var1 = _closure1_slot11;
                    var1 = var1.REACTION;
                    if(!(var1 !== var2)) { _fun0005_ip = 39; continue _fun0005 }
case 40:
                    var1 = _closure1_slot11;
                    var1 = var1.MESSAGE_REMINDER;
                    if(!(var1 !== var2)) { _fun0005_ip = 41; continue _fun0005 }
case 42:
                    var1 = _closure1_slot11;
                    var1 = var1.RESTRICTED_HOURS_WARNING;
                    if(!(var1 !== var2)) { _fun0005_ip = 43; continue _fun0005 }
case 44:
                    var1 = _closure1_slot11;
                    var1 = var1.RESTRICTED_SCHEDULE_UPDATED;
                    if(!(var1 !== var2)) { _fun0005_ip = 45; continue _fun0005 }
case 46:
                    var1 = {};
                    var2 = null;
                    var1['content'] = var2;
                    return var1;
case 45:
                    var1 = {};
                    var8 = _closure1_slot17;
                    var5 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var2 = 34;
                    var2 = var12[var2];
                    var5 = var5.bind(var9)(var2);
                    var2 = {};
                    var2['notification'] = var11;
                    var2 = var8.bind(var9)(var5, var2);
                    var1['content'] = var2;
                    var2 = function onPress() {
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var1 = 16;
                        var2 = var4[var1];
                        var1 = undefined;
                        var5 = var3.bind(var1)(var2);
                        var2 = var5.popAll;
                        var2 = var2.bind(var5)();
                        var5 = _closure1_slot0;
                        var2 = 28;
                        var2 = var4[var2];
                        var6 = var5.bind(var1)(var2);
                        var5 = var6.openUserSettings;
                        var2 = {};
                        var7 = _closure1_slot12;
                        var7 = var7.FAMILY_CENTER;
                        var2['screen'] = var7;
                        var2 = var5.bind(var6)(var2);
                        var2 = 25;
                        var2 = var4[var2];
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.clearNotification;
                        var2 = var2.bind(var3)();
                        return var1;
                    };
                    var1['onPress'] = var2;
                    return var1;
case 43:
                    var1 = {};
                    var2 = function onPress() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 28;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.openUserSettings;
                        var2 = {};
                        var5 = _closure1_slot12;
                        var5 = var5.FAMILY_CENTER;
                        var2['screen'] = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var1['onPress'] = var2;
                    var8 = _closure1_slot17;
                    var5 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var2 = 34;
                    var2 = var12[var2];
                    var5 = var5.bind(var9)(var2);
                    var2 = {};
                    var2['notification'] = var11;
                    var2 = var8.bind(var9)(var5, var2);
                    var1['content'] = var2;
                    return var1;
case 41:
                    var1 = {};
                    var2 = function onPress() {
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var3 = 16;
                        var6 = var5[var3];
                        var1 = undefined;
                        var7 = var4.bind(var1)(var6);
                        var6 = var7.popAll;
                        var6 = var6.bind(var7)();
                        var3 = var5[var3];
                        var10 = var4.bind(var1)(var3);
                        var9 = var10.pushLazy;
                        var6 = _closure1_slot0;
                        var3 = 19;
                        var3 = var5[var3];
                        var7 = var6.bind(var1)(var3);
                        var3 = 31;
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
                        var3 = 32;
                        var3 = var5[var3];
                        var5 = var4.bind(var1)(var3);
                        var4 = var5.track;
                        var2 = _closure1_slot13;
                        var3 = var2.FOR_LATER_REMINDER_NOTIFICATION_CLICKED;
                        var2 = {};
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
                    var1['onPress'] = var2;
                    var8 = _closure1_slot17;
                    var5 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var2 = 33;
                    var2 = var12[var2];
                    var5 = var5.bind(var9)(var2);
                    var2 = {};
                    var2['notification'] = var11;
                    var2 = var8.bind(var9)(var5, var2);
                    var1['content'] = var2;
                    return var1;
case 39:
                    var2 = var11.channel;
                    _closure3_slot10 = var2;
                    var8 = var11.guild;
                    var1 = var11.message;
                    _closure3_slot11 = var1;
                    var5 = null;
                    var12 = var5 == var8;
                    var1 = undefined;
                    if(var12) { _fun0005_ip = 47; continue _fun0005 }
case 48:
                    var1 = var8.id;
case 47:
                    if(!(var5 == var1)) { _fun0005_ip = 49; continue _fun0005 }
case 50:
                    var1 = var2.guild_id;
case 49:
                    _closure3_slot12 = var1;
                    var1 = var2.id;
                    _closure3_slot13 = var1;
                    var1 = {};
                    var5 = function onPress() {
                        var4 = _closure1_slot36;
                        var3 = {};
                        var1 = _closure3_slot0;
                        var6 = var1.type;
                        var3['type'] = var6;
                        var6 = 'notification_clicked';
                        var3['dismissReason'] = var6;
                        var6 = _closure3_slot12;
                        var3['guildId'] = var6;
                        var6 = _closure3_slot13;
                        var3['channelId'] = var6;
                        var6 = _closure3_slot11;
                        var6 = var6.id;
                        var3['messageId'] = var6;
                        var1 = var1.inAppNotificationId;
                        var3['inAppNotificationId'] = var1;
                        var1 = undefined;
                        var3 = var4.bind(var1)(var3);
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var6 = 16;
                        var6 = var4[var6];
                        var7 = var3.bind(var1)(var6);
                        var6 = var7.popAll;
                        var6 = var6.bind(var7)();
                        var6 = _closure1_slot0;
                        var5 = 17;
                        var5 = var4[var5];
                        var8 = var6.bind(var1)(var5);
                        var7 = var8.transitionToMessage;
                        var5 = _closure3_slot10;
                        var6 = var5.id;
                        var2 = _closure3_slot11;
                        var5 = var2.id;
                        var2 = {};
                        var9 = true;
                        var2['navigationReplace'] = var9;
                        var2 = var7.bind(var8)(var6, var5, var2);
                        var2 = 25;
                        var2 = var4[var2];
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.clearNotification;
                        var2 = var2.bind(var3)();
                        return var1;
                    };
                    var1['onPress'] = var5;
                    var5 = function onSettingsPress() {
                        var4 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var3 = 16;
                        var3 = var1[var3];
                        var6 = undefined;
                        var4 = var4.bind(var6)(var3);
                        var3 = var4.pushLazy;
                        var5 = _closure1_slot0;
                        var2 = 19;
                        var2 = var1[var2];
                        var5 = var5.bind(var6)(var2);
                        var2 = 18;
                        var2 = var1[var2];
                        var1 = var1.paths;
                        var2 = var5.bind(var6)(var2, var1);
                        var1 = {};
                        var5 = _closure3_slot13;
                        var1['channelId'] = var5;
                        var1 = var3.bind(var4)(var2, var1);
                        return var1;
                    };
                    var1['onSettingsPress'] = var5;
                    var12 = _closure1_slot17;
                    var8 = _closure1_slot1;
                    var13 = _closure1_slot2;
                    var5 = 30;
                    var5 = var13[var5];
                    var8 = var8.bind(var9)(var5);
                    var5 = {};
                    var5['notification'] = var11;
                    var5 = var12.bind(var9)(var8, var5);
                    var1['content'] = var5;
                    var2 = var2.type;
                    var1['channelType'] = var2;
                    return var1;
case 37:
                    var1 = var11.channel;
                    _closure3_slot9 = var1;
                    var1 = {};
                    var8 = _closure1_slot17;
                    var5 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var2 = 29;
                    var2 = var12[var2];
                    var5 = var5.bind(var9)(var2);
                    var2 = {};
                    var2['notification'] = var11;
                    var2 = var8.bind(var9)(var5, var2);
                    var1['content'] = var2;
                    var2 = function onPress() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 17;
                        var2 = var2[var1];
                        var1 = undefined;
                        var5 = var3.bind(var1)(var2);
                        var4 = var5.transitionToChannel;
                        var2 = _closure3_slot9;
                        var3 = var2.id;
                        var2 = {};
                        var6 = true;
                        var2['navigationReplace'] = var6;
                        var2 = var4.bind(var5)(var3, var2);
                        return var1;
                    };
                    var1['onPress'] = var2;
                    return var1;
case 35:
                    var1 = {};
                    var8 = _closure1_slot17;
                    var5 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var2 = 27;
                    var2 = var12[var2];
                    var2 = var5.bind(var9)(var2);
                    var5 = var2.BugReporterNotification;
                    var2 = {};
                    var2['notification'] = var11;
                    var2 = var8.bind(var9)(var5, var2);
                    var1['content'] = var2;
                    var2 = function onPress() {
                        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                            var4 = _closure1_slot8;
                            var3 = var4.getField;
                            var1 = 'isReportOpen';
                            var1 = var3.bind(var4)(var1);
                            if(var1) { _fun0006_ip = 51; continue _fun0006 }
case 52:
                            var3 = _closure1_slot36;
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
                            var3 = 16;
                            var6 = var1[var3];
                            var8 = var4.bind(var7)(var6);
                            var6 = var8.popAll;
                            var6 = var6.bind(var8)();
                            var6 = 25;
                            var6 = var1[var6];
                            var8 = var4.bind(var7)(var6);
                            var6 = var8.clearNotification;
                            var6 = var6.bind(var8)();
                            var9 = _closure1_slot8;
                            var8 = var9.setState;
                            var6 = {};
                            var10 = true;
                            var6['isReportOpen'] = var10;
                            var6 = var8.bind(var9)(var6);
                            var3 = var1[var3];
                            var4 = var4.bind(var7)(var3);
                            var3 = var4.pushLazy;
                            var6 = _closure1_slot0;
                            var2 = 19;
                            var2 = var1[var2];
                            var6 = var6.bind(var7)(var2);
                            var2 = 26;
                            var2 = var1[var2];
                            var1 = var1.paths;
                            var2 = var6.bind(var7)(var2, var1);
                            var1 = {};
                            var6 = var5.imageUri;
                            var1['screenshotUri'] = var6;
                            var5 = var5.image;
                            var1['screenshot'] = var5;
                            var1 = var3.bind(var4)(var2, var1);
case 51:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var1['onPress'] = var2;
                    var2 = function onSettingsPress() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 28;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.openUserSettings;
                        var2 = {};
                        var5 = _closure1_slot12;
                        var5 = var5.OVERVIEW;
                        var2['screen'] = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var1['onSettingsPress'] = var2;
                    return var1;
case 33:
                    var1 = var11.thread;
                    _closure3_slot8 = var1;
                    var1 = {};
                    var8 = _closure1_slot17;
                    var5 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var2 = 24;
                    var2 = var12[var2];
                    var5 = var5.bind(var9)(var2);
                    var2 = {};
                    var2['notification'] = var11;
                    var2 = var8.bind(var9)(var5, var2);
                    var1['content'] = var2;
                    var2 = function onPress() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 17;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.transitionToThread;
                        var2 = _closure3_slot8;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var1['onPress'] = var2;
                    var2 = function onSettingsPress() {
                        var4 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var3 = 16;
                        var3 = var1[var3];
                        var6 = undefined;
                        var4 = var4.bind(var6)(var3);
                        var3 = var4.pushLazy;
                        var5 = _closure1_slot0;
                        var2 = 19;
                        var2 = var1[var2];
                        var5 = var5.bind(var6)(var2);
                        var2 = 18;
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
                    var1['onSettingsPress'] = var2;
                    return var1;
case 31:
                    var1 = var11.channelId;
                    _closure3_slot6 = var1;
                    var1 = var11.messageId;
                    _closure3_slot7 = var1;
                    var1 = {};
                    var8 = _closure1_slot17;
                    var5 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var2 = 22;
                    var2 = var12[var2];
                    var5 = var5.bind(var9)(var2);
                    var2 = {};
                    var2['notification'] = var11;
                    var2 = var8.bind(var9)(var5, var2);
                    var1['content'] = var2;
                    var2 = function onPress() {
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var1 = 17;
                        var2 = var9[var1];
                        var1 = undefined;
                        var6 = var8.bind(var1)(var2);
                        var5 = var6.transitionToMessage;
                        var4 = _closure3_slot6;
                        var3 = _closure3_slot7;
                        var2 = {};
                        var7 = 23;
                        var7 = var9[var7];
                        var7 = var8.bind(var1)(var7);
                        var7 = var7.JumpType;
                        var7 = var7.INSTANT;
                        var2['jumpType'] = var7;
                        var2 = var5.bind(var6)(var4, var3, var2);
                        return var1;
                    };
                    var1['onPress'] = var2;
                    return var1;
case 30:
                    var5 = var11.channel;
                    _closure3_slot4 = var5;
                    var16 = var11.message;
                    _closure3_slot5 = var16;
                    var8 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var1 = 10;
                    var1 = var12[var1];
                    var2 = var8.bind(var9)(var1);
                    var1 = var2.getMessageAuthor;
                    var17 = var1.bind(var2)(var16);
                    var1 = 11;
                    var1 = var12[var1];
                    var2 = var8.bind(var9)(var1);
                    var1 = var2.canReactToMessage;
                    var2 = var1.bind(var2)(var16, var5);
                    var1 = 12;
                    var1 = var12[var1];
                    var8 = var8.bind(var9)(var1);
                    var1 = var8.canReplyToMessage;
                    var1 = var1.bind(var8)(var5, var16);
                    var8 = var7;
                    if(!var7) { _fun0005_ip = 53; continue _fun0005 }
case 54:
                    var8 = var4;
case 53:
                    if(!var8) { _fun0005_ip = 55; continue _fun0005 }
case 56:
                    var8 = var2;
case 55:
                    if(!var7) { _fun0005_ip = 57; continue _fun0005 }
case 58:
                    var7 = var1;
case 57:
                    var2 = var8;
                    if(var2) { _fun0005_ip = 59; continue _fun0005 }
case 60:
                    var2 = var7;
case 59:
                    var4 = undefined;
                    if(!var2) { _fun0005_ip = 61; continue _fun0005 }
case 62:
                    var12 = {};
                    var1 = 'expand_toggle';
                    var12['name'] = var1;
                    var22 = _closure1_slot0;
                    var23 = _closure1_slot2;
                    var1 = 13;
                    var13 = var23[var1];
                    var13 = var22.bind(var9)(var13);
                    var14 = var13.intl;
                    var13 = var14.string;
                    var1 = var23[var1];
                    var1 = var22.bind(var9)(var1);
                    var1 = var1.t;
                    var1 = var1.PbxI/x;
                    var1 = var13.bind(var14)(var1);
                    var12['label'] = var1;
                    var1 = new Array(1);
                    var1[0] = var12;
                    var4 = var1;
case 61:
                    var1 = {};
                    var14 = _closure1_slot17;
                    var13 = _closure1_slot1;
                    var22 = _closure1_slot2;
                    var12 = 14;
                    var12 = var22[var12];
                    var13 = var13.bind(var9)(var12);
                    var12 = {};
                    var12['canExpand'] = var2;
                    var12['notification'] = var11;
                    var12['expandedContentVisible'] = var21;
                    var12['expandedSV'] = var19;
                    var19 = null;
                    if(!var2) { _fun0005_ip = 63; continue _fun0005 }
case 64:
                    var19 = var20;
case 63:
                    var12['notificationGestureY'] = var19;
                    var12['onAccessibilityExpand'] = var18;
                    var12['onDismiss'] = var15;
                    var12 = var14.bind(var9)(var13, var12);
                    var1['content'] = var12;
                    var13 = _closure1_slot0;
                    var19 = _closure1_slot2;
                    var12 = 13;
                    var14 = var19[var12];
                    var14 = var13.bind(var9)(var14);
                    var15 = var14.intl;
                    var14 = var15.formatToPlainString;
                    var12 = var19[var12];
                    var12 = var13.bind(var9)(var12);
                    var12 = var12.t;
                    var13 = var12.Hjp1LH;
                    var12 = {};
                    var17 = var17.nick;
                    var12['userName'] = var17;
                    var18 = _closure1_slot1;
                    var17 = 15;
                    var17 = var19[var17];
                    var20 = var18.bind(var9)(var17);
                    var19 = var20.unparse;
                    var18 = var16.content;
                    var17 = var5.id;
                    var16 = true;
                    var16 = var19.bind(var20)(var18, var17, var16);
                    var12['message'] = var16;
                    var12 = var14.bind(var15)(var13, var12);
                    var1['screenReaderAnnouncement'] = var12;
                    var12 = function onPress() {
                        var5 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var1 = 16;
                        var3 = var4[var1];
                        var1 = undefined;
                        var5 = var5.bind(var1)(var3);
                        var3 = var5.popAll;
                        var3 = var3.bind(var5)();
                        var3 = _closure1_slot0;
                        var2 = 17;
                        var2 = var4[var2];
                        var6 = var3.bind(var1)(var2);
                        var5 = var6.transitionToMessage;
                        var3 = _closure3_slot4;
                        var4 = var3.id;
                        var2 = _closure3_slot5;
                        var3 = var2.id;
                        var2 = {};
                        var7 = true;
                        var2['navigationReplace'] = var7;
                        var2 = var5.bind(var6)(var4, var3, var2);
                        return var1;
                    };
                    var1['onPress'] = var12;
                    var12 = function onSettingsPress() {
                        var4 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var3 = 16;
                        var3 = var1[var3];
                        var6 = undefined;
                        var5 = var4.bind(var6)(var3);
                        var4 = var5.pushLazy;
                        var3 = _closure1_slot0;
                        var2 = 19;
                        var2 = var1[var2];
                        var3 = var3.bind(var6)(var2);
                        var2 = 18;
                        var2 = var1[var2];
                        var1 = var1.paths;
                        var3 = var3.bind(var6)(var2, var1);
                        var2 = {};
                        var1 = _closure3_slot4;
                        var1 = var1.id;
                        var2['channelId'] = var1;
                        var1 = 'in-app-notification-settings-modal';
                        var1 = var4.bind(var5)(var3, var2, var1);
                        return var1;
                    };
                    var1['onSettingsPress'] = var12;
                    var5 = var5.type;
                    var1['channelType'] = var5;
                    var5 = undefined;
                    if(!var8) { _fun0005_ip = 65; continue _fun0005 }
case 66:
                    var5 = function(arg1) {
                        var4 = _closure1_slot17;
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 20;
                        var1 = var3[var1];
                        var3 = undefined;
                        var1 = var2.bind(var3)(var1);
                        var2 = var1.MessageNotificationReactBar;
                        var1 = {};
                        var5 = _closure3_slot0;
                        var1['notification'] = var5;
                        var5 = function onReactionPress(arg1, arg2) {
                            var5 = _closure3_slot3;
                            var4 = _closure3_slot0;
                            var3 = undefined;
                            var2 = arg1;
                            var1 = arg2;
                            var1 = var5.bind(var3)(var4, var2, var1);
                            return var1;
                        };
                        var1['onReactionPress'] = var5;
                        var5 = arg1;
                        var1['animationStyle'] = var5;
                        var1 = var4.bind(var3)(var2, var1);
                        return var1;
                    };
case 65:
                    var1['renderExpandedContent'] = var5;
                    var5 = undefined;
                    if(!var7) { _fun0005_ip = 67; continue _fun0005 }
case 68:
                    var8 = _closure1_slot17;
                    var7 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var6 = 21;
                    var6 = var12[var6];
                    var6 = var7.bind(var9)(var6);
                    var7 = var6.MessageReplyInput;
                    var6 = {};
                    var6['notification'] = var11;
                    var6['onMessageSent'] = var10;
                    var5 = var8.bind(var9)(var7, var6);
case 67:
                    var1['expandContentFooter'] = var5;
                    var1['accessibilityActions'] = var4;
                    var3 = function onAccessibilityAction(arg1) {
                        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                            var1 = arg1;
                            var1 = var1.nativeEvent;
                            var2 = var1.actionName;
                            var1 = 'expand_toggle';
                            if(!(var1 === var2)) { _fun0007_ip = 69; continue _fun0007 }
case 70:
                            var2 = _closure3_slot14;
                            var1 = undefined;
                            var1 = var2.bind(var1)();
case 69:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var1['onAccessibilityAction'] = var3;
                    var1['isExpandableNotification'] = var2;
                    return var1;
                }
            };
            var2 = var1.bind(var4)(var2);
            var25 = var2.content;
            var1 = var2.screenReaderAnnouncement;
            _closure2_slot22 = var1;
            var6 = var2.onPress;
            _closure2_slot23 = var6;
            var5 = var2.onSettingsPress;
            _closure2_slot24 = var5;
            var16 = var2.channelType;
            _closure2_slot25 = var16;
            var29 = var2.renderExpandedContent;
            var14 = var2.expandContentFooter;
            var31 = var2.accessibilityActions;
            var24 = var2.onAccessibilityAction;
            var34 = var2.isExpandableNotification;
            _closure2_slot26 = var34;
            var9 = _closure1_slot4;
            var2 = var9.useRef;
            var2 = var2.bind(var9)(var13);
            _closure2_slot27 = var2;
            var22 = var9.useEffect;
            var3 = new Array(3);
            var3[0] = var35;
            var3[1] = var39;
            var3[2] = var40;
            var2 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var2 = _closure2_slot11;
                    if(!var2) { _fun0008_ip = 70; continue _fun0008 }
case 71:
                    var3 = _closure2_slot27;
                    var4 = var3.current;
                    var3 = null;
                    var2 = var3 == var4;
case 70:
                    if(!var2) { _fun0008_ip = 72; continue _fun0008 }
case 52:
                    var2 = _closure2_slot27;
                    var1 = global;
                    var5 = var1.setTimeout;
                    var4 = undefined;
                    var3 = function() {
                        var4 = _closure2_slot4;
                        var3 = var4.set;
                        var13 = _closure1_slot0;
                        var14 = _closure1_slot2;
                        var1 = 49;
                        var5 = var14[var1];
                        var1 = undefined;
                        var9 = var13.bind(var1)(var5);
                        var8 = var9.withTiming;
                        var6 = _closure1_slot19;
                        var5 = 0;
                        var7 = var6[var5];
                        var17 = _closure1_slot21;
                        var5 = function n(arg1) {
                            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                                var1 = arg1;
                                if(!var1) { _fun0009_ip = 73; continue _fun0009 }
case 74:
                                var2 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var1 = 8;
                                var1 = var3[var1];
                                var3 = undefined;
                                var4 = var2.bind(var3)(var1);
                                var2 = var4.runOnJS;
                                var1 = _closure2_slot21;
                                var2 = var2.bind(var4)(var1);
                                var1 = 'autodismissed';
                                var1 = var2.bind(var3)(var1);
case 73:
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
                        var11 = _closure2_slot21;
                        var10['handleDismissNotification'] = var11;
                        var5['__closure'] = var10;
                        var10 = 1150739008183.0;
                        var5['__workletHash'] = var10;
                        var2 = _closure1_slot24;
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
case 72:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var22.bind(var9)(var2, var3);
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var22 = 50;
            var23 = var2[var22];
            var43 = var3.bind(var4)(var23);
            var42 = var43.useUnmountEffect;
            var23 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var4 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 40;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var4.bind(var1)(var2);
                    var2 = var4.setActionSheetZIndex;
                    var2 = var2.bind(var4)(var1);
                    var4 = _closure2_slot27;
                    var5 = var4.current;
                    var4 = null;
                    if(!(var4 != var5)) { _fun0010_ip = 75; continue _fun0010 }
case 76:
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
                    var2 = _closure2_slot4;
                    var2 = var3.bind(var4)(var2);
case 75:
                    return var1;
                }
            };
            var23 = var42.bind(var43)(var23);
            var23 = _closure1_slot1;
            var22 = var2[var22];
            var23 = var23.bind(var4)(var22);
            var22 = function() {
                var4 = _closure2_slot5;
                var3 = var4.set;
                var13 = _closure1_slot0;
                var14 = _closure1_slot2;
                var5 = 49;
                var5 = var14[var5];
                var12 = undefined;
                var9 = var13.bind(var12)(var5);
                var8 = var9.withTiming;
                var17 = _closure1_slot20;
                var6 = function n() {
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 8;
                    var1 = var3[var1];
                    var3 = undefined;
                    var4 = var2.bind(var3)(var1);
                    var2 = var4.runOnJS;
                    var1 = _closure2_slot8;
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
                var10 = _closure2_slot8;
                var5['setInitialized'] = var10;
                var6['__closure'] = var5;
                var5 = 11548697745556.0;
                var6['__workletHash'] = var5;
                var2 = _closure1_slot25;
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
                    var1 = _closure2_slot5;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                return var1;
            };
            var22 = var23.bind(var4)(var22);
            var23 = var9.useEffect;
            var22 = new Array(7);
            var22[0] = var18;
            var42 = var30.type;
            var22[1] = var42;
            var22[2] = var37;
            var22[3] = var33;
            var42 = var30.inAppNotificationId;
            var22[4] = var42;
            var22[5] = var7;
            var22[6] = var16;
            var16 = function() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var1 = _closure2_slot7;
                    if(!var1) { _fun0011_ip = 77; continue _fun0011 }
case 71:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 32;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.track;
                    var1 = _closure1_slot13;
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
                    var5 = _closure2_slot25;
                    var1['channel_type'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
case 77:
                    var1 = undefined;
                    return var1;
                }
            };
            var16 = var23.bind(var9)(var16, var22);
            var16 = var30.duration;
            _closure2_slot28 = var16;
            var23 = var9.useEffect;
            var22 = new Array(9);
            var22[0] = var18;
            var22[1] = var41;
            var22[2] = var30;
            var22[3] = var36;
            var22[4] = var40;
            var22[5] = var12;
            var22[6] = var10;
            var22[7] = var16;
            var22[8] = var35;
            var16 = function() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var2 = _closure2_slot7;
                    if(!var2) { _fun0012_ip = 78; continue _fun0012 }
case 79:
                    var2 = _closure2_slot9;
                    if(var2) { _fun0012_ip = 78; continue _fun0012 }
case 70:
                    var3 = _closure2_slot28;
                    var2 = inf;
                    if(!(var3 !== var2)) { _fun0012_ip = 78; continue _fun0012 }
case 80:
                    var2 = _closure2_slot15;
                    if(var2) { _fun0012_ip = 78; continue _fun0012 }
case 81:
                    var2 = _closure2_slot11;
                    if(var2) { _fun0012_ip = 78; continue _fun0012 }
case 82:
                    var4 = _closure2_slot6;
                    var2 = var4.get;
                    var6 = var2.bind(var4)();
                    var3 = var4.set;
                    var13 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var5 = 49;
                    var5 = var14[var5];
                    var12 = undefined;
                    var9 = var13.bind(var12)(var5);
                    var8 = var9.withTiming;
                    var7 = {};
                    var5 = 100;
                    var6 = var6 / var5;
                    var5 = _closure2_slot28;
                    var5 = var6 * var5;
                    var7['duration'] = var5;
                    var11 = 8;
                    var5 = var14[var11];
                    var5 = var13.bind(var12)(var5);
                    var5 = var5.Easing;
                    var5 = var5.linear;
                    var7['easing'] = var5;
                    var6 = function n(arg1) {
                        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                            var1 = arg1;
                            if(!var1) { _fun0013_ip = 83; continue _fun0013 }
case 74:
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 8;
                            var1 = var3[var1];
                            var3 = undefined;
                            var4 = var2.bind(var3)(var1);
                            var2 = var4.runOnJS;
                            var1 = _closure2_slot21;
                            var2 = var2.bind(var4)(var1);
                            var1 = 'timeout';
                            var1 = var2.bind(var3)(var1);
case 83:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var5 = {};
                    var11 = var14[var11];
                    var11 = var13.bind(var12)(var11);
                    var11 = var11.runOnJS;
                    var5['runOnJS'] = var11;
                    var10 = _closure2_slot21;
                    var5['handleDismissNotification'] = var10;
                    var6['__closure'] = var5;
                    var5 = 14406601796666.0;
                    var6['__workletHash'] = var5;
                    var2 = _closure1_slot26;
                    var6['__initData'] = var2;
                    var18 = 0;
                    var16 = 'animate-always';
                    var19 = var9;
                    var17 = var7;
                    var15 = var6;
                    var2 = var19[var8](var18, var17, var16, var15, var14);
                    var2 = var3.bind(var4)(var2);
                    var1 = function() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 8;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.cancelAnimation;
                        var2 = _closure2_slot6;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    return var1;
case 78:
                    var1 = undefined;
                    return var1;
                }
            };
            var16 = var23.bind(var9)(var16, var22);
            var16 = var2[var17];
            var22 = var3.bind(var4)(var16);
            var16 = var22.useSharedValue;
            var23 = var16.bind(var22)(var26);
            _closure2_slot29 = var23;
            var16 = var2[var17];
            var22 = var3.bind(var4)(var16);
            var16 = var22.useSharedValue;
            var22 = var16.bind(var22)(var26);
            _closure2_slot30 = var22;
            var41 = var9.useCallback;
            var26 = new Array(2);
            var26[0] = var22;
            var26[1] = var39;
            var16 = function() {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    var3 = global;
                    var5 = var3.Math;
                    var4 = var5.abs;
                    var6 = _closure2_slot30;
                    var1 = var6.get;
                    var1 = var1.bind(var6)();
                    var4 = var4.bind(var5)(var1);
                    var1 = 100;
                    var1 = var4 >= var1;
                    if(var1) { _fun0014_ip = 84; continue _fun0014 }
case 85:
                    var4 = var3.Math;
                    var3 = var4.abs;
                    var5 = _closure2_slot4;
                    var2 = var5.get;
                    var2 = var2.bind(var5)();
                    var3 = var3.bind(var4)(var2);
                    var2 = 5;
                    var1 = var3 >= var2;
case 84:
                    return var1;
                }
            };
            var41 = var41.bind(var9)(var16, var26);
            _closure2_slot31 = var41;
            var26 = var9.useCallback;
            var16 = new Array(9);
            var16[0] = var41;
            var16[1] = var35;
            var41 = var30.type;
            var16[2] = var41;
            var41 = var30.inAppNotificationId;
            var16[3] = var41;
            var16[4] = var37;
            var16[5] = var33;
            var16[6] = var7;
            var16[7] = var36;
            var16[8] = var12;
            var7 = function(arg1, arg2) {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                    var2 = arg2;
                    var3 = _closure2_slot31;
                    var1 = undefined;
                    var3 = var3.bind(var1)();
                    var3 = !var3;
                    if(var3) { _fun0015_ip = 86; continue _fun0015 }
case 87:
                    var3 = _closure2_slot15;
case 86:
                    if(var3) { _fun0015_ip = 88; continue _fun0015 }
case 3:
                    var3 = _closure2_slot11;
case 88:
                    if(!var3) { _fun0015_ip = 89; continue _fun0015 }
case 90:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 35;
                    var3 = var5[var3];
                    var6 = var4.bind(var1)(var3);
                    var5 = var6.trackWithMetadata;
                    var4 = {};
                    var3 = _closure2_slot0;
                    var7 = var3.type;
                    var4['type'] = var7;
                    var7 = _closure2_slot1;
                    var4['notif_guild_id'] = var7;
                    var7 = _closure2_slot2;
                    var4['notif_channel_id'] = var7;
                    var7 = _closure2_slot3;
                    var4['message_id'] = var7;
                    var3 = var3.inAppNotificationId;
                    var4['in_app_notification_id'] = var3;
                    var3 = global;
                    var8 = var3.Math;
                    var7 = var8.floor;
                    var3 = _closure2_slot6;
                    var10 = 'number';
                    var3 = typeof var3;
                    if(!(var10 !== var3)) { _fun0015_ip = 91; continue _fun0015 }
case 92:
                    var10 = _closure2_slot6;
                    var3 = var10.get;
                    var3 = var3.bind(var10)();
                    _fun0015_ip = 4; continue _fun0015;
case 91:
                    var3 = _closure2_slot6;
case 4:
                    var3 = var7.bind(var8)(var3);
                    var4['percent'] = var3;
                    var3 = arg1;
                    var3 = var5.bind(var6)(var3, var4);
                    var3 = null;
                    if(!(var3 != var2)) { _fun0015_ip = 89; continue _fun0015 }
case 93:
                    var2 = var2.bind(var1)();
case 89:
                    return var1;
                }
            };
            var16 = var26.bind(var9)(var7, var16);
            _closure2_slot32 = var16;
            var26 = var9.useCallback;
            var7 = new Array(2);
            var7[0] = var16;
            var7[1] = var6;
            var6 = function() {
                var4 = _closure2_slot32;
                var2 = _closure1_slot13;
                var3 = var2.IN_APP_NOTIFICATION_CLICKED;
                var2 = _closure2_slot23;
                var1 = undefined;
                var2 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var37 = var26.bind(var9)(var6, var7);
            var7 = var9.useCallback;
            var6 = new Array(4);
            var6[0] = var16;
            var6[1] = var5;
            var6[2] = var34;
            var6[3] = var8;
            var5 = function() {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                    var2 = _closure2_slot26;
                    if(var2) { _fun0016_ip = 94; continue _fun0016 }
case 71:
                    var5 = _closure2_slot32;
                    var2 = _closure1_slot13;
                    var4 = var2.IN_APP_NOTIFICATION_LONG_PRESSED;
                    var3 = _closure2_slot24;
                    var2 = undefined;
                    var2 = var5.bind(var2)(var4, var3);
                    _fun0016_ip = 95; continue _fun0016;
case 94:
                    var4 = _closure2_slot19;
                    var3 = undefined;
                    var2 = true;
                    var1 = 'long_press';
                    var1 = var4.bind(var3)(var2, var1);
case 95:
                    var1 = undefined;
                    return var1;
                }
            };
            var33 = var7.bind(var9)(var5, var6);
            var9 = 51;
            var2 = var2[var9];
            var2 = var3.bind(var4)(var2);
            var3 = var2.Gesture;
            var2 = var3.Pan;
            var5 = var2.bind(var3)();
            var3 = var5.enabled;
            var2 = !var12;
            if(!var2) { _fun0001_ip = 96; continue _fun0001 }
case 97:
            var2 = !var35;
case 96:
            var7 = var3.bind(var5)(var2);
            var6 = var7.onBegin;
            var3 = function qn() {
                var4 = _closure2_slot29;
                var3 = var4.set;
                var5 = _closure2_slot4;
                var1 = var5.get;
                var1 = var1.bind(var5)();
                var1 = var3.bind(var4)(var1);
                var4 = _closure2_slot30;
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
                var2 = _closure2_slot10;
                var3 = var3.bind(var4)(var2);
                var2 = true;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var16 = {};
            var16['startY'] = var23;
            var16['notificationGestureY'] = var39;
            var16['velocityY'] = var22;
            var2 = _closure1_slot0;
            var5 = _closure1_slot2;
            var26 = var5[var17];
            var26 = var2.bind(var4)(var26);
            var26 = var26.runOnJS;
            var16['runOnJS'] = var26;
            var16['setPanning'] = var19;
            var3['__closure'] = var16;
            var16 = 11316955045022.0;
            var3['__workletHash'] = var16;
            var16 = _closure1_slot30;
            var3['__initData'] = var16;
            var7 = var6.bind(var7)(var3);
            var6 = var7.onUpdate;
            var3 = function Zn(arg1) {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                    var1 = arg1;
                    var4 = _closure2_slot29;
                    var3 = var4.get;
                    var4 = var3.bind(var4)();
                    var3 = var1.translationY;
                    var7 = var4 + var3;
                    var3 = _closure2_slot26;
                    if(!var3) { _fun0017_ip = 85; continue _fun0017 }
case 98:
                    var3 = 0;
                    var5 = var7;
                    if(!(!(var5 > var3))) { _fun0017_ip = 99; continue _fun0017 }
case 85:
                    var3 = global;
                    var6 = var3.Math;
                    var4 = var6.min;
                    var8 = _closure2_slot29;
                    var3 = var8.get;
                    var3 = var3.bind(var8)();
                    var5 = var4.bind(var6)(var7, var3);
case 99:
                    var4 = _closure2_slot4;
                    var3 = var4.set;
                    var3 = var3.bind(var4)(var5);
                    var3 = _closure2_slot30;
                    var2 = var3.set;
                    var1 = var1.velocityY;
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                }
            };
            var16 = {};
            var16['startY'] = var23;
            var16['isExpandableNotification'] = var34;
            var16['notificationGestureY'] = var39;
            var16['velocityY'] = var22;
            var3['__closure'] = var16;
            var16 = 16677375054247.0;
            var3['__workletHash'] = var16;
            var16 = _closure1_slot29;
            var3['__initData'] = var16;
            var7 = var6.bind(var7)(var3);
            var6 = var7.onEnd;
            var3 = function Xn(arg1) {
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                    var5 = arg1;
                    var3 = global;
                    var6 = var3.Math;
                    var4 = var6.abs;
                    var7 = _closure2_slot30;
                    var2 = var7.get;
                    var2 = var2.bind(var7)();
                    var4 = var4.bind(var6)(var2);
                    var2 = 100;
                    var2 = var4 >= var2;
                    if(var2) { _fun0018_ip = 99; continue _fun0018 }
case 100:
                    var6 = var3.Math;
                    var4 = var6.abs;
                    var3 = var5.translationY;
                    var4 = var4.bind(var6)(var3);
                    var3 = 25;
                    var2 = var4 >= var3;
case 99:
                    var3 = _closure2_slot26;
                    if(!var3) { _fun0018_ip = 101; continue _fun0018 }
case 102:
                    var4 = var5.translationY;
                    var3 = 25;
                    if(!(!(var4 > var3))) { _fun0018_ip = 103; continue _fun0018 }
case 101:
                    if(!var2) { _fun0018_ip = 104; continue _fun0018 }
case 105:
                    var2 = var5.translationY;
                    var6 = 0;
                    if(!(!(var2 <= var6))) { _fun0018_ip = 106; continue _fun0018 }
case 104:
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var2 = 8;
                    var2 = var9[var2];
                    var7 = undefined;
                    var4 = var8.bind(var7)(var2);
                    var3 = var4.runOnJS;
                    var2 = _closure2_slot10;
                    var3 = var3.bind(var4)(var2);
                    var2 = false;
                    var2 = var3.bind(var7)(var2);
                    var4 = _closure2_slot4;
                    var3 = var4.set;
                    var2 = 52;
                    var2 = var9[var2];
                    var10 = var8.bind(var7)(var2);
                    var9 = var10.withSpring;
                    var8 = {'damping': 10, 'mass': 1, 'stiffness': 100};
                    var7 = _closure2_slot30;
                    var2 = var7.get;
                    var2 = var2.bind(var7)();
                    var8['velocity'] = var2;
                    var7 = 0;
                    var2 = 'animate-always';
                    var2 = var9.bind(var10)(var7, var8, var2);
                    var2 = var3.bind(var4)(var2);
                    _fun0018_ip = 107; continue _fun0018;
case 106:
                    var4 = _closure2_slot4;
                    var3 = var4.set;
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var7 = 49;
                    var7 = var9[var7];
                    var13 = undefined;
                    var9 = var8.bind(var13)(var7);
                    var8 = var9.withTiming;
                    var5 = var5.translationY;
                    if(!(!(var5 > var6))) { _fun0018_ip = 108; continue _fun0018 }
case 109:
                    var5 = _closure1_slot19;
                    var7 = var5[var6];
                    _fun0018_ip = 110; continue _fun0018;
case 108:
                    var6 = _closure1_slot19;
                    var5 = 2;
                    var7 = var6[var5];
case 110:
                    var17 = _closure1_slot21;
                    var5 = function t(arg1) {
                        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                            var1 = arg1;
                            if(!var1) { _fun0019_ip = 73; continue _fun0019 }
case 74:
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 8;
                            var1 = var3[var1];
                            var3 = undefined;
                            var4 = var2.bind(var3)(var1);
                            var2 = var4.runOnJS;
                            var1 = _closure2_slot21;
                            var2 = var2.bind(var4)(var1);
                            var1 = 'swipe';
                            var1 = var2.bind(var3)(var1);
case 73:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var10 = {};
                    var12 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var11 = 8;
                    var11 = var14[var11];
                    var11 = var12.bind(var13)(var11);
                    var11 = var11.runOnJS;
                    var10['runOnJS'] = var11;
                    var11 = _closure2_slot21;
                    var10['handleDismissNotification'] = var11;
                    var5['__closure'] = var10;
                    var10 = 1684596854482.0;
                    var5['__workletHash'] = var10;
                    var2 = _closure1_slot31;
                    var5['__initData'] = var2;
                    var16 = 'animate-always';
                    var19 = var9;
                    var18 = var7;
                    var15 = var5;
                    var2 = var19[var8](var18, var17, var16, var15, var14);
                    var2 = var3.bind(var4)(var2);
                    _fun0018_ip = 107; continue _fun0018;
case 103:
                    var4 = _closure2_slot4;
                    var3 = var4.set;
                    var2 = 0;
                    var2 = var3.bind(var4)(var2);
                    var3 = _closure2_slot14;
                    var2 = var3.set;
                    var4 = true;
                    var2 = var2.bind(var3)(var4);
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 8;
                    var2 = var3[var2];
                    var3 = undefined;
                    var5 = var5.bind(var3)(var2);
                    var2 = var5.runOnJS;
                    var1 = _closure2_slot19;
                    var2 = var2.bind(var5)(var1);
                    var1 = 'swipe';
                    var1 = var2.bind(var3)(var4, var1);
case 107:
                    var1 = undefined;
                    return var1;
                }
            };
            var16 = {'velocityY': null, 'MIN_SWIPE_VELOCITY': 100, 'MIN_SWIPE_DISTANCE': 25};
            var16['velocityY'] = var22;
            var26 = 25;
            var16['isExpandableNotification'] = var34;
            var16['notificationGestureY'] = var39;
            var16['expandedSV'] = var10;
            var22 = var5[var17];
            var22 = var2.bind(var4)(var22);
            var22 = var22.runOnJS;
            var16['runOnJS'] = var22;
            var16['setExpanded'] = var8;
            var22 = 49;
            var8 = var5[var22];
            var8 = var2.bind(var4)(var8);
            var8 = var8.withTiming;
            var16['withTiming'] = var8;
            var23 = _closure1_slot19;
            var16['PAN_INPUT_RANGE'] = var23;
            var8 = _closure1_slot21;
            var16['DEFAULT_ANIMATION_TIMING'] = var8;
            var16['handleDismissNotification'] = var40;
            var16['setPanning'] = var19;
            var40 = 52;
            var40 = var5[var40];
            var40 = var2.bind(var4)(var40);
            var40 = var40.withSpring;
            var16['withSpring'] = var40;
            var3['__closure'] = var16;
            var16 = 5165226193044.0;
            var3['__workletHash'] = var16;
            var16 = _closure1_slot28;
            var3['__initData'] = var16;
            var7 = var6.bind(var7)(var3);
            var6 = var7.onFinalize;
            var3 = function Kn() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 8;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.runOnJS;
                var2 = _closure2_slot10;
                var3 = var3.bind(var4)(var2);
                var2 = false;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var16 = {};
            var40 = var5[var17];
            var40 = var2.bind(var4)(var40);
            var40 = var40.runOnJS;
            var16['runOnJS'] = var40;
            var16['setPanning'] = var19;
            var3['__closure'] = var16;
            var16 = 2178187669683.0;
            var3['__workletHash'] = var16;
            var16 = _closure1_slot27;
            var3['__initData'] = var16;
            var19 = var6.bind(var7)(var3);
            var3 = var5[var17];
            var7 = var2.bind(var4)(var3);
            var6 = var7.useAnimatedStyle;
            var3 = function Qn() {
                _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                    var2 = _closure2_slot4;
                    var1 = var2.get;
                    var11 = var1.bind(var2)();
                    var2 = _closure2_slot5;
                    var1 = var2.get;
                    var4 = var1.bind(var2)();
                    var1 = _closure2_slot26;
                    if(!var1) { _fun0020_ip = 85; continue _fun0020 }
case 98:
                    var1 = 0;
                    if(!(!(var11 > var1))) { _fun0020_ip = 111; continue _fun0020 }
case 85:
                    var1 = {};
                    var3 = {};
                    var3['translateY'] = var11;
                    var2 = new Array(2);
                    var2[0] = var3;
                    var3 = {};
                    var7 = _closure2_slot7;
                    var6 = var4;
                    if(!var7) { _fun0020_ip = 112; continue _fun0020 }
case 113:
                    var10 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var8 = 8;
                    var9 = var9[var8];
                    var8 = undefined;
                    var12 = var10.bind(var8)(var9);
                    var10 = var12.interpolate;
                    var15 = _closure1_slot19;
                    var13 = _closure1_slot22;
                    var14 = [0.3, 1, 0.3];
                    var17 = var12;
                    var16 = var11;
                    var6 = var17[var10](var16, var15, var14, var13, var12);
case 112:
                    var3['scale'] = var6;
                    var2[1] = var3;
                    var1['transform'] = var2;
                    var3 = _closure2_slot7;
                    var2 = var4;
                    if(!var3) { _fun0020_ip = 114; continue _fun0020 }
case 115:
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var6 = 8;
                    var7 = var7[var6];
                    var6 = undefined;
                    var9 = var8.bind(var6)(var7);
                    var8 = var9.interpolate;
                    var15 = _closure1_slot19;
                    var13 = _closure1_slot22;
                    var14 = [0, 1, 0];
                    var17 = var9;
                    var16 = var11;
                    var2 = var17[var8](var16, var15, var14, var13, var12);
case 114:
                    var1['opacity'] = var2;
                    _fun0020_ip = 116; continue _fun0020;
case 111:
                    var2 = {};
                    var3 = {};
                    var9 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var7 = 8;
                    var8 = var8[var7];
                    var7 = undefined;
                    var10 = var9.bind(var7)(var8);
                    var9 = var10.interpolate;
                    var8 = _closure1_slot19;
                    var7 = 2;
                    var7 = var8[var7];
                    var8 = [0, 25];
                    var8[2] = var7;
                    var13 = _closure1_slot22;
                    var14 = [0, 0, 20];
                    var17 = var10;
                    var16 = var11;
                    var15 = var8;
                    var6 = var17[var9](var16, var15, var14, var13, var12);
                    var3['translateY'] = var6;
                    var6 = new Array(2);
                    var6[0] = var3;
                    var7 = {};
                    var9 = _closure2_slot7;
                    var3 = 1;
                    var8 = var3;
                    if(var9) { _fun0020_ip = 117; continue _fun0020 }
case 118:
                    var8 = var4;
case 117:
                    var7['scale'] = var8;
                    var6[1] = var7;
                    var2['transform'] = var6;
                    var5 = _closure2_slot7;
                    if(var5) { _fun0020_ip = 119; continue _fun0020 }
case 120:
                    var3 = var4;
case 119:
                    var2['opacity'] = var3;
                    var1 = var2;
case 116:
                    return var1;
                }
            };
            var16 = {};
            var16['notificationGestureY'] = var39;
            var16['scale'] = var38;
            var16['isExpandableNotification'] = var34;
            var38 = var5[var17];
            var38 = var2.bind(var4)(var38);
            var38 = var38.interpolate;
            var16['interpolate'] = var38;
            var16['MIN_SWIPE_DISTANCE'] = var26;
            var16['PAN_INPUT_RANGE'] = var23;
            var23 = 20;
            var16['NOTIFICATION_BOB_RANGE'] = var23;
            var23 = _closure1_slot22;
            var16['extrapolateConfig'] = var23;
            var16['initialized'] = var18;
            var3['__closure'] = var16;
            var16 = 14122965198084.0;
            var3['__workletHash'] = var16;
            var16 = _closure1_slot32;
            var3['__initData'] = var16;
            var40 = var6.bind(var7)(var3);
            var7 = _closure1_slot4;
            var6 = var7.useEffect;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                    var3 = _closure2_slot22;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0021_ip = 73; continue _fun0021 }
case 121:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 53;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var3 = var2.AccessibilityAnnouncer;
                    var2 = var3.announce;
                    var1 = _closure2_slot22;
                    var1 = var2.bind(var3)(var1);
case 73:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var6.bind(var7)(var1, var3);
            var1 = 54;
            var1 = var5[var1];
            var7 = var2.bind(var4)(var1);
            var6 = var7.useStateFromStores;
            var1 = _closure1_slot9;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                var2 = _closure1_slot9;
                var1 = var2.isOpen;
                var1 = var1.bind(var2)();
                return var1;
            };
            var18 = var6.bind(var7)(var3, var1);
            var1 = var5[var17];
            var6 = var2.bind(var4)(var1);
            var3 = var6.useAnimatedStyle;
            var1 = function ci() {
                _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                    var1 = {};
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 49;
                    var4 = var4[var3];
                    var3 = undefined;
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.withTiming;
                    var6 = _closure2_slot14;
                    var3 = var6.get;
                    var6 = var3.bind(var6)();
                    var3 = 0;
                    if(!var6) { _fun0022_ip = 81; continue _fun0022 }
case 122:
                    var3 = 1;
case 81:
                    var2 = _closure1_slot21;
                    var2 = var4.bind(var5)(var3, var2);
                    var1['opacity'] = var2;
                    return var1;
                }
            };
            var7 = {};
            var16 = var5[var22];
            var16 = var2.bind(var4)(var16);
            var16 = var16.withTiming;
            var7['withTiming'] = var16;
            var7['expandedSV'] = var10;
            var7['DEFAULT_ANIMATION_TIMING'] = var8;
            var1['__closure'] = var7;
            var7 = 17343110607400.0;
            var1['__workletHash'] = var7;
            var7 = _closure1_slot33;
            var1['__initData'] = var7;
            var38 = var3.bind(var6)(var1);
            var1 = var5[var17];
            var6 = var2.bind(var4)(var1);
            var3 = var6.useAnimatedStyle;
            var1 = function ri() {
                _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                    var1 = {};
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var8 = 49;
                    var3 = var3[var8];
                    var7 = undefined;
                    var9 = var4.bind(var7)(var3);
                    var6 = var9.withTiming;
                    var5 = _closure2_slot14;
                    var3 = var5.get;
                    var3 = var3.bind(var5)();
                    var5 = 0;
                    if(!var3) { _fun0023_ip = 81; continue _fun0023 }
case 122:
                    var5 = 1;
case 81:
                    var3 = _closure1_slot21;
                    var3 = var6.bind(var9)(var5, var3);
                    var1['opacity'] = var3;
                    var3 = {};
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var5 = var5[var8];
                    var6 = var6.bind(var7)(var5);
                    var5 = var6.withTiming;
                    var7 = _closure2_slot14;
                    var4 = var7.get;
                    var7 = var4.bind(var7)();
                    var4 = 0.8;
                    if(!var7) { _fun0023_ip = 18; continue _fun0023 }
case 123:
                    var4 = 1;
case 18:
                    var2 = _closure1_slot21;
                    var2 = var5.bind(var6)(var4, var2);
                    var3['scale'] = var2;
                    var2 = new Array(1);
                    var2[0] = var3;
                    var1['transform'] = var2;
                    return var1;
                }
            };
            var7 = {};
            var16 = var5[var22];
            var16 = var2.bind(var4)(var16);
            var16 = var16.withTiming;
            var7['withTiming'] = var16;
            var7['expandedSV'] = var10;
            var7['DEFAULT_ANIMATION_TIMING'] = var8;
            var1['__closure'] = var7;
            var7 = 4477005725994.0;
            var1['__workletHash'] = var7;
            var7 = _closure1_slot34;
            var1['__initData'] = var7;
            var16 = var3.bind(var6)(var1);
            var1 = var5[var17];
            var6 = var2.bind(var4)(var1);
            var3 = var6.useAnimatedStyle;
            var1 = function li() {
                _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                    var1 = {};
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var8 = 49;
                    var3 = var3[var8];
                    var7 = undefined;
                    var10 = var4.bind(var7)(var3);
                    var9 = var10.withTiming;
                    var4 = _closure2_slot14;
                    var3 = var4.get;
                    var3 = var3.bind(var4)();
                    var4 = 0;
                    if(!var3) { _fun0024_ip = 81; continue _fun0024 }
case 122:
                    var4 = 1;
case 81:
                    var3 = _closure1_slot21;
                    var3 = var9.bind(var10)(var4, var3);
                    var1['opacity'] = var3;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var3 = var3[var8];
                    var4 = var4.bind(var7)(var3);
                    var3 = var4.withTiming;
                    var7 = _closure2_slot14;
                    var6 = var7.get;
                    var6 = var6.bind(var7)();
                    var5 = 0;
                    if(!var6) { _fun0024_ip = 124; continue _fun0024 }
case 125:
                    var5 = 60;
case 124:
                    var2 = _closure1_slot21;
                    var2 = var3.bind(var4)(var5, var2);
                    var1['maxHeight'] = var2;
                    return var1;
                }
            };
            var7 = {};
            var22 = var5[var22];
            var22 = var2.bind(var4)(var22);
            var22 = var22.withTiming;
            var7['withTiming'] = var22;
            var7['expandedSV'] = var10;
            var7['DEFAULT_ANIMATION_TIMING'] = var8;
            var1['__closure'] = var7;
            var7 = 1545110325549.0;
            var1['__workletHash'] = var7;
            var7 = _closure1_slot35;
            var1['__initData'] = var7;
            var26 = var3.bind(var6)(var1);
            var3 = _closure1_slot18;
            var1 = 55;
            var1 = var5[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.OverlayView;
            var1 = {};
            var5 = _closure1_slot6;
            var5 = var5.absoluteFill;
            var1['style'] = var5;
            var22 = 'box-none';
            var1['pointerEvents'] = var22;
            var8 = _closure1_slot17;
            var6 = _closure1_slot5;
            var5 = {};
            var10 = var15.backdrop;
            var7 = new Array(2);
            var7[0] = var10;
            var10 = {};
            var10['width'] = var21;
            var10['height'] = var20;
            var7[1] = var10;
            var5['style'] = var7;
            var7 = 'none';
            if(!var12) { _fun0001_ip = 126; continue _fun0001 }
case 127:
            var7 = 'auto';
case 126:
            var5['pointerEvents'] = var7;
            var23 = _closure1_slot17;
            var7 = _closure1_slot0;
            var10 = _closure1_slot2;
            var20 = 56;
            var20 = var10[var20];
            var20 = var7.bind(var4)(var20);
            var21 = var20.Backdrop;
            var20 = {};
            var20['style'] = var38;
            var38 = function onDismiss() {
                var2 = _closure1_slot7;
                var1 = var2.dismiss;
                var1 = var1.bind(var2)();
                var3 = _closure2_slot19;
                var1 = undefined;
                var2 = false;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var20['onDismiss'] = var38;
            var38 = 13;
            var39 = var10[var38];
            var39 = var7.bind(var4)(var39);
            var41 = var39.intl;
            var39 = var41.string;
            var38 = var10[var38];
            var38 = var7.bind(var4)(var38);
            var38 = var38.t;
            var38 = var38["9sewOj"];
            var38 = var39.bind(var41)(var38);
            var20['accessibilityLabel'] = var38;
            var20 = var23.bind(var4)(var21, var20);
            var5['children'] = var20;
            var6 = var8.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot18;
            var6 = 57;
            var6 = var10[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.SafeAreaPaddingView;
            var6 = {'top': true, 'bottom': true, 'left': true, 'right': true, 'style': null, 'pointerEvents': 'box-none'};
            var10 = var15.safeAreaContainer;
            var6['style'] = var10;
            var10 = undefined;
            if(!var18) { _fun0001_ip = 128; continue _fun0001 }
case 129:
            var10 = 'no-hide-descendants';
case 128:
            var6['importantForAccessibility'] = var10;
            var18 = _closure1_slot17;
            var23 = _closure1_slot0;
            var38 = _closure1_slot2;
            var9 = var38[var9];
            var9 = var23.bind(var4)(var9);
            var10 = var9.GestureDetector;
            var9 = {};
            var9['gesture'] = var19;
            var21 = _closure1_slot18;
            var20 = _closure1_slot1;
            var19 = var38[var17];
            var19 = var20.bind(var4)(var19);
            var20 = var19.View;
            var19 = {};
            var41 = var15.animatedContainer;
            var39 = new Array(2);
            var39[0] = var41;
            var39[1] = var40;
            var19['style'] = var39;
            var19['pointerEvents'] = var22;
            var22 = 58;
            var22 = var38[var22];
            var22 = var23.bind(var4)(var22);
            var23 = var22.NotificationPressable;
            var22 = {};
            var22['onPress'] = var37;
            var22['onLongPress'] = var33;
            var38 = var30.duration;
            var37 = inf;
            var33 = undefined;
            if(!(var38 !== var37)) { _fun0001_ip = 130; continue _fun0001 }
case 131:
            var33 = var36;
case 130:
            var22['percent'] = var33;
            var33 = var12;
            if(var33) { _fun0001_ip = 132; continue _fun0001 }
case 133:
            var33 = var35;
case 132:
            var22['hideProgress'] = var33;
            var33 = var13 != var34;
            if(!var33) { _fun0001_ip = 134; continue _fun0001 }
case 135:
            var33 = var34;
case 134:
            var22['isExpandableNotification'] = var33;
            var32 = function onAccessibilityEscape() {
                var3 = _closure2_slot21;
                var2 = undefined;
                var1 = 'accessibility_escape';
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var22['onAccessibilityEscape'] = var32;
            var22['accessibilityActions'] = var31;
            var30 = var30.type;
            var22['type'] = var30;
            var22['onAccessibilityAction'] = var24;
            var24 = new Array(2);
            var24[0] = var25;
            var30 = var13 != var29;
            var25 = null;
            if(!var30) { _fun0001_ip = 136; continue _fun0001 }
case 137:
            var25 = var29.bind(var4)(var26);
case 136:
            var24[1] = var25;
            var22['children'] = var24;
            var23 = var21.bind(var4)(var23, var22);
            var22 = new Array(2);
            var22[0] = var23;
            var24 = var13 != var28;
            var23 = null;
            if(!var24) { _fun0001_ip = 138; continue _fun0001 }
case 139:
            var26 = _closure1_slot17;
            var25 = _closure1_slot0;
            var29 = _closure1_slot2;
            var24 = 59;
            var24 = var29[var24];
            var24 = var25.bind(var4)(var24);
            var25 = var24.ConfirmationToast;
            var24 = {};
            var24['message'] = var28;
            var24['reaction'] = var27;
            var23 = var26.bind(var4)(var25, var24);
case 138:
            var22[1] = var23;
            var19['children'] = var22;
            var19 = var21.bind(var4)(var20, var19);
            var9['children'] = var19;
            var10 = var18.bind(var4)(var10, var9);
            var9 = new Array(2);
            var9[0] = var10;
            var10 = null;
            if(!var12) { _fun0001_ip = 140; continue _fun0001 }
case 141:
            var12 = var13 != var14;
            var10 = null;
            if(!var12) { _fun0001_ip = 140; continue _fun0001 }
case 142:
            var13 = _closure1_slot17;
            var12 = _closure1_slot1;
            var11 = _closure1_slot2;
            var11 = var11[var17];
            var11 = var12.bind(var4)(var11);
            var12 = var11.View;
            var11 = {};
            var17 = var15.expandFooterContainer;
            var15 = new Array(2);
            var15[0] = var17;
            var15[1] = var16;
            var11['style'] = var15;
            var11['children'] = var14;
            var10 = var13.bind(var4)(var12, var11);
case 140:
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