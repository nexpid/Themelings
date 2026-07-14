// app/modules/in_app_notifications/native/ReactionNotification.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var5 = require;
        var13 = metroImportDefault;
        var3 = exports;
        var6 = dependencyMap;
        var _closure1_slot0 = var5;
        var _closure1_slot1 = var13;
        var _closure1_slot2 = var6;
        var1 = function ReactorNotificationIcon(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var1 = arg1;
                var11 = var1.user;
                var9 = var1.guild;
                var1 = var1.isMilestone;
                var2 = _closure1_slot13;
                var5 = undefined;
                var7 = var2.bind(var5)();
                if(var1) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                var8 = null;
                if(!(var8 == var11)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                var3 = _closure1_slot9;
                var2 = _closure1_slot1;
                var12 = _closure1_slot2;
                var4 = 11;
                var1 = var12[var4];
                var2 = var2.bind(var5)(var1);
                var1 = {};
                var1['guild'] = var9;
                var10 = _closure1_slot0;
                var4 = var12[var4];
                var4 = var10.bind(var5)(var4);
                var4 = var4.GuildIconSizes;
                var4 = var4.NORMAL;
                var1['size'] = var4;
                var1 = var3.bind(var5)(var2, var1);
                _fun0002_ip = 6; continue _fun0002;
case 4:
                var4 = _closure1_slot9;
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var10 = 6;
                var2 = var2[var10];
                var2 = var3.bind(var5)(var2);
                var3 = var2.Avatar;
                var2 = {};
                var2['user'] = var11;
                var11 = var8 == var9;
                var8 = undefined;
                if(var11) { _fun0002_ip = 7; continue _fun0002 }
case 8:
                var8 = var9.id;
case 7:
                var2['guildId'] = var8;
                var9 = _closure1_slot0;
                var8 = _closure1_slot2;
                var8 = var8[var10];
                var8 = var9.bind(var5)(var8);
                var8 = var8.AvatarSizes;
                var8 = var8.NORMAL;
                var2['size'] = var8;
                var1 = var4.bind(var5)(var3, var2);
case 6:
                _fun0002_ip = 9; continue _fun0002;
case 2:
                var4 = _closure1_slot9;
                var3 = _closure1_slot4;
                var2 = {};
                var7 = var7.clydeNotificationIcon;
                var2['style'] = var7;
                var8 = _closure1_slot9;
                var7 = _closure1_slot0;
                var9 = _closure1_slot2;
                var6 = 10;
                var6 = var9[var6];
                var6 = var7.bind(var5)(var6);
                var7 = var6.ClydeIcon;
                var6 = {'color': 'white', 'size': 'md'};
                var6 = var8.bind(var5)(var7, var6);
                var2['children'] = var6;
                var1 = var4.bind(var5)(var3, var2);
case 9:
                return var1;
            }
        };
        var _closure1_slot14 = var1;
        var1 = global;
        var8 = var1.Object;
        var7 = var8.defineProperty;
        var4 = {};
        var1 = true;
        var4['value'] = var1;
        var1 = '__esModule';
        var1 = var7.bind(var8)(var3, var1, var4);
        var15 = 0;
        var7 = var6[var15];
        var4 = metroImportAll;
        var1 = undefined;
        var4 = var4.bind(var1)(var7);
        var _closure1_slot3 = var4;
        var4 = 1;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var4 = var4.View;
        var _closure1_slot4 = var4;
        var11 = 2;
        var4 = var6[var11];
        var4 = var13.bind(var1)(var4);
        var _closure1_slot5 = var4;
        var4 = 3;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var7 = var4.IN_APP_NOTIFICATION_MAX_HEIGHT;
        var _closure1_slot6 = var7;
        var4 = var4.NOTIFICATION_PREVIEW_LINE_CLAMP;
        var _closure1_slot7 = var4;
        var16 = 4;
        var4 = var6[var16];
        var4 = var5.bind(var1)(var4);
        var4 = var4.ChannelTypes;
        var _closure1_slot8 = var4;
        var4 = 5;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var7 = var4.jsx;
        var _closure1_slot9 = var7;
        var7 = var4.Fragment;
        var _closure1_slot10 = var7;
        var4 = var4.jsxs;
        var _closure1_slot11 = var4;
        var4 = 6;
        var7 = var6[var4];
        var7 = var5.bind(var1)(var7);
        var7 = var7.AVATAR_SIZE_MAP;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var4 = var4.AvatarSizes;
        var4 = var4.NORMAL;
        var10 = var7[var4];
        var4 = 7;
        var7 = var6[var4];
        var9 = var5.bind(var1)(var7);
        var8 = var9.createStyles;
        var7 = {};
        var12 = {'paddingRight': 4, 'paddingTop': 0};
        var7['newContainerRoleDot'] = var12;
        var12 = {};
        var14 = 'column';
        var12['flexDirection'] = var14;
        var7['container'] = var12;
        var12 = {};
        var14 = 12;
        var12['fontSize'] = var14;
        var7['textEmoji'] = var12;
        var12 = {'height': 16, 'width': 16};
        var14 = 8;
        var17 = var6[var14];
        var18 = var5.bind(var1)(var17);
        var17 = var18.isIOS;
        var18 = var17.bind(var18)();
        var17 = undefined;
        if(var18) { _fun0001_ip = 10; continue _fun0001 }
