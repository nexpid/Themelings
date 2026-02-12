// app/modules/app_launcher/native/options/AppLauncherCommandOption.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var13 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var13;
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
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var11 = 1;
    var4 = var6[var11];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AppLauncherOptionAutoFocusType;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot5 = var8;
    var4 = var4.jsxs;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var7 = var9.createStyles;
    var4 = {};
    var10 = {'flexDirection': 'row', 'alignItems': 'center'};
    var4['dismissableOptionWrapper'] = var10;
    var10 = {};
    var10['flex'] = var11;
    var4['optionViewContainer'] = var10;
    var10 = {'marginLeft': 8, 'marginRight': 4294967292, 'padding': 4};
    var12 = 5;
    var12 = var6[var12];
    var12 = var13.bind(var1)(var12);
    var12 = var12.radii;
    var12 = var12.round;
    var10['borderRadius'] = var12;
    var4['dismissButton'] = var10;
    var10 = {};
    var10['flex'] = var11;
    var4['option'] = var10;
    var4 = var7.bind(var9)(var4);
    var _closure1_slot7 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.CircleXIcon;
    var4 = {};
    var9 = 'md';
    var4['size'] = var9;
    var4 = var8.bind(var1)(var7, var4);
    var _closure1_slot8 = var4;
    var4 = 20;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/app_launcher/native/options/AppLauncherCommandOption.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function AppLauncherCommandOption(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg1;
            var1 = var5.option;
            var _closure2_slot0 = var1;
            var2 = var5.onStartEditing;
            var _closure2_slot1 = var2;
            var2 = var5.onEndEditing;
            var _closure2_slot2 = var2;
            var2 = var5.onOptionValueChange;
            var _closure2_slot3 = var2;
            var4 = var5.onPress;
            var _closure2_slot4 = var4;
            var6 = var5.onPressAttachmentOption;
            var3 = var5.onDismiss;
            var _closure2_slot5 = var3;
            var20 = var5.onFocus;
            var16 = var5.channel;
            var13 = var5.autoFocusType;
            var2 = var5.command;
            var14 = var5.optionValues;
            var8 = var5.hasError;
            var7 = _closure1_slot7;
            var5 = undefined;
            var12 = var7.bind(var5)();
            var9 = var1.type;
            var15 = _closure1_slot0;
            var7 = _closure1_slot2;
            var17 = 7;
            var7 = var7[var17];
            var7 = var15.bind(var5)(var7);
            var7 = var7.ApplicationCommandOptionType;
            var7 = var7.STRING;
            if(!(var7 !== var9)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var15 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var17];
            var7 = var15.bind(var5)(var7);
            var7 = var7.ApplicationCommandOptionType;
            var7 = var7.INTEGER;
            if(!(var7 !== var9)) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var15 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var17];
            var7 = var15.bind(var5)(var7);
            var7 = var7.ApplicationCommandOptionType;
            var7 = var7.NUMBER;
            if(!(var7 !== var9)) { _fun0001_ip = 2; continue _fun0001 }
case 5:
            var15 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var17];
            var7 = var15.bind(var5)(var7);
            var7 = var7.ApplicationCommandOptionType;
            var7 = var7.ATTACHMENT;
            if(!(var7 !== var9)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var15 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var17];
            var7 = var15.bind(var5)(var7);
            var7 = var7.ApplicationCommandOptionType;
            var7 = var7.BOOLEAN;
            if(!(var7 !== var9)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var15 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var17];
            var7 = var15.bind(var5)(var7);
            var7 = var7.ApplicationCommandOptionType;
            var7 = var7.MENTIONABLE;
            if(!(var7 !== var9)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var15 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var17];
            var7 = var15.bind(var5)(var7);
            var7 = var7.ApplicationCommandOptionType;
            var7 = var7.ROLE;
            if(!(var7 !== var9)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var15 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var17];
            var7 = var15.bind(var5)(var7);
            var7 = var7.ApplicationCommandOptionType;
            var7 = var7.USER;
            if(!(var7 !== var9)) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var15 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var17];
            var7 = var15.bind(var5)(var7);
            var7 = var7.ApplicationCommandOptionType;
            var7 = var7.CHANNEL;
            if(!(var7 !== var9)) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var7 = null;
            return var7;
