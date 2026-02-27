// app/modules/premium/native/PremiumTabBadge.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var1 = function TrialOfferBadge(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var1 = var2.acked;
            var9 = var2.badgeCopy;
            var10 = var2.ackedBadgeCopy;
            var4 = var2.gradientColors;
            var12 = var2.componentId;
            var2 = _closure1_slot10;
            var5 = undefined;
            var11 = var2.bind(var5)();
            var3 = _closure1_slot1;
            var14 = _closure1_slot2;
            var2 = 8;
            var2 = var14[var2];
            var6 = var3.bind(var5)(var2);
            var3 = {};
            var13 = _closure1_slot0;
            var2 = 9;
            var8 = var14[var2];
            var8 = var13.bind(var5)(var8);
            var8 = var8.ImpressionTypes;
            var8 = var8.VIEW;
            var3['type'] = var8;
            var2 = var14[var2];
            var2 = var13.bind(var5)(var2);
            var2 = var2.ImpressionNames;
            var2 = var2.PREMIUM_MARKETING_COMPONENT;
            var3['name'] = var2;
            var2 = {};
            var8 = 10;
            var8 = var14[var8];
            var8 = var13.bind(var5)(var8);
            var8 = var8.MarketingComponentType;
            var8 = var8.PREMIUM_TAB;
            var2['component_type'] = var8;
            var2['component_id'] = var12;
            var3['properties'] = var2;
            var2 = {};
            var8 = null;
            var8 = var8 == var12;
            var2['disableTrack'] = var8;
            var2 = var6.bind(var5)(var3, var2);
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = _closure1_slot8;
            var2 = _closure1_slot1;
            var12 = _closure1_slot2;
            var1 = 14;
            var1 = var12[var1];
            var2 = var2.bind(var5)(var1);
            var1 = {};
            var6 = var11.tag;
            var1['style'] = var6;
            var1['colors'] = var4;
            var6 = _closure1_slot0;
            var4 = 15;
            var8 = var12[var4];
            var8 = var6.bind(var5)(var8);
            var8 = var8.HorizontalGradient;
            var8 = var8.START;
            var1['start'] = var8;
            var4 = var12[var4];
            var4 = var6.bind(var5)(var4);
            var4 = var4.HorizontalGradient;
            var4 = var4.END;
            var1['end'] = var4;
            var8 = _closure1_slot8;
            var4 = 13;
            var4 = var12[var4];
            var4 = var6.bind(var5)(var4);
            var6 = var4.Text;
            var4 = {'variant': 'eyebrow', 'color': 'always-white'};
            var12 = var11.text;
            var4['style'] = var12;
            var4['children'] = var9;
            var4 = var8.bind(var5)(var6, var4);
            var1['children'] = var4;
            var1 = var3.bind(var5)(var2, var1);
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var4 = _closure1_slot9;
            var3 = _closure1_slot4;
            var2 = {};
            var6 = var11.acked;
            var2['style'] = var6;
            var9 = _closure1_slot8;
            var14 = _closure1_slot1;
            var12 = _closure1_slot2;
            var13 = 11;
            var6 = var12[var13];
            var8 = var14.bind(var5)(var6);
            var6 = {};
            var15 = 12;
            var15 = var12[var15];
            var15 = var14.bind(var5)(var15);
            var6['source'] = var15;
            var13 = var12[var13];
            var13 = var14.bind(var5)(var13);
            var13 = var13.Sizes;
            var13 = var13.EXTRA_SMALL;
            var6['size'] = var13;
            var13 = var11.icon;
            var13 = var13.color;
            var6['color'] = var13;
            var13 = var11.icon;
            var6['style'] = var13;
            var8 = var9.bind(var5)(var8, var6);
            var6 = new Array(2);
            var6[0] = var8;
            var9 = _closure1_slot8;
            var8 = _closure1_slot0;
            var7 = 13;
            var7 = var12[var7];
            var7 = var8.bind(var5)(var7);
            var8 = var7.Text;
            var7 = {'variant': 'eyebrow', 'color': 'interactive-text-default'};
            var11 = var11.text;
            var7['style'] = var11;
            var7['children'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 4:
            return var1;
        }
    };
    var _closure1_slot11 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var11.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var12 = 2;
    var4 = var6[var12];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.PREMIUM_TIER_2_REFERRAL_TRIAL_ID;
    var _closure1_slot6 = var7;
    var4 = var4.PremiumSubscriptionSKUs;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot8 = var7;
    var4 = var4.jsxs;
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'paddingVertical': 4, 'paddingHorizontal': 8};
    var10 = 7;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.round;
    var9['borderRadius'] = var13;
    var4['tag'] = var9;
    var9 = {'display': 'flex', 'minWidth': 16, 'minHeight': 16, 'paddingHorizontal': 8, 'justifyContent': 'center', 'alignItems': 'center', 'gap': 4, 'borderRadius': null, 'backgroundColor': '#FFFFFF'};
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.round;
    var9['borderRadius'] = var13;
    var4['referralBadge'] = var9;
    var9 = {'paddingVertical': 2, 'paddingHorizontal': 12, 'borderRadius': null, 'backgroundColor': null, 'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center', 'textAlignVertical': 'center'};
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.round;
    var9['borderRadius'] = var13;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BORDER_SUBTLE;
    var9['backgroundColor'] = var13;
    var4['acked'] = var9;
    var9 = {};
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BORDER_SUBTLE;
    var9['backgroundColor'] = var13;
    var4['ackedBadge'] = var9;
    var9 = {};
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.INTERACTIVE_TEXT_DEFAULT;
    var9['color'] = var13;
    var9['marginRight'] = var12;
    var4['icon'] = var9;
    var9 = {};
    var9['paddingBottom'] = var12;
    var4['text'] = var9;
    var9 = {'paddingVertical': 2, 'paddingHorizontal': 12, 'borderRadius': null, 'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center', 'textAlignVertical': 'center'};
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.radii;
    var10 = var10.round;
    var9['borderRadius'] = var10;
    var4['premiumDiscountBadge'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot10 = var4;
    var4 = 29;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/native/PremiumTabBadge.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function PremiumTabBadge() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = _closure1_slot10;
            var4 = undefined;
            var14 = var1.bind(var4)();
            var7 = _closure1_slot0;
            var1 = _closure1_slot2;
            var2 = 16;
            var2 = var1[var2];
            var3 = var7.bind(var4)(var2);
            var2 = var3.usePremiumTrialOffer;
            var12 = var2.bind(var3)();
            var2 = 17;
            var2 = var1[var2];
            var3 = var7.bind(var4)(var2);
            var2 = var3.usePremiumDiscountOffer;
            var22 = var2.bind(var3)();
            var2 = 18;
            var2 = var1[var2];
            var2 = var7.bind(var4)(var2);
            var5 = var2.AndroidUserDiscountExperiment;
            var3 = var5.useConfig;
            var2 = {};
            var23 = 'PremiumTabBadge';
            var2['location'] = var23;
            var2 = var3.bind(var5)(var2);
            var17 = var2.descriptiveBadgeEnabled;
            var2 = 19;
            var2 = var1[var2];
            var3 = var7.bind(var4)(var2);
            var2 = var3.useHasTier2Premium;
            var2 = var2.bind(var3)();
            var3 = 20;
            var3 = var1[var3];
            var5 = var7.bind(var4)(var3);
            var3 = var5.UNSAFE_useIsDismissibleContentDismissed;
            var6 = 21;
            var1 = var1[var6];
            var1 = var7.bind(var4)(var1);
            var1 = var1.DismissibleContent;
            var1 = var1.MOBILE_NITRO_HOME_SETTINGS_BADGE;
            var1 = var3.bind(var5)(var1);
            var1 = !var1;
            if(!var1) { _fun0002_ip = 5; continue _fun0002 }
case 6:
            var1 = var2;
case 5:
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 22;
            var3 = var7[var3];
            var9 = var5.bind(var4)(var3);
            var7 = var9.useStateFromStores;
            var3 = _closure1_slot5;
            var5 = new Array(1);
            var5[0] = var3;
            var3 = function() {
                var2 = _closure1_slot5;
                var1 = var2.getPremiumTypeSubscription;
                var1 = var1.bind(var2)();
                return var1;
            };
            var3 = var7.bind(var9)(var5, var3);
            var10 = null;
            var5 = var10 == var3;
            var9 = undefined;
            if(var5) { _fun0002_ip = 7; continue _fun0002 }
case 8:
            var9 = var3.trialId;
case 7:
            var3 = _closure1_slot6;
            var7 = _closure1_slot0;
            var5 = _closure1_slot2;
            var19 = 23;
            var5 = var5[var19];
            var7 = var7.bind(var4)(var5);
            var5 = var7.useSelectedDismissibleContent;
            if(!(var9 === var3)) { _fun0002_ip = 9; continue _fun0002 }
case 10:
            if(var1) { _fun0002_ip = 9; continue _fun0002 }
case 11:
            var9 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var6];
            var3 = var9.bind(var4)(var3);
            var3 = var3.DismissibleContent;
            var9 = var3.REFERRAL_TRIAL_MOBILE_NITRO_HOME_BADGE;
            var3 = new Array(1);
            var3[0] = var9;
            _fun0002_ip = 12; continue _fun0002;
