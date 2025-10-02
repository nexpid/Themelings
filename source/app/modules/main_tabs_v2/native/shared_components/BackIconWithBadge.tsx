// app/modules/main_tabs_v2/native/shared_components/BackIconWithBadge.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var7;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var4);
    var1 = 0;
    var5 = var7[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var8 = var4.bind(var1)(var5);
    var _closure1_slot3 = var8;
    var4 = 1;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var7[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var15 = var4.BADGE_SIZE;
    var _closure1_slot6 = var15;
    var14 = 4;
    var4 = var7[var14];
    var4 = var6.bind(var1)(var4);
    var5 = var4.jsx;
    var _closure1_slot7 = var5;
    var4 = var4.jsxs;
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var7[var4];
    var9 = var6.bind(var1)(var4);
    var5 = var9.createStyles;
    var4 = {};
    var10 = {'height': 40, 'width': 40, 'alignItems': 'center', 'justifyContent': 'center', 'borderRadius': null, 'position': 'relative'};
    var13 = 40;
    var11 = 6;
    var16 = var7[var11];
    var16 = var12.bind(var1)(var16);
    var16 = var16.radii;
    var16 = var16.lg;
    var10['borderRadius'] = var16;
    var4['closeButton'] = var10;
    var10 = {};
    var16 = var7[var11];
    var16 = var12.bind(var1)(var16);
    var16 = var16.spacing;
    var16 = var16.PX_24;
    var10['height'] = var16;
    var16 = var7[var11];
    var16 = var12.bind(var1)(var16);
    var16 = var16.spacing;
    var16 = var16.PX_24;
    var10['width'] = var16;
    var4['backIcon'] = var10;
    var10 = {'position': 'absolute', 'left': null, 'bottom': 0};
    var13 = var13 - var15;
    var13 = var13 - var14;
    var10['left'] = var13;
    var4['badge'] = var10;
    var10 = {'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center'};
    var11 = var7[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_4;
    var10['gap'] = var11;
    var4['backIconWithBadge'] = var10;
    var4 = var5.bind(var9)(var4);
    var _closure1_slot9 = var4;
    var5 = var8.memo;
    var4 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var6 = var2.includeNotificationsCount;
            var4 = undefined;
            if(!(var6 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = false;
case 2:
            var _closure2_slot0 = var4;
            var _closure2_slot1 = var4;
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var4;
            var2 = _closure1_slot9;
            var11 = var2.bind(var4)();
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 7;
            var2 = var7[var2];
            var8 = var3.bind(var4)(var2);
            var5 = var8.useStateFromStores;
            var2 = _closure1_slot5;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var2 = _closure1_slot5;
                var1 = var2.getTotalMentionCount;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = var5.bind(var8)(var3, var2);
            var5 = _closure1_slot1;
            var3 = 8;
            var3 = var7[var3];
            var3 = var5.bind(var4)(var3);
            var3 = var3.bind(var4)();
            var5 = var3.value;
            var3 = null;
            var8 = var3 != var2;
            var7 = 0;
            var3 = 0;
            if(!var8) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = var2;
case 4:
            var2 = 0;
            if(!var6) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var2 = var5;
case 6:
            var12 = var3 + var2;
            _closure2_slot0 = var12;
            var6 = var12 > var7;
            _closure2_slot1 = var6;
            var5 = _closure1_slot3;
            var8 = var5.useMemo;
            var3 = new Array(1);
            var3[0] = var12;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot0;
                    var1 = 10;
                    if(!(!(var2 < var1))) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var2 = _closure1_slot6;
                    var1 = 8;
                    var1 = var2 + var1;
                    _fun0002_ip = 10; continue _fun0002;
case 8:
                    var1 = _closure1_slot6;
case 10:
                    return var1;
                }
            };
            var13 = var8.bind(var5)(var2, var3);
            _closure2_slot2 = var13;
            var8 = var5.useMemo;
            var3 = new Array(1);
            var3[0] = var13;
            var2 = function() {
                var1 = {};
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var3 = 9;
                var4 = var4[var3];
                var3 = undefined;
                var3 = var5.bind(var3)(var4);
                var3 = var3.CutoutShape;
                var3 = var3.RoundedRect;
                var1['shape'] = var3;
                var3 = _closure1_slot6;
                var4 = 40;
                var6 = var4 - var3;
                var2 = 2;
                var7 = var3 / var2;
                var5 = 4;
                var6 = var6 - var5;
                var6 = var6 - var7;
                var6 = var6 - var2;
                var1['x'] = var6;
                var6 = var4 - var3;
                var4 = var3 / var2;
                var4 = var6 - var4;
                var4 = var4 - var2;
                var1['y'] = var4;
                var4 = _closure2_slot2;
                var4 = var4 + var5;
                var1['width'] = var4;
                var1['height'] = var3;
                var2 = var3 / var2;
                var1['cornerRadius'] = var2;
                return var1;
            };
            var8 = var8.bind(var5)(var2, var3);
            _closure2_slot3 = var8;
            var3 = var5.useMemo;
            var2 = new Array(2);
            var2[0] = var8;
            var2[1] = var6;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = _closure2_slot1;
                    if(var1) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                    var1 = new Array(0);
                    _fun0003_ip = 13; continue _fun0003;
case 11:
                    var3 = _closure2_slot3;
                    var2 = new Array(1);
                    var2[0] = var3;
                    var1 = var2;
case 13:
                    return var1;
                }
            };
            var14 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot8;
            var2 = _closure1_slot4;
            var1 = {};
            var5 = var11.closeButton;
            var1['style'] = var5;
            var5 = var14.length;
            if(!(!(var5 > var7))) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var8 = _closure1_slot7;
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var5 = 10;
            var5 = var9[var5];
            var5 = var7.bind(var4)(var5);
            var7 = var5.ArrowLargeLeftIcon;
            var5 = {'size': 'sm', 'style': null, 'color': 'interactive-active'};
            var9 = var11.backIcon;
            var5['style'] = var9;
            var7 = var8.bind(var4)(var7, var5);
            _fun0001_ip = 16; continue _fun0001;
case 14:
            var9 = _closure1_slot7;
            var8 = _closure1_slot1;
            var16 = _closure1_slot2;
            var5 = 9;
            var5 = var16[var5];
            var8 = var8.bind(var4)(var5);
            var5 = {};
            var5['cutouts'] = var14;
            var15 = _closure1_slot0;
            var14 = 10;
            var14 = var16[var14];
            var14 = var15.bind(var4)(var14);
            var15 = var14.ArrowLargeLeftIcon;
            var14 = {'size': 'sm', 'style': null, 'color': 'interactive-active'};
            var16 = var11.backIcon;
            var14['style'] = var16;
            var14 = var9.bind(var4)(var15, var14);
            var5['children'] = var14;
            var7 = var9.bind(var4)(var8, var5);
case 16:
            var5 = new Array(2);
            var5[0] = var7;
            if(!var6) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var9 = _closure1_slot7;
            var8 = _closure1_slot4;
            var7 = {};
            var11 = var11.badge;
            var7['style'] = var11;
            var11 = _closure1_slot1;
            var14 = _closure1_slot2;
            var10 = 11;
            var10 = var14[var10];
            var11 = var11.bind(var4)(var10);
            var10 = {};
            var14 = 99;
            var10['maxValue'] = var14;
            var10['value'] = var12;
            var12 = {};
            var12['minWidth'] = var13;
            var10['style'] = var12;
            var10 = var9.bind(var4)(var11, var10);
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 17:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = var5.bind(var8)(var4);
    var5 = 12;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/main_tabs_v2/native/shared_components/BackIconWithBadge.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var2 = function BackIconWithBadgeOnSide() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = _closure1_slot9;
            var4 = undefined;
            var5 = var1.bind(var4)();
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 7;
            var1 = var3[var1];
            var6 = var2.bind(var4)(var1);
            var3 = var6.useStateFromStores;
            var1 = _closure1_slot5;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var2 = _closure1_slot5;
                var1 = var2.getTotalMentionCount;
                var1 = var1.bind(var2)();
                return var1;
            };
            var1 = var3.bind(var6)(var2, var1);
            var6 = null;
            var3 = var6 != var1;
            var8 = 0;
            var2 = 0;
            if(!var3) { _fun0004_ip = 19; continue _fun0004 }
case 20:
            var2 = var1;
case 19:
            var3 = _closure1_slot1;
            var12 = _closure1_slot2;
            var1 = 8;
            var1 = var12[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var1 = var1.value;
            var10 = var2 + var1;
            var3 = _closure1_slot8;
            var2 = _closure1_slot4;
            var1 = {};
            var5 = var5.backIconWithBadge;
            var1['style'] = var5;
            var11 = _closure1_slot7;
            var9 = _closure1_slot0;
            var5 = 10;
            var5 = var12[var5];
            var5 = var9.bind(var4)(var5);
            var9 = var5.ArrowLargeLeftIcon;
            var5 = {'size': 'sm', 'color': 'white'};
            var9 = var11.bind(var4)(var9, var5);
            var5 = new Array(2);
            var5[0] = var9;
            var6 = null;
            if(!(var10 > var8)) { _fun0004_ip = 21; continue _fun0004 }
case 22:
            var9 = _closure1_slot7;
            var8 = _closure1_slot1;
            var11 = _closure1_slot2;
            var7 = 11;
            var7 = var11[var7];
            var8 = var8.bind(var4)(var7);
            var7 = {};
            var7['value'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 21:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['BackIconWithBadgeOnSide'] = var2;
    return var1;
})();