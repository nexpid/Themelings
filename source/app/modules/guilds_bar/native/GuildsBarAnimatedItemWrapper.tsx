// app/modules/guilds_bar/native/GuildsBarAnimatedItemWrapper.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var8;
    var4 = function UnreadIndicator(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var5 = var1.selected;
            var17 = var1.sharedId;
            var _closure2_slot0 = var17;
            var16 = var1.id;
            var _closure2_slot1 = var16;
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
            var _closure2_slot7 = var4;
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 6;
            var3 = var6[var3];
            var9 = var7.bind(var4)(var3);
            var8 = var9.useToken;
            var12 = _closure1_slot1;
            var3 = 5;
            var3 = var6[var3];
            var3 = var12.bind(var4)(var3);
            var3 = var3.modules;
            var3 = var3.mobile;
            var3 = var3.GUILD_BAR_ITEM_SIZE;
            var15 = var8.bind(var9)(var3);
            _closure2_slot4 = var15;
            var3 = _closure1_slot6;
            var8 = var3.bind(var4)();
            var3 = _closure1_slot11;
            var3 = var3.bind(var4)(var8);
            _closure2_slot5 = var3;
            var12 = 7;
            var6 = var6[var12];
            var6 = var7.bind(var4)(var6);
            var6 = var6.TransitionStates;
            var6 = var6.MOUNTED;
            var18 = var11 === var6;
            _closure2_slot6 = var18;
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
            _closure2_slot7 = var8;
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
                    var1 = _closure2_slot5;
                    var2 = var1.unreadIndicator;
                    var1 = new Array(2);
                    var1[0] = var2;
                    var2 = {};
                    var4 = _closure2_slot7;
                    var2['height'] = var4;
                    var5 = _closure2_slot7;
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
                    var5 = arg1;
                    var1 = _closure2_slot6;
                    if(var1) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                    var2 = _closure2_slot0;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                    var2 = _closure2_slot0;
                    var1 = var2.get;
                    var2 = var1.bind(var2)();
                    var1 = _closure2_slot1;
                    if(!(var2 === var1)) { _fun0003_ip = 9; continue _fun0003 }
case 11:
                    var1 = {};
                    var2 = {};
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var6 = 8;
                    var8 = var10[var6];
                    var7 = undefined;
                    var14 = var9.bind(var7)(var8);
                    var13 = var14.withSpring;
                    var12 = var5.targetOriginY;
                    var11 = _closure1_slot10;
                    var8 = 'animate-always';
                    var11 = var13.bind(var14)(var12, var11, var8);
                    var2['originY'] = var11;
                    var11 = var10[var6];
                    var14 = var9.bind(var7)(var11);
                    var13 = var14.withSpring;
                    var12 = var5.targetOriginX;
                    var11 = _closure1_slot10;
                    var11 = var13.bind(var14)(var12, var11, var8);
                    var2['originX'] = var11;
                    var6 = var10[var6];
                    var7 = var9.bind(var7)(var6);
                    var6 = var7.withSpring;
                    var5 = var5.targetHeight;
                    var4 = _closure1_slot10;
                    var4 = var6.bind(var7)(var5, var4, var8);
                    var2['height'] = var4;
                    var1['animations'] = var2;
                    var2 = {'height': 8, 'originY': null, 'originX': 4294967284};
                    var4 = _closure2_slot4;
                    var3 = 2;
                    var3 = var4 / var3;
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
            var3['disableEntering'] = var18;
            var3['sharedId'] = var17;
            var3['id'] = var16;
            var13 = _closure1_slot0;
            var8 = _closure1_slot2;
            var19 = var8[var14];
            var19 = var13.bind(var4)(var19);
            var19 = var19.withSpring;
            var3['withSpring'] = var19;
            var19 = _closure1_slot10;
            var3['BAR_SPRING_PHYSICS'] = var19;
            var3['guildItemSize'] = var15;
            var6['__closure'] = var3;
            var3 = 404454683979.0;
            var6['__workletHash'] = var3;
            var3 = _closure1_slot13;
            var6['__initData'] = var3;
            var3 = new Array(4);
            var3[0] = var18;
            var3[1] = var17;
            var3[2] = var16;
            var3[3] = var15;
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
                var10 = _closure1_slot10;
                var8 = 'animate-always';
                var10 = var12.bind(var13)(var11, var10, var8);
                var2['originY'] = var10;
                var10 = var9[var5];
                var13 = var7.bind(var6)(var10);
                var12 = var13.withSpring;
                var11 = var3.targetOriginX;
                var10 = _closure1_slot10;
                var10 = var12.bind(var13)(var11, var10, var8);
                var2['originX'] = var10;
                var5 = var9[var5];
                var7 = var7.bind(var6)(var5);
                var6 = var7.withSpring;
                var5 = var3.targetHeight;
                var4 = _closure1_slot10;
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
            var14 = _closure1_slot10;
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
            var2 = _closure1_slot14;
            var3['__initData'] = var2;
            var2 = new Array(2);
            var2[0] = var11;
            var2[1] = var10;
            var6 = var6.bind(var9)(var3, var2);
            var3 = _closure1_slot7;
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
    var _closure1_slot17 = var4;
    var2 = function renderUnreadIndicator(arg1, arg2, arg3, arg4) {
        var2 = arg2;
        var1 = var2.selected;
        var6 = var2.sharedId;
        var2 = var2.id;
        var5 = _closure1_slot7;
        var4 = _closure1_slot17;
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
    var _closure1_slot18 = var2;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var6);
    var1 = 0;
    var9 = var8[var1];
    var6 = metroImportAll;
    var1 = undefined;
    var6 = var6.bind(var1)(var9);
    var _closure1_slot3 = var6;
    var6 = 1;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var6 = var6.IOS_POINTER_STYLE;
    var _closure1_slot4 = var6;
    var6 = 2;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var9 = var6.GUILD_ITEM_HIT_SLOP;
    var _closure1_slot5 = var9;
    var6 = var6.useGuildWrapperSize;
    var _closure1_slot6 = var6;
    var6 = 3;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var9 = var6.jsx;
    var _closure1_slot7 = var9;
    var6 = var6.jsxs;
    var _closure1_slot8 = var6;
    var6 = {'mass': 0.8, 'damping': 100, 'stiffness': 150};
    var _closure1_slot9 = var6;
    var6 = {'mass': 0.25, 'damping': 100, 'stiffness': 200};
    var _closure1_slot10 = var6;
    var6 = 4;
    var9 = var8[var6];
    var11 = var7.bind(var1)(var9);
    var10 = var11.createStyles;
    var9 = function() {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var3 = arguments[0];
            var6 = undefined;
            if(!(var3 === var6)) { _fun0005_ip = 20; continue _fun0005 }
case 21:
            var3 = 56;
case 20:
            var1 = {};
            var2 = {};
            var4 = 0;
            var2['opacity'] = var4;
            var1['draggedElement'] = var2;
            var2 = {'position': 'relative', 'overflow': 'visible'};
            var1['container'] = var2;
            var2 = {'position': 'absolute', 'top': null, 'left': 4294967292, 'height': 8, 'width': 8};
            var4 = 2;
            var4 = var3 / var4;
            var2['top'] = var4;
            var5 = _closure1_slot1;
            var7 = _closure1_slot2;
            var4 = 5;
            var8 = var7[var4];
            var8 = var5.bind(var6)(var8);
            var8 = var8.radii;
            var8 = var8.xs;
            var2['borderRadius'] = var8;
            var4 = var7[var4];
            var4 = var5.bind(var6)(var4);
            var4 = var4.colors;
            var4 = var4.INTERACTIVE_TEXT_ACTIVE;
            var2['backgroundColor'] = var4;
            var1['unreadIndicator'] = var2;
            var2 = {'position': 'absolute', 'left': null, 'top': 0, 'right': 16, 'height': null, 'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center'};
            var4 = 16;
            var4 = var3 + var4;
            var2['left'] = var4;
            var2['height'] = var3;
            var1['expandedChildrenWrapper'] = var2;
            return var1;
        }
    };
    var9 = var10.bind(var11)(var9);
    var _closure1_slot11 = var9;
    var6 = var8[var6];
    var10 = var7.bind(var1)(var6);
    var9 = var10.createStyles;
    var6 = function(arg1, arg2, arg3, arg4) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var6 = arg2;
            var3 = arg3;
            var1 = {};
            var2 = {};
            var4 = 'relative';
            var2['position'] = var4;
            var9 = _closure1_slot1;
            var4 = _closure1_slot2;
            var8 = 5;
            var10 = var4[var8];
            var7 = undefined;
            var10 = var9.bind(var7)(var10);
            var10 = var10.modules;
            var10 = var10.mobile;
            var10 = var10.GUILD_BAR_ITEM_MARGIN;
            var2['paddingTop'] = var10;
            var4 = var4[var8];
            var4 = var9.bind(var7)(var4);
            var4 = var4.modules;
            var4 = var4.mobile;
            var4 = var4.GUILD_BAR_ITEM_MARGIN;
            var2['paddingBottom'] = var4;
            var4 = 12;
            var2['paddingLeft'] = var4;
            var4 = arg4;
            var2['height'] = var4;
            var4 = _closure1_slot5;
            var9 = var4.left;
            var9 = var3 + var9;
            var4 = var4.right;
            var4 = var9 + var4;
            var2['width'] = var4;
            var1['pressableWrapper'] = var2;
            var2 = {'position': 'relative', 'width': null, 'height': null, 'overflow': 'hidden', 'justifyContent': 'center', 'alignItems': 'center'};
            var2['width'] = var3;
            var2['height'] = var3;
            var4 = 'transparent';
            var3 = var4;
            if(var6) { _fun0006_ip = 22; continue _fun0006 }
