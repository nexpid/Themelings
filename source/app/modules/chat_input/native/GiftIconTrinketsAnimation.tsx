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
            var13 = var1.trinketsAnimationUrl;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 6;
            var1 = var3[var1];
            var5 = undefined;
            var7 = var2.bind(var5)(var1);
            var4 = var7.useMobileVisualRefreshConfig;
            var1 = {};
            var8 = 'GiftIconTrinketsAnimation';
            var1['location'] = var8;
            var1 = var4.bind(var7)(var1);
            var10 = var1.enabled;
            var1 = 7;
            var1 = var3[var1];
            var7 = var2.bind(var5)(var1);
            var4 = var7.useToken;
            var8 = _closure1_slot1;
            var1 = 8;
            var1 = var3[var1];
            var1 = var8.bind(var5)(var1);
            var1 = var1.modules;
            var1 = var1.mobile;
            var1 = var1.CHAT_INPUT_ACTION_BUTTON_SIZE;
            var4 = var4.bind(var7)(var1);
            var1 = _closure1_slot6;
            var11 = var1.bind(var5)(var4);
            var1 = 9;
            var1 = var3[var1];
            var8 = var2.bind(var5)(var1);
            var7 = var8.useStateFromStores;
            var1 = _closure1_slot4;
            var4 = new Array(1);
            var4[0] = var1;
            var1 = function() {
                var1 = _closure1_slot4;
                var1 = var1.useReducedMotion;
                return var1;
            };
            var9 = var7.bind(var8)(var4, var1);
            var1 = 10;
            var1 = var3[var1];
            var2 = var2.bind(var5)(var1);
            var1 = var2.isNullOrEmpty;
            var2 = var1.bind(var2)(var13);
            var1 = null;
            if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = _closure1_slot5;
            var3 = _closure1_slot3;
            var2 = {};
            if(var10) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var7 = var11.container;
            _fun0001_ip = 6; continue _fun0001;
case 4:
            var7 = var11.containerRefresh;
case 6:
            var2['style'] = var7;
            var7 = 'none';
            var2['pointerEvents'] = var7;
            var8 = _closure1_slot5;
            var7 = _closure1_slot1;
            var12 = _closure1_slot2;
            var6 = 11;
            var6 = var12[var6];
            var7 = var7.bind(var5)(var6);
            var6 = {};
            var12 = {};
            var12['uri'] = var13;
            var6['source'] = var12;
            if(var10) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var10 = var11.trinkets;
            _fun0001_ip = 9; continue _fun0001;
case 7:
            var10 = var11.trinketsRefresh;
case 9:
            var6['style'] = var10;
            var10 = 'contain';
            var6['resizeMode'] = var10;
            var9 = !var9;
            var6['enableAnimation'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 2:
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/chat_input/native/GiftIconTrinketsAnimation.tsx';
    var4 = var5.bind(var6)(var4);
    var3['GiftIconTrinketsAnimation'] = var2;
    return var1;
})();