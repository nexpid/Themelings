// app/modules/chat_input/native/ChatInputContextBar.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
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
            var16 = var2.bind(var5)(var1);
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
    var1 = function ChatInputReplyBar(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var14 = var1.pendingReply;
            var _closure2_slot0 = var14;
            var6 = var1.pendingReplyAuthor;
            var12 = var1.onTapContextBarReply;
            var10 = var1.onCancelReplying;
            var5 = var1.onToggleReplyMention;
            var4 = undefined;
            var _closure2_slot1 = var4;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 9;
            var1 = var2[var1];
            var8 = var3.bind(var4)(var1);
            var7 = var8.useMobileVisualRefreshConfig;
            var1 = {};
            var9 = 'ChatInputContextBar';
            var1['location'] = var9;
            var1 = var7.bind(var8)(var1);
            var7 = var1.chatInputFloating;
            var1 = _closure1_slot15;
            var16 = var1.bind(var4)(var7);
            var1 = 14;
            var1 = var2[var1];
            var11 = var3.bind(var4)(var1);
            var9 = var11.useStateFromStores;
            var1 = _closure1_slot6;
            var8 = new Array(1);
            var8[0] = var1;
            var1 = function() {
                var1 = _closure1_slot6;
                var1 = var1.roleStyle;
                return var1;
            };
            var15 = var9.bind(var11)(var8, var1);
            var _closure2_slot2 = var15;
            var1 = var6.colorString;
            var _closure2_slot3 = var1;
            var9 = var6.colorStrings;
            var _closure2_slot4 = var9;
            var19 = var6.nick;
            var _closure2_slot5 = var19;
            var11 = var6.guildId;
            var _closure2_slot6 = var11;
            var17 = _closure1_slot3;
            var8 = var17.useMemo;
            var6 = new Array(2);
            var6[0] = var1;
            var6[1] = var15;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var5 = _closure2_slot2;
                    var3 = 'hidden';
                    var1 = undefined;
                    if(!(var3 !== var5)) { _fun0003_ip = 5; continue _fun0003 }
case 6:
                    var5 = _closure2_slot3;
                    var3 = null;
                    var3 = var3 != var5;
                    var1 = undefined;
                    if(!var3) { _fun0003_ip = 5; continue _fun0003 }
case 7:
                    var3 = {};
                    var2 = _closure2_slot3;
                    var3['color'] = var2;
                    var2 = new Array(1);
                    var2[0] = var3;
                    var1 = var2;
case 5:
                    return var1;
                }
            };
            var1 = var8.bind(var17)(var1, var6);
            var _closure2_slot7 = var1;
            var6 = _closure1_slot1;
            var1 = 15;
            var1 = var2[var1];
            var6 = var6.bind(var4)(var1);
            var1 = {};
            var8 = var14.message;
            var8 = var8.author;
            var8 = var8.id;
            var1['userId'] = var8;
            var1['guildId'] = var11;
            var17 = var6.bind(var4)(var1);
            var1 = 16;
            var1 = var2[var1];
            var8 = var3.bind(var4)(var1);
            var6 = var8.useDisplayNameStylesFont;
            var1 = {};
            var1['displayNameStyles'] = var17;
            var1 = var6.bind(var8)(var1);
            var _closure2_slot8 = var1;
            var1 = 17;
            var6 = var2[var1];
            var8 = var3.bind(var4)(var6);
            var6 = var8.useProcessColorStringsArray;
            var9 = var6.bind(var8)(var9);
            var _closure2_slot9 = var9;
            var1 = var2[var1];
            var8 = var3.bind(var4)(var1);
            var6 = var8.useIsRoleStyleAndRoleColorsEligibleForERC;
            var1 = var14.message;
            var1 = var1.author;
            var28 = var1.id;
            var30 = var8;
            var29 = var11;
            var27 = var15;
            var26 = var9;
            var1 = var30[var6](var29, var28, var27, var26, var25);
            var _closure2_slot10 = var1;
            var6 = _closure1_slot10;
            var1 = 12;
            var2 = var2[var1];
            var2 = var3.bind(var4)(var2);
            var3 = var2.PressableOpacity;
            var2 = {};
            if(var7) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var8 = var16.contextButtonText;
            _fun0002_ip = 10; continue _fun0002;
