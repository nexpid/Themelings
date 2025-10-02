// app/modules/rpc/server/commands/guilds.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var4 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var5.bind(var1)(var2);
    var2 = var2.getGuildIconURL;
    var _closure1_slot2 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var4.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var4 = var2.RPCCommands;
    var2 = var2.RPCErrors;
    var _closure1_slot4 = var2;
    var2 = {};
    var10 = var4.GET_GUILD;
    var7 = {};
    var9 = 3;
    var11 = var6[var9];
    var11 = var5.bind(var1)(var11);
    var11 = var11.OAuth2Scopes;
    var11 = var11.RPC;
    var7['scope'] = var11;
    var11 = function validation(arg1) {
        var5 = arg1;
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 4;
        var1 = var2[var1];
        var2 = undefined;
        var1 = var3.bind(var2)(var1);
        var2 = var1.bind(var2)(var5);
        var1 = var2.required;
        var3 = var1.bind(var2)();
        var2 = var3.keys;
        var1 = {};
        var4 = var5.string;
        var4 = var4.bind(var5)();
        var1['guild_id'] = var4;
        var4 = var5.number;
        var6 = var4.bind(var5)();
        var5 = var6.min;
        var4 = 0;
        var6 = var5.bind(var6)(var4);
        var5 = var6.max;
        var4 = 60;
        var4 = var5.bind(var6)(var4);
        var1['timeout'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var7['validation'] = var11;
    var11 = function handler(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var6 = var2.socket;
            var5 = var2.server;
            var2 = var2.args;
            var3 = var2.guild_id;
            var _closure2_slot0 = var3;
            var4 = var2.timeout;
            var2 = undefined;
            if(!(var4 === var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = 0;
case 2:
            var3 = var5.storeWait;
            var2 = function() {
                var3 = _closure1_slot3;
                var2 = var3.getGuild;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var4 = var3.bind(var5)(var6, var2, var4);
            var3 = var4.catch;
            var2 = function() {
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 5;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = {};
                var1 = _closure1_slot4;
                var1 = var1.GET_GUILD_TIMED_OUT;
                var3['errorCode'] = var1;
                var1 = var4.prototype;
                var2 = Object.create(var1, {constructor: {value: var4}});
                var5 = 'Request to get guild timed out.';
                var7 = var2;
                var6 = var3;
                var1 = new var7[var4](var6, var5, var4);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            };
            var3 = var3.bind(var4)(var2);
            var2 = var3.then;
            var1 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = arg1;
                    var3 = null;
                    if(!(var3 != var2)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var1 = {};
                    var4 = var2.id;
                    var1['id'] = var4;
                    var4 = var2.name;
                    var1['name'] = var4;
                    var6 = _closure1_slot2;
                    var5 = undefined;
                    var4 = 128;
                    var4 = var6.bind(var5)(var2, var4);
                    var5 = var3 != var4;
                    var3 = null;
                    if(!var5) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var3 = var4;
case 6:
                    var1['icon_url'] = var3;
                    var3 = new Array(0);
                    var1['members'] = var3;
                    var2 = var2.vanityURLCode;
                    var1['vanity_url_code'] = var2;
                    return var1;
case 4:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 5;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = {};
                    var1 = _closure1_slot4;
                    var1 = var1.INVALID_GUILD;
                    var3['errorCode'] = var1;
                    var5 = _closure2_slot0;
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var2 = var1.concat;
                    var1 = 'Invalid guild id: ';
                    var7 = var2.bind(var1)(var5);
                    var2 = var4.prototype;
                    var2 = Object.create(var2, {constructor: {value: var4}});
                    var9 = var2;
                    var8 = var3;
                    var1 = new var9[var4](var8, var7, var6);
                    var1 = var1 instanceof Object ? var1 : var2;
                    throw var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var7['handler'] = var11;
    var2[var10] = var7;
    var7 = var4.GET_GUILDS;
    var4 = {};
    var9 = var6[var9];
    var9 = var5.bind(var1)(var9);
    var9 = var9.OAuth2Scopes;
    var9 = var9.RPC;
    var4['scope'] = var9;
    var8 = function handler() {
        var1 = {};
        var3 = _closure1_slot3;
        var2 = var3.getGuildsArray;
        var4 = var2.bind(var3)();
        var3 = var4.map;
        var2 = function(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var5 = arg1;
                var1 = {};
                var2 = var5.id;
                var1['id'] = var2;
                var2 = var5.name;
                var1['name'] = var2;
                var4 = _closure1_slot2;
                var3 = undefined;
                var2 = 128;
                var3 = var4.bind(var3)(var5, var2);
                var2 = null;
                var4 = var2 != var3;
                if(!var4) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                var2 = var3;
case 8:
                var1['icon_url'] = var2;
                return var1;
            }
        };
        var2 = var3.bind(var4)(var2);
        var1['guilds'] = var2;
        return var1;
    };
    var4['handler'] = var8;
    var2[var7] = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/rpc/server/commands/guilds.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();