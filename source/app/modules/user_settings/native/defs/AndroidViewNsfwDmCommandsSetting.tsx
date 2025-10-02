// app/modules/user_settings/native/defs/AndroidViewNsfwDmCommandsSetting.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
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
    var7 = var6[var1];
    var2 = metroImportDefault;
    var1 = undefined;
    var2 = var2.bind(var1)(var7);
    var _closure1_slot2 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var7 = var2.MobileSetting;
    var2 = {};
    var8 = 2;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var8 = var8.RendererType;
    var8 = var8.TOGGLE;
    var2['type'] = var8;
    var8 = function title() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot1;
        var1 = 7;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.VGWIAg;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['title'] = var8;
    var8 = function useDescription() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot1;
        var1 = 7;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.J4zza2;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['useDescription'] = var8;
    var7 = var7.CONTENT_AND_SOCIAL_DISCORD;
    var2['parent'] = var7;
    var7 = function useViewNsfwDmCommandsSettingValue() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = _closure1_slot0;
            var5 = _closure1_slot1;
            var2 = 3;
            var2 = var5[var2];
            var3 = undefined;
            var7 = var4.bind(var3)(var2);
            var6 = var7.useStateFromStores;
            var1 = _closure1_slot2;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var2 = _closure1_slot2;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var1 = var6.bind(var7)(var2, var1);
            var2 = 4;
            var2 = var5[var2];
            var2 = var4.bind(var3)(var2);
            var4 = var2.ViewNsfwCommands;
            var2 = var4.useSetting;
            var2 = var2.bind(var4)();
            var4 = null;
            var4 = var4 == var1;
            if(var4) { _fun0001_ip = 100; continue _fun0001 }
 94:
            var3 = var1.nsfwAllowed;
 100:
            var1 = true;
            var1 = var1 === var3;
            if(!var1) { _fun0001_ip = 112; continue _fun0001 }
 109:
            var1 = var2;
 112:
            return var1;
        }
    };
    var2['useValue'] = var7;
    var7 = 4;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.ViewNsfwCommands;
    var7 = var7.updateSetting;
    var2['onValueChange'] = var7;
    var4 = function usePredicate() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var1 = 5;
            var1 = var4[var1];
            var4 = undefined;
            var3 = var3.bind(var4)(var1);
            var1 = var3.useNSFWAllowed;
            var3 = var1.bind(var3)();
            var1 = null;
            var1 = var1 == var3;
            if(var1) { _fun0002_ip = 47; continue _fun0002 }
 44:
            var1 = var3;
 47:
            if(!var1) { _fun0002_ip = 79; continue _fun0002 }
 50:
            var3 = _closure1_slot0;
            var5 = _closure1_slot1;
            var2 = 6;
            var2 = var5[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.isAndroid;
            var1 = var2.bind(var3)();
 79:
            return var1;
        }
    };
    var2['usePredicate'] = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/native/defs/AndroidViewNsfwDmCommandsSetting.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    var3['AndroidViewNsfwDmCommandsSettingV2'] = var2;
    return var1;
})();