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
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
case 2:
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var3.@@iterator;
case 4:
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
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
            if(!var7) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var7 = var3.constructor;
case 14:
            var10 = var9;
            if(!var7) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var7 = var3.constructor;
            var10 = var7.name;
case 16:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 20:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 23; continue _fun0001 }
case 21:
            var9 = _closure1_slot6;
            var7 = var9.bind(var8)(var3, var8);
case 23:
            _fun0001_ip = 24; continue _fun0001;
case 18:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
case 24:
            var6 = var7;
            _fun0001_ip = 10; continue _fun0001;
case 12:
            var7 = _closure1_slot6;
            var6 = var7.bind(var8)(var3, var8);
case 10:
            var4 = var6;
            if(var4) { _fun0001_ip = 8; continue _fun0001 }
case 25:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
case 8:
            if(!var4) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            _closure2_slot0 = var4;
case 26:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 28; continue _fun0002 }
case 29:
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
                    _fun0002_ip = 30; continue _fun0002;
case 28:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
case 30:
                    return var1;
                }
            };
            return var1;
case 6:
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
case 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 31; continue _fun0003 }
case 32:
            var2 = var4.length;
            var1 = var3 > var2;
case 31:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
case 34:
            var2 = var4.length;
case 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 35; continue _fun0003 }
case 4:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 4; continue _fun0003 }
case 35:
            return var1;
        }
    };
    var _closure1_slot6 = var1;
    var5 = function flattenComponents(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
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
            if(var2) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var7 = _closure1_slot8;
            var2 = var3.value;
            var2 = var7.bind(var5)(var1, var2);
            var7 = var4.bind(var5)();
            var2 = var7.done;
            var3 = var7;
            if(!var2) { _fun0004_ip = 37; continue _fun0004 }
case 36:
            return var1;
        }
    };
    var _closure1_slot7 = var5;
    var1 = function flattenComponent(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
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
            if(!(var5 !== var7)) { _fun0005_ip = 22; continue _fun0005 }
case 38:
            var8 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var9];
            var5 = var8.bind(var1)(var5);
            var5 = var5.ComponentType;
            var5 = var5.SECTION;
            if(!(var5 !== var7)) { _fun0005_ip = 39; continue _fun0005 }
case 13:
            var8 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var9];
            var5 = var8.bind(var1)(var5);
            var5 = var5.ComponentType;
            var5 = var5.CONTAINER;
            if(!(var5 === var7)) { _fun0005_ip = 40; continue _fun0005 }
case 41:
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
            _fun0005_ip = 40; continue _fun0005;
case 39:
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
            _fun0005_ip = 40; continue _fun0005;
case 22:
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
case 40:
            return var1;
        }
    };
    var _closure1_slot8 = var1;
    var4 = function findChildComponent(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
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
            if(!(var7 !== var6)) { _fun0006_ip = 42; continue _fun0006 }
case 7:
            var9 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var8];
            var7 = var9.bind(var3)(var7);
            var7 = var7.ComponentType;
            var7 = var7.SECTION;
            if(!(var7 !== var6)) { _fun0006_ip = 43; continue _fun0006 }
case 44:
            var7 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var8];
            var5 = var7.bind(var3)(var5);
            var5 = var5.ComponentType;
            var5 = var5.CONTAINER;
            if(!(var5 !== var6)) { _fun0006_ip = 45; continue _fun0006 }
case 46:
            return var3;
case 45:
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
            if(!var6) { _fun0006_ip = 14; continue _fun0006 }
case 47:
            var3 = var5;
case 14:
            return var3;
case 43:
            var3 = var2.accessory;
            var3 = var3.id;
            if(!(var3 !== var4)) { _fun0006_ip = 48; continue _fun0006 }
case 49:
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
            if(!var5) { _fun0006_ip = 50; continue _fun0006 }
case 51:
            var3 = var4;
case 50:
            _fun0006_ip = 52; continue _fun0006;
case 48:
            var3 = var2.accessory;
case 52:
            return var3;
case 42:
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
            if(!var3) { _fun0006_ip = 53; continue _fun0006 }
