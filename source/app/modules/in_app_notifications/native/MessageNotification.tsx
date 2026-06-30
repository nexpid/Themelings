// app/modules/in_app_notifications/native/MessageNotification.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var1 = function useSetHeightOnLayout(arg1) {
        var5 = arg1;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot3;
        var3 = var4.useCallback;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var1 = arg1;
                var1 = var1.nativeEvent;
                var1 = var1.layout;
                var3 = var1.height;
                var1 = 0;
                if(!(var3 > var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var2 = _closure2_slot0;
                var1 = var2.set;
                var1 = var1.bind(var2)(var3);
case 2:
                var1 = undefined;
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot31 = var1;
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
    var4 = var4.IN_APP_NOTIFICATION_MAX_HEIGHT;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.MessageEmbedTypes;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot8 = var8;
    var4 = var4.jsxs;
    var _closure1_slot9 = var4;
    var11 = 6;
    var4 = var6[var11];
    var4 = var12.bind(var1)(var4);
    var4 = var4.space;
    var13 = var4.PX_12;
    var _closure1_slot10 = var13;
    var4 = 7;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var4 = var8.isAndroid;
    var4 = var4.bind(var8)();
    var _closure1_slot11 = var4;
    var4 = var6[var11];
    var4 = var12.bind(var1)(var4);
    var4 = var4.space;
    var4 = var4.PX_12;
    var _closure1_slot12 = var4;
    var4 = var6[var11];
    var4 = var12.bind(var1)(var4);
    var4 = var4.space;
    var4 = var4.PX_8;
    var _closure1_slot13 = var4;
    var4 = 8;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {};
    var10['marginLeft'] = var13;
    var4['rightAccessoryContainer'] = var10;
    var10 = {};
    var13 = 'absolute';
    var10['position'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.space;
    var13 = var13.PX_12;
    var10['right'] = var13;
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.space;
    var11 = var11.PX_12;
    var10['top'] = var11;
    var4['rightAccessoryAbsolute'] = var10;
    var10 = {'paddingRight': 4, 'paddingTop': 0};
    var4['newContainerRoleDot'] = var10;
    var10 = {'position': 'absolute', 'top': 0, 'left': 0, 'right': 0, 'overflow': 'hidden'};
    var4['initialPreviewOverlay'] = var10;
    var10 = {'position': 'absolute', 'top': 0, 'left': 0, 'right': 0};
    var4['expandedPreviewOverlay'] = var10;
    var10 = {};
    var11 = 32;
    var10['height'] = var11;
    var4['gradientStyles'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot14 = var4;
    var4 = {};
    var8 = 'function MessageNotificationTsx1(){const{notificationGestureY,accessoryExitProgressSV}=this.__closure;if(notificationGestureY==null){return{opacity:1,transform:[{scale:1}]};}const progress=accessoryExitProgressSV.get();return{opacity:1-progress,transform:[{scale:1-progress}]};}';
    var4['code'] = var8;
    var _closure1_slot15 = var4;
    var8 = var7.memo;
    var4 = function(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var8 = var1.message;
            var10 = var1.notificationGestureY;
            var _closure2_slot0 = var10;
            var12 = var1.accessoryExitProgressSV;
            var _closure2_slot1 = var12;
            var1 = _closure1_slot14;
            var4 = undefined;
            var6 = var1.bind(var4)();
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 9;
            var3 = var9[var1];
            var7 = var7.bind(var4)(var3);
            var3 = var7.useAnimatedStyle;
            var2 = function o() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0003_ip = 4; continue _fun0003 }
case 5:
                    var2 = _closure2_slot1;
                    var1 = var2.get;
                    var4 = var1.bind(var2)();
                    var1 = {};
                    var2 = 1;
                    var3 = var2 - var4;
                    var1['opacity'] = var3;
                    var3 = {};
                    var2 = var2 - var4;
                    var3['scale'] = var2;
                    var2 = new Array(1);
                    var2[0] = var3;
                    var1['transform'] = var2;
                    return var1;
case 4:
                    var1 = {};
                    var2 = 1;
                    var1['opacity'] = var2;
                    var3 = {};
                    var3['scale'] = var2;
                    var2 = new Array(1);
                    var2[0] = var3;
                    var1['transform'] = var2;
                    return var1;
                }
            };
            var11 = {};
            var11['notificationGestureY'] = var10;
            var11['accessoryExitProgressSV'] = var12;
            var2['__closure'] = var11;
            var11 = 4919466552494.0;
            var2['__workletHash'] = var11;
            var11 = _closure1_slot15;
            var2['__initData'] = var11;
            var7 = var3.bind(var7)(var2);
            var3 = _closure1_slot8;
            var2 = _closure1_slot1;
            var1 = var9[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.View;
            var1 = {};
            var9 = null;
            if(!(var9 == var10)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var9 = var6.rightAccessoryContainer;
            _fun0002_ip = 8; continue _fun0002;
case 6:
            var9 = var6.rightAccessoryAbsolute;
case 8:
            var6 = new Array(2);
            var6[0] = var9;
            var6[1] = var7;
            var1['style'] = var6;
            var7 = _closure1_slot8;
            var6 = _closure1_slot0;
            var9 = _closure1_slot2;
            var5 = 10;
            var5 = var9[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.MediaPreviewRightAccessory;
            var5 = {};
            var5['message'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = var8.bind(var7)(var4);
    var _closure1_slot16 = var4;
    var8 = var7.memo;
    var4 = function(arg1) {
        var1 = arg1;
        var6 = var1.message;
        var4 = _closure1_slot8;
        var2 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 11;
        var1 = var3[var1];
        var3 = undefined;
        var2 = var2.bind(var3)(var1);
        var1 = {};
        var1['message'] = var6;
        var6 = 2;
        var1['lineClamp'] = var6;
        var5 = _closure1_slot6;
        var1['maxHeight'] = var5;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var4 = var8.bind(var7)(var4);
    var _closure1_slot17 = var4;
    var4 = {};
    var8 = 'function MessageNotificationTsx2(){const{contentHeight,EXPANDED_MAX_HEIGHT,TRUNCATED_MESSAGE_HEIGHT_OFFSET,EXPANDED_SHORT_PREVIEW_PADDING}=this.__closure;const isGradientShown=contentHeight.get()>=EXPANDED_MAX_HEIGHT-TRUNCATED_MESSAGE_HEIGHT_OFFSET;const isShortPreview=contentHeight.get()>0&&!isGradientShown;return{paddingBottom:isShortPreview?EXPANDED_SHORT_PREVIEW_PADDING:0};}';
    var4['code'] = var8;
    var _closure1_slot18 = var4;
    var4 = {};
    var8 = 'function MessageNotificationTsx3(){const{IS_ANDROID,hasPreviewableMedia,hasTextContent,hasEmbedMedia,fadeProgress,ACCESSORY_EXIT_THRESHOLD}=this.__closure;if(IS_ANDROID&&hasPreviewableMedia&&hasTextContent&&!hasEmbedMedia){return{opacity:fadeProgress.get()};}if(!hasTextContent||hasEmbedMedia){return{opacity:fadeProgress.get(),transform:[{translateY:(1-fadeProgress.get())*ACCESSORY_EXIT_THRESHOLD}]};}return{opacity:1};}';
    var4['code'] = var8;
    var _closure1_slot19 = var4;
    var8 = var7.memo;
    var4 = function(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = arg1;
            var14 = var2.message;
            var _closure2_slot0 = var14;
            var1 = var2.expandedPreviewHeight;
            var18 = var2.fadeProgress;
            var _closure2_slot1 = var18;
            var2 = _closure1_slot14;
            var4 = undefined;
            var10 = var2.bind(var4)();
            var16 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 12;
            var2 = var6[var2];
            var8 = var16.bind(var4)(var2);
            var7 = var8.useStateFromStores;
            var2 = _closure1_slot5;
            var5 = new Array(1);
            var5[0] = var2;
            var2 = function() {
                var1 = _closure1_slot5;
                var1 = var1.useReducedMotion;
                return var1;
            };
            var11 = var7.bind(var8)(var5, var2);
            var2 = 13;
            var2 = var6[var2];
            var5 = var16.bind(var4)(var2);
            var2 = var5.useHasPreviewableMedia;
            var21 = var2.bind(var5)(var14);
            var _closure2_slot2 = var21;
            var8 = _closure1_slot3;
            var7 = var8.useMemo;
            var2 = var14.embeds;
            var5 = new Array(1);
            var5[0] = var2;
            var2 = function() {
                var1 = _closure2_slot0;
                var3 = var1.embeds;
                var2 = var3.some;
                var1 = function(arg1) {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                        var2 = arg1;
                        var1 = var2.image;
                        var4 = null;
                        var1 = var4 != var1;
                        if(var1) { _fun0005_ip = 9; continue _fun0005 }
case 10:
                        var3 = var2.thumbnail;
                        var1 = var4 != var3;
case 9:
                        if(var1) { _fun0005_ip = 11; continue _fun0005 }
case 12:
                        var3 = var2.type;
                        var2 = _closure1_slot7;
                        var2 = var2.GIFV;
                        var1 = var3 === var2;
case 11:
                        return var1;
                    }
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var19 = var7.bind(var8)(var2, var5);
            var _closure2_slot3 = var19;
            var8 = _closure1_slot3;
            var7 = var8.useMemo;
            var5 = new Array(3);
            var5[0] = var21;
            var2 = var14.poll;
            var5[1] = var2;
            var5[2] = var19;
            var2 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var1 = _closure2_slot2;
                    if(var1) { _fun0006_ip = 3; continue _fun0006 }
case 13:
                    var3 = _closure2_slot0;
                    var4 = var3.poll;
                    var3 = null;
                    var1 = var3 != var4;
case 3:
                    if(var1) { _fun0006_ip = 14; continue _fun0006 }
case 15:
                    var1 = _closure2_slot3;
case 14:
                    return var1;
                }
            };
            var15 = var7.bind(var8)(var2, var5);
            var2 = var14.content;
            var2 = var2.length;
            var17 = 0;
            var20 = var2 > var17;
            var _closure2_slot4 = var20;
            var2 = _closure1_slot1;
            var5 = 14;
            var5 = var6[var5];
            var7 = var2.bind(var4)(var5);
            var5 = {};
            var8 = true;
            var5['ignoreKeyboard'] = var8;
            var5 = var7.bind(var4)(var5);
            var7 = var5.height;
            var5 = 0.24;
            var13 = var5 * var7;
            var _closure2_slot5 = var13;
            var7 = _closure1_slot31;
            var5 = var7.bind(var4)(var1);
            var1 = 9;
            var8 = var6[var1];
            var9 = var16.bind(var4)(var8);
            var8 = var9.useSharedValue;
            var23 = var8.bind(var9)(var17);
            var _closure2_slot6 = var23;
            var8 = var7.bind(var4)(var23);
            var7 = var6[var1];
            var17 = var16.bind(var4)(var7);
            var9 = var17.useAnimatedStyle;
            var7 = function E() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var5 = _closure2_slot6;
                    var2 = var5.get;
                    var2 = var2.bind(var5)();
                    var4 = _closure2_slot5;
                    var1 = _closure1_slot13;
                    var1 = var4 - var1;
                    var4 = var2 >= var1;
                    var1 = {};
                    var2 = var5.get;
                    var2 = var2.bind(var5)();
                    var5 = 0;
                    var6 = var2 > var5;
                    var2 = 0;
                    if(!var6) { _fun0007_ip = 16; continue _fun0007 }
case 17:
                    var2 = 0;
                    if(var4) { _fun0007_ip = 16; continue _fun0007 }
case 18:
                    var2 = _closure1_slot12;
case 16:
                    var1['paddingBottom'] = var2;
                    return var1;
                }
            };
            var22 = {};
            var22['contentHeight'] = var23;
            var22['EXPANDED_MAX_HEIGHT'] = var13;
            var23 = _closure1_slot13;
            var22['TRUNCATED_MESSAGE_HEIGHT_OFFSET'] = var23;
            var23 = _closure1_slot12;
            var22['EXPANDED_SHORT_PREVIEW_PADDING'] = var23;
            var7['__closure'] = var22;
            var22 = 14817205317960.0;
            var7['__workletHash'] = var22;
            var22 = _closure1_slot18;
            var7['__initData'] = var22;
            var7 = var9.bind(var17)(var7);
            var9 = var6[var1];
            var16 = var16.bind(var4)(var9);
            var9 = var16.useAnimatedStyle;
            var3 = function x() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var1 = _closure1_slot11;
                    if(!var1) { _fun0008_ip = 19; continue _fun0008 }
case 13:
                    var1 = _closure2_slot2;
                    if(!var1) { _fun0008_ip = 19; continue _fun0008 }
case 20:
                    var1 = _closure2_slot4;
                    if(!var1) { _fun0008_ip = 19; continue _fun0008 }
case 21:
                    var1 = _closure2_slot3;
                    if(var1) { _fun0008_ip = 19; continue _fun0008 }
case 22:
                    var1 = {};
                    var3 = _closure2_slot1;
                    var2 = var3.get;
                    var2 = var2.bind(var3)();
                    var1['opacity'] = var2;
                    _fun0008_ip = 23; continue _fun0008;
case 19:
                    var2 = _closure2_slot4;
                    if(!var2) { _fun0008_ip = 24; continue _fun0008 }
case 25:
                    var2 = _closure2_slot3;
                    if(var2) { _fun0008_ip = 24; continue _fun0008 }
case 26:
                    var2 = {};
                    var3 = 1;
                    var2['opacity'] = var3;
                    _fun0008_ip = 27; continue _fun0008;
case 24:
                    var3 = {};
                    var6 = _closure2_slot1;
                    var4 = var6.get;
                    var4 = var4.bind(var6)();
                    var3['opacity'] = var4;
                    var5 = {};
                    var4 = var6.get;
                    var6 = var4.bind(var6)();
                    var4 = 1;
                    var6 = var4 - var6;
                    var4 = 20;
                    var4 = var6 * var4;
                    var5['translateY'] = var4;
                    var4 = new Array(1);
                    var4[0] = var5;
                    var3['transform'] = var4;
                    var2 = var3;
case 27:
                    var1 = var2;
case 23:
                    return var1;
                }
            };
            var17 = {};
            var22 = _closure1_slot11;
            var17['IS_ANDROID'] = var22;
            var17['hasPreviewableMedia'] = var21;
            var17['hasTextContent'] = var20;
            var17['hasEmbedMedia'] = var19;
            var17['fadeProgress'] = var18;
            var18 = 20;
            var17['ACCESSORY_EXIT_THRESHOLD'] = var18;
            var3['__closure'] = var17;
            var17 = 9141362335479.0;
            var3['__workletHash'] = var17;
            var17 = _closure1_slot19;
            var3['__initData'] = var17;
            var16 = var9.bind(var16)(var3);
            var3 = _closure1_slot8;
            var1 = var6[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.View;
            var1 = {};
            var9 = var10.expandedPreviewOverlay;
            var6 = new Array(3);
            var6[0] = var9;
            var9 = null;
            if(!var15) { _fun0004_ip = 28; continue _fun0004 }
case 29:
            var9 = var16;
case 28:
            var6[1] = var9;
            var6[2] = var7;
            var1['style'] = var6;
            var1['onLayout'] = var5;
            var7 = _closure1_slot8;
            var6 = _closure1_slot4;
            var5 = {};
            var5['onLayout'] = var8;
            var9 = _closure1_slot0;
            var16 = _closure1_slot2;
            var8 = 15;
            var8 = var16[var8];
            var8 = var9.bind(var4)(var8);
            var9 = var8.NativeChannelRowPreview;
            var8 = {};
            var8['message'] = var14;
            var14 = undefined;
            if(!var15) { _fun0004_ip = 30; continue _fun0004 }
case 31:
            var14 = 6;
case 30:
            var8['lineClamp'] = var14;
            var8['maxHeight'] = var13;
            var13 = _closure1_slot1;
            var14 = _closure1_slot2;
            var12 = 6;
            var12 = var14[var12];
            var12 = var13.bind(var4)(var12);
            var12 = var12.colors;
            var12 = var12.MOBILE_ALERT_BACKGROUND_DEFAULT;
            var8['backgroundColor'] = var12;
            var11 = !var11;
            var8['gifAutoPlay'] = var11;
            var10 = var10.gradientStyles;
            var8['gradientStyles'] = var10;
            var8 = var7.bind(var4)(var9, var8);
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = var8.bind(var7)(var4);
    var _closure1_slot20 = var4;
    var4 = {};
    var8 = 'function MessageNotificationTsx4(){const{shouldHandlePreviewableMediaExpand,fadeProgress,accessoryWidthSV}=this.__closure;return shouldHandlePreviewableMediaExpand?{opacity:Math.max(0,1-fadeProgress.get()*2),right:accessoryWidthSV.get()}:{opacity:Math.max(0,1-fadeProgress.get()*2)};}';
    var4['code'] = var8;
    var _closure1_slot21 = var4;
    var8 = var7.memo;
    var4 = function(arg1) {
        var1 = arg1;
        var3 = var1.initialPreviewHeight;
        var13 = var1.fadeProgress;
        var _closure2_slot0 = var13;
        var7 = var1.initialPreviewContent;
        var12 = var1.accessoryWidthSV;
        var _closure2_slot1 = var12;
        var14 = var1.shouldHandlePreviewableMediaExpand;
        var _closure2_slot2 = var14;
        var1 = _closure1_slot14;
        var4 = undefined;
        var6 = var1.bind(var4)();
        var1 = _closure1_slot31;
        var8 = var1.bind(var4)(var3);
        var9 = _closure1_slot0;
        var10 = _closure1_slot2;
        var1 = 9;
        var3 = var10[var1];
        var9 = var9.bind(var4)(var3);
        var3 = var9.useAnimatedStyle;
        var2 = function h() {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var1 = _closure2_slot2;
                if(var1) { _fun0009_ip = 16; continue _fun0009 }
case 13:
                var1 = {};
                var2 = global;
                var6 = var2.Math;
                var5 = var6.max;
                var4 = _closure2_slot0;
                var2 = var4.get;
                var4 = var2.bind(var4)();
                var2 = 2;
                var7 = var2 * var4;
                var4 = 0;
                var2 = 1;
                var2 = var2 - var7;
                var2 = var5.bind(var6)(var4, var2);
                var1['opacity'] = var2;
                _fun0009_ip = 32; continue _fun0009;
case 16:
                var2 = {};
                var4 = global;
                var7 = var4.Math;
                var6 = var7.max;
                var5 = _closure2_slot0;
                var4 = var5.get;
                var5 = var4.bind(var5)();
                var4 = 2;
                var8 = var4 * var5;
                var5 = 0;
                var4 = 1;
                var4 = var4 - var8;
                var4 = var6.bind(var7)(var5, var4);
                var2['opacity'] = var4;
                var4 = _closure2_slot1;
                var3 = var4.get;
                var3 = var3.bind(var4)();
                var2['right'] = var3;
                var1 = var2;
case 32:
                return var1;
            }
        };
        var11 = {};
        var11['shouldHandlePreviewableMediaExpand'] = var14;
        var11['fadeProgress'] = var13;
        var11['accessoryWidthSV'] = var12;
        var2['__closure'] = var11;
        var11 = 11698348828915.0;
        var2['__workletHash'] = var11;
        var11 = _closure1_slot21;
        var2['__initData'] = var11;
        var9 = var3.bind(var9)(var2);
        var3 = _closure1_slot8;
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
    var _closure1_slot22 = var4;
    var4 = {};
    var8 = 'function MessageNotificationTsx5(){const{expandedPreviewHeight,EXPANDED_MAX_HEIGHT,expandedSV,notificationGestureY,initialPreviewHeight}=this.__closure;const maxExpandedHeight=Math.min(expandedPreviewHeight.get(),EXPANDED_MAX_HEIGHT);if(expandedSV.get()){return maxExpandedHeight;}const dragDistance=Math.max(0,notificationGestureY.get());const maxHeight=Math.max(maxExpandedHeight,initialPreviewHeight.get());return Math.min(initialPreviewHeight.get()+dragDistance,maxHeight);}';
    var4['code'] = var8;
    var _closure1_slot23 = var4;
    var4 = {};
    var8 = 'function MessageNotificationTsx6(){const{expandedSV,expandedPreviewHeight,EXPANDED_MAX_HEIGHT,initialPreviewHeight,notificationGestureY,ACCESSORY_EXIT_THRESHOLD,currentHeight}=this.__closure;if(expandedSV.get()){return 1;}const maxExpandedHeight=Math.min(expandedPreviewHeight.get(),EXPANDED_MAX_HEIGHT);const heightDifference=maxExpandedHeight-initialPreviewHeight.get();const dragDistance=Math.max(0,notificationGestureY.get());if(heightDifference<=0){return Math.min(1,dragDistance/ACCESSORY_EXIT_THRESHOLD);}return Math.min(1,(currentHeight.get()-initialPreviewHeight.get())/heightDifference);}';
    var4['code'] = var8;
    var _closure1_slot24 = var4;
    var4 = {};
    var8 = "function MessageNotificationTsx7(){const{shouldHandlePreviewableMediaExpand,currentHeight,accessoryWidthSV}=this.__closure;return shouldHandlePreviewableMediaExpand?{overflow:'hidden',height:currentHeight.get(),marginRight:-accessoryWidthSV.get()}:{overflow:'hidden',height:currentHeight.get()};}";
    var4['code'] = var8;
    var _closure1_slot25 = var4;
    var8 = var7.memo;
    var4 = function(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var1 = arg1;
            var15 = var1.message;
            var20 = var1.expandedSV;
            var _closure2_slot0 = var20;
            var18 = var1.notificationGestureY;
            var _closure2_slot1 = var18;
            var11 = var1.initialPreviewContent;
            var13 = var1.initialPreviewHeight;
            var _closure2_slot2 = var13;
            var10 = var1.accessoryWidthSV;
            var _closure2_slot3 = var10;
            var4 = undefined;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 14;
            var1 = var5[var1];
            var3 = var3.bind(var4)(var1);
            var1 = {};
            var7 = true;
            var1['ignoreKeyboard'] = var7;
            var1 = var3.bind(var4)(var1);
            var3 = var1.height;
            var1 = 0.24;
            var19 = var1 * var3;
            var _closure2_slot4 = var19;
            var3 = _closure1_slot0;
            var7 = 9;
            var1 = var5[var7];
            var8 = var3.bind(var4)(var1);
            var1 = var8.useSharedValue;
            var14 = var1.bind(var8)(var19);
            var _closure2_slot5 = var14;
            var1 = 13;
            var1 = var5[var1];
            var3 = var3.bind(var4)(var1);
            var1 = var3.useHasPreviewableMedia;
            var1 = var1.bind(var3)(var15);
            var9 = _closure1_slot11;
            if(!var9) { _fun0010_ip = 33; continue _fun0010 }
case 34:
            var9 = var1;
case 33:
            _closure2_slot6 = var9;
            var5 = _closure1_slot0;
            var1 = _closure1_slot2;
            var3 = var1[var7];
            var12 = var5.bind(var4)(var3);
            var8 = var12.useDerivedValue;
            var3 = function E() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var2 = global;
                    var6 = var2.Math;
                    var5 = var6.min;
                    var4 = _closure2_slot5;
                    var1 = var4.get;
                    var4 = var1.bind(var4)();
                    var1 = _closure2_slot4;
                    var1 = var5.bind(var6)(var4, var1);
                    var5 = _closure2_slot0;
                    var4 = var5.get;
                    var4 = var4.bind(var5)();
                    if(var4) { _fun0011_ip = 35; continue _fun0011 }
case 19:
                    var7 = var2.Math;
                    var6 = var7.max;
                    var5 = _closure2_slot1;
                    var4 = var5.get;
                    var5 = var4.bind(var5)();
                    var4 = 0;
                    var6 = var6.bind(var7)(var4, var5);
                    var5 = var2.Math;
                    var4 = var5.max;
                    var7 = _closure2_slot2;
                    var3 = var7.get;
                    var3 = var3.bind(var7)();
                    var5 = var4.bind(var5)(var1, var3);
                    var4 = var2.Math;
                    var3 = var4.min;
                    var2 = var7.get;
                    var2 = var2.bind(var7)();
                    var2 = var2 + var6;
                    var2 = var3.bind(var4)(var2, var5);
                    return var2;
case 35:
                    return var1;
                }
            };
            var16 = {};
            var16['expandedPreviewHeight'] = var14;
            var16['EXPANDED_MAX_HEIGHT'] = var19;
            var16['expandedSV'] = var20;
            var16['notificationGestureY'] = var18;
            var16['initialPreviewHeight'] = var13;
            var3['__closure'] = var16;
            var16 = 7668752374780.0;
            var3['__workletHash'] = var16;
            var16 = _closure1_slot23;
            var3['__initData'] = var16;
            var16 = var8.bind(var12)(var3);
            _closure2_slot7 = var16;
            var3 = var1[var7];
            var12 = var5.bind(var4)(var3);
            var8 = var12.useDerivedValue;
            var3 = function f() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var2 = var3.get;
                    var2 = var2.bind(var3)();
                    if(var2) { _fun0012_ip = 36; continue _fun0012 }
case 37:
                    var2 = global;
                    var6 = var2.Math;
                    var5 = var6.min;
                    var4 = _closure2_slot5;
                    var3 = var4.get;
                    var4 = var3.bind(var4)();
                    var3 = _closure2_slot4;
                    var4 = var5.bind(var6)(var4, var3);
                    var5 = _closure2_slot2;
                    var3 = var5.get;
                    var3 = var3.bind(var5)();
                    var4 = var4 - var3;
                    var7 = var2.Math;
                    var6 = var7.max;
                    var5 = _closure2_slot1;
                    var3 = var5.get;
                    var3 = var3.bind(var5)();
                    var5 = 0;
                    var3 = var6.bind(var7)(var5, var3);
                    if(!(!(var4 <= var5))) { _fun0012_ip = 38; continue _fun0012 }
case 39:
                    var6 = var2.Math;
                    var5 = var6.min;
                    var8 = _closure2_slot7;
                    var7 = var8.get;
                    var7 = var7.bind(var8)();
                    var8 = _closure2_slot2;
                    var1 = var8.get;
                    var1 = var1.bind(var8)();
                    var1 = var7 - var1;
                    var4 = var1 / var4;
                    var1 = 1;
                    var1 = var5.bind(var6)(var1, var4);
                    _fun0012_ip = 40; continue _fun0012;
case 38:
                    var5 = var2.Math;
                    var4 = var5.min;
                    var2 = 20;
                    var3 = var3 / var2;
                    var2 = 1;
                    var1 = var4.bind(var5)(var2, var3);
case 40:
                    return var1;
case 36:
                    var1 = 1;
                    return var1;
                }
            };
            var17 = {};
            var17['expandedSV'] = var20;
            var17['expandedPreviewHeight'] = var14;
            var17['EXPANDED_MAX_HEIGHT'] = var19;
            var17['initialPreviewHeight'] = var13;
            var17['notificationGestureY'] = var18;
            var18 = 20;
            var17['ACCESSORY_EXIT_THRESHOLD'] = var18;
            var17['currentHeight'] = var16;
            var3['__closure'] = var17;
            var17 = 14767439807279.0;
            var3['__workletHash'] = var17;
            var17 = _closure1_slot24;
            var3['__initData'] = var17;
            var12 = var8.bind(var12)(var3);
            var3 = var1[var7];
            var5 = var5.bind(var4)(var3);
            var3 = var5.useAnimatedStyle;
            var2 = function H() {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    var1 = _closure2_slot6;
                    if(var1) { _fun0013_ip = 41; continue _fun0013 }
case 13:
                    var1 = {};
                    var2 = 'hidden';
                    var1['overflow'] = var2;
                    var4 = _closure2_slot7;
                    var2 = var4.get;
                    var2 = var2.bind(var4)();
                    var1['height'] = var2;
                    _fun0013_ip = 42; continue _fun0013;
case 41:
                    var2 = {};
                    var4 = 'hidden';
                    var2['overflow'] = var4;
                    var5 = _closure2_slot7;
                    var4 = var5.get;
                    var4 = var4.bind(var5)();
                    var2['height'] = var4;
                    var4 = _closure2_slot3;
                    var3 = var4.get;
                    var3 = var3.bind(var4)();
                    var3 = -var3;
                    var2['marginRight'] = var3;
                    var1 = var2;
case 42:
                    return var1;
                }
            };
            var8 = {};
            var8['shouldHandlePreviewableMediaExpand'] = var9;
            var8['currentHeight'] = var16;
            var8['accessoryWidthSV'] = var10;
            var2['__closure'] = var8;
            var8 = 6185146702702.0;
            var2['__workletHash'] = var8;
            var8 = _closure1_slot25;
            var2['__initData'] = var8;
            var5 = var3.bind(var5)(var2);
            var3 = _closure1_slot9;
            var2 = _closure1_slot1;
            var1 = var1[var7];
            var1 = var2.bind(var4)(var1);
            var2 = var1.View;
            var1 = {};
            var1['style'] = var5;
            var8 = _closure1_slot8;
            var7 = _closure1_slot20;
            var5 = {};
            var5['message'] = var15;
            var5['expandedPreviewHeight'] = var14;
            var5['fadeProgress'] = var12;
            var7 = var8.bind(var4)(var7, var5);
            var5 = new Array(2);
            var5[0] = var7;
            var7 = _closure1_slot22;
            var6 = {};
            var6['initialPreviewHeight'] = var13;
            var6['fadeProgress'] = var12;
            var6['initialPreviewContent'] = var11;
            var6['accessoryWidthSV'] = var10;
            var6['shouldHandlePreviewableMediaExpand'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = var8.bind(var7)(var4);
    var _closure1_slot26 = var4;
    var4 = {};
    var8 = 'function MessageNotificationTsx8(){const{notificationGestureY,expandedSV,ACCESSORY_EXIT_THRESHOLD}=this.__closure;if(notificationGestureY==null){return 0;}if(expandedSV.get()){return 1;}const dragDistance=Math.max(0,notificationGestureY.get());return Math.min(1,dragDistance/ACCESSORY_EXIT_THRESHOLD);}';
    var4['code'] = var8;
    var _closure1_slot27 = var4;
    var4 = {};
    var8 = 'function MessageNotificationTsx9(){const{PREVIEW_SIZE,ACCESSORY_LEFT_GAP,accessoryExitProgressSV}=this.__closure;return(PREVIEW_SIZE+ACCESSORY_LEFT_GAP)*(1-accessoryExitProgressSV.get());}';
    var4['code'] = var8;
    var _closure1_slot28 = var4;
    var4 = {};
    var8 = 'function MessageNotificationTsx10(){const{notificationGestureY,hasPreviewableMedia,accessoryWidthSV,PREVIEW_SIZE}=this.__closure;if(notificationGestureY==null||!hasPreviewableMedia){return{};}return{marginRight:accessoryWidthSV.get(),minHeight:PREVIEW_SIZE};}';
    var4['code'] = var8;
    var _closure1_slot29 = var4;
    var4 = {};
    var8 = 'function MessageNotificationTsx11(){const{withTiming,expandedSV,tokens,Easing}=this.__closure;return{borderRadius:withTiming(expandedSV.get()?tokens.radii.xl:tokens.radii.lg,{duration:220,easing:Easing.bezier(0.16,1,0.3,1)})};}';
    var4['code'] = var8;
    var _closure1_slot30 = var4;
    var4 = var7.memo;
    var2 = function MessageNotification(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var1 = arg1;
            var21 = var1.notification;
            var7 = var1.canExpand;
            var5 = var1.expandedContentVisible;
            var _closure2_slot0 = var5;
            var23 = var1.expandedSV;
            var _closure2_slot1 = var23;
            var16 = var1.notificationGestureY;
            var _closure2_slot2 = var16;
            var6 = var1.onAccessibilityExpand;
            var10 = var1.onDismiss;
            var _closure2_slot3 = var10;
            var4 = undefined;
            var _closure2_slot8 = var4;
            var _closure2_slot9 = var4;
            var _closure2_slot10 = var4;
            var1 = _closure1_slot14;
            var9 = var1.bind(var4)();
            var17 = var21.message;
            var26 = var21.channel;
            var _closure2_slot4 = var26;
            var25 = var21.parentChannel;
            var _closure2_slot5 = var25;
            var24 = var21.guild;
            var _closure2_slot6 = var24;
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var18 = 16;
            var1 = var8[var18];
            var11 = var3.bind(var4)(var1);
            var1 = var11.useNullableMessageAuthor;
            var22 = var1.bind(var11)(var17);
            var _closure2_slot7 = var22;
            var1 = 12;
            var1 = var8[var1];
            var11 = var3.bind(var4)(var1);
            var8 = var11.useStateFromStores;
            var1 = _closure1_slot5;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                var1 = _closure1_slot5;
                var1 = var1.roleStyle;
                return var1;
            };
            var3 = var8.bind(var11)(var3, var1);
            var11 = null;
            var8 = var11 == var22;
            var1 = undefined;
            if(var8) { _fun0014_ip = 43; continue _fun0014 }
case 44:
            var1 = var22.colorString;
case 43:
            var8 = var11 != var1;
            var14 = undefined;
            if(!var8) { _fun0014_ip = 45; continue _fun0014 }
case 46:
            var14 = var1;
case 45:
            var1 = 'dot';
            var13 = undefined;
            if(!(var1 === var3)) { _fun0014_ip = 47; continue _fun0014 }
case 48:
            var13 = undefined;
            if(!(var4 !== var14)) { _fun0014_ip = 47; continue _fun0014 }
case 49:
            var8 = _closure1_slot8;
            var3 = _closure1_slot0;
            var15 = _closure1_slot2;
            var1 = 17;
            var1 = var15[var1];
            var1 = var3.bind(var4)(var1);
            var3 = var1.RoleDot;
            var1 = {};
            var1['color'] = var14;
            var15 = var11 == var22;
            var14 = undefined;
            if(var15) { _fun0014_ip = 50; continue _fun0014 }
case 51:
            var14 = var22.colorStrings;
case 50:
            var1['colors'] = var14;
            var9 = var9.newContainerRoleDot;
            var1['containerStyles'] = var9;
            var13 = var8.bind(var4)(var3, var1);
case 47:
            var1 = var17.content;
            var3 = var1.length;
            var1 = 0;
            var1 = var1 === var3;
            if(!var1) { _fun0014_ip = 52; continue _fun0014 }
case 53:
            var3 = var17.interaction;
            var1 = var11 !== var3;
case 52:
            if(!var1) { _fun0014_ip = 54; continue _fun0014 }
case 55:
            var3 = var17.interaction;
            var1 = var4 !== var3;
case 54:
            if(!var1) { _fun0014_ip = 56; continue _fun0014 }
case 57:
            var3 = var17.activityInstance;
            var1 = var11 !== var3;
case 56:
            if(!var1) { _fun0014_ip = 58; continue _fun0014 }
case 59:
            var3 = var17.activityInstance;
            var1 = var4 !== var3;
case 58:
            if(!var1) { _fun0014_ip = 60; continue _fun0014 }
case 61:
            var15 = _closure1_slot0;
            var14 = _closure1_slot2;
            var1 = 18;
            var3 = var14[var1];
            var3 = var15.bind(var4)(var3);
            var9 = var3.intl;
            var8 = var9.formatToPlainString;
            var1 = var14[var1];
            var1 = var15.bind(var4)(var1);
            var1 = var1.t;
            var3 = var1["7eikg1"];
            var1 = {};
            var14 = var14[var18];
            var19 = var15.bind(var4)(var14);
            var18 = var19.getUserAuthor;
            var14 = var17.interaction;
            var20 = var11 == var14;
            var15 = undefined;
            if(var20) { _fun0014_ip = 62; continue _fun0014 }
case 63:
            var15 = var14.user;
case 62:
            var14 = var21.channel;
            var14 = var18.bind(var19)(var15, var14);
            var14 = var14.nick;
            var1['username'] = var14;
            var1 = var8.bind(var9)(var3, var1);
            var17['content'] = var1;
case 60:
            var28 = _closure1_slot0;
            var29 = _closure1_slot2;
            var1 = 13;
            var1 = var29[var1];
            var3 = var28.bind(var4)(var1);
            var1 = var3.useHasPreviewableMedia;
            var30 = var1.bind(var3)(var17);
            _closure2_slot8 = var30;
            var27 = 9;
            var1 = var29[var27];
            var8 = var28.bind(var4)(var1);
            var3 = var8.useSharedValue;
            var1 = _closure1_slot6;
            var20 = var3.bind(var8)(var1);
            var1 = var29[var27];
            var9 = var28.bind(var4)(var1);
            var8 = var9.useDerivedValue;
            var3 = function W() {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                    var3 = _closure2_slot2;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0015_ip = 64; continue _fun0015 }
case 5:
                    var3 = _closure2_slot1;
                    var1 = var3.get;
                    var1 = var1.bind(var3)();
                    if(var1) { _fun0015_ip = 42; continue _fun0015 }
case 15:
                    var1 = global;
                    var5 = var1.Math;
                    var4 = var5.max;
                    var3 = _closure2_slot2;
                    var2 = var3.get;
                    var3 = var2.bind(var3)();
                    var2 = 0;
                    var2 = var4.bind(var5)(var2, var3);
                    var4 = var1.Math;
                    var3 = var4.min;
                    var1 = 20;
                    var2 = var2 / var1;
                    var1 = 1;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
case 42:
                    var1 = 1;
                    return var1;
case 64:
                    var1 = 0;
                    return var1;
                }
            };
            var14 = {};
            var14['notificationGestureY'] = var16;
            var14['expandedSV'] = var23;
            var1 = 20;
            var14['ACCESSORY_EXIT_THRESHOLD'] = var1;
            var3['__closure'] = var14;
            var14 = 14375442919988.0;
            var3['__workletHash'] = var14;
            var14 = _closure1_slot27;
            var3['__initData'] = var14;
            var15 = var8.bind(var9)(var3);
            _closure2_slot9 = var15;
            var3 = var29[var27];
            var9 = var28.bind(var4)(var3);
            var8 = var9.useDerivedValue;
            var3 = function L() {
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 10;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
                var2 = var2.PREVIEW_SIZE;
                var1 = _closure1_slot10;
                var2 = var2 + var1;
                var3 = _closure2_slot9;
                var1 = var3.get;
                var3 = var1.bind(var3)();
                var1 = 1;
                var1 = var1 - var3;
                var1 = var2 * var1;
                return var1;
            };
            var14 = {};
            var18 = 10;
            var19 = var29[var18];
            var19 = var28.bind(var4)(var19);
            var19 = var19.PREVIEW_SIZE;
            var14['PREVIEW_SIZE'] = var19;
            var19 = _closure1_slot10;
            var14['ACCESSORY_LEFT_GAP'] = var19;
            var14['accessoryExitProgressSV'] = var15;
            var3['__closure'] = var14;
            var14 = 617547756523.0;
            var3['__workletHash'] = var14;
            var14 = _closure1_slot28;
            var3['__initData'] = var14;
            var19 = var8.bind(var9)(var3);
            _closure2_slot10 = var19;
            var3 = var29[var27];
            var9 = var28.bind(var4)(var3);
            var8 = var9.useAnimatedStyle;
            var3 = function k() {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                    var2 = _closure2_slot2;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0016_ip = 20; continue _fun0016 }
