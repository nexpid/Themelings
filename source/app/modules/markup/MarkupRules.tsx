// app/modules/markup/MarkupRules.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var17 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var17;
    var _closure1_slot2 = var6;
    var4 = function parseLink(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arg1;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 8;
            var1 = var2[var1];
            var2 = undefined;
            var6 = var3.bind(var2)(var1);
            var5 = var6.punycodeLink;
            var3 = 1;
            var1 = var4[var3];
            var5 = var5.bind(var6)(var1);
            var1 = null;
            if(!(var1 != var5)) { _fun0001_ip = 111; continue _fun0001 }
 52:
            var1 = {};
            var6 = 'link';
            var1['type'] = var6;
            var7 = {};
            var6 = 'text';
            var7['type'] = var6;
            var6 = var5.displayTarget;
            var7['content'] = var6;
            var6 = new Array(1);
            var6[0] = var7;
            var1['content'] = var6;
            var5 = var5.target;
            var1['target'] = var5;
            var1['title'] = var2;
            _fun0001_ip = 132; continue _fun0001;
 111:
            var2 = {};
            var5 = 'text';
            var2['type'] = var5;
            var3 = var4[var3];
            var2['content'] = var3;
            var1 = var2;
 132:
            return var1;
        }
    };
    var1 = function _startOfWord(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var5 = arg1;
            var6 = arg2;
            var1 = var5.length;
            var2 = 0;
            var1 = var2 === var1;
            if(var1) { _fun0002_ip = 66; continue _fun0002 }
 20:
            var2 = var2 === var6;
            if(var2) { _fun0002_ip = 63; continue _fun0002 }
 27:
            var4 = var5.charAt;
            var3 = 1;
            var3 = var6 - var3;
            var4 = var4.bind(var5)(var3);
            var3 = var4.trim;
            var4 = var3.bind(var4)();
            var3 = '';
            var2 = var3 === var4;
 63:
            var1 = var2;
 66:
            return var1;
        }
    };
    var _closure1_slot21 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var17.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var10 = 1;
    var2 = var6[var10];
    var2 = var17.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var17.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var17.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var17.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 5;
    var2 = var6[var2];
    var2 = var17.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 6;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var7 = var2.ID_REGEX;
    var _closure1_slot9 = var7;
    var7 = var2.MARKDOWN_SPOILER_REGEXP;
    var _closure1_slot10 = var7;
    var2 = var2.MARKDOWN_STATIC_ROUTE_NAME_REGEXP;
    var _closure1_slot11 = var2;
    var2 = 7;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.SUB_COMMAND_KEY_SEPARATOR;
    var _closure1_slot12 = var2;
    var2 = /^( *>>> +([\s\S]*))|^( *>(?!>>) +[^\n]*(\n *>(?!>>) +[^\n]*)*\n?)/;
    var _closure1_slot13 = var2;
    var2 = /^$|\n *$/;
    var _closure1_slot14 = var2;
    var2 = /^ *>>> ?/;
    var _closure1_slot15 = var2;
    var2 = /^ *> ?/gm;
    var _closure1_slot16 = var2;
    var2 = /^((?:https?|steam):\\/\\/[^\s<]+[^<.,:;"'\]\s])/;
    var _closure1_slot17 = var2;
    var2 = function getGuildIdFromChannelId(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var3 = _closure1_slot5;
            var2 = var3.getChannel;
            var1 = arg1;
            var3 = var2.bind(var3)(var1);
            var1 = null;
            var2 = var1 == var3;
            var1 = undefined;
            if(var2) { _fun0003_ip = 41; continue _fun0003 }
 31:
            var2 = var3.getGuildId;
            var1 = var2.bind(var3)();
 41:
            return var1;
        }
    };
    var _closure1_slot18 = var2;
    var2 = function getGuild(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var2 = arg1;
            var3 = var2.guildId;
            var1 = null;
            if(!(var1 == var3)) { _fun0004_ip = 63; continue _fun0004 }
 14:
            var3 = var2.channelId;
            var3 = var1 != var3;
            var1 = null;
            if(!var3) { _fun0004_ip = 61; continue _fun0004 }
 28:
            var5 = _closure1_slot7;
            var4 = var5.getGuild;
            var7 = _closure1_slot18;
            var6 = var2.channelId;
            var3 = undefined;
            var3 = var7.bind(var3)(var6);
            var1 = var4.bind(var5)(var3);
 61:
            _fun0004_ip = 85; continue _fun0004;
 63:
            var4 = _closure1_slot7;
            var3 = var4.getGuild;
            var2 = var2.guildId;
            var1 = var3.bind(var4)(var2);
 85:
            return var1;
        }
    };
    var _closure1_slot19 = var2;
    var8 = {};
    var7 = 9;
    var2 = var6[var7];
    var2 = var17.bind(var1)(var2);
    var2 = var2.defaultRules;
    var2 = var2.newline;
    var8['newline'] = var2;
    var2 = var6[var7];
    var2 = var17.bind(var1)(var2);
    var2 = var2.defaultRules;
    var2 = var2.paragraph;
    var8['paragraph'] = var2;
    var2 = {};
    var9 = var6[var7];
    var9 = var17.bind(var1)(var9);
    var9 = var9.defaultRules;
    var22 = var9.escape;
    var23 = var2;
    var9 = copyDataProperties(var23, var22);
    var9 = function match(arg1, arg2, arg3) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var6 = arg2;
            var3 = var6.allowEscape;
            var2 = false;
            var1 = null;
            if(!(var2 !== var3)) { _fun0005_ip = 73; continue _fun0005 }
 17:
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 9;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var2 = var2.defaultRules;
            var5 = var2.escape;
            var4 = var5.match;
            var3 = arg1;
            var2 = arg3;
            var1 = var4.bind(var5)(var3, var6, var2);
 73:
            return var1;
        }
    };
    var12 = 'match';
    var2[var12] = var9;
    var8['escape'] = var2;
    var2 = {};
    var9 = var6[var7];
    var9 = var17.bind(var1)(var9);
    var9 = var9.defaultRules;
    var22 = var9.blockQuote;
    var23 = var2;
    var9 = copyDataProperties(var23, var22);
    var9 = [' ', '>'];
    var13 = 'requiredFirstCharacters';
    var2[var13] = var9;
    var9 = function match(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var3 = arg1;
            var1 = arg2;
            var4 = var1.prevCapture;
            var2 = var1.inQuote;
            var1 = var1.nested;
            if(var2) { _fun0006_ip = 101; continue _fun0006 }
 27:
            if(var1) { _fun0006_ip = 101; continue _fun0006 }
 30:
            var1 = null;
            if(!(var1 != var4)) { _fun0006_ip = 81; continue _fun0006 }
 36:
            var2 = 0;
            var6 = var4[var2];
            var5 = _closure1_slot14;
            var4 = var5.test;
            var4 = var4.bind(var5)(var6);
            var1 = null;
            if(!var4) { _fun0006_ip = 79; continue _fun0006 }
 64:
            var4 = _closure1_slot13;
            var2 = var4.exec;
            var1 = var2.bind(var4)(var3);
 79:
            return var1;
 81:
            var2 = _closure1_slot13;
            var1 = var2.exec;
            var1 = var1.bind(var2)(var3);
            return var1;
 101:
            var1 = null;
            return var1;
        }
    };
    var2[var12] = var9;
    var9 = function parse(arg1, arg2, arg3) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var4 = arg3;
            var1 = arg1;
            var3 = 0;
            var6 = var1[var3];
            var1 = global;
            var5 = var1.Boolean;
            var7 = _closure1_slot15;
            var2 = var7.exec;
            var2 = var2.bind(var7)(var6);
            var7 = undefined;
            var8 = var5.bind(var7)(var2);
            if(var8) { _fun0007_ip = 54; continue _fun0007 }
 48:
            var5 = _closure1_slot16;
            _fun0007_ip = 58; continue _fun0007;
 54:
            var5 = _closure1_slot15;
 58:
            var2 = var6.replace;
            var1 = '';
            var6 = var2.bind(var6)(var5, var1);
            var5 = var4.inQuote;
            if(var5) { _fun0007_ip = 84; continue _fun0007 }
 82:
            var5 = false;
 84:
            var1 = var4.inline;
            if(var1) { _fun0007_ip = 95; continue _fun0007 }
 93:
            var1 = false;
 95:
            var2 = true;
            var4['inQuote'] = var2;
            if(var8) { _fun0007_ip = 112; continue _fun0007 }
 106:
            var4['inline'] = var2;
 112:
            var2 = arg2;
            var2 = var2.bind(var7)(var6, var4);
            var4['inQuote'] = var5;
            var4['inline'] = var1;
            var1 = var2.length;
            if(!(var3 === var1)) { _fun0007_ip = 166; continue _fun0007 }
 142:
            var3 = var2.push;
            var1 = {'type': 'text', 'content': ' '};
            var1 = var3.bind(var2)(var1);
 166:
            var1 = {};
            var1['content'] = var2;
            var2 = 'blockQuote';
            var1['type'] = var2;
            return var1;
        }
    };
    var11 = 'parse';
    var2[var11] = var9;
    var8['blockQuote'] = var2;
    var2 = 8;
    var2 = var6[var2];
    var2 = var17.bind(var1)(var2);
    var8['link'] = var2;
    var2 = {};
    var9 = var6[var7];
    var9 = var17.bind(var1)(var9);
    var9 = var9.defaultRules;
    var22 = var9.autolink;
    var23 = var2;
    var9 = copyDataProperties(var23, var22);
    var2[var11] = var4;
    var8['autolink'] = var2;
    var2 = {};
    var9 = var6[var7];
    var9 = var17.bind(var1)(var9);
    var9 = var9.defaultRules;
    var22 = var9.mailto;
    var23 = var2;
    var9 = copyDataProperties(var23, var22);
    var9 = var6[var7];
    var15 = var17.bind(var1)(var9);
    var14 = var15.inlineRegex;
    var9 = /^<([^\s<>@]+@[^\s<>@]+\.[^\s<>@]+)>/;
    var9 = var14.bind(var15)(var9);
    var2[var12] = var9;
    var9 = ['<'];
    var2[var13] = var9;
    var8['mailto'] = var2;
    var2 = {};
    var9 = var6[var7];
    var9 = var17.bind(var1)(var9);
    var9 = var9.defaultRules;
    var22 = var9.mailto;
    var23 = var2;
    var9 = copyDataProperties(var23, var22);
    var9 = ['<'];
    var2[var13] = var9;
    var9 = var6[var7];
    var15 = var17.bind(var1)(var9);
    var14 = var15.inlineRegex;
    var9 = /^<((?:(?:tel|sms):\+?|\+)(?:(?:[0-9]|\([0-9]+\)))(?:[- .\\/]?(?:[0-9]|\([0-9]+\)))+)>/;
    var9 = var14.bind(var15)(var9);
    var2[var12] = var9;
    var9 = function parse(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var2 = arg1;
            var1 = 1;
            var3 = var2[var1];
            var5 = var2[var1];
            var4 = var5.replaceAll;
            var2 = /[ \\/]+/g;
            var1 = '-';
            var4 = var4.bind(var5)(var2, var1);
            var2 = var4.startsWith;
            var1 = 'tel:';
            var5 = var2.bind(var4)(var1);
            if(var5) { _fun0008_ip = 81; continue _fun0008 }
 64:
            var6 = var4.startsWith;
            var2 = 'sms:';
            var5 = var6.bind(var4)(var2);
 81:
            var2 = var4;
            if(var5) { _fun0008_ip = 91; continue _fun0008 }
 87:
            var2 = var1 + var4;
 91:
            var1 = {};
            var4 = 'link';
            var1['type'] = var4;
            var4 = {};
            var5 = 'text';
            var4['type'] = var5;
            var4['content'] = var3;
            var3 = new Array(1);
            var3[0] = var4;
            var1['content'] = var3;
            var1['target'] = var2;
            return var1;
        }
    };
    var2[var11] = var9;
    var8['tel'] = var2;
    var2 = {};
    var9 = var6[var7];
    var9 = var17.bind(var1)(var9);
    var9 = var9.defaultRules;
    var22 = var9.url;
    var23 = var2;
    var9 = copyDataProperties(var23, var22);
    var9 = ['h', 's'];
    var2[var13] = var9;
    var9 = function match(arg1, arg2) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var1 = arg2;
            var1 = var1.inline;
            var2 = null;
            if(var1) { _fun0009_ip = 16; continue _fun0009 }
 14:
            return var2;
 16:
            var4 = _closure1_slot17;
            var3 = var4.exec;
            var1 = arg1;
            var1 = var3.bind(var4)(var1);
            if(!(var2 != var1)) { _fun0009_ip = 167; continue _fun0009 }
 44:
            var3 = 0;
            var7 = var1[var3];
            var2 = var7.length;
            var4 = 1;
            var11 = var2 - var4;
            var2 = var7;
            if(!(var11 >= var3)) { _fun0009_ip = 159; continue _fun0009 }
 69:
            var5 = var7[var11];
            var10 = ')';
            var9 = '(';
            var8 = -1;
            var6 = 0;
            var2 = var7;
            if(!(var10 === var5)) { _fun0009_ip = 159; continue _fun0009 }
 96:
            var5 = var7.indexOf;
            var5 = var5.bind(var7)(var9, var6);
            if(!(var8 !== var5)) { _fun0009_ip = 139; continue _fun0009 }
 112:
            var6 = var5 + var4;
            var11 = var11 - 1;
            var2 = var7;
            if(!(var11 >= var3)) { _fun0009_ip = 159; continue _fun0009 }
 126:
            var5 = var7[var11];
            var2 = var7;
            if(var10 === var5) { _fun0009_ip = 96; continue _fun0009 }
 137:
            _fun0009_ip = 159; continue _fun0009;
 139:
            var6 = var7.slice;
            var5 = var7.length;
            var5 = var5 - var4;
            var2 = var6.bind(var7)(var3, var5);
 159:
            var1[var4] = var2;
            var1[var3] = var2;
 167:
            return var1;
        }
    };
    var2[var12] = var9;
    var2[var11] = var4;
    var8['url'] = var2;
    var2 = var6[var7];
    var2 = var17.bind(var1)(var2);
    var2 = var2.defaultRules;
    var2 = var2.strong;
    var8['strong'] = var2;
    var2 = var6[var7];
    var2 = var17.bind(var1)(var2);
    var2 = var2.defaultRules;
    var2 = var2.em;
    var8['em'] = var2;
    var2 = var6[var7];
    var2 = var17.bind(var1)(var2);
    var2 = var2.defaultRules;
    var2 = var2.u;
    var8['u'] = var2;
    var2 = var6[var7];
    var2 = var17.bind(var1)(var2);
    var2 = var2.defaultRules;
    var2 = var2.br;
    var8['br'] = var2;
    var4 = 10;
    var2 = var6[var4];
    var2 = var17.bind(var1)(var2);
    var8['text'] = var2;
    var2 = {};
    var9 = var6[var7];
    var9 = var17.bind(var1)(var9);
    var9 = var9.defaultRules;
    var22 = var9.inlineCode;
    var23 = var2;
    var9 = copyDataProperties(var23, var22);
    var9 = function parse(arg1, arg2, arg3) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
            var6 = arg2;
            var5 = arg3;
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 9;
            var1 = var3[var1];
            var4 = undefined;
            var1 = var2.bind(var4)(var1);
            var1 = var1.defaultRules;
            var3 = var1.inlineCode;
            var2 = var3.parse;
            var1 = arg1;
            var3 = var2.bind(var3)(var1, var6, var5);
            var7 = var5.parseInlineCodeChildContent;
            var2 = true;
            var1 = var3;
            if(!(var2 === var7)) { _fun0010_ip = 111; continue _fun0010 }
 76:
            var2 = {};
            var10 = var2;
            var9 = var3;
            var7 = copyDataProperties(var10, var9);
            var3 = var3.content;
            var4 = var6.bind(var4)(var3, var5);
            var3 = 'validationChildContent';
            var2[var3] = var4;
            var1 = var2;
 111:
            return var1;
        }
    };
    var2[var11] = var9;
    var8['inlineCode'] = var2;
    var2 = {};
    var9 = var6[var4];
    var9 = var17.bind(var1)(var9);
    var9 = var9.order;
    var2['order'] = var9;
    var9 = ['¯'];
    var2['requiredFirstCharacters'] = var9;
    var9 = function match(arg1) {
        var3 = /^(¯\\_\(ツ\)_\\/¯)/;
        var2 = var3.exec;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['match'] = var9;
    var9 = function parse(arg1) {
        var1 = {};
        var2 = 'text';
        var1['type'] = var2;
        var3 = arg1;
        var2 = 1;
        var2 = var3[var2];
        var1['content'] = var2;
        return var1;
    };
    var2['parse'] = var9;
    var8['emoticon'] = var2;
    var2 = {};
    var9 = var6[var7];
    var9 = var17.bind(var1)(var9);
    var9 = var9.defaultRules;
    var9 = var9.codeBlock;
    var9 = var9.order;
    var2['order'] = var9;
    var9 = ['`'];
    var2['requiredFirstCharacters'] = var9;
    var9 = function match(arg1) {
        var3 = /^```(?:([a-z0-9_+\-.#]+?)\n)?\n*([^\n][^]*?)\n*```/i;
        var2 = var3.exec;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['match'] = var9;
    var9 = function parse(arg1, arg2, arg3) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
            var6 = arg1;
            var3 = arg3;
            var1 = {};
            var2 = 1;
            var7 = var6[var2];
            var5 = null;
            var8 = var5 != var7;
            var2 = '';
            var4 = var2;
            if(!var8) { _fun0011_ip = 34; continue _fun0011 }
 31:
            var4 = var7;
 34:
            var1['lang'] = var4;
            var4 = 2;
            var4 = var6[var4];
            var5 = var5 != var4;
            if(!var5) { _fun0011_ip = 56; continue _fun0011 }
 53:
            var2 = var4;
 56:
            var1['content'] = var2;
            var2 = var3.inQuote;
            if(var2) { _fun0011_ip = 75; continue _fun0011 }
 69:
            var2 = var3.formatInline;
 75:
            if(var2) { _fun0011_ip = 80; continue _fun0011 }
 78:
            var2 = false;
 80:
            var1['inQuote'] = var2;
            return var1;
        }
    };
    var2['parse'] = var9;
    var8['codeBlock'] = var2;
    var2 = {};
    var9 = var6[var4];
    var9 = var17.bind(var1)(var9);
    var9 = var9.order;
    var2['order'] = var9;
    var9 = ['<'];
    var2['requiredFirstCharacters'] = var9;
    var9 = function match(arg1) {
        var3 = /^<@&(\d+)>/;
        var2 = var3.exec;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['match'] = var9;
    var9 = function parse(arg1, arg2, arg3) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
            var4 = arg3;
            var5 = arg1;
            var1 = var5[Symbol.iterator];
            var5 = var1().next;
            var2 = var5().value;
            var2 = var1;
            var7 = undefined;
            var3 = var2 === var7;
            var2 = undefined;
            if(var3) { _fun0012_ip = 52; continue _fun0012 }
 27:
            var6 = var5().value;
            var5 = var1;
            var5 = var5 === var7;
            var2 = undefined;
            var3 = var5;
            if(var5) { _fun0012_ip = 52; continue _fun0012 }
 46:
            var2 = var6;
            var3 = var5;
 52:
            if(var3) { _fun0012_ip = 58; continue _fun0012 }
 55:
            var1.return();
 58:
            var1 = var4.returnMentionIds;
            if(var1) { _fun0012_ip = 542; continue _fun0012 }
 70:
            var1 = _closure1_slot19;
            var9 = var1.bind(var7)(var4);
            var8 = null;
            var1 = var8 != var9;
            var6 = null;
            if(!var1) { _fun0012_ip = 114; continue _fun0012 }
 93:
            var10 = _closure1_slot6;
            var5 = var10.getRole;
            var1 = var9.id;
            var6 = var5.bind(var10)(var1, var2);
 114:
            if(!(var8 != var6)) { _fun0012_ip = 447; continue _fun0012 }
 121:
            var5 = _closure1_slot0;
            var10 = _closure1_slot2;
            var1 = 12;
            var1 = var10[var1];
            var10 = var5.bind(var7)(var1);
            var5 = var10.getHasEnhancedRoleColorsForRole;
            var11 = var8 == var9;
            var1 = undefined;
            if(var11) { _fun0012_ip = 161; continue _fun0012 }
 156:
            var1 = var9.id;
 161:
            var5 = var5.bind(var10)(var1, var6);
            if(!var5) { _fun0012_ip = 204; continue _fun0012 }
 170:
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var1 = 13;
            var1 = var11[var1];
            var10 = var10.bind(var7)(var1);
            var1 = var10.getIsDefaultErc;
            var1 = var1.bind(var10)(var6);
            var5 = !var1;
 204:
            var1 = {};
            var10 = 'mention';
            var1['type'] = var10;
            var4 = var4.channelId;
            var1['channelId'] = var4;
            var10 = var8 != var9;
            var4 = null;
            if(!var10) { _fun0012_ip = 237; continue _fun0012 }
 232:
            var4 = var9.id;
 237:
            var1['guildId'] = var4;
            var1['roleId'] = var2;
            var4 = var6.color;
            var1['roleColor'] = var4;
            var4 = null;
            if(!var5) { _fun0012_ip = 341; continue _fun0012 }
 261:
            var5 = {};
            var10 = var6.colors;
            var11 = var8 == var10;
            var9 = undefined;
            if(var11) { _fun0012_ip = 283; continue _fun0012 }
 277:
            var9 = var10.primary_color;
 283:
            var5['primaryColor'] = var9;
            var10 = var6.colors;
            var11 = var8 == var10;
            var9 = undefined;
            if(var11) { _fun0012_ip = 308; continue _fun0012 }
 302:
            var9 = var10.secondary_color;
 308:
            var5['secondaryColor'] = var9;
            var9 = var6.colors;
            var10 = var8 == var9;
            var8 = undefined;
            if(var10) { _fun0012_ip = 333; continue _fun0012 }
 327:
            var8 = var9.tertiary_color;
 333:
            var5['tertiaryColor'] = var8;
            var4 = var5;
 341:
            var1['roleColors'] = var4;
            var9 = var6.name;
            var4 = global;
            var5 = var4.HermesInternal;
            var5 = var5.concat;
            var8 = '@';
            var5 = var5.bind(var8)(var9);
            var1['roleName'] = var5;
            var5 = var6.color;
            var1['color'] = var5;
            var5 = var6.colorString;
            var1['colorString'] = var5;
            var5 = {};
            var9 = 'text';
            var5['type'] = var9;
            var6 = var6.name;
            var4 = var4.HermesInternal;
            var4 = var4.concat;
            var4 = var4.bind(var8)(var6);
            var5['content'] = var4;
            var4 = new Array(1);
            var4[0] = var5;
            var1['content'] = var4;
            return var1;
 447:
            var1 = {};
            var4 = 'text';
            var1['type'] = var4;
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 11;
            var4 = var8[var3];
            var4 = var6.bind(var7)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var3 = var8[var3];
            var3 = var6.bind(var7)(var3);
            var3 = var3.t;
            var3 = var3.YV4F/v;
            var5 = var4.bind(var5)(var3);
            var3 = global;
            var3 = var3.HermesInternal;
            var4 = var3.concat;
            var3 = '@';
            var3 = var4.bind(var3)(var5);
            var1['content'] = var3;
            return var1;
 542:
            var1 = {};
            var3 = 'roleMention';
            var1['type'] = var3;
            var1['id'] = var2;
            return var1;
        }
    };
    var2['parse'] = var9;
    var8['roleMention'] = var2;
    var2 = {};
    var9 = var6[var4];
    var9 = var17.bind(var1)(var9);
    var9 = var9.order;
    var2['order'] = var9;
    var9 = ['<', '@'];
    var2['requiredFirstCharacters'] = var9;
    var9 = function match(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
            var3 = /^<@!?(\d+)>|^(@(?:everyone|here))/;
            var2 = var3.exec;
            var1 = arg1;
            var2 = var2.bind(var3)(var1);
            var1 = null;
            var3 = var1 == var2;
            if(var3) { _fun0013_ip = 40; continue _fun0013 }
 37:
            var1 = var2;
 40:
            return var1;
        }
    };
    var2['match'] = var9;
    var9 = function parse(arg1, arg2, arg3) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
            var4 = arg1;
            var10 = arg3;
            var1 = var10.returnMentionIds;
            var2 = 1;
            if(var1) { _fun0014_ip = 447; continue _fun0014 }
 21:
            var6 = _closure1_slot8;
            var5 = var6.getUser;
            var3 = var4[var2];
            var15 = var5.bind(var6)(var3);
            var6 = _closure1_slot5;
            var5 = var6.getChannel;
            var3 = var10.channelId;
            var11 = var5.bind(var6)(var3);
            var6 = null;
            var3 = var6 != var15;
            var5 = undefined;
            var8 = undefined;
            var12 = undefined;
            if(!var3) { _fun0014_ip = 187; continue _fun0014 }
 77:
            var3 = var15.id;
            var7 = var15.toString;
            var7 = var7.bind(var15)();
            if(!(var6 != var11)) { _fun0014_ip = 181; continue _fun0014 }
 95:
            var13 = _closure1_slot1;
            var14 = _closure1_slot2;
            var9 = 14;
            var9 = var14[var9];
            var16 = var13.bind(var5)(var9);
            var14 = var16.getNickname;
            var9 = var11.getGuildId;
            var13 = var9.bind(var11)();
            var9 = var10.channelId;
            var9 = var14.bind(var16)(var13, var9, var15);
            if(!(var6 == var9)) { _fun0014_ip = 178; continue _fun0014 }
 147:
            var14 = _closure1_slot1;
            var16 = _closure1_slot2;
            var13 = 15;
            var13 = var16[var13];
            var14 = var14.bind(var5)(var13);
            var13 = var14.getName;
            var9 = var13.bind(var14)(var15);
 178:
            var7 = var9;
 181:
            var8 = var7;
            var12 = var3;
 187:
            var7 = var4[var2];
            var9 = var6 != var7;
            if(!var9) { _fun0014_ip = 222; continue _fun0014 }
 198:
            var14 = _closure1_slot9;
            var13 = var14.test;
            var3 = var7.trim;
            var3 = var3.bind(var7)();
            var9 = var13.bind(var14)(var3);
 222:
            if(!var9) { _fun0014_ip = 234; continue _fun0014 }
 225:
            var3 = var10.unknownUserMentionPlaceholder;
            if(var3) { _fun0014_ip = 242; continue _fun0014 }
 234:
            var3 = 0;
            var3 = var4[var3];
            _fun0014_ip = 319; continue _fun0014;
 242:
            var15 = _closure1_slot0;
            var16 = _closure1_slot2;
            var1 = 11;
            var13 = var16[var1];
            var13 = var15.bind(var5)(var13);
            var14 = var13.intl;
            var13 = var14.string;
            var1 = var16[var1];
            var1 = var15.bind(var5)(var1);
            var1 = var1.t;
            var1 = var1.sKdZ6e;
            var14 = var13.bind(var14)(var1);
            var1 = global;
            var1 = var1.HermesInternal;
            var13 = var1.concat;
            var1 = '@';
            var3 = var13.bind(var1)(var14);
 319:
            var1 = {};
            var1['userId'] = var12;
            var12 = var10.channelId;
            var1['channelId'] = var12;
            var10 = var10.viewingChannelId;
            var1['viewingChannelId'] = var10;
            var10 = var6 == var11;
            var5 = undefined;
            if(var10) { _fun0014_ip = 364; continue _fun0014 }
 354:
            var10 = var11.getGuildId;
            var5 = var10.bind(var11)();
 364:
            var1['guildId'] = var5;
            var5 = null;
            if(!var9) { _fun0014_ip = 376; continue _fun0014 }
 373:
            var5 = var7;
 376:
            var1['parsedUserId'] = var5;
            var5 = 2;
            var5 = var4[var5];
            var1['roleName'] = var5;
            var5 = {};
            var7 = 'text';
            var5['type'] = var7;
            if(!(var6 != var8)) { _fun0014_ip = 429; continue _fun0014 }
 407:
            var6 = global;
            var6 = var6.HermesInternal;
            var7 = var6.concat;
            var6 = '@';
            var3 = var7.bind(var6)(var8);
 429:
            var5['content'] = var3;
            var3 = new Array(1);
            var3[0] = var5;
            var1['content'] = var3;
            return var1;
 447:
            var3 = var4[var2];
            var1 = null;
            if(!(var1 != var3)) { _fun0014_ip = 477; continue _fun0014 }
 457:
            var1 = {};
            var3 = 'mention';
            var1['type'] = var3;
            var2 = var4[var2];
            var1['id'] = var2;
            _fun0014_ip = 500; continue _fun0014;
 477:
            var2 = {};
            var3 = 'mention';
            var2['type'] = var3;
            var3 = 0;
            var3 = var4[var3];
            var2['text'] = var3;
            var1 = var2;
 500:
            return var1;
        }
    };
    var2['parse'] = var9;
    var8['mention'] = var2;
    var2 = {};
    var9 = var6[var4];
    var9 = var17.bind(var1)(var9);
    var9 = var9.order;
    var2['order'] = var9;
    var9 = ['@'];
    var2['requiredFirstCharacters'] = var9;
    var9 = function match(arg1, arg2, arg3) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
            var3 = arg3;
            var1 = null;
            if(!(var1 != var3)) { _fun0015_ip = 19; continue _fun0015 }
 9:
            var2 = '';
            var1 = null;
            if(!(var2 === var3)) { _fun0015_ip = 47; continue _fun0015 }
 19:
            var4 = /^(@silent(?![^\s]))/;
            var3 = var4.exec;
            var2 = arg1;
            var1 = var3.bind(var4)(var2);
 47:
            return var1;
        }
    };
    var2['match'] = var9;
    var9 = function parse(arg1) {
        var1 = {};
        var2 = 'silentPrefix';
        var1['type'] = var2;
        var3 = arg1;
        var2 = 0;
        var2 = var3[var2];
        var1['content'] = var2;
        return var1;
    };
    var2['parse'] = var9;
    var8['silentPrefix'] = var2;
    var2 = 16;
    var9 = var6[var2];
    var9 = var17.bind(var1)(var9);
    var9 = var9.channelMention;
    var8['channelMention'] = var9;
    var9 = var6[var2];
    var9 = var17.bind(var1)(var9);
    var9 = var9.channelOrMessageUrl;
    var8['channelOrMessageUrl'] = var9;
    var2 = var6[var2];
    var2 = var17.bind(var1)(var2);
    var2 = var2.mediaPostLink;
    var8['mediaPostLink'] = var2;
    var2 = 17;
    var2 = var6[var2];
    var2 = var17.bind(var1)(var2);
    var2 = var2.attachmentLink;
    var8['attachmentLink'] = var2;
    var2 = 18;
    var2 = var6[var2];
    var2 = var17.bind(var1)(var2);
    var2 = var2.shopLink;
    var8['shopLink'] = var2;
    var2 = {};
    var9 = var6[var7];
    var9 = var17.bind(var1)(var9);
    var9 = var9.defaultRules;
    var9 = var9.text;
    var9 = var9.order;
    var2['order'] = var9;
    var9 = ['<'];
    var2['requiredFirstCharacters'] = var9;
    var9 = function match(arg1) {
        var3 = /^<\\/((?:(?:[\x2D0-9A-Z_a-z\xAA\xB2\xB3\xB5\xB9\xBA\xBC-\xBE\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u0660-\u0669\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07C0-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0900-\u0950\u0955-\u0963\u0966-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09E6-\u09F1\u09F4-\u09F9\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A66-\u0A6F\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AE6-\u0AEF\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B66-\u0B6F\u0B71-\u0B77\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0BE6-\u0BF2\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C66-\u0C6F\u0C78-\u0C7E\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CE6-\u0CEF\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D58-\u0D61\u0D66-\u0D78\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DE6-\u0DEF\u0E01-\u0E3A\u0E40-\u0E5B\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F20-\u0F33\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F-\u1049\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u1090-\u1099\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1369-\u137C\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A16\u1A20-\u1A54\u1A80-\u1A89\u1A90-\u1A99\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B50-\u1B59\u1B83-\u1BA0\u1BAE-\u1BE5\u1C00-\u1C23\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C8A\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2070\u2071\u2074-\u2079\u207F-\u2089\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2150-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2CFD\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u3192-\u3195\u31A0-\u31BF\u31F0-\u31FF\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CD\uA7D0\uA7D1\uA7D3\uA7D5-\uA7DC\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA830-\uA835\uA840-\uA873\uA882-\uA8B3\uA8D0-\uA8D9\uA8E0-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF-\uA9D9\uA9E0-\uA9E4\uA9E6-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA50-\uAA59\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDE80-\uDE9C\uDEA0-\uDED0\uDEE1-\uDEFB\uDF00-\uDF23\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDDC0-\uDDF3\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC58-\uDC76\uDC79-\uDC9E\uDCA7-\uDCAF\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDD1B\uDD20-\uDD39\uDD80-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE40-\uDE48\uDE60-\uDE7E\uDE80-\uDE9F\uDEC0-\uDEC7\uDEC9-\uDEE4\uDEEB-\uDEEF\uDF00-\uDF35\uDF40-\uDF55\uDF58-\uDF72\uDF78-\uDF91\uDFA9-\uDFAF]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDD23\uDD30-\uDD39\uDD40-\uDD65\uDD6F-\uDD85\uDE60-\uDE7E\uDE80-\uDEA9\uDEB0\uDEB1\uDEC2-\uDEC4\uDF00-\uDF27\uDF30-\uDF45\uDF51-\uDF54\uDF70-\uDF81\uDFB0-\uDFCB\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC52-\uDC6F\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD03-\uDD26\uDD36-\uDD3F\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDD0-\uDDDA\uDDDC\uDDE1-\uDDF4\uDE00-\uDE11\uDE13-\uDE2B\uDE3F\uDE40\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDEF0-\uDEF9\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61\uDF80-\uDF89\uDF8B\uDF8E\uDF90-\uDFB5\uDFB7\uDFD1\uDFD3]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC50-\uDC59\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE50-\uDE59\uDE80-\uDEAA\uDEB8\uDEC0-\uDEC9\uDED0-\uDEE3\uDF00-\uDF1A\uDF30-\uDF3B\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCF2\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8\uDF00-\uDF09\uDFC0-\uDFE0\uDFF0-\uDFF9]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC50-\uDC6C\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF2\uDF02\uDF04-\uDF10\uDF12-\uDF33\uDF50-\uDF59\uDFB0\uDFC0-\uDFD4]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD80E\uD80F\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC41-\uDC46\uDC60-\uDFFF]|\uD810[\uDC00-\uDFFA]|\uD811[\uDC00-\uDE46]|\uD818[\uDD00-\uDD1D\uDD30-\uDD39]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDE70-\uDEBE\uDEC0-\uDEC9\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDD40-\uDD6C\uDD70-\uDD79\uDE40-\uDE96\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDCFF-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD833[\uDCF0-\uDCF9]|\uD834[\uDEC0-\uDED3\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC30-\uDC6D\uDD00-\uDD2C\uDD37-\uDD3D\uDD40-\uDD49\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB\uDEF0-\uDEF9]|\uD839[\uDCD0-\uDCEB\uDCF0-\uDCF9\uDDD0-\uDDED\uDDF0-\uDDFA\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDCC7-\uDCCF\uDD00-\uDD43\uDD4B\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0\uDFF0-\uDFFF]|\uD87B[\uDC00-\uDE5D]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF]){1,32})(?: (?:[\x2D0-9A-Z_a-z\xAA\xB2\xB3\xB5\xB9\xBA\xBC-\xBE\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u0660-\u0669\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07C0-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0900-\u0950\u0955-\u0963\u0966-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09E6-\u09F1\u09F4-\u09F9\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A66-\u0A6F\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AE6-\u0AEF\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B66-\u0B6F\u0B71-\u0B77\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0BE6-\u0BF2\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C66-\u0C6F\u0C78-\u0C7E\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CE6-\u0CEF\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D58-\u0D61\u0D66-\u0D78\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DE6-\u0DEF\u0E01-\u0E3A\u0E40-\u0E5B\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F20-\u0F33\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F-\u1049\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u1090-\u1099\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1369-\u137C\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A16\u1A20-\u1A54\u1A80-\u1A89\u1A90-\u1A99\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B50-\u1B59\u1B83-\u1BA0\u1BAE-\u1BE5\u1C00-\u1C23\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C8A\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2070\u2071\u2074-\u2079\u207F-\u2089\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2150-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2CFD\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u3192-\u3195\u31A0-\u31BF\u31F0-\u31FF\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CD\uA7D0\uA7D1\uA7D3\uA7D5-\uA7DC\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA830-\uA835\uA840-\uA873\uA882-\uA8B3\uA8D0-\uA8D9\uA8E0-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF-\uA9D9\uA9E0-\uA9E4\uA9E6-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA50-\uAA59\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDE80-\uDE9C\uDEA0-\uDED0\uDEE1-\uDEFB\uDF00-\uDF23\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDDC0-\uDDF3\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC58-\uDC76\uDC79-\uDC9E\uDCA7-\uDCAF\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDD1B\uDD20-\uDD39\uDD80-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE40-\uDE48\uDE60-\uDE7E\uDE80-\uDE9F\uDEC0-\uDEC7\uDEC9-\uDEE4\uDEEB-\uDEEF\uDF00-\uDF35\uDF40-\uDF55\uDF58-\uDF72\uDF78-\uDF91\uDFA9-\uDFAF]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDD23\uDD30-\uDD39\uDD40-\uDD65\uDD6F-\uDD85\uDE60-\uDE7E\uDE80-\uDEA9\uDEB0\uDEB1\uDEC2-\uDEC4\uDF00-\uDF27\uDF30-\uDF45\uDF51-\uDF54\uDF70-\uDF81\uDFB0-\uDFCB\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC52-\uDC6F\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD03-\uDD26\uDD36-\uDD3F\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDD0-\uDDDA\uDDDC\uDDE1-\uDDF4\uDE00-\uDE11\uDE13-\uDE2B\uDE3F\uDE40\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDEF0-\uDEF9\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61\uDF80-\uDF89\uDF8B\uDF8E\uDF90-\uDFB5\uDFB7\uDFD1\uDFD3]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC50-\uDC59\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE50-\uDE59\uDE80-\uDEAA\uDEB8\uDEC0-\uDEC9\uDED0-\uDEE3\uDF00-\uDF1A\uDF30-\uDF3B\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCF2\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8\uDF00-\uDF09\uDFC0-\uDFE0\uDFF0-\uDFF9]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC50-\uDC6C\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF2\uDF02\uDF04-\uDF10\uDF12-\uDF33\uDF50-\uDF59\uDFB0\uDFC0-\uDFD4]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD80E\uD80F\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC41-\uDC46\uDC60-\uDFFF]|\uD810[\uDC00-\uDFFA]|\uD811[\uDC00-\uDE46]|\uD818[\uDD00-\uDD1D\uDD30-\uDD39]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDE70-\uDEBE\uDEC0-\uDEC9\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDD40-\uDD6C\uDD70-\uDD79\uDE40-\uDE96\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDCFF-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD833[\uDCF0-\uDCF9]|\uD834[\uDEC0-\uDED3\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC30-\uDC6D\uDD00-\uDD2C\uDD37-\uDD3D\uDD40-\uDD49\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB\uDEF0-\uDEF9]|\uD839[\uDCD0-\uDCEB\uDCF0-\uDCF9\uDDD0-\uDDED\uDDF0-\uDDFA\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDCC7-\uDCCF\uDD00-\uDD43\uDD4B\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0\uDFF0-\uDFFF]|\uD87B[\uDC00-\uDE5D]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF]){1,32})?(?: (?:[\x2D0-9A-Z_a-z\xAA\xB2\xB3\xB5\xB9\xBA\xBC-\xBE\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u0660-\u0669\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07C0-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0900-\u0950\u0955-\u0963\u0966-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09E6-\u09F1\u09F4-\u09F9\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A66-\u0A6F\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AE6-\u0AEF\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B66-\u0B6F\u0B71-\u0B77\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0BE6-\u0BF2\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C66-\u0C6F\u0C78-\u0C7E\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CE6-\u0CEF\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D58-\u0D61\u0D66-\u0D78\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DE6-\u0DEF\u0E01-\u0E3A\u0E40-\u0E5B\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F20-\u0F33\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F-\u1049\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u1090-\u1099\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1369-\u137C\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A16\u1A20-\u1A54\u1A80-\u1A89\u1A90-\u1A99\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B50-\u1B59\u1B83-\u1BA0\u1BAE-\u1BE5\u1C00-\u1C23\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C8A\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2070\u2071\u2074-\u2079\u207F-\u2089\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2150-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2CFD\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u3192-\u3195\u31A0-\u31BF\u31F0-\u31FF\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CD\uA7D0\uA7D1\uA7D3\uA7D5-\uA7DC\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA830-\uA835\uA840-\uA873\uA882-\uA8B3\uA8D0-\uA8D9\uA8E0-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF-\uA9D9\uA9E0-\uA9E4\uA9E6-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA50-\uAA59\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDE80-\uDE9C\uDEA0-\uDED0\uDEE1-\uDEFB\uDF00-\uDF23\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDDC0-\uDDF3\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC58-\uDC76\uDC79-\uDC9E\uDCA7-\uDCAF\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDD1B\uDD20-\uDD39\uDD80-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE40-\uDE48\uDE60-\uDE7E\uDE80-\uDE9F\uDEC0-\uDEC7\uDEC9-\uDEE4\uDEEB-\uDEEF\uDF00-\uDF35\uDF40-\uDF55\uDF58-\uDF72\uDF78-\uDF91\uDFA9-\uDFAF]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDD23\uDD30-\uDD39\uDD40-\uDD65\uDD6F-\uDD85\uDE60-\uDE7E\uDE80-\uDEA9\uDEB0\uDEB1\uDEC2-\uDEC4\uDF00-\uDF27\uDF30-\uDF45\uDF51-\uDF54\uDF70-\uDF81\uDFB0-\uDFCB\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC52-\uDC6F\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD03-\uDD26\uDD36-\uDD3F\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDD0-\uDDDA\uDDDC\uDDE1-\uDDF4\uDE00-\uDE11\uDE13-\uDE2B\uDE3F\uDE40\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDEF0-\uDEF9\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61\uDF80-\uDF89\uDF8B\uDF8E\uDF90-\uDFB5\uDFB7\uDFD1\uDFD3]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC50-\uDC59\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE50-\uDE59\uDE80-\uDEAA\uDEB8\uDEC0-\uDEC9\uDED0-\uDEE3\uDF00-\uDF1A\uDF30-\uDF3B\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCF2\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8\uDF00-\uDF09\uDFC0-\uDFE0\uDFF0-\uDFF9]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC50-\uDC6C\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF2\uDF02\uDF04-\uDF10\uDF12-\uDF33\uDF50-\uDF59\uDFB0\uDFC0-\uDFD4]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD80E\uD80F\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC41-\uDC46\uDC60-\uDFFF]|\uD810[\uDC00-\uDFFA]|\uD811[\uDC00-\uDE46]|\uD818[\uDD00-\uDD1D\uDD30-\uDD39]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDE70-\uDEBE\uDEC0-\uDEC9\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDD40-\uDD6C\uDD70-\uDD79\uDE40-\uDE96\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDCFF-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD833[\uDCF0-\uDCF9]|\uD834[\uDEC0-\uDED3\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC30-\uDC6D\uDD00-\uDD2C\uDD37-\uDD3D\uDD40-\uDD49\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB\uDEF0-\uDEF9]|\uD839[\uDCD0-\uDCEB\uDCF0-\uDCF9\uDDD0-\uDDED\uDDF0-\uDDFA\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDCC7-\uDCCF\uDD00-\uDD43\uDD4B\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0\uDFF0-\uDFFF]|\uD87B[\uDC00-\uDE5D]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF]){1,32})?):([0-9]+)>/;
        var2 = var3.exec;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['match'] = var9;
    var9 = function parse(arg1, arg2, arg3) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
            var3 = arg1;
            var8 = arg3;
            var1 = var8.returnMentionIds;
            if(var1) { _fun0016_ip = 215; continue _fun0016 }
 18:
            var5 = 1;
            var4 = var3[var5];
            var2 = var4.split;
            var1 = ' ';
            var4 = var2.bind(var4)(var1);
            var2 = _closure1_slot4;
            var1 = undefined;
            var2 = var2.bind(var1)(var4);
            var1 = var2.slice;
            var11 = var1.bind(var2)(var5);
            var7 = 2;
            var9 = var3[var7];
            var4 = new Array(0);
            var10 = 0;
            var12 = var4;
            var1 = arraySpread(var12, var11, var10);
            var2 = var4.map;
            var1 = function(arg1) {
                var4 = _closure1_slot12;
                var1 = global;
                var1 = var1.HermesInternal;
                var3 = var1.concat;
                var2 = '';
                var1 = arg1;
                var1 = var3.bind(var2)(var4, var1);
                return var1;
            };
            var2 = var2.bind(var4)(var1);
            var1 = var2.join;
            var6 = '';
            var4 = var1.bind(var2)(var6);
            var2 = global;
            var1 = var2.HermesInternal;
            var1 = var1.concat;
            var4 = var1.bind(var6)(var9, var4);
            var1 = {};
            var8 = var8.channelId;
            var1['channelId'] = var8;
            var7 = var3[var7];
            var1['commandId'] = var7;
            var7 = var3[var5];
            var1['commandName'] = var7;
            var1['commandKey'] = var4;
            var4 = {};
            var7 = 'text';
            var4['type'] = var7;
            var5 = var3[var5];
            var2 = var2.HermesInternal;
            var2 = var2.concat;
            var2 = var2.bind(var6)(var5);
            var4['content'] = var2;
            var2 = new Array(1);
            var2[0] = var4;
            var1['content'] = var2;
            return var1;
 215:
            var1 = {};
            var2 = 'commandMention';
            var1['type'] = var2;
            var2 = 2;
            var2 = var3[var2];
            var1['id'] = var2;
            return var1;
        }
    };
    var2['parse'] = var9;
    var8['commandMention'] = var2;
    var2 = {};
    var9 = var6[var7];
    var9 = var17.bind(var1)(var9);
    var9 = var9.defaultRules;
    var9 = var9.text;
    var9 = var9.order;
    var2['order'] = var9;
    var9 = ['<'];
    var2['requiredFirstCharacters'] = var9;
    var9 = function match(arg1, arg2) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
            var1 = arg2;
            var2 = var1.allowGameMentions;
            var1 = null;
            if(!var2) { _fun0017_ip = 42; continue _fun0017 }
 14:
            var4 = /^<@\$(\d+)>/;
            var3 = var4.exec;
            var2 = arg1;
            var1 = var3.bind(var4)(var2);
 42:
            return var1;
        }
    };
    var2['match'] = var9;
    var9 = function parse(arg1, arg2, arg3) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
            var4 = arg1;
            var2 = arg3;
            var _closure2_slot0 = var4;
            var3 = var2.channelId;
            var9 = null;
            if(!(var9 != var3)) { _fun0018_ip = 381; continue _fun0018 }
 26:
            var3 = var2.messageId;
            if(!(var9 != var3)) { _fun0018_ip = 381; continue _fun0018 }
 38:
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var3 = 19;
            var3 = var7[var3];
            var7 = undefined;
            var8 = var6.bind(var7)(var3);
            var6 = var8.get;
            var3 = var2.channelId;
            var10 = var6.bind(var8)(var3);
            var6 = var9 == var10;
            var3 = undefined;
            if(var6) { _fun0018_ip = 102; continue _fun0018 }
 87:
            var8 = var10.get;
            var6 = var2.messageId;
            var3 = var8.bind(var10)(var6);
 102:
            var6 = var9 == var3;
            var8 = undefined;
            if(var6) { _fun0018_ip = 141; continue _fun0018 }
 111:
            var6 = var3.mentionGames;
            var3 = var9 == var6;
            var8 = undefined;
            if(var3) { _fun0018_ip = 141; continue _fun0018 }
 126:
            var3 = var6.find;
            var1 = function(arg1) {
                var1 = arg1;
                var2 = var1.id;
                var3 = _closure2_slot0;
                var1 = 1;
                var1 = var3[var1];
                var1 = var2 === var1;
                return var1;
            };
            var8 = var3.bind(var6)(var1);
 141:
            var1 = {};
            var3 = 'gameMention';
            var1['type'] = var3;
            var3 = 1;
            var3 = var4[var3];
            var1['applicationId'] = var3;
            var3 = var2.channelId;
            var1['channelId'] = var3;
            var6 = {};
            var3 = 'text';
            var6['type'] = var3;
            var3 = var9 == var8;
            var11 = undefined;
            if(var3) { _fun0018_ip = 195; continue _fun0018 }
 190:
            var11 = var8.name;
 195:
            if(!(var9 == var11)) { _fun0018_ip = 254; continue _fun0018 }
 199:
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var3 = 11;
            var10 = var14[var3];
            var10 = var13.bind(var7)(var10);
            var12 = var10.intl;
            var10 = var12.string;
            var3 = var14[var3];
            var3 = var13.bind(var7)(var3);
            var3 = var3.t;
            var3 = var3.11pdXV;
            var11 = var10.bind(var12)(var3);
 254:
            var3 = global;
            var3 = var3.HermesInternal;
            var10 = var3.concat;
            var3 = '';
            var3 = var10.bind(var3)(var11);
            var6['content'] = var3;
            var3 = new Array(1);
            var3[0] = var6;
            var1['content'] = var3;
            var6 = var9 != var8;
            var3 = undefined;
            if(!var6) { _fun0018_ip = 375; continue _fun0018 }
 301:
            var6 = var8.icon_hash;
            var6 = var9 != var6;
            var3 = undefined;
            if(!var6) { _fun0018_ip = 375; continue _fun0018 }
 316:
            var6 = _closure1_slot1;
            var9 = _closure1_slot2;
            var5 = 20;
            var5 = var9[var5];
            var7 = var6.bind(var7)(var5);
            var6 = var7.getApplicationIconURL;
            var5 = {};
            var9 = var8.id;
            var5['id'] = var9;
            var8 = var8.icon_hash;
            var5['icon'] = var8;
            var8 = 32;
            var5['size'] = var8;
            var3 = var6.bind(var7)(var5);
 375:
            var1['icon'] = var3;
            return var1;
 381:
            var1 = {};
            var3 = 'gameMention';
            var1['type'] = var3;
            var3 = 1;
            var3 = var4[var3];
            var1['applicationId'] = var3;
            var2 = var2.channelId;
            var1['channelId'] = var2;
            var4 = {};
            var2 = 'text';
            var4['type'] = var2;
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 11;
            var5 = var8[var3];
            var2 = undefined;
            var5 = var7.bind(var2)(var5);
            var6 = var5.intl;
            var5 = var6.string;
            var3 = var8[var3];
            var3 = var7.bind(var2)(var3);
            var3 = var3.t;
            var3 = var3.11pdXV;
            var3 = var5.bind(var6)(var3);
            var4['content'] = var3;
            var3 = new Array(1);
            var3[0] = var4;
            var1['content'] = var3;
            var1['icon'] = var2;
            return var1;
        }
    };
    var2['parse'] = var9;
    var8['gameMention'] = var2;
    var2 = {};
    var9 = var6[var4];
    var9 = var17.bind(var1)(var9);
    var9 = var9.order;
    var2['order'] = var9;
    var9 = [':'];
    var2['requiredFirstCharacters'] = var9;
    var9 = function match(arg1) {
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var7 = 21;
            var1 = var1[var7];
            var6 = undefined;
            var1 = var2.bind(var6)(var1);
            var4 = var1.EMOJI_NAME_RE;
            var2 = var4.exec;
            var1 = arg1;
            var2 = var2.bind(var4)(var1);
            var5 = null;
            var4 = var5 != var2;
            var1 = null;
            if(!var4) { _fun0019_ip = 104; continue _fun0019 }
 56:
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var6 = var4.bind(var6)(var3);
            var4 = var6.convertNameToSurrogate;
            var3 = 1;
            var3 = var2[var3];
            var4 = var4.bind(var6)(var3);
            var3 = '';
            var1 = null;
            if(!(var3 !== var4)) { _fun0019_ip = 104; continue _fun0019 }
 101:
            var1 = var2;
 104:
            return var1;
        }
    };
    var2['match'] = var9;
    var9 = function parse(arg1) {
        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
 0:
            var4 = arg1;
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 21;
            var2 = var2[var1];
            var1 = undefined;
            var5 = var3.bind(var1)(var2);
            var2 = var5.convertNameToSurrogate;
            var3 = 1;
            var1 = var4[var3];
            var2 = var2.bind(var5)(var1);
            var1 = {};
            var5 = 'text';
            var1['type'] = var5;
            var5 = null;
            if(!(var5 != var2)) { _fun0020_ip = 70; continue _fun0020 }
 62:
            var5 = '';
            if(!(var5 === var2)) { _fun0020_ip = 97; continue _fun0020 }
 70:
            var5 = var4[var3];
            var3 = global;
            var3 = var3.HermesInternal;
            var4 = var3.concat;
            var3 = ':';
            var2 = var4.bind(var3)(var5, var3);
 97:
            var1['content'] = var2;
            return var1;
        }
    };
    var2['parse'] = var9;
    var8['emoji'] = var2;
    var2 = {};
    var9 = var6[var4];
    var9 = var17.bind(var1)(var9);
    var9 = var9.order;
    var2['order'] = var9;
    var9 = ['<'];
    var2['requiredFirstCharacters'] = var9;
    var9 = function match(arg1) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 22;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var3 = var1.soundmojiRawFormatRegex;
        var2 = var3.exec;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['match'] = var9;
    var9 = function parse(arg1, arg2, arg3) {
        var2 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 22;
        var1 = var3[var1];
        var4 = undefined;
        var3 = var2.bind(var4)(var1);
        var2 = arg1;
        var1 = arg3;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var2['parse'] = var9;
    var8['soundboard'] = var2;
    var2 = {};
    var9 = var6[var4];
    var9 = var17.bind(var1)(var9);
    var9 = var9.order;
    var2['order'] = var9;
    var9 = ['<'];
    var2['requiredFirstCharacters'] = var9;
    var9 = function match(arg1) {
        var3 = /^<a?:(\w+):(\d+)>/;
        var2 = var3.exec;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['match'] = var9;
    var9 = function parse(arg1) {
        var1 = {};
        var2 = 'text';
        var1['type'] = var2;
        var3 = arg1;
        var2 = 1;
        var4 = var3[var2];
        var2 = global;
        var2 = var2.HermesInternal;
        var3 = var2.concat;
        var2 = ':';
        var2 = var3.bind(var2)(var4, var2);
        var1['content'] = var2;
        return var1;
    };
    var2['parse'] = var9;
    var8['customEmoji'] = var2;
    var2 = {};
    var9 = var6[var4];
    var9 = var17.bind(var1)(var9);
    var9 = var9.order;
    var9 = var9 - var10;
    var2['order'] = var9;
    var9 = ['<'];
    var2['requiredFirstCharacters'] = var9;
    var9 = function match(arg1) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 23;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var3 = var1.TIMESTAMP_REGEX;
        var2 = var3.exec;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['match'] = var9;
    var9 = function parse(arg1) {
        _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
 0:
            var7 = arg1;
            var1 = var7[Symbol.iterator];
            var7 = var1().next;
            var4 = var7().value;
            var2 = var1;
            var6 = undefined;
            var2 = var2 === var6;
            var3 = undefined;
            if(var2) { _fun0021_ip = 27; continue _fun0021 }
 24:
            var3 = var4;
 27:
            var5 = undefined;
            if(var2) { _fun0021_ip = 57; continue _fun0021 }
 32:
            var8 = var7().value;
            var4 = var1;
            var4 = var4 === var6;
            var5 = undefined;
            var2 = var4;
            if(var4) { _fun0021_ip = 57; continue _fun0021 }
 51:
            var5 = var8;
            var2 = var4;
 57:
            var4 = undefined;
            if(var2) { _fun0021_ip = 87; continue _fun0021 }
 62:
            var8 = var7().value;
            var7 = var1;
            var7 = var7 === var6;
            var4 = undefined;
            var2 = var7;
            if(var7) { _fun0021_ip = 87; continue _fun0021 }
 81:
            var4 = var8;
            var2 = var7;
 87:
            if(var2) { _fun0021_ip = 93; continue _fun0021 }
 90:
            var1.return();
 93:
            var2 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 23;
            var1 = var7[var1];
            var2 = var2.bind(var6)(var1);
            var1 = var2.parseTimestamp;
            var1 = var1.bind(var2)(var5, var4);
            var2 = null;
            if(!(var2 != var1)) { _fun0021_ip = 146; continue _fun0021 }
 134:
            var2 = 'timestamp';
            var1['type'] = var2;
            _fun0021_ip = 163; continue _fun0021;
 146:
            var2 = {};
            var4 = 'text';
            var2['type'] = var4;
            var2['content'] = var3;
            var1 = var2;
 163:
            return var1;
        }
    };
    var2['parse'] = var9;
    var8['timestamp'] = var2;
    var2 = {};
    var9 = var6[var7];
    var9 = var17.bind(var1)(var9);
    var9 = var9.defaultRules;
    var9 = var9.u;
    var9 = var9.order;
    var2['order'] = var9;
    var9 = ['~'];
    var2['requiredFirstCharacters'] = var9;
    var9 = var6[var7];
    var11 = var17.bind(var1)(var9);
    var10 = var11.inlineRegex;
    var9 = /^~~([\s\S]+?)~~(?!_)/;
    var9 = var10.bind(var11)(var9);
    var2['match'] = var9;
    var7 = var6[var7];
    var7 = var17.bind(var1)(var7);
    var7 = var7.defaultRules;
    var7 = var7.u;
    var7 = var7.parse;
    var2['parse'] = var7;
    var8['s'] = var2;
    var2 = {};
    var7 = var6[var4];
    var7 = var17.bind(var1)(var7);
    var7 = var7.order;
    var2['order'] = var7;
    var7 = ['|'];
    var2['requiredFirstCharacters'] = var7;
    var7 = function match(arg1) {
        var3 = _closure1_slot10;
        var2 = var3.exec;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['match'] = var7;
    var7 = function parse(arg1, arg2, arg3) {
        var2 = arg3;
        var1 = {};
        var4 = arg1;
        var3 = 1;
        var5 = var4[var3];
        var4 = arg2;
        var3 = undefined;
        var3 = var4.bind(var3)(var5, var2);
        var1['content'] = var3;
        var2 = var2.channelId;
        var1['channelId'] = var2;
        return var1;
    };
    var2['parse'] = var7;
    var8['spoiler'] = var2;
    var2 = {};
    var4 = var6[var4];
    var4 = var17.bind(var1)(var4);
    var4 = var4.order;
    var2['order'] = var4;
    var4 = ['<'];
    var2['requiredFirstCharacters'] = var4;
    var4 = function match(arg1) {
        var3 = _closure1_slot11;
        var2 = var3.exec;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['match'] = var4;
    var4 = function parse(arg1, arg2, arg3) {
        _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
 0:
            var3 = arg3;
            var8 = function makeNode(arg1) {
                _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
 0:
                    var2 = arg1;
                    var1 = null;
                    var3 = var1 == var2;
                    if(var3) { _fun0023_ip = 37; continue _fun0023 }
 12:
                    var3 = {};
                    var4 = 'text';
                    var3['type'] = var4;
                    var3['content'] = var2;
                    var2 = new Array(1);
                    var2[0] = var3;
                    var1 = var2;
 37:
                    return var1;
                }
            };
            var6 = _closure1_slot3;
            var5 = undefined;
            var2 = arg1;
            var1 = 3;
            var6 = var6.bind(var5)(var2, var1);
            var1 = 1;
            var2 = var6[var1];
            var1 = 2;
            var6 = var6[var1];
            var7 = _closure1_slot0;
            var10 = _closure1_slot2;
            var1 = 24;
            var9 = var10[var1];
            var11 = var7.bind(var5)(var9);
            var9 = var11.staticRouteToTranslation;
            var9 = var9.bind(var11)(var2);
            var1 = var10[var1];
            var11 = var7.bind(var5)(var1);
            var7 = var11.staticRouteToItemString;
            var1 = _closure1_slot19;
            var12 = var1.bind(var5)(var3);
            var10 = null;
            var13 = var10 == var12;
            var1 = undefined;
            if(var13) { _fun0022_ip = 116; continue _fun0022 }
 111:
            var1 = var12.id;
 116:
            var7 = var7.bind(var11)(var2, var6, var1);
            var1 = {};
            var11 = var10 != var7;
            var10 = '';
            if(!var11) { _fun0022_ip = 160; continue _fun0022 }
 136:
            var11 = global;
            var11 = var11.HermesInternal;
            var12 = var11.concat;
            var11 = ' › ';
            var10 = var12.bind(var11)(var7);
 160:
            var10 = var9 + var10;
            var10 = var8.bind(var5)(var10);
            var1['content'] = var10;
            var9 = var8.bind(var5)(var9);
            var1['mainContent'] = var9;
            var7 = var8.bind(var5)(var7);
            var1['itemContent'] = var7;
            var1['itemId'] = var6;
            var1['id'] = var2;
            var4 = _closure1_slot18;
            var3 = var3.channelId;
            var3 = var4.bind(var5)(var3);
            var1['guildId'] = var3;
            var1['channelId'] = var2;
            return var1;
        }
    };
    var2['parse'] = var4;
    var8['staticRouteLink'] = var2;
    var2 = 25;
    var2 = var6[var2];
    var2 = var17.bind(var1)(var2);
    var8['heading'] = var2;
    var2 = 26;
    var2 = var6[var2];
    var2 = var17.bind(var1)(var2);
    var8['list'] = var2;
    var2 = 27;
    var2 = var6[var2];
    var2 = var17.bind(var1)(var2);
    var8['subtext'] = var2;
    var2 = 28;
    var4 = var6[var2];
    var7 = var17.bind(var1)(var4);
    var4 = new Array(2);
    var4[0] = var8;
    var8 = 29;
    var8 = var6[var8];
    var8 = var17.bind(var1)(var8);
    var4[1] = var8;
    var15 = var7.bind(var1)(var4);
    var _closure1_slot20 = var15;
    var16 = 30;
    var4 = var6[var16];
    var8 = var17.bind(var1)(var4);
    var7 = var8.omit;
    var4 = ['inlineCode', 'codeBlock', 'br', 'blockQuote', 'subtext', 'soundboard'];
    var14 = var7.bind(var8)(var15, var4);
    var4 = var6[var16];
    var8 = var17.bind(var1)(var4);
    var7 = var8.omit;
    var4 = ['inlineCode', 'codeBlock', 'br', 'blockQuote', 'autolink', 'url', 'attachmentLink', 'mention', 'roleMention', 'channelMention', 'channelOrMessageUrl', 'mediaPostLink', 'subtext', 'soundboard', 'gameMention'];
    var13 = var7.bind(var8)(var15, var4);
    var4 = var6[var16];
    var8 = var17.bind(var1)(var4);
    var7 = var8.omit;
    var4 = ['codeBlock', 'br', 'mention', 'channel', 'roleMention', 'attachmentLink', 'subtext', 'soundboard', 'gameMention'];
    var12 = var7.bind(var8)(var15, var4);
    var4 = var6[var16];
    var9 = var17.bind(var1)(var4);
    var8 = var9.omit;
    var4 = var6[var2];
    var7 = var17.bind(var1)(var4);
    var4 = new Array(2);
    var4[0] = var15;
    var10 = {};
    var11 = {};
    var18 = function match(arg1, arg2, arg3) {
        _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
 0:
            var7 = arg1;
            var6 = arg2;
            var5 = arg3;
            var1 = _closure1_slot20;
            var2 = var1.codeBlock;
            var1 = var2.match;
            var1 = var1.bind(var2)(var7, var6, var5);
            var2 = null;
            if(!(var2 == var1)) { _fun0024_ip = 78; continue _fun0024 }
 41:
            var3 = _closure1_slot20;
            var4 = var3.inlineCode;
            var3 = var4.match;
            var3 = var3.bind(var4)(var7, var6, var5);
            var4 = var2 != var3;
            var2 = undefined;
            if(!var4) { _fun0024_ip = 76; continue _fun0024 }
 73:
            var2 = var3;
 76:
            return var2;
 78:
            return var1;
        }
    };
    var11['match'] = var18;
    var10['inlineCode'] = var11;
    var4[1] = var10;
    var7 = var7.bind(var1)(var4);
    var4 = ['blockQuote', 'codeBlock', 'br'];
    var11 = var8.bind(var9)(var7, var4);
    var4 = var6[var16];
    var8 = var17.bind(var1)(var4);
    var7 = var8.omit;
    var4 = ['codeBlock', 'br', 'blockQuote'];
    var10 = var7.bind(var8)(var15, var4);
    var4 = var6[var16];
    var8 = var17.bind(var1)(var4);
    var7 = var8.omit;
    var4 = ['codeBlock', 'br', 'attachmentLink', 'mention', 'roleMention', 'channel', 'paragraph', 'newline', 'subtext', 'soundboard'];
    var8 = var7.bind(var8)(var15, var4);
    var4 = var6[var16];
    var9 = var17.bind(var1)(var4);
    var7 = var9.omit;
    var4 = ['codeBlock', 'blockQuote', 'br'];
    var9 = var7.bind(var9)(var15, var4);
    var4 = var6[var16];
    var18 = var17.bind(var1)(var4);
    var7 = var18.omit;
    var4 = ['codeBlock', 'br', 'inlineCode'];
    var4 = var7.bind(var18)(var15, var4);
    var2 = var6[var2];
    var7 = var17.bind(var1)(var2);
    var18 = {};
    var2 = {};
    var20 = -1;
    var2['order'] = var20;
    var20 = function match(arg1, arg2) {
        _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
 0:
            var6 = arg1;
            var5 = arg2;
            var2 = var5.parseDepth;
            var1 = null;
            if(!(var1 != var2)) { _fun0025_ip = 34; continue _fun0025 }
 18:
            var3 = var5.parseDepth;
            var2 = 10;
            if(!(!(var3 > var2))) { _fun0025_ip = 248; continue _fun0025 }
 34:
            var2 = var5.highlightWord;
            if(!(var1 != var2)) { _fun0025_ip = 246; continue _fun0025 }
 47:
            var2 = var5.highlightWord;
            var2 = var2.length;
            var3 = 0;
            if(!(var3 !== var2)) { _fun0025_ip = 246; continue _fun0025 }
 67:
            var4 = var6.indexOf;
            var2 = var5.highlightWord;
            var7 = var4.bind(var6)(var2);
            var2 = -1;
            if(!(var2 !== var7)) { _fun0025_ip = 244; continue _fun0025 }
 97:
            var4 = _closure1_slot21;
            var10 = undefined;
            var4 = var4.bind(var10)(var6, var7);
            var9 = 1;
            var8 = var7;
            var7 = var8;
            if(var4) { _fun0025_ip = 172; continue _fun0025 }
 124:
            var13 = var6.indexOf;
            var12 = var5.highlightWord;
            var4 = var8 + var9;
            var4 = var13.bind(var6)(var12, var4);
            var12 = _closure1_slot21;
            var12 = var12.bind(var10)(var6, var4);
            var7 = var4;
            if(var12) { _fun0025_ip = 172; continue _fun0025 }
 162:
            var8 = var4;
            var7 = var8;
            if(var2 !== var4) { _fun0025_ip = 124; continue _fun0025 }
 172:
            if(!(var2 !== var7)) { _fun0025_ip = 242; continue _fun0025 }
 176:
            var2 = var6.substring;
            var4 = var2.bind(var6)(var3, var7);
            var3 = var6.substring;
            var2 = var5.highlightWord;
            var2 = var2.length;
            var2 = var7 + var2;
            var3 = var3.bind(var6)(var2);
            var2 = new Array(4);
            var2[0] = var6;
            var5 = var5.highlightWord;
            var2[1] = var5;
            var2[2] = var4;
            var2[3] = var3;
            return var2;
 242:
            return var1;
 244:
            return var1;
 246:
            return var1;
 248:
            return var1;
        }
    };
    var2['match'] = var20;
    var19 = function parse(arg1, arg2, arg3) {
        _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
 0:
            var6 = arg1;
            var8 = arg2;
            var2 = arg3;
            var3 = var2.parseDepth;
            var1 = null;
            var4 = var1 != var3;
            var1 = 0;
            if(!var4) { _fun0026_ip = 29; continue _fun0026 }
 26:
            var1 = var3;
 29:
            var7 = {};
            var11 = var7;
            var10 = var2;
            var2 = copyDataProperties(var11, var10);
            var4 = 1;
            var2 = var1 + var4;
            var1 = 'parseDepth';
            var7[var1] = var2;
            var1 = 2;
            var1 = var6[var1];
            var3 = undefined;
            var2 = var8.bind(var3)(var1, var7);
            var1 = 3;
            var1 = var6[var1];
            var3 = var8.bind(var3)(var1, var7);
            var1 = new Array(1);
            var11 = var1;
            var10 = var2;
            var9 = 0;
            var2 = arraySpread(var11, var10, var9);
            var5 = {};
            var7 = 'highlight';
            var5['type'] = var7;
            var6 = var6[var4];
            var5['content'] = var6;
            var1[var2] = var5;
            var9 = var2 + var4;
            var11 = var1;
            var10 = var3;
            var2 = arraySpread(var11, var10, var9);
            return var1;
        }
    };
    var2['parse'] = var19;
    var18['highlightWord'] = var2;
    var2 = new Array(2);
    var2[0] = var18;
    var16 = var6[var16];
    var18 = var17.bind(var1)(var16);
    var17 = var18.omit;
    var16 = ['url'];
    var16 = var17.bind(var18)(var15, var16);
    var2[1] = var16;
    var7 = var7.bind(var1)(var2);
    var2 = {};
    var2['RULES'] = var15;
    var2['CHANNEL_TOPIC_RULES'] = var14;
    var2['VOICE_CHANNEL_STATUS_RULES'] = var13;
    var2['EMBED_TITLE_RULES'] = var12;
    var2['INLINE_REPLY_RULES'] = var11;
    var2['GUILD_VERIFICATION_FORM_RULES'] = var10;
    var2['GUILD_EVENT_RULES'] = var9;
    var2['PROFILE_BIO_RULES'] = var8;
    var2['AUTO_MODERATION_SYSTEM_MESSAGE_RULES'] = var7;
    var2['NATIVE_SEARCH_RESULT_LINK_RULES'] = var4;
    var4 = 31;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/markup/MarkupRules.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();