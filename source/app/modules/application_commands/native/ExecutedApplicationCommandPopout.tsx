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
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
case 2:
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var3["@@iterator"];
case 4:
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
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
            if(!var7) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var7 = var3.constructor;
case 14:
            var10 = var9;
            if(!var7) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var7 = var3.constructor;
            var10 = var7.name;
case 16:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 20:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 23; continue _fun0001 }
case 21:
            var9 = _closure1_slot26;
            var7 = var9.bind(var8)(var3, var8);
case 23:
            _fun0001_ip = 24; continue _fun0001;
case 18:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
case 24:
            var6 = var7;
            _fun0001_ip = 10; continue _fun0001;
case 12:
            var7 = _closure1_slot26;
            var6 = var7.bind(var8)(var3, var8);
case 10:
            var4 = var6;
            if(var4) { _fun0001_ip = 8; continue _fun0001 }
case 25:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
case 8:
            if(!var4) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            _closure2_slot0 = var4;
case 26:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 28; continue _fun0002 }
case 29:
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
                    _fun0002_ip = 30; continue _fun0002;
case 28:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
case 30:
                    return var1;
                }
            };
            return var1;
case 6:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot25 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 31; continue _fun0003 }
case 32:
            var2 = var4.length;
            var1 = var3 > var2;
case 31:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
case 34:
            var2 = var4.length;
case 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 35; continue _fun0003 }
case 4:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 4; continue _fun0003 }
case 35:
            return var1;
        }
    };
    var _closure1_slot26 = var1;
    var1 = function getCommandOptionComponents(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
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
            var5 = function getUserComponent(arg1, arg2) {
                var9 = arg1;
                var _closure3_slot0 = var9;
                var5 = _closure1_slot22;
                var3 = _closure1_slot0;
                var8 = _closure1_slot3;
                var2 = 17;
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
case 0:
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot3;
                        var1 = 18;
                        var2 = var4[var1];
                        var1 = undefined;
                        var5 = var3.bind(var1)(var2);
                        var2 = var5.hideActionSheet;
                        var2 = var2.bind(var5)();
                        var2 = 19;
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
                        if(var6) { _fun0005_ip = 36; continue _fun0005 }
case 37:
                        var5 = _closure2_slot1;
                        var4 = var5.id;
case 36:
                        var2['channelId'] = var4;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    }
                };
                var2['onPress'] = var1;
                var7 = _closure1_slot20;
                var1 = new Array(2);
                var1[0] = var7;
                var7 = _closure1_slot1;
                var6 = 20;
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
                var5 = _closure1_slot22;
                var2 = _closure1_slot0;
                var3 = _closure1_slot3;
                var1 = 17;
                var1 = var3[var1];
                var4 = undefined;
                var1 = var2.bind(var4)(var1);
                var3 = var1.LegacyText;
                var2 = {};
                var7 = _closure2_slot2;
                var7 = var7.commandOptionMentionText;
                var2['style'] = var7;
                var7 = _closure1_slot20;
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
                var5 = _closure1_slot21;
                var2 = _closure1_slot0;
                var3 = _closure1_slot3;
                var1 = 21;
                var1 = var3[var1];
                var4 = undefined;
                var1 = var2.bind(var4)(var1);
                var3 = var1.Text;
                var2 = {'variant': 'text-sm/medium', 'color': 'mobile-text-heading-primary'};
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
            var24 = ' ';
            var4 = var1 + var24;
            var1 = var2.name;
            var9 = var4 + var1;
            var15 = new Array(0);
            var6 = null;
            var1 = var6 == var17;
            var8 = undefined;
            var19 = undefined;
            if(var1) { _fun0004_ip = 38; continue _fun0004 }
case 39:
            var19 = var17.name_localized;
case 38:
            if(!(var6 == var19)) { _fun0004_ip = 40; continue _fun0004 }
case 41:
            var19 = var2.name;
case 40:
            var1 = var2.value;
            if(!(var6 == var1)) { _fun0004_ip = 14; continue _fun0004 }
case 42:
            var1 = global;
            var1 = var1.HermesInternal;
            var1 = var1.concat;
            var4 = var1.bind(var24)(var19);
            _fun0004_ip = 43; continue _fun0004;
case 14:
            var1 = global;
            var1 = var1.HermesInternal;
            var7 = var1.concat;
            var1 = ':';
            var4 = var7.bind(var24)(var19, var1);
case 43:
            var19 = var2.type;
            var20 = _closure1_slot0;
            var1 = _closure1_slot3;
            var21 = 16;
            var1 = var1[var21];
            var1 = var20.bind(var8)(var1);
            var1 = var1.ApplicationCommandOptionType;
            var1 = var1.SUB_COMMAND;
            if(!(var19 !== var1)) { _fun0004_ip = 44; continue _fun0004 }
case 45:
            var19 = var2.type;
            var20 = _closure1_slot0;
            var1 = _closure1_slot3;
            var1 = var1[var21];
            var1 = var20.bind(var8)(var1);
            var1 = var1.ApplicationCommandOptionType;
            var1 = var1.SUB_COMMAND_GROUP;
            if(!(var19 !== var1)) { _fun0004_ip = 44; continue _fun0004 }
case 46:
            var1 = var2.value;
            if(!(var6 != var1)) { _fun0004_ip = 47; continue _fun0004 }
case 48:
            var19 = var2.type;
            var20 = _closure1_slot0;
            var1 = _closure1_slot3;
            var1 = var1[var21];
            var1 = var20.bind(var8)(var1);
            var1 = var1.ApplicationCommandOptionType;
            var1 = var1.USER;
            if(!(var1 !== var19)) { _fun0004_ip = 49; continue _fun0004 }
case 50:
            var20 = _closure1_slot0;
            var1 = _closure1_slot3;
            var1 = var1[var21];
            var1 = var20.bind(var8)(var1);
            var1 = var1.ApplicationCommandOptionType;
            var1 = var1.CHANNEL;
            if(!(var1 !== var19)) { _fun0004_ip = 51; continue _fun0004 }
case 52:
            var20 = _closure1_slot0;
            var1 = _closure1_slot3;
            var1 = var1[var21];
            var1 = var20.bind(var8)(var1);
            var1 = var1.ApplicationCommandOptionType;
            var1 = var1.ROLE;
            if(!(var1 !== var19)) { _fun0004_ip = 53; continue _fun0004 }
case 54:
            var20 = _closure1_slot0;
            var1 = _closure1_slot3;
            var1 = var1[var21];
            var1 = var20.bind(var8)(var1);
            var1 = var1.ApplicationCommandOptionType;
            var1 = var1.MENTIONABLE;
            if(!(var1 !== var19)) { _fun0004_ip = 55; continue _fun0004 }
