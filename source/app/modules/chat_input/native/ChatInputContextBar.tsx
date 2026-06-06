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
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 9;
            var1 = var3[var1];
            var5 = undefined;
            var3 = var2.bind(var5)(var1);
            var2 = var3.useMobileVisualRefreshConfig;
            var1 = {};
            var4 = 'ChatInputContextBar';
            var1['location'] = var4;
            var1 = var2.bind(var3)(var1);
            var1 = var1.chatInputFloating;
            var2 = _closure1_slot15;
            var16 = var2.bind(var5)();
            var4 = _closure1_slot11;
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var12 = _closure1_slot0;
            var14 = _closure1_slot2;
            var1 = 12;
            var1 = var14[var1];
            var1 = var12.bind(var5)(var1);
            var2 = var1.PressableOpacity;
            var1 = {'activeOpacity': 0.5, 'accessibilityRole': 'button'};
            var9 = 11;
            var3 = var14[var9];
            var3 = var12.bind(var5)(var3);
            var7 = var3.intl;
            var6 = var7.string;
            var3 = var14[var9];
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
            var15 = 6;
            var8 = var14[var15];
            var8 = var12.bind(var5)(var8);
            var10 = var8.Icon;
            var8 = {};
            var18 = _closure1_slot1;
            var17 = 13;
            var17 = var14[var17];
            var17 = var18.bind(var5)(var17);
            var8['source'] = var17;
            var15 = var14[var15];
            var15 = var12.bind(var5)(var15);
            var15 = var15.Icon;
            var15 = var15.Sizes;
            var15 = var15.SMALL_20;
            var8['size'] = var15;
            var8 = var11.bind(var5)(var10, var8);
            var3['children'] = var8;
            var6 = var7.bind(var5)(var6, var3);
            var3 = new Array(2);
            var3[0] = var6;
            var8 = _closure1_slot10;
            var6 = 10;
            var6 = var14[var6];
            var6 = var12.bind(var5)(var6);
            var7 = var6.Text;
            var6 = {'lineClamp': 1, 'variant': 'text-sm/medium', 'color': 'text-default'};
            var10 = var16.contextButtonText;
            var6['style'] = var10;
            var10 = var14[var9];
            var10 = var12.bind(var5)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var9 = var14[var9];
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
            var18 = _closure1_slot0;
            var19 = _closure1_slot2;
            var6 = 10;
            var6 = var19[var6];
            var6 = var18.bind(var5)(var6);
            var7 = var6.Text;
            var6 = {'lineClamp': 1, 'variant': 'text-sm/normal', 'color': 'text-strong'};
            var9 = var16.floatingReplyTextWrapper;
            var6['style'] = var9;
            var14 = 11;
            var9 = var19[var14];
            var9 = var18.bind(var5)(var9);
            var11 = var9.intl;
            var10 = var11.string;
            var9 = var19[var14];
            var9 = var18.bind(var5)(var9);
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
            var10 = 12;
            var10 = var19[var10];
            var10 = var18.bind(var5)(var10);
            var11 = var10.PressableOpacity;
            var10 = {'activeOpacity': 0.5, 'accessibilityRole': 'button'};
            var15 = var19[var14];
            var15 = var18.bind(var5)(var15);
            var17 = var15.intl;
            var15 = var17.string;
            var14 = var19[var14];
            var14 = var18.bind(var5)(var14);
            var14 = var14.t;
            var14 = var14.jSnJGT;
            var14 = var15.bind(var17)(var14);
            var10['accessibilityLabel'] = var14;
            var10['onPress'] = var13;
            var15 = _closure1_slot10;
            var17 = 6;
            var13 = var19[var17];
            var13 = var18.bind(var5)(var13);
            var14 = var13.Icon;
            var13 = {};
            var21 = _closure1_slot1;
            var20 = 13;
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
            var14 = var2.pendingReply;
            var _closure2_slot0 = var14;
            var12 = var2.pendingReplyAuthor;
            var6 = var2.onTapContextBarReply;
            var8 = var2.onCancelReplying;
            var5 = var2.onToggleReplyMention;
            var3 = _closure1_slot0;
            var11 = _closure1_slot2;
            var2 = 9;
            var2 = var11[var2];
            var4 = undefined;
            var9 = var3.bind(var4)(var2);
            var7 = var9.useMobileVisualRefreshConfig;
            var2 = {};
            var10 = 'ChatInputContextBar';
            var2['location'] = var10;
            var2 = var7.bind(var9)(var2);
            var7 = var2.chatInputFloating;
            var2 = _closure1_slot15;
            var16 = var2.bind(var4)();
            var2 = 14;
            var2 = var11[var2];
            var15 = var3.bind(var4)(var2);
            var10 = var15.useStateFromStores;
            var2 = _closure1_slot6;
            var9 = new Array(1);
            var9[0] = var2;
            var2 = function() {
                var1 = _closure1_slot6;
                var1 = var1.roleStyle;
                return var1;
            };
            var17 = var10.bind(var15)(var9, var2);
            var _closure2_slot1 = var17;
            var2 = 15;
            var2 = var11[var2];
            var10 = var3.bind(var4)(var2);
            var9 = var10.useCheckboxA11yNative;
            var2 = {};
            var15 = var14.shouldMention;
            var2['checked'] = var15;
            var2 = var9.bind(var10)(var2);
            var10 = var2.accessibilityRole;
            var9 = var2.accessibilityState;
            var2 = var12.colorString;
            var _closure2_slot2 = var2;
            var19 = var12.colorStrings;
            var _closure2_slot3 = var19;
            var23 = var12.nick;
            var _closure2_slot4 = var23;
            var15 = var12.guildId;
            var _closure2_slot5 = var15;
            var20 = _closure1_slot3;
            var18 = var20.useMemo;
            var12 = new Array(2);
            var12[0] = var2;
            var12[1] = var17;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var5 = _closure2_slot1;
                    var3 = 'hidden';
                    var1 = undefined;
                    if(!(var3 !== var5)) { _fun0003_ip = 5; continue _fun0003 }
