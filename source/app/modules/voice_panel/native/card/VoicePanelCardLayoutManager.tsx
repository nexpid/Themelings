// app/modules/voice_panel/native/card/VoicePanelCardLayoutManager.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var7;
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
            var9 = _closure1_slot22;
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
            var7 = _closure1_slot22;
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
    var _closure1_slot21 = var1;
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
    var _closure1_slot22 = var1;
    var1 = function getOrCreateRow(arg1, arg2, arg3) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var4 = arg3;
            var1 = arg1;
            var1 = var4[var1];
            var2 = null;
            if(!(var2 == var1)) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var2 = global;
            var5 = var2.Array;
            var2 = var5.prototype;
            var3 = Object.create(var2, {constructor: {value: var5}});
            var6 = arg2;
            var7 = var3;
            var2 = new var7[var5](var6, var5);
            var5 = var2 instanceof Object ? var2 : var3;
            var3 = var5.fill;
            var2 = 0;
            var2 = var3.bind(var5)(var2);
            var3 = var4.push;
            var3 = var3.bind(var4)(var2);
            var1 = var2;
case 36:
            return var1;
        }
    };
    var _closure1_slot23 = var1;
    var1 = function getTargetAspectRatio(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg1;
            var2 = var1.width;
            var1 = var1.height;
            var4 = var2 / var1;
            var1 = 'landscape';
            var2 = 1.3;
            if(!(!(var4 >= var2))) { _fun0005_ip = 38; continue _fun0005 }
case 39:
            var2 = 'square';
            var3 = 0.8;
            if(!(var4 <= var3)) { _fun0005_ip = 40; continue _fun0005 }
case 41:
            var2 = 'portrait';
case 40:
            var1 = var2;
case 38:
            return var1;
        }
    };
    var _closure1_slot24 = var1;
    var1 = function getGridDimensionsFromAspectRatio(arg1, arg2, arg3, arg4) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var5 = arg1;
            var2 = arg2;
            var1 = arg3;
            var3 = arg4;
            var4 = 'portrait';
            if(!(var4 !== var5)) { _fun0006_ip = 42; continue _fun0006 }
case 43:
            var4 = 'landscape';
            if(!(var4 !== var5)) { _fun0006_ip = 44; continue _fun0006 }
case 33:
            var4 = 'square';
            if(!(var4 !== var5)) { _fun0006_ip = 45; continue _fun0006 }
case 46:
            var4 = undefined;
            return var4;
case 45:
            var4 = var1.enlargeSquare;
            if(var4) { _fun0006_ip = 47; continue _fun0006 }
case 48:
            var4 = {'width': 1, 'height': 1};
            _fun0006_ip = 49; continue _fun0006;
case 47:
            var4 = {'width': 2, 'height': 2};
case 49:
            return var4;
case 44:
            var4 = var1.fillAspectRatio;
            if(var4) { _fun0006_ip = 50; continue _fun0006 }
case 51:
            var4 = {'width': 2, 'height': 1};
            _fun0006_ip = 52; continue _fun0006;
case 50:
            if(var2) { _fun0006_ip = 53; continue _fun0006 }
case 13:
            var5 = {'width': 2, 'height': 2};
            _fun0006_ip = 54; continue _fun0006;
case 53:
            var6 = {};
            var8 = 0;
            if(!var3) { _fun0006_ip = 55; continue _fun0006 }
case 56:
            var8 = 1;
case 55:
            var7 = 3;
            var7 = var7 + var8;
            var6['width'] = var7;
            var7 = 2;
            var6['height'] = var7;
            var5 = var6;
case 54:
            var4 = var5;
case 52:
            return var4;
case 42:
            var1 = var1.fillAspectRatio;
            if(var1) { _fun0006_ip = 57; continue _fun0006 }
case 58:
            var1 = {'width': 1, 'height': 2};
            _fun0006_ip = 59; continue _fun0006;
case 57:
            if(var2) { _fun0006_ip = 60; continue _fun0006 }
case 61:
            var2 = {};
            var4 = 2;
            var2['width'] = var4;
            var4 = 0;
            if(!var3) { _fun0006_ip = 62; continue _fun0006 }
case 63:
            var4 = 1;
case 62:
            var3 = 3;
            var3 = var3 + var4;
            var2['height'] = var3;
            _fun0006_ip = 64; continue _fun0006;
case 60:
            var2 = {'width': 2, 'height': 2};
case 64:
            var1 = var2;
