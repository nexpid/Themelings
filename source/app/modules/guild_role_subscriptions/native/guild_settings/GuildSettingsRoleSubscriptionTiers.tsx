// app/modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionTiers.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var15 = metroImportDefault;
    var7 = metroImportAll;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var15;
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
 0:
            var1 = arg1;
            var5 = var1.children;
            var8 = var1.onPress;
            var7 = var1.onLongPress;
            var6 = var1.disabled;
            var4 = undefined;
            if(!(var6 === var4)) { _fun0001_ip = 32; continue _fun0001 }
 30:
            var6 = false;
 32:
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
            if(!var10) { _fun0001_ip = 94; continue _fun0001 }
 89:
            var10 = var11.disabled;
 94:
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
 0:
            var1 = arg1;
            var7 = var1.editStateId;
            var _closure2_slot0 = var7;
            var2 = var1.guildId;
            var _closure2_slot1 = var2;
            var2 = var1.groupListingId;
            var _closure2_slot2 = var2;
            var11 = var1.onPress;
            var1 = _closure1_slot18;
            var4 = undefined;
            var23 = var1.bind(var4)();
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
            if(var2) { _fun0002_ip = 119; continue _fun0002 }
 113:
            var3 = var1.published;
 119:
            var2 = var8 != var3;
            if(!var2) { _fun0002_ip = 129; continue _fun0002 }
 126:
            var2 = var3;
 129:
            var5 = var8 == var1;
            var3 = undefined;
            if(var5) { _fun0002_ip = 144; continue _fun0002 }
 138:
            var3 = var1.archived;
 144:
            var20 = var8 != var3;
            if(!var20) { _fun0002_ip = 154; continue _fun0002 }
 151:
            var20 = var3;
 154:
            var21 = !var20;
            if(!var21) { _fun0002_ip = 163; continue _fun0002 }
 160:
            var21 = !var2;
 163:
            if(!var21) { _fun0002_ip = 170; continue _fun0002 }
 166:
            var21 = var4 !== var1;
 170:
            var14 = var4 === var1;
            var5 = _closure1_slot2;
            var6 = _closure1_slot3;
            var3 = 21;
            var2 = var6[var3];
            var12 = var5.bind(var4)(var2);
            var2 = var12.useName;
            var12 = var2.bind(var12)(var7);
            var2 = _closure1_slot4;
            var16 = 1;
            var12 = var2.bind(var4)(var12, var16);
            var2 = 0;
            var17 = var12[var2];
            var12 = var6[var3];
            var13 = var5.bind(var4)(var12);
            var12 = var13.usePriceTier;
            var13 = var12.bind(var13)(var7);
            var12 = _closure1_slot4;
            var12 = var12.bind(var4)(var13, var16);
            var24 = var12[var2];
            var3 = var6[var3];
            var6 = var5.bind(var4)(var3);
            var5 = var6.useImage;
            var3 = 250;
            var5 = var5.bind(var6)(var7, var3);
            var3 = _closure1_slot4;
            var3 = var3.bind(var4)(var5, var16);
            var15 = var3[var2];
            var3 = var8 == var1;
            var13 = undefined;
            if(var3) { _fun0002_ip = 315; continue _fun0002 }
 305:
            var1 = var1.subscription_plans;
            var13 = var1[var2];
 315:
            var22 = '';
            if(!(var4 !== var24)) { _fun0002_ip = 606; continue _fun0002 }
 326:
            if(!(var8 == var13)) { _fun0002_ip = 482; continue _fun0002 }
 333:
            var7 = _closure1_slot0;
            var12 = _closure1_slot3;
            var1 = 15;
            var2 = var12[var1];
            var2 = var7.bind(var4)(var2);
            var5 = var2.intl;
            var3 = var5.formatToPlainString;
            var1 = var12[var1];
            var1 = var7.bind(var4)(var1);
            var1 = var1.t;
            var2 = var1.CgmBaG;
            var1 = {};
            var6 = 16;
            var6 = var12[var6];
            var19 = var7.bind(var4)(var6);
            var18 = var19.formatPrice;
            var6 = _closure1_slot12;
            var6 = var6.USD;
            var6 = var18.bind(var19)(var24, var6);
            var1['price'] = var6;
            var6 = 17;
            var6 = var12[var6];
            var12 = var7.bind(var4)(var6);
            var7 = var12.formatPlanInterval;
            var6 = {};
            var18 = _closure1_slot15;
            var18 = var18.MONTH;
            var6['interval'] = var18;
            var6['interval_count'] = var16;
            var6 = var7.bind(var12)(var6);
            var1['interval'] = var6;
            var1 = var3.bind(var5)(var2, var1);
            _fun0002_ip = 603; continue _fun0002;
 482:
            var12 = _closure1_slot0;
            var16 = _closure1_slot3;
            var2 = 15;
            var3 = var16[var2];
            var3 = var12.bind(var4)(var3);
            var6 = var3.intl;
            var5 = var6.formatToPlainString;
            var2 = var16[var2];
            var2 = var12.bind(var4)(var2);
            var2 = var2.t;
            var3 = var2.CgmBaG;
            var2 = {};
            var7 = 16;
            var7 = var16[var7];
            var19 = var12.bind(var4)(var7);
            var18 = var19.formatPrice;
            var7 = var13.currency;
            var7 = var18.bind(var19)(var24, var7);
            var2['price'] = var7;
            var7 = 17;
            var7 = var16[var7];
            var12 = var12.bind(var4)(var7);
            var7 = var12.formatPlanInterval;
            var7 = var7.bind(var12)(var13);
            var2['interval'] = var7;
            var1 = var5.bind(var6)(var3, var2);
 603:
            var22 = var1;
 606:
            var3 = _closure1_slot16;
            var2 = _closure1_slot7;
            var1 = {};
            var7 = _closure1_slot17;
            var6 = _closure1_slot22;
            var5 = {};
            var5['onPress'] = var11;
            var10 = function onLongPress() {
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
            var5['onLongPress'] = var10;
            var10 = var8 != var15;
            if(!var10) { _fun0002_ip = 711; continue _fun0002 }
 649:
            var12 = _closure1_slot16;
            var11 = _closure1_slot1;
            var13 = _closure1_slot3;
            var8 = 22;
            var8 = var13[var8];
            var11 = var11.bind(var4)(var8);
            var8 = {};
            var13 = var23.tierIcon;
            var8['style'] = var13;
            var13 = 'cover';
            var8['resizeMode'] = var13;
            var13 = {};
            var13['uri'] = var15;
            var8['source'] = var13;
            var10 = var12.bind(var4)(var11, var8);
 711:
            var8 = new Array(3);
            var8[0] = var10;
            var12 = _closure1_slot17;
            var11 = _closure1_slot7;
            var10 = {};
            var13 = var23.tierColumn;
            var10['style'] = var13;
            var16 = _closure1_slot16;
            var15 = _closure1_slot0;
            var13 = _closure1_slot3;
            var19 = 18;
            var13 = var13[var19];
            var13 = var15.bind(var4)(var13);
            var15 = var13.Text;
            var13 = {'variant': 'text-md/semibold', 'color': 'header-primary'};
            var13['children'] = var17;
            var15 = var16.bind(var4)(var15, var13);
            var13 = new Array(2);
            var13[0] = var15;
            var17 = _closure1_slot17;
            var16 = _closure1_slot7;
            var15 = {};
            var18 = var23.detailsRow;
            var15['style'] = var18;
            if(!var21) { _fun0002_ip = 839; continue _fun0002 }
 823:
            var25 = _closure1_slot16;
            var24 = _closure1_slot19;
            var18 = {};
            var21 = var25.bind(var4)(var24, var18);
 839:
            var18 = new Array(4);
            var18[0] = var21;
            if(!var20) { _fun0002_ip = 866; continue _fun0002 }
 850:
            var25 = _closure1_slot16;
            var24 = _closure1_slot20;
            var21 = {};
            var20 = var25.bind(var4)(var24, var21);
 866:
            var18[1] = var20;
            if(!var14) { _fun0002_ip = 889; continue _fun0002 }
 873:
            var24 = _closure1_slot16;
            var21 = _closure1_slot21;
            var20 = {};
            var14 = var24.bind(var4)(var21, var20);
 889:
            var18[2] = var14;
            var21 = _closure1_slot16;
            var20 = _closure1_slot0;
            var14 = _closure1_slot3;
            var19 = var14[var19];
            var19 = var20.bind(var4)(var19);
            var20 = var19.Text;
            var19 = {'style': null, 'variant': 'text-sm/medium', 'color': 'interactive-normal'};
            var23 = var23.tierPrice;
            var19['style'] = var23;
            var19['children'] = var22;
            var19 = var21.bind(var4)(var20, var19);
            var18[3] = var19;
            var15['children'] = var18;
            var15 = var17.bind(var4)(var16, var15);
            var13[1] = var15;
            var10['children'] = var13;
            var10 = var12.bind(var4)(var11, var10);
            var8[1] = var10;
            var11 = _closure1_slot16;
            var13 = _closure1_slot1;
            var9 = 23;
            var9 = var14[var9];
            var10 = var13.bind(var4)(var9);
            var9 = {};
            var12 = 24;
            var12 = var14[var12];
            var12 = var13.bind(var4)(var12);
            var9['source'] = var12;
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
 0:
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
            var2 = 25;
            var2 = var9[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.bind(var4)();
            var10 = var2.bottom;
            var2 = 26;
            var2 = var9[var2];
            var2 = var3.bind(var4)(var2);
            var13 = var2.bind(var4)();
            var7 = _closure1_slot0;
            var2 = 27;
            var2 = var9[var2];
            var3 = var7.bind(var4)(var2);
            var2 = var3.useNavigation;
            var2 = var2.bind(var3)();
            var _closure2_slot1 = var2;
            var3 = 28;
            var3 = var9[var3];
            var5 = var7.bind(var4)(var3);
            var3 = var5.useGroupListingsFetchContext;
            var5 = var3.bind(var5)();
            var3 = 29;
            var8 = var9[var3];
            var11 = var7.bind(var4)(var8);
            var8 = var11.useRoleSubscriptionMaxTiersExperiment;
            var8 = var8.bind(var11)(var6);
            var26 = var8.maxTiers;
            var8 = 30;
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
            var3 = 31;
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
 0:
                        var1 = arg1;
                        var2 = _closure2_slot7;
                        var2 = var2[var1];
                        var3 = null;
                        if(!(var3 != var2)) { _fun0004_ip = 23; continue _fun0004 }
 20:
                        var1 = var2;
 23:
                        return var1;
                    }
                };
                var3 = var2.bind(var3)(var1);
                var4 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 32;
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
                    var1 = 33;
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
            if(var15) { _fun0003_ip = 489; continue _fun0003 }
 484:
            var6 = var11.id;
 489:
            var7[4] = var6;
            var6 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var1 = _closure2_slot3;
                    if(!var1) { _fun0005_ip = 72; continue _fun0005 }
 10:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 34;
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
 72:
                    var1 = _closure2_slot3;
                    if(!var1) { _fun0005_ip = 86; continue _fun0005 }
 79:
                    var1 = _closure2_slot2;
                    if(var1) { _fun0005_ip = 175; continue _fun0005 }
 86:
                    var2 = _closure1_slot2;
                    var3 = _closure1_slot3;
                    var1 = 36;
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
                    if(var5) { _fun0005_ip = 149; continue _fun0005 }
 140:
                    var5 = _closure2_slot4;
                    var4 = var5.id;
 149:
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
                    _fun0005_ip = 253; continue _fun0005;
 175:
                    var2 = _closure1_slot2;
                    var3 = _closure1_slot3;
                    var1 = 35;
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
                    if(var7) { _fun0005_ip = 242; continue _fun0005 }
 233:
                    var6 = _closure2_slot4;
                    var5 = var6.id;
 242:
                    var1['groupListingId'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
 253:
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
 0:
                    var3 = _closure2_slot10;
                    var2 = _closure1_slot14;
                    var2 = var2.ROLE_SUBSCRIPTION_TIER_TEMPLATE;
                    if(!(var3 === var2)) { _fun0006_ip = 34; continue _fun0006 }
 24:
                    var2 = _closure2_slot9;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
 34:
                    var1 = undefined;
                    return var1;
                }
            };
            var6 = var8.bind(var9)(var6, var7);
            if(var5) { _fun0003_ip = 649; continue _fun0003 }
 601:
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
 649:
            var5 = function handleEditListing(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var7 = arg1;
                    var _closure3_slot0 = var7;
                    var4 = _closure1_slot10;
                    var3 = var4.getGuild;
                    var1 = _closure2_slot0;
                    var3 = var3.bind(var4)(var1);
                    var8 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    var1 = 37;
                    var5 = var4[var1];
                    var1 = undefined;
                    var8 = var8.bind(var1)(var5);
                    var10 = null;
                    var5 = var10 != var3;
                    var3 = 'guild must not be null';
                    var3 = var8.bind(var1)(var5, var3);
                    var3 = _closure1_slot2;
                    var2 = 35;
                    var2 = var4[var2];
                    var5 = var3.bind(var1)(var2);
                    var4 = var5.pushTierEditScene;
                    var3 = _closure2_slot1;
                    var2 = {};
                    var8 = _closure2_slot4;
                    var10 = var10 == var8;
                    var8 = undefined;
                    if(var10) { _fun0007_ip = 123; continue _fun0007 }
 114:
                    var9 = _closure2_slot4;
                    var8 = var9.id;
 123:
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
            if(var2) { _fun0003_ip = 686; continue _fun0003 }
 669:
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
 686:
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
            var8 = 38;
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
            var21 = 39;
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
    var4 = var15.bind(var1)(var4);
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
    var4 = var15.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var12 = 4;
    var4 = var6[var12];
    var4 = var15.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var15.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var16 = 6;
    var4 = var6[var16];
    var4 = var5.bind(var1)(var4);
    var7 = var4.CurrencyCodes;
    var _closure1_slot12 = var7;
    var13 = var4.Fonts;
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
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = '100%';
    var9['height'] = var10;
    var4['container'] = var9;
    var9 = {};
    var14 = 10;
    var10 = var6[var14];
    var19 = var15.bind(var1)(var10);
    var18 = var13.PRIMARY_SEMIBOLD;
    var11 = 11;
    var10 = var6[var11];
    var10 = var15.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.TEXT_LINK;
    var17 = 16;
    var22 = var19.bind(var1)(var18, var10, var17);
    var23 = var9;
    var10 = copyDataProperties(var23, var22);
    var4['saveButtonLabel'] = var9;
    var9 = {};
    var9['paddingHorizontal'] = var17;
    var4['paddedContainer'] = var9;
    var9 = {'height': 114, 'width': '100%'};
    var4['coverPhoto'] = var9;
    var9 = {};
    var10 = var6[var14];
    var20 = var15.bind(var1)(var10);
    var19 = var13.PRIMARY_MEDIUM;
    var10 = var6[var11];
    var10 = var15.bind(var1)(var10);
    var10 = var10.colors;
    var18 = var10.HEADER_SECONDARY;
    var10 = 14;
    var22 = var20.bind(var1)(var19, var18, var10);
    var23 = var9;
    var10 = copyDataProperties(var23, var22);
    var10 = 'marginTop';
    var9[var10] = var17;
    var4['coverDescription'] = var9;
    var9 = {'marginBottom': 16, 'paddingHorizontal': 16};
    var4['tierManagementDescription'] = var9;
    var9 = {'backgroundColor': null, 'borderRadius': null, 'flexDirection': 'row', 'alignItems': 'center', 'alignSelf': 'stretch', 'justifyContent': 'flex-start', 'height': 72, 'padding': 16, 'marginHorizontal': 16, 'marginBottom': 8};
    var10 = var6[var11];
    var10 = var15.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_SECONDARY;
    var9['backgroundColor'] = var10;
    var10 = var6[var11];
    var10 = var15.bind(var1)(var10);
    var10 = var10.radii;
    var10 = var10.sm;
    var9['borderRadius'] = var10;
    var4['tierManagementButton'] = var9;
    var9 = {'flexDirection': 'column', 'justifyContent': 'center', 'alignItems': 'flex-start', 'flex': 1};
    var4['tierColumn'] = var9;
    var9 = {'backgroundColor': null, 'borderRadius': 20, 'marginEnd': 12, 'height': 40, 'width': 40};
    var10 = var6[var11];
    var10 = var15.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_SECONDARY;
    var9['backgroundColor'] = var10;
    var10 = 12;
    var4['tierIcon'] = var9;
    var9 = {};
    var9['marginStart'] = var16;
    var4['tierPrice'] = var9;
    var9 = {};
    var16 = var6[var11];
    var16 = var15.bind(var1)(var16);
    var16 = var16.unsafe_rawColors;
    var16 = var16.YELLOW_300;
    var9['backgroundColor'] = var16;
    var16 = var6[var11];
    var16 = var15.bind(var1)(var16);
    var16 = var16.radii;
    var16 = var16.sm;
    var9['borderRadius'] = var16;
    var9['paddingHorizontal'] = var12;
    var4['draftBadge'] = var9;
    var9 = {};
    var16 = var6[var11];
    var16 = var15.bind(var1)(var16);
    var16 = var16.unsafe_rawColors;
    var16 = var16.PRIMARY_860;
    var9['color'] = var16;
    var16 = 'uppercase';
    var9['textTransform'] = var16;
    var4['draftBadgeLabel'] = var9;
    var9 = {};
    var17 = var6[var11];
    var17 = var15.bind(var1)(var17);
    var17 = var17.unsafe_rawColors;
    var17 = var17.PRIMARY_500;
    var9['backgroundColor'] = var17;
    var17 = var6[var11];
    var17 = var15.bind(var1)(var17);
    var17 = var17.radii;
    var17 = var17.sm;
    var9['borderRadius'] = var17;
    var9['paddingHorizontal'] = var12;
    var4['archiveBadge'] = var9;
    var9 = {};
    var9['textTransform'] = var16;
    var4['archiveBadgeLabel'] = var9;
    var9 = {};
    var17 = var6[var11];
    var17 = var15.bind(var1)(var17);
    var17 = var17.colors;
    var17 = var17.INTERACTIVE_MUTED;
    var9['backgroundColor'] = var17;
    var17 = var6[var11];
    var17 = var15.bind(var1)(var17);
    var17 = var17.radii;
    var17 = var17.sm;
    var9['borderRadius'] = var17;
    var9['paddingHorizontal'] = var12;
    var4['unsavedBadge'] = var9;
    var9 = {};
    var9['textTransform'] = var16;
    var4['unsavedBadgeLabel'] = var9;
    var9 = {'flexDirection': 'row', 'alignItems': 'center', 'marginTop': 3};
    var4['detailsRow'] = var9;
    var9 = {'flexDirection': 'row', 'marginTop': 4};
    var4['memberCount'] = var9;
    var9 = {};
    var14 = var6[var14];
    var14 = var15.bind(var1)(var14);
    var13 = var13.PRIMARY_MEDIUM;
    var11 = var6[var11];
    var11 = var15.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.INTERACTIVE_NORMAL;
    var22 = var14.bind(var1)(var13, var11, var10);
    var23 = var9;
    var11 = copyDataProperties(var23, var22);
    var11 = 'marginStart';
    var9[var11] = var12;
    var4['memberCountLabel'] = var9;
    var9 = {};
    var9['marginStart'] = var10;
    var4['createTierLabel'] = var9;
    var9 = {};
    var9['marginTop'] = var10;
    var4['spinner'] = var9;
    var9 = {};
    var10 = 0.5;
    var9['opacity'] = var10;
    var4['disabled'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot18 = var4;
    var4 = 41;
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
        var1 = 40;
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