// app/modules/messages/native/renderer/row_data/embeds/coded_links/GuildScheduledEventEmbed.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function createGuildScheduledEventEmbed(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var29 = var1.channel;
            var2 = var1.guildEvent;
            var22 = var1.userCount;
            var13 = var1.guild;
            var16 = var1.theme;
            var4 = var1.type;
            var34 = var1.recurrenceId;
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 10;
            var1 = var5[var1];
            var11 = undefined;
            var1 = var3.bind(var11)(var1);
            var1 = var1.bind(var11)(var16);
            var3 = var1.colors;
            var9 = null;
            var5 = var9 == var29;
            var1 = undefined;
            if(var5) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var29.id;
case 2:
            var5 = var9 != var13;
            var7 = undefined;
            if(!var5) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var10 = _closure1_slot8;
            var6 = 128;
            var5 = false;
            var7 = var10.bind(var11)(var13, var6, var5);
case 4:
            var5 = var9 != var7;
            var18 = undefined;
            if(!var5) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = _closure1_slot0;
            var10 = _closure1_slot2;
            var5 = 11;
            var5 = var10[var5];
            var6 = var6.bind(var11)(var5);
            var5 = var6.getAssetUriForEmbed;
            var18 = var5.bind(var6)(var7);
case 6:
            var7 = _closure1_slot0;
            var10 = _closure1_slot2;
            var5 = 12;
            var5 = var10[var5];
            var6 = var7.bind(var11)(var5);
            var5 = var6.isGuildEventInvitable;
            var15 = var5.bind(var6)(var2);
            var5 = _closure1_slot6;
            var35 = var5.bind(var11)(var2);
            var24 = var2.entity_type;
            var5 = _closure1_slot13;
            var23 = var5.EXTERNAL;
            var12 = _closure1_slot7;
            var6 = var12.isInterestedInEventRecurrence;
            var5 = var2.id;
            var33 = var6.bind(var12)(var5, var34);
            var5 = var2.name;
            var30 = var2.description;
            var19 = var2.entity_type;
            var6 = _closure1_slot13;
            var17 = var6.STAGE_INSTANCE;
            var6 = 13;
            var6 = var10[var6];
            var12 = var7.bind(var11)(var6);
            var6 = var12.getEventSchedule;
            var12 = var6.bind(var12)(var2, var34);
            var6 = 14;
            var6 = var10[var6];
            var10 = var7.bind(var11)(var6);
            var7 = var10.getEventTimeData;
            var14 = var9 == var12;
            var6 = undefined;
            if(var14) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var14 = var12.startTime;
            var12 = var14.toISOString;
            var6 = var12.bind(var14)();
