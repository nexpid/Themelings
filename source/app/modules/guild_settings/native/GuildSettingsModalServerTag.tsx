// app/modules/guild_settings/native/GuildSettingsModalServerTag.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
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
    var4 = var6[var10];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.GuildProfileFetchStatus;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.BADGES;
    var _closure1_slot8 = var7;
    var7 = var4.GUILD_TAG_BADGE_PRIMARY_DEFAULT;
    var _closure1_slot9 = var7;
    var7 = var4.GUILD_TAG_BADGE_SECONDARY_DEFAULT;
    var _closure1_slot10 = var7;
    var4 = var4.GuildTagBadgeSize;
    var _closure1_slot11 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot12 = var7;
    var4 = var4.jsxs;
    var _closure1_slot13 = var4;
    var4 = 7;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var9['flex'] = var10;
    var4['container'] = var9;
    var9 = {};
    var10 = 16;
    var9['paddingTop'] = var10;
    var10 = 8;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.space;
    var12 = var12.PX_16;
    var9['paddingHorizontal'] = var12;
    var4['containerContent'] = var9;
    var9 = {};
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.space;
    var10 = var10.PX_4;
    var9['paddingHorizontal'] = var10;
    var4['description'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot14 = var4;
    var4 = 31;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_settings/native/GuildSettingsModalServerTag.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GuildSettingsModalServerTag(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var18 = var1.guildId;
            var _closure2_slot0 = var18;
            var10 = var1.contentContainerStyle;
            var5 = undefined;
            var _closure2_slot7 = var5;
            var _closure2_slot8 = var5;
            var _closure2_slot9 = var5;
            var _closure2_slot10 = var5;
            var _closure2_slot11 = var5;
            var _closure2_slot12 = var5;
            var _closure2_slot13 = var5;
            var1 = _closure1_slot14;
            var22 = var1.bind(var5)();
            var4 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 9;
            var1 = var8[var1];
            var3 = var4.bind(var5)(var1);
            var1 = var3.useNavigation;
            var24 = var1.bind(var3)();
            var _closure2_slot1 = var24;
            var1 = 10;
            var1 = var8[var1];
            var3 = var4.bind(var5)(var1);
            var1 = var3.canUseMobileServerTagSettings;
            var7 = var1.bind(var3)(var18);
            var _closure2_slot2 = var7;
            var1 = 11;
            var1 = var8[var1];
            var12 = var4.bind(var5)(var1);
            var11 = var12.useStateFromStores;
            var1 = _closure1_slot7;
            var9 = new Array(1);
            var9[0] = var1;
            var3 = new Array(1);
            var3[0] = var18;
            var1 = function() {
                var3 = _closure1_slot7;
                var2 = var3.getGuild;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var3 = var11.bind(var12)(var9, var1, var3);
            var1 = 12;
            var1 = var8[var1];
            var4 = var4.bind(var5)(var1);
            var1 = var4.useGuildProfile;
            var1 = var1.bind(var4)(var18);
            var16 = var1.guildProfile;
            var _closure2_slot3 = var16;
            var14 = var1.fetchStatus;
            var _closure2_slot4 = var14;
            var8 = _closure1_slot5;
            var9 = var8.useEffect;
            var4 = new Array(2);
            var4[0] = var18;
            var4[1] = var14;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var4 = _closure2_slot4;
                    var3 = _closure1_slot6;
                    var3 = var3.NOT_FETCHED;
                    if(!(var4 === var3)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 13;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.getGuildProfile;
                    var2 = _closure2_slot0;
                    var1 = false;
                    var1 = var3.bind(var4)(var2, var1);
case 2:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var9.bind(var8)(var1, var4);
            var4 = var8.useState;
            var1 = null;
            var8 = var4.bind(var8)(var1);
            var4 = _closure1_slot4;
            var13 = 2;
            var4 = var4.bind(var5)(var8, var13);
            var11 = 0;
            var17 = var4[var11];
            var _closure2_slot5 = var17;
            var8 = 1;
            var9 = var4[var8];
            var _closure2_slot6 = var9;
            var4 = var1 != var16;
            var12 = null;
            if(!var4) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = global;
            var19 = var4.JSON;
            var15 = var19.stringify;
            var20 = var16.tag;
            var4 = new Array(4);
            var4[0] = var20;
            var20 = var16.badge;
            var4[1] = var20;
            var20 = var16.badgeColorPrimary;
            var4[2] = var20;
            var20 = var16.badgeColorSecondary;
            var4[3] = var20;
            var12 = var15.bind(var19)(var4);
case 4:
            var15 = _closure1_slot5;
            var4 = var15.useState;
            var15 = var4.bind(var15)(var1);
            var4 = _closure1_slot4;
            var4 = var4.bind(var5)(var15, var13);
            var15 = var4[var11];
            var4 = var4[var8];
            if(!(var12 !== var15)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var4 = var4.bind(var5)(var12);
            var12 = var1 != var16;
            var4 = null;
            if(!var12) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var12 = {};
            var15 = var16.tag;
            var12['tag'] = var15;
            var15 = var16.badge;
            var12['badge'] = var15;
            var15 = var16.badgeColorPrimary;
            var12['badgeColorPrimary'] = var15;
            var15 = var16.badgeColorSecondary;
            var12['badgeColorSecondary'] = var15;
            var4 = var12;
case 8:
            var4 = var9.bind(var5)(var4);
case 6:
            var12 = _closure1_slot5;
            var4 = var12.useState;
            var9 = false;
            var12 = var4.bind(var12)(var9);
            var4 = _closure1_slot4;
            var4 = var4.bind(var5)(var12, var13);
            var23 = var4[var11];
            _closure2_slot7 = var23;
            var4 = var4[var8];
            _closure2_slot8 = var4;
            var8 = var1 != var3;
            if(!var8) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var4 = 14;
            var4 = var12[var4];
            var11 = var11.bind(var5)(var4);
            var4 = var11.guildSupportsTags;
            var8 = var4.bind(var11)(var3);
case 10:
            _closure2_slot9 = var8;
            var11 = var1 == var17;
            var4 = undefined;
            if(var11) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var4 = var17.tag;
case 12:
            var19 = var1 != var4;
            var21 = var1 != var17;
            if(!var21) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var21 = var1 != var16;
case 14:
            if(!var21) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var11 = var17.tag;
            var4 = var16.tag;
            var4 = var11 !== var4;
            if(var4) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var12 = var17.badge;
            var11 = var16.badge;
            var4 = var12 !== var11;
case 18:
            if(var4) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var12 = var17.badgeColorPrimary;
            var11 = var16.badgeColorPrimary;
            var4 = var12 !== var11;
case 20:
            if(var4) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var12 = var17.badgeColorSecondary;
            var11 = var16.badgeColorSecondary;
            var4 = var12 !== var11;
case 22:
            var21 = var4;
case 16:
            var4 = var1 != var17;
            if(!var4) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var11 = var17.tag;
            var11 = var1 == var11;
            if(var11) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            var13 = var17.tag;
            var12 = '';
            var11 = var12 !== var13;
case 26:
            var4 = var11;
case 24:
            if(!var21) { _fun0001_ip = 28; continue _fun0001 }
case 29:
            var21 = var4;
case 28:
            _closure2_slot10 = var21;
            var20 = _closure1_slot5;
            var12 = var20.useCallback;
            var11 = new Array(1);
            var11[0] = var16;
            var4 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure2_slot6;
                    var2 = {};
                    var5 = null;
                    var1 = arg1;
                    if(var1) { _fun0003_ip = 30; continue _fun0003 }
case 31:
                    var2['tag'] = var5;
                    var1 = _closure2_slot3;
                    var4 = var5 == var1;
                    var1 = undefined;
                    var7 = undefined;
                    if(var4) { _fun0003_ip = 32; continue _fun0003 }
case 33:
                    var4 = _closure2_slot3;
                    var7 = var4.badge;
case 32:
                    var8 = var5 != var7;
                    var4 = null;
                    if(!var8) { _fun0003_ip = 34; continue _fun0003 }
case 35:
                    var4 = var7;
case 34:
                    var2['badge'] = var4;
                    var4 = _closure2_slot3;
                    var4 = var5 == var4;
                    var7 = undefined;
                    if(var4) { _fun0003_ip = 36; continue _fun0003 }
case 37:
                    var4 = _closure2_slot3;
                    var7 = var4.badgeColorPrimary;
case 36:
                    var8 = var5 != var7;
                    var4 = null;
                    if(!var8) { _fun0003_ip = 38; continue _fun0003 }
case 39:
                    var4 = var7;
case 38:
                    var2['badgeColorPrimary'] = var4;
                    var4 = _closure2_slot3;
                    var4 = var5 == var4;
                    var7 = undefined;
                    if(var4) { _fun0003_ip = 40; continue _fun0003 }
case 41:
                    var4 = _closure2_slot3;
                    var7 = var4.badgeColorSecondary;
case 40:
                    var8 = var5 != var7;
                    var4 = null;
                    if(!var8) { _fun0003_ip = 42; continue _fun0003 }
case 43:
                    var4 = var7;
case 42:
                    var2['badgeColorSecondary'] = var4;
                    var1 = var3.bind(var1)(var2);
                    _fun0003_ip = 44; continue _fun0003;
case 30:
                    var1 = _closure2_slot3;
                    var4 = var5 == var1;
                    var1 = undefined;
                    var7 = undefined;
                    if(var4) { _fun0003_ip = 45; continue _fun0003 }
case 46:
                    var4 = _closure2_slot3;
                    var7 = var4.tag;
case 45:
                    var8 = var5 != var7;
                    var4 = '';
                    if(!var8) { _fun0003_ip = 47; continue _fun0003 }
case 48:
                    var4 = var7;
case 47:
                    var2['tag'] = var4;
                    var4 = _closure2_slot3;
                    var7 = var5 == var4;
                    var4 = undefined;
                    if(var7) { _fun0003_ip = 49; continue _fun0003 }
case 50:
                    var7 = _closure2_slot3;
                    var4 = var7.badge;
case 49:
                    if(!(var5 == var4)) { _fun0003_ip = 51; continue _fun0003 }
case 52:
                    var8 = _closure1_slot8;
                    var7 = 0;
                    var4 = var8[var7];
case 51:
                    var2['badge'] = var4;
                    var4 = _closure2_slot3;
                    var7 = var5 == var4;
                    var4 = undefined;
                    if(var7) { _fun0003_ip = 53; continue _fun0003 }
case 54:
                    var7 = _closure2_slot3;
                    var4 = var7.badgeColorPrimary;
case 53:
                    if(!(var5 == var4)) { _fun0003_ip = 55; continue _fun0003 }
case 56:
                    var4 = _closure1_slot9;
case 55:
                    var2['badgeColorPrimary'] = var4;
                    var4 = _closure2_slot3;
                    var7 = var5 == var4;
                    var4 = undefined;
                    if(var7) { _fun0003_ip = 5; continue _fun0003 }
case 57:
                    var6 = _closure2_slot3;
                    var4 = var6.badgeColorSecondary;
case 5:
                    if(!(var5 == var4)) { _fun0003_ip = 58; continue _fun0003 }
case 59:
                    var4 = _closure1_slot10;
case 58:
                    var2['badgeColorSecondary'] = var4;
                    var1 = var3.bind(var1)(var2);
case 44:
                    var1 = undefined;
                    return var1;
                }
            };
            var12 = var12.bind(var20)(var4, var11);
            var4 = var20.useRef;
            var4 = var4.bind(var20)(var9);
            _closure2_slot11 = var4;
            var13 = var20.useCallback;
            var11 = _closure1_slot3;
            var4 = function* () {
                var1 = function* anon_0_() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0004_ip = 60; continue _fun0004 }
case 61:
                        var2 = _closure2_slot5;
                        var4 = null;
                        if(!(var4 != var2)) { _fun0004_ip = 62; continue _fun0004 }
case 63:
                        var2 = _closure2_slot11;
                        var2 = var2.current;
                        if(var2) { _fun0004_ip = 62; continue _fun0004 }
case 64:
                        var2 = _closure2_slot10;
                        if(!var2) { _fun0004_ip = 62; continue _fun0004 }
case 65:
                        var2 = _closure2_slot2;
                        if(!var2) { _fun0004_ip = 62; continue _fun0004 }
case 34:
                        var2 = _closure2_slot11;
                        var3 = true;
                        var2['current'] = var3;
                        var2 = _closure2_slot8;
                        var9 = undefined;
                        var2 = var2.bind(var9)(var3);
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var2 = 13;
                        var2 = var7[var2];
                        var8 = var6.bind(var9)(var2);
                        var7 = var8.saveGuildProfile;
                        var6 = _closure2_slot0;
                        var2 = _closure2_slot5;
                        var2 = var7.bind(var8)(var6, var2);
                        SaveGenerator(address=131);
case 40:
                        return var2;
case 66:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                        if(var6) { _fun0004_ip = 67; continue _fun0004 }
case 68:
                        var7 = _closure2_slot11;
                        var6 = false;
                        var7['current'] = var6;
                        var5 = _closure2_slot8;
                        var5 = var5.bind(var9)(var6);
                        if(!(var4 == var2)) { _fun0004_ip = 62; continue _fun0004 }
case 69:
                        var8 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var3 = 15;
                        var3 = var10[var3];
                        var5 = var8.bind(var9)(var3);
                        var4 = var5.presentError;
                        var3 = 16;
                        var6 = var10[var3];
                        var6 = var8.bind(var9)(var6);
                        var7 = var6.intl;
                        var6 = var7.string;
                        var3 = var10[var3];
                        var3 = var8.bind(var9)(var3);
                        var3 = var3.t;
                        var3 = var3.fEptJP;
                        var3 = var6.bind(var7)(var3);
                        var3 = var4.bind(var5)(var3);
                        _fun0004_ip = 62; continue _fun0004;
case 67:
                        return var2;
case 62:
                        var2 = undefined;
                        return var2;
case 60:
                        return var1;
                    }
                };
                return var1;
            };
            var11 = var11.bind(var5)(var4);
            var4 = new Array(4);
            var4[0] = var17;
            var4[1] = var18;
            var4[2] = var21;
            var4[3] = var7;
            var11 = var13.bind(var20)(var11, var4);
            _closure2_slot12 = var11;
            var15 = var20.useCallback;
            var13 = new Array(1);
            var13[0] = var18;
            var4 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 17;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = {};
                var4 = _closure2_slot0;
                var2['guildId'] = var4;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var13 = var15.bind(var20)(var4, var13);
            var4 = _closure1_slot6;
            var4 = var4.FETCHED;
            var4 = var14 === var4;
            _closure2_slot13 = var4;
            var15 = var20.useEffect;
            var14 = new Array(7);
            var14[0] = var24;
            var14[1] = var7;
            var14[2] = var4;
            var14[3] = var8;
            var14[4] = var23;
            var14[5] = var21;
            var14[6] = var11;
            var11 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = _closure2_slot2;
                    if(!var1) { _fun0005_ip = 63; continue _fun0005 }
