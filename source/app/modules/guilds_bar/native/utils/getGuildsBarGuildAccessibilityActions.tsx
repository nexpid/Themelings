// app/modules/guilds_bar/native/utils/getGuildsBarGuildAccessibilityActions.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function folderLabel(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var3 = var2.name;
            var1 = null;
            if(!(var1 != var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var2.name;
            var1 = '';
            if(!(var1 === var3)) { _fun0001_ip = 4; continue _fun0001 }
case 2:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 2;
            var3 = var7[var1];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var1 = var7[var1];
            var1 = var6.bind(var5)(var1);
            var1 = var1.t;
            var1 = var1.ebAnWE;
            var1 = var3.bind(var4)(var1);
            _fun0001_ip = 5; continue _fun0001;
case 4:
            var1 = var2.name;
case 5:
            return var1;
        }
    };
    var _closure1_slot5 = var1;
    var1 = function persistAndAnnounce(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var4 = arg1;
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 3;
            var3 = var3[var1];
            var1 = undefined;
            var6 = var5.bind(var1)(var3);
            var5 = var6.saveGuildFolders;
            var7 = _closure1_slot4;
            var3 = var7.getCompatibleGuildFolders;
            var3 = var3.bind(var7)();
            var3 = var5.bind(var6)(var3);
            var3 = null;
            if(!(var3 != var4)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 4;
            var2 = var5[var2];
            var2 = var3.bind(var1)(var2);
            var3 = var2.AccessibilityAnnouncer;
            var2 = var3.announce;
            var2 = var2.bind(var3)(var4);
case 6:
            return var1;
        }
    };
    var _closure1_slot6 = var1;
    var1 = function performMove(arg1, arg2, arg3, arg4, arg5) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var8 = arg1;
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 5;
            var3 = var3[var1];
            var1 = undefined;
            var3 = var4.bind(var1)(var3);
            var5 = var3.bind(var1)(var8);
            var4 = null;
            if(!(var4 != var5)) { _fun0003_ip = 8; continue _fun0003 }
case 9:
            var3 = arg2;
            var3 = var3.bind(var1)(var5);
            if(!(var4 != var3)) { _fun0003_ip = 8; continue _fun0003 }
case 10:
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var4 = 6;
            var4 = var6[var4];
            var7 = var5.bind(var1)(var4);
            var6 = var7.moveById;
            var11 = var3.id;
            var10 = arg3;
            var9 = arg4;
            var13 = var7;
            var12 = var8;
            var3 = var13[var6](var12, var11, var10, var9, var8);
            var3 = _closure1_slot6;
            var2 = arg5;
            var2 = var3.bind(var1)(var2);
