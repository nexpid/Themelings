// app/modules/main_tabs_v2/native/shared_components/user_list/NoResults.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
    var10 = 1;
    var4 = var6[var10];
    var4 = var5.bind(var1)(var4);
    var7 = var4.View;
    var _closure1_slot2 = var7;
    var4 = var4.ScrollView;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot4 = var7;
    var4 = var4.jsxs;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var11 = 16;
    var9['paddingHorizontal'] = var11;
    var4['headerContainer'] = var9;
    var9 = {'flex': 1, 'alignItems': 'center', 'justifyContent': 'center', 'paddingHorizontal': 16, 'paddingBottom': 16, 'paddingTop': 32};
    var4['container'] = var9;
    var9 = {'justifyContent': 'center', 'alignItems': 'center'};
    var4['textContainer'] = var9;
    var9 = {'textAlign': 'center', 'marginTop': 4};
    var4['text'] = var9;
    var9 = {'paddingBottom': 0, 'paddingTop': 0};
    var4['fullHeightContentContainer'] = var9;
    var9 = {};
    var9['flexGrow'] = var10;
    var4['fullHeightScrollContent'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/shared_components/user_list/NoResults.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function NoResults(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var16 = var1.title;
            var17 = var1.subtitle;
            var6 = var1.children;
            var10 = var1.containerStyle;
            var11 = var1.fullHeight;
            var4 = undefined;
            if(!(var11 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var11 = false;
case 2:
            var1 = _closure1_slot6;
            var18 = var1.bind(var4)();
            var3 = _closure1_slot5;
            var2 = _closure1_slot3;
            var1 = {};
            var7 = var18.headerContainer;
            var5 = new Array(1);
            var5[0] = var7;
            var1['style'] = var5;
            var5 = false;
            var1['alwaysBounceVertical'] = var5;
            var5 = var11;
            if(!var11) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var5 = var18.fullHeightScrollContent;
case 4:
            var1['contentContainerStyle'] = var5;
            var8 = _closure1_slot4;
            var7 = _closure1_slot2;
            var5 = {};
            var12 = var18.container;
            var9 = new Array(3);
            var9[0] = var12;
            if(!var11) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var11 = var18.fullHeightContentContainer;
case 6:
            var9[1] = var11;
            var9[2] = var10;
            var5['style'] = var9;
            var11 = _closure1_slot5;
            var10 = _closure1_slot2;
            var9 = {};
            var12 = var18.textContainer;
            var9['style'] = var12;
            var15 = _closure1_slot4;
            var13 = _closure1_slot0;
            var12 = _closure1_slot1;
            var19 = 4;
            var12 = var12[var19];
            var12 = var13.bind(var4)(var12);
            var13 = var12.Text;
            var12 = {'variant': 'text-md/semibold', 'color': 'mobile-text-heading-primary'};
            var20 = var18.text;
            var12['style'] = var20;
            var12['children'] = var16;
            var13 = var15.bind(var4)(var13, var12);
            var12 = new Array(2);
            var12[0] = var13;
            var13 = null;
            var15 = var13 != var17;
            if(!var15) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var16 = _closure1_slot4;
            var15 = _closure1_slot0;
            var14 = _closure1_slot1;
            var14 = var14[var19];
            var14 = var15.bind(var4)(var14);
            var15 = var14.Text;
            var14 = {'variant': 'text-xs/medium', 'color': 'interactive-text-default'};
            var18 = var18.text;
            var14['style'] = var18;
            var14['children'] = var17;
            var13 = var16.bind(var4)(var15, var14);
case 8:
            var12[1] = var13;
            var9['children'] = var12;
            var9 = var11.bind(var4)(var10, var9);
            var5['children'] = var9;
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