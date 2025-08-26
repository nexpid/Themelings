// app/modules/in_app_notifications/native/ReactionNotification.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.IN_APP_NOTIFICATION_MAX_HEIGHT;
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ChannelTypes;
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot11 = var7;
    var7 = var4.Fragment;
    var _closure1_slot12 = var7;
    var4 = var4.jsxs;
    var _closure1_slot13 = var4;
    var4 = 9;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'paddingRight': 4, 'paddingTop': 0};
    var4['newContainerRoleDot'] = var9;
    var9 = {};
    var10 = 'column';
    var9['flexDirection'] = var10;
    var4['container'] = var9;
    var9 = {'marginTop': 4, 'flexGrow': 0, 'flexShrink': 1, 'alignSelf': 'flex-start'};
    var4['reactionContainer'] = var9;
    var9 = {};
    var10 = 12;
    var9['fontSize'] = var10;
    var4['textEmoji'] = var9;
    var9 = {'height': 16, 'width': 16};
    var4['imageEmoji'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot14 = var4;
    var4 = 27;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/in_app_notifications/native/ReactionNotification.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var1 = var1.notification;
            var4 = undefined;
            var _closure2_slot7 = var4;
            var2 = _closure1_slot14;
            var9 = var2.bind(var4)();
            var _closure2_slot0 = var9;
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 10;
            var2 = var7[var2];
            var2 = var6.bind(var4)(var2);
            var8 = var2.AnimateEmoji;
            var2 = var8.useSetting;
            var2 = var2.bind(var8)();
            var _closure2_slot1 = var2;
            var18 = var1.user;
            var21 = var1.channel;
            var _closure2_slot2 = var21;
            var16 = var1.guild;
            var _closure2_slot3 = var16;
            var12 = var1.parentChannel;
            var _closure2_slot4 = var12;
            var2 = var1.reaction;
            var _closure2_slot5 = var2;
            var8 = var21.type;
            var2 = _closure1_slot10;
            var2 = var2.GUILD_ANNOUNCEMENT;
            var2 = var8 === var2;
            var11 = _closure1_slot6;
            var27 = var1.message;
            var10 = var11.prototype;
            var10 = Object.create(var10, {constructor: {value: var11}});
            var28 = var10;
            var8 = new var28[var11](var27, var26);
            var14 = var8 instanceof Object ? var8 : var10;
            var _closure2_slot6 = var14;
            var1 = var1.message;
            var19 = var1.content;
            var1 = 11;
            var1 = var7[var1];
            var8 = var6.bind(var4)(var1);
            var7 = var8.isReactionMilestoneNotification;
            var6 = var14.reactions;
            var15 = null;
            var10 = var15 == var21;
            var1 = undefined;
            if(var10) { _fun0001_ip = 217; continue _fun0001 }
 212:
            var1 = var21.type;
 217:
            var1 = var7.bind(var8)(var6, var1);
            var24 = function emojiHook() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure2_slot5;
                    var1 = null;
                    var4 = var1 == var3;
                    var6 = undefined;
                    var3 = undefined;
                    if(var4) { _fun0002_ip = 35; continue _fun0002 }
 20:
                    var4 = _closure2_slot5;
                    var4 = var4.emoji;
                    var3 = var4.name;
 35:
                    if(!(var1 != var3)) { _fun0002_ip = 363; continue _fun0002 }
 42:
                    var3 = _closure2_slot5;
                    var4 = var1 == var3;
                    var3 = undefined;
                    if(var4) { _fun0002_ip = 70; continue _fun0002 }
 55:
                    var4 = _closure2_slot5;
                    var4 = var4.emoji;
                    var3 = var4.name;
 70:
                    if(!(var1 != var3)) { _fun0002_ip = 109; continue _fun0002 }
 74:
                    var3 = _closure2_slot5;
                    var4 = var1 == var3;
                    var3 = undefined;
                    if(var4) { _fun0002_ip = 102; continue _fun0002 }
 87:
                    var4 = _closure2_slot5;
                    var4 = var4.emoji;
                    var3 = var4.id;
 102:
                    if(!(var1 != var3)) { _fun0002_ip = 346; continue _fun0002 }
 109:
                    var3 = _closure2_slot5;
                    var4 = var1 == var3;
                    var3 = undefined;
                    if(var4) { _fun0002_ip = 137; continue _fun0002 }
 122:
                    var4 = _closure2_slot5;
                    var4 = var4.emoji;
                    var3 = var4.id;
 137:
                    var3 = var1 != var3;
                    var7 = undefined;
                    if(!var3) { _fun0002_ip = 259; continue _fun0002 }
 146:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 12;
                    var3 = var5[var3];
                    var5 = var4.bind(var6)(var3);
                    var4 = var5.getEmojiURL;
                    var3 = {};
                    var9 = _closure2_slot5;
                    var9 = var9.emoji;
                    var9 = var9.id;
                    var3['id'] = var9;
                    var9 = _closure2_slot1;
                    if(!var9) { _fun0002_ip = 219; continue _fun0002 }
 203:
                    var10 = _closure2_slot5;
                    var10 = var10.emoji;
                    var9 = var10.animated;
 219:
                    var3['animated'] = var9;
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var8 = 13;
                    var8 = var10[var8];
                    var8 = var9.bind(var6)(var8);
                    var8 = var8.DEFAULT_EMOJI_SIZE;
                    var3['size'] = var8;
                    var7 = var4.bind(var5)(var3);
 259:
                    var5 = _closure1_slot11;
                    var4 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var3 = 14;
                    var3 = var8[var3];
                    var4 = var4.bind(var6)(var3);
                    var3 = {};
                    var8 = _closure2_slot0;
                    var9 = var8.textEmoji;
                    var3['textEmojiStyle'] = var9;
                    var8 = var8.imageEmoji;
                    var3['fastImageStyle'] = var8;
                    var3['src'] = var7;
                    var7 = _closure2_slot5;
                    var7 = var7.emoji;
                    var7 = var7.name;
                    var3['name'] = var7;
                    var3 = var5.bind(var6)(var4, var3);
                    return var3;
 346:
                    var2 = _closure2_slot5;
                    var2 = var2.emoji;
                    var2 = var2.name;
                    return var2;
 363:
                    return var1;
                }
            };
            var10 = _closure1_slot3;
            var8 = var10.useMemo;
            var6 = var14.reactions;
            var7 = new Array(1);
            var7[0] = var6;
            var6 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 15;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.sumBy;
                var1 = _closure2_slot6;
                var2 = var1.reactions;
                var1 = function(arg1) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        var1 = arg1;
                        var5 = var1.count_details;
                        var4 = null;
                        var1 = var4 == var5;
                        var6 = undefined;
                        if(var1) { _fun0003_ip = 26; continue _fun0003 }
 20:
                        var6 = var5.burst;
 26:
                        var7 = var4 != var6;
                        var1 = 0;
                        if(!var7) { _fun0003_ip = 38; continue _fun0003 }
 35:
                        var1 = var6;
 38:
                        var6 = var4 == var5;
                        var3 = undefined;
                        if(var6) { _fun0003_ip = 53; continue _fun0003 }
 47:
                        var3 = var5.normal;
 53:
                        var4 = var4 != var3;
                        var2 = 0;
                        if(!var4) { _fun0003_ip = 65; continue _fun0003 }
 62:
                        var2 = var3;
 65:
                        var1 = var1 + var2;
                        return var1;
                    }
                };
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var17 = var8.bind(var10)(var6, var7);
            if(!var2) { _fun0001_ip = 276; continue _fun0001 }
 269:
            var6 = 1;
            var2 = var6 !== var17;
 276:
            var13 = null;
            if(var2) { _fun0001_ip = 318; continue _fun0001 }
 281:
            var13 = null;
            if(var1) { _fun0001_ip = 318; continue _fun0001 }
 286:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var6 = 16;
            var6 = var8[var6];
            var7 = var7.bind(var4)(var6);
            var6 = var7.getUserAuthor;
            var13 = var6.bind(var7)(var18, var21);
 318:
            _closure2_slot7 = var13;
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var6 = 17;
            var6 = var8[var6];
            var10 = var7.bind(var4)(var6);
            var8 = var10.useStateFromStores;
            var6 = _closure1_slot5;
            var7 = new Array(1);
            var7[0] = var6;
            var6 = function() {
                var1 = _closure1_slot5;
                var1 = var1.roleStyle;
                return var1;
            };
            var10 = var8.bind(var10)(var7, var6);
            var7 = var15 == var13;
            var6 = undefined;
            if(var7) { _fun0001_ip = 387; continue _fun0001 }
 381:
            var6 = var13.colorString;
 387:
            var7 = var15 != var6;
            var20 = undefined;
            if(!var7) { _fun0001_ip = 399; continue _fun0001 }
 396:
            var20 = var6;
 399:
            var6 = 'username';
            var8 = undefined;
            if(!(var6 === var10)) { _fun0001_ip = 412; continue _fun0001 }
 409:
            var8 = var20;
 412:
            var6 = var15 != var8;
            var7 = undefined;
            if(!var6) { _fun0001_ip = 430; continue _fun0001 }
 421:
            var6 = {};
            var6['color'] = var8;
            var7 = var6;
 430:
            var8 = 'dot';
            var6 = undefined;
            if(!(var8 === var10)) { _fun0001_ip = 530; continue _fun0001 }
 440:
            var6 = undefined;
            if(!(var4 !== var20)) { _fun0001_ip = 530; continue _fun0001 }
 446:
            var11 = _closure1_slot11;
            var10 = _closure1_slot0;
            var22 = _closure1_slot2;
            var8 = 18;
            var8 = var22[var8];
            var8 = var10.bind(var4)(var8);
            var10 = var8.RoleDot;
            var8 = {};
            var8['color'] = var20;
            var20 = var15 == var13;
            var22 = undefined;
            if(var20) { _fun0001_ip = 497; continue _fun0001 }
 491:
            var22 = var13.colorStrings;
 497:
            var23 = var15 != var22;
            var20 = null;
            if(!var23) { _fun0001_ip = 509; continue _fun0001 }
 506:
            var20 = var22;
 509:
            var8['colors'] = var20;
            var20 = var9.newContainerRoleDot;
            var8['containerStyles'] = var20;
            var6 = var11.bind(var4)(var10, var8);
 530:
            var11 = _closure1_slot3;
            var10 = var11.useMemo;
            var8 = new Array(4);
            var8[0] = var13;
            var8[1] = var21;
            var8[2] = var16;
            var8[3] = var12;
            var3 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 19;
                    var2 = var4[var2];
                    var5 = undefined;
                    var9 = var3.bind(var5)(var2);
                    var8 = var9.computeChannelName;
                    var13 = _closure2_slot2;
                    var12 = _closure1_slot8;
                    var11 = _closure1_slot7;
                    var10 = true;
                    var14 = var9;
                    var6 = var14[var8](var13, var12, var11, var10, var9);
                    var3 = _closure2_slot7;
                    var4 = null;
                    if(!(var4 != var3)) { _fun0004_ip = 116; continue _fun0004 }
 65:
                    var3 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var1 = 11;
                    var1 = var7[var1];
                    var9 = var3.bind(var5)(var1);
                    var8 = var9.getNotificationTitle;
                    var13 = _closure2_slot2;
                    var12 = _closure2_slot7;
                    var11 = _closure2_slot4;
                    var10 = _closure2_slot3;
                    var14 = var9;
                    var1 = var14[var8](var13, var12, var11, var10, var9);
                    _fun0004_ip = 191; continue _fun0004;
 116:
                    var3 = _closure2_slot3;
                    var3 = var4 != var3;
                    var5 = '';
                    var4 = var5;
                    if(!var3) { _fun0004_ip = 167; continue _fun0004 }
 134:
                    var2 = _closure2_slot3;
                    var7 = var2.name;
                    var2 = global;
                    var2 = var2.HermesInternal;
                    var3 = var2.concat;
                    var2 = ', ';
                    var4 = var3.bind(var2)(var7);
 167:
                    var2 = global;
                    var2 = var2.HermesInternal;
                    var3 = var2.concat;
                    var2 = ' ';
                    var1 = var3.bind(var5)(var6, var2, var4);
 191:
                    return var1;
                }
            };
            var10 = var10.bind(var11)(var3, var8);
            if(var2) { _fun0001_ip = 1038; continue _fun0001 }
 578:
            if(var1) { _fun0001_ip = 926; continue _fun0001 }
 584:
            var3 = _closure1_slot13;
            var2 = _closure1_slot12;
            var1 = {};
            var12 = _closure1_slot11;
            var11 = _closure1_slot0;
            var13 = _closure1_slot2;
            var8 = 20;
            var8 = var13[var8];
            var8 = var11.bind(var4)(var8);
            var11 = var8.Text;
            var8 = {'variant': 'text-md/medium', 'color': 'text-normal'};
            if(!(var15 != var19)) { _fun0001_ip = 659; continue _fun0001 }
 641:
            var13 = var19.trim;
            var19 = var13.bind(var19)();
            var13 = '';
            if(!(var13 === var19)) { _fun0001_ip = 726; continue _fun0001 }
 659:
            var19 = _closure1_slot0;
            var23 = _closure1_slot2;
            var13 = 21;
            var20 = var23[var13];
            var20 = var19.bind(var4)(var20);
            var22 = var20.intl;
            var20 = var22.format;
            var13 = var23[var13];
            var13 = var19.bind(var4)(var13);
            var13 = var13.t;
            var19 = var13.ZOzpKi;
            var13 = {};
            var13['emojiHook'] = var24;
            var13 = var20.bind(var22)(var19, var13);
            _fun0001_ip = 791; continue _fun0001;
 726:
            var20 = _closure1_slot0;
            var25 = _closure1_slot2;
            var19 = 21;
            var22 = var25[var19];
            var22 = var20.bind(var4)(var22);
            var23 = var22.intl;
            var22 = var23.format;
            var19 = var25[var19];
            var19 = var20.bind(var4)(var19);
            var19 = var19.t;
            var20 = var19.sHV43N;
            var19 = {};
            var19['emojiHook'] = var24;
            var13 = var22.bind(var23)(var20, var19);
 791:
            var8['children'] = var13;
            var11 = var12.bind(var4)(var11, var8);
            var8 = new Array(2);
            var8[0] = var11;
            var13 = _closure1_slot11;
            var19 = _closure1_slot0;
            var20 = _closure1_slot2;
            var11 = 22;
            var11 = var20[var11];
            var11 = var19.bind(var4)(var11);
            var12 = var11.NotificationChannelRowPreview;
            var11 = {'channel': null, 'message': null, 'color': 'text-muted', 'layout': null, 'muted': false, 'lineClamp': 2, 'context': 'notification'};
            var11['channel'] = var21;
            var11['message'] = var14;
            var14 = 23;
            var14 = var20[var14];
            var14 = var19.bind(var4)(var14);
            var14 = var14.ChannelListLayoutTypes;
            var14 = var14.COZY;
            var11['layout'] = var14;
            var14 = _closure1_slot9;
            var11['maxHeight'] = var14;
            var11 = var13.bind(var4)(var12, var11);
            var8[1] = var11;
            var1['children'] = var8;
            var8 = var3.bind(var4)(var2, var1);
            _fun0001_ip = 1036; continue _fun0001;
 926:
            var3 = _closure1_slot11;
            var12 = _closure1_slot0;
            var19 = _closure1_slot2;
            var1 = 20;
            var1 = var19[var1];
            var1 = var12.bind(var4)(var1);
            var2 = var1.Text;
            var1 = {'variant': 'text-md/normal', 'color': 'text-normal'};
            var11 = 21;
            var13 = var19[var11];
            var13 = var12.bind(var4)(var13);
            var14 = var13.intl;
            var13 = var14.format;
            var11 = var19[var11];
            var11 = var12.bind(var4)(var11);
            var11 = var11.t;
            var12 = var11.KTurAQ;
            var11 = {};
            var11['count'] = var17;
            var11 = var13.bind(var14)(var12, var11);
            var1['children'] = var11;
            var8 = var3.bind(var4)(var2, var1);
 1036:
            _fun0001_ip = 1148; continue _fun0001;
 1038:
            var3 = _closure1_slot11;
            var12 = _closure1_slot0;
            var19 = _closure1_slot2;
            var1 = 20;
            var1 = var19[var1];
            var1 = var12.bind(var4)(var1);
            var2 = var1.Text;
            var1 = {'variant': 'text-md/normal', 'color': 'text-normal'};
            var11 = 21;
            var13 = var19[var11];
            var13 = var12.bind(var4)(var13);
            var14 = var13.intl;
            var13 = var14.format;
            var11 = var19[var11];
            var11 = var12.bind(var4)(var11);
            var11 = var11.t;
            var12 = var11.Tqk79P;
            var11 = {};
            var11['count'] = var17;
            var11 = var13.bind(var14)(var12, var11);
            var1['children'] = var11;
            var8 = var3.bind(var4)(var2, var1);
 1148:
            var3 = _closure1_slot11;
            var2 = _closure1_slot0;
            var11 = _closure1_slot2;
            var1 = 24;
            var1 = var11[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.Notification;
            var1 = {};
            if(!(var15 == var18)) { _fun0001_ip = 1251; continue _fun0001 }
 1184:
            var13 = _closure1_slot11;
            var12 = _closure1_slot1;
            var19 = _closure1_slot2;
            var14 = 26;
            var11 = var19[var14];
            var12 = var12.bind(var4)(var11);
            var11 = {};
            var11['guild'] = var16;
            var17 = _closure1_slot0;
            var14 = var19[var14];
            var14 = var17.bind(var4)(var14);
            var14 = var14.GuildIconSizes;
            var14 = var14.NORMAL;
            var11['size'] = var14;
            var11 = var13.bind(var4)(var12, var11);
            _fun0001_ip = 1338; continue _fun0001;
 1251:
            var14 = _closure1_slot11;
            var13 = _closure1_slot1;
            var12 = _closure1_slot2;
            var17 = 25;
            var12 = var12[var17];
            var13 = var13.bind(var4)(var12);
            var12 = {};
            var12['user'] = var18;
            var18 = var15 == var16;
            var15 = undefined;
            if(var18) { _fun0001_ip = 1295; continue _fun0001 }
 1290:
            var15 = var16.id;
 1295:
            var12['guildId'] = var15;
            var16 = _closure1_slot0;
            var15 = _closure1_slot2;
            var15 = var15[var17];
            var15 = var16.bind(var4)(var15);
            var15 = var15.AvatarSizes;
            var15 = var15.NORMAL;
            var12['size'] = var15;
            var11 = var14.bind(var4)(var13, var12);
 1338:
            var1['icon'] = var11;
            var1['label'] = var10;
            var1['labelStyle'] = var7;
            var1['accessoryLabelNode'] = var6;
            var7 = _closure1_slot11;
            var6 = _closure1_slot4;
            var5 = {};
            var9 = var9.container;
            var5['style'] = var9;
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();