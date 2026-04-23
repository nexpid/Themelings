// app/modules/premium/native/PremiumTabBadge.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var1 = function ThemedTabBadge(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var8 = var1.label;
            var1 = _closure1_slot10;
            var4 = undefined;
            var9 = var1.bind(var4)();
            var2 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 9;
            var1 = var7[var1];
            var3 = var2.bind(var4)(var1);
            var2 = var3.isThemeDark;
            var6 = _closure1_slot1;
            var1 = 10;
            var1 = var7[var1];
            var1 = var6.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var11 = var2.bind(var3)(var1);
            var3 = _closure1_slot8;
            var2 = _closure1_slot4;
            var1 = {};
            var7 = var9.badge;
            var6 = new Array(2);
            var6[0] = var7;
            if(var11) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var7 = var9.badgeBackgroundLightTheme;
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var7 = var9.badgeBackgroundDarkTheme;
case 4:
            var6[1] = var7;
            var1['style'] = var6;
            var7 = _closure1_slot8;
            var6 = _closure1_slot0;
            var10 = _closure1_slot2;
            var5 = 11;
            var5 = var10[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.Text;
            var5 = {};
            var10 = 'eyebrow';
            var5['variant'] = var10;
            var10 = 'always-white';
            if(!var11) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var10 = 'black';
case 5:
            var5['color'] = var10;
            var9 = var9.text;
            var5['style'] = var9;
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot11 = var1;
    var1 = function OfferBadge(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var1 = var2.acked;
            var4 = var2.badgeCopy;
            var10 = var2.ackedBadgeCopy;
            var9 = var2.componentId;
            var2 = _closure1_slot10;
            var5 = undefined;
            var11 = var2.bind(var5)();
            var3 = _closure1_slot1;
            var13 = _closure1_slot2;
            var2 = 12;
            var2 = var13[var2];
            var6 = var3.bind(var5)(var2);
            var3 = {};
            var12 = _closure1_slot0;
            var2 = 13;
            var8 = var13[var2];
            var8 = var12.bind(var5)(var8);
            var8 = var8.ImpressionTypes;
            var8 = var8.VIEW;
            var3['type'] = var8;
            var2 = var13[var2];
            var2 = var12.bind(var5)(var2);
            var2 = var2.ImpressionNames;
            var2 = var2.PREMIUM_MARKETING_COMPONENT;
            var3['name'] = var2;
            var2 = {};
            var8 = 14;
            var8 = var13[var8];
            var8 = var12.bind(var5)(var8);
            var8 = var8.MarketingComponentType;
            var8 = var8.PREMIUM_TAB;
            var2['component_type'] = var8;
            var2['component_id'] = var9;
            var3['properties'] = var2;
            var2 = {};
            var8 = null;
            var8 = var8 == var9;
            var2['disableTrack'] = var8;
            var2 = var6.bind(var5)(var3, var2);
            if(var1) { _fun0002_ip = 7; continue _fun0002 }
case 8:
            var3 = _closure1_slot8;
            var2 = _closure1_slot11;
            var1 = {};
            var1['label'] = var4;
            var1 = var3.bind(var5)(var2, var1);
            _fun0002_ip = 9; continue _fun0002;
case 7:
            var4 = _closure1_slot9;
            var3 = _closure1_slot4;
            var2 = {};
            var6 = var11.acked;
            var2['style'] = var6;
            var13 = _closure1_slot8;
            var8 = _closure1_slot0;
            var12 = _closure1_slot2;
            var14 = 15;
            var6 = var12[var14];
            var6 = var8.bind(var5)(var6);
            var9 = var6.Icon;
            var6 = {};
            var16 = _closure1_slot1;
            var15 = 16;
            var15 = var12[var15];
            var15 = var16.bind(var5)(var15);
            var6['source'] = var15;
            var14 = var12[var14];
            var14 = var8.bind(var5)(var14);
            var14 = var14.Icon;
            var14 = var14.Sizes;
            var14 = var14.EXTRA_SMALL;
            var6['size'] = var14;
            var14 = var11.icon;
            var14 = var14.color;
            var6['color'] = var14;
            var14 = var11.icon;
            var6['style'] = var14;
            var9 = var13.bind(var5)(var9, var6);
            var6 = new Array(2);
            var6[0] = var9;
            var9 = _closure1_slot8;
            var7 = 11;
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
case 9:
            return var1;
        }
    };
    var _closure1_slot12 = var1;
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
    var4 = var4.PREMIUM_TIER_2_REFERRAL_TRIAL_ID;
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Gradients;
    var _closure1_slot7 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot8 = var7;
    var4 = var4.jsxs;
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'paddingVertical': 4, 'paddingHorizontal': 8};
    var10 = 8;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.round;
    var9['borderRadius'] = var13;
    var4['tag'] = var9;
    var9 = {'display': 'flex', 'minWidth': 16, 'minHeight': 16, 'paddingHorizontal': 8, 'justifyContent': 'center', 'alignItems': 'center', 'gap': 4};
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.round;
    var9['borderRadius'] = var13;
    var4['badge'] = var9;
    var9 = {};
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BRAND;
    var9['backgroundColor'] = var13;
    var4['badgeBackgroundLightTheme'] = var9;
    var9 = {};
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.WHITE;
    var9['backgroundColor'] = var13;
    var4['badgeBackgroundDarkTheme'] = var9;
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
    var4 = 32;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/native/PremiumTabBadge.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function PremiumTabBadge() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = _closure1_slot10;
            var4 = undefined;
            var15 = var1.bind(var4)();
            var8 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 17;
            var1 = var2[var1];
            var3 = var8.bind(var4)(var1);
            var1 = var3.usePremiumTrialOffer;
            var13 = var1.bind(var3)();
            var1 = 18;
            var1 = var2[var1];
            var3 = var8.bind(var4)(var1);
            var1 = var3.usePremiumDiscountOffer;
            var3 = var1.bind(var3)();
            var1 = 19;
            var1 = var2[var1];
            var5 = var8.bind(var4)(var1);
            var1 = var5.useHasTier2Premium;
            var1 = var1.bind(var5)();
            var5 = 20;
            var5 = var2[var5];
            var7 = var8.bind(var4)(var5);
            var5 = var7.UNSAFE_useIsDismissibleContentDismissed;
            var9 = 21;
            var2 = var2[var9];
            var2 = var8.bind(var4)(var2);
            var2 = var2.DismissibleContent;
            var2 = var2.MOBILE_NITRO_HOME_SETTINGS_BADGE;
            var2 = var5.bind(var7)(var2);
            var2 = !var2;
            if(!var2) { _fun0003_ip = 10; continue _fun0003 }
