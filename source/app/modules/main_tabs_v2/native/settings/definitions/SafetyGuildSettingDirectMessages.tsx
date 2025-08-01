// app/modules/main_tabs_v2/native/settings/definitions/SafetyGuildSettingDirectMessages.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var5.bind(var1)(var2);
    var8 = var2.getSelectedGuildId;
    var _closure1_slot3 = var8;
    var2 = var2.useUserSafetySettingsSelectedGuildStore;
    var _closure1_slot4 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var7 = var2.MobileSetting;
    var2 = 3;
    var2 = var6[var2];
    var8 = var5.bind(var1)(var2);
    var2 = var8.GUILD_SELECT_ALL_SERVERS_OPTION_ID;
    var _closure1_slot6 = var2;
    var2 = {};
    var8 = var8.RendererType;
    var8 = var8.TOGGLE;
    var2['type'] = var8;
    var8 = function title() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 7;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.RAQUSE;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['title'] = var8;
    var8 = function useTitle() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 10;
            var1 = var4[var1];
            var6 = undefined;
            var3 = var3.bind(var6)(var1);
            var1 = var3.useAllowFriendsFromMutualGuildsOnly;
            var1 = var1.bind(var3)();
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 7;
            var3 = var7[var2];
            var3 = var5.bind(var6)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var5.bind(var6)(var2);
            var2 = var2.t;
            if(var1) { _fun0001_ip = 95; continue _fun0001 }
 82:
            var1 = var2.RAQUSE;
            var1 = var3.bind(var4)(var1);
            _fun0001_ip = 108; continue _fun0001;
 95:
            var2 = var2.PMsfcH;
            var1 = var3.bind(var4)(var2);
 108:
            return var1;
        }
    };
    var2['useTitle'] = var8;
    var8 = function useDescription() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = _closure1_slot4;
            var7 = undefined;
            var1 = var1.bind(var7)();
            var4 = var1.selectedGuildId;
            var2 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 10;
            var1 = var5[var1];
            var2 = var2.bind(var7)(var1);
            var1 = var2.useAllowFriendsFromMutualGuildsOnly;
            var2 = var1.bind(var2)();
            var1 = _closure1_slot6;
            if(!(var4 !== var1)) { _fun0002_ip = 134; continue _fun0002 }
 57:
            var4 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 7;
            var5 = var8[var1];
            var5 = var4.bind(var7)(var5);
            var6 = var5.intl;
            var5 = var6.string;
            var1 = var8[var1];
            var1 = var4.bind(var7)(var1);
            var4 = var1.t;
            if(var2) { _fun0002_ip = 119; continue _fun0002 }
 104:
            var1 = var4.G7c3Xl;
            var1 = var5.bind(var6)(var1);
            _fun0002_ip = 132; continue _fun0002;
 119:
            var4 = var4.F9WY3d;
            var1 = var5.bind(var6)(var4);
 132:
            _fun0002_ip = 212; continue _fun0002;
 134:
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 7;
            var4 = var8[var3];
            var4 = var6.bind(var7)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var3 = var8[var3];
            var3 = var6.bind(var7)(var3);
            var3 = var3.t;
            if(var2) { _fun0002_ip = 196; continue _fun0002 }
 181:
            var2 = var3.wbYDfX;
            var2 = var4.bind(var5)(var2);
            _fun0002_ip = 209; continue _fun0002;
 196:
            var3 = var3.XXGmuL;
            var2 = var4.bind(var5)(var3);
 209:
            var1 = var2;
 212:
            return var1;
        }
    };
    var2['useDescription'] = var8;
    var7 = var7.CONTENT_AND_SOCIAL_DISCORD;
    var2['parent'] = var7;
    var7 = function useValue() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = _closure1_slot4;
            var6 = undefined;
            var1 = var1.bind(var6)();
            var4 = var1.selectedGuildId;
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 4;
            var1 = var7[var1];
            var2 = var5.bind(var6)(var1);
            var1 = var2.useDefaultGuildsRestricted;
            var1 = var1.bind(var2)();
            var2 = !var1;
            var1 = 5;
            var1 = var7[var1];
            var1 = var5.bind(var6)(var1);
            var5 = var1.RestrictedGuildIds;
            var1 = var5.useSetting;
            var5 = var1.bind(var5)();
            var1 = var5.includes;
            var1 = var1.bind(var5)(var4);
            var1 = !var1;
            var3 = _closure1_slot6;
            if(!(var4 === var3)) { _fun0003_ip = 104; continue _fun0003 }
 101:
            var1 = var2;
 104:
            return var1;
        }
    };
    var2['useValue'] = var7;
    var4 = function onAllowDirectMessagesFromServerMembersValueChange(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var2 = arg1;
            var4 = _closure1_slot3;
            var1 = undefined;
            var5 = var4.bind(var1)();
            var4 = _closure1_slot6;
            if(!(var5 !== var4)) { _fun0004_ip = 136; continue _fun0004 }
 24:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var4 = 9;
            var4 = var7[var4];
            var6 = var6.bind(var1)(var4);
            var4 = var6.getSanitizedRestrictedGuilds;
            var7 = var4.bind(var6)();
            if(var2) { _fun0004_ip = 69; continue _fun0004 }
 57:
            var4 = var7.add;
            var4 = var4.bind(var7)(var5);
            _fun0004_ip = 79; continue _fun0004;
 69:
            var4 = var7.delete;
            var4 = var4.bind(var7)(var5);
 79:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 5;
            var3 = var5[var3];
            var3 = var4.bind(var1)(var3);
            var5 = var3.RestrictedGuildIds;
            var4 = var5.updateSetting;
            var3 = global;
            var6 = var3.Array;
            var3 = var6.from;
            var3 = var3.bind(var6)(var7);
            var3 = var4.bind(var5)(var3);
            _fun0004_ip = 153; continue _fun0004;
 136:
            var3 = !var2;
            var2 = function showGuildRestrictionModal(arg1) {
                var1 = arg1;
                var _closure3_slot0 = var1;
                var7 = _closure1_slot1;
                var8 = _closure1_slot2;
                var1 = 6;
                var2 = var8[var1];
                var1 = undefined;
                var4 = var7.bind(var1)(var2);
                var3 = var4.show;
                var2 = {};
                var11 = _closure1_slot0;
                var6 = 7;
                var9 = var8[var6];
                var9 = var11.bind(var1)(var9);
                var12 = var9.intl;
                var10 = var12.string;
                var9 = var8[var6];
                var9 = var11.bind(var1)(var9);
                var9 = var9.t;
                var9 = var9.Hq4ApK;
                var9 = var10.bind(var12)(var9);
                var2['title'] = var9;
                var9 = var8[var6];
                var9 = var11.bind(var1)(var9);
                var12 = var9.intl;
                var10 = var12.string;
                var9 = var8[var6];
                var9 = var11.bind(var1)(var9);
                var9 = var9.t;
                var9 = var9.qTCYur;
                var9 = var10.bind(var12)(var9);
                var2['body'] = var9;
                var9 = var8[var6];
                var9 = var11.bind(var1)(var9);
                var12 = var9.intl;
                var10 = var12.string;
                var9 = var8[var6];
                var9 = var11.bind(var1)(var9);
                var9 = var9.t;
                var9 = var9.p89ACg;
                var9 = var10.bind(var12)(var9);
                var2['confirmText'] = var9;
                var9 = var8[var6];
                var9 = var11.bind(var1)(var9);
                var10 = var9.intl;
                var9 = var10.string;
                var6 = var8[var6];
                var6 = var11.bind(var1)(var6);
                var6 = var6.t;
                var6 = var6.gm1Ven;
                var6 = var9.bind(var10)(var6);
                var2['cancelText'] = var6;
                var6 = 8;
                var6 = var8[var6];
                var6 = var7.bind(var1)(var6);
                var6 = var6.Colors;
                var6 = var6.RED;
                var2['confirmColor'] = var6;
                var6 = function onConfirm() {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                        var4 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var3 = 5;
                        var2 = var6[var3];
                        var1 = undefined;
                        var2 = var4.bind(var1)(var2);
                        var8 = var2.DefaultGuildsRestrictedV2;
                        var7 = var8.updateSetting;
                        var2 = _closure3_slot0;
                        var7 = var7.bind(var8)(var2);
                        var3 = var6[var3];
                        var3 = var4.bind(var1)(var3);
                        var4 = var3.RestrictedGuildIds;
                        var3 = var4.updateSetting;
                        if(var2) { _fun0005_ip = 79; continue _fun0005 }
 73:
                        var2 = new Array(0);
                        _fun0005_ip = 93; continue _fun0005;
 79:
                        var6 = _closure1_slot5;
                        var5 = var6.getGuildIds;
                        var2 = var5.bind(var6)();
 93:
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    }
                };
                var2['onConfirm'] = var6;
                var5 = function onCancel() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 5;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var4 = var2.DefaultGuildsRestrictedV2;
                    var3 = var4.updateSetting;
                    var2 = _closure3_slot0;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var2['onCancel'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var2 = var2.bind(var1)(var3);
 153:
            return var1;
        }
    };
    var2['onValueChange'] = var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/settings/definitions/SafetyGuildSettingDirectMessages.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();