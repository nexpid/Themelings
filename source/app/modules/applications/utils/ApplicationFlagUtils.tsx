// app/modules/applications/utils/ApplicationFlagUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var6 = dependencyMap;
    var1 = metroImportAll;
    var _closure1_slot0 = var1;
    var _closure1_slot1 = var6;
    var4 = function getApplicationFlags(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var1 = null;
            if(!(var1 != var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var1 != var2;
            if(!var3) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = _closure1_slot2;
            var4 = var2 instanceof var4;
            if(var4) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var5 = 'flags';
            var5 = var5 in var2;
            if(!var5) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var6 = var2.flags;
            var7 = 'bigint';
            var6 = typeof var6;
            var5 = var7 === var6;
case 8:
            var4 = var5;
case 6:
            if(var4) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var5 = 'flags';
            var5 = var5 in var2;
            if(!var5) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var6 = var2.flags;
            var5 = var1 != var6;
case 12:
            if(!var5) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var6 = var2.flags;
            var7 = 'object';
            var6 = typeof var6;
            var5 = var7 === var6;
case 14:
            if(!var5) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var7 = var2.flags;
            var6 = 'parts';
            var5 = var6 in var7;
case 16:
            var4 = var5;
case 10:
            var3 = var4;
case 4:
            if(var3) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var3 = 1;
            var4 = var4[var3];
            var3 = undefined;
            var4 = var5.bind(var3)(var4);
            var3 = var4.deserialize;
            var5 = var2.flags_new;
            if(!(var1 == var5)) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var5 = var2.flags;
case 20:
            var6 = var1 != var5;
            var1 = 0;
            if(!var6) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var1 = var5;
case 22:
            var1 = var3.bind(var4)(var1);
            _fun0001_ip = 24; continue _fun0001;
case 18:
            var1 = var2.flags;
case 24:
            _fun0001_ip = 25; continue _fun0001;
case 2:
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 1;
            var3 = var3[var2];
            var2 = undefined;
            var4 = var4.bind(var2)(var3);
            var3 = var4.deserialize;
            var2 = 0;
            var1 = var3.bind(var4)(var2);
case 25:
            return var1;
        }
    };
    var _closure1_slot3 = var4;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var5);
    var1 = 0;
    var7 = var6[var1];
    var5 = metroImportDefault;
    var1 = undefined;
    var5 = var5.bind(var1)(var7);
    var _closure1_slot2 = var5;
    var5 = 2;
    var6 = var6[var5];
    var5 = require;
    var7 = var5.bind(var1)(var6);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/applications/utils/ApplicationFlagUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var3['getApplicationFlags'] = var4;
    var2 = function hasApplicationFlag(arg1, arg2) {
        var3 = _closure1_slot0;
        var4 = _closure1_slot1;
        var2 = 1;
        var2 = var4[var2];
        var5 = undefined;
        var4 = var3.bind(var5)(var2);
        var3 = var4.has;
        var2 = _closure1_slot3;
        var1 = arg1;
        var2 = var2.bind(var5)(var1);
        var1 = arg2;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['hasApplicationFlag'] = var2;
    return var1;
})();