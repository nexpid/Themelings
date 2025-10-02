// app/uikit-native/ChatInputContextBar.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var1 = function ChatInputReplyBarNoAuthor(arg1) {
        var1 = arg1;
        var5 = var1.onCancelReplying;
        var1 = _closure1_slot14;
        var4 = undefined;
        var10 = var1.bind(var4)();
        var3 = _closure1_slot10;
        var12 = _closure1_slot0;
        var13 = _closure1_slot2;
        var1 = 9;
        var1 = var13[var1];
        var1 = var12.bind(var4)(var1);
        var2 = var1.PressableOpacity;
        var1 = {'activeOpacity': 0.5, 'accessibilityRole': 'button'};
        var9 = 10;
        var7 = var13[var9];
        var7 = var12.bind(var4)(var7);
        var11 = var7.intl;
        var8 = var11.string;
        var7 = var13[var9];
        var7 = var12.bind(var4)(var7);
        var7 = var7.t;
        var7 = var7.jSnJGR;
        var7 = var8.bind(var11)(var7);
        var1['accessibilityLabel'] = var7;
        var1['onPress'] = var5;
        var5 = var10.contextBarRow;
        var1['style'] = var5;
        var8 = _closure1_slot9;
        var7 = _closure1_slot4;
        var5 = {};
        var11 = var10.contextCancelIconWrapper;
        var5['style'] = var11;
        var15 = _closure1_slot9;
        var17 = _closure1_slot1;
        var16 = 11;
        var11 = var13[var16];
        var14 = var17.bind(var4)(var11);
        var11 = {};
        var18 = 12;
        var18 = var13[var18];
        var18 = var17.bind(var4)(var18);
        var11['source'] = var18;
        var16 = var13[var16];
        var16 = var17.bind(var4)(var16);
        var16 = var16.Sizes;
        var16 = var16.SMALL_20;
        var11['size'] = var16;
        var11 = var15.bind(var4)(var14, var11);
        var5['children'] = var11;
        var7 = var8.bind(var4)(var7, var5);
        var5 = new Array(2);
        var5[0] = var7;
        var8 = _closure1_slot9;
        var6 = 13;
        var6 = var13[var6];
        var6 = var12.bind(var4)(var6);
        var7 = var6.Text;
        var6 = {'lineClamp': 1, 'variant': 'text-sm/medium', 'color': 'header-secondary'};
        var10 = var10.contextButtonText;
        var6['style'] = var10;
        var10 = var13[var9];
        var10 = var12.bind(var4)(var10);
        var11 = var10.intl;
        var10 = var11.string;
        var9 = var13[var9];
        var9 = var12.bind(var4)(var9);
        var9 = var9.t;
        var9 = var9.5IEsGx;
        var9 = var10.bind(var11)(var9);
        var6['children'] = var9;
        var6 = var8.bind(var4)(var7, var6);
        var5[1] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot18 = var1;
    var1 = function ChatInputReplyBar(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var14 = var1.pendingReply;
            var _closure2_slot0 = var14;
            var2 = var1.pendingReplyAuthor;
            var12 = var1.onTapContextBarReply;
            var9 = var1.onCancelReplying;
            var10 = var1.onToggleReplyMention;
            var1 = _closure1_slot14;
            var4 = undefined;
            var17 = var1.bind(var4)();
            var22 = _closure1_slot0;
            var20 = _closure1_slot2;
            var1 = 14;
            var1 = var20[var1];
            var6 = var22.bind(var4)(var1);
            var5 = var6.useStateFromStores;
            var1 = _closure1_slot5;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                var1 = _closure1_slot5;
                var1 = var1.roleStyle;
                return var1;
            };
            var7 = var5.bind(var6)(var3, var1);
            var _closure2_slot1 = var7;
            var1 = var2.colorString;
            var _closure2_slot2 = var1;
            var5 = var2.colorStrings;
            var _closure2_slot3 = var5;
            var24 = var2.nick;
            var _closure2_slot4 = var24;
            var6 = var2.guildId;
            var _closure2_slot5 = var6;
            var8 = _closure1_slot3;
            var3 = var8.useMemo;
            var2 = new Array(2);
            var2[0] = var1;
            var2[1] = var7;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var5 = _closure2_slot1;
                    var3 = 'hidden';
                    var1 = undefined;
                    if(!(var3 !== var5)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var5 = _closure2_slot2;
                    var3 = null;
                    var3 = var3 != var5;
                    var1 = undefined;
                    if(!var3) { _fun0002_ip = 2; continue _fun0002 }
case 4:
                    var3 = {};
                    var2 = _closure2_slot2;
                    var3['color'] = var2;
                    var2 = new Array(1);
                    var2[0] = var3;
                    var1 = var2;
case 2:
                    return var1;
                }
            };
            var1 = var3.bind(var8)(var1, var2);
            var _closure2_slot6 = var1;
            var1 = 15;
            var2 = var20[var1];
            var3 = var22.bind(var4)(var2);
            var2 = var3.useProcessColorStringsArray;
            var5 = var2.bind(var3)(var5);
            var _closure2_slot7 = var5;
            var1 = var20[var1];
            var3 = var22.bind(var4)(var1);
            var2 = var3.useIsRoleStyleAndRoleColorsEligibleForERC;
            var1 = var14.message;
            var1 = var1.author;
            var28 = var1.id;
            var30 = var3;
            var29 = var6;
            var27 = var7;
            var26 = var5;
            var1 = var30[var2](var29, var28, var27, var26, var25);
            var _closure2_slot8 = var1;
            var3 = _closure1_slot10;
            var2 = _closure1_slot4;
            var1 = {};
            var5 = var17.contextBarRow;
            var1['style'] = var5;
            var8 = _closure1_slot9;
            var7 = 9;
            var5 = var20[var7];
            var5 = var22.bind(var4)(var5);
            var6 = var5.PressableOpacity;
            var5 = {'accessibilityRole': 'button', 'accessibilityLabel': null, 'activeOpacity': 0.5};
            var19 = 10;
            var11 = var20[var19];
            var11 = var22.bind(var4)(var11);
            var16 = var11.intl;
            var13 = var16.string;
            var11 = var20[var19];
            var11 = var22.bind(var4)(var11);
            var11 = var11.t;
            var11 = var11.jSnJGR;
            var11 = var13.bind(var16)(var11);
            var5['accessibilityLabel'] = var11;
            var11 = 0.5;
            var13 = var17.contextCancelIconWrapper;
            var5['style'] = var13;
            var5['onPress'] = var9;
            var16 = _closure1_slot9;
            var23 = _closure1_slot1;
            var21 = 11;
            var9 = var20[var21];
            var13 = var23.bind(var4)(var9);
            var9 = {};
            var18 = 12;
            var18 = var20[var18];
            var18 = var23.bind(var4)(var18);
            var9['source'] = var18;
            var18 = var20[var21];
            var18 = var23.bind(var4)(var18);
            var18 = var18.Sizes;
            var18 = var18.SMALL_20;
            var9['size'] = var18;
            var9 = var16.bind(var4)(var13, var9);
            var5['children'] = var9;
            var6 = var8.bind(var4)(var6, var5);
            var5 = new Array(3);
            var5[0] = var6;
            var9 = _closure1_slot9;
            var6 = var20[var7];
            var6 = var22.bind(var4)(var6);
            var8 = var6.PressableOpacity;
            var6 = {};
            var13 = 'link';
            var6['accessibilityRole'] = var13;
            var13 = var20[var19];
            var13 = var22.bind(var4)(var13);
            var23 = var13.intl;
            var18 = var23.formatToPlainString;
            var13 = var20[var19];
            var13 = var22.bind(var4)(var13);
            var13 = var13.t;
            var16 = var13.EpJL4O;
            var13 = {};
            var13['username'] = var24;
            var13 = var18.bind(var23)(var16, var13);
            var6['accessibilityLabel'] = var13;
            var13 = var20[var19];
            var13 = var22.bind(var4)(var13);
            var18 = var13.intl;
            var16 = var18.string;
            var13 = var20[var19];
            var13 = var22.bind(var4)(var13);
            var13 = var13.t;
            var13 = var13.0CfCVV;
            var13 = var16.bind(var18)(var13);
            var6['accessibilityHint'] = var13;
            var6['activeOpacity'] = var11;
            var6['onPress'] = var12;
            var12 = var17.contextButtonText;
            var6['style'] = var12;
            var16 = _closure1_slot9;
            var18 = 13;
            var12 = var20[var18];
            var12 = var22.bind(var4)(var12);
            var13 = var12.Text;
            var12 = {'lineClamp': 1, 'variant': 'text-sm/medium', 'color': 'header-secondary'};
            var23 = var20[var19];
            var23 = var22.bind(var4)(var23);
            var24 = var23.intl;
            var23 = var24.format;
            var20 = var20[var19];
            var20 = var22.bind(var4)(var20);
            var20 = var20.t;
            var22 = var20.8E4Gxc;
            var20 = {};
            var25 = function userHook(arg1, arg2) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var10 = arg2;
                    var2 = _closure2_slot1;
                    var1 = 'dot';
                    if(!(var1 === var2)) { _fun0003_ip = 5; continue _fun0003 }
