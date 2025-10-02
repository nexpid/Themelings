// app/modules/keyboard/native/PortalKeyboardPlaceholder.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = function PortalKeyboardPlaceholderInner(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var7 = var1.keyboardType;
            var8 = _closure1_slot1;
            var10 = _closure1_slot2;
            var2 = 7;
            var2 = var10[var2];
            var4 = undefined;
            var2 = var8.bind(var4)(var2);
            var2 = var2.bind(var4)();
            var3 = 8;
            var3 = var10[var3];
            var3 = var8.bind(var4)(var3);
            var6 = var3.bind(var4)();
            var3 = 9;
            var3 = var10[var3];
            var3 = var8.bind(var4)(var3);
            var3 = var3.bind(var4)();
            var5 = 10;
            var5 = var10[var5];
            var5 = var8.bind(var4)(var5);
            var8 = var5.bind(var4)();
            var9 = _closure1_slot0;
            var5 = 4;
            var5 = var10[var5];
            var9 = var9.bind(var4)(var5);
            var5 = var9.isAndroid;
            var9 = var5.bind(var9)();
            var5 = 0;
            if(!var9) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = var2.bottom;
case 2:
            var12 = var8 + var5;
            var8 = var3.width;
            var3 = var2.left;
            var3 = var8 - var3;
            var2 = var2.right;
            var13 = var3 - var2;
            var2 = _closure1_slot6;
            var15 = undefined;
            var14 = var7;
            var11 = var6;
            var5 = var15[var2](var14, var13, var12, var11, var10);
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 11;
            var2 = var6[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.useGradientBottom;
            var6 = var2.bind(var3)();
            var3 = _closure1_slot5;
            var2 = _closure1_slot3;
            var1 = {};
            var7 = var5.container;
            var5 = new Array(2);
            var5[0] = var7;
            var5[1] = var6;
            var1['style'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot7 = var1;
    var1 = global;
    var8 = var1.Object;
    var4 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var8)(var3, var1, var2);
    var1 = 0;
    var4 = var6[var1];
    var2 = metroImportAll;
    var1 = undefined;
    var2 = var2.bind(var1)(var4);
    var2 = 1;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var4 = var2.View;
    var _closure1_slot3 = var4;
    var2 = var2.StyleSheet;
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var8 = var2.jsx;
    var _closure1_slot5 = var8;
    var4 = function PortalKeyboardPlaceholder() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 12;
            var1 = var4[var1];
            var5 = undefined;
            var1 = var3.bind(var5)(var1);
            var6 = var1.bind(var5)();
            var1 = 13;
            var1 = var4[var1];
            var1 = var3.bind(var5)(var1);
            var3 = var1.bind(var5)();
            var1 = 0;
            var3 = var3 > var1;
            if(!var3) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 4;
            var1 = var7[var1];
            var4 = var4.bind(var5)(var1);
            var1 = var4.isAndroid;
            var3 = var1.bind(var4)();
case 4:
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 6;
            var1 = var7[var1];
            var1 = var4.bind(var5)(var1);
            var1 = var1.KeyboardTypes;
            var1 = var1.SYSTEM;
            if(!(var6 === var1)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 4;
            var1 = var7[var1];
            var4 = var4.bind(var5)(var1);
            var1 = var4.isAndroid;
            var4 = var1.bind(var4)();
            var1 = null;
            if(var4) { _fun0002_ip = 8; continue _fun0002 }
case 6:
            var1 = null;
            if(var3) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var4 = _closure1_slot5;
            var3 = _closure1_slot7;
            var2 = {};
            var2['keyboardType'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 8:
            return var1;
        }
    };
    var2 = {};
    var2 = var8.bind(var1)(var4, var2);
    var4 = 3;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = function(arg1, arg2, arg3, arg4) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var6 = arg1;
            var7 = arg2;
            var3 = arg3;
            var8 = arg4;
            var1 = {};
            var2 = {};
            var11 = _closure1_slot0;
            var4 = _closure1_slot2;
            var10 = 4;
            var9 = var4[var10];
            var4 = undefined;
            var11 = var11.bind(var4)(var9);
            var9 = var11.isIOS;
            var11 = var9.bind(var11)();
            var9 = null;
            if(!var11) { _fun0003_ip = 10; continue _fun0003 }
case 11:
            var11 = _closure1_slot4;
            var9 = var11.absoluteFillObject;
case 10:
            var15 = var2;
            var14 = var9;
            var9 = copyDataProperties(var15, var14);
            var9 = _closure1_slot4;
            var11 = var9.hairlineWidth;
            var9 = 'borderTopWidth';
            var2[var9] = var11;
            var11 = _closure1_slot1;
            var9 = _closure1_slot2;
            var13 = 5;
            var9 = var9[var13];
            var9 = var11.bind(var4)(var9);
            var9 = var9.colors;
            var11 = var9.BACKGROUND_MODIFIER_ACCENT;
            var9 = 'borderTopColor';
            var2[var9] = var11;
            var11 = undefined;
            if(!var8) { _fun0003_ip = 12; continue _fun0003 }
case 13:
            var12 = _closure1_slot1;
            var9 = _closure1_slot2;
            var9 = var9[var13];
            var9 = var12.bind(var4)(var9);
            var9 = var9.colors;
            var11 = var9.BACKGROUND_MODIFIER_ACCENT;
case 12:
            var9 = 'borderRightColor';
            var2[var9] = var11;
            var11 = undefined;
            if(!var8) { _fun0003_ip = 14; continue _fun0003 }
case 15:
            var9 = _closure1_slot4;
            var11 = var9.hairlineWidth;
case 14:
            var9 = 'borderRightWidth';
            var2[var9] = var11;
            var11 = undefined;
            if(!var8) { _fun0003_ip = 16; continue _fun0003 }
case 17:
            var12 = _closure1_slot1;
            var9 = _closure1_slot2;
            var9 = var9[var13];
            var9 = var12.bind(var4)(var9);
            var9 = var9.colors;
            var11 = var9.BACKGROUND_MODIFIER_ACCENT;
case 16:
            var9 = 'borderLeftColor';
            var2[var9] = var11;
            var9 = undefined;
            if(!var8) { _fun0003_ip = 18; continue _fun0003 }
case 19:
            var8 = _closure1_slot4;
            var9 = var8.hairlineWidth;
case 18:
            var8 = 'borderLeftWidth';
            var2[var8] = var9;
            var11 = _closure1_slot0;
            var9 = _closure1_slot2;
            var8 = 6;
            var9 = var9[var8];
            var9 = var11.bind(var4)(var9);
            var9 = var9.KeyboardTypes;
            var9 = var9.APP_LAUNCHER;
            if(!(var6 !== var9)) { _fun0003_ip = 20; continue _fun0003 }
case 21:
            var11 = _closure1_slot1;
            var9 = _closure1_slot2;
            var9 = var9[var13];
            var9 = var11.bind(var4)(var9);
            var9 = var9.colors;
            var11 = var9.BACKGROUND_MOBILE_SECONDARY;
            _fun0003_ip = 22; continue _fun0003;
case 20:
            var12 = _closure1_slot1;
            var9 = _closure1_slot2;
            var9 = var9[var13];
            var9 = var12.bind(var4)(var9);
            var9 = var9.colors;
            var11 = var9.BACKGROUND_PRIMARY;
case 22:
            var9 = 'backgroundColor';
            var2[var9] = var11;
            var11 = _closure1_slot0;
            var9 = _closure1_slot2;
            var9 = var9[var10];
            var11 = var11.bind(var4)(var9);
            var9 = var11.isIOS;
            var9 = var9.bind(var11)();
            if(var9) { _fun0003_ip = 23; continue _fun0003 }
case 24:
            var11 = _closure1_slot0;
            var9 = _closure1_slot2;
            var9 = var9[var8];
            var9 = var11.bind(var4)(var9);
            var9 = var9.KeyboardTypes;
            var11 = var9.SYSTEM;
            var9 = undefined;
            if(!(var6 !== var11)) { _fun0003_ip = 25; continue _fun0003 }
case 23:
            var9 = var7;
case 25:
            var7 = 'width';
            var2[var7] = var9;
            var9 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var10];
            var9 = var9.bind(var4)(var7);
            var7 = var9.isIOS;
            var7 = var7.bind(var9)();
            if(var7) { _fun0003_ip = 26; continue _fun0003 }
case 27:
            var7 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var8];
            var5 = var7.bind(var4)(var5);
            var5 = var5.KeyboardTypes;
            var5 = var5.SYSTEM;
            var4 = undefined;
            if(!(var6 !== var5)) { _fun0003_ip = 28; continue _fun0003 }
case 26:
            var4 = var3;
case 28:
            var3 = 'height';
            var2[var3] = var4;
            var1['container'] = var2;
            return var1;
        }
    };
    var4 = var8.bind(var9)(var4);
    var _closure1_slot6 = var4;
    var4 = 14;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/keyboard/native/PortalKeyboardPlaceholder.tsx';
    var4 = var5.bind(var6)(var4);
    var3['PORTAL_KEYBOARD_PLACEHOLDER_INSTANCE'] = var2;
    return var1;
})();