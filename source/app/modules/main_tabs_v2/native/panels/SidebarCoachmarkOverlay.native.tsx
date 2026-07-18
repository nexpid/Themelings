// app/modules/main_tabs_v2/native/panels/SidebarCoachmarkOverlay.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var7;
    var1 = function SidebarCoachmarkOverlayLayer(arg1) {
        var1 = arg1;
        var6 = var1.manager;
        var _closure2_slot0 = var6;
        var3 = _closure1_slot4;
        var2 = var3.useState;
        var1 = {};
        var3 = var2.bind(var3)(var1);
        var2 = _closure1_slot3;
        var4 = undefined;
        var1 = 2;
        var2 = var2.bind(var4)(var3, var1);
        var1 = 1;
        var1 = var2[var1];
        var _closure2_slot1 = var1;
        var8 = _closure1_slot4;
        var3 = var8.useEffect;
        var2 = new Array(1);
        var2[0] = var6;
        var1 = function() {
            var4 = _closure2_slot0;
            var3 = function subscribeManager(arg1, arg2) {
                var3 = arg1;
                var _closure4_slot0 = var3;
                var2 = arg2;
                var3['invalidate'] = var2;
                var1 = function() {
                    var2 = _closure4_slot0;
                    var1 = function() {
                        var1 = null;
                        return var1;
                    };
                    var2['invalidate'] = var1;
                    var1 = undefined;
                    return var1;
                };
                return var1;
            };
            var2 = undefined;
            var1 = function() {
                var3 = _closure2_slot1;
                var2 = undefined;
                var1 = {};
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var1 = var3.bind(var2)(var4, var1);
            return var1;
        };
        var1 = var3.bind(var8)(var1, var2);
        var3 = _closure1_slot7;
        var2 = _closure1_slot5;
        var1 = {};
        var8 = _closure1_slot10;
        var8 = var8.overlay;
        var1['style'] = var8;
        var8 = function ref(arg1) {
            var3 = _closure2_slot0;
            var2 = var3.setSurfaceRef;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1['ref'] = var8;
        var7 = _closure1_slot6;
        var1['onLayout'] = var7;
        var7 = 'box-none';
        var1['pointerEvents'] = var7;
        var7 = var6.items;
        var6 = var7.map;
        var5 = function(arg1) {
            var1 = arg1;
            var5 = _closure1_slot7;
            var2 = _closure1_slot4;
            var4 = var2.Fragment;
            var3 = {};
            var2 = var1.component;
            var3['children'] = var2;
            var2 = var1.key;
            var1 = undefined;
            var1 = var5.bind(var1)(var4, var3, var2);
            return var1;
        };
        var5 = var6.bind(var7)(var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot11 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var12 = 1;
    var5 = var7[var12];
    var4 = metroImportAll;
    var8 = var4.bind(var1)(var5);
    var _closure1_slot4 = var8;
    var4 = 2;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var9 = var4.StyleSheet;
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.NOOP;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var5 = var4.jsx;
    var _closure1_slot7 = var5;
    var4 = var4.jsxs;
    var _closure1_slot8 = var4;
    var5 = var8.createContext;
    var4 = null;
    var4 = var5.bind(var8)(var4);
    var _closure1_slot9 = var4;
    var8 = var9.create;
    var5 = {};
    var10 = {};
    var14 = var9.absoluteFillObject;
    var15 = var10;
    var11 = copyDataProperties(var15, var14);
    var11 = 'zIndex';
    var10[10] = var12;
    var5['overlay'] = var10;
    var5 = var8.bind(var9)(var5);
    var _closure1_slot10 = var5;
    var5 = 7;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/main_tabs_v2/native/panels/SidebarCoachmarkOverlay.native.tsx';
    var5 = var6.bind(var7)(var5);
    var3['SidebarCoachmarkOverlayContext'] = var4;
    var2 = function SidebarCoachmarkOverlay(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var9 = var1.children;
            var8 = var1.enabled;
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 5;
            var1 = var3[var1];
            var4 = undefined;
            var2 = var2.bind(var4)(var1);
            var1 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 6;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.LayerContextManager;
                var2 = var1.prototype;
                var2 = Object.create(var2, {constructor: {value: var1}});
                var5 = var2;
                var1 = new var5[var1](var4);
                var1 = var1 instanceof Object ? var1 : var2;
                return var1;
            };
            var10 = var2.bind(var4)(var1);
            var3 = _closure1_slot8;
            var1 = _closure1_slot9;
            var2 = var1.Provider;
            var1 = {};
            var5 = null;
            if(!var8) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = var10;
case 2:
            var1['value'] = var5;
            var5 = new Array(2);
            var5[0] = var9;
            var6 = null;
            if(!var8) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var9 = _closure1_slot7;
            var8 = _closure1_slot11;
            var7 = {};
            var7['manager'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 4:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['SidebarCoachmarkOverlay'] = var2;
    return var1;
})();