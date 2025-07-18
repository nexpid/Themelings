// app/modules/messages/BackgroundTaskManager.native.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
        var9 = native2;
        var5 = native3;
        var3 = native6;
        var10 = native7;
        var _closure1_slot0 = var9;
        var _closure1_slot1 = var5;
        var _closure1_slot2 = var10;
        var2 = function backgroundify(arg1, arg2) {
            var2 = arg1;
            var _closure2_slot0 = var2;
            var2 = arg2;
            var _closure2_slot1 = var2;
            var3 = _closure1_slot3;
            var2 = undefined;
            var1 = function* () {
                var1 = function* anon_0_() {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0002_ip = 102; continue _fun0002 }
 9:
                        var4 = _closure1_slot5;
                        var _closure4_slot0 = var4;
 20: // try_start_0
                        var6 = _closure1_slot6;
                        var2 = _closure2_slot1;
                        var5 = undefined;
                        var2 = var6.bind(var5)(var2);
                        SaveGenerator(address=42);
 40:
                        return var2;
 42:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                        if(var6) { _fun0002_ip = 81; continue _fun0002 }
 48:
                        _closure4_slot0 = var2;
 52: // try_end0
                        var4 = _closure2_slot0;
                        var5 = var4.bind(var5)();
                        var4 = var5.finally;
                        var3 = function() {
                            var3 = _closure1_slot7;
                            var2 = _closure4_slot0;
                            var1 = undefined;
                            var2 = var3.bind(var1)(var2);
                            return var1;
                        };
                        var3 = var4.bind(var5)(var3);
                        return var3;
 81:
                        return var2;
 84: // catch_target0
                        CatchBlockStart(arg_register=1);
                        var3 = _closure2_slot0;
                        var2 = undefined;
                        var2 = var3.bind(var2)();
                        return var2;
 102:
                        return var1;
                    }
                };
                return var1;
            };
            var1 = var3.bind(var2)(var1);
            return var1;
        };
        var1 = global;
        var8 = var1.Object;
        var6 = var8.defineProperty;
        var4 = {};
        var1 = true;
        var4['value'] = var1;
        var1 = '__esModule';
        var1 = var6.bind(var8)(var3, var1, var4);
        var1 = 0;
        var4 = var10[var1];
        var1 = undefined;
        var4 = var5.bind(var1)(var4);
        var _closure1_slot3 = var4;
        var4 = 1;
        var4 = var10[var4];
        var4 = var9.bind(var1)(var4);
        var4 = var4.NativeModules;
        var _closure1_slot4 = var4;
        var5 = 2;
        var5 = var10[var5];
        var6 = var9.bind(var1)(var5);
        var5 = var6.isAndroid;
        var5 = var5.bind(var6)();
        var6 = -1;
        if(var5) { _fun0001_ip = 146; continue _fun0001 }
 134:
        var4 = var4.DCDBackgroundTaskManager;
        var6 = var4.backgroundTaskIdentifierInvalid;
 146:
        var _closure1_slot5 = var6;
        var5 = function startBackgroundTask(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var1 = arg1;
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 2;
                var2 = var5[var2];
                var6 = undefined;
                var3 = var3.bind(var6)(var2);
                var2 = var3.isAndroid;
                var2 = var2.bind(var3)();
                if(var2) { _fun0003_ip = 62; continue _fun0003 }
 40:
                var2 = _closure1_slot4;
                var3 = var2.DCDBackgroundTaskManager;
                var2 = var3.startBackgroundTask;
                var2 = var2.bind(var3)();
                return var2;
 62:
                var2 = null;
                if(!(var2 != var1)) { _fun0003_ip = 186; continue _fun0003 }
 68:
                var8 = var1.title;
                var5 = var1.content;
                var2 = _closure1_slot1;
                var7 = _closure1_slot2;
                var1 = 3;
                var1 = var7[var1];
                var3 = var2.bind(var6)(var1);
                var2 = var3.addServiceHandler;
                var1 = {};
                var1['title'] = var8;
                var1['content'] = var5;
                var5 = _closure1_slot0;
                var4 = 4;
                var8 = var7[var4];
                var8 = var5.bind(var6)(var8);
                var8 = var8.ServiceNotificationPriority;
                var8 = var8.MEDIUM;
                var1['priority'] = var8;
                var4 = var7[var4];
                var4 = var5.bind(var6)(var4);
                var4 = var4.ServiceNotificationType;
                var4 = var4.FILE_UPLOAD;
                var1['type'] = var4;
                var4 = false;
                var1['usesGateway'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
 186:
                var1 = global;
                var3 = var1.Promise;
                var1 = var3.prototype;
                var2 = Object.create(var1, {constructor: {value: var3}});
                var9 = function(arg1) {
                    var3 = _closure1_slot5;
                    var2 = arg1;
                    var1 = undefined;
                    var1 = var2.bind(var1)(var3);
                    return var1;
                };
                var10 = var2;
                var1 = new var10[var3](var9, var8);
                var1 = var1 instanceof Object ? var1 : var2;
                return var1;
            }
        };
        var _closure1_slot6 = var5;
        var4 = function endBackgroundTask(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var3 = arg1;
                var2 = _closure1_slot5;
                if(!(var3 !== var2)) { _fun0004_ip = 102; continue _fun0004 }
 14:
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 2;
                var2 = var4[var2];
                var4 = undefined;
                var5 = var5.bind(var4)(var2);
                var2 = var5.isAndroid;
                var2 = var2.bind(var5)();
                if(var2) { _fun0004_ip = 71; continue _fun0004 }
 48:
                var2 = _closure1_slot4;
                var5 = var2.DCDBackgroundTaskManager;
                var2 = var5.endBackgroundTask;
                var2 = var2.bind(var5)(var3);
                _fun0004_ip = 102; continue _fun0004;
 71:
                var2 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 3;
                var1 = var5[var1];
                var2 = var2.bind(var4)(var1);
                var1 = var2.removeServiceHandler;
                var1 = var1.bind(var2)(var3);
 102:
                var1 = undefined;
                return var1;
            }
        };
        var _closure1_slot7 = var4;
        var7 = {};
        var7['backgroundTaskIdentifierInvalid'] = var6;
        var7['backgroundify'] = var2;
        var7['startBackgroundTask'] = var5;
        var7['endBackgroundTask'] = var4;
        var8 = 5;
        var8 = var10[var8];
        var10 = var9.bind(var1)(var8);
        var9 = var10.fileFinishedImporting;
        var8 = 'modules/messages/BackgroundTaskManager.native.tsx';
        var8 = var9.bind(var10)(var8);
        var3['default'] = var7;
        var3['backgroundTaskIdentifierInvalid'] = var6;
        var3['startBackgroundTask'] = var5;
        var3['endBackgroundTask'] = var4;
        var3['backgroundify'] = var2;
        return var1;
    }
})();