// app/modules/pomelo/PomeloModalActionCreators.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.POMELO_MODAL_KEY;
    var _closure1_slot3 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/pomelo/PomeloModalActionCreators.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function openPomeloModal(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var6 = arguments[1];
            var8 = undefined;
            if(!(var6 === var8)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = false;
case 2:
            var4 = _closure1_slot1;
            var2 = _closure1_slot2;
            var3 = 1;
            var3 = var2[var3];
            var5 = var4.bind(var8)(var3);
            var4 = var5.pushLazy;
            var7 = _closure1_slot0;
            var3 = 3;
            var3 = var2[var3];
            var7 = var7.bind(var8)(var3);
            var3 = 2;
            var3 = var2[var3];
            var2 = var2.paths;
            var3 = var7.bind(var8)(var3, var2);
            var2 = {};
            var7 = function onCloseModal() {
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 1;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var4.bind(var2)(var3);
                var2 = var3.popWithKey;
                var1 = _closure1_slot3;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2['onCloseModal'] = var7;
            var7 = arg1;
            var2['source'] = var7;
            var2['oneClickFlow'] = var6;
            var1 = _closure1_slot3;
            var1 = var4.bind(var5)(var3, var2, var1);
            var1 = true;
            return var1;
        }
    };
    var3['openPomeloModal'] = var2;
    return var1;
})();