// app/modules/guilds_bar/native/GuildsBarAnimatedItemWrapper.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var14 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var14;
    var _closure1_slot2 = var8;
    var2 = function UnreadIndicator(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var5 = var1.selected;
            var16 = var1.sharedId;
            var _closure2_slot0 = var16;
            var15 = var1.id;
            var _closure2_slot1 = var15;
            var11 = var1.transitionState;
            var4 = undefined;
            if(!(var11 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 7;
            var3 = var7[var3];
            var3 = var6.bind(var4)(var3);
            var3 = var3.TransitionStates;
            var11 = var3.MOUNTED;
case 2:
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
            if(!var5) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var12];
            var5 = var6.bind(var4)(var5);
            var5 = var5.TransitionStates;
            var5 = var5.YEETED;
            var8 = var14;
            if(!(var11 !== var5)) { _fun0001_ip = 4; continue _fun0001 }
case 6:
            var8 = 40;
case 4:
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
case 0:
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
                    if(!(var5 === var4)) { _fun0002_ip = 7; continue _fun0002 }
case 8:
                    var3 = -4;
case 7:
                    var2['marginLeft'] = var3;
                    var1[1] = var2;
                    return var1;
                }
            };
            var5 = var6.bind(var7)(var3, var5);
            var9 = _closure1_slot3;
            var7 = var9.useCallback;
            var6 = function _(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var4 = arg1;
                    var2 = _closure2_slot5;
                    if(var2) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                    var3 = _closure2_slot0;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                    var3 = _closure2_slot0;
                    var2 = var3.get;
                    var2 = var2.bind(var3)();
                    var1 = _closure2_slot1;
                    if(!(var2 === var1)) { _fun0003_ip = 9; continue _fun0003 }
case 11:
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
                    _fun0003_ip = 13; continue _fun0003;
case 9:
                    var2 = {};
                    var3 = {};
                    var2['animations'] = var3;
                    var3 = {};
                    var2['initialValues'] = var3;
                    var1 = var2;
case 13:
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
            var3 = function I(arg1) {
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
case 0:
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
                        if(!var4) { _fun0004_ip = 14; continue _fun0004 }
case 15:
                        var4 = var5;
case 14:
                        if(!var4) { _fun0004_ip = 16; continue _fun0004 }
case 17:
                        var6 = _closure2_slot3;
                        var5 = null;
                        var4 = var5 != var6;
case 16:
                        if(!var4) { _fun0004_ip = 18; continue _fun0004 }
case 19:
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var3 = 9;
                        var3 = var5[var3];
                        var4 = var4.bind(var1)(var3);
                        var3 = var4.runOnJS;
                        var2 = _closure2_slot3;
                        var2 = var3.bind(var4)(var2);
                        var2 = var2.bind(var1)();
case 18:
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
    var _closure1_slot19 = var2;
    var1 = function renderUnreadIndicator(arg1, arg2, arg3, arg4) {
        var2 = arg2;
        var1 = var2.selected;
        var6 = var2.sharedId;
        var2 = var2.id;
        var5 = _closure1_slot9;
        var4 = _closure1_slot19;
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
    var _closure1_slot20 = var1;
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
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var6);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var8[var4];
    var4 = var7.bind(var1)(var4);
    var9 = var4.StyleSheet;
    var13 = 2;
    var4 = var8[var13];
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
    var11 = {};
    var15 = 'relative';
    var11['position'] = var15;
    var6['container'] = var11;
    var11 = {'position': 'absolute', 'top': null, 'left': 4294967292, 'height': 8, 'width': 8};
    var13 = var12 / var13;
    var11['top'] = var13;
    var13 = 6;
    var15 = var8[var13];
    var15 = var14.bind(var1)(var15);
    var15 = var15.radii;
    var15 = var15.xs;
    var11['borderRadius'] = var15;
    var13 = var8[var13];
    var13 = var14.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.INTERACTIVE_ACTIVE;
    var11['backgroundColor'] = var13;
    var6['unreadIndicator'] = var11;
    var11 = {'position': 'absolute', 'left': null, 'top': 0, 'right': 16, 'overflow': 'hidden', 'height': null, 'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center'};
    var13 = 16;
    var13 = var12 + var13;
    var11['left'] = var13;
    var11['height'] = var12;
    var6['expandedChildrenWrapper'] = var11;
    var6 = var9.bind(var10)(var6);
    var _closure1_slot14 = var6;
    var4 = var8[var4];
    var9 = var7.bind(var1)(var4);
    var6 = var9.createStyles;
    var4 = function() {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var3 = arguments[0];
            var6 = arguments[1];
            var7 = undefined;
            if(!(var3 === var7)) { _fun0005_ip = 20; continue _fun0005 }
case 21:
            var3 = false;
case 20:
            if(!(var6 === var7)) { _fun0005_ip = 22; continue _fun0005 }
case 23:
            var6 = false;
case 22:
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
            if(var6) { _fun0005_ip = 24; continue _fun0005 }
case 25:
            var10 = _closure1_slot1;
            var11 = _closure1_slot2;
            var9 = 6;
            var9 = var11[var9];
            var9 = var10.bind(var7)(var9);
            var9 = var9.colors;
            var8 = var9.BACKGROUND_SECONDARY;
case 24:
            var2['backgroundColor'] = var8;
            var1['itemShape'] = var2;
            var2 = {};
            var8 = var4;
            if(var6) { _fun0005_ip = 26; continue _fun0005 }
case 27:
            var10 = _closure1_slot1;
            var11 = _closure1_slot2;
            var9 = 6;
            var9 = var11[var9];
            var9 = var10.bind(var7)(var9);
            var9 = var9.colors;
            var8 = var9.BG_MOD_STRONG;
case 26:
            var2['backgroundColor'] = var8;
            var1['itemShapeThemed'] = var2;
            var2 = {};
            if(var3) { _fun0005_ip = 28; continue _fun0005 }
case 29:
            var8 = _closure1_slot1;
            var9 = _closure1_slot2;
            var3 = 6;
            var3 = var9[var3];
            var3 = var8.bind(var7)(var3);
            var3 = var3.colors;
            var3 = var3.BG_BRAND;
            _fun0005_ip = 30; continue _fun0005;
case 28:
            if(var6) { _fun0005_ip = 31; continue _fun0005 }
case 32:
            var6 = _closure1_slot1;
            var8 = _closure1_slot2;
            var5 = 6;
            var5 = var8[var5];
            var5 = var6.bind(var7)(var5);
            var5 = var5.colors;
            var4 = var5.BACKGROUND_SECONDARY;
case 31:
            var3 = var4;
case 30:
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
    var6 = {};
    var9 = 'function GuildsBarAnimatedItemWrapperTsx4(){const{withSpring,panelX,MIN_OPACITY_REVEAL_WIDTH,MAX_OPACITY_REVEAL_WIDTH,HOME_DRAWER_FLING_PHYSICS}=this.__closure;return{opacity:withSpring(Math.max(0,Math.min(1,(panelX.get()-MIN_OPACITY_REVEAL_WIDTH)/MAX_OPACITY_REVEAL_WIDTH)),HOME_DRAWER_FLING_PHYSICS)};}';
    var6['code'] = var9;
    var _closure1_slot18 = var6;
    var6 = 17;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/guilds_bar/native/GuildsBarAnimatedItemWrapper.tsx';
    var6 = var7.bind(var8)(var6);
    var5 = function GuildsBarAnimatedItemWrapper(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var6 = arg1;
            var11 = var6.id;
            var _closure2_slot0 = var11;
            var25 = var6.selected;
            var _closure2_slot1 = var25;
            var3 = var6.unread;
            var27 = var6.circle;
            var _closure2_slot2 = var27;
            var19 = var6.children;
            var9 = var6.externalChildren;
            var10 = var6.expandedChildren;
            var14 = var6.config;
            var28 = var6.label;
            var8 = var6.draggable;
            var4 = undefined;
            if(!(var8 === var4)) { _fun0006_ip = 33; continue _fun0006 }
case 34:
            var8 = false;
case 33:
            var20 = var6.cutouts;
            var18 = var6.isDragTarget;
            if(!(var18 === var4)) { _fun0006_ip = 35; continue _fun0006 }
case 36:
            var18 = false;
case 35:
            var _closure2_slot3 = var18;
            var38 = var6.dragState;
            var _closure2_slot4 = var38;
            var2 = var6.isDragPreview;
            if(!(var2 === var4)) { _fun0006_ip = 37; continue _fun0006 }
case 38:
            var2 = false;
case 37:
            var37 = var6.draggedItemSize;
            if(!(var37 === var4)) { _fun0006_ip = 39; continue _fun0006 }
case 40:
            var37 = 0;
case 39:
            var _closure2_slot5 = var37;
            var32 = var6.overState;
            var _closure2_slot6 = var32;
            var24 = var6.styles;
            var _closure2_slot7 = var24;
            var17 = var6.accessibilityActions;
            var16 = var6.onAccessibilityAction;
            var5 = var6.preventClipping;
            if(!(var5 === var4)) { _fun0006_ip = 41; continue _fun0006 }
case 42:
            var5 = false;
case 41:
            var29 = var6.entering;
            var21 = var6.exiting;
            var30 = var6.layout;
            var13 = var6.zIndex;
            if(!(var13 === var4)) { _fun0006_ip = 43; continue _fun0006 }
case 44:
            var13 = 0;
case 43:
            var _closure2_slot8 = var13;
            var12 = var6.sharedId;
            var _closure2_slot9 = var12;
            var _closure2_slot10 = var4;
            var _closure2_slot11 = var4;
            var15 = _closure1_slot1;
            var34 = _closure1_slot2;
            var7 = 11;
            var7 = var34[var7];
            var7 = var15.bind(var4)(var7);
            var14 = var7.bind(var4)(var14);
            var33 = _closure1_slot0;
            var7 = 9;
            var15 = var34[var7];
            var23 = var33.bind(var4)(var15);
            var22 = var23.useAnimatedStyle;
            var15 = function Z() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var1 = {};
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 8;
                    var4 = var4[var3];
                    var3 = undefined;
                    var6 = var5.bind(var3)(var4);
                    var5 = var6.withSpring;
                    var3 = _closure2_slot2;
                    if(var3) { _fun0007_ip = 45; continue _fun0007 }
case 3:
                    var4 = _closure1_slot6;
                    _fun0007_ip = 46; continue _fun0007;
case 45:
                    var7 = _closure1_slot5;
                    var3 = 2;
                    var4 = var7 / var3;
case 46:
                    var3 = _closure1_slot11;
                    var2 = 'animate-always';
                    var2 = var5.bind(var6)(var4, var3, var2);
                    var1['borderRadius'] = var2;
                    return var1;
                }
            };
            var26 = {};
            var36 = 8;
            var31 = var34[var36];
            var31 = var33.bind(var4)(var31);
            var31 = var31.withSpring;
            var26['withSpring'] = var31;
            var26['circle'] = var27;
            var27 = _closure1_slot6;
            var26['GUILD_ITEM_SELECTED_BORDER_RADIUS'] = var27;
            var27 = _closure1_slot5;
            var26['GUILD_ITEM_SIZE'] = var27;
            var27 = _closure1_slot11;
            var26['CORNER_SPRING_PHYSICS'] = var27;
            var15['__closure'] = var26;
            var26 = 11828610342492.0;
            var15['__workletHash'] = var26;
            var26 = _closure1_slot17;
            var15['__initData'] = var26;
            var22 = var22.bind(var23)(var15);
            var26 = _closure1_slot3;
            var23 = var26.useContext;
            var31 = 12;
            var15 = var34[var31];
            var15 = var33.bind(var4)(var15);
            var15 = var15.HomeDrawerStateContext;
            var15 = var23.bind(var26)(var15);
            var35 = var15.panelX;
            _closure2_slot10 = var35;
            var15 = 13;
            var15 = var34[var15];
            var26 = var33.bind(var4)(var15);
            var23 = var26.useClientThemesOverride;
            var15 = var24.itemShapeThemed;
            var23 = var23.bind(var26)(var15);
            var27 = _closure1_slot3;
            var26 = var27.useMemo;
            var15 = new Array(5);
            var15[0] = var18;
            var15[1] = var38;
            var15[2] = var37;
            var15[3] = var32;
            var15[4] = var13;
            var13 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var1 = _closure2_slot3;
                    if(!var1) { _fun0008_ip = 47; continue _fun0008 }
case 48:
                    var3 = _closure2_slot4;
                    var1 = 'dragging';
                    if(!(var1 === var3)) { _fun0008_ip = 47; continue _fun0008 }
case 49:
                    var3 = _closure2_slot6;
                    var5 = 'hide';
                    var1 = 'self';
                    if(!(var1 === var3)) { _fun0008_ip = 50; continue _fun0008 }
case 47:
                    var3 = _closure2_slot6;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0008_ip = 51; continue _fun0008 }
case 45:
                    var3 = _closure2_slot6;
                    var1 = 'self';
                    if(!(var1 !== var3)) { _fun0008_ip = 51; continue _fun0008 }
case 17:
                    var4 = _closure2_slot4;
                    var1 = 'drag-target';
                    var3 = 'dragging';
                    if(!(var3 !== var4)) { _fun0008_ip = 52; continue _fun0008 }
case 51:
                    var1 = 'none';
case 52:
                    var5 = var1;
case 50:
                    var1 = {};
                    var4 = 'drag-target';
                    if(!(var4 !== var5)) { _fun0008_ip = 53; continue _fun0008 }
case 36:
                    var6 = 'hide';
                    var3 = 0;
                    if(!(var6 !== var5)) { _fun0008_ip = 54; continue _fun0008 }
case 55:
                    var3 = _closure1_slot8;
case 54:
                    _fun0008_ip = 56; continue _fun0008;
case 53:
                    var7 = _closure1_slot8;
                    var6 = _closure2_slot5;
                    var3 = var7 + var6;
case 56:
                    var1['height'] = var3;
                    var3 = 0;
                    if(!(var4 === var5)) { _fun0008_ip = 57; continue _fun0008 }
case 58:
                    var5 = _closure2_slot6;
                    var4 = 'before';
                    if(!(var4 !== var5)) { _fun0008_ip = 59; continue _fun0008 }
case 60:
                    var5 = _closure2_slot6;
                    var4 = 'convert-before';
                    var3 = 0;
                    if(!(var4 === var5)) { _fun0008_ip = 57; continue _fun0008 }
case 59:
                    var3 = _closure2_slot5;
case 57:
                    var1['top'] = var3;
                    var2 = _closure2_slot8;
                    var1['zIndex'] = var2;
                    return var1;
                }
            };
            var32 = var26.bind(var27)(var13, var15);
            var27 = _closure1_slot3;
            var26 = var27.useMemo;
            var13 = var24.pressableWrapper;
            var15 = new Array(2);
            var15[0] = var13;
            var15[1] = var18;
            var13 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var1 = _closure2_slot7;
                    var3 = var1.pressableWrapper;
                    var1 = new Array(3);
                    var1[0] = var3;
                    var3 = _closure2_slot3;
                    var2 = undefined;
                    if(!var3) { _fun0009_ip = 61; continue _fun0009 }
