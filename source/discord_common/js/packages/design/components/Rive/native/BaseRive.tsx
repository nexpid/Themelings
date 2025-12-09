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
    var4 = 7;
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
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 6;
                    var4 = var4[var1];
                    var1 = undefined;
                    var5 = var5.bind(var1)(var4);
                    var4 = var5.useManaContext;
                    var4 = var4.bind(var5)();
                    var5 = var4.experiments;
                    var4 = null;
                    var7 = var4 == var5;
                    var6 = undefined;
                    if(var7) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var7 = var5.enabledExperiments;
                    var4 = var4 == var7;
                    var6 = undefined;
                    if(var4) { _fun0002_ip = 2; continue _fun0002 }
case 4:
                    var5 = var7.includes;
                    var4 = 'rive-mobile-renderer';
                    var6 = var5.bind(var7)(var4);
case 2:
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
                            if(var3) { _fun0003_ip = 5; continue _fun0003 }
case 6:
                            var3 = var7.CoreGraphics;
                            _fun0003_ip = 7; continue _fun0003;
case 5:
                            var3 = var7.Rive;
case 7:
                            var2 = _closure3_slot0;
                            var7 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var6 = var6[var8];
                            var6 = var7.bind(var1)(var6);
                            var6 = var6.RiveRendererAndroid;
                            if(var2) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                            var2 = var6.Canvas;
                            _fun0003_ip = 10; continue _fun0003;
case 8:
                            var2 = var6.Rive;
case 10:
                            var2 = var4.bind(var5)(var3, var2);
                            return var1;
                        }
                    };
                    var2 = var4.bind(var5)(var2, var3);
                    return var1;
                }
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
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                            var1 = global;
                            var3 = var1.Object;
                            var2 = var3.keys;
                            var5 = _closure4_slot0;
                            var1 = null;
                            if(!(var1 == var5)) { _fun0004_ip = 11; continue _fun0004 }
case 12:
                            var1 = {};
                            _fun0004_ip = 13; continue _fun0004;
case 11:
                            var1 = _closure4_slot0;
case 13:
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
                            if(var2) { _fun0005_ip = 14; continue _fun0005 }
case 15:
                            var2 = _closure4_slot3;
case 14:
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
                            if(var2) { _fun0006_ip = 16; continue _fun0006 }
case 17:
                            return var5;
case 16:
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
                        if(!(var4 != var1)) { _fun0007_ip = 18; continue _fun0007 }
case 16:
                        var6 = _closure3_slot0;
                        var5 = var6.setBoolean;
                        var2 = _closure3_slot5;
                        var1 = 'reducedMotion';
                        var1 = var5.bind(var6)(var1, var2);
                        var1 = _closure3_slot3;
                        if(!(var4 != var1)) { _fun0007_ip = 19; continue _fun0007 }
case 20:
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
                                if(var3) { _fun0008_ip = 21; continue _fun0008 }
case 22:
                                var5 = var6;
case 21:
                                var6 = undefined;
                                if(var3) { _fun0008_ip = 23; continue _fun0008 }
case 24:
                                var7 = var4().value;
                                var4 = var2;
                                var4 = var4 === var1;
                                var6 = undefined;
                                var3 = var4;
                                if(var4) { _fun0008_ip = 23; continue _fun0008 }
case 25:
                                var6 = var7;
                                var3 = var4;
case 23:
                                if(var3) { _fun0008_ip = 26; continue _fun0008 }
case 27:
                                var2.return();
case 26:
                                var4 = _closure3_slot2;
                                var3 = _closure3_slot1;
                                var3 = var4[var3];
                                var4 = var3[var5];
                                var3 = _closure3_slot7;
                                var3 = var3.current;
                                var3 = var3[var5];
                                if(!(var3 !== var6)) { _fun0008_ip = 28; continue _fun0008 }
case 29:
                                var9 = 'string';
                                if(!(var9 !== var4)) { _fun0008_ip = 30; continue _fun0008 }
case 31:
                                var3 = 'color';
                                if(!(var3 !== var4)) { _fun0008_ip = 32; continue _fun0008 }
case 8:
                                var8 = 'number';
                                if(!(var8 !== var4)) { _fun0008_ip = 33; continue _fun0008 }
case 34:
                                var7 = 'boolean';
                                if(!(var7 !== var4)) { _fun0008_ip = 35; continue _fun0008 }
case 18:
                                var3 = 'trigger';
                                if(!(var3 !== var4)) { _fun0008_ip = 36; continue _fun0008 }
case 37:
                                var3 = 'image';
                                if(!(var3 !== var4)) { _fun0008_ip = 38; continue _fun0008 }
case 39:
                                var3 = 'artboard';
                                if(!(var3 === var4)) { _fun0008_ip = 28; continue _fun0008 }
