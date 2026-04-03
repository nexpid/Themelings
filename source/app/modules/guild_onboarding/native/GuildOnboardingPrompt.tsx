// app/modules/guild_onboarding/native/GuildOnboardingPrompt.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var1 = function PromptHeader(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var9 = var1.currentPrompt;
            var18 = var1.numberOfPrompts;
            var20 = var1.currentPromptIndex;
            var1 = _closure1_slot18;
            var4 = undefined;
            var10 = var1.bind(var4)();
            var3 = _closure1_slot16;
            var2 = _closure1_slot17;
            var1 = {};
            var7 = _closure1_slot6;
            var5 = {};
            var8 = var10.promptHeader;
            var5['style'] = var8;
            var13 = _closure1_slot15;
            var15 = _closure1_slot0;
            var14 = _closure1_slot2;
            var11 = 21;
            var8 = var14[var11];
            var8 = var15.bind(var4)(var8);
            var12 = var8.Text;
            var8 = {'style': null, 'variant': 'text-sm/medium', 'color': 'text-muted'};
            var16 = var10.countText;
            var8['style'] = var16;
            var24 = 22;
            var16 = var14[var24];
            var16 = var15.bind(var4)(var16);
            var17 = var16.intl;
            var16 = var17.format;
            var14 = var14[var24];
            var14 = var15.bind(var4)(var14);
            var14 = var14.t;
            var15 = var14.isV0NW;
            var14 = {};
            var19 = 1;
            var19 = var20 + var19;
            var14['currentQuestion'] = var19;
            var14['questionCount'] = var18;
            var14 = var16.bind(var17)(var15, var14);
            var8['children'] = var14;
            var12 = var13.bind(var4)(var12, var8);
            var8 = new Array(2);
            var8[0] = var12;
            var14 = null;
            var13 = var14 != var9;
            var12 = null;
            if(!var13) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var13 = var9.required;
            var12 = null;
            if(!var13) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var15 = _closure1_slot16;
            var14 = _closure1_slot17;
            var13 = {};
            var18 = _closure1_slot15;
            var17 = _closure1_slot6;
            var16 = {};
            var19 = var10.requiredSeparator;
            var16['style'] = var19;
            var17 = var18.bind(var4)(var17, var16);
            var16 = new Array(2);
            var16[0] = var17;
            var19 = _closure1_slot15;
            var23 = _closure1_slot0;
            var20 = _closure1_slot2;
            var17 = var20[var11];
            var17 = var23.bind(var4)(var17);
            var18 = var17.Text;
            var17 = {'variant': 'text-sm/medium', 'color': 'text-brand'};
            var21 = var20[var24];
            var21 = var23.bind(var4)(var21);
            var22 = var21.intl;
            var21 = var22.string;
            var20 = var20[var24];
            var20 = var23.bind(var4)(var20);
            var20 = var20.t;
            var20 = var20.Ur8Vrt;
            var20 = var21.bind(var22)(var20);
            var17['children'] = var20;
            var17 = var19.bind(var4)(var18, var17);
            var16[1] = var17;
            var13['children'] = var16;
            var12 = var15.bind(var4)(var14, var13);