case 9:
            var3 = new Array(0);
case 12:
            var21 = true;
            var5 = var5.bind(var7)(var3, var4, var21);
            var3 = _closure1_slot3;
            var18 = 2;
            var3 = var3.bind(var4)(var5, var18);
            var9 = 0;
            var13 = var3[var9];
            var15 = 1;
            var3 = var3[var15];
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var19];
            var5 = var5.bind(var4)(var3);
            var3 = var5.useSelectedDismissibleContent;
            if(var1) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            if(!var2) { _fun0002_ip = 13; continue _fun0002 }
case 15:
            var7 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var7.bind(var4)(var2);
            var2 = var2.DismissibleContent;
            var7 = var2.WHATS_NEW_TENURE_BADGE_REWARD;
            var2 = new Array(1);
            var2[0] = var7;
            _fun0002_ip = 16; continue _fun0002;
case 13:
            var2 = new Array(0);
case 16:
            var3 = var3.bind(var5)(var2, var4, var21);
            var2 = _closure1_slot3;
            var2 = var2.bind(var4)(var3, var18);
            var11 = var2[var9];
            var2 = var2[var15];
            var16 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 24;
            var2 = var7[var2];
            var3 = var16.bind(var4)(var2);
            var2 = var3.useIsEligibleSenderForReferralProgram;
            var3 = var2.bind(var3)();
            var2 = 25;
            var2 = var7[var2];
            var20 = var16.bind(var4)(var2);
            var5 = var20.useMobileReferralBadgeExperimentEnabled;
            var2 = {};
            var2['location'] = var23;
            var2 = var5.bind(var20)(var2);
            var5 = 26;
            var5 = var7[var5];
            var23 = var16.bind(var4)(var5);
            var20 = var23.usePromotionMarketingComponent;
            var5 = 10;
            var5 = var7[var5];
            var5 = var16.bind(var4)(var5);
            var5 = var5.MarketingComponentType;
            var5 = var5.PREMIUM_TAB;
            var5 = var20.bind(var23)(var5);
            var7 = var7[var19];
            var20 = var16.bind(var4)(var7);
            var19 = var20.useSelectedSnowflakeBoundDismissibleContent;
            var7 = var10 != var5;
            var16 = null;
            if(!var7) { _fun0002_ip = 17; continue _fun0002 }
