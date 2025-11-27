// app/modules/markup/native/MarkupMessagePreviewReactRules.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var7;
    var1 = function defaultReactFn(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var1 = var2.content;
            var3 = 'string';
            var1 = typeof var1;
            if(!(var3 !== var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 4;
            var3 = var3[var1];
            var1 = undefined;
            var5 = var4.bind(var1)(var3);
            var4 = var5.smartOutput;
            var3 = arg2;
            var1 = arg3;
            var1 = var4.bind(var5)(var2, var3, var1);
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var1 = var2.content;
case 4:
            return var1;
        }
    };
    var _closure1_slot7 = var1;
    var2 = function createMessagePreviewReactRules(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var2 = var1.iconColor;
            var _closure2_slot0 = var2;
            var2 = var1.iconSize;
            var _closure2_slot1 = var2;
            var2 = var1.channelIconSize;
            var _closure2_slot2 = var2;
            var1 = var1.customEmojiSize;
            var5 = undefined;
            if(!(var1 === var5)) { _fun0002_ip = 5; continue _fun0002 }
case 6:
            var1 = 15;
case 5:
            var _closure2_slot3 = var1;
            var1 = {};
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 7;
            var7 = var6[var2];
            var7 = var3.bind(var5)(var7);
            var7 = var7.AST_KEY;
            var8 = var7.TEXT;
            var7 = {};
            var9 = _closure1_slot7;
            var7['react'] = var9;
            var1[var8] = var7;
            var7 = var6[var2];
            var7 = var3.bind(var5)(var7);
            var7 = var7.AST_KEY;
            var8 = var7.STRIKETHROUGH;
            var7 = {};
            var10 = 8;
            var11 = var6[var10];
            var11 = var3.bind(var5)(var11);
            var12 = var11.DEFAULT_RULES;
            var11 = var6[var2];
            var11 = var3.bind(var5)(var11);
            var11 = var11.AST_KEY;
            var11 = var11.STRIKETHROUGH;
            var14 = var12[var11];
            var15 = var7;
            var11 = copyDataProperties(var15, var14);
            var11 = 'react';
            var7[var11] = var9;
            var1[var8] = var7;
            var7 = var6[var2];
            var7 = var3.bind(var5)(var7);
            var7 = var7.AST_KEY;
            var8 = var7.UNDERLINE;
            var7 = {};
            var12 = var6[var10];
            var12 = var3.bind(var5)(var12);
            var13 = var12.DEFAULT_RULES;
            var12 = var6[var2];
            var12 = var3.bind(var5)(var12);
            var12 = var12.AST_KEY;
            var12 = var12.UNDERLINE;
            var14 = var13[var12];
            var15 = var7;
            var12 = copyDataProperties(var15, var14);
            var7[var11] = var9;
            var1[var8] = var7;
            var7 = var6[var2];
            var7 = var3.bind(var5)(var7);
            var7 = var7.AST_KEY;
            var8 = var7.ITALICS;
            var7 = {};
            var12 = var6[var10];
            var12 = var3.bind(var5)(var12);
            var13 = var12.DEFAULT_RULES;
            var12 = var6[var2];
            var12 = var3.bind(var5)(var12);
            var12 = var12.AST_KEY;
            var12 = var12.ITALICS;
            var14 = var13[var12];
            var15 = var7;
            var12 = copyDataProperties(var15, var14);
            var7[var11] = var9;
            var1[var8] = var7;
            var7 = var6[var2];
            var7 = var3.bind(var5)(var7);
            var7 = var7.AST_KEY;
            var8 = var7.STRONG;
            var7 = {};
            var12 = var6[var10];
            var12 = var3.bind(var5)(var12);
            var13 = var12.DEFAULT_RULES;
            var12 = var6[var2];
            var12 = var3.bind(var5)(var12);
            var12 = var12.AST_KEY;
            var12 = var12.STRONG;
            var14 = var13[var12];
            var15 = var7;
            var12 = copyDataProperties(var15, var14);
            var7[var11] = var9;
            var1[var8] = var7;
            var7 = var6[var2];
            var7 = var3.bind(var5)(var7);
            var7 = var7.AST_KEY;
            var8 = var7.LINK;
            var7 = {};
            var12 = var6[var10];
            var12 = var3.bind(var5)(var12);
            var13 = var12.DEFAULT_RULES;
            var12 = var6[var2];
            var12 = var3.bind(var5)(var12);
            var12 = var12.AST_KEY;
            var12 = var12.LINK;
            var14 = var13[var12];
            var15 = var7;
            var12 = copyDataProperties(var15, var14);
            var7[var11] = var9;
            var1[var8] = var7;
            var7 = var6[var2];
            var7 = var3.bind(var5)(var7);
            var7 = var7.AST_KEY;
            var8 = var7.URL;
            var7 = {};
            var12 = var6[var10];
            var12 = var3.bind(var5)(var12);
            var13 = var12.DEFAULT_RULES;
            var12 = var6[var2];
            var12 = var3.bind(var5)(var12);
            var12 = var12.AST_KEY;
            var12 = var12.URL;
            var14 = var13[var12];
            var15 = var7;
            var12 = copyDataProperties(var15, var14);
            var7[var11] = var9;
            var1[var8] = var7;
            var7 = var6[var2];
            var7 = var3.bind(var5)(var7);
            var7 = var7.AST_KEY;
            var8 = var7.AUTOLINK;
            var7 = {};
            var12 = var6[var10];
            var12 = var3.bind(var5)(var12);
            var13 = var12.DEFAULT_RULES;
            var12 = var6[var2];
            var12 = var3.bind(var5)(var12);
            var12 = var12.AST_KEY;
            var12 = var12.AUTOLINK;
            var14 = var13[var12];
            var15 = var7;
            var12 = copyDataProperties(var15, var14);
            var7[var11] = var9;
            var1[var8] = var7;
            var7 = var6[var2];
            var7 = var3.bind(var5)(var7);
            var7 = var7.AST_KEY;
            var8 = var7.LINE_BREAK;
            var7 = {};
            var12 = var6[var10];
            var12 = var3.bind(var5)(var12);
            var13 = var12.DEFAULT_RULES;
            var12 = var6[var2];
            var12 = var3.bind(var5)(var12);
            var12 = var12.AST_KEY;
            var12 = var12.LINE_BREAK;
            var14 = var13[var12];
            var15 = var7;
            var12 = copyDataProperties(var15, var14);
            var12 = function react() {
                var1 = '\n';
                return var1;
            };
            var7[var11] = var12;
            var1[var8] = var7;
            var7 = var6[var2];
            var7 = var3.bind(var5)(var7);
            var7 = var7.AST_KEY;
            var8 = var7.HIGHLIGHT;
            var7 = {};
            var12 = function react(arg1, arg2, arg3) {
                var1 = arg3;
                var5 = _closure1_slot4;
                var3 = _closure1_slot1;
                var8 = _closure1_slot2;
                var2 = 9;
                var2 = var8[var2];
                var4 = undefined;
                var3 = var3.bind(var4)(var2);
                var2 = {};
                var7 = _closure1_slot0;
                var6 = 4;
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
            var1[var8] = var7;
            var7 = var6[var2];
            var7 = var3.bind(var5)(var7);
            var7 = var7.AST_KEY;
            var8 = var7.BLOCK_QUOTE;
            var7 = {};
            var12 = var6[var10];
            var12 = var3.bind(var5)(var12);
            var13 = var12.DEFAULT_RULES;
            var12 = var6[var2];
            var12 = var3.bind(var5)(var12);
            var12 = var12.AST_KEY;
            var12 = var12.BLOCK_QUOTE;
            var14 = var13[var12];
            var15 = var7;
            var12 = copyDataProperties(var15, var14);
            var7[var11] = var9;
            var1[var8] = var7;
            var7 = var6[var2];
            var7 = var3.bind(var5)(var7);
            var7 = var7.AST_KEY;
            var8 = var7.PARAGRAPH;
            var7 = {};
            var12 = var6[var10];
            var12 = var3.bind(var5)(var12);
            var13 = var12.DEFAULT_RULES;
            var12 = var6[var2];
            var12 = var3.bind(var5)(var12);
            var12 = var12.AST_KEY;
            var12 = var12.PARAGRAPH;
            var14 = var13[var12];
            var15 = var7;
            var12 = copyDataProperties(var15, var14);
            var13 = 600;
            var12 = 'order';
            var7[var12] = var13;
            var7[var11] = var9;
            var1[var8] = var7;
            var7 = var6[var2];
            var7 = var3.bind(var5)(var7);
            var7 = var7.AST_KEY;
            var8 = var7.EMOJI;
            var7 = {};
            var12 = function react(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = arg1;
                    var1 = var2.surrogate;
                    if(var1) { _fun0003_ip = 7; continue _fun0003 }
case 8:
                    var1 = var2.content;
case 7:
                    return var1;
                }
            };
            var7['react'] = var12;
            var1[var8] = var7;
            var7 = var6[var2];
            var7 = var3.bind(var5)(var7);
            var7 = var7.AST_KEY;
            var8 = var7.CUSTOM_EMOJI;
            var7 = {};
            var12 = function react(arg1, arg2, arg3) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var7 = arg1;
                    var1 = arg3;
                    var2 = var7.src;
                    if(var2) { _fun0004_ip = 9; continue _fun0004 }
case 10:
                    var2 = var7.alt;
                    return var2;
case 9:
                    var3 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var2 = 5;
                    var2 = var6[var2];
                    var5 = undefined;
                    var4 = var3.bind(var5)(var2);
                    var3 = var4.makeSizeStyle;
                    var2 = _closure2_slot3;
                    var8 = var3.bind(var4)(var2);
                    var4 = _closure1_slot4;
                    var3 = _closure1_slot1;
                    var2 = 10;
                    var2 = var6[var2];
                    var3 = var3.bind(var5)(var2);
                    var2 = {};
                    var6 = new Array(2);
                    var6[0] = var8;
                    var8 = var1.muted;
                    if(!var8) { _fun0004_ip = 11; continue _fun0004 }
case 12:
                    var9 = {};
                    var10 = _closure1_slot3;
                    var9['opacity'] = var10;
                    var8 = var9;
case 11:
                    var6[1] = var8;
                    var2['style'] = var6;
                    var6 = {};
                    var7 = var7.src;
                    var6['uri'] = var7;
                    var2['source'] = var6;
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
            var8 = var7.SPOILER;
            var7 = {};
            var12 = function react(arg1, arg2, arg3) {
                var1 = arg3;
                var5 = _closure1_slot4;
                var3 = _closure1_slot1;
                var8 = _closure1_slot2;
                var2 = 11;
                var2 = var8[var2];
                var4 = undefined;
                var3 = var3.bind(var4)(var2);
                var2 = {};
                var7 = true;
                var2['disableReveal'] = var7;
                var7 = var1.muted;
                var2['muted'] = var7;
                var7 = _closure1_slot0;
                var6 = 4;
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
            var1[var8] = var7;
            var7 = var6[var2];
            var7 = var3.bind(var5)(var7);
            var7 = var7.AST_KEY;
            var8 = var7.STATIC_ROUTE_LINK;
            var7 = {};
            var12 = function react(arg1, arg2, arg3) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var6 = arg1;
                    var3 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var5 = 4;
                    var1 = var1[var5];
                    var4 = undefined;
                    var7 = var3.bind(var4)(var1);
                    var3 = var7.isStaticRouteIconType;
                    var1 = var6.channelId;
                    var3 = var3.bind(var7)(var1);
                    var1 = null;
                    if(!var3) { _fun0005_ip = 13; continue _fun0005 }
case 14:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var5];
                    var5 = var3.bind(var4)(var2);
                    var4 = var5.smartOutput;
                    var3 = arg2;
                    var2 = arg3;
                    var1 = var4.bind(var5)(var6, var3, var2);
case 13:
                    return var1;
                }
            };
            var7['react'] = var12;
            var1[var8] = var7;
            var7 = var6[var2];
            var7 = var3.bind(var5)(var7);
            var7 = var7.AST_KEY;
            var8 = var7.INLINE_CODE;
            var7 = {};
            var12 = var6[var10];
            var12 = var3.bind(var5)(var12);
            var13 = var12.DEFAULT_RULES;
            var12 = var6[var2];
            var12 = var3.bind(var5)(var12);
            var12 = var12.AST_KEY;
            var12 = var12.INLINE_CODE;
            var14 = var13[var12];
            var15 = var7;
            var12 = copyDataProperties(var15, var14);
            var7[var11] = var9;
            var1[var8] = var7;
            var7 = var6[var2];
            var7 = var3.bind(var5)(var7);
            var7 = var7.AST_KEY;
            var8 = var7.CODE_BLOCK;
            var7 = {};
            var12 = var6[var10];
            var12 = var3.bind(var5)(var12);
            var13 = var12.DEFAULT_RULES;
            var12 = var6[var2];
            var12 = var3.bind(var5)(var12);
            var12 = var12.AST_KEY;
            var12 = var12.CODE_BLOCK;
            var14 = var13[var12];
            var15 = var7;
            var12 = copyDataProperties(var15, var14);
            var13 = function parse(arg1, arg2, arg3) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 8;
                    var1 = var6[var1];
                    var4 = undefined;
                    var1 = var5.bind(var4)(var1);
                    var3 = var1.DEFAULT_RULES;
                    var1 = 7;
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
                    if(!(var3 === var4)) { _fun0006_ip = 15; continue _fun0006 }
