// app/modules/messages/GuildOfficialMessagesStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
case 2: // try_start_0
            var2 = global;
            var3 = var2.Boolean;
            var3 = var3.prototype;
            var4 = var3.valueOf;
            var3 = var4.call;
            var8 = var2.Reflect;
            var7 = var8.construct;
            var6 = var2.Boolean;
            var5 = new Array(0);
            var2 = function() {
                var1 = undefined;
                return var1;
            };
            var2 = var7.bind(var8)(var6, var5, var2);
            var2 = var3.bind(var4)(var2);
            var2 = !var2;
            var _closure2_slot0 = var2;
case 3: // try_end0
            _fun0001_ip = 4; continue _fun0001;
case 5: // catch_target0
            CatchBlockStart(arg_register=1);
case 4:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot14 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
case 6:
            if(var2) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var2 = var3["@@iterator"];
case 8:
            if(var2) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0002_ip = 16; continue _fun0002 }
case 17:
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
            if(!var7) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var7 = var3.constructor;
case 18:
            var10 = var9;
            if(!var7) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            var7 = var3.constructor;
            var10 = var7.name;
case 20:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0002_ip = 22; continue _fun0002 }
case 23:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0002_ip = 22; continue _fun0002 }
case 24:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0002_ip = 25; continue _fun0002 }
case 26:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0002_ip = 27; continue _fun0002 }
case 25:
            var9 = _closure1_slot16;
            var7 = var9.bind(var8)(var3, var8);
case 27:
            _fun0002_ip = 28; continue _fun0002;
case 22:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
case 28:
            var6 = var7;
            _fun0002_ip = 14; continue _fun0002;
case 16:
            var7 = _closure1_slot16;
            var6 = var7.bind(var8)(var3, var8);
case 14:
            var4 = var6;
            if(var4) { _fun0002_ip = 12; continue _fun0002 }
case 29:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
case 12:
            if(!var4) { _fun0002_ip = 30; continue _fun0002 }
case 31:
            _closure2_slot0 = var4;
case 30:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0003_ip = 32; continue _fun0003 }
case 33:
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
                    _fun0003_ip = 34; continue _fun0003;
case 32:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
case 34:
                    return var1;
                }
            };
            return var1;
case 10:
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
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0004_ip = 35; continue _fun0004 }
case 36:
            var2 = var4.length;
            var1 = var3 > var2;
case 35:
            var2 = undefined;
            if(!var1) { _fun0004_ip = 37; continue _fun0004 }
case 38:
            var2 = var4.length;