case 8:
            var20 = var7.bind(var10)(var6);
            var7 = _closure1_slot0;
            var25 = _closure1_slot2;
            var6 = 15;
            var10 = var25[var6];
            var14 = var7.bind(var11)(var10);
            var12 = var14.getGuildScheduledEventHeaderProps;
            var10 = {};
            var10['eventTimeData'] = var20;
            var17 = var19 === var17;
            var10['isStage'] = var17;
            var10['theme'] = var16;
            var10['event'] = var2;
            var14 = var12.bind(var14)(var10);
            var10 = var14.color;
            var16 = var14.icon;
            var12 = var14.shouldChangeTextColor;
            var14 = var14.text;
            var28 = var9 != var13;
            var20 = {};
            var17 = var3.titleColor;
            var20['titleColor'] = var17;
            var17 = var3.borderColor;
            var20['borderColor'] = var17;
            var17 = var3.backgroundColor;
            var20['backgroundColor'] = var17;
            var20['thumbnailCornerRadius'] = var6;
            var20['embedCanBeTapped'] = var28;
            var36 = 16;
            var6 = var25[var36];
            var6 = var7.bind(var11)(var6);
            var19 = var6.intl;
            var17 = var19.string;
            var6 = var25[var36];
            var6 = var7.bind(var11)(var6);
            var6 = var6.t;
            var6 = var6.DlcqlZ;
            var32 = var17.bind(var19)(var6);
            var17 = 11;
            var6 = var25[var17];
            var26 = var7.bind(var11)(var6);
            var19 = var26.getAssetUriForEmbed;
            var21 = _closure1_slot1;
            var6 = 17;
            var6 = var25[var6];
            var6 = var21.bind(var11)(var6);
            var31 = var19.bind(var26)(var6);
            var6 = var25[var17];
            var19 = var7.bind(var11)(var6);
            var7 = var19.getAssetUriForEmbed;
            var6 = 18;
            var6 = var25[var6];
            var6 = var21.bind(var11)(var6);
            var19 = var7.bind(var19)(var6);
            if(var28) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var26 = _closure1_slot0;
            var6 = _closure1_slot2;
            var7 = 19;
            var7 = var6[var7];
            var25 = var26.bind(var11)(var7);
            var21 = var25.processColorOrThrow;
            var27 = _closure1_slot1;
            var7 = 20;
            var7 = var6[var7];
            var7 = var27.bind(var11)(var7);
            var7 = var7.unsafe_rawColors;
            var7 = var7.GREEN_360;
            var27 = var21.bind(var25)(var7);
            var7 = var6[var36];
            var7 = var26.bind(var11)(var7);
            var25 = var7.intl;
            var7 = var25.string;
            var6 = var6[var36];
            var6 = var26.bind(var11)(var6);
            var6 = var6.t;
            var6 = var6.XpeFYm;
            var21 = var7.bind(var25)(var6);
            var26 = var3.acceptLabelGreenColor;
            var7 = false;
            var25 = undefined;
            var6 = undefined;
            _fun0001_ip = 12; continue _fun0001;
case 10:
            if(var35) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            if(var33) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var27 = var3.acceptLabelActiveBackgroundColor;
            var26 = var3.acceptLabelGreenColor;
            var7 = var33;
            var21 = var32;
            var25 = var31;
            var6 = var19;
            _fun0001_ip = 12; continue _fun0001;
case 15:
            var27 = var3.backgroundColor;
            var35 = _closure1_slot0;
            var40 = _closure1_slot2;
            var31 = var40[var17];
            var38 = var35.bind(var11)(var31);
            var35 = var38.getAssetUriForEmbed;
            var39 = _closure1_slot1;
            var31 = 21;
            var31 = var40[var31];
            var31 = var39.bind(var11)(var31);
            var25 = var35.bind(var38)(var31);
            var26 = var3.acceptLabelDisabledTextColor;
            var7 = var33;
            var21 = var32;
            var6 = var19;
            _fun0001_ip = 12; continue _fun0001;
case 13:
            var32 = var3.acceptLabelActiveBackgroundColor;
            if(!(var24 !== var23)) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var33 = _closure1_slot0;
            var23 = _closure1_slot2;
            var24 = var23[var36];
            var24 = var33.bind(var11)(var24);
            var31 = var24.intl;
            var24 = var31.string;
            var23 = var23[var36];
            var23 = var33.bind(var11)(var23);
            var23 = var23.t;
            var23 = var23.IaYdtb;
            var23 = var24.bind(var31)(var23);
            _fun0001_ip = 19; continue _fun0001;
case 17:
            var35 = _closure1_slot0;
            var24 = _closure1_slot2;
            var31 = var24[var36];
            var31 = var35.bind(var11)(var31);
            var33 = var31.intl;
            var31 = var33.string;
            var24 = var24[var36];
            var24 = var35.bind(var11)(var24);
            var24 = var24.t;
            var24 = var24.GoCQxc;
            var23 = var31.bind(var33)(var24);
case 19:
            var26 = var3.acceptLabelGreenColor;
            var7 = false;
            var21 = var23;
            var27 = var32;
            var25 = undefined;
            var6 = var19;
case 12:
            if(var15) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var6 = undefined;
