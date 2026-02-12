// app/modules/forums/native/ForumChannelEmptyState.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var7 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var9 = var4.View;
    var _closure1_slot3 = var9;
    var4 = var4.Image;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var9 = var4.jsx;
    var _closure1_slot5 = var9;
    var10 = var4.jsxs;
    var _closure1_slot6 = var10;
    var4 = var4.Fragment;
    var _closure1_slot7 = var4;
    var4 = 3;
    var4 = var6[var4];
    var11 = var5.bind(var1)(var4);
    var10 = var11.createStyles;
    var4 = {};
    var12 = {'flex': 1, 'alignSelf': 'stretch', 'justifyContent': 'center', 'alignItems': 'center'};
    var4['container'] = var12;
    var12 = {'height': 480, 'width': 480, 'borderRadius': 240, 'position': 'absolute', 'backgroundColor': null, 'opacity': 0.5, 'zIndex': 0};
    var13 = 4;
    var14 = var6[var13];
    var14 = var8.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_BASE_LOW;
    var12['backgroundColor'] = var14;
    var4['outerCircle'] = var12;
    var12 = {'height': 400, 'width': 400, 'borderRadius': 200, 'position': 'absolute', 'backgroundColor': null, 'zIndex': 1};
    var13 = var6[var13];
    var13 = var8.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BASE_LOW;
    var12['backgroundColor'] = var13;
    var4['innerCircle'] = var12;
    var12 = {'flex': 1, 'alignSelf': 'stretch', 'justifyContent': 'center', 'alignItems': 'center', 'zIndex': 2, 'position': 'relative'};
    var4['content'] = var12;
    var12 = {'width': 120, 'height': 80};
    var4['image'] = var12;
    var12 = {'textAlign': 'center', 'marginTop': 16, 'marginHorizontal': 20};
    var4['title'] = var12;
    var12 = {'textAlign': 'center', 'marginTop': 4, 'marginHorizontal': 20};
    var4['subtext'] = var12;
    var4 = var10.bind(var11)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var8 = var8.bind(var1)(var4);
    var4 = {};
    var4 = var9.bind(var1)(var8, var4);
    var _closure1_slot9 = var4;
    var4 = var7.memo;
    var2 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var5 = var1.loading;
            var4 = undefined;
            if(!(var5 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = true;
case 2:
            var11 = var1.topViewHeight;
            if(!(var11 === var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var11 = 0;
case 4:
            var22 = var1.channelName;
            var21 = var1.tagFilter;
            var1 = _closure1_slot8;
            var13 = var1.bind(var4)();
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var19 = 6;
            var1 = var3[var19];
            var2 = var2.bind(var4)(var1);
            var1 = var2.useThemeContext;
            var1 = var1.bind(var2)();
            var18 = var1.theme;
            var2 = _closure1_slot1;
            var1 = 7;
            var1 = var3[var1];
            var1 = var2.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var12 = var1.bottom;
            var10 = var1.top;
            var1 = var21.size;
            var9 = 0;
            var16 = var1 > var9;
            var3 = _closure1_slot5;
            var2 = _closure1_slot3;
            var1 = {};
            var8 = var13.container;
            var7 = new Array(2);
            var7[0] = var8;
            var8 = {};
            if(var5) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var10 = var12 + var10;
            var9 = var10 + var11;
case 6:
            var8['marginBottom'] = var9;
            var7[1] = var8;
            var1['style'] = var7;
            if(var5) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var8 = _closure1_slot6;
            var7 = _closure1_slot7;
            var5 = {};
            var10 = _closure1_slot3;
            var9 = {};
            var11 = var13.content;
            var9['style'] = var11;
            var14 = _closure1_slot5;
            var12 = _closure1_slot4;
            var11 = {};
            var17 = _closure1_slot0;
            var15 = _closure1_slot2;
            var15 = var15[var19];
            var17 = var17.bind(var4)(var15);
            var15 = var17.isThemeLight;
            var15 = var15.bind(var17)(var18);
            var18 = _closure1_slot1;
            var19 = _closure1_slot2;
            if(var15) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var15 = 9;
            var15 = var19[var15];
            var15 = var18.bind(var4)(var15);
            _fun0001_ip = 12; continue _fun0001;
case 10:
            var17 = 8;
            var17 = var19[var17];
            var15 = var18.bind(var4)(var17);
case 12:
            var11['source'] = var15;
            var15 = var13.image;
            var11['style'] = var15;
            var12 = var14.bind(var4)(var12, var11);
            var11 = new Array(3);
            var11[0] = var12;
            var15 = _closure1_slot5;
            var14 = _closure1_slot0;
            var12 = _closure1_slot2;
            var17 = 10;
            var12 = var12[var17];
            var12 = var14.bind(var4)(var12);
            var14 = var12.Text;
            var12 = {'style': null, 'accessibilityRole': 'header', 'variant': 'heading-lg/semibold', 'color': 'mobile-text-heading-primary'};
            var18 = var13.title;
            var12['style'] = var18;
            var20 = _closure1_slot0;
            var19 = _closure1_slot2;
            var23 = 11;
            var18 = var19[var23];
            var18 = var20.bind(var4)(var18);
            var25 = var18.intl;
            if(var16) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var24 = var25.string;
            var18 = var19[var23];
            var18 = var20.bind(var4)(var18);
            var18 = var18.t;
            var18 = var18.PwTMG0;
            var18 = var24.bind(var25)(var18);
            _fun0001_ip = 15; continue _fun0001;
case 13:
            var24 = var25.formatToPlainString;
            var19 = var19[var23];
            var19 = var20.bind(var4)(var19);
            var19 = var19.t;
            var20 = var19.lvPci0;
            var19 = {};
            var26 = var21.size;
            var19['numTags'] = var26;
            var18 = var24.bind(var25)(var20, var19);
case 15:
            var12['children'] = var18;
            var12 = var15.bind(var4)(var14, var12);
            var11[1] = var12;
            var15 = _closure1_slot5;
            var14 = _closure1_slot0;
            var12 = _closure1_slot2;
            var12 = var12[var17];
            var12 = var14.bind(var4)(var12);
            var14 = var12.Text;
            var12 = {'style': null, 'variant': 'text-sm/medium', 'color': 'text-default'};
            var17 = var13.subtext;
            var12['style'] = var17;
            var18 = _closure1_slot0;
            var17 = _closure1_slot2;
            var19 = var17[var23];
            var19 = var18.bind(var4)(var19);
            var20 = var19.intl;
            var19 = var20.formatToPlainString;
            var17 = var17[var23];
            var17 = var18.bind(var4)(var17);
            var17 = var17.t;
            if(var16) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var18 = var17.YtsXFD;
            var16 = {};
            var16['channelName'] = var22;
            var16 = var19.bind(var20)(var18, var16);
            _fun0001_ip = 18; continue _fun0001;
case 16:
            var18 = var17.AAeye1;
            var17 = {};
            var21 = var21.size;
            var17['numTags'] = var21;
            var16 = var19.bind(var20)(var18, var17);
case 18:
            var12['children'] = var16;
            var12 = var15.bind(var4)(var14, var12);
            var11[2] = var12;
            var9['children'] = var11;
            var10 = var8.bind(var4)(var10, var9);
            var9 = new Array(3);
            var9[0] = var10;
            var12 = _closure1_slot5;
            var11 = _closure1_slot3;
            var10 = {};
            var14 = var13.innerCircle;
            var10['style'] = var14;
            var10 = var12.bind(var4)(var11, var10);
            var9[1] = var10;
            var10 = {};
            var13 = var13.outerCircle;
            var10['style'] = var13;
            var10 = var12.bind(var4)(var11, var10);
            var9[2] = var10;
            var5['children'] = var9;
            var5 = var8.bind(var4)(var7, var5);
            _fun0001_ip = 19; continue _fun0001;
case 8:
            var5 = _closure1_slot9;
case 19:
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/forums/native/ForumChannelEmptyState.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();