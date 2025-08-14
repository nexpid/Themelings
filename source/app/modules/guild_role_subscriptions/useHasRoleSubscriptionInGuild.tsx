// app/modules/guild_role_subscriptions/useHasRoleSubscriptionInGuild.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
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
            var9 = _closure1_slot8;
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
            var7 = _closure1_slot8;
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
    var _closure1_slot7 = var1;
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
    var _closure1_slot8 = var1;
    var2 = function computeHasRoleSubscriptionsInGuild(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var4 = arg1;
            var7 = arg2;
            var1 = arguments[2];
            var5 = arguments[3];
            var6 = undefined;
            if(!(var1 === var6)) { _fun0004_ip = 63; continue _fun0004 }
 18:
            var2 = null;
            var3 = var2 == var4;
            if(var3) { _fun0004_ip = 60; continue _fun0004 }
 27:
            var9 = _closure1_slot3;
            var8 = var9.getMember;
            var10 = _closure1_slot2;
            var3 = var10.getId;
            var3 = var3.bind(var10)();
            var2 = var8.bind(var9)(var4, var3);
 60:
            var1 = var2;
 63:
            if(!(var5 === var6)) { _fun0004_ip = 85; continue _fun0004 }
 67:
            var3 = _closure1_slot5;
            var2 = new Array(1);
            var2[0] = var3;
            var5 = var2;
 85:
            var3 = var5;
            var2 = var3[Symbol.iterator];
            var3 = var2().next;
            var8 = var3().value;
            var3 = var2;
            var5 = var3 === var6;
            var3 = undefined;
            if(var5) { _fun0004_ip = 110; continue _fun0004 }
 107:
            var3 = var8;
 110:
            if(var5) { _fun0004_ip = 116; continue _fun0004 }
 113:
            var2.return();
 116:
            var2 = var3.getGuild;
            var2 = var2.bind(var3)(var4);
            var5 = null;
            if(!(var5 != var2)) { _fun0004_ip = 289; continue _fun0004 }
 135:
            if(!(var5 != var1)) { _fun0004_ip = 289; continue _fun0004 }
 142:
            var8 = var2.features;
            var4 = var8.has;
            var3 = _closure1_slot6;
            var3 = var3.ROLE_SUBSCRIPTIONS_ENABLED;
            var3 = var4.bind(var8)(var3);
            if(!var3) { _fun0004_ip = 289; continue _fun0004 }
 174:
            var2 = _closure1_slot7;
            var1 = var1.roles;
            var4 = var2.bind(var6)(var1);
            var2 = var4.bind(var6)();
            var1 = var2.done;
            var3 = var2;
            var2 = undefined;
            if(var1) { _fun0004_ip = 285; continue _fun0004 }
 206:
            var1 = var3.value;
            var9 = var5 == var7;
            var8 = undefined;
            if(var9) { _fun0004_ip = 224; continue _fun0004 }
 220:
            var8 = var7[var1];
 224:
            var9 = var5 == var8;
            var1 = undefined;
            if(var9) { _fun0004_ip = 260; continue _fun0004 }
 233:
            var9 = var8.tags;
            var8 = var5 == var9;
            var2 = var9;
            var1 = undefined;
            if(var8) { _fun0004_ip = 260; continue _fun0004 }
 251:
            var1 = var9.subscription_listing_id;
            var2 = var9;
 260:
            if(!(var5 == var1)) { _fun0004_ip = 281; continue _fun0004 }
 264:
            var8 = var4.bind(var6)();
            var1 = var8.done;
            var3 = var8;
            if(var1) { _fun0004_ip = 285; continue _fun0004 }
 279:
            _fun0004_ip = 206; continue _fun0004;
 281:
            var1 = true;
            return var1;
 285:
            var1 = false;
            return var1;
 289:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot9 = var2;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot2 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.GuildFeatures;
    var _closure1_slot6 = var5;
    var5 = 6;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/guild_role_subscriptions/useHasRoleSubscriptionInGuild.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function useHasRoleSubscriptionInGuild(arg1) {
        var7 = arg1;
        var _closure2_slot0 = var7;
        var5 = _closure1_slot0;
        var8 = _closure1_slot1;
        var3 = 5;
        var6 = var8[var3];
        var4 = undefined;
        var11 = var5.bind(var4)(var6);
        var10 = var11.useStateFromStores;
        var6 = _closure1_slot2;
        var9 = new Array(2);
        var9[0] = var6;
        var6 = _closure1_slot3;
        var9[1] = var6;
        var6 = function() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var2 = _closure2_slot0;
                var1 = null;
                var2 = var1 == var2;
                if(var2) { _fun0005_ip = 53; continue _fun0005 }
 16:
                var5 = _closure1_slot3;
                var4 = var5.getMember;
                var3 = _closure2_slot0;
                var6 = _closure1_slot2;
                var2 = var6.getId;
                var2 = var2.bind(var6)();
                var1 = var4.bind(var5)(var3, var2);
 53:
                return var1;
            }
        };
        var6 = var10.bind(var11)(var9, var6);
        var _closure2_slot1 = var6;
        var3 = var8[var3];
        var5 = var5.bind(var4)(var3);
        var4 = var5.useStateFromStores;
        var8 = _closure1_slot5;
        var3 = new Array(2);
        var3[0] = var8;
        var2 = _closure1_slot4;
        var3[1] = var2;
        var2 = new Array(2);
        var2[0] = var7;
        var2[1] = var6;
        var1 = function() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var6 = _closure1_slot9;
                var5 = _closure2_slot0;
                var3 = null;
                var7 = var3 != var5;
                var3 = undefined;
                if(!var7) { _fun0006_ip = 44; continue _fun0006 }
 25:
                var9 = _closure1_slot4;
                var8 = var9.getRolesSnapshot;
                var7 = _closure2_slot0;
                var3 = var8.bind(var9)(var7);
 44:
                var11 = _closure2_slot1;
                var7 = _closure1_slot5;
                var1 = new Array(1);
                var1[0] = var7;
                var14 = undefined;
                var13 = var5;
                var12 = var3;
                var10 = var1;
                var1 = var14[var6](var13, var12, var11, var10, var9);
                return var1;
            }
        };
        var1 = var4.bind(var5)(var3, var1, var2);
        return var1;
    };
    var3['default'] = var4;
    var3['computeHasRoleSubscriptionsInGuild'] = var2;
    return var1;
})();