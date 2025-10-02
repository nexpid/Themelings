// app/modules/voice_calls/native/components/OngoingCallStatusLabel.tsx
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
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot6 = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/voice_calls/native/components/OngoingCallStatusLabel.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var6 = var1.style;
            var5 = var1.channel;
            var3 = var1.voiceState;
            var2 = var1.useAllAloneText;
            var4 = undefined;
            if(!(var2 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = true;
case 2:
            var1 = function(arg1, arg2) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var12 = arg1;
                    var6 = arg2;
                    var2 = arguments[2];
                    var _closure3_slot0 = var12;
                    var7 = undefined;
                    if(!(var2 === var7)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var2 = true;
case 4:
                    var _closure3_slot1 = var7;
                    var5 = _closure1_slot3;
                    var4 = var5.getId;
                    var13 = var4.bind(var5)();
                    _closure3_slot1 = var13;
                    var9 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var4 = 5;
                    var4 = var5[var4];
                    var11 = var9.bind(var7)(var4);
                    var10 = var11.useStateFromStores;
                    var4 = _closure1_slot5;
                    var8 = new Array(2);
                    var8[0] = var4;
                    var4 = _closure1_slot4;
                    var8[1] = var4;
                    var4 = new Array(2);
                    var4[0] = var13;
                    var4[1] = var12;
                    var1 = function() {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                            var1 = _closure3_slot0;
                            var3 = null;
                            if(!(var3 != var1)) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                            var1 = global;
                            var7 = var1.Object;
                            var6 = var7.values;
                            var9 = _closure1_slot5;
                            var8 = var9.getVoiceStatesForChannel;
                            var1 = _closure3_slot0;
                            var4 = var1.id;
                            var4 = var8.bind(var9)(var4);
                            var4 = var6.bind(var7)(var4);
                            var6 = _closure1_slot4;
                            var5 = var6.getCall;
                            var1 = var1.id;
                            var1 = var5.bind(var6)(var1);
                            var3 = var3 != var1;
                            if(!var3) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                            var1 = var1.ringing;
                            var5 = var1.length;
                            var1 = 0;
                            var3 = var5 > var1;
case 8:
                            var1 = !var3;
                            if(var3) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                            var5 = var4.length;
                            var3 = 1;
                            var1 = var3 === var5;
case 10:
                            if(!var1) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                            var3 = 0;
                            var3 = var4[var3];
                            var3 = var3.userId;
                            var2 = _closure3_slot1;
                            var1 = var3 === var2;
case 12:
                            return var1;
case 6:
                            var1 = false;
                            return var1;
                        }
                    };
                    var4 = var10.bind(var11)(var8, var1, var4);
                    var8 = 6;
                    var1 = var5[var8];
                    var1 = var9.bind(var7)(var1);
                    var11 = var1.intl;
                    var10 = var11.string;
                    var1 = var5[var8];
                    var1 = var9.bind(var7)(var1);
                    var1 = var1.t;
                    var1 = var1.1zFMqa;
                    var1 = var10.bind(var11)(var1);
                    var10 = 7;
                    var5 = var5[var10];
                    var5 = var9.bind(var7)(var5);
                    var5 = var5.CallStates;
                    var5 = var5.DISCONNECTING;
                    if(!(var5 !== var6)) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                    var9 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var5 = var5[var10];
                    var5 = var9.bind(var7)(var5);
                    var5 = var5.CallStates;
                    var5 = var5.CONNECTED;
                    if(!(var5 !== var6)) { _fun0002_ip = 14; continue _fun0002 }
case 16:
                    var9 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var5 = var5[var10];
                    var5 = var9.bind(var7)(var5);
                    var5 = var5.CallStates;
                    var5 = var5.RINGING;
                    if(!(var5 !== var6)) { _fun0002_ip = 17; continue _fun0002 }
case 18:
                    var9 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var5 = var5[var10];
                    var5 = var9.bind(var7)(var5);
                    var5 = var5.CallStates;
                    var5 = var5.DISCONNECTED;
                    if(!(var5 === var6)) { _fun0002_ip = 19; continue _fun0002 }
case 20:
                    var10 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var6 = var5[var8];
                    var6 = var10.bind(var7)(var6);
                    var9 = var6.intl;
                    var6 = var9.string;
                    var5 = var5[var8];
                    var5 = var10.bind(var7)(var5);
                    var5 = var5.t;
                    var5 = var5.w//7ER;
                    var1 = var6.bind(var9)(var5);
                    _fun0002_ip = 19; continue _fun0002;
case 17:
                    var10 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var6 = var5[var8];
                    var6 = var10.bind(var7)(var6);
                    var9 = var6.intl;
                    var6 = var9.string;
                    var5 = var5[var8];
                    var5 = var10.bind(var7)(var5);
                    var5 = var5.t;
                    var5 = var5.Xuzre3;
                    var1 = var6.bind(var9)(var5);
                    _fun0002_ip = 19; continue _fun0002;
case 14:
                    if(!var4) { _fun0002_ip = 21; continue _fun0002 }
case 22:
                    if(var2) { _fun0002_ip = 23; continue _fun0002 }
case 21:
                    var6 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var4 = var2[var8];
                    var4 = var6.bind(var7)(var4);
                    var5 = var4.intl;
                    var4 = var5.string;
                    var2 = var2[var8];
                    var2 = var6.bind(var7)(var2);
                    var2 = var2.t;
                    var2 = var2.NGg/fn;
                    var2 = var4.bind(var5)(var2);
                    _fun0002_ip = 24; continue _fun0002;
case 23:
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var4 = var3[var8];
                    var4 = var6.bind(var7)(var4);
                    var5 = var4.intl;
                    var4 = var5.string;
                    var3 = var3[var8];
                    var3 = var6.bind(var7)(var3);
                    var3 = var3.t;
                    var3 = var3.xNeSmp;
                    var2 = var4.bind(var5)(var3);
case 24:
                    var1 = var2;
case 19:
                    return var1;
                }
            };
            var5 = var1.bind(var4)(var5, var3, var2);
            var3 = _closure1_slot6;
            var2 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 8;
            var1 = var7[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['style'] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();