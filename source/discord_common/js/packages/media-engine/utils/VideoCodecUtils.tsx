// discord_common/js/packages/media-engine/utils/VideoCodecUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var1 = metroImportDefault;
    var _closure1_slot0 = var1;
    var _closure1_slot1 = var6;
    var1 = function filterVideoCodecsInternal(arg1, arg2) {
        var4 = arg2;
        var1 = arg1;
        var _closure2_slot0 = var1;
        var3 = var4.concat;
        var1 = _closure1_slot4;
        var4 = var3.bind(var4)(var1);
        var1 = new Array(0);
        var _closure2_slot1 = var1;
        var3 = var4.forEach;
        var2 = function(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
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
                if(!(var2 != var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var3 = _closure2_slot1;
                var2 = var3.push;
                var1 = {};
                var6 = var4.codec;
                var1['name'] = var6;
                var6 = var4.encode;
                if(!var6) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var6 = var5.encode;
case 4:
                var1['encode'] = var6;
                var4 = var4.decode;
                if(!var4) { _fun0001_ip = 6; continue _fun0001 }
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
    var _closure1_slot5 = var1;
    var1 = function codecNameFromPayloadName(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var1 = 'AV1';
            var3 = 'AV1X';
            if(!(var3 !== var2)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var1 = var2;
case 8:
            return var1;
        }
    };
    var _closure1_slot6 = var1;
    var1 = global;
    var8 = var1.Object;
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
    var7 = var4.DARWIN_H265_VERSION;
    var _closure1_slot2 = var7;
    var4 = var4.ExperimentFlags;
    var _closure1_slot3 = var4;
    var4 = new Array(3);
    var7 = {'name': 'H264', 'encode': true, 'decode': true};
    var4[0] = var7;
    var7 = {'name': 'VP8', 'encode': true, 'decode': true};
    var4[1] = var7;
    var7 = {'name': 'VP9', 'encode': true, 'decode': true};
    var4[2] = var7;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = '../discord_common/js/packages/media-engine/utils/VideoCodecUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function getExperimentCodecs(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var8 = arg1;
            var1 = new Array(0);
            var3 = var1.push;
            var2 = {};
            var4 = 'H265';
            var2['name'] = var4;
            var7 = global;
            var4 = var7.window;
            var5 = 'undefined';
            var4 = typeof var4;
            var4 = var5 === var4;
            if(var4) { _fun0003_ip = 10; continue _fun0003 }
case 11:
            var5 = var7.window;
            var9 = null;
            var11 = var9 == var5;
            var6 = undefined;
            if(var11) { _fun0003_ip = 7; continue _fun0003 }
case 12:
            var5 = var5.DiscordNative;
            var9 = var9 == var5;
            var6 = undefined;
            if(var9) { _fun0003_ip = 7; continue _fun0003 }
case 13:
            var5 = var5.process;
            var6 = var5.platform;
case 7:
            var5 = 'darwin';
            var4 = var5 !== var6;
case 10:
            if(var4) { _fun0003_ip = 14; continue _fun0003 }
case 2:
            var5 = var7.window;
            var12 = null;
            var9 = var12 == var5;
            var13 = undefined;
            var6 = undefined;
            if(var9) { _fun0003_ip = 15; continue _fun0003 }
case 16:
            var5 = var5.DiscordNative;
            var9 = var12 == var5;
            var6 = undefined;
            if(var9) { _fun0003_ip = 15; continue _fun0003 }
case 17:
            var5 = var5.os;
            var6 = var5.arch;
case 15:
            var5 = 'arm64';
            var5 = var5 === var6;
            if(!var5) { _fun0003_ip = 18; continue _fun0003 }
case 19:
            var10 = _closure1_slot0;
            var11 = _closure1_slot1;
            var9 = 1;
            var9 = var11[var9];
            var10 = var10.bind(var13)(var9);
            var9 = var10.satisfies;
            var11 = var7.window;
            var14 = var12 == var11;
            var7 = undefined;
            if(var14) { _fun0003_ip = 20; continue _fun0003 }
case 21:
            var11 = var11.DiscordNative;
            var12 = var12 == var11;
            var7 = undefined;
            if(var12) { _fun0003_ip = 20; continue _fun0003 }
case 22:
            var11 = var11.os;
            var7 = var11.release;
case 20:
            var6 = _closure1_slot2;
            var5 = var9.bind(var10)(var7, var6);
case 18:
            var4 = var5;
case 14:
            var2['encode'] = var4;
            var5 = null;
            var4 = var5 != var8;
            if(!var4) { _fun0003_ip = 23; continue _fun0003 }
case 24:
            var7 = var8.has;
            var6 = _closure1_slot3;
            var6 = var6.H265_HARDWARE_ONLY;
            var4 = var7.bind(var8)(var6);
case 23:
            var4 = !var4;
            if(var4) { _fun0003_ip = 25; continue _fun0003 }
case 26:
            var6 = var5 == var8;
            var5 = undefined;
            if(var6) { _fun0003_ip = 27; continue _fun0003 }
case 28:
            var7 = var8.has;
            var6 = _closure1_slot3;
            var6 = var6.H265_HARDWARE_DECODE_AVAILABLE;
            var5 = var7.bind(var8)(var6);
case 27:
            var4 = var5;
case 25:
            var2['decode'] = var4;
            var2 = var3.bind(var1)(var2);
            return var1;
        }
    };
    var3['getExperimentCodecs'] = var4;
    var4 = function filterVideoCodecs(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var6 = arg1;
            var4 = _closure1_slot5;
            var3 = 'string';
            var2 = typeof var6;
            if(!(var3 !== var2)) { _fun0004_ip = 29; continue _fun0004 }
case 30:
            var3 = var6.map;
            var2 = function(arg1) {
                var1 = {'codec': null, 'encode': true, 'decode': true};
                var4 = _closure1_slot6;
                var3 = undefined;
                var2 = arg1;
                var2 = var4.bind(var3)(var2);
                var1['codec'] = var2;
                return var1;
            };
            var3 = var3.bind(var6)(var2);
            _fun0004_ip = 31; continue _fun0004;
case 29:
            var2 = global;
            var5 = var2.JSON;
            var2 = var5.parse;
            var5 = var2.bind(var5)(var6);
            var2 = var5.map;
            var1 = function(arg1) {
                var2 = arg1;
                var1 = {};
                var5 = _closure1_slot6;
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
case 31:
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
})();