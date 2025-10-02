// app/modules/changelog/openChangelog.native.tsx
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
    var4 = var4.CHANGELOG_MODAL_KEY;
    var _closure1_slot3 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/changelog/openChangelog.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function openChangelog() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arguments[0];
            var1 = undefined;
            if(!(var2 === var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = false;
case 2:
            var2 = !var2;
            if(!var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 1;
            var3 = var5[var3];
            var4 = var4.bind(var1)(var3);
            var3 = var4.isModalOpen;
            var2 = var3.bind(var4)();
case 4:
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var5 = _closure1_slot1;
            var3 = _closure1_slot2;
            var4 = 2;
            var4 = var3[var4];
            var6 = var5.bind(var1)(var4);
            var5 = var6.pushLazy;
            var7 = _closure1_slot0;
            var4 = 4;
            var4 = var3[var4];
            var7 = var7.bind(var1)(var4);
            var4 = 3;
            var4 = var3[var4];
            var3 = var3.paths;
            var4 = var7.bind(var1)(var4, var3);
            var3 = _closure1_slot3;
            var2 = {};
            var2 = var5.bind(var6)(var4, var2, var3);
case 6:
            return var1;
        }
    };
    var3['openChangelog'] = var2;
    return var1;
})();