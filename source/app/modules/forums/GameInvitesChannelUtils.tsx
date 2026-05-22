// app/modules/forums/GameInvitesChannelUtils.tsx
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
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/forums/GameInvitesChannelUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useIsGameInvitesPost(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 1;
        var4 = var4[var3];
        var3 = undefined;
        var4 = var5.bind(var3)(var4);
        var3 = var4.useStateFromStores;
        var5 = _closure1_slot2;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var3 = _closure2_slot0;
                var1 = var3.isForumPost;
                var1 = var1.bind(var3)();
                var3 = !var1;
                if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var1 = _closure2_slot0;
                var4 = var1.parent_id;
                var1 = null;
                var3 = var1 == var4;
case 2:
                var1 = !var3;
                if(var3) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var4 = _closure1_slot2;
                var3 = var4.getChannel;
                var2 = _closure2_slot0;
                var2 = var2.parent_id;
                var5 = var3.bind(var4)(var2);
                var2 = null;
                var4 = var2 == var5;
                var3 = undefined;
                if(var4) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                var4 = var5.isGameInvitesChannel;
                var3 = var4.bind(var5)();
case 6:
                var2 = var2 != var3;
                if(!var2) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                var2 = var3;
case 8:
                var1 = var2;
case 4:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['useIsGameInvitesPost'] = var4;
    var2 = function useFirstMessage(arg1, arg2) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 2;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.useFirstForumPostMessage;
        var2 = {};
        var1 = arg2;
        var2['enabled'] = var1;
        var1 = true;
        var2['allowArchived'] = var1;
        var1 = arg1;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useFirstMessage'] = var2;
    return var1;
})();