case 16:
                    var5 = var1.content;
                    var4 = var5.replaceAll;
                    var3 = _closure1_slot6;
                    var2 = '';
                    var2 = var4.bind(var5)(var3, var2);
                    var1['content'] = var2;
case 15:
                    return var1;
                }
            };
            var12 = 'parse';
            var7[var12] = var13;
            var7[var11] = var9;
            var1[var8] = var7;
            var7 = var6[var2];
            var7 = var3.bind(var5)(var7);
            var7 = var7.AST_KEY;
            var8 = var7.MENTION;
            var7 = {};
            var12 = var6[var10];
            var12 = var3.bind(var5)(var12);
            var13 = var12.DEFAULT_RULES;
            var12 = var6[var2];
            var12 = var3.bind(var5)(var12);
            var12 = var12.AST_KEY;
            var12 = var12.MENTION;
            var14 = var13[var12];
            var15 = var7;
            var12 = copyDataProperties(var15, var14);
            var7[var11] = var9;
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
            var14 = var13[var12];
            var15 = var7;
            var12 = copyDataProperties(var15, var14);
            var12 = function react(arg1, arg2, arg3) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var6 = arg1;
                    var5 = arg2;
                    var4 = arg3;
                    var2 = var6.inContent;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0007_ip = 17; continue _fun0007 }
