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
    var9 = var9.MessageEmbedTypes;
    var _closure1_slot7 = var9;
    var9 = 5;
    var9 = var6[var9];
    var9 = var5.bind(var1)(var9);
    var10 = var9.jsx;
    var _closure1_slot8 = var10;
    var9 = var9.jsxs;
    var _closure1_slot9 = var9;
    var4 = var4 * var8;
    var _closure1_slot10 = var4;
    var11 = 6;
    var4 = var6[var11];
    var4 = var12.bind(var1)(var4);
    var4 = var4.spacing;
    var13 = var4.PX_12;
    var _closure1_slot11 = var13;
    var4 = 7;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var4 = var8.isAndroid;
    var4 = var4.bind(var8)();
    var _closure1_slot12 = var4;
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
    var13 = var13.spacing;
    var13 = var13.PX_16;
    var10['right'] = var13;
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_16;
    var10['top'] = var11;
    var4['rightAccessoryAbsolute'] = var10;
    var10 = {'paddingRight': 4, 'paddingTop': 0};
    var4['newContainerRoleDot'] = var10;
    var10 = {'position': 'absolute', 'top': 0, 'left': 0, 'right': 0, 'overflow': 'hidden'};
    var4['initialPreviewOverlay'] = var10;
    var10 = {'position': 'absolute', 'top': 0, 'left': 0, 'right': 0, 'marginTop': 3};
    var4['expandedPreviewOverlay'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot13 = var4;
    var4 = {};
    var8 = 'function MessageNotificationTsx1(){const{notificationGestureY,accessoryExitProgressSV}=this.__closure;if(notificationGestureY==null){return{opacity:1,transform:[{scale:1}]};}const progress=accessoryExitProgressSV.get();return{opacity:1-progress,transform:[{scale:1-progress}]};}';
    var4['code'] = var8;
    var _closure1_slot14 = var4;
    var8 = var7.memo;
    var4 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var9 = var3.message;
            var2 = var3.redesignEnabled;
            var11 = var3.notificationGestureY;
            var _closure2_slot0 = var11;
            var10 = var3.accessoryExitProgressSV;
            var _closure2_slot1 = var10;
            var3 = _closure1_slot13;
            var5 = undefined;
            var7 = var3.bind(var5)();
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var12 = 9;
            var3 = var3[var12];
            var4 = var4.bind(var5)(var3);
            var3 = var4.useAnimatedStyle;
            var1 = function c() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
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
case 2:
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
            var8 = {};
            var8['notificationGestureY'] = var11;
            var8['accessoryExitProgressSV'] = var10;
            var1['__closure'] = var8;
            var8 = 4919466552494.0;
            var1['__workletHash'] = var8;
            var8 = _closure1_slot14;
            var1['__initData'] = var8;
            var8 = var3.bind(var4)(var1);
            var10 = null;
            var1 = null;
            if(!var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = _closure1_slot8;
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var2 = var2[var12];
            var2 = var3.bind(var5)(var2);
            var3 = var2.View;
            var2 = {};
            if(!(var10 == var11)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var10 = var7.rightAccessoryContainer;
            _fun0001_ip = 8; continue _fun0001;
case 6:
            var10 = var7.rightAccessoryAbsolute;
case 8:
            var7 = new Array(2);
            var7[0] = var10;
            var7[1] = var8;
            var2['style'] = var7;
            var8 = _closure1_slot8;
            var7 = _closure1_slot0;
            var10 = _closure1_slot2;
            var6 = 10;
            var6 = var10[var6];
            var6 = var7.bind(var5)(var6);
            var7 = var6.MediaPreviewRightAccessory;
            var6 = {};
            var6['message'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 4:
            return var1;
        }
    };
    var4 = var8.bind(var7)(var4);
    var _closure1_slot15 = var4;
    var8 = var7.memo;
    var4 = function(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var2 = var1.message;
            var3 = var1.redesignEnabled;
            var1 = {};
            var1['message'] = var2;
            var2 = 2;
            var1['lineClamp'] = var2;
            var4 = _closure1_slot6;
            var1['maxHeight'] = var4;
            var4 = _closure1_slot8;
            if(var3) { _fun0003_ip = 9; continue _fun0003 }
case 10:
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 11;
            var5 = var5[var3];
            var3 = undefined;
            var3 = var6.bind(var3)(var5);
            var3 = var3.NativeChannelRowPreview;
            _fun0003_ip = 11; continue _fun0003;
case 9:
            var6 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 12;
            var5 = var5[var2];
            var2 = undefined;
            var3 = var6.bind(var2)(var5);
case 11:
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
    var _closure1_slot16 = var4;
    var4 = {};
    var8 = 'function MessageNotificationTsx2(){const{IS_ANDROID,hasPreviewableMedia,hasTextContent,hasGifV,fadeProgress,ACCESSORY_EXIT_THRESHOLD}=this.__closure;if(IS_ANDROID&&hasPreviewableMedia&&hasTextContent&&!hasGifV){return{opacity:fadeProgress.get()};}if(hasPreviewableMedia&&(!hasTextContent||hasGifV)){return{opacity:fadeProgress.get(),transform:[{translateY:(1-fadeProgress.get())*ACCESSORY_EXIT_THRESHOLD}]};}return{opacity:1};}';
    var4['code'] = var8;
    var _closure1_slot17 = var4;
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
            var3 = _closure1_slot13;
            var4 = undefined;
            var6 = var3.bind(var4)();
            var10 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 13;
            var3 = var7[var3];
            var5 = var10.bind(var4)(var3);
            var3 = var5.useHasPreviewableMedia;
            var16 = var3.bind(var5)(var9);
            var _closure2_slot3 = var16;
            var12 = _closure1_slot3;
            var11 = var12.useMemo;
            var3 = var9.embeds;
            var5 = new Array(1);
            var5[0] = var3;
            var3 = function() {
                var1 = _closure2_slot0;
                var3 = var1.embeds;
                var2 = var3.some;
                var1 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.type;
                    var1 = _closure1_slot7;
                    var1 = var1.GIFV;
                    var1 = var2 === var1;
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var14 = var11.bind(var12)(var3, var5);
            var _closure2_slot4 = var14;
            var11 = var12.useMemo;
            var5 = new Array(2);
            var5[0] = var16;
            var3 = var9.embeds;
            var5[1] = var3;
            var3 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = _closure2_slot3;
                    if(var1) { _fun0005_ip = 12; continue _fun0005 }
case 13:
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
                            if(var1) { _fun0006_ip = 14; continue _fun0006 }
case 15:
                            var2 = var2.thumbnail;
                            var1 = var3 != var2;
case 14:
                            return var1;
                        }
                    };
                    var1 = var3.bind(var4)(var2);
case 12:
                    return var1;
                }
            };
            var11 = var11.bind(var12)(var3, var5);
            var3 = var9.content;
            var5 = var3.length;
            var3 = 0;
            var15 = var5 > var3;
            var _closure2_slot5 = var15;
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
                    if(!(var3 > var1)) { _fun0007_ip = 16; continue _fun0007 }
