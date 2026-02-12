// app/modules/frames/panel/native/FramePanelContainer.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
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
    var7 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var9 = var4.jsx;
    var4 = 3;
    var4 = var6[var4];
    var8 = var11.bind(var1)(var4);
    var4 = {};
    var10 = 4;
    var10 = var6[var10];
    var11 = var11.bind(var1)(var10);
    var10 = {};
    var10 = var9.bind(var1)(var11, var10);
    var4['children'] = var10;
    var4 = var9.bind(var1)(var8, var4);
    var _closure1_slot3 = var4;
    var4 = var7.memo;
    var2 = function FramePanelContainer() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 5;
            var3 = var3[var1];
            var1 = undefined;
            var5 = var4.bind(var1)(var3);
            var4 = var5.useStateFromStores;
            var1 = _closure1_slot2;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                var2 = _closure1_slot2;
                var1 = var2.getConnectedFrame;
                var2 = var1.bind(var2)();
                var1 = null;
                var1 = var1 != var2;
                return var1;
            };
            var3 = var4.bind(var5)(var3, var1);
            var1 = null;
            if(!var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = _closure1_slot3;
case 2:
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/frames/panel/native/FramePanelContainer.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();