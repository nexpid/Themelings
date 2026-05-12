// app/modules/markup/CustomMarkup.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var9 = require;
    var3 = exports;
    var10 = dependencyMap;
    var _closure1_slot0 = var9;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var10;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
case 2:
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var3["@@iterator"];
case 4:
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var7 = {};
            var9 = var7.toString;
            var7 = var9.call;
            var11 = var7.bind(var9)(var3);
            var10 = var11.slice;
            var9 = 8;
            var7 = -1;
            var9 = var10.bind(var11)(var9, var7);
            var7 = 'Object';
            var7 = var7 === var9;
            if(!var7) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var7 = var3.constructor;
case 14:
            var10 = var9;
            if(!var7) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var7 = var3.constructor;
            var10 = var7.name;
case 16:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 20:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 23; continue _fun0001 }
case 21:
            var9 = _closure1_slot5;
            var7 = var9.bind(var8)(var3, var8);
case 23:
            _fun0001_ip = 24; continue _fun0001;
case 18:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
case 24:
            var6 = var7;
            _fun0001_ip = 10; continue _fun0001;
case 12:
            var7 = _closure1_slot5;
            var6 = var7.bind(var8)(var3, var8);
case 10:
            var4 = var6;
            if(var4) { _fun0001_ip = 8; continue _fun0001 }
case 25:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
case 8:
            if(!var4) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            _closure2_slot0 = var4;
case 26:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 28; continue _fun0002 }
case 29:
                    var1 = {};
                    var2 = false;
                    var1['done'] = var2;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var2 = parseFloat(var2);
                    var4 = var2 + 1;
                    _closure2_slot1 = var4;
                    var2 = var3[var2];
                    var1['value'] = var2;
                    _fun0002_ip = 30; continue _fun0002;
case 28:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
case 30:
                    return var1;
                }
            };
            return var1;
case 6:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot4 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 31; continue _fun0003 }
case 32:
            var2 = var4.length;
            var1 = var3 > var2;
case 31:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
case 34:
            var2 = var4.length;
