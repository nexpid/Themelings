// app/modules/share/native/ShareEmbed.tsx
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
    var14 = 0;
    var7 = var6[var14];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var10 = 1;
    var4 = var6[var10];
    var4 = var5.bind(var1)(var4);
    var7 = var4.ActivityIndicator;
    var _closure1_slot4 = var7;
    var7 = var4.Image;
    var _closure1_slot5 = var7;
    var4 = var4.View;
    var _closure1_slot6 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot7 = var7;
    var7 = var4.jsxs;
    var _closure1_slot8 = var7;
    var4 = var4.Fragment;
    var _closure1_slot9 = var4;
    var4 = 3;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'flexDirection': 'row', 'height': 80, 'backgroundColor': null, 'borderColor': null, 'borderWidth': 1, 'borderRadius': null, 'overflow': 'hidden'};
    var13 = 80;
    var11 = 4;
    var15 = var6[var11];
    var15 = var12.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.BG_BASE_PRIMARY;
    var9['backgroundColor'] = var15;
    var15 = var6[var11];
    var15 = var12.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.BORDER_STRONG;
    var9['borderColor'] = var15;
    var15 = var6[var11];
    var15 = var12.bind(var1)(var15);
    var15 = var15.radii;
    var15 = var15.sm;
    var9['borderRadius'] = var15;
    var4['container'] = var9;
    var9 = {};
    var9['borderWidth'] = var14;
    var4['containerRevamp'] = var9;
    var9 = {};
    var9['width'] = var13;
    var4['thumbnail'] = var9;
    var9 = {'flex': 1, 'flexDirection': 'column', 'justifyContent': 'center', 'paddingLeft': 12, 'paddingRight': 24};
    var4['contentContainer'] = var9;
    var9 = {'flexDirection': 'row', 'alignItems': 'center', 'marginBottom': 3};
    var4['authorView'] = var9;
    var9 = {'height': 16, 'width': 16, 'borderRadius': null, 'marginRight': 4};
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.radii;
    var11 = var11.sm;
    var9['borderRadius'] = var11;
    var4['authorThumbnail'] = var9;
    var9 = {};
    var9['flex'] = var10;
    var4['loadingSpinner'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/share/native/ShareEmbed.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ShareEmbed(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var1 = var3.embed;
            var _closure2_slot0 = var1;
            var7 = var3.isLoadingEmbed;
            var _closure2_slot1 = var7;
            var12 = var3.isRevamp;
            var3 = _closure1_slot10;
            var5 = undefined;
            var14 = var3.bind(var5)();
            var _closure2_slot2 = var14;
            var8 = _closure1_slot3;
            var6 = var8.useMemo;
            var4 = new Array(1);
            var4[0] = var1;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot0;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0002_ip = 72; continue _fun0002 }
 13:
                    var2 = _closure2_slot0;
                    var5 = var2.thumbnail;
                    var6 = var1 == var5;
                    var2 = undefined;
                    if(var6) { _fun0002_ip = 37; continue _fun0002 }
 32:
                    var2 = var5.url;
 37:
                    if(!(var1 == var2)) { _fun0002_ip = 68; continue _fun0002 }
 41:
                    var4 = _closure2_slot0;
                    var4 = var4.image;
                    var5 = var1 == var4;
                    var3 = undefined;
                    if(var5) { _fun0002_ip = 65; continue _fun0002 }
 60:
                    var3 = var4.url;
 65:
                    var2 = var3;
 68:
                    if(!(var1 == var2)) { _fun0002_ip = 76; continue _fun0002 }
 72:
                    var1 = undefined;
                    return var1;
 76:
                    var1 = {};
                    var1['uri'] = var2;
                    return var1;
                }
            };
            var20 = var6.bind(var8)(var3, var4);
            var6 = var8.useMemo;
            var4 = new Array(2);
            var4[0] = var7;
            var4[1] = var14;
            var3 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var2 = _closure2_slot1;
                    var1 = null;
                    if(!var2) { _fun0003_ip = 90; continue _fun0003 }
 12:
                    var5 = _closure1_slot7;
                    var4 = _closure1_slot4;
                    var3 = {};
                    var6 = _closure2_slot2;
                    var6 = var6.loadingSpinner;
                    var3['style'] = var6;
                    var7 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var2 = 4;
                    var6 = var6[var2];
                    var2 = undefined;
                    var6 = var7.bind(var2)(var6);
                    var6 = var6.unsafe_rawColors;
                    var6 = var6.BRAND_500;
                    var3['color'] = var6;
                    var6 = 'large';
                    var3['size'] = var6;
                    var1 = var5.bind(var2)(var4, var3);
 90:
                    return var1;
                }
            };
            var6 = var6.bind(var8)(var3, var4);
            var9 = var8.useMemo;
            var4 = new Array(2);
            var4[0] = var1;
            var4[1] = var14;
            var3 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var2 = _closure2_slot0;
                    var1 = null;
                    var2 = var1 == var2;
                    var5 = undefined;
                    var10 = undefined;
                    if(var2) { _fun0004_ip = 30; continue _fun0004 }
 20:
                    var2 = _closure2_slot0;
                    var10 = var2.author;
 30:
                    if(!(var1 != var10)) { _fun0004_ip = 218; continue _fun0004 }
 37:
                    var13 = var10.proxy_icon_url;
                    if(!(var1 == var13)) { _fun0004_ip = 53; continue _fun0004 }
 47:
                    var13 = var10.icon_url;
 53:
                    var4 = _closure1_slot8;
                    var3 = _closure1_slot6;
                    var2 = {};
                    var6 = _closure2_slot2;
                    var6 = var6.authorView;
                    var2['style'] = var6;
                    var8 = var1 != var13;
                    if(!var8) { _fun0004_ip = 136; continue _fun0004 }
 87:
                    var11 = _closure1_slot7;
                    var9 = _closure1_slot5;
                    var6 = {};
                    var12 = _closure2_slot2;
                    var12 = var12.authorThumbnail;
                    var6['style'] = var12;
                    var12 = {};
                    var12['uri'] = var13;
                    var6['source'] = var12;
                    var12 = 'cover';
                    var6['resizeMode'] = var12;
                    var8 = var11.bind(var5)(var9, var6);
 136:
                    var6 = new Array(2);
                    var6[0] = var8;
                    var9 = _closure1_slot7;
                    var8 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var7 = 5;
                    var7 = var11[var7];
                    var7 = var8.bind(var5)(var7);
                    var8 = var7.Text;
                    var7 = {'variant': 'text-xs/semibold', 'color': 'header-primary', 'ellipsizeMode': 'tail', 'lineClamp': 1};
                    var10 = var10.name;
                    var7['children'] = var10;
                    var7 = var9.bind(var5)(var8, var7);
                    var6[1] = var7;
                    var2['children'] = var6;
                    var2 = var4.bind(var5)(var3, var2);
                    return var2;
 218:
                    return var1;
                }
            };
            var18 = var9.bind(var8)(var3, var4);
            var9 = var8.useMemo;
            var4 = new Array(1);
            var4[0] = var1;
            var3 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var3 = _closure2_slot0;
                    var1 = null;
                    var3 = var1 == var3;
                    var5 = undefined;
                    var6 = undefined;
                    if(var3) { _fun0005_ip = 29; continue _fun0005 }
 20:
                    var2 = _closure2_slot0;
                    var6 = var2.title;
 29:
                    var2 = var1 != var6;
                    var1 = null;
                    if(!var2) { _fun0005_ip = 110; continue _fun0005 }
 38:
                    var4 = _closure1_slot7;
                    var3 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 5;
                    var2 = var7[var2];
                    var2 = var3.bind(var5)(var2);
                    var3 = var2.Text;
                    var2 = {'style': null, 'variant': 'text-xs/semibold', 'color': 'header-primary', 'lineClamp': 1, 'ellipsizeMode': 'tail'};
                    var7 = {};
                    var8 = 1;
                    var7['marginVertical'] = var8;
                    var2['style'] = var7;
                    var2['children'] = var6;
                    var1 = var4.bind(var5)(var3, var2);
 110:
                    return var1;
                }
            };
            var17 = var9.bind(var8)(var3, var4);
            var _closure2_slot3 = var17;
            var9 = var8.useMemo;
            var4 = new Array(2);
            var4[0] = var1;
            var4[1] = var17;
            var3 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var2 = _closure2_slot0;
                    var3 = null;
                    var2 = var3 == var2;
                    var5 = undefined;
                    var6 = undefined;
                    if(var2) { _fun0006_ip = 29; continue _fun0006 }
 20:
                    var2 = _closure2_slot0;
                    var6 = var2.description;
 29:
                    var1 = _closure2_slot3;
                    var2 = var3 == var1;
                    var1 = null;
                    if(!var2) { _fun0006_ip = 119; continue _fun0006 }
 42:
                    var2 = var3 != var6;
                    var1 = null;
                    if(!var2) { _fun0006_ip = 119; continue _fun0006 }
 51:
                    var4 = _closure1_slot7;
                    var3 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 5;
                    var2 = var7[var2];
                    var2 = var3.bind(var5)(var2);
                    var3 = var2.Text;
                    var2 = {'style': null, 'variant': 'text-xs/medium', 'color': 'header-secondary', 'lineClamp': 1, 'ellipsizeMode': 'tail'};
                    var7 = {};
                    var8 = 1;
                    var7['marginVertical'] = var8;
                    var2['style'] = var7;
                    var2['children'] = var6;
                    var1 = var4.bind(var5)(var3, var2);
 119:
                    return var1;
                }
            };
            var16 = var9.bind(var8)(var3, var4);
            var4 = var8.useMemo;
            var3 = new Array(1);
            var3[0] = var1;
            var2 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var3 = _closure2_slot0;
                    var1 = null;
                    var3 = var1 == var3;
                    var5 = undefined;
                    var6 = undefined;
                    if(var3) { _fun0007_ip = 29; continue _fun0007 }
 20:
                    var2 = _closure2_slot0;
                    var6 = var2.url;
 29:
                    var2 = var1 != var6;
                    var1 = null;
                    if(!var2) { _fun0007_ip = 110; continue _fun0007 }
 38:
                    var4 = _closure1_slot7;
                    var3 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 5;
                    var2 = var7[var2];
                    var2 = var3.bind(var5)(var2);
                    var3 = var2.Text;
                    var2 = {'style': null, 'variant': 'text-xs/medium', 'color': 'text-link', 'lineClamp': 1, 'ellipsizeMode': 'tail'};
                    var7 = {};
                    var8 = 1;
                    var7['marginVertical'] = var8;
                    var2['style'] = var7;
                    var2['children'] = var6;
                    var1 = var4.bind(var5)(var3, var2);
 110:
                    return var1;
                }
            };
            var15 = var4.bind(var8)(var2, var3);
            var10 = null;
            if(!(var10 == var1)) { _fun0001_ip = 238; continue _fun0001 }
 230:
            var1 = null;
            if(!var7) { _fun0001_ip = 424; continue _fun0001 }
 238:
            var4 = _closure1_slot7;
            var3 = _closure1_slot6;
            var2 = {};
            var9 = var14.container;
            var8 = new Array(2);
            var8[0] = var9;
            var9 = undefined;
            if(!var12) { _fun0001_ip = 272; continue _fun0001 }
 266:
            var9 = var14.containerRevamp;
 272:
            var8[1] = var9;
            var2['style'] = var8;
            if(var7) { _fun0001_ip = 414; continue _fun0001 }
 286:
            var9 = _closure1_slot8;
            var8 = _closure1_slot9;
            var7 = {};
            var12 = var10 != var20;
            if(!var12) { _fun0001_ip = 342; continue _fun0001 }
 303:
            var19 = _closure1_slot7;
            var13 = _closure1_slot5;
            var10 = {};
            var21 = var14.thumbnail;
            var10['style'] = var21;
            var10['source'] = var20;
            var20 = 'cover';
            var10['resizeMode'] = var20;
            var12 = var19.bind(var5)(var13, var10);
 342:
            var10 = new Array(2);
            var10[0] = var12;
            var13 = _closure1_slot8;
            var12 = _closure1_slot6;
            var11 = {};
            var14 = var14.contentContainer;
            var11['style'] = var14;
            var14 = new Array(4);
            var14[0] = var18;
            var14[1] = var17;
            var14[2] = var16;
            var14[3] = var15;
            var11['children'] = var14;
            var11 = var13.bind(var5)(var12, var11);
            var10[1] = var11;
            var7['children'] = var10;
            var6 = var9.bind(var5)(var8, var7);
 414:
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 424:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();