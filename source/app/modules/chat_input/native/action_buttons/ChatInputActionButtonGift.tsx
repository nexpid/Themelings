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
        var7 = var7.space;
        var7 = var7.PX_4;
        var2['left'] = var7;
        var7 = var6[var3];
        var7 = var5.bind(var4)(var7);
        var7 = var7.space;
        var7 = var7.PX_4;
        var2['right'] = var7;
        var7 = var6[var3];
        var7 = var5.bind(var4)(var7);
        var7 = var7.radii;
        var7 = var7.round;
        var2['borderRadius'] = var7;
        var1['gradientContainer'] = var2;
        var2 = {'position': 'absolute', 'top': 0, 'left': 0, 'right': 0, 'bottom': 0};
        var3 = var6[var3];
        var3 = var5.bind(var4)(var3);
        var3 = var3.radii;
        var3 = var3.sm;
        var2['borderRadius'] = var3;
        var1['gradientContainerRefresh'] = var2;
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
            var12 = var1.accessible;
            var18 = var1.disabled;
            var20 = var1.channel;
            var2 = var1.onPress;
            var _closure2_slot0 = var2;
            var8 = var1.style;
            var25 = var1.styleButton;
            var4 = undefined;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var _closure2_slot8 = var4;
            var2 = _closure1_slot4;
            var1 = var2.useRef;
            var27 = null;
            var22 = var1.bind(var2)(var27);
            var _closure2_slot1 = var22;
            var6 = _closure1_slot0;
            var9 = _closure1_slot2;
            var5 = 10;
            var1 = var9[var5];
            var10 = var6.bind(var4)(var1);
            var3 = var10.useStateFromStores;
            var1 = _closure1_slot6;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var1 = _closure1_slot6;
                var1 = var1.useReducedMotion;
                return var1;
            };
            var1 = var3.bind(var10)(var2, var1);
            var _closure2_slot2 = var1;
            var2 = 11;
            var2 = var9[var2];
            var10 = var6.bind(var4)(var2);
            var3 = var10.useMobileVisualRefreshConfig;
            var2 = {};
            var11 = 'ChatInputActionButtonGift';
            var2['location'] = var11;
            var2 = var3.bind(var10)(var2);
            var29 = var2.enabled;
            var2 = _closure1_slot12;
            var24 = var2.bind(var4)();
            var2 = var9[var5];
            var13 = var6.bind(var4)(var2);
            var11 = var13.useStateFromStores;
            var3 = _closure1_slot7;
            var10 = new Array(1);
            var10[0] = var3;
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
            var2 = var11.bind(var13)(var10, var2);
            var _closure2_slot3 = var2;
            var5 = var9[var5];
            var9 = var6.bind(var4)(var5);
            var6 = var9.useStateFromStores;
            var5 = new Array(1);
            var5[0] = var3;
            var3 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure1_slot7;
                    var1 = var2.getGiftPromotion;
                    var3 = var1.bind(var2)();
                    var1 = null;
                    var4 = var1 == var3;
                    var2 = undefined;
                    if(var4) { _fun0003_ip = 5; continue _fun0003 }
case 6:
                    var2 = var3.id;
case 5:
                    var3 = var1 != var2;
                    var1 = '';
                    if(!var3) { _fun0003_ip = 7; continue _fun0003 }
case 8:
                    var1 = var2;
case 7:
                    return var1;
                }
            };
            var21 = var6.bind(var9)(var5, var3);
            var _closure2_slot4 = var21;
            var3 = var27 == var2;
            var19 = undefined;
            if(var3) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var19 = var2.boxAnimationUrl;
case 9:
            var3 = var27 == var2;
            var10 = undefined;
            if(var3) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var10 = var2.trinketAnimationUrl;
case 11:
            var3 = var27 == var2;
            var26 = undefined;
            if(var3) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var26 = var2.gradient;
