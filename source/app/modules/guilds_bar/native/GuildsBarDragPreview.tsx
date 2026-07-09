// app/modules/guilds_bar/native/GuildsBarDragPreview.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var1 = function PreviewItem(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var18 = var2.dragRegion;
            var _closure2_slot0 = var18;
            var20 = var2.draggedHeight;
            var _closure2_slot1 = var20;
            var10 = var2.draggedNode;
            var14 = var2.dropComplete;
            var _closure2_slot2 = var14;
            var21 = var2.gestureState;
            var _closure2_slot3 = var21;
            var24 = var2.listInsets;
            var _closure2_slot4 = var24;
            var9 = var2.overNode;
            var _closure2_slot5 = var9;
            var11 = var2.overState;
            var _closure2_slot6 = var11;
            var22 = var2.scrollPosition;
            var _closure2_slot7 = var22;
            var17 = var2.windowSize;
            var _closure2_slot8 = var17;
            var23 = var2.dropPosition;
            var _closure2_slot9 = var23;
            var2 = _closure1_slot7;
            var4 = undefined;
            var12 = var2.bind(var4)();
            var16 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 5;
            var2 = var5[var2];
            var2 = var16.bind(var4)(var2);
            var6 = var2.MobileHomeDrawerExperiment;
            var3 = var6.useConfig;
            var2 = {};
            var7 = 'drag-preview';
            var2['location'] = var7;
            var2 = var3.bind(var6)(var2);
            var13 = var2.enableHome;
            var15 = 6;
            var2 = var5[var15];
            var6 = var16.bind(var4)(var2);
            var3 = var6.useDerivedValue;
            var2 = function x() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = global;
                    var4 = var1.Math;
                    var3 = var4.max;
                    var5 = _closure2_slot7;
                    var2 = var5.get;
                    var5 = var2.bind(var5)();
                    var6 = _closure2_slot0;
                    var2 = var6.get;
                    var2 = var2.bind(var6)();
                    var2 = var2.min;
                    var5 = var5 < var2;
                    var2 = 0;
                    if(!var5) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var6 = _closure2_slot0;
                    var5 = var6.get;
                    var5 = var5.bind(var6)();
                    var6 = var5.min;
                    var7 = _closure2_slot7;
                    var5 = var7.get;
                    var5 = var5.bind(var7)();
                    var2 = var6 - var5;
case 2:
                    var5 = _closure2_slot4;
                    var1 = var5.get;
                    var1 = var1.bind(var5)();
                    var1 = var1.start;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                }
            };
            var7 = {};
            var7['scrollPosition'] = var22;
            var7['dragRegion'] = var18;
            var7['listInsets'] = var24;
            var2['__closure'] = var7;
            var7 = 17436881889698.0;
            var2['__workletHash'] = var7;
            var7 = _closure1_slot9;
            var2['__initData'] = var7;
            var19 = var3.bind(var6)(var2);
            var _closure2_slot10 = var19;
            var2 = var5[var15];
            var6 = var16.bind(var4)(var2);
            var3 = var6.useDerivedValue;
            var2 = function y() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = global;
                    var4 = var1.Math;
                    var3 = var4.min;
                    var5 = _closure2_slot7;
                    var2 = var5.get;
                    var5 = var2.bind(var5)();
                    var6 = _closure2_slot8;
                    var7 = _closure2_slot4;
                    var2 = var7.get;
                    var2 = var2.bind(var7)();
                    var2 = var2.end;
                    var2 = var6 - var2;
                    var5 = var5 + var2;
                    var6 = _closure2_slot0;
                    var2 = var6.get;
                    var2 = var2.bind(var6)();
                    var2 = var2.max;
                    if(!(!(var5 > var2))) { _fun0003_ip = 4; continue _fun0003 }
case 5:
                    var5 = _closure2_slot8;
                    var6 = _closure2_slot4;
                    var2 = var6.get;
                    var2 = var2.bind(var6)();
                    var2 = var2.end;
                    var5 = var5 - var2;
                    var2 = _closure2_slot1;
                    var2 = var5 - var2;
                    _fun0003_ip = 6; continue _fun0003;
