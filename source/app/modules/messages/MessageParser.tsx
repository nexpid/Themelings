// app/modules/messages/MessageParser.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var10 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var8;
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
            var9 = _closure1_slot23;
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
            var7 = _closure1_slot23;
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
    var _closure1_slot22 = var1;
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
    var _closure1_slot23 = var1;
    var1 = function matchPrefix(arg1, arg2, arg3, arg4) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = arg1;
            var5 = arg2;
            var4 = arg3;
            var _closure2_slot0 = var2;
            var _closure2_slot1 = var5;
            var3 = arg4;
            var _closure2_slot2 = var3;
            var3 = 0;
            var3 = var5[var3];
            if(!(var3 !== var2)) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var3 = undefined;
            return var3;
case 36:
            var3 = var5.substring;
            var2 = var2.length;
            var2 = var3.bind(var5)(var2);
            var _closure2_slot3 = var2;
            var3 = var4.sortBy;
            var2 = function(arg1) {
                var1 = arg1;
                var1 = var1.text;
                var1 = var1.length;
                var1 = -var1;
                return var1;
            };
            var4 = var3.bind(var4)(var2);
            var3 = var4.filter;
            var2 = function(arg1) {
                var1 = arg1;
                var4 = var1.text;
                var2 = _closure2_slot1;
                var1 = var2.toLowerCase;
                var3 = var1.bind(var2)();
                var2 = var3.indexOf;
                var1 = var4.toLowerCase;
                var1 = var1.bind(var4)();
                var2 = var2.bind(var3)(var1);
                var1 = 1;
                var1 = var1 === var2;
                return var1;
            };
            var4 = var3.bind(var4)(var2);
            var3 = var4.sortBy;
            var2 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = arg1;
                    var3 = var1.text;
                    var2 = _closure2_slot3;
                    var1 = 1;
                    if(!(var3 === var2)) { _fun0005_ip = 38; continue _fun0005 }
case 39:
                    var1 = 0;