case 56:
            var20 = _closure1_slot0;
            var1 = _closure1_slot3;
            var1 = var1[var21];
            var1 = var20.bind(var8)(var1);
            var1 = var1.ApplicationCommandOptionType;
            var1 = var1.ATTACHMENT;
            var20 = null;
            if(!(var1 === var19)) { _fun0004_ip = 57; continue _fun0004 }
case 58:
            var22 = _closure1_slot0;
            var23 = _closure1_slot3;
            var1 = 23;
            var19 = var23[var1];
            var19 = var22.bind(var8)(var19);
            var21 = var19.intl;
            var19 = var21.string;
            var1 = var23[var1];
            var1 = var22.bind(var8)(var1);
            var1 = var1.t;
            var1 = var1.nONJVc;
            var1 = var19.bind(var21)(var1);
            var20 = var16.bind(var8)(var1);
            _fun0004_ip = 57; continue _fun0004;
case 55:
            var19 = var2.value;
            var1 = var19.toString;
            var22 = var1.bind(var19)();
            var19 = var6 != var13;
            var1 = undefined;
            if(!var19) { _fun0004_ip = 59; continue _fun0004 }
case 60:
            var23 = _closure1_slot8;
            var21 = var23.getRole;
            var19 = var13.id;
            var1 = var21.bind(var23)(var19, var22);
case 59:
            if(!(var6 == var1)) { _fun0004_ip = 61; continue _fun0004 }
case 62:
            var21 = _closure1_slot12;
            var19 = var21.getUser;
            var19 = var19.bind(var21)(var22);
            var21 = var6 != var19;
            var20 = null;
            if(!var21) { _fun0004_ip = 57; continue _fun0004 }
case 63:
            var20 = var5.bind(var8)(var19, var11);
            _fun0004_ip = 57; continue _fun0004;
case 61:
            var20 = var18.bind(var8)(var1);
            _fun0004_ip = 57; continue _fun0004;
case 53:
            var19 = var2.value;
            var1 = var19.toString;
            var23 = var1.bind(var19)();
            var19 = var6 != var13;
            var1 = undefined;
            if(!var19) { _fun0004_ip = 64; continue _fun0004 }
case 65:
            var22 = _closure1_slot8;
            var21 = var22.getRole;
            var19 = var13.id;
            var1 = var21.bind(var22)(var19, var23);
case 64:
            var19 = var6 != var1;
            var20 = null;
            if(!var19) { _fun0004_ip = 57; continue _fun0004 }
case 66:
            var20 = var18.bind(var8)(var1);
            _fun0004_ip = 57; continue _fun0004;
case 51:
            var18 = var2.value;
            var1 = var18.toString;
            var19 = var1.bind(var18)();
            var18 = _closure1_slot7;
            var1 = var18.getChannel;
            var27 = var1.bind(var18)(var19);
            var1 = var6 != var27;
            var20 = null;
            if(!var1) { _fun0004_ip = 57; continue _fun0004 }
case 67:
            var21 = _closure1_slot22;
            var23 = _closure1_slot0;
            var25 = _closure1_slot3;
            var1 = 17;
            var1 = var25[var1];
            var1 = var23.bind(var8)(var1);
            var19 = var1.LegacyText;
            var18 = {};
            var1 = var11.commandOptionMentionText;
            var18['style'] = var1;
            var22 = _closure1_slot18;
            var1 = new Array(2);
            var1[0] = var22;
            var22 = 22;
            var22 = var25[var22];
            var26 = var23.bind(var8)(var22);
            var25 = var26.computeChannelName;
            var23 = _closure1_slot12;
            var22 = _closure1_slot11;
            var22 = var25.bind(var26)(var27, var23, var22);
            var1[1] = var22;
            var18['children'] = var1;
            var23 = var2.name;
            var1 = global;
            var1 = var1.HermesInternal;
            var22 = var1.concat;
            var1 = 'optionValue-';
            var1 = var22.bind(var1)(var23);
            var20 = var21.bind(var8)(var19, var18, var1);
            _fun0004_ip = 57; continue _fun0004;
case 49:
            var18 = var2.value;
            var1 = var18.toString;
            var19 = var1.bind(var18)();
            var18 = _closure1_slot12;
            var1 = var18.getUser;
            var1 = var1.bind(var18)(var19);
            var18 = var6 != var1;
            var20 = null;
            if(!var18) { _fun0004_ip = 57; continue _fun0004 }
case 68:
            var20 = var5.bind(var8)(var1, var11);
case 57:
            var1 = var6 == var20;
            var19 = true;
            if(!var1) { _fun0004_ip = 69; continue _fun0004 }
case 70:
            var1 = var6 == var17;
            var18 = undefined;
            if(var1) { _fun0004_ip = 71; continue _fun0004 }
case 72:
            var21 = var17.choices;
            var1 = var6 == var21;
            var18 = undefined;
            if(var1) { _fun0004_ip = 71; continue _fun0004 }
case 73:
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
case 71:
            var5 = var2.value;
            var1 = var5.toString;
            var5 = var1.bind(var5)();
            if(!(var6 != var18)) { _fun0004_ip = 74; continue _fun0004 }
case 75:
            var1 = var18.name_localized;
            if(!(var6 == var1)) { _fun0004_ip = 76; continue _fun0004 }
case 77:
            var1 = var18.name;
case 76:
            var5 = var1;
case 74:
            var1 = var5.length;
            var18 = 0;
            var1 = var1 > var18;
            if(!var1) { _fun0004_ip = 78; continue _fun0004 }
case 79:
            var22 = _closure1_slot16;
            var21 = var22.test;
            var18 = var5[var18];
            var18 = var21.bind(var22)(var18);
            var1 = !var18;
case 78:
            var20 = var16.bind(var8)(var5);
            var19 = var1;
case 69:
            var5 = var15.push;
            var18 = _closure1_slot22;
            var1 = _closure1_slot4;
            var16 = var1.Fragment;
            var1 = {};
            var23 = _closure1_slot21;
            var22 = _closure1_slot0;
            var25 = _closure1_slot3;
            var21 = 17;
            var21 = var25[var21];
            var21 = var22.bind(var8)(var21);
            var22 = var21.LegacyText;
            var21 = {};
            if(!var19) { _fun0004_ip = 80; continue _fun0004 }
case 81:
            var19 = var24;
case 80:
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
case 47:
            return var15;