case 4:
                    var6 = _closure2_slot0;
                    var5 = var6.get;
                    var5 = var5.bind(var6)();
                    var6 = var5.max;
                    var5 = _closure2_slot1;
                    var6 = var6 - var5;
                    var7 = _closure2_slot7;
                    var5 = var7.get;
                    var5 = var5.bind(var7)();
                    var2 = var6 - var5;
case 6:
                    var6 = _closure2_slot8;
                    var7 = _closure2_slot4;
                    var5 = var7.get;
                    var5 = var5.bind(var7)();
                    var5 = var5.end;
                    var5 = var6 - var5;
                    var1 = _closure2_slot1;
                    var1 = var5 - var1;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                }
            };
            var7 = {};
            var7['scrollPosition'] = var22;
            var7['windowSize'] = var17;
            var7['listInsets'] = var24;
            var7['dragRegion'] = var18;
            var7['draggedHeight'] = var20;
            var2['__closure'] = var7;
            var7 = 4371355784.0;
            var2['__workletHash'] = var7;
            var7 = _closure1_slot10;
            var2['__initData'] = var7;
            var18 = var3.bind(var6)(var2);
            var _closure2_slot11 = var18;
            var2 = var5[var15];
            var6 = var16.bind(var4)(var2);
            var3 = var6.useAnimatedStyle;
            var2 = function G() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = _closure2_slot9;
                    var2 = null;
                    if(!(var2 == var1)) { _fun0004_ip = 7; continue _fun0004 }
case 8:
                    var3 = _closure2_slot3;
                    var1 = var3.get;
                    var1 = var1.bind(var3)();
                    var3 = var1.absoluteY;
                    var4 = _closure2_slot1;
                    var1 = 2;
                    var1 = var4 / var1;
                    var6 = var3 - var1;
                    _fun0004_ip = 9; continue _fun0004;
case 7:
                    var3 = _closure2_slot9;
                    var4 = _closure2_slot7;
                    var1 = var4.get;
                    var1 = var1.bind(var4)();
                    var6 = var3 - var1;
case 9:
                    var3 = _closure2_slot3;
                    var1 = var3.get;
                    var1 = var1.bind(var3)();
                    var1 = var1.mode;
                    if(!(var2 != var1)) { _fun0004_ip = 10; continue _fun0004 }
case 11:
                    var1 = _closure2_slot9;
                    if(!(var2 != var1)) { _fun0004_ip = 12; continue _fun0004 }
case 10:
                    var1 = global;
                    var4 = var1.Math;
                    var3 = var4.max;
                    var2 = _closure2_slot1;
                    var2 = -var2;
                    var7 = var1.Math;
                    var5 = var7.min;
                    var1 = _closure2_slot8;
                    var1 = var5.bind(var7)(var6, var1);
                    var7 = var3.bind(var4)(var2, var1);
                    _fun0004_ip = 13; continue _fun0004;
case 12:
                    var1 = global;
                    var4 = var1.Math;
                    var3 = var4.min;
                    var5 = var1.Math;
                    var2 = var5.max;
                    var8 = _closure2_slot10;
                    var1 = var8.get;
                    var1 = var1.bind(var8)();
                    var2 = var2.bind(var5)(var6, var1);
                    var5 = _closure2_slot11;
                    var1 = var5.get;
                    var1 = var1.bind(var5)();
                    var7 = var3.bind(var4)(var2, var1);
