// app/modules/collectibles/native/FramesEarlyAccessBadge.tsx
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
    var4 = var4.Pressable;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot6 = var7;
    var4 = var4.jsxs;
    var _closure1_slot7 = var4;
    var4 = 14;
    var7 = {'top': 14, 'bottom': 14, 'left': 14, 'right': 14};
    var _closure1_slot8 = var7;
    var7 = 4;
    var7 = var6[var7];
    var9 = var5.bind(var1)(var7);
    var8 = var9.createStyles;
    var7 = {};
    var10 = {'flexDirection': 'row', 'alignItems': 'center', 'borderRadius': null, 'paddingVertical': 2};
    var11 = 5;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.round;
    var10['borderRadius'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_8;
    var10['paddingHorizontal'] = var13;
    var7['pillBase'] = var10;
    var10 = {};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.CONTROL_OVERLAY_PRIMARY_BACKGROUND_DEFAULT;
    var10['backgroundColor'] = var13;
    var7['pillDark'] = var10;
    var10 = {};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BADGE_BACKGROUND_BRAND;
    var10['backgroundColor'] = var13;
    var7['pillLight'] = var10;
    var10 = {};
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_8;
    var10['marginLeft'] = var11;
    var11 = 'uppercase';
    var10['textTransform'] = var11;
    var7['text'] = var10;
    var7 = var8.bind(var9)(var7);
    var _closure1_slot9 = var7;
    var7 = function BadgeWithTooltip(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var16 = var1.tooltipPosition;
            var _closure2_slot0 = var16;
            var3 = _closure1_slot1;
            var8 = _closure1_slot2;
            var1 = 6;
            var1 = var8[var1];
            var4 = undefined;
            var1 = var3.bind(var4)(var1);
            var7 = var1.bind(var4)();
            var1 = _closure1_slot9;
            var10 = var1.bind(var4)();
            var12 = _closure1_slot4;
            var3 = var12.useRef;
            var1 = null;
            var14 = var3.bind(var12)(var1);
            var3 = var12.useState;
            var1 = false;
            var6 = var3.bind(var12)(var1);
            var3 = _closure1_slot3;
            var1 = 2;
            var3 = var3.bind(var4)(var6, var1);
            var1 = 0;
            var9 = var3[var1];
            var _closure2_slot1 = var9;
            var1 = 1;
            var1 = var3[var1];
            var _closure2_slot2 = var1;
            var3 = _closure1_slot0;
            var1 = 7;
            var6 = var8[var1];
            var6 = var3.bind(var4)(var6);
            var13 = var6.intl;
            var11 = var13.string;
            var6 = var8[var1];
            var6 = var3.bind(var4)(var6);
            var6 = var6.t;
            var6 = var6.L9B+ZZ;
            var6 = var11.bind(var13)(var6);
            var _closure2_slot3 = var6;
            var15 = var12.useCallback;
            var13 = function() {
                var3 = _closure2_slot2;
                var1 = undefined;
                var2 = false;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var11 = new Array(0);
            var11 = var15.bind(var12)(var13, var11);
            var _closure2_slot4 = var11;
            var15 = var12.useMemo;
            var13 = new Array(4);
            var13[0] = var16;
            var13[1] = var6;
            var13[2] = var9;
            var13[3] = var11;
            var11 = function() {
                var1 = {};
                var3 = _closure2_slot0;
                var1['position'] = var3;
                var3 = _closure2_slot3;
                var1['label'] = var3;
                var3 = _closure2_slot1;
                var1['visible'] = var3;
                var2 = _closure2_slot4;
                var1['onPress'] = var2;
                return var1;
            };
            var15 = var15.bind(var12)(var11, var13);
            var11 = 8;
            var11 = var8[var11];
            var13 = var3.bind(var4)(var11);
            var11 = var13.useTooltip;
            var11 = var11.bind(var13)(var14, var15);
            var13 = var12.useEffect;
            var11 = new Array(1);
            var11[0] = var9;
            var9 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var5 = undefined;
                    if(var2) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    return var5;
case 2:
                    var2 = global;
                    var4 = var2.setTimeout;
                    var3 = function() {
                        var3 = _closure2_slot2;
                        var1 = undefined;
                        var2 = false;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var2 = 3000;
                    var2 = var4.bind(var5)(var3, var2);
                    var _closure3_slot0 = var2;
                    var1 = function() {
                        var1 = global;
                        var3 = var1.clearTimeout;
                        var2 = _closure3_slot0;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    return var1;
                }
            };
            var9 = var13.bind(var12)(var9, var11);
            var11 = var12.useCallback;
            var9 = function() {
                var3 = _closure2_slot2;
                var1 = undefined;
                var2 = function(arg1) {
                    var1 = arg1;
                    var1 = !var1;
                    return var1;
                };
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var2 = new Array(0);
            var13 = var11.bind(var12)(var9, var2);
            var2 = 9;
            var2 = var8[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.isThemeDark;
            var2 = var2.bind(var3)(var7);
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var8 = var10.pillLight;
            _fun0001_ip = 6; continue _fun0001;
case 4:
            var8 = var10.pillDark;
case 6:
            var11 = 'white';
            if(!var2) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var11 = 'control-overlay-primary-text-default';
case 7:
            var7 = _closure1_slot0;
            var12 = _closure1_slot2;
            var2 = var12[var1];
            var2 = var7.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var12[var1];
            var1 = var7.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1["1m6qcO"];
            var9 = var2.bind(var3)(var1);
            var3 = _closure1_slot7;
            var2 = _closure1_slot5;
            var1 = {};
            var1['ref'] = var14;
            var1['onPress'] = var13;
            var13 = _closure1_slot8;
            var1['hitSlop'] = var13;
            var13 = 'button';
            var1['accessibilityRole'] = var13;
            var1['accessibilityLabel'] = var9;
            var1['accessibilityHint'] = var6;
            var13 = var10.pillBase;
            var6 = new Array(2);
            var6[0] = var13;
            var6[1] = var8;
            var1['style'] = var6;
            var8 = _closure1_slot6;
            var5 = 10;
            var5 = var12[var5];
            var5 = var7.bind(var4)(var5);
            var6 = var5.NitroWheelIcon;
            var5 = {};
            var13 = 'xs';
            var5['size'] = var13;
            var5['color'] = var11;
            var6 = var8.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var6 = 11;
            var6 = var12[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.Text;
            var6 = {};
            var12 = 'text-sm/bold';
            var6['variant'] = var12;
            var6['color'] = var11;
            var10 = var10.text;
            var6['style'] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot10 = var7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/native/FramesEarlyAccessBadge.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var5 = var1.location;
            var7 = var1.tooltipPosition;
            var6 = undefined;
            if(!(var7 === var6)) { _fun0003_ip = 9; continue _fun0003 }
case 10:
            var7 = 'top';
case 9:
            var2 = var1.inheritLayerScope;
            if(!(var2 === var6)) { _fun0003_ip = 11; continue _fun0003 }
case 12:
            var2 = false;
case 11:
            var4 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 12;
            var1 = var8[var1];
            var4 = var4.bind(var6)(var1);
            var1 = var4.useIsProfileFramesEarlyAccessPhase;
            var4 = var1.bind(var4)(var5);
            var1 = null;
            if(!var4) { _fun0003_ip = 13; continue _fun0003 }
case 14:
            var5 = _closure1_slot6;
            if(var2) { _fun0003_ip = 15; continue _fun0003 }
case 16:
            var4 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 13;
            var2 = var8[var2];
            var2 = var4.bind(var6)(var2);
            var4 = var2.LayerScope;
            var2 = {};
            var8 = 3;
            var2['zIndex'] = var8;
            var9 = _closure1_slot10;
            var8 = {};
            var8['tooltipPosition'] = var7;
            var8 = var5.bind(var6)(var9, var8);
            var2['children'] = var8;
            var2 = var5.bind(var6)(var4, var2);
            _fun0003_ip = 17; continue _fun0003;
case 15:
            var4 = _closure1_slot10;
            var3 = {};
            var3['tooltipPosition'] = var7;
            var2 = var5.bind(var6)(var4, var3);
case 17:
            var1 = var2;
case 13:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();