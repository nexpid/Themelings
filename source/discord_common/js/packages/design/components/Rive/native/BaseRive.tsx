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
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot5 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = '../discord_common/js/packages/design/components/Rive/native/BaseRive.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function BaseRive(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var12 = var1.src;
            var11 = var1.style;
            var5 = var1.artboard;
            var17 = var1.artboardProperties;
            var16 = var1.dataBinding;
            var15 = var1.defaultViewModelInstance;
            var1 = function useDefaultRenderer() {
                var4 = _closure1_slot4;
                var3 = var4.useEffect;
                var2 = function() {
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 3;
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
            var1 = var1.bind(var4)();
            var6 = _closure1_slot0;
            var1 = _closure1_slot2;
            var9 = 3;
            var3 = var1[var9];
            var6 = var6.bind(var4)(var3);
            var3 = var6.useRive;
            var10 = var3.bind(var6)();
            var6 = _closure1_slot3;
            var3 = 2;
            var6 = var6.bind(var4)(var10, var3);
            var3 = 0;
            var10 = var6[var3];
            var3 = 1;
            var3 = var6[var3];
            var14 = _closure1_slot4;
            var6 = var14.useRef;
            var6 = var6.bind(var14)(var15);
            var2 = function useDataBinding(arg1, arg2, arg3, arg4) {
                var10 = arg1;
                var9 = arg2;
                var8 = arg3;
                var7 = arg4;
                var _closure3_slot0 = var10;
                var _closure3_slot1 = var9;
                var _closure3_slot2 = var8;
                var _closure3_slot3 = var7;
                var5 = _closure1_slot4;
                var4 = var5.useState;
                var2 = 0;
                var11 = var4.bind(var5)(var2);
                var6 = _closure1_slot3;
                var12 = undefined;
                var4 = 2;
                var4 = var6.bind(var12)(var11, var4);
                var11 = var4[var2];
                var2 = 1;
                var2 = var4[var2];
                var _closure3_slot4 = var2;
                var6 = var5.useCallback;
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
                var2 = new Array(0);
                var2 = var6.bind(var5)(var4, var2);
                var4 = var5.useContext;
                var6 = _closure1_slot0;
                var13 = _closure1_slot2;
                var3 = 4;
                var3 = var13[var3];
                var3 = var6.bind(var12)(var3);
                var3 = var3.AccessibilityPreferencesContext;
                var3 = var4.bind(var5)(var3);
                var3 = var3.reducedMotion;
                var6 = var3.enabled;
                var _closure3_slot5 = var6;
                var4 = var5.useRef;
                var3 = null;
                var3 = var4.bind(var5)(var3);
                var _closure3_slot6 = var3;
                var4 = var5.useEffect;
                var3 = new Array(6);
                var3[0] = var11;
                var3[1] = var10;
                var3[2] = var9;
                var3[3] = var8;
                var3[4] = var7;
                var3[5] = var6;
                var1 = function() {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        var2 = _closure3_slot0;
                        var3 = null;
                        var2 = var3 != var2;
                        if(!var2) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                        var4 = _closure3_slot3;
                        var2 = var3 != var4;
case 2:
                        if(!var2) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                        var2 = _closure3_slot0;
                        var6 = var2.setBoolean;
                        var5 = _closure3_slot5;
                        var4 = 'reducedMotion';
                        var4 = var6.bind(var2)(var4, var5);
                        var4 = global;
                        var6 = var4.Object;
                        var5 = var6.entries;
                        var4 = _closure3_slot3;
                        var6 = var5.bind(var6)(var4);
                        var5 = var6.forEach;
                        var4 = function(arg1) {
                            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                                var6 = arg1;
                                var2 = var6[Symbol.iterator];
                                var6 = var2().next;
                                var4 = var6().value;
                                var3 = var2;
                                var1 = undefined;
                                var3 = var3 === var1;
                                var5 = undefined;
                                if(var3) { _fun0003_ip = 5; continue _fun0003 }
case 2:
                                var5 = var4;
case 5:
                                var4 = undefined;
                                if(var3) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                                var7 = var6().value;
                                var6 = var2;
                                var6 = var6 === var1;
                                var4 = undefined;
                                var3 = var6;
                                if(var6) { _fun0003_ip = 6; continue _fun0003 }
case 8:
                                var4 = var7;
                                var3 = var6;
case 6:
                                if(var3) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                                var2.return();
case 9:
                                var6 = _closure3_slot2;
                                var3 = _closure3_slot1;
                                var3 = var6[var3];
                                var6 = var3[var5];
                                var3 = 'string';
                                if(!(var3 !== var6)) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                                var3 = 'color';
                                if(!(var3 !== var6)) { _fun0003_ip = 13; continue _fun0003 }
case 14:
                                var3 = 'number';
                                if(!(var3 !== var6)) { _fun0003_ip = 15; continue _fun0003 }
case 16:
                                var8 = 'boolean';
                                if(!(var8 !== var6)) { _fun0003_ip = 17; continue _fun0003 }
case 18:
                                var3 = 'trigger';
                                if(!(var3 === var6)) { _fun0003_ip = 19; continue _fun0003 }
case 20:
                                var6 = null;
                                if(!(var6 != var4)) { _fun0003_ip = 19; continue _fun0003 }
case 21:
                                var7 = typeof var4;
                                var3 = var4;
                                if(!(var8 !== var7)) { _fun0003_ip = 22; continue _fun0003 }
case 23:
                                var7 = 0;
                                var3 = var7 !== var4;
case 22:
                                if(!var3) { _fun0003_ip = 24; continue _fun0003 }
case 25:
                                var7 = _closure3_slot6;
                                var7 = var7.current;
                                var8 = var6 == var7;
                                var6 = undefined;
                                if(var8) { _fun0003_ip = 26; continue _fun0003 }
case 27:
                                var6 = var7[var5];
case 26:
                                var3 = var6 !== var4;
case 24:
                                if(!var3) { _fun0003_ip = 19; continue _fun0003 }
case 28:
                                var6 = _closure3_slot0;
                                var3 = var6.trigger;
                                var3 = var3.bind(var6)(var5);
                                _fun0003_ip = 19; continue _fun0003;
case 17:
                                var3 = null;
                                if(!(var3 != var4)) { _fun0003_ip = 19; continue _fun0003 }
case 29:
                                var6 = _closure3_slot0;
                                var3 = var6.setBoolean;
                                var3 = var3.bind(var6)(var5, var4);
                                _fun0003_ip = 19; continue _fun0003;
case 15:
                                var3 = null;
                                if(!(var3 != var4)) { _fun0003_ip = 19; continue _fun0003 }
case 30:
                                var6 = _closure3_slot0;
                                var3 = var6.setNumber;
                                var3 = var3.bind(var6)(var5, var4);
                                _fun0003_ip = 19; continue _fun0003;
case 13:
                                var3 = null;
                                if(!(var3 != var4)) { _fun0003_ip = 19; continue _fun0003 }
case 31:
                                var6 = _closure3_slot0;
                                var3 = var6.setColor;
                                var3 = var3.bind(var6)(var5, var4);
                                _fun0003_ip = 19; continue _fun0003;
case 11:
                                var3 = null;
                                if(!(var3 != var4)) { _fun0003_ip = 19; continue _fun0003 }
case 32:
                                var3 = _closure3_slot0;
                                var2 = var3.setString;
                                var2 = var2.bind(var3)(var5, var4);
case 19:
                                return var1;
                            }
                        };
                        var4 = var5.bind(var6)(var4);
                        if(!(var3 != var2)) { _fun0002_ip = 33; continue _fun0002 }
case 34:
                        var3 = _closure3_slot0;
                        var2 = var3.play;
                        var2 = var2.bind(var3)();
case 33:
                        var2 = _closure3_slot6;
                        var1 = _closure3_slot3;
                        var2['current'] = var1;
case 4:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1 = var4.bind(var5)(var1, var3);
                var1 = {};
                var1['onStateUpdated'] = var2;
                return var1;
            };
            var20 = undefined;
            var19 = var3;
            var18 = var5;
            var2 = var20[var2](var19, var18, var17, var16, var15);
            var8 = var2.onStateUpdated;
            var3 = _closure1_slot5;
            var2 = _closure1_slot1;
            var1 = var1[var9];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['url'] = var12;
            var1['style'] = var11;
            var1['ref'] = var10;
            var1['onStateChanged'] = var8;
            var1['artboardName'] = var5;
            var8 = var6.current;
            var5 = null;
            if(!(var5 == var8)) { _fun0001_ip = 35; continue _fun0001 }
case 36:
            var8 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var9];
            var10 = var8.bind(var4)(var5);
            var8 = var10.AutoBind;
            var5 = true;
            var5 = var8.bind(var10)(var5);
            _fun0001_ip = 37; continue _fun0001;
case 35:
            var8 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var9];
            var8 = var8.bind(var4)(var7);
            var7 = var8.BindByName;
            var6 = var6.current;
            var5 = var7.bind(var8)(var6);
case 37:
            var1['dataBinding'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['BaseRive'] = var2;
    return var1;
})();