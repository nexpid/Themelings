// app/modules/chat/native/ChatChangesetUpdateTracker.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var4 = true;
    var5['value'] = var4;
    var4 = '__esModule';
    var4 = var6.bind(var7)(var3, var4, var5);
    var1 = var1.WeakMap;
    var4 = var1.prototype;
    var4 = Object.create(var4, {constructor: {value: var1}});
    var11 = var4;
    var1 = new var11[var1](var10);
    var1 = var1 instanceof Object ? var1 : var4;
    var _closure1_slot0 = var1;
    var4 = dependencyMap;
    var1 = 0;
    var5 = var4[var1];
    var4 = require;
    var1 = undefined;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/chat/native/ChatChangesetUpdateTracker.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function getAndIncrementChangesetIdForChat(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var3 = _closure1_slot0;
            var1 = var3.get;
            var1 = var1.bind(var3)(var4);
            var3 = null;
            var5 = var3 != var1;
            var3 = 0;
            if(!var5) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var1;
case 2:
            var1 = 1;
            var1 = var3 + var1;
            var3 = _closure1_slot0;
            var2 = var3.set;
            var2 = var2.bind(var3)(var4, var1);
            return var1;
        }
    };
    var3['getAndIncrementChangesetIdForChat'] = var4;
    var2 = function getChangesetIdForChat(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var6 = arg1;
            var4 = null;
            var3 = var4 == var6;
            var1 = 0;
            if(var3) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var5 = _closure1_slot0;
            var3 = var5.get;
            var3 = var3.bind(var5)(var6);
            var4 = var4 != var3;
            var2 = 0;
            if(!var4) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var2 = var3;
case 6:
            var1 = var2;
case 4:
            return var1;
        }
    };
    var3['getChangesetIdForChat'] = var2;
    return var1;
})();