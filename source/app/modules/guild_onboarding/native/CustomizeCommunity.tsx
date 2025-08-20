// app/modules/guild_onboarding/native/CustomizeCommunity.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var14 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var14;
    var _closure1_slot2 = var6;
    var1 = function EmptyCustomizeCommunity(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var1 = var1.setTab;
            var _closure2_slot0 = var1;
            var1 = _closure1_slot20;
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
            var3 = _closure1_slot18;
            var2 = _closure1_slot4;
            var1 = {};
            var5 = var11.emptyContainer;
            var1['style'] = var5;
            var8 = _closure1_slot17;
            var6 = _closure1_slot5;
            var5 = {};
            var12 = var11.emptyContainerImage;
            var5['style'] = var12;
            var14 = _closure1_slot2;
            if(var9) { _fun0001_ip = 181; continue _fun0001 }
 172:
            var9 = 19;
            var9 = var14[var9];
            _fun0001_ip = 188; continue _fun0001;
 181:
            var12 = 18;
            var9 = var14[var12];
 188:
            var9 = var10.bind(var4)(var9);
            var5['source'] = var9;
            var6 = var8.bind(var4)(var6, var5);
            var5 = new Array(3);
            var5[0] = var6;
            var15 = _closure1_slot17;
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
            var16 = var16.leKHQ0;
            var16 = var17.bind(var18)(var16);
            var8['children'] = var16;
            var8 = var15.bind(var4)(var12, var8);
            var5[1] = var8;
            var8 = _closure1_slot17;
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
            var10 = var9.jH+ktL;
            var9 = {};
            var13 = function onBrowseChannels() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure2_slot1;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0002_ip = 37; continue _fun0002 }
 13:
                    var3 = _closure2_slot0;
                    var1 = _closure1_slot12;
                    var2 = var1.BROWSE;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
 37:
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
    var _closure1_slot23 = var1;
    var1 = function PromptTitle(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arg1;
            var9 = var1.item;
            var1 = _closure1_slot20;
            var4 = undefined;
            var8 = var1.bind(var4)();
            var3 = _closure1_slot17;
            var2 = _closure1_slot4;
            var1 = {};
            var5 = var8.titleContainer;
            var1['style'] = var5;
            var7 = _closure1_slot18;
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var13 = 20;
            var5 = var5[var13];
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
            if(!var11) { _fun0003_ip = 175; continue _fun0003 }
 115:
            var12 = _closure1_slot18;
            var11 = _closure1_slot0;
            var10 = _closure1_slot2;
            var10 = var10[var13];
            var10 = var11.bind(var4)(var10);
            var11 = var10.Text;
            var10 = {'variant': 'text-md/bold', 'color': 'text-danger'};
            var13 = [' ', '*'];
            var10['children'] = var13;
            var9 = var12.bind(var4)(var11, var10);
 175:
            var8[1] = var9;
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot24 = var1;
    var1 = function PromptHelpText(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var1 = arg1;
            var2 = var1.guildId;
            var _closure2_slot0 = var2;
            var10 = var1.prompt;
            var1 = var1.selectedOptionIds;
            var _closure2_slot1 = var1;
            var5 = undefined;
            var _closure2_slot2 = var5;
            var1 = _closure1_slot20;
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
            if(var4) { _fun0004_ip = 139; continue _fun0004 }
 108:
            var9 = var10.options;
            var4 = var1 == var9;
            var3 = undefined;
            if(var4) { _fun0004_ip = 139; continue _fun0004 }
 122:
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
 139:
            _closure2_slot2 = var3;
            var12 = _closure1_slot3;
            var9 = var12.useMemo;
            var8 = new Array(1);
            var8[0] = var3;
            var4 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var3 = _closure2_slot2;
                    var1 = null;
                    if(!(var1 == var3)) { _fun0005_ip = 43; continue _fun0005 }
 13:
                    var1 = global;
                    var1 = var1.Set;
                    var3 = var1.prototype;
                    var3 = Object.create(var3, {constructor: {value: var1}});
                    var7 = var3;
                    var1 = new var7[var1](var6);
                    var1 = var1 instanceof Object ? var1 : var3;
                    _fun0005_ip = 83; continue _fun0005;
 43:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 22;
                    var4 = var4[var3];
                    var3 = undefined;
                    var4 = var5.bind(var3)(var4);
                    var3 = var4.getSelectedRoleIds;
                    var2 = _closure2_slot2;
                    var1 = var3.bind(var4)(var2);
 83:
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
 0:
                    var3 = _closure2_slot2;
                    var1 = null;
                    if(!(var1 == var3)) { _fun0006_ip = 43; continue _fun0006 }
 13:
                    var1 = global;
                    var1 = var1.Set;
                    var3 = var1.prototype;
                    var3 = Object.create(var3, {constructor: {value: var1}});
                    var7 = var3;
                    var1 = new var7[var1](var6);
                    var1 = var1 instanceof Object ? var1 : var3;
                    _fun0006_ip = 83; continue _fun0006;
 43:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 22;
                    var4 = var4[var3];
                    var3 = undefined;
                    var4 = var5.bind(var3)(var4);
                    var3 = var4.getSelectedChannelIds;
                    var2 = _closure2_slot2;
                    var1 = var3.bind(var4)(var2);
 83:
                    return var1;
                }
            };
            var8 = var8.bind(var12)(var3, var4);
            var4 = _closure1_slot1;
            var12 = _closure1_slot2;
            var3 = 23;
            var3 = var12[var3];
            var4 = var4.bind(var5)(var3);
            var3 = {};
            var3['guild'] = var11;
            var3['prompt'] = var10;
            var3['selectedRoleIds'] = var9;
            var3['selectedChannelIds'] = var8;
            var7 = function itemHook(arg1, arg2) {
                var5 = _closure1_slot17;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 20;
                var1 = var3[var1];
                var4 = undefined;
                var1 = var2.bind(var4)(var1);
                var3 = var1.Text;
                var2 = {'variant': 'text-xs/medium', 'color': 'header-primary'};
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
            if(!(var3 === var8)) { _fun0004_ip = 287; continue _fun0004 }
 281:
            var1 = null;
            if(!(var3 !== var7)) { _fun0004_ip = 372; continue _fun0004 }
 287:
            var4 = _closure1_slot18;
            var3 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 20;
            var2 = var9[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.Text;
            var2 = {'style': null, 'variant': 'text-xs/medium', 'color': 'header-secondary'};
            var6 = var6.helpText;
            var2['style'] = var6;
            var6 = new Array(3);
            var6[0] = var8;
            var8 = ' ';
            var6[1] = var8;
            var6[2] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 372:
            return var1;
        }
    };
    var _closure1_slot25 = var1;
    var1 = function DropdownOption(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var2 = arg1;
            var9 = var2.option;
            var _closure2_slot0 = var9;
            var2 = _closure1_slot20;
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
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var1 = _closure2_slot0;
                    var2 = var1.emoji;
                    var6 = null;
                    var3 = var6 == var2;
                    var1 = undefined;
                    if(var3) { _fun0008_ip = 29; continue _fun0008 }
 24:
                    var1 = var2.id;
 29:
                    var2 = var6 != var1;
                    var1 = null;
                    if(!var2) { _fun0008_ip = 80; continue _fun0008 }
 38:
                    var3 = _closure1_slot7;
                    var2 = var3.getUsableCustomEmojiById;
                    var5 = _closure2_slot0;
                    var5 = var5.emoji;
                    var6 = var6 == var5;
                    var4 = undefined;
                    if(var6) { _fun0008_ip = 75; continue _fun0008 }
 70:
                    var4 = var5.id;
 75:
                    var1 = var2.bind(var3)(var4);
 80:
                    return var1;
                }
            };
            var19 = var3.bind(var5)(var2, var1);
            var2 = var9.emoji;
            var14 = null;
            var3 = var14 == var2;
            var1 = undefined;
            if(var3) { _fun0007_ip = 100; continue _fun0007 }
 95:
            var1 = var2.id;
 100:
            var7 = var14 != var1;
            if(var7) { _fun0007_ip = 131; continue _fun0007 }
 107:
            var2 = var9.emoji;
            var3 = var14 == var2;
            var1 = undefined;
            if(var3) { _fun0007_ip = 127; continue _fun0007 }
 122:
            var1 = var2.name;
 127:
            var7 = var14 != var1;
 131:
            var3 = _closure1_slot18;
            var2 = _closure1_slot4;
            var1 = {};
            var5 = var15.dropdownPill;
            var1['style'] = var5;
            if(!var7) { _fun0007_ip = 354; continue _fun0007 }
 157:
            var10 = _closure1_slot17;
            var8 = _closure1_slot4;
            var5 = {};
            var11 = var15.emojiContainer;
            var5['style'] = var11;
            var13 = _closure1_slot17;
            var12 = _closure1_slot1;
            var16 = _closure1_slot2;
            var11 = 29;
            var11 = var16[var11];
            var12 = var12.bind(var4)(var11);
            var11 = {};
            var16 = var15.optionTextEmoji;
            var11['textEmojiStyle'] = var16;
            var15 = var15.optionImageEmoji;
            var11['fastImageStyle'] = var15;
            var16 = var14 != var19;
            var15 = undefined;
            if(!var16) { _fun0007_ip = 295; continue _fun0007 }
 234:
            var17 = _closure1_slot1;
            var18 = _closure1_slot2;
            var16 = 30;
            var16 = var18[var16];
            var18 = var17.bind(var4)(var16);
            var17 = var18.getEmojiURL;
            var16 = {};
            var20 = var19.id;
            var16['id'] = var20;
            var19 = var19.animated;
            var16['animated'] = var19;
            var19 = _closure1_slot15;
            var16['size'] = var19;
            var15 = var17.bind(var18)(var16);
 295:
            var11['src'] = var15;
            var16 = var9.emoji;
            var17 = var14 == var16;
            var15 = undefined;
            if(var17) { _fun0007_ip = 320; continue _fun0007 }
 315:
            var15 = var16.name;
 320:
            var16 = var14 != var15;
            var14 = '';
            if(!var16) { _fun0007_ip = 334; continue _fun0007 }
 331:
            var14 = var15;
 334:
            var11['name'] = var14;
            var11 = var13.bind(var4)(var12, var11);
            var5['children'] = var11;
            var7 = var10.bind(var4)(var8, var5);
 354:
            var5 = new Array(2);
            var5[0] = var7;
            var8 = _closure1_slot17;
            var7 = _closure1_slot0;
            var10 = _closure1_slot2;
            var6 = 20;
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
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var1 = arg1;
            var11 = var1.guildId;
            var _closure2_slot0 = var11;
            var10 = var1.prompt;
            var _closure2_slot1 = var10;
            var1 = _closure1_slot20;
            var4 = undefined;
            var20 = var1.bind(var4)();
            var15 = var10.isNew;
            var _closure2_slot2 = var15;
            var13 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 17;
            var1 = var5[var1];
            var7 = var13.bind(var4)(var1);
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
            var1 = 31;
            var1 = var5[var1];
            var1 = var13.bind(var4)(var1);
            var1 = var1.isNotNullish;
            var16 = var2.bind(var3)(var1);
            var1 = 32;
            var1 = var5[var1];
            var3 = var13.bind(var4)(var1);
            var2 = var3.useColorValue;
            var1 = _closure1_slot14;
            var1 = var1.BRAND_500;
            var12 = var2.bind(var3)(var1);
            var _closure2_slot4 = var12;
            var1 = 33;
            var2 = var5[var1];
            var7 = var13.bind(var4)(var2);
            var3 = var7.useAnimatedStyle;
            var2 = function u() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    var1 = _closure2_slot2;
                    var2 = _closure2_slot4;
                    var4 = var2.hex;
                    var2 = global;
                    var3 = var2.HermesInternal;
                    var3 = var3.concat;
                    var13 = '';
                    if(var1) { _fun0010_ip = 50; continue _fun0010 }
 36:
                    var1 = '00';
                    var10 = var3.bind(var13)(var4, var1);
                    _fun0010_ip = 62; continue _fun0010;
 50:
                    var1 = 'FF';
                    var10 = var3.bind(var13)(var4, var1);
 62:
                    var1 = {};
                    var15 = _closure1_slot0;
                    var16 = _closure1_slot2;
                    var11 = 33;
                    var3 = var16[var11];
                    var14 = undefined;
                    var5 = var15.bind(var14)(var3);
                    var4 = var5.withSequence;
                    var9 = 34;
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
                    var6 = _closure2_slot4;
                    var12 = var6.hex;
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
            var8 = {};
            var8['isNew'] = var15;
            var8['brandColor'] = var12;
            var12 = var5[var1];
            var12 = var13.bind(var4)(var12);
            var12 = var12.withSequence;
            var8['withSequence'] = var12;
            var12 = 34;
            var12 = var5[var12];
            var12 = var13.bind(var4)(var12);
            var12 = var12.withTiming;
            var8['withTiming'] = var12;
            var12 = var5[var1];
            var12 = var13.bind(var4)(var12);
            var12 = var12.Easing;
            var8['Easing'] = var12;
            var12 = var5[var1];
            var12 = var13.bind(var4)(var12);
            var12 = var12.withDelay;
            var8['withDelay'] = var12;
            var2['__closure'] = var8;
            var8 = 2221848663320.0;
            var2['__workletHash'] = var8;
            var8 = _closure1_slot21;
            var2['__initData'] = var8;
            var7 = var3.bind(var7)(var2);
            var2 = _closure1_slot1;
            var3 = 35;
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
                var1 = 36;
                var4 = var2[var1];
                var1 = undefined;
                var6 = var5.bind(var1)(var4);
                var5 = var6.openLazy;
                var4 = _closure1_slot0;
                var3 = 38;
                var3 = var2[var3];
                var4 = var4.bind(var1)(var3);
                var3 = 37;
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
                    _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                        var1 = arg2;
                        var2 = !var1;
                        if(!var2) { _fun0011_ip = 22; continue _fun0011 }
 9:
                        var3 = _closure2_slot1;
                        var2 = var3.required;
 22:
                        if(!var2) { _fun0011_ip = 44; continue _fun0011 }
 25:
                        var3 = _closure2_slot3;
                        var4 = var3.length;
                        var3 = 1;
                        var2 = var3 === var4;
 44:
                        if(var2) { _fun0011_ip = 82; continue _fun0011 }
 47:
                        var5 = _closure2_slot5;
                        var4 = _closure2_slot1;
                        var2 = null;
                        var3 = var2 != var1;
                        if(!var3) { _fun0011_ip = 70; continue _fun0011 }
 67:
                        var3 = var1;
 70:
                        var2 = undefined;
                        var1 = arg1;
                        var1 = var5.bind(var2)(var4, var1, var3);
 82:
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
            var3 = _closure1_slot18;
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
            if(!var7) { _fun0009_ip = 606; continue _fun0009 }
 471:
            var12 = _closure1_slot17;
            var19 = _closure1_slot0;
            var21 = _closure1_slot2;
            var15 = 39;
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
 606:
            var5 = new Array(4);
            var5[0] = var7;
            var12 = _closure1_slot17;
            var8 = _closure1_slot24;
            var7 = {};
            var7['item'] = var10;
            var7 = var12.bind(var4)(var8, var7);
            var5[1] = var7;
            var12 = _closure1_slot18;
            var8 = _closure1_slot0;
            var15 = _closure1_slot2;
            var7 = 40;
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
            if(!var15) { _fun0009_ip = 812; continue _fun0009 }
 698:
            var18 = _closure1_slot17;
            var23 = _closure1_slot0;
            var24 = _closure1_slot2;
            var13 = 20;
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
            var19 = var19.GmSvdH;
            var19 = var21.bind(var22)(var19);
            var13['children'] = var19;
            var15 = var18.bind(var4)(var17, var13);
 812:
            var13 = new Array(3);
            var13[0] = var15;
            var15 = var16.map;
            var14 = function(arg1) {
                var1 = arg1;
                var5 = _closure1_slot17;
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
            var16 = _closure1_slot17;
            var15 = _closure1_slot4;
            var14 = {};
            var17 = var20.dropdownIconContainer;
            var14['style'] = var17;
            var19 = _closure1_slot17;
            var18 = _closure1_slot5;
            var17 = {};
            var20 = var20.dropdownIcon;
            var17['style'] = var20;
            var21 = _closure1_slot1;
            var22 = _closure1_slot2;
            var20 = 41;
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
            var8 = _closure1_slot17;
            var7 = _closure1_slot25;
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
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
            var1 = arg1;
            var11 = var1.guildId;
            var _closure2_slot0 = var11;
            var10 = var1.prompt;
            var _closure2_slot1 = var10;
            var1 = _closure1_slot20;
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
            var1 = 35;
            var1 = var5[var1];
            var1 = var2.bind(var4)(var1);
            var1 = var1.bind(var4)(var11);
            var1 = var1.handleSelectOption;
            var _closure2_slot4 = var1;
            var1 = 32;
            var1 = var5[var1];
            var8 = var16.bind(var4)(var1);
            var3 = var8.useColorValue;
            var1 = _closure1_slot14;
            var1 = var1.BRAND_500;
            var15 = var3.bind(var8)(var1);
            var _closure2_slot5 = var15;
            var1 = 33;
            var3 = var5[var1];
            var12 = var16.bind(var4)(var3);
            var8 = var12.useAnimatedStyle;
            var3 = function n() {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                    var1 = _closure2_slot2;
                    var2 = _closure2_slot5;
                    var4 = var2.hex;
                    var2 = global;
                    var3 = var2.HermesInternal;
                    var3 = var3.concat;
                    var13 = '';
                    if(var1) { _fun0013_ip = 50; continue _fun0013 }
 36:
                    var1 = '00';
                    var10 = var3.bind(var13)(var4, var1);
                    _fun0013_ip = 62; continue _fun0013;
 50:
                    var1 = 'FF';
                    var10 = var3.bind(var13)(var4, var1);
 62:
                    var1 = {};
                    var15 = _closure1_slot0;
                    var16 = _closure1_slot2;
                    var11 = 33;
                    var3 = var16[var11];
                    var14 = undefined;
                    var5 = var15.bind(var14)(var3);
                    var4 = var5.withSequence;
                    var9 = 34;
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
                    var6 = _closure2_slot5;
                    var12 = var6.hex;
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
            var15 = 34;
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
            var13 = 5743203043099.0;
            var3['__workletHash'] = var13;
            var13 = _closure1_slot22;
            var3['__initData'] = var13;
            var8 = var8.bind(var12)(var3);
            var3 = _closure1_slot18;
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
            if(!var8) { _fun0012_ip = 514; continue _fun0012 }
 379:
            var13 = _closure1_slot17;
            var18 = _closure1_slot0;
            var19 = _closure1_slot2;
            var15 = 39;
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
 514:
            var5 = new Array(4);
            var5[0] = var8;
            var13 = _closure1_slot17;
            var12 = _closure1_slot24;
            var8 = {};
            var8['item'] = var10;
            var8 = var13.bind(var4)(var12, var8);
            var5[1] = var8;
            var12 = var10.options;
            var8 = var12.map;
            var7 = function(arg1) {
                var1 = arg1;
                var _closure3_slot0 = var1;
                var5 = _closure1_slot17;
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 42;
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
                    _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                        var1 = arg1;
                        var5 = _closure3_slot0;
                        var2 = !var1;
                        if(!var2) { _fun0014_ip = 29; continue _fun0014 }
 16:
                        var3 = _closure2_slot1;
                        var2 = var3.required;
 29:
                        if(!var2) { _fun0014_ip = 51; continue _fun0014 }
 32:
                        var3 = _closure2_slot3;
                        var4 = var3.length;
                        var3 = 1;
                        var2 = var3 === var4;
 51:
                        if(var2) { _fun0014_ip = 86; continue _fun0014 }
 54:
                        var4 = _closure2_slot4;
                        var3 = _closure2_slot1;
                        var2 = null;
                        var2 = var2 != var1;
                        if(!var2) { _fun0014_ip = 77; continue _fun0014 }
 74:
                        var2 = var1;
 77:
                        var1 = undefined;
                        var1 = var4.bind(var1)(var3, var5, var2);
 86:
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
            var8 = _closure1_slot17;
            var7 = _closure1_slot25;
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
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.View;
    var _closure1_slot4 = var7;
    var7 = var4.Image;
    var _closure1_slot5 = var7;
    var4 = var4.ScrollView;
    var _closure1_slot6 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var14.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var14.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var15 = 4;
    var4 = var6[var15];
    var4 = var14.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var14.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var14.bind(var1)(var4);
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
    var7 = var4.Color;
    var _closure1_slot14 = var7;
    var11 = var4.Fonts;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.EMOJI_URL_BASE_SIZE;
    var _closure1_slot15 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ReadStateTypes;
    var _closure1_slot16 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot17 = var7;
    var7 = var4.jsxs;
    var _closure1_slot18 = var7;
    var4 = var4.Fragment;
    var _closure1_slot19 = var4;
    var4 = 12;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var18 = 16;
    var9['paddingHorizontal'] = var18;
    var4['container'] = var9;
    var9 = {};
    var9['marginTop'] = var18;
    var4['sheetTitle'] = var9;
    var9 = {'position': 'relative', 'backgroundColor': null, 'marginTop': 12, 'padding': 12, 'borderRadius': null, 'borderWidth': 2, 'borderStyle': 'solid'};
    var10 = 13;
    var12 = var6[var10];
    var12 = var14.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_SECONDARY;
    var9['backgroundColor'] = var12;
    var12 = var6[var10];
    var12 = var14.bind(var1)(var12);
    var12 = var12.radii;
    var12 = var12.md;
    var9['borderRadius'] = var12;
    var4['promptContainer'] = var9;
    var9 = {'flexDirection': 'row', 'alignItems': 'center', 'marginBottom': 12};
    var4['titleContainer'] = var9;
    var9 = {};
    var13 = 14;
    var12 = var6[var13];
    var17 = var14.bind(var1)(var12);
    var16 = var11.PRIMARY_SEMIBOLD;
    var12 = var6[var10];
    var12 = var14.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.HEADER_PRIMARY;
    var20 = var17.bind(var1)(var16, var12, var18);
    var21 = var9;
    var12 = copyDataProperties(var21, var20);
    var4['prompt'] = var9;
    var9 = {};
    var12 = var6[var10];
    var12 = var14.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_ACCENT;
    var9['backgroundColor'] = var12;
    var4['required'] = var9;
    var9 = {'position': 'absolute', 'top': 4294967290, 'right': 4294967290};
    var4['badge'] = var9;
    var9 = {};
    var12 = 'bold';
    var9['fontWeight'] = var12;
    var4['badgeText'] = var9;
    var9 = {'borderRadius': null, 'backgroundColor': null, 'padding': 8, 'paddingRight': 32, 'minHeight': 48, 'marginBottom': 12, 'display': 'flex', 'flexDirection': 'row', 'flexWrap': 'wrap', 'alignItems': 'center', 'position': 'relative'};
    var12 = var6[var10];
    var12 = var14.bind(var1)(var12);
    var12 = var12.radii;
    var12 = var12.lg;
    var9['borderRadius'] = var12;
    var12 = var6[var10];
    var12 = var14.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_TERTIARY;
    var9['backgroundColor'] = var12;
    var4['dropdownContainer'] = var9;
    var9 = {'marginVertical': 12, 'marginLeft': 4};
    var4['emptyDropdownText'] = var9;
    var9 = {'borderRadius': null, 'backgroundColor': null, 'padding': 6, 'marginRight': 8, 'marginTop': 8, 'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center'};
    var12 = var6[var10];
    var12 = var14.bind(var1)(var12);
    var12 = var12.radii;
    var12 = var12.sm;
    var9['borderRadius'] = var12;
    var12 = var6[var10];
    var12 = var14.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_PRIMARY;
    var9['backgroundColor'] = var12;
    var4['dropdownPill'] = var9;
    var9 = {'display': 'flex', 'alignItems': 'center'};
    var4['emojiContainer'] = var9;
    var9 = {'position': 'absolute', 'right': 4, 'top': 12};
    var4['dropdownIconContainer'] = var9;
    var9 = {'height': 32, 'width': 32};
    var4['dropdownIcon'] = var9;
    var18 = 18;
    var9 = {'fontSize': 18, 'lineHeight': 22, 'marginRight': 6};
    var4['optionTextEmoji'] = var9;
    var9 = {'height': 22, 'width': 22, 'marginRight': 6};
    var4['optionImageEmoji'] = var9;
    var9 = {};
    var9['marginTop'] = var15;
    var4['helpText'] = var9;
    var9 = {'marginTop': 24, 'marginBottom': 16, 'height': 1};
    var12 = var6[var10];
    var12 = var14.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_ACCENT;
    var9['backgroundColor'] = var12;
    var4['sectionSeparator'] = var9;
    var9 = {'height': 400, 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center'};
    var4['emptyContainer'] = var9;
    var9 = {'width': 120, 'height': 80, 'marginBottom': 16};
    var4['emptyContainerImage'] = var9;
    var9 = {};
    var12 = var6[var13];
    var17 = var14.bind(var1)(var12);
    var16 = var11.DISPLAY_SEMIBOLD;
    var12 = var6[var10];
    var12 = var14.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.HEADER_PRIMARY;
    var20 = var17.bind(var1)(var16, var12, var18);
    var21 = var9;
    var12 = copyDataProperties(var21, var20);
    var12 = 'marginBottom';
    var9[var12] = var15;
    var4['emptyContainerHeader'] = var9;
    var9 = {};
    var12 = var6[var13];
    var12 = var14.bind(var1)(var12);
    var11 = var11.DISPLAY_MEDIUM;
    var10 = var6[var10];
    var10 = var14.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.HEADER_SECONDARY;
    var20 = var12.bind(var1)(var11, var10, var13);
    var21 = var9;
    var10 = copyDataProperties(var21, var20);
    var4['emptyContainerSubheader'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot20 = var4;
    var4 = {};
    var7 = 'function CustomizeCommunityTsx1(){const{isNew,brandColor,withSequence,withTiming,Easing,withDelay}=this.__closure;const rawBorderColor=isNew?brandColor.hex+"FF":brandColor.hex+"00";const borderColor=withSequence(withTiming(rawBorderColor,{duration:1,easing:Easing.in(Easing.ease)}),withDelay(500,withTiming(brandColor.hex+"00",{duration:300,easing:Easing.out(Easing.ease)})));return{borderColor:borderColor};}';
    var4['code'] = var7;
    var _closure1_slot21 = var4;
    var4 = {};
    var7 = 'function CustomizeCommunityTsx2(){const{isNew,brandColor,withSequence,withTiming,Easing,withDelay}=this.__closure;const rawBorderColor=isNew?brandColor.hex+"FF":brandColor.hex+"00";const borderColor=withSequence(withTiming(rawBorderColor,{duration:1,easing:Easing.in(Easing.ease)}),withDelay(500,withTiming(brandColor.hex+"00",{duration:300,easing:Easing.out(Easing.ease)})));return{borderColor:borderColor};}';
    var4['code'] = var7;
    var _closure1_slot22 = var4;
    var4 = 43;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_onboarding/native/CustomizeCommunity.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function CustomizeCommunity(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
            var1 = arg1;
            var11 = var1.guildId;
            var _closure2_slot0 = var11;
            var9 = var1.setTab;
            var1 = _closure1_slot20;
            var5 = undefined;
            var7 = var1.bind(var5)();
            var4 = _closure1_slot1;
            var8 = _closure1_slot2;
            var1 = 24;
            var1 = var8[var1];
            var1 = var4.bind(var5)(var1);
            var1 = var1.bind(var5)();
            var10 = var1.bottom;
            var3 = _closure1_slot0;
            var1 = 17;
            var1 = var8[var1];
            var13 = var3.bind(var5)(var1);
            var12 = var13.useStateFromStores;
            var1 = _closure1_slot9;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                var4 = _closure1_slot9;
                var3 = var4.hasUnread;
                var2 = _closure2_slot0;
                var1 = _closure1_slot16;
                var1 = var1.GUILD_ONBOARDING_QUESTION;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var3 = var12.bind(var13)(var3, var1);
            var _closure2_slot1 = var3;
            var1 = 25;
            var1 = var8[var1];
            var1 = var4.bind(var5)(var1);
            var4 = var1.bind(var5)(var11);
            var1 = var4.onboardingPromptsRaw;
            var19 = var4.newOnboardingPrompts;
            var18 = var4.onboardingPromptsWithNewAnswers;
            var26 = var4.newAnswersCount;
            var17 = var4.onboardingPrompts;
            var12 = _closure1_slot3;
            var8 = var12.useEffect;
            var4 = new Array(2);
            var4[0] = var11;
            var4[1] = var3;
            var3 = function() {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                    var3 = _closure2_slot0;
                    var2 = null;
                    var2 = var2 != var3;
                    if(!var2) { _fun0016_ip = 48; continue _fun0016 }
 16:
                    var5 = _closure1_slot11;
                    var4 = var5.shouldFetchPrompts;
                    var3 = _closure2_slot0;
                    var3 = var4.bind(var5)(var3);
                    if(var3) { _fun0016_ip = 45; continue _fun0016 }
 41:
                    var3 = _closure2_slot1;
 45:
                    var2 = var3;
 48:
                    if(!var2) { _fun0016_ip = 91; continue _fun0016 }
 51:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 26;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.fetchOnboardingPrompts;
                    var1 = _closure2_slot0;
                    var1 = var2.bind(var3)(var1);
 91:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var8.bind(var12)(var3, var4);
            var12 = _closure1_slot3;
            var8 = var12.useEffect;
            var4 = new Array(1);
            var4[0] = var11;
            var3 = function() {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
                    var2 = _closure2_slot0;
                    var1 = null;
                    if(!(var1 == var2)) { _fun0017_ip = 17; continue _fun0017 }
 13:
                    var1 = undefined;
                    return var1;
 17:
                    var1 = function() {
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var1 = 27;
                        var3 = var5[var1];
                        var1 = undefined;
                        var8 = var4.bind(var1)(var3);
                        var7 = var8.ackGuildFeature;
                        var4 = _closure2_slot0;
                        var3 = _closure1_slot16;
                        var6 = var3.GUILD_ONBOARDING_QUESTION;
                        var9 = _closure1_slot11;
                        var3 = var9.ackIdForGuild;
                        var3 = var3.bind(var9)(var4);
                        var3 = var7.bind(var8)(var4, var6, var3);
                        var3 = _closure1_slot1;
                        var2 = 28;
                        var2 = var5[var2];
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.updateOnboardingResponses;
                        var2 = var2.bind(var3)(var4);
                        return var1;
                    };
                    return var1;
                }
            };
            var3 = var8.bind(var12)(var3, var4);
            var8 = _closure1_slot3;
            var4 = var8.useCallback;
            var3 = new Array(1);
            var3[0] = var11;
            var2 = function(arg1) {
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
                    var1 = arg1;
                    var4 = var1.type;
                    var3 = _closure1_slot13;
                    var3 = var3.MULTIPLE_CHOICE;
                    if(!(var3 !== var4)) { _fun0018_ip = 85; continue _fun0018 }
 25:
                    var3 = _closure1_slot13;
                    var3 = var3.DROPDOWN;
                    if(!(var3 !== var4)) { _fun0018_ip = 43; continue _fun0018 }
 39:
                    var3 = undefined;
                    return var3;
 43:
                    var7 = _closure1_slot17;
                    var6 = _closure1_slot27;
                    var5 = {};
                    var3 = _closure2_slot0;
                    var5['guildId'] = var3;
                    var5['prompt'] = var1;
                    var4 = var1.id;
                    var3 = undefined;
                    var3 = var7.bind(var3)(var6, var5, var4);
                    return var3;
 85:
                    var5 = _closure1_slot17;
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
            var16 = var4.bind(var8)(var2, var3);
            var1 = var1.length;
            var11 = 0;
            if(!(var11 !== var1)) { _fun0015_ip = 832; continue _fun0015 }
 267:
            var3 = _closure1_slot18;
            var2 = _closure1_slot6;
            var1 = {};
            var4 = var7.container;
            var1['style'] = var4;
            var4 = {};
            var8 = 16;
            var8 = var10 + var8;
            var4['paddingBottom'] = var8;
            var1['contentContainerStyle'] = var4;
            var4 = var19.length;
            var8 = var4 > var11;
            if(var8) { _fun0015_ip = 326; continue _fun0015 }
 317:
            var4 = var18.length;
            var8 = var4 > var11;
 326:
            if(!var8) { _fun0015_ip = 549; continue _fun0015 }
 332:
            var13 = _closure1_slot18;
            var12 = _closure1_slot19;
            var4 = {};
            var20 = _closure1_slot17;
            var22 = _closure1_slot0;
            var25 = _closure1_slot2;
            var14 = 20;
            var14 = var25[var14];
            var14 = var22.bind(var5)(var14);
            var15 = var14.Text;
            var14 = {'style': null, 'variant': 'text-md/medium', 'color': 'header-primary'};
            var21 = var7.sheetTitle;
            var14['style'] = var21;
            var21 = 21;
            var23 = var25[var21];
            var23 = var22.bind(var5)(var23);
            var24 = var23.intl;
            var23 = var24.format;
            var21 = var25[var21];
            var21 = var22.bind(var5)(var21);
            var21 = var21.t;
            var22 = var21.iB5Gqa;
            var21 = {};
            var25 = var19.length;
            var25 = var25 + var26;
            var21['count'] = var25;
            var21 = var23.bind(var24)(var22, var21);
            var14['children'] = var21;
            var15 = var20.bind(var5)(var15, var14);
            var14 = new Array(4);
            var14[0] = var15;
            var15 = var19.map;
            var15 = var15.bind(var19)(var16);
            var14[1] = var15;
            var15 = var18.map;
            var15 = var15.bind(var18)(var16);
            var14[2] = var15;
            var19 = _closure1_slot17;
            var18 = _closure1_slot4;
            var15 = {};
            var20 = var7.sectionSeparator;
            var15['style'] = var20;
            var15 = var19.bind(var5)(var18, var15);
            var14[3] = var15;
            var4['children'] = var14;
            var8 = var13.bind(var5)(var12, var4);
 549:
            var4 = new Array(2);
            var4[0] = var8;
            var8 = var17.length;
            var8 = var8 > var11;
            if(!var8) { _fun0015_ip = 816; continue _fun0015 }
 572:
            var13 = _closure1_slot18;
            var12 = _closure1_slot19;
            var11 = {};
            var19 = _closure1_slot17;
            var23 = _closure1_slot0;
            var24 = _closure1_slot2;
            var15 = 20;
            var14 = var24[var15];
            var14 = var23.bind(var5)(var14);
            var18 = var14.Text;
            var14 = {'style': null, 'variant': 'text-md/medium', 'color': 'header-primary'};
            var20 = var7.sheetTitle;
            var14['style'] = var20;
            var20 = 21;
            var21 = var24[var20];
            var21 = var23.bind(var5)(var21);
            var25 = var21.intl;
            var22 = var25.string;
            var21 = var24[var20];
            var21 = var23.bind(var5)(var21);
            var21 = var21.t;
            var21 = var21.BGkaen;
            var21 = var22.bind(var25)(var21);
            var14['children'] = var21;
            var18 = var19.bind(var5)(var18, var14);
            var14 = new Array(3);
            var14[0] = var18;
            var19 = _closure1_slot17;
            var15 = var24[var15];
            var15 = var23.bind(var5)(var15);
            var18 = var15.Text;
            var15 = {'variant': 'text-xs/medium', 'color': 'text-muted'};
            var21 = var24[var20];
            var21 = var23.bind(var5)(var21);
            var22 = var21.intl;
            var21 = var22.string;
            var20 = var24[var20];
            var20 = var23.bind(var5)(var20);
            var20 = var20.t;
            var20 = var20.r6Vm8f;
            var20 = var21.bind(var22)(var20);
            var15['children'] = var20;
            var15 = var19.bind(var5)(var18, var15);
            var14[1] = var15;
            var15 = var17.map;
            var15 = var15.bind(var17)(var16);
            var14[2] = var15;
            var11['children'] = var14;
            var8 = var13.bind(var5)(var12, var11);
 816:
            var4[1] = var8;
            var1['children'] = var4;
            var1 = var3.bind(var5)(var2, var1);
            _fun0015_ip = 901; continue _fun0015;
 832:
            var4 = _closure1_slot17;
            var3 = _closure1_slot6;
            var2 = {};
            var7 = var7.container;
            var2['style'] = var7;
            var7 = {};
            var8 = 16;
            var8 = var10 + var8;
            var7['paddingBottom'] = var8;
            var2['contentContainerStyle'] = var7;
            var8 = _closure1_slot17;
            var7 = _closure1_slot23;
            var6 = {};
            var6['setTab'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 901:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();