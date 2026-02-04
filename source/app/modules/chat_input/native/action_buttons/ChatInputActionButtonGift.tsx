// app/modules/chat_input/native/action_buttons/ChatInputActionButtonGift.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ChatInputActionType;
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.VerticalGradient;
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ContentDismissActionType;
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot11 = var8;
    var4 = var4.jsxs;
    var _closure1_slot12 = var4;
    var4 = 9;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = function() {
        var1 = {};
        var2 = {'position': 'absolute', 'top': 0, 'left': null, 'right': null, 'bottom': 0};
        var5 = _closure1_slot1;
        var6 = _closure1_slot2;
        var3 = 10;
        var7 = var6[var3];
        var4 = undefined;
        var7 = var5.bind(var4)(var7);
        var7 = var7.spacing;
        var7 = var7.PX_4;
        var2['left'] = var7;
        var7 = var6[var3];
        var7 = var5.bind(var4)(var7);
        var7 = var7.spacing;
        var7 = var7.PX_4;
        var2['right'] = var7;
        var3 = var6[var3];
        var3 = var5.bind(var4)(var3);
        var3 = var3.radii;
        var3 = var3.round;
        var2['borderRadius'] = var3;
        var1['gradientContainer'] = var2;
        var2 = {};
        var3 = 'transparent';
        var2['backgroundColor'] = var3;
        var1['transparentBackground'] = var2;
        return var1;
    };
    var4 = var8.bind(var9)(var4);
    var _closure1_slot13 = var4;
    var4 = var7.memo;
    var2 = function ChatInputActionButtonGift(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var14 = var1.accessible;
            var19 = var1.disabled;
            var21 = var1.channel;
            var2 = var1.onPress;
            var _closure2_slot0 = var2;
            var8 = var1.style;
            var26 = var1.styleButton;
            var4 = undefined;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 11;
            var1 = var6[var2];
            var10 = var5.bind(var4)(var1);
            var9 = var10.useStateFromStores;
            var1 = _closure1_slot6;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                var1 = _closure1_slot6;
                var1 = var1.useReducedMotion;
                return var1;
            };
            var1 = var9.bind(var10)(var3, var1);
            var _closure2_slot1 = var1;
            var3 = _closure1_slot13;
            var25 = var3.bind(var4)();
            var2 = var6[var2];
            var10 = var5.bind(var4)(var2);
            var9 = var10.useStateFromStores;
            var2 = _closure1_slot7;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure1_slot7;
                    var2 = var3.getMarketingComponentByType;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 12;
                    var4 = var4[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var4);
                    var1 = var1.MarketingComponentType;
                    var1 = var1.GIFT_ICON;
                    var2 = var2.bind(var3)(var1);
                    var5 = null;
                    var3 = var5 != var2;
                    var1 = null;
                    if(!var3) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var3 = var2.properties;
                    var3 = var3.properties;
                    var4 = var3.oneofKind;
                    var3 = 'giftIcon';
                    var1 = null;
                    if(!(var3 === var4)) { _fun0002_ip = 2; continue _fun0002 }
case 4:
                    var2 = var2.properties;
                    var2 = var2.properties;
                    var1 = var2.giftIcon;
case 2:
                    return var1;
                }
            };
            var3 = var9.bind(var10)(var3, var2);
            var _closure2_slot2 = var3;
            var2 = 13;
            var2 = var6[var2];
            var5 = var5.bind(var4)(var2);
            var2 = var5.getGiftingPromotionDismissibleContentVersion;
            var9 = var2.bind(var5)();
            var _closure2_slot3 = var9;
            var2 = null;
            var5 = var2 == var3;
            var20 = undefined;
            if(var5) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var20 = var3.boxAnimationUrl;
case 5:
            var5 = var2 == var3;
            var12 = undefined;
            if(var5) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var12 = var3.trinketAnimationUrl;
case 7:
            var5 = var2 == var3;
            var11 = undefined;
            if(var5) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var11 = var3.trinketGlowAnimationUrl;
case 9:
            var5 = var2 == var3;
            var23 = undefined;
            if(var5) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var23 = var3.gradient;
case 11:
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var13 = 14;
            var5 = var3[var13];
            var10 = var6.bind(var4)(var5);
            var5 = var10.isNullOrEmpty;
            var5 = var5.bind(var10)(var20);
            var5 = !var5;
            var3 = var3[var13];
            var6 = var6.bind(var4)(var3);
            var3 = var6.isNullOrEmpty;
            var3 = var3.bind(var6)(var12);
            if(!var3) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var10 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var13];
            var10 = var10.bind(var4)(var6);
            var6 = var10.isNullOrEmpty;
            var3 = var6.bind(var10)(var11);
case 13:
            if(var3) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var3 = var5;