case 40:
                                var3 = null;
                                var3 = var3 != var6;
                                if(!var3) { _fun0008_ip = 41; continue _fun0008 }
case 42:
                                var4 = typeof var6;
                                var3 = var9 === var4;
case 41:
                                if(!var3) { _fun0008_ip = 28; continue _fun0008 }
case 43:
                                var4 = _closure3_slot0;
                                var3 = var4.setArtboard;
                                var3 = var3.bind(var4)(var5, var6);
                                _fun0008_ip = 28; continue _fun0008;
case 38:
                                var3 = null;
                                if(!(var3 != var6)) { _fun0008_ip = 28; continue _fun0008 }
case 44:
                                var9 = _closure3_slot0;
                                var4 = var9.setImage;
                                var3 = typeof var6;
                                if(!(var8 !== var3)) { _fun0008_ip = 45; continue _fun0008 }
case 46:
                                var3 = global;
                                var10 = var3.Array;
                                var3 = var10.isArray;
                                var10 = var3.bind(var10)(var6);
                                var3 = var6;
                                if(!var10) { _fun0008_ip = 47; continue _fun0008 }
case 45:
                                var11 = _closure1_slot7;
                                var10 = var11.resolveAssetSource;
                                var10 = var10.bind(var11)(var6);
                                var3 = var10.uri;
case 47:
                                var3 = var4.bind(var9)(var5, var3);
                                _fun0008_ip = 28; continue _fun0008;
case 36:
                                var3 = null;
                                if(!(var3 != var6)) { _fun0008_ip = 28; continue _fun0008 }
case 48:
                                var4 = typeof var6;
                                var3 = var6;
                                if(!(var7 !== var4)) { _fun0008_ip = 49; continue _fun0008 }
case 50:
                                var4 = 0;
                                var3 = var4 !== var6;
case 49:
                                if(!var3) { _fun0008_ip = 51; continue _fun0008 }
case 52:
                                var4 = _closure3_slot7;
                                var4 = var4.current;
                                var4 = var4[var5];
                                var3 = var4 !== var6;
case 51:
                                if(!var3) { _fun0008_ip = 28; continue _fun0008 }
case 53:
                                var4 = _closure3_slot0;
                                var3 = var4.trigger;
                                var3 = var3.bind(var4)(var5);
                                _fun0008_ip = 28; continue _fun0008;
case 35:
                                var3 = null;
                                if(!(var3 != var6)) { _fun0008_ip = 28; continue _fun0008 }
case 54:
                                var7 = _closure3_slot0;
                                var4 = var7.setBoolean;
                                var3 = global;
                                var3 = var3.Boolean;
                                var3 = var3.bind(var1)(var6);
                                var3 = var4.bind(var7)(var5, var3);
                                _fun0008_ip = 28; continue _fun0008;
case 33:
                                var3 = null;
                                if(!(var3 != var6)) { _fun0008_ip = 28; continue _fun0008 }
case 55:
                                var7 = _closure3_slot0;
                                var4 = var7.setNumber;
                                var3 = typeof var6;
                                if(!(var8 === var3)) { _fun0008_ip = 56; continue _fun0008 }
case 57:
                                var3 = global;
                                var8 = var3.Number;
                                var3 = var8.isNaN;
                                var8 = var3.bind(var8)(var6);
                                var3 = var6;
                                if(!var8) { _fun0008_ip = 58; continue _fun0008 }
case 56:
                                var9 = global;
                                var11 = var9.Number;
                                var10 = var11.isNaN;
                                var12 = var9.parseFloat;
                                var8 = var6.toString;
                                var8 = var8.bind(var6)();
                                var8 = var12.bind(var1)(var8);
                                var10 = var10.bind(var11)(var8);
                                var8 = 0;
                                if(var10) { _fun0008_ip = 59; continue _fun0008 }
case 60:
                                var10 = var9.parseFloat;
                                var9 = var6.toString;
                                var9 = var9.bind(var6)();
                                var8 = var10.bind(var1)(var9);
case 59:
                                var3 = var8;
case 58:
                                var3 = var4.bind(var7)(var5, var3);
                                _fun0008_ip = 28; continue _fun0008;
case 32:
                                var3 = null;
                                if(!(var3 != var6)) { _fun0008_ip = 28; continue _fun0008 }
case 61:
                                var7 = _closure3_slot0;
                                var4 = var7.setColor;
                                var3 = var6.toString;
                                var3 = var3.bind(var6)();
                                var3 = var4.bind(var7)(var5, var3);
                                _fun0008_ip = 28; continue _fun0008;
case 30:
                                var3 = null;
                                if(!(var3 != var6)) { _fun0008_ip = 28; continue _fun0008 }
