// app/modules/voice_messages/downsampleWaveform.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var4 = dependencyMap;
    var1 = metroImportDefault;
    var _closure1_slot0 = var1;
    var _closure1_slot1 = var4;
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var7)(var3, var1, var5);
    var1 = 1;
    var5 = var4[var1];
    var4 = require;
    var1 = undefined;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/voice_messages/downsampleWaveform.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function downsampleWaveform(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var9 = arg2;
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var8 = 0;
            var2 = var2[var8];
            var5 = undefined;
            var4 = var3.bind(var5)(var2);
            var2 = var1.length;
            var3 = var2 >= var9;
            var2 = 'Waveform smaller than samples';
            var2 = var4.bind(var5)(var3, var2);
            var2 = var1.length;
            if(!(var2 !== var9)) { _fun0001_ip = 230; continue _fun0001 }
 63:
            var2 = var1.length;
            var7 = var2 / var9;
            var2 = new Array(0);
            var3 = var2.length;
            var3 = var3 < var9;
            var6 = global;
            var5 = 1;
            var4 = 0;
            if(!var3) { _fun0001_ip = 228; continue _fun0001 }
 98:
            var11 = var6.Math;
            var10 = var11.round;
            var3 = var2.length;
            var3 = var3 + var5;
            var3 = var3 * var7;
            var10 = var10.bind(var11)(var3);
            var11 = var4 < var10;
            var12 = 0;
            var3 = 0;
            if(!var11) { _fun0001_ip = 203; continue _fun0001 }
 138:
            var11 = var1.length;
            var11 = var4 < var11;
            var14 = 0;
            var13 = 0;
            var12 = 0;
            var3 = 0;
            if(!var11) { _fun0001_ip = 203; continue _fun0001 }
 158:
            var11 = var1[var4];
            var16 = var14 + var11;
            var15 = var13 + 1;
            var4 = var4 + 1;
            var12 = var16;
            var3 = var15;
            if(!(var4 < var10)) { _fun0001_ip = 203; continue _fun0001 }
 182:
            var11 = var1.length;
            var14 = var16;
            var13 = var15;
            var12 = var14;
            var3 = var13;
            if(var4 < var11) { _fun0001_ip = 158; continue _fun0001 }
 203:
            var11 = var2.length;
            var3 = var12 / var3;
            var2[var11] = var3;
            var3 = var2.length;
            var4 = var10;
            if(var3 < var9) { _fun0001_ip = 98; continue _fun0001 }
 228:
            return var2;
 230:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();