// app/modules/chat_input/native/ChatInputScrimGradient.tsx
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
    var4 = var4.View;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot4 = var7;
    var4 = var4.jsxs;
    var _closure1_slot5 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/chat_input/native/ChatInputScrimGradient.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function ChatInputScrimGradient(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var8 = var1.gradientHeight;
            var7 = var1.inline;
            var4 = undefined;
            if(!(var7 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var7 = false;
case 2:
            var5 = var1.scrimBase;
            var10 = _closure1_slot0;
            var12 = _closure1_slot2;
            var1 = 3;
            var2 = var12[var1];
            var3 = var10.bind(var4)(var2);
            var2 = var3.useGradientValue;
            var1 = var12[var1];
            var1 = var10.bind(var4)(var1);
            var1 = var1.GradientPercentage;
            var1 = var1.END;
            var1 = var2.bind(var3)(var1);
            var9 = 4;
            var2 = var12[var9];
            var14 = var10.bind(var4)(var2);
            var13 = var14.useToken;
            var11 = _closure1_slot1;
            var2 = 5;
            var3 = var12[var2];
            var3 = var11.bind(var4)(var3);
            var3 = var3.colors;
            var3 = var3.BACKGROUND_BASE_LOWER;
            var3 = var13.bind(var14)(var3);
            var9 = var12[var9];
            var10 = var10.bind(var4)(var9);
            var9 = var10.useToken;
            var2 = var12[var2];
            var2 = var11.bind(var4)(var2);
            var2 = var2.modules;
            var2 = var2.mobile;
            var2 = var2.CHAT_INPUT_FLOATING_SCRIM_GRADIENT_HEIGHT;
            var12 = var9.bind(var10)(var2);
            var2 = null;
            if(!(var2 != var8)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var12 = var8;
case 4:
            if(!(var2 != var5)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var1 = var5;
case 6:
            if(!(var2 != var1)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var3 = var1;
case 8:
            var8 = _closure1_slot0;
            var1 = _closure1_slot2;
            var5 = 6;
            var1 = var1[var5];
            var8 = var8.bind(var4)(var1);
            var1 = var8.hex2rgb;
            var11 = 1;
            var1 = var1.bind(var8)(var3, var11);
            var8 = var3;
            var10 = var8;
            if(!(var2 != var1)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var10 = var1;
case 10:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var5];
            var5 = var3.bind(var4)(var1);
            var3 = var5.hex2rgb;
            var1 = 0;
            var1 = var3.bind(var5)(var8, var1);
            var2 = var2 != var1;
            var13 = 'transparent';
            if(!var2) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var13 = var1;
case 12:
            var3 = _closure1_slot5;
            var2 = _closure1_slot3;
            var1 = {};
            var5 = {'position': 'absolute', 'top': null, 'left': 0, 'right': 0, 'bottom': 0};
            var8 = -var12;
            if(var7) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var7 = 2;
            var7 = var8 / var7;
            _fun0001_ip = 16; continue _fun0001;
case 14:
            var7 = var8;
case 16:
            var5['top'] = var7;
            var1['style'] = var5;
            var5 = 'none';
            var1['pointerEvents'] = var5;
            var8 = _closure1_slot4;
            var7 = _closure1_slot1;
            var9 = _closure1_slot2;
            var5 = 7;
            var5 = var9[var5];
            var7 = var7.bind(var4)(var5);
            var5 = {};
            var9 = new Array(2);
            var9[0] = var13;
            var9[1] = var10;
            var5['colors'] = var9;
            var9 = {};
            var9['height'] = var12;
            var5['style'] = var9;
            var9 = {'x': 0, 'y': 0};
            var5['start'] = var9;
            var9 = {'x': 0, 'y': 1};
            var5['end'] = var9;
            var9 = [0, 1];
            var5['locations'] = var9;
            var7 = var8.bind(var4)(var7, var5);
            var5 = new Array(2);
            var5[0] = var7;
            var7 = _closure1_slot3;
            var6 = {};
            var9 = {};
            var9['flex'] = var11;
            var9['backgroundColor'] = var10;
            var6['style'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['ChatInputScrimGradient'] = var4;
    var2 = function useChatInputFloatingOverlayStyle() {
        var1 = {};
        var4 = _closure1_slot0;
        var7 = _closure1_slot2;
        var3 = 4;
        var3 = var7[var3];
        var6 = undefined;
        var4 = var4.bind(var6)(var3);
        var3 = var4.useToken;
        var5 = _closure1_slot1;
        var2 = 5;
        var2 = var7[var2];
        var2 = var5.bind(var6)(var2);
        var2 = var2.modules;
        var2 = var2.mobile;
        var2 = var2.CHAT_INPUT_FLOATING_SCRIM_GRADIENT_HEIGHT;
        var2 = var3.bind(var4)(var2);
        var3 = -var2;
        var2 = 2;
        var2 = var3 / var2;
        var1['marginTop'] = var2;
        var2 = 'visible';
        var1['overflow'] = var2;
        return var1;
    };
    var3['useChatInputFloatingOverlayStyle'] = var2;
    return var1;
})();