// app/modules/in_app_notifications/native/NotificationContent.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var1 = function DragHandle(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var8 = var1.onAccessibilityExpand;
            var5 = undefined;
            var _closure2_slot5 = var5;
            var1 = _closure1_slot10;
            var13 = var1.bind(var5)();
            var12 = _closure1_slot0;
            var14 = _closure1_slot2;
            var1 = 6;
            var1 = var14[var1];
            var2 = var12.bind(var5)(var1);
            var1 = var2.useIsScreenReaderEnabled;
            var2 = var1.bind(var2)();
            var15 = 7;
            var1 = var14[var15];
            var6 = var12.bind(var5)(var1);
            var1 = var6.useSharedValue;
            var4 = 0;
            var10 = var1.bind(var6)(var4);
            var _closure2_slot0 = var10;
            var1 = var14[var15];
            var6 = var12.bind(var5)(var1);
            var1 = var6.useSharedValue;
            var11 = var1.bind(var6)(var4);
            var _closure2_slot1 = var11;
            var6 = _closure1_slot4;
            var1 = var6.useState;
            var9 = var1.bind(var6)(var4);
            var6 = _closure1_slot3;
            var1 = 2;
            var1 = var6.bind(var5)(var9, var1);
            var17 = var1[var4];
            var _closure2_slot2 = var17;
            var9 = 1;
            var1 = var1[var9];
            var _closure2_slot3 = var1;
            var16 = _closure1_slot4;
            var6 = var16.useState;
            var1 = function() {
                var1 = global;
                var2 = var1.Date;
                var1 = var2.now;
                var1 = var1.bind(var2)();
                return var1;
            };
            var6 = var6.bind(var16)(var1);
            var1 = _closure1_slot3;
            var1 = var1.bind(var5)(var6, var9);
            var1 = var1[var4];
            var _closure2_slot4 = var1;
            var18 = _closure1_slot4;
            var16 = var18.useMemo;
            var6 = new Array(1);
            var6[0] = var1;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var7 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var5 = 8;
                    var2 = var3[var5];
                    var4 = undefined;
                    var6 = var7.bind(var4)(var2);
                    var2 = var6.getExpandNUXState;
                    var2 = var2.bind(var6)();
                    var6 = var2.numTimesShown;
                    var3 = var3[var5];
                    var3 = var7.bind(var4)(var3);
                    var3 = var3.MAX_TIMES_SHOWN;
                    if(!(!(var6 >= var3))) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var3 = var2.lastShownAtMs;
                    var2 = _closure2_slot4;
                    var2 = var2 - var3;
                    var3 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var1 = var1[var5];
                    var1 = var3.bind(var4)(var1);
                    var1 = var1.ONE_DAY_MS;
                    var1 = var2 < var1;
                    var1 = !var1;
                    return var1;
