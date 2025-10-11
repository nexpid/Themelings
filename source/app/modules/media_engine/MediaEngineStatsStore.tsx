// app/modules/media_engine/MediaEngineStatsStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
            _closure1_slot12 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
case 6:
            if(var2) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var2 = var3.@@iterator;
case 8:
            if(var2) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0002_ip = 16; continue _fun0002 }
case 17:
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
            if(!var7) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var7 = var3.constructor;
case 18:
            var10 = var9;
            if(!var7) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            var7 = var3.constructor;
            var10 = var7.name;
case 20:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0002_ip = 22; continue _fun0002 }
case 23:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0002_ip = 22; continue _fun0002 }
case 24:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0002_ip = 25; continue _fun0002 }
case 26:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0002_ip = 27; continue _fun0002 }
case 25:
            var9 = _closure1_slot14;
            var7 = var9.bind(var8)(var3, var8);
case 27:
            _fun0002_ip = 28; continue _fun0002;
case 22:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
case 28:
            var6 = var7;
            _fun0002_ip = 14; continue _fun0002;
case 16:
            var7 = _closure1_slot14;
            var6 = var7.bind(var8)(var3, var8);
case 14:
            var4 = var6;
            if(var4) { _fun0002_ip = 12; continue _fun0002 }
case 29:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
case 12:
            if(!var4) { _fun0002_ip = 30; continue _fun0002 }
case 31:
            _closure2_slot0 = var4;
case 30:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0003_ip = 32; continue _fun0003 }
case 33:
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
                    _fun0003_ip = 34; continue _fun0003;
case 32:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
case 34:
                    return var1;
                }
            };
            return var1;
case 10:
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
case 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0004_ip = 35; continue _fun0004 }
case 36:
            var2 = var4.length;
            var1 = var3 > var2;
case 35:
            var2 = undefined;
            if(!var1) { _fun0004_ip = 37; continue _fun0004 }
case 38:
            var2 = var4.length;
case 37:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0004_ip = 3; continue _fun0004 }
case 8:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0004_ip = 8; continue _fun0004 }
case 3:
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
case 0:
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
            var10 = null;
            if(!(var10 == var1)) { _fun0005_ip = 39; continue _fun0005 }
case 37:
            var3 = {'packetsSentOrReceived': 0, 'packetsLost': 0, 'packetLossRate': 0, 'frameRate': 0, 'resolution': 0, 'entropy': 0, 'numDatapoints': 0, 'frameRateAggregated': 0, 'resolutionAggregated': 0, 'entropyAggregated': 0};
            var5 = arg1;
            var3['minVersion'] = var5;
            var1 = var3;
case 39:
            if(!(var10 != var4)) { _fun0005_ip = 40; continue _fun0005 }
case 11:
            var3 = _closure1_slot15;
            var6 = undefined;
            var3 = var3.bind(var6)(var4);
            if(var3) { _fun0005_ip = 41; continue _fun0005 }
case 42:
            var3 = var4.packetsReceived;
            var8 = var10 != var3;
            var5 = 0;
            if(!var8) { _fun0005_ip = 15; continue _fun0005 }
case 43:
            var5 = var3;
case 15:
            _fun0005_ip = 44; continue _fun0005;
case 41:
            var8 = var4.packetsSent;
            var9 = var10 != var8;
            var3 = 0;
            if(!var9) { _fun0005_ip = 45; continue _fun0005 }
case 46:
            var3 = var8;
case 45:
            var5 = var3;
case 44:
            var3 = _closure1_slot15;
            var3 = var3.bind(var6)(var4);
            var11 = var4.packetsLost;
            var13 = var10 != var11;
            if(var3) { _fun0005_ip = 47; continue _fun0005 }
case 48:
            var3 = 0;
            if(!var13) { _fun0005_ip = 49; continue _fun0005 }
case 50:
            var3 = var11;
case 49:
            _fun0005_ip = 51; continue _fun0005;
case 47:
            var9 = 0;
            if(!var13) { _fun0005_ip = 52; continue _fun0005 }
case 53:
            var9 = var11;
case 52:
            var3 = var9;
case 51:
            var9 = _closure1_slot15;
            var9 = var9.bind(var6)(var4);
            if(var9) { _fun0005_ip = 54; continue _fun0005 }