case 54:
            var1 = var2;
case 53:
            return var1;
        }
    };
    var _closure1_slot9 = var4;
    var1 = function getComponentChildren(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
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
            if(!(var3 !== var4)) { _fun0007_ip = 55; continue _fun0007 }
case 56:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var3 = var5.bind(var6)(var3);
            var3 = var3.ComponentType;
            var3 = var3.SECTION;
            if(!(var3 !== var4)) { _fun0007_ip = 57; continue _fun0007 }
case 58:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var3 = var5.bind(var6)(var3);
            var3 = var3.ComponentType;
            var3 = var3.CONTAINER;
            if(!(var3 !== var4)) { _fun0007_ip = 59; continue _fun0007 }
case 60:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var3 = var5.bind(var6)(var3);
            var3 = var3.ComponentType;
            var3 = var3.LABEL;
            if(!(var3 !== var4)) { _fun0007_ip = 61; continue _fun0007 }
case 47:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var3 = var5.bind(var6)(var3);
            var3 = var3.ComponentType;
            var3 = var3.BUTTON;
            if(!(var3 !== var4)) { _fun0007_ip = 62; continue _fun0007 }
case 63:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var3 = var5.bind(var6)(var3);
            var3 = var3.ComponentType;
            var3 = var3.STRING_SELECT;
            if(!(var3 !== var4)) { _fun0007_ip = 62; continue _fun0007 }
case 64:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var3 = var5.bind(var6)(var3);
            var3 = var3.ComponentType;
            var3 = var3.TEXT_INPUT;
            if(!(var3 !== var4)) { _fun0007_ip = 62; continue _fun0007 }
case 65:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var3 = var5.bind(var6)(var3);
            var3 = var3.ComponentType;
            var3 = var3.USER_SELECT;
            if(!(var3 !== var4)) { _fun0007_ip = 62; continue _fun0007 }
case 66:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var3 = var5.bind(var6)(var3);
            var3 = var3.ComponentType;
            var3 = var3.ROLE_SELECT;
            if(!(var3 !== var4)) { _fun0007_ip = 62; continue _fun0007 }
case 67:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var3 = var5.bind(var6)(var3);
            var3 = var3.ComponentType;
            var3 = var3.MENTIONABLE_SELECT;
            if(!(var3 !== var4)) { _fun0007_ip = 62; continue _fun0007 }
case 68:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var3 = var5.bind(var6)(var3);
            var3 = var3.ComponentType;
            var3 = var3.CHANNEL_SELECT;
            if(!(var3 !== var4)) { _fun0007_ip = 62; continue _fun0007 }
case 69:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var3 = var5.bind(var6)(var3);
            var3 = var3.ComponentType;
            var3 = var3.TEXT_DISPLAY;
            if(!(var3 !== var4)) { _fun0007_ip = 62; continue _fun0007 }
case 70:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var3 = var5.bind(var6)(var3);
            var3 = var3.ComponentType;
            var3 = var3.THUMBNAIL;
            if(!(var3 !== var4)) { _fun0007_ip = 62; continue _fun0007 }
case 71:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var3 = var5.bind(var6)(var3);
            var3 = var3.ComponentType;
            var3 = var3.MEDIA_GALLERY;
            if(!(var3 !== var4)) { _fun0007_ip = 62; continue _fun0007 }
case 72:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var3 = var5.bind(var6)(var3);
            var3 = var3.ComponentType;
            var3 = var3.FILE;
            if(!(var3 !== var4)) { _fun0007_ip = 62; continue _fun0007 }
case 73:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var3 = var5.bind(var6)(var3);
            var3 = var3.ComponentType;
            var3 = var3.SEPARATOR;
            if(!(var3 !== var4)) { _fun0007_ip = 62; continue _fun0007 }
case 74:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var3 = var5.bind(var6)(var3);
            var3 = var3.ComponentType;
            var3 = var3.CONTENT_INVENTORY_ENTRY;
            if(!(var3 !== var4)) { _fun0007_ip = 62; continue _fun0007 }
case 75:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var3 = var5.bind(var6)(var3);
            var3 = var3.ComponentType;
            var3 = var3.FILE_UPLOAD;
            if(!(var3 !== var4)) { _fun0007_ip = 62; continue _fun0007 }
case 76:
            var5 = _closure1_slot3;
            var4 = var5.warn;
            var3 = var1.type;
            var2 = 'getComponentChildren: Unknown component type';
            var2 = var4.bind(var5)(var2, var3);
            var2 = new Array(0);
            return var2;
case 62:
            var2 = new Array(0);
            return var2;
case 61:
            var3 = var1.component;
            var2 = new Array(1);
            var2[0] = var3;
            return var2;
case 59:
            var2 = var1.components;
            return var2;
case 57:
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
case 55:
            var1 = var1.components;
            return var1;
        }
    };
    var _closure1_slot10 = var1;
    var1 = function transformComponent(arg1, arg2) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var2 = arg1;
            var5 = arg2;
            var _closure2_slot0 = var5;
            var9 = function getChildComponent(arg1, arg2) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
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
                    if(var3) { _fun0009_ip = 77; continue _fun0009 }
