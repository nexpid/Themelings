// app/modules/video_calls/native/components/FocusedControlsBottomControls.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var13 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var7;
    var1 = function FocusedControlsExpanded(arg1) {
        var2 = arg1;
        var11 = var2.expandedControls;
        var18 = var2.availableHeight;
        var6 = var2.positionY;
        var _closure2_slot0 = var6;
        var2 = _closure1_slot19;
        var4 = undefined;
        var13 = var2.bind(var4)();
        var9 = _closure1_slot1;
        var15 = _closure1_slot2;
        var2 = 12;
        var2 = var15[var2];
        var2 = var9.bind(var4)(var2);
        var2 = var2.bind(var4)();
        var16 = var2.bottom;
        var5 = _closure1_slot4;
        var3 = var5.useState;
        var2 = 0;
        var7 = var3.bind(var5)(var2);
        var5 = _closure1_slot3;
        var3 = 2;
        var3 = var5.bind(var4)(var7, var3);
        var17 = var3[var2];
        var2 = 1;
        var2 = var3[var2];
        var _closure2_slot1 = var2;
        var7 = _closure1_slot4;
        var5 = var7.useCallback;
        var3 = function(arg1) {
            var1 = arg1;
            var1 = var1.nativeEvent;
            var1 = var1.layout;
            var3 = var1.height;
            var2 = _closure2_slot1;
            var1 = undefined;
            var2 = var2.bind(var1)(var3);
            return var1;
        };
        var2 = new Array(0);
        var12 = var5.bind(var7)(var3, var2);
        var3 = _closure1_slot0;
        var8 = 13;
        var2 = var15[var8];
        var3 = var3.bind(var4)(var2);
        var2 = var3.useAnimatedStyle;
        var1 = function u() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var1 = global;
                var4 = var1.Math;
                var3 = var4.min;
                var2 = _closure2_slot0;
                var1 = var2.get;
                var2 = var1.bind(var2)();
                var1 = -1;
                var2 = var1 * var2;
                var1 = _closure1_slot16;
                var2 = var2 / var1;
                var1 = 1;
                var4 = var3.bind(var4)(var2, var1);
                var1 = {};
                var1['opacity'] = var4;
                var2 = 'auto';
                var3 = 0;
                if(!(var3 === var4)) { _fun0001_ip = 79; continue _fun0001 }
 75:
                var2 = 'none';
 79:
                var1['pointerEvents'] = var2;
                return var1;
            }
        };
        var5 = {};
        var5['positionY'] = var6;
        var6 = _closure1_slot16;
        var5['EXPANDED_DRAWER_SHOW_POSITION'] = var6;
        var1['__closure'] = var5;
        var5 = 10567472250823.0;
        var1['__workletHash'] = var5;
        var5 = _closure1_slot22;
        var1['__initData'] = var5;
        var14 = var2.bind(var3)(var1);
        var3 = _closure1_slot14;
        var2 = _closure1_slot5;
        var1 = {};
        var5 = {};
        var5['height'] = var18;
        var1['style'] = var5;
        var7 = _closure1_slot14;
        var6 = _closure1_slot8;
        var5 = {};
        var16 = var18 - var16;
        var16 = var17 > var16;
        var5['scrollEnabled'] = var16;
        var10 = _closure1_slot14;
        var8 = var15[var8];
        var8 = var9.bind(var4)(var8);
        var9 = var8.View;
        var8 = {};
        var15 = var13.expandedControlsContainer;
        var13 = new Array(2);
        var13[0] = var15;
        var13[1] = var14;
        var8['style'] = var13;
        var8['onLayout'] = var12;
        var8['children'] = var11;
        var8 = var10.bind(var4)(var9, var8);
        var5['children'] = var8;
        var5 = var7.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot31 = var1;
    var1 = function FocusedControlsBottomDrawerTooltip(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = arg1;
            var8 = var2.positionY;
            var _closure2_slot0 = var8;
            var2 = _closure1_slot19;
            var5 = undefined;
            var9 = var2.bind(var5)();
            var6 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 14;
            var2 = var4[var2];
            var10 = var6.bind(var5)(var2);
            var7 = var10.useCanShowTooltip;
            var2 = 15;
            var2 = var4[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.TooltipNames;
            var3 = var2.SCREENSHARE_SWIPE_UP_CONTROLS;
            var2 = true;
            var3 = var7.bind(var10)(var3, var2);
            var2 = 13;
            var4 = var4[var2];
            var6 = var6.bind(var5)(var4);
            var4 = var6.useAnimatedStyle;
            var1 = function o() {
                var1 = {};
                var2 = global;
                var5 = var2.Math;
                var4 = var5.min;
                var3 = _closure2_slot0;
                var2 = var3.get;
                var3 = var2.bind(var3)();
                var2 = -1;
                var3 = var2 * var3;
                var2 = _closure1_slot16;
                var2 = var3 / var2;
                var3 = 1;
                var2 = var4.bind(var5)(var2, var3);
                var2 = var3 - var2;
                var1['opacity'] = var2;
                return var1;
            };
            var7 = {};
            var7['positionY'] = var8;
            var8 = _closure1_slot16;
            var7['EXPANDED_DRAWER_SHOW_POSITION'] = var8;
            var1['__closure'] = var7;
            var7 = 4429631762525.0;
            var1['__workletHash'] = var7;
            var7 = _closure1_slot23;
            var1['__initData'] = var7;
            var6 = var4.bind(var6)(var1);
            var1 = null;
            if(!var3) { _fun0002_ip = 395; continue _fun0002 }
 172:
            var4 = _closure1_slot14;
            var7 = _closure1_slot1;
            var13 = _closure1_slot2;
            var2 = var13[var2];
            var2 = var7.bind(var5)(var2);
            var3 = var2.View;
            var2 = {};
            var2['style'] = var6;
            var8 = _closure1_slot14;
            var10 = 16;
            var6 = var13[var10];
            var7 = var7.bind(var5)(var6);
            var6 = {};
            var12 = var9.tooltipStyle;
            var6['style'] = var12;
            var12 = _closure1_slot0;
            var11 = var13[var10];
            var11 = var12.bind(var5)(var11);
            var11 = var11.TooltipArrowPositions;
            var11 = var11.CENTER;
            var6['arrowPosition'] = var11;
            var10 = var13[var10];
            var10 = var12.bind(var5)(var10);
            var10 = var10.TooltipArrowDirections;
            var10 = var10.DOWN;
            var6['arrowDirection'] = var10;
            var10 = 8;
            var6['arrowWidth'] = var10;
            var10 = 4;
            var6['arrowHeight'] = var10;
            var10 = var9.containerStyle;
            var6['containerStyle'] = var10;
            var9 = var9.labelStyle;
            var6['labelStyle'] = var9;
            var9 = 17;
            var10 = var13[var9];
            var10 = var12.bind(var5)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var9 = var13[var9];
            var9 = var12.bind(var5)(var9);
            var9 = var9.t;
            var9 = var9.zYzy2t;
            var9 = var10.bind(var11)(var9);
            var6['label'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 395:
            return var1;
        }
    };
    var _closure1_slot32 = var1;
    var1 = function FocusedControlsAboveActionBarView(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var2 = arg1;
            var18 = var2.positionY;
            var _closure2_slot0 = var18;
            var8 = var2.offsetY;
            var _closure2_slot1 = var8;
            var13 = var2.aboveActionBar;
            var5 = var2.onPressHeader;
            var6 = var2.isExpanded;
            var2 = _closure1_slot19;
            var4 = undefined;
            var14 = var2.bind(var4)();
            var11 = _closure1_slot0;
            var17 = _closure1_slot2;
            var16 = 13;
            var2 = var17[var16];
            var3 = var11.bind(var4)(var2);
            var2 = var3.useAnimatedStyle;
            var1 = function _() {
                var1 = {};
                var2 = global;
                var5 = var2.Math;
                var4 = var5.max;
                var7 = var2.Math;
                var6 = var7.abs;
                var8 = _closure2_slot0;
                var3 = var8.get;
                var3 = var3.bind(var8)();
                var3 = var6.bind(var7)(var3);
                var6 = _closure2_slot1;
                var2 = 3;
                var6 = var6 / var2;
                var2 = _closure1_slot16;
                var2 = var6 - var2;
                var3 = var3 / var2;
                var2 = 0;
                var3 = var4.bind(var5)(var3, var2);
                var2 = 2;
                var2 = var2 - var3;
                var1['opacity'] = var2;
                return var1;
            };
            var7 = {};
            var7['offsetY'] = var8;
            var8 = _closure1_slot16;
            var7['EXPANDED_DRAWER_SHOW_POSITION'] = var8;
            var7['positionY'] = var18;
            var1['__closure'] = var7;
            var7 = 5042367101380.0;
            var1['__workletHash'] = var7;
            var7 = _closure1_slot24;
            var1['__initData'] = var7;
            var15 = var2.bind(var3)(var1);
            var3 = _closure1_slot14;
            var2 = _closure1_slot7;
            var1 = {'accessible': true, 'onPress': null, 'accessibilityRole': 'button', 'accessibilityLabel': 'Group DM', 'accessibilityHint': 'Press to start a new conversation'};
            var1['onPress'] = var5;
            var5 = {};
            var5['expanded'] = var6;
            var1['accessibilityState'] = var5;
            var7 = _closure1_slot15;
            var6 = _closure1_slot5;
            var5 = {};
            var8 = var14.aboveActionBarContainer;
            var5['style'] = var8;
            var12 = _closure1_slot14;
            var9 = _closure1_slot32;
            var8 = {};
            var8['positionY'] = var18;
            var9 = var12.bind(var4)(var9, var8);
            var8 = new Array(3);
            var8[0] = var9;
            var12 = _closure1_slot14;
            var9 = 18;
            var9 = var17[var9];
            var9 = var11.bind(var4)(var9);
            var11 = var9.ActionSheetHeaderBar;
            var9 = {};
            var9 = var12.bind(var4)(var11, var9);
            var8[1] = var9;
            var9 = null;
            var9 = var9 != var13;
            if(!var9) { _fun0003_ip = 339; continue _fun0003 }
 279:
            var12 = _closure1_slot14;
            var11 = _closure1_slot1;
            var10 = _closure1_slot2;
            var10 = var10[var16];
            var10 = var11.bind(var4)(var10);
            var11 = var10.View;
            var10 = {};
            var16 = var14.aboveActionBarChildrenContainer;
            var14 = new Array(2);
            var14[0] = var16;
            var14[1] = var15;
            var10['style'] = var14;
            var10['children'] = var13;
            var9 = var12.bind(var4)(var11, var10);
 339:
            var8[2] = var9;
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot33 = var1;
    var2 = function FocusedControlsBottomDrawer(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var3 = arg1;
            var13 = var3.children;
            var17 = var3.expandedControls;
            var6 = var3.actionBarControlsHeight;
            var2 = var3.reveal;
            var _closure2_slot0 = var2;
            var22 = var3.aboveActionBar;
            var4 = var3.onDrawerClose;
            var _closure2_slot1 = var4;
            var5 = var3.onDrawerOpen;
            var4 = undefined;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var _closure2_slot8 = var4;
            var _closure2_slot9 = var4;
            var3 = _closure1_slot19;
            var25 = var3.bind(var4)();
            var10 = _closure1_slot1;
            var11 = _closure1_slot2;
            var3 = 12;
            var3 = var11[var3];
            var3 = var10.bind(var4)(var3);
            var3 = var3.bind(var4)();
            var9 = var3.bottom;
            var18 = var3.right;
            var _closure2_slot2 = var18;
            var8 = var3.top;
            var3 = _closure1_slot6;
            var3 = var3.bind(var4)();
            var16 = var3.height;
            var7 = var3.width;
            var3 = _closure1_slot11;
            var3 = var7 > var3;
            var _closure2_slot3 = var3;
            var7 = 24;
            var7 = var11[var7];
            var7 = var10.bind(var4)(var7);
            var14 = var7.bind(var4)();
            var _closure2_slot4 = var14;
            var10 = var16;
            if(!var3) { _fun0004_ip = 209; continue _fun0004 }
 186:
            var7 = global;
            var15 = var7.Math;
            var11 = var15.min;
            var7 = _closure1_slot12;
            var10 = var11.bind(var15)(var7, var16);
 209:
            _closure2_slot5 = var10;
            var19 = var6;
            if(var3) { _fun0004_ip = 223; continue _fun0004 }
 219:
            var19 = var6 + var9;
 223:
            _closure2_slot6 = var19;
            var21 = var10 - var19;
            _closure2_slot7 = var21;
            var7 = var10 - var19;
            if(var3) { _fun0004_ip = 257; continue _fun0004 }
 242:
            var6 = _closure1_slot17;
            var6 = var6.bind(var4)(var8);
            var16 = var7 - var6;
            _fun0004_ip = 270; continue _fun0004;
 257:
            var6 = _closure1_slot18;
            var6 = var6.bind(var4)(var8);
            var16 = var7 - var6;
 270:
            var6 = {};
            var6['controlMaxHeight'] = var21;
            var6['isLandscapeMode'] = var3;
            var7 = _closure1_slot17;
            var7 = var7.bind(var4)(var8);
            var7 = var7 + var9;
            var6['portraitOffsetY'] = var7;
            var7 = _closure1_slot18;
            var7 = var7.bind(var4)(var8);
            var6['landscapeOffsetY'] = var7;
            var7 = function onClose() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var3 = _closure2_slot1;
                    var1 = null;
                    var4 = var1 == var3;
                    var3 = undefined;
                    var1 = undefined;
                    if(var4) { _fun0005_ip = 28; continue _fun0005 }
 20:
                    var2 = _closure2_slot1;
                    var1 = var2.bind(var3)();
 28:
                    return var1;
                }
            };
            var6['onClose'] = var7;
            var6['onOpen'] = var5;
            var5 = function useDrawerGesture(arg1) {
                var2 = arg1;
                var19 = var2.controlMaxHeight;
                var _closure3_slot0 = var19;
                var20 = var2.isLandscapeMode;
                var _closure3_slot1 = var20;
                var17 = var2.portraitOffsetY;
                var _closure3_slot2 = var17;
                var18 = var2.landscapeOffsetY;
                var _closure3_slot3 = var18;
                var3 = var2.onClose;
                var _closure3_slot4 = var3;
                var2 = var2.onOpen;
                var _closure3_slot5 = var2;
                var12 = undefined;
                var _closure3_slot6 = var12;
                var _closure3_slot7 = var12;
                var _closure3_slot13 = var12;
                var14 = function handleOpen() {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                        var2 = _closure3_slot6;
                        if(var2) { _fun0006_ip = 43; continue _fun0006 }
 10:
                        var3 = _closure3_slot5;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0006_ip = 30; continue _fun0006 }
 20:
                        var3 = _closure3_slot5;
                        var2 = undefined;
                        var2 = var3.bind(var2)();
 30:
                        var3 = _closure3_slot7;
                        var2 = undefined;
                        var1 = true;
                        var1 = var3.bind(var2)(var1);
 43:
                        var1 = undefined;
                        return var1;
                    }
                };
                var _closure3_slot14 = var14;
                var9 = function handleClose() {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                        var2 = _closure3_slot6;
                        if(!var2) { _fun0007_ip = 51; continue _fun0007 }
 10:
                        var3 = _closure3_slot4;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0007_ip = 30; continue _fun0007 }
 20:
                        var3 = _closure3_slot4;
                        var2 = undefined;
                        var2 = var3.bind(var2)();
 30:
                        var4 = _closure3_slot7;
                        var2 = undefined;
                        var3 = false;
                        var3 = var4.bind(var2)(var3);
                        var1 = _closure3_slot13;
                        var1 = var1.bind(var2)();
 51:
                        var1 = undefined;
                        return var1;
                    }
                };
                var _closure3_slot15 = var9;
                var3 = _closure1_slot4;
                var2 = var3.useState;
                var6 = false;
                var4 = var2.bind(var3)(var6);
                var3 = _closure1_slot3;
                var2 = 2;
                var4 = var3.bind(var12)(var4, var2);
                var16 = 0;
                var2 = var4[var16];
                _closure3_slot6 = var2;
                var3 = 1;
                var3 = var4[var3];
                _closure3_slot7 = var3;
                var11 = _closure1_slot0;
                var13 = _closure1_slot2;
                var15 = 13;
                var3 = var13[var15];
                var4 = var11.bind(var12)(var3);
                var3 = var4.useSharedValue;
                var5 = var3.bind(var4)(var16);
                var _closure3_slot8 = var5;
                var3 = var13[var15];
                var8 = var11.bind(var12)(var3);
                var4 = var8.useDerivedValue;
                var3 = function h() {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                        var1 = _closure3_slot1;
                        var3 = _closure3_slot0;
                        if(var1) { _fun0008_ip = 24; continue _fun0008 }
 14:
                        var1 = _closure3_slot2;
                        var1 = var3 - var1;
                        _fun0008_ip = 32; continue _fun0008;
 24:
                        var2 = _closure3_slot3;
                        var1 = var3 - var2;
 32:
                        return var1;
                    }
                };
                var10 = {};
                var10['isLandscapeMode'] = var20;
                var10['controlMaxHeight'] = var19;
                var10['landscapeOffsetY'] = var18;
                var10['portraitOffsetY'] = var17;
                var3['__closure'] = var10;
                var10 = 13346503100323.0;
                var3['__workletHash'] = var10;
                var10 = _closure1_slot25;
                var3['__initData'] = var10;
                var18 = var4.bind(var8)(var3);
                var _closure3_slot9 = var18;
                var3 = var13[var15];
                var4 = var11.bind(var12)(var3);
                var3 = var4.useSharedValue;
                var10 = var3.bind(var4)(var16);
                var _closure3_slot10 = var10;
                var3 = var13[var15];
                var4 = var11.bind(var12)(var3);
                var3 = var4.useSharedValue;
                var19 = var3.bind(var4)(var6);
                var _closure3_slot11 = var19;
                var3 = var13[var15];
                var4 = var11.bind(var12)(var3);
                var3 = var4.useSharedValue;
                var17 = var3.bind(var4)(var16);
                var _closure3_slot12 = var17;
                var8 = _closure1_slot4;
                var6 = var8.useCallback;
                var4 = function() {
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 19;
                    var2 = var6[var1];
                    var1 = undefined;
                    var4 = var5.bind(var1)(var2);
                    var3 = var4.UNSAFE_markDismissibleContentAsDismissed;
                    var2 = 20;
                    var2 = var6[var2];
                    var2 = var5.bind(var1)(var2);
                    var2 = var2.DismissibleContent;
                    var2 = var2.SOUNDBOARD_MOBILE_NEW_BADGE;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var3 = new Array(0);
                var3 = var6.bind(var8)(var4, var3);
                _closure3_slot13 = var3;
                var8 = _closure1_slot4;
                var6 = var8.useCallback;
                var4 = new Array(3);
                var4[0] = var5;
                var4[1] = var18;
                var4[2] = var3;
                var3 = function() {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                        var2 = _closure3_slot8;
                        var1 = var2.get;
                        var1 = var1.bind(var2)();
                        var10 = 0;
                        var2 = var10 !== var1;
                        if(var2) { _fun0009_ip = 41; continue _fun0009 }
 25:
                        var4 = _closure3_slot9;
                        var1 = var4.get;
                        var1 = var1.bind(var4)();
                        var10 = -var1;
 41:
                        var7 = _closure3_slot8;
                        var6 = var7.set;
                        var8 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var1 = 21;
                        var5 = var5[var1];
                        var1 = undefined;
                        var9 = var8.bind(var1)(var5);
                        var8 = var9.withTiming;
                        var5 = _closure1_slot20;
                        var5 = var8.bind(var9)(var10, var5);
                        var5 = var6.bind(var7)(var5);
                        if(var2) { _fun0009_ip = 108; continue _fun0009 }
 98:
                        var5 = _closure1_slot9;
                        var5 = var5.bind(var1)();
                        _fun0009_ip = 124; continue _fun0009;
 108:
                        var4 = _closure1_slot10;
                        var4 = var4.bind(var1)();
                        var4 = _closure3_slot13;
                        var4 = var4.bind(var1)();
 124:
                        var3 = _closure3_slot7;
                        var2 = !var2;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    }
                };
                var3 = var6.bind(var8)(var3, var4);
                var4 = 22;
                var4 = var13[var4];
                var4 = var11.bind(var12)(var4);
                var6 = var4.Gesture;
                var4 = var6.Pan;
                var8 = var4.bind(var6)();
                var6 = var8.onStart;
                var4 = function b() {
                    _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 13;
                        var3 = var3[var1];
                        var1 = undefined;
                        var4 = var4.bind(var1)(var3);
                        var3 = var4.runOnJS;
                        var2 = _closure1_slot9;
                        var2 = var3.bind(var4)(var2);
                        var2 = var2.bind(var1)();
                        var7 = _closure3_slot11;
                        var6 = var7.set;
                        var5 = _closure3_slot8;
                        var3 = var5.get;
                        var3 = var3.bind(var5)();
                        var4 = 0;
                        var3 = var4 !== var3;
                        var3 = var6.bind(var7)(var3);
                        var6 = _closure3_slot12;
                        var3 = var6.set;
                        var3 = var3.bind(var6)(var4);
                        var3 = var5.get;
                        var5 = var3.bind(var5)();
                        var3 = null;
                        var3 = var3 != var5;
                        if(!var3) { _fun0010_ip = 124; continue _fun0010 }
 111:
                        var6 = _closure3_slot11;
                        var5 = var6.get;
                        var3 = var5.bind(var6)();
 124:
                        if(var3) { _fun0010_ip = 141; continue _fun0010 }
 127:
                        var3 = _closure3_slot10;
                        var2 = var3.set;
                        var2 = var2.bind(var3)(var4);
 141:
                        return var1;
                    }
                };
                var20 = {};
                var21 = var13[var15];
                var21 = var11.bind(var12)(var21);
                var21 = var21.runOnJS;
                var20['runOnJS'] = var21;
                var21 = _closure1_slot9;
                var20['clearFocusTimer'] = var21;
                var20['drawerOpen'] = var19;
                var20['positionY'] = var5;
                var20['CLOSE_DRAWER_POSITION'] = var16;
                var20['velocity'] = var17;
                var20['startY'] = var10;
                var4['__closure'] = var20;
                var20 = 9674965708496.0;
                var4['__workletHash'] = var20;
                var20 = _closure1_slot28;
                var4['__initData'] = var20;
                var8 = var6.bind(var8)(var4);
                var6 = var8.onUpdate;
                var4 = function N(arg1) {
                    _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                        var1 = arg1;
                        var5 = _closure3_slot12;
                        var3 = var5.set;
                        var2 = var1.velocityY;
                        var2 = var3.bind(var5)(var2);
                        var3 = _closure3_slot8;
                        var2 = var3.get;
                        var3 = var2.bind(var3)();
                        var2 = -1;
                        var3 = var2 * var3;
                        var5 = _closure3_slot9;
                        var2 = var5.get;
                        var5 = var2.bind(var5)();
                        var2 = 16;
                        var2 = var5 + var2;
                        if(!(!(var3 > var2))) { _fun0011_ip = 124; continue _fun0011 }
 73:
                        var3 = _closure3_slot8;
                        var2 = var3.set;
                        var5 = _closure3_slot10;
                        var4 = var5.get;
                        var5 = var4.bind(var5)();
                        var4 = null;
                        var6 = var4 != var5;
                        var4 = 0;
                        if(!var6) { _fun0011_ip = 109; continue _fun0011 }
 106:
                        var4 = var5;
 109:
                        var1 = var1.translationY;
                        var1 = var4 + var1;
                        var1 = var2.bind(var3)(var1);
 124:
                        var1 = undefined;
                        return var1;
                    }
                };
                var20 = {};
                var20['velocity'] = var17;
                var20['positionY'] = var5;
                var20['maxHeight'] = var18;
                var20['startY'] = var10;
                var4['__closure'] = var20;
                var20 = 16755118181071.0;
                var4['__workletHash'] = var20;
                var20 = _closure1_slot27;
                var4['__initData'] = var20;
                var6 = var6.bind(var8)(var4);
                var4 = var6.onEnd;
                var1 = function H() {
                    _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                        var3 = function openDrawer() {
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var3 = 13;
                            var6 = var5[var3];
                            var1 = undefined;
                            var9 = var4.bind(var1)(var6);
                            var8 = var9.runOnJS;
                            var7 = _closure3_slot14;
                            var7 = var8.bind(var9)(var7);
                            var7 = var7.bind(var1)();
                            var10 = _closure3_slot10;
                            var8 = var10.set;
                            var9 = _closure3_slot9;
                            var7 = var9.get;
                            var7 = var7.bind(var9)();
                            var7 = -var7;
                            var7 = var8.bind(var10)(var7);
                            var9 = _closure3_slot8;
                            var8 = var9.set;
                            var7 = 21;
                            var7 = var5[var7];
                            var12 = var4.bind(var1)(var7);
                            var11 = var12.withTiming;
                            var7 = var10.get;
                            var10 = var7.bind(var10)();
                            var7 = _closure1_slot20;
                            var7 = var11.bind(var12)(var10, var7);
                            var7 = var8.bind(var9)(var7);
                            var8 = _closure3_slot11;
                            var7 = var8.set;
                            var6 = true;
                            var6 = var7.bind(var8)(var6);
                            var3 = var5[var3];
                            var6 = var4.bind(var1)(var3);
                            var3 = var6.runOnJS;
                            var7 = _closure1_slot1;
                            var2 = 23;
                            var2 = var5[var2];
                            var2 = var7.bind(var1)(var2);
                            var2 = var2.acknowledgeTooltip;
                            var3 = var3.bind(var6)(var2);
                            var2 = 15;
                            var2 = var5[var2];
                            var2 = var4.bind(var1)(var2);
                            var2 = var2.TooltipNames;
                            var2 = var2.SCREENSHARE_SWIPE_UP_CONTROLS;
                            var2 = var3.bind(var1)(var2);
                            return var1;
                        };
                        var2 = function closeDrawer() {
                            var3 = _closure3_slot10;
                            var1 = var3.set;
                            var11 = 0;
                            var1 = var1.bind(var3)(var11);
                            var8 = _closure3_slot8;
                            var7 = var8.set;
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var1 = 21;
                            var3 = var5[var1];
                            var1 = undefined;
                            var10 = var4.bind(var1)(var3);
                            var9 = var10.withTiming;
                            var3 = _closure1_slot21;
                            var3 = var9.bind(var10)(var11, var3);
                            var3 = var7.bind(var8)(var3);
                            var8 = _closure3_slot11;
                            var7 = var8.set;
                            var3 = false;
                            var3 = var7.bind(var8)(var3);
                            var3 = 13;
                            var7 = var5[var3];
                            var8 = var4.bind(var1)(var7);
                            var7 = var8.runOnJS;
                            var6 = _closure1_slot10;
                            var6 = var7.bind(var8)(var6);
                            var6 = var6.bind(var1)();
                            var3 = var5[var3];
                            var4 = var4.bind(var1)(var3);
                            var3 = var4.runOnJS;
                            var2 = _closure3_slot15;
                            var2 = var3.bind(var4)(var2);
                            var2 = var2.bind(var1)();
                            return var1;
                        };
                        var4 = _closure3_slot11;
                        var1 = var4.get;
                        var1 = var1.bind(var4)();
                        var5 = _closure3_slot8;
                        var4 = var5.get;
                        var4 = var4.bind(var5)();
                        var8 = -1;
                        var5 = var8 * var4;
                        var7 = _closure3_slot9;
                        var4 = var7.get;
                        var7 = var4.bind(var7)();
                        var4 = 2;
                        var4 = var7 / var4;
                        var4 = var5 >= var4;
                        var7 = _closure3_slot12;
                        var5 = var7.get;
                        var10 = var5.bind(var7)();
                        var5 = null;
                        var11 = var5 != var10;
                        var9 = 0;
                        var7 = 0;
                        if(!var11) { _fun0012_ip = 108; continue _fun0012 }
 105:
                        var7 = var10;
 108:
                        var8 = var8 * var7;
                        var10 = _closure3_slot12;
                        var7 = var10.get;
                        var7 = var7.bind(var10)();
                        var10 = var5 != var7;
                        var5 = 0;
                        if(!var10) { _fun0012_ip = 137; continue _fun0012 }
 134:
                        var5 = var7;
 137:
                        var7 = 500;
                        var5 = var5 >= var7;
                        var10 = _closure3_slot8;
                        var6 = var10.get;
                        var6 = var6.bind(var10)();
                        var6 = var6 > var9;
                        if(!(var8 >= var7)) { _fun0012_ip = 171; continue _fun0012 }
 168:
                        if(!var1) { _fun0012_ip = 177; continue _fun0012 }
 171:
                        if(!var4) { _fun0012_ip = 185; continue _fun0012 }
 174:
                        if(var1) { _fun0012_ip = 185; continue _fun0012 }
 177:
                        var7 = undefined;
                        var7 = var3.bind(var7)();
                        _fun0012_ip = 217; continue _fun0012;
 185:
                        if(var6) { _fun0012_ip = 211; continue _fun0012 }
 188:
                        if(!var5) { _fun0012_ip = 194; continue _fun0012 }
 191:
                        if(var1) { _fun0012_ip = 211; continue _fun0012 }
 194:
                        var1 = undefined;
                        if(var4) { _fun0012_ip = 205; continue _fun0012 }
 199:
                        var4 = var2.bind(var1)();
                        _fun0012_ip = 217; continue _fun0012;
 205:
                        var1 = var3.bind(var1)();
                        _fun0012_ip = 217; continue _fun0012;
 211:
                        var1 = undefined;
                        var1 = var2.bind(var1)();
 217:
                        var1 = undefined;
                        return var1;
                    }
                };
                var8 = {};
                var8['drawerOpen'] = var19;
                var8['positionY'] = var5;
                var8['maxHeight'] = var18;
                var8['velocity'] = var17;
                var17 = 500;
                var8['MIN_GESTURE_TRIGGER_VELOCITY'] = var17;
                var8['CLOSE_DRAWER_POSITION'] = var16;
                var15 = var13[var15];
                var15 = var11.bind(var12)(var15);
                var15 = var15.runOnJS;
                var8['runOnJS'] = var15;
                var8['handleOpen'] = var14;
                var8['startY'] = var10;
                var10 = 21;
                var10 = var13[var10];
                var10 = var11.bind(var12)(var10);
                var10 = var10.withTiming;
                var8['withTiming'] = var10;
                var10 = _closure1_slot20;
                var8['TIMING_CONFIG'] = var10;
                var14 = _closure1_slot1;
                var10 = 23;
                var10 = var13[var10];
                var10 = var14.bind(var12)(var10);
                var8['TooltipActionCreators'] = var10;
                var10 = 15;
                var10 = var13[var10];
                var10 = var11.bind(var12)(var10);
                var10 = var10.TooltipNames;
                var8['TooltipNames'] = var10;
                var10 = _closure1_slot21;
                var8['TIMING_CONFIG_EXIT'] = var10;
                var10 = _closure1_slot10;
                var8['resetFocusTimer'] = var10;
                var8['handleClose'] = var9;
                var1['__closure'] = var8;
                var8 = 6790759206787.0;
                var1['__workletHash'] = var8;
                var7 = _closure1_slot26;
                var1['__initData'] = var7;
                var4 = var4.bind(var6)(var1);
                var1 = new Array(4);
                var1[0] = var5;
                var1[1] = var4;
                var1[2] = var3;
                var1[3] = var2;
                return var1;
            };
            var7 = var5.bind(var4)(var6);
            var6 = _closure1_slot3;
            var5 = 4;
            var6 = var6.bind(var4)(var7, var5);
            var5 = 0;
            var15 = var6[var5];
            _closure2_slot8 = var15;
            var5 = 1;
            var9 = var6[var5];
            var5 = 2;
            var23 = var6[var5];
            _closure2_slot9 = var23;
            var5 = 3;
            var20 = var6[var5];
            var26 = _closure1_slot0;
            var28 = _closure1_slot2;
            var8 = 13;
            var5 = var28[var8];
            var7 = var26.bind(var4)(var5);
            var6 = var7.useAnimatedStyle;
            var5 = function E() {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                    var1 = _closure2_slot0;
                    var6 = 0;
                    if(var1) { _fun0013_ip = 16; continue _fun0013 }
 12:
                    var6 = _closure2_slot6;
 16:
                    var1 = {'position': 'absolute', 'height': null, 'overflow': 'hidden'};
                    var4 = _closure2_slot5;
                    var1['height'] = var4;
                    var5 = _closure2_slot3;
                    var4 = 0;
                    if(!var5) { _fun0013_ip = 52; continue _fun0013 }
 49:
                    var4 = 16;
 52:
                    var1['bottom'] = var4;
                    var5 = _closure2_slot3;
                    var4 = 0;
                    if(!var5) { _fun0013_ip = 76; continue _fun0013 }
 65:
                    var7 = _closure2_slot2;
                    var5 = 16;
                    var4 = var5 + var7;
 76:
                    var1['right'] = var4;
                    var4 = _closure2_slot3;
                    var3 = 0;
                    if(!var4) { _fun0013_ip = 92; continue _fun0013 }
 89:
                    var3 = 8;
 92:
                    var1['borderRadius'] = var3;
                    var2 = _closure2_slot4;
                    var1['width'] = var2;
                    var3 = {};
                    var7 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var4 = 21;
                    var5 = var5[var4];
                    var4 = undefined;
                    var5 = var7.bind(var4)(var5);
                    var4 = var5.withTiming;
                    var2 = _closure1_slot20;
                    var2 = var4.bind(var5)(var6, var2);
                    var3['translateY'] = var2;
                    var2 = new Array(1);
                    var2[0] = var3;
                    var1['transform'] = var2;
                    return var1;
                }
            };
            var11 = {};
            var11['reveal'] = var2;
            var11['controlHeightWithOffset'] = var19;
            var11['sheetHeight'] = var10;
            var11['isLandscapeMode'] = var3;
            var11['safeAreaRight'] = var18;
            var11['sheetWidth'] = var14;
            var14 = 21;
            var14 = var28[var14];
            var14 = var26.bind(var4)(var14);
            var14 = var14.withTiming;
            var11['withTiming'] = var14;
            var14 = _closure1_slot20;
            var11['TIMING_CONFIG'] = var14;
            var5['__closure'] = var11;
            var11 = 608185354082.0;
            var5['__workletHash'] = var11;
            var11 = _closure1_slot29;
            var5['__initData'] = var11;
            var5 = var6.bind(var7)(var5);
            var11 = _closure1_slot4;
            var7 = var11.useEffect;
            var6 = new Array(2);
            var6[0] = var3;
            var6[1] = var15;
            var3 = function() {
                var4 = _closure2_slot8;
                var3 = var4.set;
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 21;
                var5 = var5[var1];
                var1 = undefined;
                var7 = var6.bind(var1)(var5);
                var6 = var7.withTiming;
                var5 = _closure1_slot21;
                var2 = 0;
                var2 = var6.bind(var7)(var2, var5);
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var3 = var7.bind(var11)(var3, var6);
            var7 = _closure1_slot4;
            var6 = var7.useEffect;
            var3 = new Array(2);
            var3[0] = var2;
            var3[1] = var15;
            var2 = function() {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                    var2 = _closure2_slot0;
                    if(!var2) { _fun0014_ip = 26; continue _fun0014 }
 10:
                    var3 = _closure2_slot8;
                    var2 = var3.set;
                    var1 = 0;
                    var1 = var2.bind(var3)(var1);
 26:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var6.bind(var7)(var2, var3);
            var7 = _closure1_slot4;
            var6 = var7.useEffect;
            var3 = new Array(1);
            var3[0] = var15;
            var2 = function() {
                var5 = function handleSelectActivity() {
                    var4 = _closure2_slot8;
                    var3 = var4.set;
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var1 = 21;
                    var5 = var5[var1];
                    var1 = undefined;
                    var7 = var6.bind(var1)(var5);
                    var6 = var7.withTiming;
                    var5 = _closure1_slot21;
                    var2 = 0;
                    var2 = var6.bind(var7)(var2, var5);
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var _closure3_slot0 = var5;
                var6 = _closure1_slot0;
                var4 = _closure1_slot2;
                var3 = 25;
                var4 = var4[var3];
                var3 = undefined;
                var3 = var6.bind(var3)(var4);
                var4 = var3.ComponentDispatch;
                var3 = var4.subscribe;
                var2 = _closure1_slot13;
                var2 = var2.SELECT_ACTIVITY;
                var2 = var3.bind(var4)(var2, var5);
                var1 = function() {
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 25;
                    var3 = var3[var1];
                    var1 = undefined;
                    var3 = var4.bind(var1)(var3);
                    var5 = var3.ComponentDispatch;
                    var4 = var5.unsubscribe;
                    var2 = _closure1_slot13;
                    var3 = var2.SELECT_ACTIVITY;
                    var2 = _closure3_slot0;
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                };
                return var1;
            };
            var2 = var6.bind(var7)(var2, var3);
            var2 = var28[var8];
            var6 = var26.bind(var4)(var2);
            var3 = var6.useAnimatedStyle;
            var2 = function ee() {
                var1 = {};
                var3 = _closure2_slot5;
                var1['height'] = var3;
                var3 = {};
                var4 = _closure2_slot7;
                var5 = _closure2_slot8;
                var2 = var5.get;
                var2 = var2.bind(var5)();
                var2 = var4 + var2;
                var3['translateY'] = var2;
                var2 = new Array(1);
                var2[0] = var3;
                var1['transform'] = var2;
                return var1;
            };
            var7 = {};
            var7['sheetHeight'] = var10;
            var7['offsetY'] = var21;
            var7['positionY'] = var15;
            var2['__closure'] = var7;
            var7 = 4471821639301.0;
            var2['__workletHash'] = var7;
            var7 = _closure1_slot30;
            var2['__initData'] = var7;
            var18 = var3.bind(var6)(var2);
            var6 = _closure1_slot4;
            var3 = var6.useEffect;
            var2 = new Array(1);
            var2[0] = var23;
            var1 = function() {
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 25;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
                var4 = var2.ComponentDispatch;
                var3 = var4.subscribe;
                var1 = _closure1_slot13;
                var2 = var1.TOGGLE_CALL_CONTROL_DRAWER;
                var1 = _closure2_slot9;
                var1 = var3.bind(var4)(var2, var1);
                var1 = function() {
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 25;
                    var3 = var3[var1];
                    var1 = undefined;
                    var3 = var4.bind(var1)(var3);
                    var5 = var3.ComponentDispatch;
                    var4 = var5.unsubscribe;
                    var2 = _closure1_slot13;
                    var3 = var2.TOGGLE_CALL_CONTROL_DRAWER;
                    var2 = _closure2_slot9;
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                };
                return var1;
            };
            var1 = var3.bind(var6)(var1, var2);
            var1 = 26;
            var1 = var28[var1];
            var2 = var26.bind(var4)(var1);
            var1 = var2.useThemeContext;
            var1 = var1.bind(var2)();
            var27 = var1.theme;
            var3 = _closure1_slot14;
            var14 = _closure1_slot1;
            var1 = var28[var8];
            var1 = var14.bind(var4)(var1);
            var2 = var1.View;
            var1 = {};
            var1['style'] = var5;
            var5 = 'box-none';
            var1['pointerEvents'] = var5;
            var7 = _closure1_slot14;
            var5 = 22;
            var5 = var28[var5];
            var5 = var26.bind(var4)(var5);
            var6 = var5.GestureDetector;
            var5 = {};
            var5['gesture'] = var9;
            var10 = _closure1_slot15;
            var8 = var28[var8];
            var8 = var14.bind(var4)(var8);
            var9 = var8.View;
            var8 = {};
            var19 = var25.bottomDrawerContainer;
            var11 = new Array(2);
            var11[0] = var19;
            var11[1] = var18;
            var8['style'] = var11;
            var18 = _closure1_slot14;
            var11 = 27;
            var11 = var28[var11];
            var14 = var14.bind(var4)(var11);
            var11 = {};
            var11['blurTheme'] = var27;
            var24 = var25.visualEffectView;
            var19 = new Array(2);
            var19[0] = var24;
            var24 = 28;
            var24 = var28[var24];
            var26 = var26.bind(var4)(var24);
            var24 = var26.isThemeLight;
            var26 = var24.bind(var26)(var27);
            var24 = null;
            if(!var26) { _fun0004_ip = 939; continue _fun0004 }
 933:
            var24 = var25.visualEffectViewBackground;
 939:
            var19[1] = var24;
            var11['style'] = var19;
            var14 = var18.bind(var4)(var14, var11);
            var11 = new Array(4);
            var11[0] = var14;
            var19 = _closure1_slot14;
            var18 = _closure1_slot33;
            var14 = {};
            var14['onPressHeader'] = var23;
            var14['aboveActionBar'] = var22;
            var14['positionY'] = var15;
            var14['offsetY'] = var21;
            var14['isExpanded'] = var20;
            var14 = var19.bind(var4)(var18, var14);
            var11[1] = var14;
            var11[2] = var13;
            var14 = _closure1_slot14;
            var13 = _closure1_slot31;
            var12 = {};
            var12['expandedControls'] = var17;
            var12['availableHeight'] = var16;
            var12['positionY'] = var15;
            var12 = var14.bind(var4)(var13, var12);
            var11[3] = var12;
            var8['children'] = var11;
            var8 = var10.bind(var4)(var9, var8);
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot34 = var2;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var11 = true;
    var5['value'] = var11;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var13.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var8 = var7[var5];
    var5 = metroImportAll;
    var5 = var5.bind(var1)(var8);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.View;
    var _closure1_slot5 = var8;
    var8 = var5.useWindowDimensions;
    var _closure1_slot6 = var8;
    var15 = var5.StyleSheet;
    var8 = var5.TouchableWithoutFeedback;
    var _closure1_slot7 = var8;
    var5 = var5.ScrollView;
    var _closure1_slot8 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.clearFocusTimer;
    var _closure1_slot9 = var8;
    var5 = var5.resetFocusTimer;
    var _closure1_slot10 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.BOX_MODE_THRESHOLD_WIDTH;
    var _closure1_slot11 = var8;
    var5 = var5.BOX_MODE_ACTIONSHEET_HEIGHT;
    var _closure1_slot12 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.ComponentActions;
    var _closure1_slot13 = var8;
    var14 = var5.Fonts;
    var5 = 6;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.jsx;
    var _closure1_slot14 = var8;
    var5 = var5.jsxs;
    var _closure1_slot15 = var5;
    var5 = 20;
    var _closure1_slot16 = var5;
    var5 = function EXTENDED_CONTROLS_OFFSET_Y(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
            var2 = arg1;
            var1 = 54;
            var2 = var2 + var1;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 7;
            var3 = var3[var1];
            var1 = undefined;
            var3 = var4.bind(var1)(var3);
            var1 = var3.isIOS;
            var3 = var1.bind(var3)();
            var1 = 16;
            if(!var3) { _fun0015_ip = 54; continue _fun0015 }
 51:
            var1 = 48;
 54:
            var1 = var2 + var1;
            return var1;
        }
    };
    var _closure1_slot17 = var5;
    var5 = function EXTENDED_CONTROLS_LANDSCAPE_OFFSET_Y(arg1) {
        var2 = arg1;
        var1 = 54;
        var2 = var2 + var1;
        var1 = 12;
        var1 = var2 + var1;
        return var1;
    };
    var _closure1_slot18 = var5;
    var5 = 8;
    var5 = var7[var5];
    var9 = var6.bind(var1)(var5);
    var8 = var9.createStyles;
    var5 = {};
    var10 = {'position': 'absolute', 'left': 0, 'right': 0, 'bottom': 0};
    var12 = 9;
    var16 = var7[var12];
    var16 = var13.bind(var1)(var16);
    var16 = var16.radii;
    var16 = var16.sm;
    var10['borderRadius'] = var16;
    var5['bottomDrawerContainer'] = var10;
    var10 = {};
    var19 = var15.absoluteFillObject;
    var20 = var10;
    var15 = copyDataProperties(var20, var19);
    var15 = var7[var12];
    var15 = var13.bind(var1)(var15);
    var15 = var15.radii;
    var16 = var15.sm;
    var15 = 'borderRadius';
    var10[var15] = var16;
    var16 = 'hidden';
    var15 = 'overflow';
    var10[var15] = var16;
    var5['visualEffectView'] = var10;
    var10 = {};
    var15 = 'rgba(0, 0, 0, .15)';
    var10['backgroundColor'] = var15;
    var5['visualEffectViewBackground'] = var10;
    var10 = {};
    var15 = 16;
    var10['marginHorizontal'] = var15;
    var5['expandedControlsContainer'] = var10;
    var10 = {'position': 'absolute', 'left': 0, 'right': 0, 'top': 4294967264, 'paddingTop': 4, 'paddingBottom': 8};
    var5['aboveActionBarContainer'] = var10;
    var10 = {'position': 'absolute', 'left': 16, 'right': 16, 'top': 4294967232};
    var5['aboveActionBarChildrenContainer'] = var10;
    var10 = {'margin': 0, 'marginHorizontal': 16, 'marginBottom': 8};
    var5['ptbButton'] = var10;
    var10 = {'alignSelf': 'center', 'position': 'absolute', 'top': 4294967268};
    var5['tooltipStyle'] = var10;
    var10 = {'paddingHorizontal': 8, 'paddingVertical': 4};
    var5['containerStyle'] = var10;
    var10 = {};
    var15 = 10;
    var15 = var7[var15];
    var15 = var13.bind(var1)(var15);
    var14 = var14.DISPLAY_EXTRABOLD;
    var12 = var7[var12];
    var12 = var13.bind(var1)(var12);
    var12 = var12.unsafe_rawColors;
    var19 = var12.WHITE_500;
    var12 = {};
    var12['uppercase'] = var11;
    var18 = 12;
    var21 = undefined;
    var20 = var14;
    var17 = var12;
    var19 = var21[var15](var20, var19, var18, var17, var16);
    var20 = var10;
    var11 = copyDataProperties(var20, var19);
    var5['labelStyle'] = var10;
    var5 = var8.bind(var9)(var5);
    var _closure1_slot19 = var5;
    var5 = {};
    var8 = 11;
    var9 = var7[var8];
    var9 = var6.bind(var1)(var9);
    var9 = var9.STANDARD_EASING;
    var5['easing'] = var9;
    var9 = 250;
    var5['duration'] = var9;
    var _closure1_slot20 = var5;
    var5 = {};
    var8 = var7[var8];
    var8 = var6.bind(var1)(var8);
    var8 = var8.STANDARD_EASING;
    var5['easing'] = var8;
    var8 = 400;
    var5['duration'] = var8;
    var _closure1_slot21 = var5;
    var5 = {};
    var8 = "function FocusedControlsBottomControlsTsx1(){const{positionY,EXPANDED_DRAWER_SHOW_POSITION}=this.__closure;const opacity=Math.min(positionY.get()*-1/EXPANDED_DRAWER_SHOW_POSITION,1);return{opacity:opacity,pointerEvents:opacity===0?'none':'auto'};}";
    var5['code'] = var8;
    var _closure1_slot22 = var5;
    var5 = {};
    var8 = 'function FocusedControlsBottomControlsTsx2(){const{positionY,EXPANDED_DRAWER_SHOW_POSITION}=this.__closure;return{opacity:1-Math.min(positionY.get()*-1/EXPANDED_DRAWER_SHOW_POSITION,1)};}';
    var5['code'] = var8;
    var _closure1_slot23 = var5;
    var5 = {};
    var8 = 'function FocusedControlsBottomControlsTsx3(){const{offsetY,EXPANDED_DRAWER_SHOW_POSITION,positionY}=this.__closure;const maxHeightRange=offsetY/3-EXPANDED_DRAWER_SHOW_POSITION;const opacity=2-Math.max(Math.abs(positionY.get())/maxHeightRange,0);return{opacity:opacity};}';
    var5['code'] = var8;
    var _closure1_slot24 = var5;
    var5 = {};
    var8 = 'function FocusedControlsBottomControlsTsx4(){const{isLandscapeMode,controlMaxHeight,landscapeOffsetY,portraitOffsetY}=this.__closure;return isLandscapeMode?controlMaxHeight-landscapeOffsetY:controlMaxHeight-portraitOffsetY;}';
    var5['code'] = var8;
    var _closure1_slot25 = var5;
    var5 = {};
    var8 = 'function FocusedControlsBottomControlsTsx5(){const{drawerOpen,positionY,maxHeight,velocity,MIN_GESTURE_TRIGGER_VELOCITY,CLOSE_DRAWER_POSITION,runOnJS,handleOpen,startY,withTiming,TIMING_CONFIG,TooltipActionCreators,TooltipNames,TIMING_CONFIG_EXIT,resetFocusTimer,handleClose}=this.__closure;var _velocity$get,_velocity$get2;const isDrawerAlreadyOpen=drawerOpen.get();const isPassedTriggerThreshold=positionY.get()*-1>=maxHeight.get()/2;const isHighOpenVelocity=((_velocity$get=velocity.get())!==null&&_velocity$get!==void 0?_velocity$get:0)*-1>=MIN_GESTURE_TRIGGER_VELOCITY;const isHighCloseVelocity=((_velocity$get2=velocity.get())!==null&&_velocity$get2!==void 0?_velocity$get2:0)>=MIN_GESTURE_TRIGGER_VELOCITY;const isLowerThanMinHeight=positionY.get()>CLOSE_DRAWER_POSITION;function openDrawer(){runOnJS(handleOpen)();startY.set(-maxHeight.get());positionY.set(withTiming(startY.get(),TIMING_CONFIG));drawerOpen.set(true);runOnJS(TooltipActionCreators.acknowledgeTooltip)(TooltipNames.SCREENSHARE_SWIPE_UP_CONTROLS);}function closeDrawer(){startY.set(0);positionY.set(withTiming(CLOSE_DRAWER_POSITION,TIMING_CONFIG_EXIT));drawerOpen.set(false);runOnJS(resetFocusTimer)();runOnJS(handleClose)();}if(isHighOpenVelocity&&!isDrawerAlreadyOpen||isPassedTriggerThreshold&&!isDrawerAlreadyOpen){openDrawer();}else if(isLowerThanMinHeight||isHighCloseVelocity&&isDrawerAlreadyOpen){closeDrawer();}else if(isPassedTriggerThreshold){openDrawer();}else{closeDrawer();}}';
    var5['code'] = var8;
    var _closure1_slot26 = var5;
    var5 = {};
    var8 = 'function FocusedControlsBottomControlsTsx6(event){const{velocity,positionY,maxHeight,startY}=this.__closure;var _startY$get;velocity.set(event.velocityY);if(positionY.get()*-1>maxHeight.get()+16){return;}positionY.set(((_startY$get=startY.get())!==null&&_startY$get!==void 0?_startY$get:0)+event.translationY);}';
    var5['code'] = var8;
    var _closure1_slot27 = var5;
    var5 = {};
    var8 = 'function FocusedControlsBottomControlsTsx7(){const{runOnJS,clearFocusTimer,drawerOpen,positionY,CLOSE_DRAWER_POSITION,velocity,startY}=this.__closure;runOnJS(clearFocusTimer)();drawerOpen.set(positionY.get()!==CLOSE_DRAWER_POSITION);velocity.set(0);if(positionY.get()==null||!drawerOpen.get()){startY.set(0);}}';
    var5['code'] = var8;
    var _closure1_slot28 = var5;
    var5 = {};
    var8 = "function FocusedControlsBottomControlsTsx8(){const{reveal,controlHeightWithOffset,sheetHeight,isLandscapeMode,safeAreaRight,sheetWidth,withTiming,TIMING_CONFIG}=this.__closure;const revealOffset=reveal?0:controlHeightWithOffset;return{position:'absolute',height:sheetHeight,overflow:'hidden',bottom:isLandscapeMode?16:0,right:isLandscapeMode?16+safeAreaRight:0,borderRadius:isLandscapeMode?8:0,width:sheetWidth,transform:[{translateY:withTiming(revealOffset,TIMING_CONFIG)}]};}";
    var5['code'] = var8;
    var _closure1_slot29 = var5;
    var5 = {};
    var8 = 'function FocusedControlsBottomControlsTsx9(){const{sheetHeight,offsetY,positionY}=this.__closure;return{height:sheetHeight,transform:[{translateY:offsetY+positionY.get()}]};}';
    var5['code'] = var8;
    var _closure1_slot30 = var5;
    var5 = 30;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/video_calls/native/components/FocusedControlsBottomControls.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function FocusedControlsBottomControls(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
            var2 = arg1;
            var16 = var2.children;
            var9 = var2.actionBar;
            var12 = var2.expandedControls;
            var7 = var2.reveal;
            var11 = var2.header;
            var6 = var2.onDrawerClose;
            var10 = var2.omitPTT;
            var4 = undefined;
            if(!(var10 === var4)) { _fun0016_ip = 53; continue _fun0016 }
 51:
            var10 = false;
 53:
            var5 = var2.onDrawerOpen;
            var _closure2_slot0 = var4;
            var2 = _closure1_slot19;
            var14 = var2.bind(var4)();
            var8 = _closure1_slot4;
            var3 = var8.useState;
            var2 = 0;
            var15 = var3.bind(var8)(var2);
            var8 = _closure1_slot3;
            var3 = 2;
            var3 = var8.bind(var4)(var15, var3);
            var15 = var3[var2];
            var2 = 1;
            var2 = var3[var2];
            _closure2_slot0 = var2;
            var8 = _closure1_slot4;
            var3 = var8.useCallback;
            var2 = function(arg1) {
                var1 = arg1;
                var1 = var1.nativeEvent;
                var1 = var1.layout;
                var3 = var1.height;
                var2 = _closure2_slot0;
                var1 = undefined;
                var2 = var2.bind(var1)(var3);
                return var1;
            };
            var1 = new Array(0);
            var8 = var3.bind(var8)(var2, var1);
            var3 = _closure1_slot14;
            var2 = _closure1_slot34;
            var1 = {};
            var1['aboveActionBar'] = var16;
            var1['actionBarControlsHeight'] = var15;
            var1['expandedControls'] = var12;
            var1['reveal'] = var7;
            var1['onDrawerClose'] = var6;
            var1['onDrawerOpen'] = var5;
            var7 = _closure1_slot15;
            var6 = _closure1_slot5;
            var5 = {};
            var5['onLayout'] = var8;
            var8 = new Array(3);
            var8[0] = var11;
            var8[1] = var9;
            var9 = null;
            if(var10) { _fun0016_ip = 306; continue _fun0016 }
 216:
            var12 = _closure1_slot14;
            var11 = _closure1_slot1;
            var17 = _closure1_slot2;
            var15 = 29;
            var10 = var17[var15];
            var11 = var11.bind(var4)(var10);
            var10 = {};
            var16 = _closure1_slot0;
            var15 = var17[var15];
            var15 = var16.bind(var4)(var15);
            var15 = var15.CallPTTButtonLooks;
            var15 = var15.BLUR;
            var10['look'] = var15;
            var14 = var14.ptbButton;
            var10['style'] = var14;
            var14 = _closure1_slot9;
            var10['sendCallback'] = var14;
            var13 = _closure1_slot10;
            var10['stopCallback'] = var13;
            var9 = var12.bind(var4)(var11, var10);
 306:
            var8[2] = var9;
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var4;
    var4 = 54;
    var3['FOCUSED_CONTROLS_HEADER_HEIGHT'] = var4;
    var3['FocusedControlsBottomDrawer'] = var2;
    return var1;
})();