case 18:
                    var8 = _closure1_slot5;
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var1 = 12;
                    var1 = var11[var1];
                    var7 = undefined;
                    var1 = var10.bind(var7)(var1);
                    var3 = var1.LegacyText;
                    var2 = {};
                    var1 = var6.inContent;
                    var9 = var5.bind(var7)(var1, var4);
                    var1 = new Array(3);
                    var1[0] = var9;
                    var9 = ' › ';
                    var1[1] = var9;
                    var9 = 4;
                    var9 = var11[var9];
                    var10 = var10.bind(var7)(var9);
                    var9 = var10.smartOutput;
                    var9 = var9.bind(var10)(var6, var5, var4);
                    var1[2] = var9;
                    var2['children'] = var1;
                    var1 = var4.key;
                    var1 = var8.bind(var7)(var3, var2, var1);
                    _fun0007_ip = 19; continue _fun0007;
case 17:
                    var7 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 4;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var7.bind(var2)(var3);
                    var2 = var3.smartOutput;
                    var1 = var2.bind(var3)(var6, var5, var4);
case 19:
                    return var1;
                }
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
            var14 = var13[var12];
            var15 = var7;
            var12 = copyDataProperties(var15, var14);
            var12 = function react(arg1, arg2, arg3) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var1 = arg3;
                    var5 = _closure1_slot5;
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var2 = 12;
                    var2 = var9[var2];
                    var4 = undefined;
                    var2 = var8.bind(var4)(var2);
                    var3 = var2.LegacyText;
                    var2 = {};
                    var6 = 13;
                    var6 = var9[var6];
                    var8 = var8.bind(var4)(var6);
                    var6 = var8.isFabric;
                    var6 = var6.bind(var8)();
                    var8 = '📎 ';
                    if(var6) { _fun0008_ip = 20; continue _fun0008 }
