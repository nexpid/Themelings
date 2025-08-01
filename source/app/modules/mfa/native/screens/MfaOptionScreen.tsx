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
    var4 = var4.View;
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot4 = var7;
    var7 = var4.jsxs;
    var _closure1_slot5 = var7;
    var4 = var4.Fragment;
    var _closure1_slot6 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/mfa/native/screens/MfaOptionScreen.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function MFAOptionScreen(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var21 = var1.headerText;
            var9 = var1.headerImage;
            var22 = var1.subtitle;
            var10 = var1.input;
            var12 = var1.submit;
            var17 = var1.screenProps;
            var2 = var1.mfaMethod;
            var19 = var1.error;
            var7 = var1.content;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 2;
            var1 = var4[var1];
            var4 = undefined;
            var3 = var3.bind(var4)(var1);
            var1 = var3.useScreenStyles;
            var15 = var1.bind(var3)();
            var1 = var17.mfaChallenge;
            var3 = var1.methods;
            var1 = 0;
            var3 = var3[var1];
            var13 = null;
            var6 = var13 == var3;
            var1 = undefined;
            if(var6) { _fun0001_ip = 124; continue _fun0001 }
 119:
            var1 = var3.type;
 124:
            var11 = var1 === var2;
            var3 = _closure1_slot5;
            var2 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 3;
            var1 = var6[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.SafeAreaPaddingView;
            var1 = {'bottom': true, 'top': true};
            var6 = var15.contentContainer;
            var1['style'] = var6;
            var8 = _closure1_slot3;
            var6 = {};
            var14 = var15.mfaContainerHeader;
            var6['style'] = var14;
            var14 = var13 != var9;
            if(!var14) { _fun0001_ip = 208; continue _fun0001 }
 205:
            var14 = var9;
 208:
            var9 = new Array(5);
            var9[0] = var14;
            var18 = _closure1_slot4;
            var16 = _closure1_slot0;
            var14 = _closure1_slot2;
            var20 = 4;
            var14 = var14[var20];
            var14 = var16.bind(var4)(var14);
            var16 = var14.Text;
            var14 = {};
            var23 = 'heading-xl/extrabold';
            var14['variant'] = var23;
            var23 = var15.mfaContainerFooter;
            var14['style'] = var23;
            var14['children'] = var21;
            var14 = var18.bind(var4)(var16, var14);
            var9[1] = var14;
            var14 = var13 != var22;
            if(!var14) { _fun0001_ip = 338; continue _fun0001 }
 288:
            var21 = _closure1_slot4;
            var18 = _closure1_slot0;
            var16 = _closure1_slot2;
            var16 = var16[var20];
            var16 = var18.bind(var4)(var16);
            var18 = var16.Text;
            var16 = {'variant': 'text-sm/normal', 'color': 'header-secondary'};
            var16['children'] = var22;
            var14 = var21.bind(var4)(var18, var16);
 338:
            var9[2] = var14;
            var13 = var13 != var19;
            if(!var13) { _fun0001_ip = 399; continue _fun0001 }
 349:
            var18 = _closure1_slot4;
            var16 = _closure1_slot0;
            var14 = _closure1_slot2;
            var14 = var14[var20];
            var14 = var16.bind(var4)(var14);
            var16 = var14.Text;
            var14 = {'variant': 'text-sm/normal', 'color': 'text-danger'};
            var14['children'] = var19;
            var13 = var18.bind(var4)(var16, var14);
 399:
            var9[3] = var13;
            var9[4] = var10;
            var6['children'] = var9;
            var8 = var3.bind(var4)(var8, var6);
            var6 = new Array(3);
            var6[0] = var8;
            var6[1] = var7;
            var9 = _closure1_slot5;
            var8 = _closure1_slot3;
            var7 = {};
            var10 = new Array(2);
            var10[0] = var12;
            if(!var11) { _fun0001_ip = 512; continue _fun0001 }
 450:
            var14 = _closure1_slot4;
            var13 = _closure1_slot3;
            var12 = {};
            var15 = var15.mfaContainerFooterMargin;
            var12['style'] = var15;
            var16 = _closure1_slot1;
            var18 = _closure1_slot2;
            var15 = 5;
            var15 = var18[var15];
            var16 = var16.bind(var4)(var15);
            var15 = {};
            var15['props'] = var17;
            var15 = var14.bind(var4)(var16, var15);
            var12['children'] = var15;
            var11 = var14.bind(var4)(var13, var12);
 512:
            var10[1] = var11;
            var7['children'] = var10;
            var7 = var9.bind(var4)(var8, var7);
            var6[2] = var7;
            var1['children'] = var6;
            var6 = var3.bind(var4)(var2, var1);
            var3 = _closure1_slot5;
            var2 = _closure1_slot6;
            var1 = {};
            var8 = _closure1_slot4;
            var7 = _closure1_slot1;
            var9 = _closure1_slot2;
            var5 = 6;
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