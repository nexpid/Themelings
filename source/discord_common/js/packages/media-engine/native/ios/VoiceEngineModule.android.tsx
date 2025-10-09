// discord_common/js/packages/media-engine/native/ios/VoiceEngineModule.android.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var12 = global;
    var8 = var12.Object;
    var4 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var8)(var3, var1, var2);
    var1 = 0;
    var2 = var7[var1];
    var1 = undefined;
    var2 = var6.bind(var1)(var2);
    var8 = var2.NativeEventEmitter;
    var2 = 1;
    var4 = var7[var2];
    var10 = var5.bind(var1)(var4);
    var4 = var10.getConstants;
    var10 = var4.bind(var10)();
    var _closure1_slot2 = var10;
    var4 = ['getConstants', 'setInputDevice', 'setInputDeviceById', 'setOutputDevice', 'setOutputDeviceById', 'setVideoInputDevice', 'setVideoInputDeviceById', 'addListener', 'removeListeners'];
    var _closure1_slot3 = var4;
    var4 = {};
    var19 = var4;
    var18 = var10;
    var10 = copyDataProperties(var19, var18);
    var11 = function getConstants() {
        var1 = _closure1_slot2;
        return var1;
    };
    var10 = 'getConstants';
    var4[var10] = var11;
    var11 = function setInputDevice(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var2 = 'string';
            var1 = typeof var4;
            if(!(var2 !== var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 1;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var1 = var2.setInputDevice;
            var1 = var1.bind(var2)(var4);
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var5 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 1;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var5.bind(var2)(var3);
            var2 = var3.setInputDeviceById;
            var1 = var2.bind(var3)(var4);
case 4:
            return var1;
        }
    };
    var10 = 'setInputDevice';
    var4[var10] = var11;
    var11 = function setOutputDevice(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var4 = arg1;
            var2 = 'string';
            var1 = typeof var4;
            if(!(var2 !== var1)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 1;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var1 = var2.setOutputDevice;
            var1 = var1.bind(var2)(var4);
            _fun0002_ip = 4; continue _fun0002;
case 2:
            var5 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 1;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var5.bind(var2)(var3);
            var2 = var3.setOutputDeviceById;
            var1 = var2.bind(var3)(var4);
case 4:
            return var1;
        }
    };
    var10 = 'setOutputDevice';
    var4[var10] = var11;
    var11 = function setVideoInputDevice(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg1;
            var2 = 'string';
            var1 = typeof var4;
            if(!(var2 !== var1)) { _fun0003_ip = 2; continue _fun0003 }
case 3:
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 1;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var1 = var2.setVideoInputDevice;
            var1 = var1.bind(var2)(var4);
            _fun0003_ip = 4; continue _fun0003;
case 2:
            var5 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 1;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var5.bind(var2)(var3);
            var2 = var3.setVideoInputDeviceById;
            var1 = var2.bind(var3)(var4);
case 4:
            return var1;
        }
    };
    var10 = 'setVideoInputDevice';
    var4[var10] = var11;
    var11 = var12.Object;
    var10 = var11.fromEntries;
    var14 = var12.Object;
    var13 = var14.keys;
    var16 = var12.Object;
    var15 = var16.getPrototypeOf;
    var12 = var7[var2];
    var12 = var5.bind(var1)(var12);
    var12 = var15.bind(var16)(var12);
    var14 = var13.bind(var14)(var12);
    var13 = var14.filter;
    var12 = function(arg1) {
        var3 = _closure1_slot3;
        var2 = var3.includes;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        var1 = !var1;
        return var1;
    };
    var13 = var13.bind(var14)(var12);
    var12 = var13.map;
    var9 = function(arg1) {
        var3 = arg1;
        var _closure2_slot0 = var3;
        var1 = new Array(2);
        var1[0] = var3;
        var2 = function(arg1) {
            var8 = 0;
            var7 = copyRestArgs(var8);
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 1;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var1 = _closure2_slot0;
            var2 = var3[var1];
            var1 = new Array(0);
            var8 = var1;
            var6 = 0;
            var4 = arraySpread(var8, var7, var6);
            var8 = var2;
            var7 = var1;
            var6 = var3;
            var1 = apply(var8, var7, var6);
            return var1;
        };
        var1[1] = var2;
        return var1;
    };
    var9 = var12.bind(var13)(var9);
    var18 = var10.bind(var11)(var9);
    var19 = var4;
    var9 = copyDataProperties(var19, var18);
    var2 = var7[var2];
    var19 = var5.bind(var1)(var2);
    var5 = var8.prototype;
    var5 = Object.create(var5, {constructor: {value: var8}});
    var20 = var5;
    var2 = new var20[var8](var19, var18);
    var2 = var2 instanceof Object ? var2 : var5;
    var5 = 2;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = '../discord_common/js/packages/media-engine/native/ios/VoiceEngineModule.android.tsx';
    var5 = var6.bind(var7)(var5);
    var3['VoiceEngine'] = var4;
    var3['VoiceEngineEmitter'] = var2;
    return var1;
})();