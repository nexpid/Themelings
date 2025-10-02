// app/modules/guild_settings_picker/native/components/GuildPicker.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot3 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_settings_picker/native/components/GuildPicker.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GuildPicker(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var8 = var1.guildId;
            var _closure2_slot0 = var8;
            var2 = var1.onChange;
            var _closure2_slot1 = var2;
            var9 = var1.isGuildIncluded;
            var2 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 2;
            var1 = var7[var1];
            var4 = undefined;
            var3 = var2.bind(var4)(var1);
            var1 = {};
            var1['isGuildIncluded'] = var9;
            var1['selectedGuildId'] = var8;
            var1 = var3.bind(var4)(var1);
            var3 = var1.options;
            var _closure2_slot2 = var3;
            var8 = var1.selectedGuild;
            var3 = _closure1_slot3;
            var1 = 3;
            var1 = var7[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var7 = null;
            var9 = var7 == var8;
            var7 = undefined;
            if(var9) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var7 = var8.name;
case 2:
            var1['label'] = var7;
            var6 = function onPress() {
                var4 = _closure1_slot1;
                var10 = _closure1_slot2;
                var1 = 4;
                var3 = var10[var1];
                var1 = undefined;
                var6 = var4.bind(var1)(var3);
                var5 = var6.openLazy;
                var9 = _closure1_slot0;
                var2 = 6;
                var2 = var10[var2];
                var4 = var9.bind(var1)(var2);
                var2 = 5;
                var3 = var10[var2];
                var2 = var10.paths;
                var4 = var4.bind(var1)(var3, var2);
                var3 = {};
                var2 = 7;
                var7 = var10[var2];
                var7 = var9.bind(var1)(var7);
                var8 = var7.intl;
                var7 = var8.string;
                var2 = var10[var2];
                var2 = var9.bind(var1)(var2);
                var2 = var2.t;
                var2 = var2.etZ9tb;
                var2 = var7.bind(var8)(var2);
                var3['title'] = var2;
                var7 = _closure2_slot2;
                var3['items'] = var7;
                var7 = function onItemSelect(arg1) {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        var3 = arg1;
                        var4 = null;
                        if(!(var4 != var3)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                        var2 = _closure2_slot1;
                        if(!(var4 != var2)) { _fun0002_ip = 4; continue _fun0002 }
case 6:
                        var2 = _closure2_slot1;
                        var1 = undefined;
                        var1 = var2.bind(var1)(var3);
case 4:
                        var1 = global;
                        var3 = var1.setImmediate;
                        var1 = undefined;
                        var2 = function() {
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 4;
                            var2 = var2[var1];
                            var1 = undefined;
                            var4 = var3.bind(var1)(var2);
                            var3 = var4.hideActionSheet;
                            var2 = 'GuildPicker';
                            var2 = var3.bind(var4)(var2);
                            return var1;
                        };
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    }
                };
                var3['onItemSelect'] = var7;
                var2 = _closure2_slot0;
                var3['selectedItem'] = var2;
                var2 = 'GuildPicker';
                var2 = var5.bind(var6)(var4, var2, var3);
                return var1;
            };
            var1['onPress'] = var6;
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var5 = 7;
            var6 = var9[var5];
            var6 = var8.bind(var4)(var6);
            var7 = var6.intl;
            var6 = var7.string;
            var5 = var9[var5];
            var5 = var8.bind(var4)(var5);
            var5 = var5.t;
            var5 = var5.etZ9tb;
            var5 = var6.bind(var7)(var5);
            var1['placeholder'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();