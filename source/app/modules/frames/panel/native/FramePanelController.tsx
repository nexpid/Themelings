// app/modules/frames/panel/native/FramePanelController.tsx
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
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot5 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/frames/panel/native/FramePanelController.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function FramePanelController(arg1) {
        var1 = arg1;
        var5 = var1.children;
        var2 = _closure1_slot0;
        var8 = _closure1_slot2;
        var1 = 4;
        var1 = var8[var1];
        var4 = undefined;
        var10 = var2.bind(var4)(var1);
        var9 = var10.useStateFromStoresObject;
        var1 = _closure1_slot4;
        var6 = new Array(2);
        var6[0] = var1;
        var1 = _closure1_slot3;
        var6[1] = var1;
        var3 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var2 = _closure1_slot4;
                var1 = var2.getActivityPanelMode;
                var7 = var1.bind(var2)();
                var1 = var2.getConnectedFrame;
                var6 = var1.bind(var2)();
                var4 = null;
                var1 = var4 == var6;
                var5 = undefined;
                if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var5 = var6.applicationId;
case 2:
                var1 = {};
                var1['mode'] = var7;
                var6 = var4 != var6;
                var1['hasConnectedActivity'] = var6;
                var1['connectedActivityAppId'] = var5;
                var7 = var4 != var5;
                var6 = undefined;
                if(!var7) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var8 = _closure1_slot3;
                var7 = var8.getApplication;
                var6 = var7.bind(var8)(var5);
case 4:
                var1['currentApp'] = var6;
                var4 = var4 == var5;
                var2 = undefined;
                if(var4) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                var4 = _closure1_slot4;
                var3 = var4.getOrientationLockStateForApp;
                var2 = var3.bind(var4)(var5);
case 6:
                var1['orientationLockStateForApp'] = var2;
                return var1;
            }
        };
        var1 = new Array(0);
        var1 = var9.bind(var10)(var6, var3, var1);
        var11 = var1.mode;
        var10 = var1.hasConnectedActivity;
        var9 = var1.connectedActivityAppId;
        var6 = var1.currentApp;
        var12 = var1.orientationLockStateForApp;
        var3 = _closure1_slot5;
        var1 = 5;
        var1 = var8[var1];
        var1 = var2.bind(var4)(var1);
        var2 = var1.BaseActivityPanelController;
        var1 = {};
        var7 = _closure1_slot1;
        var13 = 6;
        var13 = var8[var13];
        var13 = var7.bind(var4)(var13);
        var1['context'] = var13;
        var1['orientationLockStateForApp'] = var12;
        var1['mode'] = var11;
        var1['hasConnectedActivity'] = var10;
        var1['connectedActivityAppId'] = var9;
        var1['currentApp'] = var6;
        var6 = 7;
        var6 = var8[var6];
        var6 = var7.bind(var4)(var6);
        var6 = var6.updateFramePanelMode;
        var1['updateActivityPanelMode'] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();