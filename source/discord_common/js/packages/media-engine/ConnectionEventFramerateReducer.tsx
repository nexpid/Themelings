// discord_common/js/packages/media-engine/ConnectionEventFramerateReducer.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.SpeakingFlags;
    var _closure1_slot4 = var7;
    var4 = var4.VIDEO_QUALITY_FRAMRATE_NOT_SPEAKING_TIMEOUT;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.Logger;
    var4 = var8.prototype;
    var7 = Object.create(var4, {constructor: {value: var8}});
    var12 = 'ConnectionEventFramerateReducer';
    var13 = var7;
    var4 = new var13[var8](var12, var11);
    var4 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot6 = var4;
    var2 = function() {
        var4 = _closure1_slot3;
        var3 = function ConnectionEventFramerateReducer(arg1, arg2) {
            var6 = arg1;
            var3 = this;
            var _closure3_slot0 = var3;
            var7 = _closure1_slot2;
            var5 = _closure2_slot0;
            var1 = undefined;
            var5 = var7.bind(var1)(var3, var5);
            var3['connection'] = var6;
            var5 = arg2;
            var3['sinkWants'] = var5;
            var5 = function(arg1, arg2) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    var2 = _closure3_slot0;
                    var2 = var2.connection;
                    var3 = var2.userId;
                    var2 = arg1;
                    if(!(var2 === var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var3 = _closure3_slot0;
                    var2 = var3.userSpeakingChange;
                    var1 = _closure1_slot4;
                    var4 = var1.NONE;
                    var1 = arg2;
                    var1 = var1 === var4;
                    var1 = var2.bind(var3)(var1);
case 2:
                    var1 = undefined;
                    return var1;
                }
            };
            var3['handleSpeaking'] = var5;
            var4 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure3_slot0;
                    var3 = var2.connection;
                    var2 = var3.hasDesktopSource;
                    var2 = var2.bind(var3)();
                    if(var2) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var2 = _closure3_slot0;
                    var1 = var2.destroyFramerateScaleFactorTimers;
                    var1 = var1.bind(var2)();
                    var3 = var2.sinkWants;
                    var1 = arg1;
                    var3['isMuted'] = var1;
                    var1 = var2.updateRemoteWantsFramerate;
                    var1 = var1.bind(var2)();
case 4:
                    var1 = undefined;
                    return var1;
                }
            };
            var3['handleSelfMute'] = var4;
            var7 = _closure1_slot6;
            var5 = var7.enableNativeLogger;
            var4 = true;
            var4 = var5.bind(var7)(var4);
            var9 = var6.on;
            var4 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 4;
            var5 = var7[var2];
            var5 = var4.bind(var1)(var5);
            var5 = var5.BaseConnectionEvent;
            var8 = var5.Speaking;
            var5 = var3.handleSpeaking;
            var5 = var9.bind(var6)(var8, var5);
            var5 = var6.on;
            var2 = var7[var2];
            var2 = var4.bind(var1)(var2);
            var2 = var2.BaseConnectionEvent;
            var4 = var2.Mute;
            var2 = var3.handleSelfMute;
            var2 = var5.bind(var6)(var4, var2);
            var2 = var3.initialize;
            var2 = var2.bind(var3)();
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'initialize';
        var1['key'] = var2;
        var2 = function value() {
            var3 = this;
            var2 = var3.userSpeakingChange;
            var1 = true;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var1['value'] = var2;
        var2 = new Array(5);
        var2[0] = var1;
        var1 = {};
        var6 = 'userSpeakingChange';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var2 = this;
                var _closure3_slot0 = var2;
                var4 = var2.connection;
                var3 = var4.hasDesktopSource;
                var3 = var3.bind(var4)();
                if(var3) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                var3 = var2.destroyFramerateScaleFactorTimers;
                var3 = var3.bind(var2)();
                var3 = arg1;
                if(var3) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                var3 = var2.sinkWants;
                var3 = var3.isMuted;
                if(!var3) { _fun0003_ip = 6; continue _fun0003 }
case 10:
                var4 = var2.sinkWants;
                var3 = false;
                var4['isMuted'] = var3;
                var3 = var2.updateRemoteWantsFramerate;
                var3 = var3.bind(var2)();
                _fun0003_ip = 6; continue _fun0003;
case 8:
                var3 = global;
                var5 = var3.setTimeout;
                var4 = _closure1_slot5;
                var3 = undefined;
                var1 = function() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        var2 = _closure3_slot0;
                        var2 = var2.connection;
                        var2 = var2.destroyed;
                        if(var2) { _fun0004_ip = 11; continue _fun0004 }
case 12:
                        var4 = _closure1_slot6;
                        var3 = var4.info;
                        var7 = _closure1_slot5;
                        var2 = global;
                        var2 = var2.HermesInternal;
                        var6 = var2.concat;
                        var5 = 'BaseConnection.userSpeakingChange: Reduced framerate after ';
                        var2 = ' ms.';
                        var2 = var6.bind(var5)(var7, var2);
                        var2 = var3.bind(var4)(var2);
                        var2 = _closure3_slot0;
                        var1 = undefined;
                        var2['framerateReductionTimeout'] = var1;
                        var3 = var2.sinkWants;
                        var1 = true;
                        var3['isMuted'] = var1;
                        var1 = var2.updateRemoteWantsFramerate;
                        var1 = var1.bind(var2)();
case 11:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1 = var5.bind(var3)(var1, var4);
                var2['framerateReductionTimeout'] = var1;
case 6:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'destroyFramerateScaleFactorTimers';
        var1['key'] = var6;
        var6 = function value() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var2 = this;
                var1 = var2.framerateReductionTimeout;
                var3 = 'number';
                var1 = typeof var1;
                if(!(var3 === var1)) { _fun0005_ip = 13; continue _fun0005 }
case 14:
                var1 = global;
                var4 = var1.clearTimeout;
                var3 = var2.framerateReductionTimeout;
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var2['framerateReductionTimeout'] = var1;
case 13:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[2] = var1;
        var1 = {};
        var6 = 'updateRemoteWantsFramerate';
        var1['key'] = var6;
        var6 = function value() {
            var1 = this;
            var3 = var1.connection;
            var2 = var3.updateVideoQuality;
            var1 = ['remoteSinkWantsMaxFramerate'];
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[3] = var1;
        var1 = {};
        var6 = 'destroy';
        var1['key'] = var6;
        var5 = function value() {
            var2 = this;
            var1 = var2.destroyFramerateScaleFactorTimers;
            var1 = var1.bind(var2)();
            var1 = undefined;
            return var1;
        };
        var1['value'] = var5;
        var2[4] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2 = var2.bind(var1)();
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = '../discord_common/js/packages/media-engine/ConnectionEventFramerateReducer.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();