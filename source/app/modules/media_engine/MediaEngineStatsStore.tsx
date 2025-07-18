// app/modules/media_engine/MediaEngineStatsStore.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
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
 70: // try_end0
            _fun0001_ip = 74; continue _fun0001;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot12 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0002_ip = 45; continue _fun0002 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 45:
            if(var2) { _fun0002_ip = 54; continue _fun0002 }
 48:
            var2 = var3.@@iterator;
 54:
            if(var2) { _fun0002_ip = 342; continue _fun0002 }
 60:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0002_ip = 322; continue _fun0002 }
 85:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0002_ip = 282; continue _fun0002 }
 95:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0002_ip = 269; continue _fun0002 }
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
            if(!var7) { _fun0002_ip = 162; continue _fun0002 }
 157:
            var7 = var3.constructor;
 162:
            var10 = var9;
            if(!var7) { _fun0002_ip = 178; continue _fun0002 }
 168:
            var7 = var3.constructor;
            var10 = var7.name;
 178:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0002_ip = 248; continue _fun0002 }
 186:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0002_ip = 248; continue _fun0002 }
 194:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0002_ip = 233; continue _fun0002 }
 204:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0002_ip = 246; continue _fun0002 }
 233:
            var9 = _closure1_slot14;
            var7 = var9.bind(var8)(var3, var8);
 246:
            _fun0002_ip = 264; continue _fun0002;
 248:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 264:
            var6 = var7;
            _fun0002_ip = 282; continue _fun0002;
 269:
            var7 = _closure1_slot14;
            var6 = var7.bind(var8)(var3, var8);
 282:
            var4 = var6;
            if(var4) { _fun0002_ip = 322; continue _fun0002 }
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
            if(!var4) { _fun0002_ip = 329; continue _fun0002 }
 325:
            _closure2_slot0 = var4;
 329:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0003_ip = 56; continue _fun0003 }
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
                    _fun0003_ip = 67; continue _fun0003;
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
    var _closure1_slot13 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0004_ip = 23; continue _fun0004 }
 14:
            var2 = var4.length;
            var1 = var3 > var2;
 23:
            var2 = undefined;
            if(!var1) { _fun0004_ip = 33; continue _fun0004 }
 28:
            var2 = var4.length;
 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0004_ip = 70; continue _fun0004 }
 55:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0004_ip = 55; continue _fun0004 }
 70:
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var1 = function isStatsOutbound(arg1) {
        var2 = 'packetsSent';
        var1 = arg1;
        var1 = var2 in var1;
        return var1;
    };
    var _closure1_slot15 = var1;
    var1 = function updateAveragedStatsHelper(arg1, arg2, arg3, arg4, arg5) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var1 = arg3;
            var5 = arg4;
            var12 = arg5;
            var4 = var5.find;
            var3 = function(arg1) {
                var1 = arg1;
                var2 = var1.type;
                var1 = 'video';
                var1 = var1 === var2;
                return var1;
            };
            var4 = var4.bind(var5)(var3);
            var9 = null;
            if(!(var9 == var1)) { _fun0005_ip = 57; continue _fun0005 }
 32:
            var3 = {'packetsSentOrReceived': 0, 'packetsLost': 0, 'packetLossRate': 0, 'frameRate': 0, 'resolution': 0, 'numDatapoints': 0, 'frameRateAggregated': 0, 'resolutionAggregated': 0};
            var5 = arg1;
            var3['minVersion'] = var5;
            var1 = var3;
 57:
            if(!(var9 != var4)) { _fun0005_ip = 686; continue _fun0005 }
 64:
            var3 = _closure1_slot15;
            var6 = undefined;
            var3 = var3.bind(var6)(var4);
            if(var3) { _fun0005_ip = 101; continue _fun0005 }
 81:
            var3 = var4.packetsReceived;
            var7 = var9 != var3;
            var5 = 0;
            if(!var7) { _fun0005_ip = 99; continue _fun0005 }
 96:
            var5 = var3;
 99:
            _fun0005_ip = 122; continue _fun0005;
 101:
            var7 = var4.packetsSent;
            var10 = var9 != var7;
            var3 = 0;
            if(!var10) { _fun0005_ip = 119; continue _fun0005 }
 116:
            var3 = var7;
 119:
            var5 = var3;
 122:
            var3 = _closure1_slot15;
            var3 = var3.bind(var6)(var4);
            var11 = var4.packetsLost;
            var13 = var9 != var11;
            if(var3) { _fun0005_ip = 154; continue _fun0005 }
 144:
            var3 = 0;
            if(!var13) { _fun0005_ip = 152; continue _fun0005 }
 149:
            var3 = var11;
 152:
            _fun0005_ip = 165; continue _fun0005;
 154:
            var10 = 0;
            if(!var13) { _fun0005_ip = 162; continue _fun0005 }
 159:
            var10 = var11;
 162:
            var3 = var10;
 165:
            var10 = _closure1_slot15;
            var10 = var10.bind(var6)(var4);
            if(var10) { _fun0005_ip = 197; continue _fun0005 }
 177:
            var10 = var4.frameRateDecode;
            var11 = var9 != var10;
            var13 = 0;
            if(!var11) { _fun0005_ip = 195; continue _fun0005 }
 192:
            var13 = var10;
 195:
            _fun0005_ip = 218; continue _fun0005;
 197:
            var11 = var4.frameRateEncode;
            var14 = var9 != var11;
            var10 = 0;
            if(!var14) { _fun0005_ip = 215; continue _fun0005 }
 212:
            var10 = var11;
 215:
            var13 = var10;
 218:
            var10 = var4.resolution;
            var11 = var9 == var10;
            var4 = undefined;
            if(var11) { _fun0005_ip = 238; continue _fun0005 }
 233:
            var4 = var10.height;
 238:
            var10 = var9 != var4;
            var11 = 0;
            if(!var10) { _fun0005_ip = 250; continue _fun0005 }
 247:
            var11 = var4;
 250:
            var10 = var1.numDatapoints;
            var4 = 1;
            var10 = var10 + var4;
            var1['numDatapoints'] = var10;
            var10 = var1.frameRateAggregated;
            var10 = var10 + var13;
            var1['frameRateAggregated'] = var10;
            var10 = var1.resolutionAggregated;
            var10 = var10 + var11;
            var1['resolutionAggregated'] = var10;
            var11 = var9 == var12;
            var10 = undefined;
            if(var11) { _fun0005_ip = 325; continue _fun0005 }
 310:
            var11 = var12.find;
            var2 = function(arg1) {
                var1 = arg1;
                var2 = var1.type;
                var1 = 'video';
                var1 = var1 === var2;
                return var1;
            };
            var10 = var11.bind(var12)(var2);
 325:
            if(!(var9 != var10)) { _fun0005_ip = 342; continue _fun0005 }
 329:
            var11 = var1.minVersion;
            var2 = arg2;
            if(!(!(var2 >= var11))) { _fun0005_ip = 359; continue _fun0005 }
 342:
            var1['packetsSentOrReceived'] = var5;
            var1['packetsLost'] = var3;
            _fun0005_ip = 608; continue _fun0005;
 359:
            var2 = var1.numDatapoints;
            var2 = var2 - var4;
            var1['numDatapoints'] = var2;
            var2 = _closure1_slot15;
            var2 = var2.bind(var6)(var10);
            if(var2) { _fun0005_ip = 407; continue _fun0005 }
 387:
            var2 = var10.packetsReceived;
            var11 = var9 != var2;
            var4 = 0;
            if(!var11) { _fun0005_ip = 405; continue _fun0005 }
 402:
            var4 = var2;
 405:
            _fun0005_ip = 428; continue _fun0005;
 407:
            var11 = var10.packetsSent;
            var12 = var9 != var11;
            var2 = 0;
            if(!var12) { _fun0005_ip = 425; continue _fun0005 }
 422:
            var2 = var11;
 425:
            var4 = var2;
 428:
            var2 = _closure1_slot15;
            var2 = var2.bind(var6)(var10);
            var12 = var10.packetsLost;
            var13 = var9 != var12;
            if(var2) { _fun0005_ip = 460; continue _fun0005 }
 450:
            var2 = 0;
            if(!var13) { _fun0005_ip = 458; continue _fun0005 }
 455:
            var2 = var12;
 458:
            _fun0005_ip = 471; continue _fun0005;
 460:
            var11 = 0;
            if(!var13) { _fun0005_ip = 468; continue _fun0005 }
 465:
            var11 = var12;
 468:
            var2 = var11;
 471:
            var8 = _closure1_slot15;
            var8 = var8.bind(var6)(var10);
            if(var8) { _fun0005_ip = 503; continue _fun0005 }
 483:
            var11 = var10.frameRateDecode;
            var12 = var9 != var11;
            var8 = 0;
            if(!var12) { _fun0005_ip = 501; continue _fun0005 }
 498:
            var8 = var11;
 501:
            _fun0005_ip = 524; continue _fun0005;
 503:
            var12 = var10.frameRateEncode;
            var13 = var9 != var12;
            var11 = 0;
            if(!var13) { _fun0005_ip = 521; continue _fun0005 }
 518:
            var11 = var12;
 521:
            var8 = var11;
 524:
            var10 = var10.resolution;
            var11 = var9 == var10;
            var6 = undefined;
            if(var11) { _fun0005_ip = 544; continue _fun0005 }
 539:
            var6 = var10.height;
 544:
            var9 = var9 != var6;
            var7 = 0;
            if(!var9) { _fun0005_ip = 556; continue _fun0005 }
 553:
            var7 = var6;
 556:
            var6 = var1.frameRateAggregated;
            var6 = var6 - var8;
            var1['frameRateAggregated'] = var6;
            var6 = var1.resolutionAggregated;
            var6 = var6 - var7;
            var1['resolutionAggregated'] = var6;
            var4 = var5 - var4;
            var1['packetsSentOrReceived'] = var4;
            var2 = var3 - var2;
            var1['packetsLost'] = var2;
 608:
            var3 = var1.frameRateAggregated;
            var2 = var1.numDatapoints;
            var2 = var3 / var2;
            var1['frameRate'] = var2;
            var3 = var1.resolutionAggregated;
            var2 = var1.numDatapoints;
            var2 = var3 / var2;
            var1['resolution'] = var2;
            var3 = var1.packetsLost;
            var4 = var1.packetsSentOrReceived;
            var2 = var1.packetsLost;
            var2 = var4 + var2;
            var2 = var3 / var2;
            var1['packetLossRate'] = var2;
            return var1;
 686:
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var1 = function updateAveragedStats(arg1, arg2, arg3, arg4) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var11 = arg1;
            var10 = arg2;
            var9 = arg3;
            var8 = arg4;
            var1 = var11[var10];
            var7 = null;
            if(!(var7 == var1)) { _fun0006_ip = 28; continue _fun0006 }
 22:
            var1 = {};
            var11[var10] = var1;
 28:
            var2 = _closure1_slot7;
            var1 = var2.getId;
            var4 = var1.bind(var2)();
            var3 = var11[var10];
            var16 = _closure1_slot16;
            var15 = var9.version;
            var5 = var7 == var8;
            var1 = undefined;
            var2 = undefined;
            if(var5) { _fun0006_ip = 76; continue _fun0006 }
 70:
            var2 = var8.version;
 76:
            var12 = var7 != var2;
            var5 = 0;
            var14 = 0;
            if(!var12) { _fun0006_ip = 90; continue _fun0006 }
 87:
            var14 = var2;
 90:
            var2 = var11[var10];
            var13 = var2[var4];
            var2 = var9.stats;
            var2 = var2.rtp;
            var12 = var2.outbound;
            var17 = var7 == var8;
            var2 = undefined;
            if(var17) { _fun0006_ip = 143; continue _fun0006 }
 125:
            var17 = var8.stats;
            var17 = var17.rtp;
            var2 = var17.outbound;
 143:
            var25 = undefined;
            var24 = var15;
            var23 = var14;
            var22 = var13;
            var21 = var12;
            var20 = var2;
            var2 = var25[var16](var24, var23, var22, var21, var20, var19);
            var3[var4] = var2;
            var2 = global;
            var4 = var2.Object;
            var3 = var4.keys;
            var2 = var9.stats;
            var2 = var2.rtp;
            var2 = var2.inbound;
            var4 = var3.bind(var4)(var2);
            var2 = var4.length;
            var2 = var5 < var2;
            var3 = 0;
            if(!var2) { _fun0006_ip = 367; continue _fun0006 }
 221:
            var13 = var4[var3];
            var12 = var11[var10];
            var18 = _closure1_slot16;
            var17 = var9.version;
            var14 = var7 == var8;
            var2 = undefined;
            if(var14) { _fun0006_ip = 254; continue _fun0006 }
 248:
            var2 = var8.version;
 254:
            var14 = var7 != var2;
            var16 = 0;
            if(!var14) { _fun0006_ip = 266; continue _fun0006 }
 263:
            var16 = var2;
 266:
            var2 = var11[var10];
            var15 = var2[var13];
            var2 = var9.stats;
            var2 = var2.rtp;
            var2 = var2.inbound;
            var14 = var2[var13];
            var19 = var7 == var8;
            var2 = undefined;
            if(var19) { _fun0006_ip = 327; continue _fun0006 }
 305:
            var19 = var8.stats;
            var19 = var19.rtp;
            var19 = var19.inbound;
            var2 = var19[var13];
 327:
            var25 = undefined;
            var24 = var17;
            var23 = var16;
            var22 = var15;
            var21 = var14;
            var20 = var2;
            var2 = var25[var18](var24, var23, var22, var21, var20, var19);
            var12[var13] = var2;
            var3 = var3 + 1;
            var2 = var4.length;
            if(var3 < var2) { _fun0006_ip = 221; continue _fun0006 }
 367:
            return var1;
        }
    };
    var _closure1_slot17 = var1;
    var1 = function resetAccumulatedStats(arg1, arg2) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var4 = arg1;
            var3 = arg2;
            var1 = _closure1_slot10;
            var7 = var1[var4];
            var6 = null;
            var8 = var6 == var7;
            var1 = undefined;
            var5 = undefined;
            if(var8) { _fun0007_ip = 34; continue _fun0007 }
 30:
            var5 = var7[var3];
 34:
            if(!(var6 != var5)) { _fun0007_ip = 50; continue _fun0007 }
 38:
            var5 = _closure1_slot10;
            var5 = var5[var4];
            var5 = delete var5[var3];
 50:
            var5 = _closure1_slot11;
            var7 = var5[var4];
            var8 = var6 == var7;
            var5 = undefined;
            if(var8) { _fun0007_ip = 71; continue _fun0007 }
 67:
            var5 = var7[var3];
 71:
            if(!(var6 != var5)) { _fun0007_ip = 87; continue _fun0007 }
 75:
            var2 = _closure1_slot11;
            var2 = var2[var4];
            var2 = delete var2[var3];
 87:
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var1 = function getStatsHistoryAtIndex(arg1, arg2) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var3 = arg1;
            var5 = arg2;
            var1 = null;
            if(!(var1 != var3)) { _fun0008_ip = 68; continue _fun0008 }
 12:
            var2 = _closure1_slot9;
            var4 = var2[var3];
            var3 = var1 == var4;
            var2 = null;
            if(var3) { _fun0008_ip = 66; continue _fun0008 }
 32:
            var3 = var4.length;
            var3 = var3 <= var5;
            var2 = null;
            if(var3) { _fun0008_ip = 66; continue _fun0008 }
 46:
            var3 = var4.length;
            var5 = var3 - var5;
            var3 = 1;
            var3 = var5 - var3;
            var2 = var4[var3];
 66:
            return var2;
 68:
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 5;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 6;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = {};
    var _closure1_slot9 = var2;
    var2 = {};
    var _closure1_slot10 = var2;
    var2 = {};
    var _closure1_slot11 = var2;
    var2 = 8;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function MediaEngineStatsStore() {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot2;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot5;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot4;
                var1 = _closure1_slot12;
                var1 = var1.bind(var3)();
                if(var1) { _fun0009_ip = 69; continue _fun0009 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0009_ip = 105; continue _fun0009;
 69:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
 105:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot6;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot3;
        var5 = {};
        var1 = 'getConnectionStats';
        var5['key'] = var1;
        var1 = function value(arg1) {
            var4 = _closure1_slot19;
            var3 = undefined;
            var2 = arg1;
            var1 = 0;
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(4);
        var1[0] = var5;
        var5 = {};
        var7 = 'getLastConnectionStats';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var4 = _closure1_slot19;
            var3 = undefined;
            var2 = arg1;
            var1 = 1;
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getStatsHistory';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                var3 = arg1;
                var2 = null;
                if(!(var2 != var3)) { _fun0010_ip = 30; continue _fun0010 }
 9:
                var1 = _closure1_slot9;
                var1 = var1[var3];
                if(!(var2 == var1)) { _fun0010_ip = 28; continue _fun0010 }
 24:
                var1 = new Array(0);
 28:
                _fun0010_ip = 34; continue _fun0010;
 30:
                var1 = new Array(0);
 34:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getAccumulatedPerformanceStats';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                var4 = arg1;
                var2 = null;
                var3 = var2 == var4;
                var1 = null;
                if(var3) { _fun0011_ip = 76; continue _fun0011 }
 14:
                var5 = 'long';
                var3 = arg3;
                if(!(var5 !== var3)) { _fun0011_ip = 34; continue _fun0011 }
 25:
                var3 = _closure1_slot11;
                _fun0011_ip = 41; continue _fun0011;
 34:
                var3 = _closure1_slot10;
 41:
                var5 = var3[var4];
                var4 = var2 == var5;
                var3 = undefined;
                if(var4) { _fun0011_ip = 61; continue _fun0011 }
 54:
                var4 = arg2;
                var3 = var5[var4];
 61:
                var4 = var2 != var3;
                var2 = null;
                if(!var4) { _fun0011_ip = 73; continue _fun0011 }
 70:
                var2 = var3;
 73:
                var1 = var2;
 76:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[3] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'MediaEngineStatsStore';
    var8['displayName'] = var2;
    var2 = 9;
    var2 = var6[var2];
    var12 = var7.bind(var1)(var2);
    var2 = {};
    var9 = function handleMediaEngineConnectionStats(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
            var1 = arg1;
            var3 = var1.connectionStats;
            var12 = {};
            var2 = _closure1_slot13;
            var1 = undefined;
            var10 = var2.bind(var1)(var3);
            var3 = var10.bind(var1)();
            var2 = var3.done;
            var9 = 15;
            var8 = null;
            var7 = 30;
            var6 = 0;
            var5 = var3;
            var4 = undefined;
            var3 = undefined;
            if(var2) { _fun0012_ip = 258; continue _fun0012 }
 57:
            var17 = var5.value;
            var16 = var17.mediaEngineConnectionId;
            var2 = var16.length;
            if(!(var6 !== var2)) { _fun0012_ip = 240; continue _fun0012 }
 80:
            var12[var16] = var17;
            var2 = _closure1_slot9;
            var2 = var16 in var2;
            if(var2) { _fun0012_ip = 107; continue _fun0012 }
 95:
            var13 = _closure1_slot9;
            var2 = new Array(0);
            var13[var16] = var2;
 107:
            var2 = _closure1_slot9;
            var13 = var2[var16];
            var2 = var13.push;
            var2 = var2.bind(var13)(var17);
            var2 = _closure1_slot9;
            var2 = var2[var16];
            var2 = var2.length;
            var13 = var2 > var7;
            var2 = undefined;
            if(!var13) { _fun0012_ip = 165; continue _fun0012 }
 147:
            var13 = _closure1_slot9;
            var14 = var13[var16];
            var13 = var14.shift;
            var2 = var13.bind(var14)();
 165:
            var18 = _closure1_slot17;
            var15 = _closure1_slot11;
            var13 = _closure1_slot19;
            var13 = var13.bind(var1)(var16, var9);
            var19 = var8 != var13;
            var14 = undefined;
            if(!var19) { _fun0012_ip = 195; continue _fun0012 }
 192:
            var14 = var13;
 195:
            var24 = undefined;
            var23 = var15;
            var22 = var16;
            var21 = var17;
            var20 = var14;
            var14 = var24[var18](var23, var22, var21, var20, var19);
            var15 = _closure1_slot17;
            var23 = _closure1_slot10;
            var22 = var16;
            var21 = var17;
            var20 = var2;
            var14 = var24[var15](var23, var22, var21, var20, var19);
            var4 = var13;
            var3 = var2;
 240:
            var13 = var10.bind(var1)();
            var2 = var13.done;
            var5 = var13;
            if(!var2) { _fun0012_ip = 57; continue _fun0012 }
 258:
            return var1;
        }
    };
    var2['MEDIA_ENGINE_CONNECTION_STATS'] = var9;
    var9 = function handleResetStats(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
            var1 = arg1;
            var2 = var1.mediaEngineConnectionId;
            var1 = null;
            if(!(var1 != var2)) { _fun0013_ip = 42; continue _fun0013 }
 15:
            var3 = _closure1_slot9;
            var3 = delete var3[var2];
            var3 = _closure1_slot10;
            var3 = delete var3[var2];
            var1 = _closure1_slot11;
            var1 = delete var1[var2];
 42:
            var1 = undefined;
            return var1;
        }
    };
    var2['MEDIA_ENGINE_CONNECTION_STATS_HISTORY_RESET'] = var9;
    var9 = function handleStreamUpdate(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
            var1 = arg1;
            var6 = var1.streamKey;
            var1 = var1.paused;
            if(var1) { _fun0014_ip = 116; continue _fun0014 }
 18:
            var3 = _closure1_slot8;
            var1 = var3.getRTCConnection;
            var7 = var1.bind(var3)(var6);
            var3 = null;
            var5 = var3 == var7;
            var1 = undefined;
            var4 = undefined;
            if(var5) { _fun0014_ip = 59; continue _fun0014 }
 49:
            var5 = var7.getMediaEngineConnectionId;
            var4 = var5.bind(var7)();
 59:
            if(!(var3 != var4)) { _fun0014_ip = 112; continue _fun0014 }
 63:
            var3 = _closure1_slot18;
            var5 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 7;
            var2 = var7[var2];
            var5 = var5.bind(var1)(var2);
            var2 = var5.decodeStreamKey;
            var2 = var2.bind(var5)(var6);
            var2 = var2.ownerId;
            var2 = var3.bind(var1)(var4, var2);
            return var1;
 112:
            var1 = false;
            return var1;
 116:
            var1 = false;
            return var1;
        }
    };
    var2['STREAM_UPDATE'] = var9;
    var4 = function handleVideo(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
            var1 = arg1;
            var4 = var1.userId;
            var3 = var1.mediaEngineConnectionId;
            var1 = null;
            if(!(var1 != var3)) { _fun0015_ip = 37; continue _fun0015 }
 20:
            var2 = _closure1_slot18;
            var1 = undefined;
            var2 = var2.bind(var1)(var3, var4);
            return var1;
 37:
            var1 = false;
            return var1;
        }
    };
    var2['RTC_CONNECTION_VIDEO'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var13 = var4;
    var11 = var2;
    var2 = new var13[var8](var12, var11, var10);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/media_engine/MediaEngineStatsStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();