// discord_common/js/packages/design/components/Rive/native/BaseRive.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var4 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var11 = 0;
    var2 = var6[var11];
    var1 = undefined;
    var2 = var4.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var12 = 1;
    var4 = var6[var12];
    var2 = metroImportAll;
    var8 = var2.bind(var1)(var4);
    var _closure1_slot4 = var8;
    var2 = 2;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var4 = var2.AppState;
    var _closure1_slot5 = var4;
    var4 = var2.View;
    var _closure1_slot6 = var4;
    var4 = var2.findNodeHandle;
    var _closure1_slot7 = var4;
    var9 = var2.StyleSheet;
    var4 = var2.Image;
    var _closure1_slot8 = var4;
    var4 = var2.PixelRatio;
    var _closure1_slot9 = var4;
    var2 = var2.Platform;
    var2 = 3;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.jsx;
    var _closure1_slot10 = var2;
    var4 = var9.create;
    var2 = {};
    var10 = {};
    var10['flexGrow'] = var12;
    var2['container'] = var10;
    var10 = {};
    var10['opacity'] = var11;
    var2['hidden'] = var10;
    var2 = var4.bind(var9)(var2);
    var _closure1_slot11 = var2;
    var4 = var8.forwardRef;
    var2 = function BaseRiveInner(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var3 = var2.src;
            var15 = var2.resourceName;
            var18 = var2.style;
            var14 = var2.artboard;
            var5 = var2.artboardProperties;
            var3 = var2.artboardViewModelInstances;
            var25 = var2.dataBinding;
            var7 = var2.defaultViewModelInstance;
            var12 = var2.referencedAssets;
            var26 = var2.onDataBindingChange;
            var23 = var2.stateMachine;
            var24 = var2.fit;
            var22 = var2.alignment;
            var10 = var2.withReducedMotion;
            var4 = undefined;
            if(!(var10 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var10 = 'halt';
case 2:
            var _closure2_slot0 = var4;
            var _closure2_slot1 = var4;
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var _closure2_slot8 = var4;
            var2 = function useDefaultRenderer() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 5;
                    var4 = var4[var1];
                    var1 = undefined;
                    var5 = var5.bind(var1)(var4);
                    var4 = var5.useManaContext;
                    var4 = var4.bind(var5)();
                    var5 = var4.experiments;
                    var4 = null;
                    var7 = var4 == var5;
                    var6 = undefined;
                    if(var7) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var7 = var5.enabledExperiments;
                    var4 = var4 == var7;
                    var6 = undefined;
                    if(var4) { _fun0002_ip = 4; continue _fun0002 }
case 6:
                    var5 = var7.includes;
                    var4 = 'rive-mobile-renderer';
                    var6 = var5.bind(var7)(var4);
case 4:
                    var _closure3_slot0 = var6;
                    var5 = _closure1_slot4;
                    var4 = var5.useEffect;
                    var3 = new Array(1);
                    var3[0] = var6;
                    var2 = function() {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                            var3 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var8 = 4;
                            var2 = var1[var8];
                            var1 = undefined;
                            var2 = var3.bind(var1)(var2);
                            var5 = var2.RiveRenderer;
                            var4 = var5.defaultRenderer;
                            var3 = _closure3_slot0;
                            var9 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var7 = var7[var8];
                            var7 = var9.bind(var1)(var7);
                            var7 = var7.RiveRendererIOS;
                            if(var3) { _fun0003_ip = 7; continue _fun0003 }
case 8:
                            var3 = var7.CoreGraphics;
                            _fun0003_ip = 9; continue _fun0003;
case 7:
                            var3 = var7.Rive;
case 9:
                            var2 = _closure3_slot0;
                            var7 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var6 = var6[var8];
                            var6 = var7.bind(var1)(var6);
                            var6 = var6.RiveRendererAndroid;
                            if(var2) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                            var2 = var6.Canvas;
                            _fun0003_ip = 12; continue _fun0003;
case 10:
                            var2 = var6.Rive;
case 12:
                            var2 = var4.bind(var5)(var3, var2);
                            return var1;
                        }
                    };
                    var2 = var4.bind(var5)(var2, var3);
                    return var1;
                }
            };
            var2 = var2.bind(var4)();
            var6 = _closure1_slot0;
            var2 = _closure1_slot2;
            var19 = 4;
            var2 = var2[var19];
            var6 = var6.bind(var4)(var2);
            var2 = var6.useRive;
            var8 = var2.bind(var6)();
            var6 = _closure1_slot3;
            var2 = 2;
            var6 = var6.bind(var4)(var8, var2);
            var13 = 0;
            var17 = var6[var13];
            var2 = 1;
            var9 = var6[var2];
            _closure2_slot0 = var9;
            var6 = _closure1_slot4;
            var2 = var6.useRef;
            var11 = var2.bind(var6)(var7);
            _closure2_slot1 = var11;
            var2 = 'layout';
            var20 = undefined;
            if(!(var2 === var24)) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var6 = _closure1_slot9;
            var2 = var6.get;
            var20 = var2.bind(var6)();
case 13:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 5;
            var2 = var7[var2];
            var6 = var6.bind(var4)(var2);
            var2 = var6.useManaContext;
            var2 = var2.bind(var6)();
            var6 = var2.experiments;
            var8 = null;
            var7 = var8 == var6;
            var2 = undefined;
            if(var7) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var16 = var6.enabledExperiments;
            var6 = var8 == var16;
            var2 = undefined;
            if(var6) { _fun0001_ip = 15; continue _fun0001 }
case 17:
            var7 = var16.includes;
            var6 = 'rive-app-state-playback';
            var2 = var7.bind(var16)(var6);