case 2:
            var8[1] = var12;
            var5['children'] = var8;
            var7 = var3.bind(var4)(var7, var5);
            var5 = new Array(2);
            var5[0] = var7;
            var8 = _closure1_slot15;
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var11];
            var6 = var7.bind(var4)(var6);
            var7 = var6.Text;
            var6 = {'style': null, 'accessibilityRole': 'header', 'variant': 'heading-xl/semibold', 'color': 'mobile-text-heading-primary'};
            var10 = var10.title;
            var6['style'] = var10;
            var9 = var9.title;
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var1 = function PromptFooter(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = arg1;
            var2 = var3.guildId;
            var _closure2_slot0 = var2;
            var7 = var3.currentPrompt;
            var2 = var3.selectedOptionIds;
            var _closure2_slot1 = var2;
            var14 = var3.handleOnPress;
            var17 = var3.lastPrompt;
            var4 = undefined;
            var _closure2_slot2 = var4;
            var3 = _closure1_slot18;
            var20 = var3.bind(var4)();
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 14;
            var3 = var6[var3];
            var8 = var5.bind(var4)(var3);
            var6 = var8.useStateFromStores;
            var3 = _closure1_slot11;
            var5 = new Array(1);
            var5[0] = var3;
            var3 = function() {
                var3 = _closure1_slot11;
                var2 = var3.getGuild;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var9 = var6.bind(var8)(var5, var3);
            var3 = var2.length;
            var8 = 0;
            var19 = var8 === var3;
            if(!var19) { _fun0002_ip = 5; continue _fun0002 }
case 6:
            var3 = null;
            var3 = var3 != var7;
            if(!var3) { _fun0002_ip = 7; continue _fun0002 }
case 8:
            var3 = var7.required;
case 7:
            var19 = !var3;
case 5:
            var11 = _closure1_slot0;
            var3 = _closure1_slot2;
            var27 = 22;
            var5 = var3[var27];
            var5 = var11.bind(var4)(var5);
            var6 = var5.intl;
            var5 = var6.string;
            var3 = var3[var27];
            var3 = var11.bind(var4)(var3);
            var3 = var3.t;
            if(var17) { _fun0002_ip = 9; continue _fun0002 }
case 10:
            if(var19) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var11 = var3.PDTjLN;
            var15 = var5.bind(var6)(var11);
            _fun0002_ip = 13; continue _fun0002;
case 11:
            var11 = var3["5Wxrcd"];
            var15 = var5.bind(var6)(var11);
case 13:
            _fun0002_ip = 14; continue _fun0002;
case 9:
            var3 = var3["8SuVoE"];
            var11 = var5.bind(var6)(var3);
            var3 = global;
            var3 = var3.HermesInternal;
            var6 = var3.concat;
            var5 = '';
            var3 = ' 🎉';
            var15 = var6.bind(var5)(var11, var3);
case 14:
            var2 = var2.length;
            var13 = var8 === var2;
            if(!var13) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var2 = null;
            var3 = var2 == var7;
            var2 = undefined;
            if(var3) { _fun0002_ip = 17; continue _fun0002 }
case 18:
            var2 = var7.required;
case 17:
            var13 = var2;
case 15:
            var11 = null;
            var2 = var11 == var7;
            var12 = undefined;
            if(var2) { _fun0002_ip = 19; continue _fun0002 }
case 20:
            var5 = var7.options;
            var2 = var11 == var5;
            var12 = undefined;
            if(var2) { _fun0002_ip = 19; continue _fun0002 }
case 21:
            var3 = var5.filter;
            var2 = function(arg1) {
                var3 = _closure2_slot1;
                var2 = var3.includes;
                var1 = arg1;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var12 = var3.bind(var5)(var2);
case 19:
            _closure2_slot2 = var12;
            var6 = _closure1_slot4;
            var5 = var6.useMemo;
            var3 = new Array(1);
            var3[0] = var12;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure2_slot2;
                    var1 = null;
                    if(!(var1 == var3)) { _fun0003_ip = 22; continue _fun0003 }
case 23:
                    var1 = global;
                    var1 = var1.Set;
                    var3 = var1.prototype;
                    var3 = Object.create(var3, {constructor: {value: var1}});
                    var7 = var3;
                    var1 = new var7[var1](var6);
                    var1 = var1 instanceof Object ? var1 : var3;
                    _fun0003_ip = 24; continue _fun0003;
case 22:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 27;
                    var4 = var4[var3];
                    var3 = undefined;
                    var4 = var5.bind(var3)(var4);
                    var3 = var4.getSelectedRoleIds;
                    var2 = _closure2_slot2;
                    var1 = var3.bind(var4)(var2);
case 24:
                    return var1;
                }
            };
            var5 = var5.bind(var6)(var2, var3);
            var6 = _closure1_slot4;
            var3 = var6.useMemo;
            var2 = new Array(1);
            var2[0] = var12;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = _closure2_slot2;
                    var1 = null;
                    if(!(var1 == var3)) { _fun0004_ip = 22; continue _fun0004 }
case 23:
                    var1 = global;
                    var1 = var1.Set;
                    var3 = var1.prototype;
                    var3 = Object.create(var3, {constructor: {value: var1}});
                    var7 = var3;
                    var1 = new var7[var1](var6);
                    var1 = var1 instanceof Object ? var1 : var3;
                    _fun0004_ip = 24; continue _fun0004;
case 22:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 27;
                    var4 = var4[var3];
                    var3 = undefined;
                    var4 = var5.bind(var3)(var4);
                    var3 = var4.getSelectedChannelIds;
                    var2 = _closure2_slot2;
                    var1 = var3.bind(var4)(var2);
case 24:
                    return var1;
                }
            };
            var3 = var3.bind(var6)(var1, var2);
            var6 = _closure1_slot1;
            var16 = _closure1_slot2;
            var1 = 28;
            var1 = var16[var1];
            var2 = var6.bind(var4)(var1);
            var1 = {};
            var1['guild'] = var9;
            var1['prompt'] = var7;
            var1['selectedRoleIds'] = var5;
            var1['selectedChannelIds'] = var3;
            var3 = _closure1_slot21;
            var1['itemHook'] = var3;
            var1 = var2.bind(var4)(var1);
            var22 = var1.helpText;
            var21 = var1.helpTextAdditional;
            var2 = 29;
            var1 = var16[var2];
            var7 = var6.bind(var4)(var1);
            var12 = _closure1_slot0;
            var3 = 30;
            var1 = var16[var3];
            var18 = var12.bind(var4)(var1);
            var9 = var18.useToken;
            var1 = 12;
            var5 = var16[var1];
            var5 = var6.bind(var4)(var5);
            var5 = var5.colors;
            var5 = var5.BACKGROUND_BASE_LOWER;
            var5 = var9.bind(var18)(var5);
            var7 = var7.bind(var4)(var5);
            var5 = var7.alpha;
            var7 = var5.bind(var7)(var8);
            var5 = var7.hex;
            var5 = var5.bind(var7)();
            var8 = new Array(2);
            var8[0] = var5;
            var2 = var16[var2];
            var2 = var6.bind(var4)(var2);
            var3 = var16[var3];
            var5 = var12.bind(var4)(var3);
            var3 = var5.useToken;
            var1 = var16[var1];
            var1 = var6.bind(var4)(var1);
            var1 = var1.colors;
            var1 = var1.BACKGROUND_BASE_LOWER;
            var1 = var3.bind(var5)(var1);
            var3 = var2.bind(var4)(var1);
            var2 = var3.alpha;
            var1 = 1;
            var2 = var2.bind(var3)(var1);
            var1 = var2.hex;
            var1 = var1.bind(var2)();
            var8[1] = var1;
            var3 = _closure1_slot16;
            var2 = _closure1_slot6;
            var1 = {};
            var5 = var20.footer;
            var1['style'] = var5;
            var7 = _closure1_slot15;
            var5 = 25;
            var5 = var16[var5];
            var6 = var6.bind(var4)(var5);
            var5 = {};
            var18 = var20.scrollContainerGradient;
            var9 = new Array(1);
            var9[0] = var18;
            var5['style'] = var9;
            var9 = 26;
            var18 = var16[var9];
            var18 = var12.bind(var4)(var18);
            var18 = var18.VerticalGradient;
            var18 = var18.START;
            var5['start'] = var18;
            var9 = var16[var9];
            var9 = var12.bind(var4)(var9);
            var9 = var9.VerticalGradient;
            var9 = var9.END;
            var5['end'] = var9;
            var5['colors'] = var8;
            var8 = 'none';
            var5['pointerEvents'] = var8;
            var6 = var7.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot16;
            var7 = _closure1_slot6;
            var6 = {};
            var9 = var20.footerContent;
            var6['style'] = var9;
            var12 = null;
            if(!var13) { _fun0002_ip = 25; continue _fun0002 }
