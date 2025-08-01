// app/utils/GuildRoleUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var5 = dependencyMap;
    var1 = metroImportDefault;
    var _closure1_slot0 = var1;
    var1 = metroImportAll;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var5;
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
            var9 = _closure1_slot4;
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
            var7 = _closure1_slot4;
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
    var _closure1_slot3 = var1;
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
    var _closure1_slot4 = var1;
    var4 = function compareGuildRoles(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var4 = arg1;
            var3 = arg2;
            var6 = var4.guildId;
            var1 = var4.id;
            if(!(var1 !== var6)) { _fun0004_ip = 116; continue _fun0004 }
 20:
            var2 = var3.id;
            var1 = -1;
            if(!(var2 !== var6)) { _fun0004_ip = 114; continue _fun0004 }
 35:
            var5 = var4.position;
            var2 = var3.position;
            if(!(var5 === var2)) { _fun0004_ip = 97; continue _fun0004 }
 49:
            var7 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 0;
            var5 = var5[var2];
            var2 = undefined;
            var8 = var7.bind(var2)(var5);
            var7 = var8.compare;
            var5 = var4.id;
            var2 = var3.id;
            var2 = var7.bind(var8)(var5, var2);
            _fun0004_ip = 111; continue _fun0004;
 97:
            var7 = var3.position;
            var5 = var4.position;
            var2 = var7 - var5;
 111:
            var1 = var2;
 114:
            _fun0004_ip = 177; continue _fun0004;
 116:
            var5 = var3.id;
            var2 = 1;
            if(!(var5 === var6)) { _fun0004_ip = 174; continue _fun0004 }
 128:
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var5 = 0;
            var6 = var6[var5];
            var5 = undefined;
            var6 = var7.bind(var5)(var6);
            var5 = var6.compare;
            var4 = var4.id;
            var3 = var3.id;
            var2 = var5.bind(var6)(var4, var3);
 174:
            var1 = var2;
 177:
            return var1;
        }
    };
    var _closure1_slot5 = var4;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = 2;
    var6 = var5[var1];
    var5 = require;
    var1 = undefined;
    var7 = var5.bind(var1)(var6);
    var6 = var7.fileFinishedImporting;
    var5 = 'utils/GuildRoleUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function sortGuildRoleRecords(arg1) {
        var1 = arg1;
        var3 = var1.sort;
        var2 = _closure1_slot5;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var3['sortGuildRoleRecords'] = var5;
    var3['compareGuildRoles'] = var4;
    var4 = function doesRoleSortHigher(arg1, arg2) {
        var4 = _closure1_slot5;
        var3 = undefined;
        var2 = arg1;
        var1 = arg2;
        var2 = var4.bind(var3)(var2, var1);
        var1 = 0;
        var1 = var2 < var1;
        return var1;
    };
    var3['doesRoleSortHigher'] = var4;
    var2 = function filterRoleDeletes(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var9 = arg1;
            var1 = arg2;
            var4 = arguments[2];
            var5 = arguments[3];
            var8 = undefined;
            if(!(var4 === var8)) { _fun0005_ip = 22; continue _fun0005 }
 18:
            var4 = new Array(0);
 22:
            if(!(var5 === var8)) { _fun0005_ip = 30; continue _fun0005 }
 26:
            var5 = new Array(0);
 30:
            var3 = var5.length;
            var2 = var4.length;
            var3 = var3 + var2;
            var2 = 0;
            if(!(var3 !== var2)) { _fun0005_ip = 206; continue _fun0005 }
 53:
            var2 = {};
            var14 = var2;
            var13 = var1;
            var3 = copyDataProperties(var14, var13);
            var3 = null;
            if(!(var3 != var5)) { _fun0005_ip = 119; continue _fun0005 }
 71:
            var3 = _closure1_slot3;
            var6 = var3.bind(var8)(var5);
            var5 = var6.bind(var8)();
            var3 = var5.done;
            if(var3) { _fun0005_ip = 119; continue _fun0005 }
 95:
            var3 = var5.value;
            var3 = delete var2[var3];
            var7 = var6.bind(var8)();
            var3 = var7.done;
            var5 = var7;
            if(!var3) { _fun0005_ip = 95; continue _fun0005 }
 119:
            var3 = _closure1_slot3;
            var6 = var3.bind(var8)(var4);
            var4 = var6.bind(var8)();
            var3 = var4.done;
            var5 = 1;
            if(var3) { _fun0005_ip = 204; continue _fun0005 }
 146:
            var12 = var4.value;
            var10 = var12.id;
            var11 = _closure1_slot1;
            var3 = _closure1_slot2;
            var3 = var3[var5];
            var11 = var11.bind(var8)(var3);
            var3 = var11.fromServer;
            var3 = var3.bind(var11)(var9, var12);
            var2[var10] = var3;
            var10 = var6.bind(var8)();
            var3 = var10.done;
            var4 = var10;
            if(!var3) { _fun0005_ip = 146; continue _fun0005 }
 204:
            return var2;
 206:
            return var1;
        }
    };
    var3['filterRoleDeletes'] = var2;
    return var1;
})();