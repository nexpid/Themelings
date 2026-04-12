// app/modules/guild_onboarding/native/CustomizeCommunity.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var1 = function EmptyCustomizeCommunity(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var1 = var1.setTab;
            var _closure2_slot0 = var1;
            var1 = _closure1_slot19;
            var4 = undefined;
            var11 = var1.bind(var4)();
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 15;
            var1 = var3[var1];
            var6 = var2.bind(var4)(var1);
            var5 = var6.isThemeDark;
            var10 = _closure1_slot1;
            var1 = 16;
            var1 = var3[var1];
            var1 = var10.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var9 = var5.bind(var6)(var1);
            var1 = 17;
            var1 = var3[var1];
            var5 = var2.bind(var4)(var1);
            var3 = var5.useStateFromStores;
            var1 = _closure1_slot10;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var2 = _closure1_slot10;
                var1 = var2.getGuildId;
                var1 = var1.bind(var2)();
                return var1;
            };
            var1 = var3.bind(var5)(var2, var1);
            var _closure2_slot1 = var1;
            var3 = _closure1_slot17;
            var2 = _closure1_slot4;
            var1 = {};
            var5 = var11.emptyContainer;
            var1['style'] = var5;
            var8 = _closure1_slot16;
            var6 = _closure1_slot5;
            var5 = {};
            var12 = var11.emptyContainerImage;
            var5['style'] = var12;
            var14 = _closure1_slot2;
            if(var9) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var9 = 19;
            var9 = var14[var9];
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var12 = 18;
            var9 = var14[var12];
case 4:
            var9 = var10.bind(var4)(var9);
            var5['source'] = var9;
            var6 = var8.bind(var4)(var6, var5);
            var5 = new Array(3);
            var5[0] = var6;
            var15 = _closure1_slot16;
            var10 = _closure1_slot0;
            var14 = _closure1_slot2;
            var6 = 20;
            var8 = var14[var6];
            var8 = var10.bind(var4)(var8);
            var12 = var8.LegacyText;
            var8 = {};
            var9 = var11.emptyContainerHeader;
            var8['style'] = var9;
            var9 = 21;
            var16 = var14[var9];
            var16 = var10.bind(var4)(var16);
            var18 = var16.intl;
            var17 = var18.string;
            var16 = var14[var9];
            var16 = var10.bind(var4)(var16);
            var16 = var16.t;
            var16 = var16.leKHQz;
            var16 = var17.bind(var18)(var16);
            var8['children'] = var16;
            var8 = var15.bind(var4)(var12, var8);
            var5[1] = var8;
            var8 = _closure1_slot16;
            var6 = var14[var6];
            var6 = var10.bind(var4)(var6);
            var7 = var6.LegacyText;
            var6 = {};
            var11 = var11.emptyContainerSubheader;
            var6['style'] = var11;
            var11 = var14[var9];
            var11 = var10.bind(var4)(var11);
            var12 = var11.intl;
            var11 = var12.format;
            var9 = var14[var9];
            var9 = var10.bind(var4)(var9);
            var9 = var9.t;
            var10 = var9.jH+ktB;
            var9 = {};
            var13 = function onBrowseChannels() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0002_ip = 5; continue _fun0002 }
case 6:
                    var3 = _closure2_slot0;
                    var1 = _closure1_slot12;
                    var2 = var1.BROWSE;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
case 5:
                    var1 = undefined;
                    return var1;
                }
            };
            var9['onBrowseChannels'] = var13;
            var9 = var11.bind(var12)(var10, var9);
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot22 = var1;
    var1 = function PromptTitle(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var9 = var1.item;
            var1 = _closure1_slot19;
            var4 = undefined;
            var8 = var1.bind(var4)();
            var3 = _closure1_slot16;
            var2 = _closure1_slot4;
            var1 = {};
            var5 = var8.titleContainer;
            var1['style'] = var5;
            var7 = _closure1_slot17;
            var6 = _closure1_slot0;
            var11 = _closure1_slot2;
            var5 = 20;
            var5 = var11[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.LegacyText;
            var5 = {};
            var8 = var8.prompt;
            var5['style'] = var8;
            var8 = 'header';
            var5['accessibilityRole'] = var8;
            var11 = var9.title;
            var8 = new Array(2);
            var8[0] = var11;
            var11 = var9.required;
            var9 = null;
            if(!var11) { _fun0003_ip = 7; continue _fun0003 }
case 8:
            var12 = _closure1_slot17;
            var11 = _closure1_slot0;
            var13 = _closure1_slot2;
            var10 = 22;
            var10 = var13[var10];
            var10 = var11.bind(var4)(var10);
            var11 = var10.Text;
            var10 = {'variant': 'text-md/bold', 'color': 'text-feedback-critical'};
            var13 = [' ', '*'];
            var10['children'] = var13;
            var9 = var12.bind(var4)(var11, var10);
case 7:
            var8[1] = var9;
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot23 = var1;
    var1 = function PromptHelpText(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var2 = var1.guildId;
            var _closure2_slot0 = var2;
            var10 = var1.prompt;
            var1 = var1.selectedOptionIds;
            var _closure2_slot1 = var1;
            var5 = undefined;
            var _closure2_slot2 = var5;
            var1 = _closure1_slot19;
            var6 = var1.bind(var5)();
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 17;
            var1 = var4[var1];
            var8 = var3.bind(var5)(var1);
            var4 = var8.useStateFromStores;
            var1 = _closure1_slot8;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                var3 = _closure1_slot8;
                var2 = var3.getGuild;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var11 = var4.bind(var8)(var3, var1);
            var1 = null;
            var4 = var1 == var10;
            var3 = undefined;
            if(var4) { _fun0004_ip = 9; continue _fun0004 }
case 10:
            var9 = var10.options;
            var4 = var1 == var9;
            var3 = undefined;
            if(var4) { _fun0004_ip = 9; continue _fun0004 }
case 11:
            var8 = var9.filter;
            var4 = function(arg1) {
                var3 = _closure2_slot1;
                var2 = var3.includes;
                var1 = arg1;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var3 = var8.bind(var9)(var4);
case 9:
            _closure2_slot2 = var3;
            var12 = _closure1_slot3;
            var9 = var12.useMemo;
            var8 = new Array(1);
            var8[0] = var3;
            var4 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var3 = _closure2_slot2;
                    var1 = null;
                    if(!(var1 == var3)) { _fun0005_ip = 12; continue _fun0005 }
case 6:
                    var1 = global;
                    var1 = var1.Set;
                    var3 = var1.prototype;
                    var3 = Object.create(var3, {constructor: {value: var1}});
                    var7 = var3;
                    var1 = new var7[var1](var6);
                    var1 = var1 instanceof Object ? var1 : var3;
                    _fun0005_ip = 13; continue _fun0005;
case 12:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 23;
                    var4 = var4[var3];
                    var3 = undefined;
                    var4 = var5.bind(var3)(var4);
                    var3 = var4.getSelectedRoleIds;
                    var2 = _closure2_slot2;
                    var1 = var3.bind(var4)(var2);
case 13:
                    return var1;
                }
            };
            var9 = var9.bind(var12)(var4, var8);
            var12 = _closure1_slot3;
            var8 = var12.useMemo;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var3 = _closure2_slot2;
                    var1 = null;
                    if(!(var1 == var3)) { _fun0006_ip = 12; continue _fun0006 }
case 6:
                    var1 = global;
                    var1 = var1.Set;
                    var3 = var1.prototype;
                    var3 = Object.create(var3, {constructor: {value: var1}});
                    var7 = var3;
                    var1 = new var7[var1](var6);
                    var1 = var1 instanceof Object ? var1 : var3;
                    _fun0006_ip = 13; continue _fun0006;
case 12:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 23;
                    var4 = var4[var3];
                    var3 = undefined;
                    var4 = var5.bind(var3)(var4);
                    var3 = var4.getSelectedChannelIds;
                    var2 = _closure2_slot2;
                    var1 = var3.bind(var4)(var2);
case 13:
                    return var1;
                }
            };
            var8 = var8.bind(var12)(var3, var4);
            var4 = _closure1_slot1;
            var12 = _closure1_slot2;
            var3 = 24;
            var3 = var12[var3];
            var4 = var4.bind(var5)(var3);
            var3 = {};
            var3['guild'] = var11;
            var3['prompt'] = var10;
            var3['selectedRoleIds'] = var9;
            var3['selectedChannelIds'] = var8;
            var7 = function itemHook(arg1, arg2) {
                var5 = _closure1_slot16;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 22;
                var1 = var3[var1];
                var4 = undefined;
                var1 = var2.bind(var4)(var1);
                var3 = var1.Text;
                var2 = {'variant': 'text-xs/medium', 'color': 'mobile-text-heading-primary'};
                var1 = arg1;
                var2['children'] = var1;
                var1 = arg2;
                var1 = var5.bind(var4)(var3, var2, var1);
                return var1;
            };
            var3['itemHook'] = var7;
            var3 = var4.bind(var5)(var3);
            var8 = var3.helpText;
            var7 = var3.helpTextAdditional;
            var3 = '';
            if(!(var3 === var8)) { _fun0004_ip = 14; continue _fun0004 }