case 44:
            var5 = var15.push;
            var18 = _closure1_slot21;
            var1 = _closure1_slot4;
            var16 = var1.Fragment;
            var1 = {};
            var22 = _closure1_slot21;
            var20 = _closure1_slot0;
            var21 = _closure1_slot3;
            var19 = 17;
            var19 = var21[var19];
            var19 = var20.bind(var8)(var19);
            var21 = var19.LegacyText;
            var20 = {};
            var20['children'] = var4;
            var24 = var2.name;
            var4 = global;
            var19 = var4.HermesInternal;
            var23 = var19.concat;
            var19 = 'optionKey-';
            var19 = var23.bind(var19)(var24);
            var19 = var22.bind(var8)(var21, var20, var19);
            var1['children'] = var19;
            var1 = var18.bind(var8)(var16, var1, var9);
            var1 = var5.bind(var15)(var1);
            var5 = var2.options;
            var1 = var15;
            if(!(var6 != var5)) { _fun0004_ip = 82; continue _fun0004 }
case 83:
            var5 = var4.Object;
            var4 = var5.fromEntries;
            var18 = var6 == var17;
            var16 = undefined;
            if(var18) { _fun0004_ip = 84; continue _fun0004 }
case 85:
            var16 = var17.options;
case 84:
            if(!(var6 == var16)) { _fun0004_ip = 86; continue _fun0004 }
case 87:
            var16 = new Array(0);
case 86:
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
            var3 = _closure1_slot25;
            var2 = var2.options;
            var5 = var3.bind(var8)(var2);
            var3 = var5.bind(var8)();
            var2 = var3.done;
            var4 = var15;
            var1 = var4;
            if(var2) { _fun0004_ip = 82; continue _fun0004 }
case 88:
            var17 = var3.value;
            var15 = var4.concat;
            var16 = _closure1_slot27;
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
            if(!var2) { _fun0004_ip = 88; continue _fun0004 }
case 82:
            return var1;
        }
    };
    var _closure1_slot27 = var1;
    var1 = function getCommandCopyText(arg1, arg2, arg3, arg4) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
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
            if(var1) { _fun0006_ip = 89; continue _fun0006 }
case 90:
            var12 = var13.name_localized;
case 89:
            if(!(var6 == var12)) { _fun0006_ip = 91; continue _fun0006 }
case 92:
            var12 = var2.name;
case 91:
            var1 = var2.value;
            if(!(var6 == var1)) { _fun0006_ip = 37; continue _fun0006 }
case 93:
            var1 = global;
            var1 = var1.HermesInternal;
            var4 = var1.concat;
            var1 = '';
            var4 = var4.bind(var1)(var12);
            _fun0006_ip = 13; continue _fun0006;
case 37:
            var1 = global;
            var1 = var1.HermesInternal;
            var7 = var1.concat;
            var5 = '';
            var1 = ':';
            var4 = var7.bind(var5)(var12, var1);
case 13:
            var5 = var2.type;
            var12 = _closure1_slot0;
            var1 = _closure1_slot3;
            var15 = 16;
            var1 = var1[var15];
            var1 = var12.bind(var8)(var1);
            var1 = var1.ApplicationCommandOptionType;
            var1 = var1.SUB_COMMAND;
            if(!(var5 !== var1)) { _fun0006_ip = 94; continue _fun0006 }
case 95:
            var5 = var2.type;
            var12 = _closure1_slot0;
            var1 = _closure1_slot3;
            var1 = var1[var15];
            var1 = var12.bind(var8)(var1);
            var1 = var1.ApplicationCommandOptionType;
            var1 = var1.SUB_COMMAND_GROUP;
            if(!(var5 !== var1)) { _fun0006_ip = 94; continue _fun0006 }
case 96:
            var1 = var2.value;
            var5 = var6 != var1;
            var1 = null;
            if(!var5) { _fun0006_ip = 97; continue _fun0006 }
case 98:
            var12 = var2.type;
            var14 = _closure1_slot0;
            var5 = _closure1_slot3;
            var5 = var5[var15];
            var5 = var14.bind(var8)(var5);
            var5 = var5.ApplicationCommandOptionType;
            var5 = var5.USER;
            if(!(var5 !== var12)) { _fun0006_ip = 99; continue _fun0006 }
case 100:
            var14 = _closure1_slot0;
            var5 = _closure1_slot3;
            var5 = var5[var15];
            var5 = var14.bind(var8)(var5);
            var5 = var5.ApplicationCommandOptionType;
            var5 = var5.CHANNEL;
            if(!(var5 !== var12)) { _fun0006_ip = 101; continue _fun0006 }
case 102:
            var14 = _closure1_slot0;
            var5 = _closure1_slot3;
            var5 = var5[var15];
            var5 = var14.bind(var8)(var5);
            var5 = var5.ApplicationCommandOptionType;
            var5 = var5.ROLE;
            if(!(var5 !== var12)) { _fun0006_ip = 103; continue _fun0006 }
case 104:
            var14 = _closure1_slot0;
            var5 = _closure1_slot3;
            var5 = var5[var15];
            var5 = var14.bind(var8)(var5);
            var5 = var5.ApplicationCommandOptionType;
            var5 = var5.MENTIONABLE;
            var1 = null;
            if(!(var5 === var12)) { _fun0006_ip = 97; continue _fun0006 }
case 105:
            var12 = var2.value;
            var5 = var12.toString;
            var15 = var5.bind(var12)();
            var12 = var6 != var9;
            var5 = undefined;
            if(!var12) { _fun0006_ip = 106; continue _fun0006 }
case 107:
            var16 = _closure1_slot8;
            var14 = var16.getRole;
            var12 = var9.id;
            var5 = var14.bind(var16)(var12, var15);
case 106:
            if(!(var6 == var5)) { _fun0006_ip = 108; continue _fun0006 }
case 109:
            var14 = _closure1_slot12;
            var12 = var14.getUser;
            var17 = var12.bind(var14)(var15);
            var12 = var6 != var17;
            var1 = null;
            if(!var12) { _fun0006_ip = 97; continue _fun0006 }
case 110:
            var14 = _closure1_slot20;
            var15 = _closure1_slot1;
            var16 = _closure1_slot3;
            var12 = 20;
            var12 = var16[var12];
            var16 = var15.bind(var8)(var12);
            var15 = var16.getUserTag;
            var12 = {};
            var18 = 'never';
            var12['decoration'] = var18;
            var12 = var15.bind(var16)(var17, var12);
            var1 = var14 + var12;
            _fun0006_ip = 97; continue _fun0006;
case 108:
            var12 = _closure1_slot20;
            var5 = var5.name;
            var1 = var12 + var5;
            _fun0006_ip = 97; continue _fun0006;
case 103:
            var12 = var2.value;
            var5 = var12.toString;
            var16 = var5.bind(var12)();
            var12 = var6 != var9;
            var5 = undefined;
            if(!var12) { _fun0006_ip = 111; continue _fun0006 }