case 2:
                    var1 = false;
                    return var1;
                }
            };
            var1 = var16.bind(var18)(var1, var6);
            var6 = 9;
            var6 = var14[var6];
            var14 = var12.bind(var5)(var6);
            var12 = var14.useSelectedDismissibleContent;
            if(var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var6 = new Array(0);
            _fun0001_ip = 6; continue _fun0001;
case 4:
            var16 = _closure1_slot0;
            var18 = _closure1_slot2;
            var1 = 10;
            var1 = var18[var1];
            var1 = var16.bind(var5)(var1);
            var1 = var1.DismissibleContent;
            var16 = var1.IN_APP_NOTIFICATION_EXPAND_NUX;
            var1 = new Array(1);
            var1[0] = var16;
            var6 = var1;
case 6:
            var1 = true;
            var6 = var12.bind(var14)(var6, var5, var1);
            var1 = _closure1_slot3;
            var1 = var1.bind(var5)(var6, var9);
            var9 = var1[var4];
            var6 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 10;
            var1 = var4[var1];
            var1 = var6.bind(var5)(var1);
            var1 = var1.DismissibleContent;
            var1 = var1.IN_APP_NOTIFICATION_EXPAND_NUX;
            var1 = var9 === var1;
            _closure2_slot5 = var1;
            var16 = _closure1_slot4;
            var14 = var16.useCallback;
            var12 = function(arg1) {
                var1 = arg1;
                var1 = var1.nativeEvent;
                var1 = var1.layout;
                var1 = var1.height;
                var _closure3_slot0 = var1;
                var3 = _closure2_slot3;
                var1 = undefined;
                var2 = function(arg1) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var1 = arg1;
                        var3 = _closure3_slot0;
                        if(!(var1 !== var3)) { _fun0003_ip = 7; continue _fun0003 }
case 8:
                        var1 = _closure3_slot0;
case 7:
                        return var1;
                    }
                };
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var9 = new Array(0);
            var20 = var14.bind(var16)(var12, var9);
            var9 = var4[var15];
            var14 = var6.bind(var5)(var9);
            var12 = var14.useAnimatedStyle;
            var9 = function c() {
                var1 = {};
                var4 = _closure2_slot1;
                var3 = var4.get;
                var3 = var3.bind(var4)();
                var1['opacity'] = var3;
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var3 = 7;
                var5 = var5[var3];
                var3 = undefined;
                var6 = var6.bind(var3)(var5);
                var5 = var6.interpolate;
                var3 = var4.get;
                var4 = var3.bind(var4)();
                var2 = _closure2_slot2;
                var3 = [0];
                var3[1] = var2;
                var2 = [0, 1];
                var2 = var5.bind(var6)(var4, var2, var3);
                var1['height'] = var2;
                return var1;
            };
            var16 = {};
            var16['textRevealProgress'] = var11;
            var18 = var4[var15];
            var18 = var6.bind(var5)(var18);
            var18 = var18.interpolate;
            var16['interpolate'] = var18;
            var16['textHeight'] = var17;
            var9['__closure'] = var16;
            var16 = 11744264899632.0;
            var9['__workletHash'] = var16;
            var16 = _closure1_slot12;
            var9['__initData'] = var16;
            var18 = var12.bind(var14)(var9);
            var4 = var4[var15];
            var9 = var6.bind(var5)(var4);
            var6 = var9.useAnimatedStyle;
            var4 = function A() {
                var1 = {};
                var3 = {};
                var4 = _closure2_slot0;
                var2 = var4.get;
                var2 = var2.bind(var4)();
                var3['translateY'] = var2;
                var2 = new Array(1);
                var2[0] = var3;
                var1['transform'] = var2;
                return var1;
            };
            var12 = {};
            var12['dragHandleBounceProgress'] = var10;
            var4['__closure'] = var12;
            var12 = 16018166575562.0;
            var4['__workletHash'] = var12;
            var12 = _closure1_slot13;
            var4['__initData'] = var12;
            var14 = var6.bind(var9)(var4);
            var9 = _closure1_slot4;
            var6 = var9.useEffect;
            var4 = new Array(3);
            var4[0] = var1;
            var4[1] = var11;
            var4[2] = var10;
            var3 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = _closure2_slot5;
                    if(var1) { _fun0004_ip = 8; continue _fun0004 }
case 9:
                    var1 = undefined;
                    return var1;