case 55:
            var9 = var4.frameRateDecode;
            var11 = var10 != var9;
            var14 = 0;
            if(!var11) { _fun0005_ip = 56; continue _fun0005 }
case 57:
            var14 = var9;
case 56:
            _fun0005_ip = 58; continue _fun0005;
case 54:
            var11 = var4.frameRateEncode;
            var13 = var10 != var11;
            var9 = 0;
            if(!var13) { _fun0005_ip = 59; continue _fun0005 }
case 60:
            var9 = var11;
case 59:
            var14 = var9;
case 58:
            var11 = var4.resolution;
            var13 = var10 == var11;
            var9 = undefined;
            if(var13) { _fun0005_ip = 61; continue _fun0005 }
case 62:
            var9 = var11.height;
case 61:
            var11 = var10 != var9;
            var13 = 0;
            if(!var11) { _fun0005_ip = 27; continue _fun0005 }
case 63:
            var13 = var9;
case 27:
            var9 = _closure1_slot15;
            var9 = var9.bind(var6)(var4);
            var11 = 0;
            if(!var9) { _fun0005_ip = 64; continue _fun0005 }
case 65:
            var4 = var4.videoEntropy;
            var9 = var10 != var4;
            var11 = 0;
            if(!var9) { _fun0005_ip = 64; continue _fun0005 }
case 66:
            var11 = var4;
case 64:
            var9 = var1.numDatapoints;
            var4 = 1;
            var9 = var9 + var4;
            var1['numDatapoints'] = var9;
            var9 = var1.frameRateAggregated;
            var9 = var9 + var14;
            var1['frameRateAggregated'] = var9;
            var9 = var1.resolutionAggregated;
            var9 = var9 + var13;
            var1['resolutionAggregated'] = var9;
            var9 = var1.entropyAggregated;
            var9 = var9 + var11;
            var1['entropyAggregated'] = var9;
            var9 = var10 == var12;
            var11 = undefined;
            if(var9) { _fun0005_ip = 67; continue _fun0005 }
case 68:
            var9 = var12.find;
            var2 = function(arg1) {
                var1 = arg1;
                var2 = var1.type;
                var1 = 'video';
                var1 = var1 === var2;
                return var1;
            };
            var11 = var9.bind(var12)(var2);
case 67:
            if(!(var10 != var11)) { _fun0005_ip = 69; continue _fun0005 }
case 70:
            var9 = var1.minVersion;
            var2 = arg2;
            if(!(!(var2 >= var9))) { _fun0005_ip = 71; continue _fun0005 }
case 69:
            var1['packetsSentOrReceived'] = var5;
            var1['packetsLost'] = var3;
            _fun0005_ip = 72; continue _fun0005;
case 71:
            var2 = var1.numDatapoints;
            var2 = var2 - var4;
            var1['numDatapoints'] = var2;
            var2 = _closure1_slot15;
            var2 = var2.bind(var6)(var11);
            if(var2) { _fun0005_ip = 73; continue _fun0005 }
case 74:
            var2 = var11.packetsReceived;
            var9 = var10 != var2;
            var4 = 0;
            if(!var9) { _fun0005_ip = 75; continue _fun0005 }
case 76:
            var4 = var2;
case 75:
            _fun0005_ip = 77; continue _fun0005;
case 73:
            var9 = var11.packetsSent;
            var12 = var10 != var9;
            var2 = 0;
            if(!var12) { _fun0005_ip = 78; continue _fun0005 }
case 79:
            var2 = var9;
case 78:
            var4 = var2;
case 77:
            var2 = _closure1_slot15;
            var2 = var2.bind(var6)(var11);
            var12 = var11.packetsLost;
            var13 = var10 != var12;
            if(var2) { _fun0005_ip = 80; continue _fun0005 }
case 81:
            var2 = 0;
            if(!var13) { _fun0005_ip = 82; continue _fun0005 }
case 83:
            var2 = var12;
case 82:
            _fun0005_ip = 84; continue _fun0005;
case 80:
            var9 = 0;
            if(!var13) { _fun0005_ip = 85; continue _fun0005 }
case 86:
            var9 = var12;
case 85:
            var2 = var9;
