// app/modules/voice_chat/VoiceChatHooks.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var8 = native3;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var2 = function useIsConnectedToVoiceChannelForId(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 2;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var6 = _closure1_slot3;
        var2 = new Array(2);
        var2[0] = var6;
        var5 = _closure1_slot2;
        var2[1] = var5;
        var1 = function() {
            var4 = _closure1_slot3;
            var3 = var4.isInChannel;
            var2 = _closure2_slot0;
            var5 = _closure1_slot2;
            var1 = var5.getId;
            var1 = var1.bind(var5)();
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot4 = var2;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot2 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 3;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/voice_chat/VoiceChatHooks.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function useIsConnectedToVoiceChannel(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arg1;
            var3 = _closure1_slot4;
            var1 = null;
            var5 = var1 == var4;
            var2 = undefined;
            var1 = undefined;
            if(var5) { _fun0001_ip = 28; continue _fun0001 }
 23:
            var1 = var4.id;
 28:
            var1 = var3.bind(var2)(var1);
            return var1;
        }
    };
    var3['useIsConnectedToVoiceChannel'] = var4;
    var3['useIsConnectedToVoiceChannelForId'] = var2;
    return var1;
})();