case 18:
            var7 = var5.properties;
            var7 = var7.properties;
            var23 = var7.oneofKind;
            var7 = 'premiumTab';
            var16 = null;
            if(!(var7 === var23)) { _fun0002_ip = 17; continue _fun0002 }
case 19:
            var23 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var6];
            var7 = var23.bind(var4)(var7);
            var7 = var7.DismissibleContent;
            var16 = var7.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE;
case 17:
            var7 = var10 == var5;
            var23 = undefined;
            if(var7) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            var23 = var5.promotionId;
case 20:
            var24 = var10 != var23;
            var7 = '';
            if(!var24) { _fun0002_ip = 22; continue _fun0002 }
case 23:
            var7 = var23;
case 22:
            var29 = var20;
            var28 = var16;
            var27 = var7;
            var26 = undefined;
            var25 = true;
            var16 = var29[var19](var28, var27, var26, var25, var24);
            var7 = _closure1_slot3;
            var7 = var7.bind(var4)(var16, var18);
            var9 = var7[var9];
            var7 = var7[var15];
            if(!(var10 != var5)) { _fun0002_ip = 24; continue _fun0002 }
case 25:
            var7 = var5.properties;
            var7 = var7.properties;
            var15 = var7.oneofKind;
            var7 = 'premiumTab';
            if(!(var7 !== var15)) { _fun0002_ip = 26; continue _fun0002 }