case 5:
                    var1 = _closure2_slot8;
                    if(var1) { _fun0016_ip = 65; continue _fun0016 }
case 20:
                    var1 = {};
                    _fun0016_ip = 24; continue _fun0016;
case 65:
                    var2 = {};
                    var4 = _closure2_slot10;
                    var3 = var4.get;
                    var3 = var3.bind(var4)();
                    var2['marginRight'] = var3;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 10;
                    var4 = var4[var3];
                    var3 = undefined;
                    var3 = var5.bind(var3)(var4);
                    var3 = var3.PREVIEW_SIZE;
                    var2['minHeight'] = var3;
                    var1 = var2;
case 24:
                    return var1;
                }
            };
            var14 = {};
            var14['notificationGestureY'] = var16;
            var14['hasPreviewableMedia'] = var30;
            var14['accessoryWidthSV'] = var19;
            var18 = var29[var18];
            var18 = var28.bind(var4)(var18);
            var18 = var18.PREVIEW_SIZE;
            var14['PREVIEW_SIZE'] = var18;
            var3['__closure'] = var14;
            var14 = 10055156293894.0;
            var3['__workletHash'] = var14;
            var14 = _closure1_slot29;
            var3['__initData'] = var14;
            var18 = var8.bind(var9)(var3);
            var3 = var29[var27];
            var9 = var28.bind(var4)(var3);
            var8 = var9.useAnimatedStyle;
            var3 = function F() {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                    var1 = {};
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 19;
                    var2 = var4[var2];
                    var8 = undefined;
                    var5 = var3.bind(var8)(var2);
                    var4 = var5.withTiming;
                    var3 = _closure2_slot1;
                    var2 = var3.get;
                    var3 = var2.bind(var3)();
                    var7 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var2 = 6;
                    var2 = var9[var2];
                    var2 = var7.bind(var8)(var2);
                    var2 = var2.radii;
                    if(var3) { _fun0017_ip = 66; continue _fun0017 }
case 67:
                    var3 = var2.lg;
                    _fun0017_ip = 68; continue _fun0017;
case 66:
                    var3 = var2.xl;
case 68:
                    var2 = {};
                    var7 = 220;
                    var2['duration'] = var7;
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var6 = 9;
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
            var14 = {};
            var30 = 19;
            var30 = var29[var30];
            var30 = var28.bind(var4)(var30);
            var30 = var30.withTiming;
            var14['withTiming'] = var30;
            var14['expandedSV'] = var23;
            var31 = _closure1_slot1;
            var30 = 6;
            var30 = var29[var30];
            var30 = var31.bind(var4)(var30);
            var14['tokens'] = var30;
            var27 = var29[var27];
            var27 = var28.bind(var4)(var27);
            var27 = var27.Easing;
            var14['Easing'] = var27;
            var3['__closure'] = var14;
            var14 = 5784976109939.0;
            var3['__workletHash'] = var14;
            var14 = _closure1_slot30;
            var3['__initData'] = var14;
            var14 = var8.bind(var9)(var3);
            var9 = _closure1_slot3;
            var8 = var9.useMemo;
            var3 = new Array(6);
            var3[0] = var26;
            var3[1] = var25;
            var3[2] = var24;
            var3[3] = var22;
            var3[4] = var5;
            var3[5] = var10;
            var2 = function() {
                var1 = {};
                var2 = 'message';
                var1['type'] = var2;
                var3 = _closure2_slot4;
                var1['channel'] = var3;
                var3 = _closure2_slot5;
                var1['parentChannel'] = var3;
                var3 = _closure2_slot6;
                var1['guild'] = var3;
                var3 = _closure2_slot7;
                var1['author'] = var3;
                var3 = _closure2_slot0;
                var1['expanded'] = var3;
                var2 = _closure2_slot3;
                var1['onDismiss'] = var2;
                return var1;
            };
            var8 = var8.bind(var9)(var2, var3);
            var9 = _closure1_slot8;
            var3 = _closure1_slot17;
            var2 = {};
            var2['message'] = var17;
            var22 = var9.bind(var4)(var3, var2);
            var10 = var22;
            if(!(var11 != var16)) { _fun0014_ip = 69; continue _fun0014 }
case 70:
            var9 = _closure1_slot8;
            var3 = _closure1_slot26;
            var2 = {};
            var2['message'] = var17;
            var2['expandedSV'] = var23;
            var2['notificationGestureY'] = var16;
            var2['initialPreviewContent'] = var22;
            var2['initialPreviewHeight'] = var20;
            var2['accessoryWidthSV'] = var19;
            var10 = var9.bind(var4)(var3, var2);
case 69:
            var20 = _closure1_slot0;
            var19 = _closure1_slot2;
            var1 = var19[var1];
            var2 = var20.bind(var4)(var1);
            var1 = var2.useIsScreenReaderEnabled;
            var9 = var1.bind(var2)();
            var3 = _closure1_slot8;
            var1 = 21;
            var1 = var19[var1];
            var1 = var20.bind(var4)(var1);
            var2 = var1.Notification;
            var1 = {};
            var23 = 17;
            var19 = var19[var23];
            var19 = var20.bind(var4)(var19);
            var20 = var19.Avatar;
            var19 = {};
            var22 = var17.author;
            var19['user'] = var22;
            var22 = var21.guild;
            var24 = var11 == var22;
            var21 = undefined;
            if(var24) { _fun0014_ip = 71; continue _fun0014 }
case 72:
            var21 = var22.id;
case 71:
            var19['guildId'] = var21;
            var22 = _closure1_slot0;
            var21 = _closure1_slot2;
            var21 = var21[var23];
            var21 = var22.bind(var4)(var21);
            var21 = var21.AvatarSizes;
            var21 = var21.NORMAL;
            var19['size'] = var21;
            var19 = var3.bind(var4)(var20, var19);
            var1['icon'] = var19;
            var1['accessoryLabelNode'] = var13;
            var13 = new Array(2);
            var13[0] = var18;
            var13[1] = var14;
            var1['bodyStyle'] = var13;
            if(!(var11 != var16)) { _fun0014_ip = 73; continue _fun0014 }
case 74:
            var11 = null;
            if(var5) { _fun0014_ip = 75; continue _fun0014 }
case 73:
            var14 = _closure1_slot8;
            var13 = _closure1_slot16;
            var12 = {};
            var12['message'] = var17;
            var12['notificationGestureY'] = var16;
            var12['accessoryExitProgressSV'] = var15;
            var11 = var14.bind(var4)(var13, var12);
case 75:
            var1['rightAccessory'] = var11;
            var1['children'] = var10;
            var1['header'] = var8;
            if(!var7) { _fun0014_ip = 76; continue _fun0014 }
case 77:
            var8 = !var5;
            if(var8) { _fun0014_ip = 78; continue _fun0014 }
case 79:
            var8 = var9;
case 78:
            var7 = var8;
case 76:
            var1['showDragHandle'] = var7;
            var1['onAccessibilityExpand'] = var6;
            var1['expandedContentVisible'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 22;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/in_app_notifications/native/MessageNotification.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();