case 15:
            var6 = !var3;
            var10 = _closure1_slot4;
            var3 = var10.useState;
            var16 = false;
            var10 = var3.bind(var10)(var16);
            var3 = _closure1_slot3;
            var18 = 2;
            var13 = var3.bind(var4)(var10, var18);
            var3 = 0;
            var10 = var13[var3];
            var17 = 1;
            var13 = var13[var17];
            _closure2_slot4 = var13;
            var28 = var5;
            if(var5) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var28 = var6;
case 17:
            if(!var28) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var28 = !var10;
case 19:
            var24 = _closure1_slot4;
            var22 = var24.useCallback;
            var13 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = arg1;
                    if(var1) { _fun0003_ip = 21; continue _fun0003 }
case 22:
                    var3 = _closure2_slot4;
                    var2 = undefined;
                    var1 = true;
                    var1 = var3.bind(var2)(var1);
case 21:
                    var1 = undefined;
                    return var1;
                }
            };
            var10 = new Array(0);
            var10 = var22.bind(var24)(var13, var10);
            var22 = _closure1_slot0;
            var24 = _closure1_slot2;
            var13 = 15;
            var13 = var24[var13];
            var27 = var22.bind(var4)(var13);
            var24 = var27.useSelectedVersionedDismissibleContent;
            var22 = null;
            if(!var28) { _fun0001_ip = 23; continue _fun0001 }
case 24:
            var29 = _closure1_slot0;
            var30 = _closure1_slot2;
            var13 = 16;
            var13 = var30[var13];
            var13 = var29.bind(var4)(var13);
            var13 = var13.DismissibleContent;
            var22 = var13.GIFTING_PROMOTION_ICON;
case 23:
            var13 = 0;
            if(!var28) { _fun0001_ip = 25; continue _fun0001 }
case 26:
            var13 = var9;
case 25:
            var31 = true;
            var35 = var27;
            var34 = var22;
            var33 = var13;
            var32 = undefined;
            var13 = var35[var24](var34, var33, var32, var31, var30);
            var9 = _closure1_slot3;
            var9 = var9.bind(var4)(var13, var18);
            var13 = var9[var3];
            var9 = var9[var17];
            _closure2_slot5 = var9;
            var17 = _closure1_slot0;
            var18 = _closure1_slot2;
            var9 = 16;
            var9 = var18[var9];
            var9 = var17.bind(var4)(var9);
            var9 = var9.DismissibleContent;
            var9 = var9.GIFTING_PROMOTION_ICON;
            var13 = var13 === var9;
            if(!var5) { _fun0001_ip = 27; continue _fun0001 }
case 28:
            var5 = var13;
case 27:
            _closure2_slot6 = var5;
            if(!var6) { _fun0001_ip = 29; continue _fun0001 }
case 30:
            var6 = var13;
case 29:
            _closure2_slot7 = var6;
            var24 = var2 != var23;
            if(!var24) { _fun0001_ip = 31; continue _fun0001 }
case 32:
            var2 = var23.colors;
            var2 = var2.length;
            var24 = var2 > var3;
case 31:
            if(!var24) { _fun0001_ip = 33; continue _fun0001 }
case 34:
            var24 = var6;
case 33:
            var9 = _closure1_slot4;
            var3 = var9.useEffect;
            var2 = new Array(4);
            var2[0] = var5;
            var2[1] = var13;
            var2[2] = var6;
            var2[3] = var1;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = _closure2_slot1;
                    if(!var1) { _fun0004_ip = 35; continue _fun0004 }
case 36:
                    var1 = _closure2_slot6;
case 35:
                    if(var1) { _fun0004_ip = 37; continue _fun0004 }
case 38:
                    var1 = _closure2_slot7;
case 37:
                    if(!var1) { _fun0004_ip = 39; continue _fun0004 }
