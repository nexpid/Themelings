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
    var _closure1_slot33 = var1;
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
    var8 = var4.DEFAULT_ANIMATION_TIMING;
    var _closure1_slot6 = var8;
    var8 = var4.IN_APP_NOTIFICATION_MAX_HEIGHT;
    var _closure1_slot7 = var8;
    var4 = var4.NOTIFICATION_PREVIEW_LINE_CLAMP;
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.MessageEmbedTypes;
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot10 = var8;
    var4 = var4.jsxs;
    var _closure1_slot11 = var4;
    var11 = 6;
    var4 = var6[var11];
    var4 = var12.bind(var1)(var4);
    var4 = var4.space;
    var13 = var4.PX_12;
    var _closure1_slot12 = var13;
    var4 = 7;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var4 = var8.isAndroid;
    var4 = var4.bind(var8)();
    var _closure1_slot13 = var4;
    var4 = var6[var11];
    var4 = var12.bind(var1)(var4);
    var4 = var4.space;
    var4 = var4.PX_12;
    var _closure1_slot14 = var4;
    var4 = var6[var11];
    var4 = var12.bind(var1)(var4);
    var4 = var4.space;
    var4 = var4.PX_8;
    var _closure1_slot15 = var4;
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
    var _closure1_slot16 = var4;
    var4 = {};
    var8 = 'function MessageNotificationTsx1(){const{isExpandableNotification,accessoryExitProgressSV}=this.__closure;if(!isExpandableNotification){return{opacity:1,transform:[{scale:1}]};}const progress=accessoryExitProgressSV.get();return{opacity:1-progress,transform:[{scale:1-progress}]};}';
    var4['code'] = var8;
    var _closure1_slot17 = var4;
    var8 = var7.memo;
    var4 = function(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var8 = var1.message;
            var9 = var1.isExpandableNotification;
            var _closure2_slot0 = var9;
            var12 = var1.accessoryExitProgressSV;
            var _closure2_slot1 = var12;
            var1 = _closure1_slot16;
            var4 = undefined;
            var6 = var1.bind(var4)();
            var7 = _closure1_slot0;
            var10 = _closure1_slot2;
            var1 = 9;
            var3 = var10[var1];
            var7 = var7.bind(var4)(var3);
            var3 = var7.useAnimatedStyle;
            var2 = function o() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var1 = {};
                    var4 = 1;
                    if(var3) { _fun0003_ip = 4; continue _fun0003 }
case 5:
                    var1['opacity'] = var4;
                    var5 = {};
                    var5['scale'] = var4;
                    var3 = new Array(1);
                    var3[0] = var5;
                    var1['transform'] = var3;
                    return var1;
case 4:
                    var3 = _closure2_slot1;
                    var2 = var3.get;
                    var2 = var2.bind(var3)();
                    var3 = var4 - var2;
                    var1['opacity'] = var3;
                    var3 = {};
                    var2 = var4 - var2;
                    var3['scale'] = var2;
                    var2 = new Array(1);
                    var2[0] = var3;
                    var1['transform'] = var2;
                    return var1;
                }
            };
            var11 = {};
            var11['isExpandableNotification'] = var9;
            var11['accessoryExitProgressSV'] = var12;
            var2['__closure'] = var11;
            var11 = 8240012050676.0;
            var2['__workletHash'] = var11;
            var11 = _closure1_slot17;
            var2['__initData'] = var11;
            var7 = var3.bind(var7)(var2);
            var3 = _closure1_slot10;
            var2 = _closure1_slot1;
            var1 = var10[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.View;
            var1 = {};
            if(var9) { _fun0002_ip = 6; continue _fun0002 }
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
            var7 = _closure1_slot10;
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
    var _closure1_slot18 = var4;
    var8 = var7.memo;
    var4 = function(arg1) {
        var1 = arg1;
        var6 = var1.message;
        var4 = _closure1_slot10;
        var2 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 11;
        var1 = var3[var1];
        var3 = undefined;
        var2 = var2.bind(var3)(var1);
        var1 = {};
        var1['message'] = var6;
        var6 = _closure1_slot8;
        var1['lineClamp'] = var6;
        var5 = _closure1_slot7;
        var1['maxHeight'] = var5;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var4 = var8.bind(var7)(var4);
    var _closure1_slot19 = var4;
    var4 = {};
    var8 = 'function MessageNotificationTsx2(){const{contentHeight,EXPANDED_MAX_HEIGHT,TRUNCATED_MESSAGE_HEIGHT_OFFSET,EXPANDED_SHORT_PREVIEW_PADDING}=this.__closure;const isGradientShown=contentHeight.get()>=EXPANDED_MAX_HEIGHT-TRUNCATED_MESSAGE_HEIGHT_OFFSET;const isShortPreview=contentHeight.get()>0&&!isGradientShown;return{paddingBottom:isShortPreview?EXPANDED_SHORT_PREVIEW_PADDING:0};}';
    var4['code'] = var8;
    var _closure1_slot20 = var4;
    var4 = {};
    var8 = 'function MessageNotificationTsx3(){const{IS_ANDROID,hasPreviewableMedia,hasTextContent,hasEmbedMedia,fadeProgress,ACCESSORY_EXIT_THRESHOLD}=this.__closure;if(IS_ANDROID&&hasPreviewableMedia&&hasTextContent&&!hasEmbedMedia){return{opacity:fadeProgress.get()};}if(!hasTextContent||hasEmbedMedia){return{opacity:fadeProgress.get(),transform:[{translateY:(1-fadeProgress.get())*ACCESSORY_EXIT_THRESHOLD}]};}return{opacity:1};}';
    var4['code'] = var8;
    var _closure1_slot21 = var4;
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
            var2 = _closure1_slot16;
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
                        var2 = _closure1_slot9;
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
            var7 = _closure1_slot33;
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
            var7 = function u() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var5 = _closure2_slot6;
                    var2 = var5.get;
                    var2 = var2.bind(var5)();
                    var4 = _closure2_slot5;
                    var1 = _closure1_slot15;
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
                    var2 = _closure1_slot14;
case 16:
                    var1['paddingBottom'] = var2;
                    return var1;
                }
            };
            var22 = {};
            var22['contentHeight'] = var23;
            var22['EXPANDED_MAX_HEIGHT'] = var13;
            var23 = _closure1_slot15;
            var22['TRUNCATED_MESSAGE_HEIGHT_OFFSET'] = var23;
            var23 = _closure1_slot14;
            var22['EXPANDED_SHORT_PREVIEW_PADDING'] = var23;
            var7['__closure'] = var22;
            var22 = 14817205317960.0;
            var7['__workletHash'] = var22;
            var22 = _closure1_slot20;
            var7['__initData'] = var22;
            var7 = var9.bind(var17)(var7);
            var9 = var6[var1];
            var16 = var16.bind(var4)(var9);
            var9 = var16.useAnimatedStyle;
            var3 = function _() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var1 = _closure1_slot13;
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
            var22 = _closure1_slot13;
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
            var17 = _closure1_slot21;
            var3['__initData'] = var17;
            var16 = var9.bind(var16)(var3);
            var3 = _closure1_slot10;
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
            var7 = _closure1_slot10;
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
    var _closure1_slot22 = var4;
    var4 = {};
    var8 = 'function MessageNotificationTsx4(){const{shouldHandlePreviewableMediaExpand,fadeProgress,accessoryWidthSV}=this.__closure;return shouldHandlePreviewableMediaExpand?{opacity:Math.max(0,1-fadeProgress.get()*2),right:accessoryWidthSV.get()}:{opacity:Math.max(0,1-fadeProgress.get()*2)};}';
    var4['code'] = var8;
    var _closure1_slot23 = var4;
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
        var1 = _closure1_slot16;
        var4 = undefined;
        var6 = var1.bind(var4)();
        var1 = _closure1_slot33;
        var8 = var1.bind(var4)(var3);
        var9 = _closure1_slot0;
        var10 = _closure1_slot2;
        var1 = 9;
        var3 = var10[var1];
        var9 = var9.bind(var4)(var3);
        var3 = var9.useAnimatedStyle;
        var2 = function u() {
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
        var11 = _closure1_slot23;
        var2['__initData'] = var11;
        var9 = var3.bind(var9)(var2);
        var3 = _closure1_slot10;
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
    var _closure1_slot24 = var4;
    var4 = {};
    var8 = 'function MessageNotificationTsx5(){const{expandedPreviewHeight,EXPANDED_MAX_HEIGHT,expandedSV,notificationGestureY,initialPreviewHeight}=this.__closure;const maxExpandedHeight=Math.min(expandedPreviewHeight.get(),EXPANDED_MAX_HEIGHT);if(expandedSV.get()){return maxExpandedHeight;}const dragDistance=Math.max(0,notificationGestureY.get());const maxHeight=Math.max(maxExpandedHeight,initialPreviewHeight.get());return Math.min(initialPreviewHeight.get()+dragDistance,maxHeight);}';
    var4['code'] = var8;
    var _closure1_slot25 = var4;
    var4 = {};
    var8 = 'function MessageNotificationTsx6(){const{expandedSV,expandedPreviewHeight,EXPANDED_MAX_HEIGHT,initialPreviewHeight,notificationGestureY,ACCESSORY_EXIT_THRESHOLD,currentHeight}=this.__closure;if(expandedSV.get()){return 1;}const maxExpandedHeight=Math.min(expandedPreviewHeight.get(),EXPANDED_MAX_HEIGHT);const heightDifference=maxExpandedHeight-initialPreviewHeight.get();const dragDistance=Math.max(0,notificationGestureY.get());if(heightDifference<=0){return Math.min(1,dragDistance/ACCESSORY_EXIT_THRESHOLD);}return Math.min(1,(currentHeight.get()-initialPreviewHeight.get())/heightDifference);}';
    var4['code'] = var8;
    var _closure1_slot26 = var4;
    var4 = {};
    var8 = "function MessageNotificationTsx7(){const{shouldHandlePreviewableMediaExpand,currentHeight,accessoryWidthSV}=this.__closure;return shouldHandlePreviewableMediaExpand?{overflow:'hidden',height:currentHeight.get(),marginRight:-accessoryWidthSV.get()}:{overflow:'hidden',height:currentHeight.get()};}";
    var4['code'] = var8;
    var _closure1_slot27 = var4;
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
            var9 = _closure1_slot13;
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
            var3 = function u() {
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
case 36:
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
            var16 = _closure1_slot25;
            var3['__initData'] = var16;
            var16 = var8.bind(var12)(var3);
            _closure2_slot7 = var16;
            var3 = var1[var7];
            var12 = var5.bind(var4)(var3);
            var8 = var12.useDerivedValue;
            var3 = function h() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var2 = var3.get;
                    var2 = var2.bind(var3)();
                    if(var2) { _fun0012_ip = 37; continue _fun0012 }
case 38:
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
                    if(!(!(var4 <= var5))) { _fun0012_ip = 39; continue _fun0012 }
case 40:
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
                    _fun0012_ip = 41; continue _fun0012;
case 39:
                    var5 = var2.Math;
                    var4 = var5.min;
                    var2 = 20;
                    var3 = var3 / var2;
                    var2 = 1;
                    var1 = var4.bind(var5)(var2, var3);
case 41:
                    return var1;
case 37:
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
            var17 = _closure1_slot26;
            var3['__initData'] = var17;
            var12 = var8.bind(var12)(var3);
            var3 = var1[var7];
            var5 = var5.bind(var4)(var3);
            var3 = var5.useAnimatedStyle;
            var2 = function _() {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    var1 = _closure2_slot6;
                    if(var1) { _fun0013_ip = 4; continue _fun0013 }
case 13:
                    var1 = {};
                    var2 = 'hidden';
                    var1['overflow'] = var2;
                    var4 = _closure2_slot7;
                    var2 = var4.get;
                    var2 = var2.bind(var4)();
                    var1['height'] = var2;
                    _fun0013_ip = 42; continue _fun0013;
case 4:
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
            var8 = _closure1_slot27;
            var2['__initData'] = var8;
            var5 = var3.bind(var5)(var2);
            var3 = _closure1_slot11;
            var2 = _closure1_slot1;
            var1 = var1[var7];
            var1 = var2.bind(var4)(var1);
            var2 = var1.View;
            var1 = {};
            var1['style'] = var5;
            var8 = _closure1_slot10;
            var7 = _closure1_slot22;
            var5 = {};
            var5['message'] = var15;
            var5['expandedPreviewHeight'] = var14;
            var5['fadeProgress'] = var12;
            var7 = var8.bind(var4)(var7, var5);
            var5 = new Array(2);
            var5[0] = var7;
            var7 = _closure1_slot24;
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
    var _closure1_slot28 = var4;
    var4 = {};
    var8 = 'function MessageNotificationTsx8(){const{isExpandableNotification,expandedSV,notificationGestureY,ACCESSORY_EXIT_THRESHOLD}=this.__closure;if(!isExpandableNotification){return 0;}if(expandedSV.get()){return 1;}const dragDistance=Math.max(0,notificationGestureY.get());return Math.min(1,dragDistance/ACCESSORY_EXIT_THRESHOLD);}';
    var4['code'] = var8;
    var _closure1_slot29 = var4;
    var4 = {};
    var8 = 'function MessageNotificationTsx9(){const{PREVIEW_SIZE,ACCESSORY_LEFT_GAP,accessoryExitProgressSV}=this.__closure;return(PREVIEW_SIZE+ACCESSORY_LEFT_GAP)*(1-accessoryExitProgressSV.get());}';
    var4['code'] = var8;
    var _closure1_slot30 = var4;
    var4 = {};
    var8 = 'function MessageNotificationTsx10(){const{isExpandableNotification,hasPreviewableMedia,accessoryWidthSV,PREVIEW_SIZE}=this.__closure;if(!isExpandableNotification||!hasPreviewableMedia){return{};}return{marginRight:accessoryWidthSV.get(),minHeight:PREVIEW_SIZE};}';
    var4['code'] = var8;
    var _closure1_slot31 = var4;
    var4 = {};
    var8 = 'function MessageNotificationTsx11(){const{withTiming,expandedSV,DEFAULT_ANIMATION_TIMING}=this.__closure;return{opacity:withTiming(expandedSV.get()?1:0,DEFAULT_ANIMATION_TIMING),maxHeight:withTiming(expandedSV.get()?60:0,DEFAULT_ANIMATION_TIMING)};}';
    var4['code'] = var8;
    var _closure1_slot32 = var4;
    var4 = var7.memo;
    var2 = function MessageNotification(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var1 = arg1;
            var11 = var1.notification;
            var _closure2_slot0 = var11;
            var4 = undefined;
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
            var1 = _closure1_slot16;
            var1 = var1.bind(var4)();
            var25 = var11.message;
            var _closure2_slot1 = var25;
            var30 = var11.channel;
            var _closure2_slot2 = var30;
            var29 = var11.parentChannel;
            var _closure2_slot3 = var29;
            var27 = var11.guild;
            var _closure2_slot4 = var27;
            var2 = var25.content;
            var3 = var2.length;
            var2 = 0;
            var2 = var2 === var3;
            if(!var2) { _fun0014_ip = 43; continue _fun0014 }
case 44:
            var5 = var25.interaction;
            var3 = null;
            var2 = var3 !== var5;
case 43:
            if(!var2) { _fun0014_ip = 45; continue _fun0014 }
case 46:
            var3 = var25.interaction;
            var2 = var4 !== var3;
case 45:
            if(!var2) { _fun0014_ip = 47; continue _fun0014 }
case 7:
            var5 = var25.activityInstance;
            var3 = null;
            var2 = var3 !== var5;
case 47:
            if(!var2) { _fun0014_ip = 48; continue _fun0014 }
case 49:
            var3 = var25.activityInstance;
            var2 = var4 !== var3;
case 48:
            if(!var2) { _fun0014_ip = 50; continue _fun0014 }
case 51:
            var9 = _closure1_slot0;
            var12 = _closure1_slot2;
            var2 = 21;
            var3 = var12[var2];
            var3 = var9.bind(var4)(var3);
            var7 = var3.intl;
            var5 = var7.formatToPlainString;
            var2 = var12[var2];
            var2 = var9.bind(var4)(var2);
            var2 = var2.t;
            var3 = var2["7eikg1"];
            var2 = {};
            var8 = 22;
            var8 = var12[var8];
            var12 = var9.bind(var4)(var8);
            var9 = var12.getUserAuthor;
            var13 = var25.interaction;
            var8 = null;
            var14 = var8 == var13;
            var8 = undefined;
            if(var14) { _fun0014_ip = 52; continue _fun0014 }
case 53:
            var8 = var13.user;
case 52:
            var8 = var9.bind(var12)(var8, var30);
            var8 = var8.nick;
            var2['username'] = var8;
            var2 = var5.bind(var7)(var3, var2);
            var25['content'] = var2;
case 50:
            var32 = _closure1_slot0;
            var33 = _closure1_slot2;
            var2 = 22;
            var2 = var33[var2];
            var3 = var32.bind(var4)(var2);
            var2 = var3.useNullableMessageAuthor;
            var19 = var2.bind(var3)(var25);
            _closure2_slot5 = var19;
            var2 = {};
            var2['author'] = var19;
            var1 = var1.newContainerRoleDot;
            var2['containerStyles'] = var1;
            var1 = function useAccessoryLabelNode(arg1) {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                    var1 = arg1;
                    var8 = var1.author;
                    var6 = var1.containerStyles;
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 12;
                    var1 = var4[var1];
                    var5 = undefined;
                    var7 = var3.bind(var5)(var1);
                    var4 = var7.useStateFromStores;
                    var1 = _closure1_slot5;
                    var3 = new Array(1);
                    var3[0] = var1;
                    var1 = function() {
                        var1 = _closure1_slot5;
                        var1 = var1.roleStyle;
                        return var1;
                    };
                    var4 = var4.bind(var7)(var3, var1);
                    var7 = null;
                    var3 = var7 == var8;
                    var1 = undefined;
                    if(var3) { _fun0015_ip = 54; continue _fun0015 }
case 24:
                    var1 = var8.colorString;
case 54:
                    var3 = var7 != var1;
                    var9 = undefined;
                    if(!var3) { _fun0015_ip = 55; continue _fun0015 }
case 56:
                    var9 = var1;
case 55:
                    var3 = 'dot';
                    var1 = undefined;
                    if(!(var3 === var4)) { _fun0015_ip = 51; continue _fun0015 }
case 57:
                    var1 = undefined;
                    if(!(var1 !== var9)) { _fun0015_ip = 51; continue _fun0015 }
case 58:
                    var4 = _closure1_slot10;
                    var3 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var2 = 16;
                    var2 = var10[var2];
                    var2 = var3.bind(var5)(var2);
                    var3 = var2.RoleDot;
                    var2 = {};
                    var2['color'] = var9;
                    var9 = var7 == var8;
                    var7 = undefined;
                    if(var9) { _fun0015_ip = 59; continue _fun0015 }
case 60:
                    var7 = var8.colorStrings;
case 59:
                    var2['colors'] = var7;
                    var2['containerStyles'] = var6;
                    var1 = var4.bind(var5)(var3, var2);
case 51:
                    return var1;
                }
            };
            var22 = var1.bind(var4)(var2);
            var1 = 17;
            var1 = var33[var1];
            var2 = var32.bind(var4)(var1);
            var1 = var2.useInAppNotificationContext;
            var1 = var1.bind(var2)();
            var14 = var1.isExpanded;
            _closure2_slot6 = var14;
            var26 = var1.expandedSV;
            _closure2_slot7 = var26;
            var28 = var1.notificationGestureY;
            _closure2_slot8 = var28;
            var2 = var1.handleDismissNotification;
            _closure2_slot9 = var2;
            var16 = var1.isExpandableNotification;
            _closure2_slot10 = var16;
            var7 = var1.showReactionBar;
            var1 = function useExpandNotificationActions(arg1) {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 17;
                    var3 = var5[var3];
                    var10 = undefined;
                    var4 = var4.bind(var10)(var3);
                    var3 = var4.useInAppNotificationContext;
                    var3 = var3.bind(var4)();
                    var8 = var3.setExpanded;
                    var _closure3_slot0 = var8;
                    var7 = var3.setAutoDismissing;
                    var _closure3_slot1 = var7;
                    var9 = var3.setActionTaken;
                    var _closure3_slot2 = var9;
                    var4 = var3.isExpanded;
                    var _closure3_slot3 = var4;
                    var3 = var3.setConfirmation;
                    var _closure3_slot4 = var3;
                    var6 = _closure1_slot3;
                    var5 = var6.useCallback;
                    var4 = new Array(4);
                    var4[0] = var9;
                    var4[1] = var8;
                    var4[2] = var7;
                    var4[3] = var3;
                    var3 = function(arg1, arg2, arg3) {
                        var3 = arg1;
                        var6 = arg2;
                        var9 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var2 = 18;
                        var4 = var10[var2];
                        var1 = undefined;
                        var5 = var9.bind(var1)(var4);
                        var4 = var5.triggerHapticFeedback;
                        var2 = var10[var2];
                        var2 = var9.bind(var1)(var2);
                        var2 = var2.HapticFeedbackTypes;
                        var2 = var2.IMPACT_LIGHT;
                        var2 = var4.bind(var5)(var2);
                        var2 = 19;
                        var4 = var10[var2];
                        var11 = var9.bind(var1)(var4);
                        var8 = var11.addReaction;
                        var4 = var3.channel;
                        var7 = var4.id;
                        var3 = var3.message;
                        var16 = var3.id;
                        var3 = 20;
                        var3 = var10[var3];
                        var4 = var9.bind(var1)(var3);
                        var3 = var4.toReactionEmoji;
                        var15 = var3.bind(var4)(var6);
                        var2 = var10[var2];
                        var2 = var9.bind(var1)(var2);
                        var2 = var2.ReactionLocations;
                        var14 = var2.IN_APP_NOTIFICATION;
                        var2 = {};
                        var12 = arg3;
                        var2['burst'] = var12;
                        var18 = var11;
                        var17 = var7;
                        var13 = var2;
                        var2 = var18[var8](var17, var16, var15, var14, var13, var12);
                        var4 = _closure3_slot2;
                        var3 = true;
                        var4 = var4.bind(var1)(var3);
                        var5 = _closure3_slot0;
                        var4 = false;
                        var4 = var5.bind(var1)(var4);
                        var5 = _closure3_slot4;
                        var4 = {};
                        var7 = 'message';
                        var4['type'] = var7;
                        var4['reaction'] = var6;
                        var6 = 21;
                        var7 = var10[var6];
                        var7 = var9.bind(var1)(var7);
                        var8 = var7.intl;
                        var7 = var8.string;
                        var6 = var10[var6];
                        var6 = var9.bind(var1)(var6);
                        var6 = var6.t;
                        var6 = var6.UjTvrz;
                        var6 = var7.bind(var8)(var6);
                        var4['message'] = var6;
                        var4 = var5.bind(var1)(var4);
                        var2 = _closure3_slot1;
                        var2 = var2.bind(var1)(var3);
                        return var1;
                    };
                    var5 = var5.bind(var6)(var3, var4);
                    var4 = function onAccessibilityExpand() {
                        var4 = _closure3_slot0;
                        var1 = _closure3_slot3;
                        var3 = !var1;
                        var1 = undefined;
                        var2 = 'accessibility_expand';
                        var2 = var4.bind(var1)(var3, var2);
                        return var1;
                    };
                    var _closure3_slot5 = var4;
                    var6 = arg1;
                    var3 = undefined;
                    if(!var6) { _fun0016_ip = 61; continue _fun0016 }
case 62:
                    var6 = {};
                    var7 = 'expand_toggle';
                    var6['name'] = var7;
                    var9 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var1 = 21;
                    var7 = var11[var1];
                    var7 = var9.bind(var10)(var7);
                    var8 = var7.intl;
                    var7 = var8.string;
                    var1 = var11[var1];
                    var1 = var9.bind(var10)(var1);
                    var1 = var1.t;
                    var1 = var1.PbxI/x;
                    var1 = var7.bind(var8)(var1);
                    var6['label'] = var1;
                    var1 = new Array(1);
                    var1[0] = var6;
                    var3 = var1;
case 61:
                    var1 = {};
                    var1['onReactionPress'] = var5;
                    var1['onAccessibilityExpand'] = var4;
                    var1['accessibilityActions'] = var3;
                    var2 = function onAccessibilityAction(arg1) {
                        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                            var1 = arg1;
                            var1 = var1.nativeEvent;
                            var2 = var1.actionName;
                            var1 = 'expand_toggle';
                            if(!(var1 === var2)) { _fun0017_ip = 63; continue _fun0017 }
case 64:
                            var2 = _closure3_slot5;
                            var1 = undefined;
                            var1 = var2.bind(var1)();
case 63:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var1['onAccessibilityAction'] = var2;
                    return var1;
                }
            };
            var1 = var1.bind(var4)(var16);
            var3 = var1.onReactionPress;
            _closure2_slot11 = var3;
            var5 = var1.onAccessibilityAction;
            var8 = var1.accessibilityActions;
            var15 = var1.onAccessibilityExpand;
            var1 = 23;
            var1 = var33[var1];
            var3 = var32.bind(var4)(var1);
            var1 = var3.useIsScreenReaderEnabled;
            var18 = var1.bind(var3)();
            var12 = _closure1_slot3;
            var9 = var12.useEffect;
            var1 = var19.nick;
            var3 = new Array(3);
            var3[0] = var1;
            var1 = var30.id;
            var3[1] = var1;
            var1 = var25.content;
            var3[2] = var1;
            var1 = function() {
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 21;
                var4 = var5[var2];
                var1 = undefined;
                var4 = var3.bind(var1)(var4);
                var7 = var4.intl;
                var6 = var7.formatToPlainString;
                var2 = var5[var2];
                var2 = var3.bind(var1)(var2);
                var2 = var2.t;
                var4 = var2.Hjp1LH;
                var2 = {};
                var10 = _closure2_slot5;
                var10 = var10.nick;
                var2['userName'] = var10;
                var10 = _closure1_slot1;
                var9 = 24;
                var9 = var5[var9];
                var12 = var10.bind(var1)(var9);
                var11 = var12.unparse;
                var9 = _closure2_slot1;
                var10 = var9.content;
                var8 = _closure2_slot2;
                var9 = var8.id;
                var8 = true;
                var8 = var11.bind(var12)(var10, var9, var8);
                var2['message'] = var8;
                var4 = var6.bind(var7)(var4, var2);
                var2 = 25;
                var2 = var5[var2];
                var2 = var3.bind(var1)(var2);
                var3 = var2.AccessibilityAnnouncer;
                var2 = var3.announce;
                var2 = var2.bind(var3)(var4);
                return var1;
            };
            var1 = var9.bind(var12)(var1, var3);
            var12 = _closure1_slot3;
            var9 = var12.useCallback;
            var1 = var30.id;
            var3 = new Array(2);
            var3[0] = var1;
            var1 = var25.id;
            var3[1] = var1;
            var1 = function() {
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 26;
                var3 = var4[var1];
                var1 = undefined;
                var5 = var5.bind(var1)(var3);
                var3 = var5.popAll;
                var3 = var3.bind(var5)();
                var3 = _closure1_slot0;
                var2 = 27;
                var2 = var4[var2];
                var6 = var3.bind(var1)(var2);
                var5 = var6.transitionToMessage;
                var3 = _closure2_slot2;
                var4 = var3.id;
                var2 = _closure2_slot1;
                var3 = var2.id;
                var2 = {};
                var7 = true;
                var2['navigationReplace'] = var7;
                var2 = var5.bind(var6)(var4, var3, var2);
                return var1;
            };
            var13 = var9.bind(var12)(var1, var3);
            var12 = _closure1_slot3;
            var9 = var12.useCallback;
            var1 = var30.id;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                var4 = _closure1_slot1;
                var1 = _closure1_slot2;
                var3 = 26;
                var3 = var1[var3];
                var6 = undefined;
                var5 = var4.bind(var6)(var3);
                var4 = var5.pushLazy;
                var3 = _closure1_slot0;
                var2 = 29;
                var2 = var1[var2];
                var3 = var3.bind(var6)(var2);
                var2 = 28;
                var2 = var1[var2];
                var1 = var1.paths;
                var3 = var3.bind(var6)(var2, var1);
                var2 = {};
                var1 = _closure2_slot2;
                var1 = var1.id;
                var2['channelId'] = var1;
                var1 = 'in-app-notification-settings-modal';
                var1 = var4.bind(var5)(var3, var2, var1);
                return var1;
            };
            var12 = var9.bind(var12)(var1, var3);
            var1 = 13;
            var1 = var33[var1];
            var3 = var32.bind(var4)(var1);
            var1 = var3.useHasPreviewableMedia;
            var34 = var1.bind(var3)(var25);
            _closure2_slot12 = var34;
            var1 = 9;
            var3 = var33[var1];
            var17 = var32.bind(var4)(var3);
            var9 = var17.useSharedValue;
            var3 = _closure1_slot7;
            var23 = var9.bind(var17)(var3);
            var3 = var33[var1];
            var17 = var32.bind(var4)(var3);
            var9 = var17.useDerivedValue;
            var3 = function Z() {
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                    var1 = _closure2_slot10;
                    if(var1) { _fun0018_ip = 65; continue _fun0018 }
case 13:
                    var1 = 0;
                    return var1;
case 65:
                    var3 = _closure2_slot7;
                    var1 = var3.get;
                    var1 = var1.bind(var3)();
                    if(var1) { _fun0018_ip = 66; continue _fun0018 }
case 67:
                    var1 = global;
                    var5 = var1.Math;
                    var4 = var5.max;
                    var3 = _closure2_slot8;
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
case 66:
                    var1 = 1;
                    return var1;
                }
            };
            var20 = {};
            var20['isExpandableNotification'] = var16;
            var20['expandedSV'] = var26;
            var20['notificationGestureY'] = var28;
            var21 = 20;
            var20['ACCESSORY_EXIT_THRESHOLD'] = var21;
            var3['__closure'] = var20;
            var20 = 14186503513745.0;
            var3['__workletHash'] = var20;
            var20 = _closure1_slot29;
            var3['__initData'] = var20;
            var24 = var9.bind(var17)(var3);
            _closure2_slot13 = var24;
            var3 = var33[var1];
            var17 = var32.bind(var4)(var3);
            var9 = var17.useDerivedValue;
            var3 = function j() {
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 10;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
                var2 = var2.PREVIEW_SIZE;
                var1 = _closure1_slot12;
                var2 = var2 + var1;
                var3 = _closure2_slot13;
                var1 = var3.get;
                var3 = var1.bind(var3)();
                var1 = 1;
                var1 = var1 - var3;
                var1 = var2 * var1;
                return var1;
            };
            var20 = {};
            var31 = 10;
            var21 = var33[var31];
            var21 = var32.bind(var4)(var21);
            var21 = var21.PREVIEW_SIZE;
            var20['PREVIEW_SIZE'] = var21;
            var21 = _closure1_slot12;
            var20['ACCESSORY_LEFT_GAP'] = var21;
            var20['accessoryExitProgressSV'] = var24;
            var3['__closure'] = var20;
            var20 = 617547756523.0;
            var3['__workletHash'] = var20;
            var20 = _closure1_slot30;
            var3['__initData'] = var20;
            var20 = var9.bind(var17)(var3);
            _closure2_slot14 = var20;
            var3 = var33[var1];
            var17 = var32.bind(var4)(var3);
            var9 = var17.useAnimatedStyle;
            var3 = function B() {
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                    var1 = _closure2_slot10;
                    if(!var1) { _fun0019_ip = 68; continue _fun0019 }
case 13:
                    var1 = _closure2_slot12;
                    if(var1) { _fun0019_ip = 69; continue _fun0019 }
case 68:
                    var1 = {};
                    _fun0019_ip = 70; continue _fun0019;
case 69:
                    var2 = {};
                    var4 = _closure2_slot14;
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
case 70:
                    return var1;
                }
            };
            var21 = {};
            var21['isExpandableNotification'] = var16;
            var21['hasPreviewableMedia'] = var34;
            var21['accessoryWidthSV'] = var20;
            var31 = var33[var31];
            var31 = var32.bind(var4)(var31);
            var31 = var31.PREVIEW_SIZE;
            var21['PREVIEW_SIZE'] = var31;
            var3['__closure'] = var21;
            var21 = 14167046215484.0;
            var3['__workletHash'] = var21;
            var21 = _closure1_slot31;
            var3['__initData'] = var21;
            var21 = var9.bind(var17)(var3);
            var17 = _closure1_slot3;
            var9 = var17.useMemo;
            var3 = new Array(6);
            var3[0] = var30;
            var3[1] = var29;
            var3[2] = var27;
            var3[3] = var19;
            var3[4] = var14;
            var3[5] = var2;
            var2 = function() {
                var1 = {};
                var2 = 'message';
                var1['type'] = var2;
                var3 = _closure2_slot2;
                var1['channel'] = var3;
                var3 = _closure2_slot3;
                var1['parentChannel'] = var3;
                var3 = _closure2_slot4;
                var1['guild'] = var3;
                var3 = _closure2_slot5;
                var1['author'] = var3;
                var3 = _closure2_slot6;
                var1['expanded'] = var3;
                var2 = _closure2_slot9;
                var1['onDismiss'] = var2;
                return var1;
            };
            var17 = var9.bind(var17)(var2, var3);
            var9 = _closure1_slot10;
            var3 = _closure1_slot19;
            var2 = {};
            var2['message'] = var25;
            var27 = var9.bind(var4)(var3, var2);
            var19 = var27;
            if(!var16) { _fun0014_ip = 71; continue _fun0014 }
