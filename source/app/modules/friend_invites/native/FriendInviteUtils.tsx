// app/modules/friend_invites/native/FriendInviteUtils.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function handleInviteAccepted() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 6;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.wait;
        var2 = function() {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 7;
            var1 = var2[var1];
            var2 = undefined;
            var1 = var3.bind(var2)(var1);
            var1 = var1.bind(var2)();
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var _closure1_slot5 = var1;
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
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/friend_invites/native/FriendInviteUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = 7;
    var3['DEFAULT_EXPIRATION_DAYS'] = var4;
    var4 = 5;
    var3['DEFAULT_EXPIRATION_USES'] = var4;
    var4 = function revokeAllFriendInvites() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 2;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.revokeFriendInvites;
        var4 = var2.bind(var3)();
        var3 = var4.then;
        var2 = function() {
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 3;
            var2 = var7[var1];
            var1 = undefined;
            var4 = var6.bind(var1)(var2);
            var3 = var4.open;
            var2 = {};
            var8 = 'TOAST_FRIEND_INVITES_REVOKED';
            var2['key'] = var8;
            var10 = _closure1_slot0;
            var5 = 4;
            var8 = var7[var5];
            var8 = var10.bind(var1)(var8);
            var9 = var8.intl;
            var8 = var9.string;
            var5 = var7[var5];
            var5 = var10.bind(var1)(var5);
            var5 = var5.t;
            var5 = var5.jSHEOT;
            var5 = var8.bind(var9)(var5);
            var2['content'] = var5;
            var5 = 5;
            var5 = var7[var5];
            var5 = var6.bind(var1)(var5);
            var2['icon'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['revokeAllFriendInvites'] = var4;
    var2 = function acceptFriendInvite(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var7 = arg1;
            var _closure2_slot0 = var7;
            var1 = var7.channel;
            var2 = null;
            if(!(var2 == var1)) { _fun0001_ip = 219; continue _fun0001 }
 23:
            var1 = var7.guild;
            if(!(var2 == var1)) { _fun0001_ip = 219; continue _fun0001 }
 35:
            var1 = var7.inviter;
            if(!(var2 != var1)) { _fun0001_ip = 219; continue _fun0001 }
 48:
            var5 = _closure1_slot4;
            var4 = var5.isFriend;
            var3 = var7.inviter;
            var3 = var3.id;
            var3 = var4.bind(var5)(var3);
            var5 = null;
            if(!var3) { _fun0001_ip = 108; continue _fun0001 }
 82:
            var8 = _closure1_slot3;
            var4 = var8.getDMFromUserId;
            var3 = var7.inviter;
            var3 = var3.id;
            var5 = var4.bind(var8)(var3);
 108:
            if(!(var2 == var5)) { _fun0001_ip = 178; continue _fun0001 }
 112:
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 2;
            var3 = var3[var2];
            var2 = undefined;
            var4 = var4.bind(var2)(var3);
            var3 = var4.acceptInviteAndTransitionToInviteChannel;
            var2 = {};
            var7 = var7.code;
            var2['inviteKey'] = var7;
            var7 = arg2;
            var2['context'] = var7;
            var6 = function callback() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var4 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var1 = 3;
                    var3 = var10[var1];
                    var1 = undefined;
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.open;
                    var3 = {};
                    var6 = 'FRIEND_INVITE_ACCEPT_CONFIRMATION';
                    var3['key'] = var6;
                    var7 = _closure1_slot0;
                    var6 = 4;
                    var8 = var10[var6];
                    var8 = var7.bind(var1)(var8);
                    var9 = var8.intl;
                    var8 = var9.formatToPlainString;
                    var6 = var10[var6];
                    var6 = var7.bind(var1)(var6);
                    var6 = var6.t;
                    var7 = var6.st2dcn;
                    var6 = {};
                    var10 = _closure2_slot0;
                    var11 = var10.inviter;
                    var10 = null;
                    var12 = var10 == var11;
                    var10 = undefined;
                    if(var12) { _fun0002_ip = 122; continue _fun0002 }
 117:
                    var10 = var11.username;
 122:
                    var6['username'] = var10;
                    var6 = var8.bind(var9)(var7, var6);
                    var3['content'] = var6;
                    var7 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var6 = 5;
                    var6 = var8[var6];
                    var6 = var7.bind(var1)(var6);
                    var3['icon'] = var6;
                    var3 = var4.bind(var5)(var3);
                    var2 = _closure1_slot5;
                    var2 = var2.bind(var1)();
                    return var1;
                }
            };
            var2['callback'] = var6;
            var2 = var3.bind(var4)(var2);
            _fun0001_ip = 219; continue _fun0001;
 178:
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 2;
            var3 = var3[var2];
            var2 = undefined;
            var4 = var4.bind(var2)(var3);
            var3 = var4.transitionToInviteChannelSync;
            var3 = var3.bind(var4)(var5);
            var1 = _closure1_slot5;
            var1 = var1.bind(var2)();
 219:
            var1 = undefined;
            return var1;
        }
    };
    var3['acceptFriendInvite'] = var2;
    return var1;
})();