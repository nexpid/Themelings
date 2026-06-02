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
    var4 = var2.View;
    var _closure1_slot5 = var4;
    var4 = var2.findNodeHandle;
    var _closure1_slot6 = var4;
    var9 = var2.StyleSheet;
    var4 = var2.Image;
    var _closure1_slot7 = var4;
    var4 = var2.PixelRatio;
    var _closure1_slot8 = var4;
    var2 = var2.Platform;
    var2 = 3;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.jsx;
    var _closure1_slot9 = var2;
    var4 = var9.create;
    var2 = {};
    var10 = {};
    var10['flexGrow'] = var12;
    var2['container'] = var10;
    var10 = {};
    var10['opacity'] = var11;
    var2['hidden'] = var10;
    var2 = var4.bind(var9)(var2);
    var _closure1_slot10 = var2;
    var4 = var8.forwardRef;
    var2 = function BaseRiveInner(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var3 = var2.src;
            var15 = var2.resourceName;
            var18 = var2.style;
            var14 = var2.artboard;
            var3 = var2.artboardProperties;
            var6 = var2.artboardViewModelInstances;
            var8 = var2.dataBinding;
            var13 = var2.defaultViewModelInstance;
            var12 = var2.referencedAssets;
            var11 = var2.onDataBindingChange;
            var23 = var2.stateMachine;
            var24 = var2.fit;
            var22 = var2.alignment;
            var5 = var2.withReducedMotion;
            var4 = undefined;
            if(!(var5 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = 'halt';
case 2:
            var _closure2_slot0 = var4;
            var _closure2_slot1 = var4;
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var2 = function useDefaultRenderer() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 7;
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
            var7 = _closure1_slot0;
            var2 = _closure1_slot2;
            var19 = 4;
            var2 = var2[var19];
            var7 = var7.bind(var4)(var2);
            var2 = var7.useRive;
            var9 = var2.bind(var7)();
            var7 = _closure1_slot3;
            var2 = 2;
            var7 = var7.bind(var4)(var9, var2);
            var10 = 0;
            var17 = var7[var10];
            var2 = 1;
            var2 = var7[var2];
            _closure2_slot0 = var2;
            var9 = _closure1_slot4;
            var7 = var9.useRef;
            var9 = var7.bind(var9)(var13);
            _closure2_slot1 = var9;
            var7 = 'layout';
            var20 = undefined;
            if(!(var7 === var24)) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var13 = _closure1_slot8;
            var7 = var13.get;
            var20 = var7.bind(var13)();
case 13:
            var7 = function useDataBinding(arg1, arg2, arg3, arg4) {
                var12 = arg1;
                var11 = arg2;
                var10 = arg3;
                var9 = arg4;
                var _closure3_slot0 = var12;
                var _closure3_slot1 = var11;
                var _closure3_slot2 = var10;
                var _closure3_slot3 = var9;
                var6 = _closure1_slot4;
                var4 = var6.useState;
                var3 = 0;
                var8 = var4.bind(var6)(var3);
                var7 = _closure1_slot3;
                var5 = undefined;
                var4 = 2;
                var4 = var7.bind(var5)(var8, var4);
                var13 = var4[var3];
                var3 = 1;
                var3 = var4[var3];
                var _closure3_slot4 = var3;
                var7 = var6.useCallback;
                var4 = function() {
                    var3 = _closure3_slot4;
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
                var3 = var7.bind(var6)(var4, var3);
                var4 = var6.useContext;
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var2 = 5;
                var2 = var8[var2];
                var2 = var7.bind(var5)(var2);
                var2 = var2.AccessibilityPreferencesContext;
                var2 = var4.bind(var6)(var2);
                var2 = var2.reducedMotion;
                var8 = var2.enabled;
                var _closure3_slot5 = var8;
                var4 = {};
                var4['dataBinding'] = var9;
                var4['riveRef'] = var12;
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
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                            var1 = global;
                            var3 = var1.Object;
                            var2 = var3.keys;
                            var5 = _closure4_slot0;
                            var1 = null;
                            if(!(var1 == var5)) { _fun0004_ip = 15; continue _fun0004 }
case 16:
                            var1 = {};
                            _fun0004_ip = 17; continue _fun0004;
case 15:
                            var1 = _closure4_slot0;
case 17:
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
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                            var3 = _closure4_slot2;
                            var2 = _closure4_slot1;
                            var2 = !var2;
                            if(var2) { _fun0005_ip = 18; continue _fun0005 }
case 19:
                            var2 = _closure4_slot3;
case 18:
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
                        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                            var2 = _closure4_slot5;
                            var5 = undefined;
                            if(var2) { _fun0006_ip = 20; continue _fun0006 }
case 21:
                            return var5;
case 20:
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
                var7 = var4.onDataBindingChange;
                var _closure3_slot6 = var7;
                var5 = var6.useRef;
                var4 = {};
                var4 = var5.bind(var6)(var4);
                var _closure3_slot7 = var4;
                var5 = var6.useEffect;
                var4 = new Array(7);
                var4[0] = var13;
                var4[1] = var12;
                var4[2] = var11;
                var4[3] = var10;
                var4[4] = var9;
                var4[5] = var8;
                var4[6] = var7;
                var1 = function() {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                        var1 = _closure3_slot0;
                        var4 = null;
                        if(!(var4 != var1)) { _fun0007_ip = 22; continue _fun0007 }
case 20:
                        var6 = _closure3_slot0;
                        var5 = var6.setBoolean;
                        var2 = _closure3_slot5;
                        var1 = 'reducedMotion';
                        var1 = var5.bind(var6)(var1, var2);
                        var1 = _closure3_slot3;
                        if(!(var4 != var1)) { _fun0007_ip = 23; continue _fun0007 }
case 24:
                        var1 = global;
                        var5 = var1.Object;
                        var2 = var5.entries;
                        var1 = _closure3_slot3;
                        var5 = var2.bind(var5)(var1);
                        var2 = var5.forEach;
                        var1 = function(arg1) {
                            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                                var4 = arg1;
                                var2 = var4[Symbol.iterator];
                                var4 = var2().next;
                                var6 = var4().value;
                                var3 = var2;
                                var1 = undefined;
                                var3 = var3 === var1;
                                var5 = undefined;
                                if(var3) { _fun0008_ip = 25; continue _fun0008 }
case 26:
                                var5 = var6;
case 25:
                                var6 = undefined;
                                if(var3) { _fun0008_ip = 27; continue _fun0008 }
case 28:
                                var7 = var4().value;
                                var4 = var2;
                                var4 = var4 === var1;
                                var6 = undefined;
                                var3 = var4;
                                if(var4) { _fun0008_ip = 27; continue _fun0008 }
case 29:
                                var6 = var7;
                                var3 = var4;
case 27:
                                if(var3) { _fun0008_ip = 30; continue _fun0008 }
case 31:
                                var2.return();
case 30:
                                var4 = _closure3_slot2;
                                var3 = _closure3_slot1;
                                var3 = var4[var3];
                                var7 = var3[var5];
                                var3 = _closure3_slot7;
                                var3 = var3.current;
                                var3 = var3[var5];
                                var4 = var3 !== var6;
                                var10 = 'string';
                                if(!(var10 !== var7)) { _fun0008_ip = 32; continue _fun0008 }
case 33:
                                var3 = 'color';
                                if(!(var3 !== var7)) { _fun0008_ip = 34; continue _fun0008 }
case 35:
                                var8 = 'number';
                                if(!(var8 !== var7)) { _fun0008_ip = 36; continue _fun0008 }
case 37:
                                var9 = 'boolean';
                                if(!(var9 !== var7)) { _fun0008_ip = 38; continue _fun0008 }
case 39:
                                var3 = 'trigger';
                                if(!(var3 !== var7)) { _fun0008_ip = 40; continue _fun0008 }
case 41:
                                var3 = 'image';
                                if(!(var3 !== var7)) { _fun0008_ip = 42; continue _fun0008 }
case 43:
                                var3 = 'artboard';
                                if(!(var3 === var7)) { _fun0008_ip = 44; continue _fun0008 }
case 45:
                                var3 = null;
                                var3 = var3 != var6;
                                if(!var3) { _fun0008_ip = 46; continue _fun0008 }
case 47:
                                var7 = typeof var6;
                                var3 = var10 === var7;
case 46:
                                if(!var3) { _fun0008_ip = 44; continue _fun0008 }
case 48:
                                var7 = _closure3_slot0;
                                var3 = var7.setArtboard;
                                var3 = var3.bind(var7)(var5, var6);
                                _fun0008_ip = 44; continue _fun0008;
case 42:
                                var3 = null;
                                if(!(var3 != var6)) { _fun0008_ip = 44; continue _fun0008 }
case 49:
                                if(var4) { _fun0008_ip = 50; continue _fun0008 }
case 51:
                                return var1;
case 50:
                                var10 = _closure3_slot0;
                                var7 = var10.setImage;
                                var3 = typeof var6;
                                if(!(var8 !== var3)) { _fun0008_ip = 52; continue _fun0008 }
case 53:
                                var3 = global;
                                var11 = var3.Array;
                                var3 = var11.isArray;
                                var11 = var3.bind(var11)(var6);
                                var3 = var6;
                                if(!var11) { _fun0008_ip = 54; continue _fun0008 }
case 52:
                                var12 = _closure1_slot7;
                                var11 = var12.resolveAssetSource;
                                var11 = var11.bind(var12)(var6);
                                var3 = var11.uri;
case 54:
                                var3 = var7.bind(var10)(var5, var3);
                                _fun0008_ip = 44; continue _fun0008;
case 40:
                                var3 = null;
                                if(!(var3 != var6)) { _fun0008_ip = 44; continue _fun0008 }
case 55:
                                var7 = typeof var6;
                                var3 = var6;
                                if(!(var9 !== var7)) { _fun0008_ip = 56; continue _fun0008 }
case 57:
                                var7 = 0;
                                var3 = var7 !== var6;
case 56:
                                if(!var3) { _fun0008_ip = 58; continue _fun0008 }
case 59:
                                var3 = var4;
case 58:
                                if(!var3) { _fun0008_ip = 44; continue _fun0008 }
case 60:
                                var4 = _closure3_slot0;
                                var3 = var4.trigger;
                                var3 = var3.bind(var4)(var5);
                                _fun0008_ip = 44; continue _fun0008;
case 38:
                                var3 = null;
                                if(!(var3 != var6)) { _fun0008_ip = 44; continue _fun0008 }
case 61:
                                var7 = _closure3_slot0;
                                var4 = var7.setBoolean;
                                var3 = global;
                                var3 = var3.Boolean;
                                var3 = var3.bind(var1)(var6);
                                var3 = var4.bind(var7)(var5, var3);
                                _fun0008_ip = 44; continue _fun0008;
case 36:
                                var3 = null;
                                if(!(var3 != var6)) { _fun0008_ip = 44; continue _fun0008 }
case 62:
                                var7 = _closure3_slot0;
                                var4 = var7.setNumber;
                                var3 = typeof var6;
                                if(!(var8 === var3)) { _fun0008_ip = 63; continue _fun0008 }
case 64:
                                var3 = global;
                                var8 = var3.Number;
                                var3 = var8.isNaN;
                                var8 = var3.bind(var8)(var6);
                                var3 = var6;
                                if(!var8) { _fun0008_ip = 65; continue _fun0008 }
case 63:
                                var9 = global;
                                var11 = var9.Number;
                                var10 = var11.isNaN;
                                var12 = var9.parseFloat;
                                var8 = var6.toString;
                                var8 = var8.bind(var6)();
                                var8 = var12.bind(var1)(var8);
                                var10 = var10.bind(var11)(var8);
                                var8 = 0;
                                if(var10) { _fun0008_ip = 66; continue _fun0008 }
case 67:
                                var10 = var9.parseFloat;
                                var9 = var6.toString;
                                var9 = var9.bind(var6)();
                                var8 = var10.bind(var1)(var9);
case 66:
                                var3 = var8;
case 65:
                                var3 = var4.bind(var7)(var5, var3);
                                _fun0008_ip = 44; continue _fun0008;
case 34:
                                var3 = null;
                                if(!(var3 != var6)) { _fun0008_ip = 44; continue _fun0008 }
case 68:
                                var7 = _closure3_slot0;
                                var4 = var7.setColor;
                                var3 = var6.toString;
                                var3 = var3.bind(var6)();
                                var3 = var4.bind(var7)(var5, var3);
                                _fun0008_ip = 44; continue _fun0008;
case 32:
                                var3 = null;
                                if(!(var3 != var6)) { _fun0008_ip = 44; continue _fun0008 }
case 69:
                                var4 = _closure3_slot0;
                                var3 = var4.setString;
                                var2 = var6.toString;
                                var2 = var2.bind(var6)();
                                var2 = var3.bind(var4)(var5, var2);
case 44:
                                return var1;
                            }
                        };
                        var1 = var2.bind(var5)(var1);
case 23:
                        var2 = _closure3_slot6;
                        var1 = undefined;
                        var1 = var2.bind(var1)();
                        var1 = _closure3_slot0;
                        if(!(var4 != var1)) { _fun0007_ip = 70; continue _fun0007 }
case 71:
                        var2 = _closure3_slot0;
                        var1 = var2.play;
                        var1 = var1.bind(var2)();
case 70:
                        var2 = _closure3_slot7;
                        var1 = _closure3_slot3;
                        if(!(var4 == var1)) { _fun0007_ip = 72; continue _fun0007 }
case 37:
                        var1 = {};
                        _fun0007_ip = 73; continue _fun0007;
case 72:
                        var1 = _closure3_slot3;
case 73:
                        var2['current'] = var1;
case 22:
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
            var31 = undefined;
            var30 = var2;
            var29 = var14;
            var28 = var3;
            var27 = var8;
            var7 = var31[var7](var30, var29, var28, var27, var26);
            var16 = var7.onStateUpdated;
            var7 = var7.isReadyToDisplay;
            var8 = function useDataBindingCallbacks(arg1, arg2, arg3, arg4) {
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
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                        var3 = _closure3_slot0;
                        var4 = null;
                        if(!(var4 != var3)) { _fun0009_ip = 74; continue _fun0009 }
case 75:
                        var3 = _closure3_slot3;
                        if(!(var4 != var3)) { _fun0009_ip = 74; continue _fun0009 }
case 76:
                        var3 = _closure3_slot0;
                        var5 = var4 == var3;
                        var6 = undefined;
                        var3 = undefined;
                        if(var5) { _fun0009_ip = 77; continue _fun0009 }
case 78:
                        var5 = _closure3_slot0;
                        var5 = var5.internalNativeEmitter;
                        var5 = var4 == var5;
                        var3 = undefined;
                        if(var5) { _fun0009_ip = 77; continue _fun0009 }
case 27:
                        var7 = _closure3_slot0;
                        var5 = var7.internalNativeEmitter;
                        var3 = var5.bind(var7)();
case 77:
                        var _closure4_slot0 = var3;
                        if(!(var4 != var3)) { _fun0009_ip = 79; continue _fun0009 }
case 80:
                        var5 = _closure1_slot6;
                        var7 = _closure3_slot0;
                        var3 = var7.viewTag;
                        var3 = var3.bind(var7)();
                        var3 = var5.bind(var6)(var3);
                        var _closure4_slot1 = var3;
                        if(!(var4 == var3)) { _fun0009_ip = 81; continue _fun0009 }
case 74:
                        var3 = undefined;
                        return var3;
case 81:
                        var3 = new Array(0);
                        var _closure4_slot2 = var3;
                        var3 = global;
                        var4 = var3.Object;
                        var3 = var4.entries;
                        var2 = _closure3_slot3;
                        var4 = var3.bind(var4)(var2);
                        var3 = var4.forEach;
                        var2 = function(arg1) {
                            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                                var6 = arg1;
                                var4 = var6[Symbol.iterator];
                                var6 = var4().next;
                                var3 = var6().value;
                                var2 = var4;
                                var1 = undefined;
                                var5 = var2 === var1;
                                var2 = undefined;
                                if(var5) { _fun0010_ip = 25; continue _fun0010 }
case 26:
                                var2 = var3;
case 25:
                                var3 = undefined;
                                if(var5) { _fun0010_ip = 27; continue _fun0010 }
case 28:
                                var7 = var6().value;
                                var6 = var4;
                                var6 = var6 === var1;
                                var3 = undefined;
                                var5 = var6;
                                if(var6) { _fun0010_ip = 27; continue _fun0010 }
case 29:
                                var3 = var7;
                                var5 = var6;
case 27:
                                if(var5) { _fun0010_ip = 30; continue _fun0010 }
case 31:
                                var4.return();
case 30:
                                var5 = _closure3_slot2;
                                var4 = _closure3_slot1;
                                var4 = var5[var4];
                                var4 = var4[var2];
                                var5 = null;
                                if(!(var5 != var4)) { _fun0010_ip = 82; continue _fun0010 }
case 23:
                                if(!(var5 != var3)) { _fun0010_ip = 82; continue _fun0010 }
case 83:
                                var6 = new Array(4);
                                var6[0] = var2;
                                var2 = _closure1_slot11;
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
case 82:
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
case 79:
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
            var30 = var2;
            var29 = var14;
            var28 = var3;
            var27 = var11;
            var8 = var31[var8](var30, var29, var28, var27, var26);
            var6 = var6[var14];
            var8 = null;
            if(!(var8 == var6)) { _fun0001_ip = 84; continue _fun0001 }
case 85:
            var6 = new Array(0);
case 84:
            var6 = var6.length;
            var6 = var6 > var10;
            _closure2_slot2 = var6;
            var9 = var9.current;
            var13 = var8 != var9;
            if(var13) { _fun0001_ip = 86; continue _fun0001 }
case 87:
            var13 = var6;
case 86:
            var10 = _closure1_slot4;
            var11 = var10.useMemo;
            var9 = new Array(1);
            var9[0] = var6;
            var6 = function() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var1 = _closure2_slot1;
                    var3 = var1.current;
                    var1 = null;
                    if(!(var1 == var3)) { _fun0011_ip = 88; continue _fun0011 }
case 89:
                    var1 = _closure2_slot2;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 4;
                    var4 = var4[var3];
                    var3 = undefined;
                    var5 = var5.bind(var3)(var4);
                    if(var1) { _fun0011_ip = 90; continue _fun0011 }
case 91:
                    var1 = var5.BindEmpty;
                    var1 = var1.bind(var5)();
                    _fun0011_ip = 92; continue _fun0011;
case 90:
                    var4 = var5.AutoBind;
                    var3 = true;
                    var1 = var4.bind(var5)(var3);
case 92:
                    _fun0011_ip = 93; continue _fun0011;
case 88:
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
case 93:
                    return var1;
                }
            };
            var11 = var11.bind(var10)(var6, var9);
            var26 = var10.useImperativeHandle;
            var25 = new Array(1);
            var25[0] = var2;
            var9 = arg2;
            var6 = function() {
                var1 = {};
                var3 = function play() {
                    _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                        var3 = _closure2_slot0;
                        var1 = null;
                        var3 = var1 == var3;
                        var1 = undefined;
                        if(var3) { _fun0012_ip = 28; continue _fun0012 }
case 89:
                        var3 = _closure2_slot0;
                        var2 = var3.play;
                        var1 = var2.bind(var3)();
case 28:
                        return var1;
                    }
                };
                var1['play'] = var3;
                var3 = function pause() {
                    _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                        var3 = _closure2_slot0;
                        var1 = null;
                        var3 = var1 == var3;
                        var1 = undefined;
                        if(var3) { _fun0013_ip = 28; continue _fun0013 }
case 89:
                        var3 = _closure2_slot0;
                        var2 = var3.pause;
                        var1 = var2.bind(var3)();
case 28:
                        return var1;
                    }
                };
                var1['pause'] = var3;
                var2 = function stop() {
                    _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                        var3 = _closure2_slot0;
                        var1 = null;
                        var3 = var1 == var3;
                        var1 = undefined;
                        if(var3) { _fun0014_ip = 28; continue _fun0014 }
case 89:
                        var3 = _closure2_slot0;
                        var2 = var3.stop;
                        var1 = var2.bind(var3)();
case 28:
                        return var1;
                    }
                };
                var1['stop'] = var2;
                return var1;
            };
            var6 = var26.bind(var10)(var9, var6, var25);
            var9 = var10.useContext;
            var25 = _closure1_slot0;
            var26 = _closure1_slot2;
            var6 = 5;
            var6 = var26[var6];
            var6 = var25.bind(var4)(var6);
            var6 = var6.AccessibilityPreferencesContext;
            var6 = var9.bind(var10)(var6);
            var6 = var6.reducedMotion;
            var6 = var6.enabled;
            var9 = var3[var14];
            var10 = var8 == var9;
            var3 = undefined;
            if(var10) { _fun0001_ip = 94; continue _fun0001 }
case 95:
            var3 = var9.reducedMotion;
case 94:
            var3 = var8 != var3;
            if(!var6) { _fun0001_ip = 96; continue _fun0001 }
case 97:
            var6 = !var3;
case 96:
            if(!var6) { _fun0001_ip = 98; continue _fun0001 }
case 99:
            var3 = 'play';
            var6 = var3 !== var5;
case 98:
            _closure2_slot3 = var6;
            var5 = _closure1_slot4;
            var3 = var5.useRef;
            var3 = var3.bind(var5)(var8);
            _closure2_slot4 = var3;
            var9 = var5.useCallback;
            var3 = new Array(2);
            var3[0] = var6;
            var3[1] = var2;
            var2 = function() {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                    var2 = _closure2_slot3;
                    if(!var2) { _fun0015_ip = 100; continue _fun0015 }
case 101:
                    var4 = _closure2_slot0;
                    var3 = null;
                    var2 = var3 != var4;
case 100:
                    if(!var2) { _fun0015_ip = 78; continue _fun0015 }
case 76:
                    var3 = _closure2_slot4;
                    var4 = var3.current;
                    var3 = null;
                    var2 = var3 == var4;
case 78:
                    if(!var2) { _fun0015_ip = 7; continue _fun0015 }
case 102:
                    var2 = _closure2_slot4;
                    var1 = global;
                    var5 = var1.setTimeout;
                    var4 = undefined;
                    var3 = function() {
                        var3 = _closure2_slot0;
                        var2 = var3.pause;
                        var2 = var2.bind(var3)();
                        var2 = _closure2_slot4;
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
            var10 = var9.bind(var5)(var2, var3);
            var9 = var5.useCallback;
            var3 = function() {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                    var2 = _closure2_slot4;
                    var3 = var2.current;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0016_ip = 103; continue _fun0016 }
case 89:
                    var3 = global;
                    var5 = var3.clearTimeout;
                    var3 = _closure2_slot4;
                    var4 = var3.current;
                    var3 = undefined;
                    var3 = var5.bind(var3)(var4);
                    var1 = _closure2_slot4;
                    var1['current'] = var2;
case 103:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = new Array(0);
            var9 = var9.bind(var5)(var3, var2);
            var3 = var5.useEffect;
            var2 = new Array(1);
            var2[0] = var6;
            var1 = function() {
                var1 = function() {
                    _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                        var2 = _closure2_slot4;
                        var3 = var2.current;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0017_ip = 103; continue _fun0017 }
case 89:
                        var3 = global;
                        var5 = var3.clearTimeout;
                        var3 = _closure2_slot4;
                        var4 = var3.current;
                        var3 = undefined;
                        var3 = var5.bind(var3)(var4);
                        var1 = _closure2_slot4;
                        var1['current'] = var2;
case 103:
                        var1 = undefined;
                        return var1;
                    }
                };
                return var1;
            };
            var1 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot9;
            var2 = _closure1_slot5;
            var1 = {};
            var5 = _closure1_slot10;
            var6 = var5.container;
            var5 = new Array(2);
            var5[0] = var6;
            var6 = undefined;
            if(var7) { _fun0001_ip = 104; continue _fun0001 }
case 105:
            var7 = _closure1_slot10;
            var6 = var7.hidden;
case 104:
            var5[1] = var6;
            var1['style'] = var5;
            var7 = _closure1_slot9;
            var6 = _closure1_slot1;
            var5 = _closure1_slot2;
            var5 = var5[var19];
            var6 = var6.bind(var4)(var5);
            var5 = {};
            var5['resourceName'] = var15;
            if(!(var8 == var23)) { _fun0001_ip = 106; continue _fun0001 }
case 107:
            var15 = {};
            _fun0001_ip = 108; continue _fun0001;
case 106:
            var19 = {};
            var19['stateMachine'] = var23;
            var15 = var19;
case 108:
            var30 = var5;
            var29 = var15;
            var15 = copyDataProperties(var30, var29);
            if(!(var8 == var24)) { _fun0001_ip = 109; continue _fun0001 }
case 110:
            var15 = {};
            _fun0001_ip = 111; continue _fun0001;
case 109:
            var19 = {};
            var25 = _closure1_slot0;
            var26 = _closure1_slot2;
            var23 = 6;
            var23 = var26[var23];
            var23 = var25.bind(var4)(var23);
            var23 = var23.RIVE_FITS;
            var23 = var23[var24];
            var19['fit'] = var23;
            var15 = var19;
case 111:
            var30 = var5;
            var29 = var15;
            var15 = copyDataProperties(var30, var29);
            if(!(var8 == var22)) { _fun0001_ip = 112; continue _fun0001 }
case 113:
            var15 = {};
            _fun0001_ip = 114; continue _fun0001;
case 112:
            var19 = {};
            var23 = _closure1_slot0;
            var24 = _closure1_slot2;
            var21 = 6;
            var21 = var24[var21];
            var21 = var23.bind(var4)(var21);
            var21 = var21.RIVE_ALIGNMENTS;
            var21 = var21[var22];
            var19['alignment'] = var21;
            var15 = var19;
case 114:
            var30 = var5;
            var29 = var15;
            var15 = copyDataProperties(var30, var29);
            if(!(var8 == var20)) { _fun0001_ip = 115; continue _fun0001 }
case 116:
            var15 = {};
            _fun0001_ip = 117; continue _fun0001;
case 115:
            var19 = {};
            var19['layoutScaleFactor'] = var20;
            var15 = var19;
case 117:
            var30 = var5;
            var29 = var15;
            var15 = copyDataProperties(var30, var29);
            var15 = 'style';
            var5[14] = var18;
            var15 = 'ref';
            var5[14] = var17;
            if(var13) { _fun0001_ip = 118; continue _fun0001 }
case 119:
            var13 = {};
            _fun0001_ip = 120; continue _fun0001;
case 118:
            var15 = {};
            var15['onStateChanged'] = var16;
            var13 = var15;
case 120:
            var30 = var5;
            var29 = var13;
            var13 = copyDataProperties(var30, var29);
            var13 = 'artboardName';
            var5[12] = var14;
            if(!(var8 == var12)) { _fun0001_ip = 121; continue _fun0001 }
case 122:
            var12 = {};
case 121:
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
    var _closure1_slot11 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = '../discord_common/js/packages/design/components/Rive/native/BaseRive.tsx';
    var4 = var5.bind(var6)(var4);
    var3['BaseRive'] = var2;
    return var1;
})();