// app/modules/messages/native/renderer/row_data/embeds/coded_links/GuildScheduledEventEmbed.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function createGuildScheduledEventEmbed(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
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
            var1 = 12;
            var1 = var5[var1];
            var11 = undefined;
            var1 = var3.bind(var11)(var1);
            var1 = var1.bind(var11)(var16);
            var3 = var1.colors;
            var9 = null;
            var5 = var9 == var29;
            var1 = undefined;
            if(var5) { _fun0001_ip = 92; continue _fun0001 }
 87:
            var1 = var29.id;
 92:
            var5 = var9 != var13;
            var7 = undefined;
            if(!var5) { _fun0001_ip = 117; continue _fun0001 }
 101:
            var10 = _closure1_slot9;
            var6 = 128;
            var5 = false;
            var7 = var10.bind(var11)(var13, var6, var5);
 117:
            var5 = var9 != var7;
            var18 = undefined;
            if(!var5) { _fun0001_ip = 157; continue _fun0001 }
 126:
            var6 = _closure1_slot0;
            var10 = _closure1_slot2;
            var5 = 13;
            var5 = var10[var5];
            var6 = var6.bind(var11)(var5);
            var5 = var6.getAssetUriForEmbed;
            var18 = var5.bind(var6)(var7);
 157:
            var10 = _closure1_slot0;
            var12 = _closure1_slot2;
            var5 = 14;
            var5 = var12[var5];
            var6 = var10.bind(var11)(var5);
            var5 = var6.isGuildEventInvitable;
            var15 = var5.bind(var6)(var2);
            var5 = _closure1_slot7;
            var35 = var5.bind(var11)(var2);
            var24 = var2.entity_type;
            var5 = _closure1_slot14;
            var23 = var5.EXTERNAL;
            var7 = _closure1_slot8;
            var6 = var7.isInterestedInEventRecurrence;
            var5 = var2.id;
            var33 = var6.bind(var7)(var5, var34);
            var5 = var2.name;
            var30 = var2.description;
            var19 = var2.entity_type;
            var6 = _closure1_slot14;
            var17 = var6.STAGE_INSTANCE;
            var6 = 15;
            var7 = var12[var6];
            var14 = var10.bind(var11)(var7);
            var7 = var14.getEventSchedule;
            var14 = var7.bind(var14)(var2, var34);
            var7 = 16;
            var7 = var12[var7];
            var12 = var10.bind(var11)(var7);
            var10 = var12.getEventTimeData;
            var20 = var9 == var14;
            var7 = undefined;
            if(var20) { _fun0001_ip = 327; continue _fun0001 }
 311:
            var20 = var14.startTime;
            var14 = var20.toISOString;
            var7 = var14.bind(var20)();
 327:
            var20 = var10.bind(var12)(var7);
            var7 = _closure1_slot0;
            var25 = _closure1_slot2;
            var10 = 17;
            var10 = var25[var10];
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
            var36 = 18;
            var6 = var25[var36];
            var6 = var7.bind(var11)(var6);
            var19 = var6.intl;
            var17 = var19.string;
            var6 = var25[var36];
            var6 = var7.bind(var11)(var6);
            var6 = var6.t;
            var6 = var6.DlcqlZ;
            var32 = var17.bind(var19)(var6);
            var17 = 13;
            var6 = var25[var17];
            var26 = var7.bind(var11)(var6);
            var19 = var26.getAssetUriForEmbed;
            var21 = _closure1_slot1;
            var6 = 19;
            var6 = var25[var6];
            var6 = var21.bind(var11)(var6);
            var31 = var19.bind(var26)(var6);
            var6 = var25[var17];
            var19 = var7.bind(var11)(var6);
            var7 = var19.getAssetUriForEmbed;
            var6 = 20;
            var6 = var25[var6];
            var6 = var21.bind(var11)(var6);
            var19 = var7.bind(var19)(var6);
            if(var28) { _fun0001_ip = 696; continue _fun0001 }
 577:
            var26 = _closure1_slot0;
            var6 = _closure1_slot2;
            var7 = 21;
            var7 = var6[var7];
            var25 = var26.bind(var11)(var7);
            var21 = var25.processColorOrThrow;
            var27 = _closure1_slot1;
            var7 = 22;
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
            _fun0001_ip = 935; continue _fun0001;
 696:
            if(var35) { _fun0001_ip = 800; continue _fun0001 }
 699:
            if(var33) { _fun0001_ip = 731; continue _fun0001 }
 702:
            var27 = var3.acceptLabelActiveBackgroundColor;
            var26 = var3.acceptLabelGreenColor;
            var7 = var33;
            var21 = var32;
            var25 = var31;
            var6 = var19;
            _fun0001_ip = 935; continue _fun0001;
 731:
            var27 = var3.backgroundColor;
            var35 = _closure1_slot0;
            var40 = _closure1_slot2;
            var31 = var40[var17];
            var38 = var35.bind(var11)(var31);
            var35 = var38.getAssetUriForEmbed;
            var39 = _closure1_slot1;
            var31 = 23;
            var31 = var40[var31];
            var31 = var39.bind(var11)(var31);
            var25 = var35.bind(var38)(var31);
            var26 = var3.acceptLabelDisabledTextColor;
            var7 = var33;
            var21 = var32;
            var6 = var19;
            _fun0001_ip = 935; continue _fun0001;
 800:
            var32 = var3.acceptLabelActiveBackgroundColor;
            if(!(var24 !== var23)) { _fun0001_ip = 864; continue _fun0001 }
 810:
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
            _fun0001_ip = 916; continue _fun0001;
 864:
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
 916:
            var26 = var3.acceptLabelGreenColor;
            var7 = false;
            var21 = var23;
            var27 = var32;
            var25 = undefined;
            var6 = var19;
 935:
            if(var15) { _fun0001_ip = 940; continue _fun0001 }
 938:
            var6 = undefined;
 940:
            var15 = var9 != var30;
            var19 = undefined;
            if(!var15) { _fun0001_ip = 1004; continue _fun0001 }
 949:
            var23 = _closure1_slot1;
            var24 = _closure1_slot2;
            var15 = 24;
            var15 = var24[var15];
            var24 = var23.bind(var11)(var15);
            var23 = var24.parseToAST;
            var15 = {'channelId': null, 'allowLinks': true, 'allowEmojiLinks': true};
            var15['channelId'] = var1;
            var1 = true;
            var19 = var23.bind(var24)(var30, var1, var15);
 1004:
            var15 = _closure1_slot0;
            var23 = _closure1_slot2;
            var1 = 25;
            var1 = var23[var1];
            var15 = var15.bind(var11)(var1);
            var1 = var15.getLocationFromEvent;
            var15 = var1.bind(var15)(var2);
            if(!(var9 == var15)) { _fun0001_ip = 1056; continue _fun0001 }
 1039:
            var23 = var9 == var29;
            var1 = undefined;
            if(var23) { _fun0001_ip = 1053; continue _fun0001 }
 1048:
            var1 = var29.name;
 1053:
            var15 = var1;
 1056:
            var24 = _closure1_slot0;
            var1 = _closure1_slot2;
            var23 = 26;
            var23 = var1[var23];
            var24 = var24.bind(var11)(var23);
            var23 = var24.getEventLocationIconSource;
            var24 = var23.bind(var24)(var2, var29, var28);
            var29 = _closure1_slot12;
            var28 = var29.getUser;
            var23 = var2.creator_id;
            var23 = var28.bind(var29)(var23);
            var28 = _closure1_slot1;
            var29 = 27;
            var1 = var1[var29];
            var32 = var28.bind(var11)(var1);
            var31 = var32.getGuildEventUserCounts;
            var30 = var2.guild_id;
            var28 = var2.id;
            if(!(var9 == var34)) { _fun0001_ip = 1152; continue _fun0001 }
 1146:
            var1 = new Array(0);
            _fun0001_ip = 1163; continue _fun0001;
 1152:
            var33 = new Array(1);
            var33[0] = var34;
            var1 = var33;
 1163:
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
            if(!var7) { _fun0001_ip = 1235; continue _fun0001 }
 1229:
            var27 = var3.acceptLabelDisabledBorderColor;
 1235:
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
            if(var20) { _fun0001_ip = 1294; continue _fun0001 }
 1284:
            var20 = var22.toLocaleString;
            var21 = var20.bind(var22)();
 1294:
            var20 = 'badgeCount';
            var1[var20] = var21;
            var21 = _closure1_slot0;
            var26 = _closure1_slot2;
            var20 = var26[var17];
            var22 = var21.bind(var11)(var20);
            var21 = var22.getAssetUriForEmbed;
            var25 = _closure1_slot1;
            var20 = 28;
            var20 = var26[var20];
            var20 = var25.bind(var11)(var20);
            var21 = var21.bind(var22)(var20);
            var20 = 'badgeIcon';
            var1[var20] = var21;
            var20 = var9 != var24;
            var21 = undefined;
            if(!var20) { _fun0001_ip = 1393; continue _fun0001 }
 1365:
            var22 = _closure1_slot0;
            var20 = _closure1_slot2;
            var20 = var20[var17];
            var22 = var22.bind(var11)(var20);
            var20 = var22.getAssetUriForEmbed;
            var21 = var20.bind(var22)(var24);
 1393:
            var20 = 'channelIcon';
            var1[var20] = var21;
            var21 = var9 != var15;
            var20 = undefined;
            if(!var21) { _fun0001_ip = 1414; continue _fun0001 }
 1411:
            var20 = var15;
 1414:
            var15 = 'channelName';
            var1[var15] = var20;
            var15 = 'content';
            var1[var15] = var19;
            var15 = var9 != var23;
            var19 = undefined;
            if(!var15) { _fun0001_ip = 1485; continue _fun0001 }
 1441:
            var20 = _closure1_slot0;
            var15 = _closure1_slot2;
            var15 = var15[var17];
            var21 = var20.bind(var11)(var15);
            var20 = var21.getAssetUriForEmbed;
            var22 = var23.getAvatarSource;
            var15 = var2.guild_id;
            var15 = var22.bind(var23)(var15);
            var19 = var20.bind(var21)(var15);
 1485:
            var15 = 'creatorAvatar';
            var1[var15] = var19;
            var15 = _closure1_slot13;
            var19 = var15.GUILD_SCHEDULED_EVENT;
            var15 = 'extendedType';
            var1[var15] = var19;
            var15 = 'guildIcon';
            var1[var15] = var18;
            var18 = var9 == var13;
            var15 = undefined;
            if(var18) { _fun0001_ip = 1536; continue _fun0001 }
 1531:
            var15 = var13.name;
 1536:
            var13 = 'guildName';
            var1[var13] = var15;
            var13 = _closure1_slot5;
            var15 = var13.bind(var11)(var10);
            if(!(var9 == var15)) { _fun0001_ip = 1564; continue _fun0001 }
 1558:
            var15 = var3.headerColor;
 1564:
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
            if(!var12) { _fun0001_ip = 1635; continue _fun0001 }
 1622:
            var8 = _closure1_slot5;
            var8 = var8.bind(var11)(var10);
            if(!(var9 == var8)) { _fun0001_ip = 1641; continue _fun0001 }
 1635:
            var8 = var3.headerColor;
 1641:
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
    var _closure1_slot18 = var1;
    var1 = function GuildScheduledEventEmbed(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = arg1;
            var33 = var2.channel;
            var5 = var2.guildEvent;
            var _closure2_slot0 = var5;
            var15 = var2.guild;
            var7 = var2.type;
            var32 = var2.recurrenceId;
            var _closure2_slot1 = var32;
            var4 = undefined;
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 29;
            var2 = var6[var2];
            var8 = var3.bind(var4)(var2);
            var2 = var8.useMessageRendererTheme;
            var18 = var2.bind(var8)();
            var2 = 12;
            var2 = var6[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.useEmbedThemeColors;
            var2 = var2.bind(var3)(var18);
            var6 = var2.colors;
            var12 = null;
            var2 = var12 == var33;
            var26 = undefined;
            if(var2) { _fun0002_ip = 131; continue _fun0002 }
 126:
            var26 = var33.id;
 131:
            _closure2_slot2 = var26;
            var2 = var12 != var15;
            var8 = undefined;
            if(!var2) { _fun0002_ip = 160; continue _fun0002 }
 144:
            var9 = _closure1_slot9;
            var3 = 128;
            var2 = false;
            var8 = var9.bind(var4)(var15, var3, var2);
 160:
            var2 = var12 != var8;
            var20 = undefined;
            if(!var2) { _fun0002_ip = 200; continue _fun0002 }
 169:
            var3 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 13;
            var2 = var9[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.getAssetUriForEmbed;
            var20 = var2.bind(var3)(var8);
 200:
            var13 = _closure1_slot1;
            var10 = _closure1_slot2;
            var2 = 14;
            var2 = var10[var2];
            var2 = var13.bind(var4)(var2);
            var17 = var2.bind(var4)(var5);
            var2 = _closure1_slot7;
            var37 = var2.bind(var4)(var5);
            var30 = var5.entity_type;
            var2 = _closure1_slot14;
            var25 = var2.EXTERNAL;
            var8 = _closure1_slot0;
            var2 = 30;
            var3 = var10[var2];
            var14 = var8.bind(var4)(var3);
            var9 = var14.useStateFromStores;
            var3 = _closure1_slot8;
            var8 = new Array(1);
            var8[0] = var3;
            var3 = function() {
                var4 = _closure1_slot8;
                var3 = var4.isInterestedInEventRecurrence;
                var2 = _closure2_slot0;
                var2 = var2.id;
                var1 = _closure2_slot1;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var36 = var9.bind(var14)(var8, var3);
            var3 = 31;
            var3 = var10[var3];
            var9 = var13.bind(var4)(var3);
            var8 = var5.guild_id;
            var3 = var5.id;
            var23 = var9.bind(var4)(var8, var3, var32);
            var8 = var5.name;
            var3 = var5.description;
            _closure2_slot3 = var3;
            var21 = var5.entity_type;
            var9 = _closure1_slot14;
            var19 = var9.STAGE_INSTANCE;
            var9 = 15;
            var10 = var10[var9];
            var10 = var13.bind(var4)(var10);
            var13 = var10.bind(var4)(var5, var32);
            var14 = var12 == var13;
            var10 = undefined;
            if(var14) { _fun0002_ip = 396; continue _fun0002 }
 380:
            var14 = var13.startTime;
            var13 = var14.toISOString;
            var10 = var13.bind(var14)();
 396:
            _closure2_slot4 = var10;
            var16 = _closure1_slot4;
            var14 = var16.useMemo;
            var13 = new Array(1);
            var13[0] = var10;
            var10 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 16;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.getEventTimeData;
                var1 = _closure2_slot4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var22 = var14.bind(var16)(var10, var13);
            var10 = _closure1_slot0;
            var27 = _closure1_slot2;
            var13 = 17;
            var13 = var27[var13];
            var16 = var10.bind(var4)(var13);
            var14 = var16.getGuildScheduledEventHeaderProps;
            var13 = {};
            var13['eventTimeData'] = var22;
            var19 = var21 === var19;
            var13['isStage'] = var19;
            var13['theme'] = var18;
            var13['event'] = var5;
            var16 = var14.bind(var16)(var13);
            var13 = var16.color;
            var18 = var16.icon;
            var14 = var16.shouldChangeTextColor;
            var16 = var16.text;
            var31 = var12 != var15;
            var22 = {};
            var19 = var6.titleColor;
            var22['titleColor'] = var19;
            var19 = var6.borderColor;
            var22['borderColor'] = var19;
            var19 = var6.backgroundColor;
            var22['backgroundColor'] = var19;
            var22['thumbnailCornerRadius'] = var9;
            var22['embedCanBeTapped'] = var31;
            var38 = 18;
            var9 = var27[var38];
            var9 = var10.bind(var4)(var9);
            var21 = var9.intl;
            var19 = var21.string;
            var9 = var27[var38];
            var9 = var10.bind(var4)(var9);
            var9 = var9.t;
            var9 = var9.DlcqlZ;
            var35 = var19.bind(var21)(var9);
            var19 = 13;
            var9 = var27[var19];
            var28 = var10.bind(var4)(var9);
            var21 = var28.getAssetUriForEmbed;
            var24 = _closure1_slot1;
            var9 = 19;
            var9 = var27[var9];
            var9 = var24.bind(var4)(var9);
            var34 = var21.bind(var28)(var9);
            var9 = var27[var19];
            var21 = var10.bind(var4)(var9);
            var10 = var21.getAssetUriForEmbed;
            var9 = 20;
            var9 = var27[var9];
            var9 = var24.bind(var4)(var9);
            var21 = var10.bind(var21)(var9);
            if(var31) { _fun0002_ip = 792; continue _fun0002 }
 673:
            var28 = _closure1_slot0;
            var9 = _closure1_slot2;
            var10 = 21;
            var10 = var9[var10];
            var27 = var28.bind(var4)(var10);
            var24 = var27.processColorOrThrow;
            var29 = _closure1_slot1;
            var10 = 22;
            var10 = var9[var10];
            var10 = var29.bind(var4)(var10);
            var10 = var10.unsafe_rawColors;
            var10 = var10.GREEN_360;
            var29 = var24.bind(var27)(var10);
            var10 = var9[var38];
            var10 = var28.bind(var4)(var10);
            var27 = var10.intl;
            var10 = var27.string;
            var9 = var9[var38];
            var9 = var28.bind(var4)(var9);
            var9 = var9.t;
            var9 = var9.XpeFYm;
            var24 = var10.bind(var27)(var9);
            var28 = var6.acceptLabelGreenColor;
            var10 = false;
            var27 = undefined;
            var9 = undefined;
            _fun0002_ip = 1031; continue _fun0002;
 792:
            if(var37) { _fun0002_ip = 896; continue _fun0002 }
 795:
            if(var36) { _fun0002_ip = 827; continue _fun0002 }
 798:
            var29 = var6.acceptLabelActiveBackgroundColor;
            var28 = var6.acceptLabelGreenColor;
            var10 = var36;
            var24 = var35;
            var27 = var34;
            var9 = var21;
            _fun0002_ip = 1031; continue _fun0002;
 827:
            var29 = var6.backgroundColor;
            var37 = _closure1_slot0;
            var42 = _closure1_slot2;
            var34 = var42[var19];
            var40 = var37.bind(var4)(var34);
            var37 = var40.getAssetUriForEmbed;
            var41 = _closure1_slot1;
            var34 = 23;
            var34 = var42[var34];
            var34 = var41.bind(var4)(var34);
            var27 = var37.bind(var40)(var34);
            var28 = var6.acceptLabelDisabledTextColor;
            var10 = var36;
            var24 = var35;
            var9 = var21;
            _fun0002_ip = 1031; continue _fun0002;
 896:
            var35 = var6.acceptLabelActiveBackgroundColor;
            if(!(var30 !== var25)) { _fun0002_ip = 960; continue _fun0002 }
 906:
            var36 = _closure1_slot0;
            var25 = _closure1_slot2;
            var30 = var25[var38];
            var30 = var36.bind(var4)(var30);
            var34 = var30.intl;
            var30 = var34.string;
            var25 = var25[var38];
            var25 = var36.bind(var4)(var25);
            var25 = var25.t;
            var25 = var25.IaYdtb;
            var25 = var30.bind(var34)(var25);
            _fun0002_ip = 1012; continue _fun0002;
 960:
            var37 = _closure1_slot0;
            var30 = _closure1_slot2;
            var34 = var30[var38];
            var34 = var37.bind(var4)(var34);
            var36 = var34.intl;
            var34 = var36.string;
            var30 = var30[var38];
            var30 = var37.bind(var4)(var30);
            var30 = var30.t;
            var30 = var30.GoCQxc;
            var25 = var34.bind(var36)(var30);
 1012:
            var28 = var6.acceptLabelGreenColor;
            var10 = false;
            var24 = var25;
            var29 = var35;
            var27 = undefined;
            var9 = var21;
 1031:
            if(var17) { _fun0002_ip = 1036; continue _fun0002 }
 1034:
            var9 = undefined;
 1036:
            var25 = _closure1_slot4;
            var21 = var25.useMemo;
            var17 = new Array(2);
            var17[0] = var26;
            var17[1] = var3;
            var3 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = _closure2_slot3;
                    var1 = null;
                    var3 = var1 != var3;
                    var5 = undefined;
                    var1 = undefined;
                    if(!var3) { _fun0003_ip = 86; continue _fun0003 }
 20:
                    var4 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var3 = 24;
                    var3 = var6[var3];
                    var6 = var4.bind(var5)(var3);
                    var5 = var6.parseToAST;
                    var4 = _closure2_slot3;
                    var3 = {'channelId': null, 'allowLinks': true, 'allowEmojiLinks': true};
                    var2 = _closure2_slot2;
                    var3['channelId'] = var2;
                    var2 = true;
                    var1 = var5.bind(var6)(var4, var2, var3);
 86:
                    return var1;
                }
            };
            var21 = var21.bind(var25)(var3, var17);
            var17 = _closure1_slot0;
            var25 = _closure1_slot2;
            var3 = 25;
            var3 = var25[var3];
            var17 = var17.bind(var4)(var3);
            var3 = var17.getLocationFromEvent;
            var17 = var3.bind(var17)(var5);
            if(!(var12 == var17)) { _fun0002_ip = 1120; continue _fun0002 }
 1103:
            var25 = var12 == var33;
            var3 = undefined;
            if(var25) { _fun0002_ip = 1117; continue _fun0002 }
 1112:
            var3 = var33.name;
 1117:
            var17 = var3;
 1120:
            var3 = _closure1_slot0;
            var30 = _closure1_slot2;
            var25 = 26;
            var25 = var30[var25];
            var26 = var3.bind(var4)(var25);
            var25 = var26.getEventLocationIconSource;
            var26 = var25.bind(var26)(var5, var33, var31);
            var2 = var30[var2];
            var31 = var3.bind(var4)(var2);
            var25 = var31.useStateFromStores;
            var2 = _closure1_slot12;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var3 = _closure1_slot12;
                var2 = var3.getUser;
                var1 = _closure2_slot0;
                var1 = var1.creator_id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var25 = var25.bind(var31)(var3, var2);
            var31 = _closure1_slot4;
            var3 = var31.useEffect;
            var33 = var5.guild_id;
            var2 = new Array(3);
            var2[0] = var33;
            var33 = var5.id;
            var2[1] = var33;
            var2[2] = var32;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var4 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var5 = 27;
                    var2 = var1[var5];
                    var1 = undefined;
                    var9 = var4.bind(var1)(var2);
                    var8 = var9.getGuildEventUserCounts;
                    var4 = _closure2_slot0;
                    var7 = var4.guild_id;
                    var6 = var4.id;
                    var10 = _closure2_slot1;
                    var4 = null;
                    if(!(var4 == var10)) { _fun0004_ip = 64; continue _fun0004 }
 58:
                    var4 = new Array(0);
                    _fun0004_ip = 79; continue _fun0004;
 64:
                    var11 = _closure2_slot1;
                    var10 = new Array(1);
                    var10[0] = var11;
                    var4 = var10;
 79:
                    var4 = var8.bind(var9)(var7, var6, var4);
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var3 = var3[var5];
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.getGuildEventsForCurrentUser;
                    var2 = _closure2_slot0;
                    var2 = var2.guild_id;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var1 = var3.bind(var31)(var1, var2);
            var3 = _closure1_slot16;
            var2 = _closure1_slot1;
            var1 = 32;
            var1 = var30[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var45 = var1;
            var44 = var22;
            var22 = copyDataProperties(var45, var44);
            var22 = 'acceptLabelBackgroundColor';
            var1[var22] = var29;
            var29 = undefined;
            if(!var10) { _fun0002_ip = 1288; continue _fun0002 }
 1282:
            var29 = var6.acceptLabelDisabledBorderColor;
 1288:
            var22 = 'acceptLabelBorderColor';
            var1[var22] = var29;
            var22 = 'acceptLabelColor';
            var1[var22] = var28;
            var22 = 'acceptLabelIcon';
            var1[var22] = var27;
            var22 = 'acceptLabelText';
            var1[var22] = var24;
            var22 = var23.toLocaleString;
            var23 = var22.bind(var23)();
            var22 = 'badgeCount';
            var1[var22] = var23;
            var23 = _closure1_slot0;
            var28 = _closure1_slot2;
            var22 = var28[var19];
            var24 = var23.bind(var4)(var22);
            var23 = var24.getAssetUriForEmbed;
            var27 = _closure1_slot1;
            var22 = 28;
            var22 = var28[var22];
            var22 = var27.bind(var4)(var22);
            var23 = var23.bind(var24)(var22);
            var22 = 'badgeIcon';
            var1[var22] = var23;
            var22 = var12 != var26;
            var23 = undefined;
            if(!var22) { _fun0002_ip = 1437; continue _fun0002 }
 1409:
            var24 = _closure1_slot0;
            var22 = _closure1_slot2;
            var22 = var22[var19];
            var24 = var24.bind(var4)(var22);
            var22 = var24.getAssetUriForEmbed;
            var23 = var22.bind(var24)(var26);
 1437:
            var22 = 'channelIcon';
            var1[var22] = var23;
            var23 = var12 != var17;
            var22 = undefined;
            if(!var23) { _fun0002_ip = 1458; continue _fun0002 }
 1455:
            var22 = var17;
 1458:
            var17 = 'channelName';
            var1[var17] = var22;
            var17 = 'content';
            var1[var17] = var21;
            var17 = var12 != var25;
            var21 = undefined;
            if(!var17) { _fun0002_ip = 1529; continue _fun0002 }
 1485:
            var22 = _closure1_slot0;
            var17 = _closure1_slot2;
            var17 = var17[var19];
            var23 = var22.bind(var4)(var17);
            var22 = var23.getAssetUriForEmbed;
            var24 = var25.getAvatarSource;
            var17 = var5.guild_id;
            var17 = var24.bind(var25)(var17);
            var21 = var22.bind(var23)(var17);
 1529:
            var17 = 'creatorAvatar';
            var1[var17] = var21;
            var17 = _closure1_slot13;
            var21 = var17.GUILD_SCHEDULED_EVENT;
            var17 = 'extendedType';
            var1[var17] = var21;
            var17 = 'guildIcon';
            var1[var17] = var20;
            var20 = var12 == var15;
            var17 = undefined;
            if(var20) { _fun0002_ip = 1580; continue _fun0002 }
 1575:
            var17 = var15.name;
 1580:
            var15 = 'guildName';
            var1[var15] = var17;
            var15 = _closure1_slot5;
            var17 = var15.bind(var4)(var13);
            if(!(var12 == var17)) { _fun0002_ip = 1608; continue _fun0002 }
 1602:
            var17 = var6.headerColor;
 1608:
            var15 = 'headerColor';
            var1[var15] = var17;
            var17 = _closure1_slot0;
            var15 = _closure1_slot2;
            var15 = var15[var19];
            var17 = var17.bind(var4)(var15);
            var15 = var17.getAssetUriForEmbed;
            var17 = var15.bind(var17)(var18);
            var15 = 'headerIcon';
            var1[var15] = var17;
            var15 = 'headerText';
            var1[var15] = var16;
            if(!var14) { _fun0002_ip = 1679; continue _fun0002 }
 1666:
            var11 = _closure1_slot5;
            var11 = var11.bind(var4)(var13);
            if(!(var12 == var11)) { _fun0002_ip = 1685; continue _fun0002 }
 1679:
            var11 = var6.headerColor;
 1685:
            var6 = 'headerTextColor';
            var1[var6] = var11;
            var6 = 'isRsvped';
            var1[var6] = var10;
            var6 = 'secondaryActionIcon';
            var1[var6] = var9;
            var6 = 'titleText';
            var1[var6] = var8;
            var6 = 'type';
            var1[var6] = var7;
            var6 = var5.id;
            var5 = 'guildEventId';
            var1[var5] = var6;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot19 = var1;
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
    var8 = var6[var4];
    var4 = native4;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.processColor;
    var _closure1_slot5 = var4;
    var4 = 3;
    var8 = var6[var4];
    var8 = var5.bind(var1)(var8);
    var9 = var8.isGuildEventEnded;
    var _closure1_slot6 = var9;
    var8 = var8.isGuildScheduledEventActive;
    var _closure1_slot7 = var8;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.getGuildIconSource;
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot12 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.CodedLinkExtendedType;
    var _closure1_slot13 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.GuildScheduledEventEntityTypes;
    var _closure1_slot14 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.InviteTypes;
    var _closure1_slot15 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot16 = var4;
    var4 = {};
    var _closure1_slot17 = var4;
    var4 = 35;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/row_data/embeds/coded_links/GuildScheduledEventEmbed.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function createGuildScheduledEventInviteEmbed(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var7 = arg1;
            var5 = _closure1_slot10;
            var4 = var5.getChannel;
            var8 = var7.channel;
            var2 = null;
            var9 = var2 == var8;
            var6 = undefined;
            var1 = undefined;
            if(var9) { _fun0005_ip = 38; continue _fun0005 }
 33:
            var1 = var8.id;
 38:
            var11 = var4.bind(var5)(var1);
            var1 = var2 == var11;
            var5 = undefined;
            if(var1) { _fun0005_ip = 57; continue _fun0005 }
 52:
            var5 = var11.guild_id;
 57:
            var8 = _closure1_slot8;
            var4 = var8.getGuildScheduledEvent;
            var9 = var7.guild_scheduled_event;
            var10 = var2 == var9;
            var1 = undefined;
            if(var10) { _fun0005_ip = 87; continue _fun0005 }
 82:
            var1 = var9.id;
 87:
            var9 = var4.bind(var8)(var1);
            var8 = _closure1_slot8;
            var4 = var8.getUserCount;
            var10 = var7.guild_scheduled_event;
            var12 = var2 == var10;
            var1 = undefined;
            if(var12) { _fun0005_ip = 122; continue _fun0005 }
 117:
            var1 = var10.id;
 122:
            var8 = var4.bind(var8)(var1, var2);
            if(!(var2 != var9)) { _fun0005_ip = 317; continue _fun0005 }
 135:
            if(!(var2 != var5)) { _fun0005_ip = 181; continue _fun0005 }
 139:
            var4 = _closure1_slot1;
            var10 = _closure1_slot2;
            var1 = 27;
            var1 = var10[var1];
            var12 = var4.bind(var6)(var1);
            var10 = var12.getGuildEventUserCounts;
            var4 = var9.id;
            var1 = new Array(0);
            var1 = var10.bind(var12)(var5, var4, var1);
 181:
            var4 = _closure1_slot18;
            var1 = {};
            var1['channel'] = var11;
            var1['guildEvent'] = var9;
            var1['userCount'] = var8;
            var8 = var7.guild;
            if(!(var2 == var8)) { _fun0005_ip = 240; continue _fun0005 }
 210:
            var10 = _closure1_slot11;
            var9 = var10.getGuild;
            var12 = var2 == var11;
            var8 = undefined;
            if(var12) { _fun0005_ip = 233; continue _fun0005 }
 228:
            var8 = var11.guild_id;
 233:
            var8 = var9.bind(var10)(var8);
            _fun0005_ip = 276; continue _fun0005;
 240:
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var9 = 34;
            var9 = var11[var9];
            var11 = var10.bind(var6)(var9);
            var10 = var11.fromInviteGuild;
            var9 = var7.guild;
            var8 = var10.bind(var11)(var9);
 276:
            var1['guild'] = var8;
            var8 = arg2;
            var1['theme'] = var8;
            var7 = var7.type;
            if(!(var2 == var7)) { _fun0005_ip = 306; continue _fun0005 }
 296:
            var8 = _closure1_slot15;
            var7 = var8.GUILD;
 306:
            var1['type'] = var7;
            var1 = var4.bind(var6)(var1);
            _fun0005_ip = 359; continue _fun0005;
 317:
            var4 = var2 != var5;
            var1 = null;
            if(!var4) { _fun0005_ip = 359; continue _fun0005 }
 326:
            var4 = _closure1_slot1;
            var7 = _closure1_slot2;
            var3 = 33;
            var3 = var7[var3];
            var4 = var4.bind(var6)(var3);
            var3 = var4.fetchGuildEventsForGuild;
            var3 = var3.bind(var4)(var5);
            var1 = null;
 359:
            return var1;
        }
    };
    var3['createGuildScheduledEventInviteEmbed'] = var4;
    var4 = function GuildScheduledEventInviteEmbed(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var2 = arg1;
            var6 = var2.invite;
            var _closure2_slot0 = var6;
            var5 = undefined;
            var _closure2_slot3 = var5;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var4 = 30;
            var8 = var2[var4];
            var11 = var3.bind(var5)(var8);
            var10 = var11.useStateFromStores;
            var8 = _closure1_slot10;
            var9 = new Array(1);
            var9[0] = var8;
            var8 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var3 = _closure1_slot10;
                    var2 = var3.getChannel;
                    var1 = _closure2_slot0;
                    var4 = var1.channel;
                    var1 = null;
                    var5 = var1 == var4;
                    var1 = undefined;
                    if(var5) { _fun0007_ip = 40; continue _fun0007 }
 35:
                    var1 = var4.id;
 40:
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var11 = var10.bind(var11)(var9, var8);
            var2 = var2[var4];
            var9 = var3.bind(var5)(var2);
            var8 = var9.useStateFromStores;
            var2 = _closure1_slot8;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var3 = _closure1_slot8;
                    var2 = var3.getGuildScheduledEvent;
                    var1 = _closure2_slot0;
                    var4 = var1.guild_scheduled_event;
                    var1 = null;
                    var5 = var1 == var4;
                    var1 = undefined;
                    if(var5) { _fun0008_ip = 42; continue _fun0008 }
 37:
                    var1 = var4.id;
 42:
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var10 = var8.bind(var9)(var3, var2);
            var _closure2_slot1 = var10;
            var9 = _closure1_slot4;
            var8 = var9.useMemo;
            var2 = var6.guild;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var1 = _closure2_slot0;
                    var3 = var1.guild;
                    var1 = null;
                    var3 = var1 != var3;
                    var5 = undefined;
                    var1 = undefined;
                    if(!var3) { _fun0009_ip = 68; continue _fun0009 }
 25:
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 34;
                    var3 = var6[var3];
                    var4 = var4.bind(var5)(var3);
                    var3 = var4.fromInviteGuild;
                    var2 = _closure2_slot0;
                    var2 = var2.guild;
                    var1 = var3.bind(var4)(var2);
 68:
                    return var1;
                }
            };
            var2 = var8.bind(var9)(var2, var3);
            var _closure2_slot2 = var2;
            var8 = null;
            var2 = var8 == var11;
            var12 = undefined;
            if(var2) { _fun0006_ip = 166; continue _fun0006 }
 161:
            var12 = var11.guild_id;
 166:
            _closure2_slot3 = var12;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var4];
            var9 = var3.bind(var5)(var2);
            var4 = var9.useStateFromStores;
            var2 = _closure1_slot11;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    var3 = _closure2_slot2;
                    var1 = null;
                    if(!(var1 == var3)) { _fun0010_ip = 36; continue _fun0010 }
 13:
                    var4 = _closure1_slot11;
                    var3 = var4.getGuild;
                    var1 = _closure2_slot3;
                    var1 = var3.bind(var4)(var1);
                    _fun0010_ip = 40; continue _fun0010;
 36:
                    var1 = _closure2_slot2;
 40:
                    return var1;
                }
            };
            var9 = var4.bind(var9)(var3, var2);
            var4 = _closure1_slot4;
            var3 = var4.useEffect;
            var2 = new Array(2);
            var2[0] = var10;
            var2[1] = var12;
            var1 = function() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                    var2 = _closure2_slot3;
                    var3 = null;
                    if(!(var3 != var2)) { _fun0011_ip = 76; continue _fun0011 }
 13:
                    var2 = _closure2_slot1;
                    if(!(var3 != var2)) { _fun0011_ip = 80; continue _fun0011 }
 21:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 27;
                    var3 = var3[var2];
                    var2 = undefined;
                    var6 = var4.bind(var2)(var3);
                    var5 = var6.getGuildEventUserCounts;
                    var4 = _closure2_slot3;
                    var2 = _closure2_slot1;
                    var3 = var2.id;
                    var2 = new Array(0);
                    var2 = var5.bind(var6)(var4, var3, var2);
 76:
                    var2 = undefined;
                    return var2;
 80:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 33;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.fetchGuildEventsForGuild;
                    var1 = _closure2_slot3;
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var1, var2);
            var2 = var8 != var10;
            var1 = null;
            if(!var2) { _fun0006_ip = 308; continue _fun0006 }
 256:
            var4 = _closure1_slot16;
            var3 = _closure1_slot19;
            var2 = {};
            var2['channel'] = var11;
            var2['guildEvent'] = var10;
            var2['guild'] = var9;
            var6 = var6.type;
            if(!(var8 == var6)) { _fun0006_ip = 298; continue _fun0006 }
 288:
            var7 = _closure1_slot15;
            var6 = var7.GUILD;
 298:
            var2['type'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 308:
            return var1;
        }
    };
    var3['GuildScheduledEventInviteEmbed'] = var4;
    var4 = function createGuildScheduledEventLinkEmbed(arg1, arg2) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
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
            var6 = _closure1_slot8;
            var1 = var6.getGuildScheduledEvent;
            var10 = var1.bind(var6)(var8);
            var1 = null;
            if(!(var1 == var5)) { _fun0012_ip = 113; continue _fun0012 }
 82:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var6 = 16;
            var6 = var9[var6];
            var8 = var8.bind(var7)(var6);
            var6 = var8.getNextRecurrenceIdInEvent;
            var5 = var6.bind(var8)(var10);
 113:
            var6 = var1 != var5;
            var8 = undefined;
            if(!var6) { _fun0012_ip = 125; continue _fun0012 }
 122:
            var8 = var5;
 125:
            if(!(var1 != var10)) { _fun0012_ip = 326; continue _fun0012 }
 132:
            var5 = _closure1_slot6;
            var5 = var5.bind(var7)(var10);
            if(var5) { _fun0012_ip = 326; continue _fun0012 }
 147:
            var6 = _closure1_slot1;
            var9 = _closure1_slot2;
            var5 = 27;
            var5 = var9[var5];
            var11 = var6.bind(var7)(var5);
            var9 = var11.getGuildEventUserCounts;
            var6 = var10.id;
            if(!(var1 == var8)) { _fun0012_ip = 188; continue _fun0012 }
 182:
            var5 = new Array(0);
            _fun0012_ip = 199; continue _fun0012;
 188:
            var12 = new Array(1);
            var12[0] = var8;
            var5 = var12;
 199:
            var5 = var9.bind(var11)(var4, var6, var5);
            var9 = _closure1_slot8;
            var6 = var9.getUserCount;
            var5 = var10.id;
            var9 = var6.bind(var9)(var5, var8);
            var6 = _closure1_slot18;
            var5 = {};
            var13 = _closure1_slot10;
            var12 = var13.getChannel;
            var14 = var1 == var10;
            var11 = undefined;
            if(var14) { _fun0012_ip = 256; continue _fun0012 }
 251:
            var11 = var10.channel_id;
 256:
            var11 = var12.bind(var13)(var11);
            var5['channel'] = var11;
            var5['guildEvent'] = var10;
            var5['userCount'] = var9;
            var10 = _closure1_slot11;
            var9 = var10.getGuild;
            var9 = var9.bind(var10)(var4);
            var5['guild'] = var9;
            var9 = arg2;
            var5['theme'] = var9;
            var9 = _closure1_slot15;
            var9 = var9.GUILD;
            var5['type'] = var9;
            var5['recurrenceId'] = var8;
            var5 = var6.bind(var7)(var5);
            return var5;
 326:
            var5 = _closure1_slot17;
            var5 = var5[var4];
            if(var5) { _fun0012_ip = 409; continue _fun0012 }
 337:
            var6 = _closure1_slot1;
            var8 = _closure1_slot2;
            var5 = 33;
            var5 = var8[var5];
            var6 = var6.bind(var7)(var5);
            var5 = var6.fetchGuildEventsForGuild;
            var7 = var5.bind(var6)(var4);
            var6 = var7.then;
            var5 = function() {
                var2 = _closure1_slot17;
                var1 = _closure2_slot0;
                var1 = delete var2[var1];
                return var1;
            };
            var6 = var6.bind(var7)(var5);
            var5 = var6.catch;
            var3 = function() {
                var2 = _closure1_slot17;
                var1 = _closure2_slot0;
                var1 = delete var2[var1];
                return var1;
            };
            var3 = var5.bind(var6)(var3);
            var3 = _closure1_slot17;
            var2 = true;
            var3[var4] = var2;
 409:
            return var1;
        }
    };
    var3['createGuildScheduledEventLinkEmbed'] = var4;
    var2 = function GuildScheduledEventLinkEmbed(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
            var1 = arg1;
            var4 = var1.code;
            var5 = undefined;
            var _closure2_slot3 = var5;
            var3 = var4.split;
            var1 = '-';
            var4 = var3.bind(var4)(var1);
            var3 = _closure1_slot3;
            var1 = 3;
            var3 = var3.bind(var5)(var4, var1);
            var1 = 0;
            var12 = var3[var1];
            var _closure2_slot0 = var12;
            var1 = 1;
            var1 = var3[var1];
            var _closure2_slot1 = var1;
            var1 = 2;
            var3 = var3[var1];
            var4 = _closure1_slot0;
            var1 = _closure1_slot2;
            var8 = 30;
            var1 = var1[var8];
            var9 = var4.bind(var5)(var1);
            var6 = var9.useStateFromStores;
            var1 = _closure1_slot8;
            var4 = new Array(1);
            var4[0] = var1;
            var1 = function() {
                var3 = _closure1_slot8;
                var2 = var3.getGuildScheduledEvent;
                var1 = _closure2_slot1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var9 = var6.bind(var9)(var4, var1);
            var _closure2_slot2 = var9;
            var1 = null;
            if(!(var1 == var3)) { _fun0013_ip = 163; continue _fun0013 }
 132:
            var6 = _closure1_slot0;
            var10 = _closure1_slot2;
            var4 = 16;
            var4 = var10[var4];
            var6 = var6.bind(var5)(var4);
            var4 = var6.getNextRecurrenceIdInEvent;
            var3 = var4.bind(var6)(var9);
 163:
            var4 = var1 != var3;
            var6 = undefined;
            if(!var4) { _fun0013_ip = 175; continue _fun0013 }
 172:
            var6 = var3;
 175:
            _closure2_slot3 = var6;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var10 = var3[var8];
            var14 = var4.bind(var5)(var10);
            var13 = var14.useStateFromStores;
            var10 = _closure1_slot10;
            var11 = new Array(1);
            var11[0] = var10;
            var10 = function() {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                    var3 = _closure1_slot10;
                    var2 = var3.getChannel;
                    var5 = _closure2_slot2;
                    var1 = null;
                    var5 = var1 == var5;
                    var1 = undefined;
                    if(var5) { _fun0014_ip = 39; continue _fun0014 }
 30:
                    var4 = _closure2_slot2;
                    var1 = var4.channel_id;
 39:
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var10 = var13.bind(var14)(var11, var10);
            var3 = var3[var8];
            var11 = var4.bind(var5)(var3);
            var8 = var11.useStateFromStores;
            var3 = _closure1_slot11;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                var3 = _closure1_slot11;
                var2 = var3.getGuild;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var8 = var8.bind(var11)(var4, var3);
            var11 = _closure1_slot4;
            var4 = var11.useEffect;
            var3 = new Array(3);
            var3[0] = var9;
            var3[1] = var12;
            var3[2] = var6;
            var2 = function() {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                    var1 = _closure2_slot2;
                    var7 = null;
                    var1 = var7 != var1;
                    if(var1) { _fun0015_ip = 33; continue _fun0015 }
 18:
                    var4 = _closure1_slot17;
                    var3 = _closure2_slot0;
                    var1 = var4[var3];
 33:
                    if(var1) { _fun0015_ip = 117; continue _fun0015 }
 36:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var3 = 33;
                    var4 = var4[var3];
                    var3 = undefined;
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.fetchGuildEventsForGuild;
                    var3 = _closure2_slot0;
                    var8 = var4.bind(var5)(var3);
                    var5 = var8.then;
                    var4 = function() {
                        var2 = _closure1_slot17;
                        var1 = _closure2_slot0;
                        var1 = delete var2[var1];
                        return var1;
                    };
                    var5 = var5.bind(var8)(var4);
                    var4 = var5.catch;
                    var2 = function() {
                        var2 = _closure1_slot17;
                        var1 = _closure2_slot0;
                        var1 = delete var2[var1];
                        return var1;
                    };
                    var2 = var4.bind(var5)(var2);
                    var2 = _closure1_slot17;
                    var1 = true;
                    var2[var3] = var1;
 117:
                    var1 = _closure2_slot2;
                    if(!(var7 != var1)) { _fun0015_ip = 205; continue _fun0015 }
 125:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 27;
                    var2 = var2[var1];
                    var1 = undefined;
                    var5 = var3.bind(var1)(var2);
                    var4 = var5.getGuildEventUserCounts;
                    var3 = _closure2_slot0;
                    var1 = _closure2_slot2;
                    var2 = var1.id;
                    var1 = _closure2_slot3;
                    if(!(var7 == var1)) { _fun0015_ip = 183; continue _fun0015 }
 177:
                    var1 = new Array(0);
                    _fun0015_ip = 198; continue _fun0015;
 183:
                    var7 = _closure2_slot3;
                    var6 = new Array(1);
                    var6[0] = var7;
                    var1 = var6;
 198:
                    var1 = var4.bind(var5)(var3, var2, var1);
 205:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var4.bind(var11)(var2, var3);
            var2 = var1 != var9;
            var1 = null;
            if(!var2) { _fun0013_ip = 354; continue _fun0013 }
 306:
            var4 = _closure1_slot16;
            var3 = _closure1_slot19;
            var2 = {};
            var2['channel'] = var10;
            var2['guildEvent'] = var9;
            var2['guild'] = var8;
            var7 = _closure1_slot15;
            var7 = var7.GUILD;
            var2['type'] = var7;
            var2['recurrenceId'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 354:
            return var1;
        }
    };
    var3['GuildScheduledEventLinkEmbed'] = var2;
    return var1;
})();