case 11:
            var2 = var1;
case 10:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var5 = 22;
            var5 = var8[var5];
            var10 = var7.bind(var4)(var5);
            var8 = var10.useStateFromStores;
            var5 = _closure1_slot5;
            var7 = new Array(1);
            var7[0] = var5;
            var5 = function() {
                var2 = _closure1_slot5;
                var1 = var2.getPremiumTypeSubscription;
                var1 = var1.bind(var2)();
                return var1;
            };
            var5 = var8.bind(var10)(var7, var5);
            var12 = null;
            var7 = var12 == var5;
            var10 = undefined;
            if(var7) { _fun0003_ip = 12; continue _fun0003 }
case 13:
            var10 = var5.trialId;
case 12:
            var5 = _closure1_slot6;
            var8 = _closure1_slot0;
            var7 = _closure1_slot2;
            var20 = 23;
            var7 = var7[var20];
            var8 = var8.bind(var4)(var7);
            var7 = var8.useSelectedDismissibleContent;
            if(!(var10 === var5)) { _fun0003_ip = 14; continue _fun0003 }
case 15:
            if(var2) { _fun0003_ip = 14; continue _fun0003 }
case 16:
            var10 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var9];
            var5 = var10.bind(var4)(var5);
            var5 = var5.DismissibleContent;
            var10 = var5.REFERRAL_TRIAL_MOBILE_NITRO_HOME_BADGE;
            var5 = new Array(1);
            var5[0] = var10;
            _fun0003_ip = 17; continue _fun0003;
case 14:
            var5 = new Array(0);