case 62:
                    var3 = _closure1_slot13;
                    var2 = var3.draggedElement;
case 61:
                    var1[1] = var2;
                    var2 = _closure1_slot4;
                    var1[2] = var2;
                    return var1;
                }
            };
            var26 = var26.bind(var27)(var13, var15);
            var7 = var34[var7];
            var15 = var33.bind(var4)(var7);
            var13 = var15.useAnimatedStyle;
            var7 = function F() {
                var1 = {};
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var2 = 8;
                var2 = var8[var2];
                var6 = undefined;
                var5 = var7.bind(var6)(var2);
                var4 = var5.withSpring;
                var2 = global;
                var10 = var2.Math;
                var9 = var10.max;
                var12 = var2.Math;
                var11 = var12.min;
                var3 = _closure2_slot10;
                var2 = var3.get;
                var3 = var2.bind(var3)();
                var2 = 30;
                var13 = var3 - var2;
                var3 = 1;
                var2 = 150;
                var2 = var13 / var2;
                var3 = var11.bind(var12)(var3, var2);
                var2 = 0;
                var3 = var9.bind(var10)(var2, var3);
                var2 = 12;
                var2 = var8[var2];
                var2 = var7.bind(var6)(var2);
                var2 = var2.HOME_DRAWER_FLING_PHYSICS;
                var2 = var4.bind(var5)(var3, var2);
                var1['opacity'] = var2;
                return var1;
            };
            var27 = {};
            var36 = var34[var36];
            var36 = var33.bind(var4)(var36);
            var36 = var36.withSpring;
            var27['withSpring'] = var36;
            var27['panelX'] = var35;
            var35 = 30;
            var27['MIN_OPACITY_REVEAL_WIDTH'] = var35;
            var35 = 150;
            var27['MAX_OPACITY_REVEAL_WIDTH'] = var35;
            var31 = var34[var31];
            var31 = var33.bind(var4)(var31);
            var31 = var31.HOME_DRAWER_FLING_PHYSICS;
            var27['HOME_DRAWER_FLING_PHYSICS'] = var31;
            var7['__closure'] = var27;
            var27 = 97576264833.0;
            var7['__workletHash'] = var27;
            var27 = _closure1_slot18;
            var7['__initData'] = var27;
            var13 = var13.bind(var15)(var7);
            var15 = !var3;
            if(!var15) { _fun0006_ip = 63; continue _fun0006 }
