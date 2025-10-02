// app/modules/markup/PlatformMarkupRules.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var6;
    var1 = function decorateWithIcon(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var2 = null;
            var1 = var3;
            if(!(var2 != var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = 'string';
            var2 = typeof var3;
            var1 = var3;
            if(!(var4 !== var2)) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var2 = global;
            var2 = var2.Array;
            var2 = var3 instanceof var2;
            var4 = var3;
            if(var2) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var2 = new Array(1);
            var2[0] = var3;
            var4 = var2;
case 5:
            var3 = var4.map;
            var2 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = arg1;
                    var4 = var3.type;
                    var2 = 'channel';
                    var1 = var3;
                    if(!(var2 === var4)) { _fun0002_ip = 7; continue _fun0002 }
case 8:
                    var2 = {};
                    var10 = var2;
                    var9 = var3;
                    var4 = copyDataProperties(var10, var9);
                    var6 = _closure1_slot3;
                    var5 = var6.resolveAssetSource;
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var4 = 1;
                    var7 = var7[var4];
                    var4 = undefined;
                    var8 = var8.bind(var4)(var7);
                    var7 = var8.getChannelMentionIcon;
                    var3 = var3.iconType;
                    var3 = var7.bind(var8)(var3);
                    var3 = var5.bind(var6)(var3);
                    var5 = null;
                    var5 = var5 == var3;
                    if(var5) { _fun0002_ip = 9; continue _fun0002 }
case 10:
                    var4 = var3.uri;
case 9:
                    var3 = 'icon';
                    var2[var3] = var4;
                    var1 = var2;
case 7:
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var2);
case 2:
            return var1;
        }
    };
    var _closure1_slot5 = var1;
    var1 = global;
    var8 = var1.Object;
    var4 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var8)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var5.bind(var1)(var2);
    var2 = var2.Image;
    var _closure1_slot3 = var2;
    var2 = /^[\u200B-\u200D\uFEFF\u180E\u061C]/;
    var _closure1_slot4 = var2;
    var2 = {};
    var4 = {};
    var8 = ['\\'];
    var4['requiredFirstCharacters'] = var8;
    var8 = function match(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg2;
            var2 = var1.allowEscape;
            var1 = false;
            if(!(var1 !== var2)) { _fun0003_ip = 11; continue _fun0003 }
case 12:
            var3 = /^\\([^0-9A-Za-z\s])/;
            var2 = var3.exec;
            var1 = arg1;
            var2 = var2.bind(var3)(var1);
            var4 = null;
            if(!(var4 != var2)) { _fun0003_ip = 13; continue _fun0003 }
case 14:
            var5 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 2;
            var3 = var3[var1];
            var1 = undefined;
            var6 = var5.bind(var1)(var3);
            var5 = var6.hasSurrogates;
            var3 = 0;
            var1 = var2[var3];
            var5 = var5.bind(var6)(var1);
            var1 = null;
            if(var5) { _fun0003_ip = 15; continue _fun0003 }
case 16:
            var5 = global;
            var6 = var5.JSON;
            var5 = var6.stringify;
            var3 = var2[var3];
            var6 = var5.bind(var6)(var3);
            var5 = var6.includes;
            var3 = '\\ud';
            var3 = var5.bind(var6)(var3);
            var1 = null;
            if(var3) { _fun0003_ip = 15; continue _fun0003 }
case 13:
            var1 = var2;
case 15:
            return var1;
case 11:
            var1 = null;
            return var1;
        }
    };
    var4['match'] = var8;
    var2['escape'] = var4;
    var4 = {};
    var8 = 3;
    var8 = var6[var8];
    var8 = var9.bind(var1)(var8);
    var8 = var8.defaultRules;
    var12 = var8.escape;
    var13 = var4;
    var8 = copyDataProperties(var13, var12);
    var8 = 'requiredFirstCharacters';
    var4[var8] = var1;
    var10 = function match(arg1) {
        var3 = _closure1_slot4;
        var2 = var3.exec;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var8 = 'match';
    var4[var8] = var10;
    var2['invisibleUnicode'] = var4;
    var4 = {};
    var8 = function parse(arg1, arg2, arg3) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var3 = arg1;
            var1 = arg3;
            var2 = var1.nested;
            if(var2) { _fun0004_ip = 17; continue _fun0004 }
case 18:
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 2;
            var2 = var5[var2];
            var6 = undefined;
            var7 = var4.bind(var6)(var2);
            var5 = var7.maybeTranslateSurrogatesToInlineEmoji;
            var4 = 0;
            var2 = var3[var4];
            var5 = var5.bind(var7)(var2);
            var2 = null;
            if(!(var2 != var5)) { _fun0004_ip = 10; continue _fun0004 }
case 19:
            var2 = {};
            var9 = var2;
            var8 = var1;
            var1 = copyDataProperties(var9, var8);
            var7 = true;
            var1 = 'nested';
            var2[var1] = var7;
            var1 = arg2;
            var1 = var1.bind(var6)(var5, var2);
            _fun0004_ip = 20; continue _fun0004;
case 10:
            var2 = {};
            var4 = var3[var4];
            var2['content'] = var4;
            var1 = var2;
case 20:
            return var1;
case 17:
            var1 = {};
            var2 = 0;
            var2 = var3[var2];
            var1['content'] = var2;
            return var1;
        }
    };
    var4['parse'] = var8;
    var2['text'] = var4;
    var4 = {};
    var8 = function parse(arg1) {
        var4 = arg1;
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 2;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.convertNameToSurrogate;
        var1 = 1;
        var1 = var4[var1];
        var2 = var2.bind(var3)(var1);
        var1 = {};
        var3 = 'emoji';
        var1['type'] = var3;
        var3 = 0;
        var3 = var4[var3];
        var1['content'] = var3;
        var1['surrogate'] = var2;
        return var1;
    };
    var4['parse'] = var8;
    var2['emoji'] = var4;
    var4 = {};
    var8 = 4;
    var10 = var6[var8];
    var10 = var9.bind(var1)(var10);
    var10 = var10.order;
    var4['order'] = var10;
    var10 = ['<'];
    var4['requiredFirstCharacters'] = var10;
    var10 = function match(arg1) {
        var3 = /^<(a)?:(\w+):(\d+)>/;
        var2 = var3.exec;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var4['match'] = var10;
    var10 = function parse(arg1, arg2, arg3) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var3 = arg1;
            var1 = var3[Symbol.iterator];
            var3 = var1().next;
            var2 = var3().value;
            var2 = var1;
            var7 = undefined;
            var2 = var2 === var7;
            var12 = undefined;
            if(var2) { _fun0005_ip = 21; continue _fun0005 }
case 22:
            var5 = var3().value;
            var4 = var1;
            var4 = var4 === var7;
            var12 = undefined;
            var2 = var4;
            if(var4) { _fun0005_ip = 21; continue _fun0005 }
case 23:
            var12 = var5;
            var2 = var4;
case 21:
            var5 = undefined;
            if(var2) { _fun0005_ip = 24; continue _fun0005 }
case 25:
            var6 = var3().value;
            var4 = var1;
            var4 = var4 === var7;
            var5 = undefined;
            var2 = var4;
            if(var4) { _fun0005_ip = 24; continue _fun0005 }
case 26:
            var5 = var6;
            var2 = var4;
case 24:
            var6 = undefined;
            if(var2) { _fun0005_ip = 27; continue _fun0005 }
case 28:
            var4 = var3().value;
            var3 = var1;
            var3 = var3 === var7;
            var6 = undefined;
            var2 = var3;
            if(var3) { _fun0005_ip = 27; continue _fun0005 }
case 29:
            var6 = var4;
            var2 = var3;
case 27:
            if(var2) { _fun0005_ip = 30; continue _fun0005 }
case 17:
            var1.return();
case 30:
            var1 = arg3;
            var4 = var1.disableAnimatedEmoji;
            if(!(var4 === var7)) { _fun0005_ip = 31; continue _fun0005 }
case 32:
            var4 = false;
case 31:
            var2 = _closure1_slot1;
            var8 = _closure1_slot2;
            var1 = 5;
            var3 = var8[var1];
            var10 = var2.bind(var7)(var3);
            var9 = var10.getEmojiURL;
            var3 = {};
            var3['id'] = var6;
            var11 = 'a';
            var11 = var11 === var12;
            var3['animated'] = var11;
            var11 = 48;
            var3['size'] = var11;
            var3 = var9.bind(var10)(var3);
            var1 = var8[var1];
            var7 = var2.bind(var7)(var1);
            var2 = var7.getEmojiURL;
            var1 = {'id': null, 'animated': false, 'size': 48};
            var1['id'] = var6;
            var2 = var2.bind(var7)(var1);
            var1 = {};
            var1['id'] = var6;
            var1['alt'] = var5;
            if(!var4) { _fun0005_ip = 33; continue _fun0005 }
case 34:
            var3 = var2;
case 33:
            var1['src'] = var3;
            var1['frozenSrc'] = var2;
            return var1;
        }
    };
    var4['parse'] = var10;
    var2['customEmoji'] = var4;
    var4 = {};
    var10 = function parse(arg1, arg2, arg3) {
        var2 = _closure1_slot1;
        var4 = _closure1_slot2;
        var1 = 6;
        var1 = var4[var1];
        var4 = undefined;
        var1 = var2.bind(var4)(var1);
        var7 = var1.channelMention;
        var6 = var7.parse;
        var5 = arg1;
        var2 = arg2;
        var1 = arg3;
        var2 = var6.bind(var7)(var5, var2, var1);
        var1 = {};
        var10 = var1;
        var9 = var2;
        var5 = copyDataProperties(var10, var9);
        var3 = _closure1_slot5;
        var5 = var2.content;
        var6 = var3.bind(var4)(var5);
        var5 = 'content';
        var1[var5] = var6;
        var2 = var2.inContent;
        var3 = var3.bind(var4)(var2);
        var2 = 'inContent';
        var1[var2] = var3;
        return var1;
    };
    var4['parse'] = var10;
    var2['channelMention'] = var4;
    var4 = {};
    var10 = function parse(arg1, arg2, arg3) {
        var2 = _closure1_slot1;
        var4 = _closure1_slot2;
        var1 = 6;
        var1 = var4[var1];
        var4 = undefined;
        var1 = var2.bind(var4)(var1);
        var7 = var1.channelOrMessageUrl;
        var6 = var7.parse;
        var5 = arg1;
        var2 = arg2;
        var1 = arg3;
        var2 = var6.bind(var7)(var5, var2, var1);
        var1 = {};
        var10 = var1;
        var9 = var2;
        var5 = copyDataProperties(var10, var9);
        var3 = _closure1_slot5;
        var5 = var2.content;
        var6 = var3.bind(var4)(var5);
        var5 = 'content';
        var1[var5] = var6;
        var2 = var2.inContent;
        var3 = var3.bind(var4)(var2);
        var2 = 'inContent';
        var1[var2] = var3;
        return var1;
    };
    var4['parse'] = var10;
    var2['channelOrMessageUrl'] = var4;
    var4 = {};
    var10 = function parse(arg1, arg2, arg3) {
        var2 = _closure1_slot1;
        var4 = _closure1_slot2;
        var1 = 6;
        var1 = var4[var1];
        var4 = undefined;
        var1 = var2.bind(var4)(var1);
        var7 = var1.mediaPostLink;
        var6 = var7.parse;
        var5 = arg1;
        var2 = arg2;
        var1 = arg3;
        var2 = var6.bind(var7)(var5, var2, var1);
        var1 = {};
        var10 = var1;
        var9 = var2;
        var5 = copyDataProperties(var10, var9);
        var3 = _closure1_slot5;
        var5 = var2.content;
        var6 = var3.bind(var4)(var5);
        var5 = 'content';
        var1[var5] = var6;
        var2 = var2.inContent;
        var3 = var3.bind(var4)(var2);
        var2 = 'inContent';
        var1[var2] = var3;
        return var1;
    };
    var4['parse'] = var10;
    var2['mediaPostLink'] = var4;
    var4 = {};
    var10 = function parse(arg1, arg2, arg3) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 7;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var5 = var1.attachmentLink;
        var4 = var5.parse;
        var3 = arg1;
        var2 = arg2;
        var1 = arg3;
        var1 = var4.bind(var5)(var3, var2, var1);
        return var1;
    };
    var4['parse'] = var10;
    var2['attachmentLink'] = var4;
    var4 = {};
    var8 = var6[var8];
    var8 = var9.bind(var1)(var8);
    var8 = var8.order;
    var4['order'] = var8;
    var8 = ['@'];
    var4['requiredFirstCharacters'] = var8;
    var8 = function match(arg1) {
        var3 = /^(@silent(?![^\s]))/;
        var2 = var3.exec;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var4['match'] = var8;
    var7 = function parse(arg1) {
        var1 = {};
        var2 = 'text';
        var1['type'] = var2;
        var3 = arg1;
        var2 = 0;
        var2 = var3[var2];
        var1['content'] = var2;
        return var1;
    };
    var4['parse'] = var7;
    var2['silentPrefix'] = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/markup/PlatformMarkupRules.native.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();