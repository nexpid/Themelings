// app/design/components/Modal/native/ModalScreen.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var11;
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
    var4 = var4.View;
    var _closure1_slot2 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot3 = var4;
    var4 = 3;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'flex': 1, 'flexDirection': 'column'};
    var10 = 4;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_PRIMARY;
    var9['backgroundColor'] = var10;
    var4['container'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot4 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'design/components/Modal/native/ModalScreen.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ModalScreen(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var9 = var1.backgroundColor;
            var5 = var1.children;
            var2 = _closure1_slot4;
            var4 = undefined;
            var10 = var2.bind(var4)();
            var3 = _closure1_slot0;
            var6 = _closure1_slot1;
            var2 = 5;
            var2 = var6[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.bind(var4)();
            var8 = var2.insets;
            var3 = _closure1_slot3;
            var2 = _closure1_slot2;
            var1 = {};
            var7 = var10.container;
            var6 = new Array(2);
            var6[0] = var7;
            var7 = {};
            var11 = null;
            if(!(var11 == var9)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var10 = var10.container;
            var9 = var10.backgroundColor;
case 2:
            var7['backgroundColor'] = var9;
            var9 = var8.left;
            var7['paddingLeft'] = var9;
            var9 = var8.right;
            var7['paddingRight'] = var9;
            var8 = var8.bottom;
            var7['paddingBottom'] = var8;
            var6[1] = var7;
            var1['style'] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['ModalScreen'] = var2;
    return var1;
})();