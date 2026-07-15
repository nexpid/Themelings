// app/modules/in_app_notifications/native/Notification.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var12 = 1;
    var4 = var6[var12];
    var4 = var5.bind(var1)(var4);
    var7 = var4.MIN_SWIPE_VELOCITY;
    var _closure1_slot4 = var7;
    var14 = var4.NOTIFICATION_MAX_WIDTH;
    var4 = var4.STARTED_SWIPE_THRESHOLD;
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot7 = var7;
    var4 = var4.jsxs;
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 5;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.shadows;
    var17 = var13.SHADOW_HIGH;
    var18 = var9;
    var13 = copyDataProperties(var18, var17);
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.colors;
    var15 = var13.MOBILE_ALERT_BACKGROUND_DEFAULT;
    var13 = 'backgroundColor';
    var9[12] = var15;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.radii;
    var15 = var13.lg;
    var13 = 'borderRadius';
    var9[12] = var15;
    var13 = 'maxWidth';
    var9[12] = var14;
    var14 = '100%';
    var13 = 'width';
    var9[12] = var14;
    var14 = 'center';
    var13 = 'alignSelf';
    var9[12] = var14;
    var4['shadow'] = var9;
    var9 = {};
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.lg;
    var9['borderRadius'] = var13;
    var9['borderWidth'] = var12;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.BORDER_SUBTLE;
    var9['borderColor'] = var10;
    var10 = 'hidden';
    var9['overflow'] = var10;
    var4['container'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot9 = var4;
    var4 = {'mass': 1, 'overshootClamping': true, 'damping': 27, 'stiffness': 300};
    var _closure1_slot10 = var4;
    var4 = {};
    var7 = 'function NotificationTsx1(){const{withSpring,scale,ON_PRESS_SPRING_CONFIG}=this.__closure;return{transform:[{scale:withSpring(scale.get(),ON_PRESS_SPRING_CONFIG)}]};}';
    var4['code'] = var7;
    var _closure1_slot11 = var4;
    var4 = {};
    var7 = "function NotificationTsx2(finished){const{runOnJS,handleDismissNotification}=this.__closure;if(finished){runOnJS(handleDismissNotification)('timeout');}}";
    var4['code'] = var7;
    var _closure1_slot12 = var4;
    var4 = {};
    var7 = 'function NotificationTsx3(){const{withTiming,expandedSV,tokens,Easing}=this.__closure;return{borderRadius:withTiming(expandedSV.get()?tokens.radii.xl:tokens.radii.lg,{duration:220,easing:Easing.bezier(0.16,1,0.3,1)})};}';
    var4['code'] = var7;
    var _closure1_slot13 = var4;
    var4 = 16;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/in_app_notifications/native/Notification.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function NotificationPressable(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var40 = var3.notification;
            var _closure2_slot0 = var40;
            var8 = var3.expandableContent;
            var26 = var3.icon;
            var25 = var3.children;
            var24 = var3.accessoryLabelNode;
            var23 = var3.rightAccessory;
            var22 = var3.header;
            var21 = var3.showDragHandle;
            var4 = undefined;
            if(!(var21 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var21 = false;
case 2:
            var20 = var3.onAccessibilityExpand;
            var19 = var3.bodyStyle;
            var18 = var3.expandedContentVisible;
            if(!(var18 === var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var18 = false;
case 4:
            var7 = var3.onPress;
            var _closure2_slot1 = var7;
            var34 = var3.onSettingsPress;
            var _closure2_slot2 = var34;
            var2 = {'notification': 0, 'expandableContent': 0, 'icon': 0, 'children': 0, 'accessoryLabelNode': 0, 'rightAccessory': 0, 'header': 0, 'showDragHandle': 0, 'onAccessibilityExpand': 0, 'bodyStyle': 0, 'expandedContentVisible': 0, 'onPress': 0, 'onSettingsPress': 0};
            var49 = var2;
            var48 = null;
            var1 = silentSetPrototypeOf(var49, var48);
            var49 = {};
            var48 = var3;
            var47 = var2;
            var33 = copyDataProperties(var49, var48, var47);
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var _closure2_slot8 = var4;
            var _closure2_slot9 = var4;
            var _closure2_slot10 = var4;
            var _closure2_slot11 = var4;
            var _closure2_slot12 = var4;
            var _closure2_slot13 = var4;
            var _closure2_slot14 = var4;
            var _closure2_slot15 = var4;
            var _closure2_slot16 = var4;
            var _closure2_slot17 = var4;
            var _closure2_slot18 = var4;
            var _closure2_slot19 = var4;
            var _closure2_slot20 = var4;
            var _closure2_slot21 = var4;
            var1 = _closure1_slot9;
            var9 = var1.bind(var4)();
            var31 = _closure1_slot3;
            var3 = var31.useMemo;
            var2 = new Array(1);
            var2[0] = var40;
            var1 = function() {
                var1 = {};
                var4 = _closure2_slot0;
                var2 = var4.type;
                var1['type'] = var2;
                var5 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var5.bind(var2)(var3);
                var2 = var3.extractMetadataFromNotification;
                var6 = var2.bind(var3)(var4);
                var7 = var1;
                var2 = copyDataProperties(var7, var6);
                return var1;
            };
            var1 = var3.bind(var31)(var1, var2);
            var39 = var1.guildId;
            _closure2_slot3 = var39;
            var38 = var1.channelId;
            _closure2_slot4 = var38;
            var37 = var1.messageId;
            _closure2_slot5 = var37;
            var14 = var1.type;
            _closure2_slot6 = var14;
            var36 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 7;
            var1 = var5[var1];
            var2 = var36.bind(var4)(var1);
            var1 = var2.useInAppNotificationContext;
            var1 = var1.bind(var2)();
            var28 = var1.notificationGestureY;
            _closure2_slot7 = var28;
            var43 = var1.velocityY;
            _closure2_slot8 = var43;
            var41 = var1.autoDismissing;
            _closure2_slot9 = var41;
            var13 = var1.isExpanded;
            _closure2_slot10 = var13;
            var2 = var1.expandedSV;
            _closure2_slot11 = var2;
            var3 = var1.setExpanded;
            _closure2_slot12 = var3;
            var35 = var1.handleDismissNotification;
            _closure2_slot13 = var35;
            var46 = var1.initialized;
            _closure2_slot14 = var46;
            var45 = var1.panning;
            _closure2_slot15 = var45;
            var32 = var1.isExpandableNotification;
            _closure2_slot16 = var32;
            var1 = 8;
            var6 = var5[var1];
            var15 = var36.bind(var4)(var6);
            var12 = var15.useSharedValue;
            var6 = 1;
            var29 = var12.bind(var15)(var6);
            _closure2_slot17 = var29;
            var15 = var31.useCallback;
            var12 = new Array(1);
            var12[0] = var29;
            var6 = function() {
                var3 = _closure2_slot17;
                var2 = var3.set;
                var1 = 0.95;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var27 = var15.bind(var31)(var6, var12);
            var15 = var31.useCallback;
            var12 = new Array(1);
            var12[0] = var29;
            var6 = function() {
                var3 = _closure2_slot17;
                var2 = var3.set;
                var1 = 1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var17 = var15.bind(var31)(var6, var12);
            var6 = var5[var1];
            var15 = var36.bind(var4)(var6);
            var12 = var15.useAnimatedStyle;
            var6 = function R() {
                var1 = {};
                var3 = {};
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var4 = 9;
                var5 = var5[var4];
                var4 = undefined;
                var6 = var6.bind(var4)(var5);
                var5 = var6.withSpring;
                var7 = _closure2_slot17;
                var4 = var7.get;
                var4 = var4.bind(var7)();
                var2 = _closure1_slot10;
                var2 = var5.bind(var6)(var4, var2);
                var3['scale'] = var2;
                var2 = new Array(1);
                var2[0] = var3;
                var1['transform'] = var2;
                return var1;
            };
            var16 = {};
            var42 = 9;
            var42 = var5[var42];
            var42 = var36.bind(var4)(var42);
            var42 = var42.withSpring;
            var16['withSpring'] = var42;
            var16['scale'] = var29;
            var29 = _closure1_slot10;
            var16['ON_PRESS_SPRING_CONFIG'] = var29;
            var6['__closure'] = var16;
            var16 = 5485274967370.0;
            var6['__workletHash'] = var16;
            var16 = _closure1_slot11;
            var6['__initData'] = var16;
            var6 = var12.bind(var15)(var6);
            var12 = 10;
            var12 = var5[var12];
            var16 = var36.bind(var4)(var12);
            var15 = var16.useCanExpandInAppNotification;
            var12 = 'NotificationPressable';
            var12 = var15.bind(var16)(var12);
            var16 = var12.canExpand;
            var29 = var31.useMemo;
            var15 = function() {
                var1 = {};
                var2 = true;
                var1['foreground'] = var2;
                return var1;
            };
            var12 = new Array(0);
            var29 = var29.bind(var31)(var15, var12);
            var12 = var5[var1];
            var42 = var36.bind(var4)(var12);
            var15 = var42.useSharedValue;
            var12 = 100;
            var15 = var15.bind(var42)(var12);
            _closure2_slot18 = var15;
            var42 = var40.duration;
            var12 = inf;
            var12 = var42 !== var12;
            _closure2_slot19 = var12;
            var44 = var31.useEffect;
            var42 = new Array(8);
            var42[0] = var46;
            var42[1] = var45;
            var42[2] = var40;
            var42[3] = var15;
            var42[4] = var35;
            var42[5] = var13;
            var42[6] = var41;
            var42[7] = var12;
            var35 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot0;
                    var6 = var2.duration;
                    var2 = _closure2_slot14;
                    if(!var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var2 = _closure2_slot15;
                    if(var2) { _fun0002_ip = 6; continue _fun0002 }
case 8:
                    var2 = _closure2_slot19;
                    if(!var2) { _fun0002_ip = 6; continue _fun0002 }
case 9:
                    var2 = _closure2_slot10;
                    if(var2) { _fun0002_ip = 6; continue _fun0002 }
case 10:
                    var2 = _closure2_slot9;
                    if(var2) { _fun0002_ip = 6; continue _fun0002 }
case 11:
                    var3 = _closure2_slot18;
                    var2 = var3.get;
                    var11 = var2.bind(var3)();
                    var4 = _closure2_slot18;
                    var3 = var4.set;
                    var13 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var5 = 11;
                    var5 = var14[var5];
                    var12 = undefined;
                    var9 = var13.bind(var12)(var5);
                    var8 = var9.withTiming;
                    var7 = {};
                    var5 = 100;
                    var5 = var11 / var5;
                    var5 = var5 * var6;
                    var7['duration'] = var5;
                    var11 = 8;
                    var5 = var14[var11];
                    var5 = var13.bind(var12)(var5);
                    var5 = var5.Easing;
                    var5 = var5.linear;
                    var7['easing'] = var5;
                    var6 = function s(arg1) {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                            var1 = arg1;
                            if(!var1) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 8;
                            var1 = var3[var1];
                            var3 = undefined;
                            var4 = var2.bind(var3)(var1);
                            var2 = var4.runOnJS;
                            var1 = _closure2_slot13;
                            var2 = var2.bind(var4)(var1);
                            var1 = 'timeout';
                            var1 = var2.bind(var3)(var1);
case 12:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var5 = {};
                    var11 = var14[var11];
                    var11 = var13.bind(var12)(var11);
                    var11 = var11.runOnJS;
                    var5['runOnJS'] = var11;
                    var10 = _closure2_slot13;
                    var5['handleDismissNotification'] = var10;
                    var6['__closure'] = var5;
                    var5 = 5704836747866.0;
                    var6['__workletHash'] = var5;
                    var2 = _closure1_slot12;
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
                        var2 = _closure2_slot18;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    return var1;
case 6:
                    var1 = undefined;
                    return var1;
                }
            };
            var35 = var44.bind(var31)(var35, var42);
            var42 = var31.useCallback;
            var35 = new Array(2);
            var35[0] = var43;
            var35[1] = var28;
            var28 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var4 = global;
                    var5 = var4.Math;
                    var2 = var5.abs;
                    var6 = _closure2_slot8;
                    var1 = var6.get;
                    var1 = var1.bind(var6)();
                    var5 = var2.bind(var5)(var1);
                    var1 = _closure1_slot4;
                    var1 = var5 >= var1;
                    if(var1) { _fun0004_ip = 14; continue _fun0004 }
case 15:
                    var5 = var4.Math;
                    var4 = var5.abs;
                    var6 = _closure2_slot7;
                    var3 = var6.get;
                    var3 = var3.bind(var6)();
                    var3 = var4.bind(var5)(var3);
                    var2 = _closure1_slot5;
                    var1 = var3 >= var2;
case 14:
                    return var1;
                }
            };
            var42 = var42.bind(var31)(var28, var35);
            _closure2_slot20 = var42;
            var35 = var31.useCallback;
            var28 = new Array(10);
            var28[0] = var42;
            var28[1] = var41;
            var28[2] = var14;
            var40 = var40.inAppNotificationId;
            var28[3] = var40;
            var28[4] = var39;
            var28[5] = var38;
            var28[6] = var37;
            var28[7] = var15;
            var28[8] = var13;
            var28[9] = var12;
            var13 = function(arg1, arg2) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var2 = arg2;
                    var3 = _closure2_slot20;
                    var1 = undefined;
                    var3 = var3.bind(var1)();
                    var3 = !var3;
                    if(var3) { _fun0005_ip = 16; continue _fun0005 }
case 17:
                    var3 = _closure2_slot10;
case 16:
                    if(var3) { _fun0005_ip = 18; continue _fun0005 }
case 19:
                    var3 = _closure2_slot9;
case 18:
                    if(!var3) { _fun0005_ip = 20; continue _fun0005 }
case 21:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 12;
                    var3 = var5[var3];
                    var6 = var4.bind(var1)(var3);
                    var5 = var6.trackWithMetadata;
                    var4 = {};
                    var3 = _closure2_slot6;
                    var4['type'] = var3;
                    var3 = _closure2_slot3;
                    var4['notif_guild_id'] = var3;
                    var3 = _closure2_slot4;
                    var4['notif_channel_id'] = var3;
                    var3 = _closure2_slot5;
                    var4['message_id'] = var3;
                    var3 = _closure2_slot0;
                    var3 = var3.inAppNotificationId;
                    var4['in_app_notification_id'] = var3;
                    var7 = _closure2_slot19;
                    var3 = undefined;
                    if(!var7) { _fun0005_ip = 22; continue _fun0005 }
case 23:
                    var7 = global;
                    var9 = var7.Math;
                    var8 = var9.floor;
                    var7 = _closure2_slot18;
                    var11 = 'number';
                    var7 = typeof var7;
                    if(!(var11 !== var7)) { _fun0005_ip = 24; continue _fun0005 }
case 25:
                    var11 = _closure2_slot18;
                    var7 = var11.get;
                    var7 = var7.bind(var11)();
                    _fun0005_ip = 26; continue _fun0005;
case 24:
                    var7 = _closure2_slot18;
case 26:
                    var3 = var8.bind(var9)(var7);
case 22:
                    var4['percent'] = var3;
                    var3 = arg1;
                    var3 = var5.bind(var6)(var3, var4);
                    var3 = null;
                    if(!(var3 != var2)) { _fun0005_ip = 20; continue _fun0005 }
case 27:
                    var2 = var2.bind(var1)();
case 20:
                    return var1;
                }
            };
            var35 = var35.bind(var31)(var13, var28);
            _closure2_slot21 = var35;
            var28 = var31.useCallback;
            var13 = new Array(2);
            var13[0] = var35;
            var13[1] = var7;
            var7 = function() {
                var4 = _closure2_slot21;
                var2 = _closure1_slot6;
                var3 = var2.IN_APP_NOTIFICATION_CLICKED;
                var2 = _closure2_slot1;
                var1 = undefined;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var28 = var28.bind(var31)(var7, var13);
            var13 = var31.useCallback;
            var7 = new Array(4);
            var7[0] = var35;
            var7[1] = var32;
            var7[2] = var34;
            var7[3] = var3;
            var3 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var2 = _closure2_slot16;
                    if(var2) { _fun0006_ip = 28; continue _fun0006 }
case 29:
                    var5 = _closure2_slot21;
                    var2 = _closure1_slot6;
                    var4 = var2.IN_APP_NOTIFICATION_LONG_PRESSED;
                    var3 = _closure2_slot2;
                    var2 = undefined;
                    var2 = var5.bind(var2)(var4, var3);
                    _fun0006_ip = 30; continue _fun0006;
case 28:
                    var4 = _closure2_slot12;
                    var3 = undefined;
                    var2 = true;
                    var1 = 'long_press';
                    var1 = var4.bind(var3)(var2, var1);
case 30:
                    var1 = undefined;
                    return var1;
                }
            };
            var13 = var13.bind(var31)(var3, var7);
            var3 = var5[var1];
            var31 = var36.bind(var4)(var3);
            var7 = var31.useAnimatedStyle;
            var3 = function ai() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var1 = {};
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 11;
                    var2 = var4[var2];
                    var8 = undefined;
                    var5 = var3.bind(var8)(var2);
                    var4 = var5.withTiming;
                    var3 = _closure2_slot11;
                    var2 = var3.get;
                    var3 = var2.bind(var3)();
                    var7 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var2 = 5;
                    var2 = var9[var2];
                    var2 = var7.bind(var8)(var2);
                    var2 = var2.radii;
                    if(var3) { _fun0007_ip = 5; continue _fun0007 }
case 31:
                    var3 = var2.lg;
                    _fun0007_ip = 32; continue _fun0007;
case 5:
                    var3 = var2.xl;
case 32:
                    var2 = {};
                    var7 = 220;
                    var2['duration'] = var7;
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var6 = 8;
                    var6 = var9[var6];
                    var6 = var7.bind(var8)(var6);
                    var10 = var6.Easing;
                    var9 = var10.bezier;
                    var14 = 0.16;
                    var7 = 1;
                    var12 = 0.3;
                    var15 = var10;
                    var13 = var7;
                    var11 = var7;
                    var6 = var15[var9](var14, var13, var12, var11, var10);
                    var2['easing'] = var6;
                    var2 = var4.bind(var5)(var3, var2);
                    var1['borderRadius'] = var2;
                    return var1;
                }
            };
            var34 = {};
            var35 = 11;
            var35 = var5[var35];
            var35 = var36.bind(var4)(var35);
            var35 = var35.withTiming;
            var34['withTiming'] = var35;
            var34['expandedSV'] = var2;
            var2 = _closure1_slot1;
            var35 = 5;
            var35 = var5[var35];
            var35 = var2.bind(var4)(var35);
            var34['tokens'] = var35;
            var35 = var5[var1];
            var35 = var36.bind(var4)(var35);
            var35 = var35.Easing;
            var34['Easing'] = var35;
            var3['__closure'] = var34;
            var34 = 15276203537259.0;
            var3['__workletHash'] = var34;
            var34 = _closure1_slot13;
            var3['__initData'] = var34;
            var31 = var7.bind(var31)(var3);
            var3 = _closure1_slot7;
            var1 = var5[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.View;
            var1 = {};
            var7 = var9.shadow;
            var5 = new Array(2);
            var5[0] = var7;
            if(!var32) { _fun0001_ip = 33; continue _fun0001 }
case 34:
            var6 = var31;
case 33:
            var5[1] = var6;
            var1['style'] = var5;
            var7 = _closure1_slot8;
            var6 = _closure1_slot0;
            var34 = _closure1_slot2;
            var5 = 13;
            var5 = var34[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.PressableHighlight;
            var5 = {};
            var49 = var5;
            var48 = var33;
            var33 = copyDataProperties(var49, var48);
            var33 = function onAccessibilityEscape() {
                var3 = _closure2_slot13;
                var2 = undefined;
                var1 = 'accessibility_escape';
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var30 = 'onAccessibilityEscape';
            var5[29] = var33;
            var9 = var9.container;
            var30 = new Array(2);
            var30[0] = var9;
            var9 = null;
            if(!var32) { _fun0001_ip = 35; continue _fun0001 }
case 36:
            var9 = var31;
case 35:
            var30[1] = var9;
            var9 = 'style';
            var5[8] = var30;
            var9 = 'androidRippleConfig';
            var5[8] = var29;
            var9 = 'onPress';
            var5[8] = var28;
            var9 = 'onPressIn';
            var5[8] = var27;
            var9 = 'onPressOut';
            var5[8] = var17;
            var9 = 'onLongPress';
            var5[8] = var13;
            var13 = 'button';
            var9 = 'accessibilityRole';
            var5[8] = var13;
            var17 = _closure1_slot7;
            var13 = _closure1_slot1;
            var27 = _closure1_slot2;
            var9 = 14;
            var9 = var27[var9];
            var13 = var13.bind(var4)(var9);
            var9 = {};
            var9['icon'] = var26;
            var9['children'] = var25;
            var9['accessoryLabelNode'] = var24;
            var9['rightAccessory'] = var23;
            var9['header'] = var22;
            var9['showDragHandle'] = var21;
            var9['onAccessibilityExpand'] = var20;
            var9['bodyStyle'] = var19;
            var9['expandedContentVisible'] = var18;
            var13 = var17.bind(var4)(var13, var9);
            var9 = new Array(3);
            var9[0] = var13;
            var10 = null;
            if(!var12) { _fun0001_ip = 37; continue _fun0001 }
case 38:
            var13 = _closure1_slot7;
            var12 = _closure1_slot1;
            var17 = _closure1_slot2;
            var11 = 15;
            var11 = var17[var11];
            var12 = var12.bind(var4)(var11);
            var11 = {};
            var11['canExpand'] = var16;
            var11['percent'] = var15;
            var11['type'] = var14;
            var10 = var13.bind(var4)(var12, var11);
case 37:
            var9[1] = var10;
            var9[2] = var8;
            var8 = 'children';
            var5[7] = var9;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['NotificationPressable'] = var2;
    return var1;
})();