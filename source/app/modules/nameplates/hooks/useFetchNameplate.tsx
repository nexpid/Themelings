// app/modules/nameplates/hooks/useFetchNameplate.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var4 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = 3;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/nameplates/hooks/useFetchNameplate.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useFetchNameplate(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = _closure1_slot0;
            var1 = _closure1_slot1;
            var8 = 0;
            var1 = var1[var8];
            var7 = undefined;
            var3 = var2.bind(var7)(var1);
            var2 = var3.useFetchCollectiblesProduct;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            var5 = var1.product;
            var2 = var1.isFetching;
            var3 = null;
            var1 = var3 == var5;
            var9 = undefined;
            if(var1) { _fun0001_ip = 76; continue _fun0001 }
 61:
            var1 = var5.items;
            var1 = var1[var8];
            var9 = var1.type;
 76:
            var6 = _closure1_slot0;
            var10 = _closure1_slot1;
            var1 = 1;
            var1 = var10[var1];
            var1 = var6.bind(var7)(var1);
            var1 = var1.CollectiblesItemType;
            var1 = var1.NAMEPLATE;
            var6 = undefined;
            if(!(var9 === var1)) { _fun0001_ip = 124; continue _fun0001 }
 114:
            var1 = var5.items;
            var6 = var1[var8];
 124:
            var1 = {};
            var1['nameplateProduct'] = var5;
            var1['nameplateRecord'] = var6;
            var5 = var3 != var6;
            var3 = undefined;
            if(!var5) { _fun0001_ip = 176; continue _fun0001 }
 145:
            var5 = _closure1_slot0;
            var8 = _closure1_slot1;
            var4 = 2;
            var4 = var8[var4];
            var5 = var5.bind(var7)(var4);
            var4 = var5.getNameplateDataFromRecord;
            var3 = var4.bind(var5)(var6);
 176:
            var1['nameplateData'] = var3;
            var1['isFetching'] = var2;
            return var1;
        }
    };
    var3['useFetchNameplate'] = var2;
    return var1;
})();