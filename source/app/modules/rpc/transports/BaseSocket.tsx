// app/modules/rpc/transports/BaseSocket.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var7;
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
    var7 = var4.RPC_VERSION;
    var _closure1_slot4 = var7;
    var4 = var4.RPCCloseCodes;
    var _closure1_slot5 = var4;
    var2 = function() {
        var4 = _closure1_slot3;
        var3 = function BaseSocket(arg1, arg2, arg3) {
            var4 = arg2;
            var3 = this;
            var6 = _closure1_slot2;
            var5 = _closure2_slot0;
            var1 = undefined;
            var5 = var6.bind(var1)(var3, var5);
            var5 = arg1;
            var3['transport'] = var5;
            var3['version'] = var4;
            var5 = arg3;
            var3['encoding'] = var5;
            var5 = _closure1_slot0;
            var6 = _closure1_slot1;
            var2 = 3;
            var2 = var6[var2];
            var5 = var5.bind(var1)(var2);
            var2 = var5.uniqueId;
            var2 = var2.bind(var5)();
            var3['id'] = var2;
            var5 = {'authing': false, 'scopes': null, 'accessToken': null};
            var2 = new Array(0);
            var5['scopes'] = var2;
            var2 = global;
            var8 = var2.Date;
            var6 = var8.prototype;
            var7 = Object.create(var6, {constructor: {value: var8}});
            var10 = 0;
            var11 = var7;
            var6 = new var11[var8](var10, var9);
            var6 = var6 instanceof Object ? var6 : var7;
            var5['expires'] = var6;
            var3['authorization'] = var5;
            var5 = {'id': null, 'name': null, 'icon': null};
            var3['application'] = var5;
            var2 = var2.AbortController;
            var5 = var2.prototype;
            var5 = Object.create(var5, {constructor: {value: var2}});
            var11 = var5;
            var2 = new var11[var2](var10);
            var2 = var2 instanceof Object ? var2 : var5;
            var3['abortController'] = var2;
            var2 = var3.checkRpcVersion;
            var2 = var2.bind(var3)(var4);
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var5 = 'checkRpcVersion';
        var1['key'] = var5;
        var2 = function value(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var5 = arg1;
                var1 = null;
                if(!(var1 != var5)) { _fun0001_ip = 31; continue _fun0001 }
 9:
                var1 = _closure1_slot4;
                if(!(!(var5 > var1))) { _fun0001_ip = 31; continue _fun0001 }
 20:
                var1 = 1;
                if(!(!(var5 < var1))) { _fun0001_ip = 31; continue _fun0001 }
 27:
                var1 = undefined;
                return var1;
 31:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 4;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = {};
                var1 = _closure1_slot5;
                var1 = var1.INVALID_VERSION;
                var3['closeCode'] = var1;
                var1 = global;
                var1 = var1.HermesInternal;
                var2 = var1.concat;
                var1 = 'Invalid Version: ';
                var6 = var2.bind(var1)(var5);
                var2 = var4.prototype;
                var2 = Object.create(var2, {constructor: {value: var4}});
                var8 = var2;
                var7 = var3;
                var1 = new var8[var4](var7, var6, var5);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            }
        };
        var1['value'] = var2;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2 = var2.bind(var1)();
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/rpc/transports/BaseSocket.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();