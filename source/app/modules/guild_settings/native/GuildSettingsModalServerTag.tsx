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
    var4 = var4.AppState;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.GuildProfileFetchStatus;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.GuildSettingsSections;
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.BADGES;
    var _closure1_slot11 = var7;
    var4 = var4.GuildTagBadgeSize;
    var _closure1_slot12 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot13 = var7;
    var4 = var4.jsxs;
    var _closure1_slot14 = var4;
    var4 = 10;
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
    var10 = 11;
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
    var _closure1_slot15 = var4;
    var4 = 38;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_settings/native/GuildSettingsModalServerTag.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GuildSettingsModalServerTag(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var17 = var1.guildId;
            var _closure2_slot0 = var17;
            var10 = var1.contentContainerStyle;
            var5 = undefined;
            var _closure2_slot7 = var5;
            var _closure2_slot8 = var5;
            var _closure2_slot9 = var5;
            var _closure2_slot10 = var5;
            var _closure2_slot11 = var5;
            var _closure2_slot12 = var5;
            var _closure2_slot13 = var5;
            var1 = _closure1_slot15;
            var21 = var1.bind(var5)();
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 12;
            var1 = var9[var1];
            var3 = var8.bind(var5)(var1);
            var1 = var3.useNavigation;
            var26 = var1.bind(var3)();
            var _closure2_slot1 = var26;
            var13 = 13;
            var1 = var9[var13];
            var3 = var8.bind(var5)(var1);
            var1 = var3.canUseMobileServerTagSettings;
            var11 = var1.bind(var3)(var17);
            var _closure2_slot2 = var11;
            var7 = 14;
            var1 = var9[var7];
            var14 = var8.bind(var5)(var1);
            var12 = var14.useStateFromStores;
            var1 = _closure1_slot8;
            var4 = new Array(1);
            var4[0] = var1;
            var3 = new Array(1);
            var3[0] = var17;
            var1 = function() {
                var3 = _closure1_slot8;
                var2 = var3.getGuild;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var4 = var12.bind(var14)(var4, var1, var3);
            var1 = 15;
            var1 = var9[var1];
            var3 = var8.bind(var5)(var1);
            var1 = var3.useGuildProfile;
            var1 = var1.bind(var3)(var17);
            var3 = var1.guildProfile;
            var22 = var1.fetchStatus;
            var1 = var9[var7];
            var16 = var8.bind(var5)(var1);
            var15 = var16.useStateFromStores;
            var1 = _closure1_slot9;
            var14 = new Array(1);
            var14[0] = var1;
            var12 = function() {
                var2 = _closure1_slot9;
                var1 = var2.getGuildProfile;
                var1 = var1.bind(var2)();
                return var1;
            };
            var16 = var15.bind(var16)(var14, var12);
            var _closure2_slot3 = var16;
            var7 = var9[var7];
            var9 = var8.bind(var5)(var7);
            var8 = var9.useStateFromStores;
            var7 = new Array(1);
            var7[0] = var1;
            var1 = function() {
                var2 = _closure1_slot9;
                var1 = var2.getProps;
                var1 = var1.bind(var2)();
                var1 = var1.originalProfile;
                return var1;
            };
            var19 = var8.bind(var9)(var7, var1);
            var _closure2_slot4 = var19;
            var7 = _closure1_slot5;
            var1 = var7.useState;
            var9 = false;
            var8 = var1.bind(var7)(var9);
            var7 = _closure1_slot4;
            var1 = 2;
            var7 = var7.bind(var5)(var8, var1);
            var1 = 0;
            var14 = var7[var1];
            var _closure2_slot5 = var14;
            var1 = 1;
            var1 = var7[var1];
            var _closure2_slot6 = var1;
            var1 = null;
            var8 = var1 != var4;
            if(!var8) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var12 = _closure1_slot0;
            var15 = _closure1_slot2;
            var7 = 16;
            var7 = var15[var7];
            var12 = var12.bind(var5)(var7);
            var7 = var12.guildSupportsTags;
            var8 = var7.bind(var12)(var4);
case 2:
            _closure2_slot7 = var8;
            var12 = var1 == var16;
            var7 = undefined;
            if(var12) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var7 = var16.tag;
case 4:
            var15 = var1 != var7;
            var12 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var13];
            var12 = var12.bind(var5)(var7);
            var7 = var12.isServerTagDraftDirty;
            var18 = var7.bind(var12)(var16, var19);
            _closure2_slot8 = var18;
            var7 = var1 != var16;
            if(!var7) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var12 = var16.tag;
            var12 = var1 == var12;
            if(var12) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var20 = var16.tag;
            var13 = '';
            var12 = var13 !== var20;
case 8:
            var7 = var12;
case 6:
            var25 = var18;
            if(!var18) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var25 = var7;
case 10:
            _closure2_slot9 = var25;
            var23 = _closure1_slot5;
            var13 = var23.useEffect;
            var12 = new Array(1);
            var12[0] = var17;
            var7 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot8;
                    if(var2) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 17;
                    var3 = var3[var2];
                    var2 = undefined;
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.getGuildProfile;
                    var3 = _closure2_slot0;
                    var2 = {};
                    var1 = true;
                    var2['respectBackoff'] = var1;
                    var1 = var4.bind(var5)(var3, var1, var2);
case 12:
                    var1 = undefined;
                    return var1;
                }
            };
            var7 = var13.bind(var23)(var7, var12);
            var13 = var23.useEffect;
            var12 = new Array(2);
            var12[0] = var17;
            var12[1] = var18;
            var7 = function() {
                var5 = _closure1_slot6;
                var4 = var5.addEventListener;
                var3 = 'change';
                var2 = function(arg1) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var2 = 'active';
                        var1 = arg1;
                        var1 = var2 !== var1;
                        if(var1) { _fun0003_ip = 14; continue _fun0003 }
case 15:
                        var1 = _closure2_slot8;
case 14:
                        if(var1) { _fun0003_ip = 16; continue _fun0003 }
case 17:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 17;
                        var2 = var2[var1];
                        var1 = undefined;
                        var5 = var3.bind(var1)(var2);
                        var4 = var5.getGuildProfile;
                        var3 = _closure2_slot0;
                        var2 = {};
                        var1 = true;
                        var2['respectBackoff'] = var1;
                        var1 = var4.bind(var5)(var3, var1, var2);
case 16:
                        var1 = undefined;
                        return var1;
                    }
                };
                var2 = var4.bind(var5)(var3, var2);
                var _closure3_slot0 = var2;
                var1 = function() {
                    var2 = _closure3_slot0;
                    var1 = var2.remove;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                return var1;
            };
            var7 = var13.bind(var23)(var7, var12);
            var13 = var23.useCallback;
            var12 = new Array(2);
            var12[0] = var17;
            var12[1] = var19;
            var7 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 18;
                    var2 = var2[var1];
                    var1 = undefined;
                    var5 = var3.bind(var1)(var2);
                    var4 = var5.updateGuildProfile;
                    var3 = _closure2_slot0;
                    var2 = arg1;
                    if(var2) { _fun0004_ip = 18; continue _fun0004 }
