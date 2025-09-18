// app/modules/interaction_components/InteractionComponentUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var8;
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
            if(var2) { _fun0001_ip = 343; continue _fun0001 }
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
            var9 = _closure1_slot6;
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
            var7 = _closure1_slot6;
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
 343:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot5 = var1;
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
    var _closure1_slot6 = var1;
    var5 = function flattenComponents(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var1 = global;
            var1 = var1.Map;
            var2 = var1.prototype;
            var2 = Object.create(var2, {constructor: {value: var1}});
            var10 = var2;
            var1 = new var10[var1](var9);
            var1 = var1 instanceof Object ? var1 : var2;
            var3 = _closure1_slot5;
            var5 = undefined;
            var2 = arg1;
            var4 = var3.bind(var5)(var2);
            var3 = var4.bind(var5)();
            var2 = var3.done;
            if(var2) { _fun0004_ip = 87; continue _fun0004 }
 57:
            var7 = _closure1_slot8;
            var2 = var3.value;
            var2 = var7.bind(var5)(var1, var2);
            var7 = var4.bind(var5)();
            var2 = var7.done;
            var3 = var7;
            if(!var2) { _fun0004_ip = 57; continue _fun0004 }
 87:
            return var1;
        }
    };
    var _closure1_slot7 = var5;
    var1 = function flattenComponent(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var6 = arg1;
            var3 = arg2;
            var _closure2_slot0 = var6;
            var4 = var6.set;
            var1 = var3.id;
            var1 = var4.bind(var6)(var1, var3);
            var7 = var3.type;
            var8 = _closure1_slot0;
            var1 = _closure1_slot2;
            var9 = 3;
            var5 = var1[var9];
            var1 = undefined;
            var5 = var8.bind(var1)(var5);
            var5 = var5.ComponentType;
            var5 = var5.ACTION_ROW;
            if(!(var5 !== var7)) { _fun0005_ip = 205; continue _fun0005 }
 77:
            var8 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var9];
            var5 = var8.bind(var1)(var5);
            var5 = var5.ComponentType;
            var5 = var5.SECTION;
            if(!(var5 !== var7)) { _fun0005_ip = 166; continue _fun0005 }
 110:
            var8 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var9];
            var5 = var8.bind(var1)(var5);
            var5 = var5.ComponentType;
            var5 = var5.CONTAINER;
            if(!(var5 === var7)) { _fun0005_ip = 226; continue _fun0005 }
 143:
            var8 = var3.components;
            var7 = var8.forEach;
            var5 = function(arg1) {
                var4 = _closure1_slot8;
                var3 = _closure2_slot0;
                var1 = undefined;
                var2 = arg1;
                var2 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var5 = var7.bind(var8)(var5);
            _fun0005_ip = 226; continue _fun0005;
 166:
            var8 = var3.components;
            var7 = var8.forEach;
            var5 = function(arg1) {
                var4 = _closure1_slot8;
                var3 = _closure2_slot0;
                var1 = undefined;
                var2 = arg1;
                var2 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var5 = var7.bind(var8)(var5);
            var5 = _closure1_slot8;
            var4 = var3.accessory;
            var4 = var5.bind(var1)(var6, var4);
            _fun0005_ip = 226; continue _fun0005;
 205:
            var4 = var3.components;
            var3 = var4.forEach;
            var2 = function(arg1) {
                var4 = _closure1_slot8;
                var3 = _closure2_slot0;
                var1 = undefined;
                var2 = arg1;
                var2 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var2 = var3.bind(var4)(var2);
 226:
            return var1;
        }
    };
    var _closure1_slot8 = var1;
    var4 = function findChildComponent(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var2 = arg1;
            var4 = arg2;
            var _closure2_slot0 = var4;
            var6 = var2.type;
            var9 = _closure1_slot0;
            var3 = _closure1_slot2;
            var8 = 3;
            var7 = var3[var8];
            var3 = undefined;
            var7 = var9.bind(var3)(var7);
            var7 = var7.ComponentType;
            var7 = var7.ACTION_ROW;
            if(!(var7 !== var6)) { _fun0006_ip = 222; continue _fun0006 }
 61:
            var9 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var8];
            var7 = var9.bind(var3)(var7);
            var7 = var7.ComponentType;
            var7 = var7.SECTION;
            if(!(var7 !== var6)) { _fun0006_ip = 164; continue _fun0006 }
 94:
            var7 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var8];
            var5 = var7.bind(var3)(var5);
            var5 = var5.ComponentType;
            var5 = var5.CONTAINER;
            if(!(var5 !== var6)) { _fun0006_ip = 129; continue _fun0006 }
 127:
            return var3;
 129:
            var6 = var2.components;
            var5 = var6.find;
            var3 = function(arg1) {
                var1 = arg1;
                var2 = var1.id;
                var1 = _closure2_slot0;
                var1 = var2 === var1;
                return var1;
            };
            var5 = var5.bind(var6)(var3);
            var3 = null;
            var6 = var3 != var5;
            if(!var6) { _fun0006_ip = 162; continue _fun0006 }
 159:
            var3 = var5;
 162:
            return var3;
 164:
            var3 = var2.accessory;
            var3 = var3.id;
            if(!(var3 !== var4)) { _fun0006_ip = 214; continue _fun0006 }
 179:
            var5 = var2.components;
            var4 = var5.find;
            var3 = function(arg1) {
                var1 = arg1;
                var2 = var1.id;
                var1 = _closure2_slot0;
                var1 = var2 === var1;
                return var1;
            };
            var4 = var4.bind(var5)(var3);
            var3 = null;
            var5 = var3 != var4;
            if(!var5) { _fun0006_ip = 212; continue _fun0006 }
 209:
            var3 = var4;
 212:
            _fun0006_ip = 220; continue _fun0006;
 214:
            var3 = var2.accessory;
 220:
            return var3;
 222:
            var3 = var2.components;
            var2 = var3.find;
            var1 = function(arg1) {
                var1 = arg1;
                var2 = var1.id;
                var1 = _closure2_slot0;
                var1 = var2 === var1;
                return var1;
            };
            var2 = var2.bind(var3)(var1);
            var1 = null;
            var3 = var1 != var2;
            if(!var3) { _fun0006_ip = 255; continue _fun0006 }
 252:
            var1 = var2;
 255:
            return var1;
        }
    };
    var _closure1_slot9 = var4;
    var1 = function getComponentChildren(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var1 = arg1;
            var4 = var1.type;
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var7 = 3;
            var3 = var3[var7];
            var6 = undefined;
            var3 = var5.bind(var6)(var3);
            var3 = var3.ComponentType;
            var3 = var3.ACTION_ROW;
            if(!(var3 !== var4)) { _fun0007_ip = 756; continue _fun0007 }
 52:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var3 = var5.bind(var6)(var3);
            var3 = var3.ComponentType;
            var3 = var3.SECTION;
            if(!(var3 !== var4)) { _fun0007_ip = 717; continue _fun0007 }
 88:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var3 = var5.bind(var6)(var3);
            var3 = var3.ComponentType;
            var3 = var3.CONTAINER;
            if(!(var3 !== var4)) { _fun0007_ip = 709; continue _fun0007 }
 124:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var3 = var5.bind(var6)(var3);
            var3 = var3.ComponentType;
            var3 = var3.LABEL;
            if(!(var3 !== var4)) { _fun0007_ip = 693; continue _fun0007 }
 160:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var3 = var5.bind(var6)(var3);
            var3 = var3.ComponentType;
            var3 = var3.BUTTON;
            if(!(var3 !== var4)) { _fun0007_ip = 687; continue _fun0007 }
 196:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var3 = var5.bind(var6)(var3);
            var3 = var3.ComponentType;
            var3 = var3.STRING_SELECT;
            if(!(var3 !== var4)) { _fun0007_ip = 687; continue _fun0007 }
 232:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var3 = var5.bind(var6)(var3);
            var3 = var3.ComponentType;
            var3 = var3.TEXT_INPUT;
            if(!(var3 !== var4)) { _fun0007_ip = 687; continue _fun0007 }
 268:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var3 = var5.bind(var6)(var3);
            var3 = var3.ComponentType;
            var3 = var3.USER_SELECT;
            if(!(var3 !== var4)) { _fun0007_ip = 687; continue _fun0007 }
 304:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var3 = var5.bind(var6)(var3);
            var3 = var3.ComponentType;
            var3 = var3.ROLE_SELECT;
            if(!(var3 !== var4)) { _fun0007_ip = 687; continue _fun0007 }
 340:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var3 = var5.bind(var6)(var3);
            var3 = var3.ComponentType;
            var3 = var3.MENTIONABLE_SELECT;
            if(!(var3 !== var4)) { _fun0007_ip = 687; continue _fun0007 }
 376:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var3 = var5.bind(var6)(var3);
            var3 = var3.ComponentType;
            var3 = var3.CHANNEL_SELECT;
            if(!(var3 !== var4)) { _fun0007_ip = 687; continue _fun0007 }
 412:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var3 = var5.bind(var6)(var3);
            var3 = var3.ComponentType;
            var3 = var3.TEXT_DISPLAY;
            if(!(var3 !== var4)) { _fun0007_ip = 687; continue _fun0007 }
 448:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var3 = var5.bind(var6)(var3);
            var3 = var3.ComponentType;
            var3 = var3.THUMBNAIL;
            if(!(var3 !== var4)) { _fun0007_ip = 687; continue _fun0007 }
 484:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var3 = var5.bind(var6)(var3);
            var3 = var3.ComponentType;
            var3 = var3.MEDIA_GALLERY;
            if(!(var3 !== var4)) { _fun0007_ip = 687; continue _fun0007 }
 520:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var3 = var5.bind(var6)(var3);
            var3 = var3.ComponentType;
            var3 = var3.FILE;
            if(!(var3 !== var4)) { _fun0007_ip = 687; continue _fun0007 }
 556:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var3 = var5.bind(var6)(var3);
            var3 = var3.ComponentType;
            var3 = var3.SEPARATOR;
            if(!(var3 !== var4)) { _fun0007_ip = 687; continue _fun0007 }
 589:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var3 = var5.bind(var6)(var3);
            var3 = var3.ComponentType;
            var3 = var3.CONTENT_INVENTORY_ENTRY;
            if(!(var3 !== var4)) { _fun0007_ip = 687; continue _fun0007 }
 622:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var3 = var5.bind(var6)(var3);
            var3 = var3.ComponentType;
            var3 = var3.FILE_UPLOAD;
            if(!(var3 !== var4)) { _fun0007_ip = 687; continue _fun0007 }
 655:
            var5 = _closure1_slot3;
            var4 = var5.warn;
            var3 = var1.type;
            var2 = 'getComponentChildren: Unknown component type';
            var2 = var4.bind(var5)(var2, var3);
            var2 = new Array(0);
            return var2;
 687:
            var2 = new Array(0);
            return var2;
 693:
            var3 = var1.component;
            var2 = new Array(1);
            var2[0] = var3;
            return var2;
 709:
            var2 = var1.components;
            return var2;
 717:
            var9 = var1.components;
            var2 = new Array(1);
            var8 = 0;
            var10 = var2;
            var4 = arraySpread(var10, var9, var8);
            var3 = var1.accessory;
            var2[var4] = var3;
            var3 = 1;
            var3 = var4 + var3;
            return var2;
 756:
            var1 = var1.components;
            return var1;
        }
    };
    var _closure1_slot10 = var1;
    var1 = function transformComponent(arg1, arg2) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var2 = arg1;
            var5 = arg2;
            var _closure2_slot0 = var5;
            var9 = function getChildComponent(arg1, arg2) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var4 = _closure1_slot11;
                    var6 = _closure2_slot0;
                    var3 = new Array(1);
                    var5 = 0;
                    var7 = var3;
                    var2 = arraySpread(var7, var6, var5);
                    var1 = arg2;
                    var3[var2] = var1;
                    var1 = 1;
                    var1 = var2 + var1;
                    var2 = undefined;
                    var1 = arg1;
                    var2 = var4.bind(var2)(var1, var3);
                    var1 = null;
                    var3 = var1 == var2;
                    if(var3) { _fun0009_ip = 65; continue _fun0009 }
 62:
                    var1 = var2;
 65:
                    return var1;
                }
            };
            var _closure2_slot2 = var9;
            var11 = var2.type;
            var7 = _closure1_slot0;
            var4 = _closure1_slot2;
            var8 = 3;
            var6 = var4[var8];
            var4 = undefined;
            var6 = var7.bind(var4)(var6);
            var6 = var6.ComponentType;
            var7 = var6.ACTION_ROW;
            var10 = true;
            var6 = true;
            if(!(var7 !== var11)) { _fun0008_ip = 748; continue _fun0008 }
 74:
            var12 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var8];
            var7 = var12.bind(var4)(var7);
            var7 = var7.ComponentType;
            var7 = var7.BUTTON;
            var6 = true;
            if(!(var7 !== var11)) { _fun0008_ip = 748; continue _fun0008 }
 112:
            var12 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var8];
            var7 = var12.bind(var4)(var7);
            var7 = var7.ComponentType;
            var7 = var7.STRING_SELECT;
            var6 = true;
            if(!(var7 !== var11)) { _fun0008_ip = 748; continue _fun0008 }
 150:
            var12 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var8];
            var7 = var12.bind(var4)(var7);
            var7 = var7.ComponentType;
            var7 = var7.TEXT_INPUT;
            var6 = true;
            if(!(var7 !== var11)) { _fun0008_ip = 748; continue _fun0008 }
 188:
            var12 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var8];
            var7 = var12.bind(var4)(var7);
            var7 = var7.ComponentType;
            var7 = var7.USER_SELECT;
            var6 = true;
            if(!(var7 !== var11)) { _fun0008_ip = 748; continue _fun0008 }
 226:
            var12 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var8];
            var7 = var12.bind(var4)(var7);
            var7 = var7.ComponentType;
            var7 = var7.ROLE_SELECT;
            var6 = true;
            if(!(var7 !== var11)) { _fun0008_ip = 748; continue _fun0008 }
 264:
            var12 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var8];
            var7 = var12.bind(var4)(var7);
            var7 = var7.ComponentType;
            var7 = var7.MENTIONABLE_SELECT;
            var6 = true;
            if(!(var7 !== var11)) { _fun0008_ip = 748; continue _fun0008 }
 302:
            var12 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var8];
            var7 = var12.bind(var4)(var7);
            var7 = var7.ComponentType;
            var7 = var7.CHANNEL_SELECT;
            var6 = true;
            if(!(var7 !== var11)) { _fun0008_ip = 748; continue _fun0008 }
 340:
            var12 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var8];
            var7 = var12.bind(var4)(var7);
            var7 = var7.ComponentType;
            var7 = var7.SECTION;
            var6 = true;
            if(!(var7 !== var11)) { _fun0008_ip = 748; continue _fun0008 }
 378:
            var12 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var8];
            var7 = var12.bind(var4)(var7);
            var7 = var7.ComponentType;
            var7 = var7.TEXT_DISPLAY;
            var6 = true;
            if(!(var7 !== var11)) { _fun0008_ip = 748; continue _fun0008 }
 416:
            var12 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var8];
            var7 = var12.bind(var4)(var7);
            var7 = var7.ComponentType;
            var7 = var7.THUMBNAIL;
            var6 = true;
            if(!(var7 !== var11)) { _fun0008_ip = 748; continue _fun0008 }
 454:
            var12 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var8];
            var7 = var12.bind(var4)(var7);
            var7 = var7.ComponentType;
            var7 = var7.MEDIA_GALLERY;
            var6 = true;
            if(!(var7 !== var11)) { _fun0008_ip = 748; continue _fun0008 }
 492:
            var12 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var8];
            var7 = var12.bind(var4)(var7);
            var7 = var7.ComponentType;
            var7 = var7.FILE;
            var6 = true;
            if(!(var7 !== var11)) { _fun0008_ip = 748; continue _fun0008 }
 530:
            var12 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var8];
            var7 = var12.bind(var4)(var7);
            var7 = var7.ComponentType;
            var7 = var7.SEPARATOR;
            var6 = true;
            if(!(var7 !== var11)) { _fun0008_ip = 748; continue _fun0008 }
 568:
            var12 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var8];
            var7 = var12.bind(var4)(var7);
            var7 = var7.ComponentType;
            var7 = var7.CONTAINER;
            var6 = true;
            if(!(var7 !== var11)) { _fun0008_ip = 748; continue _fun0008 }
 606:
            var12 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var8];
            var7 = var12.bind(var4)(var7);
            var7 = var7.ComponentType;
            var7 = var7.LABEL;
            var6 = true;
            if(!(var7 !== var11)) { _fun0008_ip = 748; continue _fun0008 }
 641:
            var12 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var8];
            var7 = var12.bind(var4)(var7);
            var7 = var7.ComponentType;
            var7 = var7.FILE_UPLOAD;
            var6 = true;
            if(!(var7 !== var11)) { _fun0008_ip = 748; continue _fun0008 }
 676:
            var12 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var8];
            var7 = var12.bind(var4)(var7);
            var7 = var7.ComponentType;
            var7 = var7.CONTENT_INVENTORY_ENTRY;
            var6 = undefined;
            if(!(var7 === var11)) { _fun0008_ip = 748; continue _fun0008 }
 711:
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var7 = 5;
            var7 = var12[var7];
            var12 = var11.bind(var4)(var7);
            var11 = var12.isContentInventoryEmbedEnabled;
            var7 = 'canShowComponent';
            var6 = var11.bind(var12)(var7);
 748:
            if(var6) { _fun0008_ip = 755; continue _fun0008 }
 751:
            var6 = null;
            return var6;
 755:
            var _closure2_slot1 = var10;
            var7 = var2.type;
            var11 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var8];
            var6 = var11.bind(var4)(var6);
            var6 = var6.ComponentType;
            var6 = var6.ACTION_ROW;
            if(!(var6 !== var7)) { _fun0008_ip = 3789; continue _fun0008 }
 800:
            var11 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var8];
            var6 = var11.bind(var4)(var6);
            var6 = var6.ComponentType;
            var6 = var6.BUTTON;
            if(!(var6 !== var7)) { _fun0008_ip = 3646; continue _fun0008 }
 836:
            var11 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var8];
            var6 = var11.bind(var4)(var6);
            var6 = var6.ComponentType;
            var6 = var6.STRING_SELECT;
            if(!(var6 !== var7)) { _fun0008_ip = 3437; continue _fun0008 }
 872:
            var11 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var8];
            var6 = var11.bind(var4)(var6);
            var6 = var6.ComponentType;
            var6 = var6.TEXT_INPUT;
            if(!(var6 !== var7)) { _fun0008_ip = 3308; continue _fun0008 }
 908:
            var11 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var8];
            var6 = var11.bind(var4)(var6);
            var6 = var6.ComponentType;
            var6 = var6.USER_SELECT;
            if(!(var6 !== var7)) { _fun0008_ip = 3112; continue _fun0008 }
 944:
            var11 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var8];
            var6 = var11.bind(var4)(var6);
            var6 = var6.ComponentType;
            var6 = var6.ROLE_SELECT;
            if(!(var6 !== var7)) { _fun0008_ip = 2916; continue _fun0008 }
 980:
            var11 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var8];
            var6 = var11.bind(var4)(var6);
            var6 = var6.ComponentType;
            var6 = var6.MENTIONABLE_SELECT;
            if(!(var6 !== var7)) { _fun0008_ip = 2720; continue _fun0008 }
 1016:
            var11 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var8];
            var6 = var11.bind(var4)(var6);
            var6 = var6.ComponentType;
            var6 = var6.CHANNEL_SELECT;
            if(!(var6 !== var7)) { _fun0008_ip = 2513; continue _fun0008 }
 1052:
            var11 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var8];
            var6 = var11.bind(var4)(var6);
            var6 = var6.ComponentType;
            var6 = var6.SECTION;
            if(!(var6 !== var7)) { _fun0008_ip = 2352; continue _fun0008 }
 1088:
            var11 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var8];
            var6 = var11.bind(var4)(var6);
            var6 = var6.ComponentType;
            var6 = var6.TEXT_DISPLAY;
            if(!(var6 !== var7)) { _fun0008_ip = 2293; continue _fun0008 }
 1124:
            var11 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var8];
            var6 = var11.bind(var4)(var6);
            var6 = var6.ComponentType;
            var6 = var6.THUMBNAIL;
            if(!(var6 !== var7)) { _fun0008_ip = 2189; continue _fun0008 }
 1160:
            var11 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var8];
            var6 = var11.bind(var4)(var6);
            var6 = var6.ComponentType;
            var6 = var6.MEDIA_GALLERY;
            if(!(var6 !== var7)) { _fun0008_ip = 2113; continue _fun0008 }
 1196:
            var11 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var8];
            var6 = var11.bind(var4)(var6);
            var6 = var6.ComponentType;
            var6 = var6.FILE;
            if(!(var6 !== var7)) { _fun0008_ip = 2000; continue _fun0008 }
 1232:
            var11 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var8];
            var6 = var11.bind(var4)(var6);
            var6 = var6.ComponentType;
            var6 = var6.SEPARATOR;
            if(!(var6 !== var7)) { _fun0008_ip = 1885; continue _fun0008 }
 1268:
            var11 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var8];
            var6 = var11.bind(var4)(var6);
            var6 = var6.ComponentType;
            var6 = var6.CONTENT_INVENTORY_ENTRY;
            if(!(var6 !== var7)) { _fun0008_ip = 1806; continue _fun0008 }
 1304:
            var11 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var8];
            var6 = var11.bind(var4)(var6);
            var6 = var6.ComponentType;
            var6 = var6.CONTAINER;
            if(!(var6 !== var7)) { _fun0008_ip = 1629; continue _fun0008 }
 1340:
            var11 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var8];
            var6 = var11.bind(var4)(var6);
            var6 = var6.ComponentType;
            var6 = var6.LABEL;
            if(!(var6 !== var7)) { _fun0008_ip = 1530; continue _fun0008 }
 1376:
            var11 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var8];
            var6 = var11.bind(var4)(var6);
            var6 = var6.ComponentType;
            var6 = var6.FILE_UPLOAD;
            if(!(var6 !== var7)) { _fun0008_ip = 1439; continue _fun0008 }
 1409:
            var12 = _closure1_slot3;
            var11 = var12.warn;
            var7 = var2.type;
            var6 = 'transformComponent: Unknown component type';
            var6 = var11.bind(var12)(var6, var7);
            var6 = null;
            return var6;
 1439:
            var6 = {};
            var7 = var2.type;
            var6['type'] = var7;
            var7 = _closure1_slot12;
            var7 = var7.bind(var4)(var5);
            var6['id'] = var7;
            var7 = var2.custom_id;
            var6['customId'] = var7;
            var7 = var2.disabled;
            var6['disabled'] = var7;
            var11 = var2.required;
            var7 = null;
            var7 = var7 != var11;
            if(!var7) { _fun0008_ip = 1501; continue _fun0008 }
 1498:
            var7 = var11;
 1501:
            var6['required'] = var7;
            var7 = var2.min_values;
            var6['minValues'] = var7;
            var7 = var2.max_values;
            var6['maxValues'] = var7;
            return var6;
 1530:
            var7 = var2.component;
            var6 = 0;
            var11 = var9.bind(var4)(var7, var6);
            var6 = null;
            var7 = var6 == var11;
            if(var7) { _fun0008_ip = 1627; continue _fun0008 }
 1553:
            var7 = {};
            var13 = _closure1_slot0;
            var12 = _closure1_slot2;
            var12 = var12[var8];
            var12 = var13.bind(var4)(var12);
            var12 = var12.ComponentType;
            var12 = var12.LABEL;
            var7['type'] = var12;
            var12 = _closure1_slot12;
            var12 = var12.bind(var4)(var5);
            var7['id'] = var12;
            var12 = var2.label;
            var7['label'] = var12;
            var12 = var2.description;
            var7['description'] = var12;
            var7['component'] = var11;
            var6 = var7;
 1627:
            return var6;
 1629:
            var11 = var2.components;
            var7 = var11.map;
            var6 = function(arg1, arg2) {
                var4 = _closure2_slot2;
                var3 = undefined;
                var2 = arg1;
                var1 = arg2;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var13 = var7.bind(var11)(var6);
            var7 = var13.filter;
            var12 = _closure1_slot0;
            var11 = _closure1_slot2;
            var6 = 7;
            var6 = var11[var6];
            var6 = var12.bind(var4)(var6);
            var6 = var6.isNotNullish;
            var7 = var7.bind(var13)(var6);
            var6 = {};
            var11 = var11[var8];
            var11 = var12.bind(var4)(var11);
            var11 = var11.ComponentType;
            var11 = var11.CONTAINER;
            var6['type'] = var11;
            var11 = _closure1_slot12;
            var11 = var11.bind(var4)(var5);
            var6['id'] = var11;
            var12 = var2.accent_color;
            var11 = null;
            var12 = var11 != var12;
            var11 = undefined;
            if(!var12) { _fun0008_ip = 1783; continue _fun0008 }
 1743:
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var12 = 10;
            var12 = var14[var12];
            var15 = var13.bind(var4)(var12);
            var14 = var15.int2hsl;
            var13 = var2.accent_color;
            var12 = false;
            var11 = var14.bind(var15)(var13, var12);
 1783:
            var6['accentColor'] = var11;
            var11 = var2.spoiler;
            var6['spoiler'] = var11;
            var6['components'] = var7;
            return var6;
 1806:
            var7 = var2.content_inventory_entry;
            var6 = null;
            var7 = var6 == var7;
            if(var7) { _fun0008_ip = 1883; continue _fun0008 }
 1821:
            var7 = {};
            var12 = _closure1_slot0;
            var11 = _closure1_slot2;
            var11 = var11[var8];
            var11 = var12.bind(var4)(var11);
            var11 = var11.ComponentType;
            var11 = var11.CONTENT_INVENTORY_ENTRY;
            var7['type'] = var11;
            var11 = _closure1_slot12;
            var11 = var11.bind(var4)(var5);
            var7['id'] = var11;
            var11 = var2.content_inventory_entry;
            var7['contentInventoryEntry'] = var11;
            var6 = var7;
 1883:
            return var6;
 1885:
            var6 = {};
            var11 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var8];
            var7 = var11.bind(var4)(var7);
            var7 = var7.ComponentType;
            var7 = var7.SEPARATOR;
            var6['type'] = var7;
            var7 = _closure1_slot12;
            var7 = var7.bind(var4)(var5);
            var6['id'] = var7;
            var12 = var2.divider;
            var11 = null;
            var7 = var11 == var12;
            if(var7) { _fun0008_ip = 1951; continue _fun0008 }
 1948:
            var7 = var12;
 1951:
            var6['divider'] = var7;
            var7 = var2.spacing;
            if(!(var11 == var7)) { _fun0008_ip = 1994; continue _fun0008 }
 1965:
            var12 = _closure1_slot0;
            var11 = _closure1_slot2;
            var11 = var11[var8];
            var11 = var12.bind(var4)(var11);
            var11 = var11.SeparatorSpacingSize;
            var7 = var11.SMALL;
 1994:
            var6['spacing'] = var7;
            return var6;
 2000:
            var6 = {};
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var7 = var12[var8];
            var7 = var11.bind(var4)(var7);
            var7 = var7.ComponentType;
            var7 = var7.FILE;
            var6['type'] = var7;
            var7 = _closure1_slot12;
            var7 = var7.bind(var4)(var5);
            var6['id'] = var7;
            var7 = 9;
            var7 = var12[var7];
            var12 = var11.bind(var4)(var7);
            var11 = var12.toUnfurledMediaItem;
            var7 = var2.file;
            var7 = var11.bind(var12)(var7);
            var6['file'] = var7;
            var7 = var2.name;
            var6['name'] = var7;
            var7 = var2.size;
            var6['size'] = var7;
            var7 = var2.spoiler;
            var6['spoiler'] = var7;
            return var6;
 2113:
            var6 = {};
            var11 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var8];
            var7 = var11.bind(var4)(var7);
            var7 = var7.ComponentType;
            var7 = var7.MEDIA_GALLERY;
            var6['type'] = var7;
            var7 = _closure1_slot12;
            var7 = var7.bind(var4)(var5);
            var6['id'] = var7;
            var12 = var2.items;
            var11 = var12.map;
            var7 = function(arg1) {
                var2 = arg1;
                var1 = {};
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var3 = 9;
                var4 = var4[var3];
                var3 = undefined;
                var5 = var5.bind(var3)(var4);
                var4 = var5.toUnfurledMediaItem;
                var3 = var2.media;
                var3 = var4.bind(var5)(var3);
                var1['media'] = var3;
                var3 = var2.description;
                var1['description'] = var3;
                var2 = var2.spoiler;
                var1['spoiler'] = var2;
                return var1;
            };
            var7 = var11.bind(var12)(var7);
            var6['items'] = var7;
            return var6;
 2189:
            var6 = {};
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var7 = var12[var8];
            var7 = var11.bind(var4)(var7);
            var7 = var7.ComponentType;
            var7 = var7.THUMBNAIL;
            var6['type'] = var7;
            var7 = _closure1_slot12;
            var7 = var7.bind(var4)(var5);
            var6['id'] = var7;
            var7 = 9;
            var7 = var12[var7];
            var12 = var11.bind(var4)(var7);
            var11 = var12.toUnfurledMediaItem;
            var7 = var2.media;
            var7 = var11.bind(var12)(var7);
            var6['media'] = var7;
            var7 = var2.description;
            var6['description'] = var7;
            var7 = var2.spoiler;
            var6['spoiler'] = var7;
            return var6;
 2293:
            var6 = {};
            var11 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var8];
            var7 = var11.bind(var4)(var7);
            var7 = var7.ComponentType;
            var7 = var7.TEXT_DISPLAY;
            var6['type'] = var7;
            var7 = _closure1_slot12;
            var7 = var7.bind(var4)(var5);
            var6['id'] = var7;
            var7 = var2.content;
            var6['content'] = var7;
            return var6;
 2352:
            var11 = var2.components;
            var7 = var11.map;
            var6 = function(arg1, arg2) {
                var4 = _closure2_slot2;
                var3 = undefined;
                var2 = arg1;
                var1 = arg2;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var11 = var7.bind(var11)(var6);
            var7 = var11.filter;
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var6 = 7;
            var6 = var13[var6];
            var6 = var12.bind(var4)(var6);
            var6 = var6.isNotNullish;
            var11 = var7.bind(var11)(var6);
            var7 = var2.accessory;
            var6 = var11.length;
            var9 = var9.bind(var4)(var7, var6);
            var13 = var11.length;
            var12 = null;
            var7 = 0;
            var6 = null;
            if(!(var7 !== var13)) { _fun0008_ip = 2511; continue _fun0008 }
 2441:
            var7 = var12 == var9;
            var6 = null;
            if(var7) { _fun0008_ip = 2511; continue _fun0008 }
 2450:
            var7 = {};
            var13 = _closure1_slot0;
            var12 = _closure1_slot2;
            var12 = var12[var8];
            var12 = var13.bind(var4)(var12);
            var12 = var12.ComponentType;
            var12 = var12.SECTION;
            var7['type'] = var12;
            var12 = _closure1_slot12;
            var12 = var12.bind(var4)(var5);
            var7['id'] = var12;
            var7['components'] = var11;
            var7['accessory'] = var9;
            var6 = var7;
 2511:
            return var6;
 2513:
            var6 = {};
            var9 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var8];
            var7 = var9.bind(var4)(var7);
            var7 = var7.ComponentType;
            var7 = var7.CHANNEL_SELECT;
            var6['type'] = var7;
            var7 = _closure1_slot12;
            var7 = var7.bind(var4)(var5);
            var6['id'] = var7;
            var7 = var2.custom_id;
            var6['customId'] = var7;
            var7 = var2.disabled;
            var6['disabled'] = var7;
            var11 = var2.required;
            var9 = null;
            var7 = var9 != var11;
            if(!var7) { _fun0008_ip = 2599; continue _fun0008 }
 2596:
            var7 = var11;
 2599:
            var6['required'] = var7;
            var7 = var2.placeholder;
            if(!(var9 == var7)) { _fun0008_ip = 2669; continue _fun0008 }
 2614:
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var9 = 2;
            var11 = var14[var9];
            var11 = var13.bind(var4)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var9 = var14[var9];
            var9 = var13.bind(var4)(var9);
            var9 = var9.t;
            var9 = var9.Otr6W1;
            var7 = var11.bind(var12)(var9);
 2669:
            var6['placeholder'] = var7;
            var7 = var2.min_values;
            var6['minValues'] = var7;
            var7 = var2.max_values;
            var6['maxValues'] = var7;
            var7 = var2.channel_types;
            var6['channelTypes'] = var7;
            var7 = var2.default_values;
            var6['defaultValues'] = var7;
            return var6;
 2720:
            var6 = {};
            var9 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var8];
            var7 = var9.bind(var4)(var7);
            var7 = var7.ComponentType;
            var7 = var7.MENTIONABLE_SELECT;
            var6['type'] = var7;
            var7 = _closure1_slot12;
            var7 = var7.bind(var4)(var5);
            var6['id'] = var7;
            var7 = var2.custom_id;
            var6['customId'] = var7;
            var7 = var2.disabled;
            var6['disabled'] = var7;
            var11 = var2.required;
            var9 = null;
            var7 = var9 != var11;
            if(!var7) { _fun0008_ip = 2806; continue _fun0008 }
 2803:
            var7 = var11;
 2806:
            var6['required'] = var7;
            var7 = var2.placeholder;
            if(!(var9 == var7)) { _fun0008_ip = 2876; continue _fun0008 }
 2821:
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var9 = 2;
            var11 = var14[var9];
            var11 = var13.bind(var4)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var9 = var14[var9];
            var9 = var13.bind(var4)(var9);
            var9 = var9.t;
            var9 = var9.Otr6W1;
            var7 = var11.bind(var12)(var9);
 2876:
            var6['placeholder'] = var7;
            var7 = var2.min_values;
            var6['minValues'] = var7;
            var7 = var2.max_values;
            var6['maxValues'] = var7;
            var7 = var2.default_values;
            var6['defaultValues'] = var7;
            return var6;
 2916:
            var6 = {};
            var9 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var8];
            var7 = var9.bind(var4)(var7);
            var7 = var7.ComponentType;
            var7 = var7.ROLE_SELECT;
            var6['type'] = var7;
            var7 = _closure1_slot12;
            var7 = var7.bind(var4)(var5);
            var6['id'] = var7;
            var7 = var2.custom_id;
            var6['customId'] = var7;
            var7 = var2.disabled;
            var6['disabled'] = var7;
            var11 = var2.required;
            var9 = null;
            var7 = var9 != var11;
            if(!var7) { _fun0008_ip = 3002; continue _fun0008 }
 2999:
            var7 = var11;
 3002:
            var6['required'] = var7;
            var7 = var2.placeholder;
            if(!(var9 == var7)) { _fun0008_ip = 3072; continue _fun0008 }
 3017:
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var9 = 2;
            var11 = var14[var9];
            var11 = var13.bind(var4)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var9 = var14[var9];
            var9 = var13.bind(var4)(var9);
            var9 = var9.t;
            var9 = var9.Otr6W1;
            var7 = var11.bind(var12)(var9);
 3072:
            var6['placeholder'] = var7;
            var7 = var2.min_values;
            var6['minValues'] = var7;
            var7 = var2.max_values;
            var6['maxValues'] = var7;
            var7 = var2.default_values;
            var6['defaultValues'] = var7;
            return var6;
 3112:
            var6 = {};
            var9 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var8];
            var7 = var9.bind(var4)(var7);
            var7 = var7.ComponentType;
            var7 = var7.USER_SELECT;
            var6['type'] = var7;
            var7 = _closure1_slot12;
            var7 = var7.bind(var4)(var5);
            var6['id'] = var7;
            var7 = var2.custom_id;
            var6['customId'] = var7;
            var7 = var2.disabled;
            var6['disabled'] = var7;
            var11 = var2.required;
            var9 = null;
            var7 = var9 != var11;
            if(!var7) { _fun0008_ip = 3198; continue _fun0008 }
 3195:
            var7 = var11;
 3198:
            var6['required'] = var7;
            var7 = var2.placeholder;
            if(!(var9 == var7)) { _fun0008_ip = 3268; continue _fun0008 }
 3213:
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var9 = 2;
            var11 = var14[var9];
            var11 = var13.bind(var4)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var9 = var14[var9];
            var9 = var13.bind(var4)(var9);
            var9 = var9.t;
            var9 = var9.Otr6W1;
            var7 = var11.bind(var12)(var9);
 3268:
            var6['placeholder'] = var7;
            var7 = var2.min_values;
            var6['minValues'] = var7;
            var7 = var2.max_values;
            var6['maxValues'] = var7;
            var7 = var2.default_values;
            var6['defaultValues'] = var7;
            return var6;
 3308:
            var6 = {};
            var7 = var2.type;
            var6['type'] = var7;
            var7 = _closure1_slot12;
            var7 = var7.bind(var4)(var5);
            var6['id'] = var7;
            var7 = var2.style;
            var6['style'] = var7;
            var7 = var2.custom_id;
            var6['customId'] = var7;
            var7 = var2.label;
            var6['label'] = var7;
            var7 = var2.value;
            var6['value'] = var7;
            var7 = var2.placeholder;
            var6['placeholder'] = var7;
            var7 = var2.disabled;
            var6['disabled'] = var7;
            var9 = var2.required;
            var7 = null;
            var7 = var7 != var9;
            if(!var7) { _fun0008_ip = 3408; continue _fun0008 }
 3405:
            var7 = var9;
 3408:
            var6['required'] = var7;
            var7 = var2.min_length;
            var6['minLength'] = var7;
            var7 = var2.max_length;
            var6['maxLength'] = var7;
            return var6;
 3437:
            var6 = {};
            var9 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var8];
            var7 = var9.bind(var4)(var7);
            var7 = var7.ComponentType;
            var7 = var7.STRING_SELECT;
            var6['type'] = var7;
            var7 = _closure1_slot12;
            var7 = var7.bind(var4)(var5);
            var6['id'] = var7;
            var7 = var2.custom_id;
            var6['customId'] = var7;
            var7 = var2.disabled;
            var6['disabled'] = var7;
            var11 = var2.required;
            var9 = null;
            var7 = var9 != var11;
            if(!var7) { _fun0008_ip = 3523; continue _fun0008 }
 3520:
            var7 = var11;
 3523:
            var6['required'] = var7;
            var12 = var2.options;
            var11 = var12.map;
            var7 = function(arg1) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    var3 = arg1;
                    var1 = {};
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var2 = 8;
                    var2 = var6[var2];
                    var6 = undefined;
                    var2 = var5.bind(var6)(var2);
                    var2 = var2.SelectOptionType;
                    var2 = var2.STRING;
                    var1['type'] = var2;
                    var2 = var3.label;
                    var1['label'] = var2;
                    var2 = var3.value;
                    var1['value'] = var2;
                    var2 = var3.default;
                    var1['default'] = var2;
                    var2 = var3.description;
                    var1['description'] = var2;
                    var5 = var3.emoji;
                    var2 = null;
                    var5 = var2 != var5;
                    var2 = undefined;
                    if(!var5) { _fun0010_ip = 120; continue _fun0010 }
 98:
                    var5 = _closure1_slot4;
                    var4 = var3.emoji;
                    var3 = _closure2_slot1;
                    var2 = var5.bind(var6)(var4, var3);
 120:
                    var1['emoji'] = var2;
                    return var1;
                }
            };
            var7 = var11.bind(var12)(var7);
            var6['options'] = var7;
            var7 = var2.placeholder;
            if(!(var9 == var7)) { _fun0008_ip = 3617; continue _fun0008 }
 3562:
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var9 = 2;
            var11 = var14[var9];
            var11 = var13.bind(var4)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var9 = var14[var9];
            var9 = var13.bind(var4)(var9);
            var9 = var9.t;
            var9 = var9.Otr6W1;
            var7 = var11.bind(var12)(var9);
 3617:
            var6['placeholder'] = var7;
            var7 = var2.min_values;
            var6['minValues'] = var7;
            var7 = var2.max_values;
            var6['maxValues'] = var7;
            return var6;
 3646:
            var7 = var2.emoji;
            var6 = null;
            var6 = var6 != var7;
            var7 = undefined;
            if(!var6) { _fun0008_ip = 3677; continue _fun0008 }
 3662:
            var9 = _closure1_slot4;
            var6 = var2.emoji;
            var7 = var9.bind(var4)(var6, var10);
 3677:
            var6 = {};
            var10 = _closure1_slot0;
            var9 = _closure1_slot2;
            var9 = var9[var8];
            var9 = var10.bind(var4)(var9);
            var9 = var9.ComponentType;
            var9 = var9.BUTTON;
            var6['type'] = var9;
            var9 = _closure1_slot12;
            var9 = var9.bind(var4)(var5);
            var6['id'] = var9;
            var9 = var2.custom_id;
            var6['customId'] = var9;
            var9 = var2.style;
            var6['style'] = var9;
            var9 = var2.disabled;
            var6['disabled'] = var9;
            var9 = var2.url;
            var6['url'] = var9;
            var9 = var2.label;
            var6['label'] = var9;
            var6['emoji'] = var7;
            var7 = var2.sku_id;
            var6['skuId'] = var7;
            return var6;
 3789:
            var6 = var2.components;
            var2 = var6.map;
            var1 = function(arg1, arg2) {
                var4 = _closure2_slot2;
                var3 = undefined;
                var2 = arg1;
                var1 = arg2;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var9 = var2.bind(var6)(var1);
            var2 = var9.filter;
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 7;
            var1 = var6[var1];
            var1 = var7.bind(var4)(var1);
            var1 = var1.isNotNullish;
            var2 = var2.bind(var9)(var1);
            var1 = {};
            var6 = var6[var8];
            var6 = var7.bind(var4)(var6);
            var6 = var6.ComponentType;
            var6 = var6.ACTION_ROW;
            var1['type'] = var6;
            var3 = _closure1_slot12;
            var3 = var3.bind(var4)(var5);
            var1['id'] = var3;
            var1['components'] = var2;
            return var1;
        }
    };
    var _closure1_slot11 = var1;
    var1 = function indicesToId(arg1) {
        var5 = arg1;
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 8;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.asComponentId;
        var4 = var5.join;
        var1 = ',';
        var1 = var4.bind(var5)(var1);
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot12 = var1;
    var1 = global;
    var11 = var1.Object;
    var10 = var11.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var6);
    var1 = 0;
    var6 = var8[var1];
    var1 = undefined;
    var10 = var9.bind(var1)(var6);
    var6 = var10.prototype;
    var9 = Object.create(var6, {constructor: {value: var10}});
    var14 = 'InteractionComponentUtils';
    var15 = var9;
    var6 = new var15[var10](var14, var13);
    var6 = var6 instanceof Object ? var6 : var9;
    var _closure1_slot3 = var6;
    var6 = function getEmoji(arg1, arg2) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
            var6 = arg1;
            var1 = {};
            var2 = var6.id;
            var1['id'] = var2;
            var2 = var6.name;
            var1['name'] = var2;
            var2 = var6.animated;
            var1['animated'] = var2;
            var5 = undefined;
            var3 = arg2;
            var2 = undefined;
            if(!var3) { _fun0011_ip = 128; continue _fun0011 }
 44:
            var4 = var6.id;
            var3 = null;
            var3 = var3 != var4;
            var2 = undefined;
            if(!var3) { _fun0011_ip = 128; continue _fun0011 }
 60:
            var4 = _closure1_slot1;
            var7 = _closure1_slot2;
            var3 = 1;
            var3 = var7[var3];
            var5 = var4.bind(var5)(var3);
            var4 = var5.getEmojiURL;
            var3 = {};
            var7 = var6.id;
            var3['id'] = var7;
            var6 = var6.animated;
            if(var6) { _fun0011_ip = 111; continue _fun0011 }
 109:
            var6 = false;
 111:
            var3['animated'] = var6;
            var6 = 48;
            var3['size'] = var6;
            var2 = var4.bind(var5)(var3);
 128:
            var1['src'] = var2;
            return var1;
        }
    };
    var _closure1_slot4 = var6;
    var6 = 11;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/interaction_components/InteractionComponentUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var6 = function(arg1, arg2, arg3) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
            var2 = arg1;
            var5 = arg2;
            var4 = null;
            var1 = var4 == var2;
            var7 = undefined;
            var6 = undefined;
            if(var1) { _fun0012_ip = 30; continue _fun0012 }
 19:
            var1 = var2.data;
            var6 = var1.interactionType;
 30:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 3;
            var1 = var9[var1];
            var1 = var8.bind(var7)(var1);
            var1 = var1.InteractionTypes;
            var1 = var1.MESSAGE_COMPONENT;
            var9 = null;
            if(!(var6 === var1)) { _fun0012_ip = 134; continue _fun0012 }
 71:
            var1 = var4 == var2;
            var6 = undefined;
            if(var1) { _fun0012_ip = 85; continue _fun0012 }
 80:
            var6 = var2.state;
 85:
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var1 = 4;
            var1 = var10[var1];
            var1 = var8.bind(var7)(var1);
            var1 = var1.InteractionState;
            var1 = var1.FAILED;
            var9 = null;
            if(!(var6 === var1)) { _fun0012_ip = 134; continue _fun0012 }
 123:
            var1 = var2.data;
            var9 = var1.componentId;
 134:
            var6 = var4 != var9;
            var1 = null;
            if(!var6) { _fun0012_ip = 156; continue _fun0012 }
 143:
            var8 = _closure1_slot9;
            var6 = arg3;
            var1 = var8.bind(var7)(var6, var9);
 156:
            if(!(var4 == var1)) { _fun0012_ip = 162; continue _fun0012 }
 160:
            return var7;
 162:
            var6 = var4 == var5;
            var1 = undefined;
            if(var6) { _fun0012_ip = 177; continue _fun0012 }
 171:
            var1 = var5.interactionError;
 177:
            if(!(var4 == var1)) { _fun0012_ip = 326; continue _fun0012 }
 184:
            var5 = var4 == var2;
            var4 = undefined;
            if(var5) { _fun0012_ip = 199; continue _fun0012 }
 193:
            var4 = var2.errorCode;
 199:
            var2 = 429;
            if(!(var2 !== var4)) { _fun0012_ip = 266; continue _fun0012 }
 209:
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 2;
            var4 = var8[var2];
            var4 = var6.bind(var7)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var2 = var8[var2];
            var2 = var6.bind(var7)(var2);
            var2 = var2.t;
            var2 = var2.VCsUJi;
            var2 = var4.bind(var5)(var2);
            _fun0012_ip = 323; continue _fun0012;
 266:
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 2;
            var4 = var8[var3];
            var4 = var6.bind(var7)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var3 = var8[var3];
            var3 = var6.bind(var7)(var3);
            var3 = var3.t;
            var3 = var3.fitPBQ;
            var2 = var4.bind(var5)(var3);
 323:
            var1 = var2;
 326:
            return var1;
        }
    };
    var3['getLayoutComponentErrorText'] = var6;
    var3['flattenComponents'] = var5;
    var3['findChildComponent'] = var4;
    var4 = function getAllTextDisplayContent(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
            var4 = _closure1_slot7;
            var3 = undefined;
            var2 = arg1;
            var5 = var4.bind(var3)(var2);
            var2 = global;
            var4 = var2.Array;
            var3 = var4.from;
            var2 = var5.values;
            var2 = var2.bind(var5)();
            var4 = var3.bind(var4)(var2);
            var3 = var4.filter;
            var2 = function(arg1) {
                var1 = arg1;
                var2 = var1.type;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 3;
                var3 = var3[var1];
                var1 = undefined;
                var1 = var4.bind(var1)(var3);
                var1 = var1.ComponentType;
                var1 = var1.TEXT_DISPLAY;
                var1 = var2 === var1;
                return var1;
            };
            var3 = var3.bind(var4)(var2);
            var2 = var3.map;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.content;
                return var1;
            };
            var3 = var2.bind(var3)(var1);
            var2 = var3.join;
            var1 = '\n';
            var2 = var2.bind(var3)(var1);
            var3 = '';
            var1 = null;
            if(!(var3 !== var2)) { _fun0013_ip = 103; continue _fun0013 }
 100:
            var1 = var2;
 103:
            return var1;
        }
    };
    var3['getAllTextDisplayContent'] = var4;
    var4 = function getParents(arg1, arg2) {
        var2 = arg2;
        var _closure2_slot0 = var2;
        var3 = function search(arg1) {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                var4 = arguments[1];
                var12 = undefined;
                if(!(var4 === var12)) { _fun0014_ip = 15; continue _fun0014 }
 11:
                var4 = new Array(0);
 15:
                var2 = _closure1_slot5;
                var1 = arg1;
                var10 = var2.bind(var12)(var1);
                var5 = var10.bind(var12)();
                var2 = var5.done;
                var3 = 1;
                var1 = null;
                var8 = var5;
                if(var2) { _fun0014_ip = 159; continue _fun0014 }
 53:
                var5 = var8.value;
                var2 = _closure1_slot10;
                var7 = var2.bind(var12)(var5);
                var6 = var7.some;
                var2 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.id;
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var1 = var2 === var1;
                    return var1;
                };
                var6 = var6.bind(var7)(var2);
                var2 = new Array(1);
                if(var6) { _fun0014_ip = 140; continue _fun0014 }
 90:
                var6 = _closure2_slot1;
                var2[0] = var5;
                var17 = var2;
                var16 = var4;
                var15 = var3;
                var14 = arraySpread(var17, var16, var15);
                var6 = var6.bind(var12)(var7, var2);
                if(!(var1 == var6)) { _fun0014_ip = 138; continue _fun0014 }
 121:
                var14 = var10.bind(var12)();
                var7 = var14.done;
                var8 = var14;
                if(var7) { _fun0014_ip = 159; continue _fun0014 }
 136:
                _fun0014_ip = 53; continue _fun0014;
 138:
                return var6;
 140:
                var2[0] = var5;
                var17 = var2;
                var16 = var4;
                var15 = var3;
                var3 = arraySpread(var17, var16, var15);
                return var2;
 159:
                return var1;
            }
        };
        var _closure2_slot1 = var3;
        var2 = undefined;
        var1 = arg1;
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var3['getParents'] = var4;
    var4 = function makeComponentUploadId(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
            var3 = {};
            var1 = 'component-upload';
            var3['type'] = var1;
            var1 = arg1;
            var3['containerId'] = var1;
            var1 = global;
            var2 = var1.crypto;
            var2 = var2.randomUUID;
            var4 = null;
            var5 = var4 == var2;
            var6 = undefined;
            var2 = undefined;
            if(var5) { _fun0015_ip = 63; continue _fun0015 }
 47:
            var7 = var1.crypto;
            var5 = var7.randomUUID;
            var2 = var5.bind(var7)();
 63:
            if(!(var4 == var2)) { _fun0015_ip = 100; continue _fun0015 }
 67:
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var4 = 6;
            var4 = var7[var4];
            var5 = var5.bind(var6)(var4);
            var4 = var5.v4;
            var2 = var4.bind(var5)();
 100:
            var3['uniqueId'] = var2;
            var2 = var1.JSON;
            var1 = var2.stringify;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var3['makeComponentUploadId'] = var4;
    var4 = function deserializeComponentUploadId(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
            var1 = arg1;
            var2 = undefined;
 5: // try_start_0
            var3 = global;
            var5 = var3.JSON;
            var3 = var5.parse;
            var1 = var3.bind(var5)(var1);
            var2 = var1;
            var5 = null;
            var1 = var5 == var1;
            var4 = undefined;
            if(var1) { _fun0016_ip = 46; continue _fun0016 }
 38:
            var1 = var2;
            var4 = var1.type;
 46:
            var3 = 'component-upload';
            var1 = null;
            if(!(var3 === var4)) { _fun0016_ip = 101; continue _fun0016 }
 58:
            var3 = var2;
            var3 = var3.containerId;
            var4 = 'string';
            var3 = typeof var3;
            var1 = null;
            if(!(var4 === var3)) { _fun0016_ip = 101; continue _fun0016 }
 80:
            var3 = var2;
            var3 = var3.uniqueId;
            var3 = typeof var3;
            var1 = null;
            if(!(var4 === var3)) { _fun0016_ip = 101; continue _fun0016 }
 98:
            var1 = var2;
 101: // try_end0
            return var1;
 103: // catch_target0
            CatchBlockStart(arg_register=0);
            var1 = null;
            return var1;
        }
    };
    var3['deserializeComponentUploadId'] = var4;
    var2 = function transformComponents(arg1) {
        var4 = arg1;
        var3 = var4.map;
        var2 = function(arg1, arg2) {
            var4 = _closure1_slot11;
            var3 = new Array(1);
            var1 = arg2;
            var3[0] = var1;
            var2 = undefined;
            var1 = arg1;
            var1 = var4.bind(var2)(var1, var3);
            return var1;
        };
        var3 = var3.bind(var4)(var2);
        var2 = var3.filter;
        var1 = function(arg1) {
            var2 = null;
            var1 = arg1;
            var1 = var2 != var1;
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['transformComponents'] = var2;
    return var1;
})();