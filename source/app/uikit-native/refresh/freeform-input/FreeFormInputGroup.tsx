// app/uikit-native/refresh/freeform-input/FreeFormInputGroup.tsx
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
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot5 = var8;
    var4 = var4.jsxs;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {};
    var11 = 8;
    var10['marginBottom'] = var11;
    var4['label'] = var10;
    var10 = {'flexGrow': 1, 'marginBottom': 8};
    var4['input'] = var10;
    var10 = {};
    var10['marginBottom'] = var11;
    var4['error'] = var10;
    var10 = {};
    var10['marginBottom'] = var11;
    var4['hint'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot7 = var4;
    var4 = var7.forwardRef;
    var2 = function(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var6 = arg1;
            var17 = var6.style;
            var15 = var6.label;
            var14 = var6.error;
            var16 = var6.value;
            var13 = var6.hint;
            var20 = var6.textStyle;
            var3 = var6.enableAndroidSanitizedInputWorkaround;
            var4 = undefined;
            if(!(var3 === var4)) { _fun0001_ip = 49; continue _fun0001 }
 47:
            var3 = false;
 49:
            var7 = var6.secureTextEntry;
            var2 = var6.keyboardType;
            var23 = var6.accessibilityLabel;
            var5 = {'style': 0, 'label': 0, 'error': 0, 'value': 0, 'hint': 0, 'textStyle': 0, 'enableAndroidSanitizedInputWorkaround': 0, 'secureTextEntry': 0, 'keyboardType': 0, 'accessibilityLabel': 0};
            var10 = null;
            var28 = var5;
            var27 = null;
            var1 = silentSetPrototypeOf(var28, var27);
            var28 = {};
            var27 = var6;
            var26 = var5;
            var5 = copyDataProperties(var28, var27, var26);
            var6 = _closure1_slot7;
            var19 = var6.bind(var4)();
            var6 = var3;
            if(!var6) { _fun0001_ip = 145; continue _fun0001 }
 116:
            var9 = _closure1_slot0;
            var11 = _closure1_slot2;
            var8 = 4;
            var8 = var11[var8];
            var9 = var9.bind(var4)(var8);
            var8 = var9.isAndroid;
            var6 = var8.bind(var9)();
 145:
            if(var6) { _fun0001_ip = 151; continue _fun0001 }
 148:
            var6 = var7;
 151:
            if(!var3) { _fun0001_ip = 192; continue _fun0001 }
 154:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 4;
            var3 = var8[var3];
            var7 = var7.bind(var4)(var3);
            var3 = var7.isAndroid;
            var3 = var3.bind(var7)();
            var7 = 'visible-password';
            if(var3) { _fun0001_ip = 195; continue _fun0001 }
 192:
            var7 = var2;
 195:
            var8 = _closure1_slot3;
            var3 = var8.useContext;
            var9 = _closure1_slot0;
            var11 = _closure1_slot2;
            var2 = 5;
            var2 = var11[var2];
            var2 = var9.bind(var4)(var2);
            var2 = var2.RedesignCompatContext;
            var2 = var3.bind(var8)(var2);
            var3 = var8.useId;
            var22 = var3.bind(var8)();
            if(var2) { _fun0001_ip = 672; continue _fun0001 }
 252:
            var8 = _closure1_slot6;
            var3 = _closure1_slot4;
            var2 = {};
            var2['style'] = var17;
            var9 = var10 != var15;
            var11 = null;
            if(!var9) { _fun0001_ip = 325; continue _fun0001 }
 275:
            var18 = _closure1_slot5;
            var12 = _closure1_slot1;
            var21 = _closure1_slot2;
            var9 = 8;
            var9 = var21[var9];
            var12 = var12.bind(var4)(var9);
            var9 = {};
            var21 = var19.label;
            var9['style'] = var21;
            var9['nativeID'] = var22;
            var9['children'] = var15;
            var11 = var18.bind(var4)(var12, var9);
 325:
            var9 = new Array(4);
            var9[0] = var11;
            var18 = _closure1_slot5;
            var12 = _closure1_slot1;
            var21 = _closure1_slot2;
            var11 = 9;
            var11 = var21[var11];
            var12 = var12.bind(var4)(var11);
            var11 = {};
            var28 = var11;
            var27 = var5;
            var21 = copyDataProperties(var28, var27);
            if(!(var10 == var23)) { _fun0001_ip = 417; continue _fun0001 }
 373:
            if(!(var10 != var15)) { _fun0001_ip = 411; continue _fun0001 }
 377:
            var24 = _closure1_slot0;
            var25 = _closure1_slot2;
            var21 = 4;
            var21 = var25[var21];
            var24 = var24.bind(var4)(var21);
            var21 = var24.isAndroid;
            var24 = var21.bind(var24)();
            var21 = undefined;
            if(var24) { _fun0001_ip = 414; continue _fun0001 }
 411:
            var21 = var15;
 414:
            var23 = var21;
 417:
            var21 = 'accessibilityLabel';
            var11[var21] = var23;
            var21 = 'accessibilityLabelledBy';
            var11[var21] = var22;
            var22 = var10 != var14;
            var21 = 'error';
            var11[var21] = var22;
            var22 = arg2;
            var21 = 'ref';
            var11[var21] = var22;
            var21 = 'value';
            var11[var21] = var16;
            var21 = 'secureTextEntry';
            var11[var21] = var6;
            var21 = 'keyboardType';
            var11[var21] = var7;
            var22 = var19.input;
            var21 = new Array(2);
            var21[0] = var22;
            var21[1] = var20;
            var20 = 'style';
            var11[var20] = var21;
            var11 = var18.bind(var4)(var12, var11);
            var9[1] = var11;
            var12 = var10 != var14;
            var11 = null;
            if(!var12) { _fun0001_ip = 578; continue _fun0001 }
 533:
            var20 = _closure1_slot5;
            var18 = _closure1_slot1;
            var21 = _closure1_slot2;
            var12 = 10;
            var12 = var21[var12];
            var18 = var18.bind(var4)(var12);
            var12 = {};
            var21 = var19.error;
            var12['style'] = var21;
            var12['children'] = var14;
            var11 = var20.bind(var4)(var18, var12);
 578:
            var9[2] = var11;
            var11 = var10 != var13;
            var10 = null;
            if(!var11) { _fun0001_ip = 656; continue _fun0001 }
 591:
            var18 = _closure1_slot5;
            var12 = _closure1_slot0;
            var20 = _closure1_slot2;
            var11 = 11;
            var11 = var20[var11];
            var11 = var12.bind(var4)(var11);
            var12 = var11.Text;
            var11 = {'style': null, 'variant': 'text-xs/medium', 'color': 'text-muted'};
            var19 = var19.hint;
            var11['style'] = var19;
            var11['children'] = var13;
            var10 = var18.bind(var4)(var12, var11);
 656:
            var9[3] = var10;
            var2['children'] = var9;
            var2 = var8.bind(var4)(var3, var2);
            return var2;
 672:
            var12 = var5.placeholder;
            var8 = var5.onChangeText;
            var9 = var5.clearButtonVisibility;
            var3 = _closure1_slot5;
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var1 = 6;
            var1 = var11[var1];
            var1 = var10.bind(var4)(var1);
            var2 = var1.TextInput;
            var1 = {};
            var1['containerStyle'] = var17;
            var1['value'] = var16;
            var1['label'] = var15;
            var1['errorMessage'] = var14;
            var1['description'] = var13;
            var1['placeholder'] = var12;
            var1['onChange'] = var8;
            var8 = 7;
            var8 = var11[var8];
            var8 = var10.bind(var4)(var8);
            var8 = var8.ClearButtonVisibility;
            var8 = var8.WITH_CONTENT;
            var8 = var9 !== var8;
            var1['isClearable'] = var8;
            var1['keyboardType'] = var7;
            var1['secureTextEntry'] = var6;
            var5 = var5.autoCapitalize;
            var1['autoCapitalize'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'uikit-native/refresh/freeform-input/FreeFormInputGroup.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();