case 8:
            var8 = var16.floatingReplyTextWrapper;
case 10:
            var2['style'] = var8;
            var8 = 'link';
            var2['accessibilityRole'] = var8;
            var11 = _closure1_slot0;
            var9 = _closure1_slot2;
            var22 = 11;
            var8 = var9[var22];
            var8 = var11.bind(var4)(var8);
            var18 = var8.intl;
            var17 = var18.formatToPlainString;
            var8 = var9[var22];
            var8 = var11.bind(var4)(var8);
            var8 = var8.t;
            var15 = var8.EpJL4E;
            var8 = {};
            var8['username'] = var19;
            var8 = var17.bind(var18)(var15, var8);
            var2['accessibilityLabel'] = var8;
            var8 = var9[var22];
            var8 = var11.bind(var4)(var8);
            var17 = var8.intl;
            var15 = var17.string;
            var8 = var9[var22];
            var8 = var11.bind(var4)(var8);
            var8 = var8.t;
            var8 = var8["0CfCVW"];
            var8 = var15.bind(var17)(var8);
            var2['accessibilityHint'] = var8;
            var8 = 0.5;
            var2['activeOpacity'] = var8;
            var2['onPress'] = var12;
            var15 = _closure1_slot10;
            var17 = 10;
            var9 = var9[var17];
            var9 = var11.bind(var4)(var9);
            var12 = var9.Text;
            var9 = {};
            var11 = 1;
            var9['lineClamp'] = var11;
            var11 = 'text-sm/medium';
            if(!var7) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var11 = 'text-sm/normal';
case 11:
            var9['variant'] = var11;
            var11 = 'text-default';
            if(!var7) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            var11 = 'text-strong';
case 13:
            var9['color'] = var11;
            var18 = 'text-sm/semibold';
            _closure2_slot1 = var18;
            var19 = _closure1_slot0;
            var11 = _closure1_slot2;
            var20 = var11[var22];
            var20 = var19.bind(var4)(var20);
            var24 = var20.intl;
            var23 = var24.format;
            var20 = var11[var22];
            var20 = var19.bind(var4)(var20);
            var20 = var20.t;
            var21 = var20["8E4GxS"];
            var20 = {};
            var25 = function userHook(arg1, arg2) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var10 = arg2;
                    var2 = _closure2_slot2;
                    var1 = 'dot';
                    if(!(var1 === var2)) { _fun0004_ip = 15; continue _fun0004 }
case 16:
                    var1 = _closure2_slot3;
                    var13 = null;
                    if(!(var13 == var1)) { _fun0004_ip = 17; continue _fun0004 }
case 15:
                    var5 = _closure1_slot10;
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var1 = 10;
                    var1 = var7[var1];
                    var4 = undefined;
                    var1 = var6.bind(var4)(var1);
                    var3 = var1.Text;
                    var2 = {};
                    var1 = _closure2_slot1;
                    var2['variant'] = var1;
                    var1 = 18;
                    var1 = var7[var1];
                    var6 = var6.bind(var4)(var1);
                    var1 = var6.isFabric;
                    var1 = var1.bind(var6)();
                    var1 = !var1;
                    var2['experimental_useNativeText'] = var1;
                    var6 = _closure2_slot7;
                    var1 = new Array(2);
                    var1[0] = var6;
                    var7 = _closure2_slot8;
                    var6 = null;
                    var6 = var6 != var7;
                    if(!var6) { _fun0004_ip = 18; continue _fun0004 }
case 19:
                    var7 = {};
                    var8 = _closure2_slot8;
                    var7['fontFamily'] = var8;
                    var6 = var7;
case 18:
                    var1[1] = var6;
                    var2['style'] = var1;
                    var6 = _closure2_slot10;
                    var1 = undefined;
                    if(!var6) { _fun0004_ip = 20; continue _fun0004 }
case 21:
                    var1 = _closure2_slot9;
case 20:
                    var2['gradientColors'] = var1;
                    var1 = _closure2_slot5;
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
                    _fun0004_ip = 2; continue _fun0004;