case 20:
            var15 = var9 != var30;
            var19 = undefined;
            if(!var15) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var23 = _closure1_slot1;
            var24 = _closure1_slot2;
            var15 = 22;
            var15 = var24[var15];
            var24 = var23.bind(var11)(var15);
            var23 = var24.parseToAST;
            var15 = {'channelId': null, 'allowLinks': true, 'allowEmojiLinks': true, 'allowHeading': true, 'allowList': true};
            var15['channelId'] = var1;
            var1 = true;
            var19 = var23.bind(var24)(var30, var1, var15);
case 22:
            var15 = _closure1_slot0;
            var23 = _closure1_slot2;
            var1 = 23;
            var1 = var23[var1];
            var15 = var15.bind(var11)(var1);
            var1 = var15.getLocationFromEvent;
            var15 = var1.bind(var15)(var2);
            if(!(var9 == var15)) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var23 = var9 == var29;
            var1 = undefined;
            if(var23) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            var1 = var29.name;
case 26:
            var15 = var1;
case 24:
            var24 = _closure1_slot0;
            var1 = _closure1_slot2;
            var23 = 24;
            var23 = var1[var23];
            var24 = var24.bind(var11)(var23);
            var23 = var24.getEventLocationIconSource;
            var24 = var23.bind(var24)(var2, var29, var28);
            var29 = _closure1_slot11;
            var28 = var29.getUser;
            var23 = var2.creator_id;
            var23 = var28.bind(var29)(var23);
            var28 = _closure1_slot1;
            var29 = 25;
            var1 = var1[var29];
            var32 = var28.bind(var11)(var1);
            var31 = var32.getGuildEventUserCounts;
            var30 = var2.guild_id;
            var28 = var2.id;
            if(!(var9 == var34)) { _fun0001_ip = 28; continue _fun0001 }
case 29:
            var1 = new Array(0);
            _fun0001_ip = 30; continue _fun0001;
case 28:
            var33 = new Array(1);
            var33[0] = var34;
            var1 = var33;
case 30:
            var1 = var31.bind(var32)(var30, var28, var1);
            var28 = _closure1_slot1;
            var1 = _closure1_slot2;
            var1 = var1[var29];
            var29 = var28.bind(var11)(var1);
            var28 = var29.getGuildEventsForCurrentUser;
            var1 = var2.guild_id;
            var1 = var28.bind(var29)(var1);
            var1 = {};
            var43 = var1;
            var42 = var20;
            var20 = copyDataProperties(var43, var42);
            var20 = 'acceptLabelBackgroundColor';
            var1[var20] = var27;
            var27 = undefined;
            if(!var7) { _fun0001_ip = 31; continue _fun0001 }
case 32:
            var27 = var3.acceptLabelDisabledBorderColor;
case 31:
            var20 = 'acceptLabelBorderColor';
            var1[var20] = var27;
            var20 = 'acceptLabelColor';
            var1[var20] = var26;
            var20 = 'acceptLabelIcon';
            var1[var20] = var25;
            var20 = 'acceptLabelText';
            var1[var20] = var21;
            var20 = var9 == var22;
            var21 = undefined;
            if(var20) { _fun0001_ip = 33; continue _fun0001 }
case 34:
            var20 = var22.toLocaleString;
            var21 = var20.bind(var22)();
case 33:
            var20 = 'badgeCount';
            var1[var20] = var21;
            var21 = _closure1_slot0;
            var26 = _closure1_slot2;
            var20 = var26[var17];
            var22 = var21.bind(var11)(var20);
            var21 = var22.getAssetUriForEmbed;
            var25 = _closure1_slot1;
            var20 = 26;
            var20 = var26[var20];
            var20 = var25.bind(var11)(var20);
            var21 = var21.bind(var22)(var20);
            var20 = 'badgeIcon';
            var1[var20] = var21;
            var20 = var9 != var24;
            var21 = undefined;
            if(!var20) { _fun0001_ip = 35; continue _fun0001 }
