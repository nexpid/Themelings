// app/modules/main_tabs_v2/native/settings/definitions/DisableStreamPreviewsSetting.tsx
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
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var5.bind(var1)(var2);
    var7 = var2.MobileSetting;
    var2 = {};
    var8 = 1;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var8 = var8.RendererType;
    var8 = var8.TOGGLE;
    var2['type'] = var8;
    var8 = function title() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot1;
        var1 = 3;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.1CzWUF;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['title'] = var8;
    var8 = function useDescription() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot1;
        var1 = 3;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.jTNPHB;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['useDescription'] = var8;
    var7 = var7.VOICE;
    var2['parent'] = var7;
    var4 = function useValue() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 2;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var2 = var1.DisableStreamPreviews;
            var1 = var2.useSetting;
            var2 = var1.bind(var2)();
            var1 = null;
            var1 = var1 != var2;
            if(!var1) { _fun0001_ip = 53; continue _fun0001 }
 50:
            var1 = var2;
 53:
            return var1;
        }
    };
    var2['useValue'] = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.DisableStreamPreviews;
    var4 = var4.updateSetting;
    var2['onValueChange'] = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/settings/definitions/DisableStreamPreviewsSetting.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();