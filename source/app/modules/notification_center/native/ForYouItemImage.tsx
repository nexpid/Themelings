// app/modules/notification_center/native/ForYouItemImage.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
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
    var7 = var4.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.getGuildAcronym;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var14 = var4.FRIEND_BACKGROUND;
    var13 = var4.MESSAGE_BACKGROUND;
    var15 = var4.PROFILE_BACKGROUND;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot8 = var4;
    var4 = 7;
    var8 = var6[var4];
    var10 = var5.bind(var1)(var8);
    var9 = var10.createStyles;
    var8 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var6 = arg1;
            var4 = 48;
            if(!var6) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = 32;
case 2:
            var1 = {};
            var2 = {};
            var2['height'] = var4;
            var2['width'] = var4;
            var3 = 2;
            var3 = var4 / var3;
            var2['borderRadius'] = var3;
            var5 = 12;
            if(!var6) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var5 = 8;
case 4:
            var2['marginEnd'] = var5;
            var5 = 'center';
            var2['alignItems'] = var5;
            var2['justifyContent'] = var5;
            var1['container'] = var2;
            var2 = {};
            var2['height'] = var4;
            var2['width'] = var4;
            var2['borderRadius'] = var3;
            var1['rowImage'] = var2;
            var2 = {'height': 'auto', 'maxHeight': null, 'width': 'auto'};
            var2['maxHeight'] = var3;
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 8;
            var7 = var6[var3];
            var4 = undefined;
            var7 = var5.bind(var4)(var7);
            var7 = var7.colors;
            var7 = var7.INTERACTIVE_NORMAL;
            var2['color'] = var7;
            var1['guildFallbackImage'] = var2;
            var2 = {'position': 'absolute', 'bottom': 4294967289, 'right': 4294967289, 'width': 22, 'height': 22, 'padding': 3, 'borderRadius': 11};
            var3 = var6[var3];
            var3 = var5.bind(var4)(var3);
            var3 = var3.colors;
            var3 = var3.BACKGROUND_PRIMARY;
            var2['backgroundColor'] = var3;
            var1['maskContainer'] = var2;
            var2 = {'height': 16, 'width': 16, 'borderRadius': 8, 'justifyContent': 'center', 'alignItems': 'center', 'overflow': 'hidden'};
            var1['mask'] = var2;
            var2 = {'height': 10, 'width': 10};
            var1['maskIcon'] = var2;
            return var1;
        }
    };
    var8 = var9.bind(var10)(var8);
    var _closure1_slot9 = var8;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {};
    var11 = 8;
    var16 = var6[var11];
    var16 = var12.bind(var1)(var16);
    var16 = var16.colors;
    var16 = var16.WHITE;
    var10['color'] = var16;
    var4['fallbackImage'] = var10;
    var10 = {};
    var16 = var6[var11];
    var16 = var12.bind(var1)(var16);
    var16 = var16.colors;
    var16 = var16.INTERACTIVE_NORMAL;
    var10['color'] = var16;
    var4['fallbackImageV2'] = var10;
    var10 = {};
    var16 = var6[var11];
    var16 = var12.bind(var1)(var16);
    var16 = var16.colors;
    var16 = var16.BACKGROUND_ACCENT;
    var10['backgroundColor'] = var16;
    var4['accentBackground'] = var10;
    var10 = {};
    var16 = var6[var11];
    var16 = var12.bind(var1)(var16);
    var16 = var16.colors;
    var16 = var16.STATUS_POSITIVE_BACKGROUND;
    var10['backgroundColor'] = var16;
    var4['successBackground'] = var10;
    var10 = {};
    var16 = var6[var11];
    var16 = var12.bind(var1)(var16);
    var16 = var16.colors;
    var16 = var16.BG_BRAND;
    var10['backgroundColor'] = var16;
    var4['brandBackground'] = var10;
    var10 = {};
    var10['backgroundColor'] = var15;
    var4['profileBackground'] = var10;
    var10 = {};
    var10['backgroundColor'] = var14;
    var4['friendBackground'] = var10;
    var10 = {};
    var10['backgroundColor'] = var13;
    var4['messageBackground'] = var10;
    var10 = {};
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_SECONDARY;
    var10['backgroundColor'] = var11;
    var4['guildGridBackground'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot10 = var4;
    var4 = var7.memo;
    var2 = function(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var10 = var1.item;
            var _closure2_slot0 = var10;
            var12 = var1.compactMode;
            var _closure2_slot1 = var12;
            var4 = undefined;
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var2 = _closure1_slot9;
            var6 = var2.bind(var4)(var12);
            var5 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 20;
            var2 = var7[var2];
            var2 = var5.bind(var4)(var2);
            var2 = var2.bind(var4)();
            var11 = var2.analyticsLocations;
            var _closure2_slot2 = var11;
            var2 = _closure1_slot10;
            var2 = var2.bind(var4)();
            var7 = var10.other_user;
            var8 = null;
            var9 = var8 == var7;
            var5 = undefined;
            if(var9) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var5 = var7.id;
case 6:
            _closure2_slot3 = var5;
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var5 = 21;
            var5 = var9[var5];
            var13 = var7.bind(var4)(var5);
            var9 = var13.useStateFromStores;
            var5 = _closure1_slot7;
            var7 = new Array(1);
            var7[0] = var5;
            var5 = function() {
                var3 = _closure1_slot7;
                var2 = var3.getUser;
                var1 = _closure2_slot3;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var13 = var9.bind(var13)(var7, var5);
            _closure2_slot4 = var13;
            var9 = _closure1_slot3;
            var7 = var9.useMemo;
            var5 = new Array(6);
            var5[0] = var13;
            var5[1] = var12;
            var12 = var10.acked;
            var5[2] = var12;
            var12 = var10.guild_id;
            var5[3] = var12;
            var12 = var10.message_id;
            var5[4] = var12;
            var5[5] = var11;
            var3 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot4;
                    var1 = null;
                    var2 = var1 == var2;
                    if(var2) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                    var5 = _closure1_slot8;
                    var11 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var2 = 22;
                    var2 = var13[var2];
                    var4 = undefined;
                    var2 = var11.bind(var4)(var2);
                    var3 = var2.PressableOpacity;
                    var2 = {};
                    var6 = function onPress() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 23;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = {};
                        var5 = _closure2_slot4;
                        var5 = var5.id;
                        var2['userId'] = var5;
                        var5 = _closure2_slot4;
                        var2['localUser'] = var5;
                        var5 = _closure2_slot0;
                        var5 = var5.message_id;
                        var2['messageId'] = var5;
                        var4 = _closure2_slot2;
                        var2['sourceAnalyticsLocations'] = var4;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var2['onPress'] = var6;
                    var7 = _closure1_slot1;
                    var12 = 24;
                    var6 = var13[var12];
                    var7 = var7.bind(var4)(var6);
                    var6 = {};
                    var9 = 25;
                    var9 = var13[var9];
                    var15 = var11.bind(var4)(var9);
                    var14 = var15.getAvatarSource;
                    var19 = _closure2_slot4;
                    var9 = _closure2_slot0;
                    var18 = var9.guild_id;
                    var16 = var9.acked;
                    var20 = var15;
                    var17 = undefined;
                    var9 = var20[var14](var19, var18, var17, var16, var15);
                    var6['source'] = var9;
                    var9 = _closure2_slot1;
                    var11 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var10 = var10[var12];
                    var10 = var11.bind(var4)(var10);
                    var10 = var10.AvatarSizes;
                    if(var9) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                    var9 = var10.LARGE_48;
                    _fun0003_ip = 12; continue _fun0003;
case 10:
                    var9 = var10.REFRESH_MEDIUM_32;
case 12:
                    var6['size'] = var9;
                    var8 = _closure2_slot4;
                    var8 = var8.avatarDecoration;
                    var6['avatarDecoration'] = var8;
                    var6 = var5.bind(var4)(var7, var6);
                    var2['children'] = var6;
                    var1 = var5.bind(var4)(var3, var2);
case 8:
                    return var1;
                }
            };
            var9 = var7.bind(var9)(var3, var5);
            var3 = var10.icon_name;
            if(!(var8 == var3)) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            var3 = var10.icon_url;
            if(!(var8 == var3)) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var3 = var8 != var9;
            var5 = var9;
            var7 = null;
            if(var3) { _fun0002_ip = 17; continue _fun0002 }
case 18:
            var11 = var10.type;
            var3 = 'lifecycle_item';
            if(!(var3 !== var11)) { _fun0002_ip = 19; continue _fun0002 }
case 20:
            var12 = _closure1_slot6;
            var11 = var12.getGuild;
            var3 = var10.guild_id;
            var11 = var11.bind(var12)(var3);
            var3 = var8 != var11;
            var15 = null;
            if(!var3) { _fun0002_ip = 21; continue _fun0002 }
case 22:
            var3 = _closure1_slot5;
            var15 = var3.bind(var4)(var11);
case 21:
            var11 = var10.type;
            var12 = _closure1_slot0;
            var3 = _closure1_slot2;
            var13 = 9;
            var3 = var3[var13];
            var3 = var12.bind(var4)(var3);
            var3 = var3.NotificationCenterItems;
            var3 = var3.MISSED_MESSAGES;
            if(!(var3 !== var11)) { _fun0002_ip = 23; continue _fun0002 }
case 24:
            var12 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var13];
            var3 = var12.bind(var4)(var3);
            var3 = var3.NotificationCenterItems;
            var3 = var3.FRIEND_REQUEST_REMINDER;
            if(!(var3 !== var11)) { _fun0002_ip = 25; continue _fun0002 }
