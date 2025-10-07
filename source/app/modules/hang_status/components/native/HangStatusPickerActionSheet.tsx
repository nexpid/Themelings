// app/modules/hang_status/components/native/HangStatusPickerActionSheet.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
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
        var9 = {'display': 'flex', 'flexDirection': 'row', 'gap': null, 'alignItems': 'center', 'width': '100%', 'paddingHorizontal': 16, 'paddingBottom': 16};
        var10 = 11;
        var13 = var6[var10];
        var13 = var11.bind(var1)(var13);
        var13 = var13.spacing;
        var13 = var13.PX_8;
        var9['gap'] = var13;
        var15 = 16;
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
        var9 = {'paddingHorizontal': 16, 'gap': 16};
        var4['statusSections'] = var9;
        var12 = 24;
        var9 = {'height': 24, 'width': 24};
        var4['emojiStyle'] = var9;
        var9 = {};
        var14 = 12;
        var13 = var6[var14];
        var16 = var5.bind(var1)(var13);
        var13 = var16.isIOS;
        var17 = var13.bind(var16)();
        var13 = 20;
        var16 = var13;
        if(!var17) { _fun0001_ip = 2; continue _fun0001 }
case 3:
        var16 = var12;
case 2:
        var9['fontSize'] = var16;
        var16 = var6[var14];
        var17 = var5.bind(var1)(var16);
        var16 = var17.isIOS;
        var17 = var16.bind(var17)();
        var16 = 28;
        if(var17) { _fun0001_ip = 4; continue _fun0001 }
case 5:
        var16 = var12;
case 4:
        var9['lineHeight'] = var16;
        var4['emojiStyleText'] = var9;
        var9 = {'height': 20, 'width': 20};
        var4['inputEmojiStyle'] = var9;
        var9 = {};
        var16 = var6[var14];
        var17 = var5.bind(var1)(var16);
        var16 = var17.isIOS;
        var16 = var16.bind(var17)();
        if(!var16) { _fun0001_ip = 6; continue _fun0001 }
case 7:
        var15 = var13;
case 6:
        var9['fontSize'] = var15;
        var14 = var6[var14];
        var15 = var5.bind(var1)(var14);
        var14 = var15.isIOS;
        var14 = var14.bind(var15)();
        if(var14) { _fun0001_ip = 8; continue _fun0001 }
case 9:
        var12 = var13;
