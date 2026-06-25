// app/modules/double_tap_to_react/native/DoubleTapToReactChatInputBanner.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var5 = require;
        var11 = metroImportDefault;
        var3 = exports;
        var6 = dependencyMap;
        var _closure1_slot0 = var5;
        var _closure1_slot1 = var11;
        var _closure1_slot2 = var6;
        var1 = function DoubleTapToReactChatInputBannerInner(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var1 = arg1;
                var24 = var1.emoji;
                var13 = var1.handleDismissBanner;
                var1 = _closure1_slot13;
                var4 = undefined;
                var11 = var1.bind(var4)();
                var2 = _closure1_slot0;
                var14 = _closure1_slot2;
                var1 = 10;
                var1 = var14[var1];
                var5 = var2.bind(var4)(var1);
                var3 = var5.useStateFromStores;
                var1 = _closure1_slot6;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() {
                    var1 = _closure1_slot6;
                    var1 = var1.useReducedMotion;
                    return var1;
                };
                var18 = var3.bind(var5)(var2, var1);
                var3 = _closure1_slot10;
                var2 = _closure1_slot5;
                var1 = {};
                var5 = var11.container;
                var1['style'] = var5;
                var7 = _closure1_slot10;
                var6 = _closure1_slot5;
                var5 = {};
                var8 = var11.emojiContainer;
                var5['style'] = var8;
                var12 = _closure1_slot9;
                var10 = _closure1_slot1;
                var8 = 11;
                var8 = var14[var8];
                var10 = var10.bind(var4)(var8);
                var8 = {};
                var14 = var11.emoji;
                var8['style'] = var14;
                var14 = var11.emoji;
                var8['fastImageStyle'] = var14;
                var14 = var11.textEmoji;
                var8['textEmojiStyle'] = var14;
                var14 = var24.id;
                var15 = null;
                var16 = var15 == var14;
                var14 = '';
                if(!var16) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                var14 = var24.surrogates;
case 2:
                var8['name'] = var14;
                var14 = var24.id;
                if(!(var15 == var14)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                var14 = var24.url;
                _fun0002_ip = 6; continue _fun0002;
case 4:
                var16 = _closure1_slot1;
                var17 = _closure1_slot2;
                var15 = 12;
                var15 = var17[var15];
                var17 = var16.bind(var4)(var15);
                var16 = var17.getEmojiURL;
                var15 = {};
                var19 = var24.id;
                var15['id'] = var19;
                var18 = !var18;
                if(!var18) { _fun0002_ip = 7; continue _fun0002 }
case 8:
                var18 = var24.animated;
case 7:
                var15['animated'] = var18;
                var18 = _closure1_slot8;
                var15['size'] = var18;
                var14 = var16.bind(var17)(var15);
case 6:
                var8['src'] = var14;
                var10 = var12.bind(var4)(var10, var8);
                var8 = new Array(2);
                var8[0] = var10;
                var17 = _closure1_slot9;
                var10 = _closure1_slot0;
                var12 = _closure1_slot2;
                var16 = 13;
                var14 = var12[var16];
                var14 = var10.bind(var4)(var14);
                var15 = var14.Text;
                var14 = {'variant': 'heading-xl/semibold', 'color': 'interactive-text-default', 'children': '1'};
                var14 = var17.bind(var4)(var15, var14);
                var8[1] = var14;
                var5['children'] = var8;
                var6 = var7.bind(var4)(var6, var5);
                var5 = new Array(3);
                var5[0] = var6;
                var8 = _closure1_slot10;
                var7 = _closure1_slot5;
                var6 = {};
                var14 = var11.text;
                var6['style'] = var14;
                var18 = _closure1_slot10;
                var17 = _closure1_slot5;
                var15 = {};
                var14 = var11.header;
                var15['style'] = var14;
                var21 = _closure1_slot9;
                var14 = var12[var16];
                var14 = var10.bind(var4)(var14);
                var20 = var14.Text;
                var19 = {'variant': 'text-md/semibold', 'color': 'mobile-text-heading-primary'};
                var14 = 14;
                var22 = var12[var14];
                var22 = var10.bind(var4)(var22);
                var26 = var22.intl;
                var25 = var26.string;
                var22 = var12[var14];
                var22 = var10.bind(var4)(var22);
                var22 = var22.t;
                var22 = var22["6RUX7d"];
                var22 = var25.bind(var26)(var22);
                var19['children'] = var22;
                var20 = var21.bind(var4)(var20, var19);
                var19 = new Array(2);
                var19[0] = var20;
                var22 = _closure1_slot9;
                var20 = 15;
                var20 = var12[var20];
                var20 = var10.bind(var4)(var20);
                var21 = var20.NewBadge;
                var20 = {};
                var20 = var22.bind(var4)(var21, var20);
                var19[1] = var20;
                var15['children'] = var19;
                var17 = var18.bind(var4)(var17, var15);
                var15 = new Array(2);
                var15[0] = var17;
                var18 = _closure1_slot9;
                var16 = var12[var16];
                var16 = var10.bind(var4)(var16);
                var17 = var16.Text;
                var16 = {'variant': 'text-xs/medium', 'color': 'text-default'};
                var19 = var12[var14];
                var19 = var10.bind(var4)(var19);
                var22 = var19.intl;
                var21 = var22.format;
                var19 = var12[var14];
                var19 = var10.bind(var4)(var19);
                var19 = var19.t;
                var20 = var19["5/l2rR"];
                var19 = {};
                var24 = var24.name;
                var19['emojiName'] = var24;
                var24 = function emojiNameHook(arg1, arg2) {
                    var5 = _closure1_slot9;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 13;
                    var1 = var3[var1];
                    var4 = undefined;
                    var1 = var2.bind(var4)(var1);
                    var3 = var1.Text;
                    var2 = {'variant': 'text-xs/bold', 'color': 'text-strong'};
                    var1 = arg1;
                    var2['children'] = var1;
                    var1 = arg2;
                    var1 = var5.bind(var4)(var3, var2, var1);
                    return var1;
                };
                var19['emojiNameHook'] = var24;
                var23 = function tapHereHook(arg1, arg2) {
                    var5 = _closure1_slot9;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 13;
                    var1 = var3[var1];
                    var4 = undefined;
                    var1 = var2.bind(var4)(var1);
                    var3 = var1.Text;
                    var2 = {'variant': 'text-xs/medium', 'color': 'text-brand'};
                    var1 = arg1;
                    var2['children'] = var1;
                    var1 = arg2;
                    var1 = var5.bind(var4)(var3, var2, var1);
                    return var1;
                };
                var19['tapHereHook'] = var23;
                var19 = var21.bind(var22)(var20, var19);
                var16['children'] = var19;
                var16 = var18.bind(var4)(var17, var16);
                var15[1] = var16;
                var6['children'] = var15;
                var6 = var8.bind(var4)(var7, var6);
                var5[1] = var6;
                var8 = _closure1_slot9;
                var6 = 16;
                var6 = var12[var6];
                var6 = var10.bind(var4)(var6);
                var7 = var6.PressableOpacity;
                var6 = {'hitSlop': 8, 'accessibilityRole': 'button'};
                var15 = var12[var14];
                var15 = var10.bind(var4)(var15);
                var16 = var15.intl;
                var15 = var16.string;
                var14 = var12[var14];
                var14 = var10.bind(var4)(var14);
                var14 = var14.t;
                var14 = var14.cpT0Cq;
                var14 = var15.bind(var16)(var14);
                var6['accessibilityLabel'] = var14;
                var6['onPress'] = var13;
                var11 = var11.closeButton;
                var6['style'] = var11;
                var11 = _closure1_slot9;
                var9 = 17;
                var9 = var12[var9];
                var9 = var10.bind(var4)(var9);
                var10 = var9.XSmallIcon;
                var9 = {'size': 'sm', 'color': 'icon-subtle'};
                var9 = var11.bind(var4)(var10, var9);
                var6['children'] = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5[2] = var6;
                var1['children'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var _closure1_slot15 = var1;
        var1 = function DoubleTapToReactChatInputBannerAnimationContainer(arg1) {
            var2 = arg1;
            var9 = var2.channel;
            var _closure2_slot0 = var9;
            var16 = var2.emoji;
            var _closure2_slot1 = var16;
            var2 = var2.markAsDismissed;
            var _closure2_slot2 = var2;
            var3 = _closure1_slot13;
            var4 = undefined;
            var13 = var3.bind(var4)();
            var6 = _closure1_slot4;
            var5 = var6.useState;
            var3 = 82;
            var5 = var5.bind(var6)(var3);
            var3 = _closure1_slot3;
            var7 = 2;
            var3 = var3.bind(var4)(var5, var7);
            var11 = 0;
            var17 = var3[var11];
            var _closure2_slot3 = var17;
            var6 = 1;
            var3 = var3[var6];
            var _closure2_slot4 = var3;
            var10 = _closure1_slot0;
            var18 = _closure1_slot2;
            var3 = 10;
            var3 = var18[var3];
            var14 = var10.bind(var4)(var3);
            var8 = var14.useStateFromStores;
            var3 = _closure1_slot6;
            var5 = new Array(1);
            var5[0] = var3;
            var3 = function() {
                var1 = _closure1_slot6;
                var1 = var1.useReducedMotion;
                return var1;
            };
            var15 = var8.bind(var14)(var5, var3);
            var _closure2_slot5 = var15;
            var8 = _closure1_slot4;
            var5 = var8.useState;
            var3 = false;
            var5 = var5.bind(var8)(var3);
            var3 = _closure1_slot3;
            var5 = var3.bind(var4)(var5, var7);
            var3 = var5[var11];
            var _closure2_slot6 = var3;
            var5 = var5[var6];
            var _closure2_slot7 = var5;
            var7 = _closure1_slot1;
            var5 = 18;
            var5 = var18[var5];
            var6 = var7.bind(var4)(var5);
            var5 = {};
            var8 = 19;
            var14 = var18[var8];
            var14 = var10.bind(var4)(var14);
            var14 = var14.ImpressionTypes;
            var14 = var14.VIEW;
            var5['type'] = var14;
            var8 = var18[var8];
            var8 = var10.bind(var4)(var8);
            var8 = var8.ImpressionNames;
            var8 = var8.DOUBLE_TAP_REACT_UPSELL;
            var5['name'] = var8;
            var5 = var6.bind(var4)(var5);
            var6 = 20;
            var5 = var18[var6];
            var8 = var10.bind(var4)(var5);
            var5 = var8.useSharedValue;
            var14 = var5.bind(var8)(var11);
            var _closure2_slot8 = var14;
            var11 = _closure1_slot4;
            var8 = var11.useEffect;
            var5 = new Array(3);
            var5[0] = var14;
            var5[1] = var17;
            var5[2] = var3;
            var3 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var4 = _closure2_slot6;
                    var3 = _closure2_slot8;
                    var2 = var3.set;
                    if(var4) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                    var1 = _closure2_slot3;
                    var1 = var2.bind(var3)(var1);
                    _fun0003_ip = 11; continue _fun0003;
case 9:
                    var1 = 0;
                    var1 = var2.bind(var3)(var1);
case 11:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var8.bind(var11)(var3, var5);
            var3 = var18[var6];
            var8 = var10.bind(var4)(var3);
            var5 = var8.useAnimatedStyle;
            var3 = function v() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = _closure2_slot5;
                    var2 = {};
                    if(var1) { _fun0004_ip = 12; continue _fun0004 }
case 13:
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var1 = 20;
                    var1 = var12[var1];
                    var10 = undefined;
                    var6 = var11.bind(var10)(var1);
                    var5 = var6.withDelay;
                    var1 = 21;
                    var1 = var12[var1];
                    var8 = var11.bind(var10)(var1);
                    var7 = var8.withTiming;
                    var4 = _closure2_slot8;
                    var1 = var4.get;
                    var4 = var1.bind(var4)();
                    var1 = {};
                    var9 = 300;
                    var1['duration'] = var9;
                    var9 = 22;
                    var9 = var12[var9];
                    var9 = var11.bind(var10)(var9);
                    var9 = var9.DECELERATED_EASING;
                    var1['easing'] = var9;
                    var4 = var7.bind(var8)(var4, var1);
                    var1 = 200;
                    var1 = var5.bind(var6)(var1, var4);
                    var2['height'] = var1;
                    var1 = var2;
                    _fun0004_ip = 14; continue _fun0004;
case 12:
                    var4 = _closure2_slot8;
                    var3 = var4.get;
                    var3 = var3.bind(var4)();
                    var2['height'] = var3;
                    var1 = var2;
case 14:
                    return var1;
                }
            };
            var11 = {};
            var11['useReducedMotion'] = var15;
            var11['height'] = var14;
            var14 = var18[var6];
            var14 = var10.bind(var4)(var14);
            var14 = var14.withDelay;
            var11['withDelay'] = var14;
            var14 = 21;
            var14 = var18[var14];
            var14 = var10.bind(var4)(var14);
            var14 = var14.withTiming;
            var11['withTiming'] = var14;
            var14 = 22;
            var14 = var18[var14];
            var14 = var10.bind(var4)(var14);
            var14 = var14.DECELERATED_EASING;
            var11['DECELERATED_EASING'] = var14;
            var3['__closure'] = var11;
            var11 = 14971794499123.0;
            var3['__workletHash'] = var11;
            var11 = _closure1_slot14;
            var3['__initData'] = var11;
            var11 = var5.bind(var8)(var3);
            var14 = _closure1_slot4;
            var8 = var14.useCallback;
            var5 = function(arg1) {
                var1 = arg1;
                var1 = var1.nativeEvent;
                var3 = _closure2_slot4;
                var1 = var1.layout;
                var2 = var1.height;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var3 = new Array(0);
            var14 = var8.bind(var14)(var5, var3);
            var15 = _closure1_slot4;
            var8 = var15.useCallback;
            var5 = new Array(2);
            var5[0] = var16;
            var5[1] = var2;
            var3 = function() {
                var5 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 23;
                var4 = var3[var1];
                var1 = undefined;
                var8 = var5.bind(var1)(var4);
                var7 = var8.openLazy;
                var5 = _closure1_slot0;
                var4 = 25;
                var4 = var3[var4];
                var5 = var5.bind(var1)(var4);
                var4 = 24;
                var4 = var3[var4];
                var3 = var3.paths;
                var6 = var5.bind(var1)(var4, var3);
                var5 = {};
                var4 = _closure2_slot1;
                var5['emoji'] = var4;
                var4 = 'DoubleTapToReactActionSheet';
                var4 = var7.bind(var8)(var6, var4, var5);
                var3 = _closure2_slot2;
                var2 = _closure1_slot7;
                var2 = var2.TAKE_ACTION;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var17 = var8.bind(var15)(var3, var5);
            var15 = _closure1_slot4;
            var8 = var15.useCallback;
            var5 = new Array(1);
            var5[0] = var2;
            var3 = function() {
                var3 = _closure2_slot7;
                var1 = undefined;
                var2 = true;
                var2 = var3.bind(var1)(var2);
                var2 = global;
                var4 = var2.setTimeout;
                var3 = function() {
                    var3 = _closure2_slot2;
                    var1 = _closure1_slot7;
                    var2 = var1.USER_DISMISS;
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var2 = 500;
                var2 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var15 = var8.bind(var15)(var3, var5);
            var3 = 26;
            var3 = var18[var3];
            var5 = var7.bind(var4)(var3);
            var3 = var9.id;
            var19 = var5.bind(var4)(var3);
            var _closure2_slot9 = var19;
            var8 = _closure1_slot4;
            var5 = var8.useEffect;
            var3 = new Array(3);
            var3[0] = var19;
            var9 = var9.id;
            var3[1] = var9;
            var3[2] = var2;
            var2 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var3 = _closure2_slot9;
                    var2 = null;
                    var2 = var2 != var3;
                    if(!var2) { _fun0005_ip = 15; continue _fun0005 }
case 16:
                    var4 = _closure2_slot9;
                    var3 = _closure2_slot0;
                    var3 = var3.id;
                    var2 = var4 !== var3;
case 15:
                    if(!var2) { _fun0005_ip = 17; continue _fun0005 }
case 18:
                    var3 = _closure2_slot2;
                    var1 = _closure1_slot7;
                    var2 = var1.AUTO_DISMISS;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
case 17:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var5.bind(var8)(var2, var3);
            var2 = 27;
            var2 = var18[var2];
            var3 = var10.bind(var4)(var2);
            var2 = var3.useUnmountEffect;
            var1 = function() {
                var3 = _closure2_slot2;
                var1 = _closure1_slot7;
                var2 = var1.AUTO_DISMISS;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            var3 = _closure1_slot10;
            var2 = _closure1_slot11;
            var1 = {};
            var9 = _closure1_slot9;
            var8 = _closure1_slot5;
            var5 = {};
            var19 = var13.measurement;
            var5['style'] = var19;
            var5['onLayout'] = var14;
            var20 = _closure1_slot9;
            var14 = _closure1_slot15;
            var19 = {};
            var19['emoji'] = var16;
            var19['handleDismissBanner'] = var15;
            var19 = var20.bind(var4)(var14, var19);
            var5['children'] = var19;
            var8 = var9.bind(var4)(var8, var5);
            var5 = new Array(2);
            var5[0] = var8;
            var8 = _closure1_slot9;
            var6 = var18[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.View;
            var6 = {};
            var9 = new Array(2);
            var9[0] = var11;
            var11 = var13.animatedContainer;
            var9[1] = var11;
            var6['style'] = var9;
            var11 = _closure1_slot9;
            var9 = 28;
            var9 = var18[var9];
            var9 = var10.bind(var4)(var9);
            var10 = var9.AnimatedPressableHighlight;
            var9 = {};
            var9['onPress'] = var17;
            var13 = var13.highlight;
            var9['style'] = var13;
            var13 = _closure1_slot12;
            var9['androidRippleConfig'] = var13;
            var13 = _closure1_slot9;
            var12 = {};
            var12['emoji'] = var16;
            var12['handleDismissBanner'] = var15;
            var12 = var13.bind(var4)(var14, var12);
            var9['children'] = var12;
            var9 = var11.bind(var4)(var10, var9);
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var _closure1_slot16 = var1;
        var1 = global;
        var8 = var1.Object;
        var7 = var8.defineProperty;
        var4 = {};
        var1 = true;
        var4['value'] = var1;
        var1 = '__esModule';
        var1 = var7.bind(var8)(var3, var1, var4);
        var7 = 0;
        var4 = var6[var7];
        var1 = undefined;
        var4 = var11.bind(var1)(var4);
        var _closure1_slot3 = var4;
        var4 = 1;
        var8 = var6[var4];
        var4 = metroImportAll;
        var4 = var4.bind(var1)(var8);
        var _closure1_slot4 = var4;
        var4 = 2;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var4 = var4.View;
        var _closure1_slot5 = var4;
        var4 = 3;
        var4 = var6[var4];
        var4 = var11.bind(var1)(var4);
        var _closure1_slot6 = var4;
        var4 = 4;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var4 = var4.ContentDismissActionType;
        var _closure1_slot7 = var4;
        var4 = 5;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var4 = var4.EMOJI_URL_BASE_SIZE;
        var _closure1_slot8 = var4;
        var4 = 6;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var8 = var4.jsx;
        var _closure1_slot9 = var8;
        var8 = var4.jsxs;
        var _closure1_slot10 = var8;
        var4 = var4.Fragment;
        var _closure1_slot11 = var4;
        var4 = {};
        var4['cornerRadius'] = var7;
        var _closure1_slot12 = var4;
        var4 = 7;
        var4 = var6[var4];
        var8 = var5.bind(var1)(var4);
        var7 = var8.createStyles;
        var4 = {};
        var9 = {'borderTopWidth': 1, 'borderColor': null, 'overflow': 'hidden'};
        var10 = 8;
        var12 = var6[var10];
        var12 = var11.bind(var1)(var12);
        var12 = var12.colors;
        var12 = var12.BORDER_SUBTLE;
        var9['borderColor'] = var12;
        var12 = var6[var10];
        var12 = var11.bind(var1)(var12);
        var12 = var12.colors;
        var12 = var12.BACKGROUND_SURFACE_HIGH;
        var9['backgroundColor'] = var12;
        var4['animatedContainer'] = var9;
        var9 = {'opacity': 0, 'position': 'absolute'};
        var4['measurement'] = var9;
        var13 = 'center';
        var9 = {'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center', 'padding': 12};
        var4['container'] = var9;
        var9 = {};
        var12 = var6[var10];
        var12 = var11.bind(var1)(var12);
        var12 = var12.colors;
        var12 = var12.BACKGROUND_SURFACE_HIGH;
        var9['backgroundColor'] = var12;
        var4['highlight'] = var9;
        var9 = {'marginHorizontal': 12, 'flex': 1};
        var4['text'] = var9;
        var9 = {'borderWidth': 2, 'borderColor': null, 'backgroundColor': null, 'borderRadius': null, 'flexDirection': 'row', 'gap': 8, 'alignItems': 'center', 'justifyContent': 'center', 'padding': 12};
        var12 = var6[var10];
        var12 = var11.bind(var1)(var12);
        var12 = var12.colors;
        var12 = var12.BORDER_STRONG;
        var9['borderColor'] = var12;
        var12 = var6[var10];
        var12 = var11.bind(var1)(var12);
        var12 = var12.colors;
        var12 = var12.CARD_BACKGROUND_DEFAULT;
        var9['backgroundColor'] = var12;
        var12 = var6[var10];
        var12 = var11.bind(var1)(var12);
        var12 = var12.radii;
        var12 = var12.md;
        var9['borderRadius'] = var12;
        var4['emojiContainer'] = var9;
        var15 = 28;
        var9 = {'width': 28, 'height': 28};
        var4['emoji'] = var9;
        var9 = {};
        var12 = 9;
        var14 = var6[var12];
        var16 = var5.bind(var1)(var14);
        var14 = var16.isIOS;
        var16 = var14.bind(var16)();
        var14 = 22;
        if(!var16) { _fun0001_ip = 19; continue _fun0001 }
case 20:
        var14 = var15;
case 19:
        var9['fontSize'] = var14;
        var9['textAlign'] = var13;
        var12 = var6[var12];
        var13 = var5.bind(var1)(var12);
        var12 = var13.isIOS;
        var13 = var12.bind(var13)();
        var12 = undefined;
        if(!var13) { _fun0001_ip = 21; continue _fun0001 }
case 22:
        var12 = 32;
case 21:
        var9['lineHeight'] = var12;
        var10 = var6[var10];
        var10 = var11.bind(var1)(var10);
        var10 = var10.colors;
        var10 = var10.INTERACTIVE_TEXT_DEFAULT;
        var9['color'] = var10;
        var4['textEmoji'] = var9;
        var9 = {'flexDirection': 'row', 'alignItems': 'center', 'gap': 6};
        var4['header'] = var9;
        var9 = {};
        var10 = 'flex-start';
        var9['alignSelf'] = var10;
        var4['closeButton'] = var9;
        var4 = var7.bind(var8)(var4);
        var _closure1_slot13 = var4;
        var4 = {};
        var7 = 'function DoubleTapToReactChatInputBannerTsx1(){const{useReducedMotion,height,withDelay,withTiming,DECELERATED_EASING}=this.__closure;if(useReducedMotion){return{height:height.get()};}return{height:withDelay(200,withTiming(height.get(),{duration:300,easing:DECELERATED_EASING}))};}';
        var4['code'] = var7;
        var _closure1_slot14 = var4;
        var4 = 34;
        var4 = var6[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.fileFinishedImporting;
        var4 = 'modules/double_tap_to_react/native/DoubleTapToReactChatInputBanner.tsx';
        var4 = var5.bind(var6)(var4);
        var2 = function DoubleTapToReactChatInputBanner(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var1 = arg1;
                var5 = var1.channel;
                var _closure2_slot0 = var5;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 29;
                var1 = var3[var1];
                var6 = undefined;
                var1 = var2.bind(var6)(var1);
                var2 = var1.DoubleTapReactionEmoji;
                var1 = var2.useSetting;
                var1 = var1.bind(var2)();
                var _closure2_slot1 = var1;
                var4 = _closure1_slot4;
                var3 = var4.useMemo;
                var2 = new Array(2);
                var2[0] = var5;
                var2[1] = var1;
                var1 = function() {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                        var1 = _closure2_slot1;
                        var6 = var1.emojiId;
                        var7 = var1.emojiName;
                        var2 = var1.disableDoubleTap;
                        var1 = true;
                        var1 = var1 !== var2;
                        if(!var1) { _fun0007_ip = 23; continue _fun0007 }
case 24:
                        var5 = null;
                        var3 = var5 != var6;
                        if(!var3) { _fun0007_ip = 25; continue _fun0007 }
case 26:
                        var2 = '0';
                        var3 = var2 !== var6;
case 25:
                        if(var3) { _fun0007_ip = 27; continue _fun0007 }
case 28:
                        var2 = var5 != var7;
                        if(!var2) { _fun0007_ip = 29; continue _fun0007 }
case 30:
                        var6 = '';
                        var2 = var6 !== var7;
case 29:
                        var3 = var2;
case 27:
                        var2 = !var3;
                        if(var3) { _fun0007_ip = 31; continue _fun0007 }
case 32:
                        var3 = _closure2_slot0;
                        var3 = var3.lastMessageId;
                        var3 = var5 != var3;
                        if(!var3) { _fun0007_ip = 33; continue _fun0007 }
case 34:
                        var7 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var5 = 30;
                        var5 = var6[var5];
                        var6 = undefined;
                        var5 = var7.bind(var6)(var5);
                        var4 = _closure2_slot0;
                        var3 = var5.bind(var6)(var4);
case 33:
                        var2 = var3;
case 31:
                        var1 = var2;
case 23:
                        return var1;
                    }
                };
                var3 = var3.bind(var4)(var1, var2);
                var5 = _closure1_slot4;
                var4 = var5.useMemo;
                var2 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 31;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.getFallbackDoubleTapDisambiguatedEmoji;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var1 = new Array(0);
                var1 = var4.bind(var5)(var2, var1);
                var _closure2_slot2 = var1;
                var2 = null;
                var4 = var2 == var1;
                var1 = null;
                if(var4) { _fun0006_ip = 35; continue _fun0006 }
case 31:
                var2 = null;
                if(!var3) { _fun0006_ip = 36; continue _fun0006 }
case 37:
                var5 = _closure1_slot9;
                var4 = _closure1_slot1;
                var10 = _closure1_slot2;
                var3 = 32;
                var3 = var10[var3];
                var4 = var4.bind(var6)(var3);
                var3 = {};
                var9 = _closure1_slot0;
                var8 = 33;
                var8 = var10[var8];
                var8 = var9.bind(var6)(var8);
                var8 = var8.DismissibleContent;
                var9 = var8.DOUBLE_TAP_TO_REACT_EXPANDED_UPSELL;
                var8 = new Array(1);
                var8[0] = var9;
                var3['contentTypes'] = var8;
                var8 = true;
                var3['bypassAutoDismiss'] = var8;
                var7 = function children(arg1) {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                        var1 = arg1;
                        var4 = var1.visibleContent;
                        var6 = var1.markAsDismissed;
                        var3 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var1 = 33;
                        var1 = var5[var1];
                        var5 = undefined;
                        var1 = var3.bind(var5)(var1);
                        var1 = var1.DismissibleContent;
                        var3 = var1.DOUBLE_TAP_TO_REACT_EXPANDED_UPSELL;
                        var1 = null;
                        if(!(var4 === var3)) { _fun0008_ip = 38; continue _fun0008 }
case 39:
                        var4 = _closure1_slot9;
                        var3 = _closure1_slot16;
                        var2 = {};
                        var8 = _closure2_slot0;
                        var2['channel'] = var8;
                        var7 = _closure2_slot2;
                        var2['emoji'] = var7;
                        var2['markAsDismissed'] = var6;
                        var1 = var4.bind(var5)(var3, var2);
case 38:
                        return var1;
                    }
                };
                var3['children'] = var7;
                var2 = var5.bind(var6)(var4, var3);
case 36:
                var1 = var2;
case 35:
                return var1;
            }
        };
        var3['DoubleTapToReactChatInputBanner'] = var2;
        return var1;
    }
})();