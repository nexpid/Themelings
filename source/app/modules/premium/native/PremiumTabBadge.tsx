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
            var13 = var1.bind(var4)();
            var9 = _closure1_slot0;
            var1 = _closure1_slot2;
            var2 = 16;
            var2 = var1[var2];
            var3 = var9.bind(var4)(var2);
            var2 = var3.usePremiumTrialOffer;
            var12 = var2.bind(var3)();
            var2 = 17;
            var2 = var1[var2];
            var3 = var9.bind(var4)(var2);
            var2 = var3.usePremiumDiscountOffer;
            var2 = var2.bind(var3)();
            var3 = 18;
            var3 = var1[var3];
            var5 = var9.bind(var4)(var3);
            var3 = var5.useHasTier2Premium;
            var3 = var3.bind(var5)();
            var5 = 19;
            var5 = var1[var5];
            var7 = var9.bind(var4)(var5);
            var5 = var7.UNSAFE_useIsDismissibleContentDismissed;
            var6 = 20;
            var1 = var1[var6];
            var1 = var9.bind(var4)(var1);
            var1 = var1.DismissibleContent;
            var1 = var1.MOBILE_NITRO_HOME_SETTINGS_BADGE;
            var1 = var5.bind(var7)(var1);
            var1 = !var1;
            if(!var1) { _fun0002_ip = 5; continue _fun0002 }
case 6:
            var1 = var3;
case 5:
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var5 = 21;
            var5 = var9[var5];
            var10 = var7.bind(var4)(var5);
            var9 = var10.useStateFromStores;
            var5 = _closure1_slot5;
            var7 = new Array(1);
            var7[0] = var5;
            var5 = function() {
                var2 = _closure1_slot5;
                var1 = var2.getPremiumTypeSubscription;
                var1 = var1.bind(var2)();
                return var1;
            };
            var5 = var9.bind(var10)(var7, var5);
            var10 = null;
            var7 = var10 == var5;
            var11 = undefined;
            if(var7) { _fun0002_ip = 7; continue _fun0002 }
case 8:
            var11 = var5.trialId;
case 7:
            var5 = _closure1_slot6;
            var9 = _closure1_slot0;
            var7 = _closure1_slot2;
            var20 = 22;
            var7 = var7[var20];
            var9 = var9.bind(var4)(var7);
            var7 = var9.useSelectedDismissibleContent;
            if(!(var11 === var5)) { _fun0002_ip = 9; continue _fun0002 }
case 10:
            if(var1) { _fun0002_ip = 9; continue _fun0002 }
case 11:
            var11 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var6];
            var5 = var11.bind(var4)(var5);
            var5 = var5.DismissibleContent;
            var11 = var5.REFERRAL_TRIAL_MOBILE_NITRO_HOME_BADGE;
            var5 = new Array(1);
            var5[0] = var11;
            _fun0002_ip = 12; continue _fun0002;
case 9:
            var5 = new Array(0);
case 12:
            var22 = true;
            var7 = var7.bind(var9)(var5, var4, var22);
            var5 = _closure1_slot3;
            var19 = 2;
            var5 = var5.bind(var4)(var7, var19);
            var9 = 0;
            var16 = var5[var9];
            var17 = 1;
            var5 = var5[var17];
            var7 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var20];
            var7 = var7.bind(var4)(var5);
            var5 = var7.useSelectedDismissibleContent;
            if(var1) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            if(!var3) { _fun0002_ip = 13; continue _fun0002 }
case 2:
            var11 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var6];
            var3 = var11.bind(var4)(var3);
            var3 = var3.DismissibleContent;
            var11 = var3.WHATS_NEW_TENURE_BADGE_REWARD;
            var3 = new Array(1);
            var3[0] = var11;
            _fun0002_ip = 15; continue _fun0002;
case 13:
            var3 = new Array(0);
