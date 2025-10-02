// app/modules/channel_text_area/PlaintextResolvers.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
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
            var2 = var3.@@iterator;
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
            var9 = _closure1_slot14;
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
            var7 = _closure1_slot14;
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
    var _closure1_slot13 = var1;
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
    var _closure1_slot14 = var1;
    var4 = function resolvePlaintextInlineVoid(arg1, arg2, arg3, arg4) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var7 = arg1;
            var6 = arg2;
            var1 = arg4;
            var10 = null;
            if(!(var10 == var1)) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var1 = {};
case 36:
            var2 = var1.allowUsers;
            var5 = undefined;
            var4 = var5 === var2;
            if(var4) { _fun0004_ip = 38; continue _fun0004 }
case 39:
            var4 = var2;
case 38:
            var1 = var1.allowRoles;
            var3 = var5 === var1;
            if(var3) { _fun0004_ip = 40; continue _fun0004 }
case 41:
            var3 = var1;
case 40:
            var1 = 0;
            var2 = var7[var1];
            var1 = '@';
            if(!(var1 !== var2)) { _fun0004_ip = 42; continue _fun0004 }
case 43:
            var13 = ':';
            if(!(var13 !== var2)) { _fun0004_ip = 44; continue _fun0004 }
case 45:
            var1 = '#';
            if(!(var1 !== var2)) { _fun0004_ip = 46; continue _fun0004 }
case 47:
            return var10;
case 46:
            var2 = var10 == var6;
            var1 = null;
            if(var2) { _fun0004_ip = 48; continue _fun0004 }
case 49:
            var8 = var7.length;
            var2 = 3;
            if(!(var8 > var2)) { _fun0004_ip = 50; continue _fun0004 }
case 51:
            var11 = 1;
            var2 = var7[var11];
            var8 = '"';
            if(!(var8 === var2)) { _fun0004_ip = 50; continue _fun0004 }
case 52:
            var2 = var7.length;
            var2 = var2 - var11;
            var2 = var7[var2];
            if(!(var8 !== var2)) { _fun0004_ip = 53; continue _fun0004 }
case 50:
            var8 = var7.slice;
            var2 = 1;
            var16 = var8.bind(var7)(var2);
            _fun0004_ip = 54; continue _fun0004;
case 53:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 10;
            var2 = var9[var2];
            var9 = var8.bind(var5)(var2);
            var8 = var9.unescapeChannelName;
            var12 = var7.slice;
            var2 = var7.length;
            var11 = var2 - var11;
            var2 = 2;
            var2 = var12.bind(var7)(var2, var11);
            var16 = var8.bind(var9)(var2);
case 54:
            var8 = _closure1_slot7;
            var2 = var8.getTextChannelNameDisambiguations;
            var12 = var2.bind(var8)(var6);
            var8 = _closure1_slot13;
            var9 = _closure1_slot1;
            var2 = _closure1_slot2;
            var14 = 11;
            var2 = var2[var14];
            var9 = var9.bind(var5)(var2);
            var2 = var9.keys;
            var2 = var2.bind(var9)(var12);
            var11 = var8.bind(var5)(var2);
            var8 = var11.bind(var5)();
            var2 = var8.done;
            var9 = var8;
            if(var2) { _fun0004_ip = 55; continue _fun0004 }
case 25:
            var8 = var9.value;
            var2 = var12[var8];
            var2 = var2.name;
            if(!(var2 !== var16)) { _fun0004_ip = 56; continue _fun0004 }
case 57:
            var17 = var11.bind(var5)();
            var2 = var17.done;
            var9 = var17;
            if(var2) { _fun0004_ip = 55; continue _fun0004 }
case 58:
            _fun0004_ip = 25; continue _fun0004;
case 56:
            var2 = {};
            var9 = 'channelMention';
            var2['type'] = var9;
            var2['channelId'] = var8;
            var9 = {};
            var8 = '';
            var9['text'] = var8;
            var8 = new Array(1);
            var8[0] = var9;
            var2['children'] = var8;
            var1 = var2;
            _fun0004_ip = 48; continue _fun0004;
