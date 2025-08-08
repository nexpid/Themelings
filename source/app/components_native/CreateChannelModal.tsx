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
 0:
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
            if(var1) { _fun0001_ip = 68; continue _fun0001 }
 62:
            var1 = _closure1_slot25;
            _fun0001_ip = 72; continue _fun0001;
 68:
            var1 = _closure1_slot26;
 72:
            var1 = var1[var3];
            var18 = var1.IconComponent;
            var1 = _closure1_slot15;
            var1 = var1.GUILD_TEXT;
            if(!(var1 !== var3)) { _fun0001_ip = 1002; continue _fun0001 }
 99:
            var1 = _closure1_slot15;
            var1 = var1.GUILD_VOICE;
            if(!(var1 !== var3)) { _fun0001_ip = 884; continue _fun0001 }
 116:
            var1 = _closure1_slot15;
            var1 = var1.GUILD_FORUM;
            if(!(var1 !== var3)) { _fun0001_ip = 763; continue _fun0001 }
 133:
            var1 = _closure1_slot15;
            var1 = var1.GUILD_ANNOUNCEMENT;
            if(!(var1 !== var3)) { _fun0001_ip = 642; continue _fun0001 }
 150:
            var1 = _closure1_slot15;
            var1 = var1.GUILD_STAGE_VOICE;
            if(!(var1 !== var3)) { _fun0001_ip = 521; continue _fun0001 }
 167:
            var1 = _closure1_slot15;
            var2 = var1.GUILD_MEDIA;
            var1 = undefined;
            if(!(var2 === var3)) { _fun0001_ip = 1118; continue _fun0001 }
 186:
            var2 = {};
            var17 = _closure1_slot0;
            var23 = _closure1_slot2;
            var16 = 26;
            var3 = var23[var16];
            var3 = var17.bind(var4)(var3);
            var7 = var3.intl;
            var5 = var7.string;
            var3 = var23[var16];
            var3 = var17.bind(var4)(var3);
            var3 = var3.t;
            var3 = var3.6x6fVl;
            var3 = var5.bind(var7)(var3);
            var2['label'] = var3;
            var7 = _closure1_slot23;
            var5 = _closure1_slot22;
            var3 = {};
            var14 = _closure1_slot21;
            var9 = 27;
            var9 = var23[var9];
            var9 = var17.bind(var4)(var9);
            var13 = var9.Text;
            var9 = {'variant': 'text-xs/normal', 'color': 'text-muted'};
            var19 = 'text-xs/normal';
            var15 = var23[var16];
            var15 = var17.bind(var4)(var15);
            var21 = var15.intl;
            var20 = var21.string;
            var15 = var23[var16];
            var15 = var17.bind(var4)(var15);
            var15 = var15.t;
            var15 = var15.JyCrwc;
            var15 = var20.bind(var21)(var15);
            var9['children'] = var15;
            var13 = var14.bind(var4)(var13, var9);
            var9 = new Array(2);
            var9[0] = var13;
            var15 = _closure1_slot21;
            var13 = 28;
            var13 = var23[var13];
            var13 = var17.bind(var4)(var13);
            var14 = var13.TextWithIOSLinkWorkaround;
            var13 = {};
            var13['variant'] = var19;
            var19 = var23[var16];
            var19 = var17.bind(var4)(var19);
            var20 = var19.intl;
            var19 = var20.format;
            var16 = var23[var16];
            var16 = var17.bind(var4)(var16);
            var16 = var16.t;
            var17 = var16.2Sapx8;
            var16 = {};
            var22 = _closure1_slot1;
            var21 = 29;
            var21 = var23[var21];
            var23 = var22.bind(var4)(var21);
            var22 = var23.getCreatorSupportArticleURL;
            var21 = _closure1_slot19;
            var21 = var21.MEDIA_CHANNEL;
            var21 = var22.bind(var23)(var21);
            var16['hcArticleUrl'] = var21;
            var16 = var19.bind(var20)(var17, var16);
            var13['children'] = var16;
            var13 = var15.bind(var4)(var14, var13);
            var9[1] = var13;
            var3['children'] = var9;
            var3 = var7.bind(var4)(var5, var3);
            var2['description'] = var3;
            var1 = var2;
            _fun0001_ip = 1118; continue _fun0001;
 521:
            var2 = {};
            var9 = _closure1_slot0;
            var13 = _closure1_slot2;
            var3 = 26;
            var5 = var13[var3];
            var5 = var9.bind(var4)(var5);
            var14 = var5.intl;
            var7 = var14.string;
            var5 = var13[var3];
            var5 = var9.bind(var4)(var5);
            var5 = var5.t;
            var5 = var5.pNWst7;
            var5 = var7.bind(var14)(var5);
            var2['label'] = var5;
            var5 = var13[var3];
            var5 = var9.bind(var4)(var5);
            var7 = var5.intl;
            var5 = var7.string;
            var3 = var13[var3];
            var3 = var9.bind(var4)(var3);
            var3 = var3.t;
            var3 = var3.VPAwgo;
            var3 = var5.bind(var7)(var3);
            var2['description'] = var3;
            var1 = var2;
            _fun0001_ip = 1118; continue _fun0001;
 642:
            var2 = {};
            var9 = _closure1_slot0;
            var13 = _closure1_slot2;
            var3 = 26;
            var5 = var13[var3];
            var5 = var9.bind(var4)(var5);
            var14 = var5.intl;
            var7 = var14.string;
            var5 = var13[var3];
            var5 = var9.bind(var4)(var5);
            var5 = var5.t;
            var5 = var5.qr9dEB;
            var5 = var7.bind(var14)(var5);
            var2['label'] = var5;
            var5 = var13[var3];
            var5 = var9.bind(var4)(var5);
            var7 = var5.intl;
            var5 = var7.string;
            var3 = var13[var3];
            var3 = var9.bind(var4)(var3);
            var3 = var3.t;
            var3 = var3.gBkfzs;
            var3 = var5.bind(var7)(var3);
            var2['description'] = var3;
            var1 = var2;
            _fun0001_ip = 1118; continue _fun0001;
 763:
            var2 = {};
            var9 = _closure1_slot0;
            var13 = _closure1_slot2;
            var3 = 26;
            var5 = var13[var3];
            var5 = var9.bind(var4)(var5);
            var14 = var5.intl;
            var7 = var14.string;
            var5 = var13[var3];
            var5 = var9.bind(var4)(var5);
            var5 = var5.t;
            var5 = var5.eAVIDw;
            var5 = var7.bind(var14)(var5);
            var2['label'] = var5;
            var5 = var13[var3];
            var5 = var9.bind(var4)(var5);
            var7 = var5.intl;
            var5 = var7.string;
            var3 = var13[var3];
            var3 = var9.bind(var4)(var3);
            var3 = var3.t;
            var3 = var3.iZ5pgo;
            var3 = var5.bind(var7)(var3);
            var2['description'] = var3;
            var1 = var2;
            _fun0001_ip = 1118; continue _fun0001;
 884:
            var2 = {};
            var9 = _closure1_slot0;
            var13 = _closure1_slot2;
            var3 = 26;
            var5 = var13[var3];
            var5 = var9.bind(var4)(var5);
            var14 = var5.intl;
            var7 = var14.string;
            var5 = var13[var3];
            var5 = var9.bind(var4)(var5);
            var5 = var5.t;
            var5 = var5.Sx55Oj;
            var5 = var7.bind(var14)(var5);
            var2['label'] = var5;
            var5 = var13[var3];
            var5 = var9.bind(var4)(var5);
            var7 = var5.intl;
            var5 = var7.string;
            var3 = var13[var3];
            var3 = var9.bind(var4)(var3);
            var3 = var3.t;
            var3 = var3.pqfkoK;
            var3 = var5.bind(var7)(var3);
            var2['description'] = var3;
            var1 = var2;
            _fun0001_ip = 1118; continue _fun0001;
 1002:
            var2 = {};
            var9 = _closure1_slot0;
            var13 = _closure1_slot2;
            var3 = 26;
            var5 = var13[var3];
            var5 = var9.bind(var4)(var5);
            var14 = var5.intl;
            var7 = var14.string;
            var5 = var13[var3];
            var5 = var9.bind(var4)(var5);
            var5 = var5.t;
            var5 = var5.pnuRXF;
            var5 = var7.bind(var14)(var5);
            var2['label'] = var5;
            var5 = var13[var3];
            var5 = var9.bind(var4)(var5);
            var7 = var5.intl;
            var5 = var7.string;
            var3 = var13[var3];
            var3 = var9.bind(var4)(var3);
            var3 = var3.t;
            var3 = var3.oG6WsL;
            var3 = var5.bind(var7)(var3);
            var2['description'] = var3;
            var1 = var2;
 1118:
            var14 = var1.label;
            var5 = var1.description;
            var3 = _closure1_slot21;
            var7 = _closure1_slot0;
            var13 = _closure1_slot2;
            var1 = 30;
            var1 = var13[var1];
            var1 = var7.bind(var4)(var1);
            var2 = var1.TableRow;
            var1 = {};
            var6 = function onPress() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot0;
                    var2 = !var2;
                    if(!var2) { _fun0002_ip = 28; continue _fun0002 }
 13:
                    var3 = _closure2_slot2;
                    var2 = _closure2_slot1;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
 28:
                    var1 = undefined;
                    return var1;
                }
            };
            var1['onPress'] = var6;
            var6 = 'radio';
            var1['accessibilityRole'] = var6;
            var6 = {};
            var6['selected'] = var12;
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
            var6 = 31;
            var6 = var13[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.FormRadio;
            var6 = {};
            var6['selected'] = var12;
            var6 = var9.bind(var4)(var7, var6);
            var1['trailing'] = var6;
            var7 = true;
            var6 = var14;
            if(!(var7 === var8)) { _fun0001_ip = 1424; continue _fun0001 }
 1287:
            var9 = _closure1_slot23;
            var8 = _closure1_slot6;
            var7 = {};
            var10 = var10.horizontalContainer;
            var7['style'] = var10;
            var13 = _closure1_slot21;
            var15 = _closure1_slot0;
            var16 = _closure1_slot2;
            var10 = 32;
            var10 = var16[var10];
            var10 = var15.bind(var4)(var10);
            var12 = var10.FormLabel;
            var10 = {};
            var10['text'] = var14;
            var12 = var13.bind(var4)(var12, var10);
            var10 = new Array(2);
            var10[0] = var12;
            var13 = _closure1_slot21;
            var12 = _closure1_slot1;
            var14 = 33;
            var11 = var16[var14];
            var12 = var12.bind(var4)(var11);
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
 1424:
            var1['label'] = var6;
            var1['subLabel'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot28 = var1;
    var2 = function CreateChannel(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
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
            var _closure2_slot17 = var4;
            var2 = _closure1_slot24;
            var13 = var2.bind(var4)();
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 34;
            var2 = var5[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.bind(var4)();
            var6 = var2.insets;
            var3 = _closure1_slot0;
            var2 = 35;
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
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var3 = _closure2_slot1;
                    var1 = null;
                    var3 = var1 != var3;
                    if(!var3) { _fun0004_ip = 37; continue _fun0004 }
 16:
                    var4 = _closure1_slot10;
                    var3 = var4.getChannel;
                    var2 = _closure2_slot1;
                    var1 = var3.bind(var4)(var2);
 37:
                    return var1;
                }
            };
            var10 = var5.bind(var9)(var3, var2);
            var _closure2_slot5 = var10;
            var9 = null;
            var30 = var9 != var8;
            if(!var30) { _fun0003_ip = 271; continue _fun0003 }
 245:
            var5 = var8.features;
            var3 = var5.has;
            var2 = _closure1_slot16;
            var2 = var2.COMMUNITY;
            var30 = var3.bind(var5)(var2);
 271:
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
            var12 = 36;
            var12 = var2[var12];
            var14 = var3.bind(var4)(var12);
            var12 = var9 != var5;
            var5 = 'CreateChannel: user cannot be undefined';
            var5 = var14.bind(var4)(var12, var5);
            var36 = 37;
            var2 = var2[var36];
            var2 = var3.bind(var4)(var2);
            var12 = var2.bind(var4)(var10);
            var5 = _closure1_slot4;
            var3 = var5.useState;
            var14 = var9 != var12;
            var2 = '';
            if(!var14) { _fun0003_ip = 420; continue _fun0003 }
 417:
            var2 = var12;
 420:
            var3 = var3.bind(var5)(var2);
            var2 = _closure1_slot3;
            var24 = 2;
            var2 = var2.bind(var4)(var3, var24);
            var17 = 0;
            var19 = var2[var17];
            _closure2_slot8 = var19;
            var3 = 1;
            var2 = var2[var3];
            _closure2_slot9 = var2;
            var5 = _closure1_slot4;
            var2 = var5.useState;
            if(!(var9 == var11)) { _fun0003_ip = 482; continue _fun0003 }
 472:
            var12 = _closure1_slot15;
            var11 = var12.GUILD_TEXT;
 482:
            var5 = var2.bind(var5)(var11);
            var2 = _closure1_slot3;
            var2 = var2.bind(var4)(var5, var24);
            var32 = var2[var17];
            _closure2_slot10 = var32;
            var2 = var2[var3];
            _closure2_slot11 = var2;
            var11 = _closure1_slot0;
            var14 = _closure1_slot2;
            var2 = 38;
            var2 = var14[var2];
            var5 = var11.bind(var4)(var2);
            var2 = var5.useCanCreateStageChannelByGuild;
            var29 = var2.bind(var5)(var23);
            var2 = 39;
            var2 = var14[var2];
            var5 = var11.bind(var4)(var2);
            var2 = var5.useGuildEligibleForMediaChannels;
            var33 = var2.bind(var5)(var8);
            var2 = 40;
            var2 = var14[var2];
            var5 = var11.bind(var4)(var2);
            var2 = var5.useNavigation;
            var21 = var2.bind(var5)();
            _closure2_slot12 = var21;
            var12 = _closure1_slot1;
            var22 = 41;
            var2 = var14[var22];
            var2 = var12.bind(var4)(var2);
            var8 = var2.bind(var4)(var1);
            var5 = _closure1_slot3;
            var2 = 3;
            var2 = var5.bind(var4)(var8, var2);
            var15 = var2[var17];
            _closure2_slot13 = var15;
            var16 = var2[var3];
            var8 = var2[var24];
            _closure2_slot14 = var8;
            var25 = _closure1_slot4;
            var5 = var25.useState;
            var2 = false;
            var5 = var5.bind(var25)(var2);
            var2 = _closure1_slot3;
            var2 = var2.bind(var4)(var5, var24);
            var24 = var2[var17];
            _closure2_slot15 = var24;
            var2 = var2[var3];
            _closure2_slot16 = var2;
            var25 = _closure1_slot4;
            var5 = var25.useEffect;
            var3 = function() {
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 42;
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
            var2[7] = var15;
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
                var1 = 43;
                var7 = var11[var1];
                var1 = undefined;
                var9 = var8.bind(var1)(var7);
                var8 = var9.getHeaderCloseButton;
                var10 = _closure1_slot1;
                var7 = 44;
                var7 = var11[var7];
                var7 = var10.bind(var1)(var7);
                var7 = var7.close;
                var7 = var8.bind(var9)(var7);
                var2['headerLeft'] = var7;
                var7 = function headerRight() {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                        var1 = _closure2_slot13;
                        var5 = _closure1_slot21;
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        if(var1) { _fun0005_ip = 287; continue _fun0005 }
 28:
                        var1 = 45;
                        var1 = var4[var1];
                        var6 = undefined;
                        var1 = var3.bind(var6)(var1);
                        var2 = var1.HeaderActionButton;
                        var1 = {};
                        var7 = _closure2_slot15;
                        if(var7) { _fun0005_ip = 132; continue _fun0005 }
 57:
                        var8 = _closure2_slot10;
                        var7 = _closure1_slot15;
                        var7 = var7.GUILD_STAGE_VOICE;
                        if(!(var8 !== var7)) { _fun0005_ip = 132; continue _fun0005 }
 75:
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
                        _fun0005_ip = 187; continue _fun0005;
 132:
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
                        var8 = var8.PDTjLC;
                        var7 = var11.bind(var12)(var8);
 187:
                        var1['text'] = var7;
                        var8 = _closure2_slot8;
                        var7 = '';
                        var7 = var7 === var8;
                        if(var7) { _fun0005_ip = 264; continue _fun0005 }
 206:
                        var8 = _closure2_slot15;
                        if(!var8) { _fun0005_ip = 261; continue _fun0005 }
 213:
                        var11 = _closure1_slot0;
                        var12 = _closure1_slot2;
                        var10 = 46;
                        var10 = var12[var10];
                        var13 = var11.bind(var6)(var10);
                        var12 = var13.canCreatePrivateChannel;
                        var11 = _closure2_slot10;
                        var10 = _closure2_slot6;
                        var9 = _closure2_slot7;
                        var9 = var12.bind(var13)(var11, var10, var9);
                        var8 = !var9;
 261:
                        var7 = var8;
 264:
                        var1['disabled'] = var7;
                        var7 = function onPress() {
                            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                                var5 = {};
                                var1 = _closure2_slot5;
                                var3 = null;
                                if(!(var3 == var1)) { _fun0006_ip = 21; continue _fun0006 }
 15:
                                var1 = new Array(0);
                                _fun0006_ip = 66; continue _fun0006;
 21:
                                var7 = _closure1_slot1;
                                var4 = _closure1_slot2;
                                var2 = 47;
                                var4 = var4[var2];
                                var2 = undefined;
                                var7 = var7.bind(var2)(var4);
                                var4 = var7.values;
                                var2 = _closure2_slot5;
                                var2 = var2.permissionOverwrites;
                                var1 = var4.bind(var7)(var2);
 66:
                                var5['overwrites'] = var1;
                                var1 = _closure2_slot5;
                                var4 = var3 == var1;
                                var1 = undefined;
                                var2 = undefined;
                                if(var4) { _fun0006_ip = 96; continue _fun0006 }
 86:
                                var4 = _closure2_slot5;
                                var2 = var4.bitrate;
 96:
                                var5['bitrate'] = var2;
                                var2 = _closure2_slot5;
                                var3 = var3 == var2;
                                var2 = undefined;
                                if(var3) { _fun0006_ip = 124; continue _fun0006 }
 114:
                                var3 = _closure2_slot5;
                                var2 = var3.userLimit;
 124:
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
                                if(var2) { _fun0006_ip = 247; continue _fun0006 }
 188:
                                var4 = _closure2_slot10;
                                var3 = _closure1_slot15;
                                var3 = var3.GUILD_STAGE_VOICE;
                                if(!(var4 !== var3)) { _fun0006_ip = 220; continue _fun0006 }
 209:
                                var3 = _closure2_slot14;
                                var3 = var3.bind(var1)(var5);
                                _fun0006_ip = 320; continue _fun0006;
 220:
                                var4 = _closure2_slot12;
                                var3 = var4.push;
                                var2 = _closure1_slot27;
                                var2 = var2.ADD_MODERATORS;
                                var2 = var3.bind(var4)(var2, var5);
                                _fun0006_ip = 320; continue _fun0006;
 247:
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
 320:
                                return var1;
                            }
                        };
                        var1['onPress'] = var7;
                        var1 = var5.bind(var6)(var2, var1);
                        _fun0005_ip = 315; continue _fun0005;
 287:
                        var2 = 43;
                        var2 = var4[var2];
                        var4 = undefined;
                        var2 = var3.bind(var4)(var2);
                        var3 = var2.HeaderSubmittingIndicator;
                        var2 = {};
                        var1 = var5.bind(var4)(var3, var2);
 315:
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
            var1 = function updateName(arg1, arg2) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var5 = arg1;
                    var3 = _closure2_slot9;
                    var6 = _closure1_slot7;
                    var4 = var6.has;
                    var2 = arg2;
                    var4 = var4.bind(var6)(var2);
                    var2 = var5;
                    if(!var4) { _fun0007_ip = 69; continue _fun0007 }
 36:
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 48;
                    var4 = var4[var1];
                    var1 = undefined;
                    var4 = var6.bind(var1)(var4);
                    var1 = var4.sanitizeGuildTextChannelName;
                    var2 = var1.bind(var4)(var5);
 69:
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            _closure2_slot17 = var1;
            var34 = function handleTypeChange(arg1) {
                var4 = arg1;
                var3 = _closure2_slot11;
                var1 = undefined;
                var3 = var3.bind(var1)(var4);
                var3 = _closure2_slot17;
                var2 = _closure2_slot8;
                var2 = var3.bind(var1)(var2, var4);
                return var1;
            };
            var3 = _closure1_slot21;
            var2 = _closure1_slot5;
            var1 = {};
            var5 = 'always';
            var1['keyboardShouldPersistTaps'] = var5;
            var5 = {};
            var8 = 14;
            var7 = var14[var8];
            var7 = var12.bind(var4)(var7);
            var7 = var7.spacing;
            var7 = var7.PX_16;
            var5['padding'] = var7;
            var7 = var14[var8];
            var7 = var12.bind(var4)(var7);
            var7 = var7.spacing;
            var7 = var7.PX_16;
            var6 = var6.bottom;
            var6 = var7 + var6;
            var5['paddingBottom'] = var6;
            var1['contentContainerStyle'] = var5;
            var7 = _closure1_slot23;
            var5 = 49;
            var5 = var14[var5];
            var5 = var11.bind(var4)(var5);
            var6 = var5.Stack;
            var5 = {};
            var8 = var14[var8];
            var8 = var12.bind(var4)(var8);
            var8 = var8.spacing;
            var8 = var8.PX_16;
            var5['spacing'] = var8;
            var12 = _closure1_slot21;
            var8 = 50;
            var8 = var14[var8];
            var8 = var11.bind(var4)(var8);
            var11 = var8.Input;
            var8 = {};
            var14 = _closure1_slot15;
            var14 = var14.GUILD_CATEGORY;
            if(!(var32 !== var14)) { _fun0003_ip = 1030; continue _fun0003 }
 973:
            var25 = _closure1_slot0;
            var28 = _closure1_slot2;
            var14 = 26;
            var15 = var28[var14];
            var15 = var25.bind(var4)(var15);
            var21 = var15.intl;
            var15 = var21.string;
            var14 = var28[var14];
            var14 = var25.bind(var4)(var14);
            var14 = var14.t;
            var14 = var14.PVbHDg;
            var14 = var15.bind(var21)(var14);
            _fun0003_ip = 1085; continue _fun0003;
 1030:
            var28 = _closure1_slot0;
            var35 = _closure1_slot2;
            var15 = 26;
            var21 = var35[var15];
            var21 = var28.bind(var4)(var21);
            var25 = var21.intl;
            var21 = var25.string;
            var15 = var35[var15];
            var15 = var28.bind(var4)(var15);
            var15 = var15.t;
            var15 = var15.OCAkGB;
            var14 = var21.bind(var25)(var15);
 1085:
            var8['label'] = var14;
            var15 = var16.name;
            var21 = var9 == var15;
            var14 = undefined;
            if(var21) { _fun0003_ip = 1107; continue _fun0003 }
 1103:
            var14 = var15[var17];
 1107:
            var8['errorMessage'] = var14;
            var14 = _closure1_slot15;
            var14 = var14.GUILD_FORUM;
            if(!(var32 !== var14)) { _fun0003_ip = 1236; continue _fun0003 }
 1126:
            var15 = var9 != var10;
            var14 = undefined;
            if(!var15) { _fun0003_ip = 1234; continue _fun0003 }
 1135:
            var35 = _closure1_slot0;
            var28 = _closure1_slot2;
            var15 = 26;
            var17 = var28[var15];
            var17 = var35.bind(var4)(var17);
            var25 = var17.intl;
            var21 = var25.format;
            var15 = var28[var15];
            var15 = var35.bind(var4)(var15);
            var15 = var15.t;
            var17 = var15.s2ZzZW;
            var15 = {};
            var28 = var28[var36];
            var38 = var35.bind(var4)(var28);
            var37 = var38.computeChannelName;
            var41 = _closure1_slot14;
            var40 = _closure1_slot13;
            var39 = true;
            var43 = var38;
            var42 = var10;
            var28 = var43[var37](var42, var41, var40, var39, var38);
            var15['name'] = var28;
            var14 = var21.bind(var25)(var17, var15);
 1234:
            _fun0003_ip = 1293; continue _fun0003;
 1236:
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
            var15 = var15.qBvLY2;
            var14 = var17.bind(var21)(var15);
 1293:
            var8['description'] = var14;
            var17 = _closure1_slot21;
            var15 = _closure1_slot0;
            var21 = _closure1_slot2;
            var14 = 51;
            var14 = var21[var14];
            var14 = var15.bind(var4)(var14);
            var15 = var14.TextField;
            var14 = {'autoFocus': true, 'enableAndroidSanitizedInputWorkaround': true};
            var37 = true;
            var14['value'] = var19;
            var19 = function onChange(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var4 = arg1;
                    var2 = _closure2_slot8;
                    if(!(var2 !== var4)) { _fun0008_ip = 30; continue _fun0008 }
 14:
                    var3 = _closure2_slot17;
                    var2 = _closure2_slot10;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var4, var2);
 30:
                    var1 = undefined;
                    return var1;
                }
            };
            var14['onChange'] = var19;
            var19 = _closure1_slot15;
            var19 = var19.GUILD_CATEGORY;
            if(!(var32 !== var19)) { _fun0003_ip = 1502; continue _fun0003 }
 1370:
            var19 = _closure1_slot15;
            var19 = var19.GUILD_FORUM;
            if(!(var32 !== var19)) { _fun0003_ip = 1443; continue _fun0003 }
 1384:
            var28 = _closure1_slot0;
            var35 = _closure1_slot2;
            var19 = 26;
            var21 = var35[var19];
            var21 = var28.bind(var4)(var21);
            var25 = var21.intl;
            var21 = var25.string;
            var19 = var35[var19];
            var19 = var28.bind(var4)(var19);
            var19 = var19.t;
            var19 = var19.bw/b8P;
            var19 = var21.bind(var25)(var19);
            _fun0003_ip = 1500; continue _fun0003;
 1443:
            var35 = _closure1_slot0;
            var36 = _closure1_slot2;
            var21 = 26;
            var25 = var36[var21];
            var25 = var35.bind(var4)(var25);
            var28 = var25.intl;
            var25 = var28.string;
            var21 = var36[var21];
            var21 = var35.bind(var4)(var21);
            var21 = var21.t;
            var21 = var21.5z1Xam;
            var19 = var25.bind(var28)(var21);
 1500:
            _fun0003_ip = 1559; continue _fun0003;
 1502:
            var35 = _closure1_slot0;
            var36 = _closure1_slot2;
            var21 = 26;
            var25 = var36[var21];
            var25 = var35.bind(var4)(var25);
            var28 = var25.intl;
            var25 = var28.string;
            var21 = var36[var21];
            var21 = var35.bind(var4)(var21);
            var21 = var21.t;
            var21 = var21.eTVbt7;
            var19 = var25.bind(var28)(var21);
 1559:
            var14['placeholder'] = var19;
            var14 = var17.bind(var4)(var15, var14);
            var8['children'] = var14;
            var11 = var12.bind(var4)(var11, var8);
            var8 = new Array(3);
            var8[0] = var11;
            var11 = var9 == var10;
            var10 = null;
            if(!var11) { _fun0003_ip = 2897; continue _fun0003 }
 1600:
            var14 = _closure1_slot23;
            var12 = _closure1_slot22;
            var11 = {};
            var15 = _closure1_slot15;
            var15 = var15.GUILD_CATEGORY;
            var17 = null;
            if(!(var32 !== var15)) { _fun0003_ip = 2158; continue _fun0003 }
 1629:
            var21 = _closure1_slot23;
            var36 = _closure1_slot0;
            var38 = _closure1_slot2;
            var15 = 52;
            var15 = var38[var15];
            var15 = var36.bind(var4)(var15);
            var19 = var15.TableRowGroup;
            var15 = {};
            var25 = 26;
            var28 = var38[var25];
            var28 = var36.bind(var4)(var28);
            var35 = var28.intl;
            var28 = var35.string;
            var25 = var38[var25];
            var25 = var36.bind(var4)(var25);
            var25 = var25.t;
            var25 = var25.7ZcXGx;
            var25 = var28.bind(var35)(var25);
            var15['title'] = var25;
            var28 = _closure1_slot21;
            var36 = _closure1_slot28;
            var25 = {};
            var35 = _closure1_slot15;
            var35 = var35.GUILD_TEXT;
            var25['channelType'] = var35;
            var35 = _closure1_slot15;
            var35 = var35.GUILD_TEXT;
            var35 = var32 === var35;
            var25['selected'] = var35;
            var25['isPrivate'] = var24;
            var25['onPress'] = var34;
            var28 = var28.bind(var4)(var36, var25);
            var25 = new Array(6);
            var25[0] = var28;
            var35 = _closure1_slot21;
            var28 = {};
            var38 = _closure1_slot15;
            var38 = var38.GUILD_VOICE;
            var28['channelType'] = var38;
            var38 = _closure1_slot15;
            var38 = var38.GUILD_VOICE;
            var38 = var32 === var38;
            var28['selected'] = var38;
            var28['isPrivate'] = var24;
            var28['onPress'] = var34;
            var28 = var35.bind(var4)(var36, var28);
            var25[1] = var28;
            var35 = _closure1_slot21;
            var28 = {};
            var38 = _closure1_slot15;
            var38 = var38.GUILD_FORUM;
            var28['channelType'] = var38;
            var38 = _closure1_slot15;
            var38 = var38.GUILD_FORUM;
            var38 = var32 === var38;
            var28['selected'] = var38;
            var28['isPrivate'] = var24;
            var28['onPress'] = var34;
            var28 = var35.bind(var4)(var36, var28);
            var25[2] = var28;
            var28 = null;
            if(!var33) { _fun0003_ip = 1968; continue _fun0003 }
 1904:
            var36 = _closure1_slot21;
            var35 = _closure1_slot28;
            var33 = {};
            var38 = _closure1_slot15;
            var38 = var38.GUILD_MEDIA;
            var33['channelType'] = var38;
            var38 = _closure1_slot15;
            var38 = var38.GUILD_MEDIA;
            var38 = var32 === var38;
            var33['selected'] = var38;
            var33['isPrivate'] = var24;
            var33['isBeta'] = var37;
            var33['onPress'] = var34;
            var28 = var36.bind(var4)(var35, var33);
 1968:
            var25[3] = var28;
            var28 = null;
            if(!var30) { _fun0003_ip = 2071; continue _fun0003 }
 1977:
            var33 = _closure1_slot0;
            var30 = _closure1_slot2;
            var30 = var30[var22];
            var30 = var33.bind(var4)(var30);
            var30 = var30.CreateChannelMode;
            var30 = var30.PREMIUM_CHANNEL;
            var28 = null;
            if(!(var20 !== var30)) { _fun0003_ip = 2071; continue _fun0003 }
 2012:
            var35 = _closure1_slot21;
            var33 = _closure1_slot28;
            var30 = {};
            var36 = _closure1_slot15;
            var36 = var36.GUILD_ANNOUNCEMENT;
            var30['channelType'] = var36;
            var36 = _closure1_slot15;
            var36 = var36.GUILD_ANNOUNCEMENT;
            var36 = var32 === var36;
            var30['selected'] = var36;
            var30['isPrivate'] = var24;
            var30['onPress'] = var34;
            var28 = var35.bind(var4)(var33, var30);
 2071:
            var25[4] = var28;
            var28 = null;
            if(!var29) { _fun0003_ip = 2144; continue _fun0003 }
 2080:
            var28 = null;
            if(var24) { _fun0003_ip = 2144; continue _fun0003 }
 2085:
            var33 = _closure1_slot21;
            var30 = _closure1_slot28;
            var29 = {};
            var35 = _closure1_slot15;
            var35 = var35.GUILD_STAGE_VOICE;
            var29['channelType'] = var35;
            var35 = _closure1_slot15;
            var35 = var35.GUILD_STAGE_VOICE;
            var35 = var32 === var35;
            var29['selected'] = var35;
            var29['isPrivate'] = var24;
            var29['onPress'] = var34;
            var28 = var33.bind(var4)(var30, var29);
 2144:
            var25[5] = var28;
            var15['children'] = var25;
            var17 = var21.bind(var4)(var19, var15);
 2158:
            var15 = new Array(3);
            var15[0] = var17;
            var21 = _closure1_slot21;
            var19 = _closure1_slot1;
            var25 = _closure1_slot2;
            var17 = 53;
            var17 = var25[var17];
            var19 = var19.bind(var4)(var17);
            var17 = {};
            var17['guildId'] = var23;
            var17['channelType'] = var32;
            var17 = var21.bind(var4)(var19, var17);
            var15[1] = var17;
            var17 = _closure1_slot15;
            var19 = var17.GUILD_STAGE_VOICE;
            var17 = null;
            if(!(var32 !== var19)) { _fun0003_ip = 2883; continue _fun0003 }
 2230:
            var21 = _closure1_slot0;
            var19 = _closure1_slot2;
            var19 = var19[var22];
            var19 = var21.bind(var4)(var19);
            var19 = var19.CreateChannelMode;
            var19 = var19.PREMIUM_CHANNEL;
            var17 = null;
            if(!(var20 !== var19)) { _fun0003_ip = 2883; continue _fun0003 }
 2268:
            var21 = _closure1_slot23;
            var20 = _closure1_slot22;
            var19 = {};
            var25 = _closure1_slot21;
            var23 = _closure1_slot0;
            var28 = _closure1_slot2;
            var22 = 52;
            var22 = var28[var22];
            var22 = var23.bind(var4)(var22);
            var23 = var22.TableRowGroup;
            var22 = {};
            var28 = _closure1_slot15;
            var28 = var28.GUILD_CATEGORY;
            if(!(var32 !== var28)) { _fun0003_ip = 2406; continue _fun0003 }
 2324:
            var28 = _closure1_slot8;
            var28 = var28.bind(var4)(var32);
            var34 = _closure1_slot0;
            var35 = _closure1_slot2;
            var29 = 26;
            var30 = var35[var29];
            var30 = var34.bind(var4)(var30);
            var33 = var30.intl;
            var30 = var33.string;
            var29 = var35[var29];
            var29 = var34.bind(var4)(var29);
            var29 = var29.t;
            if(var28) { _fun0003_ip = 2393; continue _fun0003 }
 2380:
            var28 = var29.hfbjIC;
            var28 = var30.bind(var33)(var28);
            _fun0003_ip = 2404; continue _fun0003;
 2393:
            var29 = var29.cLjvKi;
            var28 = var30.bind(var33)(var29);
 2404:
            _fun0003_ip = 2461; continue _fun0003;
 2406:
            var34 = _closure1_slot0;
            var35 = _closure1_slot2;
            var29 = 26;
            var30 = var35[var29];
            var30 = var34.bind(var4)(var30);
            var33 = var30.intl;
            var30 = var33.string;
            var29 = var35[var29];
            var29 = var34.bind(var4)(var29);
            var29 = var29.t;
            var29 = var29.RQUk6+;
            var28 = var30.bind(var33)(var29);
 2461:
            var22['description'] = var28;
            var30 = _closure1_slot21;
            var29 = _closure1_slot0;
            var33 = _closure1_slot2;
            var28 = 54;
            var28 = var33[var28];
            var28 = var29.bind(var4)(var28);
            var29 = var28.TableSwitchRow;
            var28 = {};
            var33 = _closure1_slot15;
            var33 = var33.GUILD_CATEGORY;
            if(!(var32 !== var33)) { _fun0003_ip = 2568; continue _fun0003 }
 2511:
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
            var33 = var33.aUI70t;
            var33 = var34.bind(var35)(var33);
            _fun0003_ip = 2623; continue _fun0003;
 2568:
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
            var34 = var34.lEPAZ2;
            var33 = var35.bind(var36)(var34);
 2623:
            var28['label'] = var33;
            var35 = _closure1_slot21;
            var34 = _closure1_slot0;
            var36 = _closure1_slot2;
            var33 = 55;
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
            if(!var24) { _fun0003_ip = 2869; continue _fun0003 }
 2715:
            var25 = _closure1_slot0;
            var24 = _closure1_slot2;
            var33 = 46;
            var24 = var24[var33];
            var25 = var25.bind(var4)(var24);
            var24 = var25.canCreatePrivateChannel;
            var24 = var24.bind(var25)(var32, var27, var26);
            var23 = null;
            if(var24) { _fun0003_ip = 2869; continue _fun0003 }
 2753:
            var26 = _closure1_slot21;
            var25 = _closure1_slot6;
            var24 = {};
            var27 = var13.errorMessage;
            var24['style'] = var27;
            var29 = _closure1_slot21;
            var28 = _closure1_slot1;
            var30 = _closure1_slot2;
            var34 = 56;
            var27 = var30[var34];
            var28 = var28.bind(var4)(var27);
            var27 = {};
            var31 = _closure1_slot0;
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
 2869:
            var22[1] = var23;
            var19['children'] = var22;
            var17 = var21.bind(var4)(var20, var19);
 2883:
            var15[2] = var17;
            var11['children'] = var15;
            var10 = var14.bind(var4)(var12, var11);
 2897:
            var8[1] = var10;
            var10 = var16.message;
            var10 = var9 != var10;
            var9 = null;
            if(!var10) { _fun0003_ip = 3016; continue _fun0003 }
 2915:
            var12 = _closure1_slot21;
            var11 = _closure1_slot6;
            var10 = {};
            var13 = var13.errorMessage;
            var10['style'] = var13;
            var15 = _closure1_slot21;
            var14 = _closure1_slot1;
            var19 = _closure1_slot2;
            var17 = 56;
            var13 = var19[var17];
            var14 = var14.bind(var4)(var13);
            var13 = {};
            var18 = _closure1_slot0;
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
 3016:
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
 0:
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
            var2 = 40;
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
            var5 = 36;
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
            var15 = 41;
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
 0:
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
                    var14 = 48;
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
 0:
                            var1 = arg1;
                            var4 = var1.row;
                            var2 = var4.id;
                            var1 = null;
                            var1 = var1 != var2;
                            if(!var1) { _fun0011_ip = 36; continue _fun0011 }
 23:
                            var3 = var4.id;
                            var2 = '';
                            var1 = var2 !== var3;
 36:
                            if(!var1) { _fun0011_ip = 210; continue _fun0011 }
 42:
                            var2 = var4.rowType;
                            var1 = _closure1_slot20;
                            var1 = var1.ROLE;
                            if(!(var2 !== var1)) { _fun0011_ip = 150; continue _fun0011 }
 65:
                            var2 = var4.rowType;
                            var1 = _closure1_slot20;
                            var1 = var1.MEMBER;
                            if(!(var2 === var1)) { _fun0011_ip = 210; continue _fun0011 }
 88:
                            var3 = _closure3_slot1;
                            var2 = var3.push;
                            var8 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var6 = 48;
                            var7 = var7[var6];
                            var6 = undefined;
                            var8 = var8.bind(var6)(var7);
                            var7 = var8.permissionOverwriteForUser;
                            var6 = var4.id;
                            var1 = _closure3_slot0;
                            var1 = var7.bind(var8)(var6, var1);
                            var1 = var2.bind(var3)(var1);
                            _fun0011_ip = 210; continue _fun0011;
 150:
                            var3 = _closure3_slot1;
                            var2 = var3.push;
                            var7 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var5 = 48;
                            var6 = var6[var5];
                            var5 = undefined;
                            var6 = var7.bind(var5)(var6);
                            var5 = var6.permissionOverwriteForRole;
                            var4 = var4.id;
                            var1 = _closure3_slot0;
                            var1 = var5.bind(var6)(var4, var1);
                            var1 = var2.bind(var3)(var1);
 210:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var6 = var12.bind(var13)(var6);
                    var6 = _closure2_slot4;
                    if(var6) { _fun0010_ip = 153; continue _fun0010 }
 149:
                    var6 = _closure2_slot5;
 153:
                    if(var6) { _fun0010_ip = 204; continue _fun0010 }
 156:
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
 204:
                    var6 = {};
                    var6['overwrites'] = var11;
                    var6['guildId'] = var8;
                    var6['channelType'] = var5;
                    var6['name'] = var10;
                    var6['categoryId'] = var9;
                    var6['flags'] = var4;
                    var4 = _closure1_slot15;
                    var4 = var4.GUILD_STAGE_VOICE;
                    if(!(var5 !== var4)) { _fun0010_ip = 258; continue _fun0010 }
 247:
                    var4 = _closure2_slot8;
                    var4 = var4.bind(var1)(var6);
                    _fun0010_ip = 313; continue _fun0010;
 258:
                    var5 = _closure2_slot2;
                    var4 = var5.push;
                    var2 = _closure1_slot27;
                    var3 = var2.ADD_MODERATORS;
                    var2 = {};
                    var19 = var2;
                    var18 = var6;
                    var6 = copyDataProperties(var19, var18);
                    var6 = 'guildId';
                    var2[var6] = var8;
                    var6 = 'onChannelCreated';
                    var2[var6] = var7;
                    var2 = var4.bind(var5)(var3, var2);
 313:
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
 0:
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
                    var2 = var2.5WxrcX;
                    var2 = var7.bind(var8)(var2);
                    var _closure3_slot0 = var2;
                    var2 = global;
                    var8 = var2.Object;
                    var7 = var8.keys;
                    var2 = _closure2_slot6;
                    var2 = var7.bind(var8)(var2);
                    var7 = var2.length;
                    var2 = 0;
                    if(!(var7 > var2)) { _fun0012_ip = 244; continue _fun0012 }
 120:
                    var2 = _closure1_slot15;
                    var2 = var2.GUILD_STAGE_VOICE;
                    if(!(var4 !== var2)) { _fun0012_ip = 188; continue _fun0012 }
 134:
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
                    _fun0012_ip = 240; continue _fun0012;
 188:
                    var8 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var4 = var3[var9];
                    var4 = var8.bind(var1)(var4);
                    var7 = var4.intl;
                    var4 = var7.string;
                    var3 = var3[var9];
                    var3 = var8.bind(var1)(var3);
                    var3 = var3.t;
                    var3 = var3.PDTjLC;
                    var2 = var4.bind(var7)(var3);
 240:
                    _closure3_slot0 = var2;
 244:
                    var4 = _closure2_slot2;
                    var3 = var4.setOptions;
                    var2 = {};
                    var5 = _closure2_slot7;
                    if(var5) { _fun0012_ip = 270; continue _fun0012 }
 263:
                    var5 = function() {
                        var4 = _closure1_slot21;
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 45;
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
                    _fun0012_ip = 275; continue _fun0012;
 270:
                    var5 = function() {
                        var4 = _closure1_slot21;
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 43;
                        var1 = var3[var1];
                        var3 = undefined;
                        var1 = var2.bind(var3)(var1);
                        var2 = var1.HeaderSubmittingIndicator;
                        var1 = {};
                        var1 = var4.bind(var3)(var2, var1);
                        return var1;
                    };
 275:
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
            if(!var5) { _fun0009_ip = 582; continue _fun0009 }
 466:
            var8 = var17.message;
            var5 = '';
            var7 = null;
            if(!(var5 !== var8)) { _fun0009_ip = 582; continue _fun0009 }
 481:
            var13 = _closure1_slot21;
            var8 = _closure1_slot6;
            var5 = {};
            var14 = var14.errorMessage;
            var5['style'] = var14;
            var16 = _closure1_slot21;
            var15 = _closure1_slot1;
            var20 = _closure1_slot2;
            var18 = 56;
            var14 = var20[var18];
            var15 = var15.bind(var4)(var14);
            var14 = {};
            var19 = _closure1_slot0;
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
 582:
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
 0:
            var5 = arg1;
            var1 = null;
            var2 = arg2;
            if(!(var1 == var2)) { _fun0013_ip = 314; continue _fun0013 }
 15:
            if(!(var1 !== var5)) { _fun0013_ip = 252; continue _fun0013 }
 22:
            var2 = _closure1_slot15;
            var2 = var2.GUILD_TEXT;
            if(!(var2 !== var5)) { _fun0013_ip = 252; continue _fun0013 }
 42:
            var2 = _closure1_slot15;
            var2 = var2.GUILD_VOICE;
            if(!(var2 !== var5)) { _fun0013_ip = 252; continue _fun0013 }
 59:
            var2 = _closure1_slot15;
            var2 = var2.GUILD_STAGE_VOICE;
            if(!(var2 !== var5)) { _fun0013_ip = 252; continue _fun0013 }
 76:
            var2 = _closure1_slot15;
            var2 = var2.GUILD_ANNOUNCEMENT;
            if(!(var2 !== var5)) { _fun0013_ip = 252; continue _fun0013 }
 93:
            var2 = _closure1_slot15;
            var2 = var2.GUILD_FORUM;
            if(!(var2 !== var5)) { _fun0013_ip = 252; continue _fun0013 }
 110:
            var2 = _closure1_slot15;
            var2 = var2.GUILD_MEDIA;
            if(!(var2 !== var5)) { _fun0013_ip = 252; continue _fun0013 }
 127:
            var2 = _closure1_slot15;
            var2 = var2.GUILD_CATEGORY;
            if(!(var2 !== var5)) { _fun0013_ip = 193; continue _fun0013 }
 141:
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
 193:
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
            var1 = var1.ISN+ND;
            var1 = var2.bind(var3)(var1);
            return var1;
 252:
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
            var1 = var1.fUYU+v;
            var1 = var2.bind(var3)(var1);
            return var1;
 314:
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
            var1 = var1.dEaPc3;
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
    var14 = var14.BACKGROUND_MOBILE_SECONDARY;
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
    var5[var10] = var9;
    var10 = var8.GUILD_FORUM;
    var9 = {};
    var11 = 16;
    var11 = var7[var11];
    var11 = var6.bind(var1)(var11);
    var11 = var11.ForumIcon;
    var9['IconComponent'] = var11;
    var5[var10] = var9;
    var10 = var8.GUILD_VOICE;
    var9 = {};
    var11 = 17;
    var11 = var7[var11];
    var11 = var6.bind(var1)(var11);
    var11 = var11.VoiceNormalIcon;
    var9['IconComponent'] = var11;
    var5[var10] = var9;
    var10 = var8.GUILD_STAGE_VOICE;
    var9 = {};
    var11 = 18;
    var11 = var7[var11];
    var11 = var6.bind(var1)(var11);
    var11 = var11.StageIcon;
    var9['IconComponent'] = var11;
    var5[var10] = var9;
    var10 = var8.GUILD_ANNOUNCEMENT;
    var9 = {};
    var11 = 19;
    var11 = var7[var11];
    var11 = var6.bind(var1)(var11);
    var11 = var11.AnnouncementsIcon;
    var9['IconComponent'] = var11;
    var5[var10] = var9;
    var11 = var8.GUILD_MEDIA;
    var9 = {};
    var10 = 20;
    var12 = var7[var10];
    var12 = var6.bind(var1)(var12);
    var12 = var12.ImageIcon;
    var9['IconComponent'] = var12;
    var5[var11] = var9;
    var _closure1_slot25 = var5;
    var5 = {};
    var11 = var8.GUILD_TEXT;
    var9 = {};
    var12 = 21;
    var12 = var7[var12];
    var12 = var6.bind(var1)(var12);
    var12 = var12.TextLockIcon;
    var9['IconComponent'] = var12;
    var5[var11] = var9;
    var11 = var8.GUILD_FORUM;
    var9 = {};
    var12 = 22;
    var12 = var7[var12];
    var12 = var6.bind(var1)(var12);
    var12 = var12.ForumLockIcon;
    var9['IconComponent'] = var12;
    var5[var11] = var9;
    var11 = var8.GUILD_VOICE;
    var9 = {};
    var12 = 23;
    var12 = var7[var12];
    var12 = var6.bind(var1)(var12);
    var12 = var12.VoiceLockIcon;
    var9['IconComponent'] = var12;
    var5[var11] = var9;
    var11 = var8.GUILD_STAGE_VOICE;
    var9 = {};
    var12 = 24;
    var12 = var7[var12];
    var12 = var6.bind(var1)(var12);
    var12 = var12.StageLockIcon;
    var9['IconComponent'] = var12;
    var5[var11] = var9;
    var11 = var8.GUILD_ANNOUNCEMENT;
    var9 = {};
    var12 = 25;
    var12 = var7[var12];
    var12 = var6.bind(var1)(var12);
    var12 = var12.AnnouncementsLockIcon;
    var9['IconComponent'] = var12;
    var5[var11] = var9;
    var9 = var8.GUILD_MEDIA;
    var8 = {};
    var10 = var7[var10];
    var10 = var6.bind(var1)(var10);
    var10 = var10.ImageIcon;
    var8['IconComponent'] = var10;
    var5[var9] = var8;
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
            var3[var7] = var5;
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
            var9 = var9.dMJ3Y2;
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
            var3[var8] = var5;
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
            var3[var5] = var4;
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