case 23:
            var10 = _closure1_slot1;
            var9 = _closure1_slot2;
            var9 = var9[var8];
            var9 = var10.bind(var7)(var9);
            var9 = var9.colors;
            var3 = var9.MOBILE_GUILDBAR_ICON_BACKGROUND_DEFAULT;
case 22:
            var2['backgroundColor'] = var3;
            var1['itemShape'] = var2;
            var2 = {};
            var3 = arg1;
            if(var3) { _fun0006_ip = 24; continue _fun0006 }
case 25:
            var9 = _closure1_slot1;
            var3 = _closure1_slot2;
            var3 = var3[var8];
            var3 = var9.bind(var7)(var3);
            var3 = var3.colors;
            var3 = var3.BACKGROUND_BRAND;
            _fun0006_ip = 26; continue _fun0006;
case 24:
            if(var6) { _fun0006_ip = 27; continue _fun0006 }
case 28:
            var6 = _closure1_slot1;
            var5 = _closure1_slot2;
            var5 = var5[var8];
            var5 = var6.bind(var7)(var5);
            var5 = var5.colors;
            var4 = var5.BACKGROUND_SURFACE_HIGH;
case 27:
            var3 = var4;
case 26:
            var2['backgroundColor'] = var3;
            var1['itemShapeSelected'] = var2;
            return var1;
        }
    };
    var6 = var9.bind(var10)(var6);
    var _closure1_slot12 = var6;
    var6 = {};
    var9 = "function GuildsBarAnimatedItemWrapperTsx1(values){const{disableEntering,sharedId,id,withSpring,BAR_SPRING_PHYSICS,guildItemSize}=this.__closure;if(disableEntering||sharedId!=null&&sharedId.get()!==id){return{animations:{},initialValues:{}};}return{animations:{originY:withSpring(values.targetOriginY,BAR_SPRING_PHYSICS,'animate-always'),originX:withSpring(values.targetOriginX,BAR_SPRING_PHYSICS,'animate-always'),height:withSpring(values.targetHeight,BAR_SPRING_PHYSICS,'animate-always')},initialValues:{height:8,originY:guildItemSize/2,originX:-12}};}";
    var6['code'] = var9;
    var _closure1_slot13 = var6;
    var6 = {};
    var9 = "function GuildsBarAnimatedItemWrapperTsx2(values){const{withSpring,BAR_SPRING_PHYSICS,transitionState,TransitionStates,cleanUp,runOnJS}=this.__closure;return{animations:{originY:withSpring(values.targetOriginY,BAR_SPRING_PHYSICS,'animate-always'),originX:withSpring(values.targetOriginX,BAR_SPRING_PHYSICS,'animate-always'),height:withSpring(values.targetHeight,BAR_SPRING_PHYSICS,'animate-always')},initialValues:{height:values.currentHeight,originY:values.currentOriginY,originX:values.currentOriginX},callback:function(finished){if(transitionState===TransitionStates.YEETED&&finished&&cleanUp!=null){runOnJS(cleanUp)();}}};}";
    var6['code'] = var9;
    var _closure1_slot14 = var6;
    var6 = {};
    var9 = "function GuildsBarAnimatedItemWrapperTsx3(){const{withSpring,circle,guildItemSelectedBorderRadius,guildItemSize,CORNER_SPRING_PHYSICS}=this.__closure;return{borderRadius:withSpring(!circle?guildItemSelectedBorderRadius:guildItemSize/2,CORNER_SPRING_PHYSICS,'animate-always')};}";
    var6['code'] = var9;
    var _closure1_slot15 = var6;
    var6 = {};
    var9 = 'function GuildsBarAnimatedItemWrapperTsx4(){const{withSpring,panelX,MIN_OPACITY_REVEAL_WIDTH,MAX_OPACITY_REVEAL_WIDTH,HOME_DRAWER_FLING_PHYSICS}=this.__closure;return{opacity:withSpring(Math.max(0,Math.min(1,(panelX.get()-MIN_OPACITY_REVEAL_WIDTH)/MAX_OPACITY_REVEAL_WIDTH)),HOME_DRAWER_FLING_PHYSICS)};}';
    var6['code'] = var9;
    var _closure1_slot16 = var6;
    var6 = 18;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/guilds_bar/native/GuildsBarAnimatedItemWrapper.tsx';
    var6 = var7.bind(var8)(var6);
    var6 = function GuildsBarAnimatedItemWrapper(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var7 = arg1;
            var1 = var7.id;
            var _closure2_slot0 = var1;
            var28 = var7.selected;
            var _closure2_slot1 = var28;
            var6 = var7.unread;
            var42 = var7.circle;
            var _closure2_slot2 = var42;
            var22 = var7.children;
            var10 = var7.externalChildren;
            var11 = var7.expandedChildren;
            var29 = var7.config;
            var31 = var7.label;
            var24 = var7.hint;
            var _closure2_slot3 = var24;
            var18 = var7.draggable;
            var4 = undefined;
            if(!(var18 === var4)) { _fun0007_ip = 29; continue _fun0007 }
case 30:
            var18 = false;
case 29:
            var _closure2_slot4 = var18;
            var23 = var7.cutouts;
            var21 = var7.isDragTarget;
            if(!(var21 === var4)) { _fun0007_ip = 31; continue _fun0007 }
case 32:
            var21 = false;
case 31:
            var _closure2_slot5 = var21;
            var41 = var7.dragState;
            var _closure2_slot6 = var41;
            var3 = var7.isDragPreview;
            if(!(var3 === var4)) { _fun0007_ip = 33; continue _fun0007 }
case 34:
            var3 = false;
case 33:
            var40 = var7.draggedItemSize;
            if(!(var40 === var4)) { _fun0007_ip = 35; continue _fun0007 }
case 36:
            var40 = 0;
case 35:
            var _closure2_slot7 = var40;
            var39 = var7.overState;
            var _closure2_slot8 = var39;
            var27 = var7.styles;
            var _closure2_slot9 = var27;
            var20 = var7.accessibilityActions;
            var19 = var7.onAccessibilityAction;
            var5 = var7.preventClipping;
            if(!(var5 === var4)) { _fun0007_ip = 37; continue _fun0007 }
case 38:
            var5 = false;
case 37:
            var26 = var7.expanded;
            var _closure2_slot10 = var26;
            var13 = var7.entering;
            var9 = var7.exiting;
            var17 = var7.layout;
            var33 = var7.zIndex;
            if(!(var33 === var4)) { _fun0007_ip = 39; continue _fun0007 }
case 40:
            var33 = 0;
case 39:
            var _closure2_slot11 = var33;
            var16 = var7.sharedId;
            var _closure2_slot12 = var16;
            var _closure2_slot13 = var4;
            var _closure2_slot14 = var4;
            var _closure2_slot15 = var4;
            var _closure2_slot16 = var4;
            var _closure2_slot17 = var4;
            var _closure2_slot18 = var4;
            var _closure2_slot19 = var4;
            var8 = _closure1_slot6;
            var14 = var8.bind(var4)();
            _closure2_slot13 = var14;
            var35 = _closure1_slot0;
            var36 = _closure1_slot2;
            var25 = 6;
            var8 = var36[var25];
            var32 = var35.bind(var4)(var8);
            var15 = var32.useToken;
            var30 = _closure1_slot1;
            var8 = 5;
            var12 = var36[var8];
            var12 = var30.bind(var4)(var12);
            var12 = var12.modules;
            var12 = var12.mobile;
            var12 = var12.GUILD_BAR_ITEM_SIZE;
            var34 = var15.bind(var32)(var12);
            _closure2_slot14 = var34;
            var12 = _closure1_slot11;
            var12 = var12.bind(var4)(var14);
            _closure2_slot15 = var12;
            var15 = 11;
            var15 = var36[var15];
            var15 = var30.bind(var4)(var15);
            var15 = var15.bind(var4)(var29);
            var25 = var36[var25];
            var29 = var35.bind(var4)(var25);
            var25 = var29.useToken;
            var8 = var36[var8];
            var8 = var30.bind(var4)(var8);
            var8 = var8.modules;
            var8 = var8.mobile;
            var8 = var8.GUILD_ITEM_SELECTED_BORDER_RADIUS;
            var37 = var25.bind(var29)(var8);
            _closure2_slot16 = var37;
            var8 = 9;
            var25 = var36[var8];
            var30 = var35.bind(var4)(var25);
            var29 = var30.useAnimatedStyle;
            var25 = function V() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var1 = {};
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 8;
                    var4 = var4[var3];
                    var3 = undefined;
                    var6 = var5.bind(var3)(var4);
                    var5 = var6.withSpring;
                    var4 = _closure2_slot2;
                    if(var4) { _fun0008_ip = 41; continue _fun0008 }
case 3:
                    var4 = _closure2_slot16;
                    _fun0008_ip = 42; continue _fun0008;
case 41:
                    var7 = _closure2_slot14;
                    var3 = 2;
                    var4 = var7 / var3;
case 42:
                    var3 = _closure1_slot9;
                    var2 = 'animate-always';
                    var2 = var5.bind(var6)(var4, var3, var2);
                    var1['borderRadius'] = var2;
                    return var1;
                }
            };
            var32 = {};
            var38 = 8;
            var43 = var36[var38];
            var43 = var35.bind(var4)(var43);
            var43 = var43.withSpring;
            var32['withSpring'] = var43;
            var32['circle'] = var42;
            var32['guildItemSelectedBorderRadius'] = var37;
            var32['guildItemSize'] = var34;
            var34 = _closure1_slot9;
            var32['CORNER_SPRING_PHYSICS'] = var34;
            var25['__closure'] = var32;
            var32 = 15930523896348.0;
            var25['__workletHash'] = var32;
            var32 = _closure1_slot15;
            var25['__initData'] = var32;
            var25 = var29.bind(var30)(var25);
            var32 = _closure1_slot3;
            var30 = var32.useContext;
            var34 = 12;
            var29 = var36[var34];
            var29 = var35.bind(var4)(var29);
            var29 = var29.HomeDrawerStateContext;
            var29 = var30.bind(var32)(var29);
            var37 = var29.panelX;
            _closure2_slot17 = var37;
            var32 = _closure1_slot3;
            var30 = var32.useMemo;
            var29 = new Array(6);
            var29[0] = var21;
            var29[1] = var41;
            var29[2] = var40;
            var29[3] = var39;
            var29[4] = var33;
            var29[5] = var14;
            var14 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var1 = _closure2_slot5;
                    if(!var1) { _fun0009_ip = 43; continue _fun0009 }
