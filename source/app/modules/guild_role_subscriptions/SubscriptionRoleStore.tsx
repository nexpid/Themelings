// app/modules/guild_role_subscriptions/SubscriptionRoleStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
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
            _closure1_slot21 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot21 = var1;
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
            var9 = _closure1_slot23;
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
            var7 = _closure1_slot23;
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
    var _closure1_slot22 = var1;
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
    var _closure1_slot23 = var1;
    var1 = function computeRolesForGuild(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var4 = arg1;
            var3 = _closure1_slot12;
            var2 = var3.getCurrentUser;
            var9 = var2.bind(var3)();
            var3 = _closure1_slot11;
            var2 = var3.getGuild;
            var2 = var2.bind(var3)(var4);
            var8 = null;
            if(!(var8 != var2)) { _fun0005_ip = 563; continue _fun0005 }
 42:
            if(!(var8 != var9)) { _fun0005_ip = 563; continue _fun0005 }
 49:
            var5 = global;
            var3 = var5.Set;
            var6 = var3.prototype;
            var6 = Object.create(var6, {constructor: {value: var3}});
            var18 = var6;
            var3 = new var18[var3](var17);
            var7 = var3 instanceof Object ? var3 : var6;
            var3 = var5.Set;
            var6 = var3.prototype;
            var6 = Object.create(var6, {constructor: {value: var3}});
            var18 = var6;
            var3 = new var18[var3](var17);
            var3 = var3 instanceof Object ? var3 : var6;
            var6 = var5.Set;
            var10 = var6.prototype;
            var10 = Object.create(var10, {constructor: {value: var6}});
            var18 = var10;
            var6 = new var18[var6](var17);
            var6 = var6 instanceof Object ? var6 : var10;
            var13 = _closure1_slot19;
            var11 = var13.set;
            var10 = _closure1_slot7;
            var12 = undefined;
            var10 = var10.bind(var12)(var2, var9);
            var10 = var11.bind(var13)(var4, var10);
            var13 = var2.features;
            var11 = var13.has;
            var10 = _closure1_slot14;
            var10 = var10.ROLE_SUBSCRIPTIONS_ENABLED;
            var10 = var11.bind(var13)(var10);
            if(!var10) { _fun0005_ip = 514; continue _fun0005 }
 188:
            var11 = _closure1_slot9;
            var10 = var11.getMember;
            var9 = var9.id;
            var10 = var10.bind(var11)(var4, var9);
            var9 = var5.Set;
            var11 = var8 == var10;
            var5 = undefined;
            if(var11) { _fun0005_ip = 230; continue _fun0005 }
 224:
            var5 = var10.roles;
 230:
            if(!(var8 == var5)) { _fun0005_ip = 238; continue _fun0005 }
 234:
            var5 = new Array(0);
 238:
            var8 = var9.prototype;
            var8 = Object.create(var8, {constructor: {value: var9}});
            var18 = var8;
            var17 = var5;
            var5 = new var18[var9](var17, var16);
            var11 = var5 instanceof Object ? var5 : var8;
            var5 = _closure1_slot22;
            var9 = _closure1_slot10;
            var8 = var9.getSortedRoles;
            var2 = var2.id;
            var2 = var8.bind(var9)(var2);
            var10 = var5.bind(var12)(var2);
            var5 = var10.bind(var12)();
            var2 = var5.done;
            var9 = true;
            var8 = 12;
            if(var2) { _fun0005_ip = 514; continue _fun0005 }
 310:
            var15 = var5.value;
            var13 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var8];
            var13 = var13.bind(var12)(var2);
            var2 = var13.isSubscriptionRole;
            var2 = var2.bind(var13)(var15);
            if(!var2) { _fun0005_ip = 440; continue _fun0005 }
 346:
            var13 = var7.add;
            var2 = var15.id;
            var2 = var13.bind(var7)(var2);
            var13 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var8];
            var13 = var13.bind(var12)(var2);
            var2 = var13.isSubscriptionRoleAvailableForPurchase;
            var2 = var2.bind(var13)(var15);
            if(!var2) { _fun0005_ip = 440; continue _fun0005 }
 392:
            var13 = var3.add;
            var2 = var15.id;
            var2 = var13.bind(var3)(var2);
            var13 = var11.has;
            var2 = var15.id;
            var2 = var13.bind(var11)(var2);
            if(!var2) { _fun0005_ip = 440; continue _fun0005 }
 425:
            var13 = var6.add;
            var2 = var15.id;
            var2 = var13.bind(var6)(var2);
 440:
            var13 = var11.has;
            var2 = var15.id;
            var2 = var13.bind(var11)(var2);
            if(!var2) { _fun0005_ip = 478; continue _fun0005 }
 458:
            var14 = _closure1_slot8;
            var13 = _closure1_slot13;
            var13 = var13.ADMINISTRATOR;
            var2 = var14.bind(var12)(var15, var13);
 478:
            if(!var2) { _fun0005_ip = 496; continue _fun0005 }
 481:
            var13 = _closure1_slot19;
            var2 = var13.set;
            var2 = var2.bind(var13)(var4, var9);
 496:
            var13 = var10.bind(var12)();
            var2 = var13.done;
            var5 = var13;
            if(!var2) { _fun0005_ip = 310; continue _fun0005 }
 514:
            var5 = _closure1_slot16;
            var2 = var5.set;
            var2 = var2.bind(var5)(var4, var7);
            var5 = _closure1_slot18;
            var2 = var5.set;
            var2 = var2.bind(var5)(var4, var6);
            var2 = _closure1_slot17;
            var1 = var2.set;
            var1 = var1.bind(var2)(var4, var3);
            var1 = true;
            return var1;
 563:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot24 = var1;
    var11 = function deleteEverything() {
        var3 = _closure1_slot16;
        var1 = var3.clear;
        var1 = var1.bind(var3)();
        var3 = _closure1_slot18;
        var1 = var3.clear;
        var1 = var1.bind(var3)();
        var3 = _closure1_slot17;
        var1 = var3.clear;
        var1 = var1.bind(var3)();
        var3 = _closure1_slot19;
        var1 = var3.clear;
        var1 = var1.bind(var3)();
        var1 = null;
        _closure1_slot20 = var1;
        var1 = undefined;
        return var1;
    };
    var10 = function handleGuildUpdate(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var1 = arg1;
            var1 = var1.guild;
            var4 = var1.id;
            var1 = _closure1_slot20;
            var3 = null;
            if(!(var3 != var1)) { _fun0006_ip = 224; continue _fun0006 }
 29:
            var5 = _closure1_slot11;
            var1 = var5.getGuild;
            var1 = var1.bind(var5)(var4);
            if(!(var3 != var1)) { _fun0006_ip = 220; continue _fun0006 }
 50:
            var5 = var1.features;
            var3 = var5.has;
            var1 = _closure1_slot14;
            var1 = var1.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE;
            var1 = var3.bind(var5)(var1);
            if(!var1) { _fun0006_ip = 146; continue _fun0006 }
 79:
            var5 = _closure1_slot20;
            var3 = var5.has;
            var3 = var3.bind(var5)(var4);
            if(var3) { _fun0006_ip = 146; continue _fun0006 }
 96:
            var3 = global;
            var6 = var3.Set;
            var7 = _closure1_slot20;
            var5 = var6.prototype;
            var5 = Object.create(var5, {constructor: {value: var6}});
            var8 = var5;
            var3 = new var8[var6](var7, var6);
            var3 = var3 instanceof Object ? var3 : var5;
            var5 = var3.add;
            var5 = var5.bind(var3)(var4);
            _closure1_slot20 = var3;
            var3 = true;
            return var3;
 146:
            if(var1) { _fun0006_ip = 216; continue _fun0006 }
 149:
            var3 = _closure1_slot20;
            var1 = var3.has;
            var1 = var1.bind(var3)(var4);
            if(!var1) { _fun0006_ip = 216; continue _fun0006 }
 166:
            var1 = global;
            var5 = var1.Set;
            var7 = _closure1_slot20;
            var3 = var5.prototype;
            var3 = Object.create(var3, {constructor: {value: var5}});
            var8 = var3;
            var1 = new var8[var5](var7, var6);
            var1 = var1 instanceof Object ? var1 : var3;
            var3 = var1.delete;
            var3 = var3.bind(var1)(var4);
            _closure1_slot20 = var1;
            var1 = true;
            return var1;
 216:
            var1 = false;
            return var1;
 220:
            var1 = false;
            return var1;
 224:
            var1 = false;
            return var1;
        }
    };
    var9 = function handleRoleUpdate(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var1 = arg1;
            var4 = var1.guildId;
            var3 = _closure1_slot16;
            var1 = var3.has;
            var1 = var1.bind(var3)(var4);
            var3 = !var1;
            var1 = !var3;
            if(var3) { _fun0007_ip = 45; continue _fun0007 }
 34:
            var3 = _closure1_slot24;
            var2 = undefined;
            var1 = var3.bind(var2)(var4);
 45:
            return var1;
        }
    };
    var2 = global;
    var13 = var2.Object;
    var12 = var13.defineProperty;
    var8 = {};
    var1 = true;
    var8['value'] = var1;
    var1 = '__esModule';
    var1 = var12.bind(var13)(var3, var1, var8);
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
    var8 = var5.bind(var1)(var8);
    var8 = var8.isGuildOwner;
    var _closure1_slot7 = var8;
    var8 = 6;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var8 = var8.hasPermission;
    var _closure1_slot8 = var8;
    var8 = 7;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
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
    var8 = var5.bind(var1)(var8);
    var12 = var8.Permissions;
    var _closure1_slot13 = var12;
    var8 = var8.GuildFeatures;
    var _closure1_slot14 = var8;
    var8 = var2.Set;
    var12 = var8.prototype;
    var12 = Object.create(var12, {constructor: {value: var8}});
    var17 = var12;
    var8 = new var17[var8](var16);
    var8 = var8 instanceof Object ? var8 : var12;
    var _closure1_slot15 = var8;
    var8 = var2.Map;
    var12 = var8.prototype;
    var12 = Object.create(var12, {constructor: {value: var8}});
    var17 = var12;
    var8 = new var17[var8](var16);
    var8 = var8 instanceof Object ? var8 : var12;
    var _closure1_slot16 = var8;
    var8 = var2.Map;
    var12 = var8.prototype;
    var12 = Object.create(var12, {constructor: {value: var8}});
    var17 = var12;
    var8 = new var17[var8](var16);
    var8 = var8 instanceof Object ? var8 : var12;
    var _closure1_slot17 = var8;
    var8 = var2.Map;
    var12 = var8.prototype;
    var12 = Object.create(var12, {constructor: {value: var8}});
    var17 = var12;
    var8 = new var17[var8](var16);
    var8 = var8 instanceof Object ? var8 : var12;
    var _closure1_slot18 = var8;
    var2 = var2.Map;
    var8 = var2.prototype;
    var8 = Object.create(var8, {constructor: {value: var2}});
    var17 = var8;
    var2 = new var17[var2](var16);
    var2 = var2 instanceof Object ? var2 : var8;
    var _closure1_slot19 = var2;
    var2 = null;
    var _closure1_slot20 = var2;
    var2 = 13;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function SubscriptionRoleStore() {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
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
                var1 = _closure1_slot21;
                var1 = var1.bind(var3)();
                if(var1) { _fun0008_ip = 69; continue _fun0008 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0008_ip = 105; continue _fun0008;
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
            var6 = this;
            var5 = var6.waitFor;
            var10 = _closure1_slot11;
            var9 = _closure1_slot10;
            var8 = _closure1_slot12;
            var7 = _closure1_slot9;
            var11 = var6;
            var1 = var11[var5](var10, var9, var8, var7, var6);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(7);
        var1[0] = var5;
        var5 = {};
        var7 = 'getGuildIdsWithPurchasableRoles';
        var5['key'] = var7;
        var7 = function value() {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                var2 = _closure1_slot20;
                var1 = null;
                if(!(var1 != var2)) { _fun0009_ip = 22; continue _fun0009 }
 13:
                var1 = _closure1_slot20;
                _fun0009_ip = 158; continue _fun0009;
 22:
                var4 = _closure1_slot11;
                var2 = var4.getGuildsArray;
                var5 = var2.bind(var4)();
                var2 = global;
                var2 = var2.Set;
                var4 = var2.prototype;
                var4 = Object.create(var4, {constructor: {value: var2}});
                var12 = var4;
                var2 = new var12[var2](var11);
                var2 = var2 instanceof Object ? var2 : var4;
                var4 = _closure1_slot22;
                var7 = undefined;
                var6 = var4.bind(var7)(var5);
                var5 = var6.bind(var7)();
                var4 = var5.done;
                if(var4) { _fun0009_ip = 151; continue _fun0009 }
 87:
                var4 = var5.value;
                var10 = var4.features;
                var9 = var10.has;
                var8 = _closure1_slot14;
                var8 = var8.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE;
                var8 = var9.bind(var10)(var8);
                if(!var8) { _fun0009_ip = 136; continue _fun0009 }
 121:
                var8 = var2.add;
                var4 = var4.id;
                var4 = var8.bind(var2)(var4);
 136:
                var8 = var6.bind(var7)();
                var4 = var8.done;
                var5 = var8;
                if(!var4) { _fun0009_ip = 87; continue _fun0009 }
 151:
                _closure1_slot20 = var2;
                var1 = var2;
 158:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'buildRoles';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                var3 = arg1;
                var4 = _closure1_slot16;
                var2 = var4.has;
                var2 = var2.bind(var4)(var3);
                if(var2) { _fun0010_ip = 34; continue _fun0010 }
 23:
                var2 = _closure1_slot24;
                var1 = undefined;
                var1 = var2.bind(var1)(var3);
 34:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getSubscriptionRoles';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                var4 = arg1;
                var2 = this;
                var1 = var2.buildRoles;
                var1 = var1.bind(var2)(var4);
                var3 = _closure1_slot16;
                var1 = var3.get;
                var1 = var1.bind(var3)(var4);
                var3 = null;
                if(!(var3 == var1)) { _fun0011_ip = 44; continue _fun0011 }
 40:
                var1 = _closure1_slot15;
 44:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getPurchasableSubscriptionRoles';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                var4 = arg1;
                var2 = this;
                var1 = var2.buildRoles;
                var1 = var1.bind(var2)(var4);
                var3 = _closure1_slot17;
                var1 = var3.get;
                var1 = var1.bind(var3)(var4);
                var3 = null;
                if(!(var3 == var1)) { _fun0012_ip = 44; continue _fun0012 }
 40:
                var1 = _closure1_slot15;
 44:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getUserSubscriptionRoles';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                var4 = arg1;
                var2 = this;
                var1 = var2.buildRoles;
                var1 = var1.bind(var2)(var4);
                var3 = _closure1_slot18;
                var1 = var3.get;
                var1 = var1.bind(var3)(var4);
                var3 = null;
                if(!(var3 == var1)) { _fun0013_ip = 44; continue _fun0013 }
 40:
                var1 = _closure1_slot15;
 44:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'getUserIsAdmin';
        var5['key'] = var7;
        var6 = function value(arg1) {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                var3 = arg1;
                var2 = this;
                var1 = var2.buildRoles;
                var1 = var1.bind(var2)(var3);
                var2 = _closure1_slot19;
                var1 = var2.get;
                var2 = var1.bind(var2)(var3);
                var1 = null;
                var1 = var1 != var2;
                if(!var1) { _fun0014_ip = 46; continue _fun0014 }
 43:
                var1 = var2;
 46:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[6] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'SubscriptionRoleStore';
    var8['displayName'] = var2;
    var2 = 14;
    var2 = var6[var2];
    var16 = var7.bind(var1)(var2);
    var2 = {};
    var2['CONNECTION_OPEN'] = var11;
    var2['LOGOUT'] = var11;
    var2['GUILD_CREATE'] = var10;
    var11 = function handleGuildDelete(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
            var1 = arg1;
            var1 = var1.guild;
            var5 = var1.id;
            var6 = _closure1_slot20;
            var1 = null;
            var2 = var1 == var6;
            var1 = undefined;
            var4 = undefined;
            if(var2) { _fun0015_ip = 43; continue _fun0015 }
 33:
            var2 = var6.has;
            var4 = var2.bind(var6)(var5);
 43:
            var2 = true;
            if(!(var2 === var4)) { _fun0015_ip = 97; continue _fun0015 }
 49:
            var2 = global;
            var6 = var2.Set;
            var7 = _closure1_slot20;
            var4 = var6.prototype;
            var4 = Object.create(var4, {constructor: {value: var6}});
            var8 = var4;
            var2 = new var8[var6](var7, var6);
            var2 = var2 instanceof Object ? var2 : var4;
            var4 = var2.delete;
            var4 = var4.bind(var2)(var5);
            _closure1_slot20 = var2;
            return var1;
 97:
            var1 = false;
            return var1;
        }
    };
    var2['GUILD_DELETE'] = var11;
    var2['GUILD_UPDATE'] = var10;
    var2['GUILD_ROLE_CREATE'] = var9;
    var2['GUILD_ROLE_UPDATE'] = var9;
    var2['GUILD_ROLE_DELETE'] = var9;
    var4 = function handleGuildMemberUpdate(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
            var1 = arg1;
            var4 = var1.guildId;
            var1 = var1.user;
            var5 = _closure1_slot12;
            var3 = var5.getCurrentUser;
            var6 = var3.bind(var5)();
            var5 = var1.id;
            var1 = null;
            var7 = var1 == var6;
            var3 = undefined;
            var1 = undefined;
            if(var7) { _fun0016_ip = 52; continue _fun0016 }
 47:
            var1 = var6.id;
 52:
            var5 = var5 !== var1;
            if(var5) { _fun0016_ip = 76; continue _fun0016 }
 59:
            var6 = _closure1_slot16;
            var1 = var6.has;
            var1 = var1.bind(var6)(var4);
            var5 = !var1;
 76:
            var1 = !var5;
            if(var5) { _fun0016_ip = 91; continue _fun0016 }
 82:
            var2 = _closure1_slot24;
            var1 = var2.bind(var3)(var4);
 91:
            return var1;
        }
    };
    var2['GUILD_MEMBER_UPDATE'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var17 = var4;
    var15 = var2;
    var2 = new var17[var8](var16, var15, var14);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_role_subscriptions/SubscriptionRoleStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();