case 72:
            var9 = _closure1_slot10;
            var3 = _closure1_slot28;
            var2 = {};
            var2['message'] = var25;
            var2['expandedSV'] = var26;
            var2['notificationGestureY'] = var28;
            var2['initialPreviewContent'] = var27;
            var2['initialPreviewHeight'] = var23;
            var2['accessoryWidthSV'] = var20;
            var19 = var9.bind(var4)(var3, var2);
case 71:
            var23 = _closure1_slot0;
            var20 = _closure1_slot2;
            var1 = var20[var1];
            var3 = var23.bind(var4)(var1);
            var2 = var3.useAnimatedStyle;
            var1 = function z() {
                _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                    var1 = {};
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var8 = 30;
                    var3 = var3[var8];
                    var7 = undefined;
                    var10 = var4.bind(var7)(var3);
                    var9 = var10.withTiming;
                    var4 = _closure2_slot7;
                    var3 = var4.get;
                    var3 = var3.bind(var4)();
                    var4 = 0;
                    if(!var3) { _fun0020_ip = 36; continue _fun0020 }
case 11:
                    var4 = 1;
case 36:
                    var3 = _closure1_slot6;
                    var3 = var9.bind(var10)(var4, var3);
                    var1['opacity'] = var3;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var3 = var3[var8];
                    var4 = var4.bind(var7)(var3);
                    var3 = var4.withTiming;
                    var7 = _closure2_slot7;
                    var6 = var7.get;
                    var6 = var6.bind(var7)();
                    var5 = 0;
                    if(!var6) { _fun0020_ip = 73; continue _fun0020 }
case 74:
                    var5 = 60;
case 73:
                    var2 = _closure1_slot6;
                    var2 = var3.bind(var4)(var5, var2);
                    var1['maxHeight'] = var2;
                    return var1;
                }
            };
            var9 = {};
            var27 = 30;
            var27 = var20[var27];
            var27 = var23.bind(var4)(var27);
            var27 = var27.withTiming;
            var9['withTiming'] = var27;
            var9['expandedSV'] = var26;
            var26 = _closure1_slot6;
            var9['DEFAULT_ANIMATION_TIMING'] = var26;
            var1['__closure'] = var9;
            var9 = 6351326781764.0;
            var1['__workletHash'] = var9;
            var9 = _closure1_slot32;
            var1['__initData'] = var9;
            var9 = var2.bind(var3)(var1);
            var3 = _closure1_slot10;
            var1 = 31;
            var1 = var20[var1];
            var1 = var23.bind(var4)(var1);
            var2 = var1.NotificationPressable;
            var1 = {};
            var29 = 16;
            var20 = var20[var29];
            var20 = var23.bind(var4)(var20);
            var26 = var20.Avatar;
            var23 = {};
            var20 = var25.author;
            var23['user'] = var20;
            var28 = var11.guild;
            var20 = null;
            var30 = var20 == var28;
            var27 = undefined;
            if(var30) { _fun0014_ip = 75; continue _fun0014 }
