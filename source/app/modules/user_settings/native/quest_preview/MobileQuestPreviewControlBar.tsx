// app/modules/user_settings/native/quest_preview/MobileQuestPreviewControlBar.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var13 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var6;
    var2 = function MobileQuestPreviewControlBar(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var18 = var3.questId;
            var _closure2_slot0 = var18;
            var2 = var3.setQuestId;
            var _closure2_slot1 = var2;
            var21 = var3.refreshQuest;
            var _closure2_slot2 = var21;
            var3 = _closure1_slot11;
            var4 = undefined;
            var11 = var3.bind(var4)();
            var6 = _closure1_slot5;
            var5 = var6.useState;
            var3 = false;
            var6 = var5.bind(var6)(var3);
            var5 = _closure1_slot4;
            var3 = 2;
            var5 = var5.bind(var4)(var6, var3);
            var3 = 0;
            var24 = var5[var3];
            var3 = 1;
            var3 = var5[var3];
            var _closure2_slot3 = var3;
            var26 = _closure1_slot0;
            var19 = _closure1_slot2;
            var3 = 9;
            var3 = var19[var3];
            var5 = var26.bind(var4)(var3);
            var3 = var5.useQuestsWithPreviewAccess;
            var3 = var3.bind(var5)();
            var _closure2_slot4 = var3;
            var5 = 10;
            var6 = var19[var5];
            var12 = var26.bind(var4)(var6);
            var10 = var12.useStateFromStores;
            var6 = _closure1_slot7;
            var9 = new Array(1);
            var9[0] = var6;
            var8 = new Array(1);
            var8[0] = var18;
            var6 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var1 = null;
                    var3 = var1 != var3;
                    if(!var3) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var4 = _closure1_slot7;
                    var3 = var4.getFetchQuestPreviewError;
                    var2 = _closure2_slot0;
                    var1 = var3.bind(var4)(var2);
case 2:
                    return var1;
                }
            };
            var10 = var10.bind(var12)(var9, var6, var8);
            var5 = var19[var5];
            var12 = var26.bind(var4)(var5);
            var9 = var12.useStateFromStores;
            var5 = _closure1_slot7;
            var8 = new Array(1);
            var8[0] = var5;
            var6 = new Array(1);
            var6[0] = var18;
            var5 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0003_ip = 2; continue _fun0003 }
case 3:
                    var4 = _closure1_slot7;
                    var3 = var4.isFetchingQuestPreview;
                    var2 = _closure2_slot0;
                    var1 = var3.bind(var4)(var2);
case 2:
                    return var1;
                }
            };
            var23 = var9.bind(var12)(var8, var5, var6);
            var8 = _closure1_slot5;
            var6 = var8.useMemo;
            var5 = new Array(2);
            var5[0] = var3;
            var5[1] = var18;
            var3 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var5 = _closure2_slot4;
                    var2 = var5.map;
                    var1 = function(arg1) {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                            var2 = arg1;
                            var1 = {};
                            var4 = var2.config;
                            var3 = null;
                            var5 = var3 == var4;
                            var8 = undefined;
                            if(var5) { _fun0005_ip = 4; continue _fun0005 }
case 5:
                            var4 = var4.messages;
                            var5 = var3 == var4;
                            var8 = undefined;
                            if(var5) { _fun0005_ip = 4; continue _fun0005 }
case 6:
                            var8 = var4.questName;
case 4:
                            if(!(var3 == var8)) { _fun0005_ip = 7; continue _fun0005 }
case 8:
                            var8 = var2.id;
case 7:
                            var10 = var2.id;
                            var3 = global;
                            var3 = var3.HermesInternal;
                            var6 = var3.concat;
                            var13 = '';
                            var11 = ' (';
                            var9 = ')';
                            var12 = var8;
                            var3 = var13[var6](var12, var11, var10, var9, var8);
                            var1['label'] = var3;
                            var2 = var2.id;
                            var1['value'] = var2;
                            return var1;
                        }
                    };
                    var1 = var2.bind(var5)(var1);
                    var5 = _closure2_slot0;
                    var2 = null;
                    var2 = var2 == var5;
                    if(var2) { _fun0004_ip = 9; continue _fun0004 }