case 59:
            return var1;
        }
    };
    var _closure1_slot25 = var1;
    var1 = function getTargetCardSize(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var2 = arg1;
            var8 = var2.windowWidth;
            var1 = var2.windowHeight;
            var6 = var2.safeAreaLeft;
            var7 = var2.safeAreaRight;
            var1 = var8 > var1;
            var5 = 3;
            if(!var1) { _fun0007_ip = 65; continue _fun0007 }
case 66:
            var5 = 4;
case 65:
            var1 = global;
            var4 = var1.Math;
            var3 = var4.max;
            var2 = _closure1_slot10;
            var6 = var8 - var6;
            var6 = var6 - var7;
            var7 = _closure1_slot15;
            var1 = 1;
            var1 = var5 - var1;
            var1 = var7 * var1;
            var1 = var6 - var1;
            var1 = var1 / var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot26 = var1;
    var8 = global;
    var11 = var8.Object;
    var10 = var11.defineProperty;
    var5 = {};
    var4 = true;
    var5['value'] = var4;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var9.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var9.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var9.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var5 = 3;
    var10 = var7[var5];
    var5 = metroImportAll;
    var5 = var5.bind(var1)(var10);
    var _closure1_slot6 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.PixelRatio;
    var _closure1_slot7 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var9.bind(var1)(var5);
    var _closure1_slot8 = var5;
    var5 = 6;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var9 = var5.VoicePanelCardItemType;
    var _closure1_slot9 = var9;
    var10 = var5.BASE_TARGET_CARD_SIZE;
    var _closure1_slot10 = var10;
    var10 = var5.VoicePanelCTACardDimensionKeys;
    var _closure1_slot11 = var10;
    var10 = var5.VoicePanelCTACardDimensions;
    var _closure1_slot12 = var10;
    var5 = var5.VOICE_PANEL_CHUNK_DIVISOR;
    var _closure1_slot13 = var5;
    var5 = 7;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var10 = var5.EDGE_GUTTER;
    var _closure1_slot14 = var10;
    var5 = var5.CALL_TILE_GUTTER;
    var _closure1_slot15 = var5;
    var5 = 8;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.ParticipantTypes;
    var _closure1_slot16 = var5;
    var5 = {'id': 'invalid', 'type': null, 'x': 0, 'y': 0, 'width': 0, 'height': 0, 'zIndex': 0};
    var9 = var9.PARTICIPANT;
    var5['type'] = var9;
    var _closure1_slot17 = var5;
    var5 = var8.Set;
    var9 = var5.prototype;
    var9 = Object.create(var9, {constructor: {value: var5}});
    var15 = var9;
    var5 = new var15[var5](var14);
    var5 = var5 instanceof Object ? var5 : var9;
    var _closure1_slot18 = var5;
    var5 = {'enlargeSquare': false, 'fillAspectRatio': false};
    var _closure1_slot19 = var5;
    var5 = {};
    var11 = var8.Set;
    var9 = var11.prototype;
    var10 = Object.create(var9, {constructor: {value: var11}});
    var14 = ['1,camera', '2,camera', '2,camera,camera'];
    var15 = var10;
    var9 = new var15[var11](var14, var13);
    var9 = var9 instanceof Object ? var9 : var10;
    var5['match'] = var9;
    var9 = new Array(1);
    var10 = {'enlargeSquare': true, 'fillAspectRatio': false};
    var9[0] = var10;
    var5['layouts'] = var9;
    var5['global'] = var4;
    var4 = new Array(2);
    var4[0] = var5;
    var5 = {};
    var10 = var8.Set;
    var8 = var10.prototype;
    var9 = Object.create(var8, {constructor: {value: var10}});
    var14 = ['1,stream', '2,stream', '3,stream', '2,stream,camera', '3,stream,camera', '3,stream,camera,camera', '3,camera', '3,camera,stream'];
    var15 = var9;
    var8 = new var15[var10](var14, var13);
    var8 = var8 instanceof Object ? var8 : var9;
    var5['match'] = var8;
    var8 = new Array(3);
    var9 = {'enlargeSquare': true, 'fillAspectRatio': true};
    var8[0] = var9;
    var9 = {'enlargeSquare': false, 'fillAspectRatio': false};
    var8[1] = var9;
    var9 = {'enlargeSquare': false, 'fillAspectRatio': false};
    var8[2] = var9;
    var5['layouts'] = var8;
    var4[1] = var5;
    var _closure1_slot20 = var4;
    var4 = function() {
        var4 = _closure1_slot4;
        var3 = function VoicePanelCardLayoutManager(arg1) {
            var3 = this;
            var4 = _closure1_slot3;
            var2 = _closure2_slot0;
            var1 = undefined;
            var2 = var4.bind(var1)(var3, var2);
            var4 = true;
            var3['dirty'] = var4;
            var5 = global;
            var2 = var5.Map;
            var6 = var2.prototype;
            var6 = Object.create(var6, {constructor: {value: var2}});
            var10 = var6;
            var2 = new var10[var2](var9);
            var2 = var2 instanceof Object ? var2 : var6;
            var3['targetDimensions'] = var2;
            var2 = var5.Map;
            var6 = var2.prototype;
            var6 = Object.create(var6, {constructor: {value: var2}});
            var10 = var6;
            var2 = new var10[var2](var9);
            var2 = var2 instanceof Object ? var2 : var6;
            var3['cardCoords'] = var2;
            var2 = var5.Map;
            var6 = var2.prototype;
            var6 = Object.create(var6, {constructor: {value: var2}});
            var10 = var6;
            var2 = new var10[var2](var9);
            var2 = var2 instanceof Object ? var2 : var6;
            var3['chunkedCoords'] = var2;
            var2 = 0;
            var6 = {'width': 0, 'height': 0};
            var3['contentDimensions'] = var6;
            var6 = var5.Set;
            var7 = var6.prototype;
            var7 = Object.create(var7, {constructor: {value: var6}});
            var10 = var7;
            var6 = new var10[var6](var9);
            var6 = var6 instanceof Object ? var6 : var7;
            var3['layoutCallbacks'] = var6;
            var5 = var5.Set;
            var6 = var5.prototype;
            var6 = Object.create(var6, {constructor: {value: var5}});
            var10 = var6;
            var5 = new var10[var5](var9);
            var5 = var5 instanceof Object ? var5 : var6;
            var3['managerSubscriptions'] = var5;
            var5 = new Array(0);
            var3['items'] = var5;
            var3['emitItemChanges'] = var4;
            var4 = false;
            var3['mounted'] = var4;
            var3['layoutKey'] = var2;
            var2 = -1;
            var3['lastEmittedLayoutKey'] = var2;
            var3['emitTimeout'] = var2;
            var2 = {'windowWidth': 0, 'windowHeight': 0, 'chunkSize': 0, 'safeAreaLeft': 0, 'safeAreaRight': 0, 'safeAreaTop': 0, 'safeAreaBottom': 0, 'gutter': 0, 'controlBarSize': 0};
            var3['props'] = var2;
            var2 = {'width': 0, 'height': 0};
            var3['defaultTargetCoords'] = var2;
            var2 = arg1;
            var3['channelId'] = var2;
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'setDirty';
        var1['key'] = var2;
        var2 = function value(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var1 = arg1;
                var2 = this;
                if(!var1) { _fun0008_ip = 67; continue _fun0008 }
case 68:
                var3 = var2.dirty;
                var1 = !var3;
case 67:
                if(!var1) { _fun0008_ip = 39; continue _fun0008 }
case 69:
                var1 = true;
                var2['dirty'] = var1;
                var2['emitItemChanges'] = var1;
case 39:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var2;
        var2 = new Array(20);
        var2[0] = var1;
        var1 = {};
        var6 = 'requiresEmit';
        var1['key'] = var6;
        var6 = function value() {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var1 = this;
                var3 = var1.lastEmittedLayoutKey;
                var2 = var1.layoutKey;
                var2 = var3 !== var2;
                var3 = var1.layoutKey;
                var1['lastEmittedLayoutKey'] = var3;
                var1 = var1.emitItemChanges;
                if(var1) { _fun0009_ip = 70; continue _fun0009 }
case 65:
                var1 = var2;
case 70:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'handleLayoutEffect';
        var1['key'] = var6;
        var6 = function value() {
            var2 = this;
            var1 = true;
            var2['mounted'] = var1;
            var1 = var2.emitLayoutChanges;
            var1 = var1.bind(var2)();
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[2] = var1;
        var1 = {};
        var6 = 'cleanUp';
        var1['key'] = var6;
        var6 = function value() {
            var2 = false;
            var1 = this;
            var1['mounted'] = var2;
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[3] = var1;
        var1 = {};
        var6 = 'updateState';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var3 = arg1;
                var4 = arg2;
                var2 = this;
                var1 = var4.windowWidth;
                var8 = var4.windowHeight;
                var13 = var4.safeAreaLeft;
                var12 = var4.safeAreaRight;
                var6 = var4.safeAreaTop;
                var10 = var4.safeAreaBottom;
                var5 = var4.controlBarSize;
                var4 = {};
                var4['windowHeight'] = var8;
                var4['windowWidth'] = var1;
                var7 = _closure1_slot13;
                var7 = var8 / var7;
                var4['chunkSize'] = var7;
                var7 = global;
                var11 = var7.Math;
                var8 = var11.max;
                var9 = _closure1_slot14;
                var8 = var8.bind(var11)(var13, var9);
                var4['safeAreaLeft'] = var8;
                var11 = var7.Math;
                var8 = var11.max;
                var8 = var8.bind(var11)(var12, var9);
                var4['safeAreaRight'] = var8;
                var8 = var7.Math;
                var7 = var8.max;
                var7 = var7.bind(var8)(var10, var9);
                var4['safeAreaBottom'] = var7;
                var4['safeAreaTop'] = var6;
                var6 = _closure1_slot15;
                var4['gutter'] = var6;
                var4['controlBarSize'] = var5;
                var6 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 11;
                var5 = var5[var1];
                var1 = undefined;
                var6 = var6.bind(var1)(var5);
                var5 = var2.props;
                var5 = var6.bind(var1)(var4, var5);
                if(var5) { _fun0010_ip = 71; continue _fun0010 }
case 72:
                var2['props'] = var4;
                var5 = var2.setDirty;
                var4 = true;
                var4 = var5.bind(var2)(var4);
case 71:
                var5 = var2.setDirty;
                var6 = var2.items;
                var4 = function areArraysShallowEqual(arg1, arg2) {
                    _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                        var4 = arg1;
                        var1 = arg2;
                        var _closure4_slot0 = var1;
                        var3 = var4.length;
                        var1 = var1.length;
                        var1 = var3 === var1;
                        if(!var1) { _fun0011_ip = 73; continue _fun0011 }
case 74:
                        var3 = var4.some;
                        var2 = function(arg1, arg2) {
                            var2 = _closure4_slot0;
                            var1 = arg2;
                            var2 = var2[var1];
                            var1 = arg1;
                            var1 = var2 !== var1;
                            return var1;
                        };
                        var2 = var3.bind(var4)(var2);
                        var1 = !var2;
case 73:
                        return var1;
                    }
                };
                var4 = var4.bind(var1)(var3, var6);
                var4 = !var4;
                var4 = var5.bind(var2)(var4);
                var2['items'] = var3;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[4] = var1;
        var1 = {};
        var6 = 'getLayoutKey';
        var1['key'] = var6;
        var6 = function value() {
            var1 = this;
            var1 = var1.layoutKey;
            return var1;
        };
        var1['value'] = var6;
        var2[5] = var1;
        var1 = {};
        var6 = 'getChunk';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var1 = this;
                var3 = var1.chunkedCoords;
                var2 = var3.get;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                var2 = null;
                if(!(var2 == var1)) { _fun0012_ip = 39; continue _fun0012 }
case 34:
                var1 = _closure1_slot18;
case 39:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[6] = var1;
        var1 = {};
        var6 = 'getContentDimensions';
        var1['key'] = var6;
        var6 = function value() {
            var1 = this;
            var2 = var1.computeCardsLayout;
            var2 = var2.bind(var1)();
            var1 = var1.contentDimensions;
            return var1;
        };
        var1['value'] = var6;
        var2[7] = var1;
        var1 = {};
        var6 = 'getCardCoords';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var1 = this;
            var2 = var1.computeCardsLayout;
            var2 = var2.bind(var1)();
            var3 = var1.cardCoords;
            var2 = var3.get;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1['value'] = var6;
        var2[8] = var1;
        var1 = {};
        var6 = 'getCardCoordsMap';
        var1['key'] = var6;
        var6 = function value() {
            var1 = this;
            var2 = var1.computeCardsLayout;
            var2 = var2.bind(var1)();
            var1 = var1.cardCoords;
            return var1;
        };
        var1['value'] = var6;
        var2[9] = var1;
        var1 = {};
        var6 = 'getDefaultTargetDimensions';
        var1['key'] = var6;
        var6 = function value() {
            var1 = this;
            var1 = var1.defaultTargetCoords;
            return var1;
        };
        var1['value'] = var6;
        var2[10] = var1;
        var1 = {};
        var6 = 'getTargetDimensions';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                var4 = arg1;
                var2 = this;
                var5 = null;
                if(!(var5 != var4)) { _fun0013_ip = 35; continue _fun0013 }
case 75:
                var6 = _closure1_slot11;
                var1 = var6.has;
                var1 = var1.bind(var6)(var4);
                if(var1) { _fun0013_ip = 76; continue _fun0013 }
case 77:
                var6 = var2.targetDimensions;
                var1 = var6.get;
                var1 = var1.bind(var6)(var4);
                if(!(var5 == var1)) { _fun0013_ip = 78; continue _fun0013 }
case 79:
                var1 = var2.defaultTargetCoords;
case 78:
                _fun0013_ip = 80; continue _fun0013;
case 76:
                var3 = _closure1_slot12;
                var1 = var3[var4];
case 80:
                _fun0013_ip = 81; continue _fun0013;
case 35:
                var1 = var2.defaultTargetCoords;
case 81:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[11] = var1;
        var1 = {};
        var6 = 'setTargetDimensions';
        var1['key'] = var6;
        var6 = function value(arg1, arg2, arg3) {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                var5 = arg1;
                var7 = arg2;
                var6 = arg3;
                var2 = this;
                var1 = var2.getTargetDimensions;
                var3 = var1.bind(var2)(var5);
                var1 = var3.width;
                var1 = var1 === var7;
                if(!var1) { _fun0014_ip = 82; continue _fun0014 }
case 39:
                var3 = var3.height;
                var1 = var3 === var6;
case 82:
                if(var1) { _fun0014_ip = 83; continue _fun0014 }
case 84:
                var4 = var2.targetDimensions;
                var3 = var4.set;
                var1 = {};
                var1['width'] = var7;
                var1['height'] = var6;
                var1 = var3.bind(var4)(var5, var1);
                var3 = var2.setDirty;
                var1 = true;
                var1 = var3.bind(var2)(var1);
                var1 = var2.deferredLayoutChange;
                var1 = var1.bind(var2)();
case 83:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[12] = var1;
        var1 = {};
        var6 = 'resetTargetDimensions';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                var4 = arg1;
                var2 = this;
                var3 = var2.targetDimensions;
                var1 = var3.has;
                var1 = var1.bind(var3)(var4);
                if(!var1) { _fun0015_ip = 85; continue _fun0015 }
case 43:
                var3 = var2.targetDimensions;
                var1 = var3.delete;
                var1 = var1.bind(var3)(var4);
                var3 = var2.setDirty;
                var1 = true;
                var1 = var3.bind(var2)(var1);
                var1 = var2.deferredLayoutChange;
                var1 = var1.bind(var2)();
case 85:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[13] = var1;
        var1 = {};
        var6 = 'setTargetAspectRatio';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                var5 = arg1;
                var3 = arg2;
                var2 = this;
                var1 = 'portrait';
                if(!(var1 !== var3)) { _fun0016_ip = 86; continue _fun0016 }
case 87:
                var1 = 'landscape';
                if(!(var1 !== var3)) { _fun0016_ip = 5; continue _fun0016 }
case 88:
                var1 = 'square';
                var4 = undefined;
                if(!(var1 === var3)) { _fun0016_ip = 89; continue _fun0016 }
case 66:
                var4 = {'width': 1, 'height': 1};
                _fun0016_ip = 89; continue _fun0016;
case 5:
                var4 = {'width': 2, 'height': 1};
                _fun0016_ip = 89; continue _fun0016;
case 86:
                var4 = {'width': 1, 'height': 2};
case 89:
                var1 = var2.getTargetDimensions;
                var3 = var1.bind(var2)(var5);
                var6 = var3.width;
                var1 = var4.width;
                var1 = var6 === var1;
                if(!var1) { _fun0016_ip = 90; continue _fun0016 }
case 91:
                var6 = var3.height;
                var3 = var4.height;
                var1 = var6 === var3;
case 90:
                if(var1) { _fun0016_ip = 52; continue _fun0016 }
case 92:
                var3 = var2.targetDimensions;
                var1 = var3.set;
                var1 = var1.bind(var3)(var5, var4);
                var3 = var2.setDirty;
                var1 = true;
                var1 = var3.bind(var2)(var1);
                var1 = var2.deferredLayoutChange;
                var1 = var1.bind(var2)();
case 52:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[14] = var1;
        var1 = {};
        var6 = 'computeCardsLayout';
        var1['key'] = var6;
        var6 = function value() {
            _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                var3 = this;
                var _closure3_slot0 = var3;
                var _closure3_slot1 = var3;
                var2 = var3.dirty;
                var1 = undefined;
                if(!var2) { _fun0017_ip = 93; continue _fun0017 }
case 88:
                var6 = global;
                var2 = var6.Map;
                var5 = var2.prototype;
                var5 = Object.create(var5, {constructor: {value: var2}});
                var30 = var5;
                var2 = new var30[var2](var29);
                var2 = var2 instanceof Object ? var2 : var5;
                var3['cardCoords'] = var2;
                var2 = var6.Map;
                var5 = var2.prototype;
                var5 = Object.create(var5, {constructor: {value: var2}});
                var30 = var5;
                var2 = new var30[var2](var29);
                var2 = var2 instanceof Object ? var2 : var5;
                var3['chunkedCoords'] = var2;
                var2 = var3.props;
                var15 = var2.windowWidth;
                var _closure3_slot2 = var15;
                var18 = var2.windowHeight;
                var _closure3_slot3 = var18;
                var24 = var2.safeAreaLeft;
                var25 = var2.safeAreaRight;
                var21 = var2.safeAreaTop;
                var13 = var2.safeAreaBottom;
                var7 = var2.gutter;
                var19 = var2.controlBarSize;
                var2 = var6.Set;
                var5 = var2.prototype;
                var5 = Object.create(var5, {constructor: {value: var2}});
                var30 = var5;
                var2 = new var30[var2](var29);
                var17 = var2 instanceof Object ? var2 : var5;
                var _closure3_slot4 = var17;
                var2 = var6.Set;
                var5 = var2.prototype;
                var5 = Object.create(var5, {constructor: {value: var2}});
                var30 = var5;
                var2 = new var30[var2](var29);
                var16 = var2 instanceof Object ? var2 : var5;
                var _closure3_slot5 = var16;
                var2 = var6.Set;
                var5 = var2.prototype;
                var5 = Object.create(var5, {constructor: {value: var2}});
                var30 = var5;
                var2 = new var30[var2](var29);
                var14 = var2 instanceof Object ? var2 : var5;
                var _closure3_slot6 = var14;
                var8 = var6.Set;
                var29 = var3.items;
                var5 = var8.prototype;
                var5 = Object.create(var5, {constructor: {value: var8}});
                var30 = var5;
                var2 = new var30[var8](var29, var28);
                var12 = var2 instanceof Object ? var2 : var5;
                var _closure3_slot7 = var12;
                var2 = var3.items;
                var8 = var2.length;
                var2 = var6.HermesInternal;
                var5 = var2.concat;
                var2 = '';
                var2 = var5.bind(var2)(var8);
                var _closure3_slot8 = var2;
                var11 = 0;
                var _closure3_slot9 = var11;
                var10 = function _loop(arg1) {
                    _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                        var3 = arg1;
                        var7 = _closure1_slot8;
                        var6 = var7.getParticipant;
                        var4 = _closure3_slot1;
                        var5 = var4.channelId;
                        var4 = var3.id;
                        var6 = var6.bind(var7)(var5, var4);
                        var5 = var3.type;
                        var4 = _closure1_slot9;
                        var4 = var4.CTA;
                        if(!(var5 !== var4)) { _fun0018_ip = 94; continue _fun0018 }
case 78:
                        var4 = null;
                        var4 = var4 == var6;
                        var7 = undefined;
                        var5 = undefined;
                        if(var4) { _fun0018_ip = 95; continue _fun0018 }
case 96:
                        var8 = var6.type;
                        var4 = _closure1_slot16;
                        var4 = var4.USER;
                        if(!(var8 === var4)) { _fun0018_ip = 92; continue _fun0018 }
case 97:
                        var8 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var4 = 12;
                        var4 = var9[var4];
                        var4 = var8.bind(var7)(var4);
                        var4 = var4.bind(var7)(var6);
                        var5 = undefined;
                        if(!var4) { _fun0018_ip = 95; continue _fun0018 }
case 92:
                        var7 = var6.type;
                        var4 = _closure1_slot16;
                        var4 = var4.USER;
                        if(!(var7 !== var4)) { _fun0018_ip = 98; continue _fun0018 }
case 99:
                        var8 = _closure3_slot1;
                        var7 = var8.getTargetDimensions;
                        var4 = var3.id;
                        var4 = var7.bind(var8)(var4);
                        _fun0018_ip = 58; continue _fun0018;
case 98:
                        var7 = _closure3_slot1;
                        var4 = var7.defaultTargetCoords;
case 58:
                        var5 = var4;
case 95:
                        _fun0018_ip = 100; continue _fun0018;
case 94:
                        var8 = _closure3_slot1;
                        var7 = var8.getTargetDimensions;
                        var4 = var3.id;
                        var5 = var7.bind(var8)(var4);
case 100:
                        var4 = null;
                        if(!(var4 != var5)) { _fun0018_ip = 101; continue _fun0018 }
case 22:
                        if(!(var4 != var6)) { _fun0018_ip = 101; continue _fun0018 }
case 102:
                        var7 = {};
                        var4 = 'custom';
                        var7['type'] = var4;
                        var7['item'] = var3;
                        var8 = var6.type;
                        var4 = _closure1_slot16;
                        var5 = var4.USER;
                        var5 = var8 === var5;
                        var7['forceSquare'] = var5;
                        var5 = var6.type;
                        var4 = var4.ACTIVITY;
                        if(!(var4 !== var5)) { _fun0018_ip = 103; continue _fun0018 }
case 24:
                        var4 = _closure1_slot16;
                        var4 = var4.STREAM;
                        if(!(var4 !== var5)) { _fun0018_ip = 104; continue _fun0018 }
case 105:
                        var4 = _closure1_slot16;
                        var4 = var4.USER;
                        if(!(var4 === var5)) { _fun0018_ip = 106; continue _fun0018 }
case 107:
                        var5 = _closure3_slot6;
                        var4 = var5.add;
                        var4 = var4.bind(var5)(var7);
                        _fun0018_ip = 106; continue _fun0018;
case 104:
                        var5 = _closure3_slot5;
                        var4 = var5.add;
                        var4 = var4.bind(var5)(var7);
                        _fun0018_ip = 106; continue _fun0018;
case 103:
                        var5 = _closure3_slot4;
                        var4 = var5.add;
                        var4 = var4.bind(var5)(var7);
case 106:
                        var4 = _closure3_slot8;
                        var8 = var6.type;
                        var5 = _closure1_slot16;
                        var7 = var5.STREAM;
                        var5 = 'stream';
                        if(!(var8 !== var7)) { _fun0018_ip = 108; continue _fun0018 }
case 109:
                        var7 = var6.type;
                        var2 = _closure1_slot16;
                        var6 = var2.USER;
                        var2 = 'activity';
                        if(!(var7 === var6)) { _fun0018_ip = 110; continue _fun0018 }
case 111:
                        var2 = 'camera';
case 110:
                        var5 = var2;
case 108:
                        var2 = ',';
                        var2 = var2 + var5;
                        var2 = var4 + var2;
                        _closure3_slot8 = var2;
                        var2 = _closure3_slot7;
                        var1 = var2.delete;
                        var1 = var1.bind(var2)(var3);
                        var1 = undefined;
                        return var1;
case 101:
                        var1 = 1;
                        return var1;
                    }
                };
                var5 = _closure1_slot21;
                var9 = var5.bind(var1)(var12);
                var8 = var9.bind(var1)();
                var5 = var8.done;
                if(var5) { _fun0017_ip = 112; continue _fun0017 }
case 113:
                var5 = var8.value;
                var5 = var10.bind(var1)(var5);
                if(var5) { _fun0017_ip = 112; continue _fun0017 }
case 114:
                var20 = var9.bind(var1)();
                var5 = var20.done;
                var8 = var20;
                if(!var5) { _fun0017_ip = 113; continue _fun0017 }
case 112:
                var5 = var17.size;
                var10 = null;
                var23 = null;
                if(!(var11 === var5)) { _fun0017_ip = 115; continue _fun0017 }
case 110:
                var9 = _closure1_slot20;
                var8 = var9.find;
                var5 = function(arg1) {
                    var1 = arg1;
                    var3 = var1.match;
                    var2 = var3.has;
                    var1 = _closure3_slot8;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var23 = var8.bind(var9)(var5);
case 115:
                var _closure3_slot11 = var23;
                var9 = var6.Math;
                var8 = var9.max;
                var20 = _closure1_slot1;
                var22 = _closure1_slot2;
                var5 = 13;
                var5 = var22[var5];
                var20 = var20.bind(var1)(var5);
                var5 = {};
                var5['top'] = var21;
                var5['left'] = var24;
                var5['right'] = var25;
                var5['bottom'] = var13;
                var5 = var20.bind(var1)(var5);
                var5 = var5.height;
                var20 = var18 - var5;
                var5 = _closure1_slot14;
                var5 = var20 - var5;
                var5 = var5 - var19;
                var5 = var5 - var13;
                var13 = 120;
                var19 = var8.bind(var9)(var13, var5);
                var9 = var6.Math;
                var8 = var9.max;
                var5 = var15 - var24;
                var5 = var5 - var25;
                var13 = var8.bind(var9)(var13, var5);
                if(!(var10 == var23)) { _fun0017_ip = 116; continue _fun0017 }
case 117:
                var5 = var17.size;
                if(!(!(var5 > var11))) { _fun0017_ip = 116; continue _fun0017 }
case 118:
                var8 = _closure1_slot26;
                var5 = {};
                var5['windowWidth'] = var15;
                var5['windowHeight'] = var18;
                var5['safeAreaLeft'] = var24;
                var5['safeAreaRight'] = var25;
                var9 = var8.bind(var1)(var5);
                var5 = var3.items;
                var8 = var5.length;
                var5 = 7;
                if(!(!(var8 >= var5))) { _fun0017_ip = 119; continue _fun0017 }
case 120:
                var5 = var3.items;
                var5 = var5.length;
                if(!(var11 !== var5)) { _fun0017_ip = 119; continue _fun0017 }
case 121:
                var8 = _closure1_slot1;
                var20 = _closure1_slot2;
                var5 = 14;
                var5 = var20[var5];
                var8 = var8.bind(var1)(var5);
                var5 = {};
                var20 = var3.items;
                var20 = var20.length;
                var5['cardCount'] = var20;
                var5['gutterSize'] = var7;
                var5['availableWidth'] = var13;
                var5['availableHeight'] = var19;
                var5 = var8.bind(var1)(var5);
                var8 = var5.columns;
                _closure3_slot9 = var8;
                var22 = var5.cardSize;
                var5 = var8;
                var13 = var5;
                _fun0017_ip = 122; continue _fun0017;
case 119:
                var21 = var6.Math;
                var20 = var21.max;
                var8 = var15 - var24;
                var8 = var8 - var25;
                var8 = var8 / var9;
                var8 = var8 | 0;
                var9 = 1;
                var8 = var20.bind(var21)(var8, var9);
                _closure3_slot9 = var8;
                var21 = _closure1_slot7;
                var20 = var21.roundToNearestPixel;
                var26 = var15 - var24;
                var26 = var26 - var25;
                var27 = _closure1_slot15;
                var9 = var8 - var9;
                var9 = var27 * var9;
                var9 = var26 - var9;
                var9 = var9 / var8;
                var22 = var20.bind(var21)(var9);
                var5 = var8;
                var13 = var5;
                _fun0017_ip = 122; continue _fun0017;
case 116:
                var9 = _closure1_slot26;
                var8 = {};
                var8['windowWidth'] = var15;
                var8['windowHeight'] = var18;
                var8['safeAreaLeft'] = var24;
                var8['safeAreaRight'] = var25;
                var9 = var9.bind(var1)(var8);
                var20 = var6.Math;
                var18 = var20.max;
                var26 = var6.Math;
                var21 = var26.min;
                var8 = var15 - var24;
                var8 = var8 - var25;
                var8 = var8 / var9;
                var9 = var8 | 0;
                var8 = 4;
                var8 = var21.bind(var26)(var9, var8);
                var9 = 1;
                var8 = var18.bind(var20)(var8, var9);
                _closure3_slot9 = var8;
                var20 = _closure1_slot7;
                var18 = var20.roundToNearestPixel;
                var21 = var15 - var24;
                var21 = var21 - var25;
                var9 = var8 - var9;
                var9 = var7 * var9;
                var9 = var21 - var9;
                var9 = var9 / var8;
                var22 = var18.bind(var20)(var9);
                var5 = var8;
                var13 = var5;
case 122:
                var9 = var10 == var23;
                var8 = undefined;
                if(var9) { _fun0017_ip = 123; continue _fun0017 }
case 124:
                var8 = var23.global;
case 123:
                var21 = true;
                if(!(var21 === var8)) { _fun0017_ip = 125; continue _fun0017 }
case 126:
                var8 = var23.layouts;
                var8 = var8[var11];
                var _closure3_slot10 = var8;
case 125:
                var18 = var6.Math;
                var9 = var18.floor;
                var8 = var3.items;
                var8 = var8.length;
                var8 = var8 / var13;
                var18 = var9.bind(var18)(var8);
                var8 = var3.items;
                var8 = var8.length;
                var20 = var8 % var13;
                var8 = 1;
                var9 = var8;
                if(!(var20 == var11)) { _fun0017_ip = 127; continue _fun0017 }
case 128:
                var9 = 0;
case 127:
                var20 = var18 + var9;
                var9 = {};
                var18 = var22;
                if(!(var10 == var23)) { _fun0017_ip = 129; continue _fun0017 }
case 130:
                var18 = var22;
                if(!(var8 === var13)) { _fun0017_ip = 129; continue _fun0017 }
case 131:
                var18 = var22;
                if(!(var20 > var8)) { _fun0017_ip = 129; continue _fun0017 }
case 132:
                var26 = var17.size;
                var18 = var22;
                if(!(var11 === var26)) { _fun0017_ip = 129; continue _fun0017 }
case 133:
                var24 = var15 - var24;
                var18 = var24 - var25;
case 129:
                var9['width'] = var18;
                var18 = var22;
                if(!(var10 == var23)) { _fun0017_ip = 134; continue _fun0017 }
case 135:
                var18 = var22;
                if(!(var8 === var20)) { _fun0017_ip = 134; continue _fun0017 }
case 136:
                var18 = var22;
                if(!(var13 > var8)) { _fun0017_ip = 134; continue _fun0017 }
case 137:
                var20 = var17.size;
                var18 = var22;
                if(!(var11 === var20)) { _fun0017_ip = 134; continue _fun0017 }
case 138:
                var18 = var19;
case 134:
                var9['height'] = var18;
                var19 = _closure1_slot1;
                var20 = _closure1_slot2;
                var18 = 11;
                var18 = var20[var18];
                var19 = var19.bind(var1)(var18);
                var18 = var3.defaultTargetCoords;
                var18 = var19.bind(var1)(var9, var18);
                if(var18) { _fun0017_ip = 139; continue _fun0017 }
case 140:
                var3['defaultTargetCoords'] = var9;
case 139:
                var9 = {};
                var18 = var3.defaultTargetCoords;
                var18 = var18.width;
                var9['cardWidth'] = var18;
                var18 = var3.defaultTargetCoords;
                var18 = var18.height;
                var9['cardHeight'] = var18;
                var9['gutter'] = var7;
                var18 = var3.items;
                var18 = var18.length;
                var9['totalItems'] = var18;
                var9['windowWidth'] = var15;
                var _closure3_slot12 = var9;
                var6 = var6.Array;
                var9 = var6.prototype;
                var9 = Object.create(var9, {constructor: {value: var6}});
                var30 = var9;
                var29 = var13;
                var6 = new var30[var6](var29, var28);
                var9 = var6 instanceof Object ? var6 : var9;
                var6 = var9.fill;
                var6 = var6.bind(var9)(var11);
                var9 = new Array(1);
                var9[0] = var6;
                var _closure3_slot13 = var9;
                var6 = -1;
                var _closure3_slot14 = var6;
                var _closure3_slot15 = var6;
                var _closure3_slot16 = var6;
                var _closure3_slot17 = var11;
                var6 = new Array(0);
                var _closure3_slot18 = var6;
                var15 = function placeItem(arg1, arg2, arg3, arg4) {
                    _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                        var4 = arg1;
                        var3 = {};
                        var1 = _closure3_slot13;
                        var3['grid'] = var1;
                        var1 = _closure3_slot14;
                        var3['lastFullyFilledRow'] = var1;
                        var1 = arg3;
                        var3['width'] = var1;
                        var1 = arg4;
                        var3['height'] = var1;
                        var1 = _closure3_slot9;
                        var3['columns'] = var1;
                        var21 = var3.grid;
                        var1 = var3.lastFullyFilledRow;
                        var7 = var3.width;
                        var20 = var3.height;
                        var19 = var3.columns;
                        var6 = global;
                        var5 = var6.Math;
                        var3 = var5.min;
                        var18 = var3.bind(var5)(var7, var19);
                        var7 = 1;
                        if(!(var7 === var19)) { _fun0019_ip = 141; continue _fun0019 }
case 91:
                        var20 = var7;
case 141:
                        var17 = var1 + var7;
                        var1 = undefined;
                        var13 = -1;
                        var12 = null;
                        var5 = 0;
                        var15 = undefined;
                        var14 = var13;
                        var11 = var14;
                        var10 = undefined;
                        var9 = undefined;
                        var8 = undefined;
case 99:
                        var3 = _closure1_slot23;
                        var23 = var3.bind(var1)(var17, var19, var21);
                        var3 = var23.length;
                        var3 = var5 < var3;
                        var27 = var17;
                        var22 = 0;
                        var24 = var14;
                        var25 = var11;
                        if(!var3) { _fun0019_ip = 142; continue _fun0019 }
case 143:
                        var3 = var23[var22];
                        if(!(var7 !== var3)) { _fun0019_ip = 144; continue _fun0019 }
case 145:
                        var3 = var18 - var7;
                        var26 = var22 + var3;
                        var3 = var23.length;
                        var24 = var27;
                        var25 = var22;
                        if(!(var26 >= var3)) { _fun0019_ip = 142; continue _fun0019 }
case 144:
                        var22 = var22 + 1;
                        var3 = var23.length;
                        var24 = var14;
                        var25 = var11;
                        if(var22 < var3) { _fun0019_ip = 143; continue _fun0019 }
case 142:
                        if(!(var13 !== var24)) { _fun0019_ip = 64; continue _fun0019 }
case 146:
                        if(!(var13 === var25)) { _fun0019_ip = 147; continue _fun0019 }
case 64:
                        var17 = var27 + 1;
                        var3 = var15;
                        var14 = var13;
                        var11 = var14;
                        var23 = var9;
                        var22 = var8;
                        _fun0019_ip = 148; continue _fun0019;
case 147:
                        var26 = var20 - var7;
                        var28 = var24 + var26;
                        var31 = var24;
                        var30 = var25;
                        var29 = var31;
                        var26 = var29;
                        var25 = var30;
                        var24 = var26;
                        if(!(var24 <= var28)) { _fun0019_ip = 149; continue _fun0019 }
case 150:
                        var28 = _closure1_slot23;
                        var34 = var28.bind(var1)(var29, var19, var21);
                        var28 = var18 - var7;
                        var32 = var30 + var28;
                        var28 = var29;
                        var37 = var30;
                        var36 = var31;
                        var35 = var37;
                        var33 = var35;
                        if(!(var33 <= var32)) { _fun0019_ip = 114; continue _fun0019 }
case 151:
                        var32 = var34[var37];
                        var36 = var13;
                        var35 = var36;
                        var33 = var37;
                        if(!(var5 === var32)) { _fun0019_ip = 114; continue _fun0019 }
case 152:
                        var37 = var37 + 1;
                        var32 = var18 - var7;
                        var32 = var30 + var32;
                        var36 = var31;
                        var35 = var30;
                        var33 = var37;
                        if(var33 <= var32) { _fun0019_ip = 151; continue _fun0019 }
case 114:
                        var26 = var36;
                        var25 = var35;
                        var24 = var28;
                        var9 = var34;
                        var8 = var33;
                        if(!(var13 !== var35)) { _fun0019_ip = 149; continue _fun0019 }
case 153:
                        var25 = var35;
                        var24 = var28;
                        var9 = var34;
                        var8 = var33;
                        var26 = var36;
                        if(!(var13 !== var26)) { _fun0019_ip = 149; continue _fun0019 }
case 154:
                        var29 = var28 + 1;
                        var28 = var20 - var7;
                        var28 = var36 + var28;
                        var31 = var36;
                        var30 = var35;
                        var26 = var31;
                        var25 = var30;
                        var9 = var34;
                        var8 = var33;
                        var24 = var29;
                        if(var24 <= var28) { _fun0019_ip = 150; continue _fun0019 }
case 149:
                        if(!(var13 !== var26)) { _fun0019_ip = 155; continue _fun0019 }
case 156:
                        if(!(var13 === var25)) { _fun0019_ip = 157; continue _fun0019 }
case 155:
                        var17 = var27 + 1;
                        var3 = var15;
                        var14 = var26;
                        var11 = var25;
                        var10 = var24;
                        var23 = var9;
                        var22 = var8;
                        _fun0019_ip = 148; continue _fun0019;
case 157:
                        var28 = {};
                        var28['startRow'] = var26;
                        var28['startCol'] = var25;
                        var28['width'] = var18;
                        var28['height'] = var20;
                        var3 = var28;
                        var17 = var27;
                        var14 = var26;
                        var11 = var25;
                        var10 = var24;
                        var23 = var9;
                        var22 = var8;
case 148:
                        var9 = var23;
                        var8 = var22;
                        var15 = var3;
                        if(var12 == var15) { _fun0019_ip = 99; continue _fun0019 }
case 158:
                        var11 = _closure3_slot13;
                        var10 = _closure3_slot14;
                        var17 = var3.startRow;
                        var16 = var3.startCol;
                        var15 = var3.width;
                        var14 = var3.height;
                        var8 = var17 + var14;
                        var9 = var17;
                        if(!(var9 < var8)) { _fun0019_ip = 159; continue _fun0019 }
case 160:
                        var8 = var16 + var15;
                        var18 = var16;
                        if(!(var18 < var8)) { _fun0019_ip = 161; continue _fun0019 }
case 162:
                        var8 = var11[var9];
                        var8[var18] = var7;
                        var18 = var18 + 1;
                        var8 = var16 + var15;
                        if(var18 < var8) { _fun0019_ip = 162; continue _fun0019 }
case 161:
                        var9 = var9 + 1;
                        var8 = var17 + var14;
                        if(var9 < var8) { _fun0019_ip = 160; continue _fun0019 }
case 159:
                        var9 = var10 + var7;
case 163:
                        var15 = var11[var9];
                        var8 = var10;
                        if(!(var12 != var15)) { _fun0019_ip = 164; continue _fun0019 }
case 165:
                        var14 = var15.indexOf;
                        var14 = var14.bind(var15)(var5);
                        if(!(var13 === var14)) { _fun0019_ip = 164; continue _fun0019 }
case 166:
                        var14 = var9 + 1;
                        var10 = var9;
                        var9 = var14;
                        _fun0019_ip = 163; continue _fun0019;
case 164:
                        _closure3_slot14 = var8;
                        var11 = var6.Math;
                        var10 = var11.min;
                        var14 = var6.Math;
                        var13 = var14.max;
                        var9 = _closure3_slot16;
                        var15 = var3.startCol;
                        var8 = var3.width;
                        var8 = var8 - var7;
                        var8 = var15 + var8;
                        var9 = var13.bind(var14)(var9, var8);
                        var8 = _closure3_slot9;
                        var8 = var10.bind(var11)(var9, var8);
                        _closure3_slot16 = var8;
                        var8 = _closure3_slot12;
                        var9 = _closure3_slot17;
                        var10 = {};
                        var10['id'] = var4;
                        var11 = arg2;
                        var10['type'] = var11;
                        var13 = var3.startCol;
                        var14 = var8.gutter;
                        var11 = var8.cardWidth;
                        var11 = var14 + var11;
                        var11 = var13 * var11;
                        var10['x'] = var11;
                        var13 = var3.startRow;
                        var14 = var8.gutter;
                        var11 = var8.cardHeight;
                        var11 = var14 + var11;
                        var11 = var13 * var11;
                        var10['y'] = var11;
                        var13 = var8.cardWidth;
                        var11 = var3.width;
                        var13 = var13 * var11;
                        var11 = var3.width;
                        var14 = var11 - var7;
                        var11 = var8.gutter;
                        var11 = var14 * var11;
                        var11 = var13 + var11;
                        var10['width'] = var11;
                        var13 = var8.cardHeight;
                        var11 = var3.height;
                        var13 = var13 * var11;
                        var11 = var3.height;
                        var14 = var11 - var7;
                        var11 = var8.gutter;
                        var11 = var14 * var11;
                        var11 = var13 + var11;
                        var10['height'] = var11;
                        var8 = var8.totalItems;
                        var8 = var8 - var9;
                        var10['zIndex'] = var8;
                        var13 = var10.y;
                        var8 = var10.height;
                        var9 = _closure3_slot0;
                        var9 = var9.props;
                        var9 = var9.chunkSize;
                        var11 = var13 / var9;
                        var14 = var11 | 0;
                        var11 = new Array(2);
                        var11[0] = var14;
                        var8 = var13 + var8;
                        var8 = var8 / var9;
                        var8 = var8 | 0;
                        var11[1] = var8;
                        var9 = var11[var5];
                        var8 = var11[var7];
                        if(!(var9 <= var8)) { _fun0019_ip = 167; continue _fun0019 }
case 168:
                        var8 = _closure3_slot0;
                        var13 = var8.chunkedCoords;
                        var8 = var13.get;
                        var14 = var8.bind(var13)(var9);
                        var8 = var9;
                        if(!(var12 == var14)) { _fun0019_ip = 169; continue _fun0019 }
case 170:
                        var13 = var6.Set;
                        var15 = var13.prototype;
                        var15 = Object.create(var15, {constructor: {value: var13}});
                        var42 = var15;
                        var13 = new var42[var13](var41);
                        var13 = var13 instanceof Object ? var13 : var15;
                        var15 = _closure3_slot0;
                        var16 = var15.chunkedCoords;
                        var15 = var16.set;
                        var15 = var15.bind(var16)(var8, var13);
                        var14 = var13;
case 169:
                        var13 = var14.add;
                        var13 = var13.bind(var14)(var10);
                        var9 = var8 + 1;
                        var8 = var11[var7];
                        if(var9 <= var8) { _fun0019_ip = 168; continue _fun0019 }
case 167:
                        var8 = _closure3_slot0;
                        var9 = var8.cardCoords;
                        var8 = var9.set;
                        var8 = var8.bind(var9)(var4, var10);
                        var10 = var6.Math;
                        var9 = var10.max;
                        var8 = _closure3_slot15;
                        var11 = var3.startRow;
                        var6 = var3.height;
                        var6 = var11 + var6;
                        var6 = var6 - var7;
                        var8 = var9.bind(var10)(var8, var6);
                        _closure3_slot15 = var8;
                        var6 = _closure3_slot14;
                        if(!(var8 !== var6)) { _fun0019_ip = 171; continue _fun0019 }
case 172:
                        var6 = var3.height;
                        if(!(var7 === var6)) { _fun0019_ip = 171; continue _fun0019 }
case 173:
                        var6 = var3.startRow;
                        var3 = _closure3_slot15;
                        if(!(var6 !== var3)) { _fun0019_ip = 174; continue _fun0019 }
case 171:
                        var3 = _closure3_slot18;
                        var3['length'] = var5;
                        _fun0019_ip = 175; continue _fun0019;
case 174:
                        var3 = _closure3_slot18;
                        var2 = var3.push;
                        var2 = var2.bind(var3)(var4);
case 175:
                        return var1;
                    }
                };
                var _closure3_slot19 = var15;
                var15 = var3.items;
                var15 = var15.length;
                var15 = var8 === var15;
                var _closure3_slot20 = var15;
                var15 = new Array(4);
                var15[0] = var17;
                var15[1] = var16;
                var15[2] = var14;
                var15[3] = var12;
                var12 = var15.length;
                var12 = var11 < var12;
                var14 = 0;
                if(!var12) { _fun0017_ip = 176; continue _fun0017 }
case 177:
                var18 = function _loop2(arg1) {
                    _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                        var4 = arg1;
                        var2 = var4.type;
                        var1 = 'custom';
                        if(!(var1 !== var2)) { _fun0020_ip = 178; continue _fun0020 }
case 37:
                        var2 = {};
                        var2['item'] = var4;
                        var8 = _closure1_slot25;
                        var6 = _closure3_slot2;
                        var5 = _closure3_slot3;
                        var7 = var6 > var5;
                        var6 = _closure3_slot10;
                        var5 = null;
                        if(!(var5 == var6)) { _fun0020_ip = 76; continue _fun0020 }
case 48:
                        var6 = _closure1_slot19;
                        _fun0020_ip = 85; continue _fun0020;
case 76:
                        var6 = _closure3_slot10;
case 85:
                        var10 = _closure3_slot20;
                        var14 = undefined;
                        var13 = 'square';
                        var12 = var7;
                        var11 = var6;
                        var1 = var14[var8](var13, var12, var11, var10, var9);
                        var2['dimensions'] = var1;
                        _fun0020_ip = 179; continue _fun0020;
case 178:
                        var5 = _closure3_slot10;
                        var1 = null;
                        if(!(var1 == var5)) { _fun0020_ip = 180; continue _fun0020 }
case 50:
                        var5 = _closure3_slot11;
                        var5 = var1 == var5;
                        var8 = undefined;
                        if(var5) { _fun0020_ip = 181; continue _fun0020 }
case 92:
                        var5 = _closure3_slot11;
                        var6 = var5.layouts;
                        var5 = _closure3_slot17;
                        var8 = var6[var5];
case 181:
                        _fun0020_ip = 182; continue _fun0020;
case 180:
                        var8 = _closure3_slot10;
case 182:
                        if(!(var1 == var8)) { _fun0020_ip = 183; continue _fun0020 }
case 184:
                        var8 = _closure1_slot19;
case 183:
                        var1 = var4.forceSquare;
                        var7 = 'square';
                        if(var1) { _fun0020_ip = 185; continue _fun0020 }
case 186:
                        var6 = _closure1_slot24;
                        var9 = _closure3_slot1;
                        var5 = var9.getTargetDimensions;
                        var1 = var4.item;
                        var1 = var1.id;
                        var5 = var5.bind(var9)(var1);
                        var1 = undefined;
                        var7 = var6.bind(var1)(var5);
case 185:
                        var1 = {};
                        var4 = var4.item;
                        var1['item'] = var4;
                        var6 = _closure1_slot25;
                        var5 = _closure3_slot2;
                        var4 = _closure3_slot3;
                        var12 = var5 > var4;
                        var10 = _closure3_slot20;
                        var14 = undefined;
                        var13 = var7;
                        var11 = var8;
                        var3 = var14[var6](var13, var12, var11, var10, var9);
                        var1['dimensions'] = var3;
                        var2 = var1;
case 179:
                        var1 = var2.item;
                        var2 = var2.dimensions;
                        var11 = var2.width;
                        var10 = var2.height;
                        var13 = var1.id;
                        var4 = _closure3_slot19;
                        var12 = var1.type;
                        var1 = undefined;
                        var14 = undefined;
                        var2 = var14[var4](var13, var12, var11, var10, var9);
                        var2 = _closure3_slot17;
                        var2 = var2 + 1;
                        _closure3_slot17 = var2;
                        return var1;
                    }
                };
                var16 = _closure1_slot21;
                var12 = var15[var14];
                var17 = var16.bind(var1)(var12);
                var16 = var17.bind(var1)();
                var12 = var16.done;
                if(var12) { _fun0017_ip = 187; continue _fun0017 }
case 188:
                var12 = var16.value;
                var12 = var18.bind(var1)(var12);
                var19 = var17.bind(var1)();
                var12 = var19.done;
                var16 = var19;
                if(!var12) { _fun0017_ip = 188; continue _fun0017 }
case 187:
                var14 = var14 + 1;
                var12 = var15.length;
                if(var14 < var12) { _fun0017_ip = 177; continue _fun0017 }
case 176:
                var14 = _closure3_slot14;
                var12 = _closure3_slot15;
                if(!(var14 !== var12)) { _fun0017_ip = 189; continue _fun0017 }
case 190:
                var12 = _closure3_slot15;
                var15 = var9[var12];
                var12 = var15[var11];
                var17 = var11 === var12;
                var14 = _closure1_slot21;
                var20 = var14.bind(var1)(var15);
                var14 = var20.bind(var1)();
                var15 = var14.done;
                var18 = var14;
                var19 = false;
                var16 = 0;
                var14 = var17;
                var12 = 0;
                if(var15) { _fun0017_ip = 191; continue _fun0017 }
case 192:
                var15 = var18.value;
                var22 = var16 + var15;
                var24 = var19;
                var23 = var17;
                if(var23) { _fun0017_ip = 193; continue _fun0017 }
case 194:
                var25 = var8 === var15;
                if(!var25) { _fun0017_ip = 195; continue _fun0017 }
case 196:
                var25 = var19;
case 195:
                if(!var25) { _fun0017_ip = 197; continue _fun0017 }
case 198:
                var17 = true;
case 197:
                if(!(var11 === var15)) { _fun0017_ip = 199; continue _fun0017 }
case 200:
                var19 = true;
case 199:
                var24 = var19;
                var23 = var17;
case 193:
                var25 = var20.bind(var1)();
                var15 = var25.done;
                var17 = var23;
                var19 = var24;
                var18 = var25;
                var16 = var22;
                var14 = var17;
                var12 = var16;
                if(!var15) { _fun0017_ip = 192; continue _fun0017 }
case 191:
                if(var14) { _fun0017_ip = 189; continue _fun0017 }
case 201:
                var12 = var13 - var12;
                var14 = _closure1_slot7;
                var13 = var14.roundToNearestPixel;
                var15 = var3.defaultTargetCoords;
                var15 = var15.width;
                var15 = var12 * var15;
                var12 = var12 * var7;
                var15 = var15 + var12;
                var12 = 2;
                var12 = var15 / var12;
                var13 = var13.bind(var14)(var12);
                var2 = _closure1_slot21;
                var12 = var2.bind(var1)(var6);
                var6 = var12.bind(var1)();
                var2 = var6.done;
                if(var2) { _fun0017_ip = 189; continue _fun0017 }
case 202:
                var15 = var6.value;
                var14 = var3.cardCoords;
                var2 = var14.get;
                var14 = var2.bind(var14)(var15);
                if(!(var10 != var14)) { _fun0017_ip = 203; continue _fun0017 }
case 204:
                var2 = var14.x;
                var2 = var2 + var13;
                var14['x'] = var2;
case 203:
                var14 = var12.bind(var1)();
                var2 = var14.done;
                var6 = var14;
                if(!var2) { _fun0017_ip = 202; continue _fun0017 }
case 189:
                var2 = {};
                var6 = var3.items;
                var6 = var6.length;
                if(!(var11 !== var6)) { _fun0017_ip = 205; continue _fun0017 }
case 206:
                var6 = _closure3_slot16;
                var6 = var6 + 1;
                _closure3_slot16 = var6;
                var6 = var3.defaultTargetCoords;
                var12 = var6.width;
                var6 = _closure3_slot16;
                var6 = var12 * var6;
                var4 = _closure3_slot16;
                var4 = var4 - var8;
                var4 = var4 * var7;
                var4 = var6 + var4;
                _fun0017_ip = 207; continue _fun0017;
case 205:
                var6 = var3.defaultTargetCoords;
                var6 = var6.width;
                var6 = var6 * var5;
                var5 = var5 - var8;
                var5 = var5 * var7;
                var4 = var6 + var5;
case 207:
                var2['width'] = var4;
                var4 = var3.items;
                var5 = var4.length;
                var4 = 0;
                if(!(var4 !== var5)) { _fun0017_ip = 208; continue _fun0017 }
case 209:
                var5 = var9.length;
                var6 = var5 - var8;
                var5 = var6;
                if(!(var5 >= var11)) { _fun0017_ip = 210; continue _fun0017 }
case 211:
                var13 = var9[var6];
                var5 = var6;
                if(!(var10 != var13)) { _fun0017_ip = 210; continue _fun0017 }
case 212:
                var12 = var13.indexOf;
                var12 = var12.bind(var13)(var8);
                var5 = var6;
                if(!(!(var12 >= var11))) { _fun0017_ip = 210; continue _fun0017 }
case 213:
                var6 = var6 - 1;
                var5 = var6;
                if(var5 >= var11) { _fun0017_ip = 211; continue _fun0017 }
case 210:
                var5 = var5 + 1;
                var6 = var3.defaultTargetCoords;
                var6 = var6.height;
                var6 = var5 * var6;
                var5 = var5 - var8;
                var5 = var7 * var5;
                var4 = var6 + var5;
case 208:
                var2['height'] = var4;
                var3['contentDimensions'] = var2;
                var2 = false;
                var3['dirty'] = var2;
                var2 = var3.layoutKey;
                var2 = var2 + 1;
                var3['layoutKey'] = var2;
case 93:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[15] = var1;
        var1 = {};
        var6 = 'subscribeFromItem';
        var1['key'] = var6;
        var6 = function subscribeFromItem(arg1) {
            var4 = arg1;
            var2 = this;
            var _closure3_slot0 = var2;
            var _closure3_slot1 = var4;
            var3 = var2.layoutCallbacks;
            var2 = var3.add;
            var2 = var2.bind(var3)(var4);
            var1 = function() {
                var2 = _closure3_slot0;
                var3 = var2.layoutCallbacks;
                var2 = var3.delete;
                var1 = _closure3_slot1;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            return var1;
        };
        var1['value'] = var6;
        var2[16] = var1;
        var1 = {};
        var6 = 'subscribeToManager';
        var1['key'] = var6;
        var6 = function subscribeToManager(arg1) {
            var4 = arg1;
            var2 = this;
            var _closure3_slot0 = var2;
            var _closure3_slot1 = var4;
            var3 = var2.managerSubscriptions;
            var2 = var3.add;
            var2 = var2.bind(var3)(var4);
            var1 = function() {
                var2 = _closure3_slot0;
                var3 = var2.managerSubscriptions;
                var2 = var3.delete;
                var1 = _closure3_slot1;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            return var1;
        };
        var1['value'] = var6;
        var2[17] = var1;
        var1 = {};
        var6 = 'emitLayoutChanges';
        var1['key'] = var6;
        var6 = function emitLayoutChanges() {
            _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                var3 = this;
                var _closure3_slot0 = var3;
                var2 = var3.emitItemChanges;
                if(!var2) { _fun0021_ip = 214; continue _fun0021 }
case 67:
                var2 = var3.mounted;
case 214:
                if(!var2) { _fun0021_ip = 215; continue _fun0021 }
case 88:
                var2 = false;
                var3['emitItemChanges'] = var2;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 15;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var4.bind(var2)(var3);
                var2 = var3.batchUpdates;
                var1 = function() {
                    _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                        var5 = _closure1_slot21;
                        var1 = _closure3_slot0;
                        var4 = var1.managerSubscriptions;
                        var1 = undefined;
                        var6 = var5.bind(var1)(var4);
                        var5 = var6.bind(var1)();
                        var4 = var5.done;
                        if(var4) { _fun0022_ip = 216; continue _fun0022 }
case 217:
                        var4 = var5.value;
                        var4 = var4.bind(var1)();
                        var7 = var6.bind(var1)();
                        var4 = var7.done;
                        var5 = var7;
                        if(!var4) { _fun0022_ip = 217; continue _fun0022 }
case 216:
                        var3 = _closure1_slot21;
                        var2 = _closure3_slot0;
                        var2 = var2.layoutCallbacks;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.bind(var1)();
                        var2 = var3.done;
                        if(var2) { _fun0022_ip = 218; continue _fun0022 }
case 178:
                        var2 = var3.value;
                        var2 = var2.bind(var1)();
                        var5 = var4.bind(var1)();
                        var2 = var5.done;
                        var3 = var5;
                        if(!var2) { _fun0022_ip = 178; continue _fun0022 }
case 218:
                        return var1;
                    }
                };
                var1 = var2.bind(var3)(var1);
case 215:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[18] = var1;
        var1 = {};
        var6 = 'deferredLayoutChange';
        var1['key'] = var6;
        var5 = function deferredLayoutChange() {
            _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                var2 = this;
                var _closure3_slot0 = var2;
                var3 = var2.emitItemChanges;
                if(!var3) { _fun0023_ip = 214; continue _fun0023 }
case 67:
                var3 = var2.mounted;
case 214:
                if(!var3) { _fun0023_ip = 40; continue _fun0023 }
case 88:
                var3 = global;
                var5 = var3.setTimeout;
                var4 = undefined;
                var3 = function() {
                    var1 = global;
                    var4 = var1.clearTimeout;
                    var3 = _closure3_slot0;
                    var2 = var3.emitTimeout;
                    var1 = undefined;
                    var2 = var4.bind(var1)(var2);
                    var2 = -1;
                    var3['emitTimeout'] = var2;
                    var2 = var3.emitLayoutChanges;
                    var2 = var2.bind(var3)();
                    return var1;
                };
                var1 = 1;
                var1 = var5.bind(var4)(var3, var1);
                var2['emitTimeout'] = var1;
case 40:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var5;
        var2[19] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var4 = var4.bind(var1)();
    var5 = 16;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/voice_panel/native/card/VoicePanelCardLayoutManager.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var4 = function useCardLayoutCoordsSubscription(arg1, arg2) {
        _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
            var7 = arg1;
            var6 = arg2;
            var _closure2_slot0 = var7;
            var _closure2_slot1 = var6;
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 9;
            var4 = var4[var1];
            var1 = undefined;
            var5 = var5.bind(var1)(var4);
            var4 = var5.useSharedValue;
            var1 = {};
            var8 = var6.getCardCoords;
            var8 = var8.bind(var6)(var7);
            var9 = null;
            if(!(var9 == var8)) { _fun0024_ip = 35; continue _fun0024 }
case 47:
            var8 = _closure1_slot17;
case 35:
            var11 = var1;
            var10 = var8;
            var8 = copyDataProperties(var11, var10);
            var1 = var4.bind(var5)(var1);
            var _closure2_slot2 = var1;
            var5 = _closure1_slot6;
            var4 = var5.useLayoutEffect;
            var3 = new Array(3);
            var3[0] = var7;
            var3[1] = var6;
            var3[2] = var1;
            var2 = function() {
                var3 = function updateSharedValues() {
                    _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
                        var4 = _closure2_slot1;
                        var3 = var4.getCardCoords;
                        var2 = _closure2_slot0;
                        var4 = var3.bind(var4)(var2);
                        var2 = null;
                        if(!(var2 != var4)) { _fun0025_ip = 216; continue _fun0025 }
case 34:
                        var5 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var2 = 10;
                        var2 = var3[var2];
                        var3 = undefined;
                        var2 = var5.bind(var3)(var2);
                        var1 = _closure2_slot2;
                        var1 = var2.bind(var3)(var1, var4);
case 216:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1 = undefined;
                var1 = var3.bind(var1)();
                var2 = _closure2_slot1;
                var1 = var2.subscribeFromItem;
                var1 = var1.bind(var2)(var3);
                return var1;
            };
            var2 = var4.bind(var5)(var2, var3);
            return var1;
        }
    };
    var3['useCardLayoutCoordsSubscription'] = var4;
    var4 = function useTargetDimensionsSubscription(arg1, arg2) {
        var7 = arg1;
        var6 = arg2;
        var _closure2_slot0 = var7;
        var _closure2_slot1 = var6;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var1 = 9;
        var4 = var4[var1];
        var1 = undefined;
        var5 = var5.bind(var1)(var4);
        var4 = var5.useSharedValue;
        var1 = {};
        var8 = var6.getTargetDimensions;
        var9 = var8.bind(var6)(var7);
        var10 = var1;
        var8 = copyDataProperties(var10, var9);
        var1 = var4.bind(var5)(var1);
        var _closure2_slot2 = var1;
        var5 = _closure1_slot6;
        var4 = var5.useLayoutEffect;
        var3 = new Array(3);
        var3[0] = var7;
        var3[1] = var6;
        var3[2] = var1;
        var2 = function() {
            var3 = function updateSharedValues() {
                var4 = _closure2_slot1;
                var3 = var4.getTargetDimensions;
                var1 = _closure2_slot0;
                var4 = var3.bind(var4)(var1);
                var5 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 10;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var5.bind(var1)(var3);
                var2 = _closure2_slot2;
                var2 = var3.bind(var1)(var2, var4);
                return var1;
            };
            var1 = undefined;
            var1 = var3.bind(var1)();
            var2 = _closure2_slot1;
            var1 = var2.subscribeFromItem;
            var1 = var1.bind(var2)(var3);
            return var1;
        };
        var2 = var4.bind(var5)(var2, var3);
        return var1;
    };
    var3['useTargetDimensionsSubscription'] = var4;
    var2 = function useManagerSubscription(arg1) {
        var6 = arg1;
        var _closure2_slot0 = var6;
        var4 = _closure1_slot6;
        var5 = var4.useState;
        var3 = var6.getLayoutKey;
        var3 = var3.bind(var6)();
        var6 = var5.bind(var4)(var3);
        var5 = _closure1_slot5;
        var3 = undefined;
        var1 = 2;
        var5 = var5.bind(var3)(var6, var1);
        var1 = 0;
        var1 = var5[var1];
        var3 = 1;
        var3 = var5[var3];
        var _closure2_slot1 = var3;
        var3 = var4.useLayoutEffect;
        var2 = function() {
            var3 = _closure2_slot0;
            var2 = var3.subscribeToManager;
            var1 = function() {
                var3 = _closure2_slot1;
                var2 = _closure2_slot0;
                var1 = var2.getLayoutKey;
                var2 = var1.bind(var2)();
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['useManagerSubscription'] = var2;
    return var1;
})();