case 38:
                    return var1;
                }
            };
            var3 = var3.bind(var4)(var2);
            var2 = var3.map;
            var1 = function(arg1) {
                var1 = arg1;
                var3 = var1.id;
                var4 = var1.text;
                var1 = _closure2_slot0;
                var4 = var1 + var4;
                var1 = new Array(3);
                var1[0] = var4;
                var1[1] = var3;
                var2 = _closure2_slot2;
                var1[2] = var2;
                return var1;
            };
            var2 = var2.bind(var3)(var1);
            var1 = var2.first;
            var1 = var1.bind(var2)();
            return var1;
        }
    };
    var _closure1_slot24 = var1;
    var16 = function matchAndReturnText(arg1) {
        var3 = arg1;
        var _closure2_slot0 = var3;
        var1 = {};
        var4 = var3.order;
        var1['order'] = var4;
        var3 = var3.match;
        var1['match'] = var3;
        var2 = function parse(arg1) {
            var1 = {};
            var2 = _closure2_slot0;
            var2 = var2.type;
            var1['type'] = var2;
            var3 = arg1;
            var2 = 0;
            var2 = var3[var2];
            var1['content'] = var2;
            return var1;
        };
        var1['parse'] = var2;
        return var1;
    };
    var12 = function matchRegexAndReturnText(arg1) {
        var1 = {};
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var2 = 14;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.anyScopeRegex;
        var2 = arg1;
        var2 = var3.bind(var4)(var2);
        var1['match'] = var2;
        var2 = function parse(arg1) {
            var1 = {};
            var2 = 'text';
            var1['type'] = var2;
            var3 = arg1;
            var2 = 0;
            var2 = var3[var2];
            var1['content'] = var2;
            return var1;
        };
        var1['parse'] = var2;
        return var1;
    };
    var1 = function rebuild(arg1, arg2, arg3, arg4) {
        var5 = arg1;
        var1 = arg2;
        var _closure2_slot0 = var1;
        var1 = arg3;
        var _closure2_slot1 = var1;
        var1 = arg4;
        var _closure2_slot2 = var1;
        var1 = '';
        var _closure2_slot3 = var1;
        var2 = new Array(0);
        var _closure2_slot4 = var2;
        var4 = var5.forEach;
        var1 = function(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var1 = arg1;
                var14 = _closure2_slot0;
                var13 = _closure2_slot2;
                var12 = null;
                if(!(var12 != var13)) { _fun0006_ip = 40; continue _fun0006 }
case 31:
                var4 = var1.type;
                var3 = 'customEmoticon';
                if(!(var3 === var4)) { _fun0006_ip = 41; continue _fun0006 }
case 42:
                var5 = var1.emoji;
                var4 = undefined;
                var3 = false;
                var3 = var13.bind(var4)(var5, var3);
case 41:
                var4 = var1.type;
                var3 = 'emoticon';
                if(!(var3 !== var4)) { _fun0006_ip = 43; continue _fun0006 }
case 30:
                var4 = var1.type;
                var3 = 'text';
                if(!(var3 === var4)) { _fun0006_ip = 40; continue _fun0006 }
case 43:
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var10 = 18;
                var3 = var3[var10];
                var9 = undefined;
                var5 = var4.bind(var9)(var3);
                var4 = var5.translateSurrogatesToInlineEmoji;
                var3 = var1.content;
                var8 = var4.bind(var5)(var3);
                var4 = _closure1_slot21;
                var3 = var4.exec;
                var3 = var3.bind(var4)(var8);
                var6 = 1;
                var5 = 2;
                var4 = '';
                if(!(var12 !== var3)) { _fun0006_ip = 40; continue _fun0006 }
case 44:
                var15 = var3[var6];
                if(!(var12 != var15)) { _fun0006_ip = 45; continue _fun0006 }
case 46:
                var15 = var3[var6];
                if(!(var4 === var15)) { _fun0006_ip = 47; continue _fun0006 }
case 45:
                var16 = _closure1_slot1;
                var15 = _closure1_slot2;
                var15 = var15[var10];
                var17 = var16.bind(var9)(var15);
                var16 = var17.getByName;
                var15 = var3[var5];
                var16 = var16.bind(var17)(var15);
                _fun0006_ip = 48; continue _fun0006;
case 47:
                var15 = var14.emojiContext;
                var16 = undefined;
                if(!var15) { _fun0006_ip = 48; continue _fun0006 }
case 49:
                var18 = var14.emojiContext;
                var17 = var18.getById;
                var15 = var3[var6];
                var16 = var17.bind(var18)(var15);
case 48:
                if(!var16) { _fun0006_ip = 50; continue _fun0006 }
case 51:
                var15 = var1.isShortcut;
                if(var15) { _fun0006_ip = 52; continue _fun0006 }
case 53:
                var15 = false;
case 52:
                var15 = var13.bind(var9)(var16, var15);
case 50:
                var16 = _closure1_slot21;
                var15 = var16.exec;
                var3 = var15.bind(var16)(var8);
                if(var12 !== var3) { _fun0006_ip = 44; continue _fun0006 }
case 40:
                var3 = var1.content;
                var4 = 'string';
                var3 = typeof var3;
                if(!(var4 !== var3)) { _fun0006_ip = 54; continue _fun0006 }
case 55:
                var3 = var1.content;
                var4 = var3.constructor;
                var3 = global;
                var3 = var3.Array;
                if(!(var4 === var3)) { _fun0006_ip = 56; continue _fun0006 }
case 57:
                var9 = _closure1_slot25;
                var22 = var1.content;
                var21 = _closure2_slot0;
                var20 = _closure2_slot1;
                var19 = _closure2_slot2;
                var7 = undefined;
                var23 = undefined;
                var3 = var23[var9](var22, var21, var20, var19, var18);
                var4 = var3.content;
                var5 = _closure1_slot22;
                var3 = var3.emoji;
                var6 = var5.bind(var7)(var3);
                var5 = var6.bind(var7)();
                var3 = var5.done;
                if(var3) { _fun0006_ip = 58; continue _fun0006 }
case 59:
                var10 = var5.value;
                var9 = _closure2_slot4;
                var8 = var9.push;
                var3 = {};
                var11 = _closure2_slot3;
                var12 = var11.length;
                var11 = var10.position;
                var11 = var12 + var11;
                var3['position'] = var11;
                var11 = var10.length;
                var3['length'] = var11;
                var10 = var10.id;
                var3['id'] = var10;
                var3 = var8.bind(var9)(var3);
                var8 = var6.bind(var7)();
                var3 = var8.done;
                var5 = var8;
                if(!var3) { _fun0006_ip = 59; continue _fun0006 }
case 58:
                var3 = _closure2_slot3;
                var3 = var3 + var4;
                _closure2_slot3 = var3;
                _fun0006_ip = 56; continue _fun0006;
case 54:
                var4 = var1.type;
                var3 = 'emoji';
                if(!(var3 !== var4)) { _fun0006_ip = 60; continue _fun0006 }
case 61:
                var3 = 'codeBlock';
                if(!(var3 !== var4)) { _fun0006_ip = 62; continue _fun0006 }
case 63:
                var3 = 'inlineCode';
                if(!(var3 !== var4)) { _fun0006_ip = 62; continue _fun0006 }
case 64:
                var3 = 'mention';
                if(!(var3 !== var4)) { _fun0006_ip = 62; continue _fun0006 }
case 65:
                var3 = 'roleMention';
                if(!(var3 !== var4)) { _fun0006_ip = 62; continue _fun0006 }
case 66:
                var3 = 'channel';
                if(!(var3 !== var4)) { _fun0006_ip = 62; continue _fun0006 }
case 67:
                var4 = _closure2_slot3;
                var6 = _closure2_slot1;
                var5 = var1.content;
                var3 = undefined;
                var3 = var6.bind(var3)(var5);
                var3 = var4 + var3;
                _closure2_slot3 = var3;
                _fun0006_ip = 56; continue _fun0006;
case 62:
                var3 = _closure2_slot0;
                var4 = var3.isNotification;
                var3 = true;
                if(!(var3 !== var4)) { _fun0006_ip = 68; continue _fun0006 }
case 69:
                var4 = _closure2_slot3;
                var3 = var1.content;
                var3 = var4 + var3;
                _closure2_slot3 = var3;
                _fun0006_ip = 56; continue _fun0006;
case 68:
                var4 = _closure2_slot3;
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var3 = 25;
                var5 = var5[var3];
                var3 = undefined;
                var6 = var6.bind(var3)(var5);
                var5 = var6.isolate;
                var3 = var1.content;
                var3 = var5.bind(var6)(var3);
                var3 = var4 + var3;
                _closure2_slot3 = var3;
                _fun0006_ip = 56; continue _fun0006;
case 60:
                var5 = _closure2_slot4;
                var4 = var5.push;
                var3 = {};
                var6 = _closure2_slot3;
                var6 = var6.length;
                var3['position'] = var6;
                var6 = var1.content;
                var6 = var6.length;
                var3['length'] = var6;
                var6 = var1.id;
                var3['id'] = var6;
                var3 = var4.bind(var5)(var3);
                var3 = _closure2_slot3;
                var1 = var1.content;
                var1 = var3 + var1;
                _closure2_slot3 = var1;
case 56:
                var1 = undefined;
                return var1;
            }
        };
        var1 = var4.bind(var5)(var1);
        var1 = {};
        var3 = _closure2_slot3;
        var1['content'] = var3;
        var1['emoji'] = var2;
        return var1;
    };
    var _closure1_slot25 = var1;
    var4 = function parseAndRebuild(arg1, arg2, arg3) {
        var6 = arg2;
        var5 = _closure1_slot25;
        var3 = _closure1_slot20;
        var4 = undefined;
        var2 = arg1;
        var3 = var3.bind(var4)(var2, var6);
        var2 = _closure1_slot1;
        var7 = _closure1_slot2;
        var1 = 18;
        var1 = var7[var1];
        var1 = var2.bind(var4)(var1);
        var9 = var1.translateInlineEmojiToSurrogates;
        var8 = arg3;
        var12 = undefined;
        var11 = var3;
        var10 = var6;
        var1 = var12[var5](var11, var10, var9, var8, var7);
        var1 = var1.content;
        return var1;
    };
    var _closure1_slot26 = var4;
    var2 = function createParserState(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var4 = arg1;
            var5 = null;
            var1 = var5 == var4;
            var8 = undefined;
            var3 = undefined;
            if(var1) { _fun0007_ip = 34; continue _fun0007 }
case 70:
            var1 = var4.getGuildId;
            var3 = var1.bind(var4)();
case 34:
            var _closure2_slot0 = var3;
            var1 = var5 != var3;
            var10 = null;
            if(!var1) { _fun0007_ip = 71; continue _fun0007 }
case 72:
            var6 = _closure1_slot10;
            var1 = var6.getGuild;
            var10 = var1.bind(var6)(var3);
case 71:
            var9 = _closure1_slot11;
            var7 = var9.can;
            var6 = _closure1_slot15;
            var6 = var6.MENTION_EVERYONE;
            var6 = var7.bind(var9)(var6, var4);
            var _closure2_slot1 = var6;
            if(!(var5 != var4)) { _fun0007_ip = 73; continue _fun0007 }
case 11:
            var6 = var4.isPrivate;
            var6 = var6.bind(var4)();
            if(var6) { _fun0007_ip = 74; continue _fun0007 }
case 73:
            if(!(var5 == var3)) { _fun0007_ip = 75; continue _fun0007 }
case 76:
            var14 = new Array(0);
            _fun0007_ip = 77; continue _fun0007;
case 75:
            var7 = _closure1_slot8;
            var6 = var7.getMembers;
            var9 = var6.bind(var7)(var3);
            var7 = var9.map;
            var6 = function(arg1) {
                var1 = arg1;
                var3 = var1.userId;
                var2 = var1.nick;
                var1 = {};
                var1['userId'] = var3;
                var1['nick'] = var2;
                return var1;
            };
            var14 = var7.bind(var9)(var6);
case 77:
            _fun0007_ip = 78; continue _fun0007;
case 74:
            var7 = var4.recipients;
            var6 = var7.map;
            var4 = function(arg1) {
                var1 = {};
                var2 = arg1;
                var1['userId'] = var2;
                var2 = null;
                var1['nick'] = var2;
                return var1;
            };
            var4 = var6.bind(var7)(var4);
            var7 = _closure1_slot14;
            var6 = var7.getCurrentUser;
            var9 = var6.bind(var7)();
            var14 = var4;
            if(!(var5 != var9)) { _fun0007_ip = 78; continue _fun0007 }
case 79:
            var7 = var4.push;
            var6 = {};
            var9 = var9.id;
            var6['userId'] = var9;
            var6['nick'] = var5;
            var6 = var7.bind(var4)(var6);
            var14 = var4;
case 78:
            var9 = _closure1_slot1;
            var7 = _closure1_slot2;
            var4 = 22;
            var6 = var7[var4];
            var11 = var9.bind(var8)(var6);
            var13 = var14.reduce;
            var12 = function(arg1, arg2) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var1 = arg1;
                    var2 = arg2;
                    var5 = var2.userId;
                    var3 = _closure1_slot14;
                    var2 = var3.getUser;
                    var4 = var2.bind(var3)(var5);
                    var2 = null;
                    if(!(var2 != var4)) { _fun0008_ip = 80; continue _fun0008 }
case 81:
                    var3 = var1.push;
                    var2 = {};
                    var2['id'] = var5;
                    var4 = var4.tag;
                    var2['text'] = var4;
                    var2 = var3.bind(var1)(var2);
case 80:
                    return var1;
                }
            };
            var6 = new Array(0);
            var6 = var13.bind(var14)(var12, var6);
            var6 = var11.bind(var8)(var6);
            var7 = var7[var4];
            var9 = var9.bind(var8)(var7);
            if(!(var5 == var10)) { _fun0007_ip = 82; continue _fun0007 }
case 83:
            var7 = new Array(0);
            _fun0007_ip = 84; continue _fun0007;
case 82:
            var13 = _closure1_slot9;
            var12 = var13.getSortedRoles;
            var11 = var10.id;
            var7 = var12.bind(var13)(var11);
case 84:
            var11 = var9.bind(var8)(var7);
            var9 = var11.filter;
            var7 = function(arg1) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var1 = arg1;
                    var2 = var1.mentionable;
                    var1 = _closure2_slot1;
                    if(var1) { _fun0009_ip = 39; continue _fun0009 }
case 85:
                    var1 = var2;
