// app/uikit-native/HelpMessage.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var15 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var15;
    var _closure1_slot2 = var7;
    var1 = function getIcon(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var1 = _closure1_slot7;
            var1 = var1.WARNING;
            if(!(var1 !== var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = _closure1_slot7;
            var1 = var1.INFO;
            if(!(var1 !== var2)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = _closure1_slot7;
            var1 = var1.ERROR;
            if(!(var1 !== var2)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var1 = _closure1_slot7;
            var1 = var1.SUCCESS;
            if(!(var1 !== var2)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var1 = undefined;
            return var1;
case 8:
            var4 = _closure1_slot4;
            var2 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 9;
            var1 = var8[var1];
            var3 = undefined;
            var1 = var2.bind(var3)(var1);
            var2 = var1.CircleCheckIcon;
            var1 = {};
            var7 = _closure1_slot1;
            var6 = 4;
            var6 = var8[var6];
            var6 = var7.bind(var3)(var6);
            var6 = var6.unsafe_rawColors;
            var6 = var6.GREEN_400;
            var1['color'] = var6;
            var1 = var4.bind(var3)(var2, var1);
            return var1;
case 6:
            var4 = _closure1_slot4;
            var2 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 8;
            var1 = var8[var1];
            var3 = undefined;
            var1 = var2.bind(var3)(var1);
            var2 = var1.CircleXIcon;
            var1 = {};
            var7 = _closure1_slot1;
            var6 = 4;
            var6 = var8[var6];
            var6 = var7.bind(var3)(var6);
            var6 = var6.unsafe_rawColors;
            var6 = var6.RED_400;
            var1['color'] = var6;
            var1 = var4.bind(var3)(var2, var1);
            return var1;
case 4:
            var4 = _closure1_slot4;
            var2 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 7;
            var1 = var8[var1];
            var3 = undefined;
            var1 = var2.bind(var3)(var1);
            var2 = var1.CircleInformationIcon;
            var1 = {};
            var7 = _closure1_slot1;
            var6 = 4;
            var6 = var8[var6];
            var6 = var7.bind(var3)(var6);
            var6 = var6.unsafe_rawColors;
            var6 = var6.BLUE_345;
            var1['color'] = var6;
            var1 = var4.bind(var3)(var2, var1);
            return var1;
case 2:
            var4 = _closure1_slot4;
            var2 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 6;
            var1 = var7[var1];
            var3 = undefined;
            var1 = var2.bind(var3)(var1);
            var2 = var1.CircleErrorIcon;
            var1 = {};
            var6 = _closure1_slot1;
            var5 = 4;
            var5 = var7[var5];
            var5 = var6.bind(var3)(var5);
            var5 = var5.unsafe_rawColors;
            var5 = var5.YELLOW_300;
            var1['color'] = var5;
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot8 = var1;
    var1 = function useContainerStyle(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = arg1;
            var1 = arg2;
            var4 = _closure1_slot7;
            var4 = var4.WARNING;
            if(!(var4 !== var3)) { _fun0002_ip = 10; continue _fun0002 }
case 3:
            var4 = _closure1_slot7;
            var4 = var4.INFO;
            if(!(var4 !== var3)) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var4 = _closure1_slot7;
            var4 = var4.ERROR;
            if(!(var4 !== var3)) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            var2 = _closure1_slot7;
            var2 = var2.SUCCESS;
            if(!(var2 !== var3)) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var2 = undefined;
            return var2;
case 15:
            var2 = var1.successContainer;
            return var2;
case 13:
            var2 = var1.errorContainer;
            return var2;
case 11:
            var2 = var1.infoContainer;
            return var2;
case 10:
            var1 = var1.warningContainer;
            return var1;
        }
    };
    var _closure1_slot9 = var1;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var2);
    var11 = 0;
    var5 = var7[var11];
    var2 = metroImportAll;
    var1 = undefined;
    var2 = var2.bind(var1)(var5);
    var10 = 1;
    var2 = var7[var10];
    var2 = var6.bind(var1)(var2);
    var2 = var2.View;
    var _closure1_slot3 = var2;
    var9 = 2;
    var2 = var7[var9];
    var2 = var6.bind(var1)(var2);
    var5 = var2.jsx;
    var _closure1_slot4 = var5;
    var2 = var2.jsxs;
    var _closure1_slot5 = var2;
    var8 = 3;
    var2 = var7[var8];
    var12 = var6.bind(var1)(var2);
    var5 = var12.createStyles;
    var2 = {};
    var13 = {'display': 'flex', 'borderRadius': null, 'flexDirection': 'row', 'alignItems': 'center', 'padding': 8, 'borderWidth': 1, 'borderStyle': 'solid'};
    var14 = 4;
    var16 = var7[var14];
    var16 = var15.bind(var1)(var16);
    var16 = var16.radii;
    var16 = var16.xs;
    var13['borderRadius'] = var16;
    var2['container'] = var13;
    var13 = {'flex': 1, 'marginLeft': 8};
    var2['content'] = var13;
    var13 = {};
    var16 = 5;
    var17 = var7[var16];
    var20 = var6.bind(var1)(var17);
    var18 = var20.int2rgba;
    var17 = var7[var16];
    var21 = var6.bind(var1)(var17);
    var19 = var21.hex2int;
    var17 = var7[var14];
    var17 = var15.bind(var1)(var17);
    var17 = var17.unsafe_rawColors;
    var17 = var17.YELLOW_300;
    var17 = var19.bind(var21)(var17);
    var19 = 0.1;
    var17 = var18.bind(var20)(var17, var19);
    var13['backgroundColor'] = var17;
    var17 = var7[var14];
    var17 = var15.bind(var1)(var17);
    var17 = var17.unsafe_rawColors;
    var17 = var17.YELLOW_300;
    var13['borderColor'] = var17;
    var2['warningContainer'] = var13;
    var13 = {};
    var17 = var7[var16];
    var20 = var6.bind(var1)(var17);
    var18 = var20.int2rgba;
    var17 = var7[var16];
    var22 = var6.bind(var1)(var17);
    var21 = var22.hex2int;
    var17 = var7[var14];
    var17 = var15.bind(var1)(var17);
    var17 = var17.unsafe_rawColors;
    var17 = var17.BLUE_345;
    var17 = var21.bind(var22)(var17);
    var17 = var18.bind(var20)(var17, var19);
    var13['backgroundColor'] = var17;
    var17 = var7[var14];
    var17 = var15.bind(var1)(var17);
    var17 = var17.unsafe_rawColors;
    var17 = var17.BLUE_345;
    var13['borderColor'] = var17;
    var2['infoContainer'] = var13;
    var13 = {};
    var17 = var7[var16];
    var20 = var6.bind(var1)(var17);
    var18 = var20.int2rgba;
    var17 = var7[var16];
    var22 = var6.bind(var1)(var17);
    var21 = var22.hex2int;
    var17 = var7[var14];
    var17 = var15.bind(var1)(var17);
    var17 = var17.unsafe_rawColors;
    var17 = var17.RED_400;
    var17 = var21.bind(var22)(var17);
    var17 = var18.bind(var20)(var17, var19);
    var13['backgroundColor'] = var17;
    var17 = var7[var14];
    var17 = var15.bind(var1)(var17);
    var17 = var17.unsafe_rawColors;
    var17 = var17.RED_400;
    var13['borderColor'] = var17;
    var2['errorContainer'] = var13;
    var13 = {};
    var17 = var7[var16];
    var18 = var6.bind(var1)(var17);
    var17 = var18.int2rgba;
    var16 = var7[var16];
    var21 = var6.bind(var1)(var16);
    var20 = var21.hex2int;
    var16 = var7[var14];
    var16 = var15.bind(var1)(var16);
    var16 = var16.unsafe_rawColors;
    var16 = var16.GREEN_400;
    var16 = var20.bind(var21)(var16);
    var16 = var17.bind(var18)(var16, var19);
    var13['backgroundColor'] = var16;
    var14 = var7[var14];
    var14 = var15.bind(var1)(var14);
    var14 = var14.unsafe_rawColors;
    var14 = var14.GREEN_400;
    var13['borderColor'] = var14;
    var2['successContainer'] = var13;
    var2 = var5.bind(var12)(var2);
    var _closure1_slot6 = var2;
    var2 = {};
    var2['WARNING'] = var11;
    var5 = 'WARNING';
    var2[var11] = var5;
    var2['INFO'] = var10;
    var5 = 'INFO';
    var2[var10] = var5;
    var2['ERROR'] = var9;
    var5 = 'ERROR';
    var2[var9] = var5;
    var2['SUCCESS'] = var8;
    var5 = 'SUCCESS';
    var2[var8] = var5;
    var _closure1_slot7 = var2;
    var5 = 11;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'uikit-native/HelpMessage.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function HelpMessage(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var9 = var1.children;
            var7 = var1.messageType;
            var10 = var1.textVariant;
            var4 = undefined;
            if(!(var10 === var4)) { _fun0003_ip = 17; continue _fun0003 }
case 18:
            var10 = 'text-sm/medium';
case 17:
            var11 = var1.textColor;
            if(!(var11 === var4)) { _fun0003_ip = 19; continue _fun0003 }
case 5:
            var11 = 'text-normal';
case 19:
            var1 = _closure1_slot6;
            var12 = var1.bind(var4)();
            var3 = _closure1_slot5;
            var2 = _closure1_slot3;
            var1 = {};
            var8 = var12.container;
            var5 = new Array(2);
            var5[0] = var8;
            var8 = _closure1_slot9;
            var8 = var8.bind(var4)(var7, var12);
            var5[1] = var8;
            var1['style'] = var5;
            var5 = _closure1_slot8;
            var7 = var5.bind(var4)(var7);
            var5 = new Array(2);
            var5[0] = var7;
            var8 = _closure1_slot4;
            var7 = _closure1_slot0;
            var13 = _closure1_slot2;
            var6 = 10;
            var6 = var13[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.TextWithIOSLinkWorkaround;
            var6 = {};
            var12 = var12.content;
            var6['style'] = var12;
            var6['color'] = var11;
            var6['variant'] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var4;
    var3['HelpMessageTypes'] = var2;
    return var1;
})();