case 64:
            var15 = !var25;
case 63:
            if(var15) { _fun0006_ip = 65; continue _fun0006 }
case 66:
            var15 = var18;
case 65:
            if(var15) { _fun0006_ip = 67; continue _fun0006 }
case 68:
            var15 = var2;
case 67:
            _closure2_slot11 = var15;
            var7 = _closure1_slot3;
            var3 = var7.useMemo;
            var2 = new Array(4);
            var2[0] = var15;
            var2[1] = var25;
            var2[2] = var12;
            var2[3] = var11;
            var1 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var1 = _closure2_slot11;
                    if(var1) { _fun0010_ip = 69; continue _fun0010 }
case 48:
                    var1 = {};
                    var3 = _closure2_slot1;
                    var1['selected'] = var3;
                    var3 = _closure2_slot9;
                    var1['sharedId'] = var3;
                    var2 = _closure2_slot0;
                    var1['id'] = var2;
                    return var1;
case 69:
                    var1 = undefined;
                    return var1;
                }
            };
            var27 = var3.bind(var7)(var1, var2);
            var1 = _closure1_slot14;
            var11 = var1.bind(var4)();
            var3 = _closure1_slot10;
            var7 = _closure1_slot1;
            var12 = _closure1_slot2;
            var15 = 10;
            var1 = var12[var15];
            var2 = var7.bind(var4)(var1);
            var1 = {};
            var33 = var11.container;
            var31 = new Array(2);
            var31[0] = var33;
            var31[1] = var32;
            var1['style'] = var31;
            var1['layout'] = var30;
            var1['entering'] = var29;
            var1['exiting'] = var21;
            var1['preventClipping'] = var5;
            var21 = false;
            var1['collapsable'] = var21;
            var5 = 14;
            var5 = var12[var5];
            var7 = var7.bind(var4)(var5);
            var5 = {};
            var41 = var5;
            var40 = var14;
            var12 = copyDataProperties(var41, var40);
            var12 = 'style';
            var5[var12] = var26;
            var26 = 'accessibilityLabel';
            var5[var26] = var28;
            var28 = true;
            var26 = 'accessible';
            var5[var26] = var28;
            var28 = 'button';
            var26 = 'accessibilityRole';
            var5[var26] = var28;
            var28 = {};
            var28['selected'] = var25;
            var26 = 'accessibilityState';
            var5[var26] = var28;
            var28 = _closure1_slot7;
            var26 = 'hitSlop';
            var5[var26] = var28;
            var26 = undefined;
            if(!var8) { _fun0006_ip = 70; continue _fun0006 }