case 8:
            return var1;
        }
    };
    var _closure1_slot7 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guilds_bar/native/utils/getGuildsBarGuildAccessibilityActions.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getGuildsBarGuildAccessibilityActions(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var6 = arg1;
            var _closure2_slot0 = var6;
            var1 = new Array(0);
            var3 = _closure1_slot3;
            var2 = var3.getGuild;
            var7 = var2.bind(var3)(var6);
            var2 = null;
            var8 = var2 == var7;
            var10 = undefined;
            var3 = undefined;
            if(var8) { _fun0004_ip = 11; continue _fun0004 }
case 12:
            var3 = var7.name;
case 11:
            var7 = var2 != var3;
            var14 = '';
            if(!var7) { _fun0004_ip = 13; continue _fun0004 }
case 14:
            var14 = var3;
case 13:
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var3 = 5;
            var3 = var8[var3];
            var3 = var7.bind(var10)(var3);
            var6 = var3.bind(var10)(var6);
            if(!(var2 != var6)) { _fun0004_ip = 15; continue _fun0004 }
case 16:
            var3 = var6.containingFolder;
            var7 = var6.above;
            var6 = var6.below;
            var9 = _closure1_slot0;
            var8 = _closure1_slot2;
            var11 = 2;
            var12 = var8[var11];
            var12 = var9.bind(var10)(var12);
            var16 = var12.intl;
            var15 = var16.formatToPlainString;
            var12 = var8[var11];
            var12 = var9.bind(var10)(var12);
            var12 = var12.t;
            var13 = var12["2XShGC"];
            var12 = {};
            var12['name'] = var14;
            var12 = var15.bind(var16)(var13, var12);
            var _closure2_slot1 = var12;
            var12 = var8[var11];
            var12 = var9.bind(var10)(var12);
            var13 = var12.intl;
            var12 = var13.formatToPlainString;
            var8 = var8[var11];
            var8 = var9.bind(var10)(var8);
            var8 = var8.t;
            var9 = var8.D4maKL;
            var8 = {};
            var8['name'] = var14;
            var8 = var12.bind(var13)(var9, var8);
            var _closure2_slot2 = var8;
            var8 = function guildAbove(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var2 = arg1;
                    var1 = var2.above;
                    var4 = null;
                    var3 = var4 == var1;
                    var1 = null;
                    if(var3) { _fun0005_ip = 11; continue _fun0005 }
case 17:
                    var3 = var2.above;
                    var3 = var3.isFolder;
                    var1 = null;
                    if(var3) { _fun0005_ip = 11; continue _fun0005 }
case 18:
                    var2 = var2.above;
                    var1 = var2.node;
case 11:
                    return var1;
                }
            };
            var _closure2_slot3 = var8;
            var8 = function guildBelow(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var2 = arg1;
                    var1 = var2.below;
                    var4 = null;
                    var3 = var4 == var1;
                    var1 = null;
                    if(var3) { _fun0006_ip = 11; continue _fun0006 }
case 17:
                    var3 = var2.below;
                    var3 = var3.isFolder;
                    var1 = null;
                    if(var3) { _fun0006_ip = 11; continue _fun0006 }
case 18:
                    var2 = var2.below;
                    var1 = var2.node;
case 11:
                    return var1;
                }
            };
            var _closure2_slot4 = var8;
            var8 = function folderAbove(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var2 = arg1;
                    var1 = var2.above;
                    var4 = null;
                    var3 = var4 != var1;
                    var1 = null;
                    if(!var3) { _fun0007_ip = 11; continue _fun0007 }
case 17:
                    var3 = var2.above;
                    var3 = var3.isFolder;
                    var1 = null;
                    if(!var3) { _fun0007_ip = 11; continue _fun0007 }
case 18:
                    var2 = var2.above;
                    var1 = var2.node;
case 11:
                    return var1;
                }
            };
            var _closure2_slot5 = var8;
            var8 = function folderBelow(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var2 = arg1;
                    var1 = var2.below;
                    var4 = null;
                    var3 = var4 != var1;
                    var1 = null;
                    if(!var3) { _fun0008_ip = 11; continue _fun0008 }
case 17:
                    var3 = var2.below;
                    var3 = var3.isFolder;
                    var1 = null;
                    if(!var3) { _fun0008_ip = 11; continue _fun0008 }
case 18:
                    var2 = var2.below;
                    var1 = var2.node;
case 11:
                    return var1;
                }
            };
            var _closure2_slot6 = var8;
            var8 = function currentFolder(arg1) {
                var1 = arg1;
                var1 = var1.containingFolder;
                return var1;
            };
            var _closure2_slot7 = var8;
            if(!(var2 == var3)) { _fun0004_ip = 19; continue _fun0004 }