case 8:
                    var14 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var12 = 8;
                    var1 = var15[var12];
                    var13 = undefined;
                    var3 = var14.bind(var13)(var1);
                    var1 = var3.markExpandNUXStateAsShown;
                    var1 = var1.bind(var3)();
                    var5 = _closure2_slot1;
                    var4 = var5.set;
                    var7 = 7;
                    var1 = var15[var7];
                    var9 = var14.bind(var13)(var1);
                    var8 = var9.withDelay;
                    var1 = var15[var12];
                    var1 = var14.bind(var13)(var1);
                    var6 = var1.NUX_REVEAL_DELAY_MS;
                    var1 = 11;
                    var3 = var15[var1];
                    var16 = var14.bind(var13)(var3);
                    var11 = var16.withTiming;
                    var10 = {};
                    var3 = var15[var12];
                    var3 = var14.bind(var13)(var3);
                    var3 = var3.NUX_REVEAL_DURATION_MS;
                    var10['duration'] = var3;
                    var3 = 1;
                    var3 = var11.bind(var16)(var3, var10);
                    var3 = var8.bind(var9)(var6, var3);
                    var3 = var4.bind(var5)(var3);
                    var3 = _closure2_slot0;
                    var2 = var3.set;
                    var4 = var15[var7];
                    var6 = var14.bind(var13)(var4);
                    var5 = var6.withDelay;
                    var4 = var15[var12];
                    var4 = var14.bind(var13)(var4);
                    var8 = var4.NUX_REVEAL_DELAY_MS;
                    var4 = var15[var12];
                    var4 = var14.bind(var13)(var4);
                    var4 = var4.NUX_REVEAL_DURATION_MS;
                    var4 = var8 + var4;
                    var7 = var15[var7];
                    var10 = var14.bind(var13)(var7);
                    var9 = var10.withRepeat;
                    var1 = var15[var1];
                    var11 = var14.bind(var13)(var1);
                    var8 = var11.withTiming;
                    var1 = var15[var12];
                    var1 = var14.bind(var13)(var1);
                    var7 = var1.DRAG_HANDLE_BOUNCE_DISTANCE;
                    var1 = {};
                    var12 = var15[var12];
                    var12 = var14.bind(var13)(var12);
                    var12 = var12.DRAG_HANDLE_BOUNCE_DURATION_MS;
                    var1['duration'] = var12;
                    var8 = var8.bind(var11)(var7, var1);
                    var7 = -1;
                    var1 = true;
                    var1 = var9.bind(var10)(var8, var7, var1);
                    var1 = var5.bind(var6)(var4, var1);
                    var1 = var2.bind(var3)(var1);
                    var1 = function() {
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var3 = 7;
                        var2 = var5[var3];
                        var1 = undefined;
                        var8 = var4.bind(var1)(var2);
                        var7 = var8.cancelAnimation;
                        var6 = _closure2_slot1;
                        var6 = var7.bind(var8)(var6);
                        var3 = var5[var3];
                        var4 = var4.bind(var1)(var3);
                        var3 = var4.cancelAnimation;
                        var2 = _closure2_slot0;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    return var1;
                }
            };
            var3 = var6.bind(var9)(var3, var4);
            if(var1) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var4 = _closure1_slot7;
            var3 = _closure1_slot6;
            var1 = {};
            var6 = var13.dragHandle;
            var1['style'] = var6;
            var6 = var4.bind(var5)(var3, var1);
            _fun0001_ip = 12; continue _fun0001;
case 10:
            var4 = _closure1_slot9;
            var3 = _closure1_slot8;
            var1 = {};
            var16 = _closure1_slot7;
            var11 = _closure1_slot1;
            var10 = _closure1_slot2;
            var9 = var10[var15];
            var9 = var11.bind(var5)(var9);
            var12 = var9.View;
            var9 = {};
            var19 = var13.dragHandleTextContainer;
            var17 = new Array(2);
            var17[0] = var19;
            var17[1] = var18;
            var9['style'] = var17;
            var19 = _closure1_slot7;
            var23 = _closure1_slot0;
            var17 = 12;
            var17 = var10[var17];
            var17 = var23.bind(var5)(var17);
            var18 = var17.Text;
            var17 = {'onLayout': null, 'variant': 'text-xs/normal', 'color': 'text-subtle'};
            var17['onLayout'] = var20;
            var20 = var13.dragHandleText;
            var17['style'] = var20;
            var20 = 13;
            var21 = var10[var20];
            var21 = var23.bind(var5)(var21);
            var22 = var21.intl;
            var21 = var22.string;
            var20 = var10[var20];
            var20 = var23.bind(var5)(var20);
            var20 = var20.t;
            var20 = var20.vos6/N;
            var20 = var21.bind(var22)(var20);
            var17['children'] = var20;
            var17 = var19.bind(var5)(var18, var17);
            var9['children'] = var17;
            var12 = var16.bind(var5)(var12, var9);
            var9 = new Array(2);
            var9[0] = var12;
            var12 = _closure1_slot7;
            var10 = var10[var15];
            var10 = var11.bind(var5)(var10);
            var11 = var10.View;
            var10 = {};
            var15 = var13.dragHandle;
            var13 = new Array(2);
            var13[0] = var15;
            var13[1] = var14;
            var10['style'] = var13;
            var10 = var12.bind(var5)(var11, var10);
            var9[1] = var10;
            var1['children'] = var9;
            var6 = var4.bind(var5)(var3, var1);