case 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 35; continue _fun0003 }
case 4:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 4; continue _fun0003 }
case 35:
            return var1;
        }
    };
    var _closure1_slot5 = var1;
    var7 = function createRules(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var4 = arguments[1];
            var3 = undefined;
            if(!(var4 === var3)) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var4 = {};
case 36:
            var13 = _closure1_slot1;
            var11 = _closure1_slot2;
            var1 = 1;
            var1 = var11[var1];
            var2 = var13.bind(var3)(var1);
            var1 = arg1;
            var9 = var2.bind(var3)(var1, var4);
            var1 = 2;
            var1 = var11[var1];
            var2 = var13.bind(var3)(var1);
            var1 = 3;
            var1 = var11[var1];
            var1 = var13.bind(var3)(var1);
            var4 = var1.defaultRules;
            var1 = new Array(3);
            var1[0] = var4;
            var1[1] = var9;
            var4 = {};
            var10 = _closure1_slot0;
            var7 = 0;
            var5 = var11[var7];
            var5 = var10.bind(var3)(var5);
            var5 = var5.AST_KEY;
            var6 = var5.LINK;
            var5 = {};
            var12 = 4;
            var8 = var11[var12];
            var8 = var13.bind(var3)(var8);
            var8 = var8.defaultRules;
            var15 = var8.link;
            var16 = var5;
            var8 = copyDataProperties(var16, var15);
            var8 = var11[var7];
            var8 = var10.bind(var3)(var8);
            var8 = var8.AST_KEY;
            var8 = var8.LINK;
            var8 = var9[var8];
            var14 = var8.react;
            var8 = 'react';
            var5[7] = var14;
            var4[5] = var5;
            var5 = var11[var7];
            var5 = var10.bind(var3)(var5);
            var5 = var5.AST_KEY;
            var6 = var5.URL;
            var5 = {};
            var14 = var11[var12];
            var14 = var13.bind(var3)(var14);
            var14 = var14.defaultRules;
            var15 = var14.url;
            var16 = var5;
            var14 = copyDataProperties(var16, var15);
            var14 = var11[var7];
            var14 = var10.bind(var3)(var14);
            var14 = var14.AST_KEY;
            var14 = var14.URL;
            var14 = var9[var14];
            var14 = var14.react;
            var5[7] = var14;
            var4[5] = var5;
            var5 = var11[var7];
            var5 = var10.bind(var3)(var5);
            var5 = var5.AST_KEY;
            var6 = var5.AUTOLINK;
            var5 = {};
            var14 = var11[var12];
            var14 = var13.bind(var3)(var14);
            var14 = var14.defaultRules;
            var15 = var14.autolink;
            var16 = var5;
            var14 = copyDataProperties(var16, var15);
            var14 = var11[var7];
            var14 = var10.bind(var3)(var14);
            var14 = var14.AST_KEY;
            var14 = var14.AUTOLINK;
            var14 = var9[var14];
            var14 = var14.react;
            var5[7] = var14;
            var4[5] = var5;
            var5 = var11[var7];
            var5 = var10.bind(var3)(var5);
            var5 = var5.AST_KEY;
            var6 = var5.BLOCK_QUOTE;
            var5 = {};
            var12 = var11[var12];
            var12 = var13.bind(var3)(var12);
            var12 = var12.defaultRules;
            var15 = var12.blockQuote;
            var16 = var5;
            var12 = copyDataProperties(var16, var15);
            var7 = var11[var7];
            var7 = var10.bind(var3)(var7);
            var7 = var7.AST_KEY;
            var7 = var7.BLOCK_QUOTE;
            var7 = var9[var7];
            var7 = var7.react;
            var5[7] = var7;
            var4[5] = var5;
            var1[2] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var _closure1_slot6 = var7;
    var6 = function createRulesWithoutLinks(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var6 = arguments[1];
            var5 = undefined;
            if(!(var6 === var5)) { _fun0005_ip = 36; continue _fun0005 }
case 37:
            var6 = {};
case 36:
            var1 = {};
            var4 = _closure1_slot6;
            var3 = arg1;
            var7 = var4.bind(var5)(var3, var6);
            var8 = var1;
            var3 = copyDataProperties(var8, var7);
            var3 = _closure1_slot4;
            var2 = _closure1_slot3;
            var4 = var3.bind(var5)(var2);
            var3 = var4.bind(var5)();
            var2 = var3.done;
            if(var2) { _fun0005_ip = 38; continue _fun0005 }
case 7:
            var2 = var3.value;
            var2 = delete var1[var2];
            var6 = var4.bind(var5)();
            var2 = var6.done;
            var3 = var6;
            if(!var2) { _fun0005_ip = 7; continue _fun0005 }
case 38:
            return var1;
        }
    };
    var _closure1_slot7 = var6;
    var5 = function createNotifCenterV2MessagePreviewRules(arg1, arg2, arg3) {
        var4 = _closure1_slot1;
        var11 = _closure1_slot2;
        var1 = 1;
        var1 = var11[var1];
        var3 = undefined;
        var7 = var4.bind(var3)(var1);
        var6 = arg1;
        var2 = arg2;
        var1 = arg3;
        var9 = var7.bind(var3)(var6, var2, var1);
        var1 = 2;
        var1 = var11[var1];
        var2 = var4.bind(var3)(var1);
        var1 = 3;
        var1 = var11[var1];
        var1 = var4.bind(var3)(var1);
        var4 = var1.notifCenterV2MessagePreviewRules;
        var1 = new Array(2);
        var1[0] = var4;
        var4 = {};
        var10 = _closure1_slot0;
        var7 = 0;
        var5 = var11[var7];
        var5 = var10.bind(var3)(var5);
        var5 = var5.AST_KEY;
        var6 = var5.MENTION;
        var5 = {};
        var12 = 5;
        var8 = var11[var12];
        var8 = var10.bind(var3)(var8);
        var13 = var8.DEFAULT_RULES;
        var8 = var11[var7];
        var8 = var10.bind(var3)(var8);
        var8 = var8.AST_KEY;
        var8 = var8.MENTION;
        var16 = var13[var8];
        var17 = var5;
        var8 = copyDataProperties(var17, var16);
        var8 = var11[var7];
        var8 = var10.bind(var3)(var8);
        var8 = var8.AST_KEY;
        var8 = var8.MENTION;
        var8 = var9[var8];
        var13 = var8.react;
        var8 = 'react';
        var5[7] = var13;
        var4[5] = var5;
        var5 = var11[var7];
        var5 = var10.bind(var3)(var5);
        var5 = var5.AST_KEY;
        var6 = var5.CHANNEL_MENTION;
        var5 = {};
        var13 = var11[var12];
        var13 = var10.bind(var3)(var13);
        var14 = var13.DEFAULT_RULES;
        var13 = var11[var7];
        var13 = var10.bind(var3)(var13);
        var13 = var13.AST_KEY;
        var13 = var13.CHANNEL_MENTION;
        var16 = var14[var13];
        var17 = var5;
        var13 = copyDataProperties(var17, var16);
        var13 = var11[var7];
        var13 = var10.bind(var3)(var13);
        var13 = var13.AST_KEY;
        var13 = var13.CHANNEL_MENTION;
        var13 = var9[var13];
        var13 = var13.react;
        var5[7] = var13;
        var4[5] = var5;
        var5 = var11[var7];
        var5 = var10.bind(var3)(var5);
        var5 = var5.AST_KEY;
        var6 = var5.ITALICS;
        var5 = {};
        var12 = var11[var12];
        var12 = var10.bind(var3)(var12);
        var13 = var12.DEFAULT_RULES;
        var12 = var11[var7];
        var12 = var10.bind(var3)(var12);
        var12 = var12.AST_KEY;
        var12 = var12.ITALICS;
        var16 = var13[var12];
        var17 = var5;
        var12 = copyDataProperties(var17, var16);
        var7 = var11[var7];
        var7 = var10.bind(var3)(var7);
        var7 = var7.AST_KEY;
        var7 = var7.ITALICS;
        var7 = var9[var7];
        var7 = var7.react;
        var5[7] = var7;
        var4[5] = var5;
        var1[1] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot8 = var5;
    var4 = function createWidgetMessageRules() {
        var12 = _closure1_slot1;
        var10 = _closure1_slot2;
        var1 = 2;
        var1 = var10[var1];
        var3 = undefined;
        var2 = var12.bind(var3)(var1);
        var1 = 3;
        var1 = var10[var1];
        var1 = var12.bind(var3)(var1);
        var4 = var1.lockscreenWidgetMessageRules;
        var1 = new Array(2);
        var1[0] = var4;
        var4 = {};
        var9 = _closure1_slot0;
        var5 = 0;
        var6 = var10[var5];
        var6 = var9.bind(var3)(var6);
        var6 = var6.AST_KEY;
        var11 = var6.MENTION;
        var6 = {};
        var7 = 5;
        var7 = var10[var7];
        var7 = var9.bind(var3)(var7);
        var8 = var7.DEFAULT_RULES;
        var7 = var10[var5];
        var7 = var9.bind(var3)(var7);
        var7 = var7.AST_KEY;
        var7 = var7.MENTION;
        var14 = var8[var7];
        var15 = var6;
        var7 = copyDataProperties(var15, var14);
        var7 = 1;
        var8 = var10[var7];
        var8 = var9.bind(var3)(var8);
        var13 = var8.plainMentionRenderer;
        var8 = 'react';
        var6[7] = var13;
        var4[10] = var6;
        var5 = var10[var5];
        var5 = var9.bind(var3)(var5);
        var5 = var5.AST_KEY;
        var6 = var5.SPOILER;
        var5 = {};
        var11 = 6;
        var11 = var10[var11];
        var11 = var12.bind(var3)(var11);
        var11 = var11.RULES;
        var14 = var11.spoiler;
        var15 = var5;
        var11 = copyDataProperties(var15, var14);
        var7 = var10[var7];
        var7 = var9.bind(var3)(var7);
        var7 = var7.plainSpoilerRenderer;
        var5[7] = var7;
        var4[5] = var5;
        var1[1] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot9 = var4;
    var1 = global;
    var12 = var1.Object;
    var11 = var12.defineProperty;
    var8 = {};
    var1 = true;
    var8['value'] = var1;
    var1 = '__esModule';
    var1 = var11.bind(var12)(var3, var1, var8);
    var11 = 0;
    var8 = var10[var11];
    var1 = undefined;
    var8 = var9.bind(var1)(var8);
    var8 = var8.AST_KEY;
    var12 = var8.URL;
    var8 = new Array(5);
    var8[0] = var12;
    var12 = var10[var11];
    var12 = var9.bind(var1)(var12);
    var12 = var12.AST_KEY;
    var12 = var12.AUTOLINK;
    var8[1] = var12;
    var11 = var10[var11];
    var11 = var9.bind(var1)(var11);
    var11 = var11.AST_KEY;
    var11 = var11.LINK;
    var8[2] = var11;
    var11 = 'mailto';
    var8[3] = var11;
    var11 = 'tel';
    var8[4] = var11;
    var _closure1_slot3 = var8;
    var8 = 7;
    var8 = var10[var8];
    var10 = var9.bind(var1)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'modules/markup/CustomMarkup.native.tsx';
    var8 = var9.bind(var10)(var8);
    var3['createRules'] = var7;
    var7 = function getParser() {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var6 = arguments[0];
            var5 = arguments[1];
            var4 = undefined;
            if(!(var6 === var4)) { _fun0006_ip = 32; continue _fun0006 }
case 39:
            var6 = {};
case 32:
            if(!(var5 === var4)) { _fun0006_ip = 29; continue _fun0006 }
case 40:
            var5 = {};
case 29:
            var3 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 3;
            var2 = var7[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.reactParserFor;
            var1 = _closure1_slot6;
            var1 = var1.bind(var4)(var6, var5);
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['getParser'] = var7;
    var3['createRulesWithoutLinks'] = var6;
    var6 = function getParserWithoutLinks() {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var6 = arguments[0];
            var5 = arguments[1];
            var4 = undefined;
            if(!(var6 === var4)) { _fun0007_ip = 32; continue _fun0007 }
case 39:
            var6 = {};
case 32:
            if(!(var5 === var4)) { _fun0007_ip = 29; continue _fun0007 }
case 40:
            var5 = {};
case 29:
            var3 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 3;
            var2 = var7[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.reactParserFor;
            var1 = _closure1_slot7;
            var1 = var1.bind(var4)(var6, var5);
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['getParserWithoutLinks'] = var6;
    var3['createNotifCenterV2MessagePreviewRules'] = var5;
    var5 = function getNotifCenterV2MessagePreviewParser() {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var7 = arguments[0];
            var6 = arguments[1];
            var5 = undefined;
            if(!(var7 === var5)) { _fun0008_ip = 32; continue _fun0008 }
case 39:
            var7 = {};
case 32:
            if(!(var6 === var5)) { _fun0008_ip = 29; continue _fun0008 }
case 40:
            var6 = {};
case 29:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 3;
            var2 = var4[var2];
            var3 = var3.bind(var5)(var2);
            var2 = var3.reactParserFor;
            var4 = _closure1_slot8;
            var1 = arguments[2];
            var1 = var4.bind(var5)(var7, var6, var1);
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['getNotifCenterV2MessagePreviewParser'] = var5;
    var3['createWidgetMessageRules'] = var4;
    var2 = function getWidgetMessageRules() {
        var3 = _closure1_slot1;
        var4 = _closure1_slot2;
        var2 = 3;
        var2 = var4[var2];
        var4 = undefined;
        var3 = var3.bind(var4)(var2);
        var2 = var3.reactParserFor;
        var1 = _closure1_slot9;
        var1 = var1.bind(var4)();
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['getWidgetMessageRules'] = var2;
    return var1;
})();