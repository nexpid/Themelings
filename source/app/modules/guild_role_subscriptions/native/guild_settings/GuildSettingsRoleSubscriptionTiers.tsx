// app/modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionTiers.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var16 = metroImportDefault;
    var7 = metroImportAll;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var16;
    var _closure1_slot2 = var7;
    var _closure1_slot3 = var6;
    var1 = function DraftBadge() {
        var1 = _closure1_slot18;
        var4 = undefined;
        var8 = var1.bind(var4)();
        var3 = _closure1_slot16;
        var2 = _closure1_slot7;
        var1 = {};
        var6 = var8.draftBadge;
        var1['style'] = var6;
        var7 = _closure1_slot16;
        var11 = _closure1_slot0;
        var12 = _closure1_slot3;
        var5 = 18;
        var5 = var12[var5];
        var5 = var11.bind(var4)(var5);
        var6 = var5.Text;
        var5 = {};
        var8 = var8.draftBadgeLabel;
        var5['style'] = var8;
        var8 = 'text-xs/semibold';
        var5['variant'] = var8;
        var8 = 15;
        var9 = var12[var8];
        var9 = var11.bind(var4)(var9);
        var10 = var9.intl;
        var9 = var10.string;
        var8 = var12[var8];
        var8 = var11.bind(var4)(var8);
        var8 = var8.t;
        var8 = var8.vosPk5;
        var8 = var9.bind(var10)(var8);
        var5['children'] = var8;
        var5 = var7.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot19 = var1;
    var1 = function ArchivedBadge() {
        var1 = _closure1_slot18;
        var4 = undefined;
        var8 = var1.bind(var4)();
        var3 = _closure1_slot16;
        var2 = _closure1_slot7;
        var1 = {};
        var6 = var8.archiveBadge;
        var1['style'] = var6;
        var7 = _closure1_slot16;
        var11 = _closure1_slot0;
        var12 = _closure1_slot3;
        var5 = 18;
        var5 = var12[var5];
        var5 = var11.bind(var4)(var5);
        var6 = var5.Text;
        var5 = {'style': null, 'variant': 'text-xs/semibold', 'color': 'always-white'};
        var8 = var8.archiveBadgeLabel;
        var5['style'] = var8;
        var8 = 15;
        var9 = var12[var8];
        var9 = var11.bind(var4)(var9);
        var10 = var9.intl;
        var9 = var10.string;
        var8 = var12[var8];
        var8 = var11.bind(var4)(var8);
        var8 = var8.t;
        var8 = var8.nhbtEh;
        var8 = var9.bind(var10)(var8);
        var5['children'] = var8;
        var5 = var7.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot20 = var1;
    var1 = function UnsavedBadge() {
        var1 = _closure1_slot18;
        var4 = undefined;
        var8 = var1.bind(var4)();
        var3 = _closure1_slot16;
        var2 = _closure1_slot7;
        var1 = {};
        var6 = var8.unsavedBadge;
        var1['style'] = var6;
        var7 = _closure1_slot16;
        var11 = _closure1_slot0;
        var12 = _closure1_slot3;
        var5 = 18;
        var5 = var12[var5];
        var5 = var11.bind(var4)(var5);
        var6 = var5.Text;
        var5 = {'style': null, 'variant': 'text-xs/semibold', 'color': 'always-white'};
        var8 = var8.unsavedBadgeLabel;
        var5['style'] = var8;
        var8 = 15;
        var9 = var12[var8];
        var9 = var11.bind(var4)(var9);
        var10 = var9.intl;
        var9 = var10.string;
        var8 = var12[var8];
        var8 = var11.bind(var4)(var8);
        var8 = var8.t;
        var8 = var8.aiwXen;
        var8 = var9.bind(var10)(var8);
        var5['children'] = var8;
        var5 = var7.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot21 = var1;
    var1 = function Row(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var5 = var1.children;
            var8 = var1.onPress;
            var7 = var1.onLongPress;
            var6 = var1.disabled;
            var4 = undefined;
            if(!(var6 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = false;
case 2:
            var2 = _closure1_slot18;
            var11 = var2.bind(var4)();
            var3 = _closure1_slot16;
            var2 = _closure1_slot1;
            var9 = _closure1_slot3;
            var1 = 19;
            var1 = var9[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var10 = var11.tierManagementButton;
            var9 = new Array(2);
            var9[0] = var10;
            var10 = var6;
            if(!var10) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var10 = var11.disabled;
case 4:
            var9[1] = var10;
            var1['style'] = var9;
            var9 = 'button';
            var1['accessibilityRole'] = var9;
            var1['onPress'] = var8;
            var1['onLongPress'] = var7;
            var1['disabled'] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot22 = var1;
    var1 = function EditListingButton(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var7 = var1.editStateId;
            var _closure2_slot0 = var7;
            var2 = var1.guildId;
            var _closure2_slot1 = var2;
            var2 = var1.groupListingId;
            var _closure2_slot2 = var2;
            var13 = var1.onPress;
            var1 = _closure1_slot18;
            var4 = undefined;
            var24 = var1.bind(var4)();
            var2 = _closure1_slot0;
            var3 = _closure1_slot3;
            var1 = 20;
            var1 = var3[var1];
            var5 = var2.bind(var4)(var1);
            var3 = var5.useStateFromStores;
            var1 = _closure1_slot11;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var3 = _closure1_slot11;
                var2 = var3.getSubscriptionListing;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var3.bind(var5)(var2, var1);
            var8 = null;
            var2 = var8 == var1;
            var3 = undefined;
            if(var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var3 = var1.published;
case 6:
            var2 = var8 != var3;
            if(!var2) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var2 = var3;
case 8:
            var5 = var8 == var1;
            var3 = undefined;
            if(var5) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var3 = var1.archived;
case 10:
            var12 = var8 != var3;
            if(!var12) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var12 = var3;
case 12:
            var21 = !var12;
            if(!var21) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var21 = !var2;
case 14:
            if(!var21) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var21 = var4 !== var1;
case 16:
            var10 = var4 === var1;
            var5 = _closure1_slot2;
            var6 = _closure1_slot3;
            var3 = 21;
            var2 = var6[var3];
            var14 = var5.bind(var4)(var2);
            var2 = var14.useName;
            var14 = var2.bind(var14)(var7);
            var2 = _closure1_slot4;
            var17 = 1;
            var14 = var2.bind(var4)(var14, var17);
            var2 = 0;
            var18 = var14[var2];
            var14 = var6[var3];
            var15 = var5.bind(var4)(var14);
            var14 = var15.usePriceTier;
            var15 = var14.bind(var15)(var7);
            var14 = _closure1_slot4;
            var14 = var14.bind(var4)(var15, var17);
            var22 = var14[var2];
            var3 = var6[var3];
            var6 = var5.bind(var4)(var3);
            var5 = var6.useImage;
            var3 = 250;
            var5 = var5.bind(var6)(var7, var3);
            var3 = _closure1_slot4;
            var3 = var3.bind(var4)(var5, var17);
            var16 = var3[var2];
            var3 = var8 == var1;
            var15 = undefined;
            if(var3) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var1 = var1.subscription_plans;
            var15 = var1[var2];
case 18:
            var23 = '';
            if(!(var4 !== var22)) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            if(!(var8 == var15)) { _fun0002_ip = 22; continue _fun0002 }
case 23:
            var7 = _closure1_slot0;
            var14 = _closure1_slot3;
            var1 = 15;
            var2 = var14[var1];
            var2 = var7.bind(var4)(var2);
            var5 = var2.intl;
            var3 = var5.formatToPlainString;
            var1 = var14[var1];
            var1 = var7.bind(var4)(var1);
            var1 = var1.t;
            var2 = var1.CgmBaG;
            var1 = {};
            var6 = 16;
            var6 = var14[var6];
            var20 = var7.bind(var4)(var6);
            var19 = var20.formatPrice;
            var6 = _closure1_slot12;
            var6 = var6.USD;
            var6 = var19.bind(var20)(var22, var6);
            var1['price'] = var6;
            var6 = 17;
            var6 = var14[var6];
            var14 = var7.bind(var4)(var6);
            var7 = var14.formatPlanInterval;
            var6 = {};
            var19 = _closure1_slot15;
            var19 = var19.MONTH;
            var6['interval'] = var19;
            var6['interval_count'] = var17;
            var6 = var7.bind(var14)(var6);
            var1['interval'] = var6;
            var1 = var3.bind(var5)(var2, var1);
            _fun0002_ip = 24; continue _fun0002;
case 22:
            var14 = _closure1_slot0;
            var17 = _closure1_slot3;
            var2 = 15;
            var3 = var17[var2];
            var3 = var14.bind(var4)(var3);
            var6 = var3.intl;
            var5 = var6.formatToPlainString;
            var2 = var17[var2];
            var2 = var14.bind(var4)(var2);
            var2 = var2.t;
            var3 = var2.CgmBaG;
            var2 = {};
            var7 = 16;
            var7 = var17[var7];
            var20 = var14.bind(var4)(var7);
            var19 = var20.formatPrice;
            var7 = var15.currency;
            var7 = var19.bind(var20)(var22, var7);
            var2['price'] = var7;
            var7 = 17;
            var7 = var17[var7];
            var14 = var14.bind(var4)(var7);
            var7 = var14.formatPlanInterval;
            var7 = var7.bind(var14)(var15);
            var2['interval'] = var7;
            var1 = var5.bind(var6)(var3, var2);
case 24:
            var23 = var1;
case 20:
            var3 = _closure1_slot16;
            var2 = _closure1_slot7;
            var1 = {};
            var7 = _closure1_slot17;
            var6 = _closure1_slot22;
            var5 = {};
            var5['onPress'] = var13;
            var11 = function onLongPress() {
                var8 = _closure2_slot0;
                var7 = _closure2_slot1;
                var2 = _closure2_slot2;
                var6 = _closure1_slot1;
                var3 = _closure1_slot3;
                var1 = 12;
                var5 = var3[var1];
                var1 = undefined;
                var6 = var6.bind(var1)(var5);
                var5 = var6.openLazy;
                var9 = _closure1_slot0;
                var4 = 14;
                var4 = var3[var4];
                var9 = var9.bind(var1)(var4);
                var4 = 13;
                var4 = var3[var4];
                var3 = var3.paths;
                var4 = var9.bind(var1)(var4, var3);
                var3 = {};
                var3['editStateId'] = var8;
                var3['guildId'] = var7;
                var3['groupListingId'] = var2;
                var2 = 'TierArchiveOrDelete';
                var2 = var5.bind(var6)(var4, var2, var3);
                return var1;
            };
            var5['onLongPress'] = var11;
            var11 = var8 != var16;
            if(!var11) { _fun0002_ip = 25; continue _fun0002 }
case 26:
            var14 = _closure1_slot16;
            var13 = _closure1_slot1;
            var15 = _closure1_slot3;
            var8 = 22;
            var8 = var15[var8];
            var13 = var13.bind(var4)(var8);
            var8 = {};
            var15 = var24.tierIcon;
            var8['style'] = var15;
            var15 = 'cover';
            var8['resizeMode'] = var15;
            var15 = {};
            var15['uri'] = var16;
            var8['source'] = var15;
            var11 = var14.bind(var4)(var13, var8);
case 25:
            var8 = new Array(3);
            var8[0] = var11;
            var14 = _closure1_slot17;
            var13 = _closure1_slot7;
            var11 = {};
            var15 = var24.tierColumn;
            var11['style'] = var15;
            var17 = _closure1_slot16;
            var16 = _closure1_slot0;
            var15 = _closure1_slot3;
            var20 = 18;
            var15 = var15[var20];
            var15 = var16.bind(var4)(var15);
            var16 = var15.Text;
            var15 = {'variant': 'text-md/semibold', 'color': 'header-primary'};
            var15['children'] = var18;
            var16 = var17.bind(var4)(var16, var15);
            var15 = new Array(2);
            var15[0] = var16;
            var18 = _closure1_slot17;
            var17 = _closure1_slot7;
            var16 = {};
            var19 = var24.detailsRow;
            var16['style'] = var19;
            if(!var21) { _fun0002_ip = 27; continue _fun0002 }
case 28:
            var25 = _closure1_slot16;
            var22 = _closure1_slot19;
            var19 = {};
            var21 = var25.bind(var4)(var22, var19);
case 27:
            var19 = new Array(4);
            var19[0] = var21;
            if(!var12) { _fun0002_ip = 29; continue _fun0002 }
case 30:
            var25 = _closure1_slot16;
            var22 = _closure1_slot20;
            var21 = {};
            var12 = var25.bind(var4)(var22, var21);
case 29:
            var19[1] = var12;
            if(!var10) { _fun0002_ip = 31; continue _fun0002 }
case 32:
            var22 = _closure1_slot16;
            var21 = _closure1_slot21;
            var12 = {};
            var10 = var22.bind(var4)(var21, var12);
case 31:
            var19[2] = var10;
            var22 = _closure1_slot16;
            var10 = _closure1_slot0;
            var12 = _closure1_slot3;
            var20 = var12[var20];
            var20 = var10.bind(var4)(var20);
            var21 = var20.Text;
            var20 = {'style': null, 'variant': 'text-sm/medium', 'color': 'interactive-normal'};
            var24 = var24.tierPrice;
            var20['style'] = var24;
            var20['children'] = var23;
            var20 = var22.bind(var4)(var21, var20);
            var19[3] = var20;
            var16['children'] = var19;
            var16 = var18.bind(var4)(var17, var16);
            var15[1] = var16;
            var11['children'] = var15;
            var11 = var14.bind(var4)(var13, var11);
            var8[1] = var11;
            var11 = _closure1_slot16;
            var9 = 23;
            var9 = var12[var9];
            var9 = var10.bind(var4)(var9);
            var10 = var9.PencilIcon;
            var9 = {};
            var9 = var11.bind(var4)(var10, var9);
            var8[2] = var9;
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot23 = var1;
    var1 = function GuildSettingsRoleSubscriptionsTiersInner(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var2 = arg1;
            var6 = var2.guildId;
            var _closure2_slot0 = var6;
            var4 = undefined;
            var _closure2_slot9 = var4;
            var _closure2_slot10 = var4;
            var _closure2_slot11 = var4;
            var2 = _closure1_slot18;
            var17 = var2.bind(var4)();
            var3 = _closure1_slot1;
            var9 = _closure1_slot3;
            var2 = 24;
            var2 = var9[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.bind(var4)();
            var10 = var2.bottom;
            var2 = 25;
            var2 = var9[var2];
            var2 = var3.bind(var4)(var2);
            var13 = var2.bind(var4)();
            var7 = _closure1_slot0;
            var2 = 26;
            var2 = var9[var2];
            var3 = var7.bind(var4)(var2);
            var2 = var3.useNavigation;
            var2 = var2.bind(var3)();
            var _closure2_slot1 = var2;
            var3 = 27;
            var3 = var9[var3];
            var5 = var7.bind(var4)(var3);
            var3 = var5.useGroupListingsFetchContext;
            var5 = var3.bind(var5)();
            var3 = 28;
            var8 = var9[var3];
            var11 = var7.bind(var4)(var8);
            var8 = var11.useRoleSubscriptionMaxTiersExperiment;
            var8 = var8.bind(var11)(var6);
            var26 = var8.maxTiers;
            var8 = 29;
            var8 = var9[var8];
            var11 = var7.bind(var4)(var8);
            var8 = var11.useRoleSubscriptionSettingsDisabled;
            var12 = var8.bind(var11)();
            var8 = var9[var3];
            var11 = var7.bind(var4)(var8);
            var8 = var11.useGuildEligibleForTierTemplates;
            var15 = var8.bind(var11)(var6);
            var _closure2_slot2 = var15;
            var3 = var9[var3];
            var8 = var7.bind(var4)(var3);
            var3 = var8.useUserEligibleForTierTemplates;
            var16 = var3.bind(var8)();
            var _closure2_slot3 = var16;
            var3 = 30;
            var3 = var9[var3];
            var7 = var7.bind(var4)(var3);
            var3 = var7.useGroupListingsForGuild;
            var18 = var3.bind(var7)(var6);
            var3 = 0;
            var11 = var18[var3];
            var _closure2_slot4 = var11;
            var8 = var18.map;
            var7 = function(arg1) {
                var1 = arg1;
                var1 = var1.id;
                return var1;
            };
            var7 = var8.bind(var18)(var7);
            var18 = var7[var3];
            var _closure2_slot5 = var18;
            var8 = _closure1_slot2;
            var7 = 21;
            var7 = var9[var7];
            var9 = var8.bind(var4)(var7);
            var8 = var9.useEditStateIds;
            var7 = {};
            var19 = true;
            var7['includeSoftDeleted'] = var19;
            var7 = var8.bind(var9)(var18, var6, var7);
            var18 = var7.editStateIds;
            var _closure2_slot6 = var18;
            var9 = _closure1_slot5;
            var8 = var9.useState;
            var7 = {};
            var9 = var8.bind(var9)(var7);
            var8 = _closure1_slot4;
            var7 = 2;
            var8 = var8.bind(var4)(var9, var7);
            var3 = var8[var3];
            var _closure2_slot7 = var3;
            var7 = 1;
            var7 = var8[var7];
            var _closure2_slot8 = var7;
            var9 = _closure1_slot5;
            var8 = var9.useMemo;
            var7 = new Array(2);
            var7[0] = var18;
            var7[1] = var3;
            var3 = function() {
                var3 = _closure2_slot6;
                var2 = var3.map;
                var1 = function(arg1) {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        var1 = arg1;
                        var2 = _closure2_slot7;
                        var2 = var2[var1];
                        var3 = null;
                        if(!(var3 != var2)) { _fun0004_ip = 33; continue _fun0004 }
case 34:
                        var1 = var2;
case 33:
                        return var1;
                    }
                };
                var3 = var2.bind(var3)(var1);
                var4 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 31;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var4.bind(var1)(var2);
                var1 = var2.uniq;
                var1 = var1.bind(var2)(var3);
                return var1;
            };
            var3 = var8.bind(var9)(var3, var7);
            var9 = _closure1_slot5;
            var8 = var9.useLayoutEffect;
            var7 = function() {
                var3 = _closure2_slot1;
                var2 = var3.setOptions;
                var1 = {};
                var4 = function headerTitle() {
                    var4 = _closure1_slot16;
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot3;
                    var1 = 32;
                    var1 = var9[var1];
                    var3 = undefined;
                    var1 = var8.bind(var3)(var1);
                    var2 = var1.NavigatorHeader;
                    var1 = {};
                    var5 = 15;
                    var6 = var9[var5];
                    var6 = var8.bind(var3)(var6);
                    var10 = var6.intl;
                    var7 = var10.string;
                    var6 = var9[var5];
                    var6 = var8.bind(var3)(var6);
                    var6 = var6.t;
                    var6 = var6.pXbGYW;
                    var6 = var7.bind(var10)(var6);
                    var1['title'] = var6;
                    var6 = var9[var5];
                    var6 = var8.bind(var3)(var6);
                    var7 = var6.intl;
                    var6 = var7.string;
                    var5 = var9[var5];
                    var5 = var8.bind(var3)(var5);
                    var5 = var5.t;
                    var5 = var5.KzCF//;
                    var5 = var6.bind(var7)(var5);
                    var1['subtitle'] = var5;
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
                };
                var1['headerTitle'] = var4;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var7 = var8.bind(var9)(var7);
            var9 = _closure1_slot5;
            var8 = var9.useCallback;
            var7 = new Array(5);
            var7[0] = var16;
            var7[1] = var15;
            var7[2] = var6;
            var7[3] = var2;
            var2 = null;
            var15 = var2 == var11;
            var6 = undefined;
            if(var15) { _fun0003_ip = 35; continue _fun0003 }
case 36:
            var6 = var11.id;
case 35:
            var7[4] = var6;
            var6 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = _closure2_slot3;
                    if(!var1) { _fun0005_ip = 37; continue _fun0005 }
case 38:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 33;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var3 = var1.GuildRoleSubscriptionsTierTemplatesExperiment;
                    var2 = var3.trackExposure;
                    var1 = {};
                    var4 = _closure2_slot0;
                    var1['guildId'] = var4;
                    var4 = '57f505_1';
                    var1['location'] = var4;
                    var1 = var2.bind(var3)(var1);
case 37:
                    var1 = _closure2_slot3;
                    if(!var1) { _fun0005_ip = 39; continue _fun0005 }
case 40:
                    var1 = _closure2_slot2;
                    if(var1) { _fun0005_ip = 41; continue _fun0005 }
case 39:
                    var2 = _closure1_slot2;
                    var3 = _closure1_slot3;
                    var1 = 35;
                    var1 = var3[var1];
                    var4 = undefined;
                    var3 = var2.bind(var4)(var1);
                    var2 = var3.openTierCreationModal;
                    var1 = {};
                    var5 = _closure2_slot0;
                    var1['guildId'] = var5;
                    var7 = _closure2_slot4;
                    var5 = null;
                    var5 = var5 == var7;
                    if(var5) { _fun0005_ip = 42; continue _fun0005 }
case 43:
                    var5 = _closure2_slot4;
                    var4 = var5.id;
case 42:
                    var1['groupListingId'] = var4;
                    var4 = function onAfterTierCreation() {
                        var3 = _closure2_slot1;
                        var2 = var3.navigate;
                        var1 = _closure1_slot13;
                        var1 = var1.ROLE_SUBSCRIPTIONS_TIERS;
                        var1 = var2.bind(var3)(var1);
                        var1 = undefined;
                        return var1;
                    };
                    var1['onAfterTierCreation'] = var4;
                    var1 = var2.bind(var3)(var1);
                    _fun0005_ip = 44; continue _fun0005;
case 41:
                    var2 = _closure1_slot2;
                    var3 = _closure1_slot3;
                    var1 = 34;
                    var1 = var3[var1];
                    var5 = undefined;
                    var4 = var2.bind(var5)(var1);
                    var3 = var4.pushTierTemplateSelectionScene;
                    var2 = _closure2_slot1;
                    var1 = {};
                    var7 = _closure2_slot0;
                    var1['guildId'] = var7;
                    var8 = _closure2_slot4;
                    var7 = null;
                    var7 = var7 == var8;
                    if(var7) { _fun0005_ip = 45; continue _fun0005 }
case 46:
                    var6 = _closure2_slot4;
                    var5 = var6.id;
case 45:
                    var1['groupListingId'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
case 44:
                    var1 = undefined;
                    return var1;
                }
            };
            var15 = var8.bind(var9)(var6, var7);
            _closure2_slot9 = var15;
            var7 = _closure1_slot0;
            var8 = _closure1_slot3;
            var6 = 20;
            var6 = var8[var6];
            var9 = var7.bind(var4)(var6);
            var8 = var9.useStateFromStores;
            var6 = _closure1_slot9;
            var7 = new Array(1);
            var7[0] = var6;
            var6 = function() {
                var2 = _closure1_slot9;
                var1 = var2.getProps;
                var1 = var1.bind(var2)();
                var1 = var1.subsection;
                return var1;
            };
            var6 = var8.bind(var9)(var7, var6);
            _closure2_slot10 = var6;
            var9 = _closure1_slot5;
            var8 = var9.useEffect;
            var7 = new Array(2);
            var7[0] = var6;
            var7[1] = var15;
            var6 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var3 = _closure2_slot10;
                    var2 = _closure1_slot14;
                    var2 = var2.ROLE_SUBSCRIPTION_TIER_TEMPLATE;
                    if(!(var3 === var2)) { _fun0006_ip = 47; continue _fun0006 }
case 48:
                    var2 = _closure2_slot9;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
case 47:
                    var1 = undefined;
                    return var1;
                }
            };
            var6 = var8.bind(var9)(var6, var7);
            if(var5) { _fun0003_ip = 26; continue _fun0003 }
case 49:
            var7 = _closure1_slot16;
            var6 = _closure1_slot7;
            var5 = {};
            var8 = var17.spinner;
            var5['style'] = var8;
            var11 = _closure1_slot16;
            var9 = _closure1_slot6;
            var8 = {};
            var8 = var11.bind(var4)(var9, var8);
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            return var5;
case 26:
            var5 = function handleEditListing(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var7 = arg1;
                    var _closure3_slot0 = var7;
                    var4 = _closure1_slot10;
                    var3 = var4.getGuild;
                    var1 = _closure2_slot0;
                    var3 = var3.bind(var4)(var1);
                    var8 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    var1 = 36;
                    var5 = var4[var1];
                    var1 = undefined;
                    var8 = var8.bind(var1)(var5);
                    var10 = null;
                    var5 = var10 != var3;
                    var3 = 'guild must not be null';
                    var3 = var8.bind(var1)(var5, var3);
                    var3 = _closure1_slot2;
                    var2 = 34;
                    var2 = var4[var2];
                    var5 = var3.bind(var1)(var2);
                    var4 = var5.pushTierEditScene;
                    var3 = _closure2_slot1;
                    var2 = {};
                    var8 = _closure2_slot4;
                    var10 = var10 == var8;
                    var8 = undefined;
                    if(var10) { _fun0007_ip = 50; continue _fun0007 }
case 51:
                    var9 = _closure2_slot4;
                    var8 = var9.id;
case 50:
                    var2['groupListingId'] = var8;
                    var2['initialEditStateId'] = var7;
                    var6 = function onBeforeDispatchNewListing(arg1) {
                        var1 = arg1;
                        var4 = var1.id;
                        var3 = _closure3_slot0;
                        var2 = function(arg1, arg2) {
                            var1 = arg1;
                            var _closure5_slot0 = var1;
                            var1 = arg2;
                            var _closure5_slot1 = var1;
                            var3 = _closure2_slot8;
                            var1 = undefined;
                            var2 = function(arg1) {
                                var1 = {};
                                var4 = arg1;
                                var5 = var1;
                                var2 = copyDataProperties(var5, var4);
                                var3 = _closure5_slot1;
                                var2 = _closure5_slot0;
                                var1[var3] = var2;
                                return var1;
                            };
                            var2 = var3.bind(var1)(var2);
                            return var1;
                        };
                        var1 = undefined;
                        var2 = var2.bind(var1)(var4, var3);
                        return var1;
                    };
                    var2['onBeforeDispatchNewListing'] = var6;
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                }
            };
            _closure2_slot11 = var5;
            var2 = var2 == var3;
            var9 = undefined;
            if(var2) { _fun0003_ip = 52; continue _fun0003 }
case 53:
            var2 = var3.map;
            var1 = function(arg1) {
                var5 = arg1;
                var _closure3_slot0 = var5;
                var4 = _closure1_slot16;
                var3 = _closure1_slot23;
                var2 = {};
                var2['editStateId'] = var5;
                var7 = _closure2_slot0;
                var2['guildId'] = var7;
                var6 = _closure2_slot5;
                var2['groupListingId'] = var6;
                var1 = function onPress() {
                    var3 = _closure2_slot11;
                    var2 = _closure3_slot0;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    return var1;
                };
                var2['onPress'] = var1;
                var1 = undefined;
                var1 = var4.bind(var1)(var3, var2, var5);
                return var1;
            };
            var9 = var2.bind(var3)(var1);
case 52:
            var3 = _closure1_slot16;
            var2 = _closure1_slot8;
            var1 = {};
            var5 = var17.container;
            var1['style'] = var5;
            var7 = _closure1_slot17;
            var6 = _closure1_slot7;
            var5 = {};
            var8 = {};
            var8['paddingBottom'] = var10;
            var5['style'] = var8;
            var11 = _closure1_slot16;
            var22 = _closure1_slot1;
            var20 = _closure1_slot3;
            var8 = 37;
            var8 = var20[var8];
            var10 = var22.bind(var4)(var8);
            var8 = {};
            var13 = var13.header;
            var8['style'] = var13;
            var19 = _closure1_slot0;
            var16 = 15;
            var13 = var20[var16];
            var13 = var19.bind(var4)(var13);
            var21 = var13.intl;
            var18 = var21.string;
            var13 = var20[var16];
            var13 = var19.bind(var4)(var13);
            var13 = var13.t;
            var13 = var13.7iBIoK;
            var13 = var18.bind(var21)(var13);
            var8['children'] = var13;
            var10 = var11.bind(var4)(var10, var8);
            var8 = new Array(4);
            var8[0] = var10;
            var18 = _closure1_slot16;
            var13 = 18;
            var10 = var20[var13];
            var10 = var19.bind(var4)(var10);
            var11 = var10.Text;
            var10 = {'style': null, 'variant': 'text-sm/medium', 'color': 'header-secondary'};
            var21 = var17.tierManagementDescription;
            var10['style'] = var21;
            var21 = var20[var16];
            var21 = var19.bind(var4)(var21);
            var25 = var21.intl;
            var24 = var25.format;
            var21 = var20[var16];
            var21 = var19.bind(var4)(var21);
            var21 = var21.t;
            var23 = var21.nHRSvL;
            var21 = {};
            var21['maxTiers'] = var26;
            var21 = var24.bind(var25)(var23, var21);
            var10['children'] = var21;
            var10 = var18.bind(var4)(var11, var10);
            var8[1] = var10;
            var8[2] = var9;
            var11 = _closure1_slot17;
            var10 = _closure1_slot22;
            var9 = {};
            var9['onPress'] = var15;
            var9['disabled'] = var12;
            var18 = _closure1_slot16;
            var12 = 22;
            var12 = var20[var12];
            var15 = var22.bind(var4)(var12);
            var12 = {};
            var21 = 38;
            var21 = var20[var21];
            var21 = var22.bind(var4)(var21);
            var12['source'] = var21;
            var15 = var18.bind(var4)(var15, var12);
            var12 = new Array(2);
            var12[0] = var15;
            var15 = _closure1_slot16;
            var13 = var20[var13];
            var13 = var19.bind(var4)(var13);
            var14 = var13.Text;
            var13 = {'style': null, 'variant': 'text-md/medium', 'color': 'header-primary'};
            var17 = var17.createTierLabel;
            var13['style'] = var17;
            var17 = var20[var16];
            var17 = var19.bind(var4)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var16 = var20[var16];
            var16 = var19.bind(var4)(var16);
            var16 = var16.t;
            var16 = var16.PiFnn5;
            var16 = var17.bind(var18)(var16);
            var13['children'] = var16;
            var13 = var15.bind(var4)(var14, var13);
            var12[1] = var13;
            var9['children'] = var12;
            var9 = var11.bind(var4)(var10, var9);
            var8[3] = var9;
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot24 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var16.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.ActivityIndicator;
    var _closure1_slot6 = var7;
    var7 = var4.View;
    var _closure1_slot7 = var7;
    var4 = var4.ScrollView;
    var _closure1_slot8 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var16.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var13 = 4;
    var4 = var6[var13];
    var4 = var16.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var16.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var17 = 6;
    var4 = var6[var17];
    var4 = var5.bind(var1)(var4);
    var7 = var4.CurrencyCodes;
    var _closure1_slot12 = var7;
    var14 = var4.Fonts;
    var7 = var4.GuildSettingsSections;
    var _closure1_slot13 = var7;
    var4 = var4.GuildSettingsSubsections;
    var _closure1_slot14 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.SubscriptionIntervalTypes;
    var _closure1_slot15 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot16 = var7;
    var4 = var4.jsxs;
    var _closure1_slot17 = var4;
    var4 = 9;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var7 = {};
    var4 = {};
    var10 = '100%';
    var4['height'] = var10;
    var7['container'] = var4;
    var4 = {};
    var15 = 10;
    var10 = var6[var15];
    var19 = var16.bind(var1)(var10);
    var18 = var14.PRIMARY_SEMIBOLD;
    var12 = 11;
    var10 = var6[var12];
    var10 = var16.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.TEXT_LINK;
    var11 = 16;
    var22 = var19.bind(var1)(var18, var10, var11);
    var23 = var4;
    var10 = copyDataProperties(var23, var22);
    var7['saveButtonLabel'] = var4;
    var4 = {};
    var4['paddingHorizontal'] = var11;
    var7['paddedContainer'] = var4;
    var4 = {'height': 114, 'width': '100%'};
    var7['coverPhoto'] = var4;
    var4 = {};
    var10 = var6[var15];
    var20 = var16.bind(var1)(var10);
    var19 = var14.PRIMARY_MEDIUM;
    var10 = var6[var12];
    var10 = var16.bind(var1)(var10);
    var10 = var10.colors;
    var18 = var10.HEADER_SECONDARY;
    var10 = 14;
    var22 = var20.bind(var1)(var19, var18, var10);
    var23 = var4;
    var10 = copyDataProperties(var23, var22);
    var10 = 'marginTop';
    var4[var10] = var11;
    var7['coverDescription'] = var4;
    var4 = {'marginBottom': 16, 'paddingHorizontal': 16};
    var7['tierManagementDescription'] = var4;
    var4 = {'backgroundColor': null, 'borderRadius': null, 'flexDirection': 'row', 'alignItems': 'center', 'alignSelf': 'stretch', 'justifyContent': 'flex-start', 'height': 72, 'padding': 16, 'marginHorizontal': 16, 'marginBottom': 8};
    var10 = var6[var12];
    var10 = var16.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_SECONDARY;
    var4['backgroundColor'] = var10;
    var10 = var6[var12];
    var10 = var16.bind(var1)(var10);
    var10 = var10.radii;
    var10 = var10.sm;
    var4['borderRadius'] = var10;
    var7['tierManagementButton'] = var4;
    var4 = {'flexDirection': 'column', 'justifyContent': 'center', 'alignItems': 'flex-start', 'flex': 1};
    var7['tierColumn'] = var4;
    var10 = {'backgroundColor': null, 'borderRadius': 20, 'marginEnd': 12, 'height': 40, 'width': 40};
    var4 = var6[var12];
    var4 = var16.bind(var1)(var4);
    var4 = var4.colors;
    var4 = var4.BACKGROUND_SECONDARY;
    var10['backgroundColor'] = var4;
    var11 = 12;
    var4 = 40;
    var7['tierIcon'] = var10;
    var10 = {};
    var10['marginStart'] = var17;
    var7['tierPrice'] = var10;
    var10 = {};
    var17 = var6[var12];
    var17 = var16.bind(var1)(var17);
    var17 = var17.unsafe_rawColors;
    var17 = var17.YELLOW_300;
    var10['backgroundColor'] = var17;
    var17 = var6[var12];
    var17 = var16.bind(var1)(var17);
    var17 = var17.radii;
    var17 = var17.sm;
    var10['borderRadius'] = var17;
    var10['paddingHorizontal'] = var13;
    var7['draftBadge'] = var10;
    var10 = {};
    var17 = var6[var12];
    var17 = var16.bind(var1)(var17);
    var17 = var17.unsafe_rawColors;
    var17 = var17.PRIMARY_860;
    var10['color'] = var17;
    var17 = 'uppercase';
    var10['textTransform'] = var17;
    var7['draftBadgeLabel'] = var10;
    var10 = {};
    var18 = var6[var12];
    var18 = var16.bind(var1)(var18);
    var18 = var18.unsafe_rawColors;
    var18 = var18.PRIMARY_500;
    var10['backgroundColor'] = var18;
    var18 = var6[var12];
    var18 = var16.bind(var1)(var18);
    var18 = var18.radii;
    var18 = var18.sm;
    var10['borderRadius'] = var18;
    var10['paddingHorizontal'] = var13;
    var7['archiveBadge'] = var10;
    var10 = {};
    var10['textTransform'] = var17;
    var7['archiveBadgeLabel'] = var10;
    var10 = {};
    var18 = var6[var12];
    var18 = var16.bind(var1)(var18);
    var18 = var18.colors;
    var18 = var18.INTERACTIVE_MUTED;
    var10['backgroundColor'] = var18;
    var18 = var6[var12];
    var18 = var16.bind(var1)(var18);
    var18 = var18.radii;
    var18 = var18.sm;
    var10['borderRadius'] = var18;
    var10['paddingHorizontal'] = var13;
    var7['unsavedBadge'] = var10;
    var10 = {};
    var10['textTransform'] = var17;
    var7['unsavedBadgeLabel'] = var10;
    var10 = {'flexDirection': 'row', 'alignItems': 'center', 'marginTop': 3};
    var7['detailsRow'] = var10;
    var10 = {'flexDirection': 'row', 'marginTop': 4};
    var7['memberCount'] = var10;
    var10 = {};
    var15 = var6[var15];
    var15 = var16.bind(var1)(var15);
    var14 = var14.PRIMARY_MEDIUM;
    var12 = var6[var12];
    var12 = var16.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.INTERACTIVE_NORMAL;
    var22 = var15.bind(var1)(var14, var12, var11);
    var23 = var10;
    var12 = copyDataProperties(var23, var22);
    var12 = 'marginStart';
    var10[var12] = var13;
    var7['memberCountLabel'] = var10;
    var10 = {};
    var10['marginStart'] = var11;
    var7['createTierLabel'] = var10;
    var10 = {};
    var10['marginTop'] = var11;
    var7['spinner'] = var10;
    var10 = {};
    var11 = 0.5;
    var10['opacity'] = var11;
    var7['disabled'] = var10;
    var7 = var8.bind(var9)(var7);
    var _closure1_slot18 = var7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionTiers.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GuildSettingsRoleSubscriptionsTiers(arg1) {
        var1 = arg1;
        var8 = var1.guildId;
        var4 = _closure1_slot16;
        var2 = _closure1_slot1;
        var3 = _closure1_slot3;
        var1 = 39;
        var1 = var3[var1];
        var3 = undefined;
        var2 = var2.bind(var3)(var1);
        var1 = {};
        var1['guildId'] = var8;
        var7 = _closure1_slot16;
        var6 = _closure1_slot24;
        var5 = {};
        var5['guildId'] = var8;
        var5 = var7.bind(var3)(var6, var5);
        var1['children'] = var5;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();