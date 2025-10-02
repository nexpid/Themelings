// app/modules/guilds_bar/native/GuildsBarFolderSettingsModal.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function GuildFolderSettingsScene(arg1) {
        var1 = arg1;
        var19 = var1.name;
        var18 = var1.onNameChange;
        var13 = var1.color;
        var12 = var1.onColorChange;
        var4 = _closure1_slot8;
        var16 = _closure1_slot0;
        var14 = _closure1_slot2;
        var6 = 6;
        var1 = var14[var6];
        var3 = undefined;
        var1 = var16.bind(var3)(var1);
        var2 = var1.Form;
        var1 = {};
        var8 = _closure1_slot7;
        var5 = var14[var6];
        var5 = var16.bind(var3)(var5);
        var7 = var5.FormSection;
        var5 = {};
        var10 = 7;
        var11 = var14[var10];
        var11 = var16.bind(var3)(var11);
        var17 = var11.intl;
        var15 = var17.string;
        var11 = var14[var10];
        var11 = var16.bind(var3)(var11);
        var11 = var11.t;
        var11 = var11.tGRbjI;
        var11 = var15.bind(var17)(var11);
        var5['title'] = var11;
        var17 = _closure1_slot7;
        var11 = var14[var6];
        var11 = var16.bind(var3)(var11);
        var15 = var11.FormInput;
        var11 = {'placeholder': null, 'value': null, 'onChange': null, 'showTopContainer': false, 'maxLength': 32, 'autoFocus': true};
        var20 = var14[var10];
        var20 = var16.bind(var3)(var20);
        var22 = var20.intl;
        var21 = var22.string;
        var20 = var14[var10];
        var20 = var16.bind(var3)(var20);
        var20 = var20.t;
        var20 = var20.xV9hVl;
        var20 = var21.bind(var22)(var20);
        var11['placeholder'] = var20;
        var11['value'] = var19;
        var11['onChange'] = var18;
        var18 = 8;
        var18 = var14[var18];
        var18 = var16.bind(var3)(var18);
        var18 = var18.ClearButtonVisibility;
        var18 = var18.WITH_CONTENT;
        var11['clearButtonVisibility'] = var18;
        var11 = var17.bind(var3)(var15, var11);
        var5['children'] = var11;
        var7 = var8.bind(var3)(var7, var5);
        var5 = new Array(2);
        var5[0] = var7;
        var8 = _closure1_slot7;
        var6 = var14[var6];
        var6 = var16.bind(var3)(var6);
        var7 = var6.FormSection;
        var6 = {};
        var11 = var14[var10];
        var11 = var16.bind(var3)(var11);
        var15 = var11.intl;
        var11 = var15.string;
        var10 = var14[var10];
        var10 = var16.bind(var3)(var10);
        var10 = var10.t;
        var10 = var10.xpurRE;
        var10 = var11.bind(var15)(var10);
        var6['title'] = var10;
        var11 = _closure1_slot7;
        var10 = _closure1_slot1;
        var9 = 9;
        var9 = var14[var9];
        var10 = var10.bind(var3)(var9);
        var9 = {};
        var9['color'] = var13;
        var9['onChange'] = var12;
        var9 = var11.bind(var3)(var10, var9);
        var6['children'] = var9;
        var6 = var8.bind(var3)(var7, var6);
        var5[1] = var6;
        var1['children'] = var5;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var _closure1_slot9 = var1;
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
    var8 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.DEFAULT_FOLDER_COLOR;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot7 = var7;
    var4 = var4.jsxs;
    var _closure1_slot8 = var4;
    var4 = 14;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guilds_bar/native/GuildsBarFolderSettingsModal.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GuildFolderSettingsModal(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var3 = var1.folderId;
            var _closure2_slot0 = var3;
            var4 = undefined;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var5 = 11;
            var5 = var7[var5];
            var9 = var6.bind(var4)(var5);
            var8 = var9.useStateFromStoresObject;
            var5 = _closure1_slot5;
            var7 = new Array(1);
            var7[0] = var5;
            var6 = new Array(1);
            var6[0] = var3;
            var5 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var4 = _closure1_slot5;
                    var3 = var4.getGuildFolderById;
                    var1 = _closure2_slot0;
                    var3 = var3.bind(var4)(var1);
                    var1 = {};
                    var5 = null;
                    var7 = var5 == var3;
                    var6 = undefined;
                    if(var7) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var6 = var3.folderName;
case 2:
                    var7 = var5 != var6;
                    var6 = '';
                    if(!var7) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var6 = var3.folderName;
case 4:
                    var1['initialFolderName'] = var6;
                    var6 = var5 == var3;
                    var4 = undefined;
                    if(var6) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var4 = var3.folderColor;
case 6:
                    if(!(var5 == var4)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var2 = _closure1_slot6;
                    _fun0002_ip = 10; continue _fun0002;
case 8:
                    var2 = var3.folderColor;
case 10:
                    var1['initialFolderColor'] = var2;
                    return var1;
                }
            };
            var5 = var8.bind(var9)(var7, var5, var6);
            var6 = var5.initialFolderName;
            var5 = var5.initialFolderColor;
            var13 = _closure1_slot4;
            var7 = var13.useState;
            var7 = var7.bind(var13)(var6);
            var12 = _closure1_slot3;
            var11 = 2;
            var7 = var12.bind(var4)(var7, var11);
            var9 = 0;
            var10 = var7[var9];
            var _closure2_slot1 = var10;
            var8 = 1;
            var7 = var7[var8];
            var _closure2_slot2 = var7;
            var7 = var13.useState;
            var7 = var7.bind(var13)(var5);
            var7 = var12.bind(var4)(var7, var11);
            var11 = var7[var9];
            var _closure2_slot3 = var11;
            var7 = var7[var8];
            var _closure2_slot4 = var7;
            var9 = var10 !== var6;
            if(var9) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var9 = var11 !== var5;
