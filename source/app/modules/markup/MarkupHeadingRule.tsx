// app/modules/markup/MarkupHeadingRule.tsx
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
    var2 = {};
    var1 = 0;
    var8 = var6[var1];
    var7 = native3;
    var1 = undefined;
    var7 = var7.bind(var1)(var8);
    var7 = var7.defaultRules;
    var10 = var7.heading;
    var11 = var2;
    var7 = copyDataProperties(var11, var10);
    var8 = [' ', '#'];
    var7 = 'requiredFirstCharacters';
    var2[var7] = var8;
    var7 = function match(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var6 = arg2;
            var5 = arg3;
            var2 = var6.allowHeading;
            var3 = null;
            var1 = null;
            if(!var2) { _fun0001_ip = 117; continue _fun0001 }
 19:
            if(!(var3 != var5)) { _fun0001_ip = 58; continue _fun0001 }
 23:
            var2 = '';
            if(!(var2 !== var5)) { _fun0001_ip = 58; continue _fun0001 }
 31:
            var4 = var5.match;
            var2 = _closure1_slot2;
            var2 = var4.bind(var5)(var2);
            var2 = var3 != var2;
            var1 = null;
            if(!var2) { _fun0001_ip = 117; continue _fun0001 }
 58:
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 0;
            var2 = var4[var2];
            var4 = undefined;
            var7 = var3.bind(var4)(var2);
            var3 = var7.anyScopeRegex;
            var2 = /^ *(#{1,3})(?:\s+)((?![#]+)[^\n]+?)#*\s*(?:\n|$)/;
            var3 = var3.bind(var7)(var2);
            var2 = arg1;
            var1 = var3.bind(var4)(var2, var6, var5);
 117:
            return var1;
        }
    };
    var4 = 'match';
    var2[var4] = var7;
    var4 = 1;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/markup/MarkupHeadingRule.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();