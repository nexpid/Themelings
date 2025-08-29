// app/utils/MentionGuardUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var6;
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
            var9 = _closure1_slot9;
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
            var7 = _closure1_slot9;
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
    var _closure1_slot8 = var1;
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
    var _closure1_slot9 = var1;
    var7 = function everyoneMemberCount(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var3 = arg2;
            var2 = arg1;
            var _closure2_slot0 = var2;
            var2 = 0;
            var _closure2_slot1 = var2;
            var4 = var3.isThread;
            var4 = var4.bind(var3)();
            if(var4) { _fun0004_ip = 94; continue _fun0004 }
 31:
            var7 = _closure1_slot3;
            var6 = var7.getProps;
            var4 = var3.getGuildId;
            var5 = var4.bind(var3)();
            var4 = var3.id;
            var4 = var6.bind(var7)(var5, var4);
            var6 = var4.groups;
            var5 = var6.forEach;
            var4 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var1 = arg1;
                    var4 = _closure2_slot0;
                    var3 = '@everyone';
                    var3 = var3 !== var4;
                    if(!var3) { _fun0005_ip = 45; continue _fun0005 }
 23:
                    var5 = var1.id;
                    var4 = _closure1_slot6;
                    var4 = var4.OFFLINE;
                    var3 = var5 === var4;
 45:
                    if(var3) { _fun0005_ip = 66; continue _fun0005 }
 48:
                    var3 = _closure2_slot1;
                    var1 = var1.count;
                    var1 = var3 + var1;
                    _closure2_slot1 = var1;
 66:
                    var1 = undefined;
                    return var1;
                }
            };
            var4 = var5.bind(var6)(var4);
            var1 = _closure2_slot1;
            _fun0004_ip = 117; continue _fun0004;
 94:
            var3 = var3.memberCount;
            var4 = null;
            var4 = var4 != var3;
            var2 = 0;
            if(!var4) { _fun0004_ip = 114; continue _fun0004 }
 111:
            var2 = var3;
 114:
            var1 = var2;
 117:
            return var1;
        }
    };
    var _closure1_slot10 = var7;
    var1 = function parsedItemUsesEveryoneRole(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var1 = arg1;
            var2 = var1.content;
            var3 = 'string';
            var2 = typeof var2;
            if(!(var3 !== var2)) { _fun0006_ip = 123; continue _fun0006 }
 19:
            var2 = global;
            var4 = var2.Array;
            var3 = var4.isArray;
            var2 = var1.content;
            var2 = var3.bind(var4)(var2);
            if(!var2) { _fun0006_ip = 189; continue _fun0006 }
 48:
            var3 = _closure1_slot8;
            var2 = var1.content;
            var7 = undefined;
            var6 = var3.bind(var7)(var2);
            var4 = var6.bind(var7)();
            var3 = var4.done;
            var2 = null;
            var5 = var4;
            if(var3) { _fun0006_ip = 121; continue _fun0006 }
 84:
            var4 = _closure1_slot11;
            var3 = var5.value;
            var3 = var4.bind(var7)(var3);
            if(!(var2 == var3)) { _fun0006_ip = 119; continue _fun0006 }
 102:
            var9 = var6.bind(var7)();
            var4 = var9.done;
            var5 = var9;
            if(var4) { _fun0006_ip = 121; continue _fun0006 }
 117:
            _fun0006_ip = 84; continue _fun0006;
 119:
            return var3;
 121:
            return var2;
 123:
            var3 = var1.type;
            var2 = 'inlineCode';
            if(!(var2 !== var3)) { _fun0006_ip = 217; continue _fun0006 }
 136:
            var3 = var1.type;
            var2 = 'codeBlock';
            if(!(var2 !== var3)) { _fun0006_ip = 217; continue _fun0006 }
 149:
            var6 = var1.content;
            var1 = null;
            var2 = var1 == var6;
            var4 = undefined;
            var3 = undefined;
            if(var2) { _fun0006_ip = 185; continue _fun0006 }
 167:
            var5 = var6.match;
            var2 = _closure1_slot7;
            var3 = var5.bind(var6)(var2);
 185:
            if(!(var1 == var3)) { _fun0006_ip = 193; continue _fun0006 }
 189:
            var1 = null;
            return var1;
 193:
            var2 = _closure1_slot2;
            var1 = 1;
            var2 = var2.bind(var4)(var3, var1);
            var1 = 0;
            var1 = var2[var1];
            return var1;
 217:
            var1 = null;
            return var1;
        }
    };
    var _closure1_slot11 = var1;
    var2 = global;
    var11 = var2.Object;
    var10 = var11.defineProperty;
    var8 = {};
    var1 = true;
    var8['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var8);
    var1 = 0;
    var8 = var6[var1];
    var1 = undefined;
    var8 = var9.bind(var1)(var8);
    var _closure1_slot2 = var8;
    var8 = 1;
    var8 = var6[var8];
    var8 = var9.bind(var1)(var8);
    var _closure1_slot3 = var8;
    var8 = 2;
    var8 = var6[var8];
    var8 = var9.bind(var1)(var8);
    var _closure1_slot4 = var8;
    var8 = 3;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var9 = var8.Permissions;
    var _closure1_slot5 = var9;
    var8 = var8.StatusTypes;
    var _closure1_slot6 = var8;
    var9 = var2.RegExp;
    var2 = var9.prototype;
    var8 = Object.create(var2, {constructor: {value: var9}});
    var14 = /@(:?everyone|here)/;
    var15 = var8;
    var2 = new var15[var9](var14, var13);
    var2 = var2 instanceof Object ? var2 : var8;
    var _closure1_slot7 = var2;
    var2 = {};
    var8 = function shouldShowEveryoneGuard(arg1, arg2) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var5 = arg2;
            var1 = var5.getGuildId;
            var6 = var1.bind(var5)();
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var1 = 4;
            var1 = var4[var1];
            var4 = undefined;
            var3 = var3.bind(var4)(var1);
            var1 = 'isGuildChannel with null guildId';
            var1 = var3.bind(var4)(var6, var1);
            var3 = _closure1_slot10;
            var1 = arg1;
            var3 = var3.bind(var4)(var1, var5);
            var1 = 30;
            var1 = var3 > var1;
            if(!var1) { _fun0007_ip = 99; continue _fun0007 }
 73:
            var4 = _closure1_slot4;
            var3 = var4.can;
            var2 = _closure1_slot5;
            var2 = var2.MENTION_EVERYONE;
            var1 = var3.bind(var4)(var2, var5);
 99:
            return var1;
        }
    };
    var2['shouldShowEveryoneGuard'] = var8;
    var2['everyoneMemberCount'] = var7;
    var4 = function extractEveryoneRole(arg1, arg2) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var2 = _closure1_slot8;
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var1 = 5;
            var1 = var4[var1];
            var6 = undefined;
            var5 = var3.bind(var6)(var1);
            var4 = var5.parsePreprocessor;
            var3 = arg2;
            var1 = arg1;
            var1 = var4.bind(var5)(var3, var1);
            var5 = var2.bind(var6)(var1);
            var3 = var5.bind(var6)();
            var2 = var3.done;
            var1 = null;
            var4 = var3;
            if(var2) { _fun0008_ip = 106; continue _fun0008 }
 69:
            var3 = _closure1_slot11;
            var2 = var4.value;
            var2 = var3.bind(var6)(var2);
            if(!(var1 == var2)) { _fun0008_ip = 104; continue _fun0008 }
 87:
            var8 = var5.bind(var6)();
            var3 = var8.done;
            var4 = var8;
            if(var3) { _fun0008_ip = 106; continue _fun0008 }
 102:
            _fun0008_ip = 69; continue _fun0008;
 104:
            return var2;
 106:
            return var1;
        }
    };
    var2['extractEveryoneRole'] = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'utils/MentionGuardUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();