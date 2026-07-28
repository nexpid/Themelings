// app/modules/chat_input/native/ChatInputAppCommandManager.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var13 = metroImportDefault;
    var7 = metroImportAll;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var7;
    var _closure1_slot3 = var6;
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
            var9 = _closure1_slot17;
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
            var7 = _closure1_slot17;
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
    var _closure1_slot16 = var1;
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
    var _closure1_slot17 = var1;
    var1 = function toCommandStyles(arg1) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var1 = {};
        var3 = function commandOption() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot3;
            var1 = 11;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.convertToNativeStyle;
            var1 = _closure2_slot0;
            var1 = var1.commandOption;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1['commandOption'] = var3;
        var3 = function commandErrorOption() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot3;
            var1 = 11;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.convertToNativeStyle;
            var1 = _closure2_slot0;
            var1 = var1.commandErrorOption;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1['commandErrorOption'] = var3;
        var3 = function gameMention() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot3;
            var1 = 11;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.convertToNativeStyle;
            var1 = _closure2_slot0;
            var1 = var1.gameMention;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1['gameMention'] = var3;
        var2 = function autocomplete(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var5 = arg1;
                var3 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 11;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.convertToNativeStyle;
                var1 = null;
                if(!(var1 != var5)) { _fun0004_ip = 36; continue _fun0004 }
case 37:
                var1 = {};
                var4 = _closure2_slot0;
                var6 = var4.autocomplete;
                var7 = var1;
                var4 = copyDataProperties(var7, var6);
                var4 = 'color';
                var1[3] = var5;
                _fun0004_ip = 9; continue _fun0004;
case 36:
                var4 = _closure2_slot0;
                var1 = var4.autocomplete;
case 9:
                var1 = var2.bind(var3)(var1);
                return var1;
            }
        };
        var1['autocomplete'] = var2;
        return var1;
    };
    var _closure1_slot18 = var1;
    var1 = function areResolvedGamesEqual(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var3 = arg1;
            var5 = arg2;
            if(!(var3 !== var5)) { _fun0005_ip = 38; continue _fun0005 }
case 39:
            var1 = null;
            if(!(var1 != var3)) { _fun0005_ip = 13; continue _fun0005 }
case 40:
            if(!(var1 != var5)) { _fun0005_ip = 13; continue _fun0005 }
case 29:
            var2 = var3.size;
            var1 = var5.size;
            if(!(var2 === var1)) { _fun0005_ip = 13; continue _fun0005 }
case 41:
            var2 = _closure1_slot16;
            var1 = var3.keys;
            var1 = var1.bind(var3)();
            var4 = undefined;
            var3 = var2.bind(var4)(var1);
            var2 = var3.bind(var4)();
            var1 = var2.done;
            if(var1) { _fun0005_ip = 42; continue _fun0005 }
case 43:
            var6 = var2.value;
            var1 = var5.has;
            var1 = var1.bind(var5)(var6);
            if(var1) { _fun0005_ip = 44; continue _fun0005 }
case 45:
            var1 = false;
            return var1;
case 44:
            var6 = var3.bind(var4)();
            var1 = var6.done;
            var2 = var6;
            if(!var1) { _fun0005_ip = 43; continue _fun0005 }
case 42:
            var1 = true;
            return var1;
case 13:
            var1 = false;
            return var1;
case 38:
            var1 = true;
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var13.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var6[var4];
    var7 = var7.bind(var1)(var4);
    var _closure1_slot5 = var7;
    var4 = 2;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.extractGameMentionIds;
    var _closure1_slot12 = var8;
    var8 = var4.GAME_MENTION_RAW_RE_GLOBAL;
    var _closure1_slot13 = var8;
    var4 = var4.GAME_MENTION_SENTINEL;
    var _closure1_slot14 = var4;
    var4 = 9;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {};
    var12 = 10;
    var11 = var6[var12];
    var11 = var13.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.KEYWORD_HIGHLIGHT_BACKGROUND;
    var10['backgroundColor'] = var11;
    var11 = var6[var12];
    var11 = var13.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.TEXT_DEFAULT;
    var10['color'] = var11;
    var11 = var6[var12];
    var11 = var13.bind(var1)(var11);
    var11 = var11.radii;
    var11 = var11.xs;
    var10['borderRadius'] = var11;
    var11 = 14;
    var10['fontSize'] = var11;
    var4['commandOption'] = var10;
    var10 = {};
    var14 = var6[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.KEYWORD_HIGHLIGHT_BACKGROUND;
    var10['backgroundColor'] = var14;
    var14 = var6[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.TEXT_FEEDBACK_CRITICAL;
    var10['color'] = var14;
    var14 = var6[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.xs;
    var10['borderRadius'] = var14;
    var10['fontSize'] = var11;
    var4['commandErrorOption'] = var10;
    var10 = {};
    var14 = var6[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.MENTION_BACKGROUND;
    var10['backgroundColor'] = var14;
    var14 = var6[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.MENTION_FOREGROUND;
    var10['color'] = var14;
    var14 = var6[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.xs;
    var10['borderRadius'] = var14;
    var10['fontSize'] = var11;
    var11 = 'bold';
    var10['fontWeight'] = var11;
    var4['gameMention'] = var10;
    var10 = {};
    var12 = var6[var12];
    var12 = var13.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.TEXT_BRAND;
    var10['color'] = var12;
    var10['fontWeight'] = var11;
    var4['autocomplete'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot15 = var4;
    var4 = var7.forwardRef;
    var2 = function(arg1, arg2) {
        var2 = arg1;
        var7 = var2.chatInputRef;
        var _closure2_slot0 = var7;
        var6 = var2.chatInputStateRef;
        var _closure2_slot1 = var6;
        var15 = var2.channel;
        var _closure2_slot2 = var15;
        var14 = var2.commandsDisabled;
        var _closure2_slot3 = var14;
        var3 = _closure1_slot15;
        var8 = undefined;
        var3 = var3.bind(var8)();
        var _closure2_slot4 = var3;
        var17 = _closure1_slot0;
        var18 = _closure1_slot3;
        var4 = 16;
        var4 = var18[var4];
        var9 = var17.bind(var8)(var4);
        var5 = var9.useApplicationCommandOptionValueParser;
        var4 = {};
        var4['channel'] = var15;
        var12 = var5.bind(var9)(var4);
        var _closure2_slot5 = var12;
        var4 = 14;
        var5 = var18[var4];
        var11 = var17.bind(var8)(var5);
        var10 = var11.useStateFromStores;
        var5 = _closure1_slot7;
        var9 = new Array(1);
        var9[0] = var5;
        var5 = function() {
            var3 = _closure1_slot7;
            var2 = var3.getActiveCommand;
            var1 = _closure2_slot2;
            var1 = var1.id;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var16 = var10.bind(var11)(var9, var5);
        var _closure2_slot6 = var16;
        var4 = var18[var4];
        var10 = var17.bind(var8)(var4);
        var9 = var10.useStateFromStores;
        var4 = _closure1_slot6;
        var5 = new Array(1);
        var5[0] = var4;
        var4 = function() {
            var3 = _closure1_slot6;
            var2 = var3.getLastResponseNonce;
            var1 = _closure2_slot2;
            var1 = var1.id;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var13 = var9.bind(var10)(var5, var4);
        var _closure2_slot7 = var13;
        var4 = _closure1_slot5;
        var10 = var4.useRef;
        var5 = 17;
        var5 = var18[var5];
        var11 = var17.bind(var8)(var5);
        var9 = var11.getTextBeforeFirstOption;
        var5 = var6.current;
        var5 = var5.text;
        var5 = var9.bind(var11)(var5);
        var11 = var5.text;
        var5 = var11.slice;
        var9 = 1;
        var11 = var5.bind(var11)(var9);
        var5 = var11.trimEnd;
        var5 = var5.bind(var11)();
        var5 = var10.bind(var4)(var5);
        var _closure2_slot8 = var5;
        var10 = var4.useState;
        var5 = var5.current;
        var11 = var10.bind(var4)(var5);
        var10 = _closure1_slot4;
        var5 = 2;
        var5 = var10.bind(var8)(var11, var5);
        var10 = 0;
        var11 = var5[var10];
        var5 = var5[var9];
        var _closure2_slot9 = var5;
        var5 = _closure1_slot2;
        var2 = 18;
        var2 = var18[var2];
        var10 = var5.bind(var8)(var2);
        var9 = var10.useCachedResults;
        var5 = {};
        var2 = 'channel';
        var5['type'] = var2;
        var5['channel'] = var15;
        var2 = 19;
        var2 = var18[var2];
        var2 = var17.bind(var8)(var2);
        var2 = var2.ApplicationCommandType;
        var2 = var2.CHAT;
        var2 = var9.bind(var10)(var5, var2, var11);
        var11 = var2.commands;
        var _closure2_slot10 = var11;
        var2 = var4.useRef;
        var2 = var2.bind(var4)(var8);
        var _closure2_slot11 = var2;
        var5 = var15.id;
        var2 = function useResolveComposerGameMentions(arg1) {
            var9 = arg1;
            var _closure3_slot0 = var9;
            var10 = _closure1_slot5;
            var4 = var10.useState;
            var3 = new Array(0);
            var5 = var4.bind(var10)(var3);
            var4 = _closure1_slot4;
            var7 = undefined;
            var3 = 2;
            var5 = var4.bind(var7)(var5, var3);
            var3 = 0;
            var3 = var5[var3];
            var _closure3_slot1 = var3;
            var4 = 1;
            var4 = var5[var4];
            var _closure3_slot2 = var4;
            var6 = var10.useCallback;
            var5 = function(arg1) {
                var4 = _closure1_slot12;
                var1 = undefined;
                var3 = arg1;
                var3 = var4.bind(var1)(var3);
                var _closure4_slot0 = var3;
                var3 = _closure3_slot2;
                var2 = function(arg1) {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                        var1 = arg1;
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot3;
                        var2 = 12;
                        var3 = var3[var2];
                        var2 = undefined;
                        var5 = var4.bind(var2)(var3);
                        var4 = var5.isEqual;
                        var3 = _closure4_slot0;
                        var3 = var4.bind(var5)(var1, var3);
                        if(var3) { _fun0006_ip = 46; continue _fun0006 }
case 47:
                        var1 = _closure4_slot0;
case 46:
                        return var1;
                    }
                };
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var4 = new Array(0);
            var4 = var6.bind(var10)(var5, var4);
            var8 = var10.useMemo;
            var6 = new Array(1);
            var6[0] = var3;
            var5 = function() {
                var3 = _closure3_slot1;
                var2 = var3.filter;
                var1 = function(arg1) {
                    var3 = _closure1_slot9;
                    var2 = var3.getGameById;
                    var1 = arg1;
                    var2 = var2.bind(var3)(var1);
                    var1 = null;
                    var1 = var1 == var2;
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var11 = var8.bind(var10)(var5, var6);
            var6 = _closure1_slot0;
            var8 = _closure1_slot3;
            var5 = 13;
            var5 = var8[var5];
            var10 = var6.bind(var7)(var5);
            var5 = var10.useGames;
            var5 = var5.bind(var10)(var11);
            var5 = 14;
            var5 = var8[var5];
            var8 = var6.bind(var7)(var5);
            var7 = var8.useStateFromStores;
            var5 = _closure1_slot8;
            var6 = new Array(4);
            var6[0] = var5;
            var5 = _closure1_slot11;
            var6[1] = var5;
            var5 = _closure1_slot10;
            var6[2] = var5;
            var5 = _closure1_slot9;
            var6[3] = var5;
            var5 = new Array(2);
            var5[0] = var3;
            var5[1] = var9;
            var12 = _closure1_slot19;
            var14 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var1 = _closure3_slot1;
                    var1 = var1.length;
                    var4 = 0;
                    if(!(var4 !== var1)) { _fun0007_ip = 48; continue _fun0007 }
case 49:
                    var2 = _closure1_slot11;
                    var1 = var2.getCurrentUser;
                    var2 = var1.bind(var2)();
                    var1 = null;
                    var5 = var1 == var2;
                    var14 = undefined;
                    var13 = undefined;
                    if(var5) { _fun0007_ip = 28; continue _fun0007 }
case 47:
                    var13 = var2.nsfwAllowed;
case 28:
                    var6 = _closure1_slot10;
                    var5 = var6.getEditingMessage;
                    var2 = _closure3_slot0;
                    var2 = var5.bind(var6)(var2);
                    var5 = var1 == var2;
                    var12 = undefined;
                    if(var5) { _fun0007_ip = 50; continue _fun0007 }
case 51:
                    var12 = var2.mentionGames;
case 50:
                    var2 = global;
                    var2 = var2.Map;
                    var5 = var2.prototype;
                    var5 = Object.create(var5, {constructor: {value: var2}});
                    var28 = var5;
                    var2 = new var28[var2](var27);
                    var2 = var2 instanceof Object ? var2 : var5;
                    var5 = _closure1_slot16;
                    var3 = _closure3_slot1;
                    var11 = var5.bind(var14)(var3);
                    var5 = var11.bind(var14)();
                    var3 = var5.done;
                    var10 = 15;
                    var9 = var5;
                    var8 = undefined;
                    var7 = undefined;
                    var6 = undefined;
                    var5 = undefined;
                    if(var3) { _fun0007_ip = 52; continue _fun0007 }
case 53:
                    var21 = var9.value;
                    var3 = var1 == var12;
                    var17 = undefined;
                    if(var3) { _fun0007_ip = 54; continue _fun0007 }
case 55:
                    var3 = var12.get;
                    var17 = var3.bind(var12)(var21);
case 54:
                    if(!(var1 != var17)) { _fun0007_ip = 56; continue _fun0007 }
case 57:
                    var16 = var2.set;
                    var3 = {};
                    var3['id'] = var21;
                    var18 = var17.name;
                    var3['name'] = var18;
                    var17 = var17.icon;
                    var3['icon'] = var17;
                    var3 = var16.bind(var2)(var21, var3);
                    var18 = var7;
                    var17 = var6;
                    var16 = var5;
                    _fun0007_ip = 58; continue _fun0007;
case 56:
                    var19 = _closure1_slot8;
                    var3 = var19.getGame;
                    var19 = var3.bind(var19)(var21);
                    if(!(var1 != var19)) { _fun0007_ip = 59; continue _fun0007 }
case 60:
                    var20 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var3 = var3[var10];
                    var20 = var20.bind(var14)(var3);
                    var3 = var20.isGameProfileObscured;
                    var3 = var3.bind(var20)(var19, var13);
                    var8 = var19;
                    var18 = var7;
                    var17 = var6;
                    var16 = var5;
                    if(var3) { _fun0007_ip = 58; continue _fun0007 }
case 61:
                    var23 = var2.set;
                    var22 = {};
                    var22['id'] = var21;
                    var3 = var19.name;
                    var22['name'] = var3;
                    var3 = var19.media;
                    var24 = var1 == var3;
                    var20 = undefined;
                    if(var24) { _fun0007_ip = 62; continue _fun0007 }
case 63:
                    var20 = var3.icon;
case 62:
                    var25 = var1 != var20;
                    var24 = null;
                    if(!var25) { _fun0007_ip = 64; continue _fun0007 }
case 65:
                    var24 = var20;
case 64:
                    var22['icon'] = var24;
                    var22 = var23.bind(var2)(var21, var22);
                    var8 = var19;
                    var18 = var7;
                    var17 = var20;
                    var16 = var3;
                    _fun0007_ip = 58; continue _fun0007;
case 59:
                    var20 = _closure1_slot9;
                    var3 = var20.getGameById;
                    var3 = var3.bind(var20)(var21);
                    var8 = var19;
                    var18 = var3;
                    var17 = var6;
                    var16 = var5;
                    if(!(var1 != var3)) { _fun0007_ip = 58; continue _fun0007 }
case 66:
                    var20 = var2.set;
                    var20 = var20.bind(var2)(var21, var3);
                    var8 = var19;
                    var18 = var3;
                    var17 = var6;
                    var16 = var5;
case 58:
                    var19 = var11.bind(var14)();
                    var3 = var19.done;
                    var7 = var18;
                    var6 = var17;
                    var5 = var16;
                    var9 = var19;
                    if(!var3) { _fun0007_ip = 53; continue _fun0007 }
case 52:
                    var3 = var2.size;
                    var3 = var3 > var4;
                    var1 = null;
                    if(!var3) { _fun0007_ip = 67; continue _fun0007 }
case 68:
                    var1 = var2;
case 67:
                    return var1;
case 48:
                    var1 = null;
                    return var1;
                }
            };
            var16 = var8;
            var15 = var6;
            var13 = var5;
            var2 = var16[var7](var15, var14, var13, var12, var11);
            var1 = {};
            var1['syncRawGameMentionIdsFromText'] = var4;
            var1['rawGameMentionIds'] = var3;
            var1['resolvedGameMentions'] = var2;
            return var1;
        };
        var5 = var2.bind(var8)(var5);
        var2 = var5.syncRawGameMentionIdsFromText;
        var _closure2_slot12 = var2;
        var8 = var5.rawGameMentionIds;
        var _closure2_slot13 = var8;
        var9 = var5.resolvedGameMentions;
        var _closure2_slot14 = var9;
        var10 = var4.useCallback;
        var5 = new Array(10);
        var5[0] = var16;
        var5[1] = var15;
        var5[2] = var7;
        var5[3] = var6;
        var5[4] = var14;
        var5[5] = var13;
        var5[6] = var12;
        var5[7] = var11;
        var5[8] = var3;
        var5[9] = var2;
        var2 = function() {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var1 = _closure2_slot1;
                var1 = var1.current;
                var7 = var1.editId;
                var6 = var1.focused;
                var4 = var1.selectionStart;
                var3 = var1.selectionEnd;
                var5 = var1.text;
                var8 = _closure2_slot12;
                var1 = undefined;
                var8 = var8.bind(var1)(var5);
                var8 = {};
                var9 = _closure2_slot6;
                var8['activeCommand'] = var9;
                var9 = _closure2_slot2;
                var8['channel'] = var9;
                var9 = _closure2_slot3;
                var8['commandsDisabled'] = var9;
                var8['editId'] = var7;
                var8['focused'] = var6;
                var6 = _closure2_slot7;
                var8['lastCommandAutocompleteResponseNonce'] = var6;
                var6 = _closure2_slot10;
                var8['queryCommands'] = var6;
                var8['selectionStart'] = var4;
                var8['selectionEnd'] = var3;
                var8['text'] = var5;
                var3 = _closure2_slot11;
                var4 = var3.current;
                var3 = null;
                if(!(var3 != var4)) { _fun0008_ip = 69; continue _fun0008 }
case 70:
                var3 = _closure2_slot11;
                var6 = var3.current;
                var4 = var6.updateApplicationCommandManagerState;
                var3 = {};
                var3['newState'] = var8;
                var3 = var4.bind(var6)(var3);
                _fun0008_ip = 71; continue _fun0008;
case 69:
                var4 = _closure2_slot11;
                var7 = _closure1_slot1;
                var9 = _closure1_slot3;
                var3 = 20;
                var3 = var9[var3];
                var7 = var7.bind(var1)(var3);
                var3 = {};
                var3['props'] = var8;
                var8 = _closure2_slot0;
                var3['ref'] = var8;
                var8 = _closure2_slot5;
                var3['optionValueParser'] = var8;
                var8 = _closure1_slot18;
                var6 = _closure2_slot4;
                var6 = var8.bind(var1)(var6);
                var3['styles'] = var6;
                var6 = var7.prototype;
                var6 = Object.create(var6, {constructor: {value: var7}});
                var11 = var6;
                var10 = var3;
                var3 = new var11[var7](var10, var9);
                var3 = var3 instanceof Object ? var3 : var6;
                var4['current'] = var3;
case 71:
                var4 = _closure1_slot0;
                var6 = _closure1_slot3;
                var3 = 17;
                var3 = var6[var3];
                var4 = var4.bind(var1)(var3);
                var3 = var4.getTextBeforeFirstOption;
                var3 = var3.bind(var4)(var5);
                var5 = var3.text;
                var4 = var5.slice;
                var3 = 1;
                var4 = var4.bind(var5)(var3);
                var3 = var4.trimEnd;
                var3 = var3.bind(var4)();
                var4 = _closure2_slot8;
                var4 = var4.current;
                if(!(var4 !== var3)) { _fun0008_ip = 72; continue _fun0008 }
case 73:
                var4 = _closure2_slot9;
                var4 = var4.bind(var1)(var3);
                var2 = _closure2_slot8;
                var2['current'] = var3;
case 72:
                return var1;
            }
        };
        var2 = var10.bind(var4)(var2, var5);
        var _closure2_slot15 = var2;
        var11 = var4.useEffect;
        var10 = new Array(1);
        var10[0] = var2;
        var5 = function() {
            var2 = _closure2_slot15;
            var1 = undefined;
            var2 = var2.bind(var1)();
            return var1;
        };
        var5 = var11.bind(var4)(var5, var10);
        var10 = var4.useEffect;
        var5 = new Array(1);
        var5[0] = var3;
        var3 = function() {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var2 = _closure2_slot11;
                var3 = var2.current;
                var2 = null;
                if(!(var2 != var3)) { _fun0009_ip = 74; continue _fun0009 }
case 75:
                var2 = var3.updateStyles;
                var5 = _closure1_slot18;
                var4 = _closure2_slot4;
                var1 = undefined;
                var1 = var5.bind(var1)(var4);
                var1 = var2.bind(var3)(var1);
case 74:
                var1 = undefined;
                return var1;
            }
        };
        var3 = var10.bind(var4)(var3, var5);
        var5 = var4.useEffect;
        var3 = new Array(5);
        var3[0] = var9;
        var3[1] = var8;
        var3[2] = var7;
        var3[3] = var6;
        var3[4] = var2;
        var2 = function() {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var2 = _closure2_slot11;
                var8 = var2.current;
                var3 = _closure2_slot14;
                var2 = null;
                if(!(var2 != var3)) { _fun0010_ip = 76; continue _fun0010 }
case 77:
                var3 = _closure2_slot13;
                var3 = var3.length;
                var9 = 0;
                if(!(var9 !== var3)) { _fun0010_ip = 76; continue _fun0010 }
case 78:
                if(!(var2 != var8)) { _fun0010_ip = 76; continue _fun0010 }
case 79:
                var2 = _closure2_slot1;
                var2 = var2.current;
                var6 = var2.text;
                var5 = _closure1_slot12;
                var2 = undefined;
                var10 = var5.bind(var2)(var6);
                var7 = var10.map;
                var5 = function(arg1) {
                    var3 = _closure2_slot14;
                    var2 = var3.get;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var10 = var7.bind(var10)(var5);
                var7 = var10.filter;
                var5 = function(arg1) {
                    var2 = null;
                    var1 = arg1;
                    var1 = var2 != var1;
                    return var1;
                };
                var5 = var7.bind(var10)(var5);
                var7 = var5.length;
                if(!(var9 !== var7)) { _fun0010_ip = 76; continue _fun0010 }
case 80:
                var9 = var6.replace;
                var7 = _closure1_slot13;
                var4 = function(arg1, arg2) {
                    _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                        var1 = arg1;
                        var4 = _closure2_slot14;
                        var3 = var4.get;
                        var2 = arg2;
                        var2 = var3.bind(var4)(var2);
                        var3 = null;
                        if(!(var3 != var2)) { _fun0011_ip = 81; continue _fun0011 }
case 82:
                        var5 = _closure1_slot14;
                        var4 = var2.name;
                        var2 = global;
                        var2 = var2.HermesInternal;
                        var3 = var2.concat;
                        var2 = '';
                        var1 = var3.bind(var2)(var5, var4);
case 81:
                        return var1;
                    }
                };
                var4 = var9.bind(var6)(var7, var4);
                var3 = _closure1_slot16;
                var7 = var3.bind(var2)(var5);
                var5 = var7.bind(var2)();
                var3 = var5.done;
                if(var3) { _fun0010_ip = 83; continue _fun0010 }
case 17:
                var9 = var5.value;
                var3 = var8.addGameMention;
                var3 = var3.bind(var8)(var9);
                var9 = var7.bind(var2)();
                var3 = var9.done;
                var5 = var9;
                if(!var3) { _fun0010_ip = 17; continue _fun0010 }
case 83:
                var3 = _closure2_slot0;
                var5 = var3.current;
                var3 = var5.setText;
                var3 = var3.bind(var5)(var4);
                var3 = _closure2_slot1;
                var5 = var3.current;
                var5['textPrev'] = var6;
                var3 = var3.current;
                var3['text'] = var4;
                var1 = _closure2_slot15;
                var1 = var1.bind(var2)();
case 76:
                var1 = undefined;
                return var1;
            }
        };
        var2 = var5.bind(var4)(var2, var3);
        var3 = var4.useImperativeHandle;
        var2 = arg2;
        var1 = function() {
            var1 = {};
            var3 = function getApplicationCommandManager() {
                var1 = _closure2_slot11;
                var1 = var1.current;
                return var1;
            };
            var1['getApplicationCommandManager'] = var3;
            var2 = function updateState() {
                var2 = _closure2_slot15;
                var1 = undefined;
                var1 = var2.bind(var1)();
                return var1;
            };
            var1['updateState'] = var2;
            return var1;
        };
        var1 = var3.bind(var4)(var2, var1);
        var1 = null;
        return var1;
    };
    var4 = var4.bind(var7)(var2);
    var2 = 'ChatInputAppCommandManager';
    var4['displayName'] = var2;
    var2 = var7.memo;
    var2 = var2.bind(var7)(var4);
    var4 = 21;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/chat_input/native/ChatInputAppCommandManager.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();