case 15:
            var6 = var8 != var2;
            if(!var6) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var6 = var2;
case 18:
            var2 = function useAppStatePlayback(arg1, arg2) {
                var9 = arg1;
                var8 = arg2;
                var _closure3_slot0 = var9;
                var _closure3_slot1 = var8;
                var7 = _closure1_slot4;
                var3 = var7.useRef;
                var4 = false;
                var3 = var3.bind(var7)(var4);
                var _closure3_slot2 = var3;
                var3 = var7.useRef;
                var3 = var3.bind(var7)(var4);
                var _closure3_slot3 = var3;
                var3 = var7.useRef;
                var2 = _closure1_slot5;
                var4 = var2.currentState;
                var2 = 'background';
                var2 = var2 === var4;
                var2 = var3.bind(var7)(var2);
                var _closure3_slot4 = var2;
                var4 = var7.useCallback;
                var3 = new Array(2);
                var3[0] = var9;
                var3[1] = var8;
                var2 = function() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        var3 = _closure3_slot0;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0004_ip = 20; continue _fun0004 }
case 21:
                        var2 = _closure3_slot1;
                        if(!var2) { _fun0004_ip = 22; continue _fun0004 }
case 23:
                        var2 = _closure3_slot4;
                        var2 = var2.current;
                        if(var2) { _fun0004_ip = 24; continue _fun0004 }
case 22:
                        var3 = _closure3_slot0;
                        var2 = var3.play;
                        var2 = var2.bind(var3)();
                        _fun0004_ip = 20; continue _fun0004;
case 24:
                        var2 = _closure3_slot3;
                        var1 = true;
                        var2['current'] = var1;
