// app/modules/user_profile/native/UserProfileAboutMeCard.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function Heading(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var5 = var1.children;
            var3 = var1.themeType;
            var2 = _closure1_slot16;
            var4 = undefined;
            var2 = var2.bind(var4)(var3);
            var6 = var2.headingVariant;
            var7 = var2.headingSpacing;
            var2 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 10;
            var3 = var9[var3];
            var10 = var2.bind(var4)(var3);
            var8 = var10.useToken;
            var11 = _closure1_slot1;
            var3 = 11;
            var3 = var9[var3];
            var3 = var11.bind(var4)(var3);
            var3 = var3.modules;
            var3 = var3.mobile;
            var3 = var3.USER_PROFILE_ABOUT_ME_HEADING_TEXT_STYLE;
            var8 = var8.bind(var10)(var3);
            var3 = _closure1_slot11;
            var1 = 12;
            var1 = var9[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.Text;
            var1 = {'accessibilityRole': 'header', 'variant': null, 'color': 'user-profile-about-me-heading-text'};
            var9 = null;
            if(!(var9 != var8)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = var8;
case 2:
            var1['variant'] = var6;
            var6 = {};
            var6['marginBottom'] = var7;
            var1['style'] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var1 = function TextWithIcon(arg1) {
        var1 = arg1;
        var7 = var1.icon;
        var9 = var1.children;
        var2 = var1.themeType;
        var5 = var1.accessibilityLabel;
        var1 = _closure1_slot17;
        var4 = undefined;
        var8 = var1.bind(var4)();
        var1 = _closure1_slot16;
        var1 = var1.bind(var4)(var2);
        var10 = var1.textVariant;
        var12 = var1.columnGap;
        var3 = _closure1_slot12;
        var2 = _closure1_slot4;
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
        var8 = _closure1_slot11;
        var7 = _closure1_slot0;
        var11 = _closure1_slot2;
        var6 = 12;
        var6 = var11[var6];
        var6 = var7.bind(var4)(var6);
        var7 = var6.Text;
        var6 = {};
        var6['variant'] = var10;
        var10 = 'text-default';
        var6['color'] = var10;
        var6['children'] = var9;
        var6 = var8.bind(var4)(var7, var6);
        var5[1] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot19 = var1;
    var1 = function Bio(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var12 = var1.userId;
            var4 = var1.displayProfile;
            var2 = var1.pendingBio;
            var14 = var1.themeType;
            var10 = var1.lineClamp;
            var1 = _closure1_slot16;
            var5 = undefined;
            var1 = var1.bind(var5)(var14);
            var11 = var1.textVariant;
            var3 = null;
            var1 = var3 == var4;
            var13 = undefined;
            if(var1) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var1 = var4.getPreviewBio;
            var13 = var1.bind(var4)(var2);
case 4:
            var2 = var3 == var13;
            var1 = null;
            if(var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var2 = '';
            var1 = null;
            if(!(var2 !== var13)) { _fun0002_ip = 6; continue _fun0002 }
case 8:
            var4 = _closure1_slot12;
            var3 = _closure1_slot4;
            var2 = {};
            var9 = _closure1_slot11;
            var8 = _closure1_slot18;
            var6 = {};
            var6['themeType'] = var14;
            var18 = _closure1_slot0;
            var14 = _closure1_slot2;
            var15 = 13;
            var16 = var14[var15];
            var16 = var18.bind(var5)(var16);
            var17 = var16.intl;
            var16 = var17.string;
            var15 = var14[var15];
            var15 = var18.bind(var5)(var15);
            var15 = var15.t;
            var15 = var15.ZzAR2Y;
            var15 = var16.bind(var17)(var15);
            var6['children'] = var15;
            var8 = var9.bind(var5)(var8, var6);
            var6 = new Array(2);
            var6[0] = var8;
            var9 = _closure1_slot11;
            var8 = _closure1_slot1;
            var7 = 14;
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
case 6:
            return var1;
        }
    };
    var _closure1_slot20 = var1;
    var1 = function MemberJoinDates(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var2 = arg1;
            var13 = var2.userId;
            var _closure2_slot0 = var13;
            var3 = var2.guildId;
            var _closure2_slot1 = var3;
            var22 = var2.themeType;
            var2 = _closure1_slot17;
            var4 = undefined;
            var9 = var2.bind(var4)();
            var2 = _closure1_slot16;
            var2 = var2.bind(var4)(var22);
            var17 = var2.textVariant;
            var12 = var2.columnGap;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var6 = 15;
            var5 = var3[var6];
            var10 = var2.bind(var4)(var5);
            var8 = var10.useStateFromStores;
            var5 = _closure1_slot5;
            var7 = new Array(1);
            var7[0] = var5;
            var5 = function() {
                var1 = _closure1_slot5;
                var1 = var1.locale;
                return var1;
            };
            var5 = var8.bind(var10)(var7, var5);
            var7 = var3[var6];
            var11 = var2.bind(var4)(var7);
            var10 = var11.useStateFromStores;
            var7 = _closure1_slot7;
            var8 = new Array(1);
            var8[0] = var7;
            var7 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var1 = null;
                    var3 = var1 != var3;
                    if(!var3) { _fun0004_ip = 9; continue _fun0004 }
case 10:
                    var4 = _closure1_slot7;
                    var3 = var4.getGuild;
                    var2 = _closure2_slot1;
                    var1 = var3.bind(var4)(var2);
case 9:
                    return var1;
                }
            };
            var23 = var10.bind(var11)(var8, var7);
            var6 = var3[var6];
            var8 = var2.bind(var4)(var6);
            var7 = var8.useStateFromStores;
            var10 = _closure1_slot6;
            var6 = new Array(1);
            var6[0] = var10;
            var1 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var1 = null;
                    var3 = var1 != var3;
                    if(!var3) { _fun0005_ip = 11; continue _fun0005 }
case 10:
                    var5 = _closure1_slot6;
                    var4 = var5.getMember;
                    var3 = _closure2_slot1;
                    var2 = _closure2_slot0;
                    var1 = var4.bind(var5)(var3, var2);
case 11:
                    return var1;
                }
            };
            var6 = var7.bind(var8)(var6, var1);
            var1 = 16;
            var7 = var3[var1];
            var10 = var2.bind(var4)(var7);
            var8 = var10.getCreatedAtDate;
            var11 = _closure1_slot1;
            var7 = 17;
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
            if(var7) { _fun0003_ip = 12; continue _fun0003 }