case 17:
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
                    var15 = _closure2_slot3;
                    var6['color'] = var15;
                    var15 = _closure2_slot4;
                    var6['colors'] = var15;
                    var15 = _closure2_slot6;
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
                    var12 = _closure2_slot1;
                    var7['variant'] = var12;
                    var12 = _closure2_slot8;
                    var13 = var13 != var12;
                    var12 = undefined;
                    if(!var13) { _fun0004_ip = 22; continue _fun0004 }
case 23:
                    var13 = {};
                    var14 = _closure2_slot8;
                    var13['fontFamily'] = var14;
                    var12 = var13;
case 22:
                    var7['style'] = var12;
                    var11 = _closure2_slot5;
                    var7['children'] = var11;
                    var7 = var9.bind(var2)(var8, var7, var10);
                    var6[1] = var7;
                    var3['children'] = var6;
                    var1 = var5.bind(var2)(var4, var3);
case 2:
                    return var1;
                }
            };
            var20['userHook'] = var25;
            var20 = var23.bind(var24)(var21, var20);
            var9['children'] = var20;
            var9 = var15.bind(var4)(var12, var9);
            var2['children'] = var9;
            var6 = var6.bind(var4)(var3, var2);
            var9 = _closure1_slot10;
            var2 = var11[var1];
            var2 = var19.bind(var4)(var2);
            var3 = var2.PressableOpacity;
            var2 = {'accessibilityRole': 'button', 'accessibilityLabel': null, 'activeOpacity': 0.5};
            var12 = var11[var22];
            var12 = var19.bind(var4)(var12);
            var15 = var12.intl;
            var12 = var15.string;
            var11 = var11[var22];
            var11 = var19.bind(var4)(var11);
            var11 = var11.t;
            var11 = var11.jSnJGT;
            var11 = var12.bind(var15)(var11);
            var2['accessibilityLabel'] = var11;
            var11 = undefined;
            if(var7) { _fun0002_ip = 24; continue _fun0002 }
case 25:
            var11 = var16.contextCancelIconWrapper;
case 24:
            var2['style'] = var11;
            var2['onPress'] = var10;
            var12 = _closure1_slot10;
            var11 = _closure1_slot0;
            var21 = _closure1_slot2;
            var20 = 6;
            var10 = var21[var20];
            var10 = var11.bind(var4)(var10);
            var11 = var10.Icon;
            var10 = {};
            var19 = _closure1_slot1;
            var15 = 13;
            var15 = var21[var15];
            var15 = var19.bind(var4)(var15);
            var10['source'] = var15;
            var19 = _closure1_slot0;
            var15 = _closure1_slot2;
            var15 = var15[var20];
            var15 = var19.bind(var4)(var15);
            var15 = var15.Icon;
            var19 = var15.Sizes;
            if(var7) { _fun0002_ip = 26; continue _fun0002 }
case 27:
            var15 = var19.SMALL_20;
            _fun0002_ip = 28; continue _fun0002;
case 26:
            var15 = var19.CUSTOM;
case 28:
            var10['size'] = var15;
            var15 = undefined;
            if(!var7) { _fun0002_ip = 29; continue _fun0002 }
case 30:
            var15 = var16.floatingCloseIcon;
case 29:
            var10['style'] = var15;
            var10 = var12.bind(var4)(var11, var10);
            var2['children'] = var10;
            var11 = var9.bind(var4)(var3, var2);
            var12 = null;
            var2 = var12 != var14;
            var15 = null;
            if(!var2) { _fun0002_ip = 31; continue _fun0002 }
case 32:
            var2 = var14.showMentionToggle;
            var15 = null;
            if(!var2) { _fun0002_ip = 31; continue _fun0002 }
