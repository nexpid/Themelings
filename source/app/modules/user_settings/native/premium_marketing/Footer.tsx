// app/modules/user_settings/native/premium_marketing/Footer.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
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
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var9 = var4.AnalyticsPages;
    var8 = var4.AnalyticsSections;
    var7 = var4.AnalyticsObjectTypes;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var10 = var4.SubscriptionIntervalTypes;
    var _closure1_slot4 = var10;
    var4 = var4.PremiumTypes;
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var10 = var4.jsx;
    var _closure1_slot6 = var10;
    var10 = var4.Fragment;
    var _closure1_slot7 = var10;
    var4 = var4.jsxs;
    var _closure1_slot8 = var4;
    var4 = {};
    var9 = var9.USER_SETTINGS;
    var4['page'] = var9;
    var8 = var8.SETTINGS_PREMIUM;
    var4['section'] = var8;
    var7 = var7.BUY;
    var4['objectType'] = var7;
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'flex': 1, 'flexDirection': 'column', 'alignItems': 'center', 'width': '100%'};
    var4['container'] = var9;
    var9 = {};
    var10 = 24;
    var9['marginBottom'] = var10;
    var4['footerText'] = var9;
    var9 = {};
    var10 = 40;
    var9['marginBottom'] = var10;
    var4['button'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot10 = var4;
    var4 = 17;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/native/premium_marketing/Footer.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var8 = var1.style;
            var7 = var1.showSubscribeButton;
            var4 = undefined;
            var _closure2_slot2 = var4;
            var1 = _closure1_slot10;
            var14 = var1.bind(var4)();
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 6;
            var1 = var5[var1];
            var2 = var3.bind(var4)(var1);
            var1 = 7;
            var1 = var5[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.PREMIUM_MARKETING_FOOTER;
            var1 = var2.bind(var4)(var1);
            var1 = var1.analyticsLocations;
            var _closure2_slot0 = var1;
            var2 = _closure1_slot0;
            var1 = 8;
            var1 = var5[var1];
            var3 = var2.bind(var4)(var1);
            var1 = var3.usePremiumTrialOffer;
            var3 = var1.bind(var3)();
            var1 = 9;
            var1 = var5[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.usePremiumTrialOfferPremiumType;
            var2 = var1.bind(var2)();
            var _closure2_slot1 = var2;
            var1 = null;
            var5 = var1 == var3;
            var11 = undefined;
            if(var5) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var11 = var3.subscription_trial;
case 2:
            var5 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 10;
            var3 = var9[var3];
            var9 = var5.bind(var4)(var3);
            var5 = var9.formatTrialCtaIntervalDuration;
            var3 = {};
            var12 = var1 == var11;
            var10 = undefined;
            if(var12) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var10 = var11.interval;
case 4:
            var3['intervalType'] = var10;
            var12 = var1 == var11;
            var10 = undefined;
            if(var12) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var10 = var11.interval_count;
case 6:
            var3['intervalCount'] = var10;
            var17 = var5.bind(var9)(var3);
            var18 = var1 != var2;
            _closure2_slot2 = var18;
            var3 = _closure1_slot8;
            var2 = _closure1_slot3;
            var1 = {};
            var9 = var14.container;
            var5 = new Array(2);
            var5[0] = var9;
            var5[1] = var8;
            var1['style'] = var5;
            if(!var7) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var9 = _closure1_slot8;
            var8 = _closure1_slot7;
            var5 = {};
            var13 = _closure1_slot6;
            var15 = _closure1_slot0;
            var19 = _closure1_slot2;
            var10 = 11;
            var10 = var19[var10];
            var10 = var15.bind(var4)(var10);
            var11 = var10.Text;
            var10 = {'style': null, 'variant': 'heading-xl/extrabold', 'color': 'mobile-text-heading-primary'};
            var12 = var14.footerText;
            var10['style'] = var12;
            var22 = 12;
            var12 = var19[var22];
            var12 = var15.bind(var4)(var12);
            var21 = var12.intl;
            var20 = var21.string;
            var12 = var19[var22];
            var12 = var15.bind(var4)(var12);
            var12 = var12.t;
            var12 = var12["2bSPbq"];
            var12 = var20.bind(var21)(var12);
            var10['children'] = var12;
            var11 = var13.bind(var4)(var11, var10);
            var10 = new Array(2);
            var10[0] = var11;
            var12 = _closure1_slot3;
            var11 = {};
            var14 = var14.button;
            var11['style'] = var14;
            var14 = 13;
            var14 = var19[var14];
            var14 = var15.bind(var4)(var14);
            var15 = var14.Button;
            var14 = {'text': null, 'variant': 'primary', 'size': 'lg', 'onPress': null, 'grow': true};
            if(var18) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var21 = _closure1_slot0;
            var18 = _closure1_slot2;
            var19 = var18[var22];
            var19 = var21.bind(var4)(var19);
            var20 = var19.intl;
            var19 = var20.string;
            var18 = var18[var22];
            var18 = var21.bind(var4)(var18);
            var18 = var18.t;
            var18 = var18["8x0jKT"];
            var17 = var19.bind(var20)(var18);
case 10:
            var14['text'] = var17;
            var16 = function onPress() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 14;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = {};
                    var4 = _closure1_slot9;
                    var2['analyticsLocation'] = var4;
                    var5 = _closure2_slot0;
                    var2['analyticsLocations'] = var5;
                    var7 = _closure2_slot2;
                    var5 = undefined;
                    if(var7) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                    var5 = function(arg1) {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                            var2 = arg1;
                            var1 = var2.additionalPlans;
                            var6 = var2.isDeprecated;
                            var5 = var2.numPremiumGuild;
                            var4 = var2.interval;
                            var3 = var2.premiumTier;
                            var1 = var1.length;
                            var2 = 0;
                            var1 = var2 === var1;
                            if(!var1) { _fun0003_ip = 14; continue _fun0003 }
case 15:
                            var1 = !var6;
case 14:
                            if(!var1) { _fun0003_ip = 16; continue _fun0003 }
case 17:
                            var1 = var2 === var5;
case 16:
                            if(!var1) { _fun0003_ip = 18; continue _fun0003 }
case 19:
                            var2 = _closure1_slot4;
                            var2 = var2.MONTH;
                            var1 = var4 === var2;
case 18:
                            if(!var1) { _fun0003_ip = 20; continue _fun0003 }
case 21:
                            var2 = _closure1_slot5;
                            var2 = var2.TIER_1;
                            var1 = var3 !== var2;
case 20:
                            return var1;
                        }
                    };
case 12:
                    var2['predicate'] = var5;
                    var7 = _closure2_slot2;
                    var5 = undefined;
                    if(var7) { _fun0002_ip = 22; continue _fun0002 }
case 21:
                    var5 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.premiumTier;
                        var1 = _closure1_slot5;
                        var1 = var1.TIER_2;
                        var1 = var2 === var1;
                        return var1;
                    };
case 22:
                    var2['initialSelectedCriteria'] = var5;
                    var4 = _closure2_slot1;
                    var2['premiumType'] = var4;
                    var4 = false;
                    var2['showFormTitle'] = var4;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var14['onPress'] = var16;
            var14 = var13.bind(var4)(var15, var14);
            var11['children'] = var14;
            var11 = var13.bind(var4)(var12, var11);
            var10[1] = var11;
            var5['children'] = var10;
            var7 = var9.bind(var4)(var8, var5);
case 8:
            var5 = new Array(2);
            var5[0] = var7;
            var8 = _closure1_slot6;
            var10 = _closure1_slot1;
            var11 = _closure1_slot2;
            var6 = 15;
            var6 = var11[var6];
            var7 = var10.bind(var4)(var6);
            var6 = {};
            var9 = 16;
            var9 = var11[var9];
            var9 = var10.bind(var4)(var9);
            var6['source'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();