// app/modules/user_profile/native/UserProfileAvatar.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var7;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var4);
    var1 = 0;
    var5 = var7[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var8 = var4.bind(var1)(var5);
    var _closure1_slot3 = var8;
    var4 = 1;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.TrackUserProfileActions;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.AVATAR_SIZE_VARIANT;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var5 = var4.jsx;
    var _closure1_slot7 = var5;
    var5 = var4.Fragment;
    var _closure1_slot8 = var5;
    var4 = var4.jsxs;
    var _closure1_slot9 = var4;
    var5 = var8.forwardRef;
    var4 = function(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var15 = var3.backgroundColor;
            var10 = var3.size;
            var4 = undefined;
            if(!(var10 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var10 = _closure1_slot6;
case 2:
            var1 = null;
            var2 = Object.create(var1);
            var1 = 0;
            var2['backgroundColor'] = var1;
            var2['size'] = var1;
            var18 = {};
            var17 = var3;
            var16 = var2;
            var9 = copyDataProperties(var18, var17, var16);
            var7 = _closure1_slot1;
            var11 = _closure1_slot2;
            var1 = 5;
            var1 = var11[var1];
            var1 = var7.bind(var4)(var1);
            var12 = var1.bind(var4)();
            var3 = _closure1_slot9;
            var2 = _closure1_slot8;
            var1 = {};
            var8 = _closure1_slot7;
            var6 = _closure1_slot4;
            var5 = {};
            var14 = var12.avatarBackground;
            var13 = new Array(3);
            var13[0] = var14;
            var14 = var12.avatarPosition;
            var13[1] = var14;
            var14 = {};
            var14['backgroundColor'] = var15;
            var13[2] = var14;
            var5['style'] = var13;
            var6 = var8.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var6 = 6;
            var6 = var11[var6];
            var7 = var7.bind(var4)(var6);
            var6 = {};
            var11 = arg2;
            var6['ref'] = var11;
            var13 = var12.avatar;
            var11 = new Array(2);
            var11[0] = var13;
            var12 = var12.avatarPosition;
            var11[1] = var12;
            var6['style'] = var11;
            var6['size'] = var10;
            var18 = var6;
            var17 = var9;
            var9 = copyDataProperties(var18, var17);
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = var5.bind(var8)(var4);
    var _closure1_slot10 = var4;
    var5 = 10;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/user_profile/native/UserProfileAvatar.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var2 = function OpenableUserProfileAvatar(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var6 = arg1;
            var12 = var6.animate;
            var4 = undefined;
            if(!(var12 === var4)) { _fun0002_ip = 3; continue _fun0002 }
case 4:
            var12 = true;
case 3:
            var _closure2_slot0 = var12;
            var11 = var6.user;
            var _closure2_slot1 = var11;
            var10 = var6.guildId;
            var _closure2_slot2 = var10;
            var5 = {'animate': 0, 'user': 0, 'guildId': 0};
            var3 = null;
            var17 = var5;
            var16 = null;
            var2 = silentSetPrototypeOf(var17, var16);
            var17 = {};
            var16 = var6;
            var15 = var5;
            var6 = copyDataProperties(var17, var16, var15);
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var7 = _closure1_slot3;
            var2 = var7.useRef;
            var9 = var2.bind(var7)(var3);
            _closure2_slot3 = var9;
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 7;
            var2 = var8[var2];
            var7 = var7.bind(var4)(var2);
            var2 = var7.useUserProfileAnalyticsContext;
            var2 = var2.bind(var7)();
            var13 = var2.trackUserProfileAction;
            _closure2_slot4 = var13;
            var2 = var11.avatar;
            var7 = var3 != var2;
            if(var7) { _fun0002_ip = 5; continue _fun0002 }
case 6:
            var2 = var11.hasAvatarForGuild;
            var7 = var2.bind(var11)(var10);
case 5:
            var8 = _closure1_slot3;
            var3 = var8.useCallback;
            var2 = new Array(4);
            var2[0] = var12;
            var2[1] = var10;
            var2[2] = var13;
            var2[3] = var11;
            var1 = function() {
                var5 = _closure2_slot4;
                var3 = {};
                var1 = _closure1_slot5;
                var1 = var1.VIEW_AVATAR;
                var3['action'] = var1;
                var1 = undefined;
                var3 = var5.bind(var1)(var3);
                var3 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 8;
                var2 = var5[var2];
                var3 = var3.bind(var1)(var2);
                var2 = {};
                var5 = _closure2_slot1;
                var2['user'] = var5;
                var5 = _closure2_slot2;
                var2['guildId'] = var5;
                var5 = _closure2_slot0;
                var2['animate'] = var5;
                var4 = _closure2_slot3;
                var4 = var4.current;
                var2['originViewOrOriginLayout'] = var4;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var8 = var3.bind(var8)(var1, var2);
            var3 = _closure1_slot7;
            var2 = _closure1_slot10;
            var1 = {};
            var1['ref'] = var9;
            var17 = var1;
            var16 = var6;
            var9 = copyDataProperties(var17, var16);
            var9 = 'animate';
            var1[8] = var12;
            var9 = 'user';
            var1[8] = var11;
            var9 = 'guildId';
            var1[8] = var10;
            var9 = undefined;
            if(!var7) { _fun0002_ip = 7; continue _fun0002 }
case 8:
            var9 = var8;
case 7:
            var8 = 'onPress';
            var1[7] = var9;
            if(var7) { _fun0002_ip = 9; continue _fun0002 }
case 10:
            var6 = var6.accessibilityLabel;
            _fun0002_ip = 11; continue _fun0002;
case 9:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var5 = 9;
            var7 = var10[var5];
            var7 = var9.bind(var4)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var5 = var10[var5];
            var5 = var9.bind(var4)(var5);
            var5 = var5.t;
            var5 = var5.xB7MI3;
            var6 = var7.bind(var8)(var5);
case 11:
            var5 = 'accessibilityLabel';
            var1[4] = var6;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['OpenableUserProfileAvatar'] = var2;
    return var1;
})();