case 39:
                    return var1;
                }
            };
            var11 = var9.bind(var11)(var7);
            var9 = var11.map;
            var7 = function(arg1) {
                var1 = arg1;
                var3 = var1.id;
                var2 = var1.name;
                var1 = {};
                var1['id'] = var3;
                var1['text'] = var2;
                return var1;
            };
            var11 = var9.bind(var11)(var7);
            var9 = _closure1_slot1;
            var7 = _closure1_slot2;
            var7 = var7[var4];
            var9 = var9.bind(var8)(var7);
            var12 = _closure1_slot6;
            var7 = var12.getTextChannelNameDisambiguations;
            var7 = var7.bind(var12)(var3);
            var12 = var9.bind(var8)(var7);
            var9 = var12.map;
            var7 = function(arg1) {
                var1 = arg1;
                var3 = var1.id;
                var2 = var1.name;
                var1 = {};
                var1['id'] = var3;
                var1['text'] = var2;
                return var1;
            };
            var9 = var9.bind(var12)(var7);
            if(!(var5 == var3)) { _fun0007_ip = 86; continue _fun0007 }
case 87:
            var7 = new Array(0);
            _fun0007_ip = 88; continue _fun0007;
case 86:
            var5 = _closure1_slot1;
            var13 = _closure1_slot2;
            var4 = var13[var4];
            var5 = var5.bind(var8)(var4);
            var12 = _closure1_slot0;
            var4 = 26;
            var4 = var13[var4];
            var4 = var12.bind(var8)(var4);
            var4 = var4.COMMAND_SUPPORTED_CHANNEL_TYPE_KEYS;
            var8 = var5.bind(var8)(var4);
            var5 = var8.filter;
            var4 = function(arg1) {
                var2 = _closure1_slot7;
                var1 = arg1;
                var1 = var1 !== var2;
                return var1;
            };
            var8 = var5.bind(var8)(var4);
            var5 = var8.flatMap;
            var4 = function(arg1) {
                var3 = _closure1_slot6;
                var2 = var3.getChannels;
                var1 = _closure2_slot0;
                var2 = var2.bind(var3)(var1);
                var1 = arg1;
                var3 = var2[var1];
                var2 = var3.map;
                var1 = function(arg1) {
                    var2 = arg1;
                    var1 = {};
                    var3 = var2.channel;
                    var3 = var3.id;
                    var1['id'] = var3;
                    var2 = var2.channel;
                    var2 = var2.name;
                    var1['text'] = var2;
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var5 = var5.bind(var8)(var4);
            var4 = var5.value;
            var7 = var4.bind(var5)();
case 88:
            var5 = _closure1_slot4;
            var4 = var5.computeAllActiveJoinedThreads;
            var5 = var4.bind(var5)(var3);
            var4 = var5.map;
            var2 = function(arg1) {
                var2 = arg1;
                var1 = {};
                var3 = var2.id;
                var1['id'] = var3;
                var2 = var2.name;
                var1['text'] = var2;
                return var1;
            };
            var8 = var4.bind(var5)(var2);
            var2 = _closure1_slot3;
            var1 = var2.getDisambiguatedEmojiContext;
            var5 = var1.bind(var2)(var3);
            var1 = var5.getEscapedCustomEmoticonNames;
            var2 = var1.bind(var5)();
            var1 = var5.getCustomEmoji;
            var3 = var1.bind(var5)();
            var1 = var5.getCustomEmoticonRegex;
            var4 = var1.bind(var5)();
            var1 = {};
            var12 = true;
            var1['inline'] = var12;
            var1['mentionableRoles'] = var11;
            var1['guild'] = var10;
            var1['users'] = var6;
            var6 = var9.concat;
            var7 = var6.bind(var9)(var7);
            var6 = var7.concat;
            var6 = var6.bind(var7)(var8);
            var1['channels'] = var6;
            var1['emojiContext'] = var5;
            var1['customEmoticonsRegex'] = var4;
            var1['customEmoji'] = var3;
            var1['textExclusions'] = var2;
            var2 = false;
            var1['isNotification'] = var2;
            return var1;
        }
    };
    var _closure1_slot27 = var2;
    var1 = function NOOP(arg1) {
        var1 = arg1;
        return var1;
    };
    var _closure1_slot28 = var1;
    var6 = function unparseWithMeta(arg1, arg2, arg3) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var3 = arg2;
            var2 = arg3;
            var5 = _closure1_slot5;
            var4 = var5.getChannel;
            var5 = var4.bind(var5)(var3);
            var6 = null;
            var4 = var6 != var5;
            var7 = null;
            if(!var4) { _fun0010_ip = 89; continue _fun0010 }
case 90:
            var4 = var5.getGuildId;
            var7 = var4.bind(var5)();
case 89:
            var4 = var6 != var7;
            var6 = null;
            if(!var4) { _fun0010_ip = 91; continue _fun0010 }
case 92:
            var5 = _closure1_slot10;
            var4 = var5.getGuild;
            var6 = var4.bind(var5)(var7);
case 91:
            if(var2) { _fun0010_ip = 93; continue _fun0010 }
case 94:
            var7 = _closure1_slot1;
            var5 = _closure1_slot2;
            var4 = 22;
            var5 = var5[var4];
            var4 = undefined;
            var8 = var7.bind(var4)(var5);
            var7 = var8.omit;
            var5 = _closure1_slot19;
            var4 = ['spoiler', 'timestamp'];
            var7 = var7.bind(var8)(var5, var4);
            _fun0010_ip = 95; continue _fun0010;
case 93:
            var7 = _closure1_slot19;
case 95:
            if(var2) { _fun0010_ip = 15; continue _fun0010 }
case 96:
            var8 = _closure1_slot1;
            var5 = _closure1_slot2;
            var4 = 18;
            var5 = var5[var4];
            var4 = undefined;
            var4 = var8.bind(var4)(var5);
            var5 = var4.translateSurrogatesToInlineEmoji;
            _fun0010_ip = 97; continue _fun0010;
case 15:
            var5 = _closure1_slot28;
case 97:
            var4 = {};
            var8 = true;
            var4['inline'] = var8;
            var4['guild'] = var6;
            var4['channelId'] = var3;
            var4['isNotification'] = var2;
            var3 = _closure1_slot25;
            var6 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 14;
            var1 = var2[var1];
            var2 = undefined;
            var6 = var6.bind(var2)(var1);
            var1 = var6.parserFor;
            var6 = var1.bind(var6)(var7);
            var1 = arg1;
            var1 = var6.bind(var2)(var1, var4);
            var1 = var3.bind(var2)(var1, var4, var5);
            return var1;
        }
    };
    var _closure1_slot29 = var6;
    var1 = global;
    var13 = var1.Object;
    var11 = var13.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var11.bind(var13)(var3, var1, var5);
    var1 = 0;
    var5 = var8[var1];
    var1 = undefined;
    var5 = var10.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var8[var5];
    var5 = var10.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var8[var5];
    var5 = var10.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var5 = 3;
    var11 = var8[var5];
    var11 = var10.bind(var1)(var11);
    var _closure1_slot6 = var11;
    var5 = var8[var5];
    var5 = var7.bind(var1)(var5);
    var5 = var5.GUILD_SELECTABLE_CHANNELS_KEY;
    var _closure1_slot7 = var5;
    var5 = 4;
    var5 = var8[var5];
    var5 = var10.bind(var1)(var5);
    var _closure1_slot8 = var5;
    var5 = 5;
    var5 = var8[var5];
    var5 = var10.bind(var1)(var5);
    var _closure1_slot9 = var5;
    var5 = 6;
    var5 = var8[var5];
    var5 = var10.bind(var1)(var5);
    var _closure1_slot10 = var5;
    var5 = 7;
    var5 = var8[var5];
    var5 = var10.bind(var1)(var5);
    var _closure1_slot11 = var5;
    var5 = 8;
    var5 = var8[var5];
    var5 = var10.bind(var1)(var5);
    var _closure1_slot12 = var5;
    var5 = 9;
    var5 = var8[var5];
    var5 = var10.bind(var1)(var5);
    var _closure1_slot13 = var5;
    var5 = 10;
    var5 = var8[var5];
    var5 = var10.bind(var1)(var5);
    var _closure1_slot14 = var5;
    var5 = 11;
    var5 = var8[var5];
    var5 = var7.bind(var1)(var5);
    var19 = var5.MARKDOWN_SPOILER_REGEXP;
    var18 = var5.MARKDOWN_STATIC_ROUTE_NAME_REGEXP;
    var5 = var5.Permissions;
    var _closure1_slot15 = var5;
    var5 = 12;
    var5 = var8[var5];
    var5 = var7.bind(var1)(var5);
    var5 = var5.EmojiIntention;
    var _closure1_slot16 = var5;
    var23 = /^<@!?(\d+)>/;
    var22 = /^<@&(\d+)>/;
    var21 = /^<#(\d+)>/;
    var20 = /^<a?:(\w+):(\d+)>/;
    var5 = /(@everyone|@here|@Clyde)\b/;
    var _closure1_slot17 = var5;
    var5 = /^[^\s]+@[^\s]+\.[^\s.]+/;
    var _closure1_slot18 = var5;
    var11 = {};
    var5 = 14;
    var13 = var8[var5];
    var13 = var10.bind(var1)(var13);
    var13 = var13.defaultRules;
    var13 = var13.link;
    var13 = var16.bind(var1)(var13);
    var11['link'] = var13;
    var13 = var8[var5];
    var13 = var10.bind(var1)(var13);
    var13 = var13.defaultRules;
    var13 = var13.autolink;
    var13 = var16.bind(var1)(var13);
    var11['autolink'] = var13;
    var13 = var8[var5];
    var13 = var10.bind(var1)(var13);
    var13 = var13.defaultRules;
    var13 = var13.url;
    var13 = var16.bind(var1)(var13);
    var11['url'] = var13;
    var15 = 15;
    var13 = var8[var15];
    var13 = var10.bind(var1)(var13);
    var13 = var13.RULES;
    var13 = var13.inlineCode;
    var13 = var16.bind(var1)(var13);
    var11['inlineCode'] = var13;
    var13 = var8[var15];
    var13 = var10.bind(var1)(var13);
    var13 = var13.RULES;
    var13 = var13.codeBlock;
    var13 = var16.bind(var1)(var13);
    var11['codeBlock'] = var13;
    var13 = var12.bind(var1)(var23);
    var11['rawUserMention'] = var13;
    var13 = var12.bind(var1)(var22);
    var11['rawRoleMention'] = var13;
    var13 = var12.bind(var1)(var21);
    var11['rawChannelMention'] = var13;
    var12 = var12.bind(var1)(var20);
    var11['rawEmoji'] = var12;
    var12 = {};
    var13 = function match(arg1, arg2, arg3) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var7 = arg1;
            var4 = arg2;
            var9 = arg3;
            var2 = var9.split;
            var1 = ' ';
            var2 = var2.bind(var9)(var1);
            var1 = var2.pop;
            var1 = var1.bind(var2)();
            var3 = var1 + var7;
            var2 = _closure1_slot18;
            var1 = var2.test;
            var1 = var1.bind(var2)(var3);
            if(var1) { _fun0011_ip = 98; continue _fun0011 }
