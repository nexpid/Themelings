// app/design/components/TextInput/native/TextInput.native.tsx
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
    var7 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot2 = var4;
    var4 = var7.forwardRef;
    var2 = function(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var7 = arg1;
            var8 = var7.fieldLabel;
            var1 = null;
            if(!(var1 == var8)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var7.label;
            var3 = 'string';
            var2 = typeof var2;
            var1 = undefined;
            if(!(var3 === var2)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = var7.label;
case 4:
            var8 = var1;
case 2:
            var4 = _closure1_slot2;
            var6 = _closure1_slot0;
            var9 = _closure1_slot1;
            var1 = 2;
            var1 = var9[var1];
            var3 = undefined;
            var1 = var6.bind(var3)(var1);
            var2 = var1.Input;
            var1 = {};
            var11 = var1;
            var10 = var7;
            var5 = copyDataProperties(var11, var10);
            var5 = 3;
            var5 = var9[var5];
            var5 = var6.bind(var3)(var5);
            var6 = var5.TextField;
            var5 = {};
            var9 = arg2;
            var5['ref'] = var9;
            var11 = var5;
            var10 = var7;
            var7 = copyDataProperties(var11, var10);
            var7 = 'fieldLabel';
            var5[6] = var8;
            var6 = var4.bind(var3)(var6, var5);
            var5 = 'children';
            var1[4] = var6;
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'design/components/TextInput/native/TextInput.native.tsx';
    var4 = var5.bind(var6)(var4);
    var3['TextInput'] = var2;
    return var1;
})();