case 11:
        var19 = {};
        var19['translateY'] = var11;
        var18 = new Array(1);
        var18[0] = var19;
        var17 = var18;
case 10:
        var12['transform'] = var17;
        var7['imageEmoji'] = var12;
        var12 = {};
        var17 = var6[var14];
        var18 = var5.bind(var1)(var17);
        var17 = var18.isIOS;
        var17 = var17.bind(var18)();
        var15 = 0;
        if(!var17) { _fun0001_ip = 12; continue _fun0001 }
case 13:
        var15 = var16;
case 12:
        var12['marginBottom'] = var15;
        var7['notificationBodyText'] = var12;
        var12 = {};
        var15 = 'italic';
        var12['fontStyle'] = var15;
        var14 = var6[var14];
        var15 = var5.bind(var1)(var14);
        var14 = var15.isIOS;
        var15 = var14.bind(var15)();
        var14 = 'ggsans-MediumItalic, NotoSans-MediumItalic';
        if(!var15) { _fun0001_ip = 14; continue _fun0001 }
case 15:
        var14 = 'ggsans-NormalItalic, NotoSans-NormalItalic';
case 14:
        var12['fontFamily'] = var14;
        var7['italic'] = var12;
        var7 = var8.bind(var9)(var7);
        var _closure1_slot12 = var7;
        var4 = var6[var4];
        var8 = var5.bind(var1)(var4);
        var7 = var8.createStyles;
        var4 = {};
        var9 = {'backgroundColor': null, 'justifyContent': 'center', 'alignItems': 'center'};
        var12 = 9;
        var12 = var6[var12];
        var12 = var13.bind(var1)(var12);
        var12 = var12.colors;
        var12 = var12.BACKGROUND_BRAND;
        var9['backgroundColor'] = var12;
        var9['width'] = var10;
        var9['height'] = var10;
        var10 = var10 / var11;
        var9['borderRadius'] = var10;
        var4['clydeNotificationIcon'] = var9;
        var4 = var7.bind(var8)(var4);
        var _closure1_slot13 = var4;
        var4 = 29;
        var4 = var6[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.fileFinishedImporting;
        var4 = 'modules/in_app_notifications/native/ReactionNotification.tsx';
        var4 = var5.bind(var6)(var4);
        var2 = function ReactionNotification(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var2 = arg1;
                var5 = var2.notification;
                var _closure2_slot0 = var5;
                var4 = undefined;
                var _closure2_slot7 = var4;
                var _closure2_slot8 = var4;
                var _closure2_slot9 = var4;
                var _closure2_slot10 = var4;
                var2 = _closure1_slot12;
                var13 = var2.bind(var4)();
                var _closure2_slot1 = var13;
                var3 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 12;
                var2 = var6[var2];
                var2 = var3.bind(var4)(var2);
                var3 = var2.AnimateEmoji;
                var2 = var3.useSetting;
                var15 = var2.bind(var3)();
                var _closure2_slot2 = var15;
                var18 = var5.user;
                var3 = var5.channel;
                var _closure2_slot3 = var3;
                var17 = var5.guild;
                var _closure2_slot4 = var17;
                var19 = var5.parentChannel;
                var _closure2_slot5 = var19;
                var7 = var5.reaction;
                var _closure2_slot6 = var7;
                var22 = null;
                var2 = var22 == var17;
                var14 = undefined;
                if(var2) { _fun0003_ip = 16; continue _fun0003 }
case 17:
                var14 = var17.id;
case 16:
                if(!(var22 == var14)) { _fun0003_ip = 8; continue _fun0003 }
case 18:
                var14 = var3.guild_id;
case 8:
                _closure2_slot7 = var14;
                var11 = var3.id;
                _closure2_slot8 = var11;
                var6 = var3.type;
                var2 = _closure1_slot8;
                var2 = var2.GUILD_ANNOUNCEMENT;
                var6 = var6 === var2;
                var2 = var5.message;
                _closure2_slot9 = var2;
                var24 = var2.content;
                var10 = _closure1_slot0;
                var12 = _closure1_slot2;
                var8 = 13;
                var8 = var12[var8];
                var16 = var10.bind(var4)(var8);
                var12 = var16.isReactionMilestoneNotification;
                var10 = var2.reactions;
                var20 = var22 == var3;
                var8 = undefined;
                if(var20) { _fun0003_ip = 19; continue _fun0003 }
case 20:
                var8 = var3.type;
case 19:
                var16 = var12.bind(var16)(var10, var8);
                var12 = _closure1_slot3;
                var10 = var12.useCallback;
                var8 = new Array(5);
                var8[0] = var15;
                var8[1] = var7;
                var7 = var13.imageEmoji;
                var8[2] = var7;
                var7 = var13.textEmoji;
                var8[3] = var7;
                var7 = var13.italic;
                var8[4] = var7;
                var7 = function() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        var3 = _closure2_slot6;
                        var1 = null;
                        var4 = var1 == var3;
                        var6 = undefined;
                        var3 = undefined;
                        if(var4) { _fun0004_ip = 21; continue _fun0004 }
case 22:
                        var4 = _closure2_slot6;
                        var4 = var4.emoji;
                        var3 = var4.name;
case 21:
                        if(!(var1 != var3)) { _fun0004_ip = 23; continue _fun0004 }
case 24:
                        var3 = _closure2_slot6;
                        var4 = var1 == var3;
                        var3 = undefined;
                        if(var4) { _fun0004_ip = 25; continue _fun0004 }
case 26:
                        var4 = _closure2_slot6;
                        var4 = var4.emoji;
                        var3 = var4.name;
case 25:
                        if(!(var1 != var3)) { _fun0004_ip = 27; continue _fun0004 }
case 28:
                        var3 = _closure2_slot6;
                        var4 = var1 == var3;
                        var3 = undefined;
                        if(var4) { _fun0004_ip = 29; continue _fun0004 }
case 30:
                        var4 = _closure2_slot6;
                        var4 = var4.emoji;
                        var3 = var4.id;
case 29:
                        if(!(var1 != var3)) { _fun0004_ip = 31; continue _fun0004 }
case 27:
                        var3 = _closure2_slot6;
                        var4 = var1 == var3;
                        var3 = undefined;
                        if(var4) { _fun0004_ip = 32; continue _fun0004 }
case 33:
                        var4 = _closure2_slot6;
                        var4 = var4.emoji;
                        var3 = var4.id;
case 32:
                        var3 = var1 != var3;
                        var7 = undefined;
                        if(!var3) { _fun0004_ip = 34; continue _fun0004 }
case 35:
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var3 = 15;
                        var3 = var5[var3];
                        var5 = var4.bind(var6)(var3);
                        var4 = var5.getEmojiURL;
                        var3 = {};
                        var9 = _closure2_slot6;
                        var9 = var9.emoji;
                        var9 = var9.id;
                        var3['id'] = var9;
                        var9 = _closure2_slot2;
                        if(!var9) { _fun0004_ip = 36; continue _fun0004 }
case 37:
                        var10 = _closure2_slot6;
                        var10 = var10.emoji;
                        var9 = var10.animated;
case 36:
                        var3['animated'] = var9;
                        var9 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var8 = 16;
                        var8 = var10[var8];
                        var8 = var9.bind(var6)(var8);
                        var8 = var8.DEFAULT_EMOJI_SIZE;
                        var3['size'] = var8;
                        var7 = var4.bind(var5)(var3);
case 34:
                        var5 = _closure1_slot9;
                        var4 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var3 = 17;
                        var3 = var8[var3];
                        var4 = var4.bind(var6)(var3);
                        var3 = {};
                        var8 = _closure2_slot1;
                        var9 = var8.textEmoji;
                        var3['textEmojiStyle'] = var9;
                        var8 = var8.imageEmoji;
                        var3['fastImageStyle'] = var8;
                        var3['src'] = var7;
                        var7 = _closure2_slot6;
                        var7 = var7.emoji;
                        var7 = var7.name;
                        var3['name'] = var7;
                        var3 = var5.bind(var6)(var4, var3);
                        return var3;
case 31:
                        var5 = _closure1_slot9;
                        var4 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var3 = 14;
                        var3 = var7[var3];
                        var3 = var4.bind(var6)(var3);
                        var4 = var3.Text;
                        var3 = {};
                        var7 = _closure2_slot1;
                        var7 = var7.italic;
                        var3['style'] = var7;
                        var7 = 'text-sm/normal';
                        var3['variant'] = var7;
                        var2 = _closure2_slot6;
                        var7 = var2.emoji;
                        var7 = var7.name;
                        var3['children'] = var7;
                        var2 = var2.emoji;
                        var2 = var2.name;
                        var2 = var5.bind(var6)(var4, var3, var2);
                        return var2;
case 23:
                        return var1;
                    }
                };
                var28 = var10.bind(var12)(var7, var8);
                var10 = var12.useMemo;
                var7 = var2.reactions;
                var8 = new Array(1);
                var8[0] = var7;
                var7 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 18;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.sumBy;
                    var1 = _closure2_slot9;
                    var2 = var1.reactions;
                    var1 = function(arg1) {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                            var1 = arg1;
                            var5 = var1.count_details;
                            var4 = null;
                            var1 = var4 == var5;
                            var6 = undefined;
                            if(var1) { _fun0005_ip = 38; continue _fun0005 }
case 22:
                            var6 = var5.burst;
case 38:
                            var7 = var4 != var6;
                            var1 = 0;
                            if(!var7) { _fun0005_ip = 3; continue _fun0005 }
case 21:
                            var1 = var6;
case 3:
                            var6 = var4 == var5;
                            var3 = undefined;
                            if(var6) { _fun0005_ip = 39; continue _fun0005 }
case 40:
                            var3 = var5.normal;
case 39:
                            var4 = var4 != var3;
                            var2 = 0;
                            if(!var4) { _fun0005_ip = 41; continue _fun0005 }
case 42:
                            var2 = var3;
case 41:
                            var1 = var1 + var2;
                            return var1;
                        }
                    };
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                };
                var23 = var10.bind(var12)(var7, var8);
                if(!var6) { _fun0003_ip = 43; continue _fun0003 }