case 13:
            var1 = var6.joinedAt;
case 12:
            var18 = var2.bind(var3)(var1, var5);
            var3 = _closure1_slot12;
            var2 = _closure1_slot4;
            var1 = {};
            var7 = _closure1_slot11;
            var6 = _closure1_slot18;
            var5 = {};
            var5['themeType'] = var22;
            var15 = _closure1_slot0;
            var14 = _closure1_slot2;
            var24 = 13;
            var8 = var14[var24];
            var8 = var15.bind(var4)(var8);
            var16 = var8.intl;
            var10 = var16.string;
            var8 = var14[var24];
            var8 = var15.bind(var4)(var8);
            var8 = var8.t;
            var8 = var8.a6XYD9;
            var8 = var10.bind(var16)(var8);
            var5['children'] = var8;
            var6 = var7.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot12;
            var7 = _closure1_slot4;
            var6 = {};
            var10 = var9.memberJoinDates;
            var9 = new Array(2);
            var9[0] = var10;
            var10 = {};
            var10['columnGap'] = var12;
            var9[1] = var10;
            var6['style'] = var9;
            var12 = _closure1_slot11;
            var10 = _closure1_slot19;
            var9 = {};
            var9['themeType'] = var22;
            var20 = _closure1_slot11;
            var16 = 18;
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
            var15 = var14["9t7w53"];
            var14 = {};
            var14['date'] = var13;
            var14 = var16.bind(var19)(var15, var14);
            var9['accessibilityLabel'] = var14;
            var9['children'] = var13;
            var10 = var12.bind(var4)(var10, var9);
            var9 = new Array(2);
            var9[0] = var10;
            var10 = var11 != var23;
            if(!var10) { _fun0003_ip = 14; continue _fun0003 }
case 15:
            var10 = var11 != var18;
case 14:
            if(!var10) { _fun0003_ip = 16; continue _fun0003 }
