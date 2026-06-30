// app/modules/nuf/native/components/notification/PostCallDisconnectNudge.tsx
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
    var8 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.PermissionPromptType;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.EventActionLocation;
    var _closure1_slot8 = var7;
    var4 = var4.NotificationNudgeSurface;
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot10 = var4;
    var4 = {};
    var7 = 604800000;
    var4['cooldownDurationMs'] = var7;
    var _closure1_slot11 = var4;
    var4 = 18;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/nuf/native/components/notification/PostCallDisconnectNudge.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function PostCallDisconnectNudge(arg1) {
        var1 = arg1;
        var6 = var1.markAsDismissed;
        var5 = var1.onHide;
        var4 = _closure1_slot10;
        var2 = _closure1_slot1;
        var12 = _closure1_slot2;
        var1 = 7;
        var1 = var12[var1];
        var3 = undefined;
        var2 = var2.bind(var3)(var1);
        var1 = {};
        var11 = _closure1_slot0;
        var8 = 8;
        var9 = var12[var8];
        var9 = var11.bind(var3)(var9);
        var13 = var9.intl;
        var10 = var13.string;
        var9 = var12[var8];
        var9 = var11.bind(var3)(var9);
        var9 = var9.t;
        var9 = var9.pJbYq1;
        var9 = var10.bind(var13)(var9);
        var1['title'] = var9;
        var9 = var12[var8];
        var9 = var11.bind(var3)(var9);
        var10 = var9.intl;
        var9 = var10.string;
        var8 = var12[var8];
        var8 = var11.bind(var3)(var8);
        var8 = var8.t;
        var8 = var8.vegtFT;
        var8 = var9.bind(var10)(var8);
        var1['body'] = var8;
        var8 = _closure1_slot8;
        var8 = var8.CALL_DISCONNECT;
        var1['actionLocation'] = var8;
        var7 = _closure1_slot9;
        var7 = var7.CALL_DISCONNECT_BOTTOM_SHEET;
        var1['surface'] = var7;
        var1['markAsDismissed'] = var6;
        var1['onHide'] = var5;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var3['default'] = var4;
    var4 = 'post-call-disconnect-nudge-key';
    var3['POST_CALL_DISCONNECT_NUDGE_KEY'] = var4;
    var2 = function usePostCallDisconnectNudge() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = _closure1_slot1;
            var10 = _closure1_slot2;
            var1 = 9;
            var4 = var10[var1];
            var1 = undefined;
            var6 = var5.bind(var1)(var4);
            var5 = var6.useConfig;
            var4 = {};
            var7 = 'usePostCallDisconnectNudge';
            var4['location'] = var7;
            var4 = var5.bind(var6)(var4);
            var12 = var4.inHoldout;
            var9 = _closure1_slot0;
            var4 = 10;
            var4 = var10[var4];
            var5 = var9.bind(var1)(var4);
            var4 = var5.useCanSeePushNotificationNudge;
            var4 = var4.bind(var5)();
            var5 = 11;
            var6 = var10[var5];
            var11 = var9.bind(var1)(var6);
            var8 = var11.useStateFromStores;
            var6 = _closure1_slot6;
            var7 = new Array(1);
            var7[0] = var6;
            var6 = function() {
                var3 = _closure1_slot6;
                var2 = var3.getCurrentClientVoiceChannelId;
                var1 = null;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var16 = var8.bind(var11)(var7, var6);
            var _closure2_slot0 = var16;
            var5 = var10[var5];
            var8 = var9.bind(var1)(var5);
            var7 = var8.useStateFromStores;
            var5 = _closure1_slot5;
            var6 = new Array(1);
            var6[0] = var5;
            var5 = function() {
                var2 = _closure1_slot5;
                var1 = var2.getChannelId;
                var1 = var1.bind(var2)();
                return var1;
            };
            var7 = var7.bind(var8)(var6, var5);
            var _closure2_slot1 = var7;
            var15 = _closure1_slot4;
            var5 = var15.useRef;
            var5 = var5.bind(var15)(var16);
            var _closure2_slot2 = var5;
            var6 = var15.useState;
            var5 = false;
            var6 = var6.bind(var15)(var5);
            var5 = _closure1_slot3;
            var8 = 2;
            var11 = var5.bind(var1)(var6, var8);
            var6 = 0;
            var13 = var11[var6];
            var5 = 1;
            var11 = var11[var5];
            var _closure2_slot3 = var11;
            var14 = var15.useEffect;
            var11 = new Array(2);
            var11[0] = var16;
            var11[1] = var7;
            var7 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot2;
                    var4 = var3.current;
                    var2 = _closure2_slot0;
                    var3['current'] = var2;
                    var3 = _closure2_slot3;
                    var6 = null;
                    var2 = var6 != var4;
                    if(!var2) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var5 = _closure2_slot0;
                    var2 = var6 == var5;
case 2:
                    if(!var2) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var1 = _closure2_slot1;
                    var2 = var4 === var1;
case 4:
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var7 = var14.bind(var15)(var7, var11);
            var7 = 12;
            var7 = var10[var7];
            var10 = var9.bind(var1)(var7);
            var9 = var10.useSelectedTimeRecurringDismissibleContent;
            var7 = null;
            if(!var13) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var7 = null;
            if(var12) { _fun0001_ip = 6; continue _fun0001 }
case 8:
            var7 = null;
            if(!var4) { _fun0001_ip = 6; continue _fun0001 }
case 9:
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var4 = 13;
            var4 = var12[var4];
            var4 = var11.bind(var1)(var4);
            var4 = var4.DismissibleContent;
            var7 = var4.NOTIFICATION_NUDGE_POST_CALL_DISCONNECT;
case 6:
            var4 = _closure1_slot11;
            var7 = var9.bind(var10)(var7, var4);
            var4 = _closure1_slot3;
            var4 = var4.bind(var1)(var7, var8);
            var7 = var4[var6];
            var _closure2_slot4 = var7;
            var6 = var4[var5];
            var _closure2_slot5 = var6;
            var5 = _closure1_slot4;
            var4 = var5.useEffect;
            var3 = new Array(2);
            var3[0] = var7;
            var3[1] = var6;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure2_slot4;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                    var6 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var4 = 14;
                    var4 = var2[var4];
                    var7 = undefined;
                    var8 = var6.bind(var7)(var4);
                    var5 = var8.setPushPermissionReactivationSeen;
                    var4 = _closure1_slot7;
                    var4 = var4.CALL_DISCONNECT_BOTTOM_SHEET;
                    var4 = var5.bind(var8)(var4);
                    var4 = _closure1_slot1;
                    var3 = 15;
                    var3 = var2[var3];
                    var5 = var4.bind(var7)(var3);
                    var4 = var5.openLazy;
                    var3 = 17;
                    var3 = var2[var3];
                    var6 = var6.bind(var7)(var3);
                    var3 = 16;
                    var3 = var2[var3];
                    var2 = var2.paths;
                    var3 = var6.bind(var7)(var3, var2);
                    var2 = {};
                    var1 = _closure2_slot5;
                    var2['markAsDismissed'] = var1;
                    var1 = 'post-call-disconnect-nudge-key';
                    var1 = var4.bind(var5)(var3, var1, var2);
case 10:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var4.bind(var5)(var2, var3);
            return var1;
        }
    };
    var3['usePostCallDisconnectNudge'] = var2;
    return var1;
})();