case 13:
                    var1 = {};
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var3 = 7;
                    var3 = var13[var3];
                    var11 = undefined;
                    var6 = var12.bind(var11)(var3);
                    var5 = var6.withSpring;
                    var16 = _closure1_slot8;
                    var3 = function t(arg1) {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                            var1 = arg1;
                            if(!var1) { _fun0005_ip = 14; continue _fun0005 }
case 15:
                            var3 = _closure2_slot9;
                            var2 = null;
                            var1 = var2 != var3;
case 14:
                            if(!var1) { _fun0005_ip = 16; continue _fun0005 }
case 17:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 6;
                            var1 = var2[var1];
                            var2 = undefined;
                            var4 = var3.bind(var2)(var1);
                            var3 = var4.runOnJS;
                            var1 = _closure2_slot2;
                            var1 = var3.bind(var4)(var1);
                            var1 = var1.bind(var2)();
case 16:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var8 = {};
                    var10 = _closure2_slot9;
                    var8['dropPosition'] = var10;
                    var10 = 6;
                    var10 = var13[var10];
                    var10 = var12.bind(var11)(var10);
                    var10 = var10.runOnJS;
                    var8['runOnJS'] = var10;
                    var9 = _closure2_slot2;
                    var8['dropComplete'] = var9;
                    var3['__closure'] = var8;
                    var8 = 12640145939434.0;
                    var3['__workletHash'] = var8;
                    var2 = _closure1_slot12;
                    var3['__initData'] = var2;
                    var15 = 'animate-always';
                    var18 = var6;
                    var17 = var7;
                    var14 = var3;
                    var2 = var18[var5](var17, var16, var15, var14, var13);
                    var1['top'] = var2;
                    return var1;
                }
            };
            var7 = {};
            var7['dropPosition'] = var23;
            var7['scrollPosition'] = var22;
            var7['gestureState'] = var21;
            var7['draggedHeight'] = var20;
            var7['minY'] = var19;
            var7['maxY'] = var18;
            var7['windowSize'] = var17;
            var17 = 7;
            var17 = var5[var17];
            var17 = var16.bind(var4)(var17);
            var17 = var17.withSpring;
            var7['withSpring'] = var17;
            var17 = _closure1_slot8;
            var7['DRAG_SPRING_PHYSICS'] = var17;
            var15 = var5[var15];
            var15 = var16.bind(var4)(var15);
            var15 = var15.runOnJS;
            var7['runOnJS'] = var15;
            var7['dropComplete'] = var14;
            var2['__closure'] = var7;
            var7 = 5676492640532.0;
            var2['__workletHash'] = var7;
            var7 = _closure1_slot11;
            var2['__initData'] = var7;
            var6 = var3.bind(var6)(var2);
            var7 = _closure1_slot3;
            var3 = var7.useMemo;
            var2 = new Array(2);
            var2[0] = var11;
            var2[1] = var9;
            var1 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var3 = _closure2_slot6;
                    var1 = 'convert-after';
                    if(!(var1 !== var3)) { _fun0006_ip = 18; continue _fun0006 }
case 19:
                    var3 = _closure2_slot6;
                    var1 = 'convert-before';
                    if(!(var1 === var3)) { _fun0006_ip = 20; continue _fun0006 }
case 18:
                    var3 = _closure2_slot5;
                    var1 = null;
                    if(!(var1 == var3)) { _fun0006_ip = 21; continue _fun0006 }
case 20:
                    var1 = undefined;
                    return var1;
