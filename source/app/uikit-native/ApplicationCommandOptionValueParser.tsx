// app/uikit-native/ApplicationCommandOptionValueParser.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var9 = native2;
    var11 = native3;
    var3 = native6;
    var10 = native7;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var10;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 45; continue _fun0001 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 45:
            if(var2) { _fun0001_ip = 54; continue _fun0001 }
 48:
            var2 = var3.@@iterator;
 54:
            if(var2) { _fun0001_ip = 344; continue _fun0001 }
 60:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 322; continue _fun0001 }
 85:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 282; continue _fun0001 }
 95:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 269; continue _fun0001 }
 109:
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
            if(!var7) { _fun0001_ip = 162; continue _fun0001 }
 157:
            var7 = var3.constructor;
 162:
            var10 = var9;
            if(!var7) { _fun0001_ip = 178; continue _fun0001 }
 168:
            var7 = var3.constructor;
            var10 = var7.name;
 178:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 248; continue _fun0001 }
 186:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 248; continue _fun0001 }
 194:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 233; continue _fun0001 }
 204:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 246; continue _fun0001 }
 233:
            var9 = _closure1_slot16;
            var7 = var9.bind(var8)(var3, var8);
 246:
            _fun0001_ip = 264; continue _fun0001;
 248:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 264:
            var6 = var7;
            _fun0001_ip = 282; continue _fun0001;
 269:
            var7 = _closure1_slot16;
            var6 = var7.bind(var8)(var3, var8);
 282:
            var4 = var6;
            if(var4) { _fun0001_ip = 322; continue _fun0001 }
 288:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
 322:
            if(!var4) { _fun0001_ip = 329; continue _fun0001 }
 325:
            _closure2_slot0 = var4;
 329:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 56; continue _fun0002 }
 20:
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
                    _fun0002_ip = 67; continue _fun0002;
 56:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
 67:
                    return var1;
                }
            };
            return var1;
 344:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 23; continue _fun0003 }
 14:
            var2 = var4.length;
            var1 = var3 > var2;
 23:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
 28:
            var2 = var4.length;
 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 70; continue _fun0003 }
 55:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 55; continue _fun0003 }
 70:
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var7 = function getUsers(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var2 = arg1;
            var3 = var2.getGuildId;
            var8 = var3.bind(var2)();
            var3 = var2.isPrivate;
            var3 = var3.bind(var2)();
            if(var3) { _fun0004_ip = 134; continue _fun0004 }
 28:
            var3 = null;
            if(!(var3 == var8)) { _fun0004_ip = 70; continue _fun0004 }
 34:
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var3 = 9;
            var3 = var5[var3];
            var5 = undefined;
            var4 = var4.bind(var5)(var3);
            var3 = new Array(0);
            var4 = var4.bind(var5)(var3);
            _fun0004_ip = 132; continue _fun0004;
 70:
            var7 = _closure1_slot1;
            var6 = _closure1_slot2;
            var5 = 9;
            var5 = var6[var5];
            var6 = undefined;
            var5 = var7.bind(var6)(var5);
            var7 = _closure1_slot7;
            var3 = var7.getMembers;
            var3 = var3.bind(var7)(var8);
            var6 = var5.bind(var6)(var3);
            var5 = var6.map;
            var3 = function(arg1) {
                var1 = arg1;
                var2 = var1.userId;
                var1 = {};
                var1['userId'] = var2;
                return var1;
            };
            var4 = var5.bind(var6)(var3);
 132:
            _fun0004_ip = 187; continue _fun0004;
 134:
            var6 = _closure1_slot1;
            var5 = _closure1_slot2;
            var3 = 9;
            var3 = var5[var3];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var2 = var2.recipients;
            var5 = var3.bind(var5)(var2);
            var3 = var5.map;
            var2 = function(arg1) {
                var1 = {};
                var2 = arg1;
                var1['userId'] = var2;
                return var1;
            };
            var4 = var3.bind(var5)(var2);
 187:
            var3 = var4.map;
            var2 = function(arg1) {
                var1 = arg1;
                var3 = var1.userId;
                var2 = _closure1_slot9;
                var1 = var2.getUser;
                var1 = var1.bind(var2)(var3);
                return var1;
            };
            var4 = var3.bind(var4)(var2);
            var3 = var4.filter;
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 10;
            var5 = var5[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var5);
            var2 = var2.isNotNullish;
            var3 = var3.bind(var4)(var2);
            var2 = var3.map;
            var1 = function(arg1) {
                var2 = arg1;
                var1 = {};
                var3 = var2.id;
                var1['id'] = var3;
                var2 = var2.tag;
                var1['text'] = var2;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var _closure1_slot17 = var7;
    var6 = function getRoles(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var1 = arg1;
            var4 = var1.guild_id;
            var1 = null;
            if(!(var1 == var4)) { _fun0005_ip = 20; continue _fun0005 }
 14:
            var3 = new Array(0);
            _fun0005_ip = 38; continue _fun0005;
 20:
            var2 = _closure1_slot8;
            var1 = var2.getSortedRoles;
            var3 = var1.bind(var2)(var4);
 38:
            var4 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 9;
            var1 = var2[var1];
            var2 = undefined;
            var1 = var4.bind(var2)(var1);
            var3 = var1.bind(var2)(var3);
            var2 = var3.map;
            var1 = function(arg1) {
                var1 = arg1;
                var3 = var1.id;
                var2 = var1.name;
                var1 = {};
                var1['id'] = var3;
                var1['text'] = var2;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var _closure1_slot18 = var6;
    var5 = function getChannels(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var3 = arg1;
            var7 = arg2;
            var _closure2_slot0 = var7;
            var2 = var3.getGuildId;
            var9 = var2.bind(var3)();
            var _closure2_slot1 = var9;
            var2 = null;
            if(!(var2 != var9)) { _fun0006_ip = 166; continue _fun0006 }
 35:
            var6 = _closure1_slot1;
            var11 = _closure1_slot2;
            var5 = 9;
            var5 = var11[var5];
            var8 = undefined;
            var6 = var6.bind(var8)(var5);
            var10 = _closure1_slot0;
            var5 = 11;
            var5 = var11[var5];
            var5 = var10.bind(var8)(var5);
            var5 = var5.COMMAND_SUPPORTED_CHANNEL_TYPE_KEYS;
            var8 = var6.bind(var8)(var5);
            var6 = var8.flatMap;
            var5 = function(arg1) {
                var3 = _closure1_slot6;
                var2 = var3.getChannels;
                var1 = _closure2_slot1;
                var2 = var2.bind(var3)(var1);
                var1 = arg1;
                var3 = var2[var1];
                var2 = var3.map;
                var1 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.channel;
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var6 = var6.bind(var8)(var5);
            var5 = var6.concat;
            var8 = _closure1_slot5;
            var4 = var8.computeAllActiveJoinedThreads;
            var4 = var4.bind(var8)(var9);
            var6 = var5.bind(var6)(var4);
            var5 = var6.filter;
            var4 = function(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var3 = _closure2_slot0;
                    var1 = null;
                    var1 = var1 == var3;
                    if(var1) { _fun0007_ip = 38; continue _fun0007 }
 16:
                    var4 = _closure2_slot0;
                    var3 = var4.includes;
                    var2 = arg1;
                    var2 = var2.type;
                    var1 = var3.bind(var4)(var2);
 38:
                    return var1;
                }
            };
            var6 = var5.bind(var6)(var4);
            var5 = var6.map;
            var4 = function(arg1) {
                var1 = arg1;
                var3 = var1.id;
                var2 = var1.name;
                var1 = {};
                var1['id'] = var3;
                var1['text'] = var2;
                return var1;
            };
            var4 = var5.bind(var6)(var4);
            return var4;
 166:
            var4 = new Array(0);
            var2 = var2 == var7;
            if(var2) { _fun0006_ip = 192; continue _fun0006 }
 177:
            var6 = var7.includes;
            var5 = var3.type;
            var2 = var6.bind(var7)(var5);
 192:
            if(!var2) { _fun0006_ip = 205; continue _fun0006 }
 195:
            var2 = var4.push;
            var2 = var2.bind(var4)(var3);
 205:
            var5 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 9;
            var2 = var3[var2];
            var3 = undefined;
            var2 = var5.bind(var3)(var2);
            var3 = var2.bind(var3)(var4);
            var2 = var3.map;
            var1 = function(arg1) {
                var1 = arg1;
                var3 = var1.id;
                var2 = var1.name;
                var1 = {};
                var1['id'] = var3;
                var1['text'] = var2;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var _closure1_slot19 = var5;
    var1 = global;
    var12 = var1.Object;
    var8 = var12.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var12)(var3, var1, var4);
    var1 = 0;
    var4 = var10[var1];
    var1 = undefined;
    var8 = var11.bind(var1)(var4);
    var4 = 1;
    var4 = var10[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var12 = var10[var4];
    var4 = native4;
    var4 = var4.bind(var1)(var12);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var10[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var10[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var10[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 6;
    var4 = var10[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 7;
    var4 = var10[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 8;
    var4 = var10[var4];
    var4 = var9.bind(var1)(var4);
    var11 = var4.MENTION_SENTINEL;
    var _closure1_slot10 = var11;
    var4 = var4.CHANNEL_SENTINEL;
    var _closure1_slot11 = var4;
    var4 = /^@(([^@#:]+)#([0-9]{4}))$/i;
    var _closure1_slot12 = var4;
    var4 = function matchPrefix(arg1, arg2, arg3) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var2 = arg1;
            var5 = arg2;
            var4 = arg3;
            var _closure2_slot0 = var2;
            var3 = 0;
            var3 = var5[var3];
            if(!(var3 === var2)) { _fun0008_ip = 109; continue _fun0008 }
 25:
            var3 = var5.substr;
            var2 = var2.length;
            var2 = var3.bind(var5)(var2);
            var _closure2_slot1 = var2;
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
                var3 = var1.text;
                var2 = _closure2_slot1;
                var1 = var2.toLowerCase;
                var2 = var1.bind(var2)();
                var1 = var3.toLowerCase;
                var1 = var1.bind(var3)();
                var1 = var2 === var1;
                return var1;
            };
            var3 = var3.bind(var4)(var2);
            var2 = var3.map;
            var1 = function(arg1) {
                var1 = arg1;
                var2 = var1.id;
                var4 = var1.text;
                var1 = {};
                var3 = _closure2_slot0;
                var3 = var3 + var4;
                var1['text'] = var3;
                var1['id'] = var2;
                return var1;
            };
            var2 = var2.bind(var3)(var1);
            var1 = var2.first;
            var1 = var1.bind(var2)();
            return var1;
 109:
            var1 = null;
            return var1;
        }
    };
    var _closure1_slot13 = var4;
    var4 = function ApplicationCommandOptionValueParser(arg1) {
        var3 = this;
        var _closure2_slot0 = var3;
        var5 = _closure1_slot3;
        var4 = _closure1_slot20;
        var1 = undefined;
        var4 = var5.bind(var1)(var3, var4);
        var2 = function(arg1, arg2) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                var9 = arg1;
                var7 = arg2;
                var2 = var9.trim;
                var12 = var2.bind(var9)();
                var _closure3_slot0 = var12;
                var4 = _closure1_slot17;
                var2 = _closure2_slot0;
                var3 = var2.channel;
                var10 = undefined;
                var4 = var4.bind(var10)(var3);
                var _closure3_slot1 = var4;
                var3 = _closure1_slot18;
                var2 = var2.channel;
                var2 = var3.bind(var10)(var2);
                var _closure3_slot2 = var2;
                var3 = var4.map;
                var2 = function(arg1) {
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
                    var1[var2] = var3;
                    return var1;
                };
                var2 = var3.bind(var4)(var2);
                var _closure3_slot3 = var2;
                var6 = function matchUser() {
                    _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                        var7 = _closure1_slot13;
                        var6 = _closure1_slot10;
                        var5 = _closure3_slot0;
                        var3 = _closure3_slot1;
                        var1 = undefined;
                        var3 = var7.bind(var1)(var6, var5, var3);
                        var5 = null;
                        var7 = var5 == var3;
                        var6 = undefined;
                        if(var7) { _fun0010_ip = 47; continue _fun0010 }
 42:
                        var6 = var3.id;
 47:
                        if(!(var5 == var6)) { _fun0010_ip = 100; continue _fun0010 }
 51:
                        var7 = _closure1_slot13;
                        var6 = _closure1_slot10;
                        var4 = _closure3_slot0;
                        var2 = _closure3_slot3;
                        var4 = var7.bind(var1)(var6, var4, var2);
                        var6 = var5 == var4;
                        var2 = undefined;
                        if(var6) { _fun0010_ip = 88; continue _fun0010 }
 83:
                        var2 = var4.id;
 88:
                        var2 = var5 != var2;
                        var3 = var4;
                        var1 = undefined;
                        if(!var2) { _fun0010_ip = 124; continue _fun0010 }
 100:
                        var2 = {};
                        var4 = 'userMention';
                        var2['type'] = var4;
                        var3 = var3.id;
                        var2['userId'] = var3;
                        var1 = var2;
 124:
                        return var1;
                    }
                };
                var4 = function matchRole() {
                    _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                        var6 = _closure1_slot13;
                        var5 = _closure1_slot10;
                        var4 = _closure3_slot0;
                        var3 = _closure3_slot2;
                        var1 = undefined;
                        var3 = var6.bind(var1)(var5, var4, var3);
                        var5 = null;
                        var6 = var5 == var3;
                        var4 = undefined;
                        if(var6) { _fun0011_ip = 47; continue _fun0011 }
 42:
                        var4 = var3.id;
 47:
                        if(!(var5 == var4)) { _fun0011_ip = 83; continue _fun0011 }
 51:
                        var4 = _closure3_slot0;
                        var2 = '@everyone';
                        var1 = undefined;
                        if(!(var2 === var4)) { _fun0011_ip = 81; continue _fun0011 }
 67:
                        var1 = {'type': 'textMention', 'text': '@everyone'};
 81:
                        _fun0011_ip = 106; continue _fun0011;
 83:
                        var2 = {};
                        var4 = 'roleMention';
                        var2['type'] = var4;
                        var3 = var3.id;
                        var2['roleId'] = var3;
                        var1 = var2;
 106:
                        return var1;
                    }
                };
                var2 = var7.type;
                var3 = _closure1_slot0;
                var1 = _closure1_slot2;
                var14 = 12;
                var1 = var1[var14];
                var1 = var3.bind(var10)(var1);
                var1 = var1.ApplicationCommandOptionType;
                var1 = var1.USER;
                if(!(var2 === var1)) { _fun0009_ip = 223; continue _fun0009 }
 146:
                var1 = var6.bind(var10)();
                var2 = null;
                if(!(var2 == var1)) { _fun0009_ip = 576; continue _fun0009 }
 159:
                var11 = _closure1_slot12;
                var3 = 0;
                var11['lastIndex'] = var3;
                var3 = var11.exec;
                var16 = var3.bind(var11)(var12);
                if(!(var2 != var16)) { _fun0009_ip = 223; continue _fun0009 }
 186:
                var15 = _closure1_slot9;
                var13 = var15.findByTag;
                var3 = 2;
                var11 = var16[var3];
                var3 = 3;
                var3 = var16[var3];
                var3 = var13.bind(var15)(var11, var3);
                if(!(var2 == var3)) { _fun0009_ip = 553; continue _fun0009 }
 223:
                var11 = var7.type;
                var13 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var14];
                var2 = var13.bind(var10)(var2);
                var2 = var2.ApplicationCommandOptionType;
                var2 = var2.ROLE;
                if(!(var11 === var2)) { _fun0009_ip = 274; continue _fun0009 }
 261:
                var2 = var4.bind(var10)();
                var11 = null;
                if(!(var11 == var2)) { _fun0009_ip = 551; continue _fun0009 }
 274:
                var13 = var7.type;
                var15 = _closure1_slot0;
                var11 = _closure1_slot2;
                var11 = var11[var14];
                var11 = var15.bind(var10)(var11);
                var11 = var11.ApplicationCommandOptionType;
                var11 = var11.CHANNEL;
                if(!(var13 === var11)) { _fun0009_ip = 370; continue _fun0009 }
 312:
                var13 = _closure1_slot13;
                var11 = _closure1_slot11;
                var16 = _closure1_slot19;
                var5 = _closure2_slot0;
                var15 = var5.channel;
                var5 = var7.channelTypes;
                var5 = var16.bind(var10)(var15, var5);
                var5 = var13.bind(var10)(var11, var12, var5);
                var13 = null;
                if(!(var13 != var5)) { _fun0009_ip = 370; continue _fun0009 }
 358:
                var11 = var5.id;
                if(!(var13 == var11)) { _fun0009_ip = 530; continue _fun0009 }
 370:
                var11 = var7.type;
                var13 = _closure1_slot0;
                var7 = _closure1_slot2;
                var7 = var7[var14];
                var7 = var13.bind(var10)(var7);
                var7 = var7.ApplicationCommandOptionType;
                var7 = var7.MENTIONABLE;
                if(!(var11 === var7)) { _fun0009_ip = 487; continue _fun0009 }
 408:
                var4 = var4.bind(var10)();
                var7 = null;
                if(!(var7 == var4)) { _fun0009_ip = 528; continue _fun0009 }
 418:
                var6 = var6.bind(var10)();
                if(!(var7 == var6)) { _fun0009_ip = 526; continue _fun0009 }
 426:
                var11 = _closure1_slot12;
                var10 = 0;
                var11['lastIndex'] = var10;
                var10 = var11.exec;
                var13 = var10.bind(var11)(var12);
                if(!(var7 != var13)) { _fun0009_ip = 487; continue _fun0009 }
 453:
                var12 = _closure1_slot9;
                var11 = var12.findByTag;
                var8 = 2;
                var10 = var13[var8];
                var8 = 3;
                var8 = var13[var8];
                var8 = var11.bind(var12)(var10, var8);
                if(!(var7 == var8)) { _fun0009_ip = 503; continue _fun0009 }
 487:
                var7 = {};
                var10 = 'text';
                var7['type'] = var10;
                var7['text'] = var9;
                return var7;
 503:
                var7 = {};
                var9 = 'userMention';
                var7['type'] = var9;
                var8 = var8.id;
                var7['userId'] = var8;
                return var7;
 526:
                return var6;
 528:
                return var4;
 530:
                var4 = {};
                var6 = 'channelMention';
                var4['type'] = var6;
                var5 = var5.id;
                var4['channelId'] = var5;
                return var4;
 551:
                return var2;
 553:
                var2 = {};
                var4 = 'userMention';
                var2['type'] = var4;
                var3 = var3.id;
                var2['userId'] = var3;
                return var2;
 576:
                return var1;
            }
        };
        var3['parse'] = var2;
        var2 = arg1;
        var3['channel'] = var2;
        return var1;
    };
    var _closure1_slot20 = var4;
    var4 = var8.bind(var1)(var4);
    var _closure1_slot14 = var4;
    var8 = 14;
    var8 = var10[var8];
    var10 = var9.bind(var1)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'uikit-native/ApplicationCommandOptionValueParser.tsx';
    var8 = var9.bind(var10)(var8);
    var3['getUsers'] = var7;
    var3['getRoles'] = var6;
    var3['getChannels'] = var5;
    var3['ApplicationCommandOptionValueParser'] = var4;
    var4 = function(arg1, arg2, arg3) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
            var14 = arg1;
            var2 = arg2;
            var13 = arg3;
            var1 = var2.options;
            var12 = null;
            if(!(var12 != var1)) { _fun0012_ip = 295; continue _fun0012 }
 23:
            var1 = {};
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var10 = 13;
            var3 = var3[var10];
            var9 = undefined;
            var4 = var4.bind(var9)(var3);
            var3 = var4.createParserState;
            var8 = var3.bind(var4)(var14);
            var3 = _closure1_slot15;
            var2 = var2.options;
            var7 = var3.bind(var9)(var2);
            var3 = var7.bind(var9)();
            var2 = var3.done;
            var6 = 'text';
            var5 = 0;
            var4 = 12;
            if(var2) { _fun0012_ip = 293; continue _fun0012 }
 99:
            var2 = var3.value;
            var15 = var2.name;
            var15 = var13[var15];
            if(!(var12 != var15)) { _fun0012_ip = 275; continue _fun0012 }
 120:
            var16 = var15[var5];
            var16 = var16.type;
            if(!(var6 === var16)) { _fun0012_ip = 266; continue _fun0012 }
 136:
            var17 = var2.type;
            var18 = _closure1_slot0;
            var16 = _closure1_slot2;
            var16 = var16[var4];
            var16 = var18.bind(var9)(var16);
            var16 = var16.ApplicationCommandOptionType;
            var16 = var16.STRING;
            if(!(var17 === var16)) { _fun0012_ip = 266; continue _fun0012 }
 174:
            var16 = var2.choices;
            if(!(var12 == var16)) { _fun0012_ip = 266; continue _fun0012 }
 184:
            var16 = var2.autocomplete;
            if(var16) { _fun0012_ip = 266; continue _fun0012 }
 193:
            var17 = var2.name;
            var18 = {};
            var18['type'] = var6;
            var19 = _closure1_slot1;
            var16 = _closure1_slot2;
            var16 = var16[var10];
            var20 = var19.bind(var9)(var16);
            var19 = var20.parse;
            var16 = var15[var5];
            var16 = var16.text;
            var16 = var19.bind(var20)(var14, var16, var8);
            var16 = var16.content;
            var18['text'] = var16;
            var16 = new Array(1);
            var16[0] = var18;
            var1[var17] = var16;
            _fun0012_ip = 275; continue _fun0012;
 266:
            var2 = var2.name;
            var1[var2] = var15;
 275:
            var15 = var7.bind(var9)();
            var2 = var15.done;
            var3 = var15;
            if(!var2) { _fun0012_ip = 99; continue _fun0012 }
 293:
            return var1;
 295:
            var1 = {};
            return var1;
        }
    };
    var3['parseOptionValuesForSend'] = var4;
    var2 = function(arg1) {
        var2 = arg1;
        var5 = var2.channel;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot4;
        var3 = var4.useMemo;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            var3 = _closure1_slot14;
            var4 = _closure2_slot0;
            var2 = var3.prototype;
            var2 = Object.create(var2, {constructor: {value: var3}});
            var5 = var2;
            var1 = new var5[var3](var4, var3);
            var1 = var1 instanceof Object ? var1 : var2;
            return var1;
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useApplicationCommandOptionValueParser'] = var2;
    return var1;
})();