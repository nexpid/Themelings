// discord_common/js/packages/media-engine/BaseConnection.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
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
            if(var2) { _fun0001_ip = 343; continue _fun0001 }
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
 343:
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
 70: // try_end0
            _fun0004_ip = 74; continue _fun0004;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
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
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var6);
    var6 = 0;
    var8 = var5[var6];
    var1 = undefined;
    var8 = var7.bind(var1)(var8);
    var _closure1_slot3 = var8;
    var8 = 1;
    var8 = var5[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot4 = var8;
    var8 = 2;
    var8 = var5[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot5 = var8;
    var8 = 3;
    var8 = var5[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot6 = var8;
    var8 = 4;
    var8 = var5[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot7 = var8;
    var8 = 5;
    var8 = var5[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot8 = var8;
    var8 = 6;
    var8 = var5[var8];
    var8 = var4.bind(var1)(var8);
    var9 = var8.ConnectionStates;
    var _closure1_slot9 = var9;
    var9 = var8.DEFAULT_VOICE_BITRATE;
    var _closure1_slot10 = var9;
    var9 = var8.MediaTypes;
    var _closure1_slot11 = var9;
    var9 = var8.ResolutionTypes;
    var _closure1_slot12 = var9;
    var9 = var8.MediaEngineContextTypes;
    var _closure1_slot13 = var9;
    var9 = var8.VIDEO_QUALITY_FRAMERATE;
    var _closure1_slot14 = var9;
    var8 = var8.SIMULCAST_HQ_QUALITY;
    var _closure1_slot15 = var8;
    var _closure1_slot16 = var6;
    var6 = 11;
    var6 = var5[var6];
    var6 = var7.bind(var1)(var6);
    var2 = function(arg1) {
        var4 = function BaseConnection(arg1, arg2) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var7 = arg1;
                var5 = this;
                var1 = _closure1_slot4;
                var3 = _closure2_slot1;
                var4 = undefined;
                var1 = var1.bind(var4)(var5, var3);
                var1 = _closure1_slot7;
                var11 = var1.bind(var4)(var3);
                var3 = _closure1_slot6;
                var1 = _closure1_slot19;
                var1 = var1.bind(var4)();
                if(var1) { _fun0005_ip = 65; continue _fun0005 }
 52:
                var1 = var11.apply;
                var1 = var1.bind(var11)(var5, var4);
                _fun0005_ip = 103; continue _fun0005;
 65:
                var6 = global;
                var10 = var6.Reflect;
                var9 = var10.construct;
                var6 = _closure1_slot7;
                var6 = var6.bind(var4)(var5);
                var8 = var6.constructor;
                var6 = new Array(0);
                var1 = var9.bind(var10)(var11, var6, var8);
 103:
                var1 = var3.bind(var4)(var5, var1);
                var3 = _closure1_slot16;
                var5 = parseFloat(var3);
                var3 = var5 + 1;
                _closure1_slot16 = var3;
                var3 = 'WebRTC-';
                var3 = var3 + var5;
                var1['mediaEngineConnectionId'] = var3;
                var5 = false;
                var1['destroyed'] = var5;
                var3 = 0;
                var1['audioSSRC'] = var3;
                var1['videoSSRC'] = var3;
                var1['selfDeaf'] = var5;
                var1['selfMute'] = var5;
                var3 = {};
                var1['localMutes'] = var3;
                var3 = {};
                var1['disabledLocalVideos'] = var3;
                var3 = {};
                var1['localVolumes'] = var3;
                var1['isActiveOutputSinksEnabled'] = var5;
                var3 = global;
                var6 = var3.Map;
                var8 = var6.prototype;
                var8 = Object.create(var8, {constructor: {value: var6}});
                var15 = var8;
                var6 = new var15[var6](var14);
                var6 = var6 instanceof Object ? var6 : var8;
                var1['activeOutputSinks'] = var6;
                var1['videoSupported'] = var5;
                var1['useElectronVideo'] = var5;
                var6 = _closure1_slot10;
                var1['voiceBitrate'] = var6;
                var6 = _closure1_slot14;
                var1['remoteSinkWantsMaxFramerate'] = var6;
                var6 = var3.Set;
                var8 = var6.prototype;
                var8 = Object.create(var8, {constructor: {value: var6}});
                var15 = var8;
                var6 = new var15[var6](var14);
                var6 = var6 instanceof Object ? var6 : var8;
                var1['wantsPriority'] = var6;
                var6 = {};
                var1['localSpeakingFlags'] = var6;
                var1['videoReady'] = var5;
                var5 = new Array(0);
                var1['videoStreamParameters'] = var5;
                var5 = {};
                var6 = 100;
                var5['any'] = var6;
                var1['remoteVideoSinkWants'] = var5;
                var5 = {};
                var5['any'] = var6;
                var1['localVideoSinkWants'] = var5;
                var5 = _closure1_slot9;
                var5 = var5.CONNECTING;
                var1['connectionState'] = var5;
                var5 = function() {
                    var1 = undefined;
                    return var1;
                };
                var1['onDesktopEncodingOptionsSet'] = var5;
                var3 = var3.Set;
                var5 = var3.prototype;
                var5 = Object.create(var5, {constructor: {value: var3}});
                var15 = var5;
                var3 = new var15[var3](var14);
                var3 = var3 instanceof Object ? var3 : var5;
                var1['experimentFlags'] = var3;
                var1['context'] = var7;
                var3 = arg2;
                var1['userId'] = var3;
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 7;
                var2 = var5[var2];
                var2 = var3.bind(var4)(var2);
                var2 = var2.VideoQualityManager;
                var6 = var2.prototype;
                var6 = Object.create(var6, {constructor: {value: var2}});
                var15 = var6;
                var14 = var7;
                var13 = var1;
                var2 = new var15[var2](var14, var13, var12);
                var2 = var2 instanceof Object ? var2 : var6;
                var1['videoQualityManager'] = var2;
                var2 = 8;
                var2 = var5[var2];
                var2 = var3.bind(var4)(var2);
                var4 = var2.default;
                var13 = var1.videoQualityManager;
                var3 = var4.prototype;
                var3 = Object.create(var3, {constructor: {value: var4}});
                var15 = var3;
                var14 = var1;
                var2 = new var15[var4](var14, var13, var12);
                var2 = var2 instanceof Object ? var2 : var3;
                var1['framerateReducer'] = var2;
                return var1;
            }
        };
        var _closure2_slot1 = var4;
        var2 = _closure1_slot8;
        var3 = undefined;
        var1 = arg1;
        var1 = var2.bind(var3)(var4, var1);
        var2 = _closure1_slot5;
        var5 = {};
        var1 = 'destroy';
        var5['key'] = var1;
        var1 = function value() {
            var3 = this;
            var1 = true;
            var3['destroyed'] = var1;
            var2 = var3.framerateReducer;
            var1 = var2.destroy;
            var1 = var1.bind(var2)();
            var4 = var3.setConnectionState;
            var2 = _closure1_slot9;
            var2 = var2.DISCONNECTED;
            var2 = var4.bind(var3)(var2);
            var4 = var3.emit;
            var5 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 9;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var5.bind(var1)(var2);
            var2 = var2.BaseConnectionEvent;
            var2 = var2.Destroy;
            var2 = var4.bind(var3)(var2, var3);
            var2 = var3.removeAllListeners;
            var2 = var2.bind(var3)();
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(28);
        var1[0] = var5;
        var5 = {};
        var8 = 'getLocalMute';
        var5['key'] = var8;
        var8 = function value(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var1 = this;
                var2 = var1.localMutes;
                var1 = arg1;
                var1 = var2[var1];
                if(var1) { _fun0006_ip = 21; continue _fun0006 }
 19:
                var1 = false;
 21:
                return var1;
            }
        };
        var5['value'] = var8;
        var1[1] = var5;
        var5 = {};
        var8 = 'getLocalVideoDisabled';
        var5['key'] = var8;
        var8 = function value(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var1 = this;
                var2 = var1.disabledLocalVideos;
                var1 = arg1;
                var2 = var2[var1];
                var1 = null;
                var1 = var1 != var2;
                if(!var1) { _fun0007_ip = 28; continue _fun0007 }
 25:
                var1 = var2;
 28:
                return var1;
            }
        };
        var5['value'] = var8;
        var1[2] = var5;
        var5 = {};
        var8 = 'setLocalVideoDisabled';
        var5['key'] = var8;
        var8 = function value(arg1, arg2) {
            var6 = arg1;
            var5 = arg2;
            var4 = this;
            var1 = var4.disabledLocalVideos;
            var1[var6] = var5;
            var3 = var4.emit;
            var7 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 9;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var7.bind(var1)(var2);
            var2 = var2.BaseConnectionEvent;
            var2 = var2.LocalVideoDisabled;
            var2 = var3.bind(var4)(var2, var6, var5);
            return var1;
        };
        var5['value'] = var8;
        var1[3] = var5;
        var5 = {};
        var8 = 'getHasActiveVideoOutputSink';
        var5['key'] = var8;
        var8 = function value(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                var4 = arg1;
                var2 = this;
                var3 = var2.activeOutputSinks;
                var1 = var3.has;
                var1 = var1.bind(var3)(var4);
                if(!var1) { _fun0008_ip = 52; continue _fun0008 }
 25:
                var3 = var2.activeOutputSinks;
                var2 = var3.get;
                var2 = var2.bind(var3)(var4);
                var3 = var2.size;
                var2 = 0;
                var1 = var3 > var2;
 52:
                return var1;
            }
        };
        var5['value'] = var8;
        var1[4] = var5;
        var5 = {};
        var8 = 'setHasActiveVideoOutputSink';
        var5['key'] = var8;
        var8 = function value(arg1, arg2, arg3) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                var5 = arg1;
                var3 = arg3;
                var4 = this;
                var1 = var4.getHasActiveVideoOutputSink;
                var1 = var1.bind(var4)(var5);
                var6 = var4.activeOutputSinks;
                var2 = var6.get;
                var6 = var2.bind(var6)(var5);
                var2 = null;
                if(!(var2 == var6)) { _fun0009_ip = 70; continue _fun0009 }
 42:
                var2 = global;
                var2 = var2.Set;
                var7 = var2.prototype;
                var7 = Object.create(var7, {constructor: {value: var2}});
                var11 = var7;
                var2 = new var11[var2](var10);
                var6 = var2 instanceof Object ? var2 : var7;
 70:
                var2 = arg2;
                if(var2) { _fun0009_ip = 88; continue _fun0009 }
 76:
                var2 = var6.delete;
                var2 = var2.bind(var6)(var3);
                _fun0009_ip = 98; continue _fun0009;
 88:
                var2 = var6.add;
                var2 = var2.bind(var6)(var3);
 98:
                var3 = var4.activeOutputSinks;
                var2 = var3.set;
                var2 = var2.bind(var3)(var5, var6);
                var2 = var4.getHasActiveVideoOutputSink;
                var3 = var2.bind(var4)(var5);
                var2 = true;
                var4['isActiveOutputSinksEnabled'] = var2;
                if(!(var1 !== var3)) { _fun0009_ip = 188; continue _fun0009 }
 138:
                var2 = var4.emit;
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 9;
                var6 = var6[var1];
                var1 = undefined;
                var1 = var7.bind(var1)(var6);
                var1 = var1.BaseConnectionEvent;
                var1 = var1.ActiveSinksChange;
                var1 = var2.bind(var4)(var1, var5, var3);
 188:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var8;
        var1[5] = var5;
        var5 = {};
        var8 = 'getActiveOutputSinkTrackingEnabled';
        var5['key'] = var8;
        var8 = function value() {
            var1 = this;
            var1 = var1.isActiveOutputSinksEnabled;
            return var1;
        };
        var5['value'] = var8;
        var1[6] = var5;
        var5 = {};
        var8 = 'setUseElectronVideo';
        var5['key'] = var8;
        var8 = function value(arg1) {
            var2 = arg1;
            var1 = this;
            var1['useElectronVideo'] = var2;
            var1 = undefined;
            return var1;
        };
        var5['value'] = var8;
        var1[7] = var5;
        var5 = {};
        var8 = 'setClipRecordUser';
        var5['key'] = var8;
        var8 = function value() {
            var1 = undefined;
            return var1;
        };
        var5['value'] = var8;
        var1[8] = var5;
        var5 = {};
        var8 = 'setViewerSideClip';
        var5['key'] = var8;
        var8 = function value() {
            var1 = undefined;
            return var1;
        };
        var5['value'] = var8;
        var1[9] = var5;
        var5 = {};
        var8 = 'setRemoteAudioHistory';
        var5['key'] = var8;
        var8 = function value() {
            var1 = undefined;
            return var1;
        };
        var5['value'] = var8;
        var1[10] = var5;
        var5 = {};
        var8 = 'setClipsKeyFrameInterval';
        var5['key'] = var8;
        var8 = function value() {
            var1 = undefined;
            return var1;
        };
        var5['value'] = var8;
        var1[11] = var5;
        var5 = {};
        var8 = 'setQualityDecoupling';
        var5['key'] = var8;
        var8 = function value() {
            var1 = undefined;
            return var1;
        };
        var5['value'] = var8;
        var1[12] = var5;
        var5 = {};
        var8 = 'presentDesktopSourcePicker';
        var5['key'] = var8;
        var8 = function value() {
            var1 = undefined;
            return var1;
        };
        var5['value'] = var8;
        var1[13] = var5;
        var5 = {};
        var8 = 'getStreamParameters';
        var5['key'] = var8;
        var8 = function value() {
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 10;
            var1 = var3[var1];
            var3 = undefined;
            var2 = var2.bind(var3)(var1);
            var1 = this;
            var1 = var1.videoStreamParameters;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var8;
        var1[14] = var5;
        var5 = {};
        var8 = 'setExperimentFlag';
        var5['key'] = var8;
        var8 = function value(arg1, arg2) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                var3 = arg1;
                var1 = this;
                var2 = var1.experimentFlags;
                var1 = arg2;
                if(var1) { _fun0010_ip = 30; continue _fun0010 }
 18:
                var1 = var2.delete;
                var1 = var1.bind(var2)(var3);
                _fun0010_ip = 40; continue _fun0010;
 30:
                var1 = var2.add;
                var1 = var1.bind(var2)(var3);
 40:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var8;
        var1[15] = var5;
        var5 = {};
        var8 = 'setConnectionState';
        var5['key'] = var8;
        var8 = function value(arg1) {
            var1 = arg1;
            var5 = this;
            var4 = var5.logger;
            var3 = var4.info;
            var8 = var5.connectionState;
            var2 = global;
            var2 = var2.HermesInternal;
            var7 = var2.concat;
            var6 = 'Connection state change: ';
            var2 = ' => ';
            var2 = var7.bind(var6)(var8, var2, var1);
            var2 = var3.bind(var4)(var2);
            var5['connectionState'] = var1;
            var4 = var5.emit;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 9;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var2 = var2.BaseConnectionEvent;
            var3 = var2.ConnectionStateChange;
            var2 = var5.connectionState;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        };
        var5['value'] = var8;
        var1[16] = var5;
        var5 = {};
        var8 = 'updateVideoQuality';
        var5['key'] = var8;
        var8 = function value(arg1) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                var5 = this;
                var4 = var5.videoStreamParameters;
                var2 = var4.findIndex;
                var1 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.quality;
                    var1 = 100;
                    var1 = var1 === var2;
                    return var1;
                };
                var18 = var2.bind(var4)(var1);
                var1 = -1;
                if(!(var1 === var18)) { _fun0011_ip = 39; continue _fun0011 }
 37:
                var18 = 0;
 39:
                var4 = var5.applyQualityConstraints;
                var1 = var5.videoStreamParameters;
                var1 = var1[var18];
                var2 = var1.ssrc;
                var1 = {};
                var1 = var4.bind(var5)(var1, var2);
                var4 = var1.quality;
                var7 = var1.constraints;
                var9 = _closure1_slot1;
                var1 = _closure1_slot2;
                var8 = 10;
                var6 = var1[var8];
                var1 = undefined;
                var9 = var9.bind(var1)(var6);
                var6 = var5.videoStreamParameters;
                var6 = var9.bind(var1)(var6);
                var17 = null;
                if(!(var17 != var4)) { _fun0011_ip = 237; continue _fun0011 }
 123:
                var10 = var6[var18];
                var9 = var4.bitrateMax;
                var10['maxBitrate'] = var9;
                var10 = var6[var18];
                var9 = var4.bitrateMin;
                var10['minBitrate'] = var9;
                var10 = var6[var18];
                var11 = var4.bitrateTarget;
                var12 = var17 != var11;
                var9 = 0;
                if(!var12) { _fun0011_ip = 177; continue _fun0011 }
 174:
                var9 = var11;
 177:
                var10['targetBitrate'] = var9;
                var9 = var4.encode;
                if(!(var17 != var9)) { _fun0011_ip = 237; continue _fun0011 }
 193:
                var10 = var6[var18];
                var9 = var4.encode;
                var9 = var9.pixelCount;
                var10['maxPixelCount'] = var9;
                var10 = var6[var18];
                var9 = var4.encode;
                var9 = var9.framerate;
                var10['maxFrameRate'] = var9;
 237:
                var5['videoStreamParameters'] = var6;
                var6 = var5.videoStreamParameters;
                var6 = var6.length;
                var10 = 0;
                var6 = var10 < var6;
                var16 = 100;
                var15 = var4;
                var14 = var7;
                var13 = 0;
                var12 = undefined;
                var11 = undefined;
                var9 = undefined;
                var4 = var15;
                var7 = var14;
                if(!var6) { _fun0011_ip = 590; continue _fun0011 }
 289:
                var20 = var15;
                var19 = var14;
                var21 = var12;
                if(!(var13 !== var18)) { _fun0011_ip = 554; continue _fun0011 }
 305:
                var23 = var5.applyQualityConstraints;
                var6 = var5.videoStreamParameters;
                var6 = var6[var13];
                var22 = var6.ssrc;
                var6 = {};
                var6 = var23.bind(var5)(var6, var22);
                var22 = var6.quality;
                var6 = var6.constraints;
                if(!(var17 != var22)) { _fun0011_ip = 504; continue _fun0011 }
 354:
                var23 = var5.videoStreamParameters;
                var24 = var23[var13];
                var23 = var22.bitrateMax;
                var24['maxBitrate'] = var23;
                var23 = var5.videoStreamParameters;
                var24 = var23[var13];
                var23 = var22.bitrateMin;
                var24['minBitrate'] = var23;
                var23 = var5.videoStreamParameters;
                var25 = var23[var13];
                var23 = var22.bitrateTarget;
                var26 = var17 != var23;
                var24 = 0;
                if(!var26) { _fun0011_ip = 426; continue _fun0011 }
 423:
                var24 = var23;
 426:
                var25['targetBitrate'] = var24;
                var24 = var22.encode;
                var12 = var23;
                if(!(var17 != var24)) { _fun0011_ip = 504; continue _fun0011 }
 445:
                var24 = var5.videoStreamParameters;
                var25 = var24[var13];
                var24 = var22.encode;
                var24 = var24.pixelCount;
                var25['maxPixelCount'] = var24;
                var24 = var5.videoStreamParameters;
                var25 = var24[var13];
                var24 = var22.encode;
                var24 = var24.framerate;
                var25['maxFrameRate'] = var24;
                var12 = var23;
 504:
                var23 = var5.videoStreamParameters;
                var23 = var23[var13];
                var23 = var23.quality;
                var20 = var15;
                var19 = var14;
                var21 = var12;
                var11 = var22;
                var9 = var6;
                if(!(var16 === var23)) { _fun0011_ip = 554; continue _fun0011 }
 539:
                var20 = var22;
                var19 = var6;
                var21 = var12;
                var11 = var20;
                var9 = var19;
 554:
                var13 = var13 + 1;
                var6 = var5.videoStreamParameters;
                var6 = var6.length;
                var15 = var20;
                var14 = var19;
                var12 = var21;
                var4 = var15;
                var7 = var14;
                if(var13 < var6) { _fun0011_ip = 289; continue _fun0011 }
 590:
                var6 = _closure1_slot1;
                var2 = _closure1_slot2;
                var2 = var2[var8];
                var6 = var6.bind(var1)(var2);
                var2 = var5.videoStreamParameters;
                var2 = var6.bind(var1)(var2);
                var7['streamParameters'] = var2;
                var2 = global;
                var8 = var2.Math;
                var6 = var8.max;
                var11 = var5.videoStreamParameters;
                var9 = var11.map;
                var3 = function(arg1) {
                    _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                        var1 = arg1;
                        var2 = var1.maxPixelCount;
                        var1 = null;
                        var3 = var1 != var2;
                        var1 = 0;
                        if(!var3) { _fun0012_ip = 23; continue _fun0012 }
 20:
                        var1 = var2;
 23:
                        return var1;
                    }
                };
                var28 = var9.bind(var11)(var3);
                var3 = new Array(0);
                var29 = var3;
                var27 = 0;
                var9 = arraySpread(var29, var28, var27);
                var29 = var6;
                var28 = var3;
                var27 = var8;
                var3 = apply(var29, var28, var27);
                var7['remoteSinkWantsPixelCount'] = var3;
                var6 = var5.pickProperties;
                var3 = arg1;
                var3 = var6.bind(var5)(var7, var3);
                var7 = var5.logger;
                var6 = var7.verbose;
                var9 = var2.JSON;
                var8 = var9.stringify;
                var9 = var8.bind(var9)(var3);
                var2 = var2.HermesInternal;
                var8 = var2.concat;
                var2 = 'updateVideoQuality: ';
                var2 = var8.bind(var2)(var9);
                var2 = var6.bind(var7)(var2);
                var2 = var5.updateVideoQualityCore;
                var2 = var2.bind(var5)(var3, var4);
                return var1;
            }
        };
        var5['value'] = var8;
        var1[17] = var5;
        var5 = {};
        var8 = 'applyVideoQualityMode';
        var5['key'] = var8;
        var8 = function value(arg1) {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                var2 = this;
                var4 = var2.context;
                var3 = _closure1_slot13;
                var3 = var3.DEFAULT;
                if(!(var4 === var3)) { _fun0013_ip = 87; continue _fun0013 }
 25:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 7;
                var3 = var3[var1];
                var1 = undefined;
                var1 = var4.bind(var1)(var3);
                var3 = var1.VIDEO_QUALITY_MODES_TO_OVERWRITES;
                var1 = arg1;
                var4 = var3[var1];
                var3 = var2.videoQualityManager;
                var1 = var3.setQualityOverwrite;
                var1 = var1.bind(var3)(var4);
                var1 = var2.updateVideoQuality;
                var1 = var1.bind(var2)();
 87:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var8;
        var1[18] = var5;
        var5 = {};
        var8 = 'overwriteQualityForTesting';
        var5['key'] = var8;
        var8 = function value(arg1) {
            var2 = this;
            var4 = var2.videoQualityManager;
            var3 = var4.setQualityOverwrite;
            var1 = arg1;
            var1 = var3.bind(var4)(var1);
            var1 = var2.updateVideoQuality;
            var1 = var1.bind(var2)();
            var1 = undefined;
            return var1;
        };
        var5['value'] = var8;
        var1[19] = var5;
        var5 = {};
        var8 = 'configureGoLiveSimulcast';
        var5['key'] = var8;
        var8 = function value(arg1, arg2) {
            var1 = this;
            var4 = var1.videoQualityManager;
            var3 = var4.configGoLiveSimulcast;
            var2 = arg1;
            var1 = arg2;
            var1 = var3.bind(var4)(var2, var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var8;
        var1[20] = var5;
        var5 = {};
        var8 = 'applyQualityConstraints';
        var5['key'] = var8;
        var8 = function value() {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                var4 = arguments[0];
                var1 = undefined;
                if(!(var4 === var1)) { _fun0014_ip = 11; continue _fun0014 }
 9:
                var4 = {};
 11:
                var1 = this;
                var3 = var1.videoQualityManager;
                var2 = var3.applyQualityConstraints;
                var1 = arguments[1];
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var5['value'] = var8;
        var1[21] = var5;
        var5 = {};
        var8 = 'pickProperties';
        var5['key'] = var8;
        var8 = function value(arg1, arg2) {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                var1 = arg1;
                var4 = arg2;
                var2 = null;
                if(!(var2 != var4)) { _fun0015_ip = 74; continue _fun0015 }
 12:
                if(!(var2 != var1)) { _fun0015_ip = 74; continue _fun0015 }
 16:
                var2 = {};
                var3 = _closure1_slot17;
                var6 = undefined;
                var5 = var3.bind(var6)(var4);
                var4 = var5.bind(var6)();
                var3 = var4.done;
                if(var3) { _fun0015_ip = 72; continue _fun0015 }
 44:
                var7 = var4.value;
                var3 = var1[var7];
                var2[var7] = var3;
                var7 = var5.bind(var6)();
                var3 = var7.done;
                var4 = var7;
                if(!var3) { _fun0015_ip = 44; continue _fun0015 }
 72:
                return var2;
 74:
                return var1;
            }
        };
        var5['value'] = var8;
        var1[22] = var5;
        var5 = {};
        var8 = 'initializeStreamParameters';
        var5['key'] = var8;
        var8 = function value(arg1) {
            var5 = arg1;
            var2 = this;
            var _closure3_slot0 = var2;
            var4 = var5.filter;
            var3 = function(arg1) {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                    var2 = arg1;
                    var4 = var2.type;
                    var1 = _closure1_slot11;
                    var1 = var1.VIDEO;
                    var1 = var4 === var1;
                    if(var1) { _fun0016_ip = 47; continue _fun0016 }
 28:
                    var4 = var2.type;
                    var3 = _closure1_slot11;
                    var3 = var3.SCREEN;
                    var1 = var4 === var3;
 47:
                    if(!var1) { _fun0016_ip = 67; continue _fun0016 }
 50:
                    var2 = var2.rid;
                    var3 = 'string';
                    var2 = typeof var2;
                    var1 = var3 === var2;
 67:
                    return var1;
                }
            };
            var4 = var4.bind(var5)(var3);
            var3 = var4.map;
            var1 = function(arg1) {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
                    var2 = arg1;
                    var1 = _closure3_slot0;
                    var4 = var1.videoQualityManager;
                    var3 = var4.getQuality;
                    var1 = var2.ssrc;
                    var4 = var3.bind(var4)(var1);
                    var1 = {};
                    var3 = var2.type;
                    var1['type'] = var3;
                    var3 = var2.active;
                    var1['active'] = var3;
                    var3 = var2.rid;
                    var1['rid'] = var3;
                    var3 = var2.ssrc;
                    var1['ssrc'] = var3;
                    var3 = var2.rtxSsrc;
                    var1['rtxSsrc'] = var3;
                    var3 = var2.quality;
                    var1['quality'] = var3;
                    var6 = var2.quality;
                    var5 = null;
                    var7 = var5 != var6;
                    var3 = 100;
                    var2 = var3;
                    if(!var7) { _fun0017_ip = 123; continue _fun0017 }
 120:
                    var2 = var6;
 123:
                    if(!(!(var2 < var3))) { _fun0017_ip = 135; continue _fun0017 }
 127:
                    var2 = var4.bitrateMax;
                    _fun0017_ip = 148; continue _fun0017;
 135:
                    var6 = var4.bitrateMax;
                    var3 = 4;
                    var2 = var6 / var3;
 148:
                    var1['maxBitrate'] = var2;
                    var6 = var4.capture;
                    var7 = var5 == var6;
                    var2 = undefined;
                    if(var7) { _fun0017_ip = 174; continue _fun0017 }
 168:
                    var2 = var6.framerate;
 174:
                    var1['maxFrameRate'] = var2;
                    var2 = {};
                    var6 = _closure1_slot12;
                    var6 = var6.FIXED;
                    var2['type'] = var6;
                    var7 = var4.capture;
                    var8 = var5 == var7;
                    var6 = undefined;
                    if(var8) { _fun0017_ip = 218; continue _fun0017 }
 213:
                    var6 = var7.width;
 218:
                    var2['width'] = var6;
                    var4 = var4.capture;
                    var5 = var5 == var4;
                    var3 = undefined;
                    if(var5) { _fun0017_ip = 242; continue _fun0017 }
 237:
                    var3 = var4.height;
 242:
                    var2['height'] = var3;
                    var1['maxResolution'] = var2;
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var1);
            var2['videoStreamParameters'] = var1;
            var1 = undefined;
            return var1;
        };
        var5['value'] = var8;
        var1[23] = var5;
        var5 = {};
        var8 = 'getLocalWant';
        var5['key'] = var8;
        var8 = function value(arg1) {
            _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
                var7 = arg1;
                var2 = this;
                var _closure3_slot0 = var7;
                var4 = var2.videoStreamParameters;
                var3 = var4.some;
                var1 = function(arg1) {
                    _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
                        var2 = arg1;
                        var3 = var2.ssrc;
                        var1 = _closure3_slot0;
                        var1 = var3 === var1;
                        if(!var1) { _fun0019_ip = 40; continue _fun0019 }
 23:
                        var3 = var2.quality;
                        var2 = _closure1_slot15;
                        var1 = var3 === var2;
 40:
                        return var1;
                    }
                };
                var1 = var3.bind(var4)(var1);
                if(var1) { _fun0018_ip = 43; continue _fun0018 }
 37:
                var3 = undefined;
                var1 = var3 === var7;
 43:
                var4 = var2.context;
                var3 = _closure1_slot13;
                var3 = var3.DEFAULT;
                var4 = var4 === var3;
                if(var4) { _fun0018_ip = 71; continue _fun0018 }
 68:
                var4 = var1;
 71:
                var6 = var2.remoteVideoSinkWants;
                var5 = null;
                if(!(var5 == var7)) { _fun0018_ip = 113; continue _fun0018 }
 83:
                var3 = var2.videoStreamParameters;
                var1 = 0;
                var3 = var3[var1];
                var8 = var5 == var3;
                var1 = undefined;
                if(var8) { _fun0018_ip = 110; continue _fun0018 }
 104:
                var1 = var3.ssrc;
 110:
                var7 = var1;
 113:
                var8 = var5 != var7;
                var3 = 0;
                var1 = 0;
                if(!var8) { _fun0018_ip = 127; continue _fun0018 }
 124:
                var1 = var7;
 127:
                var1 = var6[var1];
                if(!(var5 != var1)) { _fun0018_ip = 139; continue _fun0018 }
 135:
                if(!(!(var1 > var3))) { _fun0018_ip = 175; continue _fun0018 }
 139:
                var2 = var2.remoteVideoSinkWants;
                var2 = var2.any;
                if(!(var5 != var2)) { _fun0018_ip = 162; continue _fun0018 }
 155:
                if(!(var2 > var3)) { _fun0018_ip = 162; continue _fun0018 }
 159:
                if(var4) { _fun0018_ip = 173; continue _fun0018 }
 162:
                var3 = 0;
                if(!var4) { _fun0018_ip = 170; continue _fun0018 }
 167:
                var3 = 100;
 170:
                var2 = var3;
 173:
                return var2;
 175:
                return var1;
            }
        };
        var5['value'] = var8;
        var1[24] = var5;
        var5 = {};
        var8 = 'getRemoteVideoSinkWants';
        var5['key'] = var8;
        var8 = function value(arg1) {
            var1 = this;
            var2 = var1.remoteVideoSinkWants;
            var1 = arg1;
            var1 = var2[var1];
            return var1;
        };
        var5['value'] = var8;
        var1[25] = var5;
        var5 = {};
        var8 = 'getRemoteVideoSinkPixelCount';
        var5['key'] = var8;
        var8 = function value(arg1) {
            _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
 0:
                var6 = arg1;
                var3 = undefined;
                var1 = 0;
                if(!(var3 !== var6)) { _fun0020_ip = 56; continue _fun0020 }
 11:
                var4 = this;
                var4 = var4.remoteVideoSinkWants;
                var5 = var4.pixelCounts;
                var4 = null;
                var7 = var4 == var5;
                var3 = undefined;
                if(var7) { _fun0020_ip = 41; continue _fun0020 }
 37:
                var3 = var5[var6];
 41:
                var4 = var4 != var3;
                var2 = 0;
                if(!var4) { _fun0020_ip = 53; continue _fun0020 }
 50:
                var2 = var3;
 53:
                var1 = var2;
 56:
                return var1;
            }
        };
        var5['value'] = var8;
        var1[26] = var5;
        var5 = {};
        var8 = 'emitStats';
        var5['key'] = var8;
        var8 = _closure1_slot3;
        var7 = function* () {
            var1 = function* anon_0_() {
                _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
 0:
                    StartGenerator();
                    var5 = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0021_ip = 91; continue _fun0021 }
 10:
                    var2 = var5.getStats;
                    var2 = var2.bind(var5)();
                    SaveGenerator(address=24);
 22:
                    return var2;
 24:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0021_ip = 88; continue _fun0021 }
 30:
                    var3 = null;
                    if(!(var3 != var2)) { _fun0021_ip = 85; continue _fun0021 }
 36:
                    var4 = var5.emit;
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 9;
                    var6 = var6[var3];
                    var3 = undefined;
                    var3 = var7.bind(var3)(var6);
                    var3 = var3.BaseConnectionEvent;
                    var3 = var3.Stats;
                    var3 = var4.bind(var5)(var3, var2);
 85:
                    return var2;
 88:
                    return var2;
 91:
                    return var1;
                }
            };
            return var1;
        };
        var7 = var8.bind(var3)(var7);
        var _closure2_slot0 = var7;
        var6 = function emitStats() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var5['value'] = var6;
        var1[27] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var6);
    var6 = 12;
    var6 = var5[var6];
    var8 = var4.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = '../discord_common/js/packages/media-engine/BaseConnection.tsx';
    var6 = var7.bind(var8)(var6);
    var3['default'] = var2;
    var2 = 9;
    var2 = var5[var2];
    var2 = var4.bind(var1)(var2);
    var2 = var2.BaseConnectionEvent;
    var3['BaseConnectionEvent'] = var2;
    return var1;
})();