case 78:
                    var1 = var2;
case 77:
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
            if(!(var7 !== var11)) { _fun0008_ip = 79; continue _fun0008 }
case 80:
            var12 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var8];
            var7 = var12.bind(var4)(var7);
            var7 = var7.ComponentType;
            var7 = var7.BUTTON;
            var6 = true;
            if(!(var7 !== var11)) { _fun0008_ip = 79; continue _fun0008 }
case 81:
            var12 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var8];
            var7 = var12.bind(var4)(var7);
            var7 = var7.ComponentType;
            var7 = var7.STRING_SELECT;
            var6 = true;
            if(!(var7 !== var11)) { _fun0008_ip = 79; continue _fun0008 }
case 82:
            var12 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var8];
            var7 = var12.bind(var4)(var7);
            var7 = var7.ComponentType;
            var7 = var7.TEXT_INPUT;
            var6 = true;
            if(!(var7 !== var11)) { _fun0008_ip = 79; continue _fun0008 }
case 83:
            var12 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var8];
            var7 = var12.bind(var4)(var7);
            var7 = var7.ComponentType;
            var7 = var7.USER_SELECT;
            var6 = true;
            if(!(var7 !== var11)) { _fun0008_ip = 79; continue _fun0008 }
case 40:
            var12 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var8];
            var7 = var12.bind(var4)(var7);
            var7 = var7.ComponentType;
            var7 = var7.ROLE_SELECT;
            var6 = true;
            if(!(var7 !== var11)) { _fun0008_ip = 79; continue _fun0008 }
case 84:
            var12 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var8];
            var7 = var12.bind(var4)(var7);
            var7 = var7.ComponentType;
            var7 = var7.MENTIONABLE_SELECT;
            var6 = true;
            if(!(var7 !== var11)) { _fun0008_ip = 79; continue _fun0008 }
case 85:
            var12 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var8];
            var7 = var12.bind(var4)(var7);
            var7 = var7.ComponentType;
            var7 = var7.CHANNEL_SELECT;
            var6 = true;
            if(!(var7 !== var11)) { _fun0008_ip = 79; continue _fun0008 }
case 67:
            var12 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var8];
            var7 = var12.bind(var4)(var7);
            var7 = var7.ComponentType;
            var7 = var7.SECTION;
            var6 = true;
            if(!(var7 !== var11)) { _fun0008_ip = 79; continue _fun0008 }
case 86:
            var12 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var8];
            var7 = var12.bind(var4)(var7);
            var7 = var7.ComponentType;
            var7 = var7.TEXT_DISPLAY;
            var6 = true;
            if(!(var7 !== var11)) { _fun0008_ip = 79; continue _fun0008 }
case 87:
            var12 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var8];
            var7 = var12.bind(var4)(var7);
            var7 = var7.ComponentType;
            var7 = var7.THUMBNAIL;
            var6 = true;
            if(!(var7 !== var11)) { _fun0008_ip = 79; continue _fun0008 }
