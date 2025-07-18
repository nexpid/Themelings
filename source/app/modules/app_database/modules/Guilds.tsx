// app/modules/app_database/modules/Guilds.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var1 = native4;
    var _closure1_slot2 = var1;
    var _closure1_slot3 = var6;
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
            if(var2) { _fun0001_ip = 342; continue _fun0001 }
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
            var9 = _closure1_slot14;
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
            var7 = _closure1_slot14;
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
 342:
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
    var _closure1_slot14 = var1;
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
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.updateJoinedAt;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 8;
    var4 = var6[var4];
    var8 = var7.bind(var1)(var4);
    var4 = var8.prototype;
    var7 = Object.create(var4, {constructor: {value: var8}});
    var12 = 'Guilds';
    var13 = var7;
    var4 = new var13[var8](var12, var11);
    var4 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot12 = var4;
    var2 = function() {
        var4 = _closure1_slot6;
        var3 = function Guilds() {
            var3 = this;
            var _closure3_slot0 = var3;
            var5 = _closure1_slot5;
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
        var8 = _closure1_slot4;
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
                    var6 = _closure1_slot1;
                    var5 = _closure1_slot3;
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
                    var5 = _closure1_slot12;
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
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot3;
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
                var13 = arg2;
                var12 = this;
                var3 = _closure1_slot13;
                var1 = arg1;
                var2 = var1.guilds;
                var1 = undefined;
                var10 = var3.bind(var1)(var2);
                var3 = var10.bind(var1)();
                var2 = var3.done;
                var9 = 11;
                var8 = 10;
                var7 = 'partial';
                var6 = null;
                var5 = 'unavailable';
                var4 = var3;
                var3 = undefined;
                if(var2) { _fun0006_ip = 351; continue _fun0006 }
 65:
                var14 = var4.value;
                var2 = var14.data_mode;
                if(!(var5 !== var2)) { _fun0006_ip = 349; continue _fun0006 }
 83:
                var16 = _closure1_slot11;
                var15 = var16.getGuild;
                var2 = var14.id;
                var21 = var15.bind(var16)(var2);
                if(!(var6 != var21)) { _fun0006_ip = 329; continue _fun0006 }
 109:
                var16 = _closure1_slot10;
                var15 = var16.getRoles;
                var2 = var14.id;
                var2 = var15.bind(var16)(var2);
                var15 = var14.data_mode;
                if(!(var7 !== var15)) { _fun0006_ip = 181; continue _fun0006 }
 139:
                var16 = _closure1_slot0;
                var15 = _closure1_slot3;
                var15 = var15[var8];
                var18 = var16.bind(var1)(var15);
                var17 = var18.sortServerRoles;
                var16 = var14.id;
                var15 = var14.roles;
                var19 = var17.bind(var18)(var16, var15);
                _fun0006_ip = 243; continue _fun0006;
 181:
                var16 = _closure1_slot2;
                var15 = _closure1_slot3;
                var15 = var15[var8];
                var20 = var16.bind(var1)(var15);
                var18 = var20.filterRoleDeletes;
                var25 = var14.id;
                var15 = var14.partial_updates;
                var23 = var15.roles;
                var15 = var14.partial_updates;
                var22 = var15.deleted_role_ids;
                var26 = var20;
                var24 = var2;
                var19 = var26[var18](var25, var24, var23, var22, var21);
 243:
                var15 = var12.put;
                var20 = _closure1_slot2;
                var16 = _closure1_slot3;
                var17 = var16[var9];
                var18 = var20.bind(var1)(var17);
                var17 = var18.attachSerializedData;
                var16 = var16[var9];
                var20 = var20.bind(var1)(var16);
                var16 = var20.fromBackgroundSync;
                var16 = var16.bind(var20)(var14, var21);
                var21 = _closure1_slot9;
                var20 = var21.getSelfMember;
                var14 = var14.id;
                var14 = var20.bind(var21)(var14);
                var14 = var17.bind(var18)(var16, var19, var14);
                var14 = var15.bind(var12)(var14, var13);
                var3 = var2;
 329:
                var14 = var10.bind(var1)();
                var2 = var14.done;
                var4 = var14;
                if(var2) { _fun0006_ip = 351; continue _fun0006 }
 344:
                _fun0006_ip = 65; continue _fun0006;
 349:
                return var1;
 351:
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
                var3 = _closure1_slot13;
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
            var4 = _closure1_slot11;
            var3 = var4.getGuild;
            var1 = var2.guild;
            var1 = var1.id;
            var10 = var3.bind(var4)(var1);
            var6 = _closure1_slot2;
            var11 = _closure1_slot3;
            var3 = 11;
            var4 = var11[var3];
            var1 = undefined;
            var8 = var6.bind(var1)(var4);
            var7 = var8.fromGuild;
            var4 = var2.guild;
            var8 = var7.bind(var8)(var4, var10);
            var4 = var5.put;
            var3 = var11[var3];
            var7 = var6.bind(var1)(var3);
            var6 = var7.attachSerializedData;
            var10 = _closure1_slot0;
            var3 = 10;
            var3 = var11[var3];
            var12 = var10.bind(var1)(var3);
            var11 = var12.sortServerRoles;
            var3 = var2.guild;
            var10 = var3.id;
            var3 = var2.guild;
            var3 = var3.roles;
            var3 = var11.bind(var12)(var10, var3);
            var10 = _closure1_slot9;
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
                var5 = _closure1_slot11;
                var3 = var5.getGuild;
                var2 = var1.guildId;
                var7 = var3.bind(var5)(var2);
                var5 = _closure1_slot10;
                var3 = var5.getRoles;
                var2 = var1.guildId;
                var9 = var3.bind(var5)(var2);
                var2 = null;
                if(!(var2 != var7)) { _fun0008_ip = 158; continue _fun0008 }
 54:
                var3 = var4.put;
                var6 = _closure1_slot2;
                var5 = _closure1_slot3;
                var2 = 11;
                var5 = var5[var2];
                var2 = undefined;
                var6 = var6.bind(var2)(var5);
                var5 = var6.attachSerializedData;
                var2 = {};
                var13 = var2;
                var12 = var9;
                var9 = copyDataProperties(var13, var12);
                var9 = var1.role;
                var10 = var9.id;
                var9 = var1.role;
                var2[var10] = var9;
                var9 = _closure1_slot9;
                var8 = var9.getSelfMember;
                var1 = var1.guildId;
                var1 = var8.bind(var9)(var1);
                var2 = var5.bind(var6)(var7, var2, var1);
                var1 = arg2;
                var1 = var3.bind(var4)(var2, var1);
 158:
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
                var7 = _closure1_slot11;
                var6 = var7.getGuild;
                var2 = var5.guildId;
                var7 = var6.bind(var7)(var2);
                var2 = null;
                if(!(var2 != var7)) { _fun0009_ip = 204; continue _fun0009 }
 43:
                var6 = {};
                var10 = _closure1_slot10;
                var9 = var10.getRoles;
                var8 = var5.guildId;
                var12 = var9.bind(var10)(var8);
                var13 = var6;
                var8 = copyDataProperties(var13, var12);
                var8 = var5.roleId;
                var8 = delete var6[var8];
                var9 = _closure1_slot9;
                var8 = var9.getSelfMember;
                var5 = var5.guildId;
                var8 = var8.bind(var9)(var5);
                var5 = var8;
                if(!(var2 != var5)) { _fun0009_ip = 154; continue _fun0009 }
 109:
                var2 = {};
                var13 = var2;
                var12 = var8;
                var9 = copyDataProperties(var13, var12);
                var9 = var8.roles;
                var8 = var9.filter;
                var3 = function(arg1) {
                    var1 = _closure3_slot0;
                    var2 = var1.roleId;
                    var1 = arg1;
                    var1 = var1 !== var2;
                    return var1;
                };
                var8 = var8.bind(var9)(var3);
                var3 = 'roles';
                var2[var3] = var8;
                var5 = var2;
 154:
                var3 = var4.put;
                var8 = _closure1_slot2;
                var2 = _closure1_slot3;
                var1 = 11;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var8.bind(var1)(var2);
                var1 = var2.attachSerializedData;
                var2 = var1.bind(var2)(var7, var6, var5);
                var1 = arg2;
                var1 = var3.bind(var4)(var2, var1);
 204:
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
                if(!(var3 != var1)) { _fun0010_ip = 184; continue _fun0010 }
 21:
                var1 = var2.user;
                var5 = var1.id;
                var6 = _closure1_slot8;
                var1 = var6.getId;
                var1 = var1.bind(var6)();
                if(!(var5 === var1)) { _fun0010_ip = 184; continue _fun0010 }
 55:
                var6 = _closure1_slot11;
                var5 = var6.getGuild;
                var1 = var2.guildId;
                var1 = var5.bind(var6)(var1);
                if(!(var3 != var1)) { _fun0010_ip = 184; continue _fun0010 }
 78:
                var3 = var4.put;
                var6 = _closure1_slot2;
                var7 = _closure1_slot3;
                var5 = 11;
                var5 = var7[var5];
                var9 = undefined;
                var7 = var6.bind(var9)(var5);
                var6 = var7.attachSerializedData;
                var5 = _closure1_slot7;
                var2 = var2.joinedAt;
                var5 = var5.bind(var9)(var1, var2);
                var10 = _closure1_slot10;
                var9 = var10.getRoles;
                var2 = var1.id;
                var2 = var9.bind(var10)(var2);
                var9 = _closure1_slot9;
                var8 = var9.getSelfMember;
                var1 = var1.id;
                var1 = var8.bind(var9)(var1);
                var2 = var6.bind(var7)(var5, var2, var1);
                var1 = arg2;
                var1 = var3.bind(var4)(var2, var1);
 184:
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
                var5 = _closure1_slot8;
                var2 = var5.getId;
                var2 = var2.bind(var5)();
                if(!(var3 === var2)) { _fun0011_ip = 162; continue _fun0011 }
 40:
                var5 = _closure1_slot11;
                var3 = var5.getGuild;
                var2 = var8.guildId;
                var7 = var3.bind(var5)(var2);
                var2 = null;
                if(!(var2 != var7)) { _fun0011_ip = 162; continue _fun0011 }
 65:
                var3 = var4.put;
                var6 = _closure1_slot2;
                var5 = _closure1_slot3;
                var2 = 11;
                var5 = var5[var2];
                var2 = undefined;
                var6 = var6.bind(var2)(var5);
                var5 = var6.attachSerializedData;
                var9 = _closure1_slot10;
                var2 = var9.getRoles;
                var1 = var7.id;
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
 162:
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
                var2 = arg1;
                var5 = this;
                var4 = var2.members;
                var3 = var4.find;
                var1 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.user;
                    var2 = var1.id;
                    var3 = _closure1_slot8;
                    var1 = var3.getId;
                    var1 = var1.bind(var3)();
                    var1 = var2 === var1;
                    return var1;
                };
                var9 = var3.bind(var4)(var1);
                var4 = _closure1_slot11;
                var3 = var4.getGuild;
                var1 = var2.id;
                var10 = var3.bind(var4)(var1);
                var4 = _closure1_slot2;
                var11 = _closure1_slot3;
                var3 = 11;
                var6 = var11[var3];
                var1 = undefined;
                var7 = var4.bind(var1)(var6);
                var6 = var7.attachSerializedData;
                var3 = var11[var3];
                var4 = var4.bind(var1)(var3);
                var3 = var4.fromServer;
                var4 = var3.bind(var4)(var2, var10);
                var10 = var2.roles;
                var3 = global;
                var3 = var3.Array;
                var3 = var10 instanceof var3;
                if(var3) { _fun0012_ip = 129; continue _fun0012 }
 121:
                var3 = var2.roles;
                _fun0012_ip = 172; continue _fun0012;
 129:
                var10 = _closure1_slot0;
                var11 = _closure1_slot3;
                var8 = 10;
                var8 = var11[var8];
                var11 = var10.bind(var1)(var8);
                var10 = var11.sortServerRoles;
                var8 = var2.id;
                var2 = var2.roles;
                var3 = var10.bind(var11)(var8, var2);
 172:
                var2 = null;
                var8 = var2 != var9;
                if(!var8) { _fun0012_ip = 211; continue _fun0012 }
 181:
                var8 = {};
                var10 = var9.user;
                var10 = var10.id;
                var8['userId'] = var10;
                var9 = var9.roles;
                var8['roles'] = var9;
                var2 = var8;
 211:
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
            var3 = _closure1_slot1;
            var2 = _closure1_slot3;
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
            var3 = _closure1_slot1;
            var2 = _closure1_slot3;
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
            var3 = _closure1_slot1;
            var2 = _closure1_slot3;
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
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/app_database/modules/Guilds.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();