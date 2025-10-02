// app/modules/creator_monetization_eligibility/guild_settings/useOnboardingMonetizationEnableFlow.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
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
    var4 = metroImportAll;
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
case 0:
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
            if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = var22.features;
            var4 = var5.has;
            var3 = _closure1_slot6;
            var3 = var3.CREATOR_MONETIZABLE_PROVISIONAL;
            var7 = var4.bind(var5)(var3);
case 2:
            var3 = var8 == var22;
            var21 = undefined;
            if(var3) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var5 = var22.features;
            var4 = var5.has;
            var3 = _closure1_slot6;
            var3 = var3.CREATOR_MONETIZABLE;
            var21 = var4.bind(var5)(var3);
case 4:
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
case 0:
                    var2 = _closure1_slot5;
                    var1 = var2.getCurrentUser;
                    var5 = var1.bind(var2)();
                    var4 = _closure2_slot0;
                    var1 = null;
                    var1 = var1 != var4;
                    if(!var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var4 = _closure1_slot4;
                    var3 = _closure2_slot0;
                    var2 = undefined;
                    var1 = var4.bind(var2)(var3, var5);
case 6:
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
            if(var5) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var3 = var22.id;
case 8:
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
            if(var5) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var3 = var22.id;
case 10:
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
            if(var4) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var9 = var22.features;
            var5 = var9.has;
            var4 = _closure1_slot6;
            var4 = var4.CREATOR_MONETIZABLE_RESTRICTED;
            var3 = var5.bind(var9)(var4);
case 12:
            var4 = true;
            var5 = var4 === var3;
            if(var5) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var9 = var8 == var22;
            var3 = undefined;
            if(var9) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var23 = var22.features;
            var10 = var23.has;
            var9 = _closure1_slot6;
            var9 = var9.CREATOR_MONETIZABLE_DISABLED;
            var3 = var10.bind(var23)(var9);
case 16:
            var5 = var4 === var3;
case 14:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 9;
            var3 = var10[var3];
            var10 = var9.bind(var26)(var3);
            var9 = var10.useIsMonetizationReapplicationDisabled;
            var23 = var8 == var22;
            var3 = undefined;
            if(var23) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var3 = var22.id;
case 18:
            var3 = var9.bind(var10)(var3);
            var22 = var3.isMonetizationReapplicationDisabled;
            var9 = var15;
            if(var9) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var10 = var8 == var11;
            var3 = undefined;
            if(var10) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var3 = var11.isApplicationPending;
case 22:
            var9 = var4 === var3;
case 20:
            var10 = var8 == var11;
            var3 = undefined;
            if(var10) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var3 = var11.canApply;
case 24:
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
            if(!var6) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            if(var22) { _fun0001_ip = 28; continue _fun0001 }
case 26:
            var22 = var6;
            if(!var6) { _fun0001_ip = 29; continue _fun0001 }
case 30:
            var22 = var8 != var29;
case 29:
            var8 = undefined;
            if(!var22) { _fun0001_ip = 31; continue _fun0001 }
case 32:
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
            _fun0001_ip = 31; continue _fun0001;
case 28:
            if(!(var4 !== var7)) { _fun0001_ip = 33; continue _fun0001 }
case 34:
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
            _fun0001_ip = 35; continue _fun0001;
case 33:
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
case 35:
            var8 = var4;
case 31:
            var23 = var2;
            if(!var2) { _fun0001_ip = 36; continue _fun0001 }
case 37:
            var23 = var17;
case 36:
            if(!var23) { _fun0001_ip = 38; continue _fun0001 }
case 39:
            var4 = false;
            var23 = var4 === var21;
case 38:
            var _closure2_slot2 = var23;
            var4 = var2;
            if(!var4) { _fun0001_ip = 40; continue _fun0001 }
case 41:
            var2 = false;
            var4 = var2 === var7;
case 40:
            var7 = _closure1_slot0;
            var21 = _closure1_slot2;
            var2 = 12;
            var2 = var21[var2];
            var7 = var7.bind(var26)(var2);
            var2 = var7.getCreatorMonetizationAcceptTermsCheckboxText;
            var2 = var2.bind(var7)();
            var7 = undefined;
            if(!var6) { _fun0001_ip = 42; continue _fun0001 }
case 43:
            var7 = undefined;
            if(!var10) { _fun0001_ip = 42; continue _fun0001 }
case 44:
            var7 = undefined;
            if(!var17) { _fun0001_ip = 42; continue _fun0001 }
case 45:
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
case 42:
            var22 = _closure1_slot3;
            var21 = var22.useEffect;
            var20 = new Array(2);
            var20[0] = var12;
            var20[1] = var23;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot2;
                    if(!var2) { _fun0003_ip = 46; continue _fun0003 }
case 47:
                    var2 = _closure2_slot1;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
case 46:
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
            if(!var4) { _fun0001_ip = 48; continue _fun0001 }
case 49:
            if(var5) { _fun0001_ip = 50; continue _fun0001 }
case 51:
            var5 = var6;
case 50:
            var4 = var5;
case 48:
            var1['wasRejectedInV1'] = var4;
            var1['requirementsFinePrintText'] = var3;
            var1['acceptTermsCheckboxText'] = var2;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();