case 112:
            var15 = _closure1_slot8;
            var14 = var15.getRole;
            var12 = var9.id;
            var5 = var14.bind(var15)(var12, var16);
case 111:
            var12 = var6 != var5;
            var1 = null;
            if(!var12) { _fun0006_ip = 97; continue _fun0006 }
case 113:
            var12 = _closure1_slot20;
            var5 = var5.name;
            var1 = var12 + var5;
            _fun0006_ip = 97; continue _fun0006;
case 101:
            var12 = var2.value;
            var5 = var12.toString;
            var14 = var5.bind(var12)();
            var12 = _closure1_slot7;
            var5 = var12.getChannel;
            var17 = var5.bind(var12)(var14);
            var5 = var6 != var17;
            var1 = null;
            if(!var5) { _fun0006_ip = 97; continue _fun0006 }
case 114:
            var12 = _closure1_slot18;
            var14 = _closure1_slot0;
            var15 = _closure1_slot3;
            var5 = 22;
            var5 = var15[var5];
            var16 = var14.bind(var8)(var5);
            var15 = var16.computeChannelName;
            var14 = _closure1_slot12;
            var5 = _closure1_slot11;
            var5 = var15.bind(var16)(var17, var14, var5);
            var1 = var12 + var5;
            _fun0006_ip = 97; continue _fun0006;
case 99:
            var12 = var2.value;
            var5 = var12.toString;
            var14 = var5.bind(var12)();
            var12 = _closure1_slot12;
            var5 = var12.getUser;
            var16 = var5.bind(var12)(var14);
            var5 = var6 != var16;
            var1 = null;
            if(!var5) { _fun0006_ip = 97; continue _fun0006 }
case 115:
            var12 = _closure1_slot20;
            var14 = _closure1_slot1;
            var15 = _closure1_slot3;
            var5 = 20;
            var5 = var15[var5];
            var15 = var14.bind(var8)(var5);
            var14 = var15.getUserTag;
            var5 = {};
            var17 = 'never';
            var5['decoration'] = var17;
            var5 = var14.bind(var15)(var16, var5);
            var1 = var12 + var5;
case 97:
            if(!(var6 == var1)) { _fun0006_ip = 116; continue _fun0006 }
case 117:
            var5 = var6 == var13;
            var12 = undefined;
            if(var5) { _fun0006_ip = 118; continue _fun0006 }
case 119:
            var15 = var13.choices;
            var5 = var6 == var15;
            var12 = undefined;
            if(var5) { _fun0006_ip = 118; continue _fun0006 }
case 120:
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
case 118:
            if(!(var6 == var12)) { _fun0006_ip = 121; continue _fun0006 }
case 122:
            var5 = global;
            var14 = var5.String;
            var5 = var2.value;
            var1 = var14.bind(var8)(var5);
            _fun0006_ip = 116; continue _fun0006;
case 121:
            var5 = var12.name_localized;
            if(!(var6 == var5)) { _fun0006_ip = 123; continue _fun0006 }
case 124:
            var5 = var12.name;
case 123:
            var1 = var5;
case 116:
            var5 = var11.push;
            var1 = var4 + var1;
            var1 = var5.bind(var11)(var1);
            return var11;
case 94:
            var1 = var11.push;
            var1 = var1.bind(var11)(var4);
            var4 = var2.options;
            var1 = var11;
            if(!(var6 != var4)) { _fun0006_ip = 125; continue _fun0006 }
case 126:
            var4 = global;
            var5 = var4.Object;
            var4 = var5.fromEntries;
            var14 = var6 == var13;
            var12 = undefined;
            if(var14) { _fun0006_ip = 127; continue _fun0006 }
case 128:
            var12 = var13.options;
case 127:
            if(!(var6 == var12)) { _fun0006_ip = 72; continue _fun0006 }
case 129:
            var12 = new Array(0);
case 72:
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
            var3 = _closure1_slot25;
            var2 = var2.options;
            var5 = var3.bind(var8)(var2);
            var3 = var5.bind(var8)();
            var2 = var3.done;
            var4 = var11;
            var1 = var4;
            if(var2) { _fun0006_ip = 125; continue _fun0006 }
case 130:
            var13 = var3.value;
            var11 = var4.concat;
            var12 = _closure1_slot28;
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
            if(!var2) { _fun0006_ip = 130; continue _fun0006 }
case 125:
            return var1;
        }
    };
    var _closure1_slot28 = var1;
    var1 = function CommandContentContainer(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
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
            var3 = _closure1_slot24;
            var12 = var3.bind(var4)();
            var _closure2_slot7 = var12;
            var5 = _closure1_slot1;
            var6 = _closure1_slot3;
            var3 = 24;
            var3 = var6[var3];
            var3 = var5.bind(var4)(var3);
            var3 = var3.bind(var4)();
            var7 = var3.analyticsLocations;
            var _closure2_slot8 = var7;
            var5 = _closure1_slot0;
            var3 = 25;
            var3 = var6[var3];
            var8 = var5.bind(var4)(var3);
            var6 = var8.useStateFromStoresObject;
            var3 = _closure1_slot7;
            var5 = new Array(2);
            var5[0] = var3;
            var3 = _closure1_slot9;
            var5[1] = var3;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
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
                    if(var6) { _fun0008_ip = 28; continue _fun0008 }
case 131:
                    var2 = var5.guild_id;
case 28:
                    var2 = var3.bind(var4)(var2);
                    var1['guild'] = var2;
                    return var1;
                }
            };
            var2 = var6.bind(var8)(var5, var2, var3);
            var16 = var2.channel;
            var _closure2_slot9 = var16;
            var15 = var2.guild;
            var _closure2_slot10 = var15;
            var3 = var10.application_command;
            var2 = null;
            var5 = var2 == var3;
            var11 = undefined;
            if(var5) { _fun0007_ip = 132; continue _fun0007 }
case 133:
            var11 = var3.name_localized;
case 132:
            if(!(var2 == var11)) { _fun0007_ip = 134; continue _fun0007 }
case 135:
            var11 = var10.name;
case 134:
            _closure2_slot11 = var11;
            var8 = _closure1_slot0;
            var13 = _closure1_slot3;
            var2 = 23;
            var3 = var13[var2];
            var3 = var8.bind(var4)(var3);
            var6 = var3.intl;
            var5 = var6.format;
            var2 = var13[var2];
            var2 = var8.bind(var4)(var2);
            var2 = var2.t;
            var3 = var2.sj/RT9;
            var2 = {};
            var17 = function userHook() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var5 = _closure1_slot21;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var1 = 17;
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
                    if(!(var9 == var8)) { _fun0009_ip = 136; continue _fun0009 }