case 84:
            var9 = _closure1_slot15;
            var9 = var9.bind(var6)(var11);
            if(var9) { _fun0005_ip = 87; continue _fun0005 }
case 88:
            var12 = var11.frameRateDecode;
            var13 = var10 != var12;
            var9 = 0;
            if(!var13) { _fun0005_ip = 89; continue _fun0005 }
case 90:
            var9 = var12;
case 89:
            _fun0005_ip = 91; continue _fun0005;
case 87:
            var13 = var11.frameRateEncode;
            var14 = var10 != var13;
            var12 = 0;
            if(!var14) { _fun0005_ip = 92; continue _fun0005 }
case 93:
            var12 = var13;
case 92:
            var9 = var12;
case 91:
            var7 = _closure1_slot15;
            var12 = var7.bind(var6)(var11);
            var7 = 0;
            if(!var12) { _fun0005_ip = 94; continue _fun0005 }
case 95:
            var12 = var11.videoEntropy;
            var13 = var10 != var12;
            var7 = 0;
            if(!var13) { _fun0005_ip = 94; continue _fun0005 }
case 96:
            var7 = var12;
case 94:
            var11 = var11.resolution;
            var12 = var10 == var11;
            var6 = undefined;
            if(var12) { _fun0005_ip = 97; continue _fun0005 }
case 98:
            var6 = var11.height;
case 97:
            var10 = var10 != var6;
            var8 = 0;
            if(!var10) { _fun0005_ip = 99; continue _fun0005 }
case 100:
            var8 = var6;
case 99:
            var6 = var1.frameRateAggregated;
            var6 = var6 - var9;
            var1['frameRateAggregated'] = var6;
            var6 = var1.resolutionAggregated;
            var6 = var6 - var8;
            var1['resolutionAggregated'] = var6;
            var6 = var1.entropyAggregated;
            var6 = var6 - var7;
            var1['entropyAggregated'] = var6;
            var4 = var5 - var4;
            var1['packetsSentOrReceived'] = var4;
            var2 = var3 - var2;
            var1['packetsLost'] = var2;
case 72:
            var3 = var1.frameRateAggregated;
            var2 = var1.numDatapoints;
            var2 = var3 / var2;
            var1['frameRate'] = var2;
            var3 = var1.resolutionAggregated;
            var2 = var1.numDatapoints;
            var2 = var3 / var2;
            var1['resolution'] = var2;
            var3 = var1.entropyAggregated;
            var2 = var1.numDatapoints;
            var2 = var3 / var2;
            var1['entropy'] = var2;
            var3 = var1.packetsLost;
            var4 = var1.packetsSentOrReceived;
            var2 = var1.packetsLost;
            var2 = var4 + var2;
            var2 = var3 / var2;
            var1['packetLossRate'] = var2;
            return var1;
case 40:
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var1 = function updateAveragedStats(arg1, arg2, arg3, arg4) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var11 = arg1;
            var10 = arg2;
            var9 = arg3;
            var8 = arg4;
            var1 = var11[var10];
            var7 = null;
            if(!(var7 == var1)) { _fun0006_ip = 38; continue _fun0006 }
case 101:
            var1 = {};
            var11[var10] = var1;
case 38:
            var2 = _closure1_slot7;
            var1 = var2.getId;
            var4 = var1.bind(var2)();
            var3 = var11[var10];
            var16 = _closure1_slot16;
            var15 = var9.version;
            var5 = var7 == var8;
            var1 = undefined;
            var2 = undefined;
            if(var5) { _fun0006_ip = 102; continue _fun0006 }
case 3:
            var2 = var8.version;
case 102:
            var12 = var7 != var2;
            var5 = 0;
            var14 = 0;
            if(!var12) { _fun0006_ip = 103; continue _fun0006 }
case 104:
            var14 = var2;
case 103:
            var2 = var11[var10];
            var13 = var2[var4];
            var2 = var9.stats;
            var2 = var2.rtp;
            var12 = var2.outbound;
            var17 = var7 == var8;
            var2 = undefined;
            if(var17) { _fun0006_ip = 105; continue _fun0006 }
case 106:
            var17 = var8.stats;
            var17 = var17.rtp;
            var2 = var17.outbound;
case 105:
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
            if(!var2) { _fun0006_ip = 107; continue _fun0006 }