case 99:
            var2 = _closure1_slot24;
            var15 = var4.users;
            var8 = undefined;
            var11 = '@';
            var10 = 'mention';
            var18 = undefined;
            var17 = var11;
            var16 = var7;
            var14 = var10;
            var1 = var18[var2](var17, var16, var15, var14, var13);
            var3 = null;
            if(!(var3 == var1)) { _fun0011_ip = 100; continue _fun0011 }
case 101:
            var12 = _closure1_slot24;
            var15 = var4.mentionableRoles;
            var14 = 'roleMention';
            var18 = undefined;
            var17 = var11;
            var16 = var7;
            var2 = var18[var12](var17, var16, var15, var14, var13);
            if(!(var3 == var2)) { _fun0011_ip = 102; continue _fun0011 }
case 103:
            var6 = _closure1_slot24;
            var13 = var4.users;
            var12 = var13.map;
            var4 = function(arg1) {
                var2 = arg1;
                var1 = {};
                var6 = var1;
                var5 = var2;
                var3 = copyDataProperties(var6, var5);
                var4 = var2.text;
                var3 = var4.split;
                var2 = '#';
                var3 = var3.bind(var4)(var2);
                var2 = 0;
                var3 = var3[var2];
                var2 = 'text';
                var1[1] = var3;
                return var1;
            };
            var15 = var12.bind(var13)(var4);
            var18 = undefined;
            var17 = var11;
            var16 = var7;
            var14 = var10;
            var4 = var18[var6](var17, var16, var15, var14, var13);
            if(!(var3 != var4)) { _fun0011_ip = 104; continue _fun0011 }
case 105:
            var10 = _closure1_slot17;
            var6 = var10.exec;
            var11 = var6.bind(var10)(var7);
            if(!(var3 != var11)) { _fun0011_ip = 106; continue _fun0011 }
case 107:
            var6 = 0;
            var10 = var4[var6];
            var10 = var10.length;
            var6 = var11[var6];
            var6 = var6.length;
            if(!(!(var10 <= var6))) { _fun0011_ip = 108; continue _fun0011 }
case 106:
            var6 = '';
            if(!(var6 === var9)) { _fun0011_ip = 109; continue _fun0011 }
case 110:
            var6 = _closure1_slot0;
            var9 = _closure1_slot2;
            var5 = 16;
            var5 = var9[var5];
            var5 = var6.bind(var8)(var5);
            var6 = var5.SILENT_RE;
            var5 = var6.exec;
            var7 = var5.bind(var6)(var7);
            if(!(var3 != var7)) { _fun0011_ip = 109; continue _fun0011 }
case 83:
            var5 = 0;
            var6 = var4[var5];
            var6 = var6.length;
            var5 = var7[var5];
            var5 = var5.length;
            if(!(!(var6 <= var5))) { _fun0011_ip = 84; continue _fun0011 }
case 109:
            return var4;
case 84:
            return var3;
case 108:
            return var3;
case 104:
            return var3;
case 102:
            return var2;
case 100:
            return var1;
case 98:
            var1 = null;
            return var1;
        }
    };
    var12['match'] = var13;
    var13 = function parse(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var8 = arg1;
            var2 = var8[Symbol.iterator];
            var8 = var2().next;
            var10 = undefined;
            var3 = undefined;
            var4 = undefined;
            var9 = var8().value;
            var11 = var2;
            var11 = var11 === var10;
            var3 = var11;
            if(var11) { _fun0012_ip = 111; continue _fun0012 }
case 112:
            var4 = var9;
case 111:
            var4 = undefined;
            var9 = var3;
            if(var9) { _fun0012_ip = 80; continue _fun0012 }
case 36:
            var9 = var8().value;
            var11 = var2;
            var11 = var11 === var10;
            var3 = var11;
            if(var11) { _fun0012_ip = 80; continue _fun0012 }
case 113:
            var4 = var9;
case 80:
            var5 = var4;
            var4 = undefined;
            var9 = var3;
            if(var9) { _fun0012_ip = 114; continue _fun0012 }
case 94:
            var8 = var8().value;
            var9 = var2;
            var9 = var9 === var10;
            var3 = var9;
            if(var9) { _fun0012_ip = 114; continue _fun0012 }
case 115:
            var4 = var8;
case 114:
            var7 = var4;
            var4 = var3;
            if(var4) { _fun0012_ip = 116; continue _fun0012 }
case 117:
            var2.return();
case 116:
            var6 = '@';
            var8 = var7;
            var4 = 'roleMention';
            if(!(var4 === var8)) { _fun0012_ip = 118; continue _fun0012 }
case 119:
            var8 = var6;
            var4 = '&';
            var6 = var8 + var4;
case 118:
            var4 = {};
            var4['type'] = var7;
            var9 = var6;
            var8 = var5;
            var5 = global;
            var5 = var5.HermesInternal;
            var7 = var5.concat;
            var6 = '<';
            var5 = '>';
            var5 = var7.bind(var6)(var9, var8, var5);
            var4['content'] = var5;
            return var4;
case 120:
            CatchBlockStart(arg_register=0);
            if(var3) { _fun0012_ip = 121; continue _fun0012 }
case 122:
            var2.return();
case 121:
            throw var1;
        }
    };
    var12['parse'] = var13;
    var11['mention'] = var12;
    var12 = {};
    var13 = function match(arg1, arg2) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var1 = arg2;
            var5 = var1.channels;
            var4 = function matchChannelPrefix(arg1, arg2, arg3) {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    var6 = arg2;
                    var5 = arg3;
                    var7 = 0;
                    var2 = var6[var7];
                    var4 = '#';
                    if(!(var2 !== var4)) { _fun0014_ip = 123; continue _fun0014 }
case 39:
                    var2 = undefined;
                    return var2;
case 123:
                    var2 = 1;
                    var3 = var6[var2];
                    var12 = '"';
                    if(!(var12 === var3)) { _fun0014_ip = 51; continue _fun0014 }
case 89:
                    var3 = var6.length;
                    var9 = 2;
                    var3 = var9 < var3;
                    var11 = '\\';
                    var10 = var9;
                    var8 = var10;
                    if(!var3) { _fun0014_ip = 124; continue _fun0014 }
case 125:
                    var3 = var6[var10];
                    if(!(var11 === var3)) { _fun0014_ip = 126; continue _fun0014 }
case 127:
                    var3 = var10 + 1;
                    _fun0014_ip = 11; continue _fun0014;
case 126:
                    var13 = var6[var10];
                    var3 = var10;
                    var8 = var3;
                    if(!(var12 !== var13)) { _fun0014_ip = 124; continue _fun0014 }
case 11:
                    var10 = var3 + 1;
                    var3 = var6.length;
                    var8 = var10;
                    if(var8 < var3) { _fun0014_ip = 125; continue _fun0014 }
case 124:
                    var3 = var6.substring;
                    var2 = var8 + var2;
                    var2 = var3.bind(var6)(var7, var2);
                    var _closure3_slot0 = var2;
                    var7 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 13;
                    var3 = var3[var2];
                    var2 = undefined;
                    var7 = var7.bind(var2)(var3);
                    var3 = var7.unescapeChannelName;
                    var2 = var6.substring;
                    var2 = var2.bind(var6)(var9, var8);
                    var2 = var3.bind(var7)(var2);
                    var _closure3_slot1 = var2;
                    var3 = var5.sortBy;
                    var2 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.text;
                        var1 = var1.length;
                        var1 = -var1;
                        return var1;
                    };
                    var7 = var3.bind(var5)(var2);
                    var3 = var7.filter;
                    var2 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.text;
                        var1 = _closure3_slot1;
                        var1 = var1 === var2;
                        return var1;
                    };
                    var3 = var3.bind(var7)(var2);
                    var2 = var3.map;
                    var1 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.id;
                        var3 = _closure3_slot0;
                        var1 = new Array(3);
                        var1[0] = var3;
                        var1[1] = var2;
                        var2 = 'channel';
                        var1[2] = var2;
                        return var1;
                    };
                    var2 = var2.bind(var3)(var1);
                    var1 = var2.first;
                    var1 = var1.bind(var2)();
                    return var1;