case 19:
                    var2 = {};
                    var6 = null;
                    var2['tag'] = var6;
                    var2 = var4.bind(var5)(var3, var2);
                    _fun0004_ip = 20; continue _fun0004;
case 18:
                    var2 = {};
                    var7 = _closure2_slot4;
                    var6 = null;
                    var7 = var6 == var7;
                    var10 = undefined;
                    if(var7) { _fun0004_ip = 21; continue _fun0004 }
case 22:
                    var7 = _closure2_slot4;
                    var10 = var7.tag;
case 21:
                    var11 = var6 != var10;
                    var7 = '';
                    if(!var11) { _fun0004_ip = 23; continue _fun0004 }
case 24:
                    var7 = var10;
case 23:
                    var2['tag'] = var7;
                    var7 = _closure2_slot4;
                    var10 = var6 == var7;
                    var7 = undefined;
                    if(var10) { _fun0004_ip = 25; continue _fun0004 }
case 26:
                    var10 = _closure2_slot4;
                    var7 = var10.badge;
case 25:
                    if(!(var6 == var7)) { _fun0004_ip = 27; continue _fun0004 }
case 28:
                    var10 = _closure1_slot11;
                    var9 = 0;
                    var7 = var10[var9];
case 27:
                    var2['badge'] = var7;
                    var7 = _closure2_slot4;
                    var7 = var6 == var7;
                    var9 = undefined;
                    if(var7) { _fun0004_ip = 29; continue _fun0004 }
