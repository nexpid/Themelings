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
    var4 = var5.bind(var1)(var4);
    var4 = var4.ChatInputActionType;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.VerticalGradient;
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ContentDismissActionType;
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot10 = var8;
    var4 = var4.jsxs;
    var _closure1_slot11 = var4;
    var4 = 8;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = function() {
        var1 = {};
        var2 = {'position': 'absolute', 'top': 0, 'left': null, 'right': null, 'bottom': 0};
        var5 = _closure1_slot1;
        var6 = _closure1_slot2;
        var3 = 9;
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
    var _closure1_slot12 = var4;
    var4 = var7.memo;
    var2 = function ChatInputActionButtonGift(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var15 = var1.disabled;
            var18 = var1.channel;
            var2 = var1.onPress;
            var _closure2_slot0 = var2;
            var8 = var1.style;
            var24 = var1.styleButton;
            var4 = undefined;
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var _closure2_slot8 = var4;
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 10;
            var1 = var6[var1];
            var9 = var3.bind(var4)(var1);
            var5 = var9.useStateFromStores;
            var1 = _closure1_slot6;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var1 = _closure1_slot6;
                var1 = var1.useReducedMotion;
                return var1;
            };
            var1 = var5.bind(var9)(var2, var1);
            var _closure2_slot1 = var1;
            var2 = _closure1_slot12;
            var23 = var2.bind(var4)();
            var5 = _closure1_slot1;
            var2 = 11;
            var2 = var6[var2];
            var2 = var5.bind(var4)(var2);
            var5 = var2.bind(var4)();
            var2 = 12;
            var2 = var6[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.getGiftingPromotionDismissibleContentVersion;
            var3 = var2.bind(var3)();
            var2 = null;
            var6 = var2 == var5;
            var19 = undefined;
            if(var6) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = var5.chatGiftIcon;
            var9 = var2 == var6;
            var19 = undefined;
            if(var9) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var19 = var6.giftBoxAnimation;
case 2:
            var6 = var2 == var5;
            var11 = undefined;
            if(var6) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var6 = var5.chatGiftIcon;
            var9 = var2 == var6;
            var11 = undefined;
            if(var9) { _fun0001_ip = 5; continue _fun0001 }
case 7:
            var11 = var6.trinketsAnimation;
case 5:
            var6 = var2 == var5;
            var21 = undefined;
            if(var6) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var5 = var5.chatGiftIcon;
            var6 = var2 == var5;
            var21 = undefined;
            if(var6) { _fun0001_ip = 8; continue _fun0001 }
case 10:
            var5 = var5.gradientConfig;
            var6 = var2 == var5;
            var21 = undefined;
            if(var6) { _fun0001_ip = 8; continue _fun0001 }
case 11:
            var21 = var5.gradient;
case 8:
            var5 = var2 != var19;
            var6 = var2 != var11;
            if(!var6) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var6 = !var5;
case 12:
            var26 = var5;
            if(var5) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var26 = var6;
case 14:
            _closure2_slot2 = var26;
            var10 = _closure1_slot4;
            var9 = var10.useState;
            var14 = false;
            var10 = var9.bind(var10)(var14);
            var9 = _closure1_slot3;
            var17 = 2;
            var16 = var9.bind(var4)(var10, var17);
            var9 = 0;
            var10 = var16[var9];
            _closure2_slot3 = var10;
            var12 = 1;
            var16 = var16[var12];
            _closure2_slot4 = var16;
            if(!var26) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var26 = !var10;
case 16:
            var22 = _closure1_slot4;
            var20 = var22.useCallback;
            var16 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = arg1;
                    if(var1) { _fun0002_ip = 18; continue _fun0002 }
case 19:
                    var3 = _closure2_slot4;
                    var2 = undefined;
                    var1 = true;
                    var1 = var3.bind(var2)(var1);
case 18:
                    var1 = undefined;
                    return var1;
                }
            };
            var10 = new Array(0);
            var10 = var20.bind(var22)(var16, var10);
            var20 = _closure1_slot0;
            var22 = _closure1_slot2;
            var16 = 13;
            var16 = var22[var16];
            var25 = var20.bind(var4)(var16);
            var22 = var25.useSelectedVersionedDismissibleContent;
            var20 = null;
            if(!var26) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var27 = _closure1_slot0;
            var28 = _closure1_slot2;
            var16 = 14;
            var16 = var28[var16];
            var16 = var27.bind(var4)(var16);
            var16 = var16.DismissibleContent;
            var20 = var16.GIFTING_PROMOTION_ICON;
