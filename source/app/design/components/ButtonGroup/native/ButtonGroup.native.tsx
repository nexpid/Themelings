// app/design/components/ButtonGroup/native/ButtonGroup.native.tsx
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
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot2 = var4;
    var4 = 2;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 16;
    var9['paddingVertical'] = var10;
    var4['container'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot3 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'design/components/ButtonGroup/native/ButtonGroup.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ButtonGroup(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var7 = arg1;
            var3 = var7.size;
            var4 = undefined;
            if(!(var3 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = 'md';
case 2:
            var6 = var7.children;
            var5 = var7.style;
            var2 = {'size': 0, 'children': 0, 'style': 0};
            var12 = null;
            var13 = var2;
            var1 = silentSetPrototypeOf(var13, var12);
            var13 = {};
            var12 = var7;
            var11 = var2;
            var8 = copyDataProperties(var13, var12, var11);
            var2 = _closure1_slot3;
            var7 = var2.bind(var4)();
            var9 = 8;
            var2 = 'sm';
            if(!(var2 === var3)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var9 = 12;
case 4:
            var3 = _closure1_slot2;
            var2 = _closure1_slot0;
            var10 = _closure1_slot1;
            var1 = 3;
            var1 = var10[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.Stack;
            var1 = {};
            var13 = var1;
            var12 = var8;
            var8 = copyDataProperties(var13, var12);
            var8 = 'spacing';
            var1[7] = var9;
            var8 = var7.container;
            var7 = new Array(2);
            var7[0] = var8;
            var7[1] = var5;
            var5 = 'style';
            var1[4] = var7;
            var5 = 'children';
            var1[4] = var6;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['ButtonGroup'] = var2;
    return var1;
})();