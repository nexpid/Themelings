// app/modules/markup/MarkupReactRules.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var7;
    var4 = function MarkupText(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var6 = var3.children;
            var7 = var3.color;
            var4 = undefined;
            if(!(var7 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var7 = 'text-default';
case 2:
            var8 = var3.variant;
            if(!(var8 === var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var8 = 'text-sm/medium';
case 4:
            var2 = {'children': 0, 'color': 0, 'variant': 0};
            var11 = null;
            var12 = var2;
            var1 = silentSetPrototypeOf(var12, var11);
            var12 = {};
            var11 = var3;
            var10 = var2;
            var11 = copyDataProperties(var12, var11, var10);
            var3 = _closure1_slot14;
            var2 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 10;
            var1 = var9[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.Text;
            var1 = {};
            var1['variant'] = var8;
            var1['color'] = var7;
            var12 = var1;
            var5 = copyDataProperties(var12, var11);
            var5 = 'children';
            var1[4] = var6;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot20 = var4;
    var1 = function MarkupLink(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var1 = var2.state;
            var10 = var2.node;
            var _closure2_slot0 = var10;
            var9 = var2.output;
            var8 = var2.styles;
            var2 = _closure1_slot18;
            var5 = undefined;
            var11 = var2.bind(var5)();
            var2 = function getValidatedUrl() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = _closure2_slot0;
                    var4 = var1.target;
                    var2 = 'string';
                    var1 = typeof var4;
                    if(!(var2 === var1)) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                    var3 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var6 = 24;
                    var1 = var1[var6];
                    var5 = undefined;
                    var3 = var3.bind(var5)(var1);
                    var1 = var3.safeParseWithQuery;
                    var4 = var1.bind(var3)(var4);
                    var7 = null;
                    var3 = var7 == var4;
                    var1 = null;
                    if(var3) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                    var3 = var4.protocol;
                    var3 = var7 == var3;
                    var1 = null;
                    if(var3) { _fun0003_ip = 8; continue _fun0003 }
case 10:
                    var3 = var4.hostname;
                    var3 = var7 == var3;
                    var1 = null;
                    if(var3) { _fun0003_ip = 8; continue _fun0003 }
case 11:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var2 = var2[var6];
                    var3 = var3.bind(var5)(var2);
                    var2 = var3.format;
                    var1 = var2.bind(var3)(var4);
case 8:
                    return var1;
case 6:
                    var1 = null;
                    return var1;
                }
            };
            var _closure2_slot1 = var2;
            var2 = var1.linkVariant;
            var3 = null;
            var3 = var3 != var2;
            var12 = 'text-sm/medium';
            if(!var3) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var12 = var2;
case 12:
            var4 = _closure1_slot14;
            var3 = _closure1_slot0;
            var13 = _closure1_slot2;
            var2 = 10;
            var2 = var13[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.Text;
            var2 = {};
            var2['variant'] = var12;
            var12 = 'link';
            var2['accessibilityRole'] = var12;
            var8 = var8.link;
            if(var8) { _fun0002_ip = 14; continue _fun0002 }
case 6:
            var8 = var11.link;
case 14:
            var2['style'] = var8;
            var8 = function onPress(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = arg1;
                    var2 = _closure2_slot1;
                    var1 = undefined;
                    var6 = var2.bind(var1)();
                    var _closure3_slot0 = var6;
                    var2 = null;
                    if(!(var2 != var6)) { _fun0004_ip = 15; continue _fun0004 }
case 16:
                    var2 = var3.stopPropagation;
                    var2 = var2.bind(var3)();
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 25;
                    var2 = var4[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.handleClick;
                    var2 = {};
                    var2['href'] = var6;
                    var6 = function onConfirm() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 26;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.openURL;
                        var1 = _closure3_slot0;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var2['onConfirm'] = var6;
                    var5 = function trusted() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 27;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.isLinkTrusted;
                        var1 = _closure2_slot0;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var2['trusted'] = var5;
                    var2 = var3.bind(var4)(var2);
case 15:
                    return var1;
                }
            };
            var2['onPress'] = var8;
            var7 = function onLongPress(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var3 = arg1;
                    var2 = _closure2_slot1;
                    var1 = undefined;
                    var4 = var2.bind(var1)();
                    var2 = null;
                    if(!(var2 != var4)) { _fun0005_ip = 17; continue _fun0005 }
case 18:
                    var2 = var3.stopPropagation;
                    var2 = var2.bind(var3)();
                    var3 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var2 = 28;
                    var2 = var5[var2];
                    var3 = var3.bind(var1)(var2);
                    var2 = {};
                    var2['urlString'] = var4;
                    var2 = var3.bind(var1)(var2);
case 17:
                    return var1;
                }
            };
            var2['onLongPress'] = var7;
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var6 = 29;
            var6 = var8[var6];
            var8 = var7.bind(var5)(var6);
            var7 = var8.smartOutput;
            var6 = {};
            var16 = var6;
            var15 = var1;
            var11 = copyDataProperties(var16, var15);
            var12 = true;
            var11 = 'inLink';
            var6[10] = var12;
            var6 = var7.bind(var8)(var10, var9, var6);
            var2['children'] = var6;
            var1 = var1.key;
            var1 = var4.bind(var5)(var3, var2, var1);
            return var1;
        }
    };
    var _closure1_slot21 = var1;
    var1 = function MarkupMention(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var3 = arg1;
            var8 = var3.roleStyle;
            var1 = var3.state;
            var10 = var3.node;
            var _closure2_slot0 = var10;
            var9 = var3.output;
            var4 = var3.styles;
            var3 = _closure1_slot18;
            var5 = undefined;
            var3 = var3.bind(var5)();
            var11 = var4.mention;
            if(var11) { _fun0006_ip = 19; continue _fun0006 }
case 20:
            var11 = var3.mention;
case 19:
            var13 = var10.colorString;
            var3 = var13;
            if(!var3) { _fun0006_ip = 10; continue _fun0006 }
case 12:
            var6 = 'username';
            var3 = var6 === var8;
case 10:
            if(!var3) { _fun0006_ip = 21; continue _fun0006 }
case 22:
            var3 = {};
            var3['color'] = var13;
            var12 = var4.mention;
            var6 = null;
            var14 = var6 == var12;
            var4 = undefined;
            if(var14) { _fun0006_ip = 23; continue _fun0006 }
case 24:
            var4 = var12.backgroundColor;
case 23:
            if(!(var6 == var4)) { _fun0006_ip = 25; continue _fun0006 }
case 26:
            var12 = _closure1_slot0;
            var14 = _closure1_slot2;
            var6 = 30;
            var6 = var14[var6];
            var14 = var12.bind(var5)(var6);
            var12 = var14.hexWithOpacity;
            var6 = 0.1;
            var4 = var12.bind(var14)(var13, var6);
case 25:
            var3['backgroundColor'] = var4;
            var11 = var3;
case 21:
            var3 = var1.noStyleAndInteraction;
            var12 = 'button';
            if(!var3) { _fun0006_ip = 27; continue _fun0006 }
case 28:
            var12 = 'text';
case 27:
            var3 = var1.noStyleAndInteraction;
            var6 = undefined;
            if(var3) { _fun0006_ip = 29; continue _fun0006 }
case 30:
            var6 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var2 = _closure2_slot0;
                    var2 = var2.roleId;
                    var5 = null;
                    if(!(var5 != var2)) { _fun0007_ip = 31; continue _fun0007 }
case 3:
                    var2 = _closure2_slot0;
                    var2 = var2.guildId;
                    if(!(var5 == var2)) { _fun0007_ip = 32; continue _fun0007 }
case 31:
                    var2 = _closure2_slot0;
                    var3 = var2.roleName;
                    var2 = '@everyone';
                    if(!(var2 === var3)) { _fun0007_ip = 9; continue _fun0007 }
case 33:
                    var2 = _closure2_slot0;
                    var2 = var2.guildId;
                    if(!(var5 == var2)) { _fun0007_ip = 34; continue _fun0007 }
case 9:
                    var2 = _closure2_slot0;
                    var7 = var2.userId;
                    var6 = var2.channelId;
                    if(!(var5 == var7)) { _fun0007_ip = 35; continue _fun0007 }
case 36:
                    var3 = _closure1_slot1;
                    var13 = _closure1_slot2;
                    var2 = 18;
                    var2 = var13[var2];
                    var12 = undefined;
                    var4 = var3.bind(var12)(var2);
                    var3 = var4.show;
                    var2 = {};
                    var11 = _closure1_slot0;
                    var8 = 19;
                    var9 = var13[var8];
                    var9 = var11.bind(var12)(var9);
                    var14 = var9.intl;
                    var10 = var14.string;
                    var9 = var13[var8];
                    var9 = var11.bind(var12)(var9);
                    var9 = var9.t;
                    var9 = var9.r0DLNm;
                    var9 = var10.bind(var14)(var9);
                    var2['title'] = var9;
                    var9 = var13[var8];
                    var9 = var11.bind(var12)(var9);
                    var14 = var9.intl;
                    var10 = var14.string;
                    var9 = var13[var8];
                    var9 = var11.bind(var12)(var9);
                    var9 = var9.t;
                    var9 = var9.Fqqbhg;
                    var9 = var10.bind(var14)(var9);
                    var2['body'] = var9;
                    var9 = var13[var8];
                    var9 = var11.bind(var12)(var9);
                    var10 = var9.intl;
                    var9 = var10.string;
                    var8 = var13[var8];
                    var8 = var11.bind(var12)(var8);
                    var8 = var8.t;
                    var8 = var8.BddRzS;
                    var8 = var9.bind(var10)(var8);
                    var2['confirmText'] = var8;
                    var2 = var3.bind(var4)(var2);
                    _fun0007_ip = 37; continue _fun0007;
case 35:
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 17;
                    var2 = var4[var2];
                    var4 = undefined;
                    var3 = var3.bind(var4)(var2);
                    var2 = {};
                    var2['userId'] = var7;
                    var7 = var5 != var6;
                    var5 = undefined;
                    if(!var7) { _fun0007_ip = 38; continue _fun0007 }
case 39:
                    var5 = var6;
case 38:
                    var2['channelId'] = var5;
                    var2 = var3.bind(var4)(var2);
                    _fun0007_ip = 37; continue _fun0007;
case 34:
                    var9 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var3 = 31;
                    var3 = var10[var3];
                    var8 = undefined;
                    var7 = var9.bind(var8)(var3);
                    var6 = var7.openLazy;
                    var3 = _closure1_slot0;
                    var2 = 33;
                    var2 = var10[var2];
                    var4 = var3.bind(var8)(var2);
                    var2 = 32;
                    var3 = var10[var2];
                    var2 = var10.paths;
                    var5 = var4.bind(var8)(var3, var2);
                    var4 = {};
                    var2 = _closure2_slot0;
                    var3 = var2.guildId;
                    var4['guildId'] = var3;
                    var3 = 34;
                    var3 = var10[var3];
                    var9 = var9.bind(var8)(var3);
                    var8 = var9.castGuildIdAsEveryoneGuildRoleId;
                    var3 = var2.guildId;
                    var3 = var8.bind(var9)(var3);
                    var4['roleId'] = var3;
                    var2 = var2.channelId;
                    var4['channelId'] = var2;
                    var17 = 'RoleMembersActionSheet';
                    var15 = 'stack';
                    var19 = var7;
                    var18 = var5;
                    var16 = var4;
                    var2 = var19[var6](var18, var17, var16, var15, var14);
                    _fun0007_ip = 37; continue _fun0007;
case 32:
                    var5 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var4 = 31;
                    var4 = var2[var4];
                    var7 = undefined;
                    var6 = var5.bind(var7)(var4);
                    var5 = var6.openLazy;
                    var4 = _closure1_slot0;
                    var3 = 33;
                    var3 = var2[var3];
                    var4 = var4.bind(var7)(var3);
                    var3 = 32;
                    var3 = var2[var3];
                    var2 = var2.paths;
                    var18 = var4.bind(var7)(var3, var2);
                    var3 = {};
                    var1 = _closure2_slot0;
                    var2 = var1.guildId;
                    var3['guildId'] = var2;
                    var2 = var1.roleId;
                    var3['roleId'] = var2;
                    var1 = var1.channelId;
                    var3['channelId'] = var1;
                    var17 = 'RoleMembersActionSheet';
                    var15 = 'stack';
                    var19 = var6;
                    var16 = var3;
                    var1 = var19[var5](var18, var17, var16, var15, var14);
case 37:
                    var1 = undefined;
                    return var1;
                }
            };
case 29:
            var4 = _closure1_slot15;
            var3 = _closure1_slot20;
            var2 = {};
            var2['accessibilityRole'] = var12;
            var2['style'] = var11;
            var11 = null;
            var12 = var11 == var1;
            var11 = undefined;
            if(var12) { _fun0006_ip = 40; continue _fun0006 }
case 41:
            var11 = var1.textColor;
case 40:
            var2['color'] = var11;
            var2['onPress'] = var6;
            var6 = 'dot';
            var8 = var6 === var8;
            if(!var8) { _fun0006_ip = 42; continue _fun0006 }
case 43:
            var12 = _closure1_slot14;
            var11 = _closure1_slot0;
            var14 = _closure1_slot2;
            var6 = 23;
            var6 = var14[var6];
            var6 = var11.bind(var5)(var6);
            var11 = var6.RoleDot;
            var6 = {'color': null, 'colors': null, 'size': 'small'};
            var6['color'] = var13;
            var8 = var12.bind(var5)(var11, var6);
case 42:
            var6 = new Array(2);
            var6[0] = var8;
            var8 = _closure1_slot0;
            var11 = _closure1_slot2;
            var7 = 29;
            var7 = var11[var7];
            var8 = var8.bind(var5)(var7);
            var7 = var8.smartOutput;
            var7 = var7.bind(var8)(var10, var9, var1);
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var1.key;
            var1 = var4.bind(var5)(var3, var2, var1);
            return var1;
        }
    };
    var _closure1_slot22 = var1;
    var1 = function MarkupBlockQuote(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var2 = arg1;
            var7 = var2.styles;
            var1 = var2.state;
            var9 = var2.node;
            var8 = var2.output;
            var2 = _closure1_slot18;
            var5 = undefined;
            var10 = var2.bind(var5)();
            var4 = _closure1_slot14;
            var3 = _closure1_slot20;
            var2 = {};
            var7 = var7.blockQuote;
            if(var7) { _fun0008_ip = 44; continue _fun0008 }
case 45:
            var7 = var10.blockQuote;
case 44:
            var2['style'] = var7;
            var7 = null;
            var10 = var7 == var1;
            var7 = undefined;
            if(var10) { _fun0008_ip = 46; continue _fun0008 }
case 47:
            var7 = var1.textColor;
case 46:
            var2['color'] = var7;
            var7 = _closure1_slot0;
            var10 = _closure1_slot2;
            var6 = 29;
            var6 = var10[var6];
            var7 = var7.bind(var5)(var6);
            var6 = var7.smartOutput;
            var6 = var6.bind(var7)(var9, var8, var1);
            var2['children'] = var6;
            var1 = var1.key;
            var1 = var4.bind(var5)(var3, var2, var1);
            return var1;
        }
    };
    var _closure1_slot23 = var1;
    var1 = function MarkupInlineCode(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var3 = arg1;
            var2 = var3.styles;
            var1 = var3.state;
            var9 = var3.node;
            var _closure2_slot0 = var9;
            var8 = var3.output;
            var3 = _closure1_slot18;
            var5 = undefined;
            var3 = var3.bind(var5)();
            var4 = var1.noStyleAndInteraction;
            var11 = !var4;
            if(!var11) { _fun0009_ip = 19; continue _fun0009 }
case 48:
            var4 = var1.inLink;
            var11 = !var4;
case 19:
            var12 = 'text';
            if(!var11) { _fun0009_ip = 49; continue _fun0009 }
case 50:
            var12 = 'button';
case 49:
            var7 = {};
            var2 = var2.inlineCode;
            if(var2) { _fun0009_ip = 51; continue _fun0009 }
case 52:
            var2 = var3.inlineCode;
case 51:
            var15 = var7;
            var14 = var2;
            var2 = copyDataProperties(var15, var14);
            var2 = var1.inLink;
            if(!var2) { _fun0009_ip = 53; continue _fun0009 }
case 54:
            var2 = delete var7.color;
case 53:
            var4 = _closure1_slot14;
            var3 = _closure1_slot20;
            var2 = {};
            var2['accessibilityRole'] = var12;
            var2['style'] = var7;
            var7 = null;
            var12 = var7 == var1;
            var7 = undefined;
            if(var12) { _fun0009_ip = 55; continue _fun0009 }
case 56:
            var7 = var1.textColor;
case 55:
            var2['color'] = var7;
            var7 = undefined;
            if(!var11) { _fun0009_ip = 57; continue _fun0009 }
case 58:
            var7 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var1 = _closure2_slot0;
                    var6 = var1.content;
                    var2 = 'string';
                    var1 = typeof var6;
                    if(!(var2 === var1)) { _fun0010_ip = 59; continue _fun0010 }
case 60:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 20;
                    var1 = var4[var1];
                    var2 = undefined;
                    var5 = var3.bind(var2)(var1);
                    var1 = var5.copy;
                    var1 = var1.bind(var5)(var6);
                    var1 = 21;
                    var1 = var4[var1];
                    var2 = var3.bind(var2)(var1);
                    var1 = var2.presentCopiedToClipboard;
                    var1 = var1.bind(var2)();
case 59:
                    var1 = undefined;
                    return var1;
                }
            };
