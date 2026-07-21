// app/modules/home_drawer/native/HomeDrawerFolderRow.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function Wrapper(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var10 = var1.folder;
            var _closure2_slot0 = var10;
            var7 = var1.expanded;
            var3 = _closure1_slot13;
            var4 = undefined;
            var5 = var3.bind(var4)();
            var _closure2_slot1 = var5;
            var9 = _closure1_slot3;
            var8 = var9.useMemo;
            var6 = function() {
                var1 = {};
                var2 = false;
                var1['isMuted'] = var2;
                return var1;
            };
            var3 = new Array(0);
            var12 = var8.bind(var9)(var6, var3);
            var _closure2_slot2 = var12;
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var8 = 10;
            var9 = var3[var8];
            var14 = var6.bind(var4)(var9);
            var13 = var14.useStateFromStoresArray;
            var9 = _closure1_slot5;
            var11 = new Array(2);
            var11[0] = var9;
            var9 = _closure1_slot8;
            var11[1] = var9;
            var9 = function() {
                var1 = _closure2_slot0;
                var3 = var1.guildIds;
                var2 = var3.filter;
                var1 = function(arg1) {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        var4 = arg1;
                        var3 = _closure1_slot8;
                        var1 = var3.isMuted;
                        var1 = var1.bind(var3)(var4);
                        var1 = !var1;
                        if(!var1) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                        var3 = _closure1_slot5;
                        var2 = var3.getMentionCount;
                        var3 = var2.bind(var3)(var4);
                        var2 = 0;
                        var1 = var3 > var2;
case 2:
                        return var1;
                    }
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var13 = var13.bind(var14)(var11, var9);
            var _closure2_slot3 = var13;
            var9 = var3[var8];
            var15 = var6.bind(var4)(var9);
            var14 = var15.useStateFromStores;
            var9 = _closure1_slot6;
            var11 = new Array(1);
            var11[0] = var9;
            var9 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot3;
                    var1 = 0;
                    var6 = var2[var1];
                    var4 = null;
                    var3 = var4 != var6;
                    var1 = undefined;
                    if(!var3) { _fun0003_ip = 4; continue _fun0003 }
case 5:
                    var5 = _closure1_slot6;
                    var3 = var5.getGuild;
                    var3 = var3.bind(var5)(var6);
                    var4 = var4 == var3;
                    var2 = undefined;
                    if(var4) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                    var2 = var3.name;
case 6:
                    var1 = var2;
case 4:
                    return var1;
                }
            };
            var14 = var14.bind(var15)(var11, var9);
            var9 = var3[var8];
            var16 = var6.bind(var4)(var9);
            var15 = var16.useStateFromStoresArray;
            var9 = _closure1_slot5;
            var11 = new Array(2);
            var11[0] = var9;
            var9 = _closure1_slot8;
            var11[1] = var9;
            var9 = function() {
                var1 = _closure2_slot0;
                var3 = var1.guildIds;
                var2 = var3.filter;
                var1 = function(arg1) {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        var4 = arg1;
                        var3 = _closure1_slot8;
                        var1 = var3.isMuted;
                        var1 = var1.bind(var3)(var4);
                        var1 = !var1;
                        if(!var1) { _fun0004_ip = 8; continue _fun0004 }
case 3:
                        var3 = _closure1_slot5;
                        var2 = var3.hasUnread;
                        var1 = var2.bind(var3)(var4);
case 8:
                        return var1;
                    }
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var18 = var15.bind(var16)(var11, var9);
            var _closure2_slot4 = var18;
            var9 = var3[var8];
            var16 = var6.bind(var4)(var9);
            var15 = var16.useStateFromStores;
            var9 = _closure1_slot6;
            var11 = new Array(1);
            var11[0] = var9;
            var9 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var2 = _closure2_slot4;
                    var1 = 0;
                    var6 = var2[var1];
                    var4 = null;
                    var3 = var4 != var6;
                    var1 = undefined;
                    if(!var3) { _fun0005_ip = 4; continue _fun0005 }
case 5:
                    var5 = _closure1_slot6;
                    var3 = var5.getGuild;
                    var3 = var3.bind(var5)(var6);
                    var4 = var4 == var3;
                    var2 = undefined;
                    if(var4) { _fun0005_ip = 6; continue _fun0005 }
case 7:
                    var2 = var3.name;
case 6:
                    var1 = var2;
case 4:
                    return var1;
                }
            };
            var19 = var15.bind(var16)(var11, var9);
            var9 = var3[var8];
            var16 = var6.bind(var4)(var9);
            var15 = var16.useStateFromStoresArray;
            var9 = _closure1_slot9;
            var11 = new Array(3);
            var11[0] = var9;
            var9 = _closure1_slot6;
            var11[1] = var9;
            var9 = _closure1_slot8;
            var11[2] = var9;
            var9 = function() {
                var1 = _closure2_slot0;
                var3 = var1.guildIds;
                var2 = var3.filter;
                var1 = function(arg1) {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                        var9 = arg1;
                        var _closure4_slot0 = var9;
                        var4 = _closure1_slot8;
                        var3 = var4.isMuted;
                        var3 = var3.bind(var4)(var9);
                        if(var3) { _fun0006_ip = 9; continue _fun0006 }
case 10:
                        var4 = _closure1_slot6;
                        var3 = var4.getGuild;
                        var3 = var3.bind(var4)(var9);
                        var8 = null;
                        var4 = var8 == var3;
                        var7 = undefined;
                        if(var4) { _fun0006_ip = 11; continue _fun0006 }
case 4:
                        var7 = var3.afkChannelId;
case 11:
                        var3 = global;
                        var4 = var3.Set;
                        var5 = var4.prototype;
                        var5 = Object.create(var5, {constructor: {value: var4}});
                        var14 = var5;
                        var4 = new var14[var4](var13);
                        var4 = var4 instanceof Object ? var4 : var5;
                        var5 = var3.Object;
                        var3 = var5.values;
                        var6 = _closure1_slot9;
                        var2 = var6.getVoiceStates;
                        var2 = var2.bind(var6)(var9);
                        var6 = var3.bind(var5)(var2);
                        var3 = var6.length;
                        var2 = 0;
                        var3 = var2 < var3;
                        var5 = 0;
                        if(!var3) { _fun0006_ip = 12; continue _fun0006 }
case 13:
                        var3 = var6[var5];
                        var9 = var3.channelId;
                        var9 = var8 != var9;
                        if(!var9) { _fun0006_ip = 14; continue _fun0006 }
case 15:
                        var10 = var3.channelId;
                        var9 = var10 !== var7;
case 14:
                        if(!var9) { _fun0006_ip = 16; continue _fun0006 }
case 17:
                        var9 = var4.add;
                        var3 = var3.channelId;
                        var3 = var9.bind(var4)(var3);
case 16:
                        var5 = var5 + 1;
                        var3 = var6.length;
                        if(var5 < var3) { _fun0006_ip = 13; continue _fun0006 }
case 12:
                        var3 = new Array(0);
                        var13 = var3;
                        var12 = var4;
                        var11 = 0;
                        var2 = arraySpread(var13, var12, var11);
                        var2 = var3.some;
                        var1 = function(arg1) {
                            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                                var5 = arg1;
                                var6 = _closure1_slot8;
                                var4 = var6.isCategoryMuted;
                                var1 = _closure4_slot0;
                                var1 = var4.bind(var6)(var1, var5);
                                var1 = !var1;
                                if(!var1) { _fun0007_ip = 18; continue _fun0007 }
case 19:
                                var4 = _closure1_slot8;
                                var3 = var4.isChannelMuted;
                                var2 = _closure4_slot0;
                                var2 = var3.bind(var4)(var2, var5);
                                var1 = !var2;
case 18:
                                return var1;
                            }
                        };
                        var1 = var2.bind(var3)(var1);
                        return var1;
case 9:
                        var1 = false;
                        return var1;
                    }
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var16 = var15.bind(var16)(var11, var9);
            var _closure2_slot5 = var16;
            var8 = var3[var8];
            var15 = var6.bind(var4)(var8);
            var11 = var15.useStateFromStores;
            var8 = _closure1_slot6;
            var9 = new Array(1);
            var9[0] = var8;
            var8 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var2 = _closure2_slot5;
                    var1 = 0;
                    var6 = var2[var1];
                    var4 = null;
                    var3 = var4 != var6;
                    var1 = undefined;
                    if(!var3) { _fun0008_ip = 4; continue _fun0008 }
