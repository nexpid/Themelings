// app/modules/dice_roll/DiceRollStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var3 = exports;
    var8 = dependencyMap;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var4);
    var4 = {'channelId': null, 'rolling': false, 'dismissing': false, 'diceCount': 1, 'diceSides': 6, 'results': null};
    var6 = 1;
    var _closure1_slot0 = var4;
    var1 = 0;
    var5 = var8[var1];
    var1 = undefined;
    var10 = var7.bind(var1)(var5);
    var9 = var10.create;
    var5 = function() {
        var1 = _closure1_slot0;
        return var1;
    };
    var5 = var9.bind(var10)(var5);
    var _closure1_slot1 = var5;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/dice_roll/DiceRollStore.tsx';
    var6 = var7.bind(var8)(var6);
    var3['default'] = var5;
    var3['INITIAL_STATE'] = var4;
    var2 = function useDiceRollState(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var3 = _closure1_slot1;
        var2 = undefined;
        var1 = function(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var2 = arg1;
                var4 = var2.channelId;
                var3 = _closure2_slot0;
                var1 = null;
                if(!(var4 === var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var1 = var2;
case 2:
                return var1;
            }
        };
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var3['useDiceRollState'] = var2;
    return var1;
})();