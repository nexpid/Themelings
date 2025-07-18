// app/modules/rpc/server/events/subscriptionHelpers.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = native3;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.RPCEvents;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.ActivityLayoutMode;
    var _closure1_slot4 = var7;
    var4 = var4.ActivityScreenOrientation;
    var _closure1_slot5 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/rpc/server/events/subscriptionHelpers.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getInitialSubscriptionPayload(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var4 = arg2;
            var2 = _closure1_slot3;
            var2 = var2.ACTIVITY_PIP_MODE_UPDATE;
            if(!(var2 !== var4)) { _fun0001_ip = 325; continue _fun0001 }
 26:
            var2 = _closure1_slot3;
            var2 = var2.ACTIVITY_LAYOUT_MODE_UPDATE;
            if(!(var2 !== var4)) { _fun0001_ip = 259; continue _fun0001 }
 43:
            var2 = _closure1_slot3;
            var2 = var2.THERMAL_STATE_UPDATE;
            if(!(var2 !== var4)) { _fun0001_ip = 188; continue _fun0001 }
 60:
            var2 = _closure1_slot3;
            var2 = var2.ORIENTATION_UPDATE;
            if(!(var2 !== var4)) { _fun0001_ip = 126; continue _fun0001 }
 74:
            var2 = _closure1_slot3;
            var2 = var2.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE;
            if(!(var2 !== var4)) { _fun0001_ip = 92; continue _fun0001 }
 88:
            var2 = null;
            return var2;
 92:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 5;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.activityInstanceConnectedParticipants;
            var2 = var2.bind(var4)();
            return var2;
 126:
            var2 = {};
            var6 = _closure1_slot0;
            var5 = _closure1_slot1;
            var4 = 4;
            var5 = var5[var4];
            var4 = undefined;
            var5 = var6.bind(var4)(var5);
            var4 = var5.getIsScreenLandscape;
            var4 = var4.bind(var5)();
            var5 = _closure1_slot5;
            if(var4) { _fun0001_ip = 175; continue _fun0001 }
 167:
            var4 = var5.PORTRAIT;
            _fun0001_ip = 181; continue _fun0001;
 175:
            var4 = var5.LANDSCAPE;
 181:
            var2['screen_orientation'] = var4;
            return var2;
 188:
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 3;
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
            if(!(var5 !== var4)) { _fun0001_ip = 257; continue _fun0001 }
 247:
            var4 = {};
            var4['thermal_state'] = var5;
            var2 = var4;
 257:
            return var2;
 259:
            var4 = var1.application;
            var2 = null;
            var5 = var2 == var4;
            var7 = undefined;
            if(var5) { _fun0001_ip = 280; continue _fun0001 }
 275:
            var7 = var4.id;
 280:
            var4 = var2 != var7;
            var5 = null;
            if(!var4) { _fun0001_ip = 304; continue _fun0001 }
 289:
            var6 = _closure1_slot2;
            var4 = var6.getLayoutModeForApp;
            var5 = var4.bind(var6)(var7);
 304:
            var4 = var2 != var5;
            var2 = null;
            if(!var4) { _fun0001_ip = 323; continue _fun0001 }
 313:
            var4 = {};
            var4['layout_mode'] = var5;
            var2 = var4;
 323:
            return var2;
 325:
            var2 = var1.application;
            var1 = null;
            var4 = var1 == var2;
            var6 = undefined;
            if(var4) { _fun0001_ip = 346; continue _fun0001 }
 341:
            var6 = var2.id;
 346:
            var2 = var1 != var6;
            var4 = null;
            if(!var2) { _fun0001_ip = 370; continue _fun0001 }
 355:
            var5 = _closure1_slot2;
            var2 = var5.getLayoutModeForApp;
            var4 = var2.bind(var5)(var6);
 370:
            var2 = var1 != var4;
            var1 = null;
            if(!var2) { _fun0001_ip = 403; continue _fun0001 }
 379:
            var2 = {};
            var3 = _closure1_slot4;
            var3 = var3.FOCUSED;
            var3 = var4 !== var3;
            var2['is_pip_mode'] = var3;
            var1 = var2;
 403:
            return var1;
        }
    };
    var3['getInitialSubscriptionPayload'] = var2;
    return var1;
})();