case 76:
            var27 = var28.id;
case 75:
            var23['guildId'] = var27;
            var28 = _closure1_slot0;
            var27 = _closure1_slot2;
            var27 = var27[var29];
            var27 = var28.bind(var4)(var27);
            var27 = var27.AvatarSizes;
            var27 = var27.NORMAL;
            var23['size'] = var27;
            var23 = var3.bind(var4)(var26, var23);
            var1['icon'] = var23;
            var1['accessoryLabelNode'] = var22;
            var1['bodyStyle'] = var21;
            if(!var16) { _fun0014_ip = 77; continue _fun0014 }
case 78:
            var20 = null;
            if(var14) { _fun0014_ip = 79; continue _fun0014 }
case 77:
            var23 = _closure1_slot10;
            var22 = _closure1_slot18;
            var21 = {};
            var21['message'] = var25;
            var21['isExpandableNotification'] = var16;
            var21['accessoryExitProgressSV'] = var24;
            var20 = var23.bind(var4)(var22, var21);
case 79:
            var1['rightAccessory'] = var20;
            var1['children'] = var19;
            var1['header'] = var17;
            if(!var16) { _fun0014_ip = 80; continue _fun0014 }
case 81:
            var17 = !var14;
            if(var17) { _fun0014_ip = 82; continue _fun0014 }
