// app/modules/rpc/server/commands/logs.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var4 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var5.bind(var1)(var2);
    var4 = var2.RPCCommands;
    var9 = var2.RPC_APPLICATION_LOGGING_CATEGORY;
    var2 = 1;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var7 = var2.prototype;
    var7 = Object.create(var7, {constructor: {value: var2}});
    var13 = var7;
    var12 = var9;
    var2 = new var13[var2](var12, var11);
    var2 = var2 instanceof Object ? var2 : var7;
    var _closure1_slot3 = var2;
    var2 = {};
    var7 = var4.CAPTURE_LOG;
    var4 = {};
    var9 = function validation(arg1) {
        var5 = arg1;
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 2;
        var1 = var2[var1];
        var2 = undefined;
        var1 = var3.bind(var2)(var1);
        var2 = var1.bind(var2)(var5);
        var1 = var2.required;
        var3 = var1.bind(var2)();
        var2 = var3.keys;
        var1 = {};
        var4 = var5.string;
        var7 = var4.bind(var5)();
        var6 = var7.max;
        var4 = 10;
        var6 = var6.bind(var7)(var4);
        var4 = var6.required;
        var4 = var4.bind(var6)();
        var1['level'] = var4;
        var4 = var5.string;
        var6 = var4.bind(var5)();
        var5 = var6.max;
        var4 = 1000;
        var5 = var5.bind(var6)(var4);
        var4 = var5.required;
        var4 = var4.bind(var5)();
        var1['message'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var4['validation'] = var9;
    var8 = function handler(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var3 = var1.socket;
            var1 = var1.args;
            var5 = var1.level;
            var8 = var1.message;
            var6 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 3;
            var4 = var4[var1];
            var1 = undefined;
            var7 = var6.bind(var1)(var4);
            var6 = var7.validatePostMessageTransport;
            var4 = var3.transport;
            var4 = var6.bind(var7)(var4);
            var3 = var3.application;
            var7 = var3.id;
            var3 = global;
            var3 = var3.HermesInternal;
            var6 = var3.concat;
            var4 = '';
            var3 = ' - ';
            var4 = var6.bind(var4)(var7, var3, var8);
            var3 = 'log';
            if(!(var3 !== var5)) { _fun0001_ip = 214; continue _fun0001 }
 116:
            var3 = 'warn';
            if(!(var3 !== var5)) { _fun0001_ip = 198; continue _fun0001 }
 124:
            var3 = 'debug';
            if(!(var3 !== var5)) { _fun0001_ip = 181; continue _fun0001 }
 132:
            var3 = 'info';
            if(!(var3 !== var5)) { _fun0001_ip = 164; continue _fun0001 }
 140:
            var3 = 'error';
            if(!(var3 === var5)) { _fun0001_ip = 229; continue _fun0001 }
 148:
            var5 = _closure1_slot3;
            var3 = var5.error;
            var3 = var3.bind(var5)(var4);
            _fun0001_ip = 229; continue _fun0001;
 164:
            var5 = _closure1_slot3;
            var3 = var5.info;
            var3 = var3.bind(var5)(var4);
            _fun0001_ip = 229; continue _fun0001;
 181:
            var5 = _closure1_slot3;
            var3 = var5.verbose;
            var3 = var3.bind(var5)(var4);
            _fun0001_ip = 229; continue _fun0001;
 198:
            var5 = _closure1_slot3;
            var3 = var5.warn;
            var3 = var3.bind(var5)(var4);
            _fun0001_ip = 229; continue _fun0001;
 214:
            var3 = _closure1_slot3;
            var2 = var3.log;
            var2 = var2.bind(var3)(var4);
 229:
            return var1;
        }
    };
    var4['handler'] = var8;
    var2[var7] = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/rpc/server/commands/logs.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();