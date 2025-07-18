// app/modules/voice_calls/utils/setAudioInputEnabled.android.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
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
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/voice_calls/utils/setAudioInputEnabled.android.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function setAudioInputEnabled(arg1) {
        var1 = _closure1_slot0;
        var3 = var1.VoiceEngine;
        var2 = var3.setAudioInputEnabled;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();