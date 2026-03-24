// app/modules/search/tokens/SearchTokensUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var4 = dependencyMap;
    var1 = metroImportDefault;
    var _closure1_slot0 = var1;
    var _closure1_slot1 = var4;
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var7)(var3, var1, var5);
    var1 = 1;
    var5 = var4[var1];
    var4 = require;
    var1 = undefined;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/search/tokens/SearchTokensUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = /(?:\s*#?((?:"(\\\\|\\"|[^\\"])*")|(?:[^\s]+)))/i;
    var3['ANSWER_IN_REGEX'] = var4;
    var4 = /(?:\s*([^\s]+))/;
    var3['GENERIC_REGEX'] = var4;
    var4 = function makeRegexForOptionsWithNegation(arg1) {
        var5 = arg1;
        var1 = global;
        var4 = var1.RegExp;
        var3 = var5.map;
        var2 = function(arg1) {
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 0;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.escape;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5 = var3.bind(var5)(var2);
        var3 = var5.join;
        var2 = '|';
        var5 = var3.bind(var5)(var2);
        var1 = var1.HermesInternal;
        var3 = var1.concat;
        var2 = '(?:\\s*(-?(?:';
        var1 = ')))';
        var7 = var3.bind(var2)(var5, var1);
        var1 = var4.prototype;
        var2 = Object.create(var1, {constructor: {value: var4}});
        var6 = 'i';
        var8 = var2;
        var1 = new var8[var4](var7, var6, var5);
        var1 = var1 instanceof Object ? var1 : var2;
        return var1;
    };
    var3['makeRegexForOptionsWithNegation'] = var4;
    var2 = function validateForMapWithNegation(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg3;
            var1 = var5.getMatch;
            var6 = 1;
            var4 = var1.bind(var5)(var6);
            var1 = var4.startsWith;
            var7 = '-';
            var2 = var1.bind(var4)(var7);
            var3 = var4;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var4.slice;
            var3 = var1.bind(var4)(var6);
case 2:
            var1 = arg2;
            var6 = var1[var3];
            var1 = null;
            var1 = var1 != var6;
            if(!var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = '';
            var1 = var3 !== var6;
case 4:
            if(!var1) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var4 = var5.setData;
            var3 = var6;
            if(!var2) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var2 = global;
            var2 = var2.HermesInternal;
            var2 = var2.concat;
            var3 = var2.bind(var7)(var6);
case 8:
            var2 = arg1;
            var2 = var4.bind(var5)(var2, var3);
            var1 = true;
case 6:
            return var1;
        }
    };
    var3['validateForMapWithNegation'] = var2;
    return var1;
})();