// app/modules/guild_settings/native/GuildSettingsModalStickers/GuildSettingsModalStickerInfoActionSheet.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var7 = var6[var4];
    var4 = metroImportAll;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot5 = var7;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var9 = var4.ActivityIndicator;
    var _closure1_slot6 = var9;
    var4 = var4.View;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot9 = var8;
    var4 = var4.jsxs;
    var _closure1_slot10 = var4;
    var4 = var7.memo;
    var2 = function GuildSettingsModalStickerInfoActionSheet(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var2 = var1.guildId;
            var _closure2_slot0 = var2;
            var2 = var1.stickerId;
            var _closure2_slot1 = var2;
            var1 = var1.hideActionSheet;
            var _closure2_slot2 = var1;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 6;
            var2 = var4[var2];
            var5 = undefined;
            var6 = var3.bind(var5)(var2);
            var4 = var6.useStateFromStores;
            var2 = _closure1_slot8;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure1_slot8;
                    var2 = var3.getStickersByGuildId;
                    var1 = _closure2_slot0;
                    var4 = var2.bind(var3)(var1);
                    var1 = null;
                    var2 = var1 == var4;
                    var1 = undefined;
                    if(var2) { _fun0002_ip = 56; continue _fun0002 }
 36:
                    var3 = var4.find;
                    var2 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.id;
                        var1 = _closure2_slot1;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var1 = var3.bind(var4)(var2);
 56:
                    return var1;
                }
            };
            var8 = var4.bind(var6)(var3, var2);
            var _closure2_slot3 = var8;
            var4 = _closure1_slot5;
            var3 = var4.useState;
            var2 = false;
            var6 = var3.bind(var4)(var2);
            var3 = _closure1_slot4;
            var2 = 2;
            var3 = var3.bind(var5)(var6, var2);
            var2 = 0;
            var15 = var3[var2];
            var2 = 1;
            var2 = var3[var2];
            var _closure2_slot4 = var2;
            var2 = function() {
                var4 = _closure1_slot3;
                var3 = undefined;
                var2 = function* () {
                    var1 = function* anon_0_() {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0003_ip = 270; continue _fun0003 }
 10:
                            var4 = _closure2_slot3;
                            var2 = null;
                            if(!(var2 != var4)) { _fun0003_ip = 250; continue _fun0003 }
 26:
                            var4 = _closure2_slot4;
                            var5 = undefined;
                            var2 = true;
                            var2 = var4.bind(var5)(var2);
 39: // try_start_0 // try_start_1
                            var4 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var2 = 7;
                            var2 = var6[var2];
                            var6 = var4.bind(var5)(var2);
                            var4 = var6.deleteGuildSticker;
                            var2 = _closure2_slot3;
                            var2 = var4.bind(var6)(var2);
                            SaveGenerator(address=81);
 79:
                            return var2;
 81:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                            if(var4) { _fun0003_ip = 100; continue _fun0003 }
 87:
                            var4 = _closure2_slot2;
                            var4 = var4.bind(var5)();
 95: // try_end0
                            _fun0003_ip = 239; continue _fun0003;
 100: // try_end1
                            var6 = _closure2_slot4;
                            var4 = false;
                            var4 = var6.bind(var5)(var4);
                            return var2;
 114: // try_start_2 // catch_target0
                            CatchBlockStart(arg_register=1);
                            var4 = _closure1_slot1;
                            var11 = _closure1_slot2;
                            var2 = 8;
                            var2 = var11[var2];
                            var6 = var4.bind(var5)(var2);
                            var4 = var6.open;
                            var2 = {};
                            var8 = 'IMAGE_PICKER_ERROR';
                            var2['key'] = var8;
                            var10 = _closure1_slot0;
                            var7 = 9;
                            var7 = var11[var7];
                            var7 = var10.bind(var5)(var7);
                            var7 = var7.CircleErrorIcon;
                            var2['IconComponent'] = var7;
                            var7 = 10;
                            var8 = var11[var7];
                            var8 = var10.bind(var5)(var8);
                            var9 = var8.intl;
                            var8 = var9.string;
                            var7 = var11[var7];
                            var7 = var10.bind(var5)(var7);
                            var7 = var7.t;
                            var7 = var7.5NMPSU;
                            var7 = var8.bind(var9)(var7);
                            var2['content'] = var7;
                            var2 = var4.bind(var6)(var2);
 239: // try_end2
                            var4 = _closure2_slot4;
                            var2 = false;
                            var2 = var4.bind(var5)(var2);
 250:
                            var2 = undefined;
                            return var2;
 255: // catch_target1 // catch_target2
                            CatchBlockStart(arg_register=1);
                            var4 = _closure2_slot4;
                            var3 = false;
                            var3 = var4.bind(var5)(var3);
                            throw var2;
 270:
                            return var1;
                        }
                    };
                    return var1;
                };
                var2 = var4.bind(var3)(var2);
                var _closure3_slot0 = var2;
                var1 = function() {
                    var1 = undefined;
                    var4 = _closure3_slot0;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                return var1;
            };
            var14 = var2.bind(var5)();
            var3 = var4.useEffect;
            var2 = new Array(2);
            var2[0] = var1;
            var2[1] = var8;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var3 = _closure2_slot3;
                    var2 = null;
                    if(!(var2 == var3)) { _fun0004_ip = 23; continue _fun0004 }
 13:
                    var2 = _closure2_slot2;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
 23:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var1, var2);
            var17 = null;
            var2 = var17 == var8;
            var1 = null;
            if(var2) { _fun0001_ip = 687; continue _fun0001 }
 194:
            var4 = _closure1_slot9;
            var19 = _closure1_slot0;
            var21 = _closure1_slot2;
            var2 = 11;
            var2 = var21[var2];
            var2 = var19.bind(var5)(var2);
            var3 = var2.BottomSheet;
            var2 = {};
            var6 = 12;
            var6 = var21[var6];
            var6 = var19.bind(var5)(var6);
            var7 = var6.BottomSheetTitleHeader;
            var6 = {};
            var9 = var8.name;
            var6['title'] = var9;
            var8 = var8.description;
            var6['subtitle'] = var8;
            var6 = var4.bind(var5)(var7, var6);
            var2['header'] = var6;
            var7 = _closure1_slot7;
            var6 = {};
            var8 = {};
            var10 = _closure1_slot1;
            var9 = 13;
            var11 = var21[var9];
            var11 = var10.bind(var5)(var11);
            var11 = var11.spacing;
            var11 = var11.PX_12;
            var8['paddingHorizontal'] = var11;
            var9 = var21[var9];
            var9 = var10.bind(var5)(var9);
            var9 = var9.spacing;
            var9 = var9.PX_16;
            var8['paddingBottom'] = var9;
            var6['style'] = var8;
            var10 = _closure1_slot10;
            var8 = 14;
            var8 = var21[var8];
            var8 = var19.bind(var5)(var8);
            var9 = var8.TableRowGroup;
            var8 = {};
            var12 = 15;
            var11 = var21[var12];
            var11 = var19.bind(var5)(var11);
            var13 = var11.TableRow;
            var11 = {};
            var20 = 16;
            var20 = var21[var20];
            var20 = var19.bind(var5)(var20);
            var22 = var20.PencilIcon;
            var20 = {};
            var20 = var4.bind(var5)(var22, var20);
            var11['icon'] = var20;
            var20 = 10;
            var22 = var21[var20];
            var22 = var19.bind(var5)(var22);
            var24 = var22.intl;
            var23 = var24.string;
            var22 = var21[var20];
            var22 = var19.bind(var5)(var22);
            var22 = var22.t;
            var22 = var22.tdhW5e;
            var22 = var23.bind(var24)(var22);
            var11['label'] = var22;
            var18 = function onPress() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 17;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = {};
                var5 = _closure2_slot0;
                var2['guildId'] = var5;
                var4 = _closure2_slot1;
                var2['stickerId'] = var4;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var11['onPress'] = var18;
            var13 = var4.bind(var5)(var13, var11);
            var11 = new Array(2);
            var11[0] = var13;
            var12 = var21[var12];
            var12 = var19.bind(var5)(var12);
            var13 = var12.TableRow;
            var12 = {};
            var18 = 18;
            var18 = var21[var18];
            var18 = var19.bind(var5)(var18);
            var19 = var18.TrashIcon;
            var18 = {};
            var21 = 'text-danger';
            var18['color'] = var21;
            var18 = var4.bind(var5)(var19, var18);
            var12['icon'] = var18;
            var17 = null;
            if(!var15) { _fun0001_ip = 570; continue _fun0001 }
 554:
            var21 = _closure1_slot9;
            var19 = _closure1_slot6;
            var18 = {};
            var17 = var21.bind(var5)(var19, var18);
 570:
            var12['trailing'] = var17;
            var19 = _closure1_slot0;
            var16 = _closure1_slot2;
            var17 = var16[var20];
            var17 = var19.bind(var5)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var16 = var16[var20];
            var16 = var19.bind(var5)(var16);
            var16 = var16.t;
            var16 = var16.+ZhGOj;
            var16 = var17.bind(var18)(var16);
            var12['label'] = var16;
            var16 = 'danger';
            var12['variant'] = var16;
            var12['disabled'] = var15;
            var12['onPress'] = var14;
            var12 = var4.bind(var5)(var13, var12);
            var11[1] = var12;
            var8['children'] = var11;
            var8 = var10.bind(var5)(var9, var8);
            var6['children'] = var8;
            var6 = var4.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 687:
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 19;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_settings/native/GuildSettingsModalStickers/GuildSettingsModalStickerInfoActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();