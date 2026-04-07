// app/modules/premium/native/trials/PremiumTrialOfferActionSheetContent.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var13 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var13;
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
    var7 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.View;
    var _closure1_slot3 = var8;
    var4 = var4.Image;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.PremiumSubscriptionSKUs;
    var _closure1_slot6 = var8;
    var4 = var4.PremiumTypes;
    var _closure1_slot7 = var4;
    var15 = 4;
    var4 = var6[var15];
    var4 = var5.bind(var1)(var4);
    var4 = var4.HelpdeskArticles;
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var14 = var4.Fonts;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot9 = var8;
    var4 = var4.jsxs;
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {'paddingTop': 16, 'paddingLeft': 16, 'paddingRight': 16};
    var11 = 16;
    var12 = 8;
    var16 = var6[var12];
    var16 = var13.bind(var1)(var16);
    var16 = var16.colors;
    var16 = var16.BACKGROUND_BASE_LOW;
    var10['backgroundColor'] = var16;
    var4['container'] = var10;
    var10 = {'width': '100%', 'height': 375, 'borderRadius': null, 'marginBottom': 8};
    var16 = var6[var12];
    var16 = var13.bind(var1)(var16);
    var16 = var16.radii;
    var16 = var16.sm;
    var10['borderRadius'] = var16;
    var4['img'] = var10;
    var10 = {};
    var10['marginVertical'] = var12;
    var4['titleFont'] = var10;
    var10 = {};
    var10['paddingVertical'] = var15;
    var4['rowStyles'] = var10;
    var10 = {};
    var14 = var14.PRIMARY_NORMAL;
    var10['fontFamily'] = var14;
    var12 = var6[var12];
    var12 = var13.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.MOBILE_TEXT_HEADING_PRIMARY;
    var10['color'] = var12;
    var10['fontSize'] = var11;
    var11 = -8;
    var10['marginLeft'] = var11;
    var4['labelStyles'] = var10;
    var10 = {};
    var11 = 24;
    var10['marginTop'] = var11;
    var4['buttonsContainer'] = var10;
    var10 = {'marginBottom': 8, 'textDecorationLine': 'underline'};
    var4['termsApplyText'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot11 = var4;
    var4 = var7.memo;
    var2 = function PremiumTrialOfferActionSheetContent(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var1 = var2.trialOffer;
            var22 = var2.intervalDuration;
            var3 = var2.onConfirm;
            var _closure2_slot0 = var3;
            var13 = var2.onDismiss;
            var4 = undefined;
            var _closure2_slot2 = var4;
            var2 = _closure1_slot11;
            var9 = var2.bind(var4)();
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 9;
            var2 = var5[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.bind(var4)();
            var _closure2_slot1 = var2;
            var3 = _closure1_slot0;
            var2 = 10;
            var2 = var5[var2];
            var7 = var3.bind(var4)(var2);
            var5 = var7.useStateFromStores;
            var2 = _closure1_slot5;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var1 = _closure1_slot5;
                var1 = var1.locale;
                return var1;
            };
            var3 = var5.bind(var7)(var3, var2);
            var21 = null;
            var2 = var21 == var1;
            var25 = undefined;
            if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var25 = var1.subscription_trial;
case 2:
            var5 = var21 == var1;
            var2 = undefined;
            if(var5) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = var1.subscription_trial;
            var5 = var21 == var1;
            var2 = undefined;
            if(var5) { _fun0001_ip = 4; continue _fun0001 }
case 6:
            var2 = var1.sku_id;
case 4:
            var1 = _closure1_slot6;
            var1 = var1.TIER_0;
            var12 = var2 === var1;
            var2 = ['en-US', 'en-GB'];
            var1 = var2.includes;
            var10 = var1.bind(var2)(var3);
            var1 = {};
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 11;
            var2 = var5[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.UploadIcon;
            var1['IconComponent'] = var2;
            var8 = _closure1_slot0;
            var3 = _closure1_slot2;
            var18 = 12;
            var2 = var3[var18];
            var2 = var8.bind(var4)(var2);
            var7 = var2.intl;
            if(var12) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var11 = var7.formatToPlainString;
            var2 = var3[var18];
            var2 = var8.bind(var4)(var2);
            var2 = var2.t;
            var5 = var2.p8QVLT;
            var2 = {};
            var14 = 13;
            var14 = var3[var14];
            var19 = var8.bind(var4)(var14);
            var17 = var19.getMaxFileSizeForPremiumType;
            var14 = _closure1_slot7;
            var16 = var14.TIER_2;
            var14 = {};
            var20 = false;
            var14['useSpace'] = var20;
            var14 = var17.bind(var19)(var16, var14);
            var2['maxUploadPremium'] = var14;
            var2 = var11.bind(var7)(var5, var2);
            _fun0001_ip = 9; continue _fun0001;
case 7:
            var5 = var7.string;
            var3 = var3[var18];
            var3 = var8.bind(var4)(var3);
            var3 = var3.t;
            var3 = var3.thJN9r;
            var2 = var5.bind(var7)(var3);
case 9:
            var1['label'] = var2;
            var16 = new Array(2);
            var16[0] = var1;
            var1 = {};
            var7 = _closure1_slot0;
            var2 = _closure1_slot2;
            var3 = 14;
            var3 = var2[var3];
            var3 = var7.bind(var4)(var3);
            var3 = var3.ReactionIcon;
            var1['IconComponent'] = var3;
            var3 = var2[var18];
            var3 = var7.bind(var4)(var3);
            var5 = var3.intl;
            var3 = var5.string;
            var2 = var2[var18];
            var2 = var7.bind(var4)(var2);
            var2 = var2.t;
            var2 = var2.KjrZ8Z;
            var2 = var3.bind(var5)(var2);
            var1['label'] = var2;
            var16[1] = var1;
            var3 = {};
            var8 = _closure1_slot0;
            var1 = _closure1_slot2;
            if(var12) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var2 = 16;
            var2 = var1[var2];
            var2 = var8.bind(var4)(var2);
            var2 = var2.BoostGemIcon;
            var3['IconComponent'] = var2;
            var2 = var1[var18];
            var2 = var8.bind(var4)(var2);
            var7 = var2.intl;
            var5 = var7.string;
            var2 = var1[var18];
            var2 = var8.bind(var4)(var2);
            var2 = var2.t;
            var2 = var2.Pt1Sji;
            var2 = var5.bind(var7)(var2);
            var3['label'] = var2;
            var2 = new Array(1);
            var2[0] = var3;
            _fun0001_ip = 12; continue _fun0001;
case 10:
            var5 = 15;
            var5 = var1[var5];
            var5 = var8.bind(var4)(var5);
            var5 = var5.NitroWheelIcon;
            var3['IconComponent'] = var5;
            var5 = var1[var18];
            var5 = var8.bind(var4)(var5);
            var7 = var5.intl;
            var5 = var7.string;
            var1 = var1[var18];
            var1 = var8.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.V94zDn;
            var1 = var5.bind(var7)(var1);
            var3['label'] = var1;
            var1 = new Array(1);
            var1[0] = var3;
            var2 = var1;
case 12:
            var27 = 2;
            var29 = var16;
            var28 = var2;
            var1 = arraySpread(var29, var28, var27);
            var11 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 17;
            var1 = var2[var1];
            var3 = var11.bind(var4)(var1);
            var2 = var3.getArticleURL;
            var1 = _closure1_slot8;
            var1 = var1.PREMIUM_TRIAL;
            var1 = var2.bind(var3)(var1);
            _closure2_slot2 = var1;
            var3 = _closure1_slot10;
            var2 = _closure1_slot3;
            var1 = {};
            var5 = var9.container;
            var1['style'] = var5;
            var8 = _closure1_slot9;
            var7 = _closure1_slot4;
            var5 = {};
            var17 = _closure1_slot2;
            if(var10) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            if(var12) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var10 = 21;
            var10 = var17[var10];
            _fun0001_ip = 17; continue _fun0001;
case 15:
            var14 = 20;
            var10 = var17[var14];
case 17:
            _fun0001_ip = 18; continue _fun0001;
case 13:
            if(var12) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var12 = 19;
            var12 = var17[var12];
            _fun0001_ip = 21; continue _fun0001;
case 19:
            var14 = 18;
            var12 = var17[var14];
case 21:
            var10 = var12;
case 18:
            var10 = var11.bind(var4)(var10);
            var5['source'] = var10;
            var10 = var9.img;
            var5['style'] = var10;
            var7 = var8.bind(var4)(var7, var5);
            var5 = new Array(5);
            var5[0] = var7;
            var11 = _closure1_slot9;
            var14 = _closure1_slot0;
            var12 = _closure1_slot2;
            var7 = 22;
            var8 = var12[var7];
            var8 = var14.bind(var4)(var8);
            var10 = var8.Text;
            var8 = {'variant': 'heading-xl/extrabold', 'color': 'mobile-text-heading-primary'};
            var17 = var9.titleFont;
            var8['style'] = var17;
            var17 = var12[var18];
            var17 = var14.bind(var4)(var17);
            var19 = var17.intl;
            var17 = var19.formatToPlainString;
            var12 = var12[var18];
            var12 = var14.bind(var4)(var12);
            var12 = var12.t;
            var14 = var12.q8eMc0;
            var12 = {};
            var23 = var21 == var25;
            var20 = undefined;
            if(var23) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var20 = var25.sku_id;
case 22:
            var23 = var21 != var20;
            var20 = null;
            if(!var23) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var24 = _closure1_slot0;
            var26 = _closure1_slot2;
            var23 = 13;
            var23 = var26[var23];
            var24 = var24.bind(var4)(var23);
            var23 = var24.getDisplayNameFromSku;
            var26 = var21 == var25;
            var21 = undefined;
            if(var26) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            var21 = var25.sku_id;
case 26:
            var20 = var23.bind(var24)(var21);
case 24:
            var12['displayName'] = var20;
            var12['duration'] = var22;
            var12 = var17.bind(var19)(var14, var12);
            var8['children'] = var12;
            var8 = var11.bind(var4)(var10, var8);
            var5[1] = var8;
            var12 = _closure1_slot9;
            var17 = _closure1_slot0;
            var14 = _closure1_slot2;
            var7 = var14[var7];
            var7 = var17.bind(var4)(var7);
            var8 = var7.Text;
            var7 = {'variant': 'text-md/normal', 'color': 'text-link'};
            var10 = function onPress() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 23;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.openURL;
                var2 = _closure2_slot2;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var7['onPress'] = var10;
            var10 = var9.termsApplyText;
            var7['style'] = var10;
            var10 = var14[var18];
            var10 = var17.bind(var4)(var10);
            var19 = var10.intl;
            var11 = var19.string;
            var10 = var14[var18];
            var10 = var17.bind(var4)(var10);
            var10 = var10.t;
            var10 = var10.sBp+u0;
            var10 = var11.bind(var19)(var10);
            var7['children'] = var10;
            var7 = var12.bind(var4)(var8, var7);
            var5[2] = var7;
            var8 = _closure1_slot1;
            var7 = 24;
            var7 = var14[var7];
            var8 = var8.bind(var4)(var7);
            var7 = {};
            var11 = var16.map;
            var10 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = {};
                    var7 = arg1;
                    var8 = var1;
                    var2 = copyDataProperties(var8, var7);
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 25;
                    var3 = var5[var3];
                    var5 = undefined;
                    var6 = var4.bind(var5)(var3);
                    var4 = var6.isThemeDark;
                    var3 = _closure2_slot1;
                    var3 = var4.bind(var6)(var3);
                    var4 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var2 = 8;
                    var2 = var6[var2];
                    var2 = var4.bind(var5)(var2);
                    var2 = var2.unsafe_rawColors;
                    if(var3) { _fun0002_ip = 28; continue _fun0002 }
case 29:
                    var3 = var2.PRIMARY_530;
                    _fun0002_ip = 30; continue _fun0002;
case 28:
                    var3 = var2.WHITE;
case 30:
                    var2 = 'color';
                    var1[1] = var3;
                    return var1;
                }
            };
            var10 = var11.bind(var16)(var10);
            var7['features'] = var10;
            var10 = var9.rowStyles;
            var7['rowStyle'] = var10;
            var10 = var9.labelStyles;
            var7['labelStyle'] = var10;
            var7 = var12.bind(var4)(var8, var7);
            var5[3] = var7;
            var8 = _closure1_slot10;
            var7 = _closure1_slot3;
            var6 = {};
            var9 = var9.buttonsContainer;
            var6['style'] = var9;
            var10 = 26;
            var9 = var14[var10];
            var9 = var17.bind(var4)(var9);
            var11 = var9.Button;
            var9 = {};
            var16 = var14[var18];
            var16 = var17.bind(var4)(var16);
            var21 = var16.intl;
            var20 = var21.formatToPlainString;
            var16 = var14[var18];
            var16 = var17.bind(var4)(var16);
            var16 = var16.t;
            var19 = var16.xASjq5;
            var16 = {};
            var16['duration'] = var22;
            var16 = var20.bind(var21)(var19, var16);
            var9['text'] = var16;
            var16 = true;
            var9['grow'] = var16;
            var15 = function onPress() {
                var2 = _closure2_slot0;
                var1 = undefined;
                var2 = var2.bind(var1)();
                return var1;
            };
            var9['onPress'] = var15;
            var11 = var12.bind(var4)(var11, var9);
            var9 = new Array(2);
            var9[0] = var11;
            var10 = var14[var10];
            var10 = var17.bind(var4)(var10);
            var11 = var10.Button;
            var10 = {'text': null, 'variant': 'secondary', 'grow': true};
            var15 = var14[var18];
            var15 = var17.bind(var4)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var14 = var14[var18];
            var14 = var17.bind(var4)(var14);
            var14 = var14.t;
            var14 = var14.cpT0Cq;
            var14 = var15.bind(var16)(var14);
            var10['text'] = var14;
            var10['onPress'] = var13;
            var10 = var12.bind(var4)(var11, var10);
            var9[1] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[4] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 27;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/native/trials/PremiumTrialOfferActionSheetContent.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();