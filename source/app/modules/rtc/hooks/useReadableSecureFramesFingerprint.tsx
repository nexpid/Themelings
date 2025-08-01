// app/modules/rtc/hooks/useReadableSecureFramesFingerprint.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/rtc/hooks/useReadableSecureFramesFingerprint.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useReadableSecureFramesFingerprint(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var4 = var2.fingerprintBase64;
            var _closure2_slot0 = var4;
            var7 = var2.chunkSize;
            var _closure2_slot1 = var7;
            var6 = var2.desiredLength;
            var _closure2_slot2 = var6;
            var5 = _closure1_slot3;
            var3 = var5.useMemo;
            var2 = new Array(3);
            var2[0] = var7;
            var2[1] = var4;
            var2[2] = var6;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure2_slot0;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0002_ip = 217; continue _fun0002 }
 16:
                    var4 = _closure2_slot0;
                    var3 = '';
                    if(!(var3 !== var4)) { _fun0002_ip = 217; continue _fun0002 }
 31:
                    var7 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var4 = 1;
                    var4 = var6[var4];
                    var5 = undefined;
                    var8 = var7.bind(var5)(var4);
                    var7 = var8.toByteArray;
                    var4 = _closure2_slot0;
                    var7 = var7.bind(var8)(var4);
                    var4 = _closure1_slot0;
                    var3 = 2;
                    var3 = var6[var3];
                    var6 = var4.bind(var5)(var3);
                    var5 = var6.generateDisplayableCode;
                    var4 = _closure2_slot2;
                    var3 = _closure2_slot1;
                    var5 = var5.bind(var6)(var7, var4, var3);
                    if(!(var1 != var5)) { _fun0002_ip = 215; continue _fun0002 }
 112:
                    var3 = global;
                    var7 = var3.RegExp;
                    var8 = _closure2_slot1;
                    var2 = var3.HermesInternal;
                    var6 = var2.concat;
                    var4 = '.{1,';
                    var2 = '}';
                    var11 = var6.bind(var4)(var8, var2);
                    var2 = var7.prototype;
                    var4 = Object.create(var2, {constructor: {value: var7}});
                    var10 = 'g';
                    var12 = var4;
                    var2 = new var12[var7](var11, var10, var9);
                    var4 = var2 instanceof Object ? var2 : var4;
                    var2 = var5.match;
                    var5 = var2.bind(var5)(var4);
                    var4 = var1 == var5;
                    var2 = null;
                    if(var4) { _fun0002_ip = 213; continue _fun0002 }
 197:
                    var4 = var3.Array;
                    var3 = var4.from;
                    var2 = var3.bind(var4)(var5);
 213:
                    return var2;
 215:
                    return var1;
 217:
                    return var1;
                }
            };
            var1 = var3.bind(var5)(var1, var2);
            var2 = null;
            if(!(var2 != var4)) { _fun0001_ip = 92; continue _fun0001 }
 80:
            var3 = '';
            if(!(var3 !== var4)) { _fun0001_ip = 92; continue _fun0001 }
 88:
            if(!(var2 != var1)) { _fun0001_ip = 94; continue _fun0001 }
 92:
            return var1;
 94:
            var1 = global;
            var3 = var1.Error;
            var1 = var3.prototype;
            var2 = Object.create(var1, {constructor: {value: var3}});
            var9 = '[useReadableSecureFramesCode] Failed to parse base 64 code.';
            var10 = var2;
            var1 = new var10[var3](var9, var8);
            var1 = var1 instanceof Object ? var1 : var2;
            throw var1;
        }
    };
    var3['useReadableSecureFramesFingerprint'] = var2;
    return var1;
})();