case 21:
                    var10 = _closure1_slot4;
                    var9 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var6 = 14;
                    var6 = var11[var6];
                    var6 = var9.bind(var4)(var6);
                    var9 = var6.AttachmentIcon;
                    var6 = {};
                    var12 = _closure2_slot0;
                    var6['color'] = var12;
                    var11 = _closure2_slot1;
                    var6['size'] = var11;
                    var8 = var10.bind(var4)(var9, var6);
case 20:
                    var6 = new Array(2);
                    var6[0] = var8;
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var7 = 4;
                    var7 = var9[var7];
                    var10 = var8.bind(var4)(var7);
                    var9 = var10.smartOutput;
                    var8 = arg1;
                    var7 = arg2;
                    var7 = var9.bind(var10)(var8, var7, var1);
                    var6[1] = var7;
                    var2['children'] = var6;
                    var1 = var1.key;
                    var1 = var5.bind(var4)(var3, var2, var1);
                    return var1;
                }
            };
            var7[var11] = var12;
            var1[var8] = var7;
            var7 = var6[var2];
            var7 = var3.bind(var5)(var7);
            var7 = var7.AST_KEY;
            var8 = var7.SOUNDBOARD;
            var7 = {};
            var12 = var6[var10];
            var12 = var3.bind(var5)(var12);
            var13 = var12.DEFAULT_RULES;
            var12 = var6[var2];
            var12 = var3.bind(var5)(var12);
            var12 = var12.AST_KEY;
            var12 = var12.SOUNDBOARD;
            var14 = var13[var12];
            var15 = var7;
            var12 = copyDataProperties(var15, var14);
            var7[var11] = var9;
            var1[var8] = var7;
            var7 = var6[var2];
            var7 = var3.bind(var5)(var7);
            var7 = var7.AST_KEY;
            var8 = var7.GUILD;
            var7 = {};
            var7['react'] = var9;
            var1[var8] = var7;
            var7 = var6[var2];
            var7 = var3.bind(var5)(var7);
            var7 = var7.AST_KEY;
            var8 = var7.CHANNEL;
            var7 = {};
            var12 = function react(arg1, arg2, arg3) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var11 = arg1;
                    var1 = arg3;
                    var5 = var11.iconType;
                    var2 = 'text';
                    if(!(var2 !== var5)) { _fun0009_ip = 22; continue _fun0009 }
