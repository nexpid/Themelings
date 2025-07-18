// app/modules/voice_panel/native/hooks/useCanConnect.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Permissions;
    var _closure1_slot6 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/voice_panel/native/hooks/useCanConnect.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useCanConnect(arg1) {
        var6 = arg1;
        var _closure2_slot0 = var6;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 5;
        var4 = var4[var3];
        var3 = undefined;
        var5 = var5.bind(var3)(var4);
        var4 = var5.useStateFromStoresObject;
        var7 = _closure1_slot2;
        var3 = new Array(4);
        var3[0] = var7;
        var7 = _closure1_slot4;
        var3[1] = var7;
        var7 = _closure1_slot3;
        var3[2] = var7;
        var2 = _closure1_slot5;
        var3[3] = var2;
        var2 = new Array(1);
        var2[0] = var6;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var4 = _closure1_slot2;
                var2 = var4.getChannel;
                var1 = _closure2_slot0;
                var7 = var2.bind(var4)(var1);
                var1 = {};
                var2 = null;
                var4 = var2 != var7;
                if(!var4) { _fun0001_ip = 77; continue _fun0001 }
 35:
                var5 = var7.isPrivate;
                var5 = var5.bind(var7)();
                if(var5) { _fun0001_ip = 74; continue _fun0001 }
 48:
                var9 = _closure1_slot4;
                var8 = var9.can;
                var6 = _closure1_slot6;
                var6 = var6.CONNECT;
                var5 = var8.bind(var9)(var6, var7);
 74:
                var4 = var5;
 77:
                var1['canConnect'] = var4;
                var2 = var2 == var7;
                if(var2) { _fun0001_ip = 132; continue _fun0001 }
 89:
                var6 = _closure1_slot0;
                var5 = _closure1_slot1;
                var4 = 6;
                var5 = var5[var4];
                var4 = undefined;
                var6 = var6.bind(var4)(var5);
                var5 = var6.isChannelFull;
                var4 = _closure1_slot5;
                var3 = _closure1_slot3;
                var2 = var5.bind(var6)(var7, var4, var3);
 132:
                var1['isAtMaxCapacity'] = var2;
                return var1;
            }
        };
        var1 = var4.bind(var5)(var3, var1, var2);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();