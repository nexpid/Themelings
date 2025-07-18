// app/modules/creator_monetization_eligibility/useCreatorMonetizationEligibility.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var8 = native3;
    var7 = native4;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.CreatorMonetizationApplicationState;
    var _closure1_slot6 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/creator_monetization_eligibility/useCreatorMonetizationEligibility.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useCreatorMonetizationEligibility(arg1) {
        var7 = arg1;
        var _closure2_slot0 = var7;
        var5 = _closure1_slot5;
        var4 = var5.useState;
        var1 = null;
        var1 = var1 != var7;
        var1 = var4.bind(var5)(var1);
        var11 = _closure1_slot4;
        var6 = undefined;
        var10 = 2;
        var1 = var11.bind(var6)(var1, var10);
        var3 = 0;
        var4 = var1[var3];
        var9 = 1;
        var1 = var1[var9];
        var _closure2_slot1 = var1;
        var1 = var5.useState;
        var1 = var1.bind(var5)();
        var1 = var11.bind(var6)(var1, var10);
        var8 = var1[var3];
        var1 = var1[var9];
        var _closure2_slot2 = var1;
        var1 = var5.useState;
        var1 = var1.bind(var5)();
        var1 = var11.bind(var6)(var1, var10);
        var3 = var1[var3];
        var1 = var1[var9];
        var _closure2_slot3 = var1;
        var9 = var5.useCallback;
        var1 = function() {
            var4 = _closure1_slot3;
            var3 = undefined;
            var2 = function* (arg1) {
                var1 = function* anon_0_(arg1) {
                    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                        if(var3) { _fun0001_ip = 620; continue _fun0001 }
 10:
                        var2 = arg1;
                        var5 = undefined;
                        var13 = undefined;
                        var14 = undefined;
                        var12 = undefined;
                        var11 = undefined;
                        var8 = undefined;
                        var7 = undefined;
                        var6 = _closure2_slot1;
                        var4 = true;
                        var4 = var6.bind(var5)(var4);
                        var4 = _closure2_slot2;
                        var4 = var4.bind(var5)(var5);
 50: // try_start_0 // try_start_1
                        var6 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var4 = 4;
                        var4 = var9[var4];
                        var6 = var6.bind(var5)(var4);
                        var4 = var6.getCreatorMonetizationEligibility;
                        var2 = var4.bind(var6)(var2);
                        SaveGenerator(address=88);
 86:
                        return var2;
 88:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(var4) { _fun0001_ip = 520; continue _fun0001 }
 97:
                        var7 = var2;
                        var6 = _closure2_slot3;
                        var4 = {};
                        var9 = var2.sufficient;
                        var4['isEligibleForMonetization'] = var9;
                        var9 = var2.size;
                        var4['hasSufficientMembers'] = var9;
                        var9 = var2.mfa;
                        var4['hasEnabled2FA'] = var9;
                        var9 = var2.age;
                        var4['meetsServerAgeRequirement'] = var9;
                        var9 = var2.owner_age;
                        var4['meetsOwnerAgeRequirement'] = var9;
                        var9 = var2.safe_environment;
                        var4['noRecentViolations'] = var9;
                        var9 = var2.engagement_healthy;
                        var4['weeklyCommunicators'] = var9;
                        var9 = var2.retention_healthy;
                        var4['hasMemberRetention'] = var9;
                        var9 = global;
                        var16 = var9.Object;
                        var15 = var16.keys;
                        var9 = var2.nsfw_properties;
                        var9 = var15.bind(var16)(var9);
                        var15 = var9.length;
                        var9 = 0;
                        var9 = var9 === var15;
                        var4['notNSFW'] = var9;
                        var9 = var2.can_apply;
                        var4['canApply'] = var9;
                        var15 = var2.latest_request;
                        var13 = var15;
                        var9 = null;
                        var16 = var9 == var15;
                        var15 = undefined;
                        if(var16) { _fun0001_ip = 285; continue _fun0001 }
 280:
                        var15 = var13.state;
 285:
                        var13 = _closure1_slot6;
                        var13 = var13.OPEN;
                        var13 = var15 === var13;
                        var4['isApplicationPending'] = var13;
                        var13 = var7;
                        var13 = var13.latest_request;
                        var14 = var13;
                        var15 = var9 == var13;
                        var13 = undefined;
                        if(var15) { _fun0001_ip = 330; continue _fun0001 }
 325:
                        var13 = var14.state;
 330:
                        var10 = _closure1_slot6;
                        var10 = var10.ACTION_REQUIRED;
                        var10 = var13 === var10;
                        var4['actionRequired'] = var10;
                        var10 = var7;
                        var13 = var10.minimum_age_in_days;
                        var4['minimumAgeInDays'] = var13;
                        var13 = var10.minimum_owner_age_in_years;
                        var4['minimumOwnerAgeInYears'] = var13;
                        var13 = var10.minimum_size;
                        var4['minimumSize'] = var13;
                        var13 = var10.latest_request;
                        var4['latestRequest'] = var13;
                        var13 = var10.rejection;
                        var4['rejection'] = var13;
                        var10 = var10.health_score;
                        var12 = var10;
                        var13 = var9 == var10;
                        var10 = undefined;
                        if(var13) { _fun0001_ip = 439; continue _fun0001 }
 433:
                        var10 = var12.guild_size;
 439:
                        var4['guildMemberCount'] = var10;
                        var10 = var7;
                        var10 = var10.health_score;
                        var11 = var10;
                        var12 = var9 == var10;
                        var10 = undefined;
                        if(var12) { _fun0001_ip = 473; continue _fun0001 }
 465:
                        var10 = var11.communicators;
 473:
                        var4['communicatorCount'] = var10;
                        var7 = var7.health_score;
                        var8 = var7;
                        var9 = var9 == var7;
                        var7 = undefined;
                        if(var9) { _fun0001_ip = 506; continue _fun0001 }
 498:
                        var7 = var8.perc_ret_w1;
 506:
                        var4['retentionScore'] = var7;
                        var4 = var6.bind(var5)(var4);
 518: // try_end0
                        _fun0001_ip = 591; continue _fun0001;
 520: // try_end1
                        var6 = _closure2_slot1;
                        var4 = false;
                        var4 = var6.bind(var5)(var4);
                        return var2;
 534: // try_start_2 // catch_target0
                        CatchBlockStart(arg_register=6);
                        var4 = _closure2_slot2;
                        var6 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var2 = 5;
                        var2 = var8[var2];
                        var2 = var6.bind(var5)(var2);
                        var6 = var2.prototype;
                        var6 = Object.create(var6, {constructor: {value: var2}});
                        var18 = var6;
                        var17 = var7;
                        var2 = new var18[var2](var17, var16);
                        var2 = var2 instanceof Object ? var2 : var6;
                        var2 = var4.bind(var5)(var2);
 591: // try_end2
                        var4 = _closure2_slot1;
                        var2 = false;
                        var2 = var4.bind(var5)(var2);
                        return var5;
 605: // catch_target1 // catch_target2
                        CatchBlockStart(arg_register=1);
                        var4 = _closure2_slot1;
                        var3 = false;
                        var3 = var4.bind(var5)(var3);
                        throw var2;
 620:
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
        var6 = var1.bind(var6)();
        var1 = new Array(0);
        var6 = var9.bind(var5)(var6, var1);
        var _closure2_slot4 = var6;
        var1 = {};
        var1['error'] = var8;
        var1['loading'] = var4;
        var1['eligibility'] = var3;
        var4 = var5.useCallback;
        var3 = new Array(2);
        var3[0] = var7;
        var3[1] = var6;
        var2 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var3 = _closure2_slot0;
                var2 = null;
                if(!(var2 != var3)) { _fun0002_ip = 28; continue _fun0002 }
 13:
                var3 = _closure2_slot4;
                var2 = _closure2_slot0;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
 28:
                var1 = undefined;
                return var1;
            }
        };
        var2 = var4.bind(var5)(var2, var3);
        var1['refresh'] = var2;
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();