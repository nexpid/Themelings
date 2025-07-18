// app/modules/creator_monetization_eligibility/guild_settings/useOnboardingMonetizationEnableFlow.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var8 = var6[var1];
    var4 = native4;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.isGuildOwner;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.GuildFeatures;
    var _closure1_slot6 = var7;
    var7 = var4.HelpdeskArticles;
    var _closure1_slot7 = var7;
    var4 = var4.MarketingURLs;
    var _closure1_slot8 = var4;
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/creator_monetization_eligibility/guild_settings/useOnboardingMonetizationEnableFlow.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useOnboardingMonetizationEnableFlow(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var22 = arg1;
            var _closure2_slot0 = var22;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 4;
            var2 = var4[var2];
            var26 = undefined;
            var3 = var3.bind(var26)(var2);
            var2 = var3.useIsExpeditedOnboardingGuild;
            var2 = var2.bind(var3)(var22);
            var8 = null;
            var3 = var8 == var22;
            var7 = undefined;
            if(var3) { _fun0001_ip = 82; continue _fun0001 }
 56:
            var5 = var22.features;
            var4 = var5.has;
            var3 = _closure1_slot6;
            var3 = var3.CREATOR_MONETIZABLE_PROVISIONAL;
            var7 = var4.bind(var5)(var3);
 82:
            var3 = var8 == var22;
            var21 = undefined;
            if(var3) { _fun0001_ip = 117; continue _fun0001 }
 91:
            var5 = var22.features;
            var4 = var5.has;
            var3 = _closure1_slot6;
            var3 = var3.CREATOR_MONETIZABLE;
            var21 = var4.bind(var5)(var3);
 117:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 5;
            var3 = var5[var3];
            var9 = var4.bind(var26)(var3);
            var6 = var9.useStateFromStores;
            var3 = _closure1_slot5;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure1_slot5;
                    var1 = var2.getCurrentUser;
                    var5 = var1.bind(var2)();
                    var4 = _closure2_slot0;
                    var1 = null;
                    var1 = var1 != var4;
                    if(!var1) { _fun0002_ip = 48; continue _fun0002 }
 32:
                    var4 = _closure1_slot4;
                    var3 = _closure2_slot0;
                    var2 = undefined;
                    var1 = var4.bind(var2)(var3, var5);
 48:
                    return var1;
                }
            };
            var17 = var6.bind(var9)(var4, var3);
            var4 = _closure1_slot1;
            var3 = 6;
            var3 = var5[var3];
            var4 = var4.bind(var26)(var3);
            var5 = var8 == var22;
            var3 = undefined;
            if(var5) { _fun0001_ip = 197; continue _fun0001 }
 192:
            var3 = var22.id;
 197:
            var3 = var4.bind(var26)(var3);
            var18 = var3.error;
            var19 = var3.loading;
            var16 = var3.createEnableRequest;
            var15 = var3.submittedRequest;
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var3 = 7;
            var3 = var5[var3];
            var4 = var4.bind(var26)(var3);
            var5 = var8 == var22;
            var3 = undefined;
            if(var5) { _fun0001_ip = 259; continue _fun0001 }
 254:
            var3 = var22.id;
 259:
            var3 = var4.bind(var26)(var3);
            var14 = var3.loading;
            var13 = var3.error;
            var12 = var3.refresh;
            var _closure2_slot1 = var12;
            var11 = var3.eligibility;
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var3 = 8;
            var3 = var5[var3];
            var3 = var4.bind(var26)(var3);
            var3 = var3.bind(var26)(var11);
            var6 = var3.isApplicationRejected;
            var29 = var3.requestCooldownDuration;
            var4 = var8 == var22;
            var3 = undefined;
            if(var4) { _fun0001_ip = 363; continue _fun0001 }
 337:
            var9 = var22.features;
            var5 = var9.has;
            var4 = _closure1_slot6;
            var4 = var4.CREATOR_MONETIZABLE_RESTRICTED;
            var3 = var5.bind(var9)(var4);
 363:
            var4 = true;
            var5 = var4 === var3;
            if(var5) { _fun0001_ip = 411; continue _fun0001 }
 372:
            var9 = var8 == var22;
            var3 = undefined;
            if(var9) { _fun0001_ip = 407; continue _fun0001 }
 381:
            var23 = var22.features;
            var10 = var23.has;
            var9 = _closure1_slot6;
            var9 = var9.CREATOR_MONETIZABLE_DISABLED;
            var3 = var10.bind(var23)(var9);
 407:
            var5 = var4 === var3;
 411:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 9;
            var3 = var10[var3];
            var10 = var9.bind(var26)(var3);
            var9 = var10.useIsMonetizationReapplicationDisabled;
            var23 = var8 == var22;
            var3 = undefined;
            if(var23) { _fun0001_ip = 451; continue _fun0001 }
 446:
            var3 = var22.id;
 451:
            var3 = var9.bind(var10)(var3);
            var22 = var3.isMonetizationReapplicationDisabled;
            var9 = var15;
            if(var9) { _fun0001_ip = 487; continue _fun0001 }
 468:
            var10 = var8 == var11;
            var3 = undefined;
            if(var10) { _fun0001_ip = 483; continue _fun0001 }
 477:
            var3 = var11.isApplicationPending;
 483:
            var9 = var4 === var3;
 487:
            var10 = var8 == var11;
            var3 = undefined;
            if(var10) { _fun0001_ip = 502; continue _fun0001 }
 496:
            var3 = var11.canApply;
 502:
            var10 = var4 === var3;
            var23 = _closure1_slot0;
            var28 = _closure1_slot2;
            var27 = 10;
            var3 = var28[var27];
            var3 = var23.bind(var26)(var3);
            var25 = var3.intl;
            var24 = var25.format;
            var3 = var28[var27];
            var3 = var23.bind(var26)(var3);
            var3 = var3.t;
            var23 = var3.aJUdOj;
            var3 = {};
            var31 = _closure1_slot1;
            var30 = 11;
            var28 = var28[var30];
            var32 = var31.bind(var26)(var28);
            var31 = var32.getArticleURL;
            var28 = _closure1_slot7;
            var28 = var28.CREATOR_FAQ;
            var28 = var31.bind(var32)(var28);
            var3['faqUrl'] = var28;
            var3 = var24.bind(var25)(var23, var3);
            if(!var6) { _fun0001_ip = 619; continue _fun0001 }
 613:
            if(var22) { _fun0001_ip = 743; continue _fun0001 }
 619:
            var22 = var6;
            if(!var6) { _fun0001_ip = 629; continue _fun0001 }
 625:
            var22 = var8 != var29;
 629:
            var8 = undefined;
            if(!var22) { _fun0001_ip = 896; continue _fun0001 }
 637:
            var23 = _closure1_slot0;
            var28 = _closure1_slot2;
            var22 = var28[var27];
            var22 = var23.bind(var26)(var22);
            var25 = var22.intl;
            var24 = var25.format;
            var22 = var28[var27];
            var22 = var23.bind(var26)(var22);
            var22 = var22.t;
            var23 = var22.TvX209;
            var22 = {};
            var22['requestCooldownDuration'] = var29;
            var29 = _closure1_slot1;
            var28 = var28[var30];
            var30 = var29.bind(var26)(var28);
            var29 = var30.getArticleURL;
            var28 = _closure1_slot7;
            var28 = var28.CREATOR_POLICY;
            var28 = var29.bind(var30)(var28);
            var22['creatorRevenuePolicyUrl'] = var28;
            var8 = var24.bind(var25)(var23, var22);
            _fun0001_ip = 896; continue _fun0001;
 743:
            if(!(var4 !== var7)) { _fun0001_ip = 821; continue _fun0001 }
 747:
            var22 = _closure1_slot0;
            var4 = _closure1_slot2;
            var23 = var4[var27];
            var23 = var22.bind(var26)(var23);
            var24 = var23.intl;
            var23 = var24.format;
            var4 = var4[var27];
            var4 = var22.bind(var26)(var4);
            var4 = var4.t;
            var22 = var4.b6h59v;
            var4 = {};
            var25 = _closure1_slot8;
            var25 = var25.GUIDELINES;
            var4['communityGuidelineUrl'] = var25;
            var4 = var23.bind(var24)(var22, var4);
            _fun0001_ip = 893; continue _fun0001;
 821:
            var23 = _closure1_slot0;
            var22 = _closure1_slot2;
            var24 = var22[var27];
            var24 = var23.bind(var26)(var24);
            var25 = var24.intl;
            var24 = var25.format;
            var22 = var22[var27];
            var22 = var23.bind(var26)(var22);
            var22 = var22.t;
            var23 = var22.0o1Q+v;
            var22 = {};
            var28 = _closure1_slot8;
            var28 = var28.GUIDELINES;
            var22['communityGuidelineUrl'] = var28;
            var4 = var24.bind(var25)(var23, var22);
 893:
            var8 = var4;
 896:
            var23 = var2;
            if(!var2) { _fun0001_ip = 905; continue _fun0001 }
 902:
            var23 = var17;
 905:
            if(!var23) { _fun0001_ip = 914; continue _fun0001 }
 908:
            var4 = false;
            var23 = var4 === var21;
 914:
            var _closure2_slot2 = var23;
            var4 = var2;
            if(!var4) { _fun0001_ip = 930; continue _fun0001 }
 924:
            var2 = false;
            var4 = var2 === var7;
 930:
            var7 = _closure1_slot0;
            var21 = _closure1_slot2;
            var2 = 12;
            var2 = var21[var2];
            var7 = var7.bind(var26)(var2);
            var2 = var7.getCreatorMonetizationAcceptTermsCheckboxText;
            var2 = var2.bind(var7)();
            var7 = undefined;
            if(!var6) { _fun0001_ip = 1032; continue _fun0001 }
 965:
            var7 = undefined;
            if(!var10) { _fun0001_ip = 1032; continue _fun0001 }
 970:
            var7 = undefined;
            if(!var17) { _fun0001_ip = 1032; continue _fun0001 }
 975:
            var22 = _closure1_slot0;
            var21 = _closure1_slot2;
            var24 = var21[var27];
            var24 = var22.bind(var26)(var24);
            var25 = var24.intl;
            var24 = var25.format;
            var21 = var21[var27];
            var21 = var22.bind(var26)(var21);
            var21 = var21.t;
            var22 = var21.wbVIUF;
            var21 = {};
            var7 = var24.bind(var25)(var22, var21);
 1032:
            var22 = _closure1_slot3;
            var21 = var22.useEffect;
            var20 = new Array(2);
            var20[0] = var12;
            var20[1] = var23;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var2 = _closure2_slot2;
                    if(!var2) { _fun0003_ip = 20; continue _fun0003 }
 10:
                    var2 = _closure2_slot1;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
 20:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var21.bind(var22)(var1, var20);
            var1 = {};
            var1['resubmittingEnableRequest'] = var19;
            var1['resubmissionError'] = var18;
            var1['isGuildOwner'] = var17;
            var1['createEnableRequest'] = var16;
            var1['resubmittedRequest'] = var15;
            var1['eligibilityLoading'] = var14;
            var1['eligibilityError'] = var13;
            var1['refreshEligibility'] = var12;
            var1['eligibility'] = var11;
            var1['eligibleForMonetization'] = var10;
            var1['isApplicationPending'] = var9;
            var1['hasPreviousApplicationRejection'] = var6;
            var1['requestRejectedNoticeText'] = var8;
            var1['reapplyNoticeText'] = var7;
            var1['showAcceptTermsFlow'] = var4;
            if(!var4) { _fun0001_ip = 1159; continue _fun0001 }
 1150:
            if(var5) { _fun0001_ip = 1156; continue _fun0001 }
 1153:
            var5 = var6;
 1156:
            var4 = var5;
 1159:
            var1['wasRejectedInV1'] = var4;
            var1['requirementsFinePrintText'] = var3;
            var1['acceptTermsCheckboxText'] = var2;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();