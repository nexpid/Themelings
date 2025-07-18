// app/modules/panels/morphable/native/getPIPBottomOffsetForPIPMode.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var3 = native6;
    var7 = native7;
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
 0:
            var2 = arg1;
            var1 = 'panels';
            if(!(var1 !== var2)) { _fun0001_ip = 75; continue _fun0001 }
 13:
            var1 = 'channel';
            if(!(var1 !== var2)) { _fun0001_ip = 75; continue _fun0001 }
 21:
            var1 = 'messages';
            if(!(var1 !== var2)) { _fun0001_ip = 59; continue _fun0001 }
 29:
            var1 = 'notifications';
            if(!(var1 !== var2)) { _fun0001_ip = 59; continue _fun0001 }
 37:
            var1 = 'main_tab';
            if(!(var1 !== var2)) { _fun0001_ip = 59; continue _fun0001 }
 47:
            var1 = 'guilds';
            if(!(var1 !== var2)) { _fun0001_ip = 59; continue _fun0001 }
 55:
            var1 = 0;
            return var1;
 59:
            var2 = _closure1_slot0;
            var1 = 46;
            var1 = var1 + var2;
            return var1;
 75:
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