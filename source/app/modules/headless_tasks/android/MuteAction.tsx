// app/modules/headless_tasks/android/MuteAction.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var3 = native2;
    var4 = native7;
    var _closure1_slot0 = var3;
    var1 = native3;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var4;
    var1 = 0;
    var5 = var4[var1];
    var1 = undefined;
    var5 = var3.bind(var1)(var5);
    var5 = var5.MuteUntilSeconds;
    var _closure1_slot3 = var5;
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
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 1;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.awaitStorage;
            var2 = function() {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    var1 = _closure2_slot0;
                    var2 = var1.muteTime;
                    var6 = null;
                    var1 = -1;
                    var11 = null;
                    if(!(var1 !== var2)) { _fun0001_ip = 105; continue _fun0001 }
 27:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 2;
                    var2 = var4[var2];
                    var4 = undefined;
                    var2 = var5.bind(var4)(var2);
                    var5 = var2.bind(var4)();
                    var4 = var5.add;
                    var2 = _closure2_slot0;
                    var2 = var2.muteTime;
                    if(!(var6 == var2)) { _fun0001_ip = 85; continue _fun0001 }
 75:
                    var1 = _closure1_slot3;
                    var2 = var1.HOURS_1;
 85:
                    var1 = 'second';
                    var2 = var4.bind(var5)(var2, var1);
                    var1 = var2.toISOString;
                    var11 = var1.bind(var2)();
 105:
                    var5 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var1 = 3;
                    var4 = var10[var1];
                    var1 = undefined;
                    var8 = var5.bind(var1)(var4);
                    var7 = var8.updateChannelOverrideSettings;
                    var3 = _closure2_slot0;
                    var6 = var3.guildId;
                    var15 = var3.channelId;
                    var4 = {};
                    var3 = true;
                    var4['muted'] = var3;
                    var9 = {};
                    var12 = _closure1_slot3;
                    var12 = var12.HOURS_1;
                    var9['selected_time_window'] = var12;
                    var9['end_time'] = var11;
                    var4['mute_config'] = var9;
                    var9 = _closure1_slot0;
                    var2 = 4;
                    var2 = var10[var2];
                    var2 = var9.bind(var1)(var2);
                    var2 = var2.NotificationLabels;
                    var13 = var2.Muted;
                    var17 = var8;
                    var16 = var6;
                    var14 = var4;
                    var2 = var17[var7](var16, var15, var14, var13, var12);
                    var2 = _closure3_slot0;
                    var2 = var2.bind(var1)(var3);
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var5 = var2;
        var1 = new var5[var3](var4, var3);
        var1 = var1 instanceof Object ? var1 : var2;
        return var1;
    };
    var2 = native5;
    var2['exports'] = var5;
    var2 = 5;
    var2 = var4[var2];
    var4 = var3.bind(var1)(var2);
    var3 = var4.fileFinishedImporting;
    var2 = 'modules/headless_tasks/android/MuteAction.tsx';
    var2 = var3.bind(var4)(var2);
    return var1;
})();