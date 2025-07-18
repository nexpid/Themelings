// app/modules/autocompleter/findNextSelectedResult.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var5.bind(var1)(var2);
    var7 = var2.FindResultDirections;
    var _closure1_slot0 = var7;
    var2 = var2.AutocompleterResultTypes;
    var _closure1_slot1 = var2;
    var2 = 1;
    var2 = var6[var2];
    var6 = var5.bind(var1)(var2);
    var5 = var6.fileFinishedImporting;
    var2 = 'modules/autocompleter/findNextSelectedResult.tsx';
    var2 = var5.bind(var6)(var2);
    var2 = function findNextSelectedResult(arg1, arg2, arg3, arg4) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var8 = arg1;
            var5 = arg2;
            var7 = arg3;
            var2 = arg4;
            var3 = var7.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0001_ip = 171; continue _fun0001 }
 26:
            var4 = null;
            var6 = var5;
            if(!(var4 != var2)) { _fun0001_ip = 44; continue _fun0001 }
 35:
            var6 = var2;
            if(!(var6 === var5)) { _fun0001_ip = 44; continue _fun0001 }
 42:
            return var5;
 44:
            var2 = _closure1_slot0;
            var9 = var2.UP;
            var2 = 1;
            if(!(var8 === var9)) { _fun0001_ip = 70; continue _fun0001 }
 64:
            var2 = -1;
 70:
            var11 = var5 + var2;
            var9 = var11 < var1;
            if(var9) { _fun0001_ip = 135; continue _fun0001 }
 81:
            if(!(!(var11 >= var3))) { _fun0001_ip = 135; continue _fun0001 }
 85:
            var2 = var7[var11];
            var10 = var2.type;
            var2 = _closure1_slot1;
            var5 = var2.HEADER;
            var2 = var11;
            if(!(var10 === var5)) { _fun0001_ip = 133; continue _fun0001 }
 111:
            var10 = _closure1_slot2;
            var16 = undefined;
            var15 = var8;
            var14 = var11;
            var13 = var7;
            var12 = var6;
            var2 = var16[var10](var15, var14, var13, var12, var11);
 133:
            _fun0001_ip = 169; continue _fun0001;
 135:
            var5 = _closure1_slot2;
            var4 = -1;
            if(!var9) { _fun0001_ip = 151; continue _fun0001 }
 148:
            var4 = var3;
 151:
            var16 = undefined;
            var15 = var8;
            var14 = var4;
            var13 = var7;
            var12 = var6;
            var2 = var16[var5](var15, var14, var13, var12, var11);
 169:
            return var2;
 171:
            return var1;
        }
    };
    var _closure1_slot2 = var2;
    var3['default'] = var2;
    return var1;
})();