case 55:
            var8 = _closure1_slot13;
            var9 = _closure1_slot0;
            var11 = _closure1_slot2;
            var2 = 12;
            var2 = var11[var2];
            var2 = var9.bind(var5)(var2);
            var2 = var2.COMMAND_SUPPORTED_CHANNEL_TYPE_KEYS;
            var17 = var8.bind(var5)(var2);
            var8 = var17.bind(var5)();
            var2 = var8.done;
            var12 = var8;
            var11 = undefined;
            var9 = undefined;
            var8 = undefined;
            if(var2) { _fun0004_ip = 59; continue _fun0004 }
case 60:
            var20 = var12.value;
            var2 = _closure1_slot8;
            var18 = var8;
            if(!(var20 !== var2)) { _fun0004_ip = 61; continue _fun0004 }
case 62:
            var19 = _closure1_slot13;
            var21 = _closure1_slot7;
            var2 = var21.getChannels;
            var2 = var2.bind(var21)(var6);
            var2 = var2[var20];
            var21 = var19.bind(var5)(var2);
            var19 = var21.bind(var5)();
            var2 = var19.done;
            var20 = var19;
            var11 = var20;
            var9 = var21;
            var18 = var8;
            if(var2) { _fun0004_ip = 61; continue _fun0004 }
case 63:
            var2 = var20.value;
            var19 = var2.channel;
            var2 = var19.name;
            if(!(var2 !== var16)) { _fun0004_ip = 64; continue _fun0004 }
case 65:
            var22 = var21.bind(var5)();
            var2 = var22.done;
            var20 = var22;
            var11 = var20;
            var9 = var21;
            var18 = var19;
            if(var2) { _fun0004_ip = 61; continue _fun0004 }
case 66:
            _fun0004_ip = 63; continue _fun0004;
case 64:
            var2 = {};
            var20 = 'channelMention';
            var2['type'] = var20;
            var19 = var19.id;
            var2['channelId'] = var19;
            var20 = {};
            var19 = '';
            var20['text'] = var19;
            var19 = new Array(1);
            var19[0] = var20;
            var2['children'] = var19;
            var1 = var2;
            _fun0004_ip = 48; continue _fun0004;
case 61:
            var19 = var17.bind(var5)();
            var2 = var19.done;
            var8 = var18;
            var12 = var19;
            if(!var2) { _fun0004_ip = 60; continue _fun0004 }
case 59:
            var8 = _closure1_slot5;
            var2 = var8.getActiveJoinedThreadsForGuild;
            var12 = var2.bind(var8)(var6);
            var8 = _closure1_slot13;
            var9 = _closure1_slot1;
            var2 = _closure1_slot2;
            var2 = var2[var14];
            var9 = var9.bind(var5)(var2);
            var2 = var9.keys;
            var2 = var2.bind(var9)(var12);
            var11 = var8.bind(var5)(var2);
            var8 = var11.bind(var5)();
            var2 = var8.done;
            var9 = var8;
            var8 = undefined;
            var1 = null;
            if(var2) { _fun0004_ip = 48; continue _fun0004 }
case 67:
            var20 = var9.value;
            var17 = _closure1_slot13;
            var18 = _closure1_slot1;
            var2 = _closure1_slot2;
            var2 = var2[var14];
            var19 = var18.bind(var5)(var2);
            var18 = var19.keys;
            var2 = var12[var20];
            var2 = var18.bind(var19)(var2);
            var19 = var17.bind(var5)(var2);
            var17 = var19.bind(var5)();
            var2 = var17.done;
            var18 = var17;
            if(var2) { _fun0004_ip = 68; continue _fun0004 }