case 26:
            var18 = _closure1_slot15;
            var26 = _closure1_slot0;
            var23 = _closure1_slot2;
            var9 = 21;
            var9 = var23[var9];
            var9 = var26.bind(var4)(var9);
            var16 = var9.Text;
            var9 = {'style': null, 'variant': 'text-xs/medium', 'color': 'text-default'};
            var24 = var20.helpText;
            var9['style'] = var24;
            var24 = var23[var27];
            var24 = var26.bind(var4)(var24);
            var25 = var24.intl;
            var24 = var25.string;
            var23 = var23[var27];
            var23 = var26.bind(var4)(var23);
            var23 = var23.t;
            var23 = var23.dA1dSf;
            var23 = var24.bind(var25)(var23);
            var9['children'] = var23;
            var12 = var18.bind(var4)(var16, var9);
case 25:
            var9 = new Array(3);
            var9[0] = var12;
            var12 = '';
            if(!(var12 === var22)) { _fun0002_ip = 27; continue _fun0002 }
case 28:
            var11 = null;
            if(!(var12 !== var21)) { _fun0002_ip = 29; continue _fun0002 }
case 27:
            var18 = _closure1_slot16;
            var16 = _closure1_slot0;
            var23 = _closure1_slot2;
            var12 = 21;
            var12 = var23[var12];
            var12 = var16.bind(var4)(var12);
            var16 = var12.Text;
            var12 = {'style': null, 'variant': 'text-xs/medium', 'color': 'text-default'};
            var20 = var20.helpText;
            var12['style'] = var20;
            var20 = new Array(3);
            var20[0] = var22;
            var22 = ' ';
            var20[1] = var22;
            var20[2] = var21;
            var12['children'] = var20;
            var11 = var18.bind(var4)(var16, var12);
case 29:
            var9[1] = var11;
            var12 = _closure1_slot15;
            var11 = _closure1_slot0;
            var16 = _closure1_slot2;
            var10 = 23;
            var10 = var16[var10];
            var10 = var11.bind(var4)(var10);
            var11 = var10.Button;
            var10 = {'variant': null, 'size': 'md', 'grow': true};
            var18 = 'primary';
            var16 = var18;
            if(!var19) { _fun0002_ip = 30; continue _fun0002 }
case 31:
            var16 = var18;
            if(var17) { _fun0002_ip = 30; continue _fun0002 }
case 32:
            var16 = 'secondary';
case 30:
            var10['variant'] = var16;
            var10['text'] = var15;
            var10['onPress'] = var14;
            var10['disabled'] = var13;
            var10 = var12.bind(var4)(var11, var10);
            var9[2] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot20 = var1;
    var1 = function formattedNameHighlight(arg1, arg2) {
        var5 = _closure1_slot15;
        var2 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 21;
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
    var _closure1_slot21 = var1;
    var1 = function DropdownOption(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var2 = arg1;
            var9 = var2.option;
            var _closure2_slot0 = var9;
            var2 = _closure1_slot18;
            var4 = undefined;
            var13 = var2.bind(var4)();
            var3 = _closure1_slot0;
            var14 = _closure1_slot2;
            var2 = 14;
            var2 = var14[var2];
            var5 = var3.bind(var4)(var2);
            var3 = var5.useStateFromStores;
            var7 = _closure1_slot9;
            var2 = new Array(1);
            var2[0] = var7;
            var1 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var1 = _closure2_slot0;
                    var2 = var1.emoji;
                    var6 = null;
                    var3 = var6 == var2;
                    var1 = undefined;
                    if(var3) { _fun0006_ip = 33; continue _fun0006 }
case 34:
                    var1 = var2.id;
case 33:
                    var2 = var6 != var1;
                    var1 = null;
                    if(!var2) { _fun0006_ip = 35; continue _fun0006 }
case 36:
                    var3 = _closure1_slot9;
                    var2 = var3.getUsableCustomEmojiById;
                    var5 = _closure2_slot0;
                    var5 = var5.emoji;
                    var6 = var6 == var5;
                    var4 = undefined;
                    if(var6) { _fun0006_ip = 37; continue _fun0006 }
case 38:
                    var4 = var5.id;
case 37:
                    var1 = var2.bind(var3)(var4);
case 35:
                    return var1;
                }
            };
            var18 = var3.bind(var5)(var2, var1);
            var3 = _closure1_slot16;
            var2 = _closure1_slot6;
            var1 = {};
            var5 = var13.dropdownPill;
            var1['style'] = var5;
            var8 = _closure1_slot15;
            var7 = _closure1_slot6;
            var5 = {};
            var10 = var13.emojiContainer;
            var5['style'] = var10;
            var12 = _closure1_slot15;
            var11 = _closure1_slot1;
            var10 = 32;
            var10 = var14[var10];
            var11 = var11.bind(var4)(var10);
            var10 = {};
            var14 = var13.optionTextEmoji;
            var10['textEmojiStyle'] = var14;
            var13 = var13.optionImageEmoji;
            var10['fastImageStyle'] = var13;
            var13 = null;
            var15 = var13 != var18;
            var14 = undefined;
            if(!var15) { _fun0005_ip = 39; continue _fun0005 }
