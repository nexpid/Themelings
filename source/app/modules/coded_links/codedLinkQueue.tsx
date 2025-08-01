// app/modules/coded_links/codedLinkQueue.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = metroImportDefault;
    var3 = exports;
    var5 = dependencyMap;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var5[var1];
    var1 = undefined;
    var8 = var6.bind(var1)(var4);
    var4 = var8.prototype;
    var7 = Object.create(var4, {constructor: {value: var8}});
    var11 = 'codedLinkQueue';
    var12 = var7;
    var4 = new var12[var8](var11, var10);
    var4 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var5[var4];
    var7 = var6.bind(var1)(var4);
    var4 = var7.prototype;
    var6 = Object.create(var4, {constructor: {value: var7}});
    var11 = {'concurrency': 5, 'intervalCap': 10, 'interval': 2000};
    var12 = var6;
    var4 = new var12[var7](var11, var10);
    var8 = var4 instanceof Object ? var4 : var6;
    var _closure1_slot1 = var8;
    var7 = var8.on;
    var6 = 'add';
    var4 = function() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = _closure1_slot1;
            var3 = var2.size;
            var2 = 0;
            if(!(var3 > var2)) { _fun0001_ip = 48; continue _fun0001 }
 18:
            var4 = _closure1_slot0;
            var3 = var4.warn;
            var1 = _closure1_slot1;
            var2 = var1.size;
            var1 = 'Message link fetch queue backlog:';
            var1 = var3.bind(var4)(var1, var2);
 48:
            var1 = undefined;
            return var1;
        }
    };
    var4 = var7.bind(var8)(var6, var4);
    var4 = 2;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/coded_links/codedLinkQueue.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function queueMessageLinkFetch(arg1) {
        var3 = _closure1_slot1;
        var2 = var3.add;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var3['queueMessageLinkFetch'] = var2;
    return var1;
})();