case 69:
            var17 = var18.value;
            var2 = var12[var20];
            var2 = var2[var17];
            var17 = var2.channel;
            var2 = var17.name;
            if(!(var2 !== var16)) { _fun0004_ip = 70; continue _fun0004 }
case 71:
            var21 = var19.bind(var5)();
            var2 = var21.done;
            var18 = var21;
            var8 = var17;
            if(var2) { _fun0004_ip = 68; continue _fun0004 }
case 72:
            _fun0004_ip = 69; continue _fun0004;
case 70:
            var2 = {};
            var18 = 'channelMention';
            var2['type'] = var18;
            var17 = var17.id;
            var2['channelId'] = var17;
            var18 = {};
            var17 = '';
            var18['text'] = var17;
            var17 = new Array(1);
            var17[0] = var18;
            var2['children'] = var17;
            var1 = var2;
            _fun0004_ip = 48; continue _fun0004;
case 68:
            var17 = var11.bind(var5)();
            var2 = var17.done;
            var9 = var17;
            var1 = null;
            if(!var2) { _fun0004_ip = 67; continue _fun0004 }
case 48:
            return var1;
case 44:
            var8 = _closure1_slot1;
            var9 = _closure1_slot2;
            var1 = 13;
            var1 = var9[var1];
            var1 = var8.bind(var5)(var1);
            var8 = var1.EMOJI_NAME_RE;
            var1 = var8.exec;
            var9 = var1.bind(var8)(var7);
            var8 = var10 == var9;
            var1 = null;
            if(var8) { _fun0004_ip = 73; continue _fun0004 }
case 74:
            var8 = 1;
            var8 = var9[var8];
            var9 = _closure1_slot4;
            var2 = var9.getDisambiguatedEmojiContext;
            var9 = var2.bind(var9)(var6);
            var2 = var9.getCustomEmoji;
            var2 = var2.bind(var9)();
            var9 = var10 != var2;
            var1 = null;
            if(!var9) { _fun0004_ip = 73; continue _fun0004 }
case 75:
            var9 = var8 in var2;
            var1 = null;
            if(!var9) { _fun0004_ip = 73; continue _fun0004 }
case 76:
            var9 = var2[var8];
            var2 = {};
            var8 = 'customEmoji';
            var2['type'] = var8;
            var8 = {};
            var10 = var9.id;
            var8['emojiId'] = var10;
            var10 = 'require_colons';
            var10 = var10 in var9;
            if(!var10) { _fun0004_ip = 77; continue _fun0004 }
case 78:
            var10 = var9.require_colons;
            if(var10) { _fun0004_ip = 79; continue _fun0004 }
case 77:
            var10 = var9.name;
            _fun0004_ip = 80; continue _fun0004;
case 79:
            var12 = var9.name;
            var11 = global;
            var11 = var11.HermesInternal;
            var11 = var11.concat;
            var10 = var11.bind(var13)(var12, var13);
case 80:
            var8['name'] = var10;
            var10 = var9.animated;
            var9 = true;
            var9 = var9 === var10;
            var8['animated'] = var9;
            var9 = false;
            var8['jumboable'] = var9;
            var2['emoji'] = var8;
            var9 = {};
            var8 = '';
            var9['text'] = var8;
            var8 = new Array(1);
            var8[0] = var9;
            var2['children'] = var8;
            var1 = var2;
case 73:
            return var1;
case 42:
            var2 = function resolveUserOrRole(arg1, arg2, arg3, arg4, arg5) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var2 = arg1;
                    var12 = arg2;
                    var13 = arg3;
                    var1 = var2.slice;
                    var9 = 1;
                    var4 = var1.bind(var2)(var9);
                    var2 = var4.split;
                    var1 = '#';
                    var5 = 2;
                    var4 = var2.bind(var4)(var1, var5);
                    var1 = _closure1_slot3;
                    var7 = undefined;
                    var1 = var1.bind(var7)(var4, var5);
                    var4 = 0;
                    var6 = var1[var4];
                    var _closure3_slot0 = var6;
                    var5 = var1[var9];
                    var _closure3_slot1 = var5;
                    var1 = null;
                    var10 = var1 != var12;
                    var8 = null;
                    if(!var10) { _fun0005_ip = 81; continue _fun0005 }