case 137:
                    var9 = _closure2_slot7;
                    var9 = var9.commandText;
                    var8 = var9.color;
case 136:
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
case 0:
                    var5 = _closure1_slot21;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var1 = 21;
                    var1 = var3[var1];
                    var4 = undefined;
                    var1 = var2.bind(var4)(var1);
                    var3 = var1.Text;
                    var2 = {};
                    var1 = 'text-sm/semibold';
                    var2['variant'] = var1;
                    var8 = _closure2_slot5;
                    var1 = _closure1_slot15;
                    var1 = var1.CHAT_INPUT_COMMAND;
                    if(!(var8 !== var1)) { _fun0010_ip = 138; continue _fun0010 }
case 30:
                    var1 = _closure2_slot11;
                    _fun0010_ip = 139; continue _fun0010;
case 138:
                    var9 = _closure1_slot19;
                    var8 = _closure2_slot11;
                    var6 = global;
                    var6 = var6.HermesInternal;
                    var7 = var6.concat;
                    var6 = '';
                    var1 = var7.bind(var6)(var9, var8);
case 139:
                    var2['children'] = var1;
                    var1 = 'command';
                    var1 = var5.bind(var4)(var3, var2, var1);
                    return var1;
                }
            };
            var2['commandHook'] = var17;
            var17 = function applicationHook() {
                var5 = _closure1_slot22;
                var10 = _closure1_slot0;
                var11 = _closure1_slot3;
                var1 = 21;
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
                var9 = _closure1_slot21;
                var8 = _closure1_slot1;
                var7 = 26;
                var7 = var11[var7];
                var8 = var8.bind(var4)(var7);
                var7 = {};
                var6 = var6.applicationIcon;
                var7['style'] = var6;
                var6 = 27;
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
            var5 = var5.bind(var6)(var3, var2);
            var6 = _closure1_slot4;
            var3 = var6.useMemo;
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
            var2[8] = var7;
            var1 = function() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var6 = _closure1_slot21;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var1 = 17;
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
                    if(!(var2 != var4)) { _fun0011_ip = 140; continue _fun0011 }
case 141:
                    var4 = var3.Object;
                    var3 = var4.fromEntries;
                    var5 = _closure2_slot3;
                    var5 = var5.application_command;
                    var7 = var2 == var5;
                    var6 = undefined;
                    if(var7) { _fun0011_ip = 95; continue _fun0011 }
case 142:
                    var6 = var5.options;
case 95:
                    if(!(var2 == var6)) { _fun0011_ip = 143; continue _fun0011 }
case 144:
                    var6 = new Array(0);
case 143:
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
                    var3 = _closure1_slot25;
                    var2 = _closure2_slot3;
                    var2 = var2.options;
                    var6 = var3.bind(var9)(var2);
                    var3 = var6.bind(var9)();
                    var2 = var3.done;
                    var5 = '';
                    var4 = var11;
                    var1 = var4;
                    if(var2) { _fun0011_ip = 140; continue _fun0011 }
case 145:
                    var13 = var3.value;
                    var11 = var4.concat;
                    var12 = _closure1_slot27;
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
                    if(!var2) { _fun0011_ip = 145; continue _fun0011 }
case 140:
                    return var1;
                }
            };
            var11 = var3.bind(var6)(var1, var2);
            var3 = _closure1_slot22;
            var1 = 28;
            var1 = var13[var1];
            var1 = var8.bind(var4)(var1);
            var2 = var1.Card;
            var1 = {};
            var16 = _closure1_slot21;
            var7 = 21;
            var6 = var13[var7];
            var6 = var8.bind(var4)(var6);
            var15 = var6.Text;
            var14 = {'style': null, 'variant': 'text-md/medium', 'color': 'mobile-text-heading-primary'};
            var6 = var12.commandText;
            var14['style'] = var6;
            var14['children'] = var5;
            var18 = var10.name;
            var6 = global;
            var5 = var6.HermesInternal;
            var17 = var5.concat;
            var5 = 'commandName-';
            var5 = var17.bind(var5)(var18);
            var14 = var16.bind(var4)(var15, var14, var5);
            var5 = new Array(2);
            var5[0] = var14;
            var9 = _closure1_slot21;
            var7 = var13[var7];
            var7 = var8.bind(var4)(var7);
            var8 = var7.Text;
            var7 = {'style': null, 'variant': 'text-md/medium', 'color': 'text-default'};
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
    var _closure1_slot29 = var1;
    var1 = function CommandActionsContainer(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
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
            if(!var3) { _fun0012_ip = 146; continue _fun0012 }
case 7:
            var7 = var8.some;
            var6 = function(arg1) {
                var1 = arg1;
                var2 = var1.type;
                var4 = _closure1_slot0;
                var3 = _closure1_slot3;
                var1 = 16;
                var3 = var3[var1];
                var1 = undefined;
                var1 = var4.bind(var1)(var3);
                var1 = var1.ApplicationCommandOptionType;
                var1 = var1.ATTACHMENT;
                var1 = var2 === var1;
                return var1;
            };
            var3 = var7.bind(var8)(var6);
case 146:
            var3 = !var3;
            var8 = _closure1_slot0;
            var9 = _closure1_slot3;
            var6 = 25;
            var6 = var9[var6];
            var11 = var8.bind(var5)(var6);
            var9 = var11.useStateFromStoresObject;
            var6 = _closure1_slot7;
            var8 = new Array(2);
            var8[0] = var6;
            var6 = _closure1_slot9;
            var8[1] = var6;
            var6 = new Array(1);
            var6[0] = var4;
            var4 = function() {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
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
                    if(var6) { _fun0013_ip = 28; continue _fun0013 }
case 131:
                    var2 = var5.guild_id;
case 28:
                    var2 = var3.bind(var4)(var2);
                    var1['guild'] = var2;
                    return var1;
                }
            };
            var4 = var9.bind(var11)(var8, var4, var6);
            var11 = var4.channel;
            _closure2_slot3 = var11;
            var4 = var4.guild;
            _closure2_slot4 = var4;
            var9 = _closure1_slot4;
            var8 = var9.useCallback;
            var6 = new Array(3);
            var6[0] = var12;
            var6[1] = var11;
            var6[2] = var4;
            var4 = function() {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    var1 = _closure2_slot2;
                    var2 = var1.application_command;
                    var5 = null;
                    var4 = var5 == var2;
                    var1 = undefined;
                    var6 = undefined;
                    if(var4) { _fun0014_ip = 147; continue _fun0014 }
case 148:
                    var6 = var2.name_localized;
case 147:
                    if(!(var5 == var6)) { _fun0014_ip = 92; continue _fun0014 }
case 149:
                    var2 = _closure2_slot2;
                    var6 = var2.name;
case 92:
                    var4 = _closure1_slot19;
                    var4 = var4 + var6;
                    var11 = new Array(1);
                    var11[0] = var4;
                    var4 = _closure2_slot2;
                    var4 = var4.options;
                    var10 = var11;
                    if(!(var5 != var4)) { _fun0014_ip = 150; continue _fun0014 }
case 37:
                    var4 = global;
                    var7 = var4.Object;
                    var6 = var7.fromEntries;
                    var4 = _closure2_slot2;
                    var4 = var4.application_command;
                    var8 = var5 == var4;
                    var9 = undefined;
                    if(var8) { _fun0014_ip = 141; continue _fun0014 }
case 151:
                    var9 = var4.options;
case 141:
                    if(!(var5 == var9)) { _fun0014_ip = 41; continue _fun0014 }
case 38:
                    var9 = new Array(0);
case 41:
                    var8 = var9.map;
                    var4 = function(arg1) {
                        var2 = arg1;
                        var3 = var2.name;
                        var1 = new Array(2);
                        var1[0] = var3;
                        var1[1] = var2;
                        return var1;
                    };
                    var4 = var8.bind(var9)(var4);
                    var9 = var6.bind(var7)(var4);
                    var6 = _closure1_slot25;
                    var4 = _closure2_slot2;
                    var4 = var4.options;
                    var8 = var6.bind(var1)(var4);
                    var6 = var8.bind(var1)();
                    var4 = var6.done;
                    var7 = var11;
                    var10 = var7;
                    if(var4) { _fun0014_ip = 150; continue _fun0014 }
case 152:
                    var15 = var6.value;
                    var11 = var7.concat;
                    var14 = _closure1_slot28;
                    var18 = _closure2_slot3;
                    var17 = _closure2_slot4;
                    var4 = var15.name;
                    var16 = var9[var4];
                    var20 = undefined;
                    var19 = var15;
                    var4 = var20[var14](var19, var18, var17, var16, var15);
                    var7 = var11.bind(var7)(var4);
                    var12 = var8.bind(var1)();
                    var4 = var12.done;
                    var6 = var12;
                    var10 = var7;
                    if(!var4) { _fun0014_ip = 152; continue _fun0014 }
case 150:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot3;
                    var4 = 29;
                    var4 = var7[var4];
                    var6 = var6.bind(var1)(var4);
                    var4 = var6.isAndroid;
                    var4 = var4.bind(var6)();
                    if(var4) { _fun0014_ip = 153; continue _fun0014 }
case 154:
                    var4 = _closure1_slot6;
                    var9 = var4.DCDClipboardManager;
                    var8 = var9.setItem;
                    var4 = global;
                    var7 = var4.JSON;
                    var6 = var7.stringify;
                    var4 = _closure2_slot2;
                    var7 = var6.bind(var7)(var4);
                    var6 = var10.join;
                    var4 = ' ';
                    var6 = var6.bind(var10)(var4);
                    var4 = 'application/x-discord-interaction-data';
                    var4 = var8.bind(var9)(var7, var4, var6);
                    _fun0014_ip = 155; continue _fun0014;
case 153:
                    var6 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    var7 = 30;
                    var4 = var4[var7];
                    var4 = var6.bind(var1)(var4);
                    if(!(var5 != var4)) { _fun0014_ip = 155; continue _fun0014 }
case 156:
                    var6 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    var4 = var4[var7];
                    var9 = var6.bind(var1)(var4);
                    var8 = var9.setItem;
                    var4 = global;
                    var7 = var4.JSON;
                    var6 = var7.stringify;
                    var4 = _closure2_slot2;
                    var7 = var6.bind(var7)(var4);
                    var6 = var10.join;
                    var4 = ' ';
                    var6 = var6.bind(var10)(var4);
                    var4 = 'application/x-discord-interaction-data';
                    var4 = var8.bind(var9)(var7, var4, var6);
case 155:
                    var4 = _closure2_slot3;
                    if(!(var5 != var4)) { _fun0014_ip = 157; continue _fun0014 }
case 158:
                    var7 = _closure1_slot13;
                    var6 = var7.query;
                    var5 = {};
                    var3 = _closure2_slot3;
                    var5['channel'] = var3;
                    var3 = 'channel';
                    var5['type'] = var3;
                    var4 = {};
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot3;
                    var3 = 16;
                    var3 = var9[var3];
                    var3 = var8.bind(var1)(var3);
                    var3 = var3.ApplicationCommandType;
                    var8 = var3.CHAT;
                    var3 = new Array(1);
                    var3[0] = var8;
                    var4['commandTypes'] = var3;
                    var3 = {};
                    var8 = true;
                    var3['allowFetch'] = var8;
                    var3 = var6.bind(var7)(var5, var4, var3);
case 157:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var2 = 31;
                    var2 = var4[var2];
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.presentCommandCopied;
                    var2 = var2.bind(var3)();
                    return var1;
                }
            };
            var4 = var8.bind(var9)(var4, var6);
            _closure2_slot5 = var4;
            var12 = new Array(0);
            if(!var3) { _fun0012_ip = 26; continue _fun0012 }
