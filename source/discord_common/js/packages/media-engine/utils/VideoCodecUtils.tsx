// discord_common/js/packages/media-engine/utils/VideoCodecUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var5 = require;
        var3 = exports;
        var6 = dependencyMap;
        var1 = function filterVideoCodecsInternal(arg1, arg2) {
            var4 = arg2;
            var1 = arg1;
            var _closure2_slot0 = var1;
            var3 = var4.concat;
            var1 = _closure1_slot0;
            var4 = var3.bind(var4)(var1);
            var1 = new Array(0);
            var _closure2_slot1 = var1;
            var3 = var4.forEach;
            var2 = function(arg1) {
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
                        var1 = var1.codec;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var4 = var3.bind(var4)(var2);
                    var2 = null;
                    if(!(var2 != var4)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var3 = _closure2_slot1;
                    var2 = var3.push;
                    var1 = {};
                    var6 = var4.codec;
                    var1['name'] = var6;
                    var6 = var4.encode;
                    if(!var6) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var6 = var5.encode;
case 4:
                    var1['encode'] = var6;
                    var4 = var4.decode;
                    if(!var4) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var4 = var5.decode;
case 6:
                    var1['decode'] = var4;
                    var1 = var2.bind(var3)(var1);
case 2:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var _closure1_slot1 = var1;
        var1 = function codecNameFromPayloadName(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var2 = arg1;
                var1 = 'AV1';
                var3 = 'AV1X';
                if(!(var3 !== var2)) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                var1 = var2;
case 8:
                return var1;
            }
        };
        var _closure1_slot2 = var1;
        var9 = global;
        var8 = var9.Object;
        var7 = var8.defineProperty;
        var4 = {};
        var1 = true;
        var4['value'] = var1;
        var1 = '__esModule';
        var1 = var7.bind(var8)(var3, var1, var4);
        var1 = 0;
        var4 = var6[var1];
        var1 = undefined;
        var4 = var5.bind(var1)(var4);
        var12 = var4.DARWIN_H265_VERSION;
        var4 = var4.ExperimentFlags;
        var7 = {'name': 'H265', 'encode': null, 'decode': true};
        var4 = var9.window;
        var8 = 'undefined';
        var4 = typeof var4;
        var4 = var8 === var4;
        if(var4) { _fun0001_ip = 10; continue _fun0001 }
case 11:
        var8 = var9.window;
        var11 = null;
        var13 = var11 == var8;
        var10 = undefined;
        if(var13) { _fun0001_ip = 12; continue _fun0001 }
case 13:
        var8 = var8.DiscordNative;
        var11 = var11 == var8;
        var10 = undefined;
        if(var11) { _fun0001_ip = 12; continue _fun0001 }
case 14:
        var8 = var8.process;
        var10 = var8.platform;
case 12:
        var8 = 'darwin';
        var4 = var8 !== var10;
case 10:
        if(var4) { _fun0001_ip = 15; continue _fun0001 }
case 16:
        var8 = var9.window;
        var14 = null;
        var11 = var14 == var8;
        var10 = undefined;
        if(var11) { _fun0001_ip = 17; continue _fun0001 }
case 18:
        var8 = var8.DiscordNative;
        var11 = var14 == var8;
        var10 = undefined;
        if(var11) { _fun0001_ip = 17; continue _fun0001 }
case 19:
        var8 = var8.os;
        var10 = var8.arch;
case 17:
        var8 = 'arm64';
        var8 = var8 === var10;
        if(!var8) { _fun0001_ip = 20; continue _fun0001 }
case 21:
        var10 = 1;
        var11 = var6[var10];
        var10 = metroImportDefault;
        var11 = var10.bind(var1)(var11);
        var10 = var11.satisfies;
        var13 = var9.window;
        var15 = var14 == var13;
        var9 = undefined;
        if(var15) { _fun0001_ip = 22; continue _fun0001 }
case 23:
        var13 = var13.DiscordNative;
        var14 = var14 == var13;
        var9 = undefined;
        if(var14) { _fun0001_ip = 22; continue _fun0001 }
case 24:
        var13 = var13.os;
        var9 = var13.release;
case 22:
        var8 = var10.bind(var11)(var9, var12);
case 20:
        var4 = var8;
case 15:
        var7['encode'] = var4;
        var4 = new Array(4);
        var4[0] = var7;
        var7 = {'name': 'H264', 'encode': true, 'decode': true};
        var4[1] = var7;
        var7 = {'name': 'VP8', 'encode': true, 'decode': true};
        var4[2] = var7;
        var7 = {'name': 'VP9', 'encode': true, 'decode': true};
        var4[3] = var7;
        var _closure1_slot0 = var4;
        var4 = 2;
        var4 = var6[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.fileFinishedImporting;
        var4 = '../discord_common/js/packages/media-engine/utils/VideoCodecUtils.tsx';
        var4 = var5.bind(var6)(var4);
        var4 = function getExperimentCodecs() {
            var1 = new Array(0);
            return var1;
        };
        var3['getExperimentCodecs'] = var4;
        var4 = function filterVideoCodecs(arg1, arg2) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var6 = arg1;
                var4 = _closure1_slot1;
                var3 = 'string';
                var2 = typeof var6;
                if(!(var3 !== var2)) { _fun0004_ip = 25; continue _fun0004 }
case 26:
                var3 = var6.map;
                var2 = function(arg1) {
                    var1 = {'codec': null, 'encode': true, 'decode': true};
                    var4 = _closure1_slot2;
                    var3 = undefined;
                    var2 = arg1;
                    var2 = var4.bind(var3)(var2);
                    var1['codec'] = var2;
                    return var1;
                };
                var3 = var3.bind(var6)(var2);
                _fun0004_ip = 4; continue _fun0004;
case 25:
                var2 = global;
                var5 = var2.JSON;
                var2 = var5.parse;
                var5 = var2.bind(var5)(var6);
                var2 = var5.map;
                var1 = function(arg1) {
                    var2 = arg1;
                    var1 = {};
                    var5 = _closure1_slot2;
                    var4 = var2.codec;
                    var3 = undefined;
                    var3 = var5.bind(var3)(var4);
                    var1['codec'] = var3;
                    var3 = var2.encode;
                    var1['encode'] = var3;
                    var2 = var2.decode;
                    var1['decode'] = var2;
                    return var1;
                };
                var3 = var2.bind(var5)(var1);
case 4:
                var2 = undefined;
                var1 = arg2;
                var1 = var4.bind(var2)(var3, var1);
                return var1;
            }
        };
        var3['filterVideoCodecs'] = var4;
        var2 = function codecNameToPayloadName(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var2 = arg1;
                var1 = 'AV1X';
                var3 = 'AV1';
                if(!(var3 !== var2)) { _fun0005_ip = 8; continue _fun0005 }
case 9:
                var1 = var2;
case 8:
                return var1;
            }
        };
        var3['codecNameToPayloadName'] = var2;
        return var1;
    }
})();