case 40:
            var16 = _closure1_slot1;
            var17 = _closure1_slot2;
            var15 = 33;
            var15 = var17[var15];
            var17 = var16.bind(var4)(var15);
            var16 = var17.getEmojiURL;
            var15 = {};
            var19 = var18.id;
            var15['id'] = var19;
            var18 = var18.animated;
            var15['animated'] = var18;
            var18 = _closure1_slot14;
            var15['size'] = var18;
            var14 = var16.bind(var17)(var15);
case 39:
            var10['src'] = var14;
            var15 = var9.emoji;
            var16 = var13 == var15;
            var14 = undefined;
            if(var16) { _fun0005_ip = 41; continue _fun0005 }
case 42:
            var14 = var15.name;
case 41:
            var15 = var13 != var14;
            var13 = '';
            if(!var15) { _fun0005_ip = 43; continue _fun0005 }
case 44:
            var13 = var14;
case 43:
            var10['name'] = var13;
            var10 = var12.bind(var4)(var11, var10);
            var5['children'] = var10;
            var7 = var8.bind(var4)(var7, var5);
            var5 = new Array(2);
            var5[0] = var7;
            var8 = _closure1_slot15;
            var7 = _closure1_slot0;
            var10 = _closure1_slot2;
            var6 = 21;
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
    var _closure1_slot22 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var11.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var10 = 1;
    var7 = var6[var10];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.Image;
    var _closure1_slot5 = var7;
    var7 = var4.View;
    var _closure1_slot6 = var7;
    var7 = var4.ScrollView;
    var _closure1_slot7 = var7;
    var4 = var4.FlatList;
    var _closure1_slot8 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot12 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.GuildOnboardingModalStates;
    var _closure1_slot13 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.EMOJI_URL_BASE_SIZE;
    var _closure1_slot14 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot15 = var7;
    var7 = var4.jsxs;
    var _closure1_slot16 = var7;
    var4 = var4.Fragment;
    var _closure1_slot17 = var4;
    var4 = 10;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var9['flex'] = var10;
    var4['flex'] = var9;
    var9 = {'display': 'flex', 'flex': 1, 'flexGrow': 1, 'marginTop': null, 'marginBottom': 16};
    var10 = 11;
    var10 = var6[var10];
    var10 = var5.bind(var1)(var10);
    var10 = var10.NAV_BAR_HEIGHT;
    var9['marginTop'] = var10;
    var12 = 16;
    var10 = 12;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BASE_LOWER;
    var9['backgroundColor'] = var13;
    var4['container'] = var9;
    var9 = {'display': 'flex', 'flexGrow': 1, 'justifyContent': 'center', 'paddingHorizontal': 16, 'paddingTop': 0};
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BASE_LOWER;
    var9['backgroundColor'] = var13;
    var4['scrollContainer'] = var9;
    var9 = {'position': 'absolute', 'height': 48, 'width': '100%', 'left': 0, 'top': 4294967248};
    var4['scrollContainerGradient'] = var9;
    var9 = {'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center', 'marginBottom': 8};
    var4['promptHeader'] = var9;
    var9 = {'flexShrink': 0, 'marginHorizontal': 8, 'color': null, 'backgroundColor': null, 'width': 4, 'height': 4};
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BORDER_SUBTLE;
    var9['color'] = var13;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BORDER_SUBTLE;
    var9['backgroundColor'] = var13;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.xs;
    var9['borderRadius'] = var13;
    var4['requiredSeparator'] = var9;
    var9 = {};
    var4['countText'] = var9;
    var9 = {};
    var13 = 32;
    var9['marginBottom'] = var13;
    var4['title'] = var9;
    var9 = {'marginTop': 8, 'marginBottom': 8, 'textAlign': 'center'};
    var4['helpText'] = var9;
    var9 = {'display': 'flex', 'flexDirection': 'column', 'justifyContent': 'flex-end', 'alignItems': 'center', 'bottom': 0, 'paddingBottom': 8, 'position': 'absolute', 'width': '100%'};
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BASE_LOWER;
    var9['backgroundColor'] = var13;
    var4['footer'] = var9;
    var9 = {'paddingHorizontal': 16, 'paddingBottom': 8, 'paddingTop': 8};
    var4['footerText'] = var9;
    var9 = {'width': '100%', 'paddingHorizontal': 16};
    var4['footerContent'] = var9;
    var9 = {'fontSize': 18, 'lineHeight': 22, 'marginRight': 6};
    var4['optionTextEmoji'] = var9;
    var9 = {'height': 22, 'width': 22, 'marginRight': 6};
    var4['optionImageEmoji'] = var9;
    var9 = {'display': 'flex', 'alignItems': 'center'};
    var4['emojiContainer'] = var9;
    var9 = {'borderRadius': null, 'backgroundColor': null, 'padding': 8, 'paddingRight': 32, 'minHeight': 48, 'display': 'flex', 'flexDirection': 'row', 'flexWrap': 'wrap', 'alignItems': 'center', 'position': 'relative'};
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.sm;
    var9['borderRadius'] = var13;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BASE_LOWEST;
    var9['backgroundColor'] = var13;
    var4['dropdownContainer'] = var9;
    var9 = {};
    var9['marginTop'] = var12;
    var4['emptyDropdownText'] = var9;
    var9 = {'borderRadius': null, 'backgroundColor': null, 'padding': 6, 'marginRight': 8, 'marginTop': 8, 'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center'};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.radii;
    var12 = var12.sm;
    var9['borderRadius'] = var12;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_BASE_LOW;
    var9['backgroundColor'] = var10;
    var4['dropdownPill'] = var9;
    var9 = {'position': 'absolute', 'right': 4, 'top': 8};
    var4['dropdownIconContainer'] = var9;
    var9 = {'height': 32, 'width': 32};
    var4['dropdownIcon'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot18 = var4;
    var4 = 39;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_onboarding/native/GuildOnboardingPrompt.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function RulesPrompt(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var1 = arg1;
            var1 = var1.guildId;
            var _closure2_slot0 = var1;
            var1 = _closure1_slot18;
            var5 = undefined;
            var11 = var1.bind(var5)();
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 13;
            var1 = var6[var1];
            var2 = var3.bind(var5)(var1);
            var1 = var2.useNavigation;
            var1 = var1.bind(var2)();
            var _closure2_slot1 = var1;
            var8 = 14;
            var1 = var6[var8];
            var10 = var3.bind(var5)(var1);
            var9 = var10.useStateFromStores;
            var1 = _closure1_slot10;
            var4 = new Array(1);
            var4[0] = var1;
            var2 = function() {
                var3 = _closure1_slot10;
                var2 = var3.getRulesPrompt;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var9.bind(var10)(var4, var2);
            var _closure2_slot2 = var2;
            var4 = var6[var8];
            var12 = var3.bind(var5)(var4);
            var10 = var12.useStateFromStores;
            var4 = _closure1_slot11;
            var9 = new Array(1);
            var9[0] = var4;
            var4 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var3 = _closure1_slot11;
                    var2 = var3.getGuild;
                    var1 = _closure2_slot0;
                    var2 = var2.bind(var3)(var1);
                    var1 = null;
                    var3 = var1 == var2;
                    var1 = undefined;
                    if(var3) { _fun0008_ip = 45; continue _fun0008 }
case 46:
                    var1 = var2.rulesChannelId;
case 45:
                    return var1;
                }
            };
            var4 = var10.bind(var12)(var9, var4);
            var _closure2_slot3 = var4;
            var4 = _closure1_slot1;
            var9 = 15;
            var9 = var6[var9];
            var9 = var4.bind(var5)(var9);
            var9 = var9.bind(var5)();
            var21 = var9.bottom;
            var9 = 64;
            var10 = var9 + var21;
            var9 = 8;
            var15 = var10 + var9;
            var8 = var6[var8];
            var10 = var3.bind(var5)(var8);
            var9 = var10.useStateFromStores;
            var8 = new Array(1);
            var8[0] = var1;
            var1 = function() {
                var3 = _closure1_slot10;
                var2 = var3.get;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var9.bind(var10)(var8, var1);
            var _closure2_slot4 = var1;
            var9 = _closure1_slot4;
            var8 = var9.useState;
            var1 = false;
            var9 = var8.bind(var9)(var1);
            var8 = _closure1_slot3;
            var1 = 2;
            var8 = var8.bind(var5)(var9, var1);
            var12 = 0;
            var25 = var8[var12];
            var1 = 1;
            var1 = var8[var1];
            var _closure2_slot5 = var1;
            var1 = 16;
            var1 = var6[var1];
            var1 = var4.bind(var5)(var1);
            var4 = var1.bind(var5)();
            var1 = 17;
            var1 = var6[var1];
            var3 = var3.bind(var5)(var1);
            var1 = var3.isThemeDark;
            var10 = var1.bind(var3)(var4);
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 18;
            var1 = var6[var1];
            var9 = var3.bind(var5)(var1);
            var8 = var9.hexWithOpacity;
            var4 = _closure1_slot1;
            var3 = 12;
            var1 = var6[var3];
            var1 = var4.bind(var5)(var1);
            var1 = var1.unsafe_rawColors;
            if(var10) { _fun0007_ip = 47; continue _fun0007 }
case 48:
            var10 = var1.PRIMARY_130;
            var13 = var8.bind(var9)(var10, var12);
            var10 = new Array(2);
            var10[0] = var13;
            var13 = var6[var3];
            var13 = var4.bind(var5)(var13);
            var13 = var13.unsafe_rawColors;
            var13 = var13.PRIMARY_130;
            var10[1] = var13;
            _fun0007_ip = 49; continue _fun0007;
case 47:
            var1 = var1.PRIMARY_600;
            var8 = var8.bind(var9)(var1, var12);
            var1 = new Array(2);
            var1[0] = var8;
            var3 = var6[var3];
            var3 = var4.bind(var5)(var3);
            var3 = var3.unsafe_rawColors;
            var3 = var3.PRIMARY_600;
            var1[1] = var3;
            var10 = var1;
case 49:
            var1 = null;
            var2 = var1 == var2;
            if(var2) { _fun0007_ip = 50; continue _fun0007 }
case 51:
            var4 = _closure1_slot16;
            var13 = _closure1_slot0;
            var20 = _closure1_slot2;
            var2 = 19;
            var2 = var20[var2];
            var2 = var13.bind(var5)(var2);
            var3 = var2.SafeAreaPaddingView;
            var2 = {};
            var6 = true;
            var2['top'] = var6;
            var8 = var11.flex;
            var6 = new Array(2);
            var6[0] = var8;
            var8 = var11.container;
            var6[1] = var8;
            var2['style'] = var6;
            var9 = _closure1_slot16;
            var8 = _closure1_slot6;
            var6 = {};
            var12 = var11.flex;
            var6['style'] = var12;
            var16 = _closure1_slot15;
            var14 = _closure1_slot8;
            var12 = {};
            var18 = var11.scrollContainer;
            var17 = new Array(2);
            var17[0] = var18;
            var18 = {};
            var18['paddingBottom'] = var15;
            var17[1] = var18;
            var12['contentContainerStyle'] = var17;
            var17 = [0];
            var12['data'] = var17;
            var17 = function renderItem() {
                var4 = _closure1_slot15;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 20;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var6 = _closure2_slot2;
                var6 = var6.values;
                var1['rules'] = var6;
                var5 = _closure2_slot3;
                var1['rulesChannelId'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var12['renderItem'] = var17;
            var17 = function onEndReached() {
                var3 = _closure2_slot5;
                var2 = undefined;
                var1 = true;
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var12['onEndReached'] = var17;
            var12 = var16.bind(var5)(var14, var12);
            var14 = new Array(2);
            var14[0] = var12;
            var18 = _closure1_slot16;
            var17 = _closure1_slot6;
            var16 = {};
            var19 = var11.footer;
            var12 = new Array(3);
            var12[0] = var19;
            var19 = var11.footerContent;
            var12[1] = var19;
            var19 = {};
            var19['paddingBottom'] = var21;
            var12[2] = var19;
            var16['style'] = var12;
            var19 = _closure1_slot15;
            var12 = 21;
            var12 = var20[var12];
            var12 = var13.bind(var5)(var12);
            var13 = var12.Text;
            var12 = {};
            var20 = var11.footerText;
            var12['style'] = var20;
            var20 = 'text-xs/medium';
            var12['variant'] = var20;
            var21 = _closure1_slot0;
            var20 = _closure1_slot2;
            var24 = 22;
            var22 = var20[var24];
            var22 = var21.bind(var5)(var22);
            var26 = var22.intl;
            var22 = var26.string;
            var20 = var20[var24];
            var20 = var21.bind(var5)(var20);
            var21 = var20.t;
            if(var25) { _fun0007_ip = 52; continue _fun0007 }
case 53:
            var20 = var21.D0CVAc;
            var20 = var22.bind(var26)(var20);
            _fun0007_ip = 54; continue _fun0007;
case 52:
            var21 = var21.arAe3I;
            var20 = var22.bind(var26)(var21);
case 54:
            var12['children'] = var20;
            var12 = var19.bind(var5)(var13, var12);
            var19 = new Array(2);
            var19[0] = var12;
            var22 = _closure1_slot15;
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var20 = 23;
            var20 = var13[var20];
            var20 = var12.bind(var5)(var20);
            var21 = var20.Button;
            var20 = {'variant': 'primary', 'size': 'md', 'grow': true};
            var25 = !var25;
            var20['disabled'] = var25;
            var25 = var13[var24];
            var25 = var12.bind(var5)(var25);
            var26 = var25.intl;
            var25 = var26.string;
            var24 = var13[var24];
            var24 = var12.bind(var5)(var24);
            var24 = var24.t;
            var24 = var24["0KL0ot"];
            var24 = var25.bind(var26)(var24);
            var20['text'] = var24;
            var23 = function onPress() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var3 = _closure2_slot4;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0009_ip = 55; continue _fun0009 }
case 23:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var3 = 24;
                    var4 = var4[var3];
                    var3 = undefined;
                    var6 = var5.bind(var3)(var4);
                    var5 = var6.submitVerificationForm;
                    var4 = _closure2_slot0;
                    var3 = {};
                    var10 = _closure2_slot4;
                    var11 = var3;
                    var7 = copyDataProperties(var11, var10);
                    var7 = {};
                    var10 = _closure2_slot2;
                    var11 = var7;
                    var8 = copyDataProperties(var11, var10);
                    var9 = true;
                    var8 = 'response';
                    var7[7] = var9;
                    var8 = new Array(1);
                    var8[0] = var7;
                    var7 = 'formFields';
                    var3[6] = var8;
                    var3 = var5.bind(var6)(var4, var3);
                    var3 = _closure2_slot1;
                    var2 = var3.push;
                    var1 = _closure1_slot13;
                    var1 = var1.COMPLETED;
                    var1 = var2.bind(var3)(var1);
case 55:
                    var1 = undefined;
                    return var1;
                }
            };
            var20['onPress'] = var23;
            var20 = var22.bind(var5)(var21, var20);
            var19[1] = var20;
            var16['children'] = var19;
            var16 = var18.bind(var5)(var17, var16);
            var14[1] = var16;
            var6['children'] = var14;
            var8 = var9.bind(var5)(var8, var6);
            var6 = new Array(2);
            var6[0] = var8;
            var9 = _closure1_slot15;
            var8 = _closure1_slot1;
            var7 = 25;
            var7 = var13[var7];
            var8 = var8.bind(var5)(var7);
            var7 = {};
            var14 = var11.scrollContainerGradient;
            var11 = new Array(2);
            var11[0] = var14;
            var14 = {};
            var14['bottom'] = var15;
            var11[1] = var14;
            var7['style'] = var11;
            var11 = 26;
            var14 = var13[var11];
            var14 = var12.bind(var5)(var14);
            var14 = var14.VerticalGradient;
            var14 = var14.START;
            var7['start'] = var14;
            var11 = var13[var11];
            var11 = var12.bind(var5)(var11);
            var11 = var11.VerticalGradient;
            var11 = var11.END;
            var7['end'] = var11;
            var7['colors'] = var10;
            var10 = 'none';
            var7['pointerEvents'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 50:
            return var1;
        }
    };
    var3['RulesPrompt'] = var4;
    var4 = function MultipleChoicePrompt(arg1) {
        var1 = arg1;
        var13 = var1.guildId;
        var _closure2_slot0 = var13;
        var12 = var1.currentPrompt;
        var _closure2_slot1 = var12;
        var9 = var1.lastPrompt;
        var16 = var1.currentPromptIndex;
        var18 = var1.numberOfPrompts;
        var2 = var1.selectOption;
        var _closure2_slot2 = var2;
        var10 = var1.handleOnPress;
        var1 = _closure1_slot18;
        var4 = undefined;
        var8 = var1.bind(var4)();
        var2 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 15;
        var1 = var3[var1];
        var1 = var2.bind(var4)(var1);
        var1 = var1.bind(var4)();
        var19 = var1.bottom;
        var2 = _closure1_slot0;
        var1 = 14;
        var1 = var3[var1];
        var7 = var2.bind(var4)(var1);
        var5 = var7.useStateFromStoresArray;
        var1 = _closure1_slot12;
        var3 = new Array(1);
        var3[0] = var1;
        var2 = new Array(2);
        var2[0] = var13;
        var2[1] = var12;
        var1 = function() {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var3 = _closure2_slot1;
                var1 = null;
                if(!(var1 == var3)) { _fun0010_ip = 56; continue _fun0010 }
case 23:
                var1 = new Array(0);
                _fun0010_ip = 57; continue _fun0010;
case 56:
                var5 = _closure1_slot12;
                var4 = var5.getOnboardingResponsesForPrompt;
                var3 = _closure2_slot0;
                var2 = _closure2_slot1;
                var2 = var2.id;
                var1 = var4.bind(var5)(var3, var2);
case 57:
                return var1;
            }
        };
        var11 = var5.bind(var7)(var3, var1, var2);
        var _closure2_slot3 = var11;
        var3 = _closure1_slot16;
        var2 = _closure1_slot17;
        var1 = {};
        var7 = _closure1_slot7;
        var5 = {};
        var14 = var8.scrollContainer;
        var8 = new Array(2);
        var8[0] = var14;
        var14 = {};
        var15 = 64;
        var15 = var15 + var19;
        var19 = 48;
        var15 = var15 + var19;
        var15 = var15 + var19;
        var14['paddingBottom'] = var15;
        var15 = 'relative';
        var14['position'] = var15;
        var8[1] = var14;
        var5['contentContainerStyle'] = var8;
        var15 = _closure1_slot15;
        var14 = _closure1_slot19;
        var8 = {};
        var8['currentPrompt'] = var12;
        var8['numberOfPrompts'] = var18;
        var8['currentPromptIndex'] = var16;
        var14 = var15.bind(var4)(var14, var8);
        var8 = new Array(2);
        var8[0] = var14;
        var16 = _closure1_slot15;
        var15 = _closure1_slot6;
        var14 = {};
        var19 = var12.options;
        var18 = var19.map;
        var17 = function(arg1) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var1 = arg1;
                var _closure3_slot0 = var1;
                var5 = _closure1_slot15;
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 31;
                var2 = var4[var2];
                var4 = undefined;
                var3 = var3.bind(var4)(var2);
                var2 = {};
                var2['option'] = var1;
                var8 = _closure2_slot0;
                var2['guildId'] = var8;
                var7 = function onSelect(arg1) {
                    _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                        var1 = arg1;
                        var5 = _closure2_slot2;
                        var2 = _closure2_slot1;
                        var4 = var2.id;
                        var2 = _closure3_slot0;
                        var3 = var2.id;
                        var2 = null;
                        var2 = var2 != var1;
                        if(!var2) { _fun0012_ip = 22; continue _fun0012 }
case 58:
                        var2 = var1;
case 22:
                        var1 = undefined;
                        var1 = var5.bind(var1)(var4, var3, var2);
                        return var1;
                    }
                };
                var2['onSelect'] = var7;
                var8 = _closure2_slot3;
                var7 = var8.includes;
                var6 = var1.id;
                var7 = var7.bind(var8)(var6);
                var6 = null;
                var6 = var6 != var7;
                if(!var6) { _fun0011_ip = 59; continue _fun0011 }
