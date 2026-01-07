// app/modules/premium/native/PremiumTabBadge.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
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
    var4 = 23;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/native/PremiumTabBadge.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function PremiumTabBadge() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = _closure1_slot10;
            var4 = undefined;
            var9 = var1.bind(var4)();
            var8 = _closure1_slot0;
            var1 = _closure1_slot2;
            var2 = 8;
            var2 = var1[var2];
            var3 = var8.bind(var4)(var2);
            var2 = var3.usePremiumTrialOffer;
            var2 = var2.bind(var3)();
            var3 = 9;
            var3 = var1[var3];
            var5 = var8.bind(var4)(var3);
            var3 = var5.usePremiumDiscountOffer;
            var18 = var3.bind(var5)();
            var3 = 10;
            var3 = var1[var3];
            var3 = var8.bind(var4)(var3);
            var6 = var3.AndroidUserDiscountExperiment;
            var5 = var6.useConfig;
            var3 = {};
            var10 = 'PremiumTabBadge';
            var3['location'] = var10;
            var3 = var5.bind(var6)(var3);
            var13 = var3.descriptiveBadgeEnabled;
            var3 = 11;
            var3 = var1[var3];
            var5 = var8.bind(var4)(var3);
            var3 = var5.useHasTier2Premium;
            var3 = var3.bind(var5)();
            var5 = 12;
            var5 = var1[var5];
            var6 = var8.bind(var4)(var5);
            var5 = var6.UNSAFE_useIsDismissibleContentDismissed;
            var10 = 13;
            var1 = var1[var10];
            var1 = var8.bind(var4)(var1);
            var1 = var1.DismissibleContent;
            var1 = var1.MOBILE_NITRO_HOME_SETTINGS_BADGE;
            var1 = var5.bind(var6)(var1);
            var1 = !var1;
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var3;
case 2:
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var5 = 14;
            var5 = var8[var5];
            var11 = var6.bind(var4)(var5);
            var8 = var11.useStateFromStores;
            var5 = _closure1_slot5;
            var6 = new Array(1);
            var6[0] = var5;
            var5 = function() {
                var2 = _closure1_slot5;
                var1 = var2.getPremiumTypeSubscription;
                var1 = var1.bind(var2)();
                return var1;
            };
            var5 = var8.bind(var11)(var6, var5);
            var6 = null;
            var8 = var6 == var5;
            var12 = undefined;
            if(var8) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var12 = var5.trialId;
case 4:
            var5 = _closure1_slot6;
            var11 = _closure1_slot0;
            var8 = _closure1_slot2;
            var17 = 15;
            var8 = var8[var17];
            var11 = var11.bind(var4)(var8);
            var8 = var11.useSelectedDismissibleContent;
            if(!(var12 === var5)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            if(var1) { _fun0001_ip = 6; continue _fun0001 }
case 8:
            var12 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var10];
            var5 = var12.bind(var4)(var5);
            var5 = var5.DismissibleContent;
            var12 = var5.REFERRAL_TRIAL_MOBILE_NITRO_HOME_BADGE;
            var5 = new Array(1);
            var5[0] = var12;
            _fun0001_ip = 9; continue _fun0001;
case 6:
            var5 = new Array(0);
case 9:
            var16 = true;
            var8 = var8.bind(var11)(var5, var4, var16);
            var5 = _closure1_slot3;
            var14 = 2;
            var12 = var5.bind(var4)(var8, var14);
            var5 = 0;
            var8 = var12[var5];
            var11 = 1;
            var12 = var12[var11];
            var15 = _closure1_slot0;
            var12 = _closure1_slot2;
            var12 = var12[var17];
            var15 = var15.bind(var4)(var12);
            var12 = var15.useSelectedDismissibleContent;
            if(var1) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            if(!var3) { _fun0001_ip = 10; continue _fun0001 }
case 12:
            var17 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var10];
            var3 = var17.bind(var4)(var3);
            var3 = var3.DismissibleContent;
            var17 = var3.WHATS_NEW_TENURE_BADGE_REWARD;
            var3 = new Array(1);
            var3[0] = var17;
            _fun0001_ip = 13; continue _fun0001;
case 10:
            var3 = new Array(0);