case 108:
            var13 = var4[var3];
            var12 = var11[var10];
            var18 = _closure1_slot16;
            var17 = var9.version;
            var14 = var7 == var8;
            var2 = undefined;
            if(var14) { _fun0006_ip = 109; continue _fun0006 }
case 110:
            var2 = var8.version;
case 109:
            var14 = var7 != var2;
            var16 = 0;
            if(!var14) { _fun0006_ip = 111; continue _fun0006 }
case 112:
            var16 = var2;
case 111:
            var2 = var11[var10];
            var15 = var2[var13];
            var2 = var9.stats;
            var2 = var2.rtp;
            var2 = var2.inbound;
            var14 = var2[var13];
            var19 = var7 == var8;
            var2 = undefined;
            if(var19) { _fun0006_ip = 113; continue _fun0006 }
case 114:
            var19 = var8.stats;
            var19 = var19.rtp;
            var19 = var19.inbound;
            var2 = var19[var13];
case 113:
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
            if(var3 < var2) { _fun0006_ip = 108; continue _fun0006 }
case 107:
            return var1;
        }
    };
    var _closure1_slot17 = var1;
    var1 = function resetAccumulatedStats(arg1, arg2) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var4 = arg1;
            var3 = arg2;
            var1 = _closure1_slot10;
            var7 = var1[var4];
            var6 = null;
            var8 = var6 == var7;
            var1 = undefined;
            var5 = undefined;
            if(var8) { _fun0007_ip = 115; continue _fun0007 }
case 7:
            var5 = var7[var3];
case 115:
            if(!(var6 != var5)) { _fun0007_ip = 116; continue _fun0007 }
case 117:
            var5 = _closure1_slot10;
            var5 = var5[var4];
            var5 = delete var5[var3];
case 116:
            var5 = _closure1_slot11;
            var7 = var5[var4];
            var8 = var6 == var7;
            var5 = undefined;
            if(var8) { _fun0007_ip = 118; continue _fun0007 }
case 34:
            var5 = var7[var3];
case 118:
            if(!(var6 != var5)) { _fun0007_ip = 104; continue _fun0007 }
case 119:
            var2 = _closure1_slot11;
            var2 = var2[var4];
            var2 = delete var2[var3];
case 104:
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var1 = function getStatsHistoryAtIndex(arg1, arg2) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var3 = arg1;
            var5 = arg2;
            var1 = null;
            if(!(var1 != var3)) { _fun0008_ip = 120; continue _fun0008 }
case 121:
            var2 = _closure1_slot9;
            var4 = var2[var3];
            var3 = var1 == var4;
            var2 = null;
            if(var3) { _fun0008_ip = 122; continue _fun0008 }
case 123:
            var3 = var4.length;
            var3 = var3 <= var5;
            var2 = null;
            if(var3) { _fun0008_ip = 122; continue _fun0008 }
case 6:
            var3 = var4.length;
            var5 = var3 - var5;
            var3 = 1;
            var3 = var5 - var3;
            var2 = var4[var3];
case 122:
            return var2;
case 120:
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
case 0:
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
                if(var1) { _fun0009_ip = 124; continue _fun0009 }
case 125:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0009_ip = 126; continue _fun0009;
case 124:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 126:
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
case 0:
                var3 = arg1;
                var2 = null;
                if(!(var2 != var3)) { _fun0010_ip = 7; continue _fun0010 }
case 127:
                var1 = _closure1_slot9;
                var1 = var1[var3];
                if(!(var2 == var1)) { _fun0010_ip = 38; continue _fun0010 }
case 128:
                var1 = new Array(0);
case 38:
                _fun0010_ip = 115; continue _fun0010;
case 7:
                var1 = new Array(0);
case 115:
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
case 0:
                var4 = arg1;
                var2 = null;
                var3 = var2 == var4;
                var1 = null;
                if(var3) { _fun0011_ip = 102; continue _fun0011 }
case 36:
                var5 = 'long';
                var3 = arg3;
                if(!(var5 !== var3)) { _fun0011_ip = 115; continue _fun0011 }
case 129:
                var3 = _closure1_slot11;
                _fun0011_ip = 130; continue _fun0011;
case 115:
                var3 = _closure1_slot10;
