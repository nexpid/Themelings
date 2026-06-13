// discord_common/js/packages/design/components/Rive/native/BaseRive.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var1 = function useObservedValue(arg1, arg2) {
        var5 = arg1;
        var3 = arg2;
        var _closure2_slot0 = var5;
        var _closure2_slot1 = var3;
        var6 = _closure1_slot2;
        var4 = var6.useRef;
        var4 = var4.bind(var6)(var3);
        var _closure2_slot2 = var4;
        var7 = _closure1_slot2;
        var6 = var7.useEffect;
        var4 = new Array(1);
        var4[0] = var3;
        var3 = function() {
            var2 = _closure2_slot2;
            var1 = _closure2_slot1;
            var2['current'] = var1;
            var1 = undefined;
            return var1;
        };
        var3 = var6.bind(var7)(var3, var4);
        var4 = _closure1_slot2;
        var3 = var4.useEffect;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var3 = _closure2_slot0;
                var1 = undefined;
                if(!(var1 !== var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var3 = _closure2_slot2;
                var4 = var3.current;
                var3 = null;
                if(!(var3 != var4)) { _fun0001_ip = 2; continue _fun0001 }
case 4:
                var4 = _closure2_slot2;
                var3 = var4.current;
                var2 = _closure2_slot0;
                var2 = var3.bind(var4)(var2);
case 2:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        var1 = undefined;
        return var1;
    };
    var _closure1_slot9 = var1;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var4);
    var11 = 0;
    var5 = var7[var11];
    var4 = metroImportAll;
    var1 = undefined;
    var8 = var4.bind(var1)(var5);
    var _closure1_slot2 = var8;
    var12 = 1;
    var4 = var7[var12];
    var4 = var6.bind(var1)(var4);
    var5 = var4.View;
    var _closure1_slot3 = var5;
    var9 = var4.StyleSheet;
    var5 = var4.Image;
    var _closure1_slot4 = var5;
    var5 = var4.PixelRatio;
    var _closure1_slot5 = var5;
    var4 = var4.Platform;
    var4 = 2;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var5 = var4.jsx;
    var _closure1_slot6 = var5;
    var4 = var4.jsxs;
    var _closure1_slot7 = var4;
    var5 = var9.create;
    var4 = {};
    var10 = {};
    var10['flexGrow'] = var12;
    var4['container'] = var10;
    var10 = {};
    var10['flex'] = var12;
    var4['fill'] = var10;
    var10 = {};
    var10['opacity'] = var11;
    var4['hidden'] = var10;
    var4 = var5.bind(var9)(var4);
    var _closure1_slot8 = var4;
    var5 = var8.forwardRef;
    var4 = function BaseRiveInner(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var5 = arg1;
            var9 = var5.src;
            var16 = var5.style;
            var22 = var5.artboard;
            var2 = var5.artboardProperties;
            var3 = var5.artboardViewModelInstances;
            var4 = var5.defaultViewModelInstance;
            var _closure2_slot0 = var4;
            var12 = var5.referencedAssets;
            var20 = var5.stateMachine;
            var21 = var5.fit;
            var19 = var5.alignment;
            var25 = var5.withReducedMotion;
            var4 = undefined;
            if(!(var25 === var4)) { _fun0002_ip = 5; continue _fun0002 }
case 6:
            var25 = 'halt';
case 5:
            var8 = var5.renderDataBinding;
            var _closure2_slot1 = var4;
            var _closure2_slot2 = var4;
            var6 = _closure1_slot0;
            var5 = _closure1_slot1;
            var24 = 3;
            var5 = var5[var24];
            var7 = var6.bind(var4)(var5);
            var6 = var7.useRiveFile;
            var11 = null;
            var10 = var11 != var12;
            var5 = undefined;
            if(!var10) { _fun0002_ip = 7; continue _fun0002 }
case 8:
            var10 = {};
            var10['referencedAssets'] = var12;
            var5 = var10;
case 7:
            var5 = var6.bind(var7)(var9, var5);
            var12 = var5.riveFile;
            var9 = _closure1_slot0;
            var13 = _closure1_slot1;
            var5 = var13[var24];
            var6 = var9.bind(var4)(var5);
            var5 = var6.useRive;
            var5 = var5.bind(var6)();
            var6 = var5.riveViewRef;
            var23 = var5.setHybridRef;
            var7 = var11 != var6;
            var14 = _closure1_slot2;
            var10 = var14.useContext;
            var5 = 4;
            var5 = var13[var5];
            var5 = var9.bind(var4)(var5);
            var5 = var5.AccessibilityPreferencesContext;
            var5 = var10.bind(var14)(var5);
            var5 = var5.reducedMotion;
            var10 = var5.enabled;
            var5 = 5;
            var5 = var13[var5];
            var9 = var9.bind(var4)(var5);
            var5 = var9.useManaContext;
            var5 = var5.bind(var9)();
            var9 = var5.experiments;
            var13 = var11 == var9;
            var5 = undefined;
            if(var13) { _fun0002_ip = 9; continue _fun0002 }
case 10:
            var14 = var9.enabledExperiments;
            var9 = var11 == var14;
            var5 = undefined;
            if(var9) { _fun0002_ip = 9; continue _fun0002 }
case 11:
            var13 = var14.includes;
            var9 = 'rive-app-state-playback';
            var5 = var13.bind(var14)(var9);
case 9:
            var9 = var11 != var5;
            if(!var9) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var9 = var5;
case 12:
            var5 = 'layout';
            var17 = undefined;
            if(!(var5 === var21)) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var13 = _closure1_slot5;
            var5 = var13.get;
            var17 = var5.bind(var13)();
case 14:
            var3 = var3[var22];
            if(!(var11 == var3)) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var3 = new Array(0);
case 16:
            var5 = var3.length;
            var3 = 0;
            var3 = var5 > var3;
            var15 = _closure1_slot2;
            var14 = var15.useMemo;
            var13 = function() {
                var1 = _closure2_slot0;
                return var1;
            };
            var5 = new Array(0);
            var15 = var14.bind(var15)(var13, var5);
            var13 = _closure1_slot0;
            var5 = _closure1_slot1;
            var5 = var5[var24];
            var14 = var13.bind(var4)(var5);
            var13 = var14.useViewModelInstance;
            if(!(var11 == var15)) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var5 = null;
            if(!var3) { _fun0002_ip = 20; continue _fun0002 }
case 18:
            var3 = var11 != var12;
            var5 = null;
            if(!var3) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            var5 = var12;
case 20:
            var3 = {};
            var3['artboardName'] = var22;
            var3['instanceName'] = var15;
            var3 = var13.bind(var14)(var5, var3);
            var14 = var3.instance;
            var15 = var14;
            if(!(var11 == var14)) { _fun0002_ip = 22; continue _fun0002 }
case 23:
            var5 = _closure1_slot0;
            var3 = _closure1_slot1;
            var3 = var3[var24];
            var3 = var5.bind(var4)(var3);
            var3 = var3.DataBindMode;
            var15 = var3.None;
case 22:
            var3 = var2[var22];
            var5 = var11 == var3;
            var2 = undefined;
            if(var5) { _fun0002_ip = 24; continue _fun0002 }
case 25:
            var2 = var3.reducedMotion;
case 24:
            var13 = var11 != var2;
            var3 = _closure1_slot0;
            var5 = _closure1_slot1;
            var2 = 6;
            var2 = var5[var2];
            var5 = var3.bind(var4)(var2);
            var3 = var5.useRivePlayback;
            var2 = {};
            var2['isReady'] = var7;
            var2['appStatePlaybackEnabled'] = var9;
            var9 = var10;
            if(!var9) { _fun0002_ip = 26; continue _fun0002 }
case 27:
            var9 = !var13;
case 26:
            if(!var9) { _fun0002_ip = 28; continue _fun0002 }
case 29:
            var13 = 'play';
            var9 = var13 !== var25;
case 28:
            var2['shouldShortLoopForReducedMotion'] = var9;
            var3 = var3.bind(var5)(var6, var2);
            var13 = var3.play;
            _closure2_slot1 = var13;
            var2 = var3.pause;
            _closure2_slot2 = var2;
            var9 = var3.playIfNeeded;
            var6 = _closure1_slot2;
            var5 = var6.useImperativeHandle;
            var3 = new Array(2);
            var3[0] = var13;
            var3[1] = var2;
            var2 = arg2;
            var1 = function() {
                var1 = {};
                var3 = _closure2_slot1;
                var1['play'] = var3;
                var2 = _closure2_slot2;
                var1['pause'] = var2;
                return var1;
            };
            var1 = var5.bind(var6)(var2, var1, var3);
            var3 = _closure1_slot7;
            var2 = _closure1_slot3;
            var1 = {};
            var5 = _closure1_slot8;
            var6 = var5.container;
            var5 = new Array(2);
            var5[0] = var6;
            var6 = undefined;
            if(var7) { _fun0002_ip = 30; continue _fun0002 }
case 31:
            var7 = _closure1_slot8;
            var6 = var7.hidden;
case 30:
            var5[1] = var6;
            var1['style'] = var5;
            var6 = var11 != var12;
            if(!var6) { _fun0002_ip = 32; continue _fun0002 }
case 33:
            var13 = _closure1_slot6;
            var7 = _closure1_slot0;
            var5 = _closure1_slot1;
            var5 = var5[var24];
            var5 = var7.bind(var4)(var5);
            var7 = var5.RiveView;
            var5 = {};
            var5['file'] = var12;
            var5['hybridRef'] = var23;
            var5['artboardName'] = var22;
            var22 = true;
            var5['autoPlay'] = var22;
            var5['dataBind'] = var15;
            var15 = _closure1_slot8;
            var22 = var15.fill;
            var15 = new Array(2);
            var15[0] = var22;
            var15[1] = var16;
            var5['style'] = var15;
            if(!(var11 == var20)) { _fun0002_ip = 34; continue _fun0002 }
case 35:
            var15 = {};
            _fun0002_ip = 36; continue _fun0002;
case 34:
            var16 = {};
            var16['stateMachineName'] = var20;
            var15 = var16;
case 36:
            var29 = var5;
            var28 = var15;
            var15 = copyDataProperties(var29, var28);
            if(!(var11 == var21)) { _fun0002_ip = 37; continue _fun0002 }
case 38:
            var15 = {};
            _fun0002_ip = 39; continue _fun0002;
case 37:
            var16 = {};
            var22 = _closure1_slot0;
            var23 = _closure1_slot1;
            var20 = 7;
            var20 = var23[var20];
            var20 = var22.bind(var4)(var20);
            var20 = var20.FIT_MAP;
            var20 = var20[var21];
            var16['fit'] = var20;
            var15 = var16;
case 39:
            var29 = var5;
            var28 = var15;
            var15 = copyDataProperties(var29, var28);
            if(!(var11 == var19)) { _fun0002_ip = 40; continue _fun0002 }
case 41:
            var15 = {};
            _fun0002_ip = 42; continue _fun0002;
case 40:
            var16 = {};
            var20 = _closure1_slot0;
            var21 = _closure1_slot1;
            var18 = 7;
            var18 = var21[var18];
            var18 = var20.bind(var4)(var18);
            var18 = var18.ALIGNMENT_MAP;
            var18 = var18[var19];
            var16['alignment'] = var18;
            var15 = var16;
case 42:
            var29 = var5;
            var28 = var15;
            var15 = copyDataProperties(var29, var28);
            if(!(var11 == var17)) { _fun0002_ip = 43; continue _fun0002 }
case 44:
            var15 = {};
            _fun0002_ip = 45; continue _fun0002;
case 43:
            var16 = {};
            var16['layoutScaleFactor'] = var17;
            var15 = var16;
case 45:
            var29 = var5;
            var28 = var15;
            var15 = copyDataProperties(var29, var28);
            var6 = var13.bind(var4)(var7, var5);
case 32:
            var5 = new Array(2);
            var5[0] = var6;
            var7 = var11 == var8;
            var6 = undefined;
            if(var7) { _fun0002_ip = 46; continue _fun0002 }
case 47:
            var7 = {};
            var15 = var11 != var14;
            var13 = null;
            if(!var15) { _fun0002_ip = 48; continue _fun0002 }
case 49:
            var13 = var14;
case 48:
            var7['instance'] = var13;
            var13 = var11 != var12;
            var11 = null;
            if(!var13) { _fun0002_ip = 50; continue _fun0002 }
case 51:
            var11 = var12;
case 50:
            var7['file'] = var11;
            var7['reducedMotionEnabled'] = var10;
            var7['playIfNeeded'] = var9;
            var6 = var8.bind(var4)(var7);
case 46:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = var5.bind(var8)(var4);
    var5 = 8;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = '../discord_common/js/packages/design/components/Rive/native/BaseRive.tsx';
    var5 = var6.bind(var7)(var5);
    var3['BaseRive'] = var4;
    var4 = function useNumberBinding(arg1, arg2, arg3, arg4, arg5) {
        var10 = arg3;
        var8 = arg5;
        var _closure2_slot0 = var10;
        var _closure2_slot1 = var8;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var1 = 3;
        var4 = var4[var1];
        var1 = undefined;
        var7 = var5.bind(var1)(var4);
        var6 = var7.useRiveNumber;
        var5 = arg1;
        var4 = arg2;
        var4 = var6.bind(var7)(var5, var4);
        var9 = var4.setValue;
        var _closure2_slot2 = var9;
        var4 = var4.value;
        var7 = _closure1_slot2;
        var6 = var7.useEffect;
        var5 = new Array(3);
        var5[0] = var10;
        var5[1] = var9;
        var5[2] = var8;
        var3 = function() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var2 = _closure2_slot0;
                var4 = null;
                if(!(var4 != var2)) { _fun0003_ip = 52; continue _fun0003 }
case 53:
                var5 = _closure2_slot2;
                var9 = _closure2_slot0;
                var3 = 'number';
                var2 = typeof var9;
                if(!(var3 === var2)) { _fun0003_ip = 54; continue _fun0003 }
case 55:
                var2 = global;
                var3 = var2.Number;
                var2 = var3.isNaN;
                var2 = var2.bind(var3)(var9);
                var3 = var9;
                if(!var2) { _fun0003_ip = 56; continue _fun0003 }
case 54:
                var6 = global;
                var10 = var6.Number;
                var7 = var10.isNaN;
                var11 = var6.parseFloat;
                var2 = var9.toString;
                var2 = var2.bind(var9)();
                var8 = undefined;
                var2 = var11.bind(var8)(var2);
                var7 = var7.bind(var10)(var2);
                var2 = 0;
                if(var7) { _fun0003_ip = 57; continue _fun0003 }
case 58:
                var7 = var6.parseFloat;
                var6 = var9.toString;
                var6 = var6.bind(var9)();
                var2 = var7.bind(var8)(var6);
case 57:
                var3 = var2;
case 56:
                var2 = undefined;
                var3 = var5.bind(var2)(var3);
                var3 = _closure2_slot1;
                if(!(var4 != var3)) { _fun0003_ip = 52; continue _fun0003 }
case 59:
                var1 = _closure2_slot1;
                var1 = var1.bind(var2)();
case 52:
                var1 = undefined;
                return var1;
            }
        };
        var3 = var6.bind(var7)(var3, var5);
        var3 = _closure1_slot9;
        var2 = arg4;
        var2 = var3.bind(var1)(var4, var2);
        return var1;
    };
    var3['useNumberBinding'] = var4;
    var4 = function useStringBinding(arg1, arg2, arg3, arg4, arg5) {
        var10 = arg3;
        var8 = arg5;
        var _closure2_slot0 = var10;
        var _closure2_slot1 = var8;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var1 = 3;
        var4 = var4[var1];
        var1 = undefined;
        var7 = var5.bind(var1)(var4);
        var6 = var7.useRiveString;
        var5 = arg1;
        var4 = arg2;
        var4 = var6.bind(var7)(var5, var4);
        var9 = var4.setValue;
        var _closure2_slot2 = var9;
        var4 = var4.value;
        var7 = _closure1_slot2;
        var6 = var7.useEffect;
        var5 = new Array(3);
        var5[0] = var10;
        var5[1] = var9;
        var5[2] = var8;
        var3 = function() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var2 = _closure2_slot0;
                var4 = null;
                if(!(var4 != var2)) { _fun0004_ip = 60; continue _fun0004 }
case 3:
                var5 = _closure2_slot2;
                var3 = _closure2_slot0;
                var2 = var3.toString;
                var3 = var2.bind(var3)();
                var2 = undefined;
                var3 = var5.bind(var2)(var3);
                var3 = _closure2_slot1;
                if(!(var4 != var3)) { _fun0004_ip = 60; continue _fun0004 }
case 61:
                var1 = _closure2_slot1;
                var1 = var1.bind(var2)();
case 60:
                var1 = undefined;
                return var1;
            }
        };
        var3 = var6.bind(var7)(var3, var5);
        var3 = _closure1_slot9;
        var2 = arg4;
        var2 = var3.bind(var1)(var4, var2);
        return var1;
    };
    var3['useStringBinding'] = var4;
    var4 = function useBooleanBinding(arg1, arg2, arg3, arg4, arg5) {
        var10 = arg3;
        var8 = arg5;
        var _closure2_slot0 = var10;
        var _closure2_slot1 = var8;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var1 = 3;
        var4 = var4[var1];
        var1 = undefined;
        var7 = var5.bind(var1)(var4);
        var6 = var7.useRiveBoolean;
        var5 = arg1;
        var4 = arg2;
        var4 = var6.bind(var7)(var5, var4);
        var9 = var4.setValue;
        var _closure2_slot2 = var9;
        var4 = var4.value;
        var7 = _closure1_slot2;
        var6 = var7.useEffect;
        var5 = new Array(3);
        var5[0] = var10;
        var5[1] = var9;
        var5[2] = var8;
        var3 = function() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var2 = _closure2_slot0;
                var4 = null;
                if(!(var4 != var2)) { _fun0005_ip = 62; continue _fun0005 }
case 3:
                var5 = _closure2_slot2;
                var2 = global;
                var6 = var2.Boolean;
                var3 = _closure2_slot0;
                var2 = undefined;
                var3 = var6.bind(var2)(var3);
                var3 = var5.bind(var2)(var3);
                var3 = _closure2_slot1;
                if(!(var4 != var3)) { _fun0005_ip = 62; continue _fun0005 }
case 63:
                var1 = _closure2_slot1;
                var1 = var1.bind(var2)();
case 62:
                var1 = undefined;
                return var1;
            }
        };
        var3 = var6.bind(var7)(var3, var5);
        var3 = _closure1_slot9;
        var2 = arg4;
        var2 = var3.bind(var1)(var4, var2);
        return var1;
    };
    var3['useBooleanBinding'] = var4;
    var4 = function useColorBinding(arg1, arg2, arg3, arg4, arg5) {
        var11 = arg3;
        var4 = arg4;
        var5 = arg5;
        var _closure2_slot0 = var11;
        var _closure2_slot1 = var4;
        var _closure2_slot2 = var5;
        var7 = _closure1_slot0;
        var6 = _closure1_slot1;
        var1 = 3;
        var6 = var6[var1];
        var1 = undefined;
        var9 = var7.bind(var1)(var6);
        var8 = var9.useRiveColor;
        var7 = arg1;
        var6 = arg2;
        var6 = var8.bind(var9)(var7, var6);
        var10 = var6.setValue;
        var _closure2_slot3 = var10;
        var6 = var6.value;
        var _closure2_slot4 = var6;
        var9 = _closure1_slot2;
        var8 = var9.useEffect;
        var7 = new Array(3);
        var7[0] = var11;
        var7[1] = var10;
        var7[2] = var5;
        var5 = function() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var2 = _closure2_slot0;
                var4 = null;
                if(!(var4 != var2)) { _fun0006_ip = 60; continue _fun0006 }
case 3:
                var5 = _closure2_slot3;
                var3 = _closure2_slot0;
                var2 = var3.toString;
                var3 = var2.bind(var3)();
                var2 = undefined;
                var3 = var5.bind(var2)(var3);
                var3 = _closure2_slot2;
                if(!(var4 != var3)) { _fun0006_ip = 60; continue _fun0006 }
case 61:
                var1 = _closure2_slot2;
                var1 = var1.bind(var2)();
case 60:
                var1 = undefined;
                return var1;
            }
        };
        var5 = var8.bind(var9)(var5, var7);
        var7 = _closure1_slot2;
        var5 = var7.useRef;
        var5 = var5.bind(var7)(var4);
        var _closure2_slot5 = var5;
        var8 = _closure1_slot2;
        var7 = var8.useEffect;
        var5 = new Array(1);
        var5[0] = var4;
        var4 = function() {
            var2 = _closure2_slot5;
            var1 = _closure2_slot1;
            var2['current'] = var1;
            var1 = undefined;
            return var1;
        };
        var4 = var7.bind(var8)(var4, var5);
        var5 = _closure1_slot2;
        var4 = var5.useEffect;
        var3 = new Array(1);
        var3[0] = var6;
        var2 = function() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var2 = _closure2_slot4;
                var3 = null;
                if(!(var3 != var2)) { _fun0007_ip = 64; continue _fun0007 }
