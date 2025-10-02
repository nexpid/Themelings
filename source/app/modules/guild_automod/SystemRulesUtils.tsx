// app/modules/guild_automod/SystemRulesUtils.tsx
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
    var5 = var1.Set;
    var1 = var5.prototype;
    var4 = Object.create(var1, {constructor: {value: var5}});
    var10 = ['1030554520465440818'];
    var11 = var4;
    var1 = new var11[var5](var10, var9);
    var1 = var1 instanceof Object ? var1 : var4;
    var _closure1_slot0 = var1;
    var4 = dependencyMap;
    var1 = 0;
    var5 = var4[var1];
    var4 = require;
    var1 = undefined;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_automod/SystemRulesUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function isDefaultRuleId(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var1 = var1 != var4;
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = _closure1_slot0;
            var2 = var3.has;
            var1 = var2.bind(var3)(var4);
case 2:
            return var1;
        }
    };
    var3['isDefaultRuleId'] = var2;
    return var1;
})();