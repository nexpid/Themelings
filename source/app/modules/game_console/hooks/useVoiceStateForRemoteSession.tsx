// app/modules/game_console/hooks/useVoiceStateForRemoteSession.tsx
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
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/game_console/hooks/useVoiceStateForRemoteSession.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useVoiceStateForRemoteSession() {
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 3;
        var3 = var3[var2];
        var2 = undefined;
        var5 = var4.bind(var2)(var3);
        var4 = var5.useStateFromStores;
        var2 = _closure1_slot2;
        var3 = new Array(3);
        var3[0] = var2;
        var2 = _closure1_slot3;
        var3[1] = var2;
        var1 = _closure1_slot4;
        var3[2] = var1;
        var2 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var3 = _closure1_slot2;
                var2 = var3.getId;
                var4 = var2.bind(var3)();
                var3 = _closure1_slot4;
                var2 = var3.getRemoteSessionId;
                var3 = var2.bind(var3)();
                var2 = _closure1_slot3;
                var1 = var2.getVoiceStateForSession;
                var2 = var1.bind(var2)(var4, var3);
                var1 = null;
                var3 = var1 != var2;
                var1 = undefined;
                if(!var3) { _fun0001_ip = 61; continue _fun0001 }
 58:
                var1 = var2;
 61:
                return var1;
            }
        };
        var1 = new Array(0);
        var1 = var4.bind(var5)(var3, var2, var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();