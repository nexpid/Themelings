// app/modules/guild_settings_picker/GuildSettingsPickerFeatures.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var10 = var1.Object;
    var8 = var10.defineProperty;
    var4 = {};
    var7 = true;
    var4['value'] = var7;
    var1 = '__esModule';
    var1 = var8.bind(var10)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var9.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var8 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var9.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = {};
    var8 = 3;
    var8 = var6[var8];
    var8 = var9.bind(var1)(var8);
    var4['server-subscriptions-onboarding'] = var8;
    var8 = 4;
    var8 = var6[var8];
    var8 = var9.bind(var1)(var8);
    var4['server-subscriptions-finish-setting-up'] = var8;
    var8 = 5;
    var8 = var6[var8];
    var8 = var9.bind(var1)(var8);
    var4['server-subscriptions-create-tier-from-template'] = var8;
    var _closure1_slot5 = var4;
    var4 = {};
    var8 = function title() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot1;
        var1 = 6;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.V42OaG;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var4['title'] = var8;
    var8 = function description() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot1;
        var1 = 6;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.7dJ16e;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var4['description'] = var8;
    var8 = function selectGuildCta() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot1;
        var1 = 6;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.LhlgY2;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var4['selectGuildCta'] = var8;
    var8 = function createGuildDescription() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot1;
        var1 = 6;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.anOis7;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var4['createGuildDescription'] = var8;
    var8 = function createGuildCta() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot1;
        var1 = 6;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.B44MTk;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var4['createGuildCta'] = var8;
    var4['canCreateGuild'] = var7;
    var7 = function useIsGuildSupported() {
        var3 = _closure1_slot0;
        var7 = _closure1_slot1;
        var1 = 7;
        var5 = var7[var1];
        var2 = undefined;
        var6 = var3.bind(var2)(var5);
        var5 = var6.useStateFromStores;
        var8 = _closure1_slot4;
        var4 = new Array(1);
        var4[0] = var8;
        var1 = var7[var1];
        var1 = var3.bind(var2)(var1);
        var9 = var1.statesWillNeverBeEqual;
        var11 = function() {
            var1 = function(arg1) {
                var3 = _closure1_slot4;
                var2 = var3.canAccessGuildSettings;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            return var1;
        };
        var10 = new Array(0);
        var13 = var6;
        var12 = var4;
        var1 = var13[var5](var12, var11, var10, var9, var8);
        return var1;
    };
    var4['useIsGuildSupported'] = var7;
    var _closure1_slot6 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_settings_picker/GuildSettingsPickerFeatures.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useGuildSettingsPickerFeature(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var9 = arg1;
            var6 = _closure1_slot3;
            var3 = var6.useState;
            var4 = null;
            var8 = var4 == var9;
            var7 = undefined;
            var1 = undefined;
            if(var8) { _fun0001_ip = 38; continue _fun0001 }
 30:
            var8 = _closure1_slot5;
            var1 = var8[var9];
 38:
            var6 = var3.bind(var6)(var1);
            var3 = _closure1_slot2;
            var1 = 1;
            var3 = var3.bind(var7)(var6, var1);
            var1 = 0;
            var1 = var3[var1];
            var6 = _closure1_slot6;
            var3 = var6.useIsGuildSupported;
            var3 = var3.bind(var6)();
            var _closure2_slot0 = var3;
            var6 = var4 == var1;
            var3 = undefined;
            if(var6) { _fun0001_ip = 114; continue _fun0001 }
 89:
            var6 = var1.useIsGuildSupported;
            var6 = var4 == var6;
            var3 = undefined;
            if(var6) { _fun0001_ip = 114; continue _fun0001 }
 104:
            var6 = var1.useIsGuildSupported;
            var3 = var6.bind(var1)();
 114:
            var _closure2_slot1 = var3;
            var3 = {};
            var10 = _closure1_slot6;
            var11 = var3;
            var5 = copyDataProperties(var11, var10);
            if(!(var4 == var1)) { _fun0001_ip = 137; continue _fun0001 }
 135:
            var1 = {};
 137:
            var11 = var3;
            var10 = var1;
            var1 = copyDataProperties(var11, var10);
            var1 = {};
            var4 = var3.title;
            var4 = var4.bind(var3)();
            var1['title'] = var4;
            var4 = var3.description;
            var4 = var4.bind(var3)();
            var1['description'] = var4;
            var4 = var3.selectGuildCta;
            var4 = var4.bind(var3)();
            var1['selectGuildCta'] = var4;
            var4 = var3.createGuildDescription;
            var4 = var4.bind(var3)();
            var1['createGuildDescription'] = var4;
            var4 = var3.createGuildCta;
            var4 = var4.bind(var3)();
            var1['createGuildCta'] = var4;
            var3 = var3.canCreateGuild;
            var1['canCreateGuild'] = var3;
            var2 = function isGuildSupported(arg1, arg2) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var6 = arg1;
                    var5 = arg2;
                    var1 = _closure2_slot0;
                    var4 = undefined;
                    var1 = var1.bind(var4)(var6, var5);
                    if(!var1) { _fun0002_ip = 55; continue _fun0002 }
 24:
                    var7 = _closure2_slot1;
                    var3 = null;
                    var7 = var3 == var7;
                    var3 = undefined;
                    if(var7) { _fun0002_ip = 49; continue _fun0002 }
 39:
                    var2 = _closure2_slot1;
                    var3 = var2.bind(var4)(var6, var5);
 49:
                    var2 = false;
                    var1 = var2 !== var3;
 55:
                    return var1;
                }
            };
            var1['isGuildSupported'] = var2;
            return var1;
        }
    };
    var3['useGuildSettingsPickerFeature'] = var2;
    return var1;
})();