case 40:
                    var1 = global;
                    var4 = var1.setTimeout;
                    var3 = undefined;
                    var2 = function() {
                        var3 = _closure2_slot4;
                        var1 = undefined;
                        var2 = true;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var1 = 7000;
                    var1 = var4.bind(var3)(var2, var1);
case 39:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var3.bind(var9)(var1, var2);
            var3 = _closure1_slot12;
            var2 = _closure1_slot5;
            var1 = {};
            var1['style'] = var8;
            if(var5) { _fun0001_ip = 41; continue _fun0001 }
case 42:
            var9 = _closure1_slot12;
            var8 = _closure1_slot5;
            var5 = {};
            var17 = var24;
            if(!var24) { _fun0001_ip = 43; continue _fun0001 }
case 44:
            var22 = _closure1_slot11;
            var18 = _closure1_slot1;
            var27 = _closure1_slot2;
            var13 = 20;
            var13 = var27[var13];
            var18 = var18.bind(var4)(var13);
            var13 = {};
            var27 = var25.gradientContainer;
            var13['style'] = var27;
            var27 = _closure1_slot9;
            var28 = var27.START;
            var13['start'] = var28;
            var27 = var27.END;
            var13['end'] = var27;
            var23 = var23.colors;
            var13['colors'] = var23;
            var17 = var22.bind(var4)(var18, var13);
case 43:
            var13 = new Array(2);
            var13[0] = var17;
            var22 = _closure1_slot11;
            var18 = _closure1_slot1;
            var23 = _closure1_slot2;
            var17 = 21;
            var17 = var23[var17];
            var18 = var18.bind(var4)(var17);
            var17 = {};
            var23 = new Array(2);
            var23[0] = var26;
            if(!var24) { _fun0001_ip = 45; continue _fun0001 }
case 46:
            var24 = var25.transparentBackground;
case 45:
            var23[1] = var24;
            var17['style'] = var23;
            var17['disabled'] = var19;
            var17['accessible'] = var14;
            var24 = _closure1_slot0;
            var25 = _closure1_slot2;
            var23 = 19;
            var26 = var25[var23];
            var26 = var24.bind(var4)(var26);
            var27 = var26.intl;
            var26 = var27.string;
            var23 = var25[var23];
            var23 = var24.bind(var4)(var23);
            var23 = var23.t;
            var23 = var23.Z1RnTk;
            var23 = var26.bind(var27)(var23);
            var17['accessibilityLabel'] = var23;
            var17['active'] = var16;
            var23 = 18;
            var23 = var25[var23];
            var23 = var24.bind(var4)(var23);
            var23 = var23.GiftIcon;
            var17['IconComponent'] = var23;
            var23 = function onPress(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var3 = _closure2_slot2;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0005_ip = 47; continue _fun0005 }
case 48:
                    var4 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var2 = 22;
                    var2 = var8[var2];
                    var3 = undefined;
                    var6 = var4.bind(var3)(var2);
                    var5 = var6.markVersionedDismissibleContentAsDismissed;
                    var2 = 16;
                    var2 = var8[var2];
                    var2 = var4.bind(var3)(var2);
                    var2 = var2.DismissibleContent;
                    var4 = var2.GIFTING_PROMOTION_ICON;
                    var3 = _closure2_slot3;
                    var2 = {};
                    var7 = _closure1_slot10;
                    var7 = var7.TAKE_ACTION;
                    var2['dismissAction'] = var7;
                    var2['version'] = var3;
                    var2 = var5.bind(var6)(var4, var3, var2);
case 47:
                    var4 = _closure2_slot0;
                    var1 = _closure1_slot8;
                    var3 = var1.NITRO_GIFT;
                    var1 = undefined;
                    var2 = arg1;
                    var2 = var4.bind(var1)(var2, var3);
                    return var1;
                }
            };
            var17['onPress'] = var23;
            var17 = var22.bind(var4)(var18, var17);
            var13[1] = var17;
            var5['children'] = var13;
            var8 = var9.bind(var4)(var8, var5);
            _fun0001_ip = 49; continue _fun0001;
case 41:
            var13 = _closure1_slot11;
            var17 = _closure1_slot0;
            var18 = _closure1_slot2;
            var5 = 17;
            var5 = var18[var5];
            var5 = var17.bind(var4)(var5);
            var9 = var5.PremiumAnimatedGiftButton;
            var5 = {};
            var21 = var21.id;
            var5['channelId'] = var21;
            var5['animationDataUrl'] = var20;
            var5['disabled'] = var19;
            var5['active'] = var16;
            var5['loop'] = var16;
            var15 = function onPress(arg1) {
                var5 = _closure2_slot5;
                var1 = _closure1_slot10;
                var4 = var1.TAKE_ACTION;
                var1 = undefined;
                var4 = var5.bind(var1)(var4);
                var4 = _closure2_slot0;
                var2 = _closure1_slot8;
                var3 = var2.NITRO_GIFT;
                var2 = arg1;
                var2 = var4.bind(var1)(var2, var3);
                return var1;
            };
            var5['onPress'] = var15;
            var5['onAnimationFinished'] = var10;
            var15 = 18;
            var15 = var18[var15];
            var15 = var17.bind(var4)(var15);
            var15 = var15.GiftIcon;
            var5['IconComponent'] = var15;
            var5['accessible'] = var14;
            var14 = 19;
            var15 = var18[var14];
            var15 = var17.bind(var4)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var14 = var18[var14];
            var14 = var17.bind(var4)(var14);
            var14 = var14.t;
            var14 = var14.Z1RnTk;
            var14 = var15.bind(var16)(var14);
            var5['accessibilityLabel'] = var14;
            var8 = var13.bind(var4)(var9, var5);
case 49:
            var5 = new Array(2);
            var5[0] = var8;
            if(!var6) { _fun0001_ip = 50; continue _fun0001 }
case 51:
            var9 = _closure1_slot11;
            var8 = _closure1_slot0;
            var13 = _closure1_slot2;
            var7 = 23;
            var7 = var13[var7];
            var7 = var8.bind(var4)(var7);
            var8 = var7.GiftIconTrinketsAnimation;
            var7 = {};
            var7['trinketsAnimationUrl'] = var12;
            var7['trinketsGlowAnimationUrl'] = var11;
            var7['onAnimationFinished'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 50:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 24;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/chat_input/native/action_buttons/ChatInputActionButtonGift.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();