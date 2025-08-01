// app/design/components/Menu/native/MenuGroup.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var12 = 0;
    var7 = var6[var12];
    var4 = metroImportAll;
    var1 = undefined;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot0 = var7;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var11 = var4.StyleSheet;
    var4 = var4.View;
    var _closure1_slot1 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot2 = var8;
    var4 = var4.jsxs;
    var _closure1_slot3 = var4;
    var4 = 3;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {};
    var10['marginLeft'] = var12;
    var12 = var11.hairlineWidth;
    var10['height'] = var12;
    var12 = 4;
    var13 = var6[var12];
    var12 = metroImportDefault;
    var12 = var12.bind(var1)(var13);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_MODIFIER_ACCENT;
    var10['backgroundColor'] = var12;
    var12 = var11.hairlineWidth;
    var11 = -1;
    var11 = var11 * var12;
    var10['marginTop'] = var11;
    var4['divider'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot4 = var4;
    var4 = var7.forwardRef;
    var2 = function(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var8 = arg2;
            var5 = var1.style;
            var9 = var1.children;
            var _closure2_slot0 = var8;
            var1 = _closure1_slot4;
            var4 = undefined;
            var12 = var1.bind(var4)();
            var3 = _closure1_slot3;
            var2 = _closure1_slot1;
            var1 = {};
            var1['style'] = var5;
            var5 = null;
            var5 = var5 !== var8;
            var8 = !var5;
            if(var5) { _fun0001_ip = 87; continue _fun0001 }
 61:
            var11 = _closure1_slot2;
            var10 = _closure1_slot1;
            var5 = {};
            var12 = var12.divider;
            var5['style'] = var12;
            var8 = var11.bind(var4)(var10, var5);
 87:
            var5 = new Array(2);
            var5[0] = var8;
            var7 = _closure1_slot0;
            var8 = var7.Children;
            var7 = var8.map;
            var6 = function(arg1, arg2) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var5 = arg1;
                    var3 = 0;
                    var2 = arg2;
                    var1 = var5;
                    if(!(var3 === var2)) { _fun0002_ip = 68; continue _fun0002 }
 15:
                    var4 = _closure1_slot0;
                    var3 = var4.isValidElement;
                    var3 = var3.bind(var4)(var5);
                    var1 = var5;
                    if(!var3) { _fun0002_ip = 68; continue _fun0002 }
 39:
                    var4 = _closure1_slot0;
                    var3 = var4.cloneElement;
                    var2 = {};
                    var6 = _closure2_slot0;
                    var2['ref'] = var6;
                    var1 = var3.bind(var4)(var5, var2);
 68:
                    return var1;
                }
            };
            var6 = var7.bind(var8)(var9, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'design/components/Menu/native/MenuGroup.tsx';
    var4 = var5.bind(var6)(var4);
    var3['MenuGroup'] = var2;
    return var1;
})();