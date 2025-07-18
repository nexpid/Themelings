// app/design/components/Modal/native/StepModal.native.tsx
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
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot6 = var7;
    var4 = var4.jsxs;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = '100%';
    var9['height'] = var10;
    var4['container'] = var9;
    var9 = {'flexDirection': 'column', 'alignItems': 'center', 'justifyContent': 'center', 'top': 0, 'left': 0, 'right': 0};
    var10 = 5;
    var10 = var6[var10];
    var10 = var5.bind(var1)(var10);
    var10 = var10.NAV_BAR_HEIGHT;
    var9['height'] = var10;
    var4['stepContainer'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot8 = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'design/components/Modal/native/StepModal.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function StepModal(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arg1;
            var13 = var4.steps;
            var _closure2_slot0 = var13;
            var7 = var4.onWillFocus;
            var _closure2_slot1 = var7;
            var12 = null;
            var3 = Object.create(var12);
            var10 = 0;
            var3['steps'] = var10;
            var3['onWillFocus'] = var10;
            var21 = {};
            var20 = var4;
            var19 = var3;
            var15 = copyDataProperties(var21, var20, var19);
            var2 = _closure1_slot8;
            var4 = undefined;
            var8 = var2.bind(var4)();
            var3 = _closure1_slot1;
            var14 = _closure1_slot2;
            var2 = 6;
            var2 = var14[var2];
            var2 = var3.bind(var4)(var2);
            var16 = var2.bind(var4)();
            var6 = _closure1_slot4;
            var2 = var6.useState;
            var9 = var2.bind(var6)(var10);
            var3 = _closure1_slot3;
            var2 = 2;
            var3 = var3.bind(var4)(var9, var2);
            var11 = var3[var10];
            var2 = 1;
            var2 = var3[var2];
            var _closure2_slot2 = var2;
            var3 = var6.useCallback;
            var2 = new Array(2);
            var2[0] = var7;
            var2[1] = var13;
            var1 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = arg1;
                    var4 = var3.route;
                    var6 = _closure2_slot2;
                    var1 = _closure2_slot0;
                    var5 = null;
                    var8 = var5 == var1;
                    var1 = undefined;
                    var7 = undefined;
                    if(var8) { _fun0002_ip = 53; continue _fun0002 }
 33:
                    var9 = _closure2_slot0;
                    var8 = var9.indexOf;
                    var4 = var4.name;
                    var7 = var8.bind(var9)(var4);
 53:
                    var8 = var5 != var7;
                    var4 = 0;
                    if(!var8) { _fun0002_ip = 65; continue _fun0002 }
 62:
                    var4 = var7;
 65:
                    var4 = var6.bind(var1)(var4);
                    var4 = _closure2_slot1;
                    if(!(var5 != var4)) { _fun0002_ip = 87; continue _fun0002 }
 78:
                    var2 = _closure2_slot1;
                    var2 = var2.bind(var1)(var3);
 87:
                    return var1;
                }
            };
            var17 = var3.bind(var6)(var1, var2);
            var3 = _closure1_slot7;
            var2 = _closure1_slot5;
            var1 = {};
            var6 = var8.container;
            var1['style'] = var6;
            var7 = _closure1_slot6;
            var9 = _closure1_slot0;
            var5 = 7;
            var5 = var14[var5];
            var5 = var9.bind(var4)(var5);
            var6 = var5.Modal;
            var5 = {};
            var21 = var5;
            var20 = var15;
            var15 = copyDataProperties(var21, var20);
            var15 = 'onWillFocus';
            var5[var15] = var17;
            var17 = {};
            var15 = 5;
            var15 = var14[var15];
            var15 = var9.bind(var4)(var15);
            var18 = var15.NAV_BAR_HEIGHT;
            var15 = var16.top;
            var15 = var18 + var15;
            var17['height'] = var15;
            var15 = 'headerStyle';
            var5[var15] = var17;
            var17 = true;
            var15 = 'hideTitle';
            var5[var15] = var17;
            var6 = var7.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var6 = {};
            var15 = var8.stepContainer;
            var8 = new Array(2);
            var8[0] = var15;
            var15 = {};
            var16 = var16.top;
            var15['marginTop'] = var16;
            var8[1] = var15;
            var6['style'] = var8;
            var8 = 'box-none';
            var6['pointerEvents'] = var8;
            var8 = 8;
            var8 = var14[var8];
            var8 = var9.bind(var4)(var8);
            var9 = var8.ModalStepIndicator;
            var8 = {};
            var8['currentStep'] = var11;
            var14 = var12 == var13;
            var11 = undefined;
            if(var14) { _fun0001_ip = 381; continue _fun0001 }
 376:
            var11 = var13.length;
 381:
            var12 = var12 != var11;
            var10 = 0;
            if(!var12) { _fun0001_ip = 393; continue _fun0001 }
 390:
            var10 = var11;
 393:
            var8['totalSteps'] = var10;
            var8 = var7.bind(var4)(var9, var8);
            var6['children'] = var8;
            var6 = var7.bind(var4)(var2, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['StepModal'] = var2;
    return var1;
})();