case 11:
            _closure2_slot5 = var9;
            var6 = _closure1_slot4;
            var7 = var6.useCallback;
            var5 = new Array(3);
            var5[0] = var3;
            var5[1] = var10;
            var5[2] = var11;
            var3 = function() {
                var5 = _closure2_slot0;
                var4 = _closure2_slot1;
                var3 = _closure2_slot3;
                var2 = function updateFolder(arg1, arg2, arg3) {
                    var1 = arg1;
                    var _closure4_slot0 = var1;
                    var1 = arg2;
                    var _closure4_slot1 = var1;
                    var1 = arg3;
                    var _closure4_slot2 = var1;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 5;
                    var3 = var3[var1];
                    var1 = undefined;
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.saveGuildFolders;
                    var6 = _closure1_slot5;
                    var5 = var6.getGuildFolders;
                    var6 = var5.bind(var6)();
                    var5 = var6.map;
                    var2 = function(arg1) {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                            var4 = arg1;
                            var5 = var4.folderId;
                            var2 = _closure4_slot0;
                            var1 = var4;
                            if(!(var5 === var2)) { _fun0003_ip = 13; continue _fun0003 }
case 14:
                            var2 = {};
                            var7 = var2;
                            var6 = var4;
                            var4 = copyDataProperties(var7, var6);
                            var5 = _closure4_slot1;
                            var4 = 'folderName';
                            var2[var4] = var5;
                            var4 = _closure4_slot2;
                            var3 = 'folderColor';
                            var2[var3] = var4;
                            var1 = var2;
case 13:
                            return var1;
                        }
                    };
                    var2 = var5.bind(var6)(var2);
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var1 = undefined;
                var2 = var2.bind(var1)(var5, var4, var3);
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 12;
                var2 = var4[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.hideGuildsBarFolderModal;
                var2 = var2.bind(var3)();
                return var1;
            };
            var8 = var7.bind(var6)(var3, var5);
            _closure2_slot6 = var8;
            var7 = var6.useCallback;
            var5 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 12;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.hideGuildsBarFolderModal;
                var2 = var2.bind(var3)();
                return var1;
            };
            var3 = new Array(0);
            var7 = var7.bind(var6)(var5, var3);
            _closure2_slot7 = var7;
            var5 = var6.useMemo;
            var3 = new Array(5);
            var3[0] = var11;
            var3[1] = var10;
            var3[2] = var9;
            var3[3] = var8;
            var3[4] = var7;
            var2 = function() {
                var6 = {};
                var3 = _closure2_slot1;
                var6['name'] = var3;
                var3 = function onNameChange(arg1) {
                    var3 = _closure2_slot2;
                    var2 = undefined;
                    var1 = arg1;
                    var1 = var3.bind(var2)(var1);
                    return var1;
                };
                var6['onNameChange'] = var3;
                var3 = _closure2_slot3;
                var6['color'] = var3;
                var3 = function onColorChange(arg1) {
                    var3 = _closure2_slot4;
                    var2 = undefined;
                    var1 = arg1;
                    var1 = var3.bind(var2)(var1);
                    return var1;
                };
                var6['onColorChange'] = var3;
                var9 = _closure2_slot5;
                var8 = _closure2_slot6;
                var7 = _closure2_slot7;
                var2 = function getScreens(arg1, arg2, arg3, arg4) {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        var1 = arg1;
                        var _closure4_slot0 = var1;
                        var1 = {};
                        var3 = {};
                        var4 = function render() {
                            var4 = _closure1_slot7;
                            var3 = _closure1_slot9;
                            var2 = {};
                            var5 = _closure4_slot0;
                            var6 = var2;
                            var1 = copyDataProperties(var6, var5);
                            var1 = undefined;
                            var1 = var4.bind(var1)(var3, var2);
                            return var1;
                        };
                        var3['render'] = var4;
                        var7 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var11 = 7;
                        var5 = var6[var11];
                        var10 = undefined;
                        var5 = var7.bind(var10)(var5);
                        var9 = var5.intl;
                        var8 = var9.string;
                        var5 = var6[var11];
                        var5 = var7.bind(var10)(var5);
                        var5 = var5.t;
                        var5 = var5.Dx7im5;
                        var5 = var8.bind(var9)(var5);
                        var3['title'] = var5;
                        var5 = 10;
                        var6 = var6[var5];
                        var8 = var7.bind(var10)(var6);
                        var7 = var8.getHeaderCloseButton;
                        var6 = arg4;
                        var6 = var7.bind(var8)(var6);
                        var3['headerLeft'] = var6;
                        var6 = arg2;
                        if(var6) { _fun0004_ip = 15; continue _fun0004 }
case 16:
                        var2 = function() {
                            var1 = null;
                            return var1;
                        };
                        _fun0004_ip = 17; continue _fun0004;
case 15:
                        var9 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var5 = var4[var5];
                        var7 = var9.bind(var10)(var5);
                        var6 = var7.getHeaderTextButton;
                        var5 = var4[var11];
                        var5 = var9.bind(var10)(var5);
                        var8 = var5.intl;
                        var5 = var8.string;
                        var4 = var4[var11];
                        var4 = var9.bind(var10)(var4);
                        var4 = var4.t;
                        var4 = var4.R3BPHx;
                        var5 = var5.bind(var8)(var4);
                        var4 = arg3;
                        var2 = var6.bind(var7)(var5, var4);
case 17:
                        var3['headerRight'] = var2;
                        var2 = 'Folder Settings';
                        var1[var2] = var3;
                        return var1;
                    }
                };
                var11 = undefined;
                var10 = var6;
                var1 = var11[var2](var10, var9, var8, var7, var6);
                return var1;
            };
            var5 = var5.bind(var6)(var2, var3);
            var3 = _closure1_slot7;
            var2 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 13;
            var1 = var6[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.Navigator;
            var1 = {};
            var1['screens'] = var5;
            var5 = 'Folder Settings';
            var1['initialRouteName'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();