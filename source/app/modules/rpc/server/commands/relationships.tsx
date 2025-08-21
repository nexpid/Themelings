// app/modules/rpc/server/commands/relationships.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var4 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var1 = metroImportAll;
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
            if(var2) { _fun0001_ip = 345; continue _fun0001 }
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
            var9 = _closure1_slot11;
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
            var7 = _closure1_slot11;
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
 345:
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
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var4.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var4.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var4.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var13 = var2.RPC_SCOPE_CONFIG;
    var2 = 4;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var4 = var2.ApplicationFlags;
    var _closure1_slot7 = var4;
    var4 = var2.RelationshipTypes;
    var _closure1_slot8 = var4;
    var4 = var2.RPCCommands;
    var2 = var2.RPCErrors;
    var _closure1_slot9 = var2;
    var2 = {};
    var7 = var4.GET_RELATIONSHIPS;
    var8 = 5;
    var8 = var6[var8];
    var10 = var5.bind(var1)(var8);
    var9 = var10.createRPCCommand;
    var8 = var4.GET_RELATIONSHIPS;
    var4 = {};
    var12 = {};
    var14 = var13.ANY;
    var13 = 6;
    var13 = var6[var13];
    var13 = var5.bind(var1)(var13);
    var13 = var13.OAuth2Scopes;
    var15 = var13.RELATIONSHIPS_READ;
    var13 = new Array(1);
    var13[0] = var15;
    var12[var14] = var13;
    var4['scope'] = var12;
    var11 = function handler(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var13 = arg1;
            var3 = _closure1_slot2;
            var2 = _closure1_slot3;
            var8 = 7;
            var5 = var2[var8];
            var4 = undefined;
            var6 = var3.bind(var4)(var5);
            var5 = var6.has;
            var2 = var2[var8];
            var7 = var3.bind(var4)(var2);
            var3 = var7.deserialize;
            var2 = var13.socket;
            var2 = var2.application;
            var9 = var2.flags;
            var12 = null;
            var10 = var12 != var9;
            var11 = 0;
            var2 = 0;
            if(!var10) { _fun0004_ip = 80; continue _fun0004 }
 77:
            var2 = var9;
 80:
            var3 = var3.bind(var7)(var2);
            var7 = _closure1_slot2;
            var2 = _closure1_slot3;
            var2 = var2[var8];
            var8 = var7.bind(var4)(var2);
            var7 = var8.deserialize;
            var2 = _closure1_slot7;
            var2 = var2.DISABLE_RELATIONSHIPS_ACCESS;
            var2 = var7.bind(var8)(var2);
            var2 = var5.bind(var6)(var3, var2);
            if(var2) { _fun0004_ip = 366; continue _fun0004 }
 135:
            var3 = new Array(0);
            var5 = _closure1_slot10;
            var6 = _closure1_slot5;
            var2 = var6.getMutableRelationships;
            var6 = var2.bind(var6)();
            var2 = var6.entries;
            var2 = var2.bind(var6)();
            var10 = var5.bind(var4)(var2);
            var5 = var10.bind(var4)();
            var2 = var5.done;
            var9 = 9;
            var8 = 2;
            var7 = 1;
            var6 = var5;
            var5 = undefined;
            if(var2) { _fun0004_ip = 357; continue _fun0004 }
 201:
            var14 = var6.value;
            var2 = _closure1_slot4;
            var2 = var2.bind(var4)(var14, var8);
            var15 = var2[var11];
            var18 = var2[var7];
            var2 = _closure1_slot8;
            var2 = var2.NONE;
            if(!(var18 !== var2)) { _fun0004_ip = 339; continue _fun0004 }
 238:
            var14 = _closure1_slot6;
            var2 = var14.getUser;
            var2 = var2.bind(var14)(var15);
            var5 = var2;
            if(!(var12 != var5)) { _fun0004_ip = 339; continue _fun0004 }
 260:
            var16 = _closure1_slot0;
            var14 = _closure1_slot3;
            var15 = var14[var9];
            var17 = var16.bind(var4)(var15);
            var15 = var17.transformBaseRelationship;
            var18 = var15.bind(var17)(var18, var2);
            var15 = var3.push;
            var14 = var14[var9];
            var17 = var16.bind(var4)(var14);
            var16 = var17.transformApplicationRelationship;
            var14 = var13.socket;
            var14 = var14.application;
            var14 = var14.id;
            var14 = var16.bind(var17)(var18, var14);
            var14 = var15.bind(var3)(var14);
            var5 = var2;
 339:
            var14 = var10.bind(var4)();
            var2 = var14.done;
            var6 = var14;
            if(!var2) { _fun0004_ip = 201; continue _fun0004 }
 357:
            var2 = {};
            var2['relationships'] = var3;
            return var2;
 366:
            var3 = _closure1_slot1;
            var5 = _closure1_slot3;
            var2 = 8;
            var2 = var5[var2];
            var4 = var3.bind(var4)(var2);
            var3 = {};
            var1 = _closure1_slot9;
            var1 = var1.INVALID_PERMISSIONS;
            var3['errorCode'] = var1;
            var1 = var4.prototype;
            var2 = Object.create(var1, {constructor: {value: var4}});
            var19 = 'Missing Permissions';
            var21 = var2;
            var20 = var3;
            var1 = new var21[var4](var20, var19, var18);
            var1 = var1 instanceof Object ? var1 : var2;
            throw var1;
        }
    };
    var4['handler'] = var11;
    var4 = var9.bind(var10)(var8, var4);
    var2[var7] = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/rpc/server/commands/relationships.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();