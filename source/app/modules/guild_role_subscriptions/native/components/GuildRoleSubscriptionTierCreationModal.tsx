// app/modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionTierCreationModal.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var7 = metroImportAll;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var _closure1_slot3 = var6;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.GuildRoleSubscriptionsTierScenes;
    var _closure1_slot8 = var7;
    var4 = var4.GUILD_ROLE_SUBSCRIPTION_TIER_CREATION_KEY;
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot10 = var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionTierCreationModal.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GuildRoleSubscriptionTierCreationModal(arg1) {
        var2 = arg1;
        var12 = var2.guildId;
        var _closure2_slot0 = var12;
        var5 = var2.groupListingId;
        var _closure2_slot1 = var5;
        var3 = var2.editStateId;
        var4 = var2.onClose;
        var _closure2_slot2 = var4;
        var2 = var2.onAfterTierCreation;
        var _closure2_slot3 = var2;
        var6 = _closure1_slot6;
        var2 = var6.useState;
        var7 = var2.bind(var6)(var3);
        var3 = _closure1_slot5;
        var4 = undefined;
        var2 = 2;
        var3 = var3.bind(var4)(var7, var2);
        var2 = 0;
        var7 = var3[var2];
        var _closure2_slot4 = var7;
        var2 = 1;
        var2 = var3[var2];
        var _closure2_slot5 = var2;
        var3 = _closure1_slot2;
        var13 = _closure1_slot3;
        var2 = 6;
        var2 = var13[var2];
        var3 = var3.bind(var4)(var2);
        var2 = var3.useCreateOrUpdateListingFromEditState;
        var2 = var2.bind(var3)();
        var3 = var2.handleCreateOrUpdateFromEditState;
        var _closure2_slot6 = var3;
        var2 = var2.error;
        var _closure2_slot7 = var2;
        var3 = function() {
            var4 = _closure1_slot4;
            var3 = undefined;
            var2 = function* () {
                var1 = function* anon_0_() {
                    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                        var5 = _closure2_slot6;
                        var2 = {};
                        var3 = _closure2_slot0;
                        var2['guildId'] = var3;
                        var3 = _closure2_slot4;
                        var2['editStateId'] = var3;
                        var3 = _closure2_slot1;
                        var2['groupListingId'] = var3;
                        var3 = function onBeforeDispatchNewListing(arg1) {
                            var3 = _closure2_slot5;
                            var1 = arg1;
                            var2 = var1.id;
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
                            return var1;
                        };
                        var2['onBeforeDispatchNewListing'] = var3;
                        var3 = undefined;
                        var2 = var5.bind(var3)(var2);
                        SaveGenerator(address=67);
case 4:
                        return var2;
case 5:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                        if(var5) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                        if(!var2) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                        var6 = _closure1_slot7;
                        var5 = var6.resetImperatively;
                        var5 = var5.bind(var6)();
                        var5 = _closure2_slot2;
                        var5 = var5.bind(var3)();
                        var4 = _closure2_slot3;
                        var4 = var4.bind(var3)();
case 8:
                        return var3;
case 6:
                        return var2;
case 2:
                        return var1;
                    }
                };
                return var1;
            };
            var2 = var4.bind(var3)(var2);
            var _closure3_slot0 = var2;
            var1 = function() {
                var1 = undefined;
                var4 = _closure3_slot0;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            return var1;
        };
        var10 = var3.bind(var4)();
        var8 = var6.useLayoutEffect;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var2 = _closure2_slot7;
                var5 = null;
                if(!(var5 != var2)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                var3 = _closure1_slot0;
                var6 = _closure1_slot3;
                var2 = 7;
                var2 = var6[var2];
                var8 = undefined;
                var3 = var3.bind(var8)(var2);
                var2 = var3.presentError;
                var6 = _closure2_slot7;
                var1 = var6.getAnyErrorMessage;
                var1 = var1.bind(var6)();
                if(!(var5 == var1)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                var7 = _closure1_slot0;
                var9 = _closure1_slot3;
                var4 = 8;
                var5 = var9[var4];
                var5 = var7.bind(var8)(var5);
                var6 = var5.intl;
                var5 = var6.string;
                var4 = var9[var4];
                var4 = var7.bind(var8)(var4);
                var4 = var4.t;
                var4 = var4.R0RpRU;
                var1 = var5.bind(var6)(var4);
case 12:
                var1 = var2.bind(var3)(var1);
case 10:
                var1 = undefined;
                return var1;
            }
        };
        var2 = var8.bind(var6)(var2, var3);
        var3 = var6.useMemo;
        var2 = function() {
            var2 = _closure1_slot8;
            var3 = var2.DETAILS;
            var1 = new Array(5);
            var1[0] = var3;
            var3 = var2.CHANNEL_BENEFITS;
            var1[1] = var3;
            var3 = var2.INTANGIBLE_BENEFITS;
            var1[2] = var3;
            var3 = var2.DESIGN;
            var1[3] = var3;
            var2 = var2.CONFIRMATION;
            var1[4] = var2;
            return var1;
        };
        var1 = new Array(0);
        var9 = var3.bind(var6)(var2, var1);
        var3 = _closure1_slot10;
        var6 = _closure1_slot0;
        var1 = 9;
        var1 = var13[var1];
        var1 = var6.bind(var4)(var1);
        var2 = var1.EditStateContextProvider;
        var1 = {};
        var1['guildId'] = var12;
        var1['editStateId'] = var7;
        var1['groupListingId'] = var5;
        var5 = 10;
        var5 = var13[var5];
        var5 = var6.bind(var4)(var5);
        var6 = var5.RoleSubscriptionSettingsDisabledContextProvider;
        var5 = {};
        var5['guildId'] = var12;
        var8 = _closure1_slot1;
        var7 = 11;
        var7 = var13[var7];
        var8 = var8.bind(var4)(var7);
        var7 = {};
        var7['guildId'] = var12;
        var11 = _closure1_slot9;
        var7['modalKey'] = var11;
        var7['onDone'] = var10;
        var7['steps'] = var9;
        var7 = var3.bind(var4)(var8, var7);
        var5['children'] = var7;
        var5 = var3.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();