case 16:
            var17 = _closure1_slot5;
            var9 = _closure1_slot1;
            var15 = _closure1_slot2;
            var7 = 18;
            var7 = var15[var7];
            var15 = var9.bind(var5)(var7);
            var9 = {};
            var7 = var12.option;
            var9['style'] = var7;
            var9['option'] = var1;
            var18 = var14.current;
            var7 = var1.name;
            var19 = var18[var7];
            var7 = null;
            var18 = var7 == var19;
            var7 = undefined;
            if(var18) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var18 = 0;
            var7 = var19[var18];
case 18:
            var9['initialValue'] = var7;
            var7 = function onChannelPress(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = arg1;
                    var1 = var1.channel;
                    var4 = _closure2_slot3;
                    var3 = _closure2_slot0;
                    var2 = null;
                    if(!(var2 == var1)) { _fun0002_ip = 20; continue _fun0002 }
case 21:
                    var2 = new Array(0);
                    _fun0002_ip = 22; continue _fun0002;
case 20:
                    var5 = {};
                    var6 = 'channelMention';
                    var5['type'] = var6;
                    var1 = var1.id;
                    var5['channelId'] = var1;
                    var1 = new Array(1);
                    var1[0] = var5;
                    var2 = var1;
case 22:
                    var1 = undefined;
                    var2 = var4.bind(var1)(var3, var2);
                    return var1;
                }
            };
            var9['onChannelPress'] = var7;
            var7 = function onActionSheetDismiss() {
                var3 = _closure2_slot2;
                var2 = _closure2_slot0;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var9['onActionSheetDismiss'] = var7;
            var9['channel'] = var16;
            var7 = _closure1_slot4;
            var7 = var7.OPTIONAL_OPTION_ADDED;
            var7 = var13 === var7;
            var9['autoFocus'] = var7;
            var9['hasError'] = var8;
            var9['onPress'] = var4;
            var7 = var1.name;
            var7 = var17.bind(var5)(var15, var9, var7);
            _fun0001_ip = 23; continue _fun0001;
case 14:
            var18 = _closure1_slot5;
            var15 = _closure1_slot1;
            var17 = _closure1_slot2;
            var9 = 17;
            var9 = var17[var9];
            var17 = var15.bind(var5)(var9);
            var15 = {};
            var9 = var12.option;
            var15['style'] = var9;
            var15['option'] = var1;
            var19 = var14.current;
            var9 = var1.name;
            var21 = var19[var9];
            var9 = null;
            var19 = var9 == var21;
            var9 = undefined;
            if(var19) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var19 = 0;
            var9 = var21[var19];
case 24:
            var15['initialValue'] = var9;
            var9 = function onUserPress(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = arg1;
                    var5 = var1.user;
                    var4 = _closure2_slot3;
                    var3 = _closure2_slot0;
                    var1 = null;
                    if(!(var1 != var5)) { _fun0003_ip = 26; continue _fun0003 }
case 21:
                    var1 = {};
                    var2 = 'userMention';
                    var1['type'] = var2;
                    var7 = 'string';
                    var6 = typeof var5;
                    var2 = var5;
                    if(!(var7 !== var6)) { _fun0003_ip = 27; continue _fun0003 }
case 28:
                    var2 = var5.id;
case 27:
                    var1['userId'] = var2;
                    var2 = new Array(1);
                    var2[0] = var1;
                    _fun0003_ip = 29; continue _fun0003;
case 26:
                    var2 = new Array(0);
case 29:
                    var1 = undefined;
                    var2 = var4.bind(var1)(var3, var2);
                    return var1;
                }
            };
            var15['onUserPress'] = var9;
            var9 = function onActionSheetDismiss() {
                var3 = _closure2_slot2;
                var2 = _closure2_slot0;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var15['onActionSheetDismiss'] = var9;
            var15['channel'] = var16;
            var9 = _closure1_slot4;
            var9 = var9.OPTIONAL_OPTION_ADDED;
            var9 = var13 === var9;
            var15['autoFocus'] = var9;
            var15['hasError'] = var8;
            var15['onPress'] = var4;
            var9 = var1.name;
            var7 = var18.bind(var5)(var17, var15, var9);
            _fun0001_ip = 23; continue _fun0001;
case 12:
            var18 = _closure1_slot5;
            var15 = _closure1_slot1;
            var17 = _closure1_slot2;
            var9 = 16;
            var9 = var17[var9];
            var17 = var15.bind(var5)(var9);
            var15 = {};
            var9 = var12.option;
            var15['style'] = var9;
            var15['option'] = var1;
            var19 = var14.current;
            var9 = var1.name;
            var21 = var19[var9];
            var9 = null;
            var19 = var9 == var21;
            var9 = undefined;
            if(var19) { _fun0001_ip = 30; continue _fun0001 }
case 31:
            var19 = 0;
            var9 = var21[var19];
case 30:
            var15['initialValue'] = var9;
            var9 = function onRolePress(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = arg1;
                    var2 = var1.role;
                    var4 = _closure2_slot3;
                    var3 = _closure2_slot0;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0004_ip = 27; continue _fun0004 }
case 32:
                    var1 = {};
                    var5 = 'roleMention';
                    var1['type'] = var5;
                    var2 = var2.id;
                    var1['roleId'] = var2;
                    var2 = new Array(1);
                    var2[0] = var1;
                    _fun0004_ip = 33; continue _fun0004;
case 27:
                    var2 = new Array(0);
case 33:
                    var1 = undefined;
                    var2 = var4.bind(var1)(var3, var2);
                    return var1;
                }
            };
            var15['onRolePress'] = var9;
            var9 = function onActionSheetDismiss() {
                var3 = _closure2_slot2;
                var2 = _closure2_slot0;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var15['onActionSheetDismiss'] = var9;
            var15['channel'] = var16;
            var9 = _closure1_slot4;
            var9 = var9.OPTIONAL_OPTION_ADDED;
            var9 = var13 === var9;
            var15['autoFocus'] = var9;
            var15['hasError'] = var8;
            var15['onPress'] = var4;
            var9 = var1.name;
            var7 = var18.bind(var5)(var17, var15, var9);
            _fun0001_ip = 23; continue _fun0001;
case 10:
            var17 = _closure1_slot5;
            var15 = _closure1_slot1;
            var18 = _closure1_slot2;
            var9 = 13;
            var9 = var18[var9];
            var15 = var15.bind(var5)(var9);
            var9 = {};
            var9['option'] = var1;
            var19 = var14.current;
            var18 = var1.name;
            var21 = var19[var18];
            var18 = null;
            var19 = var18 == var21;
            var18 = undefined;
            if(var19) { _fun0001_ip = 34; continue _fun0001 }
case 35:
            var19 = 0;
            var18 = var21[var19];
case 34:
            var9['initialValue'] = var18;
            var18 = function onMentionablePress(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = arg1;
                    var1 = var1.mentionable;
                    var2 = null;
                    if(!(var2 == var1)) { _fun0005_ip = 36; continue _fun0005 }
case 37:
                    var5 = _closure2_slot3;
                    var4 = _closure2_slot0;
                    var3 = undefined;
                    var2 = new Array(0);
                    var2 = var5.bind(var3)(var4, var2);
                    _fun0005_ip = 15; continue _fun0005;
case 36:
                    var5 = var1.type;
                    var6 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var7 = 14;
                    var2 = var2[var7];
                    var4 = undefined;
                    var2 = var6.bind(var4)(var2);
                    var2 = var2.MentionableItemTypes;
                    var2 = var2.USER;
                    if(!(var2 !== var5)) { _fun0005_ip = 38; continue _fun0005 }
case 39:
                    var6 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var7];
                    var2 = var6.bind(var4)(var2);
                    var2 = var2.MentionableItemTypes;
                    var2 = var2.ROLE;
                    if(!(var2 !== var5)) { _fun0005_ip = 40; continue _fun0005 }
case 41:
                    var6 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var7];
                    var2 = var6.bind(var4)(var2);
                    var2 = var2.MentionableItemTypes;
                    var2 = var2.GLOBAL;
                    if(!(var2 === var5)) { _fun0005_ip = 15; continue _fun0005 }