case 37:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0004_ip = 39; continue _fun0004 }
case 8:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0004_ip = 8; continue _fun0004 }
case 39:
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var1 = function findMessage(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var4 = _closure1_slot7;
            var3 = var4.getChannel;
            var1 = arg1;
            var4 = var3.bind(var4)(var1);
            var1 = null;
            var3 = var1 == var4;
            var5 = undefined;
            if(var3) { _fun0005_ip = 40; continue _fun0005 }
case 41:
            var3 = var4.getGuildId;
            var5 = var3.bind(var4)();
case 40:
            if(!(var1 != var5)) { _fun0005_ip = 15; continue _fun0005 }
case 42:
            var2 = _closure1_slot13;
            var2 = var2[var5];
            if(!(var1 != var2)) { _fun0005_ip = 43; continue _fun0005 }
case 44:
            var3 = var2.messages;
            var2 = arg2;
            var4 = var3[var2];
            var3 = var1 == var4;
            var2 = null;
            if(var3) { _fun0005_ip = 45; continue _fun0005 }
case 46:
            var3 = {};
            var3['guildId'] = var5;
            var3['message'] = var4;
            var2 = var3;
case 45:
            return var2;
case 43:
            return var1;
case 15:
            return var1;
        }
    };
    var _closure1_slot17 = var1;
    var1 = function updateGuildState(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var4 = arg1;
            var1 = _closure1_slot13;
            var7 = var1[var4];
            var1 = null;
            if(!(var1 != var7)) { _fun0006_ip = 47; continue _fun0006 }
case 33:
            var1 = {};
            var8 = _closure1_slot13;
            var9 = var1;
            var3 = copyDataProperties(var9, var8);
            var3 = {};
            var9 = var3;
            var8 = var7;
            var5 = copyDataProperties(var9, var8);
            var6 = arg2;
            var5 = undefined;
            var8 = var6.bind(var5)(var7);
            var9 = var3;
            var5 = copyDataProperties(var9, var8);
            var1[3] = var3;
            _closure1_slot13 = var1;
case 47:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var1 = function prependRecord(arg1, arg2) {
        var1 = arg2;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot18;
        var1 = undefined;
        var3 = arg1;
        var2 = function(arg1) {
            var3 = arg1;
            var1 = {};
            var4 = _closure2_slot0;
            var5 = var4.id;
            var2 = new Array(1);
            var2[0] = var5;
            var8 = var3.ids;
            var7 = 1;
            var9 = var2;
            var5 = arraySpread(var9, var8, var7);
            var1['ids'] = var2;
            var2 = {};
            var8 = var3.messages;
            var9 = var2;
            var3 = copyDataProperties(var9, var8);
            var3 = var4.id;
            var2[2] = var4;
            var1['messages'] = var2;
            return var1;
        };
        var2 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var _closure1_slot19 = var1;
    var1 = function updateMessage(arg1, arg2) {
        var1 = arg2;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot18;
        var1 = undefined;
        var3 = arg1;
        var2 = function(arg1) {
            var1 = {};
            var2 = {};
            var3 = arg1;
            var5 = var3.messages;
            var6 = var2;
            var3 = copyDataProperties(var6, var5);
            var4 = _closure2_slot0;
            var3 = var4.id;
            var2[2] = var4;
            var1['messages'] = var2;
            return var1;
        };
        var2 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var _closure1_slot20 = var1;
    var10 = function handleChannelDelete(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var1 = arg1;
            var12 = var1.channel;
            var1 = undefined;
            var _closure2_slot0 = var1;
            var _closure2_slot1 = var1;
            var4 = var12.guild_id;
            var11 = null;
            if(!(var11 != var4)) { _fun0007_ip = 48; continue _fun0007 }
case 49:
            var5 = _closure1_slot13;
            var5 = var5[var4];
            if(!(var11 != var5)) { _fun0007_ip = 50; continue _fun0007 }
case 51:
            var6 = new Array(0);
            _closure2_slot0 = var6;
            var10 = {};
            var16 = var5.messages;
            var17 = var10;
            var7 = copyDataProperties(var17, var16);
            _closure2_slot1 = var10;
            var8 = _closure1_slot15;
            var7 = var5.ids;
            var9 = var8.bind(var1)(var7);
            var8 = var9.bind(var1)();
            var7 = var8.done;
            if(var7) { _fun0007_ip = 52; continue _fun0007 }
case 53:
            var7 = var8.value;
            var13 = var5.messages;
            var13 = var13[var7];
            var15 = var11 == var13;
            var14 = undefined;
            if(var15) { _fun0007_ip = 54; continue _fun0007 }
case 55:
            var14 = var13.channel_id;
case 54:
            var13 = var12.id;
            if(!(var14 !== var13)) { _fun0007_ip = 56; continue _fun0007 }
case 57:
            var13 = var6.push;
            var13 = var13.bind(var6)(var7);
            _fun0007_ip = 58; continue _fun0007;
case 56:
            var7 = delete var10[var7];
case 58:
            var13 = var9.bind(var1)();
            var7 = var13.done;
            var8 = var13;
            if(!var7) { _fun0007_ip = 53; continue _fun0007 }
case 52:
            var6 = var6.length;
            var5 = var5.ids;
            var5 = var5.length;
            if(!(var6 !== var5)) { _fun0007_ip = 59; continue _fun0007 }
case 24:
            var3 = _closure1_slot18;
            var2 = function() {
                var1 = {};
                var3 = _closure2_slot0;
                var1['ids'] = var3;
                var2 = _closure2_slot1;
                var1['messages'] = var2;
                return var1;
            };
            var2 = var3.bind(var1)(var4, var2);
            return var1;
case 59:
            var1 = false;
            return var1;
case 50:
            var1 = false;
            return var1;
case 48:
            var1 = false;
            return var1;
        }
    };
    var4 = function handleRelationshipUpdate() {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var3 = {};
            var1 = global;
            var5 = var1.Object;
            var4 = var5.keys;
            var1 = _closure1_slot13;
            var16 = var4.bind(var5)(var1);
            var1 = var16.length;
            var15 = 0;
            var6 = var15 < var1;
            var4 = false;
            var1 = undefined;
            var14 = 'messages';
            var12 = null;
            var11 = false;
            var10 = undefined;
            var9 = undefined;
            var8 = undefined;
            var7 = undefined;
            var5 = false;
            if(!var6) { _fun0008_ip = 60; continue _fun0008 }
case 61:
            var18 = var16[var15];
            var6 = _closure1_slot13;
            var6 = var6[var18];
            var19 = _closure1_slot15;
            var17 = var6.ids;
            var24 = var19.bind(var1)(var17);
            var19 = var24.bind(var1)();
            var17 = var19.done;
            var21 = var8;
            var20 = var7;
            var23 = var19;
            var22 = null;
            var19 = null;
            var8 = var21;
            var7 = var20;
            if(var17) { _fun0008_ip = 62; continue _fun0008 }
case 63:
            var28 = var23.value;
            var17 = var6.messages;
            var27 = var17[var28];
            var29 = var22;
            if(!(var12 != var27)) { _fun0008_ip = 64; continue _fun0008 }
case 65:
            var25 = _closure1_slot10;
            var17 = var25.isBlockedForMessage;
            var25 = var17.bind(var25)(var27);
            var26 = _closure1_slot10;
            var17 = var26.isIgnoredForMessage;
            var17 = var17.bind(var26)(var27);
            var26 = var27.blocked;
            var26 = var26 === var25;
            if(!var26) { _fun0008_ip = 26; continue _fun0008 }
case 24:
            var30 = var27.ignored;
            var26 = var30 === var17;
case 26:
            var29 = var22;
            var21 = var25;
            var20 = var17;
            if(var26) { _fun0008_ip = 64; continue _fun0008 }
case 66:
            var26 = var22;
            if(!(var12 == var22)) { _fun0008_ip = 67; continue _fun0008 }
case 68:
            var30 = {};
            var33 = var6.messages;
            var34 = var30;
            var31 = copyDataProperties(var34, var33);
            var26 = var30;
case 67:
            var31 = var27.merge;
            var30 = {};
            var30['blocked'] = var25;
            var30['ignored'] = var17;
            var30 = var31.bind(var27)(var30);
            var26[var28] = var30;
            var29 = var26;
            var21 = var25;
            var20 = var17;
case 64:
            var30 = var24.bind(var1)();
            var17 = var30.done;
            var22 = var29;
            var23 = var30;
            var19 = var22;
            var10 = var28;
            var9 = var27;
            var8 = var21;
            var7 = var20;
            if(!var17) { _fun0008_ip = 63; continue _fun0008 }
case 62:
            if(!(var12 != var19)) { _fun0008_ip = 69; continue _fun0008 }
case 70:
            var17 = {};
            var34 = var17;
            var33 = var6;
            var20 = copyDataProperties(var34, var33);
            var17[13] = var19;
            var3[var18] = var17;
            var17 = true;
            _fun0008_ip = 71; continue _fun0008;
case 69:
            var3[var18] = var6;
            var17 = var11;
case 71:
            var15 = var15 + 1;
            var6 = var16.length;
            var11 = var17;
            var5 = var11;
            if(var15 < var6) { _fun0008_ip = 61; continue _fun0008 }
case 60:
            if(var5) { _fun0008_ip = 72; continue _fun0008 }
case 73:
            return var4;
case 72:
            _closure1_slot13 = var3;
            return var1;
        }
    };
    var1 = global;
    var11 = var1.Object;
    var8 = var11.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var11)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 5;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 6;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 7;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot9 = var2;
    var2 = 8;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot10 = var2;
    var2 = 9;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot11 = var2;
    var2 = 10;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.MessageFlags;
    var _closure1_slot12 = var2;
    var2 = {};
    var _closure1_slot13 = var2;
    var2 = 13;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function GuildOfficialMessagesStore() {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot2;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot5;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot4;
                var1 = _closure1_slot14;
                var1 = var1.bind(var3)();
                if(var1) { _fun0009_ip = 74; continue _fun0009 }
case 75:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0009_ip = 76; continue _fun0009;
case 74:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 76:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot6;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot3;
        var5 = {};
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value() {
            var7 = this;
            var6 = var7.waitFor;
            var12 = _closure1_slot7;
            var11 = _closure1_slot8;
            var10 = _closure1_slot9;
            var9 = _closure1_slot10;
            var8 = _closure1_slot11;
            var13 = var7;
            var1 = var13[var6](var12, var11, var10, var9, var8, var7);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(7);
        var1[0] = var5;
        var5 = {};
        var7 = 'getState';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var2 = _closure1_slot13;
            var1 = arg1;
            var1 = var2[var1];
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getMessage';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var2 = _closure1_slot13;
                var1 = arg1;
                var2 = var2[var1];
                var1 = null;
                var3 = var1 == var2;
                var1 = undefined;
                if(var3) { _fun0010_ip = 77; continue _fun0010 }
case 78:
                var3 = var2.messages;
                var2 = arg2;
                var1 = var3[var2];
case 77:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getMessages';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var3 = _closure1_slot13;
                var2 = arg1;
                var2 = var3[var2];
                var _closure3_slot0 = var2;
                var3 = null;
                if(!(var3 != var2)) { _fun0011_ip = 79; continue _fun0011 }
case 80:
                var4 = var2.ids;
                var3 = var4.map;
                var2 = function(arg1) {
                    var1 = _closure3_slot0;
                    var2 = var1.messages;
                    var1 = arg1;
                    var1 = var2[var1];
                    return var1;
                };
                var3 = var3.bind(var4)(var2);
                var2 = var3.filter;
                var1 = function(arg1) {
                    var2 = null;
                    var1 = arg1;
                    var1 = var2 != var1;
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                _fun0011_ip = 3; continue _fun0011;
case 79:
                var1 = new Array(0);
case 3:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'isLoading';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var2 = _closure1_slot13;
                var1 = arg1;
                var3 = var2[var1];
                var1 = null;
                var4 = var1 == var3;
                var2 = undefined;
                if(var4) { _fun0012_ip = 41; continue _fun0012 }
case 78:
                var2 = var3.loading;
case 41:
                var1 = var1 != var2;
                if(!var1) { _fun0012_ip = 40; continue _fun0012 }
case 77:
                var1 = var2;
case 40:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'isLoaded';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                var2 = _closure1_slot13;
                var1 = arg1;
                var3 = var2[var1];
                var1 = null;
                var4 = var1 == var3;
                var2 = undefined;
                if(var4) { _fun0013_ip = 41; continue _fun0013 }
case 78:
                var2 = var3.loaded;
case 41:
                var1 = var1 != var2;
                if(!var1) { _fun0013_ip = 40; continue _fun0013 }
case 77:
                var1 = var2;
case 40:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'hasMore';
        var5['key'] = var7;
        var6 = function value(arg1) {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                var2 = _closure1_slot13;
                var1 = arg1;
                var3 = var2[var1];
                var1 = null;
                var4 = var1 == var3;
                var2 = undefined;
                if(var4) { _fun0014_ip = 41; continue _fun0014 }
case 78:
                var2 = var3.hasMore;
case 41:
                var1 = var1 != var2;
                if(!var1) { _fun0014_ip = 40; continue _fun0014 }
case 77:
                var1 = var2;
case 40:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[6] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'GuildOfficialMessagesStore';
    var8['displayName'] = var2;
    var2 = 14;
    var2 = var6[var2];
    var14 = var7.bind(var1)(var2);
    var2 = {};
    var11 = function handleConnectionOpen() {
        var1 = {};
        _closure1_slot13 = var1;
        var1 = undefined;
        return var1;
    };
    var2['CONNECTION_OPEN'] = var11;
    var11 = function handleLoadOfficialMessages(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var1 = arg1;
            var5 = var1.guildId;
            var4 = var1.before;
            var1 = _closure1_slot13;
            var6 = var1[var5];
            var2 = null;
            var7 = var2 == var6;
            var1 = undefined;
            var8 = undefined;
            if(var7) { _fun0015_ip = 81; continue _fun0015 }
case 77:
            var8 = var6.loading;
case 81:
            var7 = true;
            if(!(var7 !== var8)) { _fun0015_ip = 18; continue _fun0015 }
case 82:
            if(!(var2 == var4)) { _fun0015_ip = 17; continue _fun0015 }
case 83:
            var4 = {};
            var10 = _closure1_slot13;
            var11 = var4;
            var8 = copyDataProperties(var11, var10);
            var8 = {'ids': null, 'messages': null, 'hasMore': false, 'loading': true, 'loaded': false, 'error': false};
            var9 = new Array(0);
            var8['ids'] = var9;
            var9 = {};
            var8['messages'] = var9;
            var4[4] = var8;
            _closure1_slot13 = var4;
            _fun0015_ip = 84; continue _fun0015;
case 17:
            if(!(var2 != var6)) { _fun0015_ip = 85; continue _fun0015 }
case 86:
            var2 = {};
            var10 = _closure1_slot13;
            var11 = var2;
            var4 = copyDataProperties(var11, var10);
            var4 = {};
            var11 = var4;
            var10 = var6;
            var6 = copyDataProperties(var11, var10);
            var6 = 'loading';
            var4[5] = var7;
            var2[4] = var4;
            _closure1_slot13 = var2;
case 84:
            return var1;
case 85:
            var1 = false;
            return var1;
case 18:
            var1 = false;
            return var1;
        }
    };
    var2['LOAD_OFFICIAL_MESSAGES'] = var11;
    var11 = function handleLoadOfficialMessagesSuccess(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var1 = arg1;
            var4 = var1.guildId;
            var3 = var1.messages;
            var _closure2_slot0 = var3;
            var3 = var1.hasMore;
            var _closure2_slot1 = var3;
            var1 = var1.before;
            var _closure2_slot2 = var1;
            var3 = _closure1_slot13;
            var5 = var3[var4];
            var3 = null;
            if(!(var3 != var5)) { _fun0016_ip = 87; continue _fun0016 }
case 44:
            var3 = _closure1_slot18;
            var1 = undefined;
            var2 = function(arg1) {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                    var5 = arg1;
                    var1 = _closure2_slot2;
                    var10 = null;
                    if(!(var10 == var1)) { _fun0017_ip = 88; continue _fun0017 }
case 89:
                    var4 = new Array(0);
                    _fun0017_ip = 81; continue _fun0017;
case 88:
                    var14 = var5.ids;
                    var1 = new Array(0);
                    var13 = 0;
                    var15 = var1;
                    var3 = arraySpread(var15, var14, var13);
                    var4 = var1;
case 81:
                    var1 = _closure2_slot2;
                    if(!(var10 == var1)) { _fun0017_ip = 32; continue _fun0017 }
case 51:
                    var3 = {};
                    _fun0017_ip = 5; continue _fun0017;
case 32:
                    var1 = {};
                    var14 = var5.messages;
                    var15 = var1;
                    var5 = copyDataProperties(var15, var14);
                    var3 = var1;
case 5:
                    var5 = _closure1_slot15;
                    var1 = _closure2_slot0;
                    var8 = undefined;
                    var7 = var5.bind(var8)(var1);
                    var5 = var7.bind(var8)();
                    var1 = var5.done;
                    var6 = 11;
                    if(var1) { _fun0017_ip = 90; continue _fun0017 }
case 91:
                    var12 = var5.value;
                    var11 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var11 = var11.bind(var8)(var1);
                    var1 = var11.createMessageRecord;
                    var11 = var1.bind(var11)(var12);
                    var1 = var11.id;
                    var1 = var3[var1];
                    if(!(var10 == var1)) { _fun0017_ip = 92; continue _fun0017 }
case 93:
                    var12 = var4.push;
                    var1 = var11.id;
                    var1 = var12.bind(var4)(var1);
case 92:
                    var1 = var11.id;
                    var3[var1] = var11;
                    var11 = var7.bind(var8)();
                    var1 = var11.done;
                    var5 = var11;
                    if(!var1) { _fun0017_ip = 91; continue _fun0017 }
case 90:
                    var1 = {'ids': null, 'messages': null, 'hasMore': null, 'loading': false, 'loaded': true, 'error': false};
                    var1['ids'] = var4;
                    var1['messages'] = var3;
                    var2 = _closure2_slot1;
                    var1['hasMore'] = var2;
                    return var1;
                }
            };
            var2 = var3.bind(var1)(var4, var2);
            return var1;
case 87:
            var1 = false;
            return var1;
        }
    };
    var2['LOAD_OFFICIAL_MESSAGES_SUCCESS'] = var11;
    var11 = function handleLoadOfficialMessagesFailure(arg1) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
            var2 = arg1;
            var4 = var2.guildId;
            var5 = var2.before;
            var2 = _closure1_slot13;
            var6 = var2[var4];
            var2 = null;
            if(!(var2 != var6)) { _fun0018_ip = 34; continue _fun0018 }
case 37:
            var3 = _closure1_slot18;
            if(!(var2 == var5)) { _fun0018_ip = 82; continue _fun0018 }
case 40:
            var2 = function() {
                var1 = {'loading': false, 'error': true};
                return var1;
            };
            _fun0018_ip = 44; continue _fun0018;
case 82:
            var2 = function() {
                var1 = {};
                var2 = false;
                var1['loading'] = var2;
                return var1;
            };
case 44:
            var1 = undefined;
            var2 = var3.bind(var1)(var4, var2);
            return var1;
case 34:
            var1 = false;
            return var1;
        }
    };
    var2['LOAD_OFFICIAL_MESSAGES_FAILURE'] = var11;
    var11 = function handleGuildDelete(arg1) {
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
            var1 = arg1;
            var3 = var1.guild;
            var4 = _closure1_slot13;
            var1 = var3.id;
            var4 = var4[var1];
            var1 = null;
            if(!(var1 != var4)) { _fun0019_ip = 94; continue _fun0019 }
case 7:
            var1 = {};
            var5 = _closure1_slot13;
            var6 = var1;
            var4 = copyDataProperties(var6, var5);
            var3 = var3.id;
            var3 = delete var1[var3];
            _closure1_slot13 = var1;
            var1 = undefined;
            return var1;
case 94:
            var1 = false;
            return var1;
        }
    };
    var2['GUILD_DELETE'] = var11;
    var2['CHANNEL_DELETE'] = var10;
    var2['THREAD_DELETE'] = var10;
    var10 = function handleMessageCreate(arg1) {
        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
            var1 = arg1;
            var8 = var1.message;
            var6 = var1.guildId;
            var2 = var1.optimistic;
            var1 = var1.isPushNotification;
            if(var2) { _fun0020_ip = 95; continue _fun0020 }
case 41:
            if(var1) { _fun0020_ip = 95; continue _fun0020 }
case 96:
            var5 = null;
            if(!(var5 != var6)) { _fun0020_ip = 97; continue _fun0020 }
case 6:
            var2 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 12;
            var1 = var3[var1];
            var3 = undefined;
            var9 = var2.bind(var3)(var1);
            var7 = var9.hasFlag;
            var1 = var8.flags;
            var10 = var5 != var1;
            var2 = 0;
            if(!var10) { _fun0020_ip = 43; continue _fun0020 }
case 98:
            var2 = var1;
case 43:
            var1 = _closure1_slot12;
            var1 = var1.IS_GUILD_OFFICIAL;
            var1 = var7.bind(var9)(var2, var1);
            if(!var1) { _fun0020_ip = 97; continue _fun0020 }
case 99:
            var1 = _closure1_slot13;
            var2 = var1[var6];
            var1 = var5 != var2;
            if(!var1) { _fun0020_ip = 100; continue _fun0020 }
case 101:
            var7 = var2.messages;
            var2 = var8.id;
            var2 = var7[var2];
            var2 = var5 == var2;
            if(!var2) { _fun0020_ip = 102; continue _fun0020 }
case 103:
            var5 = _closure1_slot19;
            var7 = _closure1_slot0;
            var9 = _closure1_slot1;
            var4 = 11;
            var4 = var9[var4];
            var7 = var7.bind(var3)(var4);
            var4 = var7.createMessageRecord;
            var4 = var4.bind(var7)(var8);
            var4 = var5.bind(var3)(var6, var4);
            var2 = undefined;
case 102:
            var1 = var2;
case 100:
            return var1;
case 97:
            var1 = false;
            return var1;
case 95:
            var1 = false;
            return var1;
        }
    };
    var2['MESSAGE_CREATE'] = var10;
    var10 = function handleMessageUpdate(arg1) {
        _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
            var1 = arg1;
            var8 = var1.message;
            var2 = undefined;
            var _closure2_slot0 = var2;
            var3 = var8.id;
            var1 = null;
            if(!(var1 != var3)) { _fun0021_ip = 104; continue _fun0021 }
case 7:
            var7 = _closure1_slot7;
            var5 = var7.getChannel;
            var4 = var8.channel_id;
            var7 = var5.bind(var7)(var4);
            var4 = var1 == var7;
            var5 = undefined;
            if(var4) { _fun0021_ip = 47; continue _fun0021 }
case 11:
            var4 = var7.getGuildId;
            var5 = var4.bind(var7)();
case 47:
            if(!(var1 != var5)) { _fun0021_ip = 105; continue _fun0021 }
case 87:
            var4 = _closure1_slot13;
            var4 = var4[var5];
            if(!(var1 != var4)) { _fun0021_ip = 106; continue _fun0021 }
case 107:
            var7 = var4.messages;
            var4 = var8.id;
            var7 = var7[var4];
            var4 = var8.author;
            if(!(var1 != var4)) { _fun0021_ip = 108; continue _fun0021 }
case 109:
            var9 = _closure1_slot0;
            var10 = _closure1_slot1;
            var4 = 12;
            var4 = var10[var4];
            var11 = var9.bind(var2)(var4);
            var10 = var11.hasFlag;
            var4 = var8.flags;
            var12 = var1 != var4;
            var9 = 0;
            if(!var12) { _fun0021_ip = 110; continue _fun0021 }
case 111:
            var9 = var4;
case 110:
            var4 = _closure1_slot12;
            var4 = var4.IS_GUILD_OFFICIAL;
            var4 = var10.bind(var11)(var9, var4);
            if(!var4) { _fun0021_ip = 23; continue _fun0021 }
case 112:
            if(!(var1 != var7)) { _fun0021_ip = 113; continue _fun0021 }
case 23:
            if(var4) { _fun0021_ip = 48; continue _fun0021 }
case 114:
            if(!(var1 != var7)) { _fun0021_ip = 48; continue _fun0021 }
case 115:
            var9 = var8.id;
            _closure2_slot0 = var9;
            var9 = _closure1_slot18;
            var6 = function(arg1) {
                var3 = arg1;
                var2 = {};
                var6 = var3.messages;
                var7 = var2;
                var1 = copyDataProperties(var7, var6);
                var1 = _closure2_slot0;
                var1 = delete var2[var1];
                var1 = {};
                var5 = var3.ids;
                var4 = var5.filter;
                var3 = function(arg1) {
                    var2 = _closure2_slot0;
                    var1 = arg1;
                    var1 = var1 !== var2;
                    return var1;
                };
                var3 = var4.bind(var5)(var3);
                var1['ids'] = var3;
                var1['messages'] = var2;
                return var1;
            };
            var6 = var9.bind(var2)(var5, var6);
            _fun0021_ip = 70; continue _fun0021;
case 48:
            if(!var4) { _fun0021_ip = 116; continue _fun0021 }
case 117:
            if(!(var1 != var7)) { _fun0021_ip = 116; continue _fun0021 }
case 118:
            var6 = _closure1_slot20;
            var9 = _closure1_slot0;
            var10 = _closure1_slot1;
            var4 = 11;
            var4 = var10[var4];
            var9 = var9.bind(var2)(var4);
            var4 = var9.updateMessageRecord;
            var4 = var4.bind(var9)(var7, var8);
            var4 = var6.bind(var2)(var5, var4);
            _fun0021_ip = 70; continue _fun0021;
case 116:
            var4 = false;
            return var4;
case 113:
            var6 = _closure1_slot19;
            var9 = _closure1_slot0;
            var10 = _closure1_slot1;
            var4 = 11;
            var4 = var10[var4];
            var9 = var9.bind(var2)(var4);
            var4 = var9.createMessageRecord;
            var4 = var4.bind(var9)(var8);
            var4 = var6.bind(var2)(var5, var4);
case 70:
            return var2;
case 108:
            var1 = var1 != var7;
            if(!var1) { _fun0021_ip = 60; continue _fun0021 }
case 119:
            var4 = _closure1_slot20;
            var6 = _closure1_slot0;
            var9 = _closure1_slot1;
            var3 = 11;
            var3 = var9[var3];
            var6 = var6.bind(var2)(var3);
            var3 = var6.updateMessageRecord;
            var3 = var3.bind(var6)(var7, var8);
            var3 = var4.bind(var2)(var5, var3);
            var1 = undefined;
case 60:
            return var1;
case 106:
            var1 = false;
            return var1;
case 105:
            var1 = false;
            return var1;
case 104:
            var1 = false;
            return var1;
        }
    };
    var2['MESSAGE_UPDATE'] = var10;
    var10 = function handleMessageReactionAdd(arg1) {
        _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
            var1 = arg1;
            var10 = var1.channelId;
            var5 = var1.messageId;
            var11 = var1.userId;
            var9 = var1.emoji;
            var2 = var1.optimistic;
            var8 = var1.reactionType;
            var7 = var1.colors;
            var4 = _closure1_slot11;
            var1 = var4.getCurrentUser;
            var12 = var1.bind(var4)();
            var4 = null;
            var13 = var4 == var12;
            var1 = undefined;
            var6 = undefined;
            if(var13) { _fun0022_ip = 120; continue _fun0022 }
case 39:
            var6 = var12.id;
case 120:
            var6 = var6 === var11;
            if(!var2) { _fun0022_ip = 121; continue _fun0022 }
case 122:
            if(var6) { _fun0022_ip = 121; continue _fun0022 }
case 123:
            var2 = false;
            return var2;
case 121:
            var2 = _closure1_slot17;
            var2 = var2.bind(var1)(var10, var5);
            if(!(var4 != var2)) { _fun0022_ip = 103; continue _fun0022 }
case 124:
            var5 = var2.message;
            var4 = var5.addReaction;
            var18 = var5;
            var17 = var9;
            var16 = var6;
            var15 = var7;
            var14 = var8;
            var4 = var18[var4](var17, var16, var15, var14, var13);
            var3 = _closure1_slot20;
            var2 = var2.guildId;
            var2 = var3.bind(var1)(var2, var4);
            return var1;
case 103:
            var1 = false;
            return var1;
        }
    };
    var2['MESSAGE_REACTION_ADD'] = var10;
    var10 = function handleMessageReactionRemove(arg1) {
        _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
            var1 = arg1;
            var9 = var1.channelId;
            var5 = var1.messageId;
            var10 = var1.userId;
            var8 = var1.emoji;
            var2 = var1.optimistic;
            var7 = var1.reactionType;
            var4 = _closure1_slot11;
            var1 = var4.getCurrentUser;
            var11 = var1.bind(var4)();
            var4 = null;
            var12 = var4 == var11;
            var1 = undefined;
            var6 = undefined;
            if(var12) { _fun0023_ip = 39; continue _fun0023 }
case 125:
            var6 = var11.id;
case 39:
            var6 = var6 === var10;
            if(!var2) { _fun0023_ip = 126; continue _fun0023 }
case 127:
            if(var6) { _fun0023_ip = 126; continue _fun0023 }
case 128:
            var2 = false;
            return var2;
case 126:
            var2 = _closure1_slot17;
            var2 = var2.bind(var1)(var9, var5);
            if(!(var4 != var2)) { _fun0023_ip = 129; continue _fun0023 }
case 130:
            var5 = var2.message;
            var4 = var5.removeReaction;
            var4 = var4.bind(var5)(var8, var6, var7);
            var3 = _closure1_slot20;
            var2 = var2.guildId;
            var2 = var3.bind(var1)(var2, var4);
            return var1;
case 129:
            var1 = false;
            return var1;
        }
    };
    var2['MESSAGE_REACTION_REMOVE'] = var10;
    var10 = function handleMessageReactionRemoveAll(arg1) {
        _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
            var1 = arg1;
            var5 = var1.channelId;
            var4 = var1.messageId;
            var2 = _closure1_slot17;
            var1 = undefined;
            var2 = var2.bind(var1)(var5, var4);
            var4 = null;
            if(!(var4 != var2)) { _fun0024_ip = 120; continue _fun0024 }
case 49:
            var7 = var2.message;
            var6 = var7.set;
            var5 = 'reactions';
            var4 = new Array(0);
            var4 = var6.bind(var7)(var5, var4);
            var3 = _closure1_slot20;
            var2 = var2.guildId;
            var2 = var3.bind(var1)(var2, var4);
            return var1;
case 120:
            var1 = false;
            return var1;
        }
    };
    var2['MESSAGE_REACTION_REMOVE_ALL'] = var10;
    var10 = function handleMessageReactionRemoveEmoji(arg1) {
        _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
            var1 = arg1;
            var5 = var1.channelId;
            var4 = var1.messageId;
            var6 = var1.emoji;
            var2 = _closure1_slot17;
            var1 = undefined;
            var2 = var2.bind(var1)(var5, var4);
            var4 = null;
            if(!(var4 != var2)) { _fun0025_ip = 131; continue _fun0025 }
case 132:
            var5 = var2.message;
            var4 = var5.removeReactionsForEmoji;
            var4 = var4.bind(var5)(var6);
            var3 = _closure1_slot20;
            var2 = var2.guildId;
            var2 = var3.bind(var1)(var2, var4);
            return var1;
case 131:
            var1 = false;
            return var1;
        }
    };
    var2['MESSAGE_REACTION_REMOVE_EMOJI'] = var10;
    var10 = function handleMessageDelete(arg1) {
        _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
            var1 = arg1;
            var9 = var1.id;
            var _closure2_slot0 = var9;
            var6 = var1.guildId;
            var7 = null;
            var1 = var7 != var6;
            if(!var1) { _fun0026_ip = 121; continue _fun0026 }
case 38:
            var2 = _closure1_slot13;
            var8 = var2[var6];
            var10 = var7 == var8;
            var3 = undefined;
            var2 = undefined;
            if(var10) { _fun0026_ip = 94; continue _fun0026 }
case 82:
            var8 = var8.messages;
            var2 = var8[var9];
case 94:
            var2 = var7 != var2;
            if(!var2) { _fun0026_ip = 13; continue _fun0026 }
case 34:
            var5 = _closure1_slot18;
            var4 = function(arg1) {
                var3 = arg1;
                var2 = {};
                var6 = var3.messages;
                var7 = var2;
                var1 = copyDataProperties(var7, var6);
                var1 = _closure2_slot0;
                var1 = delete var2[var1];
                var1 = {};
                var5 = var3.ids;
                var4 = var5.filter;
                var3 = function(arg1) {
                    var2 = _closure2_slot0;
                    var1 = arg1;
                    var1 = var1 !== var2;
                    return var1;
                };
                var3 = var4.bind(var5)(var3);
                var1['ids'] = var3;
                var1['messages'] = var2;
                return var1;
            };
            var4 = var5.bind(var3)(var6, var4);
            var2 = undefined;
case 13:
            var1 = var2;
case 121:
            return var1;
        }
    };
    var2['MESSAGE_DELETE'] = var10;
    var9 = function handleMessageDeleteBulk(arg1) {
        _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
            var1 = arg1;
            var8 = var1.ids;
            var4 = var1.guildId;
            var1 = undefined;
            var _closure2_slot0 = var1;
            var _closure2_slot1 = var1;
            var _closure2_slot2 = var1;
            var6 = null;
            if(!(var6 != var4)) { _fun0027_ip = 22; continue _fun0027 }
case 133:
            var5 = _closure1_slot13;
            var5 = var5[var4];
            if(!(var6 != var5)) { _fun0027_ip = 134; continue _fun0027 }
case 44:
            var6 = global;
            var6 = var6.Set;
            var7 = var6.prototype;
            var7 = Object.create(var7, {constructor: {value: var6}});
            var13 = var7;
            var12 = var8;
            var6 = new var13[var6](var12, var11);
            var9 = var6 instanceof Object ? var6 : var7;
            _closure2_slot0 = var9;
            var8 = var5.ids;
            var7 = var8.filter;
            var6 = function(arg1) {
                var3 = _closure2_slot0;
                var2 = var3.has;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                return var1;
            };
            var6 = var7.bind(var8)(var6);
            _closure2_slot1 = var6;
            var7 = var6.length;
            var6 = var5.ids;
            var6 = var6.length;
            if(!(var7 !== var6)) { _fun0027_ip = 135; continue _fun0027 }
case 136:
            var8 = {};
            var11 = var5.messages;
            var12 = var8;
            var6 = copyDataProperties(var12, var11);
            _closure2_slot2 = var8;
            var6 = _closure1_slot15;
            var5 = var5.ids;
            var7 = var6.bind(var1)(var5);
            var6 = var7.bind(var1)();
            var5 = var6.done;
            if(var5) { _fun0027_ip = 48; continue _fun0027 }
case 137:
            var5 = var6.value;
            var10 = var9.has;
            var10 = var10.bind(var9)(var5);
            if(!var10) { _fun0027_ip = 138; continue _fun0027 }
case 139:
            var5 = delete var8[var5];
case 138:
            var10 = var7.bind(var1)();
            var5 = var10.done;
            var6 = var10;
            if(!var5) { _fun0027_ip = 137; continue _fun0027 }
case 48:
            var3 = _closure1_slot18;
            var2 = function() {
                var1 = {};
                var3 = _closure2_slot1;
                var1['ids'] = var3;
                var2 = _closure2_slot2;
                var1['messages'] = var2;
                return var1;
            };
            var2 = var3.bind(var1)(var4, var2);
            return var1;
case 135:
            var1 = false;
            return var1;
case 134:
            var1 = false;
            return var1;
case 22:
            var1 = false;
            return var1;
        }
    };
    var2['MESSAGE_DELETE_BULK'] = var9;
    var2['RELATIONSHIP_ADD'] = var4;
    var2['RELATIONSHIP_REMOVE'] = var4;
    var2['RELATIONSHIP_UPDATE'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var15 = var4;
    var13 = var2;
    var2 = new var15[var8](var14, var13, var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/GuildOfficialMessagesStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();