case 17:
            var13 = _closure1_slot12;
            var12 = _closure1_slot13;
            var11 = {};
            var16 = _closure1_slot11;
            var20 = _closure1_slot0;
            var19 = _closure1_slot2;
            var14 = 12;
            var14 = var19[var14];
            var14 = var20.bind(var4)(var14);
            var15 = var14.Text;
            var14 = {'variant': null, 'color': 'text-default', 'accessibilityElementsHidden': true, 'importantForAccessibility': 'no-hide-descendants'};
            var14['variant'] = var17;
            var17 = _closure1_slot8;
            var14['children'] = var17;
            var15 = var16.bind(var4)(var15, var14);
            var14 = new Array(2);
            var14[0] = var15;
            var17 = _closure1_slot11;
            var16 = _closure1_slot19;
            var15 = {};
            var15['themeType'] = var22;
            var25 = _closure1_slot11;
            var22 = _closure1_slot1;
            var26 = 19;
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
            var20 = var19.FdLNDK;
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
case 16:
            var9[1] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot21 = var1;
    var1 = function BotSlashCommands(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var1 = arg1;
            var4 = var1.applicationId;
            var7 = var1.channel;
            var _closure2_slot0 = var7;
            var3 = var1.commandIds;
            var13 = var1.themeType;
            var1 = _closure1_slot17;
            var5 = undefined;
            var15 = var1.bind(var5)();
            var9 = _closure1_slot1;
            var10 = _closure1_slot2;
            var1 = 20;
            var1 = var10[var1];
            var1 = var9.bind(var5)(var1);
            var1 = var1.bind(var5)();
            var1 = var1.analyticsLocations;
            var _closure2_slot1 = var1;
            var6 = _closure1_slot0;
            var2 = 21;
            var2 = var10[var2];
            var6 = var6.bind(var5)(var2);
            var2 = var6.useUserProfileAnalyticsContext;
            var2 = var2.bind(var6)();
            var6 = var2.context;
            var _closure2_slot2 = var6;
            var2 = 22;
            var2 = var10[var2];
            var2 = var9.bind(var5)(var2);
            var2 = var2.bind(var5)(var7, var4, var3);
            var17 = var2.commands;
            var9 = var2.application;
            var _closure2_slot3 = var9;
            var4 = _closure1_slot3;
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
case 0:
                    var2 = _closure2_slot3;
                    var6 = null;
                    if(!(var6 != var2)) { _fun0007_ip = 18; continue _fun0007 }
case 19:
                    var2 = _closure2_slot3;
                    var2 = var2.bot;
                    if(!(var6 != var2)) { _fun0007_ip = 18; continue _fun0007 }
case 20:
                    var2 = _closure2_slot3;
                    var2 = var2.bot;
                    var10 = var2.id;
                    var _closure3_slot0 = var10;
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var4 = 23;
                    var5 = var8[var4];
                    var4 = undefined;
                    var9 = var7.bind(var4)(var5);
                    var5 = var9.getUserProfileActionSheetKey;
                    var10 = var5.bind(var9)(var10);
                    var9 = _closure1_slot1;
                    var5 = 24;
                    var5 = var8[var5];
                    var9 = var9.bind(var4)(var5);
                    var5 = var9.hideActionSheet;
                    var5 = var5.bind(var9)(var10);
                    var5 = 25;
                    var5 = var8[var5];
                    var7 = var7.bind(var4)(var5);
                    var5 = var7.getRootNavigationRef;
                    var7 = var5.bind(var7)();
                    if(!(var6 != var7)) { _fun0007_ip = 21; continue _fun0007 }
case 3:
                    var5 = var7.isReady;
                    var5 = var5.bind(var7)();
                    if(!var5) { _fun0007_ip = 21; continue _fun0007 }
case 22:
                    var5 = var7.getState;
                    var8 = var5.bind(var7)();
                    var9 = var6 == var8;
                    var5 = undefined;
                    if(var9) { _fun0007_ip = 23; continue _fun0007 }
case 24:
                    var8 = var8.routes;
                    var9 = var6 == var8;
                    var5 = undefined;
                    if(var9) { _fun0007_ip = 23; continue _fun0007 }
case 25:
                    var5 = var8.length;
case 23:
                    var8 = var6 != var5;
                    var6 = 0;
                    if(!var8) { _fun0007_ip = 26; continue _fun0007 }
case 27:
                    var6 = var5;
case 26:
                    var5 = 1;
                    if(!(var6 > var5)) { _fun0007_ip = 28; continue _fun0007 }
case 29:
                    var8 = var7.goBack;
                    var8 = var8.bind(var7)();
                    var6 = var6 - 1;
                    if(var6 > var5) { _fun0007_ip = 29; continue _fun0007 }
case 28:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var5 = 26;
                    var5 = var7[var5];
                    var6 = var6.bind(var4)(var5);
                    var5 = var6.transitionTo;
                    var9 = _closure1_slot9;
                    var8 = var9.CHANNEL;
                    var3 = _closure2_slot0;
                    var7 = var3.guild_id;
                    var3 = var3.id;
                    var3 = var8.bind(var9)(var7, var3);
                    var3 = var5.bind(var6)(var3);
case 21:
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 27;
                    var2 = var5[var2];
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.runAfterInteractions;
                    var1 = function() {
                        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 28;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.getBestActiveInput;
                            var4 = var2.bind(var3)();
                            var2 = null;
                            if(!(var2 != var4)) { _fun0008_ip = 30; continue _fun0008 }
case 31:
                            var3 = var4.openCustomKeyboard;
                            var2 = {};
                            var7 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var5 = 29;
                            var5 = var8[var5];
                            var5 = var7.bind(var1)(var5);
                            var5 = var5.KeyboardTypes;
                            var5 = var5.APP_LAUNCHER;
                            var2['type'] = var5;
                            var5 = {};
                            var6 = _closure1_slot10;
                            var6 = var6.APPLICATION_VIEW;
                            var5['initialRouteName'] = var6;
                            var6 = true;
                            var5['initiallyExpanded'] = var6;
                            var6 = _closure2_slot3;
                            var5['application'] = var6;
                            var6 = function onPressBack() {
                                var3 = _closure1_slot1;
                                var2 = _closure1_slot2;
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
                                var2[4] = var6;
                                var5 = _closure2_slot0;
                                var6 = var5.id;
                                var5 = 'channelId';
                                var2[4] = var6;
                                var5 = _closure2_slot1;
                                var4 = 'sourceAnalyticsLocations';
                                var2[3] = var5;
                                var2 = var3.bind(var1)(var2);
                                return var1;
                            };
                            var5['onPressBack'] = var6;
                            var2['context'] = var5;
                            var2 = var3.bind(var4)(var2);
case 30:
                            return var1;
                        }
                    };
                    var1 = var2.bind(var3)(var1);