case 42:
                    var2 = var1.result;
                    var5 = var2.text;
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var3 = 15;
                    var3 = var7[var3];
                    var6 = var6.bind(var4)(var3);
                    var3 = var6.MENTION_EVERYONE;
                    var3 = var3.bind(var6)();
                    var3 = var3.text;
                    if(!(var5 !== var3)) { _fun0005_ip = 43; continue _fun0005 }
case 44:
                    var5 = _closure2_slot3;
                    var3 = _closure2_slot0;
                    var6 = {};
                    var7 = 'text';
                    var6['type'] = var7;
                    var2 = var2.text;
                    var6['text'] = var2;
                    var2 = new Array(1);
                    var2[0] = var6;
                    var2 = var5.bind(var4)(var3, var2);
                    _fun0005_ip = 15; continue _fun0005;
case 43:
                    var5 = _closure2_slot3;
                    var3 = _closure2_slot0;
                    var2 = new Array(1);
                    var6 = {'type': 'textMention', 'text': '@everyone'};
                    var2[0] = var6;
                    var2 = var5.bind(var4)(var3, var2);
                    _fun0005_ip = 15; continue _fun0005;
case 40:
                    var2 = var1.result;
                    var5 = _closure2_slot3;
                    var3 = _closure2_slot0;
                    var6 = {};
                    var7 = 'roleMention';
                    var6['type'] = var7;
                    var2 = var2.id;
                    var6['roleId'] = var2;
                    var2 = new Array(1);
                    var2[0] = var6;
                    var2 = var5.bind(var4)(var3, var2);
                    _fun0005_ip = 15; continue _fun0005;
