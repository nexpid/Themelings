// app/modules/app_state/DiscordAppState.native.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function canUIRequestGatewaySocket() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arguments[0];
            var1 = undefined;
            if(!(var2 === var1)) { _fun0001_ip = 16; continue _fun0001 }
 9:
            var2 = _closure1_slot2;
 16:
            var1 = var2.getState;
            var2 = var1.bind(var2)();
            var1 = 'active';
            var1 = var1 === var2;
            return var1;
        }
    };
    var _closure1_slot3 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var2);
    var1 = 0;
    var7 = var6[var1];
    var2 = native3;
    var1 = undefined;
    var2 = var2.bind(var1)(var7);
    var _closure1_slot2 = var2;
    var2 = {};
    var7 = function canUIRequestGatewaySocket() {
        var2 = _closure1_slot3;
        var1 = undefined;
        var1 = var2.bind(var1)();
        return var1;
    };
    var2['canUIRequestGatewaySocket'] = var7;
    var7 = function getState() {
        var2 = _closure1_slot2;
        var1 = var2.getState;
        var1 = var1.bind(var2)();
        return var1;
    };
    var2['getState'] = var7;
    var4 = function useCanUIRequestGatewaySocket() {
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 1;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var1 = _closure1_slot2;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = function() {
            var3 = _closure1_slot3;
            var2 = _closure1_slot2;
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var2['useCanUIRequestGatewaySocket'] = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/app_state/DiscordAppState.native.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();