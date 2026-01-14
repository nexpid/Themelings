// app/modules/frames/native/FrameView.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var4 = 2;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.FrameLayoutModes;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ActivityPlatform;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot8 = var4;
    var4 = var7.memo;
    var2 = function FrameViewInner(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var14 = var1.layoutMode;
            var _closure2_slot0 = var14;
            var8 = var1.portraitSafeAreasConfig;
            var9 = var1.landscapeSafeAreasConfig;
            var5 = undefined;
            var _closure2_slot2 = var5;
            var _closure2_slot3 = var5;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var4 = 6;
            var1 = var3[var4];
            var10 = var2.bind(var5)(var1);
            var7 = var10.useStateFromStores;
            var1 = _closure1_slot5;
            var6 = new Array(1);
            var6[0] = var1;
            var1 = function() {
                var2 = _closure1_slot5;
                var1 = var2.getConnectedFrame;
                var1 = var1.bind(var2)();
                return var1;
            };
            var18 = var7.bind(var10)(var6, var1);
            var _closure2_slot1 = var18;
            var1 = 7;
            var1 = var3[var1];
            var6 = var2.bind(var5)(var1);
            var3 = var6.useApplication;
            var1 = null;
            var7 = var1 == var18;
            var2 = undefined;
            if(var7) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var18.applicationId;
case 2:
            var2 = var3.bind(var6)(var2);
            var17 = var2.data;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var4];
            var7 = var3.bind(var5)(var2);
            var6 = var7.useStateFromStores;
            var2 = _closure1_slot5;
            var4 = new Array(1);
            var4[0] = var2;
            var3 = new Array(1);
            var3[0] = var18;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var1 = null;
                    var3 = var1 != var3;
                    var1 = undefined;
                    if(!var3) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var4 = _closure1_slot5;
                    var3 = var4.getOrientationLockStateForApp;
                    var2 = _closure2_slot1;
                    var2 = var2.applicationId;
                    var1 = var3.bind(var4)(var2);
case 4:
                    return var1;
                }
            };
            var16 = var6.bind(var7)(var4, var2, var3);
            var7 = _closure1_slot4;
            var3 = var7.useState;
            var2 = true;
            var4 = var3.bind(var7)(var2);
            var3 = _closure1_slot3;
            var2 = 2;
            var4 = var3.bind(var5)(var4, var2);
            var2 = 0;
            var2 = var4[var2];
            var3 = 1;
            var10 = var4[var3];
            var6 = var7.useLayoutEffect;
            var4 = new Array(1);
            var4[0] = var14;
            var3 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 8;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.dispatch;
                    var1 = {};
                    var5 = 'FRAME_UPDATE_LAYOUT_MODE';
                    var1['type'] = var5;
                    var5 = _closure2_slot0;
                    var1['layoutMode'] = var5;
                    var4 = _closure2_slot1;
                    var4 = var4.applicationId;
                    var1['applicationId'] = var4;
                    var1 = var2.bind(var3)(var1);
case 6:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var6.bind(var7)(var3, var4);
            var3 = var1 == var18;
            var19 = undefined;
            if(var3) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var19 = var18.applicationId;
case 8:
            _closure2_slot2 = var19;
            var7 = _closure1_slot4;
            var6 = var7.useCallback;
            var4 = new Array(1);
            var4[0] = var19;
            var3 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var2 = _closure2_slot2;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0004_ip = 10; continue _fun0004 }
case 7:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 9;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.leaveFrame;
                    var1 = {};
                    var4 = _closure2_slot2;
                    var1['applicationId'] = var4;
                    var1 = var2.bind(var3)(var1);
case 10:
                    var1 = undefined;
                    return var1;
                }
            };
            var15 = var6.bind(var7)(var3, var4);
            var7 = var1 == var18;
            if(var7) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var7 = var2;
case 11:
            if(var7) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var7 = var1 == var19;
case 13:
            if(var7) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var7 = var1 == var17;
case 15:
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var2 = 10;
            var3 = var13[var2];
            var6 = var12.bind(var5)(var3);
            var4 = var6.useBaseActivityView;
            var3 = {};
            var3['orientationLockState'] = var16;
            var3['showLoadingIndicator'] = var7;
            var3['setShowLoadingStateForLockingOrientation'] = var10;
            var3['application'] = var17;
            var10 = 11;
            var10 = var13[var10];
            var10 = var12.bind(var5)(var10);
            var10 = var10.setOrientationLockState;
            var3['setOrientationLockState'] = var10;
            var3 = var4.bind(var6)(var3);
            var6 = var3.isResetting;
            var4 = var3.setIsResetting;
            _closure2_slot3 = var4;
            var10 = var3.isLandscape;
            if(!(var1 != var18)) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var16 = {};
            var3 = 'example-cl-instance';
            var16['instance_id'] = var3;
            var3 = _closure1_slot7;
            var3 = var3.MOBILE;
            var16['platform'] = var3;
            var3 = var18.proxyTicket;
            if(!(var1 != var3)) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var3 = var18.proxyTicket;
            var16['discord_proxy_ticket'] = var3;
case 19:
            var4 = _closure1_slot8;
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var2 = var13[var2];
            var2 = var12.bind(var5)(var2);
            var3 = var2.BaseActivityView;
            var2 = {};
            var21 = 'FrameActivities';
            var2['wakeLockKey'] = var21;
            var2['showLoadingIndicator'] = var7;
            var2['isResetting'] = var6;
            var7 = _closure1_slot1;
            var6 = 12;
            var6 = var13[var6];
            var7 = var7.bind(var5)(var6);
            var6 = {};
            var20 = function onActivityCrash() {
                var3 = _closure2_slot3;
                var1 = undefined;
                var2 = true;
                var2 = var3.bind(var1)(var2);
                var2 = global;
                var4 = var2.setTimeout;
                var3 = function() {
                    var3 = _closure2_slot3;
                    var2 = undefined;
                    var1 = false;
                    var1 = var3.bind(var2)(var1);
                    return var1;
                };
                var2 = 0;
                var2 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var6['onActivityCrash'] = var20;
            var6['applicationId'] = var19;
            var18 = var18.url;
            var6['activityUrl'] = var18;
            var6['queryParams'] = var16;
            var6['onLoadError'] = var15;
            var15 = 13;
            var15 = var13[var15];
            var16 = var12.bind(var5)(var15);
            var15 = var16.allowPopups;
            var15 = var15.bind(var16)(var17);
            var6['allowPopups'] = var15;
            var15 = 'origin';
            var6['referrerPolicy'] = var15;
            var11 = _closure1_slot6;
            var11 = var11.PIP;
            var11 = var14 === var11;
            var6['isPipOrGridMode'] = var11;
            var11 = 9;
            var11 = var13[var11];
            var11 = var12.bind(var5)(var11);
            var11 = var11.FRAME_WEB_VIEW_KEY;
            var6['webViewKey'] = var11;
            if(!var10) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var8 = var9;
case 21:
            var6['safeAreasConfig'] = var8;
            var6 = var4.bind(var5)(var7, var6);
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
case 17:
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 14;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/frames/native/FrameView.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    var3['FrameView'] = var2;
    return var1;
})();