case 15:
            var5 = var5.bind(var7)(var3, var4, var22);
            var3 = _closure1_slot3;
            var3 = var3.bind(var4)(var5, var19);
            var15 = var3[var9];
            var3 = var3[var17];
            var18 = _closure1_slot0;
            var14 = _closure1_slot2;
            var3 = 23;
            var3 = var14[var3];
            var5 = var18.bind(var4)(var3);
            var3 = var5.useIsEligibleSenderForReferralProgram;
            var11 = var3.bind(var5)();
            var3 = 24;
            var3 = var14[var3];
            var7 = var18.bind(var4)(var3);
            var5 = var7.useMobileReferralBadgeExperimentEnabled;
            var3 = {};
            var21 = 'PremiumTabBadge';
            var3['location'] = var21;
            var7 = var5.bind(var7)(var3);
            var3 = 25;
            var3 = var14[var3];
            var5 = var18.bind(var4)(var3);
            var3 = var5.useIsReferralProgramEntrypointBadgeAcknowledged;
            var3 = var3.bind(var5)();
            var5 = 26;
            var5 = var14[var5];
            var23 = var18.bind(var4)(var5);
            var21 = var23.usePromotionMarketingComponent;
            var5 = 10;
            var5 = var14[var5];
            var5 = var18.bind(var4)(var5);
            var5 = var5.MarketingComponentType;
            var5 = var5.PREMIUM_TAB;
            var5 = var21.bind(var23)(var5);
            var14 = var14[var20];
            var21 = var18.bind(var4)(var14);
            var20 = var21.useSelectedSnowflakeBoundDismissibleContent;
            var14 = var10 != var5;
            var18 = null;
            if(!var14) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var14 = var5.properties;
            var14 = var14.properties;
            var23 = var14.oneofKind;
            var14 = 'premiumTab';
            var18 = null;
            if(!(var14 === var23)) { _fun0002_ip = 16; continue _fun0002 }
case 18:
            var23 = _closure1_slot0;
            var14 = _closure1_slot2;
            var14 = var14[var6];
            var14 = var23.bind(var4)(var14);
            var14 = var14.DismissibleContent;
            var18 = var14.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE;
case 16:
            var14 = var10 == var5;
            var23 = undefined;
            if(var14) { _fun0002_ip = 19; continue _fun0002 }
case 20:
            var23 = var5.promotionId;
case 19:
            var24 = var10 != var23;
            var14 = '';
            if(!var24) { _fun0002_ip = 21; continue _fun0002 }
case 22:
            var14 = var23;
case 21:
            var29 = var21;
            var28 = var18;
            var27 = var14;
            var26 = undefined;
            var25 = true;
            var18 = var29[var20](var28, var27, var26, var25, var24);
            var14 = _closure1_slot3;
            var14 = var14.bind(var4)(var18, var19);
            var9 = var14[var9];
            var14 = var14[var17];
            if(!(var10 != var5)) { _fun0002_ip = 23; continue _fun0002 }
case 24:
            var14 = var5.properties;
            var14 = var14.properties;
            var17 = var14.oneofKind;
            var14 = 'premiumTab';
            if(!(var14 !== var17)) { _fun0002_ip = 25; continue _fun0002 }
case 23:
            var17 = _closure1_slot0;
            var14 = _closure1_slot2;
            var14 = var14[var6];
            var14 = var17.bind(var4)(var14);
            var14 = var14.DismissibleContent;
            var14 = var14.REFERRAL_TRIAL_MOBILE_NITRO_HOME_BADGE;
            if(!(var16 !== var14)) { _fun0002_ip = 26; continue _fun0002 }
case 27:
            var16 = _closure1_slot0;
            var14 = _closure1_slot2;
            var14 = var14[var6];
            var14 = var16.bind(var4)(var14);
            var14 = var14.DismissibleContent;
            var14 = var14.WHATS_NEW_TENURE_BADGE_REWARD;
            var17 = null;
            if(!(var15 === var14)) { _fun0002_ip = 28; continue _fun0002 }
case 29:
            var18 = _closure1_slot0;
            var19 = _closure1_slot2;
            var14 = 27;
            var15 = var19[var14];
            var15 = var18.bind(var4)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var14 = var19[var14];
            var14 = var18.bind(var4)(var14);
            var14 = var14.t;
            var14 = var14.jyYgZ+;
            var17 = var15.bind(var16)(var14);
            _fun0002_ip = 28; continue _fun0002;