case 33:
            var3 = _closure1_slot11;
            var21 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = var9[var1];
            var1 = var21.bind(var4)(var1);
            var2 = var1.PressableOpacity;
            var1 = {};
            var10 = 'checkbox';
            var1['accessibilityRole'] = var10;
            var10 = {};
            var19 = var14.shouldMention;
            var10['checked'] = var19;
            var1['accessibilityState'] = var10;
            var10 = var9[var22];
            var10 = var21.bind(var4)(var10);
            var19 = var10.intl;
            var10 = var19.string;
            var9 = var9[var22];
            var9 = var21.bind(var4)(var9);
            var9 = var9.t;
            var9 = var9.P8tvKG;
            var9 = var10.bind(var19)(var9);
            var1['accessibilityLabel'] = var9;
            var9 = var14.shouldMention;
            var23 = _closure1_slot0;
            var10 = _closure1_slot2;
            var19 = var10[var22];
            var19 = var23.bind(var4)(var19);
            var21 = var19.intl;
            var19 = var21.string;
            var10 = var10[var22];
            var10 = var23.bind(var4)(var10);
            var10 = var10.t;
            if(var9) { _fun0002_ip = 34; continue _fun0002 }
case 35:
            var9 = var10["+LXBxU"];
            var9 = var19.bind(var21)(var9);
            _fun0002_ip = 36; continue _fun0002;
case 34:
            var10 = var10.PBgTSF;
            var9 = var19.bind(var21)(var10);
case 36:
            var1['accessibilityHint'] = var9;
            var1['activeOpacity'] = var8;
            var1['onPress'] = var5;
            if(var7) { _fun0002_ip = 37; continue _fun0002 }
case 38:
            var5 = var16.replyMentionButton;
            _fun0002_ip = 39; continue _fun0002;
case 37:
            var5 = var16.floatingMentionGroup;
case 39:
            var1['style'] = var5;
            var9 = _closure1_slot10;
            var19 = _closure1_slot0;
            var10 = _closure1_slot2;
            var5 = var10[var20];
            var5 = var19.bind(var4)(var5);
            var8 = var5.Icon;
            var5 = {};
            var23 = _closure1_slot1;
            var21 = 19;
            var21 = var10[var21];
            var21 = var23.bind(var4)(var21);
            var5['source'] = var21;
            var10 = var10[var20];
            var10 = var19.bind(var4)(var10);
            var10 = var10.Icon;
            var10 = var10.Sizes;
            var10 = var10.CUSTOM;
            var5['size'] = var10;
            var19 = var16.replyMentionIcon;
            var10 = new Array(2);
            var10[0] = var19;
            var19 = var14.shouldMention;
            if(!var19) { _fun0002_ip = 40; continue _fun0002 }
case 41:
            var19 = var16.replyMentionIconActive;
case 40:
            var10[1] = var19;
            var5['style'] = var10;
            var8 = var9.bind(var4)(var8, var5);
            var5 = new Array(2);
            var5[0] = var8;
            var10 = _closure1_slot10;
            var9 = _closure1_slot0;
            var8 = _closure1_slot2;
            var8 = var8[var17];
            var8 = var9.bind(var4)(var8);
            var9 = var8.Text;
            var8 = {};
            var17 = 'text-sm/bold';
            if(!var7) { _fun0002_ip = 42; continue _fun0002 }
case 43:
            var17 = var18;
case 42:
            var8['variant'] = var17;
            var17 = 'text-muted';
            var8['color'] = var17;
            var18 = var14.shouldMention;
            var17 = undefined;
            if(!var18) { _fun0002_ip = 44; continue _fun0002 }
case 45:
            var17 = var16.replyMentionButtonActive;
case 44:
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
            if(var17) { _fun0002_ip = 46; continue _fun0002 }
case 47:
            var17 = var18.U7f3bK;
            var17 = var19.bind(var20)(var17);
            _fun0002_ip = 48; continue _fun0002;
case 46:
            var18 = var18.p9jC2r;
            var17 = var19.bind(var20)(var18);
case 48:
            var8['children'] = var17;
            var8 = var10.bind(var4)(var9, var8);
            var5[1] = var8;
            var1['children'] = var5;
            var15 = var3.bind(var4)(var2, var1);
case 31:
            var3 = _closure1_slot11;
            var2 = _closure1_slot5;
            var1 = {};
            var5 = var16.contextBarRow;
            var1['style'] = var5;
            var8 = !var7;
            if(!var8) { _fun0002_ip = 49; continue _fun0002 }
