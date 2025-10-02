// discord_common/js/packages/media-engine/native/ui/DirectVideo.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
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
            var9 = _closure1_slot11;
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
            var7 = _closure1_slot11;
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
    var _closure1_slot10 = var1;
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
    var _closure1_slot11 = var1;
    var1 = function releaseDirectVideoStream(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var3 = arg1;
            var4 = _closure1_slot9;
            var2 = var4.get;
            var5 = var2.bind(var4)(var3);
            var2 = null;
            var2 = var2 != var5;
            if(!var2) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var4 = var5.release;
            var2 = var4.bind(var5)();
case 36:
            if(!var2) { _fun0004_ip = 38; continue _fun0004 }
case 39:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 5;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.getVoiceEngine;
            var4 = var2.bind(var4)();
            var2 = var4.removeDirectVideoOutputSink;
            var2 = var2.bind(var4)(var3);
            var2 = _closure1_slot9;
            var1 = var2.delete;
            var1 = var1.bind(var2)(var3);
case 38:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var4 = global;
    var10 = var4.Object;
    var9 = var10.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var7);
    var1 = 0;
    var7 = var6[var1];
    var1 = undefined;
    var7 = var8.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var7 = 1;
    var7 = var6[var7];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var7 = 2;
    var8 = var6[var7];
    var7 = metroImportAll;
    var7 = var7.bind(var1)(var8);
    var _closure1_slot5 = var7;
    var7 = 3;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.jsx;
    var _closure1_slot6 = var7;
    var7 = 4;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var9 = var7.Logger;
    var7 = var9.prototype;
    var8 = Object.create(var7, {constructor: {value: var9}});
    var13 = 'DirectVideo';
    var14 = var8;
    var7 = new var14[var9](var13, var12);
    var7 = var7 instanceof Object ? var7 : var8;
    var _closure1_slot7 = var7;
    var7 = function() {
        var4 = _closure1_slot4;
        var3 = function RefCountedStream(arg1) {
            var3 = this;
            var4 = _closure1_slot3;
            var2 = _closure2_slot0;
            var1 = undefined;
            var2 = var4.bind(var1)(var3, var2);
            var2 = 1;
            var3['refcount'] = var2;
            var2 = global;
            var5 = var2.window;
            var4 = var5.createDiscordStream;
            var2 = arg1;
            var2 = var4.bind(var5)(var2);
            var3['stream'] = var2;
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'addref';
        var1['key'] = var2;
        var2 = function value() {
            var2 = this;
            var1 = var2.refcount;
            var1 = var1 + 1;
            var2['refcount'] = var1;
            var1 = undefined;
            return var1;
        };
        var1['value'] = var2;
        var2 = new Array(2);
        var2[0] = var1;
        var1 = {};
        var6 = 'release';
        var1['key'] = var6;
        var5 = function value() {
            var1 = this;
            var2 = var1.refcount;
            var2 = var2 - 1;
            var1['refcount'] = var2;
            var2 = var1.refcount;
            var1 = 0;
            var1 = var1 === var2;
            return var1;
        };
        var1['value'] = var5;
        var2[1] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var7 = var7.bind(var1)();
    var _closure1_slot8 = var7;
    var4 = var4.Map;
    var7 = var4.prototype;
    var7 = Object.create(var7, {constructor: {value: var4}});
    var14 = var7;
    var4 = new var14[var4](var13);
    var4 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = '../discord_common/js/packages/media-engine/native/ui/DirectVideo.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function DirectVideo(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var5 = arg1;
            var10 = var5.streamId;
            var _closure2_slot0 = var10;
            var11 = var5.paused;
            var4 = undefined;
            if(!(var11 === var4)) { _fun0005_ip = 37; continue _fun0005 }
case 40:
            var11 = false;
case 37:
            var _closure2_slot1 = var11;
            var13 = var5.onReady;
            var _closure2_slot2 = var13;
            var12 = var5.onResize;
            var _closure2_slot3 = var12;
            var8 = var5.className;
            var3 = {'streamId': 0, 'paused': 0, 'onReady': 0, 'onResize': 0, 'className': 0};
            var7 = null;
            var17 = var3;
            var16 = null;
            var1 = silentSetPrototypeOf(var17, var16);
            var17 = {};
            var16 = var5;
            var15 = var3;
            var1 = copyDataProperties(var17, var16, var15);
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var9 = _closure1_slot5;
            var3 = var9.useRef;
            var5 = var3.bind(var9)(var7);
            _closure2_slot4 = var5;
            var3 = var9.useRef;
            var3 = var3.bind(var9)(var7);
            _closure2_slot5 = var3;
            var7 = var9.useRef;
            var3 = {'width': 0, 'height': 0};
            var3 = var7.bind(var9)(var3);
            _closure2_slot6 = var3;
            var7 = var9.useRef;
            var3 = {};
            var3['streamId'] = var10;
            var3['paused'] = var11;
            var3['onReady'] = var13;
            var3['onResize'] = var12;
            var12 = arg2;
            var3['onContainerResized'] = var12;
            var3 = var7.bind(var9)(var3);
            _closure2_slot7 = var3;
            var12 = var9.useLayoutEffect;
            var7 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var2 = _closure2_slot4;
                    var5 = var2.current;
                    var3 = global;
                    var7 = var3.ResizeObserver;
                    var2 = var7.prototype;
                    var4 = Object.create(var2, {constructor: {value: var7}});
                    var16 = function(arg1) {
                        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                            var3 = _closure1_slot10;
                            var1 = undefined;
                            var2 = arg1;
                            var9 = var3.bind(var1)(var2);
                            var3 = var9.bind(var1)();
                            var2 = var3.done;
                            var7 = global;
                            var6 = null;
                            var5 = var3;
                            var4 = undefined;
                            var3 = undefined;
                            if(var2) { _fun0007_ip = 41; continue _fun0007 }
case 2:
                            var2 = var5.value;
                            var11 = var2.target;
                            var10 = _closure2_slot5;
                            var10 = var10.current;
                            if(!(var11 === var10)) { _fun0007_ip = 42; continue _fun0007 }
case 43:
                            var10 = var7.window;
                            var11 = var10.devicePixelRatio;
                            var10 = var2.target;
                            var10 = var10.clientWidth;
                            var10 = var11 * var10;
                            var11 = var7.window;
                            var11 = var11.devicePixelRatio;
                            var2 = var2.target;
                            var2 = var2.clientHeight;
                            var2 = var11 * var2;
                            var11 = _closure2_slot7;
                            var11 = var11.current;
                            var11 = var11.onContainerResized;
                            var4 = var10;
                            var3 = var2;
                            if(!(var6 != var11)) { _fun0007_ip = 42; continue _fun0007 }
case 44:
                            var11 = _closure2_slot7;
                            var13 = var11.current;
                            var12 = var13.onContainerResized;
                            var11 = _closure2_slot7;
                            var11 = var11.current;
                            var11 = var11.streamId;
                            var11 = var12.bind(var13)(var11, var10, var2);
                            var4 = var10;
                            var3 = var2;
case 42:
                            var10 = var9.bind(var1)();
                            var2 = var10.done;
                            var5 = var10;
                            if(!var2) { _fun0007_ip = 2; continue _fun0007 }
case 41:
                            return var1;
                        }
                    };
                    var17 = var4;
                    var2 = new var17[var7](var16, var15);
                    var4 = var2 instanceof Object ? var2 : var4;
                    var2 = null;
                    if(!(var2 != var5)) { _fun0006_ip = 45; continue _fun0006 }
case 46:
                    var8 = var3.document;
                    var7 = var8.createElement;
                    var2 = 'video';
                    var2 = var7.bind(var8)(var2);
                    var8 = var2.style;
                    var7 = 'block';
                    var8['display'] = var7;
                    var7 = var2.style;
                    var8 = '100%';
                    var7['width'] = var8;
                    var7 = var2.style;
                    var7['height'] = var8;
                    var7 = true;
                    var2['autoplay'] = var7;
                    var2['muted'] = var7;
                    var9 = var2.addEventListener;
                    var8 = 'pause';
                    var7 = function handlePause() {
                        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                            var1 = _closure2_slot7;
                            var1 = var1.current;
                            var2 = var1.paused;
                            var1 = undefined;
                            var3 = undefined;
                            if(var2) { _fun0008_ip = 47; continue _fun0008 }
case 48:
                            var4 = _closure2_slot5;
                            var4 = var4.current;
                            var5 = null;
                            var2 = var5 == var4;
                            var3 = var4;
case 47:
                            if(var2) { _fun0008_ip = 28; continue _fun0008 }
case 2:
                            var2 = var3.play;
                            var2 = var2.bind(var3)();
case 28:
                            return var1;
                        }
                    };
                    var7 = var9.bind(var2)(var8, var7);
                    var9 = var2.addEventListener;
                    var8 = 'resize';
                    var7 = function handleResize() {
                        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                            var1 = _closure2_slot6;
                            var1 = var1.current;
                            var7 = var1.width;
                            var3 = var1.height;
                            var1 = _closure2_slot5;
                            var4 = var1.current;
                            var5 = null;
                            var6 = var5 == var4;
                            var1 = undefined;
                            var8 = undefined;
                            if(var6) { _fun0009_ip = 49; continue _fun0009 }
case 50:
                            var8 = var4.videoWidth;
case 49:
                            var9 = var5 != var8;
                            var6 = 0;
                            if(!var9) { _fun0009_ip = 51; continue _fun0009 }
case 52:
                            var6 = var8;
case 51:
                            var8 = _closure2_slot5;
                            var9 = var8.current;
                            var10 = var5 == var9;
                            var8 = undefined;
                            if(var10) { _fun0009_ip = 9; continue _fun0009 }
case 53:
                            var8 = var9.videoHeight;
case 9:
                            var9 = var5 != var8;
                            var4 = 0;
                            if(!var9) { _fun0009_ip = 54; continue _fun0009 }
case 55:
                            var4 = var8;
case 54:
                            if(!(var7 === var6)) { _fun0009_ip = 56; continue _fun0009 }
case 57:
                            if(!(var3 !== var4)) { _fun0009_ip = 58; continue _fun0009 }
case 56:
                            var3 = {};
                            var3['width'] = var6;
                            var3['height'] = var4;
                            var4 = _closure2_slot7;
                            var4 = var4.current;
                            var4 = var4.onResize;
                            if(!(var5 != var4)) { _fun0009_ip = 59; continue _fun0009 }
case 60:
                            var4 = _closure2_slot7;
                            var5 = var4.current;
                            var4 = var5.onResize;
                            var4 = var4.bind(var5)(var3);
case 59:
                            var2 = _closure2_slot6;
                            var2['current'] = var3;
case 58:
                            return var1;
                        }
                    };
                    var7 = var9.bind(var2)(var8, var7);
                    var8 = var2.addEventListener;
                    var7 = 'canplaythrough';
                    var6 = function handleReady() {
                        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                            var5 = _closure1_slot7;
                            var4 = var5.info;
                            var2 = _closure2_slot7;
                            var2 = var2.current;
                            var9 = var2.streamId;
                            var2 = _closure2_slot7;
                            var2 = var2.current;
                            var2 = var2.onReady;
                            var3 = null;
                            var8 = var3 != var2;
                            var2 = global;
                            var2 = var2.HermesInternal;
                            var7 = var2.concat;
                            var6 = 'handleReady for ';
                            var2 = ', have onReady callback = ';
                            var2 = var7.bind(var6)(var9, var2, var8);
                            var2 = var4.bind(var5)(var2);
                            var2 = _closure2_slot7;
                            var2 = var2.current;
                            var2 = var2.onReady;
                            if(!(var3 != var2)) { _fun0010_ip = 61; continue _fun0010 }
case 62:
                            var1 = _closure2_slot7;
                            var2 = var1.current;
                            var1 = var2.onReady;
                            var1 = var1.bind(var2)();
case 61:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var6 = var8.bind(var2)(var7, var6);
                    var9 = _closure1_slot7;
                    var8 = var9.info;
                    var7 = _closure2_slot7;
                    var7 = var7.current;
                    var13 = var7.streamId;
                    var12 = var2.readyState;
                    var7 = var3.HermesInternal;
                    var11 = var7.concat;
                    var10 = 'create video element for ';
                    var7 = ', readyState=';
                    var7 = var11.bind(var10)(var13, var7, var12);
                    var7 = var8.bind(var9)(var7);
                    var8 = var2.readyState;
                    var7 = 3;
                    if(!(var8 > var7)) { _fun0006_ip = 6; continue _fun0006 }
case 63:
                    var7 = _closure1_slot7;
                    var6 = var7.error;
                    var8 = _closure2_slot7;
                    var8 = var8.current;
                    var10 = var8.streamId;
                    var3 = var3.HermesInternal;
                    var9 = var3.concat;
                    var8 = 'video element for ';
                    var3 = ' was ready before attached';
                    var3 = var9.bind(var8)(var10, var3);
                    var3 = var6.bind(var7)(var3);
case 6:
                    var3 = var5.appendChild;
                    var3 = var3.bind(var5)(var2);
                    var3 = var4.disconnect;
                    var3 = var3.bind(var4)();
                    var3 = var4.observe;
                    var3 = var3.bind(var4)(var2);
                    var1 = _closure2_slot5;
                    var1['current'] = var2;
case 45:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = new Array(0);
            var3 = var12.bind(var9)(var7, var3);
            var7 = var9.useEffect;
            var3 = function() {
                var2 = _closure2_slot7;
                var3 = var2.current;
                var2 = _closure2_slot0;
                var3['streamId'] = var2;
                var2 = _closure2_slot7;
                var3 = var2.current;
                var2 = _closure2_slot1;
                var3['paused'] = var2;
                var2 = _closure2_slot7;
                var3 = var2.current;
                var2 = _closure2_slot2;
                var3['onReady'] = var2;
                var2 = _closure2_slot7;
                var2 = var2.current;
                var1 = _closure2_slot3;
                var2['onResize'] = var1;
                var1 = undefined;
                return var1;
            };
            var3 = var7.bind(var9)(var3);
            var7 = var9.useEffect;
            var3 = new Array(2);
            var3[0] = var11;
            var3[1] = var10;
            var2 = function() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var2 = _closure2_slot5;
                    var3 = var2.current;
                    var _closure3_slot0 = var3;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0011_ip = 64; continue _fun0011 }