case 26:
            var18 = _closure1_slot0;
            var19 = _closure1_slot2;
            var14 = 27;
            var15 = var19[var14];
            var15 = var18.bind(var4)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var14 = var19[var14];
            var14 = var18.bind(var4)(var14);
            var14 = var14.t;
            var14 = var14.uO4bXn;
            var17 = var15.bind(var16)(var14);
case 28:
            if(!var11) { _fun0002_ip = 30; continue _fun0002 }
case 31:
            if(!var7) { _fun0002_ip = 30; continue _fun0002 }
case 32:
            if(var3) { _fun0002_ip = 30; continue _fun0002 }
case 33:
            var11 = _closure1_slot8;
            var7 = _closure1_slot4;
            var3 = {};
            var14 = var13.referralBadge;
            var3['style'] = var14;
            var16 = _closure1_slot8;
            var20 = _closure1_slot0;
            var21 = _closure1_slot2;
            var14 = 13;
            var14 = var21[var14];
            var14 = var20.bind(var4)(var14);
            var15 = var14.Text;
            var14 = {};
            var18 = 'eyebrow';
            var14['variant'] = var18;
            var19 = {};
            var18 = '#2F3035';
            var19['color'] = var18;
            var18 = new Array(2);
            var18[0] = var19;
            var19 = 28;
            var19 = var21[var19];
            var20 = var20.bind(var4)(var19);
            var19 = var20.isAndroid;
            var20 = var19.bind(var20)();
            var19 = undefined;
            if(!var20) { _fun0002_ip = 34; continue _fun0002 }
case 35:
            var19 = var13.text;
case 34:
            var18[1] = var19;
            var14['style'] = var18;
            var21 = _closure1_slot0;
            var22 = _closure1_slot2;
            var18 = 27;
            var19 = var22[var18];
            var19 = var21.bind(var4)(var19);
            var20 = var19.intl;
            var19 = var20.string;
            var18 = var22[var18];
            var18 = var21.bind(var4)(var18);
            var18 = var18.t;
            var18 = var18.RDE0Sc;
            var18 = var19.bind(var20)(var18);
            var14['children'] = var18;
            var14 = var16.bind(var4)(var15, var14);
            var3['children'] = var14;
            var3 = var11.bind(var4)(var7, var3);
            return var3;
case 30:
            if(var1) { _fun0002_ip = 36; continue _fun0002 }
case 37:
            if(!(var10 == var12)) { _fun0002_ip = 38; continue _fun0002 }
case 39:
            if(!(var10 == var2)) { _fun0002_ip = 40; continue _fun0002 }
case 41:
            var3 = var10 != var17;
            var1 = null;
            if(!var3) { _fun0002_ip = 42; continue _fun0002 }
case 43:
            var11 = _closure1_slot8;
            var7 = _closure1_slot1;
            var20 = _closure1_slot2;
            var3 = 14;
            var3 = var20[var3];
            var7 = var7.bind(var4)(var3);
            var3 = {};
            var14 = var13.tag;
            var3['style'] = var14;
            var19 = _closure1_slot0;
            var14 = 15;
            var15 = var20[var14];
            var15 = var19.bind(var4)(var15);
            var15 = var15.Gradients;
            var15 = var15.PREMIUM_TIER_2;
            var3['colors'] = var15;
            var15 = var20[var14];
            var15 = var19.bind(var4)(var15);
            var15 = var15.HorizontalGradient;
            var15 = var15.START;
            var3['start'] = var15;
            var14 = var20[var14];
            var14 = var19.bind(var4)(var14);
            var14 = var14.HorizontalGradient;
            var14 = var14.END;
            var3['end'] = var14;
            var16 = _closure1_slot8;
            var14 = 13;
            var14 = var20[var14];
            var14 = var19.bind(var4)(var14);
            var15 = var14.Text;
            var14 = {'variant': 'eyebrow', 'color': 'always-white'};
            var18 = 28;
            var18 = var20[var18];
            var19 = var19.bind(var4)(var18);
            var18 = var19.isAndroid;
            var19 = var18.bind(var19)();
            var18 = undefined;
            if(!var19) { _fun0002_ip = 44; continue _fun0002 }
