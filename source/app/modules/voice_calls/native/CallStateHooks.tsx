// app/modules/voice_calls/native/CallStateHooks.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var7;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var7[var1];
    var1 = undefined;
    var2 = var5.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var7[var2];
    var2 = var5.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var7[var2];
    var2 = var5.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var7[var2];
    var2 = var5.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 4;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var5 = var2.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot7 = var5;
    var2 = var2.RTCConnectionStates;
    var _closure1_slot8 = var2;
    var2 = 5;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.ParticipantTypes;
    var _closure1_slot9 = var2;
    var2 = {};
    var5 = {};
    var8 = false;
    var5['initialized'] = var8;
    var5['callId'] = var1;
    var12 = var2;
    var11 = var5;
    var5 = copyDataProperties(var12, var11);
    var _closure1_slot10 = var2;
    var2 = {};
    var5 = 'disconneted';
    var2['DISCONNECTED'] = var5;
    var5 = 'disconnecting';
    var2['DISCONNECTING'] = var5;
    var5 = 'connecting';
    var2['CONNECTING'] = var5;
    var5 = 'ringing';
    var2['RINGING'] = var5;
    var5 = 'connected';
    var2['CONNECTED'] = var5;
    var _closure1_slot11 = var2;
    var5 = 8;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/voice_calls/native/CallStateHooks.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function _default() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var11 = arguments[0];
            var7 = arguments[1];
            var8 = arguments[2];
            var10 = undefined;
            if(!(var11 === var10)) { _fun0001_ip = 24; continue _fun0001 }
 17:
            var11 = _closure1_slot7;
 24:
            var _closure2_slot0 = var11;
            if(!(var7 === var10)) { _fun0001_ip = 34; continue _fun0001 }
 32:
            var7 = false;
 34:
            if(!(var8 === var10)) { _fun0001_ip = 40; continue _fun0001 }
 38:
            var8 = false;
 40:
            var _closure2_slot1 = var10;
            var _closure2_slot2 = var10;
            var _closure2_slot3 = var10;
            var4 = _closure1_slot4;
            var3 = var4.getId;
            var3 = var3.bind(var4)();
            _closure2_slot1 = var3;
            var9 = _closure1_slot0;
            var14 = _closure1_slot2;
            var5 = 6;
            var4 = var14[var5];
            var13 = var9.bind(var10)(var4);
            var12 = var13.useStateFromStoresArray;
            var4 = _closure1_slot5;
            var6 = new Array(1);
            var6[0] = var4;
            var4 = new Array(2);
            var4[0] = var11;
            var4[1] = var3;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var4 = _closure1_slot5;
                    var3 = var4.getCall;
                    var1 = _closure2_slot0;
                    var3 = var3.bind(var4)(var1);
                    var1 = null;
                    if(!(var1 == var3)) { _fun0002_ip = 37; continue _fun0002 }
 31:
                    var1 = new Array(0);
                    _fun0002_ip = 62; continue _fun0002;
 37:
                    var5 = var3.ringing;
                    var4 = var5.filter;
                    var3 = function(arg1) {
                        var2 = _closure2_slot1;
                        var1 = arg1;
                        var1 = var1 !== var2;
                        return var1;
                    };
                    var1 = var4.bind(var5)(var3);
 62:
                    var3 = _closure1_slot10;
                    var2 = var3.initialized;
                    if(var2) { _fun0002_ip = 86; continue _fun0002 }
 75:
                    var5 = var1.length;
                    var4 = 0;
                    var2 = var5 > var4;
 86:
                    var3['initialized'] = var2;
                    return var1;
                }
            };
            var4 = var12.bind(var13)(var6, var3, var4);
            var6 = _closure1_slot3;
            var3 = var6.getParticipants;
            var12 = var3.bind(var6)(var11);
            var6 = var12.filter;
            var3 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var2 = arg1;
                    var3 = var2.type;
                    var1 = _closure1_slot9;
                    var1 = var1.ACTIVITY;
                    var1 = var3 !== var1;
                    if(!var1) { _fun0003_ip = 49; continue _fun0003 }
 28:
                    var2 = var2.user;
                    var3 = var2.id;
                    var2 = _closure2_slot1;
                    var1 = var3 !== var2;
 49:
                    return var1;
                }
            };
            var6 = var6.bind(var12)(var3);
            var12 = _closure1_slot1;
            var3 = 7;
            var3 = var14[var3];
            var3 = var12.bind(var10)(var3);
            var12 = var3.bind(var10)();
            _closure2_slot2 = var12;
            var3 = var14[var5];
            var18 = var9.bind(var10)(var3);
            var17 = var18.useStateFromStores;
            var3 = _closure1_slot6;
            var16 = new Array(1);
            var16[0] = var3;
            var15 = var3.getRTCConnectionId;
            var13 = new Array(0);
            var13 = var17.bind(var18)(var16, var15, var13);
            _closure2_slot3 = var13;
            var5 = var14[var5];
            var10 = var9.bind(var10)(var5);
            var9 = var10.useStateFromStores;
            var5 = new Array(1);
            var5[0] = var3;
            var3 = new Array(3);
            var3[0] = var13;
            var3[1] = var12;
            var3[2] = var11;
            var2 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var2 = _closure2_slot2;
                    var3 = null;
                    var2 = var3 == var2;
                    var4 = undefined;
                    if(var2) { _fun0004_ip = 27; continue _fun0004 }
 18:
                    var2 = _closure2_slot2;
                    var4 = var2.channelId;
 27:
                    var2 = _closure2_slot0;
                    if(!(var4 !== var2)) { _fun0004_ip = 164; continue _fun0004 }
 38:
                    var2 = _closure1_slot10;
                    var4 = var2.callId;
                    var2 = _closure2_slot3;
                    var2 = var3 != var2;
                    if(!var2) { _fun0004_ip = 70; continue _fun0004 }
 62:
                    var3 = _closure2_slot3;
                    var2 = var4 === var3;
 70:
                    if(var2) { _fun0004_ip = 85; continue _fun0004 }
 73:
                    var3 = _closure1_slot10;
                    var2 = false;
                    var3['initialized'] = var2;
 85:
                    var3 = _closure1_slot10;
                    var1 = _closure2_slot3;
                    var3['callId'] = var1;
                    var2 = _closure1_slot6;
                    var1 = var2.getState;
                    var1 = var1.bind(var2)();
                    var2 = var3.initialized;
                    if(var2) { _fun0004_ip = 156; continue _fun0004 }
 122:
                    var4 = _closure1_slot8;
                    var4 = var4.DISCONNECTED;
                    var4 = var1 !== var4;
                    if(!var4) { _fun0004_ip = 153; continue _fun0004 }
 139:
                    var5 = _closure1_slot8;
                    var5 = var5.RTC_DISCONNECTED;
                    var4 = var1 !== var5;
 153:
                    var2 = var4;
 156:
                    var3['initialized'] = var2;
                    return var1;
 164:
                    var3 = _closure1_slot10;
                    var2 = true;
                    var3['initialized'] = var2;
                    var1 = _closure1_slot8;
                    var1 = var1.RTC_CONNECTED;
                    return var1;
                }
            };
            var5 = var9.bind(var10)(var5, var2, var3);
            var3 = _closure1_slot10;
            var2 = var3.initialized;
            if(var2) { _fun0001_ip = 308; continue _fun0001 }
 305:
            var2 = var8;
 308:
            var3['initialized'] = var2;
            var2 = _closure1_slot11;
            var3 = var2.CONNECTING;
            var2 = _closure1_slot10;
            var2 = var2.initialized;
            if(var7) { _fun0001_ip = 429; continue _fun0001 }
 337:
            if(!var2) { _fun0001_ip = 354; continue _fun0001 }
 340:
            var7 = _closure1_slot8;
            var7 = var7.DISCONNECTED;
            if(!(var5 !== var7)) { _fun0001_ip = 417; continue _fun0001 }
 354:
            var8 = var4.length;
            var7 = 0;
            if(!(var8 > var7)) { _fun0001_ip = 379; continue _fun0001 }
 365:
            var6 = var6.length;
            var4 = var4.length;
            if(!(var6 !== var4)) { _fun0001_ip = 405; continue _fun0001 }
 379:
            var4 = _closure1_slot8;
            var4 = var4.RTC_CONNECTED;
            if(!(var5 === var4)) { _fun0001_ip = 439; continue _fun0001 }
 393:
            var4 = _closure1_slot11;
            var3 = var4.CONNECTED;
            _fun0001_ip = 439; continue _fun0001;
 405:
            var4 = _closure1_slot11;
            var3 = var4.RINGING;
            _fun0001_ip = 439; continue _fun0001;
 417:
            var4 = _closure1_slot11;
            var3 = var4.DISCONNECTED;
            _fun0001_ip = 439; continue _fun0001;
 429:
            var1 = _closure1_slot11;
            var3 = var1.DISCONNECTING;
 439:
            var1 = {};
            var1['state'] = var3;
            var1['initialized'] = var2;
            return var1;
        }
    };
    var3['default'] = var4;
    var3['CallStates'] = var2;
    return var1;
})();