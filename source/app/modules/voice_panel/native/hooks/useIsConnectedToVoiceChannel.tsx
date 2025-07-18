// app/modules/voice_panel/native/hooks/useIsConnectedToVoiceChannel.tsx
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.RTCConnectionStates;
    var _closure1_slot5 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/voice_panel/native/hooks/useIsConnectedToVoiceChannel.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useIsConnectedToVoiceChannel(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 4;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var6 = _closure1_slot3;
        var2 = new Array(3);
        var2[0] = var6;
        var6 = _closure1_slot4;
        var2[1] = var6;
        var5 = _closure1_slot2;
        var2[2] = var5;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var3 = _closure1_slot3;
                var2 = var3.getChannelId;
                var2 = var2.bind(var3)();
                var6 = _closure2_slot0;
                var4 = null;
                var5 = var2;
                if(!(var4 != var6)) { _fun0001_ip = 37; continue _fun0001 }
 33:
                var5 = _closure2_slot0;
 37:
                if(!(var5 === var2)) { _fun0001_ip = 128; continue _fun0001 }
 41:
                var4 = _closure1_slot4;
                var3 = var4.isInChannel;
                var6 = _closure1_slot2;
                var2 = var6.getId;
                var2 = var2.bind(var6)();
                var2 = var3.bind(var4)(var5, var2);
                if(var2) { _fun0001_ip = 124; continue _fun0001 }
 74:
                var3 = _closure1_slot3;
                var2 = var3.getState;
                var2 = var2.bind(var3)();
                var3 = _closure1_slot5;
                var3 = var3.DISCONNECTED;
                if(!(var3 !== var2)) { _fun0001_ip = 120; continue _fun0001 }
 102:
                var1 = _closure1_slot5;
                var1 = var1.NO_ROUTE;
                if(!(var1 !== var2)) { _fun0001_ip = 120; continue _fun0001 }
 116:
                var1 = true;
                return var1;
 120:
                var1 = false;
                return var1;
 124:
                var1 = true;
                return var1;
 128:
                var1 = false;
                return var1;
            }
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();