case 51:
                    var3 = _closure1_slot24;
                    var18 = undefined;
                    var14 = 'channel';
                    var17 = var4;
                    var16 = var6;
                    var15 = var5;
                    var1 = var18[var3](var17, var16, var15, var14, var13);
                    return var1;
                }
            };
            var3 = undefined;
            var2 = '#';
            var1 = arg1;
            var2 = var4.bind(var3)(var2, var1, var5);
            var1 = null;
            var3 = var1 != var2;
            if(!var3) { _fun0013_ip = 89; continue _fun0013 }
case 72:
            var1 = var2;
case 89:
            return var1;
        }
    };
    var12['match'] = var13;
    var13 = function parse(arg1) {
        var1 = {};
        var2 = 'text';
        var1['type'] = var2;
        var3 = arg1;
        var2 = 1;
        var5 = var3[var2];
        var2 = global;
        var2 = var2.HermesInternal;
        var4 = var2.concat;
        var3 = '<#';
        var2 = '>';
        var2 = var4.bind(var3)(var5, var2);
        var1['content'] = var2;
        return var1;
    };
    var12['parse'] = var13;
    var11['channel'] = var12;
    var12 = {};
    var13 = function match(arg1, arg2, arg3) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var4 = arg1;
            var7 = arg3;
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 17;
            var2 = var5[var2];
            var5 = undefined;
            var2 = var3.bind(var5)(var2);
            var3 = var2.ConvertEmoticons;
            var2 = var3.getSetting;
            var2 = var2.bind(var3)();
            if(var2) { _fun0015_ip = 41; continue _fun0015 }
case 128:
            var2 = null;
            return var2;
case 41:
            var2 = var7.length;
            var3 = 0;
            if(!(var3 !== var2)) { _fun0015_ip = 11; continue _fun0015 }
case 129:
            var6 = /\s$/;
            var2 = var6.test;
            var2 = var2.bind(var6)(var7);
            if(var2) { _fun0015_ip = 11; continue _fun0015 }
case 130:
            var2 = null;
            return var2;
case 11:
            var2 = _closure1_slot1;
            var6 = _closure1_slot2;
            var1 = 18;
            var1 = var6[var1];
            var1 = var2.bind(var5)(var1);
            var2 = var1.EMOJI_SHORTCUT_RE;
            var1 = var2.exec;
            var2 = var1.bind(var2)(var4);
            var5 = null;
            var6 = var5 == var2;
            var1 = null;
            if(var6) { _fun0015_ip = 131; continue _fun0015 }
case 132:
            var6 = var2[var3];
            var7 = var6.length;
            var6 = var4.length;
            if(!(var7 !== var6)) { _fun0015_ip = 133; continue _fun0015 }
case 97:
            var6 = var2[var3];
            var6 = var6.length;
            var7 = var4[var6];
            var6 = ' ';
            if(!(var6 !== var7)) { _fun0015_ip = 133; continue _fun0015 }
case 134:
            var3 = var2[var3];
            var3 = var3.length;
            var4 = var4[var3];
            var3 = '\n';
            var1 = null;
            if(!(var3 === var4)) { _fun0015_ip = 131; continue _fun0015 }
case 133:
            var1 = var2;
case 131:
            return var1;
        }
    };
    var12['match'] = var13;
    var13 = function parse(arg1) {
        var1 = {'type': 'emoticon', 'content': null, 'isShortcut': true};
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var2 = 18;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.convertShortcutToName;
        var5 = arg1;
        var2 = 1;
        var2 = var5[var2];
        var2 = var3.bind(var4)(var2);
        var1['content'] = var2;
        return var1;
    };
    var12['parse'] = var13;
    var11['emoticon'] = var12;
    var12 = {};
    var13 = var8[var15];
    var13 = var10.bind(var1)(var13);
    var13 = var13.RULES;
    var13 = var13.emoji;
    var13 = var13.order;
    var12['order'] = var13;
    var13 = function match(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 18;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var3 = var1.EMOJI_NAME_RE;
        var2 = var3.exec;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var12['match'] = var13;
    var13 = function parse(arg1, arg2, arg3) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var5 = arg1;
            var1 = var5[Symbol.iterator];
            var5 = var1().next;
            var4 = var5().value;
            var2 = var1;
            var7 = undefined;
            var3 = var2 === var7;
            var2 = undefined;
            if(var3) { _fun0016_ip = 135; continue _fun0016 }
case 38:
            var2 = var4;
case 135:
            var4 = undefined;
            if(var3) { _fun0016_ip = 113; continue _fun0016 }
case 111:
            var6 = var5().value;
            var5 = var1;
            var5 = var5 === var7;
            var4 = undefined;
            var3 = var5;
            if(var5) { _fun0016_ip = 113; continue _fun0016 }
case 136:
            var4 = var6;
            var3 = var5;
case 113:
            if(var3) { _fun0016_ip = 137; continue _fun0016 }
case 80:
            var1.return();
case 137:
            var1 = arg3;
            var3 = var1.customEmoji;
            var1 = var3.get;
            var1 = var1.bind(var3)(var4);
            var4 = null;
            var5 = var4 != var1;
            var3 = null;
            if(!var5) { _fun0016_ip = 11; continue _fun0016 }
case 138:
            var3 = var1;
case 11:
            if(!(var4 == var3)) { _fun0016_ip = 139; continue _fun0016 }
case 117:
            var1 = {};
            var5 = 'text';
            var1['type'] = var5;
            var1['content'] = var2;
            _fun0016_ip = 78; continue _fun0016;
case 139:
            var2 = {};
            var5 = 'customEmoticon';
            var2['type'] = var5;
            var6 = var3.animated;
            var10 = '';
            var5 = true;
            if(!(var5 === var6)) { _fun0016_ip = 140; continue _fun0016 }
case 132:
            var10 = 'a';
case 140:
            var9 = var3.originalName;
            if(!(var4 == var9)) { _fun0016_ip = 14; continue _fun0016 }
case 15:
            var9 = var3.name;
case 14:
            var12 = var3.id;
            var4 = global;
            var4 = var4.HermesInternal;
            var7 = var4.concat;
            var17 = '<';
            var5 = ':';
            var11 = '>';
            var16 = var10;
            var15 = var5;
            var14 = var9;
            var13 = var5;
            var4 = var17[var7](var16, var15, var14, var13, var12, var11, var10);
            var2['content'] = var4;
            var2['emoji'] = var3;
            var1 = var2;
case 78:
            return var1;
        }
    };
    var12['parse'] = var13;
    var11['emoji'] = var12;
    var12 = {};
    var13 = function match(arg1, arg2) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
            var1 = arg2;
            var5 = var1.customEmoticonsRegex;
            var1 = null;
            var3 = var1 == var5;
            var2 = undefined;
            if(var3) { _fun0017_ip = 90; continue _fun0017 }
