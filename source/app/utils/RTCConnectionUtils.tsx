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
 0:
            var3 = arg1;
            var4 = arguments[1];
            var8 = undefined;
            if(!(var4 === var8)) { _fun0001_ip = 14; continue _fun0001 }
 12:
            var4 = false;
 14:
            var2 = _closure1_slot2;
            var2 = var2.CONNECTING;
            if(!(var2 !== var3)) { _fun0001_ip = 846; continue _fun0001 }
 34:
            var2 = _closure1_slot2;
            var2 = var2.AUTHENTICATING;
            if(!(var2 !== var3)) { _fun0001_ip = 777; continue _fun0001 }
 51:
            var2 = _closure1_slot2;
            var2 = var2.AWAITING_ENDPOINT;
            if(!(var2 !== var3)) { _fun0001_ip = 705; continue _fun0001 }
 68:
            var2 = _closure1_slot2;
            var2 = var2.RTC_CONNECTED;
            if(!(var2 !== var3)) { _fun0001_ip = 609; continue _fun0001 }
 85:
            var2 = _closure1_slot2;
            var2 = var2.RTC_CONNECTING;
            if(!(var2 !== var3)) { _fun0001_ip = 537; continue _fun0001 }
 102:
            var2 = _closure1_slot2;
            var2 = var2.ICE_CHECKING;
            if(!(var2 !== var3)) { _fun0001_ip = 465; continue _fun0001 }
 119:
            var2 = _closure1_slot2;
            var2 = var2.DTLS_CONNECTING;
            if(!(var2 !== var3)) { _fun0001_ip = 393; continue _fun0001 }
 136:
            var2 = _closure1_slot2;
            var2 = var2.NO_ROUTE;
            if(!(var2 !== var3)) { _fun0001_ip = 321; continue _fun0001 }
 153:
            var2 = _closure1_slot2;
            var2 = var2.RTC_DISCONNECTED;
            if(!(var2 !== var3)) { _fun0001_ip = 249; continue _fun0001 }
 167:
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
            _fun0001_ip = 913; continue _fun0001;
 249:
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
            _fun0001_ip = 913; continue _fun0001;
 321:
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
            _fun0001_ip = 913; continue _fun0001;
 393:
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
            _fun0001_ip = 913; continue _fun0001;
 465:
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
            _fun0001_ip = 913; continue _fun0001;
 537:
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
            _fun0001_ip = 913; continue _fun0001;
 609:
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
            if(var4) { _fun0001_ip = 681; continue _fun0001 }
 666:
            var4 = var6.daXg4+;
            var4 = var7.bind(var9)(var4);
            _fun0001_ip = 694; continue _fun0001;
 681:
            var6 = var6.HtVOdX;
            var4 = var7.bind(var9)(var6);
 694:
            var2 = var4;
            var3 = var5;
            _fun0001_ip = 913; continue _fun0001;
 705:
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
            _fun0001_ip = 913; continue _fun0001;
 777:
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
            _fun0001_ip = 913; continue _fun0001;
 846:
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
 913:
            var1 = {};
            var1['connectionStatus'] = var3;
            var1['connectionStatusText'] = var2;
            return var1;
        }
    };
    var2['getStatus'] = var7;
    var4 = function getShortHostname(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var4 = arg1;
            var1 = null;
            var2 = var1 == var4;
            var1 = '';
            if(var2) { _fun0002_ip = 36; continue _fun0002 }
 16:
            var3 = var4.split;
            var2 = '.';
            var3 = var3.bind(var4)(var2);
            var2 = 0;
            var1 = var3[var2];
 36:
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