case 130:
                var5 = var3[var4];
                var4 = var2 == var5;
                var3 = undefined;
                if(var4) { _fun0011_ip = 11; continue _fun0011 }
case 39:
                var4 = arg2;
                var3 = var5[var4];
case 11:
                var4 = var2 != var3;
                var2 = null;
                if(!var4) { _fun0011_ip = 131; continue _fun0011 }
case 3:
                var2 = var3;
case 131:
                var1 = var2;
case 102:
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
case 0:
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
            if(var2) { _fun0012_ip = 132; continue _fun0012 }
case 133:
            var17 = var5.value;
            var16 = var17.mediaEngineConnectionId;
            var2 = var16.length;
            if(!(var6 !== var2)) { _fun0012_ip = 134; continue _fun0012 }
case 135:
            var12[var16] = var17;
            var2 = _closure1_slot9;
            var2 = var16 in var2;
            if(var2) { _fun0012_ip = 136; continue _fun0012 }
case 137:
            var13 = _closure1_slot9;
            var2 = new Array(0);
            var13[var16] = var2;
case 136:
            var2 = _closure1_slot9;
            var13 = var2[var16];
            var2 = var13.push;
            var2 = var2.bind(var13)(var17);
            var2 = _closure1_slot9;
            var2 = var2[var16];
            var2 = var2.length;
            var13 = var2 > var7;
            var2 = undefined;
            if(!var13) { _fun0012_ip = 138; continue _fun0012 }
case 139:
            var13 = _closure1_slot9;
            var14 = var13[var16];
            var13 = var14.shift;
            var2 = var13.bind(var14)();
case 138:
            var18 = _closure1_slot17;
            var15 = _closure1_slot11;
            var13 = _closure1_slot19;
            var13 = var13.bind(var1)(var16, var9);
            var19 = var8 != var13;
            var14 = undefined;
            if(!var19) { _fun0012_ip = 24; continue _fun0012 }
case 56:
            var14 = var13;
case 24:
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
case 134:
            var13 = var10.bind(var1)();
            var2 = var13.done;
            var5 = var13;
            if(!var2) { _fun0012_ip = 133; continue _fun0012 }
case 132:
            return var1;
        }
    };
    var2['MEDIA_ENGINE_CONNECTION_STATS'] = var9;
    var9 = function handleResetStats(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var1 = arg1;
            var2 = var1.mediaEngineConnectionId;
            var1 = null;
            if(!(var1 != var2)) { _fun0013_ip = 140; continue _fun0013 }
case 141:
            var3 = _closure1_slot9;
            var3 = delete var3[var2];
            var3 = _closure1_slot10;
            var3 = delete var3[var2];
            var1 = _closure1_slot11;
            var1 = delete var1[var2];
case 140:
            var1 = undefined;
            return var1;
        }
    };
    var2['MEDIA_ENGINE_CONNECTION_STATS_HISTORY_RESET'] = var9;
    var9 = function handleStreamUpdate(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var1 = arg1;
            var6 = var1.streamKey;
            var1 = var1.paused;
            if(var1) { _fun0014_ip = 45; continue _fun0014 }
case 142:
            var3 = _closure1_slot8;
            var1 = var3.getRTCConnection;
            var7 = var1.bind(var3)(var6);
            var3 = null;
            var5 = var3 == var7;
            var1 = undefined;
            var4 = undefined;
            if(var5) { _fun0014_ip = 143; continue _fun0014 }
case 9:
            var5 = var7.getMediaEngineConnectionId;
            var4 = var5.bind(var7)();
case 143:
            if(!(var3 != var4)) { _fun0014_ip = 144; continue _fun0014 }
case 145:
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
case 144:
            var1 = false;
            return var1;
case 45:
            var1 = false;
            return var1;
        }
    };
    var2['STREAM_UPDATE'] = var9;
    var4 = function handleVideo(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var1 = arg1;
            var4 = var1.userId;
            var3 = var1.mediaEngineConnectionId;
            var1 = null;
            if(!(var1 != var3)) { _fun0015_ip = 146; continue _fun0015 }
case 33:
            var2 = _closure1_slot18;
            var1 = undefined;
            var2 = var2.bind(var1)(var3, var4);
            return var1;
case 146:
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