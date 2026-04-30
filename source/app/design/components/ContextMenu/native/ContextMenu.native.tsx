// app/design/components/ContextMenu/native/ContextMenu.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var5 = require;
        var3 = exports;
        var6 = dependencyMap;
        var _closure1_slot0 = var5;
        var1 = metroImportDefault;
        var _closure1_slot1 = var1;
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
        var4 = var4.bind(var1)(var7);
        var _closure1_slot3 = var4;
        var4 = 1;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var7 = var4.Fragment;
        var _closure1_slot4 = var7;
        var4 = var4.jsx;
        var _closure1_slot5 = var4;
        var4 = 2;
        var4 = var6[var4];
        var7 = var5.bind(var1)(var4);
        var4 = var7.isFabric;
        var4 = var4.bind(var7)();
        if(!var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
        var7 = 3;
        var7 = var6[var7];
        var8 = var5.bind(var1)(var7);
        var7 = var8.isIOS;
        var4 = var7.bind(var8)();
case 2:
        var _closure1_slot6 = var4;
        var4 = {};
        var7 = "function ContextMenuNativeTsx1(){const{_isFabricIOS,buttonTagSV,measureInWindowForFWO,measure,buttonRef,title,itemCount,dividerIndexes,approximateItemHeight,CONTEXT_MENU_DIVIDER_HEIGHT,CONTEXT_MENU_OFFSET,screenHeight,CONTEXT_MENU_EDGE_OFFSET,screenWidth,CONTEXT_MENU_MIN_WIDTH,menuAlign,runOnJS,showMenu}=this.__closure;let pageX;let pageY;let width;let height;if(_isFabricIOS){const tag=buttonTagSV.get();if(tag===-1)return;const m=measureInWindowForFWO(tag);if(m==null)return;pageX=m.x;pageY=m.y;width=m.width;height=m.height;}else{const m=measure(buttonRef);if(m==null)return;pageX=m.pageX;pageY=m.pageY;width=m.width;height=m.height;}const rowCount=title!=null?itemCount+1:itemCount;const dividerCount=(title!=null?1:0)+dividerIndexes.length;const menuHeight=approximateItemHeight.get()*rowCount+CONTEXT_MENU_DIVIDER_HEIGHT*dividerCount;const positionBelowOffset=pageY+height+CONTEXT_MENU_OFFSET;const positionAboveOffset=screenHeight-pageY+CONTEXT_MENU_OFFSET;const availableSpaceBelow=screenHeight-positionBelowOffset-CONTEXT_MENU_EDGE_OFFSET;const availableSpaceAbove=pageY-CONTEXT_MENU_EDGE_OFFSET;const wouldOverflowBelow=availableSpaceBelow<menuHeight;const wouldOverflowAbove=availableSpaceAbove<menuHeight;const minimumRightPosition=Math.max(screenWidth-pageX-width,CONTEXT_MENU_EDGE_OFFSET);function autoPositionVertical(offset){'worklet';let positionY='below';let y=pageY+height+CONTEXT_MENU_OFFSET;if(wouldOverflowBelow===wouldOverflowAbove){if(availableSpaceBelow>availableSpaceAbove){positionY='below';}else{positionY='above';}}else if(wouldOverflowBelow){positionY='above';}else{positionY='below';}y=(positionY==='above'?positionAboveOffset:positionBelowOffset)+(offset!==null&&offset!==void 0?offset:0);return{y:y,positionY:positionY};}function autoPositionHorizontal(){'worklet';const distanceFromLeftEdge=pageX-CONTEXT_MENU_EDGE_OFFSET;const distanceFromRightEdge=screenWidth-CONTEXT_MENU_EDGE_OFFSET-(pageX+CONTEXT_MENU_MIN_WIDTH);let positionX='left';let x=pageX;if(distanceFromLeftEdge>distanceFromRightEdge){positionX='right';x=minimumRightPosition;}return{x:x,positionX:positionX};}if(menuAlign==='auto'){const{y:y,positionY:positionY}=autoPositionVertical();const{x:x,positionX:positionX}=autoPositionHorizontal();runOnJS(showMenu)(x,y,positionX,positionY,menuHeight,width);}else if(menuAlign==='above'||menuAlign==='below'){const positionY=menuAlign;const y=positionY==='above'?positionAboveOffset:positionBelowOffset;const{x:x,positionX:positionX}=autoPositionHorizontal();runOnJS(showMenu)(x,y,positionX,positionY,menuHeight,width);}else{const positionX=menuAlign==='left'?'right':'left';const x=positionX==='left'?pageX+width+CONTEXT_MENU_OFFSET:minimumRightPosition+width+CONTEXT_MENU_OFFSET;const{y:y,positionY:positionY}=autoPositionVertical(-1*(CONTEXT_MENU_OFFSET+height));runOnJS(showMenu)(x,y,positionX,positionY,menuHeight,width);}}";
        var4['code'] = var7;
        var _closure1_slot7 = var4;
        var4 = {};
        var7 = "function autoPositionVertical_ContextMenuNativeTsx2(offset){const{pageY,height,CONTEXT_MENU_OFFSET,wouldOverflowBelow,wouldOverflowAbove,availableSpaceBelow,availableSpaceAbove,positionAboveOffset,positionBelowOffset}=this.__closure;let positionY='below';let y=pageY+height+CONTEXT_MENU_OFFSET;if(wouldOverflowBelow===wouldOverflowAbove){if(availableSpaceBelow>availableSpaceAbove){positionY='below';}else{positionY='above';}}else if(wouldOverflowBelow){positionY='above';}else{positionY='below';}y=(positionY==='above'?positionAboveOffset:positionBelowOffset)+(offset!==null&&offset!==void 0?offset:0);return{y:y,positionY:positionY};}";
        var4['code'] = var7;
        var _closure1_slot8 = var4;
        var4 = {};
        var7 = "function autoPositionHorizontal_ContextMenuNativeTsx3(){const{pageX,CONTEXT_MENU_EDGE_OFFSET,screenWidth,CONTEXT_MENU_MIN_WIDTH,minimumRightPosition}=this.__closure;const distanceFromLeftEdge=pageX-CONTEXT_MENU_EDGE_OFFSET;const distanceFromRightEdge=screenWidth-CONTEXT_MENU_EDGE_OFFSET-(pageX+CONTEXT_MENU_MIN_WIDTH);let positionX='left';let x=pageX;if(distanceFromLeftEdge>distanceFromRightEdge){positionX='right';x=minimumRightPosition;}return{x:x,positionX:positionX};}";
        var4['code'] = var7;
        var _closure1_slot9 = var4;
        var4 = {};
        var7 = 'function onPanGestureEnd_ContextMenuNativeTsx4(){const{state,runOnJS,requestClose}=this.__closure;const{activeIndex:activeIndex}=state;const isDismiss=activeIndex.get()===-1;runOnJS(requestClose)(isDismiss);}';
        var4['code'] = var7;
        var _closure1_slot10 = var4;
        var4 = {};
        var7 = 'function ContextMenuNativeTsx5(e){const{updateContextMenuState,state}=this.__closure;updateContextMenuState(e.absoluteX,e.absoluteY,state);}';
        var4['code'] = var7;
        var _closure1_slot11 = var4;
        var4 = {};
        var7 = 'function ContextMenuNativeTsx6(){const{runOnJS,triggerHapticFeedback,HapticFeedbackTypes,measureButtonAndShowMenu}=this.__closure;runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);measureButtonAndShowMenu();}';
        var4['code'] = var7;
        var _closure1_slot12 = var4;
        var4 = {};
        var7 = 'function ContextMenuNativeTsx7(){const{measureButtonAndShowMenu}=this.__closure;measureButtonAndShowMenu();}';
        var4['code'] = var7;
        var _closure1_slot13 = var4;
        var4 = {};
        var7 = 'function ContextMenuNativeTsx8(e){const{updateContextMenuState,state}=this.__closure;updateContextMenuState(e.absoluteX,e.absoluteY,state);}';
        var4['code'] = var7;
        var _closure1_slot14 = var4;
        var4 = {};
        var7 = 'function ContextMenuNativeTsx9(){const{runOnJS,triggerHapticFeedback,HapticFeedbackTypes,measureButtonAndShowMenu}=this.__closure;runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);measureButtonAndShowMenu();}';
        var4['code'] = var7;
        var _closure1_slot15 = var4;
        var4 = 17;
        var4 = var6[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.fileFinishedImporting;
        var4 = 'design/components/ContextMenu/native/ContextMenu.native.tsx';
        var4 = var5.bind(var6)(var4);
        var2 = function ContextMenu(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var2 = arg1;
                var7 = var2.children;
                var3 = var2.items;
                var _closure2_slot0 = var3;
                var11 = var2.triggerOnLongPress;
                var5 = undefined;
                if(!(var11 === var5)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                var11 = false;
case 4:
                var _closure2_slot1 = var11;
                var16 = var2.triggerOnTap;
                if(!(var16 === var5)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var16 = false;
case 6:
                var _closure2_slot2 = var16;
                var1 = var2.disableGesture;
                if(!(var1 === var5)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                var1 = false;
case 8:
                var20 = var2.align;
                if(!(var20 === var5)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                var20 = 'auto';
case 10:
                var _closure2_slot3 = var20;
                var23 = var2.title;
                var _closure2_slot4 = var23;
                var30 = var2.onOpen;
                var _closure2_slot5 = var30;
                var9 = var2.onClose;
                var _closure2_slot6 = var9;
                var19 = var2.keyboardShouldPersistTaps;
                var _closure2_slot7 = var19;
                var8 = var2.returnRef;
                var _closure2_slot8 = var8;
                var10 = var2.enabled;
                if(!(var10 === var5)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                var10 = true;
case 12:
                var _closure2_slot9 = var10;
                var4 = var2.buttonRef;
                var _closure2_slot10 = var4;
                var _closure2_slot11 = var5;
                var _closure2_slot12 = var5;
                var _closure2_slot13 = var5;
                var _closure2_slot14 = var5;
                var _closure2_slot15 = var5;
                var _closure2_slot16 = var5;
                var _closure2_slot17 = var5;
                var _closure2_slot18 = var5;
                var _closure2_slot19 = var5;
                var _closure2_slot20 = var5;
                var _closure2_slot21 = var5;
                var _closure2_slot22 = var5;
                var _closure2_slot23 = var5;
                var _closure2_slot24 = var5;
                var _closure2_slot25 = var5;
                var13 = _closure1_slot0;
                var12 = _closure1_slot2;
                var28 = 4;
                var12 = var12[var28];
                var13 = var13.bind(var5)(var12);
                var12 = var13.useAnimatedRef;
                var12 = var12.bind(var13)();
                var13 = null;
                if(!(var13 != var4)) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                var12 = var4;
case 14:
                _closure2_slot10 = var12;
                var15 = _closure1_slot0;
                var24 = _closure1_slot2;
                var4 = var24[var28];
                var14 = var15.bind(var5)(var4);
                var13 = var14.useSharedValue;
                var4 = -1;
                var25 = var13.bind(var14)(var4);
                _closure2_slot11 = var25;
                var14 = _closure1_slot3;
                var17 = var14.useEffect;
                var13 = new Array(2);
                var13[0] = var12;
                var13[1] = var25;
                var4 = function() {
                    var3 = _closure2_slot10;
                    var2 = var3.observe;
                    var1 = function(arg1) {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                            var3 = arg1;
                            var1 = null;
                            if(!(var1 != var3)) { _fun0003_ip = 16; continue _fun0003 }
case 17:
                            var2 = _closure2_slot11;
                            var1 = var2.set;
                            var1 = var1.bind(var2)(var3);
case 16:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var4 = var17.bind(var14)(var4, var13);
                var13 = var14.useMemo;
                var4 = new Array(1);
                var4[0] = var3;
                var3 = function() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        var6 = _closure2_slot0;
                        var2 = global;
                        var5 = var2.Array;
                        var3 = var5.isArray;
                        var2 = 0;
                        var2 = var6[var2];
                        var5 = var3.bind(var5)(var2);
                        var6 = _closure2_slot0;
                        if(var5) { _fun0004_ip = 18; continue _fun0004 }
case 19:
                        var3 = var6;
                        _fun0004_ip = 20; continue _fun0004;
case 18:
                        var2 = var6.flat;
                        var3 = var2.bind(var6)();
case 20:
                        var _closure3_slot0 = var3;
                        var2 = new Array(0);
                        var _closure3_slot1 = var2;
                        if(!var5) { _fun0004_ip = 21; continue _fun0004 }
case 22:
                        var5 = _closure2_slot0;
                        var4 = var5.forEach;
                        var1 = function(arg1, arg2) {
                            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                                var1 = arg2;
                                var6 = 0;
                                if(!(var1 > var6)) { _fun0005_ip = 7; continue _fun0005 }
case 17:
                                var3 = _closure3_slot1;
                                var2 = var3.push;
                                var5 = _closure3_slot0;
                                var4 = var5.indexOf;
                                var1 = arg1;
                                var1 = var1[var6];
                                var1 = var4.bind(var5)(var1);
                                var1 = var2.bind(var3)(var1);
case 7:
                                var1 = undefined;
                                return var1;
                            }
                        };
                        var1 = var4.bind(var5)(var1);
case 21:
                        var1 = {};
                        var1['items'] = var3;
                        var1['dividerIndexes'] = var2;
                        return var1;
                    }
                };
                var4 = var13.bind(var14)(var3, var4);
                var3 = var4.items;
                _closure2_slot12 = var3;
                var17 = var4.dividerIndexes;
                _closure2_slot13 = var17;
                var22 = var3.length;
                _closure2_slot14 = var22;
                var13 = _closure1_slot1;
                var4 = 5;
                var4 = var24[var4];
                var13 = var13.bind(var5)(var4);
                var4 = {};
                var14 = 3;
                var14 = var24[var14];
                var18 = var15.bind(var5)(var14);
                var14 = var18.isAndroid;
                var14 = var14.bind(var18)();
                var4['ignoreKeyboard'] = var14;
                var4 = var13.bind(var5)(var4);
                var18 = var4.width;
                _closure2_slot15 = var18;
                var21 = var4.height;
                _closure2_slot16 = var21;
                var13 = 6;
                var4 = var24[var13];
                var14 = var15.bind(var5)(var4);
                var4 = var14.useContextMenuState;
                var4 = var4.bind(var14)();
                _closure2_slot17 = var4;
                var31 = var4.activeIndex;
                _closure2_slot18 = var31;
                var14 = 7;
                var14 = var24[var14];
                var15 = var15.bind(var5)(var14);
                var14 = var15.useFontScale;
                var35 = var14.bind(var15)();
                if(!(var5 === var8)) { _fun0002_ip = 23; continue _fun0002 }
case 24:
                var8 = var12;
case 23:
                _closure2_slot8 = var8;
                var27 = _closure1_slot0;
                var26 = _closure1_slot2;
                var13 = var26[var13];
                var14 = var27.bind(var5)(var13);
                var13 = var14.useActiveContextMenu;
                var13 = var13.bind(var14)();
                _closure2_slot19 = var13;
                var14 = var26[var28];
                var24 = var27.bind(var5)(var14);
                var15 = var24.useSharedValue;
                var14 = global;
                var34 = var14.Math;
                var33 = var34.max;
                var29 = 8;
                var14 = var26[var29];
                var14 = var27.bind(var5)(var14);
                var36 = var14.CONTEXT_MENU_ITEM_BASE_HEIGHT;
                var14 = var26[var29];
                var14 = var27.bind(var5)(var14);
                var14 = var14.CONTEXT_MENU_ITEM_PADDING;
                var32 = 2;
                var14 = var32 * var14;
                var14 = var36 - var14;
                var35 = var14 * var35;
                var14 = var26[var29];
                var14 = var27.bind(var5)(var14);
                var14 = var14.CONTEXT_MENU_ITEM_PADDING;
                var14 = var32 * var14;
                var32 = var26[var29];
                var32 = var27.bind(var5)(var32);
                var32 = var32.CONTEXT_MENU_ITEM_BASE_HEIGHT;
                var14 = var35 + var14;
                var14 = var33.bind(var34)(var14, var32);
                var24 = var15.bind(var24)(var14);
                _closure2_slot20 = var24;
                var14 = _closure1_slot3;
                var15 = var14.useRef;
                var15 = var15.bind(var14)(var3);
                _closure2_slot21 = var15;
                var33 = var14.useLayoutEffect;
                var32 = new Array(1);
                var32[0] = var3;
                var15 = function() {
                    var2 = _closure2_slot21;
                    var1 = _closure2_slot12;
                    var2['current'] = var1;
                    var1 = undefined;
                    return var1;
                };
                var15 = var33.bind(var14)(var15, var32);
                var32 = var14.useLayoutEffect;
                var15 = new Array(2);
                var15[0] = var13;
                var15[1] = var4;
                var13 = function() {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                        var3 = _closure2_slot19;
                        var2 = null;
                        if(!(var2 == var3)) { _fun0006_ip = 25; continue _fun0006 }
case 26:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var2 = 6;
                        var3 = var3[var2];
                        var2 = undefined;
                        var3 = var4.bind(var2)(var3);
                        var2 = var3.resetContextMenuState;
                        var1 = _closure2_slot17;
                        var1 = var2.bind(var3)(var1);
case 25:
                        var1 = undefined;
                        return var1;
                    }
                };
                var13 = var32.bind(var14)(var13, var15);
                var15 = var14.useCallback;
                var13 = new Array(2);
                var13[0] = var31;
                var13[1] = var9;
                var9 = function(arg1) {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                        var1 = _closure2_slot6;
                        var2 = null;
                        if(!(var2 != var1)) { _fun0007_ip = 27; continue _fun0007 }
case 26:
                        var5 = _closure2_slot6;
                        var4 = undefined;
                        var1 = arg1;
                        var1 = var5.bind(var4)(var1);
case 27:
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var1 = 6;
                        var4 = var4[var1];
                        var1 = undefined;
                        var5 = var5.bind(var1)(var4);
                        var4 = var5.hideContextMenu;
                        var4 = var4.bind(var5)();
                        var5 = _closure2_slot18;
                        var4 = var5.get;
                        var4 = var4.bind(var5)();
                        var5 = -1;
                        if(!(var5 !== var4)) { _fun0007_ip = 28; continue _fun0007 }
case 29:
                        var3 = _closure2_slot21;
                        var3 = var3.current;
                        var3 = var3[var4];
                        if(!(var2 != var3)) { _fun0007_ip = 28; continue _fun0007 }
case 30:
                        var2 = var3.action;
                        var2 = var2.bind(var3)();
case 28:
                        return var1;
                    }
                };
                var13 = var15.bind(var14)(var9, var13);
                _closure2_slot22 = var13;
                var15 = var14.useCallback;
                var9 = new Array(1);
                var9[0] = var8;
                var8 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 9;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.setAccessibilityFocus;
                    var2 = {};
                    var5 = _closure2_slot8;
                    var2['ref'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var8 = var15.bind(var14)(var8, var9);
                _closure2_slot23 = var8;
                var15 = var14.useCallback;
                var9 = new Array(8);
                var9[0] = var30;
                var9[1] = var4;
                var9[2] = var3;
                var9[3] = var23;
                var9[4] = var19;
                var9[5] = var13;
                var9[6] = var8;
                var9[7] = var17;
                var8 = function(arg1, arg2, arg3, arg4, arg5, arg6) {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                        var2 = _closure2_slot5;
                        var1 = null;
                        if(!(var1 != var2)) { _fun0008_ip = 31; continue _fun0008 }
case 26:
                        var2 = _closure2_slot5;
                        var1 = undefined;
                        var1 = var2.bind(var1)();
case 31:
                        var7 = {};
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var1 = 10;
                        var6 = var5[var1];
                        var1 = undefined;
                        var8 = var4.bind(var1)(var6);
                        var6 = var8.uid;
                        var6 = var6.bind(var8)();
                        var7['key'] = var6;
                        var6 = arg1;
                        var7['x'] = var6;
                        var6 = arg2;
                        var7['y'] = var6;
                        var6 = arg3;
                        var7['positionX'] = var6;
                        var6 = arg4;
                        var7['positionY'] = var6;
                        var6 = arg5;
                        var7['height'] = var6;
                        var6 = arg6;
                        var7['width'] = var6;
                        var6 = _closure2_slot17;
                        var7['state'] = var6;
                        var6 = _closure2_slot12;
                        var7['items'] = var6;
                        var6 = _closure2_slot4;
                        var7['title'] = var6;
                        var6 = _closure2_slot7;
                        var7['keyboardShouldPersistTaps'] = var6;
                        var6 = _closure2_slot22;
                        var7['requestClose'] = var6;
                        var6 = _closure2_slot23;
                        var7['onClose'] = var6;
                        var3 = _closure2_slot13;
                        var7['dividerIndexes'] = var3;
                        var3 = 6;
                        var3 = var5[var3];
                        var6 = var4.bind(var1)(var3);
                        var3 = var6.showContextMenu;
                        var3 = var3.bind(var6)(var7);
                        var3 = 3;
                        var3 = var5[var3];
                        var4 = var4.bind(var1)(var3);
                        var3 = var4.isAndroid;
                        var3 = var3.bind(var4)();
                        if(!var3) { _fun0008_ip = 32; continue _fun0008 }
case 33:
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var2 = 11;
                        var2 = var8[var2];
                        var2 = var7.bind(var1)(var2);
                        var4 = var2.AccessibilityAnnouncer;
                        var3 = var4.announce;
                        var2 = 12;
                        var5 = var8[var2];
                        var5 = var7.bind(var1)(var5);
                        var6 = var5.intl;
                        var5 = var6.string;
                        var2 = var8[var2];
                        var2 = var7.bind(var1)(var2);
                        var2 = var2.t;
                        var2 = var2.ZqK0uI;
                        var2 = var5.bind(var6)(var2);
                        var2 = var3.bind(var4)(var2);
case 32:
                        return var1;
                    }
                };
                var19 = var15.bind(var14)(var8, var9);
                _closure2_slot24 = var19;
                var15 = var14.useCallback;
                var9 = function V() {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                        var1 = _closure1_slot6;
                        if(var1) { _fun0009_ip = 34; continue _fun0009 }
case 35:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 4;
                        var2 = var2[var1];
                        var1 = undefined;
                        var5 = var3.bind(var1)(var2);
                        var3 = var5.measure;
                        var2 = _closure2_slot10;
                        var2 = var3.bind(var5)(var2);
                        var3 = null;
                        if(!(var3 != var2)) { _fun0009_ip = 36; continue _fun0009 }
case 37:
                        var14 = var2.pageX;
                        var _closure3_slot0 = var14;
                        var16 = var2.pageY;
                        var _closure3_slot1 = var16;
                        var9 = var2.width;
                        var12 = var2.height;
                        var _closure3_slot2 = var12;
                        _fun0009_ip = 38; continue _fun0009;
case 36:
                        return var1;
case 34:
                        var2 = _closure2_slot11;
                        var1 = var2.get;
                        var5 = var1.bind(var2)();
                        var1 = -1;
                        if(!(var1 !== var5)) { _fun0009_ip = 39; continue _fun0009 }
case 40:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 13;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.measureInWindowForFWO;
                        var2 = var2.bind(var3)(var5);
                        var3 = null;
                        if(!(var3 != var2)) { _fun0009_ip = 41; continue _fun0009 }
case 42:
                        var6 = var2.x;
                        _closure3_slot0 = var6;
                        var5 = var2.y;
                        _closure3_slot1 = var5;
                        var9 = var2.width;
                        var2 = var2.height;
                        _closure3_slot2 = var2;
                        var14 = var6;
                        var16 = var5;
                        var12 = var2;
case 38:
                        var2 = _closure2_slot4;
                        var6 = null;
                        if(!(var6 == var2)) { _fun0009_ip = 43; continue _fun0009 }
case 44:
                        var5 = _closure2_slot14;
                        _fun0009_ip = 45; continue _fun0009;
case 43:
                        var7 = _closure2_slot14;
                        var2 = 1;
                        var5 = var7 + var2;
case 45:
                        var2 = _closure2_slot4;
                        var2 = var6 != var2;
                        var6 = 0;
                        if(!var2) { _fun0009_ip = 46; continue _fun0009 }
case 47:
                        var6 = 1;
case 46:
                        var2 = _closure2_slot13;
                        var2 = var2.length;
                        var8 = var6 + var2;
                        var6 = _closure2_slot20;
                        var2 = var6.get;
                        var2 = var2.bind(var6)();
                        var7 = var2 * var5;
                        var17 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var11 = 8;
                        var6 = var5[var11];
                        var2 = undefined;
                        var6 = var17.bind(var2)(var6);
                        var6 = var6.CONTEXT_MENU_DIVIDER_HEIGHT;
                        var6 = var6 * var8;
                        var8 = var7 + var6;
                        var7 = var16 + var12;
                        var6 = var5[var11];
                        var6 = var17.bind(var2)(var6);
                        var6 = var6.CONTEXT_MENU_OFFSET;
                        var13 = var7 + var6;
                        var _closure3_slot3 = var13;
                        var6 = _closure2_slot16;
                        var7 = var6 - var16;
                        var6 = var5[var11];
                        var6 = var17.bind(var2)(var6);
                        var6 = var6.CONTEXT_MENU_OFFSET;
                        var6 = var7 + var6;
                        var _closure3_slot4 = var6;
                        var7 = _closure2_slot16;
                        var15 = var7 - var13;
                        var7 = var5[var11];
                        var7 = var17.bind(var2)(var7);
                        var7 = var7.CONTEXT_MENU_EDGE_OFFSET;
                        var15 = var15 - var7;
                        var _closure3_slot5 = var15;
                        var7 = var5[var11];
                        var7 = var17.bind(var2)(var7);
                        var7 = var7.CONTEXT_MENU_EDGE_OFFSET;
                        var7 = var16 - var7;
                        var _closure3_slot6 = var7;
                        var15 = var15 < var8;
                        var _closure3_slot7 = var15;
                        var7 = var7 < var8;
                        var _closure3_slot8 = var7;
                        var7 = global;
                        var16 = var7.Math;
                        var15 = var16.max;
                        var7 = _closure2_slot15;
                        var7 = var7 - var14;
                        var7 = var7 - var9;
                        var5 = var5[var11];
                        var5 = var17.bind(var2)(var5);
                        var5 = var5.CONTEXT_MENU_EDGE_OFFSET;
                        var15 = var15.bind(var16)(var7, var5);
                        var _closure3_slot9 = var15;
                        var5 = function() {
                            var1 = function autoPositionVertical(arg1) {
                                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                                    var5 = arg1;
                                    var3 = _closure1_slot0;
                                    var2 = _closure1_slot2;
                                    var1 = 8;
                                    var2 = var2[var1];
                                    var1 = undefined;
                                    var1 = var3.bind(var1)(var2);
                                    var1 = var1.CONTEXT_MENU_OFFSET;
                                    var1 = {};
                                    var4 = _closure3_slot7;
                                    var2 = _closure3_slot8;
                                    if(!(var4 !== var2)) { _fun0010_ip = 48; continue _fun0010 }
case 49:
                                    var4 = _closure3_slot7;
                                    var2 = 'below';
                                    if(!var4) { _fun0010_ip = 22; continue _fun0010 }
case 50:
                                    var2 = 'above';
case 22:
                                    _fun0010_ip = 30; continue _fun0010;
case 48:
                                    var6 = _closure3_slot5;
                                    var4 = _closure3_slot6;
                                    var6 = var6 > var4;
                                    var4 = 'above';
                                    if(!var6) { _fun0010_ip = 51; continue _fun0010 }
case 52:
                                    var4 = 'below';
case 51:
                                    var2 = var4;
case 30:
                                    var4 = 'above';
                                    if(!(var4 !== var2)) { _fun0010_ip = 53; continue _fun0010 }
case 54:
                                    var4 = _closure3_slot3;
                                    _fun0010_ip = 55; continue _fun0010;
case 53:
                                    var4 = _closure3_slot4;
case 55:
                                    var3 = null;
                                    var6 = var3 != var5;
                                    var3 = 0;
                                    if(!var6) { _fun0010_ip = 56; continue _fun0010 }
case 57:
                                    var3 = var5;
case 56:
                                    var3 = var4 + var3;
                                    var1['y'] = var3;
                                    var1['positionY'] = var2;
                                    return var1;
                                }
                            };
                            var3 = {};
                            var2 = _closure3_slot1;
                            var3['pageY'] = var2;
                            var2 = _closure3_slot2;
                            var3['height'] = var2;
                            var7 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var5 = 8;
                            var6 = var6[var5];
                            var5 = undefined;
                            var5 = var7.bind(var5)(var6);
                            var5 = var5.CONTEXT_MENU_OFFSET;
                            var3['CONTEXT_MENU_OFFSET'] = var5;
                            var5 = _closure3_slot7;
                            var3['wouldOverflowBelow'] = var5;
                            var5 = _closure3_slot8;
                            var3['wouldOverflowAbove'] = var5;
                            var5 = _closure3_slot5;
                            var3['availableSpaceBelow'] = var5;
                            var5 = _closure3_slot6;
                            var3['availableSpaceAbove'] = var5;
                            var5 = _closure3_slot4;
                            var3['positionAboveOffset'] = var5;
                            var4 = _closure3_slot3;
                            var3['positionBelowOffset'] = var4;
                            var1['__closure'] = var3;
                            var3 = 15309589830995.0;
                            var1['__workletHash'] = var3;
                            var2 = _closure1_slot8;
                            var1['__initData'] = var2;
                            return var1;
                        };
                        var5 = var5.bind(var2)();
                        var4 = function() {
                            var1 = function autoPositionHorizontal() {
                                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                                    var4 = _closure3_slot0;
                                    var7 = _closure1_slot0;
                                    var8 = _closure1_slot2;
                                    var2 = 8;
                                    var3 = var8[var2];
                                    var6 = undefined;
                                    var3 = var7.bind(var6)(var3);
                                    var3 = var3.CONTEXT_MENU_EDGE_OFFSET;
                                    var5 = var4 - var3;
                                    var4 = _closure2_slot15;
                                    var3 = var8[var2];
                                    var3 = var7.bind(var6)(var3);
                                    var3 = var3.CONTEXT_MENU_EDGE_OFFSET;
                                    var3 = var4 - var3;
                                    var4 = _closure3_slot0;
                                    var2 = var8[var2];
                                    var2 = var7.bind(var6)(var2);
                                    var2 = var2.CONTEXT_MENU_MIN_WIDTH;
                                    var2 = var4 + var2;
                                    var4 = var3 - var2;
                                    var3 = _closure3_slot0;
                                    var2 = 'left';
                                    if(!(var5 > var4)) { _fun0011_ip = 58; continue _fun0011 }
case 59:
                                    var3 = _closure3_slot9;
                                    var2 = 'right';
case 58:
                                    var1 = {};
                                    var1['x'] = var3;
                                    var1['positionX'] = var2;
                                    return var1;
                                }
                            };
                            var3 = {};
                            var2 = _closure3_slot0;
                            var3['pageX'] = var2;
                            var7 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var5 = 8;
                            var9 = var8[var5];
                            var6 = undefined;
                            var9 = var7.bind(var6)(var9);
                            var9 = var9.CONTEXT_MENU_EDGE_OFFSET;
                            var3['CONTEXT_MENU_EDGE_OFFSET'] = var9;
                            var9 = _closure2_slot15;
                            var3['screenWidth'] = var9;
                            var5 = var8[var5];
                            var5 = var7.bind(var6)(var5);
                            var5 = var5.CONTEXT_MENU_MIN_WIDTH;
                            var3['CONTEXT_MENU_MIN_WIDTH'] = var5;
                            var4 = _closure3_slot9;
                            var3['minimumRightPosition'] = var4;
                            var1['__closure'] = var3;
                            var3 = 14761866330436.0;
                            var1['__workletHash'] = var3;
                            var2 = _closure1_slot9;
                            var1['__initData'] = var2;
                            return var1;
                        };
                        var4 = var4.bind(var2)();
                        var16 = _closure2_slot3;
                        var7 = 'auto';
                        if(!(var7 !== var16)) { _fun0009_ip = 60; continue _fun0009 }
case 61:
                        var16 = _closure2_slot3;
                        var7 = 'above';
                        if(!(var7 !== var16)) { _fun0009_ip = 62; continue _fun0009 }
case 63:
                        var17 = _closure2_slot3;
                        var16 = 'below';
                        if(!(var16 !== var17)) { _fun0009_ip = 62; continue _fun0009 }
case 64:
                        var18 = _closure2_slot3;
                        var17 = 'left';
                        var16 = var17;
                        if(!(var16 === var18)) { _fun0009_ip = 65; continue _fun0009 }
case 66:
                        var16 = 'right';
case 65:
                        if(!(var17 !== var16)) { _fun0009_ip = 67; continue _fun0009 }
case 68:
                        var17 = var15 + var9;
                        var18 = _closure1_slot0;
                        var15 = _closure1_slot2;
                        var15 = var15[var11];
                        var15 = var18.bind(var2)(var15);
                        var15 = var15.CONTEXT_MENU_OFFSET;
                        var15 = var17 + var15;
                        _fun0009_ip = 69; continue _fun0009;
case 67:
                        var17 = var14 + var9;
                        var18 = _closure1_slot0;
                        var14 = _closure1_slot2;
                        var14 = var14[var11];
                        var14 = var18.bind(var2)(var14);
                        var14 = var14.CONTEXT_MENU_OFFSET;
                        var15 = var17 + var14;
case 69:
                        var17 = _closure1_slot0;
                        var18 = _closure1_slot2;
                        var11 = var18[var11];
                        var11 = var17.bind(var2)(var11);
                        var11 = var11.CONTEXT_MENU_OFFSET;
                        var12 = var11 + var12;
                        var11 = -1;
                        var11 = var11 * var12;
                        var11 = var5.bind(var2)(var11);
                        var23 = var11.y;
                        var21 = var11.positionY;
                        var11 = 4;
                        var11 = var18[var11];
                        var18 = var17.bind(var2)(var11);
                        var17 = var18.runOnJS;
                        var11 = _closure2_slot24;
                        var11 = var17.bind(var18)(var11);
                        var25 = undefined;
                        var24 = var15;
                        var22 = var16;
                        var20 = var8;
                        var19 = var9;
                        var11 = var25[var11](var24, var23, var22, var21, var20, var19, var18);
                        _fun0009_ip = 70; continue _fun0009;
case 62:
                        var12 = _closure2_slot3;
                        if(!(var7 === var12)) { _fun0009_ip = 71; continue _fun0009 }
case 72:
                        var13 = var6;
case 71:
                        var6 = var4.bind(var2)();
                        var11 = var6.x;
                        var22 = var6.positionX;
                        var14 = _closure1_slot0;
                        var15 = _closure1_slot2;
                        var6 = 4;
                        var6 = var15[var6];
                        var15 = var14.bind(var2)(var6);
                        var14 = var15.runOnJS;
                        var6 = _closure2_slot24;
                        var6 = var14.bind(var15)(var6);
                        var25 = undefined;
                        var24 = var11;
                        var23 = var13;
                        var21 = var12;
                        var20 = var8;
                        var19 = var9;
                        var6 = var25[var6](var24, var23, var22, var21, var20, var19, var18);
                        _fun0009_ip = 70; continue _fun0009;
case 60:
                        var5 = var5.bind(var2)();
                        var23 = var5.y;
                        var21 = var5.positionY;
                        var4 = var4.bind(var2)();
                        var5 = var4.x;
                        var22 = var4.positionX;
                        var11 = _closure1_slot0;
                        var12 = _closure1_slot2;
                        var10 = 4;
                        var10 = var12[var10];
                        var11 = var11.bind(var2)(var10);
                        var10 = var11.runOnJS;
                        var3 = _closure2_slot24;
                        var3 = var10.bind(var11)(var3);
                        var25 = undefined;
                        var24 = var5;
                        var20 = var8;
                        var19 = var9;
                        var3 = var25[var3](var24, var23, var22, var21, var20, var19, var18);
case 70:
                        return var2;
case 41:
                        return var1;
case 39:
                        var1 = undefined;
                        return var1;
                    }
                };
                var8 = {};
                var30 = _closure1_slot6;
                var8['_isFabricIOS'] = var30;
                var8['buttonTagSV'] = var25;
                var30 = 13;
                var30 = var26[var30];
                var30 = var27.bind(var5)(var30);
                var30 = var30.measureInWindowForFWO;
                var8['measureInWindowForFWO'] = var30;
                var30 = var26[var28];
                var30 = var27.bind(var5)(var30);
                var30 = var30.measure;
                var8['measure'] = var30;
                var8['buttonRef'] = var12;
                var8['title'] = var23;
                var8['itemCount'] = var22;
                var8['dividerIndexes'] = var17;
                var8['approximateItemHeight'] = var24;
                var30 = var26[var29];
                var30 = var27.bind(var5)(var30);
                var30 = var30.CONTEXT_MENU_DIVIDER_HEIGHT;
                var8['CONTEXT_MENU_DIVIDER_HEIGHT'] = var30;
                var30 = var26[var29];
                var30 = var27.bind(var5)(var30);
                var30 = var30.CONTEXT_MENU_OFFSET;
                var8['CONTEXT_MENU_OFFSET'] = var30;
                var8['screenHeight'] = var21;
                var30 = var26[var29];
                var30 = var27.bind(var5)(var30);
                var30 = var30.CONTEXT_MENU_EDGE_OFFSET;
                var8['CONTEXT_MENU_EDGE_OFFSET'] = var30;
                var8['screenWidth'] = var18;
                var29 = var26[var29];
                var29 = var27.bind(var5)(var29);
                var29 = var29.CONTEXT_MENU_MIN_WIDTH;
                var8['CONTEXT_MENU_MIN_WIDTH'] = var29;
                var8['menuAlign'] = var20;
                var26 = var26[var28];
                var26 = var27.bind(var5)(var26);
                var26 = var26.runOnJS;
                var8['runOnJS'] = var26;
                var8['showMenu'] = var19;
                var9['__closure'] = var8;
                var8 = 6408542373252.0;
                var9['__workletHash'] = var8;
                var8 = _closure1_slot7;
                var9['__initData'] = var8;
                var8 = new Array(10);
                var8[0] = var12;
                var8[1] = var25;
                var8[2] = var24;
                var8[3] = var23;
                var8[4] = var22;
                var8[5] = var21;
                var8[6] = var20;
                var8[7] = var19;
                var8[8] = var18;
                var8[9] = var17;
                var15 = var15.bind(var14)(var9, var8);
                _closure2_slot25 = var15;
                var9 = var14.useMemo;
                var8 = new Array(6);
                var8[0] = var11;
                var8[1] = var16;
                var8[2] = var13;
                var8[3] = var10;
                var8[4] = var4;
                var8[5] = var15;
                var4 = function() {
                    _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                        var1 = function() {
                            var1 = function onPanGestureEnd() {
                                var1 = _closure2_slot17;
                                var3 = var1.activeIndex;
                                var1 = var3.get;
                                var4 = var1.bind(var3)();
                                var5 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var1 = 4;
                                var3 = var3[var1];
                                var1 = undefined;
                                var5 = var5.bind(var1)(var3);
                                var3 = var5.runOnJS;
                                var2 = _closure2_slot22;
                                var3 = var3.bind(var5)(var2);
                                var2 = -1;
                                var2 = var2 === var4;
                                var2 = var3.bind(var1)(var2);
                                return var1;
                            };
                            var3 = {};
                            var2 = _closure2_slot17;
                            var3['state'] = var2;
                            var7 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var5 = 4;
                            var6 = var6[var5];
                            var5 = undefined;
                            var5 = var7.bind(var5)(var6);
                            var5 = var5.runOnJS;
                            var3['runOnJS'] = var5;
                            var4 = _closure2_slot22;
                            var3['requestClose'] = var4;
                            var1['__closure'] = var3;
                            var3 = 12851223476540.0;
                            var1['__workletHash'] = var3;
                            var2 = _closure1_slot10;
                            var1['__initData'] = var2;
                            return var1;
                        };
                        var5 = undefined;
                        var8 = var1.bind(var5)();
                        var1 = _closure2_slot1;
                        if(var1) { _fun0012_ip = 73; continue _fun0012 }
case 74:
                        var1 = _closure2_slot2;
                        var12 = _closure1_slot0;
                        var13 = _closure1_slot2;
                        var2 = 14;
                        var2 = var13[var2];
                        var2 = var12.bind(var5)(var2);
                        var4 = var2.Gesture;
                        if(var1) { _fun0012_ip = 75; continue _fun0012 }
case 76:
                        var1 = var4.Pan;
                        var6 = var1.bind(var4)();
                        var2 = var6.enabled;
                        var1 = _closure2_slot9;
                        var6 = var2.bind(var6)(var1);
                        var2 = var6.onBegin;
                        var1 = function t() {
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var1 = 4;
                            var2 = var5[var1];
                            var1 = undefined;
                            var7 = var4.bind(var1)(var2);
                            var6 = var7.runOnJS;
                            var2 = 15;
                            var3 = var5[var2];
                            var3 = var4.bind(var1)(var3);
                            var3 = var3.triggerHapticFeedback;
                            var3 = var6.bind(var7)(var3);
                            var2 = var5[var2];
                            var2 = var4.bind(var1)(var2);
                            var2 = var2.HapticFeedbackTypes;
                            var2 = var2.IMPACT_MEDIUM;
                            var2 = var3.bind(var1)(var2);
                            var2 = _closure2_slot25;
                            var2 = var2.bind(var1)();
                            return var1;
                        };
                        var7 = {};
                        var10 = 4;
                        var10 = var13[var10];
                        var10 = var12.bind(var5)(var10);
                        var10 = var10.runOnJS;
                        var7['runOnJS'] = var10;
                        var10 = 15;
                        var14 = var13[var10];
                        var14 = var12.bind(var5)(var14);
                        var14 = var14.triggerHapticFeedback;
                        var7['triggerHapticFeedback'] = var14;
                        var10 = var13[var10];
                        var10 = var12.bind(var5)(var10);
                        var10 = var10.HapticFeedbackTypes;
                        var7['HapticFeedbackTypes'] = var10;
                        var10 = _closure2_slot25;
                        var7['measureButtonAndShowMenu'] = var10;
                        var1['__closure'] = var7;
                        var7 = 12845174582902.0;
                        var1['__workletHash'] = var7;
                        var7 = _closure1_slot15;
                        var1['__initData'] = var7;
                        var6 = var2.bind(var6)(var1);
                        var2 = var6.onUpdate;
                        var1 = function e(arg1) {
                            var2 = arg1;
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 6;
                            var3 = var3[var1];
                            var1 = undefined;
                            var6 = var4.bind(var1)(var3);
                            var5 = var6.updateContextMenuState;
                            var4 = var2.absoluteX;
                            var3 = var2.absoluteY;
                            var2 = _closure2_slot17;
                            var2 = var5.bind(var6)(var4, var3, var2);
                            return var1;
                        };
                        var7 = {};
                        var10 = 6;
                        var10 = var13[var10];
                        var10 = var12.bind(var5)(var10);
                        var10 = var10.updateContextMenuState;
                        var7['updateContextMenuState'] = var10;
                        var10 = _closure2_slot17;
                        var7['state'] = var10;
                        var1['__closure'] = var7;
                        var7 = 17473642675622.0;
                        var1['__workletHash'] = var7;
                        var7 = _closure1_slot14;
                        var1['__initData'] = var7;
                        var2 = var2.bind(var6)(var1);
                        var1 = var2.onEnd;
                        var1 = var1.bind(var2)(var8);
                        _fun0012_ip = 77; continue _fun0012;
case 75:
                        var2 = var4.Tap;
                        var6 = var2.bind(var4)();
                        var4 = var6.enabled;
                        var2 = _closure2_slot9;
                        var6 = var4.bind(var6)(var2);
                        var4 = var6.onStart;
                        var2 = function o() {
                            var2 = _closure2_slot25;
                            var1 = undefined;
                            var2 = var2.bind(var1)();
                            return var1;
                        };
                        var7 = {};
                        var10 = _closure2_slot25;
                        var7['measureButtonAndShowMenu'] = var10;
                        var2['__closure'] = var7;
                        var7 = 13410382812897.0;
                        var2['__workletHash'] = var7;
                        var7 = _closure1_slot13;
                        var2['__initData'] = var7;
                        var1 = var4.bind(var6)(var2);
case 77:
                        return var1;
case 73:
                        var2 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var1 = 14;
                        var4 = var6[var1];
                        var4 = var2.bind(var5)(var4);
                        var7 = var4.Gesture;
                        var4 = var7.Pan;
                        var7 = var4.bind(var7)();
                        var4 = var7.enabled;
                        var10 = _closure2_slot9;
                        var12 = var4.bind(var7)(var10);
                        var7 = var12.onUpdate;
                        var4 = function i(arg1) {
                            var2 = arg1;
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 6;
                            var3 = var3[var1];
                            var1 = undefined;
                            var6 = var4.bind(var1)(var3);
                            var5 = var6.updateContextMenuState;
                            var4 = var2.absoluteX;
                            var3 = var2.absoluteY;
                            var2 = _closure2_slot17;
                            var2 = var5.bind(var6)(var4, var3, var2);
                            return var1;
                        };
                        var13 = {};
                        var14 = 6;
                        var14 = var6[var14];
                        var14 = var2.bind(var5)(var14);
                        var14 = var14.updateContextMenuState;
                        var13['updateContextMenuState'] = var14;
                        var14 = _closure2_slot17;
                        var13['state'] = var14;
                        var4['__closure'] = var13;
                        var13 = 2460213213323.0;
                        var4['__workletHash'] = var13;
                        var13 = _closure1_slot11;
                        var4['__initData'] = var13;
                        var7 = var7.bind(var12)(var4);
                        var4 = var7.onEnd;
                        var4 = var4.bind(var7)(var8);
                        var7 = var6[var1];
                        var7 = var2.bind(var5)(var7);
                        var8 = var7.Gesture;
                        var7 = var8.LongPress;
                        var8 = var7.bind(var8)();
                        var7 = var8.enabled;
                        var10 = var7.bind(var8)(var10);
                        var8 = var10.shouldCancelWhenOutside;
                        var7 = false;
                        var8 = var8.bind(var10)(var7);
                        var7 = var8.onStart;
                        var3 = function n() {
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var1 = 4;
                            var2 = var5[var1];
                            var1 = undefined;
                            var7 = var4.bind(var1)(var2);
                            var6 = var7.runOnJS;
                            var2 = 15;
                            var3 = var5[var2];
                            var3 = var4.bind(var1)(var3);
                            var3 = var3.triggerHapticFeedback;
                            var3 = var6.bind(var7)(var3);
                            var2 = var5[var2];
                            var2 = var4.bind(var1)(var2);
                            var2 = var2.HapticFeedbackTypes;
                            var2 = var2.IMPACT_MEDIUM;
                            var2 = var3.bind(var1)(var2);
                            var2 = _closure2_slot25;
                            var2 = var2.bind(var1)();
                            return var1;
                        };
                        var10 = {};
                        var12 = 4;
                        var12 = var6[var12];
                        var12 = var2.bind(var5)(var12);
                        var12 = var12.runOnJS;
                        var10['runOnJS'] = var12;
                        var12 = 15;
                        var13 = var6[var12];
                        var13 = var2.bind(var5)(var13);
                        var13 = var13.triggerHapticFeedback;
                        var10['triggerHapticFeedback'] = var13;
                        var12 = var6[var12];
                        var12 = var2.bind(var5)(var12);
                        var12 = var12.HapticFeedbackTypes;
                        var10['HapticFeedbackTypes'] = var12;
                        var11 = _closure2_slot25;
                        var10['measureButtonAndShowMenu'] = var11;
                        var3['__closure'] = var10;
                        var10 = 12352363869337.0;
                        var3['__workletHash'] = var10;
                        var9 = _closure1_slot12;
                        var3['__initData'] = var9;
                        var3 = var7.bind(var8)(var3);
                        var1 = var6[var1];
                        var1 = var2.bind(var5)(var1);
                        var2 = var1.Gesture;
                        var1 = var2.Simultaneous;
                        var1 = var1.bind(var2)(var3, var4);
                        return var1;
                    }
                };
                var8 = var9.bind(var14)(var4, var8);
                var10 = var14.useMemo;
                var9 = new Array(1);
                var9[0] = var3;
                var4 = function() {
                    var3 = _closure2_slot12;
                    var2 = var3.map;
                    var1 = function(arg1) {
                        var2 = arg1;
                        var1 = {};
                        var3 = var2.label;
                        var1['name'] = var3;
                        var2 = var2.label;
                        var1['label'] = var2;
                        return var1;
                    };
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var4 = var10.bind(var14)(var4, var9);
                var10 = var14.useCallback;
                var9 = new Array(1);
                var9[0] = var3;
                var3 = function(arg1) {
                    _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                        var2 = arg1;
                        var _closure3_slot0 = var2;
                        var3 = _closure2_slot12;
                        var2 = var3.find;
                        var1 = function(arg1) {
                            var1 = arg1;
                            var2 = var1.label;
                            var1 = _closure3_slot0;
                            var1 = var1.nativeEvent;
                            var1 = var1.actionName;
                            var1 = var2 === var1;
                            return var1;
                        };
                        var2 = var2.bind(var3)(var1);
                        var4 = null;
                        var1 = var4 == var2;
                        if(var1) { _fun0013_ip = 78; continue _fun0013 }
case 79:
                        var3 = var2.action;
                        var1 = var4 == var3;
case 78:
                        if(var1) { _fun0013_ip = 50; continue _fun0013 }
case 20:
                        var1 = var2.action;
                        var1 = var1.bind(var2)();
case 50:
                        var1 = undefined;
                        return var1;
                    }
                };
                var3 = var10.bind(var14)(var3, var9);
                var13 = var14.useCallback;
                var10 = new Array(1);
                var10[0] = var15;
                var9 = function() {
                    _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 3;
                        var3 = var3[var1];
                        var1 = undefined;
                        var4 = var4.bind(var1)(var3);
                        var3 = var4.isAndroid;
                        var3 = var3.bind(var4)();
                        if(!var3) { _fun0014_ip = 8; continue _fun0014 }
case 80:
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var4 = 16;
                        var4 = var6[var4];
                        var5 = var5.bind(var1)(var4);
                        var4 = var5.getIsScreenReaderEnabled;
                        var3 = var4.bind(var5)();
case 8:
                        if(!var3) { _fun0014_ip = 81; continue _fun0014 }
case 82:
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var2 = 4;
                        var2 = var4[var2];
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.runOnUI;
                        var2 = _closure2_slot25;
                        var2 = var3.bind(var4)(var2);
                        var2 = var2.bind(var1)();
case 81:
                        return var1;
                    }
                };
                var9 = var13.bind(var14)(var9, var10);
                var13 = var14.useCallback;
                var10 = new Array(1);
                var10[0] = var15;
                var6 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 4;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.runOnUI;
                    var2 = _closure2_slot25;
                    var2 = var3.bind(var4)(var2);
                    var2 = var2.bind(var1)();
                    return var1;
                };
                var10 = var13.bind(var14)(var6, var10);
                var6 = {};
                var6['ref'] = var12;
                var6['onPress'] = var9;
                var9 = undefined;
                if(!var11) { _fun0002_ip = 83; continue _fun0002 }
case 84:
                var9 = undefined;
                if(!var1) { _fun0002_ip = 83; continue _fun0002 }
case 85:
                var9 = var10;
case 83:
                var6['onLongPress'] = var9;
                var6['accessibilityActions'] = var4;
                var6['onAccessibilityAction'] = var3;
                var4 = _closure1_slot5;
                if(var1) { _fun0002_ip = 86; continue _fun0002 }
case 87:
                var3 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 14;
                var1 = var9[var1];
                var1 = var3.bind(var5)(var1);
                var3 = var1.GestureDetector;
                var1 = {};
                var1['gesture'] = var8;
                var8 = var7.bind(var5)(var6);
                var1['children'] = var8;
                var1 = var4.bind(var5)(var3, var1);
                _fun0002_ip = 88; continue _fun0002;
case 86:
                var3 = _closure1_slot4;
                var2 = {};
                var6 = var7.bind(var5)(var6);
                var2['children'] = var6;
                var1 = var4.bind(var5)(var3, var2);
case 88:
                return var1;
            }
        };
        var3['ContextMenu'] = var2;
        return var1;
    }
})();