// app/design/components/ContextMenu/native/ContextMenuPopout.native.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var12 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var1 = function ContextMenuDivider() {
        var2 = _closure1_slot9;
        var4 = undefined;
        var5 = var2.bind(var4)();
        var3 = _closure1_slot6;
        var2 = _closure1_slot5;
        var1 = {};
        var5 = var5.divider;
        var1['style'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot17 = var1;
    var1 = function renderMenuItems(arg1) {
        var2 = arg1;
        var3 = var2.items;
        var _closure2_slot0 = var3;
        var4 = var2.title;
        var _closure2_slot1 = var4;
        var4 = var2.state;
        var _closure2_slot2 = var4;
        var4 = var2.onPress;
        var _closure2_slot3 = var4;
        var2 = var2.dividerIndexes;
        var _closure2_slot4 = var2;
        var2 = var3.map;
        var1 = function(arg1, arg2) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var1 = arg1;
                var11 = arg2;
                var12 = var1.label;
                var2 = var1.action;
                var _closure3_slot0 = var2;
                var13 = var1.iconSource;
                var10 = var1.IconComponent;
                var1 = var1.variant;
                var2 = _closure2_slot0;
                var2 = var2.length;
                var14 = 1;
                var2 = var2 - var14;
                var7 = _closure1_slot6;
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var3 = 15;
                var3 = var5[var3];
                var5 = undefined;
                var3 = var4.bind(var5)(var3);
                var4 = var3.ContextMenuItem;
                var3 = {};
                var3['index'] = var11;
                var3['label'] = var12;
                var15 = 0;
                var15 = var15 === var11;
                if(!var15) { _fun0001_ip = 122; continue _fun0001 }
 112:
                var17 = _closure2_slot1;
                var16 = null;
                var15 = var16 == var17;
 122:
                var3['start'] = var15;
                var2 = var11 === var2;
                var3['end'] = var2;
                var2 = _closure2_slot4;
                var15 = var2.includes;
                var14 = var11 + var14;
                var14 = var15.bind(var2)(var14);
                var3['lastInSection'] = var14;
                var3['iconSource'] = var13;
                var3['IconComponent'] = var10;
                var9 = _closure2_slot2;
                var3['state'] = var9;
                var6 = function onPress(arg1) {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                        var4 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 10;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var4.bind(var1)(var2);
                        var2 = var4.isAndroid;
                        var2 = var2.bind(var4)();
                        if(!var2) { _fun0002_ip = 67; continue _fun0002 }
 37:
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var3 = 16;
                        var3 = var5[var3];
                        var4 = var4.bind(var1)(var3);
                        var3 = var4.getIsScreenReaderEnabled;
                        var2 = var3.bind(var4)();
 67:
                        if(!var2) { _fun0002_ip = 81; continue _fun0002 }
 70:
                        var2 = _closure3_slot0;
                        var2 = var2.bind(var1)();
 81:
                        var4 = _closure2_slot3;
                        var3 = null;
                        if(!(var3 != var4)) { _fun0002_ip = 106; continue _fun0002 }
 94:
                        var3 = _closure2_slot3;
                        var2 = arg1;
                        var2 = var3.bind(var1)(var2);
 106:
                        return var1;
                    }
                };
                var3['onPress'] = var6;
                var3['variant'] = var1;
                var6 = global;
                var1 = var6.HermesInternal;
                var10 = var1.concat;
                var9 = '';
                var1 = '-';
                var1 = var10.bind(var9)(var12, var1, var11);
                var7 = var7.bind(var5)(var4, var3, var1);
                var1 = var2.includes;
                var2 = var1.bind(var2)(var11);
                var1 = var7;
                if(!var2) { _fun0001_ip = 312; continue _fun0001 }
 241:
                var4 = _closure1_slot8;
                var3 = _closure1_slot7;
                var2 = {};
                var10 = _closure1_slot6;
                var9 = _closure1_slot17;
                var6 = var6.HermesInternal;
                var8 = var6.concat;
                var6 = 'divider-';
                var8 = var8.bind(var6)(var11);
                var6 = {};
                var8 = var10.bind(var5)(var9, var6, var8);
                var6 = new Array(2);
                var6[0] = var8;
                var6[1] = var7;
                var2['children'] = var6;
                var1 = var4.bind(var5)(var3, var2);
 312:
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot18 = var1;
    var1 = function ContextMenuBackdrop(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var2 = arg1;
            var5 = var2.onPress;
            var11 = var2.visible;
            var _closure2_slot0 = var11;
            var2 = _closure1_slot15;
            var4 = undefined;
            var9 = var2.bind(var4)();
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 6;
            var2 = var8[var2];
            var3 = var7.bind(var4)(var2);
            var2 = var3.useAnimatedStyle;
            var1 = function n() {
                var1 = {};
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var2 = 11;
                var2 = var8[var2];
                var6 = undefined;
                var5 = var7.bind(var6)(var2);
                var4 = var5.withSpring;
                var3 = _closure2_slot0;
                var2 = var3.get;
                var3 = var2.bind(var3)();
                var2 = 5;
                var2 = var8[var2];
                var2 = var7.bind(var6)(var2);
                var2 = var2.CONTEXT_MENU_SPRING;
                var2 = var4.bind(var5)(var3, var2);
                var1['opacity'] = var2;
                return var1;
            };
            var10 = {};
            var12 = 11;
            var12 = var8[var12];
            var12 = var7.bind(var4)(var12);
            var12 = var12.withSpring;
            var10['withSpring'] = var12;
            var10['visible'] = var11;
            var11 = 5;
            var11 = var8[var11];
            var11 = var7.bind(var4)(var11);
            var11 = var11.CONTEXT_MENU_SPRING;
            var10['CONTEXT_MENU_SPRING'] = var11;
            var1['__closure'] = var10;
            var10 = 7758377027899.0;
            var1['__workletHash'] = var10;
            var10 = _closure1_slot16;
            var1['__initData'] = var10;
            var11 = var2.bind(var3)(var1);
            var3 = _closure1_slot6;
            var1 = 17;
            var1 = var8[var1];
            var1 = var7.bind(var4)(var1);
            var2 = var1.Backdrop;
            var1 = {};
            var10 = 'none';
            var1['blur'] = var10;
            var12 = var9.backdrop;
            var10 = new Array(2);
            var10[0] = var12;
            var10[1] = var11;
            var1['style'] = var10;
            var9 = var9.accessibleDismiss;
            var1['accessibleDismissStyle'] = var9;
            var1['onDismiss'] = var5;
            var5 = 10;
            var5 = var8[var5];
            var7 = var7.bind(var4)(var5);
            var5 = var7.isAndroid;
            var5 = var5.bind(var7)();
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var6 = 18;
            var7 = var10[var6];
            var7 = var9.bind(var4)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var6 = var10[var6];
            var6 = var9.bind(var4)(var6);
            var6 = var6.t;
            if(var5) { _fun0003_ip = 308; continue _fun0003 }
 293:
            var5 = var6.xs0juL;
            var5 = var7.bind(var8)(var5);
            _fun0003_ip = 321; continue _fun0003;
 308:
            var6 = var6.hPBScn;
            var5 = var7.bind(var8)(var6);
 321:
            var1['accessibilityLabel'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot19 = var1;
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
    var4 = native4;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.Keyboard;
    var _closure1_slot4 = var7;
    var7 = var4.View;
    var _closure1_slot5 = var7;
    var10 = var4.StyleSheet;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot6 = var7;
    var7 = var4.Fragment;
    var _closure1_slot7 = var7;
    var4 = var4.jsxs;
    var _closure1_slot8 = var4;
    var4 = 3;
    var7 = var6[var4];
    var9 = var5.bind(var1)(var7);
    var8 = var9.createStyles;
    var7 = {};
    var13 = {'position': 'absolute', 'backgroundColor': null, 'borderWidth': 1};
    var11 = 4;
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BG_SURFACE_OVERLAY;
    var13['backgroundColor'] = var14;
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BORDER_SUBTLE;
    var13['borderColor'] = var14;
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.lg;
    var13['borderRadius'] = var14;
    var14 = 5;
    var15 = var6[var14];
    var15 = var5.bind(var1)(var15);
    var15 = var15.CONTEXT_MENU_MIN_WIDTH;
    var13['minWidth'] = var15;
    var15 = var6[var11];
    var15 = var12.bind(var1)(var15);
    var15 = var15.shadows;
    var17 = var15.SHADOW_HIGH;
    var18 = var13;
    var15 = copyDataProperties(var18, var17);
    var7['container'] = var13;
    var13 = {'width': 20, 'height': 20};
    var7['formIcon'] = var13;
    var13 = {};
    var15 = var6[var14];
    var15 = var5.bind(var1)(var15);
    var15 = var15.CONTEXT_MENU_ITEM_PADDING;
    var13['padding'] = var15;
    var7['titleContainer'] = var13;
    var13 = {};
    var14 = var6[var14];
    var14 = var5.bind(var1)(var14);
    var14 = var14.CONTEXT_MENU_DIVIDER_HEIGHT;
    var13['borderBottomWidth'] = var14;
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.DIVIDER_SUBTLE;
    var13['borderBottomColor'] = var14;
    var7['divider'] = var13;
    var7 = var8.bind(var9)(var7);
    var _closure1_slot9 = var7;
    var7 = {};
    var8 = "function ContextMenuPopoutNativeTsx1(){const{maxHeight,height,CONTEXT_MENU_MIN_WIDTH,positionY,positionX,CONTEXT_MENU_MIN_SCALE,withSpring,interpolate,visible,CONTEXT_MENU_SPRING,transitionState,TransitionStates,runOnJS,cleanUp,onClose}=this.__closure;const visibleHeight=Math.min(maxHeight,height);const halfHeight=visibleHeight/2;const halfWidth=CONTEXT_MENU_MIN_WIDTH/2;const translateYDirection=positionY==='below'?-1:1;const translateXDirection=positionX==='left'?-1:1;const translateY=translateYDirection*halfHeight+CONTEXT_MENU_MIN_SCALE*-translateYDirection*halfHeight;const translateX=translateXDirection*halfWidth+CONTEXT_MENU_MIN_SCALE*-translateXDirection*halfWidth;return{opacity:withSpring(interpolate(visible.get(),[0,1],[0,1]),CONTEXT_MENU_SPRING,'respect-motion-settings',function(finished){if(finished&&transitionState===TransitionStates.YEETED){runOnJS(cleanUp)();runOnJS(onClose)();}}),transform:[{translateX:withSpring(interpolate(visible.get(),[0,1],[translateX,0]),CONTEXT_MENU_SPRING)},{translateY:withSpring(interpolate(visible.get(),[0,1],[translateY,0]),CONTEXT_MENU_SPRING)},{scale:withSpring(interpolate(visible.get(),[0,1],[CONTEXT_MENU_MIN_SCALE,1]),CONTEXT_MENU_SPRING)}]};}";
    var7['code'] = var8;
    var _closure1_slot10 = var7;
    var7 = {};
    var8 = 'function ContextMenuPopoutNativeTsx2(finished){const{transitionState,TransitionStates,runOnJS,cleanUp,onClose}=this.__closure;if(finished&&transitionState===TransitionStates.YEETED){runOnJS(cleanUp)();runOnJS(onClose)();}}';
    var7['code'] = var8;
    var _closure1_slot11 = var7;
    var7 = {};
    var8 = 'function ContextMenuPopoutNativeTsx3(e){const{updateContextMenuState,state}=this.__closure;updateContextMenuState(e.absoluteX,e.absoluteY,state);}';
    var7['code'] = var8;
    var _closure1_slot12 = var7;
    var7 = {};
    var8 = 'function ContextMenuPopoutNativeTsx4(){const{state,runOnJS,requestClose}=this.__closure;const{activeIndex:activeIndex}=state;const isDismiss=activeIndex.get()===-1;runOnJS(requestClose)(isDismiss);}';
    var7['code'] = var8;
    var _closure1_slot13 = var7;
    var7 = {};
    var8 = 'function ContextMenuPopoutNativeTsx5(e,state){const{scrollingEnabled}=this.__closure;if(scrollingEnabled.get()){state.fail();}else{state.activate();}}';
    var7['code'] = var8;
    var _closure1_slot14 = var7;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.CONTEXT_MENU_BACKDROP_BACKGROUND;
    var9['backgroundColor'] = var11;
    var4['backdrop'] = var9;
    var9 = {};
    var17 = var10.absoluteFillObject;
    var18 = var9;
    var10 = copyDataProperties(var18, var17);
    var11 = 'auto';
    var10 = 'height';
    var9[var10] = var11;
    var4['accessibleDismiss'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot15 = var4;
    var4 = {};
    var7 = 'function ContextMenuPopoutNativeTsx6(){const{withSpring,visible,CONTEXT_MENU_SPRING}=this.__closure;return{opacity:withSpring(visible.get(),CONTEXT_MENU_SPRING)};}';
    var4['code'] = var7;
    var _closure1_slot16 = var4;
    var4 = 19;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'design/components/ContextMenu/native/ContextMenuPopout.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ContextMenuPopout(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var3 = arg1;
            var2 = var3.menu;
            var24 = var3.transitionState;
            var _closure2_slot0 = var24;
            var20 = var3.cleanUp;
            var _closure2_slot1 = var20;
            var4 = undefined;
            var _closure2_slot8 = var4;
            var _closure2_slot9 = var4;
            var _closure2_slot10 = var4;
            var5 = var2.x;
            var27 = var2.positionX;
            var _closure2_slot2 = var27;
            var28 = var2.positionY;
            var _closure2_slot3 = var28;
            var29 = var2.height;
            var _closure2_slot4 = var29;
            var19 = var2.items;
            var17 = var2.state;
            var _closure2_slot5 = var17;
            var6 = var2.requestClose;
            var _closure2_slot6 = var6;
            var16 = var2.onClose;
            var _closure2_slot7 = var16;
            var18 = var2.title;
            var3 = var2.keyboardShouldPersistTaps;
            var12 = 'handled';
            if(!(var4 !== var3)) { _fun0004_ip = 136; continue _fun0004 }
 133:
            var12 = var3;
 136:
            var15 = var2.dividerIndexes;
            var14 = var2.y;
            var8 = _closure1_slot0;
            var2 = _closure1_slot2;
            var22 = 6;
            var3 = var2[var22];
            var7 = var8.bind(var4)(var3);
            var3 = var7.useSharedValue;
            var23 = 7;
            var2 = var2[var23];
            var2 = var8.bind(var4)(var2);
            var2 = var2.TransitionStates;
            var8 = var2.MOUNTED;
            var2 = 0;
            if(!(var24 === var8)) { _fun0004_ip = 208; continue _fun0004 }
 205:
            var2 = 1;
 208:
            var11 = var3.bind(var7)(var2);
            _closure2_slot8 = var11;
            var8 = _closure1_slot3;
            var7 = var8.useEffect;
            var3 = new Array(2);
            var3[0] = var24;
            var3[1] = var11;
            var2 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var4 = _closure2_slot0;
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 7;
                    var3 = var3[var1];
                    var1 = undefined;
                    var3 = var5.bind(var1)(var3);
                    var3 = var3.TransitionStates;
                    var3 = var3.YEETED;
                    if(!(var4 !== var3)) { _fun0005_ip = 67; continue _fun0005 }
 48:
                    var5 = _closure2_slot8;
                    var4 = var5.set;
                    var3 = 1;
                    var3 = var4.bind(var5)(var3);
                    _fun0005_ip = 83; continue _fun0005;
 67:
                    var4 = _closure2_slot8;
                    var3 = var4.set;
                    var2 = 0;
                    var2 = var3.bind(var4)(var2);
 83:
                    return var1;
                }
            };
            var2 = var7.bind(var8)(var2, var3);
            var2 = _closure1_slot9;
            var25 = var2.bind(var4)();
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var2 = 8;
            var2 = var8[var2];
            var2 = var7.bind(var4)(var2);
            var2 = var2.bind(var4)();
            var10 = var2.top;
            var3 = var2.bottom;
            var2 = 9;
            var2 = var8[var2];
            var7 = var7.bind(var4)(var2);
            var2 = {};
            var8 = true;
            var2['ignoreKeyboard'] = var8;
            var2 = var7.bind(var4)(var2);
            var8 = var2.width;
            var2 = var2.height;
            var21 = 'above';
            var7 = var14;
            if(!(var21 === var28)) { _fun0004_ip = 447; continue _fun0004 }
 342:
            var26 = _closure1_slot0;
            var30 = _closure1_slot2;
            var21 = 10;
            var21 = var30[var21];
            var26 = var26.bind(var4)(var21);
            var21 = var26.isAndroid;
            var21 = var21.bind(var26)();
            var7 = var14;
            if(!var21) { _fun0004_ip = 447; continue _fun0004 }
 377:
            var26 = _closure1_slot4;
            var21 = var26.isVisible;
            var21 = var21.bind(var26)();
            var7 = var14;
            if(!var21) { _fun0004_ip = 447; continue _fun0004 }
 397:
            var26 = _closure1_slot4;
            var21 = var26.metrics;
            var30 = var21.bind(var26)();
            var26 = null;
            var31 = var26 == var30;
            var21 = undefined;
            if(var31) { _fun0004_ip = 427; continue _fun0004 }
 422:
            var21 = var30.height;
 427:
            var26 = var26 != var21;
            var9 = 0;
            if(!var26) { _fun0004_ip = 439; continue _fun0004 }
 436:
            var9 = var21;
 439:
            var9 = var9 + var3;
            var7 = var14 - var9;
 447:
            var9 = 'below';
            var9 = var9 === var28;
            var2 = var2 - var7;
            if(var9) { _fun0004_ip = 500; continue _fun0004 }
 464:
            var14 = var2 - var10;
            var21 = _closure1_slot0;
            var26 = _closure1_slot2;
            var10 = 5;
            var10 = var26[var10];
            var10 = var21.bind(var4)(var10);
            var10 = var10.CONTEXT_MENU_EDGE_OFFSET;
            var14 = var14 - var10;
            _fun0004_ip = 534; continue _fun0004;
 500:
            var3 = var2 - var3;
            var10 = _closure1_slot0;
            var21 = _closure1_slot2;
            var2 = 5;
            var2 = var21[var2];
            var2 = var10.bind(var4)(var2);
            var2 = var2.CONTEXT_MENU_EDGE_OFFSET;
            var14 = var3 - var2;
 534:
            _closure2_slot9 = var14;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var22];
            var10 = var3.bind(var4)(var2);
            var3 = var10.useSharedValue;
            var2 = var29 >= var14;
            var2 = var3.bind(var10)(var2);
            _closure2_slot10 = var2;
            var21 = {};
            var3 = 'bottom';
            if(!var9) { _fun0004_ip = 586; continue _fun0004 }
 582:
            var3 = 'top';
 586:
            var21[var3] = var7;
            var21[var27] = var5;
            var3 = 'maxHeight';
            var21[var3] = var14;
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var26 = 5;
            var3 = var9[var26];
            var3 = var7.bind(var4)(var3);
            var3 = var3.CONTEXT_MENU_EDGE_OFFSET;
            var3 = var8 - var3;
            var5 = var3 - var5;
            var3 = 'maxWidth';
            var21[var3] = var5;
            var3 = var9[var22];
            var8 = var7.bind(var4)(var3);
            var5 = var8.useAnimatedStyle;
            var3 = function B() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var1 = global;
                    var4 = var1.Math;
                    var3 = var4.min;
                    var2 = _closure2_slot9;
                    var1 = _closure2_slot4;
                    var1 = var3.bind(var4)(var2, var1);
                    var3 = 2;
                    var21 = var1 / var3;
                    var4 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var10 = 5;
                    var1 = var1[var10];
                    var9 = undefined;
                    var1 = var4.bind(var9)(var1);
                    var1 = var1.CONTEXT_MENU_MIN_WIDTH;
                    var19 = var1 / var3;
                    var3 = _closure2_slot3;
                    var5 = 1;
                    var1 = 'below';
                    var20 = var5;
                    if(!(var1 === var3)) { _fun0006_ip = 98; continue _fun0006 }
 92:
                    var20 = -1;
 98:
                    var3 = _closure2_slot2;
                    var1 = 'left';
                    var7 = var5;
                    if(!(var1 === var3)) { _fun0006_ip = 119; continue _fun0006 }
 113:
                    var7 = -1;
 119:
                    var1 = {};
                    var8 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var6 = 11;
                    var3 = var4[var6];
                    var16 = var8.bind(var9)(var3);
                    var15 = var16.withSpring;
                    var12 = 6;
                    var3 = var4[var12];
                    var18 = var8.bind(var9)(var3);
                    var17 = var18.interpolate;
                    var13 = _closure2_slot8;
                    var3 = var13.get;
                    var14 = var3.bind(var13)();
                    var13 = [0, 1];
                    var3 = [0, 1];
                    var14 = var17.bind(var18)(var14, var13, var3);
                    var3 = var4[var10];
                    var3 = var8.bind(var9)(var3);
                    var24 = var3.CONTEXT_MENU_SPRING;
                    var3 = function t(arg1) {
                        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                            var1 = arg1;
                            if(!var1) { _fun0007_ip = 54; continue _fun0007 }
 6:
                            var3 = _closure2_slot0;
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var2 = 7;
                            var4 = var4[var2];
                            var2 = undefined;
                            var2 = var5.bind(var2)(var4);
                            var2 = var2.TransitionStates;
                            var2 = var2.YEETED;
                            var1 = var3 === var2;
 54:
                            if(!var1) { _fun0007_ip = 130; continue _fun0007 }
 57:
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var3 = 6;
                            var1 = var5[var3];
                            var2 = undefined;
                            var8 = var4.bind(var2)(var1);
                            var7 = var8.runOnJS;
                            var6 = _closure2_slot1;
                            var6 = var7.bind(var8)(var6);
                            var6 = var6.bind(var2)();
                            var3 = var5[var3];
                            var4 = var4.bind(var2)(var3);
                            var3 = var4.runOnJS;
                            var1 = _closure2_slot7;
                            var1 = var3.bind(var4)(var1);
                            var1 = var1.bind(var2)();
 130:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var17 = {};
                    var18 = _closure2_slot0;
                    var17['transitionState'] = var18;
                    var18 = 7;
                    var18 = var4[var18];
                    var18 = var8.bind(var9)(var18);
                    var18 = var18.TransitionStates;
                    var17['TransitionStates'] = var18;
                    var18 = var4[var12];
                    var18 = var8.bind(var9)(var18);
                    var18 = var18.runOnJS;
                    var17['runOnJS'] = var18;
                    var18 = _closure2_slot1;
                    var17['cleanUp'] = var18;
                    var18 = _closure2_slot7;
                    var17['onClose'] = var18;
                    var3['__closure'] = var17;
                    var17 = 4025068986009.0;
                    var3['__workletHash'] = var17;
                    var2 = _closure1_slot11;
                    var3['__initData'] = var2;
                    var23 = 'respect-motion-settings';
                    var26 = var16;
                    var25 = var14;
                    var22 = var3;
                    var2 = var26[var15](var25, var24, var23, var22, var21);
                    var1['opacity'] = var2;
                    var3 = {};
                    var2 = var4[var6];
                    var15 = var8.bind(var9)(var2);
                    var14 = var15.withSpring;
                    var2 = var4[var12];
                    var18 = var8.bind(var9)(var2);
                    var17 = var18.interpolate;
                    var13 = _closure2_slot8;
                    var2 = var13.get;
                    var16 = var2.bind(var13)();
                    var2 = var4[var10];
                    var2 = var8.bind(var9)(var2);
                    var13 = var2.CONTEXT_MENU_MIN_SCALE;
                    var2 = -var7;
                    var2 = var13 * var2;
                    var13 = new Array(2);
                    var7 = var7 * var19;
                    var2 = var2 * var19;
                    var2 = var7 + var2;
                    var13[0] = var2;
                    var7 = 0;
                    var13[1] = var7;
                    var2 = [0, 1];
                    var13 = var17.bind(var18)(var16, var2, var13);
                    var2 = var4[var10];
                    var2 = var8.bind(var9)(var2);
                    var2 = var2.CONTEXT_MENU_SPRING;
                    var2 = var14.bind(var15)(var13, var2);
                    var3['translateX'] = var2;
                    var2 = new Array(3);
                    var2[0] = var3;
                    var3 = {};
                    var13 = var4[var6];
                    var15 = var8.bind(var9)(var13);
                    var14 = var15.withSpring;
                    var13 = var4[var12];
                    var18 = var8.bind(var9)(var13);
                    var17 = var18.interpolate;
                    var16 = _closure2_slot8;
                    var13 = var16.get;
                    var16 = var13.bind(var16)();
                    var13 = var4[var10];
                    var13 = var8.bind(var9)(var13);
                    var19 = var13.CONTEXT_MENU_MIN_SCALE;
                    var13 = -var20;
                    var19 = var19 * var13;
                    var13 = new Array(2);
                    var20 = var20 * var21;
                    var19 = var19 * var21;
                    var19 = var20 + var19;
                    var13[0] = var19;
                    var13[1] = var7;
                    var7 = [0, 1];
                    var13 = var17.bind(var18)(var16, var7, var13);
                    var7 = var4[var10];
                    var7 = var8.bind(var9)(var7);
                    var7 = var7.CONTEXT_MENU_SPRING;
                    var7 = var14.bind(var15)(var13, var7);
                    var3['translateY'] = var7;
                    var2[1] = var3;
                    var3 = {};
                    var6 = var4[var6];
                    var7 = var8.bind(var9)(var6);
                    var6 = var7.withSpring;
                    var12 = var4[var12];
                    var14 = var8.bind(var9)(var12);
                    var13 = var14.interpolate;
                    var12 = _closure2_slot8;
                    var11 = var12.get;
                    var12 = var11.bind(var12)();
                    var11 = var4[var10];
                    var11 = var8.bind(var9)(var11);
                    var15 = var11.CONTEXT_MENU_MIN_SCALE;
                    var11 = new Array(2);
                    var11[0] = var15;
                    var11[1] = var5;
                    var5 = [0, 1];
                    var5 = var13.bind(var14)(var12, var5, var11);
                    var4 = var4[var10];
                    var4 = var8.bind(var9)(var4);
                    var4 = var4.CONTEXT_MENU_SPRING;
                    var4 = var6.bind(var7)(var5, var4);
                    var3['scale'] = var4;
                    var2[2] = var3;
                    var1['transform'] = var2;
                    return var1;
                }
            };
            var10 = {};
            var10['maxHeight'] = var14;
            var10['height'] = var29;
            var29 = var9[var26];
            var29 = var7.bind(var4)(var29);
            var29 = var29.CONTEXT_MENU_MIN_WIDTH;
            var10['CONTEXT_MENU_MIN_WIDTH'] = var29;
            var10['positionY'] = var28;
            var10['positionX'] = var27;
            var27 = var9[var26];
            var27 = var7.bind(var4)(var27);
            var27 = var27.CONTEXT_MENU_MIN_SCALE;
            var10['CONTEXT_MENU_MIN_SCALE'] = var27;
            var27 = 11;
            var27 = var9[var27];
            var27 = var7.bind(var4)(var27);
            var27 = var27.withSpring;
            var10['withSpring'] = var27;
            var27 = var9[var22];
            var27 = var7.bind(var4)(var27);
            var27 = var27.interpolate;
            var10['interpolate'] = var27;
            var10['visible'] = var11;
            var26 = var9[var26];
            var26 = var7.bind(var4)(var26);
            var26 = var26.CONTEXT_MENU_SPRING;
            var10['CONTEXT_MENU_SPRING'] = var26;
            var10['transitionState'] = var24;
            var23 = var9[var23];
            var23 = var7.bind(var4)(var23);
            var23 = var23.TransitionStates;
            var10['TransitionStates'] = var23;
            var23 = var9[var22];
            var23 = var7.bind(var4)(var23);
            var23 = var23.runOnJS;
            var10['runOnJS'] = var23;
            var10['cleanUp'] = var20;
            var10['onClose'] = var16;
            var3['__closure'] = var10;
            var10 = 16778623591634.0;
            var3['__workletHash'] = var10;
            var10 = _closure1_slot10;
            var3['__initData'] = var10;
            var20 = var5.bind(var8)(var3);
            var5 = _closure1_slot3;
            var10 = var5.useMemo;
            var8 = new Array(3);
            var8[0] = var17;
            var8[1] = var6;
            var8[2] = var2;
            var3 = function() {
                var5 = function t(arg1) {
                    var2 = arg1;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 12;
                    var3 = var3[var1];
                    var1 = undefined;
                    var6 = var4.bind(var1)(var3);
                    var5 = var6.updateContextMenuState;
                    var4 = var2.absoluteX;
                    var3 = var2.absoluteY;
                    var2 = _closure2_slot5;
                    var2 = var5.bind(var6)(var4, var3, var2);
                    return var1;
                };
                var2 = {};
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var3 = 12;
                var3 = var10[var3];
                var8 = undefined;
                var3 = var9.bind(var8)(var3);
                var3 = var3.updateContextMenuState;
                var2['updateContextMenuState'] = var3;
                var7 = _closure2_slot5;
                var2['state'] = var7;
                var5['__closure'] = var2;
                var2 = 14952697295916.0;
                var5['__workletHash'] = var2;
                var2 = _closure1_slot12;
                var5['__initData'] = var2;
                var2 = 13;
                var2 = var10[var2];
                var2 = var9.bind(var8)(var2);
                var3 = var2.Gesture;
                var2 = var3.Pan;
                var11 = var2.bind(var3)();
                var3 = var11.manualActivation;
                var2 = true;
                var11 = var3.bind(var11)(var2);
                var3 = var11.onTouchesDown;
                var2 = function n(arg1, arg2) {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                        var2 = arg2;
                        var3 = _closure2_slot10;
                        var1 = var3.get;
                        var1 = var1.bind(var3)();
                        if(var1) { _fun0008_ip = 34; continue _fun0008 }
 22:
                        var1 = var2.activate;
                        var1 = var1.bind(var2)();
                        _fun0008_ip = 44; continue _fun0008;
 34:
                        var1 = var2.fail;
                        var1 = var1.bind(var2)();
 44:
                        var1 = undefined;
                        return var1;
                    }
                };
                var12 = {};
                var13 = _closure2_slot10;
                var12['scrollingEnabled'] = var13;
                var2['__closure'] = var12;
                var12 = 1299584703797.0;
                var2['__workletHash'] = var12;
                var12 = _closure1_slot14;
                var2['__initData'] = var12;
                var3 = var3.bind(var11)(var2);
                var2 = var3.onStart;
                var3 = var2.bind(var3)(var5);
                var2 = var3.onUpdate;
                var3 = var2.bind(var3)(var5);
                var2 = var3.onEnd;
                var1 = function e() {
                    var1 = _closure2_slot5;
                    var3 = var1.activeIndex;
                    var1 = var3.get;
                    var4 = var1.bind(var3)();
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 6;
                    var3 = var3[var1];
                    var1 = undefined;
                    var5 = var5.bind(var1)(var3);
                    var3 = var5.runOnJS;
                    var2 = _closure2_slot6;
                    var3 = var3.bind(var5)(var2);
                    var2 = -1;
                    var2 = var2 === var4;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var5 = {};
                var5['state'] = var7;
                var7 = 6;
                var7 = var10[var7];
                var7 = var9.bind(var8)(var7);
                var7 = var7.runOnJS;
                var5['runOnJS'] = var7;
                var6 = _closure2_slot6;
                var5['requestClose'] = var6;
                var1['__closure'] = var5;
                var5 = 14495067009140.0;
                var1['__workletHash'] = var5;
                var4 = _closure1_slot13;
                var1['__initData'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var10 = var10.bind(var5)(var3, var8);
            var8 = var5.useCallback;
            var3 = new Array(2);
            var3[0] = var14;
            var3[1] = var2;
            var2 = function(arg1) {
                var3 = _closure2_slot10;
                var2 = var3.set;
                var5 = global;
                var7 = var5.Math;
                var6 = var7.round;
                var4 = arg1;
                var4 = var4.nativeEvent;
                var4 = var4.layout;
                var4 = var4.height;
                var4 = var6.bind(var7)(var4);
                var6 = var5.Math;
                var5 = var6.round;
                var1 = _closure2_slot9;
                var1 = var5.bind(var6)(var1);
                var1 = var4 >= var1;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var14 = var8.bind(var5)(var2, var3);
            var8 = var5.useCallback;
            var3 = new Array(1);
            var3[0] = var6;
            var2 = function() {
                var3 = _closure2_slot6;
                var1 = undefined;
                var2 = true;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var23 = var8.bind(var5)(var2, var3);
            var3 = var5.useCallback;
            var2 = new Array(1);
            var2[0] = var6;
            var1 = function() {
                var3 = _closure2_slot6;
                var1 = undefined;
                var2 = false;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var16 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot8;
            var2 = _closure1_slot7;
            var1 = {};
            var8 = _closure1_slot6;
            var6 = _closure1_slot19;
            var5 = {};
            var5['onPress'] = var23;
            var5['visible'] = var11;
            var6 = var8.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot6;
            var6 = 13;
            var6 = var9[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.GestureDetector;
            var6 = {};
            var6['gesture'] = var10;
            var11 = _closure1_slot8;
            var10 = _closure1_slot1;
            var9 = var9[var22];
            var9 = var10.bind(var4)(var9);
            var10 = var9.ScrollView;
            var9 = {};
            var9['onLayout'] = var14;
            var14 = false;
            var9['bounces'] = var14;
            var22 = var25.container;
            var14 = new Array(3);
            var14[0] = var22;
            var14[1] = var21;
            var14[2] = var20;
            var9['style'] = var14;
            var9['keyboardShouldPersistTaps'] = var12;
            var12 = 'list';
            var9['accessibilityRole'] = var12;
            var14 = null;
            var12 = var14 != var18;
            if(!var12) { _fun0004_ip = 1297; continue _fun0004 }
 1166:
            var21 = _closure1_slot8;
            var20 = _closure1_slot7;
            var12 = {};
            var24 = _closure1_slot6;
            var23 = _closure1_slot5;
            var22 = {};
            var25 = var25.titleContainer;
            var22['style'] = var25;
            var27 = _closure1_slot6;
            var26 = _closure1_slot0;
            var28 = _closure1_slot2;
            var25 = 14;
            var25 = var28[var25];
            var25 = var26.bind(var4)(var25);
            var26 = var25.Text;
            var25 = {'variant': 'text-md/bold', 'color': 'header-primary', 'accessibilityRole': 'header'};
            var25['children'] = var18;
            var25 = var27.bind(var4)(var26, var25);
            var22['children'] = var25;
            var23 = var24.bind(var4)(var23, var22);
            var22 = new Array(2);
            var22[0] = var23;
            var25 = _closure1_slot6;
            var24 = _closure1_slot17;
            var23 = {};
            var23 = var25.bind(var4)(var24, var23);
            var22[1] = var23;
            var12['children'] = var22;
            var14 = var21.bind(var4)(var20, var12);
 1297:
            var12 = new Array(2);
            var12[0] = var14;
            var14 = _closure1_slot18;
            var13 = {};
            var13['items'] = var19;
            var13['title'] = var18;
            var13['state'] = var17;
            var13['onPress'] = var16;
            var13['dividerIndexes'] = var15;
            var13 = var14.bind(var4)(var13);
            var12[1] = var13;
            var9['children'] = var12;
            var9 = var11.bind(var4)(var10, var9);
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['ContextMenuPopout'] = var2;
    return var1;
})();