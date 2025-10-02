// app/design/components/TagListInput/native/TagListInputTag.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var12 = 0;
    var7 = var6[var12];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot3 = var4;
    var13 = 2;
    var4 = var6[var13];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot4 = var7;
    var4 = var4.jsxs;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 4;
    var14 = var6[var10];
    var14 = var11.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BG_SURFACE_RAISED;
    var9['backgroundColor'] = var14;
    var9['marginHorizontal'] = var13;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.round;
    var9['borderRadius'] = var13;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_8;
    var9['paddingHorizontal'] = var13;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_4;
    var9['paddingVertical'] = var13;
    var13 = 'hidden';
    var9['overflow'] = var13;
    var13 = 'row';
    var9['flexDirection'] = var13;
    var13 = 'center';
    var9['alignItems'] = var13;
    var4['tagWrapper'] = var9;
    var9 = {};
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.unsafe_rawColors;
    var13 = var13.BRAND_500;
    var9['backgroundColor'] = var13;
    var4['highlightedTagWrapper'] = var9;
    var9 = {};
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_4;
    var9['paddingRight'] = var13;
    var9['marginLeft'] = var12;
    var4['tagIcon'] = var9;
    var9 = {};
    var9['marginLeft'] = var12;
    var4['start'] = var9;
    var9 = {};
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_4;
    var9['marginRight'] = var10;
    var4['end'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot6 = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'design/components/TagListInput/native/TagListInputTag.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function TagListInputTagComponent(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var9 = var1.tag;
            var11 = var1.selected;
            var2 = var1.onPress;
            var _closure2_slot0 = var2;
            var16 = var1.start;
            var4 = undefined;
            if(!(var16 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var16 = false;
case 2:
            var15 = var1.end;
            if(!(var15 === var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var15 = false;
case 4:
            var1 = _closure1_slot6;
            var12 = var1.bind(var4)();
            var2 = _closure1_slot0;
            var13 = _closure1_slot2;
            var1 = 5;
            var3 = var13[var1];
            var3 = var2.bind(var4)(var3);
            var7 = var3.intl;
            var5 = var7.formatToPlainString;
            var1 = var13[var1];
            var1 = var2.bind(var4)(var1);
            var1 = var1.t;
            var3 = var1.0Vb9FR;
            var1 = {};
            var8 = var9.text;
            var1['text'] = var8;
            var8 = var5.bind(var7)(var3, var1);
            var3 = _closure1_slot1;
            var1 = 6;
            var1 = var13[var1];
            var3 = var3.bind(var4)(var1);
            var1 = function() {
                var3 = _closure2_slot0;
                var2 = undefined;
                var1 = 'remove';
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var1 = var3.bind(var4)(var1, var8);
            var5 = var1.onAccessibilityAction;
            var7 = var1.accessibilityActions;
            var3 = _closure1_slot5;
            var1 = 7;
            var1 = var13[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.PressableOpacity;
            var1 = {};
            var14 = var12.tagWrapper;
            var13 = new Array(4);
            var13[0] = var14;
            var14 = undefined;
            if(!var11) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var14 = var12.highlightedTagWrapper;
case 6:
            var13[1] = var14;
            var14 = undefined;
            if(!var16) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var14 = var12.start;
case 8:
            var13[2] = var14;
            var14 = undefined;
            if(!var15) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var14 = var12.end;
case 10:
            var13[3] = var14;
            var1['style'] = var13;
            var10 = function onPress() {
                var3 = _closure2_slot0;
                var2 = undefined;
                var1 = 'select';
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var1['onPress'] = var10;
            var10 = 'button';
            var1['accessibilityRole'] = var10;
            var1['accessibilityLabel'] = var8;
            var1['accessibilityActions'] = var7;
            var1['onAccessibilityAction'] = var5;
            var5 = var9.icon;
            var7 = null;
            var5 = var7 != var5;
            if(!var5) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var10 = _closure1_slot4;
            var8 = _closure1_slot3;
            var5 = {};
            var12 = var12.tagIcon;
            var5['style'] = var12;
            var12 = var9.icon;
            var5['children'] = var12;
            var7 = var10.bind(var4)(var8, var5);
case 12:
            var5 = new Array(2);
            var5[0] = var7;
            var8 = _closure1_slot4;
            var7 = _closure1_slot0;
            var10 = _closure1_slot2;
            var6 = 8;
            var6 = var10[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.Text;
            var6 = {'lineClamp': 1, 'variant': 'text-sm/medium'};
            var10 = 'text-normal';
            if(!var11) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var10 = 'always-white';
case 14:
            var6['color'] = var10;
            var9 = var9.text;
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['TagListInputTagComponent'] = var2;
    return var1;
})();