// app/modules/user_profile/native/UserProfileGradientContainer.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var8 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = native4;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var4 = 2;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot6 = var4;
    var4 = var7.memo;
    var2 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var12 = var2.primaryColor;
            var _closure2_slot0 = var12;
            var6 = var2.secondaryColor;
            var _closure2_slot1 = var6;
            var11 = var2.fallbackBackground;
            var _closure2_slot2 = var11;
            var9 = var2.containerStyle;
            var7 = var2.children;
            var4 = undefined;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var10 = _closure1_slot4;
            var2 = var10.useState;
            var8 = var2.bind(var10)();
            var3 = _closure1_slot3;
            var2 = 2;
            var3 = var3.bind(var4)(var8, var2);
            var2 = 0;
            var15 = var3[var2];
            var2 = 1;
            var2 = var3[var2];
            var _closure2_slot3 = var2;
            var8 = var10.useCallback;
            var3 = function(arg1) {
                var1 = arg1;
                var1 = var1.nativeEvent;
                var3 = _closure2_slot3;
                var2 = var1.layout;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var2 = new Array(0);
            var10 = var8.bind(var10)(var3, var2);
            var8 = _closure1_slot0;
            var14 = _closure1_slot2;
            var2 = 4;
            var2 = var14[var2];
            var16 = var8.bind(var4)(var2);
            var13 = var16.useStateFromStores;
            var2 = _closure1_slot5;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var1 = _closure1_slot5;
                var1 = var1.syncProfileThemeWithUserTheme;
                return var1;
            };
            var2 = var13.bind(var16)(var3, var2);
            var3 = 5;
            var3 = var14[var3];
            var13 = var8.bind(var4)(var3);
            var3 = var13.useThemeContext;
            var3 = var3.bind(var13)();
            var13 = var3.theme;
            var3 = 6;
            var3 = var14[var3];
            var8 = var8.bind(var4)(var3);
            var3 = var8.useProfileThemeValues;
            var8 = var3.bind(var8)(var13);
            var3 = null;
            var13 = var3 == var8;
            if(var2) { _fun0001_ip = 247; continue _fun0001 }
 234:
            var2 = undefined;
            if(var13) { _fun0001_ip = 245; continue _fun0001 }
 239:
            var2 = var8.overlay;
 245:
            _fun0001_ip = 261; continue _fun0001;
 247:
            var3 = undefined;
            if(var13) { _fun0001_ip = 258; continue _fun0001 }
 252:
            var3 = var8.overlaySyncedWithUserTheme;
 258:
            var2 = var3;
 261:
            _closure2_slot4 = var2;
            var8 = _closure1_slot4;
            var14 = var8.useMemo;
            var13 = new Array(2);
            var13[0] = var12;
            var13[1] = var2;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = _closure2_slot0;
                    var4 = null;
                    var3 = var4 != var1;
                    var1 = null;
                    if(!var3) { _fun0002_ip = 76; continue _fun0002 }
 18:
                    var3 = _closure2_slot4;
                    var3 = var4 != var3;
                    var1 = null;
                    if(!var3) { _fun0002_ip = 76; continue _fun0002 }
 31:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 7;
                    var4 = var4[var3];
                    var3 = undefined;
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.calculateOverlayedColor;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot4;
                    var1 = var4.bind(var5)(var3, var2);
 76:
                    return var1;
                }
            };
            var14 = var14.bind(var8)(var3, var13);
            _closure2_slot5 = var14;
            var13 = var8.useMemo;
            var3 = new Array(2);
            var3[0] = var6;
            var3[1] = var2;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var1 = _closure2_slot1;
                    var4 = null;
                    var3 = var4 != var1;
                    var1 = null;
                    if(!var3) { _fun0003_ip = 76; continue _fun0003 }
 18:
                    var3 = _closure2_slot4;
                    var3 = var4 != var3;
                    var1 = null;
                    if(!var3) { _fun0003_ip = 76; continue _fun0003 }
 31:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 7;
                    var4 = var4[var3];
                    var3 = undefined;
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.calculateOverlayedColor;
                    var3 = _closure2_slot1;
                    var2 = _closure2_slot4;
                    var1 = var4.bind(var5)(var3, var2);
 76:
                    return var1;
                }
            };
            var13 = var13.bind(var8)(var2, var3);
            _closure2_slot6 = var13;
            var3 = var8.useMemo;
            var2 = new Array(3);
            var2[0] = var11;
            var2[1] = var14;
            var2[2] = var13;
            var1 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 7;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var4 = var5.getUserProfileGradientContainerColors;
                var3 = _closure2_slot5;
                var2 = _closure2_slot6;
                var1 = _closure2_slot2;
                var1 = var4.bind(var5)(var3, var2, var1);
                return var1;
            };
            var8 = var3.bind(var8)(var1, var2);
            var3 = _closure1_slot6;
            var2 = _closure1_slot0;
            var11 = _closure1_slot2;
            var1 = 8;
            var1 = var11[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.UserProfileGradientContextProvider;
            var1 = {};
            var1['parentLayout'] = var15;
            var1['primaryColor'] = var14;
            var1['secondaryColor'] = var13;
            var1['borderPrimaryColor'] = var12;
            var1['borderSecondaryColor'] = var6;
            var6 = _closure1_slot1;
            var5 = 9;
            var5 = var11[var5];
            var6 = var6.bind(var4)(var5);
            var5 = {};
            var5['onLayout'] = var10;
            var5['style'] = var9;
            var5['colors'] = var8;
            var5['children'] = var7;
            var5 = var3.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/native/UserProfileGradientContainer.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();