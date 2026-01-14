// app/modules/activities/panel/native/LeaveActivityButton.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var7;
    var2 = function BaseLeaveActivityButton(arg1) {
        var1 = arg1;
        var6 = var1.onPress;
        var4 = _closure1_slot4;
        var8 = _closure1_slot0;
        var9 = _closure1_slot2;
        var1 = 3;
        var1 = var9[var1];
        var3 = undefined;
        var1 = var8.bind(var3)(var1);
        var2 = var1.Button;
        var1 = {};
        var1['onPress'] = var6;
        var6 = _closure1_slot1;
        var5 = 4;
        var5 = var9[var5];
        var5 = var6.bind(var3)(var5);
        var1['icon'] = var5;
        var5 = 5;
        var6 = var9[var5];
        var6 = var8.bind(var3)(var6);
        var10 = var6.intl;
        var7 = var10.string;
        var6 = var9[var5];
        var6 = var8.bind(var3)(var6);
        var6 = var6.t;
        var6 = var6.Hi1/aQ;
        var6 = var7.bind(var10)(var6);
        var1['text'] = var6;
        var6 = var9[var5];
        var6 = var8.bind(var3)(var6);
        var7 = var6.intl;
        var6 = var7.string;
        var5 = var9[var5];
        var5 = var8.bind(var3)(var5);
        var5 = var5.t;
        var5 = var5.k0Aph0;
        var5 = var6.bind(var7)(var5);
        var1['accessibilityLabel'] = var5;
        var5 = 'destructive';
        var1['variant'] = var5;
        var5 = 'sm';
        var1['size'] = var5;
        var5 = 2;
        var1['maxFontSizeMultiplier'] = var5;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var _closure1_slot5 = var2;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var5);
    var1 = 0;
    var8 = var7[var1];
    var5 = metroImportAll;
    var1 = undefined;
    var8 = var5.bind(var1)(var8);
    var5 = 1;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.ActivityPanelModes;
    var _closure1_slot3 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.jsx;
    var _closure1_slot4 = var5;
    var5 = var8.memo;
    var4 = function LeaveActivityButton(arg1) {
        var2 = arg1;
        var3 = var2.selfEmbeddedActivity;
        var _closure2_slot0 = var3;
        var2 = var2.setMode;
        var _closure2_slot1 = var2;
        var4 = _closure1_slot4;
        var3 = _closure1_slot5;
        var2 = {};
        var1 = function onPress() {
            var3 = _closure2_slot1;
            var1 = _closure1_slot3;
            var2 = var1.DISCONNECTED;
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var2 = global;
            var4 = var2.setTimeout;
            var3 = function() {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.leaveActivity;
                    var2 = {};
                    var5 = _closure2_slot0;
                    var7 = null;
                    var8 = var7 == var5;
                    var5 = undefined;
                    if(var8) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var8 = _closure2_slot0;
                    var5 = var8.location;
case 2:
                    var2['location'] = var5;
                    var5 = _closure2_slot0;
                    var7 = var7 == var5;
                    var5 = undefined;
                    if(var7) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                    var6 = _closure2_slot0;
                    var5 = var6.applicationId;
case 4:
                    var2['applicationId'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var2 = 400;
            var2 = var4.bind(var1)(var3, var2);
            return var1;
        };
        var2['onPress'] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var4 = var5.bind(var8)(var4);
    var5 = 7;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/activities/panel/native/LeaveActivityButton.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['BaseLeaveActivityButton'] = var2;
    return var1;
})();