case 26:
            var12 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var13];
            var3 = var12.bind(var4)(var3);
            var3 = var3.NotificationCenterItems;
            var3 = var3.GUILD_SCHEDULED_EVENT_STARTED;
            if(!(var3 !== var11)) { _fun0002_ip = 27; continue _fun0002 }
case 28:
            var12 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var13];
            var3 = var12.bind(var4)(var3);
            var3 = var3.NotificationCenterItems;
            var3 = var3.TOP_MESSAGES;
            if(!(var3 !== var11)) { _fun0002_ip = 27; continue _fun0002 }
case 29:
            var12 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var13];
            var3 = var12.bind(var4)(var3);
            var3 = var3.NotificationCenterItems;
            var3 = var3.MISSED_MESSAGES;
            if(!(var3 !== var11)) { _fun0002_ip = 27; continue _fun0002 }
case 30:
            var12 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var13];
            var3 = var12.bind(var4)(var3);
            var3 = var3.NotificationCenterItems;
            var3 = var3.TOP_MESSAGES;
            if(!(var3 !== var11)) { _fun0002_ip = 31; continue _fun0002 }
case 32:
            var3 = {};
            var12 = _closure1_slot1;
            var13 = _closure1_slot2;
            var11 = 14;
            var11 = var13[var11];
            var11 = var12.bind(var4)(var11);
            var3['icon'] = var11;
            var11 = var2.fallbackImage;
            var11 = var11.color;
            var3['color'] = var11;
            _fun0002_ip = 33; continue _fun0002;