case 44:
                    var3 = _closure2_slot6;
                    var1 = 'dragging';
                    if(!(var1 === var3)) { _fun0009_ip = 43; continue _fun0009 }
case 45:
                    var3 = _closure2_slot8;
                    var5 = 'hide';
                    var1 = 'self';
                    if(!(var1 === var3)) { _fun0009_ip = 46; continue _fun0009 }
case 43:
                    var3 = _closure2_slot8;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0009_ip = 47; continue _fun0009 }
case 41:
                    var3 = _closure2_slot8;
                    var1 = 'self';
                    if(!(var1 !== var3)) { _fun0009_ip = 47; continue _fun0009 }
case 17:
                    var4 = _closure2_slot6;
                    var1 = 'drag-target';
                    var3 = 'dragging';
                    if(!(var3 !== var4)) { _fun0009_ip = 48; continue _fun0009 }
case 47:
                    var1 = 'none';
case 48:
                    var5 = var1;
case 46:
                    var1 = {};
                    var4 = 'drag-target';
                    if(!(var4 !== var5)) { _fun0009_ip = 49; continue _fun0009 }
case 50:
                    var6 = 'hide';
                    var3 = 0;
                    if(!(var6 !== var5)) { _fun0009_ip = 18; continue _fun0009 }
case 51:
                    var3 = _closure2_slot13;