case 9:
                    var2 = 'forum';
                    if(!(var2 !== var5)) { _fun0009_ip = 22; continue _fun0009 }
case 23:
                    var2 = 'media';
                    if(!(var2 !== var5)) { _fun0009_ip = 22; continue _fun0009 }
case 6:
                    var2 = 'thread';
                    if(!(var2 !== var5)) { _fun0009_ip = 24; continue _fun0009 }
case 25:
                    var2 = 'post';
                    if(!(var2 !== var5)) { _fun0009_ip = 24; continue _fun0009 }
case 26:
                    var2 = 'message';
                    if(!(var2 !== var5)) { _fun0009_ip = 27; continue _fun0009 }
case 28:
                    var2 = undefined;
                    var3 = 'voice';
                    var8 = undefined;
                    var7 = undefined;
                    if(!(var3 !== var5)) { _fun0009_ip = 29; continue _fun0009 }
case 30:
                    var3 = 'voice-locked';
                    var8 = undefined;
                    var7 = undefined;
                    if(!(var3 !== var5)) { _fun0009_ip = 29; continue _fun0009 }
case 31:
                    var3 = 'stage';
                    var8 = undefined;
                    var7 = undefined;
                    if(!(var3 !== var5)) { _fun0009_ip = 29; continue _fun0009 }
case 32:
                    var3 = 'stage-locked';
                    var8 = undefined;
                    var7 = undefined;
                    if(!(var3 !== var5)) { _fun0009_ip = 29; continue _fun0009 }
case 33:
                    var3 = 'locked';
                    var8 = undefined;
                    var7 = undefined;
                    if(!(var3 !== var5)) { _fun0009_ip = 29; continue _fun0009 }
case 34:
                    var3 = 'guide';
                    var8 = undefined;
                    var7 = undefined;
                    if(!(var3 !== var5)) { _fun0009_ip = 29; continue _fun0009 }
case 35:
                    var3 = 'home';
                    var8 = undefined;
                    var7 = undefined;
                    if(!(var3 !== var5)) { _fun0009_ip = 29; continue _fun0009 }
case 36:
                    var3 = 'browse';
                    var8 = undefined;
                    var7 = undefined;
                    if(!(var3 !== var5)) { _fun0009_ip = 29; continue _fun0009 }
case 37:
                    var3 = 'customize';
                    var8 = undefined;
                    var7 = undefined;
                    if(!(var3 !== var5)) { _fun0009_ip = 29; continue _fun0009 }