case 20:
            var9 = var1.push;
            var8 = {};
            var12 = 'create-new-folder';
            var8['name'] = var12;
            var15 = _closure1_slot0;
            var12 = _closure1_slot2;
            var13 = var12[var11];
            var13 = var15.bind(var10)(var13);
            var14 = var13.intl;
            var13 = var14.string;
            var12 = var12[var11];
            var12 = var15.bind(var10)(var12);
            var12 = var12.t;
            var12 = var12.ehmVyX;
            var12 = var13.bind(var14)(var12);
            var8['label'] = var12;
            var12 = function action() {
                var4 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 6;
                var2 = var2[var1];
                var1 = undefined;
                var7 = var4.bind(var1)(var2);
                var6 = var7.createGuildFolderLocal;
                var4 = _closure2_slot0;
                var5 = new Array(1);
                var5[0] = var4;
                var4 = '';
                var4 = var6.bind(var7)(var5, var4);
                var3 = _closure1_slot6;
                var2 = _closure2_slot1;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var8['action'] = var12;
            var8 = var9.bind(var1)(var8);
case 19:
            if(!(var2 != var7)) { _fun0004_ip = 21; continue _fun0004 }
case 22:
            var8 = var7.isFolder;
            if(var8) { _fun0004_ip = 23; continue _fun0004 }
case 24:
            var9 = var1.push;
            var8 = {};
            var12 = 'move-up';
            var8['name'] = var12;
            var15 = _closure1_slot0;
            var12 = _closure1_slot2;
            var13 = var12[var11];
            var13 = var15.bind(var10)(var13);
            var14 = var13.intl;
            var13 = var14.string;
            var12 = var12[var11];
            var12 = var15.bind(var10)(var12);
            var12 = var12.t;
            var12 = var12.yiH+Tx;
            var12 = var13.bind(var14)(var12);
            var8['label'] = var12;
            var12 = function action() {
                var6 = _closure1_slot7;
                var11 = _closure2_slot0;
                var10 = _closure2_slot3;
                var1 = undefined;
                var7 = null;
                var12 = undefined;
                var9 = false;
                var8 = false;
                var2 = var12[var6](var11, var10, var9, var8, var7, var6);
                return var1;
            };
            var8['action'] = var12;
            var8 = var9.bind(var1)(var8);
            _fun0004_ip = 21; continue _fun0004;
case 23:
            var14 = var7.node;
            var7 = _closure1_slot5;
            var15 = var7.bind(var10)(var14);
            var8 = var1.push;
            var7 = {};
            var16 = var14.id;
            var13 = global;
            var9 = var13.HermesInternal;
            var12 = var9.concat;
            var9 = 'move-up-into-folder-';
            var9 = var12.bind(var9)(var16);
            var7['name'] = var9;
            var12 = _closure1_slot0;
            var9 = _closure1_slot2;
            var16 = var9[var11];
            var16 = var12.bind(var10)(var16);
            var19 = var16.intl;
            var18 = var19.formatToPlainString;
            var16 = var9[var11];
            var16 = var12.bind(var10)(var16);
            var16 = var16.t;
            var17 = var16["08U1Sa"];
            var16 = {};
            var16['folderName'] = var15;
            var16 = var18.bind(var19)(var17, var16);
            var7['label'] = var16;
            var16 = function action() {
                var6 = _closure1_slot7;
                var11 = _closure2_slot0;
                var10 = _closure2_slot5;
                var7 = _closure2_slot1;
                var1 = undefined;
                var12 = undefined;
                var9 = true;
                var8 = true;
                var2 = var12[var6](var11, var10, var9, var8, var7, var6);
                return var1;
            };
            var7['action'] = var16;
            var7 = var8.bind(var1)(var7);
            var8 = var1.push;
            var7 = {};
            var16 = var14.id;
            var13 = var13.HermesInternal;
            var14 = var13.concat;
            var13 = 'move-above-folder-';
            var13 = var14.bind(var13)(var16);
            var7['name'] = var13;
            var13 = var9[var11];
            var13 = var12.bind(var10)(var13);
            var14 = var13.intl;
            var13 = var14.formatToPlainString;
            var9 = var9[var11];
            var9 = var12.bind(var10)(var9);
            var9 = var9.t;
            var12 = var9.gBM0Vf;
            var9 = {};
            var9['folderName'] = var15;
            var9 = var13.bind(var14)(var12, var9);
            var7['label'] = var9;
            var9 = function action() {
                var6 = _closure1_slot7;
                var11 = _closure2_slot0;
                var10 = _closure2_slot5;
                var1 = undefined;
                var7 = null;
                var12 = undefined;
                var9 = false;
                var8 = false;
                var2 = var12[var6](var11, var10, var9, var8, var7, var6);
                return var1;
            };
            var7['action'] = var9;
            var7 = var8.bind(var1)(var7);
case 21:
            if(!(var2 != var6)) { _fun0004_ip = 25; continue _fun0004 }
case 26:
            var7 = var6.isFolder;
            if(var7) { _fun0004_ip = 27; continue _fun0004 }
case 28:
            var8 = var1.push;
            var7 = {};
            var9 = 'move-down';
            var7['name'] = var9;
            var14 = _closure1_slot0;
            var9 = _closure1_slot2;
            var12 = var9[var11];
            var12 = var14.bind(var10)(var12);
            var13 = var12.intl;
            var12 = var13.string;
            var9 = var9[var11];
            var9 = var14.bind(var10)(var9);
            var9 = var9.t;
            var9 = var9["+V6oLI"];
            var9 = var12.bind(var13)(var9);
            var7['label'] = var9;
            var9 = function action() {
                var7 = _closure1_slot7;
                var12 = _closure2_slot0;
                var11 = _closure2_slot4;
                var1 = undefined;
                var10 = true;
                var9 = false;
                var8 = null;
                var13 = undefined;
                var2 = var13[var7](var12, var11, var10, var9, var8, var7);
                return var1;
            };
            var7['action'] = var9;
            var7 = var8.bind(var1)(var7);
            _fun0004_ip = 25; continue _fun0004;
case 27:
            var13 = var6.node;
            var6 = _closure1_slot5;
            var14 = var6.bind(var10)(var13);
            var7 = var1.push;
            var6 = {};
            var15 = var13.id;
            var12 = global;
            var8 = var12.HermesInternal;
            var9 = var8.concat;
            var8 = 'move-down-into-folder-';
            var8 = var9.bind(var8)(var15);
            var6['name'] = var8;
            var9 = _closure1_slot0;
            var8 = _closure1_slot2;
            var15 = var8[var11];
            var15 = var9.bind(var10)(var15);
            var18 = var15.intl;
            var17 = var18.formatToPlainString;
            var15 = var8[var11];
            var15 = var9.bind(var10)(var15);
            var15 = var15.t;
            var16 = var15["6lLC/B"];
            var15 = {};
            var15['folderName'] = var14;
            var15 = var17.bind(var18)(var16, var15);
            var6['label'] = var15;
            var15 = function action() {
                var6 = _closure1_slot7;
                var11 = _closure2_slot0;
                var10 = _closure2_slot6;
                var7 = _closure2_slot1;
                var1 = undefined;
                var12 = undefined;
                var9 = true;
                var8 = true;
                var2 = var12[var6](var11, var10, var9, var8, var7, var6);
                return var1;
            };
            var6['action'] = var15;
            var6 = var7.bind(var1)(var6);
            var7 = var1.push;
            var6 = {};
            var15 = var13.id;
            var12 = var12.HermesInternal;
            var13 = var12.concat;
            var12 = 'move-below-folder-';
            var12 = var13.bind(var12)(var15);
            var6['name'] = var12;
            var12 = var8[var11];
            var12 = var9.bind(var10)(var12);
            var13 = var12.intl;
            var12 = var13.formatToPlainString;
            var8 = var8[var11];
            var8 = var9.bind(var10)(var8);
            var8 = var8.t;
            var9 = var8.YhxCkM;
            var8 = {};
            var8['folderName'] = var14;
            var8 = var12.bind(var13)(var9, var8);
            var6['label'] = var8;
            var8 = function action() {
                var7 = _closure1_slot7;
                var12 = _closure2_slot0;
                var11 = _closure2_slot6;
                var1 = undefined;
                var10 = true;
                var9 = false;
                var8 = null;
                var13 = undefined;
                var2 = var13[var7](var12, var11, var10, var9, var8, var7);
                return var1;
            };
            var6['action'] = var8;
            var6 = var7.bind(var1)(var6);
case 25:
            if(!(var2 != var3)) { _fun0004_ip = 29; continue _fun0004 }
case 30:
            var12 = var3.id;
            var2 = _closure1_slot5;
            var9 = var2.bind(var10)(var3);
            var3 = var1.push;
            var2 = {};
            var7 = global;
            var6 = var7.HermesInternal;
            var8 = var6.concat;
            var6 = 'move-out-above-';
            var6 = var8.bind(var6)(var12);
            var2['name'] = var6;
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var8 = var5[var11];
            var8 = var6.bind(var10)(var8);
            var15 = var8.intl;
            var14 = var15.formatToPlainString;
            var8 = var5[var11];
            var8 = var6.bind(var10)(var8);
            var8 = var8.t;
            var13 = var8.vnfRJG;
            var8 = {};
            var8['folderName'] = var9;
            var8 = var14.bind(var15)(var13, var8);
            var2['label'] = var8;
            var8 = function action() {
                var6 = _closure1_slot7;
                var11 = _closure2_slot0;
                var10 = _closure2_slot7;
                var7 = _closure2_slot2;
                var1 = undefined;
                var12 = undefined;
                var9 = false;
                var8 = false;
                var2 = var12[var6](var11, var10, var9, var8, var7, var6);
                return var1;
            };
            var2['action'] = var8;
            var2 = var3.bind(var1)(var2);
            var3 = var1.push;
            var2 = {};
            var7 = var7.HermesInternal;
            var8 = var7.concat;
            var7 = 'move-out-below-';
            var7 = var8.bind(var7)(var12);
            var2['name'] = var7;
            var7 = var5[var11];
            var7 = var6.bind(var10)(var7);
            var8 = var7.intl;
            var7 = var8.formatToPlainString;
            var5 = var5[var11];
            var5 = var6.bind(var10)(var5);
            var5 = var5.t;
            var6 = var5.ejhw4S;
            var5 = {};
            var5['folderName'] = var9;
            var5 = var7.bind(var8)(var6, var5);
            var2['label'] = var5;
            var4 = function action() {
                var7 = _closure1_slot7;
                var12 = _closure2_slot0;
                var11 = _closure2_slot7;
                var8 = _closure2_slot2;
                var1 = undefined;
                var10 = true;
                var9 = false;
                var13 = undefined;
                var2 = var13[var7](var12, var11, var10, var9, var8, var7);
                return var1;
            };
            var2['action'] = var4;
            var2 = var3.bind(var1)(var2);
case 29:
            return var1;
case 15:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();