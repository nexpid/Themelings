// app/stores/ChannelStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
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
            _closure1_slot40 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot40 = var1;
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
            var2 = var3.@@iterator;
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
            var9 = _closure1_slot42;
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
            var7 = _closure1_slot42;
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
    var _closure1_slot41 = var1;
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
            if(!var5) { _fun0004_ip = 3; continue _fun0004 }
case 8:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0004_ip = 8; continue _fun0004 }
case 3:
            return var1;
        }
    };
    var _closure1_slot42 = var1;
    var1 = function ensureGuildLoaded(arg1, arg2, arg3) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var8 = arg1;
            var9 = arg2;
            var _closure2_slot0 = var8;
            var3 = null;
            if(!(var3 != var8)) { _fun0005_ip = 39; continue _fun0005 }
case 40:
            var1 = 'null';
            if(!(var1 !== var8)) { _fun0005_ip = 39; continue _fun0005 }
case 41:
            var5 = _closure1_slot34;
            var1 = var5.has;
            var1 = var1.bind(var5)(var8);
            if(var1) { _fun0005_ip = 39; continue _fun0005 }
case 8:
            var1 = _closure1_slot39;
            var1 = var1.Basic;
            if(!(var9 === var1)) { _fun0005_ip = 42; continue _fun0005 }
case 43:
            var5 = _closure1_slot10;
            var1 = var5.hasGuild;
            var1 = var1.bind(var5)(var8);
            if(var1) { _fun0005_ip = 39; continue _fun0005 }
case 42:
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var1 = 16;
            var1 = var6[var1];
            var10 = undefined;
            var5 = var5.bind(var10)(var1);
            var1 = var5.database;
            var7 = var1.bind(var5)();
            var _closure2_slot1 = var7;
            if(!(var3 != var7)) { _fun0005_ip = 39; continue _fun0005 }
case 44:
            var12 = _closure1_slot22;
            var11 = var12.verbose;
            var1 = global;
            var5 = var1.HermesInternal;
            var15 = var5.concat;
            var22 = 'hydrating guild (guild: ';
            var20 = ', trace: ';
            var19 = arg3;
            var6 = ')';
            var21 = var8;
            var18 = var6;
            var5 = var22[var15](var21, var20, var19, var18, var17);
            var5 = var11.bind(var12)(var5);
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var5 = 17;
            var5 = var12[var5];
            var13 = var11.bind(var10)(var5);
            var12 = var13.tryLoadOrResetCacheGateway;
            var5 = var1.HermesInternal;
            var11 = var5.concat;
            var5 = 'ensureGuildLoaded(';
            var11 = var11.bind(var5)(var8, var6);
            var5 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 18;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.getSync;
                var2 = _closure2_slot1;
                var1 = _closure2_slot0;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var4 = 'ensureGuildLoaded';
            var5 = var12.bind(var13)(var11, var5, var4);
            if(!(var3 != var5)) { _fun0005_ip = 45; continue _fun0005 }
case 46:
            var4 = _closure1_slot6;
            var3 = 2;
            var4 = var4.bind(var10)(var5, var3);
            var3 = 0;
            var3 = var4[var3];
            var5 = 1;
            var12 = var4[var5];
            var11 = _closure1_slot1;
            var13 = _closure1_slot2;
            var4 = 20;
            var4 = var13[var4];
            var4 = var11.bind(var10)(var4);
            var4 = var4.bind(var10)(var3);
            var4 = _closure1_slot39;
            var4 = var4.Basic;
            if(!(var9 !== var4)) { _fun0005_ip = 47; continue _fun0005 }
case 48:
            var4 = _closure1_slot38;
            var4 = var4 + var5;
            _closure1_slot38 = var4;
case 47:
            var5 = _closure1_slot34;
            var4 = var5.add;
            var4 = var4.bind(var5)(var8);
            var5 = _closure1_slot10;
            var4 = var5.restored;
            var4 = var4.bind(var5)(var8);
            var5 = _closure1_slot1;
            var9 = _closure1_slot2;
            var4 = 21;
            var4 = var9[var4];
            var11 = var5.bind(var10)(var4);
            var9 = var11.mark;
            var4 = var1.HermesInternal;
            var5 = var4.concat;
            var4 = 'loaded guild channels (guild: ';
            var5 = var5.bind(var4)(var8, var6);
            var4 = '❗';
            var4 = var9.bind(var11)(var4, var5, var12);
            var4 = _closure1_slot41;
            var9 = var4.bind(var10)(var3);
            var5 = var9.bind(var10)();
            var4 = var5.done;
            if(var4) { _fun0005_ip = 49; continue _fun0005 }
case 50:
            var12 = var5.value;
            var14 = var1.Object;
            var13 = var14.hasOwn;
            var11 = _closure1_slot24;
            var4 = var12.id;
            var4 = var13.bind(var14)(var11, var4);
            if(var4) { _fun0005_ip = 51; continue _fun0005 }
case 52:
            var11 = _closure1_slot51;
            var4 = _closure1_slot17;
            var4 = var4.bind(var10)(var12);
            var4 = var11.bind(var10)(var4);
case 51:
            var11 = var9.bind(var10)();
            var4 = var11.done;
            var5 = var11;
            if(!var4) { _fun0005_ip = 50; continue _fun0005 }
case 49:
            var5 = _closure1_slot22;
            var4 = var5.verbose;
            var19 = var3.length;
            var17 = _closure1_slot38;
            var3 = var1.HermesInternal;
            var11 = var3.concat;
            var22 = 'hydration complete (guild: ';
            var20 = ', channels: ';
            var18 = ', guilds_loaded: ';
            var21 = var8;
            var16 = var6;
            var3 = var22[var11](var21, var20, var19, var18, var17, var16, var15);
            var3 = var4.bind(var5)(var3);
            _fun0005_ip = 39; continue _fun0005;
case 45:
            var4 = _closure1_slot34;
            var3 = var4.add;
            var3 = var3.bind(var4)(var8);
            var4 = _closure1_slot10;
            var3 = var4.restored;
            var3 = var3.bind(var4)(var8);
            var3 = _closure1_slot22;
            var2 = var3.log;
            var1 = var1.HermesInternal;
            var5 = var1.concat;
            var22 = 'load returned null; early returning (guild: ';
            var20 = ', database: ';
            var21 = var8;
            var19 = var7;
            var18 = var6;
            var1 = var22[var5](var21, var20, var19, var18, var17);
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
case 39:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot43 = var1;
    var1 = function ensureChannelLoaded(arg1, arg2, arg3) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var4 = arg1;
            var5 = arg2;
            var1 = global;
            var7 = var1.Object;
            var6 = var7.hasOwn;
            var3 = _closure1_slot24;
            var3 = var6.bind(var7)(var3, var4);
            if(var3) { _fun0006_ip = 53; continue _fun0006 }
case 54:
            var7 = var1.Object;
            var6 = var7.hasOwn;
            var3 = _closure1_slot26;
            var3 = var6.bind(var7)(var3, var4);
            if(var3) { _fun0006_ip = 53; continue _fun0006 }
case 55:
            var7 = var1.Object;
            var6 = var7.hasOwn;
            var3 = _closure1_slot28;
            var3 = var6.bind(var7)(var3, var4);
            if(var3) { _fun0006_ip = 53; continue _fun0006 }
case 56:
            var6 = var1.Object;
            var3 = var6.hasOwn;
            var1 = _closure1_slot33;
            var1 = var3.bind(var6)(var1, var4);
            if(var1) { _fun0006_ip = 53; continue _fun0006 }
case 57:
            var1 = _closure1_slot39;
            var1 = var1.Full;
            if(!(var5 === var1)) { _fun0006_ip = 53; continue _fun0006 }
case 58:
            var3 = _closure1_slot10;
            var1 = var3.getBasicChannel;
            var1 = var1.bind(var3)(var4);
            var6 = null;
            var7 = var6 == var1;
            var4 = undefined;
            var3 = undefined;
            if(var7) { _fun0006_ip = 59; continue _fun0006 }
case 60:
            var3 = var1.guild_id;
case 59:
            if(!(var6 != var3)) { _fun0006_ip = 53; continue _fun0006 }
case 61:
            var3 = _closure1_slot43;
            var2 = var1.guild_id;
            var1 = arg3;
            var1 = var3.bind(var4)(var2, var5, var1);
