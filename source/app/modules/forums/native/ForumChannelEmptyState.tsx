// app/modules/forums/native/ForumChannelEmptyState.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var12 = native3;
    var3 = native6;
    var6 = native7;
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
    var4 = native4;
    var1 = undefined;
    var7 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.View;
    var _closure1_slot3 = var8;
    var4 = var4.Image;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot5 = var8;
    var8 = var4.jsxs;
    var _closure1_slot6 = var8;
    var4 = var4.Fragment;
    var _closure1_slot7 = var4;
    var4 = 3;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {'flex': 1, 'alignSelf': 'stretch', 'justifyContent': 'center', 'alignItems': 'center'};
    var4['container'] = var10;
    var10 = {'height': 480, 'width': 480, 'borderRadius': 240, 'position': 'absolute', 'backgroundColor': null, 'opacity': 0.5, 'zIndex': 0};
    var11 = 4;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_PRIMARY;
    var10['backgroundColor'] = var13;
    var4['outerCircle'] = var10;
    var10 = {'height': 400, 'width': 400, 'borderRadius': 200, 'position': 'absolute', 'backgroundColor': null, 'zIndex': 1};
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_PRIMARY;
    var10['backgroundColor'] = var11;
    var4['innerCircle'] = var10;
    var10 = {'flex': 1, 'alignSelf': 'stretch', 'justifyContent': 'center', 'alignItems': 'center', 'zIndex': 2, 'position': 'relative'};
    var4['content'] = var10;
    var10 = {'width': 120, 'height': 80};
    var4['image'] = var10;
    var10 = {'textAlign': 'center', 'marginTop': 16, 'marginHorizontal': 20};
    var4['title'] = var10;
    var10 = {'textAlign': 'center', 'marginTop': 4, 'marginHorizontal': 20};
    var4['subtext'] = var10;
    var10 = {'width': 32, 'height': 32};
    var4['spinner'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot8 = var4;
    var4 = var7.memo;
    var2 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var5 = var1.loading;
            var4 = undefined;
            if(!(var5 === var4)) { _fun0001_ip = 17; continue _fun0001 }
 15:
            var5 = true;
 17:
            var11 = var1.topViewHeight;
            if(!(var11 === var4)) { _fun0001_ip = 29; continue _fun0001 }
 27:
            var11 = 0;
 29:
            var22 = var1.channelName;
            var21 = var1.tagFilter;
            var1 = _closure1_slot8;
            var13 = var1.bind(var4)();
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var19 = 5;
            var1 = var3[var19];
            var2 = var2.bind(var4)(var1);
            var1 = var2.useThemeContext;
            var1 = var1.bind(var2)();
            var18 = var1.theme;
            var2 = _closure1_slot1;
            var1 = 6;
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
            if(var5) { _fun0001_ip = 165; continue _fun0001 }
 157:
            var10 = var12 + var10;
            var9 = var10 + var11;
 165:
            var8['marginBottom'] = var9;
            var7[1] = var8;
            var1['style'] = var7;
            if(var5) { _fun0001_ip = 727; continue _fun0001 }
 183:
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
            if(var15) { _fun0001_ip = 271; continue _fun0001 }
 257:
            var15 = 9;
            var15 = var19[var15];
            var15 = var18.bind(var4)(var15);
            _fun0001_ip = 283; continue _fun0001;
 271:
            var17 = 8;
            var17 = var19[var17];
            var15 = var18.bind(var4)(var17);
 283:
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
            var12 = {'style': null, 'accessibilityRole': 'header', 'variant': 'heading-lg/semibold', 'color': 'header-primary'};
            var18 = var13.title;
            var12['style'] = var18;
            var20 = _closure1_slot0;
            var19 = _closure1_slot2;
            var23 = 11;
            var18 = var19[var23];
            var18 = var20.bind(var4)(var18);
            var25 = var18.intl;
            if(var16) { _fun0001_ip = 427; continue _fun0001 }
 393:
            var24 = var25.string;
            var18 = var19[var23];
            var18 = var20.bind(var4)(var18);
            var18 = var18.t;
            var18 = var18.PwTMGx;
            var18 = var24.bind(var25)(var18);
            _fun0001_ip = 472; continue _fun0001;
 427:
            var24 = var25.formatToPlainString;
            var19 = var19[var23];
            var19 = var20.bind(var4)(var19);
            var19 = var19.t;
            var20 = var19.lvPci4;
            var19 = {};
            var26 = var21.size;
            var19['numTags'] = var26;
            var18 = var24.bind(var25)(var20, var19);
 472:
            var12['children'] = var18;
            var12 = var15.bind(var4)(var14, var12);
            var11[1] = var12;
            var15 = _closure1_slot5;
            var14 = _closure1_slot0;
            var12 = _closure1_slot2;
            var12 = var12[var17];
            var12 = var14.bind(var4)(var12);
            var14 = var12.Text;
            var12 = {'style': null, 'variant': 'text-sm/medium', 'color': 'header-secondary'};
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
            if(var16) { _fun0001_ip = 605; continue _fun0001 }
 582:
            var18 = var17.YtsXFB;
            var16 = {};
            var16['channelName'] = var22;
            var16 = var19.bind(var20)(var18, var16);
            _fun0001_ip = 631; continue _fun0001;
 605:
            var18 = var17.AAeye3;
            var17 = {};
            var21 = var21.size;
            var17['numTags'] = var21;
            var16 = var19.bind(var20)(var18, var17);
 631:
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
            _fun0001_ip = 759; continue _fun0001;
 727:
            var8 = _closure1_slot5;
            var7 = _closure1_slot1;
            var9 = _closure1_slot2;
            var6 = 7;
            var6 = var9[var6];
            var7 = var7.bind(var4)(var6);
            var6 = {};
            var5 = var8.bind(var4)(var7, var6);
 759:
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