case 13:
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 13;
            var5 = var6[var2];
            var9 = var3.bind(var4)(var5);
            var5 = var9.isNullOrEmpty;
            var5 = var5.bind(var9)(var19);
            var5 = !var5;
            var2 = var6[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.isNullOrEmpty;
            var2 = var2.bind(var3)(var10);
            var6 = !var2;
            if(!var6) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var6 = !var5;
case 15:
            var16 = _closure1_slot4;
            var2 = var16.useState;
            var17 = false;
            var3 = var2.bind(var16)(var17);
            var2 = _closure1_slot3;
            var15 = 2;
            var2 = var2.bind(var4)(var3, var15);
            var3 = 0;
            var23 = var2[var3];
            var11 = 1;
            var2 = var2[var11];
            _closure2_slot5 = var2;
            var13 = var16.useCallback;
            var9 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = arg1;
                    if(var1) { _fun0004_ip = 17; continue _fun0004 }
case 18:
                    var3 = _closure2_slot5;
                    var2 = undefined;
                    var1 = true;
                    var1 = var3.bind(var2)(var1);
case 17:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = new Array(0);
            var13 = var13.bind(var16)(var9, var2);
            var9 = _closure1_slot0;
            var16 = _closure1_slot2;
            var2 = 14;
            var2 = var16[var2];
            var16 = var9.bind(var4)(var2);
            var9 = var16.useSelectedSnowflakeBoundDismissibleContent;
            if(var5) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var2 = null;
            if(!var6) { _fun0001_ip = 21; continue _fun0001 }
case 19:
            var2 = null;
            if(var23) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var28 = _closure1_slot0;
            var30 = _closure1_slot2;
            var23 = 15;
            var23 = var30[var23];
            var23 = var28.bind(var4)(var23);
            var23 = var23.DismissibleContent;
            var2 = var23.GIFTING_PROMOTION_ICON;
case 21:
            var28 = true;
            var35 = var16;
            var34 = var2;
            var33 = var21;
            var32 = undefined;
            var31 = true;
            var9 = var35[var9](var34, var33, var32, var31, var30);
            var2 = _closure1_slot3;
            var2 = var2.bind(var4)(var9, var15);
            var9 = var2[var3];
            var2 = var2[var11];
            _closure2_slot6 = var2;
            var11 = _closure1_slot0;
            var15 = _closure1_slot2;
            var2 = 15;
            var2 = var15[var2];
            var2 = var11.bind(var4)(var2);
            var2 = var2.DismissibleContent;
            var2 = var2.GIFTING_PROMOTION_ICON;
            var11 = var9 === var2;
            if(!var5) { _fun0001_ip = 23; continue _fun0001 }
case 24:
            var5 = var11;
case 23:
            _closure2_slot7 = var5;
            if(!var6) { _fun0001_ip = 25; continue _fun0001 }
case 26:
            var6 = var11;
case 25:
            _closure2_slot8 = var6;
            var23 = var27 != var26;
            if(!var23) { _fun0001_ip = 27; continue _fun0001 }
case 28:
            var2 = var26.colors;
            var2 = var2.length;
            var23 = var2 > var3;
case 27:
            if(!var23) { _fun0001_ip = 29; continue _fun0001 }
case 30:
            var23 = var6;
case 29:
            var9 = _closure1_slot4;
            var3 = var9.useEffect;
            var2 = new Array(4);
            var2[0] = var5;
            var2[1] = var11;
            var2[2] = var6;
            var2[3] = var1;
            var1 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = _closure2_slot2;
                    if(!var1) { _fun0005_ip = 31; continue _fun0005 }
case 32:
                    var1 = _closure2_slot7;
case 31:
                    if(var1) { _fun0005_ip = 33; continue _fun0005 }
case 34:
                    var1 = _closure2_slot8;
case 33:
                    if(!var1) { _fun0005_ip = 35; continue _fun0005 }
case 36:
                    var1 = global;
                    var4 = var1.setTimeout;
                    var3 = undefined;
                    var2 = function() {
                        var3 = _closure2_slot5;
                        var1 = undefined;
                        var2 = true;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var1 = 7000;
                    var1 = var4.bind(var3)(var2, var1);
case 35:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var3.bind(var9)(var1, var2);
            var3 = _closure1_slot11;
            var2 = _closure1_slot5;
            var1 = {};
            var1['style'] = var8;
            if(var5) { _fun0001_ip = 37; continue _fun0001 }
case 38:
            var9 = _closure1_slot11;
            var8 = _closure1_slot5;
            var5 = {};
            var15 = var23;
            if(!var23) { _fun0001_ip = 39; continue _fun0001 }
case 40:
            var21 = _closure1_slot10;
            var16 = _closure1_slot1;
            var30 = _closure1_slot2;
            var11 = 19;
            var11 = var30[var11];
            var16 = var16.bind(var4)(var11);
            var11 = {};
            if(var29) { _fun0001_ip = 41; continue _fun0001 }
case 42:
            var29 = var24.gradientContainer;
            _fun0001_ip = 43; continue _fun0001;
case 41:
            var29 = var24.gradientContainerRefresh;
case 43:
            var11['style'] = var29;
            var11['useAngle'] = var28;
            var28 = var26.angle;
            var29 = var27 != var28;
            var27 = 180;
            if(!var29) { _fun0001_ip = 44; continue _fun0001 }
case 45:
            var27 = var28;
case 44:
            var11['angle'] = var27;
            var27 = {'x': 0.5, 'y': 0.5};
            var11['angleCenter'] = var27;
            var26 = var26.colors;
            var11['colors'] = var26;
            var15 = var21.bind(var4)(var16, var11);
case 39:
            var11 = new Array(2);
            var11[0] = var15;
            var21 = _closure1_slot10;
            var16 = _closure1_slot1;
            var26 = _closure1_slot2;
            var15 = 20;
            var15 = var26[var15];
            var16 = var16.bind(var4)(var15);
            var15 = {};
            var15['ref'] = var22;
            var22 = new Array(2);
            var22[0] = var25;
            if(!var23) { _fun0001_ip = 46; continue _fun0001 }
case 47:
            var23 = var24.transparentBackground;
case 46:
            var22[1] = var23;
            var15['style'] = var22;
            var15['disabled'] = var18;
            var15['accessible'] = var12;
            var23 = _closure1_slot0;
            var24 = _closure1_slot2;
            var22 = 18;
            var25 = var24[var22];
            var25 = var23.bind(var4)(var25);
            var26 = var25.intl;
            var25 = var26.string;
            var22 = var24[var22];
            var22 = var23.bind(var4)(var22);
            var22 = var22.t;
            var22 = var22.Z1RnTk;
            var22 = var25.bind(var26)(var22);
            var15['accessibilityLabel'] = var22;
            var15['active'] = var17;
            var22 = 17;
            var22 = var24[var22];
            var22 = var23.bind(var4)(var22);
            var22 = var22.GiftIcon;
            var15['IconComponent'] = var22;
            var22 = function onPress(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var3 = _closure2_slot3;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0006_ip = 48; continue _fun0006 }
case 49:
                    var4 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var2 = 21;
                    var2 = var8[var2];
                    var3 = undefined;
                    var6 = var4.bind(var3)(var2);
                    var5 = var6.markSnowflakeBoundDismissibleContentAsDismissed;
                    var2 = 15;
                    var2 = var8[var2];
                    var2 = var4.bind(var3)(var2);
                    var2 = var2.DismissibleContent;
                    var4 = var2.GIFTING_PROMOTION_ICON;
                    var3 = _closure2_slot4;
                    var2 = {};
                    var7 = _closure1_slot9;
                    var7 = var7.TAKE_ACTION;
                    var2['dismissAction'] = var7;
                    var2 = var5.bind(var6)(var4, var3, var2);
case 48:
                    var5 = _closure2_slot0;
                    var2 = _closure1_slot8;
                    var4 = var2.NITRO_GIFT;
                    var3 = _closure2_slot1;
                    var1 = undefined;
                    var2 = arg1;
                    var2 = var5.bind(var1)(var2, var4, var3);
                    return var1;
                }
            };
            var15['onPress'] = var22;
            var15 = var21.bind(var4)(var16, var15);
            var11[1] = var15;
            var5['children'] = var11;
            var8 = var9.bind(var4)(var8, var5);
            _fun0001_ip = 50; continue _fun0001;
