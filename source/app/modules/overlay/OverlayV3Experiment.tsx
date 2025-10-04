// app/modules/overlay/OverlayV3Experiment.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var20 = require;
    var3 = exports;
    var21 = dependencyMap;
    var17 = function useOverlayV3(arg1) {
        var3 = _closure1_slot0;
        var2 = var3.useExperiment;
        var1 = {};
        var4 = arg1;
        var1['location'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot9 = var17;
    var16 = function getUseOverlayV3(arg1) {
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
    var _closure1_slot10 = var16;
    var9 = function getOverlayStreamWatchNudgeConfig(arg1) {
        var3 = _closure1_slot5;
        var2 = var3.getConfig;
        var1 = {};
        var4 = arg1;
        var1['location'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot11 = var9;
    var7 = function getOverlayV3OneClickGoLive(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var5 = arguments[1];
            var1 = undefined;
            if(!(var5 === var1)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
            var5 = true;
case 2:
            var4 = _closure1_slot6;
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
    var _closure1_slot12 = var7;
    var4 = function getOverlayNegativeWidgetConfig(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var5 = arguments[1];
            var1 = undefined;
            if(!(var5 === var1)) { _fun0003_ip = 2; continue _fun0003 }
case 3:
            var5 = true;
case 2:
            var4 = _closure1_slot8;
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
    var _closure1_slot13 = var4;
    var1 = global;
    var8 = var1.Object;
    var6 = var8.defineProperty;
    var5 = {};
    var25 = true;
    var5['value'] = var25;
    var1 = '__esModule';
    var1 = var6.bind(var8)(var3, var1, var5);
    var10 = 0;
    var5 = var21[var10];
    var1 = undefined;
    var5 = var20.bind(var1)(var5);
    var22 = var5.CommonTriggerPoints;
    var5 = 1;
    var6 = var21[var5];
    var12 = var20.bind(var1)(var6);
    var11 = var12.createExperiment;
    var8 = {'kind': 'user', 'id': '2024-10_overlay_v3', 'label': 'Overlay V3 Shared Context OOP'};
    var6 = var22.CONNECTION_OPEN;
    var8['commonTriggerPoint'] = var6;
    var23 = false;
    var6 = {'overlayV3tech': false, 'overlayV3UI': false, 'allowActivityWidget': false, 'allowNowPlaying': false};
    var8['defaultConfig'] = var6;
    var6 = {'id': 1, 'label': 'Use Overlay V3, All features included.'};
    var13 = {'overlayV3tech': true, 'overlayV3UI': true, 'allowActivityWidget': true, 'allowNowPlaying': true};
    var6['config'] = var13;
    var13 = new Array(4);
    var13[0] = var6;
    var14 = {'id': 2, 'label': 'Use Overlay V3, Minus "Now Playing" Notif.'};
    var6 = 2;
    var15 = {'overlayV3tech': true, 'overlayV3UI': true, 'allowActivityWidget': true, 'allowNowPlaying': false};
    var14['config'] = var15;
    var13[1] = var14;
    var14 = {'id': 3, 'label': 'Use Overlay V3 minus any activity'};
    var19 = 3;
    var15 = {'overlayV3tech': true, 'overlayV3UI': true, 'allowActivityWidget': false, 'allowNowPlaying': false};
    var14['config'] = var15;
    var13[2] = var14;
    var14 = {'id': 4, 'label': 'Use Overlay V3 tech with Overlay 2 UI'};
    var15 = {'overlayV3tech': true, 'overlayV3UI': false, 'allowActivityWidget': false, 'allowNowPlaying': false};
    var14['config'] = var15;
    var13[3] = var14;
    var8['treatments'] = var13;
    var18 = var11.bind(var12)(var8);
    var _closure1_slot0 = var18;
    var8 = var21[var5];
    var12 = var20.bind(var1)(var8);
    var11 = var12.createExperiment;
    var8 = {'kind': 'user', 'id': '2025-06_overlay_raf_manager', 'label': 'Overlay RAF Manager'};
    var13 = var22.CONNECTION_OPEN;
    var8['commonTriggerPoint'] = var13;
    var13 = {};
    var13['enabled'] = var23;
    var8['defaultConfig'] = var13;
    var14 = {'id': 1, 'label': 'Enable RAF Manager'};
    var13 = {};
    var13['enabled'] = var25;
    var14['config'] = var13;
    var13 = new Array(1);
    var13[0] = var14;
    var8['treatments'] = var13;
    var15 = var11.bind(var12)(var8);
    var _closure1_slot1 = var15;
    var8 = var21[var5];
    var12 = var20.bind(var1)(var8);
    var11 = var12.createExperiment;
    var8 = {'kind': 'user', 'id': '2025-06_overlay_render_timeout', 'label': 'Overlay Render Timeout'};
    var13 = var22.CONNECTION_OPEN;
    var8['commonTriggerPoint'] = var13;
    var13 = {'shortTimeout': 8000, 'longTimeout': 12000};
    var8['defaultConfig'] = var13;
    var14 = {'id': 1, 'label': 'Shortest Timeouts (2s, 3s)'};
    var13 = {'shortTimeout': 2000, 'longTimeout': 3000};
    var14['config'] = var13;
    var13 = new Array(3);
    var13[0] = var14;
    var14 = {'id': 2, 'label': 'Medium Timeouts (4s, 6s)'};
    var24 = {'shortTimeout': 4000, 'longTimeout': 6000};
    var14['config'] = var24;
    var13[1] = var14;
    var14 = {'id': 3, 'label': 'Longer Timeouts (16s, 24s)'};
    var24 = {'shortTimeout': 16000, 'longTimeout': 24000};
    var14['config'] = var24;
    var13[2] = var14;
    var8['treatments'] = var13;
    var14 = var11.bind(var12)(var8);
    var _closure1_slot2 = var14;
    var8 = var21[var5];
    var12 = var20.bind(var1)(var8);
    var11 = var12.createExperiment;
    var8 = {'kind': 'user', 'id': '2025-07_overlay_default_disable', 'label': 'Overlay Default Disable'};
    var13 = var22.CONNECTION_OPEN;
    var8['commonTriggerPoint'] = var13;
    var13 = {};
    var13['enabled'] = var23;
    var8['defaultConfig'] = var13;
    var23 = {'id': 1, 'label': 'Enable Default Disable Behavior'};
    var13 = {};
    var13['enabled'] = var25;
    var23['config'] = var13;
    var13 = new Array(1);
    var13[0] = var23;
    var8['treatments'] = var13;
    var13 = var11.bind(var12)(var8);
    var _closure1_slot3 = var13;
    var8 = var21[var5];
    var12 = var20.bind(var1)(var8);
    var11 = var12.createExperiment;
    var8 = {'kind': 'user', 'id': '2025-07_overlay_oop_nudge', 'label': 'Overlay OOP Nudge'};
    var22 = var22.CONNECTION_OPEN;
    var8['commonTriggerPoint'] = var22;
    var22 = {'useContextualNudge': false, 'disableNudge': false};
    var8['defaultConfig'] = var22;
    var23 = {'id': 1, 'label': 'Enable Contextual Nudge'};
    var22 = {'useContextualNudge': true, 'disableNudge': false};
    var23['config'] = var22;
    var22 = new Array(2);
    var22[0] = var23;
    var23 = {'id': 2, 'label': 'No Nudge'};
    var24 = {'useContextualNudge': false, 'disableNudge': true};
    var23['config'] = var24;
    var22[1] = var23;
    var8['treatments'] = var22;
    var12 = var11.bind(var12)(var8);
    var _closure1_slot4 = var12;
    var11 = {};
    var11['GREEN_BUTTON_WITH_TEXT'] = var10;
    var8 = 'GREEN_BUTTON_WITH_TEXT';
    var11[var10] = var8;
    var11['GRAY_BUTTON_WITH_TEXT'] = var5;
    var8 = 'GRAY_BUTTON_WITH_TEXT';
    var11[var5] = var8;
    var11['SINGLE_ICON_BUTTON'] = var6;
    var8 = 'SINGLE_ICON_BUTTON';
    var11[var6] = var8;
    var8 = var21[var6];
    var22 = var20.bind(var1)(var8);
    var10 = var22.createApexExperiment;
    var8 = {'name': '2025-08-overlay-stream-watch-nudge', 'kind': 'user'};
    var23 = {'enabled': false, 'designVariant': null};
    var8['defaultConfig'] = var23;
    var23 = {};
    var24 = {};
    var24['enabled'] = var25;
    var26 = var11.GREEN_BUTTON_WITH_TEXT;
    var24['designVariant'] = var26;
    var23[1] = var24;
    var24 = {};
    var24['enabled'] = var25;
    var26 = var11.GRAY_BUTTON_WITH_TEXT;
    var24['designVariant'] = var26;
    var23[2] = var24;
    var24 = {};
    var24['enabled'] = var25;
    var25 = var11.SINGLE_ICON_BUTTON;
    var24['designVariant'] = var25;
    var23[3] = var24;
    var8['variations'] = var23;
    var10 = var10.bind(var22)(var8);
    var _closure1_slot5 = var10;
    var8 = var21[var5];
    var23 = var20.bind(var1)(var8);
    var22 = var23.createExperiment;
    var8 = {'kind': 'user', 'id': '2025-10_overlay_v3_one_click_go_live', 'label': 'Overlay V3 One Click Go Live'};
    var24 = {'oneClickGoLiveEnabled': false, 'useStreamCtaCopy': false};
    var8['defaultConfig'] = var24;
    var25 = {'id': 1, 'label': 'Use Stream CTA Copy'};
    var24 = {'oneClickGoLiveEnabled': false, 'useStreamCtaCopy': true};
    var25['config'] = var24;
    var24 = new Array(2);
    var24[0] = var25;
    var25 = {'id': 2, 'label': 'Enable One Click Go Live with Stream CTA Copy'};
    var26 = {'oneClickGoLiveEnabled': true, 'useStreamCtaCopy': true};
    var25['config'] = var26;
    var24[1] = var25;
    var8['treatments'] = var24;
    var8 = var22.bind(var23)(var8);
    var _closure1_slot6 = var8;
    var6 = var21[var6];
    var23 = var20.bind(var1)(var6);
    var22 = var23.createApexExperiment;
    var6 = {'name': '2025-09-overlay-default-keybind', 'kind': 'user'};
    var24 = {};
    var24['keybindOverride'] = var1;
    var6['defaultConfig'] = var24;
    var24 = {};
    var25 = {};
    var26 = 'alt+a';
    var25['keybindOverride'] = var26;
    var24[1] = var25;
    var6['variations'] = var24;
    var6 = var22.bind(var23)(var6);
    var _closure1_slot7 = var6;
    var5 = var21[var5];
    var23 = var20.bind(var1)(var5);
    var22 = var23.createExperiment;
    var5 = {'kind': 'user', 'id': '2025-10_overlay_negative_widget_testing', 'label': 'Overlay Negative Widget Testing'};
    var24 = {'voiceWidgetDefaultUnpinned': false, 'videoWidgetDefaultUnpinned': false, 'disableWelcomeNotification': false, 'notificationsDefaultOff': false, 'unlockedOnlyDefaultOverlay': false};
    var5['defaultConfig'] = var24;
    var25 = {'id': 1, 'label': 'Voice Widget Default Unpinned'};
    var24 = {'voiceWidgetDefaultUnpinned': true, 'videoWidgetDefaultUnpinned': false, 'disableWelcomeNotification': false, 'notificationsDefaultOff': false, 'unlockedOnlyDefaultOverlay': false};
    var25['config'] = var24;
    var24 = new Array(5);
    var24[0] = var25;
    var25 = {'id': 2, 'label': 'Video Widget Default Unpinned'};
    var26 = {'voiceWidgetDefaultUnpinned': false, 'videoWidgetDefaultUnpinned': true, 'disableWelcomeNotification': false, 'notificationsDefaultOff': false, 'unlockedOnlyDefaultOverlay': false};
    var25['config'] = var26;
    var24[1] = var25;
    var25 = {'id': 3, 'label': 'Disable Welcome Notification'};
    var26 = {'voiceWidgetDefaultUnpinned': false, 'videoWidgetDefaultUnpinned': false, 'disableWelcomeNotification': true, 'notificationsDefaultOff': false, 'unlockedOnlyDefaultOverlay': false};
    var25['config'] = var26;
    var24[2] = var25;
    var25 = {'id': 4, 'label': 'Notifications Default Off'};
    var26 = {'voiceWidgetDefaultUnpinned': false, 'videoWidgetDefaultUnpinned': false, 'disableWelcomeNotification': false, 'notificationsDefaultOff': true, 'unlockedOnlyDefaultOverlay': false};
    var25['config'] = var26;
    var24[3] = var25;
    var25 = {'id': 5, 'label': 'Unlocked Only Default Overlay'};
    var26 = {'voiceWidgetDefaultUnpinned': false, 'videoWidgetDefaultUnpinned': false, 'disableWelcomeNotification': false, 'notificationsDefaultOff': false, 'unlockedOnlyDefaultOverlay': true};
    var25['config'] = var26;
    var24[4] = var25;
    var5['treatments'] = var24;
    var5 = var22.bind(var23)(var5);
    var _closure1_slot8 = var5;
    var19 = var21[var19];
    var21 = var20.bind(var1)(var19);
    var20 = var21.fileFinishedImporting;
    var19 = 'modules/overlay/OverlayV3Experiment.tsx';
    var19 = var20.bind(var21)(var19);
    var3['OverlayV3Experiment'] = var18;
    var3['useOverlayV3'] = var17;
    var3['getUseOverlayV3'] = var16;
    var16 = function getUseAnyOverlayV3(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var4 = arguments[1];
            var3 = undefined;
            if(!(var4 === var3)) { _fun0004_ip = 2; continue _fun0004 }
case 3:
            var4 = true;
case 2:
            var2 = _closure1_slot10;
            var1 = arg1;
            var1 = var2.bind(var3)(var1, var4);
            var1 = var1.overlayV3tech;
            return var1;
        }
    };
    var3['getUseAnyOverlayV3'] = var16;
    var16 = function useAnyOverlayV3(arg1) {
        var3 = _closure1_slot9;
        var2 = undefined;
        var1 = arg1;
        var1 = var3.bind(var2)(var1);
        var1 = var1.overlayV3tech;
        return var1;
    };
    var3['useAnyOverlayV3'] = var16;
    var16 = function isInOverlayNowPlayingExperiment(arg1) {
        var3 = _closure1_slot10;
        var2 = undefined;
        var1 = arg1;
        var1 = var3.bind(var2)(var1);
        var1 = var1.allowNowPlaying;
        return var1;
    };
    var3['isInOverlayNowPlayingExperiment'] = var16;
    var3['OverlayRafManagerExperiment'] = var15;
    var15 = function useOverlayRafManager(arg1) {
        var3 = _closure1_slot1;
        var2 = var3.useExperiment;
        var1 = {};
        var4 = arg1;
        var1['location'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['useOverlayRafManager'] = var15;
    var15 = function getUseOverlayRafManager(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var5 = arguments[1];
            var1 = undefined;
            if(!(var5 === var1)) { _fun0005_ip = 2; continue _fun0005 }
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
    var3['getUseOverlayRafManager'] = var15;
    var3['OverlayRenderTimeoutExperiment'] = var14;
    var14 = function getOverlayRenderTimeout(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var5 = arguments[1];
            var1 = undefined;
            if(!(var5 === var1)) { _fun0006_ip = 2; continue _fun0006 }
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
    var3['getOverlayRenderTimeout'] = var14;
    var3['OverlayDefaultDisableExperiment'] = var13;
    var13 = function useOverlayDefaultDisable(arg1) {
        var3 = _closure1_slot3;
        var2 = var3.useExperiment;
        var1 = {};
        var4 = arg1;
        var1['location'] = var4;
        var1 = var2.bind(var3)(var1);
        var1 = var1.enabled;
        return var1;
    };
    var3['useOverlayDefaultDisable'] = var13;
    var13 = function getOverlayDefaultDisable(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var5 = arguments[1];
            var1 = undefined;
            if(!(var5 === var1)) { _fun0007_ip = 2; continue _fun0007 }
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
    var3['getOverlayDefaultDisable'] = var13;
    var3['OverlayOOPNudgeExperiment'] = var12;
    var12 = function useOverlayOOPNudge(arg1) {
        var3 = _closure1_slot4;
        var2 = var3.useExperiment;
        var1 = {};
        var4 = arg1;
        var1['location'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['useOverlayOOPNudge'] = var12;
    var12 = function getOverlayOOPNudge(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var5 = arguments[1];
            var1 = undefined;
            if(!(var5 === var1)) { _fun0008_ip = 2; continue _fun0008 }
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
    var3['getOverlayOOPNudge'] = var12;
    var3['StreamWatchDesignVariations'] = var11;
    var3['OverlayStreamWatchNudgeExperiment'] = var10;
    var3['getOverlayStreamWatchNudgeConfig'] = var9;
    var9 = function useOverlayStreamWatchNudge(arg1) {
        var3 = _closure1_slot5;
        var2 = var3.useConfig;
        var1 = {};
        var4 = arg1;
        var1['location'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['useOverlayStreamWatchNudge'] = var9;
    var3['OverlayV3OneClickGoLiveExperiment'] = var8;
    var3['getOverlayV3OneClickGoLive'] = var7;
    var3['OverlayDefaultKeybindOverrideExperiment'] = var6;
    var6 = function getOverlayDefaultKeybind(arg1) {
        var3 = _closure1_slot7;
        var2 = var3.getConfig;
        var1 = {};
        var4 = arg1;
        var1['location'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['getOverlayDefaultKeybind'] = var6;
    var3['OverlayNegativeWidgetExperiment'] = var5;
    var3['getOverlayNegativeWidgetConfig'] = var4;
    var4 = function useOverlayNegativeWidget(arg1) {
        var3 = _closure1_slot8;
        var2 = var3.useExperiment;
        var1 = {};
        var4 = arg1;
        var1['location'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['useOverlayNegativeWidget'] = var4;
    var2 = function trackOverlayInitializedExperiments() {
        var4 = _closure1_slot11;
        var1 = undefined;
        var3 = 'OVERLAY_INITIALIZED';
        var4 = var4.bind(var1)(var3);
        var4 = _closure1_slot12;
        var4 = var4.bind(var1)(var3);
        var2 = _closure1_slot13;
        var2 = var2.bind(var1)(var3);
        return var1;
    };
    var3['trackOverlayInitializedExperiments'] = var2;
    return var1;
})();