// app/modules/voice_panel/native/card/VoicePanelCardView.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var1 = function getCardKey(arg1) {
        var1 = arg1;
        var5 = var1.type;
        var4 = var1.id;
        var1 = global;
        var1 = var1.HermesInternal;
        var3 = var1.concat;
        var2 = '';
        var1 = '-';
        var1 = var3.bind(var2)(var5, var1, var4);
        return var1;
    };
    var _closure1_slot18 = var1;
    var1 = function renderCard(arg1, arg2, arg3, arg4) {
        var5 = _closure1_slot12;
        var2 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 9;
        var1 = var3[var1];
        var4 = undefined;
        var3 = var2.bind(var4)(var1);
        var2 = {};
        var1 = arg2;
        var2['item'] = var1;
        var1 = arg3;
        var2['transitionState'] = var1;
        var1 = arg4;
        var2['cleanUp'] = var1;
        var1 = arg1;
        var1 = var5.bind(var4)(var3, var2, var1);
        return var1;
    };
    var _closure1_slot19 = var1;
    var1 = function CardContentFreezer(arg1) {
        var2 = arg1;
        var5 = var2.children;
        var _closure2_slot0 = var5;
        var2 = function useLazyContentFreeze() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var4 = _closure1_slot0;
                var7 = _closure1_slot2;
                var3 = 16;
                var3 = var7[var3];
                var5 = undefined;
                var4 = var4.bind(var5)(var3);
                var3 = var4.usePIPState;
                var3 = var3.bind(var4)();
                var3 = var3.mode;
                var _closure3_slot0 = var3;
                var8 = _closure1_slot4;
                var6 = var8.useRef;
                var4 = _closure1_slot10;
                var4 = var4.IN_APP;
                var4 = var3 === var4;
                var4 = var6.bind(var8)(var4);
                var _closure3_slot1 = var4;
                var9 = _closure1_slot4;
                var8 = var9.useState;
                var6 = {};
                var9 = var8.bind(var9)(var6);
                var8 = _closure1_slot3;
                var6 = 2;
                var8 = var8.bind(var5)(var9, var6);
                var6 = 1;
                var6 = var8[var6];
                var _closure3_slot2 = var6;
                var9 = _closure1_slot4;
                var8 = var9.useEffect;
                var6 = new Array(1);
                var6[0] = var3;
                var2 = function() {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        var4 = _closure3_slot0;
                        var3 = _closure1_slot10;
                        var3 = var3.IN_APP;
                        if(!(var4 !== var3)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                        var3 = _closure3_slot1;
                        var2 = false;
                        var3['current'] = var2;
                        var2 = undefined;
                        return var2;
case 2:
                        var2 = global;
                        var5 = var2.setTimeout;
                        var4 = undefined;
                        var3 = function() {
                            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                                var2 = _closure3_slot1;
                                var2 = var2.current;
                                if(var2) { _fun0003_ip = 4; continue _fun0003 }
case 5:
                                var3 = _closure3_slot1;
                                var2 = true;
                                var3['current'] = var2;
                                var3 = _closure3_slot2;
                                var2 = undefined;
                                var1 = {};
                                var1 = var3.bind(var2)(var1);
case 4:
                                var1 = undefined;
                                return var1;
                            }
                        };
                        var2 = 700;
                        var2 = var5.bind(var4)(var3, var2);
                        var _closure4_slot0 = var2;
                        var1 = function() {
                            var1 = global;
                            var3 = var1.clearTimeout;
                            var2 = _closure4_slot0;
                            var1 = undefined;
                            var2 = var3.bind(var1)(var2);
                            return var1;
                        };
                        return var1;
                    }
                };
                var2 = var8.bind(var9)(var2, var6);
                var6 = _closure1_slot1;
                var2 = 17;
                var2 = var7[var2];
                var2 = var6.bind(var5)(var2);
                var2 = var2.bind(var5)(var4);
                var1 = _closure1_slot10;
                var1 = var1.IN_APP;
                var1 = var3 === var1;
                if(!var1) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                var1 = var2;
