// app/modules/app_database/modules/GuildsRequiringChannelSync.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var8 = native4;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var8;
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
            var9 = _closure1_slot11;
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
            var7 = _closure1_slot11;
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
    var _closure1_slot10 = var1;
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
    var _closure1_slot11 = var1;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var4);
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
    var4 = var7.bind(var1)(var4);
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.Permissions;
    var7 = 7;
    var7 = var6[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.combine;
    var7 = var4.VIEW_CHANNEL;
    var4 = var4.ADMINISTRATOR;
    var4 = var8.bind(var9)(var7, var4);
    var _closure1_slot9 = var4;
    var2 = function() {
        var4 = _closure1_slot4;
        var3 = function GuildsRequiringChannelSync() {
            var3 = this;
            var _closure3_slot0 = var3;
            var5 = _closure1_slot3;
            var2 = _closure2_slot0;
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
            var4 = function CHANNEL_SYNC(arg1, arg2) {
                var4 = _closure3_slot0;
                var3 = var4.handleChannelSync;
                var2 = arg1;
                var1 = arg2;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var2['CHANNEL_SYNC'] = var4;
            var3['actions'] = var2;
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'getAll';
        var1['key'] = var2;
        var2 = function value() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 8;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.guildsRequiringChannelSync;
                var2 = var1.bind(var2)();
                var1 = null;
                if(!(var1 != var2)) { _fun0004_ip = 53; continue _fun0004 }
 41:
                var1 = var2.getMany;
                var1 = var1.bind(var2)();
                _fun0004_ip = 76; continue _fun0004;
 53:
                var2 = global;
                var4 = var2.Promise;
                var3 = var4.resolve;
                var2 = new Array(0);
                var1 = var3.bind(var4)(var2);
 76:
                return var1;
            }
        };
        var1['value'] = var2;
        var2 = new Array(13);
        var2[0] = var1;
        var1 = {};
        var6 = 'handleConnectionOpen';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var6 = arg2;
                var5 = this;
                var1 = arg1;
                var3 = var1.guilds;
                var2 = _closure1_slot10;
                var1 = undefined;
                var4 = var2.bind(var1)(var3);
                var3 = var4.bind(var1)();
                var2 = var3.done;
                if(var2) { _fun0005_ip = 73; continue _fun0005 }
 41:
                var7 = var3.value;
                var2 = var5.handleGuild;
                var2 = var2.bind(var5)(var7, var6);
                var7 = var4.bind(var1)();
                var2 = var7.done;
                var3 = var7;
                if(!var2) { _fun0005_ip = 41; continue _fun0005 }
 73:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'handleGuildCreate';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var4 = this;
                var1 = arg1;
                var3 = var1.guild;
                var2 = var3.unavailable;
                var1 = true;
                if(!(var1 !== var2)) { _fun0006_ip = 38; continue _fun0006 }
 23:
                var2 = var4.handleGuild;
                var1 = arg2;
                var1 = var2.bind(var4)(var3, var1);
 38:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[2] = var1;
        var1 = {};
        var6 = 'handleBackgroundSync';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var6 = arg2;
                var5 = this;
                var1 = arg1;
                var3 = var1.guilds;
                var2 = _closure1_slot10;
                var1 = undefined;
                var4 = var2.bind(var1)(var3);
                var3 = var4.bind(var1)();
                var2 = var3.done;
                if(var2) { _fun0007_ip = 75; continue _fun0007 }
 41:
                var7 = var3.value;
                var2 = var5.handleBackgroundSyncGuild;
                var2 = var2.bind(var5)(var7, var6);
                var7 = var4.bind(var1)();
                var2 = var7.done;
                var3 = var7;
                if(!var2) { _fun0007_ip = 41; continue _fun0007 }
 75:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[3] = var1;
        var1 = {};
        var6 = 'rolesHaveVisibilityChanges';
        var1['key'] = var6;
        var6 = function value(arg1, arg2, arg3) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                var15 = arg1;
                var14 = arg2;
                var13 = arg3;
                var11 = var14;
                var7 = undefined;
                var5 = 7;
                var4 = null;
                var3 = undefined;
                var2 = undefined;
                for(var8 in var11)
 37:
                {
 49:
                    var1 = var8;
                    var16 = var13.has;
                    var16 = var16.bind(var13)(var1);
                    if(!var16) { _fun0008_ip = 37; continue _fun0008 }
 65:
                    var3 = var14[var1];
                    var2 = var15[var1];
                    if(!(var4 != var2)) { _fun0008_ip = 169; continue _fun0008 }
 77:
                    var16 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var17 = var1[var5];
                    var19 = var16.bind(var7)(var17);
                    var18 = var19.filter;
                    var17 = var2.permissions;
                    var21 = _closure1_slot9;
                    var18 = var18.bind(var19)(var17, var21);
                    var17 = var1[var5];
                    var20 = var16.bind(var7)(var17);
                    var19 = var20.filter;
                    var17 = var3.permissions;
                    var17 = var19.bind(var20)(var17, var21);
                    var1 = var1[var5];
                    var16 = var16.bind(var7)(var1);
                    var1 = var16.equals;
                    var1 = var1.bind(var16)(var18, var17);
                    if(var1) { _fun0008_ip = 37; continue _fun0008 }
 165:
                    var1 = true;
                    return var1;
 169:
                    var1 = true;
                    return var1;
                }
 173:
                var1 = false;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[4] = var1;
        var1 = {};
        var6 = 'processMemberRoleIds';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                var6 = arg1;
                var3 = arg2;
                var2 = var6.length;
                var1 = var3.length;
                if(!(var2 === var1)) { _fun0009_ip = 199; continue _fun0009 }
 23:
                var1 = global;
                var1 = var1.Set;
                var2 = var1.prototype;
                var2 = Object.create(var2, {constructor: {value: var1}});
                var10 = var2;
                var1 = new var10[var1](var9);
                var2 = var1 instanceof Object ? var1 : var2;
                var4 = _closure1_slot10;
                var5 = undefined;
                var7 = var4.bind(var5)(var6);
                var6 = var7.bind(var5)();
                var4 = var6.done;
                if(var4) { _fun0009_ip = 107; continue _fun0009 }
 77:
                var8 = var6.value;
                var4 = var2.add;
                var4 = var4.bind(var2)(var8);
                var8 = var7.bind(var5)();
                var4 = var8.done;
                var6 = var8;
                if(!var4) { _fun0009_ip = 77; continue _fun0009 }
 107:
                var1 = _closure1_slot10;
                var4 = var1.bind(var5)(var3);
                var3 = var4.bind(var5)();
                var1 = var3.done;
                if(var1) { _fun0009_ip = 183; continue _fun0009 }
 128:
                var6 = var3.value;
                var1 = var2.has;
                var1 = var1.bind(var2)(var6);
                if(var1) { _fun0009_ip = 158; continue _fun0009 }
 146:
                var1 = {'rolesAreDifferent': true, 'allRoleIds': null};
                return var1;
 158:
                var1 = var2.add;
                var1 = var1.bind(var2)(var6);
                var6 = var4.bind(var5)();
                var1 = var6.done;
                var3 = var6;
                if(!var1) { _fun0009_ip = 128; continue _fun0009 }
 183:
                var1 = {};
                var3 = false;
                var1['rolesAreDifferent'] = var3;
                var1['allRoleIds'] = var2;
                return var1;
 199:
                var1 = {'rolesAreDifferent': true, 'allRoleIds': null};
                return var1;
            }
        };
        var1['value'] = var6;
        var2[5] = var1;
        var1 = {};
        var6 = 'userBecameGuildOwner';
        var1['key'] = var6;
        var6 = function value(arg1, arg2, arg3) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                var4 = arg3;
                var1 = null;
                var1 = var1 != var4;
                if(!var1) { _fun0010_ip = 32; continue _fun0010 }
 12:
                var2 = arg2;
                var2 = var2 === var4;
                if(!var2) { _fun0010_ip = 29; continue _fun0010 }
 22:
                var3 = arg1;
                var2 = var3 !== var4;
 29:
                var1 = var2;
 32:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[6] = var1;
        var1 = {};
        var6 = 'handleBackgroundSyncGuild';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                var1 = arg1;
                var4 = arg2;
                var3 = this;
                var7 = _closure1_slot6;
                var6 = var7.getSelfMember;
                var2 = var1.id;
                var10 = var6.bind(var7)(var2);
                var6 = null;
                if(!(var6 == var10)) { _fun0011_ip = 58; continue _fun0011 }
 38:
                var8 = _closure1_slot6;
                var7 = var8.getCachedSelfMember;
                var2 = var1.id;
                var10 = var7.bind(var8)(var2);
 58:
                if(!(var6 != var10)) { _fun0011_ip = 445; continue _fun0011 }
 65:
                var7 = var1.data_mode;
                var2 = 'partial';
                if(!(var2 !== var7)) { _fun0011_ip = 118; continue _fun0011 }
 79:
                var7 = var1.data_mode;
                var2 = 'full';
                if(!(var2 === var7)) { _fun0011_ip = 445; continue _fun0011 }
 96:
                var7 = var3.unmarkGuildForResync;
                var2 = var1.id;
                var2 = var7.bind(var3)(var2, var4);
                _fun0011_ip = 445; continue _fun0011;
 118:
                var8 = {};
                var2 = var1.partial_updates;
                var2 = var2.roles;
                if(!(var6 != var2)) { _fun0011_ip = 253; continue _fun0011 }
 136:
                var7 = _closure1_slot10;
                var2 = var1.partial_updates;
                var2 = var2.roles;
                var12 = undefined;
                var11 = var7.bind(var12)(var2);
                var7 = var11.bind(var12)();
                var2 = var7.done;
                var9 = 7;
                if(var2) { _fun0011_ip = 253; continue _fun0011 }
 174:
                var14 = var7.value;
                var13 = var14.id;
                var2 = {};
                var15 = var14.id;
                var2['id'] = var15;
                var16 = _closure1_slot1;
                var15 = _closure1_slot2;
                var15 = var15[var9];
                var16 = var16.bind(var12)(var15);
                var15 = var16.deserialize;
                var14 = var14.permissions;
                var14 = var15.bind(var16)(var14);
                var2['permissions'] = var14;
                var8[var13] = var2;
                var13 = var11.bind(var12)();
                var2 = var13.done;
                var7 = var13;
                if(!var2) { _fun0011_ip = 174; continue _fun0011 }
 253:
                var2 = var1.properties;
                var12 = var3.userBecameGuildOwner;
                var11 = _closure1_slot8;
                var9 = var11.getGuild;
                var7 = var1.id;
                var7 = var9.bind(var11)(var7);
                var13 = var6 == var7;
                var11 = undefined;
                if(var13) { _fun0011_ip = 299; continue _fun0011 }
 293:
                var11 = var7.ownerId;
 299:
                var13 = var6 == var2;
                var7 = undefined;
                if(var13) { _fun0011_ip = 314; continue _fun0011 }
 308:
                var7 = var2.owner_id;
 314:
                var13 = _closure1_slot5;
                var2 = var13.getId;
                var2 = var2.bind(var13)();
                var2 = var12.bind(var3)(var11, var7, var2);
                if(var2) { _fun0011_ip = 425; continue _fun0011 }
 338:
                var11 = _closure1_slot7;
                var7 = var11.getUnsafeMutableRoles;
                var5 = var1.id;
                var7 = var7.bind(var11)(var5);
                var5 = global;
                var5 = var5.Set;
                var11 = var6 == var10;
                var9 = undefined;
                if(var11) { _fun0011_ip = 381; continue _fun0011 }
 375:
                var9 = var10.roles;
 381:
                if(!(var6 == var9)) { _fun0011_ip = 389; continue _fun0011 }
 385:
                var9 = new Array(0);
 389:
                var6 = var5.prototype;
                var6 = Object.create(var6, {constructor: {value: var5}});
                var20 = var6;
                var19 = var9;
                var5 = new var20[var5](var19, var18);
                var6 = var5 instanceof Object ? var5 : var6;
                var5 = var3.rolesHaveVisibilityChanges;
                var2 = var5.bind(var3)(var7, var8, var6);
 425:
                if(!var2) { _fun0011_ip = 445; continue _fun0011 }
 428:
                var2 = var3.markGuildForResync;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1, var4);
 445:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[7] = var1;
        var1 = {};
        var6 = 'handleGuild';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                var1 = arg1;
                var4 = arg2;
                var3 = this;
                var2 = var1.channels;
                var5 = var2.op;
                var2 = 'full_sync';
                if(!(var2 === var5)) { _fun0012_ip = 54; continue _fun0012 }
 32:
                var5 = var3.unmarkGuildForResync;
                var2 = var1.id;
                var2 = var5.bind(var3)(var2, var4);
                _fun0012_ip = 441; continue _fun0012;
 54:
                var6 = _closure1_slot5;
                var2 = var6.getId;
                var11 = var2.bind(var6)();
                var _closure3_slot0 = var11;
                var7 = _closure1_slot8;
                var6 = var7.getGuild;
                var2 = var1.id;
                var2 = var6.bind(var7)(var2);
                var6 = null;
                var8 = var6 != var2;
                var7 = true;
                if(!var8) { _fun0012_ip = 145; continue _fun0012 }
 105:
                var10 = var3.userBecameGuildOwner;
                var8 = var2.ownerId;
                var12 = var1.properties;
                var13 = var6 == var12;
                var2 = undefined;
                if(var13) { _fun0012_ip = 138; continue _fun0012 }
 132:
                var2 = var12.owner_id;
 138:
                var7 = var10.bind(var3)(var8, var2, var11);
 145:
                var8 = null;
                if(var7) { _fun0012_ip = 301; continue _fun0012 }
 153:
                var11 = _closure1_slot6;
                var10 = var11.getSelfMember;
                var2 = var1.id;
                var2 = var10.bind(var11)(var2);
                if(!(var6 == var2)) { _fun0012_ip = 197; continue _fun0012 }
 177:
                var12 = _closure1_slot6;
                var11 = var12.getCachedSelfMember;
                var10 = var1.id;
                var2 = var11.bind(var12)(var10);
 197:
                var11 = var1.members;
                var10 = var11.find;
                var9 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.user;
                    var2 = var1.id;
                    var1 = _closure3_slot0;
                    var1 = var2 === var1;
                    return var1;
                };
                var11 = var10.bind(var11)(var9);
                var10 = var3.processMemberRoleIds;
                if(!(var6 == var2)) { _fun0012_ip = 236; continue _fun0012 }
 230:
                var9 = new Array(0);
                _fun0012_ip = 242; continue _fun0012;
 236:
                var9 = var2.roles;
 242:
                var12 = var6 == var11;
                var2 = undefined;
                if(var12) { _fun0012_ip = 257; continue _fun0012 }
 251:
                var2 = var11.roles;
 257:
                if(!(var6 == var2)) { _fun0012_ip = 265; continue _fun0012 }
 261:
                var2 = new Array(0);
 265:
                var2 = var10.bind(var3)(var9, var2);
                var9 = var2.rolesAreDifferent;
                var2 = var2.allRoleIds;
                var10 = var6 != var2;
                var7 = var9;
                var8 = null;
                if(!var10) { _fun0012_ip = 301; continue _fun0012 }
 295:
                var7 = var9;
                var8 = var2;
 301:
                var2 = var7;
                if(var7) { _fun0012_ip = 421; continue _fun0012 }
 307:
                var2 = var7;
                if(!(var6 != var8)) { _fun0012_ip = 421; continue _fun0012 }
 314:
                var9 = _closure1_slot7;
                var7 = var9.getUnsafeMutableRoles;
                var6 = var1.id;
                var7 = var7.bind(var9)(var6);
                var9 = var1.roles;
                var6 = global;
                var6 = var6.Array;
                var6 = var9 instanceof var6;
                if(var6) { _fun0012_ip = 363; continue _fun0012 }
 355:
                var6 = var1.roles;
                _fun0012_ip = 408; continue _fun0012;
 363:
                var10 = _closure1_slot1;
                var9 = _closure1_slot2;
                var5 = 9;
                var9 = var9[var5];
                var5 = undefined;
                var11 = var10.bind(var5)(var9);
                var10 = var11.fromServerArray;
                var9 = var1.id;
                var5 = var1.roles;
                var6 = var10.bind(var11)(var9, var5);
 408:
                var5 = var3.rolesHaveVisibilityChanges;
                var2 = var5.bind(var3)(var7, var6, var8);
 421:
                if(!var2) { _fun0012_ip = 441; continue _fun0012 }
 424:
                var2 = var3.markGuildForResync;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1, var4);
 441:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[8] = var1;
        var1 = {};
        var6 = 'handleChannelSync';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                var1 = arg1;
                var4 = this;
                var3 = var1.guild_id;
                var1 = var1.integrity_check;
                if(var1) { _fun0013_ip = 35; continue _fun0013 }
 20:
                var2 = var4.unmarkGuildForResync;
                var1 = arg2;
                var1 = var2.bind(var4)(var3, var1);
 35:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[9] = var1;
        var1 = {};
        var6 = 'markGuildForResync';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 8;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.guildsRequiringChannelSyncTransaction;
            var2 = arg2;
            var4 = var3.bind(var4)(var2);
            var3 = var4.put;
            var2 = {};
            var5 = arg1;
            var2['id'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var1['value'] = var6;
        var2[10] = var1;
        var1 = {};
        var6 = 'unmarkGuildForResync';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 8;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.guildsRequiringChannelSyncTransaction;
            var2 = arg2;
            var4 = var3.bind(var4)(var2);
            var3 = var4.delete;
            var2 = arg1;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var1['value'] = var6;
        var2[11] = var1;
        var1 = {};
        var6 = 'resetInMemoryState';
        var1['key'] = var6;
        var5 = function value() {
            var1 = undefined;
            return var1;
        };
        var1['value'] = var5;
        var2[12] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2 = var2.bind(var1)();
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var14 = var4;
    var2 = new var14[var2](var13);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/app_database/modules/GuildsRequiringChannelSync.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();