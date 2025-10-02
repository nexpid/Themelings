// app/modules/user_settings/native/defs/SystemNotificationsSetting.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var1 = function _handleEnableSystemNotification() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 224; continue _fun0001 }
 10:
                    var2 = _closure1_slot4;
                    var4 = var2.NativePermissionManager;
                    var2 = var4.getNotificationAuthorizationStatus;
                    var2 = var2.bind(var4)();
                    SaveGenerator(address=37);
 35:
                    return var2;
 37:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 221; continue _fun0001 }
 46:
                    var4 = _closure1_slot6;
                    var4 = var4.UNDETERMINED;
                    if(!(var2 !== var4)) { _fun0001_ip = 174; continue _fun0001 }
 60:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var4 = 8;
                    var4 = var6[var4];
                    var6 = undefined;
                    var8 = var5.bind(var6)(var4);
                    var7 = var8.track;
                    var4 = _closure1_slot5;
                    var5 = var4.NOTIFICATION_SETTINGS_CLICKED;
                    var4 = {};
                    var9 = 'os';
                    var4['setting_type'] = var9;
                    var9 = _closure1_slot6;
                    var10 = var9.AUTHORIZED;
                    var9 = 0;
                    if(!(var2 === var10)) { _fun0001_ip = 129; continue _fun0001 }
 126:
                    var9 = 1;
 129:
                    var4['current_status'] = var9;
                    var4 = var7.bind(var8)(var5, var4);
                    var5 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var4 = 9;
                    var4 = var7[var4];
                    var5 = var5.bind(var6)(var4);
                    var4 = var5.openNotificationSettings;
                    var4 = var4.bind(var5)();
                    _fun0001_ip = 216; continue _fun0001;
 174:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var3 = 7;
                    var4 = var4[var3];
                    var3 = undefined;
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.requestPermission;
                    var3 = function(arg1) {
                        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                            var3 = arg1;
                            var5 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var1 = 8;
                            var4 = var4[var1];
                            var1 = undefined;
                            var7 = var5.bind(var1)(var4);
                            var6 = var7.track;
                            var4 = _closure1_slot5;
                            var5 = var4.NOTIFICATION_PERMISSION_PREPROMPT_ACKED;
                            var4 = {};
                            var8 = _closure1_slot7;
                            var8 = var8.ALLOW_TO_REQUEST;
                            var4['action_type'] = var8;
                            var8 = _closure1_slot8;
                            var8 = var8.NOTIFICATION_SETTING;
                            var4['action_location'] = var8;
                            var4['permission_granted'] = var3;
                            var4 = var6.bind(var7)(var5, var4);
                            if(var3) { _fun0002_ip = 119; continue _fun0002 }
 89:
                            var3 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var2 = 9;
                            var2 = var4[var2];
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.openNotificationSettings;
                            var2 = var2.bind(var3)();
 119:
                            return var1;
                        }
                    };
                    var3 = var4.bind(var5)(var3);
 216:
                    var3 = undefined;
                    return var3;
 221:
                    return var2;
 224:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot9 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot9 = var1;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var2 = {};
    var4 = true;
    var2['value'] = var4;
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
    var2 = var2.NativeModules;
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var8 = var2.MobileSetting;
    var2 = 3;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.AnalyticEvents;
    var _closure1_slot5 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.NotificationAuthorizationStatus;
    var _closure1_slot6 = var2;
    var2 = 5;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var9 = var2.EventActionType;
    var _closure1_slot7 = var9;
    var2 = var2.EventActionLocation;
    var _closure1_slot8 = var2;
    var2 = {};
    var9 = 6;
    var9 = var6[var9];
    var9 = var5.bind(var1)(var9);
    var9 = var9.RendererType;
    var9 = var9.PRESSABLE;
    var2['type'] = var9;
    var9 = function title() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 10;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.nl2Dq6;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['title'] = var9;
    var8 = var8.NOTIFICATIONS;
    var2['parent'] = var8;
    var7 = function handleEnableSystemNotification() {
        var1 = undefined;
        var4 = _closure1_slot9;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var2['onPress'] = var7;
    var2['withArrow'] = var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/native/defs/SystemNotificationsSetting.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();