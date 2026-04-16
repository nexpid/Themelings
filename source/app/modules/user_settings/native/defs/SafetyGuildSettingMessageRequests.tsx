// app/modules/user_settings/native/defs/SafetyGuildSettingMessageRequests.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var7;
    var2 = function showMessageRequestRestrictionModal(arg1) {
        var1 = arg1;
        var _closure2_slot0 = var1;
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
        var9 = var9.yAfu1p;
        var9 = var10.bind(var12)(var9);
        var2['title'] = var9;
        var9 = var8[var6];
        var9 = var11.bind(var1)(var9);
        var12 = var9.intl;
        var10 = var12.string;
        var9 = var8[var6];
        var9 = var11.bind(var1)(var9);
        var9 = var9.t;
        var9 = var9.Ry2z74;
        var9 = var10.bind(var12)(var9);
        var2['body'] = var9;
        var9 = var8[var6];
        var9 = var11.bind(var1)(var9);
        var12 = var9.intl;
        var10 = var12.string;
        var9 = var8[var6];
        var9 = var11.bind(var1)(var9);
        var9 = var9.t;
        var9 = var9.p89ACt;
        var9 = var10.bind(var12)(var9);
        var2['confirmText'] = var9;
        var9 = var8[var6];
        var9 = var11.bind(var1)(var9);
        var10 = var9.intl;
        var9 = var10.string;
        var6 = var8[var6];
        var6 = var11.bind(var1)(var6);
        var6 = var6.t;
        var6 = var6.gm1Vej;
        var6 = var9.bind(var10)(var6);
        var2['cancelText'] = var6;
        var6 = 8;
        var6 = var8[var6];
        var6 = var7.bind(var1)(var6);
        var6 = var6.Colors;
        var6 = var6.RED;
        var2['confirmColor'] = var6;
        var6 = function onConfirm() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 5;
                var2 = var6[var3];
                var1 = undefined;
                var2 = var4.bind(var1)(var2);
                var8 = var2.MessageRequestRestrictedDefault;
                var7 = var8.updateSetting;
                var2 = _closure2_slot0;
                var7 = var7.bind(var8)(var2);
                var3 = var6[var3];
                var3 = var4.bind(var1)(var3);
                var4 = var3.MessageRequestRestrictedGuildIds;
                var3 = var4.updateSetting;
                if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var2 = new Array(0);
                _fun0001_ip = 4; continue _fun0001;
case 2:
                var6 = _closure1_slot3;
                var5 = var6.getGuildIds;
                var2 = var5.bind(var6)();
case 4:
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
            var4 = var2.MessageRequestRestrictedDefault;
            var3 = var4.updateSetting;
            var2 = _closure2_slot0;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var2['onCancel'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var _closure1_slot8 = var2;
    var10 = function useIsDisabled() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 13;
            var1 = var8[var1];
            var6 = undefined;
            var2 = var7.bind(var6)(var1);
            var1 = var2.useDefaultGuildsRestricted;
            var3 = var1.bind(var2)();
            var1 = _closure1_slot5;
            var1 = var1.bind(var6)();
            var5 = var1.selectedGuildId;
            var1 = 5;
            var1 = var8[var1];
            var1 = var7.bind(var6)(var1);
            var2 = var1.RestrictedGuildIds;
            var1 = var2.useSetting;
            var2 = var1.bind(var2)();
            var1 = var2.includes;
            var2 = var1.bind(var2)(var5);
            var1 = 14;
            var1 = var8[var1];
            var6 = var7.bind(var6)(var1);
            var1 = var6.useIsParentallyControlled;
            var1 = var1.bind(var6)();
            var6 = _closure1_slot7;
            var6 = var5 !== var6;
            if(var6) { _fun0002_ip = 5; continue _fun0002 }
case 6:
            var6 = !var1;
case 5:
            var1 = !var6;
            if(!var6) { _fun0002_ip = 7; continue _fun0002 }
case 8:
            var4 = _closure1_slot7;
            if(!(var5 === var4)) { _fun0002_ip = 9; continue _fun0002 }
case 10:
            var2 = var3;
case 9:
            var1 = var2;
case 7:
            return var1;
        }
    };
    var _closure1_slot9 = var10;
    var1 = global;
    var11 = var1.Object;
    var8 = var11.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var11)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var5 = var4.getSelectedGuildId;
    var _closure1_slot4 = var5;
    var4 = var4.useUserSafetySettingsSelectedGuildStore;
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var11 = var4.MobileSetting;
    var4 = 3;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.HelpdeskArticles;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.GUILD_SELECT_ALL_SERVERS_OPTION_ID;
    var _closure1_slot7 = var4;
    var4 = 15;
    var4 = var7[var4];
    var8 = var6.bind(var1)(var4);
    var5 = var8.createToggle;
    var4 = {};
    var12 = function title() {
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
        var1 = var1["3o2ojh"];
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var4['title'] = var12;
    var12 = function useDescription() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 16;
            var1 = var3[var1];
            var6 = undefined;
            var3 = var2.bind(var6)(var1);
            var2 = var3.useConfig;
            var1 = {};
            var4 = 'SafetyGuildSettingMessageRequests';
            var1['location'] = var4;
            var1 = var2.bind(var3)(var1);
            var1 = var1.enabled;
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 7;
            var3 = var7[var2];
            var3 = var5.bind(var6)(var3);
            var4 = var3.intl;
            if(var1) { _fun0003_ip = 11; continue _fun0003 }
case 12:
            var8 = var4.formatToPlainString;
            var1 = var7[var2];
            var1 = var5.bind(var6)(var1);
            var1 = var1.t;
            var3 = var1.wkm9a3;
            var1 = {};
            var11 = _closure1_slot1;
            var10 = 17;
            var10 = var7[var10];
            var11 = var11.bind(var6)(var10);
            var10 = var11.getArticleURL;
            var9 = _closure1_slot6;
            var9 = var9.MESSAGE_REQUESTS;
            var9 = var10.bind(var11)(var9);
            var1['helpdeskArticle'] = var9;
            var1 = var8.bind(var4)(var3, var1);
            _fun0003_ip = 13; continue _fun0003;
case 11:
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var5.bind(var6)(var2);
            var2 = var2.t;
            var2 = var2.o5fjz6;
            var1 = var3.bind(var4)(var2);
case 13:
            return var1;
        }
    };
    var4['useDescription'] = var12;
    var11 = var11.CONTENT_AND_SOCIAL_DISCORD;
    var4['parent'] = var11;
    var11 = function useValue() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = _closure1_slot5;
            var7 = undefined;
            var1 = var1.bind(var7)();
            var5 = var1.selectedGuildId;
            var1 = _closure1_slot9;
            var1 = var1.bind(var7)();
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 5;
            var3 = var8[var2];
            var3 = var6.bind(var7)(var3);
            var9 = var3.MessageRequestRestrictedDefault;
            var3 = var9.useSetting;
            var3 = var3.bind(var9)();
            var3 = !var3;
            var2 = var8[var2];
            var2 = var6.bind(var7)(var2);
            var6 = var2.MessageRequestRestrictedGuildIds;
            var2 = var6.useSetting;
            var6 = var2.bind(var6)();
            var2 = var6.includes;
            var2 = var2.bind(var6)(var5);
            var2 = !var2;
            var1 = !var1;
            if(!var1) { _fun0004_ip = 14; continue _fun0004 }
