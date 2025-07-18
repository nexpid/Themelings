// app/modules/people/hooks/useFriendRequestActions.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var3 = native6;
    var5 = native7;
    var1 = native3;
    var _closure1_slot0 = var1;
    var _closure1_slot1 = var5;
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var7)(var3, var1, var4);
    var1 = 0;
    var6 = var5[var1];
    var4 = native4;
    var1 = undefined;
    var4 = var4.bind(var1)(var6);
    var _closure1_slot2 = var4;
    var4 = 2;
    var5 = var5[var4];
    var4 = native2;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/people/hooks/useFriendRequestActions.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useFriendRequestActions(arg1) {
        var1 = arg1;
        var7 = var1.userId;
        var _closure2_slot0 = var7;
        var12 = var1.applicationId;
        var _closure2_slot1 = var12;
        var11 = var1.isGameRelationship;
        var _closure2_slot2 = var11;
        var10 = var1.location;
        var _closure2_slot3 = var10;
        var8 = var1.onConfirm;
        var _closure2_slot4 = var8;
        var9 = var1.onCancel;
        var _closure2_slot5 = var9;
        var6 = _closure1_slot2;
        var4 = var6.useCallback;
        var2 = new Array(4);
        var2[0] = var12;
        var2[1] = var11;
        var2[2] = var10;
        var2[3] = var7;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 1;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.cancelFriendRequest;
                var2 = {};
                var6 = _closure2_slot0;
                var2['userId'] = var6;
                var7 = _closure2_slot2;
                var6 = null;
                if(!var7) { _fun0001_ip = 57; continue _fun0001 }
 53:
                var6 = _closure2_slot1;
 57:
                var2['applicationId'] = var6;
                var5 = _closure2_slot3;
                var2['location'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            }
        };
        var2 = var4.bind(var6)(var1, var2);
        var1 = {};
        var5 = var6.useCallback;
        var4 = new Array(6);
        var4[0] = var12;
        var4[1] = var11;
        var4[2] = var10;
        var4[3] = var9;
        var4[4] = var8;
        var4[5] = var7;
        var3 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 1;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.maybeConfirmFriendRequestAccept;
                var2 = {};
                var6 = _closure2_slot0;
                var2['userId'] = var6;
                var7 = _closure2_slot2;
                var6 = null;
                if(!var7) { _fun0002_ip = 57; continue _fun0002 }
 53:
                var6 = _closure2_slot1;
 57:
                var2['applicationId'] = var6;
                var6 = _closure2_slot3;
                var2['location'] = var6;
                var6 = _closure2_slot4;
                var2['onConfirm'] = var6;
                var5 = _closure2_slot5;
                var2['onCancel'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            }
        };
        var3 = var5.bind(var6)(var3, var4);
        var1['acceptFriendRequest'] = var3;
        var1['cancelFriendRequest'] = var2;
        return var1;
    };
    var3['useFriendRequestActions'] = var2;
    return var1;
})();