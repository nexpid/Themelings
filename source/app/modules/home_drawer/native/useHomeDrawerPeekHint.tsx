// app/modules/home_drawer/native/useHomeDrawerPeekHint.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var8 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ME;
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ContentDismissActionType;
    var _closure1_slot7 = var4;
    var4 = 6;
    var7 = var6[var4];
    var7 = var5.bind(var1)(var7);
    var8 = var7.Easing;
    var7 = var8.inOut;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Easing;
    var4 = var4.cubic;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot8 = var4;
    var4 = new Array(0);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.DismissibleContent;
    var7 = var4.HOME_DRAWER_SWIPE_PEEK_NUX;
    var4 = new Array(1);
    var4[0] = var7;
    var _closure1_slot10 = var4;
    var4 = {};
    var7 = 'function useHomeDrawerPeekHintTsx1(){const{gestureState,panelX,PEEK_HINT_DRAWER_DRAG_THRESHOLD}=this.__closure;return gestureState.get().active&&panelX.get()>PEEK_HINT_DRAWER_DRAG_THRESHOLD;}';
    var4['code'] = var7;
    var _closure1_slot11 = var4;
    var4 = {};
    var7 = 'function useHomeDrawerPeekHintTsx2(isDragged,wasDragged){const{isPeekGranted,runOnJS,handleDrawerDragged}=this.__closure;if(!isPeekGranted||wasDragged==null)return;if(isDragged&&!wasDragged){runOnJS(handleDrawerDragged)();}}';
    var4['code'] = var7;
    var _closure1_slot12 = var4;
    var4 = 17;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/home_drawer/native/useHomeDrawerPeekHint.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = 40;
    var3['PEEK_HINT_DISTANCE'] = var4;
    var2 = function useHomeDrawerPeekHint(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var3 = arg2;
            var _closure2_slot0 = var3;
            var5 = _closure1_slot5;
            var1 = undefined;
            var5 = var5.bind(var1)();
            var14 = var5.panelX;
            var _closure2_slot1 = var14;
            var15 = var5.gestureState;
            var _closure2_slot2 = var15;
            var17 = var5.lastInteractionAt;
            var _closure2_slot3 = var17;
            var8 = var5.isPanelTouchActive;
            var _closure2_slot4 = var8;
            var18 = var5.noteInteraction;
            var _closure2_slot5 = var18;
            var22 = _closure1_slot0;
            var7 = _closure1_slot1;
            var13 = 8;
            var5 = var7[var13];
            var9 = var22.bind(var1)(var5);
            var5 = var9.useIsFocused;
            var16 = var5.bind(var9)();
            var5 = 9;
            var5 = var7[var5];
            var9 = var22.bind(var1)(var5);
            var5 = var9.useDrawerOpen;
            var5 = var5.bind(var9)(var4);
            var _closure2_slot6 = var5;
            var9 = 10;
            var9 = var7[var9];
            var12 = var22.bind(var1)(var9);
            var11 = var12.useStateFromStores;
            var9 = _closure1_slot4;
            var10 = new Array(1);
            var10[0] = var9;
            var9 = function() {
                var1 = _closure1_slot4;
                var1 = var1.useReducedMotion;
                return var1;
            };
            var11 = var11.bind(var12)(var10, var9);
            var9 = 11;
            var9 = var7[var9];
            var10 = var22.bind(var1)(var9);
            var9 = var10.useGuildsRouteGuildAndChannelId;
            var12 = var9.bind(var10)();
            var10 = _closure1_slot2;
            var9 = 1;
            var12 = var10.bind(var1)(var12, var9);
            var10 = 0;
            var19 = var12[var10];
            var12 = 12;
            var12 = var7[var12];
            var21 = var22.bind(var1)(var12);
            var20 = var21.UNSAFE_useIsDismissibleContentDismissed;
            var12 = 7;
            var7 = var7[var12];
            var7 = var22.bind(var1)(var7);
            var7 = var7.DismissibleContent;
            var7 = var7.HOME_DRAWER_SWIPE_PEEK_NUX;
            var7 = var20.bind(var21)(var7);
            var7 = !var7;
            if(!var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var16;
case 2:
            if(!var4) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var16 = null;
            var4 = var16 != var19;
case 4:
            if(!var4) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var16 = _closure1_slot6;
            var4 = var19 !== var16;
case 6:
            if(!var4) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var4 = !var5;
case 8:
            if(!var4) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var4 = !var11;
case 10:
            if(!var4) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var4 = var7;
case 12:
            var _closure2_slot7 = var4;
            var11 = _closure1_slot3;
            var7 = var11.useRef;
            var20 = false;
            var7 = var7.bind(var11)(var20);
            var _closure2_slot8 = var7;
            var7 = var11.useState;
            var11 = var7.bind(var11)(var20);
            var7 = _closure1_slot2;
            var16 = 2;
            var7 = var7.bind(var1)(var11, var16);
            var19 = var7[var10];
            var _closure2_slot9 = var19;
            var7 = var7[var9];
            var _closure2_slot10 = var7;
            var11 = var19;
            if(!var11) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var11 = !var4;
case 14:
            if(!var11) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var7 = var7.bind(var1)(var20);
case 16:
            var11 = _closure1_slot0;
            var21 = _closure1_slot1;
            var7 = 13;
            var7 = var21[var7];
            var22 = var11.bind(var1)(var7);
            var21 = var22.useSelectedDismissibleContent;
            if(!var19) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            if(var4) { _fun0001_ip = 20; continue _fun0001 }
case 18:
            var11 = _closure1_slot9;
            _fun0001_ip = 21; continue _fun0001;
case 20:
            var11 = _closure1_slot10;
case 21:
            var7 = true;
            var11 = var21.bind(var22)(var11, var1, var7);
            var7 = _closure1_slot2;
            var7 = var7.bind(var1)(var11, var16);
            var16 = var7[var10];
            var9 = var7[var9];
            var _closure2_slot11 = var9;
            var7 = _closure1_slot3;
            var10 = var7.useRef;
            var11 = null;
            var10 = var10.bind(var7)(var11);
            var _closure2_slot12 = var10;
            var10 = var7.useRef;
            var10 = var10.bind(var7)(var11);
            var _closure2_slot13 = var10;
            var10 = var7.useRef;
            var10 = var10.bind(var7)(var20);
            var _closure2_slot14 = var10;
            var10 = var7.useRef;
            var10 = var10.bind(var7)(var11);
            var _closure2_slot15 = var10;
            var20 = var7.useCallback;
            var11 = new Array(1);
            var11[0] = var3;
            var10 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure2_slot12;
                    var1 = var1.current;
                    var3 = null;
                    if(!(var3 != var1)) { _fun0002_ip = 22; continue _fun0002 }
case 23:
                    var1 = global;
                    var5 = var1.clearTimeout;
                    var1 = _closure2_slot12;
                    var4 = var1.current;
                    var1 = undefined;
                    var1 = var5.bind(var1)(var4);
                    var1 = _closure2_slot12;
                    var1['current'] = var3;
case 22:
                    var3 = _closure2_slot14;
                    var1 = true;
                    var3['current'] = var1;
                    var5 = _closure2_slot0;
                    var4 = var5.set;
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var1 = 14;
                    var6 = var6[var1];
                    var1 = undefined;
                    var8 = var7.bind(var1)(var6);
                    var7 = var8.withTiming;
                    var6 = {};
                    var9 = 1500;
                    var6['duration'] = var9;
                    var3 = _closure1_slot8;
                    var6['easing'] = var3;
                    var3 = 40;
                    var3 = var7.bind(var8)(var3, var6);
                    var3 = var4.bind(var5)(var3);
                    var3 = _closure2_slot13;
                    var2 = global;
                    var5 = var2.setTimeout;
                    var4 = function() {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                            var1 = _closure2_slot13;
                            var6 = null;
                            var1['current'] = var6;
                            var1 = _closure2_slot14;
                            var3 = false;
                            var1['current'] = var3;
                            var8 = _closure2_slot0;
                            var7 = var8.set;
                            var9 = _closure1_slot0;
                            var12 = _closure1_slot1;
                            var1 = 15;
                            var5 = var12[var1];
                            var1 = undefined;
                            var11 = var9.bind(var1)(var5);
                            var10 = var11.withSpring;
                            var5 = 16;
                            var5 = var12[var5];
                            var5 = var9.bind(var1)(var5);
                            var9 = var5.HOME_DRAWER_FLING_PHYSICS;
                            var5 = 0;
                            var5 = var10.bind(var11)(var5, var9);
                            var5 = var7.bind(var8)(var5);
                            var5 = _closure2_slot15;
                            var5 = var5.current;
                            if(!(var6 != var5)) { _fun0003_ip = 24; continue _fun0003 }
case 25:
                            var6 = _closure2_slot15;
                            var5 = var6.current;
                            var4 = _closure1_slot7;
                            var4 = var4.AUTO_DISMISS;
                            var4 = var5.bind(var6)(var4);
case 24:
                            var2 = _closure2_slot10;
                            var2 = var2.bind(var1)(var3);
                            return var1;
                        }
                    };
                    var2 = 2500;
                    var2 = var5.bind(var1)(var4, var2);
                    var3['current'] = var2;
                    return var1;
                }
            };
            var21 = var20.bind(var7)(var10, var11);
            var _closure2_slot16 = var21;
            var10 = _closure1_slot0;
            var11 = _closure1_slot1;
            var12 = var11[var12];
            var12 = var10.bind(var1)(var12);
            var12 = var12.DismissibleContent;
            var12 = var12.HOME_DRAWER_SWIPE_PEEK_NUX;
            var12 = var16 === var12;
            var _closure2_slot17 = var12;
            var20 = var7.useEffect;
            var16 = new Array(3);
            var16[0] = var12;
            var16[1] = var21;
            var16[2] = var9;
            var9 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var2 = _closure2_slot17;
                    if(!var2) { _fun0004_ip = 26; continue _fun0004 }
