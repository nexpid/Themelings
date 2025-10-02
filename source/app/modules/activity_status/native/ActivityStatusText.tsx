// app/modules/activity_status/native/ActivityStatusText.tsx
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
    var10 = 1;
    var4 = var6[var10];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot2 = var4;
    var4 = 2;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var9['flexShrink'] = var10;
    var4['text'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot3 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/activity_status/native/ActivityStatusText.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ActivityStatusText(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var6 = var3.children;
            var8 = var3.style;
            var9 = var3.variant;
            var4 = undefined;
            if(!(var9 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var9 = 'text-xs/medium';
case 2:
            var2 = {'children': 0, 'style': 0, 'variant': 0};
            var12 = null;
            var13 = var2;
            var1 = silentSetPrototypeOf(var13, var12);
            var13 = {};
            var12 = var3;
            var11 = var2;
            var12 = copyDataProperties(var13, var12, var11);
            var2 = _closure1_slot3;
            var7 = var2.bind(var4)();
            var3 = _closure1_slot2;
            var2 = _closure1_slot0;
            var10 = _closure1_slot1;
            var1 = 3;
            var1 = var10[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.Text;
            var1 = {};
            var1['variant'] = var9;
            var9 = 'text-muted';
            var1['color'] = var9;
            var9 = var7.text;
            var7 = new Array(2);
            var7[0] = var9;
            var7[1] = var8;
            var1['style'] = var7;
            var7 = 1;
            var1['lineClamp'] = var7;
            var13 = var1;
            var5 = copyDataProperties(var13, var12);
            var5 = 'children';
            var1[var5] = var6;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();