// app/modules/voice_panel/native/hooks/useInviteMembersCallback.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = native4;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = native3;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticsPages;
    var _closure1_slot4 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/voice_panel/native/hooks/useInviteMembersCallback.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useInviteMembersCallback(arg1) {
        var5 = arg1;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot2;
        var3 = var4.useCallback;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var4 = _closure1_slot3;
                var2 = var4.getChannel;
                var1 = _closure2_slot0;
                var4 = var2.bind(var4)(var1);
                var1 = null;
                var2 = var1 != var4;
                if(!var2) { _fun0001_ip = 132; continue _fun0001 }
 33:
                var2 = var4.isPrivate;
                var2 = var2.bind(var4)();
                var7 = _closure1_slot0;
                var6 = _closure1_slot1;
                if(var2) { _fun0001_ip = 88; continue _fun0001 }
 54:
                var2 = 4;
                var5 = var6[var2];
                var2 = undefined;
                var8 = var7.bind(var2)(var5);
                var5 = var8.showInstantInviteActionSheet;
                var2 = 'Voice Channel';
                var2 = var5.bind(var8)(var4, var2);
                _fun0001_ip = 129; continue _fun0001;
 88:
                var5 = 3;
                var6 = var6[var5];
                var5 = undefined;
                var6 = var7.bind(var5)(var6);
                var5 = var6.navigateToNewGroupDM;
                var4 = var4.id;
                var3 = _closure1_slot4;
                var3 = var3.CHANNEL_CALL;
                var2 = var5.bind(var6)(var4, var3);
 129:
                var1 = var2;
 132:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useInviteMembersCallback'] = var2;
    return var1;
})();