case 53:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot44 = var1;
    var1 = function deleteGuildChannels(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var2 = arg1;
            var5 = _closure1_slot22;
            var4 = var5.fileOnly;
            var3 = global;
            var3 = var3.HermesInternal;
            var6 = var3.concat;
            var3 = 'Deleting guild channels for ';
            var3 = var6.bind(var3)(var2);
            var3 = var4.bind(var5)(var3);
            var3 = _closure1_slot25;
            var3 = var3[var2];
            var4 = null;
            if(!(var4 != var3)) { _fun0007_ip = 60; continue _fun0007 }
case 62:
            var5 = _closure1_slot41;
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var3 = 22;
            var3 = var7[var3];
            var7 = undefined;
            var8 = var6.bind(var7)(var3);
            var6 = var8.keys;
            var3 = _closure1_slot25;
            var3 = var3[var2];
            var3 = var6.bind(var8)(var3);
            var6 = var5.bind(var7)(var3);
            var5 = var6.bind(var7)();
            var3 = var5.done;
            if(var3) { _fun0007_ip = 63; continue _fun0007 }
case 64:
            var8 = var5.value;
            var3 = _closure1_slot24;
            var3 = delete var3[var8];
            var8 = var6.bind(var7)();
            var3 = var8.done;
            var5 = var8;
            if(!var3) { _fun0007_ip = 64; continue _fun0007 }
case 63:
            var3 = _closure1_slot25;
            var3 = delete var3[var2];
case 60:
            var3 = _closure1_slot29;
            var3 = var3[var2];
            if(!(var4 != var3)) { _fun0007_ip = 65; continue _fun0007 }
case 66:
            var1 = _closure1_slot29;
            var1 = delete var1[var2];
case 65:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot45 = var1;
    var1 = function _getBasicChannel2(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var4 = arg1;
            var6 = _closure1_slot44;
            var1 = _closure1_slot39;
            var5 = var1.Basic;
            var3 = undefined;
            var1 = 'getBasicChannel';
            var1 = var6.bind(var3)(var4, var5, var1);
            var1 = _closure1_slot24;
            var1 = var1[var4];
            var3 = null;
            if(!(var3 == var1)) { _fun0008_ip = 8; continue _fun0008 }
case 67:
            var5 = _closure1_slot26;
            var1 = var5[var4];
case 8:
            if(!(var3 == var1)) { _fun0008_ip = 34; continue _fun0008 }
case 62:
            var5 = _closure1_slot28;
            var1 = var5[var4];
case 34:
            if(!(var3 == var1)) { _fun0008_ip = 68; continue _fun0008 }
case 69:
            var5 = _closure1_slot33;
            var1 = var5[var4];
case 68:
            if(!(var3 == var1)) { _fun0008_ip = 70; continue _fun0008 }
case 71:
            var3 = _closure1_slot10;
            var2 = var3.getBasicChannel;
            var1 = var2.bind(var3)(var4);
case 70:
            return var1;
        }
    };
    var _closure1_slot46 = var1;
    var1 = function _getChannel(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var3 = arg1;
            var6 = _closure1_slot44;
            var1 = _closure1_slot39;
            var5 = var1.Full;
            var4 = undefined;
            var1 = 'getChannel';
            var1 = var6.bind(var4)(var3, var5, var1);
            var1 = _closure1_slot24;
            var1 = var1[var3];
            var4 = null;
            if(!(var4 == var1)) { _fun0009_ip = 8; continue _fun0009 }
case 67:
            var5 = _closure1_slot26;
            var1 = var5[var3];
case 8:
            if(!(var4 == var1)) { _fun0009_ip = 34; continue _fun0009 }
case 62:
            var5 = _closure1_slot28;
            var1 = var5[var3];
case 34:
            if(!(var4 == var1)) { _fun0009_ip = 68; continue _fun0009 }
case 69:
            var5 = _closure1_slot33;
            var1 = var5[var3];
case 68:
            if(!(var4 == var1)) { _fun0009_ip = 72; continue _fun0009 }
case 71:
            var2 = _closure1_slot37;
            var1 = var2[var3];
case 72:
            return var1;
        }
    };
    var _closure1_slot47 = var1;
    var1 = function setChannel(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var3 = arg1;
            var1 = var3.isPrivate;
            var2 = var1.bind(var3)();
            if(var2) { _fun0010_ip = 73; continue _fun0010 }
case 74:
            var2 = var3.isThread;
            var2 = var2.bind(var3)();
            if(var2) { _fun0010_ip = 34; continue _fun0010 }
case 41:
            var5 = _closure1_slot14;
            var4 = var5.has;
            var2 = var3.type;
            var2 = var4.bind(var5)(var2);
            if(!var2) { _fun0010_ip = 75; continue _fun0010 }
case 76:
            var4 = _closure1_slot51;
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            _fun0010_ip = 75; continue _fun0010;
case 34:
            var4 = _closure1_slot50;
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            _fun0010_ip = 75; continue _fun0010;
case 73:
            var4 = _closure1_slot37;
            var2 = var3.id;
            var2 = delete var4[var2];
            var2 = _closure1_slot49;
            var1 = undefined;
            var1 = var2.bind(var1)(var3);
case 75:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot48 = var1;
    var1 = function setPrivateChannel(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var1 = arg1;
            var4 = var1.recipients;
            var3 = var4.find;
            var2 = function(arg1) {
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 23;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var3 = var3.bind(var4)(var2);
            var2 = null;
            if(!(var2 == var3)) { _fun0011_ip = 17; continue _fun0011 }
case 37:
            var4 = _closure1_slot26;
            var3 = var1.id;
            var4[var3] = var1;
            var4 = var1.type;
            var3 = _closure1_slot21;
            var3 = var3.DM;
            if(!(var4 === var3)) { _fun0011_ip = 72; continue _fun0011 }
case 77:
            var4 = _closure1_slot30;
            var3 = var1.getRecipientId;
            var3 = var3.bind(var1)();
            var1 = var1.id;
            var4[var3] = var1;
case 72:
            var3 = _closure1_slot31;
            var1 = 1;
            var1 = var3 + var1;
            _closure1_slot31 = var1;
            var1 = undefined;
            return var1;
case 17:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot49 = var1;
    var1 = function setThread(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var5 = arg1;
            var3 = _closure1_slot24;
            var1 = var5.parent_id;
            var9 = var3[var1];
            var6 = _closure1_slot28;
            var4 = var5.id;
            var7 = var5.merge;
            var3 = {};
            var8 = null;
            var10 = var8 == var9;
            var1 = undefined;
            var11 = undefined;
            if(var10) { _fun0012_ip = 32; continue _fun0012 }
case 78:
            var11 = var9.nsfw;
case 32:
            var10 = true;
            var10 = var10 === var11;
            var3['nsfw'] = var10;
            var10 = var8 == var9;
            var8 = undefined;
            if(var10) { _fun0012_ip = 79; continue _fun0012 }
case 80:
            var8 = var9.type;
case 79:
            var3['parentChannelThreadType'] = var8;
            var3 = var7.bind(var5)(var3);
            var6[var4] = var3;
            var3 = var5.isScheduledForDeletion;
            var3 = var3.bind(var5)();
            if(!var3) { _fun0012_ip = 81; continue _fun0012 }
case 82:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 19;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var6 = 'THREAD_DELETE';
            var2['type'] = var6;
            var2['channel'] = var5;
            var2 = var3.bind(var4)(var2);
case 81:
            return var1;
        }
    };
    var _closure1_slot50 = var1;
    var1 = function setGuildChannelRaw(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var3 = arg1;
            var2 = var3.id;
            var4 = var3.guild_id;
            var5 = _closure1_slot24;
            var5[var2] = var3;
            var6 = _closure1_slot25;
            var5 = var6[var4];
            var7 = null;
            if(!(var7 == var5)) { _fun0013_ip = 83; continue _fun0013 }
case 84:
            var5 = {};
case 83:
            var6[var4] = var5;
            var5 = _closure1_slot25;
            var5 = var5[var4];
            var5[var2] = var3;
            var6 = _closure1_slot32;
            var5 = var6[var4];
            var9 = var7 != var5;
            var8 = 0;
            if(!var9) { _fun0013_ip = 80; continue _fun0013 }
case 85:
            var8 = var5;
case 80:
            var5 = 1;
            var5 = var8 + var5;
            var6[var4] = var5;
            var5 = var3.linkedLobby;
            if(!(var7 == var5)) { _fun0013_ip = 86; continue _fun0013 }
case 87:
            var5 = _closure1_slot29;
            var5 = var5[var4];
            if(!(var7 != var5)) { _fun0013_ip = 88; continue _fun0013 }
case 89:
            var5 = delete var5[var2];
            _fun0013_ip = 88; continue _fun0013;
case 86:
            var6 = _closure1_slot29;
            var5 = var6[var4];
            if(!(var7 == var5)) { _fun0013_ip = 90; continue _fun0013 }
case 91:
            var5 = {};
case 90:
            var6[var4] = var5;
            var1 = _closure1_slot29;
            var1 = var1[var4];
            var1[var2] = var3;
case 88:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot51 = var1;
    var1 = function handleOneGuildCreate(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var2 = arg1;
            var7 = var2.id;
            var1 = var2.channels;
            var2 = var2.threads;
            var4 = var1.op;
            var3 = 'full_sync';
            if(!(var3 !== var4)) { _fun0014_ip = 92; continue _fun0014 }
case 84:
            var3 = 'update';
            if(!(var3 === var4)) { _fun0014_ip = 93; continue _fun0014 }
case 9:
            var3 = var1.writes;
            var3 = var3.length;
            var5 = 0;
            var3 = var3 > var5;
            if(var3) { _fun0014_ip = 94; continue _fun0014 }
case 43:
            var4 = var1.deletes;
            var4 = var4.length;
            var3 = var4 > var5;
case 94:
            if(!var3) { _fun0014_ip = 95; continue _fun0014 }
case 96:
            var4 = _closure1_slot10;
            var3 = var4.invalidate;
            var3 = var3.bind(var4)(var7);
case 95:
            var4 = _closure1_slot41;
            var3 = var1.deletes;
            var6 = undefined;
            var5 = var4.bind(var6)(var3);
            var4 = var5.bind(var6)();
            var3 = var4.done;
            if(var3) { _fun0014_ip = 97; continue _fun0014 }
case 98:
            var10 = var4.value;
            var9 = _closure1_slot53;
            var3 = _closure1_slot24;
            var3 = var3[var10];
            var3 = var9.bind(var6)(var3);
            var9 = var5.bind(var6)();
            var3 = var9.done;
            var4 = var9;
            if(!var3) { _fun0014_ip = 98; continue _fun0014 }
case 97:
            var4 = _closure1_slot41;
            var3 = var1.writes;
            var5 = var4.bind(var6)(var3);
            var4 = var5.bind(var6)();
            var3 = var4.done;
            if(var3) { _fun0014_ip = 93; continue _fun0014 }
case 99:
            var9 = _closure1_slot51;
            var3 = var4.value;
            var3 = var9.bind(var6)(var3);
            var9 = var5.bind(var6)();
            var3 = var9.done;
            var4 = var9;
            if(var3) { _fun0014_ip = 93; continue _fun0014 }
case 100:
            _fun0014_ip = 99; continue _fun0014;
case 92:
            var5 = _closure1_slot22;
            var4 = var5.fileOnly;
            var3 = var1.items;
            var10 = var3.length;
            var3 = global;
            var3 = var3.HermesInternal;
            var9 = var3.concat;
            var8 = 'ConnectionOpen contained full channels for ';
            var3 = ' #:';
            var3 = var9.bind(var8)(var7, var3, var10);
            var3 = var4.bind(var5)(var3);
            var3 = _closure1_slot45;
            var5 = undefined;
            var3 = var3.bind(var5)(var7);
            var4 = _closure1_slot34;
            var3 = var4.add;
            var3 = var3.bind(var4)(var7);
            var4 = _closure1_slot10;
            var3 = var4.restored;
            var3 = var3.bind(var4)(var7);
            var3 = _closure1_slot41;
            var1 = var1.items;
            var4 = var3.bind(var5)(var1);
            var3 = var4.bind(var5)();
            var1 = var3.done;
            if(var1) { _fun0014_ip = 93; continue _fun0014 }
case 101:
            var7 = _closure1_slot51;
            var1 = var3.value;
            var1 = var7.bind(var5)(var1);
            var7 = var4.bind(var5)();
            var1 = var7.done;
            var3 = var7;
            if(!var1) { _fun0014_ip = 101; continue _fun0014 }
case 93:
            var1 = null;
            if(!(var1 != var2)) { _fun0014_ip = 102; continue _fun0014 }
case 103:
            var1 = _closure1_slot41;
            var4 = undefined;
            var3 = var1.bind(var4)(var2);
            var2 = var3.bind(var4)();
            var1 = var2.done;
            if(var1) { _fun0014_ip = 102; continue _fun0014 }
case 104:
            var6 = _closure1_slot50;
            var1 = var2.value;
            var1 = var6.bind(var4)(var1);
            var6 = var3.bind(var4)();
            var1 = var6.done;
            var2 = var6;
            if(!var1) { _fun0014_ip = 104; continue _fun0014 }
case 102:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot52 = var1;
    var5 = function handleThreadCreateOrUpdate(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var4 = arg1;
            var5 = _closure1_slot16;
            var3 = var5.has;
            var1 = var4.channel;
            var1 = var1.type;
            var1 = var3.bind(var5)(var1);
            if(var1) { _fun0015_ip = 105; continue _fun0015 }
case 37:
            var1 = false;
            return var1;
case 105:
            var5 = _closure1_slot47;
            var1 = var4.channel;
            var3 = var1.id;
            var1 = undefined;
            var6 = var5.bind(var1)(var3);
            var7 = null;
            if(!(var7 != var6)) { _fun0015_ip = 106; continue _fun0015 }
case 55:
            var5 = var6.merge;
            var3 = {};
            var9 = var4.channel;
            var8 = var9.toJS;
            var10 = var8.bind(var9)();
            var11 = var3;
            var8 = copyDataProperties(var11, var10);
            var8 = var4.channel;
            var8 = var8.bitrate;
            if(!(var7 == var8)) { _fun0015_ip = 86; continue _fun0015 }
case 89:
            var8 = var6.bitrate;
case 86:
            var7 = 'bitrate';
            var3[var7] = var8;
            var3 = var5.bind(var6)(var3);
            _fun0015_ip = 107; continue _fun0015;
case 106:
            var3 = var4.channel;
case 107:
            var2 = _closure1_slot48;
            var2 = var2.bind(var1)(var3);
            return var1;
        }
    };
    var13 = function handleLoadArchivedThreadsSuccess(arg1) {
        var1 = arg1;
        var3 = var1.threads;
        var2 = var3.forEach;
        var1 = function(arg1) {
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                var4 = arg1;
                var5 = _closure1_slot16;
                var3 = var5.has;
                var2 = var4.type;
                var2 = var3.bind(var5)(var2);
                if(!var2) { _fun0016_ip = 108; continue _fun0016 }
case 38:
                var3 = _closure1_slot48;
                var1 = _closure1_slot12;
                var2 = undefined;
                var1 = var1.bind(var2)(var4);
                var1 = var3.bind(var2)(var1);
case 108:
                var1 = undefined;
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var1 = function deleteChannel(arg1) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
            var1 = arg1;
            var6 = null;
            if(!(var6 != var1)) { _fun0017_ip = 109; continue _fun0017 }
case 110:
            var4 = var1.guild_id;
            var5 = var1.id;
            var3 = _closure1_slot26;
            var3 = var5 in var3;
            if(!var3) { _fun0017_ip = 9; continue _fun0017 }
case 111:
            var5 = _closure1_slot26;
            var3 = var1.id;
            var3 = delete var5[var3];
case 9:
            var5 = var1.id;
            var3 = _closure1_slot24;
            var3 = var5 in var3;
            if(!var3) { _fun0017_ip = 112; continue _fun0017 }
case 113:
            var5 = _closure1_slot24;
            var3 = var1.id;
            var3 = delete var5[var3];
case 112:
            var5 = var1.id;
            var3 = _closure1_slot28;
            var3 = var5 in var3;
            if(!var3) { _fun0017_ip = 114; continue _fun0017 }
case 115:
            var5 = _closure1_slot28;
            var3 = var1.id;
            var3 = delete var5[var3];
case 114:
            if(!(var6 != var4)) { _fun0017_ip = 116; continue _fun0017 }
case 117:
            var3 = _closure1_slot25;
            var3 = var3[var4];
            var3 = var6 != var3;
            if(!var3) { _fun0017_ip = 118; continue _fun0017 }
case 119:
            var7 = var1.id;
            var5 = _closure1_slot25;
            var5 = var5[var4];
            var3 = var7 in var5;
case 118:
            if(!var3) { _fun0017_ip = 18; continue _fun0017 }
case 120:
            var3 = _closure1_slot25;
            var5 = var3[var4];
            var3 = var1.id;
            var3 = delete var5[var3];
case 18:
            var3 = _closure1_slot29;
            var3 = var3[var4];
            var3 = var6 != var3;
            if(!var3) { _fun0017_ip = 24; continue _fun0017 }
case 121:
            var7 = var1.id;
            var5 = _closure1_slot29;
            var5 = var5[var4];
            var3 = var7 in var5;
case 24:
            if(!var3) { _fun0017_ip = 116; continue _fun0017 }
case 122:
            var3 = _closure1_slot29;
            var4 = var3[var4];
            var3 = var1.id;
            var3 = delete var4[var3];
case 116:
            var3 = var1.guild_id;
            if(!(var6 != var3)) { _fun0017_ip = 123; continue _fun0017 }
case 124:
            var5 = _closure1_slot15;
            var4 = var5.has;
            var3 = var1.type;
            var3 = var4.bind(var5)(var3);
            if(var3) { _fun0017_ip = 123; continue _fun0017 }
case 125:
            var5 = _closure1_slot32;
            var4 = var1.guild_id;
            var7 = _closure1_slot32;
            var3 = var1.guild_id;
            var3 = var7[var3];
            var7 = var6 != var3;
            var6 = 0;
            if(!var7) { _fun0017_ip = 126; continue _fun0017 }
case 127:
            var6 = var3;
case 126:
            var3 = 1;
            var3 = var6 + var3;
            var5[var4] = var3;
            _fun0017_ip = 109; continue _fun0017;
case 123:
            var4 = _closure1_slot13;
            var3 = var1.type;
            var1 = undefined;
            var1 = var4.bind(var1)(var3);
            if(!var1) { _fun0017_ip = 109; continue _fun0017 }
case 128:
            var3 = _closure1_slot31;
            var1 = 1;
            var1 = var3 + var1;
            _closure1_slot31 = var1;
case 109:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot53 = var1;
    var11 = function handleDeleteChannel(arg1) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
            var1 = arg1;
            var3 = var1.channel;
            var4 = _closure1_slot24;
            var1 = var3.id;
            var4 = var4[var1];
            var1 = null;
            if(!(var1 == var4)) { _fun0018_ip = 129; continue _fun0018 }
case 7:
            var6 = _closure1_slot26;
            var5 = var3.id;
            var4 = var6[var5];
case 129:
            if(!(var1 == var4)) { _fun0018_ip = 130; continue _fun0018 }
case 67:
            var5 = _closure1_slot28;
            var3 = var3.id;
            var4 = var5[var3];
case 130:
            if(!(var1 != var4)) { _fun0018_ip = 131; continue _fun0018 }
case 55:
            var3 = _closure1_slot53;
            var1 = undefined;
            var3 = var3.bind(var1)(var4);
            var3 = 'basicPermissions';
            var3 = var3 in var4;
            if(var3) { _fun0018_ip = 132; continue _fun0018 }
case 13:
            var5 = var4.type;
            var3 = _closure1_slot21;
            var3 = var3.DM;
            if(!(var5 === var3)) { _fun0018_ip = 132; continue _fun0018 }
case 95:
            var3 = var4.getRecipientId;
            var3 = var3.bind(var4)();
            var5 = _closure1_slot30;
            var5 = var5[var3];
            var4 = var4.id;
            if(!(var5 === var4)) { _fun0018_ip = 132; continue _fun0018 }
case 133:
            var2 = _closure1_slot30;
            var2 = delete var2[var3];
case 132:
            return var1;
case 131:
            var1 = false;
            return var1;
        }
    };
    var14 = function handleLoadMessages(arg1) {
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
            var1 = arg1;
            var3 = var1.messages;
            var2 = _closure1_slot41;
            var1 = undefined;
            var5 = var2.bind(var1)(var3);
            var3 = var5.bind(var1)();
            var2 = var3.done;
            var4 = null;
            if(var2) { _fun0019_ip = 134; continue _fun0019 }
case 105:
            var2 = var3.value;
            var7 = var2.thread;
            var7 = var4 != var7;
            if(!var7) { _fun0019_ip = 135; continue _fun0019 }
case 8:
            var8 = var2.thread;
            var9 = var8.id;
            var8 = _closure1_slot28;
            var8 = var9 in var8;
            var7 = !var8;
case 135:
            if(!var7) { _fun0019_ip = 95; continue _fun0019 }
case 73:
            var10 = _closure1_slot16;
            var9 = var10.has;
            var8 = var2.thread;
            var8 = var8.type;
            var7 = var9.bind(var10)(var8);
case 95:
            if(!var7) { _fun0019_ip = 133; continue _fun0019 }
case 82:
            var7 = _closure1_slot50;
            var8 = _closure1_slot12;
            var2 = var2.thread;
            var2 = var8.bind(var1)(var2);
            var2 = var7.bind(var1)(var2);
case 133:
            var7 = var5.bind(var1)();
            var2 = var7.done;
            var3 = var7;
            if(!var2) { _fun0019_ip = 105; continue _fun0019 }
case 134:
            return var1;
        }
    };
    var12 = function handleSearchMessagesSuccess(arg1) {
        var1 = arg1;
        var3 = var1.data;
        var2 = var3.forEach;
        var1 = function(arg1) {
            var2 = arg1;
            var6 = var2.messages;
            var5 = var2.threads;
            var3 = var2.channels;
            var4 = var6.forEach;
            var2 = function(arg1) {
                var3 = arg1;
                var2 = var3.forEach;
                var1 = function(arg1) {
                    var3 = _closure1_slot54;
                    var1 = arg1;
                    var2 = var1.thread;
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var2 = var4.bind(var6)(var2);
            var4 = var5.forEach;
            var2 = _closure1_slot54;
            var2 = var4.bind(var5)(var2);
            var2 = var3.forEach;
            var1 = function(arg1) {
                _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                    var5 = arg1;
                    var3 = _closure1_slot12;
                    var1 = undefined;
                    var4 = var3.bind(var1)(var5);
                    var6 = _closure1_slot47;
                    var3 = var5.id;
                    var3 = var6.bind(var1)(var3);
                    var6 = null;
                    var3 = var6 != var3;
                    var7 = _closure1_slot37;
                    var5 = var5.id;
                    var5 = var7[var5];
                    var5 = var6 != var5;
                    var6 = var4.isPrivate;
                    var6 = var6.bind(var4)();
                    if(!var6) { _fun0020_ip = 85; continue _fun0020 }
case 34:
                    if(!var3) { _fun0020_ip = 96; continue _fun0020 }
case 3:
                    if(var5) { _fun0020_ip = 96; continue _fun0020 }
case 85:
                    if(var3) { _fun0020_ip = 136; continue _fun0020 }
case 80:
                    var3 = _closure1_slot48;
                    var3 = var3.bind(var1)(var4);
                    _fun0020_ip = 136; continue _fun0020;
case 96:
                    var3 = _closure1_slot37;
                    var2 = var4.id;
                    var3[var2] = var4;
case 136:
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var1 = function addThreadIfMissing(arg1) {
        _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var1 = var1 != var4;
            if(!var1) { _fun0021_ip = 137; continue _fun0021 }
case 110:
            var3 = var4.id;
            var2 = _closure1_slot28;
            var2 = var3 in var2;
            var1 = !var2;
case 137:
            if(!var1) { _fun0021_ip = 32; continue _fun0021 }
case 138:
            var5 = _closure1_slot16;
            var3 = var5.has;
            var2 = var4.type;
            var1 = var3.bind(var5)(var2);
case 32:
            if(!var1) { _fun0021_ip = 139; continue _fun0021 }
case 62:
            var3 = _closure1_slot50;
            var1 = _closure1_slot12;
            var2 = undefined;
            var1 = var1.bind(var2)(var4);
            var1 = var3.bind(var2)(var1);
case 139:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot54 = var1;
    var1 = function handleFavoritesUpdate() {
        _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
            var1 = {};
            _closure1_slot33 = var1;
            var2 = _closure1_slot11;
            var1 = var2.getFavoriteChannels;
            var6 = var1.bind(var2)();
            var1 = null;
            for(var2 in var6)
case 37:
            {
case 140:
                var10 = var2;
                var9 = _closure1_slot11;
                var8 = var9.getCategoryRecord;
                var9 = var8.bind(var9)(var10);
                if(var1 == var9) { _fun0022_ip = 37; continue _fun0022 }
case 55:
                var8 = _closure1_slot33;
                var8[var10] = var9;
                _fun0022_ip = 37; continue _fun0022;
            }
case 4:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot55 = var1;
    var1 = function guildChannelCount(arg1) {
        _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
            var5 = arg1;
            var1 = _closure1_slot25;
            var3 = var1[var5];
            var1 = null;
            var3 = var1 == var3;
            if(var3) { _fun0023_ip = 76; continue _fun0023 }
case 35:
            var3 = global;
            var4 = var3.Object;
            var3 = var4.keys;
            var2 = _closure1_slot25;
            var2 = var2[var5];
            var2 = var3.bind(var4)(var2);
            var1 = var2.length;
case 76:
            return var1;
        }
    };
    var _closure1_slot56 = var1;
    var2 = global;
    var15 = var2.Object;
    var9 = var15.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var15)(var3, var1, var4);
    var17 = 0;
    var4 = var7[var17];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var16 = 1;
    var4 = var7[var16];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 9;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var9 = var4.createChannelRecordFromServer;
    var _closure1_slot12 = var9;
    var9 = var4.isPrivate;
    var _closure1_slot13 = var9;
    var9 = var4.GUILD_CHANNEL_TYPES;
    var _closure1_slot14 = var9;
    var9 = var4.THREAD_CHANNEL_TYPES;
    var _closure1_slot15 = var9;
    var9 = var4.ALL_CHANNEL_TYPES;
    var _closure1_slot16 = var9;
    var4 = var4.castChannelRecord;
    var _closure1_slot17 = var4;
    var4 = 10;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot18 = var4;
    var4 = 11;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot19 = var4;
    var4 = 12;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot20 = var4;
    var4 = 13;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.ChannelTypes;
    var _closure1_slot21 = var4;
    var4 = 14;
    var4 = var7[var4];
    var9 = var8.bind(var1)(var4);
    var4 = var9.prototype;
    var15 = Object.create(var4, {constructor: {value: var9}});
    var4 = 'ChannelStore';
    var21 = var15;
    var20 = var4;
    var9 = new var21[var9](var20, var19);
    var9 = var9 instanceof Object ? var9 : var15;
    var _closure1_slot22 = var9;
    var9 = {};
    var _closure1_slot23 = var9;
    var9 = {};
    var _closure1_slot24 = var9;
    var9 = {};
    var _closure1_slot25 = var9;
    var9 = {};
    var _closure1_slot26 = var9;
    var9 = null;
    var _closure1_slot27 = var9;
    var9 = {};
    var _closure1_slot28 = var9;
    var9 = {};
    var _closure1_slot29 = var9;
    var9 = {};
    var _closure1_slot30 = var9;
    var _closure1_slot31 = var17;
    var9 = {};
    var _closure1_slot32 = var9;
    var9 = {};
    var _closure1_slot33 = var9;
    var2 = var2.Set;
    var9 = var2.prototype;
    var9 = Object.create(var9, {constructor: {value: var2}});
    var21 = var9;
    var2 = new var21[var2](var20);
    var2 = var2 instanceof Object ? var2 : var9;
    var _closure1_slot34 = var2;
    var2 = {};
    var _closure1_slot35 = var2;
    var _closure1_slot36 = var17;
    var2 = {};
    var _closure1_slot37 = var2;
    var _closure1_slot38 = var17;
    var2 = function() {
        var5 = function ChannelLoader() {
            var4 = _closure1_slot8;
            var3 = _closure2_slot0;
            var1 = undefined;
            var2 = this;
            var2 = var4.bind(var1)(var2, var3);
            return var1;
        };
        var _closure2_slot0 = var5;
        var4 = _closure1_slot9;
        var1 = {};
        var3 = 'loadAllMissingChannels';
        var1['key'] = var3;
        var3 = function value() {
            var3 = this;
            var2 = _closure1_slot19;
            var1 = var2.getGuildIds;
            var4 = var1.bind(var2)();
            var2 = var4.filter;
            var1 = function(arg1) {
                var3 = _closure1_slot34;
                var2 = var3.has;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                return var1;
            };
            var2 = var2.bind(var4)(var1);
            var1 = var3.loadGuildIds;
            var1 = var1.bind(var3)(var2);
            return var1;
        };
        var1['value'] = var3;
        var3 = new Array(3);
        var3[0] = var1;
        var1 = {};
        var6 = 'loadGuildFromChannelId';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                var7 = arg1;
                var6 = null;
                var2 = var6 == var7;
                var1 = null;
                if(var2) { _fun0024_ip = 141; continue _fun0024 }
case 36:
                var4 = _closure2_slot0;
                var3 = var4.loadGuildIds;
                var2 = _closure1_slot46;
                var5 = undefined;
                var2 = var2.bind(var5)(var7);
                var6 = var6 == var2;
                if(var6) { _fun0024_ip = 142; continue _fun0024 }
case 108:
                var5 = var2.guild_id;
case 142:
                var2 = new Array(1);
                var2[0] = var5;
                var1 = var3.bind(var4)(var2);
case 141:
                return var1;
            }
        };
        var1['value'] = var6;
        var3[1] = var1;
        var1 = {};
        var6 = 'loadGuildIds';
        var1['key'] = var6;
        var2 = function value(arg1) {
            _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
                var5 = arg1;
                var4 = var5.filter;
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 15;
                var1 = var6[var1];
                var6 = undefined;
                var1 = var7.bind(var6)(var1);
                var1 = var1.isNotNullish;
                var7 = var4.bind(var5)(var1);
                var _closure3_slot0 = var7;
                var4 = var7.length;
                var1 = 0;
                if(!(var1 !== var4)) { _fun0025_ip = 143; continue _fun0025 }
case 55:
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 16;
                var1 = var5[var1];
                var4 = var4.bind(var6)(var1);
                var1 = var4.database;
                var4 = var1.bind(var4)();
                var _closure3_slot1 = var4;
                var1 = null;
                if(!(var1 != var4)) { _fun0025_ip = 23; continue _fun0025 }
case 75:
                var5 = var7.some;
                var4 = function(arg1) {
                    var3 = _closure1_slot34;
                    var2 = var3.has;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    var1 = !var1;
                    return var1;
                };
                var4 = var5.bind(var7)(var4);
                if(var4) { _fun0025_ip = 144; continue _fun0025 }
case 145:
                return var1;
case 144:
                var4 = _closure1_slot36;
                var _closure3_slot2 = var4;
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var4 = 17;
                var4 = var7[var4];
                var5 = var5.bind(var6)(var4);
                var4 = var5.tryLoadOrResetCacheGatewayAsync;
                var3 = _closure1_slot7;
                var2 = function* () {
                    var1 = function* anon_0_() {
                        _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                            if(var4) { _fun0026_ip = 93; continue _fun0026 }
case 110:
                            var5 = undefined;
                            var8 = undefined;
                            var9 = undefined;
                            var10 = undefined;
                            var6 = undefined;
                            var7 = undefined;
                            var13 = _closure3_slot0;
                            var12 = var13.map;
                            var4 = function(arg1) {
                                _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
                                    var7 = arg1;
                                    var _closure6_slot0 = var7;
                                    var4 = _closure1_slot34;
                                    var1 = var4.has;
                                    var4 = var1.bind(var4)(var7);
                                    var1 = null;
                                    if(var4) { _fun0027_ip = 146; continue _fun0027 }
case 138:
                                    var4 = _closure1_slot35;
                                    var4 = var4[var7];
                                    if(!(var1 == var4)) { _fun0027_ip = 145; continue _fun0027 }
case 6:
                                    var6 = _closure1_slot1;
                                    var5 = _closure1_slot2;
                                    var4 = 18;
                                    var5 = var5[var4];
                                    var4 = undefined;
                                    var6 = var6.bind(var4)(var5);
                                    var5 = var6.getAsync;
                                    var4 = _closure3_slot1;
                                    var5 = var5.bind(var6)(var4, var7);
                                    var4 = var5.then;
                                    var3 = function(arg1) {
                                        var2 = arg1;
                                        var5 = _closure1_slot22;
                                        var4 = var5.fileOnly;
                                        var3 = _closure6_slot0;
                                        var8 = var2.length;
                                        var1 = global;
                                        var1 = var1.HermesInternal;
                                        var7 = var1.concat;
                                        var6 = 'Lazy loaded channels for ';
                                        var1 = ' #:';
                                        var1 = var7.bind(var6)(var3, var1, var8);
                                        var1 = var4.bind(var5)(var1);
                                        var1 = {};
                                        var1['guildId'] = var3;
                                        var1['channels'] = var2;
                                        return var1;
                                    };
                                    var4 = var4.bind(var5)(var3);
                                    var3 = _closure1_slot35;
                                    var3[var7] = var4;
                                    var3 = {};
                                    var3['guildId'] = var7;
                                    var3['promise'] = var4;
                                    return var3;
case 145:
                                    var4 = _closure1_slot22;
                                    var3 = var4.fileOnly;
                                    var2 = global;
                                    var2 = var2.HermesInternal;
                                    var6 = var2.concat;
                                    var5 = 'Skipping loading ';
                                    var2 = ' because a load is pending';
                                    var2 = var6.bind(var5)(var7, var2);
                                    var2 = var3.bind(var4)(var2);
                                    return var1;
case 146:
                                    return var1;
                                }
                            };
                            var14 = var12.bind(var13)(var4);
                            var13 = var14.filter;
                            var15 = _closure1_slot0;
                            var16 = _closure1_slot2;
                            var12 = 15;
                            var12 = var16[var12];
                            var12 = var15.bind(var5)(var12);
                            var12 = var12.isNotNullish;
                            var14 = var13.bind(var14)(var12);
                            var8 = var14;
                            var13 = var14.map;
                            var12 = function(arg1) {
                                var1 = arg1;
                                var1 = var1.promise;
                                return var1;
                            };
                            var9 = var13.bind(var14)(var12);
case 147: // try_start_0
                            var12 = global;
                            var13 = var12.Promise;
                            var12 = var13.all;
                            var9 = var12.bind(var13)(var9);
                            SaveGenerator(address=126);
case 148:
                            return var9;
case 119:
                            ResumeGenerator(result_out_reg=8, return_bool_out_reg=11);
                            if(var12) { _fun0026_ip = 149; continue _fun0026 }
case 150:
                            var10 = var9;
                            var12 = _closure1_slot36;
                            var11 = _closure3_slot2;
                            if(!(var12 === var11)) { _fun0026_ip = 151; continue _fun0026 }
case 152:
                            var12 = var10;
                            var11 = var12.filter;
                            var10 = function(arg1) {
                                var3 = _closure1_slot34;
                                var2 = var3.has;
                                var1 = arg1;
                                var1 = var1.guildId;
                                var1 = var2.bind(var3)(var1);
                                var1 = !var1;
                                return var1;
                            };
                            var13 = var11.bind(var12)(var10);
                            var11 = _closure1_slot1;
                            var12 = _closure1_slot2;
                            var10 = 19;
                            var10 = var12[var10];
                            var12 = var11.bind(var5)(var10);
                            var11 = var12.dispatch;
                            var10 = {};
                            var14 = 'LOAD_CHANNELS';
                            var10['type'] = var14;
                            var10['channels'] = var13;
                            var10 = var11.bind(var12)(var10);
                            SaveGenerator(address=217);
case 116:
                            return var10;
case 153:
                            ResumeGenerator(result_out_reg=9, return_bool_out_reg=10);
                            if(var11) { _fun0026_ip = 154; continue _fun0026 }
case 155: // try_end0
                            var11 = null;
                            return var11;
case 154:
                            return var10;
case 151: // try_start_1
                            var12 = _closure1_slot22;
                            var11 = var12.fileOnly;
                            var14 = var8;
                            var13 = var14.map;
                            var10 = function(arg1) {
                                var1 = arg1;
                                var1 = var1.guildId;
                                return var1;
                            };
                            var13 = var13.bind(var14)(var10);
                            var10 = 'lastResetTime has changed, skipping loads for ';
                            var10 = var10 + var13;
                            var10 = var11.bind(var12)(var10);
case 156: // try_end1
                            var10 = null;
                            return var10;
case 149:
                            return var9;
case 157: // catch_target0 // catch_target1
                            CatchBlockStart(arg_register=10);
                            var2 = var11;
                            var10 = _closure1_slot22;
                            var9 = var10.error;
                            var12 = var8.map;
                            var3 = function(arg1) {
                                var1 = arg1;
                                var1 = var1.guildId;
                                return var1;
                            };
                            var12 = var12.bind(var8)(var3);
                            var3 = 'Failed to load channels from disk for ';
                            var3 = var3 + var12;
                            var3 = var9.bind(var10)(var3, var11);
                            var3 = _closure1_slot41;
                            var3 = var3.bind(var5)(var8);
                            var7 = var3;
                            var3 = var3.bind(var5)();
                            var6 = var3;
                            var3 = var3.done;
                            if(var3) { _fun0026_ip = 158; continue _fun0026 }
case 159:
                            var3 = var6;
                            var3 = var3.value;
                            var8 = _closure1_slot35;
                            var3 = var3.guildId;
                            var3 = delete var8[var3];
                            var3 = var7;
                            var3 = var3.bind(var5)();
                            var6 = var3;
                            var3 = var3.done;
                            if(!var3) { _fun0026_ip = 159; continue _fun0026 }
case 158:
                            throw var2;
case 93:
                            return var1;
                        }
                    };
                    return var1;
                };
                var3 = var3.bind(var6)(var2);
                var2 = 'loadChannels';
                var2 = var4.bind(var5)(var2, var3);
                return var2;
case 23:
                return var1;
case 143:
                var1 = null;
                return var1;
            }
        };
        var1['value'] = var2;
        var3[2] = var1;
        var2 = undefined;
        var1 = null;
        var1 = var4.bind(var2)(var5, var1, var3);
        return var1;
    };
    var2 = var2.bind(var1)();
    var9 = {};
    var9['Basic'] = var17;
    var15 = 'Basic';
    var9[var17] = var15;
    var9['Full'] = var16;
    var15 = 'Full';
    var9[var16] = var15;
    var _closure1_slot39 = var9;
    var9 = 25;
    var9 = var7[var9];
    var9 = var8.bind(var1)(var9);
    var15 = var9.Store;
    var9 = function(arg1) {
        var4 = function ChannelStore() {
            _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot8;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot4;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot3;
                var1 = _closure1_slot40;
                var1 = var1.bind(var3)();
                if(var1) { _fun0028_ip = 43; continue _fun0028 }
case 160:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0028_ip = 95; continue _fun0028;
case 43:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot4;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 95:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot5;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot9;
        var5 = {};
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value() {
            var4 = this;
            var7 = var4.waitFor;
            var11 = _closure1_slot10;
            var10 = _closure1_slot20;
            var9 = _closure1_slot19;
            var8 = _closure1_slot11;
            var12 = var4;
            var2 = var12[var7](var11, var10, var9, var8, var7);
            var3 = var4.syncWith;
            var5 = _closure1_slot11;
            var2 = new Array(1);
            var2[0] = var5;
            var1 = _closure1_slot55;
            var1 = var3.bind(var4)(var2, var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(21);
        var1[0] = var5;
        var5 = {};
        var7 = 'hasChannel';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot46;
            var2 = undefined;
            var1 = arg1;
            var2 = var3.bind(var2)(var1);
            var1 = null;
            var1 = var1 != var2;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getBasicChannel';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
case 0:
                var3 = arg1;
                var1 = null;
                if(!(var1 == var3)) { _fun0029_ip = 161; continue _fun0029 }
case 162:
                var1 = undefined;
                return var1;
case 161:
                var2 = _closure1_slot46;
                var1 = undefined;
                var1 = var2.bind(var1)(var3);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getChannel';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
case 0:
                var3 = arg1;
                var1 = null;
                if(!(var1 == var3)) { _fun0030_ip = 161; continue _fun0030 }
case 162:
                var1 = undefined;
                return var1;
case 161:
                var2 = _closure1_slot47;
                var1 = undefined;
                var1 = var2.bind(var1)(var3);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'loadAllGuildAndPrivateChannelsFromDisk';
        var5['key'] = var7;
        var7 = function value() {
            _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
case 0:
                var3 = _closure1_slot41;
                var4 = _closure1_slot19;
                var1 = var4.getGuildIds;
                var1 = var1.bind(var4)();
                var6 = undefined;
                var5 = var3.bind(var6)(var1);
                var3 = var5.bind(var6)();
                var1 = var3.done;
                var4 = 'loadAllGuildAndPrivateChannelsFromDisk';
                if(var1) { _fun0031_ip = 163; continue _fun0031 }
case 164:
                var8 = _closure1_slot43;
                var7 = var3.value;
                var1 = _closure1_slot39;
                var1 = var1.Full;
                var1 = var8.bind(var6)(var7, var1, var4);
                var7 = var5.bind(var6)();
                var1 = var7.done;
                var3 = var7;
                if(!var1) { _fun0031_ip = 164; continue _fun0031 }
case 163:
                var1 = {};
                var10 = _closure1_slot24;
                var11 = var1;
                var3 = copyDataProperties(var11, var10);
                var10 = _closure1_slot26;
                var11 = var1;
                var2 = copyDataProperties(var11, var10);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getChannelIds';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0032: for(var _fun0032_ip = 0; ; ) switch(_fun0032_ip) {
case 0:
                var8 = arg1;
                var4 = _closure1_slot43;
                var1 = _closure1_slot39;
                var3 = var1.Basic;
                var5 = undefined;
                var1 = 'getChannelIds';
                var1 = var4.bind(var5)(var8, var3, var1);
                var6 = null;
                if(!(var6 != var8)) { _fun0032_ip = 165; continue _fun0032 }
case 54:
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 22;
                var1 = var4[var1];
                var4 = var3.bind(var5)(var1);
                var3 = var4.keys;
                var7 = _closure1_slot10;
                var1 = var7.getGuildBasicChannels;
                var1 = var1.bind(var7)(var8);
                if(!(var6 == var1)) { _fun0032_ip = 72; continue _fun0032 }
case 71:
                var7 = _closure1_slot25;
                var1 = var7[var8];
case 72:
                if(!(var6 == var1)) { _fun0032_ip = 166; continue _fun0032 }
case 167:
                var1 = _closure1_slot23;
case 166:
                var1 = var3.bind(var4)(var1);
                _fun0032_ip = 132; continue _fun0032;
case 165:
                var4 = _closure1_slot1;
                var6 = _closure1_slot2;
                var3 = 22;
                var3 = var6[var3];
                var4 = var4.bind(var5)(var3);
                var3 = var4.keys;
                var2 = _closure1_slot26;
                var1 = var3.bind(var4)(var2);
case 132:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'getMutablePrivateChannels';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot26;
            return var1;
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'getMutableBasicGuildChannelsForGuild';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0033: for(var _fun0033_ip = 0; ; ) switch(_fun0033_ip) {
case 0:
                var5 = arg1;
                var6 = _closure1_slot43;
                var1 = _closure1_slot39;
                var4 = var1.Basic;
                var3 = undefined;
                var1 = 'getMutableBasicGuildChannelsForGuild';
                var1 = var6.bind(var3)(var5, var4, var1);
                var3 = _closure1_slot10;
                var1 = var3.getGuildBasicChannels;
                var1 = var1.bind(var3)(var5);
                var3 = null;
                if(!(var3 == var1)) { _fun0033_ip = 168; continue _fun0033 }
case 76:
                var4 = _closure1_slot25;
                var1 = var4[var5];
case 168:
                if(!(var3 == var1)) { _fun0033_ip = 3; continue _fun0033 }
case 141:
                var1 = _closure1_slot23;
case 3:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'getMutableGuildChannelsForGuild';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0034: for(var _fun0034_ip = 0; ; ) switch(_fun0034_ip) {
case 0:
                var3 = arg1;
                var6 = _closure1_slot43;
                var1 = _closure1_slot39;
                var5 = var1.Full;
                var4 = undefined;
                var1 = 'getMutableGuildChannelsForGuild';
                var1 = var6.bind(var4)(var3, var5, var1);
                var1 = _closure1_slot25;
                var1 = var1[var3];
                var3 = null;
                if(!(var3 == var1)) { _fun0034_ip = 160; continue _fun0034 }
case 67:
                var1 = _closure1_slot23;
case 160:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'getSortedLinkedChannelsForGuild';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0035: for(var _fun0035_ip = 0; ; ) switch(_fun0035_ip) {
case 0:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 24;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.values;
                var5 = _closure1_slot29;
                var1 = arg1;
                var1 = var5[var1];
                var5 = null;
                if(!(var5 == var1)) { _fun0035_ip = 160; continue _fun0035 }
case 67:
                var1 = _closure1_slot23;
case 160:
                var3 = var2.bind(var3)(var1);
                var2 = var3.sort;
                var1 = function(arg1, arg2) {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 22;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.compare;
                    var1 = arg1;
                    var2 = var1.id;
                    var1 = arg2;
                    var1 = var1.id;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'getSortedPrivateChannels';
        var5['key'] = var7;
        var7 = function value() {
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 24;
            var2 = var3[var2];
            var3 = undefined;
            var2 = var4.bind(var3)(var2);
            var1 = _closure1_slot26;
            var2 = var2.bind(var3)(var1);
            var1 = var2.values;
            var3 = var1.bind(var2)();
            var2 = var3.sort;
            var1 = function(arg1, arg2) {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 22;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.compare;
                var1 = arg1;
                var2 = var1.lastMessageId;
                var1 = arg2;
                var1 = var1.lastMessageId;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var2 = var2.bind(var3)(var1);
            var1 = var2.reverse;
            var2 = var1.bind(var2)();
            var1 = var2.value;
            var1 = var1.bind(var2)();
            return var1;
        };
        var5['value'] = var7;
        var1[10] = var5;
        var5 = {};
        var7 = 'getDMFromUserId';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0036: for(var _fun0036_ip = 0; ; ) switch(_fun0036_ip) {
case 0:
                var2 = arg1;
                var1 = null;
                if(!(var1 == var2)) { _fun0036_ip = 161; continue _fun0036 }
case 162:
                var1 = undefined;
                return var1;
case 161:
                var1 = _closure1_slot30;
                var1 = var1[var2];
                return var1;
            }
        };
        var5['value'] = var7;
        var1[11] = var5;
        var5 = {};
        var7 = 'getDMChannelFromUserId';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0037: for(var _fun0037_ip = 0; ; ) switch(_fun0037_ip) {
case 0:
                var4 = arg1;
                var3 = this;
                var1 = null;
                if(!(var1 == var4)) { _fun0037_ip = 169; continue _fun0037 }
case 110:
                var1 = undefined;
                return var1;
case 169:
                var2 = var3.getChannel;
                var1 = _closure1_slot30;
                var1 = var1[var4];
                var1 = var2.bind(var3)(var1);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[12] = var5;
        var5 = {};
        var7 = 'getMutableDMsByUserIds';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot30;
            return var1;
        };
        var5['value'] = var7;
        var1[13] = var5;
        var5 = {};
        var7 = 'getDMUserIds';
        var5['key'] = var7;
        var7 = function value() {
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 22;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var4.bind(var2)(var3);
            var2 = var3.keys;
            var1 = _closure1_slot30;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[14] = var5;
        var5 = {};
        var7 = 'getPrivateChannelsVersion';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot31;
            return var1;
        };
        var5['value'] = var7;
        var1[15] = var5;
        var5 = {};
        var7 = 'getGuildChannelsVersion';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0038: for(var _fun0038_ip = 0; ; ) switch(_fun0038_ip) {
case 0:
                var2 = _closure1_slot32;
                var1 = arg1;
                var2 = var2[var1];
                var1 = null;
                var3 = var1 != var2;
                var1 = 0;
                if(!var3) { _fun0038_ip = 38; continue _fun0038 }
case 170:
                var1 = var2;
case 38:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[16] = var5;
        var5 = {};
        var7 = 'getAllThreadsForParent';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var2 = arg1;
            var _closure3_slot0 = var2;
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var3 = 24;
            var4 = var4[var3];
            var3 = undefined;
            var4 = var5.bind(var3)(var4);
            var3 = var4.values;
            var2 = _closure1_slot28;
            var3 = var3.bind(var4)(var2);
            var2 = var3.filter;
            var1 = function(arg1) {
                var1 = arg1;
                var2 = var1.parent_id;
                var1 = _closure3_slot0;
                var1 = var2 === var1;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[17] = var5;
        var5 = {};
        var7 = 'getAllThreadsForGuild';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var2 = arg1;
            var _closure3_slot0 = var2;
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var3 = 24;
            var4 = var4[var3];
            var3 = undefined;
            var4 = var5.bind(var3)(var4);
            var3 = var4.values;
            var2 = _closure1_slot28;
            var3 = var3.bind(var4)(var2);
            var2 = var3.filter;
            var1 = function(arg1) {
                var1 = arg1;
                var2 = var1.guild_id;
                var1 = _closure3_slot0;
                var1 = var2 === var1;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[18] = var5;
        var5 = {};
        var7 = 'getInitialOverlayState';
        var5['key'] = var7;
        var7 = function value() {
            var1 = {};
            var4 = _closure1_slot24;
            var5 = var1;
            var3 = copyDataProperties(var5, var4);
            var4 = _closure1_slot26;
            var5 = var1;
            var3 = copyDataProperties(var5, var4);
            var4 = _closure1_slot28;
            var5 = var1;
            var2 = copyDataProperties(var5, var4);
            return var1;
        };
        var5['value'] = var7;
        var1[19] = var5;
        var5 = {};
        var7 = 'getDebugInfo';
        var5['key'] = var7;
        var6 = function value() {
            var1 = {};
            var4 = global;
            var6 = var4.Array;
            var5 = var6.from;
            var2 = _closure1_slot34;
            var10 = var5.bind(var6)(var2);
            var9 = var10.sort;
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 22;
            var8 = var7[var2];
            var5 = undefined;
            var8 = var6.bind(var5)(var8);
            var8 = var8.compare;
            var8 = var9.bind(var10)(var8);
            var1['loadedGuildIds'] = var8;
            var10 = var4.Object;
            var9 = var10.keys;
            var8 = _closure1_slot35;
            var10 = var9.bind(var10)(var8);
            var9 = var10.sort;
            var8 = var7[var2];
            var8 = var6.bind(var5)(var8);
            var8 = var8.compare;
            var8 = var9.bind(var10)(var8);
            var1['pendingGuildLoads'] = var8;
            var8 = var4.Object;
            var4 = var8.keys;
            var3 = _closure1_slot25;
            var4 = var4.bind(var8)(var3);
            var3 = var4.sort;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.compare;
            var4 = var3.bind(var4)(var2);
            var3 = var4.map;
            var2 = function(arg1) {
                var5 = arg1;
                var2 = _closure1_slot56;
                var1 = undefined;
                var4 = var2.bind(var1)(var5);
                var1 = global;
                var1 = var1.HermesInternal;
                var3 = var1.concat;
                var2 = '';
                var1 = ': ';
                var1 = var3.bind(var2)(var5, var1, var4);
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            var1['guildSizes'] = var2;
            return var1;
        };
        var5['value'] = var6;
        var1[20] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var9 = var9.bind(var1)(var15);
    var9['displayName'] = var4;
    var4 = 19;
    var4 = var7[var4];
    var20 = var8.bind(var1)(var4);
    var4 = {};
    var15 = function handleBackgroundSync(arg1) {
        var2 = arg1;
        var3 = var2.guilds;
        var2 = _closure1_slot25;
        var _closure2_slot0 = var2;
        var2 = {};
        _closure1_slot24 = var2;
        var2 = {};
        _closure1_slot25 = var2;
        var2 = {};
        _closure1_slot32 = var2;
        var2 = {};
        _closure1_slot29 = var2;
        var2 = var3.forEach;
        var1 = function(arg1) {
            _fun0039: for(var _fun0039_ip = 0; ; ) switch(_fun0039_ip) {
case 0:
                var2 = arg1;
                var _closure3_slot0 = var2;
                var4 = var2.data_mode;
                var3 = 'unavailable';
                if(!(var3 !== var4)) { _fun0039_ip = 171; continue _fun0039 }
case 172:
                var4 = var2.data_mode;
                var3 = 'partial';
                if(!(var3 !== var4)) { _fun0039_ip = 173; continue _fun0039 }
case 129:
                var6 = _closure1_slot22;
                var5 = var6.fileOnly;
                var10 = var2.id;
                var4 = var2.channels;
                var9 = var4.length;
                var4 = global;
                var4 = var4.HermesInternal;
                var8 = var4.concat;
                var7 = 'BG sync contained full channels for ';
                var4 = ' #:';
                var4 = var8.bind(var7)(var10, var4, var9);
                var4 = var5.bind(var6)(var4);
                var6 = _closure1_slot45;
                var5 = var2.id;
                var4 = undefined;
                var4 = var6.bind(var4)(var5);
                var6 = _closure1_slot34;
                var5 = var6.add;
                var4 = var2.id;
                var4 = var5.bind(var6)(var4);
                var5 = _closure1_slot10;
                var4 = var5.restored;
                var3 = var2.id;
                var3 = var4.bind(var5)(var3);
                var5 = var2.channels;
                var4 = var5.forEach;
                var3 = function(arg1) {
                    var3 = _closure1_slot51;
                    var5 = _closure1_slot12;
                    var1 = _closure3_slot0;
                    var4 = var1.id;
                    var1 = undefined;
                    var2 = arg1;
                    var2 = var5.bind(var1)(var2, var4);
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var3 = var4.bind(var5)(var3);
                _fun0039_ip = 174; continue _fun0039;
case 173:
                var6 = _closure1_slot22;
                var5 = var6.fileOnly;
                var11 = var2.id;
                var7 = _closure1_slot56;
                var3 = var2.id;
                var9 = undefined;
                var10 = var7.bind(var9)(var3);
                var3 = global;
                var3 = var3.HermesInternal;
                var8 = var3.concat;
                var7 = 'Restoring guild channels b/c partial in bg sync, for ';
                var3 = ' #:';
                var3 = var8.bind(var7)(var11, var3, var10);
                var3 = var5.bind(var6)(var3);
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var3 = 24;
                var3 = var6[var3];
                var7 = var5.bind(var9)(var3);
                var6 = var7.forEach;
                var5 = _closure2_slot0;
                var3 = var2.id;
                var5 = var5[var3];
                var3 = _closure1_slot51;
                var3 = var6.bind(var7)(var5, var3);
                var3 = var2.partial_updates;
                var6 = var3.deleted_channel_ids;
                var3 = null;
                if(!(var3 == var6)) { _fun0039_ip = 175; continue _fun0039 }
case 30:
                var6 = new Array(0);
case 175:
                var7 = var6.length;
                var5 = 0;
                if(!(var7 > var5)) { _fun0039_ip = 176; continue _fun0039 }
case 177:
                var8 = _closure1_slot43;
                var7 = var2.id;
                var4 = _closure1_slot39;
                var5 = var4.Full;
                var4 = 'handleBackgroundSync';
                var4 = var8.bind(var9)(var7, var5, var4);
                var5 = var6.forEach;
                var4 = function(arg1) {
                    var3 = _closure1_slot53;
                    var2 = _closure1_slot24;
                    var1 = arg1;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var4 = var5.bind(var6)(var4);
case 176:
                var4 = var2.partial_updates;
                var4 = var4.channels;
                if(!(var3 != var4)) { _fun0039_ip = 174; continue _fun0039 }
case 178:
                var3 = var4.forEach;
                var1 = function(arg1) {
                    var3 = _closure1_slot51;
                    var5 = _closure1_slot12;
                    var1 = _closure3_slot0;
                    var4 = var1.id;
                    var1 = undefined;
                    var2 = arg1;
                    var2 = var5.bind(var1)(var2, var4);
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var1 = var3.bind(var4)(var1);
                _fun0039_ip = 174; continue _fun0039;
case 171:
                var6 = _closure1_slot22;
                var4 = var6.fileOnly;
                var10 = var2.id;
                var7 = _closure1_slot56;
                var3 = var2.id;
                var5 = undefined;
                var9 = var7.bind(var5)(var3);
                var3 = global;
                var3 = var3.HermesInternal;
                var8 = var3.concat;
                var7 = 'Restoring guild channels b/c unavailable in bg sync, for ';
                var3 = ' #:';
                var3 = var8.bind(var7)(var10, var3, var9);
                var3 = var4.bind(var6)(var3);
                var4 = _closure1_slot1;
                var6 = _closure1_slot2;
                var3 = 24;
                var3 = var6[var3];
                var4 = var4.bind(var5)(var3);
                var3 = var4.forEach;
                var5 = _closure2_slot0;
                var2 = var2.id;
                var2 = var5[var2];
                var1 = _closure1_slot51;
                var1 = var3.bind(var4)(var2, var1);
case 174:
                var1 = undefined;
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var4['BACKGROUND_SYNC'] = var15;
    var15 = function handleLazyCacheLoaded(arg1) {
        _fun0040: for(var _fun0040_ip = 0; ; ) switch(_fun0040_ip) {
case 0:
            var3 = _closure1_slot41;
            var1 = arg1;
            var2 = var1.guildChannels;
            var1 = undefined;
            var10 = var3.bind(var1)(var2);
            var3 = var10.bind(var1)();
            var2 = var3.done;
            var9 = 2;
            var8 = 0;
            var7 = 1;
            var6 = global;
            var5 = 'Lazy cache contained full guild channels for ';
            var4 = ' #:';
            if(var2) { _fun0040_ip = 179; continue _fun0040 }
case 130:
            var12 = var3.value;
            var2 = _closure1_slot6;
            var2 = var2.bind(var1)(var12, var9);
            var14 = var2[var8];
            var12 = var2[var7];
            var15 = _closure1_slot22;
            var13 = var15.fileOnly;
            var16 = var12.length;
            var2 = var6.HermesInternal;
            var2 = var2.concat;
            var2 = var2.bind(var5)(var14, var4, var16);
            var2 = var13.bind(var15)(var2);
            var13 = _closure1_slot34;
            var2 = var13.add;
            var2 = var2.bind(var13)(var14);
            var2 = _closure1_slot41;
            var13 = var2.bind(var1)(var12);
            var12 = var13.bind(var1)();
            var2 = var12.done;
            if(var2) { _fun0040_ip = 180; continue _fun0040 }
case 60:
            var15 = var12.value;
            var14 = _closure1_slot48;
            var2 = _closure1_slot17;
            var2 = var2.bind(var1)(var15);
            var2 = var14.bind(var1)(var2);
            var14 = var13.bind(var1)();
            var2 = var14.done;
            var12 = var14;
            if(!var2) { _fun0040_ip = 60; continue _fun0040 }
case 180:
            var12 = var10.bind(var1)();
            var2 = var12.done;
            var3 = var12;
            if(!var2) { _fun0040_ip = 130; continue _fun0040 }
case 179:
            return var1;
        }
    };
    var4['CACHE_LOADED_LAZY'] = var15;
    var15 = function handleCacheLoaded(arg1) {
        _fun0041: for(var _fun0041_ip = 0; ; ) switch(_fun0041_ip) {
case 0:
            var2 = arg1;
            var1 = var2.guilds;
            var1 = var1.length;
            var1 = var2.privateChannels;
            var4 = var2.initialGuildChannels;
            var8 = new Array(2);
            var8[0] = var1;
            var8[1] = var4;
            var1 = var8.length;
            var3 = 0;
            var5 = var3 < var1;
            var1 = undefined;
            var7 = 20;
            var6 = 0;
            if(!var5) { _fun0041_ip = 61; continue _fun0041 }
case 168:
            var9 = _closure1_slot41;
            var5 = var8[var6];
            var10 = var9.bind(var1)(var5);
            var9 = var10.bind(var1)();
            var5 = var9.done;
            if(var5) { _fun0041_ip = 181; continue _fun0041 }
case 96:
            var14 = var9.value;
            var11 = _closure1_slot48;
            var12 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var7];
            var13 = var12.bind(var1)(var5);
            var12 = var13.deserializeChannel;
            var5 = _closure1_slot17;
            var5 = var5.bind(var1)(var14);
            var5 = var12.bind(var13)(var5);
            var5 = var11.bind(var1)(var5);
            var11 = var10.bind(var1)();
            var5 = var11.done;
            var9 = var11;
            if(!var5) { _fun0041_ip = 96; continue _fun0041 }
case 181:
            var6 = var6 + 1;
            var5 = var8.length;
            if(var6 < var5) { _fun0041_ip = 168; continue _fun0041 }
case 61:
            var5 = var4[var3];
            var3 = null;
            var6 = var3 == var5;
            var4 = undefined;
            if(var6) { _fun0041_ip = 182; continue _fun0041 }
case 183:
            var4 = var5.guild_id;
case 182:
            if(!(var3 != var4)) { _fun0041_ip = 184; continue _fun0041 }
case 143:
            var6 = _closure1_slot22;
            var5 = var6.fileOnly;
            var3 = global;
            var3 = var3.HermesInternal;
            var7 = var3.concat;
            var3 = 'Early cache contained full guild channels for ';
            var3 = var7.bind(var3)(var4);
            var3 = var5.bind(var6)(var3);
            var3 = _closure1_slot34;
            var2 = var3.add;
            var2 = var2.bind(var3)(var4);
case 184:
            return var1;
        }
    };
    var4['CACHE_LOADED'] = var15;
    var15 = function handleChannelCreate(arg1) {
        var3 = _closure1_slot48;
        var1 = arg1;
        var2 = var1.channel;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4['CHANNEL_CREATE'] = var15;
    var4['CHANNEL_DELETE'] = var11;
    var15 = function handleAddRecipient(arg1) {
        _fun0042: for(var _fun0042_ip = 0; ; ) switch(_fun0042_ip) {
case 0:
            var2 = arg1;
            var5 = _closure1_slot47;
            var1 = var2.channelId;
            var4 = undefined;
            var8 = var5.bind(var4)(var1);
            var5 = _closure1_slot18;
            var1 = var5.getId;
            var7 = var1.bind(var5)();
            var1 = null;
            var5 = var1 == var8;
            if(var5) { _fun0042_ip = 185; continue _fun0042 }
case 186:
            var1 = var8.isPrivate;
            var1 = var1.bind(var8)();
            var5 = !var1;
case 185:
            var1 = !var5;
            if(var5) { _fun0042_ip = 75; continue _fun0042 }
case 55:
            var3 = _closure1_slot48;
            var6 = var8.addRecipient;
            var5 = var2.user;
            var5 = var5.id;
            var2 = var2.nick;
            var2 = var6.bind(var8)(var5, var2, var7);
            var2 = var3.bind(var4)(var2);
            var1 = true;
case 75:
            return var1;
        }
    };
    var4['CHANNEL_RECIPIENT_ADD'] = var15;
    var15 = function handleRemoveRecipient(arg1) {
        _fun0043: for(var _fun0043_ip = 0; ; ) switch(_fun0043_ip) {
case 0:
            var2 = arg1;
            var5 = _closure1_slot47;
            var1 = var2.channelId;
            var4 = undefined;
            var6 = var5.bind(var4)(var1);
            var1 = null;
            var5 = var1 == var6;
            if(var5) { _fun0043_ip = 164; continue _fun0043 }
case 137:
            var1 = var6.isPrivate;
            var1 = var1.bind(var6)();
            var5 = !var1;
case 164:
            var1 = !var5;
            if(var5) { _fun0043_ip = 139; continue _fun0043 }
case 78:
            var3 = _closure1_slot48;
            var5 = var6.removeRecipient;
            var2 = var2.user;
            var2 = var2.id;
            var2 = var5.bind(var6)(var2);
            var2 = var3.bind(var4)(var2);
            var1 = true;
case 139:
            return var1;
        }
    };
    var4['CHANNEL_RECIPIENT_REMOVE'] = var15;
    var15 = function handleUpdateChannels(arg1) {
        _fun0044: for(var _fun0044_ip = 0; ; ) switch(_fun0044_ip) {
case 0:
            var1 = arg1;
            var5 = var1.channels;
            var4 = var5.some;
            var3 = function(arg1) {
                _fun0045: for(var _fun0045_ip = 0; ; ) switch(_fun0045_ip) {
case 0:
                    var3 = arg1;
                    var4 = _closure1_slot47;
                    var1 = var3.id;
                    var2 = undefined;
                    var4 = var4.bind(var2)(var1);
                    var6 = var3.nsfw;
                    var5 = null;
                    var7 = var5 == var4;
                    var1 = undefined;
                    if(var7) { _fun0045_ip = 186; continue _fun0045 }
case 54:
                    var1 = var4.nsfw;
case 186:
                    var1 = var6 !== var1;
                    if(var1) { _fun0045_ip = 187; continue _fun0045 }
case 188:
                    var3 = var3.type;
                    var5 = var5 == var4;
                    var2 = undefined;
                    if(var5) { _fun0045_ip = 69; continue _fun0045 }
case 141:
                    var2 = var4.type;
case 69:
                    var1 = var3 !== var2;
case 187:
                    return var1;
                }
            };
            var4 = var4.bind(var5)(var3);
            var6 = _closure1_slot41;
            var5 = var1.channels;
            var1 = undefined;
            var7 = var6.bind(var1)(var5);
            var6 = var7.bind(var1)();
            var5 = var6.done;
            if(var5) { _fun0044_ip = 189; continue _fun0044 }
case 62:
            var8 = _closure1_slot48;
            var5 = var6.value;
            var5 = var8.bind(var1)(var5);
            var8 = var7.bind(var1)();
            var5 = var8.done;
            var6 = var8;
            if(!var5) { _fun0044_ip = 62; continue _fun0044 }
case 189:
            if(!var4) { _fun0044_ip = 58; continue _fun0044 }
case 72:
            var4 = global;
            var5 = var4.Object;
            var4 = var5.values;
            var3 = _closure1_slot28;
            var4 = var4.bind(var5)(var3);
            var3 = var4.forEach;
            var2 = function(arg1) {
                var3 = _closure1_slot48;
                var1 = undefined;
                var2 = arg1;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var2 = var3.bind(var4)(var2);
case 58:
            return var1;
        }
    };
    var4['CHANNEL_UPDATES'] = var15;
    var15 = function handleConnectionOpenSupplemental(arg1) {
        _fun0046: for(var _fun0046_ip = 0; ; ) switch(_fun0046_ip) {
case 0:
            var1 = arg1;
            var3 = var1.lazyPrivateChannels;
            var4 = _closure1_slot27;
            var2 = null;
            if(!(var2 != var4)) { _fun0046_ip = 6; continue _fun0046 }
case 190:
            var2 = {};
            _closure1_slot26 = var2;
            var5 = _closure1_slot27;
            var4 = var5.forEach;
            var2 = _closure1_slot49;
            var2 = var4.bind(var5)(var2);
case 6:
            var2 = var3.forEach;
            var1 = _closure1_slot49;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        }
    };
    var4['CONNECTION_OPEN_SUPPLEMENTAL'] = var15;
    var15 = function handleConnectionOpen(arg1) {
        _fun0047: for(var _fun0047_ip = 0; ; ) switch(_fun0047_ip) {
case 0:
            var1 = arg1;
            var11 = _closure1_slot25;
            var3 = {};
            _closure1_slot30 = var3;
            var3 = {};
            _closure1_slot24 = var3;
            var3 = {};
            _closure1_slot25 = var3;
            var3 = {};
            _closure1_slot29 = var3;
            var3 = {};
            _closure1_slot28 = var3;
            var3 = {};
            _closure1_slot32 = var3;
            var3 = {};
            _closure1_slot37 = var3;
            var3 = {};
            _closure1_slot35 = var3;
            var10 = global;
            var4 = var10.Date;
            var3 = var4.now;
            var3 = var3.bind(var4)();
            _closure1_slot36 = var3;
            var3 = var1.initialPrivateChannels;
            _closure1_slot27 = var3;
            var5 = var1.initialPrivateChannels;
            var4 = var5.forEach;
            var3 = _closure1_slot49;
            var3 = var4.bind(var5)(var3);
            var4 = _closure1_slot41;
            var3 = var1.guilds;
            var1 = undefined;
            var9 = var4.bind(var1)(var3);
            var4 = var9.bind(var1)();
            var3 = var4.done;
            var8 = 24;
            var7 = 'Restoring guild channels for ';
            var6 = ' #:';
            var5 = 'partial';
            if(var3) { _fun0047_ip = 191; continue _fun0047 }
case 192:
            var12 = var4.value;
            var3 = var12.dataMode;
            if(!(var5 === var3)) { _fun0047_ip = 193; continue _fun0047 }
case 194:
            var13 = _closure1_slot1;
            var3 = _closure1_slot2;
            var3 = var3[var8];
            var15 = var13.bind(var1)(var3);
            var14 = var15.forEach;
            var3 = var12.id;
            var13 = var11[var3];
            var3 = _closure1_slot51;
            var3 = var14.bind(var15)(var13, var3);
            var14 = _closure1_slot22;
            var13 = var14.fileOnly;
            var16 = var12.id;
            var15 = _closure1_slot56;
            var3 = var12.id;
            var15 = var15.bind(var1)(var3);
            var3 = var10.HermesInternal;
            var3 = var3.concat;
            var3 = var3.bind(var7)(var16, var6, var15);
            var3 = var13.bind(var14)(var3);
case 193:
            var3 = _closure1_slot52;
            var3 = var3.bind(var1)(var12);
            var12 = var9.bind(var1)();
            var3 = var12.done;
            var4 = var12;
            if(!var3) { _fun0047_ip = 192; continue _fun0047 }
case 191:
            var2 = _closure1_slot55;
            var2 = var2.bind(var1)();
            return var1;
        }
    };
    var4['CONNECTION_OPEN'] = var15;
    var15 = function handlePutOverwriteSuccess(arg1) {
        _fun0048: for(var _fun0048_ip = 0; ; ) switch(_fun0048_ip) {
case 0:
            var1 = arg1;
            var4 = var1.channelId;
            var7 = var1.overwrite;
            var3 = _closure1_slot47;
            var1 = undefined;
            var6 = var3.bind(var1)(var4);
            var3 = null;
            if(!(var3 != var6)) { _fun0048_ip = 163; continue _fun0048 }
case 138:
            var3 = _closure1_slot48;
            var5 = var6.set;
            var4 = {};
            var8 = var6.permissionOverwrites;
            var9 = var4;
            var2 = copyDataProperties(var9, var8);
            var2 = var7.id;
            var4[var2] = var7;
            var2 = 'permissionOverwrites';
            var2 = var5.bind(var6)(var2, var4);
            var2 = var3.bind(var1)(var2);
            return var1;
case 163:
            var1 = false;
            return var1;
        }
    };
    var4['CHANNEL_PERMISSIONS_PUT_OVERWRITE_SUCCESS'] = var15;
    var15 = function handleDeleteOverwriteSuccess(arg1) {
        _fun0049: for(var _fun0049_ip = 0; ; ) switch(_fun0049_ip) {
case 0:
            var1 = arg1;
            var5 = var1.channelId;
            var3 = var1.overwriteId;
            var4 = _closure1_slot47;
            var1 = undefined;
            var6 = var4.bind(var1)(var5);
            var4 = null;
            if(!(var4 != var6)) { _fun0049_ip = 68; continue _fun0049 }
case 138:
            var5 = {};
            var7 = var6.permissionOverwrites;
            var8 = var5;
            var4 = copyDataProperties(var8, var7);
            var3 = delete var5[var3];
            var3 = _closure1_slot48;
            var4 = var6.set;
            var2 = 'permissionOverwrites';
            var2 = var4.bind(var6)(var2, var5);
            var2 = var3.bind(var1)(var2);
            return var1;
case 68:
            var1 = false;
            return var1;
        }
    };
    var4['CHANNEL_PERMISSIONS_DELETE_OVERWRITE_SUCCESS'] = var15;
    var15 = function handleCreateGuild(arg1) {
        var3 = _closure1_slot52;
        var1 = arg1;
        var2 = var1.guild;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4['GUILD_CREATE'] = var15;
    var15 = function handleGuildDelete(arg1) {
        var2 = arg1;
        var5 = _closure1_slot22;
        var4 = var5.fileOnly;
        var1 = var2.guild;
        var7 = var1.id;
        var1 = global;
        var1 = var1.HermesInternal;
        var6 = var1.concat;
        var1 = 'GuildDelete of ';
        var1 = var6.bind(var1)(var7);
        var1 = var4.bind(var5)(var1);
        var5 = _closure1_slot45;
        var1 = var2.guild;
        var4 = var1.id;
        var1 = undefined;
        var4 = var5.bind(var1)(var4);
        var6 = _closure1_slot34;
        var5 = var6.delete;
        var4 = var2.guild;
        var4 = var4.id;
        var4 = var5.bind(var6)(var4);
        var4 = _closure1_slot10;
        var3 = var4.invalidate;
        var2 = var2.guild;
        var2 = var2.id;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var4['GUILD_DELETE'] = var15;
    var4['LOAD_ARCHIVED_THREADS_SUCCESS'] = var13;
    var15 = function handleLoadChannels(arg1) {
        _fun0050: for(var _fun0050_ip = 0; ; ) switch(_fun0050_ip) {
case 0:
            var2 = _closure1_slot41;
            var1 = arg1;
            var1 = var1.channels;
            var8 = undefined;
            var7 = var2.bind(var8)(var1);
            var2 = var7.bind(var8)();
            var1 = var2.done;
            var6 = global;
            var5 = 'Lazy loaded guild channels for ';
            var4 = 20;
            var3 = var2;
            var2 = undefined;
            if(var1) { _fun0050_ip = 195; continue _fun0050 }
case 76:
            var1 = var3.value;
            var12 = var1.guildId;
            var10 = var1.channels;
            var13 = _closure1_slot22;
            var11 = var13.fileOnly;
            var1 = var6.HermesInternal;
            var1 = var1.concat;
            var1 = var1.bind(var5)(var12);
            var1 = var11.bind(var13)(var1);
            var11 = _closure1_slot1;
            var1 = _closure1_slot2;
            var1 = var1[var4];
            var1 = var11.bind(var8)(var1);
            var1 = var1.bind(var8)(var10);
            var11 = _closure1_slot34;
            var1 = var11.add;
            var1 = var1.bind(var11)(var12);
            var11 = _closure1_slot10;
            var1 = var11.restored;
            var1 = var1.bind(var11)(var12);
            var1 = _closure1_slot41;
            var11 = var1.bind(var8)(var10);
            var10 = var11.bind(var8)();
            var1 = var10.done;
            if(var1) { _fun0050_ip = 196; continue _fun0050 }
case 197:
            var12 = var10.value;
            var15 = var6.Object;
            var14 = var15.hasOwn;
            var13 = _closure1_slot24;
            var1 = var12.id;
            var1 = var14.bind(var15)(var13, var1);
            if(var1) { _fun0050_ip = 198; continue _fun0050 }
case 199:
            var13 = _closure1_slot51;
            var1 = _closure1_slot17;
            var1 = var1.bind(var8)(var12);
            var1 = var13.bind(var8)(var1);
case 198:
            var13 = var11.bind(var8)();
            var1 = var13.done;
            var10 = var13;
            var2 = var12;
            if(!var1) { _fun0050_ip = 197; continue _fun0050 }
case 196:
            var10 = var7.bind(var8)();
            var1 = var10.done;
            var3 = var10;
            if(!var1) { _fun0050_ip = 76; continue _fun0050 }
case 195:
            var1 = false;
            return var1;
        }
    };
    var4['LOAD_CHANNELS'] = var15;
    var4['LOAD_MESSAGES_AROUND_SUCCESS'] = var14;
    var4['LOAD_MESSAGES_SUCCESS'] = var14;
    var4['LOAD_THREADS_SUCCESS'] = var13;
    var13 = function handleLogout() {
        var4 = _closure1_slot22;
        var3 = var4.fileOnly;
        var1 = 'initializeClear()';
        var1 = var3.bind(var4)(var1);
        var1 = {};
        _closure1_slot30 = var1;
        var1 = {};
        _closure1_slot24 = var1;
        var1 = {};
        _closure1_slot25 = var1;
        var1 = {};
        _closure1_slot32 = var1;
        var1 = {};
        _closure1_slot29 = var1;
        var1 = {};
        _closure1_slot26 = var1;
        var1 = {};
        _closure1_slot37 = var1;
        var1 = {};
        _closure1_slot28 = var1;
        var1 = global;
        var3 = var1.Set;
        var4 = var3.prototype;
        var4 = Object.create(var4, {constructor: {value: var3}});
        var6 = var4;
        var3 = new var6[var3](var5);
        var3 = var3 instanceof Object ? var3 : var4;
        _closure1_slot34 = var3;
        var3 = {};
        _closure1_slot35 = var3;
        var3 = var1.Date;
        var1 = var3.now;
        var1 = var1.bind(var3)();
        _closure1_slot36 = var1;
        var1 = undefined;
        return var1;
    };
    var4['LOGOUT'] = var13;
    var13 = function handleInitialize(arg1) {
        _fun0051: for(var _fun0051_ip = 0; ; ) switch(_fun0051_ip) {
case 0:
            var1 = arg1;
            var2 = var1.guilds;
            var2 = var2.length;
            var3 = _closure1_slot41;
            var2 = var1.channels;
            var1 = undefined;
            var5 = var3.bind(var1)(var2);
            var3 = var5.bind(var1)();
            var2 = var3.done;
            var4 = 20;
            if(var2) { _fun0051_ip = 86; continue _fun0051 }
case 9:
            var10 = var3.value;
            var7 = _closure1_slot48;
            var8 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var4];
            var9 = var8.bind(var1)(var2);
            var8 = var9.deserializeChannel;
            var2 = _closure1_slot17;
            var2 = var2.bind(var1)(var10);
            var2 = var8.bind(var9)(var2);
            var2 = var7.bind(var1)(var2);
            var7 = var5.bind(var1)();
            var2 = var7.done;
            var3 = var7;
            if(!var2) { _fun0051_ip = 9; continue _fun0051 }
case 86:
            return var1;
        }
    };
    var4['OVERLAY_INITIALIZE'] = var13;
    var4['SEARCH_MESSAGES_SUCCESS'] = var12;
    var4['MOD_VIEW_SEARCH_MESSAGES_SUCCESS'] = var12;
    var4['THREAD_CREATE'] = var5;
    var4['THREAD_DELETE'] = var11;
    var10 = function handleThreadListSync(arg1) {
        var1 = arg1;
        var3 = var1.threads;
        var2 = var3.forEach;
        var1 = function(arg1) {
            _fun0052: for(var _fun0052_ip = 0; ; ) switch(_fun0052_ip) {
case 0:
                var3 = arg1;
                var5 = _closure1_slot16;
                var4 = var5.has;
                var2 = var3.type;
                var2 = var4.bind(var5)(var2);
                if(!var2) { _fun0052_ip = 54; continue _fun0052 }
case 38:
                var2 = _closure1_slot48;
                var1 = undefined;
                var1 = var2.bind(var1)(var3);
case 54:
                var1 = undefined;
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var4['THREAD_LIST_SYNC'] = var10;
    var4['THREAD_UPDATE'] = var5;
    var5 = var9.prototype;
    var5 = Object.create(var5, {constructor: {value: var9}});
    var21 = var5;
    var19 = var4;
    var4 = new var21[var9](var20, var19, var18);
    var4 = var4 instanceof Object ? var4 : var5;
    var5 = 26;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'stores/ChannelStore.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['ChannelLoader'] = var2;
    return var1;
})();