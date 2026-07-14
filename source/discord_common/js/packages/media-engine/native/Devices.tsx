// discord_common/js/packages/media-engine/native/Devices.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var7;
    var4 = function sanitizeDevices(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var5 = arg2;
            var _closure2_slot0 = var4;
            var1 = false;
            var _closure2_slot1 = var1;
            var2 = var5.map;
            var1 = function(arg1, arg2) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = arg1;
                    var12 = arg2;
                    var11 = var2.guid;
                    var9 = var2.guid;
                    var20 = var2.name;
                    var10 = var2.name;
                    var1 = var2.index;
                    var8 = var2.facing;
                    var7 = var2.hardwareId;
                    var6 = var2.containerId;
                    var5 = var2.effects;
                    var4 = var2.macosTransportType;
                    var3 = var2.windowsEndpointFormFactor;
                    var2 = var2.windowsDeviceService;
                    var16 = _closure2_slot0;
                    var14 = _closure1_slot4;
                    var14 = var14.VIDEO_INPUT;
                    if(!(var16 === var14)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var16 = /^front/i;
                    var14 = var16.test;
                    var14 = var14.bind(var16)(var20);
                    if(var14) { _fun0002_ip = 4; continue _fun0002 }
case 2:
                    var16 = /^default/;
                    var14 = var16.test;
                    var14 = var14.bind(var16)(var20);
                    if(var14) { _fun0002_ip = 5; continue _fun0002 }
case 6:
                    var16 = null;
                    var14 = var20;
                    if(!(var16 != var11)) { _fun0002_ip = 7; continue _fun0002 }
case 8:
                    var16 = '';
                    var14 = var20;
                    if(!(var16 !== var11)) { _fun0002_ip = 7; continue _fun0002 }
case 9:
                    var14 = var11;
case 7:
                    var11 = var20;
                    _fun0002_ip = 10; continue _fun0002;
case 5:
                    var16 = true;
                    _closure2_slot1 = var16;
                    var14 = _closure1_slot3;
                    var19 = var20.replace;
                    var18 = 'default';
                    var16 = 'Default';
                    var11 = var19.bind(var20)(var18, var16);
                    _fun0002_ip = 10; continue _fun0002;
case 4:
                    var14 = _closure1_slot3;
                    var11 = 'Default';
case 10:
                    var15 = null;
                    if(!(var15 != var1)) { _fun0002_ip = 11; continue _fun0002 }
case 12:
                    var12 = var1;
case 11:
                    var1 = {};
                    var1['id'] = var14;
                    var13 = _closure2_slot0;
                    var1['type'] = var13;
                    var1['index'] = var12;
                    var1['name'] = var11;
                    var1['originalName'] = var10;
                    var1['originalId'] = var9;
                    var1['facing'] = var8;
                    var1['hardwareId'] = var7;
                    var1['containerId'] = var6;
                    var1['effects'] = var5;
                    var1['macosTransportType'] = var4;
                    var1['windowsEndpointFormFactor'] = var3;
                    var1['windowsDeviceService'] = var2;
                    return var1;
                }
            };
            var1 = var2.bind(var5)(var1);
            var2 = _closure1_slot4;
            var2 = var2.VIDEO_INPUT;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var3 = _closure2_slot1;
            var2 = !var3;
case 13:
            if(!var2) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var6 = _closure1_slot1;
            var3 = _closure1_slot2;
            var10 = 1;
            var3 = var3[var10];
            var9 = undefined;
            var3 = var6.bind(var9)(var3);
            var6 = null;
            var7 = var6 == var3;
            var3 = undefined;
            if(var7) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var8 = _closure1_slot1;
            var7 = _closure1_slot2;
            var7 = var7[var10];
            var7 = var8.bind(var9)(var7);
            var7 = var7.os;
            var8 = var6 == var7;
            var3 = undefined;
            if(var8) { _fun0001_ip = 17; continue _fun0001 }
case 19:
            var3 = var7.family;
case 17:
            var2 = var6 != var3;
