// app/modules/markup/MarkupReactRules.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var1 = function MarkupLink(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var1 = var2.state;
            var10 = var2.node;
            var _closure2_slot0 = var10;
            var9 = var2.output;
            var8 = var2.styles;
            var2 = _closure1_slot17;
            var5 = undefined;
            var11 = var2.bind(var5)();
            var2 = function getValidatedUrl() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure2_slot0;
                    var4 = var1.target;
                    var2 = 'string';
                    var1 = typeof var4;
                    if(!(var2 === var1)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var3 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var6 = 19;
                    var1 = var1[var6];
                    var5 = undefined;
                    var3 = var3.bind(var5)(var1);
                    var1 = var3.safeParseWithQuery;
                    var4 = var1.bind(var3)(var4);
                    var7 = null;
                    var3 = var7 == var4;
                    var1 = null;
                    if(var3) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var3 = var4.protocol;
                    var3 = var7 == var3;
                    var1 = null;
                    if(var3) { _fun0002_ip = 4; continue _fun0002 }
case 6:
                    var3 = var4.hostname;
                    var3 = var7 == var3;
                    var1 = null;
                    if(var3) { _fun0002_ip = 4; continue _fun0002 }
case 7:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var2 = var2[var6];
                    var3 = var3.bind(var5)(var2);
                    var2 = var3.format;
                    var1 = var2.bind(var3)(var4);
case 4:
                    return var1;
case 2:
                    var1 = null;
                    return var1;
                }
            };
            var _closure2_slot1 = var2;
            var2 = var1.linkVariant;
            var3 = null;
            var3 = var3 != var2;
            var12 = 'text-sm/medium';
            if(!var3) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var12 = var2;
case 8:
            var4 = _closure1_slot13;
            var3 = _closure1_slot0;
            var13 = _closure1_slot2;
            var2 = 20;
            var2 = var13[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.Text;
            var2 = {};
            var2['variant'] = var12;
            var12 = 'link';
            var2['accessibilityRole'] = var12;
            var8 = var8.link;
            if(var8) { _fun0001_ip = 10; continue _fun0001 }
case 4:
            var8 = var11.link;
case 10:
            var2['style'] = var8;
            var8 = function onPress(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = arg1;
                    var2 = _closure2_slot1;
                    var1 = undefined;
                    var6 = var2.bind(var1)();
                    var _closure3_slot0 = var6;
                    var2 = null;
                    if(!(var2 != var6)) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                    var2 = var3.stopPropagation;
                    var2 = var2.bind(var3)();
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 21;
                    var2 = var4[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.handleClick;
                    var2 = {};
                    var2['href'] = var6;
                    var6 = function onConfirm() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 22;
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
                        var1 = 23;
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
case 11:
                    return var1;
                }
            };
            var2['onPress'] = var8;
            var7 = function onLongPress(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = arg1;
                    var2 = _closure2_slot1;
                    var1 = undefined;
                    var4 = var2.bind(var1)();
                    var2 = null;
                    if(!(var2 != var4)) { _fun0004_ip = 13; continue _fun0004 }
case 14:
                    var2 = var3.stopPropagation;
                    var2 = var2.bind(var3)();
                    var3 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var2 = 24;
                    var2 = var5[var2];
                    var3 = var3.bind(var1)(var2);
                    var2 = {};
                    var2['urlString'] = var4;
                    var2 = var3.bind(var1)(var2);
case 13:
                    return var1;
                }
            };
            var2['onLongPress'] = var7;
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var6 = 25;
            var6 = var8[var6];
            var8 = var7.bind(var5)(var6);
            var7 = var8.smartOutput;
            var6 = {};
            var16 = var6;
            var15 = var1;
            var11 = copyDataProperties(var16, var15);
            var12 = true;
            var11 = 'inLink';
            var6[var11] = var12;
            var6 = var7.bind(var8)(var10, var9, var6);
            var2['children'] = var6;
            var1 = var1.key;
            var1 = var4.bind(var5)(var3, var2, var1);
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var1 = function MarkupMention(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var2 = arg1;
            var8 = var2.roleStyle;
            var1 = var2.state;
            var10 = var2.node;
            var _closure2_slot0 = var10;
            var9 = var2.output;
            var3 = var2.styles;
            var2 = _closure1_slot17;
            var5 = undefined;
            var2 = var2.bind(var5)();
            var11 = var3.mention;
            if(var11) { _fun0005_ip = 15; continue _fun0005 }
case 16:
            var11 = var2.mention;
case 15:
            var13 = var10.colorString;
            var2 = var13;
            if(!var2) { _fun0005_ip = 6; continue _fun0005 }
case 17:
            var4 = 'username';
            var2 = var4 === var8;
case 6:
            if(!var2) { _fun0005_ip = 18; continue _fun0005 }
case 19:
            var2 = {};
            var2['color'] = var13;
            var12 = var3.mention;
            var4 = null;
            var14 = var4 == var12;
            var3 = undefined;
            if(var14) { _fun0005_ip = 20; continue _fun0005 }
case 21:
            var3 = var12.backgroundColor;
case 20:
            if(!(var4 == var3)) { _fun0005_ip = 22; continue _fun0005 }
case 23:
            var12 = _closure1_slot0;
            var14 = _closure1_slot2;
            var4 = 27;
            var4 = var14[var4];
            var14 = var12.bind(var5)(var4);
            var12 = var14.hexWithOpacity;
            var4 = 0.1;
            var3 = var12.bind(var14)(var13, var4);
case 22:
            var2['backgroundColor'] = var3;
            var11 = var2;
case 18:
            var4 = _closure1_slot14;
            var3 = _closure1_slot0;
            var12 = _closure1_slot2;
            var2 = 26;
            var2 = var12[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.LegacyText;
            var2 = {};
            var12 = 'button';
            var2['accessibilityRole'] = var12;
            var2['style'] = var11;
            var6 = function onPress() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var1 = _closure2_slot0;
                    var4 = var1.userId;
                    var1 = null;
                    if(!(var1 == var4)) { _fun0006_ip = 24; continue _fun0006 }
case 25:
                    var2 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var1 = 13;
                    var1 = var10[var1];
                    var9 = undefined;
                    var3 = var2.bind(var9)(var1);
                    var2 = var3.show;
                    var1 = {};
                    var8 = _closure1_slot0;
                    var5 = 14;
                    var6 = var10[var5];
                    var6 = var8.bind(var9)(var6);
                    var11 = var6.intl;
                    var7 = var11.string;
                    var6 = var10[var5];
                    var6 = var8.bind(var9)(var6);
                    var6 = var6.t;
                    var6 = var6.r0DLNj;
                    var6 = var7.bind(var11)(var6);
                    var1['title'] = var6;
                    var6 = var10[var5];
                    var6 = var8.bind(var9)(var6);
                    var11 = var6.intl;
                    var7 = var11.string;
                    var6 = var10[var5];
                    var6 = var8.bind(var9)(var6);
                    var6 = var6.t;
                    var6 = var6.Fqqbho;
                    var6 = var7.bind(var11)(var6);
                    var1['body'] = var6;
                    var6 = var10[var5];
                    var6 = var8.bind(var9)(var6);
                    var7 = var6.intl;
                    var6 = var7.string;
                    var5 = var10[var5];
                    var5 = var8.bind(var9)(var5);
                    var5 = var5.t;
                    var5 = var5.BddRzc;
                    var5 = var6.bind(var7)(var5);
                    var1['confirmText'] = var5;
                    var1 = var2.bind(var3)(var1);
                    _fun0006_ip = 26; continue _fun0006;
case 24:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 12;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.openPrivateChannel;
                    var1 = {};
                    var1['recipientIds'] = var4;
                    var1 = var2.bind(var3)(var1);
case 26:
                    var1 = undefined;
                    return var1;
                }
            };
            var2['onPress'] = var6;
            var6 = 'dot';
            var8 = var6 === var8;
            if(!var8) { _fun0005_ip = 27; continue _fun0005 }
case 28:
            var12 = _closure1_slot13;
            var11 = _closure1_slot0;
            var14 = _closure1_slot2;
            var6 = 28;
            var6 = var14[var6];
            var6 = var11.bind(var5)(var6);
            var11 = var6.RoleDot;
            var6 = {'color': null, 'colors': null, 'size': 'small'};
            var6['color'] = var13;
            var8 = var12.bind(var5)(var11, var6);