case 36:
            var22 = _closure1_slot0;
            var20 = _closure1_slot2;
            var20 = var20[var17];
            var22 = var22.bind(var11)(var20);
            var20 = var22.getAssetUriForEmbed;
            var21 = var20.bind(var22)(var24);
case 35:
            var20 = 'channelIcon';
            var1[var20] = var21;
            var21 = var9 != var15;
            var20 = undefined;
            if(!var21) { _fun0001_ip = 37; continue _fun0001 }
case 38:
            var20 = var15;
case 37:
            var15 = 'channelName';
            var1[var15] = var20;
            var15 = 'content';
            var1[var15] = var19;
            var15 = var9 != var23;
            var19 = undefined;
            if(!var15) { _fun0001_ip = 39; continue _fun0001 }
case 40:
            var20 = _closure1_slot0;
            var15 = _closure1_slot2;
            var15 = var15[var17];
            var21 = var20.bind(var11)(var15);
            var20 = var21.getAssetUriForEmbed;
            var22 = var23.getAvatarSource;
            var15 = var2.guild_id;
            var15 = var22.bind(var23)(var15);
            var19 = var20.bind(var21)(var15);
case 39:
            var15 = 'creatorAvatar';
            var1[var15] = var19;
            var15 = _closure1_slot12;
            var19 = var15.GUILD_SCHEDULED_EVENT;
            var15 = 'extendedType';
            var1[var15] = var19;
            var15 = 'guildIcon';
            var1[var15] = var18;
            var18 = var9 == var13;
            var15 = undefined;
            if(var18) { _fun0001_ip = 41; continue _fun0001 }
case 42:
            var15 = var13.name;
case 41:
            var13 = 'guildName';
            var1[var13] = var15;
            var13 = _closure1_slot4;
            var15 = var13.bind(var11)(var10);
            if(!(var9 == var15)) { _fun0001_ip = 43; continue _fun0001 }
case 44:
            var15 = var3.headerColor;
case 43:
            var13 = 'headerColor';
            var1[var13] = var15;
            var15 = _closure1_slot0;
            var13 = _closure1_slot2;
            var13 = var13[var17];
            var15 = var15.bind(var11)(var13);
            var13 = var15.getAssetUriForEmbed;
            var15 = var13.bind(var15)(var16);
            var13 = 'headerIcon';
            var1[var13] = var15;
            var13 = 'headerText';
            var1[var13] = var14;
            if(!var12) { _fun0001_ip = 45; continue _fun0001 }
case 46:
            var8 = _closure1_slot4;
            var8 = var8.bind(var11)(var10);
            if(!(var9 == var8)) { _fun0001_ip = 47; continue _fun0001 }
case 45:
            var8 = var3.headerColor;
