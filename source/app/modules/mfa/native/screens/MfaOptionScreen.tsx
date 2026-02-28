// app/modules/mfa/native/screens/MfaOptionScreen.tsx
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot3 = var7;
    var7 = var4.jsxs;
    var _closure1_slot4 = var7;
    var4 = var4.Fragment;
    var _closure1_slot5 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/mfa/native/screens/MfaOptionScreen.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function MFAOptionScreen(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var21 = var1.headerText;
            var9 = var1.headerImage;
            var22 = var1.subtitle;
            var13 = var1.input;
            var12 = var1.submit;
            var15 = var1.screenProps;
            var2 = var1.mfaMethod;
            var19 = var1.error;
            var7 = var1.content;
            var3 = _closure1_slot1;
            var6 = _closure1_slot2;
            var1 = 1;
            var1 = var6[var1];
            var4 = undefined;
            var1 = var3.bind(var4)(var1);
            var10 = var1.bind(var4)();
            var1 = 2;
            var1 = var6[var1];
            var3 = var3.bind(var4)(var1);
            var1 = var3.useScreenStyles;
            var23 = var1.bind(var3)(var10);
            var1 = var15.mfaChallenge;
            var3 = var1.methods;
            var1 = 0;
            var3 = var3[var1];
            var14 = null;
            var6 = var14 == var3;
            var1 = undefined;
            if(var6) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var3.type;
case 2:
            var11 = var1 === var2;
            var3 = _closure1_slot4;
            var8 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 3;
            var1 = var6[var1];
            var1 = var8.bind(var4)(var1);
            var2 = var1.SafeAreaPaddingView;
            var1 = {};
            var16 = !var10;
            var1['bottom'] = var16;
            var10 = !var10;
            var1['top'] = var10;
            var10 = var23.contentContainer;
            var1['style'] = var10;
            var10 = 4;
            var6 = var6[var10];
            var6 = var8.bind(var4)(var6);
            var8 = var6.Stack;
            var6 = {};
            var16 = var23.mfaContainerHeader;
            var6['style'] = var16;
            var6['spacing'] = var10;
            var16 = var14 != var9;
            if(!var16) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var16 = var9;
case 4:
            var9 = new Array(5);
            var9[0] = var16;
            var18 = _closure1_slot3;
            var17 = _closure1_slot0;
            var16 = _closure1_slot2;
            var20 = 5;
            var16 = var16[var20];
            var16 = var17.bind(var4)(var16);
            var17 = var16.Text;
            var16 = {};
            var24 = 'heading-xl/extrabold';
            var16['variant'] = var24;
            var23 = var23.mfaContainerFooter;
            var16['style'] = var23;
            var16['children'] = var21;
            var16 = var18.bind(var4)(var17, var16);
            var9[1] = var16;
            var16 = var14 != var22;
            if(!var16) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var21 = _closure1_slot3;
            var18 = _closure1_slot0;
            var17 = _closure1_slot2;
            var17 = var17[var20];
            var17 = var18.bind(var4)(var17);
            var18 = var17.Text;
            var17 = {'variant': 'heading-sm/normal', 'color': 'text-default'};
            var17['children'] = var22;
            var16 = var21.bind(var4)(var18, var17);
case 6:
            var9[2] = var16;
            var14 = var14 != var19;
            if(!var14) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var18 = _closure1_slot3;
            var17 = _closure1_slot0;
            var16 = _closure1_slot2;
            var16 = var16[var20];
            var16 = var17.bind(var4)(var16);
            var17 = var16.Text;
            var16 = {'variant': 'text-sm/normal', 'color': 'text-feedback-critical'};
            var16['children'] = var19;
            var14 = var18.bind(var4)(var17, var16);
case 8:
            var9[3] = var14;
            var9[4] = var13;
            var6['children'] = var9;
            var8 = var3.bind(var4)(var8, var6);
            var6 = new Array(3);
            var6[0] = var8;
            var6[1] = var7;
            var9 = _closure1_slot4;
            var8 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var10];
            var7 = var8.bind(var4)(var7);
            var8 = var7.Stack;
            var7 = {};
            var10 = new Array(2);
            var10[0] = var12;
            if(!var11) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var14 = _closure1_slot3;
            var13 = _closure1_slot1;
            var16 = _closure1_slot2;
            var12 = 6;
            var12 = var16[var12];
            var13 = var13.bind(var4)(var12);
            var12 = {};
            var12['props'] = var15;
            var11 = var14.bind(var4)(var13, var12);
case 10:
            var10[1] = var11;
            var7['children'] = var10;
            var7 = var9.bind(var4)(var8, var7);
            var6[2] = var7;
            var1['children'] = var6;
            var6 = var3.bind(var4)(var2, var1);
            var3 = _closure1_slot4;
            var2 = _closure1_slot5;
            var1 = {};
            var8 = _closure1_slot3;
            var7 = _closure1_slot1;
            var9 = _closure1_slot2;
            var5 = 7;
            var5 = var9[var5];
            var7 = var7.bind(var4)(var5);
            var5 = {};
            var9 = false;
            var5['backgroundImageCover'] = var9;
            var7 = var8.bind(var4)(var7, var5);
            var5 = new Array(2);
            var5[0] = var7;
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();