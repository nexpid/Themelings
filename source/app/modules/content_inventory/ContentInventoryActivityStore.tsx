// app/modules/content_inventory/ContentInventoryActivityStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
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
 72: // try_end0
            _fun0001_ip = 76; continue _fun0001;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot13 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot13 = var1;
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
            if(!var2) { _fun0002_ip = 46; continue _fun0002 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 46:
            if(var2) { _fun0002_ip = 55; continue _fun0002 }
 49:
            var2 = var3.@@iterator;
 55:
            if(var2) { _fun0002_ip = 345; continue _fun0002 }
 61:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0002_ip = 323; continue _fun0002 }
 86:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0002_ip = 283; continue _fun0002 }
 96:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0002_ip = 270; continue _fun0002 }
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
            if(!var7) { _fun0002_ip = 163; continue _fun0002 }
 158:
            var7 = var3.constructor;
 163:
            var10 = var9;
            if(!var7) { _fun0002_ip = 179; continue _fun0002 }
 169:
            var7 = var3.constructor;
            var10 = var7.name;
 179:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0002_ip = 249; continue _fun0002 }
 187:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0002_ip = 249; continue _fun0002 }
 195:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0002_ip = 234; continue _fun0002 }
 205:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0002_ip = 247; continue _fun0002 }
 234:
            var9 = _closure1_slot15;
            var7 = var9.bind(var8)(var3, var8);
 247:
            _fun0002_ip = 265; continue _fun0002;
 249:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 265:
            var6 = var7;
            _fun0002_ip = 283; continue _fun0002;
 270:
            var7 = _closure1_slot15;
            var6 = var7.bind(var8)(var3, var8);
 283:
            var4 = var6;
            if(var4) { _fun0002_ip = 323; continue _fun0002 }
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
            if(!var4) { _fun0002_ip = 330; continue _fun0002 }
 326:
            _closure2_slot0 = var4;
 330:
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
 345:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot14 = var1;
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
    var _closure1_slot15 = var1;
    var2 = function entryToKey(arg1) {
        var1 = arg1;
        var5 = var1.author_id;
        var4 = var1.id;
        var1 = global;
        var1 = var1.HermesInternal;
        var3 = var1.concat;
        var2 = '';
        var1 = ':';
        var1 = var3.bind(var2)(var5, var1, var4);
        return var1;
    };
    var _closure1_slot16 = var2;
    var1 = function getMatchingActivity(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var4 = arg1;
            var _closure2_slot0 = var4;
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var7 = 9;
            var1 = var1[var7];
            var8 = undefined;
            var2 = var2.bind(var8)(var1);
            var1 = var2.isEntryExpired;
            var2 = var1.bind(var2)(var4);
            var1 = null;
            if(var2) { _fun0005_ip = 168; continue _fun0005 }
 50:
            var6 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var7];
            var6 = var6.bind(var8)(var2);
            var2 = var6.isEntryActive;
            var6 = var2.bind(var6)(var4);
            var2 = undefined;
            if(!var6) { _fun0005_ip = 165; continue _fun0005 }
 83:
            var7 = var4.author_type;
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var6 = 10;
            var6 = var10[var6];
            var6 = var9.bind(var8)(var6);
            var6 = var6.ContentInventoryAuthorType;
            var6 = var6.USER;
            var2 = undefined;
            if(!(var7 === var6)) { _fun0005_ip = 165; continue _fun0005 }
 127:
            var6 = _closure1_slot8;
            var5 = var6.getActivities;
            var4 = var4.author_id;
            var5 = var5.bind(var6)(var4);
            var4 = var5.find;
            var3 = function(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var5 = arg1;
                    var2 = var5.type;
                    var1 = _closure1_slot10;
                    var1 = var1.PLAYING;
                    if(!(var2 === var1)) { _fun0006_ip = 68; continue _fun0006 }
 25:
                    var2 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 11;
                    var1 = var4[var1];
                    var6 = undefined;
                    var7 = var2.bind(var6)(var1);
                    var4 = var7.isApplicationEntry;
                    var1 = _closure2_slot0;
                    var1 = var4.bind(var7)(var1);
                    if(var1) { _fun0006_ip = 182; continue _fun0006 }
 68:
                    var4 = var5.type;
                    var1 = _closure1_slot10;
                    var1 = var1.LISTENING;
                    var4 = var4 !== var1;
                    if(var4) { _fun0006_ip = 133; continue _fun0006 }
 90:
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var1 = 11;
                    var7 = var7[var1];
                    var1 = undefined;
                    var8 = var8.bind(var1)(var7);
                    var7 = var8.isListenedSessionEntry;
                    var1 = _closure2_slot0;
                    var1 = var7.bind(var8)(var1);
                    var4 = !var1;
 133:
                    var1 = !var4;
                    if(var4) { _fun0006_ip = 180; continue _fun0006 }
 139:
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var4 = 12;
                    var7 = var7[var4];
                    var4 = undefined;
                    var8 = var8.bind(var4)(var7);
                    var7 = var8.isMatchingListeningActivity;
                    var4 = _closure2_slot0;
                    var1 = var7.bind(var8)(var4, var5);
 180:
                    _fun0006_ip = 218; continue _fun0006;
 182:
                    var4 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var3 = 12;
                    var3 = var7[var3];
                    var4 = var4.bind(var6)(var3);
                    var3 = var4.isMatchingApplicationActivity;
                    var2 = _closure2_slot0;
                    var1 = var3.bind(var4)(var2, var5);
 218:
                    return var1;
                }
            };
            var2 = var4.bind(var5)(var3);
 165:
            var1 = var2;
 168:
            return var1;
        }
    };
    var _closure1_slot17 = var1;
    var1 = function detectMatchingActivityForEntries(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var1 = global;
            var2 = var1.Set;
            var3 = var2.prototype;
            var3 = Object.create(var3, {constructor: {value: var2}});
            var14 = var3;
            var2 = new var14[var2](var13);
            var3 = var2 instanceof Object ? var2 : var3;
            var1 = var1.Set;
            var2 = var1.prototype;
            var2 = Object.create(var2, {constructor: {value: var1}});
            var14 = var2;
            var1 = new var14[var1](var13);
            var2 = var1 instanceof Object ? var1 : var2;
            var4 = _closure1_slot14;
            var7 = undefined;
            var1 = arg1;
            var6 = var4.bind(var7)(var1);
            var4 = var6.bind(var7)();
            var1 = var4.done;
            var5 = var4;
            var4 = undefined;
            if(var1) { _fun0007_ip = 199; continue _fun0007 }
 88:
            var1 = var5.value;
            var10 = _closure1_slot17;
            var9 = var1.content;
            var11 = var10.bind(var7)(var9);
            if(!(var7 !== var11)) { _fun0007_ip = 184; continue _fun0007 }
 111:
            var9 = _closure1_slot16;
            var1 = var1.content;
            var1 = var9.bind(var7)(var1);
            var9 = var2.add;
            var9 = var9.bind(var2)(var1);
            var10 = _closure1_slot12;
            var9 = var10.get;
            var9 = var9.bind(var10)(var1);
            var4 = var1;
            if(!(var11 !== var9)) { _fun0007_ip = 184; continue _fun0007 }
 156:
            var9 = var3.add;
            var9 = var9.bind(var3)(var1);
            var10 = _closure1_slot12;
            var9 = var10.set;
            var9 = var9.bind(var10)(var1, var11);
            var4 = var1;
 184:
            var9 = var6.bind(var7)();
            var1 = var9.done;
            var5 = var9;
            if(!var1) { _fun0007_ip = 88; continue _fun0007 }
 199:
            var1 = {};
            var1['updatedKeys'] = var3;
            var1['matchedKeys'] = var2;
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var1 = function handlePresenceUpdates() {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var1 = global;
            var4 = var1.Array;
            var3 = var4.from;
            var5 = _closure1_slot12;
            var2 = var5.keys;
            var2 = var2.bind(var5)();
            var8 = var3.bind(var4)(var2);
            var2 = var1.Set;
            var3 = var2.prototype;
            var3 = Object.create(var3, {constructor: {value: var2}});
            var21 = var3;
            var2 = new var21[var2](var20);
            var11 = var2 instanceof Object ? var2 : var3;
            var _closure2_slot0 = var11;
            var1 = var1.Set;
            var2 = var1.prototype;
            var2 = Object.create(var2, {constructor: {value: var1}});
            var21 = var2;
            var1 = new var21[var1](var20);
            var10 = var1 instanceof Object ? var1 : var2;
            var2 = _closure1_slot14;
            var3 = _closure1_slot9;
            var1 = var3.getFeeds;
            var3 = var1.bind(var3)();
            var1 = var3.values;
            var1 = var1.bind(var3)();
            var6 = undefined;
            var5 = var2.bind(var6)(var1);
            var3 = var5.bind(var6)();
            var2 = var3.done;
            var9 = 0;
            var4 = var3;
            var3 = false;
            var1 = false;
            if(var2) { _fun0008_ip = 353; continue _fun0008 }
 152:
            var14 = var4.value;
            var13 = _closure1_slot18;
            var2 = var11.size;
            if(!(!(var2 > var9))) { _fun0008_ip = 178; continue _fun0008 }
 170:
            var2 = var14.entries;
            _fun0008_ip = 201; continue _fun0008;
 178:
            var16 = var14.entries;
            var15 = var16.filter;
            var14 = function(arg1) {
                var3 = _closure2_slot0;
                var2 = var3.has;
                var5 = _closure1_slot16;
                var1 = arg1;
                var4 = var1.content;
                var1 = undefined;
                var1 = var5.bind(var1)(var4);
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                return var1;
            };
            var2 = var15.bind(var16)(var14);
 201:
            var13 = var13.bind(var6)(var2);
            var2 = var13.updatedKeys;
            var14 = var13.matchedKeys;
            var13 = _closure1_slot14;
            var16 = var13.bind(var6)(var2);
            var15 = var16.bind(var6)();
            var13 = var15.done;
            if(var13) { _fun0008_ip = 269; continue _fun0008 }
 239:
            var17 = var15.value;
            var13 = var11.add;
            var13 = var13.bind(var11)(var17);
            var17 = var16.bind(var6)();
            var13 = var17.done;
            var15 = var17;
            if(!var13) { _fun0008_ip = 239; continue _fun0008 }
 269:
            var13 = _closure1_slot14;
            var15 = var13.bind(var6)(var14);
            var14 = var15.bind(var6)();
            var13 = var14.done;
            if(var13) { _fun0008_ip = 320; continue _fun0008 }
 290:
            var16 = var14.value;
            var13 = var10.add;
            var13 = var13.bind(var10)(var16);
            var16 = var15.bind(var6)();
            var13 = var16.done;
            var14 = var16;
            if(!var13) { _fun0008_ip = 290; continue _fun0008 }
 320:
            if(var3) { _fun0008_ip = 332; continue _fun0008 }
 323:
            var2 = var2.size;
            var3 = var2 > var9;
 332:
            var14 = var5.bind(var6)();
            var2 = var14.done;
            var4 = var14;
            var1 = var3;
            if(!var2) { _fun0008_ip = 152; continue _fun0008 }
 353:
            var3 = _closure1_slot14;
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 13;
            var2 = var5[var2];
            var5 = var4.bind(var6)(var2);
            var4 = var5.difference;
            var2 = new Array(0);
            var20 = var2;
            var19 = var10;
            var18 = 0;
            var9 = arraySpread(var20, var19, var18);
            var2 = var4.bind(var5)(var8, var2);
            var5 = var3.bind(var6)(var2);
            var3 = var5.bind(var6)();
            var2 = var3.done;
            if(var2) { _fun0008_ip = 458; continue _fun0008 }
 422:
            var9 = var3.value;
            var8 = _closure1_slot12;
            var2 = var8.delete;
            var2 = var2.bind(var8)(var9);
            var8 = var5.bind(var6)();
            var2 = var8.done;
            var3 = var8;
            var1 = true;
            if(!var2) { _fun0008_ip = 422; continue _fun0008 }
 458:
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var4 = global;
    var11 = var4.Object;
    var10 = var11.defineProperty;
    var9 = {};
    var1 = true;
    var9['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var9);
    var1 = 0;
    var9 = var7[var1];
    var1 = undefined;
    var9 = var8.bind(var1)(var9);
    var _closure1_slot3 = var9;
    var9 = 1;
    var9 = var7[var9];
    var9 = var8.bind(var1)(var9);
    var _closure1_slot4 = var9;
    var9 = 2;
    var9 = var7[var9];
    var9 = var8.bind(var1)(var9);
    var _closure1_slot5 = var9;
    var9 = 3;
    var9 = var7[var9];
    var9 = var8.bind(var1)(var9);
    var _closure1_slot6 = var9;
    var9 = 4;
    var9 = var7[var9];
    var9 = var8.bind(var1)(var9);
    var _closure1_slot7 = var9;
    var9 = 5;
    var9 = var7[var9];
    var9 = var8.bind(var1)(var9);
    var _closure1_slot8 = var9;
    var9 = 6;
    var9 = var7[var9];
    var9 = var8.bind(var1)(var9);
    var _closure1_slot9 = var9;
    var9 = 7;
    var9 = var7[var9];
    var9 = var6.bind(var1)(var9);
    var9 = var9.ActivityTypes;
    var _closure1_slot10 = var9;
    var11 = var4.Set;
    var9 = 8;
    var9 = var7[var9];
    var9 = var6.bind(var1)(var9);
    var9 = var9.ContentInventoryEntryType;
    var10 = var9.LISTENED_SESSION;
    var9 = new Array(1);
    var9[0] = var10;
    var10 = var11.prototype;
    var10 = Object.create(var10, {constructor: {value: var11}});
    var15 = var10;
    var14 = var9;
    var9 = new var15[var11](var14, var13);
    var9 = var9 instanceof Object ? var9 : var10;
    var _closure1_slot11 = var9;
    var4 = var4.Map;
    var9 = var4.prototype;
    var9 = Object.create(var9, {constructor: {value: var4}});
    var15 = var9;
    var4 = new var15[var4](var14);
    var4 = var4 instanceof Object ? var4 : var9;
    var _closure1_slot12 = var4;
    var4 = 14;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var9 = var4.Store;
    var4 = function(arg1) {
        var4 = function ContentInventoryActivityStore(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                var5 = this;
                var13 = 0;
                var1 = copyRestArgs(var13);
                var8 = _closure1_slot3;
                var3 = _closure2_slot0;
                var4 = undefined;
                var8 = var8.bind(var4)(var5, var3);
                var10 = new Array(0);
                var13 = var10;
                var12 = var1;
                var11 = 0;
                var1 = arraySpread(var13, var12, var11);
                var1 = _closure1_slot6;
                var9 = var1.bind(var4)(var3);
                var3 = _closure1_slot5;
                var1 = _closure1_slot13;
                var1 = var1.bind(var4)();
                if(var1) { _fun0009_ip = 86; continue _fun0009 }
 73:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var5, var10);
                _fun0009_ip = 120; continue _fun0009;
 86:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var4)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
 120:
                var1 = var3.bind(var4)(var5, var1);
                var _closure3_slot0 = var1;
                var2 = function(arg1) {
                    _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                        var5 = arg1;
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 9;
                        var3 = var3[var1];
                        var1 = undefined;
                        var3 = var4.bind(var1)(var3);
                        var1 = var3.isEntryExpired;
                        var1 = var1.bind(var3)(var5);
                        var1 = !var1;
                        if(!var1) { _fun0010_ip = 98; continue _fun0010 }
 45:
                        var4 = _closure1_slot11;
                        var3 = var4.has;
                        var2 = var5.content_type;
                        var2 = var3.bind(var4)(var2);
                        var2 = !var2;
                        if(var2) { _fun0010_ip = 95; continue _fun0010 }
 71:
                        var4 = _closure3_slot0;
                        var3 = var4.getMatchingActivity;
                        var4 = var3.bind(var4)(var5);
                        var3 = null;
                        var2 = var3 != var4;
 95:
                        var1 = var2;
 98:
                        return var1;
                    }
                };
                var1['canRenderContent'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value() {
            var4 = this;
            var5 = var4.waitFor;
            var3 = _closure1_slot9;
            var2 = _closure1_slot8;
            var2 = var5.bind(var4)(var3, var2);
            var3 = var4.syncWith;
            var5 = _closure1_slot8;
            var2 = new Array(1);
            var2[0] = var5;
            var1 = _closure1_slot19;
            var1 = var3.bind(var4)(var2, var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(2);
        var1[0] = var5;
        var5 = {};
        var7 = 'getMatchingActivity';
        var5['key'] = var7;
        var6 = function value(arg1) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                var6 = arg1;
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 9;
                var1 = var4[var1];
                var5 = undefined;
                var3 = var3.bind(var5)(var1);
                var1 = var3.isEntryExpired;
                var3 = var1.bind(var3)(var6);
                var1 = null;
                if(var3) { _fun0011_ip = 67; continue _fun0011 }
 44:
                var4 = _closure1_slot12;
                var3 = var4.get;
                var2 = _closure1_slot16;
                var2 = var2.bind(var5)(var6);
                var1 = var3.bind(var4)(var2);
 67:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[1] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var9 = var4.bind(var1)(var9);
    var4 = 'ContentInventoryActivityStore';
    var9['displayName'] = var4;
    var4 = 15;
    var4 = var7[var4];
    var14 = var8.bind(var1)(var4);
    var4 = {};
    var10 = function handleConnectionOpen() {
        var2 = _closure1_slot12;
        var1 = var2.clear;
        var1 = var1.bind(var2)();
        var1 = undefined;
        return var1;
    };
    var4['CONNECTION_OPEN'] = var10;
    var5 = function handleSetContentInventoryFeed(arg1) {
        var1 = arg1;
        var1 = var1.feed;
        var3 = _closure1_slot18;
        var2 = var1.entries;
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var1 = var1.updatedKeys;
        var2 = var1.size;
        var1 = 0;
        var1 = var2 > var1;
        return var1;
    };
    var4['CONTENT_INVENTORY_SET_FEED'] = var5;
    var5 = var9.prototype;
    var5 = Object.create(var5, {constructor: {value: var9}});
    var15 = var5;
    var13 = var4;
    var4 = new var15[var9](var14, var13, var12);
    var4 = var4 instanceof Object ? var4 : var5;
    var5 = 16;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/content_inventory/ContentInventoryActivityStore.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['entryToKey'] = var2;
    return var1;
})();