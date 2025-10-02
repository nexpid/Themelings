// app/modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionsEnableMonetization.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var8 = metroImportAll;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var8;
    var _closure1_slot3 = var6;
    var1 = function CreateTeamView(arg1) {
        var1 = arg1;
        var7 = var1.handleCreateTeamClick;
        var13 = var1.isGuildOwner;
        var1 = _closure1_slot20;
        var4 = undefined;
        var11 = var1.bind(var4)();
        var3 = _closure1_slot17;
        var2 = _closure1_slot7;
        var1 = {};
        var10 = _closure1_slot1;
        var12 = _closure1_slot3;
        var9 = 13;
        var5 = var12[var9];
        var6 = var10.bind(var4)(var5);
        var5 = {};
        var13 = !var13;
        var5['disabled'] = var13;
        var11 = var11.button;
        var5['style'] = var11;
        var9 = var12[var9];
        var9 = var10.bind(var4)(var9);
        var9 = var9.Colors;
        var9 = var9.BRAND;
        var5['color'] = var9;
        var11 = _closure1_slot0;
        var8 = 14;
        var9 = var12[var8];
        var9 = var11.bind(var4)(var9);
        var10 = var9.intl;
        var9 = var10.string;
        var8 = var12[var8];
        var8 = var11.bind(var4)(var8);
        var8 = var8.t;
        var8 = var8.5k6FfX;
        var8 = var9.bind(var10)(var8);
        var5['text'] = var8;
        var5['onPress'] = var7;
        var5 = var3.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot21 = var1;
    var1 = function SelectTeamView(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var2 = var1.guild;
            var _closure2_slot0 = var2;
            var8 = var1.teams;
            var _closure2_slot1 = var8;
            var18 = var1.isGuildOwner;
            var1 = _closure1_slot20;
            var4 = undefined;
            var12 = var1.bind(var4)();
            var2 = _closure1_slot0;
            var14 = _closure1_slot3;
            var1 = 15;
            var1 = var14[var1];
            var3 = var2.bind(var4)(var1);
            var1 = var3.useNavigation;
            var1 = var1.bind(var3)();
            var _closure2_slot2 = var1;
            var3 = _closure1_slot6;
            var1 = var3.useState;
            var5 = var1.bind(var3)();
            var3 = _closure1_slot5;
            var1 = 2;
            var3 = var3.bind(var4)(var5, var1);
            var9 = 0;
            var20 = var3[var9];
            var _closure2_slot3 = var20;
            var1 = 1;
            var1 = var3[var1];
            var _closure2_slot4 = var1;
            var6 = _closure1_slot1;
            var1 = 16;
            var1 = var14[var1];
            var1 = var6.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var3 = var1.enableGuildMonetizationForTeam;
            var _closure2_slot5 = var3;
            var15 = var1.submitting;
            var1 = 17;
            var1 = var14[var1];
            var3 = var2.bind(var4)(var1);
            var1 = var3.useFetchSubscriptionsSettings;
            var1 = var1.bind(var3)();
            var1 = var1.fetchSubscriptionsSettings;
            var _closure2_slot6 = var1;
            var1 = 18;
            var1 = var14[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.useRoleSubscriptionSettingsDisabled;
            var19 = var1.bind(var2)();
            var1 = function() {
                var4 = _closure1_slot4;
                var3 = undefined;
                var2 = function* () {
                    var1 = function* anon_0_() {
                        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                            var3 = _closure1_slot1;
                            var4 = _closure1_slot3;
                            var2 = 19;
                            var2 = var4[var2];
                            var4 = undefined;
                            var8 = var3.bind(var4)(var2);
                            var2 = _closure2_slot3;
                            var3 = null;
                            var7 = var3 != var2;
                            var3 = 'handleEnableMonetization must only be called if the selectedTeam != null ';
                            var3 = var8.bind(var4)(var7, var3);
                            var8 = _closure2_slot5;
                            var7 = _closure2_slot0;
                            var3 = var2.id;
                            var2 = _closure1_slot15;
                            var2 = var2.GUILD_ROLE_SUBSCRIPTIONS;
                            var2 = var8.bind(var4)(var7, var3, var2);
                            SaveGenerator(address=94);
case 4:
                            return var2;
case 5:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                            if(var3) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                            if(!var2) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                            var7 = _closure2_slot6;
                            var3 = _closure2_slot0;
                            var3 = var3.id;
                            var3 = var7.bind(var4)(var3);
                            SaveGenerator(address=125);
case 10:
                            return var3;
case 11:
                            ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                            if(var7) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                            var7 = _closure2_slot2;
                            var6 = var7.replace;
                            var5 = _closure1_slot12;
                            var5 = var5.ROLE_SUBSCRIPTIONS_TIERS;
                            var5 = var6.bind(var7)(var5);
case 8:
                            return var4;
case 12:
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
            var11 = var1.bind(var4)();
            var3 = _closure1_slot19;
            var2 = _closure1_slot18;
            var1 = {};
            var7 = _closure1_slot17;
            var5 = 20;
            var5 = var14[var5];
            var6 = var6.bind(var4)(var5);
            var5 = {};
            var10 = function onPress() {
                var4 = _closure1_slot1;
                var11 = _closure1_slot3;
                var1 = 21;
                var3 = var11[var1];
                var1 = undefined;
                var6 = var4.bind(var1)(var3);
                var5 = var6.openLazy;
                var10 = _closure1_slot0;
                var2 = 23;
                var2 = var11[var2];
                var4 = var10.bind(var1)(var2);
                var2 = 22;
                var3 = var11[var2];
                var2 = var11.paths;
                var4 = var4.bind(var1)(var3, var2);
                var3 = {};
                var2 = 14;
                var8 = var11[var2];
                var8 = var10.bind(var1)(var8);
                var9 = var8.intl;
                var8 = var9.string;
                var2 = var11[var2];
                var2 = var10.bind(var1)(var2);
                var2 = var2.t;
                var2 = var2.QXf93N;
                var2 = var8.bind(var9)(var2);
                var3['title'] = var2;
                var10 = _closure2_slot1;
                var9 = var10.map;
                var8 = function(arg1) {
                    var2 = arg1;
                    var1 = {};
                    var3 = var2.name;
                    var1['label'] = var3;
                    var1['value'] = var2;
                    return var1;
                };
                var8 = var9.bind(var10)(var8);
                var3['items'] = var8;
                var7 = function onItemSelect(arg1) {
                    var3 = _closure2_slot4;
                    var1 = undefined;
                    var2 = arg1;
                    var2 = var3.bind(var1)(var2);
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    var2 = 21;
                    var2 = var4[var2];
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.hideActionSheet;
                    var2 = var2.bind(var3)();
                    return var1;
                };
                var3['onItemSelect'] = var7;
                var2 = _closure2_slot3;
                var3['selectedItem'] = var2;
                var2 = 'GuildRoleSubscriptionTeamSelect';
                var2 = var5.bind(var6)(var4, var2, var3);
                return var1;
            };
            var5['onPress'] = var10;
            var8 = var8.length;
            var8 = var9 === var8;
            if(var8) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var8 = var19;
case 14:
            if(var8) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var8 = !var18;
case 16:
            var5['disabled'] = var8;
            var14 = _closure1_slot0;
            var8 = _closure1_slot3;
            var16 = 14;
            var9 = var8[var16];
            var9 = var14.bind(var4)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var8 = var8[var16];
            var8 = var14.bind(var4)(var8);
            var8 = var8.t;
            var8 = var8.QXf93N;
            var8 = var9.bind(var10)(var8);
            var5['placeholder'] = var8;
            var17 = null;
            var9 = var17 == var20;
            var8 = undefined;
            if(var9) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var8 = var20.name;
case 18:
            var5['label'] = var8;
            var6 = var7.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot17;
            var7 = _closure1_slot7;
            var6 = {};
            var10 = _closure1_slot1;
            var9 = _closure1_slot3;
            var14 = 13;
            var9 = var9[var14];
            var10 = var10.bind(var4)(var9);
            var9 = {};
            var17 = var17 == var20;
            if(var17) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var17 = var19;
case 20:
            if(var17) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var17 = !var18;
case 22:
            var9['disabled'] = var17;
            var9['loading'] = var15;
            var12 = var12.button;
            var9['style'] = var12;
            var15 = _closure1_slot1;
            var12 = _closure1_slot3;
            var14 = var12[var14];
            var14 = var15.bind(var4)(var14);
            var14 = var14.Colors;
            var14 = var14.BRAND;
            var9['color'] = var14;
            var15 = _closure1_slot0;
            var13 = var12[var16];
            var13 = var15.bind(var4)(var13);
            var14 = var13.intl;
            var13 = var14.string;
            var12 = var12[var16];
            var12 = var15.bind(var4)(var12);
            var12 = var12.t;
            var12 = var12.9HU3ZW;
            var12 = var13.bind(var14)(var12);
            var9['text'] = var12;
            var9['onPress'] = var11;
            var9 = var8.bind(var4)(var10, var9);
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot22 = var1;
    var1 = function EnableMonetizationSection(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var13 = var1.guild;
            var _closure2_slot0 = var13;
            var5 = undefined;
            var _closure2_slot2 = var5;
            var _closure2_slot3 = var5;
            var1 = _closure1_slot20;
            var17 = var1.bind(var5)();
            var4 = _closure1_slot1;
            var8 = _closure1_slot3;
            var1 = 24;
            var1 = var8[var1];
            var1 = var4.bind(var5)(var1);
            var15 = var1.bind(var5)();
            var6 = _closure1_slot0;
            var1 = 25;
            var7 = var8[var1];
            var11 = var6.bind(var5)(var7);
            var10 = var11.useStateFromStores;
            var7 = _closure1_slot11;
            var9 = new Array(1);
            var9[0] = var7;
            var7 = function() {
                var2 = _closure1_slot11;
                var1 = var2.getState;
                var1 = var1.bind(var2)();
                return var1;
            };
            var9 = var10.bind(var11)(var9, var7);
            var7 = _closure1_slot13;
            var7 = var7.ACTIVE;
            var7 = var9 === var7;
            var1 = var8[var1];
            var11 = var6.bind(var5)(var1);
            var10 = var11.useStateFromStores;
            var1 = _closure1_slot10;
            var9 = new Array(1);
            var9[0] = var1;
            var1 = function() {
                var2 = _closure1_slot10;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var9 = var10.bind(var11)(var9, var1);
            var1 = _closure1_slot8;
            var11 = var1.bind(var5)(var13, var9);
            var _closure2_slot1 = var11;
            var1 = 26;
            var1 = var8[var1];
            var6 = var6.bind(var5)(var1);
            var1 = var6.useIsFocused;
            var6 = var1.bind(var6)();
            var1 = 27;
            var1 = var8[var1];
            var4 = var4.bind(var5)(var1);
            var1 = {};
            if(!var6) { _fun0003_ip = 24; continue _fun0003 }
case 25:
            var6 = var7;
case 24:
            var1['refreshOnDepChange'] = var6;
            var4 = var4.bind(var5)(var1);
            var1 = var4.loading;
            var7 = var4.teams;
            var6 = var7.filter;
            var4 = function(arg1) {
                var1 = arg1;
                var2 = var1.payout_account_status;
                var1 = _closure1_slot16;
                var1 = var1.BLOCKED;
                var1 = var2 !== var1;
                return var1;
            };
            var12 = var6.bind(var7)(var4);
            var6 = var12.length;
            var4 = 0;
            var7 = var6 > var4;
            _closure2_slot2 = var7;
            var9 = _closure1_slot6;
            var8 = var9.useCallback;
            var6 = _closure1_slot4;
            var4 = function* () {
                var1 = function* anon_0_() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0004_ip = 26; continue _fun0004 }
case 3:
                        var2 = _closure2_slot1;
                        if(!var2) { _fun0004_ip = 27; continue _fun0004 }
case 28:
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot3;
                        var3 = 28;
                        var3 = var5[var3];
                        var8 = undefined;
                        var6 = var4.bind(var8)(var3);
                        var5 = var6.track;
                        var3 = _closure1_slot14;
                        var4 = var3.GUILD_ROLE_SUBSCRIPTION_TEAM_SETUP_CLICKED;
                        var3 = {};
                        var9 = true;
                        var3['is_onboarding_v2'] = var9;
                        var9 = _closure2_slot2;
                        var3['has_eligible_team'] = var9;
                        var9 = _closure2_slot0;
                        var9 = var9.id;
                        var3['guild_id'] = var9;
                        var7 = _closure2_slot1;
                        var3['is_owner'] = var7;
                        var3 = var5.bind(var6)(var4, var3);
case 29: // try_start_0
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot3;
                        var3 = 29;
                        var3 = var5[var3];
                        var4 = var4.bind(var8)(var3);
                        var3 = var4.performRoleSubscriptionTeamCreationRedirect;
                        var3 = var3.bind(var4)();
                        SaveGenerator(address=147);
case 30:
                        return var3;
case 31:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                        if(var4) { _fun0004_ip = 8; continue _fun0004 }
case 32: // try_end0
                        _fun0004_ip = 27; continue _fun0004;
case 8:
                        return var3;
case 12: // catch_target0
                        CatchBlockStart(arg_register=2);
                        var4 = _closure1_slot2;
                        var9 = _closure1_slot3;
                        var3 = 30;
                        var3 = var9[var3];
                        var4 = var4.bind(var8)(var3);
                        var3 = var4.presentFailedToast;
                        var7 = _closure1_slot0;
                        var2 = 14;
                        var5 = var9[var2];
                        var5 = var7.bind(var8)(var5);
                        var6 = var5.intl;
                        var5 = var6.string;
                        var2 = var9[var2];
                        var2 = var7.bind(var8)(var2);
                        var2 = var2.t;
                        var2 = var2.R0RpRU;
                        var2 = var5.bind(var6)(var2);
                        var2 = var3.bind(var4)(var2);
case 27:
                        var2 = undefined;
                        return var2;
case 26:
                        return var1;
                    }
                };
                return var1;
            };
            var6 = var6.bind(var5)(var4);
            var4 = new Array(3);
            var4[0] = var13;
            var4[1] = var7;
            var4[2] = var11;
            var9 = var8.bind(var9)(var6, var4);
            _closure2_slot3 = var9;
            var8 = _closure1_slot6;
            var6 = var8.useCallback;
            var4 = new Array(2);
            var4[0] = var9;
            var4[1] = var11;
            var3 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var6 = arg1;
                    var2 = _closure2_slot1;
                    var1 = var6;
                    if(!var2) { _fun0005_ip = 33; continue _fun0005 }
case 34:
                    var5 = _closure1_slot17;
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var2 = 31;
                    var2 = var4[var2];
                    var4 = undefined;
                    var2 = var3.bind(var4)(var2);
                    var3 = var2.Text;
                    var2 = {'variant': 'text-sm/medium', 'color': 'text-link'};
                    var7 = _closure2_slot3;
                    var2['onPress'] = var7;
                    var2['children'] = var6;
                    var1 = var5.bind(var4)(var3, var2);
case 33:
                    return var1;
                }
            };
            var19 = var6.bind(var8)(var3, var4);
            if(var1) { _fun0003_ip = 35; continue _fun0003 }
case 36:
            var4 = _closure1_slot19;
            var3 = _closure1_slot7;
            var1 = {};
            var6 = var17.container;
            var1['style'] = var6;
            var8 = !var11;
            if(!var8) { _fun0003_ip = 37; continue _fun0003 }
case 38:
            var14 = _closure1_slot17;
            var10 = _closure1_slot1;
            var22 = _closure1_slot3;
            var6 = 33;
            var6 = var22[var6];
            var10 = var10.bind(var5)(var6);
            var6 = {};
            var16 = var17.nonOwnerNotice;
            var6['style'] = var16;
            var21 = _closure1_slot0;
            var16 = 14;
            var18 = var22[var16];
            var18 = var21.bind(var5)(var18);
            var20 = var18.intl;
            var18 = var20.string;
            var16 = var22[var16];
            var16 = var21.bind(var5)(var16);
            var16 = var16.t;
            var16 = var16.t56qWF;
            var16 = var18.bind(var20)(var16);
            var6['notice'] = var16;
            var8 = var14.bind(var5)(var10, var6);
case 37:
            var6 = new Array(4);
            var6[0] = var8;
            var14 = _closure1_slot17;
            var10 = _closure1_slot1;
            var20 = _closure1_slot3;
            var8 = 34;
            var8 = var20[var8];
            var10 = var10.bind(var5)(var8);
            var8 = {};
            var15 = var15.header;
            var8['style'] = var15;
            var16 = _closure1_slot0;
            var15 = 14;
            var18 = var20[var15];
            var18 = var16.bind(var5)(var18);
            var22 = var18.intl;
            var21 = var22.string;
            var18 = var20[var15];
            var18 = var16.bind(var5)(var18);
            var18 = var18.t;
            var18 = var18.sYLCY2;
            var18 = var21.bind(var22)(var18);
            var8['children'] = var18;
            var8 = var14.bind(var5)(var10, var8);
            var6[1] = var8;
            var14 = _closure1_slot17;
            var8 = 31;
            var8 = var20[var8];
            var8 = var16.bind(var5)(var8);
            var10 = var8.Text;
            var8 = {'style': null, 'variant': 'text-sm/medium', 'color': 'header-secondary'};
            var17 = var17.description;
            var8['style'] = var17;
            var17 = var20[var15];
            var17 = var16.bind(var5)(var17);
            var18 = var17.intl;
            var17 = var18.format;
            var15 = var20[var15];
            var15 = var16.bind(var5)(var15);
            var15 = var15.t;
            var16 = var15.5mfqpa;
            var15 = {};
            var15['onCreateTeamHook'] = var19;
            var15 = var17.bind(var18)(var16, var15);
            var8['children'] = var15;
            var8 = var14.bind(var5)(var10, var8);
            var6[2] = var8;
            var10 = _closure1_slot17;
            if(var7) { _fun0003_ip = 39; continue _fun0003 }
case 40:
            var8 = _closure1_slot21;
            var7 = {};
            var7['handleCreateTeamClick'] = var9;
            var7['isGuildOwner'] = var11;
            var7 = var10.bind(var5)(var8, var7);
            _fun0003_ip = 41; continue _fun0003;
case 39:
            var9 = _closure1_slot22;
            var8 = {};
            var8['guild'] = var13;
            var8['teams'] = var12;
            var8['isGuildOwner'] = var11;
            var7 = var10.bind(var5)(var9, var8);
case 41:
            var6[3] = var7;
            var1['children'] = var6;
            var1 = var4.bind(var5)(var3, var1);
            _fun0003_ip = 42; continue _fun0003;
case 35:
            var4 = _closure1_slot17;
            var3 = _closure1_slot1;
            var6 = _closure1_slot3;
            var2 = 32;
            var2 = var6[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var1 = var4.bind(var5)(var3, var2);
case 42:
            return var1;
        }
    };
    var _closure1_slot23 = var1;
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var10 = 1;
    var4 = var6[var10];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.isGuildOwner;
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.GuildSettingsSections;
    var _closure1_slot12 = var7;
    var7 = var4.AppStates;
    var _closure1_slot13 = var7;
    var4 = var4.AnalyticEvents;
    var _closure1_slot14 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ApplicationTypes;
    var _closure1_slot15 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.PayoutAccountStatuses;
    var _closure1_slot16 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot17 = var7;
    var7 = var4.Fragment;
    var _closure1_slot18 = var7;
    var4 = var4.jsxs;
    var _closure1_slot19 = var4;
    var4 = 12;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var9['flex'] = var10;
    var4['container'] = var9;
    var9 = {};
    var10 = 16;
    var9['margin'] = var10;
    var4['button'] = var9;
    var9 = {'paddingHorizontal': 16, 'marginBottom': 16};
    var4['description'] = var9;
    var9 = {};
    var9['marginTop'] = var10;
    var4['teamDropdown'] = var9;
    var9 = {'marginTop': 16, 'marginHorizontal': 16};
    var4['nonOwnerNotice'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot20 = var4;
    var4 = 37;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionsEnableMonetization.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GuildSubscriptionEnableMonetization(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var2 = arg1;
            var7 = var2.guildId;
            var _closure2_slot0 = var7;
            var4 = _closure1_slot0;
            var6 = _closure1_slot3;
            var3 = 25;
            var8 = var6[var3];
            var5 = undefined;
            var11 = var4.bind(var5)(var8);
            var10 = var11.useStateFromStores;
            var8 = _closure1_slot9;
            var9 = new Array(1);
            var9[0] = var8;
            var8 = function() {
                var3 = _closure1_slot9;
                var2 = var3.getGuild;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var10 = var10.bind(var11)(var9, var8);
            var3 = var6[var3];
            var6 = var4.bind(var5)(var3);
            var4 = var6.useStateFromStores;
            var8 = _closure1_slot10;
            var3 = new Array(1);
            var3[0] = var8;
            var1 = function() {
                var2 = _closure1_slot10;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var6 = var4.bind(var6)(var3, var1);
            var4 = null;
            var3 = var4 != var10;
            if(!var3) { _fun0006_ip = 43; continue _fun0006 }
case 44:
            var1 = _closure1_slot8;
            var3 = var1.bind(var5)(var10, var6);
case 43:
            var6 = _closure1_slot0;
            var8 = _closure1_slot3;
            var1 = 35;
            var1 = var8[var1];
            var6 = var6.bind(var5)(var1);
            var1 = var6.useGuildEligibleForRoleSubscriptionsMobileTeamSetup;
            var1 = var1.bind(var6)(var10);
            if(!(var4 != var10)) { _fun0006_ip = 45; continue _fun0006 }
case 46:
            if(!var1) { _fun0006_ip = 47; continue _fun0006 }
case 48:
            if(var3) { _fun0006_ip = 49; continue _fun0006 }
case 47:
            var4 = _closure1_slot17;
            var6 = _closure1_slot1;
            var8 = _closure1_slot3;
            var3 = 36;
            var3 = var8[var3];
            var3 = var6.bind(var5)(var3);
            var6 = {};
            var8 = true;
            var6['brightTitle'] = var8;
            var12 = _closure1_slot0;
            var13 = _closure1_slot3;
            var8 = 14;
            var9 = var13[var8];
            var9 = var12.bind(var5)(var9);
            var14 = var9.intl;
            var11 = var14.string;
            var9 = var13[var8];
            var9 = var12.bind(var5)(var9);
            var9 = var9.t;
            if(var1) { _fun0006_ip = 50; continue _fun0006 }
case 51:
            var1 = var9.KeeWp6;
            var1 = var11.bind(var14)(var1);
            var6['title'] = var1;
            var1 = var13[var8];
            var1 = var12.bind(var5)(var1);
            var16 = var1.intl;
            var15 = var16.string;
            var1 = var13[var8];
            var1 = var12.bind(var5)(var1);
            var1 = var1.t;
            var1 = var1.tJLG+P;
            var1 = var15.bind(var16)(var1);
            var6['description'] = var1;
            var1 = var6;
            _fun0006_ip = 52; continue _fun0006;
case 50:
            var9 = var9.AY/rYm;
            var9 = var11.bind(var14)(var9);
            var6['title'] = var9;
            var9 = var13[var8];
            var9 = var12.bind(var5)(var9);
            var11 = var9.intl;
            var9 = var11.string;
            var8 = var13[var8];
            var8 = var12.bind(var5)(var8);
            var8 = var8.t;
            var8 = var8.A65CaW;
            var8 = var9.bind(var11)(var8);
            var6['description'] = var8;
            var1 = var6;
case 52:
            var1 = var4.bind(var5)(var3, var1);
            _fun0006_ip = 53; continue _fun0006;
case 49:
            var6 = _closure1_slot17;
            var4 = _closure1_slot0;
            var8 = _closure1_slot3;
            var3 = 18;
            var3 = var8[var3];
            var3 = var4.bind(var5)(var3);
            var4 = var3.RoleSubscriptionSettingsDisabledContextProvider;
            var3 = {};
            var3['guildId'] = var7;
            var9 = _closure1_slot17;
            var8 = _closure1_slot23;
            var7 = {};
            var7['guild'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var3['children'] = var7;
            var1 = var6.bind(var5)(var4, var3);
case 53:
            _fun0006_ip = 54; continue _fun0006;
case 45:
            var4 = _closure1_slot17;
            var3 = _closure1_slot1;
            var6 = _closure1_slot3;
            var2 = 32;
            var2 = var6[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var1 = var4.bind(var5)(var3, var2);
case 54:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();