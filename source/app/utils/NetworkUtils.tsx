// app/utils/NetworkUtils.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var2);
    var1 = new Array(0);
    var _closure1_slot2 = var1;
    var1 = false;
    var _closure1_slot3 = var1;
    var2 = {};
    var1 = 0;
    var7 = var6[var1];
    var1 = undefined;
    var7 = var5.bind(var1)(var7);
    var10 = var7.default;
    var11 = var2;
    var7 = copyDataProperties(var11, var10);
    var7 = function awaitOnline() {
        var1 = global;
        var3 = var1.Promise;
        var1 = var3.prototype;
        var2 = Object.create(var1, {constructor: {value: var3}});
        var4 = function(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var2 = arg1;
                var7 = _closure1_slot0;
                var1 = _closure1_slot1;
                var6 = 0;
                var5 = var1[var6];
                var1 = undefined;
                var5 = var7.bind(var1)(var5);
                var7 = var5.default;
                var5 = var7.isOnline;
                var5 = var5.bind(var7)();
                if(var5) { _fun0001_ip = 118; continue _fun0001 }
 47:
                var7 = _closure1_slot2;
                var5 = var7.push;
                var5 = var5.bind(var7)(var2);
                var5 = _closure1_slot3;
                if(var5) { _fun0001_ip = 116; continue _fun0001 }
 68:
                var5 = true;
                _closure1_slot3 = var5;
                var5 = function whenOnline() {
                    var3 = _closure1_slot2;
                    var4 = var3.forEach;
                    var2 = function(arg1) {
                        var2 = arg1;
                        var1 = undefined;
                        var1 = var2.bind(var1)();
                        return var1;
                    };
                    var2 = var4.bind(var3)(var2);
                    var2 = 0;
                    var3['length'] = var2;
                    var3 = false;
                    _closure1_slot3 = var3;
                    var3 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var2 = var1[var2];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var4 = var2.default;
                    var3 = var4.removeOnlineCallback;
                    var2 = _closure3_slot0;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var _closure3_slot0 = var5;
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var6];
                var3 = var4.bind(var1)(var3);
                var4 = var3.default;
                var3 = var4.addOnlineCallback;
                var3 = var3.bind(var4)(var5);
 116:
                return var1;
 118:
                var1 = var2.bind(var1)();
                return var1;
            }
        };
        var5 = var2;
        var1 = new var5[var3](var4, var3);
        var1 = var1 instanceof Object ? var1 : var2;
        return var1;
    };
    var4 = 'awaitOnline';
    var2[var4] = var7;
    var4 = 1;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'utils/NetworkUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();