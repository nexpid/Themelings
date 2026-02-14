// app/modules/user_profile/native/UserProfileEditFormTextField.tsx
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
    var4 = var4.jsx;
    var _closure1_slot2 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/native/UserProfileEditFormTextField.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function UserProfileEditFormTextField(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var11 = arg1;
            var10 = var11.label;
            var9 = var11.description;
            var4 = var11.errorMessage;
            var8 = var11.containerStyle;
            var2 = var11.numberOfLines;
            var5 = undefined;
            if(!(var2 === var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = 1;
case 2:
            var7 = var11.inputRef;
            var6 = {'label': 0, 'description': 0, 'errorMessage': 0, 'containerStyle': 0, 'numberOfLines': 0, 'inputRef': 0};
            var3 = null;
            var14 = var6;
            var13 = null;
            var1 = silentSetPrototypeOf(var14, var13);
            var14 = {};
            var13 = var11;
            var12 = var6;
            var1 = copyDataProperties(var14, var13, var12);
            var6 = {};
            var6['label'] = var10;
            var6['description'] = var9;
            var6['errorMessage'] = var4;
            var6['containerStyle'] = var8;
            var4 = var3 != var4;
            var3 = undefined;
            if(!var4) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = 'error';
case 4:
            var6['status'] = var3;
            var14 = var6;
            var13 = var1;
            var1 = copyDataProperties(var14, var13);
            var1 = 1;
            if(!(!(var2 > var1))) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var3 = _closure1_slot2;
            var2 = _closure1_slot0;
            var4 = _closure1_slot1;
            var1 = 3;
            var1 = var4[var1];
            var1 = var2.bind(var5)(var1);
            var2 = var1.TextInput;
            var1 = {};
            var1['ref'] = var7;
            var14 = var1;
            var13 = var6;
            var4 = copyDataProperties(var14, var13);
            var8 = true;
            var4 = 'isClearable';
            var1[var4] = var8;
            var1 = var3.bind(var5)(var2, var1);
            _fun0001_ip = 8; continue _fun0001;
case 6:
            var4 = _closure1_slot2;
            var3 = _closure1_slot0;
            var8 = _closure1_slot1;
            var2 = 2;
            var2 = var8[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.TextArea;
            var2 = {};
            var2['ref'] = var7;
            var14 = var2;
            var13 = var6;
            var6 = copyDataProperties(var14, var13);
            var1 = var4.bind(var5)(var3, var2);
case 8:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();