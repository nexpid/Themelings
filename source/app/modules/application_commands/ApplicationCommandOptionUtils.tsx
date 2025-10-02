// app/modules/application_commands/ApplicationCommandOptionUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var11 = require;
    var3 = exports;
    var12 = dependencyMap;
    var _closure1_slot0 = var11;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var12;
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
            var9 = _closure1_slot8;
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
            var7 = _closure1_slot8;
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
    var _closure1_slot7 = var1;
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
    var _closure1_slot8 = var1;
    var9 = function filterEmpty(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var2 = null;
            if(!(var2 != var3)) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var2 = var3.filter;
            var1 = function(arg1, arg2) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var3 = arg1;
                    var4 = arg2;
                    var2 = var3.type;
                    var1 = 'text';
                    var1 = var1 !== var2;
                    if(var1) { _fun0005_ip = 38; continue _fun0005 }
case 39:
                    var2 = 0;
                    if(!(var4 > var2)) { _fun0005_ip = 40; continue _fun0005 }
case 34:
                    var2 = _closure2_slot0;
                    var5 = var2.length;
                    var2 = 1;
                    var2 = var5 - var2;
                    if(!(!(var4 < var2))) { _fun0005_ip = 41; continue _fun0005 }
case 40:
                    var4 = var3.text;
                    var2 = var4.trim;
                    var4 = var2.bind(var4)();
                    var2 = '';
                    var2 = var2 !== var4;
                    _fun0005_ip = 42; continue _fun0005;
case 41:
                    var4 = var3.text;
                    var3 = '';
                    var2 = var3 !== var4;
case 42:
                    var1 = var2;
case 38:
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            _fun0004_ip = 43; continue _fun0004;
case 36:
            var1 = new Array(0);
case 43:
            return var1;
        }
    };
    var _closure1_slot9 = var9;
    var8 = function getBoolean(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var3 = _closure1_slot9;
            var4 = arg1;
            var2 = arg2;
            var2 = var4[var2];
            var7 = undefined;
            var3 = var3.bind(var7)(var2);
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 1;
            var6 = var5[var2];
            var9 = var4.bind(var7)(var6);
            var6 = var3.length;
            var8 = var2 === var6;
            var6 = 'Contains multiple values';
            var6 = var9.bind(var7)(var8, var6);
            var2 = var5[var2];
            var6 = var4.bind(var7)(var2);
            var2 = 0;
            var4 = var3[var2];
            var5 = null;
            var8 = var5 == var4;
            var5 = undefined;
            if(var8) { _fun0006_ip = 11; continue _fun0006 }
case 44:
            var5 = var4.type;
case 11:
            var4 = 'text';
            var5 = var4 === var5;
            var4 = 'First value is not text';
            var4 = var6.bind(var7)(var5, var4);
            var2 = var3[var2];
            var2 = var2.text;
            var1 = _closure1_slot6;
            var1 = var2 === var1;
            return var1;
        }
    };
    var _closure1_slot10 = var8;
    var7 = function getChannelId(arg1, arg2) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var3 = _closure1_slot9;
            var4 = arg1;
            var2 = arg2;
            var2 = var4[var2];
            var6 = undefined;
            var2 = var3.bind(var6)(var2);
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 1;
            var5 = var4[var1];
            var8 = var3.bind(var6)(var5);
            var5 = var2.length;
            var7 = var1 === var5;
            var5 = 'Contains multiple values';
            var5 = var8.bind(var6)(var7, var5);
            var1 = var4[var1];
            var5 = var3.bind(var6)(var1);
            var1 = 0;
            var3 = var2[var1];
            var4 = null;
            var7 = var4 == var3;
            var4 = undefined;
            if(var7) { _fun0007_ip = 11; continue _fun0007 }
case 44:
            var4 = var3.type;
case 11:
            var3 = 'channelMention';
            var4 = var3 === var4;
            var3 = 'First value is not a channel mention';
            var3 = var5.bind(var6)(var4, var3);
            var1 = var2[var1];
            var1 = var1.channelId;
            return var1;
        }
    };
    var _closure1_slot11 = var7;
    var6 = function getUserId(arg1, arg2) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var3 = _closure1_slot9;
            var4 = arg1;
            var2 = arg2;
            var2 = var4[var2];
            var6 = undefined;
            var2 = var3.bind(var6)(var2);
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 1;
            var5 = var4[var1];
            var8 = var3.bind(var6)(var5);
            var5 = var2.length;
            var7 = var1 === var5;
            var5 = 'Contains multiple values';
            var5 = var8.bind(var6)(var7, var5);
            var1 = var4[var1];
            var5 = var3.bind(var6)(var1);
            var1 = 0;
            var3 = var2[var1];
            var4 = null;
            var7 = var4 == var3;
            var4 = undefined;
            if(var7) { _fun0008_ip = 11; continue _fun0008 }
