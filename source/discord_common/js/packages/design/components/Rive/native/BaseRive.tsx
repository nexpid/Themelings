// discord_common/js/packages/design/components/Rive/native/BaseRive.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var10 = 0;
    var4 = var6[var10];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var11 = 1;
    var7 = var6[var11];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.View;
    var _closure1_slot5 = var7;
    var7 = var4.findNodeHandle;
    var _closure1_slot6 = var7;
    var8 = var4.StyleSheet;
    var4 = var4.Image;
    var _closure1_slot7 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot8 = var4;
    var7 = var8.create;
    var4 = {};
    var9 = {};
    var9['flexGrow'] = var11;
    var4['container'] = var9;
    var9 = {};
    var9['opacity'] = var10;
    var4['hidden'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot9 = var4;
    var4 = {};
    var7 = 4;
    var8 = var6[var7];
    var8 = var5.bind(var1)(var8);
    var8 = var8.PropertyType;
    var8 = var8.String;
    var4['string'] = var8;
    var8 = var6[var7];
    var8 = var5.bind(var1)(var8);
    var8 = var8.PropertyType;
    var8 = var8.Color;
    var4['color'] = var8;
    var8 = var6[var7];
    var8 = var5.bind(var1)(var8);
    var8 = var8.PropertyType;
    var8 = var8.Number;
    var4['number'] = var8;
    var8 = var6[var7];
    var8 = var5.bind(var1)(var8);
    var8 = var8.PropertyType;
    var8 = var8.Boolean;
    var4['boolean'] = var8;
    var8 = var6[var7];
    var8 = var5.bind(var1)(var8);
    var8 = var8.PropertyType;
    var8 = var8.Trigger;
    var4['trigger'] = var8;
    var8 = var6[var7];
    var8 = var5.bind(var1)(var8);
    var8 = var8.PropertyType;
    var8 = var8.Image;
    var4['image'] = var8;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.PropertyType;
    var7 = var7.Artboard;
    var4['artboard'] = var7;
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = '../discord_common/js/packages/design/components/Rive/native/BaseRive.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function BaseRive(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var16 = var2.src;
            var15 = var2.style;
            var11 = var2.artboard;
            var5 = var2.artboardProperties;
            var17 = var2.dataBinding;
            var13 = var2.defaultViewModelInstance;
            var8 = var2.referencedAssets;
            var3 = var2.onDataBindingChange;
            var2 = function useDefaultRenderer() {
                var4 = _closure1_slot4;
                var3 = var4.useEffect;
                var2 = function() {
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 4;
                    var3 = var7[var2];
                    var1 = undefined;
                    var3 = var6.bind(var1)(var3);
                    var5 = var3.RiveRenderer;
                    var4 = var5.defaultRenderer;
                    var3 = var7[var2];
                    var3 = var6.bind(var1)(var3);
                    var3 = var3.RiveRendererIOS;
                    var3 = var3.CoreGraphics;
                    var2 = var7[var2];
                    var2 = var6.bind(var1)(var2);
                    var2 = var2.RiveRendererAndroid;
                    var2 = var2.Canvas;
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                };
                var1 = new Array(0);
                var1 = var3.bind(var4)(var2, var1);
                var1 = undefined;
                return var1;
            };
            var4 = undefined;
            var2 = var2.bind(var4)();
            var6 = _closure1_slot0;
            var2 = _closure1_slot2;
            var12 = 4;
            var2 = var2[var12];
            var6 = var6.bind(var4)(var2);
            var2 = var6.useRive;
            var9 = var2.bind(var6)();
            var6 = _closure1_slot3;
            var2 = 2;
            var6 = var6.bind(var4)(var9, var2);
            var2 = 0;
            var14 = var6[var2];
            var2 = 1;
            var2 = var6[var2];
            var9 = _closure1_slot4;
            var6 = var9.useRef;
            var9 = var6.bind(var9)(var13);
            var6 = function useDataBinding(arg1, arg2, arg3, arg4) {
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
                        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                            var1 = global;
                            var3 = var1.Object;
                            var2 = var3.keys;
                            var5 = _closure4_slot0;
                            var1 = null;
                            if(!(var1 == var5)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                            var1 = {};
                            _fun0002_ip = 4; continue _fun0002;
case 2:
                            var1 = _closure4_slot0;
case 4:
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
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                            var3 = _closure4_slot2;
                            var2 = _closure4_slot1;
                            var2 = !var2;
                            if(var2) { _fun0003_ip = 5; continue _fun0003 }
case 6:
                            var2 = _closure4_slot3;
case 5:
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
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                            var2 = _closure4_slot5;
                            var5 = undefined;
                            if(var2) { _fun0004_ip = 7; continue _fun0004 }
case 8:
                            return var5;
case 7:
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
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                        var1 = _closure3_slot0;
                        var4 = null;
                        if(!(var4 != var1)) { _fun0005_ip = 9; continue _fun0005 }
case 7:
                        var6 = _closure3_slot0;
                        var5 = var6.setBoolean;
                        var2 = _closure3_slot5;
                        var1 = 'reducedMotion';
                        var1 = var5.bind(var6)(var1, var2);
                        var1 = _closure3_slot3;
                        if(!(var4 != var1)) { _fun0005_ip = 10; continue _fun0005 }
case 11:
                        var1 = global;
                        var5 = var1.Object;
                        var2 = var5.entries;
                        var1 = _closure3_slot3;
                        var5 = var2.bind(var5)(var1);
                        var2 = var5.forEach;
                        var1 = function(arg1) {
                            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                                var4 = arg1;
                                var2 = var4[Symbol.iterator];
                                var4 = var2().next;
                                var6 = var4().value;
                                var3 = var2;
                                var1 = undefined;
                                var3 = var3 === var1;
                                var5 = undefined;
                                if(var3) { _fun0006_ip = 12; continue _fun0006 }
case 13:
                                var5 = var6;
case 12:
                                var6 = undefined;
                                if(var3) { _fun0006_ip = 14; continue _fun0006 }
case 15:
                                var7 = var4().value;
                                var4 = var2;
                                var4 = var4 === var1;
                                var6 = undefined;
                                var3 = var4;
                                if(var4) { _fun0006_ip = 14; continue _fun0006 }
case 16:
                                var6 = var7;
                                var3 = var4;
case 14:
                                if(var3) { _fun0006_ip = 17; continue _fun0006 }
case 18:
                                var2.return();
case 17:
                                var4 = _closure3_slot2;
                                var3 = _closure3_slot1;
                                var3 = var4[var3];
                                var4 = var3[var5];
                                var3 = _closure3_slot7;
                                var3 = var3.current;
                                var3 = var3[var5];
                                if(!(var3 !== var6)) { _fun0006_ip = 19; continue _fun0006 }
case 20:
                                var9 = 'string';
                                if(!(var9 !== var4)) { _fun0006_ip = 21; continue _fun0006 }
case 22:
                                var3 = 'color';
                                if(!(var3 !== var4)) { _fun0006_ip = 23; continue _fun0006 }
case 24:
                                var8 = 'number';
                                if(!(var8 !== var4)) { _fun0006_ip = 25; continue _fun0006 }
case 26:
                                var7 = 'boolean';
                                if(!(var7 !== var4)) { _fun0006_ip = 27; continue _fun0006 }
case 9:
                                var3 = 'trigger';
                                if(!(var3 !== var4)) { _fun0006_ip = 28; continue _fun0006 }
case 29:
                                var3 = 'image';
                                if(!(var3 !== var4)) { _fun0006_ip = 30; continue _fun0006 }
case 31:
                                var3 = 'artboard';
                                if(!(var3 === var4)) { _fun0006_ip = 19; continue _fun0006 }
case 32:
                                var3 = null;
                                var3 = var3 != var6;
                                if(!var3) { _fun0006_ip = 33; continue _fun0006 }
case 34:
                                var4 = typeof var6;
                                var3 = var9 === var4;
case 33:
                                if(!var3) { _fun0006_ip = 19; continue _fun0006 }
case 35:
                                var4 = _closure3_slot0;
                                var3 = var4.setArtboard;
                                var3 = var3.bind(var4)(var5, var6);
                                _fun0006_ip = 19; continue _fun0006;
case 30:
                                var3 = null;
                                if(!(var3 != var6)) { _fun0006_ip = 19; continue _fun0006 }
case 36:
                                var9 = _closure3_slot0;
                                var4 = var9.setImage;
                                var3 = typeof var6;
                                if(!(var8 !== var3)) { _fun0006_ip = 37; continue _fun0006 }
case 38:
                                var3 = global;
                                var10 = var3.Array;
                                var3 = var10.isArray;
                                var10 = var3.bind(var10)(var6);
                                var3 = var6;
                                if(!var10) { _fun0006_ip = 39; continue _fun0006 }
case 37:
                                var11 = _closure1_slot7;
                                var10 = var11.resolveAssetSource;
                                var10 = var10.bind(var11)(var6);
                                var3 = var10.uri;
case 39:
                                var3 = var4.bind(var9)(var5, var3);
                                _fun0006_ip = 19; continue _fun0006;
case 28:
                                var3 = null;
                                if(!(var3 != var6)) { _fun0006_ip = 19; continue _fun0006 }
case 40:
                                var4 = typeof var6;
                                var3 = var6;
                                if(!(var7 !== var4)) { _fun0006_ip = 41; continue _fun0006 }
case 42:
                                var4 = 0;
                                var3 = var4 !== var6;
case 41:
                                if(!var3) { _fun0006_ip = 43; continue _fun0006 }
case 44:
                                var4 = _closure3_slot7;
                                var4 = var4.current;
                                var4 = var4[var5];
                                var3 = var4 !== var6;
case 43:
                                if(!var3) { _fun0006_ip = 19; continue _fun0006 }
case 45:
                                var4 = _closure3_slot0;
                                var3 = var4.trigger;
                                var3 = var3.bind(var4)(var5);
                                _fun0006_ip = 19; continue _fun0006;
case 27:
                                var3 = null;
                                if(!(var3 != var6)) { _fun0006_ip = 19; continue _fun0006 }
case 46:
                                var7 = _closure3_slot0;
                                var4 = var7.setBoolean;
                                var3 = global;
                                var3 = var3.Boolean;
                                var3 = var3.bind(var1)(var6);
                                var3 = var4.bind(var7)(var5, var3);
                                _fun0006_ip = 19; continue _fun0006;
case 25:
                                var3 = null;
                                if(!(var3 != var6)) { _fun0006_ip = 19; continue _fun0006 }
case 47:
                                var7 = _closure3_slot0;
                                var4 = var7.setNumber;
                                var3 = typeof var6;
                                if(!(var8 === var3)) { _fun0006_ip = 48; continue _fun0006 }
case 49:
                                var3 = global;
                                var8 = var3.Number;
                                var3 = var8.isNaN;
                                var8 = var3.bind(var8)(var6);
                                var3 = var6;
                                if(!var8) { _fun0006_ip = 50; continue _fun0006 }
case 48:
                                var9 = global;
                                var11 = var9.Number;
                                var10 = var11.isNaN;
                                var12 = var9.parseFloat;
                                var8 = var6.toString;
                                var8 = var8.bind(var6)();
                                var8 = var12.bind(var1)(var8);
                                var10 = var10.bind(var11)(var8);
                                var8 = 0;
                                if(var10) { _fun0006_ip = 51; continue _fun0006 }
case 52:
                                var10 = var9.parseFloat;
                                var9 = var6.toString;
                                var9 = var9.bind(var6)();
                                var8 = var10.bind(var1)(var9);
case 51:
                                var3 = var8;
case 50:
                                var3 = var4.bind(var7)(var5, var3);
                                _fun0006_ip = 19; continue _fun0006;
case 23:
                                var3 = null;
                                if(!(var3 != var6)) { _fun0006_ip = 19; continue _fun0006 }
case 53:
                                var7 = _closure3_slot0;
                                var4 = var7.setColor;
                                var3 = var6.toString;
                                var3 = var3.bind(var6)();
                                var3 = var4.bind(var7)(var5, var3);
                                _fun0006_ip = 19; continue _fun0006;
case 21:
                                var3 = null;
                                if(!(var3 != var6)) { _fun0006_ip = 19; continue _fun0006 }
case 54:
                                var4 = _closure3_slot0;
                                var3 = var4.setString;
                                var2 = var6.toString;
                                var2 = var2.bind(var6)();
                                var2 = var3.bind(var4)(var5, var2);
case 19:
                                return var1;
                            }
                        };
                        var1 = var2.bind(var5)(var1);
case 10:
                        var2 = _closure3_slot6;
                        var1 = undefined;
                        var1 = var2.bind(var1)();
                        var1 = _closure3_slot0;
                        if(!(var4 != var1)) { _fun0005_ip = 55; continue _fun0005 }
case 56:
                        var2 = _closure3_slot0;
                        var1 = var2.play;
                        var1 = var1.bind(var2)();
case 55:
                        var2 = _closure3_slot7;
                        var1 = _closure3_slot3;
                        if(!(var4 == var1)) { _fun0005_ip = 57; continue _fun0005 }
case 58:
                        var1 = {};
                        _fun0005_ip = 59; continue _fun0005;
case 57:
                        var1 = _closure3_slot3;
case 59:
                        var2['current'] = var1;
case 9:
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
            var21 = undefined;
            var20 = var2;
            var19 = var11;
            var18 = var5;
            var6 = var21[var6](var20, var19, var18, var17, var16);
            var13 = var6.onStateUpdated;
            var7 = var6.isReadyToDisplay;
            var1 = function useDataBindingCallbacks(arg1, arg2, arg3, arg4) {
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
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                        var3 = _closure3_slot0;
                        var4 = null;
                        if(!(var4 != var3)) { _fun0007_ip = 22; continue _fun0007 }
case 60:
                        var3 = _closure3_slot3;
                        if(!(var4 != var3)) { _fun0007_ip = 22; continue _fun0007 }
case 61:
                        var3 = _closure3_slot0;
                        var5 = var4 == var3;
                        var6 = undefined;
                        var3 = undefined;
                        if(var5) { _fun0007_ip = 62; continue _fun0007 }
case 63:
                        var5 = _closure3_slot0;
                        var5 = var5.internalNativeEmitter;
                        var5 = var4 == var5;
                        var3 = undefined;
                        if(var5) { _fun0007_ip = 62; continue _fun0007 }
case 14:
                        var7 = _closure3_slot0;
                        var5 = var7.internalNativeEmitter;
                        var3 = var5.bind(var7)();
case 62:
                        var _closure4_slot0 = var3;
                        if(!(var4 != var3)) { _fun0007_ip = 64; continue _fun0007 }
case 65:
                        var5 = _closure1_slot6;
                        var7 = _closure3_slot0;
                        var3 = var7.viewTag;
                        var3 = var3.bind(var7)();
                        var3 = var5.bind(var6)(var3);
                        var _closure4_slot1 = var3;
                        if(!(var4 == var3)) { _fun0007_ip = 66; continue _fun0007 }
case 22:
                        var3 = undefined;
                        return var3;
case 66:
                        var3 = new Array(0);
                        var _closure4_slot2 = var3;
                        var3 = global;
                        var4 = var3.Object;
                        var3 = var4.entries;
                        var2 = _closure3_slot3;
                        var4 = var3.bind(var4)(var2);
                        var3 = var4.forEach;
                        var2 = function(arg1) {
                            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                                var6 = arg1;
                                var4 = var6[Symbol.iterator];
                                var6 = var4().next;
                                var3 = var6().value;
                                var2 = var4;
                                var1 = undefined;
                                var5 = var2 === var1;
                                var2 = undefined;
                                if(var5) { _fun0008_ip = 12; continue _fun0008 }
case 13:
                                var2 = var3;
case 12:
                                var3 = undefined;
                                if(var5) { _fun0008_ip = 14; continue _fun0008 }
case 15:
                                var7 = var6().value;
                                var6 = var4;
                                var6 = var6 === var1;
                                var3 = undefined;
                                var5 = var6;
                                if(var6) { _fun0008_ip = 14; continue _fun0008 }
case 16:
                                var3 = var7;
                                var5 = var6;
case 14:
                                if(var5) { _fun0008_ip = 17; continue _fun0008 }
case 18:
                                var4.return();
case 17:
                                var5 = _closure3_slot2;
                                var4 = _closure3_slot1;
                                var4 = var5[var4];
                                var4 = var4[var2];
                                var5 = null;
                                if(!(var5 != var4)) { _fun0008_ip = 67; continue _fun0008 }
case 10:
                                if(!(var5 != var3)) { _fun0008_ip = 67; continue _fun0008 }
case 68:
                                var6 = new Array(4);
                                var6[0] = var2;
                                var2 = _closure1_slot10;
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
case 67:
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
case 64:
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
            var20 = var2;
            var19 = var11;
            var18 = var5;
            var17 = var3;
            var1 = var21[var1](var20, var19, var18, var17, var16);
            var3 = _closure1_slot8;
            var2 = _closure1_slot5;
            var1 = {};
            var5 = _closure1_slot9;
            var6 = var5.container;
            var5 = new Array(2);
            var5[0] = var6;
            var6 = undefined;
            if(var7) { _fun0001_ip = 69; continue _fun0001 }
case 70:
            var7 = _closure1_slot9;
            var6 = var7.hidden;
case 69:
            var5[1] = var6;
            var1['style'] = var5;
            var7 = _closure1_slot8;
            var6 = _closure1_slot1;
            var5 = _closure1_slot2;
            var5 = var5[var12];
            var6 = var6.bind(var4)(var5);
            var5 = {};
            var5['url'] = var16;
            var5['style'] = var15;
            var5['ref'] = var14;
            var5['onStateChanged'] = var13;
            var5['artboardName'] = var11;
            var11 = null;
            if(!(var11 == var8)) { _fun0001_ip = 39; continue _fun0001 }
case 71:
            var8 = {};
case 39:
            var5['referencedAssets'] = var8;
            var8 = var9.current;
            if(!(var11 == var8)) { _fun0001_ip = 72; continue _fun0001 }
case 73:
            var11 = _closure1_slot0;
            var8 = _closure1_slot2;
            var8 = var8[var12];
            var13 = var11.bind(var4)(var8);
            var11 = var13.AutoBind;
            var8 = true;
            var8 = var11.bind(var13)(var8);
            _fun0001_ip = 74; continue _fun0001;
case 72:
            var11 = _closure1_slot0;
            var10 = _closure1_slot2;
            var10 = var10[var12];
            var11 = var11.bind(var4)(var10);
            var10 = var11.BindByName;
            var9 = var9.current;
            var8 = var10.bind(var11)(var9);
case 74:
            var5['dataBinding'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['BaseRive'] = var2;
    return var1;
})();