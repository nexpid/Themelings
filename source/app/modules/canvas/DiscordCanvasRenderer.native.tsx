// app/modules/canvas/DiscordCanvasRenderer.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var1 = require;
        var8 = metroImportDefault;
        var12 = exports;
        var9 = dependencyMap;
        var4 = var1;
        var _closure1_slot0 = var1;
        var6 = var8;
        var _closure1_slot1 = var8;
        var2 = var12;
        var5 = var9;
        var _closure1_slot2 = var9;
        var1 = function _isNativeReflectConstruct() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
case 2: // try_start_0
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
case 3: // try_end0
                _fun0002_ip = 4; continue _fun0002;
case 5: // catch_target0
                CatchBlockStart(arg_register=1);
case 4:
                var2 = function _isNativeReflectConstruct() {
                    var1 = _closure2_slot0;
                    var1 = !var1;
                    var1 = !var1;
                    return var1;
                };
                _closure1_slot14 = var2;
                var1 = undefined;
                var1 = var2.bind(var1)();
                return var1;
            }
        };
        var _closure1_slot14 = var1;
        var1 = global;
        var11 = var1.Object;
        var10 = var11.defineProperty;
        var7 = {};
        var1 = true;
        var7['value'] = var1;
        var1 = '__esModule';
        var1 = var10.bind(var11)(var12, var1, var7);
        var1 = 0;
        var7 = var9[var1];
        var1 = undefined;
        var7 = var8.bind(var1)(var7);
        var _closure1_slot9 = var7;
        var7 = 1;
        var7 = var9[var7];
        var7 = var8.bind(var1)(var7);
        var _closure1_slot10 = var7;
        var7 = 2;
        var7 = var9[var7];
        var7 = var8.bind(var1)(var7);
        var _closure1_slot11 = var7;
        var7 = 3;
        var7 = var9[var7];
        var7 = var8.bind(var1)(var7);
        var _closure1_slot12 = var7;
        var7 = 4;
        var7 = var9[var7];
        var7 = var8.bind(var1)(var7);
        var _closure1_slot13 = var7;
case 6: // try_start_0
        var8 = var4;
        var9 = var5;
        var7 = 5;
        var7 = var9[var7];
        var7 = var8.bind(var1)(var7);
        var8 = var7.ClipOp;
        var _closure1_slot3 = var8;
        var8 = var7.FillType;
        var _closure1_slot4 = var8;
        var8 = var7.FilterMode;
        var _closure1_slot5 = var8;
        var8 = var7.PaintStyle;
        var _closure1_slot6 = var8;
        var8 = var7.Skia;
        var _closure1_slot7 = var8;
        var7 = var7.TileMode;
        var _closure1_slot8 = var7;
case 7: // try_end0
        _fun0001_ip = 8; continue _fun0001;
case 9: // catch_target0
        CatchBlockStart(arg_register=6);
        var7 = null;
        _closure1_slot3 = var7;
        _closure1_slot4 = var7;
        _closure1_slot5 = var7;
        _closure1_slot6 = var7;
        _closure1_slot7 = var7;
        _closure1_slot8 = var7;
case 8:
        var7 = var6;
        var6 = var5;
        var5 = 8;
        var5 = var6[var5];
        var5 = var7.bind(var1)(var5);
        var3 = function(arg1) {
            var4 = function DiscordCanvasRenderer(arg1, arg2) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = arg1;
                    var6 = this;
                    var1 = _closure1_slot9;
                    var4 = _closure2_slot0;
                    var5 = undefined;
                    var1 = var1.bind(var5)(var6, var4);
                    var11 = new Array(2);
                    var11[0] = var3;
                    var1 = arg2;
                    var11[1] = var1;
                    var1 = _closure1_slot12;
                    var10 = var1.bind(var5)(var4);
                    var4 = _closure1_slot11;
                    var1 = _closure1_slot14;
                    var1 = var1.bind(var5)();
                    if(var1) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                    var1 = var10.apply;
                    var1 = var1.bind(var10)(var6, var11);
                    _fun0003_ip = 12; continue _fun0003;
case 10:
                    var7 = global;
                    var9 = var7.Reflect;
                    var8 = var9.construct;
                    var7 = _closure1_slot12;
                    var7 = var7.bind(var5)(var6);
                    var7 = var7.constructor;
                    var1 = var8.bind(var9)(var10, var11, var7);
case 12:
                    var1 = var4.bind(var5)(var6, var1);
                    var4 = {'w': 0, 'h': 0};
                    var1['size'] = var4;
                    var1['canvas'] = var3;
                    var4 = _closure1_slot7;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0003_ip = 13; continue _fun0003 }
