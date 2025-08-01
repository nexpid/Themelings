// app/modules/application_commands/native/ExecutedApplicationCommandPopout.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var7 = metroImportAll;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var7;
    var _closure1_slot3 = var6;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 45; continue _fun0001 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 45:
            if(var2) { _fun0001_ip = 54; continue _fun0001 }
 48:
            var2 = var3.@@iterator;
 54:
            if(var2) { _fun0001_ip = 344; continue _fun0001 }
 60:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 322; continue _fun0001 }
 85:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 282; continue _fun0001 }
 95:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 269; continue _fun0001 }
 109:
            var7 = {};
            var9 = var7.toString;
            var7 = var9.call;
            var11 = var7.bind(var9)(var3);
            var10 = var11.slice;
            var9 = 8;
            var7 = -1;
            var9 = var10.bind(var11)(var9, var7);
            var7 = 'Object';
            var7 = var7 === var9;
            if(!var7) { _fun0001_ip = 162; continue _fun0001 }
 157:
            var7 = var3.constructor;
 162:
            var10 = var9;
            if(!var7) { _fun0001_ip = 178; continue _fun0001 }
 168:
            var7 = var3.constructor;
            var10 = var7.name;
 178:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 248; continue _fun0001 }
 186:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 248; continue _fun0001 }
 194:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 233; continue _fun0001 }
 204:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 246; continue _fun0001 }
 233:
            var9 = _closure1_slot28;
            var7 = var9.bind(var8)(var3, var8);
 246:
            _fun0001_ip = 264; continue _fun0001;
 248:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 264:
            var6 = var7;
            _fun0001_ip = 282; continue _fun0001;
 269:
            var7 = _closure1_slot28;
            var6 = var7.bind(var8)(var3, var8);
 282:
            var4 = var6;
            if(var4) { _fun0001_ip = 322; continue _fun0001 }
 288:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
 322:
            if(!var4) { _fun0001_ip = 329; continue _fun0001 }
 325:
            _closure2_slot0 = var4;
 329:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 56; continue _fun0002 }
 20:
                    var1 = {};
                    var2 = false;
                    var1['done'] = var2;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var2 = parseFloat(var2);
                    var4 = var2 + 1;
                    _closure2_slot1 = var4;
                    var2 = var3[var2];
                    var1['value'] = var2;
                    _fun0002_ip = 67; continue _fun0002;
 56:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
 67:
                    return var1;
                }
            };
            return var1;
 344:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot27 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 23; continue _fun0003 }
 14:
            var2 = var4.length;
            var1 = var3 > var2;
 23:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
 28:
            var2 = var4.length;
 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 70; continue _fun0003 }
 55:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 55; continue _fun0003 }
 70:
            return var1;
        }
    };
    var _closure1_slot28 = var1;
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
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.ActivityIndicator;
    var _closure1_slot5 = var7;
    var4 = var4.NativeModules;
    var _closure1_slot6 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.SUB_COMMAND_KEY_SEPARATOR;
    var _closure1_slot12 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var13 = var4.Fonts;
    var7 = var4.MessageTypes;
    var _closure1_slot13 = var7;
    var4 = var4.WHITESPACE_RE;
    var _closure1_slot14 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AppLauncherRouteName;
    var _closure1_slot15 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.CHANNEL_SENTINEL;
    var _closure1_slot16 = var7;
    var7 = var4.COMMAND_SENTINEL;
    var _closure1_slot17 = var7;
    var4 = var4.MENTION_SENTINEL;
    var _closure1_slot18 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot19 = var7;
    var7 = var4.jsxs;
    var _closure1_slot20 = var7;
    var4 = var4.Fragment;
    var _closure1_slot21 = var4;
    var10 = 12;
    var4 = var6[var10];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var12 = 16;
    var9 = {'paddingVertical': 8, 'paddingHorizontal': 16, 'gap': 16};
    var4['container'] = var9;
    var9 = {};
    var9['padding'] = var12;
    var4['activityIndicator'] = var9;
    var9 = {};
    var13 = var13.PRIMARY_SEMIBOLD;
    var9['fontFamily'] = var13;
    var4['commandUserText'] = var9;
    var13 = 'center';
    var9 = {'width': 18, 'height': 18, 'borderRadius': 9, 'alignSelf': 'center'};
    var4['applicationIcon'] = var9;
    var9 = {};
    var9['textAlignVertical'] = var13;
    var4['applicationNameText'] = var9;
    var9 = {};
    var9['marginTop'] = var10;
    var4['commandOptionText'] = var9;
    var9 = {};
    var10 = 13;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BG_BRAND;
    var9['color'] = var13;
    var4['commandOptionMentionText'] = var9;
    var9 = {};
    var9['fontSize'] = var12;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.HEADER_PRIMARY;
    var9['color'] = var10;
    var4['commandText'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot22 = var4;
    var4 = function getCommandOptionComponents(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var4 = arg1;
            var2 = var4.option;
            var _closure2_slot0 = var2;
            var14 = var4.channel;
            var _closure2_slot1 = var14;
            var13 = var4.guild;
            var12 = var4.messageId;
            var1 = var4.parentOptionName;
            var17 = var4.commandOptionSpec;
            var11 = var4.styles;
            var _closure2_slot2 = var11;
            var10 = var4.analyticsLocations;
            var24 = ' ';
            var4 = var1 + var24;
            var1 = var2.name;
            var9 = var4 + var1;
            var15 = new Array(0);
            var6 = null;
            var1 = var6 == var17;
            var8 = undefined;
            var7 = undefined;
            if(var1) { _fun0004_ip = 102; continue _fun0004 }
 96:
            var7 = var17.name_localized;
 102:
            if(!(var6 == var7)) { _fun0004_ip = 111; continue _fun0004 }
 106:
            var7 = var2.name;
 111:
            var1 = var2.value;
            if(!(var6 == var1)) { _fun0004_ip = 140; continue _fun0004 }
 120:
            var1 = global;
            var1 = var1.HermesInternal;
            var1 = var1.concat;
            var4 = var1.bind(var24)(var7);
            _fun0004_ip = 163; continue _fun0004;
 140:
            var1 = global;
            var1 = var1.HermesInternal;
            var5 = var1.concat;
            var1 = ':';
            var4 = var5.bind(var24)(var7, var1);
 163:
            var5 = var2.type;
            var16 = _closure1_slot0;
            var1 = _closure1_slot3;
            var21 = 14;
            var1 = var1[var21];
            var1 = var16.bind(var8)(var1);
            var1 = var1.ApplicationCommandOptionType;
            var1 = var1.SUB_COMMAND;
            if(!(var5 !== var1)) { _fun0004_ip = 1149; continue _fun0004 }
 210:
            var5 = var2.type;
            var16 = _closure1_slot0;
            var1 = _closure1_slot3;
            var1 = var1[var21];
            var1 = var16.bind(var8)(var1);
            var1 = var1.ApplicationCommandOptionType;
            var1 = var1.SUB_COMMAND_GROUP;
            if(!(var5 !== var1)) { _fun0004_ip = 1149; continue _fun0004 }
 251:
            var5 = function getUserComponent(arg1, arg2) {
                var9 = arg1;
                var _closure3_slot0 = var9;
                var5 = _closure1_slot20;
                var3 = _closure1_slot0;
                var8 = _closure1_slot3;
                var2 = 15;
                var2 = var8[var2];
                var4 = undefined;
                var2 = var3.bind(var4)(var2);
                var3 = var2.LegacyText;
                var2 = {};
                var7 = arg2;
                var7 = var7.commandOptionMentionText;
                var2['style'] = var7;
                var1 = function onPress() {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot3;
                        var1 = 16;
                        var2 = var4[var1];
                        var1 = undefined;
                        var5 = var3.bind(var1)(var2);
                        var2 = var5.hideActionSheet;
                        var2 = var2.bind(var5)();
                        var2 = 17;
                        var2 = var4[var2];
                        var3 = var3.bind(var1)(var2);
                        var2 = {};
                        var4 = _closure3_slot0;
                        var4 = var4.id;
                        var2['userId'] = var4;
                        var6 = _closure2_slot1;
                        var4 = null;
                        var6 = var4 == var6;
                        var4 = undefined;
                        if(var6) { _fun0005_ip = 92; continue _fun0005 }
 83:
                        var5 = _closure2_slot1;
                        var4 = var5.id;
 92:
                        var2['channelId'] = var4;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    }
                };
                var2['onPress'] = var1;
                var7 = _closure1_slot18;
                var1 = new Array(2);
                var1[0] = var7;
                var7 = _closure1_slot1;
                var6 = 18;
                var6 = var8[var6];
                var8 = var7.bind(var4)(var6);
                var7 = var8.getUserTag;
                var6 = {};
                var10 = 'never';
                var6['decoration'] = var10;
                var6 = var7.bind(var8)(var9, var6);
                var1[1] = var6;
                var2['children'] = var1;
                var1 = _closure2_slot0;
                var7 = var1.name;
                var1 = global;
                var1 = var1.HermesInternal;
                var6 = var1.concat;
                var1 = 'optionValue-';
                var1 = var6.bind(var1)(var7);
                var1 = var5.bind(var4)(var3, var2, var1);
                return var1;
            };
            var18 = function getRoleComponent(arg1) {
                var5 = _closure1_slot20;
                var2 = _closure1_slot0;
                var3 = _closure1_slot3;
                var1 = 15;
                var1 = var3[var1];
                var4 = undefined;
                var1 = var2.bind(var4)(var1);
                var3 = var1.LegacyText;
                var2 = {};
                var7 = _closure2_slot2;
                var7 = var7.commandOptionMentionText;
                var2['style'] = var7;
                var7 = _closure1_slot18;
                var6 = new Array(2);
                var6[0] = var7;
                var7 = arg1;
                var7 = var7.name;
                var6[1] = var7;
                var2['children'] = var6;
                var1 = _closure2_slot0;
                var7 = var1.name;
                var1 = global;
                var1 = var1.HermesInternal;
                var6 = var1.concat;
                var1 = 'optionValue-';
                var1 = var6.bind(var1)(var7);
                var1 = var5.bind(var4)(var3, var2, var1);
                return var1;
            };
            var16 = function getCommandValueText(arg1) {
                var5 = _closure1_slot19;
                var2 = _closure1_slot0;
                var3 = _closure1_slot3;
                var1 = 19;
                var1 = var3[var1];
                var4 = undefined;
                var1 = var2.bind(var4)(var1);
                var3 = var1.Text;
                var2 = {'variant': 'text-sm/medium', 'color': 'header-primary'};
                var1 = arg1;
                var2['children'] = var1;
                var1 = _closure2_slot0;
                var7 = var1.name;
                var1 = global;
                var1 = var1.HermesInternal;
                var6 = var1.concat;
                var1 = 'optionValue-';
                var1 = var6.bind(var1)(var7);
                var1 = var5.bind(var4)(var3, var2, var1);
                return var1;
            };
            var1 = var2.value;
            if(!(var6 != var1)) { _fun0004_ip = 1147; continue _fun0004 }
 284:
            var19 = var2.type;
            var20 = _closure1_slot0;
            var1 = _closure1_slot3;
            var1 = var1[var21];
            var1 = var20.bind(var8)(var1);
            var1 = var1.ApplicationCommandOptionType;
            var1 = var1.USER;
            if(!(var1 !== var19)) { _fun0004_ip = 842; continue _fun0004 }
 325:
            var20 = _closure1_slot0;
            var1 = _closure1_slot3;
            var1 = var1[var21];
            var1 = var20.bind(var8)(var1);
            var1 = var1.ApplicationCommandOptionType;
            var1 = var1.CHANNEL;
            if(!(var1 !== var19)) { _fun0004_ip = 697; continue _fun0004 }
 361:
            var20 = _closure1_slot0;
            var1 = _closure1_slot3;
            var1 = var1[var21];
            var1 = var20.bind(var8)(var1);
            var1 = var1.ApplicationCommandOptionType;
            var1 = var1.ROLE;
            if(!(var1 !== var19)) { _fun0004_ip = 631; continue _fun0004 }
 397:
            var20 = _closure1_slot0;
            var1 = _closure1_slot3;
            var1 = var1[var21];
            var1 = var20.bind(var8)(var1);
            var1 = var1.ApplicationCommandOptionType;
            var1 = var1.MENTIONABLE;
            if(!(var1 !== var19)) { _fun0004_ip = 535; continue _fun0004 }
 430:
            var20 = _closure1_slot0;
            var1 = _closure1_slot3;
            var1 = var1[var21];
            var1 = var20.bind(var8)(var1);
            var1 = var1.ApplicationCommandOptionType;
            var1 = var1.ATTACHMENT;
            var20 = null;
            if(!(var1 === var19)) { _fun0004_ip = 886; continue _fun0004 }
 468:
            var22 = _closure1_slot0;
            var23 = _closure1_slot3;
            var1 = 20;
            var19 = var23[var1];
            var19 = var22.bind(var8)(var19);
            var21 = var19.intl;
            var19 = var21.string;
            var1 = var23[var1];
            var1 = var22.bind(var8)(var1);
            var1 = var1.t;
            var1 = var1.nONJVV;
            var1 = var19.bind(var21)(var1);
            var20 = var16.bind(var8)(var1);
            _fun0004_ip = 886; continue _fun0004;
 535:
            var19 = var2.value;
            var1 = var19.toString;
            var22 = var1.bind(var19)();
            var19 = var6 != var13;
            var1 = undefined;
            if(!var19) { _fun0004_ip = 579; continue _fun0004 }
 558:
            var23 = _closure1_slot8;
            var21 = var23.getRole;
            var19 = var13.id;
            var1 = var21.bind(var23)(var19, var22);
 579:
            if(!(var6 == var1)) { _fun0004_ip = 621; continue _fun0004 }
 583:
            var21 = _closure1_slot11;
            var19 = var21.getUser;
            var19 = var19.bind(var21)(var22);
            var21 = var6 != var19;
            var20 = null;
            if(!var21) { _fun0004_ip = 886; continue _fun0004 }
 610:
            var20 = var5.bind(var8)(var19, var11);
            _fun0004_ip = 886; continue _fun0004;
 621:
            var20 = var18.bind(var8)(var1);
            _fun0004_ip = 886; continue _fun0004;
 631:
            var19 = var2.value;
            var1 = var19.toString;
            var23 = var1.bind(var19)();
            var19 = var6 != var13;
            var1 = undefined;
            if(!var19) { _fun0004_ip = 675; continue _fun0004 }
 654:
            var22 = _closure1_slot8;
            var21 = var22.getRole;
            var19 = var13.id;
            var1 = var21.bind(var22)(var19, var23);
 675:
            var19 = var6 != var1;
            var20 = null;
            if(!var19) { _fun0004_ip = 886; continue _fun0004 }
 687:
            var20 = var18.bind(var8)(var1);
            _fun0004_ip = 886; continue _fun0004;
 697:
            var18 = var2.value;
            var1 = var18.toString;
            var19 = var1.bind(var18)();
            var18 = _closure1_slot7;
            var1 = var18.getChannel;
            var22 = var1.bind(var18)(var19);
            var1 = var6 != var22;
            var20 = null;
            if(!var1) { _fun0004_ip = 886; continue _fun0004 }
 737:
            var21 = _closure1_slot20;
            var18 = _closure1_slot0;
            var19 = _closure1_slot3;
            var1 = 15;
            var1 = var19[var1];
            var1 = var18.bind(var8)(var1);
            var19 = var1.LegacyText;
            var18 = {};
            var1 = var11.commandOptionMentionText;
            var18['style'] = var1;
            var23 = _closure1_slot16;
            var1 = new Array(2);
            var1[0] = var23;
            var22 = var22.name;
            var1[1] = var22;
            var18['children'] = var1;
            var23 = var2.name;
            var1 = global;
            var1 = var1.HermesInternal;
            var22 = var1.concat;
            var1 = 'optionValue-';
            var1 = var22.bind(var1)(var23);
            var20 = var21.bind(var8)(var19, var18, var1);
            _fun0004_ip = 886; continue _fun0004;
 842:
            var18 = var2.value;
            var1 = var18.toString;
            var19 = var1.bind(var18)();
            var18 = _closure1_slot11;
            var1 = var18.getUser;
            var1 = var1.bind(var18)(var19);
            var18 = var6 != var1;
            var20 = null;
            if(!var18) { _fun0004_ip = 886; continue _fun0004 }
 880:
            var20 = var5.bind(var8)(var1, var11);
 886:
            var1 = var6 == var20;
            var19 = true;
            if(!var1) { _fun0004_ip = 1016; continue _fun0004 }
 895:
            var1 = var6 == var17;
            var18 = undefined;
            if(var1) { _fun0004_ip = 937; continue _fun0004 }
 904:
            var21 = var17.choices;
            var1 = var6 == var21;
            var18 = undefined;
            if(var1) { _fun0004_ip = 937; continue _fun0004 }
 919:
            var5 = var21.find;
            var1 = function(arg1) {
                var1 = arg1;
                var2 = var1.value;
                var1 = _closure2_slot0;
                var1 = var1.value;
                var1 = var2 === var1;
                return var1;
            };
            var18 = var5.bind(var21)(var1);
 937:
            var5 = var2.value;
            var1 = var5.toString;
            var5 = var1.bind(var5)();
            if(!(var6 != var18)) { _fun0004_ip = 973; continue _fun0004 }
 955:
            var1 = var18.name_localized;
            if(!(var6 == var1)) { _fun0004_ip = 970; continue _fun0004 }
 965:
            var1 = var18.name;
 970:
            var5 = var1;
 973:
            var1 = var5.length;
            var18 = 0;
            var1 = var1 > var18;
            if(!var1) { _fun0004_ip = 1008; continue _fun0004 }
 987:
            var22 = _closure1_slot14;
            var21 = var22.test;
            var18 = var5[var18];
            var18 = var21.bind(var22)(var18);
            var1 = !var18;
 1008:
            var20 = var16.bind(var8)(var5);
            var19 = var1;
 1016:
            var5 = var15.push;
            var18 = _closure1_slot20;
            var1 = _closure1_slot4;
            var16 = var1.Fragment;
            var1 = {};
            var23 = _closure1_slot19;
            var22 = _closure1_slot0;
            var25 = _closure1_slot3;
            var21 = 15;
            var21 = var25[var21];
            var21 = var22.bind(var8)(var21);
            var22 = var21.LegacyText;
            var21 = {};
            if(!var19) { _fun0004_ip = 1075; continue _fun0004 }
 1072:
            var19 = var24;
 1075:
            var19 = var4 + var19;
            var21['children'] = var19;
            var25 = var2.name;
            var19 = global;
            var19 = var19.HermesInternal;
            var24 = var19.concat;
            var19 = 'optionKey-';
            var19 = var24.bind(var19)(var25);
            var21 = var23.bind(var8)(var22, var21, var19);
            var19 = new Array(2);
            var19[0] = var21;
            var19[1] = var20;
            var1['children'] = var19;
            var1 = var18.bind(var8)(var16, var1, var9);
            var1 = var5.bind(var15)(var1);
 1147:
            return var15;
 1149:
            var5 = var15.push;
            var18 = _closure1_slot19;
            var1 = _closure1_slot4;
            var16 = var1.Fragment;
            var1 = {};
            var20 = _closure1_slot0;
            var21 = _closure1_slot3;
            var19 = 15;
            var19 = var21[var19];
            var19 = var20.bind(var8)(var19);
            var21 = var19.LegacyText;
            var20 = {};
            var20['children'] = var4;
            var23 = var2.name;
            var4 = global;
            var19 = var4.HermesInternal;
            var22 = var19.concat;
            var19 = 'optionKey-';
            var19 = var22.bind(var19)(var23);
            var19 = var18.bind(var8)(var21, var20, var19);
            var1['children'] = var19;
            var1 = var18.bind(var8)(var16, var1, var9);
            var1 = var5.bind(var15)(var1);
            var5 = var2.options;
            var1 = var15;
            if(!(var6 != var5)) { _fun0004_ip = 1447; continue _fun0004 }
 1269:
            var5 = var4.Object;
            var4 = var5.fromEntries;
            var18 = var6 == var17;
            var16 = undefined;
            if(var18) { _fun0004_ip = 1295; continue _fun0004 }
 1290:
            var16 = var17.options;
 1295:
            if(!(var6 == var16)) { _fun0004_ip = 1303; continue _fun0004 }
 1299:
            var16 = new Array(0);
 1303:
            var6 = var16.map;
            var3 = function(arg1) {
                var2 = arg1;
                var3 = var2.name;
                var1 = new Array(2);
                var1[0] = var3;
                var1[1] = var2;
                return var1;
            };
            var3 = var6.bind(var16)(var3);
            var6 = var4.bind(var5)(var3);
            var3 = _closure1_slot27;
            var2 = var2.options;
            var5 = var3.bind(var8)(var2);
            var3 = var5.bind(var8)();
            var2 = var3.done;
            var4 = var15;
            var1 = var4;
            if(var2) { _fun0004_ip = 1447; continue _fun0004 }
 1357:
            var17 = var3.value;
            var15 = var4.concat;
            var16 = _closure1_slot23;
            var2 = {};
            var2['option'] = var17;
            var2['channel'] = var14;
            var2['guild'] = var13;
            var2['messageId'] = var12;
            var2['parentOptionName'] = var9;
            var17 = var17.name;
            var17 = var6[var17];
            var2['commandOptionSpec'] = var17;
            var2['styles'] = var11;
            var2['analyticsLocations'] = var10;
            var2 = var16.bind(var8)(var2);
            var4 = var15.bind(var4)(var2);
            var16 = var5.bind(var8)();
            var2 = var16.done;
            var3 = var16;
            var1 = var4;
            if(!var2) { _fun0004_ip = 1357; continue _fun0004 }
 1447:
            return var1;
        }
    };
    var _closure1_slot23 = var4;
    var4 = function getCommandCopyText(arg1, arg2, arg3, arg4) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var2 = arg1;
            var10 = arg2;
            var9 = arg3;
            var13 = arg4;
            var _closure2_slot0 = var2;
            var11 = new Array(0);
            var6 = null;
            var1 = var6 == var13;
            var8 = undefined;
            var12 = undefined;
            if(var1) { _fun0006_ip = 41; continue _fun0006 }
 35:
            var12 = var13.name_localized;
 41:
            if(!(var6 == var12)) { _fun0006_ip = 50; continue _fun0006 }
 45:
            var12 = var2.name;
 50:
            var1 = var2.value;
            if(!(var6 == var1)) { _fun0006_ip = 83; continue _fun0006 }
 59:
            var1 = global;
            var1 = var1.HermesInternal;
            var4 = var1.concat;
            var1 = '';
            var4 = var4.bind(var1)(var12);
            _fun0006_ip = 110; continue _fun0006;
 83:
            var1 = global;
            var1 = var1.HermesInternal;
            var7 = var1.concat;
            var5 = '';
            var1 = ':';
            var4 = var7.bind(var5)(var12, var1);
 110:
            var5 = var2.type;
            var12 = _closure1_slot0;
            var1 = _closure1_slot3;
            var15 = 14;
            var1 = var1[var15];
            var1 = var12.bind(var8)(var1);
            var1 = var1.ApplicationCommandOptionType;
            var1 = var1.SUB_COMMAND;
            if(!(var5 !== var1)) { _fun0006_ip = 838; continue _fun0006 }
 157:
            var5 = var2.type;
            var12 = _closure1_slot0;
            var1 = _closure1_slot3;
            var1 = var1[var15];
            var1 = var12.bind(var8)(var1);
            var1 = var1.ApplicationCommandOptionType;
            var1 = var1.SUB_COMMAND_GROUP;
            if(!(var5 !== var1)) { _fun0006_ip = 838; continue _fun0006 }
 198:
            var1 = var2.value;
            var5 = var6 != var1;
            var1 = null;
            if(!var5) { _fun0006_ip = 734; continue _fun0006 }
 215:
            var12 = var2.type;
            var14 = _closure1_slot0;
            var5 = _closure1_slot3;
            var5 = var5[var15];
            var5 = var14.bind(var8)(var5);
            var5 = var5.ApplicationCommandOptionType;
            var5 = var5.USER;
            if(!(var5 !== var12)) { _fun0006_ip = 643; continue _fun0006 }
 256:
            var14 = _closure1_slot0;
            var5 = _closure1_slot3;
            var5 = var5[var15];
            var5 = var14.bind(var8)(var5);
            var5 = var5.ApplicationCommandOptionType;
            var5 = var5.CHANNEL;
            if(!(var5 !== var12)) { _fun0006_ip = 591; continue _fun0006 }
 292:
            var14 = _closure1_slot0;
            var5 = _closure1_slot3;
            var5 = var5[var15];
            var5 = var14.bind(var8)(var5);
            var5 = var5.ApplicationCommandOptionType;
            var5 = var5.ROLE;
            if(!(var5 !== var12)) { _fun0006_ip = 517; continue _fun0006 }
 328:
            var14 = _closure1_slot0;
            var5 = _closure1_slot3;
            var5 = var5[var15];
            var5 = var14.bind(var8)(var5);
            var5 = var5.ApplicationCommandOptionType;
            var5 = var5.MENTIONABLE;
            var1 = null;
            if(!(var5 === var12)) { _fun0006_ip = 734; continue _fun0006 }
 366:
            var12 = var2.value;
            var5 = var12.toString;
            var15 = var5.bind(var12)();
            var12 = var6 != var9;
            var5 = undefined;
            if(!var12) { _fun0006_ip = 410; continue _fun0006 }
 389:
            var16 = _closure1_slot8;
            var14 = var16.getRole;
            var12 = var9.id;
            var5 = var14.bind(var16)(var12, var15);
 410:
            if(!(var6 == var5)) { _fun0006_ip = 499; continue _fun0006 }
 414:
            var14 = _closure1_slot11;
            var12 = var14.getUser;
            var17 = var12.bind(var14)(var15);
            var12 = var6 != var17;
            var1 = null;
            if(!var12) { _fun0006_ip = 734; continue _fun0006 }
 441:
            var14 = _closure1_slot18;
            var15 = _closure1_slot1;
            var16 = _closure1_slot3;
            var12 = 18;
            var12 = var16[var12];
            var16 = var15.bind(var8)(var12);
            var15 = var16.getUserTag;
            var12 = {};
            var18 = 'never';
            var12['decoration'] = var18;
            var12 = var15.bind(var16)(var17, var12);
            var1 = var14 + var12;
            _fun0006_ip = 734; continue _fun0006;
 499:
            var12 = _closure1_slot18;
            var5 = var5.name;
            var1 = var12 + var5;
            _fun0006_ip = 734; continue _fun0006;
 517:
            var12 = var2.value;
            var5 = var12.toString;
            var16 = var5.bind(var12)();
            var12 = var6 != var9;
            var5 = undefined;
            if(!var12) { _fun0006_ip = 561; continue _fun0006 }
 540:
            var15 = _closure1_slot8;
            var14 = var15.getRole;
            var12 = var9.id;
            var5 = var14.bind(var15)(var12, var16);
 561:
            var12 = var6 != var5;
            var1 = null;
            if(!var12) { _fun0006_ip = 734; continue _fun0006 }
 573:
            var12 = _closure1_slot18;
            var5 = var5.name;
            var1 = var12 + var5;
            _fun0006_ip = 734; continue _fun0006;
 591:
            var12 = var2.value;
            var5 = var12.toString;
            var14 = var5.bind(var12)();
            var12 = _closure1_slot7;
            var5 = var12.getChannel;
            var5 = var5.bind(var12)(var14);
            var12 = var6 != var5;
            var1 = null;
            if(!var12) { _fun0006_ip = 734; continue _fun0006 }
 628:
            var12 = _closure1_slot16;
            var5 = var5.name;
            var1 = var12 + var5;
            _fun0006_ip = 734; continue _fun0006;
 643:
            var12 = var2.value;
            var5 = var12.toString;
            var14 = var5.bind(var12)();
            var12 = _closure1_slot11;
            var5 = var12.getUser;
            var16 = var5.bind(var12)(var14);
            var5 = var6 != var16;
            var1 = null;
            if(!var5) { _fun0006_ip = 734; continue _fun0006 }
 681:
            var12 = _closure1_slot18;
            var14 = _closure1_slot1;
            var15 = _closure1_slot3;
            var5 = 18;
            var5 = var15[var5];
            var15 = var14.bind(var8)(var5);
            var14 = var15.getUserTag;
            var5 = {};
            var17 = 'never';
            var5['decoration'] = var17;
            var5 = var14.bind(var15)(var16, var5);
            var1 = var12 + var5;
 734:
            if(!(var6 == var1)) { _fun0006_ip = 822; continue _fun0006 }
 738:
            var5 = var6 == var13;
            var12 = undefined;
            if(var5) { _fun0006_ip = 780; continue _fun0006 }
 747:
            var15 = var13.choices;
            var5 = var6 == var15;
            var12 = undefined;
            if(var5) { _fun0006_ip = 780; continue _fun0006 }
 762:
            var14 = var15.find;
            var5 = function(arg1) {
                var1 = arg1;
                var2 = var1.value;
                var1 = _closure2_slot0;
                var1 = var1.value;
                var1 = var2 === var1;
                return var1;
            };
            var12 = var14.bind(var15)(var5);
 780:
            if(!(var6 == var12)) { _fun0006_ip = 804; continue _fun0006 }
 784:
            var5 = global;
            var14 = var5.String;
            var5 = var2.value;
            var1 = var14.bind(var8)(var5);
            _fun0006_ip = 822; continue _fun0006;
 804:
            var5 = var12.name_localized;
            if(!(var6 == var5)) { _fun0006_ip = 819; continue _fun0006 }
 814:
            var5 = var12.name;
 819:
            var1 = var5;
 822:
            var5 = var11.push;
            var1 = var4 + var1;
            var1 = var5.bind(var11)(var1);
            return var11;
 838:
            var1 = var11.push;
            var1 = var1.bind(var11)(var4);
            var4 = var2.options;
            var1 = var11;
            if(!(var6 != var4)) { _fun0006_ip = 1014; continue _fun0006 }
 863:
            var4 = global;
            var5 = var4.Object;
            var4 = var5.fromEntries;
            var14 = var6 == var13;
            var12 = undefined;
            if(var14) { _fun0006_ip = 891; continue _fun0006 }
 886:
            var12 = var13.options;
 891:
            if(!(var6 == var12)) { _fun0006_ip = 899; continue _fun0006 }
 895:
            var12 = new Array(0);
 899:
            var6 = var12.map;
            var3 = function(arg1) {
                var2 = arg1;
                var3 = var2.name;
                var1 = new Array(2);
                var1[0] = var3;
                var1[1] = var2;
                return var1;
            };
            var3 = var6.bind(var12)(var3);
            var6 = var4.bind(var5)(var3);
            var3 = _closure1_slot27;
            var2 = var2.options;
            var5 = var3.bind(var8)(var2);
            var3 = var5.bind(var8)();
            var2 = var3.done;
            var4 = var11;
            var1 = var4;
            if(var2) { _fun0006_ip = 1014; continue _fun0006 }
 953:
            var13 = var3.value;
            var11 = var4.concat;
            var12 = _closure1_slot24;
            var2 = var13.name;
            var19 = var6[var2];
            var23 = undefined;
            var22 = var13;
            var21 = var10;
            var20 = var9;
            var2 = var23[var12](var22, var21, var20, var19, var18);
            var4 = var11.bind(var4)(var2);
            var12 = var5.bind(var8)();
            var2 = var12.done;
            var3 = var12;
            var1 = var4;
            if(!var2) { _fun0006_ip = 953; continue _fun0006 }
 1014:
            return var1;
        }
    };
    var _closure1_slot24 = var4;
    var4 = function CommandContentContainer(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var3 = arg1;
            var2 = var3.channelId;
            var _closure2_slot0 = var2;
            var4 = var3.author;
            var _closure2_slot1 = var4;
            var4 = var3.applicationUser;
            var _closure2_slot2 = var4;
            var10 = var3.data;
            var _closure2_slot3 = var10;
            var4 = var3.guildId;
            var _closure2_slot4 = var4;
            var4 = var3.messageType;
            var _closure2_slot5 = var4;
            var14 = var3.messageId;
            var _closure2_slot6 = var14;
            var4 = undefined;
            var _closure2_slot11 = var4;
            var3 = _closure1_slot22;
            var12 = var3.bind(var4)();
            var _closure2_slot7 = var12;
            var5 = _closure1_slot1;
            var7 = _closure1_slot3;
            var3 = 21;
            var3 = var7[var3];
            var3 = var5.bind(var4)(var3);
            var3 = var3.bind(var4)();
            var9 = var3.analyticsLocations;
            var _closure2_slot8 = var9;
            var5 = _closure1_slot0;
            var3 = 22;
            var3 = var7[var3];
            var8 = var5.bind(var4)(var3);
            var7 = var8.useStateFromStoresObject;
            var3 = _closure1_slot7;
            var5 = new Array(2);
            var5[0] = var3;
            var3 = _closure1_slot9;
            var5[1] = var3;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var4 = _closure1_slot7;
                    var3 = var4.getChannel;
                    var1 = _closure2_slot0;
                    var5 = var3.bind(var4)(var1);
                    var1 = {};
                    var1['channel'] = var5;
                    var4 = _closure1_slot9;
                    var3 = var4.getGuild;
                    var2 = null;
                    var6 = var2 == var5;
                    var2 = undefined;
                    if(var6) { _fun0008_ip = 55; continue _fun0008 }
 50:
                    var2 = var5.guild_id;
 55:
                    var2 = var3.bind(var4)(var2);
                    var1['guild'] = var2;
                    return var1;
                }
            };
            var2 = var7.bind(var8)(var5, var2, var3);
            var16 = var2.channel;
            var _closure2_slot9 = var16;
            var15 = var2.guild;
            var _closure2_slot10 = var15;
            var3 = var10.application_command;
            var2 = null;
            var5 = var2 == var3;
            var11 = undefined;
            if(var5) { _fun0007_ip = 231; continue _fun0007 }
 225:
            var11 = var3.name_localized;
 231:
            if(!(var2 == var11)) { _fun0007_ip = 240; continue _fun0007 }
 235:
            var11 = var10.name;
 240:
            _closure2_slot11 = var11;
            var8 = _closure1_slot0;
            var13 = _closure1_slot3;
            var2 = 20;
            var3 = var13[var2];
            var3 = var8.bind(var4)(var3);
            var7 = var3.intl;
            var5 = var7.format;
            var2 = var13[var2];
            var2 = var8.bind(var4)(var2);
            var2 = var2.t;
            var3 = var2.sj/RT0;
            var2 = {};
            var17 = function userHook() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var5 = _closure1_slot19;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var1 = 15;
                    var1 = var3[var1];
                    var4 = undefined;
                    var1 = var2.bind(var4)(var1);
                    var3 = var1.LegacyText;
                    var2 = {};
                    var6 = _closure2_slot7;
                    var7 = var6.commandUserText;
                    var6 = new Array(2);
                    var6[0] = var7;
                    var7 = {};
                    var8 = _closure2_slot1;
                    var8 = var8.colorString;
                    var9 = null;
                    if(!(var9 == var8)) { _fun0009_ip = 91; continue _fun0009 }
 76:
                    var9 = _closure2_slot7;
                    var9 = var9.commandText;
                    var8 = var9.color;
 91:
                    var7['color'] = var8;
                    var6[1] = var7;
                    var2['style'] = var6;
                    var1 = _closure2_slot1;
                    var1 = var1.nick;
                    var2['children'] = var1;
                    var1 = 'user';
                    var1 = var5.bind(var4)(var3, var2, var1);
                    return var1;
                }
            };
            var2['userHook'] = var17;
            var17 = function commandHook() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    var5 = _closure1_slot19;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var1 = 19;
                    var1 = var3[var1];
                    var4 = undefined;
                    var1 = var2.bind(var4)(var1);
                    var3 = var1.Text;
                    var2 = {};
                    var1 = 'text-sm/semibold';
                    var2['variant'] = var1;
                    var8 = _closure2_slot5;
                    var1 = _closure1_slot13;
                    var1 = var1.CHAT_INPUT_COMMAND;
                    if(!(var8 !== var1)) { _fun0010_ip = 71; continue _fun0010 }
 65:
                    var1 = _closure2_slot11;
                    _fun0010_ip = 102; continue _fun0010;
 71:
                    var9 = _closure1_slot17;
                    var8 = _closure2_slot11;
                    var6 = global;
                    var6 = var6.HermesInternal;
                    var7 = var6.concat;
                    var6 = '';
                    var1 = var7.bind(var6)(var9, var8);
 102:
                    var2['children'] = var1;
                    var1 = 'command';
                    var1 = var5.bind(var4)(var3, var2, var1);
                    return var1;
                }
            };
            var2['commandHook'] = var17;
            var17 = function applicationHook() {
                var5 = _closure1_slot20;
                var10 = _closure1_slot0;
                var11 = _closure1_slot3;
                var1 = 19;
                var1 = var11[var1];
                var4 = undefined;
                var1 = var10.bind(var4)(var1);
                var3 = var1.Text;
                var2 = {};
                var6 = _closure2_slot7;
                var8 = var6.applicationNameText;
                var2['style'] = var8;
                var8 = 'text-sm/semibold';
                var2['variant'] = var8;
                var9 = _closure1_slot19;
                var8 = _closure1_slot1;
                var7 = 23;
                var7 = var11[var7];
                var8 = var8.bind(var4)(var7);
                var7 = {};
                var6 = var6.applicationIcon;
                var7['style'] = var6;
                var6 = 24;
                var6 = var11[var6];
                var11 = var10.bind(var4)(var6);
                var10 = var11.ensureAvatarSource;
                var6 = _closure2_slot2;
                var12 = var6.getAvatarSource;
                var1 = _closure2_slot4;
                var1 = var12.bind(var6)(var1);
                var1 = var10.bind(var11)(var1);
                var7['source'] = var1;
                var11 = var6.id;
                var1 = global;
                var1 = var1.HermesInternal;
                var10 = var1.concat;
                var1 = 'icon-';
                var1 = var10.bind(var1)(var11);
                var7 = var9.bind(var4)(var8, var7, var1);
                var1 = new Array(2);
                var1[0] = var7;
                var7 = var6.username;
                var6 = ' ';
                var6 = var6 + var7;
                var1[1] = var6;
                var2['children'] = var1;
                var1 = 'application';
                var1 = var5.bind(var4)(var3, var2, var1);
                return var1;
            };
            var2['applicationHook'] = var17;
            var5 = var5.bind(var7)(var3, var2);
            var7 = _closure1_slot4;
            var3 = var7.useMemo;
            var2 = new Array(9);
            var2[0] = var16;
            var2[1] = var15;
            var2[2] = var14;
            var14 = var10.name;
            var2[3] = var14;
            var14 = var10.options;
            var2[4] = var14;
            var14 = var10.application_command;
            var2[5] = var14;
            var2[6] = var11;
            var2[7] = var12;
            var2[8] = var9;
            var1 = function() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                    var6 = _closure1_slot19;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var1 = 15;
                    var1 = var3[var1];
                    var9 = undefined;
                    var1 = var2.bind(var9)(var1);
                    var5 = var1.LegacyText;
                    var4 = {};
                    var2 = _closure2_slot11;
                    var1 = '/';
                    var1 = var1 + var2;
                    var4['children'] = var1;
                    var1 = _closure2_slot3;
                    var11 = var1.name;
                    var3 = global;
                    var2 = var3.HermesInternal;
                    var7 = var2.concat;
                    var2 = 'integrationName-';
                    var2 = var7.bind(var2)(var11);
                    var2 = var6.bind(var9)(var5, var4, var2);
                    var11 = new Array(1);
                    var11[0] = var2;
                    var4 = var1.options;
                    var2 = null;
                    var1 = var11;
                    if(!(var2 != var4)) { _fun0011_ip = 339; continue _fun0011 }
 121:
                    var4 = var3.Object;
                    var3 = var4.fromEntries;
                    var5 = _closure2_slot3;
                    var5 = var5.application_command;
                    var7 = var2 == var5;
                    var6 = undefined;
                    if(var7) { _fun0011_ip = 157; continue _fun0011 }
 152:
                    var6 = var5.options;
 157:
                    if(!(var2 == var6)) { _fun0011_ip = 165; continue _fun0011 }
 161:
                    var6 = new Array(0);
 165:
                    var5 = var6.map;
                    var2 = function(arg1) {
                        var2 = arg1;
                        var3 = var2.name;
                        var1 = new Array(2);
                        var1[0] = var3;
                        var1[1] = var2;
                        return var1;
                    };
                    var2 = var5.bind(var6)(var2);
                    var7 = var3.bind(var4)(var2);
                    var3 = _closure1_slot27;
                    var2 = _closure2_slot3;
                    var2 = var2.options;
                    var6 = var3.bind(var9)(var2);
                    var3 = var6.bind(var9)();
                    var2 = var3.done;
                    var5 = '';
                    var4 = var11;
                    var1 = var4;
                    if(var2) { _fun0011_ip = 339; continue _fun0011 }
 229:
                    var13 = var3.value;
                    var11 = var4.concat;
                    var12 = _closure1_slot23;
                    var2 = {};
                    var2['option'] = var13;
                    var14 = _closure2_slot9;
                    var2['channel'] = var14;
                    var14 = _closure2_slot10;
                    var2['guild'] = var14;
                    var14 = _closure2_slot6;
                    var2['messageId'] = var14;
                    var2['parentOptionName'] = var5;
                    var13 = var13.name;
                    var13 = var7[var13];
                    var2['commandOptionSpec'] = var13;
                    var13 = _closure2_slot7;
                    var2['styles'] = var13;
                    var13 = _closure2_slot8;
                    var2['analyticsLocations'] = var13;
                    var2 = var12.bind(var9)(var2);
                    var4 = var11.bind(var4)(var2);
                    var12 = var6.bind(var9)();
                    var2 = var12.done;
                    var3 = var12;
                    var1 = var4;
                    if(!var2) { _fun0011_ip = 229; continue _fun0011 }
 339:
                    return var1;
                }
            };
            var11 = var3.bind(var7)(var1, var2);
            var3 = _closure1_slot20;
            var1 = 25;
            var1 = var13[var1];
            var1 = var8.bind(var4)(var1);
            var2 = var1.Card;
            var1 = {};
            var9 = _closure1_slot19;
            var7 = 19;
            var6 = var13[var7];
            var6 = var8.bind(var4)(var6);
            var15 = var6.Text;
            var14 = {'style': null, 'variant': 'text-md/medium', 'color': 'header-primary'};
            var6 = var12.commandText;
            var14['style'] = var6;
            var14['children'] = var5;
            var17 = var10.name;
            var6 = global;
            var5 = var6.HermesInternal;
            var16 = var5.concat;
            var5 = 'commandName-';
            var5 = var16.bind(var5)(var17);
            var14 = var9.bind(var4)(var15, var14, var5);
            var5 = new Array(2);
            var5[0] = var14;
            var7 = var13[var7];
            var7 = var8.bind(var4)(var7);
            var8 = var7.Text;
            var7 = {'style': null, 'variant': 'text-md/medium', 'color': 'header-secondary'};
            var12 = var12.commandOptionText;
            var7['style'] = var12;
            var7['children'] = var11;
            var11 = var10.name;
            var6 = var6.HermesInternal;
            var10 = var6.concat;
            var6 = 'commandOption-';
            var6 = var10.bind(var6)(var11);
            var6 = var9.bind(var4)(var8, var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot25 = var4;
    var4 = function CommandActionsContainer(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
            var1 = arg1;
            var4 = var1.channelId;
            var _closure2_slot0 = var4;
            var2 = var1.chatInputRef;
            var _closure2_slot1 = var2;
            var12 = var1.data;
            var _closure2_slot2 = var12;
            var5 = undefined;
            var _closure2_slot3 = var5;
            var _closure2_slot4 = var5;
            var _closure2_slot5 = var5;
            var8 = var12.options;
            var1 = null;
            var3 = var1 != var8;
            if(!var3) { _fun0012_ip = 79; continue _fun0012 }
 61:
            var7 = var8.some;
            var6 = function(arg1) {
                var1 = arg1;
                var2 = var1.type;
                var4 = _closure1_slot0;
                var3 = _closure1_slot3;
                var1 = 14;
                var3 = var3[var1];
                var1 = undefined;
                var1 = var4.bind(var1)(var3);
                var1 = var1.ApplicationCommandOptionType;
                var1 = var1.ATTACHMENT;
                var1 = var2 === var1;
                return var1;
            };
            var3 = var7.bind(var8)(var6);
 79:
            var3 = !var3;
            var8 = _closure1_slot0;
            var9 = _closure1_slot3;
            var7 = 22;
            var7 = var9[var7];
            var11 = var8.bind(var5)(var7);
            var9 = var11.useStateFromStoresObject;
            var7 = _closure1_slot7;
            var8 = new Array(2);
            var8[0] = var7;
            var7 = _closure1_slot9;
            var8[1] = var7;
            var7 = new Array(1);
            var7[0] = var4;
            var4 = function() {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                    var4 = _closure1_slot7;
                    var3 = var4.getChannel;
                    var1 = _closure2_slot0;
                    var5 = var3.bind(var4)(var1);
                    var1 = {};
                    var1['channel'] = var5;
                    var4 = _closure1_slot9;
                    var3 = var4.getGuild;
                    var2 = null;
                    var6 = var2 == var5;
                    var2 = undefined;
                    if(var6) { _fun0013_ip = 55; continue _fun0013 }
 50:
                    var2 = var5.guild_id;
 55:
                    var2 = var3.bind(var4)(var2);
                    var1['guild'] = var2;
                    return var1;
                }
            };
            var4 = var9.bind(var11)(var8, var4, var7);
            var11 = var4.channel;
            _closure2_slot3 = var11;
            var4 = var4.guild;
            _closure2_slot4 = var4;
            var9 = _closure1_slot4;
            var8 = var9.useCallback;
            var7 = new Array(3);
            var7[0] = var12;
            var7[1] = var11;
            var7[2] = var4;
            var4 = function() {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                    var1 = _closure2_slot2;
                    var2 = var1.application_command;
                    var5 = null;
                    var4 = var5 == var2;
                    var1 = undefined;
                    var6 = undefined;
                    if(var4) { _fun0014_ip = 32; continue _fun0014 }
 26:
                    var6 = var2.name_localized;
 32:
                    if(!(var5 == var6)) { _fun0014_ip = 45; continue _fun0014 }
 36:
                    var2 = _closure2_slot2;
                    var6 = var2.name;
 45:
                    var4 = _closure1_slot17;
                    var4 = var4 + var6;
                    var11 = new Array(1);
                    var11[0] = var4;
                    var4 = _closure2_slot2;
                    var4 = var4.options;
                    var8 = var11;
                    if(!(var5 != var4)) { _fun0014_ip = 252; continue _fun0014 }
 83:
                    var4 = global;
                    var7 = var4.Object;
                    var6 = var7.fromEntries;
                    var4 = _closure2_slot2;
                    var4 = var4.application_command;
                    var9 = var5 == var4;
                    var10 = undefined;
                    if(var9) { _fun0014_ip = 121; continue _fun0014 }
 116:
                    var10 = var4.options;
 121:
                    if(!(var5 == var10)) { _fun0014_ip = 129; continue _fun0014 }
 125:
                    var10 = new Array(0);
 129:
                    var9 = var10.map;
                    var4 = function(arg1) {
                        var2 = arg1;
                        var3 = var2.name;
                        var1 = new Array(2);
                        var1[0] = var3;
                        var1[1] = var2;
                        return var1;
                    };
                    var4 = var9.bind(var10)(var4);
                    var10 = var6.bind(var7)(var4);
                    var6 = _closure1_slot27;
                    var4 = _closure2_slot2;
                    var4 = var4.options;
                    var9 = var6.bind(var1)(var4);
                    var6 = var9.bind(var1)();
                    var4 = var6.done;
                    var7 = var11;
                    var8 = var7;
                    if(var4) { _fun0014_ip = 252; continue _fun0014 }
 189:
                    var15 = var6.value;
                    var11 = var7.concat;
                    var14 = _closure1_slot24;
                    var18 = _closure2_slot3;
                    var17 = _closure2_slot4;
                    var4 = var15.name;
                    var16 = var10[var4];
                    var20 = undefined;
                    var19 = var15;
                    var4 = var20[var14](var19, var18, var17, var16, var15);
                    var7 = var11.bind(var7)(var4);
                    var12 = var9.bind(var1)();
                    var4 = var12.done;
                    var6 = var12;
                    var8 = var7;
                    if(!var4) { _fun0014_ip = 189; continue _fun0014 }
 252:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot3;
                    var4 = 26;
                    var4 = var7[var4];
                    var6 = var6.bind(var1)(var4);
                    var4 = var6.isAndroid;
                    var4 = var4.bind(var6)();
                    if(var4) { _fun0014_ip = 354; continue _fun0014 }
 284:
                    var4 = _closure1_slot6;
                    var10 = var4.DCDClipboardManager;
                    var9 = var10.setItem;
                    var4 = global;
                    var7 = var4.JSON;
                    var6 = var7.stringify;
                    var4 = _closure2_slot2;
                    var7 = var6.bind(var7)(var4);
                    var6 = var8.join;
                    var4 = ' ';
                    var6 = var6.bind(var8)(var4);
                    var4 = 'application/x-discord-interaction-data';
                    var4 = var9.bind(var10)(var7, var4, var6);
                    _fun0014_ip = 451; continue _fun0014;
 354:
                    var7 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    var6 = 27;
                    var4 = var4[var6];
                    var4 = var7.bind(var1)(var4);
                    if(!(var5 != var4)) { _fun0014_ip = 451; continue _fun0014 }
 378:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    var4 = var4[var6];
                    var7 = var5.bind(var1)(var4);
                    var6 = var7.setItem;
                    var4 = global;
                    var5 = var4.JSON;
                    var4 = var5.stringify;
                    var3 = _closure2_slot2;
                    var5 = var4.bind(var5)(var3);
                    var4 = var8.join;
                    var3 = ' ';
                    var4 = var4.bind(var8)(var3);
                    var3 = 'application/x-discord-interaction-data';
                    var3 = var6.bind(var7)(var5, var3, var4);
 451:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var2 = 28;
                    var2 = var4[var2];
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.presentCommandCopied;
                    var2 = var2.bind(var3)();
                    return var1;
                }
            };
            var4 = var8.bind(var9)(var4, var7);
            _closure2_slot5 = var4;
            var12 = new Array(0);
            if(!var3) { _fun0012_ip = 330; continue _fun0012 }
 220:
            var4 = var12.push;
            var8 = _closure1_slot19;
            var14 = _closure1_slot0;
            var15 = _closure1_slot3;
            var3 = 29;
            var3 = var15[var3];
            var3 = var14.bind(var5)(var3);
            var7 = var3.TableRow;
            var3 = {};
            var9 = 20;
            var11 = var15[var9];
            var11 = var14.bind(var5)(var11);
            var13 = var11.intl;
            var11 = var13.string;
            var9 = var15[var9];
            var9 = var14.bind(var5)(var9);
            var9 = var9.t;
            var9 = var9.42H+NT;
            var9 = var11.bind(var13)(var9);
            var3['label'] = var9;
            var9 = function onPress() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot3;
                var1 = 16;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.hideActionSheet;
                var2 = var2.bind(var3)();
                var2 = _closure2_slot5;
                var2 = var2.bind(var1)();
                return var1;
            };
            var3['onPress'] = var9;
            var3 = var8.bind(var5)(var7, var3);
            var3 = var4.bind(var12)(var3);
 330:
            if(!(var1 != var2)) { _fun0012_ip = 446; continue _fun0012 }
 334:
            var3 = var12.push;
            var7 = _closure1_slot19;
            var13 = _closure1_slot0;
            var14 = _closure1_slot3;
            var2 = 29;
            var2 = var14[var2];
            var2 = var13.bind(var5)(var2);
            var4 = var2.TableRow;
            var2 = {};
            var8 = 20;
            var9 = var14[var8];
            var9 = var13.bind(var5)(var9);
            var11 = var9.intl;
            var9 = var11.string;
            var8 = var14[var8];
            var8 = var13.bind(var5)(var8);
            var8 = var8.t;
            var8 = var8.lNWC7u;
            var8 = var9.bind(var11)(var8);
            var2['label'] = var8;
            var8 = function onPress() {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var1 = 16;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.hideActionSheet;
                    var2 = var2.bind(var3)();
                    var2 = _closure2_slot2;
                    var2 = var2.options;
                    var5 = null;
                    if(!(var5 != var2)) { _fun0015_ip = 172; continue _fun0015 }
 53:
                    var2 = _closure2_slot2;
                    var2 = var2.options;
                    var2 = var2.length;
                    var3 = 0;
                    if(!(var2 > var3)) { _fun0015_ip = 172; continue _fun0015 }
 73:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var12 = 14;
                    var6 = var2[var12];
                    var6 = var4.bind(var1)(var6);
                    var6 = var6.ApplicationCommandOptionType;
                    var7 = var6.SUB_COMMAND;
                    var6 = new Array(2);
                    var6[0] = var7;
                    var2 = var2[var12];
                    var2 = var4.bind(var1)(var2);
                    var2 = var2.ApplicationCommandOptionType;
                    var2 = var2.SUB_COMMAND_GROUP;
                    var6[1] = var2;
                    var4 = var6.includes;
                    var2 = _closure2_slot2;
                    var2 = var2.options;
                    var2 = var2[var3];
                    var2 = var2.type;
                    var2 = var4.bind(var6)(var2);
                    if(var2) { _fun0015_ip = 342; continue _fun0015 }
 172:
                    var2 = _closure2_slot1;
                    var2 = var5 == var2;
                    var6 = undefined;
                    if(var2) { _fun0015_ip = 201; continue _fun0015 }
 185:
                    var4 = _closure2_slot1;
                    var4 = var4.current;
                    var2 = var5 == var4;
                    var6 = var4;
 201:
                    if(var2) { _fun0015_ip = 698; continue _fun0015 }
 207:
                    var4 = var6.openCustomKeyboard;
                    var2 = {};
                    var11 = _closure1_slot0;
                    var13 = _closure1_slot3;
                    var7 = 30;
                    var7 = var13[var7];
                    var7 = var11.bind(var1)(var7);
                    var7 = var7.KeyboardTypes;
                    var7 = var7.APP_LAUNCHER;
                    var2['type'] = var7;
                    var7 = {};
                    var10 = _closure1_slot15;
                    var10 = var10.COMMAND_VIEW;
                    var7['initialRouteName'] = var10;
                    var10 = 31;
                    var10 = var13[var10];
                    var10 = var11.bind(var1)(var10);
                    var10 = var10.ApplicationCommandTriggerLocations;
                    var10 = var10.RECALL;
                    var7['analyticsLocation'] = var10;
                    var10 = {};
                    var11 = _closure2_slot2;
                    var13 = var11.id;
                    var10['commandId'] = var13;
                    var11 = var11.options;
                    var10['prefilledOptions'] = var11;
                    var7['preSelectedCommand'] = var10;
                    var2['context'] = var7;
                    var2 = var4.bind(var6)(var2);
                    _fun0015_ip = 698; continue _fun0015;
 342:
                    var2 = _closure2_slot2;
                    var4 = var2.options;
                    var4 = var4[var3];
                    var4 = var4.name;
                    var11 = new Array(1);
                    var11[0] = var4;
                    var2 = var2.options;
                    var2 = var2[var3];
                    var2 = var2.options;
                    var4 = var5 != var2;
                    if(!var4) { _fun0015_ip = 398; continue _fun0015 }
 389:
                    var6 = var2.length;
                    var4 = var6 > var3;
 398:
                    if(!var4) { _fun0015_ip = 482; continue _fun0015 }
 401:
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var10 = var6[var12];
                    var10 = var7.bind(var1)(var10);
                    var10 = var10.ApplicationCommandOptionType;
                    var13 = var10.SUB_COMMAND;
                    var10 = new Array(2);
                    var10[0] = var13;
                    var6 = var6[var12];
                    var6 = var7.bind(var1)(var6);
                    var6 = var6.ApplicationCommandOptionType;
                    var6 = var6.SUB_COMMAND_GROUP;
                    var10[1] = var6;
                    var7 = var10.includes;
                    var6 = var2[var3];
                    var6 = var6.type;
                    var4 = var7.bind(var10)(var6);
 482:
                    var7 = var2;
                    if(!var4) { _fun0015_ip = 516; continue _fun0015 }
 488:
                    var6 = var11.push;
                    var4 = var2[var3];
                    var4 = var4.name;
                    var4 = var6.bind(var11)(var4);
                    var2 = var2[var3];
                    var7 = var2.options;
 516:
                    var2 = _closure2_slot1;
                    var2 = var5 == var2;
                    var4 = undefined;
                    if(var2) { _fun0015_ip = 545; continue _fun0015 }
 529:
                    var3 = _closure2_slot1;
                    var3 = var3.current;
                    var2 = var5 == var3;
                    var4 = var3;
 545:
                    if(var2) { _fun0015_ip = 698; continue _fun0015 }
 551:
                    var3 = var4.openCustomKeyboard;
                    var2 = {};
                    var10 = _closure1_slot0;
                    var12 = _closure1_slot3;
                    var5 = 30;
                    var5 = var12[var5];
                    var5 = var10.bind(var1)(var5);
                    var5 = var5.KeyboardTypes;
                    var5 = var5.APP_LAUNCHER;
                    var2['type'] = var5;
                    var5 = {};
                    var6 = _closure1_slot15;
                    var6 = var6.COMMAND_VIEW;
                    var5['initialRouteName'] = var6;
                    var6 = 31;
                    var6 = var12[var6];
                    var6 = var10.bind(var1)(var6);
                    var6 = var6.ApplicationCommandTriggerLocations;
                    var6 = var6.RECALL;
                    var5['analyticsLocation'] = var6;
                    var6 = {};
                    var8 = _closure2_slot2;
                    var8 = var8.id;
                    var10 = _closure1_slot12;
                    var9 = var8 + var10;
                    var8 = var11.join;
                    var8 = var8.bind(var11)(var10);
                    var8 = var9 + var8;
                    var6['commandId'] = var8;
                    var6['prefilledOptions'] = var7;
                    var5['preSelectedCommand'] = var6;
                    var2['context'] = var5;
                    var2 = var3.bind(var4)(var2);
 698:
                    return var1;
                }
            };
            var2['onPress'] = var8;
            var2 = var7.bind(var5)(var4, var2);
            var2 = var3.bind(var12)(var2);
 446:
            var3 = var12.length;
            var2 = 0;
            var1 = null;
            if(!(var2 !== var3)) { _fun0012_ip = 664; continue _fun0012 }
 462:
            var4 = _closure1_slot20;
            var8 = _closure1_slot0;
            var11 = _closure1_slot3;
            var2 = 32;
            var2 = var11[var2];
            var2 = var8.bind(var5)(var2);
            var3 = var2.Stack;
            var2 = {};
            var7 = 8;
            var2['spacing'] = var7;
            var9 = _closure1_slot19;
            var6 = 19;
            var6 = var11[var6];
            var6 = var8.bind(var5)(var6);
            var7 = var6.Text;
            var6 = {'variant': 'text-sm/semibold', 'color': 'text-secondary'};
            var13 = 20;
            var14 = var11[var13];
            var14 = var8.bind(var5)(var14);
            var15 = var14.intl;
            var14 = var15.string;
            var13 = var11[var13];
            var13 = var8.bind(var5)(var13);
            var13 = var13.t;
            var13 = var13.3eF5/P;
            var13 = var14.bind(var15)(var13);
            var6['children'] = var13;
            var7 = var9.bind(var5)(var7, var6);
            var6 = new Array(2);
            var6[0] = var7;
            var7 = 33;
            var7 = var11[var7];
            var7 = var8.bind(var5)(var7);
            var8 = var7.TableRowGroup;
            var7 = {};
            var11 = var12.map;
            var10 = function(arg1, arg2) {
                var5 = _closure1_slot19;
                var1 = _closure1_slot4;
                var4 = var1.Fragment;
                var3 = {};
                var1 = arg1;
                var3['children'] = var1;
                var2 = undefined;
                var1 = arg2;
                var1 = var5.bind(var2)(var4, var3, var1);
                return var1;
            };
            var10 = var11.bind(var12)(var10);
            var7['children'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 664:
            return var1;
        }
    };
    var _closure1_slot26 = var4;
    var4 = 37;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/application_commands/native/ExecutedApplicationCommandPopout.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
            var1 = arg1;
            var23 = var1.user;
            var18 = var1.channelId;
            var _closure2_slot0 = var18;
            var17 = var1.chatInputRef;
            var22 = var1.messageId;
            var _closure2_slot1 = var22;
            var21 = var1.author;
            var20 = var1.applicationUser;
            var24 = var1.guildId;
            var19 = var1.messageType;
            var1 = _closure1_slot22;
            var4 = undefined;
            var10 = var1.bind(var4)();
            var3 = _closure1_slot0;
            var7 = _closure1_slot3;
            var1 = 22;
            var1 = var7[var1];
            var6 = var3.bind(var4)(var1);
            var5 = var6.useStateFromStores;
            var1 = _closure1_slot10;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                var4 = _closure1_slot10;
                var3 = var4.getMessage;
                var2 = _closure2_slot0;
                var1 = _closure2_slot1;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var16 = var5.bind(var6)(var3, var1);
            var _closure2_slot2 = var16;
            var6 = _closure1_slot1;
            var1 = 21;
            var3 = var7[var1];
            var5 = var6.bind(var4)(var3);
            var3 = 34;
            var3 = var7[var3];
            var3 = var6.bind(var4)(var3);
            var3 = var3.EXECUTED_COMMAND;
            var3 = var5.bind(var4)(var3);
            var5 = var3.analyticsLocations;
            var7 = _closure1_slot4;
            var6 = var7.useEffect;
            var3 = new Array(3);
            var3[0] = var18;
            var3[1] = var22;
            var15 = null;
            var9 = var15 == var16;
            var8 = undefined;
            if(var9) { _fun0016_ip = 207; continue _fun0016 }
 201:
            var8 = var16.interactionData;
 207:
            var3[2] = var8;
            var2 = function() {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
                    var1 = _closure2_slot2;
                    var6 = null;
                    var4 = var6 == var1;
                    var1 = undefined;
                    var3 = undefined;
                    if(var4) { _fun0017_ip = 30; continue _fun0017 }
 20:
                    var4 = _closure2_slot2;
                    var3 = var4.interactionData;
 30:
                    var3 = var6 == var3;
                    if(var3) { _fun0017_ip = 143; continue _fun0017 }
 37:
                    var4 = _closure2_slot2;
                    var4 = var6 == var4;
                    var5 = undefined;
                    if(var4) { _fun0017_ip = 65; continue _fun0017 }
 50:
                    var4 = _closure2_slot2;
                    var4 = var4.interactionData;
                    var5 = var4.type;
 65:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot3;
                    var4 = 14;
                    var4 = var8[var4];
                    var4 = var7.bind(var1)(var4);
                    var4 = var4.ApplicationCommandType;
                    var4 = var4.CHAT;
                    var4 = var5 === var4;
                    if(!var4) { _fun0017_ip = 140; continue _fun0017 }
 107:
                    var5 = _closure2_slot2;
                    var6 = var6 == var5;
                    var5 = undefined;
                    if(var6) { _fun0017_ip = 136; continue _fun0017 }
 120:
                    var6 = _closure2_slot2;
                    var6 = var6.interactionData;
                    var5 = var6.application_command;
 136:
                    var4 = var1 === var5;
 140:
                    var3 = var4;
 143:
                    if(!var3) { _fun0017_ip = 189; continue _fun0017 }
 146:
                    var4 = _closure1_slot2;
                    var5 = _closure1_slot3;
                    var3 = 35;
                    var3 = var5[var3];
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.fetchMessageInteractionData;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var2 = var4.bind(var5)(var3, var2);
 189:
                    return var1;
                }
            };
            var2 = var6.bind(var7)(var2, var3);
            var3 = _closure1_slot19;
            var6 = _closure1_slot0;
            var7 = _closure1_slot3;
            var1 = var7[var1];
            var1 = var6.bind(var4)(var1);
            var2 = var1.AnalyticsLocationProvider;
            var1 = {};
            var1['value'] = var5;
            var5 = 36;
            var5 = var7[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.BottomSheet;
            var5 = {};
            var7 = true;
            var5['startExpanded'] = var7;
            var7 = var10.container;
            var5['bodyStyles'] = var7;
            var8 = var15 == var16;
            var7 = undefined;
            if(var8) { _fun0016_ip = 309; continue _fun0016 }
 303:
            var7 = var16.interactionData;
 309:
            if(!(var15 == var7)) { _fun0016_ip = 352; continue _fun0016 }
 313:
            var9 = _closure1_slot19;
            var8 = _closure1_slot5;
            var7 = {};
            var10 = var10.activityIndicator;
            var7['style'] = var10;
            var10 = 'large';
            var7['size'] = var10;
            var7 = var9.bind(var4)(var8, var7);
            _fun0016_ip = 494; continue _fun0016;
 352:
            var10 = _closure1_slot20;
            var9 = _closure1_slot21;
            var8 = {};
            var14 = _closure1_slot19;
            var13 = _closure1_slot25;
            var11 = {};
            var11['guildId'] = var24;
            var11['user'] = var23;
            var11['channelId'] = var18;
            var11['messageId'] = var22;
            var11['author'] = var21;
            var11['applicationUser'] = var20;
            var21 = var15 == var16;
            var20 = undefined;
            if(var21) { _fun0016_ip = 413; continue _fun0016 }
 407:
            var20 = var16.interactionData;
 413:
            var11['data'] = var20;
            var11['messageType'] = var19;
            var13 = var14.bind(var4)(var13, var11);
            var11 = new Array(2);
            var11[0] = var13;
            var14 = _closure1_slot19;
            var13 = _closure1_slot26;
            var12 = {};
            var12['channelId'] = var18;
            var12['chatInputRef'] = var17;
            var17 = var15 == var16;
            var15 = undefined;
            if(var17) { _fun0016_ip = 470; continue _fun0016 }
 464:
            var15 = var16.interactionData;
 470:
            var12['data'] = var15;
            var12 = var14.bind(var4)(var13, var12);
            var11[1] = var12;
            var8['children'] = var11;
            var7 = var10.bind(var4)(var9, var8);
 494:
            var5['children'] = var7;
            var5 = var3.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();