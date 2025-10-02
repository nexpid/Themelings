// app/design/components/TextInput/native/GhostInput.native.tsx
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
    var4 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = function() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var7 = arguments[0];
            var5 = arguments[1];
            var6 = undefined;
            if(!(var7 === var6)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var7 = 'lg';
case 2:
            if(!(var5 === var6)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var5 = 'default';
case 4:
            var1 = {};
            var2 = {};
            var4 = {};
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var8 = 3;
            var11 = var10[var8];
            var11 = var9.bind(var6)(var11);
            var11 = var11.TextStyleSheet;
            var11 = var11.text-md/semibold;
            var4['md'] = var11;
            var8 = var10[var8];
            var8 = var9.bind(var6)(var8);
            var8 = var8.TextStyleSheet;
            var8 = var8.text-lg/semibold;
            var4['lg'] = var8;
            var12 = var4[var7];
            var13 = var2;
            var4 = copyDataProperties(var13, var12);
            var4 = 'error';
            if(!(var4 !== var5)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var5 = _closure1_slot1;
            var7 = _closure1_slot2;
            var4 = 4;
            var4 = var7[var4];
            var4 = var5.bind(var6)(var4);
            var4 = var4.colors;
            var4 = var4.TEXT_NORMAL;
            _fun0001_ip = 8; continue _fun0001;
case 6:
            var5 = _closure1_slot1;
            var7 = _closure1_slot2;
            var3 = 4;
            var3 = var7[var3];
            var3 = var5.bind(var6)(var3);
            var3 = var3.colors;
            var4 = var3.TEXT_DANGER;
case 8:
            var3 = 'color';
            var2[var3] = var4;
            var4 = 48;
            var3 = 'minWidth';
            var2[var3] = var4;
            var1['input'] = var2;
            var2 = {};
            var3 = 'center';
            var2['alignItems'] = var3;
            var1['centeredContainerStyle'] = var2;
            return var1;
        }
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot4 = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'design/components/TextInput/native/GhostInput.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GhostInput(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var6 = arg1;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 5;
            var1 = var3[var1];
            var4 = undefined;
            var3 = var2.bind(var4)(var1);
            var2 = var3.useInputStyles;
            var1 = {};
            var7 = var6.size;
            var1['size'] = var7;
            var8 = var2.bind(var3)(var1);
            var3 = _closure1_slot4;
            var2 = var6.size;
            var1 = var6.status;
            var10 = var3.bind(var4)(var2, var1);
            var1 = var6.isCentered;
            var13 = var4 === var1;
            if(var13) { _fun0002_ip = 9; continue _fun0002 }
case 10:
            var13 = var1;
case 9:
            var1 = var6.autoFocus;
            var9 = var4 === var1;
            if(var9) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var9 = var1;
case 11:
            var2 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 6;
            var1 = var7[var1];
            var3 = var2.bind(var4)(var1);
            var1 = var3.useTextField;
            var1 = var1.bind(var3)(var6, var4);
            var12 = var1.innerRef;
            var11 = var1.inputProps;
            var3 = _closure1_slot3;
            var1 = 7;
            var1 = var7[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.Input;
            var1 = {};
            var15 = var1;
            var14 = var6;
            var7 = copyDataProperties(var15, var14);
            var6 = var6.containerStyle;
            var7 = new Array(2);
            var7[0] = var6;
            var6 = undefined;
            if(!var13) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            var6 = var10.centeredContainerStyle;
case 13:
            var7[1] = var6;
            var6 = 'containerStyle';
            var1[var6] = var7;
            var7 = _closure1_slot3;
            var6 = _closure1_slot0;
            var13 = _closure1_slot2;
            var5 = 8;
            var5 = var13[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.NativeTextInput;
            var5 = {};
            var15 = var5;
            var14 = var11;
            var11 = copyDataProperties(var15, var14);
            var11 = 'ref';
            var5[var11] = var12;
            var10 = var10.input;
            var11 = new Array(1);
            var11[0] = var10;
            var10 = 'style';
            var5[var10] = var11;
            var8 = var8.placeholderText;
            var10 = var8.color;
            var8 = 'placeholderTextColor';
            var5[var8] = var10;
            var10 = false;
            var8 = 'spellCheck';
            var5[var8] = var10;
            var8 = 'autoFocus';
            var5[var8] = var9;
            var6 = var7.bind(var4)(var6, var5);
            var5 = 'children';
            var1[var5] = var6;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['GhostInput'] = var2;
    return var1;
})();