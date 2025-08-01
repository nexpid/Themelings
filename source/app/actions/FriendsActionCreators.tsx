// app/actions/FriendsActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var7 = function setSection(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 1;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'FRIENDS_SET_SECTION';
        var2['type'] = var5;
        var5 = arg1;
        var2['section'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var _closure1_slot4 = var7;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var5.bind(var1)(var2);
    var2 = var2.Routes;
    var _closure1_slot3 = var2;
    var2 = {};
    var8 = function transitionToSection(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arg1;
            var2 = arguments[1];
            var1 = undefined;
            if(!(var2 === var1)) { _fun0001_ip = 14; continue _fun0001 }
 12:
            var2 = {};
 14:
            var3 = var2.explicit;
            if(!(var3 === var1)) { _fun0001_ip = 26; continue _fun0001 }
 24:
            var3 = false;
 26:
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var7 = 2;
            var5 = var5[var7];
            var6 = var6.bind(var1)(var5);
            var5 = var6.getHistory;
            var5 = var5.bind(var6)();
            var5 = var5.location;
            var6 = var5.pathname;
            var5 = _closure1_slot3;
            var5 = var5.FRIENDS;
            if(!(var6 !== var5)) { _fun0001_ip = 122; continue _fun0001 }
 84:
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var7];
            var7 = var6.bind(var1)(var5);
            var6 = var7.transitionTo;
            var5 = _closure1_slot3;
            var5 = var5.FRIENDS;
            var5 = var6.bind(var7)(var5);
 122:
            var5 = _closure1_slot4;
            var5 = var5.bind(var1)(var4);
            if(!var3) { _fun0001_ip = 166; continue _fun0001 }
 134:
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 3;
            var2 = var5[var2];
            var3 = var3.bind(var1)(var2);
            var2 = {};
            var2['tab_opened'] = var4;
            var2 = var3.bind(var1)(var2);
 166:
            return var1;
        }
    };
    var2['transitionToSection'] = var8;
    var2['setSection'] = var7;
    var4 = function setInitialSection(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 1;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'FRIENDS_SET_INITIAL_SECTION';
        var2['type'] = var5;
        var5 = arg1;
        var2['section'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['setInitialSection'] = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'actions/FriendsActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();