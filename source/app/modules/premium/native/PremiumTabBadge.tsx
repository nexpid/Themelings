// app/modules/premium/native/PremiumTabBadge.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
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
    var4 = metroImportAll;
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
case 0:
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
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var3;
case 2:
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
            if(var10) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var13 = var5.trialId;
case 4:
            var5 = _closure1_slot6;
            var12 = _closure1_slot0;
            var10 = _closure1_slot2;
            var17 = 13;
            var10 = var10[var17];
            var12 = var12.bind(var4)(var10);
            var10 = var12.useSelectedDismissibleContent;
            if(!(var13 === var5)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            if(var1) { _fun0001_ip = 6; continue _fun0001 }
case 8:
            var13 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var11];
            var5 = var13.bind(var4)(var5);
            var5 = var5.DismissibleContent;
            var13 = var5.REFERRAL_TRIAL_MOBILE_NITRO_HOME_BADGE;
            var5 = new Array(1);
            var5[0] = var13;
            _fun0001_ip = 9; continue _fun0001;
case 6:
            var5 = new Array(0);
case 9:
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
            if(var1) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            if(!var3) { _fun0001_ip = 10; continue _fun0001 }
case 12:
            var17 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var11];
            var3 = var17.bind(var4)(var3);
            var3 = var3.DismissibleContent;
            var17 = var3.WHATS_NEW_TENURE_BADGE_REWARD;
            var3 = new Array(1);
            var3[0] = var17;
            _fun0001_ip = 13; continue _fun0001;
case 10:
            var3 = new Array(0);
case 13:
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
            if(!(var10 !== var3)) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var10 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var11];
            var3 = var10.bind(var4)(var3);
            var3 = var3.DismissibleContent;
            var3 = var3.WHATS_NEW_TENURE_BADGE_REWARD;
            var13 = null;
            if(!(var5 === var3)) { _fun0001_ip = 16; continue _fun0001 }
case 17:
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
            _fun0001_ip = 16; continue _fun0001;
case 14:
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
case 16:
            if(var1) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            if(!(var6 == var2)) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var3 = var6 != var13;
            var1 = null;
            if(!var3) { _fun0001_ip = 22; continue _fun0001 }
case 23:
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
            if(!var15) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var14 = var9.text;
case 24:
            var11['style'] = var14;
            var11['children'] = var13;
            var11 = var10.bind(var4)(var12, var11);
            var3['children'] = var11;
            var1 = var10.bind(var4)(var5, var3);
case 22:
            return var1;
case 20:
            var1 = var6 == var2;
            var5 = undefined;
            if(var1) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            var5 = var2.subscription_trial;
case 26:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var8];
            var8 = var3.bind(var4)(var1);
            var3 = var8.formatTrialOfferIntervalDuration;
            var1 = {};
            var11 = var6 == var5;
            var10 = undefined;
            if(var11) { _fun0001_ip = 28; continue _fun0001 }
case 29:
            var10 = var5.interval;
case 28:
            var1['intervalType'] = var10;
            var11 = var6 == var5;
            var10 = undefined;
            if(var11) { _fun0001_ip = 30; continue _fun0001 }
case 31:
            var10 = var5.interval_count;
case 30:
            var1['intervalCount'] = var10;
            var12 = var3.bind(var8)(var1);
            var3 = var6 == var2;
            var1 = undefined;
            if(var3) { _fun0001_ip = 32; continue _fun0001 }
case 33:
            var1 = var2.expires_at;
case 32:
            if(!(var6 == var1)) { _fun0001_ip = 34; continue _fun0001 }
case 35:
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
            if(var8) { _fun0001_ip = 36; continue _fun0001 }
case 37:
            var6 = var5.sku_id;
case 36:
            var5 = _closure1_slot7;
            var5 = var5.TIER_0;
            if(!(var6 !== var5)) { _fun0001_ip = 38; continue _fun0001 }
case 39:
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var5 = 16;
            var5 = var8[var5];
            var5 = var6.bind(var4)(var5);
            var5 = var5.Gradients;
            var5 = var5.PREMIUM_TIER_2;
            _fun0001_ip = 40; continue _fun0001;
case 38:
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var6 = 16;
            var6 = var10[var6];
            var6 = var8.bind(var4)(var6);
            var6 = var6.Gradients;
            var5 = var6.PREMIUM_TIER_0;
case 40:
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
            _fun0001_ip = 41; continue _fun0001;
case 34:
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
case 41:
            return var1;
case 18:
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
            if(!var10) { _fun0001_ip = 42; continue _fun0001 }
case 43:
            var8 = var9.text;
case 42:
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