case 40:
                    var5 = _closure2_slot1;
                    if(var5) { _fun0011_ip = 65; continue _fun0011 }
case 66:
                    var8 = _closure1_slot7;
                    var6 = var8.info;
                    var9 = _closure2_slot0;
                    var5 = global;
                    var5 = var5.HermesInternal;
                    var10 = var5.concat;
                    var5 = 'attaching srcObject for ';
                    var5 = var10.bind(var5)(var9);
                    var5 = var6.bind(var8)(var5);
                    var6 = _closure1_slot9;
                    var5 = var6.get;
                    var5 = var5.bind(var6)(var9);
                    if(!(var2 != var5)) { _fun0011_ip = 67; continue _fun0011 }
case 38:
                    var6 = var5.addref;
                    var6 = var6.bind(var5)();
                    _fun0011_ip = 22; continue _fun0011;
case 67:
                    var6 = _closure1_slot8;
                    var8 = var6.prototype;
                    var8 = Object.create(var8, {constructor: {value: var6}});
                    var14 = var8;
                    var13 = var9;
                    var6 = new var14[var6](var13, var12);
                    var6 = var6 instanceof Object ? var6 : var8;
                    var11 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var8 = 5;
                    var10 = var10[var8];
                    var8 = undefined;
                    var10 = var11.bind(var8)(var10);
                    var8 = var10.getVoiceEngine;
                    var10 = var8.bind(var10)();
                    var8 = var10.addDirectVideoOutputSink;
                    var8 = var8.bind(var10)(var9);
                    var8 = _closure1_slot9;
                    var7 = var8.set;
                    var7 = var7.bind(var8)(var9, var6);
                    var5 = var6;
case 22:
                    var5 = var5.stream;
                    var3['srcObject'] = var5;
                    var4 = function() {
                        var3 = _closure1_slot12;
                        var2 = _closure2_slot0;
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        var3 = _closure3_slot0;
                        var2 = null;
                        var3['srcObject'] = var2;
                        return var1;
                    };
                    return var4;
case 65:
                    var4 = var3.srcObject;
                    if(!(var2 != var4)) { _fun0011_ip = 64; continue _fun0011 }
case 21:
                    var3['srcObject'] = var2;
                    var3 = _closure1_slot12;
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
case 64:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var7.bind(var9)(var2, var3);
            var3 = _closure1_slot6;
            var2 = {};
            var7 = _closure1_slot1;
            var9 = _closure1_slot2;
            var6 = 6;
            var6 = var9[var6];
            var7 = var7.bind(var4)(var6);
            var6 = 'media-engine-video';
            var6 = var7.bind(var4)(var6, var8);
            var2['className'] = var6;
            var2['ref'] = var5;
            var17 = var2;
            var16 = var1;
            var1 = copyDataProperties(var17, var16);
            var1 = 'div';
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();