case 60:
                var6 = var7;
case 59:
                var2['selected'] = var6;
                var1 = var1.id;
                var1 = var5.bind(var4)(var3, var2, var1);
                return var1;
            }
        };
        var17 = var18.bind(var19)(var17);
        var14['children'] = var17;
        var14 = var16.bind(var4)(var15, var14);
        var8[1] = var14;
        var5['children'] = var8;
        var7 = var3.bind(var4)(var7, var5);
        var5 = new Array(2);
        var5[0] = var7;
        var8 = _closure1_slot15;
        var7 = _closure1_slot20;
        var6 = {};
        var6['guildId'] = var13;
        var6['currentPrompt'] = var12;
        var6['selectedOptionIds'] = var11;
        var6['handleOnPress'] = var10;
        var6['lastPrompt'] = var9;
        var6 = var8.bind(var4)(var7, var6);
        var5[1] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['MultipleChoicePrompt'] = var4;
    var2 = function DropdownPrompt(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var2 = arg1;
            var13 = var2.guildId;
            var _closure2_slot0 = var13;
            var12 = var2.currentPrompt;
            var _closure2_slot1 = var12;
            var9 = var2.lastPrompt;
            var16 = var2.currentPromptIndex;
            var17 = var2.numberOfPrompts;
            var1 = var2.selectOption;
            var _closure2_slot2 = var1;
            var10 = var2.handleOnPress;
            var2 = _closure1_slot18;
            var4 = undefined;
            var27 = var2.bind(var4)();
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 15;
            var2 = var5[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.bind(var4)();
            var18 = var2.bottom;
            var3 = _closure1_slot0;
            var2 = 14;
            var2 = var5[var2];
            var8 = var3.bind(var4)(var2);
            var7 = var8.useStateFromStoresArray;
            var2 = _closure1_slot12;
            var5 = new Array(1);
            var5[0] = var2;
            var3 = new Array(2);
            var3[0] = var13;
            var3[1] = var12;
            var2 = function() {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var1 = null;
                    if(!(var1 == var3)) { _fun0014_ip = 56; continue _fun0014 }
case 23:
                    var1 = new Array(0);
                    _fun0014_ip = 57; continue _fun0014;
case 56:
                    var5 = _closure1_slot12;
                    var4 = var5.getOnboardingResponsesForPrompt;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var2 = var2.id;
                    var1 = var4.bind(var5)(var3, var2);
case 57:
                    return var1;
                }
            };
            var11 = var7.bind(var8)(var5, var2, var3);
            var _closure2_slot3 = var11;
            var2 = null;
            var3 = var2 == var12;
            var23 = undefined;
            if(var3) { _fun0013_ip = 11; continue _fun0013 }
case 61:
            var5 = var12.options;
            var2 = var2 == var5;
            var23 = undefined;
            if(var2) { _fun0013_ip = 11; continue _fun0013 }
case 62:
            var3 = var5.filter;
            var2 = function(arg1) {
                var3 = _closure2_slot3;
                var2 = var3.includes;
                var1 = arg1;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var23 = var3.bind(var5)(var2);
case 11:
            var5 = _closure1_slot4;
            var3 = var5.useCallback;
            var2 = new Array(3);
            var2[0] = var13;
            var7 = var12.id;
            var2[1] = var7;
            var2[2] = var1;
            var1 = function() {
                var5 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 34;
                var4 = var2[var1];
                var1 = undefined;
                var6 = var5.bind(var1)(var4);
                var5 = var6.openLazy;
                var4 = _closure1_slot0;
                var3 = 36;
                var3 = var2[var3];
                var4 = var4.bind(var1)(var3);
                var3 = 35;
                var3 = var2[var3];
                var2 = var2.paths;
                var4 = var4.bind(var1)(var3, var2);
                var3 = {};
                var7 = _closure2_slot0;
                var3['guildId'] = var7;
                var2 = _closure2_slot1;
                var2 = var2.id;
                var3['promptId'] = var2;
                var2 = function onSelect(arg1, arg2) {
                    _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                        var1 = arg2;
                        var5 = _closure2_slot2;
                        var2 = _closure2_slot1;
                        var4 = var2.id;
                        var2 = arg1;
                        var3 = var2.id;
                        var2 = null;
                        var2 = var2 != var1;
                        if(!var2) { _fun0015_ip = 63; continue _fun0015 }
case 46:
                        var2 = var1;
case 63:
                        var1 = undefined;
                        var1 = var5.bind(var1)(var4, var3, var2);
                        return var1;
                    }
                };
                var3['onSelect'] = var2;
                var2 = 'DropdownOptions';
                var2 = var5.bind(var6)(var4, var2, var3);
                return var1;
            };
            var20 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot16;
            var2 = _closure1_slot17;
            var1 = {};
            var7 = _closure1_slot7;
            var5 = {};
            var14 = var27.scrollContainer;
            var8 = new Array(2);
            var8[0] = var14;
            var14 = {};
            var15 = 64;
            var15 = var15 + var18;
            var18 = 48;
            var15 = var15 + var18;
            var15 = var15 + var18;
            var14['paddingBottom'] = var15;
            var15 = 'relative';
            var14['position'] = var15;
            var8[1] = var14;
            var5['contentContainerStyle'] = var8;
            var15 = _closure1_slot15;
            var14 = _closure1_slot19;
            var8 = {};
            var8['currentPrompt'] = var12;
            var8['numberOfPrompts'] = var17;
            var8['currentPromptIndex'] = var16;
            var14 = var15.bind(var4)(var14, var8);
            var8 = new Array(2);
            var8[0] = var14;
            var16 = _closure1_slot15;
            var15 = _closure1_slot6;
            var14 = {};
            var19 = _closure1_slot16;
            var18 = _closure1_slot0;
            var22 = _closure1_slot2;
            var17 = 37;
            var17 = var22[var17];
            var17 = var18.bind(var4)(var17);
            var18 = var17.PressableHighlight;
            var17 = {};
            var22 = var27.dropdownContainer;
            var17['style'] = var22;
            var17['onPress'] = var20;
            var22 = var23.length;
            var20 = 0;
            var22 = var20 === var22;
            if(!var22) { _fun0013_ip = 64; continue _fun0013 }
case 65:
            var25 = _closure1_slot15;
            var24 = _closure1_slot0;
            var26 = _closure1_slot2;
            var20 = 21;
            var20 = var26[var20];
            var20 = var24.bind(var4)(var20);
            var24 = var20.Text;
            var20 = {'style': null, 'variant': 'text-sm/normal', 'color': 'text-muted', 'children': 'No answers selected.'};
            var26 = var27.emptyDropdownText;
            var20['style'] = var26;
            var22 = var25.bind(var4)(var24, var20);
case 64:
            var20 = new Array(3);
            var20[0] = var22;
            var22 = var23.map;
            var21 = function(arg1) {
                var1 = arg1;
                var5 = _closure1_slot15;
                var4 = _closure1_slot22;
                var3 = {};
                var3['option'] = var1;
                var2 = var1.id;
                var1 = undefined;
                var1 = var5.bind(var1)(var4, var3, var2);
                return var1;
            };
            var21 = var22.bind(var23)(var21);
            var20[1] = var21;
            var23 = _closure1_slot15;
            var22 = _closure1_slot6;
            var21 = {};
            var24 = var27.dropdownIconContainer;
            var21['style'] = var24;
            var26 = _closure1_slot15;
            var25 = _closure1_slot5;
            var24 = {};
            var27 = var27.dropdownIcon;
            var24['style'] = var27;
            var28 = _closure1_slot1;
            var29 = _closure1_slot2;
            var27 = 38;
            var27 = var29[var27];
            var27 = var28.bind(var4)(var27);
            var24['source'] = var27;
            var24 = var26.bind(var4)(var25, var24);
            var21['children'] = var24;
            var21 = var23.bind(var4)(var22, var21);
            var20[2] = var21;
            var17['children'] = var20;
            var17 = var19.bind(var4)(var18, var17);
            var14['children'] = var17;
            var14 = var16.bind(var4)(var15, var14);
            var8[1] = var14;
            var5['children'] = var8;
            var7 = var3.bind(var4)(var7, var5);
            var5 = new Array(2);
            var5[0] = var7;
            var8 = _closure1_slot15;
            var7 = _closure1_slot20;
            var6 = {};
            var6['guildId'] = var13;
            var6['currentPrompt'] = var12;
            var6['selectedOptionIds'] = var11;
            var6['handleOnPress'] = var10;
            var6['lastPrompt'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['DropdownPrompt'] = var2;
    return var1;
})();