case 13:
            var12 = var12.bind(var15)(var3, var4, var16);
            var3 = _closure1_slot3;
            var3 = var3.bind(var4)(var12, var14);
            var5 = var3[var5];
            var3 = var3[var11];
            var11 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var10];
            var3 = var11.bind(var4)(var3);
            var3 = var3.DismissibleContent;
            var3 = var3.REFERRAL_TRIAL_MOBILE_NITRO_HOME_BADGE;
            if(!(var8 !== var3)) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var8 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var10];
            var3 = var8.bind(var4)(var3);
            var3 = var3.DismissibleContent;
            var3 = var3.WHATS_NEW_TENURE_BADGE_REWARD;
            var12 = null;
            if(!(var5 === var3)) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = 16;
            var5 = var11[var3];
            var5 = var10.bind(var4)(var5);
            var8 = var5.intl;
            var5 = var8.string;
            var3 = var11[var3];
            var3 = var10.bind(var4)(var3);
            var3 = var3.t;
            var3 = var3.jyYgZ+;
            var12 = var5.bind(var8)(var3);
            _fun0001_ip = 16; continue _fun0001;
case 14:
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = 16;
            var5 = var11[var3];
            var5 = var10.bind(var4)(var5);
            var8 = var5.intl;
            var5 = var8.string;
            var3 = var11[var3];
            var3 = var10.bind(var4)(var3);
            var3 = var3.t;
            var3 = var3.uO4bXn;
            var12 = var5.bind(var8)(var3);
case 16:
            if(var1) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            if(!(var6 == var2)) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            if(!(var6 == var18)) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var3 = var6 != var12;
            var1 = null;
            if(!var3) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var8 = _closure1_slot8;
            var5 = _closure1_slot1;
            var16 = _closure1_slot2;
            var3 = 17;
            var3 = var16[var3];
            var5 = var5.bind(var4)(var3);
            var3 = {};
            var10 = var9.tag;
            var3['style'] = var10;
            var15 = _closure1_slot0;
            var10 = 18;
            var11 = var16[var10];
            var11 = var15.bind(var4)(var11);
            var11 = var11.Gradients;
            var11 = var11.PREMIUM_TIER_2;
            var3['colors'] = var11;
            var11 = var16[var10];
            var11 = var15.bind(var4)(var11);
            var11 = var11.HorizontalGradient;
            var11 = var11.START;
            var3['start'] = var11;
            var10 = var16[var10];
            var10 = var15.bind(var4)(var10);
            var10 = var10.HorizontalGradient;
            var10 = var10.END;
            var3['end'] = var10;
            var10 = 19;
            var10 = var16[var10];
            var10 = var15.bind(var4)(var10);
            var11 = var10.Text;
            var10 = {'variant': 'eyebrow', 'color': 'always-white'};
            var14 = 20;
            var14 = var16[var14];
            var15 = var15.bind(var4)(var14);
            var14 = var15.isAndroid;
            var15 = var14.bind(var15)();
            var14 = undefined;
            if(!var15) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            var14 = var9.text;
case 26:
            var10['style'] = var14;
            var10['children'] = var12;
            var10 = var8.bind(var4)(var11, var10);
            var3['children'] = var10;
            var1 = var8.bind(var4)(var5, var3);
case 24:
            _fun0001_ip = 28; continue _fun0001;
case 22:
            var3 = var18.expires_at;
            if(!(var6 != var3)) { _fun0001_ip = 29; continue _fun0001 }
case 30:
            var8 = _closure1_slot9;
            var5 = _closure1_slot4;
            var3 = {};
            var11 = var9.premiumDiscountBadge;
            var10 = new Array(2);
            var10[0] = var11;
            var11 = var9.ackedBadge;
            var10[1] = var11;
            var3['style'] = var10;
            var14 = _closure1_slot8;
            var16 = _closure1_slot1;
            var15 = _closure1_slot2;
            var12 = 21;
            var10 = var15[var12];
            var11 = var16.bind(var4)(var10);
            var10 = {};
            var17 = 22;
            var17 = var15[var17];
            var17 = var16.bind(var4)(var17);
            var10['source'] = var17;
            var12 = var15[var12];
            var12 = var16.bind(var4)(var12);
            var12 = var12.Sizes;
            var12 = var12.EXTRA_SMALL;
            var10['size'] = var12;
            var12 = var9.icon;
            var12 = var12.color;
            var10['color'] = var12;
            var12 = var9.icon;
            var10['style'] = var12;
            var11 = var14.bind(var4)(var11, var10);
            var10 = new Array(2);
            var10[0] = var11;
            var12 = _closure1_slot0;
            var11 = 19;
            var11 = var15[var11];
            var11 = var12.bind(var4)(var11);
            var12 = var11.Text;
            var11 = {'variant': 'eyebrow', 'color': 'interactive-text-default'};
            var15 = var9.text;
            var11['style'] = var15;
            var17 = _closure1_slot0;
            var21 = _closure1_slot2;
            var16 = 16;
            var15 = var21[var16];
            var15 = var17.bind(var4)(var15);
            var20 = var15.intl;
            if(var13) { _fun0001_ip = 31; continue _fun0001 }
