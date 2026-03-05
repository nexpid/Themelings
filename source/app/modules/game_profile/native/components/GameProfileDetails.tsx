// app/modules/game_profile/native/components/GameProfileDetails.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var7 = metroImportAll;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var7;
    var _closure1_slot3 = var6;
    var1 = function GameProfileWebsiteButton(arg1) {
        var1 = arg1;
        var5 = var1.icon;
        var9 = var1.action;
        var _closure2_slot0 = var9;
        var7 = var1.title;
        var10 = var1.trackAction;
        var _closure2_slot1 = var10;
        var8 = var1.url;
        var _closure2_slot2 = var8;
        var6 = _closure1_slot4;
        var4 = var6.useCallback;
        var3 = new Array(3);
        var3[0] = var10;
        var3[1] = var9;
        var3[2] = var8;
        var2 = function() {
            var3 = _closure1_slot1;
            var2 = _closure1_slot3;
            var1 = 5;
            var2 = var2[var1];
            var1 = undefined;
            var5 = var3.bind(var1)(var2);
            var4 = var5.openURL;
            var3 = _closure2_slot2;
            var3 = var4.bind(var5)(var3);
            var3 = _closure2_slot1;
            var2 = _closure2_slot0;
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var6 = var4.bind(var6)(var2, var3);
        var4 = _closure1_slot7;
        var3 = _closure1_slot6;
        var2 = {};
        var8 = 'button';
        var2['accessibilityRole'] = var8;
        var2['accessibilityLabel'] = var7;
        var2['onPress'] = var6;
        var7 = _closure1_slot1;
        var6 = _closure1_slot3;
        var1 = 4;
        var6 = var6[var1];
        var1 = undefined;
        var6 = var7.bind(var1)(var6);
        var6 = var6.spacing;
        var6 = var6.PX_4;
        var2['hitSlop'] = var6;
        var2['children'] = var5;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var _closure1_slot10 = var1;
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
    var _closure1_slot4 = var4;
    var12 = 1;
    var4 = var6[var12];
    var4 = var5.bind(var1)(var4);
    var7 = var4.View;
    var _closure1_slot5 = var7;
    var4 = var4.Pressable;
    var _closure1_slot6 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot7 = var7;
    var4 = var4.jsxs;
    var _closure1_slot8 = var4;
    var4 = 3;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 4;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_8;
    var9['gap'] = var13;
    var4['container'] = var9;
    var9 = {};
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_8;
    var9['paddingHorizontal'] = var13;
    var4['headerText'] = var9;
    var9 = {};
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.lg;
    var9['borderRadius'] = var13;
    var9['borderWidth'] = var12;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BORDER_SUBTLE;
    var9['borderColor'] = var13;
    var13 = 'hidden';
    var9['overflow'] = var13;
    var4['detailsContainer'] = var9;
    var9 = {'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'space-between'};
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_12;
    var9['padding'] = var13;
    var4['detailsRow'] = var9;
    var9 = {'flexDirection': 'column', 'flexShrink': 1};
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_32;
    var9['paddingLeft'] = var13;
    var4['detailsRowValue'] = var9;
    var9 = {};
    var9['borderBottomWidth'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BORDER_SUBTLE;
    var9['borderBottomColor'] = var12;
    var4['detailsRowBottomBorder'] = var9;
    var9 = {'flexDirection': 'row', 'alignItems': 'center'};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_12;
    var9['gap'] = var12;
    var4['platformsContainer'] = var9;
    var9 = {'flexDirection': 'row', 'alignItems': 'center'};
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_12;
    var9['gap'] = var10;
    var4['linksContainer'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot9 = var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/game_profile/native/components/GameProfileDetails.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GameProfileDetails(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var6 = var1.supplementalGameData;
            var _closure2_slot0 = var6;
            var1 = var1.trackAction;
            var _closure2_slot1 = var1;
            var2 = _closure1_slot9;
            var5 = undefined;
            var10 = var2.bind(var5)();
            var _closure2_slot2 = var10;
            var4 = _closure1_slot4;
            var3 = var4.useMemo;
            var8 = var10.linksContainer;
            var2 = new Array(4);
            var2[0] = var8;
            var8 = var10.platformsContainer;
            var2[1] = var8;
            var2[2] = var6;
            var2[3] = var1;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure2_slot0;
                    var2 = null;
                    if(!(var2 != var1)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var1 = new Array(0);
                    var3 = _closure2_slot0;
                    var3 = var2 == var3;
                    var7 = undefined;
                    var5 = undefined;
                    if(var3) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var3 = _closure2_slot0;
                    var6 = var3.genres;
                    var4 = var6.map;
                    var9 = _closure1_slot0;
                    var11 = _closure1_slot3;
                    var3 = 6;
                    var3 = var11[var3];
                    var3 = var9.bind(var7)(var3);
                    var3 = var3.getGenreText;
                    var6 = var4.bind(var6)(var3);
                    var4 = var6.join;
                    var3 = ', ';
                    var5 = var4.bind(var6)(var3);
case 4:
                    var3 = var2 != var5;
                    if(!var3) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var4 = '';
                    var3 = var4 !== var5;
case 6:
                    if(!var3) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var4 = var1.push;
                    var3 = {};
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot3;
                    var6 = 7;
                    var9 = var13[var6];
                    var9 = var12.bind(var7)(var9);
                    var11 = var9.intl;
                    var9 = var11.string;
                    var6 = var13[var6];
                    var6 = var12.bind(var7)(var6);
                    var6 = var6.t;
                    var6 = var6.evpQfI;
                    var6 = var9.bind(var11)(var6);
                    var3['label'] = var6;
                    var3['value'] = var5;
                    var3 = var4.bind(var1)(var3);
case 8:
                    var3 = _closure2_slot0;
                    var3 = var2 == var3;
                    var5 = undefined;
                    if(var3) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                    var3 = _closure2_slot0;
                    var6 = var3.publishers;
                    var3 = var2 == var6;
                    var5 = undefined;
                    if(var3) { _fun0002_ip = 10; continue _fun0002 }
case 12:
                    var4 = var6.join;
                    var3 = ', ';
                    var5 = var4.bind(var6)(var3);
case 10:
                    var3 = var2 != var5;
                    if(!var3) { _fun0002_ip = 13; continue _fun0002 }
case 14:
                    var4 = '';
                    var3 = var4 !== var5;
case 13:
                    if(!var3) { _fun0002_ip = 15; continue _fun0002 }
case 16:
                    var4 = var1.push;
                    var3 = {};
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot3;
                    var6 = 7;
                    var9 = var13[var6];
                    var9 = var12.bind(var7)(var9);
                    var11 = var9.intl;
                    var9 = var11.string;
                    var6 = var13[var6];
                    var6 = var12.bind(var7)(var6);
                    var6 = var6.t;
                    var6 = var6.aHZcsg;
                    var6 = var9.bind(var11)(var6);
                    var3['label'] = var6;
                    var3['value'] = var5;
                    var3 = var4.bind(var1)(var3);
case 15:
                    var3 = _closure2_slot0;
                    var3 = var2 == var3;
                    var5 = undefined;
                    if(var3) { _fun0002_ip = 17; continue _fun0002 }
case 18:
                    var3 = _closure2_slot0;
                    var6 = var3.developers;
                    var3 = var2 == var6;
                    var5 = undefined;
                    if(var3) { _fun0002_ip = 17; continue _fun0002 }
case 19:
                    var4 = var6.join;
                    var3 = ', ';
                    var5 = var4.bind(var6)(var3);
case 17:
                    var3 = var2 != var5;
                    if(!var3) { _fun0002_ip = 20; continue _fun0002 }
case 21:
                    var4 = '';
                    var3 = var4 !== var5;
case 20:
                    if(!var3) { _fun0002_ip = 22; continue _fun0002 }
case 23:
                    var4 = var1.push;
                    var3 = {};
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot3;
                    var6 = 7;
                    var9 = var13[var6];
                    var9 = var12.bind(var7)(var9);
                    var11 = var9.intl;
                    var9 = var11.string;
                    var6 = var13[var6];
                    var6 = var12.bind(var7)(var6);
                    var6 = var6.t;
                    var6 = var6.hThZDf;
                    var6 = var9.bind(var11)(var6);
                    var3['label'] = var6;
                    var3['value'] = var5;
                    var3 = var4.bind(var1)(var3);
case 22:
                    var3 = _closure2_slot0;
                    var3 = var2 == var3;
                    var12 = undefined;
                    if(var3) { _fun0002_ip = 24; continue _fun0002 }
case 25:
                    var3 = _closure2_slot0;
                    var12 = var3.firstReleaseDate;
case 24:
                    var3 = var2 != var12;
                    if(!var3) { _fun0002_ip = 26; continue _fun0002 }
case 27:
                    var4 = '';
                    var3 = var4 !== var12;
case 26:
                    if(!var3) { _fun0002_ip = 28; continue _fun0002 }
case 29:
                    var4 = var1.push;
                    var3 = {};
                    var14 = _closure1_slot0;
                    var9 = _closure1_slot3;
                    var6 = 7;
                    var11 = var9[var6];
                    var11 = var14.bind(var7)(var11);
                    var13 = var11.intl;
                    var11 = var13.string;
                    var6 = var9[var6];
                    var6 = var14.bind(var7)(var6);
                    var6 = var6.t;
                    var6 = var6.qpwaNY;
                    var6 = var11.bind(var13)(var6);
                    var3['label'] = var6;
                    var6 = _closure1_slot2;
                    var5 = 8;
                    var5 = var9[var5];
                    var11 = var6.bind(var7)(var5);
                    var9 = var11.dateFormat;
                    var5 = global;
                    var5 = var5.Date;
                    var6 = var5.prototype;
                    var6 = Object.create(var6, {constructor: {value: var5}});
                    var17 = var6;
                    var16 = var12;
                    var5 = new var17[var5](var16, var15);
                    var6 = var5 instanceof Object ? var5 : var6;
                    var5 = 'LL';
                    var5 = var9.bind(var11)(var6, var5);
                    var3['value'] = var5;
                    var3 = var4.bind(var1)(var3);
case 28:
                    var3 = _closure2_slot0;
                    var3 = var2 == var3;
                    var13 = undefined;
                    if(var3) { _fun0002_ip = 30; continue _fun0002 }
case 31:
                    var3 = _closure2_slot0;
                    var13 = var3.platforms;
case 30:
                    var3 = var2 != var13;
                    if(!var3) { _fun0002_ip = 32; continue _fun0002 }
case 33:
                    var5 = var13.length;
                    var4 = 0;
                    var3 = var5 > var4;
case 32:
                    if(!var3) { _fun0002_ip = 34; continue _fun0002 }
case 35:
                    var4 = var1.push;
                    var3 = {};
                    var12 = _closure1_slot0;
                    var14 = _closure1_slot3;
                    var6 = 7;
                    var9 = var14[var6];
                    var9 = var12.bind(var7)(var9);
                    var11 = var9.intl;
                    var9 = var11.string;
                    var6 = var14[var6];
                    var6 = var12.bind(var7)(var6);
                    var6 = var6.t;
                    var6 = var6.PNqxNe;
                    var6 = var9.bind(var11)(var6);
                    var3['label'] = var6;
                    var9 = _closure1_slot7;
                    var6 = _closure1_slot5;
                    var5 = {};
                    var11 = _closure2_slot2;
                    var11 = var11.platformsContainer;
                    var5['style'] = var11;
                    var12 = var13.map;
                    var11 = function(arg1) {
                        var5 = arg1;
                        var4 = _closure1_slot7;
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot3;
                        var1 = 9;
                        var1 = var3[var1];
                        var3 = undefined;
                        var1 = var2.bind(var3)(var1);
                        var2 = var1.GameUpdatePlatformIcon;
                        var1 = {};
                        var1['platform'] = var5;
                        var6 = 'md';
                        var1['size'] = var6;
                        var1 = var4.bind(var3)(var2, var1, var5);
                        return var1;
                    };
                    var11 = var12.bind(var13)(var11);
                    var5['children'] = var11;
                    var5 = var9.bind(var7)(var6, var5);
                    var3['value'] = var5;
                    var3 = var4.bind(var1)(var3);
case 34:
                    var3 = _closure2_slot0;
                    var3 = var2 == var3;
                    var11 = undefined;
                    if(var3) { _fun0002_ip = 36; continue _fun0002 }
case 37:
                    var3 = _closure2_slot0;
                    var11 = var3.websites;
case 36:
                    var2 = var2 != var11;
                    if(!var2) { _fun0002_ip = 38; continue _fun0002 }
case 39:
                    var4 = var11.length;
                    var3 = 0;
                    var2 = var4 > var3;
case 38:
                    if(!var2) { _fun0002_ip = 40; continue _fun0002 }
case 41:
                    var3 = var1.push;
                    var2 = {};
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot3;
                    var4 = 7;
                    var5 = var13[var4];
                    var5 = var12.bind(var7)(var5);
                    var6 = var5.intl;
                    var5 = var6.string;
                    var4 = var13[var4];
                    var4 = var12.bind(var7)(var4);
                    var4 = var4.t;
                    var4 = var4.Oj3o1/;
                    var4 = var5.bind(var6)(var4);
                    var2['label'] = var4;
                    var6 = _closure1_slot7;
                    var5 = _closure1_slot5;
                    var4 = {};
                    var10 = _closure2_slot2;
                    var10 = var10.linksContainer;
                    var4['style'] = var10;
                    var10 = var11.map;
                    var12 = _closure1_slot1;
                    var9 = 10;
                    var9 = var13[var9];
                    var9 = var12.bind(var7)(var9);
                    var11 = var10.bind(var11)(var9);
                    var10 = var11.filter;
                    var9 = function(arg1) {
                        var2 = null;
                        var1 = arg1;
                        var1 = var2 != var1;
                        return var1;
                    };
                    var10 = var10.bind(var11)(var9);
                    var9 = var10.map;
                    var8 = function(arg1) {
                        var2 = arg1;
                        var1 = var2.title;
                        var7 = var2.icon;
                        var6 = var2.action;
                        var5 = var2.url;
                        var4 = _closure1_slot7;
                        var3 = _closure1_slot10;
                        var2 = {};
                        var2['icon'] = var7;
                        var2['action'] = var6;
                        var2['title'] = var1;
                        var2['url'] = var5;
                        var1 = _closure2_slot1;
                        var2['trackAction'] = var1;
                        var1 = undefined;
                        var1 = var4.bind(var1)(var3, var2, var5);
                        return var1;
                    };
                    var8 = var9.bind(var10)(var8);
                    var4['children'] = var8;
                    var4 = var6.bind(var7)(var5, var4);
                    var2['value'] = var4;
                    var2 = var3.bind(var1)(var2);
case 40:
                    return var1;
case 2:
                    var1 = new Array(0);
                    return var1;
                }
            };
            var11 = var3.bind(var4)(var1, var2);
            var _closure2_slot3 = var11;
            var3 = var11.length;
            var2 = 0;
            var1 = null;
            if(!(var2 !== var3)) { _fun0001_ip = 42; continue _fun0001 }
case 43:
            var4 = _closure1_slot8;
            var3 = _closure1_slot5;
            var2 = {};
            var6 = var10.container;
            var2['style'] = var6;
            var12 = _closure1_slot7;
            var16 = _closure1_slot0;
            var17 = _closure1_slot3;
            var6 = 11;
            var6 = var17[var6];
            var6 = var16.bind(var5)(var6);
            var8 = var6.Text;
            var6 = {'variant': 'heading-sm/semibold', 'color': 'mobile-text-heading-primary'};
            var13 = var10.headerText;
            var6['style'] = var13;
            var13 = 7;
            var14 = var17[var13];
            var14 = var16.bind(var5)(var14);
            var15 = var14.intl;
            var14 = var15.string;
            var13 = var17[var13];
            var13 = var16.bind(var5)(var13);
            var13 = var13.t;
            var13 = var13.DXYfjO;
            var13 = var14.bind(var15)(var13);
            var6['children'] = var13;
            var8 = var12.bind(var5)(var8, var6);
            var6 = new Array(2);
            var6[0] = var8;
            var8 = _closure1_slot7;
            var7 = {};
            var10 = var10.detailsContainer;
            var7['style'] = var10;
            var10 = var11.map;
            var9 = function(arg1, arg2) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = arg1;
                    var5 = _closure1_slot8;
                    var4 = _closure1_slot5;
                    var3 = {};
                    var2 = _closure2_slot2;
                    var6 = var2.detailsRow;
                    var2 = new Array(2);
                    var2[0] = var6;
                    var6 = _closure2_slot3;
                    var6 = var6.length;
                    var10 = 1;
                    var7 = var6 > var10;
                    var6 = null;
                    if(!var7) { _fun0003_ip = 44; continue _fun0003 }
case 45:
                    var7 = _closure2_slot3;
                    var7 = var7.length;
                    var10 = var7 - var10;
                    var7 = arg2;
                    var7 = var7 < var10;
                    var6 = null;
                    if(!var7) { _fun0003_ip = 44; continue _fun0003 }
case 46:
                    var7 = _closure2_slot2;
                    var6 = var7.detailsRowBottomBorder;
case 44:
                    var2[1] = var6;
                    var3['style'] = var2;
                    var9 = _closure1_slot7;
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var12 = 11;
                    var6 = var2[var12];
                    var2 = undefined;
                    var6 = var7.bind(var2)(var6);
                    var7 = var6.Text;
                    var6 = {'variant': 'heading-sm/medium', 'color': 'text-subtle', 'lineClamp': 1};
                    var10 = var1.label;
                    var6['children'] = var10;
                    var7 = var9.bind(var2)(var7, var6);
                    var6 = new Array(2);
                    var6[0] = var7;
                    var7 = var1.value;
                    var9 = 'string';
                    var7 = typeof var7;
                    if(!(var9 !== var7)) { _fun0003_ip = 47; continue _fun0003 }
case 48:
                    var7 = var1.value;
                    _fun0003_ip = 49; continue _fun0003;
case 47:
                    var10 = _closure1_slot7;
                    var9 = _closure1_slot0;
                    var8 = _closure1_slot3;
                    var8 = var8[var12];
                    var8 = var9.bind(var2)(var8);
                    var9 = var8.Text;
                    var8 = {'variant': 'text-md/medium', 'color': 'text-default', 'lineClamp': 1};
                    var11 = _closure2_slot2;
                    var11 = var11.detailsRowValue;
                    var8['style'] = var11;
                    var11 = var1.value;
                    var8['children'] = var11;
                    var7 = var10.bind(var2)(var9, var8);
case 49:
                    var6[1] = var7;
                    var3['children'] = var6;
                    var1 = var1.label;
                    var1 = var5.bind(var2)(var4, var3, var1);
                    return var1;
                }
            };
            var9 = var10.bind(var11)(var9);
            var7['children'] = var9;
            var7 = var8.bind(var5)(var3, var7);
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 42:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();