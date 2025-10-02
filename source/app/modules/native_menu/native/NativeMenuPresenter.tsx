// app/modules/native_menu/native/NativeMenuPresenter.tsx
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
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/native_menu/native/NativeMenuPresenter.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function MenuContainer() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 2;
            var1 = var7[var1];
            var5 = undefined;
            var9 = var2.bind(var5)(var1);
            var8 = var9.useStateFromStoresObject;
            var1 = _closure1_slot4;
            var6 = new Array(1);
            var6[0] = var1;
            var2 = function() {
                var1 = {};
                var3 = _closure1_slot4;
                var2 = var3.getKey;
                var2 = var2.bind(var3)();
                var1['key'] = var2;
                var2 = var3.getMenu;
                var2 = var2.bind(var3)();
                var1['menu'] = var2;
                return var1;
            };
            var1 = new Array(0);
            var2 = var8.bind(var9)(var6, var2, var1);
            var1 = var2.key;
            var _closure2_slot0 = var1;
            var2 = var2.menu;
            var9 = _closure1_slot3;
            var8 = var9.useCallback;
            var6 = new Array(1);
            var6[0] = var1;
            var4 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var3 = 3;
                    var4 = var4[var3];
                    var3 = undefined;
                    var4 = var5.bind(var3)(var4);
                    var3 = var4.hideNativeMenu;
                    var2 = _closure2_slot0;
                    var2 = var3.bind(var4)(var2);
case 2:
                    return var1;
                }
            };
            var4 = var8.bind(var9)(var4, var6);
            var6 = _closure1_slot1;
            var3 = 4;
            var3 = var7[var3];
            var3 = var6.bind(var5)(var3);
            var3 = var3.bind(var5)(var4);
            var4 = null;
            var3 = var4 != var1;
            var1 = null;
            if(!var3) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = var4 != var2;
            var1 = null;
            if(!var3) { _fun0001_ip = 4; continue _fun0001 }
case 6:
            var1 = var2;
case 4:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();