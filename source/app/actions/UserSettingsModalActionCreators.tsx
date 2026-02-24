// app/actions/UserSettingsModalActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var4 = dependencyMap;
    var2 = metroImportDefault;
    var _closure1_slot0 = var2;
    var _closure1_slot1 = var4;
    var2 = global;
    var7 = var2.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var2 = true;
    var5['value'] = var2;
    var2 = '__esModule';
    var2 = var6.bind(var7)(var3, var2, var5);
    var2 = {};
    var5 = function close() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 0;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'USER_SETTINGS_MODAL_CLOSE';
        var2['type'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['close'] = var5;
    var5 = function setSection(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var6 = arguments[1];
            var5 = arguments[2];
            var1 = undefined;
            if(!(var6 === var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = null;
case 2:
            if(!(var5 === var1)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var5 = {};
case 4:
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 0;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var7 = 'USER_SETTINGS_MODAL_SET_SECTION';
            var2['type'] = var7;
            var7 = arg1;
            var2['section'] = var7;
            var2['subsection'] = var6;
            var9 = var2;
            var8 = var5;
            var5 = copyDataProperties(var9, var8);
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var2['setSection'] = var5;
    var5 = function clearSubsection(arg1) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 0;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'USER_SETTINGS_MODAL_CLEAR_SUBSECTION';
        var2['type'] = var5;
        var5 = arg1;
        var2['forSection'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['clearSubsection'] = var5;
    var1 = function clearScrollPosition(arg1) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 0;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION';
        var2['type'] = var5;
        var5 = arg1;
        var2['forSection'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['clearScrollPosition'] = var1;
    var1 = 1;
    var5 = var4[var1];
    var4 = require;
    var1 = undefined;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'actions/UserSettingsModalActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();