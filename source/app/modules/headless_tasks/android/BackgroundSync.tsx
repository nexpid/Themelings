// app/modules/headless_tasks/android/BackgroundSync.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = require;
    var6 = metroImportDefault;
    var4 = dependencyMap;
    var _closure1_slot0 = var3;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var4;
    var1 = 0;
    var5 = var4[var1];
    var1 = undefined;
    var5 = var6.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var4[var5];
    var5 = var6.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var4[var5];
    var5 = var6.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var4[var5];
    var7 = var6.bind(var1)(var5);
    var5 = var7.prototype;
    var6 = Object.create(var5, {constructor: {value: var7}});
    var8 = 'BackgroundSync';
    var9 = var6;
    var5 = new var9[var7](var8, var7);
    var5 = var5 instanceof Object ? var5 : var6;
    var _closure1_slot6 = var5;
    var5 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var _closure2_slot0 = var2;
            var4 = _closure1_slot5;
            var3 = var4.getState;
            var4 = var3.bind(var4)();
            var3 = 'active';
            if(!(var3 !== var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = _closure1_slot3;
            var3 = var4.isConnected;
            var3 = var3.bind(var4)();
            if(var3) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var5 = _closure1_slot3;
            var4 = var5.isTryingToConnect;
            var3 = var4.bind(var5)();
case 4:
            if(var3) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var3 = 4;
            var4 = var4[var3];
            var3 = undefined;
            var4 = var5.bind(var3)(var4);
            var3 = var4.carefullyOpenDatabase;
            var5 = _closure1_slot4;
            var2 = var5.getId;
            var2 = var2.bind(var5)();
            var2 = var3.bind(var4)(var2);
case 6:
            var2 = global;
            var3 = var2.Promise;
            var2 = var3.prototype;
            var2 = Object.create(var2, {constructor: {value: var3}});
            var6 = function(arg1) {
                var5 = _closure1_slot6;
                var4 = var5.log;
                var3 = _closure2_slot0;
                var2 = 'Executing BackgroundSync with ';
                var2 = var4.bind(var5)(var2, var3);
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 5;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.backgroundSync;
                var2 = {};
                var4 = var3.bind(var4)(var2);
                var3 = var4.then;
                var2 = arg1;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var7 = var2;
            var1 = new var7[var3](var6, var5);
            var1 = var1 instanceof Object ? var1 : var2;
            _fun0001_ip = 8; continue _fun0001;
case 2:
            var2 = global;
            var3 = var2.Promise;
            var2 = var3.resolve;
            var1 = var2.bind(var3)();
case 8:
            return var1;
        }
    };
    var2 = moduleObject;
    var2['exports'] = var5;
    var2 = 6;
    var2 = var4[var2];
    var4 = var3.bind(var1)(var2);
    var3 = var4.fileFinishedImporting;
    var2 = 'modules/headless_tasks/android/BackgroundSync.tsx';
    var2 = var3.bind(var4)(var2);
    return var1;
})();