case 70:
                    var1 = _closure2_slot13;
                    if(!var1) { _fun0005_ip = 63; continue _fun0005 }
case 71:
                    var1 = _closure2_slot9;
                    if(var1) { _fun0005_ip = 72; continue _fun0005 }
case 63:
                    var3 = _closure2_slot1;
                    var2 = var3.setOptions;
                    var1 = {};
                    var6 = undefined;
                    var1['headerRight'] = var6;
                    var1 = var2.bind(var3)(var1);
                    _fun0005_ip = 73; continue _fun0005;
case 72:
                    var3 = _closure2_slot1;
                    var2 = var3.setOptions;
                    var1 = {};
                    var4 = _closure2_slot7;
                    if(var4) { _fun0005_ip = 74; continue _fun0005 }
case 75:
                    var4 = function() {
                        var4 = _closure1_slot12;
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var1 = 19;
                        var1 = var9[var1];
                        var3 = undefined;
                        var1 = var8.bind(var3)(var1);
                        var2 = var1.HeaderActionButton;
                        var1 = {};
                        var5 = 16;
                        var6 = var9[var5];
                        var6 = var8.bind(var3)(var6);
                        var7 = var6.intl;
                        var6 = var7.string;
                        var5 = var9[var5];
                        var5 = var8.bind(var3)(var5);
                        var5 = var5.t;
                        var5 = var5.R3BPH+;
                        var5 = var6.bind(var7)(var5);
                        var1['text'] = var5;
                        var6 = _closure2_slot12;
                        var1['onPress'] = var6;
                        var5 = _closure2_slot10;
                        var5 = !var5;
                        var1['disabled'] = var5;
                        var1 = var4.bind(var3)(var2, var1);
                        return var1;
                    };
                    _fun0005_ip = 76; continue _fun0005;