case 12:
            var1 = var6;
            if(!var2) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var2 = null;
            var1 = var6;
            if(!(var2 != var8)) { _fun0001_ip = 13; continue _fun0001 }
case 15:
            var4 = _closure1_slot7;
            var3 = _closure1_slot5;
            var2 = {};
            var2['onPress'] = var8;
            var8 = 'button';
            var2['accessibilityRole'] = var8;
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var7 = 13;
            var8 = var11[var7];
            var8 = var10.bind(var5)(var8);
            var9 = var8.intl;
            var8 = var9.string;
            var7 = var11[var7];
            var7 = var10.bind(var5)(var7);
            var7 = var7.t;
            var7 = var7.PbxI/x;
            var7 = var8.bind(var9)(var7);
            var2['accessibilityLabel'] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 13:
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var12.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var10 = 1;
    var7 = var6[var10];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.Pressable;
    var _closure1_slot5 = var7;
    var4 = var4.View;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot7 = var7;
    var7 = var4.Fragment;
    var _closure1_slot8 = var7;
    var4 = var4.jsxs;
    var _closure1_slot9 = var4;
    var4 = 4;
    var7 = var6[var4];
    var9 = var5.bind(var1)(var7);
    var8 = var9.createStyles;
    var7 = {};
    var11 = {};
    var13 = 'hidden';
    var11['overflow'] = var13;
    var7['dragHandleTextContainer'] = var11;
    var13 = {'position': 'absolute', 'left': 0, 'right': 0, 'textAlign': 'center'};
    var11 = 5;
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.space;
    var14 = var14.PX_4;
    var13['paddingBottom'] = var14;
    var7['dragHandleText'] = var13;
    var13 = {'width': 32, 'height': 4, 'alignSelf': 'center'};
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_ACCENT;
    var13['backgroundColor'] = var14;
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.xs;
    var13['borderRadius'] = var14;
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.space;
    var14 = var14.PX_8;
    var13['marginBottom'] = var14;
    var7['dragHandle'] = var13;
    var7 = var8.bind(var9)(var7);
    var _closure1_slot10 = var7;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var9['flex'] = var10;
    var4['body'] = var9;
    var9 = {};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.space;
    var13 = var13.PX_8;
    var9['marginRight'] = var13;
    var4['iconContainer'] = var9;
    var9 = {};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.space;
    var13 = var13.PX_12;
    var9['padding'] = var13;
    var13 = 'row';
    var9['flexDirection'] = var13;
    var4['contentContainer'] = var9;
    var9 = {'padding': null, 'paddingBottom': 0, 'flexDirection': 'row'};
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.space;
    var11 = var11.PX_12;
    var9['padding'] = var11;
    var4['contentContainerExpanded'] = var9;
    var9 = {};
    var9['flex'] = var10;
    var4['headerContainer'] = var9;
    var9 = {'flexDirection': 'row', 'alignItems': 'center'};
    var4['labelContainer'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot11 = var4;
    var4 = {};
    var7 = 'function NotificationContentTsx1(){const{textRevealProgress,interpolate,textHeight}=this.__closure;return{opacity:textRevealProgress.get(),height:interpolate(textRevealProgress.get(),[0,1],[0,textHeight])};}';
    var4['code'] = var7;
    var _closure1_slot12 = var4;
    var4 = {};
    var7 = 'function NotificationContentTsx2(){const{dragHandleBounceProgress}=this.__closure;return{transform:[{translateY:dragHandleBounceProgress.get()}]};}';
    var4['code'] = var7;
    var _closure1_slot13 = var4;
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/in_app_notifications/native/NotificationContent.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function NotificationContent(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg1;
            var16 = var1.icon;
            var17 = var1.children;
            var20 = var1.accessoryLabelNode;
            var12 = var1.rightAccessory;
            var28 = var1.header;
            var8 = var1.showDragHandle;
            var4 = undefined;
            if(!(var8 === var4)) { _fun0005_ip = 16; continue _fun0005 }
case 17:
            var8 = false;
case 16:
            var10 = var1.onAccessibilityExpand;
            var18 = var1.bodyStyle;
            var6 = var1.expandedContentVisible;
            if(!(var6 === var4)) { _fun0005_ip = 18; continue _fun0005 }
case 19:
            var6 = false;
case 18:
            var1 = _closure1_slot11;
            var24 = var1.bind(var4)();
            var3 = _closure1_slot9;
            var2 = _closure1_slot8;
            var1 = {};
            var9 = _closure1_slot6;
            var5 = {};
            if(var6) { _fun0005_ip = 20; continue _fun0005 }
case 21:
            var6 = var24.contentContainer;
            _fun0005_ip = 22; continue _fun0005;
case 20:
            var6 = var24.contentContainerExpanded;
case 22:
            var5['style'] = var6;
            var6 = null;
            var11 = var6 != var16;
            var13 = null;
            if(!var11) { _fun0005_ip = 23; continue _fun0005 }
case 24:
            var15 = _closure1_slot7;
            var14 = _closure1_slot6;
            var11 = {};
            var19 = var24.iconContainer;
            var11['style'] = var19;
            var11['children'] = var16;
            var13 = var15.bind(var4)(var14, var11);
case 23:
            var11 = new Array(3);
            var11[0] = var13;
            var15 = _closure1_slot9;
            var14 = _closure1_slot1;
            var16 = _closure1_slot2;
            var13 = 7;
            var13 = var16[var13];
            var13 = var14.bind(var4)(var13);
            var14 = var13.View;
            var13 = {};
            var19 = var24.body;
            var16 = new Array(2);
            var16[0] = var19;
            var16[1] = var18;
            var13['style'] = var16;
            var19 = _closure1_slot9;
            var18 = _closure1_slot6;
            var16 = {};
            var21 = var24.labelContainer;
            var16['style'] = var21;
            var22 = var6 != var20;
            var21 = null;
            if(!var22) { _fun0005_ip = 25; continue _fun0005 }
case 26:
            var21 = var20;
case 25:
            var20 = new Array(2);
            var20[0] = var21;
            var23 = _closure1_slot7;
            var22 = _closure1_slot6;
            var21 = {};
            var24 = var24.headerContainer;
            var21['style'] = var24;
            var25 = var28.type;
            var24 = 'message';
            if(!(var24 !== var25)) { _fun0005_ip = 27; continue _fun0005 }
case 28:
            var26 = _closure1_slot7;
            var25 = _closure1_slot0;
            var27 = _closure1_slot2;
            var24 = 14;
            var24 = var27[var24];
            var24 = var25.bind(var4)(var24);
            var25 = var24.SimpleNotificationHeader;
            var24 = {};
            var31 = var24;
            var30 = var28;
            var27 = copyDataProperties(var31, var30);
            var24 = var26.bind(var4)(var25, var24);
            _fun0005_ip = 29; continue _fun0005;
case 27:
            var27 = _closure1_slot7;
            var26 = _closure1_slot1;
            var29 = _closure1_slot2;
            var25 = 14;
            var25 = var29[var25];
            var26 = var26.bind(var4)(var25);
            var25 = {};
            var31 = var25;
            var30 = var28;
            var28 = copyDataProperties(var31, var30);
            var24 = var27.bind(var4)(var26, var25);
case 29:
            var21['children'] = var24;
            var21 = var23.bind(var4)(var22, var21);
            var20[1] = var21;
            var16['children'] = var20;
            var18 = var19.bind(var4)(var18, var16);
            var16 = new Array(2);
            var16[0] = var18;
            var16[1] = var17;
            var13['children'] = var16;
            var13 = var15.bind(var4)(var14, var13);
            var11[1] = var13;
            var11[2] = var12;
            var5['children'] = var11;
            var9 = var3.bind(var4)(var9, var5);
            var5 = new Array(2);
            var5[0] = var9;
            var6 = null;
            if(!var8) { _fun0005_ip = 30; continue _fun0005 }
case 31:
            var9 = _closure1_slot7;
            var8 = _closure1_slot14;
            var7 = {};
            var7['onAccessibilityExpand'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 30:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();