case 38:
                    var1 = var1.result;
                    var1 = var1.user;
                    var3 = _closure2_slot3;
                    var2 = _closure2_slot0;
                    var5 = {};
                    var6 = 'userMention';
                    var5['type'] = var6;
                    var1 = var1.id;
                    var5['userId'] = var1;
                    var1 = new Array(1);
                    var1[0] = var5;
                    var1 = var3.bind(var4)(var2, var1);
case 15:
                    var1 = undefined;
                    return var1;
                }
            };
            var9['onMentionablePress'] = var18;
            var18 = function onActionSheetDismiss() {
                var3 = _closure2_slot2;
                var2 = _closure2_slot0;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var9['onActionSheetDismiss'] = var18;
            var9['channel'] = var16;
            var18 = _closure1_slot4;
            var18 = var18.OPTIONAL_OPTION_ADDED;
            var18 = var13 === var18;
            var9['autoFocus'] = var18;
            var9['hasError'] = var8;
            var9['onPress'] = var4;
            var7 = var17.bind(var5)(var15, var9);
            _fun0001_ip = 23; continue _fun0001;
case 8:
            var18 = _closure1_slot5;
            var15 = _closure1_slot1;
            var17 = _closure1_slot2;
            var9 = 12;
            var9 = var17[var9];
            var17 = var15.bind(var5)(var9);
            var15 = {};
            var9 = var12.option;
            var15['style'] = var9;
            var15['option'] = var1;
            var19 = var14.current;
            var9 = var1.name;
            var21 = var19[var9];
            var9 = null;
            var19 = var9 == var21;
            var9 = undefined;
            if(var19) { _fun0001_ip = 45; continue _fun0001 }
case 46:
            var19 = 0;
            var9 = var21[var19];
case 45:
            var15['initialValue'] = var9;
            var9 = function onPress(arg1) {
                var6 = arg1;
                var3 = _closure2_slot4;
                var1 = undefined;
                var3 = var3.bind(var1)();
                var3 = _closure2_slot2;
                var4 = _closure2_slot0;
                var3 = var3.bind(var1)(var4);
                var3 = _closure2_slot3;
                var5 = {};
                var2 = 'text';
                var5['type'] = var2;
                var2 = var6.toString;
                var2 = var2.bind(var6)();
                var5['text'] = var2;
                var2 = new Array(1);
                var2[0] = var5;
                var2 = var3.bind(var1)(var4, var2);
                return var1;
            };
            var15['onPress'] = var9;
            var15['hasError'] = var8;
            var9 = var1.name;
            var7 = var18.bind(var5)(var17, var15, var9);
            _fun0001_ip = 23; continue _fun0001;
case 6:
            var17 = _closure1_slot5;
            var15 = _closure1_slot1;
            var18 = _closure1_slot2;
            var9 = 11;
            var9 = var18[var9];
            var15 = var15.bind(var5)(var9);
            var9 = {};
            var18 = var12.option;
            var9['style'] = var18;
            var9['option'] = var1;
            var18 = function onSelectAttachment(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var5 = arg1;
                    var3 = _closure2_slot2;
                    var4 = _closure2_slot0;
                    var1 = undefined;
                    var3 = var3.bind(var1)(var4);
                    var3 = _closure2_slot3;
                    var2 = null;
                    if(!(var2 == var5)) { _fun0006_ip = 47; continue _fun0006 }
case 20:
                    var2 = new Array(0);
                    _fun0006_ip = 48; continue _fun0006;
case 47:
                    var6 = {};
                    var7 = 'text';
                    var6['type'] = var7;
                    var6['text'] = var5;
                    var5 = new Array(1);
                    var5[0] = var6;
                    var2 = var5;
case 48:
                    var2 = var3.bind(var1)(var4, var2);
                    return var1;
                }
            };
            var9['onSelectAttachment'] = var18;
            var9['channel'] = var16;
            var18 = _closure1_slot4;
            var18 = var18.OPTIONAL_OPTION_ADDED;
            var18 = var13 === var18;
            var9['autoFocus'] = var18;
            var9['hasError'] = var8;
            var9['onPress'] = var6;
            var6 = var1.name;
            var7 = var17.bind(var5)(var15, var9, var6);
            _fun0001_ip = 23; continue _fun0001;