case 27:
                    var3 = _closure2_slot14;
                    var3 = var3.current;
                    var2 = !var3;
case 26:
                    if(!var2) { _fun0004_ip = 28; continue _fun0004 }
case 29:
                    var3 = _closure2_slot15;
                    var2 = _closure2_slot11;
                    var3['current'] = var2;
                    var2 = _closure2_slot16;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
case 28:
                    var1 = undefined;
                    return var1;
                }
            };
            var9 = var20.bind(var7)(var9, var16);
            var16 = var7.useCallback;
            var9 = new Array(1);
            var9[0] = var3;
            var3 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var2 = _closure2_slot12;
                    var2 = var2.current;
                    var3 = null;
                    if(!(var3 != var2)) { _fun0005_ip = 22; continue _fun0005 }
case 23:
                    var2 = global;
                    var5 = var2.clearTimeout;
                    var2 = _closure2_slot12;
                    var4 = var2.current;
                    var2 = undefined;
                    var2 = var5.bind(var2)(var4);
                    var2 = _closure2_slot12;
                    var2['current'] = var3;
case 22:
                    var2 = _closure2_slot13;
                    var2 = var2.current;
                    if(!(var3 != var2)) { _fun0005_ip = 30; continue _fun0005 }
case 31:
                    var2 = global;
                    var5 = var2.clearTimeout;
                    var2 = _closure2_slot13;
                    var4 = var2.current;
                    var2 = undefined;
                    var2 = var5.bind(var2)(var4);
                    var2 = _closure2_slot13;
                    var2['current'] = var3;
