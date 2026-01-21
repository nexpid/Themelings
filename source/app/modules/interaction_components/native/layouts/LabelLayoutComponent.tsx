// app/modules/interaction_components/native/layouts/LabelLayoutComponent.tsx
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
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot2 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot3 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/interaction_components/native/layouts/LabelLayoutComponent.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function LabelLayoutComponent(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var10 = var1.label;
            var9 = var1.description;
            var5 = var1.component;
            var4 = var1.renderComponent;
            var6 = _closure1_slot0;
            var11 = _closure1_slot1;
            var1 = 3;
            var1 = var11[var1];
            var3 = undefined;
            var2 = var6.bind(var3)(var1);
            var1 = var2.useComponentError;
            var8 = var1.bind(var2)(var5);
            var2 = var5.type;
            var1 = 4;
            var1 = var11[var1];
            var1 = var6.bind(var3)(var1);
            var1 = var1.ComponentType;
            var1 = var1.CHECKBOX;
            if(!(var2 !== var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = _closure1_slot3;
            var2 = _closure1_slot0;
            var11 = _closure1_slot1;
            var1 = 5;
            var1 = var11[var1];
            var1 = var2.bind(var3)(var1);
            var2 = var1.Input;
            var1 = {};
            var1['label'] = var10;
            var1['description'] = var9;
            var9 = var5.required;
            var1['required'] = var9;
            var1['errorMessage'] = var8;
            var8 = _closure1_slot2;
            var7 = {};
            var9 = {};
            var10 = '100%';
            var9['width'] = var10;
            var7['style'] = var9;
            var9 = 'label-child';
            var9 = var4.bind(var3)(var5, var9);
            var7['children'] = var9;
            var7 = var6.bind(var3)(var8, var7);
            var1['children'] = var7;
            var1 = var6.bind(var3)(var2, var1);
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var2 = 'label-child';
            var1 = var4.bind(var3)(var5, var2);
case 4:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();