case 47:
            var3 = 'headerTextColor';
            var1[var3] = var8;
            var3 = 'isRsvped';
            var1[var3] = var7;
            var3 = 'secondaryActionIcon';
            var1[var3] = var6;
            var3 = 'titleText';
            var1[var3] = var5;
            var3 = 'type';
            var1[var3] = var4;
            var3 = var2.id;
            var2 = 'guildEventId';
            var1[var2] = var3;
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.processColor;
    var _closure1_slot4 = var4;
    var4 = 2;
    var8 = var6[var4];
    var8 = var5.bind(var1)(var8);
    var9 = var8.isGuildEventEnded;
    var _closure1_slot5 = var9;
    var8 = var8.isGuildScheduledEventActive;
    var _closure1_slot6 = var8;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.getGuildIconSource;
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.CodedLinkExtendedType;
    var _closure1_slot12 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.GuildScheduledEventEntityTypes;
    var _closure1_slot13 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.InviteTypes;
    var _closure1_slot14 = var4;
    var4 = {};
    var _closure1_slot15 = var4;
    var4 = 29;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/row_data/embeds/coded_links/GuildScheduledEventEmbed.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function createGuildScheduledEventInviteEmbed(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var7 = arg1;
            var5 = _closure1_slot9;
            var4 = var5.getChannel;
            var8 = var7.channel;
            var2 = null;
            var9 = var2 == var8;
            var6 = undefined;
            var1 = undefined;
            if(var9) { _fun0002_ip = 48; continue _fun0002 }
case 49:
            var1 = var8.id;
case 48:
            var11 = var4.bind(var5)(var1);
            var1 = var2 == var11;
            var5 = undefined;
            if(var1) { _fun0002_ip = 50; continue _fun0002 }
case 51:
            var5 = var11.guild_id;
case 50:
            var8 = _closure1_slot7;
            var4 = var8.getGuildScheduledEvent;
            var9 = var7.guild_scheduled_event;
            var10 = var2 == var9;
            var1 = undefined;
            if(var10) { _fun0002_ip = 52; continue _fun0002 }
case 53:
            var1 = var9.id;
case 52:
            var9 = var4.bind(var8)(var1);
            var8 = _closure1_slot7;
            var4 = var8.getUserCount;
            var10 = var7.guild_scheduled_event;
            var12 = var2 == var10;
            var1 = undefined;
            if(var12) { _fun0002_ip = 54; continue _fun0002 }
case 55:
            var1 = var10.id;
case 54:
            var8 = var4.bind(var8)(var1, var2);
            if(!(var2 != var9)) { _fun0002_ip = 56; continue _fun0002 }
case 57:
            if(!(var2 != var5)) { _fun0002_ip = 58; continue _fun0002 }
case 59:
            var4 = _closure1_slot1;
            var10 = _closure1_slot2;
            var1 = 25;
            var1 = var10[var1];
            var12 = var4.bind(var6)(var1);
            var10 = var12.getGuildEventUserCounts;
            var4 = var9.id;
            var1 = new Array(0);
            var1 = var10.bind(var12)(var5, var4, var1);
case 58:
            var4 = _closure1_slot16;
            var1 = {};
            var1['channel'] = var11;
            var1['guildEvent'] = var9;
            var1['userCount'] = var8;
            var8 = var7.guild;
            if(!(var2 == var8)) { _fun0002_ip = 60; continue _fun0002 }
case 61:
            var10 = _closure1_slot10;
            var9 = var10.getGuild;
            var12 = var2 == var11;
            var8 = undefined;
            if(var12) { _fun0002_ip = 62; continue _fun0002 }
case 63:
            var8 = var11.guild_id;
case 62:
            var8 = var9.bind(var10)(var8);
            _fun0002_ip = 64; continue _fun0002;
case 60:
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var9 = 28;
            var9 = var11[var9];
            var11 = var10.bind(var6)(var9);
            var10 = var11.fromInviteGuild;
            var9 = var7.guild;
            var8 = var10.bind(var11)(var9);
case 64:
            var1['guild'] = var8;
            var8 = arg2;
            var1['theme'] = var8;
            var7 = var7.type;
            if(!(var2 == var7)) { _fun0002_ip = 65; continue _fun0002 }
case 66:
            var8 = _closure1_slot14;
            var7 = var8.GUILD;
case 65:
            var1['type'] = var7;
            var1 = var4.bind(var6)(var1);
            _fun0002_ip = 67; continue _fun0002;
case 56:
            var4 = var2 != var5;
            var1 = null;
            if(!var4) { _fun0002_ip = 67; continue _fun0002 }
case 68:
            var4 = _closure1_slot1;
            var7 = _closure1_slot2;
            var3 = 27;
            var3 = var7[var3];
            var4 = var4.bind(var6)(var3);
            var3 = var4.fetchGuildEventsForGuild;
            var3 = var3.bind(var4)(var5);
            var1 = null;
case 67:
            return var1;
        }
    };
    var3['createGuildScheduledEventInviteEmbed'] = var4;
    var2 = function createGuildScheduledEventLinkEmbed(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg1;
            var2 = var4.split;
            var1 = '-';
            var5 = var2.bind(var4)(var1);
            var4 = _closure1_slot3;
            var7 = undefined;
            var1 = 3;
            var5 = var4.bind(var7)(var5, var1);
            var1 = 0;
            var4 = var5[var1];
            var _closure2_slot0 = var4;
            var1 = 1;
            var8 = var5[var1];
            var1 = 2;
            var5 = var5[var1];
            var6 = _closure1_slot7;
            var1 = var6.getGuildScheduledEvent;
            var10 = var1.bind(var6)(var8);
            var1 = null;
            if(!(var1 == var5)) { _fun0003_ip = 69; continue _fun0003 }
case 53:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var6 = 14;
            var6 = var9[var6];
            var8 = var8.bind(var7)(var6);
            var6 = var8.getNextRecurrenceIdInEvent;
            var5 = var6.bind(var8)(var10);
case 69:
            var6 = var1 != var5;
            var8 = undefined;
            if(!var6) { _fun0003_ip = 70; continue _fun0003 }
case 54:
            var8 = var5;
case 70:
            if(!(var1 != var10)) { _fun0003_ip = 68; continue _fun0003 }
case 71:
            var5 = _closure1_slot5;
            var5 = var5.bind(var7)(var10);
            if(var5) { _fun0003_ip = 68; continue _fun0003 }
case 72:
            var6 = _closure1_slot1;
            var9 = _closure1_slot2;
            var5 = 25;
            var5 = var9[var5];
            var11 = var6.bind(var7)(var5);
            var9 = var11.getGuildEventUserCounts;
            var6 = var10.id;
            if(!(var1 == var8)) { _fun0003_ip = 73; continue _fun0003 }
case 74:
            var5 = new Array(0);
            _fun0003_ip = 75; continue _fun0003;
case 73:
            var12 = new Array(1);
            var12[0] = var8;
            var5 = var12;
case 75:
            var5 = var9.bind(var11)(var4, var6, var5);
            var9 = _closure1_slot7;
            var6 = var9.getUserCount;
            var5 = var10.id;
            var9 = var6.bind(var9)(var5, var8);
            var6 = _closure1_slot16;
            var5 = {};
            var13 = _closure1_slot9;
            var12 = var13.getChannel;
            var14 = var1 == var10;
            var11 = undefined;
            if(var14) { _fun0003_ip = 76; continue _fun0003 }
case 77:
            var11 = var10.channel_id;
case 76:
            var11 = var12.bind(var13)(var11);
            var5['channel'] = var11;
            var5['guildEvent'] = var10;
            var5['userCount'] = var9;
            var10 = _closure1_slot10;
            var9 = var10.getGuild;
            var9 = var9.bind(var10)(var4);
            var5['guild'] = var9;
            var9 = arg2;
            var5['theme'] = var9;
            var9 = _closure1_slot14;
            var9 = var9.GUILD;
            var5['type'] = var9;
            var5['recurrenceId'] = var8;
            var5 = var6.bind(var7)(var5);
            return var5;
case 68:
            var5 = _closure1_slot15;
            var5 = var5[var4];
            if(var5) { _fun0003_ip = 78; continue _fun0003 }
case 79:
            var6 = _closure1_slot1;
            var8 = _closure1_slot2;
            var5 = 27;
            var5 = var8[var5];
            var6 = var6.bind(var7)(var5);
            var5 = var6.fetchGuildEventsForGuild;
            var7 = var5.bind(var6)(var4);
            var6 = var7.then;
            var5 = function() {
                var2 = _closure1_slot15;
                var1 = _closure2_slot0;
                var1 = delete var2[var1];
                return var1;
            };
            var6 = var6.bind(var7)(var5);
            var5 = var6.catch;
            var3 = function() {
                var2 = _closure1_slot15;
                var1 = _closure2_slot0;
                var1 = delete var2[var1];
                return var1;
            };
            var3 = var5.bind(var6)(var3);
            var3 = _closure1_slot15;
            var2 = true;
            var3[var4] = var2;
case 78:
            return var1;
        }
    };
    var3['createGuildScheduledEventLinkEmbed'] = var2;
    return var1;
})();