case 38:
                    var3 = 'linked-roles';
                    var8 = undefined;
                    var7 = undefined;
                    if(!(var3 !== var5)) { _fun0009_ip = 29; continue _fun0009 }
case 39:
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 17;
                    var3 = var6[var3];
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.assertNever;
                    var3 = var3.bind(var4)(var5);
                    var8 = undefined;
                    var7 = undefined;
                    _fun0009_ip = 29; continue _fun0009;
case 27:
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 13;
                    var3 = var3[var2];
                    var2 = undefined;
                    var5 = var5.bind(var2)(var3);
                    var3 = var5.isFabric;
                    var5 = var3.bind(var5)();
                    var3 = '💬';
                    if(var5) { _fun0009_ip = 40; continue _fun0009 }
case 41:
                    var6 = _closure1_slot4;
                    var10 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var4 = 15;
                    var4 = var12[var4];
                    var5 = var10.bind(var2)(var4);
                    var4 = {};
                    var9 = 16;
                    var9 = var12[var9];
                    var9 = var10.bind(var2)(var9);
                    var4['source'] = var9;
                    var10 = _closure2_slot2;
                    var4['size'] = var10;
                    var9 = _closure2_slot0;
                    var4['themedColor'] = var9;
                    var3 = var6.bind(var2)(var5, var4);
case 40:
                    var8 = var3;
                    var7 = undefined;
                    _fun0009_ip = 29; continue _fun0009;
case 24:
                    var8 = '"';
                    var7 = var8;
                    _fun0009_ip = 29; continue _fun0009;
case 22:
                    var8 = '#';
                    var7 = undefined;
