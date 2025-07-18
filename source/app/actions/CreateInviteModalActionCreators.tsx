// app/actions/CreateInviteModalActionCreators.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.AnalyticEvents;
    var _closure1_slot4 = var2;
    var2 = {};
    var7 = function init(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg3;
            var5 = this;
            var4 = var2.location;
            var1 = undefined;
            if(!(var4 === var1)) { _fun0001_ip = 21; continue _fun0001 }
 17:
            var4 = '';
 21:
            var9 = var2.targetType;
            var8 = var2.targetUserId;
            var7 = var2.targetApplicationId;
            var3 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 2;
            var2 = var6[var2];
            var6 = var3.bind(var1)(var2);
            var3 = var6.dispatch;
            var2 = {};
            var10 = 'CREATE_INVITE_MODAL_INIT';
            var2['type'] = var10;
            var10 = arg1;
            var2['guildId'] = var10;
            var10 = arg2;
            var2['channelId'] = var10;
            var2['targetType'] = var9;
            var2['targetUserId'] = var8;
            var2['targetApplicationId'] = var7;
            var2 = var3.bind(var6)(var2);
            var3 = var5.createInvite;
            var2 = true;
            var2 = var3.bind(var5)(var4, var2);
            return var1;
        }
    };
    var2['init'] = var7;
    var7 = function openSettings(arg1, arg2, arg3, arg4) {
        var3 = _closure1_slot3;
        var1 = var3.getInviteSettings;
        var10 = var1.bind(var3)();
        var4 = _closure1_slot1;
        var5 = _closure1_slot2;
        var1 = 2;
        var3 = var5[var1];
        var1 = undefined;
        var7 = var4.bind(var1)(var3);
        var6 = var7.dispatch;
        var3 = {};
        var9 = 'CREATE_INVITE_MODAL_OPEN';
        var3['type'] = var9;
        var11 = var3;
        var8 = copyDataProperties(var11, var10);
        var9 = arg1;
        var8 = 'guildId';
        var3[var8] = var9;
        var9 = arg2;
        var8 = 'channelId';
        var3[var8] = var9;
        var9 = arg4;
        var8 = 'onClose';
        var3[var8] = var9;
        var3 = var6.bind(var7)(var3);
        var3 = 3;
        var3 = var5[var3];
        var5 = var4.bind(var1)(var3);
        var4 = var5.track;
        var2 = _closure1_slot4;
        var3 = var2.OPEN_MODAL;
        var2 = {};
        var6 = 'Instant Invite';
        var2['type'] = var6;
        var6 = arg3;
        var2['source'] = var6;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var2['openSettings'] = var7;
    var7 = function updateSettings(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 2;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'CREATE_INVITE_MODAL_UPDATE_SETTINGS';
        var2['type'] = var5;
        var5 = arg1;
        var2['settings'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['updateSettings'] = var7;
    var7 = function resetSettings() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 2;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'CREATE_INVITE_MODAL_RESET_SETTINGS';
        var2['type'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['resetSettings'] = var7;
    var7 = function createInvite(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var4 = _closure1_slot3;
            var2 = var4.getPendingSettings;
            var2 = var2.bind(var4)();
            var14 = null;
            if(!(var14 != var2)) { _fun0002_ip = 289; continue _fun0002 }
 28:
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var4 = 2;
            var4 = var6[var4];
            var13 = undefined;
            var6 = var5.bind(var13)(var4);
            var5 = var6.dispatch;
            var4 = {};
            var7 = 'CREATE_INVITE_MODAL_GENERATE_INVITE';
            var4['type'] = var7;
            var4 = var5.bind(var6)(var4);
            var6 = var2.channelId;
            var _closure2_slot0 = var6;
            var15 = var2.maxAge;
            var12 = var2.maxUses;
            var11 = var2.temporary;
            var9 = var2.targetType;
            var8 = var2.targetUserId;
            var7 = var2.targetApplicationId;
            var2 = var2.flags;
            var5 = _closure1_slot3;
            var4 = var5.getInvite;
            var4 = var4.bind(var5)();
            var5 = arg2;
            var10 = null;
            if(!var5) { _fun0002_ip = 158; continue _fun0002 }
 144:
            var5 = var14 != var4;
            var10 = null;
            if(!var5) { _fun0002_ip = 158; continue _fun0002 }
 153:
            var10 = var4.code;
 158:
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var3 = 4;
            var3 = var5[var3];
            var5 = var4.bind(var13)(var3);
            var4 = var5.createInvite;
            var3 = {};
            var3['temporary'] = var11;
            var3['validate'] = var10;
            var10 = global;
            var14 = var10.parseInt;
            var11 = 10;
            var14 = var14.bind(var13)(var15, var11);
            var3['max_age'] = var14;
            var10 = var10.parseInt;
            var10 = var10.bind(var13)(var12, var11);
            var3['max_uses'] = var10;
            var3['target_type'] = var9;
            var3['target_user_id'] = var8;
            var3['target_application_id'] = var7;
            var3['flags'] = var2;
            var2 = arg1;
            var4 = var4.bind(var5)(var6, var3, var2);
            var3 = var4.then;
            var2 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 2;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.dispatch;
                var2 = {};
                var5 = 'CREATE_INVITE_MODAL_GENERATE_INVITE_SUCCESS';
                var2['type'] = var5;
                var5 = _closure2_slot0;
                var2['channelId'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var1 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = arg1;
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var4 = 5;
                    var5 = var8[var4];
                    var1 = undefined;
                    var5 = var7.bind(var1)(var5);
                    var6 = var5.intl;
                    var5 = var6.string;
                    var4 = var8[var4];
                    var4 = var7.bind(var1)(var4);
                    var4 = var4.t;
                    var4 = var4.WB1ip6;
                    var5 = var5.bind(var6)(var4);
                    var6 = null;
                    var7 = var6 == var3;
                    var4 = undefined;
                    if(var7) { _fun0003_ip = 81; continue _fun0003 }
 76:
                    var4 = var3.message;
 81:
                    if(!(var6 != var4)) { _fun0003_ip = 90; continue _fun0003 }
 85:
                    var5 = var3.message;
 90:
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 2;
                    var2 = var4[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.dispatch;
                    var2 = {};
                    var6 = 'CREATE_INVITE_MODAL_GENERATE_INVITE_FAILURE';
                    var2['type'] = var6;
                    var2['message'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var2, var1);
 289:
            var1 = undefined;
            return var1;
        }
    };
    var2['createInvite'] = var7;
    var4 = function close() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var2 = _closure1_slot3;
            var2 = var2.onClose;
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 2;
            var3 = var3[var1];
            var1 = undefined;
            var5 = var4.bind(var1)(var3);
            var4 = var5.dispatch;
            var3 = {};
            var6 = 'CREATE_INVITE_MODAL_CLOSE';
            var3['type'] = var6;
            var3 = var4.bind(var5)(var3);
            var3 = null;
            if(!(var3 != var2)) { _fun0004_ip = 65; continue _fun0004 }
 61:
            var2 = var2.bind(var1)();
 65:
            return var1;
        }
    };
    var2['close'] = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'actions/CreateInviteModalActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();