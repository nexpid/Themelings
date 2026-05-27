// app/modules/in_app_notifications/native/MessageNotification.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
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
    var7 = var4.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.IN_APP_NOTIFICATION_MAX_HEIGHT;
    var _closure1_slot6 = var8;
    var4 = 4;
    var9 = var6[var4];
    var9 = var5.bind(var1)(var9);
    var10 = var9.jsx;
    var _closure1_slot7 = var10;
    var9 = var9.jsxs;
    var _closure1_slot8 = var9;
    var4 = var4 * var8;
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {};
    var11 = 6;
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_12;
    var10['marginLeft'] = var11;
    var4['rightAccessoryContainer'] = var10;
    var10 = {'paddingRight': 4, 'paddingTop': 0};
    var4['newContainerRoleDot'] = var10;
    var10 = {'position': 'absolute', 'top': 0, 'left': 0, 'right': 0, 'overflow': 'hidden'};
    var4['initialPreviewOverlay'] = var10;
    var10 = {'position': 'absolute', 'top': 0, 'left': 0, 'right': 0, 'marginTop': 3};
    var4['expandedPreviewOverlay'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot10 = var4;
    var4 = {};
    var8 = 'function MessageNotificationTsx1(){const{notificationGestureY,expandedSV,ACCESSORY_FADE_THRESHOLD}=this.__closure;if(notificationGestureY==null){return{opacity:1};}if(expandedSV.get()){return{opacity:0};}const dragDistance=Math.max(0,notificationGestureY.get());return{opacity:Math.max(0,1-dragDistance/ACCESSORY_FADE_THRESHOLD)};}';
    var4['code'] = var8;
    var _closure1_slot11 = var4;
    var8 = var7.memo;
    var4 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var12 = var3.message;
            var2 = var3.notification;
            var5 = var3.quickReactEnabled;
            var4 = var3.redesignEnabled;
            var17 = var3.reaction;
            var16 = var3.onExpandPress;
            var15 = var3.expandedContentVisible;
            var14 = var3.expandedSV;
            var _closure2_slot0 = var14;
            var18 = var3.notificationGestureY;
            var _closure2_slot1 = var18;
            var3 = _closure1_slot10;
            var7 = undefined;
            var9 = var3.bind(var7)();
            var11 = _closure1_slot0;
            var3 = _closure1_slot2;
            var6 = 7;
            var6 = var3[var6];
            var8 = var11.bind(var7)(var6);
            var6 = var8.useHasPreviewableMedia;
            var6 = var6.bind(var8)(var12);
            var8 = 8;
            var8 = var3[var8];
            var13 = var11.bind(var7)(var8);
            var8 = var13.useCanReactToMessage;
            var2 = var2.channel;
            var2 = var8.bind(var13)(var12, var2);
            var8 = 9;
            var3 = var3[var8];
            var11 = var11.bind(var7)(var3);
            var3 = var11.useAnimatedStyle;
            var1 = function P() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var3 = _closure2_slot0;
                    var2 = var3.get;
                    var2 = var2.bind(var3)();
                    if(var2) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var2 = global;
                    var4 = var2.Math;
                    var3 = var4.max;
                    var5 = _closure2_slot1;
                    var1 = var5.get;
                    var1 = var1.bind(var5)();
                    var5 = 0;
                    var6 = var3.bind(var4)(var5, var1);
                    var1 = {};
                    var4 = var2.Math;
                    var3 = var4.max;
                    var2 = 30;
                    var6 = var6 / var2;
                    var2 = 1;
                    var2 = var2 - var6;
                    var2 = var3.bind(var4)(var5, var2);
                    var1['opacity'] = var2;
                    return var1;
case 4:
                    var1 = {};
                    var2 = 0;
                    var1['opacity'] = var2;
                    return var1;
case 2:
                    var1 = {};
                    var2 = 1;
                    var1['opacity'] = var2;
                    return var1;
                }
            };
            var13 = {};
            var13['notificationGestureY'] = var18;
            var13['expandedSV'] = var14;
            var14 = 30;
            var13['ACCESSORY_FADE_THRESHOLD'] = var14;
            var1['__closure'] = var13;
            var13 = 16725771032859.0;
            var1['__workletHash'] = var13;
            var13 = _closure1_slot11;
            var1['__initData'] = var13;
            var11 = var3.bind(var11)(var1);
            var1 = null;
            if(var15) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            if(var6) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            if(!var5) { _fun0001_ip = 8; continue _fun0001 }