case 30:
                    var2 = _closure2_slot14;
                    var2 = var2.current;
                    if(!var2) { _fun0005_ip = 32; continue _fun0005 }
case 33:
                    var3 = _closure2_slot14;
                    var2 = false;
                    var3['current'] = var2;
                    var3 = _closure2_slot0;
                    var2 = var3.set;
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var1 = 15;
                    var1 = var8[var1];
                    var4 = undefined;
                    var6 = var7.bind(var4)(var1);
                    var5 = var6.withSpring;
                    var1 = 16;
                    var1 = var8[var1];
                    var1 = var7.bind(var4)(var1);
                    var4 = var1.HOME_DRAWER_FLING_PHYSICS;
                    var1 = 0;
                    var1 = var5.bind(var6)(var1, var4);
                    var1 = var2.bind(var3)(var1);
case 32:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var16.bind(var7)(var3, var9);
            var _closure2_slot18 = var3;
            var16 = var7.useEffect;
            var9 = new Array(5);
            var9[0] = var4;
            var9[1] = var19;
            var9[2] = var18;
            var9[3] = var17;
            var9[4] = var8;
            var8 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var3 = _closure2_slot7;
                    if(!var3) { _fun0006_ip = 34; continue _fun0006 }
case 35:
                    var3 = _closure2_slot9;
                    if(var3) { _fun0006_ip = 34; continue _fun0006 }
