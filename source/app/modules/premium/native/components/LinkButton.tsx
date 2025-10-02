// app/modules/premium/native/components/LinkButton.tsx
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
    var7 = var4.jsx;
    var _closure1_slot2 = var7;
    var4 = var4.jsxs;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'center'};
    var4['defaultContainerStyle'] = var9;
    var9 = {};
    var10 = 0.5;
    var9['opacity'] = var10;
    var4['disabledContainerStyle'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot4 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/native/components/LinkButton.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var7 = var1.onPress;
            var9 = var1.text;
            var14 = var1.containerStyle;
            var8 = var1.disabled;
            var12 = var1.textStyle;
            var11 = var1.variant;
            var4 = undefined;
            if(!(var11 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var11 = 'text-xs/medium';
case 2:
            var10 = var1.textColor;
            if(!(var10 === var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var10 = 'text-link';
case 4:
            var6 = var1.iconRight;
            var1 = _closure1_slot4;
            var16 = var1.bind(var4)();
            var3 = _closure1_slot3;
            var2 = _closure1_slot0;
            var13 = _closure1_slot1;
            var1 = 3;
            var1 = var13[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.PressableOpacity;
            var1 = {};
            var15 = var16.defaultContainerStyle;
            var13 = new Array(3);
            var13[0] = var15;
            var15 = var8;
            if(!var15) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var15 = var16.disabledContainerStyle;
case 6:
            var13[1] = var15;
            var13[2] = var14;
            var1['style'] = var13;
            var13 = {'top': 8, 'right': 8, 'bottom': 8};
            var1['hitSlop'] = var13;
            var13 = 'button';
            var1['accessibilityRole'] = var13;
            var13 = 0.2;
            var1['activeOpacity'] = var13;
            var1['disabled'] = var8;
            var1['onPress'] = var7;
            var8 = _closure1_slot2;
            var7 = _closure1_slot0;
            var13 = _closure1_slot1;
            var5 = 4;
            var5 = var13[var5];
            var5 = var7.bind(var4)(var5);
            var7 = var5.Text;
            var5 = {};
            var5['style'] = var12;
            var5['variant'] = var11;
            var5['color'] = var10;
            var5['children'] = var9;
            var7 = var8.bind(var4)(var7, var5);
            var5 = new Array(2);
            var5[0] = var7;
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['LinkButton'] = var2;
    return var1;
})();