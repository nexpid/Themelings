// app/modules/canvas/BaseDiscordCanvasRenderer.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var2 = function() {
        var4 = _closure1_slot4;
        var3 = function BaseDiscordCanvasRenderer(arg1, arg2) {
            var3 = this;
            var5 = _closure1_slot3;
            var2 = _closure2_slot0;
            var1 = undefined;
            var2 = var5.bind(var1)(var3, var2);
            var2 = 'black';
            var3['color'] = var2;
            var2 = {'style': 'normal', 'weight': 300};
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var4 = 2;
            var4 = var6[var4];
            var4 = var5.bind(var1)(var4);
            var4 = var4.DEFAULT_FONT_SIZE;
            var2['size'] = var4;
            var4 = ['serif'];
            var2['family'] = var4;
            var4 = 3;
            var4 = var6[var4];
            var4 = var5.bind(var1)(var4);
            var4 = var4.TextTruncationMethod;
            var4 = var4.None;
            var2['truncate'] = var4;
            var3['font'] = var2;
            var2 = {'blur': 0, 'brightness': 1, 'contrast': 1, 'grayscale': 0, 'hueRotation': 0, 'invert': 0, 'opacity': 1, 'saturate': 1, 'sepia': 0};
            var3['filter'] = var2;
            var2 = arg1;
            var3['canvas'] = var2;
            var2 = arg2;
            var3['assetMap'] = var2;
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'getCanvas';
        var1['key'] = var2;
        var2 = function value() {
            var1 = this;
            var1 = var1.canvas;
            return var1;
        };
        var1['value'] = var2;
        var2 = new Array(7);
        var2[0] = var1;
        var1 = {};
        var6 = 'setColor';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var2 = arg1;
            var1 = this;
            var1['color'] = var2;
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'setFont';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var1 = arg1;
                var3 = this;
                var5 = var3.font;
                var2 = var1.style;
                var4 = null;
                if(!(var4 == var2)) { _fun0004_ip = 36; continue _fun0004 }
case 31:
                var6 = var3.font;
                var2 = var6.style;
case 36:
                var5['style'] = var2;
                var5 = var3.font;
                var2 = var1.size;
                if(!(var4 == var2)) { _fun0004_ip = 37; continue _fun0004 }
case 4:
                var6 = var3.font;
                var2 = var6.size;
case 37:
                var5['size'] = var2;
                var5 = var3.font;
                var2 = var1.weight;
                if(!(var4 == var2)) { _fun0004_ip = 38; continue _fun0004 }
case 39:
                var6 = var3.font;
                var2 = var6.weight;
case 38:
                var5['weight'] = var2;
                var5 = var3.font;
                var2 = var1.family;
                if(!(var4 == var2)) { _fun0004_ip = 40; continue _fun0004 }
case 41:
                var6 = var3.font;
                var2 = var6.family;
case 40:
                var5['family'] = var2;
                var2 = var3.font;
                var1 = var1.truncate;
                if(!(var4 == var1)) { _fun0004_ip = 42; continue _fun0004 }
case 43:
                var3 = var3.font;
                var1 = var3.truncate;
case 42:
                var2['truncate'] = var1;
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[2] = var1;
        var1 = {};
        var6 = 'setFilter';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var1 = arg1;
                var3 = this;
                var5 = var3.filter;
                var2 = var1.blur;
                var4 = null;
                if(!(var4 == var2)) { _fun0005_ip = 36; continue _fun0005 }
case 31:
                var6 = var3.filter;
                var2 = var6.blur;
case 36:
                var5['blur'] = var2;
                var5 = var3.filter;
                var2 = var1.brightness;
                if(!(var4 == var2)) { _fun0005_ip = 37; continue _fun0005 }
case 4:
                var6 = var3.filter;
                var2 = var6.brightness;
case 37:
                var5['brightness'] = var2;
                var5 = var3.filter;
                var2 = var1.contrast;
                if(!(var4 == var2)) { _fun0005_ip = 44; continue _fun0005 }
case 45:
                var6 = var3.filter;
                var2 = var6.contrast;
case 44:
                var5['contrast'] = var2;
                var5 = var3.filter;
                var2 = var1.grayscale;
                if(!(var4 == var2)) { _fun0005_ip = 46; continue _fun0005 }
case 47:
                var6 = var3.filter;
                var2 = var6.grayscale;
case 46:
                var5['grayscale'] = var2;
                var5 = var3.filter;
                var2 = var1.hueRotation;
                if(!(var4 == var2)) { _fun0005_ip = 48; continue _fun0005 }
case 49:
                var6 = var3.filter;
                var2 = var6.hueRotation;
case 48:
                var5['hueRotation'] = var2;
                var5 = var3.filter;
                var2 = var1.invert;
                if(!(var4 == var2)) { _fun0005_ip = 50; continue _fun0005 }
case 51:
                var6 = var3.filter;
                var2 = var6.invert;
case 50:
                var5['invert'] = var2;
                var5 = var3.filter;
                var2 = var1.opacity;
                if(!(var4 == var2)) { _fun0005_ip = 52; continue _fun0005 }
case 53:
                var6 = var3.filter;
                var2 = var6.opacity;
case 52:
                var5['opacity'] = var2;
                var5 = var3.filter;
                var2 = var1.saturate;
                if(!(var4 == var2)) { _fun0005_ip = 54; continue _fun0005 }
case 55:
                var6 = var3.filter;
                var2 = var6.saturate;
case 54:
                var5['saturate'] = var2;
                var2 = var3.filter;
                var1 = var1.sepia;
                if(!(var4 == var1)) { _fun0005_ip = 56; continue _fun0005 }
case 57:
                var3 = var3.filter;
                var1 = var3.sepia;
case 56:
                var2['sepia'] = var1;
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[3] = var1;
        var1 = {};
        var6 = 'getFilterString';
        var1['key'] = var6;
        var6 = function value() {
            var3 = this;
            var _closure3_slot0 = var3;
            var2 = var3.filter;
            var7 = var2.blur;
            var2 = global;
            var4 = var2.HermesInternal;
            var6 = var4.concat;
            var5 = 'blur(';
            var4 = 'px)';
            var5 = var6.bind(var5)(var7, var4);
            var4 = new Array(2);
            var4[0] = var5;
            var3 = var3.filter;
            var6 = var3.hueRotation;
            var2 = var2.HermesInternal;
            var5 = var2.concat;
            var3 = 'hue-rotate(';
            var2 = 'deg)';
            var2 = var5.bind(var3)(var6, var2);
            var4[1] = var2;
            var3 = new Array(0);
            var8 = 0;
            var10 = var3;
            var9 = var4;
            var8 = arraySpread(var10, var9, var8);
            var5 = ['brightness', 'contrast', 'grayscale', 'invert', 'opacity', 'saturate', 'sepia'];
            var4 = var5.map;
            var1 = function(arg1) {
                var6 = arg1;
                var1 = _closure3_slot0;
                var1 = var1.filter;
                var8 = var1[var6];
                var1 = global;
                var1 = var1.HermesInternal;
                var4 = var1.concat;
                var11 = '';
                var9 = '(';
                var7 = ')';
                var10 = var6;
                var1 = var11[var4](var10, var9, var8, var7, var6);
                return var1;
            };
            var9 = var4.bind(var5)(var1);
            var10 = var3;
            var1 = arraySpread(var10, var9, var8);
            var2 = var3.join;
            var1 = ' ';
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1['value'] = var6;
        var2[4] = var1;
        var1 = {};
        var6 = 'getLoadedImage';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var1 = this;
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 4;
                var3 = var3[var2];
                var2 = undefined;
                var5 = var4.bind(var2)(var3);
                var4 = var1.assetMap;
                var3 = null;
                var4 = var3 != var4;
                var3 = 'DiscordCanvas: An AssetStore has not been initialized.';
                var3 = var5.bind(var2)(var4, var3);
                var4 = var1.assetMap;
                var3 = var4.get;
                var1 = arg1;
                var1 = var3.bind(var4)(var1);
                if(!(var2 === var1)) { _fun0006_ip = 58; continue _fun0006 }
case 59:
                return var2;
case 58:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[5] = var1;
        var1 = {};
        var6 = 'drawRoundedImageWithFallbacks';
        var1['key'] = var6;
        var5 = function value(arg1, arg2, arg3, arg4, arg5) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var12 = arg2;
                var11 = arg3;
                var10 = arg4;
                var9 = arg5;
                var8 = this;
                var4 = _closure1_slot5;
                var3 = undefined;
                var2 = arg1;
                var7 = var4.bind(var3)(var2);
                var5 = var7.bind(var3)();
                var2 = var5.done;
                var4 = 3;
                var6 = var5;
                if(var2) { _fun0007_ip = 40; continue _fun0007 }
case 60:
                var18 = var6.value;
                var2 = var8.drawRoundedImage;
                var19 = var8;
                var17 = var12;
                var16 = var11;
                var15 = var10;
                var14 = var9;
                var2 = var19[var2](var18, var17, var16, var15, var14, var13);
                var13 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var4];
                var5 = var13.bind(var3)(var5);
                var5 = var5.DrawResultStatus;
                var5 = var5.Failure;
                if(!(var2 === var5)) { _fun0007_ip = 61; continue _fun0007 }
case 62:
                var13 = var7.bind(var3)();
                var5 = var13.done;
                var6 = var13;
                if(var5) { _fun0007_ip = 40; continue _fun0007 }
case 46:
                _fun0007_ip = 60; continue _fun0007;
case 61:
                return var2;
case 40:
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var4];
                var1 = var2.bind(var3)(var1);
                var1 = var1.DrawResultStatus;
                var1 = var1.Failure;
                return var1;
            }
        };
        var1['value'] = var5;
        var2[6] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2 = var2.bind(var1)();
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/canvas/BaseDiscordCanvasRenderer.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    var3['BaseDiscordCanvasRenderer'] = var2;
    return var1;
})();