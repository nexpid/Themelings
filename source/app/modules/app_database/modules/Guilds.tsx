// app/modules/app_database/modules/Guilds.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var7;
    var1 = metroImportAll;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
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
            if(!var2) { _fun0001_ip = 46; continue _fun0001 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 46:
            if(var2) { _fun0001_ip = 55; continue _fun0001 }
 49:
            var2 = var3.@@iterator;
 55:
            if(var2) { _fun0001_ip = 343; continue _fun0001 }
 61:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 323; continue _fun0001 }
 86:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 283; continue _fun0001 }
 96:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 270; continue _fun0001 }
 110:
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
            if(!var7) { _fun0001_ip = 163; continue _fun0001 }
 158:
            var7 = var3.constructor;
 163:
            var10 = var9;
            if(!var7) { _fun0001_ip = 179; continue _fun0001 }
 169:
            var7 = var3.constructor;
            var10 = var7.name;
 179:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 249; continue _fun0001 }
 187:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 249; continue _fun0001 }
 195:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 234; continue _fun0001 }
 205:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 247; continue _fun0001 }
 234:
            var9 = _closure1_slot13;
            var7 = var9.bind(var8)(var3, var8);
 247:
            _fun0001_ip = 265; continue _fun0001;
 249:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 265:
            var6 = var7;
            _fun0001_ip = 283; continue _fun0001;
 270:
            var7 = _closure1_slot13;
            var6 = var7.bind(var8)(var3, var8);
 283:
            var4 = var6;
            if(var4) { _fun0001_ip = 323; continue _fun0001 }
 289:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
 323:
            if(!var4) { _fun0001_ip = 330; continue _fun0001 }
 326:
            _closure2_slot0 = var4;
 330:
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
 343:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot12 = var1;
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
    var _closure1_slot13 = var1;
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.updateJoinedAt;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var6[var4];
    var8 = var7.bind(var1)(var4);
    var4 = var8.prototype;
    var7 = Object.create(var4, {constructor: {value: var8}});
    var12 = 'Guilds';
    var13 = var7;
    var4 = new var13[var8](var12, var11);
    var4 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot11 = var4;
    var2 = function() {
        var4 = _closure1_slot5;
        var3 = function Guilds() {
            var3 = this;
            var _closure3_slot0 = var3;
            var5 = _closure1_slot4;
            var2 = _closure2_slot2;
            var1 = undefined;
            var2 = var5.bind(var1)(var3, var2);
            var2 = {};
            var5 = function BACKGROUND_SYNC(arg1, arg2) {
                var4 = _closure3_slot0;
                var3 = var4.handleBackgroundSync;
                var2 = arg1;
                var1 = arg2;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var2['BACKGROUND_SYNC'] = var5;
            var5 = function CONNECTION_OPEN(arg1, arg2) {
                var4 = _closure3_slot0;
                var3 = var4.handleConnectionOpen;
                var2 = arg1;
                var1 = arg2;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var2['CONNECTION_OPEN'] = var5;
            var5 = function GUILD_CREATE(arg1, arg2) {
                var4 = _closure3_slot0;
                var3 = var4.handleGuildCreate;
                var2 = arg1;
                var1 = arg2;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var2['GUILD_CREATE'] = var5;
            var5 = function GUILD_DELETE(arg1, arg2) {
                var4 = _closure3_slot0;
                var3 = var4.handleGuildDelete;
                var2 = arg1;
                var1 = arg2;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var2['GUILD_DELETE'] = var5;
            var5 = function GUILD_MEMBER_ADD(arg1, arg2) {
                var4 = _closure3_slot0;
                var3 = var4.handleGuildMemberAdd;
                var2 = arg1;
                var1 = arg2;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var2['GUILD_MEMBER_ADD'] = var5;
            var5 = function GUILD_MEMBER_UPDATE(arg1, arg2) {
                var4 = _closure3_slot0;
                var3 = var4.handleGuildMemberUpdate;
                var2 = arg1;
                var1 = arg2;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var2['GUILD_MEMBER_UPDATE'] = var5;
            var5 = function GUILD_ROLE_CREATE(arg1, arg2) {
                var4 = _closure3_slot0;
                var3 = var4.handleGuildRoleChange;
                var2 = arg1;
                var1 = arg2;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var2['GUILD_ROLE_CREATE'] = var5;
            var5 = function GUILD_ROLE_DELETE(arg1, arg2) {
                var4 = _closure3_slot0;
                var3 = var4.handleGuildRoleDelete;
                var2 = arg1;
                var1 = arg2;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var2['GUILD_ROLE_DELETE'] = var5;
            var5 = function GUILD_ROLE_UPDATE(arg1, arg2) {
                var4 = _closure3_slot0;
                var3 = var4.handleGuildRoleChange;
                var2 = arg1;
                var1 = arg2;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var2['GUILD_ROLE_UPDATE'] = var5;
            var4 = function GUILD_UPDATE(arg1, arg2) {
                var4 = _closure3_slot0;
                var3 = var4.handleGuildUpdate;
                var2 = arg1;
                var1 = arg2;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var2['GUILD_UPDATE'] = var4;
            var3['actions'] = var2;
            return var1;
        };
        var _closure2_slot2 = var3;
        var5 = {};
        var2 = 'getAsync';
        var5['key'] = var2;
        var8 = _closure1_slot3;
        var2 = undefined;
        var1 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0004_ip = 162; continue _fun0004 }
 10:
                    var3 = global;
                    var4 = var3.performance;
                    var2 = var4.now;
                    var7 = var2.bind(var4)();
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 9;
                    var5 = var5[var2];
                    var2 = undefined;
                    var6 = var6.bind(var2)(var5);
                    var5 = var6.guilds;
                    var2 = arg1;
                    var5 = var5.bind(var6)(var2);
                    var2 = var5.getMany;
                    var2 = var2.bind(var5)();
                    SaveGenerator(address=80);
 78:
                    return var2;
 80:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0004_ip = 159; continue _fun0004 }
 86:
                    var6 = var3.performance;
                    var5 = var6.now;
                    var6 = var5.bind(var6)();
                    var5 = _closure1_slot11;
                    var4 = var5.verbose;
                    var14 = var6 - var7;
                    var12 = var2.length;
                    var3 = var3.HermesInternal;
                    var8 = var3.concat;
                    var15 = 'loaded in ';
                    var13 = 'ms (guilds: ';
                    var11 = ')';
                    var3 = var15[var8](var14, var13, var12, var11, var10);
                    var3 = var4.bind(var5)(var3);
                    return var2;
 159:
                    return var2;
 162:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var8.bind(var2)(var1);
        var _closure2_slot1 = var1;
        var1 = function getAsync() {
            var1 = undefined;
            var4 = _closure2_slot1;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(16);
        var1[0] = var5;
        var5 = {};
        var7 = 'getOneAsync';
        var5['key'] = var7;
        var7 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0005_ip = 75; continue _fun0005 }
 7:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 9;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.guilds;
                    var2 = arg1;
                    var4 = var3.bind(var4)(var2);
                    var3 = var4.get;
                    var2 = arg2;
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=63);
 61:
                    return var2;
 63:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0005_ip = 72; continue _fun0005 }
 69:
                    return var2;
 72:
                    return var2;
 75:
                    return var1;
                }
            };
            return var1;
        };
        var7 = var8.bind(var2)(var7);
        var _closure2_slot0 = var7;
        var7 = function getOneAsync() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'handleBackgroundSync';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var14 = arg2;
                var13 = this;
                var3 = _closure1_slot12;
                var1 = arg1;
                var2 = var1.guilds;
                var1 = undefined;
                var11 = var3.bind(var1)(var2);
                var3 = var11.bind(var1)();
                var2 = var3.done;
                var10 = 12;
                var9 = 11;
                var8 = 10;
                var7 = 'partial';
                var6 = null;
                var5 = 'unavailable';
                var4 = var3;
                var3 = undefined;
                if(var2) { _fun0006_ip = 374; continue _fun0006 }
 68:
                var15 = var4.value;
                var2 = var15.data_mode;
                if(!(var5 !== var2)) { _fun0006_ip = 372; continue _fun0006 }
 86:
                var17 = _closure1_slot10;
                var16 = var17.getGuild;
                var2 = var15.id;
                var24 = var16.bind(var17)(var2);
                if(!(var6 != var24)) { _fun0006_ip = 352; continue _fun0006 }
 112:
                var17 = _closure1_slot9;
                var16 = var17.getUnsafeMutableRoles;
                var2 = var15.id;
                var2 = var16.bind(var17)(var2);
                var16 = var15.data_mode;
                if(!(var7 !== var16)) { _fun0006_ip = 184; continue _fun0006 }
 142:
                var17 = _closure1_slot1;
                var16 = _closure1_slot2;
                var16 = var16[var9];
                var19 = var17.bind(var1)(var16);
                var18 = var19.fromServerArray;
                var17 = var15.id;
                var16 = var15.roles;
                var22 = var18.bind(var19)(var17, var16);
                _fun0006_ip = 246; continue _fun0006;
 184:
                var17 = _closure1_slot1;
                var16 = _closure1_slot2;
                var16 = var16[var8];
                var20 = var17.bind(var1)(var16);
                var19 = var20.filterRoleDeletes;
                var28 = var15.id;
                var16 = var15.partial_updates;
                var26 = var16.roles;
                var16 = var15.partial_updates;
                var25 = var16.deleted_role_ids;
                var29 = var20;
                var27 = var2;
                var22 = var29[var19](var28, var27, var26, var25, var24);
 246:
                var16 = var13.put;
                var21 = _closure1_slot1;
                var17 = _closure1_slot2;
                var18 = var17[var10];
                var20 = var21.bind(var1)(var18);
                var19 = var20.attachSerializedData;
                var18 = var17[var10];
                var23 = var21.bind(var1)(var18);
                var18 = var23.fromBackgroundSync;
                var18 = var18.bind(var23)(var15, var24);
                var17 = var17[var9];
                var21 = var21.bind(var1)(var17);
                var17 = var21.toSerializedPartition;
                var17 = var17.bind(var21)(var22);
                var22 = _closure1_slot8;
                var21 = var22.getSelfMember;
                var15 = var15.id;
                var15 = var21.bind(var22)(var15);
                var15 = var19.bind(var20)(var18, var17, var15);
                var15 = var16.bind(var13)(var15, var14);
                var3 = var2;
 352:
                var15 = var11.bind(var1)();
                var2 = var15.done;
                var4 = var15;
                if(var2) { _fun0006_ip = 374; continue _fun0006 }
 367:
                _fun0006_ip = 68; continue _fun0006;
 372:
                return var1;
 374:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'handleConnectionOpen';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var6 = arg2;
                var5 = this;
                var1 = var5.clear;
                var1 = var1.bind(var5)(var6);
                var3 = _closure1_slot12;
                var1 = arg1;
                var2 = var1.guilds;
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.bind(var1)();
                var2 = var3.done;
                if(var2) { _fun0007_ip = 84; continue _fun0007 }
 52:
                var7 = var3.value;
                var2 = var5.putOne;
                var2 = var2.bind(var5)(var7, var6);
                var7 = var4.bind(var1)();
                var2 = var7.done;
                var3 = var7;
                if(!var2) { _fun0007_ip = 52; continue _fun0007 }
 84:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'handleGuildCreate';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            var4 = this;
            var3 = var4.putOne;
            var1 = arg1;
            var2 = var1.guild;
            var1 = arg2;
            var1 = var3.bind(var4)(var2, var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'handleGuildUpdate';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            var2 = arg1;
            var5 = this;
            var4 = _closure1_slot10;
            var3 = var4.getGuild;
            var1 = var2.guild;
            var1 = var1.id;
            var8 = var3.bind(var4)(var1);
            var12 = _closure1_slot1;
            var13 = _closure1_slot2;
            var3 = 12;
            var4 = var13[var3];
            var1 = undefined;
            var7 = var12.bind(var1)(var4);
            var6 = var7.fromGuild;
            var4 = var2.guild;
            var8 = var6.bind(var7)(var4, var8);
            var4 = var5.put;
            var3 = var13[var3];
            var7 = var12.bind(var1)(var3);
            var6 = var7.attachSerializedData;
            var3 = 11;
            var10 = var13[var3];
            var11 = var12.bind(var1)(var10);
            var10 = var11.toSerializedPartition;
            var3 = var13[var3];
            var14 = var12.bind(var1)(var3);
            var13 = var14.fromServerArray;
            var3 = var2.guild;
            var12 = var3.id;
            var3 = var2.guild;
            var3 = var3.roles;
            var3 = var13.bind(var14)(var12, var3);
            var3 = var10.bind(var11)(var3);
            var10 = _closure1_slot8;
            var9 = var10.getSelfMember;
            var2 = var2.guild;
            var2 = var2.id;
            var2 = var9.bind(var10)(var2);
            var3 = var6.bind(var7)(var8, var3, var2);
            var2 = arg2;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'handleGuildDelete';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            var4 = this;
            var3 = var4.delete;
            var1 = arg1;
            var1 = var1.guild;
            var2 = var1.id;
            var1 = arg2;
            var1 = var3.bind(var4)(var2, var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'handleGuildRoleChange';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                var1 = arg1;
                var4 = this;
                var5 = _closure1_slot10;
                var3 = var5.getGuild;
                var2 = var1.guildId;
                var7 = var3.bind(var5)(var2);
                var5 = _closure1_slot9;
                var3 = var5.getUnsafeMutableRoles;
                var2 = var1.guildId;
                var12 = var3.bind(var5)(var2);
                var2 = null;
                if(!(var2 != var7)) { _fun0008_ip = 210; continue _fun0008 }
 57:
                var3 = var4.put;
                var14 = _closure1_slot1;
                var15 = _closure1_slot2;
                var2 = 12;
                var2 = var15[var2];
                var13 = undefined;
                var6 = var14.bind(var13)(var2);
                var5 = var6.attachSerializedData;
                var11 = 11;
                var2 = var15[var11];
                var10 = var14.bind(var13)(var2);
                var9 = var10.toSerializedPartition;
                var2 = {};
                var18 = var2;
                var17 = var12;
                var12 = copyDataProperties(var18, var17);
                var12 = var1.role;
                var12 = var12.id;
                var11 = var15[var11];
                var15 = var14.bind(var13)(var11);
                var14 = var15.fromServer;
                var13 = var1.guildId;
                var11 = var1.role;
                var11 = var14.bind(var15)(var13, var11);
                var2[var12] = var11;
                var2 = var9.bind(var10)(var2);
                var9 = _closure1_slot8;
                var8 = var9.getSelfMember;
                var1 = var1.guildId;
                var1 = var8.bind(var9)(var1);
                var2 = var5.bind(var6)(var7, var2, var1);
                var1 = arg2;
                var1 = var3.bind(var4)(var2, var1);
 210:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'handleGuildRoleDelete';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                var5 = arg1;
                var4 = this;
                var _closure3_slot0 = var5;
                var7 = _closure1_slot10;
                var6 = var7.getGuild;
                var2 = var5.guildId;
                var7 = var6.bind(var7)(var2);
                var2 = null;
                if(!(var2 != var7)) { _fun0009_ip = 227; continue _fun0009 }
 43:
                var9 = {};
                var10 = _closure1_slot9;
                var8 = var10.getUnsafeMutableRoles;
                var6 = var5.guildId;
                var13 = var8.bind(var10)(var6);
                var14 = var9;
                var6 = copyDataProperties(var14, var13);
                var6 = var5.roleId;
                var6 = delete var9[var6];
                var8 = _closure1_slot8;
                var6 = var8.getSelfMember;
                var5 = var5.guildId;
                var5 = var6.bind(var8)(var5);
                var6 = var5;
                if(!(var2 != var6)) { _fun0009_ip = 154; continue _fun0009 }
 109:
                var2 = {};
                var14 = var2;
                var13 = var5;
                var8 = copyDataProperties(var14, var13);
                var8 = var5.roles;
                var5 = var8.filter;
                var3 = function(arg1) {
                    var1 = _closure3_slot0;
                    var2 = var1.roleId;
                    var1 = arg1;
                    var1 = var1 !== var2;
                    return var1;
                };
                var5 = var5.bind(var8)(var3);
                var3 = 'roles';
                var2[var3] = var5;
                var6 = var2;
 154:
                var3 = var4.put;
                var10 = _closure1_slot1;
                var11 = _closure1_slot2;
                var1 = 12;
                var1 = var11[var1];
                var8 = undefined;
                var5 = var10.bind(var8)(var1);
                var2 = var5.attachSerializedData;
                var1 = 11;
                var1 = var11[var1];
                var8 = var10.bind(var8)(var1);
                var1 = var8.toSerializedPartition;
                var1 = var1.bind(var8)(var9);
                var2 = var2.bind(var5)(var7, var1, var6);
                var1 = arg2;
                var1 = var3.bind(var4)(var2, var1);
 227:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'handleGuildMemberAdd';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                var2 = arg1;
                var4 = this;
                var1 = var2.joinedAt;
                var3 = null;
                if(!(var3 != var1)) { _fun0010_ip = 210; continue _fun0010 }
 21:
                var1 = var2.user;
                var5 = var1.id;
                var6 = _closure1_slot7;
                var1 = var6.getId;
                var1 = var1.bind(var6)();
                if(!(var5 === var1)) { _fun0010_ip = 210; continue _fun0010 }
 55:
                var6 = _closure1_slot10;
                var5 = var6.getGuild;
                var1 = var2.guildId;
                var1 = var5.bind(var6)(var1);
                if(!(var3 != var1)) { _fun0010_ip = 210; continue _fun0010 }
 81:
                var3 = var4.put;
                var10 = _closure1_slot1;
                var11 = _closure1_slot2;
                var5 = 12;
                var5 = var11[var5];
                var9 = undefined;
                var7 = var10.bind(var9)(var5);
                var6 = var7.attachSerializedData;
                var5 = _closure1_slot6;
                var2 = var2.joinedAt;
                var5 = var5.bind(var9)(var1, var2);
                var2 = 11;
                var2 = var11[var2];
                var10 = var10.bind(var9)(var2);
                var9 = var10.toSerializedPartition;
                var12 = _closure1_slot9;
                var11 = var12.getUnsafeMutableRoles;
                var2 = var1.id;
                var2 = var11.bind(var12)(var2);
                var2 = var9.bind(var10)(var2);
                var9 = _closure1_slot8;
                var8 = var9.getSelfMember;
                var1 = var1.id;
                var1 = var8.bind(var9)(var1);
                var2 = var6.bind(var7)(var5, var2, var1);
                var1 = arg2;
                var1 = var3.bind(var4)(var2, var1);
 210:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'handleGuildMemberUpdate';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                var8 = arg1;
                var4 = this;
                var1 = var8.user;
                var3 = var1.id;
                var5 = _closure1_slot7;
                var2 = var5.getId;
                var2 = var2.bind(var5)();
                if(!(var3 === var2)) { _fun0011_ip = 185; continue _fun0011 }
 40:
                var5 = _closure1_slot10;
                var3 = var5.getGuild;
                var2 = var8.guildId;
                var7 = var3.bind(var5)(var2);
                var2 = null;
                if(!(var2 != var7)) { _fun0011_ip = 185; continue _fun0011 }
 65:
                var3 = var4.put;
                var10 = _closure1_slot1;
                var11 = _closure1_slot2;
                var2 = 12;
                var2 = var11[var2];
                var9 = undefined;
                var6 = var10.bind(var9)(var2);
                var5 = var6.attachSerializedData;
                var2 = 11;
                var2 = var11[var2];
                var9 = var10.bind(var9)(var2);
                var2 = var9.toSerializedPartition;
                var11 = _closure1_slot9;
                var10 = var11.getUnsafeMutableRoles;
                var1 = var7.id;
                var1 = var10.bind(var11)(var1);
                var2 = var2.bind(var9)(var1);
                var1 = {};
                var9 = var8.roles;
                var1['roles'] = var9;
                var8 = var8.user;
                var8 = var8.id;
                var1['userId'] = var8;
                var2 = var5.bind(var6)(var7, var2, var1);
                var1 = arg2;
                var1 = var3.bind(var4)(var2, var1);
 185:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[10] = var5;
        var5 = {};
        var7 = 'resetInMemoryState';
        var5['key'] = var7;
        var7 = function value() {
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[11] = var5;
        var5 = {};
        var7 = 'putOne';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                var10 = arg1;
                var5 = this;
                var3 = var10.members;
                var2 = var3.find;
                var1 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.user;
                    var2 = var1.id;
                    var3 = _closure1_slot7;
                    var1 = var3.getId;
                    var1 = var1.bind(var3)();
                    var1 = var2 === var1;
                    return var1;
                };
                var9 = var2.bind(var3)(var1);
                var3 = _closure1_slot10;
                var2 = var3.getGuild;
                var1 = var10.id;
                var12 = var2.bind(var3)(var1);
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var4 = 12;
                var6 = var2[var4];
                var1 = undefined;
                var7 = var3.bind(var1)(var6);
                var6 = var7.attachSerializedData;
                var4 = var2[var4];
                var8 = var3.bind(var1)(var4);
                var4 = var8.fromServer;
                var4 = var4.bind(var8)(var10, var12);
                var13 = 11;
                var2 = var2[var13];
                var8 = var3.bind(var1)(var2);
                var3 = var8.toSerializedPartition;
                var12 = var10.roles;
                var2 = global;
                var2 = var2.Array;
                var2 = var12 instanceof var2;
                if(var2) { _fun0012_ip = 147; continue _fun0012 }
 139:
                var2 = var10.roles;
                _fun0012_ip = 187; continue _fun0012;
 147:
                var12 = _closure1_slot1;
                var11 = _closure1_slot2;
                var11 = var11[var13];
                var13 = var12.bind(var1)(var11);
                var12 = var13.fromServerArray;
                var11 = var10.id;
                var10 = var10.roles;
                var2 = var12.bind(var13)(var11, var10);
 187:
                var3 = var3.bind(var8)(var2);
                var2 = null;
                var8 = var2 != var9;
                if(!var8) { _fun0012_ip = 231; continue _fun0012 }
 201:
                var8 = {};
                var10 = var9.user;
                var10 = var10.id;
                var8['userId'] = var10;
                var9 = var9.roles;
                var8['roles'] = var9;
                var2 = var8;
 231:
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var5.put;
                var2 = arg2;
                var2 = var3.bind(var5)(var4, var2);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[12] = var5;
        var5 = {};
        var7 = 'put';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 9;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.guildsTransaction;
            var2 = arg2;
            var4 = var3.bind(var4)(var2);
            var3 = var4.put;
            var2 = arg1;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var5['value'] = var7;
        var1[13] = var5;
        var5 = {};
        var7 = 'delete';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 9;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.guildsTransaction;
            var2 = arg2;
            var4 = var3.bind(var4)(var2);
            var3 = var4.delete;
            var2 = arg1;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var5['value'] = var7;
        var1[14] = var5;
        var5 = {};
        var7 = 'clear';
        var5['key'] = var7;
        var6 = function value(arg1) {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 9;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.guildsTransaction;
            var2 = arg1;
            var3 = var3.bind(var4)(var2);
            var2 = var3.delete;
            var2 = var2.bind(var3)();
            return var1;
        };
        var5['value'] = var6;
        var1[15] = var5;
        var1 = var4.bind(var2)(var3, var1);
        return var1;
    };
    var2 = var2.bind(var1)();
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var13 = var4;
    var2 = new var13[var2](var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/app_database/modules/Guilds.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();