case 30:
                    var7 = _closure2_slot4;
                    var9 = var7.badgeColorPrimary;
case 29:
                    var10 = var6 != var9;
                    var7 = null;
                    if(!var10) { _fun0004_ip = 31; continue _fun0004 }
case 32:
                    var7 = var9;
case 31:
                    var2['badgeColorPrimary'] = var7;
                    var7 = _closure2_slot4;
                    var9 = var6 == var7;
                    var7 = undefined;
                    if(var9) { _fun0004_ip = 33; continue _fun0004 }
case 34:
                    var8 = _closure2_slot4;
                    var7 = var8.badgeColorSecondary;
case 33:
                    var8 = var6 != var7;
                    var6 = null;
                    if(!var8) { _fun0004_ip = 35; continue _fun0004 }
case 36:
                    var6 = var7;
case 35:
                    var2['badgeColorSecondary'] = var6;
                    var2 = var4.bind(var5)(var3, var2);
case 20:
                    return var1;
                }
            };
            var12 = var13.bind(var23)(var7, var12);
            var7 = var23.useRef;
            var7 = var7.bind(var23)(var9);
            _closure2_slot10 = var7;
            var20 = var23.useCallback;
            var13 = _closure1_slot3;
            var7 = function* () {
                var1 = function* anon_0_() {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0005_ip = 37; continue _fun0005 }
case 13:
                        var2 = _closure2_slot3;
                        var6 = null;
                        if(!(var6 != var2)) { _fun0005_ip = 38; continue _fun0005 }
case 39:
                        var2 = _closure2_slot10;
                        var2 = var2.current;
                        if(var2) { _fun0005_ip = 38; continue _fun0005 }
case 40:
                        var2 = _closure2_slot9;
                        if(!var2) { _fun0005_ip = 38; continue _fun0005 }
case 41:
                        var2 = _closure2_slot2;
                        if(!var2) { _fun0005_ip = 38; continue _fun0005 }
case 12:
                        var2 = _closure2_slot10;
                        var3 = true;
                        var2['current'] = var3;
                        var2 = _closure2_slot6;
                        var9 = undefined;
                        var2 = var2.bind(var9)(var3);
                        var5 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var2 = 17;
                        var2 = var7[var2];
                        var8 = var5.bind(var9)(var2);
                        var7 = var8.saveGuildProfile;
                        var5 = _closure2_slot0;
                        var2 = {};
                        var10 = _closure2_slot3;
                        var11 = var10.tag;
                        var2['tag'] = var11;
                        var11 = var10.badge;
                        var2['badge'] = var11;
                        var11 = var10.badgeColorPrimary;
                        var2['badgeColorPrimary'] = var11;
                        var10 = var10.badgeColorSecondary;
                        var2['badgeColorSecondary'] = var10;
                        var2 = var7.bind(var8)(var5, var2);
                        SaveGenerator(address=175);
case 42:
                        return var2;
case 43:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                        if(var5) { _fun0005_ip = 44; continue _fun0005 }
case 31:
                        var5 = _closure2_slot10;
                        var7 = false;
                        var5['current'] = var7;
                        var5 = _closure2_slot6;
                        var5 = var5.bind(var9)(var7);
                        if(!(var6 == var2)) { _fun0005_ip = 38; continue _fun0005 }
case 33:
                        var7 = _closure1_slot9;
                        var5 = var7.getProfileError;
                        var5 = var5.bind(var7)();
                        var7 = var6 == var5;
                        var6 = undefined;
                        if(var7) { _fun0005_ip = 45; continue _fun0005 }
case 20:
                        var6 = var5.status;
case 45:
                        var5 = 429;
                        if(!(var5 !== var6)) { _fun0005_ip = 46; continue _fun0005 }
case 47:
                        var6 = _closure2_slot1;
                        var5 = var6.navigate;
                        var4 = _closure1_slot10;
                        var4 = var4.TAG_CUSTOMIZE;
                        var4 = var5.bind(var6)(var4);
                        _fun0005_ip = 38; continue _fun0005;
case 46:
                        var8 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var3 = 19;
                        var3 = var10[var3];
                        var5 = var8.bind(var9)(var3);
                        var4 = var5.presentError;
                        var3 = 20;
                        var6 = var10[var3];
                        var6 = var8.bind(var9)(var6);
                        var7 = var6.intl;
                        var6 = var7.string;
                        var3 = var10[var3];
                        var3 = var8.bind(var9)(var3);
                        var3 = var3.t;
                        var3 = var3.RTSuVn;
                        var3 = var6.bind(var7)(var3);
                        var3 = var4.bind(var5)(var3);
                        _fun0005_ip = 38; continue _fun0005;
case 44:
                        return var2;
case 38:
                        var2 = undefined;
                        return var2;
case 37:
                        return var1;
                    }
                };
                return var1;
            };
            var13 = var13.bind(var5)(var7);
            var7 = new Array(5);
            var7[0] = var16;
            var7[1] = var17;
            var7[2] = var25;
            var7[3] = var11;
            var7[4] = var26;
            var20 = var20.bind(var23)(var13, var7);
            _closure2_slot11 = var20;
            var24 = var23.useCallback;
            var13 = new Array(1);
            var13[0] = var17;
            var7 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 21;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = {};
                var4 = _closure2_slot0;
                var2['guildId'] = var4;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var13 = var24.bind(var23)(var7, var13);
            var7 = _closure1_slot7;
            var7 = var7.FETCHED;
            var7 = var22 === var7;
            _closure2_slot12 = var7;
            var24 = var23.useEffect;
            var22 = new Array(7);
            var22[0] = var26;
            var22[1] = var11;
            var22[2] = var7;
            var22[3] = var8;
            var22[4] = var14;
            var22[5] = var25;
            var22[6] = var20;
            var20 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var1 = _closure2_slot2;
                    if(!var1) { _fun0006_ip = 39; continue _fun0006 }