case 74:
                    var4 = function() {
                        var4 = _closure1_slot12;
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 18;
                        var1 = var3[var1];
                        var3 = undefined;
                        var1 = var2.bind(var3)(var1);
                        var2 = var1.HeaderSubmittingIndicator;
                        var1 = {};
                        var1 = var4.bind(var3)(var2, var1);
                        return var1;
                    };
case 76:
                    var1['headerRight'] = var4;
                    var1 = var2.bind(var3)(var1);
case 73:
                    var1 = undefined;
                    return var1;
                }
            };
            var11 = var15.bind(var20)(var11, var14);
            if(var7) { _fun0001_ip = 77; continue _fun0001 }
case 78:
            return var1;
case 77:
            if(var4) { _fun0001_ip = 79; continue _fun0001 }
case 80:
            var11 = _closure1_slot12;
            var7 = _closure1_slot0;
            var14 = _closure1_slot2;
            var4 = 20;
            var4 = var14[var4];
            var4 = var7.bind(var5)(var4);
            var7 = var4.SceneLoadingIndicator;
            var4 = {};
            var4 = var11.bind(var5)(var7, var4);
            return var4;
case 79:
            if(!(var1 != var3)) { _fun0001_ip = 81; continue _fun0001 }
case 82:
            if(!(var1 != var16)) { _fun0001_ip = 83; continue _fun0001 }
