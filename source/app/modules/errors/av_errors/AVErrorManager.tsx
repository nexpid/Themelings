// app/modules/errors/av_errors/AVErrorManager.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
 72: // try_end0
            _fun0001_ip = 76; continue _fun0001;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot15 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot15 = var1;
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
            if(!var2) { _fun0002_ip = 46; continue _fun0002 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 46:
            if(var2) { _fun0002_ip = 55; continue _fun0002 }
 49:
            var2 = var3.@@iterator;
 55:
            if(var2) { _fun0002_ip = 345; continue _fun0002 }
 61:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0002_ip = 323; continue _fun0002 }
 86:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0002_ip = 283; continue _fun0002 }
 96:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0002_ip = 270; continue _fun0002 }
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
            if(!var7) { _fun0002_ip = 163; continue _fun0002 }
 158:
            var7 = var3.constructor;
 163:
            var10 = var9;
            if(!var7) { _fun0002_ip = 179; continue _fun0002 }
 169:
            var7 = var3.constructor;
            var10 = var7.name;
 179:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0002_ip = 249; continue _fun0002 }
 187:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0002_ip = 249; continue _fun0002 }
 195:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0002_ip = 234; continue _fun0002 }
 205:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0002_ip = 247; continue _fun0002 }
 234:
            var9 = _closure1_slot17;
            var7 = var9.bind(var8)(var3, var8);
 247:
            _fun0002_ip = 265; continue _fun0002;
 249:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 265:
            var6 = var7;
            _fun0002_ip = 283; continue _fun0002;
 270:
            var7 = _closure1_slot17;
            var6 = var7.bind(var8)(var3, var8);
 283:
            var4 = var6;
            if(var4) { _fun0002_ip = 323; continue _fun0002 }
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
            if(!var4) { _fun0002_ip = 330; continue _fun0002 }
 326:
            _closure2_slot0 = var4;
 330:
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
 345:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot16 = var1;
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
    var _closure1_slot17 = var1;
    var1 = function setDifference(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var6 = arg2;
            var1 = global;
            var1 = var1.Set;
            var2 = var1.prototype;
            var2 = Object.create(var2, {constructor: {value: var1}});
            var9 = var2;
            var1 = new var9[var1](var8);
            var1 = var1 instanceof Object ? var1 : var2;
            var3 = _closure1_slot16;
            var5 = undefined;
            var2 = arg1;
            var4 = var3.bind(var5)(var2);
            var3 = var4.bind(var5)();
            var2 = var3.done;
            if(var2) { _fun0005_ip = 103; continue _fun0005 }
 60:
            var7 = var3.value;
            var2 = var6.has;
            var2 = var2.bind(var6)(var7);
            if(var2) { _fun0005_ip = 88; continue _fun0005 }
 78:
            var2 = var1.add;
            var2 = var2.bind(var1)(var7);
 88:
            var7 = var4.bind(var5)();
            var2 = var7.done;
            var3 = var7;
            if(!var2) { _fun0005_ip = 60; continue _fun0005 }
 103:
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var1 = function makeErrorKey(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var3 = arg1;
            var2 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 11;
            var1 = var4[var1];
            var4 = undefined;
            var1 = var2.bind(var4)(var1);
            var2 = var1.ErrorDefinitions;
            var1 = var3.type;
            var2 = var2[var1];
            var5 = var3.type;
            var1 = null;
            var1 = var1 == var2;
            if(var1) { _fun0006_ip = 68; continue _fun0006 }
 57:
            var1 = var2.makeErrorContextKey;
            var4 = var1.bind(var2)(var3);
 68:
            var1 = global;
            var1 = var1.HermesInternal;
            var3 = var1.concat;
            var2 = '';
            var1 = ':';
            var1 = var3.bind(var2)(var5, var1, var4);
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var1 = ['type'];
    var _closure1_slot3 = var1;
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
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot12 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot13 = var4;
    var4 = 10;
    var4 = var6[var4];
    var9 = var7.bind(var1)(var4);
    var4 = var9.prototype;
    var8 = Object.create(var4, {constructor: {value: var9}});
    var12 = 'AVErrorManager';
    var13 = var8;
    var4 = new var13[var9](var12, var11);
    var4 = var4 instanceof Object ? var4 : var8;
    var _closure1_slot14 = var4;
    var4 = 16;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var2 = function(arg1) {
        var4 = function AVErrorManager(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var4 = this;
                var12 = 0;
                var1 = copyRestArgs(var12);
                var7 = _closure1_slot5;
                var2 = _closure2_slot0;
                var3 = undefined;
                var7 = var7.bind(var3)(var4, var2);
                var9 = new Array(0);
                var12 = var9;
                var11 = var1;
                var10 = 0;
                var1 = arraySpread(var12, var11, var10);
                var1 = _closure1_slot8;
                var8 = var1.bind(var3)(var2);
                var2 = _closure1_slot7;
                var1 = _closure1_slot15;
                var1 = var1.bind(var3)();
                if(var1) { _fun0007_ip = 84; continue _fun0007 }
 71:
                var1 = var8.apply;
                var1 = var1.bind(var8)(var4, var9);
                _fun0007_ip = 118; continue _fun0007;
 84:
                var6 = global;
                var7 = var6.Reflect;
                var6 = var7.construct;
                var5 = _closure1_slot8;
                var5 = var5.bind(var3)(var4);
                var5 = var5.constructor;
                var1 = var6.bind(var7)(var8, var9, var5);
 118:
                var1 = var2.bind(var3)(var4, var1);
                var2 = {};
                var3 = var1.updateActiveErrors;
                var2['MEDIA_ENGINE_SET_AUDIO_ENABLED'] = var3;
                var3 = var1.updateActiveErrors;
                var2['AUDIO_INPUT_DETECTED'] = var3;
                var3 = var1.updateActiveErrors;
                var2['AUDIO_SET_DISPLAY_SILENCE_WARNING'] = var3;
                var3 = var1.updateActiveErrors;
                var2['CERTIFIED_DEVICES_SET'] = var3;
                var3 = var1.updateActiveErrors;
                var2['AUDIO_SET_INPUT_DEVICE'] = var3;
                var3 = var1.updateActiveErrors;
                var2['AUDIO_SET_OUTPUT_DEVICE'] = var3;
                var3 = var1.updateActiveErrors;
                var2['MEDIA_ENGINE_DEVICES'] = var3;
                var3 = var1.updateActiveErrors;
                var2['RTC_CONNECTION_STATE'] = var3;
                var3 = var1.updateActiveErrors;
                var2['VOICE_STATE_UPDATES'] = var3;
                var3 = var1.updateActiveErrors;
                var2['MEDIA_ENGINE_SET_GO_LIVE_SOURCE'] = var3;
                var3 = var1.updateActiveErrors;
                var2['MEDIA_ENGINE_SOUNDSHARE_FAILED'] = var3;
                var3 = var1.updateActiveErrors;
                var2['MEDIA_ENGINE_NOISE_CANCELLATION_ERROR'] = var3;
                var3 = var1.updateActiveErrors;
                var2['MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR'] = var3;
                var3 = var1.updateActiveErrors;
                var2['MEDIA_ENGINE_VIDEO_STATE_CHANGED'] = var3;
                var3 = var1.updateActiveErrors;
                var2['NATIVE_SCREEN_SHARE_PICKER_UPDATE'] = var3;
                var3 = var1.updateActiveErrors;
                var2['NATIVE_SCREEN_SHARE_PICKER_ERROR'] = var3;
                var3 = var1.updateActiveErrors;
                var2['MEDIA_SESSION_JOINED'] = var3;
                var3 = var1.updateActiveErrors;
                var2['RTC_CONNECTION_UPDATE_ID'] = var3;
                var3 = var1.updateActiveErrors;
                var2['RTC_CONNECTION_VIDEO'] = var3;
                var3 = var1.updateActiveErrors;
                var2['RTC_CONNECTION_REMOTE_VIDEO_SINK_WANTS'] = var3;
                var3 = var1.updateActiveErrors;
                var2['VIDEO_STREAM_READY_TIMEOUT'] = var3;
                var3 = var1.updateActiveErrors;
                var2['CLEAR_VIDEO_STREAM_READY_TIMEOUT'] = var3;
                var3 = var1.handleReportAVError;
                var2['REPORT_AV_ERROR'] = var3;
                var3 = var1.updateActiveErrors;
                var2['STREAM_CLOSE'] = var3;
                var1['actions'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot9;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot6;
        var5 = {};
        var1 = '_initialize';
        var5['key'] = var1;
        var1 = function value() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 12;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.trackAVErrorExposure;
            var2 = 'AVErrorManager';
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'updateActiveErrors';
        var5['key'] = var7;
        var7 = function value() {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                var3 = _closure1_slot11;
                var1 = var3.getVoiceChannelId;
                var1 = var1.bind(var3)();
                var11 = null;
                var3 = var11 != var1;
                var14 = null;
                if(!var3) { _fun0008_ip = 31; continue _fun0008 }
 28:
                var14 = var1;
 31:
                var1 = var11 != var14;
                var13 = null;
                if(!var1) { _fun0008_ip = 67; continue _fun0008 }
 40:
                var3 = _closure1_slot12;
                var1 = var3.getVoiceStateForChannel;
                var1 = var1.bind(var3)(var14);
                var3 = var11 != var1;
                var13 = null;
                if(!var3) { _fun0008_ip = 67; continue _fun0008 }
 64:
                var13 = var1;
 67:
                var3 = _closure1_slot10;
                var1 = var3.getAllActiveStreams;
                var12 = var1.bind(var3)();
                var10 = global;
                var1 = var10.Map;
                var3 = var1.prototype;
                var3 = Object.create(var3, {constructor: {value: var1}});
                var22 = var3;
                var1 = new var22[var1](var21);
                var5 = var1 instanceof Object ? var1 : var3;
                var6 = var10.Object;
                var4 = var6.values;
                var7 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 11;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var7.bind(var1)(var3);
                var3 = var3.ErrorDefinitions;
                var9 = var4.bind(var6)(var3);
                var3 = var9.length;
                var4 = 0;
                var3 = var4 < var3;
                var8 = 0;
                var7 = undefined;
                var6 = undefined;
                if(!var3) { _fun0008_ip = 300; continue _fun0008 }
 176:
                var16 = var9[var8];
                var15 = var16.getActiveErrors;
                var3 = {};
                var3['voiceChannelId'] = var14;
                var3['voiceState'] = var13;
                var3['activeStreams'] = var12;
                var15 = var15.bind(var16)(var3);
                if(!(var11 != var15)) { _fun0008_ip = 288; continue _fun0008 }
 212:
                var3 = _closure1_slot16;
                var16 = var3.bind(var1)(var15);
                var17 = var16.bind(var1)();
                var3 = var17.done;
                var15 = var17;
                var7 = var15;
                var6 = var16;
                if(var3) { _fun0008_ip = 288; continue _fun0008 }
 242:
                var18 = var15.value;
                var17 = var5.set;
                var3 = _closure1_slot19;
                var3 = var3.bind(var1)(var18);
                var3 = var17.bind(var5)(var3, var18);
                var17 = var16.bind(var1)();
                var3 = var17.done;
                var15 = var17;
                var7 = var15;
                var6 = var16;
                if(!var3) { _fun0008_ip = 242; continue _fun0008 }
 288:
                var8 = var8 + 1;
                var3 = var9.length;
                if(var8 < var3) { _fun0008_ip = 176; continue _fun0008 }
 300:
                var6 = _closure1_slot13;
                var3 = var6.getActiveErrors;
                var9 = var3.bind(var6)();
                var3 = var10.Map;
                var3 = var9 instanceof var3;
                if(var3) { _fun0008_ip = 402; continue _fun0008 }
 327:
                var7 = _closure1_slot14;
                var6 = var7.error;
                var3 = var10.Object;
                var3 = var3.prototype;
                var8 = var3.toString;
                var3 = var8.call;
                var13 = var3.bind(var8)(var9);
                var3 = var10.HermesInternal;
                var12 = var3.concat;
                var8 = 'existingErrors is not a Map: ';
                var3 = ' type: ';
                var3 = var12.bind(var8)(var9, var3, var13);
                var3 = var6.bind(var7)(var3);
                _fun0008_ip = 811; continue _fun0008;
 402:
                var3 = var5.size;
                if(!(var4 === var3)) { _fun0008_ip = 423; continue _fun0008 }
 411:
                var3 = var9.size;
                if(!(var4 !== var3)) { _fun0008_ip = 811; continue _fun0008 }
 423:
                var6 = var10.Set;
                var3 = var5.keys;
                var21 = var3.bind(var5)();
                var4 = var6.prototype;
                var4 = Object.create(var4, {constructor: {value: var6}});
                var22 = var4;
                var3 = new var22[var6](var21, var20);
                var7 = var3 instanceof Object ? var3 : var4;
                var6 = var10.Set;
                var3 = var9.keys;
                var21 = var3.bind(var9)();
                var4 = var6.prototype;
                var4 = Object.create(var4, {constructor: {value: var6}});
                var22 = var4;
                var3 = new var22[var6](var21, var20);
                var6 = var3 instanceof Object ? var3 : var4;
                var4 = var7.size;
                var3 = var6.size;
                if(!(var4 > var3)) { _fun0008_ip = 603; continue _fun0008 }
 507:
                var4 = _closure1_slot16;
                var3 = _closure1_slot18;
                var3 = var3.bind(var1)(var7, var6);
                var12 = var4.bind(var1)(var3);
                var4 = var12.bind(var1)();
                var3 = var4.done;
                var8 = 13;
                if(var3) { _fun0008_ip = 603; continue _fun0008 }
 541:
                var13 = var4.value;
                var3 = var5.get;
                var14 = var3.bind(var5)(var13);
                if(!(var11 != var14)) { _fun0008_ip = 588; continue _fun0008 }
 560:
                var13 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var8];
                var13 = var13.bind(var1)(var3);
                var3 = var13.reportAVError;
                var3 = var3.bind(var13)(var14);
 588:
                var13 = var12.bind(var1)();
                var3 = var13.done;
                var4 = var13;
                if(!var3) { _fun0008_ip = 541; continue _fun0008 }
 603:
                var4 = var6.size;
                var3 = var7.size;
                if(!(var4 > var3)) { _fun0008_ip = 764; continue _fun0008 }
 620:
                var4 = _closure1_slot16;
                var3 = _closure1_slot18;
                var3 = var3.bind(var1)(var6, var7);
                var8 = var4.bind(var1)(var3);
                var4 = var8.bind(var1)();
                var3 = var4.done;
                var7 = 'Error resolved: ';
                var6 = ' ';
                if(var3) { _fun0008_ip = 764; continue _fun0008 }
 661:
                var12 = var4.value;
                var3 = var9.get;
                var13 = var3.bind(var9)(var12);
                if(!(var11 != var13)) { _fun0008_ip = 749; continue _fun0008 }
 680:
                var15 = var13.type;
                var12 = _closure1_slot4;
                var3 = _closure1_slot3;
                var16 = var12.bind(var1)(var13, var3);
                var13 = _closure1_slot14;
                var12 = var13.info;
                var14 = var10.JSON;
                var3 = var14.stringify;
                var14 = var3.bind(var14)(var16);
                var3 = var10.HermesInternal;
                var3 = var3.concat;
                var3 = var3.bind(var7)(var15, var6, var14);
                var3 = var12.bind(var13)(var3);
 749:
                var12 = var8.bind(var1)();
                var3 = var12.done;
                var4 = var12;
                if(!var3) { _fun0008_ip = 661; continue _fun0008 }
 764:
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 14;
                var2 = var4[var2];
                var4 = var3.bind(var1)(var2);
                var3 = var4.dispatch;
                var2 = {};
                var6 = 'ACTIVE_AV_ERRORS_CHANGED';
                var2['type'] = var6;
                var2['activeErrors'] = var5;
                var2 = var3.bind(var4)(var2);
 811:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'handleReportAVError';
        var5['key'] = var7;
        var6 = function value(arg1) {
            var1 = arg1;
            var5 = var1.error;
            var4 = var1.context;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 15;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.sendAVErrorAnalyticsEvent;
            var2 = var2.bind(var3)(var5, var4);
            return var1;
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var13 = var4;
    var2 = new var13[var2](var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 17;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/errors/av_errors/AVErrorManager.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();