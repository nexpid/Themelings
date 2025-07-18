// app/modules/freeze/native/NativeFreezeScreens.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = native4;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.StyleSheet;
    var _closure1_slot5 = var8;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot6 = var4;
    var7 = var8.create;
    var4 = {};
    var9 = {'flex': 1, 'overflow': 'hidden'};
    var4['screens'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot7 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/freeze/native/NativeFreezeScreens.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function NativeFreezeScreens(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var8 = var1.children;
            var10 = var1.activeIndex;
            var _closure2_slot0 = var10;
            var7 = var1.detachInactiveScreens;
            var4 = undefined;
            if(!(var7 === var4)) { _fun0001_ip = 34; continue _fun0001 }
 32:
            var7 = true;
 34:
            var _closure2_slot1 = var7;
            var2 = var1.lazy;
            if(!(var2 === var4)) { _fun0001_ip = 50; continue _fun0001 }
 48:
            var2 = true;
 50:
            var _closure2_slot2 = var2;
            var2 = var1.unmountOnBlur;
            if(!(var2 === var4)) { _fun0001_ip = 66; continue _fun0001 }
 64:
            var2 = false;
 66:
            var _closure2_slot3 = var2;
            var2 = var1.freezeOnBlur;
            if(!(var2 === var4)) { _fun0001_ip = 82; continue _fun0001 }
 80:
            var2 = true;
 82:
            var _closure2_slot4 = var2;
            var1 = var1.preloadIndices;
            if(!(var1 === var4)) { _fun0001_ip = 102; continue _fun0001 }
 98:
            var1 = new Array(0);
 102:
            var _closure2_slot5 = var1;
            var _closure2_slot6 = var4;
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 4;
            var1 = var3[var1];
            var3 = var2.bind(var4)(var1);
            var11 = 0;
            var2 = var10 >= var11;
            if(!var2) { _fun0001_ip = 175; continue _fun0001 }
 142:
            var1 = global;
            var9 = var1.Array;
            var1 = var9.isArray;
            var9 = var1.bind(var9)(var8);
            var1 = 1;
            if(!var9) { _fun0001_ip = 171; continue _fun0001 }
 166:
            var1 = var8.length;
 171:
            var2 = var10 < var1;
 175:
            var1 = 'NativeFreezeScreens: invalid activeIndex';
            var1 = var3.bind(var4)(var2, var1);
            var3 = _closure1_slot4;
            var2 = var3.useState;
            var1 = new Array(1);
            var1[0] = var10;
            var3 = var2.bind(var3)(var1);
            var2 = _closure1_slot3;
            var1 = 2;
            var1 = var2.bind(var4)(var3, var1);
            var3 = var1[var11];
            _closure2_slot6 = var3;
            var9 = 1;
            var2 = var1[var9];
            var1 = var3.includes;
            var1 = var1.bind(var3)(var10);
            if(var1) { _fun0001_ip = 280; continue _fun0001 }
 250:
            var1 = new Array(1);
            var14 = var1;
            var13 = var3;
            var12 = 0;
            var3 = arraySpread(var14, var13, var12);
            var1[var3] = var10;
            var3 = var3 + var9;
            var1 = var2.bind(var4)(var1);
 280:
            var3 = _closure1_slot6;
            var2 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 5;
            var1 = var9[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.ScreenContainer;
            var1 = {};
            var1['enabled'] = var7;
            var7 = true;
            var1['hasTwoStates'] = var7;
            var6 = _closure1_slot7;
            var6 = var6.screens;
            var1['style'] = var6;
            var6 = global;
            var7 = var6.Array;
            var6 = var7.isArray;
            var6 = var6.bind(var7)(var8);
            var7 = var8;
            if(var6) { _fun0001_ip = 372; continue _fun0001 }
 361:
            var6 = new Array(1);
            var6[0] = var8;
            var7 = var6;
 372:
            var6 = var7.map;
            var5 = function(arg1, arg2) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var5 = arg2;
                    var1 = _closure2_slot0;
                    var12 = var1 === var5;
                    var1 = _closure2_slot3;
                    if(!var1) { _fun0002_ip = 28; continue _fun0002 }
 21:
                    if(var12) { _fun0002_ip = 28; continue _fun0002 }
 24:
                    var1 = null;
                    return var1;
 28:
                    var1 = _closure2_slot2;
                    if(!var1) { _fun0002_ip = 76; continue _fun0002 }
 35:
                    var2 = _closure2_slot6;
                    var1 = var2.includes;
                    var1 = var1.bind(var2)(var5);
                    if(var1) { _fun0002_ip = 76; continue _fun0002 }
 52:
                    if(var12) { _fun0002_ip = 76; continue _fun0002 }
 55:
                    var2 = _closure2_slot5;
                    var1 = var2.includes;
                    var1 = var1.bind(var2)(var5);
                    if(var1) { _fun0002_ip = 76; continue _fun0002 }
 72:
                    var1 = null;
                    return var1;
 76:
                    var7 = 0;
                    if(!var12) { _fun0002_ip = 84; continue _fun0002 }
 81:
                    var7 = 2;
 84:
                    var4 = _closure1_slot6;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 5;
                    var1 = var3[var1];
                    var3 = undefined;
                    var1 = var2.bind(var3)(var1);
                    var2 = var1.Screen;
                    var1 = {};
                    var8 = _closure1_slot5;
                    var9 = var8.absoluteFill;
                    var8 = new Array(2);
                    var8[0] = var9;
                    var9 = {};
                    var10 = -1;
                    if(!var12) { _fun0002_ip = 152; continue _fun0002 }
 150:
                    var10 = 0;
 152:
                    var9['zIndex'] = var10;
                    var8[1] = var9;
                    var1['style'] = var8;
                    var1['activityState'] = var7;
                    var7 = _closure2_slot1;
                    var1['enabled'] = var7;
                    var6 = _closure2_slot4;
                    var1['freezeOnBlur'] = var6;
                    var6 = arg1;
                    var1['children'] = var6;
                    var1 = var4.bind(var3)(var2, var1, var5);
                    return var1;
                }
            };
            var5 = var6.bind(var7)(var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['NativeFreezeScreens'] = var2;
    return var1;
})();