case 15:
            var1 = null;
            if(!(var3 !== var7)) { _fun0004_ip = 16; continue _fun0004 }
case 14:
            var4 = _closure1_slot17;
            var3 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 22;
            var2 = var9[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.Text;
            var2 = {'style': null, 'variant': 'text-xs/medium', 'color': 'text-default'};
            var6 = var6.helpText;
            var2['style'] = var6;
            var6 = new Array(3);
            var6[0] = var8;
            var8 = ' ';
            var6[1] = var8;
            var6[2] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 16:
            return var1;
        }
    };
    var _closure1_slot24 = var1;
    var1 = function ConnectionsPrompt(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var1 = arg1;
            var1 = var1.guildId;
            var _closure2_slot0 = var1;
            var1 = _closure1_slot19;
            var5 = undefined;
            var11 = var1.bind(var5)();
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 17;
            var1 = var3[var1];
            var4 = var2.bind(var5)(var1);
            var3 = var4.useStateFromStores;
            var1 = _closure1_slot11;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var3 = _closure1_slot11;
                var2 = var3.getConnections;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var12 = var3.bind(var4)(var2, var1);
            var3 = var12.length;
            var2 = 0;
            var1 = null;
            if(!(var2 !== var3)) { _fun0007_ip = 17; continue _fun0007 }
case 18:
            var4 = _closure1_slot17;
            var3 = _closure1_slot4;
            var2 = {};
            var6 = var11.connectionsPromptContainer;
            var2['style'] = var6;
            var13 = _closure1_slot16;
            var17 = _closure1_slot0;
            var18 = _closure1_slot2;
            var8 = 22;
            var6 = var18[var8];
            var6 = var17.bind(var5)(var6);
            var9 = var6.Text;
            var6 = {'style': null, 'variant': 'text-md/semibold', 'color': 'mobile-text-heading-primary'};
            var14 = var11.connectionsTitle;
            var6['style'] = var14;
            var14 = 21;
            var15 = var18[var14];
            var15 = var17.bind(var5)(var15);
            var19 = var15.intl;
            var16 = var19.string;
            var15 = var18[var14];
            var15 = var17.bind(var5)(var15);
            var15 = var15.t;
            var15 = var15.eDVMrA;
            var15 = var16.bind(var19)(var15);
            var6['children'] = var15;
            var9 = var13.bind(var5)(var9, var6);
            var6 = new Array(3);
            var6[0] = var9;
            var13 = _closure1_slot16;
            var8 = var18[var8];
            var8 = var17.bind(var5)(var8);
            var9 = var8.Text;
            var8 = {'variant': 'text-xs/medium', 'color': 'text-muted'};
            var15 = var18[var14];
            var15 = var17.bind(var5)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var14 = var18[var14];
            var14 = var17.bind(var5)(var14);
            var14 = var14.t;
            var14 = var14.BozOXu;
            var14 = var15.bind(var16)(var14);
            var8['children'] = var14;
            var8 = var13.bind(var5)(var9, var8);
            var6[1] = var8;
            var9 = _closure1_slot16;
            var8 = _closure1_slot4;
            var7 = {};
            var11 = var11.connectionsContainer;
            var7['style'] = var11;
            var11 = var12.map;
            var10 = function(arg1, arg2) {
                var5 = _closure1_slot16;
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var1 = 25;
                var1 = var7[var1];
                var4 = undefined;
                var3 = var6.bind(var4)(var1);
                var2 = {};
                var1 = arg1;
                var2['connection'] = var1;
                var1 = _closure2_slot0;
                var2['guildId'] = var1;
                var1 = 26;
                var1 = var7[var1];
                var1 = var6.bind(var4)(var1);
                var1 = var1.CHANNELS_AND_ROLES;
                var2['location'] = var1;
                var1 = arg2;
                var1 = var5.bind(var4)(var3, var2, var1);
                return var1;
            };
            var10 = var11.bind(var12)(var10);
            var7['children'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var6[2] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 17:
            return var1;
        }
    };
    var _closure1_slot25 = var1;
    var1 = function DropdownOption(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var2 = arg1;
            var9 = var2.option;
            var _closure2_slot0 = var9;
            var2 = _closure1_slot19;
            var4 = undefined;
            var15 = var2.bind(var4)();
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 17;
            var2 = var5[var2];
            var5 = var3.bind(var4)(var2);
            var3 = var5.useStateFromStores;
            var7 = _closure1_slot7;
            var2 = new Array(1);
            var2[0] = var7;
            var1 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var1 = _closure2_slot0;
                    var2 = var1.emoji;
                    var6 = null;
                    var3 = var6 == var2;
                    var1 = undefined;
                    if(var3) { _fun0009_ip = 19; continue _fun0009 }
case 20:
                    var1 = var2.id;
case 19:
                    var2 = var6 != var1;
                    var1 = null;
                    if(!var2) { _fun0009_ip = 21; continue _fun0009 }
case 22:
                    var3 = _closure1_slot7;
                    var2 = var3.getUsableCustomEmojiById;
                    var5 = _closure2_slot0;
                    var5 = var5.emoji;
                    var6 = var6 == var5;
                    var4 = undefined;
                    if(var6) { _fun0009_ip = 23; continue _fun0009 }
case 24:
                    var4 = var5.id;
case 23:
                    var1 = var2.bind(var3)(var4);
case 21:
                    return var1;
                }
            };
            var19 = var3.bind(var5)(var2, var1);
            var2 = var9.emoji;
            var14 = null;
            var3 = var14 == var2;
            var1 = undefined;
            if(var3) { _fun0008_ip = 25; continue _fun0008 }
case 26:
            var1 = var2.id;
case 25:
            var7 = var14 != var1;
            if(var7) { _fun0008_ip = 27; continue _fun0008 }
case 28:
            var2 = var9.emoji;
            var3 = var14 == var2;
            var1 = undefined;
            if(var3) { _fun0008_ip = 29; continue _fun0008 }
case 11:
            var1 = var2.name;
case 29:
            var7 = var14 != var1;