case 10:
                    var5 = var1.some;
                    var3 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.value;
                        var1 = _closure2_slot0;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var2 = var5.bind(var1)(var3);
case 9:
                    if(var2) { _fun0004_ip = 11; continue _fun0004 }
case 12:
                    var3 = var1.unshift;
                    var2 = {};
                    var4 = _closure2_slot0;
                    var2['label'] = var4;
                    var2['value'] = var4;
                    var2 = var3.bind(var1)(var2);
case 11:
                    return var1;
                }
            };
            var25 = var6.bind(var8)(var3, var5);
            var6 = _closure1_slot5;
            var5 = var6.useCallback;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0006_ip = 13; continue _fun0006 }
case 14:
                    var3 = _closure2_slot1;
                    var2 = undefined;
                    var1 = arg1;
                    var1 = var3.bind(var2)(var1);
case 13:
                    var1 = undefined;
                    return var1;
                }
            };
            var20 = var5.bind(var6)(var2, var3);
            var6 = _closure1_slot5;
            var5 = var6.useCallback;
            var3 = _closure1_slot3;
            var2 = function* () {
                var1 = function* anon_0_() {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0007_ip = 15; continue _fun0007 }
case 16:
                        var4 = _closure2_slot0;
                        var2 = null;
                        if(!(var2 != var4)) { _fun0007_ip = 17; continue _fun0007 }
case 18:
                        var4 = _closure2_slot3;
                        var5 = undefined;
                        var2 = true;
                        var2 = var4.bind(var5)(var2);
case 6: // try_start_0
                        var4 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var2 = 11;
                        var2 = var6[var2];
                        var7 = var4.bind(var5)(var2);
                        var6 = var7.completeQuestPreview;
                        var4 = _closure2_slot0;
                        var2 = 1;
                        var2 = var6.bind(var7)(var4, var2);
                        SaveGenerator(address=82);
case 19:
                        return var2;
case 20:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(var4) { _fun0007_ip = 21; continue _fun0007 }
case 22:
                        var4 = _closure2_slot2;
                        var4 = var4.bind(var5)();
case 23: // try_end0
                        var6 = _closure2_slot3;
                        var4 = false;
                        var4 = var6.bind(var5)(var4);
case 17:
                        var4 = undefined;
                        return var4;
case 21:
                        var6 = _closure2_slot3;
                        var4 = false;
                        var4 = var6.bind(var5)(var4);
                        return var2;
case 24: // catch_target0
                        CatchBlockStart(arg_register=1);
                        var4 = _closure2_slot3;
                        var3 = false;
                        var3 = var4.bind(var5)(var3);
                        throw var2;
case 15:
                        return var1;
                    }
                };
                return var1;
            };
            var3 = var3.bind(var4)(var2);
            var2 = new Array(2);
            var2[0] = var18;
            var2[1] = var21;
            var9 = var5.bind(var6)(var3, var2);
            var _closure2_slot5 = var9;
            var6 = _closure1_slot5;
            var5 = var6.useCallback;
            var3 = _closure1_slot3;
            var2 = function* () {
                var1 = function* anon_0_() {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0008_ip = 25; continue _fun0008 }
case 16:
                        var4 = _closure2_slot0;
                        var2 = null;
                        if(!(var2 != var4)) { _fun0008_ip = 26; continue _fun0008 }
case 18:
                        var4 = _closure2_slot3;
                        var5 = undefined;
                        var2 = true;
                        var2 = var4.bind(var5)(var2);
case 6: // try_start_0
                        var4 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var2 = 11;
                        var2 = var6[var2];
                        var6 = var4.bind(var5)(var2);
                        var4 = var6.resetQuestPreviewStatus;
                        var2 = _closure2_slot0;
                        var2 = var4.bind(var6)(var2);
                        SaveGenerator(address=78);
case 27:
                        return var2;
case 28:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(var4) { _fun0008_ip = 29; continue _fun0008 }
case 30:
                        var4 = _closure2_slot2;
                        var4 = var4.bind(var5)();
case 31: // try_end0
                        var6 = _closure2_slot3;
                        var4 = false;
                        var4 = var6.bind(var5)(var4);
case 26:
                        var4 = undefined;
                        return var4;
case 29:
                        var6 = _closure2_slot3;
                        var4 = false;
                        var4 = var6.bind(var5)(var4);
                        return var2;
case 32: // catch_target0
                        CatchBlockStart(arg_register=1);
                        var4 = _closure2_slot3;
                        var3 = false;
                        var3 = var4.bind(var5)(var3);
                        throw var2;
case 25:
                        return var1;
                    }
                };
                return var1;
            };
            var3 = var3.bind(var4)(var2);
            var2 = new Array(2);
            var2[0] = var18;
            var2[1] = var21;
            var8 = var5.bind(var6)(var3, var2);
            var _closure2_slot6 = var8;
            var6 = _closure1_slot5;
            var5 = var6.useCallback;
            var3 = _closure1_slot3;
            var2 = function* () {
                var1 = function* anon_0_() {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0009_ip = 33; continue _fun0009 }
case 16:
                        var4 = _closure2_slot0;
                        var2 = null;
                        if(!(var2 != var4)) { _fun0009_ip = 32; continue _fun0009 }
case 18:
                        var4 = _closure2_slot3;
                        var5 = undefined;
                        var2 = true;
                        var2 = var4.bind(var5)(var2);
case 6: // try_start_0
                        var2 = global;
                        var4 = var2.Math;
                        var2 = var4.random;
                        var7 = var2.bind(var4)();
                        var4 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var2 = 11;
                        var2 = var6[var2];
                        var6 = var4.bind(var5)(var2);
                        var4 = var6.completeQuestPreview;
                        var2 = _closure2_slot0;
                        var2 = var4.bind(var6)(var2, var7);
                        SaveGenerator(address=97);
case 34:
                        return var2;
case 35:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(var4) { _fun0009_ip = 36; continue _fun0009 }
case 26:
                        var4 = _closure2_slot2;
                        var4 = var4.bind(var5)();
case 37: // try_end0
                        var6 = _closure2_slot3;
                        var4 = false;
                        var4 = var6.bind(var5)(var4);
case 32:
                        var4 = undefined;
                        return var4;
case 36:
                        var6 = _closure2_slot3;
                        var4 = false;
                        var4 = var6.bind(var5)(var4);
                        return var2;
case 15: // catch_target0
                        CatchBlockStart(arg_register=1);
                        var4 = _closure2_slot3;
                        var3 = false;
                        var3 = var4.bind(var5)(var3);
                        throw var2;
case 33:
                        return var1;
                    }
                };
                return var1;
            };
            var3 = var3.bind(var4)(var2);
            var2 = new Array(2);
            var2[0] = var18;
            var2[1] = var21;
            var6 = var5.bind(var6)(var3, var2);
            var _closure2_slot7 = var6;
            var5 = _closure1_slot5;
            var3 = var5.useCallback;
            var2 = new Array(4);
            var2[0] = var18;
            var2[1] = var9;
            var2[2] = var8;
            var2[3] = var6;
            var1 = function() {
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var1 = 12;
                var2 = var11[var1];
                var1 = undefined;
                var4 = var10.bind(var1)(var2);
                var3 = var4.showSimpleActionSheet;
                var2 = {};
                var5 = 'quest-preview-menu';
                var2['key'] = var5;
                var6 = {};
                var7 = 13;
                var5 = var11[var7];
                var5 = var10.bind(var1)(var5);
                var9 = var5.intl;
                var8 = var9.string;
                var5 = var11[var7];
                var5 = var10.bind(var1)(var5);
                var5 = var5.t;
                var5 = var5.jQEfRU;
                var5 = var8.bind(var9)(var5);
                var6['label'] = var5;
                var5 = _closure2_slot5;
                var6['onPress'] = var5;
                var5 = new Array(4);
                var5[0] = var6;
                var6 = {};
                var9 = var11[var7];
                var9 = var10.bind(var1)(var9);
                var13 = var9.intl;
                var12 = var13.string;
                var9 = var11[var7];
                var9 = var10.bind(var1)(var9);
                var9 = var9.t;
                var9 = var9.taqkwM;
                var9 = var12.bind(var13)(var9);
                var6['label'] = var9;
                var9 = _closure2_slot6;
                var6['onPress'] = var9;
                var5[1] = var6;
                var6 = {};
                var9 = var11[var7];
                var9 = var10.bind(var1)(var9);
                var13 = var9.intl;
                var12 = var13.string;
                var9 = var11[var7];
                var9 = var10.bind(var1)(var9);
                var9 = var9.t;
                var9 = var9.cKSLr6;
                var9 = var12.bind(var13)(var9);
                var6['label'] = var9;
                var8 = _closure2_slot7;
                var6['onPress'] = var8;
                var5[2] = var6;
                var6 = {};
                var8 = var11[var7];
                var8 = var10.bind(var1)(var8);
                var9 = var8.intl;
                var8 = var9.string;
                var7 = var11[var7];
                var7 = var10.bind(var1)(var7);
                var7 = var7.t;
                var7 = var7.rNGQfH;
                var7 = var8.bind(var9)(var7);
                var6['label'] = var7;
                var7 = function onPress() {
                    _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                        var3 = _closure2_slot0;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0010_ip = 38; continue _fun0010 }
case 14:
                        var5 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var2 = 14;
                        var3 = var3[var2];
                        var2 = undefined;
                        var3 = var5.bind(var2)(var3);
                        var2 = var3.copy;
                        var5 = _closure1_slot8;
                        var4 = var5.QUEST_PREVIEW_TOOL_2;
                        var1 = _closure2_slot0;
                        var1 = var4.bind(var5)(var1);
                        var1 = var2.bind(var3)(var1);
case 38:
                        var1 = undefined;
                        return var1;
                    }
                };
                var6['onPress'] = var7;
                var5[3] = var6;
                var2['options'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var22 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot10;
            var2 = _closure1_slot6;
            var1 = {};
            var5 = var11.container;
            var1['style'] = var5;
            var8 = _closure1_slot9;
            var6 = _closure1_slot1;
            var5 = 15;
            var5 = var19[var5];
            var6 = var6.bind(var4)(var5);
            var5 = {};
            var6 = var8.bind(var4)(var6, var5);
            var5 = new Array(3);
            var5[0] = var6;
            var12 = _closure1_slot10;
            var9 = _closure1_slot6;
            var8 = {};
            var6 = var11.questInputContainer;
            var8['style'] = var6;
            var14 = _closure1_slot9;
            var13 = _closure1_slot6;
            var6 = {};
            var15 = var11.searchField;
            var6['style'] = var15;
            var17 = _closure1_slot9;
            var15 = 16;
            var15 = var19[var15];
            var15 = var26.bind(var4)(var15);
            var16 = var15.MobileSearchableSelect;
            var15 = {};
            var15['options'] = var25;
            var15['value'] = var18;
            var15['onChange'] = var20;
            var29 = 13;
            var20 = var19[var29];
            var20 = var26.bind(var4)(var20);
            var25 = var20.intl;
            var20 = var25.string;
            var19 = var19[var29];
            var19 = var26.bind(var4)(var19);
            var19 = var19.t;
            var19 = var19.Zw8jxs;
            var19 = var20.bind(var25)(var19);
            var15['placeholder'] = var19;
            var19 = true;
            var15['allowCustomValue'] = var19;
            var19 = var23;
            if(var23) { _fun0001_ip = 39; continue _fun0001 }
case 40:
            var19 = var24;
case 39:
            var15['isDisabled'] = var19;
            var15 = var17.bind(var4)(var16, var15);
            var6['children'] = var15;
            var6 = var14.bind(var4)(var13, var6);
            var13 = new Array(2);
            var13[0] = var6;
            var16 = _closure1_slot10;
            var15 = _closure1_slot6;
            var14 = {};
            var6 = var11.iconsColumn;
            var14['style'] = var6;
            var20 = _closure1_slot9;
            var28 = _closure1_slot0;
            var25 = _closure1_slot2;
            var19 = 17;
            var6 = var25[var19];
            var6 = var28.bind(var4)(var6);
            var17 = var6.IconButton;
            var6 = {};
            var30 = _closure1_slot9;
            var26 = 18;
            var26 = var25[var26];
            var26 = var28.bind(var4)(var26);
            var27 = var26.RefreshIcon;
            var26 = {};
            var26 = var30.bind(var4)(var27, var26);
            var6['icon'] = var26;
            var26 = var25[var29];
            var26 = var28.bind(var4)(var26);
            var27 = var26.intl;
            var26 = var27.string;
            var25 = var25[var29];
            var25 = var28.bind(var4)(var25);
            var25 = var25.t;
            var25 = var25.wzzjk5;
            var25 = var26.bind(var27)(var25);
            var6['accessibilityLabel'] = var25;
            var6['onPress'] = var21;
            var21 = var23;
            if(var23) { _fun0001_ip = 41; continue _fun0001 }
case 42:
            var25 = null;
            var21 = var25 == var18;
case 41:
            var6['disabled'] = var21;
            var6['loading'] = var23;
            var21 = 'sm';
            var6['size'] = var21;
            var21 = 'secondary';
            var6['variant'] = var21;
            var6 = var20.bind(var4)(var17, var6);
            var17 = new Array(2);
            var17[0] = var6;
            var6 = null;
            var18 = var6 != var18;
            if(!var18) { _fun0001_ip = 43; continue _fun0001 }
case 44:
            var21 = _closure1_slot9;
            var28 = _closure1_slot0;
            var25 = _closure1_slot2;
            var19 = var25[var19];
            var19 = var28.bind(var4)(var19);
            var20 = var19.IconButton;
            var19 = {'icon': null, 'size': 'sm', 'variant': 'secondary'};
            var30 = _closure1_slot9;
            var26 = 19;
            var26 = var25[var26];
            var26 = var28.bind(var4)(var26);
            var27 = var26.MoreVerticalIcon;
            var26 = {};
            var26 = var30.bind(var4)(var27, var26);
            var19['icon'] = var26;
            var26 = var25[var29];
            var26 = var28.bind(var4)(var26);
            var27 = var26.intl;
            var26 = var27.string;
            var25 = var25[var29];
            var25 = var28.bind(var4)(var25);
            var25 = var25.t;
            var25 = var25.+1H47u;
            var25 = var26.bind(var27)(var25);
            var19['accessibilityLabel'] = var25;
            if(var23) { _fun0001_ip = 45; continue _fun0001 }
case 46:
            var23 = var24;
case 45:
            var19['disabled'] = var23;
            var19['onPress'] = var22;
            var18 = var21.bind(var4)(var20, var19);
case 43:
            var17[1] = var18;
            var14['children'] = var17;
            var14 = var16.bind(var4)(var15, var14);
            var13[1] = var14;
            var8['children'] = var13;
            var8 = var12.bind(var4)(var9, var8);
            var5[1] = var8;
            var6 = var6 != var10;
            if(!var6) { _fun0001_ip = 47; continue _fun0001 }
case 48:
            var9 = _closure1_slot9;
            var8 = _closure1_slot0;
            var12 = _closure1_slot2;
            var7 = 20;
            var7 = var12[var7];
            var7 = var8.bind(var4)(var7);
            var8 = var7.Text;
            var7 = {'variant': 'text-sm/medium', 'color': 'text-danger'};
            var11 = var11.errorText;
            var7['style'] = var11;
            var10 = var10.message;
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 47:
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
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
    var4 = var13.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var11 = 1;
    var4 = var6[var11];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var8 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AppRoutes;
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot9 = var8;
    var4 = var4.jsxs;
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {'overflow': 'visible', 'zIndex': 1};
    var4['container'] = var10;
    var10 = {'flexDirection': 'row', 'alignItems': 'flex-start', 'justifyContent': 'flex-start', 'gap': null, 'zIndex': 2, 'overflow': 'visible'};
    var14 = 'row';
    var12 = 8;
    var15 = var6[var12];
    var15 = var13.bind(var1)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_8;
    var10['gap'] = var15;
    var4['questInputContainer'] = var10;
    var10 = {'flex': 1, 'zIndex': 3, 'overflow': 'visible'};
    var4['searchField'] = var10;
    var10 = {};
    var10['flexDirection'] = var14;
    var14 = var6[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_8;
    var10['gap'] = var14;
    var14 = var6[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_4;
    var10['paddingTop'] = var14;
    var4['iconsColumn'] = var10;
    var10 = {};
    var12 = var6[var12];
    var12 = var13.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_4;
    var10['marginTop'] = var12;
    var10['zIndex'] = var11;
    var4['errorText'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot11 = var4;
    var4 = 21;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/native/quest_preview/MobileQuestPreviewControlBar.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    var3['MobileQuestPreviewControlBar'] = var2;
    return var1;
})();