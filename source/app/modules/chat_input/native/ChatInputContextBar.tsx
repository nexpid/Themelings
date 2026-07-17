// app/modules/chat_input/native/ChatInputContextBar.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var7;
    var1 = function ChatInputReplyBarNoAuthor(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var13 = var1.onCancelReplying;
            var4 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 9;
            var1 = var8[var1];
            var5 = undefined;
            var3 = var4.bind(var5)(var1);
            var2 = var3.useMobileVisualRefreshConfig;
            var1 = {};
            var6 = 'ChatInputContextBar';
            var1['location'] = var6;
            var1 = var2.bind(var3)(var1);
            var1 = var1.chatInputFloating;
            var2 = _closure1_slot15;
            var16 = var2.bind(var5)();
            var3 = 10;
            var2 = var8[var3];
            var10 = var4.bind(var5)(var2);
            var9 = var10.useToken;
            var7 = _closure1_slot1;
            var2 = 8;
            var6 = var8[var2];
            var6 = var7.bind(var5)(var6);
            var6 = var6.modules;
            var6 = var6.mobile;
            var6 = var6.CHAT_INPUT_BUTTON_MIN_TOUCH_TARGET_SIZE;
            var6 = var9.bind(var10)(var6);
            var3 = var8[var3];
            var4 = var4.bind(var5)(var3);
            var3 = var4.useToken;
            var2 = var8[var2];
            var2 = var7.bind(var5)(var2);
            var2 = var2.modules;
            var2 = var2.mobile;
            var2 = var2.CHAT_INPUT_REPLY_MENTION_ICON_SIZE;
            var2 = var3.bind(var4)(var2);
            var3 = global;
            var4 = var3.Math;
            var3 = var4.max;
            var6 = var6 - var2;
            var2 = 2;
            var2 = var6 / var2;
            var14 = 0;
            var15 = var3.bind(var4)(var14, var2);
            var4 = _closure1_slot11;
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var12 = _closure1_slot0;
            var17 = _closure1_slot2;
            var1 = 13;
            var1 = var17[var1];
            var1 = var12.bind(var5)(var1);
            var2 = var1.PressableOpacity;
            var1 = {'activeOpacity': 0.5, 'accessibilityRole': 'button'};
            var9 = 12;
            var3 = var17[var9];
            var3 = var12.bind(var5)(var3);
            var7 = var3.intl;
            var6 = var7.string;
            var3 = var17[var9];
            var3 = var12.bind(var5)(var3);
            var3 = var3.t;
            var3 = var3.jSnJGT;
            var3 = var6.bind(var7)(var3);
            var1['accessibilityLabel'] = var3;
            var1['onPress'] = var13;
            var3 = var16.contextBarRow;
            var1['style'] = var3;
            var7 = _closure1_slot10;
            var6 = _closure1_slot5;
            var3 = {};
            var8 = var16.contextCancelIconWrapper;
            var3['style'] = var8;
            var11 = _closure1_slot10;
            var18 = 6;
            var8 = var17[var18];
            var8 = var12.bind(var5)(var8);
            var10 = var8.Icon;
            var8 = {};
            var21 = _closure1_slot1;
            var19 = 14;
            var19 = var17[var19];
            var19 = var21.bind(var5)(var19);
            var8['source'] = var19;
            var18 = var17[var18];
            var18 = var12.bind(var5)(var18);
            var18 = var18.Icon;
            var18 = var18.Sizes;
            var18 = var18.SMALL_20;
            var8['size'] = var18;
            var8 = var11.bind(var5)(var10, var8);
            var3['children'] = var8;
            var6 = var7.bind(var5)(var6, var3);
            var3 = new Array(2);
            var3[0] = var6;
            var8 = _closure1_slot10;
            var6 = 11;
            var6 = var17[var6];
            var6 = var12.bind(var5)(var6);
            var7 = var6.Text;
            var6 = {'lineClamp': 1, 'variant': 'text-sm/medium', 'color': 'text-default'};
            var10 = var16.contextButtonText;
            var6['style'] = var10;
            var10 = var17[var9];
            var10 = var12.bind(var5)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var9 = var17[var9];
            var9 = var12.bind(var5)(var9);
            var9 = var9.t;
            var9 = var9["5IEsGx"];
            var9 = var10.bind(var11)(var9);
            var6['children'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var3[1] = var6;
            var1['children'] = var3;
            var1 = var4.bind(var5)(var2, var1);
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var3 = _closure1_slot5;
            var2 = {};
            var6 = var16.contextBarRow;
            var2['style'] = var6;
            var8 = _closure1_slot10;
            var21 = _closure1_slot0;
            var22 = _closure1_slot2;
            var6 = 11;
            var6 = var22[var6];
            var6 = var21.bind(var5)(var6);
            var7 = var6.Text;
            var6 = {'lineClamp': 1, 'variant': 'text-sm/normal', 'color': 'text-strong'};
            var9 = var16.floatingReplyTextWrapper;
            var6['style'] = var9;
            var17 = 12;
            var9 = var22[var17];
            var9 = var21.bind(var5)(var9);
            var11 = var9.intl;
            var10 = var11.string;
            var9 = var22[var17];
            var9 = var21.bind(var5)(var9);
            var9 = var9.t;
            var9 = var9["5IEsGx"];
            var9 = var10.bind(var11)(var9);
            var6['children'] = var9;
            var7 = var8.bind(var5)(var7, var6);
            var6 = new Array(2);
            var6[0] = var7;
            var9 = _closure1_slot10;
            var8 = _closure1_slot5;
            var7 = {};
            var10 = var16.floatingRightActions;
            var7['style'] = var10;
            var12 = _closure1_slot10;
            var10 = 13;
            var10 = var22[var10];
            var10 = var21.bind(var5)(var10);
            var11 = var10.PressableOpacity;
            var10 = {'activeOpacity': 0.5, 'accessibilityRole': 'button'};
            var18 = var22[var17];
            var18 = var21.bind(var5)(var18);
            var19 = var18.intl;
            var18 = var19.string;
            var17 = var22[var17];
            var17 = var21.bind(var5)(var17);
            var17 = var17.t;
            var17 = var17.jSnJGT;
            var17 = var18.bind(var19)(var17);
            var10['accessibilityLabel'] = var17;
            var17 = var15 > var14;
            var14 = undefined;
            if(!var17) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var14 = var15;
case 5:
            var10['hitSlop'] = var14;
            var10['onPress'] = var13;
            var15 = _closure1_slot10;
            var18 = _closure1_slot0;
            var19 = _closure1_slot2;
            var17 = 6;
            var13 = var19[var17];
            var13 = var18.bind(var5)(var13);
            var14 = var13.Icon;
            var13 = {};
            var21 = _closure1_slot1;
            var20 = 14;
            var20 = var19[var20];
            var20 = var21.bind(var5)(var20);
            var13['source'] = var20;
            var17 = var19[var17];
            var17 = var18.bind(var5)(var17);
            var17 = var17.Icon;
            var17 = var17.Sizes;
            var17 = var17.CUSTOM;
            var13['size'] = var17;
            var16 = var16.floatingCloseIcon;
            var13['style'] = var16;
            var13 = var15.bind(var5)(var14, var13);
            var10['children'] = var13;
            var10 = var12.bind(var5)(var11, var10);
            var7['children'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 4:
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var2 = function ChatInputReplyBar(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var1 = var2.pendingReply;
            var _closure2_slot0 = var1;
            var19 = var2.pendingReplyAuthor;
            var9 = var2.onTapContextBarReply;
            var13 = var2.onCancelReplying;
            var12 = var2.onToggleReplyMention;
            var2 = var2.chatInputFloatingOverride;
            var4 = undefined;
            var _closure2_slot1 = var4;
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var _closure2_slot8 = var4;
            var _closure2_slot9 = var4;
            var14 = function replyText(arg1) {
                var1 = 'text-sm/semibold';
                var _closure3_slot0 = var1;
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 12;
                var3 = var7[var1];
                var2 = undefined;
                var3 = var6.bind(var2)(var3);
                var4 = var3.intl;
                var3 = var4.format;
                var1 = var7[var1];
                var1 = var6.bind(var2)(var1);
                var1 = var1.t;
                var2 = var1["8E4GxS"];
                var1 = {};
                var5 = function userHook(arg1, arg2) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var10 = arg2;
                        var2 = _closure2_slot1;
                        var1 = 'dot';
                        if(!(var1 === var2)) { _fun0003_ip = 7; continue _fun0003 }
case 8:
                        var1 = _closure2_slot2;
                        var13 = null;
                        if(!(var13 == var1)) { _fun0003_ip = 9; continue _fun0003 }
case 7:
                        var5 = _closure1_slot10;
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var1 = 11;
                        var1 = var7[var1];
                        var4 = undefined;
                        var1 = var6.bind(var4)(var1);
                        var3 = var1.Text;
                        var2 = {};
                        var1 = _closure3_slot0;
                        var2['variant'] = var1;
                        var1 = 20;
                        var1 = var7[var1];
                        var6 = var6.bind(var4)(var1);
                        var1 = var6.isFabric;
                        var1 = var1.bind(var6)();
                        var1 = !var1;
                        var2['experimental_useNativeText'] = var1;
                        var6 = _closure2_slot6;
                        var1 = new Array(2);
                        var1[0] = var6;
                        var7 = _closure2_slot7;
                        var6 = null;
                        var6 = var6 != var7;
                        if(!var6) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                        var7 = {};
                        var8 = _closure2_slot7;
                        var7['fontFamily'] = var8;
                        var6 = var7;
case 10:
                        var1[1] = var6;
                        var2['style'] = var1;
                        var6 = _closure2_slot9;
                        var1 = undefined;
                        if(!var6) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                        var1 = _closure2_slot8;
case 12:
                        var2['gradientColors'] = var1;
                        var1 = _closure2_slot4;
                        var2['children'] = var1;
                        var1 = _closure2_slot0;
                        var1 = var1.message;
                        var1 = var1.author;
                        var8 = var1.id;
                        var1 = global;
                        var1 = var1.HermesInternal;
                        var7 = var1.concat;
                        var6 = '';
                        var1 = '-';
                        var1 = var7.bind(var6)(var10, var1, var8);
                        var1 = var5.bind(var4)(var3, var2, var1);
                        _fun0003_ip = 14; continue _fun0003;
case 9:
                        var5 = _closure1_slot11;
                        var4 = _closure1_slot12;
                        var3 = {};
                        var14 = _closure1_slot10;
                        var8 = _closure1_slot0;
                        var12 = _closure1_slot2;
                        var2 = 6;
                        var6 = var12[var2];
                        var2 = undefined;
                        var6 = var8.bind(var2)(var6);
                        var9 = var6.RoleDot;
                        var6 = {};
                        var15 = _closure2_slot2;
                        var6['color'] = var15;
                        var15 = _closure2_slot3;
                        var6['colors'] = var15;
                        var15 = _closure2_slot5;
                        var6['guildId'] = var15;
                        var15 = 'small';
                        var6['size'] = var15;
                        var9 = var14.bind(var2)(var9, var6);
                        var6 = new Array(2);
                        var6[0] = var9;
                        var9 = _closure1_slot10;
                        var7 = 11;
                        var7 = var12[var7];
                        var7 = var8.bind(var2)(var7);
                        var8 = var7.Text;
                        var7 = {};
                        var12 = _closure3_slot0;
                        var7['variant'] = var12;
                        var12 = _closure2_slot7;
                        var13 = var13 != var12;
                        var12 = undefined;
                        if(!var13) { _fun0003_ip = 15; continue _fun0003 }
case 16:
                        var13 = {};
                        var14 = _closure2_slot7;
                        var13['fontFamily'] = var14;
                        var12 = var13;
case 15:
                        var7['style'] = var12;
                        var11 = _closure2_slot4;
                        var7['children'] = var11;
                        var7 = var9.bind(var2)(var8, var7, var10);
                        var6[1] = var7;
                        var3['children'] = var6;
                        var1 = var5.bind(var2)(var4, var3);
case 14:
                        return var1;
                    }
                };
                var1['userHook'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var5 = 9;
            var5 = var8[var5];
            var8 = var6.bind(var4)(var5);
            var6 = var8.useMobileVisualRefreshConfig;
            var5 = {};
            var10 = 'ChatInputContextBar';
            var5['location'] = var10;
            var5 = var6.bind(var8)(var5);
            var8 = var5.chatInputFloating;
            if(var8) { _fun0002_ip = 17; continue _fun0002 }
case 18:
            var8 = var2;
case 17:
            var2 = _closure1_slot15;
            var10 = var2.bind(var4)();
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var15 = 10;
            var2 = var6[var15];
            var18 = var5.bind(var4)(var2);
            var17 = var18.useToken;
            var11 = _closure1_slot1;
            var2 = 8;
            var16 = var6[var2];
            var16 = var11.bind(var4)(var16);
            var16 = var16.modules;
            var16 = var16.mobile;
            var16 = var16.CHAT_INPUT_BUTTON_MIN_TOUCH_TARGET_SIZE;
            var17 = var17.bind(var18)(var16);
            var15 = var6[var15];
            var16 = var5.bind(var4)(var15);
            var15 = var16.useToken;
            var2 = var6[var2];
            var2 = var11.bind(var4)(var2);
            var2 = var2.modules;
            var2 = var2.mobile;
            var2 = var2.CHAT_INPUT_REPLY_MENTION_ICON_SIZE;
            var2 = var15.bind(var16)(var2);
            var15 = global;
            var16 = var15.Math;
            var15 = var16.max;
            var17 = var17 - var2;
            var2 = 2;
            var2 = var17 / var2;
            var18 = 0;
            var17 = var15.bind(var16)(var18, var2);
            var2 = 15;
            var2 = var6[var2];
            var20 = var5.bind(var4)(var2);
            var16 = var20.useStateFromStores;
            var2 = _closure1_slot6;
            var15 = new Array(1);
            var15[0] = var2;
            var2 = function() {
                var1 = _closure1_slot6;
                var1 = var1.roleStyle;
                return var1;
            };
            var20 = var16.bind(var20)(var15, var2);
            _closure2_slot1 = var20;
            var2 = 16;
            var2 = var6[var2];
            var16 = var5.bind(var4)(var2);
            var15 = var16.useCheckboxA11yNative;
            var2 = {};
            var21 = var1.shouldMention;
            var2['checked'] = var21;
            var2 = var15.bind(var16)(var2);
            var16 = var2.accessibilityRole;
            var15 = var2.accessibilityState;
            var2 = var19.colorString;
            _closure2_slot2 = var2;
            var22 = var19.colorStrings;
            _closure2_slot3 = var22;
            var25 = var19.nick;
            _closure2_slot4 = var25;
            var19 = var19.guildId;
            _closure2_slot5 = var19;
            var24 = _closure1_slot3;
            var23 = var24.useMemo;
            var21 = new Array(2);
            var21[0] = var2;
            var21[1] = var20;
            var2 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var5 = _closure2_slot1;
                    var3 = 'hidden';
                    var1 = undefined;
                    if(!(var3 !== var5)) { _fun0004_ip = 19; continue _fun0004 }
case 20:
                    var5 = _closure2_slot2;
                    var3 = null;
                    var3 = var3 != var5;
                    var1 = undefined;
                    if(!var3) { _fun0004_ip = 19; continue _fun0004 }
case 21:
                    var3 = {};
                    var2 = _closure2_slot2;
                    var3['color'] = var2;
                    var2 = new Array(1);
                    var2[0] = var3;
                    var1 = var2;
case 19:
                    return var1;
                }
            };
            var2 = var23.bind(var24)(var2, var21);
            _closure2_slot6 = var2;
            var2 = 17;
            var2 = var6[var2];
            var11 = var11.bind(var4)(var2);
            var2 = {};
            var21 = var1.message;
            var21 = var21.author;
            var21 = var21.id;
            var2['userId'] = var21;
            var2['guildId'] = var19;
            var23 = var11.bind(var4)(var2);
            var2 = 18;
            var2 = var6[var2];
            var21 = var5.bind(var4)(var2);
            var11 = var21.useDisplayNameStylesFont;
            var2 = {};
            var2['displayNameStyles'] = var23;
            var2 = var11.bind(var21)(var2);
            _closure2_slot7 = var2;
            var2 = 19;
            var11 = var6[var2];
            var21 = var5.bind(var4)(var11);
            var11 = var21.useProcessColorStringsArray;
            var11 = var11.bind(var21)(var22);
            _closure2_slot8 = var11;
            var2 = var6[var2];
            var6 = var5.bind(var4)(var2);
            var5 = var6.useIsRoleStyleAndRoleColorsEligibleForERC;
            var2 = var1.message;
            var2 = var2.author;
            var28 = var2.id;
            var30 = var6;
            var29 = var19;
            var27 = var20;
            var26 = var11;
            var2 = var30[var5](var29, var28, var27, var26, var25);
            _closure2_slot9 = var2;
            var2 = null;
            if(!(var2 != var9)) { _fun0002_ip = 22; continue _fun0002 }
case 23:
            var6 = _closure1_slot10;
            var5 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = 13;
            var3 = var11[var3];
            var3 = var5.bind(var4)(var3);
            var5 = var3.PressableOpacity;
            var3 = {};
            if(var8) { _fun0002_ip = 24; continue _fun0002 }
case 25:
            var11 = var10.contextButtonText;
            _fun0002_ip = 26; continue _fun0002;
case 24:
            var11 = var10.floatingReplyTextWrapper;
case 26:
            var3['style'] = var11;
            var11 = 'link';
            var3['accessibilityRole'] = var11;
            var11 = _closure1_slot0;
            var20 = _closure1_slot2;
            var19 = 12;
            var21 = var20[var19];
            var21 = var11.bind(var4)(var21);
            var24 = var21.intl;
            var23 = var24.formatToPlainString;
            var21 = var20[var19];
            var21 = var11.bind(var4)(var21);
            var21 = var21.t;
            var22 = var21.EpJL4E;
            var21 = {};
            var21['username'] = var25;
            var21 = var23.bind(var24)(var22, var21);
            var3['accessibilityLabel'] = var21;
            var21 = var20[var19];
            var21 = var11.bind(var4)(var21);
            var22 = var21.intl;
            var21 = var22.string;
            var19 = var20[var19];
            var19 = var11.bind(var4)(var19);
            var19 = var19.t;
            var19 = var19["0CfCVW"];
            var19 = var21.bind(var22)(var19);
            var3['accessibilityHint'] = var19;
            var19 = 0.5;
            var3['activeOpacity'] = var19;
            var3['onPress'] = var9;
            var19 = _closure1_slot10;
            var9 = 11;
            var9 = var20[var9];
            var9 = var11.bind(var4)(var9);
            var11 = var9.Text;
            var9 = {};
            var20 = 1;
            var9['lineClamp'] = var20;
            var20 = 'text-sm/medium';
            if(!var8) { _fun0002_ip = 27; continue _fun0002 }
case 28:
            var20 = 'text-sm/normal';
case 27:
            var9['variant'] = var20;
            var20 = 'text-default';
            if(!var8) { _fun0002_ip = 29; continue _fun0002 }
case 30:
            var20 = 'text-strong';
case 29:
            var9['color'] = var20;
            var20 = 'text-sm/semibold';
            var20 = var14.bind(var4)(var20);
            var9['children'] = var20;
            var9 = var19.bind(var4)(var11, var9);
            var3['children'] = var9;
            var6 = var6.bind(var4)(var5, var3);
            _fun0002_ip = 31; continue _fun0002;
case 22:
            var9 = _closure1_slot10;
            var5 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = 11;
            var3 = var11[var3];
            var3 = var5.bind(var4)(var3);
            var5 = var3.Text;
            var3 = {};
            var11 = 1;
            var3['lineClamp'] = var11;
            var11 = 'text-sm/medium';
            if(!var8) { _fun0002_ip = 32; continue _fun0002 }
case 33:
            var11 = 'text-sm/normal';
case 32:
            var3['variant'] = var11;
            var11 = 'text-default';
            if(!var8) { _fun0002_ip = 34; continue _fun0002 }
case 35:
            var11 = 'text-strong';
case 34:
            var3['color'] = var11;
            var11 = 'text-sm/semibold';
            var11 = var14.bind(var4)(var11);
            var3['children'] = var11;
            var6 = var9.bind(var4)(var5, var3);
case 31:
            var3 = var2 != var13;
            var11 = null;
            if(!var3) { _fun0002_ip = 36; continue _fun0002 }
case 37:
            var9 = _closure1_slot10;
            var21 = _closure1_slot0;
            var22 = _closure1_slot2;
            var3 = 13;
            var3 = var22[var3];
            var3 = var21.bind(var4)(var3);
            var5 = var3.PressableOpacity;
            var3 = {'accessibilityRole': 'button', 'accessibilityLabel': null, 'activeOpacity': 0.5};
            var14 = 12;
            var19 = var22[var14];
            var19 = var21.bind(var4)(var19);
            var20 = var19.intl;
            var19 = var20.string;
            var14 = var22[var14];
            var14 = var21.bind(var4)(var14);
            var14 = var14.t;
            var14 = var14.jSnJGT;
            var14 = var19.bind(var20)(var14);
            var3['accessibilityLabel'] = var14;
            var14 = undefined;
            if(!var8) { _fun0002_ip = 38; continue _fun0002 }
case 39:
            var18 = var17 > var18;
            var14 = undefined;
            if(!var18) { _fun0002_ip = 38; continue _fun0002 }
case 40:
            var14 = var17;
case 38:
            var3['hitSlop'] = var14;
            var14 = undefined;
            if(var8) { _fun0002_ip = 41; continue _fun0002 }
case 42:
            var14 = var10.contextCancelIconWrapper;
case 41:
            var3['style'] = var14;
            var3['onPress'] = var13;
            var17 = _closure1_slot10;
            var14 = _closure1_slot0;
            var21 = _closure1_slot2;
            var20 = 6;
            var13 = var21[var20];
            var13 = var14.bind(var4)(var13);
            var14 = var13.Icon;
            var13 = {};
            var19 = _closure1_slot1;
            var18 = 14;
            var18 = var21[var18];
            var18 = var19.bind(var4)(var18);
            var13['source'] = var18;
            var19 = _closure1_slot0;
            var18 = _closure1_slot2;
            var18 = var18[var20];
            var18 = var19.bind(var4)(var18);
            var18 = var18.Icon;
            var19 = var18.Sizes;
            if(var8) { _fun0002_ip = 43; continue _fun0002 }
case 44:
            var18 = var19.SMALL_20;
            _fun0002_ip = 45; continue _fun0002;
case 43:
            var18 = var19.CUSTOM;
case 45:
            var13['size'] = var18;
            var18 = undefined;
            if(!var8) { _fun0002_ip = 46; continue _fun0002 }
case 47:
            var18 = var10.floatingCloseIcon;
case 46:
            var13['style'] = var18;
            var13 = var17.bind(var4)(var14, var13);
            var3['children'] = var13;
            var11 = var9.bind(var4)(var5, var3);
case 36:
            var3 = var2 != var1;
            var13 = null;
            if(!var3) { _fun0002_ip = 48; continue _fun0002 }
case 49:
            var3 = var1.showMentionToggle;
            var13 = null;
            if(!var3) { _fun0002_ip = 48; continue _fun0002 }
case 50:
            var9 = _closure1_slot11;
            var17 = _closure1_slot0;
            var14 = _closure1_slot2;
            var3 = 13;
            var3 = var14[var3];
            var3 = var17.bind(var4)(var3);
            var5 = var3.PressableOpacity;
            var3 = {};
            var3['accessibilityRole'] = var16;
            var3['accessibilityState'] = var15;
            var22 = 12;
            var15 = var14[var22];
            var15 = var17.bind(var4)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var14 = var14[var22];
            var14 = var17.bind(var4)(var14);
            var14 = var14.t;
            var14 = var14.P8tvKG;
            var14 = var15.bind(var16)(var14);
            var3['accessibilityLabel'] = var14;
            var14 = var1.shouldMention;
            var18 = _closure1_slot0;
            var15 = _closure1_slot2;
            var16 = var15[var22];
            var16 = var18.bind(var4)(var16);
            var17 = var16.intl;
            var16 = var17.string;
            var15 = var15[var22];
            var15 = var18.bind(var4)(var15);
            var15 = var15.t;
            if(var14) { _fun0002_ip = 51; continue _fun0002 }
case 52:
            var14 = var15["+LXBxU"];
            var14 = var16.bind(var17)(var14);
            _fun0002_ip = 53; continue _fun0002;
case 51:
            var15 = var15.PBgTSF;
            var14 = var16.bind(var17)(var15);
case 53:
            var3['accessibilityHint'] = var14;
            var14 = 0.5;
            var3['activeOpacity'] = var14;
            var3['onPress'] = var12;
            if(var8) { _fun0002_ip = 54; continue _fun0002 }
case 55:
            var12 = var10.replyMentionButton;
            _fun0002_ip = 56; continue _fun0002;
case 54:
            var12 = var10.floatingMentionGroup;
case 56:
            var3['style'] = var12;
            var15 = _closure1_slot10;
            var17 = _closure1_slot0;
            var18 = _closure1_slot2;
            var16 = 6;
            var12 = var18[var16];
            var12 = var17.bind(var4)(var12);
            var14 = var12.Icon;
            var12 = {};
            var20 = _closure1_slot1;
            var19 = 21;
            var19 = var18[var19];
            var19 = var20.bind(var4)(var19);
            var12['source'] = var19;
            var16 = var18[var16];
            var16 = var17.bind(var4)(var16);
            var16 = var16.Icon;
            var16 = var16.Sizes;
            var16 = var16.CUSTOM;
            var12['size'] = var16;
            var17 = var10.replyMentionIcon;
            var16 = new Array(2);
            var16[0] = var17;
            var17 = var1.shouldMention;
            if(!var17) { _fun0002_ip = 57; continue _fun0002 }
case 58:
            var17 = var10.replyMentionIconActive;
case 57:
            var16[1] = var17;
            var12['style'] = var16;
            var14 = var15.bind(var4)(var14, var12);
            var12 = new Array(2);
            var12[0] = var14;
            var16 = _closure1_slot10;
            var15 = _closure1_slot0;
            var17 = _closure1_slot2;
            var14 = 11;
            var14 = var17[var14];
            var14 = var15.bind(var4)(var14);
            var15 = var14.Text;
            var14 = {};
            var17 = 'text-sm/bold';
            if(!var8) { _fun0002_ip = 59; continue _fun0002 }
case 60:
            var17 = 'text-sm/semibold';
case 59:
            var14['variant'] = var17;
            var17 = 'text-muted';
            var14['color'] = var17;
            var18 = var1.shouldMention;
            var17 = undefined;
            if(!var18) { _fun0002_ip = 61; continue _fun0002 }
case 62:
            var17 = var10.replyMentionButtonActive;
case 61:
            var14['style'] = var17;
            var17 = var1.shouldMention;
            var21 = _closure1_slot0;
            var18 = _closure1_slot2;
            var19 = var18[var22];
            var19 = var21.bind(var4)(var19);
            var20 = var19.intl;
            var19 = var20.string;
            var18 = var18[var22];
            var18 = var21.bind(var4)(var18);
            var18 = var18.t;
            if(var17) { _fun0002_ip = 63; continue _fun0002 }
case 64:
            var17 = var18.U7f3bK;
            var17 = var19.bind(var20)(var17);
            _fun0002_ip = 65; continue _fun0002;
case 63:
            var18 = var18.p9jC2r;
            var17 = var19.bind(var20)(var18);
case 65:
            var14['children'] = var17;
            var14 = var16.bind(var4)(var15, var14);
            var12[1] = var14;
            var3['children'] = var12;
            var13 = var9.bind(var4)(var5, var3);
case 48:
            var3 = var2 != var1;
            var12 = null;
            if(!var3) { _fun0002_ip = 66; continue _fun0002 }
case 67:
            var1 = var1.showMentionToggle;
            var12 = null;
            if(!var1) { _fun0002_ip = 66; continue _fun0002 }
case 68:
            var1 = var2 != var11;
            var12 = null;
            if(!var1) { _fun0002_ip = 66; continue _fun0002 }
case 69:
            var3 = _closure1_slot10;
            var2 = _closure1_slot5;
            var1 = {};
            var5 = var10.floatingDivider;
            var1['style'] = var5;
            var12 = var3.bind(var4)(var2, var1);
case 66:
            var3 = _closure1_slot11;
            var2 = _closure1_slot5;
            var1 = {};
            var5 = var10.contextBarRow;
            var1['style'] = var5;
            var9 = !var8;
            if(!var9) { _fun0002_ip = 70; continue _fun0002 }
case 71:
            var9 = var11;
case 70:
            var5 = new Array(3);
            var5[0] = var9;
            var5[1] = var6;
            var6 = var13;
            if(!var8) { _fun0002_ip = 72; continue _fun0002 }
case 73:
            var9 = _closure1_slot11;
            var8 = _closure1_slot5;
            var7 = {};
            var10 = var10.floatingRightActions;
            var7['style'] = var10;
            var10 = new Array(3);
            var10[0] = var13;
            var10[1] = var12;
            var10[2] = var11;
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 72:
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot20 = var2;
    var1 = function ChatInputEditBar(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg1;
            var6 = var1.onCancelEditing;
            var2 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 9;
            var1 = var7[var1];
            var4 = undefined;
            var5 = var2.bind(var4)(var1);
            var3 = var5.useMobileVisualRefreshConfig;
            var1 = {};
            var8 = 'ChatInputContextBar';
            var1['location'] = var8;
            var1 = var3.bind(var5)(var1);
            var5 = var1.chatInputFloating;
            var1 = _closure1_slot15;
            var14 = var1.bind(var4)();
            var3 = 10;
            var1 = var7[var3];
            var12 = var2.bind(var4)(var1);
            var9 = var12.useToken;
            var11 = _closure1_slot1;
            var1 = 8;
            var8 = var7[var1];
            var8 = var11.bind(var4)(var8);
            var8 = var8.modules;
            var8 = var8.mobile;
            var8 = var8.CHAT_INPUT_BUTTON_MIN_TOUCH_TARGET_SIZE;
            var9 = var9.bind(var12)(var8);
            var3 = var7[var3];
            var8 = var2.bind(var4)(var3);
            var3 = var8.useToken;
            var1 = var7[var1];
            var1 = var11.bind(var4)(var1);
            var1 = var1.modules;
            var1 = var1.mobile;
            var1 = var1.CHAT_INPUT_REPLY_MENTION_ICON_SIZE;
            var1 = var3.bind(var8)(var1);
            var3 = global;
            var8 = var3.Math;
            var3 = var8.max;
            var9 = var9 - var1;
            var1 = 2;
            var1 = var9 / var1;
            var9 = 0;
            var8 = var3.bind(var8)(var9, var1);
            var3 = _closure1_slot10;
            var1 = 11;
            var1 = var7[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.Text;
            var1 = {};
            var7 = 1;
            var1['lineClamp'] = var7;
            var7 = 'text-sm/medium';
            if(!var5) { _fun0005_ip = 74; continue _fun0005 }
case 75:
            var7 = 'text-sm/normal';
case 74:
            var1['variant'] = var7;
            var7 = 'text-default';
            if(!var5) { _fun0005_ip = 76; continue _fun0005 }
case 77:
            var7 = 'text-strong';
case 76:
            var1['color'] = var7;
            if(var5) { _fun0005_ip = 78; continue _fun0005 }
case 79:
            var7 = var14.contextButtonText;
            _fun0005_ip = 80; continue _fun0005;
case 78:
            var7 = var14.floatingReplyTextWrapper;
case 80:
            var1['style'] = var7;
            var15 = _closure1_slot0;
            var16 = _closure1_slot2;
            var7 = 12;
            var11 = var16[var7];
            var11 = var15.bind(var4)(var11);
            var13 = var11.intl;
            var12 = var13.string;
            var11 = var16[var7];
            var11 = var15.bind(var4)(var11);
            var11 = var11.t;
            var11 = var11.rtNXxN;
            var11 = var12.bind(var13)(var11);
            var1['children'] = var11;
            var11 = var3.bind(var4)(var2, var1);
            var3 = _closure1_slot10;
            var1 = 13;
            var1 = var16[var1];
            var1 = var15.bind(var4)(var1);
            var2 = var1.PressableOpacity;
            var1 = {'accessibilityRole': 'button', 'accessibilityLabel': null, 'activeOpacity': 0.5};
            var12 = var16[var7];
            var12 = var15.bind(var4)(var12);
            var13 = var12.intl;
            var12 = var13.string;
            var7 = var16[var7];
            var7 = var15.bind(var4)(var7);
            var7 = var7.t;
            var7 = var7.qv9j1K;
            var7 = var12.bind(var13)(var7);
            var1['accessibilityLabel'] = var7;
            var7 = undefined;
            if(!var5) { _fun0005_ip = 81; continue _fun0005 }
case 82:
            var9 = var8 > var9;
            var7 = undefined;
            if(!var9) { _fun0005_ip = 81; continue _fun0005 }
case 83:
            var7 = var8;
case 81:
            var1['hitSlop'] = var7;
            var7 = undefined;
            if(var5) { _fun0005_ip = 84; continue _fun0005 }
case 85:
            var7 = var14.contextCancelIconWrapper;
case 84:
            var1['style'] = var7;
            var1['onPress'] = var6;
            var8 = _closure1_slot10;
            var7 = _closure1_slot0;
            var15 = _closure1_slot2;
            var13 = 6;
            var6 = var15[var13];
            var6 = var7.bind(var4)(var6);
            var7 = var6.Icon;
            var6 = {};
            var12 = _closure1_slot1;
            var9 = 14;
            var9 = var15[var9];
            var9 = var12.bind(var4)(var9);
            var6['source'] = var9;
            var12 = _closure1_slot0;
            var9 = _closure1_slot2;
            var9 = var9[var13];
            var9 = var12.bind(var4)(var9);
            var9 = var9.Icon;
            var12 = var9.Sizes;
            if(var5) { _fun0005_ip = 86; continue _fun0005 }
case 87:
            var9 = var12.SMALL_20;
            _fun0005_ip = 88; continue _fun0005;
case 86:
            var9 = var12.CUSTOM;
case 88:
            var6['size'] = var9;
            var9 = undefined;
            if(!var5) { _fun0005_ip = 89; continue _fun0005 }
case 90:
            var9 = var14.floatingCloseIcon;
case 89:
            var6['style'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var1['children'] = var6;
            var13 = var3.bind(var4)(var2, var1);
            var3 = _closure1_slot10;
            var2 = _closure1_slot5;
            var1 = {};
            var6 = var14.contextBarRow;
            var1['style'] = var6;
            var7 = _closure1_slot11;
            var6 = _closure1_slot12;
            var8 = {};
            var9 = new Array(2);
            if(var5) { _fun0005_ip = 91; continue _fun0005 }
case 92:
            var9[0] = var13;
            var9[1] = var11;
            var8['children'] = var9;
            var5 = var8;
            _fun0005_ip = 93; continue _fun0005;
case 91:
            var9[0] = var11;
            var12 = _closure1_slot10;
            var11 = _closure1_slot5;
            var10 = {};
            var14 = var14.floatingRightActions;
            var10['style'] = var14;
            var10['children'] = var13;
            var10 = var12.bind(var4)(var11, var10);
            var9[1] = var10;
            var8['children'] = var9;
            var5 = var8;
case 93:
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot21 = var1;
    var1 = global;
    var10 = var1.Object;
    var8 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var10)(var3, var1, var5);
    var1 = 0;
    var8 = var7[var1];
    var5 = metroImportAll;
    var1 = undefined;
    var8 = var5.bind(var1)(var8);
    var _closure1_slot3 = var8;
    var5 = 1;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var10 = var5.StyleSheet;
    var _closure1_slot4 = var10;
    var5 = var5.View;
    var _closure1_slot5 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var9.bind(var1)(var5);
    var _closure1_slot6 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var9.bind(var1)(var5);
    var _closure1_slot7 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var9 = var5.AnalyticEvents;
    var _closure1_slot8 = var9;
    var5 = var5.Routes;
    var _closure1_slot9 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var9 = var5.jsx;
    var _closure1_slot10 = var9;
    var9 = var5.jsxs;
    var _closure1_slot11 = var9;
    var5 = var5.Fragment;
    var _closure1_slot12 = var5;
    var5 = {};
    var9 = 250;
    var5['duration'] = var9;
    var9 = 6;
    var9 = var7[var9];
    var9 = var6.bind(var1)(var9);
    var9 = var9.STANDARD_EASING;
    var5['easing'] = var9;
    var _closure1_slot13 = var5;
    var5 = 7;
    var9 = var7[var5];
    var11 = var6.bind(var1)(var9);
    var10 = var11.createStyles;
    var9 = function(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var3 = arg1;
            var1 = {};
            var2 = {};
            var4 = null;
            if(!(var4 == var3)) { _fun0006_ip = 94; continue _fun0006 }
case 95:
            var6 = _closure1_slot1;
            var5 = _closure1_slot2;
            var4 = 8;
            var5 = var5[var4];
            var4 = undefined;
            var4 = var6.bind(var4)(var5);
            var4 = var4.colors;
            var3 = var4.MOBILE_FLOATING_ACCESSORY_BACKGROUND;
case 94:
            var2['backgroundColor'] = var3;
            var1['contextBar'] = var2;
            return var1;
        }
    };
    var9 = var10.bind(var11)(var9);
    var _closure1_slot14 = var9;
    var5 = var7[var5];
    var10 = var6.bind(var1)(var5);
    var9 = var10.createStyles;
    var5 = function() {
        var1 = {};
        var2 = {'overflow': 'hidden', 'flexDirection': 'row', 'alignItems': 'center'};
        var9 = 'hidden';
        var5 = _closure1_slot1;
        var6 = _closure1_slot2;
        var3 = 8;
        var7 = var6[var3];
        var4 = undefined;
        var7 = var5.bind(var4)(var7);
        var7 = var7.modules;
        var7 = var7.mobile;
        var7 = var7.CHAT_INPUT_CONTEXT_BAR_PADDING_HORIZONTAL;
        var2['paddingHorizontal'] = var7;
        var7 = var6[var3];
        var7 = var5.bind(var4)(var7);
        var7 = var7.modules;
        var7 = var7.mobile;
        var7 = var7.CHAT_INPUT_CONTEXT_BAR_PADDING_VERTICAL;
        var2['paddingVertical'] = var7;
        var7 = var6[var3];
        var7 = var5.bind(var4)(var7);
        var7 = var7.modules;
        var7 = var7.mobile;
        var7 = var7.CHAT_INPUT_CONTEXT_BAR_GAP;
        var2['gap'] = var7;
        var1['contextBarRow'] = var2;
        var2 = {'flexShrink': 1, 'minWidth': 0};
        var1['floatingReplyTextWrapper'] = var2;
        var2 = {'paddingHorizontal': 12, 'paddingVertical': 10};
        var1['contextCancelIconWrapper'] = var2;
        var7 = 'stretch';
        var2 = {'flexGrow': 1, 'flexShrink': 1, 'justifyContent': 'center', 'alignSelf': 'stretch', 'paddingRight': 12, 'paddingVertical': 10};
        var1['contextButtonText'] = var2;
        var2 = {};
        var8 = _closure1_slot4;
        var10 = var8.hairlineWidth;
        var2['borderBottomWidth'] = var10;
        var10 = var6[var3];
        var10 = var5.bind(var4)(var10);
        var10 = var10.colors;
        var10 = var10.BORDER_MUTED;
        var2['borderBottomColor'] = var10;
        var2['overflow'] = var9;
        var1['floatingContextBar'] = var2;
        var2 = {'flexDirection': 'row', 'alignItems': 'center', 'paddingHorizontal': 12, 'paddingVertical': 10};
        var1['replyMentionButton'] = var2;
        var2 = {};
        var9 = var6[var3];
        var9 = var5.bind(var4)(var9);
        var9 = var9.colors;
        var9 = var9.CONTROL_BRAND_FOREGROUND;
        var2['color'] = var9;
        var1['replyMentionButtonActive'] = var2;
        var2 = {};
        var9 = var6[var3];
        var9 = var5.bind(var4)(var9);
        var9 = var9.modules;
        var9 = var9.mobile;
        var9 = var9.CHAT_INPUT_REPLY_MENTION_ICON_SIZE;
        var2['width'] = var9;
        var9 = var6[var3];
        var9 = var5.bind(var4)(var9);
        var9 = var9.modules;
        var9 = var9.mobile;
        var9 = var9.CHAT_INPUT_REPLY_MENTION_ICON_SIZE;
        var2['height'] = var9;
        var9 = var6[var3];
        var9 = var5.bind(var4)(var9);
        var9 = var9.colors;
        var9 = var9.TEXT_MUTED;
        var2['tintColor'] = var9;
        var9 = var6[var3];
        var9 = var5.bind(var4)(var9);
        var9 = var9.modules;
        var9 = var9.mobile;
        var9 = var9.CHAT_INPUT_REPLY_MENTION_ICON_MARGIN_RIGHT;
        var2['marginRight'] = var9;
        var1['replyMentionIcon'] = var2;
        var2 = {};
        var9 = var6[var3];
        var9 = var5.bind(var4)(var9);
        var9 = var9.colors;
        var9 = var9.CONTROL_BRAND_FOREGROUND;
        var2['tintColor'] = var9;
        var1['replyMentionIconActive'] = var2;
        var2 = {'flexGrow': 1, 'flexShrink': 0, 'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'flex-end', 'gap': 8};
        var1['floatingRightActions'] = var2;
        var2 = {'flexDirection': 'row', 'alignItems': 'center', 'gap': 2};
        var1['floatingMentionGroup'] = var2;
        var2 = {};
        var8 = var8.hairlineWidth;
        var2['width'] = var8;
        var2['alignSelf'] = var7;
        var7 = var6[var3];
        var7 = var5.bind(var4)(var7);
        var7 = var7.colors;
        var7 = var7.BORDER_SUBTLE;
        var2['backgroundColor'] = var7;
        var1['floatingDivider'] = var2;
        var2 = {};
        var7 = var6[var3];
        var7 = var5.bind(var4)(var7);
        var7 = var7.modules;
        var7 = var7.mobile;
        var7 = var7.CHAT_INPUT_REPLY_MENTION_ICON_SIZE;
        var2['width'] = var7;
        var7 = var6[var3];
        var7 = var5.bind(var4)(var7);
        var7 = var7.modules;
        var7 = var7.mobile;
        var7 = var7.CHAT_INPUT_REPLY_MENTION_ICON_SIZE;
        var2['height'] = var7;
        var3 = var6[var3];
        var3 = var5.bind(var4)(var3);
        var3 = var3.colors;
        var3 = var3.INTERACTIVE_ICON_DEFAULT;
        var2['tintColor'] = var3;
        var1['floatingCloseIcon'] = var2;
        return var1;
    };
    var5 = var9.bind(var10)(var5);
    var _closure1_slot15 = var5;
    var5 = {};
    var9 = 'function ChatInputContextBarTsx1(){const{stylesBackgroundColor,chatInputFloating,heightSv}=this.__closure;return{backgroundColor:stylesBackgroundColor,...(chatInputFloating?{maxHeight:heightSv.get()}:{height:heightSv.get()})};}';
    var5['code'] = var9;
    var _closure1_slot16 = var5;
    var5 = {};
    var9 = 'function ChatInputContextBarTsx2(finished){const{runOnJS,handleTransitionFinished}=this.__closure;if(finished){runOnJS(handleTransitionFinished)();}}';
    var5['code'] = var9;
    var _closure1_slot17 = var5;
    var9 = var8.forwardRef;
    var5 = function(arg1, arg2) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var1 = arg1;
            var5 = var1.children;
            var4 = undefined;
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 22;
            var6 = var8[var1];
            var9 = var7.bind(var4)(var6);
            var6 = var9.useGradientValue;
            var1 = var8[var1];
            var1 = var7.bind(var4)(var1);
            var1 = var1.GradientPercentage;
            var1 = var1.END;
            var6 = var6.bind(var9)(var1);
            var1 = 9;
            var1 = var8[var1];
            var8 = var7.bind(var4)(var1);
            var7 = var8.useMobileVisualRefreshConfig;
            var1 = {};
            var9 = 'ChatInputContextBar';
            var1['location'] = var9;
            var1 = var7.bind(var8)(var1);
            var7 = var1.chatInputFloating;
            var _closure2_slot0 = var7;
            var1 = _closure1_slot14;
            var1 = var1.bind(var4)(var6);
            var1 = var1.contextBar;
            var14 = var1.backgroundColor;
            var _closure2_slot1 = var14;
            var1 = _closure1_slot15;
            var8 = var1.bind(var4)();
            var1 = 40;
            if(!var7) { _fun0007_ip = 96; continue _fun0007 }
case 97:
            var1 = 60;
case 96:
            _closure2_slot2 = var1;
            var10 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 23;
            var9 = var6[var1];
            var12 = var10.bind(var4)(var9);
            var11 = var12.useSharedValue;
            var9 = 0;
            var13 = var11.bind(var12)(var9);
            _closure2_slot3 = var13;
            var9 = var6[var1];
            var11 = var10.bind(var4)(var9);
            var10 = var11.useAnimatedStyle;
            var9 = function o() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var1 = {};
                    var2 = _closure2_slot1;
                    var1['backgroundColor'] = var2;
                    var2 = _closure2_slot0;
                    var3 = {};
                    var5 = _closure2_slot3;
                    var4 = var5.get;
                    var4 = var4.bind(var5)();
                    if(var2) { _fun0008_ip = 98; continue _fun0008 }
case 99:
                    var3['height'] = var4;
                    var2 = var3;
                    _fun0008_ip = 100; continue _fun0008;
case 98:
                    var3['maxHeight'] = var4;
                    var2 = var3;
case 100:
                    var7 = var1;
                    var6 = var2;
                    var2 = copyDataProperties(var7, var6);
                    return var1;
                }
            };
            var12 = {};
            var12['stylesBackgroundColor'] = var14;
            var12['chatInputFloating'] = var7;
            var12['heightSv'] = var13;
            var9['__closure'] = var12;
            var12 = 3976432455712.0;
            var9['__workletHash'] = var12;
            var12 = _closure1_slot16;
            var9['__initData'] = var12;
            var9 = var10.bind(var11)(var9);
            var12 = _closure1_slot3;
            var11 = var12.useRef;
            var10 = null;
            var10 = var11.bind(var12)(var10);
            _closure2_slot4 = var10;
            var13 = _closure1_slot3;
            var12 = var13.useCallback;
            var11 = new Array(1);
            var11[0] = var10;
            var10 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var2 = _closure2_slot4;
                    var3 = var2.current;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0009_ip = 7; continue _fun0009 }
case 8:
                    var2 = _closure2_slot4;
                    var1 = var2.current;
                    var1 = var1.bind(var2)();
case 7:
                    var1 = undefined;
                    return var1;
                }
            };
            var10 = var12.bind(var13)(var10, var11);
            _closure2_slot5 = var10;
            var12 = _closure1_slot3;
            var11 = var12.useImperativeHandle;
            var10 = arg2;
            var3 = function() {
                var1 = {};
                var3 = function componentDidAppear() {
                    var4 = _closure2_slot3;
                    var3 = var4.set;
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 24;
                    var6 = var6[var1];
                    var1 = undefined;
                    var7 = var7.bind(var1)(var6);
                    var6 = var7.withTiming;
                    var5 = _closure2_slot2;
                    var2 = _closure1_slot13;
                    var2 = var6.bind(var7)(var5, var2);
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var1['componentDidAppear'] = var3;
                var3 = function componentDidEnter() {
                    var4 = _closure2_slot3;
                    var3 = var4.set;
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 24;
                    var6 = var6[var1];
                    var1 = undefined;
                    var7 = var7.bind(var1)(var6);
                    var6 = var7.withTiming;
                    var5 = _closure2_slot2;
                    var2 = _closure1_slot13;
                    var2 = var6.bind(var7)(var5, var2);
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var1['componentDidEnter'] = var3;
                var2 = function componentWillLeave(arg1) {
                    var2 = _closure2_slot4;
                    var1 = arg1;
                    var2['current'] = var1;
                    var4 = _closure2_slot3;
                    var3 = var4.set;
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var1 = 24;
                    var5 = var13[var1];
                    var1 = undefined;
                    var9 = var12.bind(var1)(var5);
                    var8 = var9.withTiming;
                    var16 = _closure1_slot13;
                    var6 = function n(arg1) {
                        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                            var1 = arg1;
                            if(!var1) { _fun0010_ip = 100; continue _fun0010 }
case 101:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 23;
                            var1 = var2[var1];
                            var2 = undefined;
                            var4 = var3.bind(var2)(var1);
                            var3 = var4.runOnJS;
                            var1 = _closure2_slot5;
                            var1 = var3.bind(var4)(var1);
                            var1 = var1.bind(var2)();
case 100:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var5 = {};
                    var11 = 23;
                    var11 = var13[var11];
                    var11 = var12.bind(var1)(var11);
                    var11 = var11.runOnJS;
                    var5['runOnJS'] = var11;
                    var10 = _closure2_slot5;
                    var5['handleTransitionFinished'] = var10;
                    var6['__closure'] = var5;
                    var5 = 10908592279914.0;
                    var6['__workletHash'] = var5;
                    var2 = _closure1_slot17;
                    var6['__initData'] = var2;
                    var17 = 0;
                    var15 = 'respect-motion-settings';
                    var18 = var9;
                    var14 = var6;
                    var2 = var18[var8](var17, var16, var15, var14, var13);
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var1['componentWillLeave'] = var2;
                return var1;
            };
            var3 = var11.bind(var12)(var10, var3);
            var3 = _closure1_slot10;
            var2 = _closure1_slot1;
            var1 = var6[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.View;
            var1 = {};
            var6 = new Array(2);
            var6[0] = var9;
            if(!var7) { _fun0007_ip = 102; continue _fun0007 }
case 103:
            var7 = var8.floatingContextBar;
case 102:
            var6[1] = var7;
            var1['style'] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var5 = var9.bind(var8)(var5);
    var _closure1_slot18 = var5;
    var5 = var8.memo;
    var4 = function ChatInputContextBar(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var2 = arg1;
            var6 = var2.channel;
            var _closure2_slot0 = var6;
            var5 = var2.chatInputRef;
            var _closure2_slot1 = var5;
            var7 = var2.pendingEdit;
            var8 = var2.pendingReply;
            var _closure2_slot2 = var8;
            var4 = _closure1_slot3;
            var3 = var4.useMemo;
            var2 = new Array(3);
            var2[0] = var6;
            var2[1] = var5;
            var2[2] = var8;
            var1 = function() {
                var1 = {};
                var3 = function onCancelEditing() {
                    _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                        var1 = _closure2_slot1;
                        var2 = var1.current;
                        var1 = null;
                        if(!(var1 != var2)) { _fun0012_ip = 104; continue _fun0012 }
case 8:
                        var1 = var2.handleCancelEditing;
                        var1 = var1.bind(var2)();
case 104:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['onCancelEditing'] = var3;
                var3 = function onCancelReplying() {
                    _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                        var1 = _closure2_slot2;
                        var9 = null;
                        if(!(var9 != var1)) { _fun0013_ip = 105; continue _fun0013 }
case 106:
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 25;
                        var1 = var3[var1];
                        var5 = undefined;
                        var4 = var2.bind(var5)(var1);
                        var2 = var4.deletePendingReply;
                        var1 = _closure2_slot0;
                        var1 = var1.id;
                        var1 = var2.bind(var4)(var1);
                        var2 = _closure1_slot1;
                        var1 = 26;
                        var1 = var3[var1];
                        var4 = var2.bind(var5)(var1);
                        var3 = var4.track;
                        var1 = _closure1_slot8;
                        var2 = var1.CHAT_CONTEXT_BAR_ACTION_CANCELED;
                        var1 = {};
                        var8 = _closure2_slot2;
                        var10 = var9 == var8;
                        var8 = undefined;
                        if(var10) { _fun0013_ip = 107; continue _fun0013 }
case 108:
                        var10 = _closure2_slot2;
                        var10 = var10.message;
                        var8 = var10.id;
case 107:
                        var1['message_id'] = var8;
                        var8 = _closure2_slot0;
                        var10 = var8.id;
                        var1['channel_id'] = var10;
                        var8 = var8.guild_id;
                        var1['guild_id'] = var8;
                        var12 = 'reply';
                        var1['context_action'] = var12;
                        var10 = _closure1_slot0;
                        var11 = _closure1_slot2;
                        var8 = 27;
                        var8 = var11[var8];
                        var11 = var10.bind(var5)(var8);
                        var10 = var11.getContextBarCancelReason;
                        var8 = 'cancel';
                        var8 = var10.bind(var11)(var12, var8);
                        var1['reason'] = var8;
                        var8 = _closure1_slot7;
                        var6 = var8.getCurrentUser;
                        var8 = var6.bind(var8)();
                        var10 = var9 == var8;
                        var6 = undefined;
                        if(var10) { _fun0013_ip = 109; continue _fun0013 }
case 110:
                        var6 = var8.id;
case 109:
                        var8 = _closure2_slot2;
                        var8 = var9 == var8;
                        var5 = undefined;
                        if(var8) { _fun0013_ip = 111; continue _fun0013 }
case 112:
                        var7 = _closure2_slot2;
                        var7 = var7.message;
                        var7 = var7.author;
                        var5 = var7.id;
case 111:
                        var5 = var6 === var5;
                        var1['is_own_message'] = var5;
                        var1 = var3.bind(var4)(var2, var1);
case 105:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['onCancelReplying'] = var3;
                var3 = function onTapContextBarReply() {
                    _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                        var3 = _closure2_slot2;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0014_ip = 113; continue _fun0014 }
case 95:
                        var5 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var2 = 28;
                        var3 = var3[var2];
                        var2 = undefined;
                        var3 = var5.bind(var2)(var3);
                        var2 = var3.transitionTo;
                        var7 = _closure1_slot9;
                        var6 = var7.CHANNEL;
                        var1 = _closure2_slot2;
                        var5 = var1.channel;
                        var4 = var5.getGuildId;
                        var5 = var4.bind(var5)();
                        var4 = var1.channel;
                        var4 = var4.id;
                        var1 = var1.message;
                        var1 = var1.id;
                        var1 = var6.bind(var7)(var5, var4, var1);
                        var1 = var2.bind(var3)(var1);
case 113:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['onTapContextBarReply'] = var3;
                var2 = function onToggleReplyMention() {
                    _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                        var3 = _closure2_slot2;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0015_ip = 114; continue _fun0015 }
case 95:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var2 = 25;
                        var3 = var3[var2];
                        var2 = undefined;
                        var4 = var4.bind(var2)(var3);
                        var3 = var4.setPendingReplyShouldMention;
                        var1 = _closure2_slot2;
                        var2 = var1.channel;
                        var2 = var2.id;
                        var1 = var1.shouldMention;
                        var1 = !var1;
                        var1 = var3.bind(var4)(var2, var1);
case 114:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['onToggleReplyMention'] = var2;
                return var1;
            };
            var1 = var3.bind(var4)(var1, var2);
            var12 = var1.onCancelEditing;
            var16 = var1.onCancelReplying;
            var19 = var1.onTapContextBarReply;
            var18 = var1.onToggleReplyMention;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 29;
            var1 = var3[var1];
            var4 = undefined;
            var3 = var2.bind(var4)(var1);
            var2 = var3.useNullableMessageAuthor;
            var6 = null;
            var5 = var6 == var8;
            var1 = undefined;
            if(var5) { _fun0011_ip = 115; continue _fun0011 }
case 116:
            var1 = var8.message;
case 115:
            var9 = var2.bind(var3)(var1);
            var3 = _closure1_slot11;
            var2 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 30;
            var1 = var5[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.TransitionGroup;
            var1 = {};
            var5 = _closure1_slot5;
            var1['component'] = var5;
            var11 = var6 != var8;
            if(!var11) { _fun0011_ip = 117; continue _fun0011 }
case 118:
            var11 = var6 != var9;
case 117:
            if(!var11) { _fun0011_ip = 77; continue _fun0011 }
case 119:
            var14 = _closure1_slot10;
            var13 = _closure1_slot18;
            var5 = {};
            var17 = _closure1_slot20;
            var15 = {};
            var15['pendingReply'] = var8;
            var15['pendingReplyAuthor'] = var9;
            var15['onTapContextBarReply'] = var19;
            var15['onCancelReplying'] = var16;
            var15['onToggleReplyMention'] = var18;
            var15 = var14.bind(var4)(var17, var15);
            var5['children'] = var15;
            var11 = var14.bind(var4)(var13, var5);
case 77:
            var5 = new Array(3);
            var5[0] = var11;
            var8 = var6 != var8;
            if(!var8) { _fun0011_ip = 120; continue _fun0011 }
case 121:
            var8 = var6 == var9;
case 120:
            if(!var8) { _fun0011_ip = 122; continue _fun0011 }
case 123:
            var13 = _closure1_slot10;
            var11 = _closure1_slot18;
            var9 = {};
            var15 = _closure1_slot19;
            var14 = {};
            var14['onCancelReplying'] = var16;
            var14 = var13.bind(var4)(var15, var14);
            var9['children'] = var14;
            var8 = var13.bind(var4)(var11, var9);
case 122:
            var5[1] = var8;
            var6 = var6 != var7;
            if(!var6) { _fun0011_ip = 124; continue _fun0011 }
case 125:
            var9 = _closure1_slot10;
            var8 = _closure1_slot18;
            var7 = {};
            var11 = _closure1_slot21;
            var10 = {};
            var10['onCancelEditing'] = var12;
            var10 = var9.bind(var4)(var11, var10);
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 124:
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = var5.bind(var8)(var4);
    var5 = 31;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/chat_input/native/ChatInputContextBar.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['ChatInputReplyBar'] = var2;
    return var1;
})();