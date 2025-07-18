// app/modules/premium/native/PremiumTabBadge.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var12 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
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
    var4 = var12.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = native4;
    var4 = var4.bind(var1)(var7);
    var10 = 2;
    var4 = var6[var10];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
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
    var11 = 7;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.round;
    var9['borderRadius'] = var13;
    var4['tag'] = var9;
    var9 = {'paddingVertical': 2, 'paddingHorizontal': 12, 'borderRadius': null, 'backgroundColor': null, 'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center', 'textAlignVertical': 'center'};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.round;
    var9['borderRadius'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_MODIFIER_ACCENT;
    var9['backgroundColor'] = var13;
    var4['acked'] = var9;
    var9 = {};
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.INTERACTIVE_NORMAL;
    var9['color'] = var11;
    var9['marginRight'] = var10;
    var4['icon'] = var9;
    var9 = {};
    var9['paddingBottom'] = var10;
    var4['text'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot10 = var4;
    var4 = 21;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/native/PremiumTabBadge.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function PremiumTabBadge() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = _closure1_slot10;
            var4 = undefined;
            var9 = var1.bind(var4)();
            var10 = _closure1_slot0;
            var1 = _closure1_slot2;
            var2 = 8;
            var2 = var1[var2];
            var3 = var10.bind(var4)(var2);
            var2 = var3.usePremiumTrialOffer;
            var2 = var2.bind(var3)();
            var8 = 9;
            var3 = var1[var8];
            var5 = var10.bind(var4)(var3);
            var3 = var5.useHasTier2Premium;
            var3 = var3.bind(var5)();
            var5 = 10;
            var5 = var1[var5];
            var6 = var10.bind(var4)(var5);
            var5 = var6.UNSAFE_useIsDismissibleContentDismissed;
            var11 = 11;
            var1 = var1[var11];
            var1 = var10.bind(var4)(var1);
            var1 = var1.DismissibleContent;
            var1 = var1.MOBILE_NITRO_HOME_SETTINGS_BADGE;
            var1 = var5.bind(var6)(var1);
            var1 = !var1;
            if(!var1) { _fun0001_ip = 121; continue _fun0001 }
 118:
            var1 = var3;
 121:
            var6 = _closure1_slot0;
            var10 = _closure1_slot2;
            var5 = 12;
            var5 = var10[var5];
            var12 = var6.bind(var4)(var5);
            var10 = var12.useStateFromStores;
            var5 = _closure1_slot5;
            var6 = new Array(1);
            var6[0] = var5;
            var5 = function() {
                var2 = _closure1_slot5;
                var1 = var2.getPremiumTypeSubscription;
                var1 = var1.bind(var2)();
                return var1;
            };
            var5 = var10.bind(var12)(var6, var5);
            var6 = null;
            var10 = var6 == var5;
            var13 = undefined;
            if(var10) { _fun0001_ip = 190; continue _fun0001 }
 184:
            var13 = var5.trialId;
 190:
            var5 = _closure1_slot6;
            var12 = _closure1_slot0;
            var10 = _closure1_slot2;
            var17 = 13;
            var10 = var10[var17];
            var12 = var12.bind(var4)(var10);
            var10 = var12.useSelectedDismissibleContent;
            if(!(var13 === var5)) { _fun0001_ip = 266; continue _fun0001 }
 224:
            if(var1) { _fun0001_ip = 266; continue _fun0001 }
 227:
            var13 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var11];
            var5 = var13.bind(var4)(var5);
            var5 = var5.DismissibleContent;
            var13 = var5.REFERRAL_TRIAL_MOBILE_NITRO_HOME_BADGE;
            var5 = new Array(1);
            var5[0] = var13;
            _fun0001_ip = 270; continue _fun0001;
 266:
            var5 = new Array(0);
 270:
            var16 = true;
            var10 = var10.bind(var12)(var5, var4, var16);
            var5 = _closure1_slot3;
            var14 = 2;
            var13 = var5.bind(var4)(var10, var14);
            var5 = 0;
            var10 = var13[var5];
            var12 = 1;
            var13 = var13[var12];
            var15 = _closure1_slot0;
            var13 = _closure1_slot2;
            var13 = var13[var17];
            var15 = var15.bind(var4)(var13);
            var13 = var15.useSelectedDismissibleContent;
            if(var1) { _fun0001_ip = 373; continue _fun0001 }
 331:
            if(!var3) { _fun0001_ip = 373; continue _fun0001 }
 334:
            var17 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var11];
            var3 = var17.bind(var4)(var3);
            var3 = var3.DismissibleContent;
            var17 = var3.WHATS_NEW_TENURE_BADGE_REWARD;
            var3 = new Array(1);
            var3[0] = var17;
            _fun0001_ip = 377; continue _fun0001;
 373:
            var3 = new Array(0);
 377:
            var13 = var13.bind(var15)(var3, var4, var16);
            var3 = _closure1_slot3;
            var3 = var3.bind(var4)(var13, var14);
            var5 = var3[var5];
            var3 = var3[var12];
            var12 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var11];
            var3 = var12.bind(var4)(var3);
            var3 = var3.DismissibleContent;
            var3 = var3.REFERRAL_TRIAL_MOBILE_NITRO_HOME_BADGE;
            if(!(var10 !== var3)) { _fun0001_ip = 527; continue _fun0001 }
 435:
            var10 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var11];
            var3 = var10.bind(var4)(var3);
            var3 = var3.DismissibleContent;
            var3 = var3.WHATS_NEW_TENURE_BADGE_REWARD;
            var13 = null;
            if(!(var5 === var3)) { _fun0001_ip = 584; continue _fun0001 }
 470:
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var3 = 14;
            var5 = var12[var3];
            var5 = var11.bind(var4)(var5);
            var10 = var5.intl;
            var5 = var10.string;
            var3 = var12[var3];
            var3 = var11.bind(var4)(var3);
            var3 = var3.t;
            var3 = var3.jyYgZ2;
            var13 = var5.bind(var10)(var3);
            _fun0001_ip = 584; continue _fun0001;
 527:
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var3 = 14;
            var5 = var12[var3];
            var5 = var11.bind(var4)(var5);
            var10 = var5.intl;
            var5 = var10.string;
            var3 = var12[var3];
            var3 = var11.bind(var4)(var3);
            var3 = var3.t;
            var3 = var3.uO4bXl;
            var13 = var5.bind(var10)(var3);
 584:
            if(var1) { _fun0001_ip = 1379; continue _fun0001 }
 590:
            if(!(var6 == var2)) { _fun0001_ip = 814; continue _fun0001 }
 597:
            var3 = var6 != var13;
            var1 = null;
            if(!var3) { _fun0001_ip = 812; continue _fun0001 }
 609:
            var10 = _closure1_slot8;
            var5 = _closure1_slot1;
            var16 = _closure1_slot2;
            var3 = 15;
            var3 = var16[var3];
            var5 = var5.bind(var4)(var3);
            var3 = {};
            var11 = var9.tag;
            var3['style'] = var11;
            var15 = _closure1_slot0;
            var11 = 16;
            var12 = var16[var11];
            var12 = var15.bind(var4)(var12);
            var12 = var12.Gradients;
            var12 = var12.PREMIUM_TIER_2;
            var3['colors'] = var12;
            var12 = var16[var11];
            var12 = var15.bind(var4)(var12);
            var12 = var12.HorizontalGradient;
            var12 = var12.START;
            var3['start'] = var12;
            var11 = var16[var11];
            var11 = var15.bind(var4)(var11);
            var11 = var11.HorizontalGradient;
            var11 = var11.END;
            var3['end'] = var11;
            var11 = 17;
            var11 = var16[var11];
            var11 = var15.bind(var4)(var11);
            var12 = var11.Text;
            var11 = {'variant': 'eyebrow', 'color': 'always-white'};
            var14 = 18;
            var14 = var16[var14];
            var15 = var15.bind(var4)(var14);
            var14 = var15.isAndroid;
            var15 = var14.bind(var15)();
            var14 = undefined;
            if(!var15) { _fun0001_ip = 788; continue _fun0001 }
 783:
            var14 = var9.text;
 788:
            var11['style'] = var14;
            var11['children'] = var13;
            var11 = var10.bind(var4)(var12, var11);
            var3['children'] = var11;
            var1 = var10.bind(var4)(var5, var3);
 812:
            return var1;
 814:
            var1 = var6 == var2;
            var5 = undefined;
            if(var1) { _fun0001_ip = 829; continue _fun0001 }
 823:
            var5 = var2.subscription_trial;
 829:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var8];
            var8 = var3.bind(var4)(var1);
            var3 = var8.formatTrialOfferIntervalDuration;
            var1 = {};
            var11 = var6 == var5;
            var10 = undefined;
            if(var11) { _fun0001_ip = 869; continue _fun0001 }
 863:
            var10 = var5.interval;
 869:
            var1['intervalType'] = var10;
            var11 = var6 == var5;
            var10 = undefined;
            if(var11) { _fun0001_ip = 889; continue _fun0001 }
 883:
            var10 = var5.interval_count;
 889:
            var1['intervalCount'] = var10;
            var12 = var3.bind(var8)(var1);
            var3 = var6 == var2;
            var1 = undefined;
            if(var3) { _fun0001_ip = 914; continue _fun0001 }
 908:
            var1 = var2.expires_at;
 914:
            if(!(var6 == var1)) { _fun0001_ip = 1185; continue _fun0001 }
 921:
            var3 = _closure1_slot8;
            var2 = _closure1_slot1;
            var8 = _closure1_slot2;
            var1 = 15;
            var1 = var8[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var8 = var9.tag;
            var1['style'] = var8;
            var8 = var6 == var5;
            var6 = undefined;
            if(var8) { _fun0001_ip = 971; continue _fun0001 }
 965:
            var6 = var5.sku_id;
 971:
            var5 = _closure1_slot7;
            var5 = var5.TIER_0;
            if(!(var6 !== var5)) { _fun0001_ip = 1019; continue _fun0001 }
 985:
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var5 = 16;
            var5 = var8[var5];
            var5 = var6.bind(var4)(var5);
            var5 = var5.Gradients;
            var5 = var5.PREMIUM_TIER_2;
            _fun0001_ip = 1051; continue _fun0001;
 1019:
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var6 = 16;
            var6 = var10[var6];
            var6 = var8.bind(var4)(var6);
            var6 = var6.Gradients;
            var5 = var6.PREMIUM_TIER_0;
 1051:
            var1['colors'] = var5;
            var6 = _closure1_slot0;
            var10 = _closure1_slot2;
            var5 = 16;
            var8 = var10[var5];
            var8 = var6.bind(var4)(var8);
            var8 = var8.HorizontalGradient;
            var8 = var8.START;
            var1['start'] = var8;
            var5 = var10[var5];
            var5 = var6.bind(var4)(var5);
            var5 = var5.HorizontalGradient;
            var5 = var5.END;
            var1['end'] = var5;
            var8 = _closure1_slot8;
            var5 = 17;
            var5 = var10[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.Text;
            var5 = {'variant': 'eyebrow', 'color': 'always-white'};
            var10 = var9.text;
            var5['style'] = var10;
            var5['children'] = var12;
            var5 = var8.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            _fun0001_ip = 1377; continue _fun0001;
 1185:
            var5 = _closure1_slot9;
            var3 = _closure1_slot4;
            var2 = {};
            var6 = var9.acked;
            var2['style'] = var6;
            var11 = _closure1_slot8;
            var14 = _closure1_slot1;
            var13 = _closure1_slot2;
            var10 = 19;
            var6 = var13[var10];
            var8 = var14.bind(var4)(var6);
            var6 = {};
            var15 = 20;
            var15 = var13[var15];
            var15 = var14.bind(var4)(var15);
            var6['source'] = var15;
            var10 = var13[var10];
            var10 = var14.bind(var4)(var10);
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
            var10 = _closure1_slot0;
            var8 = 17;
            var8 = var13[var8];
            var8 = var10.bind(var4)(var8);
            var10 = var8.Text;
            var8 = {'variant': 'eyebrow', 'color': 'interactive-normal'};
            var13 = var9.text;
            var8['style'] = var13;
            var8['children'] = var12;
            var8 = var11.bind(var4)(var10, var8);
            var6[1] = var8;
            var2['children'] = var6;
            var1 = var5.bind(var4)(var3, var2);
 1377:
            return var1;
 1379:
            var3 = _closure1_slot8;
            var2 = _closure1_slot1;
            var11 = _closure1_slot2;
            var1 = 15;
            var1 = var11[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var5 = var9.tag;
            var1['style'] = var5;
            var10 = _closure1_slot0;
            var5 = 16;
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
            var5 = 17;
            var5 = var11[var5];
            var5 = var10.bind(var4)(var5);
            var6 = var5.Text;
            var5 = {'variant': 'eyebrow', 'color': 'always-white'};
            var8 = 18;
            var8 = var11[var8];
            var10 = var10.bind(var4)(var8);
            var8 = var10.isAndroid;
            var10 = var8.bind(var10)();
            var8 = undefined;
            if(!var10) { _fun0001_ip = 1558; continue _fun0001 }
 1553:
            var8 = var9.text;
 1558:
            var5['style'] = var8;
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var7 = 14;
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