case 27:
            var3 = _closure1_slot17;
            var2 = _closure1_slot4;
            var1 = {};
            var5 = var15.dropdownPill;
            var1['style'] = var5;
            if(!var7) { _fun0008_ip = 30; continue _fun0008 }
case 31:
            var10 = _closure1_slot16;
            var8 = _closure1_slot4;
            var5 = {};
            var11 = var15.emojiContainer;
            var5['style'] = var11;
            var13 = _closure1_slot16;
            var12 = _closure1_slot1;
            var16 = _closure1_slot2;
            var11 = 32;
            var11 = var16[var11];
            var12 = var12.bind(var4)(var11);
            var11 = {};
            var16 = var15.optionTextEmoji;
            var11['textEmojiStyle'] = var16;
            var15 = var15.optionImageEmoji;
            var11['fastImageStyle'] = var15;
            var16 = var14 != var19;
            var15 = undefined;
            if(!var16) { _fun0008_ip = 32; continue _fun0008 }
case 33:
            var17 = _closure1_slot1;
            var18 = _closure1_slot2;
            var16 = 33;
            var16 = var18[var16];
            var18 = var17.bind(var4)(var16);
            var17 = var18.getEmojiURL;
            var16 = {};
            var20 = var19.id;
            var16['id'] = var20;
            var19 = var19.animated;
            var16['animated'] = var19;
            var19 = _closure1_slot14;
            var16['size'] = var19;
            var15 = var17.bind(var18)(var16);
case 32:
            var11['src'] = var15;
            var16 = var9.emoji;
            var17 = var14 == var16;
            var15 = undefined;
            if(var17) { _fun0008_ip = 34; continue _fun0008 }
case 35:
            var15 = var16.name;
case 34:
            var16 = var14 != var15;
            var14 = '';
            if(!var16) { _fun0008_ip = 36; continue _fun0008 }
case 37:
            var14 = var15;
case 36:
            var11['name'] = var14;
            var11 = var13.bind(var4)(var12, var11);
            var5['children'] = var11;
            var7 = var10.bind(var4)(var8, var5);
