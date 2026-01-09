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
            var16 = var1.disabled;
            var20 = var1.channel;
            var2 = var1.onPress;
            var _closure2_slot0 = var2;
            var8 = var1.style;
            var25 = var1.styleButton;
            var4 = undefined;
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var _closure2_slot8 = var4;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var5 = 11;
            var1 = var2[var5];
            var10 = var3.bind(var4)(var1);
            var9 = var10.useStateFromStores;
            var1 = _closure1_slot6;
            var6 = new Array(1);
            var6[0] = var1;
            var1 = function() {
                var1 = _closure1_slot6;
                var1 = var1.useReducedMotion;
                return var1;
            };
            var1 = var9.bind(var10)(var6, var1);
            var _closure2_slot1 = var1;
            var6 = _closure1_slot13;
            var24 = var6.bind(var4)();
            var5 = var2[var5];
            var10 = var3.bind(var4)(var5);
            var9 = var10.useStateFromStoresObject;
            var5 = _closure1_slot7;
            var6 = new Array(1);
            var6[0] = var5;
            var5 = function() {
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
                    var1 = null;
                    if(!(var1 != var2)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var1 = var2.properties;
                    var1 = var1.properties;
                    var3 = var1.oneofKind;
                    var1 = 'giftIcon';
                    if(!(var1 === var3)) { _fun0002_ip = 2; continue _fun0002 }
case 4:
                    var1 = {};
                    var3 = var2.properties;
                    var3 = var3.properties;
                    var3 = var3.giftIcon;
                    var3 = var3.boxAnimationUrl;
                    var1['boxAnimationUrl'] = var3;
                    var3 = var2.properties;
                    var3 = var3.properties;
                    var3 = var3.giftIcon;
                    var3 = var3.trinketAnimationUrl;
                    var1['trinketAnimationUrl'] = var3;
                    var3 = var2.properties;
                    var3 = var3.properties;
                    var3 = var3.giftIcon;
                    var3 = var3.trinketGlowAnimationUrl;
                    var1['trinketGlowAnimationUrl'] = var3;
                    var2 = var2.properties;
                    var2 = var2.properties;
                    var2 = var2.giftIcon;
                    var2 = var2.gradient;
                    var1['gradient'] = var2;
                    _fun0002_ip = 5; continue _fun0002;
case 2:
                    var1 = {'boxAnimationUrl': null, 'trinketAnimationUrl': null, 'trinketGlowAnimationUrl': null, 'gradient': null};
case 5:
                    return var1;
                }
            };
            var5 = var9.bind(var10)(var6, var5);
            var19 = var5.boxAnimationUrl;
            var12 = var5.trinketAnimationUrl;
            var11 = var5.trinketGlowAnimationUrl;
            var22 = var5.gradient;
            var5 = 13;
            var5 = var2[var5];
            var6 = var3.bind(var4)(var5);
            var5 = var6.getGiftingPromotionDismissibleContentVersion;
            var9 = var5.bind(var6)();
            var10 = 14;
            var5 = var2[var10];
            var6 = var3.bind(var4)(var5);
            var5 = var6.isNullOrEmpty;
            var5 = var5.bind(var6)(var19);
            var5 = !var5;
            var2 = var2[var10];
            var3 = var3.bind(var4)(var2);
            var2 = var3.isNullOrEmpty;
            var2 = var2.bind(var3)(var12);
            if(!var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var10];
            var6 = var6.bind(var4)(var3);
            var3 = var6.isNullOrEmpty;
            var2 = var3.bind(var6)(var11);
case 6:
            if(var2) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var2 = var5;
case 8:
            var6 = !var2;
            var27 = var5;
            if(var5) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var27 = var6;
case 10:
            _closure2_slot2 = var27;
            var3 = _closure1_slot4;
            var2 = var3.useState;
            var15 = false;
            var3 = var2.bind(var3)(var15);
            var2 = _closure1_slot3;
            var18 = 2;
            var10 = var2.bind(var4)(var3, var18);
            var3 = 0;
            var2 = var10[var3];
            _closure2_slot3 = var2;
            var17 = 1;
            var10 = var10[var17];
            _closure2_slot4 = var10;
            if(!var27) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var27 = !var2;
case 12:
            var21 = _closure1_slot4;
            var13 = var21.useCallback;
            var10 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = arg1;
                    if(var1) { _fun0003_ip = 14; continue _fun0003 }
case 15:
                    var3 = _closure2_slot4;
                    var2 = undefined;
                    var1 = true;
                    var1 = var3.bind(var2)(var1);
case 14:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = new Array(0);
            var10 = var13.bind(var21)(var10, var2);
            var13 = _closure1_slot0;
            var21 = _closure1_slot2;
            var2 = 15;
            var2 = var21[var2];
            var26 = var13.bind(var4)(var2);
            var23 = var26.useSelectedVersionedDismissibleContent;
            var2 = null;
            var21 = null;
            if(!var27) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var28 = _closure1_slot0;
            var29 = _closure1_slot2;
            var13 = 16;
            var13 = var29[var13];
            var13 = var28.bind(var4)(var13);
            var13 = var13.DismissibleContent;
            var21 = var13.GIFTING_PROMOTION_ICON;
case 16:
            var13 = 0;
            if(!var27) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var13 = var9;
case 18:
            var30 = true;
            var34 = var26;
            var33 = var21;
            var32 = var13;
            var31 = undefined;
            var13 = var34[var23](var33, var32, var31, var30, var29);
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
            _closure2_slot6 = var13;
            if(!var5) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var5 = var13;
case 20:
            _closure2_slot7 = var5;
            if(!var6) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var6 = var13;
