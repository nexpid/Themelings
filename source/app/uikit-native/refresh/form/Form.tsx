// app/uikit-native/refresh/form/Form.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var1 = native3;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var7;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var2);
    var1 = 0;
    var5 = var7[var1];
    var2 = native4;
    var1 = undefined;
    var8 = var2.bind(var1)(var5);
    var _closure1_slot3 = var8;
    var11 = 1;
    var2 = var7[var11];
    var2 = var6.bind(var1)(var2);
    var2 = var2.ScrollView;
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.jsx;
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var7[var2];
    var9 = var6.bind(var1)(var2);
    var5 = var9.createStyles;
    var2 = {};
    var10 = {};
    var10['flex'] = var11;
    var2['form'] = var10;
    var10 = {};
    var11 = 16;
    var10['paddingTop'] = var11;
    var2['redesign'] = var10;
    var2 = var5.bind(var9)(var2);
    var _closure1_slot6 = var2;
    var5 = var8.createContext;
    var2 = {};
    var9 = false;
    var2['isForm'] = var9;
    var2 = var5.bind(var8)(var2);
    var _closure1_slot7 = var2;
    var5 = var8.forwardRef;
    var4 = function(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var16 = var1.style;
            var7 = var1.children;
            var10 = var1.keyboardShouldPersistTaps;
            var4 = undefined;
            if(!(var10 === var4)) { _fun0001_ip = 31; continue _fun0001 }
 25:
            var10 = 'never';
 31:
            var9 = var1.alwaysBounceVertical;
            if(!(var9 === var4)) { _fun0001_ip = 43; continue _fun0001 }
 41:
            var9 = true;
 43:
            var12 = var1.contentContainerStyle;
            var8 = var1.onScroll;
            var13 = var1.scrollsToTop;
            var17 = var1.onLayout;
            var1 = _closure1_slot6;
            var15 = var1.bind(var4)();
            var2 = _closure1_slot1;
            var14 = _closure1_slot2;
            var1 = 4;
            var1 = var14[var1];
            var1 = var2.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var11 = var1.insets;
            var3 = _closure1_slot3;
            var2 = var3.useContext;
            var6 = _closure1_slot0;
            var1 = 5;
            var1 = var14[var1];
            var1 = var6.bind(var4)(var1);
            var1 = var1.RedesignCompatContext;
            var14 = var2.bind(var3)(var1);
            var3 = _closure1_slot5;
            var1 = _closure1_slot7;
            var2 = var1.Provider;
            var1 = {};
            var6 = {};
            var18 = true;
            var6['isForm'] = var18;
            var1['value'] = var6;
            var6 = _closure1_slot4;
            var5 = {};
            var18 = arg2;
            var5['ref'] = var18;
            var5['onLayout'] = var17;
            var5['scrollsToTop'] = var13;
            var17 = var15.form;
            var13 = new Array(3);
            var13[0] = var17;
            var13[1] = var16;
            if(!var14) { _fun0001_ip = 224; continue _fun0001 }
 218:
            var14 = var15.redesign;
 224:
            var13[2] = var14;
            var5['style'] = var13;
            var13 = {};
            var14 = var11.bottom;
            var11 = 38;
            var11 = var11 + var14;
            var13['paddingBottom'] = var11;
            var11 = new Array(2);
            var11[0] = var13;
            var11[1] = var12;
            var5['contentContainerStyle'] = var11;
            var11 = {};
            var12 = 0;
            var11['top'] = var12;
            var5['contentInset'] = var11;
            var11 = false;
            var5['automaticallyAdjustContentInsets'] = var11;
            var5['keyboardShouldPersistTaps'] = var10;
            var5['alwaysBounceVertical'] = var9;
            var5['onScroll'] = var8;
            var5['children'] = var7;
            var5 = var3.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = var5.bind(var8)(var4);
    var5 = 6;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'uikit-native/refresh/form/Form.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['FormContext'] = var2;
    return var1;
})();