case 62:
                                var4 = _closure3_slot0;
                                var3 = var4.setString;
                                var2 = var6.toString;
                                var2 = var2.bind(var6)();
                                var2 = var3.bind(var4)(var5, var2);
case 28:
                                return var1;
                            }
                        };
                        var1 = var2.bind(var5)(var1);
case 19:
                        var2 = _closure3_slot6;
                        var1 = undefined;
                        var1 = var2.bind(var1)();
                        var1 = _closure3_slot0;
                        if(!(var4 != var1)) { _fun0007_ip = 63; continue _fun0007 }
case 64:
                        var2 = _closure3_slot0;
                        var1 = var2.play;
                        var1 = var1.bind(var2)();
case 63:
                        var2 = _closure3_slot7;
                        var1 = _closure3_slot3;
                        if(!(var4 == var1)) { _fun0007_ip = 65; continue _fun0007 }
case 66:
                        var1 = {};
                        _fun0007_ip = 67; continue _fun0007;
case 65:
                        var1 = _closure3_slot3;
case 67:
                        var2['current'] = var1;
case 18:
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
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                        var3 = _closure3_slot0;
                        var4 = null;
                        if(!(var4 != var3)) { _fun0009_ip = 31; continue _fun0009 }
case 68:
                        var3 = _closure3_slot3;
                        if(!(var4 != var3)) { _fun0009_ip = 31; continue _fun0009 }
case 69:
                        var3 = _closure3_slot0;
                        var5 = var4 == var3;
                        var6 = undefined;
                        var3 = undefined;
                        if(var5) { _fun0009_ip = 70; continue _fun0009 }
case 71:
                        var5 = _closure3_slot0;
                        var5 = var5.internalNativeEmitter;
                        var5 = var4 == var5;
                        var3 = undefined;
                        if(var5) { _fun0009_ip = 70; continue _fun0009 }
case 23:
                        var7 = _closure3_slot0;
                        var5 = var7.internalNativeEmitter;
                        var3 = var5.bind(var7)();
case 70:
                        var _closure4_slot0 = var3;
                        if(!(var4 != var3)) { _fun0009_ip = 72; continue _fun0009 }
case 73:
                        var5 = _closure1_slot6;
                        var7 = _closure3_slot0;
                        var3 = var7.viewTag;
                        var3 = var3.bind(var7)();
                        var3 = var5.bind(var6)(var3);
                        var _closure4_slot1 = var3;
                        if(!(var4 == var3)) { _fun0009_ip = 74; continue _fun0009 }
case 31:
                        var3 = undefined;
                        return var3;
case 74:
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
                                if(var5) { _fun0010_ip = 21; continue _fun0010 }
case 22:
                                var2 = var3;
case 21:
                                var3 = undefined;
                                if(var5) { _fun0010_ip = 23; continue _fun0010 }
case 24:
                                var7 = var6().value;
                                var6 = var4;
                                var6 = var6 === var1;
                                var3 = undefined;
                                var5 = var6;
                                if(var6) { _fun0010_ip = 23; continue _fun0010 }
case 25:
                                var3 = var7;
                                var5 = var6;
case 23:
                                if(var5) { _fun0010_ip = 26; continue _fun0010 }
case 27:
                                var4.return();
case 26:
                                var5 = _closure3_slot2;
                                var4 = _closure3_slot1;
                                var4 = var5[var4];
                                var4 = var4[var2];
                                var5 = null;
                                if(!(var5 != var4)) { _fun0010_ip = 75; continue _fun0010 }
case 19:
                                if(!(var5 != var3)) { _fun0010_ip = 75; continue _fun0010 }
case 76:
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
case 75:
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
case 72:
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
            if(var7) { _fun0001_ip = 77; continue _fun0001 }
case 78:
            var7 = _closure1_slot9;
            var6 = var7.hidden;
case 77:
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
            if(!(var11 == var8)) { _fun0001_ip = 47; continue _fun0001 }
case 79:
            var8 = {};
case 47:
            var5['referencedAssets'] = var8;
            var8 = var9.current;
            if(!(var11 == var8)) { _fun0001_ip = 80; continue _fun0001 }
case 81:
            var11 = _closure1_slot0;
            var8 = _closure1_slot2;
            var8 = var8[var12];
            var13 = var11.bind(var4)(var8);
            var11 = var13.AutoBind;
            var8 = true;
            var8 = var11.bind(var13)(var8);
            _fun0001_ip = 82; continue _fun0001;
case 80:
            var11 = _closure1_slot0;
            var10 = _closure1_slot2;
            var10 = var10[var12];
            var11 = var11.bind(var4)(var10);
            var10 = var11.BindByName;
            var9 = var9.current;
            var8 = var10.bind(var11)(var9);
case 82:
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