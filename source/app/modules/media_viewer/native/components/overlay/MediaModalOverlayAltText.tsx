// app/modules/media_viewer/native/components/overlay/MediaModalOverlayAltText.tsx
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
    var7 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = function(arg1) {
        var1 = {};
        var2 = {};
        var5 = _closure1_slot1;
        var6 = _closure1_slot2;
        var3 = 3;
        var7 = var6[var3];
        var4 = undefined;
        var7 = var5.bind(var4)(var7);
        var7 = var7.colors;
        var7 = var7.CONTROL_OVERLAY_SECONDARY_BACKGROUND_ACTIVE;
        var2['backgroundColor'] = var7;
        var7 = var6[var3];
        var7 = var5.bind(var4)(var7);
        var7 = var7.space;
        var7 = var7.PX_8;
        var2['marginVertical'] = var7;
        var7 = var6[var3];
        var7 = var5.bind(var4)(var7);
        var7 = var7.space;
        var7 = var7.PX_8;
        var2['marginHorizontal'] = var7;
        var7 = var6[var3];
        var7 = var5.bind(var4)(var7);
        var7 = var7.space;
        var8 = var7.PX_8;
        var7 = arg1;
        var7 = var8 + var7;
        var2['marginRight'] = var7;
        var7 = var6[var3];
        var7 = var5.bind(var4)(var7);
        var7 = var7.space;
        var7 = var7.PX_8;
        var2['paddingHorizontal'] = var7;
        var7 = var6[var3];
        var7 = var5.bind(var4)(var7);
        var7 = var7.space;
        var7 = var7.PX_4;
        var2['paddingVertical'] = var7;
        var3 = var6[var3];
        var3 = var5.bind(var4)(var3);
        var3 = var3.radii;
        var3 = var3.sm;
        var2['borderRadius'] = var3;
        var3 = 'flex-end';
        var2['alignSelf'] = var3;
        var1['container'] = var2;
        return var1;
    };
    var4 = var8.bind(var9)(var4);
    var _closure1_slot4 = var4;
    var4 = var7.memo;
    var2 = function MediaModalOverlayAltTextButton(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var1 = var1.description;
            var5 = undefined;
            var _closure2_slot0 = var5;
            var4 = _closure1_slot1;
            var7 = _closure1_slot2;
            var3 = 4;
            var3 = var7[var3];
            var3 = var4.bind(var5)(var3);
            var3 = var3.bind(var5)();
            var4 = _closure1_slot4;
            var3 = var3.right;
            var7 = var4.bind(var5)(var3);
            var8 = null;
            var4 = var8 != var1;
            var3 = '';
            if(!var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var1;
case 2:
            _closure2_slot0 = var3;
            var4 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 5;
            var1 = var9[var1];
            var1 = var4.bind(var5)(var1);
            var4 = var1.ViewImageDescriptions;
            var1 = var4.useSetting;
            var4 = var1.bind(var4)();
            var1 = null;
            if(!var4) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = var3.length;
            var3 = 0;
            var1 = null;
            if(!(var3 !== var4)) { _fun0001_ip = 4; continue _fun0001 }
case 6:
            var4 = _closure1_slot3;
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var2 = 6;
            var2 = var12[var2];
            var2 = var11.bind(var5)(var2);
            var3 = var2.PressableOpacity;
            var2 = {};
            var7 = var7.container;
            var2['style'] = var7;
            var6 = function onPress() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 7;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = {};
                    var6 = _closure2_slot0;
                    var4 = null;
                    var6 = var4 != var6;
                    var4 = '';
                    if(!var6) { _fun0002_ip = 7; continue _fun0002 }
case 8:
                    var4 = _closure2_slot0;
case 7:
                    var2['description'] = var4;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var2['onPress'] = var6;
            var6 = {'top': 6, 'bottom': 6, 'left': 6, 'right': 6};
            var2['hitSlop'] = var6;
            var6 = 8;
            var6 = var12[var6];
            var6 = var11.bind(var5)(var6);
            var7 = var6.Text;
            var6 = {'variant': 'text-xs/semibold', 'color': 'white'};
            var8 = 9;
            var9 = var12[var8];
            var9 = var11.bind(var5)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var8 = var12[var8];
            var8 = var11.bind(var5)(var8);
            var8 = var8.t;
            var8 = var8.Q5VqrN;
            var8 = var9.bind(var10)(var8);
            var6['children'] = var8;
            var6 = var4.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 4:
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/media_viewer/native/components/overlay/MediaModalOverlayAltText.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();