// app/modules/keyboard/native/PortalKeyboardRenderer.tsx
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
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot5 = var4;
    var4 = new Array(0);
    var _closure1_slot6 = var4;
    var4 = function transitionGroupGetItemKey(arg1) {
        var1 = arg1;
        var1 = var1.id;
        return var1;
    };
    var _closure1_slot7 = var4;
    var4 = function transitionGroupRenderItem(arg1, arg2, arg3, arg4) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg3;
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 3;
            var1 = var5[var1];
            var6 = undefined;
            var1 = var4.bind(var6)(var1);
            var1 = var1.TransitionStates;
            var1 = var1.YEETED;
            var4 = var2 === var1;
            if(!var4) { _fun0001_ip = 105; continue _fun0001 }
 47:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 4;
            var1 = var8[var1];
            var5 = var7.bind(var6)(var1);
            var1 = var5.getKeyboardType;
            var5 = var1.bind(var5)();
            var1 = 5;
            var1 = var8[var1];
            var1 = var7.bind(var6)(var1);
            var1 = var1.KeyboardTypes;
            var1 = var1.SYSTEM;
            var4 = var5 === var1;
 105:
            if(!var4) { _fun0001_ip = 137; continue _fun0001 }
 108:
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 6;
            var1 = var7[var1];
            var5 = var5.bind(var6)(var1);
            var1 = var5.isAndroid;
            var4 = var1.bind(var5)();
 137:
            var1 = null;
            if(var4) { _fun0001_ip = 197; continue _fun0001 }
 142:
            var5 = _closure1_slot5;
            var4 = _closure1_slot1;
            var7 = _closure1_slot2;
            var3 = 7;
            var3 = var7[var3];
            var4 = var4.bind(var6)(var3);
            var3 = {};
            var7 = arg2;
            var3['item'] = var7;
            var3['state'] = var2;
            var2 = arg4;
            var3['cleanUp'] = var2;
            var2 = arg1;
            var1 = var5.bind(var6)(var4, var3, var2);
 197:
            return var1;
        }
    };
    var _closure1_slot8 = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/keyboard/native/PortalKeyboardRenderer.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function PortalKeyboardRenderer(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var1 = var1.portal;
            var4 = undefined;
            if(!(var1 === var4)) { _fun0002_ip = 19; continue _fun0002 }
 17:
            var1 = true;
 19:
            var _closure2_slot0 = var4;
            var _closure2_slot1 = var4;
            var _closure2_slot2 = var4;
            var9 = _closure1_slot3;
            var3 = var9.useId;
            var5 = var3.bind(var9)();
            _closure2_slot0 = var5;
            var8 = var9.useLayoutEffect;
            var6 = new Array(1);
            var6[0] = var5;
            var3 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 8;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.registerPortalKeyboardRenderer;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var3 = var8.bind(var9)(var3, var6);
            var8 = var9.useLayoutEffect;
            var6 = function() {
                var4 = _closure1_slot4;
                var3 = undefined;
                var2 = function() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var4 = 8;
                        var3 = var7[var4];
                        var1 = undefined;
                        var3 = var6.bind(var1)(var3);
                        var8 = var3.PortalKeyboardUIStore;
                        var5 = var8.getField;
                        var3 = 'keyboard';
                        var5 = var5.bind(var8)(var3);
                        var3 = 4;
                        var3 = var7[var3];
                        var6 = var6.bind(var1)(var3);
                        var3 = var6.getKeyboardType;
                        var6 = var3.bind(var6)();
                        var3 = null;
                        var3 = var3 != var5;
                        if(!var3) { _fun0003_ip = 86; continue _fun0003 }
 77:
                        var5 = var5.type;
                        var3 = var6 !== var5;
 86:
                        if(!var3) { _fun0003_ip = 116; continue _fun0003 }
 89:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var2 = var2[var4];
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.closePortalKeyboardIfUnhandled;
                        var2 = var2.bind(var3)();
 116:
                        return var1;
                    }
                };
                var2 = var4.bind(var3)(var2);
                var _closure3_slot0 = var2;
                var1 = function() {
                    var2 = _closure3_slot0;
                    var1 = undefined;
                    var2 = var2.bind(var1)();
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 8;
                    var2 = var4[var2];
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.closePortalKeyboardIfUnhandled;
                    var2 = var2.bind(var3)();
                    return var1;
                };
                return var1;
            };
            var3 = new Array(0);
            var3 = var8.bind(var9)(var6, var3);
            var6 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 8;
            var8 = var9[var3];
            var8 = var6.bind(var4)(var8);
            var11 = var8.PortalKeyboardUIStore;
            var10 = var11.useField;
            var8 = 'keyboard';
            var8 = var10.bind(var11)(var8);
            _closure2_slot1 = var8;
            var3 = var9[var3];
            var3 = var6.bind(var4)(var3);
            var9 = var3.PortalKeyboardUIStore;
            var6 = var9.useField;
            var3 = 'renderers';
            var6 = var6.bind(var9)(var3);
            var9 = var6.length;
            var3 = 0;
            var9 = var3 === var9;
            if(var9) { _fun0002_ip = 211; continue _fun0002 }
 191:
            var10 = var6.length;
            var3 = 1;
            var3 = var10 - var3;
            var3 = var6[var3];
            var9 = var3 === var5;
 211:
            _closure2_slot2 = var9;
            var6 = _closure1_slot3;
            var5 = var6.useMemo;
            var3 = new Array(2);
            var3[0] = var9;
            var3[1] = var8;
            var2 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var3 = _closure2_slot1;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0004_ip = 20; continue _fun0004 }
 13:
                    var1 = _closure2_slot2;
                    if(var1) { _fun0004_ip = 29; continue _fun0004 }
 20:
                    var1 = _closure1_slot6;
                    _fun0004_ip = 44; continue _fun0004;
 29:
                    var3 = _closure2_slot1;
                    var2 = new Array(1);
                    var2[0] = var3;
                    var1 = var2;
 44:
                    return var1;
                }
            };
            var8 = var5.bind(var6)(var2, var3);
            if(var1) { _fun0002_ip = 264; continue _fun0002 }
 252:
            var1 = _closure1_slot3;
            var3 = var1.Fragment;
            _fun0002_ip = 290; continue _fun0002;
 264:
            var2 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 9;
            var1 = var5[var1];
            var1 = var2.bind(var4)(var1);
            var3 = var1.PortalKeyboard;
 290:
            var2 = _closure1_slot5;
            var1 = {};
            var6 = _closure1_slot0;
            var9 = _closure1_slot2;
            var5 = 3;
            var5 = var9[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.TransitionGroup;
            var5 = {};
            var5['items'] = var8;
            var8 = _closure1_slot7;
            var5['getItemKey'] = var8;
            var7 = _closure1_slot8;
            var5['renderItem'] = var7;
            var5 = var2.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var2.bind(var4)(var3, var1);
            return var1;
        }
    };
    var3['PortalKeyboardRenderer'] = var2;
    return var1;
})();