case 3:
                var2 = _closure2_slot5;
                var2 = var2.current;
                if(!(var3 != var2)) { _fun0007_ip = 64; continue _fun0007 }
case 65:
                var3 = _closure2_slot5;
                var2 = var3.current;
                var4 = _closure2_slot4;
                var1 = var4.toInt;
                var1 = var1.bind(var4)();
                var1 = var2.bind(var3)(var1);
case 64:
                var1 = undefined;
                return var1;
            }
        };
        var2 = var4.bind(var5)(var2, var3);
        return var1;
    };
    var3['useColorBinding'] = var4;
    var4 = function useEnumBinding(arg1, arg2, arg3, arg4, arg5) {
        var10 = arg3;
        var8 = arg5;
        var _closure2_slot0 = var10;
        var _closure2_slot1 = var8;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var1 = 3;
        var4 = var4[var1];
        var1 = undefined;
        var7 = var5.bind(var1)(var4);
        var6 = var7.useRiveEnum;
        var5 = arg1;
        var4 = arg2;
        var4 = var6.bind(var7)(var5, var4);
        var9 = var4.setValue;
        var _closure2_slot2 = var9;
        var4 = var4.value;
        var7 = _closure1_slot2;
        var6 = var7.useEffect;
        var5 = new Array(3);
        var5[0] = var10;
        var5[1] = var9;
        var5[2] = var8;
        var3 = function() {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var2 = _closure2_slot0;
                var4 = null;
                if(!(var4 != var2)) { _fun0008_ip = 60; continue _fun0008 }
case 3:
                var5 = _closure2_slot2;
                var3 = _closure2_slot0;
                var2 = var3.toString;
                var3 = var2.bind(var3)();
                var2 = undefined;
                var3 = var5.bind(var2)(var3);
                var3 = _closure2_slot1;
                if(!(var4 != var3)) { _fun0008_ip = 60; continue _fun0008 }
case 61:
                var1 = _closure2_slot1;
                var1 = var1.bind(var2)();
case 60:
                var1 = undefined;
                return var1;
            }
        };
        var3 = var6.bind(var7)(var3, var5);
        var3 = _closure1_slot9;
        var2 = arg4;
        var2 = var3.bind(var1)(var4, var2);
        return var1;
    };
    var3['useEnumBinding'] = var4;
    var4 = function useTriggerBinding(arg1, arg2, arg3, arg4, arg5) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var8 = arg3;
            var5 = arg4;
            var6 = arg5;
            var _closure2_slot0 = var8;
            var _closure2_slot1 = var6;
            var7 = _closure1_slot0;
            var4 = _closure1_slot1;
            var1 = 3;
            var4 = var4[var1];
            var1 = undefined;
            var10 = var7.bind(var1)(var4);
            var9 = var10.useRiveTrigger;
            var4 = null;
            var4 = var4 != var5;
            var7 = undefined;
            if(!var4) { _fun0009_ip = 66; continue _fun0009 }
