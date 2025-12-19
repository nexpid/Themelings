// app/modules/main_tabs_v2/native/tabs/you/YouExpiringTrialOfferCard.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var1 = function getNoticeCTAColor(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg1;
            var2 = _closure1_slot10;
            var2 = var2.PREMIUM_TIER_0_TRIAL_ENDING;
            if(!(var2 !== var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = _closure1_slot10;
            var2 = var2.PREMIUM_TIER_2_TRIAL_ENDING;
            if(!(var2 !== var5)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = global;
            var4 = var2.Error;
            var2 = var2.HermesInternal;
            var3 = var2.concat;
            var2 = 'Unsupported notice type: ';
            var6 = var3.bind(var2)(var5);
            var3 = var4.prototype;
            var3 = Object.create(var3, {constructor: {value: var4}});
            var7 = var3;
            var2 = new var7[var4](var6, var5);
            var2 = var2 instanceof Object ? var2 : var3;
            throw var2;
case 4:
            var2 = _closure1_slot7;
            var2 = var2.PREMIUM_TIER_2_TRI_COLOR;
            return var2;
case 2:
            var1 = _closure1_slot7;
            var1 = var1.PREMIUM_TIER_0;
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var1 = function getNoticeCopy(arg1, arg2, arg3) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var8 = arg1;
            var7 = arg2;
            var6 = arg3;
            var1 = var8.days;
            var2 = 0;
            if(!(!(var1 > var2))) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var1 = var8.hours;
            if(!(!(var1 > var2))) { _fun0002_ip = 8; continue _fun0002 }
case 5:
            var5 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 11;
            var3 = var9[var1];
            var2 = undefined;
            var3 = var5.bind(var2)(var3);
            var4 = var3.intl;
            var3 = var4.format;
            var1 = var9[var1];
            var1 = var5.bind(var2)(var1);
            var1 = var1.t;
            var2 = var1.SxXB42;
            var1 = {};
            var5 = global;
            var11 = var5.Math;
            var10 = var11.max;
            var9 = var8.minutes;
            var5 = 1;
            var5 = var10.bind(var11)(var9, var5);
            var1['minutes'] = var5;
            var1['trialPeriod'] = var7;
            var1['termsUrl'] = var6;
            var1 = var3.bind(var4)(var2, var1);
            _fun0002_ip = 9; continue _fun0002;
case 8:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = 11;
            var4 = var10[var2];
            var3 = undefined;
            var4 = var9.bind(var3)(var4);
            var5 = var4.intl;
            var4 = var5.format;
            var2 = var10[var2];
            var2 = var9.bind(var3)(var2);
            var2 = var2.t;
            var3 = var2.WFMtg1;
            var2 = {};
            var9 = var8.hours;
            var2['hours'] = var9;
            var2['trialPeriod'] = var7;
            var2['termsUrl'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 9:
            _fun0002_ip = 10; continue _fun0002;
case 6:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = 11;
            var4 = var10[var2];
            var3 = undefined;
            var4 = var9.bind(var3)(var4);
            var5 = var4.intl;
            var4 = var5.format;
            var2 = var10[var2];
            var2 = var9.bind(var3)(var2);
            var2 = var2.t;
            var3 = var2.GPqVWT;
            var2 = {};
            var8 = var8.days;
            var2['days'] = var8;
            var2['trialPeriod'] = var7;
            var2['termsUrl'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 10:
            return var1;
        }
    };
    var _closure1_slot19 = var1;
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
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticEvents;
    var _closure1_slot6 = var7;
    var7 = var4.Gradients;
    var _closure1_slot7 = var7;
    var7 = var4.HelpdeskArticles;
    var _closure1_slot8 = var7;
    var7 = var4.HorizontalGradient;
    var _closure1_slot9 = var7;
    var4 = var4.NoticeTypes;
    var _closure1_slot10 = var4;
    var10 = 4;
    var4 = var6[var10];
    var4 = var5.bind(var1)(var4);
    var7 = var4.PREMIUM_TIER_2_TRIAL_FOR_EVERYONE_TRIAL_ID;
    var _closure1_slot11 = var7;
    var4 = var4.PremiumSubscriptionSKUs;
    var _closure1_slot12 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot13 = var7;
    var7 = var4.Fragment;
    var _closure1_slot14 = var7;
    var4 = var4.jsxs;
    var _closure1_slot15 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var4 = var4.Millis;
    var7 = var4.SECOND;
    var4 = 10;
    var4 = var4 * var7;
    var _closure1_slot16 = var4;
    var4 = 7;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'flexDirection': 'row', 'alignItems': 'flex-start', 'marginBottom': 16, 'marginRight': 32};
    var4['header'] = var9;
    var9 = {'position': 'absolute', 'top': 16, 'right': 16};
    var4['closeButton'] = var9;
    var9 = {};
    var11 = 8;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.INTERACTIVE_TEXT_DEFAULT;
    var9['color'] = var13;
    var4['closeIcon'] = var9;
    var9 = {'width': '100%', 'height': '100%', 'position': 'absolute', 'overflow': 'hidden'};
    var4['linearGradient'] = var9;
    var9 = {};
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.radii;
    var11 = var11.round;
    var9['borderRadius'] = var11;
    var9['gap'] = var10;
    var4['primaryCTA'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot17 = var4;
    var4 = 25;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/tabs/you/YouExpiringTrialOfferCard.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function YouExpiringTrialOfferCard(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var2 = var1.navigateToPremium;
            var _closure2_slot0 = var2;
            var6 = var1.style;
            var4 = undefined;
            var _closure2_slot4 = var4;
            var5 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 12;
            var1 = var7[var1];
            var1 = var5.bind(var4)(var1);
            var9 = var1.bind(var4)();
            var8 = var9.add;
            var3 = 5;
            var1 = 'days';
            var1 = var8.bind(var9)(var3, var1);
            var _closure2_slot1 = var1;
            var1 = _closure1_slot17;
            var14 = var1.bind(var4)();
            var _closure2_slot2 = var14;
            var8 = _closure1_slot0;
            var1 = 13;
            var1 = var7[var1];
            var10 = var8.bind(var4)(var1);
            var9 = var10.useStateFromStores;
            var1 = _closure1_slot5;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                var2 = _closure1_slot5;
                var1 = var2.getNoticeType;
                var1 = var1.bind(var2)();
                return var1;
            };
            var3 = var9.bind(var10)(var3, var1);
            var _closure2_slot3 = var3;
            var1 = 14;
            var1 = var7[var1];
            var8 = var8.bind(var4)(var1);
            var1 = var8.usePremiumTrialOffer;
            var21 = var1.bind(var8)();
            var1 = 15;
            var1 = var7[var1];
            var7 = var5.bind(var4)(var1);
            var22 = null;
            var1 = var22 != var21;
            var5 = 0;
            if(!var1) { _fun0003_ip = 11; continue _fun0003 }
case 12:
            var1 = var21.expires_at;
            var1 = var22 != var1;
            var5 = 0;
            if(!var1) { _fun0003_ip = 11; continue _fun0003 }
case 13:
            var1 = global;
            var9 = var1.Date;
            var8 = var9.parse;
            var1 = var21.expires_at;
            var5 = var8.bind(var9)(var1);
case 11:
            var1 = _closure1_slot16;
            var17 = var7.bind(var4)(var5, var1);
            var1 = var22 != var21;
            if(!var1) { _fun0003_ip = 14; continue _fun0003 }
case 15:
            var1 = var22 != var3;
case 14:
            if(!var1) { _fun0003_ip = 16; continue _fun0003 }
case 17:
            var5 = _closure1_slot10;
            var5 = var5.PREMIUM_TIER_0_TRIAL_ENDING;
            var5 = var3 === var5;
            if(var5) { _fun0003_ip = 18; continue _fun0003 }
case 19:
            var7 = _closure1_slot10;
            var7 = var7.PREMIUM_TIER_2_TRIAL_ENDING;
            var5 = var3 === var7;
case 18:
            var1 = var5;
case 16:
            if(!var1) { _fun0003_ip = 20; continue _fun0003 }
case 21:
            var5 = var21.subscription_trial;
            var8 = var22 == var5;
            var7 = undefined;
            if(var8) { _fun0003_ip = 22; continue _fun0003 }
case 23:
            var7 = var5.sku_id;
case 22:
            if(!(var22 != var3)) { _fun0003_ip = 24; continue _fun0003 }
case 25:
            var5 = _closure1_slot10;
            var5 = var5.PREMIUM_TIER_2_TRIAL_ENDING;
            if(!(var5 !== var3)) { _fun0003_ip = 26; continue _fun0003 }
case 27:
            var5 = _closure1_slot10;
            var5 = var5.PREMIUM_TIER_0_TRIAL_ENDING;
            if(!(var5 !== var3)) { _fun0003_ip = 28; continue _fun0003 }
case 29:
            var5 = global;
            var9 = var5.Error;
            var5 = var5.HermesInternal;
            var8 = var5.concat;
            var5 = 'Unsupported notice type: ';
            var27 = var8.bind(var5)(var3);
            var8 = var9.prototype;
            var8 = Object.create(var8, {constructor: {value: var9}});
            var28 = var8;
            var5 = new var28[var9](var27, var26);
            var5 = var5 instanceof Object ? var5 : var8;
            throw var5;
case 28:
            var5 = _closure1_slot12;
            var5 = var5.TIER_0;
            _fun0003_ip = 30; continue _fun0003;
case 26:
            var8 = _closure1_slot12;
            var5 = var8.TIER_2;
            _fun0003_ip = 30; continue _fun0003;
case 24:
            var8 = _closure1_slot12;
            var5 = var8.NONE;
case 30:
            var1 = var7 === var5;
case 20:
            if(!var1) { _fun0003_ip = 31; continue _fun0003 }
case 32:
            var5 = var21.expires_at;
            var1 = var22 != var5;
case 31:
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
case 34:
            var5 = global;
            var7 = var5.Object;
            var5 = var7.values;
            var8 = var5.bind(var7)(var17);
            var7 = var8.every;
            var5 = function(arg1) {
                var2 = 0;
                var1 = arg1;
                var1 = var2 === var1;
                return var1;
            };
            var5 = var7.bind(var8)(var5);
            var1 = !var5;
case 33:
            _closure2_slot4 = var1;
            var8 = _closure1_slot3;
            var7 = var8.useEffect;
            var5 = new Array(2);
            var5[0] = var3;
            var5[1] = var1;
            var3 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var2 = _closure2_slot4;
                    if(!var2) { _fun0004_ip = 35; continue _fun0004 }
case 36:
                    var5 = _closure2_slot3;
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 10;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.track;
                    var1 = _closure1_slot6;
                    var2 = var1.APP_NOTICE_VIEWED;
                    var1 = {};
                    var1['notice_type'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
case 35:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var7.bind(var8)(var3, var5);
            if(var1) { _fun0003_ip = 37; continue _fun0003 }
case 38:
            return var22;
case 37:
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 16;
            var1 = var5[var1];
            var5 = var3.bind(var4)(var1);
            var3 = var5.getArticleURL;
            var7 = var21.trial_id;
            var1 = _closure1_slot11;
            if(!(var7 !== var1)) { _fun0003_ip = 39; continue _fun0003 }
case 40:
            var1 = _closure1_slot8;
            var1 = var1.PREMIUM_TRIAL;
            _fun0003_ip = 41; continue _fun0003;
case 39:
            var7 = _closure1_slot8;
            var1 = var7.NITRO_TRIAL_FOR_ALL;
case 41:
            var16 = var3.bind(var5)(var1);
            var8 = _closure1_slot15;
            var5 = _closure1_slot14;
            var1 = {};
            var9 = _closure1_slot13;
            var7 = _closure1_slot4;
            var3 = {};
            var10 = var14.header;
            var3['style'] = var10;
            var18 = _closure1_slot0;
            var19 = _closure1_slot2;
            var10 = 17;
            var10 = var19[var10];
            var10 = var18.bind(var4)(var10);
            var11 = var10.Text;
            var10 = {'variant': 'heading-sm/medium', 'color': 'text-default'};
            var15 = _closure1_slot19;
            var13 = 18;
            var13 = var19[var13];
            var19 = var18.bind(var4)(var13);
            var18 = var19.formatIntervalDuration;
            var13 = {};
            var23 = var22 == var21;
            var20 = undefined;
            if(var23) { _fun0003_ip = 42; continue _fun0003 }
case 43:
            var23 = var21.subscription_trial;
            var24 = var22 == var23;
            var20 = undefined;
            if(var24) { _fun0003_ip = 42; continue _fun0003 }
case 44:
            var20 = var23.interval;
case 42:
            var13['intervalType'] = var20;
            var23 = var22 == var21;
            var20 = undefined;
            if(var23) { _fun0003_ip = 45; continue _fun0003 }
case 46:
            var21 = var21.subscription_trial;
            var22 = var22 == var21;
            var20 = undefined;
            if(var22) { _fun0003_ip = 45; continue _fun0003 }
case 47:
            var20 = var21.interval_count;
case 45:
            var13['intervalCount'] = var20;
            var13 = var18.bind(var19)(var13);
            var13 = var15.bind(var4)(var17, var13, var16);
            var10['children'] = var13;
            var10 = var9.bind(var4)(var11, var10);
            var3['children'] = var10;
            var3 = var9.bind(var4)(var7, var3);
            var9 = new Array(3);
            var9[0] = var3;
            var3 = _closure1_slot13;
            var16 = _closure1_slot0;
            var7 = _closure1_slot2;
            var10 = 19;
            var10 = var7[var10];
            var10 = var16.bind(var4)(var10);
            var11 = var10.PressableOpacity;
            var10 = {};
            var13 = var14.closeButton;
            var10['style'] = var13;
            var13 = 'button';
            var10['accessibilityRole'] = var13;
            var13 = 11;
            var15 = var7[var13];
            var15 = var16.bind(var4)(var15);
            var18 = var15.intl;
            var17 = var18.string;
            var15 = var7[var13];
            var15 = var16.bind(var4)(var15);
            var15 = var15.t;
            var15 = var15.cpT0Cq;
            var15 = var17.bind(var18)(var15);
            var10['accessibilityLabel'] = var15;
            var15 = {'top': 8, 'right': 8, 'bottom': 8, 'left': 8};
            var10['hitSlop'] = var15;
            var15 = function onPress() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var6 = _closure2_slot3;
                    var2 = null;
                    if(!(var2 != var6)) { _fun0005_ip = 48; continue _fun0005 }
case 49:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var3 = 10;
                    var4 = var4[var3];
                    var3 = undefined;
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.track;
                    var2 = _closure1_slot6;
                    var3 = var2.APP_NOTICE_CLOSED;
                    var2 = {};
                    var2['notice_type'] = var6;
                    var2 = var4.bind(var5)(var3, var2);
case 48:
                    var5 = _closure2_slot1;
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 9;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.dismiss;
                    var2 = {};
                    var2['untilAtLeast'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var10['onPress'] = var15;
            var2 = _closure1_slot1;
            var15 = 20;
            var15 = var7[var15];
            var17 = var2.bind(var4)(var15);
            var15 = {'width': 16, 'height': 16};
            var18 = var14.closeIcon;
            var18 = var18.color;
            var15['color'] = var18;
            var15 = var3.bind(var4)(var17, var15);
            var10['children'] = var15;
            var10 = var3.bind(var4)(var11, var10);
            var9[1] = var10;
            var10 = 21;
            var10 = var7[var10];
            var11 = var2.bind(var4)(var10);
            var10 = {};
            var14 = var14.primaryCTA;
            var10['style'] = var14;
            var14 = var7[var13];
            var14 = var16.bind(var4)(var14);
            var15 = var14.intl;
            var14 = var15.string;
            var13 = var7[var13];
            var13 = var16.bind(var4)(var13);
            var13 = var13.t;
            var13 = var13.J61px0;
            var13 = var14.bind(var15)(var13);
            var10['text'] = var13;
            var13 = function onPress() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var6 = _closure2_slot3;
                    var2 = null;
                    if(!(var2 != var6)) { _fun0006_ip = 48; continue _fun0006 }
case 49:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var3 = 10;
                    var4 = var4[var3];
                    var3 = undefined;
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.track;
                    var2 = _closure1_slot6;
                    var3 = var2.APP_NOTICE_PRIMARY_CTA_OPENED;
                    var2 = {};
                    var2['notice_type'] = var6;
                    var2 = var4.bind(var5)(var3, var2);
case 48:
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var2 = var2.bind(var1)();
                    return var1;
                }
            };
            var10['onPress'] = var13;
            var13 = function renderIcon() {
                var4 = _closure1_slot13;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 22;
                var1 = var3[var1];
                var3 = undefined;
                var1 = var2.bind(var3)(var1);
                var2 = var1.NitroWheelIcon;
                var1 = {'color': 'white', 'size': 'sm'};
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var10['renderIcon'] = var13;
            var12 = function renderLinearGradient() {
                var4 = _closure1_slot13;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 23;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var7 = _closure2_slot2;
                var8 = var7.linearGradient;
                var7 = new Array(1);
                var7[0] = var8;
                var1['style'] = var7;
                var7 = _closure1_slot9;
                var8 = var7.START;
                var1['start'] = var8;
                var7 = var7.END;
                var1['end'] = var7;
                var6 = _closure1_slot18;
                var5 = _closure2_slot3;
                var5 = var6.bind(var3)(var5);
                var1['colors'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var10['renderLinearGradient'] = var12;
            var10 = var3.bind(var4)(var11, var10);
            var9[2] = var10;
            var1['children'] = var9;
            var5 = var8.bind(var4)(var5, var1);
            var1 = 24;
            var1 = var7[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['style'] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();