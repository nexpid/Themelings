// app/modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionContainer.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function ApplicationRejectedNotice(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var2 = var2.guildId;
            var _closure2_slot0 = var2;
            var3 = _closure1_slot9;
            var5 = undefined;
            var7 = var3.bind(var5)();
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 6;
            var3 = var6[var3];
            var6 = var4.bind(var5)(var3);
            var4 = var6.useStateFromStores;
            var8 = _closure1_slot5;
            var3 = new Array(1);
            var3[0] = var8;
            var1 = function() {
                var3 = _closure1_slot5;
                var2 = var3.getGuild;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var8 = var4.bind(var6)(var3, var1);
            var1 = null;
            var3 = var1 == var8;
            var4 = undefined;
            if(var3) { _fun0001_ip = 114; continue _fun0001 }
 88:
            var9 = var8.features;
            var6 = var9.has;
            var3 = _closure1_slot6;
            var3 = var3.CREATOR_MONETIZABLE_RESTRICTED;
            var4 = var6.bind(var9)(var3);
 114:
            var3 = var1 == var8;
            var6 = undefined;
            if(var3) { _fun0001_ip = 149; continue _fun0001 }
 123:
            var10 = var8.features;
            var9 = var10.has;
            var3 = _closure1_slot6;
            var3 = var3.CREATOR_MONETIZABLE_PENDING_NEW_OWNER_ONBOARDING;
            var6 = var9.bind(var10)(var3);
 149:
            var9 = _closure1_slot1;
            var10 = _closure1_slot2;
            var3 = 7;
            var3 = var10[var3];
            var3 = var9.bind(var5)(var3);
            var8 = var3.bind(var5)(var8);
            var11 = var8.resubmittingEnableRequest;
            var10 = var8.resubmissionError;
            var12 = var8.createEnableRequest;
            var3 = var8.resubmittedRequest;
            var9 = var8.requestRejectedNoticeText;
            var13 = var8.reapplyNoticeText;
            if(!(var1 == var10)) { _fun0001_ip = 681; continue _fun0001 }
 217:
            if(!(var1 == var9)) { _fun0001_ip = 642; continue _fun0001 }
 224:
            if(var3) { _fun0001_ip = 550; continue _fun0001 }
 230:
            if(!(var1 == var13)) { _fun0001_ip = 442; continue _fun0001 }
 237:
            var3 = true;
            if(!(var3 !== var6)) { _fun0001_ip = 347; continue _fun0001 }
 243:
            var6 = null;
            if(!(var3 === var4)) { _fun0001_ip = 727; continue _fun0001 }
 252:
            var8 = _closure1_slot7;
            var4 = _closure1_slot1;
            var18 = _closure1_slot2;
            var3 = 9;
            var3 = var18[var3];
            var4 = var4.bind(var5)(var3);
            var3 = {};
            var17 = _closure1_slot0;
            var14 = 10;
            var15 = var18[var14];
            var15 = var17.bind(var5)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var14 = var18[var14];
            var14 = var17.bind(var5)(var14);
            var14 = var14.t;
            var14 = var14.rxI9sr;
            var14 = var15.bind(var16)(var14);
            var3['notice'] = var14;
            var6 = var8.bind(var5)(var4, var3);
            _fun0001_ip = 727; continue _fun0001;
 347:
            var8 = _closure1_slot7;
            var4 = _closure1_slot1;
            var18 = _closure1_slot2;
            var3 = 9;
            var3 = var18[var3];
            var4 = var4.bind(var5)(var3);
            var3 = {};
            var17 = _closure1_slot0;
            var14 = 10;
            var15 = var18[var14];
            var15 = var17.bind(var5)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var14 = var18[var14];
            var14 = var17.bind(var5)(var14);
            var14 = var14.t;
            var14 = var14.e2g9sb;
            var14 = var15.bind(var16)(var14);
            var3['notice'] = var14;
            var6 = var8.bind(var5)(var4, var3);
            _fun0001_ip = 727; continue _fun0001;
 442:
            var8 = _closure1_slot7;
            var4 = _closure1_slot1;
            var17 = _closure1_slot2;
            var3 = 9;
            var3 = var17[var3];
            var4 = var4.bind(var5)(var3);
            var3 = {};
            var3['notice'] = var13;
            var16 = _closure1_slot0;
            var13 = 10;
            var14 = var17[var13];
            var14 = var16.bind(var5)(var14);
            var15 = var14.intl;
            var14 = var15.string;
            var13 = var17[var13];
            var13 = var16.bind(var5)(var13);
            var13 = var13.t;
            var13 = var13.YKw/NT;
            var13 = var14.bind(var15)(var13);
            var3['ctaLabel'] = var13;
            var3['onClick'] = var12;
            var3['submitting'] = var11;
            var6 = var8.bind(var5)(var4, var3);
            _fun0001_ip = 727; continue _fun0001;
 550:
            var8 = _closure1_slot7;
            var4 = _closure1_slot1;
            var15 = _closure1_slot2;
            var3 = 9;
            var3 = var15[var3];
            var4 = var4.bind(var5)(var3);
            var3 = {};
            var14 = _closure1_slot0;
            var11 = 10;
            var12 = var15[var11];
            var12 = var14.bind(var5)(var12);
            var13 = var12.intl;
            var12 = var13.string;
            var11 = var15[var11];
            var11 = var14.bind(var5)(var11);
            var11 = var11.t;
            var11 = var11.MyJpJS;
            var11 = var12.bind(var13)(var11);
            var3['notice'] = var11;
            var6 = var8.bind(var5)(var4, var3);
            _fun0001_ip = 727; continue _fun0001;
 642:
            var8 = _closure1_slot7;
            var4 = _closure1_slot1;
            var11 = _closure1_slot2;
            var3 = 9;
            var3 = var11[var3];
            var4 = var4.bind(var5)(var3);
            var3 = {};
            var3['notice'] = var9;
            var6 = var8.bind(var5)(var4, var3);
            _fun0001_ip = 727; continue _fun0001;
 681:
            var8 = _closure1_slot7;
            var4 = _closure1_slot1;
            var9 = _closure1_slot2;
            var3 = 8;
            var3 = var9[var3];
            var4 = var4.bind(var5)(var3);
            var3 = {};
            var9 = var10.getAnyErrorMessage;
            var9 = var9.bind(var10)();
            var3['children'] = var9;
            var6 = var8.bind(var5)(var4, var3);
 727:
            var3 = var1 != var6;
            var1 = null;
            if(!var3) { _fun0001_ip = 766; continue _fun0001 }
 736:
            var4 = _closure1_slot7;
            var3 = _closure1_slot4;
            var2 = {};
            var7 = var7.warningBlockContainer;
            var2['style'] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 766:
            return var1;
        }
    };
    var _closure1_slot10 = var1;
    var1 = function GuildSettingsRoleSubscription(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var10 = var1.guildId;
            var7 = var1.children;
            var1 = _closure1_slot9;
            var5 = undefined;
            var8 = var1.bind(var5)();
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 11;
            var1 = var3[var1];
            var2 = var2.bind(var5)(var1);
            var1 = var2.useGroupListingsFetchContext;
            var1 = var1.bind(var2)();
            if(var1) { _fun0002_ip = 107; continue _fun0002 }
 59:
            var3 = _closure1_slot7;
            var2 = _closure1_slot4;
            var1 = {};
            var4 = var8.spinner;
            var1['style'] = var4;
            var11 = _closure1_slot7;
            var9 = _closure1_slot3;
            var4 = {};
            var4 = var11.bind(var5)(var9, var4);
            var1['children'] = var4;
            var1 = var3.bind(var5)(var2, var1);
            _fun0002_ip = 168; continue _fun0002;
 107:
            var4 = _closure1_slot8;
            var3 = _closure1_slot4;
            var2 = {};
            var8 = var8.container;
            var2['style'] = var8;
            var9 = _closure1_slot7;
            var8 = _closure1_slot10;
            var6 = {};
            var6['guildId'] = var10;
            var8 = var9.bind(var5)(var8, var6);
            var6 = new Array(2);
            var6[0] = var8;
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 168:
            return var1;
        }
    };
    var _closure1_slot11 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var10 = 1;
    var4 = var6[var10];
    var4 = var5.bind(var1)(var4);
    var8 = var4.ActivityIndicator;
    var _closure1_slot3 = var8;
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.GuildFeatures;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot7 = var7;
    var4 = var4.jsxs;
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var9['flex'] = var10;
    var4['container'] = var9;
    var9 = {'marginHorizontal': 16, 'marginTop': 16};
    var4['warningBlockContainer'] = var9;
    var9 = {};
    var10 = 12;
    var9['marginTop'] = var10;
    var4['spinner'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot9 = var4;
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionContainer.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GuildSettingsRoleSubscriptionContainer(arg1) {
        var11 = arg1;
        var4 = _closure1_slot7;
        var6 = _closure1_slot0;
        var9 = _closure1_slot2;
        var1 = 11;
        var1 = var9[var1];
        var3 = undefined;
        var1 = var6.bind(var3)(var1);
        var2 = var1.GroupListingsFetchContextProvider;
        var1 = {};
        var5 = var11.guildId;
        var1['guildId'] = var5;
        var5 = true;
        var1['refetchOnMount'] = var5;
        var7 = _closure1_slot7;
        var5 = 12;
        var5 = var9[var5];
        var5 = var6.bind(var3)(var5);
        var6 = var5.RoleSubscriptionSettingsDisabledContextProvider;
        var5 = {};
        var9 = var11.guildId;
        var5['guildId'] = var9;
        var10 = _closure1_slot7;
        var9 = _closure1_slot11;
        var8 = {};
        var13 = var8;
        var12 = var11;
        var11 = copyDataProperties(var13, var12);
        var8 = var10.bind(var3)(var9, var8);
        var5['children'] = var8;
        var5 = var7.bind(var3)(var6, var5);
        var1['children'] = var5;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();