case 10:
            if(!var2) { _fun0001_ip = 8; continue _fun0001 }
case 11:
            var6 = _closure1_slot7;
            var5 = _closure1_slot4;
            var2 = {};
            var13 = var9.rightAccessoryContainer;
            var2['style'] = var13;
            var14 = _closure1_slot0;
            var18 = _closure1_slot2;
            var13 = 10;
            var13 = var18[var13];
            var13 = var14.bind(var7)(var13);
            var14 = var13.MessageNotificationAccessory;
            var13 = {};
            var13['reaction'] = var17;
            var13['onExpandPress'] = var16;
            var13['expandedContentVisible'] = var15;
            var13 = var6.bind(var7)(var14, var13);
            var2['children'] = var13;
            var2 = var6.bind(var7)(var5, var2);
            _fun0001_ip = 12; continue _fun0001;
case 8:
            var3 = null;
            if(!var4) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var6 = _closure1_slot7;
            var5 = _closure1_slot4;
            var4 = {};
            var9 = var9.rightAccessoryContainer;
            var4['style'] = var9;
            var9 = _closure1_slot1;
            var13 = _closure1_slot2;
            var8 = var13[var8];
            var8 = var9.bind(var7)(var8);
            var9 = var8.View;
            var8 = {};
            var8['style'] = var11;
            var11 = _closure1_slot0;
            var10 = 11;
            var10 = var13[var10];
            var10 = var11.bind(var7)(var10);
            var11 = var10.MediaPreviewRightAccessory;
            var10 = {};
            var10['message'] = var12;
            var10 = var6.bind(var7)(var11, var10);
            var8['children'] = var10;
            var8 = var6.bind(var7)(var9, var8);
            var4['children'] = var8;
            var3 = var6.bind(var7)(var5, var4);
case 13:
            var2 = var3;
case 12:
            var1 = var2;
case 6:
            return var1;
        }
    };
    var4 = var8.bind(var7)(var4);
    var _closure1_slot12 = var4;
    var8 = var7.memo;
    var4 = function(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var2 = var1.message;
            var4 = var1.expandedSize;
            var3 = var1.redesignEnabled;
            var1 = {};
            var1['message'] = var2;
            var2 = 2;
            if(!var4) { _fun0003_ip = 15; continue _fun0003 }
case 16:
            var2 = 3;
case 15:
            var1['lineClamp'] = var2;
            var6 = _closure1_slot6;
            if(var4) { _fun0003_ip = 17; continue _fun0003 }
case 18:
            var4 = var6;
            _fun0003_ip = 19; continue _fun0003;
case 17:
            var5 = 1.2;
            var4 = var5 * var6;
case 19:
            var1['maxHeight'] = var4;
            var4 = _closure1_slot7;
            if(var3) { _fun0003_ip = 20; continue _fun0003 }
case 21:
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 12;
            var5 = var5[var3];
            var3 = undefined;
            var3 = var6.bind(var3)(var5);
            var3 = var3.NativeChannelRowPreview;
            _fun0003_ip = 22; continue _fun0003;
case 20:
            var6 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 13;
            var5 = var5[var2];
            var2 = undefined;
            var3 = var6.bind(var2)(var5);
case 22:
            var2 = {};
            var8 = var2;
            var7 = var1;
            var1 = copyDataProperties(var8, var7);
            var1 = undefined;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
        }
    };
    var4 = var8.bind(var7)(var4);
    var _closure1_slot13 = var4;
    var4 = {};
    var8 = 'function MessageNotificationTsx2(){const{fadeProgress}=this.__closure;return{opacity:fadeProgress.get()};}';
    var4['code'] = var8;
    var _closure1_slot14 = var4;
    var8 = var7.memo;
    var4 = function(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var3 = arg1;
            var9 = var3.message;
            var _closure2_slot0 = var9;
            var1 = var3.expandedPreviewHeight;
            var _closure2_slot1 = var1;
            var13 = var3.fadeProgress;
            var _closure2_slot2 = var13;
            var3 = _closure1_slot10;
            var4 = undefined;
            var6 = var3.bind(var4)();
            var10 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 7;
            var3 = var7[var3];
            var5 = var10.bind(var4)(var3);
            var3 = var5.useHasPreviewableMedia;
            var3 = var3.bind(var5)(var9);
            var _closure2_slot3 = var3;
            var12 = _closure1_slot3;
            var11 = var12.useMemo;
            var5 = new Array(2);
            var5[0] = var3;
            var3 = var9.embeds;
            var5[1] = var3;
            var3 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = _closure2_slot3;
                    if(var1) { _fun0005_ip = 23; continue _fun0005 }
case 24:
                    var2 = _closure2_slot0;
                    var4 = var2.embeds;
                    var3 = var4.some;
                    var2 = function(arg1) {
                        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                            var2 = arg1;
                            var1 = var2.image;
                            var3 = null;
                            var1 = var3 != var1;
                            if(var1) { _fun0006_ip = 25; continue _fun0006 }
case 26:
                            var2 = var2.thumbnail;
                            var1 = var3 != var2;
case 25:
                            return var1;
                        }
                    };
                    var1 = var3.bind(var4)(var2);
