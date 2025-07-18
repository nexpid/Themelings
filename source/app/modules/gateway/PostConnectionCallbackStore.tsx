// app/modules/gateway/PostConnectionCallbackStore.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native3;
    var3 = native6;
    var5 = native7;
    var1 = function shouldWaitForBlockingModals() {
        var2 = _closure1_slot0;
        var1 = var2.getType;
        var2 = var1.bind(var2)();
        var1 = null;
        var1 = var1 != var2;
        return var1;
    };
    var _closure1_slot3 = var1;
    var8 = function processCallbacks() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = _closure1_slot3;
            var1 = undefined;
            var2 = var2.bind(var1)();
            if(var2) { _fun0001_ip = 45; continue _fun0001 }
 16:
            var5 = _closure1_slot2;
            var4 = var5.forEach;
            var2 = function(arg1) {
                var3 = _closure1_slot4;
                var1 = undefined;
                var2 = arg1;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var2 = var4.bind(var5)(var2);
            var2 = new Array(0);
            _closure1_slot2 = var2;
 45:
            return var1;
        }
    };
    var1 = function handleCallback(arg1) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var1 = global;
        var3 = var1.setImmediate;
        var1 = undefined;
        var2 = function() {
            var2 = _closure2_slot0;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        };
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var _closure1_slot4 = var1;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var5[var1];
    var1 = undefined;
    var4 = var6.bind(var1)(var4);
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot1 = var4;
    var4 = new Array(0);
    var _closure1_slot2 = var4;
    var4 = 2;
    var7 = var5[var4];
    var10 = var6.bind(var1)(var7);
    var9 = var10.subscribe;
    var7 = 'CONNECTION_OPEN';
    var7 = var9.bind(var10)(var7, var8);
    var7 = var5[var4];
    var10 = var6.bind(var1)(var7);
    var9 = var10.subscribe;
    var7 = 'CONNECTION_RESUMED';
    var7 = var9.bind(var10)(var7, var8);
    var4 = var5[var4];
    var7 = var6.bind(var1)(var4);
    var6 = var7.subscribe;
    var4 = 'NUF_COMPLETE';
    var4 = var6.bind(var7)(var4, var8);
    var4 = 3;
    var5 = var5[var4];
    var4 = native2;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/gateway/PostConnectionCallbackStore.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function addPostConnectionCallback(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = arg1;
            var4 = _closure1_slot1;
            var2 = var4.isConnectedOrOverlay;
            var2 = var2.bind(var4)();
            if(!var2) { _fun0002_ip = 47; continue _fun0002 }
 23:
            var2 = _closure1_slot3;
            var4 = undefined;
            var2 = var2.bind(var4)();
            if(var2) { _fun0002_ip = 47; continue _fun0002 }
 36:
            var2 = _closure1_slot4;
            var2 = var2.bind(var4)(var3);
            _fun0002_ip = 61; continue _fun0002;
 47:
            var2 = _closure1_slot2;
            var1 = var2.push;
            var1 = var1.bind(var2)(var3);
 61:
            var1 = undefined;
            return var1;
        }
    };
    var3['addPostConnectionCallback'] = var2;
    return var1;
})();