case 6:
                    var2 = _closure2_slot2;
                    var1 = null;
                    if(!(var1 == var2)) { _fun0003_ip = 7; continue _fun0003 }
case 5:
                    var5 = _closure1_slot9;
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var1 = 13;
                    var1 = var7[var1];
                    var4 = undefined;
                    var1 = var6.bind(var4)(var1);
                    var3 = var1.Text;
                    var2 = {};
                    var1 = 'text-sm/semibold';
                    var2['variant'] = var1;
                    var1 = 17;
                    var1 = var7[var1];
                    var6 = var6.bind(var4)(var1);
                    var1 = var6.isFabric;
                    var1 = var1.bind(var6)();
                    var1 = !var1;
                    var2['experimental_useNativeText'] = var1;
                    var1 = _closure2_slot6;
                    var2['style'] = var1;
                    var6 = _closure2_slot8;
                    var1 = undefined;
                    if(!var6) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                    var1 = _closure2_slot7;
case 8:
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
                    _fun0003_ip = 10; continue _fun0003;
case 7:
                    var5 = _closure1_slot10;
                    var4 = _closure1_slot11;
                    var3 = {};
                    var13 = _closure1_slot9;
                    var8 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var2 = 16;
                    var6 = var12[var2];
                    var2 = undefined;
                    var6 = var8.bind(var2)(var6);
                    var9 = var6.RoleDot;
                    var6 = {};
                    var14 = _closure2_slot2;
                    var6['color'] = var14;
                    var14 = _closure2_slot3;
                    var6['colors'] = var14;
                    var14 = _closure2_slot5;
                    var6['guildId'] = var14;
                    var14 = 'small';
                    var6['size'] = var14;
                    var9 = var13.bind(var2)(var9, var6);
                    var6 = new Array(2);
                    var6[0] = var9;
                    var9 = _closure1_slot9;
                    var7 = 13;
                    var7 = var12[var7];
                    var7 = var8.bind(var2)(var7);
                    var8 = var7.Text;
                    var7 = {};
                    var12 = 'text-sm/semibold';
                    var7['variant'] = var12;
                    var11 = _closure2_slot4;
                    var7['children'] = var11;
                    var7 = var9.bind(var2)(var8, var7, var10);
                    var6[1] = var7;
                    var3['children'] = var6;
                    var1 = var5.bind(var2)(var4, var3);
