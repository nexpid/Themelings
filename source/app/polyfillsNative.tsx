// app/polyfillsNative.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var8 = global;
        var3 = require;
        var4 = dependencyMap;
        var1 = 0;
        var5 = var4[var1];
        var1 = undefined;
        var5 = var3.bind(var1)(var5);
        var5 = 1;
        var5 = var4[var5];
        var5 = var3.bind(var1)(var5);
        var5 = 2;
        var5 = var4[var5];
        var5 = var3.bind(var1)(var5);
        var5 = 3;
        var5 = var4[var5];
        var5 = var3.bind(var1)(var5);
        var5 = global;
        var6 = var5.process;
        var7 = 'undefined';
        var6 = typeof var6;
        if(!(var7 === var6)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
        var7 = var5.window;
        var6 = {};
        var7['process'] = var6;
case 2:
        var6 = var5.window;
        var7 = var6.process;
        var6 = var5.setImmediate;
        var7['nextTick'] = var6;
        var7 = var8.location;
        var6 = null;
        if(!(var6 == var7)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
        var7 = {'protocol': 'https:', 'host': 'discord.com'};
        var8['location'] = var7;
case 4:
        var7 = var8.self;
        if(var7) { _fun0001_ip = 6; continue _fun0001 }
case 7:
        var8['self'] = var8;
case 6:
        var7 = var5.window;
        var7 = var7.crypto;
        if(!(var6 == var7)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
        var7 = 4;
        var7 = var4[var7];
        var7 = var3.bind(var1)(var7);
        var9 = var5.window;
        var7 = var8.crypto;
        var9['crypto'] = var7;
case 8:
        var7 = var8.Buffer;
        if(!(var6 == var7)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
        var7 = 5;
        var7 = var4[var7];
        var7 = var3.bind(var1)(var7);
        var7 = var7.Buffer;
        var8['Buffer'] = var7;
case 10:
        var7 = var8.__reanimatedWorkletInit;
        if(!(var6 == var7)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
        var7 = function() {
            var1 = undefined;
            return var1;
        };
        var8['__reanimatedWorkletInit'] = var7;
case 12:
        var7 = var5.Set;
        var7 = var7.prototype;
        var8 = var5.Map;
        var8 = var8.prototype;
        var2 = function() {
            var1 = global;
            var3 = var1.Array;
            var2 = var3.from;
            var1 = this;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var8['toJSON'] = var2;
        var7['toJSON'] = var2;
        var2 = var5.window;
        var2 = var2.TextEncoder;
        var2 = var6 != var2;
        if(!var2) { _fun0001_ip = 14; continue _fun0001 }
case 15:
        var5 = var5.window;
        var5 = var5.TextDecoder;
        var2 = var6 != var5;
case 14:
        if(var2) { _fun0001_ip = 16; continue _fun0001 }
case 17:
        var2 = 6;
        var2 = var4[var2];
        var2 = var3.bind(var1)(var2);
case 16:
        var2 = 7;
        var2 = var4[var2];
        var4 = var3.bind(var1)(var2);
        var3 = var4.fileFinishedImporting;
        var2 = 'polyfillsNative.tsx';
        var2 = var3.bind(var4)(var2);
        return var1;
    }
})();