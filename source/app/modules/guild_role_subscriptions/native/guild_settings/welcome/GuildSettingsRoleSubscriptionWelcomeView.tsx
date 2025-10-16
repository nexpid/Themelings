// app/modules/guild_role_subscriptions/native/guild_settings/welcome/GuildSettingsRoleSubscriptionWelcomeView.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var14 = metroImportDefault;
    var9 = metroImportAll;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var14;
    var _closure1_slot2 = var9;
    var _closure1_slot3 = var8;
    var1 = function ApplicationStatusNotice(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var7 = var1.style;
            var13 = var1.resubmittingEnableRequest;
            var9 = var1.resubmissionError;
            var14 = var1.createEnableRequest;
            var16 = var1.requestRejectedNoticeText;
            var3 = var1.reapplyNoticeText;
            var2 = var1.isApplicationPending;
            var1 = _closure1_slot14;
            var4 = undefined;
            var6 = var1.bind(var4)();
            var1 = null;
            if(!(var1 == var9)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var1 != var16;
            var15 = undefined;
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var2 = var1 != var3;
            var16 = null;
            var15 = undefined;
            if(!var2) { _fun0001_ip = 6; continue _fun0001 }
case 8:
            var11 = _closure1_slot0;
            var12 = _closure1_slot3;
            var2 = 10;
            var8 = var12[var2];
            var8 = var11.bind(var4)(var8);
            var10 = var8.intl;
            var8 = var10.string;
            var2 = var12[var2];
            var2 = var11.bind(var4)(var2);
            var2 = var2.t;
            var2 = var2.YKw/NT;
            var15 = var8.bind(var10)(var2);
            var16 = var3;
            _fun0001_ip = 6; continue _fun0001;
case 4:
            var10 = _closure1_slot0;
            var11 = _closure1_slot3;
            var2 = 10;
            var3 = var11[var2];
            var3 = var10.bind(var4)(var3);
            var8 = var3.intl;
            var3 = var8.string;
            var2 = var11[var2];
            var2 = var10.bind(var4)(var2);
            var2 = var2.t;
            var2 = var2.OrkTBg;
            var16 = var3.bind(var8)(var2);
            var15 = undefined;
case 6:
            var2 = var1 != var16;
            var1 = null;
            if(!var2) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var8 = _closure1_slot11;
            var3 = _closure1_slot6;
            var2 = {};
            var11 = var6.statusNoticeContainer;
            var10 = new Array(2);
            var10[0] = var11;
            var10[1] = var7;
            var2['style'] = var10;
            var12 = _closure1_slot11;
            var11 = _closure1_slot1;
            var17 = _closure1_slot3;
            var10 = 11;
            var10 = var17[var10];
            var11 = var11.bind(var4)(var10);
            var10 = {};
            var10['notice'] = var16;
            var10['ctaLabel'] = var15;
            var10['onClick'] = var14;
            var10['submitting'] = var13;
            var10 = var12.bind(var4)(var11, var10);
            var2['children'] = var10;
            var1 = var8.bind(var4)(var3, var2);
case 9:
            return var1;
case 2:
            var3 = _closure1_slot11;
            var2 = _closure1_slot6;
            var1 = {};
            var8 = var6.statusNoticeContainer;
            var6 = new Array(2);
            var6[0] = var8;
            var6[1] = var7;
            var1['style'] = var6;
            var7 = _closure1_slot11;
            var6 = _closure1_slot1;
            var8 = _closure1_slot3;
            var5 = 9;
            var5 = var8[var5];
            var6 = var6.bind(var4)(var5);
            var5 = {};
            var8 = var9.getAnyErrorMessage;
            var8 = var8.bind(var9)();
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var4 = function SectionContainer(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var14 = var1.title;
            var6 = var1.children;
            var10 = var1.footer;
            var5 = var1.onLayout;
            var1 = _closure1_slot14;
            var4 = undefined;
            var11 = var1.bind(var4)();
            var3 = _closure1_slot12;
            var2 = _closure1_slot6;
            var1 = {};
            var1['onLayout'] = var5;
            var5 = var11.container;
            var1['style'] = var5;
            var9 = _closure1_slot11;
            var8 = _closure1_slot6;
            var5 = {};
            var12 = var11.divider;
            var5['style'] = var12;
            var8 = var9.bind(var4)(var8, var5);
            var5 = new Array(4);
            var5[0] = var8;
            var13 = _closure1_slot11;
            var9 = _closure1_slot0;
            var8 = _closure1_slot3;
            var12 = 12;
            var8 = var8[var12];
            var8 = var9.bind(var4)(var8);
            var9 = var8.Text;
            var8 = {'style': null, 'variant': 'heading-lg/extrabold', 'color': 'header-primary'};
            var15 = var11.sectionTitle;
            var8['style'] = var15;
            var8['children'] = var14;
            var8 = var13.bind(var4)(var9, var8);
            var5[1] = var8;
            var5[2] = var6;
            var6 = null;
            var6 = var6 != var10;
            if(!var6) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var9 = _closure1_slot11;
            var8 = _closure1_slot0;
            var7 = _closure1_slot3;
            var7 = var7[var12];
            var7 = var8.bind(var4)(var7);
            var8 = var7.Text;
            var7 = {'style': null, 'variant': 'text-sm/normal', 'color': 'text-normal'};
            var11 = var11.sectionFooter;
            var7['style'] = var11;
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 11:
            var5[3] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot16 = var4;
    var1 = function StartEarningButton(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var2 = var1.guildId;
            var15 = var1.isTermsAccepted;
            var _closure2_slot0 = var15;
            var3 = var1.setTermsAccepted;
            var _closure2_slot1 = var3;
            var17 = var1.eligibleForMonetization;
            var9 = var1.eligibility;
            var _closure2_slot2 = var9;
            var12 = var1.acceptTermsCheckboxText;
            var6 = var1.style;
            var11 = var1.isFab;
            var4 = undefined;
            if(!(var11 === var4)) { _fun0003_ip = 13; continue _fun0003 }
case 5:
            var11 = false;
case 13:
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var1 = _closure1_slot14;
            var21 = var1.bind(var4)();
            _closure2_slot3 = var21;
            var3 = _closure1_slot1;
            var5 = _closure1_slot3;
            var1 = 13;
            var1 = var5[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.bind(var4)(var2);
            var18 = var1.canSubmitAcceptance;
            var20 = var1.error;
            var19 = var1.loading;
            var2 = var1.submitAcceptTermsRequest;
            _closure2_slot4 = var2;
            var7 = _closure1_slot0;
            var1 = 14;
            var1 = var5[var1];
            var3 = var7.bind(var4)(var1);
            var1 = var3.useNavigation;
            var1 = var1.bind(var3)();
            _closure2_slot5 = var1;
            var13 = _closure1_slot5;
            var8 = var13.useCallback;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var2 = _closure2_slot4;
                var1 = undefined;
                var1 = var2.bind(var1)();
                return var1;
            };
            var13 = var8.bind(var13)(var2, var3);
            var8 = _closure1_slot5;
            var3 = var8.useCallback;
            var2 = new Array(2);
            var2[0] = var9;
            var2[1] = var1;
            var1 = function() {
                var3 = _closure1_slot1;
                var7 = _closure1_slot3;
                var2 = 15;
                var2 = var7[var2];
                var6 = undefined;
                var5 = var3.bind(var6)(var2);
                var4 = var5.openLazy;
                var2 = _closure1_slot0;
                var1 = 17;
                var1 = var7[var1];
                var8 = var2.bind(var6)(var1);
                var1 = 16;
                var3 = var7[var1];
                var1 = var7.paths;
                var3 = var8.bind(var6)(var3, var1);
                var1 = 18;
                var1 = var7[var1];
                var1 = var2.bind(var6)(var1);
                var2 = var1.ELIGIBILITY_ACTION_SHEET_KEY;
                var1 = {};
                var6 = _closure2_slot2;
                var1['eligibility'] = var6;
                var6 = function onRequireModeratorMFAClick() {
                    var3 = _closure2_slot5;
                    var2 = var3.push;
                    var1 = _closure1_slot9;
                    var1 = var1.SECURITY;
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                };
                var1['onRequireModeratorMFAClick'] = var6;
                var1 = var4.bind(var5)(var3, var2, var1);
                return var1;
            };
            var9 = var3.bind(var8)(var1, var2);
            var3 = _closure1_slot11;
            var8 = 19;
            var1 = var5[var8];
            var1 = var7.bind(var4)(var1);
            var2 = var1.FormRow;
            var1 = {};
            var14 = var21.tos;
            var1['style'] = var14;
            var22 = _closure1_slot11;
            var8 = var5[var8];
            var8 = var7.bind(var4)(var8);
            var8 = var8.FormRow;
            var14 = var8.Checkbox;
            var8 = {};
            var8['selected'] = var15;
            var8 = var22.bind(var4)(var14, var8);
            var1['leading'] = var8;
            var8 = _closure1_slot11;
            var22 = 12;
            var5 = var5[var22];
            var5 = var7.bind(var4)(var5);
            var7 = var5.Text;
            var5 = {'variant': 'text-xs/normal', 'color': 'header-secondary'};
            var5['children'] = var12;
            var5 = var8.bind(var4)(var7, var5);
            var1['label'] = var5;
            var5 = function onPress() {
                var3 = _closure2_slot1;
                var1 = _closure2_slot0;
                var2 = !var1;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var1['onPress'] = var5;
            var5 = var3.bind(var4)(var2, var1);
            var3 = _closure1_slot12;
            var2 = _closure1_slot6;
            var1 = {};
            var1['style'] = var6;
            var6 = var17;
            if(!var6) { _fun0003_ip = 14; continue _fun0003 }
case 15:
            var8 = true;
            var7 = var8 === var11;
            if(!var7) { _fun0003_ip = 16; continue _fun0003 }
case 17:
            var7 = !var15;
case 16:
            if(var7) { _fun0003_ip = 18; continue _fun0003 }
case 19:
            var7 = var8 !== var11;
case 18:
            var6 = var7;
case 14:
            if(!var6) { _fun0003_ip = 20; continue _fun0003 }
case 21:
            var6 = var5;
case 20:
            var5 = new Array(2);
            var5[0] = var6;
            if(var17) { _fun0003_ip = 22; continue _fun0003 }
case 23:
            var8 = _closure1_slot11;
            var12 = _closure1_slot1;
            var24 = _closure1_slot3;
            var11 = 20;
            var6 = var24[var11];
            var7 = var12.bind(var4)(var6);
            var6 = {};
            var23 = var21.startEarningButton;
            var14 = new Array(2);
            var14[0] = var23;
            var23 = var21.ineligibleButton;
            var14[1] = var23;
            var6['style'] = var14;
            var6['loading'] = var19;
            var11 = var24[var11];
            var11 = var12.bind(var4)(var11);
            var11 = var11.Colors;
            var11 = var11.BRAND;
            var6['color'] = var11;
            var23 = _closure1_slot0;
            var11 = 10;
            var12 = var24[var11];
            var12 = var23.bind(var4)(var12);
            var14 = var12.intl;
            var12 = var14.string;
            var11 = var24[var11];
            var11 = var23.bind(var4)(var11);
            var11 = var11.t;
            var11 = var11.NL5ZNT;
            var11 = var12.bind(var14)(var11);
            var6['text'] = var11;
            var10 = function renderIcon() {
                var4 = _closure1_slot11;
                var6 = _closure1_slot1;
                var7 = _closure1_slot3;
                var5 = 22;
                var1 = var7[var5];
                var3 = undefined;
                var2 = var6.bind(var3)(var1);
                var1 = {};
                var8 = 23;
                var8 = var7[var8];
                var8 = var6.bind(var3)(var8);
                var1['source'] = var8;
                var8 = 8;
                var8 = var7[var8];
                var8 = var6.bind(var3)(var8);
                var8 = var8.unsafe_rawColors;
                var8 = var8.WHITE_500;
                var1['color'] = var8;
                var5 = var7[var5];
                var5 = var6.bind(var3)(var5);
                var5 = var5.Sizes;
                var5 = var5.SMALL_20;
                var1['size'] = var5;
                var5 = _closure2_slot3;
                var5 = var5.ineligibleButtonIcon;
                var1['style'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var6['renderIcon'] = var10;
            var6['onPress'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            _fun0003_ip = 24; continue _fun0003;
case 22:
            var9 = _closure1_slot12;
            var8 = _closure1_slot13;
            var7 = {};
            var12 = _closure1_slot11;
            var11 = _closure1_slot1;
            var10 = _closure1_slot3;
            var14 = 20;
            var10 = var10[var14];
            var11 = var11.bind(var4)(var10);
            var10 = {};
            var23 = var21.startEarningButton;
            var21 = new Array(1);
            var21[0] = var23;
            var10['style'] = var21;
            var10['loading'] = var19;
            var15 = !var15;
            if(var15) { _fun0003_ip = 25; continue _fun0003 }
case 26:
            var15 = !var18;
case 25:
            if(var15) { _fun0003_ip = 27; continue _fun0003 }
case 28:
            var15 = !var17;
case 27:
            var10['disabled'] = var15;
            var15 = _closure1_slot1;
            var19 = _closure1_slot3;
            var14 = var19[var14];
            var14 = var15.bind(var4)(var14);
            var14 = var14.Colors;
            var14 = var14.BRAND;
            var10['color'] = var14;
            var18 = _closure1_slot0;
            var14 = 10;
            var15 = var19[var14];
            var15 = var18.bind(var4)(var15);
            var17 = var15.intl;
            var15 = var17.string;
            var14 = var19[var14];
            var14 = var18.bind(var4)(var14);
            var14 = var14.t;
            var14 = var14.NL5ZNT;
            var14 = var15.bind(var17)(var14);
            var10['text'] = var14;
            var10['onPress'] = var13;
            var11 = var12.bind(var4)(var11, var10);
            var10 = new Array(2);
            var10[0] = var11;
            var11 = null;
            var11 = var11 != var20;
            if(!var11) { _fun0003_ip = 29; continue _fun0003 }
case 30:
            var14 = _closure1_slot12;
            var13 = _closure1_slot13;
            var12 = {};
            var21 = _closure1_slot11;
            var17 = _closure1_slot1;
            var19 = _closure1_slot3;
            var15 = 21;
            var15 = var19[var15];
            var18 = var17.bind(var4)(var15);
            var15 = {};
            var15['size'] = var22;
            var18 = var21.bind(var4)(var18, var15);
            var15 = new Array(2);
            var15[0] = var18;
            var18 = _closure1_slot11;
            var16 = 9;
            var16 = var19[var16];
            var17 = var17.bind(var4)(var16);
            var16 = {};
            var19 = var20.getAnyErrorMessage;
            var19 = var19.bind(var20)();
            var16['children'] = var19;
            var16 = var18.bind(var4)(var17, var16);
            var15[1] = var16;
            var12['children'] = var15;
            var11 = var14.bind(var4)(var13, var12);
case 29:
            var10[1] = var11;
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 24:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot17 = var1;
    var2 = function MarketingSections(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var9 = var1.onboardingMarketing;
            var3 = var1.onHowItWorksLayoutChange;
            var8 = _closure1_slot11;
            var7 = _closure1_slot16;
            var4 = {};
            var14 = _closure1_slot0;
            var12 = _closure1_slot3;
            var1 = 10;
            var10 = var12[var1];
            var5 = undefined;
            var10 = var14.bind(var5)(var10);
            var13 = var10.intl;
            var11 = var13.string;
            var10 = var12[var1];
            var10 = var14.bind(var5)(var10);
            var10 = var10.t;
            var10 = var10.R9rNIi;
            var10 = var11.bind(var13)(var10);
            var4['title'] = var10;
            var10 = var12[var1];
            var10 = var14.bind(var5)(var10);
            var15 = var10.intl;
            var13 = var15.format;
            var10 = var12[var1];
            var10 = var14.bind(var5)(var10);
            var10 = var10.t;
            var11 = var10.oxW30N;
            var10 = {};
            var16 = _closure1_slot8;
            var10['creatorPortalUrl'] = var16;
            var10 = var13.bind(var15)(var11, var10);
            var4['footer'] = var10;
            var4['onLayout'] = var3;
            var13 = _closure1_slot11;
            var10 = _closure1_slot1;
            var3 = 24;
            var3 = var12[var3];
            var11 = var10.bind(var5)(var3);
            var3 = {};
            var3 = var13.bind(var5)(var11, var3);
            var4['children'] = var3;
            var3 = _closure1_slot10;
            var3 = var3.HOW_IT_WORKS;
            var8 = var8.bind(var5)(var7, var4, var3);
            var _closure2_slot0 = var8;
            var4 = _closure1_slot11;
            var3 = {};
            var11 = var12[var1];
            var11 = var14.bind(var5)(var11);
            var13 = var11.intl;
            var11 = var13.string;
            var1 = var12[var1];
            var1 = var14.bind(var5)(var1);
            var1 = var1.t;
            var1 = var1.1QHJaW;
            var1 = var11.bind(var13)(var1);
            var3['title'] = var1;
            var11 = _closure1_slot11;
            var1 = 25;
            var1 = var12[var1];
            var10 = var10.bind(var5)(var1);
            var1 = {};
            var1 = var11.bind(var5)(var10, var1);
            var3['children'] = var1;
            var1 = _closure1_slot10;
            var1 = var1.BENEFITS;
            var7 = var4.bind(var5)(var7, var3, var1);
            var _closure2_slot1 = var7;
            var3 = null;
            var4 = var3 == var9;
            var1 = undefined;
            if(var4) { _fun0004_ip = 31; continue _fun0004 }
case 32:
            var1 = var9.sections;
case 31:
            if(!(var3 != var1)) { _fun0004_ip = 33; continue _fun0004 }
case 34:
            var4 = _closure1_slot11;
            var3 = _closure1_slot13;
            var1 = {};
            var10 = var9.sections;
            var9 = var10.map;
            var6 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var9 = arg1;
                    var3 = var9.type;
                    var2 = _closure1_slot10;
                    var2 = var2.HOW_IT_WORKS;
                    if(!(var2 !== var3)) { _fun0005_ip = 35; continue _fun0005 }
case 36:
                    var2 = _closure1_slot10;
                    var2 = var2.BENEFITS;
                    if(!(var2 !== var3)) { _fun0005_ip = 37; continue _fun0005 }
case 38:
                    var2 = _closure1_slot10;
                    var2 = var2.OTHER_CREATORS;
                    if(!(var2 !== var3)) { _fun0005_ip = 39; continue _fun0005 }
case 40:
                    var2 = undefined;
                    return var2;
case 39:
                    var5 = _closure1_slot11;
                    var4 = _closure1_slot16;
                    var3 = {};
                    var11 = _closure1_slot0;
                    var10 = _closure1_slot3;
                    var6 = 10;
                    var7 = var10[var6];
                    var2 = undefined;
                    var7 = var11.bind(var2)(var7);
                    var8 = var7.intl;
                    var7 = var8.string;
                    var6 = var10[var6];
                    var6 = var11.bind(var2)(var6);
                    var6 = var6.t;
                    var6 = var6.tJp+QU;
                    var6 = var7.bind(var8)(var6);
                    var3['title'] = var6;
                    var8 = _closure1_slot11;
                    var7 = _closure1_slot1;
                    var6 = 26;
                    var6 = var10[var6];
                    var7 = var7.bind(var2)(var6);
                    var6 = {};
                    var9 = var9.creators;
                    var6['highlightedCreators'] = var9;
                    var6 = var8.bind(var2)(var7, var6);
                    var3['children'] = var6;
                    var1 = _closure1_slot10;
                    var1 = var1.OTHER_CREATORS;
                    var1 = var5.bind(var2)(var4, var3, var1);
                    return var1;
case 37:
                    var1 = _closure2_slot1;
                    return var1;
case 35:
                    var1 = _closure2_slot0;
                    return var1;
                }
            };
            var6 = var9.bind(var10)(var6);
            var1['children'] = var6;
            var1 = var4.bind(var5)(var3, var1);
            _fun0004_ip = 41; continue _fun0004;
case 33:
            var4 = _closure1_slot12;
            var3 = _closure1_slot13;
            var2 = {};
            var6 = new Array(2);
            var6[0] = var8;
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 41:
            return var1;
        }
    };
    var _closure1_slot18 = var2;
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
    var6 = var14.bind(var1)(var6);
    var _closure1_slot4 = var6;
    var12 = 1;
    var6 = var8[var12];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot5 = var6;
    var6 = 2;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var9 = var6.View;
    var _closure1_slot6 = var9;
    var6 = var6.ScrollView;
    var _closure1_slot7 = var6;
    var6 = 3;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var6 = var6.CREATOR_REVENUE_PORTAL_URL;
    var _closure1_slot8 = var6;
    var6 = 4;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var6 = var6.GuildSettingsSections;
    var _closure1_slot9 = var6;
    var6 = 5;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var6 = var6.CreatorMonetizationOnboardingMarketingSection;
    var _closure1_slot10 = var6;
    var6 = 6;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var9 = var6.jsx;
    var _closure1_slot11 = var9;
    var9 = var6.jsxs;
    var _closure1_slot12 = var9;
    var6 = var6.Fragment;
    var _closure1_slot13 = var6;
    var6 = 7;
    var6 = var8[var6];
    var10 = var7.bind(var1)(var6);
    var9 = var10.createStyles;
    var6 = {};
    var11 = {};
    var11['flex'] = var12;
    var6['container'] = var11;
    var11 = {'flex': 1, 'flexDirection': 'row'};
    var6['horizontalContainer'] = var11;
    var12 = 24;
    var11 = {'flex': 1, 'padding': 24};
    var6['contentContainer'] = var11;
    var11 = {'resizeMode': 'cover', 'width': '100%'};
    var6['heroImage'] = var11;
    var11 = {};
    var13 = 8;
    var11['marginTop'] = var13;
    var6['subtitle'] = var11;
    var11 = {};
    var15 = var8[var13];
    var15 = var14.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.BACKGROUND_MOBILE_SECONDARY;
    var11['backgroundColor'] = var15;
    var15 = var8[var13];
    var15 = var14.bind(var1)(var15);
    var15 = var15.radii;
    var15 = var15.sm;
    var11['borderRadius'] = var15;
    var15 = 10;
    var11['marginTop'] = var15;
    var6['tos'] = var11;
    var11 = {'height': 52, 'marginTop': 12, 'paddingVertical': 16};
    var6['startEarningButton'] = var11;
    var11 = {};
    var15 = 14;
    var11['marginTop'] = var15;
    var6['startEarningButtonContainer'] = var11;
    var11 = {};
    var11['marginHorizontal'] = var12;
    var6['startEarningFabContainer'] = var11;
    var11 = {'width': '100%', 'height': 0.8, 'marginTop': 36};
    var12 = 36;
    var13 = var8[var13];
    var13 = var14.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.INTERACTIVE_MUTED;
    var11['backgroundColor'] = var13;
    var6['divider'] = var11;
    var11 = {'marginTop': 36, 'marginBottom': 10};
    var6['sectionTitle'] = var11;
    var11 = {};
    var11['marginTop'] = var12;
    var6['sectionFooter'] = var11;
    var11 = {};
    var12 = '#EB5D30';
    var11['backgroundColor'] = var12;
    var6['ineligibleButton'] = var11;
    var11 = {'position': 'absolute', 'top': 16, 'start': 20};
    var6['ineligibleButtonIcon'] = var11;
    var11 = {'marginHorizontal': 0, 'marginTop': 14};
    var6['statusNoticeContainer'] = var11;
    var6 = var9.bind(var10)(var6);
    var _closure1_slot14 = var6;
    var6 = 39;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/guild_role_subscriptions/native/guild_settings/welcome/GuildSettingsRoleSubscriptionWelcomeView.tsx';
    var6 = var7.bind(var8)(var6);
    var5 = function GuildSettingsRoleSubscriptionWelcomeView(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var1 = arg1;
            var17 = var1.guild;
            var5 = undefined;
            var _closure2_slot2 = var5;
            var _closure2_slot3 = var5;
            var _closure2_slot4 = var5;
            var _closure2_slot5 = var5;
            var1 = _closure1_slot14;
            var18 = var1.bind(var5)();
            var25 = _closure1_slot0;
            var27 = _closure1_slot3;
            var1 = 14;
            var1 = var27[var1];
            var3 = var25.bind(var5)(var1);
            var1 = var3.useNavigation;
            var3 = var1.bind(var3)();
            var19 = _closure1_slot1;
            var1 = 27;
            var1 = var27[var1];
            var1 = var19.bind(var5)(var1);
            var33 = var1.bind(var5)(var17);
            var23 = var33.isGuildOwner;
            var9 = var33.eligibilityLoading;
            var4 = var33.eligibilityError;
            var13 = var33.eligibility;
            var1 = var33.refreshEligibility;
            var _closure2_slot0 = var1;
            var14 = var33.eligibleForMonetization;
            var12 = var33.acceptTermsCheckboxText;
            var8 = var33.wasRejectedInV1;
            var6 = 28;
            var6 = var27[var6];
            var7 = var25.bind(var5)(var6);
            var6 = var7.useCreatorMonetizationIneligibleReasons;
            var7 = var6.bind(var7)(var13);
            var6 = 29;
            var6 = var27[var6];
            var11 = var19.bind(var5)(var6);
            var6 = var17.id;
            var11 = var11.bind(var5)(var6);
            var6 = var11.isLoading;
            var31 = var11.creatorMonetizationOnboardingMarketing;
            var15 = _closure1_slot5;
            var11 = var15.useState;
            var26 = false;
            var15 = var11.bind(var15)(var26);
            var11 = _closure1_slot4;
            var24 = 2;
            var11 = var11.bind(var5)(var15, var24);
            var21 = 0;
            var16 = var11[var21];
            var20 = 1;
            var15 = var11[var20];
            var28 = _closure1_slot5;
            var22 = var28.useRef;
            var11 = true;
            var34 = var22.bind(var28)(var11);
            var _closure2_slot1 = var34;
            var22 = 30;
            var22 = var27[var22];
            var28 = var25.bind(var5)(var22);
            var22 = var28.useFocusEffect;
            var32 = _closure1_slot5;
            var30 = var32.useCallback;
            var29 = new Array(2);
            var29[0] = var34;
            var29[1] = var1;
            var1 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var2 = var2.current;
                    if(var2) { _fun0007_ip = 42; continue _fun0007 }
case 43:
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
case 42:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var30.bind(var32)(var1, var29);
            var1 = var22.bind(var28)(var1);
            var29 = _closure1_slot5;
            var28 = var29.useEffect;
            var22 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var2 = var2.current;
                    if(!var2) { _fun0008_ip = 44; continue _fun0008 }
case 43:
                    var2 = _closure2_slot1;
                    var1 = false;
                    var2['current'] = var1;
case 44:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = new Array(0);
            var1 = var28.bind(var29)(var22, var1);
            var1 = 31;
            var1 = var27[var1];
            var22 = var19.bind(var5)(var1);
            var19 = {};
            var1 = 32;
            var28 = var27[var1];
            var28 = var25.bind(var5)(var28);
            var28 = var28.ImpressionTypes;
            var28 = var28.PANE;
            var19['type'] = var28;
            var1 = var27[var1];
            var1 = var25.bind(var5)(var1);
            var1 = var1.ImpressionNames;
            var1 = var1.ENABLE_CREATOR_MONETIZATION_ACCEPT_TERMS_LANDING;
            var19['name'] = var1;
            var1 = {};
            var25 = var17.id;
            var1['guild_id'] = var25;
            var1['is_owner'] = var23;
            var1['is_eligible'] = var14;
            var1['ineligible_reasons'] = var7;
            var19['properties'] = var1;
            var7 = {};
            var23 = var17.id;
            var1 = null;
            var23 = var1 == var23;
            if(var23) { _fun0006_ip = 45; continue _fun0006 }
case 46:
            var23 = var1 == var13;
case 45:
            var7['disableTrack'] = var23;
            var7 = var22.bind(var5)(var19, var7);
            var19 = _closure1_slot5;
            var7 = var19.useState;
            var7 = var7.bind(var19)(var26);
            var22 = _closure1_slot4;
            var19 = var22.bind(var5)(var7, var24);
            var7 = var19[var21];
            var23 = var19[var20];
            _closure2_slot2 = var23;
            var25 = _closure1_slot5;
            var19 = var25.useRef;
            var27 = var19.bind(var25)(var1);
            _closure2_slot3 = var27;
            var25 = _closure1_slot5;
            var19 = var25.useState;
            var19 = var19.bind(var25)();
            var19 = var22.bind(var5)(var19, var24);
            var22 = var19[var21];
            _closure2_slot4 = var22;
            var19 = var19[var20];
            _closure2_slot5 = var19;
            var24 = _closure1_slot5;
            var21 = var24.useCallback;
            var20 = new Array(1);
            var20[0] = var19;
            var19 = function(arg1) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var1 = arg1;
                    var1 = var1.nativeEvent;
                    var1 = var1.layout;
                    var1 = var1.y;
                    var _closure3_slot0 = var1;
                    var1 = _closure2_slot3;
                    var6 = null;
                    var3 = var6 == var1;
                    var1 = undefined;
                    var4 = undefined;
                    if(var3) { _fun0009_ip = 47; continue _fun0009 }
case 48:
                    var5 = _closure2_slot3;
                    var5 = var5.current;
                    var3 = var6 == var5;
                    var4 = var5;
case 47:
                    if(var3) { _fun0009_ip = 49; continue _fun0009 }
case 50:
                    var3 = var4.measure;
                    var2 = function(arg1, arg2, arg3, arg4, arg5, arg6) {
                        var3 = _closure2_slot5;
                        var4 = _closure3_slot0;
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot3;
                        var2 = 33;
                        var5 = var7[var2];
                        var1 = undefined;
                        var5 = var6.bind(var1)(var5);
                        var8 = var5.STATUS_BAR_HEIGHT;
                        var5 = arg6;
                        var5 = var5 - var8;
                        var2 = var7[var2];
                        var2 = var6.bind(var1)(var2);
                        var2 = var2.NAV_BAR_HEIGHT;
                        var2 = var5 - var2;
                        var2 = var4 + var2;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var2 = var3.bind(var4)(var2);
case 49:
                    return var1;
                }
            };
            var30 = var21.bind(var24)(var19, var20);
            var21 = _closure1_slot5;
            var20 = var21.useCallback;
            var19 = new Array(2);
            var19[0] = var23;
            var19[1] = var22;
            var10 = function(arg1) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var1 = arg1;
                    var1 = var1.nativeEvent;
                    var2 = var1.contentOffset;
                    var4 = _closure2_slot4;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0010_ip = 51; continue _fun0010 }
case 36:
                    var3 = _closure2_slot2;
                    var2 = var2.y;
                    var1 = _closure2_slot4;
                    var2 = var2 > var1;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
case 51:
                    var1 = undefined;
                    return var1;
                }
            };
            var20 = var20.bind(var21)(var10, var19);
            if(var9) { _fun0006_ip = 52; continue _fun0006 }
case 53:
            if(!(var1 != var13)) { _fun0006_ip = 52; continue _fun0006 }
case 54:
            if(var6) { _fun0006_ip = 52; continue _fun0006 }
case 55:
            if(!(var1 != var4)) { _fun0006_ip = 56; continue _fun0006 }
case 57:
            var4 = _closure1_slot2;
            var21 = _closure1_slot3;
            var1 = 35;
            var1 = var21[var1];
            var6 = var4.bind(var5)(var1);
            var4 = var6.presentFailedToast;
            var19 = _closure1_slot0;
            var1 = 10;
            var9 = var21[var1];
            var9 = var19.bind(var5)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var1 = var21[var1];
            var1 = var19.bind(var5)(var1);
            var1 = var1.t;
            var1 = var1.R0RpRU;
            var1 = var9.bind(var10)(var1);
            var1 = var4.bind(var6)(var1);
            var1 = var3.pop;
            var1 = var1.bind(var3)();
case 56:
            var4 = _closure1_slot12;
            var36 = _closure1_slot0;
            var37 = _closure1_slot3;
            var19 = 36;
            var1 = var37[var19];
            var1 = var36.bind(var5)(var1);
            var3 = var1.SafeAreaPaddingView;
            var1 = {};
            var1['bottom'] = var11;
            var6 = var18.container;
            var1['style'] = var6;
            var10 = _closure1_slot11;
            var9 = _closure1_slot7;
            var6 = {};
            var6['onScroll'] = var20;
            var6['scrollEventThrottle'] = var19;
            var21 = _closure1_slot12;
            var20 = _closure1_slot6;
            var19 = {};
            var22 = var18.container;
            var19['style'] = var22;
            var24 = _closure1_slot11;
            var28 = _closure1_slot1;
            var22 = 37;
            var22 = var37[var22];
            var23 = var28.bind(var5)(var22);
            var22 = {};
            var25 = 38;
            var25 = var37[var25];
            var25 = var28.bind(var5)(var25);
            var22['source'] = var25;
            var25 = 'scale';
            var22['resizeMethod'] = var25;
            var25 = var18.heroImage;
            var22['style'] = var25;
            var23 = var24.bind(var5)(var23, var22);
            var22 = new Array(2);
            var22[0] = var23;
            var25 = _closure1_slot12;
            var24 = _closure1_slot6;
            var23 = {};
            var23['ref'] = var27;
            var27 = var18.contentContainer;
            var23['style'] = var27;
            var23['collapsable'] = var26;
            var29 = _closure1_slot11;
            var27 = 12;
            var26 = var37[var27];
            var26 = var36.bind(var5)(var26);
            var28 = var26.Text;
            var26 = {'variant': 'heading-xl/extrabold', 'color': 'header-primary'};
            var32 = 10;
            var34 = var37[var32];
            var34 = var36.bind(var5)(var34);
            var38 = var34.intl;
            var35 = var38.string;
            var34 = var37[var32];
            var34 = var36.bind(var5)(var34);
            var34 = var34.t;
            var34 = var34.QYqDQ0;
            var34 = var35.bind(var38)(var34);
            var26['children'] = var34;
            var28 = var29.bind(var5)(var28, var26);
            var26 = new Array(4);
            var26[0] = var28;
            var29 = _closure1_slot11;
            var27 = var37[var27];
            var27 = var36.bind(var5)(var27);
            var28 = var27.Text;
            var27 = {'style': null, 'variant': 'text-sm/normal', 'color': 'header-secondary'};
            var34 = var18.subtitle;
            var27['style'] = var34;
            var34 = var37[var32];
            var34 = var36.bind(var5)(var34);
            var35 = var34.intl;
            var34 = var35.string;
            var32 = var37[var32];
            var32 = var36.bind(var5)(var32);
            var32 = var32.t;
            var32 = var32.41wkMT;
            var32 = var34.bind(var35)(var32);
            var27['children'] = var32;
            var27 = var29.bind(var5)(var28, var27);
            var26[1] = var27;
            var32 = _closure1_slot11;
            if(var8) { _fun0006_ip = 58; continue _fun0006 }
case 59:
            var28 = _closure1_slot17;
            var27 = {};
            var29 = var18.startEarningButtonContainer;
            var27['style'] = var29;
            var29 = var17.id;
            var27['guildId'] = var29;
            var27['isTermsAccepted'] = var16;
            var27['setTermsAccepted'] = var15;
            var27['eligibleForMonetization'] = var14;
            var27['eligibility'] = var13;
            var27['acceptTermsCheckboxText'] = var12;
            var27 = var32.bind(var5)(var28, var27);
            _fun0006_ip = 60; continue _fun0006;
case 58:
            var29 = _closure1_slot15;
            var28 = {};
            var34 = var18.statusNoticeContainer;
            var28['style'] = var34;
            var40 = var28;
            var39 = var33;
            var33 = copyDataProperties(var40, var39);
            var27 = var32.bind(var5)(var29, var28);
case 60:
            var26[2] = var27;
            var29 = _closure1_slot11;
            var28 = _closure1_slot18;
            var27 = {};
            var27['onboardingMarketing'] = var31;
            var27['onHowItWorksLayoutChange'] = var30;
            var27 = var29.bind(var5)(var28, var27);
            var26[3] = var27;
            var23['children'] = var26;
            var23 = var25.bind(var5)(var24, var23);
            var22[1] = var23;
            var19['children'] = var22;
            var19 = var21.bind(var5)(var20, var19);
            var6['children'] = var19;
            var9 = var10.bind(var5)(var9, var6);
            var6 = new Array(2);
            var6[0] = var9;
            if(!var7) { _fun0006_ip = 61; continue _fun0006 }
case 62:
            var7 = var14;
case 61:
            if(!var7) { _fun0006_ip = 63; continue _fun0006 }
case 64:
            var7 = !var8;
case 63:
            if(!var7) { _fun0006_ip = 65; continue _fun0006 }
case 66:
            var10 = _closure1_slot11;
            var9 = _closure1_slot17;
            var8 = {};
            var18 = var18.startEarningFabContainer;
            var8['style'] = var18;
            var17 = var17.id;
            var8['guildId'] = var17;
            var8['isTermsAccepted'] = var16;
            var8['setTermsAccepted'] = var15;
            var8['eligibleForMonetization'] = var14;
            var8['eligibility'] = var13;
            var8['acceptTermsCheckboxText'] = var12;
            var8['isFab'] = var11;
            var7 = var10.bind(var5)(var9, var8);
case 65:
            var6[1] = var7;
            var1['children'] = var6;
            var1 = var4.bind(var5)(var3, var1);
            _fun0006_ip = 67; continue _fun0006;
case 52:
            var4 = _closure1_slot11;
            var3 = _closure1_slot1;
            var6 = _closure1_slot3;
            var2 = 34;
            var2 = var6[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var1 = var4.bind(var5)(var3, var2);
case 67:
            return var1;
        }
    };
    var3['default'] = var5;
    var3['SectionContainer'] = var4;
    var3['MarketingSections'] = var2;
    return var1;
})();