case 45:
            var18 = var13.text;
case 44:
            var14['style'] = var18;
            var14['children'] = var17;
            var14 = var16.bind(var4)(var15, var14);
            var3['children'] = var14;
            var1 = var11.bind(var4)(var7, var3);
case 42:
            _fun0002_ip = 46; continue _fun0002;
case 40:
            var2 = var2.expires_at;
            if(!(var10 != var2)) { _fun0002_ip = 47; continue _fun0002 }
case 48:
            var7 = _closure1_slot9;
            var3 = _closure1_slot4;
            var2 = {};
            var14 = var13.premiumDiscountBadge;
            var11 = new Array(2);
            var11[0] = var14;
            var14 = var13.ackedBadge;
            var11[1] = var14;
            var2['style'] = var11;
            var15 = _closure1_slot8;
            var17 = _closure1_slot1;
            var21 = _closure1_slot2;
            var16 = 11;
            var11 = var21[var16];
            var14 = var17.bind(var4)(var11);
            var11 = {};
            var18 = 12;
            var18 = var21[var18];
            var18 = var17.bind(var4)(var18);
            var11['source'] = var18;
            var16 = var21[var16];
            var16 = var17.bind(var4)(var16);
            var16 = var16.Sizes;
            var16 = var16.EXTRA_SMALL;
            var11['size'] = var16;
            var16 = var13.icon;
            var16 = var16.color;
            var11['color'] = var16;
            var16 = var13.icon;
            var11['style'] = var16;
            var14 = var15.bind(var4)(var14, var11);
            var11 = new Array(2);
            var11[0] = var14;
            var16 = _closure1_slot8;
            var20 = _closure1_slot0;
            var14 = 13;
            var14 = var21[var14];
            var14 = var20.bind(var4)(var14);
            var15 = var14.Text;
            var14 = {'variant': 'eyebrow', 'color': 'interactive-text-default'};
            var17 = var13.text;
            var14['style'] = var17;
            var17 = 27;
            var18 = var21[var17];
            var18 = var20.bind(var4)(var18);
            var19 = var18.intl;
            var18 = var19.string;
            var17 = var21[var17];
            var17 = var20.bind(var4)(var17);
            var17 = var17.t;
            var17 = var17./DTtr6;
            var17 = var18.bind(var19)(var17);
            var14['children'] = var17;
            var14 = var16.bind(var4)(var15, var14);
            var11[1] = var14;
            var2['children'] = var11;
            var2 = var7.bind(var4)(var3, var2);
            _fun0002_ip = 49; continue _fun0002;
case 47:
            var11 = _closure1_slot8;
            var7 = _closure1_slot1;
            var21 = _closure1_slot2;
            var3 = 14;
            var3 = var21[var3];
            var7 = var7.bind(var4)(var3);
            var3 = {};
            var14 = var13.premiumDiscountBadge;
            var3['style'] = var14;
            var14 = ['#db00a4', '#5968f0'];
            var3['colors'] = var14;
            var20 = _closure1_slot0;
            var14 = 15;
            var15 = var21[var14];
            var15 = var20.bind(var4)(var15);
            var15 = var15.HorizontalGradient;
            var15 = var15.START;
            var3['start'] = var15;
            var14 = var21[var14];
            var14 = var20.bind(var4)(var14);
            var14 = var14.HorizontalGradient;
            var14 = var14.END;
            var3['end'] = var14;
            var16 = _closure1_slot8;
            var14 = 13;
            var14 = var21[var14];
            var14 = var20.bind(var4)(var14);
            var15 = var14.Text;
            var14 = {'variant': 'eyebrow', 'color': 'always-white'};
            var17 = var13.text;
            var14['style'] = var17;
            var17 = 27;
            var18 = var21[var17];
            var18 = var20.bind(var4)(var18);
            var19 = var18.intl;
            var18 = var19.string;
            var17 = var21[var17];
            var17 = var20.bind(var4)(var17);
            var17 = var17.t;
            var17 = var17./DTtr6;
            var17 = var18.bind(var19)(var17);
            var14['children'] = var17;
            var14 = var16.bind(var4)(var15, var14);
            var3['children'] = var14;
            var2 = var11.bind(var4)(var7, var3);