case 88:
            var12 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var8];
            var7 = var12.bind(var4)(var7);
            var7 = var7.ComponentType;
            var7 = var7.MEDIA_GALLERY;
            var6 = true;
            if(!(var7 !== var11)) { _fun0008_ip = 79; continue _fun0008 }
case 89:
            var12 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var8];
            var7 = var12.bind(var4)(var7);
            var7 = var7.ComponentType;
            var7 = var7.FILE;
            var6 = true;
            if(!(var7 !== var11)) { _fun0008_ip = 79; continue _fun0008 }
case 90:
            var12 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var8];
            var7 = var12.bind(var4)(var7);
            var7 = var7.ComponentType;
            var7 = var7.SEPARATOR;
            var6 = true;
            if(!(var7 !== var11)) { _fun0008_ip = 79; continue _fun0008 }
case 91:
            var12 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var8];
            var7 = var12.bind(var4)(var7);
            var7 = var7.ComponentType;
            var7 = var7.CONTAINER;
            var6 = true;
            if(!(var7 !== var11)) { _fun0008_ip = 79; continue _fun0008 }
case 92:
            var12 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var8];
            var7 = var12.bind(var4)(var7);
            var7 = var7.ComponentType;
            var7 = var7.LABEL;
            var6 = true;
            if(!(var7 !== var11)) { _fun0008_ip = 79; continue _fun0008 }
case 93:
            var12 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var8];
            var7 = var12.bind(var4)(var7);
            var7 = var7.ComponentType;
            var7 = var7.FILE_UPLOAD;
            var6 = true;
            if(!(var7 !== var11)) { _fun0008_ip = 79; continue _fun0008 }
case 94:
            var12 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var8];
            var7 = var12.bind(var4)(var7);
            var7 = var7.ComponentType;
            var7 = var7.CONTENT_INVENTORY_ENTRY;
            var6 = undefined;
            if(!(var7 === var11)) { _fun0008_ip = 79; continue _fun0008 }
case 95:
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var7 = 5;
            var7 = var12[var7];
            var12 = var11.bind(var4)(var7);
            var11 = var12.isContentInventoryEmbedEnabled;
            var7 = 'canShowComponent';
            var6 = var11.bind(var12)(var7);
case 79:
            if(var6) { _fun0008_ip = 96; continue _fun0008 }
case 97:
            var6 = null;
            return var6;
case 96:
            var _closure2_slot1 = var10;
            var7 = var2.type;
            var11 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var8];
            var6 = var11.bind(var4)(var6);
            var6 = var6.ComponentType;
            var6 = var6.ACTION_ROW;
            if(!(var6 !== var7)) { _fun0008_ip = 98; continue _fun0008 }
case 99:
            var11 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var8];
            var6 = var11.bind(var4)(var6);
            var6 = var6.ComponentType;
            var6 = var6.BUTTON;
            if(!(var6 !== var7)) { _fun0008_ip = 100; continue _fun0008 }
case 101:
            var11 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var8];
            var6 = var11.bind(var4)(var6);
            var6 = var6.ComponentType;
            var6 = var6.STRING_SELECT;
            if(!(var6 !== var7)) { _fun0008_ip = 102; continue _fun0008 }
case 103:
            var11 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var8];
            var6 = var11.bind(var4)(var6);
            var6 = var6.ComponentType;
            var6 = var6.TEXT_INPUT;
            if(!(var6 !== var7)) { _fun0008_ip = 104; continue _fun0008 }
case 105:
            var11 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var8];
            var6 = var11.bind(var4)(var6);
            var6 = var6.ComponentType;
            var6 = var6.USER_SELECT;
            if(!(var6 !== var7)) { _fun0008_ip = 106; continue _fun0008 }
case 107:
            var11 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var8];
            var6 = var11.bind(var4)(var6);
            var6 = var6.ComponentType;
            var6 = var6.ROLE_SELECT;
            if(!(var6 !== var7)) { _fun0008_ip = 108; continue _fun0008 }
case 109:
            var11 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var8];
            var6 = var11.bind(var4)(var6);
            var6 = var6.ComponentType;
            var6 = var6.MENTIONABLE_SELECT;
            if(!(var6 !== var7)) { _fun0008_ip = 110; continue _fun0008 }