case 23:
                    return var1;
                }
            };
            var11 = var11.bind(var12)(var3, var5);
            var5 = var12.useCallback;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var1 = arg1;
                    var1 = var1.nativeEvent;
                    var1 = var1.layout;
                    var3 = var1.height;
                    var1 = 0;
                    if(!(var3 > var1)) { _fun0007_ip = 27; continue _fun0007 }
case 28:
                    var2 = _closure2_slot1;
                    var1 = var2.set;
                    var1 = var1.bind(var2)(var3);
case 27:
                    var1 = undefined;
                    return var1;
                }
            };
            var5 = var5.bind(var12)(var1, var3);
            var1 = 9;
            var3 = var7[var1];
            var10 = var10.bind(var4)(var3);
            var3 = var10.useAnimatedStyle;
            var2 = function c() {
                var1 = {};
                var3 = _closure2_slot2;
                var2 = var3.get;
                var2 = var2.bind(var3)();
                var1['opacity'] = var2;
                return var1;
            };
            var12 = {};
            var12['fadeProgress'] = var13;
            var2['__closure'] = var12;
            var12 = 6192162231288.0;
            var2['__workletHash'] = var12;
            var12 = _closure1_slot14;
            var2['__initData'] = var12;
            var10 = var3.bind(var10)(var2);
            var3 = _closure1_slot7;
            var2 = _closure1_slot1;
            var1 = var7[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.View;
            var1 = {};
            var7 = var6.expandedPreviewOverlay;
            var6 = new Array(2);
            var6[0] = var7;
            var7 = null;
            if(!var11) { _fun0004_ip = 29; continue _fun0004 }
case 30:
            var7 = var10;
case 29:
            var6[1] = var7;
            var1['style'] = var6;
            var1['onLayout'] = var5;
            var7 = _closure1_slot7;
            var6 = _closure1_slot0;
            var10 = _closure1_slot2;
            var5 = 12;
            var5 = var10[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.NativeChannelRowPreview;
            var5 = {};
            var5['message'] = var9;
            var9 = 8;
            var5['lineClamp'] = var9;
            var8 = _closure1_slot9;
            var5['maxHeight'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = var8.bind(var7)(var4);
    var _closure1_slot15 = var4;
    var4 = {};
    var8 = 'function MessageNotificationTsx3(){const{fadeProgress}=this.__closure;return{opacity:1-fadeProgress.get()};}';
    var4['code'] = var8;
    var _closure1_slot16 = var4;
    var8 = var7.memo;
    var4 = function(arg1) {
        var3 = arg1;
        var1 = var3.initialPreviewHeight;
        var _closure2_slot0 = var1;
        var12 = var3.fadeProgress;
        var _closure2_slot1 = var12;
        var7 = var3.initialPreviewContent;
        var3 = _closure1_slot10;
        var4 = undefined;
        var6 = var3.bind(var4)();
        var9 = _closure1_slot3;
        var8 = var9.useCallback;
        var3 = new Array(1);
        var3[0] = var1;
        var1 = function(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var1 = arg1;
                var1 = var1.nativeEvent;
                var1 = var1.layout;
                var3 = var1.height;
                var1 = 0;
                if(!(var3 > var1)) { _fun0008_ip = 27; continue _fun0008 }
case 28:
                var2 = _closure2_slot0;
                var1 = var2.set;
                var1 = var1.bind(var2)(var3);
case 27:
                var1 = undefined;
                return var1;
            }
        };
        var8 = var8.bind(var9)(var1, var3);
        var9 = _closure1_slot0;
        var10 = _closure1_slot2;
        var1 = 9;
        var3 = var10[var1];
        var9 = var9.bind(var4)(var3);
        var3 = var9.useAnimatedStyle;
        var2 = function u() {
            var1 = {};
            var3 = _closure2_slot1;
            var2 = var3.get;
            var3 = var2.bind(var3)();
            var2 = 1;
            var2 = var2 - var3;
            var1['opacity'] = var2;
            return var1;
        };
        var11 = {};
        var11['fadeProgress'] = var12;
        var2['__closure'] = var11;
        var11 = 373670703589.0;
        var2['__workletHash'] = var11;
        var11 = _closure1_slot16;
        var2['__initData'] = var11;
        var9 = var3.bind(var9)(var2);
        var3 = _closure1_slot7;
        var2 = _closure1_slot1;
        var1 = var10[var1];
        var1 = var2.bind(var4)(var1);
        var2 = var1.View;
        var1 = {};
        var10 = var6.initialPreviewOverlay;
        var6 = new Array(2);
        var6[0] = var10;
        var6[1] = var9;
        var1['style'] = var6;
        var6 = _closure1_slot4;
        var5 = {};
        var5['onLayout'] = var8;
        var5['children'] = var7;
        var5 = var3.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var4 = var8.bind(var7)(var4);
    var _closure1_slot17 = var4;
    var4 = {};
    var8 = 'function MessageNotificationTsx4(){const{expandedPreviewHeight,EXPANDED_MAX_HEIGHT,expandedSV,notificationGestureY,initialPreviewHeight}=this.__closure;const effectiveMax=Math.min(expandedPreviewHeight.get(),EXPANDED_MAX_HEIGHT);if(expandedSV.get()){return effectiveMax;}const dragDistance=Math.max(0,notificationGestureY.get());return Math.min(initialPreviewHeight.get()+dragDistance,effectiveMax);}';
    var4['code'] = var8;
    var _closure1_slot18 = var4;
    var4 = {};
    var8 = 'function MessageNotificationTsx5(){const{expandedPreviewHeight,EXPANDED_MAX_HEIGHT,initialPreviewHeight,currentHeight}=this.__closure;const effectiveMax=Math.min(expandedPreviewHeight.get(),EXPANDED_MAX_HEIGHT);const maxExpand=effectiveMax-initialPreviewHeight.get();if(maxExpand<=0){return 1;}return(currentHeight.get()-initialPreviewHeight.get())/maxExpand;}';
    var4['code'] = var8;
    var _closure1_slot19 = var4;
    var4 = {};
    var8 = "function MessageNotificationTsx6(){const{currentHeight}=this.__closure;return{overflow:'hidden',height:currentHeight.get()};}";
    var4['code'] = var8;
    var _closure1_slot20 = var4;
    var8 = var7.memo;
    var4 = function(arg1) {
        var1 = arg1;
        var13 = var1.message;
        var17 = var1.expandedSV;
        var _closure2_slot0 = var17;
        var15 = var1.notificationGestureY;
        var _closure2_slot1 = var15;
        var9 = var1.initialPreviewContent;
        var5 = _closure1_slot0;
        var7 = _closure1_slot2;
        var1 = 9;
        var3 = var7[var1];
        var4 = undefined;
        var10 = var5.bind(var4)(var3);
        var8 = var10.useSharedValue;
        var3 = _closure1_slot6;
        var11 = var8.bind(var10)(var3);
        var _closure2_slot2 = var11;
        var3 = var7[var1];
        var8 = var5.bind(var4)(var3);
        var3 = var8.useSharedValue;
        var16 = _closure1_slot9;
        var12 = var3.bind(var8)(var16);
        var _closure2_slot3 = var12;
        var3 = var7[var1];
        var10 = var5.bind(var4)(var3);
        var8 = var10.useDerivedValue;
        var3 = function f() {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var3 = global;
                var6 = var3.Math;
                var5 = var6.min;
                var4 = _closure2_slot3;
                var1 = var4.get;
                var4 = var1.bind(var4)();
                var1 = _closure1_slot9;
                var1 = var5.bind(var6)(var4, var1);
                var5 = _closure2_slot0;
                var4 = var5.get;
                var4 = var4.bind(var5)();
                if(var4) { _fun0009_ip = 31; continue _fun0009 }
case 32:
                var7 = var3.Math;
                var6 = var7.max;
                var5 = _closure2_slot1;
                var4 = var5.get;
                var5 = var4.bind(var5)();
                var4 = 0;
                var5 = var6.bind(var7)(var4, var5);
                var4 = var3.Math;
                var3 = var4.min;
                var6 = _closure2_slot2;
                var2 = var6.get;
                var2 = var2.bind(var6)();
                var2 = var2 + var5;
                var2 = var3.bind(var4)(var2, var1);
                return var2;
case 31:
                return var1;
            }
        };
        var14 = {};
        var14['expandedPreviewHeight'] = var12;
        var14['EXPANDED_MAX_HEIGHT'] = var16;
        var14['expandedSV'] = var17;
        var14['notificationGestureY'] = var15;
        var14['initialPreviewHeight'] = var11;
        var3['__closure'] = var14;
        var14 = 1149011638398.0;
        var3['__workletHash'] = var14;
        var14 = _closure1_slot18;
        var3['__initData'] = var14;
        var14 = var8.bind(var10)(var3);
        var _closure2_slot4 = var14;
        var3 = var7[var1];
        var10 = var5.bind(var4)(var3);
        var8 = var10.useDerivedValue;
        var3 = function v() {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var1 = global;
                var5 = var1.Math;
                var4 = var5.min;
                var3 = _closure2_slot3;
                var1 = var3.get;
                var3 = var1.bind(var3)();
                var1 = _closure1_slot9;
                var3 = var4.bind(var5)(var3, var1);
                var4 = _closure2_slot2;
                var1 = var4.get;
                var1 = var1.bind(var4)();
                var3 = var3 - var1;
                var1 = 1;
                var4 = 0;
                if(!(!(var3 <= var4))) { _fun0010_ip = 33; continue _fun0010 }
case 19:
                var5 = _closure2_slot4;
                var4 = var5.get;
                var4 = var4.bind(var5)();
                var5 = _closure2_slot2;
                var2 = var5.get;
                var2 = var2.bind(var5)();
                var2 = var4 - var2;
                var1 = var2 / var3;
case 33:
                return var1;
            }
        };
        var15 = {};
        var15['expandedPreviewHeight'] = var12;
        var15['EXPANDED_MAX_HEIGHT'] = var16;
        var15['initialPreviewHeight'] = var11;
        var15['currentHeight'] = var14;
        var3['__closure'] = var15;
        var15 = 2260878011768.0;
        var3['__workletHash'] = var15;
        var15 = _closure1_slot19;
        var3['__initData'] = var15;
        var10 = var8.bind(var10)(var3);
        var3 = var7[var1];
        var5 = var5.bind(var4)(var3);
        var3 = var5.useAnimatedStyle;
        var2 = function _() {
            var1 = {};
            var2 = 'hidden';
            var1['overflow'] = var2;
            var3 = _closure2_slot4;
            var2 = var3.get;
            var2 = var2.bind(var3)();
            var1['height'] = var2;
            return var1;
        };
        var8 = {};
        var8['currentHeight'] = var14;
        var2['__closure'] = var8;
        var8 = 7755598901306.0;
        var2['__workletHash'] = var8;
        var8 = _closure1_slot20;
        var2['__initData'] = var8;
        var5 = var3.bind(var5)(var2);
        var3 = _closure1_slot8;
        var2 = _closure1_slot1;
        var1 = var7[var1];
        var1 = var2.bind(var4)(var1);
        var2 = var1.View;
        var1 = {};
        var1['style'] = var5;
        var8 = _closure1_slot7;
        var7 = _closure1_slot15;
        var5 = {};
        var5['message'] = var13;
        var5['expandedPreviewHeight'] = var12;
        var5['fadeProgress'] = var10;
        var7 = var8.bind(var4)(var7, var5);
        var5 = new Array(2);
        var5[0] = var7;
        var7 = _closure1_slot17;
        var6 = {};
        var6['initialPreviewHeight'] = var11;
        var6['fadeProgress'] = var10;
        var6['initialPreviewContent'] = var9;
        var6 = var8.bind(var4)(var7, var6);
        var5[1] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var4 = var8.bind(var7)(var4);
    var _closure1_slot21 = var4;
    var4 = var7.memo;
    var2 = function MessageNotification(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var2 = arg1;
            var20 = var2.notification;
            var17 = var2.reaction;
            var16 = var2.onExpandPress;
            var7 = var2.expandedContentVisible;
            var _closure2_slot0 = var7;
            var15 = var2.expandedSV;
            var14 = var2.notificationGestureY;
            var5 = var2.onAccessibilityExpand;
            var10 = var2.onDismiss;
            var _closure2_slot1 = var10;
            var4 = undefined;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var _closure2_slot8 = var4;
            var _closure2_slot9 = var4;
            var2 = _closure1_slot10;
            var8 = var2.bind(var4)();
            var21 = var20.message;
            var27 = var20.channel;
            var _closure2_slot2 = var27;
            var26 = var20.parentChannel;
            var _closure2_slot3 = var26;
            var25 = var20.guild;
            var _closure2_slot4 = var25;
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var19 = 14;
            var2 = var6[var19];
            var9 = var3.bind(var4)(var2);
            var2 = var9.useNullableMessageAuthor;
            var24 = var2.bind(var9)(var21);
            var _closure2_slot5 = var24;
            var2 = 15;
            var2 = var6[var2];
            var9 = var3.bind(var4)(var2);
            var6 = var9.useStateFromStores;
            var2 = _closure1_slot5;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var1 = _closure1_slot5;
                var1 = var1.roleStyle;
                return var1;
            };
            var3 = var6.bind(var9)(var3, var2);
            var23 = null;
            var6 = var23 == var24;
            var2 = undefined;
            if(var6) { _fun0011_ip = 34; continue _fun0011 }
case 35:
            var2 = var24.colorString;
case 34:
            var6 = var23 != var2;
            var9 = undefined;
            if(!var6) { _fun0011_ip = 36; continue _fun0011 }
case 37:
            var9 = var2;
case 36:
            var6 = 'username';
            var2 = undefined;
            if(!(var6 === var3)) { _fun0011_ip = 38; continue _fun0011 }
case 39:
            var2 = var9;
case 38:
            _closure2_slot6 = var2;
            var13 = _closure1_slot3;
            var12 = var13.useMemo;
            var6 = new Array(1);
            var6[0] = var2;
            var2 = function() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var2 = _closure2_slot6;
                    var1 = null;
                    var2 = var1 != var2;
                    var1 = undefined;
                    if(!var2) { _fun0012_ip = 40; continue _fun0012 }
case 26:
                    var2 = {};
                    var3 = _closure2_slot6;
                    var2['color'] = var3;
                    var1 = var2;
case 40:
                    return var1;
                }
            };
            var13 = var12.bind(var13)(var2, var6);
            _closure2_slot7 = var13;
            var2 = 'dot';
            var12 = undefined;
            if(!(var2 === var3)) { _fun0011_ip = 41; continue _fun0011 }
