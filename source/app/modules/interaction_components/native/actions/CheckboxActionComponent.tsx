// app/modules/interaction_components/native/actions/CheckboxActionComponent.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
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
    var4 = metroImportAll;
    var1 = undefined;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot4 = var4;
    var4 = var7.memo;
    var2 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var9 = arg1;
            var6 = var9.type;
            var _closure2_slot0 = var6;
            var12 = var9.default;
            var7 = _closure1_slot0;
            var2 = _closure1_slot2;
            var3 = 2;
            var3 = var2[var3];
            var4 = undefined;
            var7 = var7.bind(var4)(var3);
            var3 = var7.useComponentStateContext;
            var8 = var3.bind(var7)();
            var7 = _closure1_slot1;
            var3 = 3;
            var2 = var2[var3];
            var11 = var7.bind(var4)(var2);
            var2 = null;
            var10 = var2 != var8;
            var7 = 'CheckboxActionComponent must be rendered inside a ComponentStateContext';
            var7 = var11.bind(var4)(var10, var7);
            var10 = var8.useComponentState;
            var11 = var2 != var12;
            var7 = undefined;
            if(!var11) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var11 = {};
            var11['type'] = var6;
            var11['value'] = var12;
            var7 = var11;
case 2:
            var7 = var10.bind(var8)(var9, var7);
            var12 = var7.state;
            var _closure2_slot1 = var12;
            var7 = var7.executeStateUpdate;
            var _closure2_slot2 = var7;
            var11 = _closure1_slot3;
            var10 = var11.useMemo;
            var7 = new Array(2);
            var7[0] = var12;
            var7[1] = var6;
            var6 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var1 = null;
                    var1 = var1 == var3;
                    var3 = undefined;
                    if(var1) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var1 = _closure2_slot1;
                    var3 = var1.type;
case 4:
                    var1 = _closure2_slot0;
                    var1 = var3 === var1;
                    if(!var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var2 = _closure2_slot1;
                    var1 = var2.value;
case 6:
                    return var1;
                }
            };
            var6 = var10.bind(var11)(var6, var7);
            var7 = var8.getParents;
            var9 = var7.bind(var8)(var9);
            var7 = var2 == var9;
            var8 = undefined;
            if(var7) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var7 = 0;
            var8 = var9[var7];
case 8:
            var7 = var2 == var8;
            var10 = undefined;
            if(var7) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var10 = var8.type;
case 10:
            var9 = _closure1_slot0;
            var11 = _closure1_slot2;
            var7 = 4;
            var7 = var11[var7];
            var7 = var9.bind(var4)(var7);
            var7 = var7.ComponentType;
            var9 = var7.LABEL;
            var7 = undefined;
            if(!(var10 === var9)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var7 = var8;
case 12:
            var9 = _closure1_slot1;
            var8 = _closure1_slot2;
            var3 = var8[var3];
            var9 = var9.bind(var4)(var3);
            var3 = var2 != var7;
            var2 = 'CheckboxActionComponent must be a child of a Label component';
            var2 = var9.bind(var4)(var3, var2);
            var3 = _closure1_slot4;
            var2 = _closure1_slot0;
            var1 = 5;
            var1 = var8[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.Checkbox;
            var1 = {};
            var8 = var7.label;
            var1['label'] = var8;
            var7 = var7.description;
            var1['description'] = var7;
            var1['checked'] = var6;
            var5 = function onToggle(arg1) {
                var3 = _closure2_slot2;
                var2 = {};
                var1 = _closure2_slot0;
                var2['type'] = var1;
                var1 = arg1;
                var2['value'] = var1;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var1['onToggle'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/interaction_components/native/actions/CheckboxActionComponent.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();