case 18:
                    _fun0009_ip = 52; continue _fun0009;
case 49:
                    var7 = _closure2_slot13;
                    var6 = _closure2_slot7;
                    var3 = var7 + var6;
case 52:
                    var1['height'] = var3;
                    var3 = 0;
                    if(!(var4 === var5)) { _fun0009_ip = 53; continue _fun0009 }
case 54:
                    var5 = _closure2_slot8;
                    var4 = 'before';
                    if(!(var4 !== var5)) { _fun0009_ip = 55; continue _fun0009 }
case 56:
                    var5 = _closure2_slot8;
                    var4 = 'convert-before';
                    var3 = 0;
                    if(!(var4 === var5)) { _fun0009_ip = 53; continue _fun0009 }
case 55:
                    var3 = _closure2_slot7;
case 53:
                    var1['top'] = var3;
                    var2 = _closure2_slot11;
                    var1['zIndex'] = var2;
                    return var1;
                }
            };
            var32 = var30.bind(var32)(var14, var29);
            var33 = _closure1_slot3;
            var30 = var33.useMemo;
            var14 = var27.pressableWrapper;
            var29 = new Array(3);
            var29[0] = var14;
            var29[1] = var21;
            var14 = var12.draggedElement;
            var29[2] = var14;
            var14 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var1 = _closure2_slot9;
                    var2 = var1.pressableWrapper;
                    var1 = new Array(3);
                    var1[0] = var2;
                    var4 = _closure2_slot5;
                    var2 = undefined;
                    if(!var4) { _fun0010_ip = 57; continue _fun0010 }
