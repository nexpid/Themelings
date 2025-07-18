// app/utils/native/NotificationUtils.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var8 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var2 = {};
    var7 = true;
    var2['value'] = var7;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var8.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.PermissionStateType;
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.AnalyticEvents;
    var _closure1_slot5 = var2;
    var2 = {};
    var8 = function hasPermission() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 5;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.requestPermissions;
        var1 = function(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var2 = arg1;
                var1 = var2.alert;
                var3 = var2.badge;
                var2 = var2.sound;
                if(var1) { _fun0001_ip = 27; continue _fun0001 }
 24:
                var1 = var3;
 27:
                if(var1) { _fun0001_ip = 33; continue _fun0001 }
 30:
                var1 = var2;
 33:
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['hasPermission'] = var8;
    var8 = function requestPermission(arg1) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var6 = _closure1_slot0;
        var5 = _closure1_slot2;
        var1 = 3;
        var4 = var5[var1];
        var1 = undefined;
        var7 = var6.bind(var1)(var4);
        var6 = var7.setPushPermissionState;
        var4 = _closure1_slot4;
        var4 = var4.REQUESTED;
        var4 = var6.bind(var7)(var4);
        var4 = _closure1_slot1;
        var6 = 4;
        var6 = var5[var6];
        var8 = var4.bind(var1)(var6);
        var7 = var8.track;
        var3 = _closure1_slot5;
        var6 = var3.PERMISSIONS_REQUESTED;
        var3 = {};
        var9 = 'notification';
        var3['type'] = var9;
        var3 = var7.bind(var8)(var6, var3);
        var3 = 5;
        var3 = var5[var3];
        var4 = var4.bind(var1)(var3);
        var3 = var4.requestPermissions;
        var4 = var3.bind(var4)();
        var3 = var4.then;
        var2 = function(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var1 = arg1;
                var3 = var1.alert;
                var2 = var1.sound;
                var1 = var1.badge;
                if(var3) { _fun0002_ip = 27; continue _fun0002 }
 24:
                var3 = var2;
 27:
                if(var3) { _fun0002_ip = 33; continue _fun0002 }
 30:
                var3 = var1;
 33:
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 4;
                var4 = var4[var1];
                var1 = undefined;
                var6 = var5.bind(var1)(var4);
                var5 = var6.track;
                var2 = _closure1_slot5;
                var4 = var2.PERMISSIONS_ACKED;
                var2 = {};
                var7 = 'notification';
                var2['type'] = var7;
                var7 = 'denied';
                if(!var3) { _fun0002_ip = 96; continue _fun0002 }
 92:
                var7 = 'accepted';
 96:
                var2['action'] = var7;
                var2 = var5.bind(var6)(var4, var2);
                var5 = null;
                if(!(var5 != var3)) { _fun0002_ip = 132; continue _fun0002 }
 112:
                var4 = _closure2_slot0;
                if(!(var5 != var4)) { _fun0002_ip = 132; continue _fun0002 }
 123:
                var2 = _closure2_slot0;
                var2 = var2.bind(var1)(var3);
 132:
                return var1;
            }
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['requestPermission'] = var8;
    var8 = function showNotification() {
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0003_ip = 12; continue _fun0003 }
 7:
                    var2 = undefined;
                    return var2;
 12:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var2['showNotification'] = var8;
    var2['shouldRequestNotification'] = var7;
    var4 = function playNotificationSound(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var6 = arguments[1];
            var1 = undefined;
            if(!(var6 === var1)) { _fun0004_ip = 12; continue _fun0004 }
 9:
            var6 = 1;
 12:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 6;
            var2 = var4[var2];
            var5 = var3.bind(var1)(var2);
            var4 = var5.playSound;
            var10 = arg1;
            var7 = arguments[2];
            var11 = var5;
            var9 = var6;
            var8 = undefined;
            var2 = var11[var4](var10, var9, var8, var7, var6);
            return var1;
        }
    };
    var2['playNotificationSound'] = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'utils/native/NotificationUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();