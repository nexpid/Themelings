// app/utils/RTCConnectionUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var5.bind(var1)(var2);
    var7 = var2.RTCConnectionStates;
    var _closure1_slot2 = var7;
    var2 = var2.ConnectionStatus;
    var _closure1_slot3 = var2;
    var2 = {};
    var7 = function getStatus(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var4 = arguments[1];
            var8 = undefined;
            if(!(var4 === var8)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = false;
case 2:
            var2 = _closure1_slot2;
            var2 = var2.CONNECTING;
            if(!(var2 !== var3)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = _closure1_slot2;
            var2 = var2.AUTHENTICATING;
            if(!(var2 !== var3)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var2 = _closure1_slot2;
            var2 = var2.AWAITING_ENDPOINT;
            if(!(var2 !== var3)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var2 = _closure1_slot2;
            var2 = var2.RTC_CONNECTED;
            if(!(var2 !== var3)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var2 = _closure1_slot2;
            var2 = var2.RTC_CONNECTING;
            if(!(var2 !== var3)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var2 = _closure1_slot2;
            var2 = var2.ICE_CHECKING;
            if(!(var2 !== var3)) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var2 = _closure1_slot2;
            var2 = var2.DTLS_CONNECTING;
            if(!(var2 !== var3)) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var2 = _closure1_slot2;
            var2 = var2.NO_ROUTE;
            if(!(var2 !== var3)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var2 = _closure1_slot2;
            var2 = var2.RTC_DISCONNECTED;
            if(!(var2 !== var3)) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var2 = _closure1_slot2;
            var2 = var2.DISCONNECTED;
            var2 = _closure1_slot3;
            var3 = var2.ERROR;
            var7 = _closure1_slot0;
            var9 = _closure1_slot1;
            var2 = 1;
            var5 = var9[var2];
            var5 = var7.bind(var8)(var5);
            var6 = var5.intl;
            var5 = var6.string;
            var2 = var9[var2];
            var2 = var7.bind(var8)(var2);
            var2 = var2.t;
            var2 = var2.NLKQb2;
            var2 = var5.bind(var6)(var2);
            _fun0001_ip = 22; continue _fun0001;
case 20:
            var5 = _closure1_slot3;
            var3 = var5.ERROR;
            var10 = _closure1_slot0;
            var11 = _closure1_slot1;
            var5 = 1;
            var7 = var11[var5];
            var7 = var10.bind(var8)(var7);
            var9 = var7.intl;
            var7 = var9.string;
            var5 = var11[var5];
            var5 = var10.bind(var8)(var5);
            var5 = var5.t;
            var5 = var5.M7LDmJ;
            var2 = var7.bind(var9)(var5);
            _fun0001_ip = 22; continue _fun0001;
case 18:
            var5 = _closure1_slot3;
            var3 = var5.ERROR;
            var10 = _closure1_slot0;
            var11 = _closure1_slot1;
            var5 = 1;
            var7 = var11[var5];
            var7 = var10.bind(var8)(var7);
            var9 = var7.intl;
            var7 = var9.string;
            var5 = var11[var5];
            var5 = var10.bind(var8)(var5);
            var5 = var5.t;
            var5 = var5.mGhOIi;
            var2 = var7.bind(var9)(var5);
            _fun0001_ip = 22; continue _fun0001;
case 16:
            var5 = _closure1_slot3;
            var3 = var5.CONNECTING;
            var10 = _closure1_slot0;
            var11 = _closure1_slot1;
            var5 = 1;
            var7 = var11[var5];
            var7 = var10.bind(var8)(var7);
            var9 = var7.intl;
            var7 = var9.string;
            var5 = var11[var5];
            var5 = var10.bind(var8)(var5);
            var5 = var5.t;
            var5 = var5.UvB3gY;
            var2 = var7.bind(var9)(var5);
            _fun0001_ip = 22; continue _fun0001;
case 14:
            var5 = _closure1_slot3;
            var3 = var5.CONNECTING;
            var10 = _closure1_slot0;
            var11 = _closure1_slot1;
            var5 = 1;
            var7 = var11[var5];
            var7 = var10.bind(var8)(var7);
            var9 = var7.intl;
            var7 = var9.string;
            var5 = var11[var5];
            var5 = var10.bind(var8)(var5);
            var5 = var5.t;
            var5 = var5.rdCyAw;
            var2 = var7.bind(var9)(var5);
            _fun0001_ip = 22; continue _fun0001;
case 12:
            var5 = _closure1_slot3;
            var3 = var5.CONNECTING;
            var10 = _closure1_slot0;
            var11 = _closure1_slot1;
            var5 = 1;
            var7 = var11[var5];
            var7 = var10.bind(var8)(var7);
            var9 = var7.intl;
            var7 = var9.string;
            var5 = var11[var5];
            var5 = var10.bind(var8)(var5);
            var5 = var5.t;
            var5 = var5.Gp51dn;
            var2 = var7.bind(var9)(var5);
            _fun0001_ip = 22; continue _fun0001;
case 10:
            var5 = _closure1_slot3;
            var5 = var5.CONNECTED;
            var10 = _closure1_slot0;
            var11 = _closure1_slot1;
            var6 = 1;
            var7 = var11[var6];
            var7 = var10.bind(var8)(var7);
            var9 = var7.intl;
            var7 = var9.string;
            var6 = var11[var6];
            var6 = var10.bind(var8)(var6);
            var6 = var6.t;
            if(var4) { _fun0001_ip = 23; continue _fun0001 }
case 24:
            var4 = var6.daXg4+;
            var4 = var7.bind(var9)(var4);
            _fun0001_ip = 25; continue _fun0001;
case 23:
            var6 = var6.HtVOdX;
            var4 = var7.bind(var9)(var6);
case 25:
            var2 = var4;
            var3 = var5;
            _fun0001_ip = 22; continue _fun0001;
case 8:
            var4 = _closure1_slot3;
            var3 = var4.CONNECTING;
            var9 = _closure1_slot0;
            var10 = _closure1_slot1;
            var4 = 1;
            var6 = var10[var4];
            var6 = var9.bind(var8)(var6);
            var7 = var6.intl;
            var6 = var7.string;
            var4 = var10[var4];
            var4 = var9.bind(var8)(var4);
            var4 = var4.t;
            var4 = var4.xEbu0d;
            var2 = var6.bind(var7)(var4);
            _fun0001_ip = 22; continue _fun0001;
case 6:
            var4 = _closure1_slot3;
            var3 = var4.CONNECTING;
            var9 = _closure1_slot0;
            var10 = _closure1_slot1;
            var4 = 1;
            var6 = var10[var4];
            var6 = var9.bind(var8)(var6);
            var7 = var6.intl;
            var6 = var7.string;
            var4 = var10[var4];
            var4 = var9.bind(var8)(var4);
            var4 = var4.t;
            var4 = var4.GxXwEx;
            var2 = var6.bind(var7)(var4);
            _fun0001_ip = 22; continue _fun0001;
case 4:
            var4 = _closure1_slot3;
            var3 = var4.CONNECTING;
            var7 = _closure1_slot0;
            var9 = _closure1_slot1;
            var1 = 1;
            var5 = var9[var1];
            var5 = var7.bind(var8)(var5);
            var6 = var5.intl;
            var5 = var6.string;
            var1 = var9[var1];
            var1 = var7.bind(var8)(var1);
            var1 = var1.t;
            var1 = var1.MzW9sL;
            var2 = var5.bind(var6)(var1);
case 22:
            var1 = {};
            var1['connectionStatus'] = var3;
            var1['connectionStatusText'] = var2;
            return var1;
        }
    };
    var2['getStatus'] = var7;
    var4 = function getShortHostname(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var2 = var1 == var4;
            var1 = '';
            if(var2) { _fun0002_ip = 26; continue _fun0002 }
case 27:
            var3 = var4.split;
            var2 = '.';
            var3 = var3.bind(var4)(var2);
            var2 = 0;
            var1 = var3[var2];
case 26:
            return var1;
        }
    };
    var2['getShortHostname'] = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'utils/RTCConnectionUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();