case 31:
            var11 = {};
            var13 = _closure1_slot1;
            var14 = _closure1_slot2;
            var12 = 13;
            var12 = var14[var12];
            var12 = var13.bind(var4)(var12);
            var11['icon'] = var12;
            var12 = var2.fallbackImage;
            var12 = var12.color;
            var11['color'] = var12;
            var3 = var11;
            _fun0002_ip = 33; continue _fun0002;
case 27:
            var11 = {};
            var13 = _closure1_slot1;
            var14 = _closure1_slot2;
            var12 = 12;
            var12 = var14[var12];
            var12 = var13.bind(var4)(var12);
            var11['icon'] = var12;
            var12 = var2.fallbackImageV2;
            var12 = var12.color;
            var11['color'] = var12;
            var12 = var2.guildGridBackground;
            var11['backgroundStyle'] = var12;
            var3 = var11;
            _fun0002_ip = 33; continue _fun0002;
case 25:
            var11 = {};
            var13 = _closure1_slot1;
            var14 = _closure1_slot2;
            var12 = 11;
            var12 = var14[var12];
            var12 = var13.bind(var4)(var12);
            var11['icon'] = var12;
            var12 = var2.fallbackImage;
            var12 = var12.color;
            var11['color'] = var12;
            var3 = var11;
            _fun0002_ip = 33; continue _fun0002;
case 23:
            var11 = {};
            var13 = _closure1_slot1;
            var14 = _closure1_slot2;
            var12 = 10;
            var12 = var14[var12];
            var12 = var13.bind(var4)(var12);
            var11['icon'] = var12;
            var12 = var2.fallbackImage;
            var12 = var12.color;
            var11['color'] = var12;
            var3 = var11;
case 33:
            var12 = var3.icon;
            var13 = _closure1_slot1;
            var14 = _closure1_slot2;
            var11 = 12;
            var11 = var14[var11];
            var11 = var13.bind(var4)(var11);
            if(!(var12 === var11)) { _fun0002_ip = 34; continue _fun0002 }
case 35:
            if(!(var8 == var15)) { _fun0002_ip = 36; continue _fun0002 }
