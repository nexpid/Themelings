// app/uikit-native/ChatInputParser.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var4 = metroImportDefault;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var9;
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var7)(var3, var1, var2);
    var12 = 0;
    var2 = var9[var12];
    var1 = undefined;
    var2 = var4.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var11 = 1;
    var2 = var9[var11];
    var2 = var4.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var10 = 2;
    var2 = var9[var10];
    var2 = var8.bind(var1)(var2);
    var2 = var2.processColor;
    var _closure1_slot4 = var2;
    var4 = {};
    var4['COMMAND_OPTION'] = var12;
    var7 = 'COMMAND_OPTION';
    var4[var12] = var7;
    var4['ROLE_HIGHLIGHT'] = var11;
    var6 = 'ROLE_HIGHLIGHT';
    var4[var11] = var6;
    var2 = {};
    var2['COMMAND_OPTION'] = var12;
    var2[var12] = var7;
    var2['COMMAND_OPTION_WITH_VALUE'] = var11;
    var7 = 'COMMAND_OPTION_WITH_VALUE';
    var2[var11] = var7;
    var2['EMOJI_HIGHLIGHT'] = var10;
    var7 = 'EMOJI_HIGHLIGHT';
    var2[var10] = var7;
    var10 = 3;
    var2['USER_HIGHLIGHT'] = var10;
    var7 = 'USER_HIGHLIGHT';
    var2[var10] = var7;
    var7 = 4;
    var2['ROLE_HIGHLIGHT'] = var7;
    var2[var7] = var6;
    var10 = 5;
    var2['CHANNEL_HIGHLIGHT'] = var10;
    var6 = 'CHANNEL_HIGHLIGHT';
    var2[var10] = var6;
    var10 = 6;
    var2['SILENT_HIGHLIGHT'] = var10;
    var6 = 'SILENT_HIGHLIGHT';
    var2[var10] = var6;
    var6 = function() {
        var4 = _closure1_slot3;
        var3 = function ChatInputParser() {
            var3 = this;
            var4 = _closure1_slot2;
            var2 = _closure2_slot0;
            var1 = undefined;
            var2 = var4.bind(var1)(var3, var2);
            var2 = {};
            var3['rules'] = var2;
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'addRule';
        var1['key'] = var2;
        var2 = function value(arg1) {
            var3 = arg1;
            var1 = this;
            var2 = var1.rules;
            var1 = var3.ruleId;
            var2[var1] = var3;
            var1 = undefined;
            return var1;
        };
        var1['value'] = var2;
        var2 = new Array(3);
        var2[0] = var1;
        var1 = {};
        var6 = 'removeRule';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var1 = this;
            var2 = var1.rules;
            var1 = arg1;
            var1 = delete var2[var1];
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'parse';
        var1['key'] = var6;
        var5 = function value(arg1, arg2) {
            var2 = arg1;
            var _closure3_slot0 = var2;
            var2 = arg2;
            var _closure3_slot1 = var2;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 3;
            var3 = var3[var2];
            var2 = undefined;
            var4 = var4.bind(var2)(var3);
            var3 = var4.valuesIn;
            var2 = this;
            var2 = var2.rules;
            var4 = var3.bind(var4)(var2);
            var3 = var4.reduce;
            var2 = function(arg1, arg2) {
                var3 = arg1;
                var6 = arg2;
                var _closure4_slot0 = var6;
                var5 = var6.matchFunction;
                var4 = _closure3_slot0;
                var2 = _closure3_slot1;
                var4 = var5.bind(var6)(var4, var2);
                var2 = var4.map;
                var1 = function(arg1) {
                    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                        var2 = arg1;
                        var1 = _closure4_slot0;
                        var1 = var1.deleteNodeOnBackspace;
                        var3 = 'function';
                        var1 = typeof var1;
                        if(!(var3 !== var1)) { _fun0001_ip = 39; continue _fun0001 }
 27:
                        var1 = _closure4_slot0;
                        var4 = var1.deleteNodeOnBackspace;
                        _fun0001_ip = 54; continue _fun0001;
 39:
                        var5 = _closure4_slot0;
                        var1 = var5.deleteNodeOnBackspace;
                        var4 = var1.bind(var5)(var2);
 54:
                        var1 = _closure4_slot0;
                        var1 = var1.editDisabled;
                        var1 = typeof var1;
                        if(!(var3 !== var1)) { _fun0001_ip = 83; continue _fun0001 }
 71:
                        var1 = _closure4_slot0;
                        var3 = var1.editDisabled;
                        _fun0001_ip = 98; continue _fun0001;
 83:
                        var5 = _closure4_slot0;
                        var1 = var5.editDisabled;
                        var3 = var1.bind(var5)(var2);
 98:
                        var1 = {};
                        var5 = _closure4_slot0;
                        var7 = var5.type;
                        var1['type'] = var7;
                        var7 = var5.style;
                        var5 = null;
                        var7 = var5 == var7;
                        var5 = undefined;
                        if(var7) { _fun0001_ip = 143; continue _fun0001 }
 129:
                        var7 = _closure4_slot0;
                        var6 = var7.style;
                        var5 = var6.bind(var7)(var2);
 143:
                        var1['style'] = var5;
                        var1['deleteNodeOnBackspace'] = var4;
                        var1['editDisabled'] = var3;
                        var9 = var1;
                        var8 = var2;
                        var2 = copyDataProperties(var9, var8);
                        return var1;
                    }
                };
                var2 = var2.bind(var4)(var1);
                var1 = var3.concat;
                var1 = var1.bind(var3)(var2);
                return var1;
            };
            var1 = new Array(0);
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var1['value'] = var5;
        var2[2] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var6 = var6.bind(var1)();
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'uikit-native/ChatInputParser.tsx';
    var7 = var8.bind(var9)(var7);
    var3['default'] = var6;
    var5 = function(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = arg1;
            var8 = var3.backgroundColor;
            var6 = var3.color;
            var4 = var3.borderRadius;
            var2 = {'backgroundColor': 0, 'color': 0, 'borderRadius': 0};
            var5 = null;
            var11 = var2;
            var10 = null;
            var1 = silentSetPrototypeOf(var11, var10);
            var11 = {};
            var10 = var3;
            var9 = var2;
            var2 = copyDataProperties(var11, var10, var9);
            var1 = var5 != var8;
            var3 = null;
            if(!var1) { _fun0002_ip = 101; continue _fun0002 }
 64:
            var1 = var5 != var4;
            var3 = null;
            if(!var1) { _fun0002_ip = 101; continue _fun0002 }
 73:
            var1 = {};
            var7 = _closure1_slot4;
            var5 = undefined;
            var5 = var7.bind(var5)(var8);
            var1['backgroundColor'] = var5;
            var1['cornerRadius'] = var4;
            var3 = var1;
 101:
            var1 = {};
            var5 = _closure1_slot4;
            var4 = undefined;
            var4 = var5.bind(var4)(var6);
            var1['color'] = var4;
            var1['backgroundStyle'] = var3;
            var11 = var1;
            var10 = var2;
            var2 = copyDataProperties(var11, var10);
            return var1;
        }
    };
    var3['convertToNativeStyle'] = var5;
    var3['ChatInputParseResultDataType'] = var4;
    var3['ChatInputNodeType'] = var2;
    return var1;
})();