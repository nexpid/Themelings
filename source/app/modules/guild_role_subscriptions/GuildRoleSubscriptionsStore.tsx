// app/modules/guild_role_subscriptions/GuildRoleSubscriptionsStore.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var8 = native3;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var7;
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
    var1 = function makeGroupListingIndexGuildTag(arg1) {
        var1 = global;
        var1 = var1.HermesInternal;
        var3 = var1.concat;
        var2 = 'guild:';
        var1 = arg1;
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var _closure1_slot22 = var1;
    var1 = function makeGroupListingIndexSubscriptionListingTag(arg1) {
        var1 = global;
        var1 = var1.HermesInternal;
        var3 = var1.concat;
        var2 = 'subscription_listing:';
        var1 = arg1;
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var _closure1_slot23 = var1;
    var1 = function makeListingIndexApplicationTag(arg1) {
        var1 = global;
        var1 = var1.HermesInternal;
        var3 = var1.concat;
        var2 = 'application:';
        var1 = arg1;
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var _closure1_slot24 = var1;
    var1 = function makeListingIndexPlanTag(arg1) {
        var1 = global;
        var1 = var1.HermesInternal;
        var3 = var1.concat;
        var2 = 'plan:';
        var1 = arg1;
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var _closure1_slot25 = var1;
    var1 = function _getSubscriptionGroupListingsForGuild(arg1) {
        var3 = _closure1_slot9;
        var2 = var3.values;
        var5 = _closure1_slot22;
        var4 = undefined;
        var1 = arg1;
        var1 = var5.bind(var4)(var1);
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot26 = var1;
    var1 = function saveGroupListing(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var1 = arg1;
            var4 = _closure1_slot9;
            var3 = var4.set;
            var2 = var1.id;
            var2 = var3.bind(var4)(var2, var1);
            var6 = _closure1_slot17;
            var4 = var6.set;
            var3 = var1.guild_id;
            var2 = var1.application_id;
            var2 = var4.bind(var6)(var3, var2);
            var3 = _closure1_slot20;
            var2 = var1.subscription_listings;
            var1 = null;
            if(!(var1 == var2)) { _fun0005_ip = 72; continue _fun0005 }
 68:
            var2 = new Array(0);
 72:
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.bind(var1)();
            var2 = var3.done;
            if(var2) { _fun0005_ip = 120; continue _fun0005 }
 91:
            var6 = _closure1_slot28;
            var2 = var3.value;
            var2 = var6.bind(var1)(var2);
            var6 = var4.bind(var1)();
            var2 = var6.done;
            var3 = var6;
            if(!var2) { _fun0005_ip = 91; continue _fun0005 }
 120:
            return var1;
        }
    };
    var _closure1_slot27 = var1;
    var1 = function saveListing(arg1) {
        var4 = arg1;
        var3 = _closure1_slot10;
        var2 = var3.set;
        var1 = var4.id;
        var1 = var2.bind(var3)(var1, var4);
        var1 = undefined;
        return var1;
    };
    var _closure1_slot28 = var1;
    var4 = global;
    var10 = var4.Object;
    var9 = var10.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var2);
    var12 = 0;
    var2 = var7[var12];
    var1 = undefined;
    var2 = var8.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var11 = 1;
    var2 = var7[var11];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var10 = 2;
    var2 = var7[var10];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 3;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 4;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 5;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.DefaultCreatorMonetizationRestrictions;
    var _closure1_slot7 = var2;
    var2 = {};
    var2['NOT_FETCHED'] = var12;
    var9 = 'NOT_FETCHED';
    var2[var12] = var9;
    var2['FETCHING'] = var11;
    var9 = 'FETCHING';
    var2[var11] = var9;
    var2['FETCHED'] = var10;
    var9 = 'FETCHED';
    var2[var10] = var9;
    var _closure1_slot8 = var2;
    var9 = 6;
    var10 = var7[var9];
    var10 = var6.bind(var1)(var10);
    var13 = var10.SecondaryIndexMap;
    var10 = var13.prototype;
    var11 = Object.create(var10, {constructor: {value: var13}});
    var16 = function(arg1) {
        var3 = arg1;
        var5 = _closure1_slot22;
        var4 = var3.guild_id;
        var1 = undefined;
        var4 = var5.bind(var1)(var4);
        var1 = new Array(1);
        var1[0] = var4;
        var4 = var3.subscription_listings_ids;
        var3 = var4.map;
        var2 = _closure1_slot23;
        var7 = var3.bind(var4)(var2);
        var6 = 1;
        var8 = var1;
        var2 = arraySpread(var8, var7, var6);
        return var1;
    };
    var15 = function(arg1) {
        var1 = arg1;
        var1 = var1.id;
        return var1;
    };
    var17 = var11;
    var10 = new var17[var13](var16, var15, var14);
    var10 = var10 instanceof Object ? var10 : var11;
    var _closure1_slot9 = var10;
    var9 = var7[var9];
    var9 = var6.bind(var1)(var9);
    var12 = var9.SecondaryIndexMap;
    var9 = var12.prototype;
    var10 = Object.create(var9, {constructor: {value: var12}});
    var16 = function(arg1) {
        var2 = arg1;
        var5 = _closure1_slot24;
        var1 = var2.application_id;
        var4 = undefined;
        var5 = var5.bind(var4)(var1);
        var1 = new Array(2);
        var1[0] = var5;
        var3 = _closure1_slot25;
        var5 = var2.subscription_plans;
        var2 = 0;
        var2 = var5[var2];
        var2 = var2.id;
        var2 = var3.bind(var4)(var2);
        var1[1] = var2;
        return var1;
    };
    var15 = function(arg1) {
        var1 = arg1;
        var1 = var1.id;
        return var1;
    };
    var17 = var10;
    var9 = new var17[var12](var16, var15, var14);
    var9 = var9 instanceof Object ? var9 : var10;
    var _closure1_slot10 = var9;
    var9 = {};
    var _closure1_slot11 = var9;
    var9 = var4.Set;
    var10 = var9.prototype;
    var10 = Object.create(var10, {constructor: {value: var9}});
    var17 = var10;
    var9 = new var17[var9](var16);
    var9 = var9 instanceof Object ? var9 : var10;
    var _closure1_slot12 = var9;
    var9 = {};
    var _closure1_slot13 = var9;
    var9 = {};
    var _closure1_slot14 = var9;
    var9 = {};
    var _closure1_slot15 = var9;
    var9 = {};
    var _closure1_slot16 = var9;
    var4 = var4.Map;
    var9 = var4.prototype;
    var9 = Object.create(var9, {constructor: {value: var4}});
    var17 = var9;
    var4 = new var17[var4](var16);
    var4 = var4 instanceof Object ? var4 : var9;
    var _closure1_slot17 = var4;
    var4 = new Array(0);
    var _closure1_slot18 = var4;
    var4 = 8;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var9 = var4.Store;
    var4 = function(arg1) {
        var4 = function GuildRoleSubscriptionsStore() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
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
                if(var1) { _fun0006_ip = 69; continue _fun0006 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0006_ip = 105; continue _fun0006;
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
        var1 = 'getSubscriptionGroupListingsForGuildFetchState';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var3 = _closure1_slot11;
                var1 = arg1;
                var1 = var3[var1];
                var3 = null;
                if(!(var3 == var1)) { _fun0007_ip = 30; continue _fun0007 }
 20:
                var2 = _closure1_slot8;
                var1 = var2.NOT_FETCHED;
 30:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(13);
        var1[0] = var5;
        var5 = {};
        var7 = 'getDidFetchListingForSubscriptionPlanId';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot12;
            var2 = var3.has;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getSubscriptionGroupListing';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot9;
            var2 = var3.get;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getSubscriptionGroupListingsForGuild';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot26;
            var2 = undefined;
            var1 = arg1;
            var1 = var3.bind(var2)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getSubscriptionGroupListingForSubscriptionListing';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var4 = _closure1_slot9;
            var3 = var4.values;
            var6 = _closure1_slot23;
            var5 = undefined;
            var2 = arg1;
            var2 = var6.bind(var5)(var2);
            var2 = var3.bind(var4)(var2);
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var1 = 7;
            var1 = var4[var1];
            var4 = var3.bind(var5)(var1);
            var3 = var2.length;
            var1 = 1;
            var3 = var3 <= var1;
            var1 = 'Found multiple group listings for listing';
            var1 = var4.bind(var5)(var3, var1);
            var1 = 0;
            var1 = var2[var1];
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getSubscriptionListing';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot10;
            var2 = var3.get;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'getSubscriptionListingsForGuild';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                var3 = this;
                var2 = var3.getSubscriptionGroupListingsForGuild;
                var1 = arg1;
                var2 = var2.bind(var3)(var1);
                var1 = 0;
                var2 = var2[var1];
                var1 = null;
                var3 = var1 == var2;
                var6 = undefined;
                var5 = undefined;
                if(var3) { _fun0008_ip = 42; continue _fun0008 }
 36:
                var5 = var2.application_id;
 42:
                if(!(var1 == var5)) { _fun0008_ip = 55; continue _fun0008 }
 46:
                var1 = _closure1_slot18;
                _fun0008_ip = 81; continue _fun0008;
 55:
                var4 = _closure1_slot10;
                var3 = var4.values;
                var2 = _closure1_slot24;
                var2 = var2.bind(var6)(var5);
                var1 = var3.bind(var4)(var2);
 81:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'getSubscriptionListingForPlan';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var4 = _closure1_slot10;
            var3 = var4.values;
            var6 = _closure1_slot25;
            var5 = undefined;
            var2 = arg1;
            var2 = var6.bind(var5)(var2);
            var2 = var3.bind(var4)(var2);
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var1 = 7;
            var1 = var4[var1];
            var4 = var3.bind(var5)(var1);
            var3 = var2.length;
            var1 = 1;
            var3 = var3 <= var1;
            var1 = 'Found multiple listings for plan';
            var1 = var4.bind(var5)(var3, var1);
            var1 = 0;
            var1 = var2[var1];
            return var1;
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'getSubscriptionSettings';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var2 = _closure1_slot13;
            var1 = arg1;
            var1 = var2[var1];
            return var1;
        };
        var5['value'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'getSubscriptionTrial';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var2 = _closure1_slot14;
            var1 = arg1;
            var1 = var2[var1];
            return var1;
        };
        var5['value'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'getMonetizationRestrictions';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var2 = _closure1_slot15;
            var1 = arg1;
            var1 = var2[var1];
            return var1;
        };
        var5['value'] = var7;
        var1[10] = var5;
        var5 = {};
        var7 = 'getMonetizationRestrictionsFetchState';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                var3 = _closure1_slot16;
                var1 = arg1;
                var1 = var3[var1];
                var3 = null;
                if(!(var3 == var1)) { _fun0009_ip = 30; continue _fun0009 }
 20:
                var2 = _closure1_slot8;
                var1 = var2.NOT_FETCHED;
 30:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[11] = var5;
        var5 = {};
        var7 = 'getApplicationIdForGuild';
        var5['key'] = var7;
        var6 = function value(arg1) {
            var3 = _closure1_slot17;
            var2 = var3.get;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var6;
        var1[12] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var9 = var4.bind(var1)(var9);
    var4 = 'GuildRoleSubscriptionsStore';
    var9['displayName'] = var4;
    var4 = 9;
    var4 = var7[var4];
    var16 = var8.bind(var1)(var4);
    var4 = {};
    var10 = function handleConnectionOpen() {
        var3 = _closure1_slot9;
        var2 = var3.clear;
        var2 = var2.bind(var3)();
        var3 = _closure1_slot10;
        var2 = var3.clear;
        var2 = var2.bind(var3)();
        var2 = {};
        _closure1_slot11 = var2;
        var3 = _closure1_slot12;
        var2 = var3.clear;
        var2 = var2.bind(var3)();
        var2 = {};
        _closure1_slot13 = var2;
        var2 = {};
        _closure1_slot14 = var2;
        var2 = {};
        _closure1_slot15 = var2;
        var2 = {};
        _closure1_slot16 = var2;
        var2 = _closure1_slot17;
        var1 = var2.clear;
        var1 = var1.bind(var2)();
        var1 = undefined;
        return var1;
    };
    var4['CONNECTION_OPEN'] = var10;
    var10 = function handleUpdateSettings(arg1) {
        var1 = arg1;
        var3 = var1.settings;
        var2 = _closure1_slot13;
        var1 = var3.guild_id;
        var2[var1] = var3;
        var1 = undefined;
        return var1;
    };
    var4['GUILD_ROLE_SUBSCRIPTIONS_UPDATE_SUBSCRIPTIONS_SETTINGS'] = var10;
    var10 = function handleFetchListings(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
            var1 = arg1;
            var4 = var1.guildId;
            var2 = _closure1_slot11;
            var1 = _closure1_slot8;
            var1 = var1.FETCHING;
            var2[var4] = var1;
            var3 = _closure1_slot20;
            var2 = _closure1_slot26;
            var1 = undefined;
            var2 = var2.bind(var1)(var4);
            var4 = var3.bind(var1)(var2);
            var3 = var4.bind(var1)();
            var2 = var3.done;
            if(var2) { _fun0010_ip = 161; continue _fun0010 }
 61:
            var2 = var3.value;
            var8 = _closure1_slot9;
            var7 = var8.delete;
            var6 = var2.id;
            var6 = var7.bind(var8)(var6);
            var6 = _closure1_slot20;
            var2 = var2.subscription_listings_ids;
            var7 = var6.bind(var1)(var2);
            var6 = var7.bind(var1)();
            var2 = var6.done;
            if(var2) { _fun0010_ip = 146; continue _fun0010 }
 112:
            var9 = var6.value;
            var8 = _closure1_slot10;
            var2 = var8.delete;
            var2 = var2.bind(var8)(var9);
            var8 = var7.bind(var1)();
            var2 = var8.done;
            var6 = var8;
            if(!var2) { _fun0010_ip = 112; continue _fun0010 }
 146:
            var6 = var4.bind(var1)();
            var2 = var6.done;
            var3 = var6;
            if(!var2) { _fun0010_ip = 61; continue _fun0010 }
 161:
            return var1;
        }
    };
    var4['GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS'] = var10;
    var10 = function handleFetchListingsSuccess(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
            var1 = arg1;
            var6 = var1.guildId;
            var7 = var1.groupListings;
            var4 = var1.settings;
            var3 = var1.subscriptionTrials;
            var2 = _closure1_slot11;
            var1 = _closure1_slot8;
            var1 = var1.FETCHED;
            var2[var6] = var1;
            var2 = _closure1_slot20;
            var1 = undefined;
            var8 = var2.bind(var1)(var7);
            var7 = var8.bind(var1)();
            var2 = var7.done;
            if(var2) { _fun0011_ip = 99; continue _fun0011 }
 70:
            var9 = _closure1_slot27;
            var2 = var7.value;
            var2 = var9.bind(var1)(var2);
            var9 = var8.bind(var1)();
            var2 = var9.done;
            var7 = var9;
            if(!var2) { _fun0011_ip = 70; continue _fun0011 }
 99:
            var2 = _closure1_slot13;
            var2[var6] = var4;
            var2 = _closure1_slot20;
            var4 = var2.bind(var1)(var3);
            var3 = var4.bind(var1)();
            var2 = var3.done;
            if(var2) { _fun0011_ip = 161; continue _fun0011 }
 128:
            var7 = var3.value;
            var6 = _closure1_slot14;
            var2 = var7.id;
            var6[var2] = var7;
            var6 = var4.bind(var1)();
            var2 = var6.done;
            var3 = var6;
            if(!var2) { _fun0011_ip = 128; continue _fun0011 }
 161:
            return var1;
        }
    };
    var4['GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS'] = var10;
    var10 = function handleFetchListingsFailure(arg1) {
        var1 = arg1;
        var3 = var1.guildId;
        var2 = _closure1_slot11;
        var1 = _closure1_slot8;
        var1 = var1.FETCHED;
        var2[var3] = var1;
        var1 = undefined;
        return var1;
    };
    var4['GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE'] = var10;
    var10 = function handleUpdateGroupListing(arg1) {
        var1 = arg1;
        var3 = var1.listing;
        var2 = _closure1_slot27;
        var1 = undefined;
        var2 = var2.bind(var1)(var3);
        return var1;
    };
    var4['GUILD_ROLE_SUBSCRIPTIONS_UPDATE_GROUP_LISTING'] = var10;
    var10 = function handleDeleteGroupListing(arg1) {
        var1 = arg1;
        var3 = var1.groupListingId;
        var2 = _closure1_slot9;
        var1 = var2.delete;
        var1 = var1.bind(var2)(var3);
        var1 = undefined;
        return var1;
    };
    var4['GUILD_ROLE_SUBSCRIPTIONS_DELETE_GROUP_LISTING'] = var10;
    var10 = function handleFetchListingForPlan(arg1) {
        var1 = arg1;
        var3 = var1.planId;
        var2 = _closure1_slot12;
        var1 = var2.add;
        var1 = var1.bind(var2)(var3);
        var1 = undefined;
        return var1;
    };
    var4['GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN'] = var10;
    var10 = function handleFetchListingForPlanSuccess(arg1) {
        var1 = arg1;
        var3 = var1.groupListing;
        var2 = _closure1_slot27;
        var1 = undefined;
        var2 = var2.bind(var1)(var3);
        return var1;
    };
    var4['GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS'] = var10;
    var10 = function handleCreateListing(arg1) {
        var1 = arg1;
        var5 = var1.listing;
        var3 = var1.groupListing;
        var4 = _closure1_slot28;
        var1 = undefined;
        var4 = var4.bind(var1)(var5);
        var2 = _closure1_slot27;
        var2 = var2.bind(var1)(var3);
        return var1;
    };
    var4['GUILD_ROLE_SUBSCRIPTIONS_CREATE_LISTING'] = var10;
    var10 = function handleUpdateListing(arg1) {
        var1 = arg1;
        var3 = var1.listing;
        var2 = _closure1_slot28;
        var1 = undefined;
        var2 = var2.bind(var1)(var3);
        return var1;
    };
    var4['GUILD_ROLE_SUBSCRIPTIONS_UPDATE_LISTING'] = var10;
    var10 = function handleDeleteListing(arg1) {
        var1 = arg1;
        var3 = var1.listingId;
        var2 = _closure1_slot10;
        var1 = var2.delete;
        var1 = var1.bind(var2)(var3);
        return var1;
    };
    var4['GUILD_ROLE_SUBSCRIPTIONS_DELETE_LISTING'] = var10;
    var10 = function handleUpdateSubscriptionTrial(arg1) {
        var1 = arg1;
        var3 = var1.subscriptionTrial;
        var2 = _closure1_slot14;
        var1 = var3.id;
        var2[var1] = var3;
        var1 = undefined;
        return var1;
    };
    var4['GUILD_ROLE_SUBSCRIPTIONS_UPDATE_SUBSCRIPTION_TRIAL'] = var10;
    var10 = function handleFetchRestrictions(arg1) {
        var1 = arg1;
        var3 = var1.guildId;
        var2 = _closure1_slot16;
        var1 = _closure1_slot8;
        var1 = var1.FETCHING;
        var2[var3] = var1;
        var1 = undefined;
        return var1;
    };
    var4['GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS'] = var10;
    var10 = function handleFetchRestrictionsSuccess(arg1) {
        var1 = arg1;
        var3 = var1.guildId;
        var4 = var1.restrictions;
        var2 = _closure1_slot15;
        var2[var3] = var4;
        var2 = _closure1_slot16;
        var1 = _closure1_slot8;
        var1 = var1.FETCHED;
        var2[var3] = var1;
        var1 = undefined;
        return var1;
    };
    var4['GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS'] = var10;
    var10 = function handleFetchRestrictionsFailure(arg1) {
        var1 = arg1;
        var3 = var1.guildId;
        var4 = _closure1_slot16;
        var2 = _closure1_slot8;
        var2 = var2.FETCHED;
        var4[var3] = var2;
        var2 = _closure1_slot15;
        var1 = _closure1_slot7;
        var2[var3] = var1;
        var1 = undefined;
        return var1;
    };
    var4['GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE'] = var10;
    var5 = function handleFetchRestrictionsAborted(arg1) {
        var1 = arg1;
        var3 = var1.guildId;
        var2 = _closure1_slot16;
        var1 = _closure1_slot8;
        var1 = var1.NOT_FETCHED;
        var2[var3] = var1;
        var1 = undefined;
        return var1;
    };
    var4['GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_ABORTED'] = var5;
    var5 = var9.prototype;
    var5 = Object.create(var5, {constructor: {value: var9}});
    var17 = var5;
    var15 = var4;
    var4 = new var17[var9](var16, var15, var14);
    var4 = var4 instanceof Object ? var4 : var5;
    var5 = 10;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/guild_role_subscriptions/GuildRoleSubscriptionsStore.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['FetchState'] = var2;
    return var1;
})();