case 29:
            var4 = var5.exec;
            var3 = arg1;
            var2 = var4.bind(var5)(var3);
case 90:
            var3 = var1 != var2;
            var1 = null;
            if(!var3) { _fun0017_ip = 2; continue _fun0017 }
case 141:
            var1 = var2;
case 2:
            return var1;
        }
    };
    var12['match'] = var13;
    var13 = function parse(arg1, arg2, arg3) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
            var5 = arg1;
            var1 = var5[Symbol.iterator];
            var5 = var1().next;
            var4 = var5().value;
            var2 = var1;
            var7 = undefined;
            var3 = var2 === var7;
            var2 = undefined;
            if(var3) { _fun0018_ip = 135; continue _fun0018 }
case 38:
            var2 = var4;
case 135:
            var4 = undefined;
            if(var3) { _fun0018_ip = 113; continue _fun0018 }
case 111:
            var6 = var5().value;
            var5 = var1;
            var5 = var5 === var7;
            var4 = undefined;
            var3 = var5;
            if(var5) { _fun0018_ip = 113; continue _fun0018 }
case 136:
            var4 = var6;
            var3 = var5;
case 113:
            if(var3) { _fun0018_ip = 137; continue _fun0018 }
case 80:
            var1.return();
case 137:
            var1 = arg3;
            var3 = var1.emojiContext;
            var1 = var3.getEmoticonByName;
            var3 = var1.bind(var3)(var4);
            var1 = null;
            if(!(var1 == var3)) { _fun0018_ip = 142; continue _fun0018 }
case 114:
            var1 = {};
            var4 = 'text';
            var1['type'] = var4;
            var1['content'] = var2;
            _fun0018_ip = 143; continue _fun0018;
case 142:
            var2 = {};
            var4 = 'customEmoticon';
            var2['type'] = var4;
            var5 = var3.animated;
            var10 = '';
            var4 = true;
            if(!(var4 === var5)) { _fun0018_ip = 103; continue _fun0018 }
case 144:
            var10 = 'a';
case 103:
            var14 = var3.name;
            var12 = var3.id;
            var4 = global;
            var4 = var4.HermesInternal;
            var7 = var4.concat;
            var17 = '<';
            var5 = ':';
            var11 = '>';
            var16 = var10;
            var15 = var5;
            var13 = var5;
            var4 = var17[var7](var16, var15, var14, var13, var12, var11, var10);
            var2['content'] = var4;
            var2['emoji'] = var3;
            var1 = var2;