case 15:
            var4 = _closure1_slot7;
            if(!(var5 === var4)) { _fun0004_ip = 16; continue _fun0004 }
case 17:
            var2 = var3;
case 16:
            var1 = var2;
case 14:
            return var1;
        }
    };
    var4['useValue'] = var11;
    var4['useIsDisabled'] = var10;
    var9 = function onAllowMessageRequestsFromServerMembersValueChange(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg1;
            if(var1) { _fun0005_ip = 18; continue _fun0005 }
case 19:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 9;
            var2 = var4[var2];
            var7 = undefined;
            var3 = var3.bind(var7)(var2);
            var2 = var3.shouldAgeVerifyForDMDefaultOff;
            var2 = var2.bind(var3)();
            if(!var2) { _fun0005_ip = 18; continue _fun0005 }
case 20:
            var3 = _closure1_slot1;
            var8 = _closure1_slot2;
            var2 = 10;
            var2 = var8[var2];
            var4 = var3.bind(var7)(var2);
            var3 = var4.showAgeVerificationGetStartedModal;
            var2 = {};
            var6 = _closure1_slot0;
            var5 = 11;
            var5 = var8[var5];
            var5 = var6.bind(var7)(var5);
            var5 = var5.AgeVerificationModalEntryPoint;
            var5 = var5.MESSAGE_REQUESTS_SETTINGS;
            var2['entryPoint'] = var5;
            var2 = var3.bind(var4)(var2);
            _fun0005_ip = 21; continue _fun0005;
case 18:
            var4 = _closure1_slot4;
            var3 = undefined;
            var5 = var4.bind(var3)();
            var4 = _closure1_slot7;
            if(!(var5 !== var4)) { _fun0005_ip = 22; continue _fun0005 }
case 23:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var4 = 12;
            var4 = var7[var4];
            var6 = var6.bind(var3)(var4);
            var4 = var6.getSanitizedMessageRequestRestrictedGuilds;
            var8 = var4.bind(var6)();
            if(var1) { _fun0005_ip = 24; continue _fun0005 }
case 25:
            var4 = var8.add;
            var4 = var4.bind(var8)(var5);
            _fun0005_ip = 26; continue _fun0005;
case 24:
            var4 = var8.delete;
            var4 = var4.bind(var8)(var5);
case 26:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var4 = 5;
            var4 = var6[var4];
            var4 = var5.bind(var3)(var4);
            var6 = var4.MessageRequestRestrictedGuildIds;
            var5 = var6.updateSetting;
            var4 = global;
            var7 = var4.Array;
            var4 = var7.from;
            var4 = var4.bind(var7)(var8);
            var4 = var5.bind(var6)(var4);
            _fun0005_ip = 21; continue _fun0005;
case 22:
            var2 = _closure1_slot8;
            var1 = !var1;
            var1 = var2.bind(var3)(var1);
case 21:
            var1 = undefined;
            return var1;
        }
    };
    var4['onValueChange'] = var9;
    var4 = var5.bind(var8)(var4);
    var5 = 18;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/user_settings/native/defs/SafetyGuildSettingMessageRequests.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['showMessageRequestRestrictionModal'] = var2;
    return var1;
})();