case 14:
                    var3 = _closure1_slot7;
                    var2 = var3.Paint;
                    var2 = var2.bind(var3)();
                    var1['paint'] = var2;
case 13:
                    return var1;
                }
            };
            var _closure2_slot0 = var4;
            var5 = _closure1_slot13;
            var3 = undefined;
            var2 = arg1;
            var2 = var5.bind(var3)(var4, var2);
            var2 = _closure1_slot10;
            var5 = {};
            var1 = 'setCanvasRef';
            var5['key'] = var1;
            var1 = function value(arg1) {
                var2 = arg1;
                var1 = this;
                var1['canvasRef'] = var2;
                var1 = undefined;
                return var1;
            };
            var5['value'] = var1;
            var1 = new Array(21);
            var1[0] = var5;
            var5 = {};
            var7 = 'getCanvasForExport';
            var5['key'] = var7;
            var7 = function value() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var2 = this;
                    var3 = var2.canvasRef;
                    var1 = null;
                    if(!(var1 == var3)) { _fun0004_ip = 15; continue _fun0004 }
case 16:
                    var1 = undefined;
                    return var1;
case 15:
                    var3 = var2.canvasRef;
                    var1 = 'makeImageSnapshot';
                    var1 = var1 in var3;
                    var2 = var2.canvasRef;
                    if(var1) { _fun0004_ip = 17; continue _fun0004 }
case 18:
                    var1 = var2.current;
                    _fun0004_ip = 19; continue _fun0004;
case 17:
                    var1 = var2;