case 17:
                    var2 = _closure2_slot1;
                    var1 = var2.set;
                    var1 = var1.bind(var2)(var3);
case 16:
                    var1 = undefined;
                    return var1;
                }
            };
            var5 = var5.bind(var12)(var1, var3);
            var1 = 9;
            var3 = var7[var1];
            var10 = var10.bind(var4)(var3);
            var3 = var10.useAnimatedStyle;
            var2 = function l() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var1 = _closure1_slot12;
                    if(!var1) { _fun0008_ip = 18; continue _fun0008 }
case 13:
                    var1 = _closure2_slot3;
                    if(!var1) { _fun0008_ip = 18; continue _fun0008 }
case 19:
                    var1 = _closure2_slot5;
                    if(!var1) { _fun0008_ip = 18; continue _fun0008 }
case 20:
                    var1 = _closure2_slot4;
                    if(var1) { _fun0008_ip = 18; continue _fun0008 }
case 21:
                    var1 = {};
                    var3 = _closure2_slot2;
                    var2 = var3.get;
                    var2 = var2.bind(var3)();
                    var1['opacity'] = var2;
                    _fun0008_ip = 22; continue _fun0008;
case 18:
                    var2 = _closure2_slot3;
                    if(!var2) { _fun0008_ip = 23; continue _fun0008 }
case 24:
                    var2 = _closure2_slot5;
                    if(!var2) { _fun0008_ip = 25; continue _fun0008 }
case 26:
                    var2 = _closure2_slot4;
                    if(var2) { _fun0008_ip = 25; continue _fun0008 }
case 23:
                    var2 = {};
                    var3 = 1;
                    var2['opacity'] = var3;
                    _fun0008_ip = 27; continue _fun0008;