case 36:
                    var3 = _closure2_slot8;
                    var3 = var3.current;
                    if(var3) { _fun0006_ip = 34; continue _fun0006 }
case 37:
                    var3 = _closure2_slot5;
                    var6 = undefined;
                    var3 = var3.bind(var6)();
                    var5 = function checkIdle() {
                        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                            var3 = _closure2_slot12;
                            var1 = null;
                            var3['current'] = var1;
                            var3 = global;
                            var4 = var3.Date;
                            var1 = var4.now;
                            var4 = var1.bind(var4)();
                            var1 = _closure2_slot3;
                            var1 = var1.current;
                            var1 = var4 - var1;
                            var5 = 2000;
                            var1 = var5 - var1;
                            var6 = _closure2_slot4;
                            var4 = var6.get;
                            var4 = var4.bind(var6)();
                            if(var4) { _fun0007_ip = 38; continue _fun0007 }
case 39:
                            var4 = 0;
                            if(!(!(var1 > var4))) { _fun0007_ip = 38; continue _fun0007 }
case 40:
                            var7 = _closure2_slot10;
                            var6 = undefined;
                            var4 = true;
                            var4 = var7.bind(var6)(var4);
                            _fun0007_ip = 41; continue _fun0007;
case 38:
                            var2 = _closure2_slot12;
                            var4 = var3.setTimeout;
                            var3 = _closure3_slot0;
                            var6 = 0;
                            if(!(var1 > var6)) { _fun0007_ip = 42; continue _fun0007 }
case 43:
                            var5 = var1;
case 42:
                            var1 = undefined;
                            var1 = var4.bind(var1)(var3, var5);
                            var2['current'] = var1;
case 41:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var _closure3_slot0 = var5;
                    var3 = _closure2_slot12;
                    var2 = global;
                    var4 = var2.setTimeout;
                    var2 = 2000;
                    var2 = var4.bind(var6)(var5, var2);
                    var3['current'] = var2;
                    var1 = function() {
                        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                            var2 = _closure2_slot12;
                            var3 = var2.current;
                            var2 = null;
                            if(!(var2 != var3)) { _fun0008_ip = 22; continue _fun0008 }
case 23:
                            var3 = global;
                            var5 = var3.clearTimeout;
                            var3 = _closure2_slot12;
                            var4 = var3.current;
                            var3 = undefined;
                            var3 = var5.bind(var3)(var4);
                            var1 = _closure2_slot12;
                            var1['current'] = var2;
case 22:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    return var1;
case 34:
                    var1 = undefined;
                    return var1;
                }
            };
            var8 = var16.bind(var7)(var8, var9);
            var9 = var7.useEffect;
            var8 = new Array(2);
            var8[0] = var5;
            var8[1] = var3;
            var5 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var2 = _closure2_slot6;
                    if(!var2) { _fun0009_ip = 44; continue _fun0009 }
case 27:
                    var3 = _closure2_slot8;
                    var2 = true;
                    var3['current'] = var2;
                    var2 = _closure2_slot18;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
