// app/modules/hang_status/components/native/HangStatusPickerActionSheet.tsx
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
    var12 = 1;
    var7 = var6[var12];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.HangStatusTypes;
    var _closure1_slot9 = var7;
    var7 = var4.HANG_STATUS_ACTION_SHEET_KEY;
    var _closure1_slot10 = var7;
    var7 = var4.HANG_STATUS_FAVORITE_ACTION_SHEET_KEY;
    var _closure1_slot11 = var7;
    var7 = var4.STATUS_MAX_LENGTH;
    var _closure1_slot12 = var7;
    var4 = var4.SYSTEM_HANG_STATUS_TYPES;
    var _closure1_slot13 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.ActivityTypes;
    var _closure1_slot14 = var7;
    var4 = var4.AnalyticEvents;
    var _closure1_slot15 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.EmojiIntention;
    var _closure1_slot16 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot17 = var7;
    var4 = var4.jsxs;
    var _closure1_slot18 = var4;
    var4 = 10;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'display': 'flex', 'flexDirection': 'row', 'gap': null, 'alignItems': 'center', 'width': '100%'};
    var10 = 11;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_8;
    var9['gap'] = var13;
    var4['inputRow'] = var9;
    var9 = {'display': 'flex', 'flexDirection': 'row', 'gap': null, 'alignItems': 'center'};
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_4;
    var9['gap'] = var13;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.INPUT_BACKGROUND;
    var9['backgroundColor'] = var13;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.lg;
    var9['borderRadius'] = var13;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_4;
    var9['padding'] = var13;
    var9['flex'] = var12;
    var4['inputContainer'] = var9;
    var9 = {};
    var9['flexGrow'] = var12;
    var4['input'] = var9;
    var9 = {'display': 'flex', 'flexDirection': 'row', 'gap': null, 'alignItems': 'center'};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var9['gap'] = var12;
    var4['row'] = var9;
    var9 = {'height': 28, 'width': 28};
    var4['emojiStyle'] = var9;
    var9 = {};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.INPUT_BACKGROUND;
    var9['backgroundColor'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_12;
    var9['padding'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.radii;
    var12 = var12.round;
    var9['borderRadius'] = var12;
    var4['inputButton'] = var9;
    var9 = {};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.REDESIGN_BUTTON_SECONDARY_BACKGROUND;
    var9['backgroundColor'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_12;
    var9['padding'] = var12;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.radii;
    var10 = var10.round;
    var9['borderRadius'] = var10;
    var4['randomizeButton'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot19 = var4;
    var4 = 42;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/hang_status/components/native/HangStatusPickerActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function HangStatusPickerActionSheet(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var16 = var1.initialStatusType;
            var8 = var1.initialStatusText;
            var14 = var1.initialStatusEmoji;
            var11 = var1.channelId;
            var _closure2_slot0 = var11;
            var4 = undefined;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var _closure2_slot8 = var4;
            var _closure2_slot9 = var4;
            var _closure2_slot10 = var4;
            var _closure2_slot11 = var4;
            var _closure2_slot12 = var4;
            var _closure2_slot13 = var4;
            var _closure2_slot14 = var4;
            var _closure2_slot15 = var4;
            var _closure2_slot16 = var4;
            var _closure2_slot17 = var4;
            var _closure2_slot18 = var4;
            var _closure2_slot19 = var4;
            var1 = _closure1_slot19;
            var21 = var1.bind(var4)();
            var _closure2_slot1 = var21;
            var2 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 12;
            var1 = var5[var3];
            var12 = var2.bind(var4)(var1);
            var9 = var12.useStateFromStores;
            var1 = _closure1_slot7;
            var6 = new Array(1);
            var6[0] = var1;
            var1 = function() {
                var3 = _closure1_slot7;
                var2 = var3.getChannel;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var6 = var9.bind(var12)(var6, var1);
            var _closure2_slot2 = var6;
            var1 = var5[var3];
            var15 = var2.bind(var4)(var1);
            var13 = var15.useStateFromStores;
            var1 = _closure1_slot8;
            var12 = new Array(1);
            var12[0] = var1;
            var9 = function() {
                var2 = _closure1_slot8;
                var1 = var2.getCustomHangStatus;
                var1 = var1.bind(var2)();
                return var1;
            };
            var23 = var13.bind(var15)(var12, var9);
            var _closure2_slot3 = var23;
            var9 = var5[var3];
            var13 = var2.bind(var4)(var9);
            var12 = var13.useStateFromStores;
            var9 = new Array(1);
            var9[0] = var1;
            var1 = function() {
                var2 = _closure1_slot8;
                var1 = var2.getCurrentHangStatus;
                var1 = var1.bind(var2)();
                return var1;
            };
            var15 = var12.bind(var13)(var9, var1);
            var9 = _closure1_slot1;
            var1 = 13;
            var1 = var5[var1];
            var1 = var9.bind(var4)(var1);
            var12 = var1.bind(var4)();
            var1 = 14;
            var1 = var5[var1];
            var5 = var2.bind(var4)(var1);
            var2 = var5.useHangStatusExperiment;
            var1 = {};
            var22 = null;
            var13 = var22 == var6;
            var9 = undefined;
            if(var13) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var9 = var6.guild_id;
case 2:
            var1['guildId'] = var9;
            var9 = 'HangStatusPickerActionSheet';
            var1['location'] = var9;
            var1 = var2.bind(var5)(var1);
            var36 = var1.defaultStatusVariant;
            _closure2_slot4 = var36;
            var5 = var1.allowPermanentClear;
            _closure2_slot5 = var5;
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var3];
            var9 = var2.bind(var4)(var1);
            var3 = var9.useStateFromStores;
            var1 = _closure1_slot8;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var2 = _closure1_slot8;
                var1 = var2.getFavoritedStatuses;
                var1 = var1.bind(var2)();
                return var1;
            };
            var17 = var3.bind(var9)(var2, var1);
            var3 = _closure1_slot4;
            var9 = var3.useMemo;
            var2 = new Array(1);
            var2[0] = var36;
            var1 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 15;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.getHangStatusOptions;
                var1 = _closure2_slot4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var31 = var9.bind(var3)(var1, var2);
            _closure2_slot6 = var31;
            var2 = var3.useState;
            if(!(var22 == var8)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var9 = var22 == var23;
            var1 = undefined;
            if(var9) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var1 = var23.status;
case 6:
            var8 = var1;
case 4:
            var9 = var22 != var8;
            var1 = undefined;
            if(!var9) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var1 = var8;
case 8:
            var2 = var2.bind(var3)(var1);
            var1 = _closure1_slot3;
            var13 = 2;
            var1 = var1.bind(var4)(var2, var13);
            var8 = 0;
            var33 = var1[var8];
            _closure2_slot7 = var33;
            var3 = 1;
            var1 = var1[var3];
            _closure2_slot8 = var1;
            var9 = _closure1_slot4;
            var2 = var9.useState;
            var1 = var15;
            if(!(var22 != var16)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var1 = var16;
case 10:
            if(!(var22 == var1)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var18 = var22 != var23;
            var16 = undefined;
            if(!var18) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var18 = _closure1_slot9;
            var16 = var18.CUSTOM;
case 14:
            var1 = var16;
case 12:
            var2 = var2.bind(var9)(var1);
            var1 = _closure1_slot3;
            var1 = var1.bind(var4)(var2, var13);
            var30 = var1[var8];
            _closure2_slot9 = var30;
            var1 = var1[var3];
            _closure2_slot10 = var1;
            var9 = _closure1_slot4;
            var2 = var9.useState;
            if(!(var22 == var14)) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var16 = var22 == var23;
            var1 = undefined;
            if(var16) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var1 = var23.emoji;
case 18:
            var14 = var1;
case 16:
            var16 = var22 != var14;
            var1 = undefined;
            if(!var16) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var1 = var14;
case 20:
            var1 = var2.bind(var9)(var1);
            var9 = _closure1_slot3;
            var1 = var9.bind(var4)(var1, var13);
            var37 = var1[var8];
            _closure2_slot11 = var37;
            var1 = var1[var3];
            _closure2_slot12 = var1;
            var2 = _closure1_slot1;
            var14 = _closure1_slot2;
            var1 = 16;
            var1 = var14[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.bind(var4)(var6);
            _closure2_slot13 = var2;
            var16 = _closure1_slot4;
            var14 = var16.useState;
            var1 = false;
            var1 = var14.bind(var16)(var1);
            var1 = var9.bind(var4)(var1, var13);
            var34 = var1[var8];
            var1 = var1[var3];
            _closure2_slot14 = var1;
            var32 = var22 != var30;
            if(!var32) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var3 = _closure1_slot13;
            var1 = var3.includes;
            var32 = var1.bind(var3)(var30);
case 22:
            var9 = _closure1_slot4;
            var13 = var9.useMemo;
            var3 = new Array(3);
            var3[0] = var33;
            var3[1] = var37;
            var3[2] = var23;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure2_slot7;
                    var3 = null;
                    var1 = var3 != var1;
                    if(!var1) { _fun0002_ip = 24; continue _fun0002 }
case 25:
                    var4 = _closure2_slot7;
                    var2 = var4.trim;
                    var4 = var2.bind(var4)();
                    var2 = '';
                    var1 = var2 !== var4;
case 24:
                    if(!var1) { _fun0002_ip = 26; continue _fun0002 }
case 27:
                    var4 = _closure2_slot7;
                    var2 = _closure2_slot3;
                    var5 = var3 == var2;
                    var6 = undefined;
                    var2 = undefined;
                    if(var5) { _fun0002_ip = 28; continue _fun0002 }
case 29:
                    var5 = _closure2_slot3;
                    var2 = var5.status;
case 28:
                    var2 = var4 !== var2;
                    if(var2) { _fun0002_ip = 30; continue _fun0002 }
case 31:
                    var5 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var4 = 17;
                    var4 = var7[var4];
                    var5 = var5.bind(var6)(var4);
                    var4 = _closure2_slot11;
                    var7 = _closure2_slot3;
                    var9 = var3 == var7;
                    var7 = undefined;
                    if(var9) { _fun0002_ip = 32; continue _fun0002 }
case 33:
                    var8 = _closure2_slot3;
                    var7 = var8.emoji;
case 32:
                    var8 = var3 != var7;
                    var3 = undefined;
                    if(!var8) { _fun0002_ip = 34; continue _fun0002 }
case 35:
                    var3 = var7;
case 34:
                    var3 = var5.bind(var6)(var4, var3);
                    var2 = !var3;
case 30:
                    var1 = var2;
case 26:
                    return var1;
                }
            };
            var19 = var13.bind(var9)(var1, var3);
            var13 = var9.useCallback;
            var3 = function() {
                var4 = _closure2_slot8;
                var1 = undefined;
                var3 = '';
                var3 = var4.bind(var1)(var3);
                var3 = _closure2_slot12;
                var3 = var3.bind(var1)(var1);
                var3 = _closure2_slot14;
                var2 = false;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var1 = new Array(0);
            var1 = var13.bind(var9)(var3, var1);
            _closure2_slot15 = var1;
            var14 = var9.useCallback;
            var13 = new Array(3);
            var13[0] = var37;
            var13[1] = var33;
            var13[2] = var30;
            var3 = function(arg1, arg2, arg3) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var8 = arg1;
                    var6 = arg2;
                    var5 = arg3;
                    var3 = null;
                    if(!(var3 == var8)) { _fun0003_ip = 36; continue _fun0003 }
case 37:
                    var8 = _closure2_slot9;
case 36:
                    if(!(var3 == var6)) { _fun0003_ip = 38; continue _fun0003 }
case 39:
                    var6 = _closure2_slot7;
case 38:
                    if(!(var3 == var5)) { _fun0003_ip = 40; continue _fun0003 }
case 41:
                    var5 = _closure2_slot11;
case 40:
                    if(!(var3 == var5)) { _fun0003_ip = 42; continue _fun0003 }
case 43:
                    var5 = {'id': null, 'name': '💭', 'animated': false};
case 42:
                    var1 = _closure1_slot9;
                    var1 = var1.CUSTOM;
                    if(!(var8 !== var1)) { _fun0003_ip = 44; continue _fun0003 }
case 45:
                    var7 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 18;
                    var4 = var4[var1];
                    var1 = undefined;
                    var7 = var7.bind(var1)(var4);
                    var4 = var7.updateHangStatus;
                    var1 = true;
                    var1 = var4.bind(var7)(var8, var1);
                    _fun0003_ip = 46; continue _fun0003;
case 44:
                    var1 = var3 != var6;
                    if(!var1) { _fun0003_ip = 47; continue _fun0003 }
case 48:
                    var4 = var6.trim;
                    var7 = var4.bind(var6)();
                    var4 = '';
                    var1 = var4 !== var7;
case 47:
                    if(!var1) { _fun0003_ip = 26; continue _fun0003 }
case 49:
                    var1 = var3 != var5;
case 26:
                    if(!var1) { _fun0003_ip = 46; continue _fun0003 }
case 50:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 18;
                    var3 = var3[var1];
                    var1 = undefined;
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.updateCustomHangStatus;
                    var1 = true;
                    var1 = var3.bind(var4)(var6, var5, var1);
case 46:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 19;
                    var3 = var3[var1];
                    var1 = undefined;
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.hideActionSheet;
                    var2 = _closure1_slot10;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var3 = var14.bind(var9)(var3, var13);
            _closure2_slot16 = var3;
            var16 = var9.useCallback;
            var14 = function(arg1) {
                var4 = _closure2_slot10;
                var1 = _closure1_slot9;
                var3 = var1.CUSTOM;
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var4 = _closure2_slot8;
                var3 = arg1;
                var3 = var4.bind(var1)(var3);
                var3 = _closure2_slot14;
                var2 = true;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var13 = new Array(0);
            var28 = var16.bind(var9)(var14, var13);
            var14 = var9.useCallback;
            var13 = new Array(2);
            var13[0] = var33;
            var13[1] = var11;
            var11 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = arg1;
                    var6 = {};
                    var2 = var1.id;
                    var6['id'] = var2;
                    var3 = var1.id;
                    var2 = null;
                    if(!(var2 == var3)) { _fun0004_ip = 51; continue _fun0004 }
case 52:
                    var3 = var1.surrogates;
                    if(!(var2 != var3)) { _fun0004_ip = 51; continue _fun0004 }
case 53:
                    var4 = var1.surrogates;
                    var3 = '';
                    if(!(var3 === var4)) { _fun0004_ip = 54; continue _fun0004 }
case 51:
                    var3 = var1.name;
                    var4 = var2 != var3;
                    var2 = '';
                    if(!var4) { _fun0004_ip = 55; continue _fun0004 }
case 56:
                    var2 = var3;
case 55:
                    _fun0004_ip = 57; continue _fun0004;
case 54:
                    var2 = var1.surrogates;
case 57:
                    var6['name'] = var2;
                    var1 = var1.animated;
                    var6['animated'] = var1;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 20;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.showHangStatusPickerActionSheet;
                    var2 = {};
                    var5 = _closure1_slot9;
                    var5 = var5.CUSTOM;
                    var2['initialStatusType'] = var5;
                    var7 = _closure2_slot7;
                    var2['initialStatusText'] = var7;
                    var2['initialStatusEmoji'] = var6;
                    var5 = _closure2_slot0;
                    var2['channelId'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var11 = var14.bind(var9)(var11, var13);
            _closure2_slot17 = var11;
            var14 = var9.useCallback;
            var13 = new Array(1);
            var13[0] = var11;
            var11 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 21;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.openEmojiPickerActionSheet;
                var2 = {};
                var6 = _closure2_slot17;
                var2['onPressEmoji'] = var6;
                var5 = _closure1_slot16;
                var5 = var5.STATUS;
                var2['pickerIntention'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var27 = var14.bind(var9)(var11, var13);
            var13 = var9.useCallback;
            var11 = new Array(2);
            var11[0] = var3;
            var11[1] = var1;
            var1 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var4 = arg1;
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 22;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var6 = var2.bind(var1)(var4);
                    var3 = _closure2_slot16;
                    if(var6) { _fun0005_ip = 58; continue _fun0005 }
case 59:
                    var5 = _closure1_slot9;
                    var7 = var5.CUSTOM;
                    var6 = var4.status;
                    var8 = var4.emoji;
                    var5 = null;
                    var9 = var5 != var8;
                    var5 = undefined;
                    if(!var9) { _fun0005_ip = 60; continue _fun0005 }
case 61:
                    var5 = var8;
case 60:
                    var5 = var3.bind(var1)(var7, var6, var5);
                    _fun0005_ip = 62; continue _fun0005;
case 58:
                    var3 = var3.bind(var1)(var4);
                    var2 = _closure2_slot15;
                    var2 = var2.bind(var1)();
case 62:
                    return var1;
                }
            };
            var1 = var13.bind(var9)(var1, var11);
            _closure2_slot18 = var1;
            var13 = var9.useCallback;
            var11 = new Array(1);
            var11[0] = var5;
            var5 = function() {
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 18;
                var3 = var5[var1];
                var1 = undefined;
                var7 = var4.bind(var1)(var3);
                var6 = var7.clearHangStatus;
                var4 = _closure2_slot5;
                var3 = true;
                var3 = var6.bind(var7)(var3, var4);
                var4 = _closure1_slot1;
                var3 = 19;
                var3 = var5[var3];
                var4 = var4.bind(var1)(var3);
                var3 = var4.hideActionSheet;
                var2 = _closure1_slot10;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var24 = var13.bind(var9)(var5, var11);
            var11 = var9.useCallback;
            var5 = new Array(3);
            var5[0] = var33;
            var5[1] = var37;
            var5[2] = var3;
            var3 = function() {
                var6 = _closure2_slot16;
                var3 = _closure1_slot9;
                var5 = var3.CUSTOM;
                var4 = _closure2_slot7;
                var3 = _closure2_slot11;
                var1 = undefined;
                var3 = var6.bind(var1)(var5, var4, var3);
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var3 = 19;
                var3 = var5[var3];
                var4 = var4.bind(var1)(var3);
                var3 = var4.hideActionSheet;
                var2 = _closure1_slot10;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var26 = var11.bind(var9)(var3, var5);
            var5 = var9.useCallback;
            var3 = new Array(3);
            var3[0] = var37;
            var3[1] = var2;
            var11 = var22 == var6;
            var2 = undefined;
            if(var11) { _fun0001_ip = 63; continue _fun0001 }
case 64:
            var2 = var6.id;
case 63:
            var3[2] = var2;
            var2 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var8 = null;
                    var1 = undefined;
                    var16 = 17;
                    var15 = 1;
                    var14 = '';
                    var13 = 23;
                    var12 = 0;
                    var11 = null;
                    var10 = null;
                    var9 = undefined;
                    var6 = undefined;
case 38:
                    var3 = _closure2_slot13;
                    var4 = var3.length;
                    var3 = var11;
                    var5 = var10;
                    if(!(var12 !== var4)) { _fun0006_ip = 65; continue _fun0006 }
case 66:
                    var17 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var13];
                    var18 = var17.bind(var1)(var4);
                    var17 = var18.sample;
                    var4 = _closure2_slot13;
                    var18 = var17.bind(var18)(var4);
                    var17 = var8 == var18;
                    var4 = undefined;
                    if(var17) { _fun0006_ip = 67; continue _fun0006 }
case 68:
                    var4 = var18.id;
case 67:
                    if(!(var8 == var4)) { _fun0006_ip = 69; continue _fun0006 }
case 70:
                    var17 = {'id': null, 'name': null, 'animated': false};
                    var4 = var8 == var18;
                    var20 = undefined;
                    if(var4) { _fun0006_ip = 35; continue _fun0006 }
case 71:
                    var20 = var18.optionallyDiverseSequence;
case 35:
                    var19 = var8 != var20;
                    var4 = var14;
                    if(!var19) { _fun0006_ip = 72; continue _fun0006 }
case 73:
                    var4 = var20;
case 72:
                    var17['name'] = var4;
                    var19 = var18;
                    _fun0006_ip = 74; continue _fun0006;
case 69:
                    var4 = {};
                    var21 = var18.id;
                    var4['id'] = var21;
                    var21 = var18.name;
                    var4['name'] = var21;
                    var21 = var18.animated;
                    var4['animated'] = var21;
                    var20 = var9;
                    var19 = var6;
                    var17 = var4;
case 74:
                    var4 = _closure2_slot13;
                    var4 = var4.length;
                    var3 = var18;
                    var5 = var17;
                    if(!(var15 !== var4)) { _fun0006_ip = 65; continue _fun0006 }
case 75:
                    var11 = var18;
                    var10 = var17;
                    var9 = var20;
                    var6 = var19;
                    if(var8 == var18) { _fun0006_ip = 38; continue _fun0006 }
case 76:
                    var4 = var18.name;
                    var11 = var18;
                    var10 = var17;
                    var9 = var20;
                    var6 = var19;
                    if(var8 == var4) { _fun0006_ip = 38; continue _fun0006 }
case 77:
                    var21 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var4 = var4[var16];
                    var21 = var21.bind(var1)(var4);
                    var4 = _closure2_slot11;
                    var4 = var21.bind(var1)(var17, var4);
                    var11 = var18;
                    var10 = var17;
                    var9 = var20;
                    var6 = var19;
                    var3 = var11;
                    var5 = var10;
                    if(var4) { _fun0006_ip = 38; continue _fun0006 }
case 65:
                    var4 = var8 != var5;
                    if(!var4) { _fun0006_ip = 78; continue _fun0006 }
case 79:
                    var9 = var8 == var3;
                    var6 = undefined;
                    if(var9) { _fun0006_ip = 80; continue _fun0006 }
case 81:
                    var6 = var3.name;
case 80:
                    var4 = var8 != var6;
case 78:
                    if(!var4) { _fun0006_ip = 82; continue _fun0006 }
case 83:
                    var4 = _closure2_slot12;
                    var4 = var4.bind(var1)(var5);
                    var4 = _closure2_slot8;
                    var3 = var3.name;
                    var3 = var4.bind(var1)(var3);
                    var6 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var3 = 24;
                    var3 = var9[var3];
                    var5 = var6.bind(var1)(var3);
                    var4 = var5.track;
                    var2 = _closure1_slot15;
                    var3 = var2.HANG_STATUS_RANDOMIZER_CLICKED;
                    var2 = 25;
                    var2 = var9[var2];
                    var6 = var6.bind(var1)(var2);
                    var2 = _closure2_slot2;
                    var8 = var8 == var2;
                    var2 = undefined;
                    if(var8) { _fun0006_ip = 84; continue _fun0006 }
case 85:
                    var7 = _closure2_slot2;
                    var2 = var7.id;
case 84:
                    var2 = var6.bind(var1)(var2);
                    var2 = var4.bind(var5)(var3, var2);
case 82:
                    return var1;
                }
            };
            var18 = var5.bind(var9)(var2, var3);
            var5 = _closure1_slot4;
            var3 = var5.useCallback;
            var2 = new Array(6);
            var2[0] = var6;
            var2[1] = var36;
            var2[2] = var1;
            var2[3] = var31;
            var1 = var21.emojiStyle;
            var2[4] = var1;
            var1 = var21.row;
            var2[5] = var1;
            var1 = function(arg1, arg2, arg3) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var7 = arg1;
                    var _closure3_slot0 = var7;
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 22;
                    var1 = var3[var1];
                    var5 = undefined;
                    var1 = var2.bind(var5)(var1);
                    var1 = var1.bind(var5)(var7);
                    var10 = null;
                    var13 = null;
                    if(!var1) { _fun0007_ip = 86; continue _fun0007 }
case 87:
                    var2 = _closure2_slot6;
                    var13 = var2[var7];
case 86:
                    var4 = _closure1_slot18;
                    var3 = _closure1_slot5;
                    var11 = {};
                    var15 = _closure2_slot1;
                    var2 = var15.row;
                    var11['style'] = var2;
                    var16 = _closure1_slot17;
                    var14 = _closure1_slot1;
                    var17 = _closure1_slot2;
                    if(var1) { _fun0007_ip = 88; continue _fun0007 }
case 62:
                    var18 = 28;
                    var2 = var17[var18];
                    var12 = var14.bind(var5)(var2);
                    var2 = {};
                    var2['size'] = var18;
                    var18 = var7.emoji;
                    var2['emoji'] = var18;
                    var12 = var16.bind(var5)(var12, var2);
                    var2 = new Array(2);
                    var2[0] = var12;
                    var18 = _closure1_slot0;
                    var12 = 27;
                    var12 = var17[var12];
                    var12 = var18.bind(var5)(var12);
                    var18 = var12.Text;
                    var12 = {};
                    var19 = 'text-md/semibold';
                    var12['variant'] = var19;
                    var19 = var7.status;
                    var12['children'] = var19;
                    var12 = var16.bind(var5)(var18, var12);
                    var2[1] = var12;
                    var11['children'] = var2;
                    var2 = var11;
                    _fun0007_ip = 89; continue _fun0007;
case 88:
                    var12 = 26;
                    var12 = var17[var12];
                    var14 = var14.bind(var5)(var12);
                    var12 = {};
                    var19 = _closure1_slot6;
                    var18 = var19.getId;
                    var18 = var18.bind(var19)();
                    var12['userId'] = var18;
                    var18 = 28;
                    var12['size'] = var18;
                    var15 = var15.emojiStyle;
                    var12['emojiStyle'] = var15;
                    var15 = {};
                    var18 = _closure1_slot14;
                    var18 = var18.HANG_STATUS;
                    var15['type'] = var18;
                    var15['state'] = var7;
                    var12['hangStatusActivity'] = var15;
                    var15 = _closure2_slot4;
                    var12['fallbackVariant'] = var15;
                    var14 = var16.bind(var5)(var14, var12);
                    var12 = new Array(2);
                    var12[0] = var14;
                    var15 = _closure1_slot0;
                    var14 = 27;
                    var14 = var17[var14];
                    var14 = var15.bind(var5)(var14);
                    var15 = var14.Text;
                    var14 = {};
                    var17 = 'text-md/semibold';
                    var14['variant'] = var17;
                    var17 = var10 == var13;
                    var18 = undefined;
                    if(var17) { _fun0007_ip = 90; continue _fun0007 }
case 91:
                    var18 = var13.title;
case 90:
                    var19 = var10 != var18;
                    var17 = '';
                    if(!var19) { _fun0007_ip = 92; continue _fun0007 }
case 93:
                    var17 = var18;
case 92:
                    var14['children'] = var17;
                    var14 = var16.bind(var5)(var15, var14);
                    var12[1] = var14;
                    var11['children'] = var12;
                    var2 = var11;
case 89:
                    var11 = var4.bind(var5)(var3, var2);
                    var4 = _closure1_slot17;
                    var3 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var2 = 29;
                    var2 = var12[var2];
                    var2 = var3.bind(var5)(var2);
                    var3 = var2.TableRow;
                    var2 = {};
                    if(var1) { _fun0007_ip = 94; continue _fun0007 }
case 95:
                    var12 = var7.status;
                    _fun0007_ip = 8; continue _fun0007;
case 94:
                    var15 = var10 == var13;
                    var14 = undefined;
                    if(var15) { _fun0007_ip = 82; continue _fun0007 }
case 96:
                    var14 = var13.title;
case 82:
                    var15 = var10 != var14;
                    var13 = '';
                    if(!var15) { _fun0007_ip = 9; continue _fun0007 }
case 97:
                    var13 = var14;
case 9:
                    var12 = var13;
case 8:
                    var2['aria-label'] = var12;
                    var2['label'] = var11;
                    var11 = function onPress() {
                        var3 = _closure2_slot18;
                        var2 = _closure3_slot0;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var2['onPress'] = var11;
                    var9 = function onLongPress() {
                        var5 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 19;
                        var4 = var3[var1];
                        var1 = undefined;
                        var7 = var5.bind(var1)(var4);
                        var6 = var7.openLazy;
                        var5 = _closure1_slot0;
                        var4 = 31;
                        var4 = var3[var4];
                        var5 = var5.bind(var1)(var4);
                        var4 = 30;
                        var4 = var3[var4];
                        var3 = var3.paths;
                        var11 = var5.bind(var1)(var4, var3);
                        var10 = _closure1_slot11;
                        var3 = {};
                        var2 = _closure2_slot2;
                        var3['channel'] = var2;
                        var2 = _closure3_slot0;
                        var3['status'] = var2;
                        var8 = 'stack';
                        var12 = var7;
                        var9 = var3;
                        var2 = var12[var6](var11, var10, var9, var8, var7);
                        return var1;
                    };
                    var2['onLongPress'] = var9;
                    var1 = !var1;
                    if(!var1) { _fun0007_ip = 98; continue _fun0007 }
case 99:
                    var9 = var7.emoji;
                    var1 = var10 != var9;
case 98:
                    if(!var1) { _fun0007_ip = 100; continue _fun0007 }
case 101:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var8 = 32;
                    var8 = var10[var8];
                    var9 = var9.bind(var5)(var8);
                    var8 = var9.canUseEmojiForHangStatus;
                    var7 = var7.emoji;
                    var6 = _closure2_slot2;
                    var6 = var8.bind(var9)(var7, var6);
                    var1 = !var6;
case 100:
                    var2['disabled'] = var1;
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var9 = var1.concat;
                    var8 = '';
                    var7 = arg3;
                    var6 = '-status-';
                    var1 = arg2;
                    var1 = var9.bind(var8)(var7, var6, var1);
                    var1 = var4.bind(var5)(var3, var2, var1);
                    return var1;
                }
            };
            var1 = var3.bind(var5)(var1, var2);
            _closure2_slot19 = var1;
            var3 = _closure1_slot18;
            var20 = _closure1_slot0;
            var11 = _closure1_slot2;
            var1 = 33;
            var1 = var11[var1];
            var1 = var20.bind(var4)(var1);
            var2 = var1.ActionSheet;
            var1 = {};
            var9 = _closure1_slot17;
            var5 = 34;
            var5 = var11[var5];
            var5 = var20.bind(var4)(var5);
            var6 = var5.BottomSheetTitleHeader;
            var5 = {};
            var16 = 35;
            var13 = var11[var16];
            var13 = var20.bind(var4)(var13);
            var14 = var13.intl;
            var13 = var14.string;
            var11 = var11[var16];
            var11 = var20.bind(var4)(var11);
            var11 = var11.t;
            var11 = var11.qstQub;
            var11 = var13.bind(var14)(var11);
            var5['title'] = var11;
            var11 = null;
            if(!var19) { _fun0001_ip = 102; continue _fun0001 }
case 103:
            var20 = _closure1_slot17;
            var35 = _closure1_slot0;
            var25 = _closure1_slot2;
            var13 = 36;
            var13 = var25[var13];
            var13 = var35.bind(var4)(var13);
            var14 = var13.ActionSheetHeaderPressableText;
            var13 = {};
            var13['onPress'] = var26;
            var26 = var25[var16];
            var26 = var35.bind(var4)(var26);
            var29 = var26.intl;
            var26 = var29.string;
            var25 = var25[var16];
            var25 = var35.bind(var4)(var25);
            var25 = var25.t;
            var25 = var25.R3BPHx;
            var25 = var26.bind(var29)(var25);
            var13['label'] = var25;
            var11 = var20.bind(var4)(var14, var13);
case 102:
            var5['trailing'] = var11;
            var5 = var9.bind(var4)(var6, var5);
            var1['header'] = var5;
            var9 = _closure1_slot18;
            var6 = _closure1_slot5;
            var5 = {};
            var11 = var21.inputRow;
            var5['style'] = var11;
            var11 = {};
            var13 = var21.inputContainer;
            var11['style'] = var13;
            var26 = _closure1_slot17;
            var38 = _closure1_slot0;
            var20 = _closure1_slot2;
            var13 = 37;
            var14 = var20[var13];
            var14 = var38.bind(var4)(var14);
            var25 = var14.PressableOpacity;
            var14 = {};
            var29 = var21.inputButton;
            var14['style'] = var29;
            var29 = var20[var16];
            var29 = var38.bind(var4)(var29);
            var35 = var29.intl;
            var29 = var35.string;
            var20 = var20[var16];
            var20 = var38.bind(var4)(var20);
            var20 = var20.t;
            var20 = var20.WkfRZG;
            var20 = var29.bind(var35)(var20);
            var14['accessibilityLabel'] = var20;
            var20 = {};
            var35 = var22 == var37;
            var29 = undefined;
            if(var35) { _fun0001_ip = 104; continue _fun0001 }
case 105:
            var29 = var37.name;
case 104:
            var20['text'] = var29;
            var14['accessibilityValue'] = var20;
            var20 = 'button';
            var14['accessibilityRole'] = var20;
            var14['onPress'] = var27;
            if(var34) { _fun0001_ip = 106; continue _fun0001 }
case 107:
            if(!var32) { _fun0001_ip = 106; continue _fun0001 }
case 108:
            var35 = _closure1_slot17;
            var29 = _closure1_slot1;
            var38 = _closure1_slot2;
            var27 = 26;
            var27 = var38[var27];
            var29 = var29.bind(var4)(var27);
            var27 = {};
            var39 = _closure1_slot6;
            var38 = var39.getId;
            var38 = var38.bind(var39)();
            var27['userId'] = var38;
            var38 = 28;
            var27['size'] = var38;
            var38 = var21.emojiStyle;
            var27['emojiStyle'] = var38;
            var38 = {};
            var39 = _closure1_slot14;
            var39 = var39.HANG_STATUS;
            var38['type'] = var39;
            var38['state'] = var30;
            var27['hangStatusActivity'] = var38;
            var27['fallbackVariant'] = var36;
            var27 = var35.bind(var4)(var29, var27);
            _fun0001_ip = 109; continue _fun0001;
case 106:
            var36 = _closure1_slot17;
            var35 = _closure1_slot1;
            var38 = _closure1_slot2;
            var29 = 28;
            var29 = var38[var29];
            var35 = var35.bind(var4)(var29);
            var29 = {'size': 20, 'emoji': null, 'withPlaceholder': true};
            var29['emoji'] = var37;
            var27 = var36.bind(var4)(var35, var29);
case 109:
            var14['children'] = var27;
            var25 = var26.bind(var4)(var25, var14);
            var14 = new Array(3);
            var14[0] = var25;
            var27 = _closure1_slot17;
            var37 = _closure1_slot0;
            var29 = _closure1_slot2;
            var25 = 38;
            var25 = var29[var25];
            var25 = var37.bind(var4)(var25);
            var26 = var25.BottomSheetTextInput;
            var25 = {};
            var35 = var21.input;
            var25['style'] = var35;
            var35 = _closure1_slot12;
            var25['maxLength'] = var35;
            var35 = var29[var16];
            var35 = var37.bind(var4)(var35);
            var38 = var35.intl;
            var36 = var38.string;
            var35 = var29[var16];
            var35 = var37.bind(var4)(var35);
            var35 = var35.t;
            var35 = var35.KPop4u;
            var35 = var36.bind(var38)(var35);
            var25['placeholder'] = var35;
            var35 = var29[var16];
            var35 = var37.bind(var4)(var35);
            var36 = var35.intl;
            var35 = var36.string;
            var29 = var29[var16];
            var29 = var37.bind(var4)(var29);
            var29 = var29.t;
            var29 = var29.xalUlZ;
            var29 = var35.bind(var36)(var29);
            var25['accessibilityLabel'] = var29;
            var29 = 'blurAndSubmit';
            var25['submitBehavior'] = var29;
            var29 = var33;
            if(var34) { _fun0001_ip = 110; continue _fun0001 }
case 111:
            var29 = var33;
            if(!var32) { _fun0001_ip = 110; continue _fun0001 }
case 112:
            var31 = var31[var30];
            var32 = var22 == var31;
            var30 = undefined;
            if(var32) { _fun0001_ip = 113; continue _fun0001 }
case 114:
            var30 = var31.title;
case 113:
            var29 = var30;
case 110:
            var25['value'] = var29;
            var25['onChangeText'] = var28;
            var28 = 'none';
            var25['autoCapitalize'] = var28;
            var25 = var27.bind(var4)(var26, var25);
            var14[1] = var25;
            if(!(var22 == var23)) { _fun0001_ip = 115; continue _fun0001 }
case 116:
            var23 = var22 == var15;
            var15 = null;
            if(var23) { _fun0001_ip = 117; continue _fun0001 }
case 115:
            var15 = null;
            if(var19) { _fun0001_ip = 117; continue _fun0001 }
case 118:
            var23 = _closure1_slot17;
            var25 = _closure1_slot0;
            var26 = _closure1_slot2;
            var19 = var26[var13];
            var19 = var25.bind(var4)(var19);
            var22 = var19.PressableOpacity;
            var19 = {};
            var27 = var21.inputButton;
            var19['style'] = var27;
            var27 = var26[var16];
            var27 = var25.bind(var4)(var27);
            var29 = var27.intl;
            var28 = var29.string;
            var27 = var26[var16];
            var27 = var25.bind(var4)(var27);
            var27 = var27.t;
            var27 = var27.VkKicX;
            var27 = var28.bind(var29)(var27);
            var19['accessibilityLabel'] = var27;
            var19['accessibilityRole'] = var20;
            var19['onPress'] = var24;
            var24 = 39;
            var24 = var26[var24];
            var24 = var25.bind(var4)(var24);
            var25 = var24.TrashIcon;
            var24 = {};
            var26 = 'sm';
            var24['size'] = var26;
            var24 = var23.bind(var4)(var25, var24);
            var19['children'] = var24;
            var15 = var23.bind(var4)(var22, var19);
case 117:
            var14[2] = var15;
            var11['children'] = var14;
            var14 = var9.bind(var4)(var6, var11);
            var11 = new Array(2);
            var11[0] = var14;
            var15 = _closure1_slot17;
            var19 = _closure1_slot0;
            var22 = _closure1_slot2;
            var13 = var22[var13];
            var13 = var19.bind(var4)(var13);
            var14 = var13.PressableOpacity;
            var13 = {};
            var21 = var21.randomizeButton;
            var13['style'] = var21;
            var21 = var22[var16];
            var21 = var19.bind(var4)(var21);
            var24 = var21.intl;
            var23 = var24.string;
            var21 = var22[var16];
            var21 = var19.bind(var4)(var21);
            var21 = var21.t;
            var21 = var21.5UAi5+;
            var21 = var23.bind(var24)(var21);
            var13['accessibilityLabel'] = var21;
            var13['accessibilityRole'] = var20;
            var13['onPress'] = var18;
            var18 = 40;
            var18 = var22[var18];
            var18 = var19.bind(var4)(var18);
            var19 = var18.DiceIcon;
            var18 = {};
            var20 = 'sm';
            var18['size'] = var20;
            var21 = _closure1_slot1;
            var20 = 11;
            var20 = var22[var20];
            var20 = var21.bind(var4)(var20);
            var20 = var20.colors;
            var20 = var20.ICON_PRIMARY;
            var18['color'] = var20;
            var18 = var15.bind(var4)(var19, var18);
            var13['children'] = var18;
            var13 = var15.bind(var4)(var14, var13);
            var11[1] = var13;
            var5['children'] = var11;
            var6 = var9.bind(var4)(var6, var5);
            var5 = new Array(3);
            var5[0] = var6;
            var6 = var17.length;
            var6 = var6 > var8;
            if(!var6) { _fun0001_ip = 119; continue _fun0001 }
case 120:
            var13 = _closure1_slot17;
            var19 = _closure1_slot0;
            var14 = _closure1_slot2;
            var9 = 41;
            var9 = var14[var9];
            var9 = var19.bind(var4)(var9);
            var11 = var9.TableRowGroup;
            var9 = {};
            var15 = var14[var16];
            var15 = var19.bind(var4)(var15);
            var18 = var15.intl;
            var15 = var18.string;
            var14 = var14[var16];
            var14 = var19.bind(var4)(var14);
            var14 = var14.t;
            var14 = var14.3XKWcH;
            var14 = var15.bind(var18)(var14);
            var9['title'] = var14;
            var15 = var17.map;
            var14 = function(arg1, arg2) {
                var5 = _closure2_slot19;
                var4 = undefined;
                var3 = arg1;
                var2 = arg2;
                var1 = 'favorite';
                var1 = var5.bind(var4)(var3, var2, var1);
                return var1;
            };
            var14 = var15.bind(var17)(var14);
            var9['children'] = var14;
            var6 = var13.bind(var4)(var11, var9);
case 119:
            var5[1] = var6;
            var6 = var12.length;
            var6 = var6 > var8;
            if(!var6) { _fun0001_ip = 121; continue _fun0001 }
case 122:
            var9 = _closure1_slot17;
            var15 = _closure1_slot0;
            var11 = _closure1_slot2;
            var7 = 41;
            var7 = var11[var7];
            var7 = var15.bind(var4)(var7);
            var8 = var7.TableRowGroup;
            var7 = {};
            var13 = var11[var16];
            var13 = var15.bind(var4)(var13);
            var14 = var13.intl;
            var13 = var14.string;
            var11 = var11[var16];
            var11 = var15.bind(var4)(var11);
            var11 = var11.t;
            var11 = var11.+9QSnp;
            var11 = var13.bind(var14)(var11);
            var7['title'] = var11;
            var11 = var12.map;
            var10 = function(arg1, arg2) {
                var5 = _closure2_slot19;
                var4 = undefined;
                var3 = arg1;
                var2 = arg2;
                var1 = 'recent';
                var1 = var5.bind(var4)(var3, var2, var1);
                return var1;
            };
            var10 = var11.bind(var12)(var10);
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 121:
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();