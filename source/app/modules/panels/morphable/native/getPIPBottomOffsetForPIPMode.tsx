// app/modules/panels/morphable/native/getPIPBottomOffsetForPIPMode.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var2);
    var1 = 0;
    var2 = var7[var1];
    var1 = undefined;
    var2 = var6.bind(var1)(var2);
    var2 = var2.PIP_WINDOW_OFFSET;
    var _closure1_slot0 = var2;
    var5 = {};
    var8 = "function getPIPBottomOffsetForPIPMode_getPIPBottomOffsetForPIPModeTsx1(screenName){const{DEFAULT_CHANNEL_INPUT_HEIGHT,PIP_WINDOW_OFFSET,PIP_AVOIDANCE_TAB_BAR_HEIGHT}=this.__closure;switch(screenName){case'panels':return DEFAULT_CHANNEL_INPUT_HEIGHT+PIP_WINDOW_OFFSET;case'channel':return DEFAULT_CHANNEL_INPUT_HEIGHT+PIP_WINDOW_OFFSET;case'messages':case'notifications':case'main_tab':case'guilds':return PIP_AVOIDANCE_TAB_BAR_HEIGHT+PIP_WINDOW_OFFSET;default:return 0;}}";
    var5['code'] = var8;
    var4 = function _(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var1 = 'panels';
            if(!(var1 !== var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = 'channel';
            if(!(var1 !== var2)) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var1 = 'messages';
            if(!(var1 !== var2)) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var1 = 'notifications';
            if(!(var1 !== var2)) { _fun0001_ip = 5; continue _fun0001 }
case 7:
            var1 = 'main_tab';
            if(!(var1 !== var2)) { _fun0001_ip = 5; continue _fun0001 }
case 8:
            var1 = 'guilds';
            if(!(var1 !== var2)) { _fun0001_ip = 5; continue _fun0001 }
case 9:
            var1 = 0;
            return var1;
case 5:
            var2 = _closure1_slot0;
            var1 = 46;
            var1 = var1 + var2;
            return var1;
case 2:
            var2 = _closure1_slot0;
            var1 = 60;
            var1 = var1 + var2;
            return var1;
        }
    };
    var8 = {'DEFAULT_CHANNEL_INPUT_HEIGHT': 60, 'PIP_WINDOW_OFFSET': null, 'PIP_AVOIDANCE_TAB_BAR_HEIGHT': 46};
    var8['PIP_WINDOW_OFFSET'] = var2;
    var2 = 46;
    var4['__closure'] = var8;
    var8 = 7115458448589.0;
    var4['__workletHash'] = var8;
    var4['__initData'] = var5;
    var5 = 1;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/panels/morphable/native/getPIPBottomOffsetForPIPMode.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['PIP_AVOIDANCE_TAB_BAR_HEIGHT'] = var2;
    return var1;
})();