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
    var4 = var4.STATUS_MAX_LENGTH;
    var _closure1_slot11 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.ActivityTypes;
    var _closure1_slot12 = var7;
    var4 = var4.AnalyticEvents;
    var _closure1_slot13 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.EmojiIntention;
    var _closure1_slot14 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot15 = var7;
    var4 = var4.jsxs;
    var _closure1_slot16 = var4;
    var4 = 10;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'display': 'flex', 'flexDirection': 'row', 'gap': null, 'alignItems': 'center'};
    var10 = 11;
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
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.radii;
    var10 = var10.round;
    var9['borderRadius'] = var10;
    var4['emojiSelector'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot17 = var4;
    var4 = 38;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/hang_status/components/native/HangStatusPickerActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function HangStatusPickerActionSheet(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var15 = var1.initialStatusType;
            var8 = var1.initialStatusText;
            var17 = var1.initialStatusEmoji;
            var12 = var1.channelId;
            var _closure2_slot0 = var12;
            var4 = undefined;
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
            var1 = _closure1_slot17;
            var23 = var1.bind(var4)();
            var _closure2_slot1 = var23;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 12;
            var5 = var3[var1];
            var11 = var2.bind(var4)(var5);
            var9 = var11.useStateFromStores;
            var5 = _closure1_slot7;
            var6 = new Array(1);
            var6[0] = var5;
            var5 = function() {
                var3 = _closure1_slot7;
                var2 = var3.getChannel;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var6 = var9.bind(var11)(var6, var5);
            var _closure2_slot2 = var6;
            var5 = var3[var1];
            var14 = var2.bind(var4)(var5);
            var13 = var14.useStateFromStores;
            var11 = _closure1_slot8;
            var9 = new Array(1);
            var9[0] = var11;
            var5 = function() {
                var2 = _closure1_slot8;
                var1 = var2.getCustomHangStatus;
                var1 = var1.bind(var2)();
                return var1;
            };
            var16 = var13.bind(var14)(var9, var5);
            var _closure2_slot3 = var16;
            var1 = var3[var1];
            var13 = var2.bind(var4)(var1);
            var9 = var13.useStateFromStores;
            var5 = new Array(1);
            var5[0] = var11;
            var1 = function() {
                var2 = _closure1_slot8;
                var1 = var2.getCurrentHangStatus;
                var1 = var1.bind(var2)();
                return var1;
            };
            var14 = var9.bind(var13)(var5, var1);
            var9 = _closure1_slot4;
            var5 = var9.useRef;
            var1 = var11.getRecentStatuses;
            var1 = var1.bind(var11)();
            var11 = var5.bind(var9)(var1);
            var _closure2_slot4 = var11;
            var1 = 13;
            var1 = var3[var1];
            var3 = var2.bind(var4)(var1);
            var2 = var3.useHangStatusExperiment;
            var1 = {};
            var21 = null;
            var9 = var21 == var6;
            var5 = undefined;
            if(var9) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = var6.guild_id;
case 2:
            var1['guildId'] = var5;
            var5 = 'HangStatusPickerActionSheet';
            var1['location'] = var5;
            var2 = var2.bind(var3)(var1);
            var1 = var2.defaultStatusVariant;
            _closure2_slot5 = var1;
            var3 = var2.allowPermanentClear;
            _closure2_slot6 = var3;
            var5 = _closure1_slot4;
            var9 = var5.useMemo;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 14;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.getHangStatusOptions;
                var1 = _closure2_slot5;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var9.bind(var5)(var1, var2);
            _closure2_slot7 = var1;
            var2 = var5.useState;
            if(!(var21 == var8)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var9 = var21 == var16;
            var1 = undefined;
            if(var9) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var1 = var16.status;
case 6:
            var8 = var1;
case 4:
            var9 = var21 != var8;
            var1 = undefined;
            if(!var9) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var1 = var8;
case 8:
            var2 = var2.bind(var5)(var1);
            var1 = _closure1_slot3;
            var13 = 2;
            var1 = var1.bind(var4)(var2, var13);
            var8 = 0;
            var26 = var1[var8];
            _closure2_slot8 = var26;
            var5 = 1;
            var1 = var1[var5];
            _closure2_slot9 = var1;
            var9 = _closure1_slot4;
            var2 = var9.useState;
            var1 = var14;
            if(!(var21 != var15)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var1 = var15;
case 10:
            if(!(var21 == var1)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var18 = var21 != var16;
            var15 = undefined;
            if(!var18) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var18 = _closure1_slot9;
            var15 = var18.CUSTOM;
case 14:
            var1 = var15;
case 12:
            var2 = var2.bind(var9)(var1);
            var1 = _closure1_slot3;
            var1 = var1.bind(var4)(var2, var13);
            var2 = var1[var8];
            _closure2_slot10 = var2;
            var1 = var1[var5];
            _closure2_slot11 = var1;
            var15 = _closure1_slot4;
            var9 = var15.useState;
            if(!(var21 == var17)) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var18 = var21 == var16;
            var1 = undefined;
            if(var18) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var1 = var16.emoji;
case 18:
            var17 = var1;
case 16:
            var18 = var21 != var17;
            var1 = undefined;
            if(!var18) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var1 = var17;
case 20:
            var9 = var9.bind(var15)(var1);
            var1 = _closure1_slot3;
            var1 = var1.bind(var4)(var9, var13);
            var28 = var1[var8];
            _closure2_slot12 = var28;
            var1 = var1[var5];
            _closure2_slot13 = var1;
            var5 = _closure1_slot1;
            var9 = _closure1_slot2;
            var1 = 15;
            var1 = var9[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.bind(var4)(var6);
            _closure2_slot14 = var1;
            var5 = _closure1_slot4;
            var15 = var5.useMemo;
            var13 = new Array(3);
            var13[0] = var28;
            var13[1] = var26;
            var13[2] = var2;
            var9 = function() {
                var1 = _closure2_slot4;
                var3 = var1.current;
                var2 = var3.findIndex;
                var1 = function(arg1) {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        var3 = arg1;
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var1 = 16;
                        var1 = var5[var1];
                        var7 = undefined;
                        var1 = var4.bind(var7)(var1);
                        var1 = var1.bind(var7)(var3);
                        if(var1) { _fun0002_ip = 22; continue _fun0002 }
case 23:
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var1 = 17;
                        var1 = var5[var1];
                        var6 = var4.bind(var7)(var1);
                        var5 = var3.emoji;
                        var1 = _closure2_slot12;
                        var1 = var6.bind(var7)(var5, var1);
                        if(!var1) { _fun0002_ip = 24; continue _fun0002 }
case 25:
                        var6 = var3.status;
                        var5 = _closure2_slot8;
                        var1 = var6 === var5;
case 24:
                        if(!var1) { _fun0002_ip = 26; continue _fun0002 }
case 27:
                        var4 = _closure2_slot10;
                        var2 = _closure1_slot9;
                        var2 = var2.CUSTOM;
                        var1 = var4 === var2;
case 26:
                        _fun0002_ip = 28; continue _fun0002;
case 22:
                        var2 = _closure2_slot10;
                        var1 = var3 === var2;
case 28:
                        return var1;
                    }
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var13 = var15.bind(var5)(var9, var13);
            var17 = var5.useMemo;
            var15 = new Array(3);
            var15[0] = var26;
            var15[1] = var28;
            var15[2] = var16;
            var9 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = _closure2_slot8;
                    var3 = null;
                    var1 = var3 != var1;
                    if(!var1) { _fun0003_ip = 29; continue _fun0003 }
case 30:
                    var4 = _closure2_slot8;
                    var2 = var4.trim;
                    var4 = var2.bind(var4)();
                    var2 = '';
                    var1 = var2 !== var4;
case 29:
                    if(!var1) { _fun0003_ip = 31; continue _fun0003 }
case 32:
                    var4 = _closure2_slot8;
                    var2 = _closure2_slot3;
                    var5 = var3 == var2;
                    var6 = undefined;
                    var2 = undefined;
                    if(var5) { _fun0003_ip = 33; continue _fun0003 }
case 34:
                    var5 = _closure2_slot3;
                    var2 = var5.status;
case 33:
                    var2 = var4 !== var2;
                    if(var2) { _fun0003_ip = 35; continue _fun0003 }
case 36:
                    var5 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var4 = 17;
                    var4 = var7[var4];
                    var5 = var5.bind(var6)(var4);
                    var4 = _closure2_slot12;
                    var7 = _closure2_slot3;
                    var9 = var3 == var7;
                    var7 = undefined;
                    if(var9) { _fun0003_ip = 37; continue _fun0003 }
case 38:
                    var8 = _closure2_slot3;
                    var7 = var8.emoji;
case 37:
                    var8 = var3 != var7;
                    var3 = undefined;
                    if(!var8) { _fun0003_ip = 39; continue _fun0003 }
case 40:
                    var3 = var7;
case 39:
                    var3 = var5.bind(var6)(var4, var3);
                    var2 = !var3;
case 35:
                    var1 = var2;
case 31:
                    return var1;
                }
            };
            var15 = var17.bind(var5)(var9, var15);
            var18 = var5.useCallback;
            var17 = function() {
                var4 = _closure2_slot9;
                var1 = undefined;
                var3 = '';
                var3 = var4.bind(var1)(var3);
                var2 = _closure2_slot13;
                var2 = var2.bind(var1)(var1);
                return var1;
            };
            var9 = new Array(0);
            var9 = var18.bind(var5)(var17, var9);
            _closure2_slot15 = var9;
            var18 = var5.useCallback;
            var17 = new Array(3);
            var17[0] = var28;
            var17[1] = var26;
            var17[2] = var2;
            var2 = function(arg1, arg2, arg3) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var8 = arg1;
                    var6 = arg2;
                    var5 = arg3;
                    var3 = null;
                    if(!(var3 == var8)) { _fun0004_ip = 41; continue _fun0004 }
case 42:
                    var8 = _closure2_slot10;
case 41:
                    if(!(var3 == var6)) { _fun0004_ip = 43; continue _fun0004 }
case 44:
                    var6 = _closure2_slot8;
case 43:
                    if(!(var3 == var5)) { _fun0004_ip = 45; continue _fun0004 }
case 46:
                    var5 = _closure2_slot12;
case 45:
                    if(!(var3 == var5)) { _fun0004_ip = 47; continue _fun0004 }
case 48:
                    var5 = {'id': null, 'name': '💭', 'animated': false};
case 47:
                    var1 = _closure1_slot9;
                    var1 = var1.CUSTOM;
                    if(!(var8 !== var1)) { _fun0004_ip = 49; continue _fun0004 }
case 50:
                    var7 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 18;
                    var4 = var4[var1];
                    var1 = undefined;
                    var7 = var7.bind(var1)(var4);
                    var4 = var7.updateHangStatus;
                    var1 = true;
                    var1 = var4.bind(var7)(var8, var1);
                    _fun0004_ip = 51; continue _fun0004;
case 49:
                    var1 = var3 != var6;
                    if(!var1) { _fun0004_ip = 52; continue _fun0004 }
case 28:
                    var4 = var6.trim;
                    var7 = var4.bind(var6)();
                    var4 = '';
                    var1 = var4 !== var7;
case 52:
                    if(!var1) { _fun0004_ip = 31; continue _fun0004 }
case 53:
                    var1 = var3 != var5;
case 31:
                    if(!var1) { _fun0004_ip = 51; continue _fun0004 }
case 54:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 18;
                    var3 = var3[var1];
                    var1 = undefined;
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.updateCustomHangStatus;
                    var1 = true;
                    var1 = var3.bind(var4)(var6, var5, var1);
case 51:
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
            var2 = var18.bind(var5)(var2, var17);
            _closure2_slot16 = var2;
            var19 = var5.useCallback;
            var18 = function(arg1) {
                var4 = _closure2_slot11;
                var1 = _closure1_slot9;
                var3 = var1.CUSTOM;
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var3 = _closure2_slot9;
                var2 = arg1;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var17 = new Array(0);
            var25 = var19.bind(var5)(var18, var17);
            var18 = var5.useCallback;
            var17 = new Array(2);
            var17[0] = var26;
            var17[1] = var12;
            var12 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = arg1;
                    var6 = {};
                    var2 = var1.id;
                    var6['id'] = var2;
                    var3 = var1.id;
                    var2 = null;
                    if(!(var2 == var3)) { _fun0005_ip = 55; continue _fun0005 }
case 56:
                    var3 = var1.surrogates;
                    if(!(var2 != var3)) { _fun0005_ip = 55; continue _fun0005 }
case 57:
                    var4 = var1.surrogates;
                    var3 = '';
                    if(!(var3 === var4)) { _fun0005_ip = 58; continue _fun0005 }
case 55:
                    var3 = var1.name;
                    var4 = var2 != var3;
                    var2 = '';
                    if(!var4) { _fun0005_ip = 59; continue _fun0005 }
case 60:
                    var2 = var3;
case 59:
                    _fun0005_ip = 61; continue _fun0005;
case 58:
                    var2 = var1.surrogates;
case 61:
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
                    var7 = _closure2_slot8;
                    var2['initialStatusText'] = var7;
                    var2['initialStatusEmoji'] = var6;
                    var5 = _closure2_slot0;
                    var2['channelId'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var12 = var18.bind(var5)(var12, var17);
            _closure2_slot17 = var12;
            var18 = var5.useCallback;
            var17 = new Array(1);
            var17[0] = var12;
            var12 = function() {
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
                var5 = _closure1_slot14;
                var5 = var5.STATUS;
                var2['pickerIntention'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var17 = var18.bind(var5)(var12, var17);
            var18 = var5.useCallback;
            var12 = new Array(2);
            var12[0] = var2;
            var12[1] = var9;
            var9 = function(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var1 = _closure2_slot4;
                    var3 = var1.current;
                    var1 = arg1;
                    var4 = var3[var1];
                    var6 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 16;
                    var3 = var3[var1];
                    var1 = undefined;
                    var3 = var6.bind(var1)(var3);
                    var6 = var3.bind(var1)(var4);
                    var3 = _closure2_slot16;
                    if(var6) { _fun0006_ip = 62; continue _fun0006 }
case 63:
                    var5 = _closure1_slot9;
                    var7 = var5.CUSTOM;
                    var6 = var4.status;
                    var8 = var4.emoji;
                    var5 = null;
                    var9 = var5 != var8;
                    var5 = undefined;
                    if(!var9) { _fun0006_ip = 24; continue _fun0006 }
case 64:
                    var5 = var8;
case 24:
                    var5 = var3.bind(var1)(var7, var6, var5);
                    _fun0006_ip = 65; continue _fun0006;
case 62:
                    var3 = var3.bind(var1)(var4);
                    var2 = _closure2_slot15;
                    var2 = var2.bind(var1)();
case 65:
                    return var1;
                }
            };
            var12 = var18.bind(var5)(var9, var12);
            var18 = var5.useCallback;
            var9 = new Array(1);
            var9[0] = var3;
            var3 = function() {
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 18;
                var3 = var5[var1];
                var1 = undefined;
                var7 = var4.bind(var1)(var3);
                var6 = var7.clearHangStatus;
                var4 = _closure2_slot6;
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
            var29 = var18.bind(var5)(var3, var9);
            var9 = var5.useCallback;
            var3 = new Array(3);
            var3[0] = var26;
            var3[1] = var28;
            var3[2] = var2;
            var2 = function() {
                var6 = _closure2_slot16;
                var3 = _closure1_slot9;
                var5 = var3.CUSTOM;
                var4 = _closure2_slot8;
                var3 = _closure2_slot12;
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
            var24 = var9.bind(var5)(var2, var3);
            var3 = var5.useCallback;
            var2 = new Array(3);
            var2[0] = var28;
            var2[1] = var1;
            var9 = var21 == var6;
            var1 = undefined;
            if(var9) { _fun0001_ip = 66; continue _fun0001 }
case 67:
            var1 = var6.id;
case 66:
            var2[2] = var1;
            var1 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var8 = null;
                    var1 = undefined;
                    var16 = 17;
                    var15 = 1;
                    var14 = '';
                    var13 = 22;
                    var12 = 0;
                    var11 = null;
                    var10 = null;
                    var9 = undefined;
                    var6 = undefined;
case 43:
                    var3 = _closure2_slot14;
                    var4 = var3.length;
                    var3 = var11;
                    var5 = var10;
                    if(!(var12 !== var4)) { _fun0007_ip = 68; continue _fun0007 }
case 69:
                    var17 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var13];
                    var18 = var17.bind(var1)(var4);
                    var17 = var18.sample;
                    var4 = _closure2_slot14;
                    var18 = var17.bind(var18)(var4);
                    var17 = var8 == var18;
                    var4 = undefined;
                    if(var17) { _fun0007_ip = 70; continue _fun0007 }
case 71:
                    var4 = var18.id;
case 70:
                    if(!(var8 == var4)) { _fun0007_ip = 72; continue _fun0007 }
case 73:
                    var17 = {'id': null, 'name': null, 'animated': false};
                    var4 = var8 == var18;
                    var20 = undefined;
                    if(var4) { _fun0007_ip = 40; continue _fun0007 }
case 74:
                    var20 = var18.optionallyDiverseSequence;
case 40:
                    var19 = var8 != var20;
                    var4 = var14;
                    if(!var19) { _fun0007_ip = 75; continue _fun0007 }
case 76:
                    var4 = var20;
case 75:
                    var17['name'] = var4;
                    var19 = var18;
                    _fun0007_ip = 77; continue _fun0007;
case 72:
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
case 77:
                    var4 = _closure2_slot14;
                    var4 = var4.length;
                    var3 = var18;
                    var5 = var17;
                    if(!(var15 !== var4)) { _fun0007_ip = 68; continue _fun0007 }
case 78:
                    var11 = var18;
                    var10 = var17;
                    var9 = var20;
                    var6 = var19;
                    if(var8 == var18) { _fun0007_ip = 43; continue _fun0007 }
case 79:
                    var4 = var18.name;
                    var11 = var18;
                    var10 = var17;
                    var9 = var20;
                    var6 = var19;
                    if(var8 == var4) { _fun0007_ip = 43; continue _fun0007 }
case 80:
                    var21 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var4 = var4[var16];
                    var21 = var21.bind(var1)(var4);
                    var4 = _closure2_slot12;
                    var4 = var21.bind(var1)(var17, var4);
                    var11 = var18;
                    var10 = var17;
                    var9 = var20;
                    var6 = var19;
                    var3 = var11;
                    var5 = var10;
                    if(var4) { _fun0007_ip = 43; continue _fun0007 }
case 68:
                    var4 = var8 != var5;
                    if(!var4) { _fun0007_ip = 81; continue _fun0007 }
case 82:
                    var9 = var8 == var3;
                    var6 = undefined;
                    if(var9) { _fun0007_ip = 83; continue _fun0007 }
case 84:
                    var6 = var3.name;
case 83:
                    var4 = var8 != var6;
case 81:
                    if(!var4) { _fun0007_ip = 85; continue _fun0007 }
case 86:
                    var4 = _closure2_slot13;
                    var4 = var4.bind(var1)(var5);
                    var4 = _closure2_slot9;
                    var3 = var3.name;
                    var3 = var4.bind(var1)(var3);
                    var6 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var3 = 23;
                    var3 = var9[var3];
                    var5 = var6.bind(var1)(var3);
                    var4 = var5.track;
                    var2 = _closure1_slot13;
                    var3 = var2.HANG_STATUS_RANDOMIZER_CLICKED;
                    var2 = 24;
                    var2 = var9[var2];
                    var6 = var6.bind(var1)(var2);
                    var2 = _closure2_slot2;
                    var8 = var8 == var2;
                    var2 = undefined;
                    if(var8) { _fun0007_ip = 87; continue _fun0007 }
case 88:
                    var7 = _closure2_slot2;
                    var2 = var7.id;
case 87:
                    var2 = var6.bind(var1)(var2);
                    var2 = var4.bind(var5)(var3, var2);
case 85:
                    return var1;
                }
            };
            var18 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot16;
            var30 = _closure1_slot0;
            var19 = _closure1_slot2;
            var1 = 25;
            var1 = var19[var1];
            var1 = var30.bind(var4)(var1);
            var2 = var1.ActionSheet;
            var1 = {};
            var9 = _closure1_slot15;
            var5 = 26;
            var5 = var19[var5];
            var5 = var30.bind(var4)(var5);
            var6 = var5.BottomSheetTitleHeader;
            var5 = {};
            var22 = 27;
            var20 = var19[var22];
            var20 = var30.bind(var4)(var20);
            var27 = var20.intl;
            var20 = var27.string;
            var19 = var19[var22];
            var19 = var30.bind(var4)(var19);
            var19 = var19.t;
            var19 = var19.qstQub;
            var19 = var20.bind(var27)(var19);
            var5['title'] = var19;
            if(!(var21 == var16)) { _fun0001_ip = 89; continue _fun0001 }
case 90:
            var16 = var21 != var14;
            var14 = null;
            if(!var16) { _fun0001_ip = 91; continue _fun0001 }
case 89:
            var20 = _closure1_slot15;
            var31 = _closure1_slot0;
            var27 = _closure1_slot2;
            var16 = 28;
            var16 = var27[var16];
            var16 = var31.bind(var4)(var16);
            var19 = var16.ActionSheetHeaderPressableText;
            var16 = {};
            var16['onPress'] = var29;
            var29 = var27[var22];
            var29 = var31.bind(var4)(var29);
            var30 = var29.intl;
            var29 = var30.string;
            var27 = var27[var22];
            var27 = var31.bind(var4)(var27);
            var27 = var27.t;
            var27 = var27.VkKicX;
            var27 = var29.bind(var30)(var27);
            var16['label'] = var27;
            var14 = var20.bind(var4)(var19, var16);
case 91:
            var5['leading'] = var14;
            var14 = null;
            if(!var15) { _fun0001_ip = 92; continue _fun0001 }
case 93:
            var19 = _closure1_slot15;
            var29 = _closure1_slot0;
            var20 = _closure1_slot2;
            var15 = 28;
            var15 = var20[var15];
            var15 = var29.bind(var4)(var15);
            var16 = var15.ActionSheetHeaderPressableText;
            var15 = {};
            var15['onPress'] = var24;
            var24 = var20[var22];
            var24 = var29.bind(var4)(var24);
            var27 = var24.intl;
            var24 = var27.string;
            var20 = var20[var22];
            var20 = var29.bind(var4)(var20);
            var20 = var20.t;
            var20 = var20.R3BPHx;
            var20 = var24.bind(var27)(var20);
            var15['label'] = var20;
            var14 = var19.bind(var4)(var16, var15);
case 92:
            var5['trailing'] = var14;
            var5 = var9.bind(var4)(var6, var5);
            var1['header'] = var5;
            var9 = _closure1_slot16;
            var6 = _closure1_slot5;
            var5 = {};
            var14 = var23.inputContainer;
            var5['style'] = var14;
            var19 = _closure1_slot15;
            var29 = _closure1_slot0;
            var20 = _closure1_slot2;
            var15 = 29;
            var14 = var20[var15];
            var14 = var29.bind(var4)(var14);
            var16 = var14.PressableOpacity;
            var14 = {};
            var24 = var23.emojiSelector;
            var14['style'] = var24;
            var24 = var20[var22];
            var24 = var29.bind(var4)(var24);
            var27 = var24.intl;
            var24 = var27.string;
            var20 = var20[var22];
            var20 = var29.bind(var4)(var20);
            var20 = var20.t;
            var20 = var20.WkfRZG;
            var20 = var24.bind(var27)(var20);
            var14['accessibilityLabel'] = var20;
            var20 = {};
            var24 = var21 == var28;
            var21 = undefined;
            if(var24) { _fun0001_ip = 94; continue _fun0001 }
case 95:
            var21 = var28.name;
case 94:
            var20['text'] = var21;
            var14['accessibilityValue'] = var20;
            var21 = 'button';
            var14['accessibilityRole'] = var21;
            var14['onPress'] = var17;
            var17 = _closure1_slot15;
            var27 = _closure1_slot1;
            var20 = _closure1_slot2;
            var24 = 30;
            var24 = var20[var24];
            var27 = var27.bind(var4)(var24);
            var24 = {'size': 20, 'emoji': null, 'withPlaceholder': true};
            var24['emoji'] = var28;
            var24 = var17.bind(var4)(var27, var24);
            var14['children'] = var24;
            var16 = var19.bind(var4)(var16, var14);
            var14 = new Array(3);
            var14[0] = var16;
            var19 = _closure1_slot0;
            var16 = 31;
            var16 = var20[var16];
            var16 = var19.bind(var4)(var16);
            var24 = var16.BottomSheetTextInput;
            var16 = {};
            var27 = var23.input;
            var16['style'] = var27;
            var27 = _closure1_slot11;
            var16['maxLength'] = var27;
            var27 = var20[var22];
            var27 = var19.bind(var4)(var27);
            var29 = var27.intl;
            var28 = var29.string;
            var27 = var20[var22];
            var27 = var19.bind(var4)(var27);
            var27 = var27.t;
            var27 = var27.KPop4u;
            var27 = var28.bind(var29)(var27);
            var16['placeholder'] = var27;
            var27 = var20[var22];
            var27 = var19.bind(var4)(var27);
            var29 = var27.intl;
            var28 = var29.string;
            var27 = var20[var22];
            var27 = var19.bind(var4)(var27);
            var27 = var27.t;
            var27 = var27.xalUlZ;
            var27 = var28.bind(var29)(var27);
            var16['accessibilityLabel'] = var27;
            var27 = 'blurAndSubmit';
            var16['submitBehavior'] = var27;
            var16['value'] = var26;
            var16['onChangeText'] = var25;
            var25 = 'none';
            var16['autoCapitalize'] = var25;
            var16 = var17.bind(var4)(var24, var16);
            var14[1] = var16;
            var15 = var20[var15];
            var15 = var19.bind(var4)(var15);
            var16 = var15.PressableOpacity;
            var15 = {};
            var23 = var23.emojiSelector;
            var15['style'] = var23;
            var23 = var20[var22];
            var23 = var19.bind(var4)(var23);
            var24 = var23.intl;
            var23 = var24.string;
            var22 = var20[var22];
            var22 = var19.bind(var4)(var22);
            var22 = var22.t;
            var22 = var22.5UAi5+;
            var22 = var23.bind(var24)(var22);
            var15['accessibilityLabel'] = var22;
            var15['accessibilityRole'] = var21;
            var15['onPress'] = var18;
            var18 = 32;
            var18 = var20[var18];
            var18 = var19.bind(var4)(var18);
            var19 = var18.DiceIcon;
            var18 = {};
            var20 = 'sm';
            var18['size'] = var20;
            var18 = var17.bind(var4)(var19, var18);
            var15['children'] = var18;
            var15 = var17.bind(var4)(var16, var15);
            var14[2] = var15;
            var5['children'] = var14;
            var6 = var9.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var6 = var11.current;
            var6 = var6.length;
            var6 = var6 > var8;
            if(!var6) { _fun0001_ip = 96; continue _fun0001 }
case 97:
            var9 = _closure1_slot15;
            var8 = _closure1_slot0;
            var14 = _closure1_slot2;
            var7 = 33;
            var7 = var14[var7];
            var7 = var8.bind(var4)(var7);
            var8 = var7.TableRadioGroup;
            var7 = {};
            var7['defaultValue'] = var13;
            var7['onChange'] = var12;
            var12 = var11.current;
            var11 = var12.map;
            var10 = function(arg1, arg2) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var8 = arg1;
                    var7 = arg2;
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 16;
                    var1 = var3[var1];
                    var5 = undefined;
                    var1 = var2.bind(var5)(var1);
                    var1 = var1.bind(var5)(var8);
                    var11 = null;
                    var13 = null;
                    if(!var1) { _fun0008_ip = 98; continue _fun0008 }
case 99:
                    var2 = _closure2_slot7;
                    var13 = var2[var8];
case 98:
                    var4 = _closure1_slot16;
                    var3 = _closure1_slot5;
                    var10 = {};
                    var15 = _closure2_slot1;
                    var2 = var15.row;
                    var10['style'] = var2;
                    var16 = _closure1_slot15;
                    var14 = _closure1_slot1;
                    var17 = _closure1_slot2;
                    if(var1) { _fun0008_ip = 100; continue _fun0008 }
case 71:
                    var2 = 30;
                    var2 = var17[var2];
                    var12 = var14.bind(var5)(var2);
                    var2 = {};
                    var18 = 28;
                    var2['size'] = var18;
                    var18 = var8.emoji;
                    var2['emoji'] = var18;
                    var12 = var16.bind(var5)(var12, var2);
                    var2 = new Array(2);
                    var2[0] = var12;
                    var18 = _closure1_slot0;
                    var12 = 35;
                    var12 = var17[var12];
                    var12 = var18.bind(var5)(var12);
                    var18 = var12.Text;
                    var12 = {};
                    var19 = 'text-md/semibold';
                    var12['variant'] = var19;
                    var19 = var8.status;
                    var12['children'] = var19;
                    var12 = var16.bind(var5)(var18, var12);
                    var2[1] = var12;
                    var10['children'] = var2;
                    var2 = var10;
                    _fun0008_ip = 101; continue _fun0008;
case 100:
                    var12 = 34;
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
                    var18 = _closure1_slot12;
                    var18 = var18.HANG_STATUS;
                    var15['type'] = var18;
                    var15['state'] = var8;
                    var12['hangStatusActivity'] = var15;
                    var15 = _closure2_slot5;
                    var12['fallbackVariant'] = var15;
                    var14 = var16.bind(var5)(var14, var12);
                    var12 = new Array(2);
                    var12[0] = var14;
                    var15 = _closure1_slot0;
                    var14 = 35;
                    var14 = var17[var14];
                    var14 = var15.bind(var5)(var14);
                    var15 = var14.Text;
                    var14 = {};
                    var17 = 'text-md/semibold';
                    var14['variant'] = var17;
                    var17 = var11 == var13;
                    var18 = undefined;
                    if(var17) { _fun0008_ip = 102; continue _fun0008 }
case 103:
                    var18 = var13.title;
case 102:
                    var19 = var11 != var18;
                    var17 = '';
                    if(!var19) { _fun0008_ip = 104; continue _fun0008 }
case 105:
                    var17 = var18;
case 104:
                    var14['children'] = var17;
                    var14 = var16.bind(var5)(var15, var14);
                    var12[1] = var14;
                    var10['children'] = var12;
                    var2 = var10;
case 101:
                    var10 = var4.bind(var5)(var3, var2);
                    var4 = _closure1_slot15;
                    var3 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var2 = 36;
                    var2 = var12[var2];
                    var2 = var3.bind(var5)(var2);
                    var3 = var2.TableRadioRow;
                    var2 = {};
                    if(var1) { _fun0008_ip = 106; continue _fun0008 }
case 107:
                    var12 = var8.status;
                    _fun0008_ip = 108; continue _fun0008;
case 106:
                    var15 = var11 == var13;
                    var14 = undefined;
                    if(var15) { _fun0008_ip = 85; continue _fun0008 }
case 109:
                    var14 = var13.title;
case 85:
                    var15 = var11 != var14;
                    var13 = '';
                    if(!var15) { _fun0008_ip = 110; continue _fun0008 }
case 111:
                    var13 = var14;
case 110:
                    var12 = var13;
case 108:
                    var2['aria-label'] = var12;
                    var2['label'] = var10;
                    var2['value'] = var7;
                    var1 = !var1;
                    if(!var1) { _fun0008_ip = 112; continue _fun0008 }
case 113:
                    var10 = var8.emoji;
                    var1 = var11 != var10;
case 112:
                    if(!var1) { _fun0008_ip = 114; continue _fun0008 }
case 115:
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var9 = 37;
                    var9 = var11[var9];
                    var10 = var10.bind(var5)(var9);
                    var9 = var10.canUseEmojiForHangStatus;
                    var8 = var8.emoji;
                    var6 = _closure2_slot2;
                    var6 = var9.bind(var10)(var8, var6);
                    var1 = !var6;
case 114:
                    var2['disabled'] = var1;
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var6 = var1.concat;
                    var1 = 'recent-status-';
                    var1 = var6.bind(var1)(var7);
                    var1 = var4.bind(var5)(var3, var2, var1);
                    return var1;
                }
            };
            var10 = var11.bind(var12)(var10);
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 96:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();