case 49:
            var1 = var2;
case 46:
            return var1;
case 38:
            var1 = var10 == var12;
            var7 = undefined;
            if(var1) { _fun0002_ip = 50; continue _fun0002 }
case 51:
            var7 = var12.subscription_trial;
case 50:
            var3 = _closure1_slot8;
            var2 = _closure1_slot11;
            var1 = {};
            var14 = var10 == var12;
            var11 = undefined;
            if(var14) { _fun0002_ip = 52; continue _fun0002 }
case 53:
            var11 = var12.expires_at;
case 52:
            var11 = var10 != var11;
            var1['acked'] = var11;
            var15 = _closure1_slot0;
            var16 = _closure1_slot2;
            var11 = 27;
            var12 = var16[var11];
            var12 = var15.bind(var4)(var12);
            var17 = var12.intl;
            var14 = var17.string;
            var12 = var16[var11];
            var12 = var15.bind(var4)(var12);
            var12 = var12.t;
            var12 = var12.OS9KPu;
            var12 = var14.bind(var17)(var12);
            var1['badgeCopy'] = var12;
            var12 = var16[var11];
            var12 = var15.bind(var4)(var12);
            var14 = var12.intl;
            var12 = var14.string;
            var11 = var16[var11];
            var11 = var15.bind(var4)(var11);
            var11 = var11.t;
            var11 = var11.OS9KPu;
            var11 = var12.bind(var14)(var11);
            var1['ackedBadgeCopy'] = var11;
            var11 = var10 == var7;
            var10 = undefined;
            if(var11) { _fun0002_ip = 54; continue _fun0002 }
case 55:
            var10 = var7.sku_id;
case 54:
            var7 = _closure1_slot7;
            var7 = var7.TIER_0;
            if(!(var10 !== var7)) { _fun0002_ip = 56; continue _fun0002 }
case 57:
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var7 = 15;
            var7 = var11[var7];
            var7 = var10.bind(var4)(var7);
            var7 = var7.Gradients;
            var7 = var7.PREMIUM_TIER_2;
            _fun0002_ip = 58; continue _fun0002;
case 56:
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var10 = 15;
            var10 = var12[var10];
            var10 = var11.bind(var4)(var10);
            var10 = var10.Gradients;
            var7 = var10.PREMIUM_TIER_0;
case 58:
            var1['gradientColors'] = var7;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
case 36:
            var3 = _closure1_slot8;
            var2 = _closure1_slot1;
            var15 = _closure1_slot2;
            var1 = 14;
            var1 = var15[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var7 = var13.tag;
            var1['style'] = var7;
            var14 = _closure1_slot0;
            var7 = 15;
            var10 = var15[var7];
            var10 = var14.bind(var4)(var10);
            var10 = var10.Gradients;
            var10 = var10.PREMIUM_TIER_2;
            var1['colors'] = var10;
            var10 = var15[var7];
            var10 = var14.bind(var4)(var10);
            var10 = var10.HorizontalGradient;
            var10 = var10.START;
            var1['start'] = var10;
            var7 = var15[var7];
            var7 = var14.bind(var4)(var7);
            var7 = var7.HorizontalGradient;
            var7 = var7.END;
            var1['end'] = var7;
            var11 = _closure1_slot8;
            var7 = 13;
            var7 = var15[var7];
            var7 = var14.bind(var4)(var7);
            var10 = var7.Text;
            var7 = {'variant': 'eyebrow', 'color': 'always-white'};
            var12 = 28;
            var12 = var15[var12];
            var14 = var14.bind(var4)(var12);
            var12 = var14.isAndroid;
            var14 = var12.bind(var14)();
            var12 = undefined;
            if(!var14) { _fun0002_ip = 59; continue _fun0002 }
case 60:
            var12 = var13.text;
case 59:
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
            var12 = var12.y2b7CA;
            var12 = var13.bind(var14)(var12);
            var7['children'] = var12;
            var7 = var11.bind(var4)(var10, var7);
            var1['children'] = var7;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
case 25:
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