case 44:
            var4 = var3.type;
case 11:
            var3 = 'userMention';
            var4 = var3 === var4;
            var3 = 'First value is not a user mention';
            var3 = var5.bind(var6)(var4, var3);
            var1 = var2[var1];
            var1 = var1.userId;
            return var1;
        }
    };
    var _closure1_slot12 = var6;
    var5 = function getRoleId(arg1, arg2) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var3 = _closure1_slot9;
            var4 = arg1;
            var2 = arg2;
            var2 = var4[var2];
            var6 = undefined;
            var2 = var3.bind(var6)(var2);
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 1;
            var5 = var4[var1];
            var8 = var3.bind(var6)(var5);
            var5 = var2.length;
            var7 = var1 === var5;
            var5 = 'Contains multiple values';
            var5 = var8.bind(var6)(var7, var5);
            var1 = var4[var1];
            var5 = var3.bind(var6)(var1);
            var1 = 0;
            var3 = var2[var1];
            var4 = null;
            var7 = var4 == var3;
            var4 = undefined;
            if(var7) { _fun0009_ip = 11; continue _fun0009 }
case 44:
            var4 = var3.type;
case 11:
            var3 = 'roleMention';
            var4 = var3 === var4;
            var3 = 'First value is not a role mention';
            var3 = var5.bind(var6)(var4, var3);
            var1 = var2[var1];
            var1 = var1.roleId;
            return var1;
        }
    };
    var _closure1_slot13 = var5;
    var4 = function getString(arg1, arg2) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var2 = _closure1_slot7;
            var3 = arg1;
            var1 = arg2;
            var1 = var3[var1];
            var24 = undefined;
            var23 = var2.bind(var24)(var1);
            var1 = var23.bind(var24)();
            var2 = var1.done;
            var22 = '';
            var21 = global;
            var20 = '<@';
            var19 = '>';
            var18 = '<#';
            var17 = '<@&';
            var16 = '~';
            var15 = 0;
            var14 = '<';
            var13 = ':';
            var12 = 'a';
            var11 = 'customEmoji';
            var10 = 'emoji';
            var9 = 'roleMention';
            var8 = 'channelMention';
            var7 = 'userMention';
            var6 = 'textMention';
            var5 = 'text';
            var4 = var1;
            var3 = var22;
            var1 = var3;
            if(var2) { _fun0010_ip = 45; continue _fun0010 }
case 46:
            var2 = var4.value;
            var26 = var2.type;
            if(!(var5 !== var26)) { _fun0010_ip = 47; continue _fun0010 }
case 48:
            if(!(var6 !== var26)) { _fun0010_ip = 47; continue _fun0010 }
case 49:
            if(!(var7 !== var26)) { _fun0010_ip = 50; continue _fun0010 }
case 51:
            if(!(var8 !== var26)) { _fun0010_ip = 52; continue _fun0010 }
case 53:
            if(!(var9 !== var26)) { _fun0010_ip = 54; continue _fun0010 }
case 55:
            if(!(var10 !== var26)) { _fun0010_ip = 56; continue _fun0010 }
case 57:
            var25 = var3;
            if(!(var11 === var26)) { _fun0010_ip = 58; continue _fun0010 }
case 59:
            var26 = var2.animated;
            var29 = var22;
            if(!var26) { _fun0010_ip = 60; continue _fun0010 }
case 61:
            var29 = var12;
case 60:
            var28 = var2.name;
            var27 = var28.replace;
            var26 = /:/g;
            var27 = var27.bind(var28)(var26, var22);
            var26 = var27.split;
            var26 = var26.bind(var27)(var16);
            var33 = var26[var15];
            var31 = var2.emojiId;
            var26 = var21.HermesInternal;
            var26 = var26.concat;
            var36 = var14;
            var35 = var29;
            var34 = var13;
            var32 = var13;
            var30 = var19;
            var26 = var36[var26](var35, var34, var33, var32, var31, var30, var29);
            var25 = var3 + var26;
            _fun0010_ip = 58; continue _fun0010;
case 56:
            var26 = var2.surrogate;
            var25 = var3 + var26;
            _fun0010_ip = 58; continue _fun0010;
