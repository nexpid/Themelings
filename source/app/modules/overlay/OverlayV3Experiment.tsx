// app/modules/overlay/OverlayV3Experiment.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var17 = require;
    var3 = exports;
    var18 = dependencyMap;
    var14 = function useOverlayV3(arg1) {
        var3 = _closure1_slot0;
        var2 = var3.useExperiment;
        var1 = {};
        var4 = arg1;
        var1['location'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot8 = var14;
    var13 = function getUseOverlayV3(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arguments[1];
            var1 = undefined;
            if(!(var5 === var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = false;
case 2:
            var4 = _closure1_slot0;
            var3 = var4.getCurrentConfig;
            var2 = {};
            var1 = arg1;
            var2['location'] = var1;
            var1 = {};
            var1['autoTrackExposure'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot9 = var13;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var2 = {};
    var21 = true;
    var2['value'] = var21;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var2);
    var7 = 0;
    var2 = var18[var7];
    var1 = undefined;
    var2 = var17.bind(var1)(var2);
    var19 = var2.CommonTriggerPoints;
    var6 = 1;
    var2 = var18[var6];
    var9 = var17.bind(var1)(var2);
    var8 = var9.createExperiment;
    var5 = {'kind': 'user', 'id': '2024-10_overlay_v3', 'label': 'Overlay V3 Shared Context OOP'};
    var2 = var19.CONNECTION_OPEN;
    var5['commonTriggerPoint'] = var2;
    var20 = false;
    var2 = {'overlayV3tech': false, 'overlayV3UI': false, 'allowActivityWidget': false, 'allowNowPlaying': false};
    var5['defaultConfig'] = var2;
    var2 = {'id': 1, 'label': 'Use Overlay V3, All features included.'};
    var10 = {'overlayV3tech': true, 'overlayV3UI': true, 'allowActivityWidget': true, 'allowNowPlaying': true};
    var2['config'] = var10;
    var10 = new Array(4);
    var10[0] = var2;
    var11 = {'id': 2, 'label': 'Use Overlay V3, Minus "Now Playing" Notif.'};
    var2 = 2;
    var12 = {'overlayV3tech': true, 'overlayV3UI': true, 'allowActivityWidget': true, 'allowNowPlaying': false};
    var11['config'] = var12;
    var10[1] = var11;
    var11 = {'id': 3, 'label': 'Use Overlay V3 minus any activity'};
    var16 = 3;
    var12 = {'overlayV3tech': true, 'overlayV3UI': true, 'allowActivityWidget': false, 'allowNowPlaying': false};
    var11['config'] = var12;
    var10[2] = var11;
    var11 = {'id': 4, 'label': 'Use Overlay V3 tech with Overlay 2 UI'};
    var12 = {'overlayV3tech': true, 'overlayV3UI': false, 'allowActivityWidget': false, 'allowNowPlaying': false};
    var11['config'] = var12;
    var10[3] = var11;
    var5['treatments'] = var10;
    var15 = var8.bind(var9)(var5);
    var _closure1_slot0 = var15;
    var5 = var18[var6];
    var9 = var17.bind(var1)(var5);
    var8 = var9.createExperiment;
    var5 = {'kind': 'user', 'id': '2025-06_overlay_raf_manager', 'label': 'Overlay RAF Manager'};
    var10 = var19.CONNECTION_OPEN;
    var5['commonTriggerPoint'] = var10;
    var10 = {};
    var10['enabled'] = var20;
    var5['defaultConfig'] = var10;
    var11 = {'id': 1, 'label': 'Enable RAF Manager'};
    var10 = {};
    var10['enabled'] = var21;
    var11['config'] = var10;
    var10 = new Array(1);
    var10[0] = var11;
    var5['treatments'] = var10;
    var12 = var8.bind(var9)(var5);
    var _closure1_slot1 = var12;
    var5 = var18[var6];
    var9 = var17.bind(var1)(var5);
    var8 = var9.createExperiment;
    var5 = {'kind': 'user', 'id': '2025-06_overlay_render_timeout', 'label': 'Overlay Render Timeout'};
    var10 = var19.CONNECTION_OPEN;
    var5['commonTriggerPoint'] = var10;
    var10 = {'shortTimeout': 8000, 'longTimeout': 12000};
    var5['defaultConfig'] = var10;
    var11 = {'id': 1, 'label': 'Shortest Timeouts (2s, 3s)'};
    var10 = {'shortTimeout': 2000, 'longTimeout': 3000};
    var11['config'] = var10;
    var10 = new Array(3);
    var10[0] = var11;
    var11 = {'id': 2, 'label': 'Medium Timeouts (4s, 6s)'};
    var22 = {'shortTimeout': 4000, 'longTimeout': 6000};
    var11['config'] = var22;
    var10[1] = var11;
    var11 = {'id': 3, 'label': 'Longer Timeouts (16s, 24s)'};
    var22 = {'shortTimeout': 16000, 'longTimeout': 24000};
    var11['config'] = var22;
    var10[2] = var11;
    var5['treatments'] = var10;
    var11 = var8.bind(var9)(var5);
    var _closure1_slot2 = var11;
    var5 = var18[var6];
    var9 = var17.bind(var1)(var5);
    var8 = var9.createExperiment;
    var5 = {'kind': 'user', 'id': '2025-07_overlay_default_disable', 'label': 'Overlay Default Disable'};
    var10 = var19.CONNECTION_OPEN;
    var5['commonTriggerPoint'] = var10;
    var10 = {};
    var10['enabled'] = var20;
    var5['defaultConfig'] = var10;
    var20 = {'id': 1, 'label': 'Enable Default Disable Behavior'};
    var10 = {};
    var10['enabled'] = var21;
    var20['config'] = var10;
    var10 = new Array(1);
    var10[0] = var20;
    var5['treatments'] = var10;
    var10 = var8.bind(var9)(var5);
    var _closure1_slot3 = var10;
    var5 = var18[var6];
    var9 = var17.bind(var1)(var5);
    var8 = var9.createExperiment;
    var5 = {'kind': 'user', 'id': '2025-07_overlay_oop_nudge', 'label': 'Overlay OOP Nudge'};
    var19 = var19.CONNECTION_OPEN;
    var5['commonTriggerPoint'] = var19;
    var19 = {'useContextualNudge': false, 'disableNudge': false};
    var5['defaultConfig'] = var19;
    var20 = {'id': 1, 'label': 'Enable Contextual Nudge'};
    var19 = {'useContextualNudge': true, 'disableNudge': false};
    var20['config'] = var19;
    var19 = new Array(2);
    var19[0] = var20;
    var20 = {'id': 2, 'label': 'No Nudge'};
    var22 = {'useContextualNudge': false, 'disableNudge': true};
    var20['config'] = var22;
    var19[1] = var20;
    var5['treatments'] = var19;
    var9 = var8.bind(var9)(var5);
    var _closure1_slot4 = var9;
    var8 = {};
    var8['GREEN_BUTTON_WITH_TEXT'] = var7;
    var5 = 'GREEN_BUTTON_WITH_TEXT';
    var8[var7] = var5;
    var8['GRAY_BUTTON_WITH_TEXT'] = var6;
    var5 = 'GRAY_BUTTON_WITH_TEXT';
    var8[var6] = var5;
    var8['SINGLE_ICON_BUTTON'] = var2;
    var5 = 'SINGLE_ICON_BUTTON';
    var8[var2] = var5;
    var5 = var18[var2];
    var7 = var17.bind(var1)(var5);
    var6 = var7.createApexExperiment;
    var5 = {'name': '2025-08-overlay-stream-watch-nudge', 'kind': 'user'};
    var19 = {'enabled': false, 'designVariant': null};
    var5['defaultConfig'] = var19;
    var19 = {};
    var20 = {};
    var20['enabled'] = var21;
    var22 = var8.GREEN_BUTTON_WITH_TEXT;
    var20['designVariant'] = var22;
    var19[1] = var20;
    var20 = {};
    var20['enabled'] = var21;
    var22 = var8.GRAY_BUTTON_WITH_TEXT;
    var20['designVariant'] = var22;
    var19[2] = var20;
    var20 = {};
    var20['enabled'] = var21;
    var21 = var8.SINGLE_ICON_BUTTON;
    var20['designVariant'] = var21;
    var19[3] = var20;
    var5['variations'] = var19;
    var7 = var6.bind(var7)(var5);
    var _closure1_slot5 = var7;
    var5 = var18[var2];
    var19 = var17.bind(var1)(var5);
    var6 = var19.createApexExperiment;
    var5 = {'name': '2025-08-overlay-v3-one-click-go-live', 'kind': 'user'};
    var20 = {'oneClickGoLiveEnabled': false, 'useStreamCtaCopy': false};
    var5['defaultConfig'] = var20;
    var20 = {};
    var21 = {'oneClickGoLiveEnabled': false, 'useStreamCtaCopy': true};
    var20[1] = var21;
    var21 = {'oneClickGoLiveEnabled': true, 'useStreamCtaCopy': true};
    var20[2] = var21;
    var5['variations'] = var20;
    var6 = var6.bind(var19)(var5);
    var _closure1_slot6 = var6;
    var5 = var18[var2];
    var20 = var17.bind(var1)(var5);
    var19 = var20.createApexExperiment;
    var5 = {'name': '2025-09-overlay-default-keybind', 'kind': 'user'};
    var21 = {};
    var21['keybindOverride'] = var1;
    var5['defaultConfig'] = var21;
    var21 = {};
    var22 = {};
    var23 = 'alt+a';
    var22['keybindOverride'] = var23;
    var21[1] = var22;
    var5['variations'] = var21;
    var5 = var19.bind(var20)(var5);
    var _closure1_slot7 = var5;
    var2 = var18[var2];
    var20 = var17.bind(var1)(var2);
    var19 = var20.createApexExperiment;
    var2 = {'name': '2025-09-overlay-negative-widget-testing', 'kind': 'user'};
    var21 = {'voiceWidgetDefaultUnpinned': false, 'videoWidgetDefaultUnpinned': false, 'disableWelcomeNotification': false, 'notificationsDefaultOff': false, 'unlockedOnlyDefaultOverlay': false};
    var2['defaultConfig'] = var21;
    var21 = {};
    var22 = {'voiceWidgetDefaultUnpinned': true, 'videoWidgetDefaultUnpinned': false, 'disableWelcomeNotification': false, 'notificationsDefaultOff': false, 'unlockedOnlyDefaultOverlay': false};
    var21[1] = var22;
    var22 = {'voiceWidgetDefaultUnpinned': false, 'videoWidgetDefaultUnpinned': true, 'disableWelcomeNotification': false, 'notificationsDefaultOff': false, 'unlockedOnlyDefaultOverlay': false};
    var21[2] = var22;
    var22 = {'voiceWidgetDefaultUnpinned': false, 'videoWidgetDefaultUnpinned': false, 'disableWelcomeNotification': true, 'notificationsDefaultOff': false, 'unlockedOnlyDefaultOverlay': false};
    var21[3] = var22;
    var22 = {'voiceWidgetDefaultUnpinned': false, 'videoWidgetDefaultUnpinned': false, 'disableWelcomeNotification': false, 'notificationsDefaultOff': true, 'unlockedOnlyDefaultOverlay': false};
    var21[4] = var22;
    var22 = {'voiceWidgetDefaultUnpinned': false, 'videoWidgetDefaultUnpinned': false, 'disableWelcomeNotification': false, 'notificationsDefaultOff': false, 'unlockedOnlyDefaultOverlay': true};
    var21[5] = var22;
    var2['variations'] = var21;
    var2 = var19.bind(var20)(var2);
    var16 = var18[var16];
    var18 = var17.bind(var1)(var16);
    var17 = var18.fileFinishedImporting;
    var16 = 'modules/overlay/OverlayV3Experiment.tsx';
    var16 = var17.bind(var18)(var16);
    var3['OverlayV3Experiment'] = var15;
    var3['useOverlayV3'] = var14;
    var3['getUseOverlayV3'] = var13;
    var13 = function getUseAnyOverlayV3(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var4 = arguments[1];
            var3 = undefined;
            if(!(var4 === var3)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
            var4 = true;
case 2:
            var2 = _closure1_slot9;
            var1 = arg1;
            var1 = var2.bind(var3)(var1, var4);
            var1 = var1.overlayV3tech;
            return var1;
        }
    };
    var3['getUseAnyOverlayV3'] = var13;
    var13 = function useAnyOverlayV3(arg1) {
        var3 = _closure1_slot8;
        var2 = undefined;
        var1 = arg1;
        var1 = var3.bind(var2)(var1);
        var1 = var1.overlayV3tech;
        return var1;
    };
    var3['useAnyOverlayV3'] = var13;
    var13 = function isInOverlayNowPlayingExperiment(arg1) {
        var3 = _closure1_slot9;
        var2 = undefined;
        var1 = arg1;
        var1 = var3.bind(var2)(var1);
        var1 = var1.allowNowPlaying;
        return var1;
    };
    var3['isInOverlayNowPlayingExperiment'] = var13;
    var3['OverlayRafManagerExperiment'] = var12;
    var12 = function useOverlayRafManager(arg1) {
        var3 = _closure1_slot1;
        var2 = var3.useExperiment;
        var1 = {};
        var4 = arg1;
        var1['location'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['useOverlayRafManager'] = var12;
    var12 = function getUseOverlayRafManager(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var5 = arguments[1];
            var1 = undefined;
            if(!(var5 === var1)) { _fun0003_ip = 2; continue _fun0003 }
case 3:
            var5 = true;
case 2:
            var4 = _closure1_slot1;
            var3 = var4.getCurrentConfig;
            var2 = {};
            var1 = arg1;
            var2['location'] = var1;
            var1 = {};
            var1['autoTrackExposure'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['getUseOverlayRafManager'] = var12;
    var3['OverlayRenderTimeoutExperiment'] = var11;
    var11 = function getOverlayRenderTimeout(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var5 = arguments[1];
            var1 = undefined;
            if(!(var5 === var1)) { _fun0004_ip = 2; continue _fun0004 }
case 3:
            var5 = true;
case 2:
            var4 = _closure1_slot2;
            var3 = var4.getCurrentConfig;
            var2 = {};
            var1 = arg1;
            var2['location'] = var1;
            var1 = {};
            var1['autoTrackExposure'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['getOverlayRenderTimeout'] = var11;
    var3['OverlayDefaultDisableExperiment'] = var10;
    var10 = function useOverlayDefaultDisable(arg1) {
        var3 = _closure1_slot3;
        var2 = var3.useExperiment;
        var1 = {};
        var4 = arg1;
        var1['location'] = var4;
        var1 = var2.bind(var3)(var1);
        var1 = var1.enabled;
        return var1;
    };
    var3['useOverlayDefaultDisable'] = var10;
    var10 = function getOverlayDefaultDisable(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var5 = arguments[1];
            var1 = undefined;
            if(!(var5 === var1)) { _fun0005_ip = 2; continue _fun0005 }
case 3:
            var5 = true;
case 2:
            var4 = _closure1_slot3;
            var3 = var4.getCurrentConfig;
            var2 = {};
            var1 = arg1;
            var2['location'] = var1;
            var1 = {};
            var1['autoTrackExposure'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            var1 = var1.enabled;
            return var1;
        }
    };
    var3['getOverlayDefaultDisable'] = var10;
    var3['OverlayOOPNudgeExperiment'] = var9;
    var9 = function useOverlayOOPNudge(arg1) {
        var3 = _closure1_slot4;
        var2 = var3.useExperiment;
        var1 = {};
        var4 = arg1;
        var1['location'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['useOverlayOOPNudge'] = var9;
    var9 = function getOverlayOOPNudge(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var5 = arguments[1];
            var1 = undefined;
            if(!(var5 === var1)) { _fun0006_ip = 2; continue _fun0006 }
case 3:
            var5 = true;
case 2:
            var4 = _closure1_slot4;
            var3 = var4.getCurrentConfig;
            var2 = {};
            var1 = arg1;
            var2['location'] = var1;
            var1 = {};
            var1['autoTrackExposure'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['getOverlayOOPNudge'] = var9;
    var3['StreamWatchDesignVariations'] = var8;
    var3['OverlayStreamWatchNudgeExperiment'] = var7;
    var7 = function getOverlayStreamWatchNudgeConfig(arg1) {
        var3 = _closure1_slot5;
        var2 = var3.getConfig;
        var1 = {};
        var4 = arg1;
        var1['location'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['getOverlayStreamWatchNudgeConfig'] = var7;
    var7 = function useOverlayStreamWatchNudge(arg1) {
        var3 = _closure1_slot5;
        var2 = var3.useConfig;
        var1 = {};
        var4 = arg1;
        var1['location'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['useOverlayStreamWatchNudge'] = var7;
    var3['OverlayV3OneClickGoLiveExperiment'] = var6;
    var6 = function getOverlayV3OneClickGoLive(arg1) {
        var3 = _closure1_slot6;
        var2 = var3.getConfig;
        var1 = {};
        var4 = arg1;
        var1['location'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['getOverlayV3OneClickGoLive'] = var6;
    var3['OverlayDefaultKeybindOverrideExperiment'] = var5;
    var4 = function getOverlayDefaultKeybind(arg1) {
        var3 = _closure1_slot7;
        var2 = var3.getConfig;
        var1 = {};
        var4 = arg1;
        var1['location'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['getOverlayDefaultKeybind'] = var4;
    var3['OverlayNegativeWidgetExperiment'] = var2;
    return var1;
})();