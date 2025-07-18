// app/modules/main_tabs_v2/native/settings/screens/appearance/FontScaleStore.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
        var6 = native2;
        var3 = native6;
        var7 = native7;
        var1 = global;
        var8 = var1.Object;
        var5 = var8.defineProperty;
        var4 = {};
        var1 = true;
        var4['value'] = var1;
        var1 = '__esModule';
        var1 = var5.bind(var8)(var3, var1, var4);
        var1 = 0;
        var4 = var7[var1];
        var1 = undefined;
        var5 = var6.bind(var1)(var4);
        var4 = var5.isAndroid;
        var4 = var4.bind(var5)();
        if(var4) { _fun0001_ip = 84; continue _fun0001 }
 68:
        var5 = {'fontScale': 1, 'isClassicChatFontScaleEnabled': false};
        _fun0001_ip = 111; continue _fun0001;
 84:
        var4 = 1;
        var8 = var7[var4];
        var4 = native3;
        var8 = var4.bind(var1)(var8);
        var4 = var8.getCustomFontScale;
        var5 = var4.bind(var8)();
 111:
        var4 = {};
        var8 = var5.fontScale;
        var4['persistedFontScale'] = var8;
        var8 = var5.isClassicChatFontScaleEnabled;
        var4['persistedIsClassicChatFontScaleEnabled'] = var8;
        var8 = var5.fontScale;
        var4['fontScale'] = var8;
        var5 = var5.isClassicChatFontScaleEnabled;
        var4['isClassicChatFontScaleEnabled'] = var5;
        var _closure1_slot0 = var4;
        var5 = 2;
        var5 = var7[var5];
        var8 = var6.bind(var1)(var5);
        var5 = var8.createWithEqualityFn;
        var2 = function() {
            var1 = _closure1_slot0;
            return var1;
        };
        var2 = var5.bind(var8)(var2);
        var5 = 3;
        var5 = var7[var5];
        var7 = var6.bind(var1)(var5);
        var6 = var7.fileFinishedImporting;
        var5 = 'modules/main_tabs_v2/native/settings/screens/appearance/FontScaleStore.tsx';
        var5 = var6.bind(var7)(var5);
        var3['DEFAULT_FONT_SCALE_STORE_STATE'] = var4;
        var3['useFontScaleStore'] = var2;
        return var1;
    }
})();