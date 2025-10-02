// app/modules/channel/GatedChannelStore.tsx
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
            _closure1_slot19 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot19 = var1;
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
            var9 = _closure1_slot21;
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
            var7 = _closure1_slot21;
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
    var _closure1_slot20 = var1;
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
    var _closure1_slot21 = var1;
    var1 = function isSubscriptionGated(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
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
            if(var4) { _fun0005_ip = 39; continue _fun0005 }
case 40:
            var4 = !var2;
            var2 = !var4;
            if(!var4) { _fun0005_ip = 41; continue _fun0005 }
case 42:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var4 = var4[var7];
            var7 = var5.bind(var3)(var4);
            var4 = var7.isSubscriptionRoleAvailableForPurchase;
            var5 = null;
            var9 = var5 != var6;
            var3 = undefined;
            if(!var9) { _fun0005_ip = 43; continue _fun0005 }
case 44:
            var3 = var6;
case 43:
            var3 = var4.bind(var7)(var3);
            var4 = !var3;
            var3 = !var4;
            if(!var4) { _fun0005_ip = 45; continue _fun0005 }
case 46:
            var7 = var5 == var6;
            var4 = false;
            if(var7) { _fun0005_ip = 47; continue _fun0005 }
case 48:
            var9 = _closure1_slot14;
            var7 = var9.getCurrentUser;
            var7 = var7.bind(var9)();
            var9 = var5 == var7;
            var4 = false;
            if(var9) { _fun0005_ip = 47; continue _fun0005 }
case 49:
            var9 = _closure1_slot11;
            var8 = var9.getMember;
            var7 = var7.id;
            var7 = var8.bind(var9)(var10, var7);
            var5 = var5 != var7;
            if(!var5) { _fun0005_ip = 50; continue _fun0005 }
case 51:
            var8 = var7.roles;
            var7 = var8.includes;
            var6 = var6.id;
            var5 = var7.bind(var8)(var6);
case 50:
            var4 = var5;
case 47:
            var4 = !var4;
            var3 = !var4;
case 45:
            var2 = var3;
case 41:
            var1 = var2;
case 39:
            return var1;
        }
    };
    var _closure1_slot22 = var1;
    var1 = function isChannelSubscriptionGatedInGuild(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var10 = arg1;
            var8 = arg2;
            var3 = var8.features;
            var2 = var3.has;
            var1 = _closure1_slot16;
            var1 = var1.CREATOR_MONETIZABLE;
            var1 = var2.bind(var3)(var1);
            if(var1) { _fun0006_ip = 52; continue _fun0006 }
case 53:
            var3 = var8.features;
            var2 = var3.has;
            var1 = _closure1_slot16;
            var1 = var1.CREATOR_MONETIZABLE_PROVISIONAL;
            var1 = var2.bind(var3)(var1);
            if(var1) { _fun0006_ip = 52; continue _fun0006 }
case 34:
            var1 = false;
            return var1;
case 52:
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
            if(!var1) { _fun0006_ip = 22; continue _fun0006 }
case 54:
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
            if(!var1) { _fun0006_ip = 55; continue _fun0006 }
case 56:
            var1 = var10.permissionOverwrites;
            var11 = var1[var9];
            var9 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var5];
            var9 = var9.bind(var4)(var1);
            var1 = var9.isChannelAccessGrantedBy;
            var1 = var1.bind(var9)(var10, var11);
            if(var1) { _fun0006_ip = 57; continue _fun0006 }
case 55:
            var2 = var2 + 1;
            var1 = var3.length;
            if(var2 < var1) { _fun0006_ip = 54; continue _fun0006 }
case 22:
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
            if(!var2) { _fun0006_ip = 58; continue _fun0006 }
case 59:
            if(var1) { _fun0006_ip = 58; continue _fun0006 }
case 10:
            var2 = _closure1_slot20;
            var9 = _closure1_slot12;
            var3 = var9.getSortedRoles;
            var1 = var8.id;
            var1 = var3.bind(var9)(var1);
            var3 = var2.bind(var4)(var1);
            var2 = var3.bind(var4)();
            var1 = var2.done;
            if(var1) { _fun0006_ip = 58; continue _fun0006 }
case 60:
            var10 = var2.value;
            var9 = _closure1_slot22;
            var1 = {};
            var11 = var8.id;
            var1['guildId'] = var11;
            var1['role'] = var10;
            var1['isPreviewingRoles'] = var6;
            var1 = var9.bind(var4)(var1);
            if(!var1) { _fun0006_ip = 61; continue _fun0006 }
