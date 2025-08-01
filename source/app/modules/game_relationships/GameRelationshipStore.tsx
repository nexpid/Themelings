// app/modules/game_relationships/GameRelationshipStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
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
            _closure1_slot15 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot15 = var1;
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
            var9 = _closure1_slot17;
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
            var7 = _closure1_slot17;
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
    var _closure1_slot16 = var1;
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
    var _closure1_slot17 = var1;
    var1 = function recountRelationshipTypes() {
        var2 = 0;
        var _closure2_slot0 = var2;
        var _closure2_slot1 = var2;
        var _closure2_slot2 = var2;
        var4 = _closure1_slot11;
        var3 = var4.values;
        var5 = var3.bind(var4)();
        var4 = var5.forEach;
        var3 = function(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var1 = arg1;
                var4 = var1.type;
                var3 = var1.id;
                var2 = _closure1_slot6;
                var2 = var2.FRIEND;
                if(!(var4 !== var2)) { _fun0005_ip = 138; continue _fun0005 }
 30:
                var2 = _closure1_slot6;
                var2 = var2.PENDING_OUTGOING;
                if(!(var4 !== var2)) { _fun0005_ip = 118; continue _fun0005 }
 44:
                var2 = _closure1_slot6;
                var2 = var2.PENDING_INCOMING;
                if(!(var4 === var2)) { _fun0005_ip = 156; continue _fun0005 }
 58:
                var4 = _closure1_slot5;
                var2 = var4.isSpam;
                var2 = var2.bind(var4)(var3);
                if(var2) { _fun0005_ip = 114; continue _fun0005 }
 76:
                var2 = _closure1_slot5;
                var1 = var2.isIgnored;
                var1 = var1.bind(var2)(var3);
                if(var1) { _fun0005_ip = 114; continue _fun0005 }
 94:
                var3 = _closure2_slot0;
                var1 = 1;
                var1 = var3 + var1;
                _closure2_slot0 = var1;
                _fun0005_ip = 156; continue _fun0005;
 114:
                var1 = undefined;
                return var1;
 118:
                var3 = _closure2_slot1;
                var1 = 1;
                var1 = var3 + var1;
                _closure2_slot1 = var1;
                _fun0005_ip = 156; continue _fun0005;
 138:
                var3 = _closure2_slot2;
                var1 = 1;
                var1 = var3 + var1;
                _closure2_slot2 = var1;
 156:
                var1 = undefined;
                return var1;
            }
        };
        var3 = var4.bind(var5)(var3);
        var3 = _closure2_slot0;
        _closure1_slot12 = var3;
        var3 = _closure2_slot1;
        _closure1_slot13 = var3;
        var1 = _closure2_slot2;
        _closure1_slot14 = var1;
        var1 = undefined;
        return var1;
    };
    var _closure1_slot18 = var1;
    var1 = function upsert(arg1) {
        var5 = arg1;
        var4 = _closure1_slot11;
        var3 = var4.set;
        var7 = _closure1_slot7;
        var6 = var5.id;
        var2 = var5.applicationId;
        var1 = undefined;
        var2 = var7.bind(var1)(var6, var2);
        var2 = var3.bind(var4)(var2, var5);
        return var1;
    };
    var _closure1_slot19 = var1;
    var1 = function remove(arg1, arg2) {
        var4 = _closure1_slot11;
        var3 = var4.delete;
        var6 = _closure1_slot7;
        var1 = undefined;
        var5 = arg1;
        var2 = arg2;
        var2 = var6.bind(var1)(var5, var2);
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var _closure1_slot20 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var2 = 0;
    var8 = var6[var2];
    var1 = undefined;
    var8 = var7.bind(var1)(var8);
    var _closure1_slot0 = var8;
    var8 = 1;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot1 = var8;
    var8 = 2;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot2 = var8;
    var8 = 3;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot3 = var8;
    var8 = 4;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot4 = var8;
    var8 = 5;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot5 = var8;
    var8 = 6;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var8 = var8.RelationshipTypes;
    var _closure1_slot6 = var8;
    var8 = function GAME_RELATIONSHIP_KEY(arg1, arg2) {
        var1 = global;
        var1 = var1.HermesInternal;
        var5 = var1.concat;
        var4 = '';
        var3 = arg2;
        var2 = '-';
        var1 = arg1;
        var1 = var5.bind(var4)(var3, var2, var1);
        return var1;
    };
    var _closure1_slot7 = var8;
    var8 = function GameRelationshipIndexes_BY_APPLICATION_ID(arg1) {
        var1 = global;
        var1 = var1.HermesInternal;
        var3 = var1.concat;
        var2 = 'application-id-';
        var1 = arg1;
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var _closure1_slot8 = var8;
    var8 = function GameRelationshipIndexes_BY_USER_ID(arg1) {
        var1 = global;
        var1 = var1.HermesInternal;
        var3 = var1.concat;
        var2 = 'user-id-';
        var1 = arg1;
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var _closure1_slot9 = var8;
    var8 = function GameRelationshipIndexes_BY_RELATIONSHIP_TYPE(arg1) {
        var1 = global;
        var1 = var1.HermesInternal;
        var3 = var1.concat;
        var2 = 'relationship-type-';
        var1 = arg1;
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var _closure1_slot10 = var8;
    var8 = 7;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var11 = var8.SecondaryIndexMap;
    var8 = var11.prototype;
    var9 = Object.create(var8, {constructor: {value: var11}});
    var14 = function gameRelationshipsIndex(arg1) {
        var2 = arg1;
        var1 = new Array(0);
        var6 = var1.push;
        var7 = _closure1_slot8;
        var3 = var2.applicationId;
        var5 = undefined;
        var3 = var7.bind(var5)(var3);
        var3 = var6.bind(var1)(var3);
        var6 = var1.push;
        var7 = _closure1_slot9;
        var3 = var2.id;
        var3 = var7.bind(var5)(var3);
        var3 = var6.bind(var1)(var3);
        var3 = var1.push;
        var4 = _closure1_slot10;
        var2 = var2.type;
        var2 = var4.bind(var5)(var2);
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var13 = function(arg1) {
        var1 = arg1;
        var3 = var1.since;
        var1 = global;
        var1 = var1.HermesInternal;
        var2 = var1.concat;
        var1 = '';
        var1 = var2.bind(var1)(var3);
        return var1;
    };
    var15 = var9;
    var8 = new var15[var11](var14, var13, var12);
    var8 = var8 instanceof Object ? var8 : var9;
    var _closure1_slot11 = var8;
    var _closure1_slot12 = var2;
    var _closure1_slot13 = var2;
    var _closure1_slot14 = var2;
    var2 = 8;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function GameRelationshipStore() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot0;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot3;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot2;
                var1 = _closure1_slot15;
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
                var6 = _closure1_slot3;
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
        var5 = _closure1_slot4;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot1;
        var5 = {};
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value() {
            var3 = this;
            var2 = var3.waitFor;
            var1 = _closure1_slot5;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(12);
        var1[0] = var5;
        var5 = {};
        var7 = 'getPendingIncomingCount';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot12;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getPendingOutgoingCount';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot13;
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getGameFriendCount';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot14;
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getGameFriendsForApplication';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var4 = _closure1_slot11;
            var3 = var4.values;
            var5 = _closure1_slot8;
            var2 = undefined;
            var1 = arg1;
            var2 = var5.bind(var2)(var1);
            var1 = true;
            var3 = var3.bind(var4)(var2, var1);
            var2 = var3.filter;
            var1 = function(arg1) {
                var1 = arg1;
                var2 = var1.type;
                var1 = _closure1_slot6;
                var1 = var1.FRIEND;
                var1 = var2 === var1;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getGameRelationshipsForUser';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var4 = _closure1_slot11;
            var3 = var4.values;
            var5 = _closure1_slot9;
            var2 = undefined;
            var1 = arg1;
            var2 = var5.bind(var2)(var1);
            var1 = true;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'getGameRelationshipsForUserByType';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            var4 = this;
            var2 = arg2;
            var _closure3_slot0 = var2;
            var3 = var4.getGameRelationshipsForUser;
            var2 = arg1;
            var3 = var3.bind(var4)(var2);
            var2 = var3.filter;
            var1 = function(arg1) {
                var1 = arg1;
                var2 = var1.type;
                var1 = _closure3_slot0;
                var1 = var2 === var1;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'getGameFriendsForUser';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var4 = this;
            var3 = var4.getGameRelationshipsForUserByType;
            var1 = _closure1_slot6;
            var2 = var1.FRIEND;
            var1 = arg1;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'getGameRelationshipCount';
        var5['key'] = var7;
        var7 = function value() {
            var2 = _closure1_slot11;
            var1 = var2.size;
            var1 = var1.bind(var2)();
            return var1;
        };
        var5['value'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'getGameRelationships';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot11;
            return var1;
        };
        var5['value'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'getGameRelationshipsByType';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var4 = _closure1_slot11;
            var3 = var4.values;
            var5 = _closure1_slot10;
            var2 = undefined;
            var1 = arg1;
            var2 = var5.bind(var2)(var1);
            var1 = true;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var5['value'] = var7;
        var1[10] = var5;
        var5 = {};
        var7 = 'getGameRelationshipsVersion';
        var5['key'] = var7;
        var6 = function value() {
            var1 = _closure1_slot11;
            var1 = var1.version;
            return var1;
        };
        var5['value'] = var6;
        var1[11] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'GameRelationshipStore';
    var8['displayName'] = var2;
    var2 = 9;
    var2 = var6[var2];
    var14 = var7.bind(var1)(var2);
    var2 = {};
    var9 = function handleConnectionOpen(arg1) {
        var3 = _closure1_slot11;
        var2 = var3.clear;
        var2 = var2.bind(var3)();
        var2 = arg1;
        var4 = var2.gameRelationships;
        var3 = var4.forEach;
        var2 = function(arg1) {
            var1 = arg1;
            var3 = _closure1_slot19;
            var2 = {};
            var4 = var1.id;
            var2['id'] = var4;
            var4 = var1.application_id;
            var2['applicationId'] = var4;
            var4 = var1.type;
            var2['type'] = var4;
            var4 = var1.since;
            var2['since'] = var4;
            var1 = var1.dm_access_type;
            var2['dmAccessType'] = var1;
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        var2 = _closure1_slot18;
        var1 = undefined;
        var2 = var2.bind(var1)();
        return var1;
    };
    var2['CONNECTION_OPEN'] = var9;
    var9 = function handleGameRelationshipAdd(arg1) {
        var4 = _closure1_slot19;
        var1 = arg1;
        var3 = var1.gameRelationship;
        var1 = undefined;
        var3 = var4.bind(var1)(var3);
        var2 = _closure1_slot18;
        var2 = var2.bind(var1)();
        return var1;
    };
    var2['GAME_RELATIONSHIP_ADD'] = var9;
    var9 = function handleGameRelationshipRemove(arg1) {
        var1 = arg1;
        var5 = _closure1_slot20;
        var4 = var1.userId;
        var3 = var1.applicationId;
        var1 = undefined;
        var3 = var5.bind(var1)(var4, var3);
        var2 = _closure1_slot18;
        var2 = var2.bind(var1)();
        return var1;
    };
    var2['GAME_RELATIONSHIP_REMOVE'] = var9;
    var4 = function handleApplicationsFetchSuccess(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var1 = arg1;
            var4 = var1.unknownApplicationIds;
            var1 = null;
            if(!(var1 != var4)) { _fun0007_ip = 209; continue _fun0007 }
 18:
            var3 = _closure1_slot16;
            var2 = undefined;
            var6 = var3.bind(var2)(var4);
            var4 = var6.bind(var2)();
            var3 = var4.done;
            var5 = var4;
            var4 = undefined;
            if(var3) { _fun0007_ip = 201; continue _fun0007 }
 52:
            var9 = var5.value;
            var7 = _closure1_slot16;
            var10 = _closure1_slot11;
            var8 = var10.values;
            var3 = _closure1_slot8;
            var3 = var3.bind(var2)(var9);
            var3 = var8.bind(var10)(var3);
            var8 = var7.bind(var2)(var3);
            var7 = var8.bind(var2)();
            var3 = var7.done;
            if(var3) { _fun0007_ip = 183; continue _fun0007 }
 101:
            var10 = var7.value;
            var11 = var10.type;
            var3 = _closure1_slot6;
            var3 = var3.PENDING_INCOMING;
            var3 = var11 !== var3;
            if(!var3) { _fun0007_ip = 147; continue _fun0007 }
 128:
            var12 = var10.type;
            var11 = _closure1_slot6;
            var11 = var11.PENDING_OUTGOING;
            var3 = var12 !== var11;
 147:
            if(var3) { _fun0007_ip = 165; continue _fun0007 }
 150:
            var11 = _closure1_slot20;
            var3 = var10.id;
            var3 = var11.bind(var2)(var3, var9);
 165:
            var11 = var8.bind(var2)();
            var3 = var11.done;
            var7 = var11;
            var4 = var10;
            if(!var3) { _fun0007_ip = 101; continue _fun0007 }
 183:
            var7 = var6.bind(var2)();
            var3 = var7.done;
            var5 = var7;
            if(!var3) { _fun0007_ip = 52; continue _fun0007 }
 201:
            var1 = _closure1_slot18;
            var1 = var1.bind(var2)();
 209:
            var1 = undefined;
            return var1;
        }
    };
    var2['APPLICATIONS_FETCH_SUCCESS'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var15 = var4;
    var13 = var2;
    var2 = new var15[var8](var14, var13, var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/game_relationships/GameRelationshipStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();