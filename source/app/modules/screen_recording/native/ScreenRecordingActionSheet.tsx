// app/modules/screen_recording/native/ScreenRecordingActionSheet.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
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
    var4 = var4.useScreenRecordingStore;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot5 = var7;
    var4 = var4.jsxs;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'justifyContent': 'center', 'alignItems': 'center'};
    var10 = 5;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var9['gap'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var9['paddingVertical'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_8;
    var9['paddingHorizontal'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.radii;
    var12 = var12.xl;
    var9['borderRadius'] = var12;
    var4['container'] = var9;
    var9 = {};
    var12 = 'absolute';
    var9['position'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_8;
    var9['top'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_8;
    var9['right'] = var12;
    var4['closeButton'] = var9;
    var9 = {'display': 'flex', 'flexDirection': 'row'};
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_8;
    var9['gap'] = var10;
    var4['buttonContainer'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot7 = var4;
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/screen_recording/native/ScreenRecordingActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ScreenRecordingActionSheet() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = _closure1_slot7;
            var5 = undefined;
            var18 = var1.bind(var5)();
            var3 = _closure1_slot4;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.isUploading;
                return var1;
            };
            var15 = var3.bind(var5)(var1);
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.isCompleted;
                return var1;
            };
            var4 = var3.bind(var5)(var1);
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.currentStep;
                return var1;
            };
            var8 = var3.bind(var5)(var1);
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.currentSurveyConfig;
                return var1;
            };
            var6 = var3.bind(var5)(var1);
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.nextStep;
                return var1;
            };
            var1 = var3.bind(var5)(var1);
            var _closure2_slot0 = var1;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.completeActionSheet;
                return var1;
            };
            var1 = var3.bind(var5)(var1);
            var _closure2_slot1 = var1;
            var1 = null;
            var7 = var1 == var6;
            var3 = undefined;
            if(var7) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var6.steps;
case 2:
            if(!(var1 == var3)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = new Array(0);
case 4:
            var7 = var3.length;
            var7 = var7 > var8;
            var20 = null;
            if(!var7) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var20 = var3[var8];
case 6:
            var7 = var1 == var6;
            var3 = undefined;
            if(var7) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var7 = var6.useIsStepCompleted;
            var3 = var7.bind(var6)(var8);
case 8:
            var16 = var1 != var3;
            if(!var16) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var16 = var3;
case 10:
            var7 = var1 == var6;
            var3 = undefined;
            if(var7) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var3 = var6.completedTitle;
case 12:
            var7 = var1 != var3;
            var12 = 'Complete';
            if(!var7) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var12 = var3;
case 14:
            var7 = var1 == var6;
            var3 = undefined;
            if(var7) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var3 = var6.completedInstructions;
case 16:
            var6 = var1 != var3;
            var19 = 'Thanks for your feedback!';
            if(!var6) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var19 = var3;
case 18:
            if(!(var1 == var20)) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            if(!(var1 != var4)) { _fun0001_ip = 22; continue _fun0001 }
case 20:
            var8 = _closure1_slot6;
            var7 = _closure1_slot3;
            var3 = {};
            var6 = var18.container;
            var3['style'] = var6;
            var11 = _closure1_slot5;
            var13 = _closure1_slot0;
            var17 = _closure1_slot2;
            var10 = 6;
            var6 = var17[var10];
            var6 = var13.bind(var5)(var6);
            var9 = var6.Text;
            var6 = {};
            var23 = 'heading-xl/bold';
            var6['variant'] = var23;
            var6['children'] = var12;
            var9 = var11.bind(var5)(var9, var6);
            var6 = new Array(3);
            var6[0] = var9;
            var9 = var17[var10];
            var9 = var13.bind(var5)(var9);
            var12 = var9.Text;
            var9 = {};
            var21 = 'text-md/normal';
            var9['variant'] = var21;
            var9['children'] = var19;
            var9 = var11.bind(var5)(var12, var9);
            var6[1] = var9;
            var12 = 7;
            var9 = var17[var12];
            var9 = var13.bind(var5)(var9);
            var19 = var9.Button;
            var9 = {};
            var9['disabled'] = var15;
            var22 = 'Done';
            var9['text'] = var22;
            var9['loading'] = var15;
            var22 = function onPress() {
                var2 = _closure2_slot1;
                var1 = undefined;
                var2 = var2.bind(var1)();
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 8;
                var2 = var4[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.hideActionSheet;
                var2 = var2.bind(var3)();
                return var1;
            };
            var9['onPress'] = var22;
            var9 = var11.bind(var5)(var19, var9);
            var6[2] = var9;
            var3['children'] = var6;
            var3 = var8.bind(var5)(var7, var3);
            var6 = {};
            var9 = var18.container;
            var6['style'] = var9;
            var9 = 9;
            var9 = var17[var9];
            var9 = var13.bind(var5)(var9);
            var19 = var9.PressableOpacity;
            var9 = {};
            var22 = var18.closeButton;
            var9['style'] = var22;
            var22 = function onPress() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 8;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.hideActionSheet;
                var1 = var1.bind(var2)();
                return var1;
            };
            var9['onPress'] = var22;
            var22 = 'close';
            var9['accessibilityLabel'] = var22;
            var22 = 10;
            var22 = var17[var22];
            var22 = var13.bind(var5)(var22);
            var24 = var22.XSmallIcon;
            var22 = {'size': 'md', 'color': 'header-secondary'};
            var22 = var11.bind(var5)(var24, var22);
            var9['children'] = var22;
            var19 = var11.bind(var5)(var19, var9);
            var9 = new Array(4);
            var9[0] = var19;
            var19 = var17[var10];
            var19 = var13.bind(var5)(var19);
            var22 = var19.Text;
            var19 = {};
            var19['variant'] = var23;
            var23 = var20.title;
            var19['children'] = var23;
            var19 = var11.bind(var5)(var22, var19);
            var9[1] = var19;
            var10 = var17[var10];
            var10 = var13.bind(var5)(var10);
            var19 = var10.Text;
            var10 = {};
            var10['variant'] = var21;
            var22 = _closure1_slot1;
            var21 = 11;
            var21 = var17[var21];
            var22 = var22.bind(var5)(var21);
            var21 = var22.parse;
            var20 = var20.instructions;
            var20 = var21.bind(var22)(var20);
            var10['children'] = var20;
            var10 = var11.bind(var5)(var19, var10);
            var9[2] = var10;
            var10 = {};
            var18 = var18.buttonContainer;
            var10['style'] = var18;
            var12 = var17[var12];
            var12 = var13.bind(var5)(var12);
            var13 = var12.Button;
            var12 = {};
            var16 = !var16;
            if(var16) { _fun0001_ip = 23; continue _fun0001 }
case 24:
            var16 = var15;
case 23:
            var12['disabled'] = var16;
            var16 = 'Next';
            var12['text'] = var16;
            var12['loading'] = var15;
            var14 = function onPress() {
                var2 = _closure2_slot0;
                var1 = undefined;
                var2 = var2.bind(var1)();
                return var1;
            };
            var12['onPress'] = var14;
            var12 = var11.bind(var5)(var13, var12);
            var10['children'] = var12;
            var10 = var11.bind(var5)(var7, var10);
            var9[3] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            if(!var4) { _fun0001_ip = 25; continue _fun0001 }
case 26:
            var6 = var3;
case 25:
            var4 = _closure1_slot5;
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 12;
            var2 = var7[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.ActionSheet;
            var2 = {};
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
case 22:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();