// app/modules/media_keyboard/native/components/MediaKeyboardLimitedPickerNotice.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function handleLimitedPickerPress() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = _closure1_slot3;
            var2 = var1.NativePermissionManager;
            var4 = null;
            var1 = var4 == var2;
            if(var1) { _fun0001_ip = 32; continue _fun0001 }
 22:
            var3 = var2.presentLimitedLibraryPicker;
            var1 = var4 == var3;
 32:
            if(var1) { _fun0001_ip = 45; continue _fun0001 }
 35:
            var1 = var2.presentLimitedLibraryPicker;
            var1 = var1.bind(var2)();
 45:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot8 = var1;
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
    var4 = native4;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var11 = 1;
    var4 = var6[var11];
    var4 = var5.bind(var1)(var4);
    var7 = var4.NativeModules;
    var _closure1_slot3 = var7;
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot5 = var7;
    var4 = var4.jsxs;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var10 = 16;
    var9 = {'flexDirection': 'row', 'paddingHorizontal': 16, 'paddingVertical': 16, 'alignItems': 'center'};
    var4['container'] = var9;
    var9 = {};
    var12 = 'absolute';
    var9['position'] = var12;
    var4['absoluteContainer'] = var9;
    var9 = {};
    var9['flex'] = var11;
    var4['text'] = var9;
    var9 = {};
    var9['marginLeft'] = var10;
    var4['button'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot7 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/media_keyboard/native/components/MediaKeyboardLimitedPickerNotice.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function MediaKeyboardLimitedPickerNotice(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = arg1;
            var8 = var2.onHeightChange;
            var _closure2_slot0 = var8;
            var2 = _closure1_slot7;
            var4 = undefined;
            var9 = var2.bind(var4)();
            var5 = _closure1_slot2;
            var3 = var5.useCallback;
            var2 = new Array(1);
            var2[0] = var8;
            var1 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = _closure2_slot0;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0003_ip = 43; continue _fun0003 }
 13:
                    var3 = _closure2_slot0;
                    var1 = arg1;
                    var1 = var1.nativeEvent;
                    var1 = var1.layout;
                    var2 = var1.height;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
 43:
                    var1 = undefined;
                    return var1;
                }
            };
            var5 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot6;
            var2 = _closure1_slot4;
            var1 = {};
            var7 = var9.container;
            var6 = new Array(2);
            var6[0] = var7;
            var7 = null;
            var8 = var7 != var8;
            var7 = undefined;
            if(!var8) { _fun0002_ip = 98; continue _fun0002 }
 92:
            var7 = var9.absoluteContainer;
 98:
            var6[1] = var7;
            var1['style'] = var6;
            var1['onLayout'] = var5;
            var8 = _closure1_slot5;
            var15 = _closure1_slot0;
            var16 = _closure1_slot1;
            var5 = 4;
            var5 = var16[var5];
            var5 = var15.bind(var4)(var5);
            var6 = var5.Text;
            var5 = {};
            var7 = var9.text;
            var5['style'] = var7;
            var7 = 'text-sm/normal';
            var5['variant'] = var7;
            var12 = 5;
            var7 = var16[var12];
            var7 = var15.bind(var4)(var7);
            var13 = var7.intl;
            var10 = var13.string;
            var7 = var16[var12];
            var7 = var15.bind(var4)(var7);
            var7 = var7.t;
            var7 = var7.5g7NcH;
            var7 = var10.bind(var13)(var7);
            var5['children'] = var7;
            var6 = var8.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var7 = _closure1_slot4;
            var6 = {};
            var9 = var9.button;
            var6['style'] = var9;
            var9 = 6;
            var9 = var16[var9];
            var9 = var15.bind(var4)(var9);
            var10 = var9.Button;
            var9 = {'size': 'sm', 'variant': 'tertiary'};
            var13 = var16[var12];
            var13 = var15.bind(var4)(var13);
            var14 = var13.intl;
            var13 = var14.string;
            var12 = var16[var12];
            var12 = var15.bind(var4)(var12);
            var12 = var12.t;
            var12 = var12.JuXTi4;
            var12 = var13.bind(var14)(var12);
            var9['text'] = var12;
            var11 = _closure1_slot8;
            var9['onPress'] = var11;
            var9 = var8.bind(var4)(var10, var9);
            var6['children'] = var9;
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