case 84:
            var25 = undefined;
            if(!var19) { _fun0001_ip = 85; continue _fun0001 }
case 86:
            var4 = var1 == var17;
            var3 = undefined;
            if(var4) { _fun0001_ip = 87; continue _fun0001 }
case 88:
            var3 = var17.tag;
case 87:
            var3 = var1 != var3;
            var25 = undefined;
            if(!var3) { _fun0001_ip = 85; continue _fun0001 }
case 89:
            var4 = var17.tag;
            var3 = '';
            var25 = undefined;
            if(!(var3 !== var4)) { _fun0001_ip = 85; continue _fun0001 }
case 90:
            var7 = _closure1_slot12;
            var4 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = 22;
            var3 = var11[var3];
            var3 = var4.bind(var5)(var3);
            var4 = var3.Text;
            var3 = {'variant': 'text-md/normal', 'color': 'text-muted'};
            var11 = var17.tag;
            var3['children'] = var11;
            var25 = var7.bind(var5)(var4, var3);
case 85:
            var7 = _closure1_slot13;
            var23 = _closure1_slot0;
            var15 = _closure1_slot2;
            var3 = 23;
            var3 = var15[var3];
            var3 = var23.bind(var5)(var3);
            var4 = var3.TableRowGroup;
            var3 = {};
            var21 = 16;
            var11 = var15[var21];
            var11 = var23.bind(var5)(var11);
            var20 = var11.intl;
            var14 = var20.string;
            var11 = var15[var21];
            var11 = var23.bind(var5)(var11);
            var11 = var11.t;
            var11 = var11["2QmKZ2"];
            var11 = var14.bind(var20)(var11);
            var3['title'] = var11;
            var3['hasIcons'] = var9;
            var14 = _closure1_slot12;
            var9 = 24;
            var9 = var15[var9];
            var9 = var23.bind(var5)(var9);
            var11 = var9.TableSwitchRow;
            var9 = {};
            var20 = var15[var21];
            var20 = var23.bind(var5)(var20);
            var26 = var20.intl;
            var24 = var26.string;
            var20 = var15[var21];
            var20 = var23.bind(var5)(var20);
            var20 = var20.t;
            var20 = var20.w/mIMw;
            var20 = var24.bind(var26)(var20);
            var9['label'] = var20;
            var9['value'] = var19;
            var9['onValueChange'] = var12;
            var12 = !var8;
            var9['disabled'] = var12;
            var11 = var14.bind(var5)(var11, var9);
            var9 = new Array(2);
            var9[0] = var11;
            var11 = 25;
            var11 = var15[var11];
            var11 = var23.bind(var5)(var11);
            var12 = var11.TableRow;
            var11 = {'label': null, 'arrow': true, 'disabled': true};
            var19 = var15[var21];
            var19 = var23.bind(var5)(var19);
            var20 = var19.intl;
            var19 = var20.string;
            var15 = var15[var21];
            var15 = var23.bind(var5)(var15);
            var15 = var15.t;
            var15 = var15.oPzTHw;
            var15 = var19.bind(var20)(var15);
            var11['label'] = var15;
            var19 = var1 != var25;
            var15 = undefined;
            if(!var19) { _fun0001_ip = 91; continue _fun0001 }