case 17:
            var22 = true;
            var7 = var7.bind(var8)(var5, var4, var22);
            var5 = _closure1_slot3;
            var19 = 2;
            var5 = var5.bind(var4)(var7, var19);
            var7 = 0;
            var16 = var5[var7];
            var17 = 1;
            var5 = var5[var17];
            var8 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var20];
            var8 = var8.bind(var4)(var5);
            var5 = var8.useSelectedDismissibleContent;
            if(var2) { _fun0003_ip = 18; continue _fun0003 }
case 19:
            if(!var1) { _fun0003_ip = 18; continue _fun0003 }
case 20:
            var10 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var9];
            var1 = var10.bind(var4)(var1);
            var1 = var1.DismissibleContent;
            var10 = var1.WHATS_NEW_TENURE_BADGE_REWARD;
            var1 = new Array(1);
            var1[0] = var10;
            _fun0003_ip = 21; continue _fun0003;
case 18:
            var1 = new Array(0);
case 21:
            var5 = var5.bind(var8)(var1, var4, var22);
            var1 = _closure1_slot3;
            var1 = var1.bind(var4)(var5, var19);
            var14 = var1[var7];
            var1 = var1[var17];
            var18 = _closure1_slot0;
            var11 = _closure1_slot2;
            var1 = 24;
            var1 = var11[var1];
            var5 = var18.bind(var4)(var1);
            var1 = var5.useIsEligibleSenderForReferralProgram;
            var10 = var1.bind(var5)();
            var1 = 25;
            var1 = var11[var1];
            var8 = var18.bind(var4)(var1);
            var5 = var8.useMobileReferralBadgeExperimentEnabled;
            var1 = {};
            var21 = 'PremiumTabBadge';
            var1['location'] = var21;
            var8 = var5.bind(var8)(var1);
            var1 = 26;
            var1 = var11[var1];
            var5 = var18.bind(var4)(var1);
            var1 = var5.useIsReferralProgramEntrypointBadgeAcknowledged;
            var1 = var1.bind(var5)();
            var5 = 27;
            var5 = var11[var5];
            var23 = var18.bind(var4)(var5);
            var21 = var23.usePromotionMarketingComponent;
            var5 = 14;
            var5 = var11[var5];
            var5 = var18.bind(var4)(var5);
            var5 = var5.MarketingComponentType;
            var5 = var5.PREMIUM_TAB;
            var5 = var21.bind(var23)(var5);
            var11 = var11[var20];
            var21 = var18.bind(var4)(var11);
            var20 = var21.useSelectedSnowflakeBoundDismissibleContent;
            var11 = var12 != var5;
            var18 = null;
            if(!var11) { _fun0003_ip = 22; continue _fun0003 }
case 23:
            var11 = var5.properties;
            var11 = var11.properties;
            var23 = var11.oneofKind;
            var11 = 'premiumTab';
            var18 = null;
            if(!(var11 === var23)) { _fun0003_ip = 22; continue _fun0003 }
case 24:
            var23 = _closure1_slot0;
            var11 = _closure1_slot2;
            var11 = var11[var9];
            var11 = var23.bind(var4)(var11);
            var11 = var11.DismissibleContent;
            var18 = var11.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE;
case 22:
            var11 = var12 == var5;
            var23 = undefined;
            if(var11) { _fun0003_ip = 25; continue _fun0003 }
case 26:
            var23 = var5.promotionId;
case 25:
            var24 = var12 != var23;
            var11 = '';
            if(!var24) { _fun0003_ip = 27; continue _fun0003 }
case 28:
            var11 = var23;
case 27:
            var29 = var21;
            var28 = var18;
            var27 = var11;
            var26 = undefined;
            var25 = true;
            var18 = var29[var20](var28, var27, var26, var25, var24);
            var11 = _closure1_slot3;
            var11 = var11.bind(var4)(var18, var19);
            var7 = var11[var7];
            var11 = var11[var17];
            if(!(var12 != var5)) { _fun0003_ip = 29; continue _fun0003 }
case 30:
            var11 = var5.properties;
            var11 = var11.properties;
            var17 = var11.oneofKind;
            var11 = 'premiumTab';
            if(!(var11 !== var17)) { _fun0003_ip = 31; continue _fun0003 }
