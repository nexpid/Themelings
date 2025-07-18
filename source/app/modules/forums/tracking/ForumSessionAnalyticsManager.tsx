// app/modules/forums/tracking/ForumSessionAnalyticsManager.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function createSessionData(arg1) {
        var1 = {};
        var2 = arg1;
        var1['channelId'] = var2;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 2;
        var3 = var3[var2];
        var2 = undefined;
        var3 = var4.bind(var2)(var3);
        var2 = var3.v4;
        var2 = var2.bind(var3)();
        var1['sessionId'] = var2;
        return var1;
    };
    var _closure1_slot4 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var2 = function() {
        var4 = _closure1_slot3;
        var3 = function ForumSessionAnalyticsManager() {
            var4 = _closure1_slot2;
            var3 = _closure2_slot0;
            var1 = undefined;
            var2 = this;
            var2 = var4.bind(var1)(var2, var3);
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var5 = 'getForumChannelSessionId';
        var1['key'] = var5;
        var2 = function value(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var4 = arg1;
                var1 = this;
                var3 = var1.session;
                var2 = null;
                if(!(var2 == var3)) { _fun0001_ip = 38; continue _fun0001 }
 18:
                var3 = _closure1_slot4;
                var2 = undefined;
                var2 = var3.bind(var2)(var4);
                var1['session'] = var2;
 38:
                var2 = var1.session;
                var2 = var2.channelId;
                if(!(var2 !== var4)) { _fun0001_ip = 73; continue _fun0001 }
 53:
                var3 = _closure1_slot4;
                var2 = undefined;
                var2 = var3.bind(var2)(var4);
                var1['session'] = var2;
 73:
                var1 = var1.session;
                var1 = var1.sessionId;
                return var1;
            }
        };
        var1['value'] = var2;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2 = var2.bind(var1)();
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var13 = var4;
    var2 = new var13[var2](var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/forums/tracking/ForumSessionAnalyticsManager.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();