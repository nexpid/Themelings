// app/modules/user_profile/native/UserProfileIncomingFriendRequest.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
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
    var _closure1_slot3 = var4;
    var10 = 1;
    var4 = var6[var10];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var12 = 2;
    var4 = var6[var12];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot5 = var7;
    var4 = var4.jsxs;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'rowGap': 16, 'flexDirection': 'column'};
    var4['container'] = var9;
    var9 = {'flexDirection': 'row', 'columnGap': 12};
    var4['buttons'] = var9;
    var9 = {};
    var9['paddingTop'] = var12;
    var4['gameIcon'] = var9;
    var9 = {};
    var9['borderWidth'] = var10;
    var10 = 4;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.BORDER_STRONG;
    var9['borderColor'] = var10;
    var4['friendRequestNote'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot7 = var4;
    var4 = 17;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/native/UserProfileIncomingFriendRequest.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function UserProfileIncomingFriendRequest(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var9 = var1.user;
            var17 = var1.channelId;
            var16 = var1.guildId;
            var15 = var1.isGameRelationship;
            var5 = undefined;
            if(!(var15 === var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var15 = false;
case 2:
            var _closure2_slot0 = var15;
            var3 = var1.applicationId;
            var7 = var1.style;
            var18 = var1.showUserProfile;
            var _closure2_slot1 = var5;
            var _closure2_slot2 = var5;
            var _closure2_slot3 = var5;
            var _closure2_slot4 = var5;
            var _closure2_slot5 = var5;
            var1 = _closure1_slot7;
            var11 = var1.bind(var5)();
            _closure2_slot1 = var11;
            var13 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 5;
            var1 = var4[var1];
            var1 = var13.bind(var5)(var1);
            var8 = var1.bind(var5)();
            var2 = _closure1_slot0;
            var1 = 6;
            var1 = var4[var1];
            var6 = var2.bind(var5)(var1);
            var1 = var6.useUserProfileAnalyticsContext;
            var1 = var1.bind(var6)();
            var1 = var1.trackUserProfileAction;
            _closure2_slot2 = var1;
            var6 = 7;
            var6 = var4[var6];
            var6 = var13.bind(var5)(var6);
            var6 = var6.bind(var5)();
            var19 = var6.newestAnalyticsLocation;
            var6 = 8;
            var6 = var4[var6];
            var14 = var2.bind(var5)(var6);
            var12 = var14.useFriendRequestActions;
            var6 = {};
            var21 = var9.id;
            var6['userId'] = var21;
            var6['applicationId'] = var3;
            var6['isGameRelationship'] = var15;
            var6['location'] = var19;
            var6['onConfirm'] = var18;
            var6['onCancel'] = var18;
            var12 = var12.bind(var14)(var6);
            var6 = var12.acceptFriendRequest;
            _closure2_slot3 = var6;
            var14 = var12.cancelFriendRequest;
            _closure2_slot4 = var14;
            var12 = 9;
            var12 = var4[var12];
            var13 = var13.bind(var5)(var12);
            var12 = var13.useName;
            var23 = var12.bind(var13)(var16, var17, var9);
            var13 = _closure1_slot3;
            var16 = var13.useCallback;
            var12 = new Array(3);
            var12[0] = var6;
            var12[1] = var15;
            var12[2] = var1;
            var6 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot3;
                    var1 = undefined;
                    var2 = var2.bind(var1)();
                    var3 = _closure2_slot2;
                    var2 = {};
                    var5 = _closure2_slot0;
                    var4 = 'ACCEPT_FRIEND_REQUEST';
                    if(!var5) { _fun0002_ip = 4; continue _fun0002 }
case 3:
                    var4 = 'ACCEPT_GAME_FRIEND_REQUEST';
case 4:
                    var2['action'] = var4;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var16 = var16.bind(var13)(var6, var12);
            var12 = var13.useCallback;
            var6 = new Array(3);
            var6[0] = var14;
            var6[1] = var15;
            var6[2] = var1;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot4;
                    var1 = undefined;
                    var2 = var2.bind(var1)();
                    var3 = _closure2_slot2;
                    var2 = {};
                    var5 = _closure2_slot0;
                    var4 = 'IGNORE_FRIEND_REQUEST';
                    if(!var5) { _fun0003_ip = 4; continue _fun0003 }
case 3:
                    var4 = 'IGNORE_GAME_FRIEND_REQUEST';
case 4:
                    var2['action'] = var4;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var14 = var12.bind(var13)(var1, var6);
            var21 = null;
            var24 = var21 != var3;
            var1 = 10;
            var1 = var4[var1];
            var2 = var2.bind(var5)(var1);
            var1 = var2.useGetOrFetchApplication;
            var22 = var1.bind(var2)(var3);
            _closure2_slot5 = var22;
            if(!var24) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var2 = var21 == var22;
            var1 = null;
            if(var2) { _fun0001_ip = 7; continue _fun0001 }
case 5:
            var4 = _closure1_slot6;
            var3 = _closure1_slot4;
            var2 = {};
            var12 = var11.container;
            var6 = new Array(3);
            var6[0] = var12;
            var8 = var8.card;
            var6[1] = var8;
            var6[2] = var7;
            var2['style'] = var6;
            var8 = _closure1_slot5;
            var7 = _closure1_slot0;
            var12 = _closure1_slot2;
            var6 = 11;
            var6 = var12[var6];
            var6 = var7.bind(var5)(var6);
            var7 = var6.Text;
            var12 = {'variant': 'text-sm/semibold', 'color': 'text-default'};
            var13 = _closure1_slot0;
            var6 = _closure1_slot2;
            var19 = 12;
            var17 = var6[var19];
            var17 = var13.bind(var5)(var17);
            var18 = var17.intl;
            var17 = var18.format;
            if(var24) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var6 = var6[var19];
            var6 = var13.bind(var5)(var6);
            var6 = var6.t;
            var13 = var6.uIomXw;
            var6 = {};
            var6['username'] = var23;
            var6 = var17.bind(var18)(var13, var6);
            var12['children'] = var6;
            var6 = var12;
            _fun0001_ip = 10; continue _fun0001;
case 8:
            var24 = _closure1_slot0;
            var13 = _closure1_slot2;
            var13 = var13[var19];
            var13 = var24.bind(var5)(var13);
            var13 = var13.t;
            if(var15) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var15 = var13.V15uUI;
            _fun0001_ip = 13; continue _fun0001;
case 11:
            var15 = var13.syHjLL;
case 13:
            var13 = {};
            var13['username'] = var23;
            var23 = var21 == var22;
            var21 = undefined;
            if(var23) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var21 = var22.name;
case 14:
            var13['applicationName'] = var21;
            var20 = function applicationIcon() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = _closure2_slot5;
                    var1 = null;
                    var3 = var1 == var3;
                    if(var3) { _fun0004_ip = 16; continue _fun0004 }
case 17:
                    var6 = _closure1_slot5;
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var7 = 13;
                    var3 = var9[var7];
                    var5 = undefined;
                    var3 = var8.bind(var5)(var3);
                    var4 = var3.Avatar;
                    var3 = {};
                    var11 = _closure1_slot1;
                    var10 = 14;
                    var10 = var9[var10];
                    var12 = var11.bind(var5)(var10);
                    var11 = var12.getApplicationIconSource;
                    var10 = {};
                    var13 = _closure2_slot5;
                    var13 = var13.id;
                    var10['id'] = var13;
                    var13 = _closure2_slot5;
                    var13 = var13.icon;
                    var10['icon'] = var13;
                    var10 = var11.bind(var12)(var10);
                    var3['source'] = var10;
                    var7 = var9[var7];
                    var7 = var8.bind(var5)(var7);
                    var7 = var7.AvatarSizes;
                    var7 = var7.XXSMALL;
                    var3['size'] = var7;
                    var7 = _closure2_slot1;
                    var7 = var7.gameIcon;
                    var3['style'] = var7;
                    var2 = _closure2_slot5;
                    var2 = var2.id;
                    var1 = var6.bind(var5)(var4, var3, var2);
case 16:
                    return var1;
                }
            };
            var13['applicationIcon'] = var20;
            var13 = var17.bind(var18)(var15, var13);
            var12['children'] = var13;
            var6 = var12;
case 10:
            var7 = var8.bind(var5)(var7, var6);
            var6 = new Array(3);
            var6[0] = var7;
            var13 = _closure1_slot5;
            var8 = _closure1_slot1;
            var15 = _closure1_slot2;
            var7 = 15;
            var7 = var15[var7];
            var8 = var8.bind(var5)(var7);
            var7 = {};
            var9 = var9.id;
            var7['userId'] = var9;
            var9 = var11.friendRequestNote;
            var7['styles'] = var9;
            var7 = var13.bind(var5)(var8, var7);
            var6[1] = var7;
            var9 = _closure1_slot6;
            var8 = _closure1_slot4;
            var7 = {};
            var11 = var11.buttons;
            var7['style'] = var11;
            var18 = _closure1_slot0;
            var11 = 16;
            var10 = var15[var11];
            var10 = var18.bind(var5)(var10);
            var12 = var10.Button;
            var10 = {'size': 'sm', 'variant': 'primary'};
            var17 = var15[var19];
            var17 = var18.bind(var5)(var17);
            var21 = var17.intl;
            var20 = var21.string;
            var17 = var15[var19];
            var17 = var18.bind(var5)(var17);
            var17 = var17.t;
            var17 = var17.Zcibdf;
            var17 = var20.bind(var21)(var17);
            var10['text'] = var17;
            var10['onPress'] = var16;
            var12 = var13.bind(var5)(var12, var10);
            var10 = new Array(2);
            var10[0] = var12;
            var11 = var15[var11];
            var11 = var18.bind(var5)(var11);
            var12 = var11.Button;
            var11 = {'size': 'sm', 'variant': 'secondary'};
            var16 = var15[var19];
            var16 = var18.bind(var5)(var16);
            var17 = var16.intl;
            var16 = var17.string;
            var15 = var15[var19];
            var15 = var18.bind(var5)(var15);
            var15 = var15.t;
            var15 = var15.xuio0C;
            var15 = var16.bind(var17)(var15);
            var11['text'] = var15;
            var11['onPress'] = var14;
            var11 = var13.bind(var5)(var12, var11);
            var10[1] = var11;
            var7['children'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var6[2] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 7:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();