case 111:
            var11 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var8];
            var6 = var11.bind(var4)(var6);
            var6 = var6.ComponentType;
            var6 = var6.CHANNEL_SELECT;
            if(!(var6 !== var7)) { _fun0008_ip = 112; continue _fun0008 }
case 113:
            var11 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var8];
            var6 = var11.bind(var4)(var6);
            var6 = var6.ComponentType;
            var6 = var6.SECTION;
            if(!(var6 !== var7)) { _fun0008_ip = 114; continue _fun0008 }
case 115:
            var11 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var8];
            var6 = var11.bind(var4)(var6);
            var6 = var6.ComponentType;
            var6 = var6.TEXT_DISPLAY;
            if(!(var6 !== var7)) { _fun0008_ip = 116; continue _fun0008 }
case 117:
            var11 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var8];
            var6 = var11.bind(var4)(var6);
            var6 = var6.ComponentType;
            var6 = var6.THUMBNAIL;
            if(!(var6 !== var7)) { _fun0008_ip = 118; continue _fun0008 }
case 119:
            var11 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var8];
            var6 = var11.bind(var4)(var6);
            var6 = var6.ComponentType;
            var6 = var6.MEDIA_GALLERY;
            if(!(var6 !== var7)) { _fun0008_ip = 120; continue _fun0008 }
case 121:
            var11 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var8];
            var6 = var11.bind(var4)(var6);
            var6 = var6.ComponentType;
            var6 = var6.FILE;
            if(!(var6 !== var7)) { _fun0008_ip = 122; continue _fun0008 }
case 123:
            var11 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var8];
            var6 = var11.bind(var4)(var6);
            var6 = var6.ComponentType;
            var6 = var6.SEPARATOR;
            if(!(var6 !== var7)) { _fun0008_ip = 124; continue _fun0008 }
case 125:
            var11 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var8];
            var6 = var11.bind(var4)(var6);
            var6 = var6.ComponentType;
            var6 = var6.CONTENT_INVENTORY_ENTRY;
            if(!(var6 !== var7)) { _fun0008_ip = 126; continue _fun0008 }
case 127:
            var11 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var8];
            var6 = var11.bind(var4)(var6);
            var6 = var6.ComponentType;
            var6 = var6.CONTAINER;
            if(!(var6 !== var7)) { _fun0008_ip = 128; continue _fun0008 }
case 129:
            var11 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var8];
            var6 = var11.bind(var4)(var6);
            var6 = var6.ComponentType;
            var6 = var6.LABEL;
            if(!(var6 !== var7)) { _fun0008_ip = 130; continue _fun0008 }
case 131:
            var11 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var8];
            var6 = var11.bind(var4)(var6);
            var6 = var6.ComponentType;
            var6 = var6.FILE_UPLOAD;
            if(!(var6 !== var7)) { _fun0008_ip = 132; continue _fun0008 }
case 133:
            var12 = _closure1_slot3;
            var11 = var12.warn;
            var7 = var2.type;
            var6 = 'transformComponent: Unknown component type';
            var6 = var11.bind(var12)(var6, var7);
            var6 = null;
            return var6;
case 132:
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
            if(!var7) { _fun0008_ip = 134; continue _fun0008 }
case 135:
            var7 = var11;
case 134:
            var6['required'] = var7;
            var7 = var2.min_values;
            var6['minValues'] = var7;
            var7 = var2.max_values;
            var6['maxValues'] = var7;
            return var6;
case 130:
            var7 = var2.component;
            var6 = 0;
            var11 = var9.bind(var4)(var7, var6);
            var6 = null;
            var7 = var6 == var11;
            if(var7) { _fun0008_ip = 136; continue _fun0008 }
case 137:
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
case 136:
            return var6;
case 128:
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
            if(!var12) { _fun0008_ip = 138; continue _fun0008 }
case 139:
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var12 = 10;
            var12 = var14[var12];
            var15 = var13.bind(var4)(var12);
            var14 = var15.int2hsl;
            var13 = var2.accent_color;
            var12 = false;
            var11 = var14.bind(var15)(var13, var12);