case 44:
                var7 = 1;
                var6 = var7 !== var23;
case 43:
                var7 = null;
                if(var6) { _fun0003_ip = 45; continue _fun0003 }
case 46:
                var7 = null;
                if(var16) { _fun0003_ip = 45; continue _fun0003 }
case 47:
                var10 = _closure1_slot0;
                var12 = _closure1_slot2;
                var8 = 19;
                var8 = var12[var8];
                var10 = var10.bind(var4)(var8);
                var8 = var10.getUserAuthor;
                var7 = var8.bind(var10)(var18, var3);
case 45:
                _closure2_slot10 = var7;
                var10 = _closure1_slot0;
                var12 = _closure1_slot2;
                var8 = 20;
                var8 = var12[var8];
                var15 = var10.bind(var4)(var8);
                var12 = var15.useStateFromStores;
                var8 = _closure1_slot5;
                var10 = new Array(1);
                var10[0] = var8;
                var8 = function() {
                    var1 = _closure1_slot5;
                    var1 = var1.roleStyle;
                    return var1;
                };
                var12 = var12.bind(var15)(var10, var8);
                var10 = var22 == var7;
                var8 = undefined;
                if(var10) { _fun0003_ip = 48; continue _fun0003 }
case 49:
                var8 = var7.colorString;
