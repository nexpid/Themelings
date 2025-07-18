// app/actions/native/DisplayedInviteActionCreators.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var4 = native7;
    var _closure1_slot0 = var5;
    var1 = native3;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var4;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = 3;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'actions/native/DisplayedInviteActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function showInvite(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var5 = arg1;
            var1 = arg3;
            var2 = null;
            if(!(var2 == var1)) { _fun0001_ip = 14; continue _fun0001 }
 12:
            var1 = {};
 14:
            var9 = var1.deeplinkAttemptId;
            var4 = var1.location;
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 0;
            var3 = var6[var1];
            var1 = undefined;
            var3 = var7.bind(var1)(var3);
            var3 = _closure1_slot1;
            var2 = 1;
            var2 = var6[var2];
            var8 = var3.bind(var1)(var2);
            var7 = var8.dispatch;
            var2 = {};
            var10 = 'DISPLAYED_INVITE_SHOW';
            var2['type'] = var10;
            var2['code'] = var5;
            var10 = arg2;
            var2['username'] = var10;
            var2['deeplinkAttemptId'] = var9;
            var2 = var7.bind(var8)(var2);
            var2 = 2;
            var2 = var6[var2];
            var3 = var3.bind(var1)(var2);
            var2 = var3.resolveInvite;
            var2 = var2.bind(var3)(var5, var4);
            return var1;
        }
    };
    var3['showInvite'] = var4;
    var2 = function clearDisplayedInvite() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 1;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'DISPLAYED_INVITE_CLEAR';
        var2['type'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['clearDisplayedInvite'] = var2;
    return var1;
})();