case 21:
                    var1 = {};
                    var3 = _closure1_slot4;
                    var3 = var3.FOLDER;
                    var1['type'] = var3;
                    var3 = -1;
                    var1['id'] = var3;
                    var3 = undefined;
                    var1['parentId'] = var3;
                    var1['name'] = var3;
                    var1['color'] = var3;
                    var3 = false;
                    var1['expanded'] = var3;
                    var3 = _closure2_slot5;
                    var2 = new Array(1);
                    var2[0] = var3;
                    var1['children'] = var2;
                    return var1;
                }
            };
            var9 = var3.bind(var7)(var1, var2);
            var3 = _closure1_slot6;
            var2 = _closure1_slot1;
            var1 = 8;
            var1 = var5[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var7 = var12.dragPreview;
            var5 = new Array(3);
            var5[0] = var7;
            var11 = null;
            var7 = null;
            if(!var13) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var7 = var12.dragPreviewHome;
case 22:
            var5[1] = var7;
            var5[2] = var6;
            var1['style'] = var5;
            var5 = 'guilds-bar-drag-preview';
            var1['nativeID'] = var5;
            var7 = _closure1_slot6;
            var6 = _closure1_slot0;
            var12 = _closure1_slot2;
            var5 = 9;
            var5 = var12[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.TransitionGroup;
            var5 = {};
            var12 = _closure1_slot17;
            var5['renderItem'] = var12;
            if(!(var11 != var9)) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var10 = var9;
case 24:
            var9 = new Array(1);
            var9[0] = var10;
            var5['items'] = var9;
            var8 = _closure1_slot16;
            var5['getItemKey'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var1 = function getItemPreviewKey(arg1) {
        var1 = arg1;
        var3 = var1.id;
        var1 = global;
        var1 = var1.HermesInternal;
        var2 = var1.concat;
        var1 = '';
        var1 = var2.bind(var1)(var3);
        return var1;
    };
    var _closure1_slot16 = var1;
    var1 = function renderAnimatedItemPreview(arg1, arg2, arg3, arg4) {
        var5 = _closure1_slot6;
        var4 = _closure1_slot18;
        var3 = {};
        var1 = arg2;
        var3['node'] = var1;
        var1 = arg3;
        var3['transitionState'] = var1;
        var1 = arg4;
        var3['cleanUp'] = var1;
        var2 = undefined;
        var1 = arg1;
        var1 = var5.bind(var2)(var4, var3, var1);
        return var1;
    };
    var _closure1_slot17 = var1;
    var1 = function AnimatedItemPreview(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var2 = arg1;
            var10 = var2.node;
            var16 = var2.transitionState;
            var _closure2_slot0 = var16;
            var12 = var2.cleanUp;
            var _closure2_slot1 = var12;
            var4 = undefined;
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var4;
            var2 = _closure1_slot7;
            var11 = var2.bind(var4)();
            var7 = _closure1_slot0;
            var2 = _closure1_slot2;
            var3 = 5;
            var3 = var2[var3];
            var3 = var7.bind(var4)(var3);
            var8 = var3.MobileHomeDrawerExperiment;
            var5 = var8.useConfig;
            var3 = {};
            var9 = 'drag-preview';
            var3['location'] = var9;
            var3 = var5.bind(var8)(var3);
            var9 = var3.enableHome;
            var13 = 6;
            var3 = var2[var13];
            var5 = var7.bind(var4)(var3);
            var3 = var5.useSharedValue;
            var15 = 9;
            var2 = var2[var15];
            var2 = var7.bind(var4)(var2);
            var2 = var2.TransitionStates;
            var7 = var2.ENTERED;
            var2 = 1;
            if(!(var16 === var7)) { _fun0007_ip = 26; continue _fun0007 }
case 27:
            var2 = 0;
case 26:
            var17 = var3.bind(var5)(var2);
            _closure2_slot2 = var17;
            var3 = var10.type;
            var2 = _closure1_slot4;
            var2 = var2.FOLDER;
            var18 = var3 === var2;
            _closure2_slot3 = var18;
            if(!var9) { _fun0007_ip = 28; continue _fun0007 }
case 29:
            var9 = !var18;
case 28:
            if(!var9) { _fun0007_ip = 30; continue _fun0007 }
case 31:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var15];
            var2 = var3.bind(var4)(var2);
            var2 = var2.TransitionStates;
            var2 = var2.YEETED;
            var9 = var16 !== var2;
case 30:
            var14 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = var5[var13];
            var7 = var14.bind(var4)(var2);
            var3 = var7.useAnimatedStyle;
            var2 = function w() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var1 = _closure2_slot3;
                    var3 = _closure2_slot2;
                    var2 = var3.get;
                    var2 = var2.bind(var3)();
                    var6 = 1;
                    if(var1) { _fun0008_ip = 21; continue _fun0008 }
case 32:
                    var16 = 0.33;
                    if(!(var6 === var2)) { _fun0008_ip = 33; continue _fun0008 }
case 34:
                    var16 = var6;
case 33:
                    _fun0008_ip = 35; continue _fun0008;
case 21:
                    var1 = 0.3;
                    if(!(var6 === var2)) { _fun0008_ip = 36; continue _fun0008 }
case 37:
                    var1 = var6;
case 36:
                    var16 = var1;
case 35:
                    var1 = _closure2_slot3;
                    if(var1) { _fun0008_ip = 38; continue _fun0008 }
case 39:
                    var2 = _closure2_slot2;
                    var1 = var2.get;
                    var1 = var1.bind(var2)();
                    if(!(var6 !== var1)) { _fun0008_ip = 38; continue _fun0008 }
case 40:
                    var1 = {'translateX': 10, 'translateY': 4294967286};
                    _fun0008_ip = 41; continue _fun0008;
case 38:
                    var1 = {'translateX': 0, 'translateY': 0};
case 41:
                    var15 = var1.translateX;
                    var14 = var1.translateY;
                    var1 = {};
                    var3 = _closure2_slot3;
                    var2 = var6;
                    if(!var3) { _fun0008_ip = 42; continue _fun0008 }
case 43:
                    var2 = 0;
case 42:
                    var1['zIndex'] = var2;
                    var11 = {};
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var3 = 7;
                    var5 = var9[var3];
                    var4 = undefined;
                    var13 = var8.bind(var4)(var5);
                    var12 = var13.withSpring;
                    var10 = _closure1_slot8;
                    var5 = 'animate-always';
                    var10 = var12.bind(var13)(var14, var10, var5);
                    var11['translateY'] = var10;
                    var10 = new Array(3);
                    var10[0] = var11;
                    var11 = {};
                    var12 = var9[var3];
                    var14 = var8.bind(var4)(var12);
                    var13 = var14.withSpring;
                    var12 = _closure1_slot8;
                    var12 = var13.bind(var14)(var15, var12, var5);
                    var11['translateX'] = var12;
                    var10[1] = var11;
                    var11 = {};
                    var12 = var9[var3];
                    var15 = var8.bind(var4)(var12);
                    var14 = var15.withSpring;
                    var21 = _closure1_slot8;
                    var12 = function t(arg1) {
                        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                            var1 = arg1;
                            if(!var1) { _fun0009_ip = 44; continue _fun0009 }
case 15:
                            var3 = _closure2_slot0;
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var2 = 9;
                            var4 = var4[var2];
                            var2 = undefined;
                            var2 = var5.bind(var2)(var4);
                            var2 = var2.TransitionStates;
                            var2 = var2.YEETED;
                            var1 = var3 === var2;
case 44:
                            if(!var1) { _fun0009_ip = 45; continue _fun0009 }
case 3:
                            var1 = _closure2_slot3;
case 45:
                            if(!var1) { _fun0009_ip = 46; continue _fun0009 }
case 47:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 6;
                            var1 = var2[var1];
                            var2 = undefined;
                            var4 = var3.bind(var2)(var1);
                            var3 = var4.runOnJS;
                            var1 = _closure2_slot1;
                            var1 = var3.bind(var4)(var1);
                            var1 = var1.bind(var2)();
case 46:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var17 = {};
                    var18 = _closure2_slot0;
                    var17['transitionState'] = var18;
                    var18 = 9;
                    var18 = var9[var18];
                    var18 = var8.bind(var4)(var18);
                    var18 = var18.TransitionStates;
                    var17['TransitionStates'] = var18;
                    var18 = _closure2_slot3;
                    var17['isFolder'] = var18;
                    var18 = 6;
                    var18 = var9[var18];
                    var18 = var8.bind(var4)(var18);
                    var18 = var18.runOnJS;
                    var17['runOnJS'] = var18;
                    var18 = _closure2_slot1;
                    var17['cleanUp'] = var18;
                    var12['__closure'] = var17;
                    var17 = 9409925192880.0;
                    var12['__workletHash'] = var17;
                    var17 = _closure1_slot14;
                    var12['__initData'] = var17;
                    var23 = var15;
                    var22 = var16;
                    var20 = var5;
                    var19 = var12;
                    var12 = var23[var14](var22, var21, var20, var19, var18);
                    var11['scale'] = var12;
                    var10[2] = var11;
                    var1['transform'] = var10;
                    var3 = var9[var3];
                    var4 = var8.bind(var4)(var3);
                    var3 = var4.withSpring;
                    var8 = _closure2_slot3;
                    if(!var8) { _fun0008_ip = 48; continue _fun0008 }
case 49:
                    var8 = _closure2_slot2;
                    var7 = var8.get;
                    var6 = var7.bind(var8)();
case 48:
                    var2 = _closure1_slot8;
                    var2 = var3.bind(var4)(var6, var2, var5);
                    var1['opacity'] = var2;
                    return var1;
                }
            };
            var8 = {};
            var8['isFolder'] = var18;
            var8['visible'] = var17;
            var17 = 7;
            var17 = var5[var17];
            var17 = var14.bind(var4)(var17);
            var17 = var17.withSpring;
            var8['withSpring'] = var17;
            var17 = _closure1_slot8;
            var8['DRAG_SPRING_PHYSICS'] = var17;
            var8['transitionState'] = var16;
            var15 = var5[var15];
            var15 = var14.bind(var4)(var15);
            var15 = var15.TransitionStates;
            var8['TransitionStates'] = var15;
            var13 = var5[var13];
            var13 = var14.bind(var4)(var13);
            var13 = var13.runOnJS;
            var8['runOnJS'] = var13;
            var8['cleanUp'] = var12;
            var2['__closure'] = var8;
            var8 = 13465198693221.0;
            var2['__workletHash'] = var8;
            var8 = _closure1_slot13;
            var2['__initData'] = var8;
            var7 = var3.bind(var7)(var2);
            var3 = _closure1_slot3;
            var2 = var3.useEffect;
            var1 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var4 = _closure2_slot2;
                    var3 = var4.set;
                    var6 = _closure2_slot0;
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 9;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var5.bind(var1)(var2);
                    var2 = var2.TransitionStates;
                    var5 = var2.YEETED;
                    var2 = 1;
                    if(!(var6 === var5)) { _fun0010_ip = 36; continue _fun0010 }
case 50:
                    var2 = 0;
case 36:
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            var3 = _closure1_slot6;
            var2 = _closure1_slot1;
            var1 = 8;
            var1 = var5[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var8 = var11.animatedPreviewStyle;
            var5 = new Array(3);
            var5[0] = var8;
            var8 = null;
            if(!var9) { _fun0007_ip = 51; continue _fun0007 }
case 52:
            var8 = var11.animatedPreviewStyleHome;
case 51:
            var5[1] = var8;
            var5[2] = var7;
            var1['style'] = var5;
            var7 = var10.type;
            var5 = _closure1_slot4;
            var5 = var5.FOLDER;
            if(!(var7 !== var5)) { _fun0007_ip = 53; continue _fun0007 }
case 54:
            var8 = _closure1_slot6;
            var7 = _closure1_slot1;
            var11 = _closure1_slot2;
            var5 = 11;
            var5 = var11[var5];
            var7 = var7.bind(var4)(var5);
            var5 = {};
            var11 = var10.id;
            var5['guildId'] = var11;
            var11 = true;
            var5['isDragPreview'] = var11;
            var11 = !var9;
            var5['hideExpandedChildren'] = var11;
            var5 = var8.bind(var4)(var7, var5);
            _fun0007_ip = 55; continue _fun0007;
case 53:
            var8 = _closure1_slot6;
            var7 = _closure1_slot1;
            var11 = _closure1_slot2;
            var6 = 10;
            var6 = var11[var6];
            var7 = var7.bind(var4)(var6);
            var6 = {};
            var11 = var10.id;
            var6['id'] = var11;
            var11 = var10.expanded;
            var6['expanded'] = var11;
            var11 = var10.color;
            var6['color'] = var11;
            var11 = var10.name;
            var6['name'] = var11;
            var10 = var10.children;
            var6['childNodes'] = var10;
            var10 = true;
            var6['isDragPreview'] = var10;
            var9 = !var9;
            var6['hideExpandedChildren'] = var9;
            var5 = var8.bind(var4)(var7, var6);
case 55:
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var4);
    var11 = 0;
    var7 = var6[var11];
    var4 = metroImportAll;
    var1 = undefined;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.GuildsNodeType;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var12 = 'absolute';
    var10 = {'position': 'absolute', 'left': 0};
    var4['dragPreview'] = var10;
    var10 = {};
    var10['position'] = var12;
    var4['animatedPreviewStyle'] = var10;
    var10 = {};
    var10['right'] = var11;
    var4['dragPreviewHome'] = var10;
    var10 = {'left': 0, 'right': 0};
    var4['animatedPreviewStyleHome'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot7 = var4;
    var4 = {'mass': 0.5, 'damping': 80, 'stiffness': 320};
    var _closure1_slot8 = var4;
    var4 = {};
    var8 = 'function GuildsBarDragPreviewTsx1(){const{scrollPosition,dragRegion,listInsets}=this.__closure;return Math.max(scrollPosition.get()<dragRegion.get().min?dragRegion.get().min-scrollPosition.get():0,listInsets.get().start);}';
    var4['code'] = var8;
    var _closure1_slot9 = var4;
    var4 = {};
    var8 = 'function GuildsBarDragPreviewTsx2(){const{scrollPosition,windowSize,listInsets,dragRegion,draggedHeight}=this.__closure;return Math.min(scrollPosition.get()+(windowSize-listInsets.get().end)>dragRegion.get().max?dragRegion.get().max-draggedHeight-scrollPosition.get():windowSize-listInsets.get().end-draggedHeight,windowSize-listInsets.get().end-draggedHeight);}';
    var4['code'] = var8;
    var _closure1_slot10 = var4;
    var4 = {};
    var8 = "function GuildsBarDragPreviewTsx3(){const{dropPosition,scrollPosition,gestureState,draggedHeight,minY,maxY,windowSize,withSpring,DRAG_SPRING_PHYSICS,runOnJS,dropComplete}=this.__closure;let translateY=function(){if(dropPosition!=null){return dropPosition-scrollPosition.get();}return gestureState.get().absoluteY-draggedHeight/2;}();if(gestureState.get().mode!=null&&dropPosition==null){translateY=Math.min(Math.max(translateY,minY.get()),maxY.get());}else{translateY=Math.max(-draggedHeight,Math.min(translateY,windowSize));}return{top:withSpring(translateY,DRAG_SPRING_PHYSICS,'animate-always',function(finished){if(finished&&dropPosition!=null){runOnJS(dropComplete)();}})};}";
    var4['code'] = var8;
    var _closure1_slot11 = var4;
    var4 = {};
    var8 = 'function GuildsBarDragPreviewTsx4(finished){const{dropPosition,runOnJS,dropComplete}=this.__closure;if(finished&&dropPosition!=null){runOnJS(dropComplete)();}}';
    var4['code'] = var8;
    var _closure1_slot12 = var4;
    var4 = {};
    var8 = "function GuildsBarDragPreviewTsx5(){const{isFolder,visible,withSpring,DRAG_SPRING_PHYSICS,transitionState,TransitionStates,runOnJS,cleanUp}=this.__closure;const targetScale=function(){if(isFolder){return visible.get()===1?1:0.3;}return visible.get()===1?1:0.33;}();const{translateX:translateX,translateY:translateY}=function(){if(isFolder){return{translateX:0,translateY:0};}if(visible.get()===1){return{translateX:0,translateY:0};}return{translateX:10,translateY:-10};}();return{zIndex:isFolder?0:1,transform:[{translateY:withSpring(translateY,DRAG_SPRING_PHYSICS,'animate-always')},{translateX:withSpring(translateX,DRAG_SPRING_PHYSICS,'animate-always')},{scale:withSpring(targetScale,DRAG_SPRING_PHYSICS,'animate-always',function(finished){if(finished&&transitionState===TransitionStates.YEETED&&isFolder){runOnJS(cleanUp)();}})}],opacity:withSpring(isFolder?visible.get():1,DRAG_SPRING_PHYSICS,'animate-always')};}";
    var4['code'] = var8;
    var _closure1_slot13 = var4;
    var4 = {};
    var8 = 'function GuildsBarDragPreviewTsx6(finished){const{transitionState,TransitionStates,isFolder,runOnJS,cleanUp}=this.__closure;if(finished&&transitionState===TransitionStates.YEETED&&isFolder){runOnJS(cleanUp)();}}';
    var4['code'] = var8;
    var _closure1_slot14 = var4;
    var4 = var7.memo;
    var2 = function GuildsBarDragPreview() {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var4 = _closure1_slot5;
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 12;
            var1 = var5[var1];
            var5 = undefined;
            var1 = var3.bind(var5)(var1);
            var3 = var1.shallow;
            var1 = function(arg1) {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var1 = arg1;
                    var9 = var1.dragSpecs;
                    var11 = var1.overSpecs;
                    var7 = var1.gestureState;
                    var6 = var1.scrollPosition;
                    var5 = var1.dragRegion;
                    var4 = var1.windowSize;
                    var3 = var1.dropComplete;
                    var2 = var1.listInsets;
                    var8 = var1.dropSpecs;
                    var1 = null;
                    if(!(var1 == var8)) { _fun0012_ip = 56; continue _fun0012 }
case 57:
                    if(!(var1 != var9)) { _fun0012_ip = 58; continue _fun0012 }
case 47:
                    if(!(var1 == var11)) { _fun0012_ip = 59; continue _fun0012 }
case 58:
                    return var1;
case 59:
                    var12 = var11.state;
                    var1 = {};
                    var10 = var9.node;
                    var1['draggedNode'] = var10;
                    var9 = var9.itemSize;
                    var1['draggedHeight'] = var9;
                    var1['overState'] = var12;
                    var10 = var12.startsWith;
                    var9 = 'convert';
                    var12 = var10.bind(var12)(var9);
                    var9 = undefined;
                    var10 = undefined;
                    if(!var12) { _fun0012_ip = 60; continue _fun0012 }
case 61:
                    var10 = var11.node;
case 60:
                    var1['overNode'] = var10;
                    var1['dropPosition'] = var9;
                    var1['gestureState'] = var7;
                    var1['scrollPosition'] = var6;
                    var1['dragRegion'] = var5;
                    var1['windowSize'] = var4;
                    var1['dropComplete'] = var3;
                    var1['listInsets'] = var2;
                    return var1;
case 56:
                    var11 = var8.overState;
                    var1 = {};
                    var9 = var8.dragNode;
                    var1['draggedNode'] = var9;
                    var9 = var8.itemSize;
                    var1['draggedHeight'] = var9;
                    var1['overState'] = var11;
                    var10 = var11.startsWith;
                    var9 = 'convert';
                    var10 = var10.bind(var11)(var9);
                    var9 = undefined;
                    if(!var10) { _fun0012_ip = 62; continue _fun0012 }
case 30:
                    var9 = var8.overNode;
case 62:
                    var1['overNode'] = var9;
                    var8 = var8.dropPosition;
                    var1['dropPosition'] = var8;
                    var1['gestureState'] = var7;
                    var1['scrollPosition'] = var6;
                    var1['dragRegion'] = var5;
                    var1['windowSize'] = var4;
                    var1['dropComplete'] = var3;
                    var1['listInsets'] = var2;
                    return var1;
                }
            };
            var6 = var4.bind(var5)(var1, var3);
            var1 = null;
            var3 = var1 != var6;
            if(!var3) { _fun0011_ip = 63; continue _fun0011 }
case 37:
            var4 = _closure1_slot6;
            var3 = _closure1_slot15;
            var2 = {};
            var8 = var2;
            var7 = var6;
            var6 = copyDataProperties(var8, var7);
            var1 = var4.bind(var5)(var3, var2);
case 63:
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guilds_bar/native/GuildsBarDragPreview.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();