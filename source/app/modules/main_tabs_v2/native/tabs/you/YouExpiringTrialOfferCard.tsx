// app/modules/main_tabs_v2/native/tabs/you/YouExpiringTrialOfferCard.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var1 = function getNoticeCTAColor(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var5 = arg1;
            var2 = _closure1_slot9;
            var2 = var2.PREMIUM_TIER_0_TRIAL_ENDING;
            if(!(var2 !== var5)) { _fun0001_ip = 98; continue _fun0001 }
 20:
            var2 = _closure1_slot9;
            var2 = var2.PREMIUM_TIER_2_TRIAL_ENDING;
            if(!(var2 !== var5)) { _fun0001_ip = 86; continue _fun0001 }
 34:
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
 86:
            var2 = _closure1_slot7;
            var2 = var2.PREMIUM_TIER_2_TRI_COLOR;
            return var2;
 98:
            var1 = _closure1_slot7;
            var1 = var1.PREMIUM_TIER_0;
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var1 = function getNoticeCopy(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var6 = arg1;
            var1 = var6.days;
            var2 = 0;
            if(!(!(var1 > var2))) { _fun0002_ip = 206; continue _fun0002 }
 18:
            var1 = var6.hours;
            if(!(!(var1 > var2))) { _fun0002_ip = 128; continue _fun0002 }
 28:
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 11;
            var3 = var7[var1];
            var2 = undefined;
            var3 = var5.bind(var2)(var3);
            var4 = var3.intl;
            var3 = var4.formatToPlainString;
            var1 = var7[var1];
            var1 = var5.bind(var2)(var1);
            var1 = var1.t;
            var2 = var1.SxXB4+;
            var1 = {};
            var5 = global;
            var9 = var5.Math;
            var8 = var9.max;
            var7 = var6.minutes;
            var5 = 1;
            var5 = var8.bind(var9)(var7, var5);
            var1['minutes'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            _fun0002_ip = 204; continue _fun0002;
 128:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 11;
            var4 = var8[var2];
            var3 = undefined;
            var4 = var7.bind(var3)(var4);
            var5 = var4.intl;
            var4 = var5.formatToPlainString;
            var2 = var8[var2];
            var2 = var7.bind(var3)(var2);
            var2 = var2.t;
            var3 = var2.WFMtg4;
            var2 = {};
            var7 = var6.hours;
            var2['hours'] = var7;
            var1 = var4.bind(var5)(var3, var2);
 204:
            _fun0002_ip = 282; continue _fun0002;
 206:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 11;
            var4 = var8[var2];
            var3 = undefined;
            var4 = var7.bind(var3)(var4);
            var5 = var4.intl;
            var4 = var5.formatToPlainString;
            var2 = var8[var2];
            var2 = var7.bind(var3)(var2);
            var2 = var2.t;
            var3 = var2.GPqVWV;
            var2 = {};
            var6 = var6.days;
            var2['days'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 282:
            return var1;
        }
    };
    var _closure1_slot17 = var1;
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
    var4 = var11.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticEvents;
    var _closure1_slot6 = var7;
    var7 = var4.Gradients;
    var _closure1_slot7 = var7;
    var7 = var4.HorizontalGradient;
    var _closure1_slot8 = var7;
    var4 = var4.NoticeTypes;
    var _closure1_slot9 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.PremiumSubscriptionSKUs;
    var _closure1_slot10 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot11 = var7;
    var7 = var4.jsxs;
    var _closure1_slot12 = var7;
    var4 = var4.Fragment;
    var _closure1_slot13 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var4 = var4.Millis;
    var7 = var4.SECOND;
    var4 = 10;
    var4 = var4 * var7;
    var _closure1_slot14 = var4;
    var4 = 7;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'flexDirection': 'row', 'alignItems': 'flex-start', 'marginBottom': 12, 'marginRight': 80};
    var4['header'] = var9;
    var9 = {'width': 24, 'height': 24};
    var4['nitroWheel'] = var9;
    var9 = {};
    var10 = 8;
    var9['marginLeft'] = var10;
    var4['headerText'] = var9;
    var9 = {'position': 'absolute', 'top': 16, 'right': 16};
    var4['closeButton'] = var9;
    var9 = {};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.INTERACTIVE_NORMAL;
    var9['color'] = var12;
    var4['closeIcon'] = var9;
    var9 = {'width': '100%', 'height': '100%', 'position': 'absolute', 'overflow': 'hidden'};
    var4['linearGradient'] = var9;
    var9 = {};
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.radii;
    var10 = var10.round;
    var9['borderRadius'] = var10;
    var4['primaryCTA'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot15 = var4;
    var4 = 25;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/tabs/you/YouExpiringTrialOfferCard.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function YouExpiringTrialOfferCard(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arg1;
            var2 = var1.navigateToPremium;
            var _closure2_slot0 = var2;
            var6 = var1.style;
            var4 = undefined;
            var _closure2_slot4 = var4;
            var3 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 12;
            var1 = var7[var1];
            var1 = var3.bind(var4)(var1);
            var9 = var1.bind(var4)();
            var8 = var9.add;
            var5 = 5;
            var1 = 'days';
            var1 = var8.bind(var9)(var5, var1);
            var _closure2_slot1 = var1;
            var1 = _closure1_slot15;
            var14 = var1.bind(var4)();
            var _closure2_slot2 = var14;
            var5 = _closure1_slot0;
            var1 = 13;
            var1 = var7[var1];
            var10 = var5.bind(var4)(var1);
            var9 = var10.useStateFromStores;
            var1 = _closure1_slot5;
            var8 = new Array(1);
            var8[0] = var1;
            var1 = function() {
                var2 = _closure1_slot5;
                var1 = var2.getNoticeType;
                var1 = var1.bind(var2)();
                return var1;
            };
            var15 = var9.bind(var10)(var8, var1);
            var _closure2_slot3 = var15;
            var1 = 14;
            var1 = var7[var1];
            var5 = var5.bind(var4)(var1);
            var1 = var5.usePremiumTrialOffer;
            var5 = var1.bind(var5)();
            var1 = 15;
            var1 = var7[var1];
            var8 = var3.bind(var4)(var1);
            var1 = null;
            var3 = var1 != var5;
            var7 = 0;
            if(!var3) { _fun0003_ip = 222; continue _fun0003 }
 182:
            var3 = var5.expires_at;
            var3 = var1 != var3;
            var7 = 0;
            if(!var3) { _fun0003_ip = 222; continue _fun0003 }
 197:
            var3 = global;
            var10 = var3.Date;
            var9 = var10.parse;
            var3 = var5.expires_at;
            var7 = var9.bind(var10)(var3);
 222:
            var3 = _closure1_slot14;
            var18 = var8.bind(var4)(var7, var3);
            var3 = var1 != var5;
            if(!var3) { _fun0003_ip = 243; continue _fun0003 }
 239:
            var3 = var1 != var15;
 243:
            if(!var3) { _fun0003_ip = 280; continue _fun0003 }
 246:
            var7 = _closure1_slot9;
            var7 = var7.PREMIUM_TIER_0_TRIAL_ENDING;
            var7 = var15 === var7;
            if(var7) { _fun0003_ip = 277; continue _fun0003 }
 263:
            var8 = _closure1_slot9;
            var8 = var8.PREMIUM_TIER_2_TRIAL_ENDING;
            var7 = var15 === var8;
 277:
            var3 = var7;
 280:
            if(!var3) { _fun0003_ip = 429; continue _fun0003 }
 286:
            var7 = var5.subscription_trial;
            var9 = var1 == var7;
            var8 = undefined;
            if(var9) { _fun0003_ip = 307; continue _fun0003 }
 301:
            var8 = var7.sku_id;
 307:
            if(!(var1 != var15)) { _fun0003_ip = 415; continue _fun0003 }
 311:
            var7 = _closure1_slot9;
            var7 = var7.PREMIUM_TIER_2_TRIAL_ENDING;
            if(!(var7 !== var15)) { _fun0003_ip = 403; continue _fun0003 }
 325:
            var7 = _closure1_slot9;
            var7 = var7.PREMIUM_TIER_0_TRIAL_ENDING;
            if(!(var7 !== var15)) { _fun0003_ip = 391; continue _fun0003 }
 339:
            var7 = global;
            var10 = var7.Error;
            var7 = var7.HermesInternal;
            var9 = var7.concat;
            var7 = 'Unsupported notice type: ';
            var20 = var9.bind(var7)(var15);
            var9 = var10.prototype;
            var9 = Object.create(var9, {constructor: {value: var10}});
            var21 = var9;
            var7 = new var21[var10](var20, var19);
            var7 = var7 instanceof Object ? var7 : var9;
            throw var7;
 391:
            var7 = _closure1_slot10;
            var7 = var7.TIER_0;
            _fun0003_ip = 425; continue _fun0003;
 403:
            var9 = _closure1_slot10;
            var7 = var9.TIER_2;
            _fun0003_ip = 425; continue _fun0003;
 415:
            var9 = _closure1_slot10;
            var7 = var9.NONE;
 425:
            var3 = var8 === var7;
 429:
            if(!var3) { _fun0003_ip = 442; continue _fun0003 }
 432:
            var5 = var5.expires_at;
            var3 = var1 != var5;
 442:
            if(!var3) { _fun0003_ip = 484; continue _fun0003 }
 445:
            var5 = global;
            var7 = var5.Object;
            var5 = var7.values;
            var8 = var5.bind(var7)(var18);
            var7 = var8.every;
            var5 = function(arg1) {
                var2 = 0;
                var1 = arg1;
                var1 = var2 === var1;
                return var1;
            };
            var5 = var7.bind(var8)(var5);
            var3 = !var5;
 484:
            _closure2_slot4 = var3;
            var9 = _closure1_slot3;
            var8 = var9.useEffect;
            var7 = new Array(2);
            var7[0] = var15;
            var7[1] = var3;
            var5 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var2 = _closure2_slot4;
                    if(!var2) { _fun0004_ip = 67; continue _fun0004 }
 10:
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
 67:
                    var1 = undefined;
                    return var1;
                }
            };
            var5 = var8.bind(var9)(var5, var7);
            if(var3) { _fun0003_ip = 527; continue _fun0003 }
 525:
            return var1;
 527:
            var8 = _closure1_slot12;
            var5 = _closure1_slot13;
            var1 = {};
            var10 = _closure1_slot4;
            var9 = {};
            var3 = var14.header;
            var9['style'] = var3;
            var11 = _closure1_slot11;
            var7 = _closure1_slot1;
            var13 = _closure1_slot2;
            var3 = 16;
            var3 = var13[var3];
            var7 = var7.bind(var4)(var3);
            var3 = {};
            var13 = _closure1_slot9;
            var13 = var13.PREMIUM_TIER_2_TRIAL_ENDING;
            if(!(var15 !== var13)) { _fun0003_ip = 614; continue _fun0003 }
 592:
            var15 = _closure1_slot1;
            var16 = _closure1_slot2;
            var13 = 18;
            var13 = var16[var13];
            var13 = var15.bind(var4)(var13);
            _fun0003_ip = 634; continue _fun0003;
 614:
            var16 = _closure1_slot1;
            var17 = _closure1_slot2;
            var15 = 17;
            var15 = var17[var15];
            var13 = var16.bind(var4)(var15);
 634:
            var3['source'] = var13;
            var13 = var14.nitroWheel;
            var3['style'] = var13;
            var13 = 'contain';
            var3['resizeMode'] = var13;
            var3 = var11.bind(var4)(var7, var3);
            var11 = new Array(2);
            var11[0] = var3;
            var3 = _closure1_slot11;
            var16 = _closure1_slot0;
            var7 = _closure1_slot2;
            var13 = 19;
            var13 = var7[var13];
            var13 = var16.bind(var4)(var13);
            var15 = var13.Text;
            var13 = {'variant': 'text-md/normal', 'color': 'text-normal'};
            var17 = var14.headerText;
            var13['style'] = var17;
            var17 = _closure1_slot17;
            var17 = var17.bind(var4)(var18);
            var13['children'] = var17;
            var13 = var3.bind(var4)(var15, var13);
            var11[1] = var13;
            var9['children'] = var11;
            var10 = var8.bind(var4)(var10, var9);
            var9 = new Array(3);
            var9[0] = var10;
            var10 = 20;
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
            var15 = var15.cpT0Cg;
            var15 = var17.bind(var18)(var15);
            var10['accessibilityLabel'] = var15;
            var15 = {'top': 8, 'right': 8, 'bottom': 8, 'left': 8};
            var10['hitSlop'] = var15;
            var15 = function onPress() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var6 = _closure2_slot3;
                    var2 = null;
                    if(!(var2 != var6)) { _fun0005_ip = 66; continue _fun0005 }
 13:
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
 66:
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
            var15 = 21;
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
            var10 = 22;
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
            var13 = var13.7590PT;
            var13 = var14.bind(var15)(var13);
            var10['text'] = var13;
            var13 = function onPress() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var6 = _closure2_slot3;
                    var2 = null;
                    if(!(var2 != var6)) { _fun0006_ip = 66; continue _fun0006 }
 13:
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
 66:
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var2 = var2.bind(var1)();
                    return var1;
                }
            };
            var10['onPress'] = var13;
            var12 = function renderLinearGradient() {
                var4 = _closure1_slot11;
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
                var7 = _closure1_slot8;
                var8 = var7.START;
                var1['start'] = var8;
                var7 = var7.END;
                var1['end'] = var7;
                var6 = _closure1_slot16;
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