case 67:
            var4 = {};
            var4['onTrigger'] = var5;
            var7 = var4;
case 66:
            var5 = arg1;
            var4 = arg2;
            var4 = var9.bind(var10)(var5, var4, var7);
            var7 = var4.trigger;
            var _closure2_slot2 = var7;
            var5 = _closure1_slot2;
            var4 = var5.useEffect;
            var3 = new Array(3);
            var3[0] = var8;
            var3[1] = var7;
            var3[2] = var6;
            var2 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var2 = _closure2_slot0;
                    var3 = 'boolean';
                    var2 = typeof var2;
                    if(!(var3 !== var2)) { _fun0010_ip = 68; continue _fun0010 }
case 69:
                    var3 = _closure2_slot0;
                    var2 = 0;
                    var2 = var2 !== var3;
                    if(!var2) { _fun0010_ip = 70; continue _fun0010 }
case 71:
                    var4 = _closure2_slot0;
                    var3 = null;
                    var2 = var3 != var4;
case 70:
                    _fun0010_ip = 72; continue _fun0010;
case 68:
                    var2 = _closure2_slot0;
case 72:
                    if(!var2) { _fun0010_ip = 73; continue _fun0010 }
case 74:
                    var3 = _closure2_slot2;
                    var2 = undefined;
                    var3 = var3.bind(var2)();
                    var4 = _closure2_slot1;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0010_ip = 73; continue _fun0010 }
