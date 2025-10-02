// app/intl/index.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var6 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var7;
    var10 = function getSystemLocale(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 3;
            var3 = var5[var3];
            var5 = undefined;
            var3 = var4.bind(var5)(var3);
            var4 = var3.Platform;
            var6 = var4.OS;
            var4 = 'android';
            if(!(var4 !== var6)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var3.NativeModules;
            var3 = var3.LocalizationManager;
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 4;
            var2 = var6[var2];
            var2 = var4.bind(var5)(var2);
            var3 = var2.default;
case 4:
            var2 = null;
            if(!(var2 != var3)) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var2 = var3.getConstants;
            var2 = var2.bind(var3)();
            var1 = var2.Language;
case 5:
            return var1;
        }
    };
    var1 = global;
    var9 = var1.Object;
    var4 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var9)(var3, var1, var2);
    var1 = 0;
    var4 = var7[var1];
    var2 = metroImportAll;
    var1 = undefined;
    var2 = var2.bind(var1)(var4);
    var2 = 1;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var9 = var2.Fonts;
    var2 = 2;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var2 = var2.jsx;
    var _closure1_slot3 = var2;
    var2 = {};
    var4 = {};
    var11 = var9.PRIMARY_SEMIBOLD;
    var4['fontFamily'] = var11;
    var2['strong'] = var4;
    var4 = {};
    var11 = 'italic';
    var4['fontStyle'] = var11;
    var2['italic'] = var4;
    var4 = {};
    var9 = var9.CODE_NORMAL;
    var4['fontFamily'] = var9;
    var2['code'] = var4;
    var4 = {'textDecorationLine': 'line-through', 'textDecorationStyle': 'solid'};
    var2['del'] = var4;
    var _closure1_slot4 = var2;
    var12 = 'en-US';
    var4 = var10.bind(var1)(var12);
    var9 = 5;
    var2 = var7[var9];
    var11 = var8.bind(var1)(var2);
    var2 = var11.getNormalizedLocale;
    var2 = var2.bind(var11)(var4, var12);
    var14 = 6;
    var11 = var7[var14];
    var11 = var8.bind(var1)(var11);
    var13 = var11.IntlManager;
    var11 = {};
    var11['initialLocale'] = var2;
    var11['defaultLocale'] = var12;
    var12 = var13.prototype;
    var12 = Object.create(var12, {constructor: {value: var13}});
    var22 = var12;
    var21 = var11;
    var11 = new var22[var13](var21, var20);
    var13 = var11 instanceof Object ? var11 : var12;
    var12 = var13.withFormatters;
    var11 = {};
    var15 = var7[var14];
    var17 = var8.bind(var1)(var15);
    var16 = var17.makeReactFormatter;
    var15 = {};
    var18 = function $i(arg1, arg2) {
        var5 = _closure1_slot3;
        var3 = _closure1_slot1;
        var4 = _closure1_slot2;
        var2 = 7;
        var2 = var4[var2];
        var4 = undefined;
        var3 = var3.bind(var4)(var2);
        var2 = {};
        var1 = _closure1_slot4;
        var1 = var1.italic;
        var2['style'] = var1;
        var1 = arg1;
        var2['children'] = var1;
        var1 = arg2;
        var1 = var5.bind(var4)(var3, var2, var1);
        return var1;
    };
    var15['$i'] = var18;
    var18 = function $b(arg1, arg2) {
        var5 = _closure1_slot3;
        var3 = _closure1_slot1;
        var4 = _closure1_slot2;
        var2 = 7;
        var2 = var4[var2];
        var4 = undefined;
        var3 = var3.bind(var4)(var2);
        var2 = {};
        var1 = _closure1_slot4;
        var1 = var1.strong;
        var2['style'] = var1;
        var1 = arg1;
        var2['children'] = var1;
        var1 = arg2;
        var1 = var5.bind(var4)(var3, var2, var1);
        return var1;
    };
    var15['$b'] = var18;
    var18 = function $del(arg1, arg2) {
        var5 = _closure1_slot3;
        var3 = _closure1_slot1;
        var4 = _closure1_slot2;
        var2 = 7;
        var2 = var4[var2];
        var4 = undefined;
        var3 = var3.bind(var4)(var2);
        var2 = {};
        var1 = _closure1_slot4;
        var1 = var1.del;
        var2['style'] = var1;
        var1 = arg1;
        var2['children'] = var1;
        var1 = arg2;
        var1 = var5.bind(var4)(var3, var2, var1);
        return var1;
    };
    var15['$del'] = var18;
    var18 = function $p(arg1, arg2) {
        var5 = _closure1_slot3;
        var2 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 7;
        var1 = var3[var1];
        var4 = undefined;
        var3 = var2.bind(var4)(var1);
        var2 = {};
        var1 = arg1;
        var2['children'] = var1;
        var1 = arg2;
        var1 = var5.bind(var4)(var3, var2, var1);
        return var1;
    };
    var15['$p'] = var18;
    var18 = function $code(arg1, arg2) {
        var5 = _closure1_slot3;
        var3 = _closure1_slot1;
        var4 = _closure1_slot2;
        var2 = 7;
        var2 = var4[var2];
        var4 = undefined;
        var3 = var3.bind(var4)(var2);
        var2 = {};
        var1 = _closure1_slot4;
        var1 = var1.code;
        var2['style'] = var1;
        var1 = arg1;
        var2['children'] = var1;
        var1 = arg2;
        var1 = var5.bind(var4)(var3, var2, var1);
        return var1;
    };
    var15['$code'] = var18;
    var18 = function $link(arg1, arg2, arg3) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg3;
            var2 = var1[Symbol.iterator];
            var1 = var2().next;
            var4 = var1().value;
            var1 = var2;
            var5 = undefined;
            var3 = var1 === var5;
            var1 = undefined;
            if(var3) { _fun0002_ip = 7; continue _fun0002 }