case 57:
            var2['onPress'] = var7;
            var7 = _closure1_slot0;
            var10 = _closure1_slot2;
            var6 = 29;
            var6 = var10[var6];
            var7 = var7.bind(var5)(var6);
            var6 = var7.smartOutput;
            var6 = var6.bind(var7)(var9, var8, var1);
            var2['children'] = var6;
            var1 = var1.key;
            var1 = var4.bind(var5)(var3, var2, var1);
            return var1;
        }
    };
    var _closure1_slot24 = var1;
    var1 = function MarkupCodeBlock(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var2 = arg1;
            var7 = var2.styles;
            var1 = var2.state;
            var9 = var2.node;
            var8 = var2.output;
            var2 = _closure1_slot18;
            var5 = undefined;
            var10 = var2.bind(var5)();
            var4 = _closure1_slot15;
            var3 = _closure1_slot20;
            var2 = {};
            var7 = var7.codeBlock;
            if(var7) { _fun0011_ip = 44; continue _fun0011 }
case 45:
            var7 = var10.codeBlock;
case 44:
            var2['style'] = var7;
            var7 = null;
            var10 = var7 == var1;
            var7 = undefined;
            if(var10) { _fun0011_ip = 46; continue _fun0011 }
case 47:
            var7 = var1.textColor;
case 46:
            var2['color'] = var7;
            var7 = _closure1_slot0;
            var10 = _closure1_slot2;
            var6 = 29;
            var6 = var10[var6];
            var7 = var7.bind(var5)(var6);
            var6 = var7.smartOutput;
            var7 = var6.bind(var7)(var9, var8, var1);
            var6 = new Array(2);
            var6[0] = var7;
            var7 = '\n';
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var1.key;
            var1 = var4.bind(var5)(var3, var2, var1);
            return var1;
        }
    };
    var _closure1_slot25 = var1;
    var1 = function MarkupCustomEmoji(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var1 = arg1;
            var9 = var1.styles;
            var2 = var1.state;
            var10 = var1.node;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 35;
            var1 = var4[var1];
            var6 = undefined;
            var1 = var3.bind(var6)(var1);
            var5 = var1.AnimateEmoji;
            var1 = var5.useSetting;
            var8 = var1.bind(var5)();
            var1 = 36;
            var1 = var4[var1];
            var5 = var3.bind(var6)(var1);
            var4 = var5.useStateFromStores;
            var1 = _closure1_slot8;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                var1 = _closure1_slot8;
                var1 = var1.useReducedMotion;
                return var1;
            };
            var7 = var4.bind(var5)(var3, var1);
            var1 = var10.src;
            var5 = _closure1_slot14;
            if(var1) { _fun0012_ip = 57; continue _fun0012 }
case 61:
            var4 = _closure1_slot20;
            var3 = {};
            var1 = null;
            var12 = var1 == var2;
            var1 = undefined;
            if(var12) { _fun0012_ip = 62; continue _fun0012 }
case 63:
            var1 = var2.textColor;
case 62:
            var3['color'] = var1;
            var1 = var10.alt;
            var3['children'] = var1;
            var1 = var2.key;
            var1 = var5.bind(var6)(var4, var3, var1);
            _fun0012_ip = 64; continue _fun0012;
case 57:
            var4 = _closure1_slot1;
            var12 = _closure1_slot2;
            var3 = 37;
            var3 = var12[var3];
            var4 = var4.bind(var6)(var3);
            var3 = {};
            var9 = var9.emoji;
            if(var9) { _fun0012_ip = 65; continue _fun0012 }
case 30:
            var11 = _closure1_slot17;
            var9 = var11.emoji;
case 65:
            var3['style'] = var9;
            var9 = {};
            var10 = var10.src;
            var9['uri'] = var10;
            var3['source'] = var9;
            var7 = !var7;
            if(!var7) { _fun0012_ip = 66; continue _fun0012 }
case 67:
            var7 = var8;
case 66:
            var3['enableAnimation'] = var7;
            var2 = var2.key;
            var1 = var5.bind(var6)(var4, var3, var2);
case 64:
            return var1;
        }
    };
    var _closure1_slot26 = var1;
    var1 = function MarkupChannelMention(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var1 = arg1;
            var2 = var1.state;
            var _closure2_slot0 = var2;
            var15 = var1.node;
            var _closure2_slot1 = var15;
            var14 = var1.output;
            var9 = var1.styles;
            var1 = var1.variants;
            var4 = _closure1_slot18;
            var6 = undefined;
            var10 = var4.bind(var6)();
            var4 = var2.noStyleAndInteraction;
            var11 = 'button';
            if(!var4) { _fun0013_ip = 68; continue _fun0013 }
case 69:
            var11 = 'text';
case 68:
            var7 = _closure1_slot15;
            var5 = _closure1_slot0;
            var12 = _closure1_slot2;
            var4 = 10;
            var4 = var12[var4];
            var4 = var5.bind(var6)(var4);
            var5 = var4.Text;
            var4 = {};
            var13 = var1.channelMentionText;
            var12 = null;
            var16 = var12 != var13;
            var1 = 'text-xs/medium';
            if(!var16) { _fun0013_ip = 70; continue _fun0013 }
case 71:
            var1 = var13;
case 70:
            var4['variant'] = var1;
            var1 = var10.channelMentionText;
            var4['style'] = var1;
            var1 = var15.inContent;
            var1 = var12 != var1;
            var13 = null;
            if(!var1) { _fun0013_ip = 72; continue _fun0013 }
case 73:
            var1 = var15.inContent;
            var13 = var14.bind(var6)(var1, var2);
case 72:
            var1 = new Array(3);
            var1[0] = var13;
            var13 = var15.inContent;
            var13 = var12 != var13;
            var12 = null;
            if(!var13) { _fun0013_ip = 74; continue _fun0013 }
case 75:
            var17 = _closure1_slot14;
            var16 = _closure1_slot0;
            var21 = _closure1_slot2;
            var20 = 23;
            var13 = var21[var20];
            var13 = var16.bind(var6)(var13);
            var16 = var13.ThemedIcon;
            var13 = {};
            var19 = _closure1_slot1;
            var18 = 12;
            var18 = var21[var18];
            var18 = var19.bind(var6)(var18);
            var18 = var18.colors;
            var18 = var18.MENTION_FOREGROUND;
            var13['themedColor'] = var18;
            var19 = _closure1_slot4;
            var18 = var19.getFontScale;
            var19 = var18.bind(var19)();
            var18 = 1.25;
            if(!(!(var19 < var18))) { _fun0013_ip = 76; continue _fun0013 }
case 77:
            var18 = 2;
            if(!(!(var19 < var18))) { _fun0013_ip = 78; continue _fun0013 }
case 79:
            var18 = {'width': 16, 'height': 16};
            _fun0013_ip = 80; continue _fun0013;
case 78:
            var18 = {'width': 12, 'height': 12};
case 80:
            _fun0013_ip = 81; continue _fun0013;
case 76:
            var18 = {'width': 8, 'height': 8};
case 81:
            var13['style'] = var18;
            var21 = _closure1_slot1;
            var18 = _closure1_slot2;
            var19 = 38;
            var19 = var18[var19];
            var19 = var21.bind(var6)(var19);
            var13['source'] = var19;
            var19 = _closure1_slot0;
            var18 = var18[var20];
            var18 = var19.bind(var6)(var18);
            var18 = var18.Icon;
            var18 = var18.Sizes;
            var18 = var18.CUSTOM;
            var13['size'] = var18;
            var12 = var17.bind(var6)(var16, var13);
case 74:
            var1[1] = var12;
            var13 = _closure1_slot0;
            var16 = _closure1_slot2;
            var12 = 29;
            var12 = var16[var12];
            var13 = var13.bind(var6)(var12);
            var12 = var13.smartOutput;
            var12 = var12.bind(var13)(var15, var14, var2);
            var1[2] = var12;
            var4['children'] = var1;
            var1 = var2.key;
            var7 = var7.bind(var6)(var5, var4, var1);
            var4 = var2.disablePressableChannelMention;
            var1 = var7;
            if(var4) { _fun0013_ip = 82; continue _fun0013 }
case 83:
            var5 = _closure1_slot14;
            var4 = _closure1_slot5;
            var3 = {};
            var3['accessibilityRole'] = var11;
            var9 = var9.channel;
            if(var9) { _fun0013_ip = 84; continue _fun0013 }
case 85:
            var9 = var10.channelMention;
case 84:
            var3['style'] = var9;
            var10 = var2.noStyleAndInteraction;
            var9 = 'auto';
            if(!var10) { _fun0013_ip = 86; continue _fun0013 }
case 87:
            var9 = 'none';
case 86:
            var3['pointerEvents'] = var9;
            var8 = function onPress() {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    var1 = _closure2_slot0;
                    var3 = var1.noStyleAndInteraction;
                    var7 = null;
                    var1 = null;
                    if(var3) { _fun0014_ip = 88; continue _fun0014 }
case 60:
                    var3 = _closure2_slot1;
                    var6 = var3.channelId;
                    var5 = var3.messageId;
                    var2 = _closure2_slot0;
                    var8 = var2.shouldNavigateBack;
                    var4 = var2.shouldCloseModal;
                    var3 = var7 != var6;
                    var2 = undefined;
                    var1 = undefined;
                    if(!var3) { _fun0014_ip = 88; continue _fun0014 }
case 17:
                    if(!(var7 == var5)) { _fun0014_ip = 89; continue _fun0014 }
case 90:
                    var10 = _closure1_slot9;
                    var9 = var10.getChannel;
                    var11 = var9.bind(var10)(var6);
                    if(!(var7 != var11)) { _fun0014_ip = 91; continue _fun0014 }
case 92:
                    var9 = var11.isGuildVocal;
                    var9 = var9.bind(var11)();
                    if(!var9) { _fun0014_ip = 91; continue _fun0014 }
case 93:
                    var10 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var9 = 14;
                    var9 = var12[var9];
                    var10 = var10.bind(var2)(var9);
                    var9 = var10.canViewChannel;
                    var9 = var9.bind(var10)(var11);
                    if(!var9) { _fun0014_ip = 91; continue _fun0014 }
case 94:
                    if(!var8) { _fun0014_ip = 95; continue _fun0014 }
case 96:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var8 = 15;
                    var8 = var10[var8];
                    var9 = var9.bind(var2)(var8);
                    var8 = var9.getRootNavigationRef;
                    var8 = var8.bind(var9)();
                    if(!(var7 != var8)) { _fun0014_ip = 95; continue _fun0014 }
case 97:
                    var7 = var8.goBack;
                    var7 = var7.bind(var8)();
case 95:
                    if(!var4) { _fun0014_ip = 91; continue _fun0014 }
case 98:
                    var7 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var4 = 16;
                    var4 = var8[var4];
                    var7 = var7.bind(var2)(var4);
                    var4 = var7.pop;
                    var4 = var4.bind(var7)();
case 91:
                    var4 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var3 = 13;
                    var3 = var7[var3];
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.transitionToChannel;
                    var3 = var3.bind(var4)(var6);
                    var1 = undefined;
                    _fun0014_ip = 88; continue _fun0014;
case 89:
                    var4 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var3 = 13;
                    var3 = var7[var3];
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.transitionToMessage;
                    var3 = var3.bind(var4)(var6, var5);
                    var1 = undefined;
case 88:
                    return var1;
                }
            };
            var3['onPress'] = var8;
            var3['children'] = var7;
            var2 = var2.key;
            var1 = var5.bind(var6)(var4, var3, var2);