case 30:
            var5 = new Array(2);
            var5[0] = var7;
            var8 = _closure1_slot16;
            var7 = _closure1_slot0;
            var10 = _closure1_slot2;
            var6 = 22;
            var6 = var10[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.Text;
            var6 = {};
            var10 = 'text-md/semibold';
            var6['variant'] = var10;
            var9 = var9.title;
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot26 = var1;
    var1 = function DropdownPrompt(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var1 = arg1;
            var11 = var1.guildId;
            var _closure2_slot0 = var11;
            var10 = var1.prompt;
            var _closure2_slot1 = var10;
            var1 = _closure1_slot19;
            var4 = undefined;
            var20 = var1.bind(var4)();
            var17 = var10.isNew;
            var _closure2_slot2 = var17;
            var15 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 17;
            var1 = var5[var1];
            var7 = var15.bind(var4)(var1);
            var3 = var7.useStateFromStoresArray;
            var1 = _closure1_slot11;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var4 = _closure1_slot11;
                var3 = var4.getOnboardingResponsesForPrompt;
                var2 = _closure2_slot0;
                var1 = _closure2_slot1;
                var1 = var1.id;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var9 = var3.bind(var7)(var2, var1);
            var _closure2_slot3 = var9;
            var2 = var9.map;
            var1 = function(arg1) {
                var2 = arg1;
                var _closure3_slot0 = var2;
                var2 = _closure2_slot1;
                var3 = var2.options;
                var2 = var3.find;
                var1 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.id;
                    var1 = _closure3_slot0;
                    var1 = var2 === var1;
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var3 = var2.bind(var9)(var1);
            var2 = var3.filter;
            var1 = 34;
            var1 = var5[var1];
            var1 = var15.bind(var4)(var1);
            var1 = var1.isNotNullish;
            var16 = var2.bind(var3)(var1);
            var1 = 35;
            var1 = var5[var1];
            var7 = var15.bind(var4)(var1);
            var3 = var7.useToken;
            var2 = _closure1_slot1;
            var1 = 13;
            var1 = var5[var1];
            var1 = var2.bind(var4)(var1);
            var1 = var1.colors;
            var1 = var1.BACKGROUND_BRAND;
            var13 = var3.bind(var7)(var1);
            var _closure2_slot4 = var13;
            var1 = 36;
            var3 = var5[var1];
            var8 = var15.bind(var4)(var3);
            var7 = var8.useAnimatedStyle;
            var3 = function c() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var1 = _closure2_slot2;
                    var4 = _closure2_slot4;
                    var2 = global;
                    var3 = var2.HermesInternal;
                    var3 = var3.concat;
                    var13 = '';
                    if(var1) { _fun0011_ip = 12; continue _fun0011 }
case 38:
                    var1 = '00';
                    var10 = var3.bind(var13)(var4, var1);
                    _fun0011_ip = 39; continue _fun0011;
case 12:
                    var1 = 'FF';
                    var10 = var3.bind(var13)(var4, var1);
case 39:
                    var1 = {};
                    var15 = _closure1_slot0;
                    var16 = _closure1_slot2;
                    var11 = 36;
                    var3 = var16[var11];
                    var14 = undefined;
                    var5 = var15.bind(var14)(var3);
                    var4 = var5.withSequence;
                    var9 = 37;
                    var3 = var16[var9];
                    var8 = var15.bind(var14)(var3);
                    var7 = var8.withTiming;
                    var3 = {};
                    var12 = 1;
                    var3['duration'] = var12;
                    var12 = var16[var11];
                    var12 = var15.bind(var14)(var12);
                    var18 = var12.Easing;
                    var17 = var18.in;
                    var12 = var16[var11];
                    var12 = var15.bind(var14)(var12);
                    var12 = var12.Easing;
                    var12 = var12.ease;
                    var12 = var17.bind(var18)(var12);
                    var3['easing'] = var12;
                    var3 = var7.bind(var8)(var10, var3);
                    var7 = var16[var11];
                    var8 = var15.bind(var14)(var7);
                    var7 = var8.withDelay;
                    var9 = var16[var9];
                    var10 = var15.bind(var14)(var9);
                    var9 = var10.withTiming;
                    var12 = _closure2_slot4;
                    var2 = var2.HermesInternal;
                    var6 = var2.concat;
                    var2 = '00';
                    var6 = var6.bind(var13)(var12, var2);
                    var2 = {};
                    var12 = 300;
                    var2['duration'] = var12;
                    var12 = var16[var11];
                    var12 = var15.bind(var14)(var12);
                    var13 = var12.Easing;
                    var12 = var13.out;
                    var11 = var16[var11];
                    var11 = var15.bind(var14)(var11);
                    var11 = var11.Easing;
                    var11 = var11.ease;
                    var11 = var12.bind(var13)(var11);
                    var2['easing'] = var11;
                    var6 = var9.bind(var10)(var6, var2);
                    var2 = 500;
                    var2 = var7.bind(var8)(var2, var6);
                    var2 = var4.bind(var5)(var3, var2);
                    var1['borderColor'] = var2;
                    return var1;
                }
            };
            var12 = {};
            var12['isNew'] = var17;
            var12['brandColor'] = var13;
            var13 = var5[var1];
            var13 = var15.bind(var4)(var13);
            var13 = var13.withSequence;
            var12['withSequence'] = var13;
            var13 = 37;
            var13 = var5[var13];
            var13 = var15.bind(var4)(var13);
            var13 = var13.withTiming;
            var12['withTiming'] = var13;
            var13 = var5[var1];
            var13 = var15.bind(var4)(var13);
            var13 = var13.Easing;
            var12['Easing'] = var13;
            var13 = var5[var1];
            var13 = var15.bind(var4)(var13);
            var13 = var13.withDelay;
            var12['withDelay'] = var13;
            var3['__closure'] = var12;
            var12 = 16609373875235.0;
            var3['__workletHash'] = var12;
            var12 = _closure1_slot20;
            var3['__initData'] = var12;
            var7 = var7.bind(var8)(var3);
            var3 = 38;
            var3 = var5[var3];
            var3 = var2.bind(var4)(var3);
            var3 = var3.bind(var4)(var11);
            var3 = var3.handleSelectOption;
            var _closure2_slot5 = var3;
            var13 = _closure1_slot3;
            var12 = var13.useCallback;
            var8 = new Array(4);
            var8[0] = var11;
            var8[1] = var10;
            var8[2] = var3;
            var3 = var9.length;
            var8[3] = var3;
            var3 = function() {
                var5 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 39;
                var4 = var2[var1];
                var1 = undefined;
                var6 = var5.bind(var1)(var4);
                var5 = var6.openLazy;
                var4 = _closure1_slot0;
                var3 = 41;
                var3 = var2[var3];
                var4 = var4.bind(var1)(var3);
                var3 = 40;
                var3 = var2[var3];
                var2 = var2.paths;
                var4 = var4.bind(var1)(var3, var2);
                var3 = {};
                var7 = _closure2_slot0;
                var3['guildId'] = var7;
                var2 = _closure2_slot1;
                var7 = var2.id;
                var3['promptId'] = var7;
                var7 = function onSelect(arg1, arg2) {
                    _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                        var1 = arg2;
                        var2 = !var1;
                        if(!var2) { _fun0012_ip = 40; continue _fun0012 }
case 41:
                        var3 = _closure2_slot1;
                        var2 = var3.required;
case 40:
                        if(!var2) { _fun0012_ip = 42; continue _fun0012 }
case 43:
                        var3 = _closure2_slot3;
                        var4 = var3.length;
                        var3 = 1;
                        var2 = var3 === var4;
case 42:
                        if(var2) { _fun0012_ip = 44; continue _fun0012 }
case 45:
                        var5 = _closure2_slot5;
                        var4 = _closure2_slot1;
                        var2 = null;
                        var3 = var2 != var1;
                        if(!var3) { _fun0012_ip = 24; continue _fun0012 }
case 46:
                        var3 = var1;
case 24:
                        var2 = undefined;
                        var1 = arg1;
                        var1 = var5.bind(var2)(var4, var1, var3);
case 44:
                        var1 = undefined;
                        return var1;
                    }
                };
                var3['onSelect'] = var7;
                var2 = var2.isNew;
                var2 = !var2;
                var3['canBeNew'] = var2;
                var2 = true;
                var3['returnToCustomize'] = var2;
                var2 = 'DropdownOptions';
                var2 = var5.bind(var6)(var4, var2, var3);
                return var1;
            };
            var13 = var12.bind(var13)(var3, var8);
            var3 = _closure1_slot17;
            var1 = var5[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.View;
            var1 = {};
            var8 = var20.promptContainer;
            var5 = new Array(2);
            var5[0] = var8;
            var5[1] = var7;
            var1['style'] = var5;
            var7 = var10.isNew;
            if(!var7) { _fun0010_ip = 47; continue _fun0010 }
case 48:
            var12 = _closure1_slot16;
            var19 = _closure1_slot0;
            var21 = _closure1_slot2;
            var15 = 20;
            var5 = var21[var15];
            var5 = var19.bind(var4)(var5);
            var8 = var5.TextBadge;
            var5 = {};
            var15 = var21[var15];
            var15 = var19.bind(var4)(var15);
            var15 = var15.BadgeColors;
            var15 = var15.BRAND;
            var5['color'] = var15;
            var15 = 21;
            var17 = var21[var15];
            var17 = var19.bind(var4)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var15 = var21[var15];
            var15 = var19.bind(var4)(var15);
            var15 = var15.t;
            var15 = var15.y2b7CA;
            var15 = var17.bind(var18)(var15);
            var5['text'] = var15;
            var15 = var20.badge;
            var5['style'] = var15;
            var15 = var20.badgeText;
            var5['textStyle'] = var15;
            var7 = var12.bind(var4)(var8, var5);
case 47:
            var5 = new Array(4);
            var5[0] = var7;
            var12 = _closure1_slot16;
            var8 = _closure1_slot23;
            var7 = {};
            var7['item'] = var10;
            var7 = var12.bind(var4)(var8, var7);
            var5[1] = var7;
            var12 = _closure1_slot17;
            var8 = _closure1_slot0;
            var15 = _closure1_slot2;
            var7 = 42;
            var7 = var15[var7];
            var7 = var8.bind(var4)(var7);
            var8 = var7.PressableHighlight;
            var7 = {};
            var15 = var20.dropdownContainer;
            var7['style'] = var15;
            var7['onPress'] = var13;
            var15 = var16.length;
            var13 = 0;
            var15 = var13 === var15;
            if(!var15) { _fun0010_ip = 49; continue _fun0010 }
case 50:
            var18 = _closure1_slot16;
            var23 = _closure1_slot0;
            var24 = _closure1_slot2;
            var13 = 22;
            var13 = var24[var13];
            var13 = var23.bind(var4)(var13);
            var17 = var13.Text;
            var13 = {'style': null, 'variant': 'text-sm/normal', 'color': 'text-muted'};
            var19 = var20.emptyDropdownText;
            var13['style'] = var19;
            var19 = 21;
            var21 = var24[var19];
            var21 = var23.bind(var4)(var21);
            var22 = var21.intl;
            var21 = var22.string;
            var19 = var24[var19];
            var19 = var23.bind(var4)(var19);
            var19 = var19.t;
            var19 = var19.GmSvdA;
            var19 = var21.bind(var22)(var19);
            var13['children'] = var19;
            var15 = var18.bind(var4)(var17, var13);
case 49:
            var13 = new Array(3);
            var13[0] = var15;
            var15 = var16.map;
            var14 = function(arg1) {
                var1 = arg1;
                var5 = _closure1_slot16;
                var4 = _closure1_slot26;
                var3 = {};
                var3['option'] = var1;
                var2 = var1.id;
                var1 = undefined;
                var1 = var5.bind(var1)(var4, var3, var2);
                return var1;
            };
            var14 = var15.bind(var16)(var14);
            var13[1] = var14;
            var16 = _closure1_slot16;
            var15 = _closure1_slot4;
            var14 = {};
            var17 = var20.dropdownIconContainer;
            var14['style'] = var17;
            var19 = _closure1_slot16;
            var18 = _closure1_slot5;
            var17 = {};
            var20 = var20.dropdownIcon;
            var17['style'] = var20;
            var21 = _closure1_slot1;
            var22 = _closure1_slot2;
            var20 = 43;
            var20 = var22[var20];
            var20 = var21.bind(var4)(var20);
            var17['source'] = var20;
            var17 = var19.bind(var4)(var18, var17);
            var14['children'] = var17;
            var14 = var16.bind(var4)(var15, var14);
            var13[2] = var14;
            var7['children'] = var13;
            var7 = var12.bind(var4)(var8, var7);
            var5[2] = var7;
            var8 = _closure1_slot16;
            var7 = _closure1_slot24;
            var6 = {};
            var6['guildId'] = var11;
            var6['prompt'] = var10;
            var6['selectedOptionIds'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[3] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot27 = var1;
    var1 = function MultipleChoicePrompt(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var1 = arg1;
            var11 = var1.guildId;
            var _closure2_slot0 = var11;
            var10 = var1.prompt;
            var _closure2_slot1 = var10;
            var1 = _closure1_slot19;
            var4 = undefined;
            var14 = var1.bind(var4)();
            var17 = var10.isNew;
            var _closure2_slot2 = var17;
            var16 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 17;
            var1 = var5[var1];
            var8 = var16.bind(var4)(var1);
            var3 = var8.useStateFromStoresArray;
            var1 = _closure1_slot11;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var4 = _closure1_slot11;
                var3 = var4.getOnboardingResponsesForPrompt;
                var2 = _closure2_slot0;
                var1 = _closure2_slot1;
                var1 = var1.id;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var9 = var3.bind(var8)(var2, var1);
            var _closure2_slot3 = var9;
            var2 = _closure1_slot1;
            var1 = 38;
            var1 = var5[var1];
            var1 = var2.bind(var4)(var1);
            var1 = var1.bind(var4)(var11);
            var1 = var1.handleSelectOption;
            var _closure2_slot4 = var1;
            var1 = 35;
            var1 = var5[var1];
            var8 = var16.bind(var4)(var1);
            var3 = var8.useToken;
            var1 = 13;
            var1 = var5[var1];
            var1 = var2.bind(var4)(var1);
            var1 = var1.colors;
            var1 = var1.BACKGROUND_BRAND;
            var15 = var3.bind(var8)(var1);
            var _closure2_slot5 = var15;
            var1 = 36;
            var3 = var5[var1];
            var12 = var16.bind(var4)(var3);
            var8 = var12.useAnimatedStyle;
            var3 = function o() {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    var1 = _closure2_slot2;
                    var4 = _closure2_slot5;
                    var2 = global;
                    var3 = var2.HermesInternal;
                    var3 = var3.concat;
                    var13 = '';
                    if(var1) { _fun0014_ip = 12; continue _fun0014 }
case 38:
                    var1 = '00';
                    var10 = var3.bind(var13)(var4, var1);
                    _fun0014_ip = 39; continue _fun0014;
case 12:
                    var1 = 'FF';
                    var10 = var3.bind(var13)(var4, var1);
case 39:
                    var1 = {};
                    var15 = _closure1_slot0;
                    var16 = _closure1_slot2;
                    var11 = 36;
                    var3 = var16[var11];
                    var14 = undefined;
                    var5 = var15.bind(var14)(var3);
                    var4 = var5.withSequence;
                    var9 = 37;
                    var3 = var16[var9];
                    var8 = var15.bind(var14)(var3);
                    var7 = var8.withTiming;
                    var3 = {};
                    var12 = 1;
                    var3['duration'] = var12;
                    var12 = var16[var11];
                    var12 = var15.bind(var14)(var12);
                    var18 = var12.Easing;
                    var17 = var18.in;
                    var12 = var16[var11];
                    var12 = var15.bind(var14)(var12);
                    var12 = var12.Easing;
                    var12 = var12.ease;
                    var12 = var17.bind(var18)(var12);
                    var3['easing'] = var12;
                    var3 = var7.bind(var8)(var10, var3);
                    var7 = var16[var11];
                    var8 = var15.bind(var14)(var7);
                    var7 = var8.withDelay;
                    var9 = var16[var9];
                    var10 = var15.bind(var14)(var9);
                    var9 = var10.withTiming;
                    var12 = _closure2_slot5;
                    var2 = var2.HermesInternal;
                    var6 = var2.concat;
                    var2 = '00';
                    var6 = var6.bind(var13)(var12, var2);
                    var2 = {};
                    var12 = 300;
                    var2['duration'] = var12;
                    var12 = var16[var11];
                    var12 = var15.bind(var14)(var12);
                    var13 = var12.Easing;
                    var12 = var13.out;
                    var11 = var16[var11];
                    var11 = var15.bind(var14)(var11);
                    var11 = var11.Easing;
                    var11 = var11.ease;
                    var11 = var12.bind(var13)(var11);
                    var2['easing'] = var11;
                    var6 = var9.bind(var10)(var6, var2);
                    var2 = 500;
                    var2 = var7.bind(var8)(var2, var6);
                    var2 = var4.bind(var5)(var3, var2);
                    var1['borderColor'] = var2;
                    return var1;
                }
            };
            var13 = {};
            var13['isNew'] = var17;
            var13['brandColor'] = var15;
            var15 = var5[var1];
            var15 = var16.bind(var4)(var15);
            var15 = var15.withSequence;
            var13['withSequence'] = var15;
            var15 = 37;
            var15 = var5[var15];
            var15 = var16.bind(var4)(var15);
            var15 = var15.withTiming;
            var13['withTiming'] = var15;
            var15 = var5[var1];
            var15 = var16.bind(var4)(var15);
            var15 = var15.Easing;
            var13['Easing'] = var15;
            var15 = var5[var1];
            var15 = var16.bind(var4)(var15);
            var15 = var15.withDelay;
            var13['withDelay'] = var15;
            var3['__closure'] = var13;
            var13 = 12802766002208.0;
            var3['__workletHash'] = var13;
            var13 = _closure1_slot21;
            var3['__initData'] = var13;
            var8 = var8.bind(var12)(var3);
            var3 = _closure1_slot17;
            var1 = var5[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.View;
            var1 = {};
            var12 = var14.promptContainer;
            var5 = new Array(2);
            var5[0] = var12;
            var5[1] = var8;
            var1['style'] = var5;
            var8 = var10.isNew;
            if(!var8) { _fun0013_ip = 51; continue _fun0013 }
case 52:
            var13 = _closure1_slot16;
            var18 = _closure1_slot0;
            var19 = _closure1_slot2;
            var15 = 20;
            var5 = var19[var15];
            var5 = var18.bind(var4)(var5);
            var12 = var5.TextBadge;
            var5 = {};
            var15 = var19[var15];
            var15 = var18.bind(var4)(var15);
            var15 = var15.BadgeColors;
            var15 = var15.BRAND;
            var5['color'] = var15;
            var15 = 21;
            var16 = var19[var15];
            var16 = var18.bind(var4)(var16);
            var17 = var16.intl;
            var16 = var17.string;
            var15 = var19[var15];
            var15 = var18.bind(var4)(var15);
            var15 = var15.t;
            var15 = var15.y2b7CA;
            var15 = var16.bind(var17)(var15);
            var5['text'] = var15;
            var15 = var14.badge;
            var5['style'] = var15;
            var14 = var14.badgeText;
            var5['textStyle'] = var14;
            var8 = var13.bind(var4)(var12, var5);
case 51:
            var5 = new Array(4);
            var5[0] = var8;
            var13 = _closure1_slot16;
            var12 = _closure1_slot23;
            var8 = {};
            var8['item'] = var10;
            var8 = var13.bind(var4)(var12, var8);
            var5[1] = var8;
            var12 = var10.options;
            var8 = var12.map;
            var7 = function(arg1) {
                var1 = arg1;
                var _closure3_slot0 = var1;
                var5 = _closure1_slot16;
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 44;
                var2 = var4[var2];
                var4 = undefined;
                var3 = var3.bind(var4)(var2);
                var2 = {};
                var8 = _closure2_slot0;
                var2['guildId'] = var8;
                var2['option'] = var1;
                var10 = _closure2_slot3;
                var9 = var10.includes;
                var8 = var1.id;
                var8 = var9.bind(var10)(var8);
                var2['selected'] = var8;
                var7 = function onSelect(arg1) {
                    _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                        var1 = arg1;
                        var5 = _closure3_slot0;
                        var2 = !var1;
                        if(!var2) { _fun0015_ip = 19; continue _fun0015 }
case 53:
                        var3 = _closure2_slot1;
                        var2 = var3.required;
case 19:
                        if(!var2) { _fun0015_ip = 54; continue _fun0015 }
case 55:
                        var3 = _closure2_slot3;
                        var4 = var3.length;
                        var3 = 1;
                        var2 = var3 === var4;
case 54:
                        if(var2) { _fun0015_ip = 56; continue _fun0015 }
case 57:
                        var4 = _closure2_slot4;
                        var3 = _closure2_slot1;
                        var2 = null;
                        var2 = var2 != var1;
                        if(!var2) { _fun0015_ip = 58; continue _fun0015 }
case 59:
                        var2 = var1;
case 58:
                        var1 = undefined;
                        var1 = var4.bind(var1)(var3, var5, var2);
case 56:
                        var1 = undefined;
                        return var1;
                    }
                };
                var2['onSelect'] = var7;
                var7 = true;
                var2['suppressMemberCount'] = var7;
                var6 = _closure2_slot1;
                var6 = var6.isNew;
                var6 = !var6;
                var2['canBeNew'] = var6;
                var1 = var1.id;
                var1 = var5.bind(var4)(var3, var2, var1);
                return var1;
            };
            var7 = var8.bind(var12)(var7);
            var5[2] = var7;
            var8 = _closure1_slot16;
            var7 = _closure1_slot24;
            var6 = {};
            var6['guildId'] = var11;
            var6['prompt'] = var10;
            var6['selectedOptionIds'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[3] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot28 = var1;
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
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var13 = 1;
    var4 = var6[var13];
    var4 = var5.bind(var1)(var4);
    var7 = var4.View;
    var _closure1_slot4 = var7;
    var7 = var4.Image;
    var _closure1_slot5 = var7;
    var4 = var4.ScrollView;
    var _closure1_slot6 = var4;
    var14 = 2;
    var4 = var6[var14];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var19 = 6;
    var4 = var6[var19];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.GuildOnboardingTab;
    var _closure1_slot12 = var7;
    var4 = var4.OnboardingPromptType;
    var _closure1_slot13 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var12 = var4.Fonts;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.EMOJI_URL_BASE_SIZE;
    var _closure1_slot14 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ReadStateTypes;
    var _closure1_slot15 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot16 = var7;
    var7 = var4.jsxs;
    var _closure1_slot17 = var7;
    var4 = var4.Fragment;
    var _closure1_slot18 = var4;
    var4 = 12;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 13;
    var15 = var6[var10];
    var15 = var11.bind(var1)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_16;
    var9['paddingHorizontal'] = var15;
    var4['container'] = var9;
    var9 = {};
    var15 = var6[var10];
    var15 = var11.bind(var1)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_16;
    var9['marginTop'] = var15;
    var4['sheetTitle'] = var9;
    var9 = {};
    var20 = 'relative';
    var9['position'] = var20;
    var15 = var6[var10];
    var15 = var11.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.BACKGROUND_SURFACE_HIGH;
    var9['backgroundColor'] = var15;
    var15 = var6[var10];
    var15 = var11.bind(var1)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_12;
    var9['marginTop'] = var15;
    var15 = var6[var10];
    var15 = var11.bind(var1)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_12;
    var9['padding'] = var15;
    var15 = var6[var10];
    var15 = var11.bind(var1)(var15);
    var15 = var15.radii;
    var15 = var15.md;
    var9['borderRadius'] = var15;
    var9['borderWidth'] = var14;
    var14 = 'solid';
    var9['borderStyle'] = var14;
    var4['promptContainer'] = var9;
    var9 = {'flexDirection': 'row', 'alignItems': 'center'};
    var17 = 'row';
    var16 = 'center';
    var14 = var6[var10];
    var14 = var11.bind(var1)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_12;
    var9['marginBottom'] = var14;
    var4['titleContainer'] = var9;
    var9 = {};
    var15 = 14;
    var14 = var6[var15];
    var22 = var11.bind(var1)(var14);
    var21 = var12.PRIMARY_SEMIBOLD;
    var14 = var6[var10];
    var14 = var11.bind(var1)(var14);
    var14 = var14.colors;
    var18 = var14.MOBILE_TEXT_HEADING_PRIMARY;
    var14 = 16;
    var24 = var22.bind(var1)(var21, var18, var14);
    var25 = var9;
    var14 = copyDataProperties(var25, var24);
    var4['prompt'] = var9;
    var14 = 'absolute';
    var9 = {'position': 'absolute', 'top': 4294967290, 'right': 4294967290};
    var4['badge'] = var9;
    var9 = {};
    var18 = 'bold';
    var9['fontWeight'] = var18;
    var4['badgeText'] = var9;
    var9 = {};
    var18 = var6[var10];
    var18 = var11.bind(var1)(var18);
    var18 = var18.radii;
    var18 = var18.lg;
    var9['borderRadius'] = var18;
    var18 = var6[var10];
    var18 = var11.bind(var1)(var18);
    var18 = var18.colors;
    var18 = var18.BACKGROUND_BASE_LOWEST;
    var9['backgroundColor'] = var18;
    var18 = var6[var10];
    var18 = var11.bind(var1)(var18);
    var18 = var18.spacing;
    var18 = var18.PX_8;
    var9['padding'] = var18;
    var18 = var6[var10];
    var18 = var11.bind(var1)(var18);
    var18 = var18.spacing;
    var18 = var18.PX_32;
    var9['paddingRight'] = var18;
    var18 = 48;
    var9['minHeight'] = var18;
    var18 = var6[var10];
    var18 = var11.bind(var1)(var18);
    var18 = var18.spacing;
    var18 = var18.PX_12;
    var9['marginBottom'] = var18;
    var18 = 'flex';
    var9['display'] = var18;
    var9['flexDirection'] = var17;
    var21 = 'wrap';
    var9['flexWrap'] = var21;
    var9['alignItems'] = var16;
    var9['position'] = var20;
    var4['dropdownContainer'] = var9;
    var9 = {};
    var20 = var6[var10];
    var20 = var11.bind(var1)(var20);
    var20 = var20.spacing;
    var20 = var20.PX_12;
    var9['marginVertical'] = var20;
    var20 = var6[var10];
    var20 = var11.bind(var1)(var20);
    var20 = var20.spacing;
    var20 = var20.PX_4;
    var9['marginLeft'] = var20;
    var4['emptyDropdownText'] = var9;
    var9 = {};
    var20 = var6[var10];
    var20 = var11.bind(var1)(var20);
    var20 = var20.radii;
    var20 = var20.sm;
    var9['borderRadius'] = var20;
    var20 = var6[var10];
    var20 = var11.bind(var1)(var20);
    var20 = var20.colors;
    var20 = var20.BACKGROUND_BASE_LOW;
    var9['backgroundColor'] = var20;
    var9['padding'] = var19;
    var19 = var6[var10];
    var19 = var11.bind(var1)(var19);
    var19 = var19.spacing;
    var19 = var19.PX_8;
    var9['marginRight'] = var19;
    var19 = var6[var10];
    var19 = var11.bind(var1)(var19);
    var19 = var19.spacing;
    var19 = var19.PX_8;
    var9['marginTop'] = var19;
    var9['display'] = var18;
    var9['flexDirection'] = var17;
    var9['alignItems'] = var16;
    var4['dropdownPill'] = var9;
    var9 = {'display': 'flex', 'alignItems': 'center'};
    var4['emojiContainer'] = var9;
    var9 = {};
    var9['position'] = var14;
    var14 = var6[var10];
    var14 = var11.bind(var1)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_4;
    var9['right'] = var14;
    var14 = var6[var10];
    var14 = var11.bind(var1)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_12;
    var9['top'] = var14;
    var4['dropdownIconContainer'] = var9;
    var9 = {'height': 32, 'width': 32};
    var4['dropdownIcon'] = var9;
    var17 = 18;
    var9 = {'fontSize': 18, 'lineHeight': 22, 'marginRight': 6};
    var4['optionTextEmoji'] = var9;
    var9 = {'height': 22, 'width': 22, 'marginRight': 6};
    var4['optionImageEmoji'] = var9;
    var9 = {};
    var14 = var6[var10];
    var14 = var11.bind(var1)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_4;
    var9['marginTop'] = var14;
    var4['helpText'] = var9;
    var9 = {};
    var14 = var6[var10];
    var14 = var11.bind(var1)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_24;
    var9['marginTop'] = var14;
    var14 = var6[var10];
    var14 = var11.bind(var1)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_16;
    var9['marginBottom'] = var14;
    var9['height'] = var13;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BORDER_SUBTLE;
    var9['backgroundColor'] = var13;
    var4['sectionSeparator'] = var9;
    var9 = {'height': 400, 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center'};
    var4['emptyContainer'] = var9;
    var9 = {'width': 120, 'height': 80};
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_16;
    var9['marginBottom'] = var13;
    var4['emptyContainerImage'] = var9;
    var9 = {};
    var13 = var6[var15];
    var16 = var11.bind(var1)(var13);
    var14 = var12.DISPLAY_SEMIBOLD;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.MOBILE_TEXT_HEADING_PRIMARY;
    var24 = var16.bind(var1)(var14, var13, var17);
    var25 = var9;
    var13 = copyDataProperties(var25, var24);
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.spacing;
    var14 = var13.PX_4;
    var13 = 'marginBottom';
    var9[12] = var14;
    var4['emptyContainerHeader'] = var9;
    var9 = {};
    var13 = var6[var15];
    var14 = var11.bind(var1)(var13);
    var13 = var12.DISPLAY_MEDIUM;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.TEXT_SUBTLE;
    var24 = var14.bind(var1)(var13, var12, var15);
    var25 = var9;
    var12 = copyDataProperties(var25, var24);
    var4['emptyContainerSubheader'] = var9;
    var9 = {};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_12;
    var9['marginTop'] = var12;
    var4['connectionsContainer'] = var9;
    var9 = {};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_12;
    var9['marginTop'] = var12;
    var4['connectionsPromptContainer'] = var9;
    var9 = {};
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_4;
    var9['marginBottom'] = var10;
    var4['connectionsTitle'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot19 = var4;
    var4 = {};
    var7 = 'function CustomizeCommunityTsx1(){const{isNew,brandColor,withSequence,withTiming,Easing,withDelay}=this.__closure;const rawBorderColor=isNew?brandColor+"FF":brandColor+"00";const borderColor=withSequence(withTiming(rawBorderColor,{duration:1,easing:Easing.in(Easing.ease)}),withDelay(500,withTiming(brandColor+"00",{duration:300,easing:Easing.out(Easing.ease)})));return{borderColor:borderColor};}';
    var4['code'] = var7;
    var _closure1_slot20 = var4;
    var4 = {};
    var7 = 'function CustomizeCommunityTsx2(){const{isNew,brandColor,withSequence,withTiming,Easing,withDelay}=this.__closure;const rawBorderColor=isNew?brandColor+"FF":brandColor+"00";const borderColor=withSequence(withTiming(rawBorderColor,{duration:1,easing:Easing.in(Easing.ease)}),withDelay(500,withTiming(brandColor+"00",{duration:300,easing:Easing.out(Easing.ease)})));return{borderColor:borderColor};}';
    var4['code'] = var7;
    var _closure1_slot21 = var4;
    var4 = 45;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_onboarding/native/CustomizeCommunity.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function CustomizeCommunity(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var1 = arg1;
            var13 = var1.guildId;
            var _closure2_slot0 = var13;
            var9 = var1.setTab;
            var1 = _closure1_slot19;
            var5 = undefined;
            var7 = var1.bind(var5)();
            var4 = _closure1_slot1;
            var8 = _closure1_slot2;
            var1 = 27;
            var1 = var8[var1];
            var1 = var4.bind(var5)(var1);
            var1 = var1.bind(var5)();
            var10 = var1.bottom;
            var3 = _closure1_slot0;
            var1 = 17;
            var11 = var8[var1];
            var15 = var3.bind(var5)(var11);
            var14 = var15.useStateFromStores;
            var11 = _closure1_slot9;
            var12 = new Array(1);
            var12[0] = var11;
            var11 = function() {
                var4 = _closure1_slot9;
                var3 = var4.hasUnread;
                var2 = _closure2_slot0;
                var1 = _closure1_slot15;
                var1 = var1.GUILD_ONBOARDING_QUESTION;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var12 = var14.bind(var15)(var12, var11);
            var _closure2_slot1 = var12;
            var1 = var8[var1];
            var14 = var3.bind(var5)(var1);
            var11 = var14.useStateFromStores;
            var1 = _closure1_slot8;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                    var3 = _closure1_slot8;
                    var2 = var3.getGuild;
                    var1 = _closure2_slot0;
                    var2 = var2.bind(var3)(var1);
                    var1 = null;
                    var3 = var1 == var2;
                    var1 = undefined;
                    if(var3) { _fun0017_ip = 60; continue _fun0017 }
case 61:
                    var1 = var2.latestOnboardingQuestionId;
case 60:
                    return var1;
                }
            };
            var3 = var11.bind(var14)(var3, var1);
            var1 = 28;
            var1 = var8[var1];
            var1 = var4.bind(var5)(var1);
            var4 = var1.bind(var5)(var13);
            var1 = var4.onboardingPromptsRaw;
            var20 = var4.newOnboardingPrompts;
            var19 = var4.onboardingPromptsWithNewAnswers;
            var27 = var4.newAnswersCount;
            var18 = var4.onboardingPrompts;
            var11 = _closure1_slot3;
            var8 = var11.useEffect;
            var4 = new Array(3);
            var4[0] = var13;
            var4[1] = var12;
            var4[2] = var3;
            var3 = function() {
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var2 = null;
                    var2 = var2 != var3;
                    if(!var2) { _fun0018_ip = 62; continue _fun0018 }
case 53:
                    var5 = _closure1_slot11;
                    var4 = var5.shouldFetchPrompts;
                    var3 = _closure2_slot0;
                    var3 = var4.bind(var5)(var3);
                    if(var3) { _fun0018_ip = 63; continue _fun0018 }
case 64:
                    var3 = _closure2_slot1;
case 63:
                    var2 = var3;
case 62:
                    if(!var2) { _fun0018_ip = 65; continue _fun0018 }
case 54:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 29;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.fetchOnboardingPrompts;
                    var1 = _closure2_slot0;
                    var1 = var2.bind(var3)(var1);
case 65:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var8.bind(var11)(var3, var4);
            var11 = _closure1_slot3;
            var8 = var11.useEffect;
            var4 = new Array(1);
            var4[0] = var13;
            var3 = function() {
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                    var2 = _closure2_slot0;
                    var1 = null;
                    if(!(var1 == var2)) { _fun0019_ip = 66; continue _fun0019 }
case 6:
                    var1 = undefined;
                    return var1;
case 66:
                    var1 = function() {
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var1 = 30;
                        var3 = var5[var1];
                        var1 = undefined;
                        var8 = var4.bind(var1)(var3);
                        var7 = var8.ackGuildFeature;
                        var4 = _closure2_slot0;
                        var3 = _closure1_slot15;
                        var6 = var3.GUILD_ONBOARDING_QUESTION;
                        var9 = _closure1_slot11;
                        var3 = var9.ackIdForGuild;
                        var3 = var3.bind(var9)(var4);
                        var3 = var7.bind(var8)(var4, var6, var3);
                        var3 = _closure1_slot1;
                        var2 = 31;
                        var2 = var5[var2];
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.updateOnboardingResponses;
                        var2 = var2.bind(var3)(var4);
                        return var1;
                    };
                    return var1;
                }
            };
            var3 = var8.bind(var11)(var3, var4);
            var8 = _closure1_slot3;
            var4 = var8.useCallback;
            var3 = new Array(1);
            var3[0] = var13;
            var2 = function(arg1) {
                _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                    var1 = arg1;
                    var4 = var1.type;
                    var3 = _closure1_slot13;
                    var3 = var3.MULTIPLE_CHOICE;
                    if(!(var3 !== var4)) { _fun0020_ip = 67; continue _fun0020 }
case 43:
                    var3 = _closure1_slot13;
                    var3 = var3.DROPDOWN;
                    if(!(var3 !== var4)) { _fun0020_ip = 12; continue _fun0020 }
case 68:
                    var3 = undefined;
                    return var3;
case 12:
                    var7 = _closure1_slot16;
                    var6 = _closure1_slot27;
                    var5 = {};
                    var3 = _closure2_slot0;
                    var5['guildId'] = var3;
                    var5['prompt'] = var1;
                    var4 = var1.id;
                    var3 = undefined;
                    var3 = var7.bind(var3)(var6, var5, var4);
                    return var3;
case 67:
                    var5 = _closure1_slot16;
                    var4 = _closure1_slot28;
                    var3 = {};
                    var2 = _closure2_slot0;
                    var3['guildId'] = var2;
                    var3['prompt'] = var1;
                    var2 = var1.id;
                    var1 = undefined;
                    var1 = var5.bind(var1)(var4, var3, var2);
                    return var1;
                }
            };
            var17 = var4.bind(var8)(var2, var3);
            var1 = var1.length;
            var11 = 0;
            if(!(var11 !== var1)) { _fun0016_ip = 69; continue _fun0016 }
case 70:
            var3 = _closure1_slot17;
            var2 = _closure1_slot6;
            var1 = {};
            var4 = var7.container;
            var1['style'] = var4;
            var4 = {};
            var12 = _closure1_slot1;
            var14 = _closure1_slot2;
            var8 = 13;
            var8 = var14[var8];
            var8 = var12.bind(var5)(var8);
            var8 = var8.spacing;
            var8 = var8.PX_16;
            var8 = var10 + var8;
            var4['paddingBottom'] = var8;
            var1['contentContainerStyle'] = var4;
            var4 = var20.length;
            var8 = var4 > var11;
            if(var8) { _fun0016_ip = 71; continue _fun0016 }
case 72:
            var4 = var19.length;
            var8 = var4 > var11;
case 71:
            if(!var8) { _fun0016_ip = 73; continue _fun0016 }
case 74:
            var14 = _closure1_slot17;
            var12 = _closure1_slot18;
            var4 = {};
            var21 = _closure1_slot16;
            var23 = _closure1_slot0;
            var26 = _closure1_slot2;
            var15 = 22;
            var15 = var26[var15];
            var15 = var23.bind(var5)(var15);
            var16 = var15.Text;
            var15 = {'style': null, 'variant': 'text-md/medium', 'color': 'mobile-text-heading-primary'};
            var22 = var7.sheetTitle;
            var15['style'] = var22;
            var22 = 21;
            var24 = var26[var22];
            var24 = var23.bind(var5)(var24);
            var25 = var24.intl;
            var24 = var25.format;
            var22 = var26[var22];
            var22 = var23.bind(var5)(var22);
            var22 = var22.t;
            var23 = var22.iB5Gqe;
            var22 = {};
            var26 = var20.length;
            var26 = var26 + var27;
            var22['count'] = var26;
            var22 = var24.bind(var25)(var23, var22);
            var15['children'] = var22;
            var16 = var21.bind(var5)(var16, var15);
            var15 = new Array(4);
            var15[0] = var16;
            var16 = var20.map;
            var16 = var16.bind(var20)(var17);
            var15[1] = var16;
            var16 = var19.map;
            var16 = var16.bind(var19)(var17);
            var15[2] = var16;
            var20 = _closure1_slot16;
            var19 = _closure1_slot4;
            var16 = {};
            var21 = var7.sectionSeparator;
            var16['style'] = var21;
            var16 = var20.bind(var5)(var19, var16);
            var15[3] = var16;
            var4['children'] = var15;
            var8 = var14.bind(var5)(var12, var4);
case 73:
            var4 = new Array(3);
            var4[0] = var8;
            var8 = var18.length;
            var8 = var8 > var11;
            if(!var8) { _fun0016_ip = 75; continue _fun0016 }
case 76:
            var14 = _closure1_slot17;
            var12 = _closure1_slot18;
            var11 = {};
            var20 = _closure1_slot16;
            var24 = _closure1_slot0;
            var25 = _closure1_slot2;
            var16 = 22;
            var15 = var25[var16];
            var15 = var24.bind(var5)(var15);
            var19 = var15.Text;
            var15 = {'style': null, 'variant': 'text-md/medium', 'color': 'mobile-text-heading-primary'};
            var21 = var7.sheetTitle;
            var15['style'] = var21;
            var21 = 21;
            var22 = var25[var21];
            var22 = var24.bind(var5)(var22);
            var26 = var22.intl;
            var23 = var26.string;
            var22 = var25[var21];
            var22 = var24.bind(var5)(var22);
            var22 = var22.t;
            var22 = var22.BGkaer;
            var22 = var23.bind(var26)(var22);
            var15['children'] = var22;
            var19 = var20.bind(var5)(var19, var15);
            var15 = new Array(3);
            var15[0] = var19;
            var20 = _closure1_slot16;
            var16 = var25[var16];
            var16 = var24.bind(var5)(var16);
            var19 = var16.Text;
            var16 = {'variant': 'text-xs/medium', 'color': 'text-muted'};
            var22 = var25[var21];
            var22 = var24.bind(var5)(var22);
            var23 = var22.intl;
            var22 = var23.string;
            var21 = var25[var21];
            var21 = var24.bind(var5)(var21);
            var21 = var21.t;
            var21 = var21.r6Vm8T;
            var21 = var22.bind(var23)(var21);
            var16['children'] = var21;
            var16 = var20.bind(var5)(var19, var16);
            var15[1] = var16;
            var16 = var18.map;
            var16 = var16.bind(var18)(var17);
            var15[2] = var16;
            var11['children'] = var15;
            var8 = var14.bind(var5)(var12, var11);
case 75:
            var4[1] = var8;
            var12 = _closure1_slot16;
            var11 = _closure1_slot25;
            var8 = {};
            var8['guildId'] = var13;
            var8 = var12.bind(var5)(var11, var8);
            var4[2] = var8;
            var1['children'] = var4;
            var1 = var3.bind(var5)(var2, var1);
            _fun0016_ip = 77; continue _fun0016;
case 69:
            var4 = _closure1_slot16;
            var3 = _closure1_slot6;
            var2 = {};
            var7 = var7.container;
            var2['style'] = var7;
            var7 = {};
            var11 = _closure1_slot1;
            var12 = _closure1_slot2;
            var8 = 13;
            var8 = var12[var8];
            var8 = var11.bind(var5)(var8);
            var8 = var8.spacing;
            var8 = var8.PX_16;
            var8 = var10 + var8;
            var7['paddingBottom'] = var8;
            var2['contentContainerStyle'] = var7;
            var8 = _closure1_slot16;
            var7 = _closure1_slot22;
            var6 = {};
            var6['setTab'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 77:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();