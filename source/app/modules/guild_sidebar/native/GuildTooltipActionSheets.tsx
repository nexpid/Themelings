// app/modules/guild_sidebar/native/GuildTooltipActionSheets.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var2 = function GuildTooltipActionSheets(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var2 = var1.guild;
            var1 = var1.inRedesign;
            var2 = var2.id;
            var _closure2_slot0 = var2;
            var7 = new Array(0);
            var8 = _closure1_slot0;
            var4 = _closure1_slot2;
            var3 = 10;
            var3 = var4[var3];
            var4 = undefined;
            var8 = var8.bind(var4)(var3);
            var3 = var8.useCanSeeNUFChannelsForGuild;
            var3 = var3.bind(var8)(var2);
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var3;
case 2:
            if(!var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = var7.push;
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 11;
            var1 = var9[var1];
            var1 = var8.bind(var4)(var1);
            var1 = var1.DismissibleContent;
            var1 = var1.NUX_GUILD_CHANNEL_EXPLAINER;
            var1 = var3.bind(var7)(var1);
case 4:
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 12;
            var1 = var8[var1];
            var3 = var3.bind(var4)(var1);
            var1 = var3.useCanSeeCreatorMonetizationOnboardingV2Upsell;
            var1 = var1.bind(var3)(var2);
            if(!var1) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var3 = var7.push;
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 11;
            var1 = var9[var1];
            var1 = var8.bind(var4)(var1);
            var1 = var1.DismissibleContent;
            var1 = var1.CREATOR_MONETIZATION_ONBOARDING_V2_UPSELL;
            var1 = var3.bind(var7)(var1);
case 6:
            var3 = _closure1_slot1;
            var8 = _closure1_slot2;
            var1 = 13;
            var1 = var8[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.bind(var4)(var2);
            if(!var1) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var3 = var7.push;
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 11;
            var1 = var9[var1];
            var1 = var8.bind(var4)(var1);
            var1 = var1.DismissibleContent;
            var1 = var1.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL;
            var1 = var3.bind(var7)(var1);
case 8:
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 14;
            var1 = var8[var1];
            var3 = var3.bind(var4)(var1);
            var1 = var3.useCanUseRoleSubscriptionIAP;
            var1 = var1.bind(var3)(var2);
            if(!var1) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var3 = var7.push;
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 11;
            var1 = var9[var1];
            var1 = var8.bind(var4)(var1);
            var1 = var1.DismissibleContent;
            var1 = var1.GUILD_ROLE_SUBSCRIPTION_IAP_UPSELL;
            var1 = var3.bind(var7)(var1);
case 10:
            var3 = _closure1_slot1;
            var8 = _closure1_slot2;
            var1 = 15;
            var1 = var8[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.bind(var4)(var2);
            if(!var1) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var2 = var7.push;
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 11;
            var1 = var8[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.DismissibleContent;
            var1 = var1.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL;
            var1 = var2.bind(var7)(var1);
case 12:
            var3 = _closure1_slot6;
            var2 = _closure1_slot1;
            var8 = _closure1_slot2;
            var1 = 16;
            var1 = var8[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['contentTypes'] = var7;
            var6 = _closure1_slot5;
            var6 = var6.GUILD_HEADER_TOOLTIPS;
            var1['groupName'] = var6;
            var5 = function children(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = arg1;
                    var2 = var1.visibleContent;
                    var6 = var1.markAsDismissed;
                    var _closure3_slot0 = var6;
                    var3 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var8 = 11;
                    var1 = var1[var8];
                    var4 = undefined;
                    var1 = var3.bind(var4)(var1);
                    var1 = var1.DismissibleContent;
                    var1 = var1.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL;
                    if(!(var1 !== var2)) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                    var3 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var1 = var1[var8];
                    var1 = var3.bind(var4)(var1);
                    var1 = var1.DismissibleContent;
                    var1 = var1.GUILD_ROLE_SUBSCRIPTION_IAP_UPSELL;
                    if(!(var1 !== var2)) { _fun0002_ip = 16; continue _fun0002 }
case 17:
                    var3 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var1 = var1[var8];
                    var1 = var3.bind(var4)(var1);
                    var1 = var1.DismissibleContent;
                    var1 = var1.CREATOR_MONETIZATION_ONBOARDING_V2_UPSELL;
                    if(!(var1 !== var2)) { _fun0002_ip = 18; continue _fun0002 }
case 19:
                    var3 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var1 = var1[var8];
                    var1 = var3.bind(var4)(var1);
                    var1 = var1.DismissibleContent;
                    var1 = var1.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL;
                    if(!(var1 !== var2)) { _fun0002_ip = 20; continue _fun0002 }
case 21:
                    var3 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var1 = var1[var8];
                    var1 = var3.bind(var4)(var1);
                    var1 = var1.DismissibleContent;
                    var1 = var1.NUX_GUILD_CHANNEL_EXPLAINER;
                    if(!(var1 !== var2)) { _fun0002_ip = 22; continue _fun0002 }
case 23:
                    var1 = null;
                    return var1;
case 22:
                    var3 = _closure1_slot6;
                    var2 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var1 = 17;
                    var1 = var8[var1];
                    var1 = var2.bind(var4)(var1);
                    var2 = var1.DismissibleActionSheet;
                    var1 = {};
                    var7 = function markAsDismissed(arg1) {
                        var3 = _closure3_slot0;
                        var2 = undefined;
                        var1 = arg1;
                        var1 = var3.bind(var2)(var1);
                        return var1;
                    };
                    var1['markAsDismissed'] = var7;
                    var7 = _closure1_slot7;
                    var1['actionSheetKey'] = var7;
                    var7 = _closure1_slot8;
                    var1['importer'] = var7;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
case 20:
                    var3 = _closure1_slot6;
                    var2 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var1 = 17;
                    var1 = var7[var1];
                    var1 = var2.bind(var4)(var1);
                    var2 = var1.DismissibleActionSheet;
                    var1 = {};
                    var7 = _closure1_slot7;
                    var1['actionSheetKey'] = var7;
                    var7 = _closure1_slot12;
                    var1['importer'] = var7;
                    var1['markAsDismissed'] = var6;
                    var7 = _closure2_slot0;
                    var1['guildId'] = var7;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
case 18:
                    var3 = _closure1_slot6;
                    var2 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var1 = 17;
                    var1 = var7[var1];
                    var1 = var2.bind(var4)(var1);
                    var2 = var1.DismissibleActionSheet;
                    var1 = {};
                    var1['markAsDismissed'] = var6;
                    var7 = _closure1_slot11;
                    var1['importer'] = var7;
                    var7 = _closure1_slot7;
                    var1['actionSheetKey'] = var7;
                    var7 = _closure2_slot0;
                    var1['guildId'] = var7;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
case 16:
                    var3 = _closure1_slot6;
                    var2 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var1 = 17;
                    var1 = var7[var1];
                    var1 = var2.bind(var4)(var1);
                    var2 = var1.DismissibleActionSheet;
                    var1 = {};
                    var1['markAsDismissed'] = var6;
                    var7 = _closure1_slot10;
                    var1['importer'] = var7;
                    var7 = _closure1_slot7;
                    var1['actionSheetKey'] = var7;
                    var7 = _closure2_slot0;
                    var1['guildId'] = var7;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
case 14:
                    var3 = _closure1_slot6;
                    var2 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var1 = 17;
                    var1 = var7[var1];
                    var1 = var2.bind(var4)(var1);
                    var2 = var1.DismissibleActionSheet;
                    var1 = {};
                    var1['markAsDismissed'] = var6;
                    var6 = _closure1_slot9;
                    var1['importer'] = var6;
                    var5 = _closure1_slot7;
                    var1['actionSheetKey'] = var5;
                    var5 = _closure2_slot0;
                    var1['guildId'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                }
            };
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot14 = var2;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var8 = var7[var5];
    var5 = metroImportAll;
    var5 = var5.bind(var1)(var8);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.DismissibleContentGroupName;
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.jsx;
    var _closure1_slot6 = var5;
    var5 = 'GuildTooltipActionSheet';
    var _closure1_slot7 = var5;
    var5 = function NUFChannelsActionSheetImporter() {
        var3 = _closure1_slot0;
        var1 = _closure1_slot2;
        var2 = 5;
        var2 = var1[var2];
        var4 = undefined;
        var3 = var3.bind(var4)(var2);
        var2 = 4;
        var2 = var1[var2];
        var1 = var1.paths;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot8 = var5;
    var5 = function GuildRoleSubscriptionsUpsellActionSheetImporter() {
        var3 = _closure1_slot0;
        var1 = _closure1_slot2;
        var2 = 5;
        var2 = var1[var2];
        var4 = undefined;
        var3 = var3.bind(var4)(var2);
        var2 = 6;
        var2 = var1[var2];
        var1 = var1.paths;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot9 = var5;
    var5 = function GuildRoleSubscriptionsIAPUpsellActionSheetImporter() {
        var3 = _closure1_slot0;
        var1 = _closure1_slot2;
        var2 = 5;
        var2 = var1[var2];
        var4 = undefined;
        var3 = var3.bind(var4)(var2);
        var2 = 7;
        var2 = var1[var2];
        var1 = var1.paths;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot10 = var5;
    var5 = function CreatorMonetizationOnboardingV2UpsellActionSheetImporter() {
        var3 = _closure1_slot0;
        var1 = _closure1_slot2;
        var2 = 5;
        var2 = var1[var2];
        var4 = undefined;
        var3 = var3.bind(var4)(var2);
        var2 = 8;
        var2 = var1[var2];
        var1 = var1.paths;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot11 = var5;
    var5 = function TierTemplatesUpsellActionSheetImporter() {
        var3 = _closure1_slot0;
        var1 = _closure1_slot2;
        var2 = 5;
        var2 = var1[var2];
        var4 = undefined;
        var3 = var3.bind(var4)(var2);
        var2 = 9;
        var2 = var1[var2];
        var1 = var1.paths;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot12 = var5;
    var5 = {};
    var8 = 'function GuildTooltipActionSheetsTsx1(){const{runOnJS,setShouldRender}=this.__closure;return runOnJS(setShouldRender)(true);}';
    var5['code'] = var8;
    var _closure1_slot13 = var5;
    var5 = 19;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/guild_sidebar/native/GuildTooltipActionSheets.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function GuildTooltipActionSheetsGuard(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var7 = _closure1_slot4;
            var4 = var7.useState;
            var3 = false;
            var6 = var4.bind(var7)(var3);
            var4 = _closure1_slot3;
            var5 = undefined;
            var3 = 2;
            var6 = var4.bind(var5)(var6, var3);
            var3 = 0;
            var3 = var6[var3];
            var4 = 1;
            var4 = var6[var4];
            var _closure2_slot0 = var4;
            var6 = var7.useEffect;
            var4 = function() {
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var7 = 18;
                var2 = var9[var7];
                var1 = undefined;
                var4 = var8.bind(var1)(var2);
                var3 = var4.runOnUI;
                var2 = function s() {
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 18;
                    var1 = var3[var1];
                    var3 = undefined;
                    var4 = var2.bind(var3)(var1);
                    var2 = var4.runOnJS;
                    var1 = _closure2_slot0;
                    var2 = var2.bind(var4)(var1);
                    var1 = true;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var6 = {};
                var7 = var9[var7];
                var7 = var8.bind(var1)(var7);
                var7 = var7.runOnJS;
                var6['runOnJS'] = var7;
                var7 = _closure2_slot0;
                var6['setShouldRender'] = var7;
                var2['__closure'] = var6;
                var6 = 6076095421855.0;
                var2['__workletHash'] = var6;
                var5 = _closure1_slot13;
                var2['__initData'] = var5;
                var2 = var3.bind(var4)(var2);
                var2 = var2.bind(var1)();
                return var1;
            };
            var1 = new Array(0);
            var1 = var6.bind(var7)(var4, var1);
            var1 = null;
            if(!var3) { _fun0003_ip = 24; continue _fun0003 }
case 25:
            var4 = _closure1_slot6;
            var3 = _closure1_slot14;
            var2 = {};
            var8 = arg1;
            var9 = var2;
            var6 = copyDataProperties(var9, var8);
            var1 = var4.bind(var5)(var3, var2);
case 24:
            return var1;
        }
    };
    var3['default'] = var4;
    var3['GuildTooltipActionSheets'] = var2;
    return var1;
})();