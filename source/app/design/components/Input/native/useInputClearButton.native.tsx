// app/design/components/Input/native/useInputClearButton.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var2 = function useInputClearButtonConfig(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg2;
            var1 = arg1;
            var1 = var1.isClearable;
            if(!var1) { _fun0001_ip = 24; continue _fun0001 }
 15:
            var1 = var3.hasValue;
            if(var1) { _fun0001_ip = 28; continue _fun0001 }
 24:
            var1 = undefined;
            return var1;
 28:
            var1 = {};
            var6 = _closure1_slot3;
            var8 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 3;
            var2 = var4[var2];
            var7 = undefined;
            var2 = var8.bind(var7)(var2);
            var5 = var2.CircleXIcon;
            var2 = {};
            var9 = 'xs';
            var2['size'] = var9;
            var2 = var6.bind(var7)(var5, var2);
            var1['content'] = var2;
            var2 = {};
            var3 = var3.clear;
            var2['onPress'] = var3;
            var3 = 4;
            var5 = var4[var3];
            var5 = var8.bind(var7)(var5);
            var6 = var5.intl;
            var5 = var6.string;
            var4 = var4[var3];
            var4 = var8.bind(var7)(var4);
            var4 = var4.t;
            var4 = var4.VkKicX;
            var4 = var5.bind(var6)(var4);
            var2['accessibilityLabel'] = var4;
            var4 = 'button';
            var2['accessibilityRole'] = var4;
            var2['hitSlop'] = var3;
            var1['pressableProps'] = var2;
            return var1;
        }
    };
    var _closure1_slot4 = var2;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var5);
    var1 = 0;
    var8 = var7[var1];
    var5 = metroImportAll;
    var1 = undefined;
    var5 = var5.bind(var1)(var8);
    var5 = 1;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.Pressable;
    var _closure1_slot2 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.jsx;
    var _closure1_slot3 = var5;
    var5 = 5;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'design/components/Input/native/useInputClearButton.native.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function useInputClearButton(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var4 = _closure1_slot4;
            var5 = undefined;
            var3 = arg1;
            var1 = arg2;
            var6 = var4.bind(var5)(var3, var1);
            var1 = null;
            var3 = var1 != var6;
            if(!var3) { _fun0002_ip = 73; continue _fun0002 }
 30:
            var4 = _closure1_slot3;
            var3 = _closure1_slot2;
            var2 = {};
            var8 = var6.pressableProps;
            var9 = var2;
            var7 = copyDataProperties(var9, var8);
            var7 = var6.content;
            var6 = 'children';
            var2[var6] = var7;
            var1 = var4.bind(var5)(var3, var2);
 73:
            return var1;
        }
    };
    var3['useInputClearButton'] = var4;
    var3['useInputClearButtonConfig'] = var2;
    return var1;
})();