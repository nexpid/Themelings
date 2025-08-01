// app/modules/user_profile/native/UserProfileEditFormTextField.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
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
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'borderColor': null, 'borderWidth': 1, 'borderRadius': null, 'width': '100%', 'paddingVertical': 12};
    var10 = 3;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BORDER_STRONG;
    var9['borderColor'] = var12;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.radii;
    var10 = var10.lg;
    var9['borderRadius'] = var10;
    var4['textField'] = var9;
    var9 = {};
    var10 = 6;
    var9['paddingRight'] = var10;
    var4['withClearButton'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot4 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/native/UserProfileEditFormTextField.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function UserProfileEditFormTextField(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var8 = var3.label;
            var16 = var3.description;
            var6 = var3.errorMessage;
            var5 = var3.containerStyle;
            var10 = var3.clearButtonVisibility;
            var4 = undefined;
            if(!(var10 === var4)) { _fun0001_ip = 72; continue _fun0001 }
 37:
            var2 = _closure1_slot0;
            var7 = _closure1_slot1;
            var1 = 4;
            var1 = var7[var1];
            var1 = var2.bind(var4)(var1);
            var1 = var1.ClearButtonVisibility;
            var10 = var1.WITH_CONTENT;
 72:
            var7 = var3.multiline;
            var15 = var3.scrollTargetRef;
            var2 = {'label': 0, 'description': 0, 'errorMessage': 0, 'containerStyle': 0, 'clearButtonVisibility': 0, 'multiline': 0, 'scrollTargetRef': 0};
            var19 = null;
            var20 = var2;
            var1 = silentSetPrototypeOf(var20, var19);
            var20 = {};
            var19 = var3;
            var18 = var2;
            var11 = copyDataProperties(var20, var19, var18);
            var2 = _closure1_slot4;
            var3 = var2.bind(var4)();
            var9 = _closure1_slot2;
            var2 = var9.useId;
            var14 = var2.bind(var9)();
            var2 = var3.textField;
            var9 = new Array(2);
            var9[0] = var2;
            var12 = _closure1_slot0;
            var13 = _closure1_slot1;
            var2 = 4;
            var2 = var13[var2];
            var2 = var12.bind(var4)(var2);
            var2 = var2.ClearButtonVisibility;
            var12 = var2.NEVER;
            var2 = undefined;
            if(!(var10 !== var12)) { _fun0001_ip = 210; continue _fun0001 }
 196:
            var12 = true;
            var2 = undefined;
            if(!(var12 !== var7)) { _fun0001_ip = 210; continue _fun0001 }
 204:
            var2 = var3.withClearButton;
 210:
            var9[1] = var2;
            var3 = _closure1_slot3;
            var12 = _closure1_slot0;
            var13 = _closure1_slot1;
            var1 = 5;
            var1 = var13[var1];
            var1 = var12.bind(var4)(var1);
            var2 = var1.Input;
            var1 = {};
            var1['label'] = var8;
            var1['labelId'] = var14;
            var1['description'] = var16;
            var1['errorMessage'] = var6;
            var1['containerStyle'] = var5;
            var5 = 6;
            var5 = var13[var5];
            var5 = var12.bind(var4)(var5);
            var6 = var5.FormInput;
            var5 = {};
            var20 = var5;
            var19 = var11;
            var11 = copyDataProperties(var20, var19);
            var11 = 'ref';
            var5[var11] = var15;
            var11 = 'accessibilityLabelledBy';
            var5[var11] = var14;
            var11 = 7;
            var11 = var13[var11];
            var12 = var12.bind(var4)(var11);
            var11 = var12.isAndroid;
            var12 = var11.bind(var12)();
            var11 = undefined;
            if(var12) { _fun0001_ip = 346; continue _fun0001 }
 343:
            var11 = var8;
 346:
            var8 = 'accessibilityLabel';
            var5[var8] = var11;
            var8 = 'clearButtonVisibility';
            var5[var8] = var10;
            var8 = 'multiline';
            var5[var8] = var7;
            var10 = false;
            var8 = 'showBorder';
            var5[var8] = var10;
            var8 = 'showTopContainer';
            var5[var8] = var10;
            var8 = 'style';
            var5[var8] = var9;
            var9 = 'center';
            if(!var7) { _fun0001_ip = 413; continue _fun0001 }
 409:
            var9 = 'top';
 413:
            var8 = 'textAlignVertical';
            var5[var8] = var9;
            var8 = 'done';
            if(!var7) { _fun0001_ip = 433; continue _fun0001 }
 429:
            var8 = 'default';
 433:
            var7 = 'returnKeyType';
            var5[var7] = var8;
            var5 = var3.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();