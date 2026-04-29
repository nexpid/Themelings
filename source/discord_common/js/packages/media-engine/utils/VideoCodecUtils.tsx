// discord_common/js/packages/media-engine/utils/VideoCodecUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var3 = exports;
    var8 = dependencyMap;
    var5 = function filterParsedVideoCodecs(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var6 = arg2;
            var3 = arguments[2];
            var _closure2_slot0 = var4;
            var1 = undefined;
            if(!(var3 === var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = false;
case 2:
            var _closure2_slot1 = var1;
            var _closure2_slot2 = var1;
            var5 = var6.concat;
            var1 = _closure1_slot1;
            var7 = var5.bind(var6)(var1);
            var1 = new Array(0);
            _closure2_slot1 = var1;
            var6 = var7.forEach;
            var5 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var5 = arg1;
                    var _closure3_slot0 = var5;
                    var4 = _closure2_slot0;
                    var3 = var4.find;
                    var2 = function(arg1) {
                        var1 = _closure3_slot0;
                        var2 = var1.name;
                        var1 = arg1;
                        var1 = var1.name;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var4 = var3.bind(var4)(var2);
                    var2 = null;
                    if(!(var2 != var4)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var3 = _closure2_slot1;
                    var2 = var3.push;
                    var1 = {};
                    var6 = var4.name;
                    var1['name'] = var6;
                    var6 = var4.encode;
                    if(!var6) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var6 = var5.encode;
case 6:
                    var1['encode'] = var6;
                    var4 = var4.decode;
                    if(!var4) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var4 = var5.decode;
case 8:
                    var1['decode'] = var4;
                    var1 = var2.bind(var3)(var1);
case 4:
                    var1 = undefined;
                    return var1;
                }
            };
            var5 = var6.bind(var7)(var5);
            if(!var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var3 = global;
            var6 = var3.Set;
            var5 = var1.map;
            var3 = function(arg1) {
                var1 = arg1;
                var1 = var1.name;
                return var1;
            };
            var8 = var5.bind(var1)(var3);
            var5 = var6.prototype;
            var5 = Object.create(var5, {constructor: {value: var6}});
            var9 = var5;
            var3 = new var9[var6](var8, var7);
            var3 = var3 instanceof Object ? var3 : var5;
            _closure2_slot2 = var3;
            var3 = var4.forEach;
            var2 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var4 = arg1;
                    var5 = _closure2_slot2;
                    var3 = var5.has;
                    var2 = var4.name;
                    var2 = var3.bind(var5)(var2);
                    if(var2) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                    var3 = _closure2_slot1;
                    var2 = var3.push;
                    var1 = {};
                    var5 = var4.name;
                    var1['name'] = var5;
                    var5 = false;
                    var1['encode'] = var5;
                    var4 = var4.decode;
                    var1['decode'] = var4;
                    var1 = var2.bind(var3)(var1);
case 12:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var2);
case 10:
            return var1;
        }
    };
    var _closure1_slot2 = var5;
    var4 = function parseNativeCodecs(arg1) {
        var1 = global;
        var3 = var1.JSON;
        var2 = var3.parse;
        var1 = arg1;
        var3 = var2.bind(var3)(var1);
        var2 = var3.map;
        var1 = function(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var2 = arg1;
                var1 = {};
                var4 = var2.codec;
                var3 = 'AV1';
                var5 = 'AV1X';
                if(!(var5 !== var4)) { _fun0004_ip = 13; continue _fun0004 }
case 14:
                var3 = var4;
case 13:
                var1['name'] = var3;
                var3 = var2.encode;
                var1['encode'] = var3;
                var2 = var2.decode;
                var1['decode'] = var2;
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot3 = var4;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var6);
    var1 = 0;
    var6 = var8[var1];
    var1 = undefined;
    var6 = var7.bind(var1)(var6);
    var6 = var6.ExperimentFlags;
    var _closure1_slot0 = var6;
    var6 = new Array(2);
    var9 = {'name': 'H264', 'encode': true, 'decode': true};
    var6[0] = var9;
    var9 = {'name': 'VP8', 'encode': true, 'decode': true};
    var6[1] = var9;
    var _closure1_slot1 = var6;
    var6 = 1;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = '../discord_common/js/packages/media-engine/utils/VideoCodecUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var3['filterParsedVideoCodecs'] = var5;
    var5 = function getExperimentCodecs(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var7 = arg1;
            var1 = new Array(0);
            var5 = var7.has;
            var2 = _closure1_slot0;
            var4 = var2.SIGNAL_AV1_ENCODE;
            var6 = var5.bind(var7)(var4);
            var4 = var7.has;
            var2 = var2.SIGNAL_AV1_DECODE;
            var5 = var4.bind(var7)(var2);
            var2 = var6;
            if(var2) { _fun0005_ip = 15; continue _fun0005 }
case 16:
            var2 = var5;
case 15:
            if(!var2) { _fun0005_ip = 17; continue _fun0005 }
case 18:
            var4 = var1.push;
            var2 = {};
            var8 = 'AV1';
            var2['name'] = var8;
            var2['encode'] = var6;
            var2['decode'] = var5;
            var2 = var4.bind(var1)(var2);
case 17:
            var4 = var7.has;
            var2 = _closure1_slot0;
            var2 = var2.H265_DISABLE_ENCODE;
            var2 = var4.bind(var7)(var2);
            var5 = !var2;
            var2 = null;
            var4 = var2 != var7;
            if(!var4) { _fun0005_ip = 19; continue _fun0005 }
case 20:
            var8 = var7.has;
            var6 = _closure1_slot0;
            var6 = var6.H265_HARDWARE_ONLY;
            var4 = var8.bind(var7)(var6);
case 19:
            var4 = !var4;
            if(var4) { _fun0005_ip = 21; continue _fun0005 }
case 22:
            var6 = var2 == var7;
            var2 = undefined;
            if(var6) { _fun0005_ip = 23; continue _fun0005 }
case 24:
            var6 = var7.has;
            var3 = _closure1_slot0;
            var3 = var3.H265_HARDWARE_DECODE_AVAILABLE;
            var2 = var6.bind(var7)(var3);
case 23:
            var4 = var2;
case 21:
            var3 = var1.push;
            var2 = {};
            var6 = 'H265';
            var2['name'] = var6;
            var2['encode'] = var5;
            var2['decode'] = var4;
            var2 = var3.bind(var1)(var2);
            return var1;
        }
    };
    var3['getExperimentCodecs'] = var5;
    var5 = function filterVideoCodecs(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var5 = arguments[2];
            var4 = undefined;
            if(!(var5 === var4)) { _fun0006_ip = 25; continue _fun0006 }
case 26:
            var5 = false;
case 25:
            var3 = _closure1_slot2;
            var2 = _closure1_slot3;
            var1 = arg1;
            var2 = var2.bind(var4)(var1);
            var1 = arg2;
            var1 = var3.bind(var4)(var2, var1, var5);
            return var1;
        }
    };
    var3['filterVideoCodecs'] = var5;
    var3['parseNativeCodecs'] = var4;
    var2 = function codecNameToPayloadName(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var2 = arg1;
            var1 = 'AV1X';
            var3 = 'AV1';
            if(!(var3 !== var2)) { _fun0007_ip = 27; continue _fun0007 }
case 28:
            var1 = var2;
case 27:
            return var1;
        }
    };
    var3['codecNameToPayloadName'] = var2;
    return var1;
})();