case 138:
            var6['accentColor'] = var11;
            var11 = var2.spoiler;
            var6['spoiler'] = var11;
            var6['components'] = var7;
            return var6;
case 126:
            var7 = var2.content_inventory_entry;
            var6 = null;
            var7 = var6 == var7;
            if(var7) { _fun0008_ip = 140; continue _fun0008 }
case 141:
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
case 140:
            return var6;
case 124:
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
            if(var7) { _fun0008_ip = 142; continue _fun0008 }
case 143:
            var7 = var12;
case 142:
            var6['divider'] = var7;
            var7 = var2.spacing;
            if(!(var11 == var7)) { _fun0008_ip = 144; continue _fun0008 }
case 145:
            var12 = _closure1_slot0;
            var11 = _closure1_slot2;
            var11 = var11[var8];
            var11 = var12.bind(var4)(var11);
            var11 = var11.SeparatorSpacingSize;
            var7 = var11.SMALL;
case 144:
            var6['spacing'] = var7;
            return var6;
case 122:
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
case 120:
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
case 118:
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
case 116:
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
case 114:
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
            if(!(var7 !== var13)) { _fun0008_ip = 146; continue _fun0008 }
case 147:
            var7 = var12 == var9;
            var6 = null;
            if(var7) { _fun0008_ip = 146; continue _fun0008 }
case 148:
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
case 146:
            return var6;
case 112:
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
            var9 = var2.required;
            var7 = null;
            var7 = var7 != var9;
            if(!var7) { _fun0008_ip = 149; continue _fun0008 }
case 150:
            var7 = var9;
case 149:
            var6['required'] = var7;
            var7 = var2.placeholder;
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
case 110:
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
            var9 = var2.required;
            var7 = null;
            var7 = var7 != var9;
            if(!var7) { _fun0008_ip = 151; continue _fun0008 }
case 152:
            var7 = var9;
case 151:
            var6['required'] = var7;
            var7 = var2.placeholder;
            var6['placeholder'] = var7;
            var7 = var2.min_values;
            var6['minValues'] = var7;
            var7 = var2.max_values;
            var6['maxValues'] = var7;
            var7 = var2.default_values;
            var6['defaultValues'] = var7;
            return var6;
case 108:
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
            var9 = var2.required;
            var7 = null;
            var7 = var7 != var9;
            if(!var7) { _fun0008_ip = 153; continue _fun0008 }
case 154:
            var7 = var9;
case 153:
            var6['required'] = var7;
            var7 = var2.placeholder;
            var6['placeholder'] = var7;
            var7 = var2.min_values;
            var6['minValues'] = var7;
            var7 = var2.max_values;
            var6['maxValues'] = var7;
            var7 = var2.default_values;
            var6['defaultValues'] = var7;
            return var6;
case 106:
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
            var9 = var2.required;
            var7 = null;
            var7 = var7 != var9;
            if(!var7) { _fun0008_ip = 155; continue _fun0008 }
case 156:
            var7 = var9;
case 155:
            var6['required'] = var7;
            var7 = var2.placeholder;
            var6['placeholder'] = var7;
            var7 = var2.min_values;
            var6['minValues'] = var7;
            var7 = var2.max_values;
            var6['maxValues'] = var7;
            var7 = var2.default_values;
            var6['defaultValues'] = var7;
            return var6;
case 104:
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
            if(!var7) { _fun0008_ip = 157; continue _fun0008 }
case 158:
            var7 = var9;
case 157:
            var6['required'] = var7;
            var7 = var2.min_length;
            var6['minLength'] = var7;
            var7 = var2.max_length;
            var6['maxLength'] = var7;
            return var6;
case 102:
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
            var9 = var2.required;
            var7 = null;
            var7 = var7 != var9;
            if(!var7) { _fun0008_ip = 159; continue _fun0008 }
case 160:
            var7 = var9;
case 159:
            var6['required'] = var7;
            var11 = var2.options;
            var9 = var11.map;
            var7 = function(arg1) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
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
                    if(!var5) { _fun0010_ip = 161; continue _fun0010 }