case 27:
            var6 = new Array(2);
            var6[0] = var8;
            var8 = _closure1_slot0;
            var11 = _closure1_slot2;
            var7 = 25;
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
    var _closure1_slot20 = var1;
    var1 = function MarkupBlockQuote(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var2 = arg1;
            var7 = var2.styles;
            var1 = var2.state;
            var9 = var2.node;
            var8 = var2.output;
            var2 = _closure1_slot17;
            var5 = undefined;
            var10 = var2.bind(var5)();
            var4 = _closure1_slot13;
            var3 = _closure1_slot0;
            var11 = _closure1_slot2;
            var2 = 26;
            var2 = var11[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.LegacyText;
            var2 = {};
            var7 = var7.blockQuote;
            if(var7) { _fun0007_ip = 6; continue _fun0007 }
case 29:
            var7 = var10.blockQuote;
case 6:
            var2['style'] = var7;
            var7 = _closure1_slot0;
            var10 = _closure1_slot2;
            var6 = 25;
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
    var _closure1_slot21 = var1;
    var1 = function MarkupInlineCode(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var3 = arg1;
            var2 = var3.styles;
            var1 = var3.state;
            var9 = var3.node;
            var _closure2_slot0 = var9;
            var8 = var3.output;
            var3 = _closure1_slot17;
            var5 = undefined;
            var3 = var3.bind(var5)();
            var4 = var1.noStyleAndInteraction;
            var11 = !var4;
            if(!var11) { _fun0008_ip = 15; continue _fun0008 }
case 30:
            var4 = var1.inLink;
            var11 = !var4;
case 15:
            var12 = 'text';
            if(!var11) { _fun0008_ip = 31; continue _fun0008 }
case 9:
            var12 = 'button';
case 31:
            var7 = {};
            var2 = var2.inlineCode;
            if(var2) { _fun0008_ip = 32; continue _fun0008 }
case 33:
            var2 = var3.inlineCode;
case 32:
            var16 = var7;
            var15 = var2;
            var2 = copyDataProperties(var16, var15);
            var2 = var1.inLink;
            if(!var2) { _fun0008_ip = 34; continue _fun0008 }
case 35:
            var2 = delete var7.color;
case 34:
            var4 = _closure1_slot13;
            var3 = _closure1_slot0;
            var13 = _closure1_slot2;
            var2 = 26;
            var2 = var13[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.LegacyText;
            var2 = {};
            var2['accessibilityRole'] = var12;
            var2['style'] = var7;
            var7 = undefined;
            if(!var11) { _fun0008_ip = 36; continue _fun0008 }
case 22:
            var7 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var1 = _closure2_slot0;
                    var6 = var1.content;
                    var2 = 'string';
                    var1 = typeof var6;
                    if(!(var2 === var1)) { _fun0009_ip = 37; continue _fun0009 }
case 38:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 15;
                    var1 = var4[var1];
                    var2 = undefined;
                    var5 = var3.bind(var2)(var1);
                    var1 = var5.copy;
                    var1 = var1.bind(var5)(var6);
                    var1 = 16;
                    var1 = var4[var1];
                    var2 = var3.bind(var2)(var1);
                    var1 = var2.presentCopiedToClipboard;
                    var1 = var1.bind(var2)();
case 37:
                    var1 = undefined;
                    return var1;
                }
            };
case 36:
            var2['onPress'] = var7;
            var7 = _closure1_slot0;
            var10 = _closure1_slot2;
            var6 = 25;
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
    var _closure1_slot22 = var1;
    var1 = function MarkupCodeBlock(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var2 = arg1;
            var7 = var2.styles;
            var1 = var2.state;
            var9 = var2.node;
            var8 = var2.output;
            var2 = _closure1_slot17;
            var5 = undefined;
            var10 = var2.bind(var5)();
            var4 = _closure1_slot14;
            var3 = _closure1_slot0;
            var11 = _closure1_slot2;
            var2 = 26;
            var2 = var11[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.LegacyText;
            var2 = {};
            var7 = var7.codeBlock;
            if(var7) { _fun0010_ip = 6; continue _fun0010 }
case 29:
            var7 = var10.codeBlock;
case 6:
            var2['style'] = var7;
            var7 = _closure1_slot0;
            var10 = _closure1_slot2;
            var6 = 25;
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
    var _closure1_slot23 = var1;
    var1 = function MarkupCustomEmoji(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var1 = arg1;
            var9 = var1.styles;
            var2 = var1.state;
            var10 = var1.node;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 29;
            var1 = var4[var1];
            var6 = undefined;
            var1 = var3.bind(var6)(var1);
            var5 = var1.AnimateEmoji;
            var1 = var5.useSetting;
            var8 = var1.bind(var5)();
            var1 = 30;
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
            var5 = _closure1_slot13;
            if(var1) { _fun0011_ip = 36; continue _fun0011 }
case 39:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 26;
            var1 = var4[var1];
            var1 = var3.bind(var6)(var1);
            var4 = var1.LegacyText;
            var3 = {};
            var1 = var10.alt;
            var3['children'] = var1;
            var1 = var2.key;
            var1 = var5.bind(var6)(var4, var3, var1);
            _fun0011_ip = 40; continue _fun0011;
case 36:
            var4 = _closure1_slot1;
            var12 = _closure1_slot2;
            var3 = 31;
            var3 = var12[var3];
            var4 = var4.bind(var6)(var3);
            var3 = {};
            var9 = var9.emoji;
            if(var9) { _fun0011_ip = 41; continue _fun0011 }
case 42:
            var11 = _closure1_slot16;
            var9 = var11.emoji;
case 41:
            var3['style'] = var9;
            var9 = {};
            var10 = var10.src;
            var9['uri'] = var10;
            var3['source'] = var9;
            var7 = !var7;
            if(!var7) { _fun0011_ip = 43; continue _fun0011 }
case 44:
            var7 = var8;
case 43:
            var3['enableAnimation'] = var7;
            var2 = var2.key;
            var1 = var5.bind(var6)(var4, var3, var2);
case 40:
            return var1;
        }
    };
    var _closure1_slot24 = var1;
    var1 = function MarkupChannelMention(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var1 = arg1;
            var2 = var1.state;
            var _closure2_slot0 = var2;
            var15 = var1.node;
            var _closure2_slot1 = var15;
            var14 = var1.output;
            var9 = var1.styles;
            var1 = var1.variants;
            var4 = _closure1_slot17;
            var6 = undefined;
            var10 = var4.bind(var6)();
            var4 = var2.noStyleAndInteraction;
            var11 = 'button';
            if(!var4) { _fun0012_ip = 45; continue _fun0012 }
case 46:
            var11 = 'text';
case 45:
            var7 = _closure1_slot14;
            var5 = _closure1_slot0;
            var12 = _closure1_slot2;
            var4 = 20;
            var4 = var12[var4];
            var4 = var5.bind(var6)(var4);
            var5 = var4.Text;
            var4 = {};
            var13 = var1.channelMentionText;
            var12 = null;
            var16 = var12 != var13;
            var1 = 'text-xs/medium';
            if(!var16) { _fun0012_ip = 47; continue _fun0012 }
case 48:
            var1 = var13;
case 47:
            var4['variant'] = var1;
            var1 = var10.channelMentionText;
            var4['style'] = var1;
            var1 = var15.inContent;
            var1 = var12 != var1;
            var13 = null;
            if(!var1) { _fun0012_ip = 49; continue _fun0012 }
case 50:
            var1 = var15.inContent;
            var13 = var14.bind(var6)(var1, var2);
case 49:
            var1 = new Array(3);
            var1[0] = var13;
            var13 = var15.inContent;
            var13 = var12 != var13;
            var12 = null;
            if(!var13) { _fun0012_ip = 51; continue _fun0012 }
case 52:
            var17 = _closure1_slot13;
            var19 = _closure1_slot1;
            var20 = _closure1_slot2;
            var13 = 32;
            var13 = var20[var13];
            var16 = var19.bind(var6)(var13);
            var13 = {};
            var18 = 10;
            var18 = var20[var18];
            var18 = var19.bind(var6)(var18);
            var18 = var18.colors;
            var18 = var18.MENTION_FOREGROUND;
            var13['themedColor'] = var18;
            var19 = _closure1_slot4;
            var18 = var19.getFontScale;
            var19 = var18.bind(var19)();
            var18 = 1.25;
            if(!(!(var19 < var18))) { _fun0012_ip = 53; continue _fun0012 }
case 54:
            var18 = 2;
            if(!(!(var19 < var18))) { _fun0012_ip = 55; continue _fun0012 }
case 56:
            var18 = {'width': 16, 'height': 16};
            _fun0012_ip = 57; continue _fun0012;
case 55:
            var18 = {'width': 12, 'height': 12};
case 57:
            _fun0012_ip = 58; continue _fun0012;
case 53:
            var18 = {'width': 8, 'height': 8};
case 58:
            var13['style'] = var18;
            var19 = _closure1_slot1;
            var20 = _closure1_slot2;
            var18 = 33;
            var18 = var20[var18];
            var18 = var19.bind(var6)(var18);
            var13['source'] = var18;
            var18 = 18;
            var18 = var20[var18];
            var18 = var19.bind(var6)(var18);
            var18 = var18.Sizes;
            var18 = var18.CUSTOM;
            var13['size'] = var18;
            var12 = var17.bind(var6)(var16, var13);
case 51:
            var1[1] = var12;
            var13 = _closure1_slot0;
            var16 = _closure1_slot2;
            var12 = 25;
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
            if(var4) { _fun0012_ip = 59; continue _fun0012 }
case 60:
            var5 = _closure1_slot13;
            var4 = _closure1_slot5;
            var3 = {};
            var3['accessibilityRole'] = var11;
            var9 = var9.channel;
            if(var9) { _fun0012_ip = 61; continue _fun0012 }
case 62:
            var9 = var10.channelMention;
case 61:
            var3['style'] = var9;
            var10 = var2.noStyleAndInteraction;
            var9 = 'auto';
            if(!var10) { _fun0012_ip = 63; continue _fun0012 }
case 64:
            var9 = 'none';
case 63:
            var3['pointerEvents'] = var9;
            var8 = function onPress() {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    var1 = _closure2_slot0;
                    var4 = var1.noStyleAndInteraction;
                    var3 = null;
                    var1 = null;
                    if(var4) { _fun0013_ip = 47; continue _fun0013 }
case 65:
                    var2 = _closure2_slot1;
                    var7 = var2.channelId;
                    var6 = var2.messageId;
                    var2 = var3 != var7;
                    if(!var2) { _fun0013_ip = 66; continue _fun0013 }
case 67:
                    if(!(var3 == var6)) { _fun0013_ip = 68; continue _fun0013 }
case 69:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 11;
                    var4 = var4[var3];
                    var3 = undefined;
                    var4 = var5.bind(var3)(var4);
                    var3 = var4.transitionToChannel;
                    var3 = var3.bind(var4)(var7);
                    _fun0013_ip = 70; continue _fun0013;
case 68:
                    var8 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var4 = 11;
                    var5 = var5[var4];
                    var4 = undefined;
                    var5 = var8.bind(var4)(var5);
                    var4 = var5.transitionToMessage;
                    var3 = var4.bind(var5)(var7, var6);
case 70:
                    var2 = var3;
case 66:
                    var1 = undefined;
case 47:
                    return var1;
                }
            };
            var3['onPress'] = var8;
            var3['children'] = var7;
            var2 = var2.key;
            var1 = var5.bind(var6)(var4, var3, var2);
case 59:
            return var1;
        }
    };
    var _closure1_slot25 = var1;
    var1 = function MarkupAttachmentLink(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var1 = arg1;
            var2 = var1.state;
            var _closure2_slot0 = var2;
            var15 = var1.node;
            var _closure2_slot1 = var15;
            var14 = var1.output;
            var9 = var1.styles;
            var1 = var1.variants;
            var4 = _closure1_slot17;
            var6 = undefined;
            var10 = var4.bind(var6)();
            var4 = var2.noStyleAndInteraction;
            var11 = 'button';
            if(!var4) { _fun0014_ip = 45; continue _fun0014 }
case 46:
            var11 = 'text';
case 45:
            var7 = _closure1_slot14;
            var5 = _closure1_slot0;
            var12 = _closure1_slot2;
            var4 = 20;
            var4 = var12[var4];
            var4 = var5.bind(var6)(var4);
            var5 = var4.Text;
            var4 = {};
            var12 = var1.channelMentionText;
            var1 = null;
            var13 = var1 != var12;
            var1 = 'text-xs/medium';
            if(!var13) { _fun0014_ip = 47; continue _fun0014 }
case 48:
            var1 = var12;
case 47:
            var4['variant'] = var1;
            var1 = var10.channelMentionText;
            var4['style'] = var1;
            var13 = _closure1_slot13;
            var18 = _closure1_slot1;
            var16 = _closure1_slot2;
            var1 = 32;
            var1 = var16[var1];
            var12 = var18.bind(var6)(var1);
            var1 = {};
            var17 = 10;
            var17 = var16[var17];
            var17 = var18.bind(var6)(var17);
            var17 = var17.colors;
            var17 = var17.MENTION_FOREGROUND;
            var1['themedColor'] = var17;
            var17 = 34;
            var17 = var16[var17];
            var17 = var18.bind(var6)(var17);
            var1['source'] = var17;
            var17 = _closure1_slot18;
            var17 = var17.bind(var6)();
            var1['size'] = var17;
            var12 = var13.bind(var6)(var12, var1);
            var1 = new Array(2);
            var1[0] = var12;
            var13 = _closure1_slot0;
            var12 = 25;
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
            if(var4) { _fun0014_ip = 71; continue _fun0014 }
case 72:
            var5 = _closure1_slot13;
            var4 = _closure1_slot5;
            var3 = {};
            var3['accessibilityRole'] = var11;
            var9 = var9.channel;
            if(var9) { _fun0014_ip = 73; continue _fun0014 }
case 74:
            var9 = var10.channelMention;
case 73:
            var3['style'] = var9;
            var10 = var2.noStyleAndInteraction;
            var9 = 'auto';
            if(!var10) { _fun0014_ip = 75; continue _fun0014 }
case 76:
            var9 = 'none';
case 75:
            var3['pointerEvents'] = var9;
            var8 = function onPress(arg1) {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                    var3 = arg1;
                    var2 = _closure2_slot0;
                    var2 = var2.noStyleAndInteraction;
                    if(var2) { _fun0015_ip = 77; continue _fun0015 }
case 78:
                    var2 = var3.stopPropagation;
                    var2 = var2.bind(var3)();
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 22;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.openURL;
                    var1 = _closure2_slot1;
                    var1 = var1.attachmentLink;
                    var1 = var2.bind(var3)(var1);
case 77:
                    var1 = undefined;
                    return var1;
                }
            };
            var3['onPress'] = var8;
            var3['children'] = var7;
            var2 = var2.key;
            var1 = var5.bind(var6)(var4, var3, var2);
case 71:
            return var1;
        }
    };
    var _closure1_slot26 = var1;
    var1 = function MarkupCommandMention(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var2 = arg1;
            var1 = var2.state;
            var9 = var2.node;
            var8 = var2.output;
            var6 = var2.styles;
            var3 = _closure1_slot17;
            var5 = undefined;
            var7 = var3.bind(var5)();
            var4 = _closure1_slot13;
            var3 = _closure1_slot1;
            var10 = _closure1_slot2;
            var2 = 35;
            var2 = var10[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var2['node'] = var9;
            var2['output'] = var8;
            var2['state'] = var1;
            var6 = var6.mention;
            if(var6) { _fun0016_ip = 32; continue _fun0016 }
case 33:
            var6 = var7.mention;
case 32:
            var2['style'] = var6;
            var1 = var1.key;
            var1 = var4.bind(var5)(var3, var2, var1);
            return var1;
        }
    };
    var _closure1_slot27 = var1;
    var4 = global;
    var9 = var4.Object;
    var8 = var9.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var7);
    var1 = 0;
    var8 = var6[var1];
    var7 = metroImportAll;
    var1 = undefined;
    var7 = var7.bind(var1)(var8);
    var _closure1_slot3 = var7;
    var7 = 1;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var8 = var7.PixelRatio;
    var _closure1_slot4 = var8;
    var8 = var7.Pressable;
    var _closure1_slot5 = var8;
    var8 = var7.View;
    var _closure1_slot6 = var8;
    var7 = var7.Text;
    var _closure1_slot7 = var7;
    var7 = 2;
    var7 = var6[var7];
    var7 = var11.bind(var1)(var7);
    var _closure1_slot8 = var7;
    var7 = 3;
    var7 = var6[var7];
    var7 = var11.bind(var1)(var7);
    var _closure1_slot9 = var7;
    var8 = 4;
    var7 = var6[var8];
    var7 = var5.bind(var1)(var7);
    var9 = var7.EMOJI_CHAT_SIZE;
    var7 = var7.GuildFeatures;
    var _closure1_slot10 = var7;
    var7 = 5;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var10 = var7.StaticChannelRoute;
    var _closure1_slot11 = var10;
    var7 = var7.StaticChannelId;
    var _closure1_slot12 = var7;
    var7 = 6;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var12 = var7.Fonts;
    var7 = 7;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var10 = var7.jsx;
    var _closure1_slot13 = var10;
    var7 = var7.jsxs;
    var _closure1_slot14 = var7;
    var13 = var4.RegExp;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var16 = var4.ANSI_CONTROL_SEQUENCE_RE;
    var4 = var13.prototype;
    var7 = Object.create(var4, {constructor: {value: var13}});
    var15 = 'g';
    var17 = var7;
    var4 = new var17[var13](var16, var15, var14);
    var4 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot15 = var4;
    var4 = {};
    var7 = {};
    var7['width'] = var9;
    var7['height'] = var9;
    var9 = 'contain';
    var7['resizeMode'] = var9;
    var4['emoji'] = var7;
    var7 = {'paddingEnd': 2, 'paddingBottom': 1};
    var4['guildIcon'] = var7;
    var7 = {};
    var9 = 16;
    var7['paddingTop'] = var9;
    var4['list'] = var7;
    var7 = {};
    var7['paddingTop'] = var8;
    var4['listItem'] = var7;
    var7 = {};
    var8 = var12.CODE_BOLD;
    var7['fontFamily'] = var8;
    var4['bullet'] = var7;
    var7 = {};
    var8 = var12.PRIMARY_BOLD;
    var7['fontFamily'] = var8;
    var4['strong'] = var7;
    var _closure1_slot16 = var4;
    var4 = 9;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = var12.PRIMARY_BOLD;
    var9['fontFamily'] = var10;
    var10 = 10;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.TEXT_LINK;
    var9['color'] = var13;
    var4['link'] = var9;
    var9 = {'backgroundColor': null, 'borderRadius': 3, 'paddingHorizontal': 2, 'alignItems': 'center'};
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.MENTION_BACKGROUND;
    var9['backgroundColor'] = var13;
    var4['channelMention'] = var9;
    var9 = {};
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.MENTION_FOREGROUND;
    var9['color'] = var13;
    var4['channelMentionText'] = var9;
    var9 = {};
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.unsafe_rawColors;
    var13 = var13.BRAND_500;
    var9['color'] = var13;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_MODIFIER_ACCENT;
    var9['backgroundColor'] = var13;
    var4['mention'] = var9;
    var9 = {};
    var13 = var12.CODE_BOLD;
    var9['fontFamily'] = var13;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.TEXT_NORMAL;
    var9['color'] = var13;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_SECONDARY_ALT;
    var9['backgroundColor'] = var13;
    var4['inlineCode'] = var9;
    var9 = {};
    var12 = var12.CODE_BOLD;
    var9['fontFamily'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.TEXT_NORMAL;
    var9['color'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_SECONDARY_ALT;
    var9['backgroundColor'] = var12;
    var4['codeBlock'] = var9;
    var9 = {'borderLeftWidth': 2, 'borderLeftColor': null, 'paddingLeft': 4};
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_SECONDARY_ALT;
    var9['borderLeftColor'] = var10;
    var4['blockQuote'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot17 = var4;
    var4 = function getIconSize() {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
            var3 = _closure1_slot4;
            var1 = var3.getFontScale;
            var3 = var1.bind(var3)();
            var1 = 1;
            if(!(!(var3 < var1))) { _fun0017_ip = 79; continue _fun0017 }
case 3:
            var1 = 1.25;
            if(!(!(var3 < var1))) { _fun0017_ip = 80; continue _fun0017 }
case 81:
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 18;
            var3 = var3[var1];
            var1 = undefined;
            var1 = var4.bind(var1)(var3);
            var1 = var1.Sizes;
            var1 = var1.SMALL;
            _fun0017_ip = 82; continue _fun0017;
case 80:
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var3 = 18;
            var4 = var4[var3];
            var3 = undefined;
            var3 = var5.bind(var3)(var4);
            var3 = var3.Sizes;
            var1 = var3.EXTRA_SMALL;
case 82:
            _fun0017_ip = 83; continue _fun0017;
case 79:
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 18;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var2 = var2.Sizes;
            var1 = var2.EXTRA_SMALL_10;
case 83:
            return var1;
        }
    };
    var _closure1_slot18 = var4;
    var4 = 45;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/markup/MarkupReactRules.native.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function createRules() {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
            var3 = arguments[0];
            var1 = arguments[1];
            var5 = undefined;
            if(!(var3 === var5)) { _fun0018_ip = 84; continue _fun0018 }
case 85:
            var3 = {};
case 84:
            var _closure2_slot0 = var3;
            if(!(var1 === var5)) { _fun0018_ip = 86; continue _fun0018 }
case 3:
            var1 = {};
case 86:
            var _closure2_slot1 = var1;
            var1 = function() {
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                    var2 = arguments[0];
                    var3 = undefined;
                    if(!(var2 === var3)) { _fun0019_ip = 87; continue _fun0019 }
case 88:
                    var2 = {};
case 87:
                    var _closure3_slot0 = var2;
                    var1 = function(arg1, arg2, arg3) {
                        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                            var10 = arg1;
                            var9 = arg2;
                            var2 = arg3;
                            var1 = var2.noStyleAndInteraction;
                            var6 = _closure1_slot13;
                            if(var1) { _fun0020_ip = 9; continue _fun0020 }
case 89:
                            var7 = _closure1_slot19;
                            var5 = {};
                            var5['state'] = var2;
                            var5['node'] = var10;
                            var5['output'] = var9;
                            var1 = _closure3_slot0;
                            var5['styles'] = var1;
                            var4 = var2.key;
                            var1 = undefined;
                            var1 = var6.bind(var1)(var7, var5, var4);
                            _fun0020_ip = 83; continue _fun0020;
case 9:
                            var8 = _closure1_slot0;
                            var11 = _closure1_slot2;
                            var3 = 26;
                            var3 = var11[var3];
                            var5 = undefined;
                            var3 = var8.bind(var5)(var3);
                            var4 = var3.LegacyText;
                            var3 = {};
                            var7 = 25;
                            var7 = var11[var7];
                            var8 = var8.bind(var5)(var7);
                            var7 = var8.smartOutput;
                            var7 = var7.bind(var8)(var10, var9, var2);
                            var3['children'] = var7;
                            var2 = var2.key;
                            var1 = var6.bind(var5)(var4, var3, var2);
case 83:
                            return var1;
                        }
                    };
                    return var1;
                }
            };
            var4 = var1.bind(var5)(var3);
            var2 = function() {
                _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                    var4 = arguments[0];
                    var2 = arguments[1];
                    var3 = undefined;
                    if(!(var4 === var3)) { _fun0021_ip = 84; continue _fun0021 }
case 85:
                    var4 = {};
case 84:
                    var _closure3_slot0 = var4;
                    if(!(var2 === var3)) { _fun0021_ip = 12; continue _fun0021 }
case 3:
                    var2 = 'username';
case 12:
                    var _closure3_slot1 = var2;
                    var1 = function(arg1, arg2, arg3) {
                        _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                            var10 = arg1;
                            var9 = arg2;
                            var2 = arg3;
                            var1 = var2.noStyleAndInteraction;
                            var6 = _closure1_slot13;
                            if(var1) { _fun0022_ip = 90; continue _fun0022 }
case 89:
                            var7 = _closure1_slot20;
                            var5 = {};
                            var4 = _closure3_slot1;
                            var5['roleStyle'] = var4;
                            var5['state'] = var2;
                            var5['node'] = var10;
                            var5['output'] = var9;
                            var1 = _closure3_slot0;
                            var5['styles'] = var1;
                            var4 = var2.key;
                            var1 = undefined;
                            var1 = var6.bind(var1)(var7, var5, var4);
                            _fun0022_ip = 91; continue _fun0022;
case 90:
                            var8 = _closure1_slot0;
                            var11 = _closure1_slot2;
                            var3 = 26;
                            var3 = var11[var3];
                            var5 = undefined;
                            var3 = var8.bind(var5)(var3);
                            var4 = var3.LegacyText;
                            var3 = {};
                            var7 = 25;
                            var7 = var11[var7];
                            var8 = var8.bind(var5)(var7);
                            var7 = var8.smartOutput;
                            var7 = var7.bind(var8)(var10, var9, var2);
                            var3['children'] = var7;
                            var2 = var2.key;
                            var1 = var6.bind(var5)(var4, var3, var2);
case 91:
                            return var1;
                        }
                    };
                    return var1;
                }
            };
            var1 = arguments[2];
            var12 = var2.bind(var5)(var3, var1);
            var1 = {};
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 36;
            var7 = var6[var2];
            var7 = var3.bind(var5)(var7);
            var7 = var7.AST_KEY;
            var8 = var7.TEXT;
            var7 = {};
            var10 = function react(arg1, arg2, arg3) {
                _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                    var2 = arg1;
                    var1 = arg3;
                    var3 = var2.content;
                    var4 = 'string';
                    var3 = typeof var3;
                    if(!(var4 !== var3)) { _fun0023_ip = 92; continue _fun0023 }
case 14:
                    var6 = _closure1_slot13;
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var3 = 26;
                    var3 = var9[var3];
                    var5 = undefined;
                    var3 = var8.bind(var5)(var3);
                    var4 = var3.LegacyText;
                    var3 = {};
                    var7 = 25;
                    var7 = var9[var7];
                    var9 = var8.bind(var5)(var7);
                    var8 = var9.smartOutput;
                    var7 = arg2;
                    var7 = var8.bind(var9)(var2, var7, var1);
                    var3['children'] = var7;
                    var1 = var1.key;
                    var1 = var6.bind(var5)(var4, var3, var1);
                    _fun0023_ip = 79; continue _fun0023;
case 92:
                    var1 = var2.content;
case 79:
                    return var1;
                }
            };
            var7['react'] = var10;
            var1[var8] = var7;
            var7 = var6[var2];
            var7 = var3.bind(var5)(var7);
            var7 = var7.AST_KEY;
            var8 = var7.STRIKETHROUGH;
            var7 = {};
            var10 = 37;
            var11 = var6[var10];
            var11 = var3.bind(var5)(var11);
            var13 = var11.DEFAULT_RULES;
            var11 = var6[var2];
            var11 = var3.bind(var5)(var11);
            var11 = var11.AST_KEY;
            var11 = var11.STRIKETHROUGH;
            var16 = var13[var11];
            var17 = var7;
            var11 = copyDataProperties(var17, var16);
            var13 = function react(arg1, arg2, arg3) {
                var1 = arg3;
                var5 = _closure1_slot13;
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var2 = 26;
                var2 = var8[var2];
                var4 = undefined;
                var2 = var7.bind(var4)(var2);
                var3 = var2.LegacyText;
                var2 = {};
                var6 = {};
                var9 = 'line-through';
                var6['textDecorationLine'] = var9;
                var2['style'] = var6;
                var6 = 25;
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
            var11 = 'react';
            var7[var11] = var13;
            var1[var8] = var7;
            var7 = var6[var2];
            var7 = var3.bind(var5)(var7);
            var7 = var7.AST_KEY;
            var8 = var7.UNDERLINE;
            var7 = {};
            var13 = var6[var10];
            var13 = var3.bind(var5)(var13);
            var14 = var13.DEFAULT_RULES;
            var13 = var6[var2];
            var13 = var3.bind(var5)(var13);
            var13 = var13.AST_KEY;
            var13 = var13.UNDERLINE;
            var16 = var14[var13];
            var17 = var7;
            var13 = copyDataProperties(var17, var16);
            var13 = function react(arg1, arg2, arg3) {
                var1 = arg3;
                var5 = _closure1_slot13;
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var2 = 26;
                var2 = var8[var2];
                var4 = undefined;
                var2 = var7.bind(var4)(var2);
                var3 = var2.LegacyText;
                var2 = {};
                var6 = {};
                var9 = 'underline';
                var6['textDecorationLine'] = var9;
                var2['style'] = var6;
                var6 = 25;
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
            var7[var11] = var13;
            var1[var8] = var7;
            var7 = var6[var2];
            var7 = var3.bind(var5)(var7);
            var7 = var7.AST_KEY;
            var8 = var7.ITALICS;
            var7 = {};
            var13 = var6[var10];
            var13 = var3.bind(var5)(var13);
            var14 = var13.DEFAULT_RULES;
            var13 = var6[var2];
            var13 = var3.bind(var5)(var13);
            var13 = var13.AST_KEY;
            var13 = var13.ITALICS;
            var16 = var14[var13];
            var17 = var7;
            var13 = copyDataProperties(var17, var16);
            var13 = function react(arg1, arg2, arg3) {
                _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                    var1 = arg3;
                    var5 = _closure1_slot13;
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 26;
                    var2 = var4[var2];
                    var4 = undefined;
                    var2 = var3.bind(var4)(var2);
                    var3 = var2.LegacyText;
                    var2 = {};
                    var7 = {};
                    var8 = _closure2_slot0;
                    var10 = var8.em;
                    var8 = null;
                    var11 = var8 == var10;
                    var9 = undefined;
                    if(var11) { _fun0024_ip = 45; continue _fun0024 }
case 15:
                    var9 = var10.fontStyle;
case 45:
                    var10 = var8 != var9;
                    var8 = 'italic';
                    if(!var10) { _fun0024_ip = 6; continue _fun0024 }
case 68:
                    var8 = var9;
case 6:
                    var7['fontStyle'] = var8;
                    var2['style'] = var7;
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var6 = 25;
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
                }
            };
            var7[var11] = var13;
            var1[var8] = var7;
            var7 = var6[var2];
            var7 = var3.bind(var5)(var7);
            var7 = var7.AST_KEY;
            var8 = var7.STRONG;
            var7 = {};
            var13 = var6[var10];
            var13 = var3.bind(var5)(var13);
            var14 = var13.DEFAULT_RULES;
            var13 = var6[var2];
            var13 = var3.bind(var5)(var13);
            var13 = var13.AST_KEY;
            var13 = var13.STRONG;
            var16 = var14[var13];
            var17 = var7;
            var13 = copyDataProperties(var17, var16);
            var13 = function react(arg1, arg2, arg3) {
                _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
                    var1 = arg3;
                    var5 = _closure1_slot13;
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 26;
                    var2 = var4[var2];
                    var4 = undefined;
                    var2 = var3.bind(var4)(var2);
                    var3 = var2.LegacyText;
                    var2 = {};
                    var7 = _closure2_slot0;
                    var7 = var7.strong;
                    if(var7) { _fun0025_ip = 15; continue _fun0025 }
case 93:
                    var8 = _closure1_slot16;
                    var7 = var8.strong;
case 15:
                    var2['style'] = var7;
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var6 = 25;
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
                }
            };
            var7[var11] = var13;
            var1[var8] = var7;
            var7 = var6[var2];
            var7 = var3.bind(var5)(var7);
            var7 = var7.AST_KEY;
            var8 = var7.LINK;
            var7 = {};
            var13 = var6[var10];
            var13 = var3.bind(var5)(var13);
            var14 = var13.DEFAULT_RULES;
            var13 = var6[var2];
            var13 = var3.bind(var5)(var13);
            var13 = var13.AST_KEY;
            var13 = var13.LINK;
            var16 = var14[var13];
            var17 = var7;
            var13 = copyDataProperties(var17, var16);
            var7[var11] = var4;
            var1[var8] = var7;
            var7 = var6[var2];
            var7 = var3.bind(var5)(var7);
            var7 = var7.AST_KEY;
            var8 = var7.URL;
            var7 = {};
            var13 = var6[var10];
            var13 = var3.bind(var5)(var13);
            var14 = var13.DEFAULT_RULES;
            var13 = var6[var2];
            var13 = var3.bind(var5)(var13);
            var13 = var13.AST_KEY;
            var13 = var13.URL;
            var16 = var14[var13];
            var17 = var7;
            var13 = copyDataProperties(var17, var16);
            var7[var11] = var4;
            var1[var8] = var7;
            var7 = var6[var2];
            var7 = var3.bind(var5)(var7);
            var7 = var7.AST_KEY;
            var8 = var7.AUTOLINK;
            var7 = {};
            var13 = var6[var10];
            var13 = var3.bind(var5)(var13);
            var14 = var13.DEFAULT_RULES;
            var13 = var6[var2];
            var13 = var3.bind(var5)(var13);
            var13 = var13.AST_KEY;
            var13 = var13.AUTOLINK;
            var16 = var14[var13];
            var17 = var7;
            var13 = copyDataProperties(var17, var16);
            var7[var11] = var4;
            var1[var8] = var7;
            var7 = var6[var2];
            var7 = var3.bind(var5)(var7);
            var7 = var7.AST_KEY;
            var8 = var7.LINE_BREAK;
            var7 = {};
            var13 = var6[var10];
            var13 = var3.bind(var5)(var13);
            var14 = var13.DEFAULT_RULES;
            var13 = var6[var2];
            var13 = var3.bind(var5)(var13);
            var13 = var13.AST_KEY;
            var13 = var13.LINE_BREAK;
            var16 = var14[var13];
            var17 = var7;
            var13 = copyDataProperties(var17, var16);
            var13 = function react(arg1, arg2, arg3) {
                var5 = _closure1_slot13;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 26;
                var1 = var3[var1];
                var4 = undefined;
                var1 = var2.bind(var4)(var1);
                var3 = var1.LegacyText;
                var2 = {};
                var1 = '\n';
                var2['children'] = var1;
                var1 = arg3;
                var1 = var1.key;
                var1 = var5.bind(var4)(var3, var2, var1);
                return var1;
            };
            var7[var11] = var13;
            var1[var8] = var7;
            var7 = var6[var2];
            var7 = var3.bind(var5)(var7);
            var7 = var7.AST_KEY;
            var8 = var7.HIGHLIGHT;
            var7 = {};
            var13 = function react(arg1, arg2, arg3) {
                var1 = arg3;
                var5 = _closure1_slot13;
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var2 = 26;
                var2 = var8[var2];
                var4 = undefined;
                var2 = var7.bind(var4)(var2);
                var3 = var2.LegacyText;
                var2 = {};
                var6 = 25;
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
            var7['react'] = var13;
            var1[var8] = var7;
            var7 = var6[var2];
            var7 = var3.bind(var5)(var7);
            var7 = var7.AST_KEY;
            var8 = var7.BLOCK_QUOTE;
            var7 = {};
            var13 = var6[var10];
            var13 = var3.bind(var5)(var13);
            var14 = var13.DEFAULT_RULES;
            var13 = var6[var2];
            var13 = var3.bind(var5)(var13);
            var13 = var13.AST_KEY;
            var13 = var13.BLOCK_QUOTE;
            var16 = var14[var13];
            var17 = var7;
            var13 = copyDataProperties(var17, var16);
            var13 = function react(arg1, arg2, arg3) {
                var1 = arg3;
                var5 = _closure1_slot13;
                var4 = _closure1_slot21;
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
            var7[var11] = var13;
            var1[var8] = var7;
            var7 = var6[var2];
            var7 = var3.bind(var5)(var7);
            var7 = var7.AST_KEY;
            var8 = var7.PARAGRAPH;
            var7 = {};
            var13 = var6[var10];
            var13 = var3.bind(var5)(var13);
            var14 = var13.DEFAULT_RULES;
            var13 = var6[var2];
            var13 = var3.bind(var5)(var13);
            var13 = var13.AST_KEY;
            var13 = var13.PARAGRAPH;
            var16 = var14[var13];
            var17 = var7;
            var13 = copyDataProperties(var17, var16);
            var14 = 600;
            var13 = 'order';
            var7[var13] = var14;
            var13 = function react(arg1, arg2, arg3) {
                var1 = arg3;
                var5 = _closure1_slot13;
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var2 = 26;
                var2 = var8[var2];
                var4 = undefined;
                var2 = var7.bind(var4)(var2);
                var3 = var2.LegacyText;
                var2 = {};
                var6 = 25;
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
            var7[var11] = var13;
            var1[var8] = var7;
            var7 = var6[var2];
            var7 = var3.bind(var5)(var7);
            var7 = var7.AST_KEY;
            var8 = var7.EMOJI;
            var7 = {};
            var13 = function react(arg1, arg2, arg3) {
                _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
                    var2 = arg1;
                    var5 = _closure1_slot13;
                    var4 = _closure1_slot7;
                    var3 = {};
                    var1 = var2.surrogate;
                    if(var1) { _fun0026_ip = 94; continue _fun0026 }
case 89:
                    var1 = var2.content;
case 94:
                    var3['children'] = var1;
                    var1 = arg3;
                    var2 = var1.key;
                    var1 = undefined;
                    var1 = var5.bind(var1)(var4, var3, var2);
                    return var1;
                }
            };
            var7['react'] = var13;
            var1[var8] = var7;
            var7 = var6[var2];
            var7 = var3.bind(var5)(var7);
            var7 = var7.AST_KEY;
            var8 = var7.CUSTOM_EMOJI;
            var7 = {};
            var13 = function react(arg1, arg2, arg3) {
                var4 = _closure1_slot13;
                var3 = _closure1_slot24;
                var2 = {};
                var1 = arg3;
                var2['state'] = var1;
                var1 = arg1;
                var2['node'] = var1;
                var1 = _closure2_slot0;
                var2['styles'] = var1;
                var1 = undefined;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var7['react'] = var13;
            var1[var8] = var7;
            var7 = var6[var2];
            var7 = var3.bind(var5)(var7);
            var7 = var7.AST_KEY;
            var8 = var7.SPOILER;
            var7 = {};
            var13 = function react(arg1, arg2, arg3) {
                var1 = arg3;
                var5 = _closure1_slot13;
                var3 = _closure1_slot1;
                var8 = _closure1_slot2;
                var2 = 38;
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
                var6 = 25;
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
            var7['react'] = var13;
            var1[var8] = var7;
            var7 = var6[var2];
            var7 = var3.bind(var5)(var7);
            var7 = var7.AST_KEY;
            var8 = var7.STATIC_ROUTE_LINK;
            var7 = {};
            var13 = function react(arg1, arg2, arg3) {
                _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
                    var10 = arg1;
                    var1 = arg3;
                    var _closure3_slot0 = var10;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var9 = 25;
                    var2 = var2[var9];
                    var5 = undefined;
                    var4 = var3.bind(var5)(var2);
                    var3 = var4.isStaticRouteIconType;
                    var2 = var10.channelId;
                    var2 = var3.bind(var4)(var2);
                    if(var2) { _fun0027_ip = 16; continue _fun0027 }
case 93:
                    var2 = null;
                    return var2;
case 16:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var4 = 39;
                    var2 = var2[var4];
                    var2 = var3.bind(var5)(var2);
                    var12 = var2.SignPostIcon;
                    var3 = var10.channelId;
                    var2 = _closure1_slot12;
                    var2 = var2.GUILD_HOME;
                    if(!(var2 !== var3)) { _fun0027_ip = 95; continue _fun0027 }
case 92:
                    var2 = _closure1_slot12;
                    var2 = var2.SERVER_GUIDE;
                    if(!(var2 !== var3)) { _fun0027_ip = 95; continue _fun0027 }
case 96:
                    var2 = _closure1_slot12;
                    var2 = var2.CHANNEL_BROWSER;
                    if(!(var2 !== var3)) { _fun0027_ip = 97; continue _fun0027 }
case 98:
                    var2 = _closure1_slot12;
                    var2 = var2.CUSTOMIZE_COMMUNITY;
                    if(!(var2 !== var3)) { _fun0027_ip = 97; continue _fun0027 }
case 99:
                    var2 = _closure1_slot12;
                    var2 = var2.LINKED_ROLES;
                    if(!(var2 === var3)) { _fun0027_ip = 100; continue _fun0027 }
case 101:
                    var3 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 41;
                    var2 = var7[var2];
                    var2 = var3.bind(var5)(var2);
                    var12 = var2.LinkIcon;
                    _fun0027_ip = 100; continue _fun0027;
case 97:
                    var3 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 40;
                    var2 = var7[var2];
                    var2 = var3.bind(var5)(var2);
                    var12 = var2.ChannelListMagnifyingGlassIcon;
                    _fun0027_ip = 100; continue _fun0027;
case 95:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var4];
                    var2 = var3.bind(var5)(var2);
                    var12 = var2.SignPostIcon;
case 100:
                    var4 = _closure1_slot14;
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 26;
                    var2 = var7[var2];
                    var2 = var8.bind(var5)(var2);
                    var3 = var2.LegacyText;
                    var2 = {};
                    var13 = 'button';
                    var2['accessibilityRole'] = var13;
                    var13 = _closure2_slot0;
                    var14 = var13.staticRouteLink;
                    var2['style'] = var14;
                    var11 = function onPress() {
                        _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
case 0:
                            var1 = _closure3_slot0;
                            var4 = var1.guildId;
                            var5 = var1.channelId;
                            var3 = _closure1_slot9;
                            var2 = var3.getGuild;
                            var3 = var2.bind(var3)(var4);
                            var6 = null;
                            var2 = var6 != var4;
                            if(!var2) { _fun0028_ip = 102; continue _fun0028 }
case 103:
                            var2 = var6 != var3;
case 102:
                            if(!var2) { _fun0028_ip = 8; continue _fun0028 }
case 104:
                            var7 = var3.features;
                            var6 = var7.has;
                            var3 = _closure1_slot10;
                            var3 = var3.COMMUNITY;
                            var2 = var6.bind(var7)(var3);
case 8:
                            if(!var2) { _fun0028_ip = 105; continue _fun0028 }
case 106:
                            var2 = _closure1_slot12;
                            var2 = var2.GUILD_HOME;
                            var2 = var5 !== var2;
                            if(!var2) { _fun0028_ip = 79; continue _fun0028 }
case 107:
                            var3 = _closure1_slot12;
                            var3 = var3.SERVER_GUIDE;
                            var2 = var5 !== var3;
case 79:
                            if(var2) { _fun0028_ip = 105; continue _fun0028 }
case 35:
                            var5 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var2 = 11;
                            var3 = var3[var2];
                            var2 = undefined;
                            var3 = var5.bind(var2)(var3);
                            var2 = var3.transitionToStaticChannelRoute;
                            var1 = _closure1_slot11;
                            var1 = var1.GUILD_HOME;
                            var1 = var2.bind(var3)(var4, var1);
case 105:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var2['onPress'] = var11;
                    var11 = _closure1_slot13;
                    var6 = {};
                    var13 = var13.staticRouteLinkIcon;
                    var6['style'] = var13;
                    var13 = 'sm';
                    var6['size'] = var13;
                    var11 = var11.bind(var5)(var12, var6);
                    var6 = new Array(2);
                    var6[0] = var11;
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
            var7['react'] = var13;
            var1[var8] = var7;
            var7 = var6[var2];
            var7 = var3.bind(var5)(var7);
            var7 = var7.AST_KEY;
            var8 = var7.INLINE_CODE;
            var7 = {};
            var13 = var6[var10];
            var13 = var3.bind(var5)(var13);
            var14 = var13.DEFAULT_RULES;
            var13 = var6[var2];
            var13 = var3.bind(var5)(var13);
            var13 = var13.AST_KEY;
            var13 = var13.INLINE_CODE;
            var16 = var14[var13];
            var17 = var7;
            var13 = copyDataProperties(var17, var16);
            var13 = function react(arg1, arg2, arg3) {
                var1 = arg3;
                var5 = _closure1_slot13;
                var4 = _closure1_slot22;
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
            var7[var11] = var13;
            var1[var8] = var7;
            var7 = var6[var2];
            var7 = var3.bind(var5)(var7);
            var7 = var7.AST_KEY;
            var8 = var7.CODE_BLOCK;
            var7 = {};
            var13 = var6[var10];
            var13 = var3.bind(var5)(var13);
            var14 = var13.DEFAULT_RULES;
            var13 = var6[var2];
            var13 = var3.bind(var5)(var13);
            var13 = var13.AST_KEY;
            var13 = var13.CODE_BLOCK;
            var16 = var14[var13];
            var17 = var7;
            var13 = copyDataProperties(var17, var16);
            var13 = function parse(arg1, arg2, arg3) {
                _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
case 0:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 37;
                    var1 = var6[var1];
                    var4 = undefined;
                    var1 = var5.bind(var4)(var1);
                    var3 = var1.DEFAULT_RULES;
                    var1 = 36;
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
                    if(!(var3 === var4)) { _fun0029_ip = 108; continue _fun0029 }
case 109:
                    var5 = var1.content;
                    var4 = var5.replaceAll;
                    var3 = _closure1_slot15;
                    var2 = '';
                    var2 = var4.bind(var5)(var3, var2);
                    var1['content'] = var2;
case 108:
                    return var1;
                }
            };
            var14 = 'parse';
            var7[var14] = var13;
            var13 = function react(arg1, arg2, arg3) {
                var1 = arg3;
                var5 = _closure1_slot13;
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
            var7[var11] = var13;
            var1[var8] = var7;
            var7 = var6[var2];
            var7 = var3.bind(var5)(var7);
            var7 = var7.AST_KEY;
            var8 = var7.MENTION;
            var7 = {};
            var13 = var6[var10];
            var13 = var3.bind(var5)(var13);
            var15 = var13.DEFAULT_RULES;
            var13 = var6[var2];
            var13 = var3.bind(var5)(var13);
            var13 = var13.AST_KEY;
            var13 = var13.MENTION;
            var16 = var15[var13];
            var17 = var7;
            var13 = copyDataProperties(var17, var16);
            var13 = function parse(arg1, arg2, arg3) {
                var1 = {};
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 37;
                var2 = var6[var2];
                var3 = undefined;
                var2 = var5.bind(var3)(var2);
                var4 = var2.DEFAULT_RULES;
                var2 = 36;
                var2 = var6[var2];
                var2 = var5.bind(var3)(var2);
                var2 = var2.AST_KEY;
                var2 = var2.MENTION;
                var2 = var4[var2];
                var6 = var2.parse;
                var5 = arg1;
                var4 = arg2;
                var2 = arg3;
                var8 = var6.bind(var3)(var5, var4, var2);
                var9 = var1;
                var2 = copyDataProperties(var9, var8);
                var2 = 'guildId';
                var1[var2] = var3;
                return var1;
            };
            var7[var14] = var13;
            var7[var11] = var12;
            var1[var8] = var7;
            var7 = var6[var2];
            var7 = var3.bind(var5)(var7);
            var7 = var7.AST_KEY;
            var8 = var7.CHANNEL_MENTION;
            var7 = {};
            var12 = var6[var10];
            var12 = var3.bind(var5)(var12);
            var13 = var12.DEFAULT_RULES;
            var12 = var6[var2];
            var12 = var3.bind(var5)(var12);
            var12 = var12.AST_KEY;
            var12 = var12.CHANNEL_MENTION;
            var16 = var13[var12];
            var17 = var7;
            var12 = copyDataProperties(var17, var16);
            var12 = function react(arg1, arg2, arg3) {
                var1 = arg3;
                var5 = _closure1_slot13;
                var4 = _closure1_slot25;
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
            var7[var11] = var12;
            var1[var8] = var7;
            var7 = var6[var2];
            var7 = var3.bind(var5)(var7);
            var7 = var7.AST_KEY;
            var8 = var7.ATTACHMENT_LINK;
            var7 = {};
            var12 = var6[var10];
            var12 = var3.bind(var5)(var12);
            var13 = var12.DEFAULT_RULES;
            var12 = var6[var2];
            var12 = var3.bind(var5)(var12);
            var12 = var12.AST_KEY;
            var12 = var12.ATTACHMENT_LINK;
            var16 = var13[var12];
            var17 = var7;
            var12 = copyDataProperties(var17, var16);
            var12 = function react(arg1, arg2, arg3) {
                var1 = arg3;
                var5 = _closure1_slot13;
                var4 = _closure1_slot26;
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
            var7[var11] = var12;
            var1[var8] = var7;
            var7 = var6[var2];
            var7 = var3.bind(var5)(var7);
            var7 = var7.AST_KEY;
            var8 = var7.SOUNDBOARD;
            var7 = {};
            var12 = function react(arg1, arg2, arg3) {
                var1 = arg3;
                var5 = _closure1_slot14;
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var2 = 20;
                var2 = var8[var2];
                var4 = undefined;
                var2 = var7.bind(var4)(var2);
                var3 = var2.Text;
                var2 = {};
                var6 = 'text-md/bold';
                var2['variant'] = var6;
                var6 = 25;
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
            var7['react'] = var12;
            var1[var8] = var7;
            var7 = var6[var2];
            var7 = var3.bind(var5)(var7);
            var7 = var7.AST_KEY;
            var8 = var7.GUILD;
            var7 = {};
            var12 = function react(arg1, arg2, arg3) {
                _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
case 0:
                    var13 = arg1;
                    var1 = arg3;
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 42;
                    var2 = var4[var2];
                    var5 = undefined;
                    var3 = var3.bind(var5)(var2);
                    var2 = var3.isAndroid;
                    var2 = var2.bind(var3)();
                    var7 = 2;
                    if(var2) { _fun0030_ip = 110; continue _fun0030 }
case 111:
                    var3 = _closure1_slot4;
                    var2 = var3.getFontScale;
                    var3 = var2.bind(var3)();
                    var2 = 1.5;
                    var3 = var3 < var2;
                    var2 = 0;
                    if(!var3) { _fun0030_ip = 90; continue _fun0030 }
case 106:
                    var2 = 1;
case 90:
                    var7 = var2;
case 110:
                    var2 = var13.icon;
                    var14 = null;
                    var2 = var14 != var2;
                    if(!var2) { _fun0030_ip = 112; continue _fun0030 }
case 113:
                    var4 = _closure1_slot13;
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var10 = 17;
                    var2 = var2[var10];
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
                    if(!(!(var7 < var6))) { _fun0030_ip = 114; continue _fun0030 }
case 36:
                    var6 = 1.25;
                    if(!(!(var7 < var6))) { _fun0030_ip = 24; continue _fun0030 }
case 115:
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var6 = var6[var10];
                    var6 = var7.bind(var5)(var6);
                    var6 = var6.GuildIconSizes;
                    var6 = var6.XXSMALL;
                    _fun0030_ip = 116; continue _fun0030;
case 24:
                    var9 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var7 = var7[var10];
                    var7 = var9.bind(var5)(var7);
                    var7 = var7.GuildIconSizes;
                    var6 = var7.XXSMALL_12;
case 116:
                    _fun0030_ip = 117; continue _fun0030;
case 114:
                    var9 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var7 = var7[var10];
                    var7 = var9.bind(var5)(var7);
                    var7 = var7.GuildIconSizes;
                    var6 = var7.XXXSMALL;
case 117:
                    var2['size'] = var6;
                    var14 = var4.bind(var5)(var3, var2);
case 112:
                    var4 = _closure1_slot14;
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var7 = 26;
                    var2 = var12[var7];
                    var2 = var11.bind(var5)(var2);
                    var3 = var2.LegacyText;
                    var2 = {};
                    var10 = _closure1_slot13;
                    var9 = _closure1_slot6;
                    var6 = {};
                    var15 = _closure1_slot16;
                    var15 = var15.guildIcon;
                    var6['style'] = var15;
                    var6['children'] = var14;
                    var9 = var10.bind(var5)(var9, var6);
                    var6 = new Array(2);
                    var6[0] = var9;
                    var9 = _closure1_slot13;
                    var7 = var12[var7];
                    var7 = var11.bind(var5)(var7);
                    var8 = var7.LegacyText;
                    var7 = {};
                    var10 = 25;
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
            var7['react'] = var12;
            var1[var8] = var7;
            var7 = var6[var2];
            var7 = var3.bind(var5)(var7);
            var7 = var7.AST_KEY;
            var8 = var7.CHANNEL;
            var7 = {};
            var12 = function react(arg1, arg2, arg3) {
                _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
case 0:
                    var10 = arg1;
                    var1 = arg3;
                    var3 = var10.iconType;
                    var2 = null;
                    var4 = var2 != var3;
                    var2 = 'text';
                    var12 = var2;
                    if(!var4) { _fun0031_ip = 118; continue _fun0031 }
case 12:
                    var12 = var3;
case 118:
                    var14 = 2;
                    if(!(var2 === var12)) { _fun0031_ip = 119; continue _fun0031 }
case 81:
                    var14 = 0;
case 119:
                    var4 = _closure1_slot13;
                    var8 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var2 = 32;
                    var2 = var9[var2];
                    var5 = undefined;
                    var3 = var8.bind(var5)(var2);
                    var2 = {};
                    var7 = 10;
                    var7 = var9[var7];
                    var7 = var8.bind(var5)(var7);
                    var7 = var7.colors;
                    var7 = var7.MENTION_FOREGROUND;
                    var2['themedColor'] = var7;
                    var8 = _closure1_slot0;
                    var7 = 43;
                    var7 = var9[var7];
                    var11 = var8.bind(var5)(var7);
                    var7 = var11.getChannelMentionIcon;
                    var7 = var7.bind(var11)(var12);
                    var2['source'] = var7;
                    var7 = _closure1_slot18;
                    var7 = var7.bind(var5)();
                    var2['size'] = var7;
                    var7 = {};
                    var11 = 1;
                    var7['top'] = var11;
                    var2['style'] = var7;
                    var12 = var4.bind(var5)(var3, var2);
                    var4 = _closure1_slot14;
                    var2 = 26;
                    var2 = var9[var2];
                    var2 = var8.bind(var5)(var2);
                    var3 = var2.LegacyText;
                    var2 = {};
                    var11 = _closure1_slot13;
                    var7 = _closure1_slot6;
                    var6 = {};
                    var13 = {};
                    var13['paddingEnd'] = var14;
                    var6['style'] = var13;
                    var6['children'] = var12;
                    var7 = var11.bind(var5)(var7, var6);
                    var6 = new Array(2);
                    var6[0] = var7;
                    var7 = 25;
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
            var7['react'] = var12;
            var1[var8] = var7;
            var7 = var6[var2];
            var7 = var3.bind(var5)(var7);
            var7 = var7.AST_KEY;
            var8 = var7.COMMAND_MENTION;
            var7 = {};
            var12 = var6[var10];
            var12 = var3.bind(var5)(var12);
            var13 = var12.DEFAULT_RULES;
            var12 = var6[var2];
            var12 = var3.bind(var5)(var12);
            var12 = var12.AST_KEY;
            var12 = var12.COMMAND_MENTION;
            var16 = var13[var12];
            var17 = var7;
            var12 = copyDataProperties(var17, var16);
            var12 = function react(arg1, arg2, arg3) {
                var1 = arg3;
                var5 = _closure1_slot13;
                var4 = _closure1_slot27;
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
            var7[var11] = var12;
            var1[var8] = var7;
            var7 = var6[var2];
            var7 = var3.bind(var5)(var7);
            var7 = var7.AST_KEY;
            var8 = var7.TIMESTAMP;
            var7 = {};
            var12 = var6[var10];
            var12 = var3.bind(var5)(var12);
            var13 = var12.DEFAULT_RULES;
            var12 = var6[var2];
            var12 = var3.bind(var5)(var12);
            var12 = var12.AST_KEY;
            var12 = var12.TIMESTAMP;
            var16 = var13[var12];
            var17 = var7;
            var12 = copyDataProperties(var17, var16);
            var12 = function react(arg1, arg2, arg3) {
                var5 = _closure1_slot13;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 44;
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
            var7[var11] = var12;
            var1[var8] = var7;
            var7 = var6[var2];
            var7 = var3.bind(var5)(var7);
            var7 = var7.AST_KEY;
            var8 = var7.LIST;
            var7 = {};
            var10 = var6[var10];
            var10 = var3.bind(var5)(var10);
            var12 = var10.DEFAULT_RULES;
            var10 = var6[var2];
            var10 = var3.bind(var5)(var10);
            var10 = var10.AST_KEY;
            var10 = var10.LIST;
            var16 = var12[var10];
            var17 = var7;
            var10 = copyDataProperties(var17, var16);
            var10 = function react(arg1, arg2, arg3) {
                _fun0032: for(var _fun0032_ip = 0; ; ) switch(_fun0032_ip) {
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
                    if(!var6) { _fun0032_ip = 111; continue _fun0032 }
case 119:
                    var4 = var1.level;
case 111:
                    var _closure3_slot3 = var4;
                    var4 = var3.start;
                    if(!(var5 == var4)) { _fun0032_ip = 15; continue _fun0032 }
case 120:
                    var4 = var1.start;
                    _fun0032_ip = 5; continue _fun0032;
case 15:
                    var4 = var3.start;
case 5:
                    var _closure3_slot4 = var4;
                    var4 = var3.items;
                    var3 = var4.map;
                    var2 = function(arg1, arg2) {
                        _fun0033: for(var _fun0033_ip = 0; ; ) switch(_fun0033_ip) {
case 0:
                            var16 = arg1;
                            var9 = arg2;
                            var _closure4_slot0 = var16;
                            var1 = _closure3_slot3;
                            var8 = '⚬ ';
                            var10 = 0;
                            if(!(var10 === var1)) { _fun0033_ip = 121; continue _fun0033 }
case 122:
                            var1 = _closure3_slot0;
                            var1 = var1.ordered;
                            var2 = 'boolean';
                            var1 = typeof var1;
                            if(!(var2 === var1)) { _fun0033_ip = 17; continue _fun0033 }
case 123:
                            var1 = _closure3_slot0;
                            var1 = var1.ordered;
                            if(!var1) { _fun0033_ip = 17; continue _fun0033 }
case 46:
                            var2 = _closure3_slot4;
                            var1 = null;
                            if(!(var1 == var2)) { _fun0033_ip = 124; continue _fun0033 }
case 17:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 42;
                            var2 = var2[var1];
                            var1 = undefined;
                            var2 = var3.bind(var1)(var2);
                            var1 = var2.isAndroid;
                            var2 = var1.bind(var2)();
                            var1 = '● ';
                            if(!var2) { _fun0033_ip = 125; continue _fun0033 }
case 23:
                            var1 = '• ';
case 125:
                            _fun0033_ip = 49; continue _fun0033;
case 124:
                            var2 = _closure3_slot4;
                            var5 = var2 + var9;
                            var2 = global;
                            var2 = var2.HermesInternal;
                            var4 = var2.concat;
                            var3 = '';
                            var2 = '. ';
                            var1 = var4.bind(var3)(var5, var2);
case 49:
                            var8 = var1;
case 121:
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
                            var15[var2] = var3;
                            var2 = _closure3_slot3;
                            var11 = 1;
                            var3 = var2 + var11;
                            var2 = 'level';
                            var15[var2] = var3;
                            var3 = _closure3_slot4;
                            var2 = null;
                            if(!(var2 == var3)) { _fun0033_ip = 126; continue _fun0033 }
case 127:
                            var3 = _closure3_slot4;
                            _fun0033_ip = 128; continue _fun0033;
case 126:
                            var2 = _closure3_slot4;
                            var3 = var2 + var11;
case 128:
                            var2 = 'start';
                            var15[var2] = var3;
                            var _closure4_slot1 = var15;
                            var5 = _closure1_slot14;
                            var17 = _closure1_slot0;
                            var19 = _closure1_slot2;
                            var2 = 20;
                            var2 = var19[var2];
                            var4 = undefined;
                            var2 = var17.bind(var4)(var2);
                            var3 = var2.Text;
                            var2 = {};
                            var13 = _closure1_slot16;
                            var13 = var13.listItem;
                            var2['style'] = var13;
                            var13 = 'text-sm/medium';
                            var2['variant'] = var13;
                            var18 = _closure1_slot14;
                            var13 = 26;
                            var13 = var19[var13];
                            var13 = var17.bind(var4)(var13);
                            var17 = var13.LegacyText;
                            var13 = {};
                            var7 = _closure1_slot16;
                            var7 = var7.bullet;
                            var13['style'] = var7;
                            var7 = _closure3_slot3;
                            var7 = var7 > var10;
                            var10 = var12;
                            if(!var7) { _fun0033_ip = 129; continue _fun0033 }
case 130:
                            var20 = '  ';
                            var19 = var20.repeat;
                            var7 = _closure3_slot3;
                            var10 = var19.bind(var20)(var7);
case 129:
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
                            if(var13) { _fun0033_ip = 131; continue _fun0033 }
case 132:
                            var13 = _closure3_slot1;
                            var13 = var13.bind(var4)(var16, var15);
                            _fun0033_ip = 133; continue _fun0033;
case 131:
                            var15 = var16.map;
                            var14 = function(arg1, arg2) {
                                _fun0034: for(var _fun0034_ip = 0; ; ) switch(_fun0034_ip) {
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
                                    var4 = _closure1_slot14;
                                    var2 = _closure1_slot3;
                                    var3 = var2.Fragment;
                                    var2 = {};
                                    var9 = var8;
                                    if(!var9) { _fun0034_ip = 5; continue _fun0034 }
case 13:
                                    var9 = '\n';
case 5:
                                    var6 = new Array(3);
                                    var6[0] = var9;
                                    var10 = _closure3_slot1;
                                    var9 = _closure4_slot1;
                                    var1 = undefined;
                                    var9 = var10.bind(var1)(var11, var9);
                                    var6[1] = var9;
                                    if(!var7) { _fun0034_ip = 82; continue _fun0034 }
case 92:
                                    var7 = !var8;
case 82:
                                    if(!var7) { _fun0034_ip = 134; continue _fun0034 }
case 135:
                                    var7 = '\n';
case 134:
                                    var6[2] = var7;
                                    var2['children'] = var6;
                                    var1 = var4.bind(var1)(var3, var2, var5);
                                    return var1;
                                }
                            };
                            var13 = var15.bind(var16)(var14);
case 133:
                            var10[1] = var13;
                            var13 = _closure3_slot0;
                            var13 = var13.items;
                            var14 = var13.length;
                            var13 = var9 + var11;
                            var11 = '  ';
                            if(!(var14 === var13)) { _fun0033_ip = 136; continue _fun0033 }
case 137:
                            var11 = var12;
case 136:
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
                    var5 = _closure1_slot13;
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 20;
                    var2 = var4[var2];
                    var4 = undefined;
                    var2 = var3.bind(var4)(var2);
                    var3 = var2.Text;
                    var2 = {};
                    var7 = _closure1_slot16;
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
            var7[var11] = var10;
            var1[var8] = var7;
            var7 = var6[var2];
            var7 = var3.bind(var5)(var7);
            var7 = var7.AST_KEY;
            var8 = var7.HEADING;
            var7 = {};
            var10 = function react(arg1, arg2, arg3) {
                _fun0035: for(var _fun0035_ip = 0; ; ) switch(_fun0035_ip) {
case 0:
                    var9 = arg1;
                    var1 = arg3;
                    var3 = var9.level;
                    var7 = 'heading-xl/bold';
                    var2 = 1;
                    if(!(var2 !== var3)) { _fun0035_ip = 138; continue _fun0035 }
case 89:
                    var4 = var9.level;
                    var2 = 'heading-md/bold';
                    var3 = 2;
                    if(!(var3 === var4)) { _fun0035_ip = 139; continue _fun0035 }
case 140:
                    var2 = 'heading-lg/bold';
case 139:
                    var7 = var2;
case 138:
                    var5 = _closure1_slot14;
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 20;
                    var2 = var4[var2];
                    var4 = undefined;
                    var2 = var3.bind(var4)(var2);
                    var3 = var2.Text;
                    var2 = {};
                    var2['variant'] = var7;
                    var8 = var1.forceWhite;
                    var7 = 'header-primary';
                    if(!var8) { _fun0035_ip = 79; continue _fun0035 }
case 141:
                    var7 = 'white';
case 79:
                    var2['color'] = var7;
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var6 = 25;
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
            var7['react'] = var10;
            var1[var8] = var7;
            var7 = var6[var2];
            var7 = var3.bind(var5)(var7);
            var7 = var7.AST_KEY;
            var8 = var7.SUBTEXT;
            var7 = {};
            var10 = function react(arg1, arg2, arg3) {
                var1 = arg3;
                var5 = _closure1_slot14;
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var2 = 20;
                var2 = var8[var2];
                var4 = undefined;
                var2 = var7.bind(var4)(var2);
                var3 = var2.Text;
                var2 = {'variant': 'text-sm/normal', 'color': 'text-muted'};
                var6 = 25;
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
            var7['react'] = var10;
            var1[var8] = var7;
            var7 = var6[var2];
            var7 = var3.bind(var5)(var7);
            var7 = var7.AST_KEY;
            var8 = var7.SILENT_PREFIX;
            var7 = {};
            var9 = function react(arg1, arg2, arg3) {
                _fun0036: for(var _fun0036_ip = 0; ; ) switch(_fun0036_ip) {
case 0:
                    var2 = arg1;
                    var1 = arg3;
                    var3 = var2.content;
                    var4 = 'string';
                    var3 = typeof var3;
                    if(!(var4 !== var3)) { _fun0036_ip = 92; continue _fun0036 }
case 14:
                    var6 = _closure1_slot13;
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var3 = 26;
                    var3 = var9[var3];
                    var5 = undefined;
                    var3 = var8.bind(var5)(var3);
                    var4 = var3.LegacyText;
                    var3 = {};
                    var7 = 25;
                    var7 = var9[var7];
                    var9 = var8.bind(var5)(var7);
                    var8 = var9.smartOutput;
                    var7 = arg2;
                    var7 = var8.bind(var9)(var2, var7, var1);
                    var3['children'] = var7;
                    var1 = var1.key;
                    var1 = var6.bind(var5)(var4, var3, var1);
                    _fun0036_ip = 79; continue _fun0036;
case 92:
                    var1 = var2.content;
case 79:
                    return var1;
                }
            };
            var7['react'] = var9;
            var1[var8] = var7;
            var2 = var6[var2];
            var2 = var3.bind(var5)(var2);
            var2 = var2.AST_KEY;
            var3 = var2.SHOP_LINK;
            var2 = {};
            var2['react'] = var4;
            var1[var3] = var2;
            return var1;
        }
    };
    var3['default'] = var4;
    var4 = function plainMentionRenderer(arg1, arg2, arg3) {
        _fun0037: for(var _fun0037_ip = 0; ; ) switch(_fun0037_ip) {
case 0:
            var2 = arg1;
            var1 = var2.content;
            var3 = 'string';
            var1 = typeof var1;
            if(!(var3 !== var1)) { _fun0037_ip = 142; continue _fun0037 }
case 78:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 25;
            var3 = var3[var1];
            var1 = undefined;
            var5 = var4.bind(var1)(var3);
            var4 = var5.smartOutput;
            var3 = arg2;
            var1 = arg3;
            var1 = var4.bind(var5)(var2, var3, var1);
            _fun0037_ip = 143; continue _fun0037;
case 142:
            var1 = var2.content;
case 143:
            return var1;
        }
    };
    var3['plainMentionRenderer'] = var4;
    var2 = function plainSpoilerRenderer(arg1) {
        _fun0038: for(var _fun0038_ip = 0; ; ) switch(_fun0038_ip) {
case 0:
            var2 = arg1;
            var3 = var2.content;
            var1 = '███';
            var4 = 'string';
            var3 = typeof var3;
            if(!(var4 === var3)) { _fun0038_ip = 120; continue _fun0038 }
case 89:
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