case 143:
            return var1;
        }
    };
    var12['parse'] = var13;
    var11['customEmoticons'] = var12;
    var12 = {};
    var14 = 19;
    var13 = var8[var14];
    var25 = var10.bind(var1)(var13);
    var26 = var12;
    var13 = copyDataProperties(var26, var25);
    var17 = function match(arg1, arg2) {
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
            var4 = arg1;
            var2 = arg2;
            var1 = var2.textExclusions;
            var3 = 'string';
            var1 = typeof var1;
            if(!(var3 === var1)) { _fun0019_ip = 145; continue _fun0019 }
case 31:
            var3 = var2.textExclusions;
            var1 = '';
            if(!(var1 === var3)) { _fun0019_ip = 76; continue _fun0019 }
case 145:
            var5 = _closure1_slot1;
            var1 = _closure1_slot2;
            var7 = 19;
            var1 = var1[var7];
            var6 = undefined;
            var1 = var5.bind(var6)(var1);
            var5 = var1.match;
            var1 = null;
            var5 = var1 != var5;
            if(!var5) { _fun0019_ip = 124; continue _fun0019 }
case 127:
            var5 = _closure1_slot1;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var6 = var5.bind(var6)(var3);
            var5 = var6.match;
            var3 = '';
            var1 = var5.bind(var6)(var4, var2, var3);
case 124:
            _fun0019_ip = 146; continue _fun0019;
case 76:
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 19;
            var5 = var5[var3];
            var3 = undefined;
            var5 = var6.bind(var3)(var5);
            var3 = var5.textMarkupPatternWithExclusions;
            var2 = var2.textExclusions;
            var3 = var3.bind(var5)(var2);
            var2 = var3.exec;
            var1 = var2.bind(var3)(var4);
case 146:
            return var1;
        }
    };
    var13 = 'match';
    var12[12] = var17;
    var11['text'] = var12;
    var12 = {};
    var13 = var8[var15];
    var13 = var10.bind(var1)(var13);
    var13 = var13.RULES;
    var13 = var13.inlineCode;
    var13 = var16.bind(var1)(var13);
    var12['inlineCode'] = var13;
    var13 = var8[var15];
    var13 = var10.bind(var1)(var13);
    var13 = var13.RULES;
    var13 = var13.codeBlock;
    var13 = var16.bind(var1)(var13);
    var12['codeBlock'] = var13;
    var13 = {};
    var16 = var8[var5];
    var17 = var10.bind(var1)(var16);
    var16 = var17.anyScopeRegex;
    var16 = var16.bind(var17)(var23);
    var13['match'] = var16;
    var16 = function parse(arg1, arg2, arg3) {
        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
            var3 = arg1;
            var1 = arg3;
            var6 = var1.isNotification;
            var12 = var1.guild;
            var11 = var1.channelId;
            var8 = undefined;
            var _closure2_slot0 = var8;
            var7 = _closure1_slot14;
            var5 = var7.getUser;
            var2 = 1;
            var2 = var3[var2];
            var7 = var5.bind(var7)(var2);
            var2 = null;
            if(!(var2 != var7)) { _fun0020_ip = 66; continue _fun0020 }
case 147:
            var10 = _closure1_slot1;
            var5 = _closure1_slot2;
            var9 = 20;
            var5 = var5[var9];
            var13 = var10.bind(var8)(var5);
            var10 = var13.getUserTag;
            var5 = {};
            var16 = 'always';
            var14 = var16;
            if(!var6) { _fun0020_ip = 148; continue _fun0020 }
case 149:
            var15 = _closure1_slot13;
            var15 = var15.enabled;
            var14 = var16;
            if(!var15) { _fun0020_ip = 148; continue _fun0020 }
case 150:
            var14 = 'never';
case 148:
            var5['identifiable'] = var14;
            var5 = var10.bind(var13)(var7, var5);
            if(var6) { _fun0020_ip = 151; continue _fun0020 }
case 152:
            var6 = var7.bot;
            if(var6) { _fun0020_ip = 153; continue _fun0020 }
case 154:
            var10 = var2 == var12;
            var6 = undefined;
            if(var10) { _fun0020_ip = 146; continue _fun0020 }
case 155:
            var6 = var12.id;
case 146:
            var6 = var2 != var6;
            var15 = '';
            var13 = var15;
            if(!var6) { _fun0020_ip = 156; continue _fun0020 }
case 121:
            var6 = var5.toLowerCase;
            var6 = var6.bind(var5)();
            _closure2_slot0 = var6;
            var10 = _closure1_slot1;
            var14 = _closure1_slot2;
            var6 = 22;
            var6 = var14[var6];
            var14 = var10.bind(var8)(var6);
            var10 = var14.some;
            var17 = _closure1_slot9;
            var16 = var17.getUnsafeMutableRoles;
            var6 = var12.id;
            var6 = var16.bind(var17)(var6);
            var4 = function(arg1) {
                var3 = _closure2_slot0;
                var2 = var3.startsWith;
                var1 = arg1;
                var4 = var1.name;
                var1 = var4.toLowerCase;
                var1 = var1.bind(var4)();
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var6 = var10.bind(var14)(var6, var4);
            var4 = var15;
            if(!var6) { _fun0020_ip = 157; continue _fun0020 }
case 158:
            var14 = var7.discriminator;
            var6 = global;
            var10 = var6.HermesInternal;
            var10 = var10.concat;
            var16 = var10.bind(var15)(var14);
            var15 = var16.padStart;
            var14 = 4;
            var10 = '0';
            var14 = var15.bind(var16)(var14, var10);
            var6 = var6.HermesInternal;
            var10 = var6.concat;
            var6 = '#';
            var4 = var10.bind(var6)(var14);
case 157:
            var13 = var4;
case 156:
            var4 = {};
            var6 = global;
            var6 = var6.HermesInternal;
            var10 = var6.concat;
            var6 = '@';
            var6 = var10.bind(var6)(var5, var13);
            var4['content'] = var6;
            return var4;
case 153:
            var4 = {};
            var6 = global;
            var6 = var6.HermesInternal;
            var10 = var6.concat;
            var6 = '@';
            var6 = var10.bind(var6)(var5);
            var4['content'] = var6;
            return var4;
case 151:
            var6 = _closure1_slot1;
            var10 = _closure1_slot2;
            var4 = 21;
            var4 = var10[var4];
            var10 = var6.bind(var8)(var4);
            var6 = var10.getNickname;
            var13 = var2 == var12;
            var4 = undefined;
            if(var13) { _fun0020_ip = 159; continue _fun0020 }
case 160:
            var4 = var12.id;
case 159:
            var6 = var6.bind(var10)(var4, var11, var7);
            if(!(var2 == var6)) { _fun0020_ip = 161; continue _fun0020 }
case 162:
            var4 = _closure1_slot1;
            var1 = _closure1_slot2;
            var1 = var1[var9];
            var4 = var4.bind(var8)(var1);
            var1 = var4.getGlobalName;
            var6 = var1.bind(var4)(var7);
case 161:
            var1 = {};
            if(!(var2 == var6)) { _fun0020_ip = 163; continue _fun0020 }
case 164:
            var2 = global;
            var2 = var2.HermesInternal;
            var4 = var2.concat;
            var2 = '@';
            var2 = var4.bind(var2)(var5);
            _fun0020_ip = 165; continue _fun0020;
case 163:
            var4 = global;
            var4 = var4.HermesInternal;
            var5 = var4.concat;
            var4 = '@';
            var2 = var5.bind(var4)(var6);
case 165:
            var1['content'] = var2;
            return var1;
case 66:
            var1 = {};
            var2 = 0;
            var2 = var3[var2];
            var1['content'] = var2;
            return var1;
        }
    };
    var13['parse'] = var16;
    var12['mention'] = var13;
    var13 = {};
    var16 = var8[var5];
    var17 = var10.bind(var1)(var16);
    var16 = var17.anyScopeRegex;
    var16 = var16.bind(var17)(var22);
    var13['match'] = var16;
    var16 = function parse(arg1, arg2, arg3) {
        _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
            var4 = arg1;
            var1 = arg3;
            var2 = var1.guild;
            var1 = null;
            if(!(var1 != var2)) { _fun0021_ip = 166; continue _fun0021 }
case 167:
            var6 = _closure1_slot9;
            var5 = var6.getRole;
            var3 = var2.id;
            var2 = 1;
            var2 = var4[var2];
            var2 = var5.bind(var6)(var3, var2);
            if(!(var1 == var2)) { _fun0021_ip = 168; continue _fun0021 }
case 166:
            var1 = {};
            var3 = 0;
            var3 = var4[var3];
            var1['content'] = var3;
            return var1;
case 168:
            var1 = {};
            var4 = var2.name;
            var2 = global;
            var2 = var2.HermesInternal;
            var3 = var2.concat;
            var2 = '@';
            var2 = var3.bind(var2)(var4);
            var1['content'] = var2;
            return var1;
        }
    };
    var13['parse'] = var16;
    var12['roleMention'] = var13;
    var13 = {};
    var16 = var8[var5];
    var17 = var10.bind(var1)(var16);
    var16 = var17.anyScopeRegex;
    var16 = var16.bind(var17)(var21);
    var13['match'] = var16;
    var16 = function parse(arg1) {
        _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
            var4 = arg1;
            var5 = _closure1_slot5;
            var3 = var5.getChannel;
            var1 = 1;
            var1 = var4[var1];
            var8 = var3.bind(var5)(var1);
            var1 = {};
            var3 = null;
            if(!(var3 != var8)) { _fun0022_ip = 169; continue _fun0022 }
case 81:
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 13;
            var5 = var5[var3];
            var3 = undefined;
            var7 = var6.bind(var3)(var5);
            var6 = var7.computeChannelName;
            var12 = _closure1_slot14;
            var11 = _closure1_slot12;
            var14 = var7;
            var13 = var8;
            var10 = true;
            var9 = true;
            var2 = var14[var6](var13, var12, var11, var10, var9, var8);
            _fun0022_ip = 138; continue _fun0022;
case 169:
            var3 = 0;
            var2 = var4[var3];
case 138:
            var1['content'] = var2;
            return var1;
        }
    };
    var13['parse'] = var16;
    var12['channel'] = var13;
    var13 = {};
    var16 = var8[var5];
    var17 = var10.bind(var1)(var16);
    var16 = var17.anyScopeRegex;
    var16 = var16.bind(var17)(var20);
    var13['match'] = var16;
    var16 = function parse(arg1, arg2, arg3) {
        _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
            var4 = arg1;
            var1 = var4[Symbol.iterator];
            var4 = var1().next;
            var2 = var4().value;
            var2 = var1;
            var7 = undefined;
            var3 = var2 === var7;
            var5 = undefined;
            if(var3) { _fun0023_ip = 5; continue _fun0023 }
case 38:
            var6 = var4().value;
            var2 = var1;
            var2 = var2 === var7;
            var5 = undefined;
            var3 = var2;
            if(var2) { _fun0023_ip = 5; continue _fun0023 }
case 141:
            var5 = var6;
            var3 = var2;
case 5:
            var2 = undefined;
            if(var3) { _fun0023_ip = 170; continue _fun0023 }
case 41:
            var6 = var4().value;
            var4 = var1;
            var4 = var4 === var7;
            var2 = undefined;
            var3 = var4;
            if(var4) { _fun0023_ip = 170; continue _fun0023 }
case 171:
            var2 = var6;
            var3 = var4;
case 170:
            if(var3) { _fun0023_ip = 172; continue _fun0023 }
case 126:
            var1.return();
case 172:
            var1 = arg3;
            var7 = var1.guild;
            var6 = _closure1_slot3;
            var3 = var6.getDisambiguatedEmojiContext;
            var4 = null;
            var1 = null;
            if(!var7) { _fun0023_ip = 119; continue _fun0023 }
case 76:
            var1 = var7.id;
case 119:
            var3 = var3.bind(var6)(var1);
            var1 = var3.getById;
            var3 = var1.bind(var3)(var2);
            var1 = {};
            if(!(var4 != var3)) { _fun0023_ip = 173; continue _fun0023 }
case 152:
            var5 = var3.name;
case 173:
            var3 = global;
            var3 = var3.HermesInternal;
            var4 = var3.concat;
            var3 = ':';
            var3 = var4.bind(var3)(var5, var3);
            var1['content'] = var3;
            var1['id'] = var2;
            return var1;
        }
    };
    var13['parse'] = var16;
    var12['emoji'] = var13;
    var13 = {};
    var16 = var8[var5];
    var20 = var10.bind(var1)(var16);
    var17 = var20.anyScopeRegex;
    var16 = 23;
    var16 = var8[var16];
    var16 = var7.bind(var1)(var16);
    var16 = var16.soundmojiRawFormatRegex;
    var16 = var17.bind(var20)(var16);
    var13['match'] = var16;
    var16 = function parse(arg1) {
        _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
            var3 = arg1;
            var1 = var3[Symbol.iterator];
            var3 = var1().next;
            var2 = var3().value;
            var2 = var1;
            var5 = undefined;
            var2 = var2 === var5;
            var7 = undefined;
            if(var2) { _fun0024_ip = 5; continue _fun0024 }
case 38:
            var6 = var3().value;
            var4 = var1;
            var4 = var4 === var5;
            var7 = undefined;
            var2 = var4;
            if(var4) { _fun0024_ip = 5; continue _fun0024 }
case 141:
            var7 = var6;
            var2 = var4;
case 5:
            var6 = undefined;
            if(var2) { _fun0024_ip = 170; continue _fun0024 }
case 41:
            var4 = var3().value;
            var3 = var1;
            var3 = var3 === var5;
            var6 = undefined;
            var2 = var3;
            if(var3) { _fun0024_ip = 170; continue _fun0024 }
case 171:
            var6 = var4;
            var2 = var3;
case 170:
            if(var2) { _fun0024_ip = 172; continue _fun0024 }
case 126:
            var1.return();
case 172:
            var1 = {};
            var2 = global;
            var2 = var2.HermesInternal;
            var5 = var2.concat;
            var13 = '<sound:';
            var11 = ':';
            var9 = '>';
            var12 = var7;
            var10 = var6;
            var2 = var13[var5](var12, var11, var10, var9, var8);
            var1['content'] = var2;
            return var1;
        }
    };
    var13['parse'] = var16;
    var12['soundboard'] = var13;
    var13 = {};
    var16 = var8[var5];
    var17 = var10.bind(var1)(var16);
    var16 = var17.anyScopeRegex;
    var16 = var16.bind(var17)(var19);
    var13['match'] = var16;
    var16 = function parse() {
        var1 = {};
        var6 = _closure1_slot0;
        var7 = _closure1_slot2;
        var2 = 24;
        var3 = var7[var2];
        var5 = undefined;
        var3 = var6.bind(var5)(var3);
        var4 = var3.intl;
        var3 = var4.string;
        var2 = var7[var2];
        var2 = var6.bind(var5)(var2);
        var2 = var2.t;
        var2 = var2.F+x38C;
        var3 = var3.bind(var4)(var2);
        var2 = var3.toLowerCase;
        var5 = var2.bind(var3)();
        var2 = global;
        var2 = var2.HermesInternal;
        var4 = var2.concat;
        var3 = '<';
        var2 = '>';
        var2 = var4.bind(var3)(var5, var2);
        var1['content'] = var2;
        return var1;
    };
    var13['parse'] = var16;
    var12['spoiler'] = var13;
    var13 = {};
    var16 = var8[var5];
    var17 = var10.bind(var1)(var16);
    var16 = var17.anyScopeRegex;
    var16 = var16.bind(var17)(var18);
    var13['match'] = var16;
    var16 = function parse(arg1) {
        var1 = {};
        var3 = arg1;
        var2 = 1;
        var5 = var3[var2];
        var2 = global;
        var2 = var2.HermesInternal;
        var4 = var2.concat;
        var3 = '<id:';
        var2 = '>';
        var2 = var4.bind(var3)(var5, var2);
        var1['content'] = var2;
        return var1;
    };
    var13['parse'] = var16;
    var12['staticRouteLink'] = var13;
    var13 = {};
    var15 = var8[var15];
    var15 = var10.bind(var1)(var15);
    var15 = var15.RULES;
    var25 = var15.timestamp;
    var26 = var13;
    var15 = copyDataProperties(var26, var25);
    var16 = function parse(arg1) {
        _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
            var8 = 0;
            var7 = copyRestArgs(var8);
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 15;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var1 = var1.RULES;
            var3 = var1.timestamp;
            var2 = var3.parse;
            var1 = new Array(0);
            var8 = var1;
            var6 = 0;
            var4 = arraySpread(var8, var7, var6);
            var8 = var2;
            var7 = var1;
            var6 = var3;
            var3 = apply(var8, var7, var6);
            var2 = var3.type;
            var1 = 'text';
            if(!(var1 !== var2)) { _fun0025_ip = 149; continue _fun0025 }
case 115:
            var1 = {};
            var2 = var3.formatted;
            var1['content'] = var2;
            _fun0025_ip = 139; continue _fun0025;
case 149:
            var2 = {};
            var3 = var3.content;
            var2['content'] = var3;
            var1 = var2;
case 139:
            return var1;
        }
    };
    var15 = 'parse';
    var13[14] = var16;
    var12['timestamp'] = var13;
    var13 = {};
    var14 = var8[var14];
    var25 = var10.bind(var1)(var14);
    var26 = var13;
    var14 = copyDataProperties(var26, var25);
    var12['text'] = var13;
    var _closure1_slot19 = var12;
    var14 = new Array(2);
    var14[0] = var11;
    var14[1] = var12;
    var13 = var14.forEach;
    var12 = function(arg1) {
        var4 = arg1;
        var _closure2_slot0 = var4;
        var2 = global;
        var3 = var2.Object;
        var2 = var3.keys;
        var3 = var2.bind(var3)(var4);
        var2 = var3.forEach;
        var1 = function(arg1, arg2) {
            var2 = _closure2_slot0;
            var1 = arg1;
            var2 = var2[var1];
            var1 = arg2;
            var2['order'] = var1;
            var1 = undefined;
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var12 = var13.bind(var14)(var12);
    var5 = var8[var5];
    var10 = var10.bind(var1)(var5);
    var5 = var10.parserFor;
    var5 = var5.bind(var10)(var11);
    var _closure1_slot20 = var5;
    var5 = /(?:<a?:\w+:(\d+)>)|:(?:([^\s:]+?)(?:::skin-tone-\d)?:)/g;
    var _closure1_slot21 = var5;
    var5 = {};
    var10 = function parse(arg1, arg2) {
        _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
            var3 = arg1;
            var6 = arguments[2];
            var _closure2_slot0 = var3;
            var5 = undefined;
            if(!(var6 === var5)) { _fun0026_ip = 29; continue _fun0026 }
case 70:
            var6 = undefined;
case 29:
            var _closure2_slot1 = var5;
            var1 = null;
            if(!(var1 == var6)) { _fun0026_ip = 174; continue _fun0026 }
case 3:
            var1 = _closure1_slot27;
            var6 = var1.bind(var5)(var3);
case 174:
            var1 = {};
            var3 = arg2;
            var1['content'] = var3;
            var3 = false;
            var1['tts'] = var3;
            var3 = new Array(0);
            var1['invalidEmojis'] = var3;
            var3 = new Array(0);
            var1['validNonShortcutEmojis'] = var3;
            _closure2_slot1 = var1;
            var4 = _closure1_slot26;
            var3 = var1.content;
            var2 = function(arg1, arg2) {
                _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
                    var4 = arg1;
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 27;
                    var2 = var2[var1];
                    var1 = undefined;
                    var6 = var3.bind(var1)(var2);
                    var5 = var6.isEmojiPremiumLocked;
                    var3 = {};
                    var3['emoji'] = var4;
                    var8 = _closure2_slot0;
                    var3['channel'] = var8;
                    var7 = _closure1_slot16;
                    var7 = var7.CHAT;
                    var3['intention'] = var7;
                    var3 = var5.bind(var6)(var3);
                    if(var3) { _fun0027_ip = 116; continue _fun0027 }
case 175:
                    var3 = arg2;
                    if(var3) { _fun0027_ip = 148; continue _fun0027 }
case 176:
                    var3 = _closure2_slot1;
                    var5 = var3.validNonShortcutEmojis;
                    var3 = var5.push;
                    var3 = var3.bind(var5)(var4);
                    _fun0027_ip = 148; continue _fun0027;
case 116:
                    var2 = _closure2_slot1;
                    var3 = var2.invalidEmojis;
                    var2 = var3.push;
                    var2 = var2.bind(var3)(var4);
case 148:
                    return var1;
                }
            };
            var2 = var4.bind(var5)(var3, var6, var2);
            var1['content'] = var2;
            return var1;
        }
    };
    var5['parse'] = var10;
    var10 = function parsePreprocessor(arg1, arg2) {
        var3 = _closure1_slot27;
        var4 = undefined;
        var2 = arg1;
        var3 = var3.bind(var4)(var2);
        var2 = _closure1_slot20;
        var1 = arg2;
        var1 = var2.bind(var4)(var1, var3);
        return var1;
    };
    var5['parsePreprocessor'] = var10;
    var9 = function unparse(arg1, arg2, arg3) {
        var5 = _closure1_slot29;
        var4 = undefined;
        var3 = arg1;
        var2 = arg2;
        var1 = arg3;
        var1 = var5.bind(var4)(var3, var2, var1);
        var1 = var1.content;
        return var1;
    };
    var5['unparse'] = var9;
    var5['unparseWithMeta'] = var6;
    var6 = 28;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/messages/MessageParser.tsx';
    var6 = var7.bind(var8)(var6);
    var3['default'] = var5;
    var3['parseAndRebuild'] = var4;
    var3['createParserState'] = var2;
    return var1;
})();