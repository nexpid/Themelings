// app/modules/overlay/OverlayV3Experiment.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var23 = require;
    var3 = exports;
    var24 = dependencyMap;
    var1 = metroImportDefault;
    var _closure1_slot0 = var1;
    var _closure1_slot1 = var24;
    var20 = function useOverlayV3(arg1) {
        var3 = _closure1_slot2;
        var2 = var3.useExperiment;
        var1 = {};
        var4 = arg1;
        var1['location'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot12 = var20;
    var19 = function getUseOverlayV3(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arguments[1];
            var1 = undefined;
            if(!(var5 === var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = false;
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
    var _closure1_slot13 = var19;
    var13 = function getOverlayStreamWatchNudgeConfig(arg1) {
        var3 = _closure1_slot6;
        var2 = var3.getConfig;
        var1 = {};
        var4 = arg1;
        var1['location'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot14 = var13;
    var11 = function getOverlayV3OneClickGoLive(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var5 = arguments[1];
            var1 = undefined;
            if(!(var5 === var1)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
            var5 = true;
case 2:
            var4 = _closure1_slot7;
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
    var _closure1_slot15 = var11;
    var8 = function getOverlayNegativeWidgetConfig(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var5 = arguments[1];
            var1 = undefined;
            if(!(var5 === var1)) { _fun0003_ip = 2; continue _fun0003 }
case 3:
            var5 = true;
case 2:
            var4 = _closure1_slot9;
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
    var _closure1_slot16 = var8;
    var6 = function getOverlayWelcomeNotificationConfig(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var5 = arguments[1];
            var1 = undefined;
            if(!(var5 === var1)) { _fun0004_ip = 2; continue _fun0004 }
case 3:
            var5 = true;
case 2:
            var4 = _closure1_slot10;
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
    var _closure1_slot17 = var6;
    var4 = function getOverlayBugReporterConfig(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var5 = arguments[1];
            var1 = undefined;
            if(!(var5 === var1)) { _fun0005_ip = 2; continue _fun0005 }
case 3:
            var5 = true;
case 2:
            var4 = _closure1_slot11;
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
    var _closure1_slot18 = var4;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var5 = {};
    var29 = true;
    var5['value'] = var29;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var5);
    var10 = 0;
    var5 = var24[var10];
    var1 = undefined;
    var5 = var23.bind(var1)(var5);
    var15 = var5.CommonTriggerPoints;
    var5 = 1;
    var7 = var24[var5];
    var14 = var23.bind(var1)(var7);
    var12 = var14.createExperiment;
    var9 = {'kind': 'user', 'id': '2024-10_overlay_v3', 'label': 'Overlay V3 Shared Context OOP'};
    var7 = var15.CONNECTION_OPEN;
    var9['commonTriggerPoint'] = var7;
    var28 = false;
    var7 = {'overlayV3tech': false, 'overlayV3UI': false, 'allowActivityWidget': false, 'allowNowPlaying': false};
    var9['defaultConfig'] = var7;
    var7 = {'id': 1, 'label': 'Use Overlay V3, All features included.'};
    var16 = {'overlayV3tech': true, 'overlayV3UI': true, 'allowActivityWidget': true, 'allowNowPlaying': true};
    var7['config'] = var16;
    var16 = new Array(4);
    var16[0] = var7;
    var17 = {'id': 2, 'label': 'Use Overlay V3, Minus "Now Playing" Notif.'};
    var7 = 2;
    var18 = {'overlayV3tech': true, 'overlayV3UI': true, 'allowActivityWidget': true, 'allowNowPlaying': false};
    var17['config'] = var18;
    var16[1] = var17;
    var17 = {'id': 3, 'label': 'Use Overlay V3 minus any activity'};
    var18 = {'overlayV3tech': true, 'overlayV3UI': true, 'allowActivityWidget': false, 'allowNowPlaying': false};
    var17['config'] = var18;
    var16[2] = var17;
    var17 = {'id': 4, 'label': 'Use Overlay V3 tech with Overlay 2 UI'};
    var22 = 4;
    var18 = {'overlayV3tech': true, 'overlayV3UI': false, 'allowActivityWidget': false, 'allowNowPlaying': false};
    var17['config'] = var18;
    var16[3] = var17;
    var9['treatments'] = var16;
    var21 = var12.bind(var14)(var9);
    var _closure1_slot2 = var21;
    var9 = var24[var5];
    var14 = var23.bind(var1)(var9);
    var12 = var14.createExperiment;
    var9 = {'kind': 'user', 'id': '2025-06_overlay_raf_manager', 'label': 'Overlay RAF Manager'};
    var16 = var15.CONNECTION_OPEN;
    var9['commonTriggerPoint'] = var16;
    var16 = {};
    var16['enabled'] = var28;
    var9['defaultConfig'] = var16;
    var17 = {'id': 1, 'label': 'Enable RAF Manager'};
    var16 = {};
    var16['enabled'] = var29;
    var17['config'] = var16;
    var16 = new Array(1);
    var16[0] = var17;
    var9['treatments'] = var16;
    var18 = var12.bind(var14)(var9);
    var _closure1_slot3 = var18;
    var9 = var24[var5];
    var14 = var23.bind(var1)(var9);
    var12 = var14.createExperiment;
    var9 = {'kind': 'user', 'id': '2025-06_overlay_render_timeout', 'label': 'Overlay Render Timeout'};
    var16 = var15.CONNECTION_OPEN;
    var9['commonTriggerPoint'] = var16;
    var16 = {'shortTimeout': 8000, 'longTimeout': 12000};
    var9['defaultConfig'] = var16;
    var17 = {'id': 1, 'label': 'Shortest Timeouts (2s, 3s)'};
    var16 = {'shortTimeout': 2000, 'longTimeout': 3000};
    var17['config'] = var16;
    var16 = new Array(3);
    var16[0] = var17;
    var17 = {'id': 2, 'label': 'Medium Timeouts (4s, 6s)'};
    var25 = {'shortTimeout': 4000, 'longTimeout': 6000};
    var17['config'] = var25;
    var16[1] = var17;
    var17 = {'id': 3, 'label': 'Longer Timeouts (16s, 24s)'};
    var25 = {'shortTimeout': 16000, 'longTimeout': 24000};
    var17['config'] = var25;
    var16[2] = var17;
    var9['treatments'] = var16;
    var17 = var12.bind(var14)(var9);
    var _closure1_slot4 = var17;
    var9 = var24[var5];
    var14 = var23.bind(var1)(var9);
    var12 = var14.createExperiment;
    var9 = {'kind': 'user', 'id': '2025-07_overlay_default_disable', 'label': 'Overlay Default Disable'};
    var15 = var15.CONNECTION_OPEN;
    var9['commonTriggerPoint'] = var15;
    var15 = {};
    var15['enabled'] = var28;
    var9['defaultConfig'] = var15;
    var16 = {'id': 1, 'label': 'Enable Default Disable Behavior'};
    var15 = {};
    var15['enabled'] = var29;
    var16['config'] = var15;
    var15 = new Array(1);
    var15[0] = var16;
    var9['treatments'] = var15;
    var16 = var12.bind(var14)(var9);
    var _closure1_slot5 = var16;
    var15 = {};
    var15['GREEN_BUTTON_WITH_TEXT'] = var10;
    var9 = 'GREEN_BUTTON_WITH_TEXT';
    var15[var10] = var9;
    var15['GRAY_BUTTON_WITH_TEXT'] = var5;
    var9 = 'GRAY_BUTTON_WITH_TEXT';
    var15[var5] = var9;
    var15['SINGLE_ICON_BUTTON'] = var7;
    var9 = 'SINGLE_ICON_BUTTON';
    var15[var7] = var9;
    var7 = var24[var7];
    var10 = var23.bind(var1)(var7);
    var9 = var10.createApexExperiment;
    var7 = {'name': '2025-08-overlay-stream-watch-nudge', 'kind': 'user'};
    var12 = {'enabled': false, 'designVariant': null};
    var7['defaultConfig'] = var12;
    var12 = {};
    var14 = {};
    var14['enabled'] = var29;
    var25 = var15.GREEN_BUTTON_WITH_TEXT;
    var14['designVariant'] = var25;
    var12[1] = var14;
    var14 = {};
    var14['enabled'] = var29;
    var25 = var15.GRAY_BUTTON_WITH_TEXT;
    var14['designVariant'] = var25;
    var12[2] = var14;
    var14 = {};
    var14['enabled'] = var29;
    var25 = var15.SINGLE_ICON_BUTTON;
    var14['designVariant'] = var25;
    var12[3] = var14;
    var7['variations'] = var12;
    var14 = var9.bind(var10)(var7);
    var _closure1_slot6 = var14;
    var7 = var24[var5];
    var10 = var23.bind(var1)(var7);
    var9 = var10.createExperiment;
    var7 = {'kind': 'user', 'id': '2025-10_overlay_v3_one_click_go_live', 'label': 'Overlay V3 One Click Go Live'};
    var12 = {'oneClickGoLiveEnabled': false, 'useStreamCtaCopy': false};
    var7['defaultConfig'] = var12;
    var25 = {'id': 1, 'label': 'Use Stream CTA Copy'};
    var12 = {'oneClickGoLiveEnabled': false, 'useStreamCtaCopy': true};
    var25['config'] = var12;
    var12 = new Array(2);
    var12[0] = var25;
    var25 = {'id': 2, 'label': 'Enable One Click Go Live with Stream CTA Copy'};
    var26 = {'oneClickGoLiveEnabled': true, 'useStreamCtaCopy': true};
    var25['config'] = var26;
    var12[1] = var25;
    var7['treatments'] = var12;
    var12 = var9.bind(var10)(var7);
    var _closure1_slot7 = var12;
    var7 = var24[var5];
    var10 = var23.bind(var1)(var7);
    var9 = var10.createExperiment;
    var7 = {'id': '2025-10_overlay_default_keybind', 'label': 'Overlay Default Keybind', 'kind': 'user'};
    var25 = {};
    var25['keybindOverride'] = var1;
    var7['defaultConfig'] = var25;
    var26 = {'id': 1, 'label': 'Ctrl + Tab Keybind'};
    var25 = {};
    var27 = 'ctrl+tab';
    var25['keybindOverride'] = var27;
    var26['config'] = var25;
    var25 = new Array(3);
    var25[0] = var26;
    var26 = {'id': 2, 'label': 'Alt + X Keybind'};
    var27 = {};
    var30 = 'alt+x';
    var27['keybindOverride'] = var30;
    var26['config'] = var27;
    var25[1] = var26;
    var26 = {'id': 3, 'label': 'Ctrl + L Keybind'};
    var27 = {};
    var30 = 'ctrl+l';
    var27['keybindOverride'] = var30;
    var26['config'] = var27;
    var25[2] = var26;
    var7['treatments'] = var25;
    var10 = var9.bind(var10)(var7);
    var _closure1_slot8 = var10;
    var7 = var24[var5];
    var25 = var23.bind(var1)(var7);
    var9 = var25.createExperiment;
    var7 = {'kind': 'user', 'id': '2025-10_overlay_negative_widget_testing', 'label': 'Overlay Negative Widget Testing'};
    var26 = {'voiceWidgetDefaultUnpinned': false, 'videoWidgetDefaultUnpinned': false, 'disableWelcomeNotification': false, 'notificationsDefaultOff': false, 'unlockedOnlyDefaultOverlay': false};
    var7['defaultConfig'] = var26;
    var27 = {'id': 1, 'label': 'Voice Widget Default Unpinned'};
    var26 = {'voiceWidgetDefaultUnpinned': true, 'videoWidgetDefaultUnpinned': false, 'disableWelcomeNotification': false, 'notificationsDefaultOff': false, 'unlockedOnlyDefaultOverlay': false};
    var27['config'] = var26;
    var26 = new Array(5);
    var26[0] = var27;
    var27 = {'id': 2, 'label': 'Video Widget Default Unpinned'};
    var30 = {'voiceWidgetDefaultUnpinned': false, 'videoWidgetDefaultUnpinned': true, 'disableWelcomeNotification': false, 'notificationsDefaultOff': false, 'unlockedOnlyDefaultOverlay': false};
    var27['config'] = var30;
    var26[1] = var27;
    var27 = {'id': 3, 'label': 'Disable Welcome Notification'};
    var30 = {'voiceWidgetDefaultUnpinned': false, 'videoWidgetDefaultUnpinned': false, 'disableWelcomeNotification': true, 'notificationsDefaultOff': false, 'unlockedOnlyDefaultOverlay': false};
    var27['config'] = var30;
    var26[2] = var27;
    var27 = {'id': 4, 'label': 'Notifications Default Off'};
    var30 = {'voiceWidgetDefaultUnpinned': false, 'videoWidgetDefaultUnpinned': false, 'disableWelcomeNotification': false, 'notificationsDefaultOff': true, 'unlockedOnlyDefaultOverlay': false};
    var27['config'] = var30;
    var26[3] = var27;
    var27 = {'id': 5, 'label': 'Unlocked Only Default Overlay'};
    var30 = {'voiceWidgetDefaultUnpinned': false, 'videoWidgetDefaultUnpinned': false, 'disableWelcomeNotification': false, 'notificationsDefaultOff': false, 'unlockedOnlyDefaultOverlay': true};
    var27['config'] = var30;
    var26[4] = var27;
    var7['treatments'] = var26;
    var9 = var9.bind(var25)(var7);
    var _closure1_slot9 = var9;
    var7 = var24[var5];
    var26 = var23.bind(var1)(var7);
    var25 = var26.createExperiment;
    var7 = {'id': '2025-11_overlay_welcome_notification', 'label': 'Overlay Welcome Notification', 'kind': 'user'};
    var27 = {};
    var27['enabled'] = var28;
    var7['defaultConfig'] = var27;
    var30 = {'id': 1, 'label': 'Modular Experience'};
    var27 = {};
    var27['enabled'] = var29;
    var30['config'] = var27;
    var27 = new Array(1);
    var27[0] = var30;
    var7['treatments'] = var27;
    var7 = var25.bind(var26)(var7);
    var _closure1_slot10 = var7;
    var5 = var24[var5];
    var26 = var23.bind(var1)(var5);
    var25 = var26.createExperiment;
    var5 = {'id': '2025-11_overlay_bug_reporter', 'label': 'Overlay Bug Reporter', 'kind': 'user'};
    var27 = {};
    var27['enabled'] = var28;
    var5['defaultConfig'] = var27;
    var28 = {'id': 1, 'label': 'Enable Bug Reporter'};
    var27 = {};
    var27['enabled'] = var29;
    var28['config'] = var27;
    var27 = new Array(1);
    var27[0] = var28;
    var5['treatments'] = var27;
    var5 = var25.bind(var26)(var5);
    var _closure1_slot11 = var5;
    var22 = var24[var22];
    var24 = var23.bind(var1)(var22);
    var23 = var24.fileFinishedImporting;
    var22 = 'modules/overlay/OverlayV3Experiment.tsx';
    var22 = var23.bind(var24)(var22);
    var3['OverlayV3Experiment'] = var21;
    var3['useOverlayV3'] = var20;
    var3['getUseOverlayV3'] = var19;
    var19 = function getUseAnyOverlayV3(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var4 = arguments[1];
            var3 = undefined;
            if(!(var4 === var3)) { _fun0006_ip = 2; continue _fun0006 }
case 3:
            var4 = true;
case 2:
            var2 = _closure1_slot13;
            var1 = arg1;
            var1 = var2.bind(var3)(var1, var4);
            var1 = var1.overlayV3tech;
            return var1;
        }
    };
    var3['getUseAnyOverlayV3'] = var19;
    var19 = function useAnyOverlayV3(arg1) {
        var3 = _closure1_slot12;
        var2 = undefined;
        var1 = arg1;
        var1 = var3.bind(var2)(var1);
        var1 = var1.overlayV3tech;
        return var1;
    };
    var3['useAnyOverlayV3'] = var19;
    var19 = function isInOverlayNowPlayingExperiment(arg1) {
        var3 = _closure1_slot13;
        var2 = undefined;
        var1 = arg1;
        var1 = var3.bind(var2)(var1);
        var1 = var1.allowNowPlaying;
        return var1;
    };
    var3['isInOverlayNowPlayingExperiment'] = var19;
    var3['OverlayRafManagerExperiment'] = var18;
    var18 = function useOverlayRafManager(arg1) {
        var3 = _closure1_slot3;
        var2 = var3.useExperiment;
        var1 = {};
        var4 = arg1;
        var1['location'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['useOverlayRafManager'] = var18;
    var18 = function getUseOverlayRafManager(arg1) {
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
            return var1;
        }
    };
    var3['getUseOverlayRafManager'] = var18;
    var3['OverlayRenderTimeoutExperiment'] = var17;
    var17 = function getOverlayRenderTimeout(arg1) {
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
    var3['getOverlayRenderTimeout'] = var17;
    var3['OverlayDefaultDisableExperiment'] = var16;
    var16 = function useOverlayDefaultDisable(arg1) {
        var3 = _closure1_slot5;
        var2 = var3.useExperiment;
        var1 = {};
        var4 = arg1;
        var1['location'] = var4;
        var1 = var2.bind(var3)(var1);
        var1 = var1.enabled;
        return var1;
    };
    var3['useOverlayDefaultDisable'] = var16;
    var16 = function getOverlayDefaultDisable(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var5 = arguments[1];
            var1 = undefined;
            if(!(var5 === var1)) { _fun0009_ip = 2; continue _fun0009 }
case 3:
            var5 = true;
case 2:
            var4 = _closure1_slot5;
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
    var3['getOverlayDefaultDisable'] = var16;
    var3['StreamWatchDesignVariations'] = var15;
    var3['OverlayStreamWatchNudgeExperiment'] = var14;
    var3['getOverlayStreamWatchNudgeConfig'] = var13;
    var13 = function useOverlayStreamWatchNudge(arg1) {
        var3 = _closure1_slot6;
        var2 = var3.useConfig;
        var1 = {};
        var4 = arg1;
        var1['location'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['useOverlayStreamWatchNudge'] = var13;
    var3['OverlayV3OneClickGoLiveExperiment'] = var12;
    var3['getOverlayV3OneClickGoLive'] = var11;
    var3['OverlayDefaultKeybindOverrideExperiment'] = var10;
    var10 = function getOverlayDefaultKeybind(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var5 = arguments[1];
            var1 = undefined;
            if(!(var5 === var1)) { _fun0010_ip = 2; continue _fun0010 }
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
    var3['getOverlayDefaultKeybind'] = var10;
    var3['OverlayNegativeWidgetExperiment'] = var9;
    var9 = function getOverlayNegativeWidgetExperimentBucket(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var5 = _closure1_slot16;
            var6 = undefined;
            var4 = arg1;
            var3 = false;
            var5 = var5.bind(var6)(var4, var3);
            var _closure2_slot0 = var5;
            var4 = _closure1_slot0;
            var7 = _closure1_slot1;
            var3 = 3;
            var3 = var7[var3];
            var4 = var4.bind(var6)(var3);
            var3 = _closure1_slot9;
            var3 = var3.definition;
            var3 = var3.defaultConfig;
            var3 = var4.bind(var6)(var3, var5);
            if(var3) { _fun0011_ip = 4; continue _fun0011 }
case 5:
            var2 = _closure1_slot9;
            var2 = var2.definition;
            var3 = var2.treatments;
            var2 = var3.find;
            var1 = function(arg1) {
                var2 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 3;
                var1 = var3[var1];
                var4 = undefined;
                var3 = var2.bind(var4)(var1);
                var1 = arg1;
                var2 = var1.config;
                var1 = _closure2_slot0;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var2 = var2.bind(var3)(var1);
            var1 = null;
            var3 = var1 == var2;
            var1 = 'control';
            if(var3) { _fun0011_ip = 6; continue _fun0011 }
case 7:
            var4 = var2.id;
            var2 = global;
            var2 = var2.HermesInternal;
            var3 = var2.concat;
            var2 = 'treatment-';
            var1 = var3.bind(var2)(var4);
case 6:
            return var1;
case 4:
            var1 = 'control';
            return var1;
        }
    };
    var3['getOverlayNegativeWidgetExperimentBucket'] = var9;
    var3['getOverlayNegativeWidgetConfig'] = var8;
    var3['OverlayWelcomeNotificationExperiment'] = var7;
    var3['getOverlayWelcomeNotificationConfig'] = var6;
    var3['OverlayBugReporterExperiment'] = var5;
    var3['getOverlayBugReporterConfig'] = var4;
    var4 = function useOverlayBugReporter(arg1) {
        var3 = _closure1_slot11;
        var2 = var3.useExperiment;
        var1 = {};
        var4 = arg1;
        var1['location'] = var4;
        var1 = var2.bind(var3)(var1);
        var1 = var1.enabled;
        return var1;
    };
    var3['useOverlayBugReporter'] = var4;
    var2 = function trackOverlayInitializedExperiments() {
        var4 = _closure1_slot14;
        var1 = undefined;
        var3 = 'OVERLAY_INITIALIZED';
        var4 = var4.bind(var1)(var3);
        var4 = _closure1_slot15;
        var4 = var4.bind(var1)(var3);
        var4 = _closure1_slot16;
        var4 = var4.bind(var1)(var3);
        var4 = _closure1_slot17;
        var4 = var4.bind(var1)(var3);
        var2 = _closure1_slot18;
        var2 = var2.bind(var1)(var3);
        return var1;
    };
    var3['trackOverlayInitializedExperiments'] = var2;
    return var1;
})();