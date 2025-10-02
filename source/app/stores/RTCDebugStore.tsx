// app/stores/RTCDebugStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var9 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var10 = dependencyMap;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var8;
    var1 = metroImportAll;
    var _closure1_slot2 = var1;
    var _closure1_slot3 = var10;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
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
            _fun0001_ip = 4; continue _fun0001;
case 5: // catch_target0
            CatchBlockStart(arg_register=1);
case 4:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot23 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot23 = var1;
    var1 = function makeStreamKey(arg1, arg2, arg3) {
        var1 = global;
        var1 = var1.HermesInternal;
        var6 = var1.concat;
        var12 = '';
        var11 = arg1;
        var3 = ':';
        var9 = arg2;
        var7 = arg3;
        var10 = var3;
        var8 = var3;
        var1 = var12[var6](var11, var10, var9, var8, var7, var6);
        return var1;
    };
    var _closure1_slot24 = var1;
    var1 = function makeSimulcastKey(arg1, arg2) {
        var1 = global;
        var1 = var1.HermesInternal;
        var5 = var1.concat;
        var4 = '';
        var3 = arg1;
        var2 = ':';
        var1 = arg2;
        var1 = var5.bind(var4)(var3, var2, var1);
        return var1;
    };
    var _closure1_slot25 = var1;
    var4 = function keySection(arg1, arg2, arg3) {
        var1 = global;
        var1 = var1.HermesInternal;
        var6 = var1.concat;
        var12 = '';
        var11 = arg1;
        var3 = ':';
        var9 = arg2;
        var7 = arg3;
        var10 = var3;
        var8 = var3;
        var1 = var12[var6](var11, var10, var9, var8, var7, var6);
        return var1;
    };
    var7 = function setDefaultStats() {
        var1 = global;
        var3 = var1.Object;
        var2 = var3.values;
        var1 = _closure1_slot12;
        var3 = var2.bind(var3)(var1);
        var2 = var3.forEach;
        var1 = function(arg1) {
            var3 = _closure1_slot17;
            var2 = {};
            var1 = arg1;
            var3[var1] = var2;
            var1 = undefined;
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var _closure1_slot26 = var7;
    var1 = function destroyReplayConnection() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = _closure1_slot22;
            var1 = null;
            if(!(var1 != var3)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var4 = _closure1_slot22;
            var3 = var4.destroy;
            var3 = var3.bind(var4)();
            _closure1_slot22 = var1;
case 6:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot27 = var1;
    var1 = function updateStats(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var21 = arguments[1];
            var20 = arguments[2];
            var19 = undefined;
            if(!(var21 === var19)) { _fun0003_ip = 8; continue _fun0003 }
case 9:
            var21 = {};
case 8:
            if(!(var20 === var19)) { _fun0003_ip = 10; continue _fun0003 }
case 11:
            var1 = global;
            var2 = var1.Date;
            var1 = var2.now;
            var20 = var1.bind(var2)();
case 10:
            var1 = {};
            var18 = global;
            var4 = var18.Object;
            var3 = var4.entries;
            var2 = arg1;
            var17 = var3.bind(var4)(var2);
            var2 = var17.length;
            var16 = 0;
            var2 = var16 < var2;
            var14 = 'object';
            var13 = null;
            var12 = 600;
            var11 = 'number';
            var10 = 2;
            var9 = 1;
            var8 = 0;
            var7 = undefined;
            var6 = undefined;
            var5 = undefined;
            var4 = undefined;
            var3 = undefined;
            if(!var2) { _fun0003_ip = 12; continue _fun0003 }
case 13:
            var22 = var17[var8];
            var2 = _closure1_slot7;
            var22 = var2.bind(var19)(var22, var10);
            var2 = var22[var16];
            var30 = var22[var9];
            var28 = var21[var2];
            var23 = var18.Array;
            var22 = var23.isArray;
            var22 = var22.bind(var23)(var30);
            if(var22) { _fun0003_ip = 14; continue _fun0003 }
case 15:
            var22 = typeof var30;
            if(!(var14 === var22)) { _fun0003_ip = 16; continue _fun0003 }
case 17:
            if(!(var13 === var30)) { _fun0003_ip = 18; continue _fun0003 }
case 16:
            var23 = _closure1_slot19;
            var23 = var2 in var23;
            if(!var23) { _fun0003_ip = 19; continue _fun0003 }
case 20:
            if(!(var11 !== var22)) { _fun0003_ip = 21; continue _fun0003 }
case 19:
            var1[var2] = var30;
            var26 = var7;
            var25 = var6;
            var24 = var5;
            var23 = var4;
            var22 = var3;
            _fun0003_ip = 22; continue _fun0003;
case 21:
            var29 = var18.Array;
            var27 = var29.isArray;
            var29 = var27.bind(var29)(var28);
            var27 = var28;
            if(var29) { _fun0003_ip = 23; continue _fun0003 }
case 24:
            var27 = new Array(0);
case 23:
            var1[var2] = var27;
            var31 = var27.push;
            var29 = {};
            var29['value'] = var30;
            var29['time'] = var20;
            var29 = var31.bind(var27)(var29);
            var29 = var27.length;
            var26 = var7;
            var25 = var6;
            var24 = var5;
            var23 = var4;
            var22 = var27;
            if(!(var29 > var12)) { _fun0003_ip = 22; continue _fun0003 }
case 25:
            var29 = var27.shift;
            var29 = var29.bind(var27)();
            var26 = var7;
            var25 = var6;
            var24 = var5;
            var23 = var4;
            var22 = var27;
            _fun0003_ip = 22; continue _fun0003;
case 18:
            var27 = typeof var28;
            if(!(var14 === var27)) { _fun0003_ip = 26; continue _fun0003 }
case 27:
            var29 = var28;
            if(!(var13 === var28)) { _fun0003_ip = 28; continue _fun0003 }
case 26:
            var29 = {};
case 28:
            var27 = _closure1_slot28;
            var27 = var27.bind(var19)(var30, var29, var20);
            var1[var2] = var27;
            var26 = var7;
            var25 = var6;
            var24 = var5;
            var23 = var4;
            var22 = var3;
            _fun0003_ip = 22; continue _fun0003;
case 14:
            var27 = var30[var16];
            var27 = typeof var27;
            if(!(var14 !== var27)) { _fun0003_ip = 29; continue _fun0003 }
case 30:
            var1[var2] = var30;
            var26 = var7;
            var25 = var6;
            var24 = var5;
            var23 = var4;
            var22 = var3;
            _fun0003_ip = 22; continue _fun0003;
case 29:
            var29 = var18.Array;
            var27 = var29.isArray;
            var27 = var27.bind(var29)(var28);
            var29 = var28;
            if(var27) { _fun0003_ip = 31; continue _fun0003 }
case 32:
            var29 = new Array(0);
case 31:
            var28 = new Array(0);
            var1[var2] = var28;
            var2 = var30.length;
            var2 = var16 < var2;
            var27 = 0;
            var26 = var29;
            var25 = var28;
            var24 = 0;
            var23 = var4;
            var22 = var3;
            if(!var2) { _fun0003_ip = 22; continue _fun0003 }
case 33:
            var32 = var29[var27];
            var2 = typeof var32;
            var34 = var32;
            if(!(var14 !== var2)) { _fun0003_ip = 34; continue _fun0003 }
case 35:
            var34 = {};
case 34:
            var31 = var28.push;
            var33 = _closure1_slot28;
            var2 = var30[var27];
            var2 = var33.bind(var19)(var2, var34, var20);
            var2 = var31.bind(var28)(var2);
            var27 = var27 + 1;
            var2 = var30.length;
            var26 = var29;
            var25 = var28;
            var23 = var32;
            var22 = var3;
            var24 = var27;
            if(var24 < var2) { _fun0003_ip = 33; continue _fun0003 }
case 22:
            var8 = var8 + 1;
            var2 = var17.length;
            var7 = var26;
            var6 = var25;
            var5 = var24;
            var4 = var23;
            var3 = var22;
            if(var8 < var2) { _fun0003_ip = 13; continue _fun0003 }
case 12:
            return var1;
        }
    };
    var _closure1_slot28 = var1;
    var5 = global;
    var12 = var5.Object;
    var11 = var12.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var11.bind(var12)(var3, var1, var6);
    var12 = 0;
    var6 = var10[var12];
    var1 = undefined;
    var6 = var8.bind(var1)(var6);
    var _closure1_slot4 = var6;
    var6 = 1;
    var6 = var10[var6];
    var6 = var8.bind(var1)(var6);
    var _closure1_slot5 = var6;
    var6 = 2;
    var6 = var10[var6];
    var6 = var8.bind(var1)(var6);
    var _closure1_slot6 = var6;
    var6 = 3;
    var6 = var10[var6];
    var6 = var8.bind(var1)(var6);
    var _closure1_slot7 = var6;
    var6 = 4;
    var6 = var10[var6];
    var6 = var8.bind(var1)(var6);
    var _closure1_slot8 = var6;
    var6 = 5;
    var6 = var10[var6];
    var6 = var8.bind(var1)(var6);
    var _closure1_slot9 = var6;
    var6 = 6;
    var6 = var10[var6];
    var6 = var8.bind(var1)(var6);
    var _closure1_slot10 = var6;
    var6 = 7;
    var6 = var10[var6];
    var6 = var8.bind(var1)(var6);
    var _closure1_slot11 = var6;
    var6 = 8;
    var6 = var10[var6];
    var6 = var9.bind(var1)(var6);
    var6 = var6.RTCDebugSections;
    var11 = 9;
    var11 = var10[var11];
    var13 = var9.bind(var1)(var11);
    var11 = var13.MediaEngineContextTypes;
    var _closure1_slot12 = var11;
    var14 = var13.Features;
    var _closure1_slot13 = var14;
    var13 = var13.SimulcastOverrideQuality;
    var _closure1_slot14 = var13;
    var11 = var11.DEFAULT;
    var6 = var6.TRANSPORT;
    var6 = var4.bind(var1)(var11, var6, var12);
    var _closure1_slot15 = var6;
    var _closure1_slot16 = var6;
    var6 = {};
    var _closure1_slot17 = var6;
    var5 = var5.Map;
    var6 = var5.prototype;
    var6 = Object.create(var6, {constructor: {value: var5}});
    var18 = var6;
    var5 = new var18[var5](var17);
    var5 = var5 instanceof Object ? var5 : var6;
    var _closure1_slot18 = var5;
    var6 = {'availableOutgoingBitrate': true, 'bitrate': true, 'bitrateTarget': true, 'bytesReceived': true, 'bytesSent': true, 'encoderQualityPsnr': true, 'encoderQualityVmaf': true, 'encodeUsage': true, 'frameRateDecode': true, 'frameRateEncode': true, 'frameRateInput': true, 'frameRateNetwork': true, 'frameRateRender': true, 'keyFramesEncoded': true, 'keyFramesDecoded': true, 'inboundBitrateEstimate': true, 'packetsLost': true, 'packetsReceived': true, 'packetsSent': true, 'ping': true, 'qpSum': true, 'videoEntropy': true, 'audioLevel': true};
    var _closure1_slot19 = var6;
    var5 = function() {
        var5 = function RTCDebugVideoOutputMap(arg1) {
            var3 = this;
            var4 = _closure1_slot8;
            var2 = _closure2_slot0;
            var1 = undefined;
            var2 = var4.bind(var1)(var3, var2);
            var2 = arg1;
            var3['state'] = var2;
            return var1;
        };
        var _closure2_slot0 = var5;
        var4 = _closure1_slot9;
        var1 = {};
        var3 = 'put';
        var1['key'] = var3;
        var3 = function value(arg1, arg2, arg3, arg4) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var6 = arg1;
                var5 = arg2;
                var4 = arg3;
                var8 = arg4;
                var1 = this;
                var2 = '';
                if(!(var2 !== var8)) { _fun0004_ip = 36; continue _fun0004 }
case 37:
                var7 = _closure2_slot0;
                var2 = {};
                var9 = _closure1_slot24;
                var3 = undefined;
                var3 = var9.bind(var3)(var6, var5, var4);
                var2[var3] = var8;
                var11 = var1.state;
                var12 = var2;
                var3 = copyDataProperties(var12, var11);
                var3 = var7.prototype;
                var3 = Object.create(var3, {constructor: {value: var7}});
                var13 = var3;
                var12 = var2;
                var2 = new var13[var7](var12, var11);
                var2 = var2 instanceof Object ? var2 : var3;
                return var2;
case 36:
                var3 = {};
                var11 = var1.state;
                var12 = var3;
                var1 = copyDataProperties(var12, var11);
                var2 = _closure1_slot24;
                var1 = undefined;
                var1 = var2.bind(var1)(var6, var5, var4);
                var1 = delete var3[var1];
                var1 = _closure2_slot0;
                var2 = var1.prototype;
                var2 = Object.create(var2, {constructor: {value: var1}});
                var13 = var2;
                var12 = var3;
                var1 = new var13[var1](var12, var11);
                var1 = var1 instanceof Object ? var1 : var2;
                return var1;
            }
        };
        var1['value'] = var3;
        var3 = new Array(2);
        var3[0] = var1;
        var1 = {};
        var6 = 'get';
        var1['key'] = var6;
        var6 = function value(arg1, arg2, arg3) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var1 = this;
                var2 = var1.state;
                var6 = _closure1_slot24;
                var5 = undefined;
                var4 = arg1;
                var3 = arg2;
                var1 = arg3;
                var1 = var6.bind(var5)(var4, var3, var1);
                var2 = var2[var1];
                var1 = null;
                var3 = var1 != var2;
                if(!var3) { _fun0005_ip = 38; continue _fun0005 }
case 39:
                var1 = var2;
case 38:
                return var1;
            }
        };
        var1['value'] = var6;
        var3[1] = var1;
        var1 = {};
        var6 = 'empty';
        var1['key'] = var6;
        var2 = function value() {
            var3 = _closure2_slot0;
            var1 = var3.prototype;
            var2 = Object.create(var1, {constructor: {value: var3}});
            var4 = {};
            var5 = var2;
            var1 = new var5[var3](var4, var3);
            var1 = var1 instanceof Object ? var1 : var2;
            return var1;
        };
        var1['value'] = var2;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var5, var3, var2);
        return var1;
    };
    var5 = var5.bind(var1)();
    var11 = var5.empty;
    var11 = var11.bind(var5)();
    var _closure1_slot20 = var11;
    var11 = false;
    var _closure1_slot21 = var11;
    var11 = null;
    var _closure1_slot22 = var11;
    var7 = var7.bind(var1)();
    var7 = 13;
    var7 = var10[var7];
    var7 = var8.bind(var1)(var7);
    var11 = var7.Store;
    var7 = function(arg1) {
        var4 = function RTCDebugStore() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot8;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot5;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot4;
                var1 = _closure1_slot23;
                var1 = var1.bind(var3)();
                if(var1) { _fun0006_ip = 40; continue _fun0006 }
case 41:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0006_ip = 42; continue _fun0006;
case 40:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 42:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot6;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot9;
        var5 = {};
        var1 = 'getSection';
        var5['key'] = var1;
        var1 = function value() {
            var1 = _closure1_slot16;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(7);
        var1[0] = var5;
        var5 = {};
        var7 = 'getInboundStats';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var3 = this;
                var2 = var3.getAllStats;
                var1 = arg2;
                var2 = var2.bind(var3)(var1);
                var1 = 0;
                var1 = var2[var1];
                var3 = null;
                var4 = var3 == var1;
                var2 = undefined;
                var6 = undefined;
                if(var4) { _fun0007_ip = 43; continue _fun0007 }
case 44:
                var1 = var1.rtp;
                var4 = var3 == var1;
                var6 = undefined;
                if(var4) { _fun0007_ip = 43; continue _fun0007 }
case 41:
                var4 = var1.inbound;
                var1 = arg1;
                var6 = var4[var1];
case 43:
                var1 = var3 == var6;
                var4 = undefined;
                if(var1) { _fun0007_ip = 45; continue _fun0007 }
case 46:
                var5 = var6.find;
                var1 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.type;
                    var1 = 'video';
                    var1 = var1 === var2;
                    return var1;
                };
                var4 = var5.bind(var6)(var1);
case 45:
                var1 = {};
                var6 = var3 == var4;
                var5 = undefined;
                if(var6) { _fun0007_ip = 47; continue _fun0007 }
case 48:
                var6 = var4.codec;
                var5 = var6.name;
case 47:
                var1['codec'] = var5;
                var5 = var3 == var4;
                var3 = undefined;
                if(var5) { _fun0007_ip = 49; continue _fun0007 }
case 50:
                var3 = var4.resolution;
case 49:
                var1['resolution'] = var3;
                var1['bitrateEstimate'] = var2;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getOutboundStats';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var3 = this;
                var2 = var3.getAllStats;
                var1 = arg1;
                var2 = var2.bind(var3)(var1);
                var7 = 0;
                var4 = var2[var7];
                var5 = null;
                var6 = var5 == var4;
                var1 = undefined;
                if(var6) { _fun0008_ip = 51; continue _fun0008 }
case 52:
                var1 = var4.transport;
case 51:
                var2 = var2[var7];
                var4 = var5 == var2;
                var8 = undefined;
                if(var4) { _fun0008_ip = 5; continue _fun0008 }
case 53:
                var2 = var2.rtp;
                var4 = var5 == var2;
                var8 = undefined;
                if(var4) { _fun0008_ip = 5; continue _fun0008 }
case 54:
                var8 = var2.outbound;
case 5:
                var2 = var5 == var8;
                var4 = undefined;
                if(var2) { _fun0008_ip = 55; continue _fun0008 }
case 56:
                var6 = var8.find;
                var2 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.type;
                    var1 = 'video';
                    var1 = var1 === var2;
                    return var1;
                };
                var4 = var6.bind(var8)(var2);
