// app/modules/chat_input/native/RefreshChatInputCoachmark.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ContentDismissActionType;
    var _closure1_slot5 = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/chat_input/native/RefreshChatInputCoachmark.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function RefreshChatInputCoachmark(arg1) {
        var4 = arg1;
        var5 = var4.buttonRef;
        var1 = null;
        var3 = Object.create(var1);
        var2 = 0;
        var3['buttonRef'] = var2;
        var9 = {};
        var8 = var4;
        var7 = var3;
        var4 = copyDataProperties(var9, var8, var7);
        var6 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 8;
        var3 = var3[var2];
        var2 = undefined;
        var3 = var6.bind(var2)(var3);
        var2 = var3.useCoachmark;
        var2 = var2.bind(var3)(var5, var4);
        return var1;
    };
    var3['default'] = var4;
    var2 = function useRefreshChatInputCoachmark(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var3 = var2.disabled;
            var7 = undefined;
            var _closure2_slot0 = var7;
            var _closure2_slot1 = var7;
            var5 = _closure1_slot1;
            var8 = _closure1_slot2;
            var4 = 3;
            var4 = var8[var4];
            var5 = var5.bind(var7)(var4);
            var4 = 'RefreshChatInputCoachmark';
            var6 = var5.bind(var7)(var4);
            var5 = _closure1_slot0;
            var4 = 4;
            var4 = var8[var4];
            var5 = var5.bind(var7)(var4);
            var4 = var5.useSelectedDismissibleContent;
            if(!var6) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 5;
            var3 = var8[var3];
            var3 = var6.bind(var7)(var3);
            var3 = var3.DismissibleContent;
            var6 = var3.MOBILE_REFRESH_CHAT_INPUT_PLUS_BUTTON_COACHMARK;
            var3 = new Array(1);
            var3[0] = var6;
            _fun0001_ip = 5; continue _fun0001;
case 2:
            var3 = new Array(0);
case 5:
            var5 = var4.bind(var5)(var3);
            var4 = _closure1_slot3;
            var3 = 2;
            var5 = var4.bind(var7)(var5, var3);
            var3 = 0;
            var4 = var5[var3];
            var3 = 1;
            var6 = var5[var3];
            _closure2_slot0 = var6;
            var5 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 5;
            var3 = var8[var3];
            var3 = var5.bind(var7)(var3);
            var3 = var3.DismissibleContent;
            var3 = var3.MOBILE_REFRESH_CHAT_INPUT_PLUS_BUTTON_COACHMARK;
            var3 = var4 === var3;
            _closure2_slot1 = var3;
            var5 = _closure1_slot4;
            var4 = var5.useMemo;
            var2 = new Array(2);
            var2[0] = var3;
            var2[1] = var6;
            var1 = function() {
                var1 = {};
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 6;
                var3 = var6[var2];
                var4 = undefined;
                var3 = var5.bind(var4)(var3);
                var8 = var3.intl;
                var7 = var8.string;
                var3 = var6[var2];
                var3 = var5.bind(var4)(var3);
                var3 = var3.t;
                var3 = var3.eqI1WA;
                var3 = var7.bind(var8)(var3);
                var1['title'] = var3;
                var3 = var6[var2];
                var3 = var5.bind(var4)(var3);
                var7 = var3.intl;
                var3 = var7.string;
                var2 = var6[var2];
                var2 = var5.bind(var4)(var2);
                var2 = var2.t;
                var2 = var2.nxO3NK;
                var2 = var3.bind(var7)(var2);
                var1['description'] = var2;
                var2 = 'top';
                var1['position'] = var2;
                var2 = 4;
                var1['offsetY'] = var2;
                var2 = _closure2_slot1;
                var1['visible'] = var2;
                var2 = function onDismiss() {
                    var3 = _closure2_slot0;
                    var1 = _closure1_slot5;
                    var2 = var1.USER_DISMISS;
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var1['onDismiss'] = var2;
                var2 = {'type': 'rive', 'rive': null, 'aspectRatio': '16/9'};
                var3 = 7;
                var3 = var6[var3];
                var3 = var5.bind(var4)(var3);
                var3 = var3.OmnibuttonCoachmarkRive;
                var2['rive'] = var3;
                var1['graphic'] = var2;
                return var1;
            };
            var2 = var4.bind(var5)(var1, var2);
            var1 = null;
            if(!var3) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var1 = var2;
case 6:
            return var1;
        }
    };
    var3['useRefreshChatInputCoachmark'] = var2;
    return var1;
})();