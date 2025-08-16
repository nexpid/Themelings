// app/modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionGroupSetupModal.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var9 = metroImportDefault;
    var8 = metroImportAll;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var8;
    var _closure1_slot3 = var6;
    var1 = function _createGroupFromStore() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot5;
        var3 = function* (arg1, arg2, arg3, arg4) {
            var1 = function* anon_0_(arg1, arg2, arg3, arg4) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    var6 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 141; continue _fun0001 }
 13:
                    var3 = _closure1_slot7;
                    var2 = var3.getState;
                    var2 = var2.bind(var3)();
                    var7 = var2.groupCover;
                    var3 = var2.groupDescription;
                    var4 = null;
                    if(!(var4 != var7)) { _fun0001_ip = 79; continue _fun0001 }
 48:
                    var8 = {};
                    var8['description'] = var3;
                    var2 = arg2;
                    var5 = undefined;
                    var2 = var2.bind(var5)(var6, var8);
                    SaveGenerator(address=69);
 67:
                    return var2;
 69:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=7);
                    if(var8) { _fun0001_ip = 138; continue _fun0001 }
 75:
                    if(!(var4 == var2)) { _fun0001_ip = 84; continue _fun0001 }
 79:
                    var4 = undefined;
                    return var4;
 84:
                    var4 = {};
                    var7 = var7.uri;
                    var4['cover_image'] = var7;
                    var4['description'] = var3;
                    var3 = arg3;
                    var3 = var3.bind(var5)(var6, var4);
                    SaveGenerator(address=113);
 111:
                    return var3;
 113:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 135; continue _fun0001 }
 119:
                    var4 = arg4;
                    var4 = var4.bind(var5)(var2);
                    var4 = var2.id;
                    return var4;
 135:
                    return var3;
 138:
                    return var2;
 141:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot12 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot12 = var1;
    var2 = function GuildRoleSubscriptionGroupSetupModal(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var4 = arg1;
            var13 = var4.editStateId;
            var5 = null;
            var3 = Object.create(var5);
            var7 = 0;
            var3['editStateId'] = var7;
            var20 = {};
            var19 = var4;
            var18 = var3;
            var16 = copyDataProperties(var20, var19, var18);
            var _closure2_slot0 = var16;
            var4 = undefined;
            var _closure2_slot9 = var4;
            var _closure2_slot10 = var4;
            var8 = var16.guildId;
            var _closure2_slot1 = var8;
            var3 = _closure1_slot6;
            var2 = var3.useState;
            var3 = var2.bind(var3)();
            var2 = _closure1_slot4;
            var12 = 2;
            var2 = var2.bind(var4)(var3, var12);
            var3 = var2[var7];
            var _closure2_slot2 = var3;
            var6 = 1;
            var2 = var2[var6];
            var _closure2_slot3 = var2;
            var3 = _closure1_slot0;
            var9 = _closure1_slot3;
            var2 = 7;
            var10 = var9[var2];
            var14 = var3.bind(var4)(var10);
            var10 = var14.useCreateSubscriptionGroupListing;
            var10 = var10.bind(var14)();
            var10 = var10.createSubscriptionGroupListing;
            var _closure2_slot4 = var10;
            var2 = var9[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.useUpdateSubscriptionsSettings;
            var2 = var2.bind(var3)();
            var3 = var2.updateSubscriptionsSettings;
            var _closure2_slot5 = var3;
            var2 = var2.error;
            var10 = _closure1_slot6;
            var3 = var10.useState;
            var10 = var3.bind(var10)(var13);
            var3 = _closure1_slot4;
            var3 = var3.bind(var4)(var10, var12);
            var7 = var3[var7];
            var _closure2_slot6 = var7;
            var3 = var3[var6];
            var _closure2_slot7 = var3;
            var6 = _closure1_slot2;
            var3 = 8;
            var3 = var9[var3];
            var6 = var6.bind(var4)(var3);
            var3 = var6.useCreateOrUpdateListingFromEditState;
            var3 = var3.bind(var6)();
            var6 = var3.handleCreateOrUpdateFromEditState;
            var _closure2_slot8 = var6;
            var3 = var3.error;
            if(!(var5 != var2)) { _fun0002_ip = 268; continue _fun0002 }
 265:
            var3 = var2;
 268:
            var6 = var5 != var3;
            var2 = undefined;
            if(!var6) { _fun0002_ip = 280; continue _fun0002 }
 277:
            var2 = var3;
 280:
            _closure2_slot9 = var2;
            var3 = function() {
                var4 = _closure1_slot5;
                var3 = undefined;
                var2 = function* () {
                    var1 = function* anon_0_() {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0003_ip = 290; continue _fun0003 }
 12:
                            var2 = _closure2_slot2;
                            var10 = null;
                            var2 = var10 == var2;
                            var3 = undefined;
                            var7 = undefined;
                            if(var2) { _fun0003_ip = 41; continue _fun0003 }
 32:
                            var2 = _closure2_slot2;
                            var7 = var2.id;
 41:
                            if(!(var10 == var7)) { _fun0003_ip = 90; continue _fun0003 }
 45:
                            var17 = _closure2_slot1;
                            var16 = _closure2_slot4;
                            var15 = _closure2_slot5;
                            var14 = _closure2_slot3;
                            var2 = function createGroupFromStore() {
                                var1 = undefined;
                                var4 = _closure1_slot12;
                                var3 = var4.apply;
                                var1 = arguments;
                                var2 = var1;
                                var1 = this;
                                var1 = var3.bind(var4)(var1, var2);
                                return var1;
                            };
                            var18 = undefined;
                            var2 = var18[var2](var17, var16, var15, var14, var13);
                            SaveGenerator(address=78);
 76:
                            return var2;
 78:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                            var7 = var2;
                            if(!var5) { _fun0003_ip = 90; continue _fun0003 }
 87:
                            return var2;
 90:
                            if(!(var10 != var7)) { _fun0003_ip = 284; continue _fun0003 }
 97:
                            var2 = _closure2_slot9;
                            if(!(var10 != var2)) { _fun0003_ip = 212; continue _fun0003 }
 105:
                            var5 = _closure1_slot0;
                            var8 = _closure1_slot3;
                            var2 = 9;
                            var2 = var8[var2];
                            var8 = var5.bind(var3)(var2);
                            var5 = var8.presentError;
                            var11 = _closure2_slot9;
                            var2 = var11.getAnyErrorMessage;
                            var2 = var2.bind(var11)();
                            if(!(var10 == var2)) { _fun0003_ip = 207; continue _fun0003 }
 152:
                            var12 = _closure1_slot0;
                            var13 = _closure1_slot3;
                            var9 = 10;
                            var10 = var13[var9];
                            var10 = var12.bind(var3)(var10);
                            var11 = var10.intl;
                            var10 = var11.string;
                            var9 = var13[var9];
                            var9 = var12.bind(var3)(var9);
                            var9 = var9.t;
                            var9 = var9.ZUEGFh;
                            var2 = var10.bind(var11)(var9);
 207:
                            var2 = var5.bind(var8)(var2);
 212:
                            var5 = _closure2_slot8;
                            var2 = {};
                            var8 = _closure2_slot1;
                            var2['guildId'] = var8;
                            var8 = _closure2_slot6;
                            var2['editStateId'] = var8;
                            var2['groupListingId'] = var7;
                            var6 = function onBeforeDispatchNewListing(arg1) {
                                var3 = _closure2_slot7;
                                var1 = arg1;
                                var2 = var1.id;
                                var1 = undefined;
                                var1 = var3.bind(var1)(var2);
                                return var1;
                            };
                            var2['onBeforeDispatchNewListing'] = var6;
                            var2 = var5.bind(var3)(var2);
                            SaveGenerator(address=261);
 259:
                            return var2;
 261:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                            if(var5) { _fun0003_ip = 287; continue _fun0003 }
 267:
                            if(!var2) { _fun0003_ip = 284; continue _fun0003 }
 270:
                            var5 = _closure2_slot0;
                            var4 = var5.onClose;
                            var4 = var4.bind(var5)();
 284:
                            return var3;
 287:
                            return var2;
 290:
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
            var15 = var3.bind(var4)();
            var9 = _closure1_slot6;
            var6 = var9.useEffect;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var2 = _closure2_slot9;
                    var5 = null;
                    if(!(var5 != var2)) { _fun0004_ip = 122; continue _fun0004 }
 13:
                    var3 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var2 = 9;
                    var2 = var6[var2];
                    var8 = undefined;
                    var3 = var3.bind(var8)(var2);
                    var2 = var3.presentError;
                    var6 = _closure2_slot9;
                    var1 = var6.getAnyErrorMessage;
                    var1 = var1.bind(var6)();
                    if(!(var5 == var1)) { _fun0004_ip = 117; continue _fun0004 }
 62:
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot3;
                    var4 = 10;
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
            var2 = var6.bind(var9)(var2, var3);
            var9 = _closure1_slot6;
            var6 = var9.useMemo;
            var3 = function() {
                var1 = _closure1_slot8;
                var2 = var1.GATING;
                var1 = new Array(7);
                var1[0] = var2;
                var2 = _closure1_slot8;
                var2 = var2.GROUP;
                var1[1] = var2;
                var2 = _closure1_slot8;
                var2 = var2.DETAILS;
                var1[2] = var2;
                var2 = _closure1_slot8;
                var2 = var2.CHANNEL_BENEFITS;
                var1[3] = var2;
                var2 = _closure1_slot8;
                var2 = var2.INTANGIBLE_BENEFITS;
                var1[4] = var2;
                var2 = _closure1_slot8;
                var2 = var2.DESIGN;
                var1[5] = var2;
                var2 = {};
                var3 = _closure1_slot8;
                var3 = var3.CONFIRMATION;
                var2['scene'] = var3;
                var3 = {};
                var4 = true;
                var3['isForGroupSetupModal'] = var4;
                var2['extraProps'] = var3;
                var1[6] = var2;
                return var1;
            };
            var2 = new Array(0);
            var14 = var6.bind(var9)(var3, var2);
            _closure2_slot10 = var14;
            var9 = _closure1_slot6;
            var6 = var9.useMemo;
            var3 = function() {
                var1 = {};
                var3 = _closure1_slot8;
                var8 = var3.GATING;
                var3 = {};
                var6 = _closure1_slot0;
                var7 = _closure1_slot3;
                var4 = 11;
                var9 = var7[var4];
                var5 = undefined;
                var9 = var6.bind(var5)(var9);
                var9 = var9.ImpressionNames;
                var9 = var9.ROLE_SUBSCRIPTION_INITIAL_SETUP_MODAL_LANDING;
                var3['impressionName'] = var9;
                var1[var8] = var3;
                var2 = _closure1_slot8;
                var3 = var2.DETAILS;
                var2 = {};
                var4 = var7[var4];
                var4 = var6.bind(var5)(var4);
                var4 = var4.ImpressionNames;
                var4 = var4.ROLE_SUBSCRIPTION_INITIAL_SETUP_MODAL_TIER_STEP;
                var2['impressionName'] = var4;
                var1[var3] = var2;
                return var1;
            };
            var2 = new Array(0);
            var12 = var6.bind(var9)(var3, var2);
            var6 = _closure1_slot6;
            var3 = var6.useCallback;
            var2 = new Array(1);
            var2[0] = var14;
            var1 = function(arg1) {
                var2 = arg1;
                var _closure3_slot0 = var2;
                var3 = _closure2_slot10;
                var2 = var3.findIndex;
                var1 = function(arg1) {
                    var2 = _closure3_slot0;
                    var1 = arg1;
                    var1 = var1 === var2;
                    return var1;
                };
                var7 = var2.bind(var3)(var1);
                var4 = _closure1_slot1;
                var3 = _closure1_slot3;
                var1 = 12;
                var3 = var3[var1];
                var1 = undefined;
                var5 = var4.bind(var1)(var3);
                var4 = var5.trackWithMetadata;
                var2 = _closure1_slot10;
                var3 = var2.GUILD_ROLE_SUBSCRIPTION_SETUP_MODAL_CLOSED;
                var2 = {};
                var6 = 1;
                var6 = var7 + var6;
                var2['setup_modal_step'] = var6;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var13 = var3.bind(var6)(var1, var2);
            var3 = _closure1_slot11;
            var6 = _closure1_slot0;
            var17 = _closure1_slot3;
            var1 = 13;
            var1 = var17[var1];
            var1 = var6.bind(var4)(var1);
            var2 = var1.EditStateContextProvider;
            var1 = {};
            var1['guildId'] = var8;
            var1['editStateId'] = var7;
            var1['groupListingId'] = var5;
            var7 = _closure1_slot11;
            var5 = 14;
            var5 = var17[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.RoleSubscriptionSettingsDisabledContextProvider;
            var5 = {};
            var5['guildId'] = var8;
            var10 = _closure1_slot11;
            var9 = _closure1_slot1;
            var8 = 15;
            var8 = var17[var8];
            var9 = var9.bind(var4)(var8);
            var8 = {};
            var20 = var8;
            var19 = var16;
            var16 = copyDataProperties(var20, var19);
            var16 = _closure1_slot9;
            var11 = 'modalKey';
            var8[var11] = var16;
            var11 = 'onDone';
            var8[var11] = var15;
            var11 = 'steps';
            var8[var11] = var14;
            var11 = 'onClose';
            var8[var11] = var13;
            var11 = 'stepScreenPropsMap';
            var8[var11] = var12;
            var8 = var10.bind(var4)(var9, var8);
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var1 = global;
    var11 = var1.Object;
    var10 = var11.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var9.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var9.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.useRoleTierEditStore;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.GuildRoleSubscriptionsTierScenes;
    var _closure1_slot8 = var8;
    var4 = var4.GUILD_ROLE_SUBSCRIPTION_GROUP_SETUP_KEY;
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot11 = var4;
    var4 = {};
    var7 = false;
    var4['closable'] = var7;
    var2['modalConfig'] = var4;
    var4 = 16;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionGroupSetupModal.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();