case 5:
                    var5 = _closure1_slot6;
                    var3 = var5.getGuild;
                    var3 = var3.bind(var5)(var6);
                    var4 = var4 == var3;
                    var2 = undefined;
                    if(var4) { _fun0008_ip = 6; continue _fun0008 }
case 7:
                    var2 = var3.name;
case 6:
                    var1 = var2;
case 4:
                    return var1;
                }
            };
            var17 = var11.bind(var15)(var9, var8);
            var11 = _closure1_slot3;
            var9 = var11.useMemo;
            var15 = var10.folderName;
            var8 = new Array(4);
            var8[0] = var15;
            var8[1] = var12;
            var12 = var5.title;
            var8[2] = var12;
            var5 = var5.titleText;
            var8[3] = var5;
            var5 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var1 = _closure2_slot2;
                    var1 = var1.isMuted;
                    if(var1) { _fun0009_ip = 20; continue _fun0009 }
case 21:
                    var7 = _closure1_slot10;
                    _fun0009_ip = 22; continue _fun0009;
case 20:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 11;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var7 = var1.BellSlashIcon;
case 22:
                    var4 = _closure1_slot12;
                    var3 = _closure1_slot4;
                    var2 = {};
                    var11 = _closure2_slot1;
                    var1 = var11.title;
                    var2['style'] = var1;
                    var6 = _closure1_slot11;
                    var5 = {};
                    var1 = 'xs';
                    var5['size'] = var1;
                    var1 = undefined;
                    var6 = var6.bind(var1)(var7, var5);
                    var5 = new Array(2);
                    var5[0] = var6;
                    var8 = _closure1_slot11;
                    var7 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var6 = 12;
                    var6 = var12[var6];
                    var6 = var7.bind(var1)(var6);
                    var7 = var6.Text;
                    var6 = {'variant': 'text-md/medium', 'style': null, 'lineClamp': 1, 'color': 'text-default'};
                    var11 = var11.titleText;
                    var6['style'] = var11;
                    var9 = _closure2_slot0;
                    var9 = var9.folderName;
                    var11 = null;
                    if(!(var11 == var9)) { _fun0009_ip = 23; continue _fun0009 }
