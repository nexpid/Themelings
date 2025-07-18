// app/modules/guild_automod/SystemRulesUtils.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var3 = native6;
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
    var4 = native7;
    var1 = 0;
    var5 = var4[var1];
    var4 = native2;
    var1 = undefined;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_automod/SystemRulesUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function isDefaultRuleId(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arg1;
            var1 = null;
            var1 = var1 != var4;
            if(!var1) { _fun0001_ip = 29; continue _fun0001 }
 12:
            var3 = _closure1_slot0;
            var2 = var3.has;
            var1 = var2.bind(var3)(var4);
 29:
            return var1;
        }
    };
    var3['isDefaultRuleId'] = var2;
    return var1;
})();