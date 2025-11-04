// app/modules/user_settings/native/defs/AndroidViewNsfwDmCommandsSetting.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var7 = var1.Object;
    var4 = var7.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var7)(var3, var1, var2);
    var1 = 0;
    var4 = var6[var1];
    var2 = metroImportDefault;
    var1 = undefined;
    var2 = var2.bind(var1)(var4);
    var _closure1_slot2 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var9 = var2.MobileSetting;
    var2 = 6;
    var2 = var6[var2];
    var7 = var5.bind(var1)(var2);
    var4 = var7.createToggle;
    var2 = {};
    var10 = function title() {
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
        var1 = var1.VGWIAo;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['title'] = var10;
    var10 = function useDescription() {
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
        var1 = var1.J4zza/;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['useDescription'] = var10;
    var9 = var9.CONTENT_AND_SOCIAL_DISCORD;
    var2['parent'] = var9;
    var9 = function useViewNsfwDmCommandsSettingValue() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = _closure1_slot0;
            var5 = _closure1_slot1;
            var2 = 2;
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
            var2 = 3;
            var2 = var5[var2];
            var2 = var4.bind(var3)(var2);
            var4 = var2.ViewNsfwCommands;
            var2 = var4.useSetting;
            var2 = var2.bind(var4)();
            var4 = null;
            var4 = var4 == var1;
            if(var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var1.nsfwAllowed;
case 2:
            var1 = true;
            var1 = var1 === var3;
            if(!var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = var2;
case 4:
            return var1;
        }
    };
    var2['useValue'] = var9;
    var9 = 3;
    var9 = var6[var9];
    var9 = var5.bind(var1)(var9);
    var9 = var9.ViewNsfwCommands;
    var9 = var9.updateSetting;
    var2['onValueChange'] = var9;
    var8 = function usePredicate() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var1 = 4;
            var1 = var4[var1];
            var4 = undefined;
            var3 = var3.bind(var4)(var1);
            var1 = var3.useNSFWAllowed;
            var3 = var1.bind(var3)();
            var1 = null;
            var1 = var1 == var3;
            if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var1 = var3;
case 6:
            if(!var1) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var3 = _closure1_slot0;
            var5 = _closure1_slot1;
            var2 = 5;
            var2 = var5[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.isAndroid;
            var1 = var2.bind(var3)();
case 8:
            return var1;
        }
    };
    var2['usePredicate'] = var8;
    var2 = var4.bind(var7)(var2);
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