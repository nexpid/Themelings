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
    var4 = var4.ScrollView;
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
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/mfa/native/screens/MfaOptionScreen.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function MFAOptionScreen(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var25 = var1.headerText;
            var18 = var1.headerImage;
            var26 = var1.subtitle;
            var15 = var1.input;
            var13 = var1.submit;
            var16 = var1.screenProps;
            var2 = var1.mfaMethod;
            var23 = var1.error;
            var6 = var1.content;
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 2;
            var1 = var5[var1];
            var4 = undefined;
            var1 = var3.bind(var4)(var1);
            var8 = var1.bind(var4)();
            var1 = 3;
            var1 = var5[var1];
            var3 = var3.bind(var4)(var1);
            var1 = var3.useScreenStyles;
            var11 = var1.bind(var3)(var8);
            var1 = var16.mfaChallenge;
            var3 = var1.methods;
            var1 = 0;
            var3 = var3[var1];
            var19 = null;
            var5 = var19 == var3;
            var1 = undefined;
            if(var5) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var3.type;
case 2:
            var12 = var1 === var2;
            var3 = _closure1_slot5;
            var17 = _closure1_slot0;
            var10 = _closure1_slot2;
            var20 = 4;
            var1 = var10[var20];
            var1 = var17.bind(var4)(var1);
            var2 = var1.SafeAreaPaddingView;
            var1 = {};
            var5 = !var8;
            var1['bottom'] = var5;
            var5 = !var8;
            var1['top'] = var5;
            var5 = var11.contentContainer;
            var1['style'] = var5;
            var14 = 5;
            var5 = var10[var14];
            var5 = var17.bind(var4)(var5);
            var9 = var5.Stack;
            var5 = {};
            var10 = var10[var14];
            var10 = var17.bind(var4)(var10);
            var17 = var10.Stack;
            var10 = {};
            var21 = var11.mfaContainerHeader;
            var10['style'] = var21;
            var10['spacing'] = var20;
            var20 = var19 != var18;
            if(!var20) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var20 = var18;
case 4:
            var18 = new Array(4);
            var18[0] = var20;
            var22 = _closure1_slot4;
            var21 = _closure1_slot0;
            var20 = _closure1_slot2;
            var24 = 6;
            var20 = var20[var24];
            var20 = var21.bind(var4)(var20);
            var21 = var20.Text;
            var20 = {};
            var27 = 'heading-xl/extrabold';
            var20['variant'] = var27;
            var27 = var11.mfaContainerHeaderText;
            var20['style'] = var27;
            var20['children'] = var25;
            var20 = var22.bind(var4)(var21, var20);
            var18[1] = var20;
            var20 = var19 != var26;
            if(!var20) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var25 = _closure1_slot4;
            var22 = _closure1_slot0;
            var21 = _closure1_slot2;
            var21 = var21[var24];
            var21 = var22.bind(var4)(var21);
            var22 = var21.Text;
            var21 = {'variant': 'heading-sm/normal', 'color': 'text-default'};
            var21['children'] = var26;
            var20 = var25.bind(var4)(var22, var21);
case 6:
            var18[2] = var20;
            var19 = var19 != var23;
            if(!var19) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var22 = _closure1_slot4;
            var21 = _closure1_slot0;
            var20 = _closure1_slot2;
            var20 = var20[var24];
            var20 = var21.bind(var4)(var20);
            var21 = var20.Text;
            var20 = {'variant': 'text-sm/normal', 'color': 'text-feedback-critical'};
            var20['children'] = var23;
            var19 = var22.bind(var4)(var21, var20);
case 8:
            var18[3] = var19;
            var10['children'] = var18;
            var17 = var3.bind(var4)(var17, var10);
            var10 = new Array(2);
            var10[0] = var17;
            var10[1] = var15;
            var5['children'] = var10;
            var9 = var3.bind(var4)(var9, var5);
            var5 = new Array(3);
            var5[0] = var9;
            var5[1] = var6;
            var10 = _closure1_slot5;
            var9 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var14];
            var6 = var9.bind(var4)(var6);
            var9 = var6.Stack;
            var6 = {};
            var11 = var11.submit;
            var6['style'] = var11;
            var11 = new Array(2);
            var11[0] = var13;
            if(!var12) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var15 = _closure1_slot4;
            var14 = _closure1_slot1;
            var17 = _closure1_slot2;
            var13 = 7;
            var13 = var17[var13];
            var14 = var14.bind(var4)(var13);
            var13 = {};
            var13['props'] = var16;
            var12 = var15.bind(var4)(var14, var13);
case 10:
            var11[1] = var12;
            var6['children'] = var11;
            var6 = var10.bind(var4)(var9, var6);
            var5[2] = var6;
            var1['children'] = var5;
            var10 = var3.bind(var4)(var2, var1);
            var3 = _closure1_slot5;
            var2 = _closure1_slot6;
            var1 = {};
            var9 = _closure1_slot4;
            var6 = _closure1_slot1;
            var11 = _closure1_slot2;
            var5 = 8;
            var5 = var11[var5];
            var6 = var6.bind(var4)(var5);
            var5 = {};
            var11 = false;
            var5['backgroundImageCover'] = var11;
            var6 = var9.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var6 = var10;
            if(!var8) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var9 = _closure1_slot4;
            var8 = _closure1_slot3;
            var7 = {};
            var11 = 'handled';
            var7['keyboardShouldPersistTaps'] = var11;
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 12:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();