case 83:
            var17 = var18;
case 82:
            var16 = var17;
case 80:
            var1['showDragHandle'] = var16;
            var1['onAccessibilityExpand'] = var15;
            var1['expandedContentVisible'] = var14;
            var1['notification'] = var11;
            var1['onPress'] = var13;
            var1['onSettingsPress'] = var12;
            var1['accessibilityActions'] = var8;
            var1['onAccessibilityAction'] = var5;
            var5 = undefined;
            if(!var7) { _fun0014_ip = 84; continue _fun0014 }
case 85:
            var8 = _closure1_slot10;
            var7 = _closure1_slot0;
            var12 = _closure1_slot2;
            var6 = 32;
            var6 = var12[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.MessageNotificationReactBar;
            var6 = {};
            var6['notification'] = var11;
            var10 = function onReactionPress(arg1, arg2) {
                var5 = _closure2_slot11;
                var4 = _closure2_slot0;
                var3 = undefined;
                var2 = arg1;
                var1 = arg2;
                var1 = var5.bind(var3)(var4, var2, var1);
                return var1;
            };
            var6['onReactionPress'] = var10;
            var6['animationStyle'] = var9;
            var5 = var8.bind(var4)(var7, var6);
case 84:
            var1['expandableContent'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 33;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/in_app_notifications/native/MessageNotification.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();