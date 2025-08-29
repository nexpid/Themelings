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
 0:
            var2 = arg1;
            var16 = var2.dragRegion;
            var _closure2_slot0 = var16;
            var18 = var2.draggedHeight;
            var _closure2_slot1 = var18;
            var10 = var2.draggedNode;
            var13 = var2.dropComplete;
            var _closure2_slot2 = var13;
            var19 = var2.gestureState;
            var _closure2_slot3 = var19;
            var22 = var2.listInsets;
            var _closure2_slot4 = var22;
            var9 = var2.overNode;
            var _closure2_slot5 = var9;
            var12 = var2.overState;
            var _closure2_slot6 = var12;
            var20 = var2.scrollPosition;
            var _closure2_slot7 = var20;
            var15 = var2.windowSize;
            var _closure2_slot8 = var15;
            var21 = var2.dropPosition;
            var _closure2_slot9 = var21;
            var6 = _closure1_slot0;
            var11 = _closure1_slot2;
            var14 = 5;
            var2 = var11[var14];
            var4 = undefined;
            var5 = var6.bind(var4)(var2);
            var3 = var5.useDerivedValue;
            var2 = function G() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
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
                    if(!var5) { _fun0002_ip = 91; continue _fun0002 }
 56:
                    var6 = _closure2_slot0;
                    var5 = var6.get;
                    var5 = var5.bind(var6)();
                    var6 = var5.min;
                    var7 = _closure2_slot7;
                    var5 = var7.get;
                    var5 = var5.bind(var7)();
                    var2 = var6 - var5;
 91:
                    var5 = _closure2_slot4;
                    var1 = var5.get;
                    var1 = var1.bind(var5)();
                    var1 = var1.start;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                }
            };
            var7 = {};
            var7['scrollPosition'] = var20;
            var7['dragRegion'] = var16;
            var7['listInsets'] = var22;
            var2['__closure'] = var7;
            var7 = 17436881889698.0;
            var2['__workletHash'] = var7;
            var7 = _closure1_slot9;
            var2['__initData'] = var7;
            var17 = var3.bind(var5)(var2);
            var _closure2_slot10 = var17;
            var2 = var11[var14];
            var5 = var6.bind(var4)(var2);
            var3 = var5.useDerivedValue;
            var2 = function y() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
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
                    if(!(!(var5 > var2))) { _fun0003_ip = 117; continue _fun0003 }
 81:
                    var5 = _closure2_slot8;
                    var6 = _closure2_slot4;
                    var2 = var6.get;
                    var2 = var2.bind(var6)();
                    var2 = var2.end;
                    var5 = var5 - var2;
                    var2 = _closure2_slot1;
                    var2 = var5 - var2;
                    _fun0003_ip = 160; continue _fun0003;
 117:
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
 160:
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
            var7['scrollPosition'] = var20;
            var7['windowSize'] = var15;
            var7['listInsets'] = var22;
            var7['dragRegion'] = var16;
            var7['draggedHeight'] = var18;
            var2['__closure'] = var7;
            var7 = 4371355784.0;
            var2['__workletHash'] = var7;
            var7 = _closure1_slot10;
            var2['__initData'] = var7;
            var16 = var3.bind(var5)(var2);
            var _closure2_slot11 = var16;
            var2 = var11[var14];
            var5 = var6.bind(var4)(var2);
            var3 = var5.useAnimatedStyle;
            var2 = function H() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var1 = _closure2_slot9;
                    var2 = null;
                    if(!(var2 == var1)) { _fun0004_ip = 49; continue _fun0004 }
 13:
                    var3 = _closure2_slot3;
                    var1 = var3.get;
                    var1 = var1.bind(var3)();
                    var3 = var1.absoluteY;
                    var4 = _closure2_slot1;
                    var1 = 2;
                    var1 = var4 / var1;
                    var6 = var3 - var1;
                    _fun0004_ip = 70; continue _fun0004;
 49:
                    var3 = _closure2_slot9;
                    var4 = _closure2_slot7;
                    var1 = var4.get;
                    var1 = var1.bind(var4)();
                    var6 = var3 - var1;
 70:
                    var3 = _closure2_slot3;
                    var1 = var3.get;
                    var1 = var1.bind(var3)();
                    var1 = var1.mode;
                    if(!(var2 != var1)) { _fun0004_ip = 100; continue _fun0004 }
 92:
                    var1 = _closure2_slot9;
                    if(!(var2 != var1)) { _fun0004_ip = 149; continue _fun0004 }
 100:
                    var1 = global;
                    var4 = var1.Math;
                    var3 = var4.max;
                    var2 = _closure2_slot1;
                    var2 = -var2;
                    var7 = var1.Math;
                    var5 = var7.min;
                    var1 = _closure2_slot8;
                    var1 = var5.bind(var7)(var6, var1);
                    var8 = var3.bind(var4)(var2, var1);
                    _fun0004_ip = 211; continue _fun0004;
 149:
                    var1 = global;
                    var4 = var1.Math;
                    var3 = var4.min;
                    var5 = var1.Math;
                    var2 = var5.max;
                    var7 = _closure2_slot10;
                    var1 = var7.get;
                    var1 = var1.bind(var7)();
                    var2 = var2.bind(var5)(var6, var1);
                    var5 = _closure2_slot11;
                    var1 = var5.get;
                    var1 = var1.bind(var5)();
                    var8 = var3.bind(var4)(var2, var1);
 211:
                    var1 = {};
                    var3 = {};
                    var13 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var4 = 6;
                    var4 = var14[var4];
                    var12 = undefined;
                    var7 = var13.bind(var12)(var4);
                    var6 = var7.withSpring;
                    var17 = _closure1_slot8;
                    var4 = function t(arg1) {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                            var1 = arg1;
                            if(!var1) { _fun0005_ip = 19; continue _fun0005 }
 6:
                            var3 = _closure2_slot9;
                            var2 = null;
                            var1 = var2 != var3;
 19:
                            if(!var1) { _fun0005_ip = 68; continue _fun0005 }
 22:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 5;
                            var1 = var2[var1];
                            var2 = undefined;
                            var4 = var3.bind(var2)(var1);
                            var3 = var4.runOnJS;
                            var1 = _closure2_slot2;
                            var1 = var3.bind(var4)(var1);
                            var1 = var1.bind(var2)();
 68:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var9 = {};
                    var11 = _closure2_slot9;
                    var9['dropPosition'] = var11;
                    var11 = 5;
                    var11 = var14[var11];
                    var11 = var13.bind(var12)(var11);
                    var11 = var11.runOnJS;
                    var9['runOnJS'] = var11;
                    var10 = _closure2_slot2;
                    var9['dropComplete'] = var10;
                    var4['__closure'] = var9;
                    var9 = 12640145939434.0;
                    var4['__workletHash'] = var9;
                    var2 = _closure1_slot12;
                    var4['__initData'] = var2;
                    var16 = 'animate-always';
                    var19 = var7;
                    var18 = var8;
                    var15 = var4;
                    var2 = var19[var6](var18, var17, var16, var15, var14);
                    var3['translateY'] = var2;
                    var2 = new Array(1);
                    var2[0] = var3;
                    var1['transform'] = var2;
                    return var1;
                }
            };
            var7 = {};
            var7['dropPosition'] = var21;
            var7['scrollPosition'] = var20;
            var7['gestureState'] = var19;
            var7['draggedHeight'] = var18;
            var7['minY'] = var17;
            var7['maxY'] = var16;
            var7['windowSize'] = var15;
            var15 = 6;
            var15 = var11[var15];
            var15 = var6.bind(var4)(var15);
            var15 = var15.withSpring;
            var7['withSpring'] = var15;
            var15 = _closure1_slot8;
            var7['DRAG_SPRING_PHYSICS'] = var15;
            var14 = var11[var14];
            var14 = var6.bind(var4)(var14);
            var14 = var14.runOnJS;
            var7['runOnJS'] = var14;
            var7['dropComplete'] = var13;
            var2['__closure'] = var7;
            var7 = 13691641005014.0;
            var2['__workletHash'] = var7;
            var7 = _closure1_slot11;
            var2['__initData'] = var7;
            var7 = var3.bind(var5)(var2);
            var5 = _closure1_slot3;
            var3 = var5.useMemo;
            var2 = new Array(2);
            var2[0] = var12;
            var2[1] = var9;
            var1 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var3 = _closure2_slot6;
                    var1 = 'convert-after';
                    if(!(var1 !== var3)) { _fun0006_ip = 31; continue _fun0006 }
 17:
                    var3 = _closure2_slot6;
                    var1 = 'convert-before';
                    if(!(var1 === var3)) { _fun0006_ip = 41; continue _fun0006 }
 31:
                    var3 = _closure2_slot5;
                    var1 = null;
                    if(!(var1 == var3)) { _fun0006_ip = 45; continue _fun0006 }
 41:
                    var1 = undefined;
                    return var1;
 45:
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
            var9 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot6;
            var2 = _closure1_slot1;
            var1 = 7;
            var1 = var11[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var5 = _closure1_slot7;
            var12 = var5.dragPreview;
            var5 = new Array(2);
            var5[0] = var12;
            var5[1] = var7;
            var1['style'] = var5;
            var7 = _closure1_slot6;
            var5 = 8;
            var5 = var11[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.TransitionGroup;
            var5 = {};
            var11 = _closure1_slot17;
            var5['renderItem'] = var11;
            var11 = null;
            if(!(var11 != var9)) { _fun0001_ip = 572; continue _fun0001 }
 569:
            var10 = var9;
 572:
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
 0:
            var2 = arg1;
            var9 = var2.node;
            var14 = var2.transitionState;
            var _closure2_slot0 = var14;
            var10 = var2.cleanUp;
            var _closure2_slot1 = var10;
            var4 = undefined;
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var4;
            var7 = _closure1_slot0;
            var2 = _closure1_slot2;
            var11 = 5;
            var3 = var2[var11];
            var5 = var7.bind(var4)(var3);
            var3 = var5.useSharedValue;
            var13 = 8;
            var2 = var2[var13];
            var2 = var7.bind(var4)(var2);
            var2 = var2.TransitionStates;
            var7 = var2.ENTERED;
            var2 = 1;
            if(!(var14 === var7)) { _fun0007_ip = 103; continue _fun0007 }
 101:
            var2 = 0;
 103:
            var15 = var3.bind(var5)(var2);
            _closure2_slot2 = var15;
            var3 = var9.type;
            var2 = _closure1_slot4;
            var2 = var2.FOLDER;
            var16 = var3 === var2;
            _closure2_slot3 = var16;
            var12 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = var5[var11];
            var7 = var12.bind(var4)(var2);
            var3 = var7.useAnimatedStyle;
            var2 = function w() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var1 = _closure2_slot3;
                    var3 = _closure2_slot2;
                    var2 = var3.get;
                    var2 = var2.bind(var3)();
                    var6 = 1;
                    if(var1) { _fun0008_ip = 45; continue _fun0008 }
 26:
                    var16 = 0.33;
                    if(!(var6 === var2)) { _fun0008_ip = 43; continue _fun0008 }
 40:
                    var16 = var6;
 43:
                    _fun0008_ip = 65; continue _fun0008;
 45:
                    var1 = 0.3;
                    if(!(var6 === var2)) { _fun0008_ip = 62; continue _fun0008 }
 59:
                    var1 = var6;
 62:
                    var16 = var1;
 65:
                    var1 = _closure2_slot3;
                    if(var1) { _fun0008_ip = 105; continue _fun0008 }
 72:
                    var2 = _closure2_slot2;
                    var1 = var2.get;
                    var1 = var1.bind(var2)();
                    if(!(var6 !== var1)) { _fun0008_ip = 105; continue _fun0008 }
 89:
                    var1 = {'translateX': 10, 'translateY': 4294967286};
                    _fun0008_ip = 119; continue _fun0008;
 105:
                    var1 = {'translateX': 0, 'translateY': 0};
 119:
                    var15 = var1.translateX;
                    var14 = var1.translateY;
                    var1 = {};
                    var3 = _closure2_slot3;
                    var2 = var6;
                    if(!var3) { _fun0008_ip = 145; continue _fun0008 }
 143:
                    var2 = 0;
 145:
                    var1['zIndex'] = var2;
                    var11 = {};
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var3 = 6;
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
 0:
                            var1 = arg1;
                            if(!var1) { _fun0009_ip = 54; continue _fun0009 }
 6:
                            var3 = _closure2_slot0;
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var2 = 8;
                            var4 = var4[var2];
                            var2 = undefined;
                            var2 = var5.bind(var2)(var4);
                            var2 = var2.TransitionStates;
                            var2 = var2.YEETED;
                            var1 = var3 === var2;
 54:
                            if(!var1) { _fun0009_ip = 64; continue _fun0009 }
 57:
                            var1 = _closure2_slot3;
 64:
                            if(!var1) { _fun0009_ip = 113; continue _fun0009 }
 67:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 5;
                            var1 = var2[var1];
                            var2 = undefined;
                            var4 = var3.bind(var2)(var1);
                            var3 = var4.runOnJS;
                            var1 = _closure2_slot1;
                            var1 = var3.bind(var4)(var1);
                            var1 = var1.bind(var2)();
 113:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var17 = {};
                    var18 = _closure2_slot0;
                    var17['transitionState'] = var18;
                    var18 = 8;
                    var18 = var9[var18];
                    var18 = var8.bind(var4)(var18);
                    var18 = var18.TransitionStates;
                    var17['TransitionStates'] = var18;
                    var18 = _closure2_slot3;
                    var17['isFolder'] = var18;
                    var18 = 5;
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
                    if(!var8) { _fun0008_ip = 445; continue _fun0008 }
 432:
                    var8 = _closure2_slot2;
                    var7 = var8.get;
                    var6 = var7.bind(var8)();
 445:
                    var2 = _closure1_slot8;
                    var2 = var3.bind(var4)(var6, var2, var5);
                    var1['opacity'] = var2;
                    return var1;
                }
            };
            var8 = {};
            var8['isFolder'] = var16;
            var8['visible'] = var15;
            var15 = 6;
            var15 = var5[var15];
            var15 = var12.bind(var4)(var15);
            var15 = var15.withSpring;
            var8['withSpring'] = var15;
            var15 = _closure1_slot8;
            var8['DRAG_SPRING_PHYSICS'] = var15;
            var8['transitionState'] = var14;
            var13 = var5[var13];
            var13 = var12.bind(var4)(var13);
            var13 = var13.TransitionStates;
            var8['TransitionStates'] = var13;
            var11 = var5[var11];
            var11 = var12.bind(var4)(var11);
            var11 = var11.runOnJS;
            var8['runOnJS'] = var11;
            var8['cleanUp'] = var10;
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
 0:
                    var4 = _closure2_slot2;
                    var3 = var4.set;
                    var6 = _closure2_slot0;
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 8;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var5.bind(var1)(var2);
                    var2 = var2.TransitionStates;
                    var5 = var2.YEETED;
                    var2 = 1;
                    if(!(var6 === var5)) { _fun0010_ip = 62; continue _fun0010 }
 60:
                    var2 = 0;
 62:
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            var3 = _closure1_slot6;
            var2 = _closure1_slot1;
            var1 = 7;
            var1 = var5[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var5 = _closure1_slot7;
            var8 = var5.animatedPreviewStyle;
            var5 = new Array(2);
            var5[0] = var8;
            var5[1] = var7;
            var1['style'] = var5;
            var7 = var9.type;
            var5 = _closure1_slot4;
            var5 = var5.FOLDER;
            if(!(var7 !== var5)) { _fun0007_ip = 430; continue _fun0007 }
 380:
            var8 = _closure1_slot6;
            var7 = _closure1_slot1;
            var10 = _closure1_slot2;
            var5 = 10;
            var5 = var10[var5];
            var7 = var7.bind(var4)(var5);
            var5 = {};
            var10 = var9.id;
            var5['guildId'] = var10;
            var10 = true;
            var5['isDragPreview'] = var10;
            var5 = var8.bind(var4)(var7, var5);
            _fun0007_ip = 517; continue _fun0007;
 430:
            var8 = _closure1_slot6;
            var7 = _closure1_slot1;
            var10 = _closure1_slot2;
            var6 = 9;
            var6 = var10[var6];
            var7 = var7.bind(var4)(var6);
            var6 = {};
            var10 = var9.id;
            var6['id'] = var10;
            var10 = var9.expanded;
            var6['expanded'] = var10;
            var10 = var9.color;
            var6['color'] = var10;
            var10 = var9.name;
            var6['name'] = var10;
            var9 = var9.children;
            var6['childNodes'] = var9;
            var9 = true;
            var6['isDragPreview'] = var9;
            var5 = var8.bind(var4)(var7, var6);
 517:
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
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var9 = var4.StyleSheet;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.GuildsNodeType;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot6 = var4;
    var8 = var9.create;
    var4 = {};
    var11 = 'absolute';
    var10 = {'position': 'absolute', 'top': 0, 'left': 0};
    var4['dragPreview'] = var10;
    var10 = {};
    var10['position'] = var11;
    var4['animatedPreviewStyle'] = var10;
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
    var8 = "function GuildsBarDragPreviewTsx3(){const{dropPosition,scrollPosition,gestureState,draggedHeight,minY,maxY,windowSize,withSpring,DRAG_SPRING_PHYSICS,runOnJS,dropComplete}=this.__closure;let translateY=function(){if(dropPosition!=null){return dropPosition-scrollPosition.get();}return gestureState.get().absoluteY-draggedHeight/2;}();if(gestureState.get().mode!=null&&dropPosition==null){translateY=Math.min(Math.max(translateY,minY.get()),maxY.get());}else{translateY=Math.max(-draggedHeight,Math.min(translateY,windowSize));}return{transform:[{translateY:withSpring(translateY,DRAG_SPRING_PHYSICS,'animate-always',function(finished){if(finished&&dropPosition!=null){runOnJS(dropComplete)();}})}]};}";
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
 0:
            var4 = _closure1_slot5;
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 11;
            var1 = var5[var1];
            var5 = undefined;
            var1 = var3.bind(var5)(var1);
            var3 = var1.shallow;
            var1 = function(arg1) {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
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
                    if(!(var1 == var8)) { _fun0012_ip = 177; continue _fun0012 }
 63:
                    if(!(var1 != var9)) { _fun0012_ip = 71; continue _fun0012 }
 67:
                    if(!(var1 == var11)) { _fun0012_ip = 73; continue _fun0012 }
 71:
                    return var1;
 73:
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
                    if(!var12) { _fun0012_ip = 135; continue _fun0012 }
 129:
                    var10 = var11.node;
 135:
                    var1['overNode'] = var10;
                    var1['dropPosition'] = var9;
                    var1['gestureState'] = var7;
                    var1['scrollPosition'] = var6;
                    var1['dragRegion'] = var5;
                    var1['windowSize'] = var4;
                    var1['dropComplete'] = var3;
                    var1['listInsets'] = var2;
                    return var1;
 177:
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
                    if(!var10) { _fun0012_ip = 238; continue _fun0012 }
 232:
                    var9 = var8.overNode;
 238:
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
            if(!var3) { _fun0011_ip = 85; continue _fun0011 }
 59:
            var4 = _closure1_slot6;
            var3 = _closure1_slot15;
            var2 = {};
            var8 = var2;
            var7 = var6;
            var6 = copyDataProperties(var8, var7);
            var1 = var4.bind(var5)(var3, var2);
 85:
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guilds_bar/native/GuildsBarDragPreview.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();