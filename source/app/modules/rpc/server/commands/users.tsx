// app/modules/rpc/server/commands/users.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var4 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var4.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var16 = var2.RPC_EMBEDDED_APP_SCOPE;
    var15 = var2.RPC_LOCAL_SCOPE;
    var13 = var2.RPC_SCOPE_CONFIG;
    var2 = 2;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var4 = var2.RPCCommands;
    var2 = {};
    var7 = var4.GET_USER;
    var8 = 3;
    var8 = var6[var8];
    var10 = var5.bind(var1)(var8);
    var9 = var10.createRPCCommand;
    var8 = var4.GET_USER;
    var4 = {};
    var12 = {};
    var14 = var13.ANY;
    var13 = new Array(2);
    var13[0] = var16;
    var13[1] = var15;
    var12[var14] = var13;
    var4['scope'] = var12;
    var11 = function handler(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var1 = var1.args;
            var4 = var1.id;
            var3 = _closure1_slot2;
            var1 = var3.getUser;
            var4 = var1.bind(var3)(var4);
            var1 = null;
            var3 = var1 == var4;
            if(var3) { _fun0001_ip = 68; continue _fun0001 }
 41:
            var5 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 4;
            var2 = var3[var2];
            var3 = undefined;
            var2 = var5.bind(var3)(var2);
            var1 = var2.bind(var3)(var4);
 68:
            return var1;
        }
    };
    var4['handler'] = var11;
    var4 = var9.bind(var10)(var8, var4);
    var2[var7] = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/rpc/server/commands/users.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();