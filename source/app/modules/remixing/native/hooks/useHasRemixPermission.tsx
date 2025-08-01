// app/modules/remixing/native/hooks/useHasRemixPermission.tsx
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
    var4 = var4.Permissions;
    var _closure1_slot4 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/remixing/native/hooks/useHasRemixPermission.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var5 = _closure1_slot0;
        var6 = _closure1_slot1;
        var3 = 3;
        var7 = var6[var3];
        var4 = undefined;
        var10 = var5.bind(var4)(var7);
        var9 = var10.useStateFromStores;
        var7 = _closure1_slot2;
        var8 = new Array(1);
        var8[0] = var7;
        var7 = function() {
            var3 = _closure1_slot2;
            var2 = var3.getChannel;
            var1 = _closure2_slot0;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var7 = var9.bind(var10)(var8, var7);
        var _closure2_slot1 = var7;
        var3 = var6[var3];
        var4 = var5.bind(var4)(var3);
        var3 = var4.useStateFromStores;
        var5 = _closure1_slot3;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var1 = _closure2_slot1;
                var5 = null;
                var4 = var5 == var1;
                var1 = undefined;
                if(var4) { _fun0001_ip = 32; continue _fun0001 }
 18:
                var6 = _closure2_slot1;
                var4 = var6.isDM;
                var1 = var4.bind(var6)();
 32:
                if(var1) { _fun0001_ip = 65; continue _fun0001 }
 35:
                var4 = _closure2_slot1;
                var4 = var5 == var4;
                var2 = undefined;
                if(var4) { _fun0001_ip = 62; continue _fun0001 }
 48:
                var5 = _closure2_slot1;
                var4 = var5.isMultiUserDM;
                var2 = var4.bind(var5)();
 62:
                var1 = var2;
 65:
                if(var1) { _fun0001_ip = 137; continue _fun0001 }
 68:
                var7 = _closure1_slot3;
                var6 = var7.can;
                var2 = _closure1_slot4;
                var5 = var2.SEND_MESSAGES;
                var2 = _closure2_slot1;
                var2 = var6.bind(var7)(var5, var2);
                if(!var2) { _fun0001_ip = 134; continue _fun0001 }
 104:
                var6 = _closure1_slot3;
                var5 = var6.can;
                var4 = _closure1_slot4;
                var4 = var4.ATTACH_FILES;
                var3 = _closure2_slot1;
                var2 = var5.bind(var6)(var4, var3);
 134:
                var1 = var2;
 137:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();