case 24:
            var15 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var6];
            var7 = var15.bind(var4)(var7);
            var7 = var7.DismissibleContent;
            var7 = var7.REFERRAL_TRIAL_MOBILE_NITRO_HOME_BADGE;
            if(!(var13 !== var7)) { _fun0002_ip = 27; continue _fun0002 }
case 28:
            var13 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var6];
            var7 = var13.bind(var4)(var7);
            var7 = var7.DismissibleContent;
            var7 = var7.WHATS_NEW_TENURE_BADGE_REWARD;
            var16 = null;
            if(!(var11 === var7)) { _fun0002_ip = 29; continue _fun0002 }
case 30:
            var15 = _closure1_slot0;
            var18 = _closure1_slot2;
            var7 = 27;
            var11 = var18[var7];
            var11 = var15.bind(var4)(var11);
            var13 = var11.intl;
            var11 = var13.string;
            var7 = var18[var7];
            var7 = var15.bind(var4)(var7);
            var7 = var7.t;
            var7 = var7.jyYgZ+;
            var16 = var11.bind(var13)(var7);
            _fun0002_ip = 29; continue _fun0002;
case 27:
            var15 = _closure1_slot0;
            var18 = _closure1_slot2;
            var7 = 27;
            var11 = var18[var7];
            var11 = var15.bind(var4)(var11);
            var13 = var11.intl;
            var11 = var13.string;
            var7 = var18[var7];
            var7 = var15.bind(var4)(var7);
            var7 = var7.t;
            var7 = var7.uO4bXn;
            var16 = var11.bind(var13)(var7);
case 29:
            if(!var3) { _fun0002_ip = 31; continue _fun0002 }
case 32:
            if(var2) { _fun0002_ip = 33; continue _fun0002 }
case 31:
            if(var1) { _fun0002_ip = 34; continue _fun0002 }
case 35:
            if(!(var10 == var12)) { _fun0002_ip = 36; continue _fun0002 }
case 37:
            if(!(var10 == var22)) { _fun0002_ip = 38; continue _fun0002 }
case 39:
            var2 = var10 != var16;
            var1 = null;
            if(!var2) { _fun0002_ip = 40; continue _fun0002 }