case 58:
                    var3 = _closure2_slot15;
                    var2 = var3.draggedElement;
case 57:
                    var1[1] = var2;
                    var2 = _closure1_slot4;
                    var1[2] = var2;
                    return var1;
                }
            };
            var30 = var30.bind(var33)(var14, var29);
            var8 = var36[var8];
            var29 = var35.bind(var4)(var8);
            var14 = var29.useAnimatedStyle;
            var8 = function z() {
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
                var3 = _closure2_slot17;
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
            var33 = {};
            var38 = var36[var38];
            var38 = var35.bind(var4)(var38);
            var38 = var38.withSpring;
            var33['withSpring'] = var38;
            var33['panelX'] = var37;
            var37 = 30;
            var33['MIN_OPACITY_REVEAL_WIDTH'] = var37;
            var37 = 150;
            var33['MAX_OPACITY_REVEAL_WIDTH'] = var37;
            var34 = var36[var34];
            var34 = var35.bind(var4)(var34);
            var34 = var34.HOME_DRAWER_FLING_PHYSICS;
            var33['HOME_DRAWER_FLING_PHYSICS'] = var34;
            var8['__closure'] = var33;
            var33 = 97576264833.0;
            var8['__workletHash'] = var33;
            var33 = _closure1_slot16;
            var8['__initData'] = var33;
            var14 = var14.bind(var29)(var8);
            var29 = !var6;
            if(!var29) { _fun0007_ip = 59; continue _fun0007 }
case 60:
            var29 = !var28;
case 59:
            if(var29) { _fun0007_ip = 61; continue _fun0007 }
case 62:
            var29 = var21;
case 61:
            if(var29) { _fun0007_ip = 63; continue _fun0007 }
case 64:
            var29 = var3;
case 63:
            _closure2_slot18 = var29;
            var8 = _closure1_slot3;
            var6 = var8.useMemo;
            var3 = new Array(4);
            var3[0] = var29;
            var3[1] = var28;
            var3[2] = var16;
            var3[3] = var1;
            var1 = function() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var1 = _closure2_slot18;
                    if(var1) { _fun0011_ip = 57; continue _fun0011 }
case 44:
                    var1 = {};
                    var3 = _closure2_slot1;
                    var1['selected'] = var3;
                    var3 = _closure2_slot12;
                    var1['sharedId'] = var3;
                    var2 = _closure2_slot0;
                    var1['id'] = var2;
                    return var1;
case 57:
                    var1 = undefined;
                    return var1;
                }
            };
            var29 = var6.bind(var8)(var1, var3);
            var6 = _closure1_slot0;
            var1 = _closure1_slot2;
            var3 = 13;
            var3 = var1[var3];
            var3 = var6.bind(var4)(var3);
            var8 = var3.MobileHomeDrawerExperiment;
            var6 = var8.useConfig;
            var3 = {};
            var16 = 'guilds_bar';
            var3['location'] = var16;
            var3 = var6.bind(var8)(var3);
            var8 = var3.enableHome;
            var6 = _closure1_slot3;
            var3 = var6.useRef;
            var3 = var3.bind(var6)(var4);
            _closure2_slot19 = var3;
            var33 = _closure1_slot3;
            var16 = var33.useEffect;
            var6 = new Array(1);
            var6[0] = var26;
            var3 = function() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var1 = _closure2_slot19;
                    var3 = var1.current;
                    var1 = undefined;
                    if(!(var1 === var3)) { _fun0012_ip = 65; continue _fun0012 }