case 48:
                    var1 = _closure2_slot12;
                    if(!var1) { _fun0006_ip = 39; continue _fun0006 }
case 49:
                    var1 = _closure2_slot7;
                    if(var1) { _fun0006_ip = 50; continue _fun0006 }
case 39:
                    var3 = _closure2_slot1;
                    var2 = var3.setOptions;
                    var1 = {};
                    var6 = undefined;
                    var1['headerRight'] = var6;
                    var1 = var2.bind(var3)(var1);
                    _fun0006_ip = 51; continue _fun0006;
case 50:
                    var3 = _closure2_slot1;
                    var2 = var3.setOptions;
                    var1 = {};
                    var4 = _closure2_slot5;
                    if(var4) { _fun0006_ip = 22; continue _fun0006 }
case 52:
                    var4 = function() {
                        var4 = _closure1_slot13;
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var1 = 23;
                        var1 = var9[var1];
                        var3 = undefined;
                        var1 = var8.bind(var3)(var1);
                        var2 = var1.HeaderActionButton;
                        var1 = {};
                        var5 = 20;
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
                        var6 = _closure2_slot11;
                        var1['onPress'] = var6;
                        var5 = _closure2_slot9;
                        var5 = !var5;
                        var1['disabled'] = var5;
                        var1 = var4.bind(var3)(var2, var1);
                        return var1;
                    };
                    _fun0006_ip = 53; continue _fun0006;
case 22:
                    var4 = function() {
                        var4 = _closure1_slot13;
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 22;
                        var1 = var3[var1];
                        var3 = undefined;
                        var1 = var2.bind(var3)(var1);
                        var2 = var1.HeaderSubmittingIndicator;
                        var1 = {};
                        var1 = var4.bind(var3)(var2, var1);
                        return var1;
                    };
