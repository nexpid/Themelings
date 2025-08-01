// app/modules/safety_flows/native/SafetyFlowTaskScreen.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
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
    var7 = var4.jsx;
    var _closure1_slot3 = var7;
    var4 = var4.jsxs;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 'center';
    var9['textAlign'] = var10;
    var11 = 3;
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_8;
    var9['marginBottom'] = var11;
    var4['title'] = var9;
    var9 = {};
    var9['textAlign'] = var10;
    var4['disclaimer'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot5 = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/safety_flows/native/SafetyFlowTaskScreen.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function SafetyFlowTaskScreen(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var14 = var1.title;
            var17 = var1.action;
            var16 = var1.onAction;
            var6 = var1.footer;
            var9 = var1.children;
            var15 = var1.submitting;
            var13 = var1.withLogout;
            var4 = undefined;
            if(!(var13 === var4)) { _fun0001_ip = 52; continue _fun0001 }
 50:
            var13 = true;
 52:
            var1 = _closure1_slot5;
            var18 = var1.bind(var4)();
            var3 = _closure1_slot4;
            var10 = _closure1_slot0;
            var19 = _closure1_slot2;
            var1 = 4;
            var1 = var19[var1];
            var1 = var10.bind(var4)(var1);
            var2 = var1.ModalScreen;
            var1 = {};
            var5 = 5;
            var5 = var19[var5];
            var5 = var10.bind(var4)(var5);
            var7 = var5.ModalContent;
            var5 = {};
            var11 = _closure1_slot3;
            var8 = 6;
            var8 = var19[var8];
            var8 = var10.bind(var4)(var8);
            var10 = var8.Text;
            var8 = {'accessibilityRole': 'header', 'variant': 'heading-xl/bold', 'color': 'header-primary'};
            var18 = var18.title;
            var8['style'] = var18;
            var8['children'] = var14;
            var10 = var11.bind(var4)(var10, var8);
            var8 = new Array(2);
            var8[0] = var10;
            var8[1] = var9;
            var5['children'] = var8;
            var7 = var3.bind(var4)(var7, var5);
            var5 = new Array(2);
            var5[0] = var7;
            var11 = null;
            if(!(var11 == var6)) { _fun0001_ip = 363; continue _fun0001 }
 208:
            var9 = _closure1_slot4;
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var7 = 7;
            var7 = var10[var7];
            var7 = var8.bind(var4)(var7);
            var8 = var7.ModalFooter;
            var7 = {};
            if(!var13) { _fun0001_ip = 275; continue _fun0001 }
 243:
            var18 = _closure1_slot3;
            var14 = _closure1_slot1;
            var19 = _closure1_slot2;
            var10 = 8;
            var10 = var19[var10];
            var14 = var14.bind(var4)(var10);
            var10 = {};
            var13 = var18.bind(var4)(var14, var10);
 275:
            var10 = new Array(2);
            var10[0] = var13;
            var11 = var11 != var17;
            if(!var11) { _fun0001_ip = 349; continue _fun0001 }
 290:
            var14 = _closure1_slot3;
            var13 = _closure1_slot0;
            var18 = _closure1_slot2;
            var12 = 9;
            var12 = var18[var12];
            var12 = var13.bind(var4)(var12);
            var13 = var12.ModalActionButton;
            var12 = {};
            var18 = 'primary';
            var12['variant'] = var18;
            var12['text'] = var17;
            var12['onPress'] = var16;
            var12['loading'] = var15;
            var11 = var14.bind(var4)(var13, var12);
 349:
            var10[1] = var11;
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
 363:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();