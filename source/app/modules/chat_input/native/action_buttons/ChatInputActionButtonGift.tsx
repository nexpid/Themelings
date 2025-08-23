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
    var4 = var4.ContentDismissActionType;
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot9 = var8;
    var4 = var4.jsxs;
    var _closure1_slot10 = var4;
    var4 = var7.memo;
    var2 = function ChatInputActionButtonGift(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var15 = var1.disabled;
            var16 = var1.channel;
            var2 = var1.onPress;
            var _closure2_slot0 = var2;
            var5 = var1.style;
            var14 = var1.styleButton;
            var4 = undefined;
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var _closure2_slot8 = var4;
            var _closure2_slot9 = var4;
            var2 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 7;
            var1 = var6[var1];
            var8 = var2.bind(var4)(var1);
            var3 = var8.useStateFromStores;
            var1 = _closure1_slot6;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var1 = _closure1_slot6;
                var1 = var1.useReducedMotion;
                return var1;
            };
            var1 = var3.bind(var8)(var2, var1);
            var _closure2_slot1 = var1;
            var3 = _closure1_slot1;
            var2 = 8;
            var2 = var6[var2];
            var9 = var3.bind(var4)(var2);
            var8 = var9.useConfig;
            var2 = {};
            var10 = 'ChatInputActionButtonGift';
            var2['location'] = var10;
            var2 = var8.bind(var9)(var2);
            var8 = var2.animated;
            var2 = 9;
            var2 = var6[var2];
            var2 = var3.bind(var4)(var2);
            var6 = var2.bind(var4)();
            var22 = null;
            var9 = var22 != var6;
            var3 = 0;
            var2 = 0;
            if(!var9) { _fun0001_ip = 206; continue _fun0001 }
 200:
            var2 = var6.dismissibleContentVersion;
 206:
            _closure2_slot2 = var2;
            var9 = var22 == var6;
            var17 = undefined;
            if(var9) { _fun0001_ip = 242; continue _fun0001 }
 219:
            var9 = var6.chatGiftIcon;
            var10 = var22 == var9;
            var17 = undefined;
            if(var10) { _fun0001_ip = 242; continue _fun0001 }
 234:
            var17 = var9.giftBoxAnimation;
 242:
            var9 = var22 == var6;
            var18 = undefined;
            if(var9) { _fun0001_ip = 272; continue _fun0001 }
 251:
            var6 = var6.chatGiftIcon;
            var9 = var22 == var6;
            var18 = undefined;
            if(var9) { _fun0001_ip = 272; continue _fun0001 }
 266:
            var18 = var6.trinketsAnimation;
 272:
            var6 = var8;
            if(!var8) { _fun0001_ip = 282; continue _fun0001 }
 278:
            var6 = var22 != var17;
 282:
            if(!var8) { _fun0001_ip = 289; continue _fun0001 }
 285:
            var8 = var22 != var18;
 289:
            if(!var8) { _fun0001_ip = 295; continue _fun0001 }
 292:
            var8 = !var6;
 295:
            var23 = var6;
            if(var6) { _fun0001_ip = 304; continue _fun0001 }
 301:
            var23 = var8;
 304:
            _closure2_slot3 = var23;
            var10 = _closure1_slot4;
            var9 = var10.useState;
            var12 = false;
            var10 = var9.bind(var10)(var12);
            var9 = _closure1_slot3;
            var13 = 2;
            var10 = var9.bind(var4)(var10, var13);
            var9 = var10[var3];
            _closure2_slot4 = var9;
            var19 = 1;
            var10 = var10[var19];
            _closure2_slot5 = var10;
            if(!var23) { _fun0001_ip = 362; continue _fun0001 }
 359:
            var23 = !var9;
 362:
            var21 = _closure1_slot4;
            var20 = var21.useCallback;
            var10 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = arg1;
                    if(var1) { _fun0002_ip = 22; continue _fun0002 }
 6:
                    var3 = _closure2_slot5;
                    var2 = undefined;
                    var1 = true;
                    var1 = var3.bind(var2)(var1);
 22:
                    var1 = undefined;
                    return var1;
                }
            };
            var9 = new Array(0);
            var10 = var20.bind(var21)(var10, var9);
            var20 = _closure1_slot0;
            var21 = _closure1_slot2;
            var9 = 10;
            var9 = var21[var9];
            var21 = var20.bind(var4)(var9);
            var20 = var21.useSelectedVersionedDismissibleContent;
            var22 = null;
            if(!var23) { _fun0001_ip = 451; continue _fun0001 }
 419:
            var24 = _closure1_slot0;
            var25 = _closure1_slot2;
            var9 = 11;
            var9 = var25[var9];
            var9 = var24.bind(var4)(var9);
            var9 = var9.DismissibleContent;
            var22 = var9.GIFTING_PROMOTION_ICON;
 451:
            var9 = 0;
            if(!var23) { _fun0001_ip = 459; continue _fun0001 }
 456:
            var9 = var2;
 459:
            var26 = true;
            var30 = var21;
            var29 = var22;
            var28 = var9;
            var27 = undefined;
            var9 = var30[var20](var29, var28, var27, var26, var25);
            var2 = _closure1_slot3;
            var2 = var2.bind(var4)(var9, var13);
            var3 = var2[var3];
            var2 = var2[var19];
            _closure2_slot6 = var2;
            var9 = _closure1_slot0;
            var13 = _closure1_slot2;
            var2 = 11;
            var2 = var13[var2];
            var2 = var9.bind(var4)(var2);
            var2 = var2.DismissibleContent;
            var2 = var2.GIFTING_PROMOTION_ICON;
            var13 = var3 === var2;
            _closure2_slot7 = var13;
            if(!var6) { _fun0001_ip = 544; continue _fun0001 }
 541:
            var6 = var13;
 544:
            _closure2_slot8 = var6;
            if(!var8) { _fun0001_ip = 554; continue _fun0001 }
 551:
            var8 = var13;
 554:
            _closure2_slot9 = var8;
            var9 = _closure1_slot4;
            var3 = var9.useEffect;
            var2 = new Array(4);
            var2[0] = var6;
            var2[1] = var13;
            var2[2] = var8;
            var2[3] = var1;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var1 = _closure2_slot1;
                    if(!var1) { _fun0003_ip = 14; continue _fun0003 }
 10:
                    var1 = _closure2_slot8;
 14:
                    if(var1) { _fun0003_ip = 21; continue _fun0003 }
 17:
                    var1 = _closure2_slot9;
 21:
                    if(!var1) { _fun0003_ip = 55; continue _fun0003 }
 24:
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
 55:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var3.bind(var9)(var1, var2);
            var3 = _closure1_slot10;
            var2 = _closure1_slot5;
            var1 = {};
            var1['style'] = var5;
            if(!var8) { _fun0001_ip = 677; continue _fun0001 }
 617:
            var13 = _closure1_slot9;
            var9 = _closure1_slot0;
            var20 = _closure1_slot2;
            var5 = 12;
            var5 = var20[var5];
            var5 = var9.bind(var4)(var5);
            var9 = var5.GiftIconTrinketsAnimation;
            var5 = {};
            var20 = var18.getAnimationData;
            var5['getTrinketsAnimationData'] = var20;
            var18 = var18.getGlowAnimationData;
            var5['getTrinketsGlowAnimationData'] = var18;
            var8 = var13.bind(var4)(var9, var5);
 677:
            var5 = new Array(2);
            var5[0] = var8;
            var9 = _closure1_slot9;
            if(var6) { _fun0001_ip = 848; continue _fun0001 }
 695:
            var8 = _closure1_slot1;
            var18 = _closure1_slot2;
            var6 = 16;
            var6 = var18[var6];
            var8 = var8.bind(var4)(var6);
            var6 = {};
            var13 = new Array(2);
            var13[0] = var14;
            var14 = {};
            var14['zIndex'] = var19;
            var13[1] = var14;
            var6['style'] = var13;
            var6['disabled'] = var15;
            var14 = _closure1_slot0;
            var13 = 15;
            var19 = var18[var13];
            var19 = var14.bind(var4)(var19);
            var20 = var19.intl;
            var19 = var20.string;
            var13 = var18[var13];
            var13 = var14.bind(var4)(var13);
            var13 = var13.t;
            var13 = var13.Z1RnTk;
            var13 = var19.bind(var20)(var13);
            var6['accessibilityLabel'] = var13;
            var6['active'] = var12;
            var13 = 14;
            var13 = var18[var13];
            var13 = var14.bind(var4)(var13);
            var13 = var13.GiftIcon;
            var6['IconComponent'] = var13;
            var13 = function onPress(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var2 = _closure2_slot7;
                    if(var2) { _fun0004_ip = 24; continue _fun0004 }
 10:
                    var3 = _closure2_slot3;
                    if(!var3) { _fun0004_ip = 21; continue _fun0004 }
 17:
                    var3 = _closure2_slot4;
 21:
                    var2 = var3;
 24:
                    if(!var2) { _fun0004_ip = 110; continue _fun0004 }
 27:
                    var4 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var2 = 17;
                    var2 = var8[var2];
                    var3 = undefined;
                    var6 = var4.bind(var3)(var2);
                    var5 = var6.markVersionedDismissibleContentAsDismissed;
                    var2 = 11;
                    var2 = var8[var2];
                    var2 = var4.bind(var3)(var2);
                    var2 = var2.DismissibleContent;
                    var4 = var2.GIFTING_PROMOTION_ICON;
                    var3 = _closure2_slot2;
                    var2 = {};
                    var7 = _closure1_slot8;
                    var7 = var7.TAKE_ACTION;
                    var2['dismissAction'] = var7;
                    var2 = var5.bind(var6)(var4, var3, var2);
 110:
                    var4 = _closure2_slot0;
                    var1 = _closure1_slot7;
                    var3 = var1.NITRO_GIFT;
                    var1 = undefined;
                    var2 = arg1;
                    var2 = var4.bind(var1)(var2, var3);
                    return var1;
                }
            };
            var6['onPress'] = var13;
            var6 = var9.bind(var4)(var8, var6);
            _fun0001_ip = 1009; continue _fun0001;
 848:
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var7 = 13;
            var7 = var14[var7];
            var7 = var13.bind(var4)(var7);
            var8 = var7.PremiumAnimatedGiftButton;
            var7 = {};
            var16 = var16.id;
            var7['channelId'] = var16;
            var16 = var17.getAnimationData;
            var16 = var16.bind(var17)();
            var7['animationData'] = var16;
            var7['disabled'] = var15;
            var7['active'] = var12;
            var7['loop'] = var12;
            var11 = function onPress(arg1) {
                var5 = _closure2_slot6;
                var1 = _closure1_slot8;
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
            var7['onPress'] = var11;
            var7['onAnimationFinished'] = var10;
            var10 = 14;
            var10 = var14[var10];
            var10 = var13.bind(var4)(var10);
            var10 = var10.GiftIcon;
            var7['IconComponent'] = var10;
            var10 = 15;
            var11 = var14[var10];
            var11 = var13.bind(var4)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var10 = var14[var10];
            var10 = var13.bind(var4)(var10);
            var10 = var10.t;
            var10 = var10.Z1RnTk;
            var10 = var11.bind(var12)(var10);
            var7['accessibilityLabel'] = var10;
            var6 = var9.bind(var4)(var8, var7);
 1009:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 18;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/chat_input/native/action_buttons/ChatInputActionButtonGift.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();