case 42:
            var12 = undefined;
            if(!(var4 !== var9)) { _fun0011_ip = 41; continue _fun0011 }
case 43:
            var6 = _closure1_slot7;
            var3 = _closure1_slot0;
            var18 = _closure1_slot2;
            var2 = 16;
            var2 = var18[var2];
            var2 = var3.bind(var4)(var2);
            var3 = var2.RoleDot;
            var2 = {};
            var2['color'] = var9;
            var18 = var23 == var24;
            var9 = undefined;
            if(var18) { _fun0011_ip = 44; continue _fun0011 }
case 45:
            var9 = var24.colorStrings;
case 44:
            var2['colors'] = var9;
            var8 = var8.newContainerRoleDot;
            var2['containerStyles'] = var8;
            var12 = var6.bind(var4)(var3, var2);
case 41:
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 7;
            var2 = var6[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.getNotificationTitle;
            var34 = var3;
            var33 = var27;
            var32 = var24;
            var31 = var26;
            var30 = var25;
            var22 = var34[var2](var33, var32, var31, var30, var29);
            _closure2_slot8 = var22;
            var2 = var21.content;
            var3 = var2.length;
            var2 = 0;
            var2 = var2 === var3;
            if(!var2) { _fun0011_ip = 46; continue _fun0011 }
case 47:
            var3 = var21.interaction;
            var2 = var23 !== var3;
case 46:
            if(!var2) { _fun0011_ip = 48; continue _fun0011 }
case 49:
            var3 = var21.interaction;
            var2 = var4 !== var3;
case 48:
            if(!var2) { _fun0011_ip = 50; continue _fun0011 }
case 51:
            var3 = var21.activityInstance;
            var2 = var23 !== var3;
case 50:
            if(!var2) { _fun0011_ip = 52; continue _fun0011 }
case 53:
            var3 = var21.activityInstance;
            var2 = var4 !== var3;
case 52:
            if(!var2) { _fun0011_ip = 54; continue _fun0011 }
case 55:
            var18 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 17;
            var3 = var9[var2];
            var3 = var18.bind(var4)(var3);
            var8 = var3.intl;
            var6 = var8.formatToPlainString;
            var2 = var9[var2];
            var2 = var18.bind(var4)(var2);
            var2 = var2.t;
            var3 = var2["7eikg1"];
            var2 = {};
            var9 = var9[var19];
            var28 = var18.bind(var4)(var9);
            var19 = var28.getUserAuthor;
            var9 = var21.interaction;
            var29 = var23 == var9;
            var18 = undefined;
            if(var29) { _fun0011_ip = 56; continue _fun0011 }
case 57:
            var18 = var9.user;
case 56:
            var9 = var20.channel;
            var9 = var19.bind(var28)(var18, var9);
            var9 = var9.nick;
            var2['username'] = var9;
            var2 = var6.bind(var8)(var3, var2);
            var21['content'] = var2;
case 54:
            var3 = _closure1_slot0;
            var18 = _closure1_slot2;
            var2 = 18;
            var2 = var18[var2];
            var6 = var3.bind(var4)(var2);
            var2 = var6.useCanExpandInAppNotification;
            var9 = 'MessageNotification';
            var2 = var2.bind(var6)(var9);
            var6 = var2.canExpand;
            var2 = 19;
            var2 = var18[var2];
            var8 = var3.bind(var4)(var2);
            var2 = var8.useInAppNotificationReact;
            var2 = var2.bind(var8)(var9);
            var19 = var2.quickReact;
            var8 = var2.expandedSize;
            var2 = 20;
            var2 = var18[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.useInAppNotificationRedesign;
            var2 = var2.bind(var3)(var9);
            var18 = var2.redesignEnabled;
            _closure2_slot9 = var18;
            var9 = _closure1_slot3;
            var3 = var9.useMemo;
            var2 = new Array(9);
            var2[0] = var18;
            var2[1] = var27;
            var2[2] = var26;
            var2[3] = var25;
            var2[4] = var24;
            var2[5] = var22;
            var2[6] = var13;
            var2[7] = var7;
            var2[8] = var10;
            var1 = function() {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    var1 = _closure2_slot9;
                    if(var1) { _fun0013_ip = 58; continue _fun0013 }
case 24:
                    var1 = {};
                    var2 = 'simple';
                    var1['type'] = var2;
                    var2 = _closure2_slot8;
                    var1['text'] = var2;
                    var2 = _closure2_slot7;
                    var1['labelStyle'] = var2;
                    _fun0013_ip = 59; continue _fun0013;
case 58:
                    var2 = {};
                    var4 = 'message';
                    var2['type'] = var4;
                    var4 = _closure2_slot2;
                    var2['channel'] = var4;
                    var4 = _closure2_slot3;
                    var2['parentChannel'] = var4;
                    var4 = _closure2_slot4;
                    var2['guild'] = var4;
                    var4 = _closure2_slot5;
                    var2['author'] = var4;
                    var4 = _closure2_slot0;
                    var2['expanded'] = var4;
                    var3 = _closure2_slot1;
                    var2['onDismiss'] = var3;
                    var1 = var2;
case 59:
                    return var1;
                }
            };
            var9 = var3.bind(var9)(var1, var2);
            var3 = _closure1_slot7;
            var2 = _closure1_slot13;
            var1 = {};
            var1['message'] = var21;
            var1['expandedSize'] = var8;
            var1['redesignEnabled'] = var18;
            var8 = var3.bind(var4)(var2, var1);
            var10 = var8;
            if(!(var23 != var14)) { _fun0011_ip = 60; continue _fun0011 }
case 61:
            var3 = _closure1_slot7;
            var2 = _closure1_slot21;
            var1 = {};
            var1['message'] = var21;
            var1['expandedSV'] = var15;
            var1['notificationGestureY'] = var14;
            var1['initialPreviewContent'] = var8;
            var10 = var3.bind(var4)(var2, var1);
case 60:
            var22 = _closure1_slot0;
            var13 = _closure1_slot2;
            var1 = 21;
            var1 = var13[var1];
            var2 = var22.bind(var4)(var1);
            var1 = var2.useIsScreenReaderEnabled;
            var8 = var1.bind(var2)();
            var3 = _closure1_slot7;
            var1 = 22;
            var1 = var13[var1];
            var1 = var22.bind(var4)(var1);
            var2 = var1.Notification;
            var1 = {};
            var25 = 16;
            var13 = var13[var25];
            var13 = var22.bind(var4)(var13);
            var22 = var13.Avatar;
            var13 = {};
            var24 = var21.author;
            var13['user'] = var24;
            var24 = var20.guild;
            var26 = var23 == var24;
            var23 = undefined;
            if(var26) { _fun0011_ip = 62; continue _fun0011 }
case 63:
            var23 = var24.id;
case 62:
            var13['guildId'] = var23;
            var24 = _closure1_slot0;
            var23 = _closure1_slot2;
            var23 = var23[var25];
            var23 = var24.bind(var4)(var23);
            var23 = var23.AvatarSizes;
            var23 = var23.NORMAL;
            var13['size'] = var23;
            var13 = var3.bind(var4)(var22, var13);
            var1['icon'] = var13;
            var1['accessoryLabelNode'] = var12;
            var13 = _closure1_slot7;
            var12 = _closure1_slot12;
            var11 = {};
            var11['message'] = var21;
            var11['notification'] = var20;
            var11['quickReactEnabled'] = var19;
            var11['redesignEnabled'] = var18;
            var11['reaction'] = var17;
            var11['onExpandPress'] = var16;
            var11['expandedContentVisible'] = var7;
            var11['expandedSV'] = var15;
            var11['notificationGestureY'] = var14;
            var11 = var13.bind(var4)(var12, var11);
            var1['rightAccessory'] = var11;
            var1['children'] = var10;
            var1['header'] = var9;
            if(!var6) { _fun0011_ip = 64; continue _fun0011 }
case 65:
            var7 = !var7;
            if(var7) { _fun0011_ip = 66; continue _fun0011 }
case 67:
            var7 = var8;
case 66:
            var6 = var7;
case 64:
            var1['showDragHandle'] = var6;
            var1['onAccessibilityExpand'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 23;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/in_app_notifications/native/MessageNotification.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();