case 48:
                var10 = var22 != var8;
                var20 = undefined;
                if(!var10) { _fun0003_ip = 50; continue _fun0003 }
case 51:
                var20 = var8;
case 50:
                var8 = 'dot';
                var10 = undefined;
                if(!(var8 === var12)) { _fun0003_ip = 52; continue _fun0003 }
case 53:
                var10 = undefined;
                if(!(var10 !== var20)) { _fun0003_ip = 52; continue _fun0003 }
case 54:
                var15 = _closure1_slot9;
                var12 = _closure1_slot0;
                var21 = _closure1_slot2;
                var8 = 6;
                var8 = var21[var8];
                var8 = var12.bind(var4)(var8);
                var12 = var8.RoleDot;
                var8 = {};
                var8['color'] = var20;
                var20 = var22 == var7;
                var21 = undefined;
                if(var20) { _fun0003_ip = 55; continue _fun0003 }
case 56:
                var21 = var7.colorStrings;
case 55:
                var25 = var22 != var21;
                var20 = null;
                if(!var25) { _fun0003_ip = 57; continue _fun0003 }
case 58:
                var20 = var21;
case 57:
                var8['colors'] = var20;
                var20 = var13.newContainerRoleDot;
                var8['containerStyles'] = var20;
                var10 = var15.bind(var4)(var12, var8);
