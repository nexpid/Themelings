// app/modules/guild_onboarding/GuildOnboardingPromptsActionCreators.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var7 = native2;
    var9 = native3;
    var3 = native6;
    var8 = native7;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var8;
    var5 = function fetchOnboardingPrompts(arg1) {
        var7 = arg1;
        var _closure2_slot0 = var7;
        var3 = _closure1_slot1;
        var6 = _closure1_slot2;
        var2 = 10;
        var2 = var6[var2];
        var4 = undefined;
        var8 = var3.bind(var4)(var2);
        var3 = var8.dispatch;
        var2 = {};
        var9 = 'GUILD_ONBOARDING_PROMPTS_FETCH_START';
        var2['type'] = var9;
        var2['guildId'] = var7;
        var2 = var3.bind(var8)(var2);
        var3 = _closure1_slot0;
        var2 = 11;
        var2 = var6[var2];
        var2 = var3.bind(var4)(var2);
        var4 = var2.HTTP;
        var3 = var4.get;
        var2 = {};
        var6 = _closure1_slot10;
        var5 = var6.GUILD_ONBOARDING;
        var5 = var5.bind(var6)(var7);
        var2['url'] = var5;
        var5 = false;
        var2['rejectWithError'] = var5;
        var4 = var3.bind(var4)(var2);
        var3 = var4.then;
        var2 = function(arg1) {
            var2 = arg1;
            var5 = var2.body;
            var3 = _closure1_slot8;
            var4 = undefined;
            var5 = var3.bind(var4)(var5);
            var _closure3_slot0 = var5;
            var3 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 10;
            var2 = var6[var2];
            var4 = var3.bind(var4)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var6 = 'GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS';
            var2['type'] = var6;
            var6 = _closure2_slot0;
            var2['guildId'] = var6;
            var8 = var2;
            var7 = var5;
            var5 = copyDataProperties(var8, var7);
            var3 = var3.bind(var4)(var2);
            var2 = var3.then;
            var1 = function() {
                var1 = _closure3_slot0;
                var1 = var1.prompts;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1 = function(arg1) {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 10;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.dispatch;
            var1 = {};
            var4 = 'GUILD_ONBOARDING_PROMPTS_FETCH_FAILURE';
            var1['type'] = var4;
            var4 = _closure2_slot0;
            var1['guildId'] = var4;
            var1 = var2.bind(var3)(var1);
            var1 = arg1;
            return var1;
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot14 = var5;
    var1 = function _maybeFetchOnboardingPrompts() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    var7 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 429; continue _fun0001 }
 15:
                    var4 = _closure1_slot4;
                    var2 = var4.getId;
                    var8 = var2.bind(var4)();
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var2 = 12;
                    var2 = var6[var2];
                    var6 = undefined;
                    var11 = var4.bind(var6)(var2);
                    var10 = var11.hasFlag;
                    var4 = _closure1_slot5;
                    var2 = var4.getMember;
                    var4 = var2.bind(var4)(var7, var8);
                    var9 = null;
                    var8 = var9 == var4;
                    var2 = undefined;
                    if(var8) { _fun0001_ip = 92; continue _fun0001 }
 87:
                    var2 = var4.flags;
 92:
                    var12 = var9 != var2;
                    var4 = 0;
                    var8 = 0;
                    if(!var12) { _fun0001_ip = 106; continue _fun0001 }
 103:
                    var8 = var2;
 106:
                    var2 = _closure1_slot12;
                    var2 = var2.COMPLETED_ONBOARDING;
                    var8 = var10.bind(var11)(var8, var2);
                    var10 = _closure1_slot6;
                    var2 = var10.getGuild;
                    var2 = var2.bind(var10)(var7);
                    if(!(var9 != var2)) { _fun0001_ip = 408; continue _fun0001 }
 143:
                    var10 = var2.features;
                    var9 = var10.has;
                    var2 = _closure1_slot11;
                    var2 = var2.GUILD_ONBOARDING;
                    var2 = var9.bind(var10)(var2);
                    if(!var2) { _fun0001_ip = 408; continue _fun0001 }
 175:
                    var9 = _closure1_slot7;
                    var2 = var9.shouldFetchPrompts;
                    var2 = var2.bind(var9)(var7);
                    var10 = _closure1_slot7;
                    var9 = var10.getOnboardingPrompts;
                    var9 = var9.bind(var10)(var7);
                    if(var2) { _fun0001_ip = 298; continue _fun0001 }
 208:
                    var2 = var9.length;
                    if(!(var2 > var4)) { _fun0001_ip = 298; continue _fun0001 }
 217:
                    var4 = var9.every;
                    var2 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.inOnboarding;
                        var1 = !var1;
                        return var1;
                    };
                    var2 = var4.bind(var9)(var2);
                    if(var2) { _fun0001_ip = 268; continue _fun0001 }
 236:
                    if(var8) { _fun0001_ip = 248; continue _fun0001 }
 239:
                    var2 = _closure1_slot16;
                    var2 = var2.bind(var6)(var7);
 248:
                    var2 = global;
                    var4 = var2.Promise;
                    var2 = var4.resolve;
                    var2 = var2.bind(var4)();
                    _fun0001_ip = 295; continue _fun0001;
 268:
                    var4 = _closure1_slot17;
                    var4 = var4.bind(var6)(var7);
                    var4 = global;
                    var9 = var4.Promise;
                    var4 = var9.resolve;
                    var2 = var4.bind(var9)();
 295:
                    return var2;
 298:
                    var2 = _closure1_slot14;
                    var2 = var2.bind(var6)(var7);
                    SaveGenerator(address=311);
 309:
                    return var2;
 311:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 405; continue _fun0001 }
 317:
                    var4 = global;
                    var10 = var4.Array;
                    var9 = var10.isArray;
                    var9 = var9.bind(var10)(var2);
                    if(!var9) { _fun0001_ip = 357; continue _fun0001 }
 338:
                    var9 = var2.every;
                    var3 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.inOnboarding;
                        var1 = !var1;
                        return var1;
                    };
                    var3 = var9.bind(var2)(var3);
                    if(var3) { _fun0001_ip = 377; continue _fun0001 }
 357:
                    var3 = var2;
                    if(var8) { _fun0001_ip = 402; continue _fun0001 }
 363:
                    var8 = _closure1_slot16;
                    var8 = var8.bind(var6)(var7);
                    var3 = var2;
                    _fun0001_ip = 402; continue _fun0001;
 377:
                    var5 = _closure1_slot17;
                    var5 = var5.bind(var6)(var7);
                    var5 = var4.Promise;
                    var4 = var5.resolve;
                    var3 = var4.bind(var5)();
 402:
                    return var3;
 405:
                    return var2;
 408:
                    var2 = global;
                    var3 = var2.Promise;
                    var2 = var3.resolve;
                    var2 = var2.bind(var3)();
                    return var2;
 429:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot15 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot15 = var1;
    var2 = function startOnboarding(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 10;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'GUILD_ONBOARDING_START';
        var2['type'] = var5;
        var5 = arg1;
        var2['guildId'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var _closure1_slot16 = var2;
    var1 = function _trackOnboardingDirectJoin(arg1) {
        var11 = arg1;
        var3 = _closure1_slot1;
        var12 = _closure1_slot2;
        var2 = 8;
        var4 = var12[var2];
        var1 = undefined;
        var14 = var3.bind(var1)(var4);
        var13 = var14.track;
        var4 = _closure1_slot9;
        var5 = var4.GUILD_ONBOARDING_STEP_VIEWED;
        var4 = {};
        var10 = _closure1_slot0;
        var9 = 9;
        var7 = var12[var9];
        var8 = var10.bind(var1)(var7);
        var7 = var8.collectGuildAnalyticsMetadata;
        var16 = var7.bind(var8)(var11);
        var17 = var4;
        var7 = copyDataProperties(var17, var16);
        var7 = _closure1_slot13;
        var8 = 'step';
        var4[var8] = var7;
        var7 = true;
        var15 = 'required';
        var4[var15] = var7;
        var4 = var13.bind(var14)(var5, var4);
        var2 = var12[var2];
        var5 = var3.bind(var1)(var2);
        var4 = var5.track;
        var2 = _closure1_slot9;
        var3 = var2.GUILD_ONBOARDING_STEP_COMPLETED;
        var2 = {};
        var9 = var12[var9];
        var10 = var10.bind(var1)(var9);
        var9 = var10.collectGuildAnalyticsMetadata;
        var16 = var9.bind(var10)(var11);
        var17 = var2;
        var9 = copyDataProperties(var17, var16);
        var6 = _closure1_slot13;
        var2[var8] = var6;
        var8 = false;
        var6 = 'skipped';
        var2[var6] = var8;
        var6 = 'is_final_step';
        var2[var6] = var7;
        var6 = 'in_onboarding';
        var2[var6] = var7;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var _closure1_slot17 = var1;
    var1 = global;
    var11 = var1.Object;
    var10 = var11.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var6);
    var1 = 0;
    var6 = var8[var1];
    var1 = undefined;
    var6 = var9.bind(var1)(var6);
    var _closure1_slot3 = var6;
    var6 = 1;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot4 = var6;
    var6 = 2;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot5 = var6;
    var6 = 3;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot6 = var6;
    var6 = 4;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot7 = var6;
    var6 = 5;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var6 = var6.serverApiResponseToClientState;
    var _closure1_slot8 = var6;
    var6 = 6;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var9 = var6.AnalyticEvents;
    var _closure1_slot9 = var9;
    var9 = var6.Endpoints;
    var _closure1_slot10 = var9;
    var6 = var6.GuildFeatures;
    var _closure1_slot11 = var6;
    var6 = 7;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var6 = var6.GuildMemberFlags;
    var _closure1_slot12 = var6;
    var6 = -2;
    var _closure1_slot13 = var6;
    var6 = 13;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/guild_onboarding/GuildOnboardingPromptsActionCreators.tsx';
    var6 = var7.bind(var8)(var6);
    var6 = function loadOnboardingPrompts(arg1) {
        var3 = _closure1_slot1;
        var8 = _closure1_slot2;
        var1 = 8;
        var2 = var8[var1];
        var1 = undefined;
        var5 = var3.bind(var1)(var2);
        var4 = var5.track;
        var2 = _closure1_slot9;
        var3 = var2.GUILD_ONBOARDING_LOADED;
        var2 = {};
        var7 = _closure1_slot0;
        var6 = 9;
        var6 = var8[var6];
        var8 = var7.bind(var1)(var6);
        var7 = var8.collectGuildAnalyticsMetadata;
        var6 = arg1;
        var9 = var7.bind(var8)(var6);
        var10 = var2;
        var6 = copyDataProperties(var10, var9);
        var7 = false;
        var6 = 'has_new_prompts';
        var2[var6] = var7;
        var7 = 0;
        var6 = 'number_of_prompts';
        var2[var6] = var7;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var3['loadOnboardingPrompts'] = var6;
    var3['fetchOnboardingPrompts'] = var5;
    var4 = function maybeFetchOnboardingPrompts() {
        var1 = undefined;
        var4 = _closure1_slot15;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['maybeFetchOnboardingPrompts'] = var4;
    var3['startOnboarding'] = var2;
    return var1;
})();