case 29:
            var17 = _closure1_slot0;
            var11 = _closure1_slot2;
            var11 = var11[var9];
            var11 = var17.bind(var4)(var11);
            var11 = var11.DismissibleContent;
            var11 = var11.REFERRAL_TRIAL_MOBILE_NITRO_HOME_BADGE;
            if(!(var16 !== var11)) { _fun0003_ip = 32; continue _fun0003 }
case 33:
            var16 = _closure1_slot0;
            var11 = _closure1_slot2;
            var11 = var11[var9];
            var11 = var16.bind(var4)(var11);
            var11 = var11.DismissibleContent;
            var11 = var11.WHATS_NEW_TENURE_BADGE_REWARD;
            var18 = null;
            if(!(var14 === var11)) { _fun0003_ip = 34; continue _fun0003 }
case 35:
            var17 = _closure1_slot0;
            var19 = _closure1_slot2;
            var11 = 28;
            var14 = var19[var11];
            var14 = var17.bind(var4)(var14);
            var16 = var14.intl;
            var14 = var16.string;
            var11 = var19[var11];
            var11 = var17.bind(var4)(var11);
            var11 = var11.t;
            var11 = var11.jyYgZ+;
            var18 = var14.bind(var16)(var11);
            _fun0003_ip = 34; continue _fun0003;
case 32:
            var17 = _closure1_slot0;
            var19 = _closure1_slot2;
            var11 = 28;
            var14 = var19[var11];
            var14 = var17.bind(var4)(var14);
            var16 = var14.intl;
            var14 = var16.string;
            var11 = var19[var11];
            var11 = var17.bind(var4)(var11);
            var11 = var11.t;
            var11 = var11.uO4bXn;
            var18 = var14.bind(var16)(var11);
case 34:
            if(!var10) { _fun0003_ip = 36; continue _fun0003 }
case 37:
            if(!var8) { _fun0003_ip = 36; continue _fun0003 }
case 38:
            if(var1) { _fun0003_ip = 36; continue _fun0003 }
case 39:
            var10 = _closure1_slot8;
            var8 = _closure1_slot11;
            var1 = {};
            var17 = _closure1_slot0;
            var19 = _closure1_slot2;
            var11 = 28;
            var14 = var19[var11];
            var14 = var17.bind(var4)(var14);
            var16 = var14.intl;
            var14 = var16.string;
            var11 = var19[var11];
            var11 = var17.bind(var4)(var11);
            var11 = var11.t;
            var11 = var11.RDE0Sc;
            var11 = var14.bind(var16)(var11);
            var1['label'] = var11;
            var1 = var10.bind(var4)(var8, var1);
            _fun0003_ip = 40; continue _fun0003;
case 36:
            if(var2) { _fun0003_ip = 41; continue _fun0003 }
case 42:
            if(!(var12 == var13)) { _fun0003_ip = 43; continue _fun0003 }
case 44:
            if(!(var12 == var3)) { _fun0003_ip = 45; continue _fun0003 }
case 46:
            var8 = var12 != var18;
            var2 = null;
            if(!var8) { _fun0003_ip = 47; continue _fun0003 }
case 48:
            var11 = _closure1_slot8;
            var10 = _closure1_slot1;
            var21 = _closure1_slot2;
            var8 = 29;
            var8 = var21[var8];
            var10 = var10.bind(var4)(var8);
            var8 = {};
            var14 = var15.tag;
            var8['style'] = var14;
            var14 = _closure1_slot7;
            var14 = var14.PREMIUM_TIER_2;
            var8['colors'] = var14;
            var20 = _closure1_slot0;
            var14 = 30;
            var16 = var21[var14];
            var16 = var20.bind(var4)(var16);
            var16 = var16.HorizontalGradient;
            var16 = var16.START;
            var8['start'] = var16;
            var14 = var21[var14];
            var14 = var20.bind(var4)(var14);
            var14 = var14.HorizontalGradient;
            var14 = var14.END;
            var8['end'] = var14;
            var17 = _closure1_slot8;
            var14 = 11;
            var14 = var21[var14];
            var14 = var20.bind(var4)(var14);
            var16 = var14.Text;
            var14 = {'variant': 'eyebrow', 'color': 'always-white'};
            var19 = 31;
            var19 = var21[var19];
            var20 = var20.bind(var4)(var19);
            var19 = var20.isAndroid;
            var20 = var19.bind(var20)();
            var19 = undefined;
            if(!var20) { _fun0003_ip = 49; continue _fun0003 }
