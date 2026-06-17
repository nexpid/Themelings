// app/modules/headless_tasks/android/SelectVoiceChannel.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = require;
    var6 = metroImportDefault;
    var4 = dependencyMap;
    var _closure1_slot0 = var3;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var4;
    var1 = 0;
    var5 = var4[var1];
    var1 = undefined;
    var5 = var6.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var4[var5];
    var5 = var6.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = function(arg1) {
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
            var1 = 2;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.awaitStorage;
            var2 = function() {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    var1 = _closure2_slot1;
                    if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 3;
                    var3 = var3[var1];
                    var1 = undefined;
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.selectVoiceChannel;
                    var1 = _closure2_slot0;
                    var1 = var3.bind(var4)(var1);
case 2:
                    var4 = _closure1_slot4;
                    var3 = var4.getChannelId;
                    var4 = var3.bind(var4)();
                    var3 = _closure2_slot0;
                    if(!(var4 !== var3)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 5;
                    var4 = var4[var3];
                    var3 = undefined;
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.transitionToChannel;
                    var3 = _closure2_slot0;
                    var3 = var4.bind(var5)(var3);
                    _fun0001_ip = 6; continue _fun0001;
case 4:
                    var4 = _closure1_slot3;
                    var3 = var4.getChannel;
                    var2 = _closure2_slot0;
                    var3 = var3.bind(var4)(var2);
                    var2 = null;
                    if(!(var2 != var3)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 4;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var4.bind(var1)(var2);
                    var1 = var2.navigateToVoiceChannel;
                    var1 = var1.bind(var2)(var3);
case 6:
                    var3 = _closure3_slot0;
                    var1 = undefined;
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
    var2 = moduleObject;
    var2['exports'] = var5;
    var2 = 6;
    var2 = var4[var2];
    var4 = var3.bind(var1)(var2);
    var3 = var4.fileFinishedImporting;
    var2 = 'modules/headless_tasks/android/SelectVoiceChannel.tsx';
    var2 = var3.bind(var4)(var2);
    return var1;
})();