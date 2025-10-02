// discord_common/js/packages/media-engine/index.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var10 = require;
    var3 = exports;
    var11 = dependencyMap;
    var _closure1_slot0 = var10;
    var _closure1_slot1 = var11;
    var1 = function getMediaEngineImpl(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var2 = _closure1_slot2;
            var2 = var2.NATIVE;
            if(!(var2 !== var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = _closure1_slot2;
            var2 = var2.WEBRTC;
            if(!(var2 !== var3)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = _closure1_slot2;
            var2 = var2.DUMMY;
case 4:
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 2;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var2 = var2.default;
            return var2;
case 2:
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 1;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var1 = var1.default;
            return var1;
        }
    };
    var _closure1_slot3 = var1;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var4);
    var5 = 0;
    var4 = var11[var5];
    var1 = undefined;
    var4 = var10.bind(var1)(var4);
    var8 = var4.MediaEngineContextTypes;
    var4 = var4.MediaEngineImplementations;
    var _closure1_slot2 = var4;
    var7 = {};
    var7['SOURCE_NOT_FOUND'] = var5;
    var4 = 'SOURCE_NOT_FOUND';
    var7[var5] = var4;
    var5 = 1;
    var7['USER_STOPPED'] = var5;
    var4 = 'USER_STOPPED';
    var7[var5] = var4;
    var5 = 2;
    var7['OTHER_ERROR'] = var5;
    var4 = 'OTHER_ERROR';
    var7[var5] = var4;
    var6 = {};
    var4 = 'input_device';
    var6['INPUT_DEVICE'] = var4;
    var4 = 'stream';
    var6['STREAM'] = var4;
    var5 = {};
    var4 = '';
    var5['NONE'] = var4;
    var4 = 'background_blur';
    var5['BACKGROUND_BLUR'] = var4;
    var4 = 'background_replacement';
    var5['BACKGROUND_REPLACEMENT'] = var4;
    var4 = {};
    var9 = 'cameraBackgroundPreview';
    var4['CAMERA_BACKGROUND_PREVIEW'] = var9;
    var9 = 'cameraBackgroundLive';
    var4['CAMERA_BACKGROUND_LIVE'] = var9;
    var9 = 3;
    var9 = var11[var9];
    var13 = var10.bind(var1)(var9);
    var12 = var13.fileFinishedImporting;
    var9 = '../discord_common/js/packages/media-engine/index.tsx';
    var9 = var12.bind(var13)(var9);
    var9 = 4;
    var9 = var11[var9];
    var9 = var10.bind(var1)(var9);
    var9 = var9.BaseConnectionEvent;
    var3['BaseConnectionEvent'] = var9;
    var9 = 5;
    var9 = var11[var9];
    var9 = var10.bind(var1)(var9);
    var9 = var9.MediaEngineEvent;
    var3['MediaEngineEvent'] = var9;
    var3['MediaEngineContextTypes'] = var8;
    var3['DesktopSourceEndReason'] = var7;
    var3['FilterTargetType'] = var6;
    var3['FilterSettingsGraph'] = var5;
    var3['FilterSettingsKey'] = var4;
    var4 = function determineMediaEngine() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = _closure1_slot2;
            var1 = var1.NATIVE;
            var4 = new Array(2);
            var4[0] = var1;
            var1 = _closure1_slot2;
            var1 = var1.WEBRTC;
            var4[1] = var1;
            var3 = var4.find;
            var1 = function(arg1) {
                var3 = _closure1_slot3;
                var2 = undefined;
                var1 = arg1;
                var2 = var3.bind(var2)(var1);
                var1 = var2.supported;
                var1 = var1.bind(var2)();
                return var1;
            };
            var1 = var3.bind(var4)(var1);
            var3 = null;
            if(!(var3 == var1)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var2 = _closure1_slot2;
            var1 = var2.DUMMY;
case 6:
            return var1;
        }
    };
    var3['determineMediaEngine'] = var4;
    var2 = function initializeMediaEngine(arg1) {
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = arg1;
        var1 = var3.bind(var2)(var1);
        var2 = var1.prototype;
        var2 = Object.create(var2, {constructor: {value: var1}});
        var5 = var2;
        var1 = new var5[var1](var4);
        var1 = var1 instanceof Object ? var1 : var2;
        return var1;
    };
    var3['initializeMediaEngine'] = var2;
    return var1;
})();