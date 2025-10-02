// app/modules/markup/MarkupShopLinkRule.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var2 = true;
    var4['value'] = var2;
    var2 = '__esModule';
    var2 = var8.bind(var9)(var3, var2, var4);
    var4 = var1.RegExp;
    var1 = var4.prototype;
    var2 = Object.create(var1, {constructor: {value: var4}});
    var12 = '^https://(?:(?:canary\\.|ptb\\.)?discord(?:app)?\\.com|staging\\.discord\\.co)/shop(?:\\?tab=[a-z]+)?#itemSkuId=(\\d+)';
    var13 = var2;
    var1 = new var13[var4](var12, var11);
    var1 = var1 instanceof Object ? var1 : var2;
    var _closure1_slot2 = var1;
    var2 = {};
    var4 = {};
    var1 = 0;
    var9 = var6[var1];
    var8 = metroImportDefault;
    var1 = undefined;
    var8 = var8.bind(var1)(var9);
    var8 = var8.defaultRules;
    var8 = var8.url;
    var9 = var8.order;
    var8 = 0.5;
    var8 = var9 - var8;
    var4['order'] = var8;
    var8 = ['h'];
    var4['requiredFirstCharacters'] = var8;
    var8 = function match(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = _closure1_slot2;
            var2 = var4.exec;
            var1 = arg1;
            var1 = var2.bind(var4)(var1);
            var2 = null;
            if(!(var2 != var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var3 = 1;
            var4 = var4[var3];
            var3 = undefined;
            var5 = var5.bind(var3)(var4);
            var4 = var5.getCollectiblesShopLinkMentionEnabled;
            var3 = 'MarkupShopLinkRule';
            var3 = var4.bind(var5)(var3);
            if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            return var2;
case 2:
            return var1;
        }
    };
    var4['match'] = var8;
    var7 = function parse(arg1) {
        var2 = arg1;
        var1 = 0;
        var3 = var2[var1];
        var1 = 1;
        var2 = var2[var1];
        var1 = {};
        var4 = 'shopLink';
        var1['type'] = var4;
        var5 = {};
        var4 = 'text';
        var5['type'] = var4;
        var5['content'] = var2;
        var4 = new Array(1);
        var4[0] = var5;
        var1['content'] = var4;
        var1['shopLink'] = var3;
        var1['skuId'] = var2;
        return var1;
    };
    var4['parse'] = var7;
    var2['shopLink'] = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/markup/MarkupShopLinkRule.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();