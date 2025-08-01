// app/actions/ModalActionCreators.tsx
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
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var5.bind(var1)(var2);
    var2 = var2.AppContext;
    var _closure1_slot3 = var2;
    var2 = {};
    var7 = function push(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var7 = arg1;
            var6 = arg2;
            var1 = arguments[2];
            var5 = arguments[4];
            var4 = undefined;
            if(!(var1 === var4)) { _fun0001_ip = 50; continue _fun0001 }
 18:
            var3 = _closure1_slot1;
            var8 = _closure1_slot2;
            var2 = 1;
            var2 = var8[var2];
            var3 = var3.bind(var4)(var2);
            var2 = 'modal';
            var1 = var3.bind(var4)(var2);
 50:
            if(!(var5 === var4)) { _fun0001_ip = 67; continue _fun0001 }
 54:
            var2 = _closure1_slot3;
            var5 = var2.APP;
 67:
            var9 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 2;
            var2 = var8[var2];
            var10 = var9.bind(var4)(var2);
            var9 = var10.pushModal;
            var2 = {};
            var2['key'] = var1;
            var3 = _closure1_slot1;
            var11 = 3;
            var11 = var8[var11];
            var12 = var3.bind(var4)(var11);
            var15 = {};
            var17 = undefined;
            var16 = var7;
            var14 = var6;
            var13 = var1;
            var11 = var17[var12](var16, var15, var14, var13, var12);
            var2['modal'] = var11;
            var15 = arguments[3];
            var16 = var2;
            var11 = copyDataProperties(var16, var15);
            var2 = var9.bind(var10)(var2);
            var2 = 4;
            var2 = var8[var2];
            var4 = var3.bind(var4)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var8 = 'MODAL_PUSH';
            var2['type'] = var8;
            var2['modal'] = var7;
            var2['props'] = var6;
            var2['key'] = var1;
            var2['appContext'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var2['push'] = var7;
    var7 = function pushLazy(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var6 = arg1;
            var1 = arguments[2];
            var3 = this;
            var _closure2_slot0 = var3;
            var _closure2_slot1 = var6;
            var3 = arg2;
            var _closure2_slot2 = var3;
            var3 = undefined;
            if(!(var1 === var3)) { _fun0002_ip = 64; continue _fun0002 }
 32:
            var5 = _closure1_slot1;
            var7 = _closure1_slot2;
            var4 = 1;
            var4 = var7[var4];
            var5 = var5.bind(var3)(var4);
            var4 = 'modal';
            var1 = var5.bind(var3)(var4);
 64:
            var _closure2_slot3 = var1;
            var1 = arguments[3];
            var _closure2_slot4 = var1;
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 5;
            var1 = var5[var1];
            var4 = var4.bind(var3)(var1);
            var1 = var4.getRootNavigationRef;
            var4 = var1.bind(var4)();
            var1 = null;
            if(!(var1 != var4)) { _fun0002_ip = 127; continue _fun0002 }
 114:
            var1 = var4.isReady;
            var1 = var1.bind(var4)();
            if(var1) { _fun0002_ip = 162; continue _fun0002 }
 127:
            var1 = global;
            var5 = var1.Promise;
            var1 = var5.prototype;
            var4 = Object.create(var1, {constructor: {value: var5}});
            var8 = function(arg1) {
                var2 = arg1;
                var _closure3_slot0 = var2;
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var4.bind(var2)(var3);
                var2 = var3.enqueue;
                var1 = function() {
                    var3 = _closure3_slot0;
                    var7 = _closure2_slot0;
                    var6 = var7.pushLazy;
                    var11 = _closure2_slot1;
                    var10 = _closure2_slot2;
                    var9 = _closure2_slot3;
                    var8 = _closure2_slot4;
                    var12 = var7;
                    var2 = var12[var6](var11, var10, var9, var8, var7);
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var9 = var4;
            var1 = new var9[var5](var8, var7);
            var1 = var1 instanceof Object ? var1 : var4;
            _fun0002_ip = 213; continue _fun0002;
 162:
            var4 = global;
            var4 = var4.Promise;
            var4 = var6 instanceof var4;
            if(var4) { _fun0002_ip = 183; continue _fun0002 }
 177:
            var4 = var6.bind(var3)();
            _fun0002_ip = 198; continue _fun0002;
 183:
            var5 = var6.then;
            var3 = function(arg1) {
                var1 = arg1;
                var1 = var1.default;
                return var1;
            };
            var4 = var5.bind(var6)(var3);
 198:
            var3 = var4.then;
            var2 = function(arg1) {
                var6 = _closure2_slot0;
                var5 = var6.push;
                var9 = _closure2_slot2;
                var8 = _closure2_slot3;
                var7 = _closure2_slot4;
                var10 = arg1;
                var11 = var6;
                var1 = var11[var5](var10, var9, var8, var7, var6);
                return var1;
            };
            var1 = var3.bind(var4)(var2);
 213:
            return var1;
        }
    };
    var2['pushLazy'] = var7;
    var7 = function updateAnimation(arg1, arg2) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 4;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'MODAL_UPDATE';
        var2['type'] = var5;
        var5 = arg1;
        var2['key'] = var5;
        var5 = {};
        var2['props'] = var5;
        var5 = true;
        var2['partial'] = var5;
        var5 = arg2;
        var2['animation'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['updateAnimation'] = var7;
    var7 = function pop() {
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var1 = 2;
        var3 = var4[var1];
        var1 = undefined;
        var5 = var5.bind(var1)(var3);
        var3 = var5.popModal;
        var3 = var3.bind(var5)();
        var3 = _closure1_slot1;
        var2 = 4;
        var2 = var4[var2];
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'MODAL_POP';
        var2['type'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['pop'] = var7;
    var7 = function popWithKey(arg1, arg2) {
        var6 = arg1;
        var5 = arg2;
        var7 = _closure1_slot0;
        var4 = _closure1_slot2;
        var1 = 2;
        var3 = var4[var1];
        var1 = undefined;
        var7 = var7.bind(var1)(var3);
        var3 = var7.popModal;
        var3 = var3.bind(var7)(var6, var5);
        var3 = _closure1_slot1;
        var2 = 4;
        var2 = var4[var2];
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var7 = 'MODAL_POP';
        var2['type'] = var7;
        var2['key'] = var6;
        var2['onExited'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['popWithKey'] = var7;
    var4 = function popAll() {
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var1 = 2;
        var3 = var4[var1];
        var1 = undefined;
        var5 = var5.bind(var1)(var3);
        var3 = var5.popAllModals;
        var3 = var3.bind(var5)();
        var3 = _closure1_slot1;
        var2 = 4;
        var5 = var4[var2];
        var7 = var3.bind(var1)(var5);
        var6 = var7.dispatch;
        var5 = {};
        var8 = 'MODAL_POP_ALL';
        var5['type'] = var8;
        var5 = var6.bind(var7)(var5);
        var5 = var4[var2];
        var7 = var3.bind(var1)(var5);
        var6 = var7.dispatch;
        var5 = {};
        var8 = 'EMAIL_VERIFICATION_MODAL_CLOSE';
        var5['type'] = var8;
        var5 = var6.bind(var7)(var5);
        var5 = var4[var2];
        var7 = var3.bind(var1)(var5);
        var6 = var7.dispatch;
        var5 = {};
        var8 = 'GUILD_SETTINGS_CLOSE';
        var5['type'] = var8;
        var5 = var6.bind(var7)(var5);
        var5 = var4[var2];
        var7 = var3.bind(var1)(var5);
        var6 = var7.dispatch;
        var5 = {};
        var8 = 'HIDE_ACTION_SHEET';
        var5['type'] = var8;
        var5 = var6.bind(var7)(var5);
        var5 = var4[var2];
        var7 = var3.bind(var1)(var5);
        var6 = var7.dispatch;
        var5 = {};
        var8 = 'DISPLAYED_INVITE_CLEAR';
        var5['type'] = var8;
        var5 = var6.bind(var7)(var5);
        var5 = var4[var2];
        var7 = var3.bind(var1)(var5);
        var6 = var7.dispatch;
        var5 = {};
        var8 = 'NOTIFICATION_SETTINGS_MODAL_CLOSE';
        var5['type'] = var8;
        var5 = var6.bind(var7)(var5);
        var5 = var4[var2];
        var7 = var3.bind(var1)(var5);
        var6 = var7.dispatch;
        var5 = {};
        var8 = 'QUICKSWITCHER_HIDE';
        var5['type'] = var8;
        var5 = var6.bind(var7)(var5);
        var5 = var4[var2];
        var7 = var3.bind(var1)(var5);
        var6 = var7.dispatch;
        var5 = {};
        var8 = 'USER_SETTINGS_MODAL_CLOSE';
        var5['type'] = var8;
        var5 = var6.bind(var7)(var5);
        var5 = var4[var2];
        var7 = var3.bind(var1)(var5);
        var6 = var7.dispatch;
        var5 = {};
        var8 = 'CONNECTIONS_GRID_MODAL_HIDE';
        var5['type'] = var8;
        var5 = var6.bind(var7)(var5);
        var2 = var4[var2];
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'USER_PROFILE_MODAL_CLOSE';
        var2['type'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['popAll'] = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'actions/ModalActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();