case 10:
                    return var1;
                }
            };
            var20['userHook'] = var25;
            var20 = var23.bind(var24)(var22, var20);
            var12['children'] = var20;
            var12 = var16.bind(var4)(var13, var12);
            var6['children'] = var12;
            var6 = var9.bind(var4)(var8, var6);
            var5[1] = var6;
            var16 = null;
            var8 = var16 == var14;
            var6 = undefined;
            if(var8) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var6 = var14.showMentionToggle;
case 11:
            if(!var6) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var9 = _closure1_slot10;
            var22 = _closure1_slot0;
            var12 = _closure1_slot2;
            var7 = var12[var7];
            var7 = var22.bind(var4)(var7);
            var8 = var7.PressableOpacity;
            var7 = {};
            var13 = 'checkbox';
            var7['accessibilityRole'] = var13;
            var13 = {};
            var20 = var14.shouldMention;
            var13['checked'] = var20;
            var7['accessibilityState'] = var13;
            var13 = var12[var19];
            var13 = var22.bind(var4)(var13);
            var20 = var13.intl;
            var13 = var20.string;
            var12 = var12[var19];
            var12 = var22.bind(var4)(var12);
            var12 = var12.t;
            var12 = var12.P8tvKC;
            var12 = var13.bind(var20)(var12);
            var7['accessibilityLabel'] = var12;
            var12 = var14.shouldMention;
            var23 = _closure1_slot0;
            var13 = _closure1_slot2;
            var20 = var13[var19];
            var20 = var23.bind(var4)(var20);
            var22 = var20.intl;
            var20 = var22.string;
            var13 = var13[var19];
            var13 = var23.bind(var4)(var13);
            var13 = var13.t;
            if(var12) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var12 = var13.+LXBxc;
            var12 = var20.bind(var22)(var12);
            _fun0001_ip = 17; continue _fun0001;