case 20:
            var16 = 0;
            if(!var26) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var16 = var3;
case 22:
            var29 = true;
            var33 = var25;
            var32 = var20;
            var31 = var16;
            var30 = undefined;
            var16 = var33[var22](var32, var31, var30, var29, var28);
            var3 = _closure1_slot3;
            var3 = var3.bind(var4)(var16, var17);
            var9 = var3[var9];
            var3 = var3[var12];
            _closure2_slot5 = var3;
            var12 = _closure1_slot0;
            var16 = _closure1_slot2;
            var3 = 14;
            var3 = var16[var3];
            var3 = var12.bind(var4)(var3);
            var3 = var3.DismissibleContent;
            var3 = var3.GIFTING_PROMOTION_ICON;
            var12 = var9 === var3;
            _closure2_slot6 = var12;
            if(!var5) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var5 = var12;
case 24:
            _closure2_slot7 = var5;
            if(!var6) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            var6 = var12;
case 26:
            _closure2_slot8 = var6;
            var22 = var2 != var21;
            if(!var22) { _fun0001_ip = 28; continue _fun0001 }
case 29:
            var22 = var6;
case 28:
            var9 = _closure1_slot4;
            var3 = var9.useEffect;
            var2 = new Array(4);
            var2[0] = var5;
            var2[1] = var12;
            var2[2] = var6;
            var2[3] = var1;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = _closure2_slot1;
                    if(!var1) { _fun0003_ip = 30; continue _fun0003 }
case 31:
                    var1 = _closure2_slot7;
case 30:
                    if(var1) { _fun0003_ip = 32; continue _fun0003 }
case 33:
                    var1 = _closure2_slot8;
case 32:
                    if(!var1) { _fun0003_ip = 34; continue _fun0003 }
case 35:
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
case 34:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var3.bind(var9)(var1, var2);
            var3 = _closure1_slot11;
            var2 = _closure1_slot5;
            var1 = {};
            var1['style'] = var8;
            if(var5) { _fun0001_ip = 36; continue _fun0001 }
case 37:
            var9 = _closure1_slot11;
            var8 = _closure1_slot5;
            var5 = {};
            var16 = var22;
            if(!var22) { _fun0001_ip = 38; continue _fun0001 }
case 39:
            var20 = _closure1_slot10;
            var17 = _closure1_slot1;
            var25 = _closure1_slot2;
            var12 = 18;
            var12 = var25[var12];
            var17 = var17.bind(var4)(var12);
            var12 = {};
            var25 = var23.gradientContainer;
            var12['style'] = var25;
            var25 = _closure1_slot8;
            var26 = var25.START;
            var12['start'] = var26;
            var25 = var25.END;
            var12['end'] = var25;
            var12['colors'] = var21;
            var16 = var20.bind(var4)(var17, var12);
case 38:
            var12 = new Array(2);
            var12[0] = var16;
            var20 = _closure1_slot10;
            var17 = _closure1_slot1;
            var21 = _closure1_slot2;
            var16 = 19;
            var16 = var21[var16];
            var17 = var17.bind(var4)(var16);
            var16 = {};
            var21 = new Array(2);
            var21[0] = var24;
            if(!var22) { _fun0001_ip = 40; continue _fun0001 }
case 41:
            var22 = var23.transparentBackground;
