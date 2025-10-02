// app/modules/messages/createNonce.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var1 = metroImportDefault;
    var _closure1_slot0 = var1;
    var _closure1_slot1 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var _closure1_slot2 = var1;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.SnowflakeSequence;
    var7 = var4.prototype;
    var7 = Object.create(var7, {constructor: {value: var4}});
    var12 = var7;
    var4 = new var12[var4](var11);
    var4 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/createNonce.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function createNonce() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = global;
            var2 = var1.Date;
            var1 = var2.now;
            var4 = var1.bind(var2)();
            var2 = _closure1_slot2;
            if(!(var2 !== var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = _closure1_slot3;
            var2 = var3.reset;
            var2 = var2.bind(var3)();
            _closure1_slot2 = var4;
case 2:
            var5 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 0;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var5.bind(var2)(var3);
            var2 = var3.fromTimestampWithSequence;
            var1 = _closure1_slot3;
            var1 = var2.bind(var3)(var4, var1);
            return var1;
        }
    };
    var3['createNonce'] = var2;
    return var1;
})();