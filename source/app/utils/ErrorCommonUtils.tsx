// app/utils/ErrorCommonUtils.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var4 = native7;
    var _closure1_slot0 = var5;
    var1 = native3;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var4;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = 2;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'utils/ErrorCommonUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getUpdatedOptions(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arg1;
            var1 = {};
            var12 = var1;
            var11 = var4;
            var2 = copyDataProperties(var12, var11);
            var3 = {};
            var7 = null;
            var5 = var7 == var4;
            var6 = undefined;
            var2 = undefined;
            if(var5) { _fun0001_ip = 36; continue _fun0001 }
 30:
            var2 = var4.extra;
 36:
            var12 = var3;
            var11 = var2;
            var2 = copyDataProperties(var12, var11);
            var2 = {};
            var8 = _closure1_slot1;
            var5 = _closure1_slot2;
            var10 = 0;
            var5 = var5[var10];
            var5 = var8.bind(var6)(var5);
            var5 = var5._currentDispatchActionType;
            if(!(var7 == var5)) { _fun0001_ip = 84; continue _fun0001 }
 80:
            var5 = {};
            _fun0001_ip = 119; continue _fun0001;
 84:
            var7 = {};
            var9 = _closure1_slot1;
            var8 = _closure1_slot2;
            var8 = var8[var10];
            var8 = var9.bind(var6)(var8);
            var8 = var8._currentDispatchActionType;
            var7['currentAction'] = var8;
            var5 = var7;
 119:
            var12 = var2;
            var11 = var5;
            var5 = copyDataProperties(var12, var11);
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var4 = 1;
            var4 = var7[var4];
            var5 = var5.bind(var6)(var4);
            var4 = var5.serialize;
            var5 = var4.bind(var5)();
            var4 = 'lastFewActions';
            var2[var4] = var5;
            var12 = var3;
            var11 = var2;
            var2 = copyDataProperties(var12, var11);
            var2 = 'extra';
            var1[var2] = var3;
            return var1;
        }
    };
    var3['getUpdatedOptions'] = var2;
    return var1;
})();