case 41:
            var7 = _closure1_slot8;
            var3 = _closure1_slot1;
            var20 = _closure1_slot2;
            var2 = 14;
            var2 = var20[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var11 = var14.tag;
            var2['style'] = var11;
            var19 = _closure1_slot0;
            var11 = 15;
            var13 = var20[var11];
            var13 = var19.bind(var4)(var13);
            var13 = var13.Gradients;
            var13 = var13.PREMIUM_TIER_2;
            var2['colors'] = var13;
            var13 = var20[var11];
            var13 = var19.bind(var4)(var13);
            var13 = var13.HorizontalGradient;
            var13 = var13.START;
            var2['start'] = var13;
            var11 = var20[var11];
            var11 = var19.bind(var4)(var11);
            var11 = var11.HorizontalGradient;
            var11 = var11.END;
            var2['end'] = var11;
            var15 = _closure1_slot8;
            var11 = 13;
            var11 = var20[var11];
            var11 = var19.bind(var4)(var11);
            var13 = var11.Text;
            var11 = {'variant': 'eyebrow', 'color': 'always-white'};
            var18 = 28;
            var18 = var20[var18];
            var19 = var19.bind(var4)(var18);
            var18 = var19.isAndroid;
            var19 = var18.bind(var19)();
            var18 = undefined;
            if(!var19) { _fun0002_ip = 42; continue _fun0002 }
case 43:
            var18 = var14.text;
case 42:
            var11['style'] = var18;
            var11['children'] = var16;
            var11 = var15.bind(var4)(var13, var11);
            var2['children'] = var11;
            var1 = var7.bind(var4)(var3, var2);
case 40:
            _fun0002_ip = 44; continue _fun0002;
case 38:
            var2 = var22.expires_at;
            if(!(var10 != var2)) { _fun0002_ip = 45; continue _fun0002 }
case 46:
            var7 = _closure1_slot9;
            var3 = _closure1_slot4;
            var2 = {};
            var13 = var14.premiumDiscountBadge;
            var11 = new Array(2);
            var11[0] = var13;
            var13 = var14.ackedBadge;
            var11[1] = var13;
            var2['style'] = var11;
            var15 = _closure1_slot8;
            var19 = _closure1_slot1;
            var18 = _closure1_slot2;
            var16 = 11;
            var11 = var18[var16];
            var13 = var19.bind(var4)(var11);
            var11 = {};
            var20 = 12;
            var20 = var18[var20];
            var20 = var19.bind(var4)(var20);
            var11['source'] = var20;
            var16 = var18[var16];
            var16 = var19.bind(var4)(var16);
            var16 = var16.Sizes;
            var16 = var16.EXTRA_SMALL;
            var11['size'] = var16;
            var16 = var14.icon;
            var16 = var16.color;
            var11['color'] = var16;
            var16 = var14.icon;
            var11['style'] = var16;
            var13 = var15.bind(var4)(var13, var11);
            var11 = new Array(2);
            var11[0] = var13;
            var16 = _closure1_slot8;
            var15 = _closure1_slot0;
            var13 = 13;
            var13 = var18[var13];
            var13 = var15.bind(var4)(var13);
            var15 = var13.Text;
            var13 = {'variant': 'eyebrow', 'color': 'interactive-text-default'};
            var18 = var14.text;
            var13['style'] = var18;
            var20 = _closure1_slot0;
            var24 = _closure1_slot2;
            var19 = 27;
            var18 = var24[var19];
            var18 = var20.bind(var4)(var18);
            var23 = var18.intl;
            if(var17) { _fun0002_ip = 47; continue _fun0002 }
case 48:
            var21 = var23.string;
            var18 = var24[var19];
            var18 = var20.bind(var4)(var18);
            var18 = var18.t;
            var18 = var18./DTtr6;
            var18 = var21.bind(var23)(var18);
            _fun0002_ip = 49; continue _fun0002;
case 47:
            var21 = var23.format;
            var19 = var24[var19];
            var19 = var20.bind(var4)(var19);
            var19 = var19.t;
            var20 = var19.AYcXGW;
            var19 = {};
            var24 = var22.discount;
            var24 = var24.amount;
            var19['discountOfferAmount'] = var24;
            var18 = var21.bind(var23)(var20, var19);
case 49:
            var13['children'] = var18;
            var13 = var16.bind(var4)(var15, var13);
            var11[1] = var13;
            var2['children'] = var11;
            var2 = var7.bind(var4)(var3, var2);
            _fun0002_ip = 50; continue _fun0002;
case 45:
            var11 = _closure1_slot8;
            var7 = _closure1_slot1;
            var18 = _closure1_slot2;
            var3 = 14;
            var3 = var18[var3];
            var7 = var7.bind(var4)(var3);
            var3 = {};
            var13 = var14.premiumDiscountBadge;
            var3['style'] = var13;
            var13 = ['#db00a4', '#5968f0'];
            var3['colors'] = var13;
            var15 = _closure1_slot0;
            var13 = 15;
            var16 = var18[var13];
            var16 = var15.bind(var4)(var16);
            var16 = var16.HorizontalGradient;
            var16 = var16.START;
            var3['start'] = var16;
            var13 = var18[var13];
            var13 = var15.bind(var4)(var13);
            var13 = var13.HorizontalGradient;
            var13 = var13.END;
            var3['end'] = var13;
            var16 = _closure1_slot8;
            var13 = 13;
            var13 = var18[var13];
            var13 = var15.bind(var4)(var13);
            var15 = var13.Text;
            var13 = {'variant': 'eyebrow', 'color': 'always-white'};
            var18 = var14.text;
            var13['style'] = var18;
            var19 = _closure1_slot0;
            var23 = _closure1_slot2;
            var18 = 27;
            var20 = var23[var18];
            var20 = var19.bind(var4)(var20);
            var21 = var20.intl;
            if(var17) { _fun0002_ip = 51; continue _fun0002 }
case 52:
            var20 = var21.string;
            var17 = var23[var18];
            var17 = var19.bind(var4)(var17);
            var17 = var17.t;
            var17 = var17./DTtr6;
            var17 = var20.bind(var21)(var17);
            _fun0002_ip = 53; continue _fun0002;
case 51:
            var20 = var21.format;
            var18 = var23[var18];
            var18 = var19.bind(var4)(var18);
            var18 = var18.t;
            var19 = var18.AYcXGW;
            var18 = {};
            var22 = var22.discount;
            var22 = var22.amount;
            var18['discountOfferAmount'] = var22;
            var17 = var20.bind(var21)(var19, var18);
case 53:
            var13['children'] = var17;
            var13 = var16.bind(var4)(var15, var13);
            var3['children'] = var13;
            var2 = var11.bind(var4)(var7, var3);
case 50:
            var1 = var2;
case 44:
            return var1;
case 36:
            var1 = var10 == var12;
            var7 = undefined;
            if(var1) { _fun0002_ip = 54; continue _fun0002 }
case 55:
            var7 = var12.subscription_trial;
case 54:
            var3 = _closure1_slot8;
            var2 = _closure1_slot11;
            var1 = {};
            var13 = var10 == var12;
            var11 = undefined;
            if(var13) { _fun0002_ip = 56; continue _fun0002 }
case 57:
            var11 = var12.expires_at;
case 56:
            var11 = var10 != var11;
            var1['acked'] = var11;
            var15 = _closure1_slot0;
            var16 = _closure1_slot2;
            var11 = 27;
            var12 = var16[var11];
            var12 = var15.bind(var4)(var12);
            var17 = var12.intl;
            var13 = var17.string;
            var12 = var16[var11];
            var12 = var15.bind(var4)(var12);
            var12 = var12.t;
            var12 = var12.OS9KPu;
            var12 = var13.bind(var17)(var12);
            var1['badgeCopy'] = var12;
            var12 = var16[var11];
            var12 = var15.bind(var4)(var12);
            var13 = var12.intl;
            var12 = var13.string;
            var11 = var16[var11];
            var11 = var15.bind(var4)(var11);
            var11 = var11.t;
            var11 = var11.OS9KPu;
            var11 = var12.bind(var13)(var11);
            var1['ackedBadgeCopy'] = var11;
            var11 = var10 == var7;
            var10 = undefined;
            if(var11) { _fun0002_ip = 58; continue _fun0002 }
case 59:
            var10 = var7.sku_id;
case 58:
            var7 = _closure1_slot7;
            var7 = var7.TIER_0;
            if(!(var10 !== var7)) { _fun0002_ip = 60; continue _fun0002 }
case 61:
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var7 = 15;
            var7 = var11[var7];
            var7 = var10.bind(var4)(var7);
            var7 = var7.Gradients;
            var7 = var7.PREMIUM_TIER_2;
            _fun0002_ip = 62; continue _fun0002;
case 60:
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var10 = 15;
            var10 = var12[var10];
            var10 = var11.bind(var4)(var10);
            var10 = var10.Gradients;
            var7 = var10.PREMIUM_TIER_0;
case 62:
            var1['gradientColors'] = var7;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
case 34:
            var3 = _closure1_slot8;
            var2 = _closure1_slot1;
            var15 = _closure1_slot2;
            var1 = 14;
            var1 = var15[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var7 = var14.tag;
            var1['style'] = var7;
            var13 = _closure1_slot0;
            var7 = 15;
            var10 = var15[var7];
            var10 = var13.bind(var4)(var10);
            var10 = var10.Gradients;
            var10 = var10.PREMIUM_TIER_2;
            var1['colors'] = var10;
            var10 = var15[var7];
            var10 = var13.bind(var4)(var10);
            var10 = var10.HorizontalGradient;
            var10 = var10.START;
            var1['start'] = var10;
            var7 = var15[var7];
            var7 = var13.bind(var4)(var7);
            var7 = var7.HorizontalGradient;
            var7 = var7.END;
            var1['end'] = var7;
            var11 = _closure1_slot8;
            var7 = 13;
            var7 = var15[var7];
            var7 = var13.bind(var4)(var7);
            var10 = var7.Text;
            var7 = {'variant': 'eyebrow', 'color': 'always-white'};
            var12 = 28;
            var12 = var15[var12];
            var13 = var13.bind(var4)(var12);
            var12 = var13.isAndroid;
            var13 = var12.bind(var13)();
            var12 = undefined;
            if(!var13) { _fun0002_ip = 63; continue _fun0002 }
case 64:
            var12 = var14.text;
case 63:
            var7['style'] = var12;
            var16 = _closure1_slot0;
            var17 = _closure1_slot2;
            var12 = 27;
            var13 = var17[var12];
            var13 = var16.bind(var4)(var13);
            var15 = var13.intl;
            var13 = var15.string;
            var12 = var17[var12];
            var12 = var16.bind(var4)(var12);
            var12 = var12.t;
            var12 = var12.y2b7CA;
            var12 = var13.bind(var15)(var12);
            var7['children'] = var12;
            var7 = var11.bind(var4)(var10, var7);
            var1['children'] = var7;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
case 33:
            var3 = _closure1_slot8;
            var2 = _closure1_slot4;
            var1 = {};
            var7 = var14.referralBadge;
            var1['style'] = var7;
            var11 = _closure1_slot8;
            var15 = _closure1_slot0;
            var16 = _closure1_slot2;
            var7 = 13;
            var7 = var16[var7];
            var7 = var15.bind(var4)(var7);
            var10 = var7.Text;
            var7 = {};
            var12 = 'eyebrow';
            var7['variant'] = var12;
            var13 = {};
            var12 = '#2F3035';
            var13['color'] = var12;
            var12 = new Array(2);
            var12[0] = var13;
            var13 = 28;
            var13 = var16[var13];
            var15 = var15.bind(var4)(var13);
            var13 = var15.isAndroid;
            var15 = var13.bind(var15)();
            var13 = undefined;
            if(!var15) { _fun0002_ip = 65; continue _fun0002 }
case 66:
            var13 = var14.text;
case 65:
            var12[1] = var13;
            var7['style'] = var12;
            var15 = _closure1_slot0;
            var16 = _closure1_slot2;
            var12 = 27;
            var13 = var16[var12];
            var13 = var15.bind(var4)(var13);
            var14 = var13.intl;
            var13 = var14.string;
            var12 = var16[var12];
            var12 = var15.bind(var4)(var12);
            var12 = var12.t;
            var12 = var12.RDE0Sc;
            var12 = var13.bind(var14)(var12);
            var7['children'] = var12;
            var7 = var11.bind(var4)(var10, var7);
            var1['children'] = var7;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
case 26:
            var3 = _closure1_slot8;
            var2 = _closure1_slot11;
            var1 = {};
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var6 = var8[var6];
            var6 = var7.bind(var4)(var6);
            var6 = var6.DismissibleContent;
            var6 = var6.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE;
            var6 = var9 !== var6;
            var1['acked'] = var6;
            var6 = var5.properties;
            var6 = var6.properties;
            var6 = var6.premiumTab;
            var6 = var6.badgeLabel;
            var1['badgeCopy'] = var6;
            var6 = var5.properties;
            var6 = var6.properties;
            var6 = var6.premiumTab;
            var6 = var6.acknowledgedBadgeLabel;
            var1['ackedBadgeCopy'] = var6;
            var6 = 15;
            var6 = var8[var6];
            var6 = var7.bind(var4)(var6);
            var6 = var6.Gradients;
            var6 = var6.PREMIUM_TIER_2_OFFER_COLOR;
            var1['gradientColors'] = var6;
            var5 = var5.id;
            var1['componentId'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();