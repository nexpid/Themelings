// app/modules/gateway/useRequestGatewaySocket.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native4;
    var3 = native6;
    var5 = native7;
    var1 = native3;
    var _closure1_slot0 = var1;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var5[var1];
    var1 = undefined;
    var4 = var6.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 3;
    var5 = var5[var4];
    var4 = native2;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/gateway/useRequestGatewaySocket.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useRequestGatewaySocket(arg1) {
        var7 = arg1;
        var _closure2_slot0 = var7;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var1 = 1;
        var4 = var4[var1];
        var1 = undefined;
        var5 = var5.bind(var1)(var4);
        var4 = var5.useCanUIRequestGatewaySocket;
        var6 = var4.bind(var5)();
        var _closure2_slot1 = var6;
        var5 = _closure1_slot3;
        var4 = var5.useEffect;
        var3 = new Array(2);
        var3[0] = var7;
        var3[1] = var6;
        var2 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var2 = _closure2_slot1;
                if(var2) { _fun0001_ip = 14; continue _fun0001 }
 10:
                var2 = undefined;
                return var2;
 14:
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 2;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var4.bind(var2)(var3);
                var2 = var3.setRequestedBy;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                var1 = function() {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 2;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.stopRequest;
                    var2 = _closure2_slot0;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                return var1;
            }
        };
        var2 = var4.bind(var5)(var2, var3);
        return var1;
    };
    var3['useRequestGatewaySocket'] = var2;
    return var1;
})();