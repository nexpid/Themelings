// app/design/components/ContextMenu/native/ContextMenu.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
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
    var4 = {};
    var7 = "function ContextMenuNativeTsx1(){const{measure,buttonRef,title,itemCount,dividerIndexes,approximateItemHeight,CONTEXT_MENU_DIVIDER_HEIGHT,CONTEXT_MENU_OFFSET,screenHeight,CONTEXT_MENU_EDGE_OFFSET,screenWidth,CONTEXT_MENU_MIN_WIDTH,menuAlign,runOnJS,showMenu}=this.__closure;const measurements=measure(buttonRef);if(measurements!=null){const{pageX:pageX,pageY:pageY,height:height,width:width}=measurements;const rowCount=title!=null?itemCount+1:itemCount;const dividerCount=(title!=null?1:0)+dividerIndexes.length;const menuHeight=approximateItemHeight.get()*rowCount+CONTEXT_MENU_DIVIDER_HEIGHT*dividerCount;const positionBelowOffset=pageY+height+CONTEXT_MENU_OFFSET;const positionAboveOffset=screenHeight-pageY+CONTEXT_MENU_OFFSET;const availableSpaceBelow=screenHeight-positionBelowOffset-CONTEXT_MENU_EDGE_OFFSET;const availableSpaceAbove=pageY-CONTEXT_MENU_EDGE_OFFSET;const wouldOverflowBelow=availableSpaceBelow<menuHeight;const wouldOverflowAbove=availableSpaceAbove<menuHeight;const minimumRightPosition=Math.max(screenWidth-pageX-width,CONTEXT_MENU_EDGE_OFFSET);function autoPositionVertical(offset){let positionY='below';let y=pageY+height+CONTEXT_MENU_OFFSET;if(wouldOverflowBelow&&wouldOverflowAbove){if(availableSpaceBelow>availableSpaceAbove){positionY='below';}else{positionY='above';}}else if(wouldOverflowBelow){positionY='above';}else{positionY='below';}y=(positionY==='above'?positionAboveOffset:positionBelowOffset)+(offset!==null&&offset!==void 0?offset:0);return{y:y,positionY:positionY};}function autoPositionHorizontal(){const distanceFromLeftEdge=pageX-CONTEXT_MENU_EDGE_OFFSET;const distanceFromRightEdge=screenWidth-CONTEXT_MENU_EDGE_OFFSET-(pageX+CONTEXT_MENU_MIN_WIDTH);let positionX='left';let x=pageX;if(distanceFromLeftEdge>distanceFromRightEdge){positionX='right';x=minimumRightPosition;}return{x:x,positionX:positionX};}if(menuAlign==='auto'){const{y:y,positionY:positionY}=autoPositionVertical();const{x:x,positionX:positionX}=autoPositionHorizontal();runOnJS(showMenu)(x,y,positionX,positionY,menuHeight,width);return;}else if(menuAlign==='above'||menuAlign==='below'){const positionY=menuAlign;const y=positionY==='above'?positionAboveOffset:positionBelowOffset;const{x:x,positionX:positionX}=autoPositionHorizontal();runOnJS(showMenu)(x,y,positionX,positionY,menuHeight,width);return;}else{const positionX=menuAlign==='left'?'right':'left';const x=positionX==='left'?pageX+width+CONTEXT_MENU_OFFSET:minimumRightPosition+width+CONTEXT_MENU_OFFSET;const{y:y,positionY:positionY}=autoPositionVertical(-1*(CONTEXT_MENU_OFFSET+height));runOnJS(showMenu)(x,y,positionX,positionY,menuHeight,width);return;}}}";
    var4['code'] = var7;
    var _closure1_slot6 = var4;
    var4 = {};
    var7 = 'function onPanGestureEnd_ContextMenuNativeTsx2(){const{state,runOnJS,requestClose}=this.__closure;const{activeIndex:activeIndex}=state;const isDismiss=activeIndex.get()===-1;runOnJS(requestClose)(isDismiss);}';
    var4['code'] = var7;
    var _closure1_slot7 = var4;
    var4 = {};
    var7 = 'function ContextMenuNativeTsx3(e){const{updateContextMenuState,state}=this.__closure;updateContextMenuState(e.absoluteX,e.absoluteY,state);}';
    var4['code'] = var7;
    var _closure1_slot8 = var4;
    var4 = {};
    var7 = 'function ContextMenuNativeTsx4(){const{runOnJS,triggerHapticFeedback,HapticFeedbackTypes,measureButtonAndShowMenu}=this.__closure;runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);measureButtonAndShowMenu();}';
    var4['code'] = var7;
    var _closure1_slot9 = var4;
    var4 = {};
    var7 = 'function ContextMenuNativeTsx5(){const{measureButtonAndShowMenu}=this.__closure;measureButtonAndShowMenu();}';
    var4['code'] = var7;
    var _closure1_slot10 = var4;
    var4 = {};
    var7 = 'function ContextMenuNativeTsx6(e){const{updateContextMenuState,state}=this.__closure;updateContextMenuState(e.absoluteX,e.absoluteY,state);}';
    var4['code'] = var7;
    var _closure1_slot11 = var4;
    var4 = {};
    var7 = 'function ContextMenuNativeTsx7(){const{runOnJS,triggerHapticFeedback,HapticFeedbackTypes,measureButtonAndShowMenu}=this.__closure;runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);measureButtonAndShowMenu();}';
    var4['code'] = var7;
    var _closure1_slot12 = var4;
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'design/components/ContextMenu/native/ContextMenu.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ContextMenu(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var7 = var2.children;
            var3 = var2.items;
            var _closure2_slot0 = var3;
            var11 = var2.triggerOnLongPress;
            var5 = undefined;
            if(!(var11 === var5)) { _fun0001_ip = 34; continue _fun0001 }
 32:
            var11 = false;
 34:
            var _closure2_slot1 = var11;
            var16 = var2.triggerOnTap;
            if(!(var16 === var5)) { _fun0001_ip = 50; continue _fun0001 }
 48:
            var16 = false;
 50:
            var _closure2_slot2 = var16;
            var1 = var2.disableGesture;
            if(!(var1 === var5)) { _fun0001_ip = 68; continue _fun0001 }
 66:
            var1 = false;
 68:
            var20 = var2.align;
            if(!(var20 === var5)) { _fun0001_ip = 82; continue _fun0001 }
 78:
            var20 = 'auto';
 82:
            var _closure2_slot3 = var20;
            var23 = var2.title;
            var _closure2_slot4 = var23;
            var29 = var2.onOpen;
            var _closure2_slot5 = var29;
            var9 = var2.onClose;
            var _closure2_slot6 = var9;
            var19 = var2.keyboardShouldPersistTaps;
            var _closure2_slot7 = var19;
            var8 = var2.returnRef;
            var _closure2_slot8 = var8;
            var10 = var2.enabled;
            if(!(var10 === var5)) { _fun0001_ip = 148; continue _fun0001 }
 146:
            var10 = true;
 148:
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
            var13 = _closure1_slot0;
            var12 = _closure1_slot2;
            var27 = 2;
            var12 = var12[var27];
            var13 = var13.bind(var5)(var12);
            var12 = var13.useAnimatedRef;
            var12 = var12.bind(var13)();
            var13 = null;
            if(!(var13 != var4)) { _fun0001_ip = 260; continue _fun0001 }
 257:
            var12 = var4;
 260:
            _closure2_slot10 = var12;
            var14 = _closure1_slot3;
            var13 = var14.useMemo;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var6 = _closure2_slot0;
                    var2 = global;
                    var5 = var2.Array;
                    var3 = var5.isArray;
                    var2 = 0;
                    var2 = var6[var2];
                    var5 = var3.bind(var5)(var2);
                    var6 = _closure2_slot0;
                    if(var5) { _fun0002_ip = 45; continue _fun0002 }
 40:
                    var3 = var6;
                    _fun0002_ip = 55; continue _fun0002;
 45:
                    var2 = var6.flat;
                    var3 = var2.bind(var6)();
 55:
                    var _closure3_slot0 = var3;
                    var2 = new Array(0);
                    var _closure3_slot1 = var2;
                    if(!var5) { _fun0002_ip = 89; continue _fun0002 }
 70:
                    var5 = _closure2_slot0;
                    var4 = var5.forEach;
                    var1 = function(arg1, arg2) {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                            var1 = arg2;
                            var6 = 0;
                            if(!(var1 > var6)) { _fun0003_ip = 48; continue _fun0003 }
 9:
                            var3 = _closure3_slot1;
                            var2 = var3.push;
                            var5 = _closure3_slot0;
                            var4 = var5.indexOf;
                            var1 = arg1;
                            var1 = var1[var6];
                            var1 = var4.bind(var5)(var1);
                            var1 = var2.bind(var3)(var1);
 48:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var1 = var4.bind(var5)(var1);
 89:
                    var1 = {};
                    var1['items'] = var3;
                    var1['dividerIndexes'] = var2;
                    return var1;
                }
            };
            var4 = var13.bind(var14)(var3, var4);
            var3 = var4.items;
            _closure2_slot11 = var3;
            var17 = var4.dividerIndexes;
            _closure2_slot12 = var17;
            var22 = var3.length;
            _closure2_slot13 = var22;
            var13 = _closure1_slot1;
            var24 = _closure1_slot2;
            var4 = 3;
            var4 = var24[var4];
            var13 = var13.bind(var5)(var4);
            var4 = {};
            var15 = _closure1_slot0;
            var14 = 4;
            var14 = var24[var14];
            var18 = var15.bind(var5)(var14);
            var14 = var18.isAndroid;
            var14 = var14.bind(var18)();
            var4['ignoreKeyboard'] = var14;
            var4 = var13.bind(var5)(var4);
            var18 = var4.width;
            _closure2_slot14 = var18;
            var21 = var4.height;
            _closure2_slot15 = var21;
            var13 = 5;
            var4 = var24[var13];
            var14 = var15.bind(var5)(var4);
            var4 = var14.useContextMenuState;
            var4 = var4.bind(var14)();
            _closure2_slot16 = var4;
            var30 = var4.activeIndex;
            _closure2_slot17 = var30;
            var14 = 6;
            var14 = var24[var14];
            var15 = var15.bind(var5)(var14);
            var14 = var15.useFontScale;
            var31 = var14.bind(var15)();
            if(!(var5 === var8)) { _fun0001_ip = 461; continue _fun0001 }
 458:
            var8 = var12;
 461:
            _closure2_slot8 = var8;
            var26 = _closure1_slot0;
            var25 = _closure1_slot2;
            var13 = var25[var13];
            var14 = var26.bind(var5)(var13);
            var13 = var14.useActiveContextMenu;
            var13 = var13.bind(var14)();
            _closure2_slot18 = var13;
            var14 = var25[var27];
            var24 = var26.bind(var5)(var14);
            var15 = var24.useSharedValue;
            var14 = global;
            var33 = var14.Math;
            var32 = var33.max;
            var28 = 7;
            var14 = var25[var28];
            var14 = var26.bind(var5)(var14);
            var34 = var14.CONTEXT_MENU_ITEM_BASE_HEIGHT;
            var14 = var25[var28];
            var14 = var26.bind(var5)(var14);
            var14 = var14.CONTEXT_MENU_ITEM_PADDING;
            var14 = var27 * var14;
            var14 = var34 - var14;
            var34 = var14 * var31;
            var14 = var25[var28];
            var14 = var26.bind(var5)(var14);
            var14 = var14.CONTEXT_MENU_ITEM_PADDING;
            var14 = var27 * var14;
            var31 = var25[var28];
            var31 = var26.bind(var5)(var31);
            var31 = var31.CONTEXT_MENU_ITEM_BASE_HEIGHT;
            var14 = var34 + var14;
            var14 = var32.bind(var33)(var14, var31);
            var24 = var15.bind(var24)(var14);
            _closure2_slot19 = var24;
            var14 = _closure1_slot3;
            var15 = var14.useRef;
            var15 = var15.bind(var14)(var3);
            _closure2_slot20 = var15;
            var32 = var14.useLayoutEffect;
            var31 = new Array(1);
            var31[0] = var3;
            var15 = function() {
                var2 = _closure2_slot20;
                var1 = _closure2_slot11;
                var2['current'] = var1;
                var1 = undefined;
                return var1;
            };
            var15 = var32.bind(var14)(var15, var31);
            var31 = var14.useLayoutEffect;
            var15 = new Array(2);
            var15[0] = var13;
            var15[1] = var4;
            var13 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var3 = _closure2_slot18;
                    var2 = null;
                    if(!(var2 == var3)) { _fun0004_ip = 53; continue _fun0004 }
 13:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 5;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.resetContextMenuState;
                    var1 = _closure2_slot16;
                    var1 = var2.bind(var3)(var1);
 53:
                    var1 = undefined;
                    return var1;
                }
            };
            var13 = var31.bind(var14)(var13, var15);
            var15 = var14.useCallback;
            var13 = new Array(2);
            var13[0] = var30;
            var13[1] = var9;
            var9 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var1 = _closure2_slot6;
                    var2 = null;
                    if(!(var2 != var1)) { _fun0005_ip = 27; continue _fun0005 }
 13:
                    var5 = _closure2_slot6;
                    var4 = undefined;
                    var1 = arg1;
                    var1 = var5.bind(var4)(var1);
 27:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 5;
                    var4 = var4[var1];
                    var1 = undefined;
                    var5 = var5.bind(var1)(var4);
                    var4 = var5.hideContextMenu;
                    var4 = var4.bind(var5)();
                    var5 = _closure2_slot17;
                    var4 = var5.get;
                    var4 = var4.bind(var5)();
                    var5 = -1;
                    if(!(var5 !== var4)) { _fun0005_ip = 111; continue _fun0005 }
 85:
                    var3 = _closure2_slot20;
                    var3 = var3.current;
                    var3 = var3[var4];
                    if(!(var2 != var3)) { _fun0005_ip = 111; continue _fun0005 }
 102:
                    var2 = var3.action;
                    var2 = var2.bind(var3)();
 111:
                    return var1;
                }
            };
            var13 = var15.bind(var14)(var9, var13);
            _closure2_slot21 = var13;
            var15 = var14.useCallback;
            var9 = new Array(1);
            var9[0] = var8;
            var8 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 8;
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
            _closure2_slot22 = var8;
            var15 = var14.useCallback;
            var9 = new Array(8);
            var9[0] = var29;
            var9[1] = var4;
            var9[2] = var3;
            var9[3] = var23;
            var9[4] = var19;
            var9[5] = var13;
            var9[6] = var8;
            var9[7] = var17;
            var8 = function(arg1, arg2, arg3, arg4, arg5, arg6) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var2 = _closure2_slot5;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0006_ip = 23; continue _fun0006 }
 13:
                    var2 = _closure2_slot5;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
 23:
                    var7 = {};
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var1 = 9;
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
                    var6 = _closure2_slot16;
                    var7['state'] = var6;
                    var6 = _closure2_slot11;
                    var7['items'] = var6;
                    var6 = _closure2_slot4;
                    var7['title'] = var6;
                    var6 = _closure2_slot7;
                    var7['keyboardShouldPersistTaps'] = var6;
                    var6 = _closure2_slot21;
                    var7['requestClose'] = var6;
                    var6 = _closure2_slot22;
                    var7['onClose'] = var6;
                    var3 = _closure2_slot12;
                    var7['dividerIndexes'] = var3;
                    var3 = 5;
                    var3 = var5[var3];
                    var6 = var4.bind(var1)(var3);
                    var3 = var6.showContextMenu;
                    var3 = var3.bind(var6)(var7);
                    var3 = 4;
                    var3 = var5[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.isAndroid;
                    var3 = var3.bind(var4)();
                    if(!var3) { _fun0006_ip = 300; continue _fun0006 }
 216:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var2 = 10;
                    var2 = var8[var2];
                    var2 = var7.bind(var1)(var2);
                    var4 = var2.AccessibilityAnnouncer;
                    var3 = var4.announce;
                    var2 = 11;
                    var5 = var8[var2];
                    var5 = var7.bind(var1)(var5);
                    var6 = var5.intl;
                    var5 = var6.string;
                    var2 = var8[var2];
                    var2 = var7.bind(var1)(var2);
                    var2 = var2.t;
                    var2 = var2.ZqK0uL;
                    var2 = var5.bind(var6)(var2);
                    var2 = var3.bind(var4)(var2);
 300:
                    return var1;
                }
            };
            var19 = var15.bind(var14)(var8, var9);
            _closure2_slot23 = var19;
            var15 = var14.useCallback;
            var9 = function B() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var4 = function autoPositionVertical(arg1) {
                        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                            var5 = arg1;
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 7;
                            var2 = var2[var1];
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
                            var1 = var1.CONTEXT_MENU_OFFSET;
                            var1 = {};
                            var2 = _closure3_slot6;
                            if(!var2) { _fun0008_ip = 58; continue _fun0008 }
 46:
                            var4 = _closure3_slot5;
                            var2 = _closure3_slot1;
                            if(!(!(var4 < var2))) { _fun0008_ip = 79; continue _fun0008 }
 58:
                            var4 = _closure3_slot6;
                            var2 = 'below';
                            if(!var4) { _fun0008_ip = 77; continue _fun0008 }
 71:
                            var2 = 'above';
 77:
                            _fun0008_ip = 109; continue _fun0008;
 79:
                            var6 = _closure3_slot4;
                            var4 = _closure3_slot5;
                            var6 = var6 > var4;
                            var4 = 'above';
                            if(!var6) { _fun0008_ip = 106; continue _fun0008 }
 100:
                            var4 = 'below';
 106:
                            var2 = var4;
 109:
                            var4 = 'above';
                            if(!(var4 !== var2)) { _fun0008_ip = 125; continue _fun0008 }
 119:
                            var4 = _closure3_slot2;
                            _fun0008_ip = 129; continue _fun0008;
 125:
                            var4 = _closure3_slot3;
 129:
                            var3 = null;
                            var6 = var3 != var5;
                            var3 = 0;
                            if(!var6) { _fun0008_ip = 143; continue _fun0008 }
 140:
                            var3 = var5;
 143:
                            var3 = var4 + var3;
                            var1['y'] = var3;
                            var1['positionY'] = var2;
                            return var1;
                        }
                    };
                    var3 = function autoPositionHorizontal() {
                        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                            var3 = _closure3_slot0;
                            var8 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var2 = 7;
                            var4 = var9[var2];
                            var7 = undefined;
                            var4 = var8.bind(var7)(var4);
                            var4 = var4.CONTEXT_MENU_EDGE_OFFSET;
                            var5 = var3 - var4;
                            var6 = _closure2_slot14;
                            var4 = var9[var2];
                            var4 = var8.bind(var7)(var4);
                            var4 = var4.CONTEXT_MENU_EDGE_OFFSET;
                            var4 = var6 - var4;
                            var6 = _closure3_slot0;
                            var2 = var9[var2];
                            var2 = var8.bind(var7)(var2);
                            var2 = var2.CONTEXT_MENU_MIN_WIDTH;
                            var2 = var6 + var2;
                            var4 = var4 - var2;
                            var2 = 'left';
                            if(!(var5 > var4)) { _fun0009_ip = 111; continue _fun0009 }
 103:
                            var3 = _closure3_slot7;
                            var2 = 'right';
 111:
                            var1 = {};
                            var1['x'] = var3;
                            var1['positionX'] = var2;
                            return var1;
                        }
                    };
                    var5 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var11 = 2;
                    var2 = var1[var11];
                    var1 = undefined;
                    var8 = var5.bind(var1)(var2);
                    var7 = var8.measure;
                    var5 = _closure2_slot10;
                    var5 = var7.bind(var8)(var5);
                    var12 = null;
                    if(!(var12 != var5)) { _fun0007_ip = 760; continue _fun0007 }
 64:
                    var10 = var5.pageX;
                    var _closure3_slot0 = var10;
                    var18 = var5.pageY;
                    var14 = var5.height;
                    var8 = var5.width;
                    var5 = _closure2_slot4;
                    if(!(var12 == var5)) { _fun0007_ip = 104; continue _fun0007 }
 98:
                    var7 = _closure2_slot13;
                    _fun0007_ip = 115; continue _fun0007;
 104:
                    var13 = _closure2_slot13;
                    var5 = 1;
                    var7 = var13 + var5;
 115:
                    var5 = _closure2_slot4;
                    var5 = var12 != var5;
                    var12 = 0;
                    if(!var5) { _fun0007_ip = 131; continue _fun0007 }
 128:
                    var12 = 1;
 131:
                    var5 = _closure2_slot12;
                    var5 = var5.length;
                    var13 = var12 + var5;
                    var12 = _closure2_slot19;
                    var5 = var12.get;
                    var5 = var5.bind(var12)();
                    var7 = var5 * var7;
                    var19 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var12 = 7;
                    var5 = var15[var12];
                    var5 = var19.bind(var1)(var5);
                    var5 = var5.CONTEXT_MENU_DIVIDER_HEIGHT;
                    var5 = var5 * var13;
                    var7 = var7 + var5;
                    var _closure3_slot1 = var7;
                    var13 = var18 + var14;
                    var5 = var15[var12];
                    var5 = var19.bind(var1)(var5);
                    var5 = var5.CONTEXT_MENU_OFFSET;
                    var13 = var13 + var5;
                    var _closure3_slot2 = var13;
                    var5 = _closure2_slot15;
                    var16 = var5 - var18;
                    var5 = var15[var12];
                    var5 = var19.bind(var1)(var5);
                    var5 = var5.CONTEXT_MENU_OFFSET;
                    var5 = var16 + var5;
                    var _closure3_slot3 = var5;
                    var16 = _closure2_slot15;
                    var17 = var16 - var13;
                    var16 = var15[var12];
                    var16 = var19.bind(var1)(var16);
                    var16 = var16.CONTEXT_MENU_EDGE_OFFSET;
                    var16 = var17 - var16;
                    var _closure3_slot4 = var16;
                    var17 = var15[var12];
                    var17 = var19.bind(var1)(var17);
                    var17 = var17.CONTEXT_MENU_EDGE_OFFSET;
                    var17 = var18 - var17;
                    var _closure3_slot5 = var17;
                    var16 = var16 < var7;
                    var _closure3_slot6 = var16;
                    var16 = global;
                    var18 = var16.Math;
                    var17 = var18.max;
                    var16 = _closure2_slot14;
                    var16 = var16 - var10;
                    var16 = var16 - var8;
                    var15 = var15[var12];
                    var15 = var19.bind(var1)(var15);
                    var15 = var15.CONTEXT_MENU_EDGE_OFFSET;
                    var15 = var17.bind(var18)(var16, var15);
                    var _closure3_slot7 = var15;
                    var16 = _closure2_slot3;
                    var6 = 'auto';
                    if(!(var6 !== var16)) { _fun0007_ip = 684; continue _fun0007 }
 384:
                    var16 = _closure2_slot3;
                    var6 = 'above';
                    if(!(var6 !== var16)) { _fun0007_ip = 604; continue _fun0007 }
 401:
                    var17 = _closure2_slot3;
                    var16 = 'below';
                    if(!(var16 !== var17)) { _fun0007_ip = 604; continue _fun0007 }
 418:
                    var18 = _closure2_slot3;
                    var17 = 'left';
                    var16 = var17;
                    if(!(var16 === var18)) { _fun0007_ip = 437; continue _fun0007 }
 433:
                    var16 = 'right';
 437:
                    if(!(var17 !== var16)) { _fun0007_ip = 474; continue _fun0007 }
 441:
                    var17 = var15 + var8;
                    var18 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var15 = var15[var12];
                    var15 = var18.bind(var1)(var15);
                    var15 = var15.CONTEXT_MENU_OFFSET;
                    var15 = var17 + var15;
                    _fun0007_ip = 505; continue _fun0007;
 474:
                    var17 = var10 + var8;
                    var18 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var10 = var10[var12];
                    var10 = var18.bind(var1)(var10);
                    var10 = var10.CONTEXT_MENU_OFFSET;
                    var15 = var17 + var10;
 505:
                    var17 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var12 = var10[var12];
                    var12 = var17.bind(var1)(var12);
                    var12 = var12.CONTEXT_MENU_OFFSET;
                    var14 = var12 + var14;
                    var12 = -1;
                    var12 = var12 * var14;
                    var12 = var4.bind(var1)(var12);
                    var24 = var12.y;
                    var22 = var12.positionY;
                    var10 = var10[var11];
                    var18 = var17.bind(var1)(var10);
                    var17 = var18.runOnJS;
                    var10 = _closure2_slot23;
                    var10 = var17.bind(var18)(var10);
                    var26 = undefined;
                    var25 = var15;
                    var23 = var16;
                    var21 = var7;
                    var20 = var8;
                    var10 = var26[var10](var25, var24, var23, var22, var21, var20, var19);
                    _fun0007_ip = 760; continue _fun0007;
 604:
                    var12 = _closure2_slot3;
                    if(!(var6 === var12)) { _fun0007_ip = 615; continue _fun0007 }
 612:
                    var13 = var5;
 615:
                    var5 = var3.bind(var1)();
                    var10 = var5.x;
                    var23 = var5.positionX;
                    var14 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var5 = var5[var11];
                    var15 = var14.bind(var1)(var5);
                    var14 = var15.runOnJS;
                    var5 = _closure2_slot23;
                    var5 = var14.bind(var15)(var5);
                    var26 = undefined;
                    var25 = var10;
                    var24 = var13;
                    var22 = var12;
                    var21 = var7;
                    var20 = var8;
                    var5 = var26[var5](var25, var24, var23, var22, var21, var20, var19);
                    _fun0007_ip = 760; continue _fun0007;
 684:
                    var4 = var4.bind(var1)();
                    var24 = var4.y;
                    var22 = var4.positionY;
                    var3 = var3.bind(var1)();
                    var4 = var3.x;
                    var23 = var3.positionX;
                    var10 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var9 = var9[var11];
                    var10 = var10.bind(var1)(var9);
                    var9 = var10.runOnJS;
                    var2 = _closure2_slot23;
                    var2 = var9.bind(var10)(var2);
                    var26 = undefined;
                    var25 = var4;
                    var21 = var7;
                    var20 = var8;
                    var2 = var26[var2](var25, var24, var23, var22, var21, var20, var19);
 760:
                    return var1;
                }
            };
            var8 = {};
            var29 = var25[var27];
            var29 = var26.bind(var5)(var29);
            var29 = var29.measure;
            var8['measure'] = var29;
            var8['buttonRef'] = var12;
            var8['title'] = var23;
            var8['itemCount'] = var22;
            var8['dividerIndexes'] = var17;
            var8['approximateItemHeight'] = var24;
            var29 = var25[var28];
            var29 = var26.bind(var5)(var29);
            var29 = var29.CONTEXT_MENU_DIVIDER_HEIGHT;
            var8['CONTEXT_MENU_DIVIDER_HEIGHT'] = var29;
            var29 = var25[var28];
            var29 = var26.bind(var5)(var29);
            var29 = var29.CONTEXT_MENU_OFFSET;
            var8['CONTEXT_MENU_OFFSET'] = var29;
            var8['screenHeight'] = var21;
            var29 = var25[var28];
            var29 = var26.bind(var5)(var29);
            var29 = var29.CONTEXT_MENU_EDGE_OFFSET;
            var8['CONTEXT_MENU_EDGE_OFFSET'] = var29;
            var8['screenWidth'] = var18;
            var28 = var25[var28];
            var28 = var26.bind(var5)(var28);
            var28 = var28.CONTEXT_MENU_MIN_WIDTH;
            var8['CONTEXT_MENU_MIN_WIDTH'] = var28;
            var8['menuAlign'] = var20;
            var25 = var25[var27];
            var25 = var26.bind(var5)(var25);
            var25 = var25.runOnJS;
            var8['runOnJS'] = var25;
            var8['showMenu'] = var19;
            var9['__closure'] = var8;
            var8 = 3821185714246.0;
            var9['__workletHash'] = var8;
            var8 = _closure1_slot6;
            var9['__initData'] = var8;
            var8 = new Array(9);
            var8[0] = var12;
            var8[1] = var24;
            var8[2] = var23;
            var8[3] = var22;
            var8[4] = var21;
            var8[5] = var20;
            var8[6] = var19;
            var8[7] = var18;
            var8[8] = var17;
            var15 = var15.bind(var14)(var9, var8);
            _closure2_slot24 = var15;
            var9 = var14.useMemo;
            var8 = new Array(6);
            var8[0] = var11;
            var8[1] = var16;
            var8[2] = var13;
            var8[3] = var10;
            var8[4] = var4;
            var8[5] = var15;
            var4 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    var1 = function() {
                        var1 = function onPanGestureEnd() {
                            var1 = _closure2_slot16;
                            var3 = var1.activeIndex;
                            var1 = var3.get;
                            var4 = var1.bind(var3)();
                            var5 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 2;
                            var3 = var3[var1];
                            var1 = undefined;
                            var5 = var5.bind(var1)(var3);
                            var3 = var5.runOnJS;
                            var2 = _closure2_slot21;
                            var3 = var3.bind(var5)(var2);
                            var2 = -1;
                            var2 = var2 === var4;
                            var2 = var3.bind(var1)(var2);
                            return var1;
                        };
                        var3 = {};
                        var2 = _closure2_slot16;
                        var3['state'] = var2;
                        var7 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var5 = 2;
                        var6 = var6[var5];
                        var5 = undefined;
                        var5 = var7.bind(var5)(var6);
                        var5 = var5.runOnJS;
                        var3['runOnJS'] = var5;
                        var4 = _closure2_slot21;
                        var3['requestClose'] = var4;
                        var1['__closure'] = var3;
                        var3 = 15045613912826.0;
                        var1['__workletHash'] = var3;
                        var2 = _closure1_slot7;
                        var1['__initData'] = var2;
                        return var1;
                    };
                    var5 = undefined;
                    var8 = var1.bind(var5)();
                    var1 = _closure2_slot1;
                    if(var1) { _fun0010_ip = 391; continue _fun0010 }
 29:
                    var1 = _closure2_slot2;
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var2 = 12;
                    var2 = var13[var2];
                    var2 = var12.bind(var5)(var2);
                    var4 = var2.Gesture;
                    if(var1) { _fun0010_ip = 306; continue _fun0010 }
 65:
                    var1 = var4.Pan;
                    var6 = var1.bind(var4)();
                    var2 = var6.enabled;
                    var1 = _closure2_slot9;
                    var6 = var2.bind(var6)(var1);
                    var2 = var6.onBegin;
                    var1 = function t() {
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var1 = 2;
                        var2 = var5[var1];
                        var1 = undefined;
                        var7 = var4.bind(var1)(var2);
                        var6 = var7.runOnJS;
                        var2 = 13;
                        var3 = var5[var2];
                        var3 = var4.bind(var1)(var3);
                        var3 = var3.triggerHapticFeedback;
                        var3 = var6.bind(var7)(var3);
                        var2 = var5[var2];
                        var2 = var4.bind(var1)(var2);
                        var2 = var2.HapticFeedbackTypes;
                        var2 = var2.IMPACT_MEDIUM;
                        var2 = var3.bind(var1)(var2);
                        var2 = _closure2_slot24;
                        var2 = var2.bind(var1)();
                        return var1;
                    };
                    var7 = {};
                    var10 = 2;
                    var10 = var13[var10];
                    var10 = var12.bind(var5)(var10);
                    var10 = var10.runOnJS;
                    var7['runOnJS'] = var10;
                    var10 = 13;
                    var14 = var13[var10];
                    var14 = var12.bind(var5)(var14);
                    var14 = var14.triggerHapticFeedback;
                    var7['triggerHapticFeedback'] = var14;
                    var10 = var13[var10];
                    var10 = var12.bind(var5)(var10);
                    var10 = var10.HapticFeedbackTypes;
                    var7['HapticFeedbackTypes'] = var10;
                    var10 = _closure2_slot24;
                    var7['measureButtonAndShowMenu'] = var10;
                    var1['__closure'] = var7;
                    var7 = 3614426364216.0;
                    var1['__workletHash'] = var7;
                    var7 = _closure1_slot12;
                    var1['__initData'] = var7;
                    var6 = var2.bind(var6)(var1);
                    var2 = var6.onUpdate;
                    var1 = function e(arg1) {
                        var2 = arg1;
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 5;
                        var3 = var3[var1];
                        var1 = undefined;
                        var6 = var4.bind(var1)(var3);
                        var5 = var6.updateContextMenuState;
                        var4 = var2.absoluteX;
                        var3 = var2.absoluteY;
                        var2 = _closure2_slot16;
                        var2 = var5.bind(var6)(var4, var3, var2);
                        return var1;
                    };
                    var7 = {};
                    var10 = 5;
                    var10 = var13[var10];
                    var10 = var12.bind(var5)(var10);
                    var10 = var10.updateContextMenuState;
                    var7['updateContextMenuState'] = var10;
                    var10 = _closure2_slot16;
                    var7['state'] = var10;
                    var1['__closure'] = var7;
                    var7 = 8243568905832.0;
                    var1['__workletHash'] = var7;
                    var7 = _closure1_slot11;
                    var1['__initData'] = var7;
                    var2 = var2.bind(var6)(var1);
                    var1 = var2.onEnd;
                    var1 = var1.bind(var2)(var8);
                    _fun0010_ip = 389; continue _fun0010;
 306:
                    var2 = var4.Tap;
                    var6 = var2.bind(var4)();
                    var4 = var6.enabled;
                    var2 = _closure2_slot9;
                    var6 = var4.bind(var6)(var2);
                    var4 = var6.onStart;
                    var2 = function n() {
                        var2 = _closure2_slot24;
                        var1 = undefined;
                        var2 = var2.bind(var1)();
                        return var1;
                    };
                    var7 = {};
                    var10 = _closure2_slot24;
                    var7['measureButtonAndShowMenu'] = var10;
                    var2['__closure'] = var7;
                    var7 = 806186984867.0;
                    var2['__workletHash'] = var7;
                    var7 = _closure1_slot10;
                    var2['__initData'] = var7;
                    var1 = var4.bind(var6)(var2);
 389:
                    return var1;
 391:
                    var2 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 12;
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
                        var1 = 5;
                        var3 = var3[var1];
                        var1 = undefined;
                        var6 = var4.bind(var1)(var3);
                        var5 = var6.updateContextMenuState;
                        var4 = var2.absoluteX;
                        var3 = var2.absoluteY;
                        var2 = _closure2_slot16;
                        var2 = var5.bind(var6)(var4, var3, var2);
                        return var1;
                    };
                    var13 = {};
                    var14 = 5;
                    var14 = var6[var14];
                    var14 = var2.bind(var5)(var14);
                    var14 = var14.updateContextMenuState;
                    var13['updateContextMenuState'] = var14;
                    var14 = _closure2_slot16;
                    var13['state'] = var14;
                    var4['__closure'] = var13;
                    var13 = 16675037579085.0;
                    var4['__workletHash'] = var13;
                    var13 = _closure1_slot8;
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
                    var3 = function o() {
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var1 = 2;
                        var2 = var5[var1];
                        var1 = undefined;
                        var7 = var4.bind(var1)(var2);
                        var6 = var7.runOnJS;
                        var2 = 13;
                        var3 = var5[var2];
                        var3 = var4.bind(var1)(var3);
                        var3 = var3.triggerHapticFeedback;
                        var3 = var6.bind(var7)(var3);
                        var2 = var5[var2];
                        var2 = var4.bind(var1)(var2);
                        var2 = var2.HapticFeedbackTypes;
                        var2 = var2.IMPACT_MEDIUM;
                        var2 = var3.bind(var1)(var2);
                        var2 = _closure2_slot24;
                        var2 = var2.bind(var1)();
                        return var1;
                    };
                    var10 = {};
                    var12 = 2;
                    var12 = var6[var12];
                    var12 = var2.bind(var5)(var12);
                    var12 = var12.runOnJS;
                    var10['runOnJS'] = var12;
                    var12 = 13;
                    var13 = var6[var12];
                    var13 = var2.bind(var5)(var13);
                    var13 = var13.triggerHapticFeedback;
                    var10['triggerHapticFeedback'] = var13;
                    var12 = var6[var12];
                    var12 = var2.bind(var5)(var12);
                    var12 = var12.HapticFeedbackTypes;
                    var10['HapticFeedbackTypes'] = var12;
                    var11 = _closure2_slot24;
                    var10['measureButtonAndShowMenu'] = var11;
                    var3['__closure'] = var10;
                    var10 = 15422046945883.0;
                    var3['__workletHash'] = var10;
                    var9 = _closure1_slot9;
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
                var3 = _closure2_slot11;
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
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                    var2 = arg1;
                    var _closure3_slot0 = var2;
                    var3 = _closure2_slot11;
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
                    if(var1) { _fun0011_ip = 49; continue _fun0011 }
 40:
                    var3 = var2.action;
                    var1 = var4 == var3;
 49:
                    if(var1) { _fun0011_ip = 61; continue _fun0011 }
 52:
                    var1 = var2.action;
                    var1 = var1.bind(var2)();
 61:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var10.bind(var14)(var3, var9);
            var13 = var14.useCallback;
            var10 = new Array(1);
            var10[0] = var15;
            var9 = function() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 4;
                    var3 = var3[var1];
                    var1 = undefined;
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.isAndroid;
                    var3 = var3.bind(var4)();
                    if(!var3) { _fun0012_ip = 67; continue _fun0012 }
 37:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 14;
                    var4 = var6[var4];
                    var5 = var5.bind(var1)(var4);
                    var4 = var5.getIsScreenReaderEnabled;
                    var3 = var4.bind(var5)();
 67:
                    if(!var3) { _fun0012_ip = 112; continue _fun0012 }
 70:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 2;
                    var2 = var4[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.runOnUI;
                    var2 = _closure2_slot24;
                    var2 = var3.bind(var4)(var2);
                    var2 = var2.bind(var1)();
 112:
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
                var1 = 2;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.runOnUI;
                var2 = _closure2_slot24;
                var2 = var3.bind(var4)(var2);
                var2 = var2.bind(var1)();
                return var1;
            };
            var10 = var13.bind(var14)(var6, var10);
            var6 = {};
            var6['ref'] = var12;
            var6['onPress'] = var9;
            var9 = undefined;
            if(!var11) { _fun0001_ip = 1235; continue _fun0001 }
 1227:
            var9 = undefined;
            if(!var1) { _fun0001_ip = 1235; continue _fun0001 }
 1232:
            var9 = var10;
 1235:
            var6['onLongPress'] = var9;
            var6['accessibilityActions'] = var4;
            var6['onAccessibilityAction'] = var3;
            var4 = _closure1_slot5;
            if(var1) { _fun0001_ip = 1307; continue _fun0001 }
 1257:
            var3 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 12;
            var1 = var9[var1];
            var1 = var3.bind(var5)(var1);
            var3 = var1.GestureDetector;
            var1 = {};
            var1['gesture'] = var8;
            var8 = var7.bind(var5)(var6);
            var1['children'] = var8;
            var1 = var4.bind(var5)(var3, var1);
            _fun0001_ip = 1328; continue _fun0001;
 1307:
            var3 = _closure1_slot4;
            var2 = {};
            var6 = var7.bind(var5)(var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 1328:
            return var1;
        }
    };
    var3['ContextMenu'] = var2;
    return var1;
})();