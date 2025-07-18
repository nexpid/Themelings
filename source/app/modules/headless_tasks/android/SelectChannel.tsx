// app/modules/headless_tasks/android/SelectChannel.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var3 = native2;
    var2 = native7;
    var _closure1_slot0 = var3;
    var4 = native3;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var2;
    var4 = function(arg1) {
        var2 = arg1;
        var3 = var2.channelId;
        var _closure2_slot0 = var3;
        var2 = var2.connectToVoice;
        var _closure2_slot1 = var2;
        var2 = global;
        var3 = var2.Promise;
        var2 = var3.prototype;
        var2 = Object.create(var2, {constructor: {value: var3}});
        var4 = function(arg1) {
            var1 = arg1;
            var _closure3_slot0 = var1;
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 0;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.awaitStorage;
            var2 = function() {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    var1 = _closure2_slot1;
                    if(!var1) { _fun0001_ip = 50; continue _fun0001 }
 10:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 1;
                    var3 = var3[var1];
                    var1 = undefined;
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.selectVoiceChannel;
                    var1 = _closure2_slot0;
                    var1 = var3.bind(var4)(var1);
 50:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 2;
                    var3 = var3[var1];
                    var1 = undefined;
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.transitionToChannel;
                    var2 = _closure2_slot0;
                    var2 = var3.bind(var4)(var2);
                    var3 = _closure3_slot0;
                    var2 = true;
                    var2 = var3.bind(var1)(var2);
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
    var1 = native5;
    var1['exports'] = var4;
    var1 = 3;
    var2 = var2[var1];
    var1 = undefined;
    var4 = var3.bind(var1)(var2);
    var3 = var4.fileFinishedImporting;
    var2 = 'modules/headless_tasks/android/SelectChannel.tsx';
    var2 = var3.bind(var4)(var2);
    return var1;
})();