case 6:
                return var1;
            }
        };
        var3 = undefined;
        var6 = var2.bind(var3)();
        var _closure2_slot1 = var6;
        var2 = function useSpacerStyles(arg1) {
            var6 = arg1;
            var _closure3_slot0 = var6;
            var5 = _closure1_slot4;
            var3 = var5.useContext;
            var12 = _closure1_slot1;
            var11 = _closure1_slot2;
            var2 = 12;
            var2 = var11[var2];
            var10 = undefined;
            var2 = var12.bind(var10)(var2);
            var2 = var3.bind(var5)(var2);
            var16 = var2.connected;
            var _closure3_slot1 = var16;
            var18 = var2.controlsSpecs;
            var _closure3_slot2 = var18;
            var17 = var2.safeArea;
            var _closure3_slot3 = var17;
            var15 = var2.contentDimensions;
            var _closure3_slot4 = var15;
            var14 = var2.windowDimensions;
            var _closure3_slot5 = var14;
            var13 = var2.mode;
            var _closure3_slot6 = var13;
            var8 = var2.focused;
            var _closure3_slot7 = var8;
            var7 = var2.wrapperOffset;
            var _closure3_slot8 = var7;
            var9 = _closure1_slot0;
            var2 = 10;
            var2 = var11[var2];
            var3 = var9.bind(var10)(var2);
            var2 = var3.useAnimatedStyle;
            var1 = function o() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var2 = _closure3_slot2;
                    var1 = var2.get;
                    var1 = var1.bind(var2)();
                    var12 = var1.mode;
                    var1 = _closure1_slot9;
                    var5 = var1.HIDDEN;
                    var1 = global;
                    var8 = var1.Math;
                    var6 = var8.max;
                    var3 = _closure3_slot3;
                    var1 = var3.get;
                    var1 = var1.bind(var3)();
                    var2 = var1.bottom;
                    var1 = _closure1_slot11;
                    var15 = var6.bind(var8)(var2, var1);
                    var2 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var1 = 13;
                    var1 = var6[var1];
                    var11 = undefined;
                    var2 = var2.bind(var11)(var1);
                    var1 = var3.get;
                    var1 = var1.bind(var3)();
                    var1 = var2.bind(var11)(var1);
                    var16 = var1.height;
                    var1 = var1.paddingTop;
                    var3 = _closure3_slot1;
                    var2 = var3.get;
                    var6 = var2.bind(var3)();
                    var3 = 0;
                    var2 = 1;
                    var9 = 0;
                    var10 = var2;
                    var8 = 0;
                    if(!var6) { _fun0004_ip = 8; continue _fun0004 }
case 9:
                    var13 = var3 + var1;
                    var14 = _closure3_slot4;
                    var6 = var14.get;
                    var6 = var6.bind(var14)();
                    var6 = var6.height;
                    var6 = var13 + var6;
                    var6 = var6 + var15;
                    var14 = _closure3_slot5;
                    var13 = var14.get;
                    var13 = var13.bind(var14)();
                    var13 = var13.height;
                    var14 = var6 - var13;
                    var13 = 8;
                    if(!(var14 < var13)) { _fun0004_ip = 10; continue _fun0004 }
case 11:
                    var14 = _closure3_slot5;
                    var13 = var14.get;
                    var13 = var13.bind(var14)();
                    var6 = var13.height;
case 10:
                    var14 = _closure3_slot6;
                    var13 = var14.get;
                    var14 = var13.bind(var14)();
                    var13 = _closure1_slot8;
                    var13 = var13.PIP;
                    var9 = var6;
                    var10 = var2;
                    var8 = 0;
                    if(!(var14 !== var13)) { _fun0004_ip = 8; continue _fun0004 }
case 12:
                    var9 = var6;
                    var10 = var2;
                    var8 = 0;
                    if(!(var12 !== var5)) { _fun0004_ip = 8; continue _fun0004 }
case 13:
                    var12 = _closure3_slot7;
                    var5 = var12.get;
                    var12 = var5.bind(var12)();
                    var5 = null;
                    var5 = var5 == var12;
                    var9 = var6;
                    var10 = var2;
                    var8 = 0;
                    if(!var5) { _fun0004_ip = 8; continue _fun0004 }
case 14:
                    var12 = var6 - var16;
                    var5 = _closure1_slot11;
                    var12 = var12 - var5;
                    var14 = _closure3_slot2;
                    var5 = var14.get;
                    var5 = var5.bind(var14)();
                    var5 = var5.height;
                    var5 = var12 - var5;
                    var13 = var5 - var15;
                    var12 = _closure3_slot5;
                    var5 = var12.get;
                    var5 = var5.bind(var12)();
                    var5 = var5.height;
                    var5 = var5 - var1;
                    var17 = var5 - var15;
                    var5 = var12.get;
                    var5 = var5.bind(var12)();
                    var5 = var5.height;
                    var12 = var5 - var16;
                    var5 = var14.get;
                    var5 = var5.bind(var14)();
                    var5 = var5.height;
                    var5 = var12 - var5;
                    var19 = var5 - var15;
                    var12 = _closure3_slot4;
                    var5 = var12.get;
                    var5 = var5.bind(var12)();
                    var5 = var5.height;
                    if(!(!(var5 > var13))) { _fun0004_ip = 15; continue _fun0004 }
case 16:
                    var14 = _closure3_slot5;
                    var5 = var14.get;
                    var5 = var5.bind(var14)();
                    var12 = var5.width;
                    var5 = 48;
                    var12 = var12 - var5;
                    var5 = var14.get;
                    var5 = var5.bind(var14)();
                    var5 = var5.width;
                    var5 = var12 / var5;
                    _fun0004_ip = 17; continue _fun0004;
case 15:
                    var14 = _closure3_slot4;
                    var12 = var14.get;
                    var12 = var12.bind(var14)();
                    var12 = var12.height;
                    var5 = var13 / var12;
case 17:
                    var14 = _closure3_slot4;
                    var12 = var14.get;
                    var12 = var12.bind(var14)();
                    var12 = var12.height;
                    var12 = var12 < var17;
                    if(!var12) { _fun0004_ip = 18; continue _fun0004 }
case 19:
                    var18 = _closure3_slot4;
                    var14 = var18.get;
                    var14 = var14.bind(var18)();
                    var14 = var14.height;
                    var12 = var14 > var19;
case 18:
                    var14 = var16;
                    if(!var12) { _fun0004_ip = 20; continue _fun0004 }
case 21:
                    var20 = _closure3_slot4;
                    var12 = var20.get;
                    var12 = var12.bind(var20)();
                    var12 = var12.height;
                    var12 = var17 - var12;
                    var18 = 2;
                    var17 = var12 / var18;
                    var12 = var20.get;
                    var12 = var12.bind(var20)();
                    var12 = var12.height;
                    var12 = var12 * var5;
                    var12 = var19 - var12;
                    var12 = var12 / var18;
                    var12 = var17 - var12;
                    var12 = var12 * var5;
                    var14 = var16 - var12;
case 20:
                    var16 = _closure3_slot4;
                    var12 = var16.get;
                    var12 = var12.bind(var16)();
                    var12 = var12.height;
                    if(!(!(var12 > var13))) { _fun0004_ip = 22; continue _fun0004 }
case 23:
                    var16 = _closure3_slot5;
                    var12 = var16.get;
                    var12 = var12.bind(var16)();
                    var12 = var12.height;
                    var12 = var12 - var1;
                    var12 = var12 - var15;
                    var13 = var13 - var12;
                    var12 = 2;
                    var12 = var13 / var12;
                    var12 = var14 + var12;
                    _fun0004_ip = 24; continue _fun0004;
case 22:
                    var13 = var6 * var5;
                    var15 = var13 - var6;
                    var13 = 2;
                    var13 = var15 / var13;
                    var12 = var14 + var13;
case 24:
                    var1 = var1 * var5;
                    var8 = var12 - var1;
                    var9 = var6;
                    var10 = var5;
case 8:
                    var1 = {};
                    var5 = 'relative';
                    var1['position'] = var5;
                    var6 = _closure3_slot5;
                    var5 = var6.get;
                    var5 = var5.bind(var6)();
                    var5 = var5.width;
                    var1['width'] = var5;
                    var12 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var6 = 14;
                    var6 = var5[var6];
                    var6 = var12.bind(var11)(var6);
                    var6 = var6.bind(var11)(var9);
                    var1['height'] = var6;
                    var6 = {};
                    var9 = _closure1_slot0;
                    var12 = 15;
                    var5 = var5[var12];
                    var13 = var9.bind(var11)(var5);
                    var9 = var13.withSpring;
                    var14 = _closure3_slot8;
                    var5 = var14.get;
                    var5 = var5.bind(var14)();
                    var5 = var5.y;
                    var8 = var8 + var5;
                    var5 = var14.get;
                    var5 = var5.bind(var14)();
                    var5 = var5.gestureActive;
                    if(var5) { _fun0004_ip = 25; continue _fun0004 }
case 26:
                    var14 = _closure3_slot6;
                    var5 = var14.get;
                    var14 = var5.bind(var14)();
                    var5 = _closure1_slot8;
                    var5 = var5.PIP;
                    if(!(var14 !== var5)) { _fun0004_ip = 25; continue _fun0004 }
case 27:
                    var5 = _closure1_slot13;
                    _fun0004_ip = 28; continue _fun0004;
case 25:
                    var5 = _closure1_slot7;
case 28:
                    var5 = var9.bind(var13)(var8, var5);
                    var6['translateY'] = var5;
                    var5 = new Array(2);
                    var5[0] = var6;
                    var6 = {};
                    var9 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var8 = var8[var12];
                    var9 = var9.bind(var11)(var8);
                    var8 = var9.withSpring;
                    var7 = _closure1_slot13;
                    var7 = var8.bind(var9)(var10, var7);
                    var6['scale'] = var7;
                    var5[1] = var6;
                    var1['transform'] = var5;
                    var4 = _closure3_slot0;
                    if(!var4) { _fun0004_ip = 29; continue _fun0004 }
case 30:
                    var2 = 0;
case 29:
                    var1['opacity'] = var2;
                    return var1;
                }
            };
            var5 = {};
            var5['controlsSpecs'] = var18;
            var18 = _closure1_slot9;
            var5['VoicePanelControlsModes'] = var18;
            var5['safeArea'] = var17;
            var17 = _closure1_slot11;
            var5['EDGE_GUTTER'] = var17;
            var17 = 13;
            var17 = var11[var17];
            var17 = var12.bind(var10)(var17);
            var5['calculateVoicePanelHeaderSpecs'] = var17;
            var5['connected'] = var16;
            var5['contentDimensions'] = var15;
            var5['windowDimensions'] = var14;
            var5['mode'] = var13;
            var13 = _closure1_slot8;
            var5['VoicePanelModes'] = var13;
            var5['focused'] = var8;
            var8 = 14;
            var8 = var11[var8];
            var8 = var12.bind(var10)(var8);
            var5['roundToNearestPixel'] = var8;
            var8 = 15;
            var8 = var11[var8];
            var8 = var9.bind(var10)(var8);
            var8 = var8.withSpring;
            var5['withSpring'] = var8;
            var5['wrapperOffset'] = var7;
            var7 = _closure1_slot7;
            var5['LAYOUT_PHYSICS'] = var7;
            var7 = _closure1_slot13;
            var5['SCALE_PHYSICS'] = var7;
            var5['freeze'] = var6;
            var1['__closure'] = var5;
            var5 = 12535849569890.0;
            var1['__workletHash'] = var5;
            var4 = _closure1_slot17;
            var1['__initData'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var7 = var2.bind(var3)(var6);
        var _closure2_slot2 = var7;
        var4 = _closure1_slot4;
        var3 = var4.useMemo;
        var2 = new Array(3);
        var2[0] = var7;
        var2[1] = var6;
        var2[2] = var5;
        var1 = function() {
            var4 = _closure1_slot12;
            var9 = _closure1_slot1;
            var13 = _closure1_slot2;
            var1 = 18;
            var1 = var13[var1];
            var3 = undefined;
            var2 = var9.bind(var3)(var1);
            var1 = {};
            var5 = _closure2_slot2;
            var1['style'] = var5;
            var7 = _closure1_slot12;
            var6 = _closure1_slot0;
            var5 = 19;
            var5 = var13[var5];
            var5 = var6.bind(var3)(var5);
            var6 = var5.Freeze;
            var5 = {};
            var8 = _closure2_slot1;
            var5['freeze'] = var8;
            var10 = _closure1_slot12;
            var8 = 20;
            var8 = var13[var8];
            var9 = var9.bind(var3)(var8);
            var8 = {};
            var13 = false;
            var8['collapsable'] = var13;
            var12 = _closure1_slot5;
            var12 = var12.absoluteFill;
            var8['style'] = var12;
            var11 = _closure2_slot0;
            var8['children'] = var11;
            var8 = var10.bind(var3)(var9, var8);
            var5['children'] = var8;
            var5 = var7.bind(var3)(var6, var5);
            var1['children'] = var5;
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot20 = var1;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var4);
    var9 = 0;
    var4 = var6[var9];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var11 = 1;
    var7 = var6[var11];
    var4 = metroImportAll;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.StyleSheet;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var14 = var4.UI_SHOW_HIDE_PHYSICS;
    var8 = var4.VOICE_PANEL_CHUNK_DIVISOR;
    var12 = var4.LAYOUT_PHYSICS;
    var _closure1_slot7 = var12;
    var4 = var4.VoicePanelModes;
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.VoicePanelControlsModes;
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.VoicePanelPIPModes;
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.EDGE_GUTTER;
    var _closure1_slot11 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot12 = var4;
    var4 = {};
    var15 = var4;
    var10 = copyDataProperties(var15, var14);
    var10 = 'mass';
    var4[var10] = var11;
    var11 = 1e-05;
    var10 = 'restSpeedThreshold';
    var4[var10] = var11;
    var _closure1_slot13 = var4;
    var4 = {};
    var4['start'] = var9;
    var4['end'] = var8;
    var _closure1_slot14 = var4;
    var4 = {};
    var8 = 'function VoicePanelCardViewTsx1(){const{viewableChunks}=this.__closure;return viewableChunks.get();}';
    var4['code'] = var8;
    var _closure1_slot15 = var4;
    var4 = {};
    var8 = 'function VoicePanelCardViewTsx2(newChunks,previous){const{cheapWorkletShallowEqual,runOnJS,updateValueIfChange}=this.__closure;if(cheapWorkletShallowEqual(newChunks,previous!==null&&previous!==void 0?previous:undefined))return;runOnJS(updateValueIfChange)(newChunks);}';
    var4['code'] = var8;
    var _closure1_slot16 = var4;
    var4 = {};
    var8 = "function VoicePanelCardViewTsx3(){const{controlsSpecs,VoicePanelControlsModes,safeArea,EDGE_GUTTER,calculateVoicePanelHeaderSpecs,connected,contentDimensions,windowDimensions,mode,VoicePanelModes,focused,roundToNearestPixel,withSpring,wrapperOffset,LAYOUT_PHYSICS,SCALE_PHYSICS,freeze}=this.__closure;const hidden=controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN;let height=0;let scale=1;let top=0;const safeAreaBottom=Math.max(safeArea.get().bottom,EDGE_GUTTER);const{height:headerBarHeight,paddingTop:safeAreaTop}=calculateVoicePanelHeaderSpecs(safeArea.get());if(connected.get()){height+=safeAreaTop;height+=contentDimensions.get().height;height+=safeAreaBottom;if(height-windowDimensions.get().height<8){height=windowDimensions.get().height;}if(mode.get()!==VoicePanelModes.PIP&&!hidden&&focused.get()==null){const targetHeight=height-headerBarHeight-EDGE_GUTTER-controlsSpecs.get().height-safeAreaBottom;const fullView=windowDimensions.get().height-safeAreaTop-safeAreaBottom;const controlsView=windowDimensions.get().height-headerBarHeight-controlsSpecs.get().height-safeAreaBottom;top=headerBarHeight;scale=function(){if(contentDimensions.get().height>targetHeight){return targetHeight/contentDimensions.get().height;}return(windowDimensions.get().width-48)/windowDimensions.get().width;}();if(contentDimensions.get().height<fullView&&contentDimensions.get().height>controlsView){const offsetOriginal=(fullView-contentDimensions.get().height)/2;const scaledContent=contentDimensions.get().height*scale;const scaledOffset=(controlsView-scaledContent)/2;top-=(offsetOriginal-scaledOffset)*scale;}if(contentDimensions.get().height>targetHeight){top+=(height*scale-height)/2;}else{top+=(targetHeight-(windowDimensions.get().height-safeAreaTop-safeAreaBottom))/2;}top-=safeAreaTop*scale;}}return{position:'relative',width:windowDimensions.get().width,height:roundToNearestPixel(height),transform:[{translateY:withSpring(top+wrapperOffset.get().y,wrapperOffset.get().gestureActive||mode.get()===VoicePanelModes.PIP?LAYOUT_PHYSICS:SCALE_PHYSICS)},{scale:withSpring(scale,SCALE_PHYSICS)}],opacity:freeze?0:1};}";
    var4['code'] = var8;
    var _closure1_slot17 = var4;
    var4 = var7.memo;
    var2 = function VoicePanelCardView(arg1) {
        var2 = arg1;
        var4 = var2.viewableChunks;
        var6 = _closure1_slot4;
        var5 = var6.useContext;
        var9 = _closure1_slot1;
        var8 = _closure1_slot2;
        var3 = 12;
        var3 = var8[var3];
        var7 = undefined;
        var3 = var9.bind(var7)(var3);
        var3 = var5.bind(var6)(var3);
        var6 = var3.channelId;
        var3 = function useViewableChunkState(arg1) {
            var13 = arg1;
            var _closure3_slot0 = var13;
            var4 = _closure1_slot4;
            var3 = var4.useState;
            var1 = _closure1_slot14;
            var4 = var3.bind(var4)(var1);
            var3 = _closure1_slot3;
            var11 = undefined;
            var1 = 2;
            var4 = var3.bind(var11)(var4, var1);
            var1 = 0;
            var1 = var4[var1];
            var3 = 1;
            var3 = var4[var3];
            var _closure3_slot1 = var3;
            var7 = _closure1_slot4;
            var5 = var7.useCallback;
            var4 = function(arg1) {
                var1 = arg1;
                var _closure4_slot0 = var1;
                var3 = _closure3_slot1;
                var1 = undefined;
                var2 = function(arg1) {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                        var1 = arg1;
                        var4 = var1.start;
                        var3 = _closure4_slot0;
                        var3 = var3.start;
                        if(!(var4 === var3)) { _fun0005_ip = 2; continue _fun0005 }
case 31:
                        var4 = var1.end;
                        var3 = _closure4_slot0;
                        var3 = var3.end;
                        if(!(var4 !== var3)) { _fun0005_ip = 32; continue _fun0005 }
case 2:
                        var1 = _closure4_slot0;
case 32:
                        return var1;
                    }
                };
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var3 = new Array(0);
            var8 = var5.bind(var7)(var4, var3);
            var _closure3_slot2 = var8;
            var10 = _closure1_slot0;
            var12 = _closure1_slot2;
            var9 = 10;
            var3 = var12[var9];
            var5 = var10.bind(var11)(var3);
            var4 = var5.useAnimatedReaction;
            var3 = function h() {
                var2 = _closure3_slot0;
                var1 = var2.get;
                var1 = var1.bind(var2)();
                return var1;
            };
            var7 = {};
            var7['viewableChunks'] = var13;
            var3['__closure'] = var7;
            var7 = 1074173860641.0;
            var3['__workletHash'] = var7;
            var7 = _closure1_slot15;
            var3['__initData'] = var7;
            var2 = function s(arg1, arg2) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var3 = arg1;
                    var7 = arg2;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 11;
                    var4 = var4[var1];
                    var1 = undefined;
                    var6 = var5.bind(var1)(var4);
                    var5 = var6.cheapWorkletShallowEqual;
                    var4 = null;
                    var8 = var4 != var7;
                    var4 = undefined;
                    if(!var8) { _fun0006_ip = 33; continue _fun0006 }
case 34:
                    var4 = var7;
case 33:
                    var4 = var5.bind(var6)(var3, var4);
                    if(var4) { _fun0006_ip = 35; continue _fun0006 }
case 36:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 10;
                    var2 = var5[var2];
                    var5 = var4.bind(var1)(var2);
                    var4 = var5.runOnJS;
                    var2 = _closure3_slot2;
                    var2 = var4.bind(var5)(var2);
                    var2 = var2.bind(var1)(var3);
case 35:
                    return var1;
                }
            };
            var7 = {};
            var13 = 11;
            var13 = var12[var13];
            var13 = var10.bind(var11)(var13);
            var13 = var13.cheapWorkletShallowEqual;
            var7['cheapWorkletShallowEqual'] = var13;
            var9 = var12[var9];
            var9 = var10.bind(var11)(var9);
            var9 = var9.runOnJS;
            var7['runOnJS'] = var9;
            var7['updateValueIfChange'] = var8;
            var2['__closure'] = var7;
            var7 = 13543715159803.0;
            var2['__workletHash'] = var7;
            var6 = _closure1_slot16;
            var2['__initData'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        };
        var5 = var3.bind(var7)(var4);
        var4 = _closure1_slot0;
        var3 = 21;
        var3 = var8[var3];
        var4 = var4.bind(var7)(var3);
        var3 = var4.useChunkedParticipants;
        var5 = var3.bind(var4)(var6, var5);
        var _closure2_slot0 = var5;
        var4 = _closure1_slot4;
        var3 = var4.useRef;
        var3 = var3.bind(var4)(var5);
        var _closure2_slot1 = var3;
        var7 = _closure1_slot4;
        var6 = var7.useEffect;
        var4 = new Array(1);
        var4[0] = var5;
        var3 = function() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var4 = _closure1_slot1;
                var1 = _closure1_slot2;
                var6 = 22;
                var2 = var1[var6];
                var1 = undefined;
                var8 = var4.bind(var1)(var2);
                var7 = var8.isEqual;
                var4 = _closure2_slot1;
                var5 = var4.current;
                var4 = _closure2_slot0;
                var4 = var7.bind(var8)(var5, var4);
                if(var4) { _fun0007_ip = 37; continue _fun0007 }
case 38:
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var4 = var4[var6];
                var8 = var5.bind(var1)(var4);
                var7 = var8.differenceWith;
                var4 = _closure2_slot1;
                var6 = var4.current;
                var5 = _closure2_slot0;
                var4 = function(arg1, arg2) {
                    var1 = arg1;
                    var2 = var1.id;
                    var1 = arg2;
                    var1 = var1.id;
                    var1 = var2 === var1;
                    return var1;
                };
                var6 = var7.bind(var8)(var6, var5, var4);
                var4 = var6.length;
                var5 = 0;
                var8 = var4 > var5;
                var4 = null;
                var7 = null;
                if(!var8) { _fun0007_ip = 39; continue _fun0007 }
case 40:
                var5 = var6[var5];
                var7 = var5.id;
case 39:
                var5 = var4 == var7;
                var9 = null;
                if(var5) { _fun0007_ip = 41; continue _fun0007 }
case 42:
                var6 = _closure1_slot6;
                var5 = var6.getUser;
                var9 = var5.bind(var6)(var7);
case 41:
                if(!(var4 != var9)) { _fun0007_ip = 43; continue _fun0007 }
case 44:
                var6 = _closure1_slot0;
                var10 = _closure1_slot2;
                var3 = 23;
                var3 = var10[var3];
                var3 = var6.bind(var1)(var3);
                var5 = var3.AccessibilityAnnouncer;
                var4 = var5.announce;
                var3 = 24;
                var7 = var10[var3];
                var7 = var6.bind(var1)(var7);
                var8 = var7.intl;
                var7 = var8.formatToPlainString;
                var3 = var10[var3];
                var3 = var6.bind(var1)(var3);
                var3 = var3.t;
                var6 = var3.9NqwWV;
                var3 = {};
                var9 = var9.username;
                var3['username'] = var9;
                var3 = var7.bind(var8)(var6, var3);
                var3 = var4.bind(var5)(var3);
case 43:
                var3 = _closure2_slot1;
                var2 = _closure2_slot0;
                var3['current'] = var2;
case 37:
                return var1;
            }
        };
        var3 = var6.bind(var7)(var3, var4);
        var4 = _closure1_slot4;
        var3 = var4.useMemo;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            var4 = _closure1_slot12;
            var3 = _closure1_slot20;
            var2 = {};
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 25;
            var5 = var5[var1];
            var1 = undefined;
            var5 = var6.bind(var1)(var5);
            var6 = var5.TransitionGroup;
            var5 = {};
            var8 = _closure2_slot0;
            var5['items'] = var8;
            var8 = _closure1_slot19;
            var5['renderItem'] = var8;
            var7 = _closure1_slot18;
            var5['getItemKey'] = var7;
            var7 = 1000;
            var5['lazyCleanUpDelay'] = var7;
            var5 = var4.bind(var1)(var6, var5);
            var2['children'] = var5;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var2 = var4.bind(var7)(var2);
    var4 = 26;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/voice_panel/native/card/VoicePanelCardView.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();