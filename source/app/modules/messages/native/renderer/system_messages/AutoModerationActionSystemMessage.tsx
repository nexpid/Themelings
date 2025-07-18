// app/modules/messages/native/renderer/system_messages/AutoModerationActionSystemMessage.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var8 = native3;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var2 = function createAutoModerationActionSystemMessage(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var23 = arg1;
            var15 = var23.message;
            var38 = var23.theme;
            var22 = var23.roleStyle;
            var1 = _closure1_slot14;
            var9 = undefined;
            var1 = var1.bind(var9)(var38);
            var18 = var1.defaultUsernameColor;
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var17 = 14;
            var1 = var1[var17];
            var2 = var2.bind(var9)(var1);
            var1 = var2.isAutomodMessageRecord;
            var1 = var1.bind(var2)(var15);
            if(var1) { _fun0001_ip = 77; continue _fun0001 }
 73:
            var1 = null;
            return var1;
 77:
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var17];
            var2 = var2.bind(var9)(var1);
            var1 = var2.extractAutomodMessageFields;
            var1 = var1.bind(var2)(var15);
            var14 = var1.ruleName;
            var34 = var1.keyword;
            var28 = var1.embedChannel;
            var7 = var1.content;
            var29 = var1.flaggedMessageId;
            var26 = var1.embedChannelId;
            var16 = var1.quarantineType;
            var8 = var1.interactionUserId;
            var3 = _closure1_slot8;
            var2 = var3.getChannel;
            var1 = var15.getChannelId;
            var1 = var1.bind(var15)();
            var2 = var2.bind(var3)(var1);
            var6 = null;
            var1 = var6 == var2;
            var25 = undefined;
            if(var1) { _fun0001_ip = 197; continue _fun0001 }
 187:
            var1 = var2.getGuildId;
            var25 = var1.bind(var2)();
 197:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 15;
            var1 = var2[var1];
            var4 = var3.bind(var9)(var1);
            var1 = var4.getMessageAuthor;
            var1 = var1.bind(var4)(var15);
            var19 = var1.nick;
            var33 = var1.guildMemberAvatar;
            var21 = var1.colorString;
            var31 = var1.iconRoleId;
            var24 = var15.author;
            var10 = _closure1_slot10;
            var4 = var10.can;
            var1 = _closure1_slot12;
            var1 = var1.VIEW_CHANNEL;
            var27 = var4.bind(var10)(var1, var28);
            var1 = var2[var17];
            var4 = var3.bind(var9)(var1);
            var1 = var4.getActionHeaderTextMobile;
            var13 = var1.bind(var4)(var15, var24, var8);
            var10 = 16;
            var4 = var2[var10];
            var4 = var3.bind(var9)(var4);
            var11 = var4.intl;
            var8 = var11.string;
            var4 = var2[var10];
            var4 = var3.bind(var9)(var4);
            var4 = var4.t;
            var4 = var4.94JbMz;
            var8 = var8.bind(var11)(var4);
            var2 = var2[var17];
            var3 = var3.bind(var9)(var2);
            var2 = var3.isAutomodNotification;
            var4 = var2.bind(var3)(var15);
            var2 = var8;
            var11 = null;
            if(!var4) { _fun0001_ip = 2859; continue _fun0001 }
 386:
            var20 = _closure1_slot0;
            var1 = _closure1_slot2;
            var3 = var1[var17];
            var12 = var20.bind(var9)(var3);
            var3 = var12.extractAutomodNotificationFields;
            var3 = var3.bind(var12)(var15);
            var12 = var3.notificationType;
            var1 = var1[var17];
            var1 = var20.bind(var9)(var1);
            var1 = var1.IS_BACKWARDS_COMPAT_RAID_TYPE;
            if(!(var1 !== var12)) { _fun0001_ip = 2061; continue _fun0001 }
 442:
            var20 = _closure1_slot0;
            var1 = _closure1_slot2;
            var30 = 17;
            var1 = var1[var30];
            var1 = var20.bind(var9)(var1);
            var1 = var1.AutomodNotificationEmbedTypeKeys;
            var1 = var1.RAID;
            if(!(var1 !== var12)) { _fun0001_ip = 2061; continue _fun0001 }
 481:
            var20 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var30];
            var1 = var20.bind(var9)(var1);
            var1 = var1.AutomodNotificationEmbedTypeKeys;
            var1 = var1.MENTION_RAID;
            if(!(var1 !== var12)) { _fun0001_ip = 1653; continue _fun0001 }
 517:
            var20 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var30];
            var1 = var20.bind(var9)(var1);
            var1 = var1.AutomodNotificationEmbedTypeKeys;
            var1 = var1.ACTIVITY_ALERTS_ENABLED;
            if(!(var1 !== var12)) { _fun0001_ip = 900; continue _fun0001 }
 553:
            var1 = {};
            var32 = _closure1_slot0;
            var12 = _closure1_slot2;
            var20 = var12[var10];
            var20 = var32.bind(var9)(var20);
            var35 = var20.intl;
            var30 = var35.string;
            var20 = var12[var10];
            var20 = var32.bind(var9)(var20);
            var20 = var20.t;
            var20 = var20.VdZCcH;
            var20 = var30.bind(var35)(var20);
            var1['header'] = var20;
            var30 = 13;
            var20 = var12[var30];
            var37 = var32.bind(var9)(var20);
            var36 = var37.processColorOrThrow;
            var39 = _closure1_slot1;
            var20 = 12;
            var35 = var12[var20];
            var35 = var39.bind(var9)(var35);
            var41 = var35.internal;
            var40 = var41.resolveSemanticColor;
            var35 = var12[var20];
            var35 = var39.bind(var9)(var35);
            var35 = var35.colors;
            var35 = var35.HEADER_SECONDARY;
            var35 = var40.bind(var41)(var38, var35);
            var35 = var36.bind(var37)(var35);
            var1['headerColor'] = var35;
            var37 = _closure1_slot5;
            var36 = var37.resolveAssetSource;
            var35 = 21;
            var35 = var12[var35];
            var41 = var32.bind(var9)(var35);
            var40 = var41.makeSource;
            var35 = 23;
            var35 = var12[var35];
            var35 = var39.bind(var9)(var35);
            var35 = var40.bind(var41)(var35);
            var35 = var36.bind(var37)(var35);
            var35 = var35.uri;
            var1['headerIconURL'] = var35;
            var30 = var12[var30];
            var35 = var32.bind(var9)(var30);
            var30 = var35.processColorOrThrow;
            var36 = var12[var20];
            var36 = var39.bind(var9)(var36);
            var37 = var36.internal;
            var36 = var37.resolveSemanticColor;
            var20 = var12[var20];
            var20 = var39.bind(var9)(var20);
            var20 = var20.colors;
            var20 = var20.HEADER_SECONDARY;
            var20 = var36.bind(var37)(var38, var20);
            var20 = var30.bind(var35)(var20);
            var1['headerIconColor'] = var20;
            var20 = var12[var10];
            var20 = var32.bind(var9)(var20);
            var30 = var20.intl;
            var20 = var30.string;
            var12 = var12[var10];
            var12 = var32.bind(var9)(var12);
            var12 = var12.t;
            var12 = var12.NxHYX1;
            var12 = var20.bind(var30)(var12);
            var1['body'] = var12;
            var12 = false;
            var1['shouldShowActions'] = var12;
            var13 = '';
            var2 = var8;
            var11 = var1;
            _fun0001_ip = 2859; continue _fun0001;
 900:
            var12 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var17];
            var12 = var12.bind(var9)(var1);
            var1 = var12.getUserIdOfAutomodAction;
            var32 = var1.bind(var12)(var15);
            var12 = _closure1_slot11;
            var1 = var12.getUser;
            var30 = var1.bind(var12)(var32);
            var1 = var6 != var32;
            var20 = null;
            if(!var1) { _fun0001_ip = 977; continue _fun0001 }
 952:
            var1 = var6 != var25;
            var20 = null;
            if(!var1) { _fun0001_ip = 977; continue _fun0001 }
 961:
            var12 = _closure1_slot9;
            var1 = var12.getMember;
            var20 = var1.bind(var12)(var25, var32);
 977:
            var1 = var6 == var20;
            var12 = undefined;
            if(var1) { _fun0001_ip = 992; continue _fun0001 }
 986:
            var12 = var20.nick;
 992:
            if(!(var6 == var12)) { _fun0001_ip = 1013; continue _fun0001 }
 996:
            var32 = var6 == var30;
            var1 = undefined;
            if(var32) { _fun0001_ip = 1010; continue _fun0001 }
 1005:
            var1 = var30.username;
 1010:
            var12 = var1;
 1013:
            var30 = _closure1_slot0;
            var32 = _closure1_slot2;
            var1 = 24;
            var1 = var32[var1];
            var32 = var30.bind(var9)(var1);
            var30 = var32.ensureAvatarSource;
            var35 = var6 == var20;
            var1 = undefined;
            if(var35) { _fun0001_ip = 1054; continue _fun0001 }
 1048:
            var1 = var20.avatar;
 1054:
            if(!(var6 != var1)) { _fun0001_ip = 1062; continue _fun0001 }
 1058:
            if(!(var6 == var25)) { _fun0001_ip = 1079; continue _fun0001 }
 1062:
            var35 = var24.getAvatarSource;
            var1 = false;
            var1 = var35.bind(var24)(var9, var1, var10);
            _fun0001_ip = 1146; continue _fun0001;
 1079:
            var36 = _closure1_slot0;
            var37 = _closure1_slot2;
            var35 = 21;
            var35 = var37[var35];
            var37 = var36.bind(var9)(var35);
            var36 = var37.getGuildMemberAvatarSource;
            var35 = {};
            var39 = var24.id;
            var35['userId'] = var39;
            var40 = var6 == var20;
            var39 = undefined;
            if(var40) { _fun0001_ip = 1131; continue _fun0001 }
 1125:
            var39 = var20.avatar;
 1131:
            var35['guildMemberAvatar'] = var39;
            var35['guildId'] = var25;
            var1 = var36.bind(var37)(var35, var24);
 1146:
            var30 = var30.bind(var32)(var1);
            var1 = {};
            var37 = _closure1_slot0;
            var32 = _closure1_slot2;
            var35 = var32[var10];
            var35 = var37.bind(var9)(var35);
            var39 = var35.intl;
            var36 = var39.string;
            var35 = var32[var10];
            var35 = var37.bind(var9)(var35);
            var35 = var35.t;
            var35 = var35.lVLiFh;
            var35 = var36.bind(var39)(var35);
            var1['header'] = var35;
            var39 = 13;
            var35 = var32[var39];
            var42 = var37.bind(var9)(var35);
            var41 = var42.processColorOrThrow;
            var36 = _closure1_slot1;
            var35 = 12;
            var40 = var32[var35];
            var40 = var36.bind(var9)(var40);
            var44 = var40.internal;
            var43 = var44.resolveSemanticColor;
            var40 = var32[var35];
            var40 = var36.bind(var9)(var40);
            var40 = var40.colors;
            var40 = var40.TEXT_POSITIVE;
            var40 = var43.bind(var44)(var38, var40);
            var40 = var41.bind(var42)(var40);
            var1['headerColor'] = var40;
            var42 = _closure1_slot5;
            var41 = var42.resolveAssetSource;
            var40 = 21;
            var40 = var32[var40];
            var44 = var37.bind(var9)(var40);
            var43 = var44.makeSource;
            var40 = 25;
            var40 = var32[var40];
            var40 = var36.bind(var9)(var40);
            var40 = var43.bind(var44)(var40);
            var40 = var41.bind(var42)(var40);
            var40 = var40.uri;
            var1['headerIconURL'] = var40;
            var39 = var32[var39];
            var40 = var37.bind(var9)(var39);
            var39 = var40.processColorOrThrow;
            var41 = var32[var35];
            var41 = var36.bind(var9)(var41);
            var42 = var41.internal;
            var41 = var42.resolveSemanticColor;
            var35 = var32[var35];
            var35 = var36.bind(var9)(var35);
            var35 = var35.colors;
            var35 = var35.TEXT_POSITIVE;
            var35 = var41.bind(var42)(var38, var35);
            var35 = var39.bind(var40)(var35);
            var1['headerIconColor'] = var35;
            var35 = var32[var10];
            var35 = var37.bind(var9)(var35);
            var40 = var35.intl;
            var39 = var40.string;
            var35 = var32[var10];
            var35 = var37.bind(var9)(var35);
            var35 = var35.t;
            var35 = var35.QV/8u7;
            var35 = var39.bind(var40)(var35);
            var1['body'] = var35;
            var35 = false;
            var1['shouldShowActions'] = var35;
            var35 = 18;
            var35 = var32[var35];
            var36 = var36.bind(var9)(var35);
            var35 = var15.timestamp;
            var36 = var36.bind(var9)(var35);
            var35 = var36.fromNow;
            var35 = var35.bind(var36)();
            var1['subtitleRight'] = var35;
            var35 = var32[var10];
            var35 = var37.bind(var9)(var35);
            var36 = var35.intl;
            var35 = var36.string;
            var32 = var32[var10];
            var32 = var37.bind(var9)(var32);
            var32 = var32.t;
            var32 = var32.qlFrXV;
            var32 = var35.bind(var36)(var32);
            var1['subtitleLeft'] = var32;
            var30 = var30.uri;
            var1['enabledByAvatarURL'] = var30;
            var1['enabledByUsername'] = var12;
            var30 = var6 == var20;
            var12 = undefined;
            if(var30) { _fun0001_ip = 1607; continue _fun0001 }
 1601:
            var12 = var20.colorString;
 1607:
            var30 = var6 != var12;
            var12 = undefined;
            if(!var30) { _fun0001_ip = 1631; continue _fun0001 }
 1616:
            var30 = _closure1_slot4;
            var20 = var20.colorString;
            var12 = var30.bind(var9)(var20);
 1631:
            var1['enabledByColor'] = var12;
            var13 = '';
            var2 = var8;
            var11 = var1;
            _fun0001_ip = 2859; continue _fun0001;
 1653:
            var1 = {};
            var12 = var3.raidDatetime;
            var20 = var6 != var12;
            var12 = undefined;
            if(!var20) { _fun0001_ip = 1711; continue _fun0001 }
 1670:
            var30 = _closure1_slot1;
            var32 = _closure1_slot2;
            var20 = 18;
            var20 = var32[var20];
            var30 = var30.bind(var9)(var20);
            var20 = var3.raidDatetime;
            var30 = var30.bind(var9)(var20);
            var20 = var30.fromNow;
            var12 = var20.bind(var30)();
 1711:
            var1['subtitleLeft'] = var12;
            var32 = _closure1_slot0;
            var12 = _closure1_slot2;
            var20 = var12[var10];
            var20 = var32.bind(var9)(var20);
            var35 = var20.intl;
            var30 = var35.string;
            var20 = var12[var10];
            var20 = var32.bind(var9)(var20);
            var20 = var20.t;
            var20 = var20.C2uIXF;
            var20 = var30.bind(var35)(var20);
            var1['header'] = var20;
            var30 = 13;
            var20 = var12[var30];
            var37 = var32.bind(var9)(var20);
            var36 = var37.processColorOrThrow;
            var39 = _closure1_slot1;
            var20 = 12;
            var35 = var12[var20];
            var35 = var39.bind(var9)(var35);
            var41 = var35.internal;
            var40 = var41.resolveSemanticColor;
            var35 = var12[var20];
            var35 = var39.bind(var9)(var35);
            var35 = var35.colors;
            var35 = var35.TEXT_DANGER;
            var35 = var40.bind(var41)(var38, var35);
            var35 = var36.bind(var37)(var35);
            var1['headerColor'] = var35;
            var37 = _closure1_slot5;
            var36 = var37.resolveAssetSource;
            var35 = 21;
            var35 = var12[var35];
            var41 = var32.bind(var9)(var35);
            var40 = var41.makeSource;
            var35 = 23;
            var35 = var12[var35];
            var35 = var39.bind(var9)(var35);
            var35 = var40.bind(var41)(var35);
            var35 = var36.bind(var37)(var35);
            var35 = var35.uri;
            var1['headerIconURL'] = var35;
            var30 = var12[var30];
            var35 = var32.bind(var9)(var30);
            var30 = var35.processColorOrThrow;
            var36 = var12[var20];
            var36 = var39.bind(var9)(var36);
            var37 = var36.internal;
            var36 = var37.resolveSemanticColor;
            var20 = var12[var20];
            var20 = var39.bind(var9)(var20);
            var20 = var20.colors;
            var20 = var20.TEXT_DANGER;
            var20 = var36.bind(var37)(var38, var20);
            var20 = var30.bind(var35)(var20);
            var1['headerIconColor'] = var20;
            var20 = var12[var10];
            var20 = var32.bind(var9)(var20);
            var30 = var20.intl;
            var20 = var30.string;
            var12 = var12[var10];
            var12 = var32.bind(var9)(var12);
            var12 = var12.t;
            var12 = var12.SWIWER;
            var12 = var20.bind(var30)(var12);
            var1['body'] = var12;
            var12 = false;
            var1['shouldShowActions'] = var12;
            var13 = '';
            var2 = var8;
            var11 = var1;
            _fun0001_ip = 2859; continue _fun0001;
 2061:
            var1 = var3.raidDatetime;
            var1 = var6 != var1;
            var8 = undefined;
            if(!var1) { _fun0001_ip = 2117; continue _fun0001 }
 2076:
            var12 = _closure1_slot1;
            var20 = _closure1_slot2;
            var1 = 18;
            var1 = var20[var1];
            var12 = var12.bind(var9)(var1);
            var1 = var3.raidDatetime;
            var12 = var12.bind(var9)(var1);
            var1 = var12.fromNow;
            var8 = var1.bind(var12)();
 2117:
            var12 = var3.raidType;
            var20 = _closure1_slot0;
            var30 = _closure1_slot2;
            var1 = 19;
            var1 = var30[var1];
            var1 = var20.bind(var9)(var1);
            var1 = var1.AutomodRaidAlertTypes;
            var1 = var1.DM_RAID;
            var12 = var12 === var1;
            var1 = var3.raidDatetime;
            var1 = var6 != var1;
            var36 = '';
            if(!var1) { _fun0001_ip = 2268; continue _fun0001 }
 2176:
            var1 = global;
            var30 = var1.Date;
            var47 = var3.raidDatetime;
            var20 = var30.prototype;
            var20 = Object.create(var20, {constructor: {value: var30}});
            var48 = var20;
            var1 = new var48[var30](var47, var46);
            var32 = var1 instanceof Object ? var1 : var20;
            var30 = var32.toLocaleString;
            var35 = _closure1_slot0;
            var37 = _closure1_slot2;
            var1 = var37[var10];
            var1 = var35.bind(var9)(var1);
            var1 = var1.intl;
            var20 = var1.currentLocale;
            var1 = 20;
            var1 = var37[var1];
            var1 = var35.bind(var9)(var1);
            var1 = var1.DATE_CONFIG;
            var36 = var30.bind(var32)(var20, var1);
 2268:
            var20 = _closure1_slot0;
            var1 = _closure1_slot2;
            var30 = var1[var10];
            var30 = var20.bind(var9)(var30);
            var35 = var30.intl;
            var32 = var35.formatToPlainString;
            var1 = var1[var10];
            var1 = var20.bind(var9)(var1);
            var1 = var1.t;
            if(var12) { _fun0001_ip = 2343; continue _fun0001 }
 2312:
            var30 = var1.4ylIio;
            var20 = {};
            var37 = var3.joinAttempts;
            var20['joinCount'] = var37;
            var20 = var32.bind(var35)(var30, var20);
            _fun0001_ip = 2370; continue _fun0001;
 2343:
            var30 = var1.5C8Mh4;
            var1 = {};
            var37 = var3.dmsSent;
            var1['dmsSent'] = var37;
            var20 = var32.bind(var35)(var30, var1);
 2370:
            var1 = {};
            var1['subtitleLeft'] = var20;
            var1['severity'] = var20;
            var1['subtitleRight'] = var8;
            var1['startTime'] = var8;
            var20 = _closure1_slot0;
            var8 = _closure1_slot2;
            var30 = var8[var10];
            var30 = var20.bind(var9)(var30);
            var32 = var30.intl;
            var30 = var32.string;
            var8 = var8[var10];
            var8 = var20.bind(var9)(var8);
            var20 = var8.t;
            if(var12) { _fun0001_ip = 2451; continue _fun0001 }
 2436:
            var8 = var20.xMwcwc;
            var8 = var30.bind(var32)(var8);
            _fun0001_ip = 2464; continue _fun0001;
 2451:
            var20 = var20.8+lHUV;
            var8 = var30.bind(var32)(var20);
 2464:
            var1['header'] = var8;
            var37 = _closure1_slot0;
            var40 = _closure1_slot2;
            var30 = 13;
            var8 = var40[var30];
            var35 = var37.bind(var9)(var8);
            var32 = var35.processColorOrThrow;
            var39 = _closure1_slot1;
            var8 = 12;
            var20 = var40[var8];
            var20 = var39.bind(var9)(var20);
            var42 = var20.internal;
            var41 = var42.resolveSemanticColor;
            var20 = var40[var8];
            var20 = var39.bind(var9)(var20);
            var20 = var20.colors;
            var20 = var20.TEXT_DANGER;
            var20 = var41.bind(var42)(var38, var20);
            var20 = var32.bind(var35)(var20);
            var1['headerColor'] = var20;
            var32 = _closure1_slot5;
            var20 = var32.resolveAssetSource;
            var35 = 21;
            var35 = var40[var35];
            var37 = var37.bind(var9)(var35);
            var35 = var37.makeSource;
            var41 = _closure1_slot2;
            if(var12) { _fun0001_ip = 2602; continue _fun0001 }
 2593:
            var12 = 23;
            var12 = var41[var12];
            _fun0001_ip = 2609; continue _fun0001;
 2602:
            var40 = 22;
            var12 = var41[var40];
 2609:
            var12 = var39.bind(var9)(var12);
            var12 = var35.bind(var37)(var12);
            var12 = var20.bind(var32)(var12);
            var12 = var12.uri;
            var1['headerIconURL'] = var12;
            var20 = _closure1_slot0;
            var12 = _closure1_slot2;
            var30 = var12[var30];
            var32 = var20.bind(var9)(var30);
            var30 = var32.processColorOrThrow;
            var39 = _closure1_slot1;
            var35 = var12[var8];
            var35 = var39.bind(var9)(var35);
            var37 = var35.internal;
            var35 = var37.resolveSemanticColor;
            var8 = var12[var8];
            var8 = var39.bind(var9)(var8);
            var8 = var8.colors;
            var8 = var8.TEXT_DANGER;
            var8 = var35.bind(var37)(var38, var8);
            var8 = var30.bind(var32)(var8);
            var1['headerIconColor'] = var8;
            var8 = var12[var10];
            var8 = var20.bind(var9)(var8);
            var35 = var8.intl;
            var32 = var35.formatToPlainString;
            var8 = var12[var10];
            var8 = var20.bind(var9)(var8);
            var8 = var8.t;
            var30 = var8.4QIIZm;
            var8 = {};
            var8['dateTime'] = var36;
            var8 = var32.bind(var35)(var30, var8);
            var1['body'] = var8;
            var8 = true;
            var1['shouldShowActions'] = var8;
            var8 = var12[var10];
            var8 = var20.bind(var9)(var8);
            var32 = var8.intl;
            var30 = var32.string;
            var8 = var12[var10];
            var8 = var20.bind(var9)(var8);
            var8 = var8.t;
            var8 = var8.ufawc3;
            var13 = var30.bind(var32)(var8);
            var12 = var12[var17];
            var20 = var20.bind(var9)(var12);
            var12 = var20.getRaidAlertResolveCTAText;
            var3 = var3.resolvedReason;
            var2 = var12.bind(var20)(var3);
            var11 = var1;
 2859:
            var1 = var6 != var25;
            var8 = null;
            if(!var1) { _fun0001_ip = 2978; continue _fun0001 }
 2868:
            var3 = _closure1_slot0;
            var12 = _closure1_slot2;
            var1 = 24;
            var1 = var12[var1];
            var12 = var3.bind(var9)(var1);
            var3 = var12.ensureAvatarSource;
            if(!(var6 != var33)) { _fun0001_ip = 2902; continue _fun0001 }
 2898:
            if(!(var6 == var25)) { _fun0001_ip = 2915; continue _fun0001 }
 2902:
            var1 = var24.getAvatarSource;
            var1 = var1.bind(var24)(var9);
            _fun0001_ip = 2967; continue _fun0001;
 2915:
            var30 = _closure1_slot0;
            var32 = _closure1_slot2;
            var20 = 21;
            var20 = var32[var20];
            var32 = var30.bind(var9)(var20);
            var30 = var32.getGuildMemberAvatarSource;
            var20 = {};
            var35 = var24.id;
            var20['userId'] = var35;
            var20['guildMemberAvatar'] = var33;
            var20['guildId'] = var25;
            var1 = var30.bind(var32)(var20, var24);
 2967:
            var1 = var3.bind(var12)(var1);
            var8 = var1.uri;
 2978:
            var1 = var6 != var25;
            var20 = null;
            if(!var1) { _fun0001_ip = 3008; continue _fun0001 }
 2987:
            var12 = _closure1_slot9;
            var3 = var12.getMember;
            var1 = var24.id;
            var20 = var3.bind(var12)(var25, var1);
 3008:
            var1 = var6 != var31;
            var12 = undefined;
            if(!var1) { _fun0001_ip = 3075; continue _fun0001 }
 3017:
            var1 = var6 != var25;
            var12 = undefined;
            if(!var1) { _fun0001_ip = 3075; continue _fun0001 }
 3026:
            var3 = _closure1_slot0;
            var30 = _closure1_slot2;
            var1 = 26;
            var1 = var30[var1];
            var30 = var3.bind(var9)(var1);
            var3 = var30.getRoleIcon;
            var1 = {};
            var1['guildId'] = var25;
            var1['roleId'] = var31;
            var31 = 18;
            var1['size'] = var31;
            var12 = var3.bind(var30)(var1);
 3075:
            var1 = {};
            var30 = _closure1_slot1;
            var36 = _closure1_slot2;
            var3 = 27;
            var3 = var36[var3];
            var3 = var30.bind(var9)(var3);
            var46 = var3.bind(var9)(var23);
            var47 = var1;
            var3 = copyDataProperties(var47, var46);
            var3 = 'roleIcon';
            var1[var3] = var12;
            var12 = var24.id;
            var3 = 'authorId';
            var1[var3] = var12;
            var35 = _closure1_slot0;
            var3 = var36[var10];
            var3 = var35.bind(var9)(var3);
            var23 = var3.intl;
            var12 = var23.string;
            var3 = var36[var10];
            var3 = var35.bind(var9)(var3);
            var3 = var3.t;
            var3 = var3.hG1StL;
            var3 = var12.bind(var23)(var3);
            var23 = 'username';
            var1[var23] = var3;
            var3 = 24;
            var12 = var36[var3];
            var31 = var35.bind(var9)(var12);
            var30 = var31.ensureAvatarSource;
            var12 = 21;
            var32 = var36[var12];
            var33 = var35.bind(var9)(var32);
            var32 = var33.makeSource;
            var3 = var36[var3];
            var35 = var35.bind(var9)(var3);
            var3 = var35.getAutomodAvatarURL;
            var3 = var3.bind(var35)();
            var3 = var32.bind(var33)(var3);
            var3 = var30.bind(var31)(var3);
            var30 = var3.uri;
            var3 = 'avatarURL';
            var1[var3] = var30;
            var3 = _closure1_slot4;
            var3 = var3.bind(var9)(var21);
            var31 = var6 != var3;
            var30 = null;
            if(!var31) { _fun0001_ip = 3290; continue _fun0001 }
 3287:
            var30 = var3;
 3290:
            var3 = 'colorString';
            var1[var3] = var30;
            var3 = {};
            var3['headerText'] = var13;
            var32 = _closure1_slot0;
            var13 = _closure1_slot2;
            var30 = var13[var10];
            var30 = var32.bind(var9)(var30);
            var31 = var30.intl;
            var30 = var31.string;
            var13 = var13[var10];
            var13 = var32.bind(var9)(var13);
            var13 = var13.t;
            var13 = var13.70CJbW;
            var13 = var30.bind(var31)(var13);
            var3['headerBadgeText'] = var13;
            var30 = var6 != var34;
            var13 = '';
            if(!var30) { _fun0001_ip = 3440; continue _fun0001 }
 3378:
            var31 = _closure1_slot0;
            var30 = _closure1_slot2;
            var32 = var30[var10];
            var32 = var31.bind(var9)(var32);
            var33 = var32.intl;
            var32 = var33.formatToPlainString;
            var30 = var30[var10];
            var30 = var31.bind(var9)(var30);
            var30 = var30.t;
            var31 = var30.SYIUTU;
            var30 = {};
            var30['keyword'] = var34;
            var13 = var32.bind(var33)(var31, var30);
 3440:
            var3['keywordDisplayText'] = var13;
            var13 = {};
            if(!(var6 == var29)) { _fun0001_ip = 3458; continue _fun0001 }
 3453:
            var29 = var15.id;
 3458:
            var13['id'] = var29;
            var30 = var6 == var28;
            var29 = undefined;
            if(var30) { _fun0001_ip = 3476; continue _fun0001 }
 3471:
            var29 = var28.id;
 3476:
            if(!(var6 != var29)) { _fun0001_ip = 3483; continue _fun0001 }
 3480:
            var26 = var29;
 3483:
            if(!(var6 == var26)) { _fun0001_ip = 3492; continue _fun0001 }
 3487:
            var26 = var15.channel_id;
 3492:
            var13['channelId'] = var26;
            var13['guildId'] = var25;
            var24 = var24.id;
            var13['userId'] = var24;
            var24 = undefined;
            if(!var27) { _fun0001_ip = 3552; continue _fun0001 }
 3514:
            var25 = var6 == var16;
            var24 = undefined;
            if(!var25) { _fun0001_ip = 3552; continue _fun0001 }
 3523:
            var26 = _closure1_slot0;
            var25 = _closure1_slot2;
            var25 = var25[var17];
            var26 = var26.bind(var9)(var25);
            var25 = var26.getChannelName;
            var24 = var25.bind(var26)(var28, var27);
 3552:
            var13['channelName'] = var24;
            var13['username'] = var19;
            var19 = var18;
            if(!(var23 === var22)) { _fun0001_ip = 3587; continue _fun0001 }
 3568:
            var23 = _closure1_slot4;
            var23 = var23.bind(var9)(var21);
            var19 = var18;
            if(!(var6 != var23)) { _fun0001_ip = 3587; continue _fun0001 }
 3584:
            var19 = var23;
 3587:
            var13['usernameColor'] = var19;
            var19 = _closure1_slot4;
            var23 = var19.bind(var9)(var21);
            var24 = var6 != var23;
            var19 = null;
            if(!var24) { _fun0001_ip = 3613; continue _fun0001 }
 3610:
            var19 = var23;
 3613:
            var13['roleColor'] = var19;
            var19 = 'dot';
            var19 = var19 === var22;
            if(!var19) { _fun0001_ip = 3633; continue _fun0001 }
 3629:
            var19 = var6 != var21;
 3633:
            var13['shouldShowRoleDot'] = var19;
            var19 = _closure1_slot4;
            var19 = var19.bind(var9)(var21);
            if(!(var6 != var19)) { _fun0001_ip = 3654; continue _fun0001 }
 3651:
            var18 = var19;
 3654:
            var13['colorString'] = var18;
            var13['avatarURL'] = var8;
            var13['content'] = var7;
            var8 = _closure1_slot0;
            var7 = _closure1_slot2;
            var18 = 28;
            var18 = var7[var18];
            var19 = var8.bind(var9)(var18);
            var18 = var19.isMemberCommunicationDisabled;
            var18 = var18.bind(var19)(var20);
            var13['communicationDisabled'] = var18;
            var18 = 29;
            var18 = var7[var18];
            var19 = var8.bind(var9)(var18);
            var18 = var19.accessibilityLabelCalendarFormat;
            var15 = var15.timestamp;
            var15 = var18.bind(var19)(var15);
            var13['timestamp'] = var15;
            var3['message'] = var13;
            var3['notification'] = var11;
            var11 = var7[var10];
            var11 = var8.bind(var9)(var11);
            var13 = var11.intl;
            var11 = var13.formatToPlainString;
            var7 = var7[var10];
            var7 = var8.bind(var9)(var7);
            var7 = var7.t;
            var8 = var7.ZoOyKC;
            var7 = {};
            var7['ruleName'] = var14;
            var7 = var11.bind(var13)(var8, var7);
            var3['ruleDisplayText'] = var7;
            var7 = var6 != var16;
            var6 = null;
            if(!var7) { _fun0001_ip = 3899; continue _fun0001 }
 3817:
            var15 = _closure1_slot0;
            var14 = _closure1_slot2;
            var7 = var14[var10];
            var7 = var15.bind(var9)(var7);
            var13 = var7.intl;
            var11 = var13.formatToPlainString;
            var7 = var14[var10];
            var7 = var15.bind(var9)(var7);
            var7 = var7.t;
            var8 = var7.26bB2N;
            var7 = {};
            var14 = var14[var17];
            var15 = var15.bind(var9)(var14);
            var14 = var15.getQuarantineReasonString;
            var14 = var14.bind(var15)(var16);
            var7['reason'] = var14;
            var6 = var11.bind(var13)(var8, var7);
 3899:
            var3['reasonDisplayText'] = var6;
            var8 = _closure1_slot5;
            var7 = var8.resolveAssetSource;
            var11 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var12];
            var12 = var11.bind(var9)(var6);
            var11 = var12.makeSource;
            var13 = _closure1_slot1;
            var15 = _closure1_slot2;
            if(var4) { _fun0001_ip = 3959; continue _fun0001 }
 3950:
            var6 = 31;
            var6 = var15[var6];
            _fun0001_ip = 3966; continue _fun0001;
 3959:
            var14 = 30;
            var6 = var15[var14];
 3966:
            var6 = var13.bind(var9)(var6);
            var6 = var11.bind(var12)(var6);
            var6 = var7.bind(var8)(var6);
            var6 = var6.uri;
            var3['actionsIconURL'] = var6;
            var8 = _closure1_slot0;
            var5 = _closure1_slot2;
            var6 = var5[var10];
            var6 = var8.bind(var9)(var6);
            var7 = var6.intl;
            var6 = var7.string;
            var5 = var5[var10];
            var5 = var8.bind(var9)(var5);
            var5 = var5.t;
            if(var4) { _fun0001_ip = 4051; continue _fun0001 }
 4038:
            var4 = var5.DEoVWV;
            var4 = var6.bind(var7)(var4);
            _fun0001_ip = 4064; continue _fun0001;
 4051:
            var5 = var5.UgXhdn;
            var4 = var6.bind(var7)(var5);
 4064:
            var3['actionsText'] = var4;
            var3['feedbackText'] = var2;
            var2 = 'autoModerationContext';
            var1[var2] = var3;
            return var1;
        }
    };
    var _closure1_slot15 = var2;
    var1 = function AutoModerationActionSystemMessageInner(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var11 = var1.row;
            var14 = var1.message;
            var _closure2_slot0 = var14;
            var5 = undefined;
            var _closure2_slot4 = var5;
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 32;
            var1 = var6[var3];
            var12 = var4.bind(var5)(var1);
            var10 = var12.useStateFromStores;
            var1 = _closure1_slot6;
            var9 = new Array(1);
            var9[0] = var1;
            var7 = function() {
                var1 = _closure1_slot6;
                var1 = var1.roleStyle;
                return var1;
            };
            var1 = new Array(0);
            var13 = var10.bind(var12)(var9, var7, var1);
            var _closure2_slot1 = var13;
            var1 = var6[var3];
            var10 = var4.bind(var5)(var1);
            var9 = var10.useStateFromStores;
            var1 = _closure1_slot7;
            var7 = new Array(1);
            var7[0] = var1;
            var1 = function() {
                var1 = _closure1_slot7;
                var1 = var1.theme;
                return var1;
            };
            var12 = var9.bind(var10)(var7, var1);
            var _closure2_slot2 = var12;
            var1 = var14.getChannelId;
            var1 = var1.bind(var14)();
            var _closure2_slot3 = var1;
            var3 = var6[var3];
            var7 = var4.bind(var5)(var3);
            var6 = var7.useStateFromStores;
            var3 = _closure1_slot8;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                var3 = _closure1_slot8;
                var2 = var3.getChannel;
                var1 = _closure2_slot3;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var4 = var6.bind(var7)(var4, var1, var3);
            var1 = null;
            var3 = var1 == var4;
            var16 = undefined;
            if(var3) { _fun0002_ip = 214; continue _fun0002 }
 204:
            var3 = var4.getGuildId;
            var16 = var3.bind(var4)();
 214:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 15;
            var3 = var6[var3];
            var4 = var4.bind(var5)(var3);
            var3 = var4.useNullableMessageAuthor;
            var3 = var3.bind(var4)(var14);
            var4 = var3.colorString;
            var15 = var3.iconRoleId;
            var9 = var14.author;
            var3 = var1 != var15;
            var10 = undefined;
            if(!var3) { _fun0002_ip = 330; continue _fun0002 }
 272:
            var3 = var1 != var16;
            var10 = undefined;
            if(!var3) { _fun0002_ip = 330; continue _fun0002 }
 281:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 26;
            var3 = var7[var3];
            var7 = var6.bind(var5)(var3);
            var6 = var7.getRoleIcon;
            var3 = {};
            var3['guildId'] = var16;
            var3['roleId'] = var15;
            var15 = 18;
            var3['size'] = var15;
            var10 = var6.bind(var7)(var3);
 330:
            var3 = _closure1_slot4;
            var3 = var3.bind(var5)(var4);
            var4 = var1 != var3;
            var7 = null;
            if(!var4) { _fun0002_ip = 351; continue _fun0002 }
 348:
            var7 = var3;
 351:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 33;
            var3 = var6[var3];
            var3 = var4.bind(var5)(var3);
            var4 = var3.AnimateEmoji;
            var3 = var4.useSetting;
            var15 = var3.bind(var4)();
            _closure2_slot4 = var15;
            var6 = _closure1_slot3;
            var4 = var6.useMemo;
            var3 = new Array(4);
            var3[0] = var15;
            var3[1] = var14;
            var3[2] = var13;
            var3[3] = var12;
            var2 = function() {
                var3 = _closure1_slot15;
                var2 = {};
                var7 = _closure2_slot0;
                var2['message'] = var7;
                var4 = _closure2_slot2;
                var2['theme'] = var4;
                var4 = _closure2_slot1;
                var2['roleStyle'] = var4;
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 34;
                var4 = var4[var1];
                var1 = undefined;
                var5 = var5.bind(var1)(var4);
                var4 = {};
                var7 = var7.reactions;
                var4['reactions'] = var7;
                var6 = _closure2_slot4;
                var4['animateEmoji'] = var6;
                var4 = var5.bind(var1)(var4);
                var2['reactions'] = var4;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var2 = var4.bind(var6)(var2, var3);
            if(!(var1 != var2)) { _fun0002_ip = 641; continue _fun0002 }
 440:
            var6 = var2.autoModerationContext;
            var4 = _closure1_slot13;
            var3 = _closure1_slot1;
            var14 = _closure1_slot2;
            var2 = 35;
            var2 = var14[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var2['row'] = var11;
            var2['roleIcon'] = var10;
            var9 = var9.id;
            var2['authorId'] = var9;
            var13 = _closure1_slot0;
            var8 = 16;
            var9 = var14[var8];
            var9 = var13.bind(var5)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var8 = var14[var8];
            var8 = var13.bind(var5)(var8);
            var8 = var8.t;
            var8 = var8.hG1StL;
            var8 = var9.bind(var10)(var8);
            var2['username'] = var8;
            var8 = 24;
            var9 = var14[var8];
            var10 = var13.bind(var5)(var9);
            var9 = var10.ensureAvatarSource;
            var11 = 21;
            var11 = var14[var11];
            var12 = var13.bind(var5)(var11);
            var11 = var12.makeSource;
            var8 = var14[var8];
            var13 = var13.bind(var5)(var8);
            var8 = var13.getAutomodAvatarURL;
            var8 = var8.bind(var13)();
            var8 = var11.bind(var12)(var8);
            var8 = var9.bind(var10)(var8);
            var8 = var8.uri;
            var2['avatarURL'] = var8;
            var2['colorString'] = var7;
            var2['autoModerationContext'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
 641:
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var9 = var7[var1];
    var5 = native4;
    var1 = undefined;
    var5 = var5.bind(var1)(var9);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var9 = var5.processColor;
    var _closure1_slot4 = var9;
    var5 = var5.Image;
    var _closure1_slot5 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot6 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot7 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot8 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot9 = var5;
    var5 = 6;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot10 = var5;
    var5 = 7;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot11 = var5;
    var5 = 8;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.Permissions;
    var _closure1_slot12 = var5;
    var5 = 9;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.jsx;
    var _closure1_slot13 = var5;
    var5 = 10;
    var5 = var7[var5];
    var9 = var6.bind(var1)(var5);
    var8 = var9.memoize;
    var5 = function(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 11;
            var1 = var4[var1];
            var5 = undefined;
            var4 = var3.bind(var5)(var1);
            var3 = var4.isThemeDark;
            var1 = arg1;
            var3 = var3.bind(var4)(var1);
            var4 = _closure1_slot1;
            var6 = _closure1_slot2;
            var1 = 12;
            var1 = var6[var1];
            var1 = var4.bind(var5)(var1);
            var1 = var1.unsafe_rawColors;
            if(var3) { _fun0003_ip = 75; continue _fun0003 }
 67:
            var4 = var1.PRIMARY_630;
            _fun0003_ip = 81; continue _fun0003;
 75:
            var4 = var1.WHITE_500;
 81:
            var1 = {};
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 13;
            var2 = var6[var2];
            var3 = var3.bind(var5)(var2);
            var2 = var3.processColorOrThrow;
            var2 = var2.bind(var3)(var4);
            var1['defaultUsernameColor'] = var2;
            return var1;
        }
    };
    var5 = var8.bind(var9)(var5);
    var _closure1_slot14 = var5;
    var5 = 36;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/messages/native/renderer/system_messages/AutoModerationActionSystemMessage.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function AutoModerationActionSystemMessage(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var1 = arg1;
            var7 = var1.row;
            var6 = var7.message;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 14;
            var1 = var4[var1];
            var5 = undefined;
            var3 = var3.bind(var5)(var1);
            var1 = var3.isAutomodMessageRecord;
            var3 = var1.bind(var3)(var6);
            var1 = null;
            if(!var3) { _fun0004_ip = 80; continue _fun0004 }
 55:
            var4 = _closure1_slot13;
            var3 = _closure1_slot16;
            var2 = {};
            var2['row'] = var7;
            var2['message'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 80:
            return var1;
        }
    };
    var3['default'] = var4;
    var3['createAutoModerationActionSystemMessage'] = var2;
    return var1;
})();