case 20:
                        var1 = undefined;
                        return var1;
                    }
                };
                var4 = var4.bind(var7)(var2, var3);
                var5 = var7.useCallback;
                var3 = function() {
                    var2 = _closure3_slot2;
                    var1 = true;
                    var2['current'] = var1;
                    var1 = undefined;
                    return var1;
                };
                var2 = new Array(0);
                var3 = var5.bind(var7)(var3, var2);
                var6 = var7.useCallback;
                var5 = function() {
                    var2 = _closure3_slot2;
                    var1 = false;
                    var2['current'] = var1;
                    var1 = undefined;
                    return var1;
                };
                var2 = new Array(0);
                var2 = var6.bind(var7)(var5, var2);
                var6 = var7.useEffect;
                var5 = new Array(2);
                var5[0] = var9;
                var5[1] = var8;
                var1 = function() {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                        var2 = _closure3_slot1;
                        if(var2) { _fun0005_ip = 25; continue _fun0005 }
case 26:
                        var2 = undefined;
                        return var2;
case 25:
                        var5 = _closure1_slot5;
                        var4 = var5.addEventListener;
                        var3 = 'change';
                        var2 = function(arg1) {
                            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                                var2 = arg1;
                                var1 = 'background';
                                if(!(var1 !== var2)) { _fun0006_ip = 27; continue _fun0006 }
case 28:
                                var1 = 'active';
                                if(!(var1 === var2)) { _fun0006_ip = 29; continue _fun0006 }
case 30:
                                var2 = _closure3_slot4;
                                var3 = false;
                                var2['current'] = var3;
                                var4 = _closure3_slot0;
                                var2 = null;
                                var2 = var2 != var4;
                                if(!var2) { _fun0006_ip = 31; continue _fun0006 }
case 32:
                                var4 = _closure3_slot3;
                                var2 = var4.current;
case 31:
                                if(!var2) { _fun0006_ip = 29; continue _fun0006 }
case 33:
                                var2 = _closure3_slot3;
                                var2['current'] = var3;
                                var2 = _closure3_slot0;
                                var1 = var2.play;
                                var1 = var1.bind(var2)();
                                _fun0006_ip = 29; continue _fun0006;
case 27:
                                var2 = _closure3_slot4;
                                var3 = true;
                                var2['current'] = var3;
                                var4 = _closure3_slot0;
                                var2 = null;
                                var2 = var2 != var4;
                                if(!var2) { _fun0006_ip = 34; continue _fun0006 }
case 11:
                                var4 = _closure3_slot2;
                                var2 = var4.current;
case 34:
                                if(!var2) { _fun0006_ip = 29; continue _fun0006 }
case 35:
                                var2 = _closure3_slot3;
                                var2['current'] = var3;
                                var2 = _closure3_slot0;
                                var1 = var2.pause;
                                var1 = var1.bind(var2)();
case 29:
                                var1 = undefined;
                                return var1;
                            }
                        };
                        var2 = var4.bind(var5)(var3, var2);
                        var _closure4_slot0 = var2;
                        var1 = function() {
                            var2 = _closure4_slot0;
                            var1 = var2.remove;
                            var1 = var1.bind(var2)();
                            return var1;
                        };
                        return var1;
                    }
                };
                var1 = var6.bind(var7)(var1, var5);
                var1 = {};
                var1['play'] = var4;
                var1['onRivePlay'] = var3;
                var1['onRivePauseOrStop'] = var2;
                return var1;
            };
            var6 = var2.bind(var4)(var9, var6);
            var29 = var6.play;
            var2 = var6.onRivePlay;
            _closure2_slot2 = var2;
            var6 = var6.onRivePauseOrStop;
            _closure2_slot3 = var6;
            var7 = function useDataBinding(arg1, arg2, arg3, arg4, arg5) {
                var13 = arg1;
                var12 = arg2;
                var11 = arg3;
                var10 = arg4;
                var7 = arg5;
                var _closure3_slot0 = var13;
                var _closure3_slot1 = var12;
                var _closure3_slot2 = var11;
                var _closure3_slot3 = var10;
                var _closure3_slot4 = var7;
                var6 = _closure1_slot4;
                var4 = var6.useState;
                var3 = 0;
                var9 = var4.bind(var6)(var3);
                var8 = _closure1_slot3;
                var5 = undefined;
                var4 = 2;
                var4 = var8.bind(var5)(var9, var4);
                var14 = var4[var3];
                var3 = 1;
                var3 = var4[var3];
                var _closure3_slot5 = var3;
                var8 = var6.useCallback;
                var4 = function() {
                    var3 = _closure3_slot5;
                    var1 = undefined;
                    var2 = function(arg1) {
                        var2 = arg1;
                        var1 = 1;
                        var1 = var2 + var1;
                        return var1;
                    };
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var3 = new Array(0);
                var3 = var8.bind(var6)(var4, var3);
                var4 = var6.useContext;
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var2 = 6;
                var2 = var9[var2];
                var2 = var8.bind(var5)(var2);
                var2 = var2.AccessibilityPreferencesContext;
                var2 = var4.bind(var6)(var2);
                var2 = var2.reducedMotion;
                var9 = var2.enabled;
                var _closure3_slot6 = var9;
                var4 = {};
                var4['dataBinding'] = var10;
                var4['riveRef'] = var13;
                var2 = function useIsReadyToDisplay(arg1) {
                    var3 = arg1;
                    var2 = var3.dataBinding;
                    var _closure4_slot0 = var2;
                    var4 = var3.riveRef;
                    var5 = _closure1_slot4;
                    var7 = var5.useMemo;
                    var6 = new Array(1);
                    var6[0] = var2;
                    var2 = function() {
                        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                            var1 = global;
                            var3 = var1.Object;
                            var2 = var3.keys;
                            var5 = _closure4_slot0;
                            var1 = null;
                            if(!(var1 == var5)) { _fun0007_ip = 36; continue _fun0007 }
case 37:
                            var1 = {};
                            _fun0007_ip = 38; continue _fun0007;
case 36:
                            var1 = _closure4_slot0;
case 38:
                            var1 = var2.bind(var3)(var1);
                            var2 = var1.length;
                            var1 = 0;
                            var1 = var2 > var1;
                            return var1;
                        }
                    };
                    var8 = var7.bind(var5)(var2, var6);
                    var _closure4_slot1 = var8;
                    var6 = var5.useState;
                    var2 = !var8;
                    var2 = var6.bind(var5)(var2);
                    var11 = _closure1_slot3;
                    var10 = undefined;
                    var9 = 2;
                    var6 = var11.bind(var10)(var2, var9);
                    var2 = 0;
                    var3 = var6[var2];
                    var7 = 1;
                    var6 = var6[var7];
                    var _closure4_slot2 = var6;
                    var12 = var5.useState;
                    var6 = false;
                    var6 = var12.bind(var5)(var6);
                    var6 = var11.bind(var10)(var6, var9);
                    var2 = var6[var2];
                    var _closure4_slot3 = var2;
                    var6 = var6[var7];
                    var _closure4_slot4 = var6;
                    var7 = var5.useEffect;
                    var6 = new Array(2);
                    var6[0] = var8;
                    var6[1] = var2;
                    var2 = function() {
                        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                            var3 = _closure4_slot2;
                            var2 = _closure4_slot1;
                            var2 = !var2;
                            if(var2) { _fun0008_ip = 39; continue _fun0008 }
case 40:
                            var2 = _closure4_slot3;
case 39:
                            var1 = undefined;
                            var2 = var3.bind(var1)(var2);
                            return var1;
                        }
                    };
                    var2 = var7.bind(var5)(var2, var6);
                    var2 = null;
                    var2 = var2 != var4;
                    var _closure4_slot5 = var2;
                    var6 = var5.useEffect;
                    var4 = new Array(1);
                    var4[0] = var2;
                    var2 = function() {
                        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                            var2 = _closure4_slot5;
                            var5 = undefined;
                            if(var2) { _fun0009_ip = 25; continue _fun0009 }
case 41:
                            return var5;
case 25:
                            var2 = global;
                            var4 = var2.setTimeout;
                            var3 = function() {
                                var3 = _closure4_slot2;
                                var1 = undefined;
                                var2 = true;
                                var2 = var3.bind(var1)(var2);
                                return var1;
                            };
                            var2 = 50;
                            var2 = var4.bind(var5)(var3, var2);
                            var _closure5_slot0 = var2;
                            var1 = function() {
                                var1 = global;
                                var3 = var1.clearTimeout;
                                var2 = _closure5_slot0;
                                var1 = undefined;
                                var1 = var3.bind(var1)(var2);
                                return var1;
                            };
                            return var1;
                        }
                    };
                    var2 = var6.bind(var5)(var2, var4);
                    var4 = var5.useCallback;
                    var2 = function() {
                        var3 = _closure4_slot4;
                        var1 = undefined;
                        var2 = true;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var1 = new Array(0);
                    var2 = var4.bind(var5)(var2, var1);
                    var1 = {};
                    var1['isReadyToDisplay'] = var3;
                    var1['onDataBindingChange'] = var2;
                    return var1;
                };
                var4 = var2.bind(var5)(var4);
                var2 = var4.isReadyToDisplay;
                var8 = var4.onDataBindingChange;
                var _closure3_slot7 = var8;
                var5 = var6.useRef;
                var4 = {};
                var4 = var5.bind(var6)(var4);
                var _closure3_slot8 = var4;
                var5 = var6.useEffect;
                var4 = new Array(8);
                var4[0] = var14;
                var4[1] = var13;
                var4[2] = var12;
                var4[3] = var11;
                var4[4] = var10;
                var4[5] = var9;
                var4[6] = var8;
                var4[7] = var7;
                var1 = function() {
                    _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                        var1 = _closure3_slot0;
                        var4 = null;
                        if(!(var4 != var1)) { _fun0010_ip = 42; continue _fun0010 }
case 21:
                        var6 = _closure3_slot0;
                        var5 = var6.setBoolean;
                        var2 = _closure3_slot6;
                        var1 = 'reducedMotion';
                        var1 = var5.bind(var6)(var1, var2);
                        var1 = _closure3_slot3;
                        if(!(var4 != var1)) { _fun0010_ip = 4; continue _fun0010 }
case 43:
                        var1 = global;
                        var5 = var1.Object;
                        var2 = var5.entries;
                        var1 = _closure3_slot3;
                        var5 = var2.bind(var5)(var1);
                        var2 = var5.forEach;
                        var1 = function(arg1) {
                            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                                var4 = arg1;
                                var2 = var4[Symbol.iterator];
                                var4 = var2().next;
                                var6 = var4().value;
                                var3 = var2;
                                var1 = undefined;
                                var3 = var3 === var1;
                                var5 = undefined;
                                if(var3) { _fun0011_ip = 44; continue _fun0011 }
case 45:
                                var5 = var6;
case 44:
                                var6 = undefined;
                                if(var3) { _fun0011_ip = 46; continue _fun0011 }
case 22:
                                var7 = var4().value;
                                var4 = var2;
                                var4 = var4 === var1;
                                var6 = undefined;
                                var3 = var4;
                                if(var4) { _fun0011_ip = 46; continue _fun0011 }
case 47:
                                var6 = var7;
                                var3 = var4;
case 46:
                                if(var3) { _fun0011_ip = 48; continue _fun0011 }
case 20:
                                var2.return();
case 48:
                                var4 = _closure3_slot2;
                                var3 = _closure3_slot1;
                                var3 = var4[var3];
                                var7 = var3[var5];
                                var3 = _closure3_slot8;
                                var3 = var3.current;
                                var3 = var3[var5];
                                var4 = var3 !== var6;
                                var10 = 'string';
                                if(!(var10 !== var7)) { _fun0011_ip = 49; continue _fun0011 }
case 50:
                                var3 = 'color';
                                if(!(var3 !== var7)) { _fun0011_ip = 51; continue _fun0011 }
case 52:
                                var8 = 'number';
                                if(!(var8 !== var7)) { _fun0011_ip = 53; continue _fun0011 }
case 54:
                                var9 = 'boolean';
                                if(!(var9 !== var7)) { _fun0011_ip = 55; continue _fun0011 }
case 56:
                                var3 = 'trigger';
                                if(!(var3 !== var7)) { _fun0011_ip = 57; continue _fun0011 }
case 58:
                                var3 = 'image';
                                if(!(var3 !== var7)) { _fun0011_ip = 59; continue _fun0011 }
case 60:
                                var3 = 'artboard';
                                if(!(var3 === var7)) { _fun0011_ip = 61; continue _fun0011 }
case 62:
                                var3 = null;
                                var3 = var3 != var6;
                                if(!var3) { _fun0011_ip = 63; continue _fun0011 }
case 64:
                                var7 = typeof var6;
                                var3 = var10 === var7;
case 63:
                                if(!var3) { _fun0011_ip = 61; continue _fun0011 }
case 65:
                                var7 = _closure3_slot0;
                                var3 = var7.setArtboard;
                                var3 = var3.bind(var7)(var5, var6);
                                _fun0011_ip = 61; continue _fun0011;
case 59:
                                var3 = null;
                                if(!(var3 != var6)) { _fun0011_ip = 61; continue _fun0011 }
case 66:
                                if(var4) { _fun0011_ip = 67; continue _fun0011 }
case 68:
                                return var1;
case 67:
                                var10 = _closure3_slot0;
                                var7 = var10.setImage;
                                var3 = typeof var6;
                                if(!(var8 !== var3)) { _fun0011_ip = 69; continue _fun0011 }
case 70:
                                var3 = global;
                                var11 = var3.Array;
                                var3 = var11.isArray;
                                var11 = var3.bind(var11)(var6);
                                var3 = var6;
                                if(!var11) { _fun0011_ip = 71; continue _fun0011 }
case 69:
                                var12 = _closure1_slot8;
                                var11 = var12.resolveAssetSource;
                                var11 = var11.bind(var12)(var6);
                                var3 = var11.uri;
case 71:
                                var3 = var7.bind(var10)(var5, var3);
                                _fun0011_ip = 61; continue _fun0011;
case 57:
                                var3 = null;
                                if(!(var3 != var6)) { _fun0011_ip = 61; continue _fun0011 }
case 72:
                                var7 = typeof var6;
                                var3 = var6;
                                if(!(var9 !== var7)) { _fun0011_ip = 73; continue _fun0011 }
case 74:
                                var7 = 0;
                                var3 = var7 !== var6;
case 73:
                                if(!var3) { _fun0011_ip = 75; continue _fun0011 }
case 76:
                                var3 = var4;
case 75:
                                if(!var3) { _fun0011_ip = 61; continue _fun0011 }
case 77:
                                var4 = _closure3_slot0;
                                var3 = var4.trigger;
                                var3 = var3.bind(var4)(var5);
                                _fun0011_ip = 61; continue _fun0011;
case 55:
                                var3 = null;
                                if(!(var3 != var6)) { _fun0011_ip = 61; continue _fun0011 }
case 78:
                                var7 = _closure3_slot0;
                                var4 = var7.setBoolean;
                                var3 = global;
                                var3 = var3.Boolean;
                                var3 = var3.bind(var1)(var6);
                                var3 = var4.bind(var7)(var5, var3);
                                _fun0011_ip = 61; continue _fun0011;
case 53:
                                var3 = null;
                                if(!(var3 != var6)) { _fun0011_ip = 61; continue _fun0011 }
case 79:
                                var7 = _closure3_slot0;
                                var4 = var7.setNumber;
                                var3 = typeof var6;
                                if(!(var8 === var3)) { _fun0011_ip = 80; continue _fun0011 }
case 81:
                                var3 = global;
                                var8 = var3.Number;
                                var3 = var8.isNaN;
                                var8 = var3.bind(var8)(var6);
                                var3 = var6;
                                if(!var8) { _fun0011_ip = 82; continue _fun0011 }
case 80:
                                var9 = global;
                                var11 = var9.Number;
                                var10 = var11.isNaN;
                                var12 = var9.parseFloat;
                                var8 = var6.toString;
                                var8 = var8.bind(var6)();
                                var8 = var12.bind(var1)(var8);
                                var10 = var10.bind(var11)(var8);
                                var8 = 0;
                                if(var10) { _fun0011_ip = 83; continue _fun0011 }
case 84:
                                var10 = var9.parseFloat;
                                var9 = var6.toString;
                                var9 = var9.bind(var6)();
                                var8 = var10.bind(var1)(var9);
case 83:
                                var3 = var8;
case 82:
                                var3 = var4.bind(var7)(var5, var3);
                                _fun0011_ip = 61; continue _fun0011;
case 51:
                                var3 = null;
                                if(!(var3 != var6)) { _fun0011_ip = 61; continue _fun0011 }
case 85:
                                var7 = _closure3_slot0;
                                var4 = var7.setColor;
                                var3 = var6.toString;
                                var3 = var3.bind(var6)();
                                var3 = var4.bind(var7)(var5, var3);
                                _fun0011_ip = 61; continue _fun0011;
case 49:
                                var3 = null;
                                if(!(var3 != var6)) { _fun0011_ip = 61; continue _fun0011 }
case 86:
                                var4 = _closure3_slot0;
                                var3 = var4.setString;
                                var2 = var6.toString;
                                var2 = var2.bind(var6)();
                                var2 = var3.bind(var4)(var5, var2);
case 61:
                                return var1;
                            }
                        };
                        var1 = var2.bind(var5)(var1);
