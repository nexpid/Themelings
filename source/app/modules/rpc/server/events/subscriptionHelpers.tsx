// app/modules/rpc/server/events/subscriptionHelpers.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.RPCEvents;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.ActivityLayoutMode;
    var _closure1_slot5 = var7;
    var4 = var4.ActivityScreenOrientation;
    var _closure1_slot6 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/rpc/server/events/subscriptionHelpers.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getInitialSubscriptionPayload(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var4 = arg2;
            var2 = _closure1_slot4;
            var2 = var2.ACTIVITY_PIP_MODE_UPDATE;
            if(!(var2 !== var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = _closure1_slot4;
            var2 = var2.ACTIVITY_LAYOUT_MODE_UPDATE;
            if(!(var2 !== var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = _closure1_slot4;
            var2 = var2.THERMAL_STATE_UPDATE;
            if(!(var2 !== var4)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var2 = _closure1_slot4;
            var2 = var2.ORIENTATION_UPDATE;
            if(!(var2 !== var4)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var2 = _closure1_slot4;
            var2 = var2.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE;
            if(!(var2 !== var4)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var2 = _closure1_slot4;
            var2 = var2.QUEST_ENROLLMENT_STATUS_UPDATE;
            if(!(var2 !== var4)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var2 = null;
            return var2;
case 12:
            var2 = arg3;
            var8 = var2.quest_id;
            var5 = null;
            if(var8) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            return var5;
case 14:
            var4 = _closure1_slot3;
            var2 = var4.getQuest;
            var7 = var2.bind(var4)(var8);
            var4 = var5 == var7;
            var2 = null;
            if(var4) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var4 = var7.config;
            var4 = var4.application;
            var9 = var4.id;
            var10 = var1.application;
            var11 = var5 == var10;
            var4 = undefined;
            if(var11) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var4 = var10.id;
case 18:
            var2 = null;
            if(!(var9 === var4)) { _fun0001_ip = 16; continue _fun0001 }
case 20:
            var4 = {};
            var4['quest_id'] = var8;
            var9 = var7.userStatus;
            var10 = var5 == var9;
            var8 = undefined;
            if(var10) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var8 = var9.enrolledAt;
case 21:
            var8 = var5 != var8;
            var4['is_enrolled'] = var8;
            var7 = var7.userStatus;
            var8 = var5 == var7;
            var6 = undefined;
            if(var8) { _fun0001_ip = 23; continue _fun0001 }
case 24:
            var6 = var7.enrolledAt;
case 23:
            var7 = var5 != var6;
            var5 = null;
            if(!var7) { _fun0001_ip = 25; continue _fun0001 }
case 26:
            var5 = var6;
case 25:
            var4['enrolled_at'] = var5;
            var2 = var4;
case 16:
            return var2;
case 10:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 6;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.activityInstanceConnectedParticipants;
            var2 = var2.bind(var4)();
            return var2;
case 8:
            var2 = {};
            var6 = _closure1_slot0;
            var5 = _closure1_slot1;
            var4 = 5;
            var5 = var5[var4];
            var4 = undefined;
            var5 = var6.bind(var4)(var5);
            var4 = var5.getIsScreenLandscape;
            var4 = var4.bind(var5)();
            var5 = _closure1_slot6;
            if(var4) { _fun0001_ip = 27; continue _fun0001 }
case 28:
            var4 = var5.PORTRAIT;
            _fun0001_ip = 29; continue _fun0001;
case 27:
            var4 = var5.LANDSCAPE;
case 29:
            var2['screen_orientation'] = var4;
            return var2;
case 6:
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 4;
            var5 = var7[var2];
            var4 = undefined;
            var8 = var6.bind(var4)(var5);
            var5 = var8.getThermalState;
            var5 = var5.bind(var8)();
            var2 = var7[var2];
            var2 = var6.bind(var4)(var2);
            var2 = var2.ThermalStates;
            var4 = var2.UNHANDLED;
            var2 = null;
            if(!(var5 !== var4)) { _fun0001_ip = 30; continue _fun0001 }
case 31:
            var4 = {};
            var4['thermal_state'] = var5;
            var2 = var4;
case 30:
            return var2;
case 4:
            var4 = var1.application;
            var2 = null;
            var5 = var2 == var4;
            var7 = undefined;
            if(var5) { _fun0001_ip = 32; continue _fun0001 }
case 33:
            var7 = var4.id;
case 32:
            var4 = var2 != var7;
            var5 = null;
            if(!var4) { _fun0001_ip = 34; continue _fun0001 }
case 35:
            var6 = _closure1_slot2;
            var4 = var6.getLayoutModeForApp;
            var5 = var4.bind(var6)(var7);
case 34:
            var4 = var2 != var5;
            var2 = null;
            if(!var4) { _fun0001_ip = 36; continue _fun0001 }
case 37:
            var4 = {};
            var4['layout_mode'] = var5;
            var2 = var4;
case 36:
            return var2;
case 2:
            var2 = var1.application;
            var1 = null;
            var4 = var1 == var2;
            var6 = undefined;
            if(var4) { _fun0001_ip = 38; continue _fun0001 }
case 39:
            var6 = var2.id;
case 38:
            var2 = var1 != var6;
            var4 = null;
            if(!var2) { _fun0001_ip = 40; continue _fun0001 }
case 41:
            var5 = _closure1_slot2;
            var2 = var5.getLayoutModeForApp;
            var4 = var2.bind(var5)(var6);
case 40:
            var2 = var1 != var4;
            var1 = null;
            if(!var2) { _fun0001_ip = 42; continue _fun0001 }
case 43:
            var2 = {};
            var3 = _closure1_slot5;
            var3 = var3.FOCUSED;
            var3 = var4 !== var3;
            var2['is_pip_mode'] = var3;
            var1 = var2;
case 42:
            return var1;
        }
    };
    var3['getInitialSubscriptionPayload'] = var2;
    return var1;
})();