case 15:
            var13 = var13.PBgTSE;
            var12 = var20.bind(var22)(var13);
case 17:
            var7['accessibilityHint'] = var12;
            var7['activeOpacity'] = var11;
            var7['onPress'] = var10;
            var10 = var17.replyMentionButton;
            var7['style'] = var10;
            var12 = _closure1_slot9;
            var20 = _closure1_slot1;
            var13 = _closure1_slot2;
            var10 = var13[var21];
            var11 = var20.bind(var4)(var10);
            var10 = {};
            var22 = 18;
            var22 = var13[var22];
            var22 = var20.bind(var4)(var22);
            var10['source'] = var22;
            var13 = var13[var21];
            var13 = var20.bind(var4)(var13);
            var13 = var13.Sizes;
            var13 = var13.CUSTOM;
            var10['size'] = var13;
            var20 = var17.replyMentionIcon;
            var13 = new Array(2);
            var13[0] = var20;
            var21 = var14.shouldMention;
            var20 = null;
            if(!var21) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var20 = var17.replyMentionIconActive;
case 18:
            var13[1] = var20;
            var10['style'] = var13;
            var11 = var12.bind(var4)(var11, var10);
            var10 = new Array(2);
            var10[0] = var11;
            var13 = _closure1_slot9;
            var12 = _closure1_slot0;
            var11 = _closure1_slot2;
            var11 = var11[var18];
            var11 = var12.bind(var4)(var11);
            var12 = var11.Text;
            var11 = {'variant': 'text-sm/bold', 'color': 'text-muted'};
            var18 = var14.shouldMention;
            var16 = null;
            if(!var18) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var16 = var17.replyMentionButtonActive;
case 20:
            var11['style'] = var16;
            var14 = var14.shouldMention;
            var18 = _closure1_slot0;
            var15 = _closure1_slot2;
            var16 = var15[var19];
            var16 = var18.bind(var4)(var16);
            var17 = var16.intl;
            var16 = var17.string;
            var15 = var15[var19];
            var15 = var18.bind(var4)(var15);
            var15 = var15.t;
            if(var14) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var14 = var15.U7f3bG;
            var14 = var16.bind(var17)(var14);
            _fun0001_ip = 24; continue _fun0001;
case 22:
            var15 = var15.p9jC2t;
            var14 = var16.bind(var17)(var15);