case 4:
                        var1 = _closure3_slot7;
                        var2 = undefined;
                        var1 = var1.bind(var2)();
                        var1 = _closure3_slot4;
                        var1 = var1.bind(var2)();
                        var2 = _closure3_slot8;
                        var1 = _closure3_slot3;
                        if(!(var4 == var1)) { _fun0010_ip = 87; continue _fun0010 }
case 88:
                        var1 = {};
                        _fun0010_ip = 89; continue _fun0010;
case 87:
                        var1 = _closure3_slot3;
case 89:
                        var2['current'] = var1;
case 42:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1 = var5.bind(var6)(var1, var4);
                var1 = {};
                var1['onStateUpdated'] = var3;
                var1['isReadyToDisplay'] = var2;
                return var1;
            };
            var34 = undefined;
            var33 = var9;
            var32 = var14;
            var31 = var5;
            var30 = var25;
            var7 = var34[var7](var33, var32, var31, var30, var29, var28);
            var16 = var7.onStateUpdated;
            var7 = var7.isReadyToDisplay;
            var25 = function useDataBindingCallbacks(arg1, arg2, arg3, arg4) {
                var8 = arg1;
                var7 = arg2;
                var6 = arg3;
                var5 = arg4;
                var _closure3_slot0 = var8;
                var _closure3_slot1 = var7;
                var _closure3_slot2 = var6;
                var _closure3_slot3 = var5;
                var4 = _closure1_slot4;
                var3 = var4.useEffect;
                var2 = new Array(4);
                var2[0] = var8;
                var2[1] = var7;
                var2[2] = var6;
                var2[3] = var5;
                var1 = function() {
                    _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                        var3 = _closure3_slot0;
                        var4 = null;
                        if(!(var4 != var3)) { _fun0012_ip = 90; continue _fun0012 }
case 91:
                        var3 = _closure3_slot3;
                        if(!(var4 != var3)) { _fun0012_ip = 90; continue _fun0012 }
case 92:
                        var3 = _closure3_slot0;
                        var5 = var4 == var3;
                        var6 = undefined;
                        var3 = undefined;
                        if(var5) { _fun0012_ip = 93; continue _fun0012 }
case 94:
                        var5 = _closure3_slot0;
                        var5 = var5.internalNativeEmitter;
                        var5 = var4 == var5;
                        var3 = undefined;
                        if(var5) { _fun0012_ip = 93; continue _fun0012 }
case 46:
                        var7 = _closure3_slot0;
                        var5 = var7.internalNativeEmitter;
                        var3 = var5.bind(var7)();
case 93:
                        var _closure4_slot0 = var3;
                        if(!(var4 != var3)) { _fun0012_ip = 95; continue _fun0012 }
case 96:
                        var5 = _closure1_slot7;
                        var7 = _closure3_slot0;
                        var3 = var7.viewTag;
                        var3 = var3.bind(var7)();
                        var3 = var5.bind(var6)(var3);
                        var _closure4_slot1 = var3;
                        if(!(var4 == var3)) { _fun0012_ip = 97; continue _fun0012 }
case 90:
                        var3 = undefined;
                        return var3;
case 97:
                        var3 = new Array(0);
                        var _closure4_slot2 = var3;
                        var3 = global;
                        var4 = var3.Object;
                        var3 = var4.entries;
                        var2 = _closure3_slot3;
                        var4 = var3.bind(var4)(var2);
                        var3 = var4.forEach;
                        var2 = function(arg1) {
                            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                                var6 = arg1;
                                var4 = var6[Symbol.iterator];
                                var6 = var4().next;
                                var3 = var6().value;
                                var2 = var4;
                                var1 = undefined;
                                var5 = var2 === var1;
                                var2 = undefined;
                                if(var5) { _fun0013_ip = 44; continue _fun0013 }
case 45:
                                var2 = var3;
case 44:
                                var3 = undefined;
                                if(var5) { _fun0013_ip = 46; continue _fun0013 }
case 22:
                                var7 = var6().value;
                                var6 = var4;
                                var6 = var6 === var1;
                                var3 = undefined;
                                var5 = var6;
                                if(var6) { _fun0013_ip = 46; continue _fun0013 }
case 47:
                                var3 = var7;
                                var5 = var6;
case 46:
                                if(var5) { _fun0013_ip = 48; continue _fun0013 }
case 20:
                                var4.return();
case 48:
                                var5 = _closure3_slot2;
                                var4 = _closure3_slot1;
                                var4 = var5[var4];
                                var4 = var4[var2];
                                var5 = null;
                                if(!(var5 != var4)) { _fun0013_ip = 98; continue _fun0013 }
case 27:
                                if(!(var5 != var3)) { _fun0013_ip = 98; continue _fun0013 }
case 99:
                                var6 = new Array(4);
                                var6[0] = var2;
                                var2 = _closure1_slot12;
                                var2 = var2[var4];
                                var6[1] = var2;
                                var4 = _closure4_slot1;
                                var6[2] = var4;
                                var6[3] = var3;
                                var4 = _closure4_slot2;
                                var3 = var4.push;
                                var3 = var3.bind(var4)(var6);
                                var4 = _closure4_slot0;
                                var3 = var4.addListener;
                                var2 = new Array(0);
                                var9 = 0;
                                var11 = var2;
                                var10 = var6;
                                var5 = arraySpread(var11, var10, var9);
                                var11 = var3;
                                var10 = var2;
                                var9 = var4;
                                var2 = apply(var11, var10, var9);
case 98:
                                return var1;
                            }
                        };
                        var2 = var3.bind(var4)(var2);
                        var2 = function() {
                            var3 = _closure4_slot2;
                            var2 = var3.forEach;
                            var1 = function(arg1) {
                                var3 = _closure4_slot0;
                                var2 = var3.removeListener;
                                var1 = new Array(0);
                                var7 = arg1;
                                var6 = 0;
                                var8 = var1;
                                var4 = arraySpread(var8, var7, var6);
                                var8 = var2;
                                var7 = var1;
                                var6 = var3;
                                var1 = apply(var8, var7, var6);
                                return var1;
                            };
                            var1 = var2.bind(var3)(var1);
                            var1 = undefined;
                            return var1;
                        };
                        return var2;
case 95:
                        var1 = function() {
                            var1 = undefined;
                            return var1;
                        };
                        return var1;
                    }
                };
                var1 = var3.bind(var4)(var1, var2);
                var1 = undefined;
                return var1;
            };
            var33 = var9;
            var32 = var14;
            var31 = var5;
            var30 = var26;
            var25 = var34[var25](var33, var32, var31, var30, var29);
            var3 = var3[var14];
            if(!(var8 == var3)) { _fun0001_ip = 100; continue _fun0001 }
