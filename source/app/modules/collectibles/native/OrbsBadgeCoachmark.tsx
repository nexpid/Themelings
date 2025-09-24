// app/modules/collectibles/native/OrbsBadgeCoachmark.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = function OrbsBadgeCoachmarkImg() {
        var1 = _closure1_slot7;
        var4 = undefined;
        var8 = var1.bind(var4)();
        var3 = _closure1_slot6;
        var2 = _closure1_slot4;
        var1 = {};
        var5 = var8.coachmarkImageContainer;
        var1['style'] = var5;
        var7 = _closure1_slot6;
        var6 = _closure1_slot5;
        var5 = {};
        var9 = {};
        var11 = _closure1_slot1;
        var12 = _closure1_slot2;
        var10 = 4;
        var10 = var12[var10];
        var10 = var11.bind(var4)(var10);
        var9['uri'] = var10;
        var5['source'] = var9;
        var8 = var8.coachmarkImage;
        var5['style'] = var8;
        var5 = var7.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot8 = var1;
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
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.View;
    var _closure1_slot4 = var7;
    var4 = var4.Image;
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'alignItems': 'center', 'justifyContent': 'center'};
    var4['coachmarkImageContainer'] = var9;
    var9 = {'width': 80, 'height': 80};
    var4['coachmarkImage'] = var9;
    var9 = {};
    var10 = -10;
    var9['marginBottom'] = var10;
    var4['coachmarkDescription'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot7 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/native/OrbsBadgeCoachmark.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function OrbsBadgeCoachmark(arg1) {
        var4 = arg1;
        var5 = var4.badgeRef;
        var1 = null;
        var3 = Object.create(var1);
        var2 = 0;
        var3['badgeRef'] = var2;
        var9 = {};
        var8 = var4;
        var7 = var3;
        var4 = copyDataProperties(var9, var8, var7);
        var6 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 7;
        var3 = var3[var2];
        var2 = undefined;
        var3 = var6.bind(var2)(var3);
        var2 = var3.useCoachmark;
        var2 = var2.bind(var3)(var5, var4);
        return var1;
    };
    var3['default'] = var4;
    var2 = function useOrbsBadgeCoachmark(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var2 = var2.disabled;
            var _closure2_slot0 = var2;
            var5 = _closure1_slot7;
            var4 = undefined;
            var6 = var5.bind(var4)();
            var _closure2_slot1 = var6;
            var5 = _closure1_slot3;
            var4 = var5.useMemo;
            var3 = new Array(2);
            var3[0] = var2;
            var6 = var6.coachmarkDescription;
            var3[1] = var6;
            var1 = function() {
                var1 = {};
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var4 = 5;
                var5 = var9[var4];
                var7 = undefined;
                var5 = var8.bind(var7)(var5);
                var6 = var5.intl;
                var5 = var6.string;
                var4 = var9[var4];
                var4 = var8.bind(var7)(var4);
                var4 = var4.t;
                var4 = var4.4ivm+P;
                var4 = var5.bind(var6)(var4);
                var1['title'] = var4;
                var6 = _closure1_slot6;
                var5 = _closure1_slot4;
                var4 = {};
                var8 = _closure2_slot1;
                var8 = var8.coachmarkDescription;
                var4['style'] = var8;
                var4 = var6.bind(var7)(var5, var4);
                var1['description'] = var4;
                var4 = 'bottom';
                var1['position'] = var4;
                var3 = _closure2_slot0;
                var3 = !var3;
                var1['visible'] = var3;
                var3 = function onDismiss() {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 6;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.getRootNavigationRef;
                        var4 = var2.bind(var3)();
                        var2 = null;
                        if(!(var2 != var4)) { _fun0002_ip = 74; continue _fun0002 }
 41:
                        var2 = var4.isReady;
                        var2 = var2.bind(var4)();
                        if(!var2) { _fun0002_ip = 74; continue _fun0002 }
 54:
                        var3 = var4.setParams;
                        var2 = {};
                        var2['showOrbsBadgeCoachmark'] = var1;
                        var2 = var3.bind(var4)(var2);
                        return var1;
 74:
                        var1 = false;
                        return var1;
                    }
                };
                var1['onDismiss'] = var3;
                var2 = function renderImgComponent() {
                    var4 = _closure1_slot6;
                    var3 = _closure1_slot8;
                    var2 = undefined;
                    var1 = {};
                    var1 = var4.bind(var2)(var3, var1);
                    return var1;
                };
                var1['renderImgComponent'] = var2;
                return var1;
            };
            var3 = var4.bind(var5)(var1, var3);
            var1 = null;
            if(var2) { _fun0001_ip = 83; continue _fun0001 }
 74:
            var2 = {};
            var2['props'] = var3;
            var1 = var2;
 83:
            return var1;
        }
    };
    var3['useOrbsBadgeCoachmark'] = var2;
    return var1;
})();