case 50:
            var8 = var11;
case 49:
            var5 = new Array(3);
            var5[0] = var8;
            var5[1] = var6;
            var6 = var15;
            if(!var7) { _fun0002_ip = 51; continue _fun0002 }
case 52:
            var9 = _closure1_slot11;
            var8 = _closure1_slot5;
            var7 = {};
            var10 = var16.floatingRightActions;
            var7['style'] = var10;
            var10 = new Array(3);
            var10[0] = var15;
            var15 = var12 == var14;
            var12 = undefined;
            if(var15) { _fun0002_ip = 53; continue _fun0002 }
case 54:
            var12 = var14.showMentionToggle;
case 53:
            if(!var12) { _fun0002_ip = 55; continue _fun0002 }
case 56:
            var15 = _closure1_slot10;
            var14 = _closure1_slot5;
            var13 = {};
            var16 = var16.floatingDivider;
            var13['style'] = var16;
            var12 = var15.bind(var4)(var14, var13);
case 55:
            var10[1] = var12;
            var10[2] = var11;
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 51:
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot20 = var1;
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
            var14 = var1.bind(var4)(var5);
            var3 = _closure1_slot10;
            var1 = 10;
            var1 = var7[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.Text;
            var1 = {};
            var7 = 1;
            var1['lineClamp'] = var7;
            var7 = 'text-sm/medium';
            if(!var5) { _fun0005_ip = 57; continue _fun0005 }
case 58:
            var7 = 'text-sm/normal';
case 57:
            var1['variant'] = var7;
            var7 = 'text-default';
            if(!var5) { _fun0005_ip = 59; continue _fun0005 }
case 60:
            var7 = 'text-strong';
case 59:
            var1['color'] = var7;
            if(var5) { _fun0005_ip = 61; continue _fun0005 }
case 62:
            var7 = var14.contextButtonText;
            _fun0005_ip = 63; continue _fun0005;
case 61:
            var7 = var14.floatingReplyTextWrapper;
case 63:
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
            if(var5) { _fun0005_ip = 64; continue _fun0005 }
case 65:
            var7 = var14.contextCancelIconWrapper;
case 64:
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
            if(var5) { _fun0005_ip = 66; continue _fun0005 }
case 67:
            var9 = var12.SMALL_20;
            _fun0005_ip = 68; continue _fun0005;
case 66:
            var9 = var12.CUSTOM;
case 68:
            var6['size'] = var9;
            var9 = undefined;
            if(!var5) { _fun0005_ip = 69; continue _fun0005 }
case 70:
            var9 = var14.floatingCloseIcon;
case 69:
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
            if(var5) { _fun0005_ip = 71; continue _fun0005 }
case 72:
            var9[0] = var13;
            var9[1] = var11;
            var8['children'] = var9;
            var5 = var8;
            _fun0005_ip = 73; continue _fun0005;
case 71:
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
case 73:
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot21 = var1;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var9 = var4.StyleSheet;
    var _closure1_slot4 = var9;
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.AnalyticEvents;
    var _closure1_slot8 = var8;
    var4 = var4.Routes;
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot10 = var8;
    var8 = var4.jsxs;
    var _closure1_slot11 = var8;
    var4 = var4.Fragment;
    var _closure1_slot12 = var4;
    var4 = {};
    var8 = 250;
    var4['duration'] = var8;
    var8 = 6;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var8 = var8.STANDARD_EASING;
    var4['easing'] = var8;
    var _closure1_slot13 = var4;
    var4 = 7;
    var8 = var6[var4];
    var10 = var5.bind(var1)(var8);
    var9 = var10.createStyles;
    var8 = function(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var3 = arg1;
            var1 = {};
            var2 = {};
            var4 = null;
            if(!(var4 == var3)) { _fun0006_ip = 74; continue _fun0006 }
case 75:
            var6 = _closure1_slot1;
            var5 = _closure1_slot2;
            var4 = 8;
            var5 = var5[var4];
            var4 = undefined;
            var4 = var6.bind(var4)(var5);
            var4 = var4.colors;
            var3 = var4.BACKGROUND_SURFACE_HIGH;
case 74:
            var2['backgroundColor'] = var3;
            var1['contextBar'] = var2;
            return var1;
        }
    };
    var8 = var9.bind(var10)(var8);
    var _closure1_slot14 = var8;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = function(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var9 = arg1;
            var1 = {};
            var2 = {'overflow': 'hidden', 'flexDirection': 'row', 'alignItems': 'center'};
            var11 = 'hidden';
            if(var9) { _fun0007_ip = 76; continue _fun0007 }
case 77:
            var3 = {};
            _fun0007_ip = 78; continue _fun0007;
case 76:
            var3 = {'paddingHorizontal': 12, 'paddingVertical': 8, 'gap': 8};
case 78:
            var14 = var2;
            var13 = var3;
            var3 = copyDataProperties(var14, var13);
            var1['contextBarRow'] = var2;
            var2 = {'flexShrink': 1, 'minWidth': 0};
            var1['floatingReplyTextWrapper'] = var2;
            var2 = {'paddingHorizontal': 12, 'paddingVertical': 10};
            var1['contextCancelIconWrapper'] = var2;
            var7 = 'stretch';
            var2 = {'flexGrow': 1, 'flexShrink': 1, 'justifyContent': 'center', 'alignSelf': 'stretch', 'paddingRight': 12, 'paddingVertical': 10};
            var1['contextButtonText'] = var2;
            var2 = {};
            var3 = _closure1_slot4;
            var3 = var3.hairlineWidth;
            var2['borderBottomWidth'] = var3;
            var10 = _closure1_slot1;
            var3 = _closure1_slot2;
            var6 = 8;
            var12 = var3[var6];
            var5 = undefined;
            var12 = var10.bind(var5)(var12);
            var12 = var12.colors;
            var12 = var12.BORDER_MUTED;
            var2['borderBottomColor'] = var12;
            var2['overflow'] = var11;
            var1['floatingContextBar'] = var2;
            var2 = {'flexDirection': 'row', 'alignItems': 'center', 'paddingHorizontal': 12, 'paddingVertical': 10};
            var1['replyMentionButton'] = var2;
            var2 = {};
            var3 = var3[var6];
            var3 = var10.bind(var5)(var3);
            var3 = var3.colors;
            var3 = var3.CONTROL_BRAND_FOREGROUND;
            var2['color'] = var3;
            var1['replyMentionButtonActive'] = var2;
            var2 = {};
            var3 = 20;
            var10 = var3;
            if(!var9) { _fun0007_ip = 79; continue _fun0007 }
case 80:
            var10 = 16;
case 79:
            var2['width'] = var10;
            if(!var9) { _fun0007_ip = 81; continue _fun0007 }
case 82:
            var3 = 16;
case 81:
            var2['height'] = var3;
            var10 = _closure1_slot1;
            var3 = _closure1_slot2;
            var3 = var3[var6];
            var3 = var10.bind(var5)(var3);
            var3 = var3.colors;
            var3 = var3.TEXT_MUTED;
            var2['tintColor'] = var3;
            var3 = 4;
            if(!var9) { _fun0007_ip = 83; continue _fun0007 }
case 84:
            var3 = 0;
case 83:
            var2['marginRight'] = var3;
            var1['replyMentionIcon'] = var2;
            var2 = {};
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var9 = var3[var6];
            var9 = var4.bind(var5)(var9);
            var9 = var9.colors;
            var9 = var9.CONTROL_BRAND_FOREGROUND;
            var2['tintColor'] = var9;
            var1['replyMentionIconActive'] = var2;
            var2 = {'flexGrow': 1, 'flexShrink': 0, 'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'flex-end', 'gap': 8};
            var1['floatingRightActions'] = var2;
            var2 = {'flexDirection': 'row', 'alignItems': 'center', 'gap': 2};
            var1['floatingMentionGroup'] = var2;
            var2 = {};
            var8 = _closure1_slot4;
            var8 = var8.hairlineWidth;
            var2['width'] = var8;
            var2['alignSelf'] = var7;
            var7 = var3[var6];
            var7 = var4.bind(var5)(var7);
            var7 = var7.colors;
            var7 = var7.BORDER_SUBTLE;
            var2['backgroundColor'] = var7;
            var1['floatingDivider'] = var2;
            var2 = {'width': 16, 'height': 16};
            var3 = var3[var6];
            var3 = var4.bind(var5)(var3);
            var3 = var3.colors;
            var3 = var3.INTERACTIVE_ICON_DEFAULT;
            var2['tintColor'] = var3;
            var1['floatingCloseIcon'] = var2;
            return var1;
        }
    };
    var4 = var8.bind(var9)(var4);
    var _closure1_slot15 = var4;
    var4 = {};
    var8 = 'function ChatInputContextBarTsx1(){const{stylesBackgroundColor,chatInputFloating,heightSv}=this.__closure;return{backgroundColor:stylesBackgroundColor,...(chatInputFloating?{maxHeight:heightSv.get()}:{height:heightSv.get()})};}';
    var4['code'] = var8;
    var _closure1_slot16 = var4;
    var4 = {};
    var8 = 'function ChatInputContextBarTsx2(finished){const{runOnJS,handleTransitionFinished}=this.__closure;if(finished){runOnJS(handleTransitionFinished)();}}';
    var4['code'] = var8;
    var _closure1_slot17 = var4;
    var8 = var7.forwardRef;
    var4 = function(arg1, arg2) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
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
            var1 = 20;
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
            var8 = var1.bind(var4)(var7);
            var1 = 40;
            if(!var7) { _fun0008_ip = 85; continue _fun0008 }