case 101:
            var3 = new Array(0);
case 100:
            var3 = var3.length;
            var3 = var3 > var13;
            _closure2_slot4 = var3;
            var11 = var11.current;
            var13 = var8 != var11;
            if(var13) { _fun0001_ip = 102; continue _fun0001 }
case 103:
            var13 = var3;
case 102:
            var26 = _closure1_slot4;
            var25 = var26.useMemo;
            var11 = new Array(1);
            var11[0] = var3;
            var3 = function() {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    var1 = _closure2_slot1;
                    var3 = var1.current;
                    var1 = null;
                    if(!(var1 == var3)) { _fun0014_ip = 104; continue _fun0014 }
case 105:
                    var1 = _closure2_slot4;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 4;
                    var4 = var4[var3];
                    var3 = undefined;
                    var5 = var5.bind(var3)(var4);
                    if(var1) { _fun0014_ip = 33; continue _fun0014 }
case 32:
                    var1 = var5.BindEmpty;
                    var1 = var1.bind(var5)();
                    _fun0014_ip = 106; continue _fun0014;
case 33:
                    var4 = var5.AutoBind;
                    var3 = true;
                    var1 = var4.bind(var5)(var3);
case 106:
                    _fun0014_ip = 107; continue _fun0014;
case 104:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 4;
                    var4 = var4[var3];
                    var3 = undefined;
                    var4 = var5.bind(var3)(var4);
                    var3 = var4.BindByName;
                    var2 = _closure2_slot1;
                    var2 = var2.current;
                    var1 = var3.bind(var4)(var2);
case 107:
                    return var1;
                }
            };
            var11 = var25.bind(var26)(var3, var11);
            var28 = var26.useImperativeHandle;
            var27 = new Array(1);
            var27[0] = var9;
            var25 = arg2;
            var3 = function() {
                var1 = {};
                var3 = function play() {
                    _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                        var3 = _closure2_slot0;
                        var1 = null;
                        var3 = var1 == var3;
                        var1 = undefined;
                        if(var3) { _fun0015_ip = 22; continue _fun0015 }
case 105:
                        var3 = _closure2_slot0;
                        var2 = var3.play;
                        var1 = var2.bind(var3)();
case 22:
                        return var1;
                    }
                };
                var1['play'] = var3;
                var3 = function pause() {
                    _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                        var3 = _closure2_slot0;
                        var1 = null;
                        var3 = var1 == var3;
                        var1 = undefined;
                        if(var3) { _fun0016_ip = 22; continue _fun0016 }
case 105:
                        var3 = _closure2_slot0;
                        var2 = var3.pause;
                        var1 = var2.bind(var3)();
case 22:
                        return var1;
                    }
                };
                var1['pause'] = var3;
                var2 = function stop() {
                    _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                        var3 = _closure2_slot0;
                        var1 = null;
                        var3 = var1 == var3;
                        var1 = undefined;
                        if(var3) { _fun0017_ip = 22; continue _fun0017 }
case 105:
                        var3 = _closure2_slot0;
                        var2 = var3.stop;
                        var1 = var2.bind(var3)();
case 22:
                        return var1;
                    }
                };
                var1['stop'] = var2;
                return var1;
            };
            var3 = var28.bind(var26)(var25, var3, var27);
            var25 = var26.useContext;
            var27 = _closure1_slot0;
            var28 = _closure1_slot2;
            var3 = 6;
            var3 = var28[var3];
            var3 = var27.bind(var4)(var3);
            var3 = var3.AccessibilityPreferencesContext;
            var3 = var25.bind(var26)(var3);
            var3 = var3.reducedMotion;
            var3 = var3.enabled;
            var25 = var5[var14];
            var26 = var8 == var25;
            var5 = undefined;
            if(var26) { _fun0001_ip = 108; continue _fun0001 }
