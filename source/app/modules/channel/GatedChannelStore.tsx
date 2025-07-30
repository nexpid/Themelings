// app/modules/channel/GatedChannelStore.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
            _closure1_slot19 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot19 = var1;
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
            var9 = _closure1_slot21;
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
            var7 = _closure1_slot21;
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
    var _closure1_slot20 = var1;
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
    var _closure1_slot21 = var1;
    var1 = function isSubscriptionGated(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var1 = arg1;
            var10 = var1.guildId;
            var6 = var1.role;
            var2 = var1.isPreviewingRoles;
            var4 = _closure1_slot0;
            var1 = _closure1_slot1;
            var7 = 14;
            var1 = var1[var7];
            var3 = undefined;
            var4 = var4.bind(var3)(var1);
            var1 = var4.isSubscriptionRole;
            var1 = var1.bind(var4)(var6);
            var4 = !var1;
            var1 = !var4;
            if(var4) { _fun0005_ip = 226; continue _fun0005 }
 68:
            var4 = !var2;
            var2 = !var4;
            if(!var4) { _fun0005_ip = 223; continue _fun0005 }
 80:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var4 = var4[var7];
            var7 = var5.bind(var3)(var4);
            var4 = var7.isSubscriptionRoleAvailableForPurchase;
            var5 = null;
            var9 = var5 != var6;
            var3 = undefined;
            if(!var9) { _fun0005_ip = 117; continue _fun0005 }
 114:
            var3 = var6;
 117:
            var3 = var4.bind(var7)(var3);
            var4 = !var3;
            var3 = !var4;
            if(!var4) { _fun0005_ip = 220; continue _fun0005 }
 131:
            var7 = var5 == var6;
            var4 = false;
            if(var7) { _fun0005_ip = 214; continue _fun0005 }
 140:
            var9 = _closure1_slot14;
            var7 = var9.getCurrentUser;
            var7 = var7.bind(var9)();
            var9 = var5 == var7;
            var4 = false;
            if(var9) { _fun0005_ip = 214; continue _fun0005 }
 162:
            var9 = _closure1_slot11;
            var8 = var9.getMember;
            var7 = var7.id;
            var7 = var8.bind(var9)(var10, var7);
            var5 = var5 != var7;
            if(!var5) { _fun0005_ip = 211; continue _fun0005 }
 190:
            var8 = var7.roles;
            var7 = var8.includes;
            var6 = var6.id;
            var5 = var7.bind(var8)(var6);
 211:
            var4 = var5;
 214:
            var4 = !var4;
            var3 = !var4;
 220:
            var2 = var3;
 223:
            var1 = var2;
 226:
            return var1;
        }
    };
    var _closure1_slot22 = var1;
    var1 = function isChannelSubscriptionGatedInGuild(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var10 = arg1;
            var8 = arg2;
            var3 = var8.features;
            var2 = var3.has;
            var1 = _closure1_slot16;
            var1 = var1.CREATOR_MONETIZABLE;
            var1 = var2.bind(var3)(var1);
            if(var1) { _fun0006_ip = 71; continue _fun0006 }
 38:
            var3 = var8.features;
            var2 = var3.has;
            var1 = _closure1_slot16;
            var1 = var1.CREATOR_MONETIZABLE_PROVISIONAL;
            var1 = var2.bind(var3)(var1);
            if(var1) { _fun0006_ip = 71; continue _fun0006 }
 67:
            var1 = false;
            return var1;
 71:
            var3 = _closure1_slot7;
            var2 = var3.isViewingServerShop;
            var1 = var8.id;
            var6 = var2.bind(var3)(var1);
            var1 = global;
            var3 = var1.Object;
            var2 = var3.keys;
            var1 = var10.permissionOverwrites;
            var3 = var2.bind(var3)(var1);
            var1 = var3.length;
            var2 = 0;
            var1 = var2 < var1;
            var5 = 15;
            var4 = undefined;
            if(!var1) { _fun0006_ip = 249; continue _fun0006 }
 134:
            var9 = var3[var2];
            var12 = _closure1_slot12;
            var11 = var12.getRole;
            var1 = var8.id;
            var12 = var11.bind(var12)(var1, var9);
            var11 = _closure1_slot22;
            var1 = {};
            var13 = var8.id;
            var1['guildId'] = var13;
            var1['role'] = var12;
            var1['isPreviewingRoles'] = var6;
            var1 = var11.bind(var4)(var1);
            if(!var1) { _fun0006_ip = 237; continue _fun0006 }
 192:
            var1 = var10.permissionOverwrites;
            var11 = var1[var9];
            var9 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var5];
            var9 = var9.bind(var4)(var1);
            var1 = var9.isChannelAccessGrantedBy;
            var1 = var1.bind(var9)(var10, var11);
            if(var1) { _fun0006_ip = 478; continue _fun0006 }
 237:
            var2 = var2 + 1;
            var1 = var3.length;
            if(var2 < var1) { _fun0006_ip = 134; continue _fun0006 }
 249:
            var2 = _closure1_slot12;
            var1 = var2.getEveryoneRole;
            var3 = var1.bind(var2)(var8);
            var2 = _closure1_slot9;
            var1 = _closure1_slot15;
            var1 = var1.VIEW_CHANNEL;
            var1 = var2.bind(var4)(var3, var1);
            var2 = !var1;
            var3 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var5];
            var9 = var3.bind(var4)(var1);
            var3 = var9.isChannelAccessDeniedBy;
            var11 = var10.permissionOverwrites;
            var1 = var8.id;
            var1 = var11[var1];
            var1 = var3.bind(var9)(var10, var1);
            if(!var2) { _fun0006_ip = 474; continue _fun0006 }
 337:
            if(var1) { _fun0006_ip = 474; continue _fun0006 }
 343:
            var2 = _closure1_slot20;
            var9 = _closure1_slot12;
            var3 = var9.getSortedRoles;
            var1 = var8.id;
            var1 = var3.bind(var9)(var1);
            var3 = var2.bind(var4)(var1);
            var2 = var3.bind(var4)();
            var1 = var2.done;
            if(var1) { _fun0006_ip = 474; continue _fun0006 }
 384:
            var10 = var2.value;
            var9 = _closure1_slot22;
            var1 = {};
            var11 = var8.id;
            var1['guildId'] = var11;
            var1['role'] = var10;
            var1['isPreviewingRoles'] = var6;
            var1 = var9.bind(var4)(var1);
            if(!var1) { _fun0006_ip = 453; continue _fun0006 }
 422:
            var9 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var5];
            var9 = var9.bind(var4)(var1);
            var1 = var9.hasViewChannelPermission;
            var1 = var1.bind(var9)(var10);
            if(var1) { _fun0006_ip = 470; continue _fun0006 }
 453:
            var9 = var3.bind(var4)();
            var1 = var9.done;
            var2 = var9;
            if(var1) { _fun0006_ip = 474; continue _fun0006 }
 468:
            _fun0006_ip = 384; continue _fun0006;
 470:
            var1 = true;
            return var1;
 474:
            var1 = false;
            return var1;
 478:
            var1 = true;
            return var1;
        }
    };
    var _closure1_slot23 = var1;
    var1 = function computeForChannel(arg1, arg2) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var4 = arg2;
            var3 = _closure1_slot17;
            var1 = arg1;
            var3 = var3[var1];
            var1 = null;
            if(!(var1 != var3)) { _fun0007_ip = 137; continue _fun0007 }
 23:
            var6 = _closure1_slot10;
            var5 = var6.getChannel;
            var7 = var5.bind(var6)(var4);
            if(!(var1 != var7)) { _fun0007_ip = 133; continue _fun0007 }
 41:
            var8 = _closure1_slot13;
            var6 = var8.getGuild;
            var5 = var7.getGuildId;
            var5 = var5.bind(var7)();
            var6 = var6.bind(var8)(var5);
            if(!(var1 != var6)) { _fun0007_ip = 129; continue _fun0007 }
 69:
            var1 = var3.has;
            var1 = var1.bind(var3)(var4);
            var5 = _closure1_slot23;
            var2 = undefined;
            var2 = var5.bind(var2)(var7, var6);
            var1 = var1 !== var2;
            if(!var1) { _fun0007_ip = 127; continue _fun0007 }
 98:
            if(var2) { _fun0007_ip = 115; continue _fun0007 }
 101:
            var2 = var3.delete;
            var2 = var2.bind(var3)(var4);
            var1 = true;
            _fun0007_ip = 127; continue _fun0007;
 115:
            var2 = var3.add;
            var2 = var2.bind(var3)(var4);
            var1 = true;
 127:
            return var1;
 129:
            var1 = false;
            return var1;
 133:
            var1 = false;
            return var1;
 137:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot24 = var1;
    var12 = function handleInitialize() {
        var2 = {};
        _closure1_slot17 = var2;
        var2 = _closure1_slot18;
        var1 = var2.clear;
        var1 = var1.bind(var2)();
        var1 = undefined;
        return var1;
    };
    var _closure1_slot25 = var12;
    var11 = function handleGuildUpdate(arg1) {
        var1 = arg1;
        var1 = var1.guild;
        var2 = _closure1_slot17;
        var1 = var1.id;
        var1 = delete var2[var1];
        var1 = undefined;
        return var1;
    };
    var10 = function handleGuildRoleUpdate(arg1) {
        var1 = arg1;
        var2 = var1.guildId;
        var1 = _closure1_slot17;
        var1 = delete var1[var2];
        var1 = undefined;
        return var1;
    };
    var9 = function handleChannelUpdate(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var1 = arg1;
            var2 = var1.channel;
            var3 = var2.guild_id;
            var1 = null;
            var1 = var1 != var3;
            if(!var1) { _fun0008_ip = 47; continue _fun0008 }
 22:
            var5 = _closure1_slot24;
            var4 = var2.guild_id;
            var3 = var2.id;
            var2 = undefined;
            var1 = var5.bind(var2)(var4, var3);
 47:
            return var1;
        }
    };
    var2 = global;
    var14 = var2.Object;
    var13 = var14.defineProperty;
    var8 = {};
    var1 = true;
    var8['value'] = var1;
    var1 = '__esModule';
    var1 = var13.bind(var14)(var3, var1, var8);
    var1 = 0;
    var8 = var6[var1];
    var1 = undefined;
    var8 = var7.bind(var1)(var8);
    var _closure1_slot2 = var8;
    var8 = 1;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot3 = var8;
    var8 = 2;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot4 = var8;
    var8 = 3;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot5 = var8;
    var8 = 4;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot6 = var8;
    var8 = 5;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot7 = var8;
    var8 = 6;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var8 = var8.THREAD_CHANNEL_TYPES;
    var _closure1_slot8 = var8;
    var8 = 7;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var8 = var8.hasPermission;
    var _closure1_slot9 = var8;
    var8 = 8;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot10 = var8;
    var8 = 9;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot11 = var8;
    var8 = 10;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot12 = var8;
    var8 = 11;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot13 = var8;
    var8 = 12;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot14 = var8;
    var8 = 13;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var13 = var8.Permissions;
    var _closure1_slot15 = var13;
    var8 = var8.GuildFeatures;
    var _closure1_slot16 = var8;
    var8 = {};
    var _closure1_slot17 = var8;
    var2 = var2.Set;
    var8 = var2.prototype;
    var8 = Object.create(var8, {constructor: {value: var2}});
    var18 = var8;
    var2 = new var18[var2](var17);
    var2 = var2 instanceof Object ? var2 : var8;
    var _closure1_slot18 = var2;
    var2 = 20;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function GatedChannelStore() {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot2;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot5;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot4;
                var1 = _closure1_slot19;
                var1 = var1.bind(var3)();
                if(var1) { _fun0009_ip = 69; continue _fun0009 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0009_ip = 105; continue _fun0009;
 69:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
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
            var11 = _closure1_slot13;
            var10 = _closure1_slot12;
            var9 = _closure1_slot10;
            var8 = _closure1_slot7;
            var12 = var7;
            var2 = var12[var6](var11, var10, var9, var8, var7);
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 19;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var5 = var2.GuildRoleSubscriptionUsersExperiment;
            var4 = var5.subscribe;
            var3 = {};
            var2 = '1';
            var3['location'] = var2;
            var2 = function() {
                var2 = _closure1_slot25;
                var1 = undefined;
                var2 = var2.bind(var1)();
                return var1;
            };
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(4);
        var1[0] = var5;
        var5 = {};
        var7 = 'isChannelGated';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                var3 = arg1;
                var1 = null;
                if(!(var1 != var3)) { _fun0010_ip = 291; continue _fun0010 }
 12:
                var4 = _closure1_slot17;
                var4 = var4[var3];
                if(!(var1 == var4)) { _fun0010_ip = 269; continue _fun0010 }
 30:
                var6 = _closure1_slot13;
                var5 = var6.getGuild;
                var13 = var5.bind(var6)(var3);
                if(!(var1 != var13)) { _fun0010_ip = 261; continue _fun0010 }
 51:
                var5 = _closure1_slot17;
                var6 = global;
                var6 = var6.Set;
                var7 = var6.prototype;
                var7 = Object.create(var7, {constructor: {value: var6}});
                var18 = var7;
                var6 = new var18[var6](var17);
                var12 = var6 instanceof Object ? var6 : var7;
                var5[var3] = var12;
                var7 = var13.features;
                var6 = var7.has;
                var5 = _closure1_slot16;
                var5 = var5.ROLE_SUBSCRIPTIONS_ENABLED;
                var5 = var6.bind(var7)(var5);
                if(!var5) { _fun0010_ip = 261; continue _fun0010 }
 119:
                var6 = _closure1_slot0;
                var7 = _closure1_slot1;
                var5 = 16;
                var5 = var7[var5];
                var11 = undefined;
                var6 = var6.bind(var11)(var5);
                var5 = var6.isGuildEligibleForRoleSubscriptions;
                var5 = var5.bind(var6)(var3);
                if(var5) { _fun0010_ip = 189; continue _fun0010 }
 155:
                var6 = _closure1_slot0;
                var7 = _closure1_slot1;
                var5 = 17;
                var5 = var7[var5];
                var6 = var6.bind(var11)(var5);
                var5 = var6.isExpeditedMonetizationOnboardingGuild;
                var5 = var5.bind(var6)(var13);
                if(!var5) { _fun0010_ip = 261; continue _fun0010 }
 189:
                var6 = _closure1_slot10;
                var5 = var6.getMutableGuildChannelsForGuild;
                var10 = var5.bind(var6)(var3);
                var8 = var10;
                for(var5 in var8)
 215:
                {
 224:
                    var14 = var5;
                    var14 = var10[var14];
                    var15 = _closure1_slot23;
                    var15 = var15.bind(var11)(var14, var13);
                    if(!var15) { _fun0010_ip = 215; continue _fun0010 }
 244:
                    var15 = var12.add;
                    var14 = var14.id;
                    var14 = var15.bind(var12)(var14);
                    _fun0010_ip = 215; continue _fun0010;
                }
 261:
                var2 = _closure1_slot17;
                var4 = var2[var3];
 269:
                var1 = var1 != var4;
                if(!var1) { _fun0010_ip = 289; continue _fun0010 }
 276:
                var3 = var4.has;
                var2 = arg2;
                var1 = var3.bind(var4)(var2);
 289:
                return var1;
 291:
                var1 = false;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'isChannelGatedAndVisible';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                var5 = arg1;
                var4 = this;
                var1 = null;
                var1 = var1 != var5;
                if(!var1) { _fun0011_ip = 56; continue _fun0011 }
 15:
                var3 = var4.isChannelGated;
                var2 = arg2;
                var2 = var3.bind(var4)(var5, var2);
                if(!var2) { _fun0011_ip = 53; continue _fun0011 }
 33:
                var4 = _closure1_slot18;
                var3 = var4.has;
                var3 = var3.bind(var4)(var5);
                var2 = !var3;
 53:
                var1 = var2;
 56:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'isChannelOrThreadParentGated';
        var5['key'] = var7;
        var6 = function value(arg1, arg2) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                var5 = arg1;
                var7 = arg2;
                var4 = this;
                var1 = null;
                if(!(var1 != var5)) { _fun0012_ip = 128; continue _fun0012 }
 15:
                var2 = var4.isChannelGated;
                var2 = var2.bind(var4)(var5, var7);
                if(var2) { _fun0012_ip = 124; continue _fun0012 }
 30:
                var3 = _closure1_slot10;
                var2 = var3.getChannel;
                var2 = var2.bind(var3)(var7);
                var3 = var1 == var2;
                if(var3) { _fun0012_ip = 64; continue _fun0012 }
 54:
                var7 = var2.parent_id;
                var3 = var1 == var7;
 64:
                if(var3) { _fun0012_ip = 98; continue _fun0012 }
 67:
                var7 = _closure1_slot8;
                var6 = var7.has;
                var8 = var1 == var2;
                var1 = undefined;
                if(var8) { _fun0012_ip = 90; continue _fun0012 }
 85:
                var1 = var2.type;
 90:
                var1 = var6.bind(var7)(var1);
                var3 = !var1;
 98:
                var1 = !var3;
                if(var3) { _fun0012_ip = 122; continue _fun0012 }
 104:
                var3 = var4.isChannelOrThreadParentGated;
                var2 = var2.parent_id;
                var1 = var3.bind(var4)(var5, var2);
 122:
                return var1;
 124:
                var1 = true;
                return var1;
 128:
                var1 = false;
                return var1;
            }
        };
        var5['value'] = var6;
        var1[3] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'GatedChannelStore';
    var8['displayName'] = var2;
    var2 = 21;
    var2 = var6[var2];
    var17 = var7.bind(var1)(var2);
    var2 = {};
    var2['CONNECTION_OPEN'] = var12;
    var2['OVERLAY_INITIALIZE'] = var12;
    var2['CACHE_LOADED_LAZY'] = var12;
    var2['GUILD_CREATE'] = var11;
    var2['GUILD_UPDATE'] = var11;
    var2['GUILD_DELETE'] = var11;
    var2['GUILD_ROLE_CREATE'] = var10;
    var2['GUILD_ROLE_UPDATE'] = var10;
    var2['GUILD_ROLE_DELETE'] = var10;
    var2['IMPERSONATE_UPDATE'] = var10;
    var2['IMPERSONATE_STOP'] = var10;
    var2['CHANNEL_CREATE'] = var9;
    var2['CHANNEL_DELETE'] = var9;
    var9 = function handleChannelUpdates(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
            var1 = arg1;
            var2 = var1.channels;
            var1 = _closure1_slot20;
            var8 = undefined;
            var7 = var1.bind(var8)(var2);
            var3 = var7.bind(var8)();
            var2 = var3.done;
            var5 = null;
            var4 = var3;
            var3 = false;
            var1 = false;
            if(var2) { _fun0013_ip = 110; continue _fun0013 }
 44:
            var2 = var4.value;
            var11 = var2.guild_id;
            var10 = var3;
            if(!(var5 != var11)) { _fun0013_ip = 89; continue _fun0013 }
 61:
            var12 = _closure1_slot24;
            var11 = var2.guild_id;
            var2 = var2.id;
            var2 = var12.bind(var8)(var11, var2);
            if(!var2) { _fun0013_ip = 86; continue _fun0013 }
 84:
            var3 = true;
 86:
            var10 = var3;
 89:
            var11 = var7.bind(var8)();
            var2 = var11.done;
            var3 = var10;
            var4 = var11;
            var1 = var3;
            if(!var2) { _fun0013_ip = 44; continue _fun0013 }
 110:
            return var1;
        }
    };
    var2['CHANNEL_UPDATES'] = var9;
    var9 = function handleRoleSubscriptionsRestrictionsUpdate(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
            var1 = arg1;
            var4 = var1.guildId;
            var6 = var1.restrictions;
            var5 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 18;
            var2 = var2[var1];
            var1 = undefined;
            var5 = var5.bind(var1)(var2);
            var2 = var5.isRestrictedFromShowingGuildPurchaseEntryPoints;
            var2 = var2.bind(var5)(var6);
            var3 = _closure1_slot18;
            if(var2) { _fun0014_ip = 69; continue _fun0014 }
 57:
            var2 = var3.delete;
            var2 = var2.bind(var3)(var4);
            _fun0014_ip = 79; continue _fun0014;
 69:
            var2 = var3.add;
            var2 = var2.bind(var3)(var4);
 79:
            return var1;
        }
    };
    var2['GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS'] = var9;
    var4 = function handleRoleSubscriptionsRestrictionsFetchFailure(arg1) {
        var1 = arg1;
        var3 = var1.guildId;
        var2 = _closure1_slot18;
        var1 = var2.add;
        var1 = var1.bind(var2)(var3);
        var1 = undefined;
        return var1;
    };
    var2['GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var18 = var4;
    var16 = var2;
    var2 = new var18[var8](var17, var16, var15);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 22;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/channel/GatedChannelStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();