// app/modules/guild_settings/native/GuildSettingsModalEmoji/HeaderRow.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
        var5 = require;
        var7 = metroImportDefault;
        var3 = exports;
        var6 = dependencyMap;
        var _closure1_slot0 = var5;
        var _closure1_slot1 = var7;
        var _closure1_slot2 = var6;
        var1 = function HeaderRow(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var1 = arg1;
                var21 = var1.isUploading;
                var8 = var1.guild;
                var _closure2_slot0 = var8;
                var2 = var1.emojisLength;
                var _closure2_slot1 = var2;
                var22 = var1.description;
                var2 = var1.onSelectRolesForEmoji;
                var _closure2_slot2 = var2;
                var15 = var1.uploadDisabled;
                var4 = undefined;
                if(!(var15 === var4)) { _fun0002_ip = 59; continue _fun0002 }
 57:
                var15 = false;
 59:
                var _closure2_slot3 = var4;
                var _closure2_slot4 = var4;
                var _closure2_slot5 = var4;
                var _closure2_slot6 = var4;
                var _closure2_slot7 = var4;
                var1 = _closure1_slot15;
                var18 = var1.bind(var4)();
                _closure2_slot3 = var18;
                var3 = _closure1_slot5;
                var2 = var3.useState;
                var1 = false;
                var2 = var2.bind(var3)(var1);
                var1 = _closure1_slot4;
                var3 = 2;
                var1 = var1.bind(var4)(var2, var3);
                var2 = 0;
                var20 = var1[var2];
                var7 = 1;
                var1 = var1[var7];
                _closure2_slot4 = var1;
                var5 = _closure1_slot5;
                var1 = var5.useState;
                var9 = null;
                var5 = var1.bind(var5)(var9);
                var1 = _closure1_slot4;
                var1 = var1.bind(var4)(var5, var3);
                var14 = var1[var2];
                var1 = var1[var7];
                _closure2_slot5 = var1;
                var6 = _closure1_slot5;
                var5 = var6.useState;
                var1 = '';
                var5 = var5.bind(var6)(var1);
                var1 = _closure1_slot4;
                var1 = var1.bind(var4)(var5, var3);
                var2 = var1[var2];
                _closure2_slot6 = var2;
                var1 = var1[var7];
                _closure2_slot7 = var1;
                var2 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 10;
                var1 = var5[var1];
                var6 = var2.bind(var4)(var1);
                var1 = var6.useManageResourcePermissions;
                var1 = var1.bind(var6)(var8);
                var10 = var1.canCreateExpressions;
                var1 = function() {
                    var4 = _closure1_slot3;
                    var3 = undefined;
                    var2 = function* () {
                        var1 = function* anon_0_() {
                            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(var2) { _fun0003_ip = 442; continue _fun0003 }
 12:
                                var5 = undefined;
                                var8 = undefined;
                                var _closure5_slot0 = var5;
                                var4 = _closure2_slot4;
                                var2 = true;
                                var2 = var4.bind(var5)(var2);
                                var2 = _closure2_slot5;
                                var9 = null;
                                var2 = var2.bind(var5)(var9);
                                var4 = _closure2_slot7;
                                var10 = _closure1_slot0;
                                var11 = _closure1_slot2;
                                var2 = 14;
                                var2 = var11[var2];
                                var10 = var10.bind(var5)(var2);
                                var2 = var10.v4;
                                var2 = var2.bind(var10)();
                                var2 = var4.bind(var5)(var2);
 87: // try_start_0
                                var4 = _closure1_slot1;
                                var10 = _closure1_slot2;
                                var2 = 12;
                                var2 = var10[var2];
                                var13 = var4.bind(var5)(var2);
                                var12 = var13.track;
                                var2 = _closure1_slot10;
                                var11 = var2.EMOJI_UPLOAD_STARTED;
                                var2 = {};
                                var14 = _closure2_slot0;
                                var14 = var14.id;
                                var2['guild_id'] = var14;
                                var14 = _closure2_slot6;
                                var2['upload_id'] = var14;
                                var2 = var12.bind(var13)(var11, var2);
                                var2 = 15;
                                var2 = var10[var2];
                                var10 = var4.bind(var5)(var2);
                                var4 = var10.openImagePicker;
                                var2 = {};
                                var11 = _closure1_slot11;
                                var2['size'] = var11;
                                var2 = var4.bind(var10)(var2);
                                SaveGenerator(address=189);
 187:
                                return var2;
 189:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                                if(var4) { _fun0003_ip = 413; continue _fun0003 }
 198:
                                var4 = var2.base64;
                                var8 = var4;
                                if(!(var9 != var4)) { _fun0003_ip = 385; continue _fun0003 }
 214:
                                var4 = _closure2_slot2;
                                var9 = var9 == var4;
                                var4 = undefined;
                                if(var9) { _fun0003_ip = 235; continue _fun0003 }
 227:
                                var9 = _closure2_slot2;
                                var4 = var9.bind(var5)();
 235:
                                SaveGenerator(address=239);
 237:
                                return var4;
 239:
                                ResumeGenerator(result_out_reg=3, return_bool_out_reg=8);
                                if(var9) { _fun0003_ip = 399; continue _fun0003 }
 248:
                                var10 = var8;
                                _closure5_slot0 = var10;
                                var8 = _closure1_slot0;
                                var9 = _closure1_slot2;
                                var7 = 11;
                                var7 = var9[var7];
                                var9 = var8.bind(var5)(var7);
                                var8 = var9.uploadEmoji;
                                var7 = {};
                                var11 = _closure2_slot0;
                                var11 = var11.id;
                                var7['guildId'] = var11;
                                var7['image'] = var10;
                                var11 = _closure2_slot1;
                                var10 = 1;
                                var12 = var11 + var10;
                                var10 = global;
                                var10 = var10.HermesInternal;
                                var11 = var10.concat;
                                var10 = 'emoji_';
                                var10 = var11.bind(var10)(var12);
                                var7['name'] = var10;
                                var7['roles'] = var4;
                                var9 = var8.bind(var9)(var7);
                                var8 = var9.then;
                                var7 = function() {
                                    var4 = _closure1_slot1;
                                    var3 = _closure1_slot2;
                                    var2 = 12;
                                    var3 = var3[var2];
                                    var2 = undefined;
                                    var4 = var4.bind(var2)(var3);
                                    var3 = var4.track;
                                    var1 = _closure1_slot10;
                                    var2 = var1.EMOJI_UPLOAD_COMPLETED;
                                    var1 = {};
                                    var6 = _closure2_slot0;
                                    var6 = var6.id;
                                    var1['guild_id'] = var6;
                                    var5 = _closure2_slot6;
                                    var1['upload_id'] = var5;
                                    var1 = var3.bind(var4)(var2, var1);
                                    return var1;
                                };
                                var8 = var8.bind(var9)(var7);
                                var7 = var8.catch;
                                var6 = function(arg1) {
                                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                                        var1 = arg1;
                                        var4 = var1.body;
                                        var2 = null;
                                        var5 = var2 != var4;
                                        var1 = undefined;
                                        var3 = undefined;
                                        if(!var5) { _fun0004_ip = 374; continue _fun0004 }
 24:
                                        var7 = var4.code;
                                        var6 = _closure1_slot9;
                                        var6 = var6.TOO_MANY_EMOJI;
                                        if(!(var7 !== var6)) { _fun0004_ip = 314; continue _fun0004 }
 49:
                                        var7 = var4.code;
                                        var6 = _closure1_slot9;
                                        var6 = var6.TOO_MANY_ANIMATED_EMOJI;
                                        if(!(var7 !== var6)) { _fun0004_ip = 255; continue _fun0004 }
 71:
                                        var4 = var4.image;
                                        var6 = var2 != var4;
                                        var4 = undefined;
                                        if(!var6) { _fun0004_ip = 253; continue _fun0004 }
 89:
                                        var7 = _closure1_slot1;
                                        var10 = _closure1_slot2;
                                        var6 = 12;
                                        var6 = var10[var6];
                                        var9 = var7.bind(var1)(var6);
                                        var8 = var9.track;
                                        var6 = _closure1_slot10;
                                        var7 = var6.EMOJI_UPLOAD_FILE_SIZE_LIMIT_EXCEEDED;
                                        var6 = {};
                                        var12 = _closure2_slot0;
                                        var12 = var12.id;
                                        var6['guild_id'] = var12;
                                        var12 = global;
                                        var14 = var12.Buffer;
                                        var13 = var14.byteLength;
                                        var12 = _closure5_slot0;
                                        var12 = var13.bind(var14)(var12);
                                        var6['file_size'] = var12;
                                        var11 = _closure2_slot6;
                                        var6['upload_id'] = var11;
                                        var6 = var8.bind(var9)(var7, var6);
                                        var7 = _closure1_slot0;
                                        var6 = 13;
                                        var8 = var10[var6];
                                        var8 = var7.bind(var1)(var8);
                                        var9 = var8.intl;
                                        var8 = var9.formatToPlainString;
                                        var6 = var10[var6];
                                        var6 = var7.bind(var1)(var6);
                                        var6 = var6.t;
                                        var7 = var6.kIO9j4;
                                        var6 = {};
                                        var10 = _closure1_slot12;
                                        var6['maxSize'] = var10;
                                        var4 = var8.bind(var9)(var7, var6);
 253:
                                        _fun0004_ip = 312; continue _fun0004;
 255:
                                        var9 = _closure1_slot0;
                                        var10 = _closure1_slot2;
                                        var6 = 13;
                                        var7 = var10[var6];
                                        var7 = var9.bind(var1)(var7);
                                        var8 = var7.intl;
                                        var7 = var8.string;
                                        var6 = var10[var6];
                                        var6 = var9.bind(var1)(var6);
                                        var6 = var6.t;
                                        var6 = var6.6v5dPz;
                                        var4 = var7.bind(var8)(var6);
 312:
                                        _fun0004_ip = 371; continue _fun0004;
 314:
                                        var8 = _closure1_slot0;
                                        var9 = _closure1_slot2;
                                        var5 = 13;
                                        var6 = var9[var5];
                                        var6 = var8.bind(var1)(var6);
                                        var7 = var6.intl;
                                        var6 = var7.string;
                                        var5 = var9[var5];
                                        var5 = var8.bind(var1)(var5);
                                        var5 = var5.t;
                                        var5 = var5.jP/Rqq;
                                        var4 = var6.bind(var7)(var5);
 371:
                                        var3 = var4;
 374:
                                        if(!(var2 != var3)) { _fun0004_ip = 390; continue _fun0004 }
 378:
                                        var2 = _closure2_slot5;
                                        var2 = var2.bind(var1)(var3);
 390:
                                        return var1;
                                    }
                                };
                                var6 = var7.bind(var8)(var6);
 385: // try_end0
                                var7 = _closure2_slot4;
                                var6 = false;
                                var6 = var7.bind(var5)(var6);
                                return var5;
 399:
                                var7 = _closure2_slot4;
                                var6 = false;
                                var6 = var7.bind(var5)(var6);
                                return var4;
 413:
                                var6 = _closure2_slot4;
                                var4 = false;
                                var4 = var6.bind(var5)(var4);
                                return var2;
 427: // catch_target0
                                CatchBlockStart(arg_register=1);
                                var4 = _closure2_slot4;
                                var3 = false;
                                var3 = var4.bind(var5)(var3);
                                throw var2;
 442:
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
                var19 = var1.bind(var4)();
                var6 = function createUploadInstructionsListItem(arg1, arg2) {
                    var1 = {};
                    var2 = global;
                    var2 = var2.HermesInternal;
                    var4 = var2.concat;
                    var3 = 'GUILD_SETTINGS_EMOJI_UPLOAD_REQUIREMENTS_';
                    var2 = arg2;
                    var2 = var4.bind(var3)(var2);
                    var1['id'] = var2;
                    var2 = arg1;
                    var1['text'] = var2;
                    return var1;
                };
                var24 = 13;
                var1 = var5[var24];
                var1 = var2.bind(var4)(var1);
                var11 = var1.intl;
                var8 = var11.string;
                var1 = var5[var24];
                var1 = var2.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.N2qTQ0;
                var1 = var8.bind(var11)(var1);
                var1 = var6.bind(var4)(var1, var7);
                var17 = new Array(4);
                var17[0] = var1;
                var1 = var5[var24];
                var1 = var2.bind(var4)(var1);
                var11 = var1.intl;
                var8 = var11.formatToPlainString;
                var1 = var5[var24];
                var1 = var2.bind(var4)(var1);
                var1 = var1.t;
                var7 = var1.gfAXoa;
                var1 = {};
                var12 = _closure1_slot12;
                var1['maxSize'] = var12;
                var1 = var8.bind(var11)(var7, var1);
                var1 = var6.bind(var4)(var1, var3);
                var17[1] = var1;
                var1 = var5[var24];
                var1 = var2.bind(var4)(var1);
                var7 = var1.intl;
                var3 = var7.string;
                var1 = var5[var24];
                var1 = var2.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.rnwKPD;
                var3 = var3.bind(var7)(var1);
                var1 = 3;
                var1 = var6.bind(var4)(var3, var1);
                var17[2] = var1;
                var1 = var5[var24];
                var1 = var2.bind(var4)(var1);
                var7 = var1.intl;
                var3 = var7.string;
                var1 = var5[var24];
                var1 = var2.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.8Vr5QU;
                var3 = var3.bind(var7)(var1);
                var1 = 4;
                var1 = var6.bind(var4)(var3, var1);
                var17[3] = var1;
                var3 = _closure1_slot13;
                var1 = 16;
                var1 = var5[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.RedesignCompat;
                var1 = {};
                var7 = _closure1_slot14;
                var6 = _closure1_slot6;
                var5 = {};
                var8 = var18.headerContainer;
                var5['style'] = var8;
                if(!var10) { _fun0002_ip = 710; continue _fun0002 }
 576:
                var12 = _closure1_slot13;
                var25 = _closure1_slot1;
                var26 = _closure1_slot2;
                var23 = 17;
                var8 = var26[var23];
                var11 = var25.bind(var4)(var8);
                var8 = {};
                var23 = var26[var23];
                var23 = var25.bind(var4)(var23);
                var23 = var23.Sizes;
                var23 = var23.SMALL;
                var8['size'] = var23;
                if(var20) { _fun0002_ip = 633; continue _fun0002 }
 630:
                var20 = var21;
 633:
                var8['loading'] = var20;
                var8['onPress'] = var19;
                var23 = _closure1_slot0;
                var19 = _closure1_slot2;
                var20 = var19[var24];
                var20 = var23.bind(var4)(var20);
                var21 = var20.intl;
                var20 = var21.string;
                var19 = var19[var24];
                var19 = var23.bind(var4)(var19);
                var19 = var19.t;
                var19 = var19.DU0dy8;
                var19 = var20.bind(var21)(var19);
                var8['text'] = var19;
                var8['disabled'] = var15;
                var10 = var12.bind(var4)(var11, var8);
 710:
                var8 = new Array(3);
                var8[0] = var10;
                var9 = var9 != var14;
                if(!var9) { _fun0002_ip = 790; continue _fun0002 }
 725:
                var12 = _closure1_slot13;
                var11 = _closure1_slot0;
                var15 = _closure1_slot2;
                var10 = 18;
                var10 = var15[var10];
                var10 = var11.bind(var4)(var10);
                var11 = var10.Text;
                var10 = {'style': null, 'variant': 'text-sm/medium', 'color': 'text-danger'};
                var15 = var18.errorText;
                var10['style'] = var15;
                var10['children'] = var14;
                var9 = var12.bind(var4)(var11, var10);
 790:
                var8[1] = var9;
                var11 = _closure1_slot14;
                var10 = _closure1_slot6;
                var9 = {};
                var12 = var18.uploadInstructionsContainer;
                var9['style'] = var12;
                var19 = _closure1_slot13;
                var23 = _closure1_slot0;
                var20 = _closure1_slot2;
                var14 = 19;
                var12 = var20[var14];
                var12 = var23.bind(var4)(var12);
                var15 = var12.FormHint;
                var12 = {};
                var21 = true;
                var12['inset'] = var21;
                var12['children'] = var22;
                var15 = var19.bind(var4)(var15, var12);
                var12 = new Array(3);
                var12[0] = var15;
                var19 = _closure1_slot13;
                var14 = var20[var14];
                var14 = var23.bind(var4)(var14);
                var15 = var14.FormTitle;
                var14 = {};
                var14['thinTitle'] = var21;
                var21 = var18.uploadInstructionsHeading;
                var14['viewStyle'] = var21;
                var21 = var20[var24];
                var21 = var23.bind(var4)(var21);
                var22 = var21.intl;
                var21 = var22.string;
                var20 = var20[var24];
                var20 = var23.bind(var4)(var20);
                var20 = var20.t;
                var20 = var20.jrXfy8;
                var20 = var21.bind(var22)(var20);
                var14['title'] = var20;
                var14 = var19.bind(var4)(var15, var14);
                var12[1] = var14;
                var15 = _closure1_slot13;
                var14 = _closure1_slot7;
                var13 = {};
                var18 = var18.uploadInstructionsList;
                var13['style'] = var18;
                var13['data'] = var17;
                var17 = function keyExtractor(arg1) {
                    var1 = arg1;
                    var1 = var1.id;
                    return var1;
                };
                var13['keyExtractor'] = var17;
                var16 = function renderItem(arg1) {
                    var1 = arg1;
                    var9 = var1.item;
                    var4 = _closure1_slot14;
                    var3 = _closure1_slot6;
                    var2 = {};
                    var1 = _closure2_slot3;
                    var1 = var1.uploadListItem;
                    var2['style'] = var1;
                    var13 = _closure1_slot13;
                    var7 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var6 = 18;
                    var5 = var11[var6];
                    var1 = undefined;
                    var5 = var7.bind(var1)(var5);
                    var12 = var5.Text;
                    var5 = {'style': null, 'variant': 'text-xs/medium', 'color': 'text-muted', 'children': '•'};
                    var14 = _closure2_slot3;
                    var14 = var14.uploadListItemText;
                    var5['style'] = var14;
                    var12 = var13.bind(var1)(var12, var5);
                    var5 = new Array(2);
                    var5[0] = var12;
                    var8 = _closure1_slot13;
                    var6 = var11[var6];
                    var6 = var7.bind(var1)(var6);
                    var7 = var6.Text;
                    var6 = {'style': null, 'variant': 'text-xs/medium', 'color': 'text-muted'};
                    var10 = _closure2_slot3;
                    var10 = var10.uploadListItemText;
                    var6['style'] = var10;
                    var9 = var9.text;
                    var6['children'] = var9;
                    var6 = var8.bind(var1)(var7, var6);
                    var5[1] = var6;
                    var2['children'] = var5;
                    var1 = var4.bind(var1)(var3, var2);
                    return var1;
                };
                var13['renderItem'] = var16;
                var13 = var15.bind(var4)(var14, var13);
                var12[2] = var13;
                var9['children'] = var12;
                var9 = var11.bind(var4)(var10, var9);
                var8[2] = var9;
                var5['children'] = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1['children'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var _closure1_slot16 = var1;
        var1 = global;
        var9 = var1.Object;
        var8 = var9.defineProperty;
        var4 = {};
        var1 = true;
        var4['value'] = var1;
        var1 = '__esModule';
        var1 = var8.bind(var9)(var3, var1, var4);
        var12 = 0;
        var4 = var6[var12];
        var1 = undefined;
        var4 = var7.bind(var1)(var4);
        var _closure1_slot3 = var4;
        var4 = 1;
        var4 = var6[var4];
        var4 = var7.bind(var1)(var4);
        var _closure1_slot4 = var4;
        var4 = 2;
        var8 = var6[var4];
        var4 = metroImportAll;
        var4 = var4.bind(var1)(var8);
        var _closure1_slot5 = var4;
        var4 = 3;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var8 = var4.View;
        var _closure1_slot6 = var8;
        var4 = var4.FlatList;
        var _closure1_slot7 = var4;
        var14 = 4;
        var4 = var6[var14];
        var4 = var7.bind(var1)(var4);
        var _closure1_slot8 = var4;
        var4 = 5;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var7 = var4.AbortCodes;
        var _closure1_slot9 = var7;
        var7 = var4.AnalyticEvents;
        var _closure1_slot10 = var7;
        var4 = var4.UPLOAD_SMALL_SIZE;
        var _closure1_slot11 = var4;
        var10 = 6;
        var4 = var6[var10];
        var4 = var5.bind(var1)(var4);
        var4 = var4.EMOJI_MAX_FILESIZE_KB;
        var _closure1_slot12 = var4;
        var4 = 7;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var7 = var4.jsx;
        var _closure1_slot13 = var7;
        var4 = var4.jsxs;
        var _closure1_slot14 = var4;
        var11 = 8;
        var4 = var6[var11];
        var8 = var5.bind(var1)(var4);
        var7 = var8.createStyles;
        var4 = {};
        var9 = {};
        var13 = 9;
        var15 = var6[var13];
        var16 = var5.bind(var1)(var15);
        var15 = var16.isAndroid;
        var15 = var15.bind(var16)();
        if(!var15) { _fun0001_ip = 309; continue _fun0001 }
 306:
        var14 = 12;
 309:
        var9['paddingTop'] = var14;
        var14 = var6[var13];
        var15 = var5.bind(var1)(var14);
        var14 = var15.isAndroid;
        var15 = var14.bind(var15)();
        var14 = 0;
        if(!var15) { _fun0001_ip = 340; continue _fun0001 }
 337:
        var14 = 12;
 340:
        var9['paddingBottom'] = var14;
        var4['uploadInstructionsContainer'] = var9;
        var9 = {'marginTop': 4294967280, 'marginLeft': 4294967280};
        var13 = var6[var13];
        var14 = var5.bind(var1)(var13);
        var13 = var14.isAndroid;
        var13 = var13.bind(var14)();
        var12 = 0;
        if(!var13) { _fun0001_ip = 393; continue _fun0001 }
 387:
        var12 = -8;
 393:
        var9['marginBottom'] = var12;
        var4['uploadInstructionsHeading'] = var9;
        var9 = {};
        var9['marginLeft'] = var11;
        var4['uploadInstructionsList'] = var9;
        var9 = {'paddingHorizontal': 16, 'paddingTop': 16};
        var4['headerContainer'] = var9;
        var9 = {};
        var9['marginTop'] = var11;
        var4['errorText'] = var9;
        var9 = {};
        var9['paddingRight'] = var10;
        var4['uploadListItemText'] = var9;
        var9 = {'display': 'flex', 'flexDirection': 'row'};
        var4['uploadListItem'] = var9;
        var4 = var7.bind(var8)(var4);
        var _closure1_slot15 = var4;
        var4 = 21;
        var4 = var6[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.fileFinishedImporting;
        var4 = 'modules/guild_settings/native/GuildSettingsModalEmoji/HeaderRow.tsx';
        var4 = var5.bind(var6)(var4);
        var2 = function ConnectedHeaderRow(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var2 = arg1;
                var1 = null;
                if(!(var2 != var1)) { _fun0005_ip = 110; continue _fun0005 }
 9:
                var11 = {};
                var5 = undefined;
                var10 = var2;
                var9 = undefined;
                var6 = copyDataProperties(var11, var10, var9);
                var4 = _closure1_slot0;
                var7 = _closure1_slot2;
                var3 = 20;
                var3 = var7[var3];
                var8 = var4.bind(var5)(var3);
                var7 = var8.useStateFromStores;
                var3 = _closure1_slot8;
                var4 = new Array(1);
                var4[0] = var3;
                var3 = function() {
                    var2 = _closure1_slot8;
                    var1 = var2.isUploadingEmoji;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var7 = var7.bind(var8)(var4, var3);
                var4 = _closure1_slot13;
                var3 = _closure1_slot16;
                var1 = {};
                var1['isUploading'] = var7;
                var11 = var1;
                var10 = var6;
                var6 = copyDataProperties(var11, var10);
                var1 = var4.bind(var5)(var3, var1);
                return var1;
 110:
                var10 = "Cannot destructure 'undefined' or 'null'.";
                var11 = var2;
                var1 = throwTypeError(var11, var10);
                var1 = undefined;
                throw var1;
            }
        };
        var3['ConnectedHeaderRow'] = var2;
        return var1;
    }
})();