case 24:
                    var13 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var10 = 13;
                    var11 = var14[var10];
                    var11 = var13.bind(var1)(var11);
                    var12 = var11.intl;
                    var11 = var12.string;
                    var10 = var14[var10];
                    var10 = var13.bind(var1)(var10);
                    var10 = var10.t;
                    var10 = var10.JQ/1n3;
                    var9 = var11.bind(var12)(var10);
case 23:
                    var6['children'] = var9;
                    var6 = var8.bind(var1)(var7, var6);
                    var5[1] = var6;
                    var2['children'] = var5;
                    var1 = var4.bind(var1)(var3, var2);
                    return var1;
                }
            };
            var5 = var9.bind(var11)(var5, var8);
            var15 = 13;
            var8 = var3[var15];
            var8 = var6.bind(var4)(var8);
            var9 = var8.intl;
            var8 = var9.format;
            var3 = var3[var15];
            var3 = var6.bind(var4)(var3);
            var3 = var3.t;
            var6 = var3.knOfkb;
            var3 = {};
            var10 = var10.guildIds;
            var10 = var10.length;
            var3['num'] = var10;
            var8 = var8.bind(var9)(var6, var3);
            var _closure2_slot6 = var8;
            var3 = 'text-muted';
            var _closure2_slot7 = var3;
            var6 = var13.length;
            var9 = 0;
            if(!(var6 > var9)) { _fun0001_ip = 25; continue _fun0001 }
case 26:
            var6 = null;
            if(!(var6 == var14)) { _fun0001_ip = 27; continue _fun0001 }
case 25:
            var6 = var16.length;
            if(!(var6 > var9)) { _fun0001_ip = 28; continue _fun0001 }
case 29:
            var6 = null;
            if(!(var6 == var17)) { _fun0001_ip = 30; continue _fun0001 }
case 28:
            var6 = var18.length;
            var6 = var6 > var9;
            if(!var6) { _fun0001_ip = 31; continue _fun0001 }
case 32:
            var9 = null;
            var6 = var9 != var19;
case 31:
            var10 = var8;
            var9 = var3;
            if(!var6) { _fun0001_ip = 33; continue _fun0001 }
case 34:
            var8 = _closure1_slot0;
            var6 = _closure1_slot2;
            var11 = var6[var15];
            var11 = var8.bind(var4)(var11);
            var12 = var11.intl;
            var11 = var12.format;
            var6 = var6[var15];
            var6 = var8.bind(var4)(var6);
            var6 = var6.t;
            var8 = var6["3Pm7uY"];
            var6 = {};
            var6['guildName'] = var19;
            var19 = var18.length;
            var18 = 1;
            var18 = var19 - var18;
            var6['count'] = var18;
            var6 = var11.bind(var12)(var8, var6);
            _closure2_slot6 = var6;
            var10 = var6;
            var9 = var3;
            _fun0001_ip = 33; continue _fun0001;