case 109:
            var5 = var25.reducedMotion;
case 108:
            var5 = var8 != var5;
            if(!var3) { _fun0001_ip = 110; continue _fun0001 }
case 111:
            var3 = !var5;
case 110:
            if(!var3) { _fun0001_ip = 112; continue _fun0001 }
case 113:
            var5 = 'play';
            var3 = var5 !== var10;
case 112:
            _closure2_slot5 = var3;
            var5 = _closure1_slot4;
            var10 = var5.useRef;
            var10 = var10.bind(var5)(var8);
            _closure2_slot6 = var10;
            var25 = var5.useCallback;
            var10 = new Array(2);
            var10[0] = var3;
            var10[1] = var9;
            var9 = function() {
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                    var2 = _closure2_slot5;
                    if(!var2) { _fun0018_ip = 23; continue _fun0018 }
case 114:
                    var4 = _closure2_slot0;
                    var3 = null;
                    var2 = var3 != var4;
case 23:
                    if(!var2) { _fun0018_ip = 94; continue _fun0018 }
case 92:
                    var3 = _closure2_slot6;
                    var4 = var3.current;
                    var3 = null;
                    var2 = var3 == var4;
case 94:
                    if(!var2) { _fun0018_ip = 7; continue _fun0018 }
case 115:
                    var2 = _closure2_slot6;
                    var1 = global;
                    var5 = var1.setTimeout;
                    var4 = undefined;
                    var3 = function() {
                        var3 = _closure2_slot0;
                        var2 = var3.pause;
                        var2 = var2.bind(var3)();
                        var2 = _closure2_slot6;
                        var1 = null;
                        var2['current'] = var1;
                        var1 = undefined;
                        return var1;
                    };
                    var1 = 5000;
                    var1 = var5.bind(var4)(var3, var1);
                    var2['current'] = var1;
case 7:
                    var1 = undefined;
                    return var1;
                }
            };
            var25 = var25.bind(var5)(var9, var10);
            _closure2_slot7 = var25;
            var26 = var5.useCallback;
            var10 = function() {
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                    var2 = _closure2_slot6;
                    var3 = var2.current;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0019_ip = 116; continue _fun0019 }
