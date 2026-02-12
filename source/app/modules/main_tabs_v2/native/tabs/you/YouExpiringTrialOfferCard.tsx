// app/modules/main_tabs_v2/native/tabs/you/YouExpiringTrialOfferCard.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var13 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var13;
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
    var4 = var13.bind(var1)(var4);
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
    var11 = 4;
    var4 = var6[var11];
    var4 = var5.bind(var1)(var4);
    var4 = var4.PREMIUM_TIER_2_TRIAL_FOR_EVERYONE_TRIAL_ID;
    var _closure1_slot11 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot12 = var8;
    var7 = var4.Fragment;
    var _closure1_slot13 = var7;
    var4 = var4.jsxs;
    var _closure1_slot14 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var4 = var4.Millis;
    var7 = var4.SECOND;
    var4 = 10;
    var4 = var4 * var7;
    var _closure1_slot15 = var4;
    var4 = 7;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var7 = var9.createStyles;
    var4 = {};
    var10 = {'flexDirection': 'row', 'alignItems': 'flex-start', 'marginBottom': 16, 'marginRight': 32};
    var4['header'] = var10;
    var10 = {'position': 'absolute', 'top': 16, 'right': 16};
    var4['closeButton'] = var10;
    var10 = {};
    var12 = 8;
    var14 = var6[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.INTERACTIVE_TEXT_DEFAULT;
    var10['color'] = var14;
    var4['closeIcon'] = var10;
    var10 = {'width': '100%', 'height': '100%', 'position': 'absolute', 'overflow': 'hidden'};
    var4['linearGradient'] = var10;
    var10 = {};
    var12 = var6[var12];
    var12 = var13.bind(var1)(var12);
    var12 = var12.radii;
    var12 = var12.round;
    var10['borderRadius'] = var12;
    var10['gap'] = var11;
    var4['primaryCTA'] = var10;
    var4 = var7.bind(var9)(var4);
    var _closure1_slot16 = var4;
    var4 = 12;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.NitroWheelIcon;
    var4 = {'color': 'white', 'size': 'sm'};
    var4 = var8.bind(var1)(var7, var4);
    var _closure1_slot17 = var4;
    var4 = 26;
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
            var7 = var1.style;
            var5 = undefined;
            var _closure2_slot5 = var5;
            var4 = _closure1_slot1;
            var6 = _closure1_slot2;
            var1 = 13;
            var1 = var6[var1];
            var1 = var4.bind(var5)(var1);
            var9 = var1.bind(var5)();
            var8 = var9.add;
            var2 = 5;
            var1 = 'days';
            var1 = var8.bind(var9)(var2, var1);
            var _closure2_slot1 = var1;
            var1 = _closure1_slot16;
            var15 = var1.bind(var5)();
            var _closure2_slot2 = var15;
            var8 = _closure1_slot0;
            var1 = 14;
            var1 = var6[var1];
            var10 = var8.bind(var5)(var1);
            var9 = var10.useStateFromStores;
            var1 = _closure1_slot5;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var2 = _closure1_slot5;
                var1 = var2.getNoticeType;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = var9.bind(var10)(var2, var1);
            var _closure2_slot3 = var2;
            var1 = 15;
            var1 = var6[var1];
            var8 = var8.bind(var5)(var1);
            var1 = var8.usePremiumTrialOffer;
            var21 = var1.bind(var8)();
            var _closure2_slot4 = var21;
            var1 = 16;
            var1 = var6[var1];
            var8 = var4.bind(var5)(var1);
            var1 = null;
            var4 = var1 != var21;
            var6 = 0;
            if(!var4) { _fun0003_ip = 11; continue _fun0003 }
case 12:
            var4 = var21.expires_at;
            var4 = var1 != var4;
            var6 = 0;
            if(!var4) { _fun0003_ip = 11; continue _fun0003 }
case 13:
            var4 = global;
            var10 = var4.Date;
            var9 = var10.parse;
            var4 = var21.expires_at;
            var6 = var9.bind(var10)(var4);
case 11:
            var4 = _closure1_slot15;
            var18 = var8.bind(var5)(var6, var4);
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var4 = 17;
            var4 = var8[var4];
            var6 = var6.bind(var5)(var4);
            var4 = var6.useShouldShowExpiringTrialOfferCard;
            var4 = var4.bind(var6)();
            _closure2_slot5 = var4;
            var10 = _closure1_slot3;
            var9 = var10.useEffect;
            var8 = new Array(3);
            var8[0] = var2;
            var8[1] = var4;
            var8[2] = var21;
            var6 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var2 = _closure2_slot5;
                    if(!var2) { _fun0004_ip = 3; continue _fun0004 }
case 14:
                    var4 = _closure2_slot3;
                    var3 = null;
                    var2 = var3 != var4;
case 3:
                    if(!var2) { _fun0004_ip = 15; continue _fun0004 }
case 16:
                    var4 = _closure2_slot4;
                    var3 = null;
                    var2 = var3 != var4;
case 15:
                    if(!var2) { _fun0004_ip = 17; continue _fun0004 }
case 18:
                    var6 = _closure2_slot3;
                    var1 = _closure2_slot4;
                    var5 = var1.trial_id;
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
                    var1['notice_type'] = var6;
                    var1['trial_id'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
case 17:
                    var1 = undefined;
                    return var1;
                }
            };
            var6 = var9.bind(var10)(var6, var8);
            if(var4) { _fun0003_ip = 19; continue _fun0003 }
case 20:
            return var1;
case 19:
            if(!(var1 != var21)) { _fun0003_ip = 21; continue _fun0003 }
case 22:
            if(!(var1 != var2)) { _fun0003_ip = 21; continue _fun0003 }
