// app/modules/interaction_components/InteractionComponentUtils.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var7 = native2;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var7;
    var1 = native3;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
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
            var3 = _closure1_slot4;
            var5 = undefined;
            var2 = arg1;
            var4 = var3.bind(var5)(var2);
            var3 = var4.bind(var5)();
            var2 = var3.done;
            if(var2) { _fun0004_ip = 87; continue _fun0004 }
 57:
            var7 = _closure1_slot7;
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
    var _closure1_slot6 = var5;
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
            var9 = 2;
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
                var4 = _closure1_slot7;
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
                var4 = _closure1_slot7;
                var3 = _closure2_slot0;
                var1 = undefined;
                var2 = arg1;
                var2 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var5 = var7.bind(var8)(var5);
            var5 = _closure1_slot7;
            var4 = var3.accessory;
            var4 = var5.bind(var1)(var6, var4);
            _fun0005_ip = 226; continue _fun0005;
 205:
            var4 = var3.components;
            var3 = var4.forEach;
            var2 = function(arg1) {
                var4 = _closure1_slot7;
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
    var _closure1_slot7 = var1;
    var4 = function findChildComponent(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var2 = arg1;
            var4 = arg2;
            var _closure2_slot0 = var4;
            var6 = var2.type;
            var9 = _closure1_slot0;
            var3 = _closure1_slot2;
            var8 = 2;
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
    var _closure1_slot8 = var4;
    var1 = function transformComponent(arg1, arg2, arg3) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var2 = arg1;
            var6 = arg2;
            var5 = arg3;
            var _closure2_slot0 = var6;
            var _closure2_slot1 = var5;
            var9 = function getChildComponent(arg1, arg2) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var7 = _closure2_slot1;
                    var5 = new Array(1);
                    var6 = 0;
                    var8 = var5;
                    var3 = arraySpread(var8, var7, var6);
                    var2 = arg2;
                    var5[var3] = var2;
                    var2 = 1;
                    var2 = var3 + var2;
                    var4 = _closure1_slot9;
                    var3 = _closure2_slot0;
                    var2 = undefined;
                    var1 = arg1;
                    var2 = var4.bind(var2)(var1, var3, var5);
                    var1 = null;
                    var3 = var1 == var2;
                    if(var3) { _fun0008_ip = 70; continue _fun0008 }
 67:
                    var1 = var2;
 70:
                    return var1;
                }
            };
            var _closure2_slot3 = var9;
            var11 = var2.type;
            var10 = _closure1_slot0;
            var4 = _closure1_slot2;
            var8 = 2;
            var7 = var4[var8];
            var4 = undefined;
            var7 = var10.bind(var4)(var7);
            var7 = var7.ComponentType;
            var10 = var7.ACTION_ROW;
            var7 = true;
            if(!(var10 !== var11)) { _fun0007_ip = 677; continue _fun0007 }
 79:
            var13 = _closure1_slot0;
            var10 = _closure1_slot2;
            var10 = var10[var8];
            var10 = var13.bind(var4)(var10);
            var10 = var10.ComponentType;
            var10 = var10.BUTTON;
            var7 = true;
            if(!(var10 !== var11)) { _fun0007_ip = 677; continue _fun0007 }
 117:
            var13 = _closure1_slot0;
            var10 = _closure1_slot2;
            var10 = var10[var8];
            var10 = var13.bind(var4)(var10);
            var10 = var10.ComponentType;
            var10 = var10.STRING_SELECT;
            var7 = true;
            if(!(var10 !== var11)) { _fun0007_ip = 677; continue _fun0007 }
 155:
            var13 = _closure1_slot0;
            var10 = _closure1_slot2;
            var10 = var10[var8];
            var10 = var13.bind(var4)(var10);
            var10 = var10.ComponentType;
            var10 = var10.TEXT_INPUT;
            var7 = true;
            if(!(var10 !== var11)) { _fun0007_ip = 677; continue _fun0007 }
 193:
            var13 = _closure1_slot0;
            var10 = _closure1_slot2;
            var10 = var10[var8];
            var10 = var13.bind(var4)(var10);
            var10 = var10.ComponentType;
            var10 = var10.USER_SELECT;
            var7 = true;
            if(!(var10 !== var11)) { _fun0007_ip = 677; continue _fun0007 }
 231:
            var13 = _closure1_slot0;
            var10 = _closure1_slot2;
            var10 = var10[var8];
            var10 = var13.bind(var4)(var10);
            var10 = var10.ComponentType;
            var10 = var10.ROLE_SELECT;
            var7 = true;
            if(!(var10 !== var11)) { _fun0007_ip = 677; continue _fun0007 }
 269:
            var13 = _closure1_slot0;
            var10 = _closure1_slot2;
            var10 = var10[var8];
            var10 = var13.bind(var4)(var10);
            var10 = var10.ComponentType;
            var10 = var10.MENTIONABLE_SELECT;
            var7 = true;
            if(!(var10 !== var11)) { _fun0007_ip = 677; continue _fun0007 }
 307:
            var13 = _closure1_slot0;
            var10 = _closure1_slot2;
            var10 = var10[var8];
            var10 = var13.bind(var4)(var10);
            var10 = var10.ComponentType;
            var10 = var10.CHANNEL_SELECT;
            var7 = true;
            if(!(var10 !== var11)) { _fun0007_ip = 677; continue _fun0007 }
 345:
            var13 = _closure1_slot0;
            var10 = _closure1_slot2;
            var10 = var10[var8];
            var10 = var13.bind(var4)(var10);
            var10 = var10.ComponentType;
            var10 = var10.SECTION;
            var7 = true;
            if(!(var10 !== var11)) { _fun0007_ip = 677; continue _fun0007 }
 383:
            var13 = _closure1_slot0;
            var10 = _closure1_slot2;
            var10 = var10[var8];
            var10 = var13.bind(var4)(var10);
            var10 = var10.ComponentType;
            var10 = var10.TEXT_DISPLAY;
            var7 = true;
            if(!(var10 !== var11)) { _fun0007_ip = 677; continue _fun0007 }
 421:
            var13 = _closure1_slot0;
            var10 = _closure1_slot2;
            var10 = var10[var8];
            var10 = var13.bind(var4)(var10);
            var10 = var10.ComponentType;
            var10 = var10.THUMBNAIL;
            var7 = true;
            if(!(var10 !== var11)) { _fun0007_ip = 677; continue _fun0007 }
 459:
            var13 = _closure1_slot0;
            var10 = _closure1_slot2;
            var10 = var10[var8];
            var10 = var13.bind(var4)(var10);
            var10 = var10.ComponentType;
            var10 = var10.MEDIA_GALLERY;
            var7 = true;
            if(!(var10 !== var11)) { _fun0007_ip = 677; continue _fun0007 }
 497:
            var13 = _closure1_slot0;
            var10 = _closure1_slot2;
            var10 = var10[var8];
            var10 = var13.bind(var4)(var10);
            var10 = var10.ComponentType;
            var10 = var10.FILE;
            var7 = true;
            if(!(var10 !== var11)) { _fun0007_ip = 677; continue _fun0007 }
 535:
            var13 = _closure1_slot0;
            var10 = _closure1_slot2;
            var10 = var10[var8];
            var10 = var13.bind(var4)(var10);
            var10 = var10.ComponentType;
            var10 = var10.SEPARATOR;
            var7 = true;
            if(!(var10 !== var11)) { _fun0007_ip = 677; continue _fun0007 }
 570:
            var13 = _closure1_slot0;
            var10 = _closure1_slot2;
            var10 = var10[var8];
            var10 = var13.bind(var4)(var10);
            var10 = var10.ComponentType;
            var10 = var10.CONTAINER;
            var7 = true;
            if(!(var10 !== var11)) { _fun0007_ip = 677; continue _fun0007 }
 605:
            var12 = _closure1_slot0;
            var10 = _closure1_slot2;
            var10 = var10[var8];
            var10 = var12.bind(var4)(var10);
            var10 = var10.ComponentType;
            var10 = var10.CONTENT_INVENTORY_ENTRY;
            var7 = undefined;
            if(!(var10 === var11)) { _fun0007_ip = 677; continue _fun0007 }
 640:
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var10 = 4;
            var10 = var12[var10];
            var12 = var11.bind(var4)(var10);
            var11 = var12.isContentInventoryEmbedEnabled;
            var10 = 'canShowComponent';
            var7 = var11.bind(var12)(var10);
 677:
            if(var7) { _fun0007_ip = 684; continue _fun0007 }
 680:
            var7 = null;
            return var7;
 684:
            var10 = var6.includeEmojiSrc;
            var _closure2_slot2 = var10;
            var7 = var2.type;
            var11 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var8];
            var6 = var11.bind(var4)(var6);
            var6 = var6.ComponentType;
            var6 = var6.ACTION_ROW;
            if(!(var6 !== var7)) { _fun0007_ip = 3334; continue _fun0007 }
 735:
            var11 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var8];
            var6 = var11.bind(var4)(var6);
            var6 = var6.ComponentType;
            var6 = var6.BUTTON;
            if(!(var6 !== var7)) { _fun0007_ip = 3188; continue _fun0007 }
 771:
            var11 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var8];
            var6 = var11.bind(var4)(var6);
            var6 = var6.ComponentType;
            var6 = var6.STRING_SELECT;
            if(!(var6 !== var7)) { _fun0007_ip = 3000; continue _fun0007 }
 807:
            var11 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var8];
            var6 = var11.bind(var4)(var6);
            var6 = var6.ComponentType;
            var6 = var6.TEXT_INPUT;
            if(!(var6 !== var7)) { _fun0007_ip = 2871; continue _fun0007 }
 843:
            var11 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var8];
            var6 = var11.bind(var4)(var6);
            var6 = var6.ComponentType;
            var6 = var6.USER_SELECT;
            if(!(var6 !== var7)) { _fun0007_ip = 2696; continue _fun0007 }
 879:
            var11 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var8];
            var6 = var11.bind(var4)(var6);
            var6 = var6.ComponentType;
            var6 = var6.ROLE_SELECT;
            if(!(var6 !== var7)) { _fun0007_ip = 2521; continue _fun0007 }
 915:
            var11 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var8];
            var6 = var11.bind(var4)(var6);
            var6 = var6.ComponentType;
            var6 = var6.MENTIONABLE_SELECT;
            if(!(var6 !== var7)) { _fun0007_ip = 2346; continue _fun0007 }
 951:
            var11 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var8];
            var6 = var11.bind(var4)(var6);
            var6 = var6.ComponentType;
            var6 = var6.CHANNEL_SELECT;
            if(!(var6 !== var7)) { _fun0007_ip = 2160; continue _fun0007 }
 987:
            var11 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var8];
            var6 = var11.bind(var4)(var6);
            var6 = var6.ComponentType;
            var6 = var6.SECTION;
            if(!(var6 !== var7)) { _fun0007_ip = 1999; continue _fun0007 }
 1023:
            var11 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var8];
            var6 = var11.bind(var4)(var6);
            var6 = var6.ComponentType;
            var6 = var6.TEXT_DISPLAY;
            if(!(var6 !== var7)) { _fun0007_ip = 1940; continue _fun0007 }
 1059:
            var11 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var8];
            var6 = var11.bind(var4)(var6);
            var6 = var6.ComponentType;
            var6 = var6.THUMBNAIL;
            if(!(var6 !== var7)) { _fun0007_ip = 1836; continue _fun0007 }
 1095:
            var11 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var8];
            var6 = var11.bind(var4)(var6);
            var6 = var6.ComponentType;
            var6 = var6.MEDIA_GALLERY;
            if(!(var6 !== var7)) { _fun0007_ip = 1760; continue _fun0007 }
 1131:
            var11 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var8];
            var6 = var11.bind(var4)(var6);
            var6 = var6.ComponentType;
            var6 = var6.FILE;
            if(!(var6 !== var7)) { _fun0007_ip = 1647; continue _fun0007 }
 1167:
            var11 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var8];
            var6 = var11.bind(var4)(var6);
            var6 = var6.ComponentType;
            var6 = var6.SEPARATOR;
            if(!(var6 !== var7)) { _fun0007_ip = 1532; continue _fun0007 }
 1203:
            var11 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var8];
            var6 = var11.bind(var4)(var6);
            var6 = var6.ComponentType;
            var6 = var6.CONTENT_INVENTORY_ENTRY;
            if(!(var6 !== var7)) { _fun0007_ip = 1453; continue _fun0007 }
 1239:
            var11 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var8];
            var6 = var11.bind(var4)(var6);
            var6 = var6.ComponentType;
            var6 = var6.CONTAINER;
            if(!(var6 !== var7)) { _fun0007_ip = 1276; continue _fun0007 }
 1272:
            var6 = null;
            return var6;
 1276:
            var11 = var2.components;
            var7 = var11.map;
            var6 = function(arg1, arg2) {
                var4 = _closure2_slot3;
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
            var6 = 5;
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
            var11 = _closure1_slot10;
            var11 = var11.bind(var4)(var5);
            var6['id'] = var11;
            var12 = var2.accent_color;
            var11 = null;
            var12 = var11 != var12;
            var11 = undefined;
            if(!var12) { _fun0007_ip = 1430; continue _fun0007 }
 1390:
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var12 = 8;
            var12 = var14[var12];
            var15 = var13.bind(var4)(var12);
            var14 = var15.int2hsl;
            var13 = var2.accent_color;
            var12 = false;
            var11 = var14.bind(var15)(var13, var12);
 1430:
            var6['accentColor'] = var11;
            var11 = var2.spoiler;
            var6['spoiler'] = var11;
            var6['components'] = var7;
            return var6;
 1453:
            var7 = var2.content_inventory_entry;
            var6 = null;
            var7 = var6 == var7;
            if(var7) { _fun0007_ip = 1530; continue _fun0007 }
 1468:
            var7 = {};
            var12 = _closure1_slot0;
            var11 = _closure1_slot2;
            var11 = var11[var8];
            var11 = var12.bind(var4)(var11);
            var11 = var11.ComponentType;
            var11 = var11.CONTENT_INVENTORY_ENTRY;
            var7['type'] = var11;
            var11 = _closure1_slot10;
            var11 = var11.bind(var4)(var5);
            var7['id'] = var11;
            var11 = var2.content_inventory_entry;
            var7['contentInventoryEntry'] = var11;
            var6 = var7;
 1530:
            return var6;
 1532:
            var6 = {};
            var11 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var8];
            var7 = var11.bind(var4)(var7);
            var7 = var7.ComponentType;
            var7 = var7.SEPARATOR;
            var6['type'] = var7;
            var7 = _closure1_slot10;
            var7 = var7.bind(var4)(var5);
            var6['id'] = var7;
            var12 = var2.divider;
            var11 = null;
            var7 = var11 == var12;
            if(var7) { _fun0007_ip = 1598; continue _fun0007 }
 1595:
            var7 = var12;
 1598:
            var6['divider'] = var7;
            var7 = var2.spacing;
            if(!(var11 == var7)) { _fun0007_ip = 1641; continue _fun0007 }
 1612:
            var12 = _closure1_slot0;
            var11 = _closure1_slot2;
            var11 = var11[var8];
            var11 = var12.bind(var4)(var11);
            var11 = var11.SeparatorSpacingSize;
            var7 = var11.SMALL;
 1641:
            var6['spacing'] = var7;
            return var6;
 1647:
            var6 = {};
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var7 = var12[var8];
            var7 = var11.bind(var4)(var7);
            var7 = var7.ComponentType;
            var7 = var7.FILE;
            var6['type'] = var7;
            var7 = _closure1_slot10;
            var7 = var7.bind(var4)(var5);
            var6['id'] = var7;
            var7 = 7;
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
 1760:
            var6 = {};
            var11 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var8];
            var7 = var11.bind(var4)(var7);
            var7 = var7.ComponentType;
            var7 = var7.MEDIA_GALLERY;
            var6['type'] = var7;
            var7 = _closure1_slot10;
            var7 = var7.bind(var4)(var5);
            var6['id'] = var7;
            var12 = var2.items;
            var11 = var12.map;
            var7 = function(arg1) {
                var2 = arg1;
                var1 = {};
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var3 = 7;
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
 1836:
            var6 = {};
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var7 = var12[var8];
            var7 = var11.bind(var4)(var7);
            var7 = var7.ComponentType;
            var7 = var7.THUMBNAIL;
            var6['type'] = var7;
            var7 = _closure1_slot10;
            var7 = var7.bind(var4)(var5);
            var6['id'] = var7;
            var7 = 7;
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
 1940:
            var6 = {};
            var11 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var8];
            var7 = var11.bind(var4)(var7);
            var7 = var7.ComponentType;
            var7 = var7.TEXT_DISPLAY;
            var6['type'] = var7;
            var7 = _closure1_slot10;
            var7 = var7.bind(var4)(var5);
            var6['id'] = var7;
            var7 = var2.content;
            var6['content'] = var7;
            return var6;
 1999:
            var11 = var2.components;
            var7 = var11.map;
            var6 = function(arg1, arg2) {
                var4 = _closure2_slot3;
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
            var6 = 5;
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
            if(!(var7 !== var13)) { _fun0007_ip = 2158; continue _fun0007 }
 2088:
            var7 = var12 == var9;
            var6 = null;
            if(var7) { _fun0007_ip = 2158; continue _fun0007 }
 2097:
            var7 = {};
            var13 = _closure1_slot0;
            var12 = _closure1_slot2;
            var12 = var12[var8];
            var12 = var13.bind(var4)(var12);
            var12 = var12.ComponentType;
            var12 = var12.SECTION;
            var7['type'] = var12;
            var12 = _closure1_slot10;
            var12 = var12.bind(var4)(var5);
            var7['id'] = var12;
            var7['components'] = var11;
            var7['accessory'] = var9;
            var6 = var7;
 2158:
            return var6;
 2160:
            var6 = {};
            var9 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var8];
            var7 = var9.bind(var4)(var7);
            var7 = var7.ComponentType;
            var7 = var7.CHANNEL_SELECT;
            var6['type'] = var7;
            var7 = _closure1_slot10;
            var7 = var7.bind(var4)(var5);
            var6['id'] = var7;
            var7 = var2.custom_id;
            var6['customId'] = var7;
            var7 = var2.disabled;
            var6['disabled'] = var7;
            var7 = var2.placeholder;
            var9 = null;
            if(!(var9 == var7)) { _fun0007_ip = 2295; continue _fun0007 }
 2240:
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var9 = 1;
            var11 = var14[var9];
            var11 = var13.bind(var4)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var9 = var14[var9];
            var9 = var13.bind(var4)(var9);
            var9 = var9.t;
            var9 = var9.Otr6W1;
            var7 = var11.bind(var12)(var9);
 2295:
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
 2346:
            var6 = {};
            var9 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var8];
            var7 = var9.bind(var4)(var7);
            var7 = var7.ComponentType;
            var7 = var7.MENTIONABLE_SELECT;
            var6['type'] = var7;
            var7 = _closure1_slot10;
            var7 = var7.bind(var4)(var5);
            var6['id'] = var7;
            var7 = var2.custom_id;
            var6['customId'] = var7;
            var7 = var2.disabled;
            var6['disabled'] = var7;
            var7 = var2.placeholder;
            var9 = null;
            if(!(var9 == var7)) { _fun0007_ip = 2481; continue _fun0007 }
 2426:
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var9 = 1;
            var11 = var14[var9];
            var11 = var13.bind(var4)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var9 = var14[var9];
            var9 = var13.bind(var4)(var9);
            var9 = var9.t;
            var9 = var9.Otr6W1;
            var7 = var11.bind(var12)(var9);
 2481:
            var6['placeholder'] = var7;
            var7 = var2.min_values;
            var6['minValues'] = var7;
            var7 = var2.max_values;
            var6['maxValues'] = var7;
            var7 = var2.default_values;
            var6['defaultValues'] = var7;
            return var6;
 2521:
            var6 = {};
            var9 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var8];
            var7 = var9.bind(var4)(var7);
            var7 = var7.ComponentType;
            var7 = var7.ROLE_SELECT;
            var6['type'] = var7;
            var7 = _closure1_slot10;
            var7 = var7.bind(var4)(var5);
            var6['id'] = var7;
            var7 = var2.custom_id;
            var6['customId'] = var7;
            var7 = var2.disabled;
            var6['disabled'] = var7;
            var7 = var2.placeholder;
            var9 = null;
            if(!(var9 == var7)) { _fun0007_ip = 2656; continue _fun0007 }
 2601:
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var9 = 1;
            var11 = var14[var9];
            var11 = var13.bind(var4)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var9 = var14[var9];
            var9 = var13.bind(var4)(var9);
            var9 = var9.t;
            var9 = var9.Otr6W1;
            var7 = var11.bind(var12)(var9);
 2656:
            var6['placeholder'] = var7;
            var7 = var2.min_values;
            var6['minValues'] = var7;
            var7 = var2.max_values;
            var6['maxValues'] = var7;
            var7 = var2.default_values;
            var6['defaultValues'] = var7;
            return var6;
 2696:
            var6 = {};
            var9 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var8];
            var7 = var9.bind(var4)(var7);
            var7 = var7.ComponentType;
            var7 = var7.USER_SELECT;
            var6['type'] = var7;
            var7 = _closure1_slot10;
            var7 = var7.bind(var4)(var5);
            var6['id'] = var7;
            var7 = var2.custom_id;
            var6['customId'] = var7;
            var7 = var2.disabled;
            var6['disabled'] = var7;
            var7 = var2.placeholder;
            var9 = null;
            if(!(var9 == var7)) { _fun0007_ip = 2831; continue _fun0007 }
 2776:
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var9 = 1;
            var11 = var14[var9];
            var11 = var13.bind(var4)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var9 = var14[var9];
            var9 = var13.bind(var4)(var9);
            var9 = var9.t;
            var9 = var9.Otr6W1;
            var7 = var11.bind(var12)(var9);
 2831:
            var6['placeholder'] = var7;
            var7 = var2.min_values;
            var6['minValues'] = var7;
            var7 = var2.max_values;
            var6['maxValues'] = var7;
            var7 = var2.default_values;
            var6['defaultValues'] = var7;
            return var6;
 2871:
            var6 = {};
            var7 = var2.type;
            var6['type'] = var7;
            var7 = _closure1_slot10;
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
            if(!var7) { _fun0007_ip = 2971; continue _fun0007 }
 2968:
            var7 = var9;
 2971:
            var6['required'] = var7;
            var7 = var2.min_length;
            var6['minLength'] = var7;
            var7 = var2.max_length;
            var6['maxLength'] = var7;
            return var6;
 3000:
            var6 = {};
            var9 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var8];
            var7 = var9.bind(var4)(var7);
            var7 = var7.ComponentType;
            var7 = var7.STRING_SELECT;
            var6['type'] = var7;
            var7 = _closure1_slot10;
            var7 = var7.bind(var4)(var5);
            var6['id'] = var7;
            var7 = var2.custom_id;
            var6['customId'] = var7;
            var7 = var2.disabled;
            var6['disabled'] = var7;
            var11 = var2.options;
            var9 = var11.map;
            var7 = function(arg1) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var3 = arg1;
                    var1 = {};
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var2 = 6;
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
                    if(!var5) { _fun0009_ip = 122; continue _fun0009 }
 99:
                    var5 = _closure1_slot3;
                    var4 = var3.emoji;
                    var3 = _closure2_slot2;
                    var2 = var5.bind(var6)(var4, var3);
 122:
                    var1['emoji'] = var2;
                    return var1;
                }
            };
            var7 = var9.bind(var11)(var7);
            var6['options'] = var7;
            var7 = var2.placeholder;
            var9 = null;
            if(!(var9 == var7)) { _fun0007_ip = 3159; continue _fun0007 }
 3104:
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var9 = 1;
            var11 = var14[var9];
            var11 = var13.bind(var4)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var9 = var14[var9];
            var9 = var13.bind(var4)(var9);
            var9 = var9.t;
            var9 = var9.Otr6W1;
            var7 = var11.bind(var12)(var9);
 3159:
            var6['placeholder'] = var7;
            var7 = var2.min_values;
            var6['minValues'] = var7;
            var7 = var2.max_values;
            var6['maxValues'] = var7;
            return var6;
 3188:
            var7 = var2.emoji;
            var6 = null;
            var6 = var6 != var7;
            var7 = undefined;
            if(!var6) { _fun0007_ip = 3221; continue _fun0007 }
 3205:
            var9 = _closure1_slot3;
            var6 = var2.emoji;
            var7 = var9.bind(var4)(var6, var10);
 3221:
            var6 = {};
            var10 = _closure1_slot0;
            var9 = _closure1_slot2;
            var9 = var9[var8];
            var9 = var10.bind(var4)(var9);
            var9 = var9.ComponentType;
            var9 = var9.BUTTON;
            var6['type'] = var9;
            var9 = _closure1_slot10;
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
 3334:
            var6 = var2.components;
            var2 = var6.map;
            var1 = function(arg1, arg2) {
                var4 = _closure2_slot3;
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
            var1 = 5;
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
            var3 = _closure1_slot10;
            var3 = var3.bind(var4)(var5);
            var1['id'] = var3;
            var1['components'] = var2;
            return var1;
        }
    };
    var _closure1_slot9 = var1;
    var1 = function indicesToId(arg1) {
        var5 = arg1;
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 6;
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
    var _closure1_slot10 = var1;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var8 = {};
    var1 = true;
    var8['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var8);
    var1 = function getEmoji(arg1, arg2) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
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
            if(!var3) { _fun0010_ip = 127; continue _fun0010 }
 44:
            var4 = var6.id;
            var3 = null;
            var3 = var3 != var4;
            var2 = undefined;
            if(!var3) { _fun0010_ip = 127; continue _fun0010 }
 60:
            var4 = _closure1_slot1;
            var7 = _closure1_slot2;
            var3 = 0;
            var3 = var7[var3];
            var5 = var4.bind(var5)(var3);
            var4 = var5.getEmojiURL;
            var3 = {};
            var7 = var6.id;
            var3['id'] = var7;
            var6 = var6.animated;
            if(var6) { _fun0010_ip = 110; continue _fun0010 }
 108:
            var6 = false;
 110:
            var3['animated'] = var6;
            var6 = 48;
            var3['size'] = var6;
            var2 = var4.bind(var5)(var3);
 127:
            var1['src'] = var2;
            return var1;
        }
    };
    var _closure1_slot3 = var1;
    var1 = 9;
    var6 = var6[var1];
    var1 = undefined;
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/interaction_components/InteractionComponentUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var6 = function(arg1, arg2, arg3) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
            var2 = arg1;
            var5 = arg2;
            var4 = null;
            var1 = var4 == var2;
            var7 = undefined;
            var6 = undefined;
            if(var1) { _fun0011_ip = 30; continue _fun0011 }
 19:
            var1 = var2.data;
            var6 = var1.interactionType;
 30:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 2;
            var1 = var9[var1];
            var1 = var8.bind(var7)(var1);
            var1 = var1.InteractionTypes;
            var1 = var1.MESSAGE_COMPONENT;
            var9 = null;
            if(!(var6 === var1)) { _fun0011_ip = 134; continue _fun0011 }
 71:
            var1 = var4 == var2;
            var6 = undefined;
            if(var1) { _fun0011_ip = 85; continue _fun0011 }
 80:
            var6 = var2.state;
 85:
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var1 = 3;
            var1 = var10[var1];
            var1 = var8.bind(var7)(var1);
            var1 = var1.InteractionState;
            var1 = var1.FAILED;
            var9 = null;
            if(!(var6 === var1)) { _fun0011_ip = 134; continue _fun0011 }
 123:
            var1 = var2.data;
            var9 = var1.componentId;
 134:
            var6 = var4 != var9;
            var1 = null;
            if(!var6) { _fun0011_ip = 156; continue _fun0011 }
 143:
            var8 = _closure1_slot8;
            var6 = arg3;
            var1 = var8.bind(var7)(var6, var9);
 156:
            if(!(var4 == var1)) { _fun0011_ip = 162; continue _fun0011 }
 160:
            return var7;
 162:
            var6 = var4 == var5;
            var1 = undefined;
            if(var6) { _fun0011_ip = 177; continue _fun0011 }
 171:
            var1 = var5.interactionError;
 177:
            if(!(var4 == var1)) { _fun0011_ip = 326; continue _fun0011 }
 184:
            var5 = var4 == var2;
            var4 = undefined;
            if(var5) { _fun0011_ip = 199; continue _fun0011 }
 193:
            var4 = var2.errorCode;
 199:
            var2 = 429;
            if(!(var2 !== var4)) { _fun0011_ip = 266; continue _fun0011 }
 209:
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 1;
            var4 = var8[var2];
            var4 = var6.bind(var7)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var2 = var8[var2];
            var2 = var6.bind(var7)(var2);
            var2 = var2.t;
            var2 = var2.VCsUJi;
            var2 = var4.bind(var5)(var2);
            _fun0011_ip = 323; continue _fun0011;
 266:
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 1;
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
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
            var4 = _closure1_slot6;
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
                var1 = 2;
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
            if(!(var3 !== var2)) { _fun0012_ip = 103; continue _fun0012 }
 100:
            var1 = var2;
 103:
            return var1;
        }
    };
    var3['getAllTextDisplayContent'] = var4;
    var2 = function transformComponents(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
            var4 = arg1;
            var2 = arguments[1];
            var3 = undefined;
            if(!(var2 === var3)) { _fun0013_ip = 16; continue _fun0013 }
 14:
            var2 = {};
 16:
            var _closure2_slot0 = var2;
            var3 = var4.map;
            var2 = function(arg1, arg2) {
                var5 = _closure1_slot9;
                var4 = _closure2_slot0;
                var3 = new Array(1);
                var1 = arg2;
                var3[0] = var1;
                var2 = undefined;
                var1 = arg1;
                var1 = var5.bind(var2)(var1, var4, var3);
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
        }
    };
    var3['transformComponents'] = var2;
    return var1;
})();