// app/modules/pomelo/native/components/PomeloModalStepContainer.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var13 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var13;
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
    var8 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.View;
    var _closure1_slot3 = var7;
    var4 = var4.ScrollView;
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
    var10 = var5.bind(var1)(var4);
    var9 = var10.createStyles;
    var7 = {};
    var4 = {'flex': 1, 'flexDirection': 'column'};
    var12 = 4;
    var11 = var6[var12];
    var11 = var13.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_PRIMARY;
    var4['backgroundColor'] = var11;
    var7['container'] = var4;
    var4 = {'width': '100%', 'flexDirection': 'column', 'marginTop': 16, 'marginBottom': 16};
    var7['actionContainer'] = var4;
    var4 = {'textAlign': 'center', 'marginBottom': 12};
    var7['infoText'] = var4;
    var4 = {'paddingHorizontal': 16, 'alignItems': 'center', 'flexGrow': 1};
    var7['scrollContainer'] = var4;
    var11 = {};
    var4 = 8;
    var11['paddingTop'] = var4;
    var7['space8'] = var11;
    var11 = {'shadowColor': null, 'shadowOpacity': 1, 'shadowOffset': null, 'shadowRadius': 12, 'elevation': 4};
    var12 = var6[var12];
    var12 = var13.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_SECONDARY;
    var11['shadowColor'] = var12;
    var12 = {'height': 4294967272, 'width': 0};
    var11['shadowOffset'] = var12;
    var7['shadow'] = var11;
    var7 = var9.bind(var10)(var7);
    var _closure1_slot7 = var7;
    var7 = var8.forwardRef;
    var2 = function(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var11 = var1.action;
            var7 = var1.secondaryAction;
            var5 = var1.infoText;
            var8 = var1.absoluteBottom;
            var4 = undefined;
            if(!(var8 === var4)) { _fun0001_ip = 34; continue _fun0001 }
 32:
            var8 = false;
 34:
            var16 = var1.hasNavbar;
            if(!(var16 === var4)) { _fun0001_ip = 46; continue _fun0001 }
 44:
            var16 = true;
 46:
            var9 = var1.fixActionButtonsToBottom;
            if(!(var9 === var4)) { _fun0001_ip = 58; continue _fun0001 }
 56:
            var9 = false;
 58:
            var14 = var1.children;
            var1 = _closure1_slot7;
            var12 = var1.bind(var4)();
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 5;
            var1 = var3[var1];
            var1 = var2.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var10 = var1.insets;
            var6 = null;
            var1 = var6 != var5;
            var17 = null;
            if(!var1) { _fun0001_ip = 180; continue _fun0001 }
 115:
            var3 = _closure1_slot5;
            var2 = _closure1_slot0;
            var15 = _closure1_slot2;
            var1 = 6;
            var1 = var15[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.Text;
            var1 = {'style': null, 'variant': 'text-xs/medium', 'color': 'text-normal'};
            var15 = var12.infoText;
            var1['style'] = var15;
            var1['children'] = var5;
            var17 = var3.bind(var4)(var2, var1);
 180:
            var3 = _closure1_slot6;
            var2 = _closure1_slot3;
            var1 = {};
            var15 = var12.actionContainer;
            var5 = new Array(3);
            var5[0] = var15;
            var18 = {};
            var19 = 0;
            if(!var9) { _fun0001_ip = 214; continue _fun0001 }
 211:
            var19 = 16;
 214:
            var18['paddingHorizontal'] = var19;
            var5[1] = var18;
            var18 = null;
            if(!var9) { _fun0001_ip = 233; continue _fun0001 }
 227:
            var18 = var12.shadow;
 233:
            var5[2] = var18;
            var1['style'] = var5;
            var5 = new Array(4);
            var5[0] = var17;
            var5[1] = var11;
            var11 = var6 != var7;
            if(!var11) { _fun0001_ip = 286; continue _fun0001 }
 260:
            var19 = _closure1_slot5;
            var18 = _closure1_slot3;
            var17 = {};
            var20 = var12.space8;
            var17['style'] = var20;
            var11 = var19.bind(var4)(var18, var17);
 286:
            var5[2] = var11;
            var5[3] = var7;
            var1['children'] = var5;
            var7 = var3.bind(var4)(var2, var1);
            var3 = _closure1_slot6;
            var2 = _closure1_slot3;
            var1 = {};
            var5 = {};
            var21 = var12.container;
            var22 = var5;
            var11 = copyDataProperties(var22, var21);
            var11 = var10.top;
            var15 = 0;
            if(!var16) { _fun0001_ip = 364; continue _fun0001 }
 338:
            var17 = _closure1_slot0;
            var18 = _closure1_slot2;
            var16 = 7;
            var16 = var18[var16];
            var16 = var17.bind(var4)(var16);
            var15 = var16.NAV_BAR_HEIGHT;
 364:
            var15 = var11 + var15;
            var11 = 'paddingTop';
            var5[var11] = var15;
            var11 = var10.bottom;
            var10 = 'paddingBottom';
            var5[var10] = var11;
            var1['style'] = var5;
            var11 = _closure1_slot6;
            var10 = _closure1_slot4;
            var5 = {'contentContainerStyle': null, 'showsVerticalScrollIndicator': false, 'keyboardShouldPersistTaps': 'handled'};
            var12 = var12.scrollContainer;
            var5['contentContainerStyle'] = var12;
            var12 = arg2;
            var5['ref'] = var12;
            var12 = new Array(3);
            var12[0] = var14;
            if(!var8) { _fun0001_ip = 476; continue _fun0001 }
 447:
            var15 = _closure1_slot5;
            var14 = _closure1_slot3;
            var13 = {};
            var16 = {};
            var17 = 1;
            var16['flex'] = var17;
            var13['style'] = var16;
            var8 = var15.bind(var4)(var14, var13);
 476:
            var12[1] = var8;
            var8 = true;
            var13 = null;
            if(!(var8 !== var9)) { _fun0001_ip = 491; continue _fun0001 }
 488:
            var13 = var7;
 491:
            var12[2] = var13;
            var5['children'] = var12;
            var10 = var11.bind(var4)(var10, var5);
            var5 = new Array(2);
            var5[0] = var10;
            var6 = null;
            if(!(var8 === var9)) { _fun0001_ip = 522; continue _fun0001 }
 519:
            var6 = var7;
 522:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var7.bind(var8)(var2);
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/pomelo/native/components/PomeloModalStepContainer.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();