case 34:
            var13 = _closure1_slot8;
            var12 = _closure1_slot1;
            var14 = _closure1_slot2;
            var11 = 17;
            var11 = var14[var11];
            var12 = var12.bind(var4)(var11);
            var11 = {};
            var14 = var3.icon;
            var11['source'] = var14;
            var14 = var3.color;
            var11['color'] = var14;
            var11 = var13.bind(var4)(var12, var11);
            _fun0002_ip = 37; continue _fun0002;
case 36:
            var14 = _closure1_slot8;
            var13 = _closure1_slot0;
            var16 = _closure1_slot2;
            var12 = 26;
            var12 = var16[var12];
            var12 = var13.bind(var4)(var12);
            var13 = var12.Text;
            var12 = {};
            var17 = var15.length;
            var16 = 4;
            var17 = var17 > var16;
            var16 = 'text-lg/normal';
            if(!var17) { _fun0002_ip = 38; continue _fun0002 }
case 39:
            var16 = 'text-md/normal';
case 38:
            var12['variant'] = var16;
            var17 = var6.rowImage;
            var16 = new Array(2);
            var16[0] = var17;
            var17 = var6.guildFallbackImage;
            var16[1] = var17;
            var12['style'] = var16;
            var12['children'] = var15;
            var11 = var14.bind(var4)(var13, var12);
case 37:
            var3 = var3.backgroundStyle;
            if(!(var8 == var3)) { _fun0002_ip = 40; continue _fun0002 }
case 41:
            var3 = var2.brandBackground;
case 40:
            var7 = var3;
            var5 = var11;
            _fun0002_ip = 17; continue _fun0002;
case 19:
            var11 = var10.item_enum;
            var12 = _closure1_slot0;
            var3 = _closure1_slot2;
            var14 = 9;
            var3 = var3[var14];
            var3 = var12.bind(var4)(var3);
            var3 = var3.ItemEnum;
            var3 = var3.UPDATE_PROFILE;
            if(!(var11 !== var3)) { _fun0002_ip = 42; continue _fun0002 }
case 43:
            var12 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var14];
            var3 = var12.bind(var4)(var3);
            var3 = var3.ItemEnum;
            var3 = var3.FIND_FRIENDS;
            if(!(var11 !== var3)) { _fun0002_ip = 44; continue _fun0002 }
case 45:
            var12 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var14];
            var3 = var12.bind(var4)(var3);
            var3 = var3.ItemEnum;
            var3 = var3.ADD_FRIEND;
            if(!(var11 !== var3)) { _fun0002_ip = 44; continue _fun0002 }
case 46:
            var12 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var14];
            var3 = var12.bind(var4)(var3);
            var3 = var3.ItemEnum;
            var3 = var3.FIRST_MESSAGE;
            if(!(var11 !== var3)) { _fun0002_ip = 47; continue _fun0002 }
case 48:
            var12 = _closure1_slot8;
            var15 = _closure1_slot1;
            var16 = _closure1_slot2;
            var3 = 17;
            var3 = var16[var3];
            var11 = var15.bind(var4)(var3);
            var3 = {};
            var13 = 14;
            var13 = var16[var13];
            var13 = var15.bind(var4)(var13);
            var3['source'] = var13;
            var11 = var12.bind(var4)(var11, var3);
            _fun0002_ip = 49; continue _fun0002;
case 47:
            var13 = _closure1_slot8;
            var16 = _closure1_slot1;
            var17 = _closure1_slot2;
            var3 = 15;
            var3 = var17[var3];
            var12 = var16.bind(var4)(var3);
            var3 = {};
            var15 = 19;
            var15 = var17[var15];
            var15 = var16.bind(var4)(var15);
            var3['source'] = var15;
            var15 = {};
            var16 = '105%';
            var15['width'] = var16;
            var3['style'] = var15;
            var11 = var13.bind(var4)(var12, var3);
case 49:
            _fun0002_ip = 50; continue _fun0002;
case 44:
            var13 = _closure1_slot8;
            var16 = _closure1_slot1;
            var17 = _closure1_slot2;
            var15 = 17;
            var3 = var17[var15];
            var12 = var16.bind(var4)(var3);
            var3 = {};
            var18 = 18;
            var18 = var17[var18];
            var18 = var16.bind(var4)(var18);
            var3['source'] = var18;
            var18 = _closure1_slot0;
            var15 = var17[var15];
            var15 = var18.bind(var4)(var15);
            var15 = var15.IconSizes;
            var15 = var15.SMALL_20;
            var3['size'] = var15;
            var15 = 8;
            var15 = var17[var15];
            var15 = var16.bind(var4)(var15);
            var15 = var15.unsafe_rawColors;
            var15 = var15.WHITE_500;
            var3['color'] = var15;
            var11 = var13.bind(var4)(var12, var3);
