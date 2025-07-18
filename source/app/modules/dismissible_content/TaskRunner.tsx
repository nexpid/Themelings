// app/modules/dismissible_content/TaskRunner.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native3;
    var3 = native6;
    var5 = native7;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var5[var1];
    var1 = undefined;
    var4 = var6.bind(var1)(var4);
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot1 = var4;
    var2 = function() {
        var4 = _closure1_slot1;
        var3 = function TaskRunner() {
            var3 = this;
            var4 = _closure1_slot0;
            var2 = _closure2_slot0;
            var1 = undefined;
            var2 = var4.bind(var1)(var3, var2);
            var2 = null;
            var3['timeoutId'] = var2;
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'schedule';
        var1['key'] = var2;
        var2 = function value(arg1, arg2) {
            var3 = this;
            var _closure3_slot0 = var3;
            var1 = arg1;
            var _closure3_slot1 = var1;
            var1 = var3.unschedule;
            var1 = var1.bind(var3)();
            var1 = global;
            var5 = var1.setTimeout;
            var1 = undefined;
            var4 = function() {
                var3 = _closure3_slot0;
                var2 = null;
                var3['timeoutId'] = var2;
                var2 = _closure3_slot1;
                var1 = undefined;
                var2 = var2.bind(var1)();
                return var1;
            };
            var2 = arg2;
            var2 = var5.bind(var1)(var4, var2);
            var3['timeoutId'] = var2;
            return var1;
        };
        var1['value'] = var2;
        var2 = new Array(3);
        var2[0] = var1;
        var1 = {};
        var6 = 'unschedule';
        var1['key'] = var6;
        var6 = function value() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var2 = this;
                var1 = var2.scheduled;
                var1 = var1.bind(var2)();
                if(!var1) { _fun0001_ip = 45; continue _fun0001 }
 16:
                var1 = global;
                var4 = var1.clearTimeout;
                var3 = var2.timeoutId;
                var1 = undefined;
                var1 = var4.bind(var1)(var3);
                var1 = null;
                var2['timeoutId'] = var1;
 45:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'scheduled';
        var1['key'] = var6;
        var5 = function value() {
            var1 = this;
            var2 = var1.timeoutId;
            var1 = null;
            var1 = var1 !== var2;
            return var1;
        };
        var1['value'] = var5;
        var2[2] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2 = var2.bind(var1)();
    var4 = 2;
    var5 = var5[var4];
    var4 = native2;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/dismissible_content/TaskRunner.tsx';
    var4 = var5.bind(var6)(var4);
    var3['TaskRunner'] = var2;
    return var1;
})();