case 92:
            var23 = _closure1_slot13;
            var26 = _closure1_slot0;
            var28 = _closure1_slot2;
            var19 = 26;
            var19 = var28[var19];
            var19 = var26.bind(var5)(var19);
            var20 = var19.Stack;
            var19 = {'direction': 'horizontal', 'align': 'center'};
            var27 = _closure1_slot1;
            var24 = 8;
            var24 = var28[var24];
            var24 = var27.bind(var5)(var24);
            var24 = var24.space;
            var24 = var24.PX_4;
            var19['spacing'] = var24;
            var27 = _closure1_slot12;
            var24 = 27;
            var24 = var28[var24];
            var24 = var26.bind(var5)(var24);
            var26 = var24.GuildTagBadge;
            var24 = {};
            var28 = var16.badgeHash;
            var29 = var1 != var28;
            var28 = undefined;
            if(!var29) { _fun0001_ip = 93; continue _fun0001 }
case 94:
            var29 = {};
            var31 = _closure1_slot0;
            var32 = _closure1_slot2;
            var30 = 14;
            var30 = var32[var30];
            var33 = var31.bind(var5)(var30);
            var32 = var33.getGuildTagBadgeUrl;
            var31 = var16.badgeHash;
            var30 = _closure1_slot11;
            var30 = var30.SIZE_16;
            var30 = var32.bind(var33)(var18, var31, var30);
            var29['uri'] = var30;
            var28 = var29;
