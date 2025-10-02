// discord_common/js/packages/i18n/parse.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var6 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var8;
    var4 = function setUpdateRules(arg1) {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var4 = 6;
        var7 = var6[var4];
        var1 = undefined;
        var7 = var5.bind(var1)(var7);
        var9 = var7.rules;
        var8 = function parserFor(arg1, arg2) {
            var7 = arg1;
            var6 = _closure1_slot1;
            var8 = _closure1_slot2;
            var2 = 5;
            var3 = var8[var2];
            var5 = undefined;
            var9 = var6.bind(var5)(var3);
            var4 = var9.parserFor;
            var3 = arg2;
            var3 = var3.bind(var5)(var7);
            var3 = var4.bind(var9)(var3);
            var _closure3_slot0 = var3;
            var3 = var8[var2];
            var4 = var6.bind(var5)(var3);
            var3 = var4.reactFor;
            var2 = var8[var2];
            var6 = var6.bind(var5)(var2);
            var5 = var6.ruleOutput;
            var2 = 'react';
            var2 = var5.bind(var6)(var7, var2);
            var2 = var3.bind(var4)(var2);
            var _closure3_slot1 = var2;
            var1 = function(arg1, arg2, arg3) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    var3 = arg1;
                    var2 = var3.includes;
                    var1 = '\n\n';
                    var2 = var2.bind(var3)(var1);
                    var2 = !var2;
                    var5 = var3;
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var5 = var3 + var1;
case 2:
                    var3 = _closure3_slot1;
                    var4 = _closure3_slot0;
                    var1 = {};
                    var1['inline'] = var2;
                    var2 = arg2;
                    var1['context'] = var2;
                    var2 = arg3;
                    var1['unsafeContext'] = var2;
                    var2 = undefined;
                    var1 = var4.bind(var2)(var5, var1);
                    var1 = var3.bind(var2)(var1);
                    return var1;
                }
            };
            return var1;
        };
        var7 = arg1;
        var7 = var8.bind(var1)(var9, var7);
        var _closure1_slot3 = var7;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var4 = var4.rules;
        var2 = function parserForNonReact(arg1) {
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 5;
            var3 = var3[var2];
            var2 = undefined;
            var4 = var4.bind(var2)(var3);
            var3 = var4.parserFor;
            var2 = arg1;
            var2 = var3.bind(var4)(var2);
            var _closure3_slot0 = var2;
            var1 = function(arg1, arg2, arg3) {
                var4 = _closure3_slot0;
                var2 = arg1;
                var1 = '\n\n';
                var3 = var2 + var1;
                var2 = {};
                var1 = false;
                var2['inline'] = var1;
                var1 = arg2;
                var2['context'] = var1;
                var1 = arg3;
                var2['unsafeContext'] = var1;
                var1 = undefined;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
            };
            return var1;
        };
        var2 = var2.bind(var1)(var4);
        var _closure1_slot4 = var2;
        return var1;
    };
    var _closure1_slot13 = var4;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var8[var1];
    var1 = undefined;
    var5 = var6.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var5 = 1;
    var5 = var8[var5];
    var5 = var6.bind(var1)(var5);
    var _closure1_slot6 = var5;
    var5 = 2;
    var5 = var8[var5];
    var5 = var6.bind(var1)(var5);
    var _closure1_slot7 = var5;
    var5 = 3;
    var5 = var8[var5];
    var5 = var7.bind(var1)(var5);
    var6 = var5.FORMAT_RE;
    var _closure1_slot8 = var6;
    var6 = var5.MARKDOWN_RE;
    var _closure1_slot9 = var6;
    var6 = var5.UNSAFE_RE;
    var _closure1_slot10 = var6;
    var5 = var5.UNSAFE_RE_ALL;
    var _closure1_slot11 = var5;
    var5 = function() {
        var4 = _closure1_slot7;
        var3 = function FormattedMessage(arg1, arg2, arg3) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var9 = arg1;
                var4 = arg3;
                var3 = this;
                var6 = _closure1_slot6;
                var5 = _closure2_slot0;
                var1 = undefined;
                var5 = var6.bind(var1)(var3, var5);
                var5 = var9;
                if(var4) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                var8 = var9.replace;
                var7 = _closure1_slot11;
                var6 = '';
                var5 = var8.bind(var9)(var7, var6);
case 4:
                var3['message'] = var5;
                var3['hasMarkdown'] = var4;
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 4;
                var2 = var5[var2];
                var6 = var4.bind(var1)(var2);
                var11 = var3.message;
                var2 = var6.prototype;
                var4 = Object.create(var2, {constructor: {value: var6}});
                var10 = arg2;
                var12 = var4;
                var2 = new var12[var6](var11, var10, var9);
                var2 = var2 instanceof Object ? var2 : var4;
                var3['intlMessage'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'format';
        var1['key'] = var2;
        var2 = function value(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var3 = arg1;
                var1 = this;
                var2 = var1.hasMarkdown;
                if(var2) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                var4 = var1.intlMessage;
                var2 = var4.format;
                var2 = var2.bind(var4)(var3);
                return var2;
case 6:
                var2 = var1.getContext;
                var6 = var2.bind(var1)(var3);
                var4 = _closure1_slot5;
                var5 = undefined;
                var3 = 2;
                var6 = var4.bind(var5)(var6, var3);
                var3 = 0;
                var4 = var6[var3];
                var3 = 1;
                var3 = var6[var3];
                var2 = _closure1_slot3;
                var6 = var1.intlMessage;
                var1 = var6.format;
                var1 = var1.bind(var6)(var4);
                var1 = var2.bind(var5)(var1, var4, var3);
                return var1;
            }
        };
        var1['value'] = var2;
        var2 = new Array(4);
        var2[0] = var1;
        var1 = {};
        var6 = 'astFormat';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var1 = this;
            var3 = var1.getContext;
            var2 = arg1;
            var6 = var3.bind(var1)(var2);
            var4 = _closure1_slot5;
            var5 = undefined;
            var3 = 2;
            var6 = var4.bind(var5)(var6, var3);
            var3 = 0;
            var4 = var6[var3];
            var3 = 1;
            var3 = var6[var3];
            var2 = _closure1_slot4;
            var6 = var1.intlMessage;
            var1 = var6.format;
            var1 = var1.bind(var6)(var4);
            var1 = var2.bind(var5)(var1, var4, var3);
            return var1;
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'plainFormat';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var1 = this;
            var3 = var1.intlMessage;
            var2 = var3.format;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1['value'] = var6;
        var2[2] = var1;
        var1 = {};
        var6 = 'getContext';
        var1['key'] = var6;
        var5 = function value(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var3 = arg1;
                var15 = this;
                var2 = {};
                var5 = _closure1_slot10;
                var4 = var5.test;
                var1 = var15.message;
                var1 = var4.bind(var5)(var1);
                if(!var1) { _fun0004_ip = 8; continue _fun0004 }
case 9:
                var13 = global;
                var4 = var13.Object;
                var1 = var4.entries;
                var12 = var1.bind(var4)(var3);
                var1 = var12.length;
                var11 = 0;
                var1 = var11 < var1;
                var10 = undefined;
                var9 = 2;
                var8 = 1;
                var7 = '!!{';
                var6 = '}!!';
                var5 = 0;
                var4 = 0;
                if(!var1) { _fun0004_ip = 8; continue _fun0004 }
case 10:
                var16 = var12[var4];
                var1 = _closure1_slot5;
                var1 = var1.bind(var10)(var16, var9);
                var17 = var1[var11];
                var18 = var1[var8];
                var19 = var15.message;
                var16 = var19.includes;
                var1 = var13.HermesInternal;
                var1 = var1.concat;
                var1 = var1.bind(var7)(var17, var6);
                var1 = var16.bind(var19)(var1);
                var16 = var5;
                if(!var1) { _fun0004_ip = 11; continue _fun0004 }
case 12:
                var1 = var5 + 1;
                var2[var1] = var18;
                var3[var17] = var1;
                var16 = var1;
case 11:
                var4 = var4 + 1;
                var1 = var12.length;
                var5 = var16;
                if(var4 < var1) { _fun0004_ip = 10; continue _fun0004 }
case 8:
                var1 = new Array(2);
                var1[0] = var3;
                var1[1] = var2;
                return var1;
            }
        };
        var1['value'] = var5;
        var2[3] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var5 = var5.bind(var1)();
    var _closure1_slot12 = var5;
    var6 = 8;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = '../discord_common/js/packages/i18n/parse.tsx';
    var6 = var7.bind(var8)(var6);
    var3['FormattedMessage'] = var5;
    var3['setUpdateRules'] = var4;
    var2 = function getMessage(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var5 = arg1;
            var3 = null;
            if(!(var3 != var5)) { _fun0005_ip = 13; continue _fun0005 }
case 14:
            var1 = _closure1_slot3;
            if(!(var3 == var1)) { _fun0005_ip = 15; continue _fun0005 }
case 16:
            var4 = _closure1_slot13;
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 7;
            var1 = var3[var1];
            var3 = undefined;
            var1 = var6.bind(var3)(var1);
            var1 = var1.default;
            var1 = var4.bind(var3)(var1);
case 15:
            var4 = var5.replace;
            var3 = /^\n+|\n+$/g;
            var1 = '';
            var6 = var4.bind(var5)(var3, var1);
            var3 = _closure1_slot8;
            var1 = var3.test;
            var1 = var1.bind(var3)(var6);
            var4 = _closure1_slot9;
            var3 = var4.test;
            var5 = var3.bind(var4)(var6);
            if(var1) { _fun0005_ip = 17; continue _fun0005 }
case 18:
            var1 = var6;
            if(!var5) { _fun0005_ip = 19; continue _fun0005 }
case 17:
            var4 = _closure1_slot12;
            var2 = var4.prototype;
            var3 = Object.create(var2, {constructor: {value: var4}});
            var8 = arg2;
            var10 = var3;
            var9 = var6;
            var7 = var5;
            var2 = new var10[var4](var9, var8, var7, var6);
            var1 = var2 instanceof Object ? var2 : var3;
case 19:
            return var1;
case 13:
            var1 = '';
            return var1;
        }
    };
    var3['getMessage'] = var2;
    return var1;
})();