// app/modules/main_tabs_v2/native/friends/hooks/getPendingRelationshipIds.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
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
            var9 = _closure1_slot4;
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
            var7 = _closure1_slot4;
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
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.RelationshipTypes;
    var _closure1_slot1 = var4;
    var4 = function filterFromPending(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var4 = arg1;
            var3 = _closure1_slot0;
            var1 = var3.isSpam;
            var1 = var1.bind(var3)(var4);
            if(var1) { _fun0004_ip = 39; continue _fun0004 }
 24:
            var3 = _closure1_slot0;
            var2 = var3.isIgnored;
            var1 = var2.bind(var3)(var4);
 39:
            return var1;
        }
    };
    var _closure1_slot2 = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/friends/hooks/getPendingRelationshipIds.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getPendingRelationshipIds(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var10 = arg1;
            var5 = new Array(0);
            var4 = new Array(0);
            var3 = new Array(0);
            var2 = new Array(0);
            var6 = _closure1_slot3;
            var1 = var10.keys;
            var1 = var1.bind(var10)();
            var8 = undefined;
            var7 = var6.bind(var8)(var1);
            var6 = var7.bind(var8)();
            var1 = var6.done;
            if(var1) { _fun0005_ip = 243; continue _fun0005 }
 57:
            var11 = var6.value;
            var1 = var10.get;
            var12 = var1.bind(var10)(var11);
            var1 = _closure1_slot1;
            var1 = var1.PENDING_INCOMING;
            var1 = var12 !== var1;
            if(var1) { _fun0005_ip = 98; continue _fun0005 }
 89:
            var13 = _closure1_slot2;
            var1 = var13.bind(var8)(var11);
 98:
            if(var1) { _fun0005_ip = 111; continue _fun0005 }
 101:
            var1 = var5.push;
            var1 = var1.bind(var5)(var11);
 111:
            var1 = _closure1_slot1;
            var1 = var1.PENDING_OUTGOING;
            if(!(var12 === var1)) { _fun0005_ip = 135; continue _fun0005 }
 125:
            var1 = var4.push;
            var1 = var1.bind(var4)(var11);
 135:
            var1 = _closure1_slot1;
            var1 = var1.PENDING_INCOMING;
            var1 = var12 === var1;
            if(!var1) { _fun0005_ip = 167; continue _fun0005 }
 152:
            var14 = _closure1_slot0;
            var13 = var14.isSpam;
            var1 = var13.bind(var14)(var11);
 167:
            if(!var1) { _fun0005_ip = 180; continue _fun0005 }
 170:
            var1 = var3.push;
            var1 = var1.bind(var3)(var11);
 180:
            var1 = _closure1_slot1;
            var1 = var1.PENDING_INCOMING;
            var1 = var12 === var1;
            if(!var1) { _fun0005_ip = 212; continue _fun0005 }
 197:
            var13 = _closure1_slot0;
            var12 = var13.isIgnored;
            var1 = var12.bind(var13)(var11);
 212:
            if(!var1) { _fun0005_ip = 225; continue _fun0005 }
 215:
            var1 = var2.push;
            var1 = var1.bind(var2)(var11);
 225:
            var11 = var7.bind(var8)();
            var1 = var11.done;
            var6 = var11;
            if(!var1) { _fun0005_ip = 57; continue _fun0005 }
 243:
            var1 = var5.reverse;
            var1 = var1.bind(var5)();
            var1 = var4.reverse;
            var1 = var1.bind(var4)();
            var1 = var3.reverse;
            var1 = var1.bind(var3)();
            var1 = {};
            var1['pendingIncomingIds'] = var5;
            var1['pendingOutgoingIds'] = var4;
            var1['spamIds'] = var3;
            var1['ignoredUserIds'] = var2;
            return var1;
        }
    };
    var3['getPendingRelationshipIds'] = var2;
    return var1;
})();