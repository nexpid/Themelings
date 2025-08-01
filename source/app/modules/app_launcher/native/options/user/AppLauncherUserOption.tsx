// app/modules/app_launcher/native/options/user/AppLauncherUserOption.tsx
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
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 5;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.BG_MOD_SUBTLE;
    var9['backgroundColor'] = var10;
    var4['iconWrapper'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot7 = var4;
    var4 = 18;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/app_launcher/native/options/user/AppLauncherUserOption.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function AppLauncherUserOption(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var15 = var2.style;
            var12 = var2.option;
            var _closure2_slot0 = var12;
            var1 = var2.initialValue;
            var _closure2_slot1 = var1;
            var1 = var2.onUserPress;
            var _closure2_slot2 = var1;
            var1 = var2.onActionSheetDismiss;
            var _closure2_slot3 = var1;
            var1 = var2.channel;
            var _closure2_slot4 = var1;
            var5 = var2.autoFocus;
            var9 = var2.hasError;
            var2 = var2.onPress;
            var _closure2_slot5 = var2;
            var2 = _closure1_slot7;
            var4 = undefined;
            var14 = var2.bind(var4)();
            var11 = var1.guild_id;
            var2 = _closure1_slot0;
            var17 = _closure1_slot2;
            var1 = 6;
            var1 = var17[var1];
            var6 = var2.bind(var4)(var1);
            var3 = var6.useStateFromStores;
            var1 = _closure1_slot5;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var1 = _closure1_slot5;
                var1 = var1.useReducedMotion;
                return var1;
            };
            var16 = var3.bind(var6)(var2, var1);
            var19 = _closure1_slot4;
            var2 = var19.useState;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = _closure2_slot1;
                    var5 = null;
                    var3 = var5 != var1;
                    var1 = null;
                    if(!var3) { _fun0002_ip = 48; continue _fun0002 }
 18:
                    var3 = _closure2_slot1;
                    var4 = var3.type;
                    var3 = 'userMention';
                    var1 = null;
                    if(!(var3 === var4)) { _fun0002_ip = 48; continue _fun0002 }
 39:
                    var2 = _closure2_slot1;
                    var1 = var2.userId;
 48:
                    return var1;
                }
            };
            var1 = var2.bind(var19)(var1);
            var18 = _closure1_slot3;
            var10 = 2;
            var1 = var18.bind(var4)(var1, var10);
            var3 = 0;
            var13 = var1[var3];
            var2 = 1;
            var1 = var1[var2];
            var _closure2_slot6 = var1;
            var1 = var19.useState;
            var6 = null;
            var1 = var1.bind(var19)(var6);
            var1 = var18.bind(var4)(var1, var10);
            var10 = var1[var3];
            var1 = var1[var2];
            var _closure2_slot7 = var1;
            var3 = _closure1_slot6;
            var2 = _closure1_slot1;
            var1 = 7;
            var1 = var17[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['style'] = var15;
            var1['option'] = var12;
            var1['hasError'] = var9;
            var9 = var6 != var10;
            if(var9) { _fun0001_ip = 276; continue _fun0001 }
 272:
            var9 = var6 != var13;
 276:
            var1['selected'] = var9;
            var8 = function onPress() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var2 = _closure2_slot5;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0003_ip = 23; continue _fun0003 }
 13:
                    var2 = _closure2_slot5;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
 23:
                    var3 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var1 = 8;
                    var4 = var8[var1];
                    var1 = undefined;
                    var5 = var3.bind(var1)(var4);
                    var4 = var5.dismissGlobalKeyboard;
                    var4 = var4.bind(var5)();
                    var4 = _closure1_slot1;
                    var2 = 9;
                    var2 = var8[var2];
                    var6 = var4.bind(var1)(var2);
                    var5 = var6.openLazy;
                    var2 = 11;
                    var2 = var8[var2];
                    var9 = var3.bind(var1)(var2);
                    var2 = 10;
                    var4 = var8[var2];
                    var2 = var8.paths;
                    var4 = var9.bind(var1)(var4, var2);
                    var2 = 12;
                    var2 = var8[var2];
                    var2 = var3.bind(var1)(var2);
                    var3 = var2.APP_LAUNCHER_USER_LIST_ACTION_SHEET_KEY;
                    var2 = {};
                    var8 = _closure2_slot0;
                    var2['option'] = var8;
                    var8 = _closure2_slot4;
                    var2['channel'] = var8;
                    var8 = function onUserPress(arg1) {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                            var1 = arg1;
                            var1 = var1.user;
                            var3 = 'string';
                            var2 = typeof var1;
                            if(!(var3 !== var2)) { _fun0004_ip = 49; continue _fun0004 }
 19:
                            var5 = _closure2_slot6;
                            var4 = var1.id;
                            var3 = undefined;
                            var4 = var5.bind(var3)(var4);
                            var2 = _closure2_slot7;
                            var2 = var2.bind(var3)(var1);
                            _fun0004_ip = 63; continue _fun0004;
 49:
                            var3 = _closure2_slot6;
                            var2 = undefined;
                            var2 = var3.bind(var2)(var1);
 63:
                            var3 = _closure2_slot2;
                            var2 = {};
                            var2['user'] = var1;
                            var1 = undefined;
                            var2 = var3.bind(var1)(var2);
                            return var1;
                        }
                    };
                    var2['onUserPress'] = var8;
                    var7 = _closure2_slot3;
                    var2['onActionSheetDismiss'] = var7;
                    var2 = var5.bind(var6)(var4, var3, var2);
                    return var1;
                }
            };
            var1['onPress'] = var8;
            if(!(var6 == var10)) { _fun0001_ip = 387; continue _fun0001 }
 296:
            var12 = _closure1_slot6;
            var9 = _closure1_slot1;
            var18 = _closure1_slot2;
            var8 = 14;
            var8 = var18[var8];
            var9 = var9.bind(var4)(var8);
            var8 = {};
            var17 = _closure1_slot0;
            var15 = 15;
            var15 = var18[var15];
            var15 = var17.bind(var4)(var15);
            var17 = var15.UserCircleIcon;
            var15 = {'size': 'sm', 'color': 'interactive-normal'};
            var15 = var12.bind(var4)(var17, var15);
            var8['icon'] = var15;
            var14 = var14.iconWrapper;
            var8['wrapperStyle'] = var14;
            var8 = var12.bind(var4)(var9, var8);
            _fun0001_ip = 464; continue _fun0001;
 387:
            var14 = _closure1_slot6;
            var12 = _closure1_slot1;
            var17 = _closure1_slot2;
            var15 = 13;
            var9 = var17[var15];
            var12 = var12.bind(var4)(var9);
            var9 = {};
            var9['user'] = var10;
            var9['guildId'] = var11;
            var16 = !var16;
            var9['animate'] = var16;
            var16 = _closure1_slot0;
            var15 = var17[var15];
            var15 = var16.bind(var4)(var15);
            var15 = var15.AvatarSizes;
            var15 = var15.REFRESH_MEDIUM_32;
            var9['size'] = var15;
            var8 = var14.bind(var4)(var12, var9);
 464:
            var1['leading'] = var8;
            if(!(var6 == var10)) { _fun0001_ip = 537; continue _fun0001 }
 473:
            var8 = var6 != var13;
            var6 = null;
            if(!var8) { _fun0001_ip = 535; continue _fun0001 }
 482:
            var12 = _closure1_slot6;
            var9 = _closure1_slot0;
            var14 = _closure1_slot2;
            var8 = 17;
            var8 = var14[var8];
            var8 = var9.bind(var4)(var8);
            var9 = var8.Text;
            var8 = {'variant': 'text-md/medium', 'color': 'text-normal'};
            var8['children'] = var13;
            var6 = var12.bind(var4)(var9, var8);
 535:
            _fun0001_ip = 577; continue _fun0001;
 537:
            var9 = _closure1_slot6;
            var8 = _closure1_slot1;
            var12 = _closure1_slot2;
            var7 = 16;
            var7 = var12[var7];
            var8 = var8.bind(var4)(var7);
            var7 = {};
            var7['guildId'] = var11;
            var7['user'] = var10;
            var6 = var9.bind(var4)(var8, var7);
 577:
            var1['selectedItemName'] = var6;
            var1['autoFocus'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();