case 23:
            var4 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 18;
            var2 = var6[var2];
            var6 = var4.bind(var5)(var2);
            var4 = var6.getArticleURL;
            var8 = var21.trial_id;
            var2 = _closure1_slot11;
            if(!(var8 !== var2)) { _fun0003_ip = 24; continue _fun0003 }
case 25:
            var2 = _closure1_slot8;
            var2 = var2.PREMIUM_TRIAL;
            _fun0003_ip = 26; continue _fun0003;
case 24:
            var8 = _closure1_slot8;
            var2 = var8.NITRO_TRIAL_FOR_ALL;
case 26:
            var17 = var4.bind(var6)(var2);
            var9 = _closure1_slot14;
            var6 = _closure1_slot13;
            var2 = {};
            var10 = _closure1_slot12;
            var8 = _closure1_slot4;
            var4 = {};
            var11 = var15.header;
            var4['style'] = var11;
            var19 = _closure1_slot0;
            var20 = _closure1_slot2;
            var11 = 19;
            var11 = var20[var11];
            var11 = var19.bind(var5)(var11);
            var12 = var11.Text;
            var11 = {'variant': 'heading-sm/medium', 'color': 'text-default'};
            var16 = _closure1_slot19;
            var14 = 20;
            var14 = var20[var14];
            var20 = var19.bind(var5)(var14);
            var19 = var20.formatIntervalDuration;
            var14 = {};
            var23 = var21.subscription_trial;
            var24 = var1 == var23;
            var22 = undefined;
            if(var24) { _fun0003_ip = 27; continue _fun0003 }
case 28:
            var22 = var23.interval;
case 27:
            var14['intervalType'] = var22;
            var22 = var21.subscription_trial;
            var23 = var1 == var22;
            var21 = undefined;
            if(var23) { _fun0003_ip = 29; continue _fun0003 }
case 30:
            var21 = var22.interval_count;
case 29:
            var14['intervalCount'] = var21;
            var14 = var19.bind(var20)(var14);
            var14 = var16.bind(var5)(var18, var14, var17);
            var11['children'] = var14;
            var11 = var10.bind(var5)(var12, var11);
            var4['children'] = var11;
            var4 = var10.bind(var5)(var8, var4);
            var10 = new Array(3);
            var10[0] = var4;
            var4 = _closure1_slot12;
            var17 = _closure1_slot0;
            var8 = _closure1_slot2;
            var11 = 21;
            var11 = var8[var11];
            var11 = var17.bind(var5)(var11);
            var12 = var11.PressableOpacity;
            var11 = {};
            var14 = var15.closeButton;
            var11['style'] = var14;
            var14 = 'button';
            var11['accessibilityRole'] = var14;
            var14 = 11;
            var16 = var8[var14];
            var16 = var17.bind(var5)(var16);
            var19 = var16.intl;
            var18 = var19.string;
            var16 = var8[var14];
            var16 = var17.bind(var5)(var16);
            var16 = var16.t;
            var16 = var16.cpT0Cq;
            var16 = var18.bind(var19)(var16);
            var11['accessibilityLabel'] = var16;
            var16 = {'top': 8, 'right': 8, 'bottom': 8, 'left': 8};
            var11['hitSlop'] = var16;
            var16 = function onPress() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var7 = _closure2_slot3;
                    var2 = _closure2_slot4;
                    var6 = var2.trial_id;
                    var2 = null;
                    if(!(var2 != var7)) { _fun0005_ip = 31; continue _fun0005 }
case 16:
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
                    var2['notice_type'] = var7;
                    var2['trial_id'] = var6;
                    var2 = var4.bind(var5)(var3, var2);
case 31:
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
            var11['onPress'] = var16;
            var3 = _closure1_slot1;
            var16 = 22;
            var16 = var8[var16];
            var18 = var3.bind(var5)(var16);
            var16 = {'width': 16, 'height': 16};
            var19 = var15.closeIcon;
            var19 = var19.color;
            var16['color'] = var19;
            var16 = var4.bind(var5)(var18, var16);
            var11['children'] = var16;
            var11 = var4.bind(var5)(var12, var11);
            var10[1] = var11;
            var11 = 23;
            var11 = var8[var11];
            var12 = var3.bind(var5)(var11);
            var11 = {};
            var15 = var15.primaryCTA;
            var11['style'] = var15;
            var15 = var8[var14];
            var15 = var17.bind(var5)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var14 = var8[var14];
            var14 = var17.bind(var5)(var14);
            var14 = var14.t;
            var14 = var14.J61px0;
            var14 = var15.bind(var16)(var14);
            var11['text'] = var14;
            var14 = function onPress() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var7 = _closure2_slot3;
                    var2 = _closure2_slot4;
                    var6 = var2.trial_id;
                    var2 = null;
                    if(!(var2 != var7)) { _fun0006_ip = 31; continue _fun0006 }
case 16:
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
                    var2['notice_type'] = var7;
                    var2['trial_id'] = var6;
                    var2 = var4.bind(var5)(var3, var2);
case 31:
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var2 = var2.bind(var1)();
                    return var1;
                }
            };
            var11['onPress'] = var14;
            var14 = function renderIcon() {
                var1 = _closure1_slot17;
                return var1;
            };
            var11['renderIcon'] = var14;
            var13 = function renderLinearGradient() {
                var4 = _closure1_slot12;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 24;
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
            var11['renderLinearGradient'] = var13;
            var11 = var4.bind(var5)(var12, var11);
            var10[2] = var11;
            var2['children'] = var10;
            var6 = var9.bind(var5)(var6, var2);
            var2 = 25;
            var2 = var8[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var2['style'] = var7;
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
case 21:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();