case 24:
            var11['children'] = var14;
            var11 = var13.bind(var4)(var12, var11);
            var10[1] = var11;
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 13:
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var1 = function ChatInputEditBar(arg1) {
        var1 = arg1;
        var11 = var1.onCancelEditing;
        var1 = _closure1_slot14;
        var4 = undefined;
        var10 = var1.bind(var4)();
        var3 = _closure1_slot10;
        var2 = _closure1_slot4;
        var1 = {};
        var5 = var10.contextBarRow;
        var1['style'] = var5;
        var8 = _closure1_slot9;
        var12 = _closure1_slot0;
        var13 = _closure1_slot2;
        var5 = 9;
        var5 = var13[var5];
        var5 = var12.bind(var4)(var5);
        var7 = var5.PressableOpacity;
        var5 = {'accessibilityRole': 'button', 'accessibilityLabel': null, 'activeOpacity': 0.5};
        var9 = 10;
        var14 = var13[var9];
        var14 = var12.bind(var4)(var14);
        var16 = var14.intl;
        var15 = var16.string;
        var14 = var13[var9];
        var14 = var12.bind(var4)(var14);
        var14 = var14.t;
        var14 = var14.qv9j1N;
        var14 = var15.bind(var16)(var14);
        var5['accessibilityLabel'] = var14;
        var14 = var10.contextCancelIconWrapper;
        var5['style'] = var14;
        var5['onPress'] = var11;
        var15 = _closure1_slot9;
        var17 = _closure1_slot1;
        var16 = 11;
        var11 = var13[var16];
        var14 = var17.bind(var4)(var11);
        var11 = {};
        var18 = 12;
        var18 = var13[var18];
        var18 = var17.bind(var4)(var18);
        var11['source'] = var18;
        var16 = var13[var16];
        var16 = var17.bind(var4)(var16);
        var16 = var16.Sizes;
        var16 = var16.SMALL_20;
        var11['size'] = var16;
        var11 = var15.bind(var4)(var14, var11);
        var5['children'] = var11;
        var7 = var8.bind(var4)(var7, var5);
        var5 = new Array(2);
        var5[0] = var7;
        var8 = _closure1_slot9;
        var6 = 13;
        var6 = var13[var6];
        var6 = var12.bind(var4)(var6);
        var7 = var6.Text;
        var6 = {'lineClamp': 1, 'variant': 'text-sm/medium', 'color': 'header-secondary'};
        var10 = var10.contextButtonText;
        var6['style'] = var10;
        var10 = var13[var9];
        var10 = var12.bind(var4)(var10);
        var11 = var10.intl;
        var10 = var11.string;
        var9 = var13[var9];
        var9 = var12.bind(var4)(var9);
        var9 = var9.t;
        var9 = var9.rtNXxM;
        var9 = var10.bind(var11)(var9);
        var6['children'] = var9;
        var6 = var8.bind(var4)(var7, var6);
        var5[1] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot20 = var1;
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
    var7 = var4.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.AnalyticEvents;
    var _closure1_slot7 = var8;
    var4 = var4.Routes;
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot9 = var8;
    var8 = var4.jsxs;
    var _closure1_slot10 = var8;
    var4 = var4.Fragment;
    var _closure1_slot11 = var4;
    var4 = {};
    var8 = 250;
    var4['duration'] = var8;
    var8 = 6;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var8 = var8.STANDARD_EASING;
    var4['easing'] = var8;
    var _closure1_slot12 = var4;
    var4 = 7;
    var8 = var6[var4];
    var10 = var5.bind(var1)(var8);
    var9 = var10.createStyles;
    var8 = function(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var3 = arg1;
            var1 = {};
            var2 = {};
            var4 = null;
            if(!(var4 == var3)) { _fun0004_ip = 25; continue _fun0004 }
case 26:
            var6 = _closure1_slot1;
            var5 = _closure1_slot2;
            var4 = 8;
            var5 = var5[var4];
            var4 = undefined;
            var4 = var6.bind(var4)(var5);
            var4 = var4.colors;
            var3 = var4.BACKGROUND_SECONDARY;
case 25:
            var2['backgroundColor'] = var3;
            var1['contextBar'] = var2;
            return var1;
        }
    };
    var8 = var9.bind(var10)(var8);
    var _closure1_slot13 = var8;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {};
    var11 = 8;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_SECONDARY;
    var10['backgroundColor'] = var13;
    var4['contextBar'] = var10;
    var10 = {'overflow': 'hidden', 'flexDirection': 'row', 'alignItems': 'center'};
    var4['contextBarRow'] = var10;
    var10 = {'paddingHorizontal': 12, 'paddingVertical': 10};
    var4['contextCancelIconWrapper'] = var10;
    var10 = {'flexGrow': 1, 'flexShrink': 1, 'justifyContent': 'center', 'alignSelf': 'stretch', 'paddingRight': 12, 'paddingVertical': 10};
    var4['contextButtonText'] = var10;
    var10 = {'flexDirection': 'row', 'alignItems': 'center', 'paddingHorizontal': 12, 'paddingVertical': 10};
    var4['replyMentionButton'] = var10;
    var10 = {};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.CONTROL_BRAND_FOREGROUND;
    var10['color'] = var13;
    var4['replyMentionButtonActive'] = var10;
    var10 = {'width': 20, 'height': 20, 'tintColor': null, 'marginRight': 4};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.TEXT_MUTED;
    var10['tintColor'] = var13;
    var4['replyMentionIcon'] = var10;
    var10 = {};
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.CONTROL_BRAND_FOREGROUND;
    var10['tintColor'] = var11;
    var4['replyMentionIconActive'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot14 = var4;
    var4 = {};
    var8 = 'function ChatInputContextBarTsx1(){const{stylesBackgroundColor,heightSv}=this.__closure;return{backgroundColor:stylesBackgroundColor,height:heightSv.get()};}';
    var4['code'] = var8;
    var _closure1_slot15 = var4;
    var4 = {};
    var8 = 'function ChatInputContextBarTsx2(finished){const{runOnJS,handleTransitionFinished}=this.__closure;if(finished){runOnJS(handleTransitionFinished)();}}';
    var4['code'] = var8;
    var _closure1_slot16 = var4;
    var8 = var7.forwardRef;
    var4 = function(arg1, arg2) {
        var1 = arg1;
        var5 = var1.children;
        var8 = _closure1_slot0;
        var7 = _closure1_slot2;
        var1 = 19;
        var6 = var7[var1];
        var4 = undefined;
        var9 = var8.bind(var4)(var6);
        var6 = var9.useGradientValue;
        var1 = var7[var1];
        var1 = var8.bind(var4)(var1);
        var1 = var1.GradientPercentage;
        var1 = var1.END;
        var6 = var6.bind(var9)(var1);
        var1 = _closure1_slot13;
        var1 = var1.bind(var4)(var6);
        var1 = var1.contextBar;
        var12 = var1.backgroundColor;
        var _closure2_slot0 = var12;
        var1 = 20;
        var6 = var7[var1];
        var10 = var8.bind(var4)(var6);
        var9 = var10.useSharedValue;
        var6 = 0;
        var11 = var9.bind(var10)(var6);
        var _closure2_slot1 = var11;
        var6 = var7[var1];
        var9 = var8.bind(var4)(var6);
        var8 = var9.useAnimatedStyle;
        var6 = function o() {
            var1 = {};
            var3 = _closure2_slot0;
            var1['backgroundColor'] = var3;
            var3 = _closure2_slot1;
            var2 = var3.get;
            var2 = var2.bind(var3)();
            var1['height'] = var2;
            return var1;
        };
        var10 = {};
        var10['stylesBackgroundColor'] = var12;
        var10['heightSv'] = var11;
        var6['__closure'] = var10;
        var10 = 5608080587636.0;
        var6['__workletHash'] = var10;
        var10 = _closure1_slot15;
        var6['__initData'] = var10;
        var6 = var8.bind(var9)(var6);
        var10 = _closure1_slot3;
        var9 = var10.useRef;
        var8 = null;
        var8 = var9.bind(var10)(var8);
        var _closure2_slot2 = var8;
        var11 = _closure1_slot3;
        var10 = var11.useCallback;
        var9 = new Array(1);
        var9[0] = var8;
        var8 = function() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var2 = _closure2_slot2;
                var3 = var2.current;
                var2 = null;
                if(!(var2 != var3)) { _fun0005_ip = 5; continue _fun0005 }
case 6:
                var2 = _closure2_slot2;
                var1 = var2.current;
                var1 = var1.bind(var2)();
case 5:
                var1 = undefined;
                return var1;
            }
        };
        var8 = var10.bind(var11)(var8, var9);
        var _closure2_slot3 = var8;
        var10 = _closure1_slot3;
        var9 = var10.useImperativeHandle;
        var8 = arg2;
        var3 = function() {
            var1 = {};
            var3 = function componentDidAppear() {
                var4 = _closure2_slot1;
                var3 = var4.set;
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 21;
                var5 = var5[var1];
                var1 = undefined;
                var7 = var6.bind(var1)(var5);
                var6 = var7.withTiming;
                var5 = _closure1_slot12;
                var2 = 40;
                var2 = var6.bind(var7)(var2, var5);
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var1['componentDidAppear'] = var3;
            var3 = function componentDidEnter() {
                var4 = _closure2_slot1;
                var3 = var4.set;
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 21;
                var5 = var5[var1];
                var1 = undefined;
                var7 = var6.bind(var1)(var5);
                var6 = var7.withTiming;
                var5 = _closure1_slot12;
                var2 = 40;
                var2 = var6.bind(var7)(var2, var5);
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var1['componentDidEnter'] = var3;
            var2 = function componentWillLeave(arg1) {
                var2 = _closure2_slot2;
                var1 = arg1;
                var2['current'] = var1;
                var4 = _closure2_slot1;
                var3 = var4.set;
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var1 = 21;
                var5 = var13[var1];
                var1 = undefined;
                var9 = var12.bind(var1)(var5);
                var8 = var9.withTiming;
                var16 = _closure1_slot12;
                var6 = function t(arg1) {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                        var1 = arg1;
                        if(!var1) { _fun0006_ip = 27; continue _fun0006 }
case 28:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 20;
                        var1 = var2[var1];
                        var2 = undefined;
                        var4 = var3.bind(var2)(var1);
                        var3 = var4.runOnJS;
                        var1 = _closure2_slot3;
                        var1 = var3.bind(var4)(var1);
                        var1 = var1.bind(var2)();
case 27:
                        var1 = undefined;
                        return var1;
                    }
                };
                var5 = {};
                var11 = 20;
                var11 = var13[var11];
                var11 = var12.bind(var1)(var11);
                var11 = var11.runOnJS;
                var5['runOnJS'] = var11;
                var10 = _closure2_slot3;
                var5['handleTransitionFinished'] = var10;
                var6['__closure'] = var5;
                var5 = 10908592279914.0;
                var6['__workletHash'] = var5;
                var2 = _closure1_slot16;
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
        var3 = var9.bind(var10)(var8, var3);
        var3 = _closure1_slot9;
        var2 = _closure1_slot1;
        var1 = var7[var1];
        var1 = var2.bind(var4)(var1);
        var2 = var1.View;
        var1 = {};
        var1['style'] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var4 = var8.bind(var7)(var4);
    var _closure1_slot17 = var4;
    var4 = var7.memo;
    var2 = function ChatInputContextBar(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
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
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                        var1 = _closure2_slot1;
                        var2 = var1.current;
                        var1 = null;
                        if(!(var1 != var2)) { _fun0008_ip = 29; continue _fun0008 }
case 6:
                        var1 = var2.handleCancelEditing;
                        var1 = var1.bind(var2)();
case 29:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['onCancelEditing'] = var3;
                var3 = function onCancelReplying() {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                        var1 = _closure2_slot2;
                        var9 = null;
                        if(!(var9 != var1)) { _fun0009_ip = 30; continue _fun0009 }
case 31:
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 22;
                        var1 = var3[var1];
                        var5 = undefined;
                        var4 = var2.bind(var5)(var1);
                        var2 = var4.deletePendingReply;
                        var1 = _closure2_slot0;
                        var1 = var1.id;
                        var1 = var2.bind(var4)(var1);
                        var2 = _closure1_slot1;
                        var1 = 23;
                        var1 = var3[var1];
                        var4 = var2.bind(var5)(var1);
                        var3 = var4.track;
                        var1 = _closure1_slot7;
                        var2 = var1.CHAT_CONTEXT_BAR_ACTION_CANCELED;
                        var1 = {};
                        var8 = _closure2_slot2;
                        var10 = var9 == var8;
                        var8 = undefined;
                        if(var10) { _fun0009_ip = 32; continue _fun0009 }
case 33:
                        var10 = _closure2_slot2;
                        var10 = var10.message;
                        var8 = var10.id;
case 32:
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
                        var8 = 24;
                        var8 = var11[var8];
                        var11 = var10.bind(var5)(var8);
                        var10 = var11.getContextBarCancelReason;
                        var8 = 'cancel';
                        var8 = var10.bind(var11)(var12, var8);
                        var1['reason'] = var8;
                        var8 = _closure1_slot6;
                        var6 = var8.getCurrentUser;
                        var8 = var6.bind(var8)();
                        var10 = var9 == var8;
                        var6 = undefined;
                        if(var10) { _fun0009_ip = 34; continue _fun0009 }
case 35:
                        var6 = var8.id;
case 34:
                        var8 = _closure2_slot2;
                        var8 = var9 == var8;
                        var5 = undefined;
                        if(var8) { _fun0009_ip = 36; continue _fun0009 }
case 37:
                        var7 = _closure2_slot2;
                        var7 = var7.message;
                        var7 = var7.author;
                        var5 = var7.id;
case 36:
                        var5 = var6 === var5;
                        var1['is_own_message'] = var5;
                        var1 = var3.bind(var4)(var2, var1);
case 30:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['onCancelReplying'] = var3;
                var3 = function onTapContextBarReply() {
                    _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                        var3 = _closure2_slot2;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0010_ip = 38; continue _fun0010 }
case 26:
                        var5 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var2 = 25;
                        var3 = var3[var2];
                        var2 = undefined;
                        var3 = var5.bind(var2)(var3);
                        var2 = var3.transitionTo;
                        var7 = _closure1_slot8;
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
case 38:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['onTapContextBarReply'] = var3;
                var2 = function onToggleReplyMention() {
                    _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                        var3 = _closure2_slot2;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0011_ip = 39; continue _fun0011 }
case 26:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var2 = 22;
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
case 39:
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
            var1 = 26;
            var1 = var3[var1];
            var4 = undefined;
            var3 = var2.bind(var4)(var1);
            var2 = var3.useNullableMessageAuthor;
            var6 = null;
            var5 = var6 == var8;
            var1 = undefined;
            if(var5) { _fun0007_ip = 40; continue _fun0007 }
case 41:
            var1 = var8.message;
case 40:
            var9 = var2.bind(var3)(var1);
            var3 = _closure1_slot10;
            var2 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 27;
            var1 = var5[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.TransitionGroup;
            var1 = {};
            var5 = _closure1_slot4;
            var1['component'] = var5;
            var11 = var6 != var8;
            if(!var11) { _fun0007_ip = 42; continue _fun0007 }
case 43:
            var11 = var6 != var9;
case 42:
            if(!var11) { _fun0007_ip = 44; continue _fun0007 }
case 45:
            var14 = _closure1_slot9;
            var13 = _closure1_slot17;
            var5 = {};
            var17 = _closure1_slot19;
            var15 = {};
            var15['pendingReply'] = var8;
            var15['pendingReplyAuthor'] = var9;
            var15['onTapContextBarReply'] = var19;
            var15['onCancelReplying'] = var16;
            var15['onToggleReplyMention'] = var18;
            var15 = var14.bind(var4)(var17, var15);
            var5['children'] = var15;
            var11 = var14.bind(var4)(var13, var5);
case 44:
            var5 = new Array(3);
            var5[0] = var11;
            var8 = var6 != var8;
            if(!var8) { _fun0007_ip = 46; continue _fun0007 }
case 47:
            var8 = var6 == var9;
case 46:
            if(!var8) { _fun0007_ip = 48; continue _fun0007 }
case 49:
            var13 = _closure1_slot9;
            var11 = _closure1_slot17;
            var9 = {};
            var15 = _closure1_slot18;
            var14 = {};
            var14['onCancelReplying'] = var16;
            var14 = var13.bind(var4)(var15, var14);
            var9['children'] = var14;
            var8 = var13.bind(var4)(var11, var9);
case 48:
            var5[1] = var8;
            var6 = var6 != var7;
            if(!var6) { _fun0007_ip = 50; continue _fun0007 }
case 51:
            var9 = _closure1_slot9;
            var8 = _closure1_slot17;
            var7 = {};
            var11 = _closure1_slot20;
            var10 = {};
            var10['onCancelEditing'] = var12;
            var10 = var9.bind(var4)(var11, var10);
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 50:
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 28;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'uikit-native/ChatInputContextBar.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();