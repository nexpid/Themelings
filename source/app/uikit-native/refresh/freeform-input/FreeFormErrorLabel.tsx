// app/uikit-native/refresh/freeform-input/FreeFormErrorLabel.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot3 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'uikit-native/refresh/freeform-input/FreeFormErrorLabel.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function Label(arg1) {
        var1 = arg1;
        var5 = var1.children;
        var6 = var1.style;
        var2 = _closure1_slot0;
        var7 = _closure1_slot1;
        var4 = 2;
        var8 = var7[var4];
        var4 = undefined;
        var9 = var2.bind(var4)(var8);
        var8 = var9.getNodeText;
        var11 = var8.bind(var9)(var5);
        var _closure2_slot0 = var11;
        var10 = _closure1_slot2;
        var9 = var10.useEffect;
        var8 = new Array(1);
        var8[0] = var11;
        var3 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var3 = _closure2_slot0;
                var2 = null;
                var2 = var2 != var3;
                if(!var2) { _fun0001_ip = 28; continue _fun0001 }
 16:
                var4 = _closure2_slot0;
                var3 = '';
                var2 = var3 !== var4;
 28:
                if(!var2) { _fun0001_ip = 77; continue _fun0001 }
 31:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 3;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
                var3 = var2.AccessibilityAnnouncer;
                var2 = var3.announce;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
 77:
                var1 = undefined;
                return var1;
            }
        };
        var3 = var9.bind(var10)(var3, var8);
        var3 = _closure1_slot3;
        var1 = 4;
        var1 = var7[var1];
        var1 = var2.bind(var4)(var1);
        var2 = var1.Text;
        var1 = {'style': null, 'variant': 'text-xs/medium', 'color': 'text-danger'};
        var1['style'] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();