case 105:
                    var3 = global;
                    var5 = var3.clearTimeout;
                    var3 = _closure2_slot6;
                    var4 = var3.current;
                    var3 = undefined;
                    var3 = var5.bind(var3)(var4);
                    var1 = _closure2_slot6;
                    var1['current'] = var2;
case 116:
                    var1 = undefined;
                    return var1;
                }
            };
            var9 = new Array(0);
            var9 = var26.bind(var5)(var10, var9);
            _closure2_slot8 = var9;
            var26 = var5.useEffect;
            var10 = new Array(1);
            var10[0] = var3;
            var3 = function() {
                var1 = function() {
                    _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                        var2 = _closure2_slot6;
                        var3 = var2.current;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0020_ip = 116; continue _fun0020 }
case 105:
                        var3 = global;
                        var5 = var3.clearTimeout;
                        var3 = _closure2_slot6;
                        var4 = var3.current;
                        var3 = undefined;
                        var3 = var5.bind(var3)(var4);
                        var1 = _closure2_slot6;
                        var1['current'] = var2;
case 116:
                        var1 = undefined;
                        return var1;
                    }
                };
                return var1;
            };
            var3 = var26.bind(var5)(var3, var10);
            var10 = var5.useCallback;
            var3 = new Array(2);
            var3[0] = var25;
            var3[1] = var2;
            var2 = function() {
                var3 = _closure2_slot7;
                var1 = undefined;
                var3 = var3.bind(var1)();
                var2 = _closure2_slot2;
                var2 = var2.bind(var1)();
                return var1;
            };
            var10 = var10.bind(var5)(var2, var3);
            var3 = var5.useCallback;
            var2 = new Array(2);
            var2[0] = var9;
            var2[1] = var6;
            var1 = function() {
                var3 = _closure2_slot8;
                var1 = undefined;
                var3 = var3.bind(var1)();
                var2 = _closure2_slot3;
                var2 = var2.bind(var1)();
                return var1;
            };
            var9 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot10;
            var2 = _closure1_slot6;
            var1 = {};
            var5 = _closure1_slot11;
            var6 = var5.container;
            var5 = new Array(2);
            var5[0] = var6;
            var6 = undefined;
            if(var7) { _fun0001_ip = 117; continue _fun0001 }