case 50:
            _fun0002_ip = 51; continue _fun0002;
case 42:
            var13 = _closure1_slot8;
            var16 = _closure1_slot1;
            var17 = _closure1_slot2;
            var3 = 15;
            var3 = var17[var3];
            var12 = var16.bind(var4)(var3);
            var3 = {};
            var15 = 16;
            var15 = var17[var15];
            var15 = var16.bind(var4)(var15);
            var3['source'] = var15;
            var11 = var13.bind(var4)(var12, var3);
case 51:
            var12 = var10.item_enum;
            var13 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var14];
            var3 = var13.bind(var4)(var3);
            var3 = var3.ItemEnum;
            var3 = var3.UPDATE_PROFILE;
            if(!(var12 !== var3)) { _fun0002_ip = 52; continue _fun0002 }
case 53:
            var13 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var14];
            var3 = var13.bind(var4)(var3);
            var3 = var3.ItemEnum;
            var3 = var3.FIND_FRIENDS;
            if(!(var12 !== var3)) { _fun0002_ip = 54; continue _fun0002 }
case 55:
            var13 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var14];
            var3 = var13.bind(var4)(var3);
            var3 = var3.ItemEnum;
            var3 = var3.ADD_FRIEND;
            if(!(var12 !== var3)) { _fun0002_ip = 54; continue _fun0002 }
case 56:
            var13 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var14];
            var3 = var13.bind(var4)(var3);
            var3 = var3.ItemEnum;
            var3 = var3.FIRST_MESSAGE;
            if(!(var12 !== var3)) { _fun0002_ip = 57; continue _fun0002 }
case 58:
            var12 = var2.brandBackground;
            _fun0002_ip = 59; continue _fun0002;
case 57:
            var12 = var2.messageBackground;
case 59:
            _fun0002_ip = 60; continue _fun0002;
case 54:
            var12 = var2.friendBackground;
case 60:
            _fun0002_ip = 61; continue _fun0002;
case 52:
            var12 = var2.profileBackground;
case 61:
            var13 = var8 != var12;
            var3 = null;
            if(!var13) { _fun0002_ip = 62; continue _fun0002 }
case 63:
            var3 = var12;
case 62:
            var7 = var3;
            var5 = var11;
            _fun0002_ip = 17; continue _fun0002;
case 15:
            var3 = var8 != var9;
            var5 = var9;
            var7 = null;
            if(var3) { _fun0002_ip = 17; continue _fun0002 }
case 64:
            var9 = _closure1_slot8;
            var8 = _closure1_slot1;
            var11 = _closure1_slot2;
            var3 = 15;
            var3 = var11[var3];
            var8 = var8.bind(var4)(var3);
            var3 = {};
            var11 = var6.rowImage;
            var3['style'] = var11;
            var11 = {};
            var12 = var10.icon_url;
            var11['uri'] = var12;
            var3['source'] = var11;
            var11 = 'contain';
            var3['resizeMode'] = var11;
            var5 = var9.bind(var4)(var8, var3);
            var7 = var2.brandBackground;
            _fun0002_ip = 17; continue _fun0002;
case 13:
            var9 = _closure1_slot8;
            var11 = _closure1_slot1;
            var8 = _closure1_slot2;
            var3 = 17;
            var3 = var8[var3];
            var8 = var11.bind(var4)(var3);
            var3 = {};
            var12 = var10.icon_name;
            var10 = 'icHighlight';
            if(!(var10 !== var12)) { _fun0002_ip = 65; continue _fun0002 }
case 66:
            var12 = _closure1_slot2;
            var10 = 14;
            var10 = var12[var10];
            _fun0002_ip = 67; continue _fun0002;
case 65:
            var13 = _closure1_slot2;
            var12 = 13;
            var10 = var13[var12];
case 67:
            var10 = var11.bind(var4)(var10);
            var3['source'] = var10;
            var10 = var2.fallbackImage;
            var10 = var10.color;
            var3['color'] = var10;
            var5 = var9.bind(var4)(var8, var3);
            var7 = var2.brandBackground;
case 17:
            var3 = _closure1_slot8;
            var2 = _closure1_slot4;
            var1 = {};
            var8 = var6.container;
            var6 = new Array(2);
            var6[0] = var8;
            var6[1] = var7;
            var1['style'] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 27;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/notification_center/native/ForYouItemImage.tsx';
    var4 = var5.bind(var6)(var4);
    var3['ForYouItemImage'] = var2;
    return var1;
})();