// app/modules/keyboard/native/PortalKeyboard.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var4);
    var1 = 0;
    var5 = var7[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var5);
    var4 = 1;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot2 = var4;
    var4 = {};
    var5 = 'empty';
    var4['EMPTY'] = var5;
    var5 = 'request_open';
    var4['REQUEST_OPEN'] = var5;
    var5 = 'opening';
    var4['OPENING'] = var5;
    var5 = 'open';
    var4['OPEN'] = var5;
    var5 = 'request_close';
    var4['REQUEST_CLOSE'] = var5;
    var5 = 'closing';
    var4['CLOSING'] = var5;
    var5 = 'closed';
    var4['CLOSED'] = var5;
    var5 = 5;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/keyboard/native/PortalKeyboard.tsx';
    var5 = var6.bind(var7)(var5);
    var3['PortalKeyboardState'] = var4;
    var4 = 'default';
    var3['PORTAL_HOST_NAME_DEFAULT'] = var4;
    var4 = 'modal';
    var3['PORTAL_HOST_NAME_MODAL'] = var4;
    var4 = function PortalKeyboard(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var5 = var1.children;
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 2;
            var2 = var4[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = var3.useIsModalOpen;
            var2 = var2.bind(var3)();
            var3 = 'default';
            var6 = var3;
            if(!var2) { _fun0001_ip = 93; continue _fun0001 }
 53:
            var7 = _closure1_slot0;
            var8 = _closure1_slot1;
            var2 = 3;
            var2 = var8[var2];
            var7 = var7.bind(var4)(var2);
            var2 = var7.isIOS;
            var2 = var2.bind(var7)();
            var6 = var3;
            if(!var2) { _fun0001_ip = 93; continue _fun0001 }
 89:
            var6 = 'modal';
 93:
            var3 = _closure1_slot2;
            var2 = _closure1_slot0;
            var7 = _closure1_slot1;
            var1 = 4;
            var1 = var7[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.Portal;
            var1 = {};
            var1['hostName'] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['PortalKeyboard'] = var4;
    var2 = function PortalKeyboardHost(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var5 = var1.name;
            var4 = undefined;
            if(!(var5 === var4)) { _fun0002_ip = 18; continue _fun0002 }
 14:
            var5 = 'default';
 18:
            var3 = _closure1_slot2;
            var2 = _closure1_slot0;
            var6 = _closure1_slot1;
            var1 = 4;
            var1 = var6[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.PortalHost;
            var1 = {};
            var1['name'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['PortalKeyboardHost'] = var2;
    return var1;
})();