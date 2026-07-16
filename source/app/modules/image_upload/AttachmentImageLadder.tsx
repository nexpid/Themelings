// app/modules/image_upload/AttachmentImageLadder.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
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
            var2 = var3["@@iterator"];
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
            var9 = _closure1_slot2;
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
            var7 = _closure1_slot2;
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
    var _closure1_slot1 = var1;
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
    var _closure1_slot2 = var1;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var4);
    var4 = [128, 192, 256, 320, 384, 512, 640, 768, 1024, 1280, 1536, 2048, 3072, 4096];
    var _closure1_slot0 = var4;
    var5 = dependencyMap;
    var1 = 0;
    var6 = var5[var1];
    var5 = require;
    var1 = undefined;
    var7 = var5.bind(var1)(var6);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/image_upload/AttachmentImageLadder.tsx';
    var5 = var6.bind(var7)(var5);
    var3['ATTACHMENT_LADDER'] = var4;
    var2 = function snapAttachmentDimensions(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var6 = arg1;
            var3 = var6.targetWidth;
            var2 = var6.targetHeight;
            var5 = var6.sourceWidth;
            var4 = var6.sourceHeight;
            var12 = var6.maxUpscale;
            var7 = global;
            var8 = var7.Math;
            var6 = var8.max;
            var6 = var6.bind(var8)(var3, var2);
            var _closure2_slot0 = var6;
            var8 = 0;
            if(!(!(var6 <= var8))) { _fun0004_ip = 36; continue _fun0004 }
case 30:
            var10 = _closure1_slot0;
            var8 = var10.find;
            var1 = function(arg1) {
                var2 = _closure2_slot0;
                var1 = arg1;
                var1 = var2 <= var1;
                return var1;
            };
            var11 = var8.bind(var10)(var1);
            var8 = null;
            if(!(var8 == var11)) { _fun0004_ip = 37; continue _fun0004 }
case 11:
            var10 = _closure1_slot0;
            var13 = var10.length;
            var1 = 1;
            var1 = var13 - var1;
            var11 = var10[var1];
case 37:
            var1 = var11;
            if(!(var8 != var12)) { _fun0004_ip = 38; continue _fun0004 }
case 39:
            var10 = 1;
            var1 = var11;
            if(!(var12 > var10)) { _fun0004_ip = 38; continue _fun0004 }
case 40:
            var10 = _closure1_slot1;
            var9 = _closure1_slot0;
            var16 = undefined;
            var15 = var10.bind(var16)(var9);
            var9 = var15.bind(var16)();
            var10 = var9.done;
            var14 = undefined;
            var13 = var9;
            var9 = undefined;
            if(var10) { _fun0004_ip = 41; continue _fun0004 }
case 42:
            var17 = var13.value;
            var9 = var14;
            if(!(var17 <= var6)) { _fun0004_ip = 41; continue _fun0004 }
case 16:
            var18 = var15.bind(var16)();
            var10 = var18.done;
            var14 = var17;
            var13 = var18;
            var9 = var14;
            if(!var10) { _fun0004_ip = 42; continue _fun0004 }
case 41:
            var10 = var8 != var9;
            if(!var10) { _fun0004_ip = 43; continue _fun0004 }
case 44:
            var12 = var9 * var12;
            var10 = var6 <= var12;
case 43:
            var1 = var11;
            if(!var10) { _fun0004_ip = 38; continue _fun0004 }
case 45:
            var1 = var9;
case 38:
            if(!(var8 != var5)) { _fun0004_ip = 46; continue _fun0004 }
case 47:
            if(!(var8 != var4)) { _fun0004_ip = 46; continue _fun0004 }
case 48:
            var10 = var7.Math;
            var9 = var10.max;
            var9 = var9.bind(var10)(var5, var4);
            if(!(!(var9 <= var1))) { _fun0004_ip = 49; continue _fun0004 }
case 46:
            var1 = var1 / var6;
            var11 = var7.Math;
            var9 = var11.max;
            var12 = var7.Math;
            var10 = var12.round;
            var6 = var3 * var1;
            var6 = var10.bind(var12)(var6);
            var10 = 1;
            var12 = var9.bind(var11)(var10, var6);
            var9 = var7.Math;
            var6 = var9.max;
            var13 = var7.Math;
            var11 = var13.round;
            var1 = var2 * var1;
            var1 = var11.bind(var13)(var1);
            var9 = var6.bind(var9)(var10, var1);
            var1 = {};
            var6 = var12;
            if(!(var8 != var5)) { _fun0004_ip = 50; continue _fun0004 }
case 51:
            var11 = var7.Math;
            var10 = var11.min;
            var6 = var10.bind(var11)(var12, var5);
case 50:
            var1['width'] = var6;
            var6 = var9;
            if(!(var8 != var4)) { _fun0004_ip = 52; continue _fun0004 }
case 53:
            var8 = var7.Math;
            var7 = var8.min;
            var6 = var7.bind(var8)(var9, var4);
case 52:
            var1['height'] = var6;
            return var1;
case 49:
            var1 = {};
            var1['width'] = var5;
            var1['height'] = var4;
            return var1;
case 36:
            var1 = {};
            var1['width'] = var3;
            var1['height'] = var2;
            return var1;
        }
    };
    var3['snapAttachmentDimensions'] = var2;
    return var1;
})();