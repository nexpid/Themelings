// app/modules/launchpad/native/LaunchPadSearchResults.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var12 = native3;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var7;
    var1 = function renderItemJSX(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var6 = var1.result;
            var1 = null;
            if(!(var1 != var6)) { _fun0001_ip = 586; continue _fun0001 }
 18:
            var4 = var6.type;
            var7 = _closure1_slot0;
            var3 = _closure1_slot2;
            var8 = 20;
            var3 = var3[var8];
            var5 = undefined;
            var3 = var7.bind(var5)(var3);
            var3 = var3.AutocompleterResultTypes;
            var3 = var3.GUILD;
            if(!(var3 !== var4)) { _fun0001_ip = 558; continue _fun0001 }
 67:
            var7 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var8];
            var3 = var7.bind(var5)(var3);
            var3 = var3.AutocompleterResultTypes;
            var3 = var3.TEXT_CHANNEL;
            if(!(var3 !== var4)) { _fun0001_ip = 500; continue _fun0001 }
 103:
            var7 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var8];
            var3 = var7.bind(var5)(var3);
            var3 = var3.AutocompleterResultTypes;
            var3 = var3.GROUP_DM;
            if(!(var3 !== var4)) { _fun0001_ip = 449; continue _fun0001 }
 139:
            var7 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var8];
            var3 = var7.bind(var5)(var3);
            var3 = var3.AutocompleterResultTypes;
            var3 = var3.VOICE_CHANNEL;
            if(!(var3 !== var4)) { _fun0001_ip = 405; continue _fun0001 }
 175:
            var7 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var8];
            var3 = var7.bind(var5)(var3);
            var3 = var3.AutocompleterResultTypes;
            var3 = var3.USER;
            if(!(var3 !== var4)) { _fun0001_ip = 350; continue _fun0001 }
 211:
            var7 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var8];
            var3 = var7.bind(var5)(var3);
            var3 = var3.AutocompleterResultTypes;
            var3 = var3.HEADER;
            if(!(var3 !== var4)) { _fun0001_ip = 300; continue _fun0001 }
 244:
            var7 = _closure1_slot9;
            var4 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 26;
            var3 = var8[var3];
            var3 = var4.bind(var5)(var3);
            var4 = var3.Text;
            var3 = {};
            var8 = 'text-sm/semibold';
            var3['variant'] = var8;
            var8 = var6.type;
            var3['children'] = var8;
            var3 = var7.bind(var5)(var4, var3);
            return var3;
 300:
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 25;
            var3 = var7[var3];
            var7 = var4.bind(var5)(var3);
            var4 = var7.renderCategoryItem;
            var3 = {};
            var8 = var6.record;
            var8 = var8.text;
            var3['name'] = var8;
            var3 = var4.bind(var7)(var3);
            return var3;
 350:
            var7 = _closure1_slot9;
            var4 = _closure1_slot1;
            var8 = _closure1_slot2;
            var3 = 24;
            var3 = var8[var3];
            var4 = var4.bind(var5)(var3);
            var3 = {};
            var8 = var6.record;
            var3['user'] = var8;
            var8 = var6.comparator;
            var3['comparator'] = var8;
            var3 = var7.bind(var5)(var4, var3);
            return var3;
 405:
            var7 = _closure1_slot9;
            var4 = _closure1_slot1;
            var8 = _closure1_slot2;
            var3 = 23;
            var3 = var8[var3];
            var4 = var4.bind(var5)(var3);
            var3 = {};
            var8 = var6.record;
            var3['channel'] = var8;
            var3 = var7.bind(var5)(var4, var3);
            return var3;
 449:
            var7 = _closure1_slot9;
            var4 = _closure1_slot1;
            var8 = _closure1_slot2;
            var3 = 22;
            var3 = var8[var3];
            var4 = var4.bind(var5)(var3);
            var3 = {};
            var8 = var6.record;
            var3['channel'] = var8;
            var8 = true;
            var3['navigationReplace'] = var8;
            var3 = var7.bind(var5)(var4, var3);
            return var3;
 500:
            var7 = _closure1_slot9;
            var4 = _closure1_slot1;
            var8 = _closure1_slot2;
            var3 = 21;
            var3 = var8[var3];
            var4 = var4.bind(var5)(var3);
            var3 = {'channel': null, 'navigationReplace': true, 'showGuildBadgeIcon': true};
            var8 = var6.record;
            var3['channel'] = var8;
            var3 = var7.bind(var5)(var4, var3);
            return var3;
 558:
            var4 = _closure1_slot9;
            var3 = _closure1_slot14;
            var2 = {};
            var6 = var6.record;
            var2['guild'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
 586:
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var1 = function renderSearchResultsSection() {
        var4 = _closure1_slot9;
        var3 = _closure1_slot15;
        var2 = {};
        var8 = _closure1_slot0;
        var9 = _closure1_slot2;
        var5 = 27;
        var6 = var9[var5];
        var1 = undefined;
        var6 = var8.bind(var1)(var6);
        var7 = var6.intl;
        var6 = var7.string;
        var5 = var9[var5];
        var5 = var8.bind(var1)(var5);
        var5 = var5.t;
        var5 = var5.zkoeq6;
        var5 = var6.bind(var7)(var5);
        var2['name'] = var5;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var _closure1_slot17 = var1;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var4);
    var1 = 0;
    var5 = var7[var1];
    var4 = native4;
    var1 = undefined;
    var8 = var4.bind(var1)(var5);
    var _closure1_slot3 = var8;
    var13 = 1;
    var4 = var7[var13];
    var4 = var6.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var7[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var7[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var7[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.UnreadSetting;
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var5 = var4.jsx;
    var _closure1_slot9 = var5;
    var5 = var4.Fragment;
    var _closure1_slot10 = var5;
    var4 = var4.jsxs;
    var _closure1_slot11 = var4;
    var4 = {};
    var5 = 24;
    var4['bottom'] = var5;
    var _closure1_slot12 = var4;
    var4 = 7;
    var4 = var7[var4];
    var9 = var6.bind(var1)(var4);
    var5 = var9.createStyles;
    var4 = {};
    var10 = {};
    var11 = 16;
    var10['minHeight'] = var11;
    var4['listContainer'] = var10;
    var11 = 8;
    var10 = {'flex': 4294967295, 'marginTop': 8};
    var4['list'] = var10;
    var10 = {};
    var14 = var7[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.sm;
    var10['borderRadius'] = var14;
    var4['guildIcon'] = var10;
    var10 = {};
    var14 = var7[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_PRIMARY;
    var10['backgroundColor'] = var14;
    var4['categoryWrapper'] = var10;
    var10 = {};
    var10['flex'] = var13;
    var4['pressable'] = var10;
    var10 = {};
    var11 = var7[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_MODIFIER_ACTIVE;
    var10['backgroundColor'] = var11;
    var4['pressableUnderlayColor'] = var10;
    var4 = var5.bind(var9)(var4);
    var _closure1_slot13 = var4;
    var5 = var8.memo;
    var4 = function(arg1) {
        var2 = arg1;
        var14 = var2.guild;
        var _closure2_slot0 = var14;
        var2 = _closure1_slot13;
        var3 = undefined;
        var21 = var2.bind(var3)();
        var15 = _closure1_slot1;
        var19 = _closure1_slot2;
        var2 = 9;
        var2 = var19[var2];
        var2 = var15.bind(var3)(var2);
        var22 = var2.bind(var3)();
        var6 = _closure1_slot3;
        var5 = var6.useCallback;
        var2 = var14.id;
        var4 = new Array(1);
        var4[0] = var2;
        var2 = function() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 10;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.transitionToGuild;
            var2 = _closure2_slot0;
            var2 = var2.id;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var6 = var5.bind(var6)(var2, var4);
        var4 = _closure1_slot0;
        var2 = 11;
        var5 = var19[var2];
        var9 = var4.bind(var3)(var5);
        var8 = var9.useStateFromStoresObject;
        var5 = _closure1_slot6;
        var7 = new Array(1);
        var7[0] = var5;
        var5 = function() {
            var1 = {};
            var4 = _closure1_slot6;
            var5 = var4.hasUnread;
            var2 = _closure2_slot0;
            var3 = var2.id;
            var3 = var5.bind(var4)(var3);
            var1['unread'] = var3;
            var5 = var4.getMentionCount;
            var3 = var2.id;
            var3 = var5.bind(var4)(var3);
            var1['mentionCount'] = var3;
            var3 = var4.getIsMentionLowImportance;
            var2 = var2.id;
            var2 = var3.bind(var4)(var2);
            var1['isMentionLowImportance'] = var2;
            return var1;
        };
        var5 = var8.bind(var9)(var7, var5);
        var23 = var5.unread;
        var18 = var5.mentionCount;
        var16 = var5.isMentionLowImportance;
        var5 = 12;
        var5 = var19[var5];
        var7 = var4.bind(var3)(var5);
        var5 = var7.useFontScale;
        var9 = var5.bind(var7)();
        var2 = var19[var2];
        var7 = var4.bind(var3)(var2);
        var5 = var7.useStateFromStores;
        var8 = _closure1_slot5;
        var2 = new Array(1);
        var2[0] = var8;
        var1 = function() {
            var1 = _closure1_slot5;
            var1 = var1.locale;
            return var1;
        };
        var17 = var5.bind(var7)(var2, var1);
        var1 = 13;
        var1 = var19[var1];
        var2 = var15.bind(var3)(var1);
        var5 = _closure1_slot9;
        var1 = 14;
        var1 = var19[var1];
        var1 = var4.bind(var3)(var1);
        var4 = var1.PressableHighlight;
        var1 = {};
        var1['onPress'] = var6;
        var6 = var21.pressableUnderlayColor;
        var6 = var6.backgroundColor;
        var1['underlayColor'] = var6;
        var7 = var21.pressable;
        var6 = new Array(2);
        var6[0] = var7;
        var7 = {};
        var8 = var22.container;
        var8 = var8.borderRadius;
        var7['borderRadius'] = var8;
        var6[1] = var7;
        var1['style'] = var6;
        var6 = 15;
        var6 = var19[var6];
        var8 = var15.bind(var3)(var6);
        var10 = _closure1_slot11;
        var7 = _closure1_slot10;
        var6 = {};
        var20 = _closure1_slot9;
        var11 = 16;
        var11 = var19[var11];
        var13 = var15.bind(var3)(var11);
        var11 = {};
        var11['unread'] = var23;
        var23 = _closure1_slot8;
        var23 = var23.ALL_MESSAGES;
        var11['resolvedUnreadSetting'] = var23;
        var13 = var20.bind(var3)(var13, var11);
        var11 = new Array(3);
        var11[0] = var13;
        var20 = _closure1_slot9;
        var12 = 17;
        var12 = var19[var12];
        var13 = var15.bind(var3)(var12);
        var12 = {};
        var23 = var22.icon;
        var23 = var23.guildIconSize;
        var12['size'] = var23;
        var12['guild'] = var14;
        var23 = var21.guildIcon;
        var21 = new Array(2);
        var21[0] = var23;
        var22 = var22.icon;
        var22 = var22.margin;
        var21[1] = var22;
        var12['style'] = var21;
        var12 = var20.bind(var3)(var13, var12);
        var11[1] = var12;
        var12 = 18;
        var12 = var19[var12];
        var13 = var15.bind(var3)(var12);
        var12 = {};
        var14 = var14.name;
        var12['name'] = var14;
        var14 = 19;
        var14 = var19[var14];
        var15 = var15.bind(var3)(var14);
        var14 = {};
        var14['mentionCount'] = var18;
        var14['locale'] = var17;
        var14['isMentionLowImportance'] = var16;
        var14 = var15.bind(var3)(var14);
        var12['mentionBadge'] = var14;
        var12 = var13.bind(var3)(var12);
        var11[2] = var12;
        var6['children'] = var11;
        var7 = var10.bind(var3)(var7, var6);
        var6 = {};
        var6['fontScale'] = var9;
        var6 = var8.bind(var3)(var7, var6);
        var1['children'] = var6;
        var1 = var5.bind(var3)(var4, var1);
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var4 = var5.bind(var8)(var4);
    var _closure1_slot14 = var4;
    var5 = var8.memo;
    var4 = function(arg1) {
        var1 = arg1;
        var9 = var1.name;
        var8 = var1.onPress;
        var7 = var1.note;
        var2 = _closure1_slot13;
        var4 = undefined;
        var6 = var2.bind(var4)();
        var3 = _closure1_slot0;
        var5 = _closure1_slot2;
        var2 = 25;
        var2 = var5[var2];
        var5 = var3.bind(var4)(var2);
        var3 = var5.renderCategoryItem;
        var2 = {};
        var2['name'] = var9;
        var2['onPress'] = var8;
        var2['note'] = var7;
        var5 = var3.bind(var5)(var2);
        var3 = _closure1_slot9;
        var2 = _closure1_slot4;
        var1 = {};
        var6 = var6.categoryWrapper;
        var1['style'] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var4 = var5.bind(var8)(var4);
    var _closure1_slot15 = var4;
    var5 = var8.memo;
    var4 = function InitialResultsInner(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = arg1;
            var5 = var2.history;
            var _closure2_slot0 = var5;
            var13 = var2.unreads;
            var _closure2_slot1 = var13;
            var17 = var2.toggleExpandedHistory;
            var _closure2_slot2 = var17;
            var8 = var2.expandedHistory;
            var _closure2_slot3 = var8;
            var10 = var2.selectedGuildId;
            var _closure2_slot4 = var10;
            var2 = _closure1_slot13;
            var4 = undefined;
            var18 = var2.bind(var4)();
            var3 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 11;
            var2 = var9[var2];
            var12 = var3.bind(var4)(var2);
            var7 = var12.useStateFromStores;
            var2 = _closure1_slot7;
            var6 = new Array(1);
            var6[0] = var2;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = _closure2_slot4;
                    var1 = null;
                    if(!(var1 == var3)) { _fun0003_ip = 17; continue _fun0003 }
 13:
                    var3 = undefined;
                    return var3;
 17:
                    var4 = _closure1_slot7;
                    var3 = var4.getGuild;
                    var2 = _closure2_slot4;
                    var2 = var3.bind(var4)(var2);
                    var3 = var1 == var2;
                    var1 = undefined;
                    if(var3) { _fun0003_ip = 52; continue _fun0003 }
 47:
                    var1 = var2.name;
 52:
                    return var1;
                }
            };
            var2 = var7.bind(var12)(var6, var2);
            var _closure2_slot5 = var2;
            var14 = _closure1_slot1;
            var6 = 28;
            var6 = var9[var6];
            var6 = var14.bind(var4)(var6);
            var6 = var6.bind(var4)();
            var6 = var6.height;
            var7 = _closure1_slot3;
            var16 = var7.useCallback;
            var15 = new Array(2);
            var15[0] = var5;
            var15[1] = var13;
            var12 = function(arg1, arg2) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var5 = arg2;
                    var3 = _closure1_slot16;
                    var2 = {};
                    var4 = 0;
                    var1 = arg1;
                    if(!(var4 !== var1)) { _fun0004_ip = 34; continue _fun0004 }
 21:
                    var1 = _closure2_slot1;
                    var1 = var1[var5];
                    _fun0004_ip = 45; continue _fun0004;
 34:
                    var4 = _closure2_slot0;
                    var1 = var4[var5];
 45:
                    var2['result'] = var1;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var15 = var16.bind(var7)(var12, var15);
            var16 = var7.useCallback;
            var12 = new Array(3);
            var12[0] = var17;
            var12[1] = var8;
            var12[2] = var2;
            var2 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var4 = _closure1_slot9;
                    var3 = _closure1_slot15;
                    var2 = 0;
                    var1 = arg1;
                    if(!(var2 !== var1)) { _fun0005_ip = 177; continue _fun0005 }
 23:
                    var2 = {};
                    var5 = _closure2_slot5;
                    var1 = null;
                    if(!(var1 == var5)) { _fun0005_ip = 97; continue _fun0005 }
 38:
                    var8 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var1 = 27;
                    var5 = var10[var1];
                    var7 = undefined;
                    var5 = var8.bind(var7)(var5);
                    var6 = var5.intl;
                    var5 = var6.string;
                    var1 = var10[var1];
                    var1 = var8.bind(var7)(var1);
                    var1 = var1.t;
                    var1 = var1.ieCAhI;
                    var1 = var5.bind(var6)(var1);
                    _fun0005_ip = 168; continue _fun0005;
 97:
                    var10 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var5 = 27;
                    var7 = var12[var5];
                    var6 = undefined;
                    var7 = var10.bind(var6)(var7);
                    var8 = var7.intl;
                    var7 = var8.formatToPlainString;
                    var5 = var12[var5];
                    var5 = var10.bind(var6)(var5);
                    var5 = var5.t;
                    var6 = var5.+lFj39;
                    var5 = {};
                    var9 = _closure2_slot5;
                    var5['guildName'] = var9;
                    var1 = var7.bind(var8)(var6, var5);
 168:
                    var2['name'] = var1;
                    _fun0005_ip = 392; continue _fun0005;
 177:
                    var1 = {};
                    var10 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var15 = 27;
                    var5 = var12[var15];
                    var9 = undefined;
                    var5 = var10.bind(var9)(var5);
                    var7 = var5.intl;
                    var6 = var7.string;
                    var5 = var12[var15];
                    var5 = var10.bind(var9)(var5);
                    var5 = var5.t;
                    var5 = var5.Xmh+5e;
                    var5 = var6.bind(var7)(var5);
                    var1['name'] = var5;
                    var6 = _closure2_slot3;
                    var8 = _closure1_slot9;
                    var7 = 26;
                    var7 = var12[var7];
                    var7 = var10.bind(var9)(var7);
                    var7 = var7.Text;
                    var10 = {'variant': 'text-xs/semibold', 'color': 'text-brand'};
                    var14 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var12 = var11[var15];
                    var12 = var14.bind(var9)(var12);
                    var13 = var12.intl;
                    var12 = var13.string;
                    var11 = var11[var15];
                    var11 = var14.bind(var9)(var11);
                    var11 = var11.t;
                    if(var6) { _fun0005_ip = 350; continue _fun0005 }
 328:
                    var6 = var11./XSoJy;
                    var6 = var12.bind(var13)(var6);
                    var10['children'] = var6;
                    var6 = var10;
                    _fun0005_ip = 370; continue _fun0005;
 350:
                    var11 = var11.3BdvgI;
                    var11 = var12.bind(var13)(var11);
                    var10['children'] = var11;
                    var6 = var10;
 370:
                    var6 = var8.bind(var9)(var7, var6);
                    var1['note'] = var6;
                    var5 = _closure2_slot2;
                    var1['onPress'] = var5;
                    var2 = var1;
 392:
                    var1 = undefined;
                    var1 = var4.bind(var1)(var3, var2);
                    return var1;
                }
            };
            var12 = var16.bind(var7)(var2, var12);
            var2 = 9;
            var2 = var9[var2];
            var2 = var14.bind(var4)(var2);
            var17 = var2.bind(var4)();
            var _closure2_slot6 = var17;
            var2 = 12;
            var2 = var9[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.useFontScale;
            var9 = var2.bind(var3)();
            var _closure2_slot7 = var9;
            var3 = var7.useCallback;
            var2 = new Array(4);
            var2[0] = var9;
            var2[1] = var5;
            var2[2] = var13;
            var2[3] = var17;
            var1 = function(arg1, arg2) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var4 = arg2;
                    var1 = null;
                    var2 = var1 == var4;
                    var3 = 0;
                    var1 = 0;
                    if(var2) { _fun0006_ip = 191; continue _fun0006 }
 19:
                    var2 = arg1;
                    if(!(var3 !== var2)) { _fun0006_ip = 39; continue _fun0006 }
 26:
                    var2 = _closure2_slot1;
                    var2 = var2[var4];
                    _fun0006_ip = 50; continue _fun0006;
 39:
                    var3 = _closure2_slot0;
                    var2 = var3[var4];
 50:
                    var4 = var2.type;
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var2 = 20;
                    var2 = var6[var2];
                    var6 = undefined;
                    var2 = var5.bind(var6)(var2);
                    var2 = var2.AutocompleterResultTypes;
                    var2 = var2.VOICE_CHANNEL;
                    if(!(var4 !== var2)) { _fun0006_ip = 130; continue _fun0006 }
 96:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var2 = 29;
                    var2 = var5[var2];
                    var4 = var4.bind(var6)(var2);
                    var2 = _closure2_slot7;
                    var2 = var4.bind(var6)(var2);
                    _fun0006_ip = 188; continue _fun0006;
 130:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 29;
                    var3 = var5[var3];
                    var5 = var4.bind(var6)(var3);
                    var4 = _closure2_slot7;
                    var4 = var5.bind(var6)(var4);
                    var3 = _closure2_slot6;
                    var3 = var3.voiceUsers;
                    var3 = var3.height;
                    var4 = var4 + var3;
                    var3 = 2;
                    var2 = var4 - var3;
 188:
                    var1 = var2;
 191:
                    return var1;
                }
            };
            var16 = var3.bind(var7)(var1, var2);
            var1 = global;
            var7 = var1.Math;
            var3 = var7.min;
            var2 = var5.length;
            if(var8) { _fun0002_ip = 354; continue _fun0002 }
 320:
            var14 = var1.Math;
            var9 = var14.max;
            var8 = var13.length;
            var1 = 5;
            var8 = var1 - var8;
            var1 = 2;
            var1 = var9.bind(var14)(var8, var1);
            _fun0002_ip = 359; continue _fun0002;
 354:
            var1 = var5.length;
 359:
            var14 = var3.bind(var7)(var2, var1);
            var3 = _closure1_slot9;
            var2 = _closure1_slot4;
            var1 = {};
            var7 = var18.listContainer;
            var1['style'] = var7;
            var5 = var5.length;
            var7 = 0;
            if(!(!(var5 > var7))) { _fun0002_ip = 413; continue _fun0002 }
 396:
            var5 = var13.length;
            var7 = var5 > var7;
            var5 = null;
            if(!var7) { _fun0002_ip = 572; continue _fun0002 }
 413:
            var9 = _closure1_slot9;
            var8 = _closure1_slot1;
            var19 = _closure1_slot2;
            var7 = 30;
            var7 = var19[var7];
            var8 = var8.bind(var4)(var7);
            var7 = {'optimizeListItemRender': true, 'batchesToRender': 6};
            var18 = var18.list;
            var7['style'] = var18;
            var17 = var17.category;
            var17 = var17.height;
            var7['sectionSize'] = var17;
            var7['itemSize'] = var16;
            var7['renderItem'] = var15;
            var7['renderSection'] = var12;
            var12 = new Array(2);
            var12[0] = var14;
            var13 = var13.length;
            var12[1] = var13;
            var7['sections'] = var12;
            var12 = 8;
            var7['sectionFooterSize'] = var12;
            var7['footerSize'] = var12;
            var11 = _closure1_slot12;
            var7['scrollIndicatorInsets'] = var11;
            var7['chunkBase'] = var6;
            var6 = 'always';
            var7['keyboardShouldPersistTaps'] = var6;
            var6 = null;
            var11 = var6 != var10;
            var6 = 'default';
            if(!var11) { _fun0002_ip = 565; continue _fun0002 }
 562:
            var6 = var10;
 565:
            var5 = var9.bind(var4)(var8, var7, var6);
 572:
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = var5.bind(var8)(var4);
    var5 = var8.memo;
    var2 = function SearchResultsInner(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var2 = arg1;
            var11 = var2.results;
            var _closure2_slot0 = var11;
            var2 = var2.query;
            var3 = _closure1_slot13;
            var4 = undefined;
            var15 = var3.bind(var4)();
            var3 = _closure1_slot1;
            var7 = _closure1_slot2;
            var5 = 28;
            var5 = var7[var5];
            var5 = var3.bind(var4)(var5);
            var5 = var5.bind(var4)();
            var9 = var5.height;
            var6 = _closure1_slot3;
            var12 = var6.useCallback;
            var8 = new Array(1);
            var8[0] = var11;
            var5 = function(arg1, arg2) {
                var3 = _closure1_slot16;
                var2 = {};
                var4 = _closure2_slot0;
                var1 = arg2;
                var1 = var4[var1];
                var2['result'] = var1;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var12 = var12.bind(var6)(var5, var8);
            var8 = var6.useRef;
            var5 = null;
            var16 = var8.bind(var6)(var5);
            var _closure2_slot1 = var16;
            var13 = var6.useEffect;
            var8 = new Array(1);
            var8[0] = var2;
            var2 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var1 = _closure2_slot1;
                    var3 = var1.current;
                    var4 = null;
                    var1 = var4 == var3;
                    if(var1) { _fun0008_ip = 31; continue _fun0008 }
 21:
                    var2 = var3.scrollToTop;
                    var1 = var4 == var2;
 31:
                    if(var1) { _fun0008_ip = 47; continue _fun0008 }
 34:
                    var2 = var3.scrollToTop;
                    var1 = false;
                    var1 = var2.bind(var3)(var1);
 47:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var13.bind(var6)(var2, var8);
            var2 = 9;
            var2 = var7[var2];
            var2 = var3.bind(var4)(var2);
            var14 = var2.bind(var4)();
            var _closure2_slot2 = var14;
            var3 = _closure1_slot0;
            var2 = 12;
            var2 = var7[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.useFontScale;
            var7 = var2.bind(var3)();
            var _closure2_slot3 = var7;
            var3 = var6.useCallback;
            var2 = new Array(3);
            var2[0] = var7;
            var2[1] = var11;
            var2[2] = var14;
            var1 = function(arg1, arg2) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var4 = arg2;
                    var1 = null;
                    var2 = var1 == var4;
                    var1 = 0;
                    if(var2) { _fun0009_ip = 163; continue _fun0009 }
 17:
                    var2 = _closure2_slot0;
                    var2 = var2[var4];
                    var5 = var2.type;
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var2 = 20;
                    var2 = var6[var2];
                    var6 = undefined;
                    var2 = var7.bind(var6)(var2);
                    var2 = var2.AutocompleterResultTypes;
                    var2 = var2.VOICE_CHANNEL;
                    if(!(var5 !== var2)) { _fun0009_ip = 105; continue _fun0009 }
 74:
                    var5 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var2 = 29;
                    var2 = var7[var2];
                    var5 = var5.bind(var6)(var2);
                    var2 = _closure2_slot3;
                    var2 = var5.bind(var6)(var2);
                    _fun0009_ip = 160; continue _fun0009;
 105:
                    var5 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var4 = 29;
                    var4 = var7[var4];
                    var5 = var5.bind(var6)(var4);
                    var4 = _closure2_slot3;
                    var4 = var5.bind(var6)(var4);
                    var3 = _closure2_slot2;
                    var3 = var3.voiceUsers;
                    var3 = var3.height;
                    var4 = var4 + var3;
                    var3 = 2;
                    var2 = var4 - var3;
 160:
                    var1 = var2;
 163:
                    return var1;
                }
            };
            var13 = var3.bind(var6)(var1, var2);
            var3 = _closure1_slot9;
            var2 = _closure1_slot4;
            var1 = {};
            var6 = var15.listContainer;
            var1['style'] = var6;
            var7 = var11.length;
            var6 = 0;
            var6 = var7 > var6;
            if(!var6) { _fun0007_ip = 398; continue _fun0007 }
 255:
            var8 = _closure1_slot9;
            var7 = _closure1_slot1;
            var17 = _closure1_slot2;
            var6 = 30;
            var6 = var17[var6];
            var7 = var7.bind(var4)(var6);
            var6 = {'ref': null, 'optimizeListItemRender': true, 'batchesToRender': 6};
            var6['ref'] = var16;
            var15 = var15.list;
            var6['style'] = var15;
            var14 = var14.category;
            var14 = var14.height;
            var6['sectionSize'] = var14;
            var6['itemSize'] = var13;
            var13 = _closure1_slot17;
            var6['renderSection'] = var13;
            var6['renderItem'] = var12;
            var12 = var11.length;
            var11 = new Array(1);
            var11[0] = var12;
            var6['sections'] = var11;
            var11 = 16;
            var6['footerSize'] = var11;
            var10 = _closure1_slot12;
            var6['scrollIndicatorInsets'] = var10;
            var6['chunkBase'] = var9;
            var9 = 'always';
            var6['keyboardShouldPersistTaps'] = var9;
            var5 = var8.bind(var4)(var7, var6);
 398:
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var5.bind(var8)(var2);
    var5 = 31;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/launchpad/native/LaunchPadSearchResults.tsx';
    var5 = var6.bind(var7)(var5);
    var3['InitialResults'] = var4;
    var3['SearchResults'] = var2;
    return var1;
})();