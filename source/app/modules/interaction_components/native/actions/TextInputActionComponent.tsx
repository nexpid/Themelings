// app/modules/interaction_components/native/actions/TextInputActionComponent.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot4 = var4;
    var4 = var7.memo;
    var2 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var11 = var1.type;
            var _closure2_slot0 = var11;
            var3 = var1.style;
            var15 = var1.label;
            var14 = var1.placeholder;
            var12 = var1.required;
            var13 = var1.maxLength;
            var16 = var1.value;
            var _closure2_slot1 = var16;
            var7 = _closure1_slot0;
            var6 = _closure1_slot1;
            var5 = 3;
            var6 = var6[var5];
            var5 = undefined;
            var9 = var7.bind(var5)(var6);
            var7 = var9.useComponentState;
            var8 = null;
            var10 = var8 != var16;
            var6 = undefined;
            if(!var10) { _fun0001_ip = 106; continue _fun0001 }
 93:
            var10 = {};
            var10['type'] = var11;
            var10['value'] = var16;
            var6 = var10;
 106:
            var6 = var7.bind(var9)(var1, var6);
            var7 = var6.state;
            var _closure2_slot2 = var7;
            var10 = var6.executeStateUpdate;
            var _closure2_slot3 = var10;
            var7 = var6.error;
            var9 = _closure1_slot0;
            var16 = _closure1_slot1;
            var6 = 4;
            var6 = var16[var6];
            var9 = var9.bind(var5)(var6);
            var6 = var9.useIsFirstTextInputInModal;
            var1 = var1.id;
            var1 = var6.bind(var9)(var1);
            var16 = _closure1_slot3;
            var9 = var16.useState;
            var6 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure2_slot2;
                    var1 = null;
                    var1 = var1 == var3;
                    var3 = undefined;
                    if(var1) { _fun0002_ip = 27; continue _fun0002 }
 18:
                    var1 = _closure2_slot2;
                    var3 = var1.type;
 27:
                    var1 = _closure2_slot0;
                    if(!(var3 !== var1)) { _fun0002_ip = 41; continue _fun0002 }
 35:
                    var1 = _closure2_slot1;
                    _fun0002_ip = 50; continue _fun0002;
 41:
                    var2 = _closure2_slot2;
                    var1 = var2.value;
 50:
                    return var1;
                }
            };
            var9 = var9.bind(var16)(var6);
            var6 = {};
            var6['label'] = var15;
            var6['placeholder'] = var14;
            var6['maxLength'] = var13;
            var6['required'] = var12;
            var12 = var8 != var7;
            var8 = 'default';
            if(!var12) { _fun0001_ip = 229; continue _fun0001 }
 225:
            var8 = 'error';
 229:
            var6['status'] = var8;
            var6['errorMessage'] = var7;
            var8 = _closure1_slot2;
            var7 = 1;
            var8 = var8.bind(var5)(var9, var7);
            var7 = 0;
            var7 = var8[var7];
            var6['defaultValue'] = var7;
            var9 = _closure1_slot3;
            var8 = var9.useCallback;
            var7 = new Array(2);
            var7[0] = var11;
            var7[1] = var10;
            var4 = function(arg1) {
                var3 = _closure2_slot3;
                var2 = {};
                var1 = _closure2_slot0;
                var2['type'] = var1;
                var1 = arg1;
                var2['value'] = var1;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var4 = var8.bind(var9)(var4, var7);
            var6['onChange'] = var4;
            var6['autoFocus'] = var1;
            var1 = true;
            var6['isClearable'] = var1;
            var4 = _closure1_slot0;
            var7 = _closure1_slot1;
            var1 = 5;
            var1 = var7[var1];
            var1 = var4.bind(var5)(var1);
            var1 = var1.TextInputComponentStyle;
            var1 = var1.PARAGRAPH;
            if(!(var3 !== var1)) { _fun0001_ip = 399; continue _fun0001 }
 349:
            var4 = _closure1_slot4;
            var3 = _closure1_slot0;
            var7 = _closure1_slot1;
            var1 = 7;
            var1 = var7[var1];
            var1 = var3.bind(var5)(var1);
            var3 = var1.TextInput;
            var1 = {};
            var19 = var1;
            var18 = var6;
            var7 = copyDataProperties(var19, var18);
            var1 = var4.bind(var5)(var3, var1);
            _fun0001_ip = 447; continue _fun0001;
 399:
            var4 = _closure1_slot4;
            var3 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 6;
            var2 = var7[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.TextArea;
            var2 = {};
            var19 = var2;
            var18 = var6;
            var6 = copyDataProperties(var19, var18);
            var1 = var4.bind(var5)(var3, var2);
 447:
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/interaction_components/native/actions/TextInputActionComponent.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();