case 55:
                var2 = global;
                var8 = var2.Array;
                var6 = var8.isArray;
                var9 = var5 == var1;
                var2 = undefined;
                if(var9) { _fun0008_ip = 57; continue _fun0008 }
case 58:
                var2 = var1.availableOutgoingBitrate;
case 57:
                var6 = var6.bind(var8)(var2);
                if(!var6) { _fun0008_ip = 59; continue _fun0008 }
case 60:
                var2 = var1.availableOutgoingBitrate;
                var2 = var2.length;
                var6 = var2 > var7;
case 59:
                var2 = undefined;
                if(!var6) { _fun0008_ip = 61; continue _fun0008 }
case 62:
                var6 = var1.availableOutgoingBitrate;
                var1 = var1.availableOutgoingBitrate;
                var7 = var1.length;
                var1 = 1;
                var1 = var7 - var1;
                var1 = var6[var1];
                var2 = var1.value;
case 61:
                var1 = {};
                var7 = var5 == var4;
                var6 = undefined;
                if(var7) { _fun0008_ip = 21; continue _fun0008 }
case 63:
                var7 = var4.codec;
                var6 = var7.name;
case 21:
                var1['codec'] = var6;
                var5 = var5 == var4;
                var3 = undefined;
                if(var5) { _fun0008_ip = 64; continue _fun0008 }
