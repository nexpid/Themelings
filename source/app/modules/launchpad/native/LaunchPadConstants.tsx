// app/modules/launchpad/native/LaunchPadConstants.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
        var6 = require;
        var3 = exports;
        var7 = dependencyMap;
        var8 = global;
        var5 = var8.Object;
        var4 = var5.defineProperty;
        var2 = {};
        var1 = true;
        var2['value'] = var1;
        var1 = '__esModule';
        var1 = var4.bind(var5)(var3, var1, var2);
        var1 = 0;
        var2 = var7[var1];
        var1 = undefined;
        var2 = var6.bind(var1)(var2);
        var5 = var2.Dimensions;
        var4 = var5.get;
        var2 = 'screen';
        var5 = var4.bind(var5)(var2);
        var2 = 1;
        var2 = var7[var2];
        var4 = var6.bind(var1)(var2);
        var2 = var4.isAndroid;
        var2 = var2.bind(var4)();
        var4 = 24;
        if(var2) { _fun0001_ip = 173; continue _fun0001 }
 101:
        var2 = 2;
        var2 = var7[var2];
        var9 = var6.bind(var1)(var2);
        var2 = var9.isIpadOS;
        var9 = var2.bind(var9)();
        var2 = 13;
        if(var9) { _fun0001_ip = 170; continue _fun0001 }
 129:
        var10 = var8.Math;
        var9 = var10.min;
        var8 = var5.width;
        var5 = var5.height;
        var8 = var9.bind(var10)(var8, var5);
        var5 = 0.09;
        var2 = var5 * var8;
 170:
        var4 = var2;
 173:
        var2 = {};
        var5 = 'gesture-full';
        var2['GESTURE_FULL'] = var5;
        var5 = 'gesture-edge';
        var2['GESTURE_EDGE'] = var5;
        var5 = 'pull-tab';
        var2['PULL_TAB'] = var5;
        var5 = 'disabled';
        var2['DISABLED'] = var5;
        var5 = 3;
        var5 = var7[var5];
        var7 = var6.bind(var1)(var5);
        var6 = var7.fileFinishedImporting;
        var5 = 'modules/launchpad/native/LaunchPadConstants.tsx';
        var5 = var6.bind(var7)(var5);
        var5 = {'damping': 20, 'stiffness': 280, 'mass': 0.5, 'restSpeedThreshold': 0.001, 'restDisplacementThreshold': 0.001};
        var3['LAUNCH_PAD_SPRING_CONFIG'] = var5;
        var5 = 96;
        var3['LAUNCH_PAD_PULL_TAB_HEIGHT'] = var5;
        var5 = 26;
        var3['LAUNCH_PAD_PULL_TAB_WIDTH'] = var5;
        var5 = 18;
        var3['LAUNCH_PAD_PULL_TAB_MINIMIZED_OFFSET'] = var5;
        var5 = 13;
        var3['LAUNCH_PAD_PULL_TAB_BORDER_RADIUS'] = var5;
        var5 = 1.1;
        var3['LAUNCH_PAD_PULL_TAB_SCALE_FACTOR'] = var5;
        var5 = 4.800000000000004;
        var3['LAUNCH_PAD_PULL_TAB_SCALE_OFFSET'] = var5;
        var5 = 32;
        var3['LAUNCH_PAD_PULL_TAB_POSITION_MARGIN'] = var5;
        var5 = 300.8;
        var3['LAUNCH_PAD_PULL_TAB_MAX_POSITION'] = var5;
        var5 = 150.4;
        var3['LAUNCH_PAD_PULL_TAB_INITIAL_POSITION'] = var5;
        var5 = 16;
        var3['LAUNCH_PAD_MARGIN'] = var5;
        var3['LAUNCH_PAD_PULL_TAB_HIT_SLOP'] = var5;
        var3['LAUNCH_PAD_EDGE_GESTURE_AFFORDANCE'] = var4;
        var3['LaunchPadTypes'] = var2;
        return var1;
    }
})();