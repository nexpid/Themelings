// app/modules/gateway/GatewayZstdUtils.native.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var1 = native3;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.NativeModules;
    var _closure1_slot3 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/gateway/GatewayZstdUtils.native.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function supportsZstd() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 1;
            var1 = var4[var1];
            var4 = undefined;
            var3 = var3.bind(var4)(var1);
            var1 = var3.isAndroid;
            var1 = var1.bind(var3)();
            if(var1) { _fun0001_ip = 76; continue _fun0001 }
 37:
            var1 = _closure1_slot3;
            var5 = var1.DCDCompressionManager;
            var1 = null;
            var6 = var1 == var5;
            var3 = undefined;
            if(var6) { _fun0001_ip = 64; continue _fun0001 }
 58:
            var3 = var5.supportsZstd;
 64:
            var1 = var1 != var3;
            if(!var1) { _fun0001_ip = 74; continue _fun0001 }
 71:
            var1 = var3;
 74:
            _fun0001_ip = 112; continue _fun0001;
 76:
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 2;
            var2 = var5[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.getConstants;
            var2 = var2.bind(var3)();
            var1 = var2.supportsZstd;
 112:
            return var1;
        }
    };
    var3['supportsZstd'] = var4;
    var2 = function createZstdContextWeb() {
        var1 = global;
        var3 = var1.Error;
        var1 = var3.prototype;
        var2 = Object.create(var1, {constructor: {value: var3}});
        var4 = 'Attempting to use createZstdContextWeb in a native context. Use MobileGatewayCompressionHandler instead.';
        var5 = var2;
        var1 = new var5[var3](var4, var3);
        var1 = var1 instanceof Object ? var1 : var2;
        throw var1;
    };
    var3['createZstdContextWeb'] = var2;
    return var1;
})();