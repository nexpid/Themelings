// app/modules/guild_onboarding/GuildOnboardingActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var10 = function _updateOnboardingResponses(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var11 = arg1;
            var2 = arguments[1];
            var _closure2_slot0 = var11;
            var1 = undefined;
            if(!(var2 === var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = false;
case 2:
            var _closure2_slot1 = var1;
            var _closure2_slot2 = var1;
            var _closure2_slot3 = var1;
            var5 = _closure1_slot5;
            var4 = var5.isFullServerPreview;
            var4 = var4.bind(var5)(var11);
            if(var4) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var5 = _closure1_slot9;
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var4 = var5.getOnboardingPrompts;
            var6 = var4.bind(var5)(var11);
            _fun0001_ip = 8; continue _fun0001;
case 6:
            var4 = var5.getOnboardingPromptsForOnboarding;
            var6 = var4.bind(var5)(var11);
case 8:
            var5 = _closure1_slot9;
            var4 = var5.getOnboardingResponses;
            var4 = var4.bind(var5)(var11);
            _closure2_slot1 = var4;
            var5 = var6.map;
            var4 = function(arg1) {
                var1 = arg1;
                var3 = var1.options;
                var2 = var3.filter;
                var1 = function(arg1) {
                    var3 = _closure2_slot1;
                    var2 = var3.includes;
                    var1 = arg1;
                    var1 = var1.id;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var5 = var5.bind(var6)(var4);
            var4 = var5.flat;
            var12 = var4.bind(var5)();
            var9 = {};
            _closure2_slot2 = var9;
            var8 = {};
            _closure2_slot3 = var8;
            var5 = var6.forEach;
            var4 = function(arg1) {
                var1 = arg1;
                var4 = _closure2_slot2;
                var3 = var1.id;
                var2 = global;
                var5 = var2.Date;
                var2 = var5.now;
                var2 = var2.bind(var5)();
                var4[var3] = var2;
                var3 = var1.options;
                var2 = var3.forEach;
                var1 = function(arg1) {
                    var3 = _closure2_slot3;
                    var1 = arg1;
                    var2 = var1.id;
                    var1 = global;
                    var4 = var1.Date;
                    var1 = var4.now;
                    var1 = var1.bind(var4)();
                    var3[var2] = var1;
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var4 = var5.bind(var6)(var4);
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var4 = 10;
            var4 = var6[var4];
            var4 = var5.bind(var1)(var4);
            var6 = var4.HTTP;
            if(var2) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var4 = var6.put;
            var2 = {};
            var10 = _closure1_slot12;
            var5 = var10.GUILD_ONBOARDING_RESPONSES;
            var5 = var5.bind(var10)(var11);
            var2['url'] = var5;
            var5 = {};
            var13 = var12.map;
            var10 = function(arg1) {
                var1 = arg1;
                var1 = var1.id;
                return var1;
            };
            var10 = var13.bind(var12)(var10);
            var5['onboarding_responses'] = var10;
            var5['onboarding_prompts_seen'] = var9;
            var5['onboarding_responses_seen'] = var8;
            var2['body'] = var5;
            var5 = false;
            var2['rejectWithError'] = var5;
            var5 = var4.bind(var6)(var2);
            var4 = var5.then;
            var2 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var4 = arg1;
                    var2 = var4.body;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0002_ip = 11; continue _fun0002 }
case 12:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 11;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.dispatch;
                    var1 = {};
                    var5 = 'GUILD_ONBOARDING_UPDATE_RESPONSES_SUCCESS';
                    var1['type'] = var5;
                    var5 = _closure2_slot0;
                    var1['guildId'] = var5;
                    var5 = var4.body;
                    var5 = var5.onboarding_responses;
                    var1['options'] = var5;
                    var5 = var4.body;
                    var5 = var5.onboarding_prompts_seen;
                    var1['prompts_seen'] = var5;
                    var4 = var4.body;
                    var4 = var4.onboarding_responses_seen;
                    var1['options_seen'] = var4;
                    var1 = var2.bind(var3)(var1);
case 11:
                    var1 = undefined;
                    return var1;
                }
            };
            var5 = var4.bind(var5)(var2);
            var4 = var5.catch;
            var2 = function(arg1) {
                var5 = arg1;
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 12;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.captureException;
                var2 = global;
                var7 = var2.Error;
                var10 = _closure2_slot0;
                var9 = var5.statusCode;
                var2 = var2.HermesInternal;
                var8 = var2.concat;
                var6 = 'Failed to update onboarding responses for guild ';
                var2 = ': ';
                var13 = var8.bind(var6)(var10, var2, var9);
                var2 = {};
                var2['cause'] = var5;
                var5 = var7.prototype;
                var5 = Object.create(var5, {constructor: {value: var7}});
                var14 = var5;
                var12 = var2;
                var2 = new var14[var7](var13, var12, var11);
                var2 = var2 instanceof Object ? var2 : var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var2 = var4.bind(var5)(var2);
            _fun0001_ip = 13; continue _fun0001;
case 9:
            var5 = var6.post;
            var4 = {};
            var10 = _closure1_slot12;
            var7 = var10.GUILD_ONBOARDING_RESPONSES;
            var7 = var7.bind(var10)(var11);
            var4['url'] = var7;
            var7 = {};
            var11 = var12.map;
            var10 = function(arg1) {
                var1 = arg1;
                var1 = var1.id;
                return var1;
            };
            var10 = var11.bind(var12)(var10);
            var7['onboarding_responses'] = var10;
            var7['onboarding_prompts_seen'] = var9;
            var7['onboarding_responses_seen'] = var8;
            var4['body'] = var7;
            var7 = true;
            var4['rejectWithError'] = var7;
            var6 = var5.bind(var6)(var4);
            var5 = var6.then;
            var4 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var4 = arg1;
                    var2 = var4.body;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 11;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.dispatch;
                    var1 = {};
                    var5 = 'GUILD_ONBOARDING_UPDATE_RESPONSES_SUCCESS';
                    var1['type'] = var5;
                    var5 = _closure2_slot0;
                    var1['guildId'] = var5;
                    var5 = var4.body;
                    var5 = var5.onboarding_responses;
                    var1['options'] = var5;
                    var5 = var4.body;
                    var5 = var5.onboarding_prompts_seen;
                    var1['prompts_seen'] = var5;
                    var4 = var4.body;
                    var4 = var4.onboarding_responses_seen;
                    var1['options_seen'] = var4;
                    var1 = var2.bind(var3)(var1);
case 11:
                    var1 = undefined;
                    return var1;
                }
            };
            var5 = var5.bind(var6)(var4);
            var4 = var5.catch;
            var3 = function(arg1) {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 12;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.captureException;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var4.bind(var5)(var3);
case 13:
            return var2;
case 4:
            return var1;
        }
    };
    var _closure1_slot15 = var10;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var8.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 5;
    var2 = var6[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 6;
    var2 = var6[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot9 = var2;
    var2 = 7;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var7 = var2.AnalyticEvents;
    var _closure1_slot10 = var7;
    var7 = var2.AnalyticsPages;
    var _closure1_slot11 = var7;
    var2 = var2.Endpoints;
    var _closure1_slot12 = var2;
    var2 = 8;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.GuildMemberFlags;
    var _closure1_slot13 = var2;
    var2 = 9;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.ReadStateTypes;
    var _closure1_slot14 = var2;
    var2 = {};
    var7 = function selectOption(arg1, arg2, arg3, arg4) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var6 = arg2;
            var5 = arg3;
            var3 = _closure1_slot9;
            var2 = var3.getOnboardingPrompt;
            var2 = var2.bind(var3)(var6);
            var3 = null;
            if(!(var3 != var2)) { _fun0004_ip = 14; continue _fun0004 }
case 15:
            var3 = var2.singleSelect;
            if(var3) { _fun0004_ip = 16; continue _fun0004 }
case 17:
            var4 = new Array(0);
            _fun0004_ip = 18; continue _fun0004;
case 16:
            var10 = _closure1_slot1;
            var11 = _closure1_slot2;
            var8 = 14;
            var3 = var11[var8];
            var9 = undefined;
            var7 = var10.bind(var9)(var3);
            var3 = var7.without;
            var8 = var11[var8];
            var10 = var10.bind(var9)(var8);
            var9 = var10.map;
            var8 = var2.options;
            var2 = 'id';
            var2 = var9.bind(var10)(var8, var2);
            var4 = var3.bind(var7)(var2, var5);
case 18:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 11;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.dispatch;
            var1 = {};
            var7 = 'GUILD_ONBOARDING_SELECT_OPTION';
            var1['type'] = var7;
            var7 = arg1;
            var1['guildId'] = var7;
            var1['promptId'] = var6;
            var1['optionId'] = var5;
            var5 = arg4;
            var1['selected'] = var5;
            var1['removedOptionIds'] = var4;
            var1 = var2.bind(var3)(var1);
case 14:
            var1 = undefined;
            return var1;
        }
    };
    var2['selectOption'] = var7;
    var7 = 14;
    var7 = var6[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.debounce;
    var7 = 1000;
    var7 = var8.bind(var9)(var10, var7);
    var2['updateOnboardingResponses'] = var7;
    var7 = function updateRolesLocal(arg1, arg2, arg3) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var5 = arg1;
            var11 = arg2;
            var8 = arg3;
            var3 = _closure1_slot7;
            var1 = var3.getSelfMember;
            var4 = var1.bind(var3)(var5);
            var3 = null;
            var6 = var3 == var4;
            var1 = undefined;
            var10 = undefined;
            if(var6) { _fun0005_ip = 19; continue _fun0005 }
case 20:
            var10 = var4.roles;
case 19:
            if(!(var3 == var10)) { _fun0005_ip = 21; continue _fun0005 }
case 22:
            var10 = new Array(0);
case 21:
            var4 = _closure1_slot5;
            var3 = var4.isViewingRoles;
            var3 = var3.bind(var4)(var5);
            if(var3) { _fun0005_ip = 23; continue _fun0005 }
case 24:
            var3 = var11.length;
            var6 = 0;
            var3 = var3 > var6;
            if(var3) { _fun0005_ip = 25; continue _fun0005 }
case 26:
            var4 = var8.length;
            var3 = var4 > var6;
case 25:
            if(!var3) { _fun0005_ip = 27; continue _fun0005 }
case 28:
            var13 = _closure1_slot1;
            var14 = _closure1_slot2;
            var3 = 11;
            var3 = var14[var3];
            var6 = var13.bind(var1)(var3);
            var4 = var6.dispatch;
            var3 = {};
            var7 = 'GUILD_MEMBER_UPDATE_LOCAL';
            var3['type'] = var7;
            var3['guildId'] = var5;
            var7 = 14;
            var9 = var14[var7];
            var12 = var13.bind(var1)(var9);
            var9 = var12.difference;
            var7 = var14[var7];
            var13 = var13.bind(var1)(var7);
            var7 = var13.union;
            var7 = var7.bind(var13)(var10, var11);
            var7 = var9.bind(var12)(var7, var8);
            var3['roles'] = var7;
            var3['addedRoleIds'] = var11;
            var3['removedRoleIds'] = var8;
            var3 = var4.bind(var6)(var3);
            _fun0005_ip = 27; continue _fun0005;
case 23:
            var4 = _closure1_slot0;
            var12 = _closure1_slot2;
            var3 = 13;
            var3 = var12[var3];
            var4 = var4.bind(var1)(var3);
            var3 = var4.updateImpersonatedRoles;
            var9 = _closure1_slot1;
            var2 = 14;
            var6 = var12[var2];
            var7 = var9.bind(var1)(var6);
            var6 = var7.difference;
            var2 = var12[var2];
            var9 = var9.bind(var1)(var2);
            var2 = var9.union;
            var2 = var2.bind(var9)(var10, var11);
            var2 = var6.bind(var7)(var2, var8);
            var2 = var3.bind(var4)(var5, var2);
case 27:
            return var1;
        }
    };
    var2['updateRolesLocal'] = var7;
    var7 = function completeOnboarding(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var5 = arg1;
            var20 = arg2;
            var1 = var20.length;
            var6 = 0;
            var1 = var1 > var6;
            var4 = null;
            var19 = null;
            if(!var1) { _fun0006_ip = 17; continue _fun0006 }
case 29:
            var2 = var20.length;
            var1 = 1;
            var1 = var2 - var1;
            var19 = var20[var1];
case 17:
            var2 = _closure1_slot9;
            var1 = var2.getSelectedOptions;
            var22 = var1.bind(var2)(var5);
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var10 = 15;
            var8 = var2[var10];
            var1 = undefined;
            var9 = var3.bind(var1)(var8);
            var8 = var9.getSelectedRoleIds;
            var12 = var8.bind(var9)(var22);
            var2 = var2[var10];
            var3 = var3.bind(var1)(var2);
            var2 = var3.getSelectedChannelIds;
            var2 = var2.bind(var3)(var22);
            var8 = _closure1_slot9;
            var3 = var8.getEnabled;
            var3 = var3.bind(var8)(var5);
            if(var3) { _fun0006_ip = 30; continue _fun0006 }
case 31:
            var9 = new Array(0);
            _fun0006_ip = 32; continue _fun0006;
case 30:
            var8 = _closure1_slot9;
            var3 = var8.getDefaultChannelIds;
            var9 = var3.bind(var8)(var5);
case 32:
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var10 = var8[var10];
            var11 = var3.bind(var1)(var10);
            var10 = var11.getChannelCoverageForOnboarding;
            var14 = var10.bind(var11)(var5, var20, var9);
            var11 = _closure1_slot4;
            var10 = 2;
            var10 = var11.bind(var1)(var14, var10);
            var18 = var10[var6];
            var21 = 1;
            var16 = var10[var21];
            var15 = new Array(0);
            var29 = var15;
            var28 = var2;
            var27 = 0;
            var27 = arraySpread(var29, var28, var27);
            var29 = var15;
            var28 = var9;
            var2 = arraySpread(var29, var28, var27);
            var9 = var15.map;
            var2 = function(arg1) {
                var3 = _closure1_slot6;
                var2 = var3.getChannel;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var10 = var9.bind(var15)(var2);
            var9 = var10.filter;
            var2 = 16;
            var2 = var8[var2];
            var2 = var3.bind(var1)(var2);
            var2 = var2.isNotNullish;
            var27 = var9.bind(var10)(var2);
            var2 = 17;
            var2 = var8[var2];
            var9 = var3.bind(var1)(var2);
            var8 = var9.getFlattenedChannels;
            var3 = global;
            var2 = var3.Set;
            var11 = var2.prototype;
            var11 = Object.create(var11, {constructor: {value: var2}});
            var30 = var11;
            var29 = var15;
            var2 = new var30[var2](var29, var28);
            var28 = var2 instanceof Object ? var2 : var11;
            var11 = true;
            var30 = var9;
            var29 = var5;
            var26 = true;
            var2 = var30[var8](var29, var28, var27, var26, var25);
            var17 = var2.length;
            if(!(var4 != var19)) { _fun0006_ip = 33; continue _fun0006 }
case 34:
            var9 = var19.options;
            var8 = var9.map;
            var2 = function(arg1) {
                var1 = arg1;
                var1 = var1.id;
                return var1;
            };
            var14 = var8.bind(var9)(var2);
            _fun0006_ip = 35; continue _fun0006;
case 33:
            var14 = new Array(0);
case 35:
            var _closure2_slot0 = var14;
            var8 = _closure1_slot1;
            var25 = _closure1_slot2;
            var2 = 18;
            var2 = var25[var2];
            var10 = var8.bind(var1)(var2);
            var9 = var10.track;
            var2 = _closure1_slot10;
            var8 = var2.GUILD_ONBOARDING_STEP_COMPLETED;
            var2 = {};
            var24 = _closure1_slot0;
            var23 = 19;
            var23 = var25[var23];
            var24 = var24.bind(var1)(var23);
            var23 = var24.collectGuildAnalyticsMetadata;
            var28 = var23.bind(var24)(var5);
            var29 = var2;
            var23 = copyDataProperties(var29, var28);
            var20 = var20.length;
            var21 = var20 - var21;
            var20 = 'step';
            var2[var20] = var21;
            var19 = var4 == var19;
            var20 = 0;
            if(var19) { _fun0006_ip = 36; continue _fun0006 }
case 37:
            var21 = var22.filter;
            var19 = function(arg1) {
                var3 = _closure2_slot0;
                var2 = var3.includes;
                var1 = arg1;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var19 = var21.bind(var22)(var19);
            var20 = var19.length;
case 36:
            var19 = 'options_selected';
            var2[var19] = var20;
            var14 = var14.length;
            var19 = var14 > var6;
            var14 = 'skipped';
            var2[var14] = var19;
            var19 = false;
            var14 = 'back';
            var2[var14] = var19;
            var14 = 'in_onboarding';
            var2[var14] = var11;
            var14 = 'is_final_step';
            var2[var14] = var11;
            var19 = var12.size;
            var14 = 'roles_granted';
            var2[var14] = var19;
            var14 = 'channels_granted';
            var2[var14] = var17;
            var17 = var18.map;
            var14 = function(arg1) {
                var1 = arg1;
                var1 = var1.id;
                return var1;
            };
            var17 = var17.bind(var18)(var14);
            var14 = 'guild_onboarding_covered_channel_ids';
            var2[var14] = var17;
            var14 = var16.map;
            var13 = function(arg1) {
                var1 = arg1;
                var1 = var1.id;
                return var1;
            };
            var14 = var14.bind(var16)(var13);
            var13 = 'guild_onboarding_uncovered_channel_ids';
            var2[var13] = var14;
            var2 = var9.bind(var10)(var8, var2);
            var8 = _closure1_slot0;
            var14 = _closure1_slot2;
            var2 = 20;
            var2 = var14[var2];
            var10 = var8.bind(var1)(var2);
            var9 = var10.ackGuildFeature;
            var2 = _closure1_slot14;
            var8 = var2.GUILD_ONBOARDING_QUESTION;
            var13 = _closure1_slot1;
            var2 = 21;
            var2 = var14[var2];
            var14 = var13.bind(var1)(var2);
            var13 = var14.fromTimestamp;
            var16 = var3.Date;
            var2 = var16.now;
            var2 = var2.bind(var16)();
            var2 = var13.bind(var14)(var2);
            var2 = var9.bind(var10)(var5, var8, var2);
            var2 = _closure1_slot15;
            var2 = var2.bind(var1)(var5, var11);
            var8 = _closure1_slot5;
            var2 = var8.isFullServerPreview;
            var2 = var2.bind(var8)(var5);
            if(!var2) { _fun0006_ip = 38; continue _fun0006 }
case 39:
            var9 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 13;
            var10 = var8[var2];
            var14 = var9.bind(var1)(var10);
            var13 = var14.updateImpersonatedChannels;
            var10 = new Array(0);
            var10 = var13.bind(var14)(var5, var15, var10);
            var10 = var8[var2];
            var14 = var9.bind(var1)(var10);
            var13 = var14.updateImpersonatedData;
            var10 = {};
            var10['optInEnabled'] = var11;
            var10 = var13.bind(var14)(var5, var10);
            var8 = var8[var2];
            var9 = var9.bind(var1)(var8);
            var8 = var9.updateImpersonatedRoles;
            var10 = var3.Array;
            var3 = var10.from;
            var3 = var3.bind(var10)(var12);
            var3 = var8.bind(var9)(var5, var3);
            var8 = _closure1_slot8;
            var3 = var8.getCurrentUser;
            var3 = var3.bind(var8)();
            if(!(var4 != var3)) { _fun0006_ip = 38; continue _fun0006 }
case 40:
            var9 = _closure1_slot7;
            var8 = var9.getMember;
            var3 = var3.id;
            var8 = var8.bind(var9)(var5, var3);
            var9 = var4 == var8;
            var3 = undefined;
            if(var9) { _fun0006_ip = 41; continue _fun0006 }
case 42:
            var3 = var8.flags;
case 41:
            var4 = var4 != var3;
            var10 = 0;
            if(!var4) { _fun0006_ip = 43; continue _fun0006 }
case 44:
            var10 = var3;
case 43:
            var9 = _closure1_slot0;
            var12 = _closure1_slot2;
            var2 = var12[var2];
            var4 = var9.bind(var1)(var2);
            var3 = var4.updateImpersonatedData;
            var2 = {};
            var6 = {};
            var8 = 22;
            var8 = var12[var8];
            var9 = var9.bind(var1)(var8);
            var8 = var9.setFlag;
            var7 = _closure1_slot13;
            var7 = var7.COMPLETED_ONBOARDING;
            var7 = var8.bind(var9)(var10, var7, var11);
            var6['flags'] = var7;
            var2['memberOptions'] = var6;
            var2 = var3.bind(var4)(var5, var2);
case 38:
            return var1;
        }
    };
    var2['completeOnboarding'] = var7;
    var7 = function onboardExistingMember(arg1, arg2) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var6 = arg1;
            var2 = global;
            var5 = var2.Set;
            var1 = var5.prototype;
            var4 = Object.create(var1, {constructor: {value: var5}});
            var12 = arg2;
            var13 = var4;
            var1 = new var13[var5](var12, var11);
            var7 = var1 instanceof Object ? var1 : var4;
            var _closure2_slot0 = var7;
            var5 = _closure1_slot9;
            var4 = var5.getEnabled;
            var4 = var4.bind(var5)(var6);
            if(var4) { _fun0007_ip = 45; continue _fun0007 }
case 46:
            var5 = new Array(0);
            _fun0007_ip = 47; continue _fun0007;
case 45:
            var8 = _closure1_slot9;
            var4 = var8.getDefaultChannelIds;
            var5 = var4.bind(var8)(var6);
case 47:
            var4 = var5.forEach;
            var3 = function(arg1) {
                var3 = _closure2_slot0;
                var2 = var3.add;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var3 = var4.bind(var5)(var3);
            var4 = var7.size;
            var3 = 0;
            if(!(var4 > var3)) { _fun0007_ip = 48; continue _fun0007 }
case 49:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var3 = 23;
            var4 = var4[var3];
            var3 = undefined;
            var5 = var5.bind(var3)(var4);
            var4 = var5.bulkOptInChannels;
            var3 = var2.Array;
            var2 = var3.from;
            var11 = var2.bind(var3)(var7);
            var2 = {};
            var1 = _closure1_slot11;
            var1 = var1.GUILD_ONBOARDING;
            var2['page'] = var1;
            var10 = true;
            var13 = var5;
            var12 = var6;
            var9 = var2;
            var1 = var13[var4](var12, var11, var10, var9, var8);
case 48:
            var1 = undefined;
            return var1;
        }
    };
    var2['onboardExistingMember'] = var7;
    var7 = function finishOnboarding(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 11;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'GUILD_ONBOARDING_COMPLETE';
        var2['type'] = var5;
        var5 = arg1;
        var2['guildId'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['finishOnboarding'] = var7;
    var7 = function setUserOnboardingStep(arg1, arg2) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 11;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'GUILD_ONBOARDING_SET_STEP';
        var2['type'] = var5;
        var5 = arg1;
        var2['guildId'] = var5;
        var5 = arg2;
        var2['step'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['setUserOnboardingStep'] = var7;
    var4 = function resetOnboarding(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0008_ip = 50; continue _fun0008 }
case 51:
                    var3 = _closure1_slot8;
                    var2 = var3.getCurrentUser;
                    var3 = var2.bind(var3)();
                    var4 = null;
                    if(!(var4 != var3)) { _fun0008_ip = 52; continue _fun0008 }
case 53:
                    var8 = _closure1_slot7;
                    var7 = var8.getMember;
                    var5 = _closure2_slot0;
                    var3 = var3.id;
                    var5 = var7.bind(var8)(var5, var3);
                    var7 = var4 == var5;
                    var9 = undefined;
                    var3 = undefined;
                    if(var7) { _fun0008_ip = 54; continue _fun0008 }
case 55:
                    var3 = var5.flags;
case 54:
                    var4 = var4 != var3;
                    var10 = 0;
                    if(!var4) { _fun0008_ip = 56; continue _fun0008 }
case 57:
                    var10 = var3;
case 56:
                    var8 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var3 = 24;
                    var3 = var11[var3];
                    var5 = var8.bind(var9)(var3);
                    var4 = var5.updateGuildSelfMember;
                    var3 = _closure2_slot0;
                    var2 = {};
                    var7 = 22;
                    var7 = var11[var7];
                    var9 = var8.bind(var9)(var7);
                    var8 = var9.setFlag;
                    var6 = _closure1_slot13;
                    var7 = var6.COMPLETED_ONBOARDING;
                    var6 = false;
                    var6 = var8.bind(var9)(var10, var7, var6);
                    var2['flags'] = var6;
                    var2 = var4.bind(var5)(var3, var2);
                    SaveGenerator(address=174);
case 58:
                    return var2;
case 59:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0008_ip = 60; continue _fun0008 }
case 52:
                    var3 = undefined;
                    return var3;
case 60:
                    return var2;
case 50:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var2['resetOnboarding'] = var4;
    var4 = 25;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_onboarding/GuildOnboardingActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();