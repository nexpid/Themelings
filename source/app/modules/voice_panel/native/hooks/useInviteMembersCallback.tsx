// app/modules/voice_panel/native/hooks/useInviteMembersCallback.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
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
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportDefault;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticsPages;
    var _closure1_slot4 = var7;
    var4 = var4.InstantInviteSources;
    var _closure1_slot5 = var4;
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
case 0:
                var4 = _closure1_slot3;
                var2 = var4.getChannel;
                var1 = _closure2_slot0;
                var4 = var2.bind(var4)(var1);
                var1 = null;
                var2 = var1 != var4;
                if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var2 = var4.isPrivate;
                var2 = var2.bind(var4)();
                var7 = _closure1_slot0;
                var6 = _closure1_slot1;
                if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var2 = 4;
                var5 = var6[var2];
                var2 = undefined;
                var8 = var7.bind(var2)(var5);
                var5 = var8.showInstantInviteActionSheet;
                var2 = {};
                var9 = _closure1_slot5;
                var9 = var9.VOICE_CHANNEL;
                var2['source'] = var9;
                var2 = var5.bind(var8)(var4, var2);
                _fun0001_ip = 6; continue _fun0001;
case 4:
                var5 = 3;
                var6 = var6[var5];
                var5 = undefined;
                var6 = var7.bind(var5)(var6);
                var5 = var6.navigateToNewGroupDM;
                var4 = var4.id;
                var3 = _closure1_slot4;
                var3 = var3.CHANNEL_CALL;
                var2 = var5.bind(var6)(var4, var3);
case 6:
                var1 = var2;
case 2:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useInviteMembersCallback'] = var2;
    return var1;
})();