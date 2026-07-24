// app/modules/in_app_notifications/native/MessageNotification.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
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
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var4);
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
    var4 = var8.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var9 = var4.DEFAULT_ANIMATION_TIMING;
    var _closure1_slot6 = var9;
    var9 = var4.IN_APP_NOTIFICATION_MAX_HEIGHT;
    var _closure1_slot7 = var9;
    var9 = var4.NOTIFICATION_PREVIEW_LINE_CLAMP;
    var _closure1_slot8 = var9;
    var4 = var4.RIGHT_ACCESSORY_LEFT_MARGIN;
    var _closure1_slot9 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.MessageEmbedTypes;
    var _closure1_slot10 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var9 = var4.jsx;
    var _closure1_slot11 = var9;
    var4 = var4.jsxs;
    var _closure1_slot12 = var4;
    var4 = 6;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var4 = var9.isAndroid;
    var4 = var4.bind(var9)();
    var _closure1_slot13 = var4;
    var4 = 7;
    var9 = var6[var4];
    var9 = var8.bind(var1)(var9);
    var9 = var9.space;
    var9 = var9.PX_12;
    var _closure1_slot14 = var9;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var4 = var4.space;
    var4 = var4.PX_8;
    var _closure1_slot15 = var4;
    var4 = 8;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {'paddingRight': 4, 'paddingTop': 0};
    var4['newContainerRoleDot'] = var10;
    var10 = {'position': 'absolute', 'top': 0, 'left': 0, 'right': 0, 'overflow': 'hidden'};
    var4['initialPreviewOverlay'] = var10;
    var10 = {'position': 'absolute', 'top': 0, 'left': 0, 'right': 0};
    var4['expandedPreviewOverlay'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot16 = var4;
    var8 = var7.memo;
    var4 = function(arg1) {
        var1 = arg1;
        var6 = var1.message;
        var4 = _closure1_slot11;
        var2 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 9;
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
    var _closure1_slot17 = var4;
    var4 = {};
    var8 = 'function MessageNotificationTsx1(){const{contentHeight,EXPANDED_MAX_HEIGHT,TRUNCATED_MESSAGE_HEIGHT_OFFSET,EXPANDED_SHORT_PREVIEW_PADDING}=this.__closure;const isGradientShown=contentHeight.get()>=EXPANDED_MAX_HEIGHT-TRUNCATED_MESSAGE_HEIGHT_OFFSET;const isShortPreview=contentHeight.get()>0&&!isGradientShown;return{paddingBottom:isShortPreview?EXPANDED_SHORT_PREVIEW_PADDING:0};}';
    var4['code'] = var8;
    var _closure1_slot18 = var4;
    var4 = {};
    var8 = 'function MessageNotificationTsx2(){const{IS_ANDROID,hasPreviewableMedia,hasTextContent,hasEmbedMedia,fadeProgress,ACCESSORY_EXIT_THRESHOLD}=this.__closure;if(IS_ANDROID&&hasPreviewableMedia&&hasTextContent&&!hasEmbedMedia){return{opacity:fadeProgress.get()};}if(!hasTextContent||hasEmbedMedia){return{opacity:fadeProgress.get(),transform:[{translateY:(1-fadeProgress.get())*ACCESSORY_EXIT_THRESHOLD}]};}return{opacity:1};}';
    var4['code'] = var8;
    var _closure1_slot19 = var4;
    var8 = var7.memo;
    var4 = function(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var14 = var2.message;
            var _closure2_slot0 = var14;
            var1 = var2.expandedPreviewHeight;
            var20 = var2.fadeProgress;
            var _closure2_slot1 = var20;
            var2 = _closure1_slot16;
            var4 = undefined;
            var6 = var2.bind(var4)();
            var2 = _closure1_slot1;
            var16 = _closure1_slot2;
            var5 = 10;
            var5 = var16[var5];
            var5 = var2.bind(var4)(var5);
            var5 = var5.bind(var4)();
            var10 = var5.gradientColors;
            var11 = var5.gradientStyles;
            var18 = _closure1_slot0;
            var5 = 11;
            var5 = var16[var5];
            var12 = var18.bind(var4)(var5);
            var9 = var12.useStateFromStores;
            var5 = _closure1_slot5;
            var7 = new Array(1);
            var7[0] = var5;
            var5 = function() {
                var1 = _closure1_slot5;
                var1 = var1.useReducedMotion;
                return var1;
            };
            var12 = var9.bind(var12)(var7, var5);
            var5 = 12;
            var5 = var16[var5];
            var7 = var18.bind(var4)(var5);
            var5 = var7.useHasPreviewableMedia;
            var23 = var5.bind(var7)(var14);
            var _closure2_slot2 = var23;
            var13 = _closure1_slot3;
            var9 = var13.useMemo;
            var5 = var14.embeds;
            var7 = new Array(1);
            var7[0] = var5;
            var5 = function() {
                var1 = _closure2_slot0;
                var3 = var1.embeds;
                var2 = var3.some;
                var1 = function(arg1) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var2 = arg1;
                        var1 = var2.image;
                        var4 = null;
                        var1 = var4 != var1;
                        if(var1) { _fun0003_ip = 4; continue _fun0003 }
case 5:
                        var3 = var2.thumbnail;
                        var1 = var4 != var3;
case 4:
                        if(var1) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                        var3 = var2.type;
                        var2 = _closure1_slot10;
                        var2 = var2.GIFV;
                        var1 = var3 === var2;
case 6:
                        return var1;
                    }
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var21 = var9.bind(var13)(var5, var7);
            var _closure2_slot3 = var21;
            var13 = _closure1_slot3;
            var9 = var13.useMemo;
            var7 = new Array(3);
            var7[0] = var23;
            var5 = var14.poll;
            var7[1] = var5;
            var7[2] = var21;
            var5 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = _closure2_slot2;
                    if(var1) { _fun0004_ip = 3; continue _fun0004 }
case 8:
                    var3 = _closure2_slot0;
                    var4 = var3.poll;
                    var3 = null;
                    var1 = var3 != var4;
case 3:
                    if(var1) { _fun0004_ip = 9; continue _fun0004 }
case 10:
                    var1 = _closure2_slot3;
case 9:
                    return var1;
                }
            };
            var15 = var9.bind(var13)(var5, var7);
            var5 = var14.content;
            var5 = var5.length;
            var19 = 0;
            var22 = var5 > var19;
            var _closure2_slot4 = var22;
            var5 = 13;
            var5 = var16[var5];
            var7 = var2.bind(var4)(var5);
            var5 = {};
            var9 = true;
            var5['ignoreKeyboard'] = var9;
            var5 = var7.bind(var4)(var5);
            var7 = var5.height;
            var5 = 0.24;
            var13 = var5 * var7;
            var _closure2_slot5 = var13;
            var7 = _closure1_slot31;
            var5 = var7.bind(var4)(var1);
            var1 = 14;
            var9 = var16[var1];
            var17 = var18.bind(var4)(var9);
            var9 = var17.useSharedValue;
            var25 = var9.bind(var17)(var19);
            var _closure2_slot6 = var25;
            var9 = var7.bind(var4)(var25);
            var7 = var16[var1];
            var19 = var18.bind(var4)(var7);
            var17 = var19.useAnimatedStyle;
            var7 = function u() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
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
                    if(!var6) { _fun0005_ip = 11; continue _fun0005 }
case 12:
                    var2 = 0;
                    if(var4) { _fun0005_ip = 11; continue _fun0005 }
case 13:
                    var2 = _closure1_slot14;
case 11:
                    var1['paddingBottom'] = var2;
                    return var1;
                }
            };
            var24 = {};
            var24['contentHeight'] = var25;
            var24['EXPANDED_MAX_HEIGHT'] = var13;
            var25 = _closure1_slot15;
            var24['TRUNCATED_MESSAGE_HEIGHT_OFFSET'] = var25;
            var25 = _closure1_slot14;
            var24['EXPANDED_SHORT_PREVIEW_PADDING'] = var25;
            var7['__closure'] = var24;
            var24 = 4300216170219.0;
            var7['__workletHash'] = var24;
            var24 = _closure1_slot18;
            var7['__initData'] = var24;
            var7 = var17.bind(var19)(var7);
            var17 = var16[var1];
            var18 = var18.bind(var4)(var17);
            var17 = var18.useAnimatedStyle;
            var3 = function h() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var1 = _closure1_slot13;
                    if(!var1) { _fun0006_ip = 14; continue _fun0006 }
