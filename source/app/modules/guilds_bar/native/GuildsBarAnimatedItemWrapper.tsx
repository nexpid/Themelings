// app/modules/guilds_bar/native/GuildsBarAnimatedItemWrapper.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var7 = native2;
    var13 = native3;
    var3 = native6;
    var8 = native7;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var8;
    var2 = function UnreadIndicator(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var5 = var1.selected;
            var16 = var1.sharedId;
            var _closure2_slot0 = var16;
            var15 = var1.id;
            var _closure2_slot1 = var15;
            var11 = var1.transitionState;
            var4 = undefined;
            if(!(var11 === var4)) { _fun0001_ip = 77; continue _fun0001 }
 42:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 7;
            var3 = var7[var3];
            var3 = var6.bind(var4)(var3);
            var3 = var3.TransitionStates;
            var11 = var3.MOUNTED;
 77:
            var _closure2_slot2 = var11;
            var10 = var1.cleanUp;
            var _closure2_slot3 = var10;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var3 = _closure1_slot14;
            var3 = var3.bind(var4)();
            _closure2_slot4 = var3;
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var12 = 7;
            var6 = var6[var12];
            var6 = var7.bind(var4)(var6);
            var6 = var6.TransitionStates;
            var6 = var6.MOUNTED;
            var17 = var11 === var6;
            _closure2_slot5 = var17;
            var14 = 8;
            var8 = var14;
            if(!var5) { _fun0001_ip = 206; continue _fun0001 }
 167:
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var12];
            var5 = var6.bind(var4)(var5);
            var5 = var5.TransitionStates;
            var5 = var5.YEETED;
            var8 = var14;
            if(!(var11 !== var5)) { _fun0001_ip = 206; continue _fun0001 }
 203:
            var8 = 40;
 206:
            _closure2_slot6 = var8;
            var7 = _closure1_slot3;
            var6 = var7.useMemo;
            var5 = new Array(3);
            var5[0] = var8;
            var5[1] = var11;
            var3 = var3.unreadIndicator;
            var5[2] = var3;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = _closure2_slot4;
                    var2 = var1.unreadIndicator;
                    var1 = new Array(2);
                    var1[0] = var2;
                    var2 = {};
                    var4 = _closure2_slot6;
                    var2['height'] = var4;
                    var5 = _closure2_slot6;
                    var4 = 2;
                    var5 = var5 / var4;
                    var4 = -1;
                    var4 = var5 * var4;
                    var2['marginTop'] = var4;
                    var5 = _closure2_slot2;
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 7;
                    var4 = var4[var3];
                    var3 = undefined;
                    var3 = var6.bind(var3)(var4);
                    var3 = var3.TransitionStates;
                    var4 = var3.YEETED;
                    var3 = 0;
                    if(!(var5 === var4)) { _fun0002_ip = 109; continue _fun0002 }
 103:
                    var3 = -4;
 109:
                    var2['marginLeft'] = var3;
                    var1[1] = var2;
                    return var1;
                }
            };
            var5 = var6.bind(var7)(var3, var5);
            var9 = _closure1_slot3;
            var7 = var9.useCallback;
            var6 = function c(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var4 = arg1;
                    var2 = _closure2_slot5;
                    if(var2) { _fun0003_ip = 233; continue _fun0003 }
 16:
                    var3 = _closure2_slot0;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0003_ip = 50; continue _fun0003 }
 26:
                    var3 = _closure2_slot0;
                    var2 = var3.get;
                    var2 = var2.bind(var3)();
                    var1 = _closure2_slot1;
                    if(!(var2 === var1)) { _fun0003_ip = 233; continue _fun0003 }
 50:
                    var1 = {};
                    var2 = {};
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var5 = 8;
                    var8 = var9[var5];
                    var6 = undefined;
                    var13 = var7.bind(var6)(var8);
                    var12 = var13.withSpring;
                    var11 = var4.targetOriginY;
                    var10 = _closure1_slot12;
                    var8 = 'animate-always';
                    var10 = var12.bind(var13)(var11, var10, var8);
                    var2['originY'] = var10;
                    var10 = var9[var5];
                    var13 = var7.bind(var6)(var10);
                    var12 = var13.withSpring;
                    var11 = var4.targetOriginX;
                    var10 = _closure1_slot12;
                    var10 = var12.bind(var13)(var11, var10, var8);
                    var2['originX'] = var10;
                    var5 = var9[var5];
                    var7 = var7.bind(var6)(var5);
                    var6 = var7.withSpring;
                    var5 = var4.targetHeight;
                    var4 = _closure1_slot12;
                    var4 = var6.bind(var7)(var5, var4, var8);
                    var2['height'] = var4;
                    var1['animations'] = var2;
                    var2 = {'height': 8, 'originY': null, 'originX': 4294967284};
                    var4 = _closure1_slot8;
                    var3 = 2;
                    var4 = var4 / var3;
                    var3 = 4;
                    var3 = var4 - var3;
                    var2['originY'] = var3;
                    var1['initialValues'] = var2;
                    _fun0003_ip = 252; continue _fun0003;
 233:
                    var2 = {};
                    var3 = {};
                    var2['animations'] = var3;
                    var3 = {};
                    var2['initialValues'] = var3;
                    var1 = var2;
 252:
                    return var1;
                }
            };
            var3 = {};
            var3['disableEntering'] = var17;
            var3['sharedId'] = var16;
            var3['id'] = var15;
            var13 = _closure1_slot0;
            var8 = _closure1_slot2;
            var18 = var8[var14];
            var18 = var13.bind(var4)(var18);
            var18 = var18.withSpring;
            var3['withSpring'] = var18;
            var18 = _closure1_slot12;
            var3['BAR_SPRING_PHYSICS'] = var18;
            var18 = _closure1_slot8;
            var3['WRAPPER_SIZE'] = var18;
            var6['__closure'] = var3;
            var3 = 16330603891282.0;
            var6['__workletHash'] = var3;
            var3 = _closure1_slot15;
            var6['__initData'] = var3;
            var3 = new Array(3);
            var3[0] = var17;
            var3[1] = var16;
            var3[2] = var15;
            var7 = var7.bind(var9)(var6, var3);
            var9 = _closure1_slot3;
            var6 = var9.useCallback;
            var3 = function h(arg1) {
                var3 = arg1;
                var1 = {};
                var2 = {};
                var7 = _closure1_slot0;
                var9 = _closure1_slot2;
                var5 = 8;
                var8 = var9[var5];
                var6 = undefined;
                var13 = var7.bind(var6)(var8);
                var12 = var13.withSpring;
                var11 = var3.targetOriginY;
                var10 = _closure1_slot12;
                var8 = 'animate-always';
                var10 = var12.bind(var13)(var11, var10, var8);
                var2['originY'] = var10;
                var10 = var9[var5];
                var13 = var7.bind(var6)(var10);
                var12 = var13.withSpring;
                var11 = var3.targetOriginX;
                var10 = _closure1_slot12;
                var10 = var12.bind(var13)(var11, var10, var8);
                var2['originX'] = var10;
                var5 = var9[var5];
                var7 = var7.bind(var6)(var5);
                var6 = var7.withSpring;
                var5 = var3.targetHeight;
                var4 = _closure1_slot12;
                var4 = var6.bind(var7)(var5, var4, var8);
                var2['height'] = var4;
                var1['animations'] = var2;
                var2 = {};
                var4 = var3.currentHeight;
                var2['height'] = var4;
                var4 = var3.currentOriginY;
                var2['originY'] = var4;
                var3 = var3.currentOriginX;
                var2['originX'] = var3;
                var1['initialValues'] = var2;
                var2 = function callback(arg1) {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                        var5 = arg1;
                        var6 = _closure2_slot2;
                        var7 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var1 = 7;
                        var4 = var4[var1];
                        var1 = undefined;
                        var4 = var7.bind(var1)(var4);
                        var4 = var4.TransitionStates;
                        var4 = var4.YEETED;
                        var4 = var6 === var4;
                        if(!var4) { _fun0004_ip = 57; continue _fun0004 }
 54:
                        var4 = var5;
 57:
                        if(!var4) { _fun0004_ip = 70; continue _fun0004 }
 60:
                        var6 = _closure2_slot3;
                        var5 = null;
                        var4 = var5 != var6;
 70:
                        if(!var4) { _fun0004_ip = 111; continue _fun0004 }
 73:
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var3 = 9;
                        var3 = var5[var3];
                        var4 = var4.bind(var1)(var3);
                        var3 = var4.runOnJS;
                        var2 = _closure2_slot3;
                        var2 = var3.bind(var4)(var2);
                        var2 = var2.bind(var1)();
 111:
                        return var1;
                    }
                };
                var1['callback'] = var2;
                return var1;
            };
            var2 = {};
            var14 = var8[var14];
            var14 = var13.bind(var4)(var14);
            var14 = var14.withSpring;
            var2['withSpring'] = var14;
            var14 = _closure1_slot12;
            var2['BAR_SPRING_PHYSICS'] = var14;
            var2['transitionState'] = var11;
            var12 = var8[var12];
            var12 = var13.bind(var4)(var12);
            var12 = var12.TransitionStates;
            var2['TransitionStates'] = var12;
            var2['cleanUp'] = var10;
            var12 = 9;
            var12 = var8[var12];
            var12 = var13.bind(var4)(var12);
            var12 = var12.runOnJS;
            var2['runOnJS'] = var12;
            var3['__closure'] = var2;
            var2 = 10632665703864.0;
            var3['__workletHash'] = var2;
            var2 = _closure1_slot16;
            var3['__initData'] = var2;
            var2 = new Array(2);
            var2[0] = var11;
            var2[1] = var10;
            var6 = var6.bind(var9)(var3, var2);
            var3 = _closure1_slot9;
            var2 = _closure1_slot1;
            var1 = 10;
            var1 = var8[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var8 = false;
            var1['collapsable'] = var8;
            var1['entering'] = var7;
            var1['layout'] = var6;
            var1['style'] = var5;
            var5 = 'none';
            var1['pointerEvents'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot18 = var2;
    var1 = function renderUnreadIndicator(arg1, arg2, arg3, arg4) {
        var2 = arg2;
        var1 = var2.selected;
        var6 = var2.sharedId;
        var2 = var2.id;
        var5 = _closure1_slot9;
        var4 = _closure1_slot18;
        var3 = {};
        var3['sharedId'] = var6;
        var3['id'] = var2;
        var3['selected'] = var1;
        var1 = arg3;
        var3['transitionState'] = var1;
        var1 = arg4;
        var3['cleanUp'] = var1;
        var2 = undefined;
        var1 = arg1;
        var1 = var5.bind(var2)(var4, var3, var1);
        return var1;
    };
    var _closure1_slot19 = var1;
    var1 = global;
    var9 = var1.Object;
    var6 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var9)(var3, var1, var4);
    var11 = 0;
    var6 = var8[var11];
    var4 = native4;
    var1 = undefined;
    var4 = var4.bind(var1)(var6);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var8[var4];
    var4 = var7.bind(var1)(var4);
    var9 = var4.StyleSheet;
    var14 = 2;
    var4 = var8[var14];
    var4 = var7.bind(var1)(var4);
    var4 = var4.IOS_POINTER_STYLE;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var8[var4];
    var4 = var7.bind(var1)(var4);
    var6 = var4.GUILD_ITEM_SIZE;
    var _closure1_slot5 = var6;
    var6 = var4.GUILD_ITEM_SELECTED_BORDER_RADIUS;
    var _closure1_slot6 = var6;
    var6 = var4.GUILD_ITEM_HIT_SLOP;
    var _closure1_slot7 = var6;
    var12 = var4.WRAPPER_SIZE;
    var _closure1_slot8 = var12;
    var4 = 4;
    var4 = var8[var4];
    var4 = var7.bind(var1)(var4);
    var6 = var4.jsx;
    var _closure1_slot9 = var6;
    var4 = var4.jsxs;
    var _closure1_slot10 = var4;
    var4 = {'mass': 0.8, 'damping': 100, 'stiffness': 150};
    var _closure1_slot11 = var4;
    var4 = {'mass': 0.25, 'damping': 100, 'stiffness': 200};
    var _closure1_slot12 = var4;
    var6 = var9.create;
    var4 = {};
    var10 = {};
    var10['opacity'] = var11;
    var4['draggedElement'] = var10;
    var4 = var6.bind(var9)(var4);
    var _closure1_slot13 = var4;
    var4 = 5;
    var6 = var8[var4];
    var10 = var7.bind(var1)(var6);
    var9 = var10.createStyles;
    var6 = {};
    var11 = {'position': 'absolute', 'top': null, 'left': 4294967292, 'height': 8, 'width': 8};
    var12 = var12 / var14;
    var11['top'] = var12;
    var12 = 6;
    var14 = var8[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.xs;
    var11['borderRadius'] = var14;
    var12 = var8[var12];
    var12 = var13.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.INTERACTIVE_ACTIVE;
    var11['backgroundColor'] = var12;
    var6['unreadIndicator'] = var11;
    var6 = var9.bind(var10)(var6);
    var _closure1_slot14 = var6;
    var4 = var8[var4];
    var9 = var7.bind(var1)(var4);
    var6 = var9.createStyles;
    var4 = function() {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var3 = arguments[0];
            var6 = arguments[1];
            var7 = undefined;
            if(!(var3 === var7)) { _fun0005_ip = 14; continue _fun0005 }
 12:
            var3 = false;
 14:
            if(!(var6 === var7)) { _fun0005_ip = 20; continue _fun0005 }
 18:
            var6 = false;
 20:
            var1 = {};
            var2 = {'position': 'relative', 'paddingTop': 4, 'paddingBottom': 4, 'paddingLeft': 12};
            var4 = _closure1_slot8;
            var2['height'] = var4;
            var4 = _closure1_slot5;
            var8 = _closure1_slot7;
            var9 = var8.left;
            var9 = var4 + var9;
            var8 = var8.right;
            var8 = var9 + var8;
            var2['width'] = var8;
            var1['pressableWrapper'] = var2;
            var2 = {'position': 'relative', 'width': null, 'height': null, 'overflow': 'hidden', 'justifyContent': 'center', 'alignItems': 'center'};
            var2['width'] = var4;
            var2['height'] = var4;
            var4 = 'transparent';
            var8 = var4;
            if(var6) { _fun0005_ip = 149; continue _fun0005 }
 118:
            var10 = _closure1_slot1;
            var11 = _closure1_slot2;
            var9 = 6;
            var9 = var11[var9];
            var9 = var10.bind(var7)(var9);
            var9 = var9.colors;
            var8 = var9.BACKGROUND_SECONDARY;
 149:
            var2['backgroundColor'] = var8;
            var1['itemShape'] = var2;
            var2 = {};
            var8 = var4;
            if(var6) { _fun0005_ip = 197; continue _fun0005 }
 166:
            var10 = _closure1_slot1;
            var11 = _closure1_slot2;
            var9 = 6;
            var9 = var11[var9];
            var9 = var10.bind(var7)(var9);
            var9 = var9.colors;
            var8 = var9.BG_MOD_STRONG;
 197:
            var2['backgroundColor'] = var8;
            var1['itemShapeThemed'] = var2;
            var2 = {};
            if(var3) { _fun0005_ip = 244; continue _fun0005 }
 211:
            var8 = _closure1_slot1;
            var9 = _closure1_slot2;
            var3 = 6;
            var3 = var9[var3];
            var3 = var8.bind(var7)(var3);
            var3 = var3.colors;
            var3 = var3.BG_BRAND;
            _fun0005_ip = 281; continue _fun0005;
 244:
            if(var6) { _fun0005_ip = 278; continue _fun0005 }
 247:
            var6 = _closure1_slot1;
            var8 = _closure1_slot2;
            var5 = 6;
            var5 = var8[var5];
            var5 = var6.bind(var7)(var5);
            var5 = var5.colors;
            var4 = var5.BACKGROUND_SECONDARY;
 278:
            var3 = var4;
 281:
            var2['backgroundColor'] = var3;
            var1['itemShapeSelected'] = var2;
            return var1;
        }
    };
    var4 = var6.bind(var9)(var4);
    var6 = {};
    var9 = "function GuildsBarAnimatedItemWrapperTsx1(values){const{disableEntering,sharedId,id,withSpring,BAR_SPRING_PHYSICS,WRAPPER_SIZE}=this.__closure;if(disableEntering||sharedId!=null&&sharedId.get()!==id){return{animations:{},initialValues:{}};}return{animations:{originY:withSpring(values.targetOriginY,BAR_SPRING_PHYSICS,'animate-always'),originX:withSpring(values.targetOriginX,BAR_SPRING_PHYSICS,'animate-always'),height:withSpring(values.targetHeight,BAR_SPRING_PHYSICS,'animate-always')},initialValues:{height:8,originY:WRAPPER_SIZE/2-4,originX:-12}};}";
    var6['code'] = var9;
    var _closure1_slot15 = var6;
    var6 = {};
    var9 = "function GuildsBarAnimatedItemWrapperTsx2(values){const{withSpring,BAR_SPRING_PHYSICS,transitionState,TransitionStates,cleanUp,runOnJS}=this.__closure;return{animations:{originY:withSpring(values.targetOriginY,BAR_SPRING_PHYSICS,'animate-always'),originX:withSpring(values.targetOriginX,BAR_SPRING_PHYSICS,'animate-always'),height:withSpring(values.targetHeight,BAR_SPRING_PHYSICS,'animate-always')},initialValues:{height:values.currentHeight,originY:values.currentOriginY,originX:values.currentOriginX},callback:function(finished){if(transitionState===TransitionStates.YEETED&&finished&&cleanUp!=null){runOnJS(cleanUp)();}}};}";
    var6['code'] = var9;
    var _closure1_slot16 = var6;
    var6 = {};
    var9 = "function GuildsBarAnimatedItemWrapperTsx3(){const{withSpring,circle,GUILD_ITEM_SELECTED_BORDER_RADIUS,GUILD_ITEM_SIZE,CORNER_SPRING_PHYSICS}=this.__closure;return{borderRadius:withSpring(!circle?GUILD_ITEM_SELECTED_BORDER_RADIUS:GUILD_ITEM_SIZE/2,CORNER_SPRING_PHYSICS,'animate-always')};}";
    var6['code'] = var9;
    var _closure1_slot17 = var6;
    var6 = 16;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/guilds_bar/native/GuildsBarAnimatedItemWrapper.tsx';
    var6 = var7.bind(var8)(var6);
    var5 = function GuildsBarAnimatedItemWrapper(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var8 = arg1;
            var22 = var8.id;
            var _closure2_slot0 = var22;
            var19 = var8.selected;
            var _closure2_slot1 = var19;
            var3 = var8.unread;
            var33 = var8.circle;
            var _closure2_slot2 = var33;
            var13 = var8.children;
            var10 = var8.externalChildren;
            var17 = var8.config;
            var23 = var8.label;
            var9 = var8.draggable;
            var4 = undefined;
            if(!(var9 === var4)) { _fun0006_ip = 75; continue _fun0006 }
 73:
            var9 = false;
 75:
            var14 = var8.cutouts;
            var12 = var8.isDragTarget;
            if(!(var12 === var4)) { _fun0006_ip = 93; continue _fun0006 }
 91:
            var12 = false;
 93:
            var _closure2_slot3 = var12;
            var31 = var8.dragState;
            var _closure2_slot4 = var31;
            var2 = var8.isDragPreview;
            if(!(var2 === var4)) { _fun0006_ip = 119; continue _fun0006 }
 117:
            var2 = false;
 119:
            var30 = var8.draggedItemSize;
            if(!(var30 === var4)) { _fun0006_ip = 131; continue _fun0006 }
 129:
            var30 = 0;
 131:
            var _closure2_slot5 = var30;
            var29 = var8.overState;
            var _closure2_slot6 = var29;
            var18 = var8.styles;
            var _closure2_slot7 = var18;
            var15 = var8.accessibilityActions;
            var11 = var8.onAccessibilityAction;
            var5 = var8.preventClipping;
            if(!(var5 === var4)) { _fun0006_ip = 179; continue _fun0006 }
 177:
            var5 = false;
 179:
            var20 = var8.entering;
            var7 = var8.exiting;
            var26 = var8.layout;
            var6 = var8.zIndex;
            if(!(var6 === var4)) { _fun0006_ip = 209; continue _fun0006 }
 207:
            var6 = 0;
 209:
            var _closure2_slot8 = var6;
            var25 = var8.sharedId;
            var _closure2_slot9 = var25;
            var _closure2_slot10 = var4;
            var21 = _closure1_slot1;
            var27 = _closure1_slot2;
            var16 = 11;
            var16 = var27[var16];
            var16 = var21.bind(var4)(var16);
            var21 = var16.bind(var4)(var17);
            var24 = _closure1_slot0;
            var16 = 9;
            var16 = var27[var16];
            var28 = var24.bind(var4)(var16);
            var17 = var28.useAnimatedStyle;
            var16 = function W() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var1 = {};
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 8;
                    var4 = var4[var3];
                    var3 = undefined;
                    var6 = var5.bind(var3)(var4);
                    var5 = var6.withSpring;
                    var3 = _closure2_slot2;
                    if(var3) { _fun0007_ip = 48; continue _fun0007 }
 42:
                    var4 = _closure1_slot6;
                    _fun0007_ip = 59; continue _fun0007;
 48:
                    var7 = _closure1_slot5;
                    var3 = 2;
                    var4 = var7 / var3;
 59:
                    var3 = _closure1_slot11;
                    var2 = 'animate-always';
                    var2 = var5.bind(var6)(var4, var3, var2);
                    var1['borderRadius'] = var2;
                    return var1;
                }
            };
            var32 = {};
            var34 = 8;
            var34 = var27[var34];
            var34 = var24.bind(var4)(var34);
            var34 = var34.withSpring;
            var32['withSpring'] = var34;
            var32['circle'] = var33;
            var33 = _closure1_slot6;
            var32['GUILD_ITEM_SELECTED_BORDER_RADIUS'] = var33;
            var33 = _closure1_slot5;
            var32['GUILD_ITEM_SIZE'] = var33;
            var33 = _closure1_slot11;
            var32['CORNER_SPRING_PHYSICS'] = var33;
            var16['__closure'] = var32;
            var32 = 11828610342492.0;
            var16['__workletHash'] = var32;
            var32 = _closure1_slot17;
            var16['__initData'] = var32;
            var16 = var17.bind(var28)(var16);
            var17 = 12;
            var17 = var27[var17];
            var27 = var24.bind(var4)(var17);
            var24 = var27.useClientThemesOverride;
            var17 = var18.itemShapeThemed;
            var17 = var24.bind(var27)(var17);
            var28 = _closure1_slot3;
            var27 = var28.useMemo;
            var24 = new Array(5);
            var24[0] = var12;
            var24[1] = var31;
            var24[2] = var30;
            var24[3] = var29;
            var24[4] = var6;
            var6 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var1 = _closure2_slot3;
                    if(!var1) { _fun0008_ip = 38; continue _fun0008 }
 10:
                    var3 = _closure2_slot4;
                    var1 = 'dragging';
                    if(!(var1 === var3)) { _fun0008_ip = 38; continue _fun0008 }
 22:
                    var3 = _closure2_slot6;
                    var5 = 'hide';
                    var1 = 'self';
                    if(!(var1 === var3)) { _fun0008_ip = 85; continue _fun0008 }
 38:
                    var3 = _closure2_slot6;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0008_ip = 78; continue _fun0008 }
 48:
                    var3 = _closure2_slot6;
                    var1 = 'self';
                    if(!(var1 !== var3)) { _fun0008_ip = 78; continue _fun0008 }
 60:
                    var4 = _closure2_slot4;
                    var1 = 'drag-target';
                    var3 = 'dragging';
                    if(!(var3 !== var4)) { _fun0008_ip = 82; continue _fun0008 }
 78:
                    var1 = 'none';
 82:
                    var5 = var1;
 85:
                    var1 = {};
                    var4 = 'drag-target';
                    if(!(var4 !== var5)) { _fun0008_ip = 116; continue _fun0008 }
 97:
                    var6 = 'hide';
                    var3 = 0;
                    if(!(var6 !== var5)) { _fun0008_ip = 114; continue _fun0008 }
 107:
                    var3 = _closure1_slot8;
 114:
                    _fun0008_ip = 131; continue _fun0008;
 116:
                    var7 = _closure1_slot8;
                    var6 = _closure2_slot5;
                    var3 = var7 + var6;
 131:
                    var1['height'] = var3;
                    var3 = 0;
                    if(!(var4 === var5)) { _fun0008_ip = 173; continue _fun0008 }
 141:
                    var5 = _closure2_slot6;
                    var4 = 'before';
                    if(!(var4 !== var5)) { _fun0008_ip = 169; continue _fun0008 }
 153:
                    var5 = _closure2_slot6;
                    var4 = 'convert-before';
                    var3 = 0;
                    if(!(var4 === var5)) { _fun0008_ip = 173; continue _fun0008 }
 169:
                    var3 = _closure2_slot5;
 173:
                    var1['top'] = var3;
                    var2 = _closure2_slot8;
                    var1['zIndex'] = var2;
                    return var1;
                }
            };
            var27 = var27.bind(var28)(var6, var24);
            var29 = _closure1_slot3;
            var28 = var29.useMemo;
            var6 = var18.pressableWrapper;
            var24 = new Array(2);
            var24[0] = var6;
            var24[1] = var12;
            var6 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var1 = _closure2_slot7;
                    var3 = var1.pressableWrapper;
                    var1 = new Array(3);
                    var1[0] = var3;
                    var3 = _closure2_slot3;
                    var2 = undefined;
                    if(!var3) { _fun0009_ip = 43; continue _fun0009 }
 30:
                    var3 = _closure1_slot13;
                    var2 = var3.draggedElement;
 43:
                    var1[1] = var2;
                    var2 = _closure1_slot4;
                    var1[2] = var2;
                    return var1;
                }
            };
            var24 = var28.bind(var29)(var6, var24);
            var28 = !var3;
            if(!var28) { _fun0006_ip = 502; continue _fun0006 }
 499:
            var28 = !var19;
 502:
            if(var28) { _fun0006_ip = 508; continue _fun0006 }
 505:
            var28 = var12;
 508:
            if(var28) { _fun0006_ip = 514; continue _fun0006 }
 511:
            var28 = var2;
 514:
            _closure2_slot10 = var28;
            var6 = _closure1_slot3;
            var3 = var6.useMemo;
            var2 = new Array(4);
            var2[0] = var28;
            var2[1] = var19;
            var2[2] = var25;
            var2[3] = var22;
            var1 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    var1 = _closure2_slot10;
                    if(var1) { _fun0010_ip = 40; continue _fun0010 }
 10:
                    var1 = {};
                    var3 = _closure2_slot1;
                    var1['selected'] = var3;
                    var3 = _closure2_slot9;
                    var1['sharedId'] = var3;
                    var2 = _closure2_slot0;
                    var1['id'] = var2;
                    return var1;
 40:
                    var1 = undefined;
                    return var1;
                }
            };
            var22 = var3.bind(var6)(var1, var2);
            var3 = _closure1_slot9;
            var6 = _closure1_slot1;
            var25 = _closure1_slot2;
            var1 = 10;
            var1 = var25[var1];
            var2 = var6.bind(var4)(var1);
            var1 = {};
            var1['style'] = var27;
            var1['layout'] = var26;
            var1['entering'] = var20;
            var1['exiting'] = var7;
            var1['preventClipping'] = var5;
            var20 = false;
            var1['collapsable'] = var20;
            var7 = _closure1_slot10;
            var5 = 13;
            var5 = var25[var5];
            var6 = var6.bind(var4)(var5);
            var5 = {};
            var36 = var5;
            var35 = var21;
            var21 = copyDataProperties(var36, var35);
            var21 = 'style';
            var5[var21] = var24;
            var21 = 'accessibilityLabel';
            var5[var21] = var23;
            var23 = true;
            var21 = 'accessible';
            var5[var21] = var23;
            var23 = 'button';
            var21 = 'accessibilityRole';
            var5[var21] = var23;
            var23 = {};
            var23['selected'] = var19;
            var21 = 'accessibilityState';
            var5[var21] = var23;
            var23 = _closure1_slot7;
            var21 = 'hitSlop';
            var5[var21] = var23;
            var21 = undefined;
            if(!var9) { _fun0006_ip = 778; continue _fun0006 }
 721:
            var25 = _closure1_slot0;
            var26 = _closure1_slot2;
            var9 = 14;
            var23 = var26[var9];
            var23 = var25.bind(var4)(var23);
            var24 = var23.intl;
            var23 = var24.string;
            var9 = var26[var9];
            var9 = var25.bind(var4)(var9);
            var9 = var9.t;
            var9 = var9.BGMUFB;
            var21 = var23.bind(var24)(var9);
 778:
            var9 = 'accessibilityHint';
            var5[var9] = var21;
            var9 = 'collapsable';
            var5[var9] = var20;
            var9 = 'accessibilityActions';
            var5[var9] = var15;
            var9 = 'onAccessibilityAction';
            var5[var9] = var11;
            var9 = new Array(3);
            var9[0] = var10;
            var21 = _closure1_slot9;
            var10 = _closure1_slot0;
            var15 = _closure1_slot2;
            var11 = 7;
            var11 = var15[var11];
            var11 = var10.bind(var4)(var11);
            var20 = var11.TransitionItem;
            var11 = {};
            var11['item'] = var22;
            var22 = _closure1_slot19;
            var11['renderItem'] = var22;
            var11 = var21.bind(var4)(var20, var11);
            var9[1] = var11;
            var11 = _closure1_slot9;
            var8 = 15;
            var8 = var15[var8];
            var8 = var10.bind(var4)(var8);
            var10 = var8.ClipViewAnimated;
            var8 = {};
            var20 = var18.itemShape;
            var15 = new Array(4);
            var15[0] = var20;
            var15[1] = var17;
            var17 = undefined;
            if(!var19) { _fun0006_ip = 930; continue _fun0006 }
 924:
            var17 = var18.itemShapeSelected;
 930:
            var15[2] = var17;
            var15[3] = var16;
            var8['style'] = var15;
            var8['cutouts'] = var14;
            var12 = !var12;
            if(!var12) { _fun0006_ip = 956; continue _fun0006 }
 953:
            var12 = var13;
 956:
            var8['children'] = var12;
            var8 = var11.bind(var4)(var10, var8);
            var9[2] = var8;
            var8 = 'children';
            var5[var8] = var9;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var5;
    var3['useGuildsBarAnimatedWrapperStyles'] = var4;
    var3['UnreadIndicator'] = var2;
    return var1;
})();