case 18:
                    var1 = undefined;
                    return var1;
                }
            };
            var11 = var3.bind(var4)(var1, var2);
            var10 = null;
            var2 = var10 == var17;
            var1 = null;
            if(var2) { _fun0006_ip = 32; continue _fun0006 }
case 33:
            var3 = var17.length;
            var2 = 0;
            var1 = null;
            if(!(var2 !== var3)) { _fun0006_ip = 32; continue _fun0006 }
case 34:
            var4 = _closure1_slot12;
            var3 = _closure1_slot4;
            var2 = {};
            var12 = _closure1_slot11;
            var7 = _closure1_slot18;
            var6 = {};
            var6['themeType'] = var13;
            var20 = _closure1_slot0;
            var13 = _closure1_slot2;
            var16 = 13;
            var18 = var13[var16];
            var18 = var20.bind(var5)(var18);
            var19 = var18.intl;
            var18 = var19.string;
            var13 = var13[var16];
            var13 = var20.bind(var5)(var13);
            var13 = var13.t;
            var13 = var13["0hKkS+"];
            var13 = var18.bind(var19)(var13);
            var6['children'] = var13;
            var7 = var12.bind(var5)(var7, var6);
            var6 = new Array(3);
            var6[0] = var7;
            var13 = _closure1_slot11;
            var12 = _closure1_slot4;
            var7 = {};
            var15 = var15.slashCommands;
            var7['style'] = var15;
            var15 = var17.map;
            var14 = function(arg1) {
                var1 = arg1;
                var5 = _closure1_slot11;
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 30;
                var2 = var4[var2];
                var4 = undefined;
                var3 = var3.bind(var4)(var2);
                var2 = {};
                var7 = _closure2_slot3;
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
            if(!var7) { _fun0006_ip = 35; continue _fun0006 }
case 36:
            var9 = var9.bot;
            var7 = var10 != var9;
case 35:
            if(!var7) { _fun0006_ip = 37; continue _fun0006 }
case 38:
            var10 = _closure1_slot11;
            var15 = _closure1_slot0;
            var12 = _closure1_slot2;
            var8 = 31;
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
            var12 = var12.VEfKyb;
            var12 = var13.bind(var14)(var12);
            var8['text'] = var12;
            var8['onPress'] = var11;
            var7 = var10.bind(var5)(var9, var8);
case 37:
            var6[2] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 32:
            return var1;
        }
    };
    var _closure1_slot22 = var1;
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
    var4 = var5.bind(var1)(var4);
    var7 = var4.DIVIDER_DOT;
    var _closure1_slot8 = var7;
    var7 = var4.UserProfileThemeTypes;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Routes;
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AppLauncherRouteName;
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot11 = var8;
    var8 = var4.jsxs;
    var _closure1_slot12 = var8;
    var4 = var4.Fragment;
    var _closure1_slot13 = var4;
    var4 = {'headingVariant': 'text-sm/semibold', 'textVariant': 'text-md/normal', 'headingSpacing': 8, 'rowGap': 24, 'columnGap': 6};
    var _closure1_slot14 = var4;
    var4 = {};
    var8 = var7.PREVIEW;
    var7 = {'headingVariant': 'text-xs/semibold', 'textVariant': 'text-sm/normal', 'headingSpacing': 4, 'rowGap': 12, 'columnGap': 3};
    var4[7] = var7;
    var _closure1_slot15 = var4;
    var4 = function getStyleConfig(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var4 = arg1;
            var2 = null;
            var3 = var2 != var4;
            var1 = undefined;
            if(!var3) { _fun0009_ip = 39; continue _fun0009 }
case 40:
            var3 = _closure1_slot15;
            var1 = var3[var4];
case 39:
            if(!(var2 == var1)) { _fun0009_ip = 41; continue _fun0009 }
case 42:
            var1 = _closure1_slot14;
case 41:
            return var1;
        }
    };
    var _closure1_slot16 = var4;
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
    var _closure1_slot17 = var4;
    var4 = 33;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/native/UserProfileAboutMeCard.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function UserProfileAboutMeCard(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var1 = arg1;
            var14 = var1.userId;
            var15 = var1.displayProfile;
            var12 = var1.channel;
            var16 = var1.pendingBio;
            var13 = var1.bioLineClamp;
            var10 = var1.themeType;
            var6 = var1.style;
            var1 = _closure1_slot17;
            var4 = undefined;
            var5 = var1.bind(var4)();
            var1 = _closure1_slot16;
            var1 = var1.bind(var4)(var10);
            var17 = var1.rowGap;
            var8 = null;
            var1 = var8 == var15;
            var11 = undefined;
            if(var1) { _fun0010_ip = 43; continue _fun0010 }
case 44:
            var11 = var15.application;
case 43:
            var3 = _closure1_slot12;
            var2 = _closure1_slot1;
            var9 = _closure1_slot2;
            var1 = 32;
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
            var9 = _closure1_slot11;
            var6 = _closure1_slot20;
            var5 = {};
            var5['userId'] = var14;
            var5['displayProfile'] = var15;
            var5['pendingBio'] = var16;
            var5['themeType'] = var10;
            var5['lineClamp'] = var13;
            var6 = var9.bind(var4)(var6, var5);
            var5 = new Array(3);
            var5[0] = var6;
            var13 = _closure1_slot11;
            var9 = _closure1_slot21;
            var6 = {};
            var6['userId'] = var14;
            var16 = var8 == var15;
            var14 = undefined;
            if(var16) { _fun0010_ip = 45; continue _fun0010 }
case 46:
            var14 = var15.guildId;
case 45:
            var6['guildId'] = var14;
            var6['themeType'] = var10;
            var6 = var13.bind(var4)(var9, var6);
            var5[1] = var6;
            var9 = var8 == var11;
            var6 = undefined;
            if(var9) { _fun0010_ip = 47; continue _fun0010 }
case 48:
            var6 = var11.popularApplicationCommandIds;
case 47:
            var6 = var8 != var6;
            if(!var6) { _fun0010_ip = 49; continue _fun0010 }
case 13:
            var6 = var8 != var12;
case 49:
            if(!var6) { _fun0010_ip = 50; continue _fun0010 }
case 51:
            var9 = _closure1_slot11;
            var8 = _closure1_slot22;
            var7 = {};
            var13 = var11.id;
            var7['applicationId'] = var13;
            var7['channel'] = var12;
            var11 = var11.popularApplicationCommandIds;
            var7['commandIds'] = var11;
            var7['themeType'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 50:
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();