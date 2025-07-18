// app/modules/video_calls/native/useBottomVoiceControlsSheetWidth.tsx
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
    var4 = var4.useWindowDimensions;
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.BOX_MODE_ACTIONSHEET_WIDTH;
    var _closure1_slot1 = var7;
    var4 = var4.BOX_MODE_THRESHOLD_WIDTH;
    var _closure1_slot2 = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/video_calls/native/useBottomVoiceControlsSheetWidth.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useBottomVoiceControlsSheetWidth() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = _closure1_slot0;
            var1 = undefined;
            var1 = var3.bind(var1)();
            var1 = var1.width;
            var3 = _closure1_slot2;
            if(!(var1 > var3)) { _fun0001_ip = 30; continue _fun0001 }
 26:
            var1 = _closure1_slot1;
 30:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();