case 66:
                    var4 = _closure2_slot19;
                    var3 = _closure2_slot10;
                    var4['current'] = var3;
                    _fun0012_ip = 67; continue _fun0012;
case 65:
                    var3 = _closure2_slot19;
                    var4 = var3.current;
                    var3 = _closure2_slot10;
                    if(!(var4 !== var3)) { _fun0012_ip = 67; continue _fun0012 }
case 14:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var9 = 14;
                    var4 = var4[var9];
                    var4 = var5.bind(var1)(var4);
                    var6 = var4.intl;
                    var5 = var6.string;
                    var4 = _closure2_slot10;
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var7 = var7[var9];
                    var7 = var8.bind(var1)(var7);
                    var7 = var7.t;
                    if(var4) { _fun0012_ip = 68; continue _fun0012 }
case 69:
                    var4 = var7.jsudFd;
                    _fun0012_ip = 70; continue _fun0012;
case 68:
                    var4 = var7.CUnsOR;
case 70:
                    var5 = var5.bind(var6)(var4);
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 15;
                    var3 = var6[var3];
                    var3 = var4.bind(var1)(var3);
                    var4 = var3.AccessibilityAnnouncer;
                    var3 = var4.announce;
                    var3 = var3.bind(var4)(var5);
                    var3 = _closure2_slot19;
                    var2 = _closure2_slot10;
                    var3['current'] = var2;
