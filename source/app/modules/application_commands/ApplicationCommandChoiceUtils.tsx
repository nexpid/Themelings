// app/modules/application_commands/ApplicationCommandChoiceUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var3 = exports;
    var8 = dependencyMap;
    var5 = function findChoiceStringValue(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var6 = arg1;
            var1 = arg2;
            var _closure2_slot0 = var1;
            var4 = null;
            var5 = var4 == var6;
            var2 = undefined;
            var1 = undefined;
            if(var5) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = var6.find;
            var3 = function(arg1) {
                var1 = arg1;
                var2 = var1.displayName;
                var1 = _closure2_slot0;
                var1 = var2 === var1;
                return var1;
            };
            var3 = var5.bind(var6)(var3);
            var4 = var4 == var3;
            var1 = undefined;
            if(var4) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var1 = var3.value;
case 2:
            var4 = 'string';
            var3 = typeof var1;
            if(!(var4 !== var3)) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            return var2;
case 5:
            return var1;
        }
    };
    var _closure1_slot3 = var5;
    var4 = function findChoiceNumberValue(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var6 = arg1;
            var1 = arg2;
            var _closure2_slot0 = var1;
            var4 = null;
            var5 = var4 == var6;
            var2 = undefined;
            var1 = undefined;
            if(var5) { _fun0002_ip = 2; continue _fun0002 }
case 3:
            var5 = var6.find;
            var3 = function(arg1) {
                var1 = arg1;
                var2 = var1.displayName;
                var1 = _closure2_slot0;
                var1 = var2 === var1;
                return var1;
            };
            var3 = var5.bind(var6)(var3);
            var4 = var4 == var3;
            var1 = undefined;
            if(var4) { _fun0002_ip = 2; continue _fun0002 }
case 4:
            var1 = var3.value;
case 2:
            var4 = 'number';
            var3 = typeof var1;
            if(!(var4 !== var3)) { _fun0002_ip = 5; continue _fun0002 }
case 6:
            return var2;
case 5:
            return var1;
        }
    };
    var _closure1_slot4 = var4;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var6);
    var1 = 0;
    var9 = var8[var1];
    var6 = metroImportDefault;
    var1 = undefined;
    var6 = var6.bind(var1)(var9);
    var _closure1_slot0 = var6;
    var6 = 1;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var9 = var6.FALSE_OPTION_NAME;
    var _closure1_slot1 = var9;
    var6 = var6.TRUE_OPTION_NAME;
    var _closure1_slot2 = var6;
    var6 = 2;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/application_commands/ApplicationCommandChoiceUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var6 = function toChoiceBooleanValue(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg1;
            var1 = var4.toLowerCase;
            var3 = var1.bind(var4)();
            var5 = _closure1_slot2;
            var1 = var5.toLowerCase;
            var1 = var1.bind(var5)();
            var1 = var3 === var1;
            var3 = var4.toLowerCase;
            var3 = var3.bind(var4)();
            var4 = _closure1_slot1;
            var2 = var4.toLowerCase;
            var2 = var2.bind(var4)();
            if(var1) { _fun0003_ip = 7; continue _fun0003 }
case 8:
            if(!(var3 !== var2)) { _fun0003_ip = 7; continue _fun0003 }
case 9:
            var2 = undefined;
            return var2;
case 7:
            return var1;
        }
    };
    var3['toChoiceBooleanValue'] = var6;
    var3['findChoiceStringValue'] = var5;
    var3['findChoiceNumberValue'] = var4;
    var4 = function findAutocompleteChoiceStringValue(arg1, arg2, arg3) {
        var4 = _closure1_slot3;
        var5 = _closure1_slot0;
        var3 = var5.getAutocompleteLastChoices;
        var2 = arg1;
        var1 = arg2;
        var3 = var3.bind(var5)(var2, var1);
        var2 = undefined;
        var1 = arg3;
        var1 = var4.bind(var2)(var3, var1);
        return var1;
    };
    var3['findAutocompleteChoiceStringValue'] = var4;
    var2 = function findAutocompleteChoiceNumberValue(arg1, arg2, arg3) {
        var4 = _closure1_slot4;
        var5 = _closure1_slot0;
        var3 = var5.getAutocompleteLastChoices;
        var2 = arg1;
        var1 = arg2;
        var3 = var3.bind(var5)(var2, var1);
        var2 = undefined;
        var1 = arg3;
        var1 = var4.bind(var2)(var3, var1);
        return var1;
    };
    var3['findAutocompleteChoiceNumberValue'] = var2;
    return var1;
})();