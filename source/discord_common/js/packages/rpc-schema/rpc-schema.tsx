// discord_common/js/packages/rpc-schema/rpc-schema.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var4 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = 2;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = '../discord_common/js/packages/rpc-schema/rpc-schema.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function createRPCCommand(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg2;
            var5 = var1.scope;
            var4 = var1.handler;
            var3 = undefined;
            var _closure2_slot0 = var3;
            var _closure2_slot1 = var3;
            var1 = {};
            var1['scope'] = var5;
            var1['handler'] = var4;
            var5 = _closure1_slot0;
            var6 = _closure1_slot1;
            var4 = 0;
            var4 = var6[var4];
            var4 = var5.bind(var3)(var4);
            var5 = var4.RPCCommandSchemas;
            var4 = arg1;
            var5 = var5[var4];
            var4 = null;
            var6 = var4 == var5;
            if(var6) { _fun0001_ip = 89; continue _fun0001 }
 83:
            var3 = var5.request;
 89:
            _closure2_slot0 = var3;
            _closure2_slot1 = var4;
            if(!(var4 != var3)) { _fun0001_ip = 114; continue _fun0001 }
 101:
            var2 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var6 = arg1;
                    var3 = _closure2_slot1;
                    var2 = null;
                    if(!(var2 == var3)) { _fun0002_ip = 76; continue _fun0002 }
 16:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var2 = 1;
                    var2 = var4[var2];
                    var7 = undefined;
                    var4 = var3.bind(var7)(var2);
                    var3 = var4.joiReqObj;
                    var5 = var6.object;
                    var2 = _closure2_slot0;
                    var2 = var2.bind(var7)(var6);
                    var2 = var5.bind(var6)(var2);
                    var2 = var3.bind(var4)(var2);
                    _closure2_slot1 = var2;
 76:
                    var1 = _closure2_slot1;
                    return var1;
                }
            };
            var1['validation'] = var2;
 114:
            return var1;
        }
    };
    var3['createRPCCommand'] = var2;
    return var1;
})();