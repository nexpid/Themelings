// app/modules/user_profile/native/UserProfileAboutMeCard.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var8 = native4;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var8;
    var _closure1_slot3 = var6;
    var1 = function Heading(arg1) {
        var1 = arg1;
        var5 = var1.children;
        var3 = var1.themeType;
        var2 = _closure1_slot17;
        var4 = undefined;
        var2 = var2.bind(var4)(var3);
        var6 = var2.headingVariant;
        var7 = var2.headingSpacing;
        var3 = _closure1_slot12;
        var2 = _closure1_slot0;
        var8 = _closure1_slot3;
        var1 = 10;
        var1 = var8[var1];
        var1 = var2.bind(var4)(var1);
        var2 = var1.Text;
        var1 = {'accessibilityRole': 'header', 'variant': null, 'color': 'header-secondary'};
        var1['variant'] = var6;
        var6 = {};
        var6['marginBottom'] = var7;
        var1['style'] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot19 = var1;
    var1 = function TextWithIcon(arg1) {
        var1 = arg1;
        var7 = var1.icon;
        var9 = var1.children;
        var2 = var1.themeType;
        var5 = var1.accessibilityLabel;
        var1 = _closure1_slot18;
        var4 = undefined;
        var8 = var1.bind(var4)();
        var1 = _closure1_slot17;
        var1 = var1.bind(var4)(var2);
        var10 = var1.textVariant;
        var12 = var1.columnGap;
        var3 = _closure1_slot13;
        var2 = _closure1_slot5;
        var1 = {};
        var11 = var8.textWithIcon;
        var8 = new Array(2);
        var8[0] = var11;
        var11 = {};
        var11['columnGap'] = var12;
        var8[1] = var11;
        var1['style'] = var8;
        var8 = true;
        var1['accessible'] = var8;
        var1['accessibilityLabel'] = var5;
        var5 = new Array(2);
        var5[0] = var7;
        var8 = _closure1_slot12;
        var7 = _closure1_slot0;
        var11 = _closure1_slot3;
        var6 = 10;
        var6 = var11[var6];
        var6 = var7.bind(var4)(var6);
        var7 = var6.Text;
        var6 = {};
        var6['variant'] = var10;
        var10 = 'text-normal';
        var6['color'] = var10;
        var6['children'] = var9;
        var6 = var8.bind(var4)(var7, var6);
        var5[1] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot20 = var1;
    var1 = function Bio(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var12 = var1.userId;
            var4 = var1.displayProfile;
            var2 = var1.pendingBio;
            var14 = var1.themeType;
            var10 = var1.lineClamp;
            var1 = _closure1_slot17;
            var5 = undefined;
            var1 = var1.bind(var5)(var14);
            var11 = var1.textVariant;
            var3 = null;
            var1 = var3 == var4;
            var13 = undefined;
            if(var1) { _fun0001_ip = 90; continue _fun0001 }
 63:
            var1 = var4.getPreviewBio;
            var1 = var1.bind(var4)(var2);
            var2 = var3 == var1;
            var13 = undefined;
            if(var2) { _fun0001_ip = 90; continue _fun0001 }
 85:
            var13 = var1.value;
 90:
            var2 = var3 == var13;
            var1 = null;
            if(var2) { _fun0001_ip = 276; continue _fun0001 }
 102:
            var2 = '';
            var1 = null;
            if(!(var2 !== var13)) { _fun0001_ip = 276; continue _fun0001 }
 115:
            var4 = _closure1_slot13;
            var3 = _closure1_slot5;
            var2 = {};
            var9 = _closure1_slot12;
            var8 = _closure1_slot19;
            var6 = {};
            var6['themeType'] = var14;
            var18 = _closure1_slot0;
            var14 = _closure1_slot3;
            var15 = 11;
            var16 = var14[var15];
            var16 = var18.bind(var5)(var16);
            var17 = var16.intl;
            var16 = var17.string;
            var15 = var14[var15];
            var15 = var18.bind(var5)(var15);
            var15 = var15.t;
            var15 = var15.jGoPJS;
            var15 = var16.bind(var17)(var15);
            var6['children'] = var15;
            var8 = var9.bind(var5)(var8, var6);
            var6 = new Array(2);
            var6[0] = var8;
            var9 = _closure1_slot12;
            var8 = _closure1_slot1;
            var7 = 12;
            var7 = var14[var7];
            var8 = var8.bind(var5)(var7);
            var7 = {};
            var7['bio'] = var13;
            var7['userId'] = var12;
            var7['textVariant'] = var11;
            var7['lineClamp'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 276:
            return var1;
        }
    };
    var _closure1_slot21 = var1;
    var1 = function MemberJoinDates(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = arg1;
            var13 = var2.userId;
            var _closure2_slot0 = var13;
            var3 = var2.guildId;
            var _closure2_slot1 = var3;
            var22 = var2.themeType;
            var2 = _closure1_slot18;
            var4 = undefined;
            var9 = var2.bind(var4)();
            var2 = _closure1_slot17;
            var2 = var2.bind(var4)(var22);
            var17 = var2.textVariant;
            var12 = var2.columnGap;
            var2 = _closure1_slot0;
            var3 = _closure1_slot3;
            var6 = 13;
            var5 = var3[var6];
            var10 = var2.bind(var4)(var5);
            var8 = var10.useStateFromStores;
            var5 = _closure1_slot6;
            var7 = new Array(1);
            var7[0] = var5;
            var5 = function() {
                var1 = _closure1_slot6;
                var1 = var1.locale;
                return var1;
            };
            var5 = var8.bind(var10)(var7, var5);
            var7 = var3[var6];
            var11 = var2.bind(var4)(var7);
            var10 = var11.useStateFromStores;
            var7 = _closure1_slot8;
            var8 = new Array(1);
            var8[0] = var7;
            var7 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = _closure2_slot1;
                    var1 = null;
                    var3 = var1 != var3;
                    if(!var3) { _fun0003_ip = 37; continue _fun0003 }
 16:
                    var4 = _closure1_slot8;
                    var3 = var4.getGuild;
                    var2 = _closure2_slot1;
                    var1 = var3.bind(var4)(var2);
 37:
                    return var1;
                }
            };
            var23 = var10.bind(var11)(var8, var7);
            var6 = var3[var6];
            var8 = var2.bind(var4)(var6);
            var7 = var8.useStateFromStores;
            var10 = _closure1_slot7;
            var6 = new Array(1);
            var6[0] = var10;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var3 = _closure2_slot1;
                    var1 = null;
                    var3 = var1 != var3;
                    if(!var3) { _fun0004_ip = 43; continue _fun0004 }
 16:
                    var5 = _closure1_slot7;
                    var4 = var5.getMember;
                    var3 = _closure2_slot1;
                    var2 = _closure2_slot0;
                    var1 = var4.bind(var5)(var3, var2);
 43:
                    return var1;
                }
            };
            var6 = var7.bind(var8)(var6, var1);
            var1 = 14;
            var7 = var3[var1];
            var10 = var2.bind(var4)(var7);
            var8 = var10.getCreatedAtDate;
            var11 = _closure1_slot1;
            var7 = 15;
            var7 = var3[var7];
            var11 = var11.bind(var4)(var7);
            var7 = var11.extractTimestamp;
            var7 = var7.bind(var11)(var13);
            var13 = var8.bind(var10)(var7, var5);
            var1 = var3[var1];
            var3 = var2.bind(var4)(var1);
            var2 = var3.getCreatedAtDate;
            var11 = null;
            var7 = var11 == var6;
            var1 = undefined;
            if(var7) { _fun0002_ip = 268; continue _fun0002 }
 262:
            var1 = var6.joinedAt;
 268:
            var18 = var2.bind(var3)(var1, var5);
            var3 = _closure1_slot13;
            var2 = _closure1_slot5;
            var1 = {};
            var7 = _closure1_slot12;
            var6 = _closure1_slot19;
            var5 = {};
            var5['themeType'] = var22;
            var15 = _closure1_slot0;
            var14 = _closure1_slot3;
            var24 = 11;
            var8 = var14[var24];
            var8 = var15.bind(var4)(var8);
            var16 = var8.intl;
            var10 = var16.string;
            var8 = var14[var24];
            var8 = var15.bind(var4)(var8);
            var8 = var8.t;
            var8 = var8.a6XYDw;
            var8 = var10.bind(var16)(var8);
            var5['children'] = var8;
            var6 = var7.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot13;
            var7 = _closure1_slot5;
            var6 = {};
            var10 = var9.memberJoinDates;
            var9 = new Array(2);
            var9[0] = var10;
            var10 = {};
            var10['columnGap'] = var12;
            var9[1] = var10;
            var6['style'] = var9;
            var12 = _closure1_slot12;
            var10 = _closure1_slot20;
            var9 = {};
            var9['themeType'] = var22;
            var20 = _closure1_slot12;
            var16 = 16;
            var16 = var14[var16];
            var16 = var15.bind(var4)(var16);
            var19 = var16.ClydeIcon;
            var16 = {};
            var25 = 'xs';
            var16['size'] = var25;
            var16 = var20.bind(var4)(var19, var16);
            var9['icon'] = var16;
            var16 = var14[var24];
            var16 = var15.bind(var4)(var16);
            var19 = var16.intl;
            var16 = var19.formatToPlainString;
            var14 = var14[var24];
            var14 = var15.bind(var4)(var14);
            var14 = var14.t;
            var15 = var14.9t7w5+;
            var14 = {};
            var14['date'] = var13;
            var14 = var16.bind(var19)(var15, var14);
            var9['accessibilityLabel'] = var14;
            var9['children'] = var13;
            var10 = var12.bind(var4)(var10, var9);
            var9 = new Array(2);
            var9[0] = var10;
            var10 = var11 != var23;
            if(!var10) { _fun0002_ip = 557; continue _fun0002 }
 553:
            var10 = var11 != var18;
 557:
            if(!var10) { _fun0002_ip = 808; continue _fun0002 }
 563:
            var13 = _closure1_slot13;
            var12 = _closure1_slot14;
            var11 = {};
            var16 = _closure1_slot12;
            var20 = _closure1_slot0;
            var19 = _closure1_slot3;
            var14 = 10;
            var14 = var19[var14];
            var14 = var20.bind(var4)(var14);
            var15 = var14.Text;
            var14 = {};
            var14['variant'] = var17;
            var17 = 'text-normal';
            var14['color'] = var17;
            var17 = _closure1_slot9;
            var14['children'] = var17;
            var15 = var16.bind(var4)(var15, var14);
            var14 = new Array(2);
            var14[0] = var15;
            var17 = _closure1_slot12;
            var16 = _closure1_slot20;
            var15 = {};
            var15['themeType'] = var22;
            var25 = _closure1_slot12;
            var22 = _closure1_slot1;
            var26 = 17;
            var21 = var19[var26];
            var22 = var22.bind(var4)(var21);
            var21 = {};
            var21['guild'] = var23;
            var26 = var19[var26];
            var26 = var20.bind(var4)(var26);
            var26 = var26.GuildIconSizes;
            var26 = var26.XXSMALL;
            var21['size'] = var26;
            var21 = var25.bind(var4)(var22, var21);
            var15['icon'] = var21;
            var21 = var19[var24];
            var21 = var20.bind(var4)(var21);
            var22 = var21.intl;
            var21 = var22.formatToPlainString;
            var19 = var19[var24];
            var19 = var20.bind(var4)(var19);
            var19 = var19.t;
            var20 = var19.FdLNDA;
            var19 = {};
            var23 = var23.name;
            var19['guildName'] = var23;
            var19['date'] = var18;
            var19 = var21.bind(var22)(var20, var19);
            var15['accessibilityLabel'] = var19;
            var15['children'] = var18;
            var15 = var17.bind(var4)(var16, var15);
            var14[1] = var15;
            var11['children'] = var14;
            var10 = var13.bind(var4)(var12, var11);
 808:
            var9[1] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot22 = var1;
    var1 = function BotSlashCommands(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var1 = arg1;
            var10 = var1.applicationId;
            var7 = var1.channel;
            var _closure2_slot0 = var7;
            var9 = var1.commandIds;
            var13 = var1.themeType;
            var1 = _closure1_slot18;
            var5 = undefined;
            var15 = var1.bind(var5)();
            var2 = _closure1_slot1;
            var11 = _closure1_slot3;
            var1 = 18;
            var1 = var11[var1];
            var1 = var2.bind(var5)(var1);
            var1 = var1.bind(var5)();
            var1 = var1.analyticsLocations;
            var _closure2_slot1 = var1;
            var3 = _closure1_slot0;
            var2 = 19;
            var2 = var11[var2];
            var3 = var3.bind(var5)(var2);
            var2 = var3.useUserProfileAnalyticsContext;
            var2 = var2.bind(var3)();
            var6 = var2.context;
            var _closure2_slot2 = var6;
            var12 = _closure1_slot4;
            var4 = var12.useMemo;
            var3 = new Array(1);
            var3[0] = var7;
            var2 = function() {
                var1 = {};
                var2 = _closure2_slot0;
                var1['channel'] = var2;
                var2 = 'channel';
                var1['type'] = var2;
                return var1;
            };
            var4 = var4.bind(var12)(var2, var3);
            var3 = _closure1_slot2;
            var2 = 20;
            var2 = var11[var2];
            var3 = var3.bind(var5)(var2);
            var2 = var3.useCommandsForApplication;
            var3 = var2.bind(var3)(var4, var10, var9);
            var2 = var3.commands;
            var _closure2_slot3 = var2;
            var9 = var3.application;
            var _closure2_slot4 = var9;
            var10 = _closure1_slot4;
            var4 = var10.useMemo;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var3 = _closure2_slot3;
                    var1 = null;
                    var3 = var1 == var3;
                    var1 = undefined;
                    if(var3) { _fun0006_ip = 39; continue _fun0006 }
 18:
                    var4 = _closure2_slot3;
                    var3 = var4.filter;
                    var2 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.nsfw;
                        var1 = true;
                        var1 = var1 !== var2;
                        return var1;
                    };
                    var1 = var3.bind(var4)(var2);
 39:
                    return var1;
                }
            };
            var17 = var4.bind(var10)(var2, var3);
            var4 = _closure1_slot4;
            var3 = var4.useCallback;
            var2 = new Array(5);
            var2[0] = var9;
            var10 = var7.id;
            var2[1] = var10;
            var7 = var7.guild_id;
            var2[2] = var7;
            var2[3] = var6;
            var2[4] = var1;
            var1 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var3 = _closure2_slot4;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0007_ip = 213; continue _fun0007 }
 18:
                    var3 = _closure2_slot4;
                    var3 = var3.bot;
                    if(!(var2 != var3)) { _fun0007_ip = 213; continue _fun0007 }
 35:
                    var3 = _closure2_slot4;
                    var3 = var3.bot;
                    var3 = var3.id;
                    var _closure3_slot0 = var3;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var3 = 21;
                    var3 = var4[var3];
                    var4 = undefined;
                    var5 = var5.bind(var4)(var3);
                    var3 = var5.getBestActiveInput;
                    var5 = var3.bind(var5)();
                    if(!(var2 != var5)) { _fun0007_ip = 188; continue _fun0007 }
 93:
                    var3 = var5.openCustomKeyboard;
                    var2 = {};
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot3;
                    var6 = 22;
                    var6 = var10[var6];
                    var6 = var9.bind(var4)(var6);
                    var6 = var6.KeyboardTypes;
                    var6 = var6.APP_LAUNCHER;
                    var2['type'] = var6;
                    var6 = {};
                    var8 = _closure1_slot11;
                    var8 = var8.APPLICATION_VIEW;
                    var6['initialRouteName'] = var8;
                    var8 = true;
                    var6['initiallyExpanded'] = var8;
                    var7 = _closure2_slot4;
                    var6['application'] = var7;
                    var7 = function onPressBack() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot3;
                        var1 = 23;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = {};
                        var7 = _closure2_slot2;
                        var8 = var2;
                        var5 = copyDataProperties(var8, var7);
                        var6 = _closure3_slot0;
                        var5 = 'userId';
                        var2[var5] = var6;
                        var5 = _closure2_slot0;
                        var6 = var5.id;
                        var5 = 'channelId';
                        var2[var5] = var6;
                        var5 = _closure2_slot1;
                        var4 = 'sourceAnalyticsLocations';
                        var2[var4] = var5;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var6['onPressBack'] = var7;
                    var2['context'] = var6;
                    var2 = var3.bind(var5)(var2);
 188:
                    var2 = global;
                    var3 = var2.setTimeout;
                    var2 = function() {
                        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot3;
                            var1 = 23;
                            var3 = var5[var1];
                            var1 = undefined;
                            var7 = var4.bind(var1)(var3);
                            var6 = var7.getUserProfileActionSheetKey;
                            var3 = _closure3_slot0;
                            var7 = var6.bind(var7)(var3);
                            var6 = _closure1_slot1;
                            var3 = 24;
                            var3 = var5[var3];
                            var6 = var6.bind(var1)(var3);
                            var3 = var6.hideActionSheet;
                            var3 = var3.bind(var6)(var7);
                            var3 = 25;
                            var3 = var5[var3];
                            var4 = var4.bind(var1)(var3);
                            var3 = var4.getRootNavigationRef;
                            var5 = var3.bind(var4)();
                            var4 = null;
                            if(!(var4 != var5)) { _fun0008_ip = 256; continue _fun0008 }
 101:
                            var3 = var5.isReady;
                            var3 = var3.bind(var5)();
                            if(!var3) { _fun0008_ip = 256; continue _fun0008 }
 117:
                            var3 = var5.getState;
                            var6 = var3.bind(var5)();
                            var7 = var4 == var6;
                            var3 = undefined;
                            if(var7) { _fun0008_ip = 156; continue _fun0008 }
 136:
                            var6 = var6.routes;
                            var7 = var4 == var6;
                            var3 = undefined;
                            if(var7) { _fun0008_ip = 156; continue _fun0008 }
 151:
                            var3 = var6.length;
 156:
                            var6 = var4 != var3;
                            var4 = 0;
                            if(!var6) { _fun0008_ip = 168; continue _fun0008 }
 165:
                            var4 = var3;
 168:
                            var3 = 1;
                            if(!(var4 > var3)) { _fun0008_ip = 192; continue _fun0008 }
 175:
                            var6 = var5.goBack;
                            var6 = var6.bind(var5)();
                            var4 = var4 - 1;
                            if(var4 > var3) { _fun0008_ip = 175; continue _fun0008 }
 192:
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot3;
                            var3 = 26;
                            var3 = var5[var3];
                            var4 = var4.bind(var1)(var3);
                            var3 = var4.transitionTo;
                            var7 = _closure1_slot10;
                            var6 = var7.CHANNEL;
                            var2 = _closure2_slot0;
                            var5 = var2.guild_id;
                            var2 = var2.id;
                            var2 = var6.bind(var7)(var5, var2);
                            var2 = var3.bind(var4)(var2);
 256:
                            return var1;
                        }
                    };
                    var1 = 300;
                    var1 = var3.bind(var4)(var2, var1);
 213:
                    var1 = undefined;
                    return var1;
                }
            };
            var11 = var3.bind(var4)(var1, var2);
            var10 = null;
            var2 = var10 == var17;
            var1 = null;
            if(var2) { _fun0005_ip = 586; continue _fun0005 }
 285:
            var3 = var17.length;
            var2 = 0;
            var1 = null;
            if(!(var2 !== var3)) { _fun0005_ip = 586; continue _fun0005 }
 301:
            var4 = _closure1_slot13;
            var3 = _closure1_slot5;
            var2 = {};
            var12 = _closure1_slot12;
            var7 = _closure1_slot19;
            var6 = {};
            var6['themeType'] = var13;
            var20 = _closure1_slot0;
            var13 = _closure1_slot3;
            var16 = 11;
            var18 = var13[var16];
            var18 = var20.bind(var5)(var18);
            var19 = var18.intl;
            var18 = var19.string;
            var13 = var13[var16];
            var13 = var20.bind(var5)(var13);
            var13 = var13.t;
            var13 = var13.0hKkS0;
            var13 = var18.bind(var19)(var13);
            var6['children'] = var13;
            var7 = var12.bind(var5)(var7, var6);
            var6 = new Array(3);
            var6[0] = var7;
            var13 = _closure1_slot12;
            var12 = _closure1_slot5;
            var7 = {};
            var15 = var15.slashCommands;
            var7['style'] = var15;
            var15 = var17.map;
            var14 = function(arg1) {
                var1 = arg1;
                var5 = _closure1_slot12;
                var3 = _closure1_slot1;
                var4 = _closure1_slot3;
                var2 = 27;
                var2 = var4[var2];
                var4 = undefined;
                var3 = var3.bind(var4)(var2);
                var2 = {};
                var7 = _closure2_slot4;
                var2['application'] = var7;
                var6 = _closure2_slot0;
                var2['channel'] = var6;
                var2['command'] = var1;
                var1 = var1.id;
                var1 = var5.bind(var4)(var3, var2, var1);
                return var1;
            };
            var14 = var15.bind(var17)(var14);
            var7['children'] = var14;
            var7 = var13.bind(var5)(var12, var7);
            var6[1] = var7;
            var7 = var10 != var9;
            if(!var7) { _fun0005_ip = 465; continue _fun0005 }
 455:
            var9 = var9.bot;
            var7 = var10 != var9;
 465:
            if(!var7) { _fun0005_ip = 572; continue _fun0005 }
 468:
            var10 = _closure1_slot12;
            var15 = _closure1_slot0;
            var12 = _closure1_slot3;
            var8 = 28;
            var8 = var12[var8];
            var8 = var15.bind(var5)(var8);
            var9 = var8.Button;
            var8 = {'size': 'sm', 'variant': 'tertiary'};
            var13 = var12[var16];
            var13 = var15.bind(var5)(var13);
            var14 = var13.intl;
            var13 = var14.string;
            var12 = var12[var16];
            var12 = var15.bind(var5)(var12);
            var12 = var12.t;
            var12 = var12.VEfKyc;
            var12 = var13.bind(var14)(var12);
            var8['text'] = var12;
            var8['onPress'] = var11;
            var7 = var10.bind(var5)(var9, var8);
 572:
            var6[2] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 586:
            return var1;
        }
    };
    var _closure1_slot23 = var1;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.DIVIDER_DOT;
    var _closure1_slot9 = var7;
    var7 = var4.UserProfileThemeTypes;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Routes;
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AppLauncherRouteName;
    var _closure1_slot11 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot12 = var8;
    var8 = var4.jsxs;
    var _closure1_slot13 = var8;
    var4 = var4.Fragment;
    var _closure1_slot14 = var4;
    var4 = {'headingVariant': 'text-sm/semibold', 'textVariant': 'text-md/normal', 'headingSpacing': 8, 'rowGap': 24, 'columnGap': 6};
    var _closure1_slot15 = var4;
    var4 = {};
    var8 = var7.PREVIEW;
    var7 = {'headingVariant': 'text-xs/semibold', 'textVariant': 'text-sm/normal', 'headingSpacing': 4, 'rowGap': 12, 'columnGap': 3};
    var4[var8] = var7;
    var _closure1_slot16 = var4;
    var4 = function getStyleConfig(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var3 = arg1;
            var1 = undefined;
            if(!var3) { _fun0009_ip = 19; continue _fun0009 }
 8:
            var2 = _closure1_slot16;
            var1 = var2[var3];
 19:
            var2 = null;
            if(!(var2 == var1)) { _fun0009_ip = 32; continue _fun0009 }
 25:
            var1 = _closure1_slot15;
 32:
            return var1;
        }
    };
    var _closure1_slot17 = var4;
    var4 = 9;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 'column';
    var9['flexDirection'] = var10;
    var4['card'] = var9;
    var9 = {'flexDirection': 'row', 'alignItems': 'center'};
    var4['textWithIcon'] = var9;
    var9 = {'flexDirection': 'row', 'flexWrap': 'wrap'};
    var4['memberJoinDates'] = var9;
    var9 = {'flex': 1, 'flexDirection': 'row', 'flexWrap': 'wrap', 'marginBottom': 12};
    var4['slashCommands'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot18 = var4;
    var4 = 30;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/native/UserProfileAboutMeCard.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function UserProfileAboutMeCard(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
            var1 = arg1;
            var14 = var1.userId;
            var15 = var1.displayProfile;
            var12 = var1.channel;
            var16 = var1.pendingBio;
            var13 = var1.bioLineClamp;
            var10 = var1.themeType;
            var6 = var1.style;
            var1 = _closure1_slot18;
            var4 = undefined;
            var5 = var1.bind(var4)();
            var1 = _closure1_slot17;
            var1 = var1.bind(var4)(var10);
            var17 = var1.rowGap;
            var8 = null;
            var1 = var8 == var15;
            var11 = undefined;
            if(var1) { _fun0010_ip = 86; continue _fun0010 }
 81:
            var11 = var15.application;
 86:
            var3 = _closure1_slot13;
            var2 = _closure1_slot1;
            var9 = _closure1_slot3;
            var1 = 29;
            var1 = var9[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var9 = var5.card;
            var5 = new Array(3);
            var5[0] = var9;
            var9 = {};
            var9['rowGap'] = var17;
            var5[1] = var9;
            var5[2] = var6;
            var1['style'] = var5;
            var9 = _closure1_slot12;
            var6 = _closure1_slot21;
            var5 = {};
            var5['userId'] = var14;
            var5['displayProfile'] = var15;
            var5['pendingBio'] = var16;
            var5['themeType'] = var10;
            var5['lineClamp'] = var13;
            var6 = var9.bind(var4)(var6, var5);
            var5 = new Array(3);
            var5[0] = var6;
            var13 = _closure1_slot12;
            var9 = _closure1_slot22;
            var6 = {};
            var6['userId'] = var14;
            var16 = var8 == var15;
            var14 = undefined;
            if(var16) { _fun0010_ip = 221; continue _fun0010 }
 216:
            var14 = var15.guildId;
 221:
            var6['guildId'] = var14;
            var6['themeType'] = var10;
            var6 = var13.bind(var4)(var9, var6);
            var5[1] = var6;
            var9 = var8 == var11;
            var6 = undefined;
            if(var9) { _fun0010_ip = 255; continue _fun0010 }
 249:
            var6 = var11.popularApplicationCommandIds;
 255:
            var6 = var8 != var6;
            if(!var6) { _fun0010_ip = 266; continue _fun0010 }
 262:
            var6 = var8 != var12;
 266:
            if(!var6) { _fun0010_ip = 314; continue _fun0010 }
 269:
            var9 = _closure1_slot12;
            var8 = _closure1_slot23;
            var7 = {};
            var13 = var11.id;
            var7['applicationId'] = var13;
            var7['channel'] = var12;
            var11 = var11.popularApplicationCommandIds;
            var7['commandIds'] = var11;
            var7['themeType'] = var10;
            var6 = var9.bind(var4)(var8, var7);
 314:
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();