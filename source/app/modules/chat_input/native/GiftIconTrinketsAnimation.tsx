// app/modules/chat_input/native/GiftIconTrinketsAnimation.tsx
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
    var4 = var4.View;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = function(arg1) {
        var3 = arg1;
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 5;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var2 = var2.SMALL_BUTTON_HEIGHT;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.SMALL_BUTTON_PADDING;
        var2 = var2 + var1;
        var1 = 2;
        var4 = var2 + var1;
        var1 = {};
        var2 = {'position': 'absolute', 'top': 0, 'left': 0, 'width': null, 'height': null, 'overflow': 'visible', 'marginLeft': 4, 'zIndex': 0};
        var2['width'] = var4;
        var2['height'] = var4;
        var1['container'] = var2;
        var2 = {'position': 'absolute', 'top': 0, 'left': 0, 'width': null, 'height': null, 'overflow': 'visible', 'marginLeft': 0, 'zIndex': 0};
        var2['width'] = var3;
        var2['height'] = var3;
        var1['containerRefresh'] = var2;
        var2 = {'zIndex': 4, 'position': 'absolute', 'pointerEvents': 'none', 'width': '100%', 'height': '100%', 'top': 0, 'left': 0};
        var1['trinkets'] = var2;
        var2 = {'zIndex': 4, 'position': 'absolute', 'pointerEvents': 'none', 'width': '175%', 'height': '175%', 'top': '-37.5%', 'left': '-37.5%'};
        var1['trinketsRefresh'] = var2;
        return var1;
    };
    var4 = var8.bind(var9)(var4);
    var _closure1_slot6 = var4;
    var4 = var7.memo;
    var2 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var12 = var1.trinketsAnimationUrl;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 6;
            var1 = var3[var1];
            var5 = undefined;
            var6 = var2.bind(var5)(var1);
            var4 = var6.useMobileVisualRefreshConfig;
            var1 = {};
            var8 = 'GiftIconTrinketsAnimation';
            var1['location'] = var8;
            var1 = var4.bind(var6)(var1);
            var6 = var1.enabled;
            var1 = 7;
            var1 = var3[var1];
            var8 = var2.bind(var5)(var1);
            var4 = var8.useToken;
            var9 = _closure1_slot1;
            var1 = 8;
            var1 = var3[var1];
            var1 = var9.bind(var5)(var1);
            var1 = var1.modules;
            var1 = var1.mobile;
            var1 = var1.CHAT_INPUT_ACTION_BUTTON_SIZE;
            var4 = var4.bind(var8)(var1);
            var1 = _closure1_slot6;
            var8 = var1.bind(var5)(var4);
            var1 = 9;
            var1 = var3[var1];
            var4 = var2.bind(var5)(var1);
            var3 = var4.useStateFromStores;
            var1 = _closure1_slot4;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var1 = _closure1_slot4;
                var1 = var1.useReducedMotion;
                return var1;
            };
            var11 = var3.bind(var4)(var2, var1);
            if(var6) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var10 = var8.trinkets;
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var10 = var8.trinketsRefresh;
case 4:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 10;
            var1 = var3[var1];
            var2 = var2.bind(var5)(var1);
            var1 = var2.isNullOrEmpty;
            var2 = var1.bind(var2)(var12);
            var1 = null;
            if(var2) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var4 = _closure1_slot5;
            var3 = _closure1_slot3;
            var2 = {};
            if(var6) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var6 = var8.container;
            _fun0001_ip = 9; continue _fun0001;
case 7:
            var6 = var8.containerRefresh;
case 9:
            var2['style'] = var6;
            var6 = 'none';
            var2['pointerEvents'] = var6;
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var6 = 11;
            var6 = var9[var6];
            var8 = var8.bind(var5)(var6);
            var6 = var8.isAndroid;
            var6 = var6.bind(var8)();
            var9 = _closure1_slot5;
            if(var6) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var8 = _closure1_slot1;
            var13 = _closure1_slot2;
            var6 = 13;
            var6 = var13[var6];
            var8 = var8.bind(var5)(var6);
            var6 = {};
            var13 = {};
            var13['uri'] = var12;
            var6['source'] = var13;
            var6['style'] = var10;
            var13 = 'contain';
            var6['resizeMode'] = var13;
            var13 = !var11;
            var6['enableAnimation'] = var13;
            var6 = var9.bind(var5)(var8, var6);
            _fun0001_ip = 12; continue _fun0001;
case 10:
            var8 = _closure1_slot0;
            var13 = _closure1_slot2;
            var7 = 12;
            var7 = var13[var7];
            var7 = var8.bind(var5)(var7);
            var8 = var7.APNGPlayer;
            var7 = {};
            var7['url'] = var12;
            var11 = !var11;
            var7['autoplay'] = var11;
            var7['style'] = var10;
            var6 = var9.bind(var5)(var8, var7);
case 12:
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 5:
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 14;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/chat_input/native/GiftIconTrinketsAnimation.tsx';
    var4 = var5.bind(var6)(var4);
    var3['GiftIconTrinketsAnimation'] = var2;
    return var1;
})();