case 19:
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[1] = var5;
            var5 = {};
            var7 = 'setSize';
            var5['key'] = var7;
            var7 = function value(arg1) {
                var2 = arg1;
                var1 = this;
                var1['size'] = var2;
                var1 = undefined;
                return var1;
            };
            var5['value'] = var7;
            var1[2] = var5;
            var5 = {};
            var7 = 'restoreContext';
            var5['key'] = var7;
            var7 = function value() {
                var1 = undefined;
                return var1;
            };
            var5['value'] = var7;
            var1[3] = var5;
            var5 = {};
            var7 = 'setColor';
            var5['key'] = var7;
            var7 = function value(arg1) {
                var1 = this;
                var2 = arg1;
                var1['color'] = var2;
                var3 = var1.paint;
                var2 = var3.setColor;
                var5 = _closure1_slot7;
                var4 = var5.Color;
                var1 = var1.color;
                var1 = var4.bind(var5)(var1);
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var5['value'] = var7;
            var1[4] = var5;
            var5 = {};
            var7 = 'setContextProperties';
            var5['key'] = var7;
            var7 = function value(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var2 = this;
                    var5 = var2.paint;
                    var4 = var5.setColor;
                    var7 = _closure1_slot7;
                    var6 = var7.Color;
                    var3 = var2.color;
                    var3 = var6.bind(var7)(var3);
                    var3 = var4.bind(var5)(var3);
                    var3 = var2.paint;
                    var2 = var3.setStyle;
                    var1 = _closure1_slot6;
                    var4 = arg1;
                    if(var4) { _fun0005_ip = 20; continue _fun0005 }
case 21:
                    var4 = var1.Stroke;
                    var4 = var2.bind(var3)(var4);
                    _fun0005_ip = 22; continue _fun0005;
case 20:
                    var1 = var1.Fill;
                    var1 = var2.bind(var3)(var1);
case 22:
                    var1 = undefined;
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[5] = var5;
            var5 = {};
            var7 = 'rotateAroundOriginAndDraw';
            var5['key'] = var7;
            var7 = function value(arg1, arg2, arg3) {
                var1 = arg1;
                var2 = this;
                var4 = var2.canvas;
                var3 = var4.save;
                var3 = var3.bind(var4)();
                var5 = var2.canvas;
                var4 = var5.translate;
                var3 = var1.x;
                var1 = var1.y;
                var1 = var4.bind(var5)(var3, var1);
                var5 = var2.canvas;
                var4 = var5.rotate;
                var3 = arg2;
                var1 = 0;
                var1 = var4.bind(var5)(var3, var1, var1);
                var3 = arg3;
                var1 = undefined;
                var3 = var3.bind(var1)();
                var3 = var2.canvas;
                var2 = var3.restore;
                var2 = var2.bind(var3)();
                return var1;
            };
            var5['value'] = var7;
            var1[6] = var5;
            var5 = {};
            var7 = 'clearRect';
            var5['key'] = var7;
            var7 = function value() {
                var1 = this;
                var3 = var1.canvas;
                var2 = var3.clear;
                var5 = _closure1_slot7;
                var4 = var5.Color;
                var1 = 'transparent';
                var1 = var4.bind(var5)(var1);
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var5['value'] = var7;
            var1[7] = var5;
            var5 = {};
            var7 = 'drawRect';
            var5['key'] = var7;
            var7 = function value(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var3 = arg1;
                    var5 = arguments[1];
                    var2 = this;
                    var1 = undefined;
                    if(!(var5 === var1)) { _fun0006_ip = 23; continue _fun0006 }
case 16:
                    var5 = true;
case 23:
                    var4 = var2.setContextProperties;
                    var4 = var4.bind(var2)(var5);
                    var9 = var3.x;
                    var8 = var3.y;
                    var7 = var3.w;
                    var6 = var3.h;
                    var5 = var2.canvas;
                    var4 = var5.drawRect;
                    var3 = {};
                    var3['x'] = var9;
                    var3['y'] = var8;
                    var3['width'] = var7;
                    var3['height'] = var6;
                    var2 = var2.paint;
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[8] = var5;
            var5 = {};
            var7 = 'drawRoundedRect';
            var5['key'] = var7;
            var7 = function value(arg1, arg2) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var3 = arg1;
                    var6 = arg2;
                    var5 = arguments[2];
                    var2 = this;
                    var1 = undefined;
                    if(!(var5 === var1)) { _fun0007_ip = 24; continue _fun0007 }
case 25:
                    var5 = true;
case 24:
                    var4 = var2.setContextProperties;
                    var4 = var4.bind(var2)(var5);
                    var11 = var3.x;
                    var10 = var3.y;
                    var9 = var3.w;
                    var8 = var3.h;
                    var5 = var2.canvas;
                    var4 = var5.drawRRect;
                    var3 = {};
                    var7 = {};
                    var7['x'] = var11;
                    var7['y'] = var10;
                    var7['width'] = var9;
                    var7['height'] = var8;
                    var3['rect'] = var7;
                    var3['rx'] = var6;
                    var3['ry'] = var6;
                    var2 = var2.paint;
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[9] = var5;
            var5 = {};
            var7 = 'drawText';
            var5['key'] = var7;
            var7 = function value(arg1, arg2, arg3) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var4 = arg2;
                    var1 = this;
                    var3 = var1.setContextProperties;
                    var2 = arg3;
                    var2 = var3.bind(var1)(var2);
                    var2 = var1.font;
                    var3 = var2.weight;
                    var5 = null;
                    var6 = var5 != var3;
                    var2 = 300;
                    var8 = var2;
                    if(!var6) { _fun0008_ip = 26; continue _fun0008 }
case 27:
                    var8 = var3;
case 26:
                    var3 = 'normal';
                    if(!(var3 === var8)) { _fun0008_ip = 28; continue _fun0008 }
case 29:
                    var8 = var2;
case 28:
                    var2 = 'bold';
                    if(!(var2 === var8)) { _fun0008_ip = 20; continue _fun0008 }
case 3:
                    var8 = 700;
case 20:
                    var9 = {};
                    var2 = var1.font;
                    var6 = var2.truncate;
                    var10 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var11 = 6;
                    var3 = var2[var11];
                    var2 = undefined;
                    var3 = var10.bind(var2)(var3);
                    var3 = var3.TextTruncationMethod;
                    var3 = var3.None;
                    if(!(var6 === var3)) { _fun0008_ip = 30; continue _fun0008 }
case 31:
                    var3 = 1;
                    var9['maxLines'] = var3;
                    var3 = inf;
                    var4['w'] = var3;
case 30:
                    var3 = var1.font;
                    var6 = var3.truncate;
                    var10 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var3 = var3[var11];
                    var3 = var10.bind(var2)(var3);
                    var3 = var3.TextTruncationMethod;
                    var3 = var3.Truncate;
                    if(!(var6 === var3)) { _fun0008_ip = 32; continue _fun0008 }
case 33:
                    var3 = 1;
                    var9['maxLines'] = var3;
                    var3 = '...';
                    var9['ellipsis'] = var3;
case 32:
                    var3 = var1.font;
                    var6 = var3.truncate;
                    var10 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var3 = var3[var11];
                    var3 = var10.bind(var2)(var3);
                    var3 = var3.TextTruncationMethod;
                    var3 = var3.Wrap;
                    if(!(var6 === var3)) { _fun0008_ip = 34; continue _fun0008 }
case 35:
                    var3 = '...';
                    var9['ellipsis'] = var3;
                    var3 = var4.h;
                    if(!(var5 == var3)) { _fun0008_ip = 36; continue _fun0008 }
case 37:
                    var3 = inf;
                    var9['maxLines'] = var3;
                    _fun0008_ip = 34; continue _fun0008;
case 36:
                    var6 = global;
                    var11 = var6.Math;
                    var10 = var11.floor;
                    var12 = var4.h;
                    var3 = var1.font;
                    var3 = var3.size;
                    var3 = var12 / var3;
                    var3 = var10.bind(var11)(var3);
                    var11 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var10 = 7;
                    var10 = var12[var10];
                    var11 = var11.bind(var2)(var10);
                    var10 = 0;
                    var10 = var3 > var10;
                    var15 = var4.h;
                    var12 = var1.font;
                    var14 = var12.size;
                    var6 = var6.HermesInternal;
                    var13 = var6.concat;
                    var12 = 'DiscordCavas: boundingBox.h of ';
                    var6 = ' results in 0 visible lines with font size of ';
                    var6 = var13.bind(var12)(var15, var6, var14);
                    var6 = var11.bind(var2)(var10, var6);
                    var9['maxLines'] = var3;
case 34:
                    var3 = _closure1_slot7;
                    var6 = var3.ParagraphBuilder;
                    var3 = var6.Make;
                    var10 = var1.assetMap;
                    var11 = var5 == var10;
                    var2 = undefined;
                    if(var11) { _fun0008_ip = 38; continue _fun0008 }
case 39:
                    var2 = var10.fontManager;
case 38:
                    var6 = var3.bind(var6)(var9, var2);
                    var3 = var6.pushStyle;
                    var2 = {};
                    var10 = _closure1_slot7;
                    var9 = var10.Color;
                    var7 = var1.color;
                    var7 = var9.bind(var10)(var7);
                    var2['color'] = var7;
                    var7 = var1.font;
                    var7 = var7.family;
                    var2['fontFamilies'] = var7;
                    var7 = var1.font;
                    var7 = var7.size;
                    var2['fontSize'] = var7;
                    var7 = {};
                    var7['weight'] = var8;
                    var2['fontStyle'] = var7;
                    var6 = var3.bind(var6)(var2);
                    var3 = var6.addText;
                    var2 = arg1;
                    var3 = var3.bind(var6)(var2);
                    var2 = var3.build;
                    var8 = var2.bind(var3)();
                    var3 = var8.layout;
                    var2 = var4.w;
                    if(!(var5 == var2)) { _fun0008_ip = 40; continue _fun0008 }
case 41:
                    var5 = var1.size;
                    var6 = var5.w;
                    var5 = var4.x;
                    var2 = var6 - var5;
case 40:
                    var2 = var3.bind(var8)(var2);
                    var2 = var8.getMaxWidth;
                    var3 = var2.bind(var8)();
                    var2 = var8.getHeight;
                    var2 = var2.bind(var8)();
                    var7 = var8.paint;
                    var6 = var1.canvas;
                    var5 = var4.x;
                    var9 = var4.y;
                    var1 = 2;
                    var1 = var2 / var1;
                    var1 = var9 - var1;
                    var1 = var7.bind(var8)(var6, var5, var1);
                    var1 = {};
                    var5 = var4.x;
                    var1['x'] = var5;
                    var4 = var4.y;
                    var1['y'] = var4;
                    var1['w'] = var3;
                    var1['h'] = var2;
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[10] = var5;
            var5 = {};
            var7 = 'drawFormattedMessage';
            var5['key'] = var7;
            var7 = function value() {
                var1 = undefined;
                return var1;
            };
            var5['value'] = var7;
            var1[11] = var5;
            var5 = {};
            var7 = 'drawImage';
            var5['key'] = var7;
            var7 = function value(arg1, arg2, arg3) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var8 = arg1;
                    var12 = arg2;
                    var6 = arg3;
                    var17 = arguments[3];
                    var7 = this;
                    var3 = undefined;
                    if(!(var17 === var3)) { _fun0009_ip = 42; continue _fun0009 }
case 43:
                    var1 = {};
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 6;
                    var2 = var5[var2];
                    var2 = var4.bind(var3)(var2);
                    var2 = var2.FillMode;
                    var2 = var2.Stretch;
                    var1['fillMode'] = var2;
                    var17 = var1;
case 42:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var2 = 7;
                    var2 = var5[var2];
                    var5 = var4.bind(var3)(var2);
                    var2 = var7.assetMap;
                    var14 = null;
                    var4 = var14 != var2;
                    var2 = 'DiscordCavas: `drawImage` requires an AssetMap to be initialized.';
                    var2 = var5.bind(var3)(var4, var2);
                    var4 = var7.assetMap;
                    var2 = var4.get;
                    var18 = var2.bind(var4)(var8);
                    if(!(var14 != var18)) { _fun0009_ip = 44; continue _fun0009 }
case 45:
                    var9 = var17.fillMode;
                    var2 = var18.width;
                    var10 = var2.bind(var18)();
                    var2 = var18.height;
                    var2 = var2.bind(var18)();
                    if(!(var14 != var6)) { _fun0009_ip = 46; continue _fun0009 }
case 47:
                    var11 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var5 = 6;
                    var4 = var4[var5];
                    var4 = var11.bind(var3)(var4);
                    var4 = var4.FillMode;
                    var4 = var4.Contain;
                    if(!(var9 !== var4)) { _fun0009_ip = 48; continue _fun0009 }
case 33:
                    var11 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var5];
                    var4 = var11.bind(var3)(var4);
                    var4 = var4.FillMode;
                    var4 = var4.Cover;
                    if(!(var9 !== var4)) { _fun0009_ip = 49; continue _fun0009 }
case 46:
                    var16 = {};
                    var4 = var12.x;
                    var16['x'] = var4;
                    var4 = var12.y;
                    var16['y'] = var4;
                    var4 = var14 == var6;
                    var9 = undefined;
                    if(var4) { _fun0009_ip = 50; continue _fun0009 }
case 51:
                    var9 = var6.w;
case 50:
                    var4 = var10;
                    if(!(var14 != var9)) { _fun0009_ip = 52; continue _fun0009 }
case 8:
                    var4 = var9;
case 52:
                    var16['width'] = var4;
                    var4 = var14 == var6;
                    var9 = undefined;
                    if(var4) { _fun0009_ip = 53; continue _fun0009 }
case 54:
                    var9 = var6.h;
case 53:
                    var4 = var2;
                    if(!(var14 != var9)) { _fun0009_ip = 55; continue _fun0009 }
case 56:
                    var4 = var9;
case 55:
                    var16['height'] = var4;
                    var15 = var7.canvas;
                    var13 = var15.drawImageNine;
                    var11 = {'x': 0, 'y': 0};
                    var11['width'] = var10;
                    var11['height'] = var2;
                    var4 = _closure1_slot5;
                    var21 = var4.Linear;
                    var20 = var7.paint;
                    var25 = var15;
                    var24 = var18;
                    var23 = var11;
                    var22 = var16;
                    var4 = var25[var13](var24, var23, var22, var21, var20, var19);
                    var9 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var4 = 6;
                    var4 = var11[var4];
                    var4 = var9.bind(var3)(var4);
                    var4 = var4.DrawResultStatus;
                    var4 = var4.Success;
                    return var4;
case 49:
                    var9 = var10 / var2;
                    var4 = var9.toFixed;
                    var13 = 1;
                    var4 = var4.bind(var9)(var13);
                    var9 = var4 - 0;
                    var11 = var6.w;
                    var4 = var6.h;
                    var11 = var11 / var4;
                    var4 = var11.toFixed;
                    var4 = var4.bind(var11)(var13);
                    var4 = var4 - 0;
                    if(!(!(var4 > var9))) { _fun0009_ip = 57; continue _fun0009 }
case 58:
                    var13 = var2 * var4;
                    var9 = {};
                    var11 = {};
                    var16 = var10 - var13;
                    var15 = var14 == var17;
                    var18 = undefined;
                    if(var15) { _fun0009_ip = 59; continue _fun0009 }
case 60:
                    var15 = var17.focus;
                    var19 = var14 == var15;
                    var18 = undefined;
                    if(var19) { _fun0009_ip = 59; continue _fun0009 }
case 61:
                    var18 = var15.x;
case 59:
                    var19 = var14 != var18;
                    var15 = 0.5;
                    if(!var19) { _fun0009_ip = 62; continue _fun0009 }
case 63:
                    var15 = var18;
case 62:
                    var15 = var16 * var15;
                    var11['x'] = var15;
                    var15 = 0;
                    var11['y'] = var15;
                    var24 = var9;
                    var23 = var11;
                    var11 = copyDataProperties(var24, var23);
                    var11 = 'w';
                    var9[var11] = var13;
                    var11 = 'h';
                    var9[var11] = var2;
                    var11 = var9;
                    _fun0009_ip = 64; continue _fun0009;
case 57:
                    var13 = var10 / var4;
                    var4 = {};
                    var9 = {};
                    var15 = 0;
                    var9['x'] = var15;
                    var15 = var2 - var13;
                    var18 = var14 == var17;
                    var16 = undefined;
                    if(var18) { _fun0009_ip = 65; continue _fun0009 }
case 66:
                    var17 = var17.focus;
                    var18 = var14 == var17;
                    var16 = undefined;
                    if(var18) { _fun0009_ip = 65; continue _fun0009 }
case 67:
                    var16 = var17.y;
case 65:
                    var17 = var14 != var16;
                    var14 = 0.5;
                    if(!var17) { _fun0009_ip = 68; continue _fun0009 }
case 69:
                    var14 = var16;
case 68:
                    var14 = var15 * var14;
                    var9['y'] = var14;
                    var24 = var4;
                    var23 = var9;
                    var9 = copyDataProperties(var24, var23);
                    var9 = 'w';
                    var4[var9] = var10;
                    var9 = 'h';
                    var4[var9] = var13;
                    var11 = var4;
case 64:
                    var9 = var7.drawCroppedImage;
                    var4 = {};
                    var13 = var12.x;
                    var4['x'] = var13;
                    var13 = var12.y;
                    var4['y'] = var13;
                    var13 = var6.w;
                    var4['w'] = var13;
                    var13 = var6.h;
                    var4['h'] = var13;
                    var4 = var9.bind(var7)(var8, var11, var4);
                    var9 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var5];
                    var4 = var9.bind(var3)(var4);
                    var4 = var4.DrawResultStatus;
                    var4 = var4.Success;
                    return var4;
case 48:
                    var9 = var10 / var2;
                    var4 = var9.toFixed;
                    var13 = 1;
                    var4 = var4.bind(var9)(var13);
                    var11 = var4 - 0;
                    var9 = var6.w;
                    var4 = var6.h;
                    var9 = var9 / var4;
                    var4 = var9.toFixed;
                    var4 = var4.bind(var9)(var13);
                    var4 = var4 - 0;
                    if(!(!(var4 > var11))) { _fun0009_ip = 70; continue _fun0009 }
case 71:
                    var4 = var6.w;
                    var4 = var4 / var11;
                    var9 = {};
                    var13 = var12.x;
                    var9['x'] = var13;
                    var14 = var12.y;
                    var13 = var6.h;
                    var15 = var13 - var4;
                    var13 = 2;
                    var13 = var15 / var13;
                    var13 = var14 + var13;
                    var9['y'] = var13;
                    var13 = var6.w;
                    var9['w'] = var13;
                    var9['h'] = var4;
                    _fun0009_ip = 72; continue _fun0009;
case 70:
                    var4 = var6.h;
                    var11 = var4 * var11;
                    var4 = {};
                    var14 = var12.x;
                    var13 = var6.w;
                    var15 = var13 - var11;
                    var13 = 2;
                    var13 = var15 / var13;
                    var13 = var14 + var13;
                    var4['x'] = var13;
                    var12 = var12.y;
                    var4['y'] = var12;
                    var4['w'] = var11;
                    var6 = var6.h;
                    var4['h'] = var6;
                    var9 = var4;
case 72:
                    var6 = var7.drawCroppedImage;
                    var4 = {'x': 0, 'y': 0};
                    var4['w'] = var10;
                    var4['h'] = var2;
                    var2 = {};
                    var10 = var9.x;
                    var2['x'] = var10;
                    var10 = var9.y;
                    var2['y'] = var10;
                    var10 = var9.w;
                    var2['w'] = var10;
                    var9 = var9.h;
                    var2['h'] = var9;
                    var2 = var6.bind(var7)(var8, var4, var2);
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var5];
                    var2 = var4.bind(var3)(var2);
                    var2 = var2.DrawResultStatus;
                    var2 = var2.Success;
                    return var2;
case 44:
                    var2 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 6;
                    var1 = var4[var1];
                    var1 = var2.bind(var3)(var1);
                    var1 = var1.DrawResultStatus;
                    var1 = var1.ImageNotLoaded;
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[12] = var5;
            var5 = {};
            var7 = 'drawRoundedImage';
            var5['key'] = var7;
            var7 = function value(arg1, arg2, arg3, arg4, arg5) {
                var6 = arg2;
                var5 = arg3;
                var1 = arg4;
                var2 = this;
                var12 = var6.x;
                var11 = var6.y;
                var10 = var5.w;
                var9 = var5.h;
                var4 = var2.canvas;
                var3 = var4.save;
                var3 = var3.bind(var4)();
                var8 = var2.canvas;
                var7 = var8.clipRRect;
                var4 = {};
                var3 = {};
                var3['x'] = var12;
                var3['y'] = var11;
                var3['width'] = var10;
                var3['height'] = var9;
                var4['rect'] = var3;
                var4['rx'] = var1;
                var4['ry'] = var1;
                var1 = _closure1_slot3;
                var3 = var1.Intersect;
                var1 = true;
                var1 = var7.bind(var8)(var4, var3, var1);
                var4 = var2.drawImage;
                var16 = arg1;
                var13 = arg5;
                var17 = var2;
                var15 = var6;
                var14 = var5;
                var1 = var17[var4](var16, var15, var14, var13, var12);
                var3 = var2.canvas;
                var2 = var3.restore;
                var2 = var2.bind(var3)();
                return var1;
            };
            var5['value'] = var7;
            var1[13] = var5;
            var5 = {};
            var7 = 'drawCroppedImage';
            var5['key'] = var7;
            var7 = function value(arg1, arg2, arg3) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var5 = arg2;
                    var4 = arg3;
                    var2 = this;
                    var7 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var3 = 7;
                    var6 = var6[var3];
                    var3 = undefined;
                    var9 = var7.bind(var3)(var6);
                    var7 = var2.assetMap;
                    var6 = null;
                    var8 = var6 != var7;
                    var7 = 'DiscordCavas: `drawImage` requires an AssetMap to be initialized.';
                    var7 = var9.bind(var3)(var8, var7);
                    var9 = var2.assetMap;
                    var8 = var9.get;
                    var7 = arg1;
                    var8 = var8.bind(var9)(var7);
                    if(!(var6 != var8)) { _fun0010_ip = 73; continue _fun0010 }
case 74:
                    var7 = {};
                    var6 = var5.x;
                    var7['x'] = var6;
                    var6 = var5.y;
                    var7['y'] = var6;
                    var6 = var5.w;
                    var7['width'] = var6;
                    var5 = var5.h;
                    var7['height'] = var5;
                    var6 = {};
                    var5 = var4.x;
                    var6['x'] = var5;
                    var5 = var4.y;
                    var6['y'] = var5;
                    var5 = var4.w;
                    var6['width'] = var5;
                    var4 = var4.h;
                    var6['height'] = var4;
                    var5 = var2.canvas;
                    var4 = var5.drawImageRect;
                    var10 = var2.paint;
                    var14 = var5;
                    var13 = var8;
                    var12 = var7;
                    var11 = var6;
                    var2 = var14[var4](var13, var12, var11, var10, var9);
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 6;
                    var2 = var5[var2];
                    var2 = var4.bind(var3)(var2);
                    var2 = var2.DrawResultStatus;
                    var2 = var2.Success;
                    return var2;
case 73:
                    var2 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 6;
                    var1 = var4[var1];
                    var1 = var2.bind(var3)(var1);
                    var1 = var1.DrawResultStatus;
                    var1 = var1.ImageNotLoaded;
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[14] = var5;
            var5 = {};
            var7 = 'drawPath';
            var5['key'] = var7;
            var7 = function value(arg1, arg2) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var8 = arg2;
                    var7 = arguments[2];
                    var9 = arguments[3];
                    var2 = this;
                    var3 = undefined;
                    if(!(var7 === var3)) { _fun0011_ip = 24; continue _fun0011 }
case 25:
                    var7 = true;
case 24:
                    if(!(var9 === var3)) { _fun0011_ip = 75; continue _fun0011 }
case 76:
                    var9 = 1;
case 75:
                    var4 = _closure1_slot7;
                    var6 = var4.Path;
                    var5 = var6.MakeFromSVGString;
                    var4 = arg1;
                    var6 = var5.bind(var6)(var4);
                    var4 = null;
                    if(!(var4 != var6)) { _fun0011_ip = 77; continue _fun0011 }
case 21:
                    var10 = _closure1_slot7;
                    var5 = var10.Matrix;
                    var5 = var5.bind(var10)();
                    var11 = var5.translate;
                    var10 = var8.x;
                    var8 = var8.y;
                    var8 = var11.bind(var5)(var10, var8);
                    var8 = var5.scale;
                    var8 = var8.bind(var5)(var9, var9);
                    if(!var7) { _fun0011_ip = 78; continue _fun0011 }
case 79:
                    if(!(var4 != var6)) { _fun0011_ip = 78; continue _fun0011 }
case 80:
                    var7 = var6.setFillType;
                    var4 = _closure1_slot4;
                    var4 = var4.EvenOdd;
                    var4 = var7.bind(var6)(var4);
case 78:
                    var4 = var6.transform;
                    var4 = var4.bind(var6)(var5);
                    var5 = var2.canvas;
                    var4 = var5.drawPath;
                    var2 = var2.paint;
                    var2 = var4.bind(var5)(var6, var2);
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 6;
                    var2 = var5[var2];
                    var2 = var4.bind(var3)(var2);
                    var2 = var2.DrawResultStatus;
                    var2 = var2.Success;
                    return var2;
case 77:
                    var2 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 6;
                    var1 = var4[var1];
                    var1 = var2.bind(var3)(var1);
                    var1 = var1.DrawResultStatus;
                    var1 = var1.Failure;
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[15] = var5;
            var5 = {};
            var7 = 'drawGradientRect';
            var5['key'] = var7;
            var7 = function value(arg1, arg2, arg3, arg4) {
                var4 = arg1;
                var2 = this;
                var _closure3_slot0 = var4;
                var5 = var4.map;
                var3 = function(arg1) {
                    var3 = _closure1_slot7;
                    var2 = var3.Color;
                    var1 = arg1;
                    var1 = var1.color;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var12 = var5.bind(var4)(var3);
                var3 = var4.map;
                var1 = function(arg1, arg2) {
                    _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                        var1 = arg1;
                        var1 = var1.stop;
                        var2 = null;
                        if(!(var2 == var1)) { _fun0012_ip = 81; continue _fun0012 }
case 16:
                        var2 = _closure3_slot0;
                        var3 = var2.length;
                        var2 = arg2;
                        var1 = var2 / var3;
case 81:
                        return var1;
                    }
                };
                var11 = var3.bind(var4)(var1);
                var3 = _closure1_slot7;
                var7 = var3.Shader;
                var6 = var7.MakeLinearGradient;
                var3 = _closure1_slot8;
                var10 = var3.Clamp;
                var14 = arg2;
                var13 = arg3;
                var15 = var7;
                var5 = var15[var6](var14, var13, var12, var11, var10, var9);
                var4 = var2.paint;
                var3 = var4.setShader;
                var3 = var3.bind(var4)(var5);
                var4 = var2.drawRect;
                var3 = arg4;
                var3 = var4.bind(var2)(var3);
                var4 = var2.paint;
                var3 = var4.setShader;
                var2 = null;
                var2 = var3.bind(var4)(var2);
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 6;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.DrawResultStatus;
                var1 = var1.Success;
                return var1;
            };
            var5['value'] = var7;
            var1[16] = var5;
            var5 = {};
            var7 = 'drawRoundedGradientRect';
            var5['key'] = var7;
            var7 = function value(arg1, arg2, arg3, arg4, arg5) {
                var4 = arg1;
                var2 = this;
                var _closure3_slot0 = var4;
                var5 = var4.map;
                var3 = function(arg1) {
                    var3 = _closure1_slot7;
                    var2 = var3.Color;
                    var1 = arg1;
                    var1 = var1.color;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var12 = var5.bind(var4)(var3);
                var3 = var4.map;
                var1 = function(arg1, arg2) {
                    _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                        var1 = arg1;
                        var1 = var1.stop;
                        var2 = null;
                        if(!(var2 == var1)) { _fun0013_ip = 81; continue _fun0013 }
case 16:
                        var2 = _closure3_slot0;
                        var3 = var2.length;
                        var2 = arg2;
                        var1 = var2 / var3;
case 81:
                        return var1;
                    }
                };
                var11 = var3.bind(var4)(var1);
                var3 = _closure1_slot7;
                var7 = var3.Shader;
                var6 = var7.MakeLinearGradient;
                var3 = _closure1_slot8;
                var10 = var3.Clamp;
                var14 = arg2;
                var13 = arg3;
                var15 = var7;
                var5 = var15[var6](var14, var13, var12, var11, var10, var9);
                var4 = var2.paint;
                var3 = var4.setShader;
                var3 = var3.bind(var4)(var5);
                var5 = var2.drawRoundedRect;
                var4 = arg4;
                var3 = arg5;
                var3 = var5.bind(var2)(var4, var3);
                var4 = var2.paint;
                var3 = var4.setShader;
                var2 = null;
                var2 = var3.bind(var4)(var2);
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 6;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.DrawResultStatus;
                var1 = var1.Success;
                return var1;
            };
            var5['value'] = var7;
            var1[17] = var5;
            var5 = {};
            var7 = 'clip';
            var5['key'] = var7;
            var7 = function value() {
                var1 = undefined;
                return var1;
            };
            var5['value'] = var7;
            var1[18] = var5;
            var5 = {};
            var7 = 'clipRect';
            var5['key'] = var7;
            var7 = function value() {
                var1 = undefined;
                return var1;
            };
            var5['value'] = var7;
            var1[19] = var5;
            var5 = {};
            var7 = 'clipRoundedRect';
            var5['key'] = var7;
            var6 = function value() {
                var1 = undefined;
                return var1;
            };
            var5['value'] = var6;
            var1[20] = var5;
            var1 = var2.bind(var3)(var4, var1);
            return var1;
        };
        var3 = var3.bind(var1)(var5);
        var5 = var4;
        var4 = 9;
        var4 = var6[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.fileFinishedImporting;
        var4 = 'modules/canvas/DiscordCanvasRenderer.native.tsx';
        var4 = var5.bind(var6)(var4);
        var2['default'] = var3;
        return var1;
    }
})();