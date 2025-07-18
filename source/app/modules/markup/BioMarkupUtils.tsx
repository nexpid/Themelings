// app/modules/markup/BioMarkupUtils.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var11 = native3;
    var9 = native4;
    var3 = native6;
    var8 = native7;
    var _closure1_slot0 = var11;
    var _closure1_slot1 = var8;
    var5 = function getOrParseBioAST(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var5 = arg1;
            var2 = _closure1_slot3;
            var1 = var2.get;
            var1 = var1.bind(var2)(var5);
            var2 = null;
            if(!(var2 == var1)) { _fun0001_ip = 58; continue _fun0001 }
 26:
            var6 = _closure1_slot4;
            var4 = undefined;
            var2 = true;
            var2 = var6.bind(var4)(var5, var2);
            var4 = _closure1_slot3;
            var3 = var4.set;
            var3 = var3.bind(var4)(var5, var2);
            var1 = var2;
 58:
            return var1;
        }
    };
    var _closure1_slot5 = var5;
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var7)(var3, var1, var2);
    var2 = 0;
    var6 = var8[var2];
    var1 = undefined;
    var7 = var11.bind(var1)(var6);
    var6 = 1;
    var6 = var8[var6];
    var6 = var11.bind(var1)(var6);
    var10 = var6.PROFILE_BIO_RULES;
    var6 = new Array(2);
    var6[0] = var10;
    var10 = 2;
    var10 = var8[var10];
    var12 = var11.bind(var1)(var10);
    var10 = {'enableBuildOverrides': false, 'mustConfirmExternalLink': true};
    var10 = var12.bind(var1)(var10);
    var6[1] = var10;
    var13 = var7.bind(var1)(var6);
    var _closure1_slot2 = var13;
    var6 = 3;
    var6 = var8[var6];
    var10 = var11.bind(var1)(var6);
    var6 = {};
    var7 = 2000;
    var6['max'] = var7;
    var7 = var10.prototype;
    var7 = Object.create(var7, {constructor: {value: var10}});
    var17 = var7;
    var16 = var6;
    var6 = new var17[var10](var16, var15);
    var6 = var6 instanceof Object ? var6 : var7;
    var _closure1_slot3 = var6;
    var7 = 4;
    var6 = var8[var7];
    var10 = var9.bind(var1)(var6);
    var6 = var10.reactParserFor;
    var6 = var6.bind(var10)(var13);
    var10 = 5;
    var10 = var8[var10];
    var12 = var11.bind(var1)(var10);
    var10 = var12.astParserFor;
    var10 = var10.bind(var12)(var13);
    var _closure1_slot4 = var10;
    var7 = var8[var7];
    var9 = var9.bind(var1)(var7);
    var7 = var9.reactParserFor;
    var2 = var8[var2];
    var10 = var11.bind(var1)(var2);
    var2 = 7;
    var2 = var8[var2];
    var12 = var11.bind(var1)(var2);
    var11 = var12.omit;
    var2 = ['link', 'url', 'autolink', 'customEmoji', 'emoji', 'commandMention'];
    var11 = var11.bind(var12)(var13, var2);
    var2 = new Array(2);
    var2[0] = var11;
    var11 = {};
    var12 = {};
    var13 = function react() {
        var1 = null;
        return var1;
    };
    var12['react'] = var13;
    var11['emoji'] = var12;
    var2[1] = var11;
    var2 = var10.bind(var1)(var2);
    var2 = var7.bind(var9)(var2);
    var7 = 8;
    var8 = var8[var7];
    var7 = native2;
    var9 = var7.bind(var1)(var8);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/markup/BioMarkupUtils.tsx';
    var7 = var8.bind(var9)(var7);
    var3['parseBioReact'] = var6;
    var3['getOrParseBioAST'] = var5;
    var4 = function parseBioReactWithCachedAST(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var4 = arg1;
            var1 = var4.trim;
            var1 = var1.bind(var4)();
            var2 = var1.length;
            var1 = 0;
            if(!(var1 !== var2)) { _fun0002_ip = 105; continue _fun0002 }
 24:
            var2 = _closure1_slot5;
            var3 = undefined;
            var2 = var2.bind(var3)(var4);
            var7 = _closure1_slot0;
            var8 = _closure1_slot1;
            var6 = 6;
            var4 = var8[var6];
            var5 = var7.bind(var3)(var4);
            var4 = var5.reactFor;
            var6 = var8[var6];
            var8 = var7.bind(var3)(var6);
            var7 = var8.ruleOutput;
            var6 = _closure1_slot2;
            var1 = 'react';
            var1 = var7.bind(var8)(var6, var1);
            var1 = var4.bind(var5)(var1);
            var1 = var1.bind(var3)(var2);
            return var1;
 105:
            var1 = null;
            return var1;
        }
    };
    var3['parseBioReactWithCachedAST'] = var4;
    var3['parseBioReactWithoutScrolling'] = var2;
    return var1;
})();