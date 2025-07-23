// app/stores/ChannelStore.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var8 = native3;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
 2: // try_start_0
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
 70: // try_end0
            _fun0001_ip = 74; continue _fun0001;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
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
 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0002_ip = 45; continue _fun0002 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 45:
            if(var2) { _fun0002_ip = 54; continue _fun0002 }
 48:
            var2 = var3.@@iterator;
 54:
            if(var2) { _fun0002_ip = 342; continue _fun0002 }
 60:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0002_ip = 322; continue _fun0002 }
 85:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0002_ip = 282; continue _fun0002 }
 95:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0002_ip = 269; continue _fun0002 }
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
            if(!var7) { _fun0002_ip = 162; continue _fun0002 }
 157:
            var7 = var3.constructor;
 162:
            var10 = var9;
            if(!var7) { _fun0002_ip = 178; continue _fun0002 }
 168:
            var7 = var3.constructor;
            var10 = var7.name;
 178:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0002_ip = 248; continue _fun0002 }
 186:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0002_ip = 248; continue _fun0002 }
 194:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0002_ip = 233; continue _fun0002 }
 204:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0002_ip = 246; continue _fun0002 }
 233:
            var9 = _closure1_slot42;
            var7 = var9.bind(var8)(var3, var8);
 246:
            _fun0002_ip = 264; continue _fun0002;
 248:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 264:
            var6 = var7;
            _fun0002_ip = 282; continue _fun0002;
 269:
            var7 = _closure1_slot42;
            var6 = var7.bind(var8)(var3, var8);
 282:
            var4 = var6;
            if(var4) { _fun0002_ip = 322; continue _fun0002 }
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
            if(!var4) { _fun0002_ip = 329; continue _fun0002 }
 325:
            _closure2_slot0 = var4;
 329:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0003_ip = 56; continue _fun0003 }
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
                    _fun0003_ip = 67; continue _fun0003;
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
 342:
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
 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0004_ip = 23; continue _fun0004 }
 14:
            var2 = var4.length;
            var1 = var3 > var2;
 23:
            var2 = undefined;
            if(!var1) { _fun0004_ip = 33; continue _fun0004 }
 28:
            var2 = var4.length;
 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0004_ip = 70; continue _fun0004 }
 55:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0004_ip = 55; continue _fun0004 }
 70:
            return var1;
        }
    };
    var _closure1_slot42 = var1;
    var1 = function ensureGuildLoaded(arg1, arg2, arg3) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var8 = arg1;
            var9 = arg2;
            var _closure2_slot0 = var8;
            var3 = null;
            if(!(var3 != var8)) { _fun0005_ip = 668; continue _fun0005 }
 21:
            var1 = 'null';
            if(!(var1 !== var8)) { _fun0005_ip = 668; continue _fun0005 }
 32:
            var5 = _closure1_slot34;
            var1 = var5.has;
            var1 = var1.bind(var5)(var8);
            if(var1) { _fun0005_ip = 668; continue _fun0005 }
 55:
            var1 = _closure1_slot39;
            var1 = var1.Basic;
            if(!(var9 === var1)) { _fun0005_ip = 90; continue _fun0005 }
 69:
            var5 = _closure1_slot10;
            var1 = var5.hasGuild;
            var1 = var1.bind(var5)(var8);
            if(var1) { _fun0005_ip = 668; continue _fun0005 }
 90:
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var1 = 16;
            var1 = var6[var1];
            var10 = undefined;
            var5 = var5.bind(var10)(var1);
            var1 = var5.database;
            var7 = var1.bind(var5)();
            var _closure2_slot1 = var7;
            if(!(var3 != var7)) { _fun0005_ip = 668; continue _fun0005 }
 133:
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
            if(!(var3 != var5)) { _fun0005_ip = 584; continue _fun0005 }
 264:
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
            if(!(var9 !== var4)) { _fun0005_ip = 341; continue _fun0005 }
 329:
            var4 = _closure1_slot38;
            var4 = var4 + var5;
            _closure1_slot38 = var4;
 341:
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
            if(var4) { _fun0005_ip = 519; continue _fun0005 }
 451:
            var12 = var5.value;
            var14 = var1.Object;
            var13 = var14.hasOwn;
            var11 = _closure1_slot24;
            var4 = var12.id;
            var4 = var13.bind(var14)(var11, var4);
            if(var4) { _fun0005_ip = 504; continue _fun0005 }
 486:
            var11 = _closure1_slot51;
            var4 = _closure1_slot17;
            var4 = var4.bind(var10)(var12);
            var4 = var11.bind(var10)(var4);
 504:
            var11 = var9.bind(var10)();
            var4 = var11.done;
            var5 = var11;
            if(!var4) { _fun0005_ip = 451; continue _fun0005 }
 519:
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
            _fun0005_ip = 668; continue _fun0005;
 584:
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
 668:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot43 = var1;
    var1 = function ensureChannelLoaded(arg1, arg2, arg3) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var4 = arg1;
            var5 = arg2;
            var1 = global;
            var7 = var1.Object;
            var6 = var7.hasOwn;
            var3 = _closure1_slot24;
            var3 = var6.bind(var7)(var3, var4);
            if(var3) { _fun0006_ip = 184; continue _fun0006 }
 39:
            var7 = var1.Object;
            var6 = var7.hasOwn;
            var3 = _closure1_slot26;
            var3 = var6.bind(var7)(var3, var4);
            if(var3) { _fun0006_ip = 184; continue _fun0006 }
 64:
            var7 = var1.Object;
            var6 = var7.hasOwn;
            var3 = _closure1_slot28;
            var3 = var6.bind(var7)(var3, var4);
            if(var3) { _fun0006_ip = 184; continue _fun0006 }
 89:
            var6 = var1.Object;
            var3 = var6.hasOwn;
            var1 = _closure1_slot33;
            var1 = var3.bind(var6)(var1, var4);
            if(var1) { _fun0006_ip = 184; continue _fun0006 }
 114:
            var1 = _closure1_slot39;
            var1 = var1.Full;
            if(!(var5 === var1)) { _fun0006_ip = 184; continue _fun0006 }
 128:
            var3 = _closure1_slot10;
            var1 = var3.getBasicChannel;
            var1 = var1.bind(var3)(var4);
            var6 = null;
            var7 = var6 == var1;
            var4 = undefined;
            var3 = undefined;
            if(var7) { _fun0006_ip = 161; continue _fun0006 }
 156:
            var3 = var1.guild_id;
 161:
            if(!(var6 != var3)) { _fun0006_ip = 184; continue _fun0006 }
 165:
            var3 = _closure1_slot43;
            var2 = var1.guild_id;
            var1 = arg3;
            var1 = var3.bind(var4)(var2, var5, var1);
 184:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot44 = var1;
    var1 = function deleteGuildChannels(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
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
            if(!(var4 != var3)) { _fun0007_ip = 156; continue _fun0007 }
 59:
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
            if(var3) { _fun0007_ip = 148; continue _fun0007 }
 120:
            var8 = var5.value;
            var3 = _closure1_slot24;
            var3 = delete var3[var8];
            var8 = var6.bind(var7)();
            var3 = var8.done;
            var5 = var8;
            if(!var3) { _fun0007_ip = 120; continue _fun0007 }
 148:
            var3 = _closure1_slot25;
            var3 = delete var3[var2];
 156:
            var3 = _closure1_slot29;
            var3 = var3[var2];
            if(!(var4 != var3)) { _fun0007_ip = 176; continue _fun0007 }
 168:
            var1 = _closure1_slot29;
            var1 = delete var1[var2];
 176:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot45 = var1;
    var1 = function _getBasicChannel2(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
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
            if(!(var3 == var1)) { _fun0008_ip = 55; continue _fun0008 }
 47:
            var5 = _closure1_slot26;
            var1 = var5[var4];
 55:
            if(!(var3 == var1)) { _fun0008_ip = 67; continue _fun0008 }
 59:
            var5 = _closure1_slot28;
            var1 = var5[var4];
 67:
            if(!(var3 == var1)) { _fun0008_ip = 79; continue _fun0008 }
 71:
            var5 = _closure1_slot33;
            var1 = var5[var4];
 79:
            if(!(var3 == var1)) { _fun0008_ip = 98; continue _fun0008 }
 83:
            var3 = _closure1_slot10;
            var2 = var3.getBasicChannel;
            var1 = var2.bind(var3)(var4);
 98:
            return var1;
        }
    };
    var _closure1_slot46 = var1;
    var1 = function _getChannel(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
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
            if(!(var4 == var1)) { _fun0009_ip = 55; continue _fun0009 }
 47:
            var5 = _closure1_slot26;
            var1 = var5[var3];
 55:
            if(!(var4 == var1)) { _fun0009_ip = 67; continue _fun0009 }
 59:
            var5 = _closure1_slot28;
            var1 = var5[var3];
 67:
            if(!(var4 == var1)) { _fun0009_ip = 79; continue _fun0009 }
 71:
            var5 = _closure1_slot33;
            var1 = var5[var3];
 79:
            if(!(var4 == var1)) { _fun0009_ip = 91; continue _fun0009 }
 83:
            var2 = _closure1_slot37;
            var1 = var2[var3];
 91:
            return var1;
        }
    };
    var _closure1_slot47 = var1;
    var1 = function setChannel(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
            var3 = arg1;
            var1 = var3.isPrivate;
            var2 = var1.bind(var3)();
            if(var2) { _fun0010_ip = 80; continue _fun0010 }
 19:
            var2 = var3.isThread;
            var2 = var2.bind(var3)();
            if(var2) { _fun0010_ip = 67; continue _fun0010 }
 32:
            var5 = _closure1_slot14;
            var4 = var5.has;
            var2 = var3.type;
            var2 = var4.bind(var5)(var2);
            if(!var2) { _fun0010_ip = 104; continue _fun0010 }
 54:
            var4 = _closure1_slot51;
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            _fun0010_ip = 104; continue _fun0010;
 67:
            var4 = _closure1_slot50;
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            _fun0010_ip = 104; continue _fun0010;
 80:
            var4 = _closure1_slot37;
            var2 = var3.id;
            var2 = delete var4[var2];
            var2 = _closure1_slot49;
            var1 = undefined;
            var1 = var2.bind(var1)(var3);
 104:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot48 = var1;
    var1 = function setPrivateChannel(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
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
            if(!(var2 == var3)) { _fun0011_ip = 109; continue _fun0011 }
 32:
            var4 = _closure1_slot26;
            var3 = var1.id;
            var4[var3] = var1;
            var4 = var1.type;
            var3 = _closure1_slot21;
            var3 = var3.DM;
            if(!(var4 === var3)) { _fun0011_ip = 90; continue _fun0011 }
 67:
            var4 = _closure1_slot30;
            var3 = var1.getRecipientId;
            var3 = var3.bind(var1)();
            var1 = var1.id;
            var4[var3] = var1;
 90:
            var3 = _closure1_slot31;
            var1 = 1;
            var1 = var3 + var1;
            _closure1_slot31 = var1;
            var1 = undefined;
            return var1;
 109:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot49 = var1;
    var1 = function setThread(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
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
            if(var10) { _fun0012_ip = 56; continue _fun0012 }
 50:
            var11 = var9.nsfw;
 56:
            var10 = true;
            var10 = var10 === var11;
            var3['nsfw'] = var10;
            var10 = var8 == var9;
            var8 = undefined;
            if(var10) { _fun0012_ip = 81; continue _fun0012 }
 76:
            var8 = var9.type;
 81:
            var3['parentChannelThreadType'] = var8;
            var3 = var7.bind(var5)(var3);
            var6[var4] = var3;
            var3 = var5.isScheduledForDeletion;
            var3 = var3.bind(var5)();
            if(!var3) { _fun0012_ip = 152; continue _fun0012 }
 108:
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
 152:
            return var1;
        }
    };
    var _closure1_slot50 = var1;
    var1 = function setGuildChannelRaw(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
            var3 = arg1;
            var2 = var3.id;
            var4 = var3.guild_id;
            var5 = _closure1_slot24;
            var5[var2] = var3;
            var6 = _closure1_slot25;
            var5 = var6[var4];
            var7 = null;
            if(!(var7 == var5)) { _fun0013_ip = 40; continue _fun0013 }
 38:
            var5 = {};
 40:
            var6[var4] = var5;
            var5 = _closure1_slot25;
            var5 = var5[var4];
            var5[var2] = var3;
            var6 = _closure1_slot32;
            var5 = var6[var4];
            var9 = var7 != var5;
            var8 = 0;
            if(!var9) { _fun0013_ip = 76; continue _fun0013 }
 73:
            var8 = var5;
 76:
            var5 = 1;
            var5 = var8 + var5;
            var6[var4] = var5;
            var5 = var3.linkedLobby;
            if(!(var7 == var5)) { _fun0013_ip = 115; continue _fun0013 }
 97:
            var5 = _closure1_slot29;
            var5 = var5[var4];
            if(!(var7 != var5)) { _fun0013_ip = 145; continue _fun0013 }
 109:
            var5 = delete var5[var2];
            _fun0013_ip = 145; continue _fun0013;
 115:
            var6 = _closure1_slot29;
            var5 = var6[var4];
            if(!(var7 == var5)) { _fun0013_ip = 129; continue _fun0013 }
 127:
            var5 = {};
 129:
            var6[var4] = var5;
            var1 = _closure1_slot29;
            var1 = var1[var4];
            var1[var2] = var3;
 145:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot51 = var1;
    var1 = function handleOneGuildCreate(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
            var2 = arg1;
            var7 = var2.id;
            var1 = var2.channels;
            var2 = var2.threads;
            var4 = var1.op;
            var3 = 'full_sync';
            if(!(var3 !== var4)) { _fun0014_ip = 238; continue _fun0014 }
 38:
            var3 = 'update';
            if(!(var3 === var4)) { _fun0014_ip = 395; continue _fun0014 }
 49:
            var3 = var1.writes;
            var3 = var3.length;
            var5 = 0;
            var3 = var3 > var5;
            if(var3) { _fun0014_ip = 84; continue _fun0014 }
 69:
            var4 = var1.deletes;
            var4 = var4.length;
            var3 = var4 > var5;
 84:
            if(!var3) { _fun0014_ip = 105; continue _fun0014 }
 87:
            var4 = _closure1_slot10;
            var3 = var4.invalidate;
            var3 = var3.bind(var4)(var7);
 105:
            var4 = _closure1_slot41;
            var3 = var1.deletes;
            var6 = undefined;
            var5 = var4.bind(var6)(var3);
            var4 = var5.bind(var6)();
            var3 = var4.done;
            if(var3) { _fun0014_ip = 174; continue _fun0014 }
 137:
            var10 = var4.value;
            var9 = _closure1_slot53;
            var3 = _closure1_slot24;
            var3 = var3[var10];
            var3 = var9.bind(var6)(var3);
            var9 = var5.bind(var6)();
            var3 = var9.done;
            var4 = var9;
            if(!var3) { _fun0014_ip = 137; continue _fun0014 }
 174:
            var4 = _closure1_slot41;
            var3 = var1.writes;
            var5 = var4.bind(var6)(var3);
            var4 = var5.bind(var6)();
            var3 = var4.done;
            if(var3) { _fun0014_ip = 395; continue _fun0014 }
 204:
            var9 = _closure1_slot51;
            var3 = var4.value;
            var3 = var9.bind(var6)(var3);
            var9 = var5.bind(var6)();
            var3 = var9.done;
            var4 = var9;
            if(var3) { _fun0014_ip = 395; continue _fun0014 }
 236:
            _fun0014_ip = 204; continue _fun0014;
 238:
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
            if(var1) { _fun0014_ip = 395; continue _fun0014 }
 366:
            var7 = _closure1_slot51;
            var1 = var3.value;
            var1 = var7.bind(var5)(var1);
            var7 = var4.bind(var5)();
            var1 = var7.done;
            var3 = var7;
            if(!var1) { _fun0014_ip = 366; continue _fun0014 }
 395:
            var1 = null;
            if(!(var1 != var2)) { _fun0014_ip = 456; continue _fun0014 }
 401:
            var1 = _closure1_slot41;
            var4 = undefined;
            var3 = var1.bind(var4)(var2);
            var2 = var3.bind(var4)();
            var1 = var2.done;
            if(var1) { _fun0014_ip = 456; continue _fun0014 }
 427:
            var6 = _closure1_slot50;
            var1 = var2.value;
            var1 = var6.bind(var4)(var1);
            var6 = var3.bind(var4)();
            var1 = var6.done;
            var2 = var6;
            if(!var1) { _fun0014_ip = 427; continue _fun0014 }
 456:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot52 = var1;
    var5 = function handleThreadCreateOrUpdate(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
            var4 = arg1;
            var5 = _closure1_slot16;
            var3 = var5.has;
            var1 = var4.channel;
            var1 = var1.type;
            var1 = var3.bind(var5)(var1);
            if(var1) { _fun0015_ip = 37; continue _fun0015 }
 33:
            var1 = false;
            return var1;
 37:
            var5 = _closure1_slot47;
            var1 = var4.channel;
            var3 = var1.id;
            var1 = undefined;
            var6 = var5.bind(var1)(var3);
            var7 = null;
            if(!(var7 != var6)) { _fun0015_ip = 131; continue _fun0015 }
 64:
            var5 = var6.merge;
            var3 = {};
            var9 = var4.channel;
            var8 = var9.toJS;
            var10 = var8.bind(var9)();
            var11 = var3;
            var8 = copyDataProperties(var11, var10);
            var8 = var4.channel;
            var8 = var8.bitrate;
            if(!(var7 == var8)) { _fun0015_ip = 115; continue _fun0015 }
 109:
            var8 = var6.bitrate;
 115:
            var7 = 'bitrate';
            var3[var7] = var8;
            var3 = var5.bind(var6)(var3);
            _fun0015_ip = 136; continue _fun0015;
 131:
            var3 = var4.channel;
 136:
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
 0:
                var4 = arg1;
                var5 = _closure1_slot16;
                var3 = var5.has;
                var2 = var4.type;
                var2 = var3.bind(var5)(var2);
                if(!var2) { _fun0016_ip = 48; continue _fun0016 }
 28:
                var3 = _closure1_slot48;
                var1 = _closure1_slot12;
                var2 = undefined;
                var1 = var1.bind(var2)(var4);
                var1 = var3.bind(var2)(var1);
 48:
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
 0:
            var1 = arg1;
            var6 = null;
            if(!(var6 != var1)) { _fun0017_ip = 327; continue _fun0017 }
 12:
            var4 = var1.guild_id;
            var5 = var1.id;
            var3 = _closure1_slot26;
            var3 = var5 in var3;
            if(!var3) { _fun0017_ip = 49; continue _fun0017 }
 36:
            var5 = _closure1_slot26;
            var3 = var1.id;
            var3 = delete var5[var3];
 49:
            var5 = var1.id;
            var3 = _closure1_slot24;
            var3 = var5 in var3;
            if(!var3) { _fun0017_ip = 78; continue _fun0017 }
 65:
            var5 = _closure1_slot24;
            var3 = var1.id;
            var3 = delete var5[var3];
 78:
            var5 = var1.id;
            var3 = _closure1_slot28;
            var3 = var5 in var3;
            if(!var3) { _fun0017_ip = 107; continue _fun0017 }
 94:
            var5 = _closure1_slot28;
            var3 = var1.id;
            var3 = delete var5[var3];
 107:
            if(!(var6 != var4)) { _fun0017_ip = 215; continue _fun0017 }
 111:
            var3 = _closure1_slot25;
            var3 = var3[var4];
            var3 = var6 != var3;
            if(!var3) { _fun0017_ip = 143; continue _fun0017 }
 126:
            var7 = var1.id;
            var5 = _closure1_slot25;
            var5 = var5[var4];
            var3 = var7 in var5;
 143:
            if(!var3) { _fun0017_ip = 163; continue _fun0017 }
 146:
            var3 = _closure1_slot25;
            var5 = var3[var4];
            var3 = var1.id;
            var3 = delete var5[var3];
 163:
            var3 = _closure1_slot29;
            var3 = var3[var4];
            var3 = var6 != var3;
            if(!var3) { _fun0017_ip = 195; continue _fun0017 }
 178:
            var7 = var1.id;
            var5 = _closure1_slot29;
            var5 = var5[var4];
            var3 = var7 in var5;
 195:
            if(!var3) { _fun0017_ip = 215; continue _fun0017 }
 198:
            var3 = _closure1_slot29;
            var4 = var3[var4];
            var3 = var1.id;
            var3 = delete var4[var3];
 215:
            var3 = var1.guild_id;
            if(!(var6 != var3)) { _fun0017_ip = 293; continue _fun0017 }
 224:
            var5 = _closure1_slot15;
            var4 = var5.has;
            var3 = var1.type;
            var3 = var4.bind(var5)(var3);
            if(var3) { _fun0017_ip = 293; continue _fun0017 }
 246:
            var5 = _closure1_slot32;
            var4 = var1.guild_id;
            var7 = _closure1_slot32;
            var3 = var1.guild_id;
            var3 = var7[var3];
            var7 = var6 != var3;
            var6 = 0;
            if(!var7) { _fun0017_ip = 280; continue _fun0017 }
 277:
            var6 = var3;
 280:
            var3 = 1;
            var3 = var6 + var3;
            var5[var4] = var3;
            _fun0017_ip = 327; continue _fun0017;
 293:
            var4 = _closure1_slot13;
            var3 = var1.type;
            var1 = undefined;
            var1 = var4.bind(var1)(var3);
            if(!var1) { _fun0017_ip = 327; continue _fun0017 }
 312:
            var3 = _closure1_slot31;
            var1 = 1;
            var1 = var3 + var1;
            _closure1_slot31 = var1;
 327:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot53 = var1;
    var11 = function handleDeleteChannel(arg1) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
            var1 = arg1;
            var3 = var1.channel;
            var4 = _closure1_slot24;
            var1 = var3.id;
            var4 = var4[var1];
            var1 = null;
            if(!(var1 == var4)) { _fun0018_ip = 43; continue _fun0018 }
 30:
            var6 = _closure1_slot26;
            var5 = var3.id;
            var4 = var6[var5];
 43:
            if(!(var1 == var4)) { _fun0018_ip = 60; continue _fun0018 }
 47:
            var5 = _closure1_slot28;
            var3 = var3.id;
            var4 = var5[var3];
 60:
            if(!(var1 != var4)) { _fun0018_ip = 142; continue _fun0018 }
 64:
            var3 = _closure1_slot53;
            var1 = undefined;
            var3 = var3.bind(var1)(var4);
            var3 = 'basicPermissions';
            var3 = var3 in var4;
            if(var3) { _fun0018_ip = 140; continue _fun0018 }
 86:
            var5 = var4.type;
            var3 = _closure1_slot21;
            var3 = var3.DM;
            if(!(var5 === var3)) { _fun0018_ip = 140; continue _fun0018 }
 105:
            var3 = var4.getRecipientId;
            var3 = var3.bind(var4)();
            var5 = _closure1_slot30;
            var5 = var5[var3];
            var4 = var4.id;
            if(!(var5 === var4)) { _fun0018_ip = 140; continue _fun0018 }
 132:
            var2 = _closure1_slot30;
            var2 = delete var2[var3];
 140:
            return var1;
 142:
            var1 = false;
            return var1;
        }
    };
    var14 = function handleLoadMessages(arg1) {
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
            var1 = arg1;
            var3 = var1.messages;
            var2 = _closure1_slot41;
            var1 = undefined;
            var5 = var2.bind(var1)(var3);
            var3 = var5.bind(var1)();
            var2 = var3.done;
            var4 = null;
            if(var2) { _fun0019_ip = 147; continue _fun0019 }
 37:
            var2 = var3.value;
            var7 = var2.thread;
            var7 = var4 != var7;
            if(!var7) { _fun0019_ip = 77; continue _fun0019 }
 55:
            var8 = var2.thread;
            var9 = var8.id;
            var8 = _closure1_slot28;
            var8 = var9 in var8;
            var7 = !var8;
 77:
            if(!var7) { _fun0019_ip = 105; continue _fun0019 }
 80:
            var10 = _closure1_slot16;
            var9 = var10.has;
            var8 = var2.thread;
            var8 = var8.type;
            var7 = var9.bind(var10)(var8);
 105:
            if(!var7) { _fun0019_ip = 132; continue _fun0019 }
 108:
            var7 = _closure1_slot50;
            var8 = _closure1_slot12;
            var2 = var2.thread;
            var2 = var8.bind(var1)(var2);
            var2 = var7.bind(var1)(var2);
 132:
            var7 = var5.bind(var1)();
            var2 = var7.done;
            var3 = var7;
            if(!var2) { _fun0019_ip = 37; continue _fun0019 }
 147:
            return var1;
        }
    };
    var12 = function handleSearchFinish(arg1) {
        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
 0:
            var1 = arg1;
            var6 = var1.messages;
            var5 = var1.threads;
            var4 = var1.channels;
            var3 = _closure1_slot41;
            var1 = undefined;
            var7 = var3.bind(var1)(var6);
            var6 = var7.bind(var1)();
            var3 = var6.done;
            if(var3) { _fun0020_ip = 123; continue _fun0020 }
 47:
            var8 = _closure1_slot41;
            var3 = var6.value;
            var9 = var8.bind(var1)(var3);
            var8 = var9.bind(var1)();
            var3 = var8.done;
            if(var3) { _fun0020_ip = 108; continue _fun0020 }
 73:
            var10 = _closure1_slot54;
            var3 = var8.value;
            var3 = var3.thread;
            var3 = var10.bind(var1)(var3);
            var10 = var9.bind(var1)();
            var3 = var10.done;
            var8 = var10;
            if(!var3) { _fun0020_ip = 73; continue _fun0020 }
 108:
            var8 = var7.bind(var1)();
            var3 = var8.done;
            var6 = var8;
            if(!var3) { _fun0020_ip = 47; continue _fun0020 }
 123:
            var3 = var5.forEach;
            var2 = _closure1_slot54;
            var2 = var3.bind(var5)(var2);
            var2 = null;
            if(!(var2 != var4)) { _fun0020_ip = 160; continue _fun0020 }
 143:
            var3 = var4.forEach;
            var2 = function(arg1) {
                _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
 0:
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
                    if(!var6) { _fun0021_ip = 73; continue _fun0021 }
 67:
                    if(!var3) { _fun0021_ip = 87; continue _fun0021 }
 70:
                    if(var5) { _fun0021_ip = 87; continue _fun0021 }
 73:
                    if(var3) { _fun0021_ip = 100; continue _fun0021 }
 76:
                    var3 = _closure1_slot48;
                    var3 = var3.bind(var1)(var4);
                    _fun0021_ip = 100; continue _fun0021;
 87:
                    var3 = _closure1_slot37;
                    var2 = var4.id;
                    var3[var2] = var4;
 100:
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var2);
 160:
            return var1;
        }
    };
    var1 = function addThreadIfMissing(arg1) {
        _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
 0:
            var4 = arg1;
            var1 = null;
            var1 = var1 != var4;
            if(!var1) { _fun0022_ip = 31; continue _fun0022 }
 12:
            var3 = var4.id;
            var2 = _closure1_slot28;
            var2 = var3 in var2;
            var1 = !var2;
 31:
            if(!var1) { _fun0022_ip = 56; continue _fun0022 }
 34:
            var5 = _closure1_slot16;
            var3 = var5.has;
            var2 = var4.type;
            var1 = var3.bind(var5)(var2);
 56:
            if(!var1) { _fun0022_ip = 82; continue _fun0022 }
 59:
            var3 = _closure1_slot50;
            var1 = _closure1_slot12;
            var2 = undefined;
            var1 = var1.bind(var2)(var4);
            var1 = var3.bind(var2)(var1);
 82:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot54 = var1;
    var1 = function handleFavoritesUpdate() {
        _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
 0:
            var1 = {};
            _closure1_slot33 = var1;
            var2 = _closure1_slot11;
            var1 = var2.getFavoriteChannels;
            var6 = var1.bind(var2)();
            var1 = null;
            for(var2 in var6)
 33:
            {
 42:
                var10 = var2;
                var9 = _closure1_slot11;
                var8 = var9.getCategoryRecord;
                var9 = var8.bind(var9)(var10);
                if(var1 == var9) { _fun0023_ip = 33; continue _fun0023 }
 64:
                var8 = _closure1_slot33;
                var8[var10] = var9;
                _fun0023_ip = 33; continue _fun0023;
            }
 74:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot55 = var1;
    var1 = function guildChannelCount(arg1) {
        _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
 0:
            var5 = arg1;
            var1 = _closure1_slot25;
            var3 = var1[var5];
            var1 = null;
            var3 = var1 == var3;
            if(var3) { _fun0024_ip = 54; continue _fun0024 }
 23:
            var3 = global;
            var4 = var3.Object;
            var3 = var4.keys;
            var2 = _closure1_slot25;
            var2 = var2[var5];
            var2 = var3.bind(var4)(var2);
            var1 = var2.length;
 54:
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
            _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
 0:
                var7 = arg1;
                var6 = null;
                var2 = var6 == var7;
                var1 = null;
                if(var2) { _fun0025_ip = 66; continue _fun0025 }
 14:
                var4 = _closure2_slot0;
                var3 = var4.loadGuildIds;
                var2 = _closure1_slot46;
                var5 = undefined;
                var2 = var2.bind(var5)(var7);
                var6 = var6 == var2;
                if(var6) { _fun0025_ip = 53; continue _fun0025 }
 48:
                var5 = var2.guild_id;
 53:
                var2 = new Array(1);
                var2[0] = var5;
                var1 = var3.bind(var4)(var2);
 66:
                return var1;
            }
        };
        var1['value'] = var6;
        var3[1] = var1;
        var1 = {};
        var6 = 'loadGuildIds';
        var1['key'] = var6;
        var2 = function value(arg1) {
            _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
 0:
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
                if(!(var1 !== var4)) { _fun0026_ip = 189; continue _fun0026 }
 64:
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 16;
                var1 = var5[var1];
                var4 = var4.bind(var6)(var1);
                var1 = var4.database;
                var4 = var1.bind(var4)();
                var _closure3_slot1 = var4;
                var1 = null;
                if(!(var1 != var4)) { _fun0026_ip = 187; continue _fun0026 }
 104:
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
                if(var4) { _fun0026_ip = 125; continue _fun0026 }
 123:
                return var1;
 125:
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
                        _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                            if(var4) { _fun0027_ip = 395; continue _fun0027 }
 12:
                            var5 = undefined;
                            var8 = undefined;
                            var9 = undefined;
                            var10 = undefined;
                            var6 = undefined;
                            var7 = undefined;
                            var13 = _closure3_slot0;
                            var12 = var13.map;
                            var4 = function(arg1) {
                                _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
 0:
                                    var7 = arg1;
                                    var _closure6_slot0 = var7;
                                    var4 = _closure1_slot34;
                                    var1 = var4.has;
                                    var4 = var1.bind(var4)(var7);
                                    var1 = null;
                                    if(var4) { _fun0028_ip = 171; continue _fun0028 }
 34:
                                    var4 = _closure1_slot35;
                                    var4 = var4[var7];
                                    if(!(var1 == var4)) { _fun0028_ip = 123; continue _fun0028 }
 46:
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
 123:
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
 171:
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
 103: // try_start_0
                            var12 = global;
                            var13 = var12.Promise;
                            var12 = var13.all;
                            var9 = var12.bind(var13)(var9);
                            SaveGenerator(address=126);
 124:
                            return var9;
 126:
                            ResumeGenerator(result_out_reg=8, return_bool_out_reg=11);
                            if(var12) { _fun0027_ip = 279; continue _fun0027 }
 135:
                            var10 = var9;
                            var12 = _closure1_slot36;
                            var11 = _closure3_slot2;
                            if(!(var12 === var11)) { _fun0027_ip = 231; continue _fun0027 }
 150:
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
 215:
                            return var10;
 217:
                            ResumeGenerator(result_out_reg=9, return_bool_out_reg=10);
                            if(var11) { _fun0027_ip = 228; continue _fun0027 }
 223: // try_end0
                            var11 = null;
                            return var11;
 228:
                            return var10;
 231: // try_start_1
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
 274: // try_end1
                            var10 = null;
                            return var10;
 279:
                            return var9;
 282: // catch_target0 // catch_target1
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
                            if(var3) { _fun0027_ip = 393; continue _fun0027 }
 354:
                            var3 = var6;
                            var3 = var3.value;
                            var8 = _closure1_slot35;
                            var3 = var3.guildId;
                            var3 = delete var8[var3];
                            var3 = var7;
                            var3 = var3.bind(var5)();
                            var6 = var3;
                            var3 = var3.done;
                            if(!var3) { _fun0027_ip = 354; continue _fun0027 }
 393:
                            throw var2;
 395:
                            return var1;
                        }
                    };
                    return var1;
                };
                var3 = var3.bind(var6)(var2);
                var2 = 'loadChannels';
                var2 = var4.bind(var5)(var2, var3);
                return var2;
 187:
                return var1;
 189:
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
            _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
 0:
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
                if(var1) { _fun0029_ip = 69; continue _fun0029 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0029_ip = 105; continue _fun0029;
 69:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot4;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
 105:
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
            _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
 0:
                var3 = arg1;
                var1 = null;
                if(!(var1 == var3)) { _fun0030_ip = 13; continue _fun0030 }
 9:
                var1 = undefined;
                return var1;
 13:
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
            _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
 0:
                var3 = arg1;
                var1 = null;
                if(!(var1 == var3)) { _fun0031_ip = 13; continue _fun0031 }
 9:
                var1 = undefined;
                return var1;
 13:
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
            _fun0032: for(var _fun0032_ip = 0; ; ) switch(_fun0032_ip) {
 0:
                var3 = _closure1_slot41;
                var4 = _closure1_slot19;
                var1 = var4.getGuildIds;
                var1 = var1.bind(var4)();
                var6 = undefined;
                var5 = var3.bind(var6)(var1);
                var3 = var5.bind(var6)();
                var1 = var3.done;
                var4 = 'loadAllGuildAndPrivateChannelsFromDisk';
                if(var1) { _fun0032_ip = 85; continue _fun0032 }
 44:
                var8 = _closure1_slot43;
                var7 = var3.value;
                var1 = _closure1_slot39;
                var1 = var1.Full;
                var1 = var8.bind(var6)(var7, var1, var4);
                var7 = var5.bind(var6)();
                var1 = var7.done;
                var3 = var7;
                if(!var1) { _fun0032_ip = 44; continue _fun0032 }
 85:
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
            _fun0033: for(var _fun0033_ip = 0; ; ) switch(_fun0033_ip) {
 0:
                var8 = arg1;
                var4 = _closure1_slot43;
                var1 = _closure1_slot39;
                var3 = var1.Basic;
                var5 = undefined;
                var1 = 'getChannelIds';
                var1 = var4.bind(var5)(var8, var3, var1);
                var6 = null;
                if(!(var6 != var8)) { _fun0033_ip = 106; continue _fun0033 }
 39:
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 22;
                var1 = var4[var1];
                var4 = var3.bind(var5)(var1);
                var3 = var4.keys;
                var7 = _closure1_slot10;
                var1 = var7.getGuildBasicChannels;
                var1 = var1.bind(var7)(var8);
                if(!(var6 == var1)) { _fun0033_ip = 91; continue _fun0033 }
 83:
                var7 = _closure1_slot25;
                var1 = var7[var8];
 91:
                if(!(var6 == var1)) { _fun0033_ip = 99; continue _fun0033 }
 95:
                var1 = _closure1_slot23;
 99:
                var1 = var3.bind(var4)(var1);
                _fun0033_ip = 140; continue _fun0033;
 106:
                var4 = _closure1_slot1;
                var6 = _closure1_slot2;
                var3 = 22;
                var3 = var6[var3];
                var4 = var4.bind(var5)(var3);
                var3 = var4.keys;
                var2 = _closure1_slot26;
                var1 = var3.bind(var4)(var2);
 140:
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
            _fun0034: for(var _fun0034_ip = 0; ; ) switch(_fun0034_ip) {
 0:
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
                if(!(var3 == var1)) { _fun0034_ip = 62; continue _fun0034 }
 54:
                var4 = _closure1_slot25;
                var1 = var4[var5];
 62:
                if(!(var3 == var1)) { _fun0034_ip = 70; continue _fun0034 }
 66:
                var1 = _closure1_slot23;
 70:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'getMutableGuildChannelsForGuild';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0035: for(var _fun0035_ip = 0; ; ) switch(_fun0035_ip) {
 0:
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
                if(!(var3 == var1)) { _fun0035_ip = 51; continue _fun0035 }
 47:
                var1 = _closure1_slot23;
 51:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'getSortedLinkedChannelsForGuild';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0036: for(var _fun0036_ip = 0; ; ) switch(_fun0036_ip) {
 0:
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
                if(!(var5 == var1)) { _fun0036_ip = 51; continue _fun0036 }
 47:
                var1 = _closure1_slot23;
 51:
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
            _fun0037: for(var _fun0037_ip = 0; ; ) switch(_fun0037_ip) {
 0:
                var2 = arg1;
                var1 = null;
                if(!(var1 == var2)) { _fun0037_ip = 13; continue _fun0037 }
 9:
                var1 = undefined;
                return var1;
 13:
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
            _fun0038: for(var _fun0038_ip = 0; ; ) switch(_fun0038_ip) {
 0:
                var4 = arg1;
                var3 = this;
                var1 = null;
                if(!(var1 == var4)) { _fun0038_ip = 16; continue _fun0038 }
 12:
                var1 = undefined;
                return var1;
 16:
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
            _fun0039: for(var _fun0039_ip = 0; ; ) switch(_fun0039_ip) {
 0:
                var2 = _closure1_slot32;
                var1 = arg1;
                var2 = var2[var1];
                var1 = null;
                var3 = var1 != var2;
                var1 = 0;
                if(!var3) { _fun0039_ip = 28; continue _fun0039 }
 25:
                var1 = var2;
 28:
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
            _fun0040: for(var _fun0040_ip = 0; ; ) switch(_fun0040_ip) {
 0:
                var2 = arg1;
                var _closure3_slot0 = var2;
                var4 = var2.data_mode;
                var3 = 'unavailable';
                if(!(var3 !== var4)) { _fun0040_ip = 426; continue _fun0040 }
 26:
                var4 = var2.data_mode;
                var3 = 'partial';
                if(!(var3 !== var4)) { _fun0040_ip = 190; continue _fun0040 }
 43:
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
                _fun0040_ip = 548; continue _fun0040;
 190:
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
                if(!(var3 == var6)) { _fun0040_ip = 334; continue _fun0040 }
 330:
                var6 = new Array(0);
 334:
                var7 = var6.length;
                var5 = 0;
                if(!(var7 > var5)) { _fun0040_ip = 390; continue _fun0040 }
 345:
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
 390:
                var4 = var2.partial_updates;
                var4 = var4.channels;
                if(!(var3 != var4)) { _fun0040_ip = 548; continue _fun0040 }
 409:
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
                _fun0040_ip = 548; continue _fun0040;
 426:
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
 548:
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
        _fun0041: for(var _fun0041_ip = 0; ; ) switch(_fun0041_ip) {
 0:
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
            if(var2) { _fun0041_ip = 212; continue _fun0041 }
 60:
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
            if(var2) { _fun0041_ip = 194; continue _fun0041 }
 156:
            var15 = var12.value;
            var14 = _closure1_slot48;
            var2 = _closure1_slot17;
            var2 = var2.bind(var1)(var15);
            var2 = var14.bind(var1)(var2);
            var14 = var13.bind(var1)();
            var2 = var14.done;
            var12 = var14;
            if(!var2) { _fun0041_ip = 156; continue _fun0041 }
 194:
            var12 = var10.bind(var1)();
            var2 = var12.done;
            var3 = var12;
            if(!var2) { _fun0041_ip = 60; continue _fun0041 }
 212:
            return var1;
        }
    };
    var4['CACHE_LOADED_LAZY'] = var15;
    var15 = function handleCacheLoaded(arg1) {
        _fun0042: for(var _fun0042_ip = 0; ; ) switch(_fun0042_ip) {
 0:
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
            if(!var5) { _fun0042_ip = 165; continue _fun0042 }
 62:
            var9 = _closure1_slot41;
            var5 = var8[var6];
            var10 = var9.bind(var1)(var5);
            var9 = var10.bind(var1)();
            var5 = var9.done;
            if(var5) { _fun0042_ip = 153; continue _fun0042 }
 87:
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
            if(!var5) { _fun0042_ip = 87; continue _fun0042 }
 153:
            var6 = var6 + 1;
            var5 = var8.length;
            if(var6 < var5) { _fun0042_ip = 62; continue _fun0042 }
 165:
            var5 = var4[var3];
            var3 = null;
            var6 = var3 == var5;
            var4 = undefined;
            if(var6) { _fun0042_ip = 185; continue _fun0042 }
 180:
            var4 = var5.guild_id;
 185:
            if(!(var3 != var4)) { _fun0042_ip = 242; continue _fun0042 }
 189:
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
 242:
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
        _fun0043: for(var _fun0043_ip = 0; ; ) switch(_fun0043_ip) {
 0:
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
            if(var5) { _fun0043_ip = 58; continue _fun0043 }
 45:
            var1 = var8.isPrivate;
            var1 = var1.bind(var8)();
            var5 = !var1;
 58:
            var1 = !var5;
            if(var5) { _fun0043_ip = 104; continue _fun0043 }
 64:
            var3 = _closure1_slot48;
            var6 = var8.addRecipient;
            var5 = var2.user;
            var5 = var5.id;
            var2 = var2.nick;
            var2 = var6.bind(var8)(var5, var2, var7);
            var2 = var3.bind(var4)(var2);
            var1 = true;
 104:
            return var1;
        }
    };
    var4['CHANNEL_RECIPIENT_ADD'] = var15;
    var15 = function handleRemoveRecipient(arg1) {
        _fun0044: for(var _fun0044_ip = 0; ; ) switch(_fun0044_ip) {
 0:
            var2 = arg1;
            var5 = _closure1_slot47;
            var1 = var2.channelId;
            var4 = undefined;
            var6 = var5.bind(var4)(var1);
            var1 = null;
            var5 = var1 == var6;
            if(var5) { _fun0044_ip = 44; continue _fun0044 }
 31:
            var1 = var6.isPrivate;
            var1 = var1.bind(var6)();
            var5 = !var1;
 44:
            var1 = !var5;
            if(var5) { _fun0044_ip = 82; continue _fun0044 }
 50:
            var3 = _closure1_slot48;
            var5 = var6.removeRecipient;
            var2 = var2.user;
            var2 = var2.id;
            var2 = var5.bind(var6)(var2);
            var2 = var3.bind(var4)(var2);
            var1 = true;
 82:
            return var1;
        }
    };
    var4['CHANNEL_RECIPIENT_REMOVE'] = var15;
    var15 = function handleUpdateChannels(arg1) {
        _fun0045: for(var _fun0045_ip = 0; ; ) switch(_fun0045_ip) {
 0:
            var1 = arg1;
            var5 = var1.channels;
            var4 = var5.some;
            var3 = function(arg1) {
                _fun0046: for(var _fun0046_ip = 0; ; ) switch(_fun0046_ip) {
 0:
                    var3 = arg1;
                    var4 = _closure1_slot47;
                    var1 = var3.id;
                    var2 = undefined;
                    var4 = var4.bind(var2)(var1);
                    var6 = var3.nsfw;
                    var5 = null;
                    var7 = var5 == var4;
                    var1 = undefined;
                    if(var7) { _fun0046_ip = 45; continue _fun0046 }
 39:
                    var1 = var4.nsfw;
 45:
                    var1 = var6 !== var1;
                    if(var1) { _fun0046_ip = 75; continue _fun0046 }
 52:
                    var3 = var3.type;
                    var5 = var5 == var4;
                    var2 = undefined;
                    if(var5) { _fun0046_ip = 71; continue _fun0046 }
 66:
                    var2 = var4.type;
 71:
                    var1 = var3 !== var2;
 75:
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
            if(var5) { _fun0045_ip = 88; continue _fun0045 }
 59:
            var8 = _closure1_slot48;
            var5 = var6.value;
            var5 = var8.bind(var1)(var5);
            var8 = var7.bind(var1)();
            var5 = var8.done;
            var6 = var8;
            if(!var5) { _fun0045_ip = 59; continue _fun0045 }
 88:
            if(!var4) { _fun0045_ip = 128; continue _fun0045 }
 91:
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
 128:
            return var1;
        }
    };
    var4['CHANNEL_UPDATES'] = var15;
    var15 = function handleConnectionOpenSupplemental(arg1) {
        _fun0047: for(var _fun0047_ip = 0; ; ) switch(_fun0047_ip) {
 0:
            var1 = arg1;
            var3 = var1.lazyPrivateChannels;
            var4 = _closure1_slot27;
            var2 = null;
            if(!(var2 != var4)) { _fun0047_ip = 46; continue _fun0047 }
 22:
            var2 = {};
            _closure1_slot26 = var2;
            var5 = _closure1_slot27;
            var4 = var5.forEach;
            var2 = _closure1_slot49;
            var2 = var4.bind(var5)(var2);
 46:
            var2 = var3.forEach;
            var1 = _closure1_slot49;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        }
    };
    var4['CONNECTION_OPEN_SUPPLEMENTAL'] = var15;
    var15 = function handleConnectionOpen(arg1) {
        _fun0048: for(var _fun0048_ip = 0; ; ) switch(_fun0048_ip) {
 0:
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
            if(var3) { _fun0048_ip = 295; continue _fun0048 }
 160:
            var12 = var4.value;
            var3 = var12.dataMode;
            if(!(var5 === var3)) { _fun0048_ip = 268; continue _fun0048 }
 175:
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
 268:
            var3 = _closure1_slot52;
            var3 = var3.bind(var1)(var12);
            var12 = var9.bind(var1)();
            var3 = var12.done;
            var4 = var12;
            if(!var3) { _fun0048_ip = 160; continue _fun0048 }
 295:
            var2 = _closure1_slot55;
            var2 = var2.bind(var1)();
            return var1;
        }
    };
    var4['CONNECTION_OPEN'] = var15;
    var15 = function handlePutOverwriteSuccess(arg1) {
        _fun0049: for(var _fun0049_ip = 0; ; ) switch(_fun0049_ip) {
 0:
            var1 = arg1;
            var4 = var1.channelId;
            var7 = var1.overwrite;
            var3 = _closure1_slot47;
            var1 = undefined;
            var6 = var3.bind(var1)(var4);
            var3 = null;
            if(!(var3 != var6)) { _fun0049_ip = 85; continue _fun0049 }
 34:
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
 85:
            var1 = false;
            return var1;
        }
    };
    var4['CHANNEL_PERMISSIONS_PUT_OVERWRITE_SUCCESS'] = var15;
    var15 = function handleDeleteOverwriteSuccess(arg1) {
        _fun0050: for(var _fun0050_ip = 0; ; ) switch(_fun0050_ip) {
 0:
            var1 = arg1;
            var5 = var1.channelId;
            var3 = var1.overwriteId;
            var4 = _closure1_slot47;
            var1 = undefined;
            var6 = var4.bind(var1)(var5);
            var4 = null;
            if(!(var4 != var6)) { _fun0050_ip = 79; continue _fun0050 }
 34:
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
 79:
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
        _fun0051: for(var _fun0051_ip = 0; ; ) switch(_fun0051_ip) {
 0:
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
            if(var1) { _fun0051_ip = 262; continue _fun0051 }
 54:
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
            if(var1) { _fun0051_ip = 244; continue _fun0051 }
 173:
            var12 = var10.value;
            var15 = var6.Object;
            var14 = var15.hasOwn;
            var13 = _closure1_slot24;
            var1 = var12.id;
            var1 = var14.bind(var15)(var13, var1);
            if(var1) { _fun0051_ip = 226; continue _fun0051 }
 208:
            var13 = _closure1_slot51;
            var1 = _closure1_slot17;
            var1 = var1.bind(var8)(var12);
            var1 = var13.bind(var8)(var1);
 226:
            var13 = var11.bind(var8)();
            var1 = var13.done;
            var10 = var13;
            var2 = var12;
            if(!var1) { _fun0051_ip = 173; continue _fun0051 }
 244:
            var10 = var7.bind(var8)();
            var1 = var10.done;
            var3 = var10;
            if(!var1) { _fun0051_ip = 54; continue _fun0051 }
 262:
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
        _fun0052: for(var _fun0052_ip = 0; ; ) switch(_fun0052_ip) {
 0:
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
            if(var2) { _fun0052_ip = 115; continue _fun0052 }
 49:
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
            if(!var2) { _fun0052_ip = 49; continue _fun0052 }
 115:
            return var1;
        }
    };
    var4['OVERLAY_INITIALIZE'] = var13;
    var4['SEARCH_FINISH'] = var12;
    var4['MOD_VIEW_SEARCH_FINISH'] = var12;
    var4['THREAD_CREATE'] = var5;
    var4['THREAD_DELETE'] = var11;
    var10 = function handleThreadListSync(arg1) {
        var1 = arg1;
        var3 = var1.threads;
        var2 = var3.forEach;
        var1 = function(arg1) {
            _fun0053: for(var _fun0053_ip = 0; ; ) switch(_fun0053_ip) {
 0:
                var3 = arg1;
                var5 = _closure1_slot16;
                var4 = var5.has;
                var2 = var3.type;
                var2 = var4.bind(var5)(var2);
                if(!var2) { _fun0053_ip = 39; continue _fun0053 }
 28:
                var2 = _closure1_slot48;
                var1 = undefined;
                var1 = var2.bind(var1)(var3);
 39:
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