case 37:
            var11 = _closure1_slot10;
            var15 = _closure1_slot0;
            var16 = _closure1_slot2;
            var5 = 16;
            var5 = var16[var5];
            var5 = var15.bind(var4)(var5);
            var9 = var5.PremiumAnimatedGiftButton;
            var5 = {};
            var20 = var20.id;
            var5['channelId'] = var20;
            var5['animationDataUrl'] = var19;
            var5['disabled'] = var18;
            var5['active'] = var17;
            var5['loop'] = var17;
            var14 = function onPress(arg1) {
                var5 = _closure2_slot6;
                var1 = _closure1_slot9;
                var4 = var1.TAKE_ACTION;
                var1 = undefined;
                var4 = var5.bind(var1)(var4);
                var5 = _closure2_slot0;
                var3 = _closure1_slot8;
                var4 = var3.NITRO_GIFT;
                var3 = _closure2_slot1;
                var2 = arg1;
                var2 = var5.bind(var1)(var2, var4, var3);
                return var1;
            };
            var5['onPress'] = var14;
            var5['onAnimationFinished'] = var13;
            var13 = 17;
            var13 = var16[var13];
            var13 = var15.bind(var4)(var13);
            var13 = var13.GiftIcon;
            var5['IconComponent'] = var13;
            var5['accessible'] = var12;
            var12 = 18;
            var13 = var16[var12];
            var13 = var15.bind(var4)(var13);
            var14 = var13.intl;
            var13 = var14.string;
            var12 = var16[var12];
            var12 = var15.bind(var4)(var12);
            var12 = var12.t;
            var12 = var12.Z1RnTk;
            var12 = var13.bind(var14)(var12);
            var5['accessibilityLabel'] = var12;
            var8 = var11.bind(var4)(var9, var5);
case 50:
            var5 = new Array(2);
            var5[0] = var8;
            if(!var6) { _fun0001_ip = 51; continue _fun0001 }
case 52:
            var9 = _closure1_slot10;
            var8 = _closure1_slot0;
            var11 = _closure1_slot2;
            var7 = 22;
            var7 = var11[var7];
            var7 = var8.bind(var4)(var7);
            var8 = var7.GiftIconTrinketsAnimation;
            var7 = {};
            var7['trinketsAnimationUrl'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 51:
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