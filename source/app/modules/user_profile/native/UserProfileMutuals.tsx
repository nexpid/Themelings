// app/modules/user_profile/native/UserProfileMutuals.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var1 = native3;
    var _closure1_slot1 = var1;
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
    var4 = native4;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.UserProfileSections;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.DIVIDER_DOT;
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot6 = var7;
    var4 = var4.jsxs;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'flexDirection': 'row', 'columnGap': 4, 'flexWrap': 'wrap'};
    var4['container'] = var9;
    var9 = {'flexDirection': 'row', 'alignItems': 'center', 'columnGap': 6};
    var4['section'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot8 = var4;
    var4 = 23;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/native/UserProfileMutuals.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function UserProfileMutuals(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var7 = var1.user;
            var _closure2_slot0 = var7;
            var1 = var1.guildId;
            var _closure2_slot1 = var1;
            var4 = undefined;
            var _closure2_slot7 = var4;
            var _closure2_slot8 = var4;
            var _closure2_slot9 = var4;
            var1 = _closure1_slot8;
            var5 = var1.bind(var4)();
            var _closure2_slot2 = var5;
            var2 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 6;
            var1 = var9[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.useUserProfileAnalyticsContext;
            var1 = var1.bind(var2)();
            var2 = var1.context;
            var _closure2_slot3 = var2;
            var1 = var1.trackUserProfileAction;
            var _closure2_slot4 = var1;
            var8 = _closure1_slot1;
            var1 = 7;
            var1 = var9[var1];
            var1 = var8.bind(var4)(var1);
            var1 = var1.bind(var4)(var7);
            var3 = var1.mutualFriends;
            var _closure2_slot5 = var3;
            var2 = var1.mutualGuilds;
            var _closure2_slot6 = var2;
            var1 = 8;
            var1 = var9[var1];
            var1 = var8.bind(var4)(var1);
            var7 = var1.bind(var4)(var7);
            var1 = null;
            if(var7) { _fun0001_ip = 166; continue _fun0001 }
 164:
            return var1;
 166:
            var7 = var1 != var3;
            if(!var7) { _fun0001_ip = 184; continue _fun0001 }
 173:
            var8 = var3.length;
            var3 = 0;
            var7 = var8 > var3;
 184:
            _closure2_slot7 = var7;
            var8 = var1 != var2;
            if(!var8) { _fun0001_ip = 206; continue _fun0001 }
 195:
            var3 = var2.length;
            var2 = 0;
            var8 = var3 > var2;
 206:
            _closure2_slot8 = var8;
            if(var7) { _fun0001_ip = 218; continue _fun0001 }
 213:
            if(var8) { _fun0001_ip = 218; continue _fun0001 }
 216:
            return var1;
 218:
            var1 = function handlePress(arg1) {
                var8 = arg1;
                var5 = _closure2_slot4;
                var4 = {};
                var1 = 'PRESS_SECTION';
                var4['action'] = var1;
                var4['section'] = var8;
                var1 = undefined;
                var4 = var5.bind(var1)(var4);
                var7 = _closure1_slot1;
                var4 = _closure1_slot2;
                var6 = 9;
                var6 = var4[var6];
                var7 = var7.bind(var1)(var6);
                var6 = var7.openLazy;
                var9 = _closure1_slot0;
                var5 = 11;
                var5 = var4[var5];
                var9 = var9.bind(var1)(var5);
                var5 = 10;
                var5 = var4[var5];
                var4 = var4.paths;
                var13 = var9.bind(var1)(var5, var4);
                var4 = {};
                var9 = _closure2_slot0;
                var4['user'] = var9;
                var4['section'] = var8;
                var3 = _closure2_slot1;
                var4['guildId'] = var3;
                var3 = function onPressMutualFriend(arg1) {
                    var3 = _closure2_slot4;
                    var2 = {};
                    var1 = 'PRESS_MUTUAL_FRIEND';
                    var2['action'] = var1;
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var3 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var2 = 12;
                    var2 = var5[var2];
                    var3 = var3.bind(var1)(var2);
                    var2 = {};
                    var6 = _closure2_slot3;
                    var7 = var2;
                    var4 = copyDataProperties(var7, var6);
                    var5 = arg1;
                    var4 = 'userId';
                    var2[var4] = var5;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var4['onPressMutualFriend'] = var3;
                var2 = function onPressMutualGuild(arg1) {
                    var3 = _closure2_slot4;
                    var2 = {};
                    var1 = 'PRESS_MUTUAL_GUILD';
                    var2['action'] = var1;
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 13;
                    var3 = var4[var3];
                    var6 = var5.bind(var1)(var3);
                    var5 = var6.transitionToGuild;
                    var3 = arg1;
                    var3 = var5.bind(var6)(var3);
                    var3 = _closure1_slot1;
                    var2 = 9;
                    var5 = var4[var2];
                    var6 = var3.bind(var1)(var5);
                    var5 = var6.hideActionSheet;
                    var5 = var5.bind(var6)();
                    var2 = var4[var2];
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.hideActionSheet;
                    var2 = var2.bind(var3)();
                    return var1;
                };
                var4['onPressMutualGuild'] = var2;
                var12 = 'UserProfileMutualsActionSheet';
                var10 = 'stack';
                var14 = var7;
                var11 = var4;
                var2 = var14[var6](var13, var12, var11, var10, var9);
                return var1;
            };
            _closure2_slot9 = var1;
            var3 = _closure1_slot7;
            var2 = _closure1_slot3;
            var1 = {};
            var5 = var5.container;
            var1['style'] = var5;
            var5 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = _closure2_slot7;
                    if(var1) { _fun0002_ip = 16; continue _fun0002 }
 12:
                    var1 = null;
                    return var1;
 16:
                    var9 = _closure2_slot5;
                    var3 = var9.slice;
                    var2 = 0;
                    var1 = 3;
                    var3 = var3.bind(var9)(var2, var1);
                    var2 = var3.map;
                    var1 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.user;
                        return var1;
                    };
                    var14 = var2.bind(var3)(var1);
                    var4 = _closure1_slot7;
                    var7 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var1 = 14;
                    var1 = var12[var1];
                    var3 = undefined;
                    var1 = var7.bind(var3)(var1);
                    var2 = var1.PressableOpacity;
                    var1 = {};
                    var5 = _closure2_slot2;
                    var5 = var5.section;
                    var1['style'] = var5;
                    var5 = 'button';
                    var1['accessibilityRole'] = var5;
                    var5 = function onPress() {
                        var3 = _closure2_slot9;
                        var1 = _closure1_slot4;
                        var2 = var1.MUTUAL_FRIENDS;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var1['onPress'] = var5;
                    var8 = _closure1_slot6;
                    var5 = 15;
                    var5 = var12[var5];
                    var5 = var7.bind(var3)(var5);
                    var6 = var5.AvatarPile;
                    var5 = {};
                    var13 = 16;
                    var13 = var12[var13];
                    var13 = var7.bind(var3)(var13);
                    var13 = var13.AvatarSizes;
                    var13 = var13.SIZE_16;
                    var5['size'] = var13;
                    var13 = var14.length;
                    var5['totalCount'] = var13;
                    var15 = var14.map;
                    var13 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.username;
                        return var1;
                    };
                    var13 = var15.bind(var14)(var13);
                    var5['names'] = var13;
                    var13 = var14.map;
                    var11 = function(arg1) {
                        var1 = arg1;
                        var5 = _closure1_slot6;
                        var3 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var2 = 17;
                        var2 = var8[var2];
                        var4 = undefined;
                        var3 = var3.bind(var4)(var2);
                        var2 = {};
                        var2['user'] = var1;
                        var7 = _closure1_slot0;
                        var6 = 16;
                        var6 = var8[var6];
                        var6 = var7.bind(var4)(var6);
                        var6 = var6.AvatarSizes;
                        var6 = var6.SIZE_16;
                        var2['size'] = var6;
                        var2['guildId'] = var4;
                        var1 = var1.id;
                        var1 = var5.bind(var4)(var3, var2, var1);
                        return var1;
                    };
                    var11 = var13.bind(var14)(var11);
                    var5['children'] = var11;
                    var6 = var8.bind(var3)(var6, var5);
                    var5 = new Array(2);
                    var5[0] = var6;
                    var6 = 18;
                    var6 = var12[var6];
                    var6 = var7.bind(var3)(var6);
                    var7 = var6.Text;
                    var6 = {'variant': 'text-sm/medium', 'color': 'header-secondary'};
                    var11 = _closure1_slot1;
                    var10 = 19;
                    var10 = var12[var10];
                    var10 = var11.bind(var3)(var10);
                    var9 = var9.length;
                    var9 = var10.bind(var3)(var9);
                    var6['children'] = var9;
                    var6 = var8.bind(var3)(var7, var6);
                    var5[1] = var6;
                    var1['children'] = var5;
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
                }
            };
            var9 = var5.bind(var4)();
            var5 = new Array(3);
            var5[0] = var9;
            if(!var7) { _fun0001_ip = 273; continue _fun0001 }
 270:
            var7 = var8;
 273:
            if(!var7) { _fun0001_ip = 333; continue _fun0001 }
 276:
            var10 = _closure1_slot6;
            var9 = _closure1_slot0;
            var12 = _closure1_slot2;
            var8 = 18;
            var8 = var12[var8];
            var8 = var9.bind(var4)(var8);
            var9 = var8.Text;
            var8 = {'variant': 'text-sm/medium', 'color': 'header-secondary', 'accessible': false, 'accessibilityRole': 'none'};
            var11 = _closure1_slot5;
            var8['children'] = var11;
            var7 = var10.bind(var4)(var9, var8);
 333:
            var5[1] = var7;
            var6 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var1 = _closure2_slot8;
                    if(var1) { _fun0003_ip = 16; continue _fun0003 }
 12:
                    var1 = null;
                    return var1;
 16:
                    var4 = _closure2_slot6;
                    var3 = var4.slice;
                    var2 = 0;
                    var1 = 3;
                    var3 = var3.bind(var4)(var2, var1);
                    var2 = var3.map;
                    var1 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.guild;
                        return var1;
                    };
                    var13 = var2.bind(var3)(var1);
                    var4 = _closure1_slot7;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 14;
                    var1 = var3[var1];
                    var3 = undefined;
                    var1 = var2.bind(var3)(var1);
                    var2 = var1.PressableOpacity;
                    var1 = {};
                    var5 = _closure2_slot2;
                    var5 = var5.section;
                    var1['style'] = var5;
                    var5 = 'button';
                    var1['accessibilityRole'] = var5;
                    var5 = function onPress() {
                        var3 = _closure2_slot9;
                        var1 = _closure1_slot4;
                        var2 = var1.MUTUAL_GUILDS;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var1['onPress'] = var5;
                    var5 = _closure2_slot7;
                    var6 = !var5;
                    if(var5) { _fun0003_ip = 250; continue _fun0003 }
 132:
                    var8 = _closure1_slot6;
                    var14 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var5 = 20;
                    var5 = var15[var5];
                    var5 = var14.bind(var3)(var5);
                    var7 = var5.GuildIconPile;
                    var5 = {};
                    var12 = 21;
                    var12 = var15[var12];
                    var12 = var14.bind(var3)(var12);
                    var12 = var12.GuildIconSizes;
                    var12 = var12.XXSMALL;
                    var5['size'] = var12;
                    var12 = var13.length;
                    var5['totalCount'] = var12;
                    var14 = var13.map;
                    var12 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.name;
                        return var1;
                    };
                    var12 = var14.bind(var13)(var12);
                    var5['names'] = var12;
                    var12 = var13.map;
                    var11 = function(arg1) {
                        var1 = arg1;
                        var5 = _closure1_slot6;
                        var3 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var6 = 21;
                        var2 = var8[var6];
                        var4 = undefined;
                        var3 = var3.bind(var4)(var2);
                        var2 = {};
                        var2['guild'] = var1;
                        var7 = _closure1_slot0;
                        var6 = var8[var6];
                        var6 = var7.bind(var4)(var6);
                        var6 = var6.GuildIconSizes;
                        var6 = var6.XXSMALL;
                        var2['size'] = var6;
                        var1 = var1.id;
                        var1 = var5.bind(var4)(var3, var2, var1);
                        return var1;
                    };
                    var11 = var12.bind(var13)(var11);
                    var5['children'] = var11;
                    var6 = var8.bind(var3)(var7, var5);
 250:
                    var5 = new Array(2);
                    var5[0] = var6;
                    var8 = _closure1_slot6;
                    var7 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var6 = 18;
                    var6 = var12[var6];
                    var6 = var7.bind(var3)(var6);
                    var7 = var6.Text;
                    var6 = {'variant': 'text-sm/medium', 'color': 'header-secondary'};
                    var11 = _closure1_slot1;
                    var10 = 22;
                    var10 = var12[var10];
                    var10 = var11.bind(var3)(var10);
                    var9 = _closure2_slot6;
                    var9 = var9.length;
                    var9 = var10.bind(var3)(var9);
                    var6['children'] = var9;
                    var6 = var8.bind(var3)(var7, var6);
                    var5[1] = var6;
                    var1['children'] = var5;
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
                }
            };
            var6 = var6.bind(var4)();
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();