case 32:
            var19 = var20.string;
            var15 = var21[var16];
            var15 = var17.bind(var4)(var15);
            var15 = var15.t;
            var15 = var15./DTtr6;
            var15 = var19.bind(var20)(var15);
            _fun0001_ip = 33; continue _fun0001;
case 31:
            var19 = var20.format;
            var16 = var21[var16];
            var16 = var17.bind(var4)(var16);
            var16 = var16.t;
            var17 = var16.AYcXGW;
            var16 = {};
            var21 = var18.discount;
            var21 = var21.amount;
            var16['discountOfferAmount'] = var21;
            var15 = var19.bind(var20)(var17, var16);
case 33:
            var11['children'] = var15;
            var11 = var14.bind(var4)(var12, var11);
            var10[1] = var11;
            var3['children'] = var10;
            var3 = var8.bind(var4)(var5, var3);
            _fun0001_ip = 34; continue _fun0001;
case 29:
            var10 = _closure1_slot8;
            var8 = _closure1_slot1;
            var14 = _closure1_slot2;
            var5 = 17;
            var5 = var14[var5];
            var8 = var8.bind(var4)(var5);
            var5 = {};
            var11 = var9.premiumDiscountBadge;
            var5['style'] = var11;
            var11 = ['#db00a4', '#5968f0'];
            var5['colors'] = var11;
            var12 = _closure1_slot0;
            var11 = 18;
            var15 = var14[var11];
            var15 = var12.bind(var4)(var15);
            var15 = var15.HorizontalGradient;
            var15 = var15.START;
            var5['start'] = var15;
            var11 = var14[var11];
            var11 = var12.bind(var4)(var11);
            var11 = var11.HorizontalGradient;
            var11 = var11.END;
            var5['end'] = var11;
            var11 = 19;
            var11 = var14[var11];
            var11 = var12.bind(var4)(var11);
            var12 = var11.Text;
            var11 = {'variant': 'eyebrow', 'color': 'always-white'};
            var14 = var9.text;
            var11['style'] = var14;
            var15 = _closure1_slot0;
            var19 = _closure1_slot2;
            var14 = 16;
            var16 = var19[var14];
            var16 = var15.bind(var4)(var16);
            var17 = var16.intl;
            if(var13) { _fun0001_ip = 35; continue _fun0001 }
case 36:
            var16 = var17.string;
            var13 = var19[var14];
            var13 = var15.bind(var4)(var13);
            var13 = var13.t;
            var13 = var13./DTtr6;
            var13 = var16.bind(var17)(var13);
            _fun0001_ip = 37; continue _fun0001;
case 35:
            var16 = var17.format;
            var14 = var19[var14];
            var14 = var15.bind(var4)(var14);
            var14 = var14.t;
            var15 = var14.AYcXGW;
            var14 = {};
            var18 = var18.discount;
            var18 = var18.amount;
            var14['discountOfferAmount'] = var18;
            var13 = var16.bind(var17)(var15, var14);
case 37:
            var11['children'] = var13;
            var11 = var10.bind(var4)(var12, var11);
            var5['children'] = var11;
            var3 = var10.bind(var4)(var8, var5);
case 34:
            var1 = var3;
case 28:
            return var1;
case 20:
            var1 = var6 == var2;
            var5 = undefined;
            if(var1) { _fun0001_ip = 38; continue _fun0001 }
case 39:
            var5 = var2.subscription_trial;
case 38:
            var3 = var6 == var2;
            var1 = undefined;
            if(var3) { _fun0001_ip = 40; continue _fun0001 }
case 41:
            var1 = var2.expires_at;
case 40:
            if(!(var6 == var1)) { _fun0001_ip = 42; continue _fun0001 }
