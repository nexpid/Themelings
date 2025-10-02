// app/modules/read_states/ReadStateUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.UnreadSetting;
    var _closure1_slot4 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/read_states/ReadStateUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function getHasImportantUnread(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg1;
            var4 = _closure1_slot2;
            var3 = var4.hasUnread;
            var1 = var5.id;
            var1 = var3.bind(var4)(var1);
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = _closure1_slot3;
            var3 = var4.resolveUnreadSetting;
            var3 = var3.bind(var4)(var5);
            var2 = _closure1_slot4;
            var2 = var2.ALL_MESSAGES;
            var1 = var3 === var2;
case 2:
            return var1;
        }
    };
    var3['getHasImportantUnread'] = var4;
    var2 = function useHasImportantUnread(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 3;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var6 = _closure1_slot2;
        var2 = new Array(2);
        var2[0] = var6;
        var5 = _closure1_slot3;
        var2[1] = var5;
        var1 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var5 = _closure1_slot2;
                var4 = var5.hasUnread;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var4.bind(var5)(var1);
                if(!var1) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                var5 = _closure1_slot3;
                var4 = var5.resolveUnreadSetting;
                var3 = _closure2_slot0;
                var3 = var4.bind(var5)(var3);
                var2 = _closure1_slot4;
                var2 = var2.ALL_MESSAGES;
                var1 = var3 === var2;
case 4:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['useHasImportantUnread'] = var2;
    return var1;
})();