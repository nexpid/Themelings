// app/utils/GuildRoleUtils.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var7 = native2;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var7;
    var1 = native3;
    var _closure1_slot1 = var1;
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
            var9 = _closure1_slot5;
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
            var7 = _closure1_slot5;
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
    var _closure1_slot4 = var1;
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
    var _closure1_slot5 = var1;
    var5 = function fromServerRole(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var3 = arg1;
            var1 = {};
            var2 = var3.id;
            var1['id'] = var2;
            var2 = var3.name;
            var1['name'] = var2;
            var5 = _closure1_slot2;
            var4 = _closure1_slot3;
            var2 = 0;
            var4 = var4[var2];
            var8 = undefined;
            var7 = var5.bind(var8)(var4);
            var5 = var7.deserialize;
            var4 = var3.permissions;
            var4 = var5.bind(var7)(var4);
            var1['permissions'] = var4;
            var4 = var3.mentionable;
            var1['mentionable'] = var4;
            var4 = var3.position;
            var1['position'] = var4;
            var4 = var3.position;
            var1['originalPosition'] = var4;
            var4 = var3.color;
            var1['color'] = var4;
            var5 = var3.color;
            var4 = null;
            var7 = var4 != var5;
            var5 = null;
            if(!var7) { _fun0004_ip = 171; continue _fun0004 }
 124:
            var7 = var3.color;
            var5 = null;
            if(!(var2 !== var7)) { _fun0004_ip = 171; continue _fun0004 }
 135:
            var9 = _closure1_slot0;
            var10 = _closure1_slot3;
            var7 = 1;
            var7 = var10[var7];
            var10 = var9.bind(var8)(var7);
            var9 = var10.int2hex;
            var7 = var3.color;
            var5 = var9.bind(var10)(var7);
 171:
            var1['colorString'] = var5;
            var5 = var3.colors;
            var1['colors'] = var5;
            var5 = var3.colors;
            var7 = var4 != var5;
            var5 = null;
            if(!var7) { _fun0004_ip = 235; continue _fun0004 }
 199:
            var7 = _closure1_slot0;
            var9 = _closure1_slot3;
            var6 = 2;
            var6 = var9[var6];
            var8 = var7.bind(var8)(var6);
            var7 = var8.extractColorStringsFromServerColors;
            var6 = var3.colors;
            var5 = var7.bind(var8)(var6);
 235:
            var1['colorStrings'] = var5;
            var5 = var3.hoist;
            var1['hoist'] = var5;
            var5 = var3.managed;
            var1['managed'] = var5;
            var5 = var3.tags;
            var1['tags'] = var5;
            var5 = var3.icon;
            var1['icon'] = var5;
            var5 = var3.unicode_emoji;
            var1['unicodeEmoji'] = var5;
            var3 = var3.flags;
            var4 = var4 != var3;
            var2 = 0;
            if(!var4) { _fun0004_ip = 310; continue _fun0004 }
 307:
            var2 = var3;
 310:
            var1['flags'] = var2;
            return var1;
        }
    };
    var _closure1_slot6 = var5;
    var4 = function sortClientRoles(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var5 = arg2;
            var1 = arg1;
            var _closure2_slot0 = var1;
            var1 = null;
            if(!(var1 != var5)) { _fun0005_ip = 73; continue _fun0005 }
 18:
            var3 = var5.length;
            var1 = 1;
            var1 = var3 - var1;
            var _closure2_slot1 = var1;
            var1 = {};
            var _closure2_slot2 = var1;
            var4 = var5.sort;
            var3 = function(arg1, arg2) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var3 = arg1;
                    var2 = arg2;
                    var7 = _closure2_slot0;
                    var5 = var3.id;
                    var6 = inf;
                    var4 = var6;
                    if(!(var7 !== var5)) { _fun0006_ip = 55; continue _fun0006 }
 35:
                    var5 = var3.originalPosition;
                    var7 = null;
                    if(!(var7 == var5)) { _fun0006_ip = 52; continue _fun0006 }
 47:
                    var5 = var3.position;
 52:
                    var4 = -var5;
 55:
                    var5 = _closure2_slot0;
                    var1 = var2.id;
                    if(!(var5 !== var1)) { _fun0006_ip = 88; continue _fun0006 }
 68:
                    var1 = var2.originalPosition;
                    var5 = null;
                    if(!(var5 == var1)) { _fun0006_ip = 85; continue _fun0006 }
 80:
                    var1 = var2.position;
 85:
                    var6 = -var1;
 88:
                    var5 = var4 === var6;
                    if(var5) { _fun0006_ip = 118; continue _fun0006 }
 95:
                    var1 = -1;
                    if(!(!(var4 < var6))) { _fun0006_ip = 116; continue _fun0006 }
 105:
                    var4 = 1;
                    if(!var5) { _fun0006_ip = 113; continue _fun0006 }
 111:
                    var4 = 0;
 113:
                    var1 = var4;
 116:
                    _fun0006_ip = 165; continue _fun0006;
 118:
                    var6 = _closure1_slot1;
                    var5 = _closure1_slot3;
                    var4 = 3;
                    var5 = var5[var4];
                    var4 = undefined;
                    var5 = var6.bind(var4)(var5);
                    var4 = var5.compare;
                    var3 = var3.id;
                    var2 = var2.id;
                    var1 = var4.bind(var5)(var3, var2);
 165:
                    return var1;
                }
            };
            var4 = var4.bind(var5)(var3);
            var3 = var4.forEach;
            var2 = function(arg1, arg2) {
                var3 = arg1;
                var4 = _closure2_slot1;
                var2 = arg2;
                var2 = var4 - var2;
                var3['position'] = var2;
                var2 = _closure2_slot2;
                var1 = var3.id;
                var2[var1] = var3;
                var1 = undefined;
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            return var1;
 73:
            var1 = {};
            return var1;
        }
    };
    var _closure1_slot7 = var4;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var8 = {};
    var1 = true;
    var8['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var8);
    var1 = 4;
    var6 = var6[var1];
    var1 = undefined;
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'utils/GuildRoleUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var6 = function fromSerializedGuildRoleInPlace(arg1) {
        var3 = arg1;
        var4 = _closure1_slot2;
        var2 = _closure1_slot3;
        var1 = 0;
        var2 = var2[var1];
        var1 = undefined;
        var5 = var4.bind(var1)(var2);
        var4 = var5.deserialize;
        var2 = var3.permissions;
        var2 = var4.bind(var5)(var2);
        var3['permissions'] = var2;
        return var1;
    };
    var3['fromSerializedGuildRoleInPlace'] = var6;
    var3['fromServerRole'] = var5;
    var3['sortClientRoles'] = var4;
    var4 = function sortServerRoles(arg1, arg2) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var3 = arg2;
            var1 = null;
            if(!(var1 != var3)) { _fun0007_ip = 43; continue _fun0007 }
 9:
            var4 = _closure1_slot7;
            var2 = var3.map;
            var1 = _closure1_slot6;
            var3 = var2.bind(var3)(var1);
            var2 = undefined;
            var1 = arg1;
            var1 = var4.bind(var2)(var1, var3);
            _fun0007_ip = 45; continue _fun0007;
 43:
            var1 = {};
 45:
            return var1;
        }
    };
    var3['sortServerRoles'] = var4;
    var2 = function filterRoleDeletes(arg1, arg2) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var1 = arg2;
            var4 = arguments[2];
            var3 = arguments[3];
            var5 = undefined;
            if(!(var4 === var5)) { _fun0008_ip = 19; continue _fun0008 }
 15:
            var4 = new Array(0);
 19:
            if(!(var3 === var5)) { _fun0008_ip = 27; continue _fun0008 }
 23:
            var3 = new Array(0);
 27:
            var6 = var3.length;
            var2 = var4.length;
            var6 = var6 + var2;
            var2 = 0;
            if(!(var6 !== var2)) { _fun0008_ip = 211; continue _fun0008 }
 50:
            var6 = {};
            var11 = var6;
            var10 = var1;
            var2 = copyDataProperties(var11, var10);
            var2 = null;
            if(!(var2 != var3)) { _fun0008_ip = 116; continue _fun0008 }
 68:
            var2 = _closure1_slot4;
            var7 = var2.bind(var5)(var3);
            var3 = var7.bind(var5)();
            var2 = var3.done;
            if(var2) { _fun0008_ip = 116; continue _fun0008 }
 92:
            var2 = var3.value;
            var2 = delete var6[var2];
            var8 = var7.bind(var5)();
            var2 = var8.done;
            var3 = var8;
            if(!var2) { _fun0008_ip = 92; continue _fun0008 }
 116:
            var3 = _closure1_slot4;
            var7 = var3.bind(var5)(var4);
            var4 = var7.bind(var5)();
            var3 = var4.done;
            if(var3) { _fun0008_ip = 178; continue _fun0008 }
 140:
            var9 = var4.value;
            var8 = var9.id;
            var3 = _closure1_slot6;
            var3 = var3.bind(var5)(var9);
            var6[var8] = var3;
            var8 = var7.bind(var5)();
            var3 = var8.done;
            var4 = var8;
            if(!var3) { _fun0008_ip = 140; continue _fun0008 }
 178:
            var4 = _closure1_slot7;
            var2 = global;
            var3 = var2.Object;
            var2 = var3.values;
            var3 = var2.bind(var3)(var6);
            var2 = arg1;
            var2 = var4.bind(var5)(var2, var3);
            return var2;
 211:
            return var1;
        }
    };
    var3['filterRoleDeletes'] = var2;
    return var1;
})();