case 162:
                    var5 = _closure1_slot4;
                    var4 = var3.emoji;
                    var3 = _closure2_slot1;
                    var2 = var5.bind(var6)(var4, var3);
case 161:
                    var1['emoji'] = var2;
                    return var1;
                }
            };
            var7 = var9.bind(var11)(var7);
            var6['options'] = var7;
            var7 = var2.placeholder;
            var6['placeholder'] = var7;
            var7 = var2.min_values;
            var6['minValues'] = var7;
            var7 = var2.max_values;
            var6['maxValues'] = var7;
            return var6;
case 100:
            var7 = var2.emoji;
            var6 = null;
            var6 = var6 != var7;
            var7 = undefined;
            if(!var6) { _fun0008_ip = 163; continue _fun0008 }
case 164:
            var9 = _closure1_slot4;
            var6 = var2.emoji;
            var7 = var9.bind(var4)(var6, var10);
case 163:
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
case 98:
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
case 0:
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
            if(!var3) { _fun0011_ip = 165; continue _fun0011 }
case 166:
            var4 = var6.id;
            var3 = null;
            var3 = var3 != var4;
            var2 = undefined;
            if(!var3) { _fun0011_ip = 165; continue _fun0011 }
case 167:
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
            if(var6) { _fun0011_ip = 168; continue _fun0011 }
case 169:
            var6 = false;
case 168:
            var3['animated'] = var6;
            var6 = 48;
            var3['size'] = var6;
            var2 = var4.bind(var5)(var3);
case 165:
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
case 0:
            var2 = arg1;
            var5 = arg2;
            var4 = null;
            var1 = var4 == var2;
            var7 = undefined;
            var6 = undefined;
            if(var1) { _fun0012_ip = 3; continue _fun0012 }
case 170:
            var1 = var2.data;
            var6 = var1.interactionType;
case 3:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 3;
            var1 = var9[var1];
            var1 = var8.bind(var7)(var1);
            var1 = var1.InteractionTypes;
            var1 = var1.MESSAGE_COMPONENT;
            var9 = null;
            if(!(var6 === var1)) { _fun0012_ip = 171; continue _fun0012 }
case 172:
            var1 = var4 == var2;
            var6 = undefined;
            if(var1) { _fun0012_ip = 173; continue _fun0012 }
case 174:
            var6 = var2.state;
case 173:
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var1 = 4;
            var1 = var10[var1];
            var1 = var8.bind(var7)(var1);
            var1 = var1.InteractionState;
            var1 = var1.FAILED;
            var9 = null;
            if(!(var6 === var1)) { _fun0012_ip = 171; continue _fun0012 }
case 175:
            var1 = var2.data;
            var9 = var1.componentId;
case 171:
            var6 = var4 != var9;
            var1 = null;
            if(!var6) { _fun0012_ip = 176; continue _fun0012 }
case 41:
            var8 = _closure1_slot9;
            var6 = arg3;
            var1 = var8.bind(var7)(var6, var9);
case 176:
            if(!(var4 == var1)) { _fun0012_ip = 177; continue _fun0012 }
case 47:
            return var7;
case 177:
            var6 = var4 == var5;
            var1 = undefined;
            if(var6) { _fun0012_ip = 178; continue _fun0012 }
case 179:
            var1 = var5.interactionError;
case 178:
            if(!(var4 == var1)) { _fun0012_ip = 27; continue _fun0012 }
case 180:
            var5 = var4 == var2;
            var4 = undefined;
            if(var5) { _fun0012_ip = 181; continue _fun0012 }
case 182:
            var4 = var2.errorCode;
case 181:
            var2 = 429;
            if(!(var2 !== var4)) { _fun0012_ip = 183; continue _fun0012 }
case 184:
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
            _fun0012_ip = 8; continue _fun0012;
case 183:
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
case 8:
            var1 = var2;