case 159:
            var4 = var12.push;
            var8 = _closure1_slot21;
            var14 = _closure1_slot0;
            var15 = _closure1_slot3;
            var3 = 32;
            var3 = var15[var3];
            var3 = var14.bind(var5)(var3);
            var6 = var3.TableRow;
            var3 = {};
            var9 = 23;
            var11 = var15[var9];
            var11 = var14.bind(var5)(var11);
            var13 = var11.intl;
            var11 = var13.string;
            var9 = var15[var9];
            var9 = var14.bind(var5)(var9);
            var9 = var9.t;
            var9 = var9["42H+Nb"];
            var9 = var11.bind(var13)(var9);
            var3['label'] = var9;
            var9 = function onPress() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot3;
                var1 = 18;
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
            var3 = var8.bind(var5)(var6, var3);
            var3 = var4.bind(var12)(var3);
case 26:
            if(!(var1 != var2)) { _fun0012_ip = 160; continue _fun0012 }
case 161:
            var3 = var12.push;
            var6 = _closure1_slot21;
            var13 = _closure1_slot0;
            var14 = _closure1_slot3;
            var2 = 32;
            var2 = var14[var2];
            var2 = var13.bind(var5)(var2);
            var4 = var2.TableRow;
            var2 = {};
            var8 = 23;
            var9 = var14[var8];
            var9 = var13.bind(var5)(var9);
            var11 = var9.intl;
            var9 = var11.string;
            var8 = var14[var8];
            var8 = var13.bind(var5)(var8);
            var8 = var8.t;
            var8 = var8.lNWC7s;
            var8 = var9.bind(var11)(var8);
            var2['label'] = var8;
            var8 = function onPress() {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var1 = 18;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.hideActionSheet;
                    var2 = var2.bind(var3)();
                    var2 = _closure2_slot2;
                    var2 = var2.options;
                    var5 = null;
                    if(!(var5 != var2)) { _fun0015_ip = 162; continue _fun0015 }
case 163:
                    var2 = _closure2_slot2;
                    var2 = var2.options;
                    var2 = var2.length;
                    var3 = 0;
                    if(!(var2 > var3)) { _fun0015_ip = 162; continue _fun0015 }
case 138:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var12 = 16;
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
                    if(var2) { _fun0015_ip = 164; continue _fun0015 }
case 162:
                    var2 = _closure2_slot1;
                    var2 = var5 == var2;
                    var6 = undefined;
                    if(var2) { _fun0015_ip = 165; continue _fun0015 }
case 166:
                    var4 = _closure2_slot1;
                    var4 = var4.current;
                    var2 = var5 == var4;
                    var6 = var4;
case 165:
                    if(var2) { _fun0015_ip = 167; continue _fun0015 }
case 168:
                    var4 = var6.openCustomKeyboard;
                    var2 = {};
                    var11 = _closure1_slot0;
                    var13 = _closure1_slot3;
                    var7 = 33;
                    var7 = var13[var7];
                    var7 = var11.bind(var1)(var7);
                    var7 = var7.KeyboardTypes;
                    var7 = var7.APP_LAUNCHER;
                    var2['type'] = var7;
                    var7 = {};
                    var10 = _closure1_slot17;
                    var10 = var10.COMMAND_VIEW;
                    var7['initialRouteName'] = var10;
                    var10 = 34;
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
                    _fun0015_ip = 167; continue _fun0015;
case 164:
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
                    if(!var4) { _fun0015_ip = 169; continue _fun0015 }
case 107:
                    var6 = var2.length;
                    var4 = var6 > var3;
case 169:
                    if(!var4) { _fun0015_ip = 170; continue _fun0015 }
case 171:
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
case 170:
                    var7 = var2;
                    if(!var4) { _fun0015_ip = 172; continue _fun0015 }
case 173:
                    var6 = var11.push;
                    var4 = var2[var3];
                    var4 = var4.name;
                    var4 = var6.bind(var11)(var4);
                    var2 = var2[var3];
                    var7 = var2.options;
case 172:
                    var2 = _closure2_slot1;
                    var2 = var5 == var2;
                    var4 = undefined;
                    if(var2) { _fun0015_ip = 174; continue _fun0015 }
case 175:
                    var3 = _closure2_slot1;
                    var3 = var3.current;
                    var2 = var5 == var3;
                    var4 = var3;
case 174:
                    if(var2) { _fun0015_ip = 167; continue _fun0015 }
case 176:
                    var3 = var4.openCustomKeyboard;
                    var2 = {};
                    var10 = _closure1_slot0;
                    var12 = _closure1_slot3;
                    var5 = 33;
                    var5 = var12[var5];
                    var5 = var10.bind(var1)(var5);
                    var5 = var5.KeyboardTypes;
                    var5 = var5.APP_LAUNCHER;
                    var2['type'] = var5;
                    var5 = {};
                    var6 = _closure1_slot17;
                    var6 = var6.COMMAND_VIEW;
                    var5['initialRouteName'] = var6;
                    var6 = 34;
                    var6 = var12[var6];
                    var6 = var10.bind(var1)(var6);
                    var6 = var6.ApplicationCommandTriggerLocations;
                    var6 = var6.RECALL;
                    var5['analyticsLocation'] = var6;
                    var6 = {};
                    var9 = _closure2_slot2;
                    var10 = var9.id;
                    var9 = _closure1_slot14;
                    var9 = var10 + var9;
                    var10 = var11.join;
                    var8 = _closure1_slot14;
                    var8 = var10.bind(var11)(var8);
                    var8 = var9 + var8;
                    var6['commandId'] = var8;
                    var6['prefilledOptions'] = var7;
                    var5['preSelectedCommand'] = var6;
                    var2['context'] = var5;
                    var2 = var3.bind(var4)(var2);
case 167:
                    return var1;
                }
            };
            var2['onPress'] = var8;
            var2 = var6.bind(var5)(var4, var2);
            var2 = var3.bind(var12)(var2);