case 6:
                    var5 = _closure2_slot2;
                    var3 = null;
                    var3 = var3 != var5;
                    var1 = undefined;
                    if(!var3) { _fun0003_ip = 5; continue _fun0003 }
case 7:
                    var3 = {};
                    var2 = _closure2_slot2;
                    var3['color'] = var2;
                    var2 = new Array(1);
                    var2[0] = var3;
                    var1 = var2;
case 5:
                    return var1;
                }
            };
            var2 = var18.bind(var20)(var2, var12);
            var _closure2_slot6 = var2;
            var12 = _closure1_slot1;
            var2 = 16;
            var2 = var11[var2];
            var12 = var12.bind(var4)(var2);
            var2 = {};
            var18 = var14.message;
            var18 = var18.author;
            var18 = var18.id;
            var2['userId'] = var18;
            var2['guildId'] = var15;
            var20 = var12.bind(var4)(var2);
            var2 = 17;
            var2 = var11[var2];
            var18 = var3.bind(var4)(var2);
            var12 = var18.useDisplayNameStylesFont;
            var2 = {};
            var2['displayNameStyles'] = var20;
            var2 = var12.bind(var18)(var2);
            var _closure2_slot7 = var2;
            var2 = 18;
            var12 = var11[var2];
            var18 = var3.bind(var4)(var12);
            var12 = var18.useProcessColorStringsArray;
            var12 = var12.bind(var18)(var19);
            var _closure2_slot8 = var12;
            var2 = var11[var2];
            var11 = var3.bind(var4)(var2);
            var3 = var11.useIsRoleStyleAndRoleColorsEligibleForERC;
            var2 = var14.message;
            var2 = var2.author;
            var26 = var2.id;
            var28 = var11;
            var27 = var15;
            var25 = var17;
            var24 = var12;
            var2 = var28[var3](var27, var26, var25, var24, var23);
            var _closure2_slot9 = var2;
            var15 = function replyText(arg1) {
                var1 = 'text-sm/semibold';
                var _closure3_slot0 = var1;
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 11;
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
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        var10 = arg2;
                        var2 = _closure2_slot1;
                        var1 = 'dot';
                        if(!(var1 === var2)) { _fun0004_ip = 8; continue _fun0004 }
case 9:
                        var1 = _closure2_slot2;
                        var13 = null;
                        if(!(var13 == var1)) { _fun0004_ip = 10; continue _fun0004 }
case 8:
                        var5 = _closure1_slot10;
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var1 = 10;
                        var1 = var7[var1];
                        var4 = undefined;
                        var1 = var6.bind(var4)(var1);
                        var3 = var1.Text;
                        var2 = {};
                        var1 = _closure3_slot0;
                        var2['variant'] = var1;
                        var1 = 19;
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
                        if(!var6) { _fun0004_ip = 11; continue _fun0004 }
case 12:
                        var7 = {};
                        var8 = _closure2_slot7;
                        var7['fontFamily'] = var8;
                        var6 = var7;
case 11:
                        var1[1] = var6;
                        var2['style'] = var1;
                        var6 = _closure2_slot9;
                        var1 = undefined;
                        if(!var6) { _fun0004_ip = 13; continue _fun0004 }
case 14:
                        var1 = _closure2_slot8;
case 13:
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
                        _fun0004_ip = 15; continue _fun0004;
case 10:
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
                        var7 = 10;
                        var7 = var12[var7];
                        var7 = var8.bind(var2)(var7);
                        var8 = var7.Text;
                        var7 = {};
                        var12 = _closure3_slot0;
                        var7['variant'] = var12;
                        var12 = _closure2_slot7;
                        var13 = var13 != var12;
                        var12 = undefined;
                        if(!var13) { _fun0004_ip = 16; continue _fun0004 }
case 17:
                        var13 = {};
                        var14 = _closure2_slot7;
                        var13['fontFamily'] = var14;
                        var12 = var13;
case 16:
                        var7['style'] = var12;
                        var11 = _closure2_slot4;
                        var7['children'] = var11;
                        var7 = var9.bind(var2)(var8, var7, var10);
                        var6[1] = var7;
                        var3['children'] = var6;
                        var1 = var5.bind(var2)(var4, var3);
case 15:
                        return var1;
                    }
                };
                var1['userHook'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var12 = null;
            if(!(var12 != var6)) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var3 = _closure1_slot10;
            var2 = _closure1_slot0;
            var11 = _closure1_slot2;
            var1 = 12;
            var1 = var11[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.PressableOpacity;
            var1 = {};
            if(var7) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            var11 = var16.contextButtonText;
            _fun0002_ip = 22; continue _fun0002;
case 20:
            var11 = var16.floatingReplyTextWrapper;
case 22:
            var1['style'] = var11;
            var11 = 'link';
            var1['accessibilityRole'] = var11;
            var11 = _closure1_slot0;
            var18 = _closure1_slot2;
            var17 = 11;
            var19 = var18[var17];
            var19 = var11.bind(var4)(var19);
            var22 = var19.intl;
            var21 = var22.formatToPlainString;
            var19 = var18[var17];
            var19 = var11.bind(var4)(var19);
            var19 = var19.t;
            var20 = var19.EpJL4E;
            var19 = {};
            var19['username'] = var23;
            var19 = var21.bind(var22)(var20, var19);
            var1['accessibilityLabel'] = var19;
            var19 = var18[var17];
            var19 = var11.bind(var4)(var19);
            var20 = var19.intl;
            var19 = var20.string;
            var17 = var18[var17];
            var17 = var11.bind(var4)(var17);
            var17 = var17.t;
            var17 = var17["0CfCVW"];
            var17 = var19.bind(var20)(var17);
            var1['accessibilityHint'] = var17;
            var17 = 0.5;
            var1['activeOpacity'] = var17;
            var1['onPress'] = var6;
            var17 = _closure1_slot10;
            var6 = 10;
            var6 = var18[var6];
            var6 = var11.bind(var4)(var6);
            var11 = var6.Text;
            var6 = {};
            var18 = 1;
            var6['lineClamp'] = var18;
            var18 = 'text-sm/medium';
            if(!var7) { _fun0002_ip = 23; continue _fun0002 }
case 24:
            var18 = 'text-sm/normal';
case 23:
            var6['variant'] = var18;
            var18 = 'text-default';
            if(!var7) { _fun0002_ip = 25; continue _fun0002 }
case 26:
            var18 = 'text-strong';
case 25:
            var6['color'] = var18;
            var18 = 'text-sm/semibold';
            var18 = var15.bind(var4)(var18);
            var6['children'] = var18;
            var6 = var17.bind(var4)(var11, var6);
            var1['children'] = var6;
            var6 = var3.bind(var4)(var2, var1);
            _fun0002_ip = 27; continue _fun0002;
case 18:
            var3 = _closure1_slot10;
            var2 = _closure1_slot0;
            var11 = _closure1_slot2;
            var1 = 10;
            var1 = var11[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.Text;
            var1 = {};
            var11 = 1;
            var1['lineClamp'] = var11;
            var11 = 'text-sm/medium';
            if(!var7) { _fun0002_ip = 28; continue _fun0002 }
case 29:
            var11 = 'text-sm/normal';
case 28:
            var1['variant'] = var11;
            var11 = 'text-default';
            if(!var7) { _fun0002_ip = 30; continue _fun0002 }
case 31:
            var11 = 'text-strong';
case 30:
            var1['color'] = var11;
            var11 = 'text-sm/semibold';
            var11 = var15.bind(var4)(var11);
            var1['children'] = var11;
            var6 = var3.bind(var4)(var2, var1);
case 27:
            var1 = var12 != var8;
            var11 = null;
            if(!var1) { _fun0002_ip = 32; continue _fun0002 }
case 33:
            var3 = _closure1_slot10;
            var19 = _closure1_slot0;
            var20 = _closure1_slot2;
            var1 = 12;
            var1 = var20[var1];
            var1 = var19.bind(var4)(var1);
            var2 = var1.PressableOpacity;
            var1 = {'accessibilityRole': 'button', 'accessibilityLabel': null, 'activeOpacity': 0.5};
            var15 = 11;
            var17 = var20[var15];
            var17 = var19.bind(var4)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var15 = var20[var15];
            var15 = var19.bind(var4)(var15);
            var15 = var15.t;
            var15 = var15.jSnJGT;
            var15 = var17.bind(var18)(var15);
            var1['accessibilityLabel'] = var15;
            var15 = undefined;
            if(var7) { _fun0002_ip = 34; continue _fun0002 }
case 35:
            var15 = var16.contextCancelIconWrapper;
case 34:
            var1['style'] = var15;
            var1['onPress'] = var8;
            var17 = _closure1_slot10;
            var15 = _closure1_slot0;
            var21 = _closure1_slot2;
            var20 = 6;
            var8 = var21[var20];
            var8 = var15.bind(var4)(var8);
            var15 = var8.Icon;
            var8 = {};
            var19 = _closure1_slot1;
            var18 = 13;
            var18 = var21[var18];
            var18 = var19.bind(var4)(var18);
            var8['source'] = var18;
            var19 = _closure1_slot0;
            var18 = _closure1_slot2;
            var18 = var18[var20];
            var18 = var19.bind(var4)(var18);
            var18 = var18.Icon;
            var19 = var18.Sizes;
            if(var7) { _fun0002_ip = 36; continue _fun0002 }
case 37:
            var18 = var19.SMALL_20;
            _fun0002_ip = 38; continue _fun0002;
case 36:
            var18 = var19.CUSTOM;
case 38:
            var8['size'] = var18;
            var18 = undefined;
            if(!var7) { _fun0002_ip = 39; continue _fun0002 }
case 40:
            var18 = var16.floatingCloseIcon;
case 39:
            var8['style'] = var18;
            var8 = var17.bind(var4)(var15, var8);
            var1['children'] = var8;
            var11 = var3.bind(var4)(var2, var1);
case 32:
            var1 = var12 != var14;
            var15 = null;
            if(!var1) { _fun0002_ip = 41; continue _fun0002 }
case 42:
            var1 = var14.showMentionToggle;
            var15 = null;
            if(!var1) { _fun0002_ip = 41; continue _fun0002 }
case 43:
            var3 = _closure1_slot11;
            var17 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 12;
            var1 = var8[var1];
            var1 = var17.bind(var4)(var1);
            var2 = var1.PressableOpacity;
            var1 = {};
            var1['accessibilityRole'] = var10;
            var1['accessibilityState'] = var9;
            var22 = 11;
            var9 = var8[var22];
            var9 = var17.bind(var4)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var8 = var8[var22];
            var8 = var17.bind(var4)(var8);
            var8 = var8.t;
            var8 = var8.P8tvKG;
            var8 = var9.bind(var10)(var8);
            var1['accessibilityLabel'] = var8;
            var8 = var14.shouldMention;
            var18 = _closure1_slot0;
            var9 = _closure1_slot2;
            var10 = var9[var22];
            var10 = var18.bind(var4)(var10);
            var17 = var10.intl;
            var10 = var17.string;
            var9 = var9[var22];
            var9 = var18.bind(var4)(var9);
            var9 = var9.t;
            if(var8) { _fun0002_ip = 44; continue _fun0002 }
case 45:
            var8 = var9["+LXBxU"];
            var8 = var10.bind(var17)(var8);
            _fun0002_ip = 46; continue _fun0002;
case 44:
            var9 = var9.PBgTSF;
            var8 = var10.bind(var17)(var9);
case 46:
            var1['accessibilityHint'] = var8;
            var8 = 0.5;
            var1['activeOpacity'] = var8;
            var1['onPress'] = var5;
            if(var7) { _fun0002_ip = 47; continue _fun0002 }
case 48:
            var5 = var16.replyMentionButton;
            _fun0002_ip = 49; continue _fun0002;
case 47:
            var5 = var16.floatingMentionGroup;
case 49:
            var1['style'] = var5;
            var9 = _closure1_slot10;
            var17 = _closure1_slot0;
            var18 = _closure1_slot2;
            var10 = 6;
            var5 = var18[var10];
            var5 = var17.bind(var4)(var5);
            var8 = var5.Icon;
            var5 = {};
            var20 = _closure1_slot1;
            var19 = 20;
            var19 = var18[var19];
            var19 = var20.bind(var4)(var19);
            var5['source'] = var19;
            var10 = var18[var10];
            var10 = var17.bind(var4)(var10);
            var10 = var10.Icon;
            var10 = var10.Sizes;
            var10 = var10.CUSTOM;
            var5['size'] = var10;
            var17 = var16.replyMentionIcon;
            var10 = new Array(2);
            var10[0] = var17;
            var17 = var14.shouldMention;
            if(!var17) { _fun0002_ip = 50; continue _fun0002 }
case 51:
            var17 = var16.replyMentionIconActive;
case 50:
            var10[1] = var17;
            var5['style'] = var10;
            var8 = var9.bind(var4)(var8, var5);
            var5 = new Array(2);
            var5[0] = var8;
            var10 = _closure1_slot10;
            var9 = _closure1_slot0;
            var17 = _closure1_slot2;
            var8 = 10;
            var8 = var17[var8];
            var8 = var9.bind(var4)(var8);
            var9 = var8.Text;
            var8 = {};
            var17 = 'text-sm/bold';
            if(!var7) { _fun0002_ip = 52; continue _fun0002 }
case 53:
            var17 = 'text-sm/semibold';
case 52:
            var8['variant'] = var17;
            var17 = 'text-muted';
            var8['color'] = var17;
            var18 = var14.shouldMention;
            var17 = undefined;
            if(!var18) { _fun0002_ip = 54; continue _fun0002 }
case 55:
            var17 = var16.replyMentionButtonActive;
case 54:
            var8['style'] = var17;
            var17 = var14.shouldMention;
            var21 = _closure1_slot0;
            var18 = _closure1_slot2;
            var19 = var18[var22];
            var19 = var21.bind(var4)(var19);
            var20 = var19.intl;
            var19 = var20.string;
            var18 = var18[var22];
            var18 = var21.bind(var4)(var18);
            var18 = var18.t;
            if(var17) { _fun0002_ip = 56; continue _fun0002 }
case 57:
            var17 = var18.U7f3bK;
            var17 = var19.bind(var20)(var17);
            _fun0002_ip = 58; continue _fun0002;
case 56:
            var18 = var18.p9jC2r;
            var17 = var19.bind(var20)(var18);
case 58:
            var8['children'] = var17;
            var8 = var10.bind(var4)(var9, var8);
            var5[1] = var8;
            var1['children'] = var5;
            var15 = var3.bind(var4)(var2, var1);
case 41:
            var3 = _closure1_slot11;
            var2 = _closure1_slot5;
            var1 = {};
            var5 = var16.contextBarRow;
            var1['style'] = var5;
            var8 = !var7;
            if(!var8) { _fun0002_ip = 59; continue _fun0002 }
case 60:
            var8 = var11;
case 59:
            var5 = new Array(3);
            var5[0] = var8;
            var5[1] = var6;
            var6 = var15;
            if(!var7) { _fun0002_ip = 61; continue _fun0002 }
case 62:
            var9 = _closure1_slot11;
            var8 = _closure1_slot5;
            var7 = {};
            var10 = var16.floatingRightActions;
            var7['style'] = var10;
            var10 = new Array(3);
            var10[0] = var15;
            var15 = var12 == var14;
            var12 = undefined;
            if(var15) { _fun0002_ip = 63; continue _fun0002 }
case 64:
            var12 = var14.showMentionToggle;
case 63:
            if(!var12) { _fun0002_ip = 65; continue _fun0002 }
case 66:
            var15 = _closure1_slot10;
            var14 = _closure1_slot5;
            var13 = {};
            var16 = var16.floatingDivider;
            var13['style'] = var16;
            var12 = var15.bind(var4)(var14, var13);
case 65:
            var10[1] = var12;
            var10[2] = var11;
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 61:
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
            var3 = _closure1_slot10;
            var1 = 10;
            var1 = var7[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.Text;
            var1 = {};
            var7 = 1;
            var1['lineClamp'] = var7;
            var7 = 'text-sm/medium';
            if(!var5) { _fun0005_ip = 67; continue _fun0005 }
case 68:
            var7 = 'text-sm/normal';
case 67:
            var1['variant'] = var7;
            var7 = 'text-default';
            if(!var5) { _fun0005_ip = 69; continue _fun0005 }
case 70:
            var7 = 'text-strong';
case 69:
            var1['color'] = var7;
            if(var5) { _fun0005_ip = 71; continue _fun0005 }
case 72:
            var7 = var14.contextButtonText;
            _fun0005_ip = 73; continue _fun0005;
case 71:
            var7 = var14.floatingReplyTextWrapper;
case 73:
            var1['style'] = var7;
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var7 = 11;
            var8 = var13[var7];
            var8 = var12.bind(var4)(var8);
            var11 = var8.intl;
            var9 = var11.string;
            var8 = var13[var7];
            var8 = var12.bind(var4)(var8);
            var8 = var8.t;
            var8 = var8.rtNXxN;
            var8 = var9.bind(var11)(var8);
            var1['children'] = var8;
            var11 = var3.bind(var4)(var2, var1);
            var3 = _closure1_slot10;
            var1 = 12;
            var1 = var13[var1];
            var1 = var12.bind(var4)(var1);
            var2 = var1.PressableOpacity;
            var1 = {'accessibilityRole': 'button', 'accessibilityLabel': null, 'activeOpacity': 0.5};
            var8 = var13[var7];
            var8 = var12.bind(var4)(var8);
            var9 = var8.intl;
            var8 = var9.string;
            var7 = var13[var7];
            var7 = var12.bind(var4)(var7);
            var7 = var7.t;
            var7 = var7.qv9j1K;
            var7 = var8.bind(var9)(var7);
            var1['accessibilityLabel'] = var7;
            var7 = undefined;
            if(var5) { _fun0005_ip = 74; continue _fun0005 }
case 75:
            var7 = var14.contextCancelIconWrapper;
case 74:
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
            var9 = 13;
            var9 = var15[var9];
            var9 = var12.bind(var4)(var9);
            var6['source'] = var9;
            var12 = _closure1_slot0;
            var9 = _closure1_slot2;
            var9 = var9[var13];
            var9 = var12.bind(var4)(var9);
            var9 = var9.Icon;
            var12 = var9.Sizes;
            if(var5) { _fun0005_ip = 76; continue _fun0005 }
case 77:
            var9 = var12.SMALL_20;
            _fun0005_ip = 78; continue _fun0005;
case 76:
            var9 = var12.CUSTOM;
case 78:
            var6['size'] = var9;
            var9 = undefined;
            if(!var5) { _fun0005_ip = 19; continue _fun0005 }
case 79:
            var9 = var14.floatingCloseIcon;
case 19:
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
            if(var5) { _fun0005_ip = 80; continue _fun0005 }
case 81:
            var9[0] = var13;
            var9[1] = var11;
            var8['children'] = var9;
            var5 = var8;
            _fun0005_ip = 82; continue _fun0005;
case 80:
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
case 82:
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
            if(!(var4 == var3)) { _fun0006_ip = 83; continue _fun0006 }
case 84:
            var6 = _closure1_slot1;
            var5 = _closure1_slot2;
            var4 = 8;
            var5 = var5[var4];
            var4 = undefined;
            var4 = var6.bind(var4)(var5);
            var4 = var4.colors;
            var3 = var4.MOBILE_FLOATING_ACCESSORY_BACKGROUND;
case 83:
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
        var2 = {'width': 16, 'height': 16};
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
            var1 = 21;
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
            if(!var7) { _fun0007_ip = 85; continue _fun0007 }
case 86:
            var1 = 60;
case 85:
            _closure2_slot2 = var1;
            var10 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 22;
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
                    if(var2) { _fun0008_ip = 87; continue _fun0008 }
case 88:
                    var3['height'] = var4;
                    var2 = var3;
                    _fun0008_ip = 89; continue _fun0008;
case 87:
                    var3['maxHeight'] = var4;
                    var2 = var3;
case 89:
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
                    if(!(var2 != var3)) { _fun0009_ip = 8; continue _fun0009 }
case 9:
                    var2 = _closure2_slot4;
                    var1 = var2.current;
                    var1 = var1.bind(var2)();
case 8:
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
                    var1 = 23;
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
                    var1 = 23;
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
                    var1 = 23;
                    var5 = var13[var1];
                    var1 = undefined;
                    var9 = var12.bind(var1)(var5);
                    var8 = var9.withTiming;
                    var16 = _closure1_slot13;
                    var6 = function n(arg1) {
                        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                            var1 = arg1;
                            if(!var1) { _fun0010_ip = 89; continue _fun0010 }
case 90:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 22;
                            var1 = var2[var1];
                            var2 = undefined;
                            var4 = var3.bind(var2)(var1);
                            var3 = var4.runOnJS;
                            var1 = _closure2_slot5;
                            var1 = var3.bind(var4)(var1);
                            var1 = var1.bind(var2)();
case 89:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var5 = {};
                    var11 = 22;
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
            if(!var7) { _fun0007_ip = 91; continue _fun0007 }
case 92:
            var7 = var8.floatingContextBar;
case 91:
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
                        if(!(var1 != var2)) { _fun0012_ip = 93; continue _fun0012 }
case 9:
                        var1 = var2.handleCancelEditing;
                        var1 = var1.bind(var2)();
case 93:
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
                        if(!(var9 != var1)) { _fun0013_ip = 94; continue _fun0013 }
case 95:
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 24;
                        var1 = var3[var1];
                        var5 = undefined;
                        var4 = var2.bind(var5)(var1);
                        var2 = var4.deletePendingReply;
                        var1 = _closure2_slot0;
                        var1 = var1.id;
                        var1 = var2.bind(var4)(var1);
                        var2 = _closure1_slot1;
                        var1 = 25;
                        var1 = var3[var1];
                        var4 = var2.bind(var5)(var1);
                        var3 = var4.track;
                        var1 = _closure1_slot8;
                        var2 = var1.CHAT_CONTEXT_BAR_ACTION_CANCELED;
                        var1 = {};
                        var8 = _closure2_slot2;
                        var10 = var9 == var8;
                        var8 = undefined;
                        if(var10) { _fun0013_ip = 96; continue _fun0013 }
case 97:
                        var10 = _closure2_slot2;
                        var10 = var10.message;
                        var8 = var10.id;
case 96:
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
                        var8 = 26;
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
                        if(var10) { _fun0013_ip = 98; continue _fun0013 }
case 99:
                        var6 = var8.id;
case 98:
                        var8 = _closure2_slot2;
                        var8 = var9 == var8;
                        var5 = undefined;
                        if(var8) { _fun0013_ip = 100; continue _fun0013 }
case 101:
                        var7 = _closure2_slot2;
                        var7 = var7.message;
                        var7 = var7.author;
                        var5 = var7.id;
case 100:
                        var5 = var6 === var5;
                        var1['is_own_message'] = var5;
                        var1 = var3.bind(var4)(var2, var1);
case 94:
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
                        if(!(var2 != var3)) { _fun0014_ip = 102; continue _fun0014 }
case 84:
                        var5 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var2 = 27;
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
case 102:
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
                        if(!(var2 != var3)) { _fun0015_ip = 103; continue _fun0015 }
case 84:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var2 = 24;
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
case 103:
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
            var1 = 28;
            var1 = var3[var1];
            var4 = undefined;
            var3 = var2.bind(var4)(var1);
            var2 = var3.useNullableMessageAuthor;
            var6 = null;
            var5 = var6 == var8;
            var1 = undefined;
            if(var5) { _fun0011_ip = 104; continue _fun0011 }
case 105:
            var1 = var8.message;
case 104:
            var9 = var2.bind(var3)(var1);
            var3 = _closure1_slot11;
            var2 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 29;
            var1 = var5[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.TransitionGroup;
            var1 = {};
            var5 = _closure1_slot5;
            var1['component'] = var5;
            var11 = var6 != var8;
            if(!var11) { _fun0011_ip = 106; continue _fun0011 }
case 107:
            var11 = var6 != var9;
case 106:
            if(!var11) { _fun0011_ip = 108; continue _fun0011 }
case 109:
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
case 108:
            var5 = new Array(3);
            var5[0] = var11;
            var8 = var6 != var8;
            if(!var8) { _fun0011_ip = 110; continue _fun0011 }
case 111:
            var8 = var6 == var9;
case 110:
            if(!var8) { _fun0011_ip = 112; continue _fun0011 }
case 113:
            var13 = _closure1_slot10;
            var11 = _closure1_slot18;
            var9 = {};
            var15 = _closure1_slot19;
            var14 = {};
            var14['onCancelReplying'] = var16;
            var14 = var13.bind(var4)(var15, var14);
            var9['children'] = var14;
            var8 = var13.bind(var4)(var11, var9);
case 112:
            var5[1] = var8;
            var6 = var6 != var7;
            if(!var6) { _fun0011_ip = 114; continue _fun0011 }
case 115:
            var9 = _closure1_slot10;
            var8 = _closure1_slot18;
            var7 = {};
            var11 = _closure1_slot21;
            var10 = {};
            var10['onCancelEditing'] = var12;
            var10 = var9.bind(var4)(var11, var10);
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 114:
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = var5.bind(var8)(var4);
    var5 = 30;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/chat_input/native/ChatInputContextBar.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['ChatInputReplyBar'] = var2;
    return var1;
})();