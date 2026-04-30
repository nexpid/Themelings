// app/modules/go_live/GoLiveQualityManager.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
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
            _closure1_slot9 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot9 = var1;
    var1 = global;
    var9 = var1.Object;
    var5 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var7[var1];
    var1 = undefined;
    var2 = var8.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 4;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = {};
    var5 = 'requested-ssrcs-update';
    var2['RequestedSSRCsUpdate'] = var5;
    var5 = 'requested-streams-update';
    var2['RequestedStreamsUpdate'] = var5;
    var _closure1_slot8 = var2;
    var5 = 7;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var4 = function(arg1) {
        var4 = function GoLiveQualityManager() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var6 = this;
                var1 = _closure1_slot3;
                var4 = _closure2_slot0;
                var5 = undefined;
                var1 = var1.bind(var5)(var6, var4);
                var1 = _closure1_slot6;
                var11 = var1.bind(var5)(var4);
                var4 = _closure1_slot5;
                var1 = _closure1_slot9;
                var1 = var1.bind(var5)();
                if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var1 = var11.apply;
                var1 = var1.bind(var11)(var6, var5);
                _fun0002_ip = 8; continue _fun0002;
case 6:
                var7 = global;
                var10 = var7.Reflect;
                var9 = var10.construct;
                var7 = _closure1_slot6;
                var7 = var7.bind(var5)(var6);
                var8 = var7.constructor;
                var7 = new Array(0);
                var1 = var9.bind(var10)(var11, var7, var8);
case 8:
                var1 = var4.bind(var5)(var6, var1);
                var _closure3_slot0 = var1;
                var4 = null;
                var1['streamId'] = var4;
                var4 = 0;
                var1['resolutionWidth'] = var4;
                var1['resolutionHeight'] = var4;
                var6 = 1;
                var1['zoom'] = var6;
                var1['audioSSRC'] = var4;
                var8 = true;
                var1['incomingVideoEnabled'] = var8;
                var4 = function() {
                    var1 = _closure3_slot0;
                    var2 = var1.delayedCall;
                    var1 = var2.delay;
                    var1 = var1.bind(var2)();
                    var1 = undefined;
                    return var1;
                };
                var1['delayedUpdate'] = var4;
                var7 = _closure1_slot1;
                var6 = _closure1_slot2;
                var4 = 5;
                var4 = var6[var4];
                var9 = var7.bind(var5)(var4);
                var4 = var9.prototype;
                var7 = Object.create(var4, {constructor: {value: var9}});
                var14 = 'GoLiveQualityManager';
                var15 = var7;
                var4 = new var15[var9](var14, var13);
                var4 = var4 instanceof Object ? var4 : var7;
                var1['logger'] = var4;
                var7 = var1.logger;
                var4 = var7.enableNativeLogger;
                var4 = var4.bind(var7)(var8);
                var4 = _closure1_slot0;
                var3 = 6;
                var3 = var6[var3];
                var3 = var4.bind(var5)(var3);
                var5 = var3.DelayedCall;
                var3 = var5.prototype;
                var3 = Object.create(var3, {constructor: {value: var5}});
                var14 = 500;
                var13 = function() {
                    var2 = _closure3_slot0;
                    var1 = var2.update;
                    var1 = var1.bind(var2)();
                    var1 = undefined;
                    return var1;
                };
                var15 = var3;
                var2 = new var15[var5](var14, var13, var12);
                var2 = var2 instanceof Object ? var2 : var3;
                var1['delayedCall'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'setUserID';
        var5['key'] = var1;
        var1 = function value(arg1) {
            var2 = arg1;
            var1 = this;
            var1['userId'] = var2;
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(10);
        var1[0] = var5;
        var5 = {};
        var7 = 'getUserID';
        var5['key'] = var7;
        var7 = function value() {
            var1 = this;
            var1 = var1.userId;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'updateAudioAndVideoStreamInfo';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            var4 = arg2;
            var2 = this;
            var1 = arg1;
            var2['audioSSRC'] = var1;
            var3 = var4.find;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.active;
                return var1;
            };
            var1 = var3.bind(var4)(var1);
            var2['videoStream'] = var1;
            var1 = var2.update;
            var1 = var1.bind(var2)();
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'onIncomingVideoEnabled';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var1 = arg1;
                var2 = this;
                var3 = var2.incomingVideoEnabled;
                if(!(var3 !== var1)) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                var5 = var2.logger;
                var4 = var5.info;
                var3 = 'onIncomingVideoEnabled';
                var3 = var4.bind(var5)(var3, var1);
                var2['incomingVideoEnabled'] = var1;
                var1 = var2.update;
                var1 = var1.bind(var2)();
case 9:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'update';
        var5['key'] = var7;
        var7 = function value() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var2 = this;
                var1 = var2.userId;
                var4 = null;
                var1 = var4 != var1;
                if(!var1) { _fun0004_ip = 11; continue _fun0004 }
case 12:
                var3 = var2.videoStream;
                var1 = var4 != var3;
case 11:
                if(!var1) { _fun0004_ip = 13; continue _fun0004 }
case 14:
                var1 = var2.incomingVideoEnabled;
                if(var1) { _fun0004_ip = 7; continue _fun0004 }
case 15:
                var1 = var2.stopStream;
                var1 = var1.bind(var2)();
                _fun0004_ip = 13; continue _fun0004;
case 7:
                var1 = var2.requestStream;
                var1 = var1.bind(var2)();
case 13:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'requestStream';
        var5['key'] = var7;
        var7 = function value() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var4 = this;
                var2 = var4.videoStream;
                var1 = null;
                if(!(var1 != var2)) { _fun0005_ip = 16; continue _fun0005 }
case 17:
                var3 = var4.request;
                var2 = {};
                var1 = var4.videoStream;
                var5 = var1.ssrc;
                var1 = 100;
                var2[4] = var1;
                var1 = var4.videoStream;
                var5 = var1.ssrc;
                var1 = new Array(1);
                var1[0] = var5;
                var1 = var3.bind(var4)(var2, var1);
case 16:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'stopStream';
        var5['key'] = var7;
        var7 = function value() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var4 = this;
                var2 = var4.videoStream;
                var1 = null;
                if(!(var1 != var2)) { _fun0006_ip = 18; continue _fun0006 }
case 17:
                var3 = var4.request;
                var2 = {};
                var1 = var4.videoStream;
                var5 = var1.ssrc;
                var1 = 0;
                var2[4] = var1;
                var1 = new Array(0);
                var1 = var3.bind(var4)(var2, var1);
case 18:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'request';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var5 = arg1;
                var9 = arg2;
                var4 = this;
                var _closure3_slot0 = var4;
                var3 = var4.userId;
                var1 = undefined;
                if(!(var1 !== var3)) { _fun0007_ip = 19; continue _fun0007 }
case 20:
                var _closure3_slot1 = var5;
                var3 = var9.forEach;
                var2 = function(arg1) {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                        var3 = arg1;
                        var2 = _closure3_slot1;
                        var4 = var2.pixelCounts;
                        var2 = null;
                        if(!(var2 == var4)) { _fun0008_ip = 21; continue _fun0008 }
case 22:
                        var4 = _closure3_slot1;
                        var2 = {};
                        var4['pixelCounts'] = var2;
case 21:
                        var2 = _closure3_slot1;
                        var4 = var2[var3];
                        var2 = 0;
                        if(!(var4 > var2)) { _fun0008_ip = 23; continue _fun0008 }
case 24:
                        var2 = _closure3_slot1;
                        var2 = var2.pixelCounts;
                        var4 = global;
                        var5 = var4.Math;
                        var4 = var5.floor;
                        var1 = _closure3_slot0;
                        var7 = var1.resolutionWidth;
                        var6 = var1.resolutionHeight;
                        var7 = var7 * var6;
                        var6 = var1.zoom;
                        var6 = var7 * var6;
                        var1 = var1.zoom;
                        var1 = var6 * var1;
                        var1 = var4.bind(var5)(var1);
                        var2[var3] = var1;
case 23:
                        var1 = undefined;
                        return var1;
                    }
                };
                var2 = var3.bind(var9)(var2);
                var8 = var4.emit;
                var2 = _closure1_slot8;
                var13 = var2.RequestedSSRCsUpdate;
                var12 = var4.userId;
                var11 = var4.audioSSRC;
                var14 = var4;
                var10 = var9;
                var3 = var14[var8](var13, var12, var11, var10, var9);
                var3 = var4.emit;
                var2 = var2.RequestedStreamsUpdate;
                var2 = var3.bind(var4)(var2, var5);
case 19:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'setVideoSize';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var4 = arg2;
                var1 = arg3;
                var2 = this;
                var5 = var2.streamId;
                var3 = arg1;
                if(!(var5 === var3)) { _fun0009_ip = 25; continue _fun0009 }
case 22:
                var3 = null;
                if(!(var3 != var4)) { _fun0009_ip = 26; continue _fun0009 }
case 27:
                var5 = var4.width;
                var2['resolutionWidth'] = var5;
                var4 = var4.height;
                var2['resolutionHeight'] = var4;
case 26:
                if(!(var3 != var1)) { _fun0009_ip = 28; continue _fun0009 }
case 29:
                var2['zoom'] = var1;
case 28:
                var1 = var2.delayedUpdate;
                var1 = var1.bind(var2)();
case 25:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'setStreamId';
        var5['key'] = var7;
        var6 = function value(arg1) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var1 = arg1;
                var2 = this;
                var3 = var2.streamId;
                if(!(var3 !== var1)) { _fun0010_ip = 30; continue _fun0010 }
case 10:
                var2['streamId'] = var1;
                var1 = 0;
                var2['resolutionWidth'] = var1;
                var2['resolutionHeight'] = var1;
                var1 = 1;
                var2['zoom'] = var1;
                var1 = var2.delayedUpdate;
                var1 = var1.bind(var2)();
case 30:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var6;
        var1[9] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = 8;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/go_live/GoLiveQualityManager.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['GoLiveQualityManagerEvent'] = var2;
    return var1;
})();