case 160:
            var3 = var12.length;
            var2 = 0;
            var1 = null;
            if(!(var2 !== var3)) { _fun0012_ip = 177; continue _fun0012 }
case 178:
            var4 = _closure1_slot22;
            var8 = _closure1_slot0;
            var11 = _closure1_slot3;
            var2 = 35;
            var2 = var11[var2];
            var2 = var8.bind(var5)(var2);
            var3 = var2.Stack;
            var2 = {};
            var6 = 8;
            var2['spacing'] = var6;
            var13 = _closure1_slot21;
            var6 = 21;
            var6 = var11[var6];
            var6 = var8.bind(var5)(var6);
            var9 = var6.Text;
            var6 = {'variant': 'text-sm/semibold', 'color': 'text-subtle'};
            var14 = 23;
            var15 = var11[var14];
            var15 = var8.bind(var5)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var14 = var11[var14];
            var14 = var8.bind(var5)(var14);
            var14 = var14.t;
            var14 = var14["3eF5/L"];
            var14 = var15.bind(var16)(var14);
            var6['children'] = var14;
            var9 = var13.bind(var5)(var9, var6);
            var6 = new Array(2);
            var6[0] = var9;
            var9 = _closure1_slot21;
            var7 = 36;
            var7 = var11[var7];
            var7 = var8.bind(var5)(var7);
            var8 = var7.TableRowGroup;
            var7 = {};
            var11 = false;
            var7['hasIcons'] = var11;
            var11 = var12.map;
            var10 = function(arg1, arg2) {
                var5 = _closure1_slot21;
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
case 177:
            return var1;
        }
    };
    var _closure1_slot30 = var1;
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
    var4 = var11.bind(var1)(var4);
    var _closure1_slot12 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot13 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.SUB_COMMAND_KEY_SEPARATOR;
    var _closure1_slot14 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var13 = var4.Fonts;
    var7 = var4.MessageTypes;
    var _closure1_slot15 = var7;
    var4 = var4.WHITESPACE_RE;
    var _closure1_slot16 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AppLauncherRouteName;
    var _closure1_slot17 = var4;
    var10 = 12;
    var4 = var6[var10];
    var4 = var5.bind(var1)(var4);
    var7 = var4.CHANNEL_SENTINEL;
    var _closure1_slot18 = var7;
    var7 = var4.COMMAND_SENTINEL;
    var _closure1_slot19 = var7;
    var4 = var4.MENTION_SENTINEL;
    var _closure1_slot20 = var4;
    var4 = 13;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot21 = var7;
    var7 = var4.jsxs;
    var _closure1_slot22 = var7;
    var4 = var4.Fragment;
    var _closure1_slot23 = var4;
    var4 = 14;
    var4 = var6[var4];
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
    var10 = 15;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BRAND;
    var9['color'] = var13;
    var4['commandOptionMentionText'] = var9;
    var9 = {};
    var9['fontSize'] = var12;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.MOBILE_TEXT_HEADING_PRIMARY;
    var9['color'] = var10;
    var4['commandText'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot24 = var4;
    var4 = 40;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/application_commands/native/ExecutedApplicationCommandPopout.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ExecutedCommandPopout(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var1 = arg1;
            var24 = var1.user;
            var19 = var1.channelId;
            var _closure2_slot0 = var19;
            var18 = var1.chatInputRef;
            var23 = var1.messageId;
            var _closure2_slot1 = var23;
            var22 = var1.author;
            var21 = var1.applicationUser;
            var25 = var1.guildId;
            var20 = var1.messageType;
            var1 = _closure1_slot24;
            var4 = undefined;
            var11 = var1.bind(var4)();
            var3 = _closure1_slot0;
            var7 = _closure1_slot3;
            var1 = 25;
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
            var17 = var5.bind(var6)(var3, var1);
            var _closure2_slot2 = var17;
            var6 = _closure1_slot1;
            var1 = 24;
            var3 = var7[var1];
            var5 = var6.bind(var4)(var3);
            var3 = 37;
            var3 = var7[var3];
            var3 = var6.bind(var4)(var3);
            var3 = var3.EXECUTED_COMMAND;
            var3 = var5.bind(var4)(var3);
            var5 = var3.analyticsLocations;
            var7 = _closure1_slot4;
            var6 = var7.useEffect;
            var3 = new Array(3);
            var3[0] = var19;
            var3[1] = var23;
            var16 = null;
            var9 = var16 == var17;
            var8 = undefined;
            if(var9) { _fun0016_ip = 168; continue _fun0016 }
case 165:
            var8 = var17.interactionData;
case 168:
            var3[2] = var8;
            var2 = function() {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                    var1 = _closure2_slot2;
                    var6 = null;
                    var4 = var6 == var1;
                    var1 = undefined;
                    var3 = undefined;
                    if(var4) { _fun0017_ip = 3; continue _fun0017 }
case 29:
                    var4 = _closure2_slot2;
                    var3 = var4.interactionData;
case 3:
                    var3 = var6 == var3;
                    if(var3) { _fun0017_ip = 42; continue _fun0017 }
case 179:
                    var4 = _closure2_slot2;
                    var4 = var6 == var4;
                    var5 = undefined;
                    if(var4) { _fun0017_ip = 180; continue _fun0017 }
case 91:
                    var4 = _closure2_slot2;
                    var4 = var4.interactionData;
                    var5 = var4.type;
case 180:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot3;
                    var4 = 16;
                    var4 = var8[var4];
                    var4 = var7.bind(var1)(var4);
                    var4 = var4.ApplicationCommandType;
                    var4 = var4.CHAT;
                    var4 = var5 === var4;
                    if(!var4) { _fun0017_ip = 181; continue _fun0017 }
case 182:
                    var5 = _closure2_slot2;
                    var6 = var6 == var5;
                    var5 = undefined;
                    if(var6) { _fun0017_ip = 183; continue _fun0017 }
case 184:
                    var6 = _closure2_slot2;
                    var6 = var6.interactionData;
                    var5 = var6.application_command;
case 183:
                    var4 = var1 === var5;
case 181:
                    var3 = var4;
case 42:
                    if(!var3) { _fun0017_ip = 152; continue _fun0017 }
case 185:
                    var4 = _closure1_slot2;
                    var5 = _closure1_slot3;
                    var3 = 38;
                    var3 = var5[var3];
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.fetchMessageInteractionData;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var2 = var4.bind(var5)(var3, var2);
case 152:
                    return var1;
                }
            };
            var2 = var6.bind(var7)(var2, var3);
            var3 = _closure1_slot21;
            var6 = _closure1_slot0;
            var8 = _closure1_slot3;
            var1 = var8[var1];
            var1 = var6.bind(var4)(var1);
            var2 = var1.AnalyticsLocationProvider;
            var1 = {};
            var1['value'] = var5;
            var7 = _closure1_slot21;
            var5 = 39;
            var5 = var8[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.BottomSheet;
            var5 = {};
            var8 = true;
            var5['startExpanded'] = var8;
            var8 = var11.container;
            var5['bodyStyles'] = var8;
            var9 = var16 == var17;
            var8 = undefined;
            if(var9) { _fun0016_ip = 186; continue _fun0016 }
case 187:
            var8 = var17.interactionData;
case 186:
            if(!(var16 == var8)) { _fun0016_ip = 188; continue _fun0016 }
case 189:
            var10 = _closure1_slot21;
            var9 = _closure1_slot5;
            var8 = {};
            var11 = var11.activityIndicator;
            var8['style'] = var11;
            var11 = 'large';
            var8['size'] = var11;
            var8 = var10.bind(var4)(var9, var8);
            _fun0016_ip = 190; continue _fun0016;
case 188:
            var11 = _closure1_slot22;
            var10 = _closure1_slot23;
            var9 = {};
            var15 = _closure1_slot21;
            var14 = _closure1_slot29;
            var12 = {};
            var12['guildId'] = var25;
            var12['user'] = var24;
            var12['channelId'] = var19;
            var12['messageId'] = var23;
            var12['author'] = var22;
            var12['applicationUser'] = var21;
            var22 = var16 == var17;
            var21 = undefined;
            if(var22) { _fun0016_ip = 191; continue _fun0016 }
case 192:
            var21 = var17.interactionData;
case 191:
            var12['data'] = var21;
            var12['messageType'] = var20;
            var14 = var15.bind(var4)(var14, var12);
            var12 = new Array(2);
            var12[0] = var14;
            var15 = _closure1_slot21;
            var14 = _closure1_slot30;
            var13 = {};
            var13['channelId'] = var19;
            var13['chatInputRef'] = var18;
            var18 = var16 == var17;
            var16 = undefined;
            if(var18) { _fun0016_ip = 193; continue _fun0016 }
case 194:
            var16 = var17.interactionData;
case 193:
            var13['data'] = var16;
            var13 = var15.bind(var4)(var14, var13);
            var12[1] = var13;
            var9['children'] = var12;
            var8 = var11.bind(var4)(var10, var9);
case 190:
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();