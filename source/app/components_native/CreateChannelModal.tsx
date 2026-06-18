// app/components_native/CreateChannelModal.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var15 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var15;
    var _closure1_slot2 = var7;
    var1 = function ChannelTypeRow(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var12 = var2.selected;
            var _closure2_slot0 = var12;
            var3 = var2.channelType;
            var _closure2_slot1 = var3;
            var1 = var2.isPrivate;
            var8 = var2.isBeta;
            var2 = var2.onPress;
            var _closure2_slot2 = var2;
            var2 = _closure1_slot24;
            var4 = undefined;
            var10 = var2.bind(var4)();
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 30;
            var2 = var6[var2];
            var6 = var5.bind(var4)(var2);
            var5 = var6.useRadioA11yNative;
            var2 = {};
            var2['selected'] = var12;
            var2 = var5.bind(var6)(var2);
            var9 = var2.accessibilityRole;
            var6 = var2.accessibilityState;
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = _closure1_slot25;
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var1 = _closure1_slot26;
case 4:
            var1 = var1[var3];
            var18 = var1.IconComponent;
            var1 = _closure1_slot15;
            var1 = var1.GUILD_TEXT;
            if(!(var1 !== var3)) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var1 = _closure1_slot15;
            var1 = var1.GUILD_VOICE;
            if(!(var1 !== var3)) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var1 = _closure1_slot15;
            var1 = var1.GUILD_FORUM;
            if(!(var1 !== var3)) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var1 = _closure1_slot15;
            var1 = var1.GUILD_ANNOUNCEMENT;
            if(!(var1 !== var3)) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var1 = _closure1_slot15;
            var1 = var1.GUILD_STAGE_VOICE;
            if(!(var1 !== var3)) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var1 = _closure1_slot15;
            var2 = var1.GUILD_MEDIA;
            var1 = undefined;
            if(!(var2 === var3)) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var2 = {};
            var20 = _closure1_slot0;
            var25 = _closure1_slot2;
            var19 = 26;
            var3 = var25[var19];
            var3 = var20.bind(var4)(var3);
            var7 = var3.intl;
            var5 = var7.string;
            var3 = var25[var19];
            var3 = var20.bind(var4)(var3);
            var3 = var3.t;
            var3 = var3["6x6fVg"];
            var3 = var5.bind(var7)(var3);
            var2['label'] = var3;
            var7 = _closure1_slot23;
            var5 = _closure1_slot22;
            var3 = {};
            var16 = _closure1_slot21;
            var13 = 27;
            var13 = var25[var13];
            var13 = var20.bind(var4)(var13);
            var14 = var13.Text;
            var13 = {'variant': 'text-xs/normal', 'color': 'text-muted'};
            var21 = 'text-xs/normal';
            var17 = var25[var19];
            var17 = var20.bind(var4)(var17);
            var23 = var17.intl;
            var22 = var23.string;
            var17 = var25[var19];
            var17 = var20.bind(var4)(var17);
            var17 = var17.t;
            var17 = var17.JyCrwS;
            var17 = var22.bind(var23)(var17);
            var13['children'] = var17;
            var14 = var16.bind(var4)(var14, var13);
            var13 = new Array(2);
            var13[0] = var14;
            var17 = _closure1_slot21;
            var14 = 28;
            var14 = var25[var14];
            var14 = var20.bind(var4)(var14);
            var16 = var14.TextWithIOSLinkWorkaround;
            var14 = {};
            var14['variant'] = var21;
            var21 = var25[var19];
            var21 = var20.bind(var4)(var21);
            var22 = var21.intl;
            var21 = var22.format;
            var19 = var25[var19];
            var19 = var20.bind(var4)(var19);
            var19 = var19.t;
            var20 = var19["2Sapx1"];
            var19 = {};
            var24 = _closure1_slot1;
            var23 = 29;
            var23 = var25[var23];
            var25 = var24.bind(var4)(var23);
            var24 = var25.getCreatorSupportArticleURL;
            var23 = _closure1_slot19;
            var23 = var23.MEDIA_CHANNEL;
            var23 = var24.bind(var25)(var23);
            var19['hcArticleUrl'] = var23;
            var19 = var21.bind(var22)(var20, var19);
            var14['children'] = var19;
            var14 = var17.bind(var4)(var16, var14);
            var13[1] = var14;
            var3['children'] = var13;
            var3 = var7.bind(var4)(var5, var3);
            var2['description'] = var3;
            var1 = var2;
            _fun0001_ip = 15; continue _fun0001;
case 13:
            var2 = {};
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var3 = 26;
            var5 = var14[var3];
            var5 = var13.bind(var4)(var5);
            var16 = var5.intl;
            var7 = var16.string;
            var5 = var14[var3];
            var5 = var13.bind(var4)(var5);
            var5 = var5.t;
            var5 = var5.pNWst0;
            var5 = var7.bind(var16)(var5);
            var2['label'] = var5;
            var5 = var14[var3];
            var5 = var13.bind(var4)(var5);
            var7 = var5.intl;
            var5 = var7.string;
            var3 = var14[var3];
            var3 = var13.bind(var4)(var3);
            var3 = var3.t;
            var3 = var3.VPAwgo;
            var3 = var5.bind(var7)(var3);
            var2['description'] = var3;
            var1 = var2;
            _fun0001_ip = 15; continue _fun0001;
case 11:
            var2 = {};
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var3 = 26;
            var5 = var14[var3];
            var5 = var13.bind(var4)(var5);
            var16 = var5.intl;
            var7 = var16.string;
            var5 = var14[var3];
            var5 = var13.bind(var4)(var5);
            var5 = var5.t;
            var5 = var5.qr9dEP;
            var5 = var7.bind(var16)(var5);
            var2['label'] = var5;
            var5 = var14[var3];
            var5 = var13.bind(var4)(var5);
            var7 = var5.intl;
            var5 = var7.string;
            var3 = var14[var3];
            var3 = var13.bind(var4)(var3);
            var3 = var3.t;
            var3 = var3.gBkfzu;
            var3 = var5.bind(var7)(var3);
            var2['description'] = var3;
            var1 = var2;
            _fun0001_ip = 15; continue _fun0001;
case 9:
            var2 = {};
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var3 = 26;
            var5 = var14[var3];
            var5 = var13.bind(var4)(var5);
            var16 = var5.intl;
            var7 = var16.string;
            var5 = var14[var3];
            var5 = var13.bind(var4)(var5);
            var5 = var5.t;
            var5 = var5.eAVID5;
            var5 = var7.bind(var16)(var5);
            var2['label'] = var5;
            var5 = var14[var3];
            var5 = var13.bind(var4)(var5);
            var7 = var5.intl;
            var5 = var7.string;
            var3 = var14[var3];
            var3 = var13.bind(var4)(var3);
            var3 = var3.t;
            var3 = var3.iZ5pgg;
            var3 = var5.bind(var7)(var3);
            var2['description'] = var3;
            var1 = var2;
            _fun0001_ip = 15; continue _fun0001;
case 7:
            var2 = {};
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var3 = 26;
            var5 = var14[var3];
            var5 = var13.bind(var4)(var5);
            var16 = var5.intl;
            var7 = var16.string;
            var5 = var14[var3];
            var5 = var13.bind(var4)(var5);
            var5 = var5.t;
            var5 = var5.Sx55Oh;
            var5 = var7.bind(var16)(var5);
            var2['label'] = var5;
            var5 = var14[var3];
            var5 = var13.bind(var4)(var5);
            var7 = var5.intl;
            var5 = var7.string;
            var3 = var14[var3];
            var3 = var13.bind(var4)(var3);
            var3 = var3.t;
            var3 = var3.pqfkoF;
            var3 = var5.bind(var7)(var3);
            var2['description'] = var3;
            var1 = var2;
            _fun0001_ip = 15; continue _fun0001;
case 5:
            var2 = {};
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var3 = 26;
            var5 = var14[var3];
            var5 = var13.bind(var4)(var5);
            var16 = var5.intl;
            var7 = var16.string;
            var5 = var14[var3];
            var5 = var13.bind(var4)(var5);
            var5 = var5.t;
            var5 = var5.pnuRXC;
            var5 = var7.bind(var16)(var5);
            var2['label'] = var5;
            var5 = var14[var3];
            var5 = var13.bind(var4)(var5);
            var7 = var5.intl;
            var5 = var7.string;
            var3 = var14[var3];
            var3 = var13.bind(var4)(var3);
            var3 = var3.t;
            var3 = var3.oG6WsM;
            var3 = var5.bind(var7)(var3);
            var2['description'] = var3;
            var1 = var2;
case 15:
            var14 = var1.label;
            var5 = var1.description;
            var3 = _closure1_slot21;
            var7 = _closure1_slot0;
            var13 = _closure1_slot2;
            var1 = 31;
            var1 = var13[var1];
            var1 = var7.bind(var4)(var1);
            var2 = var1.TableRow;
            var1 = {};
            var15 = function onPress() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot0;
                    var2 = !var2;
                    if(!var2) { _fun0002_ip = 17; continue _fun0002 }
case 18:
                    var3 = _closure2_slot2;
                    var2 = _closure2_slot1;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
case 17:
                    var1 = undefined;
                    return var1;
                }
            };
            var1['onPress'] = var15;
            var1['accessibilityRole'] = var9;
            var1['accessibilityState'] = var6;
            var15 = _closure1_slot21;
            var9 = _closure1_slot6;
            var6 = {};
            var16 = var10.flexRow;
            var6['style'] = var16;
            var17 = _closure1_slot21;
            var16 = {};
            var16 = var17.bind(var4)(var18, var16);
            var6['children'] = var16;
            var6 = var15.bind(var4)(var9, var6);
            var1['icon'] = var6;
            var9 = _closure1_slot21;
            var6 = 32;
            var6 = var13[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.FormRadio;
            var6 = {};
            var6['selected'] = var12;
            var6 = var9.bind(var4)(var7, var6);
            var1['trailing'] = var6;
            var7 = true;
            var6 = var14;
            if(!(var7 === var8)) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var9 = _closure1_slot23;
            var8 = _closure1_slot6;
            var7 = {};
            var10 = var10.horizontalContainer;
            var7['style'] = var10;
            var13 = _closure1_slot21;
            var15 = _closure1_slot0;
            var16 = _closure1_slot2;
            var10 = 33;
            var10 = var16[var10];
            var10 = var15.bind(var4)(var10);
            var12 = var10.FormLabel;
            var10 = {};
            var10['text'] = var14;
            var12 = var13.bind(var4)(var12, var10);
            var10 = new Array(2);
            var10[0] = var12;
            var13 = _closure1_slot21;
            var14 = 34;
            var11 = var16[var14];
            var11 = var15.bind(var4)(var11);
            var12 = var11.BetaTag;
            var11 = {};
            var14 = var16[var14];
            var14 = var15.bind(var4)(var14);
            var14 = var14.BetaSizes;
            var14 = var14.SMALL;
            var11['size'] = var14;
            var11 = var13.bind(var4)(var12, var11);
            var10[1] = var11;
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 19:
            var1['label'] = var6;
            var1['subLabel'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot28 = var1;
    var2 = function CreateChannel(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var7 = var1.categoryId;
            var _closure2_slot0 = var7;
            var11 = var1.channelType;
            var2 = var1.cloneChannelId;
            var _closure2_slot1 = var2;
            var20 = var1.createMode;
            var _closure2_slot2 = var20;
            var23 = var1.guildId;
            var _closure2_slot3 = var23;
            var1 = var1.onChannelCreated;
            var _closure2_slot4 = var1;
            var4 = undefined;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var _closure2_slot8 = var4;
            var _closure2_slot9 = var4;
            var _closure2_slot10 = var4;
            var _closure2_slot11 = var4;
            var _closure2_slot12 = var4;
            var _closure2_slot13 = var4;
            var _closure2_slot14 = var4;
            var _closure2_slot15 = var4;
            var _closure2_slot16 = var4;
            var2 = function updateName(arg1, arg2) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var5 = arg1;
                    var3 = _closure2_slot9;
                    var6 = _closure1_slot7;
                    var4 = var6.has;
                    var2 = arg2;
                    var4 = var4.bind(var6)(var2);
                    var2 = var5;
                    if(!var4) { _fun0004_ip = 21; continue _fun0004 }
case 22:
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 49;
                    var4 = var4[var1];
                    var1 = undefined;
                    var4 = var6.bind(var1)(var4);
                    var1 = var4.sanitizeGuildTextChannelName;
                    var2 = var1.bind(var4)(var5);
case 21:
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var _closure2_slot17 = var2;
            var35 = function handleTypeChange(arg1) {
                var4 = arg1;
                var3 = _closure2_slot11;
                var1 = undefined;
                var3 = var3.bind(var1)(var4);
                var3 = _closure2_slot17;
                var2 = _closure2_slot8;
                var2 = var3.bind(var1)(var2, var4);
                return var1;
            };
            var2 = _closure1_slot24;
            var14 = var2.bind(var4)();
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 35;
            var2 = var5[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.bind(var4)();
            var6 = var2.insets;
            var3 = _closure1_slot0;
            var2 = 36;
            var8 = var5[var2];
            var12 = var3.bind(var4)(var8);
            var10 = var12.useStateFromStores;
            var8 = _closure1_slot11;
            var9 = new Array(1);
            var9[0] = var8;
            var8 = function() {
                var3 = _closure1_slot11;
                var2 = var3.getGuild;
                var1 = _closure2_slot3;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var8 = var10.bind(var12)(var9, var8);
            var2 = var5[var2];
            var9 = var3.bind(var4)(var2);
            var5 = var9.useStateFromStores;
            var2 = _closure1_slot10;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var1 = null;
                    var3 = var1 != var3;
                    if(!var3) { _fun0005_ip = 23; continue _fun0005 }
case 24:
                    var4 = _closure1_slot10;
                    var3 = var4.getChannel;
                    var2 = _closure2_slot1;
                    var1 = var3.bind(var4)(var2);
case 23:
                    return var1;
                }
            };
            var10 = var5.bind(var9)(var3, var2);
            var _closure2_slot5 = var10;
            var9 = null;
            var33 = var9 != var8;
            if(!var33) { _fun0003_ip = 25; continue _fun0003 }
case 26:
            var5 = var8.features;
            var3 = var5.has;
            var2 = _closure1_slot16;
            var2 = var2.COMMUNITY;
            var33 = var3.bind(var5)(var2);
case 25:
            var5 = _closure1_slot12;
            var3 = var5.can;
            var2 = _closure1_slot17;
            var2 = var2.VIEW_CHANNEL;
            var27 = var3.bind(var5)(var2, var8);
            _closure2_slot6 = var27;
            var5 = _closure1_slot12;
            var3 = var5.can;
            var2 = _closure1_slot17;
            var2 = var2.CONNECT;
            var26 = var3.bind(var5)(var2, var8);
            _closure2_slot7 = var26;
            var3 = _closure1_slot14;
            var2 = var3.getCurrentUser;
            var5 = var2.bind(var3)();
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var12 = 37;
            var12 = var2[var12];
            var15 = var3.bind(var4)(var12);
            var12 = var9 != var5;
            var5 = 'CreateChannel: user cannot be undefined';
            var5 = var15.bind(var4)(var12, var5);
            var36 = 38;
            var2 = var2[var36];
            var2 = var3.bind(var4)(var2);
            var12 = var2.bind(var4)(var10);
            var5 = _closure1_slot4;
            var3 = var5.useState;
            var15 = var9 != var12;
            var2 = '';
            if(!var15) { _fun0003_ip = 27; continue _fun0003 }
case 28:
            var2 = var12;
case 27:
            var3 = var3.bind(var5)(var2);
            var2 = _closure1_slot3;
            var24 = 2;
            var2 = var2.bind(var4)(var3, var24);
            var18 = 0;
            var19 = var2[var18];
            _closure2_slot8 = var19;
            var3 = 1;
            var2 = var2[var3];
            _closure2_slot9 = var2;
            var5 = _closure1_slot4;
            var2 = var5.useState;
            if(!(var9 == var11)) { _fun0003_ip = 29; continue _fun0003 }
case 30:
            var12 = _closure1_slot15;
            var11 = var12.GUILD_TEXT;
case 29:
            var5 = var2.bind(var5)(var11);
            var2 = _closure1_slot3;
            var2 = var2.bind(var4)(var5, var24);
            var32 = var2[var18];
            _closure2_slot10 = var32;
            var2 = var2[var3];
            _closure2_slot11 = var2;
            var11 = _closure1_slot0;
            var15 = _closure1_slot2;
            var2 = 39;
            var2 = var15[var2];
            var5 = var11.bind(var4)(var2);
            var2 = var5.useCanCreateStageChannelByGuild;
            var30 = var2.bind(var5)(var23);
            var2 = 40;
            var2 = var15[var2];
            var5 = var11.bind(var4)(var2);
            var2 = var5.useGuildEligibleForMediaChannels;
            var34 = var2.bind(var5)(var8);
            var2 = 41;
            var2 = var15[var2];
            var5 = var11.bind(var4)(var2);
            var2 = var5.useNavigation;
            var21 = var2.bind(var5)();
            _closure2_slot12 = var21;
            var12 = _closure1_slot1;
            var22 = 42;
            var2 = var15[var22];
            var2 = var12.bind(var4)(var2);
            var8 = var2.bind(var4)(var1);
            var5 = _closure1_slot3;
            var2 = 3;
            var2 = var5.bind(var4)(var8, var2);
            var17 = var2[var18];
            _closure2_slot13 = var17;
            var16 = var2[var3];
            var8 = var2[var24];
            _closure2_slot14 = var8;
            var25 = _closure1_slot4;
            var5 = var25.useState;
            var2 = false;
            var5 = var5.bind(var25)(var2);
            var2 = _closure1_slot3;
            var2 = var2.bind(var4)(var5, var24);
            var24 = var2[var18];
            _closure2_slot15 = var24;
            var2 = var2[var3];
            _closure2_slot16 = var2;
            var25 = _closure1_slot4;
            var5 = var25.useEffect;
            var3 = function() {
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 43;
                var3 = var3[var1];
                var1 = undefined;
                var5 = var4.bind(var1)(var3);
                var4 = var5.trackWithMetadata;
                var2 = _closure1_slot18;
                var3 = var2.OPEN_MODAL;
                var2 = {};
                var6 = 'Create Channel';
                var2['type'] = var6;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var2 = new Array(0);
            var2 = var5.bind(var25)(var3, var2);
            var5 = _closure1_slot4;
            var3 = var5.useEffect;
            var2 = new Array(13);
            var2[0] = var21;
            var2[1] = var32;
            var2[2] = var10;
            var2[3] = var27;
            var2[4] = var26;
            var2[5] = var24;
            var2[6] = var19;
            var2[7] = var17;
            var2[8] = var23;
            var2[9] = var8;
            var2[10] = var7;
            var2[11] = var20;
            var2[12] = var1;
            var1 = function() {
                var4 = _closure2_slot12;
                var3 = var4.setOptions;
                var2 = {};
                var8 = _closure1_slot0;
                var11 = _closure1_slot2;
                var1 = 44;
                var7 = var11[var1];
                var1 = undefined;
                var9 = var8.bind(var1)(var7);
                var8 = var9.getHeaderCloseButton;
                var10 = _closure1_slot1;
                var7 = 45;
                var7 = var11[var7];
                var7 = var10.bind(var1)(var7);
                var7 = var7.close;
                var7 = var8.bind(var9)(var7);
                var2['headerLeft'] = var7;
                var7 = function headerRight() {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                        var1 = _closure2_slot13;
                        var5 = _closure1_slot21;
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        if(var1) { _fun0006_ip = 25; continue _fun0006 }
case 17:
                        var1 = 46;
                        var1 = var4[var1];
                        var6 = undefined;
                        var1 = var3.bind(var6)(var1);
                        var2 = var1.HeaderActionButton;
                        var1 = {};
                        var7 = _closure2_slot15;
                        if(var7) { _fun0006_ip = 31; continue _fun0006 }
case 32:
                        var8 = _closure2_slot10;
                        var7 = _closure1_slot15;
                        var7 = var7.GUILD_STAGE_VOICE;
                        if(!(var8 !== var7)) { _fun0006_ip = 31; continue _fun0006 }
case 33:
                        var12 = _closure1_slot0;
                        var13 = _closure1_slot2;
                        var7 = 26;
                        var8 = var13[var7];
                        var8 = var12.bind(var6)(var8);
                        var11 = var8.intl;
                        var8 = var11.string;
                        var7 = var13[var7];
                        var7 = var12.bind(var6)(var7);
                        var7 = var7.t;
                        var7 = var7.CumH4u;
                        var7 = var8.bind(var11)(var7);
                        _fun0006_ip = 34; continue _fun0006;
case 31:
                        var13 = _closure1_slot0;
                        var14 = _closure1_slot2;
                        var8 = 26;
                        var11 = var14[var8];
                        var11 = var13.bind(var6)(var11);
                        var12 = var11.intl;
                        var11 = var12.string;
                        var8 = var14[var8];
                        var8 = var13.bind(var6)(var8);
                        var8 = var8.t;
                        var8 = var8.PDTjLN;
                        var7 = var11.bind(var12)(var8);
case 34:
                        var1['text'] = var7;
                        var8 = _closure2_slot8;
                        var7 = '';
                        var7 = var7 === var8;
                        if(var7) { _fun0006_ip = 35; continue _fun0006 }
case 36:
                        var8 = _closure2_slot15;
                        if(!var8) { _fun0006_ip = 37; continue _fun0006 }
case 38:
                        var11 = _closure1_slot0;
                        var12 = _closure1_slot2;
                        var10 = 47;
                        var10 = var12[var10];
                        var13 = var11.bind(var6)(var10);
                        var12 = var13.canCreatePrivateChannel;
                        var11 = _closure2_slot10;
                        var10 = _closure2_slot6;
                        var9 = _closure2_slot7;
                        var9 = var12.bind(var13)(var11, var10, var9);
                        var8 = !var9;
case 37:
                        var7 = var8;
case 35:
                        var1['disabled'] = var7;
                        var7 = function onPress() {
                            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                                var5 = {};
                                var1 = _closure2_slot5;
                                var3 = null;
                                if(!(var3 == var1)) { _fun0007_ip = 39; continue _fun0007 }
case 40:
                                var1 = new Array(0);
                                _fun0007_ip = 41; continue _fun0007;
case 39:
                                var7 = _closure1_slot1;
                                var4 = _closure1_slot2;
                                var2 = 48;
                                var4 = var4[var2];
                                var2 = undefined;
                                var7 = var7.bind(var2)(var4);
                                var4 = var7.values;
                                var2 = _closure2_slot5;
                                var2 = var2.permissionOverwrites;
                                var1 = var4.bind(var7)(var2);
case 41:
                                var5['overwrites'] = var1;
                                var1 = _closure2_slot5;
                                var4 = var3 == var1;
                                var1 = undefined;
                                var2 = undefined;
                                if(var4) { _fun0007_ip = 42; continue _fun0007 }
case 43:
                                var4 = _closure2_slot5;
                                var2 = var4.bitrate;
case 42:
                                var5['bitrate'] = var2;
                                var2 = _closure2_slot5;
                                var3 = var3 == var2;
                                var2 = undefined;
                                if(var3) { _fun0007_ip = 44; continue _fun0007 }
case 45:
                                var3 = _closure2_slot5;
                                var2 = var3.userLimit;
case 44:
                                var5['userLimit'] = var2;
                                var2 = _closure2_slot2;
                                var5['createMode'] = var2;
                                var2 = _closure2_slot3;
                                var5['guildId'] = var2;
                                var2 = _closure2_slot8;
                                var5['name'] = var2;
                                var2 = _closure2_slot10;
                                var5['channelType'] = var2;
                                var2 = _closure2_slot0;
                                var5['categoryId'] = var2;
                                var2 = _closure2_slot4;
                                var5['onChannelCreated'] = var2;
                                var2 = _closure2_slot15;
                                if(var2) { _fun0007_ip = 46; continue _fun0007 }
case 47:
                                var4 = _closure2_slot10;
                                var3 = _closure1_slot15;
                                var3 = var3.GUILD_STAGE_VOICE;
                                if(!(var4 !== var3)) { _fun0007_ip = 48; continue _fun0007 }
case 49:
                                var3 = _closure2_slot14;
                                var3 = var3.bind(var1)(var5);
                                _fun0007_ip = 50; continue _fun0007;
case 48:
                                var4 = _closure2_slot12;
                                var3 = var4.push;
                                var2 = _closure1_slot27;
                                var2 = var2.ADD_MODERATORS;
                                var2 = var3.bind(var4)(var2, var5);
                                _fun0007_ip = 50; continue _fun0007;
case 46:
                                var5 = _closure2_slot12;
                                var4 = var5.push;
                                var2 = _closure1_slot27;
                                var3 = var2.ADD_MEMBERS;
                                var2 = {};
                                var7 = _closure2_slot3;
                                var2['guildId'] = var7;
                                var7 = _closure2_slot10;
                                var2['channelType'] = var7;
                                var7 = _closure2_slot8;
                                var2['name'] = var7;
                                var7 = _closure2_slot0;
                                var2['categoryId'] = var7;
                                var6 = _closure2_slot4;
                                var2['onChannelCreated'] = var6;
                                var2 = var4.bind(var5)(var3, var2);
case 50:
                                return var1;
                            }
                        };
                        var1['onPress'] = var7;
                        var1 = var5.bind(var6)(var2, var1);
                        _fun0006_ip = 51; continue _fun0006;
case 25:
                        var2 = 44;
                        var2 = var4[var2];
                        var4 = undefined;
                        var2 = var3.bind(var4)(var2);
                        var3 = var2.HeaderSubmittingIndicator;
                        var2 = {};
                        var1 = var5.bind(var4)(var3, var2);
case 51:
                        return var1;
                    }
                };
                var2['headerRight'] = var7;
                var7 = _closure1_slot31;
                var6 = _closure2_slot10;
                var5 = _closure2_slot5;
                var5 = var7.bind(var1)(var6, var5);
                var2['headerTitle'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var1 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot21;
            var2 = _closure1_slot5;
            var1 = {};
            var5 = 'always';
            var1['keyboardShouldPersistTaps'] = var5;
            var5 = {};
            var8 = 14;
            var7 = var15[var8];
            var7 = var12.bind(var4)(var7);
            var7 = var7.space;
            var7 = var7.PX_16;
            var5['padding'] = var7;
            var7 = var15[var8];
            var7 = var12.bind(var4)(var7);
            var7 = var7.space;
            var7 = var7.PX_16;
            var6 = var6.bottom;
            var6 = var7 + var6;
            var5['paddingBottom'] = var6;
            var1['contentContainerStyle'] = var5;
            var7 = _closure1_slot23;
            var5 = 50;
            var5 = var15[var5];
            var5 = var11.bind(var4)(var5);
            var6 = var5.Stack;
            var5 = {};
            var8 = var15[var8];
            var8 = var12.bind(var4)(var8);
            var8 = var8.space;
            var8 = var8.PX_16;
            var5['spacing'] = var8;
            var12 = _closure1_slot21;
            var8 = 51;
            var8 = var15[var8];
            var8 = var11.bind(var4)(var8);
            var11 = var8.Input;
            var8 = {};
            var15 = _closure1_slot15;
            var15 = var15.GUILD_CATEGORY;
            if(!(var32 !== var15)) { _fun0003_ip = 52; continue _fun0003 }
case 53:
            var25 = _closure1_slot0;
            var28 = _closure1_slot2;
            var15 = 26;
            var17 = var28[var15];
            var17 = var25.bind(var4)(var17);
            var21 = var17.intl;
            var17 = var21.string;
            var15 = var28[var15];
            var15 = var25.bind(var4)(var15);
            var15 = var15.t;
            var15 = var15.PVbHDl;
            var15 = var17.bind(var21)(var15);
            _fun0003_ip = 54; continue _fun0003;
case 52:
            var28 = _closure1_slot0;
            var29 = _closure1_slot2;
            var17 = 26;
            var21 = var29[var17];
            var21 = var28.bind(var4)(var21);
            var25 = var21.intl;
            var21 = var25.string;
            var17 = var29[var17];
            var17 = var28.bind(var4)(var17);
            var17 = var17.t;
            var17 = var17.OCAkGP;
            var15 = var21.bind(var25)(var17);
case 54:
            var8['label'] = var15;
            var17 = var16.name;
            var21 = var9 == var17;
            var15 = undefined;
            if(var21) { _fun0003_ip = 55; continue _fun0003 }
case 56:
            var15 = var17[var18];
case 55:
            var8['errorMessage'] = var15;
            var15 = _closure1_slot15;
            var15 = var15.GUILD_FORUM;
            if(!(var32 !== var15)) { _fun0003_ip = 57; continue _fun0003 }
case 58:
            var17 = var9 != var10;
            var15 = undefined;
            if(!var17) { _fun0003_ip = 59; continue _fun0003 }
case 60:
            var29 = _closure1_slot0;
            var28 = _closure1_slot2;
            var17 = 26;
            var18 = var28[var17];
            var18 = var29.bind(var4)(var18);
            var25 = var18.intl;
            var21 = var25.format;
            var17 = var28[var17];
            var17 = var29.bind(var4)(var17);
            var17 = var17.t;
            var18 = var17.s2ZzZZ;
            var17 = {};
            var28 = var28[var36];
            var38 = var29.bind(var4)(var28);
            var37 = var38.computeChannelName;
            var41 = _closure1_slot14;
            var40 = _closure1_slot13;
            var39 = true;
            var43 = var38;
            var42 = var10;
            var28 = var43[var37](var42, var41, var40, var39, var38);
            var17['name'] = var28;
            var15 = var21.bind(var25)(var18, var17);
case 59:
            _fun0003_ip = 61; continue _fun0003;
case 57:
            var25 = _closure1_slot0;
            var28 = _closure1_slot2;
            var17 = 26;
            var18 = var28[var17];
            var18 = var25.bind(var4)(var18);
            var21 = var18.intl;
            var18 = var21.string;
            var17 = var28[var17];
            var17 = var25.bind(var4)(var17);
            var17 = var17.t;
            var17 = var17.qBvLY4;
            var15 = var18.bind(var21)(var17);
case 61:
            var8['description'] = var15;
            var18 = _closure1_slot21;
            var17 = _closure1_slot0;
            var21 = _closure1_slot2;
            var15 = 52;
            var15 = var21[var15];
            var15 = var17.bind(var4)(var15);
            var17 = var15.TextField;
            var15 = {'autoFocus': true, 'enableAndroidSanitizedInputWorkaround': true};
            var28 = true;
            var15['value'] = var19;
            var19 = function onChange(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var4 = arg1;
                    var2 = _closure2_slot8;
                    if(!(var2 !== var4)) { _fun0008_ip = 62; continue _fun0008 }
case 63:
                    var3 = _closure2_slot17;
                    var2 = _closure2_slot10;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var4, var2);
case 62:
                    var1 = undefined;
                    return var1;
                }
            };
            var15['onChange'] = var19;
            var19 = _closure1_slot15;
            var19 = var19.GUILD_CATEGORY;
            if(!(var32 !== var19)) { _fun0003_ip = 64; continue _fun0003 }
case 65:
            var19 = _closure1_slot15;
            var19 = var19.GUILD_FORUM;
            if(!(var32 !== var19)) { _fun0003_ip = 66; continue _fun0003 }
case 67:
            var29 = _closure1_slot0;
            var36 = _closure1_slot2;
            var19 = 26;
            var21 = var36[var19];
            var21 = var29.bind(var4)(var21);
            var25 = var21.intl;
            var21 = var25.string;
            var19 = var36[var19];
            var19 = var29.bind(var4)(var19);
            var19 = var19.t;
            var19 = var19.bw/b8E;
            var19 = var21.bind(var25)(var19);
            _fun0003_ip = 68; continue _fun0003;
case 66:
            var36 = _closure1_slot0;
            var37 = _closure1_slot2;
            var21 = 26;
            var25 = var37[var21];
            var25 = var36.bind(var4)(var25);
            var29 = var25.intl;
            var25 = var29.string;
            var21 = var37[var21];
            var21 = var36.bind(var4)(var21);
            var21 = var21.t;
            var21 = var21["5z1Xat"];
            var19 = var25.bind(var29)(var21);
case 68:
            _fun0003_ip = 69; continue _fun0003;
case 64:
            var36 = _closure1_slot0;
            var37 = _closure1_slot2;
            var21 = 26;
            var25 = var37[var21];
            var25 = var36.bind(var4)(var25);
            var29 = var25.intl;
            var25 = var29.string;
            var21 = var37[var21];
            var21 = var36.bind(var4)(var21);
            var21 = var21.t;
            var21 = var21.eTVbtx;
            var19 = var25.bind(var29)(var21);
case 69:
            var15['placeholder'] = var19;
            var15 = var18.bind(var4)(var17, var15);
            var8['children'] = var15;
            var11 = var12.bind(var4)(var11, var8);
            var8 = new Array(3);
            var8[0] = var11;
            var11 = var9 == var10;
            var10 = null;
            if(!var11) { _fun0003_ip = 70; continue _fun0003 }
case 71:
            var15 = _closure1_slot23;
            var12 = _closure1_slot22;
            var11 = {};
            var17 = _closure1_slot15;
            var17 = var17.GUILD_CATEGORY;
            var18 = null;
            if(!(var32 !== var17)) { _fun0003_ip = 72; continue _fun0003 }
case 73:
            var21 = _closure1_slot23;
            var37 = _closure1_slot0;
            var38 = _closure1_slot2;
            var17 = 53;
            var17 = var38[var17];
            var17 = var37.bind(var4)(var17);
            var19 = var17.TableRowGroup;
            var17 = {};
            var25 = 26;
            var29 = var38[var25];
            var29 = var37.bind(var4)(var29);
            var36 = var29.intl;
            var29 = var36.string;
            var25 = var38[var25];
            var25 = var37.bind(var4)(var25);
            var25 = var25.t;
            var25 = var25["7ZcXG2"];
            var25 = var29.bind(var36)(var25);
            var17['title'] = var25;
            var17['hasIcons'] = var28;
            var29 = _closure1_slot21;
            var37 = _closure1_slot28;
            var25 = {};
            var36 = _closure1_slot15;
            var36 = var36.GUILD_TEXT;
            var25['channelType'] = var36;
            var36 = _closure1_slot15;
            var36 = var36.GUILD_TEXT;
            var36 = var32 === var36;
            var25['selected'] = var36;
            var25['isPrivate'] = var24;
            var25['onPress'] = var35;
            var29 = var29.bind(var4)(var37, var25);
            var25 = new Array(6);
            var25[0] = var29;
            var36 = _closure1_slot21;
            var29 = {};
            var38 = _closure1_slot15;
            var38 = var38.GUILD_VOICE;
            var29['channelType'] = var38;
            var38 = _closure1_slot15;
            var38 = var38.GUILD_VOICE;
            var38 = var32 === var38;
            var29['selected'] = var38;
            var29['isPrivate'] = var24;
            var29['onPress'] = var35;
            var29 = var36.bind(var4)(var37, var29);
            var25[1] = var29;
            var36 = _closure1_slot21;
            var29 = {};
            var38 = _closure1_slot15;
            var38 = var38.GUILD_FORUM;
            var29['channelType'] = var38;
            var38 = _closure1_slot15;
            var38 = var38.GUILD_FORUM;
            var38 = var32 === var38;
            var29['selected'] = var38;
            var29['isPrivate'] = var24;
            var29['onPress'] = var35;
            var29 = var36.bind(var4)(var37, var29);
            var25[2] = var29;
            var29 = null;
            if(!var34) { _fun0003_ip = 74; continue _fun0003 }
case 75:
            var37 = _closure1_slot21;
            var36 = _closure1_slot28;
            var34 = {};
            var38 = _closure1_slot15;
            var38 = var38.GUILD_MEDIA;
            var34['channelType'] = var38;
            var38 = _closure1_slot15;
            var38 = var38.GUILD_MEDIA;
            var38 = var32 === var38;
            var34['selected'] = var38;
            var34['isPrivate'] = var24;
            var34['isBeta'] = var28;
            var34['onPress'] = var35;
            var29 = var37.bind(var4)(var36, var34);
case 74:
            var25[3] = var29;
            var29 = null;
            if(!var33) { _fun0003_ip = 76; continue _fun0003 }
case 77:
            var34 = _closure1_slot0;
            var33 = _closure1_slot2;
            var33 = var33[var22];
            var33 = var34.bind(var4)(var33);
            var33 = var33.CreateChannelMode;
            var33 = var33.PREMIUM_CHANNEL;
            var29 = null;
            if(!(var20 !== var33)) { _fun0003_ip = 76; continue _fun0003 }
case 78:
            var36 = _closure1_slot21;
            var34 = _closure1_slot28;
            var33 = {};
            var37 = _closure1_slot15;
            var37 = var37.GUILD_ANNOUNCEMENT;
            var33['channelType'] = var37;
            var37 = _closure1_slot15;
            var37 = var37.GUILD_ANNOUNCEMENT;
            var37 = var32 === var37;
            var33['selected'] = var37;
            var33['isPrivate'] = var24;
            var33['onPress'] = var35;
            var29 = var36.bind(var4)(var34, var33);
case 76:
            var25[4] = var29;
            var29 = null;
            if(!var30) { _fun0003_ip = 79; continue _fun0003 }
case 80:
            var29 = null;
            if(var24) { _fun0003_ip = 79; continue _fun0003 }
case 81:
            var34 = _closure1_slot21;
            var33 = _closure1_slot28;
            var30 = {};
            var36 = _closure1_slot15;
            var36 = var36.GUILD_STAGE_VOICE;
            var30['channelType'] = var36;
            var36 = _closure1_slot15;
            var36 = var36.GUILD_STAGE_VOICE;
            var36 = var32 === var36;
            var30['selected'] = var36;
            var30['isPrivate'] = var24;
            var30['onPress'] = var35;
            var29 = var34.bind(var4)(var33, var30);
case 79:
            var25[5] = var29;
            var17['children'] = var25;
            var18 = var21.bind(var4)(var19, var17);
case 72:
            var17 = new Array(3);
            var17[0] = var18;
            var21 = _closure1_slot21;
            var19 = _closure1_slot1;
            var25 = _closure1_slot2;
            var18 = 54;
            var18 = var25[var18];
            var19 = var19.bind(var4)(var18);
            var18 = {};
            var18['guildId'] = var23;
            var18['channelType'] = var32;
            var18 = var21.bind(var4)(var19, var18);
            var17[1] = var18;
            var18 = _closure1_slot15;
            var19 = var18.GUILD_STAGE_VOICE;
            var18 = null;
            if(!(var32 !== var19)) { _fun0003_ip = 82; continue _fun0003 }
case 83:
            var21 = _closure1_slot0;
            var19 = _closure1_slot2;
            var19 = var19[var22];
            var19 = var21.bind(var4)(var19);
            var19 = var19.CreateChannelMode;
            var19 = var19.PREMIUM_CHANNEL;
            var18 = null;
            if(!(var20 !== var19)) { _fun0003_ip = 82; continue _fun0003 }
case 84:
            var21 = _closure1_slot23;
            var20 = _closure1_slot22;
            var19 = {};
            var25 = _closure1_slot21;
            var23 = _closure1_slot0;
            var29 = _closure1_slot2;
            var22 = 53;
            var22 = var29[var22];
            var22 = var23.bind(var4)(var22);
            var23 = var22.TableRowGroup;
            var22 = {};
            var29 = _closure1_slot15;
            var29 = var29.GUILD_CATEGORY;
            if(!(var32 !== var29)) { _fun0003_ip = 85; continue _fun0003 }
case 86:
            var29 = _closure1_slot8;
            var29 = var29.bind(var4)(var32);
            var35 = _closure1_slot0;
            var36 = _closure1_slot2;
            var30 = 26;
            var33 = var36[var30];
            var33 = var35.bind(var4)(var33);
            var34 = var33.intl;
            var33 = var34.string;
            var30 = var36[var30];
            var30 = var35.bind(var4)(var30);
            var30 = var30.t;
            if(var29) { _fun0003_ip = 87; continue _fun0003 }
case 88:
            var29 = var30.hfbjIH;
            var29 = var33.bind(var34)(var29);
            _fun0003_ip = 89; continue _fun0003;
case 87:
            var30 = var30.cLjvKg;
            var29 = var33.bind(var34)(var30);
case 89:
            _fun0003_ip = 90; continue _fun0003;
case 85:
            var35 = _closure1_slot0;
            var36 = _closure1_slot2;
            var30 = 26;
            var33 = var36[var30];
            var33 = var35.bind(var4)(var33);
            var34 = var33.intl;
            var33 = var34.string;
            var30 = var36[var30];
            var30 = var35.bind(var4)(var30);
            var30 = var30.t;
            var30 = var30.RQUk61;
            var29 = var33.bind(var34)(var30);
case 90:
            var22['description'] = var29;
            var22['hasIcons'] = var28;
            var30 = _closure1_slot21;
            var29 = _closure1_slot0;
            var33 = _closure1_slot2;
            var28 = 55;
            var28 = var33[var28];
            var28 = var29.bind(var4)(var28);
            var29 = var28.TableSwitchRow;
            var28 = {};
            var33 = _closure1_slot15;
            var33 = var33.GUILD_CATEGORY;
            if(!(var32 !== var33)) { _fun0003_ip = 91; continue _fun0003 }
case 92:
            var36 = _closure1_slot0;
            var37 = _closure1_slot2;
            var33 = 26;
            var34 = var37[var33];
            var34 = var36.bind(var4)(var34);
            var35 = var34.intl;
            var34 = var35.string;
            var33 = var37[var33];
            var33 = var36.bind(var4)(var33);
            var33 = var33.t;
            var33 = var33.aUI70g;
            var33 = var34.bind(var35)(var33);
            _fun0003_ip = 93; continue _fun0003;
case 91:
            var37 = _closure1_slot0;
            var38 = _closure1_slot2;
            var34 = 26;
            var35 = var38[var34];
            var35 = var37.bind(var4)(var35);
            var36 = var35.intl;
            var35 = var36.string;
            var34 = var38[var34];
            var34 = var37.bind(var4)(var34);
            var34 = var34.t;
            var34 = var34.lEPAZ5;
            var33 = var35.bind(var36)(var34);
case 93:
            var28['label'] = var33;
            var35 = _closure1_slot21;
            var34 = _closure1_slot0;
            var36 = _closure1_slot2;
            var33 = 56;
            var33 = var36[var33];
            var33 = var34.bind(var4)(var33);
            var34 = var33.LockIcon;
            var33 = {};
            var33 = var35.bind(var4)(var34, var33);
            var28['icon'] = var33;
            var28['value'] = var24;
            var31 = function onValueChange(arg1) {
                var3 = _closure2_slot16;
                var1 = undefined;
                var2 = arg1;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var28['onValueChange'] = var31;
            var28 = var30.bind(var4)(var29, var28);
            var22['children'] = var28;
            var23 = var25.bind(var4)(var23, var22);
            var22 = new Array(2);
            var22[0] = var23;
            var23 = null;
            if(!var24) { _fun0003_ip = 94; continue _fun0003 }
case 95:
            var25 = _closure1_slot0;
            var24 = _closure1_slot2;
            var33 = 47;
            var24 = var24[var33];
            var25 = var25.bind(var4)(var24);
            var24 = var25.canCreatePrivateChannel;
            var24 = var24.bind(var25)(var32, var27, var26);
            var23 = null;
            if(var24) { _fun0003_ip = 94; continue _fun0003 }
case 96:
            var26 = _closure1_slot21;
            var25 = _closure1_slot6;
            var24 = {};
            var27 = var14.errorMessage;
            var24['style'] = var27;
            var29 = _closure1_slot21;
            var31 = _closure1_slot0;
            var30 = _closure1_slot2;
            var34 = 34;
            var27 = var30[var34];
            var27 = var31.bind(var4)(var27);
            var28 = var27.HelpMessage;
            var27 = {};
            var34 = var30[var34];
            var34 = var31.bind(var4)(var34);
            var34 = var34.HelpMessageTypes;
            var34 = var34.ERROR;
            var27['messageType'] = var34;
            var30 = var30[var33];
            var31 = var31.bind(var4)(var30);
            var30 = var31.getPrivateChannelHintText;
            var30 = var30.bind(var31)(var32);
            var27['children'] = var30;
            var27 = var29.bind(var4)(var28, var27);
            var24['children'] = var27;
            var23 = var26.bind(var4)(var25, var24);
case 94:
            var22[1] = var23;
            var19['children'] = var22;
            var18 = var21.bind(var4)(var20, var19);
case 82:
            var17[2] = var18;
            var11['children'] = var17;
            var10 = var15.bind(var4)(var12, var11);
case 70:
            var8[1] = var10;
            var10 = var16.message;
            var10 = var9 != var10;
            var9 = null;
            if(!var10) { _fun0003_ip = 97; continue _fun0003 }
case 98:
            var12 = _closure1_slot21;
            var11 = _closure1_slot6;
            var10 = {};
            var14 = var14.errorMessage;
            var10['style'] = var14;
            var15 = _closure1_slot21;
            var18 = _closure1_slot0;
            var19 = _closure1_slot2;
            var17 = 34;
            var13 = var19[var17];
            var13 = var18.bind(var4)(var13);
            var14 = var13.HelpMessage;
            var13 = {};
            var17 = var19[var17];
            var17 = var18.bind(var4)(var17);
            var17 = var17.HelpMessageTypes;
            var17 = var17.ERROR;
            var13['messageType'] = var17;
            var16 = var16.message;
            var13['children'] = var16;
            var13 = var15.bind(var4)(var14, var13);
            var10['children'] = var13;
            var9 = var12.bind(var4)(var11, var10);
case 97:
            var8[2] = var9;
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot29 = var2;
    var1 = function AddMembers(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var2 = _closure1_slot24;
            var4 = undefined;
            var14 = var2.bind(var4)();
            var5 = _closure1_slot4;
            var2 = var5.useRef;
            var2 = var2.bind(var5)(var3);
            var _closure2_slot1 = var2;
            var5 = _closure1_slot0;
            var19 = _closure1_slot2;
            var2 = 41;
            var2 = var19[var2];
            var5 = var5.bind(var4)(var2);
            var2 = var5.useNavigation;
            var13 = var2.bind(var5)();
            var _closure2_slot2 = var13;
            var7 = _closure1_slot11;
            var5 = var7.getGuild;
            var2 = var3.guildId;
            var11 = var5.bind(var7)(var2);
            var17 = _closure1_slot1;
            var5 = 37;
            var2 = var19[var5];
            var8 = var17.bind(var4)(var2);
            var12 = null;
            var7 = var12 != var11;
            var2 = 'Guild must not be null';
            var2 = var8.bind(var4)(var7, var2);
            var7 = _closure1_slot14;
            var2 = var7.getCurrentUser;
            var2 = var2.bind(var7)();
            var _closure2_slot3 = var2;
            var5 = var19[var5];
            var8 = var17.bind(var4)(var5);
            var7 = var12 != var2;
            var5 = 'AddMembers: user cannot be undefined';
            var5 = var8.bind(var4)(var7, var5);
            var8 = _closure1_slot12;
            var7 = var8.can;
            var5 = _closure1_slot17;
            var5 = var5.ADMINISTRATOR;
            var18 = var7.bind(var8)(var5, var11);
            var _closure2_slot4 = var18;
            var5 = _closure1_slot9;
            var16 = var5.bind(var4)(var11, var2);
            var _closure2_slot5 = var16;
            var8 = _closure1_slot4;
            var7 = var8.useState;
            var5 = {};
            var8 = var7.bind(var8)(var5);
            var7 = _closure1_slot3;
            var5 = 2;
            var9 = var7.bind(var4)(var8, var5);
            var8 = 0;
            var10 = var9[var8];
            var _closure2_slot6 = var10;
            var7 = 1;
            var9 = var9[var7];
            var15 = 42;
            var15 = var19[var15];
            var15 = var17.bind(var4)(var15);
            var3 = var3.onChannelCreated;
            var17 = var15.bind(var4)(var3);
            var15 = _closure1_slot3;
            var3 = 3;
            var3 = var15.bind(var4)(var17, var3);
            var8 = var3[var8];
            var _closure2_slot7 = var8;
            var17 = var3[var7];
            var15 = var3[var5];
            var _closure2_slot8 = var15;
            var7 = _closure1_slot4;
            var5 = var7.useEffect;
            var3 = function() {
                var2 = _closure2_slot1;
                var1 = _closure2_slot0;
                var2['current'] = var1;
                var1 = undefined;
                return var1;
            };
            var3 = var5.bind(var7)(var3);
            var7 = _closure1_slot4;
            var5 = var7.useCallback;
            var3 = new Array(6);
            var3[0] = var18;
            var3[1] = var16;
            var3[2] = var13;
            var3[3] = var15;
            var3[4] = var10;
            var2 = var2.id;
            var3[5] = var2;
            var2 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var1 = _closure2_slot1;
                    var1 = var1.current;
                    var8 = var1.guildId;
                    var5 = var1.channelType;
                    var _closure3_slot0 = var5;
                    var10 = var1.name;
                    var9 = var1.categoryId;
                    var7 = var1.onChannelCreated;
                    var4 = var1.flags;
                    var12 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var14 = 49;
                    var11 = var1[var14];
                    var1 = undefined;
                    var15 = var12.bind(var1)(var11);
                    var13 = var15.permissionOverwritesForRoles;
                    var17 = new Array(0);
                    var16 = true;
                    var20 = var15;
                    var19 = var8;
                    var18 = var5;
                    var11 = var20[var13](var19, var18, var17, var16, var15);
                    var _closure3_slot1 = var11;
                    var12 = global;
                    var15 = var12.Object;
                    var13 = var15.values;
                    var12 = _closure2_slot6;
                    var13 = var13.bind(var15)(var12);
                    var12 = var13.forEach;
                    var6 = function(arg1) {
                        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                            var1 = arg1;
                            var4 = var1.row;
                            var2 = var4.id;
                            var1 = null;
                            var1 = var1 != var2;
                            if(!var1) { _fun0011_ip = 22; continue _fun0011 }
case 99:
                            var3 = var4.id;
                            var2 = '';
                            var1 = var2 !== var3;
case 22:
                            if(!var1) { _fun0011_ip = 100; continue _fun0011 }
case 101:
                            var2 = var4.rowType;
                            var1 = _closure1_slot20;
                            var1 = var1.ROLE;
                            if(!(var2 !== var1)) { _fun0011_ip = 102; continue _fun0011 }
case 103:
                            var2 = var4.rowType;
                            var1 = _closure1_slot20;
                            var1 = var1.MEMBER;
                            if(!(var2 === var1)) { _fun0011_ip = 100; continue _fun0011 }
case 104:
                            var3 = _closure3_slot1;
                            var2 = var3.push;
                            var8 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var6 = 49;
                            var7 = var7[var6];
                            var6 = undefined;
                            var8 = var8.bind(var6)(var7);
                            var7 = var8.permissionOverwriteForUser;
                            var6 = var4.id;
                            var1 = _closure3_slot0;
                            var1 = var7.bind(var8)(var6, var1);
                            var1 = var2.bind(var3)(var1);
                            _fun0011_ip = 100; continue _fun0011;
case 102:
                            var3 = _closure3_slot1;
                            var2 = var3.push;
                            var7 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var5 = 49;
                            var6 = var6[var5];
                            var5 = undefined;
                            var6 = var7.bind(var5)(var6);
                            var5 = var6.permissionOverwriteForRole;
                            var4 = var4.id;
                            var1 = _closure3_slot0;
                            var1 = var5.bind(var6)(var4, var1);
                            var1 = var2.bind(var3)(var1);
case 100:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var6 = var12.bind(var13)(var6);
                    var6 = _closure2_slot4;
                    if(var6) { _fun0010_ip = 105; continue _fun0010 }
case 106:
                    var6 = _closure2_slot5;
case 105:
                    if(var6) { _fun0010_ip = 36; continue _fun0010 }
case 107:
                    var12 = var11.push;
                    var13 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var6 = var6[var14];
                    var14 = var13.bind(var1)(var6);
                    var13 = var14.permissionOverwriteForUser;
                    var6 = _closure2_slot3;
                    var6 = var6.id;
                    var6 = var13.bind(var14)(var6, var5);
                    var6 = var12.bind(var11)(var6);
case 36:
                    var6 = {};
                    var6['overwrites'] = var11;
                    var6['guildId'] = var8;
                    var6['channelType'] = var5;
                    var6['name'] = var10;
                    var6['categoryId'] = var9;
                    var6['flags'] = var4;
                    var4 = _closure1_slot15;
                    var4 = var4.GUILD_STAGE_VOICE;
                    if(!(var5 !== var4)) { _fun0010_ip = 108; continue _fun0010 }
case 109:
                    var4 = _closure2_slot8;
                    var4 = var4.bind(var1)(var6);
                    _fun0010_ip = 110; continue _fun0010;
case 108:
                    var5 = _closure2_slot2;
                    var4 = var5.push;
                    var2 = _closure1_slot27;
                    var3 = var2.ADD_MODERATORS;
                    var2 = {};
                    var19 = var2;
                    var18 = var6;
                    var6 = copyDataProperties(var19, var18);
                    var6 = 'guildId';
                    var2[5] = var8;
                    var6 = 'onChannelCreated';
                    var2[5] = var7;
                    var2 = var4.bind(var5)(var3, var2);
case 110:
                    return var1;
                }
            };
            var7 = var5.bind(var7)(var2, var3);
            var _closure2_slot9 = var7;
            var5 = _closure1_slot4;
            var3 = var5.useLayoutEffect;
            var2 = new Array(4);
            var2[0] = var13;
            var2[1] = var10;
            var2[2] = var8;
            var2[3] = var7;
            var1 = function() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var1 = _closure2_slot1;
                    var1 = var1.current;
                    var4 = var1.channelType;
                    var10 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var9 = 26;
                    var7 = var2[var9];
                    var1 = undefined;
                    var7 = var10.bind(var1)(var7);
                    var8 = var7.intl;
                    var7 = var8.string;
                    var2 = var2[var9];
                    var2 = var10.bind(var1)(var2);
                    var2 = var2.t;
                    var2 = var2["5Wxrcd"];
                    var2 = var7.bind(var8)(var2);
                    var _closure3_slot0 = var2;
                    var2 = global;
                    var8 = var2.Object;
                    var7 = var8.keys;
                    var2 = _closure2_slot6;
                    var2 = var7.bind(var8)(var2);
                    var7 = var2.length;
                    var2 = 0;
                    if(!(var7 > var2)) { _fun0012_ip = 111; continue _fun0012 }
case 112:
                    var2 = _closure1_slot15;
                    var2 = var2.GUILD_STAGE_VOICE;
                    if(!(var4 !== var2)) { _fun0012_ip = 47; continue _fun0012 }
case 113:
                    var8 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var4 = var2[var9];
                    var4 = var8.bind(var1)(var4);
                    var7 = var4.intl;
                    var4 = var7.string;
                    var2 = var2[var9];
                    var2 = var8.bind(var1)(var2);
                    var2 = var2.t;
                    var2 = var2.CumH4u;
                    var2 = var4.bind(var7)(var2);
                    _fun0012_ip = 114; continue _fun0012;
case 47:
                    var8 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var4 = var3[var9];
                    var4 = var8.bind(var1)(var4);
                    var7 = var4.intl;
                    var4 = var7.string;
                    var3 = var3[var9];
                    var3 = var8.bind(var1)(var3);
                    var3 = var3.t;
                    var3 = var3.PDTjLN;
                    var2 = var4.bind(var7)(var3);
case 114:
                    _closure3_slot0 = var2;
case 111:
                    var4 = _closure2_slot2;
                    var3 = var4.setOptions;
                    var2 = {};
                    var5 = _closure2_slot7;
                    if(var5) { _fun0012_ip = 115; continue _fun0012 }
case 26:
                    var5 = function() {
                        var4 = _closure1_slot21;
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 46;
                        var1 = var3[var1];
                        var3 = undefined;
                        var1 = var2.bind(var3)(var1);
                        var2 = var1.HeaderActionButton;
                        var1 = {};
                        var5 = _closure3_slot0;
                        var1['text'] = var5;
                        var5 = _closure2_slot9;
                        var1['onPress'] = var5;
                        var1 = var4.bind(var3)(var2, var1);
                        return var1;
                    };
                    _fun0012_ip = 116; continue _fun0012;
case 115:
                    var5 = function() {
                        var4 = _closure1_slot21;
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 44;
                        var1 = var3[var1];
                        var3 = undefined;
                        var1 = var2.bind(var3)(var1);
                        var2 = var1.HeaderSubmittingIndicator;
                        var1 = {};
                        var1 = var4.bind(var3)(var2, var1);
                        return var1;
                    };
case 116:
                    var2['headerRight'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var1 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot23;
            var2 = _closure1_slot6;
            var1 = {};
            var5 = var14.addMembersContainer;
            var1['style'] = var5;
            var5 = var17.message;
            var5 = var12 != var5;
            var7 = null;
            if(!var5) { _fun0009_ip = 117; continue _fun0009 }
case 118:
            var8 = var17.message;
            var5 = '';
            var7 = null;
            if(!(var5 !== var8)) { _fun0009_ip = 117; continue _fun0009 }
case 119:
            var13 = _closure1_slot21;
            var8 = _closure1_slot6;
            var5 = {};
            var14 = var14.errorMessage;
            var5['style'] = var14;
            var16 = _closure1_slot21;
            var19 = _closure1_slot0;
            var20 = _closure1_slot2;
            var18 = 34;
            var14 = var20[var18];
            var14 = var19.bind(var4)(var14);
            var15 = var14.HelpMessage;
            var14 = {};
            var18 = var20[var18];
            var18 = var19.bind(var4)(var18);
            var18 = var18.HelpMessageTypes;
            var18 = var18.ERROR;
            var14['messageType'] = var18;
            var17 = var17.message;
            var14['children'] = var17;
            var14 = var16.bind(var4)(var15, var14);
            var5['children'] = var14;
            var7 = var13.bind(var4)(var8, var5);
case 117:
            var5 = new Array(2);
            var5[0] = var7;
            var8 = _closure1_slot21;
            var7 = _closure1_slot0;
            var13 = _closure1_slot2;
            var6 = 57;
            var6 = var13[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.AddMembersBody;
            var6 = {};
            var6['channel'] = var12;
            var6['guild'] = var11;
            var6['pendingAdditions'] = var10;
            var6['setPendingAdditions'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot30 = var1;
    var1 = function getSceneTitle(arg1, arg2) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var5 = arg1;
            var1 = null;
            var2 = arg2;
            if(!(var1 == var2)) { _fun0013_ip = 120; continue _fun0013 }
case 40:
            if(!(var1 !== var5)) { _fun0013_ip = 121; continue _fun0013 }
case 122:
            var2 = _closure1_slot15;
            var2 = var2.GUILD_TEXT;
            if(!(var2 !== var5)) { _fun0013_ip = 121; continue _fun0013 }
case 101:
            var2 = _closure1_slot15;
            var2 = var2.GUILD_VOICE;
            if(!(var2 !== var5)) { _fun0013_ip = 121; continue _fun0013 }
case 123:
            var2 = _closure1_slot15;
            var2 = var2.GUILD_STAGE_VOICE;
            if(!(var2 !== var5)) { _fun0013_ip = 121; continue _fun0013 }
case 124:
            var2 = _closure1_slot15;
            var2 = var2.GUILD_ANNOUNCEMENT;
            if(!(var2 !== var5)) { _fun0013_ip = 121; continue _fun0013 }
case 125:
            var2 = _closure1_slot15;
            var2 = var2.GUILD_FORUM;
            if(!(var2 !== var5)) { _fun0013_ip = 121; continue _fun0013 }
case 126:
            var2 = _closure1_slot15;
            var2 = var2.GUILD_MEDIA;
            if(!(var2 !== var5)) { _fun0013_ip = 121; continue _fun0013 }
case 127:
            var2 = _closure1_slot15;
            var2 = var2.GUILD_CATEGORY;
            if(!(var2 !== var5)) { _fun0013_ip = 128; continue _fun0013 }
case 129:
            var2 = global;
            var4 = var2.Error;
            var2 = var2.HermesInternal;
            var3 = var2.concat;
            var2 = 'Unsupported channelType: ';
            var7 = var3.bind(var2)(var5);
            var3 = var4.prototype;
            var3 = Object.create(var3, {constructor: {value: var4}});
            var8 = var3;
            var2 = new var8[var4](var7, var6);
            var2 = var2 instanceof Object ? var2 : var3;
            throw var2;
case 128:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 26;
            var2 = var6[var1];
            var4 = undefined;
            var2 = var5.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.ISN+NM;
            var1 = var2.bind(var3)(var1);
            return var1;
case 121:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 26;
            var2 = var6[var1];
            var4 = undefined;
            var2 = var5.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.fUYU+j;
            var1 = var2.bind(var3)(var1);
            return var1;
case 120:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 26;
            var2 = var6[var1];
            var4 = undefined;
            var2 = var5.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.dEaPc4;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var _closure1_slot31 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var5);
    var12 = 0;
    var5 = var7[var12];
    var1 = undefined;
    var5 = var15.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var13 = 1;
    var8 = var7[var13];
    var5 = metroImportAll;
    var5 = var5.bind(var1)(var8);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.ScrollView;
    var _closure1_slot5 = var8;
    var5 = var5.View;
    var _closure1_slot6 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.CREATEABLE_NON_VOCAL_CHANNEL_NAME_TYPES;
    var _closure1_slot7 = var8;
    var5 = var5.isGuildVocalChannelType;
    var _closure1_slot8 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.isGuildOwner;
    var _closure1_slot9 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var15.bind(var1)(var5);
    var _closure1_slot10 = var5;
    var5 = 6;
    var5 = var7[var5];
    var5 = var15.bind(var1)(var5);
    var _closure1_slot11 = var5;
    var5 = 7;
    var5 = var7[var5];
    var5 = var15.bind(var1)(var5);
    var _closure1_slot12 = var5;
    var5 = 8;
    var5 = var7[var5];
    var5 = var15.bind(var1)(var5);
    var _closure1_slot13 = var5;
    var5 = 9;
    var5 = var7[var5];
    var5 = var15.bind(var1)(var5);
    var _closure1_slot14 = var5;
    var5 = 10;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.ChannelTypes;
    var _closure1_slot15 = var8;
    var9 = var5.GuildFeatures;
    var _closure1_slot16 = var9;
    var9 = var5.Permissions;
    var _closure1_slot17 = var9;
    var9 = var5.AnalyticEvents;
    var _closure1_slot18 = var9;
    var5 = var5.HelpdeskArticles;
    var _closure1_slot19 = var5;
    var5 = 11;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.RowType;
    var _closure1_slot20 = var5;
    var5 = 12;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var9 = var5.jsx;
    var _closure1_slot21 = var9;
    var9 = var5.Fragment;
    var _closure1_slot22 = var9;
    var5 = var5.jsxs;
    var _closure1_slot23 = var5;
    var5 = 13;
    var5 = var7[var5];
    var10 = var6.bind(var1)(var5);
    var9 = var10.createStyles;
    var5 = {};
    var11 = {};
    var14 = 14;
    var14 = var7[var14];
    var14 = var15.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_BASE_LOW;
    var11['backgroundColor'] = var14;
    var11['flex'] = var13;
    var5['addMembersContainer'] = var11;
    var11 = {};
    var11['marginBottom'] = var12;
    var5['errorMessage'] = var11;
    var11 = {'flexDirection': 'row', 'alignItems': 'center'};
    var5['flexRow'] = var11;
    var11 = {'flex': 1, 'flexDirection': 'row'};
    var5['horizontalContainer'] = var11;
    var5 = var9.bind(var10)(var5);
    var _closure1_slot24 = var5;
    var5 = {};
    var10 = var8.GUILD_TEXT;
    var9 = {};
    var11 = 15;
    var11 = var7[var11];
    var11 = var6.bind(var1)(var11);
    var11 = var11.TextIcon;
    var9['IconComponent'] = var11;
    var5[9] = var9;
    var10 = var8.GUILD_FORUM;
    var9 = {};
    var11 = 16;
    var11 = var7[var11];
    var11 = var6.bind(var1)(var11);
    var11 = var11.ForumIcon;
    var9['IconComponent'] = var11;
    var5[9] = var9;
    var10 = var8.GUILD_VOICE;
    var9 = {};
    var11 = 17;
    var11 = var7[var11];
    var11 = var6.bind(var1)(var11);
    var11 = var11.VoiceNormalIcon;
    var9['IconComponent'] = var11;
    var5[9] = var9;
    var10 = var8.GUILD_STAGE_VOICE;
    var9 = {};
    var11 = 18;
    var11 = var7[var11];
    var11 = var6.bind(var1)(var11);
    var11 = var11.StageIcon;
    var9['IconComponent'] = var11;
    var5[9] = var9;
    var10 = var8.GUILD_ANNOUNCEMENT;
    var9 = {};
    var11 = 19;
    var11 = var7[var11];
    var11 = var6.bind(var1)(var11);
    var11 = var11.AnnouncementsIcon;
    var9['IconComponent'] = var11;
    var5[9] = var9;
    var11 = var8.GUILD_MEDIA;
    var9 = {};
    var10 = 20;
    var12 = var7[var10];
    var12 = var6.bind(var1)(var12);
    var12 = var12.ImageIcon;
    var9['IconComponent'] = var12;
    var5[10] = var9;
    var _closure1_slot25 = var5;
    var5 = {};
    var11 = var8.GUILD_TEXT;
    var9 = {};
    var12 = 21;
    var12 = var7[var12];
    var12 = var6.bind(var1)(var12);
    var12 = var12.TextLockIcon;
    var9['IconComponent'] = var12;
    var5[10] = var9;
    var11 = var8.GUILD_FORUM;
    var9 = {};
    var12 = 22;
    var12 = var7[var12];
    var12 = var6.bind(var1)(var12);
    var12 = var12.ForumLockIcon;
    var9['IconComponent'] = var12;
    var5[10] = var9;
    var11 = var8.GUILD_VOICE;
    var9 = {};
    var12 = 23;
    var12 = var7[var12];
    var12 = var6.bind(var1)(var12);
    var12 = var12.VoiceLockIcon;
    var9['IconComponent'] = var12;
    var5[10] = var9;
    var11 = var8.GUILD_STAGE_VOICE;
    var9 = {};
    var12 = 24;
    var12 = var7[var12];
    var12 = var6.bind(var1)(var12);
    var12 = var12.StageLockIcon;
    var9['IconComponent'] = var12;
    var5[10] = var9;
    var11 = var8.GUILD_ANNOUNCEMENT;
    var9 = {};
    var12 = 25;
    var12 = var7[var12];
    var12 = var6.bind(var1)(var12);
    var12 = var12.AnnouncementsLockIcon;
    var9['IconComponent'] = var12;
    var5[10] = var9;
    var9 = var8.GUILD_MEDIA;
    var8 = {};
    var10 = var7[var10];
    var10 = var6.bind(var1)(var10);
    var10 = var10.ImageIcon;
    var8['IconComponent'] = var10;
    var5[8] = var8;
    var _closure1_slot26 = var5;
    var5 = {};
    var8 = 'CREATE_CHANNEL';
    var5['CREATE_CHANNEL'] = var8;
    var8 = 'ADD_MEMBERS';
    var5['ADD_MEMBERS'] = var8;
    var8 = 'ADD_MODERATORS';
    var5['ADD_MODERATORS'] = var8;
    var _closure1_slot27 = var5;
    var5 = 62;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'components_native/CreateChannelModal.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function CreateChannelModal(arg1) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var5 = _closure1_slot1;
        var7 = _closure1_slot2;
        var3 = 60;
        var3 = var7[var3];
        var4 = undefined;
        var3 = var5.bind(var4)(var3);
        var2 = function() {
            var1 = {};
            var2 = _closure1_slot27;
            var2 = var2.CREATE_CHANNEL;
            var1['name'] = var2;
            var2 = {};
            var16 = _closure2_slot0;
            var17 = var2;
            var3 = copyDataProperties(var17, var16);
            var1['params'] = var2;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = {};
            var3 = {};
            var5 = _closure1_slot27;
            var7 = var5.CREATE_CHANNEL;
            var5 = {};
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var13 = 58;
            var8 = var12[var13];
            var10 = undefined;
            var8 = var11.bind(var10)(var8);
            var8 = var8.ImpressionNames;
            var8 = var8.CHANNEL_ADD_INFO;
            var5['impressionName'] = var8;
            var8 = {};
            var9 = var12[var13];
            var9 = var11.bind(var10)(var9);
            var9 = var9.ImpressionGroups;
            var9 = var9.CHANNEL_ADD_FLOW;
            var8['impression_group'] = var9;
            var5['impressionProperties'] = var8;
            var8 = function render(arg1) {
                var4 = _closure1_slot21;
                var3 = _closure1_slot29;
                var2 = {};
                var5 = arg1;
                var6 = var2;
                var1 = copyDataProperties(var6, var5);
                var1 = undefined;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var5['render'] = var8;
            var3[6] = var5;
            var5 = _closure1_slot27;
            var8 = var5.ADD_MEMBERS;
            var5 = {};
            var7 = 26;
            var9 = var12[var7];
            var9 = var11.bind(var10)(var9);
            var15 = var9.intl;
            var14 = var15.string;
            var9 = var12[var7];
            var9 = var11.bind(var10)(var9);
            var9 = var9.t;
            var9 = var9.dMJ3Y6;
            var9 = var14.bind(var15)(var9);
            var5['headerTitle'] = var9;
            var9 = var12[var13];
            var9 = var11.bind(var10)(var9);
            var9 = var9.ImpressionNames;
            var9 = var9.CHANNEL_ADD_MEMBERS;
            var5['impressionName'] = var9;
            var9 = {};
            var13 = var12[var13];
            var13 = var11.bind(var10)(var13);
            var13 = var13.ImpressionGroups;
            var13 = var13.CHANNEL_ADD_FLOW;
            var9['impression_group'] = var13;
            var5['impressionProperties'] = var9;
            var9 = function render(arg1) {
                var4 = _closure1_slot21;
                var3 = _closure1_slot30;
                var2 = {};
                var5 = arg1;
                var6 = var2;
                var1 = copyDataProperties(var6, var5);
                var1 = undefined;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var5['render'] = var9;
            var3[7] = var5;
            var4 = _closure1_slot27;
            var5 = var4.ADD_MODERATORS;
            var4 = {};
            var8 = var12[var7];
            var8 = var11.bind(var10)(var8);
            var9 = var8.intl;
            var8 = var9.string;
            var7 = var12[var7];
            var7 = var11.bind(var10)(var7);
            var7 = var7.t;
            var7 = var7.n3bcy8;
            var7 = var8.bind(var9)(var7);
            var4['headerTitle'] = var7;
            var6 = function render(arg1) {
                var4 = _closure1_slot21;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 59;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var6 = arg1;
                var7 = var1;
                var5 = copyDataProperties(var7, var6);
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var4['render'] = var6;
            var3[4] = var4;
            var1['screens'] = var3;
            var1['initialStack'] = var2;
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        var6 = var2.screens;
        var5 = var2.initialStack;
        var3 = _closure1_slot21;
        var2 = _closure1_slot0;
        var1 = 61;
        var1 = var7[var1];
        var1 = var2.bind(var4)(var1);
        var2 = var1.Navigator;
        var1 = {};
        var1['screens'] = var6;
        var1['initialRouteStack'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['default'] = var4;
    var3['CreateChannel'] = var2;
    return var1;
})();