case 118:
            var7 = _closure1_slot11;
            var6 = var7.hidden;
case 117:
            var5[1] = var6;
            var1['style'] = var5;
            var7 = _closure1_slot10;
            var6 = _closure1_slot1;
            var5 = _closure1_slot2;
            var5 = var5[var19];
            var6 = var6.bind(var4)(var5);
            var5 = {};
            var5['resourceName'] = var15;
            if(!(var8 == var23)) { _fun0001_ip = 119; continue _fun0001 }
case 120:
            var15 = {};
            _fun0001_ip = 121; continue _fun0001;
case 119:
            var19 = {};
            var19['stateMachine'] = var23;
            var15 = var19;
case 121:
            var33 = var5;
            var32 = var15;
            var15 = copyDataProperties(var33, var32);
            if(!(var8 == var24)) { _fun0001_ip = 122; continue _fun0001 }
case 123:
            var15 = {};
            _fun0001_ip = 124; continue _fun0001;
case 122:
            var19 = {};
            var25 = _closure1_slot0;
            var26 = _closure1_slot2;
            var23 = 7;
            var23 = var26[var23];
            var23 = var25.bind(var4)(var23);
            var23 = var23.RIVE_FITS;
            var23 = var23[var24];
            var19['fit'] = var23;
            var15 = var19;
case 124:
            var33 = var5;
            var32 = var15;
            var15 = copyDataProperties(var33, var32);
            if(!(var8 == var22)) { _fun0001_ip = 125; continue _fun0001 }
case 126:
            var15 = {};
            _fun0001_ip = 127; continue _fun0001;
case 125:
            var19 = {};
            var23 = _closure1_slot0;
            var24 = _closure1_slot2;
            var21 = 7;
            var21 = var24[var21];
            var21 = var23.bind(var4)(var21);
            var21 = var21.RIVE_ALIGNMENTS;
            var21 = var21[var22];
            var19['alignment'] = var21;
            var15 = var19;
case 127:
            var33 = var5;
            var32 = var15;
            var15 = copyDataProperties(var33, var32);
            if(!(var8 == var20)) { _fun0001_ip = 128; continue _fun0001 }
case 129:
            var15 = {};
            _fun0001_ip = 130; continue _fun0001;
case 128:
            var19 = {};
            var19['layoutScaleFactor'] = var20;
            var15 = var19;
case 130:
            var33 = var5;
            var32 = var15;
            var15 = copyDataProperties(var33, var32);
            var15 = 'style';
            var5[14] = var18;
            var15 = 'ref';
            var5[14] = var17;
            if(var13) { _fun0001_ip = 131; continue _fun0001 }
case 132:
            var13 = {};
            _fun0001_ip = 133; continue _fun0001;
case 131:
            var15 = {};
            var15['onStateChanged'] = var16;
            var13 = var15;
case 133:
            var33 = var5;
            var32 = var13;
            var13 = copyDataProperties(var33, var32);
            var13 = 'artboardName';
            var5[12] = var14;
            if(!(var8 == var12)) { _fun0001_ip = 134; continue _fun0001 }
case 135:
            var12 = {};
case 134:
            var8 = 'referencedAssets';
            var5[7] = var12;
            var8 = 'dataBinding';
            var5[7] = var11;
            var8 = 'onPlay';
            var5[7] = var10;
            var8 = 'onPause';
            var5[7] = var9;
            var8 = 'onStop';
            var5[7] = var9;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var8)(var2);
    var4 = {};
    var8 = 4;
    var9 = var6[var8];
    var9 = var5.bind(var1)(var9);
    var9 = var9.PropertyType;
    var9 = var9.String;
    var4['string'] = var9;
    var9 = var6[var8];
    var9 = var5.bind(var1)(var9);
    var9 = var9.PropertyType;
    var9 = var9.Color;
    var4['color'] = var9;
    var9 = var6[var8];
    var9 = var5.bind(var1)(var9);
    var9 = var9.PropertyType;
    var9 = var9.Number;
    var4['number'] = var9;
    var9 = var6[var8];
    var9 = var5.bind(var1)(var9);
    var9 = var9.PropertyType;
    var9 = var9.Boolean;
    var4['boolean'] = var9;
    var9 = var6[var8];
    var9 = var5.bind(var1)(var9);
    var9 = var9.PropertyType;
    var9 = var9.Trigger;
    var4['trigger'] = var9;
    var9 = var6[var8];
    var9 = var5.bind(var1)(var9);
    var9 = var9.PropertyType;
    var9 = var9.Image;
    var4['image'] = var9;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var8 = var8.PropertyType;
    var8 = var8.Artboard;
    var4['artboard'] = var8;
    var _closure1_slot12 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = '../discord_common/js/packages/design/components/Rive/native/BaseRive.tsx';
    var4 = var5.bind(var6)(var4);
    var3['BaseRive'] = var2;
    return var1;
})();