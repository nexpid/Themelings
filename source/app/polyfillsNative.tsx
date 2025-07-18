// app/polyfillsNative.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
        var8 = native1;
        var3 = native2;
        var4 = native7;
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
        if(!(var7 === var6)) { _fun0001_ip = 93; continue _fun0001 }
 79:
        var7 = var5.window;
        var6 = {};
        var7['process'] = var6;
 93:
        var6 = var5.window;
        var7 = var6.process;
        var6 = var5.setImmediate;
        var7['nextTick'] = var6;
        var7 = var8.location;
        var6 = null;
        if(!(var6 == var7)) { _fun0001_ip = 148; continue _fun0001 }
 128:
        var7 = {'protocol': 'https:', 'host': 'discord.com'};
        var8['location'] = var7;
 148:
        var7 = var8.self;
        if(var7) { _fun0001_ip = 163; continue _fun0001 }
 157:
        var8['self'] = var8;
 163:
        var7 = var5.window;
        var7 = var7.crypto;
        if(!(var6 == var7)) { _fun0001_ip = 209; continue _fun0001 }
 179:
        var7 = 4;
        var7 = var4[var7];
        var7 = var3.bind(var1)(var7);
        var9 = var5.window;
        var7 = var8.crypto;
        var9['crypto'] = var7;
 209:
        var7 = var8.Buffer;
        if(!(var6 == var7)) { _fun0001_ip = 243; continue _fun0001 }
 219:
        var7 = 5;
        var7 = var4[var7];
        var7 = var3.bind(var1)(var7);
        var7 = var7.Buffer;
        var8['Buffer'] = var7;
 243:
        var7 = var8.__reanimatedWorkletInit;
        if(!(var6 == var7)) { _fun0001_ip = 266; continue _fun0001 }
 253:
        var7 = function() {
            var1 = undefined;
            return var1;
        };
        var8['__reanimatedWorkletInit'] = var7;
 266:
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
        if(!var2) { _fun0001_ip = 342; continue _fun0001 }
 326:
        var5 = var5.window;
        var5 = var5.TextDecoder;
        var2 = var6 != var5;
 342:
        if(var2) { _fun0001_ip = 357; continue _fun0001 }
 345:
        var2 = 6;
        var2 = var4[var2];
        var2 = var3.bind(var1)(var2);
 357:
        var2 = 7;
        var2 = var4[var2];
        var4 = var3.bind(var1)(var2);
        var3 = var4.fileFinishedImporting;
        var2 = 'polyfillsNative.tsx';
        var2 = var3.bind(var4)(var2);
        return var1;
    }
})();