case 93:
            var24['source'] = var28;
            var28 = _closure1_slot11;
            var28 = var28.SIZE_16;
            var24['size'] = var28;
            var26 = var27.bind(var5)(var26, var24);
            var24 = new Array(2);
            var24[0] = var26;
            var24[1] = var25;
            var19['children'] = var24;
            var15 = var23.bind(var5)(var20, var19);
case 91:
            var11['trailing'] = var15;
            var11 = var14.bind(var5)(var12, var11);
            var9[1] = var11;
            var3['children'] = var9;
            var20 = var7.bind(var5)(var4, var3);
            var7 = _closure1_slot12;
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var3 = 28;
            var3 = var12[var3];
            var3 = var11.bind(var5)(var3);
            var4 = var3.Form;
            var3 = {};
            var9 = var22.container;
            var3['style'] = var9;
            var14 = var22.containerContent;
            var9 = new Array(2);
            var9[0] = var14;
            var9[1] = var10;
            var3['contentContainerStyle'] = var9;
            var10 = _closure1_slot13;
            var9 = 26;
            var9 = var12[var9];
            var9 = var11.bind(var5)(var9);
            var9 = var9.Stack;
            var11 = {};
            var14 = _closure1_slot1;
            var19 = _closure1_slot2;
            var12 = 8;
            var12 = var19[var12];
            var12 = var14.bind(var5)(var12);
            var12 = var12.space;
            var12 = var12.PX_16;
            var11['spacing'] = var12;
            var15 = _closure1_slot12;
            if(var8) { _fun0001_ip = 95; continue _fun0001 }