case 30:
            var8 = _closure1_slot0;
            var6 = _closure1_slot2;
            var11 = var6[var15];
            var11 = var8.bind(var4)(var11);
            var12 = var11.intl;
            var11 = var12.format;
            var6 = var6[var15];
            var6 = var8.bind(var4)(var6);
            var6 = var6.t;
            var8 = var6["0CRdJQ"];
            var6 = {};
            var6['guildName'] = var17;
            var17 = var16.length;
            var16 = 1;
            var16 = var17 - var16;
            var6['count'] = var16;
            var8 = var11.bind(var12)(var8, var6);
            _closure2_slot6 = var8;
            var6 = 'text-voice-connected';
            _closure2_slot7 = var6;
            var10 = var8;
            var9 = var6;
            _fun0001_ip = 33; continue _fun0001;
case 27:
            var8 = _closure1_slot0;
            var6 = _closure1_slot2;
            var11 = var6[var15];
            var11 = var8.bind(var4)(var11);
            var12 = var11.intl;
            var11 = var12.format;
            var6 = var6[var15];
            var6 = var8.bind(var4)(var6);
            var6 = var6.t;
            var8 = var6.UoFb3H;
            var6 = {};
            var6['guildName'] = var14;
            var14 = var13.length;
            var13 = 1;
            var13 = var14 - var13;
            var6['count'] = var13;
            var6 = var11.bind(var12)(var8, var6);
            _closure2_slot6 = var6;
            var10 = var6;
            var9 = var3;
case 33:
            var8 = _closure1_slot3;
            var6 = var8.useMemo;
            var3 = new Array(2);
            var3[0] = var10;
            var3[1] = var9;
            var2 = function() {
                var4 = _closure1_slot11;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 12;
                var1 = var3[var1];
                var3 = undefined;
                var1 = var2.bind(var3)(var1);
                var2 = var1.Text;
                var1 = {'variant': 'text-xs/medium', 'color': null, 'lineClamp': 1};
                var6 = _closure2_slot7;
                var1['color'] = var6;
                var5 = _closure2_slot6;
                var1['children'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var6 = var6.bind(var8)(var2, var3);
            var3 = _closure1_slot11;
            var2 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 14;
            var1 = var8[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.HomeDrawerSharedItem;
            var1 = {};
            var1['title'] = var5;
            var5 = undefined;
            if(var7) { _fun0001_ip = 35; continue _fun0001 }
case 36:
            var5 = var6;
case 35:
            var1['subtitle'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot14 = var1;
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
    var10 = 1;
    var4 = var6[var10];
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.NOOP;
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot11 = var7;
    var4 = var4.jsxs;
    var _closure1_slot12 = var4;
    var4 = 9;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'flexDirection': 'row', 'alignItems': 'center', 'gap': 4};
    var4['title'] = var9;
    var9 = {};
    var9['flexShrink'] = var10;
    var4['titleText'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot13 = var4;
    var4 = 17;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/home_drawer/native/HomeDrawerFolderRow.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function HomeDrawerFolderExpandedChildren(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var2 = arg1;
            var3 = var2.folderId;
            var _closure2_slot0 = var3;
            var6 = var2.expanded;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var5 = 10;
            var7 = var4[var5];
            var5 = undefined;
            var9 = var3.bind(var5)(var7);
            var8 = var9.useStateFromStores;
            var10 = _closure1_slot7;
            var7 = new Array(1);
            var7[0] = var10;
            var1 = function() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var1 = null;
                    var3 = var1 != var3;
                    if(!var3) { _fun0011_ip = 37; continue _fun0011 }
case 38:
                    var4 = _closure1_slot7;
                    var3 = var4.getGuildFolderById;
                    var2 = _closure2_slot0;
                    var1 = var3.bind(var4)(var2);
case 37:
                    return var1;
                }
            };
            var7 = var8.bind(var9)(var7, var1);
            var1 = 15;
            var1 = var4[var1];
            var1 = var3.bind(var5)(var1);
            var8 = var1.MobileHomeDrawerExperiment;
            var3 = var8.useConfig;
            var1 = {};
            var9 = 'folder-expanded-children';
            var1['location'] = var9;
            var1 = var3.bind(var8)(var1);
            var8 = var1.enableHome;
            var3 = _closure1_slot1;
            var1 = 16;
            var1 = var4[var1];
            var1 = var3.bind(var5)(var1);
            var1 = var1.bind(var5)();
            var3 = var1.isChatBesideChannelList;
            var4 = null;
            var9 = var4 == var7;
            var1 = null;
            if(var9) { _fun0010_ip = 39; continue _fun0010 }
case 40:
            var1 = null;
            if(!var8) { _fun0010_ip = 39; continue _fun0010 }
case 14:
            var1 = null;
            if(var3) { _fun0010_ip = 39; continue _fun0010 }
case 41:
            var4 = _closure1_slot11;
            var3 = _closure1_slot14;
            var2 = {};
            var2['folder'] = var7;
            var2['expanded'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 39:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();