case 9:
                    var11 = _closure1_slot11;
                    var10 = var11.getGuild;
                    var8 = var10.bind(var11)(var12);
case 81:
                    var10 = arg5;
                    if(!var10) { _fun0005_ip = 82; continue _fun0005 }
case 83:
                    if(!(var1 == var5)) { _fun0005_ip = 82; continue _fun0005 }
case 84:
                    if(!(var1 != var8)) { _fun0005_ip = 82; continue _fun0005 }
case 85:
                    var10 = _closure1_slot13;
                    var14 = _closure1_slot10;
                    var11 = var14.getSortedRoles;
                    var8 = var8.id;
                    var8 = var11.bind(var14)(var8);
                    var14 = var10.bind(var7)(var8);
                    var10 = var14.bind(var7)();
                    var8 = var10.done;
                    var11 = var10;
                    if(var8) { _fun0005_ip = 82; continue _fun0005 }
case 86:
                    var10 = var11.value;
                    var8 = var10.name;
                    if(!(var6 !== var8)) { _fun0005_ip = 20; continue _fun0005 }
case 87:
                    var15 = var14.bind(var7)();
                    var8 = var15.done;
                    var11 = var15;
                    if(var8) { _fun0005_ip = 82; continue _fun0005 }
case 88:
                    _fun0005_ip = 86; continue _fun0005;
case 20:
                    var8 = {};
                    var11 = 'roleMention';
                    var8['type'] = var11;
                    var10 = var10.id;
                    var8['roleId'] = var10;
                    var11 = {};
                    var10 = '';
                    var11['text'] = var10;
                    var10 = new Array(1);
                    var10[0] = var11;
                    var8['children'] = var10;
                    return var8;
case 82:
                    var8 = arg4;
                    if(!var8) { _fun0005_ip = 89; continue _fun0005 }
case 90:
                    var10 = var1 != var13;
                    var8 = null;
                    if(!var10) { _fun0005_ip = 91; continue _fun0005 }
case 92:
                    var11 = _closure1_slot6;
                    var10 = var11.getChannel;
                    var8 = var10.bind(var11)(var13);
case 91:
                    if(!(var1 != var8)) { _fun0005_ip = 93; continue _fun0005 }
case 94:
                    var10 = var8.isPrivate;
                    var10 = var10.bind(var8)();
                    if(var10) { _fun0005_ip = 95; continue _fun0005 }
case 96:
                    var11 = _closure1_slot9;
                    var10 = var11.getMembers;
                    var12 = var10.bind(var11)(var12);
                    var11 = var12.map;
                    var10 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.userId;
                        return var1;
                    };
                    var11 = var11.bind(var12)(var10);
                    _fun0005_ip = 97; continue _fun0005;
case 95:
                    var11 = var8.recipients;
case 97:
                    var10 = var11.map;
                    var8 = function(arg1) {
                        var3 = _closure1_slot12;
                        var2 = var3.getUser;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var10 = var10.bind(var11)(var8);
                    var8 = var10.filter;
                    var3 = function(arg1) {
                        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                            var6 = arg1;
                            var5 = undefined;
                            var1 = var5 !== var6;
                            if(!var1) { _fun0006_ip = 98; continue _fun0006 }
case 99:
                            var4 = _closure1_slot16;
                            var3 = _closure3_slot0;
                            var2 = _closure3_slot1;
                            var1 = var4.bind(var5)(var3, var2, var6);
case 98:
                            return var1;
                        }
                    };
                    var3 = var8.bind(var10)(var3);
                    var8 = var3.length;
                    if(!(var9 === var8)) { _fun0005_ip = 89; continue _fun0005 }