case 54:
            var27 = var2.roleId;
            var26 = var21.HermesInternal;
            var26 = var26.concat;
            var26 = var26.bind(var17)(var27, var19);
            var25 = var3 + var26;
            _fun0010_ip = 58; continue _fun0010;
case 52:
            var27 = var2.channelId;
            var26 = var21.HermesInternal;
            var26 = var26.concat;
            var26 = var26.bind(var18)(var27, var19);
            var25 = var3 + var26;
            _fun0010_ip = 58; continue _fun0010;
case 50:
            var27 = var2.userId;
            var26 = var21.HermesInternal;
            var26 = var26.concat;
            var26 = var26.bind(var20)(var27, var19);
            var25 = var3 + var26;
            _fun0010_ip = 58; continue _fun0010;
case 47:
            var2 = var2.text;
            var25 = var3 + var2;
case 58:
            var26 = var23.bind(var24)();
            var2 = var26.done;
            var3 = var25;
            var4 = var26;
            var1 = var3;
            if(!var2) { _fun0010_ip = 46; continue _fun0010 }
case 45:
            return var1;
        }
    };
    var _closure1_slot14 = var4;
    var1 = global;
    var14 = var1.Object;
    var13 = var14.defineProperty;
    var10 = {};
    var1 = true;
    var10['value'] = var1;
    var1 = '__esModule';
    var1 = var13.bind(var14)(var3, var1, var10);
    var1 = 0;
    var10 = var12[var1];
    var1 = undefined;
    var10 = var11.bind(var1)(var10);
    var10 = var10.TRUE_OPTION_NAME;
    var _closure1_slot6 = var10;
    var10 = 5;
    var10 = var12[var10];
    var12 = var11.bind(var1)(var10);
    var11 = var12.fileFinishedImporting;
    var10 = 'modules/application_commands/ApplicationCommandOptionUtils.tsx';
    var10 = var11.bind(var12)(var10);
    var3['filterEmpty'] = var9;
    var3['getBoolean'] = var8;
    var8 = function getOptionalBoolean(arg1, arg2) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var5 = arg1;
            var4 = arg2;
            var2 = var5[var4];
            var1 = null;
            var2 = var1 == var2;
            if(var2) { _fun0011_ip = 36; continue _fun0011 }
case 62:
            var3 = _closure1_slot10;
            var2 = undefined;
            var1 = var3.bind(var2)(var5, var4);
case 36:
            return var1;
        }
    };
    var3['getOptionalBoolean'] = var8;
    var3['getChannelId'] = var7;
    var7 = function getOptionalChannelId(arg1, arg2) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var5 = arg1;
            var4 = arg2;
            var2 = var5[var4];
            var1 = null;
            var2 = var1 == var2;
            if(var2) { _fun0012_ip = 36; continue _fun0012 }
case 62:
            var3 = _closure1_slot11;
            var2 = undefined;
            var1 = var3.bind(var2)(var5, var4);
case 36:
            return var1;
        }
    };
    var3['getOptionalChannelId'] = var7;
    var3['getUserId'] = var6;
    var6 = function getOptionalUserId(arg1, arg2) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var5 = arg1;
            var4 = arg2;
            var2 = var5[var4];
            var1 = null;
            var2 = var1 == var2;
            if(var2) { _fun0013_ip = 36; continue _fun0013 }
case 62:
            var3 = _closure1_slot12;
            var2 = undefined;
            var1 = var3.bind(var2)(var5, var4);
case 36:
            return var1;
        }
    };
    var3['getOptionalUserId'] = var6;
    var3['getRoleId'] = var5;
    var5 = function getOptionalRoleId(arg1, arg2) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var5 = arg1;
            var4 = arg2;
            var2 = var5[var4];
            var1 = null;
            var2 = var1 == var2;
            if(var2) { _fun0014_ip = 36; continue _fun0014 }
case 62:
            var3 = _closure1_slot13;
            var2 = undefined;
            var1 = var3.bind(var2)(var5, var4);
case 36:
            return var1;
        }
    };
    var3['getOptionalRoleId'] = var5;
    var3['getString'] = var4;
    var4 = function getOptionalString(arg1, arg2) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var5 = arg1;
            var4 = arg2;
            var2 = var5[var4];
            var1 = null;
            var2 = var1 == var2;
            if(var2) { _fun0015_ip = 36; continue _fun0015 }
case 62:
            var3 = _closure1_slot14;
            var2 = undefined;
            var1 = var3.bind(var2)(var5, var4);