case 52:
                var15 = _closure1_slot3;
                var12 = var15.useMemo;
                var8 = new Array(4);
                var8[0] = var3;
                var8[1] = var19;
                var8[2] = var17;
                var8[3] = var7;
                var7 = function() {
                    var1 = {};
                    var2 = 'message';
                    var1['type'] = var2;
                    var3 = _closure2_slot3;
                    var1['channel'] = var3;
                    var3 = _closure2_slot5;
                    var1['parentChannel'] = var3;
                    var3 = _closure2_slot4;
                    var1['guild'] = var3;
                    var2 = _closure2_slot10;
                    var1['author'] = var2;
                    return var1;
                };
                var8 = var12.bind(var15)(var7, var8);
                var12 = _closure1_slot0;
                var15 = _closure1_slot2;
                var7 = 8;
                var7 = var15[var7];
                var12 = var12.bind(var4)(var7);
                var7 = var12.isIOS;
                var7 = var7.bind(var12)();
                var19 = 'text-md/medium';
                if(!var7) { _fun0003_ip = 59; continue _fun0003 }
case 60:
                var19 = 'text-md/normal';
case 59:
                if(var6) { _fun0003_ip = 61; continue _fun0003 }
case 62:
                if(var16) { _fun0003_ip = 63; continue _fun0003 }
case 64:
                var12 = _closure1_slot11;
                var7 = _closure1_slot10;
                var6 = {};
                var21 = _closure1_slot9;
                var20 = _closure1_slot0;
                var25 = _closure1_slot2;
                var15 = 14;
                var15 = var25[var15];
                var15 = var20.bind(var4)(var15);
                var20 = var15.Text;
                var15 = {};
                var15['variant'] = var19;
                var25 = 'text-default';
                var15['color'] = var25;
                var26 = var13.notificationBodyText;
                var25 = new Array(2);
                var25[0] = var26;
                var26 = var13.italic;
                var25[1] = var26;
                var15['style'] = var25;
                if(!(var22 != var24)) { _fun0003_ip = 65; continue _fun0003 }
