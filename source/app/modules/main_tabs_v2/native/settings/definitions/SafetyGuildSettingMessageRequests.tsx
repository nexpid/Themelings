// app/modules/main_tabs_v2/native/settings/definitions/SafetyGuildSettingMessageRequests.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var9 = native3;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var9;
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
        var9 = var9.yAfu1t;
        var9 = var10.bind(var12)(var9);
        var2['title'] = var9;
        var9 = var8[var6];
        var9 = var11.bind(var1)(var9);
        var12 = var9.intl;
        var10 = var12.string;
        var9 = var8[var6];
        var9 = var11.bind(var1)(var9);
        var9 = var9.t;
        var9 = var9.Ry2z7+;
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
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
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
                if(var2) { _fun0001_ip = 79; continue _fun0001 }
 73:
                var2 = new Array(0);
                _fun0001_ip = 93; continue _fun0001;
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
    var8 = function useIsDisabled() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 13;
            var1 = var7[var1];
            var5 = undefined;
            var2 = var6.bind(var5)(var1);
            var1 = var2.useDefaultGuildsRestricted;
            var2 = var1.bind(var2)();
            var1 = _closure1_slot4;
            var1 = var1.bind(var5)();
            var4 = var1.selectedGuildId;
            var1 = 5;
            var1 = var7[var1];
            var1 = var6.bind(var5)(var1);
            var5 = var1.RestrictedGuildIds;
            var1 = var5.useSetting;
            var5 = var1.bind(var5)();
            var1 = var5.includes;
            var1 = var1.bind(var5)(var4);
            var3 = _closure1_slot6;
            if(!(var4 === var3)) { _fun0002_ip = 98; continue _fun0002 }
 95:
            var1 = var2;
 98:
            return var1;
        }
    };
    var _closure1_slot9 = var8;
    var1 = global;
    var11 = var1.Object;
    var10 = var11.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var4 = var6.bind(var1)(var4);
    var10 = var4.getSelectedGuildId;
    var _closure1_slot3 = var10;
    var4 = var4.useUserSafetySettingsSelectedGuildStore;
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var7[var4];
    var4 = var9.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var9 = var4.MobileSetting;
    var4 = 3;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var10 = var4.GUILD_SELECT_ALL_SERVERS_OPTION_ID;
    var _closure1_slot6 = var10;
    var10 = var4.RendererType;
    var4 = 4;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.HelpdeskArticles;
    var _closure1_slot7 = var4;
    var4 = {};
    var10 = var10.TOGGLE;
    var4['type'] = var10;
    var10 = function title() {
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
        var1 = var1.3o2ojo;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var4['title'] = var10;
    var10 = function useDescription() {
        var2 = _closure1_slot0;
        var9 = _closure1_slot2;
        var1 = 7;
        var3 = var9[var1];
        var8 = undefined;
        var3 = var2.bind(var8)(var3);
        var4 = var3.intl;
        var3 = var4.formatToPlainString;
        var1 = var9[var1];
        var1 = var2.bind(var8)(var1);
        var1 = var1.t;
        var2 = var1.wkm9a2;
        var1 = {};
        var7 = _closure1_slot1;
        var6 = 14;
        var6 = var9[var6];
        var7 = var7.bind(var8)(var6);
        var6 = var7.getArticleURL;
        var5 = _closure1_slot7;
        var5 = var5.MESSAGE_REQUESTS;
        var5 = var6.bind(var7)(var5);
        var1['helpdeskArticle'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var4['useDescription'] = var10;
    var9 = var9.CONTENT_AND_SOCIAL_DISCORD;
    var4['parent'] = var9;
    var9 = function useValue() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = _closure1_slot4;
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
            if(!var1) { _fun0003_ip = 124; continue _fun0003 }
 110:
            var4 = _closure1_slot6;
            if(!(var5 === var4)) { _fun0003_ip = 121; continue _fun0003 }
 118:
            var2 = var3;
 121:
            var1 = var2;
 124:
            return var1;
        }
    };
    var4['useValue'] = var9;
    var4['useIsDisabled'] = var8;
    var5 = function onAllowMessageRequestsFromServerMembersValueChange(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var3 = arg1;
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 9;
            var4 = var4[var1];
            var1 = undefined;
            var5 = var5.bind(var1)(var4);
            var4 = var5.shouldAgeVerifyForDMDefaultOff;
            var4 = var4.bind(var5)();
            if(var4) { _fun0004_ip = 186; continue _fun0004 }
 44:
            var4 = _closure1_slot3;
            var5 = var4.bind(var1)();
            var4 = _closure1_slot6;
            if(!(var5 !== var4)) { _fun0004_ip = 172; continue _fun0004 }
 60:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var4 = 12;
            var4 = var7[var4];
            var6 = var6.bind(var1)(var4);
            var4 = var6.getSanitizedMessageRequestRestrictedGuilds;
            var8 = var4.bind(var6)();
            if(var3) { _fun0004_ip = 105; continue _fun0004 }
 93:
            var4 = var8.add;
            var4 = var4.bind(var8)(var5);
            _fun0004_ip = 115; continue _fun0004;
 105:
            var4 = var8.delete;
            var4 = var4.bind(var8)(var5);
 115:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var4 = 5;
            var4 = var6[var4];
            var4 = var5.bind(var1)(var4);
            var6 = var4.MessageRequestRestrictedGuildIds;
            var5 = var6.updateSetting;
            var4 = global;
            var7 = var4.Array;
            var4 = var7.from;
            var4 = var4.bind(var7)(var8);
            var4 = var5.bind(var6)(var4);
            _fun0004_ip = 245; continue _fun0004;
 172:
            var4 = _closure1_slot8;
            var3 = !var3;
            var3 = var4.bind(var1)(var3);
            _fun0004_ip = 245; continue _fun0004;
 186:
            var4 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 10;
            var3 = var6[var3];
            var4 = var4.bind(var1)(var3);
            var3 = var4.showAgeVerificationGetStartedModal;
            var5 = _closure1_slot0;
            var2 = 11;
            var2 = var6[var2];
            var2 = var5.bind(var1)(var2);
            var2 = var2.AgeVerificationModalEntryPoint;
            var2 = var2.MESSAGE_REQUESTS_SETTINGS;
            var2 = var3.bind(var4)(var2);
 245:
            return var1;
        }
    };
    var4['onValueChange'] = var5;
    var5 = 15;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/main_tabs_v2/native/settings/definitions/SafetyGuildSettingMessageRequests.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['showMessageRequestRestrictionModal'] = var2;
    return var1;
})();