case 82:
            return var1;
        }
    };
    var _closure1_slot27 = var1;
    var1 = function MarkupAttachmentLink(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var1 = arg1;
            var2 = var1.state;
            var _closure2_slot0 = var2;
            var15 = var1.node;
            var _closure2_slot1 = var15;
            var14 = var1.output;
            var9 = var1.styles;
            var1 = var1.variants;
            var4 = _closure1_slot18;
            var6 = undefined;
            var10 = var4.bind(var6)();
            var4 = var2.noStyleAndInteraction;
            var11 = 'button';
            if(!var4) { _fun0015_ip = 68; continue _fun0015 }
case 69:
            var11 = 'text';
case 68:
            var7 = _closure1_slot15;
            var5 = _closure1_slot0;
            var12 = _closure1_slot2;
            var4 = 10;
            var4 = var12[var4];
            var4 = var5.bind(var6)(var4);
            var5 = var4.Text;
            var4 = {};
            var12 = var1.channelMentionText;
            var1 = null;
            var13 = var1 != var12;
            var1 = 'text-xs/medium';
            if(!var13) { _fun0015_ip = 70; continue _fun0015 }
case 71:
            var1 = var12;
case 70:
            var4['variant'] = var1;
            var1 = var10.channelMentionText;
            var4['style'] = var1;
            var17 = _closure1_slot14;
            var13 = _closure1_slot0;
            var16 = _closure1_slot2;
            var1 = 23;
            var1 = var16[var1];
            var1 = var13.bind(var6)(var1);
            var12 = var1.ThemedIcon;
            var1 = {};
            var19 = _closure1_slot1;
            var18 = 12;
            var18 = var16[var18];
            var18 = var19.bind(var6)(var18);
            var18 = var18.colors;
            var18 = var18.MENTION_FOREGROUND;
            var1['themedColor'] = var18;
            var18 = 39;
            var18 = var16[var18];
            var18 = var19.bind(var6)(var18);
            var1['source'] = var18;
            var18 = _closure1_slot19;
            var18 = var18.bind(var6)();
            var1['size'] = var18;
            var12 = var17.bind(var6)(var12, var1);
            var1 = new Array(2);
            var1[0] = var12;
            var12 = 29;
            var12 = var16[var12];
            var13 = var13.bind(var6)(var12);
            var12 = var13.smartOutput;
            var12 = var12.bind(var13)(var15, var14, var2);
            var1[1] = var12;
            var4['children'] = var1;
            var1 = var2.key;
            var7 = var7.bind(var6)(var5, var4, var1);
            var4 = var2.disablePressableChannelMention;
            var1 = var7;
            if(var4) { _fun0015_ip = 99; continue _fun0015 }
case 100:
            var5 = _closure1_slot14;
            var4 = _closure1_slot5;
            var3 = {};
            var3['accessibilityRole'] = var11;
            var9 = var9.channel;
            if(var9) { _fun0015_ip = 101; continue _fun0015 }
case 102:
            var9 = var10.channelMention;
case 101:
            var3['style'] = var9;
            var10 = var2.noStyleAndInteraction;
            var9 = 'auto';
            if(!var10) { _fun0015_ip = 103; continue _fun0015 }
case 104:
            var9 = 'none';
case 103:
            var3['pointerEvents'] = var9;
            var8 = function onPress(arg1) {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                    var3 = arg1;
                    var2 = _closure2_slot0;
                    var2 = var2.noStyleAndInteraction;
                    if(var2) { _fun0016_ip = 13; continue _fun0016 }
case 3:
                    var2 = var3.stopPropagation;
                    var2 = var2.bind(var3)();
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 26;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.openURL;
                    var1 = _closure2_slot1;
                    var1 = var1.attachmentLink;
                    var1 = var2.bind(var3)(var1);
case 13:
                    var1 = undefined;
                    return var1;
                }
            };
            var3['onPress'] = var8;
            var3['children'] = var7;
            var2 = var2.key;
            var1 = var5.bind(var6)(var4, var3, var2);
