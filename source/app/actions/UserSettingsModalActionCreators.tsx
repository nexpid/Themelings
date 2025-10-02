// app/actions/UserSettingsModalActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var5.bind(var1)(var2);
    var7 = var2.Endpoints;
    var _closure1_slot3 = var7;
    var7 = var2.DEVICE_TOKEN;
    var _closure1_slot4 = var7;
    var7 = var2.DEVICE_VOIP_TOKEN;
    var _closure1_slot5 = var7;
    var2 = var2.Layers;
    var2 = 1;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var7 = var2.DEVICE_PUSH_VOIP_PROVIDER;
    var _closure1_slot6 = var7;
    var2 = var2.getDevicePushProvider;
    var _closure1_slot7 = var2;
    var2 = {};
    var7 = function open() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var7 = arguments[0];
            var6 = arguments[1];
            var5 = arguments[2];
            var1 = undefined;
            if(!(var7 === var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var7 = null;
case 2:
            if(!(var6 === var1)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var6 = null;
case 4:
            if(!(var5 === var1)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var2 = {};
            var3 = false;
            var2['openWithoutBackstack'] = var3;
            var5 = var2;
case 6:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 2;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var8 = 'USER_SETTINGS_MODAL_OPEN';
            var2['type'] = var8;
            var2['section'] = var7;
            var2['subsection'] = var6;
            var10 = var2;
            var9 = var5;
            var5 = copyDataProperties(var10, var9);
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var2['open'] = var7;
    var7 = function close() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 2;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'USER_SETTINGS_MODAL_CLOSE';
        var2['type'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['close'] = var7;
    var7 = function setSection(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var6 = arguments[1];
            var5 = arguments[2];
            var1 = undefined;
            if(!(var6 === var1)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var6 = null;
case 8:
            if(!(var5 === var1)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var5 = {};
case 10:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 2;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var7 = 'USER_SETTINGS_MODAL_SET_SECTION';
            var2['type'] = var7;
            var7 = arg1;
            var2['section'] = var7;
            var2['subsection'] = var6;
            var9 = var2;
            var8 = var5;
            var5 = copyDataProperties(var9, var8);
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var2['setSection'] = var7;
    var7 = function clearSubsection(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 2;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'USER_SETTINGS_MODAL_CLEAR_SUBSECTION';
        var2['type'] = var5;
        var5 = arg1;
        var2['forSection'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['clearSubsection'] = var7;
    var7 = function clearScrollPosition(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 2;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION';
        var2['type'] = var5;
        var5 = arg1;
        var2['forSection'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['clearScrollPosition'] = var7;
    var7 = function updateAccount(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 2;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'USER_SETTINGS_MODAL_UPDATE_ACCOUNT';
        var2['type'] = var5;
        var5 = arg1;
        var2['settings'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['updateAccount'] = var7;
    var7 = function submitComplete() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 2;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'USER_SETTINGS_MODAL_SUBMIT_COMPLETE';
        var2['type'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['submitComplete'] = var7;
    var7 = function reset() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 2;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'USER_SETTINGS_MODAL_RESET';
        var2['type'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['reset'] = var7;
    var4 = function saveAccountChanges(arg1, arg2) {
        var2 = arg1;
        var3 = this;
        var _closure2_slot0 = var3;
        var3 = _closure1_slot1;
        var10 = _closure1_slot2;
        var4 = 2;
        var4 = var10[var4];
        var5 = undefined;
        var8 = var3.bind(var5)(var4);
        var7 = var8.dispatch;
        var4 = {};
        var9 = 'USER_SETTINGS_MODAL_SUBMIT';
        var4['type'] = var9;
        var4 = var7.bind(var8)(var4);
        var4 = var2.username;
        var _closure2_slot1 = var4;
        var4 = var2.email;
        var _closure2_slot2 = var4;
        var4 = var2.emailToken;
        var _closure2_slot3 = var4;
        var4 = var2.password;
        var _closure2_slot4 = var4;
        var4 = var2.avatar;
        var _closure2_slot5 = var4;
        var4 = var2.newPassword;
        var _closure2_slot6 = var4;
        var2 = var2.discriminator;
        var _closure2_slot7 = var2;
        var2 = arg2;
        var2 = var2.close;
        var _closure2_slot8 = var2;
        var2 = 3;
        var2 = var10[var2];
        var4 = var3.bind(var5)(var2);
        var3 = {};
        var2 = false;
        var3['checkEnabled'] = var2;
        var2 = {};
        var9 = _closure1_slot0;
        var6 = 6;
        var7 = var10[var6];
        var7 = var9.bind(var5)(var7);
        var8 = var7.intl;
        var7 = var8.string;
        var6 = var10[var6];
        var6 = var9.bind(var5)(var6);
        var6 = var6.t;
        var6 = var6.clQc1d;
        var6 = var7.bind(var8)(var6);
        var2['title'] = var6;
        var3['modalProps'] = var2;
        var2 = {};
        var6 = function onEarlyClose() {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 2;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.dispatch;
            var1 = {};
            var4 = 'USER_SETTINGS_MODAL_SUBMIT_FAILURE';
            var1['type'] = var4;
            var4 = {};
            var1['errors'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var2['onEarlyClose'] = var6;
        var3['hooks'] = var2;
        var2 = function(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var4 = {};
                var2 = _closure2_slot1;
                var4['username'] = var2;
                var2 = _closure2_slot2;
                var4['email'] = var2;
                var2 = _closure2_slot3;
                var4['email_token'] = var2;
                var2 = _closure2_slot4;
                var4['password'] = var2;
                var2 = _closure2_slot5;
                var4['avatar'] = var2;
                var2 = _closure2_slot6;
                var4['new_password'] = var2;
                var10 = arg1;
                var11 = var4;
                var2 = copyDataProperties(var11, var10);
                var2 = _closure2_slot7;
                var6 = null;
                var5 = var6 != var2;
                var3 = undefined;
                var2 = undefined;
                if(!var5) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                var7 = _closure2_slot7;
                var5 = '';
                var2 = undefined;
                if(!(var5 !== var7)) { _fun0003_ip = 12; continue _fun0003 }
case 14:
                var2 = _closure2_slot7;
case 12:
                var1 = 'discriminator';
                var4[var1] = var2;
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var7 = 4;
                var1 = var1[var7];
                var1 = var2.bind(var3)(var1);
                var8 = var1.Storage;
                var2 = var8.get;
                var1 = _closure1_slot4;
                var1 = var2.bind(var8)(var1);
                var2 = _closure1_slot7;
                var2 = var2.bind(var3)();
                var8 = var6 != var2;
                if(!var8) { _fun0003_ip = 15; continue _fun0003 }
case 16:
                var8 = var6 != var1;
case 15:
                if(!var8) { _fun0003_ip = 17; continue _fun0003 }
case 18:
                var4['push_provider'] = var2;
                var4['push_token'] = var1;
case 17:
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var7];
                var1 = var2.bind(var3)(var1);
                var7 = var1.Storage;
                var2 = var7.get;
                var1 = _closure1_slot5;
                var1 = var2.bind(var7)(var1);
                var2 = _closure1_slot6;
                var2 = var6 != var2;
                if(!var2) { _fun0003_ip = 19; continue _fun0003 }
case 20:
                var2 = var6 != var1;
case 19:
                if(!var2) { _fun0003_ip = 21; continue _fun0003 }
case 22:
                var2 = _closure1_slot6;
                var4['push_voip_provider'] = var2;
                var4['push_voip_token'] = var1;
case 21:
                var2 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 5;
                var1 = var6[var1];
                var1 = var2.bind(var3)(var1);
                var3 = var1.HTTP;
                var2 = var3.patch;
                var1 = {};
                var5 = _closure1_slot3;
                var5 = var5.ME;
                var1['url'] = var5;
                var5 = true;
                var1['oldFormErrors'] = var5;
                var1['body'] = var4;
                var4 = false;
                var1['rejectWithError'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            }
        };
        var4 = var4.bind(var5)(var2, var3);
        var3 = var4.then;
        var2 = function(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var1 = arg1;
                var6 = var1.body;
                var11 = var6.token;
                var2 = delete var6.token;
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var7 = 2;
                var8 = var3[var7];
                var5 = undefined;
                var10 = var4.bind(var5)(var8);
                var9 = var10.dispatch;
                var8 = {};
                var12 = 'UPDATE_TOKEN';
                var8['type'] = var12;
                var8['token'] = var11;
                var11 = var6.id;
                var8['userId'] = var11;
                var8 = var9.bind(var10)(var8);
                var3 = var3[var7];
                var8 = var4.bind(var5)(var3);
                var4 = var8.dispatch;
                var3 = {};
                var9 = 'CURRENT_USER_UPDATE';
                var3['type'] = var9;
                var3['user'] = var6;
                var3 = var4.bind(var8)(var3);
                var4 = _closure2_slot5;
                if(!(var5 !== var4)) { _fun0004_ip = 23; continue _fun0004 }
case 24:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var4 = 7;
                var4 = var9[var4];
                var9 = var8.bind(var5)(var4);
                var8 = var9.trackUserAvatarUpdated;
                var4 = {};
                var10 = var6.avatar;
                var4['avatarHash'] = var10;
                var4 = var8.bind(var9)(var4);
case 23:
                var4 = _closure2_slot6;
                var9 = null;
                if(!(var9 != var4)) { _fun0004_ip = 25; continue _fun0004 }
case 26:
                var8 = _closure1_slot1;
                var4 = _closure1_slot2;
                var4 = var4[var7];
                var10 = var8.bind(var5)(var4);
                var8 = var10.dispatch;
                var4 = {};
                var11 = 'USER_PASSWORD_UPDATE';
                var4['type'] = var11;
                var4['user'] = var6;
                var11 = _closure2_slot6;
                var4['newPassword'] = var11;
                var4 = var8.bind(var10)(var4);
case 25:
                var4 = _closure2_slot4;
                var4 = var9 != var4;
                if(!var4) { _fun0004_ip = 27; continue _fun0004 }
case 28:
                var8 = _closure2_slot6;
                var4 = var9 != var8;
case 27:
                if(!var4) { _fun0004_ip = 29; continue _fun0004 }
case 30:
                var4 = _closure1_slot1;
                var2 = _closure1_slot2;
                var2 = var2[var7];
                var5 = var4.bind(var5)(var2);
                var4 = var5.dispatch;
                var2 = {};
                var7 = 'PASSWORD_UPDATED';
                var2['type'] = var7;
                var6 = var6.id;
                var2['userId'] = var6;
                var2 = var4.bind(var5)(var2);
case 29:
                var2 = _closure2_slot8;
                var3 = _closure2_slot0;
                if(var2) { _fun0004_ip = 31; continue _fun0004 }
case 32:
                var2 = var3.submitComplete;
                var2 = var2.bind(var3)();
                _fun0004_ip = 33; continue _fun0004;
case 31:
                var2 = var3.close;
                var2 = var2.bind(var3)();
case 33:
                return var1;
            }
        };
        var1 = function(arg1) {
            var1 = arg1;
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 2;
            var3 = var3[var2];
            var2 = undefined;
            var4 = var4.bind(var2)(var3);
            var3 = var4.dispatch;
            var2 = {};
            var5 = 'USER_SETTINGS_MODAL_SUBMIT_FAILURE';
            var2['type'] = var5;
            var5 = var1.body;
            var2['errors'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var2['saveAccountChanges'] = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'actions/UserSettingsModalActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();