case 67:
                    return var1;
                }
            };
            var3 = var16.bind(var33)(var3, var6);
            var16 = _closure1_slot3;
            var6 = var16.useMemo;
            var3 = new Array(2);
            var3[0] = var24;
            var3[1] = var18;
            var2 = function() {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    var2 = _closure2_slot3;
                    var1 = null;
                    var4 = var1 != var2;
                    var1 = '';
                    var2 = var1;
                    if(!var4) { _fun0013_ip = 19; continue _fun0013 }
case 71:
                    var4 = _closure2_slot3;
                    var5 = var4.length;
                    var4 = 0;
                    var4 = var5 > var4;
                    var2 = var1;
                    if(!var4) { _fun0013_ip = 19; continue _fun0013 }
case 72:
                    var6 = _closure2_slot3;
                    var4 = global;
                    var4 = var4.HermesInternal;
                    var5 = var4.concat;
                    var4 = ' ';
                    var2 = var5.bind(var1)(var6, var4);
case 19:
                    var3 = _closure2_slot4;
                    if(!var3) { _fun0013_ip = 73; continue _fun0013 }
case 74:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var3 = 14;
                    var4 = var8[var3];
                    var6 = undefined;
                    var4 = var7.bind(var6)(var4);
                    var5 = var4.intl;
                    var4 = var5.string;
                    var3 = var8[var3];
                    var3 = var7.bind(var6)(var3);
                    var3 = var3.t;
                    var3 = var3.BGMUFB;
                    var1 = var4.bind(var5)(var3);
case 73:
                    var1 = var2 + var1;
                    return var1;
                }
            };
            var18 = var6.bind(var16)(var2, var3);
            var3 = _closure1_slot8;
            var2 = _closure1_slot1;
            var16 = 10;
            var1 = var1[var16];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var33 = null;
            if(!var8) { _fun0007_ip = 75; continue _fun0007 }
case 76:
            var33 = var12.container;
case 75:
            var24 = new Array(2);
            var24[0] = var33;
            var24[1] = var32;
            var1['style'] = var24;
            var1['layout'] = var17;
            var1['entering'] = var13;
            var1['exiting'] = var9;
            var1['preventClipping'] = var5;
            var24 = false;
            var1['collapsable'] = var24;
            var17 = _closure1_slot8;
            var9 = _closure1_slot1;
            var13 = _closure1_slot2;
            var5 = 16;
            var5 = var13[var5];
            var9 = var9.bind(var4)(var5);
            var5 = {};
            var45 = var5;
            var44 = var15;
            var13 = copyDataProperties(var45, var44);
            var13 = 'style';
            var5[var13] = var30;
            var30 = 'accessibilityLabel';
            var5[var30] = var31;
            var31 = true;
            var30 = 'accessible';
            var5[var30] = var31;
            var31 = 'button';
            var30 = 'accessibilityRole';
            var5[var30] = var31;
            var30 = {};
            var30['selected'] = var28;
            var30['expanded'] = var26;
            var26 = 'accessibilityState';
            var5[var26] = var30;
            var30 = _closure1_slot5;
            var26 = 'hitSlop';
            var5[var26] = var30;
            var30 = var18.length;
            var26 = 0;
            var30 = var30 > var26;
            var26 = undefined;
            if(!var30) { _fun0007_ip = 77; continue _fun0007 }