case 2:
            var6 = var1.choices;
            var9 = null;
            if(!(var9 == var6)) { _fun0001_ip = 49; continue _fun0001 }
case 50:
            var18 = var1.autocomplete;
            var15 = _closure1_slot5;
            var6 = _closure1_slot1;
            var17 = _closure1_slot2;
            if(var18) { _fun0001_ip = 51; continue _fun0001 }
case 52:
            var18 = 10;
            var18 = var17[var18];
            var19 = var6.bind(var5)(var18);
            var18 = {};
            var21 = var12.option;
            var18['style'] = var21;
            var18['option'] = var1;
            var21 = var16.guild_id;
            var18['guildId'] = var21;
            var22 = var14.current;
            var21 = var1.name;
            var23 = var22[var21];
            var22 = var9 == var23;
            var21 = undefined;
            if(var22) { _fun0001_ip = 53; continue _fun0001 }
case 54:
            var22 = 0;
            var21 = var23[var22];
case 53:
            var18['initialValue'] = var21;
            var21 = function onEndEditing() {
                var3 = _closure2_slot2;
                var2 = _closure2_slot0;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var18['onEndEditing'] = var21;
            var21 = function onChangeText(arg1) {
                var3 = _closure2_slot1;
                var4 = _closure2_slot0;
                var1 = undefined;
                var3 = var3.bind(var1)(var4);
                var3 = _closure2_slot3;
                var5 = {};
                var2 = 'text';
                var5['type'] = var2;
                var2 = arg1;
                var5['text'] = var2;
                var2 = new Array(1);
                var2[0] = var5;
                var2 = var3.bind(var1)(var4, var2);
                return var1;
            };
            var18['onChangeText'] = var21;
            var18['onFocus'] = var20;
            var20 = _closure1_slot4;
            var22 = var20.FIRST_REQUIRED_OPTION;
            var21 = new Array(2);
            var21[0] = var22;
            var20 = var20.OPTIONAL_OPTION_ADDED;
            var21[1] = var20;
            var20 = var21.includes;
            var20 = var20.bind(var21)(var13);
            var18['autoFocus'] = var20;
            var18['hasError'] = var8;
            var18['onPressIn'] = var4;
            var4 = var1.name;
            var7 = var15.bind(var5)(var19, var18, var4);
            _fun0001_ip = 23; continue _fun0001;
case 51:
            var4 = 9;
            var4 = var17[var4];
            var6 = var6.bind(var5)(var4);
            var4 = {};
            var17 = var12.option;
            var4['style'] = var17;
            var4['channel'] = var16;
            var4['option'] = var1;
            var4['activeCommand'] = var2;
            var4['optionValues'] = var14;
            var16 = var14.current;
            var2 = var1.name;
            var17 = var16[var2];
            var16 = var9 == var17;
            var2 = undefined;
            if(var16) { _fun0001_ip = 55; continue _fun0001 }
case 56:
            var16 = 0;
            var2 = var17[var16];
case 55:
            var4['initialValue'] = var2;
            var2 = _closure1_slot4;
            var2 = var2.OPTIONAL_OPTION_ADDED;
            var2 = var13 === var2;
            var4['autoFocus'] = var2;
            var2 = function onSelect(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var7 = arg1;
                    var3 = _closure2_slot2;
                    var4 = _closure2_slot0;
                    var1 = undefined;
                    var3 = var3.bind(var1)(var4);
                    var3 = _closure2_slot3;
                    var5 = {};
                    var2 = 'text';
                    var5['type'] = var2;
                    var2 = null;
                    var8 = var2 == var7;
                    var6 = undefined;
                    if(var8) { _fun0007_ip = 28; continue _fun0007 }
case 57:
                    var6 = var7.displayName;
case 28:
                    var7 = var2 != var6;
                    var2 = '';
                    if(!var7) { _fun0007_ip = 58; continue _fun0007 }
case 48:
                    var2 = var6;
case 58:
                    var5['text'] = var2;
                    var2 = new Array(1);
                    var2[0] = var5;
                    var2 = var3.bind(var1)(var4, var2);
                    return var1;
                }
            };
            var4['onSelect'] = var2;
            var2 = function onOpenAutocompleteSheet() {
                var3 = _closure2_slot4;
                var1 = undefined;
                var3 = var3.bind(var1)();
                var3 = _closure2_slot1;
                var2 = _closure2_slot0;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var4['onOpenAutocompleteSheet'] = var2;
            var2 = function onDismissAutocompleteSheet() {
                var3 = _closure2_slot2;
                var2 = _closure2_slot0;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var4['onDismissAutocompleteSheet'] = var2;
            var4['hasError'] = var8;
            var2 = var1.name;
            var7 = var15.bind(var5)(var6, var4, var2);
            _fun0001_ip = 23; continue _fun0001;
case 49:
            var6 = _closure1_slot5;
            var4 = _closure1_slot1;
            var15 = _closure1_slot2;
            var2 = 8;
            var2 = var15[var2];
            var4 = var4.bind(var5)(var2);
            var2 = {};
            var15 = var12.option;
            var2['style'] = var15;
            var2['option'] = var1;
            var15 = var14.current;
            var14 = var1.name;
            var15 = var15[var14];
            var14 = var9 == var15;
            var9 = undefined;
            if(var14) { _fun0001_ip = 59; continue _fun0001 }
case 60:
            var14 = 0;
            var9 = var15[var14];
case 59:
            var2['initialValue'] = var9;
            var9 = function onSelect(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var7 = arg1;
                    var3 = _closure2_slot2;
                    var4 = _closure2_slot0;
                    var1 = undefined;
                    var3 = var3.bind(var1)(var4);
                    var3 = _closure2_slot3;
                    var5 = {};
                    var2 = 'text';
                    var5['type'] = var2;
                    var2 = null;
                    var8 = var2 == var7;
                    var6 = undefined;
                    if(var8) { _fun0008_ip = 28; continue _fun0008 }
case 57:
                    var6 = var7.displayName;
case 28:
                    var7 = var2 != var6;
                    var2 = '';
                    if(!var7) { _fun0008_ip = 58; continue _fun0008 }
case 48:
                    var2 = var6;
case 58:
                    var5['text'] = var2;
                    var2 = new Array(1);
                    var2[0] = var5;
                    var2 = var3.bind(var1)(var4, var2);
                    return var1;
                }
            };
            var2['onSelect'] = var9;
            var9 = function onOpenChoicesSheet() {
                var3 = _closure2_slot4;
                var1 = undefined;
                var3 = var3.bind(var1)();
                var3 = _closure2_slot1;
                var2 = _closure2_slot0;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var2['onOpenChoicesSheet'] = var9;
            var9 = function onDismissChoicesSheet() {
                var3 = _closure2_slot2;
                var2 = _closure2_slot0;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var2['onDismissChoicesSheet'] = var9;
            var9 = _closure1_slot4;
            var9 = var9.OPTIONAL_OPTION_ADDED;
            var9 = var13 === var9;
            var2['autoFocus'] = var9;
            var2['hasError'] = var8;
            var1 = var1.name;
            var7 = var6.bind(var5)(var4, var2, var1);
case 23:
            var2 = null;
            var1 = var7;
            if(!(var2 != var3)) { _fun0001_ip = 61; continue _fun0001 }
case 62:
            var4 = _closure1_slot6;
            var3 = _closure1_slot3;
            var2 = {};
            var6 = var12.dismissableOptionWrapper;
            var2['style'] = var6;
            var9 = _closure1_slot5;
            var6 = {};
            var8 = var12.optionViewContainer;
            var6['style'] = var8;
            var6['children'] = var7;
            var7 = var9.bind(var5)(var3, var6);
            var6 = new Array(2);
            var6[0] = var7;
            var8 = _closure1_slot0;
            var13 = _closure1_slot2;
            var7 = 19;
            var7 = var13[var7];
            var7 = var8.bind(var5)(var7);
            var8 = var7.PressableOpacity;
            var7 = {};
            var12 = var12.dismissButton;
            var7['style'] = var12;
            var11 = function onPress() {
                var3 = _closure2_slot5;
                var2 = _closure2_slot0;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var7['onPress'] = var11;
            var10 = _closure1_slot8;
            var7['children'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 61:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();