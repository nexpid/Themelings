// app/modules/in_app_notifications/native/NotificationProgress.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var1 = function useProgressAnimation(arg1) {
        var9 = arg1;
        var _closure2_slot0 = var9;
        var4 = _closure1_slot4;
        var2 = var4.useState;
        var1 = 0;
        var5 = var2.bind(var4)(var1);
        var4 = _closure1_slot3;
        var7 = undefined;
        var2 = 2;
        var2 = var4.bind(var7)(var5, var2);
        var8 = var2[var1];
        var _closure2_slot1 = var8;
        var1 = 1;
        var1 = var2[var1];
        var _closure2_slot2 = var1;
        var5 = _closure1_slot4;
        var4 = var5.useCallback;
        var2 = function(arg1) {
            var1 = arg1;
            var1 = var1.nativeEvent;
            var1 = var1.layout;
            var3 = var1.width;
            var2 = _closure2_slot2;
            var1 = undefined;
            var1 = var2.bind(var1)(var3);
            return var1;
        };
        var1 = new Array(0);
        var2 = var4.bind(var5)(var2, var1);
        var1 = {};
        var5 = _closure1_slot0;
        var10 = _closure1_slot2;
        var4 = 6;
        var4 = var10[var4];
        var5 = var5.bind(var7)(var4);
        var4 = var5.useAnimatedStyle;
        var3 = function n() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var1 = _closure2_slot0;
                var2 = 'number';
                var1 = typeof var1;
                if(!(var2 !== var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var2 = _closure2_slot0;
                var1 = var2.get;
                var2 = var1.bind(var2)();
                _fun0001_ip = 4; continue _fun0001;
case 2:
                var2 = _closure2_slot0;
case 4:
                var1 = 100;
                var2 = var2 / var1;
                var1 = {};
                var3 = {};
                var4 = _closure2_slot1;
                var2 = var4 * var2;
                var2 = var2 - var4;
                var3['translateX'] = var2;
                var2 = new Array(1);
                var2[0] = var3;
                var1['transform'] = var2;
                return var1;
            }
        };
        var7 = {};
        var7['percent'] = var9;
        var7['width'] = var8;
        var3['__closure'] = var7;
        var7 = 14879761869068.0;
        var3['__workletHash'] = var7;
        var6 = _closure1_slot8;
        var3['__initData'] = var6;
        var3 = var4.bind(var5)(var3);
        var1['animatedStyles'] = var3;
        var1['handleLayout'] = var2;
        return var1;
    };
    var _closure1_slot9 = var1;
    var1 = function Progress(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var2 = var1.percent;
            var11 = var1.hideProgress;
            var1 = _closure1_slot7;
            var4 = undefined;
            var8 = var1.bind(var4)();
            var1 = _closure1_slot9;
            var1 = var1.bind(var4)(var2);
            var9 = var1.animatedStyles;
            var6 = var1.handleLayout;
            var3 = _closure1_slot6;
            var2 = _closure1_slot5;
            var1 = {};
            var1['onLayout'] = var6;
            var7 = var8.progressContainerBottom;
            var6 = new Array(2);
            var6[0] = var7;
            var7 = {};
            var10 = 1;
            if(!var11) { _fun0002_ip = 5; continue _fun0002 }
case 6:
            var10 = 0;
case 5:
            var7['opacity'] = var10;
            var6[1] = var7;
            var1['style'] = var6;
            var7 = _closure1_slot6;
            var6 = _closure1_slot1;
            var10 = _closure1_slot2;
            var5 = 6;
            var5 = var10[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.View;
            var5 = {};
            var10 = var8.progress;
            var8 = new Array(2);
            var8[0] = var10;
            var8[1] = var9;
            var5['style'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot10 = var1;
    var1 = function RedesignProgress(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var2 = var1.percent;
            var9 = var1.hideProgress;
            var15 = var1.type;
            var1 = _closure1_slot7;
            var4 = undefined;
            var14 = var1.bind(var4)();
            var1 = _closure1_slot9;
            var1 = var1.bind(var4)(var2);
            var12 = var1.animatedStyles;
            var5 = var1.handleLayout;
            var3 = _closure1_slot6;
            var2 = _closure1_slot5;
            var1 = {};
            var1['onLayout'] = var5;
            var6 = var14.progressContainerTop;
            var5 = new Array(2);
            var5[0] = var6;
            var6 = {};
            var7 = 1;
            if(!var9) { _fun0003_ip = 7; continue _fun0003 }
case 8:
            var7 = 0;
case 7:
            var6['opacity'] = var7;
            var5[1] = var6;
            var1['style'] = var5;
            var7 = _closure1_slot6;
            var6 = _closure1_slot5;
            var5 = {};
            var9 = var14.progressTrack;
            var5['style'] = var9;
            var10 = _closure1_slot6;
            var9 = _closure1_slot1;
            var11 = _closure1_slot2;
            var8 = 6;
            var8 = var11[var8];
            var8 = var9.bind(var4)(var8);
            var9 = var8.View;
            var8 = {};
            var13 = var14.progressRedesign;
            var11 = new Array(3);
            var11[0] = var13;
            var13 = 'ALERT';
            if(!(var13 !== var15)) { _fun0003_ip = 9; continue _fun0003 }
case 10:
            var13 = var14.progressBarBrand;
            _fun0003_ip = 11; continue _fun0003;
case 9:
            var13 = var14.progressBarWarning;
case 11:
            var11[1] = var13;
            var11[2] = var12;
            var8['style'] = var11;
            var8 = var10.bind(var4)(var9, var8);
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot11 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var12.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
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
    var4 = var4.jsx;
    var _closure1_slot6 = var4;
    var10 = 4;
    var4 = var6[var10];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var7 = {};
    var4 = {};
    var11 = 5;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.xs;
    var4['borderRadius'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BRAND;
    var4['backgroundColor'] = var13;
    var4['height'] = var10;
    var7['progress'] = var4;
    var10 = {};
    var4 = var6[var11];
    var4 = var12.bind(var1)(var4);
    var4 = var4.radii;
    var4 = var4.xs;
    var10['borderRadius'] = var4;
    var4 = 8;
    var10['height'] = var4;
    var7['progressRedesign'] = var10;
    var10 = {};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BRAND;
    var10['backgroundColor'] = var13;
    var7['progressBarBrand'] = var10;
    var10 = {};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.unsafe_rawColors;
    var13 = var13.YELLOW_300;
    var10['backgroundColor'] = var13;
    var7['progressBarWarning'] = var10;
    var10 = {'width': '100%', 'borderRadius': null, 'backgroundColor': null, 'height': 8, 'overflow': 'hidden'};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.xs;
    var10['borderRadius'] = var13;
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_MOD_SUBTLE;
    var10['backgroundColor'] = var11;
    var7['progressTrack'] = var10;
    var10 = {'position': 'absolute', 'top': 4294967291, 'left': 16, 'right': 16};
    var7['progressContainerTop'] = var10;
    var10 = {'width': '100%', 'position': 'absolute', 'bottom': 4294967295};
    var7['progressContainerBottom'] = var10;
    var7 = var8.bind(var9)(var7);
    var _closure1_slot7 = var7;
    var7 = {};
    var8 = "function NotificationProgressTsx1(){const{percent,width}=this.__closure;const percentRemaining=(typeof percent==='number'?percent:percent.get())/100;return{transform:[{translateX:-width+width*percentRemaining}]};}";
    var7['code'] = var8;
    var _closure1_slot8 = var7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/in_app_notifications/native/NotificationProgress.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function NotificationProgress(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = arg1;
            var1 = var2.canExpand;
            var8 = var2.percent;
            var6 = var2.type;
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 7;
            var3 = var5[var3];
            var5 = undefined;
            var4 = var4.bind(var5)(var3);
            var3 = var4.useInAppNotificationContext;
            var3 = var3.bind(var4)();
            var7 = var3.autoDismissing;
            var3 = var3.isExpanded;
            if(var7) { _fun0004_ip = 12; continue _fun0004 }
case 13:
            var7 = var3;
case 12:
            var4 = _closure1_slot6;
            if(var1) { _fun0004_ip = 14; continue _fun0004 }
case 15:
            var3 = _closure1_slot10;
            var1 = {};
            var1['percent'] = var8;
            var1['hideProgress'] = var7;
            var1 = var4.bind(var5)(var3, var1);
            _fun0004_ip = 16; continue _fun0004;
case 14:
            var3 = _closure1_slot11;
            var2 = {};
            var2['percent'] = var8;
            var2['hideProgress'] = var7;
            var2['type'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 16:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();