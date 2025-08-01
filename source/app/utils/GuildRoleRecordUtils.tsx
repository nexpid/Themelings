// app/utils/GuildRoleRecordUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var1 = metroImportAll;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var9;
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
            var9 = _closure1_slot7;
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
            var7 = _closure1_slot7;
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
    var _closure1_slot6 = var1;
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
    var _closure1_slot7 = var1;
    var6 = function fromServer(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var4 = arg2;
            var3 = _closure1_slot9;
            var2 = {};
            var1 = var4.id;
            var2['id'] = var1;
            var1 = var4.name;
            var2['name'] = var1;
            var1 = arg1;
            var2['guildId'] = var1;
            var6 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 2;
            var5 = var5[var1];
            var1 = undefined;
            var7 = var6.bind(var1)(var5);
            var6 = var7.deserialize;
            var5 = var4.permissions;
            var5 = var6.bind(var7)(var5);
            var2['permissions'] = var5;
            var5 = var4.mentionable;
            var2['mentionable'] = var5;
            var5 = var4.position;
            var2['position'] = var5;
            var5 = var4.color;
            var2['color'] = var5;
            var9 = var4.color;
            var5 = null;
            var6 = 0;
            var7 = null;
            if(!(var6 !== var9)) { _fun0004_ip = 161; continue _fun0004 }
 125:
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var9 = 3;
            var9 = var11[var9];
            var11 = var10.bind(var1)(var9);
            var10 = var11.int2hex;
            var9 = var4.color;
            var7 = var10.bind(var11)(var9);
 161:
            var2['colorString'] = var7;
            var9 = var4.colors;
            var10 = var5 != var9;
            var7 = null;
            if(!var10) { _fun0004_ip = 183; continue _fun0004 }
 180:
            var7 = var9;
 183:
            var2['colors'] = var7;
            var7 = var4.colors;
            var9 = var5 != var7;
            var7 = null;
            if(!var9) { _fun0004_ip = 237; continue _fun0004 }
 201:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var8 = 4;
            var8 = var10[var8];
            var10 = var9.bind(var1)(var8);
            var9 = var10.extractColorStringsFromServerColors;
            var8 = var4.colors;
            var7 = var9.bind(var10)(var8);
 237:
            var2['colorStrings'] = var7;
            var7 = var4.hoist;
            var2['hoist'] = var7;
            var8 = var4.managed;
            var7 = var5 != var8;
            if(!var7) { _fun0004_ip = 269; continue _fun0004 }
 266:
            var7 = var8;
 269:
            var2['managed'] = var7;
            var7 = var4.tags;
            if(!(var5 == var7)) { _fun0004_ip = 286; continue _fun0004 }
 284:
            var7 = {};
 286:
            var2['tags'] = var7;
            var7 = var4.icon;
            var2['icon'] = var7;
            var7 = var4.unicode_emoji;
            var2['unicodeEmoji'] = var7;
            var7 = var4.flags;
            var8 = var5 != var7;
            var6 = 0;
            if(!var8) { _fun0004_ip = 328; continue _fun0004 }
 325:
            var6 = var7;
 328:
            var2['flags'] = var6;
            var6 = var4.description;
            var7 = var5 != var6;
            var5 = null;
            if(!var7) { _fun0004_ip = 349; continue _fun0004 }
 346:
            var5 = var6;
 349:
            var2['description'] = var5;
            var4 = var4.version;
            var2['version'] = var4;
            var1 = var3.bind(var1)(var2);
            return var1;
        }
    };
    var _closure1_slot8 = var6;
    var5 = function constructGuildRoleInPlace(arg1) {
        var4 = _closure1_slot3;
        var3 = _closure1_slot5;
        var2 = undefined;
        var1 = arg1;
        var1 = var4.bind(var2)(var3, var1);
        return var1;
    };
    var _closure1_slot9 = var5;
    var4 = function fromSerialized(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var4 = arg2;
            var3 = _closure1_slot9;
            var2 = {};
            var1 = var4.id;
            var2['id'] = var1;
            var1 = var4.name;
            var2['name'] = var1;
            var1 = arg1;
            var2['guildId'] = var1;
            var6 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 2;
            var5 = var5[var1];
            var1 = undefined;
            var8 = var6.bind(var1)(var5);
            var6 = var8.deserialize;
            var5 = var4.permissions;
            var5 = var6.bind(var8)(var5);
            var2['permissions'] = var5;
            var5 = var4.mentionable;
            var2['mentionable'] = var5;
            var5 = var4.position;
            var2['position'] = var5;
            var5 = var4.color;
            var2['color'] = var5;
            var6 = var4.color;
            var5 = null;
            var8 = var5 != var6;
            var6 = null;
            if(!var8) { _fun0005_ip = 175; continue _fun0005 }
 126:
            var9 = var4.color;
            var8 = 0;
            var6 = null;
            if(!(var8 !== var9)) { _fun0005_ip = 175; continue _fun0005 }
 139:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var8 = 3;
            var8 = var10[var8];
            var10 = var9.bind(var1)(var8);
            var9 = var10.int2hex;
            var8 = var4.color;
            var6 = var9.bind(var10)(var8);
 175:
            var2['colorString'] = var6;
            var8 = var4.colors;
            var9 = var5 != var8;
            var6 = null;
            if(!var9) { _fun0005_ip = 197; continue _fun0005 }
 194:
            var6 = var8;
 197:
            var2['colors'] = var6;
            var6 = var4.colors;
            var8 = var5 != var6;
            var6 = null;
            if(!var8) { _fun0005_ip = 251; continue _fun0005 }
 215:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var7 = 4;
            var7 = var9[var7];
            var9 = var8.bind(var1)(var7);
            var8 = var9.extractColorStringsFromServerColors;
            var7 = var4.colors;
            var6 = var8.bind(var9)(var7);
 251:
            var2['colorStrings'] = var6;
            var6 = var4.hoist;
            var2['hoist'] = var6;
            var7 = var4.managed;
            var6 = var5 != var7;
            if(!var6) { _fun0005_ip = 283; continue _fun0005 }
 280:
            var6 = var7;
 283:
            var2['managed'] = var6;
            var6 = var4.tags;
            if(!(var5 == var6)) { _fun0005_ip = 300; continue _fun0005 }
 298:
            var6 = {};
 300:
            var2['tags'] = var6;
            var6 = var4.icon;
            var2['icon'] = var6;
            var6 = var4.unicodeEmoji;
            var2['unicodeEmoji'] = var6;
            var7 = var4.flags;
            var8 = var5 != var7;
            var6 = 0;
            if(!var8) { _fun0005_ip = 342; continue _fun0005 }
 339:
            var6 = var7;
 342:
            var2['flags'] = var6;
            var6 = var4.description;
            var7 = var5 != var6;
            var5 = null;
            if(!var7) { _fun0005_ip = 363; continue _fun0005 }
 360:
            var5 = var6;
 363:
            var2['description'] = var5;
            var4 = var4.version;
            var2['version'] = var4;
            var1 = var3.bind(var1)(var2);
            return var1;
        }
    };
    var _closure1_slot10 = var4;
    var1 = global;
    var11 = var1.Object;
    var10 = var11.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var7);
    var1 = 0;
    var7 = var9[var1];
    var1 = undefined;
    var7 = var8.bind(var1)(var7);
    var10 = var7.constructInPlace;
    var _closure1_slot3 = var10;
    var7 = var7.objectIsPlainRecordOfType;
    var _closure1_slot4 = var7;
    var7 = 1;
    var7 = var9[var7];
    var7 = var8.bind(var1)(var7);
    var7 = var7.GuildRoleRecordTypeTag;
    var _closure1_slot5 = var7;
    var7 = 5;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'utils/GuildRoleRecordUtils.tsx';
    var7 = var8.bind(var9)(var7);
    var7 = function isGuildRoleRecord(arg1) {
        var4 = _closure1_slot4;
        var3 = _closure1_slot5;
        var2 = undefined;
        var1 = arg1;
        var1 = var4.bind(var2)(var3, var1);
        return var1;
    };
    var3['isGuildRoleRecord'] = var7;
    var7 = function fromServerArray(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var7 = arg1;
            var1 = {};
            var3 = _closure1_slot6;
            var5 = undefined;
            var2 = arg2;
            var4 = var3.bind(var5)(var2);
            var3 = var4.bind(var5)();
            var2 = var3.done;
            if(var2) { _fun0006_ip = 73; continue _fun0006 }
 34:
            var9 = var3.value;
            var8 = var9.id;
            var2 = _closure1_slot8;
            var2 = var2.bind(var5)(var7, var9);
            var1[var8] = var2;
            var8 = var4.bind(var5)();
            var2 = var8.done;
            var3 = var8;
            if(!var2) { _fun0006_ip = 34; continue _fun0006 }
 73:
            return var1;
        }
    };
    var3['fromServerArray'] = var7;
    var3['fromServer'] = var6;
    var3['constructGuildRoleInPlace'] = var5;
    var3['fromSerialized'] = var4;
    var4 = function fromSerializedPartition(arg1, arg2) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var10 = arg1;
            var9 = arg2;
            var1 = {};
            var7 = var9;
            var2 = undefined;
            for(var4 in var7)
 24:
            {
 33:
                var12 = var4;
                var13 = _closure1_slot10;
                var11 = var9[var12];
                var11 = var13.bind(var2)(var10, var11);
                var1[var12] = var11;
                _fun0007_ip = 24; continue _fun0007;
            }
 56:
            return var1;
        }
    };
    var3['fromSerializedPartition'] = var4;
    var2 = function toSerializedPartition(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var8 = arg1;
            var1 = {};
            var6 = var8;
            var2 = 'permissions';
            for(var3 in var6)
 20:
            {
 29:
                var10 = var3;
                var11 = var8[var10];
                var9 = {};
                var14 = var9;
                var13 = var11;
                var12 = copyDataProperties(var14, var13);
                var12 = var11.permissions;
                var11 = var12.toString;
                var11 = var11.bind(var12)();
                var9[var2] = var11;
                var1[var10] = var9;
                _fun0008_ip = 20; continue _fun0008;
            }
 74:
            return var1;
        }
    };
    var3['toSerializedPartition'] = var2;
    return var1;
})();