case 50:
            var19 = var15.text;
case 49:
            var14['style'] = var19;
            var14['children'] = var18;
            var14 = var17.bind(var4)(var16, var14);
            var8['children'] = var14;
            var2 = var11.bind(var4)(var10, var8);
case 47:
            _fun0003_ip = 51; continue _fun0003;
case 45:
            var3 = var3.expires_at;
            if(!(var12 != var3)) { _fun0003_ip = 52; continue _fun0003 }
case 53:
            var10 = _closure1_slot9;
            var8 = _closure1_slot4;
            var3 = {};
            var14 = var15.premiumDiscountBadge;
            var11 = new Array(2);
            var11[0] = var14;
            var14 = var15.ackedBadge;
            var11[1] = var14;
            var3['style'] = var11;
            var16 = _closure1_slot8;
            var21 = _closure1_slot0;
            var22 = _closure1_slot2;
            var17 = 15;
            var11 = var22[var17];
            var11 = var21.bind(var4)(var11);
            var14 = var11.Icon;
            var11 = {};
            var19 = _closure1_slot1;
            var18 = 16;
            var18 = var22[var18];
            var18 = var19.bind(var4)(var18);
            var11['source'] = var18;
            var17 = var22[var17];
            var17 = var21.bind(var4)(var17);
            var17 = var17.Icon;
            var17 = var17.Sizes;
            var17 = var17.EXTRA_SMALL;
            var11['size'] = var17;
            var17 = var15.icon;
            var17 = var17.color;
            var11['color'] = var17;
            var17 = var15.icon;
            var11['style'] = var17;
            var14 = var16.bind(var4)(var14, var11);
            var11 = new Array(2);
            var11[0] = var14;
            var17 = _closure1_slot8;
            var14 = 11;
            var14 = var22[var14];
            var14 = var21.bind(var4)(var14);
            var16 = var14.Text;
            var14 = {'variant': 'eyebrow', 'color': 'interactive-text-default'};
            var18 = var15.text;
            var14['style'] = var18;
            var18 = 28;
            var19 = var22[var18];
            var19 = var21.bind(var4)(var19);
            var20 = var19.intl;
            var19 = var20.string;
            var18 = var22[var18];
            var18 = var21.bind(var4)(var18);
            var18 = var18.t;
            var18 = var18["/DTtr6"];
            var18 = var19.bind(var20)(var18);
            var14['children'] = var18;
            var14 = var17.bind(var4)(var16, var14);
            var11[1] = var14;
            var3['children'] = var11;
            var3 = var10.bind(var4)(var8, var3);
            _fun0003_ip = 54; continue _fun0003;
case 52:
            var11 = _closure1_slot8;
            var10 = _closure1_slot1;
            var22 = _closure1_slot2;
            var8 = 29;
            var8 = var22[var8];
            var10 = var10.bind(var4)(var8);
            var8 = {};
            var14 = var15.premiumDiscountBadge;
            var8['style'] = var14;
            var14 = ['#db00a4', '#5968f0'];
            var8['colors'] = var14;
            var21 = _closure1_slot0;
            var14 = 30;
            var16 = var22[var14];
            var16 = var21.bind(var4)(var16);
            var16 = var16.HorizontalGradient;
            var16 = var16.START;
            var8['start'] = var16;
            var14 = var22[var14];
            var14 = var21.bind(var4)(var14);
            var14 = var14.HorizontalGradient;
            var14 = var14.END;
            var8['end'] = var14;
            var17 = _closure1_slot8;
            var14 = 11;
            var14 = var22[var14];
            var14 = var21.bind(var4)(var14);
            var16 = var14.Text;
            var14 = {'variant': 'eyebrow', 'color': 'always-white'};
            var18 = var15.text;
            var14['style'] = var18;
            var18 = 28;
            var19 = var22[var18];
            var19 = var21.bind(var4)(var19);
            var20 = var19.intl;
            var19 = var20.string;
            var18 = var22[var18];
            var18 = var21.bind(var4)(var18);
            var18 = var18.t;
            var18 = var18["/DTtr6"];
            var18 = var19.bind(var20)(var18);
            var14['children'] = var18;
            var14 = var17.bind(var4)(var16, var14);
            var8['children'] = var14;
            var3 = var11.bind(var4)(var10, var8);
