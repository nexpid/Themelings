// app/modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionTierEdit.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var13 = metroImportDefault;
    var8 = metroImportAll;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var8;
    var _closure1_slot3 = var6;
    var1 = function ArchiveOrDeleteTierSection() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = _closure1_slot17;
            var4 = undefined;
            var15 = var1.bind(var4)();
            var _closure2_slot0 = var15;
            var8 = _closure1_slot0;
            var18 = _closure1_slot3;
            var1 = 12;
            var1 = var18[var1];
            var2 = var8.bind(var4)(var1);
            var1 = var2.useNavigation;
            var21 = var1.bind(var2)();
            var1 = 13;
            var1 = var18[var1];
            var2 = var8.bind(var4)(var1);
            var1 = var2.useEditStateContext;
            var1 = var1.bind(var2)();
            var3 = var1.guildId;
            var23 = var1.groupListingId;
            var22 = var1.editStateId;
            var17 = _closure1_slot1;
            var1 = 14;
            var1 = var18[var1];
            var1 = var17.bind(var4)(var1);
            var25 = undefined;
            var24 = var3;
            var1 = var25[var1](var24, var23, var22, var21, var20);
            var9 = var1.buttonText;
            var19 = var1.descriptionText;
            var13 = var1.handleArchiveOrDelete;
            var12 = var1.deleting;
            var11 = var1.archiving;
            var1 = 15;
            var1 = var18[var1];
            var2 = var8.bind(var4)(var1);
            var1 = var2.useShouldRestrictUpdatingCreatorMonetizationSettings;
            var1 = var1.bind(var2)(var3);
            var10 = var1.allowSelfRemoveMonetization;
            var3 = _closure1_slot16;
            var2 = _closure1_slot15;
            var1 = {};
            var16 = _closure1_slot14;
            var5 = 16;
            var5 = var18[var5];
            var7 = var17.bind(var4)(var5);
            var5 = {};
            var20 = var15.actionHeader;
            var5['style'] = var20;
            var5['children'] = var9;
            var7 = var16.bind(var4)(var7, var5);
            var5 = new Array(3);
            var5[0] = var7;
            var16 = _closure1_slot14;
            var7 = 17;
            var7 = var18[var7];
            var7 = var8.bind(var4)(var7);
            var8 = var7.Text;
            var7 = {'style': null, 'variant': 'text-sm/medium', 'color': 'header-secondary'};
            var20 = var15.actionDescription;
            var7['style'] = var20;
            var7['children'] = var19;
            var7 = var16.bind(var4)(var8, var7);
            var5[1] = var7;
            var8 = _closure1_slot14;
            var16 = 18;
            var6 = var18[var16];
            var7 = var17.bind(var4)(var6);
            var6 = {};
            var16 = var18[var16];
            var16 = var17.bind(var4)(var16);
            var16 = var16.Colors;
            var16 = var16.RED;
            var6['color'] = var16;
            var15 = var15.actionButton;
            var6['style'] = var15;
            var14 = function renderIcon() {
                var4 = _closure1_slot14;
                var6 = _closure1_slot1;
                var7 = _closure1_slot3;
                var5 = 19;
                var1 = var7[var5];
                var3 = undefined;
                var2 = var6.bind(var3)(var1);
                var1 = {};
                var8 = _closure2_slot0;
                var8 = var8.actionButtonIcon;
                var1['style'] = var8;
                var5 = var7[var5];
                var5 = var6.bind(var3)(var5);
                var5 = var5.Sizes;
                var5 = var5.SMALL;
                var1['size'] = var5;
                var5 = true;
                var1['disableColor'] = var5;
                var5 = 20;
                var5 = var7[var5];
                var5 = var6.bind(var3)(var5);
                var1['source'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var6['renderIcon'] = var14;
            var6['onPress'] = var13;
            var10 = !var10;
            if(var10) { _fun0001_ip = 367; continue _fun0001 }
 364:
            var10 = var12;
 367:
            if(var10) { _fun0001_ip = 373; continue _fun0001 }
 370:
            var10 = var11;
 373:
            var6['disabled'] = var10;
            var6['text'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot21 = var1;
    var1 = function TabContent(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var6 = var1.selectedTab;
            var1 = _closure1_slot17;
            var4 = undefined;
            var5 = var1.bind(var4)();
            var1 = _closure1_slot11;
            var1 = var1.DETAILS;
            if(!(var1 !== var6)) { _fun0002_ip = 199; continue _fun0002 }
 39:
            var1 = _closure1_slot11;
            var1 = var1.DESIGN;
            if(!(var1 !== var6)) { _fun0002_ip = 159; continue _fun0002 }
 53:
            var1 = _closure1_slot11;
            var1 = var1.BENEFITS;
            if(!(var1 !== var6)) { _fun0002_ip = 119; continue _fun0002 }
 67:
            var1 = global;
            var3 = var1.Error;
            var1 = var1.HermesInternal;
            var2 = var1.concat;
            var1 = 'Unsupported scene: ';
            var14 = var2.bind(var1)(var6);
            var2 = var3.prototype;
            var2 = Object.create(var2, {constructor: {value: var3}});
            var15 = var2;
            var1 = new var15[var3](var14, var13);
            var1 = var1 instanceof Object ? var1 : var2;
            throw var1;
 119:
            var3 = _closure1_slot14;
            var2 = _closure1_slot0;
            var6 = _closure1_slot3;
            var1 = 24;
            var1 = var6[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.GuildRoleSubscriptionTierBenefitsTab;
            var1 = {};
            var1 = var3.bind(var4)(var2, var1);
            return var1;
 159:
            var3 = _closure1_slot14;
            var2 = _closure1_slot0;
            var6 = _closure1_slot3;
            var1 = 23;
            var1 = var6[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.GuildRoleSubscriptionTierDesignTab;
            var1 = {};
            var1 = var3.bind(var4)(var2, var1);
            return var1;
 199:
            var3 = _closure1_slot14;
            var2 = _closure1_slot7;
            var1 = {};
            var5 = var5.tabContent;
            var1['style'] = var5;
            var7 = _closure1_slot16;
            var10 = _closure1_slot0;
            var12 = _closure1_slot3;
            var5 = 21;
            var5 = var12[var5];
            var5 = var10.bind(var4)(var5);
            var6 = var5.SafeAreaPaddingView;
            var5 = {};
            var8 = true;
            var5['bottom'] = var8;
            var11 = _closure1_slot14;
            var8 = 22;
            var8 = var12[var8];
            var8 = var10.bind(var4)(var8);
            var10 = var8.GuildRoleSubscriptionTierDetailsTab;
            var8 = {};
            var10 = var11.bind(var4)(var10, var8);
            var8 = new Array(2);
            var8[0] = var10;
            var11 = _closure1_slot14;
            var10 = _closure1_slot21;
            var9 = {};
            var9 = var11.bind(var4)(var10, var9);
            var8[1] = var9;
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot22 = var1;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var4);
    var15 = 0;
    var4 = var6[var15];
    var1 = undefined;
    var4 = var13.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var16 = 1;
    var4 = var6[var16];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = var6[var16];
    var4 = var5.bind(var1)(var4);
    var7 = var4.forwardRef;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var9 = var4.View;
    var _closure1_slot6 = var9;
    var4 = var4.ScrollView;
    var _closure1_slot7 = var4;
    var4 = 3;
    var9 = var6[var4];
    var9 = var13.bind(var1)(var9);
    var _closure1_slot8 = var9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.FetchState;
    var _closure1_slot9 = var4;
    var14 = 4;
    var4 = var6[var14];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.GuildRoleSubscriptionsTierScenes;
    var _closure1_slot11 = var4;
    var8 = 6;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var12 = var8.Fonts;
    var8 = var8.GuildSettingsSections;
    var _closure1_slot12 = var8;
    var8 = 7;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var8 = var8.ContentDismissActionType;
    var _closure1_slot13 = var8;
    var8 = 8;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var9 = var8.jsx;
    var _closure1_slot14 = var9;
    var9 = var8.Fragment;
    var _closure1_slot15 = var9;
    var8 = var8.jsxs;
    var _closure1_slot16 = var8;
    var8 = 9;
    var8 = var6[var8];
    var10 = var5.bind(var1)(var8);
    var9 = var10.createStyles;
    var8 = {};
    var11 = {};
    var11['flex'] = var16;
    var8['container'] = var11;
    var11 = {};
    var16 = 10;
    var16 = var6[var16];
    var19 = var13.bind(var1)(var16);
    var18 = var12.PRIMARY_SEMIBOLD;
    var12 = 11;
    var16 = var6[var12];
    var16 = var13.bind(var1)(var16);
    var16 = var16.colors;
    var17 = var16.TEXT_LINK;
    var16 = 16;
    var21 = var19.bind(var1)(var18, var17, var16);
    var22 = var11;
    var17 = copyDataProperties(var22, var21);
    var8['saveButtonLabel'] = var11;
    var11 = {};
    var17 = var6[var12];
    var17 = var13.bind(var1)(var17);
    var17 = var17.colors;
    var17 = var17.BACKGROUND_SECONDARY;
    var11['backgroundColor'] = var17;
    var11['padding'] = var16;
    var8['tabsContainer'] = var11;
    var11 = {};
    var11['paddingBottom'] = var15;
    var8['tabsContainerWithDraft'] = var11;
    var11 = {'alignSelf': 'stretch', 'margin': 16, 'marginTop': 0};
    var8['actionButton'] = var11;
    var11 = {};
    var11['marginEnd'] = var14;
    var8['actionButtonIcon'] = var11;
    var11 = {};
    var12 = var6[var12];
    var12 = var13.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_PRIMARY;
    var11['backgroundColor'] = var12;
    var8['tabContent'] = var11;
    var11 = {'marginTop': 24, 'paddingStart': 16};
    var8['actionHeader'] = var11;
    var11 = {'marginBottom': 16, 'marginLeft': 16};
    var8['actionDescription'] = var11;
    var8 = var9.bind(var10)(var8);
    var _closure1_slot17 = var8;
    var8 = var4.DETAILS;
    var10 = new Array(3);
    var10[0] = var8;
    var8 = var4.DESIGN;
    var10[1] = var8;
    var4 = var4.BENEFITS;
    var10[2] = var4;
    var _closure1_slot18 = var10;
    var9 = var10.reduce;
    var8 = function(arg1, arg2, arg3) {
        var1 = arg1;
        var3 = arg3;
        var2 = arg2;
        var1[var2] = var3;
        return var1;
    };
    var4 = {};
    var4 = var9.bind(var10)(var8, var4);
    var _closure1_slot19 = var4;
    var4 = function(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var4 = _closure1_slot0;
            var5 = _closure1_slot3;
            var1 = 13;
            var1 = var5[var1];
            var6 = undefined;
            var2 = var4.bind(var6)(var1);
            var1 = var2.useEditStateContext;
            var2 = var1.bind(var2)();
            var1 = var2.guildId;
            var _closure2_slot0 = var1;
            var1 = var2.groupListingId;
            var _closure2_slot1 = var1;
            var9 = var2.editStateId;
            var2 = 25;
            var3 = var5[var2];
            var7 = var4.bind(var6)(var3);
            var3 = var7.usePublishSubscriptionListing;
            var3 = var3.bind(var7)();
            var17 = var3.error;
            var7 = var3.submitting;
            var11 = var3.publishSubscriptionListing;
            var _closure2_slot2 = var11;
            var3 = var3.clearError;
            var _closure2_slot3 = var3;
            var2 = var5[var2];
            var3 = var4.bind(var6)(var2);
            var2 = var3.useSubscriptionListing;
            var3 = var2.bind(var3)(var9);
            var _closure2_slot4 = var3;
            var2 = 26;
            var2 = var5[var2];
            var4 = var4.bind(var6)(var2);
            var2 = var4.useRoleSubscriptionSettingsDisabled;
            var5 = var2.bind(var4)();
            var11 = _closure1_slot5;
            var9 = var11.useImperativeHandle;
            var4 = arg2;
            var2 = function() {
                var1 = {};
                var2 = _closure2_slot3;
                var1['dismissError'] = var2;
                return var1;
            };
            var2 = var9.bind(var11)(var4, var2);
            var2 = null;
            var4 = var2 == var1;
            var1 = null;
            if(var4) { _fun0003_ip = 541; continue _fun0003 }
 201:
            var4 = var2 == var3;
            var1 = null;
            if(var4) { _fun0003_ip = 541; continue _fun0003 }
 213:
            var3 = var3.published;
            var1 = null;
            if(var3) { _fun0003_ip = 541; continue _fun0003 }
 227:
            if(!(var2 == var17)) { _fun0003_ip = 400; continue _fun0003 }
 234:
            var4 = _closure1_slot14;
            var3 = _closure1_slot1;
            var14 = _closure1_slot3;
            var2 = 29;
            var2 = var14[var2];
            var3 = var3.bind(var6)(var2);
            var2 = {};
            var13 = _closure1_slot0;
            var9 = 30;
            var11 = var14[var9];
            var11 = var13.bind(var6)(var11);
            var15 = var11.intl;
            var12 = var15.string;
            var11 = var14[var9];
            var11 = var13.bind(var6)(var11);
            var11 = var11.t;
            var11 = var11.V5mSp6;
            var11 = var12.bind(var15)(var11);
            var2['message'] = var11;
            var11 = var14[var9];
            var11 = var13.bind(var6)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var9 = var14[var9];
            var9 = var13.bind(var6)(var9);
            var9 = var9.t;
            var9 = var9.Lj6R5u;
            var9 = var11.bind(var12)(var9);
            var2['ctaMessage'] = var9;
            var8 = function onClick() {
                var3 = _closure2_slot2;
                var2 = {};
                var4 = _closure2_slot0;
                var2['guildId'] = var4;
                var4 = _closure2_slot1;
                var2['groupListingId'] = var4;
                var1 = _closure2_slot4;
                var1 = var1.id;
                var2['listingId'] = var1;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var2['onClick'] = var8;
            var2['submitting'] = var7;
            var2['disabled'] = var5;
            var2 = var4.bind(var6)(var3, var2);
            _fun0003_ip = 538; continue _fun0003;
 400:
            var5 = _closure1_slot16;
            var4 = _closure1_slot15;
            var3 = {};
            var14 = _closure1_slot14;
            var9 = _closure1_slot1;
            var12 = _closure1_slot3;
            var8 = 27;
            var7 = var12[var8];
            var13 = var9.bind(var6)(var7);
            var7 = {};
            var11 = 16;
            var7['size'] = var11;
            var13 = var14.bind(var6)(var13, var7);
            var7 = new Array(3);
            var7[0] = var13;
            var15 = _closure1_slot14;
            var13 = 28;
            var13 = var12[var13];
            var14 = var9.bind(var6)(var13);
            var13 = {};
            var16 = var17.getAnyErrorMessage;
            var16 = var16.bind(var17)();
            var13['children'] = var16;
            var13 = var15.bind(var6)(var14, var13);
            var7[1] = var13;
            var10 = _closure1_slot14;
            var8 = var12[var8];
            var9 = var9.bind(var6)(var8);
            var8 = {};
            var8['size'] = var11;
            var8 = var10.bind(var6)(var9, var8);
            var7[2] = var8;
            var3['children'] = var7;
            var2 = var5.bind(var6)(var4, var3);
 538:
            var1 = var2;
 541:
            return var1;
        }
    };
    var4 = var7.bind(var1)(var4);
    var _closure1_slot20 = var4;
    var4 = 42;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionTierEdit.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GuildSettingsRoleSubscriptionTierEdit(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var1 = arg1;
            var9 = var1.guildId;
            var _closure2_slot0 = var9;
            var3 = var1.initialEditStateId;
            var6 = var1.groupListingId;
            var _closure2_slot1 = var6;
            var25 = var1.onBeforeDispatchNewListing;
            var _closure2_slot2 = var25;
            var5 = undefined;
            var _closure2_slot7 = var5;
            var _closure2_slot8 = var5;
            var _closure2_slot9 = var5;
            var _closure2_slot10 = var5;
            var _closure2_slot11 = var5;
            var _closure2_slot12 = var5;
            var _closure2_slot13 = var5;
            var _closure2_slot14 = var5;
            var _closure2_slot15 = var5;
            var1 = _closure1_slot17;
            var19 = var1.bind(var5)();
            var2 = _closure1_slot5;
            var1 = var2.useState;
            var1 = var1.bind(var2)(var3);
            var4 = _closure1_slot4;
            var23 = 2;
            var1 = var4.bind(var5)(var1, var23);
            var10 = 0;
            var8 = var1[var10];
            var _closure2_slot3 = var8;
            var12 = 1;
            var1 = var1[var12];
            var _closure2_slot4 = var1;
            var7 = _closure1_slot0;
            var1 = _closure1_slot3;
            var2 = 12;
            var2 = var1[var2];
            var3 = var7.bind(var5)(var2);
            var2 = var3.useNavigation;
            var3 = var2.bind(var3)();
            var _closure2_slot5 = var3;
            var2 = 25;
            var2 = var1[var2];
            var7 = var7.bind(var5)(var2);
            var2 = var7.useSubscriptionListing;
            var2 = var2.bind(var7)(var8);
            var11 = _closure1_slot2;
            var7 = 31;
            var1 = var1[var7];
            var11 = var11.bind(var5)(var1);
            var1 = var11.useName;
            var1 = var1.bind(var11)(var8);
            var1 = var4.bind(var5)(var1, var12);
            var15 = var1[var10];
            var _closure2_slot6 = var15;
            var1 = null;
            var11 = var1 == var2;
            var4 = undefined;
            if(var11) { _fun0004_ip = 252; continue _fun0004 }
 246:
            var4 = var2.published;
 252:
            var22 = var1 != var4;
            if(!var22) { _fun0004_ip = 262; continue _fun0004 }
 259:
            var22 = var4;
 262:
            var14 = _closure1_slot2;
            var18 = _closure1_slot3;
            var4 = var18[var7];
            var11 = var14.bind(var5)(var4);
            var4 = var11.useEditStateIds;
            var4 = var4.bind(var11)(var6, var9);
            var4 = var4.removeEditStateId;
            _closure2_slot7 = var4;
            var11 = _closure1_slot5;
            var16 = var11.useRef;
            var21 = var16.bind(var11)(var1);
            _closure2_slot8 = var21;
            var16 = var18[var7];
            var20 = var14.bind(var5)(var16);
            var16 = var20.useHasChanges;
            var20 = var16.bind(var20)(var8);
            _closure2_slot9 = var20;
            var7 = var18[var7];
            var14 = var14.bind(var5)(var7);
            var7 = var14.useCreateOrUpdateListingFromEditState;
            var7 = var7.bind(var14)();
            var14 = var7.loading;
            _closure2_slot10 = var14;
            var26 = var7.handleCreateOrUpdateFromEditState;
            _closure2_slot11 = var26;
            var7 = var7.error;
            _closure2_slot12 = var7;
            var24 = var11.useCallback;
            var16 = new Array(6);
            var16[0] = var9;
            var16[1] = var26;
            var16[2] = var8;
            var16[3] = var6;
            var16[4] = var25;
            var16[5] = var4;
            var4 = function() {
                var3 = _closure2_slot11;
                var2 = {};
                var4 = _closure2_slot0;
                var2['guildId'] = var4;
                var4 = _closure2_slot3;
                var2['editStateId'] = var4;
                var4 = _closure2_slot1;
                var2['groupListingId'] = var4;
                var1 = _closure2_slot2;
                var2['onBeforeDispatchNewListing'] = var1;
                var1 = function onAfterDispatchNewListing(arg1) {
                    var4 = _closure2_slot4;
                    var1 = arg1;
                    var3 = var1.id;
                    var1 = undefined;
                    var3 = var4.bind(var1)(var3);
                    var3 = _closure2_slot7;
                    var2 = _closure2_slot3;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var2['onAfterDispatchNewListing'] = var1;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var4 = var24.bind(var11)(var4, var16);
            _closure2_slot13 = var4;
            var24 = var11.useLayoutEffect;
            var16 = new Array(1);
            var16[0] = var7;
            var7 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var2 = _closure2_slot12;
                    var5 = null;
                    if(!(var5 != var2)) { _fun0005_ip = 122; continue _fun0005 }
 13:
                    var3 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var2 = 32;
                    var2 = var6[var2];
                    var8 = undefined;
                    var3 = var3.bind(var8)(var2);
                    var2 = var3.presentError;
                    var6 = _closure2_slot12;
                    var1 = var6.getAnyErrorMessage;
                    var1 = var1.bind(var6)();
                    if(!(var5 == var1)) { _fun0005_ip = 117; continue _fun0005 }
 62:
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot3;
                    var4 = 30;
                    var5 = var9[var4];
                    var5 = var7.bind(var8)(var5);
                    var6 = var5.intl;
                    var5 = var6.string;
                    var4 = var9[var4];
                    var4 = var7.bind(var8)(var4);
                    var4 = var4.t;
                    var4 = var4.R0RpRU;
                    var1 = var5.bind(var6)(var4);
 117:
                    var1 = var2.bind(var3)(var1);
 122:
                    var1 = undefined;
                    return var1;
                }
            };
            var7 = var24.bind(var11)(var7, var16);
            var24 = _closure1_slot10;
            var16 = var24.useRoleTierEditStore;
            var7 = function(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var2 = arg1;
                    var3 = var2.currentScene;
                    var1 = null;
                    if(!(var1 == var3)) { _fun0006_ip = 28; continue _fun0006 }
 15:
                    var1 = _closure1_slot11;
                    var3 = var1.DETAILS;
 28:
                    var1 = new Array(2);
                    var1[0] = var3;
                    var2 = var2.setScene;
                    var1[1] = var2;
                    return var1;
                }
            };
            var16 = var16.bind(var24)(var7);
            var7 = _closure1_slot4;
            var7 = var7.bind(var5)(var16, var23);
            var16 = var7[var10];
            var7 = var7[var12];
            _closure2_slot14 = var7;
            var12 = var11.useLayoutEffect;
            var7 = new Array(5);
            var7[0] = var3;
            var7[1] = var20;
            var7[2] = var15;
            var7[3] = var14;
            var7[4] = var4;
            var4 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var3 = _closure2_slot5;
                    var2 = var3.setOptions;
                    var1 = {};
                    var5 = _closure2_slot10;
                    if(var5) { _fun0007_ip = 33; continue _fun0007 }
 24:
                    var5 = function() {
                        var4 = _closure1_slot14;
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot3;
                        var1 = 34;
                        var1 = var9[var1];
                        var3 = undefined;
                        var1 = var8.bind(var3)(var1);
                        var2 = var1.HeaderActionButton;
                        var1 = {};
                        var5 = 30;
                        var6 = var9[var5];
                        var6 = var8.bind(var3)(var6);
                        var7 = var6.intl;
                        var6 = var7.string;
                        var5 = var9[var5];
                        var5 = var8.bind(var3)(var5);
                        var5 = var5.t;
                        var5 = var5.R3BPHx;
                        var5 = var6.bind(var7)(var5);
                        var1['text'] = var5;
                        var6 = _closure2_slot13;
                        var1['onPress'] = var6;
                        var5 = _closure2_slot9;
                        var5 = !var5;
                        var1['disabled'] = var5;
                        var1 = var4.bind(var3)(var2, var1);
                        return var1;
                    };
                    _fun0007_ip = 40; continue _fun0007;
 33:
                    var5 = function() {
                        var4 = _closure1_slot14;
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot3;
                        var1 = 33;
                        var1 = var3[var1];
                        var3 = undefined;
                        var1 = var2.bind(var3)(var1);
                        var2 = var1.HeaderSubmittingIndicator;
                        var1 = {};
                        var1 = var4.bind(var3)(var2, var1);
                        return var1;
                    };
 40:
                    var1['headerRight'] = var5;
                    var4 = function headerTitle() {
                        var4 = _closure1_slot14;
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot3;
                        var1 = 33;
                        var1 = var9[var1];
                        var3 = undefined;
                        var1 = var8.bind(var3)(var1);
                        var2 = var1.NavigatorHeader;
                        var1 = {};
                        var5 = _closure2_slot6;
                        var1['title'] = var5;
                        var5 = 30;
                        var6 = var9[var5];
                        var6 = var8.bind(var3)(var6);
                        var7 = var6.intl;
                        var6 = var7.string;
                        var5 = var9[var5];
                        var5 = var8.bind(var3)(var5);
                        var5 = var5.t;
                        var5 = var5.t94EHh;
                        var5 = var6.bind(var7)(var5);
                        var1['subtitle'] = var5;
                        var1 = var4.bind(var3)(var2, var1);
                        return var1;
                    };
                    var1['headerTitle'] = var4;
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                }
            };
            var4 = var12.bind(var11)(var4, var7);
            var7 = var11.useLayoutEffect;
            var4 = new Array(3);
            var4[0] = var3;
            var4[1] = var8;
            var4[2] = var9;
            var3 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var2 = _closure2_slot3;
                    var4 = null;
                    if(!(var4 == var2)) { _fun0008_ip = 139; continue _fun0008 }
 16:
                    var3 = _closure2_slot5;
                    var2 = var3.getState;
                    var2 = var2.bind(var3)();
                    var3 = var2.routes;
                    var5 = var3.length;
                    var2 = 1;
                    var2 = var5 - var2;
                    var5 = var3[var2];
                    var7 = _closure1_slot8;
                    var6 = var7.getSubscriptionGroupListingsForGuildFetchState;
                    var3 = _closure2_slot0;
                    var6 = var6.bind(var7)(var3);
                    var3 = _closure1_slot9;
                    var3 = var3.FETCHING;
                    var3 = var6 === var3;
                    var6 = var4 == var5;
                    var4 = undefined;
                    if(var6) { _fun0008_ip = 102; continue _fun0008 }
 97:
                    var4 = var5.name;
 102:
                    var2 = _closure1_slot12;
                    var2 = var2.ROLE_SUBSCRIPTIONS_TIER_EDIT;
                    var2 = var4 !== var2;
                    if(var2) { _fun0008_ip = 122; continue _fun0008 }
 119:
                    var2 = var3;
 122:
                    if(var2) { _fun0008_ip = 139; continue _fun0008 }
 125:
                    var2 = _closure2_slot5;
                    var1 = var2.pop;
                    var1 = var1.bind(var2)();
 139:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var7.bind(var11)(var3, var4);
            var15 = _closure1_slot0;
            var3 = 35;
            var3 = var18[var3];
            var7 = var15.bind(var5)(var3);
            var4 = var7.useSegmentedControlState;
            var3 = {};
            var3['pageWidth'] = var10;
            var10 = _closure1_slot19;
            var10 = var10[var16];
            var3['defaultIndex'] = var10;
            var10 = function onSetActiveIndex(arg1) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var2 = _closure1_slot18;
                    var1 = arg1;
                    var5 = var2[var1];
                    var1 = null;
                    if(!(var1 != var5)) { _fun0009_ip = 57; continue _fun0009 }
 20:
                    var4 = _closure2_slot14;
                    var3 = undefined;
                    var3 = var4.bind(var3)(var5);
                    var2 = _closure2_slot8;
                    var2 = var2.current;
                    if(!(var1 != var2)) { _fun0009_ip = 57; continue _fun0009 }
 47:
                    var1 = var2.dismissError;
                    var1 = var1.bind(var2)();
 57:
                    var1 = undefined;
                    return var1;
                }
            };
            var3['onSetActiveIndex'] = var10;
            var10 = 30;
            var11 = var18[var10];
            var11 = var15.bind(var5)(var11);
            var14 = var11.intl;
            var12 = var14.string;
            var11 = var18[var10];
            var11 = var15.bind(var5)(var11);
            var11 = var11.t;
            var11 = var11.f7rGur;
            var11 = var12.bind(var14)(var11);
            var12 = new Array(3);
            var12[0] = var11;
            var11 = var18[var10];
            var11 = var15.bind(var5)(var11);
            var20 = var11.intl;
            var14 = var20.string;
            var11 = var18[var10];
            var11 = var15.bind(var5)(var11);
            var11 = var11.t;
            var11 = var11.YCpDtb;
            var11 = var14.bind(var20)(var11);
            var12[1] = var11;
            var11 = var18[var10];
            var11 = var15.bind(var5)(var11);
            var14 = var11.intl;
            var11 = var14.string;
            var10 = var18[var10];
            var10 = var15.bind(var5)(var10);
            var10 = var10.t;
            var10 = var10.MpDNxM;
            var10 = var11.bind(var14)(var10);
            var12[2] = var10;
            var11 = var12.map;
            var10 = function(arg1) {
                var2 = arg1;
                var1 = {};
                var1['id'] = var2;
                var1['label'] = var2;
                var2 = null;
                var1['page'] = var2;
                return var1;
            };
            var10 = var11.bind(var12)(var10);
            var3['items'] = var10;
            var20 = var4.bind(var7)(var3);
            if(!(var1 != var8)) { _fun0004_ip = 1228; continue _fun0004 }
 835:
            if(!(var5 !== var2)) { _fun0004_ip = 845; continue _fun0004 }
 839:
            var18 = new Array(0);
            _fun0004_ip = 888; continue _fun0004;
 845:
            var3 = _closure1_slot0;
            var4 = _closure1_slot3;
            var2 = 36;
            var2 = var4[var2];
            var2 = var3.bind(var5)(var2);
            var2 = var2.DismissibleContent;
            var3 = var2.GUILD_ROLE_SUBSCRIPTION_TIER_TEMPLATES;
            var2 = new Array(1);
            var2[0] = var3;
            var18 = var2;
 888:
            var2 = function GuildRoleSubscriptionsTierTemplateSelectedActionSheetImporter() {
                var3 = _closure1_slot0;
                var1 = _closure1_slot3;
                var2 = 38;
                var2 = var1[var2];
                var4 = undefined;
                var3 = var3.bind(var4)(var2);
                var2 = 37;
                var2 = var1[var2];
                var1 = var1.paths;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            _closure2_slot15 = var2;
            var4 = _closure1_slot14;
            var7 = _closure1_slot0;
            var23 = _closure1_slot3;
            var2 = 13;
            var2 = var23[var2];
            var2 = var7.bind(var5)(var2);
            var3 = var2.EditStateContextProvider;
            var2 = {};
            var2['guildId'] = var9;
            var2['editStateId'] = var8;
            var2['groupListingId'] = var6;
            var8 = _closure1_slot14;
            var6 = 26;
            var6 = var23[var6];
            var6 = var7.bind(var5)(var6);
            var7 = var6.RoleSubscriptionSettingsDisabledContextProvider;
            var6 = {};
            var6['guildId'] = var9;
            var11 = _closure1_slot16;
            var10 = _closure1_slot6;
            var9 = {};
            var12 = var19.container;
            var9['style'] = var12;
            var15 = _closure1_slot14;
            var14 = _closure1_slot1;
            var12 = 39;
            var12 = var23[var12];
            var14 = var14.bind(var5)(var12);
            var12 = {};
            var12['contentTypes'] = var18;
            var17 = function children(arg1) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    var1 = arg1;
                    var4 = var1.visibleContent;
                    var1 = var1.markAsDismissed;
                    var _closure3_slot0 = var1;
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var1 = 36;
                    var1 = var5[var1];
                    var5 = undefined;
                    var1 = var3.bind(var5)(var1);
                    var1 = var1.DismissibleContent;
                    var3 = var1.GUILD_ROLE_SUBSCRIPTION_TIER_TEMPLATES;
                    var1 = null;
                    if(!(var4 === var3)) { _fun0010_ip = 137; continue _fun0010 }
 64:
                    var4 = _closure1_slot14;
                    var3 = _closure1_slot0;
                    var7 = _closure1_slot3;
                    var2 = 40;
                    var2 = var7[var2];
                    var2 = var3.bind(var5)(var2);
                    var3 = var2.DismissibleActionSheet;
                    var2 = {};
                    var6 = function markAsDismissed() {
                        var3 = _closure3_slot0;
                        var1 = _closure1_slot13;
                        var2 = var1.UNKNOWN;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var2['markAsDismissed'] = var6;
                    var6 = 'TierTemplateSelected';
                    var2['actionSheetKey'] = var6;
                    var6 = _closure2_slot15;
                    var2['importer'] = var6;
                    var1 = var4.bind(var5)(var3, var2);
 137:
                    return var1;
                }
            };
            var12['children'] = var17;
            var14 = var15.bind(var5)(var14, var12);
            var12 = new Array(3);
            var12[0] = var14;
            var15 = _closure1_slot16;
            var14 = {};
            var18 = var19.tabsContainer;
            var17 = new Array(2);
            var17[0] = var18;
            var18 = null;
            if(var22) { _fun0004_ip = 1075; continue _fun0004 }
 1069:
            var18 = var19.tabsContainerWithDraft;
 1075:
            var17[1] = var18;
            var14['style'] = var17;
            var19 = _closure1_slot14;
            var18 = _closure1_slot0;
            var22 = _closure1_slot3;
            var17 = 41;
            var17 = var22[var17];
            var17 = var18.bind(var5)(var17);
            var18 = var17.SegmentedControl;
            var17 = {};
            var17['state'] = var20;
            var18 = var19.bind(var5)(var18, var17);
            var17 = new Array(2);
            var17[0] = var18;
            var20 = _closure1_slot14;
            var19 = _closure1_slot20;
            var18 = {};
            var18['ref'] = var21;
            var18 = var20.bind(var5)(var19, var18);
            var17[1] = var18;
            var14['children'] = var17;
            var14 = var15.bind(var5)(var10, var14);
            var12[1] = var14;
            var15 = _closure1_slot14;
            var14 = _closure1_slot22;
            var13 = {};
            var13['selectedTab'] = var16;
            var13 = var15.bind(var5)(var14, var13);
            var12[2] = var13;
            var9['children'] = var12;
            var9 = var11.bind(var5)(var10, var9);
            var6['children'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
 1228:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();