case 29:
                    var5 = _closure1_slot5;
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var2 = 12;
                    var2 = var10[var2];
                    var4 = undefined;
                    var2 = var9.bind(var4)(var2);
                    var3 = var2.LegacyText;
                    var2 = {};
                    var6 = new Array(3);
                    var6[0] = var8;
                    var8 = 4;
                    var8 = var10[var8];
                    var10 = var9.bind(var4)(var8);
                    var9 = var10.smartOutput;
                    var8 = arg2;
                    var8 = var9.bind(var10)(var11, var8, var1);
                    var6[1] = var8;
                    var6[2] = var7;
                    var2['children'] = var6;
                    var1 = var1.key;
                    var1 = var5.bind(var4)(var3, var2, var1);
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
            var14 = var13[var12];
            var15 = var7;
            var12 = copyDataProperties(var15, var14);
            var12 = function react(arg1, arg2, arg3) {
                var1 = arg3;
                var5 = _closure1_slot5;
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var2 = 12;
                var2 = var8[var2];
                var4 = undefined;
                var2 = var7.bind(var4)(var2);
                var3 = var2.LegacyText;
                var2 = {};
                var6 = 4;
                var6 = var8[var6];
                var9 = var7.bind(var4)(var6);
                var8 = var9.smartOutput;
                var7 = arg1;
                var6 = arg2;
                var7 = var8.bind(var9)(var7, var6, var1);
                var6 = ['/'];
                var6[1] = var7;
                var2['children'] = var6;
                var1 = var1.key;
                var1 = var5.bind(var4)(var3, var2, var1);
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
            var14 = var13[var12];
            var15 = var7;
            var12 = copyDataProperties(var15, var14);
            var12 = function react(arg1, arg2, arg3) {
                var5 = _closure1_slot4;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 18;
                var1 = var3[var1];
                var4 = undefined;
                var3 = var2.bind(var4)(var1);
                var2 = {};
                var1 = arg1;
                var2['node'] = var1;
                var1 = null;
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
            var14 = var12[var10];
            var15 = var7;
            var10 = copyDataProperties(var15, var14);
            var10 = function react(arg1, arg2, arg3) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var1 = arg1;
                    var1 = var1.items;
                    var2 = 0;
                    var1 = var1[var2];
                    var3 = global;
                    var4 = var3.Array;
                    var3 = var4.isArray;
                    var3 = var3.bind(var4)(var1);
                    var6 = var1;
                    if(!var3) { _fun0010_ip = 42; continue _fun0010 }
case 43:
                    var6 = var1[var2];
case 42:
                    var1 = null;
                    var2 = var1 == var6;
                    if(var2) { _fun0010_ip = 44; continue _fun0010 }
case 45:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 4;
                    var3 = var3[var2];
                    var2 = undefined;
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.smartOutput;
                    var3 = arg2;
                    var2 = arg3;
                    var1 = var4.bind(var5)(var6, var3, var2);
case 44:
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
            var7['react'] = var9;
            var1[var8] = var7;
            var7 = var6[var2];
            var7 = var3.bind(var5)(var7);
            var7 = var7.AST_KEY;
            var8 = var7.SUBTEXT;
            var7 = {};
            var7['react'] = var9;
            var1[var8] = var7;
            var7 = var6[var2];
            var7 = var3.bind(var5)(var7);
            var7 = var7.AST_KEY;
            var8 = var7.SHOP_LINK;
            var7 = {};
            var7['react'] = var9;
            var1[var8] = var7;
            var2 = var6[var2];
            var2 = var3.bind(var5)(var2);
            var2 = var2.AST_KEY;
            var3 = var2.GAME_MENTION;
            var2 = {};
            var4 = function react(arg1, arg2, arg3) {
                var1 = arg3;
                var5 = _closure1_slot5;
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var2 = 12;
                var2 = var8[var2];
                var4 = undefined;
                var2 = var7.bind(var4)(var2);
                var3 = var2.LegacyText;
                var2 = {};
                var6 = 4;
                var6 = var8[var6];
                var9 = var7.bind(var4)(var6);
                var8 = var9.smartOutput;
                var7 = arg1;
                var6 = arg2;
                var7 = var8.bind(var9)(var7, var6, var1);
                var6 = ['@'];
                var6[1] = var7;
                var2['children'] = var6;
                var1 = var1.key;
                var1 = var5.bind(var4)(var3, var2, var1);
                return var1;
            };
            var2['react'] = var4;
            var1[var3] = var2;
            return var1;
        }
    };
    var _closure1_slot8 = var2;
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
    var8 = 1;
    var8 = var7[var8];
    var8 = var6.bind(var1)(var8);
    var8 = var8.MUTED_OPACITY_CONTENT;
    var _closure1_slot3 = var8;
    var8 = 2;
    var8 = var7[var8];
    var8 = var6.bind(var1)(var8);
    var9 = var8.jsx;
    var _closure1_slot4 = var9;
    var8 = var8.jsxs;
    var _closure1_slot5 = var8;
    var10 = var5.RegExp;
    var5 = 3;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var13 = var5.ANSI_CONTROL_SEQUENCE_RE;
    var5 = var10.prototype;
    var8 = Object.create(var5, {constructor: {value: var10}});
    var12 = 'g';
    var14 = var8;
    var5 = new var14[var10](var13, var12, var11);
    var5 = var5 instanceof Object ? var5 : var8;
    var _closure1_slot6 = var5;
    var5 = 19;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/markup/native/MarkupMessagePreviewReactRules.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function createChannelListMessagePreviewReactRules(arg1, arg2, arg3, arg4) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var9 = arg3;
            var8 = arg4;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 5;
            var1 = var3[var1];
            var3 = undefined;
            var4 = var2.bind(var3)(var1);
            var2 = var4.getLayoutStyles;
            var1 = arg1;
            var6 = var2.bind(var4)(var1);
            var4 = null;
            var5 = var9;
            if(!(var4 != var8)) { _fun0011_ip = 46; continue _fun0011 }
case 47:
            var1 = global;
            var2 = var1.Math;
            var1 = var2.min;
            var5 = var1.bind(var2)(var9, var8);
case 46:
            var2 = _closure1_slot8;
            var1 = {};
            var8 = arg2;
            var1['iconColor'] = var8;
            var8 = var6.messagePreview;
            var8 = var8.messageTypeIconSizeNew;
            var1['iconSize'] = var8;
            var8 = var6.messagePreview;
            var8 = var8.messageTypeIconSize;
            var1['channelIconSize'] = var8;
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var7 = 6;
            var7 = var9[var7];
            var7 = var8.bind(var3)(var7);
            var7 = var7.ICON_SIZE;
            var6 = var6.messagePreview;
            var6 = var6.messageTypeIconSizeNew;
            var6 = var7[var6];
            var7 = var4 != var6;
            var4 = 0;
            if(!var7) { _fun0011_ip = 48; continue _fun0011 }
case 49:
            var4 = var6;
case 48:
            var4 = var4 * var5;
            var1['customEmojiSize'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['default'] = var4;
    var3['createMessagePreviewReactRules'] = var2;
    return var1;
})();