case 54:
            var2 = var3;
case 51:
            _fun0003_ip = 55; continue _fun0003;
case 43:
            var10 = _closure1_slot8;
            var8 = _closure1_slot12;
            var3 = {};
            var14 = var12 == var13;
            var11 = undefined;
            if(var14) { _fun0003_ip = 56; continue _fun0003 }
case 57:
            var11 = var13.expires_at;
case 56:
            var11 = var12 != var11;
            var3['acked'] = var11;
            var14 = _closure1_slot0;
            var16 = _closure1_slot2;
            var11 = 28;
            var12 = var16[var11];
            var12 = var14.bind(var4)(var12);
            var17 = var12.intl;
            var13 = var17.string;
            var12 = var16[var11];
            var12 = var14.bind(var4)(var12);
            var12 = var12.t;
            var12 = var12.OS9KPu;
            var12 = var13.bind(var17)(var12);
            var3['badgeCopy'] = var12;
            var12 = var16[var11];
            var12 = var14.bind(var4)(var12);
            var13 = var12.intl;
            var12 = var13.string;
            var11 = var16[var11];
            var11 = var14.bind(var4)(var11);
            var11 = var11.t;
            var11 = var11.OS9KPu;
            var11 = var12.bind(var13)(var11);
            var3['ackedBadgeCopy'] = var11;
            var2 = var10.bind(var4)(var8, var3);
case 55:
            _fun0003_ip = 58; continue _fun0003;
case 41:
            var10 = _closure1_slot8;
            var8 = _closure1_slot1;
            var17 = _closure1_slot2;
            var3 = 29;
            var3 = var17[var3];
            var8 = var8.bind(var4)(var3);
            var3 = {};
            var11 = var15.tag;
            var3['style'] = var11;
            var11 = _closure1_slot7;
            var11 = var11.PREMIUM_TIER_2;
            var3['colors'] = var11;
            var16 = _closure1_slot0;
            var11 = 30;
            var12 = var17[var11];
            var12 = var16.bind(var4)(var12);
            var12 = var12.HorizontalGradient;
            var12 = var12.START;
            var3['start'] = var12;
            var11 = var17[var11];
            var11 = var16.bind(var4)(var11);
            var11 = var11.HorizontalGradient;
            var11 = var11.END;
            var3['end'] = var11;
            var13 = _closure1_slot8;
            var11 = 11;
            var11 = var17[var11];
            var11 = var16.bind(var4)(var11);
            var12 = var11.Text;
            var11 = {'variant': 'eyebrow', 'color': 'always-white'};
            var14 = 31;
            var14 = var17[var14];
            var16 = var16.bind(var4)(var14);
            var14 = var16.isAndroid;
            var16 = var14.bind(var16)();
            var14 = undefined;
            if(!var16) { _fun0003_ip = 59; continue _fun0003 }
case 60:
            var14 = var15.text;
case 59:
            var11['style'] = var14;
            var17 = _closure1_slot0;
            var18 = _closure1_slot2;
            var14 = 28;
            var15 = var18[var14];
            var15 = var17.bind(var4)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var14 = var18[var14];
            var14 = var17.bind(var4)(var14);
            var14 = var14.t;
            var14 = var14.y2b7CA;
            var14 = var15.bind(var16)(var14);
            var11['children'] = var14;
            var11 = var13.bind(var4)(var12, var11);
            var3['children'] = var11;
            var2 = var10.bind(var4)(var8, var3);
case 58:
            var1 = var2;
case 40:
            return var1;
case 31:
            var3 = _closure1_slot8;
            var2 = _closure1_slot12;
            var1 = {};
            var8 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var9];
            var6 = var8.bind(var4)(var6);
            var6 = var6.DismissibleContent;
            var6 = var6.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE;
            var6 = var7 !== var6;
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
            var5 = var5.id;
            var1['componentId'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();