case 44:
                    var1 = undefined;
                    return var1;
                }
            };
            var5 = var9.bind(var7)(var5, var8);
            var8 = var7.useEffect;
            var5 = new Array(2);
            var5[0] = var4;
            var5[1] = var3;
            var4 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var2 = _closure2_slot7;
                    var2 = !var2;
                    if(!var2) { _fun0010_ip = 26; continue _fun0010 }
case 45:
                    var3 = _closure2_slot14;
                    var2 = var3.current;
case 26:
                    if(!var2) { _fun0010_ip = 40; continue _fun0010 }
case 29:
                    var3 = _closure2_slot18;
                    var2 = undefined;
                    var2 = var3.bind(var2)();
                    var2 = _closure2_slot15;
                    var3 = var2.current;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0010_ip = 40; continue _fun0010 }
case 46:
                    var3 = _closure2_slot15;
                    var2 = var3.current;
                    var1 = _closure1_slot7;
                    var1 = var1.AUTO_DISMISS;
                    var1 = var2.bind(var3)(var1);
case 40:
                    var1 = undefined;
                    return var1;
                }
            };
            var4 = var8.bind(var7)(var4, var5);
            var5 = var7.useCallback;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var3 = _closure2_slot18;
                    var1 = undefined;
                    var3 = var3.bind(var1)();
                    var3 = _closure2_slot15;
                    var4 = var3.current;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0011_ip = 47; continue _fun0011 }
case 48:
                    var5 = _closure2_slot15;
                    var4 = var5.current;
                    var3 = _closure1_slot7;
                    var3 = var3.INDIRECT_ACTION;
                    var3 = var4.bind(var5)(var3);
case 47:
                    var3 = _closure2_slot10;
                    var2 = false;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var8 = var5.bind(var7)(var3, var4);
            var _closure2_slot19 = var8;
            var9 = 6;
            var3 = var11[var9];
            var5 = var10.bind(var1)(var3);
            var4 = var5.useAnimatedReaction;
            var3 = function V() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var3 = _closure2_slot2;
                    var1 = var3.get;
                    var1 = var1.bind(var3)();
                    var1 = var1.active;
                    if(!var1) { _fun0012_ip = 49; continue _fun0012 }
case 29:
                    var3 = _closure2_slot1;
                    var2 = var3.get;
                    var3 = var2.bind(var3)();
                    var2 = 8;
                    var1 = var3 > var2;
case 49:
                    return var1;
                }
            };
            var7 = {};
            var7['gestureState'] = var15;
            var7['panelX'] = var14;
            var7['PEEK_HINT_DRAWER_DRAG_THRESHOLD'] = var13;
            var3['__closure'] = var7;
            var7 = 15765003051494.0;
            var3['__workletHash'] = var7;
            var7 = _closure1_slot11;
            var3['__initData'] = var7;
            var2 = function Q(arg1, arg2) {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    var4 = arg1;
                    var3 = arg2;
                    var2 = _closure2_slot17;
                    if(!var2) { _fun0013_ip = 26; continue _fun0013 }
case 50:
                    var5 = null;
                    var2 = var5 != var3;
case 26:
                    if(!var2) { _fun0013_ip = 48; continue _fun0013 }
case 29:
                    var2 = var4;
case 48:
                    if(!var2) { _fun0013_ip = 51; continue _fun0013 }
case 37:
                    var2 = !var3;
case 51:
                    if(!var2) { _fun0013_ip = 52; continue _fun0013 }
case 53:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 6;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.runOnJS;
                    var1 = _closure2_slot19;
                    var1 = var3.bind(var4)(var1);
                    var1 = var1.bind(var2)();
case 52:
                    var1 = undefined;
                    return var1;
                }
            };
            var7 = {};
            var7['isPeekGranted'] = var12;
            var9 = var11[var9];
            var9 = var10.bind(var1)(var9);
            var9 = var9.runOnJS;
            var7['runOnJS'] = var9;
            var7['handleDrawerDragged'] = var8;
            var2['__closure'] = var7;
            var7 = 10054961085184.0;
            var2['__workletHash'] = var7;
            var6 = _closure1_slot12;
            var2['__initData'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        }
    };
    var3['useHomeDrawerPeekHint'] = var2;
    return var1;
})();