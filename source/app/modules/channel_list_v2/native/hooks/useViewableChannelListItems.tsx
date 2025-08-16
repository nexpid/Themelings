// app/modules/channel_list_v2/native/hooks/useViewableChannelListItems.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
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
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/channel_list_v2/native/hooks/useViewableChannelListItems.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useViewableChannelListItems() {
        var6 = _closure1_slot0;
        var7 = _closure1_slot1;
        var1 = 1;
        var3 = var7[var1];
        var2 = undefined;
        var9 = var6.bind(var2)(var3);
        var8 = var9.useSharedValue;
        var3 = new Array(0);
        var3 = var8.bind(var9)(var3);
        var _closure2_slot0 = var3;
        var1 = var7[var1];
        var6 = var6.bind(var2)(var1);
        var2 = var6.useSharedValue;
        var1 = new Array(0);
        var2 = var2.bind(var6)(var1);
        var _closure2_slot1 = var2;
        var1 = {};
        var7 = _closure1_slot2;
        var6 = var7.useCallback;
        var5 = new Array(2);
        var5[0] = var3;
        var5[1] = var2;
        var4 = function(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var1 = arg1;
                var4 = var1.viewableItems;
                var10 = new Array(0);
                var5 = new Array(0);
                var3 = _closure1_slot3;
                var1 = undefined;
                var8 = var3.bind(var1)(var4);
                var4 = var8.bind(var1)();
                var3 = var4.done;
                var7 = 'channel';
                var6 = 2;
                if(var3) { _fun0004_ip = 193; continue _fun0004 }
 53:
                var3 = var4.value;
                var9 = var3.isViewable;
                if(!var9) { _fun0004_ip = 100; continue _fun0004 }
 67:
                var12 = _closure1_slot0;
                var11 = _closure1_slot1;
                var11 = var11[var6];
                var13 = var12.bind(var1)(var11);
                var12 = var13.isReadableItem;
                var11 = var3.item;
                var9 = var12.bind(var13)(var11);
 100:
                if(!var9) { _fun0004_ip = 175; continue _fun0004 }
 103:
                var11 = var10.push;
                var9 = var3.item;
                var9 = var9.kind;
                if(!(var7 !== var9)) { _fun0004_ip = 135; continue _fun0004 }
 122:
                var9 = var3.item;
                var9 = var9.threadId;
                _fun0004_ip = 150; continue _fun0004;
 135:
                var12 = var3.item;
                var12 = var12.channel;
                var9 = var12.id;
 150:
                var9 = var11.bind(var10)(var9);
                var9 = var5.push;
                var3 = var3.item;
                var3 = var3.index;
                var3 = var9.bind(var5)(var3);
 175:
                var9 = var8.bind(var1)();
                var3 = var9.done;
                var4 = var9;
                if(!var3) { _fun0004_ip = 53; continue _fun0004 }
 193:
                var4 = _closure1_slot0;
                var6 = _closure1_slot1;
                var3 = 3;
                var2 = var6[var3];
                var9 = var4.bind(var1)(var2);
                var8 = var9.updateSharedValueArrayIfChanged;
                var7 = _closure2_slot0;
                var7 = var8.bind(var9)(var7, var10);
                var3 = var6[var3];
                var4 = var4.bind(var1)(var3);
                var3 = var4.updateSharedValueArrayIfChanged;
                var2 = _closure2_slot1;
                var2 = var3.bind(var4)(var2, var5);
                return var1;
            }
        };
        var4 = var6.bind(var7)(var4, var5);
        var1['handleViewableItemsChanged'] = var4;
        var1['viewableItemIds'] = var3;
        var1['viewableIndices'] = var2;
        return var1;
    };
    var3['useViewableChannelListItems'] = var2;
    return var1;
})();