case 62:
            var9 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var5];
            var9 = var9.bind(var4)(var1);
            var1 = var9.hasViewChannelPermission;
            var1 = var1.bind(var9)(var10);
            if(var1) { _fun0006_ip = 63; continue _fun0006 }
case 61:
            var9 = var3.bind(var4)();
            var1 = var9.done;
            var2 = var9;
            if(var1) { _fun0006_ip = 58; continue _fun0006 }
case 64:
            _fun0006_ip = 60; continue _fun0006;
case 63:
            var1 = true;
            return var1;
case 58:
            var1 = false;
            return var1;
case 57:
            var1 = true;
            return var1;
        }
    };
    var _closure1_slot23 = var1;
    var1 = function computeForChannel(arg1, arg2) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var4 = arg2;
            var3 = _closure1_slot17;
            var1 = arg1;
            var3 = var3[var1];
            var1 = null;
            if(!(var1 != var3)) { _fun0007_ip = 65; continue _fun0007 }
case 35:
            var6 = _closure1_slot10;
            var5 = var6.getChannel;
            var7 = var5.bind(var6)(var4);
            if(!(var1 != var7)) { _fun0007_ip = 66; continue _fun0007 }
case 67:
            var8 = _closure1_slot13;
            var6 = var8.getGuild;
            var5 = var7.getGuildId;
            var5 = var5.bind(var7)();
            var6 = var6.bind(var8)(var5);
            if(!(var1 != var6)) { _fun0007_ip = 68; continue _fun0007 }
case 69:
            var1 = var3.has;
            var1 = var1.bind(var3)(var4);
            var5 = _closure1_slot23;
            var2 = undefined;
            var2 = var5.bind(var2)(var7, var6);
            var1 = var1 !== var2;
            if(!var1) { _fun0007_ip = 70; continue _fun0007 }
case 71:
            if(var2) { _fun0007_ip = 72; continue _fun0007 }
case 73:
            var2 = var3.delete;
            var2 = var2.bind(var3)(var4);
            var1 = true;
            _fun0007_ip = 70; continue _fun0007;
case 72:
            var2 = var3.add;
            var2 = var2.bind(var3)(var4);
            var1 = true;
case 70:
            return var1;
case 68:
            var1 = false;
            return var1;
case 66:
            var1 = false;
            return var1;
case 65:
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
case 0:
            var1 = arg1;
            var2 = var1.channel;
            var3 = var2.guild_id;
            var1 = null;
            var1 = var1 != var3;
            if(!var1) { _fun0008_ip = 74; continue _fun0008 }
case 75:
            var5 = _closure1_slot24;
            var4 = var2.guild_id;
            var3 = var2.id;
            var2 = undefined;
            var1 = var5.bind(var2)(var4, var3);
case 74:
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
                var1 = _closure1_slot19;
                var1 = var1.bind(var3)();
                if(var1) { _fun0009_ip = 69; continue _fun0009 }
case 76:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0009_ip = 77; continue _fun0009;
case 69:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 77:
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
case 0:
                var3 = arg1;
                var1 = null;
                if(!(var1 != var3)) { _fun0010_ip = 78; continue _fun0010 }
case 79:
                var4 = _closure1_slot17;
                var4 = var4[var3];
                if(!(var1 == var4)) { _fun0010_ip = 80; continue _fun0010 }
case 7:
                var6 = _closure1_slot13;
                var5 = var6.getGuild;
                var13 = var5.bind(var6)(var3);
                if(!(var1 != var13)) { _fun0010_ip = 81; continue _fun0010 }
case 76:
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
                if(!var5) { _fun0010_ip = 81; continue _fun0010 }
case 82:
                var6 = _closure1_slot0;
                var7 = _closure1_slot1;
                var5 = 16;
                var5 = var7[var5];
                var11 = undefined;
                var6 = var6.bind(var11)(var5);
                var5 = var6.isGuildEligibleForRoleSubscriptions;
                var5 = var5.bind(var6)(var3);
                if(var5) { _fun0010_ip = 83; continue _fun0010 }
case 84:
                var6 = _closure1_slot0;
                var7 = _closure1_slot1;
                var5 = 17;
                var5 = var7[var5];
                var6 = var6.bind(var11)(var5);
                var5 = var6.isExpeditedMonetizationOnboardingGuild;
                var5 = var5.bind(var6)(var13);
                if(!var5) { _fun0010_ip = 81; continue _fun0010 }
