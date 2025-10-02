// app/design/components/Sheet/native/ActionSheetHeaderPressableText.native.tsx
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = function() {
        var1 = {};
        var2 = {};
        var3 = 3;
        var2['marginTop'] = var3;
        var1['container'] = var2;
        return var1;
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot3 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'design/components/Sheet/native/ActionSheetHeaderPressableText.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ActionSheetHeaderPressableText(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var6 = var1.onPress;
            var8 = var1.label;
            var7 = var1.accessibilityLabel;
            var1 = _closure1_slot3;
            var4 = undefined;
            var9 = var1.bind(var4)();
            var3 = _closure1_slot2;
            var2 = _closure1_slot0;
            var10 = _closure1_slot1;
            var1 = 2;
            var1 = var10[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.PressableOpacity;
            var1 = {};
            var9 = var9.container;
            var1['style'] = var9;
            var9 = 'button';
            var1['accessibilityRole'] = var9;
            var1['onPress'] = var6;
            var9 = null;
            var6 = var8;
            if(!(var9 != var7)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = var7;
case 2:
            var1['accessibilityLabel'] = var6;
            var7 = _closure1_slot2;
            var6 = _closure1_slot0;
            var9 = _closure1_slot1;
            var5 = 3;
            var5 = var9[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.Text;
            var5 = {'variant': 'text-md/semibold', 'color': 'text-brand'};
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['ActionSheetHeaderPressableText'] = var2;
    return var1;
})();