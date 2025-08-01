// app/design/components/ErrorText/native/ErrorText.native.tsx
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
    var7 = var4.jsx;
    var _closure1_slot3 = var7;
    var4 = var4.jsxs;
    var _closure1_slot4 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'design/components/ErrorText/native/ErrorText.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ErrorText(arg1) {
        var2 = arg1;
        var9 = var2.children;
        var6 = var2.style;
        var7 = _closure1_slot0;
        var10 = _closure1_slot1;
        var2 = 2;
        var2 = var10[var2];
        var4 = undefined;
        var3 = var7.bind(var4)(var2);
        var2 = var3.getNodeText;
        var11 = var2.bind(var3)(var9);
        var _closure2_slot0 = var11;
        var8 = _closure1_slot2;
        var3 = var8.useEffect;
        var2 = new Array(1);
        var2[0] = var11;
        var1 = function() {
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
        var1 = var3.bind(var8)(var1, var2);
        var3 = _closure1_slot4;
        var1 = 4;
        var1 = var10[var1];
        var1 = var7.bind(var4)(var1);
        var2 = var1.Stack;
        var1 = {'direction': 'horizontal', 'spacing': 4, 'align': 'flex-start'};
        var1['style'] = var6;
        var8 = _closure1_slot3;
        var5 = 5;
        var5 = var10[var5];
        var5 = var7.bind(var4)(var5);
        var6 = var5.CircleErrorIcon;
        var5 = {'size': 'xs', 'color': 'text-danger'};
        var6 = var8.bind(var4)(var6, var5);
        var5 = new Array(2);
        var5[0] = var6;
        var6 = 6;
        var6 = var10[var6];
        var6 = var7.bind(var4)(var6);
        var7 = var6.Text;
        var6 = {'variant': 'text-xs/medium', 'color': 'text-danger'};
        var6['children'] = var9;
        var6 = var8.bind(var4)(var7, var6);
        var5[1] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['ErrorText'] = var2;
    return var1;
})();