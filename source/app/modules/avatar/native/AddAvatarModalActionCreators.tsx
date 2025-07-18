// app/modules/avatar/native/AddAvatarModalActionCreators.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var1 = native3;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = function closeAddAvatarModal(arg1) {
        var5 = _closure1_slot1;
        var4 = _closure1_slot2;
        var1 = 6;
        var3 = var4[var1];
        var1 = undefined;
        var6 = var5.bind(var1)(var3);
        var5 = var6.popWithKey;
        var3 = _closure1_slot3;
        var3 = var5.bind(var6)(var3);
        var3 = _closure1_slot0;
        var2 = 9;
        var2 = var4[var2];
        var4 = var3.bind(var1)(var2);
        var3 = var4.nextOnboardingStep;
        var2 = {};
        var5 = arg1;
        var2['skip'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var _closure1_slot5 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.ADD_AVATAR_MODAL_KEY;
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot4 = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/avatar/native/AddAvatarModalActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function handlePressNext(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var6 = arg1;
            var2 = arg3;
            var1 = null;
            if(!(var1 != var6)) { _fun0001_ip = 147; continue _fun0001 }
 15:
            var8 = _closure1_slot1;
            var7 = _closure1_slot2;
            var4 = 2;
            var4 = var7[var4];
            var5 = undefined;
            var10 = var8.bind(var5)(var4);
            var9 = var10.track;
            var4 = _closure1_slot4;
            var8 = var4.USER_AVATAR_UPDATED;
            var4 = {};
            var11 = arg2;
            var4['default_avatar_selected'] = var11;
            var11 = false;
            var4['is_guild_profile'] = var11;
            var11 = {};
            var12 = 'Onboarding';
            var11['page'] = var12;
            var4['location'] = var11;
            var4 = var9.bind(var10)(var8, var4);
            var4 = _closure1_slot0;
            var3 = 3;
            var3 = var7[var3];
            var5 = var4.bind(var5)(var3);
            var4 = var5.saveAccountRequest;
            var3 = {};
            var7 = var6.imageUri;
            var3['avatar'] = var7;
            var6 = var6.description;
            var3['avatar_description'] = var6;
            var3 = var4.bind(var5)(var3);
 147:
            if(!(var1 == var2)) { _fun0001_ip = 169; continue _fun0001 }
 151:
            var4 = _closure1_slot5;
            var3 = undefined;
            var1 = false;
            var1 = var4.bind(var3)(var1);
            _fun0001_ip = 175; continue _fun0001;
 169:
            var1 = undefined;
            var1 = var2.bind(var1)();
 175:
            var1 = undefined;
            return var1;
        }
    };
    var3['handlePressNext'] = var4;
    var4 = function showSkipAvatarModal(arg1) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var3 = _closure1_slot1;
        var10 = _closure1_slot2;
        var1 = 2;
        var2 = var10[var1];
        var1 = undefined;
        var8 = var3.bind(var1)(var2);
        var7 = var8.track;
        var2 = _closure1_slot4;
        var4 = var2.NUO_TRANSITION;
        var2 = {'flow_type': 'Mobile NUX Post Reg', 'from_step': 'Skip avatar modal', 'skip_attempt': true};
        var2 = var7.bind(var8)(var4, var2);
        var2 = 4;
        var2 = var10[var2];
        var4 = var3.bind(var1)(var2);
        var3 = var4.show;
        var2 = {};
        var9 = _closure1_slot0;
        var6 = 5;
        var7 = var10[var6];
        var7 = var9.bind(var1)(var7);
        var11 = var7.intl;
        var8 = var11.string;
        var7 = var10[var6];
        var7 = var9.bind(var1)(var7);
        var7 = var7.t;
        var7 = var7.DnKHub;
        var7 = var8.bind(var11)(var7);
        var2['title'] = var7;
        var7 = var10[var6];
        var7 = var9.bind(var1)(var7);
        var11 = var7.intl;
        var8 = var11.string;
        var7 = var10[var6];
        var7 = var9.bind(var1)(var7);
        var7 = var7.t;
        var7 = var7.1EPySE;
        var7 = var8.bind(var11)(var7);
        var2['body'] = var7;
        var7 = var10[var6];
        var7 = var9.bind(var1)(var7);
        var11 = var7.intl;
        var8 = var11.string;
        var7 = var10[var6];
        var7 = var9.bind(var1)(var7);
        var7 = var7.t;
        var7 = var7.7eZ3jo;
        var7 = var8.bind(var11)(var7);
        var2['cancelText'] = var7;
        var7 = var10[var6];
        var7 = var9.bind(var1)(var7);
        var8 = var7.intl;
        var7 = var8.string;
        var6 = var10[var6];
        var6 = var9.bind(var1)(var6);
        var6 = var6.t;
        var6 = var6.nhJ8OD;
        var6 = var7.bind(var8)(var6);
        var2['confirmText'] = var6;
        var5 = function onConfirm() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 3;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var2);
                var2 = var4.setPendingAvatar;
                var5 = null;
                var2 = var2.bind(var4)(var5);
                var4 = _closure2_slot0;
                if(!(var5 == var4)) { _fun0002_ip = 62; continue _fun0002 }
 49:
                var4 = _closure1_slot5;
                var3 = true;
                var3 = var4.bind(var1)(var3);
                _fun0002_ip = 73; continue _fun0002;
 62:
                var3 = _closure2_slot0;
                var2 = true;
                var2 = var3.bind(var1)(var2);
 73:
                return var1;
            }
        };
        var2['onConfirm'] = var5;
        var5 = false;
        var2['hideActionSheet'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['showSkipAvatarModal'] = var4;
    var2 = function openAddAvatarModal() {
        var5 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 6;
        var4 = var3[var1];
        var1 = undefined;
        var6 = var5.bind(var1)(var4);
        var5 = var6.pushLazy;
        var7 = _closure1_slot0;
        var4 = 8;
        var4 = var3[var4];
        var7 = var7.bind(var1)(var4);
        var4 = 7;
        var4 = var3[var4];
        var3 = var3.paths;
        var4 = var7.bind(var1)(var4, var3);
        var3 = _closure1_slot3;
        var2 = {};
        var2 = var5.bind(var6)(var4, var2, var3);
        return var1;
    };
    var3['openAddAvatarModal'] = var2;
    return var1;
})();