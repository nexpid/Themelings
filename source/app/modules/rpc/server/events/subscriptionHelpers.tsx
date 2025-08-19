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
 0:
            var1 = arg1;
            var4 = arg2;
            var2 = _closure1_slot4;
            var2 = var2.ACTIVITY_PIP_MODE_UPDATE;
            if(!(var2 !== var4)) { _fun0001_ip = 505; continue _fun0001 }
 26:
            var2 = _closure1_slot4;
            var2 = var2.ACTIVITY_LAYOUT_MODE_UPDATE;
            if(!(var2 !== var4)) { _fun0001_ip = 439; continue _fun0001 }
 43:
            var2 = _closure1_slot4;
            var2 = var2.THERMAL_STATE_UPDATE;
            if(!(var2 !== var4)) { _fun0001_ip = 368; continue _fun0001 }
 60:
            var2 = _closure1_slot4;
            var2 = var2.ORIENTATION_UPDATE;
            if(!(var2 !== var4)) { _fun0001_ip = 306; continue _fun0001 }
 77:
            var2 = _closure1_slot4;
            var2 = var2.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE;
            if(!(var2 !== var4)) { _fun0001_ip = 272; continue _fun0001 }
 94:
            var2 = _closure1_slot4;
            var2 = var2.QUEST_ENROLLMENT_STATUS_UPDATE;
            if(!(var2 !== var4)) { _fun0001_ip = 112; continue _fun0001 }
 108:
            var2 = null;
            return var2;
 112:
            var2 = arg3;
            var8 = var2.quest_id;
            var5 = null;
            if(var8) { _fun0001_ip = 128; continue _fun0001 }
 126:
            return var5;
 128:
            var4 = _closure1_slot3;
            var2 = var4.getQuest;
            var7 = var2.bind(var4)(var8);
            var4 = var5 == var7;
            var2 = null;
            if(var4) { _fun0001_ip = 270; continue _fun0001 }
 152:
            var4 = var7.config;
            var4 = var4.application;
            var9 = var4.id;
            var10 = var1.application;
            var11 = var5 == var10;
            var4 = undefined;
            if(var11) { _fun0001_ip = 186; continue _fun0001 }
 181:
            var4 = var10.id;
 186:
            var2 = null;
            if(!(var9 === var4)) { _fun0001_ip = 270; continue _fun0001 }
 192:
            var4 = {};
            var4['quest_id'] = var8;
            var9 = var7.userStatus;
            var10 = var5 == var9;
            var8 = undefined;
            if(var10) { _fun0001_ip = 220; continue _fun0001 }
 214:
            var8 = var9.enrolledAt;
 220:
            var8 = var5 != var8;
            var4['is_enrolled'] = var8;
            var7 = var7.userStatus;
            var8 = var5 == var7;
            var6 = undefined;
            if(var8) { _fun0001_ip = 250; continue _fun0001 }
 244:
            var6 = var7.enrolledAt;
 250:
            var7 = var5 != var6;
            var5 = null;
            if(!var7) { _fun0001_ip = 262; continue _fun0001 }
 259:
            var5 = var6;
 262:
            var4['enrolled_at'] = var5;
            var2 = var4;
 270:
            return var2;
 272:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 6;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.activityInstanceConnectedParticipants;
            var2 = var2.bind(var4)();
            return var2;
 306:
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
            if(var4) { _fun0001_ip = 355; continue _fun0001 }
 347:
            var4 = var5.PORTRAIT;
            _fun0001_ip = 361; continue _fun0001;
 355:
            var4 = var5.LANDSCAPE;
 361:
            var2['screen_orientation'] = var4;
            return var2;
 368:
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
            if(!(var5 !== var4)) { _fun0001_ip = 437; continue _fun0001 }
 427:
            var4 = {};
            var4['thermal_state'] = var5;
            var2 = var4;
 437:
            return var2;
 439:
            var4 = var1.application;
            var2 = null;
            var5 = var2 == var4;
            var7 = undefined;
            if(var5) { _fun0001_ip = 460; continue _fun0001 }
 455:
            var7 = var4.id;
 460:
            var4 = var2 != var7;
            var5 = null;
            if(!var4) { _fun0001_ip = 484; continue _fun0001 }
 469:
            var6 = _closure1_slot2;
            var4 = var6.getLayoutModeForApp;
            var5 = var4.bind(var6)(var7);
 484:
            var4 = var2 != var5;
            var2 = null;
            if(!var4) { _fun0001_ip = 503; continue _fun0001 }
 493:
            var4 = {};
            var4['layout_mode'] = var5;
            var2 = var4;
 503:
            return var2;
 505:
            var2 = var1.application;
            var1 = null;
            var4 = var1 == var2;
            var6 = undefined;
            if(var4) { _fun0001_ip = 526; continue _fun0001 }
 521:
            var6 = var2.id;
 526:
            var2 = var1 != var6;
            var4 = null;
            if(!var2) { _fun0001_ip = 550; continue _fun0001 }
 535:
            var5 = _closure1_slot2;
            var2 = var5.getLayoutModeForApp;
            var4 = var2.bind(var5)(var6);
 550:
            var2 = var1 != var4;
            var1 = null;
            if(!var2) { _fun0001_ip = 583; continue _fun0001 }
 559:
            var2 = {};
            var3 = _closure1_slot5;
            var3 = var3.FOCUSED;
            var3 = var4 !== var3;
            var2['is_pip_mode'] = var3;
            var1 = var2;
 583:
            return var1;
        }
    };
    var3['getInitialSubscriptionPayload'] = var2;
    return var1;
})();