case 86:
            var1 = 60;
case 85:
            _closure2_slot2 = var1;
            var10 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 21;
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
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var1 = {};
                    var2 = _closure2_slot1;
                    var1['backgroundColor'] = var2;
                    var2 = _closure2_slot0;
                    var3 = {};
                    var5 = _closure2_slot3;
                    var4 = var5.get;
                    var4 = var4.bind(var5)();
                    if(var2) { _fun0009_ip = 78; continue _fun0009 }
case 87:
                    var3['height'] = var4;
                    var2 = var3;
                    _fun0009_ip = 88; continue _fun0009;
case 78:
                    var3['maxHeight'] = var4;
                    var2 = var3;
case 88:
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
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var2 = _closure2_slot4;
                    var3 = var2.current;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0010_ip = 15; continue _fun0010 }
case 16:
                    var2 = _closure2_slot4;
                    var1 = var2.current;
                    var1 = var1.bind(var2)();
case 15:
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
                    var1 = 22;
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
                    var1 = 22;
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
                    var1 = 22;
                    var5 = var13[var1];
                    var1 = undefined;
                    var9 = var12.bind(var1)(var5);
                    var8 = var9.withTiming;
                    var16 = _closure1_slot13;
                    var6 = function n(arg1) {
                        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                            var1 = arg1;
                            if(!var1) { _fun0011_ip = 88; continue _fun0011 }
case 89:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 21;
                            var1 = var2[var1];
                            var2 = undefined;
                            var4 = var3.bind(var2)(var1);
                            var3 = var4.runOnJS;
                            var1 = _closure2_slot5;
                            var1 = var3.bind(var4)(var1);
                            var1 = var1.bind(var2)();
case 88:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var5 = {};
                    var11 = 21;
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
            if(!var7) { _fun0008_ip = 90; continue _fun0008 }
case 91:
            var7 = var8.floatingContextBar;
case 90:
            var6[1] = var7;
            var1['style'] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = var8.bind(var7)(var4);
    var _closure1_slot18 = var4;
    var4 = var7.memo;
    var2 = function ChatInputContextBar(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
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
                    _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                        var1 = _closure2_slot1;
                        var2 = var1.current;
                        var1 = null;
                        if(!(var1 != var2)) { _fun0013_ip = 92; continue _fun0013 }
case 16:
                        var1 = var2.handleCancelEditing;
                        var1 = var1.bind(var2)();
case 92:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['onCancelEditing'] = var3;
                var3 = function onCancelReplying() {
                    _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                        var1 = _closure2_slot2;
                        var9 = null;
                        if(!(var9 != var1)) { _fun0014_ip = 93; continue _fun0014 }
case 94:
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 23;
                        var1 = var3[var1];
                        var5 = undefined;
                        var4 = var2.bind(var5)(var1);
                        var2 = var4.deletePendingReply;
                        var1 = _closure2_slot0;
                        var1 = var1.id;
                        var1 = var2.bind(var4)(var1);
                        var2 = _closure1_slot1;
                        var1 = 24;
                        var1 = var3[var1];
                        var4 = var2.bind(var5)(var1);
                        var3 = var4.track;
                        var1 = _closure1_slot8;
                        var2 = var1.CHAT_CONTEXT_BAR_ACTION_CANCELED;
                        var1 = {};
                        var8 = _closure2_slot2;
                        var10 = var9 == var8;
                        var8 = undefined;
                        if(var10) { _fun0014_ip = 95; continue _fun0014 }
case 96:
                        var10 = _closure2_slot2;
                        var10 = var10.message;
                        var8 = var10.id;
case 95:
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
                        var8 = 25;
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
                        if(var10) { _fun0014_ip = 97; continue _fun0014 }
case 98:
                        var6 = var8.id;
case 97:
                        var8 = _closure2_slot2;
                        var8 = var9 == var8;
                        var5 = undefined;
                        if(var8) { _fun0014_ip = 81; continue _fun0014 }
case 17:
                        var7 = _closure2_slot2;
                        var7 = var7.message;
                        var7 = var7.author;
                        var5 = var7.id;
case 81:
                        var5 = var6 === var5;
                        var1['is_own_message'] = var5;
                        var1 = var3.bind(var4)(var2, var1);
case 93:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['onCancelReplying'] = var3;
                var3 = function onTapContextBarReply() {
                    _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                        var3 = _closure2_slot2;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0015_ip = 99; continue _fun0015 }
case 75:
                        var5 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var2 = 26;
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
case 99:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['onTapContextBarReply'] = var3;
                var2 = function onToggleReplyMention() {
                    _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                        var3 = _closure2_slot2;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0016_ip = 100; continue _fun0016 }
case 75:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var2 = 23;
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
case 100:
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
            var1 = 27;
            var1 = var3[var1];
            var4 = undefined;
            var3 = var2.bind(var4)(var1);
            var2 = var3.useNullableMessageAuthor;
            var6 = null;
            var5 = var6 == var8;
            var1 = undefined;
            if(var5) { _fun0012_ip = 101; continue _fun0012 }
case 18:
            var1 = var8.message;
case 101:
            var9 = var2.bind(var3)(var1);
            var3 = _closure1_slot11;
            var2 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 28;
            var1 = var5[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.TransitionGroup;
            var1 = {};
            var5 = _closure1_slot5;
            var1['component'] = var5;
            var11 = var6 != var8;
            if(!var11) { _fun0012_ip = 102; continue _fun0012 }
case 103:
            var11 = var6 != var9;
case 102:
            if(!var11) { _fun0012_ip = 104; continue _fun0012 }
case 105:
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
case 104:
            var5 = new Array(3);
            var5[0] = var11;
            var8 = var6 != var8;
            if(!var8) { _fun0012_ip = 106; continue _fun0012 }
case 107:
            var8 = var6 == var9;
case 106:
            if(!var8) { _fun0012_ip = 108; continue _fun0012 }
case 109:
            var13 = _closure1_slot10;
            var11 = _closure1_slot18;
            var9 = {};
            var15 = _closure1_slot19;
            var14 = {};
            var14['onCancelReplying'] = var16;
            var14 = var13.bind(var4)(var15, var14);
            var9['children'] = var14;
            var8 = var13.bind(var4)(var11, var9);
case 108:
            var5[1] = var8;
            var6 = var6 != var7;
            if(!var6) { _fun0012_ip = 110; continue _fun0012 }
case 111:
            var9 = _closure1_slot10;
            var8 = _closure1_slot18;
            var7 = {};
            var11 = _closure1_slot21;
            var10 = {};
            var10['onCancelEditing'] = var12;
            var10 = var9.bind(var4)(var11, var10);
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 110:
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 29;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/chat_input/native/ChatInputContextBar.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();