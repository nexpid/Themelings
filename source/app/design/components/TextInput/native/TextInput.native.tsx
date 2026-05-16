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
    var _closure1_slot2 = var7;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot3 = var4;
    var4 = var7.forwardRef;
    var2 = function(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var12 = arg1;
            var10 = var12.label;
            var11 = var12.accessibilityLabel;
            var2 = _closure1_slot2;
            var1 = var2.useId;
            var8 = var1.bind(var2)();
            var15 = var12.fieldLabel;
            var9 = null;
            if(!(var9 == var15)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = 'string';
            var2 = typeof var10;
            var1 = undefined;
            if(!(var3 === var2)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = var10;
case 4:
            var15 = var1;
case 2:
            var4 = _closure1_slot3;
            var2 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 2;
            var1 = var3[var1];
            var3 = undefined;
            var1 = var2.bind(var3)(var1);
            var2 = var1.Input;
            var1 = {};
            var18 = var1;
            var17 = var12;
            var6 = copyDataProperties(var18, var17);
            var6 = var9 != var10;
            var7 = undefined;
            if(!var6) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var7 = var8;
case 6:
            var6 = 'labelId';
            var1[5] = var7;
            var7 = _closure1_slot3;
            var13 = _closure1_slot0;
            var14 = _closure1_slot1;
            var5 = 3;
            var5 = var14[var5];
            var5 = var13.bind(var3)(var5);
            var6 = var5.TextField;
            var5 = {};
            var16 = arg2;
            var5['ref'] = var16;
            var18 = var5;
            var17 = var12;
            var12 = copyDataProperties(var18, var17);
            var12 = 'fieldLabel';
            var5[11] = var15;
            var12 = 4;
            var12 = var14[var12];
            var13 = var13.bind(var3)(var12);
            var12 = var13.isAndroid;
            var12 = var12.bind(var13)();
            if(!var12) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var13 = var9 != var10;
            var12 = undefined;
            if(var13) { _fun0001_ip = 10; continue _fun0001 }
case 8:
            if(!(var9 == var11)) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var15 = 'string';
            var14 = typeof var10;
            var13 = undefined;
            if(!(var15 === var14)) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var13 = var10;
case 13:
            var11 = var13;
case 11:
            var12 = var11;
case 10:
            var11 = 'accessibilityLabel';
            var5[10] = var12;
            var10 = var9 != var10;
            var9 = undefined;
            if(!var10) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var9 = var8;
case 15:
            var8 = 'accessibilityLabelledBy';
            var5[7] = var9;
            var6 = var7.bind(var3)(var6, var5);
            var5 = 'children';
            var1[4] = var6;
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'design/components/TextInput/native/TextInput.native.tsx';
    var4 = var5.bind(var6)(var4);
    var3['TextInput'] = var2;
    return var1;
})();