// app/modules/headless_tasks/android/DirectReply.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = require;
    var6 = metroImportDefault;
    var4 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var4;
    var1 = 0;
    var5 = var4[var1];
    var1 = undefined;
    var5 = var6.bind(var1)(var5);
    var _closure1_slot2 = var5;
    var5 = 1;
    var5 = var4[var5];
    var5 = var3.bind(var1)(var5);
    var5 = var5.NativeModules;
    var _closure1_slot3 = var5;
    var5 = 2;
    var5 = var4[var5];
    var5 = var3.bind(var1)(var5);
    var5 = var5.MessageSendLocation;
    var _closure1_slot4 = var5;
    var5 = 3;
    var5 = var4[var5];
    var7 = var6.bind(var1)(var5);
    var5 = var7.prototype;
    var6 = Object.create(var5, {constructor: {value: var7}});
    var8 = 'DirectReply';
    var9 = var6;
    var5 = new var9[var7](var8, var7);
    var5 = var5 instanceof Object ? var5 : var6;
    var _closure1_slot5 = var5;
    var5 = function(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = global;
        var3 = var2.Promise;
        var2 = var3.prototype;
        var2 = Object.create(var2, {constructor: {value: var3}});
        var4 = function(arg1) {
            var1 = arg1;
            var _closure3_slot0 = var1;
            var5 = _closure1_slot5;
            var4 = var5.log;
            var3 = 'Executing DirectReply';
            var3 = var4.bind(var5)(var3);
            var3 = _closure1_slot3;
            var5 = var3.PushNotificationAndroid;
            var4 = var5.markNotificationAsDirectReply;
            var3 = _closure2_slot0;
            var3 = var3.channelId;
            var3 = var4.bind(var5)(var3);
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 4;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.awaitStorage;
            var2 = function() {
                var2 = function _sendMessage() {
                    var4 = undefined;
                    var1 = undefined;
                    var3 = _closure1_slot2;
                    var2 = function* (arg1) {
                        var1 = function* anon_0_(arg1) {
                            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                                StartGenerator();
                                var9 = arg1;
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                                var5 = _closure1_slot0;
                                var3 = _closure1_slot1;
                                var2 = 5;
                                var2 = var3[var2];
                                var3 = undefined;
                                var10 = var5.bind(var3)(var2);
                                var8 = var10.sendMessage;
                                var15 = var9.channelId;
                                var6 = {};
                                var2 = var9.channelReplyText;
                                var6['content'] = var2;
                                var5 = false;
                                var6['tts'] = var5;
                                var2 = new Array(0);
                                var6['invalidEmojis'] = var2;
                                var2 = new Array(0);
                                var6['validNonShortcutEmojis'] = var2;
                                var2 = {};
                                var2['eagerDispatch'] = var5;
                                var11 = _closure1_slot4;
                                var11 = var11.PUSH_NOTIFICATION;
                                var2['location'] = var11;
                                var16 = var10;
                                var14 = var6;
                                var13 = false;
                                var12 = var2;
                                var2 = var16[var8](var15, var14, var13, var12, var11);
                                SaveGenerator(address=128);
case 4:
                                return var2;
case 5:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                                if(var5) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                                var8 = _closure1_slot5;
                                var7 = var8.log;
                                var6 = var2.ok;
                                var5 = 'Sent message, ok:';
                                var5 = var7.bind(var8)(var5, var6);
                                var5 = var2.ok;
                                if(!var5) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                                var4 = _closure1_slot3;
                                var6 = var4.PushNotificationAndroid;
                                var5 = var6.handleDirectReplySuccess;
                                var4 = global;
                                var8 = var4.JSON;
                                var7 = var8.stringify;
                                var4 = {};
                                var14 = var2.body;
                                var15 = var4;
                                var10 = copyDataProperties(var15, var14);
                                var15 = var4;
                                var14 = var9;
                                var9 = copyDataProperties(var15, var14);
                                var4 = var7.bind(var8)(var4);
                                var4 = var5.bind(var6)(var4);
case 8:
                                var5 = _closure3_slot0;
                                var4 = true;
                                var4 = var5.bind(var3)(var4);
                                return var3;
case 6:
                                return var2;
case 2:
                                return var1;
                            }
                        };
                        return var1;
                    };
                    var4 = var3.bind(var4)(var2);
                    _closure4_slot0 = var4;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                var _closure4_slot0 = var2;
                var4 = _closure1_slot5;
                var3 = var4.log;
                var2 = 'Storage loaded';
                var2 = var3.bind(var4)(var2);
                var3 = _closure2_slot0;
                var2 = function sendMessage(arg1) {
                    var1 = undefined;
                    var4 = _closure4_slot0;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                var1 = undefined;
                var2 = var2.bind(var1)(var3);
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var5 = var2;
        var1 = new var5[var3](var4, var3);
        var1 = var1 instanceof Object ? var1 : var2;
        return var1;
    };
    var2 = moduleObject;
    var2['exports'] = var5;
    var2 = 6;
    var2 = var4[var2];
    var4 = var3.bind(var1)(var2);
    var3 = var4.fileFinishedImporting;
    var2 = 'modules/headless_tasks/android/DirectReply.tsx';
    var2 = var3.bind(var4)(var2);
    return var1;
})();