case 75:
                    var1 = _closure2_slot1;
                    var1 = var1.bind(var2)();
case 73:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var4.bind(var5)(var2, var3);
            return var1;
        }
    };
    var3['useTriggerBinding'] = var4;
    var4 = function useImageBinding(arg1, arg2, arg3, arg4, arg5) {
        var6 = arg1;
        var5 = arg2;
        var10 = arg3;
        var3 = arg4;
        var4 = arg5;
        var _closure2_slot0 = var6;
        var _closure2_slot1 = var5;
        var _closure2_slot2 = var10;
        var _closure2_slot3 = var3;
        var _closure2_slot4 = var4;
        var9 = _closure1_slot2;
        var8 = var9.useEffect;
        var7 = new Array(4);
        var7[0] = var6;
        var7[1] = var5;
        var7[2] = var10;
        var7[3] = var4;
        var4 = function() {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var3 = _closure2_slot1;
                var4 = null;
                if(!(var4 != var3)) { _fun0011_ip = 76; continue _fun0011 }
case 77:
                var3 = _closure2_slot2;
                if(!(var4 == var3)) { _fun0011_ip = 78; continue _fun0011 }
case 76:
                var3 = undefined;
                return var3;
case 78:
                var3 = false;
                var _closure3_slot0 = var3;
                var6 = _closure1_slot0;
                var4 = _closure1_slot1;
                var3 = 3;
                var4 = var4[var3];
                var3 = undefined;
                var3 = var6.bind(var3)(var4);
                var4 = var3.RiveImages;
                var3 = var4.loadFromURLAsync;
                var7 = _closure2_slot2;
                var8 = 'number';
                var6 = typeof var7;
                var2 = var7;
                if(!(var8 === var6)) { _fun0011_ip = 79; continue _fun0011 }
case 80:
                var6 = _closure1_slot4;
                var5 = var6.resolveAssetSource;
                var5 = var5.bind(var6)(var7);
                var2 = var5.uri;
case 79:
                var4 = var3.bind(var4)(var2);
                var3 = var4.then;
                var2 = function(arg1) {
                    _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                        var1 = _closure3_slot0;
                        if(var1) { _fun0012_ip = 81; continue _fun0012 }
case 82:
                        var4 = _closure2_slot1;
                        var3 = var4.imageProperty;
                        var2 = _closure2_slot0;
                        var5 = var3.bind(var4)(var2);
                        var3 = null;
                        if(!(var3 != var5)) { _fun0012_ip = 83; continue _fun0012 }
case 84:
                        var4 = var5.set;
                        var2 = arg1;
                        var2 = var4.bind(var5)(var2);
case 83:
                        var2 = _closure2_slot4;
                        if(!(var3 != var2)) { _fun0012_ip = 81; continue _fun0012 }
case 85:
                        var2 = _closure2_slot4;
                        var1 = undefined;
                        var1 = var2.bind(var1)();
case 81:
                        var1 = undefined;
                        return var1;
                    }
                };
                var4 = var3.bind(var4)(var2);
                var3 = var4.catch;
                var2 = function() {
                    var1 = undefined;
                    return var1;
                };
                var2 = var3.bind(var4)(var2);
                var1 = function() {
                    var1 = true;
                    _closure3_slot0 = var1;
                    var1 = undefined;
                    return var1;
                };
                return var1;
            }
        };
        var4 = var8.bind(var9)(var4, var7);
        var7 = _closure1_slot2;
        var4 = var7.useRef;
        var4 = var4.bind(var7)(var3);
        var _closure2_slot5 = var4;
        var8 = _closure1_slot2;
        var7 = var8.useEffect;
        var4 = new Array(1);
        var4[0] = var3;
        var3 = function() {
            var2 = _closure2_slot5;
            var1 = _closure2_slot3;
            var2['current'] = var1;
            var1 = undefined;
            return var1;
        };
        var3 = var7.bind(var8)(var3, var4);
        var4 = _closure1_slot2;
        var3 = var4.useEffect;
        var2 = new Array(2);
        var2[0] = var6;
        var2[1] = var5;
        var1 = function() {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                var3 = _closure2_slot1;
                var1 = null;
                if(!(var1 != var3)) { _fun0013_ip = 86; continue _fun0013 }
case 3:
                var4 = _closure2_slot1;
                var3 = var4.imageProperty;
                var2 = _closure2_slot0;
                var3 = var3.bind(var4)(var2);
                if(!(var1 == var3)) { _fun0013_ip = 87; continue _fun0013 }
case 86:
                var1 = undefined;
                return var1;
case 87:
                var2 = var3.addListener;
                var1 = function() {
                    _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                        var1 = _closure2_slot5;
                        var3 = var1.current;
                        var1 = null;
                        var3 = var1 == var3;
                        var1 = undefined;
                        if(var3) { _fun0014_ip = 86; continue _fun0014 }
case 76:
                        var3 = _closure2_slot5;
                        var2 = var3.current;
                        var1 = var2.bind(var3)();
case 86:
                        return var1;
                    }
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        var1 = undefined;
        return var1;
    };
    var3['useImageBinding'] = var4;
    var2 = function useArtboardBinding(arg1, arg2, arg3, arg4, arg5) {
        var9 = arg1;
        var8 = arg2;
        var7 = arg3;
        var6 = arg4;
        var5 = arg5;
        var _closure2_slot0 = var9;
        var _closure2_slot1 = var8;
        var _closure2_slot2 = var7;
        var _closure2_slot3 = var6;
        var _closure2_slot4 = var5;
        var4 = _closure1_slot2;
        var3 = var4.useEffect;
        var2 = new Array(5);
        var2[0] = var9;
        var2[1] = var8;
        var2[2] = var7;
        var2[3] = var6;
        var2[4] = var5;
        var1 = function() {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                var1 = undefined;
                var3 = undefined;
                var5 = _closure2_slot1;
                var4 = null;
                if(!(var4 != var5)) { _fun0015_ip = 88; continue _fun0015 }
case 89:
                var5 = _closure2_slot2;
                if(!(var4 != var5)) { _fun0015_ip = 88; continue _fun0015 }
case 90:
                var5 = _closure2_slot3;
                var6 = 'string';
                var5 = typeof var5;
                if(!(var6 === var5)) { _fun0015_ip = 88; continue _fun0015 }
case 87: // try_start_0
                var7 = _closure2_slot1;
                var6 = var7.artboardProperty;
                var5 = _closure2_slot0;
                var5 = var6.bind(var7)(var5);
                var3 = var5;
                if(!(var4 != var5)) { _fun0015_ip = 91; continue _fun0015 }
case 92:
                var6 = var3;
                var5 = var6.set;
                var8 = _closure2_slot2;
                var7 = var8.getBindableArtboard;
                var3 = _closure2_slot3;
                var3 = var7.bind(var8)(var3);
                var3 = var5.bind(var6)(var3);
case 91:
                var3 = _closure2_slot4;
                if(!(var4 != var3)) { _fun0015_ip = 93; continue _fun0015 }
case 79:
                var2 = _closure2_slot4;
                var2 = var2.bind(var1)();
case 93: // try_end0
                _fun0015_ip = 88; continue _fun0015;
case 94: // catch_target0
                CatchBlockStart(arg_register=1);
case 88:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        var1 = undefined;
        return var1;
    };
    var3['useArtboardBinding'] = var2;
    return var1;
})();