case 8:
        var9['lineHeight'] = var12;
        var4['inputEmojiStyleText'] = var9;
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
        var4 = 45;
        var4 = var6[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.fileFinishedImporting;
        var4 = 'modules/hang_status/components/native/HangStatusPickerActionSheet.tsx';
        var4 = var5.bind(var6)(var4);
        var2 = function HangStatusPickerActionSheet(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var1 = arg1;
                var18 = var1.initialStatusType;
                var7 = var1.initialStatusText;
                var17 = var1.initialStatusEmoji;
                var8 = var1.channelId;
                var _closure2_slot0 = var8;
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
                var10 = var1.bind(var4)();
                var _closure2_slot1 = var10;
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 13;
                var2 = var5[var1];
                var12 = var3.bind(var4)(var2);
                var9 = var12.useStateFromStores;
                var2 = _closure1_slot7;
                var6 = new Array(1);
                var6[0] = var2;
                var2 = function() {
                    var3 = _closure1_slot7;
                    var2 = var3.getChannel;
                    var1 = _closure2_slot0;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var6 = var9.bind(var12)(var6, var2);
                var _closure2_slot2 = var6;
                var2 = var5[var1];
                var15 = var3.bind(var4)(var2);
                var13 = var15.useStateFromStores;
                var2 = _closure1_slot8;
                var12 = new Array(1);
                var12[0] = var2;
                var9 = function() {
                    var2 = _closure1_slot8;
                    var1 = var2.getCustomHangStatus;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var24 = var13.bind(var15)(var12, var9);
                var _closure2_slot3 = var24;
                var9 = var5[var1];
                var13 = var3.bind(var4)(var9);
                var12 = var13.useStateFromStores;
                var9 = new Array(1);
                var9[0] = var2;
                var2 = function() {
                    var2 = _closure1_slot8;
                    var1 = var2.getCurrentHangStatus;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var15 = var12.bind(var13)(var9, var2);
                var9 = _closure1_slot1;
                var2 = 14;
                var2 = var5[var2];
                var2 = var9.bind(var4)(var2);
                var16 = var2.bind(var4)();
                var2 = 15;
                var2 = var5[var2];
                var5 = var3.bind(var4)(var2);
                var3 = var5.useHangStatusExperiment;
                var2 = {};
                var21 = null;
                var12 = var21 == var6;
                var9 = undefined;
                if(var12) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                var9 = var6.guild_id;
case 10:
                var2['guildId'] = var9;
                var9 = 'HangStatusPickerActionSheet';
                var2['location'] = var9;
                var2 = var3.bind(var5)(var2);
                var37 = var2.defaultStatusVariant;
                _closure2_slot4 = var37;
                var5 = var2.allowPermanentClear;
                _closure2_slot5 = var5;
                var2 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = var9[var1];
                var12 = var2.bind(var4)(var1);
                var3 = var12.useStateFromStores;
                var1 = _closure1_slot8;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() {
                    var2 = _closure1_slot8;
                    var1 = var2.getFavoritedStatuses;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var19 = var3.bind(var12)(var2, var1);
                var3 = _closure1_slot4;
                var12 = var3.useMemo;
                var2 = new Array(1);
                var2[0] = var37;
                var1 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 16;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.getHangStatusOptions;
                    var1 = _closure2_slot4;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var32 = var12.bind(var3)(var1, var2);
                _closure2_slot6 = var32;
                var2 = _closure1_slot1;
                var1 = 17;
                var1 = var9[var1];
                var1 = var2.bind(var4)(var1);
                var1 = var1.bind(var4)();
                var9 = var1.bottom;
                var2 = var3.useState;
                if(!(var21 == var7)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                var12 = var21 == var24;
                var1 = undefined;
                if(var12) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                var1 = var24.status;
case 14:
                var7 = var1;
case 12:
                var12 = var21 != var7;
                var1 = undefined;
                if(!var12) { _fun0002_ip = 16; continue _fun0002 }
case 17:
                var1 = var7;
case 16:
                var2 = var2.bind(var3)(var1);
                var1 = _closure1_slot3;
                var13 = 2;
                var1 = var1.bind(var4)(var2, var13);
                var12 = 0;
                var34 = var1[var12];
                _closure2_slot7 = var34;
                var3 = 1;
                var1 = var1[var3];
                _closure2_slot8 = var1;
                var7 = _closure1_slot4;
                var2 = var7.useState;
                var1 = var15;
                if(!(var21 != var18)) { _fun0002_ip = 18; continue _fun0002 }
case 19:
                var1 = var18;
case 18:
                if(!(var21 == var1)) { _fun0002_ip = 20; continue _fun0002 }
case 21:
                var20 = var21 != var24;
                var18 = undefined;
                if(!var20) { _fun0002_ip = 22; continue _fun0002 }
case 23:
                var20 = _closure1_slot9;
                var18 = var20.CUSTOM;
case 22:
                var1 = var18;
case 20:
                var2 = var2.bind(var7)(var1);
                var1 = _closure1_slot3;
                var1 = var1.bind(var4)(var2, var13);
                var31 = var1[var12];
                _closure2_slot9 = var31;
                var1 = var1[var3];
                _closure2_slot10 = var1;
                var7 = _closure1_slot4;
                var2 = var7.useState;
                if(!(var21 == var17)) { _fun0002_ip = 3; continue _fun0002 }
case 24:
                var18 = var21 == var24;
                var1 = undefined;
                if(var18) { _fun0002_ip = 25; continue _fun0002 }
case 26:
                var1 = var24.emoji;
case 25:
                var17 = var1;
case 3:
                var18 = var21 != var17;
                var1 = undefined;
                if(!var18) { _fun0002_ip = 27; continue _fun0002 }
case 28:
                var1 = var17;
case 27:
                var1 = var2.bind(var7)(var1);
                var7 = _closure1_slot3;
                var1 = var7.bind(var4)(var1, var13);
                var39 = var1[var12];
                _closure2_slot11 = var39;
                var1 = var1[var3];
                _closure2_slot12 = var1;
                var2 = _closure1_slot1;
                var17 = _closure1_slot2;
                var1 = 18;
                var1 = var17[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.bind(var4)(var6);
                _closure2_slot13 = var2;
                var18 = _closure1_slot4;
                var17 = var18.useState;
                var1 = false;
                var1 = var17.bind(var18)(var1);
                var1 = var7.bind(var4)(var1, var13);
                var35 = var1[var12];
                var1 = var1[var3];
                _closure2_slot14 = var1;
                var33 = var21 != var31;
                if(!var33) { _fun0002_ip = 29; continue _fun0002 }
case 30:
                var3 = _closure1_slot13;
                var1 = var3.includes;
                var33 = var1.bind(var3)(var31);
case 29:
                var7 = _closure1_slot4;
                var13 = var7.useMemo;
                var3 = new Array(3);
                var3[0] = var34;
                var3[1] = var39;
                var3[2] = var24;
                var1 = function() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var1 = _closure2_slot7;
                        var3 = null;
                        var1 = var3 != var1;
                        if(!var1) { _fun0003_ip = 31; continue _fun0003 }
case 32:
                        var4 = _closure2_slot7;
                        var2 = var4.trim;
                        var4 = var2.bind(var4)();
                        var2 = '';
                        var1 = var2 !== var4;
case 31:
                        if(!var1) { _fun0003_ip = 33; continue _fun0003 }
case 34:
                        var4 = _closure2_slot7;
                        var2 = _closure2_slot3;
                        var5 = var3 == var2;
                        var6 = undefined;
                        var2 = undefined;
                        if(var5) { _fun0003_ip = 35; continue _fun0003 }
case 36:
                        var5 = _closure2_slot3;
                        var2 = var5.status;
case 35:
                        var2 = var4 !== var2;
                        if(var2) { _fun0003_ip = 37; continue _fun0003 }
case 38:
                        var5 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var4 = 19;
                        var4 = var7[var4];
                        var5 = var5.bind(var6)(var4);
                        var4 = _closure2_slot11;
                        var7 = _closure2_slot3;
                        var9 = var3 == var7;
                        var7 = undefined;
                        if(var9) { _fun0003_ip = 39; continue _fun0003 }
case 40:
                        var8 = _closure2_slot3;
                        var7 = var8.emoji;
case 39:
                        var8 = var3 != var7;
                        var3 = undefined;
                        if(!var8) { _fun0003_ip = 41; continue _fun0003 }
case 42:
                        var3 = var7;
case 41:
                        var3 = var5.bind(var6)(var4, var3);
                        var2 = !var3;
case 37:
                        var1 = var2;
case 33:
                        return var1;
                    }
                };
                var18 = var13.bind(var7)(var1, var3);
                var13 = var7.useCallback;
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
                var1 = var13.bind(var7)(var3, var1);
                _closure2_slot15 = var1;
                var17 = var7.useCallback;
                var13 = new Array(3);
                var13[0] = var39;
                var13[1] = var34;
                var13[2] = var31;
                var3 = function(arg1, arg2, arg3) {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        var8 = arg1;
                        var6 = arg2;
                        var5 = arg3;
                        var3 = null;
                        if(!(var3 == var8)) { _fun0004_ip = 43; continue _fun0004 }
case 44:
                        var8 = _closure2_slot9;
case 43:
                        if(!(var3 == var6)) { _fun0004_ip = 45; continue _fun0004 }
case 46:
                        var6 = _closure2_slot7;
case 45:
                        if(!(var3 == var5)) { _fun0004_ip = 47; continue _fun0004 }
case 48:
                        var5 = _closure2_slot11;
case 47:
                        if(!(var3 == var5)) { _fun0004_ip = 49; continue _fun0004 }
case 50:
                        var5 = {'id': null, 'name': '💭', 'animated': false};
case 49:
                        var1 = _closure1_slot9;
                        var1 = var1.CUSTOM;
                        if(!(var8 !== var1)) { _fun0004_ip = 51; continue _fun0004 }
case 52:
                        var7 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var1 = 20;
                        var4 = var4[var1];
                        var1 = undefined;
                        var7 = var7.bind(var1)(var4);
                        var4 = var7.updateHangStatus;
                        var1 = true;
                        var1 = var4.bind(var7)(var8, var1);
                        _fun0004_ip = 53; continue _fun0004;
case 51:
                        var1 = var3 != var6;
                        if(!var1) { _fun0004_ip = 54; continue _fun0004 }
case 55:
                        var4 = var6.trim;
                        var7 = var4.bind(var6)();
                        var4 = '';
                        var1 = var4 !== var7;
case 54:
                        if(!var1) { _fun0004_ip = 33; continue _fun0004 }
case 56:
                        var1 = var3 != var5;
case 33:
                        if(!var1) { _fun0004_ip = 53; continue _fun0004 }
case 57:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 20;
                        var3 = var3[var1];
                        var1 = undefined;
                        var4 = var4.bind(var1)(var3);
                        var3 = var4.updateCustomHangStatus;
                        var1 = true;
                        var1 = var3.bind(var4)(var6, var5, var1);
case 53:
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 21;
                        var3 = var3[var1];
                        var1 = undefined;
                        var4 = var4.bind(var1)(var3);
                        var3 = var4.hideActionSheet;
                        var2 = _closure1_slot10;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    }
                };
                var3 = var17.bind(var7)(var3, var13);
                _closure2_slot16 = var3;
                var20 = var7.useCallback;
                var17 = function(arg1) {
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
                var29 = var20.bind(var7)(var17, var13);
                var17 = var7.useCallback;
                var13 = new Array(2);
                var13[0] = var34;
                var13[1] = var8;
                var8 = function(arg1) {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                        var1 = arg1;
                        var6 = {};
                        var2 = var1.id;
                        var6['id'] = var2;
                        var3 = var1.id;
                        var2 = null;
                        if(!(var2 == var3)) { _fun0005_ip = 58; continue _fun0005 }
case 59:
                        var3 = var1.surrogates;
                        if(!(var2 != var3)) { _fun0005_ip = 58; continue _fun0005 }
case 60:
                        var4 = var1.surrogates;
                        var3 = '';
                        if(!(var3 === var4)) { _fun0005_ip = 61; continue _fun0005 }
case 58:
                        var3 = var1.name;
                        var4 = var2 != var3;
                        var2 = '';
                        if(!var4) { _fun0005_ip = 62; continue _fun0005 }
case 63:
                        var2 = var3;
case 62:
                        _fun0005_ip = 64; continue _fun0005;
case 61:
                        var2 = var1.surrogates;
case 64:
                        var6['name'] = var2;
                        var1 = var1.animated;
                        var6['animated'] = var1;
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 22;
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
                var8 = var17.bind(var7)(var8, var13);
                _closure2_slot17 = var8;
                var17 = var7.useCallback;
                var13 = new Array(1);
                var13[0] = var8;
                var8 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 23;
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
                var28 = var17.bind(var7)(var8, var13);
                var13 = var7.useCallback;
                var8 = new Array(2);
                var8[0] = var3;
                var8[1] = var1;
                var1 = function(arg1) {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                        var4 = arg1;
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 24;
                        var2 = var2[var1];
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        var6 = var2.bind(var1)(var4);
                        var3 = _closure2_slot16;
                        if(var6) { _fun0006_ip = 65; continue _fun0006 }
case 66:
                        var5 = _closure1_slot9;
                        var7 = var5.CUSTOM;
                        var6 = var4.status;
                        var8 = var4.emoji;
                        var5 = null;
                        var9 = var5 != var8;
                        var5 = undefined;
                        if(!var9) { _fun0006_ip = 67; continue _fun0006 }
case 68:
                        var5 = var8;
case 67:
                        var5 = var3.bind(var1)(var7, var6, var5);
                        _fun0006_ip = 69; continue _fun0006;
case 65:
                        var3 = var3.bind(var1)(var4);
                        var2 = _closure2_slot15;
                        var2 = var2.bind(var1)();
case 69:
                        return var1;
                    }
                };
                var1 = var13.bind(var7)(var1, var8);
                _closure2_slot18 = var1;
                var13 = var7.useCallback;
                var8 = new Array(1);
                var8[0] = var5;
                var5 = function() {
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var1 = 20;
                    var3 = var5[var1];
                    var1 = undefined;
                    var7 = var4.bind(var1)(var3);
                    var6 = var7.clearHangStatus;
                    var4 = _closure2_slot5;
                    var3 = true;
                    var3 = var6.bind(var7)(var3, var4);
                    var4 = _closure1_slot1;
                    var3 = 21;
                    var3 = var5[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.hideActionSheet;
                    var2 = _closure1_slot10;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var25 = var13.bind(var7)(var5, var8);
                var8 = var7.useCallback;
                var5 = new Array(3);
                var5[0] = var34;
                var5[1] = var39;
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
                    var3 = 21;
                    var3 = var5[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.hideActionSheet;
                    var2 = _closure1_slot10;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var27 = var8.bind(var7)(var3, var5);
                var5 = var7.useCallback;
                var3 = new Array(3);
                var3[0] = var39;
                var3[1] = var2;
                var8 = var21 == var6;
                var2 = undefined;
                if(var8) { _fun0002_ip = 70; continue _fun0002 }
case 71:
                var2 = var6.id;
case 70:
                var3[2] = var2;
                var2 = function() {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                        var8 = null;
                        var1 = undefined;
                        var16 = 19;
                        var15 = 1;
                        var14 = '';
                        var13 = 25;
                        var12 = 0;
                        var11 = null;
                        var10 = null;
                        var9 = undefined;
                        var6 = undefined;
case 45:
                        var3 = _closure2_slot13;
                        var4 = var3.length;
                        var3 = var11;
                        var5 = var10;
                        if(!(var12 !== var4)) { _fun0007_ip = 72; continue _fun0007 }
case 73:
                        var17 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var4 = var4[var13];
                        var18 = var17.bind(var1)(var4);
                        var17 = var18.sample;
                        var4 = _closure2_slot13;
                        var18 = var17.bind(var18)(var4);
                        var17 = var8 == var18;
                        var4 = undefined;
                        if(var17) { _fun0007_ip = 74; continue _fun0007 }
case 75:
                        var4 = var18.id;
case 74:
                        if(!(var8 == var4)) { _fun0007_ip = 76; continue _fun0007 }
case 77:
                        var17 = {'id': null, 'name': null, 'animated': false};
                        var4 = var8 == var18;
                        var20 = undefined;
                        if(var4) { _fun0007_ip = 42; continue _fun0007 }
case 78:
                        var20 = var18.optionallyDiverseSequence;
case 42:
                        var19 = var8 != var20;
                        var4 = var14;
                        if(!var19) { _fun0007_ip = 79; continue _fun0007 }
case 80:
                        var4 = var20;
case 79:
                        var17['name'] = var4;
                        var19 = var18;
                        _fun0007_ip = 81; continue _fun0007;
case 76:
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
case 81:
                        var4 = _closure2_slot13;
                        var4 = var4.length;
                        var3 = var18;
                        var5 = var17;
                        if(!(var15 !== var4)) { _fun0007_ip = 72; continue _fun0007 }
case 82:
                        var11 = var18;
                        var10 = var17;
                        var9 = var20;
                        var6 = var19;
                        if(var8 == var18) { _fun0007_ip = 45; continue _fun0007 }
case 83:
                        var4 = var18.name;
                        var11 = var18;
                        var10 = var17;
                        var9 = var20;
                        var6 = var19;
                        if(var8 == var4) { _fun0007_ip = 45; continue _fun0007 }
case 84:
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
                        if(var4) { _fun0007_ip = 45; continue _fun0007 }
case 72:
                        var4 = var8 != var5;
                        if(!var4) { _fun0007_ip = 85; continue _fun0007 }
case 86:
                        var9 = var8 == var3;
                        var6 = undefined;
                        if(var9) { _fun0007_ip = 87; continue _fun0007 }
case 88:
                        var6 = var3.name;
case 87:
                        var4 = var8 != var6;
case 85:
                        if(!var4) { _fun0007_ip = 89; continue _fun0007 }
case 90:
                        var4 = _closure2_slot12;
                        var4 = var4.bind(var1)(var5);
                        var4 = _closure2_slot8;
                        var3 = var3.name;
                        var3 = var4.bind(var1)(var3);
                        var4 = _closure2_slot14;
                        var3 = true;
                        var3 = var4.bind(var1)(var3);
                        var6 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var3 = 26;
                        var3 = var9[var3];
                        var5 = var6.bind(var1)(var3);
                        var4 = var5.track;
                        var2 = _closure1_slot15;
                        var3 = var2.HANG_STATUS_RANDOMIZER_CLICKED;
                        var2 = 27;
                        var2 = var9[var2];
                        var6 = var6.bind(var1)(var2);
                        var2 = _closure2_slot2;
                        var8 = var8 == var2;
                        var2 = undefined;
                        if(var8) { _fun0007_ip = 91; continue _fun0007 }
case 92:
                        var7 = _closure2_slot2;
                        var2 = var7.id;
case 91:
                        var2 = var6.bind(var1)(var2);
                        var2 = var4.bind(var5)(var3, var2);
case 89:
                        return var1;
                    }
                };
                var22 = var5.bind(var7)(var2, var3);
                var5 = _closure1_slot4;
                var3 = var5.useCallback;
                var2 = new Array(5);
                var2[0] = var6;
                var2[1] = var37;
                var2[2] = var1;
                var2[3] = var32;
                var2[4] = var10;
                var1 = function(arg1, arg2, arg3) {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                        var7 = arg1;
                        var _closure3_slot0 = var7;
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var18 = 24;
                        var1 = var1[var18];
                        var5 = undefined;
                        var1 = var2.bind(var5)(var1);
                        var1 = var1.bind(var5)(var7);
                        var10 = null;
                        var13 = null;
                        if(!var1) { _fun0008_ip = 93; continue _fun0008 }
case 94:
                        var2 = _closure2_slot6;
                        var13 = var2[var7];
case 93:
                        var4 = _closure1_slot18;
                        var3 = _closure1_slot5;
                        var11 = {};
                        var15 = _closure2_slot1;
                        var2 = var15.row;
                        var11['style'] = var2;
                        var16 = _closure1_slot17;
                        var14 = _closure1_slot1;
                        var17 = _closure1_slot2;
                        if(var1) { _fun0008_ip = 95; continue _fun0008 }
case 69:
                        var2 = 30;
                        var2 = var17[var2];
                        var12 = var14.bind(var5)(var2);
                        var2 = {};
                        var2['size'] = var18;
                        var19 = var7.emoji;
                        var2['emoji'] = var19;
                        var12 = var16.bind(var5)(var12, var2);
                        var2 = new Array(2);
                        var2[0] = var12;
                        var19 = _closure1_slot0;
                        var12 = 29;
                        var12 = var17[var12];
                        var12 = var19.bind(var5)(var12);
                        var19 = var12.Text;
                        var12 = {};
                        var20 = 'text-md/semibold';
                        var12['variant'] = var20;
                        var20 = var7.status;
                        var12['children'] = var20;
                        var12 = var16.bind(var5)(var19, var12);
                        var2[1] = var12;
                        var11['children'] = var2;
                        var2 = var11;
                        _fun0008_ip = 96; continue _fun0008;
case 95:
                        var12 = 28;
                        var12 = var17[var12];
                        var14 = var14.bind(var5)(var12);
                        var12 = {};
                        var20 = _closure1_slot6;
                        var19 = var20.getId;
                        var19 = var19.bind(var20)();
                        var12['userId'] = var19;
                        var12['size'] = var18;
                        var18 = var15.emojiStyle;
                        var12['emojiStyle'] = var18;
                        var15 = var15.emojiStyleText;
                        var12['textEmojiStyle'] = var15;
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
                        var14 = 29;
                        var14 = var17[var14];
                        var14 = var15.bind(var5)(var14);
                        var15 = var14.Text;
                        var14 = {};
                        var17 = 'text-md/semibold';
                        var14['variant'] = var17;
                        var17 = var10 == var13;
                        var18 = undefined;
                        if(var17) { _fun0008_ip = 97; continue _fun0008 }
case 98:
                        var18 = var13.title;
case 97:
                        var19 = var10 != var18;
                        var17 = '';
                        if(!var19) { _fun0008_ip = 99; continue _fun0008 }
case 100:
                        var17 = var18;
case 99:
                        var14['children'] = var17;
                        var14 = var16.bind(var5)(var15, var14);
                        var12[1] = var14;
                        var11['children'] = var12;
                        var2 = var11;
case 96:
                        var11 = var4.bind(var5)(var3, var2);
                        var4 = _closure1_slot17;
                        var3 = _closure1_slot0;
                        var12 = _closure1_slot2;
                        var2 = 31;
                        var2 = var12[var2];
                        var2 = var3.bind(var5)(var2);
                        var3 = var2.TableRow;
                        var2 = {};
                        if(var1) { _fun0008_ip = 101; continue _fun0008 }
case 102:
                        var12 = var7.status;
                        _fun0008_ip = 103; continue _fun0008;
case 101:
                        var15 = var10 == var13;
                        var14 = undefined;
                        if(var15) { _fun0008_ip = 104; continue _fun0008 }
case 105:
                        var14 = var13.title;
case 104:
                        var15 = var10 != var14;
                        var13 = '';
                        if(!var15) { _fun0008_ip = 15; continue _fun0008 }
case 106:
                        var13 = var14;
case 15:
                        var12 = var13;
case 103:
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
                            var1 = 21;
                            var4 = var3[var1];
                            var1 = undefined;
                            var7 = var5.bind(var1)(var4);
                            var6 = var7.openLazy;
                            var5 = _closure1_slot0;
                            var4 = 33;
                            var4 = var3[var4];
                            var5 = var5.bind(var1)(var4);
                            var4 = 32;
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
                        if(!var1) { _fun0008_ip = 107; continue _fun0008 }
case 108:
                        var9 = var7.emoji;
                        var1 = var10 != var9;
case 107:
                        if(!var1) { _fun0008_ip = 109; continue _fun0008 }
case 110:
                        var9 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var8 = 34;
                        var8 = var10[var8];
                        var9 = var9.bind(var5)(var8);
                        var8 = var9.canUseEmojiForHangStatus;
                        var7 = var7.emoji;
                        var6 = _closure2_slot2;
                        var6 = var8.bind(var9)(var7, var6);
                        var1 = !var6;
case 109:
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
                var23 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 35;
                var1 = var8[var1];
                var1 = var23.bind(var4)(var1);
                var2 = var1.BottomSheet;
                var1 = {};
                var38 = true;
                var1['scrollable'] = var38;
                var7 = _closure1_slot17;
                var5 = 36;
                var5 = var8[var5];
                var5 = var23.bind(var4)(var5);
                var6 = var5.BottomSheetTitleHeader;
                var5 = {};
                var20 = 37;
                var13 = var8[var20];
                var13 = var23.bind(var4)(var13);
                var17 = var13.intl;
                var13 = var17.string;
                var8 = var8[var20];
                var8 = var23.bind(var4)(var8);
                var8 = var8.t;
                var8 = var8.qstQub;
                var8 = var13.bind(var17)(var8);
                var5['title'] = var8;
                var8 = null;
                if(!var18) { _fun0002_ip = 111; continue _fun0002 }
case 112:
                var23 = _closure1_slot17;
                var36 = _closure1_slot0;
                var26 = _closure1_slot2;
                var13 = 38;
                var13 = var26[var13];
                var13 = var36.bind(var4)(var13);
                var17 = var13.ActionSheetHeaderPressableText;
                var13 = {};
                var13['onPress'] = var27;
                var27 = var26[var20];
                var27 = var36.bind(var4)(var27);
                var30 = var27.intl;
                var27 = var30.string;
                var26 = var26[var20];
                var26 = var36.bind(var4)(var26);
                var26 = var26.t;
                var26 = var26.R3BPHx;
                var26 = var27.bind(var30)(var26);
                var13['label'] = var26;
                var8 = var23.bind(var4)(var17, var13);
case 111:
                var5['trailing'] = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1['header'] = var5;
                var8 = _closure1_slot18;
                var6 = _closure1_slot5;
                var5 = {};
                var7 = var10.inputRow;
                var5['style'] = var7;
                var7 = {};
                var13 = var10.inputContainer;
                var7['style'] = var13;
                var27 = _closure1_slot17;
                var40 = _closure1_slot0;
                var23 = _closure1_slot2;
                var17 = 39;
                var13 = var23[var17];
                var13 = var40.bind(var4)(var13);
                var26 = var13.PressableOpacity;
                var13 = {};
                var30 = var10.inputButton;
                var13['style'] = var30;
                var30 = var23[var20];
                var30 = var40.bind(var4)(var30);
                var36 = var30.intl;
                var30 = var36.string;
                var23 = var23[var20];
                var23 = var40.bind(var4)(var23);
                var23 = var23.t;
                var23 = var23.WkfRZG;
                var23 = var30.bind(var36)(var23);
                var13['accessibilityLabel'] = var23;
                var23 = {};
                var36 = var21 == var39;
                var30 = undefined;
                if(var36) { _fun0002_ip = 113; continue _fun0002 }
case 114:
                var30 = var39.name;
case 113:
                var23['text'] = var30;
                var13['accessibilityValue'] = var23;
                var23 = 'button';
                var13['accessibilityRole'] = var23;
                var13['onPress'] = var28;
                if(var35) { _fun0002_ip = 115; continue _fun0002 }
case 116:
                if(!var33) { _fun0002_ip = 115; continue _fun0002 }
case 117:
                var36 = _closure1_slot17;
                var30 = _closure1_slot1;
                var40 = _closure1_slot2;
                var28 = 28;
                var28 = var40[var28];
                var30 = var30.bind(var4)(var28);
                var28 = {};
                var41 = _closure1_slot6;
                var40 = var41.getId;
                var40 = var40.bind(var41)();
                var28['userId'] = var40;
                var40 = 20;
                var28['size'] = var40;
                var40 = var10.inputEmojiStyle;
                var28['emojiStyle'] = var40;
                var40 = var10.inputEmojiStyleText;
                var28['textEmojiStyle'] = var40;
                var40 = {};
                var41 = _closure1_slot14;
                var41 = var41.HANG_STATUS;
                var40['type'] = var41;
                var40['state'] = var31;
                var28['hangStatusActivity'] = var40;
                var28['fallbackVariant'] = var37;
                var28 = var36.bind(var4)(var30, var28);
                _fun0002_ip = 118; continue _fun0002;
case 115:
                var37 = _closure1_slot17;
                var36 = _closure1_slot1;
                var40 = _closure1_slot2;
                var30 = 30;
                var30 = var40[var30];
                var36 = var36.bind(var4)(var30);
                var30 = {};
                var40 = var10.inputEmojiStyle;
                var30['style'] = var40;
                var40 = 20;
                var30['size'] = var40;
                var30['emoji'] = var39;
                var30['withPlaceholder'] = var38;
                var28 = var37.bind(var4)(var36, var30);
case 118:
                var13['children'] = var28;
                var26 = var27.bind(var4)(var26, var13);
                var13 = new Array(3);
                var13[0] = var26;
                var28 = _closure1_slot17;
                var38 = _closure1_slot0;
                var30 = _closure1_slot2;
                var26 = 40;
                var26 = var30[var26];
                var26 = var38.bind(var4)(var26);
                var27 = var26.BottomSheetTextInput;
                var26 = {};
                var36 = var10.input;
                var26['style'] = var36;
                var36 = _closure1_slot12;
                var26['maxLength'] = var36;
                var36 = var30[var20];
                var36 = var38.bind(var4)(var36);
                var39 = var36.intl;
                var37 = var39.string;
                var36 = var30[var20];
                var36 = var38.bind(var4)(var36);
                var36 = var36.t;
                var36 = var36.KPop4u;
                var36 = var37.bind(var39)(var36);
                var26['placeholder'] = var36;
                var36 = var30[var20];
                var36 = var38.bind(var4)(var36);
                var37 = var36.intl;
                var36 = var37.string;
                var30 = var30[var20];
                var30 = var38.bind(var4)(var30);
                var30 = var30.t;
                var30 = var30.xalUlZ;
                var30 = var36.bind(var37)(var30);
                var26['accessibilityLabel'] = var30;
                var30 = 'blurAndSubmit';
                var26['submitBehavior'] = var30;
                var30 = var34;
                if(var35) { _fun0002_ip = 119; continue _fun0002 }
case 120:
                var30 = var34;
                if(!var33) { _fun0002_ip = 119; continue _fun0002 }
case 121:
                var32 = var32[var31];
                var33 = var21 == var32;
                var31 = undefined;
                if(var33) { _fun0002_ip = 122; continue _fun0002 }
case 123:
                var31 = var32.title;
case 122:
                var30 = var31;
case 119:
                var26['value'] = var30;
                var26['onChangeText'] = var29;
                var29 = 'none';
                var26['autoCapitalize'] = var29;
                var26 = var28.bind(var4)(var27, var26);
                var13[1] = var26;
                if(!(var21 == var24)) { _fun0002_ip = 124; continue _fun0002 }
case 125:
                var24 = var21 == var15;
                var15 = null;
                if(var24) { _fun0002_ip = 126; continue _fun0002 }
case 124:
                var15 = null;
                if(var18) { _fun0002_ip = 126; continue _fun0002 }
case 127:
                var24 = _closure1_slot17;
                var26 = _closure1_slot0;
                var27 = _closure1_slot2;
                var18 = var27[var17];
                var18 = var26.bind(var4)(var18);
                var21 = var18.PressableOpacity;
                var18 = {};
                var28 = var10.inputButton;
                var18['style'] = var28;
                var28 = var27[var20];
                var28 = var26.bind(var4)(var28);
                var30 = var28.intl;
                var29 = var30.string;
                var28 = var27[var20];
                var28 = var26.bind(var4)(var28);
                var28 = var28.t;
                var28 = var28.VkKicX;
                var28 = var29.bind(var30)(var28);
                var18['accessibilityLabel'] = var28;
                var18['accessibilityRole'] = var23;
                var18['onPress'] = var25;
                var25 = 41;
                var25 = var27[var25];
                var25 = var26.bind(var4)(var25);
                var26 = var25.TrashIcon;
                var25 = {};
                var27 = 'sm';
                var25['size'] = var27;
                var25 = var24.bind(var4)(var26, var25);
                var18['children'] = var25;
                var15 = var24.bind(var4)(var21, var18);
case 126:
                var13[2] = var15;
                var7['children'] = var13;
                var7 = var8.bind(var4)(var6, var7);
                var15 = new Array(2);
                var15[0] = var7;
                var21 = _closure1_slot17;
                var7 = _closure1_slot0;
                var13 = _closure1_slot2;
                var17 = var13[var17];
                var17 = var7.bind(var4)(var17);
                var18 = var17.PressableOpacity;
                var17 = {};
                var24 = var10.randomizeButton;
                var17['style'] = var24;
                var24 = var13[var20];
                var24 = var7.bind(var4)(var24);
                var26 = var24.intl;
                var25 = var26.string;
                var24 = var13[var20];
                var24 = var7.bind(var4)(var24);
                var24 = var24.t;
                var24 = var24.5UAi5+;
                var24 = var25.bind(var26)(var24);
                var17['accessibilityLabel'] = var24;
                var17['accessibilityRole'] = var23;
                var17['onPress'] = var22;
                var22 = 42;
                var22 = var13[var22];
                var22 = var7.bind(var4)(var22);
                var23 = var22.DiceIcon;
                var22 = {};
                var24 = 'md';
                var22['size'] = var24;
                var25 = _closure1_slot1;
                var24 = 11;
                var24 = var13[var24];
                var24 = var25.bind(var4)(var24);
                var24 = var24.colors;
                var24 = var24.ICON_PRIMARY;
                var22['color'] = var24;
                var22 = var21.bind(var4)(var23, var22);
                var17['children'] = var22;
                var17 = var21.bind(var4)(var18, var17);
                var15[1] = var17;
                var5['children'] = var15;
                var6 = var8.bind(var4)(var6, var5);
                var5 = new Array(2);
                var5[0] = var6;
                var8 = _closure1_slot18;
                var6 = 43;
                var6 = var13[var6];
                var6 = var7.bind(var4)(var6);
                var7 = var6.BottomSheetScrollView;
                var6 = {};
                var13 = {};
                var13['paddingBottom'] = var9;
                var9 = new Array(2);
                var9[0] = var13;
                var10 = var10.statusSections;
                var9[1] = var10;
                var6['contentContainerStyle'] = var9;
                var9 = var19.length;
                var10 = var9 > var12;
                if(!var10) { _fun0002_ip = 128; continue _fun0002 }
case 129:
                var15 = _closure1_slot17;
                var22 = _closure1_slot0;
                var17 = _closure1_slot2;
                var9 = 44;
                var9 = var17[var9];
                var9 = var22.bind(var4)(var9);
                var13 = var9.TableRowGroup;
                var9 = {};
                var18 = var17[var20];
                var18 = var22.bind(var4)(var18);
                var21 = var18.intl;
                var18 = var21.string;
                var17 = var17[var20];
                var17 = var22.bind(var4)(var17);
                var17 = var17.t;
                var17 = var17.3XKWcH;
                var17 = var18.bind(var21)(var17);
                var9['title'] = var17;
                var18 = var19.map;
                var17 = function(arg1, arg2) {
                    var5 = _closure2_slot19;
                    var4 = undefined;
                    var3 = arg1;
                    var2 = arg2;
                    var1 = 'favorite';
                    var1 = var5.bind(var4)(var3, var2, var1);
                    return var1;
                };
                var17 = var18.bind(var19)(var17);
                var9['children'] = var17;
                var10 = var15.bind(var4)(var13, var9);
case 128:
                var9 = new Array(2);
                var9[0] = var10;
                var10 = var16.length;
                var10 = var10 > var12;
                if(!var10) { _fun0002_ip = 130; continue _fun0002 }
case 131:
                var13 = _closure1_slot17;
                var19 = _closure1_slot0;
                var15 = _closure1_slot2;
                var11 = 44;
                var11 = var15[var11];
                var11 = var19.bind(var4)(var11);
                var12 = var11.TableRowGroup;
                var11 = {};
                var17 = var15[var20];
                var17 = var19.bind(var4)(var17);
                var18 = var17.intl;
                var17 = var18.string;
                var15 = var15[var20];
                var15 = var19.bind(var4)(var15);
                var15 = var15.t;
                var15 = var15.+9QSnp;
                var15 = var17.bind(var18)(var15);
                var11['title'] = var15;
                var15 = var16.map;
                var14 = function(arg1, arg2) {
                    var5 = _closure2_slot19;
                    var4 = undefined;
                    var3 = arg1;
                    var2 = arg2;
                    var1 = 'recent';
                    var1 = var5.bind(var4)(var3, var2, var1);
                    return var1;
                };
                var14 = var15.bind(var16)(var14);
                var11['children'] = var14;
                var10 = var13.bind(var4)(var12, var11);
case 130:
                var9[1] = var10;
                var6['children'] = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5[1] = var6;
                var1['children'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var3['default'] = var2;
        return var1;
    }
})();