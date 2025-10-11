// app/modules/video-qoe/SimpleMuxWrapper.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
    var4 = var5.bind(var1)(var4);
    var8 = var4.Logger;
    var4 = var8.prototype;
    var7 = Object.create(var4, {constructor: {value: var8}});
    var12 = 'SimpleMuxWrapper';
    var13 = var7;
    var4 = new var13[var8](var12, var11);
    var4 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot5 = var4;
    var2 = function() {
        var4 = _closure1_slot4;
        var3 = function SimpleMuxWrapper(arg1) {
            var2 = arg1;
            var3 = this;
            var6 = _closure1_slot3;
            var5 = _closure2_slot0;
            var1 = undefined;
            var5 = var6.bind(var1)(var3, var5);
            var5 = false;
            var3['isMonitoring'] = var5;
            var3['config'] = var2;
            var5 = var2.videoElement;
            var3['videoElement'] = var5;
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var4 = 3;
            var4 = var6[var4];
            var4 = var5.bind(var1)(var4);
            var5 = var4.SessionManager;
            var4 = var5.generateSessionId;
            var4 = var4.bind(var5)();
            var3['sessionId'] = var4;
            var2 = var2.hlsInstance;
            var3['hlsInstance'] = var2;
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'initialize';
        var1['key'] = var2;
        var2 = function value() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var3 = this;
                var1 = undefined;
                var5 = undefined;
                var6 = {'debug': null, 'disableCookies': true, 'respectDoNotTrack': true};
                var2 = var3.config;
                var4 = var2.debug;
                var7 = null;
                var2 = var7 != var4;
                if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var2 = var4;
case 2:
                var6['debug'] = var2;
                var4 = true;
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var8 = 4;
                var8 = var10[var8];
                var8 = var9.bind(var1)(var8);
                var11 = var8.MuxIntegration;
                var10 = var11.mapDiscordToMuxMetadata;
                var9 = var3.config;
                var8 = var3.sessionId;
                var8 = var10.bind(var11)(var9, var8);
                var6['data'] = var8;
                var5 = var6;
                var6 = var3.hlsInstance;
                if(!(var7 != var6)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var7 = var5;
                var6 = var3.hlsInstance;
                var7['hlsjs'] = var6;
                var6 = var3.hlsInstance;
                var6 = var6.constructor;
                var7['Hls'] = var6;
case 4: // try_start_0
                var7 = _closure1_slot1;
                var8 = _closure1_slot2;
                var6 = 5;
                var6 = var8[var6];
                var8 = var7.bind(var1)(var6);
                var7 = var8.monitor;
                var6 = var3.videoElement;
                var5 = var7.bind(var8)(var6, var5);
                var3['isMonitoring'] = var4;
case 6: // try_end0
                _fun0001_ip = 7; continue _fun0001;
case 8: // catch_target0
                CatchBlockStart(arg_register=5);
                var5 = _closure1_slot5;
                var4 = var5.error;
                var2 = 'Error creating Mux monitor';
                var2 = var4.bind(var5)(var2, var6);
                var2 = false;
                var3['isMonitoring'] = var2;
case 7:
                return var1;
            }
        };
        var1['value'] = var2;
        var2 = new Array(4);
        var2[0] = var1;
        var1 = {};
        var6 = 'endSession';
        var1['key'] = var6;
        var6 = function value() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var2 = this;
                var1 = var2.isMonitoring;
                if(!var1) { _fun0002_ip = 9; continue _fun0002 }
case 10: // try_start_0
                var6 = _closure1_slot1;
                var3 = _closure1_slot2;
                var5 = 5;
                var3 = var3[var5];
                var4 = undefined;
                var3 = var6.bind(var4)(var3);
                var3 = var3.destroyMonitor;
                var6 = 'function';
                var3 = typeof var3;
                if(!(var6 === var3)) { _fun0002_ip = 11; continue _fun0002 }
case 12:
                var3 = _closure1_slot1;
                var1 = _closure1_slot2;
                var1 = var1[var5];
                var4 = var3.bind(var4)(var1);
                var3 = var4.destroyMonitor;
                var1 = var2.videoElement;
                var1 = var3.bind(var4)(var1);
case 11:
                var1 = false;
                var2['isMonitoring'] = var1;
case 13: // try_end0
                _fun0002_ip = 9; continue _fun0002;
case 14: // catch_target0
                CatchBlockStart(arg_register=3);
                var3 = _closure1_slot5;
                var2 = var3.error;
                var1 = 'Error ending Mux session';
                var1 = var2.bind(var3)(var1, var4);
case 9:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'destroy';
        var1['key'] = var6;
        var6 = function value() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var2 = this;
                var1 = var2.isMonitoring;
                if(!var1) { _fun0003_ip = 9; continue _fun0003 }
case 10: // try_start_0
                var6 = _closure1_slot1;
                var3 = _closure1_slot2;
                var5 = 5;
                var3 = var3[var5];
                var4 = undefined;
                var3 = var6.bind(var4)(var3);
                var3 = var3.destroyMonitor;
                var6 = 'function';
                var3 = typeof var3;
                if(!(var6 === var3)) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                var3 = _closure1_slot1;
                var1 = _closure1_slot2;
                var1 = var1[var5];
                var4 = var3.bind(var4)(var1);
                var3 = var4.destroyMonitor;
                var1 = var2.videoElement;
                var1 = var3.bind(var4)(var1);
case 11:
                var1 = false;
                var2['isMonitoring'] = var1;
case 13: // try_end0
                _fun0003_ip = 9; continue _fun0003;
case 14: // catch_target0
                CatchBlockStart(arg_register=3);
                var3 = _closure1_slot5;
                var2 = var3.error;
                var1 = 'Error destroying Mux monitor';
                var1 = var2.bind(var3)(var1, var4);
case 9:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[2] = var1;
        var1 = {};
        var6 = 'getSessionId';
        var1['key'] = var6;
        var5 = function value() {
            var1 = this;
            var1 = var1.sessionId;
            return var1;
        };
        var1['value'] = var5;
        var2[3] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2 = var2.bind(var1)();
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/video-qoe/SimpleMuxWrapper.tsx';
    var4 = var5.bind(var6)(var4);
    var3['SimpleMuxWrapper'] = var2;
    return var1;
})();