case 53:
                    var1['headerRight'] = var4;
                    var1 = var2.bind(var3)(var1);
case 51:
                    var1 = undefined;
                    return var1;
                }
            };
            var20 = var24.bind(var23)(var20, var22);
            var22 = var23.useCallback;
            var20 = new Array(2);
            var20[0] = var17;
            var20[1] = var19;
            var19 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 18;
                    var2 = var2[var1];
                    var1 = undefined;
                    var5 = var3.bind(var1)(var2);
                    var4 = var5.updateGuildProfile;
                    var3 = _closure2_slot0;
                    var2 = {};
                    var7 = _closure2_slot4;
                    var6 = null;
                    var7 = var6 == var7;
                    var9 = undefined;
                    if(var7) { _fun0007_ip = 54; continue _fun0007 }
case 55:
                    var7 = _closure2_slot4;
                    var9 = var7.tag;
case 54:
                    var10 = var6 != var9;
                    var7 = null;
                    if(!var10) { _fun0007_ip = 56; continue _fun0007 }
case 57:
                    var7 = var9;
case 56:
                    var2['tag'] = var7;
                    var7 = _closure2_slot4;
                    var7 = var6 == var7;
                    var9 = undefined;
                    if(var7) { _fun0007_ip = 23; continue _fun0007 }
case 58:
                    var7 = _closure2_slot4;
                    var9 = var7.badge;
case 23:
                    var10 = var6 != var9;
                    var7 = null;
                    if(!var10) { _fun0007_ip = 59; continue _fun0007 }
case 60:
                    var7 = var9;
case 59:
                    var2['badge'] = var7;
                    var7 = _closure2_slot4;
                    var7 = var6 == var7;
                    var9 = undefined;
                    if(var7) { _fun0007_ip = 61; continue _fun0007 }
case 62:
                    var7 = _closure2_slot4;
                    var9 = var7.badgeColorPrimary;
case 61:
                    var10 = var6 != var9;
                    var7 = null;
                    if(!var10) { _fun0007_ip = 63; continue _fun0007 }
case 64:
                    var7 = var9;
case 63:
                    var2['badgeColorPrimary'] = var7;
                    var7 = _closure2_slot4;
                    var9 = var6 == var7;
                    var7 = undefined;
                    if(var9) { _fun0007_ip = 65; continue _fun0007 }
case 42:
                    var8 = _closure2_slot4;
                    var7 = var8.badgeColorSecondary;
case 65:
                    var8 = var6 != var7;
                    var6 = null;
                    if(!var8) { _fun0007_ip = 66; continue _fun0007 }
case 67:
                    var6 = var7;
case 66:
                    var2['badgeColorSecondary'] = var6;
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                }
            };
            var19 = var22.bind(var23)(var19, var20);
            _closure2_slot13 = var19;
            var20 = _closure1_slot1;
            var22 = _closure1_slot2;
            var19 = 24;
            var19 = var22[var19];
            var19 = var20.bind(var5)(var19);
            if(!var18) { _fun0001_ip = 68; continue _fun0001 }
case 69:
            var18 = !var14;