case 96:
            var8 = 30;
            var8 = var19[var8];
            var12 = var14.bind(var5)(var8);
            var8 = {};
            var8['guildId'] = var18;
            var8['onUnlockPress'] = var13;
            var12 = var15.bind(var5)(var12, var8);
            var8 = new Array(2);
            var8[0] = var12;
            var8[1] = var20;
            var11['children'] = var8;
            var8 = var11;
            _fun0001_ip = 97; continue _fun0001;
case 95:
            var24 = _closure1_slot0;
            var13 = 22;
            var12 = var19[var13];
            var12 = var24.bind(var5)(var12);
            var23 = var12.Text;
            var12 = {'variant': 'text-sm/medium', 'color': 'text-subtle'};
            var25 = var22.description;
            var12['style'] = var25;
            var25 = var19[var21];
            var25 = var24.bind(var5)(var25);
            var27 = var25.intl;
            var26 = var27.string;
            var25 = var19[var21];
            var25 = var24.bind(var5)(var25);
            var25 = var25.t;
            var25 = var25.qVCnq+;
            var25 = var26.bind(var27)(var25);
            var12['children'] = var25;
            var23 = var15.bind(var5)(var23, var12);
            var12 = new Array(4);
            var12[0] = var23;
            var12[1] = var20;
            var13 = var19[var13];
            var13 = var24.bind(var5)(var13);
            var20 = var13.Text;
            var13 = {'variant': 'eyebrow', 'color': 'text-muted', 'style': null, 'accessibilityRole': 'header'};
            var22 = var22.description;
            var13['style'] = var22;
            var22 = var19[var21];
            var22 = var24.bind(var5)(var22);
            var23 = var22.intl;
            var22 = var23.string;
            var21 = var19[var21];
            var21 = var24.bind(var5)(var21);
            var21 = var21.t;
            var21 = var21.SKNnqq;
            var21 = var22.bind(var23)(var21);
            var13['children'] = var21;
            var13 = var15.bind(var5)(var20, var13);
            var12[2] = var13;
            var13 = 29;
            var13 = var19[var13];
            var14 = var14.bind(var5)(var13);
            var13 = {};
            var13['guildId'] = var18;
            var19 = var1 == var17;
            var18 = undefined;
            if(var19) { _fun0001_ip = 98; continue _fun0001 }
case 99:
            var18 = var17.tag;
case 98:
            var19 = var1 != var18;
            var17 = null;
            if(!var19) { _fun0001_ip = 100; continue _fun0001 }
case 101:
            var17 = var18;
case 100:
            var13['tag'] = var17;
            var16 = var16.badgeHash;
            var13['badgeHash'] = var16;
            var13 = var15.bind(var5)(var14, var13);
            var12[3] = var13;
            var11['children'] = var12;
            var8 = var11;
case 97:
            var8 = var10.bind(var5)(var9, var8);
            var3['children'] = var8;
            var3 = var7.bind(var5)(var4, var3);
            return var3;
case 83:
            var4 = _closure1_slot12;
            var3 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 21;
            var2 = var7[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var6 = function onRetry() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 13;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.getGuildProfile;
                var2 = _closure2_slot0;
                var1 = true;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var2['onRetry'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
case 81:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();