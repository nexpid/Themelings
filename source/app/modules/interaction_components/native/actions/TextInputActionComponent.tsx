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
case 0:
            var1 = arg1;
            var15 = var1.type;
            var _closure2_slot0 = var15;
            var4 = var1.style;
            var9 = var1.label;
            var12 = var1.placeholder;
            var8 = var1.required;
            var10 = var1.maxLength;
            var16 = var1.value;
            var _closure2_slot1 = var16;
            var7 = _closure1_slot0;
            var5 = _closure1_slot1;
            var3 = 3;
            var3 = var5[var3];
            var5 = undefined;
            var13 = var7.bind(var5)(var3);
            var11 = var13.useComponentState;
            var3 = null;
            var14 = var3 != var16;
            var7 = undefined;
            if(!var14) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var14 = {};
            var14['type'] = var15;
            var14['value'] = var16;
            var7 = var14;
case 2:
            var7 = var11.bind(var13)(var1, var7);
            var11 = var7.state;
            var _closure2_slot2 = var11;
            var14 = var7.executeStateUpdate;
            var _closure2_slot3 = var14;
            var7 = var7.error;
            var13 = _closure1_slot0;
            var16 = _closure1_slot1;
            var11 = 4;
            var11 = var16[var11];
            var13 = var13.bind(var5)(var11);
            var11 = var13.useIsFirstTextInputInModal;
            var1 = var1.id;
            var1 = var11.bind(var13)(var1);
            var16 = _closure1_slot3;
            var13 = var16.useState;
            var11 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot2;
                    var1 = null;
                    var1 = var1 == var3;
                    var3 = undefined;
                    if(var1) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var1 = _closure2_slot2;
                    var3 = var1.type;
case 4:
                    var1 = _closure2_slot0;
                    if(!(var3 !== var1)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var1 = _closure2_slot1;
                    _fun0002_ip = 8; continue _fun0002;
case 6:
                    var2 = _closure2_slot2;
                    var1 = var2.value;
case 8:
                    return var1;
                }
            };
            var13 = var13.bind(var16)(var11);
            var11 = {};
            var11['placeholder'] = var12;
            var11['maxLength'] = var10;
            var12 = var3 != var7;
            var10 = 'default';
            if(!var12) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var10 = 'error';
case 9:
            var11['status'] = var10;
            var12 = _closure1_slot2;
            var10 = 1;
            var12 = var12.bind(var5)(var13, var10);
            var10 = 0;
            var10 = var12[var10];
            var11['defaultValue'] = var10;
            var13 = _closure1_slot3;
            var12 = var13.useCallback;
            var10 = new Array(2);
            var10[0] = var15;
            var10[1] = var14;
            var6 = function(arg1) {
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
            var6 = var12.bind(var13)(var6, var10);
            var11['onChange'] = var6;
            var11['autoFocus'] = var1;
            var1 = true;
            var11['isClearable'] = var1;
            var6 = _closure1_slot0;
            var1 = _closure1_slot1;
            var10 = 5;
            var1 = var1[var10];
            var1 = var6.bind(var5)(var1);
            var1 = var1.TextInputComponentStyle;
            var1 = var1.SMALL;
            if(!(var1 !== var4)) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var6 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var10];
            var1 = var6.bind(var5)(var1);
            var1 = var1.TextInputComponentStyle;
            var1 = var1.PARAGRAPH;
            var6 = undefined;
            if(!(var1 === var4)) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var10 = _closure1_slot4;
            var4 = _closure1_slot0;
            var12 = _closure1_slot1;
            var1 = 7;
            var1 = var12[var1];
            var1 = var4.bind(var5)(var1);
            var4 = var1.TextAreaField;
            var1 = {};
            var19 = var1;
            var18 = var11;
            var12 = copyDataProperties(var19, var18);
            var6 = var10.bind(var5)(var4, var1);
            _fun0001_ip = 13; continue _fun0001;
case 11:
            var10 = _closure1_slot4;
            var4 = _closure1_slot0;
            var12 = _closure1_slot1;
            var1 = 6;
            var1 = var12[var1];
            var1 = var4.bind(var5)(var1);
            var4 = var1.TextField;
            var1 = {};
            var19 = var1;
            var18 = var11;
            var11 = copyDataProperties(var19, var18);
            var6 = var10.bind(var5)(var4, var1);
case 13:
            var1 = var6;
            if(!(var3 != var9)) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var4 = _closure1_slot4;
            var3 = _closure1_slot0;
            var10 = _closure1_slot1;
            var2 = 8;
            var2 = var10[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.Input;
            var2 = {};
            var2['label'] = var9;
            var2['required'] = var8;
            var2['errorMessage'] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 15:
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/interaction_components/native/actions/TextInputActionComponent.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();