case 40:
            var21[1] = var22;
            var16['style'] = var21;
            var16['disabled'] = var15;
            var22 = _closure1_slot0;
            var23 = _closure1_slot2;
            var21 = 17;
            var24 = var23[var21];
            var24 = var22.bind(var4)(var24);
            var25 = var24.intl;
            var24 = var25.string;
            var21 = var23[var21];
            var21 = var22.bind(var4)(var21);
            var21 = var21.t;
            var21 = var21.Z1RnTk;
            var21 = var24.bind(var25)(var21);
            var16['accessibilityLabel'] = var21;
            var16['active'] = var14;
            var21 = 16;
            var21 = var23[var21];
            var21 = var22.bind(var4)(var21);
            var21 = var21.GiftIcon;
            var16['IconComponent'] = var21;
            var21 = function onPress(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var2 = _closure2_slot6;
                    if(var2) { _fun0004_ip = 35; continue _fun0004 }
case 31:
                    var3 = _closure2_slot2;
                    if(!var3) { _fun0004_ip = 32; continue _fun0004 }
case 33:
                    var3 = _closure2_slot3;
case 32:
                    var2 = var3;
case 35:
                    if(!var2) { _fun0004_ip = 42; continue _fun0004 }
case 43:
                    var4 = _closure2_slot5;
                    var2 = _closure1_slot9;
                    var3 = var2.TAKE_ACTION;
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
case 42:
                    var4 = _closure2_slot0;
                    var1 = _closure1_slot7;
                    var3 = var1.NITRO_GIFT;
                    var1 = undefined;
                    var2 = arg1;
                    var2 = var4.bind(var1)(var2, var3);
                    return var1;
                }
            };
            var16['onPress'] = var21;
            var16 = var20.bind(var4)(var17, var16);
            var12[1] = var16;
            var5['children'] = var12;
            var8 = var9.bind(var4)(var8, var5);
            _fun0001_ip = 44; continue _fun0001;
case 36:
            var12 = _closure1_slot10;
            var16 = _closure1_slot0;
            var17 = _closure1_slot2;
            var5 = 15;
            var5 = var17[var5];
            var5 = var16.bind(var4)(var5);
            var9 = var5.PremiumAnimatedGiftButton;
            var5 = {};
            var18 = var18.id;
            var5['channelId'] = var18;
            var18 = var19.getAnimationData;
            var18 = var18.bind(var19)();
            var5['animationData'] = var18;
            var5['disabled'] = var15;
            var5['active'] = var14;
            var5['loop'] = var14;
            var13 = function onPress(arg1) {
                var5 = _closure2_slot5;
                var1 = _closure1_slot9;
                var4 = var1.TAKE_ACTION;
                var1 = undefined;
                var4 = var5.bind(var1)(var4);
                var4 = _closure2_slot0;
                var2 = _closure1_slot7;
                var3 = var2.NITRO_GIFT;
                var2 = arg1;
                var2 = var4.bind(var1)(var2, var3);
                return var1;
            };
            var5['onPress'] = var13;
            var5['onAnimationFinished'] = var10;
            var13 = 16;
            var13 = var17[var13];
            var13 = var16.bind(var4)(var13);
            var13 = var13.GiftIcon;
            var5['IconComponent'] = var13;
            var13 = 17;
            var14 = var17[var13];
            var14 = var16.bind(var4)(var14);
            var15 = var14.intl;
            var14 = var15.string;
            var13 = var17[var13];
            var13 = var16.bind(var4)(var13);
            var13 = var13.t;
            var13 = var13.Z1RnTk;
            var13 = var14.bind(var15)(var13);
            var5['accessibilityLabel'] = var13;
            var8 = var12.bind(var4)(var9, var5);
case 44:
            var5 = new Array(2);
            var5[0] = var8;
            if(!var6) { _fun0001_ip = 45; continue _fun0001 }
case 46:
            var9 = _closure1_slot10;
            var8 = _closure1_slot0;
            var12 = _closure1_slot2;
            var7 = 20;
            var7 = var12[var7];
            var7 = var8.bind(var4)(var7);
            var8 = var7.GiftIconTrinketsAnimation;
            var7 = {};
            var12 = var11.getAnimationData;
            var7['getTrinketsAnimationData'] = var12;
            var11 = var11.getGlowAnimationData;
            var7['getTrinketsGlowAnimationData'] = var11;
            var7['onAnimationFinished'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 45:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 21;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/chat_input/native/action_buttons/ChatInputActionButtonGift.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();