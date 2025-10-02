// app/modules/activities/native/useIsViewingActivity.tsx
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/activities/native/useIsViewingActivity.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useIsViewingActivity(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var8 = var1.channelId;
            var _closure2_slot0 = var8;
            var11 = _closure1_slot1;
            var9 = _closure1_slot2;
            var1 = 1;
            var1 = var9[var1];
            var7 = undefined;
            var1 = var11.bind(var7)(var1);
            var1 = var1.bind(var7)(var8);
            var6 = _closure1_slot0;
            var3 = 2;
            var3 = var9[var3];
            var10 = var6.bind(var7)(var3);
            var5 = var10.useIsModalOpen;
            var3 = 3;
            var3 = var9[var3];
            var3 = var11.bind(var7)(var3);
            var3 = var5.bind(var10)(var3);
            var5 = 4;
            var5 = var9[var5];
            var7 = var6.bind(var7)(var5);
            var6 = var7.useStateFromStores;
            var4 = _closure1_slot3;
            var5 = new Array(1);
            var5[0] = var4;
            var4 = new Array(1);
            var4[0] = var8;
            var2 = function() {
                var3 = _closure1_slot3;
                var2 = var3.getChatOpen;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var6.bind(var7)(var5, var2, var4);
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var3;
case 2:
            if(!var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = !var2;
case 4:
            return var1;
        }
    };
    var3['useIsViewingActivity'] = var2;
    return var1;
})();