case 8:
            var1 = var4;
case 7:
            if(var3) { _fun0002_ip = 9; continue _fun0002 }
case 10:
            var2.return();
case 9:
            var4 = _closure1_slot3;
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 8;
            var2 = var6[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.IntlLink;
            var2 = {};
            var2['target'] = var1;
            var1 = arg1;
            var2['children'] = var1;
            var1 = arg2;
            var1 = var4.bind(var5)(var3, var2, var1);
            return var1;
        }
    };
    var15['$link'] = var18;
    var15 = var16.bind(var17)(var15);
    var11['format'] = var15;
    var15 = var7[var14];
    var15 = var8.bind(var1)(var15);
    var15 = var15.stringFormatter;
    var11['formatToPlainString'] = var15;
    var15 = var7[var14];
    var15 = var8.bind(var1)(var15);
    var15 = var15.markdownFormatter;
    var11['formatToMarkdownString'] = var15;
    var14 = var7[var14];
    var14 = var8.bind(var1)(var14);
    var14 = var14.astFormatter;
    var11['formatToParts'] = var14;
    var11 = var12.bind(var13)(var11);
    var _closure1_slot5 = var11;
    var12 = 9;
    var12 = var7[var12];
    var14 = var8.bind(var1)(var12);
    var13 = var14.fileFinishedImporting;
    var12 = 'intl/index.native.tsx';
    var12 = var13.bind(var14)(var12);
    var3['intl'] = var11;
    var3['getSystemLocale'] = var10;
    var10 = var7[var9];
    var10 = var8.bind(var1)(var10);
    var10 = var10.getAvailableLocales;
    var3['getAvailableLocales'] = var10;
    var9 = var7[var9];
    var9 = var8.bind(var1)(var9);
    var9 = var9.getLanguages;
    var3['getLanguages'] = var9;
    var5 = function(arg1) {
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 5;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useSyncMessages;
        var2 = _closure1_slot5;
        var1 = arg1;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useSyncMessages'] = var5;
    var5 = 10;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var5 = var5._defaultMessages;
    var3['t'] = var5;
    var5 = 11;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var3['international'] = var5;
    var3['systemLocale'] = var4;
    var3['initialLocale'] = var2;
    return var1;
})();