case 100:
                    var3 = var3[var4];
                    var4 = _closure1_slot16;
                    var2 = {};
                    var8 = true;
                    var2['requireExact'] = var8;
                    var20 = undefined;
                    var19 = var6;
                    var18 = var5;
                    var17 = var3;
                    var16 = var2;
                    var2 = var20[var4](var19, var18, var17, var16, var15);
                    if(var2) { _fun0005_ip = 101; continue _fun0005 }
case 89:
                    return var1;
case 101:
                    var2 = {};
                    var4 = 'userMention';
                    var2['type'] = var4;
                    var3 = var3.id;
                    var2['userId'] = var3;
                    var4 = {};
                    var3 = '';
                    var4['text'] = var3;
                    var3 = new Array(1);
                    var3[0] = var4;
                    var2['children'] = var3;
                    return var2;
case 93:
                    return var1;
                }
            };
            var25 = arg3;
            var28 = undefined;
            var27 = var7;
            var26 = var6;
            var24 = var4;
            var23 = var3;
            var1 = var28[var2](var27, var26, var25, var24, var23, var22);
            return var1;
        }
    };
    var _closure1_slot15 = var4;
    var1 = function matchesUser(arg1, arg2, arg3) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var7 = arg1;
            var5 = arg2;
            var4 = arg3;
            var2 = arguments[3];
            var1 = undefined;
            if(!(var2 === var1)) { _fun0007_ip = 29; continue _fun0007 }
case 102:
            var2 = {};
case 29:
            var2 = var2.requireExact;
            if(!(var2 === var1)) { _fun0007_ip = 39; continue _fun0007 }
case 3:
            var2 = false;
case 39:
            var3 = null;
            var1 = var3 != var4;
            if(!var1) { _fun0007_ip = 103; continue _fun0007 }
case 104:
            var6 = var4.username;
            if(var2) { _fun0007_ip = 105; continue _fun0007 }
case 5:
            var2 = var6.startsWith;
            var2 = var2.bind(var6)(var7);
            _fun0007_ip = 106; continue _fun0007;
case 105:
            var2 = var6 === var7;
case 106:
            if(!var2) { _fun0007_ip = 107; continue _fun0007 }
case 108:
            var4 = var4.discriminator;
            var6 = var3 != var5;
            var3 = '0';
            if(!var6) { _fun0007_ip = 109; continue _fun0007 }
case 110:
            var3 = var5;
case 109:
            var2 = var4 === var3;
case 107:
            var1 = var2;
case 103:
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot6 = var5;
    var5 = 4;
    var9 = var7[var5];
    var9 = var8.bind(var1)(var9);
    var _closure1_slot7 = var9;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.GUILD_SELECTABLE_CHANNELS_KEY;
    var _closure1_slot8 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot9 = var5;
    var5 = 6;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot10 = var5;
    var5 = 7;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot11 = var5;
    var5 = 8;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot12 = var5;
    var5 = 14;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/channel_text_area/PlaintextResolvers.tsx';
    var5 = var6.bind(var7)(var5);
    var3['resolvePlaintextInlineVoid'] = var4;
    var2 = function resolveApplicationCommandOption(arg1, arg2, arg3, arg4) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var7 = _closure1_slot15;
            var5 = undefined;
            var11 = arg1;
            var10 = arg2;
            var9 = arg3;
            var8 = arg4;
            var12 = undefined;
            var4 = var12[var7](var11, var10, var9, var8, var7);
            var1 = null;
            var3 = var1 == var4;
            if(var3) { _fun0008_ip = 30; continue _fun0008 }
case 111:
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 9;
            var2 = var6[var2];
            var3 = var3.bind(var5)(var2);
            var2 = var3.voidToOptionValue;
            var1 = var2.bind(var3)(var4);
case 30:
            return var1;
        }
    };
    var3['resolveApplicationCommandOption'] = var2;
    return var1;
})();