case 15:
            if(!var2) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var7 = /^win/i;
            var6 = var7.test;
            var9 = _closure1_slot1;
            var8 = _closure1_slot2;
            var3 = 1;
            var8 = var8[var3];
            var3 = undefined;
            var3 = var9.bind(var3)(var8);
            var3 = var3.os;
            var3 = var3.family;
            var2 = var6.bind(var7)(var3);
case 20:
            if(!var2) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var3 = var1.unshift;
            var2 = {};
            var5 = _closure1_slot3;
            var2['id'] = var5;
            var2['type'] = var4;
            var4 = -1;
            var2['index'] = var4;
            var4 = 'Default';
            var2['name'] = var4;
            var2 = var3.bind(var1)(var2);
case 22:
            return var1;
        }
    };
    var _closure1_slot5 = var4;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var6.bind(var1)(var5);
    var8 = var5.DEFAULT_DEVICE_ID;
    var _closure1_slot3 = var8;
    var5 = var5.DeviceTypes;
    var _closure1_slot4 = var5;
    var5 = 3;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = '../discord_common/js/packages/media-engine/native/Devices.tsx';
    var5 = var6.bind(var7)(var5);
    var3['sanitizeDevices'] = var4;
    var4 = function getAudioInputDevices() {
        var1 = global;
        var3 = var1.Promise;
        var1 = var3.prototype;
        var2 = Object.create(var1, {constructor: {value: var3}});
        var4 = function(arg1) {
            var1 = arg1;
            var _closure3_slot0 = var1;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 2;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.getVoiceEngine;
            var4 = var3.bind(var4)();
            var3 = var4.getInputDevices;
            var2 = function(arg1) {
                var3 = _closure3_slot0;
                var5 = _closure1_slot5;
                var1 = _closure1_slot4;
                var4 = var1.AUDIO_INPUT;
                var2 = undefined;
                var1 = arg1;
                var1 = var5.bind(var2)(var4, var1);
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var5 = var2;
        var1 = new var5[var3](var4, var3);
        var1 = var1 instanceof Object ? var1 : var2;
        return var1;
    };
    var3['getAudioInputDevices'] = var4;
    var4 = function getAudioOutputDevices() {
        var1 = global;
        var3 = var1.Promise;
        var1 = var3.prototype;
        var2 = Object.create(var1, {constructor: {value: var3}});
        var4 = function(arg1) {
            var1 = arg1;
            var _closure3_slot0 = var1;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 2;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.getVoiceEngine;
            var4 = var3.bind(var4)();
            var3 = var4.getOutputDevices;
            var2 = function(arg1) {
                var3 = _closure3_slot0;
                var5 = _closure1_slot5;
                var1 = _closure1_slot4;
                var4 = var1.AUDIO_OUTPUT;
                var2 = undefined;
                var1 = arg1;
                var1 = var5.bind(var2)(var4, var1);
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var5 = var2;
        var1 = new var5[var3](var4, var3);
        var1 = var1 instanceof Object ? var1 : var2;
        return var1;
    };
    var3['getAudioOutputDevices'] = var4;
    var2 = function getVideoInputDevices() {
        var1 = global;
        var3 = var1.Promise;
        var1 = var3.prototype;
        var2 = Object.create(var1, {constructor: {value: var3}});
        var4 = function(arg1) {
            var1 = arg1;
            var _closure3_slot0 = var1;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 2;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.getVoiceEngine;
            var4 = var3.bind(var4)();
            var3 = var4.getVideoInputDevices;
            var2 = function(arg1) {
                var3 = _closure3_slot0;
                var5 = _closure1_slot5;
                var1 = _closure1_slot4;
                var4 = var1.VIDEO_INPUT;
                var2 = undefined;
                var1 = arg1;
                var1 = var5.bind(var2)(var4, var1);
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var5 = var2;
        var1 = new var5[var3](var4, var3);
        var1 = var1 instanceof Object ? var1 : var2;
        return var1;
    };
    var3['getVideoInputDevices'] = var2;
    return var1;
})();