case 43:
            var3 = _closure1_slot8;
            var2 = _closure1_slot1;
            var8 = _closure1_slot2;
            var1 = 17;
            var1 = var8[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var8 = var9.tag;
            var1['style'] = var8;
            var8 = var6 == var5;
            var6 = undefined;
            if(var8) { _fun0001_ip = 44; continue _fun0001 }
case 45:
            var6 = var5.sku_id;
case 44:
            var5 = _closure1_slot7;
            var5 = var5.TIER_0;
            if(!(var6 !== var5)) { _fun0001_ip = 46; continue _fun0001 }
case 47:
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var5 = 18;
            var5 = var8[var5];
            var5 = var6.bind(var4)(var5);
            var5 = var5.Gradients;
            var5 = var5.PREMIUM_TIER_2;
            _fun0001_ip = 48; continue _fun0001;
case 46:
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var6 = 18;
            var6 = var10[var6];
            var6 = var8.bind(var4)(var6);
            var6 = var6.Gradients;
            var5 = var6.PREMIUM_TIER_0;
case 48:
            var1['colors'] = var5;
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var5 = 18;
            var6 = var14[var5];
            var6 = var13.bind(var4)(var6);
            var6 = var6.HorizontalGradient;
            var6 = var6.START;
            var1['start'] = var6;
            var5 = var14[var5];
            var5 = var13.bind(var4)(var5);
            var5 = var5.HorizontalGradient;
            var5 = var5.END;
            var1['end'] = var5;
            var8 = _closure1_slot8;
            var5 = 19;
            var5 = var14[var5];
            var5 = var13.bind(var4)(var5);
            var6 = var5.Text;
            var5 = {'variant': 'eyebrow', 'color': 'always-white'};
            var10 = var9.text;
            var5['style'] = var10;
            var10 = 16;
            var11 = var14[var10];
            var11 = var13.bind(var4)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var10 = var14[var10];
            var10 = var13.bind(var4)(var10);
            var10 = var10.t;
            var10 = var10.OS9KPu;
            var10 = var11.bind(var12)(var10);
            var5['children'] = var10;
            var5 = var8.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            _fun0001_ip = 49; continue _fun0001;
case 42:
            var5 = _closure1_slot9;
            var3 = _closure1_slot4;
            var2 = {};
            var6 = var9.acked;
            var2['style'] = var6;
            var11 = _closure1_slot8;
            var12 = _closure1_slot1;
            var16 = _closure1_slot2;
            var10 = 21;
            var6 = var16[var10];
            var8 = var12.bind(var4)(var6);
            var6 = {};
            var13 = 22;
            var13 = var16[var13];
            var13 = var12.bind(var4)(var13);
            var6['source'] = var13;
            var10 = var16[var10];
            var10 = var12.bind(var4)(var10);
            var10 = var10.Sizes;
            var10 = var10.EXTRA_SMALL;
            var6['size'] = var10;
            var10 = var9.icon;
            var10 = var10.color;
            var6['color'] = var10;
            var10 = var9.icon;
            var6['style'] = var10;
            var8 = var11.bind(var4)(var8, var6);
            var6 = new Array(2);
            var6[0] = var8;
            var15 = _closure1_slot0;
            var8 = 19;
            var8 = var16[var8];
            var8 = var15.bind(var4)(var8);
            var10 = var8.Text;
            var8 = {'variant': 'eyebrow', 'color': 'interactive-text-default'};
            var12 = var9.text;
            var8['style'] = var12;
            var12 = 16;
            var13 = var16[var12];
            var13 = var15.bind(var4)(var13);
            var14 = var13.intl;
            var13 = var14.string;
            var12 = var16[var12];
            var12 = var15.bind(var4)(var12);
            var12 = var12.t;
            var12 = var12.OS9KPu;
            var12 = var13.bind(var14)(var12);
            var8['children'] = var12;
            var8 = var11.bind(var4)(var10, var8);
            var6[1] = var8;
            var2['children'] = var6;
            var1 = var5.bind(var4)(var3, var2);
case 49:
            return var1;
case 18:
            var3 = _closure1_slot8;
            var2 = _closure1_slot1;
            var11 = _closure1_slot2;
            var1 = 17;
            var1 = var11[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var5 = var9.tag;
            var1['style'] = var5;
            var10 = _closure1_slot0;
            var5 = 18;
            var6 = var11[var5];
            var6 = var10.bind(var4)(var6);
            var6 = var6.Gradients;
            var6 = var6.PREMIUM_TIER_2;
            var1['colors'] = var6;
            var6 = var11[var5];
            var6 = var10.bind(var4)(var6);
            var6 = var6.HorizontalGradient;
            var6 = var6.START;
            var1['start'] = var6;
            var5 = var11[var5];
            var5 = var10.bind(var4)(var5);
            var5 = var5.HorizontalGradient;
            var5 = var5.END;
            var1['end'] = var5;
            var5 = 19;
            var5 = var11[var5];
            var5 = var10.bind(var4)(var5);
            var6 = var5.Text;
            var5 = {'variant': 'eyebrow', 'color': 'always-white'};
            var8 = 20;
            var8 = var11[var8];
            var10 = var10.bind(var4)(var8);
            var8 = var10.isAndroid;
            var10 = var8.bind(var10)();
            var8 = undefined;
            if(!var10) { _fun0001_ip = 50; continue _fun0001 }
case 51:
            var8 = var9.text;
case 50:
            var5['style'] = var8;
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var7 = 16;
            var8 = var11[var7];
            var8 = var10.bind(var4)(var8);
            var9 = var8.intl;
            var8 = var9.string;
            var7 = var11[var7];
            var7 = var10.bind(var4)(var7);
            var7 = var7.t;
            var7 = var7.y2b7CA;
            var7 = var8.bind(var9)(var7);
            var5['children'] = var7;
            var5 = var3.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();