case 22:
            _closure2_slot8 = var6;
            var23 = var2 != var22;
            if(!var23) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var2 = var22.colors;
            var2 = var2.length;
            var23 = var2 > var3;
case 24:
            if(!var23) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            var23 = var6;
case 26:
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
                    if(!var1) { _fun0004_ip = 28; continue _fun0004 }
case 29:
                    var1 = _closure2_slot7;
case 28:
                    if(var1) { _fun0004_ip = 30; continue _fun0004 }
case 31:
                    var1 = _closure2_slot8;
case 30:
                    if(!var1) { _fun0004_ip = 32; continue _fun0004 }
case 33:
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
case 32:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var3.bind(var9)(var1, var2);
            var3 = _closure1_slot12;
            var2 = _closure1_slot5;
            var1 = {};
            var1['style'] = var8;
            if(var5) { _fun0001_ip = 34; continue _fun0001 }
case 35:
            var9 = _closure1_slot12;
            var8 = _closure1_slot5;
            var5 = {};
            var17 = var23;
            if(!var23) { _fun0001_ip = 36; continue _fun0001 }
case 37:
            var21 = _closure1_slot11;
            var18 = _closure1_slot1;
            var26 = _closure1_slot2;
            var13 = 20;
            var13 = var26[var13];
            var18 = var18.bind(var4)(var13);
            var13 = {};
            var26 = var24.gradientContainer;
            var13['style'] = var26;
            var26 = _closure1_slot9;
            var27 = var26.START;
            var13['start'] = var27;
            var26 = var26.END;
            var13['end'] = var26;
            var22 = var22.colors;
            var13['colors'] = var22;
            var17 = var21.bind(var4)(var18, var13);
case 36:
            var13 = new Array(2);
            var13[0] = var17;
            var21 = _closure1_slot11;
            var18 = _closure1_slot1;
            var22 = _closure1_slot2;
            var17 = 21;
            var17 = var22[var17];
            var18 = var18.bind(var4)(var17);
            var17 = {};
            var22 = new Array(2);
            var22[0] = var25;
            if(!var23) { _fun0001_ip = 38; continue _fun0001 }
case 39:
            var23 = var24.transparentBackground;
case 38:
            var22[1] = var23;
            var17['style'] = var22;
            var17['disabled'] = var16;
            var23 = _closure1_slot0;
            var24 = _closure1_slot2;
            var22 = 19;
            var25 = var24[var22];
            var25 = var23.bind(var4)(var25);
            var26 = var25.intl;
            var25 = var26.string;
            var22 = var24[var22];
            var22 = var23.bind(var4)(var22);
            var22 = var22.t;
            var22 = var22.Z1RnTk;
            var22 = var25.bind(var26)(var22);
            var17['accessibilityLabel'] = var22;
            var17['active'] = var15;
            var22 = 18;
            var22 = var24[var22];
            var22 = var23.bind(var4)(var22);
            var22 = var22.GiftIcon;
            var17['IconComponent'] = var22;
            var22 = function onPress(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var2 = _closure2_slot6;
                    if(var2) { _fun0005_ip = 33; continue _fun0005 }
case 29:
                    var3 = _closure2_slot2;
                    if(!var3) { _fun0005_ip = 30; continue _fun0005 }
case 31:
                    var3 = _closure2_slot3;
case 30:
                    var2 = var3;
case 33:
                    if(!var2) { _fun0005_ip = 40; continue _fun0005 }
case 41:
                    var4 = _closure2_slot5;
                    var2 = _closure1_slot10;
                    var3 = var2.TAKE_ACTION;
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
case 40:
                    var4 = _closure2_slot0;
                    var1 = _closure1_slot8;
                    var3 = var1.NITRO_GIFT;
                    var1 = undefined;
                    var2 = arg1;
                    var2 = var4.bind(var1)(var2, var3);
                    return var1;
                }
            };
            var17['onPress'] = var22;
            var17 = var21.bind(var4)(var18, var17);
            var13[1] = var17;
            var5['children'] = var13;
            var8 = var9.bind(var4)(var8, var5);
            _fun0001_ip = 42; continue _fun0001;
case 34:
            var13 = _closure1_slot11;
            var17 = _closure1_slot0;
            var18 = _closure1_slot2;
            var5 = 17;
            var5 = var18[var5];
            var5 = var17.bind(var4)(var5);
            var9 = var5.PremiumAnimatedGiftButton;
            var5 = {};
            var20 = var20.id;
            var5['channelId'] = var20;
            var5['animationDataUrl'] = var19;
            var5['disabled'] = var16;
            var5['active'] = var15;
            var5['loop'] = var15;
            var14 = function onPress(arg1) {
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
            var5['onPress'] = var14;
            var5['onAnimationFinished'] = var10;
            var14 = 18;
            var14 = var18[var14];
            var14 = var17.bind(var4)(var14);
            var14 = var14.GiftIcon;
            var5['IconComponent'] = var14;
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
case 42:
            var5 = new Array(2);
            var5[0] = var8;
            if(!var6) { _fun0001_ip = 43; continue _fun0001 }
case 44:
            var9 = _closure1_slot11;
            var8 = _closure1_slot0;
            var13 = _closure1_slot2;
            var7 = 22;
            var7 = var13[var7];
            var7 = var8.bind(var4)(var7);
            var8 = var7.GiftIconTrinketsAnimation;
            var7 = {};
            var7['trinketsAnimationUrl'] = var12;
            var7['trinketsGlowAnimationUrl'] = var11;
            var7['onAnimationFinished'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 43:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 23;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/chat_input/native/action_buttons/ChatInputActionButtonGift.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();