case 71:
            var30 = _closure1_slot0;
            var31 = _closure1_slot2;
            var8 = 15;
            var28 = var31[var8];
            var28 = var30.bind(var4)(var28);
            var29 = var28.intl;
            var28 = var29.string;
            var8 = var31[var8];
            var8 = var30.bind(var4)(var8);
            var8 = var8.t;
            var8 = var8.BGMUFB;
            var26 = var28.bind(var29)(var8);
case 70:
            var8 = 'accessibilityHint';
            var5[var8] = var26;
            var8 = 'collapsable';
            var5[var8] = var21;
            var8 = 'accessibilityActions';
            var5[var8] = var17;
            var8 = 'onAccessibilityAction';
            var5[var8] = var16;
            var8 = new Array(3);
            var8[0] = var9;
            var26 = _closure1_slot9;
            var16 = _closure1_slot0;
            var21 = _closure1_slot2;
            var9 = 7;
            var9 = var21[var9];
            var9 = var16.bind(var4)(var9);
            var17 = var9.TransitionItem;
            var9 = {};
            var9['item'] = var27;
            var27 = _closure1_slot20;
            var9['renderItem'] = var27;
            var9 = var26.bind(var4)(var17, var9);
            var8[1] = var9;
            var17 = _closure1_slot9;
            var9 = 16;
            var9 = var21[var9];
            var9 = var16.bind(var4)(var9);
            var16 = var9.ClipViewAnimated;
            var9 = {};
            var26 = var24.itemShape;
            var21 = new Array(4);
            var21[0] = var26;
            var21[1] = var23;
            var23 = undefined;
            if(!var25) { _fun0006_ip = 72; continue _fun0006 }
case 73:
            var23 = var24.itemShapeSelected;
case 72:
            var21[2] = var23;
            var21[3] = var22;
            var9['style'] = var21;
            var9['cutouts'] = var20;
            var18 = !var18;
            if(!var18) { _fun0006_ip = 74; continue _fun0006 }
case 75:
            var18 = var19;
case 74:
            var9['children'] = var18;
            var9 = var17.bind(var4)(var16, var9);
            var8[2] = var9;
            var9 = 'children';
            var5[var9] = var8;
            var7 = var3.bind(var4)(var7, var5);
            var5 = new Array(2);
            var5[0] = var7;
            var8 = _closure1_slot9;
            var7 = _closure1_slot1;
            var6 = _closure1_slot2;
            var6 = var6[var15];
            var7 = var7.bind(var4)(var6);
            var6 = {};
            var41 = var6;
            var40 = var14;
            var14 = copyDataProperties(var41, var40);
            var14 = var11.expandedChildrenWrapper;
            var11 = new Array(2);
            var11[0] = var14;
            var11[1] = var13;
            var6[var12] = var11;
            var6[var9] = var10;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
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