// app/modules/gateway/GatewayCompressionHandler.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
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
            if(var2) { _fun0001_ip = 344; continue _fun0001 }
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
            var9 = _closure1_slot12;
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
            var7 = _closure1_slot12;
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
 344:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot11 = var1;
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
    var _closure1_slot12 = var1;
    var1 = function _callSuper(arg1, arg2, arg3) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var4 = arg1;
            var6 = arg3;
            var2 = _closure1_slot4;
            var3 = undefined;
            var1 = arg2;
            var9 = var2.bind(var3)(var1);
            var2 = _closure1_slot3;
            var1 = _closure1_slot14;
            var1 = var1.bind(var3)();
            if(var1) { _fun0004_ip = 51; continue _fun0004 }
 38:
            var1 = var9.apply;
            var1 = var1.bind(var9)(var4, var6);
            _fun0004_ip = 92; continue _fun0004;
 51:
            var7 = global;
            var8 = var7.Reflect;
            var7 = var8.construct;
            if(var6) { _fun0004_ip = 71; continue _fun0004 }
 67:
            var6 = new Array(0);
 71:
            var5 = _closure1_slot4;
            var5 = var5.bind(var3)(var4);
            var5 = var5.constructor;
            var1 = var7.bind(var8)(var9, var6, var5);
 92:
            var1 = var2.bind(var3)(var4, var1);
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var1 = function _isNativeReflectConstruct() {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
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
            _fun0005_ip = 76; continue _fun0005;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
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
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.NativeModules;
    var _closure1_slot8 = var4;
    var8 = new Array(0);
    var _closure1_slot9 = var8;
    var4 = function() {
        var5 = _closure1_slot7;
        var4 = function BaseGatewayCompressionHandler(arg1) {
            var3 = this;
            var4 = _closure1_slot6;
            var2 = _closure2_slot0;
            var1 = undefined;
            var2 = var4.bind(var1)(var3, var2);
            var2 = null;
            var3['_onDataReady'] = var2;
            var2 = arg1;
            var3['_gatewayEncoding'] = var2;
            return var1;
        };
        var _closure2_slot0 = var4;
        var1 = {};
        var3 = 'bindWebSocket';
        var1['key'] = var3;
        var3 = function value() {
            var1 = undefined;
            return var1;
        };
        var1['value'] = var3;
        var3 = new Array(3);
        var3[0] = var1;
        var1 = {};
        var6 = 'feed';
        var1['key'] = var6;
        var6 = function value() {
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var3[1] = var1;
        var1 = {};
        var6 = 'dataReady';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var2 = arg1;
            var1 = this;
            var1['_onDataReady'] = var2;
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var3[2] = var1;
        var1 = {};
        var6 = 'canUse';
        var1['key'] = var6;
        var2 = function value() {
            var1 = false;
            return var1;
        };
        var1['value'] = var2;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = undefined;
        var1 = var5.bind(var1)(var4, var3, var2);
        return var1;
    };
    var7 = var4.bind(var1)();
    var9 = var8.push;
    var4 = function(arg1) {
        var5 = function DesktopZstdGatewayCompressionHandler(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var6 = this;
                var1 = _closure1_slot6;
                var5 = _closure2_slot0;
                var4 = undefined;
                var1 = var1.bind(var4)(var6, var5);
                var3 = _closure1_slot13;
                var1 = new Array(1);
                var7 = arg1;
                var1[0] = var7;
                var1 = var3.bind(var4)(var6, var5, var1);
                var3 = null;
                var1['_decoder'] = var3;
                var6 = var1._gatewayEncoding;
                var5 = var6.wantsString;
                var5 = var5.bind(var6)();
                if(var5) { _fun0006_ip = 82; continue _fun0006 }
 74:
                var1['_decoder'] = var3;
                _fun0006_ip = 122; continue _fun0006;
 82:
                var3 = global;
                var6 = var3.TextDecoder;
                var3 = var6.prototype;
                var5 = Object.create(var3, {constructor: {value: var6}});
                var10 = 'utf-8';
                var11 = var5;
                var3 = new var11[var6](var10, var9);
                var3 = var3 instanceof Object ? var3 : var5;
                var1['_decoder'] = var3;
 122:
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 6;
                var2 = var5[var2];
                var3 = var3.bind(var4)(var2);
                var2 = var3.createZstdContextWeb;
                var2 = var2.bind(var3)();
                var1['_stream'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var5;
        var6 = _closure1_slot5;
        var4 = undefined;
        var3 = arg1;
        var3 = var6.bind(var4)(var5, var3);
        var3 = _closure1_slot7;
        var6 = {};
        var2 = 'getAlgorithm';
        var6['key'] = var2;
        var2 = function value() {
            var1 = 'zstd-stream';
            return var1;
        };
        var6['value'] = var2;
        var2 = new Array(4);
        var2[0] = var6;
        var6 = {};
        var7 = 'usesLegacyCompression';
        var6['key'] = var7;
        var7 = function value() {
            var1 = false;
            return var1;
        };
        var6['value'] = var7;
        var2[1] = var6;
        var6 = {};
        var7 = 'feed';
        var6['key'] = var7;
        var7 = function value(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var5 = arg1;
                var3 = this;
                var1 = var3._stream;
                var4 = null;
                if(!(var4 != var1)) { _fun0007_ip = 151; continue _fun0007 }
 21:
                var1 = global;
                var2 = var1.ArrayBuffer;
                var2 = var5 instanceof var2;
                if(var2) { _fun0007_ip = 77; continue _fun0007 }
 36:
                var6 = var1.Error;
                var1 = var6.prototype;
                var2 = Object.create(var1, {constructor: {value: var6}});
                var7 = 'Expected array buffer, but got ';
                var1 = typeof var5;
                var8 = var7 + var1;
                var9 = var2;
                var1 = new var9[var6](var8, var7);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
 77:
                var2 = var3._stream;
                var1 = var2.decompress;
                var6 = var1.bind(var2)(var5);
                var1 = var3._decoder;
                var2 = var6;
                if(!(var4 != var1)) { _fun0007_ip = 126; continue _fun0007 }
 109:
                var5 = var3._decoder;
                var1 = var5.decode;
                var2 = var1.bind(var5)(var6);
 126:
                var1 = var3._onDataReady;
                if(!(var4 != var1)) { _fun0007_ip = 147; continue _fun0007 }
 136:
                var1 = var3._onDataReady;
                var1 = var1.bind(var3)(var2);
 147:
                var1 = undefined;
                return var1;
 151:
                var1 = global;
                var3 = var1.Error;
                var1 = var3.prototype;
                var2 = Object.create(var1, {constructor: {value: var3}});
                var8 = 'Trying to decompress with zstd but did not initialize with it';
                var9 = var2;
                var1 = new var9[var3](var8, var7);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            }
        };
        var6['value'] = var7;
        var2[2] = var6;
        var6 = {};
        var7 = 'close';
        var6['key'] = var7;
        var7 = function value() {
            var1 = undefined;
            return var1;
        };
        var6['value'] = var7;
        var2[3] = var6;
        var6 = {};
        var7 = 'canUse';
        var6['key'] = var7;
        var1 = function value() {
            var1 = false;
            return var1;
        };
        var6['value'] = var1;
        var1 = new Array(1);
        var1[0] = var6;
        var1 = var3.bind(var4)(var5, var2, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var7);
    var4 = var9.bind(var8)(var4);
    var9 = var8.push;
    var4 = function(arg1) {
        var5 = function PakoStreamGatewayCompressionHandler(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                var6 = this;
                var1 = _closure1_slot6;
                var5 = _closure2_slot0;
                var4 = undefined;
                var1 = var1.bind(var4)(var6, var5);
                var3 = _closure1_slot13;
                var1 = new Array(1);
                var7 = arg1;
                var1[0] = var7;
                var1 = var3.bind(var4)(var6, var5, var1);
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 7;
                var2 = var5[var2];
                var2 = var3.bind(var4)(var2);
                var1['_pako'] = var2;
                var2 = false;
                var1['_usesZstd'] = var2;
                var2 = null;
                var1['_zstdDecoder'] = var2;
                var1['_zstdStream'] = var2;
                var2 = var1._pako;
                var4 = var2.Inflate;
                var2 = {};
                var3 = 65536;
                var2['chunkSize'] = var3;
                var5 = var1._gatewayEncoding;
                var3 = var5.wantsString;
                var5 = var3.bind(var5)();
                var3 = '';
                if(!var5) { _fun0008_ip = 153; continue _fun0008 }
 149:
                var3 = 'string';
 153:
                var2['to'] = var3;
                var3 = var4.prototype;
                var3 = Object.create(var3, {constructor: {value: var4}});
                var11 = var3;
                var10 = var2;
                var2 = new var11[var4](var10, var9);
                var2 = var2 instanceof Object ? var2 : var3;
                var1['_inflate'] = var2;
                var3 = var1._inflate;
                var4 = var1.handleFlushEnd;
                var2 = var4.bind;
                var2 = var2.bind(var4)(var1);
                var3['onEnd'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var5;
        var6 = _closure1_slot5;
        var4 = undefined;
        var3 = arg1;
        var3 = var6.bind(var4)(var5, var3);
        var3 = _closure1_slot7;
        var6 = {};
        var2 = 'getAlgorithm';
        var6['key'] = var2;
        var2 = function value() {
            var1 = 'zlib-stream';
            return var1;
        };
        var6['value'] = var2;
        var2 = new Array(5);
        var2[0] = var6;
        var6 = {};
        var7 = 'usesLegacyCompression';
        var6['key'] = var7;
        var7 = function value() {
            var1 = false;
            return var1;
        };
        var6['value'] = var7;
        var2[1] = var6;
        var6 = {};
        var7 = 'feed';
        var6['key'] = var7;
        var7 = function value(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                var4 = arg1;
                var5 = this;
                var1 = var5._inflate;
                var2 = null;
                if(!(var2 != var1)) { _fun0009_ip = 247; continue _fun0009 }
 21:
                var1 = var5._onDataReady;
                if(!(var2 !== var1)) { _fun0009_ip = 211; continue _fun0009 }
 34:
                var1 = global;
                var2 = var1.ArrayBuffer;
                var2 = var4 instanceof var2;
                if(var2) { _fun0009_ip = 90; continue _fun0009 }
 49:
                var6 = var1.Error;
                var2 = var6.prototype;
                var3 = Object.create(var2, {constructor: {value: var6}});
                var7 = 'Expected array buffer, but got ';
                var2 = typeof var4;
                var9 = var7 + var2;
                var10 = var3;
                var2 = new var10[var6](var9, var8);
                var2 = var2 instanceof Object ? var2 : var3;
                throw var2;
 90:
                var1 = var1.DataView;
                var2 = var1.prototype;
                var2 = Object.create(var2, {constructor: {value: var1}});
                var10 = var2;
                var9 = var4;
                var1 = new var10[var1](var9, var8);
                var7 = var1 instanceof Object ? var1 : var2;
                var1 = var7.byteLength;
                var2 = 4;
                var6 = var1 >= var2;
                if(!var6) { _fun0009_ip = 169; continue _fun0009 }
 135:
                var3 = var7.getUint32;
                var1 = var7.byteLength;
                var2 = var1 - var2;
                var1 = false;
                var2 = var3.bind(var7)(var2, var1);
                var1 = 65535;
                var6 = var1 === var2;
 169:
                var3 = var5._inflate;
                var2 = var3.push;
                var1 = !var6;
                var1 = !var1;
                if(!var6) { _fun0009_ip = 201; continue _fun0009 }
 189:
                var5 = var5._pako;
                var1 = var5.Z_SYNC_FLUSH;
 201:
                var1 = var2.bind(var3)(var4, var1);
                var1 = undefined;
                return var1;
 211:
                var1 = global;
                var3 = var1.Error;
                var1 = var3.prototype;
                var2 = Object.create(var1, {constructor: {value: var3}});
                var9 = 'Cannot feed unless a data ready callback is registered.';
                var10 = var2;
                var1 = new var10[var3](var9, var8);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
 247:
                var1 = global;
                var3 = var1.Error;
                var1 = var3.prototype;
                var2 = Object.create(var1, {constructor: {value: var3}});
                var9 = 'Trying to feed to closed compression adapter';
                var10 = var2;
                var1 = new var10[var3](var9, var8);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            }
        };
        var6['value'] = var7;
        var2[2] = var6;
        var6 = {};
        var7 = 'close';
        var6['key'] = var7;
        var7 = function value() {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                var2 = this;
                var3 = var2._inflate;
                var1 = null;
                if(!(var1 != var3)) { _fun0010_ip = 43; continue _fun0010 }
 15:
                var3 = var2._inflate;
                var3['onEnd'] = var1;
                var4 = var2._inflate;
                var3 = new Array(0);
                var4['chunks'] = var3;
 43:
                var2['_inflate'] = var1;
                var1 = undefined;
                return var1;
            }
        };
        var6['value'] = var7;
        var2[3] = var6;
        var6 = {};
        var7 = 'handleFlushEnd';
        var6['key'] = var7;
        var7 = function value(arg1) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                var6 = arg1;
                var4 = this;
                var1 = var4._pako;
                var2 = var4._inflate;
                var5 = null;
                if(!(var5 == var2)) { _fun0011_ip = 96; continue _fun0011 }
 24:
                var8 = _closure1_slot1;
                var7 = _closure1_slot2;
                var3 = 8;
                var7 = var7[var3];
                var3 = undefined;
                var8 = var8.bind(var3)(var7);
                var3 = var8.prototype;
                var7 = Object.create(var3, {constructor: {value: var8}});
                var16 = 'GatewayCompressionHandler';
                var17 = var7;
                var3 = new var17[var8](var16, var15);
                var8 = var3 instanceof Object ? var3 : var7;
                var7 = var8.error;
                var3 = 'flush end happened on closed compression adapter';
                var3 = var7.bind(var8)(var3);
                _fun0011_ip = 337; continue _fun0011;
 96:
                var1 = var1.Z_OK;
                if(!(var6 === var1)) { _fun0011_ip = 341; continue _fun0011 }
 109:
                var7 = var2.chunks;
                var8 = var7.length;
                var3 = var4._gatewayEncoding;
                var1 = var3.wantsString;
                var3 = var1.bind(var3)();
                var1 = 1;
                if(var3) { _fun0011_ip = 279; continue _fun0011 }
 145:
                if(!(!(var8 > var1))) { _fun0011_ip = 160; continue _fun0011 }
 149:
                var3 = 0;
                var3 = var7[var3];
                _fun0011_ip = 308; continue _fun0011;
 160:
                var9 = 0;
                var13 = var9 < var8;
                var11 = 0;
                var10 = 0;
                var12 = 0;
                if(!var13) { _fun0011_ip = 198; continue _fun0011 }
 175:
                var13 = var7[var10];
                var13 = var13.length;
                var11 = var11 + var13;
                var10 = var10 + 1;
                var12 = var11;
                if(var10 < var8) { _fun0011_ip = 175; continue _fun0011 }
 198:
                var10 = global;
                var10 = var10.Uint8Array;
                var11 = var10.prototype;
                var11 = Object.create(var11, {constructor: {value: var10}});
                var17 = var11;
                var16 = var12;
                var10 = new var17[var10](var16, var15);
                var11 = var10 instanceof Object ? var10 : var11;
                var12 = var9 < var8;
                var10 = 0;
                var9 = 0;
                var3 = var11;
                if(!var12) { _fun0011_ip = 308; continue _fun0011 }
 243:
                var12 = var7[var9];
                var13 = var11.set;
                var13 = var13.bind(var11)(var12, var10);
                var12 = var12.length;
                var10 = var10 + var12;
                var9 = var9 + 1;
                var3 = var11;
                if(var9 < var8) { _fun0011_ip = 243; continue _fun0011 }
 277:
                _fun0011_ip = 308; continue _fun0011;
 279:
                if(!(!(var8 > var1))) { _fun0011_ip = 291; continue _fun0011 }
 283:
                var1 = 0;
                var1 = var7[var1];
                _fun0011_ip = 305; continue _fun0011;
 291:
                var9 = var7.join;
                var8 = '';
                var1 = var9.bind(var7)(var8);
 305:
                var3 = var1;
 308:
                var1 = 0;
                var7['length'] = var1;
                var1 = var4._onDataReady;
                if(!(var5 != var1)) { _fun0011_ip = 337; continue _fun0011 }
 326:
                var1 = var4._onDataReady;
                var1 = var1.bind(var4)(var3);
 337:
                var1 = undefined;
                return var1;
 341:
                var1 = global;
                var3 = var1.Error;
                var2 = var2.strm;
                var5 = var2.msg;
                var1 = var1.HermesInternal;
                var4 = var1.concat;
                var2 = 'zlib error, ';
                var1 = ', ';
                var16 = var4.bind(var2)(var6, var1, var5);
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var17 = var2;
                var1 = new var17[var3](var16, var15);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            }
        };
        var6['value'] = var7;
        var2[4] = var6;
        var6 = {};
        var7 = 'canUse';
        var6['key'] = var7;
        var1 = function value() {
            var1 = false;
            return var1;
        };
        var6['value'] = var1;
        var1 = new Array(1);
        var1[0] = var6;
        var1 = var3.bind(var4)(var5, var2, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var7);
    var4 = var9.bind(var8)(var4);
    var9 = var8.push;
    var4 = function(arg1) {
        var5 = function PakoGatewayCompressionHandler(arg1) {
            var6 = this;
            var11 = 0;
            var7 = copyRestArgs(var11);
            var1 = _closure1_slot6;
            var5 = _closure2_slot0;
            var4 = undefined;
            var1 = var1.bind(var4)(var6, var5);
            var3 = _closure1_slot13;
            var1 = new Array(0);
            var11 = var1;
            var10 = var7;
            var9 = 0;
            var7 = arraySpread(var11, var10, var9);
            var1 = var3.bind(var4)(var6, var5, var1);
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 7;
            var2 = var5[var2];
            var2 = var3.bind(var4)(var2);
            var1['_pako'] = var2;
            return var1;
        };
        var _closure2_slot0 = var5;
        var6 = _closure1_slot5;
        var4 = undefined;
        var3 = arg1;
        var3 = var6.bind(var4)(var5, var3);
        var3 = _closure1_slot7;
        var6 = {};
        var2 = 'getAlgorithm';
        var6['key'] = var2;
        var2 = function value() {
            var1 = null;
            return var1;
        };
        var6['value'] = var2;
        var2 = new Array(4);
        var2[0] = var6;
        var6 = {};
        var7 = 'usesLegacyCompression';
        var6['key'] = var7;
        var7 = function value() {
            var1 = true;
            return var1;
        };
        var6['value'] = var7;
        var2[1] = var6;
        var6 = {};
        var7 = 'feed';
        var6['key'] = var7;
        var7 = function value(arg1) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                var7 = arg1;
                var4 = this;
                var6 = var4._pako;
                var1 = global;
                var2 = var1.ArrayBuffer;
                var2 = var7 instanceof var2;
                if(!var2) { _fun0012_ip = 43; continue _fun0012 }
 27:
                var5 = var4._gatewayEncoding;
                var3 = var5.wantsString;
                var2 = var3.bind(var5)();
 43:
                var3 = var7;
                if(!var2) { _fun0012_ip = 71; continue _fun0012 }
 49:
                var5 = var6.inflate;
                var2 = {};
                var8 = 'string';
                var2['to'] = var8;
                var3 = var5.bind(var6)(var7, var2);
 71:
                var5 = var4._onDataReady;
                var2 = null;
                if(!(var2 != var5)) { _fun0012_ip = 98; continue _fun0012 }
 83:
                var2 = var4._onDataReady;
                var2 = var2.bind(var4)(var3);
                var2 = undefined;
                return var2;
 98:
                var3 = var1.Error;
                var1 = var3.prototype;
                var2 = Object.create(var1, {constructor: {value: var3}});
                var10 = 'Cannot feed unless a data ready callback is registered.';
                var11 = var2;
                var1 = new var11[var3](var10, var9);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            }
        };
        var6['value'] = var7;
        var2[2] = var6;
        var6 = {};
        var7 = 'close';
        var6['key'] = var7;
        var7 = function value() {
            var1 = undefined;
            return var1;
        };
        var6['value'] = var7;
        var2[3] = var6;
        var6 = {};
        var7 = 'canUse';
        var6['key'] = var7;
        var1 = function value() {
            var1 = false;
            return var1;
        };
        var6['value'] = var1;
        var1 = new Array(1);
        var1[0] = var6;
        var1 = var3.bind(var4)(var5, var2, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var7);
    var4 = var9.bind(var8)(var4);
    var9 = var8.push;
    var4 = function(arg1) {
        var5 = function MobileGatewayCompressionHandler(arg1) {
            var5 = this;
            var2 = _closure1_slot6;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot13;
            var1 = new Array(1);
            var6 = arg1;
            var1[0] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            var2 = null;
            var1['_socketId'] = var2;
            return var1;
        };
        var _closure2_slot0 = var5;
        var6 = _closure1_slot5;
        var4 = undefined;
        var3 = arg1;
        var3 = var6.bind(var4)(var5, var3);
        var3 = _closure1_slot7;
        var6 = {};
        var2 = 'bindWebSocket';
        var6['key'] = var2;
        var2 = function value(arg1) {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                var2 = this;
                var1 = var2.close;
                var1 = var1.bind(var2)();
                var1 = arg1;
                var1 = var1._socketId;
                var2['_socketId'] = var1;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 6;
                var4 = var4[var1];
                var1 = undefined;
                var5 = var5.bind(var1)(var4);
                var4 = var5.supportsZstd;
                var5 = var4.bind(var5)();
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var4 = 9;
                var4 = var7[var4];
                var6 = var6.bind(var1)(var4);
                var4 = var6.isAndroid;
                var4 = var4.bind(var6)();
                if(var5) { _fun0013_ip = 205; continue _fun0013 }
 95:
                if(var4) { _fun0013_ip = 130; continue _fun0013 }
 98:
                var5 = _closure1_slot8;
                var7 = var5.DCDCompressionManager;
                var6 = var7.enableZlibStreamSupport;
                var5 = var2._socketId;
                var5 = var6.bind(var7)(var5);
                _fun0013_ip = 310; continue _fun0013;
 130:
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var7 = 10;
                var5 = var5[var7];
                var5 = var6.bind(var1)(var5);
                var6 = var5.default;
                var5 = null;
                if(!(var5 != var6)) { _fun0013_ip = 310; continue _fun0013 }
 164:
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var7];
                var5 = var6.bind(var1)(var5);
                var7 = var5.default;
                var6 = var7.enableZlibStreamSupport;
                var5 = var2._socketId;
                var5 = var6.bind(var7)(var5);
                _fun0013_ip = 310; continue _fun0013;
 205:
                if(var4) { _fun0013_ip = 240; continue _fun0013 }
 208:
                var4 = _closure1_slot8;
                var7 = var4.DCDCompressionManager;
                var6 = var7.enableZstdStreamSupport;
                var5 = var2._socketId;
                var4 = 0;
                var4 = var6.bind(var7)(var5, var4);
                _fun0013_ip = 310; continue _fun0013;
 240:
                var6 = _closure1_slot0;
                var4 = _closure1_slot2;
                var5 = 10;
                var4 = var4[var5];
                var4 = var6.bind(var1)(var4);
                var6 = var4.default;
                var4 = null;
                if(!(var4 != var6)) { _fun0013_ip = 310; continue _fun0013 }
 271:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var5];
                var3 = var4.bind(var1)(var3);
                var4 = var3.default;
                var3 = var4.enableZstdStreamSupport;
                var2 = var2._socketId;
                var2 = var3.bind(var4)(var2);
 310:
                return var1;
            }
        };
        var6['value'] = var2;
        var2 = new Array(5);
        var2[0] = var6;
        var6 = {};
        var7 = 'getAlgorithm';
        var6['key'] = var7;
        var7 = function value() {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 6;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.supportsZstd;
                var2 = var1.bind(var2)();
                var1 = 'zlib-stream';
                if(!var2) { _fun0014_ip = 50; continue _fun0014 }
 44:
                var1 = 'zstd-stream';
 50:
                return var1;
            }
        };
        var6['value'] = var7;
        var2[1] = var6;
        var6 = {};
        var7 = 'usesLegacyCompression';
        var6['key'] = var7;
        var7 = function value() {
            var1 = false;
            return var1;
        };
        var6['value'] = var7;
        var2[2] = var6;
        var6 = {};
        var7 = 'feed';
        var6['key'] = var7;
        var7 = function value(arg1) {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                var3 = arg1;
                var2 = this;
                var4 = var2._onDataReady;
                var1 = null;
                if(!(var1 != var4)) { _fun0015_ip = 37; continue _fun0015 }
 18:
                if(!(var1 !== var3)) { _fun0015_ip = 33; continue _fun0015 }
 22:
                var1 = var2._onDataReady;
                var1 = var1.bind(var2)(var3);
 33:
                var1 = undefined;
                return var1;
 37:
                var1 = global;
                var3 = var1.Error;
                var1 = var3.prototype;
                var2 = Object.create(var1, {constructor: {value: var3}});
                var5 = 'Cannot feed unless a data ready callback is registered.';
                var6 = var2;
                var1 = new var6[var3](var5, var4);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            }
        };
        var6['value'] = var7;
        var2[3] = var6;
        var6 = {};
        var7 = 'close';
        var6['key'] = var7;
        var7 = function value() {
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                var1 = this;
                var3 = var1._socketId;
                var6 = null;
                var1['_socketId'] = var6;
                if(!(var6 !== var3)) { _fun0016_ip = 146; continue _fun0016 }
 24:
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 9;
                var2 = var4[var2];
                var4 = undefined;
                var5 = var5.bind(var4)(var2);
                var2 = var5.isAndroid;
                var2 = var2.bind(var5)();
                if(var2) { _fun0016_ip = 84; continue _fun0016 }
 61:
                var2 = _closure1_slot8;
                var5 = var2.DCDCompressionManager;
                var2 = var5.disableZlibStreamSupport;
                var2 = var2.bind(var5)(var3);
                _fun0016_ip = 146; continue _fun0016;
 84:
                var7 = _closure1_slot0;
                var2 = _closure1_slot2;
                var5 = 10;
                var2 = var2[var5];
                var2 = var7.bind(var4)(var2);
                var2 = var2.default;
                if(!(var6 != var2)) { _fun0016_ip = 146; continue _fun0016 }
 113:
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var5];
                var1 = var2.bind(var4)(var1);
                var2 = var1.default;
                var1 = var2.disableZlibStreamSupport;
                var1 = var1.bind(var2)(var3);
 146:
                var1 = undefined;
                return var1;
            }
        };
        var6['value'] = var7;
        var2[4] = var6;
        var6 = {};
        var7 = 'canUse';
        var6['key'] = var7;
        var1 = function value() {
            _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 9;
                var1 = var4[var1];
                var4 = undefined;
                var3 = var3.bind(var4)(var1);
                var1 = var3.isAndroid;
                var1 = var1.bind(var3)();
                if(var1) { _fun0017_ip = 55; continue _fun0017 }
 37:
                var1 = _closure1_slot8;
                var3 = var1.DCDCompressionManager;
                var1 = null;
                var1 = var1 != var3;
                _fun0017_ip = 86; continue _fun0017;
 55:
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 10;
                var2 = var5[var2];
                var2 = var3.bind(var4)(var2);
                var3 = var2.default;
                var2 = null;
                var1 = var2 != var3;
 86:
                return var1;
            }
        };
        var6['value'] = var1;
        var1 = new Array(1);
        var1[0] = var6;
        var1 = var3.bind(var4)(var5, var2, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var7);
    var4 = var9.bind(var8)(var4);
    var4 = function(arg1) {
        var5 = function NullGatewayCompressionHandler() {
            var5 = this;
            var4 = undefined;
            var1 = undefined;
            var6 = _closure1_slot6;
            var3 = _closure2_slot0;
            var6 = var6.bind(var4)(var5, var3);
            var2 = _closure1_slot13;
            var1 = arguments;
            var1 = var2.bind(var4)(var5, var3, var1);
            return var1;
        };
        var _closure2_slot0 = var5;
        var6 = _closure1_slot5;
        var4 = undefined;
        var3 = arg1;
        var3 = var6.bind(var4)(var5, var3);
        var3 = _closure1_slot7;
        var6 = {};
        var2 = 'getAlgorithm';
        var6['key'] = var2;
        var2 = function value() {
            var1 = null;
            return var1;
        };
        var6['value'] = var2;
        var2 = new Array(4);
        var2[0] = var6;
        var6 = {};
        var7 = 'usesLegacyCompression';
        var6['key'] = var7;
        var7 = function value() {
            var1 = false;
            return var1;
        };
        var6['value'] = var7;
        var2[1] = var6;
        var6 = {};
        var7 = 'feed';
        var6['key'] = var7;
        var7 = function value(arg1) {
            _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
                var3 = this;
                var2 = var3._onDataReady;
                var1 = null;
                if(!(var1 != var2)) { _fun0018_ip = 33; continue _fun0018 }
 15:
                var2 = var3._onDataReady;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
 33:
                var1 = global;
                var3 = var1.Error;
                var1 = var3.prototype;
                var2 = Object.create(var1, {constructor: {value: var3}});
                var4 = 'Cannot feed unless a data ready callback is registered.';
                var5 = var2;
                var1 = new var5[var3](var4, var3);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            }
        };
        var6['value'] = var7;
        var2[2] = var6;
        var6 = {};
        var7 = 'close';
        var6['key'] = var7;
        var7 = function value() {
            var1 = undefined;
            return var1;
        };
        var6['value'] = var7;
        var2[3] = var6;
        var6 = {};
        var7 = 'canUse';
        var6['key'] = var7;
        var1 = function value() {
            var1 = true;
            return var1;
        };
        var6['value'] = var1;
        var1 = new Array(1);
        var1[0] = var6;
        var1 = var3.bind(var4)(var5, var2, var1);
        return var1;
    };
    var7 = var4.bind(var1)(var7);
    var _closure1_slot10 = var7;
    var4 = var8.push;
    var4 = var4.bind(var8)(var7);
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/gateway/GatewayCompressionHandler.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getCompressionHandler(arg1) {
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
            var3 = arg1;
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 11;
            var2 = var5[var2];
            var7 = undefined;
            var2 = var4.bind(var7)(var2);
            var4 = var2.ProcessArgs;
            var2 = var4.isDiscordGatewayPlaintextSet;
            var2 = var2.bind(var4)();
            if(var2) { _fun0019_ip = 166; continue _fun0019 }
 47:
            var4 = _closure1_slot11;
            var2 = _closure1_slot9;
            var6 = var4.bind(var7)(var2);
            var4 = var6.bind(var7)();
            var2 = var4.done;
            var5 = var4;
            if(var2) { _fun0019_ip = 137; continue _fun0019 }
 75:
            var2 = var5.value;
            var4 = var2.canUse;
            var4 = var4.bind(var2)();
            if(var4) { _fun0019_ip = 112; continue _fun0019 }
 95:
            var8 = var6.bind(var7)();
            var4 = var8.done;
            var5 = var8;
            if(var4) { _fun0019_ip = 137; continue _fun0019 }
 110:
            _fun0019_ip = 75; continue _fun0019;
 112:
            var4 = var2.prototype;
            var4 = Object.create(var4, {constructor: {value: var2}});
            var10 = var4;
            var9 = var3;
            var2 = new var10[var2](var9, var8);
            var2 = var2 instanceof Object ? var2 : var4;
            return var2;
 137:
            var2 = _closure1_slot10;
            var4 = var2.prototype;
            var4 = Object.create(var4, {constructor: {value: var2}});
            var10 = var4;
            var9 = var3;
            var2 = new var10[var2](var9, var8);
            var2 = var2 instanceof Object ? var2 : var4;
            return var2;
 166:
            var1 = _closure1_slot10;
            var2 = var1.prototype;
            var2 = Object.create(var2, {constructor: {value: var1}});
            var10 = var2;
            var9 = var3;
            var1 = new var10[var1](var9, var8);
            var1 = var1 instanceof Object ? var1 : var2;
            return var1;
        }
    };
    var3['getCompressionHandler'] = var2;
    return var1;
})();