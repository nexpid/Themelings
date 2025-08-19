// app/modules/toast/native/Toast.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var1 = function ToastIcon(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var9 = var1.icon;
            var5 = var1.IconComponent;
            var10 = var1.iconColor;
            var7 = var1.recolorLegacyIcon;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 6;
            var1 = var4[var1];
            var4 = undefined;
            var8 = var3.bind(var4)(var1);
            var6 = var8.useToken;
            var1 = null;
            var11 = var1 != var10;
            var3 = 'header-primary';
            if(!var11) { _fun0001_ip = 74; continue _fun0001 }
 71:
            var3 = var10;
 74:
            var6 = var6.bind(var8)(var3);
            var3 = {};
            if(var7) { _fun0001_ip = 96; continue _fun0001 }
 84:
            var7 = true;
            var3['disableColor'] = var7;
            var10 = var3;
            _fun0001_ip = 103; continue _fun0001;
 96:
            var3['color'] = var6;
            var10 = var3;
 103:
            if(!(var1 == var5)) { _fun0001_ip = 210; continue _fun0001 }
 107:
            var7 = 'function';
            var3 = typeof var9;
            if(!(var7 !== var3)) { _fun0001_ip = 184; continue _fun0001 }
 118:
            var3 = var1 != var9;
            var1 = null;
            if(!var3) { _fun0001_ip = 182; continue _fun0001 }
 127:
            var8 = _closure1_slot6;
            var7 = _closure1_slot1;
            var11 = _closure1_slot2;
            var3 = 7;
            var3 = var11[var3];
            var7 = var7.bind(var4)(var3);
            var3 = {};
            var11 = 'contain';
            var3['resizeMode'] = var11;
            var3['source'] = var9;
            var13 = var3;
            var12 = var10;
            var10 = copyDataProperties(var13, var12);
            var1 = var8.bind(var4)(var7, var3);
 182:
            _fun0001_ip = 208; continue _fun0001;
 184:
            var8 = _closure1_slot6;
            var7 = _closure1_slot7;
            var3 = {};
            var9 = var9.bind(var4)();
            var3['children'] = var9;
            var1 = var8.bind(var4)(var7, var3);
 208:
            _fun0001_ip = 234; continue _fun0001;
 210:
            var3 = _closure1_slot6;
            var2 = {};
            var7 = 'sm';
            var2['size'] = var7;
            var2['color'] = var6;
            var1 = var3.bind(var4)(var5, var2);
 234:
            return var1;
        }
    };
    var _closure1_slot10 = var1;
    var1 = function ToastContent(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var6 = var1.content;
            var8 = var1.onTextLayout;
            var1 = _closure1_slot9;
            var5 = undefined;
            var7 = var1.bind(var5)();
            var3 = 'function';
            var1 = typeof var6;
            if(!(var3 !== var1)) { _fun0002_ip = 111; continue _fun0002 }
 38:
            var4 = _closure1_slot6;
            var3 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 8;
            var1 = var9[var1];
            var1 = var3.bind(var5)(var1);
            var3 = var1.Text;
            var1 = {'onTextLayout': null, 'style': null, 'lineClamp': 3, 'variant': 'text-sm/semibold', 'color': 'header-primary'};
            var1['onTextLayout'] = var8;
            var8 = var7.contentContainer;
            var1['style'] = var8;
            var1['children'] = var6;
            var1 = var4.bind(var5)(var3, var1);
            _fun0002_ip = 145; continue _fun0002;
 111:
            var4 = _closure1_slot6;
            var3 = _closure1_slot5;
            var2 = {};
            var7 = var7.contentContainer;
            var2['style'] = var7;
            var6 = var6.bind(var5)();
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 145:
            return var1;
        }
    };
    var _closure1_slot11 = var1;
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
    var4 = var11.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var12 = 1;
    var7 = var6[var12];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot6 = var7;
    var7 = var4.Fragment;
    var _closure1_slot7 = var7;
    var4 = var4.jsxs;
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'flexDirection': 'row', 'alignItems': 'center'};
    var10 = 5;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.xxl;
    var9['borderRadius'] = var13;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_8;
    var9['padding'] = var13;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_12;
    var9['paddingRight'] = var13;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.TOAST_BG;
    var9['backgroundColor'] = var13;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BORDER_SUBTLE;
    var9['borderColor'] = var13;
    var9['borderWidth'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.shadows;
    var15 = var12.SHADOW_HIGH;
    var16 = var9;
    var12 = copyDataProperties(var16, var15);
    var4['container'] = var9;
    var9 = {};
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_12;
    var9['paddingLeft'] = var10;
    var4['multilineContainer'] = var9;
    var9 = {'marginLeft': 8, 'flexShrink': 1};
    var4['contentContainer'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot9 = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/toast/native/Toast.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function Toast(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arg1;
            var14 = var1.icon;
            var13 = var1.iconColor;
            var12 = var1.IconComponent;
            var10 = var1.content;
            var7 = var1.containerStyle;
            var11 = var1.recolorLegacyIcon;
            var1 = _closure1_slot9;
            var4 = undefined;
            var15 = var1.bind(var4)();
            var3 = _closure1_slot4;
            var2 = var3.useState;
            var1 = false;
            var3 = var2.bind(var3)(var1);
            var2 = _closure1_slot3;
            var1 = 2;
            var2 = var2.bind(var4)(var3, var1);
            var1 = 0;
            var16 = var2[var1];
            var1 = 1;
            var1 = var2[var1];
            var _closure2_slot0 = var1;
            var3 = _closure1_slot8;
            var2 = _closure1_slot5;
            var1 = {};
            var8 = var15.container;
            var5 = new Array(3);
            var5[0] = var8;
            var8 = null;
            if(!var16) { _fun0003_ip = 131; continue _fun0003 }
 125:
            var8 = var15.multilineContainer;
 131:
            var5[1] = var8;
            var5[2] = var7;
            var1['style'] = var5;
            var5 = true;
            var1['accessibilityElementsHidden'] = var5;
            var8 = _closure1_slot6;
            var7 = _closure1_slot10;
            var5 = {};
            var5['icon'] = var14;
            var5['iconColor'] = var13;
            var5['IconComponent'] = var12;
            var5['recolorLegacyIcon'] = var11;
            var7 = var8.bind(var4)(var7, var5);
            var5 = new Array(2);
            var5[0] = var7;
            var8 = _closure1_slot6;
            var7 = _closure1_slot11;
            var6 = {};
            var6['content'] = var10;
            var9 = function onTextLayout(arg1) {
                var3 = _closure2_slot0;
                var1 = arg1;
                var1 = var1.nativeEvent;
                var1 = var1.lines;
                var2 = var1.length;
                var1 = 1;
                var2 = var2 > var1;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var6['onTextLayout'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();