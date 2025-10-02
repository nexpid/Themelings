// app/lib/RTCMediaSinkWantsManager.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var8;
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
            if(!var2) { _fun0001_ip = 46; continue _fun0001 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 46:
            if(var2) { _fun0001_ip = 55; continue _fun0001 }
 49:
            var2 = var3.@@iterator;
 55:
            if(var2) { _fun0001_ip = 345; continue _fun0001 }
 61:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 323; continue _fun0001 }
 86:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 283; continue _fun0001 }
 96:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 270; continue _fun0001 }
 110:
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
            if(!var7) { _fun0001_ip = 163; continue _fun0001 }
 158:
            var7 = var3.constructor;
 163:
            var10 = var9;
            if(!var7) { _fun0001_ip = 179; continue _fun0001 }
 169:
            var7 = var3.constructor;
            var10 = var7.name;
 179:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 249; continue _fun0001 }
 187:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 249; continue _fun0001 }
 195:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 234; continue _fun0001 }
 205:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 247; continue _fun0001 }
 234:
            var9 = _closure1_slot18;
            var7 = var9.bind(var8)(var3, var8);
 247:
            _fun0001_ip = 265; continue _fun0001;
 249:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 265:
            var6 = var7;
            _fun0001_ip = 283; continue _fun0001;
 270:
            var7 = _closure1_slot18;
            var6 = var7.bind(var8)(var3, var8);
 283:
            var4 = var6;
            if(var4) { _fun0001_ip = 323; continue _fun0001 }
 289:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
 323:
            if(!var4) { _fun0001_ip = 330; continue _fun0001 }
 326:
            _closure2_slot0 = var4;
 330:
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
 345:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot17 = var1;
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
    var _closure1_slot18 = var1;
    var1 = function _isNativeReflectConstruct() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
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
            _fun0004_ip = 76; continue _fun0004;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot19 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var1 = global;
    var6 = var1.Object;
    var4 = var6.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var6)(var3, var1, var2);
    var1 = 0;
    var2 = var8[var1];
    var1 = undefined;
    var2 = var9.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var8[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var8[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var8[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 4;
    var2 = var8[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 5;
    var2 = var8[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 6;
    var2 = var8[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot9 = var2;
    var2 = 7;
    var2 = var8[var2];
    var2 = var7.bind(var1)(var2);
    var2 = var2.VideoToggleState;
    var _closure1_slot10 = var2;
    var2 = 8;
    var2 = var8[var2];
    var2 = var7.bind(var1)(var2);
    var2 = var2.SimulcastOverrideQuality;
    var _closure1_slot11 = var2;
    var4 = {};
    var2 = 100;
    var4['any'] = var2;
    var _closure1_slot12 = var4;
    var2 = 9;
    var6 = var8[var2];
    var6 = var9.bind(var1)(var6);
    var6 = var6.Millis;
    var10 = var6.SECOND;
    var6 = 30;
    var6 = var6 * var10;
    var _closure1_slot13 = var6;
    var2 = var8[var2];
    var2 = var9.bind(var1)(var2);
    var2 = var2.Millis;
    var6 = var2.SECOND;
    var2 = 120;
    var2 = var2 * var6;
    var _closure1_slot14 = var2;
    var2 = 10;
    var2 = var8[var2];
    var6 = var7.bind(var1)(var2);
    var2 = var6.getFirefoxVersion;
    var6 = var2.bind(var6)();
    var2 = -1;
    var2 = var2 !== var6;
    var _closure1_slot15 = var2;
    var2 = {};
    var6 = 'user-ssrc-update';
    var2['UserSSRCUpdate'] = var6;
    var6 = 'update';
    var2['Update'] = var6;
    var _closure1_slot16 = var2;
    var6 = 19;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var5 = function(arg1) {
        var4 = function RTCMediaSinkWantsManager(arg1, arg2, arg3) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var4 = arguments[3];
                var7 = this;
                var6 = undefined;
                if(!(var4 === var6)) { _fun0005_ip = 63; continue _fun0005 }
 14:
                var2 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 11;
                var1 = var5[var1];
                var1 = var2.bind(var6)(var1);
                var1 = var1.MediaSinkWantsLadder;
                var2 = var1.prototype;
                var2 = Object.create(var2, {constructor: {value: var1}});
                var16 = var2;
                var1 = new var16[var1](var15);
                var4 = var1 instanceof Object ? var1 : var2;
 63:
                var _closure3_slot0 = var6;
                var1 = _closure1_slot4;
                var5 = _closure2_slot0;
                var1 = var1.bind(var6)(var7, var5);
                var1 = _closure1_slot7;
                var12 = var1.bind(var6)(var5);
                var5 = _closure1_slot6;
                var1 = _closure1_slot19;
                var1 = var1.bind(var6)();
                if(var1) { _fun0005_ip = 124; continue _fun0005 }
 111:
                var1 = var12.apply;
                var1 = var1.bind(var12)(var7, var6);
                _fun0005_ip = 162; continue _fun0005;
 124:
                var8 = global;
                var11 = var8.Reflect;
                var10 = var11.construct;
                var8 = _closure1_slot7;
                var8 = var8.bind(var6)(var7);
                var9 = var8.constructor;
                var8 = new Array(0);
                var1 = var10.bind(var11)(var12, var8, var9);
 162:
                var1 = var5.bind(var6)(var7, var1);
                _closure3_slot0 = var1;
                var5 = arg1;
                var1['userId'] = var5;
                var5 = arg2;
                var1['isStageChannel'] = var5;
                var5 = arg3;
                var1['supportsSeamless'] = var5;
                var1['ladder'] = var4;
                var5 = null;
                var1['connection'] = var5;
                var4 = {};
                var1['audioSsrcs'] = var4;
                var4 = {};
                var1['videoSsrcs'] = var4;
                var4 = {};
                var1['remoteVideoSsrcs'] = var4;
                var4 = {};
                var1['framesReceived'] = var4;
                var4 = {};
                var1['streamIds'] = var4;
                var4 = {};
                var1['offscreenUsers'] = var4;
                var4 = {};
                var1['offscreenDisabledUsers'] = var4;
                var4 = {};
                var1['streamPixelCounts'] = var4;
                var4 = _closure1_slot12;
                var1['latestWants'] = var4;
                var4 = global;
                var7 = var4.Set;
                var8 = var7.prototype;
                var8 = Object.create(var8, {constructor: {value: var7}});
                var16 = var8;
                var7 = new var16[var7](var15);
                var7 = var7 instanceof Object ? var7 : var8;
                var1['participants'] = var7;
                var1['selectedParticipantId'] = var5;
                var7 = false;
                var1['pipOpen'] = var7;
                var7 = var4.Map;
                var8 = var7.prototype;
                var8 = Object.create(var8, {constructor: {value: var7}});
                var16 = var8;
                var7 = new var16[var7](var15);
                var7 = var7 instanceof Object ? var7 : var8;
                var1['simulcastDebugOverrides'] = var7;
                var1['videoHealthManager'] = var5;
                var4 = var4.Set;
                var5 = var4.prototype;
                var5 = Object.create(var5, {constructor: {value: var4}});
                var16 = var5;
                var4 = new var16[var4](var15);
                var4 = var4 instanceof Object ? var4 : var5;
                var1['otherUsers'] = var4;
                var4 = function() {
                    var1 = _closure3_slot0;
                    var2 = var1.delayedCall;
                    var1 = var2.delay;
                    var1 = var1.bind(var2)();
                    var1 = undefined;
                    return var1;
                };
                var1['delayedUpdate'] = var4;
                var4 = function(arg1, arg2, arg3) {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                        var8 = arg2;
                        var4 = arg3;
                        var2 = var4.push;
                        var1 = arg1;
                        var1 = var2.bind(var4)(var1);
                        var2 = var4.length;
                        var1 = 3;
                        if(!(!(var2 <= var1))) { _fun0006_ip = 142; continue _fun0006 }
 31:
                        var1 = var4.length;
                        var7 = 0;
                        var2 = var7 < var1;
                        var6 = -1;
                        var5 = var6;
                        var3 = var5;
                        if(!var2) { _fun0006_ip = 107; continue _fun0006 }
 60:
                        var9 = var4[var7];
                        var2 = _closure3_slot0;
                        var2 = var2.offscreenUsers;
                        var2 = var2[var9];
                        var2 = var8 - var2;
                        if(!(var2 > var6)) { _fun0006_ip = 92; continue _fun0006 }
 86:
                        var6 = var2;
                        var5 = var7;
 92:
                        var7 = var7 + 1;
                        var2 = var4.length;
                        var3 = var5;
                        if(var7 < var2) { _fun0006_ip = 60; continue _fun0006 }
 107:
                        var1 = _closure3_slot0;
                        var5 = var1.offscreenDisabledUsers;
                        var2 = var4[var3];
                        var1 = true;
                        var5[var2] = var1;
                        var2 = var4.splice;
                        var1 = 1;
                        var1 = var2.bind(var4)(var3, var1);
 142:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['addLru'] = var4;
                var4 = function() {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                        var2 = _closure3_slot0;
                        var3 = var2.connection;
                        var15 = null;
                        if(!(var15 != var3)) { _fun0007_ip = 599; continue _fun0007 }
 22:
                        var2 = var3.getActiveOutputSinkTrackingEnabled;
                        var2 = var2.bind(var3)();
                        if(!var2) { _fun0007_ip = 599; continue _fun0007 }
 40:
                        var9 = global;
                        var3 = var9.Date;
                        var2 = var3.now;
                        var5 = var2.bind(var3)();
                        var4 = new Array(0);
                        var6 = _closure1_slot17;
                        var7 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var2 = 12;
                        var2 = var8[var2];
                        var8 = undefined;
                        var10 = var7.bind(var8)(var2);
                        var7 = var10.entries;
                        var2 = _closure3_slot0;
                        var2 = var2.streamIds;
                        var2 = var7.bind(var10)(var2);
                        var14 = var6.bind(var8)(var2);
                        var7 = var14.bind(var8)();
                        var2 = var7.done;
                        var13 = true;
                        var12 = 2;
                        var6 = 0;
                        var11 = 1;
                        var10 = var7;
                        var7 = undefined;
                        if(var2) { _fun0007_ip = 410; continue _fun0007 }
 146:
                        var16 = var10.value;
                        var2 = _closure1_slot3;
                        var2 = var2.bind(var8)(var16, var12);
                        var17 = var2[var6];
                        var18 = var2[var11];
                        if(!(var15 != var18)) { _fun0007_ip = 392; continue _fun0007 }
 176:
                        var2 = _closure3_slot0;
                        var2 = var2.connection;
                        if(!(var15 != var2)) { _fun0007_ip = 207; continue _fun0007 }
 190:
                        var16 = var2.getHasActiveVideoOutputSink;
                        var16 = var16.bind(var2)(var18);
                        if(var16) { _fun0007_ip = 361; continue _fun0007 }
 207:
                        var16 = _closure3_slot0;
                        var16 = var16.offscreenUsers;
                        var16 = var16[var17];
                        if(!(var15 != var16)) { _fun0007_ip = 325; continue _fun0007 }
 225:
                        var16 = _closure3_slot0;
                        var16 = var16.offscreenDisabledUsers;
                        var16 = var16[var17];
                        var7 = var2;
                        if(var16) { _fun0007_ip = 392; continue _fun0007 }
 248:
                        var16 = _closure3_slot0;
                        var16 = var16.offscreenUsers;
                        var16 = var16[var17];
                        var18 = var5 - var16;
                        var19 = _closure3_slot0;
                        var16 = var19.getOffscreenTimeoutMs;
                        var16 = var16.bind(var19)();
                        if(!(!(var18 >= var16))) { _fun0007_ip = 306; continue _fun0007 }
 284:
                        var18 = _closure3_slot0;
                        var16 = var18.addLru;
                        var16 = var16.bind(var18)(var17, var5, var4);
                        var7 = var2;
                        _fun0007_ip = 392; continue _fun0007;
 306:
                        var16 = _closure3_slot0;
                        var16 = var16.offscreenDisabledUsers;
                        var16[var17] = var13;
                        var7 = var2;
                        _fun0007_ip = 392; continue _fun0007;
 325:
                        var16 = _closure3_slot0;
                        var16 = var16.offscreenUsers;
                        var16[var17] = var5;
                        var18 = _closure3_slot0;
                        var16 = var18.addLru;
                        var16 = var16.bind(var18)(var17, var5, var4);
                        var7 = var2;
                        _fun0007_ip = 392; continue _fun0007;
 361:
                        var16 = _closure3_slot0;
                        var16 = var16.offscreenUsers;
                        var16 = delete var16[var17];
                        var16 = _closure3_slot0;
                        var16 = var16.offscreenDisabledUsers;
                        var16 = delete var16[var17];
                        var7 = var2;
 392:
                        var16 = var14.bind(var8)();
                        var2 = var16.done;
                        var10 = var16;
                        if(!var2) { _fun0007_ip = 146; continue _fun0007 }
 410:
                        var2 = var4.length;
                        if(!(!(var2 > var6))) { _fun0007_ip = 444; continue _fun0007 }
 419:
                        var2 = _closure3_slot0;
                        var6 = var2.offscreenTimeout;
                        var2 = var6.stop;
                        var2 = var2.bind(var6)();
                        _fun0007_ip = 599; continue _fun0007;
 444:
                        var6 = _closure3_slot0;
                        var2 = var6.getOffscreenTimeoutMs;
                        var2 = var2.bind(var6)();
                        var2 = var5 + var2;
                        var3 = _closure1_slot17;
                        var7 = var3.bind(var8)(var4);
                        var4 = var7.bind(var8)();
                        var3 = var4.done;
                        var6 = var4;
                        var4 = var2;
                        var2 = var4;
                        if(var3) { _fun0007_ip = 564; continue _fun0007 }
 492:
                        var12 = var6.value;
                        var11 = var9.Math;
                        var10 = var11.min;
                        var3 = _closure3_slot0;
                        var3 = var3.offscreenUsers;
                        var12 = var3[var12];
                        var13 = _closure3_slot0;
                        var3 = var13.getOffscreenTimeoutMs;
                        var3 = var3.bind(var13)();
                        var3 = var12 + var3;
                        var4 = var10.bind(var11)(var4, var3);
                        var11 = var7.bind(var8)();
                        var3 = var11.done;
                        var6 = var11;
                        var2 = var4;
                        if(!var3) { _fun0007_ip = 492; continue _fun0007 }
 564:
                        var3 = _closure3_slot0;
                        var4 = var3.offscreenTimeout;
                        var3 = var4.start;
                        var2 = var2 - var5;
                        var1 = _closure3_slot0;
                        var1 = var1.update;
                        var1 = var3.bind(var4)(var2, var1);
 599:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['updateOffscreenUsers'] = var4;
                var4 = function() {
                    var2 = _closure3_slot0;
                    var1 = var2.update;
                    var1 = var1.bind(var2)();
                    var1 = undefined;
                    return var1;
                };
                var1['handleLocalVideoDisabled'] = var4;
                var4 = function() {
                    var2 = _closure3_slot0;
                    var1 = var2.update;
                    var1 = var1.bind(var2)();
                    var1 = undefined;
                    return var1;
                };
                var1['handleLocalMute'] = var4;
                var4 = function() {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                        var30 = arguments[0];
                        var8 = undefined;
                        if(!(var30 === var8)) { _fun0008_ip = 13; continue _fun0008 }
 9:
                        var30 = new Array(0);
 13:
                        var2 = _closure3_slot0;
                        var1 = var2.getWantsLevel;
                        var29 = var1.bind(var2)();
                        var3 = {};
                        var3['any'] = var29;
                        var2 = _closure3_slot0;
                        var1 = var2.updateOffscreenUsers;
                        var1 = var1.bind(var2)();
                        var2 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var1 = 13;
                        var1 = var6[var1];
                        var2 = var2.bind(var8)(var1);
                        var1 = var2.isDesktop;
                        var28 = var1.bind(var2)();
                        if(!var28) { _fun0008_ip = 101; continue _fun0008 }
 87:
                        var2 = _closure3_slot0;
                        var1 = var2.isOneToOneCall;
                        var28 = var1.bind(var2)();
 101:
                        if(!var28) { _fun0008_ip = 117; continue _fun0008 }
 104:
                        var1 = _closure3_slot0;
                        var1 = var1.isStageChannel;
                        var28 = !var1;
 117:
                        var2 = _closure1_slot17;
                        var6 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var1 = 12;
                        var1 = var7[var1];
                        var7 = var6.bind(var8)(var1);
                        var6 = var7.entries;
                        var1 = _closure3_slot0;
                        var1 = var1.videoSsrcs;
                        var1 = var6.bind(var7)(var1);
                        var27 = var2.bind(var8)(var1);
                        var2 = var27.bind(var8)();
                        var1 = var2.done;
                        var11 = 0;
                        var26 = 14;
                        var25 = 100;
                        var24 = 50;
                        var10 = 1;
                        var21 = var29 !== var25;
                        var9 = 2;
                        var6 = null;
                        var20 = var2;
                        var19 = undefined;
                        var18 = undefined;
                        var17 = undefined;
                        var16 = undefined;
                        var15 = undefined;
                        var14 = undefined;
                        var13 = undefined;
                        var12 = undefined;
                        var7 = undefined;
                        var2 = undefined;
                        if(var1) { _fun0008_ip = 1492; continue _fun0008 }
 228:
                        var31 = var20.value;
                        var1 = _closure1_slot3;
                        var1 = var1.bind(var8)(var31, var9);
                        var44 = var1[var11];
                        var40 = var1[var10];
                        var45 = new Array(0);
                        var1 = _closure3_slot0;
                        var31 = var1.streamPixelCounts;
                        var1 = _closure3_slot0;
                        var1 = var1.streamIds;
                        var1 = var1[var44];
                        var1 = var31[var1];
                        var31 = var6 != var1;
                        var32 = 0;
                        if(!var31) { _fun0008_ip = 295; continue _fun0008 }
 292:
                        var32 = var1;
 295:
                        var31 = _closure3_slot0;
                        var1 = var31.getWantsLevel;
                        var52 = var1.bind(var31)(var32);
                        var1 = var40[var11];
                        var49 = var1.ssrc;
                        var31 = _closure3_slot0;
                        var1 = var31.shouldReceiveFromUser;
                        var1 = var1.bind(var31)(var44);
                        if(var1) { _fun0008_ip = 473; continue _fun0008 }
 341:
                        var1 = _closure1_slot17;
                        var47 = var1.bind(var8)(var40);
                        var31 = var47.bind(var8)();
                        var1 = var31.done;
                        var46 = var31;
                        var43 = var45;
                        var42 = false;
                        var41 = var49;
                        var39 = var19;
                        var38 = var18;
                        var37 = var17;
                        var36 = var16;
                        var35 = var15;
                        var34 = var14;
                        var33 = var13;
                        var32 = var46;
                        var31 = var47;
                        if(var1) { _fun0008_ip = 1122; continue _fun0008 }
 403:
                        var1 = var46.value;
                        var1 = var1.ssrc;
                        var3[var1] = var11;
                        var48 = var47.bind(var8)();
                        var1 = var48.done;
                        var46 = var48;
                        var43 = var45;
                        var42 = false;
                        var41 = var49;
                        var39 = var19;
                        var38 = var18;
                        var37 = var17;
                        var36 = var16;
                        var35 = var15;
                        var34 = var14;
                        var33 = var13;
                        var32 = var46;
                        var31 = var47;
                        if(var1) { _fun0008_ip = 1122; continue _fun0008 }
 471:
                        _fun0008_ip = 403; continue _fun0008;
 473:
                        var1 = _closure3_slot0;
                        var1 = var1.selectedParticipantId;
                        var51 = var44 === var1;
                        if(!var51) { _fun0008_ip = 493; continue _fun0008 }
 490:
                        var51 = var21;
 493:
                        if(!var51) { _fun0008_ip = 509; continue _fun0008 }
 496:
                        var1 = _closure3_slot0;
                        var1 = var1.pipOpen;
                        var51 = !var1;
 509:
                        var1 = var40.length;
                        if(!(!(var1 > var10))) { _fun0008_ip = 653; continue _fun0008 }
 521:
                        if(var51) { _fun0008_ip = 609; continue _fun0008 }
 524:
                        var43 = var45;
                        var42 = false;
                        var41 = var49;
                        var39 = var51;
                        var38 = var18;
                        var37 = var17;
                        var36 = var16;
                        var35 = var15;
                        var34 = var14;
                        var33 = var13;
                        var32 = var12;
                        var31 = var7;
                        if(!var28) { _fun0008_ip = 1122; continue _fun0008 }
 565:
                        var3[var49] = var52;
                        var43 = var45;
                        var42 = false;
                        var41 = var49;
                        var39 = var51;
                        var38 = var18;
                        var37 = var17;
                        var36 = var16;
                        var35 = var15;
                        var34 = var14;
                        var33 = var13;
                        var32 = var12;
                        var31 = var7;
                        _fun0008_ip = 1122; continue _fun0008;
 609:
                        var3[var49] = var25;
                        var43 = var45;
                        var42 = false;
                        var41 = var49;
                        var39 = var51;
                        var38 = var18;
                        var37 = var17;
                        var36 = var16;
                        var35 = var15;
                        var34 = var14;
                        var33 = var13;
                        var32 = var12;
                        var31 = var7;
                        _fun0008_ip = 1122; continue _fun0008;
 653:
                        var1 = _closure1_slot17;
                        var50 = var1.bind(var8)(var40);
                        var48 = var50.bind(var8)();
                        var1 = var48.done;
                        var47 = var49;
                        var46 = var48;
                        var49 = var47;
                        var48 = var46;
                        if(var1) { _fun0008_ip = 795; continue _fun0008 }
 686:
                        var53 = var46.value;
                        var1 = var53.quality;
                        if(!(var1 !== var25)) { _fun0008_ip = 740; continue _fun0008 }
 701:
                        if(var51) { _fun0008_ip = 725; continue _fun0008 }
 704:
                        if(!var28) { _fun0008_ip = 717; continue _fun0008 }
 707:
                        var1 = var53.ssrc;
                        var3[var1] = var52;
 717:
                        var55 = var53.ssrc;
                        _fun0008_ip = 768; continue _fun0008;
 725:
                        var1 = var53.ssrc;
                        var3[var1] = var11;
                        var55 = var47;
                        _fun0008_ip = 768; continue _fun0008;
 740:
                        var1 = var53.ssrc;
                        if(var51) { _fun0008_ip = 758; continue _fun0008 }
 749:
                        var3[var1] = var11;
                        var55 = var47;
                        _fun0008_ip = 768; continue _fun0008;
 758:
                        var3[var1] = var25;
                        var55 = var53.ssrc;
 768:
                        var54 = var50.bind(var8)();
                        var1 = var54.done;
                        var47 = var55;
                        var46 = var54;
                        var49 = var47;
                        var48 = var46;
                        var16 = var53;
                        if(!var1) { _fun0008_ip = 686; continue _fun0008 }
 795:
                        var1 = _closure3_slot0;
                        var1 = var1.supportsSeamless;
                        var43 = var45;
                        var42 = false;
                        var41 = var49;
                        var39 = var51;
                        var38 = var48;
                        var37 = var50;
                        var36 = var16;
                        var35 = var15;
                        var34 = var14;
                        var33 = var13;
                        var32 = var12;
                        var31 = var7;
                        if(!var1) { _fun0008_ip = 1122; continue _fun0008 }
 846:
                        var1 = _closure3_slot0;
                        var1 = var1.framesReceived;
                        var1 = var1[var49];
                        var43 = var45;
                        var42 = false;
                        var41 = var49;
                        var39 = var51;
                        var38 = var48;
                        var37 = var50;
                        var36 = var16;
                        var35 = var15;
                        var34 = var14;
                        var33 = var13;
                        var32 = var12;
                        var31 = var7;
                        if(var1) { _fun0008_ip = 1122; continue _fun0008 }
 901:
                        var47 = new Array(1);
                        var47[0] = var49;
                        var1 = _closure1_slot17;
                        var46 = var1.bind(var8)(var40);
                        var53 = var46.bind(var8)();
                        var1 = var53.done;
                        var45 = var53;
                        var43 = var47;
                        var42 = true;
                        var41 = var49;
                        var39 = var51;
                        var38 = var48;
                        var37 = var50;
                        var36 = var16;
                        var35 = var45;
                        var34 = var46;
                        var33 = var13;
                        var32 = var12;
                        var31 = var7;
                        if(var1) { _fun0008_ip = 1122; continue _fun0008 }
 971:
                        var53 = var45.value;
                        var1 = var53.ssrc;
                        var1 = var1 !== var49;
                        if(!var1) { _fun0008_ip = 1009; continue _fun0008 }
 989:
                        var54 = _closure3_slot0;
                        var55 = var54.framesReceived;
                        var54 = var53.ssrc;
                        var1 = var55[var54];
 1009:
                        if(!var1) { _fun0008_ip = 1069; continue _fun0008 }
 1012:
                        var1 = var53.quality;
                        if(!(var1 !== var25)) { _fun0008_ip = 1043; continue _fun0008 }
 1022:
                        var54 = var53.ssrc;
                        var1 = var29;
                        if(!var28) { _fun0008_ip = 1037; continue _fun0008 }
 1034:
                        var1 = var52;
 1037:
                        var3[var54] = var1;
                        _fun0008_ip = 1053; continue _fun0008;
 1043:
                        var1 = var53.ssrc;
                        var3[var1] = var25;
 1053:
                        var54 = var47.push;
                        var1 = var53.ssrc;
                        var1 = var54.bind(var47)(var1);
 1069:
                        var54 = var46.bind(var8)();
                        var1 = var54.done;
                        var45 = var54;
                        var43 = var47;
                        var42 = true;
                        var41 = var49;
                        var39 = var51;
                        var38 = var48;
                        var37 = var50;
                        var36 = var16;
                        var35 = var45;
                        var34 = var46;
                        var33 = var53;
                        var32 = var12;
                        var31 = var7;
                        if(!var1) { _fun0008_ip = 971; continue _fun0008 }
 1122:
                        var45 = _closure3_slot0;
                        var1 = var45.getSimulcastOverrideQuality;
                        var45 = var1.bind(var45)(var44);
                        var1 = _closure1_slot11;
                        var1 = var1.HIGH;
                        if(!(var45 !== var1)) { _fun0008_ip = 1173; continue _fun0008 }
 1153:
                        var1 = _closure1_slot11;
                        var1 = var1.LOW;
                        if(!(var45 === var1)) { _fun0008_ip = 1177; continue _fun0008 }
 1167:
                        var3[var41] = var24;
                        _fun0008_ip = 1177; continue _fun0008;
 1173:
                        var3[var41] = var25;
 1177:
                        var1 = _closure3_slot0;
                        var1 = var1.supportsSeamless;
                        if(!var1) { _fun0008_ip = 1193; continue _fun0008 }
 1190:
                        var1 = var42;
 1193:
                        if(var1) { _fun0008_ip = 1207; continue _fun0008 }
 1196:
                        var1 = new Array(1);
                        var1[0] = var41;
                        var43 = var1;
 1207:
                        var1 = _closure1_slot17;
                        var41 = var1.bind(var8)(var40);
                        var40 = var41.bind(var8)();
                        var1 = var40.done;
                        if(var1) { _fun0008_ip = 1290; continue _fun0008 }
 1228:
                        var42 = var40.value;
                        var45 = var43.includes;
                        var1 = var42.ssrc;
                        var1 = var45.bind(var43)(var1);
                        if(var1) { _fun0008_ip = 1272; continue _fun0008 }
 1252:
                        var1 = _closure3_slot0;
                        var45 = var1.framesReceived;
                        var1 = var42.ssrc;
                        var1 = delete var45[var1];
 1272:
                        var45 = var41.bind(var8)();
                        var1 = var45.done;
                        var40 = var45;
                        var2 = var42;
                        if(!var1) { _fun0008_ip = 1228; continue _fun0008 }
 1290:
                        var1 = var30.includes;
                        var1 = var1.bind(var30)(var44);
                        if(var1) { _fun0008_ip = 1367; continue _fun0008 }
 1303:
                        var40 = _closure3_slot0;
                        var40 = var40.remoteVideoSsrcs;
                        var40 = var40[var44];
                        var40 = var8 !== var40;
                        if(!var40) { _fun0008_ip = 1364; continue _fun0008 }
 1324:
                        var42 = _closure1_slot1;
                        var41 = _closure1_slot2;
                        var41 = var41[var26];
                        var42 = var42.bind(var8)(var41);
                        var41 = _closure3_slot0;
                        var41 = var41.remoteVideoSsrcs;
                        var41 = var41[var44];
                        var41 = var42.bind(var8)(var41, var43);
                        var40 = !var41;
 1364:
                        var1 = var40;
 1367:
                        if(!var1) { _fun0008_ip = 1447; continue _fun0008 }
 1370:
                        var1 = _closure3_slot0;
                        var40 = var1.remoteVideoSsrcs;
                        var1 = new Array(0);
                        var59 = var1;
                        var58 = var43;
                        var57 = 0;
                        var41 = arraySpread(var59, var58, var57);
                        var40[var44] = var1;
                        var42 = _closure3_slot0;
                        var41 = var42.emit;
                        var1 = _closure1_slot16;
                        var59 = var1.UserSSRCUpdate;
                        var1 = _closure3_slot0;
                        var1 = var1.audioSsrcs;
                        var57 = var1[var44];
                        var60 = var42;
                        var58 = var44;
                        var56 = var43;
                        var1 = var60[var41](var59, var58, var57, var56, var55);
 1447:
                        var40 = var27.bind(var8)();
                        var1 = var40.done;
                        var20 = var40;
                        var19 = var39;
                        var18 = var38;
                        var17 = var37;
                        var16 = var36;
                        var15 = var35;
                        var14 = var34;
                        var13 = var33;
                        var12 = var32;
                        var7 = var31;
                        if(!var1) { _fun0008_ip = 228; continue _fun0008 }
 1492:
                        var1 = global;
                        var7 = var1.Object;
                        var2 = var7.entries;
                        var1 = _closure3_slot0;
                        var1 = var1.audioSsrcs;
                        var7 = var2.bind(var7)(var1);
                        var1 = var7.length;
                        var1 = var11 < var1;
                        var2 = 0;
                        if(!var1) { _fun0008_ip = 1604; continue _fun0008 }
 1535:
                        var12 = var7[var2];
                        var1 = _closure1_slot3;
                        var1 = var1.bind(var8)(var12, var9);
                        var15 = var1[var11];
                        var1 = var1[var10];
                        var12 = _closure3_slot0;
                        var14 = var12.connection;
                        var12 = var6 != var14;
                        if(!var12) { _fun0008_ip = 1585; continue _fun0008 }
 1574:
                        var13 = var14.getLocalMute;
                        var12 = var13.bind(var14)(var15);
 1585:
                        if(!var12) { _fun0008_ip = 1592; continue _fun0008 }
 1588:
                        var3[var1] = var11;
 1592:
                        var2 = var2 + 1;
                        var1 = var7.length;
                        if(var2 < var1) { _fun0008_ip = 1535; continue _fun0008 }
 1604:
                        var1 = _closure1_slot15;
                        var2 = _closure3_slot0;
                        if(var1) { _fun0008_ip = 1717; continue _fun0008 }
 1615:
                        var1 = var2.connection;
                        var6 = var6 == var1;
                        if(var6) { _fun0008_ip = 1670; continue _fun0008 }
 1628:
                        var7 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var1 = 15;
                        var1 = var9[var1];
                        var8 = var7.bind(var8)(var1);
                        var7 = var8.isEqual;
                        var1 = _closure3_slot0;
                        var1 = var1.latestWants;
                        var6 = var7.bind(var8)(var1, var3);
 1670:
                        var1 = var3;
                        if(var6) { _fun0008_ip = 1723; continue _fun0008 }
 1676:
                        var6 = _closure3_slot0;
                        var6['latestWants'] = var3;
                        var6 = _closure3_slot0;
                        var5 = var6.emit;
                        var4 = _closure1_slot16;
                        var4 = var4.Update;
                        var4 = var5.bind(var6)(var4, var3);
                        var1 = var3;
                        _fun0008_ip = 1723; continue _fun0008;
 1717:
                        var1 = var2.latestWants;
 1723:
                        return var1;
                    }
                };
                var1['update'] = var4;
                var3 = function() {
                    var2 = _closure3_slot0;
                    var1 = var2.update;
                    var1 = var1.bind(var2)();
                    var1 = undefined;
                    return var1;
                };
                var1['incomingVideoEnabledChanged'] = var3;
                var3 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 16;
                var4 = var7[var2];
                var4 = var3.bind(var6)(var4);
                var9 = var4.DelayedCall;
                var14 = var1.update;
                var4 = var9.prototype;
                var5 = Object.create(var4, {constructor: {value: var9}});
                var15 = 100;
                var16 = var5;
                var4 = new var16[var9](var15, var14, var13);
                var4 = var4 instanceof Object ? var4 : var5;
                var1['delayedCall'] = var4;
                var2 = var7[var2];
                var2 = var3.bind(var6)(var2);
                var2 = var2.Timeout;
                var4 = var2.prototype;
                var4 = Object.create(var4, {constructor: {value: var2}});
                var16 = var4;
                var2 = new var16[var2](var15);
                var2 = var2 instanceof Object ? var2 : var4;
                var1['offscreenTimeout'] = var2;
                var2 = 17;
                var4 = var7[var2];
                var4 = var3.bind(var6)(var4);
                var5 = var4.WindowVisibilityVideoManager;
                var4 = var5.on;
                var2 = var7[var2];
                var2 = var3.bind(var6)(var2);
                var2 = var2.WindowVisibilityEvent;
                var3 = var2.IncomingVideoEnabledChanged;
                var2 = var1.incomingVideoEnabledChanged;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot8;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot5;
        var5 = {};
        var1 = 'getWantsLevel';
        var5['key'] = var1;
        var1 = function value() {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                var4 = arguments[0];
                var1 = this;
                var2 = undefined;
                if(!(var4 === var2)) { _fun0009_ip = 14; continue _fun0009 }
 12:
                var4 = 0;
 14:
                var2 = var1.getVideoParticipantCount;
                var3 = var2.bind(var1)();
                var2 = var1.ladder;
                var1 = var2.getMaxSinkValue;
                var1 = var1.bind(var2)(var3, var4);
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(21);
        var1[0] = var5;
        var5 = {};
        var7 = 'userVideoDisabled';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var1 = this;
            var2 = var1.offscreenDisabledUsers;
            var1 = arg1;
            var1 = var2[var1];
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'isOneToOneCall';
        var5['key'] = var7;
        var7 = function value() {
            var1 = this;
            var1 = var1.otherUsers;
            var2 = var1.size;
            var1 = 1;
            var1 = var1 === var2;
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'updateCallUserIds';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var2 = this;
            var1 = global;
            var4 = var1.Set;
            var1 = var4.prototype;
            var3 = Object.create(var1, {constructor: {value: var4}});
            var6 = arg1;
            var7 = var3;
            var1 = new var7[var4](var6, var5);
            var1 = var1 instanceof Object ? var1 : var3;
            var2['otherUsers'] = var1;
            var4 = var2.otherUsers;
            var3 = var4.delete;
            var5 = _closure1_slot9;
            var1 = var5.getId;
            var1 = var1.bind(var5)();
            var1 = var3.bind(var4)(var1);
            var1 = var2.update;
            var1 = var1.bind(var2)();
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'shouldReceiveFromUser';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                var6 = arg1;
                var4 = this;
                var5 = var4.connection;
                var3 = null;
                var1 = var3 != var5;
                if(!var1) { _fun0010_ip = 32; continue _fun0010 }
 21:
                var2 = var5.getLocalVideoDisabled;
                var1 = var2.bind(var5)(var6);
 32:
                if(var1) { _fun0010_ip = 99; continue _fun0010 }
 35:
                var2 = var4.userVideoDisabled;
                var2 = var2.bind(var4)(var6);
                if(!var2) { _fun0010_ip = 96; continue _fun0010 }
 51:
                var5 = var4.videoHealthManager;
                var3 = var3 == var5;
                var4 = undefined;
                if(var3) { _fun0010_ip = 79; continue _fun0010 }
 66:
                var3 = var5.getCurrentVideoToggleState;
                var4 = var3.bind(var5)(var6);
 79:
                var3 = _closure1_slot10;
                var3 = var3.AUTO_PROBING;
                var2 = var4 !== var3;
 96:
                var1 = var2;
 99:
                var2 = !var1;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 17;
                var3 = var3[var1];
                var1 = undefined;
                var1 = var4.bind(var1)(var3);
                var3 = var1.WindowVisibilityVideoManager;
                var1 = var3.isIncomingVideoEnabled;
                var1 = var1.bind(var3)();
                if(!var1) { _fun0010_ip = 149; continue _fun0010 }
 146:
                var1 = var2;
 149:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getAudioSSRCs';
        var5['key'] = var7;
        var7 = function value() {
            var1 = this;
            var1 = var1.audioSsrcs;
            return var1;
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'setConnection';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                var2 = arguments[1];
                var3 = this;
                var1 = undefined;
                if(!(var2 === var1)) { _fun0011_ip = 14; continue _fun0011 }
 12:
                var2 = true;
 14:
                var8 = var3.connection;
                var4 = null;
                if(!(var4 != var8)) { _fun0011_ip = 79; continue _fun0011 }
 26:
                var7 = var8.removeListener;
                var6 = _closure1_slot0;
                var9 = _closure1_slot2;
                var5 = 18;
                var5 = var9[var5];
                var5 = var6.bind(var1)(var5);
                var5 = var5.BaseConnectionEvent;
                var6 = var5.LocalVideoDisabled;
                var5 = var3.handleLocalVideoDisabled;
                var5 = var7.bind(var8)(var6, var5);
 79:
                var8 = var3.connection;
                if(!(var4 != var8)) { _fun0011_ip = 142; continue _fun0011 }
 89:
                var7 = var8.removeListener;
                var6 = _closure1_slot0;
                var9 = _closure1_slot2;
                var5 = 18;
                var5 = var9[var5];
                var5 = var6.bind(var1)(var5);
                var5 = var5.BaseConnectionEvent;
                var6 = var5.LocalMute;
                var5 = var3.handleLocalMute;
                var5 = var7.bind(var8)(var6, var5);
 142:
                var8 = var3.connection;
                if(!(var4 != var8)) { _fun0011_ip = 205; continue _fun0011 }
 152:
                var7 = var8.removeListener;
                var6 = _closure1_slot0;
                var9 = _closure1_slot2;
                var5 = 18;
                var5 = var9[var5];
                var5 = var6.bind(var1)(var5);
                var5 = var5.BaseConnectionEvent;
                var6 = var5.ActiveSinksChange;
                var5 = var3.delayedUpdate;
                var5 = var7.bind(var8)(var6, var5);
 205:
                var5 = arg1;
                var3['connection'] = var5;
                var8 = var3.connection;
                if(!(var4 != var8)) { _fun0011_ip = 277; continue _fun0011 }
 224:
                var7 = var8.addListener;
                var6 = _closure1_slot0;
                var9 = _closure1_slot2;
                var5 = 18;
                var5 = var9[var5];
                var5 = var6.bind(var1)(var5);
                var5 = var5.BaseConnectionEvent;
                var6 = var5.LocalVideoDisabled;
                var5 = var3.handleLocalVideoDisabled;
                var5 = var7.bind(var8)(var6, var5);
 277:
                var8 = var3.connection;
                if(!(var4 != var8)) { _fun0011_ip = 340; continue _fun0011 }
 287:
                var7 = var8.addListener;
                var6 = _closure1_slot0;
                var9 = _closure1_slot2;
                var5 = 18;
                var5 = var9[var5];
                var5 = var6.bind(var1)(var5);
                var5 = var5.BaseConnectionEvent;
                var6 = var5.LocalMute;
                var5 = var3.handleLocalMute;
                var5 = var7.bind(var8)(var6, var5);
 340:
                var7 = var3.connection;
                if(!(var4 != var7)) { _fun0011_ip = 403; continue _fun0011 }
 350:
                var6 = var7.addListener;
                var5 = _closure1_slot0;
                var8 = _closure1_slot2;
                var4 = 18;
                var4 = var8[var4];
                var4 = var5.bind(var1)(var4);
                var4 = var4.BaseConnectionEvent;
                var5 = var4.ActiveSinksChange;
                var4 = var3.delayedUpdate;
                var4 = var6.bind(var7)(var5, var4);
 403:
                if(!var2) { _fun0011_ip = 416; continue _fun0011 }
 406:
                var2 = var3.update;
                var2 = var2.bind(var3)();
 416:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'setAudioSSRC';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                var4 = arg1;
                var3 = arg2;
                var2 = this;
                var1 = 0;
                if(!(!(var3 > var1))) { _fun0012_ip = 27; continue _fun0012 }
 15:
                var1 = var2.audioSsrcs;
                var1 = delete var1[var4];
                _fun0012_ip = 37; continue _fun0012;
 27:
                var1 = var2.audioSsrcs;
                var1[var4] = var3;
 37:
                var1 = var2.update;
                var1 = var1.bind(var2)();
                return var1;
            }
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'setVideoSSRCs';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                var4 = arg1;
                var6 = arg2;
                var3 = this;
                var5 = var6.filter;
                var2 = function(arg1) {
                    _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                        var2 = arg1;
                        var1 = var2.active;
                        if(!var1) { _fun0014_ip = 38; continue _fun0014 }
 12:
                        var4 = var2.ssrc;
                        var2 = null;
                        var5 = var2 != var4;
                        var3 = 0;
                        var2 = 0;
                        if(!var5) { _fun0014_ip = 34; continue _fun0014 }
 31:
                        var2 = var4;
 34:
                        var1 = var2 > var3;
 38:
                        return var1;
                    }
                };
                var5 = var5.bind(var6)(var2);
                var2 = var5.map;
                var1 = function(arg1) {
                    _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                        var2 = arg1;
                        var1 = {};
                        var4 = var2.quality;
                        var3 = null;
                        var5 = var3 != var4;
                        var3 = 100;
                        if(!var5) { _fun0015_ip = 26; continue _fun0015 }
 23:
                        var3 = var4;
 26:
                        var1['quality'] = var3;
                        var2 = var2.ssrc;
                        var1['ssrc'] = var2;
                        return var1;
                    }
                };
                var2 = var2.bind(var5)(var1);
                var5 = var2.length;
                var1 = 0;
                if(!(!(var5 > var1))) { _fun0013_ip = 226; continue _fun0013 }
 59:
                var1 = var3.videoSsrcs;
                var1 = var1[var4];
                var7 = undefined;
                if(!(var7 !== var1)) { _fun0013_ip = 145; continue _fun0013 }
 75:
                var5 = _closure1_slot17;
                var1 = var3.videoSsrcs;
                var1 = var1[var4];
                var6 = var5.bind(var7)(var1);
                var5 = var6.bind(var7)();
                var1 = var5.done;
                if(var1) { _fun0013_ip = 145; continue _fun0013 }
 109:
                var1 = var5.value;
                var8 = var1.ssrc;
                var1 = var3.framesReceived;
                var1 = delete var1[var8];
                var8 = var6.bind(var7)();
                var1 = var8.done;
                var5 = var8;
                if(!var1) { _fun0013_ip = 109; continue _fun0013 }
 145:
                var1 = var3.remoteVideoSsrcs;
                var1 = delete var1[var4];
                var1 = var3.videoSsrcs;
                var1 = delete var1[var4];
                var5 = var3.participants;
                var1 = var5.delete;
                var1 = var1.bind(var5)(var4);
                var7 = var3.emit;
                var1 = _closure1_slot16;
                var12 = var1.UserSSRCUpdate;
                var1 = var3.audioSsrcs;
                var10 = var1[var4];
                var9 = new Array(0);
                var13 = var3;
                var11 = var4;
                var1 = var13[var7](var12, var11, var10, var9, var8);
                _fun0013_ip = 252; continue _fun0013;
 226:
                var1 = var3.videoSsrcs;
                var1[var4] = var2;
                var2 = var3.participants;
                var1 = var2.add;
                var1 = var1.bind(var2)(var4);
 252:
                var2 = var3.update;
                var1 = global;
                var5 = var1.Array;
                var4 = var5.from;
                var1 = var3.participants;
                var1 = var4.bind(var5)(var1);
                var1 = var2.bind(var3)(var1);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'setFirstFrameReceived';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var2 = this;
            var4 = var2.framesReceived;
            var3 = true;
            var1 = arg1;
            var4[var1] = var3;
            var1 = var2.update;
            var1 = var1.bind(var2)();
            return var1;
        };
        var5['value'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'setStreamId';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                var4 = arg1;
                var3 = arg2;
                var2 = this;
                var1 = null;
                if(!(var1 == var3)) { _fun0016_ip = 60; continue _fun0016 }
 15:
                var1 = var2.streamIds;
                var1 = var4 in var1;
                if(!var1) { _fun0016_ip = 48; continue _fun0016 }
 28:
                var5 = var2.streamPixelCounts;
                var1 = var2.streamIds;
                var1 = var1[var4];
                var1 = delete var5[var1];
 48:
                var1 = var2.streamIds;
                var1 = delete var1[var4];
                _fun0016_ip = 70; continue _fun0016;
 60:
                var1 = var2.streamIds;
                var1[var4] = var3;
 70:
                var1 = var2.update;
                var1 = var1.bind(var2)();
                return var1;
            }
        };
        var5['value'] = var7;
        var1[10] = var5;
        var5 = {};
        var7 = 'destroyUser';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var2 = arg1;
            var3 = this;
            var1 = var3.audioSsrcs;
            var1 = delete var1[var2];
            var1 = var3.videoSsrcs;
            var1 = delete var1[var2];
            var4 = var3.participants;
            var1 = var4.delete;
            var1 = var1.bind(var4)(var2);
            var4 = var3.streamPixelCounts;
            var1 = var3.streamIds;
            var1 = var1[var2];
            var1 = delete var4[var1];
            var1 = var3.streamIds;
            var1 = delete var1[var2];
            var2 = var3.update;
            var1 = global;
            var5 = var1.Array;
            var4 = var5.from;
            var1 = var3.participants;
            var1 = var4.bind(var5)(var1);
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[11] = var5;
        var5 = {};
        var7 = 'reset';
        var5['key'] = var7;
        var7 = function value() {
            var2 = this;
            var4 = var2.setConnection;
            var3 = null;
            var1 = false;
            var1 = var4.bind(var2)(var3, var1);
            var1 = {};
            var2['audioSsrcs'] = var1;
            var1 = {};
            var2['videoSsrcs'] = var1;
            var1 = {};
            var2['remoteVideoSsrcs'] = var1;
            var1 = {};
            var2['framesReceived'] = var1;
            var1 = {};
            var2['streamIds'] = var1;
            var1 = {};
            var2['streamPixelCounts'] = var1;
            var3 = _closure1_slot12;
            var2['latestWants'] = var3;
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 17;
            var4 = var7[var3];
            var1 = undefined;
            var4 = var6.bind(var1)(var4);
            var5 = var4.WindowVisibilityVideoManager;
            var4 = var5.off;
            var3 = var7[var3];
            var3 = var6.bind(var1)(var3);
            var3 = var3.WindowVisibilityEvent;
            var3 = var3.IncomingVideoEnabledChanged;
            var2 = var2.incomingVideoEnabledChanged;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        };
        var5['value'] = var7;
        var1[12] = var5;
        var5 = {};
        var7 = 'setSelectedParticipant';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
                var4 = arg1;
                var1 = this;
                var _closure3_slot0 = var1;
                var3 = var1.selectedParticipantId;
                if(!(var4 !== var3)) { _fun0017_ip = 180; continue _fun0017 }
 25:
                var5 = new Array(0);
                var6 = var1.selectedParticipantId;
                var3 = null;
                var6 = var3 != var6;
                if(!var6) { _fun0017_ip = 59; continue _fun0017 }
 44:
                var8 = var1.selectedParticipantId;
                var7 = var1.userId;
                var6 = var8 !== var7;
 59:
                if(!var6) { _fun0017_ip = 78; continue _fun0017 }
 62:
                var7 = var5.push;
                var6 = var1.selectedParticipantId;
                var6 = var7.bind(var5)(var6);
 78:
                if(!(var3 == var4)) { _fun0017_ip = 90; continue _fun0017 }
 82:
                var1['selectedParticipantId'] = var3;
                _fun0017_ip = 150; continue _fun0017;
 90:
                var6 = var1.participants;
                var3 = var6.has;
                var3 = var3.bind(var6)(var4);
                if(var3) { _fun0017_ip = 134; continue _fun0017 }
 109:
                var3 = var1.userId;
                if(!(var3 === var4)) { _fun0017_ip = 126; continue _fun0017 }
 118:
                var1['selectedParticipantId'] = var4;
                _fun0017_ip = 150; continue _fun0017;
 126:
                var3 = var1.latestWants;
                return var3;
 134:
                var1['selectedParticipantId'] = var4;
                var3 = var5.push;
                var3 = var3.bind(var5)(var4);
 150:
                var3 = var1.update;
                var4 = var5.filter;
                var2 = function(arg1) {
                    _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
                        var1 = _closure3_slot0;
                        var2 = var1.videoSsrcs;
                        var1 = arg1;
                        var1 = var2[var1];
                        var2 = null;
                        var3 = var2 == var1;
                        var2 = undefined;
                        if(var3) { _fun0018_ip = 36; continue _fun0018 }
 31:
                        var2 = var1.length;
 36:
                        var1 = 1;
                        var1 = var2 > var1;
                        return var1;
                    }
                };
                var2 = var4.bind(var5)(var2);
                var2 = var3.bind(var1)(var2);
                return var2;
 180:
                var1 = var1.latestWants;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[13] = var5;
        var5 = {};
        var7 = 'setPipOpen';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
                var4 = this;
                var1 = arg1;
                var4['pipOpen'] = var1;
                var2 = var4.selectedParticipantId;
                var1 = null;
                if(!(var1 == var2)) { _fun0019_ip = 32; continue _fun0019 }
 24:
                var1 = var4.latestWants;
                _fun0019_ip = 57; continue _fun0019;
 32:
                var3 = var4.update;
                var5 = var4.selectedParticipantId;
                var2 = new Array(1);
                var2[0] = var5;
                var1 = var3.bind(var4)(var2);
 57:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[14] = var5;
        var5 = {};
        var7 = 'getOffscreenDisabledUsers';
        var5['key'] = var7;
        var7 = function value() {
            var1 = this;
            var1 = var1.offscreenDisabledUsers;
            return var1;
        };
        var5['value'] = var7;
        var1[15] = var5;
        var5 = {};
        var7 = 'setSimulcastDebugOverride';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            var2 = this;
            var5 = var2.simulcastDebugOverrides;
            var4 = var5.set;
            var3 = arg1;
            var1 = arg2;
            var1 = var4.bind(var5)(var3, var1);
            var1 = var2.update;
            var1 = var1.bind(var2)();
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[16] = var5;
        var5 = {};
        var7 = 'setVideoSize';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
 0:
                var4 = arg1;
                var3 = arg2;
                var2 = this;
                var1 = 0;
                if(!(!(var3 > var1))) { _fun0020_ip = 27; continue _fun0020 }
 15:
                var1 = var2.streamPixelCounts;
                var1 = delete var1[var4];
                _fun0020_ip = 37; continue _fun0020;
 27:
                var1 = var2.streamPixelCounts;
                var1[var4] = var3;
 37:
                var1 = var2.delayedUpdate;
                var1 = var1.bind(var2)();
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[17] = var5;
        var5 = {};
        var7 = 'getVideoParticipantCount';
        var5['key'] = var7;
        var7 = function value() {
            _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
 0:
                var7 = this;
                var1 = global;
                var3 = var1.Object;
                var2 = var3.keys;
                var1 = var7.videoSsrcs;
                var6 = var2.bind(var3)(var1);
                var2 = var6.length;
                var1 = 0;
                var2 = var1 < var2;
                var5 = null;
                var4 = 0;
                var3 = 0;
                if(!var2) { _fun0021_ip = 102; continue _fun0021 }
 47:
                var10 = var6[var3];
                var9 = var7.connection;
                var2 = var5 != var9;
                if(!var2) { _fun0021_ip = 75; continue _fun0021 }
 64:
                var8 = var9.getLocalVideoDisabled;
                var2 = var8.bind(var9)(var10);
 75:
                var8 = var4;
                if(var2) { _fun0021_ip = 84; continue _fun0021 }
 81:
                var8 = var4 + 1;
 84:
                var3 = var3 + 1;
                var2 = var6.length;
                var4 = var8;
                var1 = var4;
                if(var3 < var2) { _fun0021_ip = 47; continue _fun0021 }
 102:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[18] = var5;
        var5 = {};
        var7 = 'getOffscreenTimeoutMs';
        var5['key'] = var7;
        var7 = function value() {
            _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
 0:
                var1 = this;
                var1 = var1.isStageChannel;
                if(var1) { _fun0022_ip = 21; continue _fun0022 }
 15:
                var1 = _closure1_slot13;
                _fun0022_ip = 25; continue _fun0022;
 21:
                var1 = _closure1_slot14;
 25:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[19] = var5;
        var5 = {};
        var7 = 'getSimulcastOverrideQuality';
        var5['key'] = var7;
        var6 = function value(arg1) {
            _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
 0:
                var4 = arg1;
                var2 = this;
                var3 = var2.simulcastDebugOverrides;
                var1 = var3.has;
                var1 = var1.bind(var3)(var4);
                if(var1) { _fun0023_ip = 40; continue _fun0023 }
 25:
                var1 = _closure1_slot11;
                var1 = var1.NO_OVERRIDE;
                _fun0023_ip = 56; continue _fun0023;
 40:
                var3 = var2.simulcastDebugOverrides;
                var2 = var3.get;
                var1 = var2.bind(var3)(var4);
 56:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[20] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var5 = var5.bind(var1)(var6);
    var6 = 20;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'lib/RTCMediaSinkWantsManager.tsx';
    var6 = var7.bind(var8)(var6);
    var3['default'] = var5;
    var3['DEFAULT_WANTS_FULL'] = var4;
    var3['RTCMediaSinkWantsManagerEvent'] = var2;
    return var1;
})();