case 99:
            return var1;
        }
    };
    var _closure1_slot28 = var1;
    var1 = function MarkupCommandMention(arg1) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
            var2 = arg1;
            var1 = var2.state;
            var9 = var2.node;
            var8 = var2.output;
            var6 = var2.styles;
            var3 = _closure1_slot18;
            var5 = undefined;
            var7 = var3.bind(var5)();
            var4 = _closure1_slot14;
            var3 = _closure1_slot1;
            var10 = _closure1_slot2;
            var2 = 40;
            var2 = var10[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var2['node'] = var9;
            var2['output'] = var8;
            var2['state'] = var1;
            var6 = var6.mention;
            if(var6) { _fun0017_ip = 51; continue _fun0017 }
case 52:
            var6 = var7.mention;
case 51:
            var2['style'] = var6;
            var1 = var1.key;
            var1 = var4.bind(var5)(var3, var2, var1);
            return var1;
        }
    };
    var _closure1_slot29 = var1;
    var5 = global;
    var10 = var5.Object;
    var9 = var10.defineProperty;
    var8 = {};
    var1 = true;
    var8['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var8);
    var1 = 0;
    var9 = var7[var1];
    var8 = metroImportAll;
    var1 = undefined;
    var8 = var8.bind(var1)(var9);
    var _closure1_slot3 = var8;
    var8 = 1;
    var8 = var7[var8];
    var8 = var6.bind(var1)(var8);
    var9 = var8.PixelRatio;
    var _closure1_slot4 = var9;
    var9 = var8.Pressable;
    var _closure1_slot5 = var9;
    var9 = var8.View;
    var _closure1_slot6 = var9;
    var8 = var8.Text;
    var _closure1_slot7 = var8;
    var8 = 2;
    var8 = var7[var8];
    var8 = var12.bind(var1)(var8);
    var _closure1_slot8 = var8;
    var8 = 3;
    var8 = var7[var8];
    var8 = var12.bind(var1)(var8);
    var _closure1_slot9 = var8;
    var9 = 4;
    var8 = var7[var9];
    var8 = var12.bind(var1)(var8);
    var _closure1_slot10 = var8;
    var8 = 5;
    var8 = var7[var8];
    var8 = var6.bind(var1)(var8);
    var10 = var8.EMOJI_CHAT_SIZE;
    var8 = var8.GuildFeatures;
    var _closure1_slot11 = var8;
    var8 = 6;
    var8 = var7[var8];
    var8 = var6.bind(var1)(var8);
    var11 = var8.StaticChannelRoute;
    var _closure1_slot12 = var11;
    var8 = var8.StaticChannelId;
    var _closure1_slot13 = var8;
    var8 = 7;
    var8 = var7[var8];
    var8 = var6.bind(var1)(var8);
    var13 = var8.Fonts;
    var8 = 8;
    var8 = var7[var8];
    var8 = var6.bind(var1)(var8);
    var11 = var8.jsx;
    var _closure1_slot14 = var11;
    var8 = var8.jsxs;
    var _closure1_slot15 = var8;
    var14 = var5.RegExp;
    var5 = 9;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var17 = var5.ANSI_CONTROL_SEQUENCE_RE;
    var5 = var14.prototype;
    var8 = Object.create(var5, {constructor: {value: var14}});
    var16 = 'g';
    var18 = var8;
    var5 = new var18[var14](var17, var16, var15);
    var5 = var5 instanceof Object ? var5 : var8;
    var _closure1_slot16 = var5;
    var5 = {};
    var8 = {};
    var8['width'] = var10;
    var8['height'] = var10;
    var10 = 'contain';
    var8['resizeMode'] = var10;
    var5['emoji'] = var8;
    var8 = {'paddingEnd': 2, 'paddingBottom': 1};
    var5['guildIcon'] = var8;
    var8 = {};
    var10 = 16;
    var8['paddingTop'] = var10;
    var5['list'] = var8;
    var8 = {};
    var8['paddingTop'] = var9;
    var5['listItem'] = var8;
    var8 = {};
    var9 = var13.CODE_BOLD;
    var8['fontFamily'] = var9;
    var5['bullet'] = var8;
    var8 = {};
    var9 = var13.PRIMARY_BOLD;
    var8['fontFamily'] = var9;
    var5['strong'] = var8;
    var _closure1_slot17 = var5;
    var5 = 11;
    var5 = var7[var5];
    var9 = var6.bind(var1)(var5);
    var8 = var9.createStyles;
    var5 = {};
    var10 = {};
    var11 = var13.PRIMARY_BOLD;
    var10['fontFamily'] = var11;
    var11 = 12;
    var14 = var7[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.TEXT_LINK;
    var10['color'] = var14;
    var5['link'] = var10;
    var10 = {'backgroundColor': null, 'borderRadius': 3, 'paddingHorizontal': 2, 'alignItems': 'center'};
    var14 = var7[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.MENTION_BACKGROUND;
    var10['backgroundColor'] = var14;
    var5['channelMention'] = var10;
    var10 = {};
    var14 = var7[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.MENTION_FOREGROUND;
    var10['color'] = var14;
    var5['channelMentionText'] = var10;
    var10 = {};
    var14 = var7[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.unsafe_rawColors;
    var14 = var14.BRAND_500;
    var10['color'] = var14;
    var14 = var7[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BORDER_SUBTLE;
    var10['backgroundColor'] = var14;
    var5['mention'] = var10;
    var10 = {};
    var14 = var13.CODE_BOLD;
    var10['fontFamily'] = var14;
    var14 = var7[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.TEXT_DEFAULT;
    var10['color'] = var14;
    var14 = var7[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_CODE;
    var10['backgroundColor'] = var14;
    var5['inlineCode'] = var10;
    var10 = {};
    var13 = var13.CODE_BOLD;
    var10['fontFamily'] = var13;
    var13 = var7[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.TEXT_DEFAULT;
    var10['color'] = var13;
    var13 = var7[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_CODE;
    var10['backgroundColor'] = var13;
    var5['codeBlock'] = var10;
    var10 = {'borderLeftWidth': 2, 'borderLeftColor': null, 'paddingLeft': 4};
    var11 = var7[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_MOD_NORMAL;
    var10['borderLeftColor'] = var11;
    var5['blockQuote'] = var10;
    var5 = var8.bind(var9)(var5);
    var _closure1_slot18 = var5;
    var5 = function getIconSize() {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
            var3 = _closure1_slot4;
            var1 = var3.getFontScale;
            var3 = var1.bind(var3)();
            var1 = 1;
            if(!(!(var3 < var1))) { _fun0018_ip = 105; continue _fun0018 }
case 7:
            var1 = 1.25;
            if(!(!(var3 < var1))) { _fun0018_ip = 47; continue _fun0018 }
case 106:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 23;
            var3 = var3[var1];
            var1 = undefined;
            var1 = var4.bind(var1)(var3);
            var1 = var1.Icon;
            var1 = var1.Sizes;
            var1 = var1.SMALL;
            _fun0018_ip = 53; continue _fun0018;
case 47:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var3 = 23;
            var4 = var4[var3];
            var3 = undefined;
            var3 = var5.bind(var3)(var4);
            var3 = var3.Icon;
            var3 = var3.Sizes;
            var1 = var3.EXTRA_SMALL;
case 53:
            _fun0018_ip = 107; continue _fun0018;
case 105:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 23;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var2 = var2.Icon;
            var2 = var2.Sizes;
            var1 = var2.EXTRA_SMALL_10;
case 107:
            return var1;
        }
    };
    var _closure1_slot19 = var5;
    var5 = 51;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/markup/MarkupReactRules.native.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function createRules() {
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
            var3 = arguments[0];
            var1 = arguments[1];
            var5 = undefined;
            if(!(var3 === var5)) { _fun0019_ip = 108; continue _fun0019 }
case 109:
            var3 = {};
case 108:
            var _closure2_slot0 = var3;
            if(!(var1 === var5)) { _fun0019_ip = 110; continue _fun0019 }
case 7:
            var1 = {};
case 110:
            var _closure2_slot1 = var1;
            var1 = function() {
                _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                    var2 = arguments[0];
                    var3 = undefined;
                    if(!(var2 === var3)) { _fun0020_ip = 111; continue _fun0020 }
case 112:
                    var2 = {};
case 111:
                    var _closure3_slot0 = var2;
                    var1 = function(arg1, arg2, arg3) {
                        _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                            var10 = arg1;
                            var9 = arg2;
                            var2 = arg3;
                            var1 = var2.noStyleAndInteraction;
                            var6 = _closure1_slot14;
                            if(var1) { _fun0021_ip = 50; continue _fun0021 }
case 2:
                            var5 = _closure1_slot21;
                            var4 = {};
                            var4['state'] = var2;
                            var4['node'] = var10;
                            var4['output'] = var9;
                            var1 = _closure3_slot0;
                            var4['styles'] = var1;
                            var3 = var2.key;
                            var1 = undefined;
                            var1 = var6.bind(var1)(var5, var4, var3);
                            _fun0021_ip = 113; continue _fun0021;
case 50:
                            var5 = _closure1_slot20;
                            var4 = {};
                            var3 = null;
                            var11 = var3 == var2;
                            var3 = undefined;
                            var8 = undefined;
                            if(var11) { _fun0021_ip = 92; continue _fun0021 }
case 36:
                            var8 = var2.textColor;
case 92:
                            var4['color'] = var8;
                            var8 = _closure1_slot0;
                            var11 = _closure1_slot2;
                            var7 = 29;
                            var7 = var11[var7];
                            var8 = var8.bind(var3)(var7);
                            var7 = var8.smartOutput;
                            var7 = var7.bind(var8)(var10, var9, var2);
                            var4['children'] = var7;
                            var2 = var2.key;
                            var1 = var6.bind(var3)(var5, var4, var2);
case 113:
                            return var1;
                        }
                    };
                    return var1;
                }
            };
            var12 = var1.bind(var5)(var3);
            var2 = function() {
                _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                    var4 = arguments[0];
                    var2 = arguments[1];
                    var3 = undefined;
                    if(!(var4 === var3)) { _fun0022_ip = 108; continue _fun0022 }
case 109:
                    var4 = {};
case 108:
                    var _closure3_slot0 = var4;
                    if(!(var2 === var3)) { _fun0022_ip = 16; continue _fun0022 }
case 7:
                    var2 = 'username';
case 16:
                    var _closure3_slot1 = var2;
                    var1 = function(arg1, arg2, arg3) {
                        var1 = arg3;
                        var5 = _closure1_slot14;
                        var4 = _closure1_slot22;
                        var3 = {};
                        var6 = _closure3_slot1;
                        var3['roleStyle'] = var6;
                        var3['state'] = var1;
                        var6 = arg1;
                        var3['node'] = var6;
                        var6 = arg2;
                        var3['output'] = var6;
                        var2 = _closure3_slot0;
                        var3['styles'] = var2;
                        var2 = var1.key;
                        var1 = undefined;
                        var1 = var5.bind(var1)(var4, var3, var2);
                        return var1;
                    };
                    return var1;
                }
            };
            var1 = arguments[2];
            var11 = var2.bind(var5)(var3, var1);
            var1 = {};
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 41;
            var7 = var6[var2];
            var7 = var3.bind(var5)(var7);
            var7 = var7.AST_KEY;
            var8 = var7.TEXT;
            var7 = {};
            var9 = function react(arg1, arg2, arg3) {
                _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                    var2 = arg1;
                    var1 = arg3;
                    var3 = var2.content;
                    var4 = 'string';
                    var3 = typeof var3;
                    if(!(var4 !== var3)) { _fun0023_ip = 24; continue _fun0023 }
case 18:
                    var6 = _closure1_slot14;
                    var5 = _closure1_slot20;
                    var4 = {};
                    var3 = null;
                    var9 = var3 == var1;
                    var3 = undefined;
                    var8 = undefined;
                    if(var9) { _fun0023_ip = 114; continue _fun0023 }
case 115:
                    var8 = var1.textColor;
case 114:
                    var4['color'] = var8;
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var7 = 29;
                    var7 = var9[var7];
                    var9 = var8.bind(var3)(var7);
                    var8 = var9.smartOutput;
                    var7 = arg2;
                    var7 = var8.bind(var9)(var2, var7, var1);
                    var4['children'] = var7;
                    var1 = var1.key;
                    var1 = var6.bind(var3)(var5, var4, var1);
                    _fun0023_ip = 23; continue _fun0023;
case 24:
                    var1 = var2.content;
case 23:
                    return var1;
                }
            };
            var7['react'] = var9;
            var1[7] = var7;
            var7 = var6[var2];
            var7 = var3.bind(var5)(var7);
            var7 = var7.AST_KEY;
            var8 = var7.STRIKETHROUGH;
            var7 = {};
            var9 = 42;
            var10 = var6[var9];
            var10 = var3.bind(var5)(var10);
            var13 = var10.DEFAULT_RULES;
            var10 = var6[var2];
            var10 = var3.bind(var5)(var10);
            var10 = var10.AST_KEY;
            var10 = var10.STRIKETHROUGH;
            var15 = var13[var10];
            var16 = var7;
            var10 = copyDataProperties(var16, var15);
            var13 = function react(arg1, arg2, arg3) {
                _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                    var1 = arg3;
                    var5 = _closure1_slot14;
                    var4 = _closure1_slot20;
                    var3 = {};
                    var2 = {};
                    var7 = 'line-through';
                    var2['textDecorationLine'] = var7;
                    var3['style'] = var2;
                    var2 = null;
                    var8 = var2 == var1;
                    var2 = undefined;
                    var7 = undefined;
                    if(var8) { _fun0024_ip = 116; continue _fun0024 }
case 117:
                    var7 = var1.textColor;
case 116:
                    var3['color'] = var7;
                    var7 = var1.textVariant;
                    var3['variant'] = var7;
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var6 = 29;
                    var6 = var8[var6];
                    var9 = var7.bind(var2)(var6);
                    var8 = var9.smartOutput;
                    var7 = arg1;
                    var6 = arg2;
                    var6 = var8.bind(var9)(var7, var6, var1);
                    var3['children'] = var6;
                    var1 = var1.key;
                    var1 = var5.bind(var2)(var4, var3, var1);
                    return var1;
                }
            };
            var10 = 'react';
            var7[9] = var13;
            var1[7] = var7;
            var7 = var6[var2];
            var7 = var3.bind(var5)(var7);
            var7 = var7.AST_KEY;
            var8 = var7.UNDERLINE;
            var7 = {};
            var13 = var6[var9];
            var13 = var3.bind(var5)(var13);
            var14 = var13.DEFAULT_RULES;
            var13 = var6[var2];
            var13 = var3.bind(var5)(var13);
            var13 = var13.AST_KEY;
            var13 = var13.UNDERLINE;
            var15 = var14[var13];
            var16 = var7;
            var13 = copyDataProperties(var16, var15);
            var13 = function react(arg1, arg2, arg3) {
                _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
                    var1 = arg3;
                    var5 = _closure1_slot14;
                    var4 = _closure1_slot20;
                    var3 = {};
                    var2 = {};
                    var7 = 'underline';
                    var2['textDecorationLine'] = var7;
                    var3['style'] = var2;
                    var2 = null;
                    var8 = var2 == var1;
                    var2 = undefined;
                    var7 = undefined;
                    if(var8) { _fun0025_ip = 118; continue _fun0025 }
case 119:
                    var7 = var1.textColor;
case 118:
                    var3['color'] = var7;
                    var7 = var1.textVariant;
                    var3['variant'] = var7;
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var6 = 29;
                    var6 = var8[var6];
                    var9 = var7.bind(var2)(var6);
                    var8 = var9.smartOutput;
                    var7 = arg1;
                    var6 = arg2;
                    var6 = var8.bind(var9)(var7, var6, var1);
                    var3['children'] = var6;
                    var1 = var1.key;
                    var1 = var5.bind(var2)(var4, var3, var1);
                    return var1;
                }
            };
            var7[9] = var13;
            var1[7] = var7;
            var7 = var6[var2];
            var7 = var3.bind(var5)(var7);
            var7 = var7.AST_KEY;
            var8 = var7.ITALICS;
            var7 = {};
            var13 = var6[var9];
            var13 = var3.bind(var5)(var13);
            var14 = var13.DEFAULT_RULES;
            var13 = var6[var2];
            var13 = var3.bind(var5)(var13);
            var13 = var13.AST_KEY;
            var13 = var13.ITALICS;
            var15 = var14[var13];
            var16 = var7;
            var13 = copyDataProperties(var16, var15);
            var13 = function react(arg1, arg2, arg3) {
                _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
                    var1 = arg3;
                    var5 = _closure1_slot14;
                    var4 = _closure1_slot20;
                    var3 = {};
                    var8 = {};
                    var2 = _closure2_slot0;
                    var9 = var2.em;
                    var7 = null;
                    var11 = var7 == var9;
                    var2 = undefined;
                    var10 = undefined;
                    if(var11) { _fun0026_ip = 118; continue _fun0026 }
case 119:
                    var10 = var9.fontStyle;
case 118:
                    var11 = var7 != var10;
                    var9 = 'italic';
                    if(!var11) { _fun0026_ip = 44; continue _fun0026 }
case 120:
                    var9 = var10;
case 44:
                    var8['fontStyle'] = var9;
                    var3['style'] = var8;
                    var8 = var7 == var1;
                    var7 = undefined;
                    if(var8) { _fun0026_ip = 52; continue _fun0026 }
case 121:
                    var7 = var1.textColor;
case 52:
                    var3['color'] = var7;
                    var7 = var1.textVariant;
                    var3['variant'] = var7;
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var6 = 29;
                    var6 = var8[var6];
                    var9 = var7.bind(var2)(var6);
                    var8 = var9.smartOutput;
                    var7 = arg1;
                    var6 = arg2;
                    var6 = var8.bind(var9)(var7, var6, var1);
                    var3['children'] = var6;
                    var1 = var1.key;
                    var1 = var5.bind(var2)(var4, var3, var1);
                    return var1;
                }
            };
            var7[9] = var13;
            var1[7] = var7;
            var7 = var6[var2];
            var7 = var3.bind(var5)(var7);
            var7 = var7.AST_KEY;
            var8 = var7.STRONG;
            var7 = {};
            var13 = var6[var9];
            var13 = var3.bind(var5)(var13);
            var14 = var13.DEFAULT_RULES;
            var13 = var6[var2];
            var13 = var3.bind(var5)(var13);
            var13 = var13.AST_KEY;
            var13 = var13.STRONG;
            var15 = var14[var13];
            var16 = var7;
            var13 = copyDataProperties(var16, var15);
            var13 = function react(arg1, arg2, arg3) {
                _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
                    var1 = arg3;
                    var5 = _closure1_slot14;
                    var4 = _closure1_slot20;
                    var3 = {};
                    var2 = _closure2_slot0;
                    var2 = var2.strong;
                    if(var2) { _fun0027_ip = 122; continue _fun0027 }
case 123:
                    var7 = _closure1_slot17;
                    var2 = var7.strong;
case 122:
                    var3['style'] = var2;
                    var2 = null;
                    var8 = var2 == var1;
                    var2 = undefined;
                    var7 = undefined;
                    if(var8) { _fun0027_ip = 124; continue _fun0027 }
case 125:
                    var7 = var1.textColor;
case 124:
                    var3['color'] = var7;
                    var7 = var1.textVariant;
                    var3['variant'] = var7;
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var6 = 29;
                    var6 = var8[var6];
                    var9 = var7.bind(var2)(var6);
                    var8 = var9.smartOutput;
                    var7 = arg1;
                    var6 = arg2;
                    var6 = var8.bind(var9)(var7, var6, var1);
                    var3['children'] = var6;
                    var1 = var1.key;
                    var1 = var5.bind(var2)(var4, var3, var1);
                    return var1;
                }
            };
            var7[9] = var13;
            var1[7] = var7;
            var7 = var6[var2];
            var7 = var3.bind(var5)(var7);
            var7 = var7.AST_KEY;
            var8 = var7.LINK;
            var7 = {};
            var13 = var6[var9];
            var13 = var3.bind(var5)(var13);
            var14 = var13.DEFAULT_RULES;
            var13 = var6[var2];
            var13 = var3.bind(var5)(var13);
            var13 = var13.AST_KEY;
            var13 = var13.LINK;
            var15 = var14[var13];
            var16 = var7;
            var13 = copyDataProperties(var16, var15);
            var7[9] = var12;
            var1[7] = var7;
            var7 = var6[var2];
            var7 = var3.bind(var5)(var7);
            var7 = var7.AST_KEY;
            var8 = var7.URL;
            var7 = {};
            var13 = var6[var9];
            var13 = var3.bind(var5)(var13);
            var14 = var13.DEFAULT_RULES;
            var13 = var6[var2];
            var13 = var3.bind(var5)(var13);
            var13 = var13.AST_KEY;
            var13 = var13.URL;
            var15 = var14[var13];
            var16 = var7;
            var13 = copyDataProperties(var16, var15);
            var7[9] = var12;
            var1[7] = var7;
            var7 = var6[var2];
            var7 = var3.bind(var5)(var7);
            var7 = var7.AST_KEY;
            var8 = var7.AUTOLINK;
            var7 = {};
            var13 = var6[var9];
            var13 = var3.bind(var5)(var13);
            var14 = var13.DEFAULT_RULES;
            var13 = var6[var2];
            var13 = var3.bind(var5)(var13);
            var13 = var13.AST_KEY;
            var13 = var13.AUTOLINK;
            var15 = var14[var13];
            var16 = var7;
            var13 = copyDataProperties(var16, var15);
            var7[9] = var12;
            var1[7] = var7;
            var7 = var6[var2];
            var7 = var3.bind(var5)(var7);
            var7 = var7.AST_KEY;
            var8 = var7.LINE_BREAK;
            var7 = {};
            var12 = var6[var9];
            var12 = var3.bind(var5)(var12);
            var13 = var12.DEFAULT_RULES;
            var12 = var6[var2];
            var12 = var3.bind(var5)(var12);
            var12 = var12.AST_KEY;
            var12 = var12.LINE_BREAK;
            var15 = var13[var12];
            var16 = var7;
            var12 = copyDataProperties(var16, var15);
            var12 = function react(arg1, arg2, arg3) {
                _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
case 0:
                    var1 = arg3;
                    var5 = _closure1_slot14;
                    var4 = _closure1_slot20;
                    var3 = {};
                    var2 = null;
                    var7 = var2 == var1;
                    var2 = undefined;
                    var6 = undefined;
                    if(var7) { _fun0028_ip = 31; continue _fun0028 }
case 126:
                    var6 = var1.textColor;
case 31:
                    var3['color'] = var6;
                    var6 = '\n';
                    var3['children'] = var6;
                    var1 = var1.key;
                    var1 = var5.bind(var2)(var4, var3, var1);
                    return var1;
                }
            };
            var7[9] = var12;
            var1[7] = var7;
            var7 = var6[var2];
            var7 = var3.bind(var5)(var7);
            var7 = var7.AST_KEY;
            var8 = var7.HIGHLIGHT;
            var7 = {};
            var12 = function react(arg1, arg2, arg3) {
                _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
case 0:
                    var1 = arg3;
                    var5 = _closure1_slot14;
                    var4 = _closure1_slot20;
                    var3 = {};
                    var2 = null;
                    var8 = var2 == var1;
                    var2 = undefined;
                    var7 = undefined;
                    if(var8) { _fun0029_ip = 31; continue _fun0029 }
case 126:
                    var7 = var1.textColor;
case 31:
                    var3['color'] = var7;
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var6 = 29;
                    var6 = var8[var6];
                    var9 = var7.bind(var2)(var6);
                    var8 = var9.smartOutput;
                    var7 = arg1;
                    var6 = arg2;
                    var6 = var8.bind(var9)(var7, var6, var1);
                    var3['children'] = var6;
                    var1 = var1.key;
                    var1 = var5.bind(var2)(var4, var3, var1);
                    return var1;
                }
            };
            var7['react'] = var12;
            var1[7] = var7;
            var7 = var6[var2];
            var7 = var3.bind(var5)(var7);
            var7 = var7.AST_KEY;
            var8 = var7.BLOCK_QUOTE;
            var7 = {};
            var12 = var6[var9];
            var12 = var3.bind(var5)(var12);
            var13 = var12.DEFAULT_RULES;
            var12 = var6[var2];
            var12 = var3.bind(var5)(var12);
            var12 = var12.AST_KEY;
            var12 = var12.BLOCK_QUOTE;
            var15 = var13[var12];
            var16 = var7;
            var12 = copyDataProperties(var16, var15);
            var12 = function react(arg1, arg2, arg3) {
                var1 = arg3;
                var5 = _closure1_slot14;
                var4 = _closure1_slot23;
                var3 = {};
                var2 = _closure2_slot0;
                var3['styles'] = var2;
                var3['state'] = var1;
                var2 = arg1;
                var3['node'] = var2;
                var2 = arg2;
                var3['output'] = var2;
                var2 = var1.key;
                var1 = undefined;
                var1 = var5.bind(var1)(var4, var3, var2);
                return var1;
            };
            var7[9] = var12;
            var1[7] = var7;
            var7 = var6[var2];
            var7 = var3.bind(var5)(var7);
            var7 = var7.AST_KEY;
            var8 = var7.PARAGRAPH;
            var7 = {};
            var12 = var6[var9];
            var12 = var3.bind(var5)(var12);
            var13 = var12.DEFAULT_RULES;
            var12 = var6[var2];
            var12 = var3.bind(var5)(var12);
            var12 = var12.AST_KEY;
            var12 = var12.PARAGRAPH;
            var15 = var13[var12];
            var16 = var7;
            var12 = copyDataProperties(var16, var15);
            var13 = 600;
            var12 = 'order';
            var7[11] = var13;
            var12 = function react(arg1, arg2, arg3) {
                _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
case 0:
                    var1 = arg3;
                    var5 = _closure1_slot14;
                    var4 = _closure1_slot20;
                    var3 = {};
                    var2 = null;
                    var8 = var2 == var1;
                    var2 = undefined;
                    var7 = undefined;
                    if(var8) { _fun0030_ip = 31; continue _fun0030 }
case 126:
                    var7 = var1.textColor;
case 31:
                    var3['color'] = var7;
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var6 = 29;
                    var6 = var8[var6];
                    var9 = var7.bind(var2)(var6);
                    var8 = var9.smartOutput;
                    var7 = arg1;
                    var6 = arg2;
                    var6 = var8.bind(var9)(var7, var6, var1);
                    var3['children'] = var6;
                    var1 = var1.key;
                    var1 = var5.bind(var2)(var4, var3, var1);
                    return var1;
                }
            };
            var7[9] = var12;
            var1[7] = var7;
            var7 = var6[var2];
            var7 = var3.bind(var5)(var7);
            var7 = var7.AST_KEY;
            var8 = var7.EMOJI;
            var7 = {};
            var12 = function react(arg1, arg2, arg3) {
                _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
case 0:
                    var2 = arg1;
                    var5 = _closure1_slot14;
                    var4 = _closure1_slot7;
                    var3 = {};
                    var1 = var2.surrogate;
                    if(var1) { _fun0031_ip = 127; continue _fun0031 }
case 2:
                    var1 = var2.content;
case 127:
                    var3['children'] = var1;
                    var1 = arg3;
                    var2 = var1.key;
                    var1 = undefined;
                    var1 = var5.bind(var1)(var4, var3, var2);
                    return var1;
                }
            };
            var7['react'] = var12;
            var1[7] = var7;
            var7 = var6[var2];
            var7 = var3.bind(var5)(var7);
            var7 = var7.AST_KEY;
            var8 = var7.CUSTOM_EMOJI;
            var7 = {};
            var12 = function react(arg1, arg2, arg3) {
                var1 = arg3;
                var5 = _closure1_slot14;
                var4 = _closure1_slot26;
                var3 = {};
                var3['state'] = var1;
                var2 = arg1;
                var3['node'] = var2;
                var2 = _closure2_slot0;
                var3['styles'] = var2;
                var2 = var1.key;
                var1 = undefined;
                var1 = var5.bind(var1)(var4, var3, var2);
                return var1;
            };
            var7['react'] = var12;
            var1[7] = var7;
            var7 = var6[var2];
            var7 = var3.bind(var5)(var7);
            var7 = var7.AST_KEY;
            var8 = var7.SPOILER;
            var7 = {};
            var12 = function react(arg1, arg2, arg3) {
                var1 = arg3;
                var5 = _closure1_slot14;
                var3 = _closure1_slot1;
                var8 = _closure1_slot2;
                var2 = 43;
                var2 = var8[var2];
                var4 = undefined;
                var3 = var3.bind(var4)(var2);
                var2 = {};
                var7 = _closure2_slot0;
                var9 = var7.spoiler;
                var2['spoilerStyle'] = var9;
                var7 = var7.spoilerRevealed;
                var2['spoilerRevealedStyle'] = var7;
                var7 = _closure1_slot0;
                var6 = 29;
                var6 = var8[var6];
                var9 = var7.bind(var4)(var6);
                var8 = var9.smartOutput;
                var7 = arg1;
                var6 = arg2;
                var6 = var8.bind(var9)(var7, var6, var1);
                var2['children'] = var6;
                var1 = var1.key;
                var1 = var5.bind(var4)(var3, var2, var1);
                return var1;
            };
            var7['react'] = var12;
            var1[7] = var7;
            var7 = var6[var2];
            var7 = var3.bind(var5)(var7);
            var7 = var7.AST_KEY;
            var8 = var7.STATIC_ROUTE_LINK;
            var7 = {};
            var12 = function react(arg1, arg2, arg3) {
                _fun0032: for(var _fun0032_ip = 0; ; ) switch(_fun0032_ip) {
case 0:
                    var10 = arg1;
                    var1 = arg3;
                    var _closure3_slot0 = var10;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var9 = 29;
                    var2 = var2[var9];
                    var5 = undefined;
                    var4 = var3.bind(var5)(var2);
                    var3 = var4.isStaticRouteIconType;
                    var2 = var10.channelId;
                    var2 = var3.bind(var4)(var2);
                    if(var2) { _fun0032_ip = 20; continue _fun0032 }
case 128:
                    var2 = null;
                    return var2;
case 20:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var4 = 44;
                    var2 = var2[var4];
                    var2 = var3.bind(var5)(var2);
                    var11 = var2.SignPostIcon;
                    var3 = var10.channelId;
                    var2 = _closure1_slot13;
                    var2 = var2.GUILD_HOME;
                    if(!(var2 !== var3)) { _fun0032_ip = 129; continue _fun0032 }
case 130:
                    var2 = _closure1_slot13;
                    var2 = var2.SERVER_GUIDE;
                    if(!(var2 !== var3)) { _fun0032_ip = 129; continue _fun0032 }
case 131:
                    var2 = _closure1_slot13;
                    var2 = var2.CHANNEL_BROWSER;
                    if(!(var2 !== var3)) { _fun0032_ip = 132; continue _fun0032 }
case 63:
                    var2 = _closure1_slot13;
                    var2 = var2.CUSTOMIZE_COMMUNITY;
                    if(!(var2 !== var3)) { _fun0032_ip = 132; continue _fun0032 }
case 56:
                    var2 = _closure1_slot13;
                    var2 = var2.LINKED_ROLES;
                    if(!(var2 === var3)) { _fun0032_ip = 133; continue _fun0032 }
case 134:
                    var3 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var2 = 46;
                    var2 = var8[var2];
                    var2 = var3.bind(var5)(var2);
                    var11 = var2.LinkIcon;
                    _fun0032_ip = 133; continue _fun0032;
case 132:
                    var3 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var2 = 45;
                    var2 = var8[var2];
                    var2 = var3.bind(var5)(var2);
                    var11 = var2.ChannelListMagnifyingGlassIcon;
                    _fun0032_ip = 133; continue _fun0032;
case 129:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var4];
                    var2 = var3.bind(var5)(var2);
                    var11 = var2.SignPostIcon;
case 133:
                    var4 = _closure1_slot15;
                    var3 = _closure1_slot20;
                    var2 = {};
                    var8 = 'button';
                    var2['accessibilityRole'] = var8;
                    var8 = _closure2_slot0;
                    var8 = var8.staticRouteLink;
                    var2['style'] = var8;
                    var8 = null;
                    var13 = var8 == var1;
                    var8 = undefined;
                    if(var13) { _fun0032_ip = 135; continue _fun0032 }
case 77:
                    var8 = var1.textColor;
case 135:
                    var2['color'] = var8;
                    var6 = function onPress() {
                        _fun0033: for(var _fun0033_ip = 0; ; ) switch(_fun0033_ip) {
case 0:
                            var1 = _closure3_slot0;
                            var4 = var1.guildId;
                            var5 = var1.channelId;
                            var3 = _closure1_slot10;
                            var2 = var3.getGuild;
                            var3 = var2.bind(var3)(var4);
                            var6 = null;
                            var2 = var6 != var4;
                            if(!var2) { _fun0033_ip = 115; continue _fun0033 }
case 119:
                            var2 = var6 != var3;
case 115:
                            if(!var2) { _fun0033_ip = 49; continue _fun0033 }
case 136:
                            var7 = var3.features;
                            var6 = var7.has;
                            var3 = _closure1_slot11;
                            var3 = var3.COMMUNITY;
                            var2 = var6.bind(var7)(var3);
case 49:
                            if(!var2) { _fun0033_ip = 137; continue _fun0033 }
case 138:
                            var2 = _closure1_slot13;
                            var2 = var2.GUILD_HOME;
                            var2 = var5 !== var2;
                            if(!var2) { _fun0033_ip = 93; continue _fun0033 }
case 139:
                            var3 = _closure1_slot13;
                            var3 = var3.SERVER_GUIDE;
                            var2 = var5 !== var3;
case 93:
                            if(var2) { _fun0033_ip = 137; continue _fun0033 }
case 140:
                            var5 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var2 = 13;
                            var3 = var3[var2];
                            var2 = undefined;
                            var3 = var5.bind(var2)(var3);
                            var2 = var3.transitionToStaticChannelRoute;
                            var1 = _closure1_slot12;
                            var1 = var1.GUILD_HOME;
                            var1 = var2.bind(var3)(var4, var1);
case 137:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var2['onPress'] = var6;
                    var8 = _closure1_slot14;
                    var6 = {};
                    var12 = _closure2_slot0;
                    var12 = var12.staticRouteLinkIcon;
                    var6['style'] = var12;
                    var12 = 'sm';
                    var6['size'] = var12;
                    var8 = var8.bind(var5)(var11, var6);
                    var6 = new Array(2);
                    var6[0] = var8;
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var7 = var7[var9];
                    var9 = var8.bind(var5)(var7);
                    var8 = var9.smartOutput;
                    var7 = arg2;
                    var7 = var8.bind(var9)(var10, var7, var1);
                    var6[1] = var7;
                    var2['children'] = var6;
                    var1 = var1.key;
                    var1 = var4.bind(var5)(var3, var2, var1);
                    return var1;
                }
            };
            var7['react'] = var12;
            var1[7] = var7;
            var7 = var6[var2];
            var7 = var3.bind(var5)(var7);
            var7 = var7.AST_KEY;
            var8 = var7.INLINE_CODE;
            var7 = {};
            var12 = var6[var9];
            var12 = var3.bind(var5)(var12);
            var13 = var12.DEFAULT_RULES;
            var12 = var6[var2];
            var12 = var3.bind(var5)(var12);
            var12 = var12.AST_KEY;
            var12 = var12.INLINE_CODE;
            var15 = var13[var12];
            var16 = var7;
            var12 = copyDataProperties(var16, var15);
            var12 = function react(arg1, arg2, arg3) {
                var1 = arg3;
                var5 = _closure1_slot14;
                var4 = _closure1_slot24;
                var3 = {};
                var2 = _closure2_slot0;
                var3['styles'] = var2;
                var3['state'] = var1;
                var2 = arg1;
                var3['node'] = var2;
                var2 = arg2;
                var3['output'] = var2;
                var2 = var1.key;
                var1 = undefined;
                var1 = var5.bind(var1)(var4, var3, var2);
                return var1;
            };
            var7[9] = var12;
            var1[7] = var7;
            var7 = var6[var2];
            var7 = var3.bind(var5)(var7);
            var7 = var7.AST_KEY;
            var8 = var7.CODE_BLOCK;
            var7 = {};
            var12 = var6[var9];
            var12 = var3.bind(var5)(var12);
            var13 = var12.DEFAULT_RULES;
            var12 = var6[var2];
            var12 = var3.bind(var5)(var12);
            var12 = var12.AST_KEY;
            var12 = var12.CODE_BLOCK;
            var15 = var13[var12];
            var16 = var7;
            var12 = copyDataProperties(var16, var15);
            var13 = function parse(arg1, arg2, arg3) {
                _fun0034: for(var _fun0034_ip = 0; ; ) switch(_fun0034_ip) {
case 0:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 42;
                    var1 = var6[var1];
                    var4 = undefined;
                    var1 = var5.bind(var4)(var1);
                    var3 = var1.DEFAULT_RULES;
                    var1 = 41;
                    var1 = var6[var1];
                    var1 = var5.bind(var4)(var1);
                    var1 = var1.AST_KEY;
                    var1 = var1.CODE_BLOCK;
                    var6 = var3[var1];
                    var5 = var6.parse;
                    var4 = arg1;
                    var3 = arg2;
                    var1 = arg3;
                    var1 = var5.bind(var6)(var4, var3, var1);
                    var4 = var1.lang;
                    var3 = var4.toLowerCase;
                    var4 = var3.bind(var4)();
                    var3 = 'ansi';
                    if(!(var3 === var4)) { _fun0034_ip = 141; continue _fun0034 }
case 142:
                    var5 = var1.content;
                    var4 = var5.replaceAll;
                    var3 = _closure1_slot16;
                    var2 = '';
                    var2 = var4.bind(var5)(var3, var2);
                    var1['content'] = var2;
case 141:
                    return var1;
                }
            };
            var12 = 'parse';
            var7[11] = var13;
            var12 = function react(arg1, arg2, arg3) {
                var1 = arg3;
                var5 = _closure1_slot14;
                var4 = _closure1_slot25;
                var3 = {};
                var2 = _closure2_slot0;
                var3['styles'] = var2;
                var3['state'] = var1;
                var2 = arg1;
                var3['node'] = var2;
                var2 = arg2;
                var3['output'] = var2;
                var2 = var1.key;
                var1 = undefined;
                var1 = var5.bind(var1)(var4, var3, var2);
                return var1;
            };
            var7[9] = var12;
            var1[7] = var7;
            var7 = var6[var2];
            var7 = var3.bind(var5)(var7);
            var7 = var7.AST_KEY;
            var8 = var7.MENTION;
            var7 = {};
            var12 = var6[var9];
            var12 = var3.bind(var5)(var12);
            var13 = var12.DEFAULT_RULES;
            var12 = var6[var2];
            var12 = var3.bind(var5)(var12);
            var12 = var12.AST_KEY;
            var12 = var12.MENTION;
            var15 = var13[var12];
            var16 = var7;
            var12 = copyDataProperties(var16, var15);
            var7[9] = var11;
            var1[7] = var7;
            var7 = var6[var2];
            var7 = var3.bind(var5)(var7);
            var7 = var7.AST_KEY;
            var8 = var7.CHANNEL_MENTION;
            var7 = {};
            var11 = var6[var9];
            var11 = var3.bind(var5)(var11);
            var12 = var11.DEFAULT_RULES;
            var11 = var6[var2];
            var11 = var3.bind(var5)(var11);
            var11 = var11.AST_KEY;
            var11 = var11.CHANNEL_MENTION;
            var15 = var12[var11];
            var16 = var7;
            var11 = copyDataProperties(var16, var15);
            var11 = function react(arg1, arg2, arg3) {
                var1 = arg3;
                var5 = _closure1_slot14;
                var4 = _closure1_slot27;
                var3 = {};
                var6 = _closure2_slot0;
                var3['styles'] = var6;
                var3['state'] = var1;
                var6 = arg1;
                var3['node'] = var6;
                var6 = arg2;
                var3['output'] = var6;
                var2 = _closure2_slot1;
                var3['variants'] = var2;
                var2 = var1.key;
                var1 = undefined;
                var1 = var5.bind(var1)(var4, var3, var2);
                return var1;
            };
            var7[9] = var11;
            var1[7] = var7;
            var7 = var6[var2];
            var7 = var3.bind(var5)(var7);
            var7 = var7.AST_KEY;
            var8 = var7.ATTACHMENT_LINK;
            var7 = {};
            var11 = var6[var9];
            var11 = var3.bind(var5)(var11);
            var12 = var11.DEFAULT_RULES;
            var11 = var6[var2];
            var11 = var3.bind(var5)(var11);
            var11 = var11.AST_KEY;
            var11 = var11.ATTACHMENT_LINK;
            var15 = var12[var11];
            var16 = var7;
            var11 = copyDataProperties(var16, var15);
            var11 = function react(arg1, arg2, arg3) {
                var1 = arg3;
                var5 = _closure1_slot14;
                var4 = _closure1_slot28;
                var3 = {};
                var6 = _closure2_slot0;
                var3['styles'] = var6;
                var3['state'] = var1;
                var6 = arg1;
                var3['node'] = var6;
                var6 = arg2;
                var3['output'] = var6;
                var2 = _closure2_slot1;
                var3['variants'] = var2;
                var2 = var1.key;
                var1 = undefined;
                var1 = var5.bind(var1)(var4, var3, var2);
                return var1;
            };
            var7[9] = var11;
            var1[7] = var7;
            var7 = var6[var2];
            var7 = var3.bind(var5)(var7);
            var7 = var7.AST_KEY;
            var8 = var7.SOUNDBOARD;
            var7 = {};
            var11 = function react(arg1, arg2, arg3) {
                var1 = arg3;
                var5 = _closure1_slot15;
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var2 = 10;
                var2 = var8[var2];
                var4 = undefined;
                var2 = var7.bind(var4)(var2);
                var3 = var2.Text;
                var2 = {};
                var6 = 'text-md/bold';
                var2['variant'] = var6;
                var6 = 29;
                var6 = var8[var6];
                var9 = var7.bind(var4)(var6);
                var8 = var9.smartOutput;
                var7 = arg1;
                var6 = arg2;
                var7 = var8.bind(var9)(var7, var6, var1);
                var6 = ['<sound:'];
                var6[1] = var7;
                var7 = '>';
                var6[2] = var7;
                var2['children'] = var6;
                var1 = var1.key;
                var1 = var5.bind(var4)(var3, var2, var1);
                return var1;
            };
            var7['react'] = var11;
            var1[7] = var7;
            var7 = var6[var2];
            var7 = var3.bind(var5)(var7);
            var7 = var7.AST_KEY;
            var8 = var7.GUILD;
            var7 = {};
            var11 = function react(arg1, arg2, arg3) {
                _fun0035: for(var _fun0035_ip = 0; ; ) switch(_fun0035_ip) {
case 0:
                    var13 = arg1;
                    var1 = arg3;
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 47;
                    var2 = var4[var2];
                    var5 = undefined;
                    var3 = var3.bind(var5)(var2);
                    var2 = var3.isAndroid;
                    var2 = var2.bind(var3)();
                    var7 = 2;
                    if(var2) { _fun0035_ip = 10; continue _fun0035 }
case 143:
                    var3 = _closure1_slot4;
                    var2 = var3.getFontScale;
                    var3 = var2.bind(var3)();
                    var2 = 1.5;
                    var3 = var3 < var2;
                    var2 = 0;
                    if(!var3) { _fun0035_ip = 144; continue _fun0035 }
case 138:
                    var2 = 1;
case 144:
                    var7 = var2;
case 10:
                    var2 = var13.icon;
                    var11 = null;
                    var2 = var11 != var2;
                    var9 = null;
                    if(!var2) { _fun0035_ip = 77; continue _fun0035 }
case 130:
                    var4 = _closure1_slot14;
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var12 = 22;
                    var2 = var2[var12];
                    var3 = var3.bind(var5)(var2);
                    var2 = {};
                    var6 = {};
                    var6['top'] = var7;
                    var2['style'] = var6;
                    var6 = var13.icon;
                    var2['icon'] = var6;
                    var7 = _closure1_slot4;
                    var6 = var7.getFontScale;
                    var7 = var6.bind(var7)();
                    var6 = 1;
                    if(!(!(var7 < var6))) { _fun0035_ip = 145; continue _fun0035 }
case 146:
                    var6 = 1.25;
                    if(!(!(var7 < var6))) { _fun0035_ip = 147; continue _fun0035 }
case 148:
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var6 = var6[var12];
                    var6 = var7.bind(var5)(var6);
                    var6 = var6.GuildIconSizes;
                    var6 = var6.XXSMALL;
                    _fun0035_ip = 149; continue _fun0035;
case 147:
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var7 = var7[var12];
                    var7 = var8.bind(var5)(var7);
                    var7 = var7.GuildIconSizes;
                    var6 = var7.XXSMALL_12;
case 149:
                    _fun0035_ip = 150; continue _fun0035;
case 145:
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var7 = var7[var12];
                    var7 = var8.bind(var5)(var7);
                    var7 = var7.GuildIconSizes;
                    var6 = var7.XXXSMALL;
case 150:
                    var2['size'] = var6;
                    var9 = var4.bind(var5)(var3, var2);
case 77:
                    var4 = _closure1_slot15;
                    var3 = _closure1_slot20;
                    var2 = {};
                    var7 = var11 == var1;
                    var6 = undefined;
                    if(var7) { _fun0035_ip = 151; continue _fun0035 }
case 152:
                    var6 = var1.textColor;
case 151:
                    var2['color'] = var6;
                    var8 = _closure1_slot14;
                    var7 = _closure1_slot6;
                    var6 = {};
                    var12 = _closure1_slot17;
                    var12 = var12.guildIcon;
                    var6['style'] = var12;
                    var6['children'] = var9;
                    var7 = var8.bind(var5)(var7, var6);
                    var6 = new Array(2);
                    var6[0] = var7;
                    var9 = _closure1_slot14;
                    var8 = _closure1_slot20;
                    var7 = {};
                    var12 = var11 == var1;
                    var11 = undefined;
                    if(var12) { _fun0035_ip = 153; continue _fun0035 }
case 154:
                    var11 = var1.textColor;
case 153:
                    var7['color'] = var11;
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var10 = 29;
                    var10 = var12[var10];
                    var12 = var11.bind(var5)(var10);
                    var11 = var12.smartOutput;
                    var10 = arg2;
                    var10 = var11.bind(var12)(var13, var10, var1);
                    var7['children'] = var10;
                    var7 = var9.bind(var5)(var8, var7);
                    var6[1] = var7;
                    var2['children'] = var6;
                    var1 = var1.key;
                    var1 = var4.bind(var5)(var3, var2, var1);
                    return var1;
                }
            };
            var7['react'] = var11;
            var1[7] = var7;
            var7 = var6[var2];
            var7 = var3.bind(var5)(var7);
            var7 = var7.AST_KEY;
            var8 = var7.CHANNEL;
            var7 = {};
            var11 = function react(arg1, arg2, arg3) {
                _fun0036: for(var _fun0036_ip = 0; ; ) switch(_fun0036_ip) {
case 0:
                    var10 = arg1;
                    var1 = arg3;
                    var3 = var10.iconType;
                    var6 = null;
                    var4 = var6 != var3;
                    var2 = 'text';
                    var11 = var2;
                    if(!var4) { _fun0036_ip = 155; continue _fun0036 }
case 16:
                    var11 = var3;
case 155:
                    var13 = 2;
                    if(!(var2 === var11)) { _fun0036_ip = 4; continue _fun0036 }
case 106:
                    var13 = 0;
case 4:
                    var4 = _closure1_slot14;
                    var9 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var2 = 23;
                    var2 = var12[var2];
                    var5 = undefined;
                    var2 = var9.bind(var5)(var2);
                    var3 = var2.ThemedIcon;
                    var2 = {};
                    var14 = _closure1_slot1;
                    var8 = 12;
                    var8 = var12[var8];
                    var8 = var14.bind(var5)(var8);
                    var8 = var8.colors;
                    var8 = var8.MENTION_FOREGROUND;
                    var2['themedColor'] = var8;
                    var8 = 48;
                    var8 = var12[var8];
                    var9 = var9.bind(var5)(var8);
                    var8 = var9.getChannelMentionIcon;
                    var8 = var8.bind(var9)(var11);
                    var2['source'] = var8;
                    var8 = _closure1_slot19;
                    var8 = var8.bind(var5)();
                    var2['size'] = var8;
                    var8 = {};
                    var9 = 1;
                    var8['top'] = var9;
                    var2['style'] = var8;
                    var11 = var4.bind(var5)(var3, var2);
                    var4 = _closure1_slot15;
                    var3 = _closure1_slot20;
                    var2 = {};
                    var8 = var6 == var1;
                    var6 = undefined;
                    if(var8) { _fun0036_ip = 95; continue _fun0036 }
case 156:
                    var6 = var1.textColor;
case 95:
                    var2['color'] = var6;
                    var9 = _closure1_slot14;
                    var8 = _closure1_slot6;
                    var6 = {};
                    var12 = {};
                    var12['paddingEnd'] = var13;
                    var6['style'] = var12;
                    var6['children'] = var11;
                    var8 = var9.bind(var5)(var8, var6);
                    var6 = new Array(2);
                    var6[0] = var8;
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var7 = 29;
                    var7 = var9[var7];
                    var9 = var8.bind(var5)(var7);
                    var8 = var9.smartOutput;
                    var7 = arg2;
                    var7 = var8.bind(var9)(var10, var7, var1);
                    var6[1] = var7;
                    var2['children'] = var6;
                    var1 = var1.key;
                    var1 = var4.bind(var5)(var3, var2, var1);
                    return var1;
                }
            };
            var7['react'] = var11;
            var1[7] = var7;
            var7 = var6[var2];
            var7 = var3.bind(var5)(var7);
            var7 = var7.AST_KEY;
            var8 = var7.COMMAND_MENTION;
            var7 = {};
            var11 = var6[var9];
            var11 = var3.bind(var5)(var11);
            var12 = var11.DEFAULT_RULES;
            var11 = var6[var2];
            var11 = var3.bind(var5)(var11);
            var11 = var11.AST_KEY;
            var11 = var11.COMMAND_MENTION;
            var15 = var12[var11];
            var16 = var7;
            var11 = copyDataProperties(var16, var15);
            var11 = function react(arg1, arg2, arg3) {
                var1 = arg3;
                var5 = _closure1_slot14;
                var4 = _closure1_slot29;
                var3 = {};
                var2 = _closure2_slot0;
                var3['styles'] = var2;
                var3['state'] = var1;
                var2 = arg1;
                var3['node'] = var2;
                var2 = arg2;
                var3['output'] = var2;
                var2 = var1.key;
                var1 = undefined;
                var1 = var5.bind(var1)(var4, var3, var2);
                return var1;
            };
            var7[9] = var11;
            var1[7] = var7;
            var7 = var6[var2];
            var7 = var3.bind(var5)(var7);
            var7 = var7.AST_KEY;
            var8 = var7.GAME_MENTION;
            var7 = {};
            var11 = function react(arg1, arg2, arg3) {
                var1 = arg3;
                var5 = _closure1_slot14;
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 49;
                var2 = var4[var2];
                var4 = undefined;
                var3 = var3.bind(var4)(var2);
                var2 = {};
                var6 = arg1;
                var2['node'] = var6;
                var2['state'] = var1;
                var1 = var1.key;
                var1 = var5.bind(var4)(var3, var2, var1);
                return var1;
            };
            var7['react'] = var11;
            var1[7] = var7;
            var7 = var6[var2];
            var7 = var3.bind(var5)(var7);
            var7 = var7.AST_KEY;
            var8 = var7.TIMESTAMP;
            var7 = {};
            var11 = var6[var9];
            var11 = var3.bind(var5)(var11);
            var12 = var11.DEFAULT_RULES;
            var11 = var6[var2];
            var11 = var3.bind(var5)(var11);
            var11 = var11.AST_KEY;
            var11 = var11.TIMESTAMP;
            var15 = var12[var11];
            var16 = var7;
            var11 = copyDataProperties(var16, var15);
            var11 = function react(arg1, arg2, arg3) {
                var5 = _closure1_slot14;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 50;
                var1 = var3[var1];
                var4 = undefined;
                var3 = var2.bind(var4)(var1);
                var2 = {};
                var1 = arg1;
                var2['node'] = var1;
                var1 = _closure2_slot0;
                var1 = var1.timestamp;
                var2['style'] = var1;
                var1 = arg3;
                var1 = var1.key;
                var1 = var5.bind(var4)(var3, var2, var1);
                return var1;
            };
            var7[9] = var11;
            var1[7] = var7;
            var7 = var6[var2];
            var7 = var3.bind(var5)(var7);
            var7 = var7.AST_KEY;
            var8 = var7.LIST;
            var7 = {};
            var9 = var6[var9];
            var9 = var3.bind(var5)(var9);
            var11 = var9.DEFAULT_RULES;
            var9 = var6[var2];
            var9 = var3.bind(var5)(var9);
            var9 = var9.AST_KEY;
            var9 = var9.LIST;
            var15 = var11[var9];
            var16 = var7;
            var9 = copyDataProperties(var16, var15);
            var9 = function react(arg1, arg2, arg3) {
                _fun0037: for(var _fun0037_ip = 0; ; ) switch(_fun0037_ip) {
case 0:
                    var3 = arg1;
                    var1 = arg3;
                    var _closure3_slot0 = var3;
                    var4 = arg2;
                    var _closure3_slot1 = var4;
                    var _closure3_slot2 = var1;
                    var4 = var1.level;
                    var5 = null;
                    var6 = var5 != var4;
                    var4 = 0;
                    if(!var6) { _fun0037_ip = 117; continue _fun0037 }
case 4:
                    var4 = var1.level;
case 117:
                    var _closure3_slot3 = var4;
                    var4 = var3.start;
                    if(!(var5 == var4)) { _fun0037_ip = 19; continue _fun0037 }
case 125:
                    var4 = var1.start;
                    _fun0037_ip = 9; continue _fun0037;
case 19:
                    var4 = var3.start;
case 9:
                    var _closure3_slot4 = var4;
                    var4 = var3.items;
                    var3 = var4.map;
                    var2 = function(arg1, arg2) {
                        _fun0038: for(var _fun0038_ip = 0; ; ) switch(_fun0038_ip) {
case 0:
                            var16 = arg1;
                            var9 = arg2;
                            var _closure4_slot0 = var16;
                            var1 = _closure3_slot3;
                            var8 = '⚬ ';
                            var10 = 0;
                            if(!(var10 === var1)) { _fun0038_ip = 21; continue _fun0038 }
case 5:
                            var1 = _closure3_slot0;
                            var1 = var1.ordered;
                            var2 = 'boolean';
                            var1 = typeof var1;
                            if(!(var2 === var1)) { _fun0038_ip = 12; continue _fun0038 }
case 33:
                            var1 = _closure3_slot0;
                            var1 = var1.ordered;
                            if(!var1) { _fun0038_ip = 12; continue _fun0038 }
case 69:
                            var2 = _closure3_slot4;
                            var1 = null;
                            if(!(var1 == var2)) { _fun0038_ip = 6; continue _fun0038 }
case 12:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 47;
                            var2 = var2[var1];
                            var1 = undefined;
                            var2 = var3.bind(var1)(var2);
                            var1 = var2.isAndroid;
                            var2 = var1.bind(var2)();
                            var1 = '● ';
                            if(!var2) { _fun0038_ip = 8; continue _fun0038 }
case 157:
                            var1 = '• ';
case 8:
                            _fun0038_ip = 57; continue _fun0038;
case 6:
                            var2 = _closure3_slot4;
                            var5 = var2 + var9;
                            var2 = global;
                            var2 = var2.HermesInternal;
                            var4 = var2.concat;
                            var3 = '';
                            var2 = '. ';
                            var1 = var4.bind(var3)(var5, var2);
case 57:
                            var8 = var1;
case 21:
                            var15 = {};
                            var1 = _closure3_slot2;
                            var24 = var15;
                            var23 = var1;
                            var2 = copyDataProperties(var24, var23);
                            var4 = var1.key;
                            var1 = global;
                            var2 = var1.HermesInternal;
                            var3 = var2.concat;
                            var12 = '';
                            var2 = '-';
                            var3 = var3.bind(var12)(var4, var2, var9);
                            var2 = 'key';
                            var15[1] = var3;
                            var2 = _closure3_slot3;
                            var11 = 1;
                            var3 = var2 + var11;
                            var2 = 'level';
                            var15[1] = var3;
                            var2 = _closure3_slot4;
                            var19 = null;
                            if(!(var19 == var2)) { _fun0038_ip = 158; continue _fun0038 }
case 159:
                            var3 = _closure3_slot4;
                            _fun0038_ip = 160; continue _fun0038;
case 158:
                            var2 = _closure3_slot4;
                            var3 = var2 + var11;
case 160:
                            var2 = 'start';
                            var15[1] = var3;
                            var _closure4_slot1 = var15;
                            var5 = _closure1_slot15;
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var2 = 10;
                            var2 = var4[var2];
                            var4 = undefined;
                            var2 = var3.bind(var4)(var2);
                            var3 = var2.Text;
                            var2 = {};
                            var13 = _closure1_slot17;
                            var13 = var13.listItem;
                            var2['style'] = var13;
                            var13 = 'text-sm/medium';
                            var2['variant'] = var13;
                            var18 = _closure1_slot15;
                            var17 = _closure1_slot20;
                            var13 = {};
                            var7 = _closure1_slot17;
                            var7 = var7.bullet;
                            var13['style'] = var7;
                            var7 = _closure3_slot2;
                            var19 = var19 == var7;
                            var7 = undefined;
                            if(var19) { _fun0038_ip = 161; continue _fun0038 }
case 153:
                            var19 = _closure3_slot2;
                            var7 = var19.textColor;
case 161:
                            var13['color'] = var7;
                            var7 = _closure3_slot3;
                            var7 = var7 > var10;
                            var10 = var12;
                            if(!var7) { _fun0038_ip = 162; continue _fun0038 }
case 163:
                            var20 = '  ';
                            var19 = var20.repeat;
                            var7 = _closure3_slot3;
                            var10 = var19.bind(var20)(var7);
case 162:
                            var7 = new Array(2);
                            var7[0] = var10;
                            var7[1] = var8;
                            var13['children'] = var7;
                            var7 = _closure3_slot2;
                            var24 = var7.key;
                            var7 = var1.HermesInternal;
                            var19 = var7.concat;
                            var8 = 'list-';
                            var7 = '-item-';
                            var21 = '-bullet';
                            var25 = var8;
                            var23 = var7;
                            var22 = var9;
                            var10 = var25[var19](var24, var23, var22, var21, var20);
                            var13 = var18.bind(var4)(var17, var13, var10);
                            var10 = new Array(3);
                            var10[0] = var13;
                            var17 = var1.Array;
                            var13 = var17.isArray;
                            var13 = var13.bind(var17)(var16);
                            if(var13) { _fun0038_ip = 164; continue _fun0038 }
case 165:
                            var13 = _closure3_slot1;
                            var13 = var13.bind(var4)(var16, var15);
                            _fun0038_ip = 166; continue _fun0038;
case 164:
                            var15 = var16.map;
                            var14 = function(arg1, arg2) {
                                _fun0039: for(var _fun0039_ip = 0; ; ) switch(_fun0039_ip) {
case 0:
                                    var11 = arg1;
                                    var5 = arg2;
                                    var2 = var11.type;
                                    var1 = 'list';
                                    var8 = var1 === var2;
                                    var1 = 1;
                                    var3 = var5 + var1;
                                    var2 = _closure4_slot0;
                                    var2 = var2.length;
                                    var7 = var3 === var2;
                                    var4 = _closure1_slot15;
                                    var2 = _closure1_slot3;
                                    var3 = var2.Fragment;
                                    var2 = {};
                                    var9 = var8;
                                    if(!var9) { _fun0039_ip = 9; continue _fun0039 }
case 17:
                                    var9 = '\n';
case 9:
                                    var6 = new Array(3);
                                    var6[0] = var9;
                                    var10 = _closure3_slot1;
                                    var9 = _closure4_slot1;
                                    var1 = undefined;
                                    var9 = var10.bind(var1)(var11, var9);
                                    var6[1] = var9;
                                    if(!var7) { _fun0039_ip = 167; continue _fun0039 }
case 130:
                                    var7 = !var8;
case 167:
                                    if(!var7) { _fun0039_ip = 168; continue _fun0039 }
case 93:
                                    var7 = '\n';
case 168:
                                    var6[2] = var7;
                                    var2['children'] = var6;
                                    var1 = var4.bind(var1)(var3, var2, var5);
                                    return var1;
                                }
                            };
                            var13 = var15.bind(var16)(var14);
case 166:
                            var10[1] = var13;
                            var13 = _closure3_slot0;
                            var13 = var13.items;
                            var14 = var13.length;
                            var13 = var9 + var11;
                            var11 = '  ';
                            if(!(var14 === var13)) { _fun0038_ip = 169; continue _fun0038 }
case 170:
                            var11 = var12;
case 169:
                            var10[2] = var11;
                            var2['children'] = var10;
                            var6 = _closure3_slot2;
                            var6 = var6.key;
                            var1 = var1.HermesInternal;
                            var1 = var1.concat;
                            var1 = var1.bind(var8)(var6, var7, var9);
                            var1 = var5.bind(var4)(var3, var2, var1);
                            return var1;
                        }
                    };
                    var6 = var3.bind(var4)(var2);
                    var5 = _closure1_slot14;
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 10;
                    var2 = var4[var2];
                    var4 = undefined;
                    var2 = var3.bind(var4)(var2);
                    var3 = var2.Text;
                    var2 = {};
                    var7 = _closure1_slot17;
                    var7 = var7.list;
                    var2['style'] = var7;
                    var7 = 'text-sm/medium';
                    var2['variant'] = var7;
                    var2['children'] = var6;
                    var7 = var1.key;
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var6 = var1.concat;
                    var1 = 'list-';
                    var1 = var6.bind(var1)(var7);
                    var1 = var5.bind(var4)(var3, var2, var1);
                    return var1;
                }
            };
            var7[9] = var9;
            var1[7] = var7;
            var7 = var6[var2];
            var7 = var3.bind(var5)(var7);
            var7 = var7.AST_KEY;
            var8 = var7.HEADING;
            var7 = {};
            var9 = function react(arg1, arg2, arg3) {
                _fun0040: for(var _fun0040_ip = 0; ; ) switch(_fun0040_ip) {
case 0:
                    var9 = arg1;
                    var1 = arg3;
                    var3 = var9.level;
                    var7 = 'heading-xl/bold';
                    var2 = 1;
                    if(!(var2 !== var3)) { _fun0040_ip = 136; continue _fun0040 }
case 2:
                    var4 = var9.level;
                    var2 = 'heading-md/bold';
                    var3 = 2;
                    if(!(var3 === var4)) { _fun0040_ip = 115; continue _fun0040 }
case 122:
                    var2 = 'heading-lg/bold';
case 115:
                    var7 = var2;
case 136:
                    var5 = _closure1_slot15;
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 10;
                    var2 = var4[var2];
                    var4 = undefined;
                    var2 = var3.bind(var4)(var2);
                    var3 = var2.Text;
                    var2 = {};
                    var2['variant'] = var7;
                    var8 = var1.forceWhite;
                    var7 = 'text-strong';
                    if(!var8) { _fun0040_ip = 171; continue _fun0040 }
case 172:
                    var7 = 'white';
case 171:
                    var2['color'] = var7;
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var6 = 29;
                    var6 = var8[var6];
                    var8 = var7.bind(var4)(var6);
                    var7 = var8.smartOutput;
                    var6 = arg2;
                    var7 = var7.bind(var8)(var9, var6, var1);
                    var6 = new Array(2);
                    var6[0] = var7;
                    var7 = '\n';
                    var6[1] = var7;
                    var2['children'] = var6;
                    var1 = var1.key;
                    var1 = var5.bind(var4)(var3, var2, var1);
                    return var1;
                }
            };
            var7['react'] = var9;
            var1[7] = var7;
            var7 = var6[var2];
            var7 = var3.bind(var5)(var7);
            var7 = var7.AST_KEY;
            var8 = var7.SUBTEXT;
            var7 = {};
            var9 = function react(arg1, arg2, arg3) {
                var1 = arg3;
                var5 = _closure1_slot15;
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var2 = 10;
                var2 = var8[var2];
                var4 = undefined;
                var2 = var7.bind(var4)(var2);
                var3 = var2.Text;
                var2 = {'variant': 'text-sm/normal', 'color': 'text-muted'};
                var6 = 29;
                var6 = var8[var6];
                var9 = var7.bind(var4)(var6);
                var8 = var9.smartOutput;
                var7 = arg1;
                var6 = arg2;
                var7 = var8.bind(var9)(var7, var6, var1);
                var6 = new Array(2);
                var6[0] = var7;
                var7 = '\n';
                var6[1] = var7;
                var2['children'] = var6;
                var1 = var1.key;
                var1 = var5.bind(var4)(var3, var2, var1);
                return var1;
            };
            var7['react'] = var9;
            var1[7] = var7;
            var2 = var6[var2];
            var2 = var3.bind(var5)(var2);
            var2 = var2.AST_KEY;
            var3 = var2.SILENT_PREFIX;
            var2 = {};
            var4 = function react(arg1, arg2, arg3) {
                _fun0041: for(var _fun0041_ip = 0; ; ) switch(_fun0041_ip) {
case 0:
                    var2 = arg1;
                    var1 = arg3;
                    var3 = var2.content;
                    var4 = 'string';
                    var3 = typeof var3;
                    if(!(var4 !== var3)) { _fun0041_ip = 24; continue _fun0041 }
case 18:
                    var6 = _closure1_slot14;
                    var5 = _closure1_slot20;
                    var4 = {};
                    var3 = null;
                    var9 = var3 == var1;
                    var3 = undefined;
                    var8 = undefined;
                    if(var9) { _fun0041_ip = 114; continue _fun0041 }
case 115:
                    var8 = var1.textColor;
case 114:
                    var4['color'] = var8;
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var7 = 29;
                    var7 = var9[var7];
                    var9 = var8.bind(var3)(var7);
                    var8 = var9.smartOutput;
                    var7 = arg2;
                    var7 = var8.bind(var9)(var2, var7, var1);
                    var4['children'] = var7;
                    var1 = var1.key;
                    var1 = var6.bind(var3)(var5, var4, var1);
                    _fun0041_ip = 23; continue _fun0041;
case 24:
                    var1 = var2.content;
case 23:
                    return var1;
                }
            };
            var2['react'] = var4;
            var1[2] = var2;
            return var1;
        }
    };
    var3['default'] = var5;
    var3['MarkupText'] = var4;
    var4 = function plainMentionRenderer(arg1, arg2, arg3) {
        _fun0042: for(var _fun0042_ip = 0; ; ) switch(_fun0042_ip) {
case 0:
            var2 = arg1;
            var1 = var2.content;
            var3 = 'string';
            var1 = typeof var1;
            if(!(var3 !== var1)) { _fun0042_ip = 124; continue _fun0042 }
case 3:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 29;
            var3 = var3[var1];
            var1 = undefined;
            var5 = var4.bind(var1)(var3);
            var4 = var5.smartOutput;
            var3 = arg2;
            var1 = arg3;
            var1 = var4.bind(var5)(var2, var3, var1);
            _fun0042_ip = 173; continue _fun0042;
case 124:
            var1 = var2.content;
case 173:
            return var1;
        }
    };
    var3['plainMentionRenderer'] = var4;
    var2 = function plainSpoilerRenderer(arg1) {
        _fun0043: for(var _fun0043_ip = 0; ; ) switch(_fun0043_ip) {
case 0:
            var2 = arg1;
            var3 = var2.content;
            var1 = '███';
            var4 = 'string';
            var3 = typeof var3;
            if(!(var4 === var3)) { _fun0043_ip = 120; continue _fun0043 }
case 2:
            var5 = var2.content;
            var4 = var5.replace;
            var3 = /[^\n]/g;
            var2 = '█';
            var1 = var4.bind(var5)(var3, var2);
case 120:
            return var1;
        }
    };
    var3['plainSpoilerRenderer'] = var2;
    return var1;
})();