case 83:
                var6 = _closure1_slot10;
                var5 = var6.getMutableGuildChannelsForGuild;
                var10 = var5.bind(var6)(var3);
                var8 = var10;
                for(var5 in var8)
case 85:
                {
case 86:
                    var14 = var5;
                    var14 = var10[var14];
                    var15 = _closure1_slot23;
                    var15 = var15.bind(var11)(var14, var13);
                    if(!var15) { _fun0010_ip = 85; continue _fun0010 }
case 87:
                    var15 = var12.add;
                    var14 = var14.id;
                    var14 = var15.bind(var12)(var14);
                    _fun0010_ip = 85; continue _fun0010;
                }
case 81:
                var2 = _closure1_slot17;
                var4 = var2[var3];
case 80:
                var1 = var1 != var4;
                if(!var1) { _fun0010_ip = 29; continue _fun0010 }
case 88:
                var3 = var4.has;
                var2 = arg2;
                var1 = var3.bind(var4)(var2);
case 29:
                return var1;
case 78:
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
case 0:
                var5 = arg1;
                var4 = this;
                var1 = null;
                var1 = var1 != var5;
                if(!var1) { _fun0011_ip = 32; continue _fun0011 }
case 89:
                var3 = var4.isChannelGated;
                var2 = arg2;
                var2 = var3.bind(var4)(var5, var2);
                if(!var2) { _fun0011_ip = 90; continue _fun0011 }
case 37:
                var4 = _closure1_slot18;
                var3 = var4.has;
                var3 = var3.bind(var4)(var5);
                var2 = !var3;
case 90:
                var1 = var2;
case 32:
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
case 0:
                var5 = arg1;
                var7 = arg2;
                var4 = this;
                var1 = null;
                if(!(var1 != var5)) { _fun0012_ip = 91; continue _fun0012 }
case 89:
                var2 = var4.isChannelGated;
                var2 = var2.bind(var4)(var5, var7);
                if(var2) { _fun0012_ip = 92; continue _fun0012 }
case 7:
                var3 = _closure1_slot10;
                var2 = var3.getChannel;
                var2 = var2.bind(var3)(var7);
                var3 = var1 == var2;
                if(var3) { _fun0012_ip = 93; continue _fun0012 }
case 94:
                var7 = var2.parent_id;
                var3 = var1 == var7;
case 93:
                if(var3) { _fun0012_ip = 71; continue _fun0012 }
case 34:
                var7 = _closure1_slot8;
                var6 = var7.has;
                var8 = var1 == var2;
                var1 = undefined;
                if(var8) { _fun0012_ip = 95; continue _fun0012 }
case 96:
                var1 = var2.type;
case 95:
                var1 = var6.bind(var7)(var1);
                var3 = !var1;
case 71:
                var1 = !var3;
                if(var3) { _fun0012_ip = 97; continue _fun0012 }
case 98:
                var3 = var4.isChannelOrThreadParentGated;
                var2 = var2.parent_id;
                var1 = var3.bind(var4)(var5, var2);
case 97:
                return var1;
case 92:
                var1 = true;
                return var1;
case 91:
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
case 0:
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
            if(var2) { _fun0013_ip = 17; continue _fun0013 }
case 99:
            var2 = var4.value;
            var11 = var2.guild_id;
            var10 = var3;
            if(!(var5 != var11)) { _fun0013_ip = 100; continue _fun0013 }
case 11:
            var12 = _closure1_slot24;
            var11 = var2.guild_id;
            var2 = var2.id;
            var2 = var12.bind(var8)(var11, var2);
            if(!var2) { _fun0013_ip = 13; continue _fun0013 }
case 101:
            var3 = true;
case 13:
            var10 = var3;
case 100:
            var11 = var7.bind(var8)();
            var2 = var11.done;
            var3 = var10;
            var4 = var11;
            var1 = var3;
            if(!var2) { _fun0013_ip = 99; continue _fun0013 }
case 17:
            return var1;
        }
    };
    var2['CHANNEL_UPDATES'] = var9;
    var9 = function handleRoleSubscriptionsRestrictionsUpdate(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
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
case 102:
            var2 = var3.delete;
            var2 = var2.bind(var3)(var4);
            _fun0014_ip = 103; continue _fun0014;
case 69:
            var2 = var3.add;
            var2 = var2.bind(var3)(var4);
case 103:
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