case 66:
                var22 = var24.trim;
                var24 = var22.bind(var24)();
                var22 = '';
                if(!(var22 === var24)) { _fun0003_ip = 67; continue _fun0003 }
case 65:
                var24 = _closure1_slot0;
                var27 = _closure1_slot2;
                var22 = 21;
                var25 = var27[var22];
                var25 = var24.bind(var4)(var25);
                var26 = var25.intl;
                var25 = var26.format;
                var22 = var27[var22];
                var22 = var24.bind(var4)(var22);
                var22 = var22.t;
                var24 = var22.ZOzpKt;
                var22 = {};
                var22['emojiHook'] = var28;
                var22 = var25.bind(var26)(var24, var22);
                _fun0003_ip = 68; continue _fun0003;
case 67:
                var25 = _closure1_slot0;
                var29 = _closure1_slot2;
                var24 = 21;
                var26 = var29[var24];
                var26 = var25.bind(var4)(var26);
                var27 = var26.intl;
                var26 = var27.format;
                var24 = var29[var24];
                var24 = var25.bind(var4)(var24);
                var24 = var24.t;
                var25 = var24.sHV43G;
                var24 = {};
                var24['emojiHook'] = var28;
                var22 = var26.bind(var27)(var25, var24);
case 68:
                var15['children'] = var22;
                var20 = var21.bind(var4)(var20, var15);
                var15 = new Array(2);
                var15[0] = var20;
                var22 = _closure1_slot9;
                var21 = _closure1_slot0;
                var24 = _closure1_slot2;
                var20 = 22;
                var20 = var24[var20];
                var20 = var21.bind(var4)(var20);
                var21 = var20.NativeChannelRowPreview;
                var20 = {};
                var20['message'] = var2;
                var24 = _closure1_slot7;
                var20['lineClamp'] = var24;
                var24 = _closure1_slot6;
                var20['maxHeight'] = var24;
                var20 = var22.bind(var4)(var21, var20);
                var15[1] = var20;
                var6['children'] = var15;
                var12 = var12.bind(var4)(var7, var6);
                _fun0003_ip = 69; continue _fun0003;
case 63:
                var15 = _closure1_slot9;
                var21 = _closure1_slot0;
                var25 = _closure1_slot2;
                var6 = 14;
                var6 = var25[var6];
                var6 = var21.bind(var4)(var6);
                var7 = var6.Text;
                var6 = {};
                var6['variant'] = var19;
                var20 = 'text-default';
                var6['color'] = var20;
                var20 = var13.italic;
                var6['style'] = var20;
                var20 = 21;
                var22 = var25[var20];
                var22 = var21.bind(var4)(var22);
                var24 = var22.intl;
                var22 = var24.format;
                var20 = var25[var20];
                var20 = var21.bind(var4)(var20);
                var20 = var20.t;
                var21 = var20.KTurAR;
                var20 = {};
                var20['count'] = var23;
                var20 = var22.bind(var24)(var21, var20);
                var6['children'] = var20;
                var12 = var15.bind(var4)(var7, var6);
case 69:
                _fun0003_ip = 70; continue _fun0003;
case 61:
                var15 = _closure1_slot9;
                var20 = _closure1_slot0;
                var24 = _closure1_slot2;
                var6 = 14;
                var6 = var24[var6];
                var6 = var20.bind(var4)(var6);
                var7 = var6.Text;
                var6 = {};
                var6['variant'] = var19;
                var19 = 'text-default';
                var6['color'] = var19;
                var19 = var13.italic;
                var6['style'] = var19;
                var19 = 21;
                var21 = var24[var19];
                var21 = var20.bind(var4)(var21);
                var22 = var21.intl;
                var21 = var22.format;
                var19 = var24[var19];
                var19 = var20.bind(var4)(var19);
                var19 = var19.t;
                var20 = var19.Tqk79E;
                var19 = {};
                var19['count'] = var23;
                var19 = var21.bind(var22)(var20, var19);
                var6['children'] = var19;
                var12 = var15.bind(var4)(var7, var6);
