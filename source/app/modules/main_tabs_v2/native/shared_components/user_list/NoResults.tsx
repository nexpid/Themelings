// app/modules/main_tabs_v2/native/shared_components/user_list/NoResults.tsx
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
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var10 = 1;
    var4 = var6[var10];
    var4 = var5.bind(var1)(var4);
    var7 = var4.View;
    var _closure1_slot3 = var7;
    var7 = var4.Image;
    var _closure1_slot4 = var7;
    var4 = var4.ScrollView;
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot6 = var7;
    var4 = var4.jsxs;
    var _closure1_slot7 = var4;
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
    var9 = {};
    var11 = 12;
    var9['marginBottom'] = var11;
    var4['image'] = var9;
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
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/shared_components/user_list/NoResults.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function NoResults(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var21 = var1.title;
            var18 = var1.subtitle;
            var12 = var1.image;
            var6 = var1.children;
            var10 = var1.containerStyle;
            var11 = var1.fullHeight;
            var4 = undefined;
            if(!(var11 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var11 = false;
case 2:
            var1 = _closure1_slot8;
            var19 = var1.bind(var4)();
            var3 = _closure1_slot7;
            var2 = _closure1_slot5;
            var1 = {};
            var7 = var19.headerContainer;
            var5 = new Array(1);
            var5[0] = var7;
            var1['style'] = var5;
            var5 = false;
            var1['alwaysBounceVertical'] = var5;
            var5 = var11;
            if(!var11) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var5 = var19.fullHeightScrollContent;
case 4:
            var1['contentContainerStyle'] = var5;
            var8 = _closure1_slot7;
            var7 = _closure1_slot3;
            var5 = {};
            var13 = var19.container;
            var9 = new Array(3);
            var9[0] = var13;
            if(!var11) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var11 = var19.fullHeightContentContainer;
case 6:
            var9[1] = var11;
            var9[2] = var10;
            var5['style'] = var9;
            var11 = _closure1_slot6;
            var10 = _closure1_slot4;
            var9 = {};
            var13 = var19.image;
            var9['style'] = var13;
            var14 = null;
            if(!(var14 == var12)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var16 = _closure1_slot1;
            var17 = _closure1_slot2;
            var13 = 4;
            var13 = var17[var13];
            var12 = var16.bind(var4)(var13);
case 8:
            var9['source'] = var12;
            var10 = var11.bind(var4)(var10, var9);
            var9 = new Array(2);
            var9[0] = var10;
            var12 = _closure1_slot7;
            var11 = _closure1_slot3;
            var10 = {};
            var13 = var19.textContainer;
            var10['style'] = var13;
            var17 = _closure1_slot6;
            var16 = _closure1_slot0;
            var13 = _closure1_slot2;
            var20 = 5;
            var13 = var13[var20];
            var13 = var16.bind(var4)(var13);
            var16 = var13.Text;
            var13 = {'variant': 'text-md/semibold', 'color': 'header-primary'};
            var22 = var19.text;
            var13['style'] = var22;
            var13['children'] = var21;
            var16 = var17.bind(var4)(var16, var13);
            var13 = new Array(2);
            var13[0] = var16;
            var16 = var14 != var18;
            var14 = null;
            if(!var16) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var17 = _closure1_slot6;
            var16 = _closure1_slot0;
            var15 = _closure1_slot2;
            var15 = var15[var20];
            var15 = var16.bind(var4)(var15);
            var16 = var15.Text;
            var15 = {'variant': 'text-xs/medium', 'color': 'interactive-normal'};
            var19 = var19.text;
            var15['style'] = var19;
            var15['children'] = var18;
            var14 = var17.bind(var4)(var16, var15);
case 10:
            var13[1] = var14;
            var10['children'] = var13;
            var10 = var12.bind(var4)(var11, var10);
            var9[1] = var10;
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