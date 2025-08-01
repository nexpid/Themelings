// app/modules/reactions/useCanRemoveAllReactions.tsx
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
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Permissions;
    var _closure1_slot3 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/reactions/useCanRemoveAllReactions.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var6 = _closure1_slot0;
            var8 = _closure1_slot1;
            var4 = 2;
            var4 = var8[var4];
            var5 = undefined;
            var7 = var6.bind(var5)(var4);
            var4 = var7.useIsActiveChannelOrUnarchivableThread;
            var7 = var4.bind(var7)(var3);
            var _closure2_slot1 = var7;
            var4 = 3;
            var4 = var8[var4];
            var6 = var6.bind(var5)(var4);
            var5 = var6.useStateFromStores;
            var2 = _closure1_slot2;
            var4 = new Array(1);
            var4[0] = var2;
            var2 = new Array(2);
            var2[0] = var3;
            var2[1] = var7;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var5 = _closure1_slot2;
                    var4 = var5.can;
                    var1 = _closure1_slot3;
                    var3 = var1.MANAGE_MESSAGES;
                    var1 = _closure2_slot0;
                    var1 = var4.bind(var5)(var3, var1);
                    if(!var1) { _fun0002_ip = 43; continue _fun0002 }
 39:
                    var1 = _closure2_slot1;
 43:
                    return var1;
                }
            };
            var2 = var5.bind(var6)(var4, var1, var2);
            var1 = null;
            var1 = var1 != var3;
            if(!var1) { _fun0001_ip = 116; continue _fun0001 }
 113:
            var1 = var2;
 116:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();