case 78:
            var26 = var18;
case 77:
            var18 = 'accessibilityHint';
            var5[var18] = var26;
            var18 = 'collapsable';
            var5[var18] = var24;
            var18 = 'accessibilityActions';
            var5[var18] = var20;
            var18 = 'onAccessibilityAction';
            var5[var18] = var19;
            var18 = new Array(3);
            var18[0] = var10;
            var26 = _closure1_slot7;
            var19 = _closure1_slot0;
            var24 = _closure1_slot2;
            var10 = 7;
            var10 = var24[var10];
            var10 = var19.bind(var4)(var10);
            var20 = var10.TransitionItem;
            var10 = {};
            var10['item'] = var29;
            var29 = _closure1_slot18;
            var10['renderItem'] = var29;
            var10 = var26.bind(var4)(var20, var10);
            var18[1] = var10;
            var20 = _closure1_slot7;
            var10 = 17;
            var10 = var24[var10];
            var10 = var19.bind(var4)(var10);
            var19 = var10.ClipViewAnimated;
            var10 = {};
            var26 = var27.itemShape;
            var24 = new Array(3);
            var24[0] = var26;
            var26 = undefined;
            if(!var28) { _fun0007_ip = 79; continue _fun0007 }
case 80:
            var26 = var27.itemShapeSelected;
case 79:
            var24[1] = var26;
            var24[2] = var25;
            var10['style'] = var24;
            var10['cutouts'] = var23;
            var21 = !var21;
            if(!var21) { _fun0007_ip = 81; continue _fun0007 }
case 82:
            var21 = var22;
case 81:
            var10['children'] = var21;
            var10 = var20.bind(var4)(var19, var10);
            var18[2] = var10;
            var10 = 'children';
            var5[var10] = var18;
            var9 = var17.bind(var4)(var9, var5);
            var5 = new Array(2);
            var5[0] = var9;
            var6 = null;
            if(!var8) { _fun0007_ip = 83; continue _fun0007 }
case 84:
            var9 = _closure1_slot7;
            var8 = _closure1_slot1;
            var7 = _closure1_slot2;
            var7 = var7[var16];
            var8 = var8.bind(var4)(var7);
            var7 = {};
            var45 = var7;
            var44 = var15;
            var15 = copyDataProperties(var45, var44);
            var15 = var12.expandedChildrenWrapper;
            var12 = new Array(2);
            var12[0] = var15;
            var12[1] = var14;
            var7[var13] = var12;
            var7[var10] = var11;
            var6 = var9.bind(var4)(var8, var7);
case 83:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var6;
    var5 = function useGuildsBarAnimatedWrapperStyles() {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var1 = arguments[0];
            var6 = undefined;
            if(!(var1 === var6)) { _fun0014_ip = 85; continue _fun0014 }
case 21:
            var1 = {};
case 85:
            var5 = var1.disableSelectedColor;
            if(!(var5 === var6)) { _fun0014_ip = 71; continue _fun0014 }
case 86:
            var5 = false;
case 71:
            var4 = var1.disableBGColor;
            if(!(var4 === var6)) { _fun0014_ip = 87; continue _fun0014 }
case 88:
            var4 = false;
case 87:
            var3 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 6;
            var2 = var9[var2];
            var7 = var3.bind(var6)(var2);
            var3 = var7.useToken;
            var8 = _closure1_slot1;
            var2 = 5;
            var2 = var9[var2];
            var2 = var8.bind(var6)(var2);
            var2 = var2.modules;
            var2 = var2.mobile;
            var2 = var2.GUILD_BAR_ITEM_SIZE;
            var11 = var3.bind(var7)(var2);
            var2 = _closure1_slot6;
            var10 = var2.bind(var6)();
            var1 = _closure1_slot12;
            var14 = undefined;
            var13 = var5;
            var12 = var4;
            var1 = var14[var1](var13, var12, var11, var10, var9);
            return var1;
        }
    };
    var3['useGuildsBarAnimatedWrapperStyles'] = var5;
    var3['UnreadIndicator'] = var4;
    var3['renderUnreadIndicator'] = var2;
    return var1;
})();