case 36:
            return var1;
        }
    };
    var3['getOptionalString'] = var4;
    var4 = function normalizeNumericString(arg1, arg2) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var3 = arg1;
            var5 = arg2;
            var2 = _closure1_slot5;
            if(!(var3 !== var2)) { _fun0016_ip = 63; continue _fun0016 }
case 29:
            var _closure1_slot5 = var3;
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var6 = 2;
            var2 = var2[var6];
            var8 = undefined;
            var2 = var4.bind(var8)(var2);
            var2 = var2.numberParts;
            var2 = var2[var3];
            var3 = null;
            if(!(var3 == var2)) { _fun0016_ip = 44; continue _fun0016 }
case 64:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var6];
            var3 = var4.bind(var8)(var3);
            var3 = var3.numberParts;
            var2 = var3.en-US;
case 44:
            var11 = var2.group;
            var7 = var2.decimal;
            var4 = global;
            var12 = var4.RegExp;
            var3 = _closure1_slot1;
            var9 = _closure1_slot2;
            var2 = 3;
            var6 = var9[var2];
            var10 = var3.bind(var8)(var6);
            var6 = var10.escape;
            var14 = var6.bind(var10)(var11);
            var6 = var12.prototype;
            var11 = Object.create(var6, {constructor: {value: var12}});
            var6 = 'g';
            var15 = var11;
            var13 = var6;
            var10 = new var15[var12](var14, var13, var12);
            var10 = var10 instanceof Object ? var10 : var11;
            var _closure1_slot3 = var10;
            var4 = var4.RegExp;
            var2 = var9[var2];
            var3 = var3.bind(var8)(var2);
            var2 = var3.escape;
            var14 = var2.bind(var3)(var7);
            var3 = var4.prototype;
            var3 = Object.create(var3, {constructor: {value: var4}});
            var15 = var3;
            var2 = new var15[var4](var14, var13, var12);
            var2 = var2 instanceof Object ? var2 : var3;
            var _closure1_slot4 = var2;
case 63:
            var4 = var5.replace;
            var3 = _closure1_slot3;
            var2 = '';
            var4 = var4.bind(var5)(var3, var2);
            var3 = var4.replace;
            var2 = _closure1_slot4;
            var1 = '.';
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['normalizeNumericString'] = var4;
    var2 = function getInitialValuesFromInteractionOptions(arg1, arg2) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
            var1 = arg1;
            var _closure2_slot0 = var1;
            var1 = {};
            var _closure2_slot1 = var1;
            var6 = function _loop(arg1) {
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                    var2 = arg1;
                    var _closure3_slot0 = var2;
                    var4 = _closure2_slot0;
                    var8 = var4.options;
                    var6 = null;
                    var5 = var6 == var8;
                    var7 = undefined;
                    var4 = undefined;
                    if(var5) { _fun0018_ip = 65; continue _fun0018 }
case 36:
                    var5 = var8.find;
                    var1 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.name;
                        var1 = _closure3_slot0;
                        var1 = var1.name;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var4 = var5.bind(var8)(var1);
case 65:
                    var8 = var2.type;
                    var5 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var1 = 4;
                    var1 = var9[var1];
                    var1 = var5.bind(var7)(var1);
                    var1 = var1.ApplicationCommandOptionType;
                    var7 = var1.ATTACHMENT;
                    var1 = 0;
                    if(!(var8 !== var7)) { _fun0018_ip = 66; continue _fun0018 }
case 67:
                    if(!(var6 != var4)) { _fun0018_ip = 68; continue _fun0018 }
case 69:
                    var4 = var4.autocomplete;
                    var1 = 0;
                    if(var4) { _fun0018_ip = 66; continue _fun0018 }
case 68:
                    var4 = _closure2_slot1;
                    var3 = var2.name;
                    var4[var3] = var2;
                    var1 = undefined;
case 66:
                    return var1;
                }
            };
            var3 = _closure1_slot7;
            var5 = undefined;
            var2 = arg2;
            var4 = var3.bind(var5)(var2);
            var3 = var4.bind(var5)();
            var2 = var3.done;
            if(var2) { _fun0017_ip = 41; continue _fun0017 }
case 40:
            var2 = var3.value;
            var2 = var6.bind(var5)(var2);
            var7 = var4.bind(var5)();
            var2 = var7.done;
            var3 = var7;
            if(!var2) { _fun0017_ip = 40; continue _fun0017 }
case 41:
            return var1;
        }
    };
    var3['getInitialValuesFromInteractionOptions'] = var2;
    return var1;
})();