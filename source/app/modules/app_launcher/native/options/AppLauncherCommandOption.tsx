// app/modules/app_launcher/native/options/AppLauncherCommandOption.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
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
    var10 = 1;
    var4 = var6[var10];
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
    var7 = var4.jsx;
    var _closure1_slot5 = var7;
    var4 = var4.jsxs;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'flexDirection': 'row', 'alignItems': 'center'};
    var4['dismissableOptionWrapper'] = var9;
    var9 = {};
    var9['flex'] = var10;
    var4['optionViewContainer'] = var9;
    var9 = {'marginLeft': 8, 'marginRight': 4294967292, 'padding': 4};
    var11 = 5;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.round;
    var9['borderRadius'] = var13;
    var4['dismissButton'] = var9;
    var9 = {};
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.INTERACTIVE_ACTIVE;
    var9['tintColor'] = var11;
    var4['dismissIcon'] = var9;
    var9 = {};
    var9['flex'] = var10;
    var4['option'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot7 = var4;
    var4 = 20;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/app_launcher/native/options/AppLauncherCommandOption.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function AppLauncherCommandOption(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
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
            var12 = var5.autoFocusType;
            var2 = var5.command;
            var14 = var5.optionValues;
            var9 = var5.hasError;
            var8 = _closure1_slot7;
            var5 = undefined;
            var13 = var8.bind(var5)();
            var11 = var1.type;
            var15 = _closure1_slot0;
            var8 = _closure1_slot2;
            var17 = 6;
            var8 = var8[var17];
            var8 = var15.bind(var5)(var8);
            var8 = var8.ApplicationCommandOptionType;
            var8 = var8.STRING;
            if(!(var8 !== var11)) { _fun0001_ip = 1247; continue _fun0001 }
 162:
            var15 = _closure1_slot0;
            var8 = _closure1_slot2;
            var8 = var8[var17];
            var8 = var15.bind(var5)(var8);
            var8 = var8.ApplicationCommandOptionType;
            var8 = var8.INTEGER;
            if(!(var8 !== var11)) { _fun0001_ip = 1247; continue _fun0001 }
 198:
            var15 = _closure1_slot0;
            var8 = _closure1_slot2;
            var8 = var8[var17];
            var8 = var15.bind(var5)(var8);
            var8 = var8.ApplicationCommandOptionType;
            var8 = var8.NUMBER;
            if(!(var8 !== var11)) { _fun0001_ip = 1247; continue _fun0001 }
 234:
            var15 = _closure1_slot0;
            var8 = _closure1_slot2;
            var8 = var8[var17];
            var8 = var15.bind(var5)(var8);
            var8 = var8.ApplicationCommandOptionType;
            var8 = var8.ATTACHMENT;
            if(!(var8 !== var11)) { _fun0001_ip = 1145; continue _fun0001 }
 270:
            var15 = _closure1_slot0;
            var8 = _closure1_slot2;
            var8 = var8[var17];
            var8 = var15.bind(var5)(var8);
            var8 = var8.ApplicationCommandOptionType;
            var8 = var8.BOOLEAN;
            if(!(var8 !== var11)) { _fun0001_ip = 1035; continue _fun0001 }
 306:
            var15 = _closure1_slot0;
            var8 = _closure1_slot2;
            var8 = var8[var17];
            var8 = var15.bind(var5)(var8);
            var8 = var8.ApplicationCommandOptionType;
            var8 = var8.MENTIONABLE;
            if(!(var8 !== var11)) { _fun0001_ip = 901; continue _fun0001 }
 342:
            var15 = _closure1_slot0;
            var8 = _closure1_slot2;
            var8 = var8[var17];
            var8 = var15.bind(var5)(var8);
            var8 = var8.ApplicationCommandOptionType;
            var8 = var8.ROLE;
            if(!(var8 !== var11)) { _fun0001_ip = 751; continue _fun0001 }
 378:
            var15 = _closure1_slot0;
            var8 = _closure1_slot2;
            var8 = var8[var17];
            var8 = var15.bind(var5)(var8);
            var8 = var8.ApplicationCommandOptionType;
            var8 = var8.USER;
            if(!(var8 !== var11)) { _fun0001_ip = 601; continue _fun0001 }
 414:
            var15 = _closure1_slot0;
            var8 = _closure1_slot2;
            var8 = var8[var17];
            var8 = var15.bind(var5)(var8);
            var8 = var8.ApplicationCommandOptionType;
            var8 = var8.CHANNEL;
            if(!(var8 !== var11)) { _fun0001_ip = 451; continue _fun0001 }
 447:
            var8 = null;
            return var8;
 451:
            var17 = _closure1_slot5;
            var11 = _closure1_slot1;
            var15 = _closure1_slot2;
            var8 = 17;
            var8 = var15[var8];
            var15 = var11.bind(var5)(var8);
            var11 = {};
            var8 = var13.option;
            var11['style'] = var8;
            var11['option'] = var1;
            var18 = var14.current;
            var8 = var1.name;
            var19 = var18[var8];
            var8 = null;
            var18 = var8 == var19;
            var8 = undefined;
            if(var18) { _fun0001_ip = 523; continue _fun0001 }
 517:
            var18 = 0;
            var8 = var19[var18];
 523:
            var11['initialValue'] = var8;
            var8 = function onChannelPress(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = arg1;
                    var1 = var1.channel;
                    var4 = _closure2_slot3;
                    var3 = _closure2_slot0;
                    var2 = null;
                    if(!(var2 == var1)) { _fun0002_ip = 31; continue _fun0002 }
 25:
                    var2 = new Array(0);
                    _fun0002_ip = 61; continue _fun0002;
 31:
                    var5 = {};
                    var6 = 'channelMention';
                    var5['type'] = var6;
                    var1 = var1.id;
                    var5['channelId'] = var1;
                    var1 = new Array(1);
                    var1[0] = var5;
                    var2 = var1;
 61:
                    var1 = undefined;
                    var2 = var4.bind(var1)(var3, var2);
                    return var1;
                }
            };
            var11['onChannelPress'] = var8;
            var8 = function onActionSheetDismiss() {
                var3 = _closure2_slot2;
                var2 = _closure2_slot0;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var11['onActionSheetDismiss'] = var8;
            var11['channel'] = var16;
            var8 = _closure1_slot4;
            var8 = var8.OPTIONAL_OPTION_ADDED;
            var8 = var12 === var8;
            var11['autoFocus'] = var8;
            var11['hasError'] = var9;
            var11['onPress'] = var4;
            var8 = var1.name;
            var8 = var17.bind(var5)(var15, var11, var8);
            _fun0001_ip = 1758; continue _fun0001;
 601:
            var18 = _closure1_slot5;
            var15 = _closure1_slot1;
            var17 = _closure1_slot2;
            var11 = 16;
            var11 = var17[var11];
            var17 = var15.bind(var5)(var11);
            var15 = {};
            var11 = var13.option;
            var15['style'] = var11;
            var15['option'] = var1;
            var19 = var14.current;
            var11 = var1.name;
            var21 = var19[var11];
            var11 = null;
            var19 = var11 == var21;
            var11 = undefined;
            if(var19) { _fun0001_ip = 673; continue _fun0001 }
 667:
            var19 = 0;
            var11 = var21[var19];
 673:
            var15['initialValue'] = var11;
            var11 = function onUserPress(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var1 = arg1;
                    var5 = var1.user;
                    var4 = _closure2_slot3;
                    var3 = _closure2_slot0;
                    var1 = null;
                    if(!(var1 != var5)) { _fun0003_ip = 70; continue _fun0003 }
 25:
                    var1 = {};
                    var2 = 'userMention';
                    var1['type'] = var2;
                    var7 = 'string';
                    var6 = typeof var5;
                    var2 = var5;
                    if(!(var7 !== var6)) { _fun0003_ip = 56; continue _fun0003 }
 51:
                    var2 = var5.id;
 56:
                    var1['userId'] = var2;
                    var2 = new Array(1);
                    var2[0] = var1;
                    _fun0003_ip = 74; continue _fun0003;
 70:
                    var2 = new Array(0);
 74:
                    var1 = undefined;
                    var2 = var4.bind(var1)(var3, var2);
                    return var1;
                }
            };
            var15['onUserPress'] = var11;
            var11 = function onActionSheetDismiss() {
                var3 = _closure2_slot2;
                var2 = _closure2_slot0;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var15['onActionSheetDismiss'] = var11;
            var15['channel'] = var16;
            var11 = _closure1_slot4;
            var11 = var11.OPTIONAL_OPTION_ADDED;
            var11 = var12 === var11;
            var15['autoFocus'] = var11;
            var15['hasError'] = var9;
            var15['onPress'] = var4;
            var11 = var1.name;
            var8 = var18.bind(var5)(var17, var15, var11);
            _fun0001_ip = 1758; continue _fun0001;
 751:
            var18 = _closure1_slot5;
            var15 = _closure1_slot1;
            var17 = _closure1_slot2;
            var11 = 15;
            var11 = var17[var11];
            var17 = var15.bind(var5)(var11);
            var15 = {};
            var11 = var13.option;
            var15['style'] = var11;
            var15['option'] = var1;
            var19 = var14.current;
            var11 = var1.name;
            var21 = var19[var11];
            var11 = null;
            var19 = var11 == var21;
            var11 = undefined;
            if(var19) { _fun0001_ip = 823; continue _fun0001 }
 817:
            var19 = 0;
            var11 = var21[var19];
 823:
            var15['initialValue'] = var11;
            var11 = function onRolePress(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var1 = arg1;
                    var2 = var1.role;
                    var4 = _closure2_slot3;
                    var3 = _closure2_slot0;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0004_ip = 56; continue _fun0004 }
 26:
                    var1 = {};
                    var5 = 'roleMention';
                    var1['type'] = var5;
                    var2 = var2.id;
                    var1['roleId'] = var2;
                    var2 = new Array(1);
                    var2[0] = var1;
                    _fun0004_ip = 60; continue _fun0004;
 56:
                    var2 = new Array(0);
 60:
                    var1 = undefined;
                    var2 = var4.bind(var1)(var3, var2);
                    return var1;
                }
            };
            var15['onRolePress'] = var11;
            var11 = function onActionSheetDismiss() {
                var3 = _closure2_slot2;
                var2 = _closure2_slot0;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var15['onActionSheetDismiss'] = var11;
            var15['channel'] = var16;
            var11 = _closure1_slot4;
            var11 = var11.OPTIONAL_OPTION_ADDED;
            var11 = var12 === var11;
            var15['autoFocus'] = var11;
            var15['hasError'] = var9;
            var15['onPress'] = var4;
            var11 = var1.name;
            var8 = var18.bind(var5)(var17, var15, var11);
            _fun0001_ip = 1758; continue _fun0001;
 901:
            var17 = _closure1_slot5;
            var15 = _closure1_slot1;
            var18 = _closure1_slot2;
            var11 = 12;
            var11 = var18[var11];
            var15 = var15.bind(var5)(var11);
            var11 = {};
            var11['option'] = var1;
            var19 = var14.current;
            var18 = var1.name;
            var21 = var19[var18];
            var18 = null;
            var19 = var18 == var21;
            var18 = undefined;
            if(var19) { _fun0001_ip = 963; continue _fun0001 }
 957:
            var19 = 0;
            var18 = var21[var19];
 963:
            var11['initialValue'] = var18;
            var18 = function onMentionablePress(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var1 = arg1;
                    var1 = var1.mentionable;
                    var2 = null;
                    if(!(var2 == var1)) { _fun0005_ip = 43; continue _fun0005 }
 15:
                    var5 = _closure2_slot3;
                    var4 = _closure2_slot0;
                    var3 = undefined;
                    var2 = new Array(0);
                    var2 = var5.bind(var3)(var4, var2);
                    _fun0005_ip = 414; continue _fun0005;
 43:
                    var5 = var1.type;
                    var6 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var7 = 13;
                    var2 = var2[var7];
                    var4 = undefined;
                    var2 = var6.bind(var4)(var2);
                    var2 = var2.MentionableItemTypes;
                    var2 = var2.USER;
                    if(!(var2 !== var5)) { _fun0005_ip = 357; continue _fun0005 }
 92:
                    var6 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var7];
                    var2 = var6.bind(var4)(var2);
                    var2 = var2.MentionableItemTypes;
                    var2 = var2.ROLE;
                    if(!(var2 !== var5)) { _fun0005_ip = 304; continue _fun0005 }
 128:
                    var6 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var7];
                    var2 = var6.bind(var4)(var2);
                    var2 = var2.MentionableItemTypes;
                    var2 = var2.GLOBAL;
                    if(!(var2 === var5)) { _fun0005_ip = 414; continue _fun0005 }
 164:
                    var2 = var1.result;
                    var5 = var2.text;
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var3 = 14;
                    var3 = var7[var3];
                    var6 = var6.bind(var4)(var3);
                    var3 = var6.MENTION_EVERYONE;
                    var3 = var3.bind(var6)();
                    var3 = var3.text;
                    if(!(var5 !== var3)) { _fun0005_ip = 263; continue _fun0005 }
 214:
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
                    _fun0005_ip = 414; continue _fun0005;
 263:
                    var5 = _closure2_slot3;
                    var3 = _closure2_slot0;
                    var2 = new Array(1);
                    var6 = {'type': 'textMention', 'text': '@everyone'};
                    var2[0] = var6;
                    var2 = var5.bind(var4)(var3, var2);
                    _fun0005_ip = 414; continue _fun0005;
 304:
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
                    _fun0005_ip = 414; continue _fun0005;
 357:
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
 414:
                    var1 = undefined;
                    return var1;
                }
            };
            var11['onMentionablePress'] = var18;
            var18 = function onActionSheetDismiss() {
                var3 = _closure2_slot2;
                var2 = _closure2_slot0;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var11['onActionSheetDismiss'] = var18;
            var11['channel'] = var16;
            var18 = _closure1_slot4;
            var18 = var18.OPTIONAL_OPTION_ADDED;
            var18 = var12 === var18;
            var11['autoFocus'] = var18;
            var11['hasError'] = var9;
            var11['onPress'] = var4;
            var8 = var17.bind(var5)(var15, var11);
            _fun0001_ip = 1758; continue _fun0001;
 1035:
            var18 = _closure1_slot5;
            var15 = _closure1_slot1;
            var17 = _closure1_slot2;
            var11 = 11;
            var11 = var17[var11];
            var17 = var15.bind(var5)(var11);
            var15 = {};
            var11 = var13.option;
            var15['style'] = var11;
            var15['option'] = var1;
            var19 = var14.current;
            var11 = var1.name;
            var21 = var19[var11];
            var11 = null;
            var19 = var11 == var21;
            var11 = undefined;
            if(var19) { _fun0001_ip = 1107; continue _fun0001 }
 1101:
            var19 = 0;
            var11 = var21[var19];
 1107:
            var15['initialValue'] = var11;
            var11 = function onPress(arg1) {
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
            var15['onPress'] = var11;
            var15['hasError'] = var9;
            var11 = var1.name;
            var8 = var18.bind(var5)(var17, var15, var11);
            _fun0001_ip = 1758; continue _fun0001;
 1145:
            var17 = _closure1_slot5;
            var15 = _closure1_slot1;
            var18 = _closure1_slot2;
            var11 = 10;
            var11 = var18[var11];
            var15 = var15.bind(var5)(var11);
            var11 = {};
            var18 = var13.option;
            var11['style'] = var18;
            var11['option'] = var1;
            var18 = function onSelectAttachment(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var5 = arg1;
                    var3 = _closure2_slot2;
                    var4 = _closure2_slot0;
                    var1 = undefined;
                    var3 = var3.bind(var1)(var4);
                    var3 = _closure2_slot3;
                    var2 = null;
                    if(!(var2 == var5)) { _fun0006_ip = 37; continue _fun0006 }
 31:
                    var2 = new Array(0);
                    _fun0006_ip = 62; continue _fun0006;
 37:
                    var6 = {};
                    var7 = 'text';
                    var6['type'] = var7;
                    var6['text'] = var5;
                    var5 = new Array(1);
                    var5[0] = var6;
                    var2 = var5;
 62:
                    var2 = var3.bind(var1)(var4, var2);
                    return var1;
                }
            };
            var11['onSelectAttachment'] = var18;
            var11['channel'] = var16;
            var18 = _closure1_slot4;
            var18 = var18.OPTIONAL_OPTION_ADDED;
            var18 = var12 === var18;
            var11['autoFocus'] = var18;
            var11['hasError'] = var9;
            var11['onPress'] = var6;
            var6 = var1.name;
            var8 = var17.bind(var5)(var15, var11, var6);
            _fun0001_ip = 1758; continue _fun0001;
 1247:
            var6 = var1.choices;
            var11 = null;
            if(!(var11 == var6)) { _fun0001_ip = 1611; continue _fun0001 }
 1262:
            var18 = var1.autocomplete;
            var15 = _closure1_slot5;
            var6 = _closure1_slot1;
            var17 = _closure1_slot2;
            if(var18) { _fun0001_ip = 1457; continue _fun0001 }
 1286:
            var18 = 9;
            var18 = var17[var18];
            var19 = var6.bind(var5)(var18);
            var18 = {};
            var21 = var13.option;
            var18['style'] = var21;
            var18['option'] = var1;
            var21 = var16.guild_id;
            var18['guildId'] = var21;
            var22 = var14.current;
            var21 = var1.name;
            var23 = var22[var21];
            var22 = var11 == var23;
            var21 = undefined;
            if(var22) { _fun0001_ip = 1353; continue _fun0001 }
 1347:
            var22 = 0;
            var21 = var23[var22];
 1353:
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
            var20 = var20.bind(var21)(var12);
            var18['autoFocus'] = var20;
            var18['hasError'] = var9;
            var18['onPressIn'] = var4;
            var4 = var1.name;
            var8 = var15.bind(var5)(var19, var18, var4);
            _fun0001_ip = 1758; continue _fun0001;
 1457:
            var4 = 8;
            var4 = var17[var4];
            var6 = var6.bind(var5)(var4);
            var4 = {};
            var17 = var13.option;
            var4['style'] = var17;
            var4['channel'] = var16;
            var4['option'] = var1;
            var4['activeCommand'] = var2;
            var4['optionValues'] = var14;
            var16 = var14.current;
            var2 = var1.name;
            var17 = var16[var2];
            var16 = var11 == var17;
            var2 = undefined;
            if(var16) { _fun0001_ip = 1529; continue _fun0001 }
 1523:
            var16 = 0;
            var2 = var17[var16];
 1529:
            var4['initialValue'] = var2;
            var2 = _closure1_slot4;
            var2 = var2.OPTIONAL_OPTION_ADDED;
            var2 = var12 === var2;
            var4['autoFocus'] = var2;
            var2 = function onSelect(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
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
                    if(var8) { _fun0007_ip = 51; continue _fun0007 }
 46:
                    var6 = var7.displayName;
 51:
                    var7 = var2 != var6;
                    var2 = '';
                    if(!var7) { _fun0007_ip = 65; continue _fun0007 }
 62:
                    var2 = var6;
 65:
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
            var4['hasError'] = var9;
            var2 = var1.name;
            var8 = var15.bind(var5)(var6, var4, var2);
            _fun0001_ip = 1758; continue _fun0001;
 1611:
            var6 = _closure1_slot5;
            var4 = _closure1_slot1;
            var15 = _closure1_slot2;
            var2 = 7;
            var2 = var15[var2];
            var4 = var4.bind(var5)(var2);
            var2 = {};
            var15 = var13.option;
            var2['style'] = var15;
            var2['option'] = var1;
            var15 = var14.current;
            var14 = var1.name;
            var15 = var15[var14];
            var14 = var11 == var15;
            var11 = undefined;
            if(var14) { _fun0001_ip = 1681; continue _fun0001 }
 1675:
            var14 = 0;
            var11 = var15[var14];
 1681:
            var2['initialValue'] = var11;
            var11 = function onSelect(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
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
                    if(var8) { _fun0008_ip = 51; continue _fun0008 }
 46:
                    var6 = var7.displayName;
 51:
                    var7 = var2 != var6;
                    var2 = '';
                    if(!var7) { _fun0008_ip = 65; continue _fun0008 }
 62:
                    var2 = var6;
 65:
                    var5['text'] = var2;
                    var2 = new Array(1);
                    var2[0] = var5;
                    var2 = var3.bind(var1)(var4, var2);
                    return var1;
                }
            };
            var2['onSelect'] = var11;
            var11 = function onOpenChoicesSheet() {
                var3 = _closure2_slot4;
                var1 = undefined;
                var3 = var3.bind(var1)();
                var3 = _closure2_slot1;
                var2 = _closure2_slot0;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var2['onOpenChoicesSheet'] = var11;
            var11 = function onDismissChoicesSheet() {
                var3 = _closure2_slot2;
                var2 = _closure2_slot0;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var2['onDismissChoicesSheet'] = var11;
            var11 = _closure1_slot4;
            var11 = var11.OPTIONAL_OPTION_ADDED;
            var11 = var12 === var11;
            var2['autoFocus'] = var11;
            var2['hasError'] = var9;
            var1 = var1.name;
            var8 = var6.bind(var5)(var4, var2, var1);
 1758:
            var2 = null;
            var1 = var8;
            if(!(var2 != var3)) { _fun0001_ip = 1931; continue _fun0001 }
 1770:
            var4 = _closure1_slot6;
            var3 = _closure1_slot3;
            var2 = {};
            var6 = var13.dismissableOptionWrapper;
            var2['style'] = var6;
            var9 = _closure1_slot5;
            var6 = {};
            var11 = var13.optionViewContainer;
            var6['style'] = var11;
            var6['children'] = var8;
            var8 = var9.bind(var5)(var3, var6);
            var6 = new Array(2);
            var6[0] = var8;
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var7 = 18;
            var7 = var12[var7];
            var7 = var11.bind(var5)(var7);
            var8 = var7.PressableOpacity;
            var7 = {};
            var13 = var13.dismissButton;
            var7['style'] = var13;
            var10 = function onPress() {
                var3 = _closure2_slot5;
                var2 = _closure2_slot0;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var7['onPress'] = var10;
            var10 = 19;
            var10 = var12[var10];
            var10 = var11.bind(var5)(var10);
            var11 = var10.CircleXIcon;
            var10 = {};
            var12 = 'md';
            var10['size'] = var12;
            var10 = var9.bind(var5)(var11, var10);
            var7['children'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 1931:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();