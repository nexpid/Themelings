// app/modules/markup/MarkupSubtextRule.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var2);
    var1 = /\n$/;
    var _closure1_slot2 = var1;
    var1 = /^ *-# +((?!(-#)+)[^\n]+?) *(?:\n|$)/;
    var _closure1_slot3 = var1;
    var2 = {};
    var1 = 0;
    var8 = var6[var1];
    var7 = native3;
    var1 = undefined;
    var7 = var7.bind(var1)(var8);
    var7 = var7.defaultRules;
    var7 = var7.heading;
    var7 = var7.order;
    var2['order'] = var7;
    var7 = ['-'];
    var2['requiredFirstCharacters'] = var7;
    var7 = function match(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var6 = arg3;
            var1 = null;
            if(!(var1 != var6)) { _fun0001_ip = 44; continue _fun0001 }
 9:
            var2 = '';
            if(!(var2 !== var6)) { _fun0001_ip = 44; continue _fun0001 }
 17:
            var3 = var6.match;
            var2 = _closure1_slot2;
            var2 = var3.bind(var6)(var2);
            var2 = var1 != var2;
            var1 = null;
            if(!var2) { _fun0001_ip = 96; continue _fun0001 }
 44:
            var4 = _closure1_slot0;
            var5 = _closure1_slot1;
            var3 = 0;
            var3 = var5[var3];
            var5 = undefined;
            var4 = var4.bind(var5)(var3);
            var3 = var4.anyScopeRegex;
            var2 = _closure1_slot3;
            var4 = var3.bind(var4)(var2);
            var3 = arg1;
            var2 = arg2;
            var1 = var4.bind(var5)(var3, var2, var6);
 96:
            return var1;
        }
    };
    var2['match'] = var7;
    var4 = function parse(arg1, arg2, arg3) {
        var1 = {};
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 0;
        var3 = var3[var2];
        var2 = undefined;
        var6 = var4.bind(var2)(var3);
        var5 = var6.parseInline;
        var3 = arg1;
        var2 = 1;
        var3 = var3[var2];
        var2 = var3.trim;
        var4 = var2.bind(var3)();
        var3 = arg2;
        var2 = arg3;
        var2 = var5.bind(var6)(var3, var4, var2);
        var1['content'] = var2;
        return var1;
    };
    var2['parse'] = var4;
    var4 = 1;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/markup/MarkupSubtextRule.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();