case 70:
                var6 = _closure1_slot3;
                var7 = var6.useCallback;
                var15 = var3.id;
                var3 = new Array(6);
                var3[0] = var15;
                var3[1] = var11;
                var3[2] = var14;
                var2 = var2.id;
                var3[3] = var2;
                var2 = var5.inAppNotificationId;
                var3[4] = var2;
                var2 = var5.type;
                var3[5] = var2;
                var2 = function() {
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 13;
                    var2 = var4[var1];
                    var1 = undefined;
                    var8 = var6.bind(var1)(var2);
                    var7 = var8.trackDismissed;
                    var5 = {};
                    var9 = _closure2_slot0;
                    var10 = var9.type;
                    var5['type'] = var10;
                    var10 = 'notification_clicked';
                    var5['dismissReason'] = var10;
                    var10 = _closure2_slot7;
                    var5['guildId'] = var10;
                    var10 = _closure2_slot8;
                    var5['channelId'] = var10;
                    var10 = _closure2_slot9;
                    var10 = var10.id;
                    var5['messageId'] = var10;
                    var9 = var9.inAppNotificationId;
                    var5['inAppNotificationId'] = var9;
                    var5 = var7.bind(var8)(var5);
                    var3 = _closure1_slot1;
                    var5 = 23;
                    var5 = var4[var5];
                    var7 = var3.bind(var1)(var5);
                    var5 = var7.popAll;
                    var5 = var5.bind(var7)();
                    var5 = 24;
                    var5 = var4[var5];
                    var8 = var6.bind(var1)(var5);
                    var7 = var8.transitionToMessage;
                    var5 = _closure2_slot3;
                    var6 = var5.id;
                    var2 = _closure2_slot9;
                    var5 = var2.id;
                    var2 = {};
                    var9 = true;
                    var2['navigationReplace'] = var9;
                    var2 = var7.bind(var8)(var6, var5, var2);
                    var2 = 25;
                    var2 = var4[var2];
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.clearNotification;
                    var2 = var2.bind(var3)();
                    return var1;
                };
                var7 = var7.bind(var6)(var2, var3);
                var3 = var6.useCallback;
                var2 = new Array(1);
                var2[0] = var11;
                var1 = function() {
                    var4 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var3 = 23;
                    var3 = var1[var3];
                    var6 = undefined;
                    var4 = var4.bind(var6)(var3);
                    var3 = var4.pushLazy;
                    var5 = _closure1_slot0;
                    var2 = 27;
                    var2 = var1[var2];
                    var5 = var5.bind(var6)(var2);
                    var2 = 26;
                    var2 = var1[var2];
                    var1 = var1.paths;
                    var2 = var5.bind(var6)(var2, var1);
                    var1 = {};
                    var5 = _closure2_slot8;
                    var1['channelId'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                };
                var6 = var3.bind(var6)(var1, var2);
                var3 = _closure1_slot9;
                var2 = _closure1_slot0;
                var11 = _closure1_slot2;
                var1 = 28;
                var1 = var11[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.NotificationPressable;
                var1 = {};
                var15 = _closure1_slot9;
                var14 = _closure1_slot14;
                var11 = {};
                var11['user'] = var18;
                var11['guild'] = var17;
                var11['isMilestone'] = var16;
                var11 = var15.bind(var4)(var14, var11);
                var1['icon'] = var11;
                var1['accessoryLabelNode'] = var10;
                var11 = _closure1_slot9;
                var10 = _closure1_slot4;
                var9 = {};
                var13 = var13.container;
                var9['style'] = var13;
                var9['children'] = var12;
                var9 = var11.bind(var4)(var10, var9);
                var1['children'] = var9;
                var1['header'] = var8;
                var1['onPress'] = var7;
                var1['onSettingsPress'] = var6;
                var1['notification'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var3['default'] = var2;
        return var1;
    }
})();