case 65:
                var3 = var4.resolution;
case 64:
                var1['resolution'] = var3;
                var1['bitrateEstimate'] = var2;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getAllStats';
        var5['key'] = var7;
        var7 = function value() {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var4 = arguments[0];
                var1 = undefined;
                if(!(var4 === var1)) { _fun0009_ip = 66; continue _fun0009 }
case 67:
                var1 = _closure1_slot12;
                var4 = var1.DEFAULT;
case 66:
                var1 = global;
                var3 = var1.Object;
                var2 = var3.values;
                var1 = _closure1_slot17;
                var1 = var1[var4];
                var1 = var2.bind(var3)(var1);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getVideoStreams';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot20;
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'shouldRecordNextConnection';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot21;
            return var1;
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'getSimulcastDebugOverride';
        var5['key'] = var7;
        var6 = function value(arg1, arg2) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var5 = _closure1_slot25;
                var4 = undefined;
                var3 = arg1;
                var1 = arg2;
                var4 = var5.bind(var4)(var3, var1);
                var3 = _closure1_slot18;
                var1 = var3.has;
                var1 = var1.bind(var3)(var4);
                if(var1) { _fun0010_ip = 68; continue _fun0010 }
case 69:
                var1 = _closure1_slot14;
                var1 = var1.NO_OVERRIDE;
                _fun0010_ip = 43; continue _fun0010;
case 68:
                var3 = _closure1_slot18;
                var2 = var3.get;
                var1 = var2.bind(var3)(var4);
case 43:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[6] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var12 = var7.bind(var1)(var11);
    var7 = 'RTCDebugStore';
    var12['displayName'] = var7;
    var7 = 12;
    var7 = var10[var7];
    var17 = var8.bind(var1)(var7);
    var7 = {};
    var8 = function handleOpen(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var1 = arg1;
            var2 = var1.section;
            var1 = null;
            if(!(var1 == var2)) { _fun0011_ip = 70; continue _fun0011 }
case 8:
            var2 = _closure1_slot15;
case 70:
            _closure1_slot16 = var2;
            var1 = undefined;
            return var1;
        }
    };
    var7['RTC_DEBUG_MODAL_OPEN'] = var8;
    var8 = function handleFormClose() {
        var2 = _closure1_slot27;
        var1 = undefined;
        var2 = var2.bind(var1)();
        return var1;
    };
    var7['RTC_DEBUG_MODAL_CLOSE'] = var8;
    var8 = function handleSetSection(arg1) {
        var1 = arg1;
        var2 = var1.section;
        _closure1_slot16 = var2;
        var1 = undefined;
        return var1;
    };
    var7['RTC_DEBUG_MODAL_SET_SECTION'] = var8;
    var8 = function handleOpenReplay() {
        var3 = _closure1_slot2;
        var2 = _closure1_slot3;
        var1 = 10;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.chooseReplayPath;
        var2 = var2.bind(var3)();
        return var1;
    };
    var7['RTC_DEBUG_MODAL_OPEN_REPLAY'] = var8;
    var8 = function handleOpenReplayAtPath(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var1 = arg1;
            var7 = var1.path;
            var1 = undefined;
            var _closure2_slot0 = var1;
            var5 = _closure1_slot10;
            var4 = var5.getMediaEngine;
            var6 = var4.bind(var5)();
            var4 = _closure1_slot27;
            var4 = var4.bind(var1)();
            var5 = var6.supports;
            var4 = _closure1_slot13;
            var4 = var4.CONNECTION_REPLAY;
            var4 = var5.bind(var6)(var4);
            if(!var4) { _fun0012_ip = 71; continue _fun0012 }
case 40:
            var5 = var7.length;
            var4 = 0;
            if(!(var4 !== var5)) { _fun0012_ip = 71; continue _fun0012 }
case 56:
            var5 = var6.createReplayConnection;
            var4 = _closure1_slot12;
            var4 = var4.DEFAULT;
            var8 = var5.bind(var6)(var4, var7);
            _closure2_slot0 = var8;
            var4 = null;
            if(!(var4 != var8)) { _fun0012_ip = 71; continue _fun0012 }
case 47:
            _closure1_slot22 = var8;
            var7 = var8.on;
            var6 = _closure1_slot0;
            var5 = _closure1_slot3;
            var4 = 11;
            var4 = var5[var4];
            var4 = var6.bind(var1)(var4);
            var4 = var4.BaseConnectionEvent;
            var6 = var4.Video;
            var4 = function(arg1, arg2, arg3, arg4) {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    var6 = arg2;
                    var8 = arg4;
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var1 = 12;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.dispatch;
                    var2 = {};
                    var5 = 'RTC_DEBUG_MODAL_UPDATE_VIDEO_OUTPUT';
                    var2['type'] = var5;
                    var5 = _closure2_slot0;
                    var5 = var5.mediaEngineConnectionId;
                    var2['mediaEngineConnectionId'] = var5;
                    var5 = arg1;
                    var2['userId'] = var5;
                    var5 = null;
                    var9 = var5 != var8;
                    var7 = 0;
                    if(!var9) { _fun0013_ip = 72; continue _fun0013 }
case 73:
                    var7 = var8;
case 72:
                    var2['videoSsrc'] = var7;
                    var7 = var5 != var6;
                    var5 = '';
                    if(!var7) { _fun0013_ip = 74; continue _fun0013 }
case 55:
                    var5 = var6;
case 74:
                    var2['streamId'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var4 = var7.bind(var8)(var6, var4);
            var4 = _closure1_slot1;
            var3 = 12;
            var3 = var5[var3];
            var4 = var4.bind(var1)(var3);
            var3 = var4.wait;
            var2 = function() {
                var3 = _closure1_slot2;
                var2 = _closure1_slot3;
                var1 = 10;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.open;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = var3.bind(var4)(var2);
case 71:
            return var1;
        }
    };
    var7['RTC_DEBUG_MODAL_OPEN_REPLAY_AT_PATH'] = var8;
    var8 = function handleUpdateVideoOutput(arg1) {
        var1 = arg1;
        var7 = _closure1_slot20;
        var6 = var7.put;
        var11 = var1.mediaEngineConnectionId;
        var10 = var1.userId;
        var9 = var1.videoSsrc;
        var8 = var1.streamId;
        var12 = var7;
        var1 = var12[var6](var11, var10, var9, var8, var7);
        _closure1_slot20 = var1;
        var1 = undefined;
        return var1;
    };
    var7['RTC_DEBUG_MODAL_UPDATE_VIDEO_OUTPUT'] = var8;
    var8 = function handleSetRecordingFlag(arg1) {
        var1 = arg1;
        var2 = var1.value;
        _closure1_slot21 = var2;
        var1 = undefined;
        return var1;
    };
    var7['RTC_DEBUG_SET_RECORDING_FLAG'] = var8;
    var8 = function handleSetSimulcastDebugOverride(arg1) {
        var1 = arg1;
        var7 = var1.userId;
        var6 = var1.context;
        var5 = var1.quality;
        var4 = _closure1_slot18;
        var3 = var4.set;
        var2 = _closure1_slot25;
        var1 = undefined;
        var2 = var2.bind(var1)(var7, var6);
        var2 = var3.bind(var4)(var2, var5);
        return var1;
    };
    var7['RTC_DEBUG_SET_SIMULCAST_OVERRIDE'] = var8;
    var8 = function handleVoiceChannelSelect(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var1 = arg1;
            var2 = var1.channelId;
            var1 = null;
            if(!(var1 != var2)) { _fun0014_ip = 75; continue _fun0014 }
case 8:
            var3 = _closure1_slot26;
            var2 = undefined;
            var2 = var3.bind(var2)();
            var2 = _closure1_slot18;
            var1 = var2.clear;
            var1 = var1.bind(var2)();
case 75:
            var1 = undefined;
            return var1;
        }
    };
    var7['VOICE_CHANNEL_SELECT'] = var8;
    var8 = function handleVideo(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var2 = arg1;
            var3 = var2.streamId;
            var1 = null;
            if(!(var1 === var3)) { _fun0015_ip = 76; continue _fun0015 }
case 77:
            var5 = _closure1_slot25;
            var4 = var2.userId;
            var3 = var2.context;
            var2 = undefined;
            var4 = var5.bind(var2)(var4, var3);
            var3 = _closure1_slot18;
            var2 = var3.set;
            var1 = _closure1_slot14;
            var1 = var1.NO_OVERRIDE;
            var1 = var2.bind(var3)(var4, var1);
case 76:
            var1 = undefined;
            return var1;
        }
    };
    var7['RTC_CONNECTION_VIDEO'] = var8;
    var8 = function handleMediaEngineConnectionStats(arg1) {
        var2 = arg1;
        var2 = var2.connectionStats;
        var _closure2_slot0 = var2;
        var2 = global;
        var4 = var2.Object;
        var3 = var4.values;
        var2 = _closure1_slot12;
        var3 = var3.bind(var4)(var2);
        var2 = var3.forEach;
        var1 = function(arg1) {
            var2 = arg1;
            var _closure3_slot0 = var2;
            var4 = _closure2_slot0;
            var3 = var4.filter;
            var2 = function(arg1) {
                var1 = arg1;
                var2 = var1.context;
                var1 = _closure3_slot0;
                var1 = var2 === var1;
                return var1;
            };
            var3 = var3.bind(var4)(var2);
            var2 = var3.forEach;
            var1 = function(arg1, arg2) {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                    var1 = {};
                    var2 = _closure3_slot0;
                    var1['context'] = var2;
                    var2 = arg1;
                    var2 = var2.stats;
                    var1['stats'] = var2;
                    var2 = arg2;
                    var1['index'] = var2;
                    var7 = var1.context;
                    var6 = var1.stats;
                    var3 = var1.index;
                    var2 = _closure1_slot17;
                    var2 = var2[var7];
                    var9 = null;
                    if(!(var9 == var6)) { _fun0016_ip = 4; continue _fun0016 }
case 78:
                    var4 = delete var2[var3];
                    _fun0016_ip = 24; continue _fun0016;
case 4:
                    var8 = _closure1_slot16;
                    var5 = var8.split;
                    var4 = ':';
                    var10 = var5.bind(var8)(var4);
                    var8 = _closure1_slot7;
                    var5 = undefined;
                    var4 = 3;
                    var11 = var8.bind(var5)(var10, var4);
                    var4 = 0;
                    var4 = var11[var4];
                    var8 = 1;
                    var8 = var11[var8];
                    var10 = 2;
                    var10 = var11[var10];
                    if(!(var4 === var7)) { _fun0016_ip = 79; continue _fun0016 }
case 80:
                    var4 = global;
                    var7 = var4.parseInt;
                    var7 = var7.bind(var5)(var10);
                    if(!(var7 === var3)) { _fun0016_ip = 79; continue _fun0016 }
case 81:
                    var10 = _closure1_slot11;
                    var7 = var10.getUser;
                    var7 = var7.bind(var10)(var8);
                    if(!(var9 != var7)) { _fun0016_ip = 79; continue _fun0016 }
case 82:
                    var7 = var6.rtp;
                    var9 = var7.inbound;
                    var7 = var4.Object;
                    var4 = var7.keys;
                    var7 = var4.bind(var7)(var9);
                    var4 = var7.includes;
                    var4 = var4.bind(var7)(var8);
                    if(var4) { _fun0016_ip = 79; continue _fun0016 }
case 83:
                    var4 = _closure1_slot15;
                    _closure1_slot16 = var4;
case 79:
                    var4 = _closure1_slot28;
                    var1 = var2[var3];
                    var1 = var4.bind(var5)(var6, var1);
                    var2[var3] = var1;
case 24:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var7['MEDIA_ENGINE_CONNECTION_STATS'] = var8;
    var8 = var12.prototype;
    var8 = Object.create(var8, {constructor: {value: var12}});
    var18 = var8;
    var16 = var7;
    var7 = new var18[var12](var17, var16, var15);
    var7 = var7 instanceof Object ? var7 : var8;
    var8 = 14;
    var8 = var10[var8];
    var10 = var9.bind(var1)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'stores/RTCDebugStore.tsx';
    var8 = var9.bind(var10)(var8);
    var3['default'] = var7;
    var3['graphs'] = var6;
    var3['RTCDebugVideoOutputMap'] = var5;
    var3['keySection'] = var4;
    var2 = function parseSection(arg1) {
        var3 = arg1;
        var2 = var3.split;
        var1 = ':';
        var4 = var2.bind(var3)(var1);
        var3 = _closure1_slot7;
        var2 = undefined;
        var1 = 2;
        var3 = var3.bind(var2)(var4, var1);
        var1 = {};
        var2 = 0;
        var2 = var3[var2];
        var1['context'] = var2;
        var2 = 1;
        var2 = var3[var2];
        var1['section'] = var2;
        return var1;
    };
    var3['parseSection'] = var2;
    return var1;
})();