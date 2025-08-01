// app/modules/people/AcceptFriendRequestModalActionCreators.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.ACCEPT_FRIEND_REQUEST_CONFIRMATION_MODAL_ID;
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot5 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/people/AcceptFriendRequestModalActionCreators.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function openAcceptFriendRequestConfirmModal(arg1) {
        var1 = arg1;
        var2 = var1.onConfirm;
        var _closure2_slot0 = var2;
        var1 = var1.onCancel;
        var _closure2_slot1 = var1;
        var3 = _closure1_slot1;
        var4 = _closure1_slot2;
        var1 = 3;
        var2 = var4[var1];
        var1 = undefined;
        var8 = var3.bind(var1)(var2);
        var7 = var8.track;
        var2 = _closure1_slot4;
        var6 = var2.OPEN_MODAL;
        var2 = {};
        var9 = _closure1_slot3;
        var2['type'] = var9;
        var2 = var7.bind(var8)(var6, var2);
        var2 = 4;
        var2 = var4[var2];
        var4 = var3.bind(var1)(var2);
        var3 = var4.openLazy;
        var2 = {};
        var5 = function importer() {
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var2 = 6;
            var2 = var1[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = 5;
            var2 = var1[var2];
            var1 = var1.paths;
            var3 = var3.bind(var4)(var2, var1);
            var2 = var3.then;
            var1 = function(arg1) {
                var2 = arg1;
                var2 = var2.default;
                var _closure4_slot0 = var2;
                var1 = function(arg1) {
                    var5 = arg1;
                    var _closure5_slot0 = var5;
                    var4 = _closure1_slot5;
                    var3 = _closure4_slot0;
                    var2 = {};
                    var7 = var2;
                    var6 = var5;
                    var5 = copyDataProperties(var7, var6);
                    var5 = function onCancel() {
                        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                            var2 = _closure5_slot0;
                            var1 = var2.onClose;
                            var1 = var1.bind(var2)();
                            var3 = _closure2_slot1;
                            var2 = null;
                            if(!(var2 != var3)) { _fun0001_ip = 40; continue _fun0001 }
 30:
                            var2 = _closure2_slot1;
                            var1 = undefined;
                            var1 = var2.bind(var1)();
 40:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var1 = 'onCancel';
                    var2[var1] = var5;
                    var5 = _closure2_slot0;
                    var1 = 'onConfirm';
                    var2[var1] = var5;
                    var1 = undefined;
                    var1 = var4.bind(var1)(var3, var2);
                    return var1;
                };
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var2['importer'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['openAcceptFriendRequestConfirmModal'] = var2;
    return var1;
})();