case 25:
                    var3 = {};
                    var6 = _closure2_slot2;
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
case 22:
                    return var1;
                }
            };
            var12 = {};
            var17 = _closure1_slot12;
            var12['IS_ANDROID'] = var17;
            var12['hasPreviewableMedia'] = var16;
            var12['hasTextContent'] = var15;
            var12['hasGifV'] = var14;
            var12['fadeProgress'] = var13;
            var13 = 20;
            var12['ACCESSORY_EXIT_THRESHOLD'] = var13;
            var2['__closure'] = var12;
            var12 = 11781718825976.0;
            var2['__workletHash'] = var12;
            var12 = _closure1_slot17;
            var2['__initData'] = var12;
            var10 = var3.bind(var10)(var2);
            var3 = _closure1_slot8;
            var2 = _closure1_slot1;
            var1 = var7[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.View;
            var1 = {};
            var7 = var6.expandedPreviewOverlay;
            var6 = new Array(2);
            var6[0] = var7;
            var7 = null;
            if(!var11) { _fun0004_ip = 28; continue _fun0004 }
case 29:
            var7 = var10;
case 28:
            var6[1] = var7;
            var1['style'] = var6;
            var1['onLayout'] = var5;
            var7 = _closure1_slot8;
            var6 = _closure1_slot0;
            var10 = _closure1_slot2;
            var5 = 11;
            var5 = var10[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.NativeChannelRowPreview;
            var5 = {};
            var5['message'] = var9;
            var9 = 8;
            var5['lineClamp'] = var9;
            var8 = _closure1_slot10;
            var5['maxHeight'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = var8.bind(var7)(var4);
    var _closure1_slot18 = var4;
    var4 = {};
    var8 = 'function MessageNotificationTsx3(){const{shouldHandlePreviewableMediaExpand,fadeProgress,accessoryWidthSV}=this.__closure;return shouldHandlePreviewableMediaExpand?{opacity:Math.max(0,1-fadeProgress.get()*2),right:accessoryWidthSV.get()}:{opacity:Math.max(0,1-fadeProgress.get()*2)};}';
    var4['code'] = var8;
    var _closure1_slot19 = var4;
    var8 = var7.memo;
    var4 = function(arg1) {
        var3 = arg1;
        var1 = var3.initialPreviewHeight;
        var _closure2_slot0 = var1;
        var13 = var3.fadeProgress;
        var _closure2_slot1 = var13;
        var7 = var3.initialPreviewContent;
        var12 = var3.accessoryWidthSV;
        var _closure2_slot2 = var12;
        var14 = var3.shouldHandlePreviewableMediaExpand;
        var _closure2_slot3 = var14;
        var3 = _closure1_slot13;
        var4 = undefined;
        var6 = var3.bind(var4)();
        var9 = _closure1_slot3;
        var8 = var9.useCallback;
        var3 = new Array(1);
        var3[0] = var1;
        var1 = function(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var1 = arg1;
                var1 = var1.nativeEvent;
                var1 = var1.layout;
                var3 = var1.height;
                var1 = 0;
                if(!(var3 > var1)) { _fun0009_ip = 16; continue _fun0009 }
case 17:
                var2 = _closure2_slot0;
                var1 = var2.set;
                var1 = var1.bind(var2)(var3);
case 16:
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
        var2 = function _() {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var1 = _closure2_slot3;
                if(var1) { _fun0010_ip = 30; continue _fun0010 }
case 13:
                var1 = {};
                var2 = global;
                var6 = var2.Math;
                var5 = var6.max;
                var4 = _closure2_slot1;
                var2 = var4.get;
                var4 = var2.bind(var4)();
                var2 = 2;
                var7 = var2 * var4;
                var4 = 0;
                var2 = 1;
                var2 = var2 - var7;
                var2 = var5.bind(var6)(var4, var2);
                var1['opacity'] = var2;
                _fun0010_ip = 31; continue _fun0010;
case 30:
                var2 = {};
                var4 = global;
                var7 = var4.Math;
                var6 = var7.max;
                var5 = _closure2_slot1;
                var4 = var5.get;
                var5 = var4.bind(var5)();
                var4 = 2;
                var8 = var4 * var5;
                var5 = 0;
                var4 = 1;
                var4 = var4 - var8;
                var4 = var6.bind(var7)(var5, var4);
                var2['opacity'] = var4;
                var4 = _closure2_slot2;
                var3 = var4.get;
                var3 = var3.bind(var4)();
                var2['right'] = var3;
                var1 = var2;
case 31:
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
        var11 = _closure1_slot19;
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
    var _closure1_slot20 = var4;
    var4 = {};
    var8 = 'function MessageNotificationTsx4(){const{expandedPreviewHeight,EXPANDED_MAX_HEIGHT,expandedSV,notificationGestureY,initialPreviewHeight}=this.__closure;const maxExpandedHeight=Math.min(expandedPreviewHeight.get(),EXPANDED_MAX_HEIGHT);if(expandedSV.get()){return maxExpandedHeight;}const dragDistance=Math.max(0,notificationGestureY.get());const maxHeight=Math.max(maxExpandedHeight,initialPreviewHeight.get());return Math.min(initialPreviewHeight.get()+dragDistance,maxHeight);}';
    var4['code'] = var8;
    var _closure1_slot21 = var4;
    var4 = {};
    var8 = 'function MessageNotificationTsx5(){const{expandedSV,expandedPreviewHeight,EXPANDED_MAX_HEIGHT,initialPreviewHeight,notificationGestureY,ACCESSORY_EXIT_THRESHOLD,currentHeight}=this.__closure;if(expandedSV.get()){return 1;}const maxExpandedHeight=Math.min(expandedPreviewHeight.get(),EXPANDED_MAX_HEIGHT);const heightDifference=maxExpandedHeight-initialPreviewHeight.get();const dragDistance=Math.max(0,notificationGestureY.get());if(heightDifference<=0){return Math.min(1,dragDistance/ACCESSORY_EXIT_THRESHOLD);}return Math.min(1,(currentHeight.get()-initialPreviewHeight.get())/heightDifference);}';
    var4['code'] = var8;
    var _closure1_slot22 = var4;
    var4 = {};
    var8 = "function MessageNotificationTsx6(){const{shouldHandlePreviewableMediaExpand,currentHeight,accessoryWidthSV}=this.__closure;return shouldHandlePreviewableMediaExpand?{overflow:'hidden',height:currentHeight.get(),marginRight:-accessoryWidthSV.get()}:{overflow:'hidden',height:currentHeight.get()};}";
    var4['code'] = var8;
    var _closure1_slot23 = var4;
    var8 = var7.memo;
    var4 = function(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
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
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var7 = 9;
            var1 = var5[var7];
            var9 = var3.bind(var4)(var1);
            var8 = var9.useSharedValue;
            var1 = _closure1_slot10;
            var14 = var8.bind(var9)(var1);
            var _closure2_slot4 = var14;
            var1 = 13;
            var1 = var5[var1];
            var3 = var3.bind(var4)(var1);
            var1 = var3.useHasPreviewableMedia;
            var1 = var1.bind(var3)(var15);
            var9 = _closure1_slot12;
            if(!var9) { _fun0011_ip = 32; continue _fun0011 }
case 5:
            var9 = var1;
case 32:
            _closure2_slot5 = var9;
            var5 = _closure1_slot0;
            var1 = _closure1_slot2;
            var3 = var1[var7];
            var12 = var5.bind(var4)(var3);
            var8 = var12.useDerivedValue;
            var3 = function E() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var2 = global;
                    var6 = var2.Math;
                    var5 = var6.min;
                    var4 = _closure2_slot4;
                    var1 = var4.get;
                    var4 = var1.bind(var4)();
                    var1 = _closure1_slot10;
                    var1 = var5.bind(var6)(var4, var1);
                    var5 = _closure2_slot0;
                    var4 = var5.get;
                    var4 = var4.bind(var5)();
                    if(var4) { _fun0012_ip = 33; continue _fun0012 }
case 34:
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
case 33:
                    return var1;
                }
            };
            var16 = {};
            var16['expandedPreviewHeight'] = var14;
            var19 = _closure1_slot10;
            var16['EXPANDED_MAX_HEIGHT'] = var19;
            var16['expandedSV'] = var20;
            var16['notificationGestureY'] = var18;
            var16['initialPreviewHeight'] = var13;
            var3['__closure'] = var16;
            var16 = 10745028098653.0;
            var3['__workletHash'] = var16;
            var16 = _closure1_slot21;
            var3['__initData'] = var16;
            var16 = var8.bind(var12)(var3);
            _closure2_slot6 = var16;
            var3 = var1[var7];
            var12 = var5.bind(var4)(var3);
            var8 = var12.useDerivedValue;
            var3 = function S() {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var2 = var3.get;
                    var2 = var2.bind(var3)();
                    if(var2) { _fun0013_ip = 35; continue _fun0013 }
case 36:
                    var2 = global;
                    var6 = var2.Math;
                    var5 = var6.min;
                    var4 = _closure2_slot4;
                    var3 = var4.get;
                    var4 = var3.bind(var4)();
                    var3 = _closure1_slot10;
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
                    if(!(!(var4 <= var5))) { _fun0013_ip = 7; continue _fun0013 }
case 37:
                    var6 = var2.Math;
                    var5 = var6.min;
                    var8 = _closure2_slot6;
                    var7 = var8.get;
                    var7 = var7.bind(var8)();
                    var8 = _closure2_slot2;
                    var1 = var8.get;
                    var1 = var1.bind(var8)();
                    var1 = var7 - var1;
                    var4 = var1 / var4;
                    var1 = 1;
                    var1 = var5.bind(var6)(var1, var4);
                    _fun0013_ip = 38; continue _fun0013;
case 7:
                    var5 = var2.Math;
                    var4 = var5.min;
                    var2 = 20;
                    var3 = var3 / var2;
                    var2 = 1;
                    var1 = var4.bind(var5)(var2, var3);
case 38:
                    return var1;
case 35:
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
            var17 = _closure1_slot22;
            var3['__initData'] = var17;
            var12 = var8.bind(var12)(var3);
            var3 = var1[var7];
            var5 = var5.bind(var4)(var3);
            var3 = var5.useAnimatedStyle;
            var2 = function P() {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    var1 = _closure2_slot5;
                    if(var1) { _fun0014_ip = 12; continue _fun0014 }
case 13:
                    var1 = {};
                    var2 = 'hidden';
                    var1['overflow'] = var2;
                    var4 = _closure2_slot6;
                    var2 = var4.get;
                    var2 = var2.bind(var4)();
                    var1['height'] = var2;
                    _fun0014_ip = 39; continue _fun0014;
case 12:
                    var2 = {};
                    var4 = 'hidden';
                    var2['overflow'] = var4;
                    var5 = _closure2_slot6;
                    var4 = var5.get;
                    var4 = var4.bind(var5)();
                    var2['height'] = var4;
                    var4 = _closure2_slot3;
                    var3 = var4.get;
                    var3 = var3.bind(var4)();
                    var3 = -var3;
                    var2['marginRight'] = var3;
                    var1 = var2;
case 39:
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
            var8 = _closure1_slot23;
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
            var7 = _closure1_slot18;
            var5 = {};
            var5['message'] = var15;
            var5['expandedPreviewHeight'] = var14;
            var5['fadeProgress'] = var12;
            var7 = var8.bind(var4)(var7, var5);
            var5 = new Array(2);
            var5[0] = var7;
            var7 = _closure1_slot20;
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
    var _closure1_slot24 = var4;
    var4 = {};
    var8 = 'function MessageNotificationTsx7(){const{notificationGestureY,expandedSV,ACCESSORY_EXIT_THRESHOLD}=this.__closure;if(notificationGestureY==null){return 0;}if(expandedSV.get()){return 1;}const dragDistance=Math.max(0,notificationGestureY.get());return Math.min(1,dragDistance/ACCESSORY_EXIT_THRESHOLD);}';
    var4['code'] = var8;
    var _closure1_slot25 = var4;
    var4 = {};
    var8 = 'function MessageNotificationTsx8(){const{PREVIEW_SIZE,ACCESSORY_LEFT_GAP,accessoryExitProgressSV}=this.__closure;return(PREVIEW_SIZE+ACCESSORY_LEFT_GAP)*(1-accessoryExitProgressSV.get());}';
    var4['code'] = var8;
    var _closure1_slot26 = var4;
    var4 = {};
    var8 = 'function MessageNotificationTsx9(){const{notificationGestureY,hasPreviewableMedia,accessoryWidthSV,PREVIEW_SIZE}=this.__closure;if(notificationGestureY==null||!hasPreviewableMedia){return{};}return{marginRight:accessoryWidthSV.get(),minHeight:PREVIEW_SIZE};}';
    var4['code'] = var8;
    var _closure1_slot27 = var4;
    var4 = var7.memo;
    var2 = function MessageNotification(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var1 = arg1;
            var21 = var1.notification;
            var6 = var1.canExpand;
            var7 = var1.expandedContentVisible;
            var _closure2_slot0 = var7;
            var23 = var1.expandedSV;
            var _closure2_slot1 = var23;
            var16 = var1.notificationGestureY;
            var _closure2_slot2 = var16;
            var5 = var1.onAccessibilityExpand;
            var10 = var1.onDismiss;
            var _closure2_slot3 = var10;
            var4 = undefined;
            var _closure2_slot8 = var4;
            var _closure2_slot9 = var4;
            var _closure2_slot10 = var4;
            var _closure2_slot11 = var4;
            var _closure2_slot12 = var4;
            var _closure2_slot13 = var4;
            var _closure2_slot14 = var4;
            var1 = _closure1_slot13;
            var9 = var1.bind(var4)();
            var18 = var21.message;
            var28 = var21.channel;
            var _closure2_slot4 = var28;
            var27 = var21.parentChannel;
            var _closure2_slot5 = var27;
            var26 = var21.guild;
            var _closure2_slot6 = var26;
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var19 = 14;
            var1 = var8[var19];
            var11 = var3.bind(var4)(var1);
            var1 = var11.useNullableMessageAuthor;
            var25 = var1.bind(var11)(var18);
            var _closure2_slot7 = var25;
            var1 = 15;
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
            var8 = var11 == var25;
            var1 = undefined;
            if(var8) { _fun0015_ip = 40; continue _fun0015 }
case 41:
            var1 = var25.colorString;
case 40:
            var8 = var11 != var1;
            var13 = undefined;
            if(!var8) { _fun0015_ip = 42; continue _fun0015 }
case 43:
            var13 = var1;
case 42:
            var8 = 'username';
            var1 = undefined;
            if(!(var8 === var3)) { _fun0015_ip = 44; continue _fun0015 }
case 45:
            var1 = var13;
case 44:
            _closure2_slot8 = var1;
            var15 = _closure1_slot3;
            var14 = var15.useMemo;
            var8 = new Array(1);
            var8[0] = var1;
            var1 = function() {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                    var2 = _closure2_slot8;
                    var1 = null;
                    var2 = var1 != var2;
                    var1 = undefined;
                    if(!var2) { _fun0016_ip = 46; continue _fun0016 }
case 15:
                    var2 = {};
                    var3 = _closure2_slot8;
                    var2['color'] = var3;
                    var1 = var2;
case 46:
                    return var1;
                }
            };
            var22 = var14.bind(var15)(var1, var8);
            _closure2_slot9 = var22;
            var1 = 'dot';
            var14 = undefined;
            if(!(var1 === var3)) { _fun0015_ip = 47; continue _fun0015 }
case 48:
            var14 = undefined;
            if(!(var4 !== var13)) { _fun0015_ip = 47; continue _fun0015 }
case 49:
            var8 = _closure1_slot8;
            var3 = _closure1_slot0;
            var15 = _closure1_slot2;
            var1 = 16;
            var1 = var15[var1];
            var1 = var3.bind(var4)(var1);
            var3 = var1.RoleDot;
            var1 = {};
            var1['color'] = var13;
            var15 = var11 == var25;
            var13 = undefined;
            if(var15) { _fun0015_ip = 50; continue _fun0015 }
case 28:
            var13 = var25.colorStrings;
case 50:
            var1['colors'] = var13;
            var9 = var9.newContainerRoleDot;
            var1['containerStyles'] = var9;
            var14 = var8.bind(var4)(var3, var1);
case 47:
            var8 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 13;
            var3 = var3[var1];
            var8 = var8.bind(var4)(var3);
            var3 = var8.getNotificationTitle;
            var38 = var8;
            var37 = var28;
            var36 = var25;
            var35 = var27;
            var34 = var26;
            var24 = var38[var3](var37, var36, var35, var34, var33);
            _closure2_slot10 = var24;
            var3 = var18.content;
            var8 = var3.length;
            var3 = 0;
            var3 = var3 === var8;
            if(!var3) { _fun0015_ip = 51; continue _fun0015 }
case 52:
            var8 = var18.interaction;
            var3 = var11 !== var8;
case 51:
            if(!var3) { _fun0015_ip = 53; continue _fun0015 }
case 54:
            var8 = var18.interaction;
            var3 = var4 !== var8;
case 53:
            if(!var3) { _fun0015_ip = 55; continue _fun0015 }
case 56:
            var8 = var18.activityInstance;
            var3 = var11 !== var8;
case 55:
            if(!var3) { _fun0015_ip = 57; continue _fun0015 }
case 58:
            var8 = var18.activityInstance;
            var3 = var4 !== var8;
case 57:
            if(!var3) { _fun0015_ip = 59; continue _fun0015 }
case 60:
            var17 = _closure1_slot0;
            var15 = _closure1_slot2;
            var3 = 17;
            var8 = var15[var3];
            var8 = var17.bind(var4)(var8);
            var13 = var8.intl;
            var9 = var13.formatToPlainString;
            var3 = var15[var3];
            var3 = var17.bind(var4)(var3);
            var3 = var3.t;
            var8 = var3["7eikg1"];
            var3 = {};
            var15 = var15[var19];
            var20 = var17.bind(var4)(var15);
            var19 = var20.getUserAuthor;
            var15 = var18.interaction;
            var29 = var11 == var15;
            var17 = undefined;
            if(var29) { _fun0015_ip = 61; continue _fun0015 }
case 62:
            var17 = var15.user;
case 61:
            var15 = var21.channel;
            var15 = var19.bind(var20)(var17, var15);
            var15 = var15.nick;
            var3['username'] = var15;
            var3 = var9.bind(var13)(var8, var3);
            var18['content'] = var3;
case 59:
            var30 = _closure1_slot0;
            var31 = _closure1_slot2;
            var3 = 18;
            var3 = var31[var3];
            var9 = var30.bind(var4)(var3);
            var8 = var9.useInAppNotificationRedesign;
            var3 = 'MessageNotification';
            var3 = var8.bind(var9)(var3);
            var17 = var3.redesignEnabled;
            _closure2_slot11 = var17;
            var1 = var31[var1];
            var3 = var30.bind(var4)(var1);
            var1 = var3.useHasPreviewableMedia;
            var32 = var1.bind(var3)(var18);
            _closure2_slot12 = var32;
            var3 = 9;
            var1 = var31[var3];
            var9 = var30.bind(var4)(var1);
            var8 = var9.useSharedValue;
            var1 = _closure1_slot6;
            var20 = var8.bind(var9)(var1);
            var1 = var31[var3];
            var13 = var30.bind(var4)(var1);
            var9 = var13.useDerivedValue;
            var8 = function k() {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                    var3 = _closure2_slot2;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0017_ip = 63; continue _fun0017 }
case 3:
                    var3 = _closure2_slot1;
                    var1 = var3.get;
                    var1 = var1.bind(var3)();
                    if(var1) { _fun0017_ip = 39; continue _fun0017 }
case 64:
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
case 39:
                    var1 = 1;
                    return var1;
case 63:
                    var1 = 0;
                    return var1;
                }
            };
            var15 = {};
            var15['notificationGestureY'] = var16;
            var15['expandedSV'] = var23;
            var1 = 20;
            var15['ACCESSORY_EXIT_THRESHOLD'] = var1;
            var8['__closure'] = var15;
            var15 = 12120412379867.0;
            var8['__workletHash'] = var15;
            var15 = _closure1_slot25;
            var8['__initData'] = var15;
            var15 = var9.bind(var13)(var8);
            _closure2_slot13 = var15;
            var8 = var31[var3];
            var13 = var30.bind(var4)(var8);
            var9 = var13.useDerivedValue;
            var8 = function Z() {
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 10;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
                var2 = var2.PREVIEW_SIZE;
                var1 = _closure1_slot11;
                var2 = var2 + var1;
                var3 = _closure2_slot13;
                var1 = var3.get;
                var3 = var1.bind(var3)();
                var1 = 1;
                var1 = var1 - var3;
                var1 = var2 * var1;
                return var1;
            };
            var19 = {};
            var29 = 10;
            var33 = var31[var29];
            var33 = var30.bind(var4)(var33);
            var33 = var33.PREVIEW_SIZE;
            var19['PREVIEW_SIZE'] = var33;
            var33 = _closure1_slot11;
            var19['ACCESSORY_LEFT_GAP'] = var33;
            var19['accessoryExitProgressSV'] = var15;
            var8['__closure'] = var19;
            var19 = 3948901971978.0;
            var8['__workletHash'] = var19;
            var19 = _closure1_slot26;
            var8['__initData'] = var19;
            var19 = var9.bind(var13)(var8);
            _closure2_slot14 = var19;
            var3 = var31[var3];
            var9 = var30.bind(var4)(var3);
            var8 = var9.useAnimatedStyle;
            var3 = function F() {
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                    var2 = _closure2_slot2;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0018_ip = 19; continue _fun0018 }
case 3:
                    var1 = _closure2_slot12;
                    if(var1) { _fun0018_ip = 65; continue _fun0018 }
case 19:
                    var1 = {};
                    _fun0018_ip = 66; continue _fun0018;
case 65:
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
case 66:
                    return var1;
                }
            };
            var13 = {};
            var13['notificationGestureY'] = var16;
            var13['hasPreviewableMedia'] = var32;
            var13['accessoryWidthSV'] = var19;
            var29 = var31[var29];
            var29 = var30.bind(var4)(var29);
            var29 = var29.PREVIEW_SIZE;
            var13['PREVIEW_SIZE'] = var29;
            var3['__closure'] = var13;
            var13 = 16810783792190.0;
            var3['__workletHash'] = var13;
            var13 = _closure1_slot27;
            var3['__initData'] = var13;
            var13 = var8.bind(var9)(var3);
            var9 = _closure1_slot3;
            var8 = var9.useMemo;
            var3 = new Array(9);
            var3[0] = var17;
            var3[1] = var28;
            var3[2] = var27;
            var3[3] = var26;
            var3[4] = var25;
            var3[5] = var24;
            var3[6] = var22;
            var3[7] = var7;
            var3[8] = var10;
            var2 = function() {
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                    var1 = _closure2_slot11;
                    if(var1) { _fun0019_ip = 67; continue _fun0019 }
case 13:
                    var1 = {};
                    var2 = 'simple';
                    var1['type'] = var2;
                    var2 = _closure2_slot10;
                    var1['text'] = var2;
                    var2 = _closure2_slot9;
                    var1['labelStyle'] = var2;
                    _fun0019_ip = 68; continue _fun0019;
case 67:
                    var2 = {};
                    var4 = 'message';
                    var2['type'] = var4;
                    var4 = _closure2_slot4;
                    var2['channel'] = var4;
                    var4 = _closure2_slot5;
                    var2['parentChannel'] = var4;
                    var4 = _closure2_slot6;
                    var2['guild'] = var4;
                    var4 = _closure2_slot7;
                    var2['author'] = var4;
                    var4 = _closure2_slot0;
                    var2['expanded'] = var4;
                    var3 = _closure2_slot3;
                    var2['onDismiss'] = var3;
                    var1 = var2;
case 68:
                    return var1;
                }
            };
            var9 = var8.bind(var9)(var2, var3);
            var8 = _closure1_slot8;
            var3 = _closure1_slot16;
            var2 = {};
            var2['message'] = var18;
            var2['redesignEnabled'] = var17;
            var22 = var8.bind(var4)(var3, var2);
            var10 = var22;
            if(!(var11 != var16)) { _fun0015_ip = 69; continue _fun0015 }
case 70:
            var8 = _closure1_slot8;
            var3 = _closure1_slot24;
            var2 = {};
            var2['message'] = var18;
            var2['expandedSV'] = var23;
            var2['notificationGestureY'] = var16;
            var2['initialPreviewContent'] = var22;
            var2['initialPreviewHeight'] = var20;
            var2['accessoryWidthSV'] = var19;
            var10 = var8.bind(var4)(var3, var2);
case 69:
            var20 = _closure1_slot0;
            var19 = _closure1_slot2;
            var2 = 19;
            var2 = var19[var2];
            var3 = var20.bind(var4)(var2);
            var2 = var3.useIsScreenReaderEnabled;
            var8 = var2.bind(var3)();
            var3 = _closure1_slot8;
            var1 = var19[var1];
            var1 = var20.bind(var4)(var1);
            var2 = var1.Notification;
            var1 = {};
            var23 = 16;
            var19 = var19[var23];
            var19 = var20.bind(var4)(var19);
            var20 = var19.Avatar;
            var19 = {};
            var22 = var18.author;
            var19['user'] = var22;
            var22 = var21.guild;
            var24 = var11 == var22;
            var21 = undefined;
            if(var24) { _fun0015_ip = 71; continue _fun0015 }
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
            var1['accessoryLabelNode'] = var14;
            var1['bodyStyle'] = var13;
            if(!(var11 != var16)) { _fun0015_ip = 73; continue _fun0015 }
case 74:
            var11 = null;
            if(var7) { _fun0015_ip = 75; continue _fun0015 }
case 73:
            var14 = _closure1_slot8;
            var13 = _closure1_slot15;
            var12 = {};
            var12['message'] = var18;
            var12['redesignEnabled'] = var17;
            var12['notificationGestureY'] = var16;
            var12['accessoryExitProgressSV'] = var15;
            var11 = var14.bind(var4)(var13, var12);
case 75:
            var1['rightAccessory'] = var11;
            var1['children'] = var10;
            var1['header'] = var9;
            if(!var6) { _fun0015_ip = 76; continue _fun0015 }
case 77:
            var7 = !var7;
            if(var7) { _fun0015_ip = 78; continue _fun0015 }
case 79:
            var7 = var8;
case 78:
            var6 = var7;
case 76:
            var1['showDragHandle'] = var6;
            var1['onAccessibilityExpand'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 21;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/in_app_notifications/native/MessageNotification.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();