case 68:
            var14 = function(arg1) {
                var1 = arg1;
                var1 = var1.data;
                var1 = var1.action;
                var _closure3_slot0 = var1;
                var3 = _closure1_slot1;
                var10 = _closure1_slot2;
                var1 = 25;
                var2 = var10[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.show;
                var2 = {};
                var9 = _closure1_slot0;
                var6 = 20;
                var7 = var10[var6];
                var7 = var9.bind(var1)(var7);
                var11 = var7.intl;
                var8 = var11.string;
                var7 = var10[var6];
                var7 = var9.bind(var1)(var7);
                var7 = var7.t;
                var7 = var7.zhHtEX;
                var7 = var8.bind(var11)(var7);
                var2['title'] = var7;
                var7 = var10[var6];
                var7 = var9.bind(var1)(var7);
                var11 = var7.intl;
                var8 = var11.string;
                var7 = var10[var6];
                var7 = var9.bind(var1)(var7);
                var7 = var7.t;
                var7 = var7.BVVy6y;
                var7 = var8.bind(var11)(var7);
                var2['body'] = var7;
                var7 = var10[var6];
                var7 = var9.bind(var1)(var7);
                var11 = var7.intl;
                var8 = var11.string;
                var7 = var10[var6];
                var7 = var9.bind(var1)(var7);
                var7 = var7.t;
                var7 = var7.Ywt4w9;
                var7 = var8.bind(var11)(var7);
                var2['confirmText'] = var7;
                var7 = 26;
                var7 = var10[var7];
                var7 = var9.bind(var1)(var7);
                var7 = var7.ButtonColors;
                var7 = var7.RED;
                var2['confirmColor'] = var7;
                var7 = var10[var6];
                var7 = var9.bind(var1)(var7);
                var8 = var7.intl;
                var7 = var8.string;
                var6 = var10[var6];
                var6 = var9.bind(var1)(var6);
                var6 = var6.t;
                var6 = var6.DmDzZB;
                var6 = var7.bind(var8)(var6);
                var2['cancelText'] = var6;
                var5 = function onConfirm() {
                    var3 = _closure2_slot13;
                    var1 = undefined;
                    var3 = var3.bind(var1)();
                    var4 = _closure2_slot1;
                    var3 = var4.dispatch;
                    var2 = _closure3_slot0;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var2['onConfirm'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var14 = var19.bind(var5)(var18, var14);
            if(var11) { _fun0001_ip = 70; continue _fun0001 }
case 71:
            return var1;
case 70:
            if(var7) { _fun0001_ip = 72; continue _fun0001 }
case 73:
            var14 = _closure1_slot13;
            var11 = _closure1_slot0;
            var18 = _closure1_slot2;
            var7 = 27;
            var7 = var18[var7];
            var7 = var11.bind(var5)(var7);
            var11 = var7.SceneLoadingIndicator;
            var7 = {};
            var7 = var14.bind(var5)(var11, var7);
            return var7;
case 72:
            if(!(var1 != var4)) { _fun0001_ip = 74; continue _fun0001 }
case 75:
            if(!(var1 != var3)) { _fun0001_ip = 76; continue _fun0001 }
case 77:
            if(!(var1 != var16)) { _fun0001_ip = 78; continue _fun0001 }
case 79:
            var24 = undefined;
            if(!var15) { _fun0001_ip = 80; continue _fun0001 }
case 81:
            var3 = var16.tag;
            var3 = var1 != var3;
            var24 = undefined;
            if(!var3) { _fun0001_ip = 80; continue _fun0001 }
case 82:
            var4 = var16.tag;
            var3 = '';
            var24 = undefined;
            if(!(var3 !== var4)) { _fun0001_ip = 80; continue _fun0001 }
case 83:
            var7 = _closure1_slot13;
            var4 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = 29;
            var3 = var11[var3];
            var3 = var4.bind(var5)(var3);
            var4 = var3.Text;
            var3 = {'variant': 'text-md/normal', 'color': 'text-muted'};
            var11 = var16.tag;
            var3['children'] = var11;
            var24 = var7.bind(var5)(var4, var3);
case 80:
            var7 = _closure1_slot14;
            var23 = _closure1_slot0;
            var18 = _closure1_slot2;
            var3 = 30;
            var3 = var18[var3];
            var3 = var23.bind(var5)(var3);
            var4 = var3.TableRowGroup;
            var3 = {};
            var20 = 20;
            var11 = var18[var20];
            var11 = var23.bind(var5)(var11);
            var19 = var11.intl;
            var14 = var19.string;
            var11 = var18[var20];
            var11 = var23.bind(var5)(var11);
            var11 = var11.t;
            var11 = var11["2QmKZ2"];
            var11 = var14.bind(var19)(var11);
            var3['title'] = var11;
            var3['hasIcons'] = var9;
            var14 = _closure1_slot13;
            var9 = 31;
            var9 = var18[var9];
            var9 = var23.bind(var5)(var9);
            var11 = var9.TableSwitchRow;
            var9 = {};
            var19 = var18[var20];
            var19 = var23.bind(var5)(var19);
            var25 = var19.intl;
            var22 = var25.string;
            var19 = var18[var20];
            var19 = var23.bind(var5)(var19);
            var19 = var19.t;
            var19 = var19.w/mIMw;
            var19 = var22.bind(var25)(var19);
            var9['label'] = var19;
            var9['value'] = var15;
            var9['onValueChange'] = var12;
            var12 = !var8;
            var9['disabled'] = var12;
            var11 = var14.bind(var5)(var11, var9);
            var9 = new Array(2);
            var9[0] = var11;
            var11 = 32;
            var11 = var18[var11];
            var11 = var23.bind(var5)(var11);
            var12 = var11.TableRow;
            var11 = {};
            var19 = var18[var20];
            var19 = var23.bind(var5)(var19);
            var22 = var19.intl;
            var19 = var22.string;
            var18 = var18[var20];
            var18 = var23.bind(var5)(var18);
            var18 = var18.t;
            var18 = var18.oPzTHw;
            var18 = var19.bind(var22)(var18);
            var11['label'] = var18;
            var18 = true;
            var11['arrow'] = var18;
            var15 = !var15;
            var11['disabled'] = var15;
            var15 = function onPress() {
                var3 = _closure2_slot1;
                var2 = var3.navigate;
                var1 = _closure1_slot10;
                var1 = var1.TAG_CUSTOMIZE;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var11['onPress'] = var15;
            var18 = var1 != var24;
            var15 = undefined;
            if(!var18) { _fun0001_ip = 84; continue _fun0001 }
case 85:
            var22 = _closure1_slot14;
            var19 = _closure1_slot0;
            var26 = _closure1_slot2;
            var18 = 33;
            var18 = var26[var18];
            var18 = var19.bind(var5)(var18);
            var19 = var18.Stack;
            var18 = {'direction': 'horizontal', 'align': 'center'};
            var25 = _closure1_slot1;
            var23 = 11;
            var23 = var26[var23];
            var23 = var25.bind(var5)(var23);
            var23 = var23.space;
            var23 = var23.PX_4;
            var18['spacing'] = var23;
            var23 = var16.badge;
            var25 = var1 != var23;
            if(!var25) { _fun0001_ip = 86; continue _fun0001 }
case 87:
            var27 = _closure1_slot13;
            var26 = _closure1_slot0;
            var28 = _closure1_slot2;
            var23 = 34;
            var23 = var28[var23];
            var23 = var26.bind(var5)(var23);
            var26 = var23.GuildBadge;
            var23 = {};
            var28 = var16.badge;
            var23['badge'] = var28;
            var29 = var16.badgeColorPrimary;
            var30 = var1 != var29;
            var28 = undefined;
            if(!var30) { _fun0001_ip = 88; continue _fun0001 }
case 89:
            var28 = var29;
case 88:
            var23['primaryTintColor'] = var28;
            var29 = var16.badgeColorSecondary;
            var30 = var1 != var29;
            var28 = undefined;
            if(!var30) { _fun0001_ip = 90; continue _fun0001 }
case 91:
            var28 = var29;
case 90:
            var23['secondaryTintColor'] = var28;
            var28 = _closure1_slot12;
            var29 = var28.SIZE_16;
            var23['width'] = var29;
            var28 = var28.SIZE_16;
            var23['height'] = var28;
            var25 = var27.bind(var5)(var26, var23);
case 86:
            var23 = new Array(2);
            var23[0] = var25;
            var23[1] = var24;
            var18['children'] = var23;
            var15 = var22.bind(var5)(var19, var18);
case 84:
            var11['trailing'] = var15;
            var11 = var14.bind(var5)(var12, var11);
            var9[1] = var11;
            var3['children'] = var9;
            var19 = var7.bind(var5)(var4, var3);
            var7 = _closure1_slot13;
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var3 = 35;
            var3 = var12[var3];
            var3 = var11.bind(var5)(var3);
            var4 = var3.Form;
            var3 = {};
            var9 = var21.container;
            var3['style'] = var9;
            var14 = var21.containerContent;
            var9 = new Array(2);
            var9[0] = var14;
            var9[1] = var10;
            var3['contentContainerStyle'] = var9;
            var10 = _closure1_slot14;
            var9 = 33;
            var9 = var12[var9];
            var9 = var11.bind(var5)(var9);
            var9 = var9.Stack;
            var11 = {};
            var14 = _closure1_slot1;
            var18 = _closure1_slot2;
            var12 = 11;
            var12 = var18[var12];
            var12 = var14.bind(var5)(var12);
            var12 = var12.space;
            var12 = var12.PX_16;
            var11['spacing'] = var12;
            var15 = _closure1_slot13;
            if(var8) { _fun0001_ip = 92; continue _fun0001 }
case 93:
            var8 = 37;
            var8 = var18[var8];
            var12 = var14.bind(var5)(var8);
            var8 = {};
            var8['guildId'] = var17;
            var8['onUnlockPress'] = var13;
            var12 = var15.bind(var5)(var12, var8);
            var8 = new Array(2);
            var8[0] = var12;
            var8[1] = var19;
            var11['children'] = var8;
            var8 = var11;
            _fun0001_ip = 94; continue _fun0001;
case 92:
            var23 = _closure1_slot0;
            var13 = 29;
            var12 = var18[var13];
            var12 = var23.bind(var5)(var12);
            var22 = var12.Text;
            var12 = {'variant': 'text-sm/medium', 'color': 'text-subtle'};
            var24 = var21.description;
            var12['style'] = var24;
            var24 = var18[var20];
            var24 = var23.bind(var5)(var24);
            var26 = var24.intl;
            var25 = var26.string;
            var24 = var18[var20];
            var24 = var23.bind(var5)(var24);
            var24 = var24.t;
            var24 = var24.qVCnq+;
            var24 = var25.bind(var26)(var24);
            var12['children'] = var24;
            var22 = var15.bind(var5)(var22, var12);
            var12 = new Array(4);
            var12[0] = var22;
            var12[1] = var19;
            var13 = var18[var13];
            var13 = var23.bind(var5)(var13);
            var19 = var13.Text;
            var13 = {'variant': 'eyebrow', 'color': 'text-muted', 'style': null, 'accessibilityRole': 'header'};
            var21 = var21.description;
            var13['style'] = var21;
            var21 = var18[var20];
            var21 = var23.bind(var5)(var21);
            var22 = var21.intl;
            var21 = var22.string;
            var20 = var18[var20];
            var20 = var23.bind(var5)(var20);
            var20 = var20.t;
            var20 = var20.SKNnqq;
            var20 = var21.bind(var22)(var20);
            var13['children'] = var20;
            var13 = var15.bind(var5)(var19, var13);
            var12[2] = var13;
            var13 = 36;
            var13 = var18[var13];
            var14 = var14.bind(var5)(var13);
            var13 = {};
            var13['guildId'] = var17;
            var17 = var16.tag;
            var13['tag'] = var17;
            var17 = var16.badge;
            var13['badge'] = var17;
            var17 = var16.badgeColorPrimary;
            var13['primaryColor'] = var17;
            var16 = var16.badgeColorSecondary;
            var13['secondaryColor'] = var16;
            var13 = var15.bind(var5)(var14, var13);
            var12[3] = var13;
            var11['children'] = var12;
            var8 = var11;
case 94:
            var8 = var10.bind(var5)(var9, var8);
            var3['children'] = var8;
            var3 = var7.bind(var5)(var4, var3);
            return var3;
case 78:
            var7 = _closure1_slot13;
            var4 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 27;
            var3 = var8[var3];
            var3 = var4.bind(var5)(var3);
            var4 = var3.SceneLoadingIndicator;
            var3 = {};
            var3 = var7.bind(var5)(var4, var3);
            return var3;
case 76:
            var4 = _closure1_slot13;
            var3 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 28;
            var2 = var7[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var6 = function onRetry() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 17;
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
case 74:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();