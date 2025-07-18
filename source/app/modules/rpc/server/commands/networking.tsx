// app/modules/rpc/server/commands/networking.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var1 = native3;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = global;
    var7 = var1.Object;
    var4 = var7.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var7)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var5.bind(var1)(var2);
    var9 = var2.RPC_LOCAL_SCOPE;
    var2 = 1;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var4 = var2.Endpoints;
    var _closure1_slot3 = var4;
    var4 = var2.AnalyticEvents;
    var _closure1_slot4 = var4;
    var4 = var2.RPCCommands;
    var2 = {};
    var10 = var4.GET_NETWORKING_CONFIG;
    var7 = {};
    var7['scope'] = var9;
    var11 = function handler() {
        var12 = global;
        var4 = var12.Promise;
        var3 = var4.all;
        var7 = _closure1_slot0;
        var9 = _closure1_slot2;
        var5 = 2;
        var2 = var9[var5];
        var6 = undefined;
        var2 = var7.bind(var6)(var2);
        var11 = var2.HTTP;
        var10 = var11.get;
        var2 = {'url': null, 'retries': 3, 'rejectWithError': false};
        var13 = var12.location;
        var13 = var13.protocol;
        var12 = var12.window;
        var12 = var12.GLOBAL_ENV;
        var12 = var12.NETWORKING_ENDPOINT;
        var12 = var13 + var12;
        var2['url'] = var12;
        var11 = var10.bind(var11)(var2);
        var10 = var11.then;
        var2 = function(arg1) {
            var1 = arg1;
            var1 = var1.body;
            var1 = var1.address;
            return var1;
        };
        var10 = var10.bind(var11)(var2);
        var2 = new Array(2);
        var2[0] = var10;
        var5 = var9[var5];
        var5 = var7.bind(var6)(var5);
        var7 = var5.HTTP;
        var6 = var7.post;
        var5 = {'url': null, 'retries': 3, 'oldFormErrors': true, 'rejectWithError': false};
        var8 = _closure1_slot3;
        var8 = var8.NETWORKING_TOKEN;
        var5['url'] = var8;
        var7 = var6.bind(var7)(var5);
        var6 = var7.then;
        var5 = function(arg1) {
            var1 = arg1;
            var1 = var1.body;
            var1 = var1.token;
            return var1;
        };
        var5 = var6.bind(var7)(var5);
        var2[1] = var5;
        var3 = var3.bind(var4)(var2);
        var2 = var3.then;
        var1 = function(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var5 = arg1;
                var1 = var5[Symbol.iterator];
                var5 = var1().next;
                var2 = var5().value;
                var3 = var1;
                var7 = undefined;
                var4 = var3 === var7;
                var3 = undefined;
                if(var4) { _fun0001_ip = 27; continue _fun0001 }
 24:
                var3 = var2;
 27:
                var2 = undefined;
                if(var4) { _fun0001_ip = 57; continue _fun0001 }
 32:
                var6 = var5().value;
                var5 = var1;
                var5 = var5 === var7;
                var2 = undefined;
                var4 = var5;
                if(var5) { _fun0001_ip = 57; continue _fun0001 }
 51:
                var2 = var6;
                var4 = var5;
 57:
                if(var4) { _fun0001_ip = 63; continue _fun0001 }
 60:
                var1.return();
 63:
                var1 = {};
                var1['address'] = var3;
                var1['token'] = var2;
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var7['handler'] = var11;
    var2[var10] = var7;
    var10 = var4.NETWORKING_SYSTEM_METRICS;
    var7 = {};
    var7['scope'] = var9;
    var11 = function handler(arg1) {
        var2 = arg1;
        var1 = var2.socket;
        var5 = var2.args;
        var1 = var1.application;
        var1 = var1.id;
        var5['application_id'] = var1;
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 3;
        var3 = var3[var1];
        var1 = undefined;
        var4 = var4.bind(var1)(var3);
        var3 = var4.track;
        var2 = _closure1_slot4;
        var2 = var2.NETWORKING_SYSTEM_METRICS;
        var2 = var3.bind(var4)(var2, var5);
        return var1;
    };
    var7['handler'] = var11;
    var2[var10] = var7;
    var10 = var4.NETWORKING_PEER_METRICS;
    var7 = {};
    var7['scope'] = var9;
    var11 = function handler(arg1) {
        var2 = arg1;
        var1 = var2.socket;
        var5 = var2.args;
        var1 = var1.application;
        var1 = var1.id;
        var5['application_id'] = var1;
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 3;
        var3 = var3[var1];
        var1 = undefined;
        var4 = var4.bind(var1)(var3);
        var3 = var4.track;
        var2 = _closure1_slot4;
        var2 = var2.NETWORKING_PEER_METRICS;
        var2 = var3.bind(var4)(var2, var5);
        return var1;
    };
    var7['handler'] = var11;
    var2[var10] = var7;
    var7 = var4.NETWORKING_CREATE_TOKEN;
    var4 = {};
    var4['scope'] = var9;
    var8 = function handler() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 2;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var3 = var1.HTTP;
        var2 = var3.post;
        var1 = {'url': null, 'retries': 1, 'oldFormErrors': true, 'rejectWithError': false};
        var4 = _closure1_slot3;
        var4 = var4.NETWORKING_TOKEN;
        var1['url'] = var4;
        var3 = var2.bind(var3)(var1);
        var2 = var3.then;
        var1 = function(arg1) {
            var1 = arg1;
            var1 = var1.body;
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var4['handler'] = var8;
    var2[var7] = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/rpc/server/commands/networking.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();