case 27:
            return var1;
        }
    };
    var3['getLayoutComponentErrorText'] = var6;
    var6 = function getSelectPlaceholder(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var1 = arg1;
            var1 = var1.placeholder;
            var2 = null;
            if(!(var2 == var1)) { _fun0013_ip = 185; continue _fun0013 }
case 186:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 2;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.Otr6W1;
            var1 = var3.bind(var4)(var2);
case 185:
            return var1;
        }
    };
    var3['getSelectPlaceholder'] = var6;
    var3['flattenComponents'] = var5;
    var3['findChildComponent'] = var4;
    var4 = function getAllTextDisplayContent(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
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
            if(!(var3 !== var2)) { _fun0014_ip = 187; continue _fun0014 }
case 188:
            var1 = var2;
case 187:
            return var1;
        }
    };
    var3['getAllTextDisplayContent'] = var4;
    var4 = function getParents(arg1, arg2) {
        var2 = arg2;
        var _closure2_slot0 = var2;
        var3 = function search(arg1) {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                var4 = arguments[1];
                var12 = undefined;
                if(!(var4 === var12)) { _fun0015_ip = 186; continue _fun0015 }
case 189:
                var4 = new Array(0);
case 186:
                var2 = _closure1_slot5;
                var1 = arg1;
                var10 = var2.bind(var12)(var1);
                var5 = var10.bind(var12)();
                var2 = var5.done;
                var3 = 1;
                var1 = null;
                var8 = var5;
                if(var2) { _fun0015_ip = 190; continue _fun0015 }
case 191:
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
                if(var6) { _fun0015_ip = 192; continue _fun0015 }
case 193:
                var6 = _closure2_slot1;
                var2[0] = var5;
                var17 = var2;
                var16 = var4;
                var15 = var3;
                var14 = arraySpread(var17, var16, var15);
                var6 = var6.bind(var12)(var7, var2);
                if(!(var1 == var6)) { _fun0015_ip = 194; continue _fun0015 }
case 195:
                var14 = var10.bind(var12)();
                var7 = var14.done;
                var8 = var14;
                if(var7) { _fun0015_ip = 190; continue _fun0015 }
case 196:
                _fun0015_ip = 191; continue _fun0015;
case 194:
                return var6;
case 192:
                var2[0] = var5;
                var17 = var2;
                var16 = var4;
                var15 = var3;
                var3 = arraySpread(var17, var16, var15);
                return var2;
case 190:
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
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
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
            if(var5) { _fun0016_ip = 197; continue _fun0016 }
case 198:
            var7 = var1.crypto;
            var5 = var7.randomUUID;
            var2 = var5.bind(var7)();
case 197:
            if(!(var4 == var2)) { _fun0016_ip = 188; continue _fun0016 }
case 30:
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var4 = 6;
            var4 = var7[var4];
            var5 = var5.bind(var6)(var4);
            var4 = var5.v4;
            var2 = var4.bind(var5)();
case 188:
            var3['uniqueId'] = var2;
            var2 = var1.JSON;
            var1 = var2.stringify;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var3['makeComponentUploadId'] = var4;
    var4 = function deserializeComponentUploadId(arg1) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
            var1 = arg1;
            var2 = undefined;
case 199: // try_start_0
            var3 = global;
            var5 = var3.JSON;
            var3 = var5.parse;
            var1 = var3.bind(var5)(var1);
            var2 = var1;
            var5 = null;
            var1 = var5 == var1;
            var4 = undefined;
            if(var1) { _fun0017_ip = 2; continue _fun0017 }
case 200:
            var1 = var2;
            var4 = var1.type;
case 2:
            var3 = 'component-upload';
            var1 = null;
            if(!(var3 === var4)) { _fun0017_ip = 201; continue _fun0017 }
case 202:
            var3 = var2;
            var3 = var3.containerId;
            var4 = 'string';
            var3 = typeof var3;
            var1 = null;
            if(!(var4 === var3)) { _fun0017_ip = 201; continue _fun0017 }
case 174:
            var3 = var2;
            var3 = var3.uniqueId;
            var3 = typeof var3;
            var1 = null;
            if(!(var4 === var3)) { _fun0017_ip = 201; continue _fun0017 }
case 162:
            var1 = var2;
case 201: // try_end0
            return var1;
case 187: // catch_target0
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