case 8:
                    var1 = _closure2_slot2;
                    if(!var1) { _fun0006_ip = 14; continue _fun0006 }
case 15:
                    var1 = _closure2_slot4;
                    if(!var1) { _fun0006_ip = 14; continue _fun0006 }
case 16:
                    var1 = _closure2_slot3;
                    if(var1) { _fun0006_ip = 14; continue _fun0006 }
case 17:
                    var1 = {};
                    var3 = _closure2_slot1;
                    var2 = var3.get;
                    var2 = var2.bind(var3)();
                    var1['opacity'] = var2;
                    _fun0006_ip = 18; continue _fun0006;
case 14:
                    var2 = _closure2_slot4;
                    if(!var2) { _fun0006_ip = 19; continue _fun0006 }
case 20:
                    var2 = _closure2_slot3;
                    if(var2) { _fun0006_ip = 19; continue _fun0006 }
case 21:
                    var2 = {};
                    var3 = 1;
                    var2['opacity'] = var3;
                    _fun0006_ip = 22; continue _fun0006;
case 19:
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
case 22:
                    var1 = var2;
case 18:
                    return var1;
                }
            };
            var19 = {};
            var24 = _closure1_slot13;
            var19['IS_ANDROID'] = var24;
            var19['hasPreviewableMedia'] = var23;
            var19['hasTextContent'] = var22;
            var19['hasEmbedMedia'] = var21;
            var19['fadeProgress'] = var20;
            var20 = 20;
            var19['ACCESSORY_EXIT_THRESHOLD'] = var20;
            var3['__closure'] = var19;
            var19 = 9879198032662.0;
            var3['__workletHash'] = var19;
            var19 = _closure1_slot19;
            var3['__initData'] = var19;
            var17 = var17.bind(var18)(var3);
            var3 = _closure1_slot11;
            var1 = var16[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.View;
            var1 = {};
            var16 = var6.expandedPreviewOverlay;
            var6 = new Array(3);
            var6[0] = var16;
            var16 = null;
            if(!var15) { _fun0002_ip = 23; continue _fun0002 }
case 24:
            var16 = var17;
case 23:
            var6[1] = var16;
            var6[2] = var7;
            var1['style'] = var6;
            var1['onLayout'] = var5;
            var7 = _closure1_slot11;
            var6 = _closure1_slot4;
            var5 = {};
            var5['onLayout'] = var9;
            var9 = _closure1_slot0;
            var16 = _closure1_slot2;
            var8 = 15;
            var8 = var16[var8];
            var8 = var9.bind(var4)(var8);
            var9 = var8.NativeChannelRowPreview;
            var8 = {};
            var8['message'] = var14;
            var14 = undefined;
            if(!var15) { _fun0002_ip = 25; continue _fun0002 }
case 26:
            var14 = 6;
case 25:
            var8['lineClamp'] = var14;
            var8['maxHeight'] = var13;
            var12 = !var12;
            var8['gifAutoPlay'] = var12;
            var8['gradientStyles'] = var11;
            var8['gradientColors'] = var10;
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
    var8 = 'function MessageNotificationTsx3(){const{shouldHandlePreviewableMediaExpand,fadeProgress,accessoryWidthSV}=this.__closure;return shouldHandlePreviewableMediaExpand?{opacity:Math.max(0,1-fadeProgress.get()*2),right:accessoryWidthSV.get()}:{opacity:Math.max(0,1-fadeProgress.get()*2)};}';
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
        var1 = _closure1_slot16;
        var4 = undefined;
        var6 = var1.bind(var4)();
        var1 = _closure1_slot31;
        var8 = var1.bind(var4)(var3);
        var9 = _closure1_slot0;
        var10 = _closure1_slot2;
        var1 = 14;
        var3 = var10[var1];
        var9 = var9.bind(var4)(var3);
        var3 = var9.useAnimatedStyle;
        var2 = function u() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var1 = _closure2_slot2;
                if(var1) { _fun0007_ip = 11; continue _fun0007 }
case 8:
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
                _fun0007_ip = 27; continue _fun0007;
case 11:
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
case 27:
                return var1;
            }
        };
        var11 = {};
        var11['shouldHandlePreviewableMediaExpand'] = var14;
        var11['fadeProgress'] = var13;
        var11['accessoryWidthSV'] = var12;
        var2['__closure'] = var11;
        var11 = 15466459240148.0;
        var2['__workletHash'] = var11;
        var11 = _closure1_slot21;
        var2['__initData'] = var11;
        var9 = var3.bind(var9)(var2);
        var3 = _closure1_slot11;
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
    var8 = 'function MessageNotificationTsx4(){const{expandedPreviewHeight,EXPANDED_MAX_HEIGHT,expandedSV,notificationGestureY,initialPreviewHeight}=this.__closure;const maxExpandedHeight=Math.min(expandedPreviewHeight.get(),EXPANDED_MAX_HEIGHT);if(expandedSV.get()){return maxExpandedHeight;}const dragDistance=Math.max(0,notificationGestureY.get());const maxHeight=Math.max(maxExpandedHeight,initialPreviewHeight.get());return Math.min(initialPreviewHeight.get()+dragDistance,maxHeight);}';
    var4['code'] = var8;
    var _closure1_slot23 = var4;
    var4 = {};
    var8 = 'function MessageNotificationTsx5(){const{expandedSV,expandedPreviewHeight,EXPANDED_MAX_HEIGHT,initialPreviewHeight,notificationGestureY,ACCESSORY_EXIT_THRESHOLD,currentHeight}=this.__closure;if(expandedSV.get()){return 1;}const maxExpandedHeight=Math.min(expandedPreviewHeight.get(),EXPANDED_MAX_HEIGHT);const heightDifference=maxExpandedHeight-initialPreviewHeight.get();const dragDistance=Math.max(0,notificationGestureY.get());if(heightDifference<=0){return Math.min(1,dragDistance/ACCESSORY_EXIT_THRESHOLD);}return Math.min(1,(currentHeight.get()-initialPreviewHeight.get())/heightDifference);}';
    var4['code'] = var8;
    var _closure1_slot24 = var4;
    var4 = {};
    var8 = "function MessageNotificationTsx6(){const{shouldHandlePreviewableMediaExpand,currentHeight,accessoryWidthSV}=this.__closure;return shouldHandlePreviewableMediaExpand?{overflow:'hidden',height:currentHeight.get(),marginRight:-accessoryWidthSV.get()}:{overflow:'hidden',height:currentHeight.get()};}";
    var4['code'] = var8;
    var _closure1_slot25 = var4;
    var8 = var7.memo;
    var4 = function(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
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
            var1 = 13;
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
            var7 = 14;
            var1 = var5[var7];
            var8 = var3.bind(var4)(var1);
            var1 = var8.useSharedValue;
            var14 = var1.bind(var8)(var19);
            var _closure2_slot5 = var14;
            var1 = 12;
            var1 = var5[var1];
            var3 = var3.bind(var4)(var1);
            var1 = var3.useHasPreviewableMedia;
            var1 = var1.bind(var3)(var15);
            var9 = _closure1_slot13;
            if(!var9) { _fun0008_ip = 28; continue _fun0008 }
case 29:
            var9 = var1;
case 28:
            _closure2_slot6 = var9;
            var5 = _closure1_slot0;
            var1 = _closure1_slot2;
            var3 = var1[var7];
            var12 = var5.bind(var4)(var3);
            var8 = var12.useDerivedValue;
            var3 = function u() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
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
                    if(var4) { _fun0009_ip = 30; continue _fun0009 }
case 14:
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
case 30:
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
            var16 = 10745028098653.0;
            var3['__workletHash'] = var16;
            var16 = _closure1_slot23;
            var3['__initData'] = var16;
            var16 = var8.bind(var12)(var3);
            _closure2_slot7 = var16;
            var3 = var1[var7];
            var12 = var5.bind(var4)(var3);
            var8 = var12.useDerivedValue;
            var3 = function h() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var2 = var3.get;
                    var2 = var2.bind(var3)();
                    if(var2) { _fun0010_ip = 31; continue _fun0010 }
case 32:
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
                    if(!(!(var4 <= var5))) { _fun0010_ip = 33; continue _fun0010 }
case 34:
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
                    _fun0010_ip = 35; continue _fun0010;
case 33:
                    var5 = var2.Math;
                    var4 = var5.min;
                    var2 = 20;
                    var3 = var3 / var2;
                    var2 = 1;
                    var1 = var4.bind(var5)(var2, var3);
case 35:
                    return var1;
case 31:
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
            var17 = 7693825745292.0;
            var3['__workletHash'] = var17;
            var17 = _closure1_slot24;
            var3['__initData'] = var17;
            var12 = var8.bind(var12)(var3);
            var3 = var1[var7];
            var5 = var5.bind(var4)(var3);
            var3 = var5.useAnimatedStyle;
            var2 = function _() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var1 = _closure2_slot6;
                    if(var1) { _fun0011_ip = 36; continue _fun0011 }
case 8:
                    var1 = {};
                    var2 = 'hidden';
                    var1['overflow'] = var2;
                    var4 = _closure2_slot7;
                    var2 = var4.get;
                    var2 = var2.bind(var4)();
                    var1['height'] = var2;
                    _fun0011_ip = 37; continue _fun0011;
case 36:
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
case 37:
                    return var1;
                }
            };
            var8 = {};
            var8['shouldHandlePreviewableMediaExpand'] = var9;
            var8['currentHeight'] = var16;
            var8['accessoryWidthSV'] = var10;
            var2['__closure'] = var8;
            var8 = 9399498954959.0;
            var2['__workletHash'] = var8;
            var8 = _closure1_slot25;
            var2['__initData'] = var8;
            var5 = var3.bind(var5)(var2);
            var3 = _closure1_slot12;
            var2 = _closure1_slot1;
            var1 = var1[var7];
            var1 = var2.bind(var4)(var1);
            var2 = var1.View;
            var1 = {};
            var1['style'] = var5;
            var8 = _closure1_slot11;
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
    var8 = 'function MessageNotificationTsx7(){const{isExpandableNotification,expandedSV,notificationGestureY,ACCESSORY_EXIT_THRESHOLD}=this.__closure;if(!isExpandableNotification){return 0;}if(expandedSV.get()){return 1;}const dragDistance=Math.max(0,notificationGestureY.get());return Math.min(1,dragDistance/ACCESSORY_EXIT_THRESHOLD);}';
    var4['code'] = var8;
    var _closure1_slot27 = var4;
    var4 = {};
    var8 = 'function MessageNotificationTsx8(){const{PREVIEW_SIZE,RIGHT_ACCESSORY_LEFT_MARGIN,accessoryExitProgressSV}=this.__closure;return(PREVIEW_SIZE+RIGHT_ACCESSORY_LEFT_MARGIN)*(1-accessoryExitProgressSV.get());}';
    var4['code'] = var8;
    var _closure1_slot28 = var4;
    var4 = {};
    var8 = 'function MessageNotificationTsx9(){const{isExpandableNotification,hasPreviewableMedia,accessoryWidthSV,PREVIEW_SIZE}=this.__closure;if(!isExpandableNotification||!hasPreviewableMedia){return{};}return{marginRight:accessoryWidthSV.get(),minHeight:PREVIEW_SIZE};}';
    var4['code'] = var8;
    var _closure1_slot29 = var4;
    var4 = {};
    var8 = 'function MessageNotificationTsx10(){const{withTiming,expandedSV,DEFAULT_ANIMATION_TIMING}=this.__closure;return{opacity:withTiming(expandedSV.get()?1:0,DEFAULT_ANIMATION_TIMING),maxHeight:withTiming(expandedSV.get()?60:0,DEFAULT_ANIMATION_TIMING)};}';
    var4['code'] = var8;
    var _closure1_slot30 = var4;
    var4 = var7.memo;
    var2 = function MessageNotification(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
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
            var24 = var11.message;
            var _closure2_slot1 = var24;
            var31 = var11.channel;
            var _closure2_slot2 = var31;
            var30 = var11.parentChannel;
            var _closure2_slot3 = var30;
            var28 = var11.guild;
            var _closure2_slot4 = var28;
            var2 = var24.content;
            var3 = var2.length;
            var2 = 0;
            var2 = var2 === var3;
            if(!var2) { _fun0012_ip = 38; continue _fun0012 }
case 39:
            var5 = var24.interaction;
            var3 = null;
            var2 = var3 !== var5;
case 38:
            if(!var2) { _fun0012_ip = 30; continue _fun0012 }
case 40:
            var3 = var24.interaction;
            var2 = var4 !== var3;
case 30:
            if(!var2) { _fun0012_ip = 41; continue _fun0012 }
case 42:
            var5 = var24.activityInstance;
            var3 = null;
            var2 = var3 !== var5;
case 41:
            if(!var2) { _fun0012_ip = 43; continue _fun0012 }
case 33:
            var3 = var24.activityInstance;
            var2 = var4 !== var3;
case 43:
            if(!var2) { _fun0012_ip = 44; continue _fun0012 }
case 45:
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
            var13 = var24.interaction;
            var8 = null;
            var14 = var8 == var13;
            var8 = undefined;
            if(var14) { _fun0012_ip = 46; continue _fun0012 }
case 47:
            var8 = var13.user;
case 46:
            var8 = var9.bind(var12)(var8, var31);
            var8 = var8.nick;
            var2['username'] = var8;
            var2 = var5.bind(var7)(var3, var2);
            var24['content'] = var2;
case 44:
            var33 = _closure1_slot0;
            var32 = _closure1_slot2;
            var2 = 22;
            var2 = var32[var2];
            var3 = var33.bind(var4)(var2);
            var2 = var3.useNullableMessageAuthor;
            var19 = var2.bind(var3)(var24);
            _closure2_slot5 = var19;
            var2 = {};
            var2['author'] = var19;
            var1 = var1.newContainerRoleDot;
            var2['containerStyles'] = var1;
            var1 = function useAccessoryLabelNode(arg1) {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    var1 = arg1;
                    var8 = var1.author;
                    var6 = var1.containerStyles;
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 11;
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
                    if(var3) { _fun0013_ip = 48; continue _fun0013 }
case 19:
                    var1 = var8.colorString;
case 48:
                    var3 = var7 != var1;
                    var9 = undefined;
                    if(!var3) { _fun0013_ip = 49; continue _fun0013 }
case 50:
                    var9 = var1;
case 49:
                    var3 = 'dot';
                    var1 = undefined;
                    if(!(var3 === var4)) { _fun0013_ip = 45; continue _fun0013 }
case 34:
                    var1 = undefined;
                    if(!(var1 !== var9)) { _fun0013_ip = 45; continue _fun0013 }
case 51:
                    var4 = _closure1_slot11;
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
                    if(var9) { _fun0013_ip = 52; continue _fun0013 }
case 53:
                    var7 = var8.colorStrings;
case 52:
                    var2['colors'] = var7;
                    var2['containerStyles'] = var6;
                    var1 = var4.bind(var5)(var3, var2);
case 45:
                    return var1;
                }
            };
            var22 = var1.bind(var4)(var2);
            var1 = 17;
            var1 = var32[var1];
            var2 = var33.bind(var4)(var1);
            var1 = var2.useInAppNotificationContext;
            var1 = var1.bind(var2)();
            var14 = var1.isExpanded;
            _closure2_slot6 = var14;
            var27 = var1.expandedSV;
            _closure2_slot7 = var27;
            var29 = var1.notificationGestureY;
            _closure2_slot8 = var29;
            var2 = var1.handleDismissNotification;
            _closure2_slot9 = var2;
            var16 = var1.isExpandableNotification;
            _closure2_slot10 = var16;
            var7 = var1.showReactionBar;
            var1 = function useExpandNotificationActions(arg1) {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    var3 = function onAccessibilityExpand() {
                        var4 = _closure3_slot0;
                        var1 = _closure3_slot3;
                        var3 = !var1;
                        var1 = undefined;
                        var2 = 'accessibility_expand';
                        var2 = var4.bind(var1)(var3, var2);
                        return var1;
                    };
                    var _closure3_slot5 = var3;
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 17;
                    var1 = var6[var1];
                    var9 = undefined;
                    var5 = var5.bind(var9)(var1);
                    var1 = var5.useInAppNotificationContext;
                    var1 = var1.bind(var5)();
                    var11 = var1.setExpanded;
                    var _closure3_slot0 = var11;
                    var10 = var1.setAutoDismissing;
                    var _closure3_slot1 = var10;
                    var12 = var1.setActionTaken;
                    var _closure3_slot2 = var12;
                    var5 = var1.isExpanded;
                    var _closure3_slot3 = var5;
                    var5 = var1.setConfirmation;
                    var _closure3_slot4 = var5;
                    var1 = {};
                    var8 = _closure1_slot3;
                    var7 = var8.useCallback;
                    var6 = new Array(4);
                    var6[0] = var12;
                    var6[1] = var11;
                    var6[2] = var10;
                    var6[3] = var5;
                    var5 = function(arg1, arg2, arg3) {
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
                    var5 = var7.bind(var8)(var5, var6);
                    var1['onReactionPress'] = var5;
                    var1['onAccessibilityExpand'] = var3;
                    var5 = arg1;
                    var3 = undefined;
                    if(!var5) { _fun0014_ip = 54; continue _fun0014 }
case 55:
                    var5 = {};
                    var6 = 'expand_toggle';
                    var5['name'] = var6;
                    var8 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var4 = 21;
                    var6 = var10[var4];
                    var6 = var8.bind(var9)(var6);
                    var7 = var6.intl;
                    var6 = var7.string;
                    var4 = var10[var4];
                    var4 = var8.bind(var9)(var4);
                    var4 = var4.t;
                    var4 = var4.PbxI/x;
                    var4 = var6.bind(var7)(var4);
                    var5['label'] = var4;
                    var4 = new Array(1);
                    var4[0] = var5;
                    var3 = var4;
case 54:
                    var1['accessibilityActions'] = var3;
                    var2 = function onAccessibilityAction(arg1) {
                        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                            var1 = arg1;
                            var1 = var1.nativeEvent;
                            var2 = var1.actionName;
                            var1 = 'expand_toggle';
                            if(!(var1 === var2)) { _fun0015_ip = 56; continue _fun0015 }
case 57:
                            var2 = _closure3_slot5;
                            var1 = undefined;
                            var1 = var2.bind(var1)();
case 56:
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
            var1 = var32[var1];
            var3 = var33.bind(var4)(var1);
            var1 = var3.useIsScreenReaderEnabled;
            var18 = var1.bind(var3)();
            var12 = _closure1_slot3;
            var9 = var12.useEffect;
            var1 = var19.nick;
            var3 = new Array(3);
            var3[0] = var1;
            var1 = var31.id;
            var3[1] = var1;
            var1 = var24.content;
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
            var1 = var31.id;
            var3 = new Array(2);
            var3[0] = var1;
            var1 = var24.id;
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
            var1 = var31.id;
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
            var1 = 12;
            var1 = var32[var1];
            var3 = var33.bind(var4)(var1);
            var1 = var3.useHasPreviewableMedia;
            var34 = var1.bind(var3)(var24);
            _closure2_slot12 = var34;
            var1 = 14;
            var3 = var32[var1];
            var17 = var33.bind(var4)(var3);
            var9 = var17.useSharedValue;
            var3 = _closure1_slot7;
            var23 = var9.bind(var17)(var3);
            var3 = var32[var1];
            var17 = var33.bind(var4)(var3);
            var9 = var17.useDerivedValue;
            var3 = function U() {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                    var1 = _closure2_slot10;
                    if(var1) { _fun0016_ip = 58; continue _fun0016 }
case 8:
                    var1 = 0;
                    return var1;
case 58:
                    var3 = _closure2_slot7;
                    var1 = var3.get;
                    var1 = var1.bind(var3)();
                    if(var1) { _fun0016_ip = 59; continue _fun0016 }
case 60:
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
case 59:
                    var1 = 1;
                    return var1;
                }
            };
            var20 = {};
            var20['isExpandableNotification'] = var16;
            var20['expandedSV'] = var27;
            var20['notificationGestureY'] = var29;
            var21 = 20;
            var20['ACCESSORY_EXIT_THRESHOLD'] = var21;
            var3['__closure'] = var20;
            var20 = 10189805207166.0;
            var3['__workletHash'] = var20;
            var20 = _closure1_slot27;
            var3['__initData'] = var20;
            var25 = var9.bind(var17)(var3);
            _closure2_slot13 = var25;
            var3 = var32[var1];
            var17 = var33.bind(var4)(var3);
            var9 = var17.useDerivedValue;
            var3 = function Z() {
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 30;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
                var2 = var2.PREVIEW_SIZE;
                var1 = _closure1_slot9;
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
            var26 = 30;
            var21 = var32[var26];
            var21 = var33.bind(var4)(var21);
            var21 = var21.PREVIEW_SIZE;
            var20['PREVIEW_SIZE'] = var21;
            var21 = _closure1_slot9;
            var20['RIGHT_ACCESSORY_LEFT_MARGIN'] = var21;
            var20['accessoryExitProgressSV'] = var25;
            var3['__closure'] = var20;
            var20 = 12027019053130.0;
            var3['__workletHash'] = var20;
            var20 = _closure1_slot28;
            var3['__initData'] = var20;
            var20 = var9.bind(var17)(var3);
            _closure2_slot14 = var20;
            var3 = var32[var1];
            var17 = var33.bind(var4)(var3);
            var9 = var17.useAnimatedStyle;
            var3 = function j() {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                    var1 = _closure2_slot10;
                    if(!var1) { _fun0017_ip = 61; continue _fun0017 }
case 8:
                    var1 = _closure2_slot12;
                    if(var1) { _fun0017_ip = 62; continue _fun0017 }
case 61:
                    var1 = {};
                    _fun0017_ip = 63; continue _fun0017;
case 62:
                    var2 = {};
                    var4 = _closure2_slot14;
                    var3 = var4.get;
                    var3 = var3.bind(var4)();
                    var2['marginRight'] = var3;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 30;
                    var4 = var4[var3];
                    var3 = undefined;
                    var3 = var5.bind(var3)(var4);
                    var3 = var3.PREVIEW_SIZE;
                    var2['minHeight'] = var3;
                    var1 = var2;
case 63:
                    return var1;
                }
            };
            var21 = {};
            var21['isExpandableNotification'] = var16;
            var21['hasPreviewableMedia'] = var34;
            var21['accessoryWidthSV'] = var20;
            var32 = var32[var26];
            var32 = var33.bind(var4)(var32);
            var32 = var32.PREVIEW_SIZE;
            var21['PREVIEW_SIZE'] = var32;
            var3['__closure'] = var21;
            var21 = 2118539495108.0;
            var3['__workletHash'] = var21;
            var21 = _closure1_slot29;
            var3['__initData'] = var21;
            var21 = var9.bind(var17)(var3);
            var17 = _closure1_slot3;
            var9 = var17.useMemo;
            var3 = new Array(6);
            var3[0] = var31;
            var3[1] = var30;
            var3[2] = var28;
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
            var9 = _closure1_slot11;
            var3 = _closure1_slot17;
            var2 = {};
            var2['message'] = var24;
            var28 = var9.bind(var4)(var3, var2);
            var19 = var28;
            if(!var16) { _fun0012_ip = 64; continue _fun0012 }
case 65:
            var9 = _closure1_slot11;
            var3 = _closure1_slot26;
            var2 = {};
            var2['message'] = var24;
            var2['expandedSV'] = var27;
            var2['notificationGestureY'] = var29;
            var2['initialPreviewContent'] = var28;
            var2['initialPreviewHeight'] = var23;
            var2['accessoryWidthSV'] = var20;
            var19 = var9.bind(var4)(var3, var2);
case 64:
            var23 = _closure1_slot0;
            var20 = _closure1_slot2;
            var1 = var20[var1];
            var3 = var23.bind(var4)(var1);
            var2 = var3.useAnimatedStyle;
            var1 = function z() {
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                    var1 = {};
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var8 = 31;
                    var3 = var3[var8];
                    var7 = undefined;
                    var10 = var4.bind(var7)(var3);
                    var9 = var10.withTiming;
                    var4 = _closure2_slot7;
                    var3 = var4.get;
                    var3 = var3.bind(var4)();
                    var4 = 0;
                    if(!var3) { _fun0018_ip = 66; continue _fun0018 }
case 6:
                    var4 = 1;
case 66:
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
                    if(!var6) { _fun0018_ip = 67; continue _fun0018 }
case 68:
                    var5 = 60;
case 67:
                    var2 = _closure1_slot6;
                    var2 = var3.bind(var4)(var5, var2);
                    var1['maxHeight'] = var2;
                    return var1;
                }
            };
            var9 = {};
            var28 = 31;
            var28 = var20[var28];
            var28 = var23.bind(var4)(var28);
            var28 = var28.withTiming;
            var9['withTiming'] = var28;
            var9['expandedSV'] = var27;
            var27 = _closure1_slot6;
            var9['DEFAULT_ANIMATION_TIMING'] = var27;
            var1['__closure'] = var9;
            var9 = 2035414692485.0;
            var1['__workletHash'] = var9;
            var9 = _closure1_slot30;
            var1['__initData'] = var9;
            var9 = var2.bind(var3)(var1);
            var3 = _closure1_slot11;
            var1 = 32;
            var1 = var20[var1];
            var1 = var23.bind(var4)(var1);
            var2 = var1.NotificationPressable;
            var1 = {};
            var30 = 16;
            var20 = var20[var30];
            var20 = var23.bind(var4)(var20);
            var27 = var20.Avatar;
            var23 = {};
            var20 = var24.author;
            var23['user'] = var20;
            var29 = var11.guild;
            var20 = null;
            var31 = var20 == var29;
            var28 = undefined;
            if(var31) { _fun0012_ip = 69; continue _fun0012 }
case 70:
            var28 = var29.id;
case 69:
            var23['guildId'] = var28;
            var29 = _closure1_slot0;
            var28 = _closure1_slot2;
            var28 = var28[var30];
            var28 = var29.bind(var4)(var28);
            var28 = var28.AvatarSizes;
            var28 = var28.NORMAL;
            var23['size'] = var28;
            var23 = var3.bind(var4)(var27, var23);
            var1['icon'] = var23;
            var1['accessoryLabelNode'] = var22;
            var1['bodyStyle'] = var21;
            if(!var16) { _fun0012_ip = 71; continue _fun0012 }
case 72:
            var20 = null;
            if(var14) { _fun0012_ip = 73; continue _fun0012 }
case 71:
            var23 = _closure1_slot11;
            var22 = _closure1_slot0;
            var21 = _closure1_slot2;
            var21 = var21[var26];
            var21 = var22.bind(var4)(var21);
            var22 = var21.MediaPreviewRightAccessory;
            var21 = {};
            var21['message'] = var24;
            var24 = undefined;
            if(!var16) { _fun0012_ip = 74; continue _fun0012 }
case 75:
            var24 = var25;
case 74:
            var21['accessoryExitProgressSV'] = var24;
            var20 = var23.bind(var4)(var22, var21);
case 73:
            var1['rightAccessory'] = var20;
            var1['children'] = var19;
            var1['header'] = var17;
            if(!var16) { _fun0012_ip = 76; continue _fun0012 }
case 77:
            var17 = !var14;
            if(var17) { _fun0012_ip = 78; continue _fun0012 }
case 79:
            var17 = var18;
case 78:
            var16 = var17;
case 76:
            var1['showDragHandle'] = var16;
            var1['onAccessibilityExpand'] = var15;
            var1['expandedContentVisible'] = var14;
            var1['notification'] = var11;
            var1['onPress'] = var13;
            var1['onSettingsPress'] = var12;
            var1['accessibilityActions'] = var8;
            var1['onAccessibilityAction'] = var5;
            var5 = undefined;
            if(!var7) { _fun0012_ip = 80; continue _fun0012 }
case 81:
            var8 = _closure1_slot11;
            var7 = _closure1_slot0;
            var12 = _closure1_slot2;
            var6 = 33;
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
case 80:
            var1['expandableContent'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 34;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/in_app_notifications/native/MessageNotification.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();