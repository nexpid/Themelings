// app/modules/application_commands/ApplicationCommandUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var6 = metroImportAll;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var _closure1_slot3 = var8;
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
            if(var2) { _fun0001_ip = 342; continue _fun0001 }
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
            var9 = _closure1_slot13;
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
            var7 = _closure1_slot13;
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
 342:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot12 = var1;
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
    var _closure1_slot13 = var1;
    var5 = function buildCommand(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var3 = arg1;
            var2 = var3.rootCommand;
            var4 = var3.command;
            var11 = var3.applicationId;
            var9 = var3.subCommandPath;
            var3 = var3.useKeyedPermissions;
            var12 = undefined;
            var _closure2_slot0 = var12;
            var6 = var2.permissions;
            var5 = null;
            var7 = var5 != var6;
            if(!var7) { _fun0004_ip = 72; continue _fun0004 }
 55:
            var6 = var2.permissions;
            var8 = var6.length;
            var6 = 0;
            var7 = var8 > var6;
 72:
            var6 = undefined;
            if(!var7) { _fun0004_ip = 159; continue _fun0004 }
 77:
            if(var3) { _fun0004_ip = 109; continue _fun0004 }
 80:
            var3 = {};
            _closure2_slot0 = var3;
            var10 = var2.permissions;
            var8 = var10.forEach;
            var7 = function(arg1) {
                var3 = arg1;
                var2 = _closure2_slot0;
                var1 = var3.id;
                var2[var1] = var3;
                var1 = undefined;
                return var1;
            };
            var7 = var8.bind(var10)(var7);
            _fun0004_ip = 156; continue _fun0004;
 109:
            var8 = _closure1_slot0;
            var10 = _closure1_slot3;
            var7 = 5;
            var7 = var10[var7];
            var10 = var8.bind(var12)(var7);
            var8 = var10.keyPermissions;
            var7 = var2.permissions;
            var7 = var8.bind(var10)(var7);
            _closure2_slot0 = var7;
            var3 = var7;
 156:
            var6 = var3;
 159:
            var8 = var9;
            if(!(var5 == var9)) { _fun0004_ip = 170; continue _fun0004 }
 166:
            var8 = new Array(0);
 170:
            var7 = var8.map;
            var3 = function(arg1) {
                var1 = arg1;
                var1 = var1.name;
                return var1;
            };
            var7 = var7.bind(var8)(var3);
            var8 = var9;
            if(!(var5 == var8)) { _fun0004_ip = 196; continue _fun0004 }
 192:
            var8 = new Array(0);
 196:
            var3 = var8.map;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.displayName;
                return var1;
            };
            var8 = var3.bind(var8)(var1);
            var1 = {};
            var3 = var2.version;
            var1['version'] = var3;
            var3 = var2.guild_id;
            var1['guildId'] = var3;
            var3 = var2.id;
            var15 = new Array(1);
            var15[0] = var3;
            var3 = 1;
            var18 = var15;
            var17 = var7;
            var16 = var3;
            var10 = arraySpread(var18, var17, var16);
            var14 = var15.join;
            var13 = _closure1_slot7;
            var13 = var14.bind(var15)(var13);
            var1['id'] = var13;
            var13 = var2.name;
            var14 = new Array(1);
            var14[0] = var13;
            var18 = var14;
            var17 = var7;
            var7 = arraySpread(var18, var17, var16);
            var13 = var14.join;
            var7 = ' ';
            var13 = var13.bind(var14)(var7);
            var1['untranslatedName'] = var13;
            var13 = var4.name_localized;
            var1['serverLocalizedName'] = var13;
            var1['applicationId'] = var11;
            var11 = var2.type;
            if(!(var5 == var11)) { _fun0004_ip = 381; continue _fun0004 }
 349:
            var14 = _closure1_slot0;
            var15 = _closure1_slot3;
            var13 = 6;
            var13 = var15[var13];
            var13 = var14.bind(var12)(var13);
            var13 = var13.ApplicationCommandType;
            var11 = var13.CHAT;
 381:
            var1['type'] = var11;
            var13 = _closure1_slot0;
            var14 = _closure1_slot3;
            var11 = 7;
            var11 = var14[var11];
            var11 = var13.bind(var12)(var11);
            var11 = var11.ApplicationCommandInputType;
            var11 = var11.BOT;
            var1['inputType'] = var11;
            var11 = var4.description;
            var1['untranslatedDescription'] = var11;
            var13 = _closure1_slot15;
            var11 = var4.options;
            var11 = var13.bind(var12)(var11);
            var1['options'] = var11;
            var1['rootCommand'] = var2;
            var1['subCommandPath'] = var9;
            var9 = var2.default_member_permissions;
            var11 = var5 == var9;
            var9 = undefined;
            if(var11) { _fun0004_ip = 512; continue _fun0004 }
 475:
            var11 = _closure1_slot2;
            var13 = _closure1_slot3;
            var10 = 8;
            var10 = var13[var10];
            var12 = var11.bind(var12)(var10);
            var11 = var12.deserialize;
            var10 = var2.default_member_permissions;
            var9 = var11.bind(var12)(var10);
 512:
            var1['defaultMemberPermissions'] = var9;
            var9 = var2.dm_permission;
            var1['dmPermission'] = var9;
            var1['permissions'] = var6;
            var9 = var2.name_localized;
            if(!(var5 == var9)) { _fun0004_ip = 548; continue _fun0004 }
 543:
            var9 = var2.name;
 548:
            var6 = new Array(1);
            var6[0] = var9;
            var18 = var6;
            var17 = var8;
            var16 = var3;
            var3 = arraySpread(var18, var17, var16);
            var3 = var6.join;
            var3 = var3.bind(var6)(var7);
            var1['displayName'] = var3;
            var3 = var4.description_localized;
            if(!(var5 == var3)) { _fun0004_ip = 598; continue _fun0004 }
 593:
            var3 = var4.description;
 598:
            var1['displayDescription'] = var3;
            var3 = var2.nsfw;
            var1['nsfw'] = var3;
            var3 = var2.contexts;
            var1['contexts'] = var3;
            var3 = var2.integration_types;
            var1['integration_types'] = var3;
            var3 = var2.global_popularity_rank;
            var1['global_popularity_rank'] = var3;
            var2 = var2.handler;
            var1['handler'] = var2;
            return var1;
        }
    };
    var _closure1_slot14 = var5;
    var1 = function mapOptions(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var4 = arg1;
            var1 = null;
            var2 = var1 == var4;
            var1 = undefined;
            if(var2) { _fun0005_ip = 31; continue _fun0005 }
 14:
            var3 = var4.map;
            var2 = function(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var3 = arg1;
                    var4 = {};
                    var10 = var4;
                    var9 = var3;
                    var1 = copyDataProperties(var10, var9);
                    var8 = var3.choices;
                    var1 = null;
                    var2 = var1 == var8;
                    var7 = undefined;
                    var5 = undefined;
                    if(var2) { _fun0006_ip = 51; continue _fun0006 }
 34:
                    var6 = var8.map;
                    var2 = function(arg1) {
                        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                            var2 = arg1;
                            var1 = {};
                            var6 = var1;
                            var5 = var2;
                            var3 = copyDataProperties(var6, var5);
                            var3 = var2.name_localized;
                            var4 = null;
                            if(!(var4 == var3)) { _fun0007_ip = 32; continue _fun0007 }
 27:
                            var3 = var2.name;
 32:
                            var2 = 'displayName';
                            var1[var2] = var3;
                            return var1;
                        }
                    };
                    var5 = var6.bind(var8)(var2);
 51:
                    var2 = 'choices';
                    var4[var2] = var5;
                    var6 = _closure1_slot15;
                    var5 = var3.options;
                    var6 = var6.bind(var7)(var5);
                    var5 = 'options';
                    var4[var5] = var6;
                    var6 = var3.name_localized;
                    var5 = 'serverLocalizedName';
                    var4[var5] = var6;
                    var6 = var3.name_localized;
                    if(!(var1 == var6)) { _fun0006_ip = 116; continue _fun0006 }
 111:
                    var6 = var3.name;
 116:
                    var5 = 'displayName';
                    var4[var5] = var6;
                    var5 = var3.description_localized;
                    if(!(var1 == var5)) { _fun0006_ip = 140; continue _fun0006 }
 135:
                    var5 = var3.description;
 140:
                    var1 = 'displayDescription';
                    var4[var1] = var5;
                    var5 = var3.type;
                    var6 = _closure1_slot0;
                    var1 = _closure1_slot3;
                    var8 = 6;
                    var1 = var1[var8];
                    var1 = var6.bind(var7)(var1);
                    var1 = var1.ApplicationCommandOptionType;
                    var1 = var1.CHANNEL;
                    if(!(var5 === var1)) { _fun0006_ip = 204; continue _fun0006 }
 190:
                    var1 = 'channel_types';
                    var1 = var1 in var3;
                    if(var1) { _fun0006_ip = 470; continue _fun0006 }
 204:
                    var5 = var3.type;
                    var6 = _closure1_slot0;
                    var1 = _closure1_slot3;
                    var1 = var1[var8];
                    var1 = var6.bind(var7)(var1);
                    var1 = var1.ApplicationCommandOptionType;
                    var1 = var1.NUMBER;
                    if(!(var5 !== var1)) { _fun0006_ip = 280; continue _fun0006 }
 242:
                    var5 = var3.type;
                    var6 = _closure1_slot0;
                    var1 = _closure1_slot3;
                    var1 = var1[var8];
                    var1 = var6.bind(var7)(var1);
                    var1 = var1.ApplicationCommandOptionType;
                    var1 = var1.INTEGER;
                    if(!(var5 === var1)) { _fun0006_ip = 354; continue _fun0006 }
 280:
                    var1 = 'min_value';
                    var1 = var1 in var3;
                    if(var1) { _fun0006_ip = 306; continue _fun0006 }
 293:
                    var1 = 'max_value';
                    var1 = var1 in var3;
                    if(!var1) { _fun0006_ip = 354; continue _fun0006 }
 306:
                    var1 = {};
                    var10 = var1;
                    var9 = var4;
                    var5 = copyDataProperties(var10, var9);
                    var6 = var3.min_value;
                    var5 = 'minValue';
                    var1[var5] = var6;
                    var6 = var3.max_value;
                    var5 = 'maxValue';
                    var1[var5] = var6;
                    _fun0006_ip = 468; continue _fun0006;
 354:
                    var6 = var3.type;
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var2 = var2[var8];
                    var2 = var5.bind(var7)(var2);
                    var2 = var2.ApplicationCommandOptionType;
                    var5 = var2.STRING;
                    var2 = var4;
                    if(!(var6 === var5)) { _fun0006_ip = 465; continue _fun0006 }
 395:
                    var5 = 'min_length';
                    var5 = var5 in var3;
                    if(var5) { _fun0006_ip = 420; continue _fun0006 }
 406:
                    var5 = 'max_length';
                    var5 = var5 in var3;
                    var2 = var4;
                    if(!var5) { _fun0006_ip = 465; continue _fun0006 }
 420:
                    var5 = {};
                    var10 = var5;
                    var9 = var4;
                    var6 = copyDataProperties(var10, var9);
                    var7 = var3.min_length;
                    var6 = 'minLength';
                    var5[var6] = var7;
                    var7 = var3.max_length;
                    var6 = 'maxLength';
                    var5[var6] = var7;
                    var2 = var5;
 465:
                    var1 = var2;
 468:
                    _fun0006_ip = 500; continue _fun0006;
 470:
                    var2 = {};
                    var10 = var2;
                    var9 = var4;
                    var4 = copyDataProperties(var10, var9);
                    var4 = var3.channel_types;
                    var3 = 'channelTypes';
                    var2[var3] = var4;
                    var1 = var2;
 500:
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var2);
 31:
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var1 = function buildSubCommands(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var1 = arg1;
            var7 = var1.rootCommand;
            var6 = var1.command;
            var5 = var1.applicationId;
            var4 = var1.subCommandPath;
            var1 = var1.useKeyedPermissions;
            var3 = var6.hasOwnProperty;
            var2 = 'id';
            var2 = var3.bind(var6)(var2);
            if(var2) { _fun0008_ip = 214; continue _fun0008 }
 55:
            var10 = var6.type;
            var11 = _closure1_slot0;
            var3 = _closure1_slot3;
            var12 = 6;
            var3 = var3[var12];
            var8 = undefined;
            var3 = var11.bind(var8)(var3);
            var3 = var3.ApplicationCommandOptionType;
            var3 = var3.SUB_COMMAND;
            if(!(var10 !== var3)) { _fun0008_ip = 247; continue _fun0008 }
 104:
            var10 = var6.type;
            var11 = _closure1_slot0;
            var3 = _closure1_slot3;
            var3 = var3[var12];
            var3 = var11.bind(var8)(var3);
            var3 = var3.ApplicationCommandOptionType;
            var3 = var3.SUB_COMMAND_GROUP;
            if(!(var10 !== var3)) { _fun0008_ip = 247; continue _fun0008 }
 142:
            var10 = var6.options;
            var3 = null;
            if(!(var3 != var10)) { _fun0008_ip = 169; continue _fun0008 }
 153:
            var3 = var6.options;
            var10 = var3.length;
            var3 = 0;
            if(!(var3 === var10)) { _fun0008_ip = 247; continue _fun0008 }
 169:
            var3 = _closure1_slot14;
            var2 = {};
            var2['rootCommand'] = var7;
            var2['command'] = var6;
            var2['applicationId'] = var5;
            var2['subCommandPath'] = var4;
            var2['useKeyedPermissions'] = var1;
            var3 = var3.bind(var8)(var2);
            var2 = new Array(1);
            var2[0] = var3;
            return var2;
 214:
            var3 = var6.options;
            var2 = null;
            if(!(var2 != var3)) { _fun0008_ip = 779; continue _fun0008 }
 228:
            var2 = var6.options;
            var3 = var2.length;
            var2 = 0;
            if(!(var2 !== var3)) { _fun0008_ip = 779; continue _fun0008 }
 247:
            var2 = new Array(0);
            var3 = var6.options;
            var15 = null;
            if(!(var15 != var3)) { _fun0008_ip = 777; continue _fun0008 }
 265:
            var10 = var6.options;
            var8 = var10.filter;
            var3 = function(arg1) {
                var1 = arg1;
                var2 = var1.type;
                var4 = _closure1_slot0;
                var3 = _closure1_slot3;
                var1 = 6;
                var3 = var3[var1];
                var1 = undefined;
                var1 = var4.bind(var1)(var3);
                var1 = var1.ApplicationCommandOptionType;
                var1 = var1.SUB_COMMAND_GROUP;
                var1 = var2 === var1;
                return var1;
            };
            var8 = var8.bind(var10)(var3);
            var3 = var8.length;
            var11 = 0;
            var12 = var11 < var3;
            var10 = undefined;
            var14 = 6;
            var13 = 0;
            if(!var12) { _fun0008_ip = 501; continue _fun0008 }
 312:
            var16 = var2.push;
            var17 = _closure1_slot16;
            var12 = {};
            var12['rootCommand'] = var7;
            var18 = var8[var13];
            var12['command'] = var18;
            var12['applicationId'] = var5;
            var20 = var4;
            if(!(var15 == var4)) { _fun0008_ip = 352; continue _fun0008 }
 348:
            var20 = new Array(0);
 352:
            var19 = var20.concat;
            var21 = {};
            var18 = var8[var13];
            var18 = var18.name;
            var21['name'] = var18;
            var22 = _closure1_slot0;
            var18 = _closure1_slot3;
            var18 = var18[var14];
            var18 = var22.bind(var10)(var18);
            var18 = var18.ApplicationCommandOptionType;
            var18 = var18.SUB_COMMAND_GROUP;
            var21['type'] = var18;
            var18 = var8[var13];
            var18 = var18.name_localized;
            if(!(var15 == var18)) { _fun0008_ip = 428; continue _fun0008 }
 419:
            var22 = var8[var13];
            var18 = var22.name;
 428:
            var21['displayName'] = var18;
            var18 = new Array(1);
            var18[0] = var21;
            var18 = var19.bind(var20)(var18);
            var12['subCommandPath'] = var18;
            var12['useKeyedPermissions'] = var1;
            var24 = var17.bind(var10)(var12);
            var12 = new Array(0);
            var25 = var12;
            var23 = 0;
            var17 = arraySpread(var25, var24, var23);
            var25 = var16;
            var24 = var12;
            var23 = var2;
            var12 = apply(var25, var24, var23);
            var13 = var13 + 1;
            var12 = var8.length;
            if(var13 < var12) { _fun0008_ip = 312; continue _fun0008 }
 501:
            var13 = var6.options;
            var12 = var13.filter;
            var9 = function(arg1) {
                var1 = arg1;
                var2 = var1.type;
                var4 = _closure1_slot0;
                var3 = _closure1_slot3;
                var1 = 6;
                var3 = var3[var1];
                var1 = undefined;
                var1 = var4.bind(var1)(var3);
                var1 = var1.ApplicationCommandOptionType;
                var1 = var1.SUB_COMMAND;
                var1 = var2 === var1;
                return var1;
            };
            var9 = var12.bind(var13)(var9);
            var12 = var9.length;
            var12 = var11 < var12;
            var13 = 0;
            if(!var12) { _fun0008_ip = 706; continue _fun0008 }
 538:
            var16 = var2.push;
            var17 = _closure1_slot14;
            var12 = {};
            var12['rootCommand'] = var7;
            var18 = var9[var13];
            var12['command'] = var18;
            var12['applicationId'] = var5;
            var20 = var4;
            if(!(var15 == var20)) { _fun0008_ip = 578; continue _fun0008 }
 574:
            var20 = new Array(0);
 578:
            var19 = var20.concat;
            var21 = {};
            var18 = var9[var13];
            var18 = var18.name;
            var21['name'] = var18;
            var22 = _closure1_slot0;
            var18 = _closure1_slot3;
            var18 = var18[var14];
            var18 = var22.bind(var10)(var18);
            var18 = var18.ApplicationCommandOptionType;
            var18 = var18.SUB_COMMAND;
            var21['type'] = var18;
            var18 = var9[var13];
            var18 = var18.name_localized;
            if(!(var15 == var18)) { _fun0008_ip = 654; continue _fun0008 }
 645:
            var22 = var9[var13];
            var18 = var22.name;
 654:
            var21['displayName'] = var18;
            var18 = new Array(1);
            var18[0] = var21;
            var18 = var19.bind(var20)(var18);
            var12['subCommandPath'] = var18;
            var12['useKeyedPermissions'] = var1;
            var12 = var17.bind(var10)(var12);
            var12 = var16.bind(var2)(var12);
            var13 = var13 + 1;
            var12 = var9.length;
            if(var13 < var12) { _fun0008_ip = 538; continue _fun0008 }
 706:
            var8 = var8.length;
            var8 = var11 === var8;
            if(!var8) { _fun0008_ip = 727; continue _fun0008 }
 718:
            var9 = var9.length;
            var8 = var11 === var9;
 727:
            if(!var8) { _fun0008_ip = 775; continue _fun0008 }
 730:
            var8 = var2.push;
            var9 = _closure1_slot14;
            var3 = {};
            var3['rootCommand'] = var7;
            var3['command'] = var6;
            var3['applicationId'] = var5;
            var3['subCommandPath'] = var4;
            var3['useKeyedPermissions'] = var1;
            var3 = var9.bind(var10)(var3);
            var3 = var8.bind(var2)(var3);
 775:
            return var2;
 777:
            return var2;
 779:
            var3 = _closure1_slot14;
            var2 = {};
            var2['rootCommand'] = var7;
            var2['command'] = var6;
            var2['applicationId'] = var5;
            var2['subCommandPath'] = var4;
            var2['useKeyedPermissions'] = var1;
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var1 = new Array(1);
            var1[0] = var2;
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var1 = function hasAccessGivenPerms(arg1, arg2, arg3) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var2 = arg1;
            var5 = arg3;
            var11 = _closure1_slot0;
            var1 = _closure1_slot3;
            var7 = 5;
            var3 = var1[var7];
            var9 = undefined;
            var8 = var11.bind(var9)(var3);
            var6 = var8.toPermissionKey;
            var3 = var2.userId;
            var10 = 7;
            var1 = var1[var10];
            var1 = var11.bind(var9)(var1);
            var1 = var1.ApplicationCommandPermissionType;
            var1 = var1.USER;
            var1 = var6.bind(var8)(var3, var1);
            var1 = var5[var1];
            var3 = null;
            if(!(var3 == var1)) { _fun0009_ip = 298; continue _fun0009 }
 85:
            var6 = _closure1_slot12;
            var2 = var2.roles;
            var14 = var6.bind(var9)(var2);
            var6 = var14.bind(var9)();
            var11 = var6.done;
            var2 = false;
            var8 = true;
            var13 = var6;
            var12 = false;
            var6 = false;
            if(var11) { _fun0009_ip = 219; continue _fun0009 }
 123:
            var17 = var13.value;
            var18 = _closure1_slot0;
            var11 = _closure1_slot3;
            var15 = var11[var7];
            var16 = var18.bind(var9)(var15);
            var15 = var16.toPermissionKey;
            var11 = var11[var10];
            var11 = var18.bind(var9)(var11);
            var11 = var11.ApplicationCommandPermissionType;
            var11 = var11.ROLE;
            var11 = var15.bind(var16)(var17, var11);
            var11 = var5[var11];
            if(!(var3 != var11)) { _fun0009_ip = 197; continue _fun0009 }
 186:
            var11 = var11.permission;
            var12 = true;
            if(var11) { _fun0009_ip = 217; continue _fun0009 }
 197:
            var16 = var14.bind(var9)();
            var11 = var16.done;
            var13 = var16;
            var6 = var12;
            if(var11) { _fun0009_ip = 219; continue _fun0009 }
 215:
            _fun0009_ip = 123; continue _fun0009;
 217:
            return var8;
 219:
            if(var6) { _fun0009_ip = 296; continue _fun0009 }
 222:
            var6 = _closure1_slot0;
            var4 = _closure1_slot3;
            var7 = var4[var7];
            var8 = var6.bind(var9)(var7);
            var7 = var8.toPermissionKey;
            var4 = var4[var10];
            var4 = var6.bind(var9)(var4);
            var4 = var4.ApplicationCommandPermissionType;
            var6 = var4.ROLE;
            var4 = arg2;
            var4 = var7.bind(var8)(var4, var6);
            var4 = var5[var4];
            var5 = var3 != var4;
            var3 = null;
            if(!var5) { _fun0009_ip = 294; continue _fun0009 }
 288:
            var3 = var4.permission;
 294:
            return var3;
 296:
            return var2;
 298:
            var1 = var1.permission;
            return var1;
        }
    };
    var _closure1_slot17 = var1;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var4);
    var9 = 0;
    var4 = var8[var9];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var4 = var4.isReadableType;
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var8[var4];
    var4 = var7.bind(var1)(var4);
    var4 = var4.DraftType;
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var8[var4];
    var4 = var7.bind(var1)(var4);
    var10 = var4.BuiltInSectionId;
    var _closure1_slot6 = var10;
    var4 = var4.SUB_COMMAND_KEY_SEPARATOR;
    var _closure1_slot7 = var4;
    var4 = 3;
    var4 = var8[var4];
    var4 = var7.bind(var1)(var4);
    var10 = var4.AnalyticEvents;
    var _closure1_slot8 = var10;
    var4 = var4.ID_REGEX;
    var _closure1_slot9 = var4;
    var4 = 4;
    var4 = var8[var4];
    var4 = var7.bind(var1)(var4);
    var4 = var4.Permissions;
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var8[var4];
    var6 = var6.bind(var1)(var4);
    var4 = var6.deserialize;
    var4 = var4.bind(var6)(var9);
    var _closure1_slot11 = var4;
    var6 = 13;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/application_commands/ApplicationCommandUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var3['buildCommand'] = var5;
    var5 = function buildApplicationCommands(arg1, arg2) {
        var2 = arg2;
        var _closure2_slot0 = var2;
        var4 = _closure1_slot1;
        var3 = _closure1_slot3;
        var2 = 9;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.flatMap;
        var2 = arg1;
        var1 = function(arg1) {
            var4 = arg1;
            var5 = _closure1_slot1;
            var3 = _closure1_slot3;
            var2 = 10;
            var2 = var3[var2];
            var3 = undefined;
            var6 = var5.bind(var3)(var2);
            var5 = var4.id;
            var2 = null;
            var5 = var2 != var5;
            var2 = 'Missing command id';
            var2 = var6.bind(var3)(var5, var2);
            var2 = _closure1_slot16;
            var1 = {};
            var1['rootCommand'] = var4;
            var1['command'] = var4;
            var4 = var4.application_id;
            var1['applicationId'] = var4;
            var1['subCommandPath'] = var3;
            var4 = _closure2_slot0;
            var1['useKeyedPermissions'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['buildApplicationCommands'] = var5;
    var5 = function applicationPermissionsList(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
            var5 = arg1;
            var1 = null;
            var2 = var1 == var5;
            var1 = undefined;
            if(var2) { _fun0010_ip = 37; continue _fun0010 }
 14:
            var4 = var5.reduce;
            var3 = function(arg1, arg2) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                    var1 = arg1;
                    var4 = arg2;
                    var3 = var4.applicationCommandPermissions;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0011_ip = 50; continue _fun0011 }
 18:
                    var3 = var1.push;
                    var2 = {};
                    var5 = var4.id;
                    var2['id'] = var5;
                    var4 = var4.applicationCommandPermissions;
                    var2['permissions'] = var4;
                    var2 = var3.bind(var1)(var2);
 50:
                    return var1;
                }
            };
            var2 = new Array(0);
            var1 = var4.bind(var5)(var3, var2);
 37:
            return var1;
        }
    };
    var3['applicationPermissionsList'] = var5;
    var5 = function isSnowflake(arg1) {
        var4 = arg1;
        var3 = _closure1_slot9;
        var2 = var3.test;
        var1 = var4.trim;
        var1 = var1.bind(var4)();
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['isSnowflake'] = var5;
    var5 = function getMatchingGroupCommands(arg1, arg2, arg3, arg4) {
        var2 = arg2;
        var _closure2_slot0 = var2;
        var2 = arg3;
        var _closure2_slot1 = var2;
        var4 = new Array(0);
        var _closure2_slot2 = var4;
        var3 = _closure1_slot1;
        var5 = _closure1_slot3;
        var2 = 9;
        var2 = var5[var2];
        var5 = undefined;
        var3 = var3.bind(var5)(var2);
        var2 = arg1;
        var3 = var3.bind(var5)(var2);
        var2 = var3.forEach;
        var1 = function(arg1) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                var3 = arg1;
                var5 = _closure2_slot0;
                var4 = var5.test;
                var2 = var3.displayName;
                var2 = var4.bind(var5)(var2);
                if(!var2) { _fun0012_ip = 61; continue _fun0012 }
 28:
                var5 = var3.predicate;
                var4 = null;
                var4 = var4 == var5;
                if(var4) { _fun0012_ip = 58; continue _fun0012 }
 43:
                var6 = var3.predicate;
                var5 = _closure2_slot1;
                var4 = var6.bind(var3)(var5);
 58:
                var2 = var4;
 61:
                if(!var2) { _fun0012_ip = 78; continue _fun0012 }
 64:
                var2 = _closure2_slot2;
                var1 = var2.push;
                var1 = var1.bind(var2)(var3);
 78:
                var1 = undefined;
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        var3 = var4.slice;
        var2 = 0;
        var1 = arg4;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['getMatchingGroupCommands'] = var5;
    var5 = function getApplicationCommandOptionQueryOptions(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
            var5 = arg1;
            var4 = var5.type;
            var7 = _closure1_slot0;
            var2 = _closure1_slot3;
            var9 = 6;
            var3 = var2[var9];
            var8 = undefined;
            var3 = var7.bind(var8)(var3);
            var3 = var3.ApplicationCommandOptionType;
            var3 = var3.STRING;
            var4 = var4 === var3;
            var6 = var5.type;
            var3 = var2[var9];
            var3 = var7.bind(var8)(var3);
            var3 = var3.ApplicationCommandOptionType;
            var3 = var3.CHANNEL;
            var6 = var6 === var3;
            var3 = var5.type;
            var2 = var2[var9];
            var2 = var7.bind(var8)(var2);
            var2 = var2.ApplicationCommandOptionType;
            var2 = var2.USER;
            var3 = var3 === var2;
            if(var3) { _fun0013_ip = 150; continue _fun0013 }
 112:
            var7 = var5.type;
            var10 = _closure1_slot0;
            var2 = _closure1_slot3;
            var2 = var2[var9];
            var2 = var10.bind(var8)(var2);
            var2 = var2.ApplicationCommandOptionType;
            var2 = var2.MENTIONABLE;
            var3 = var7 === var2;
 150:
            var7 = var5.type;
            var10 = _closure1_slot0;
            var2 = _closure1_slot3;
            var2 = var2[var9];
            var2 = var10.bind(var8)(var2);
            var2 = var2.ApplicationCommandOptionType;
            var2 = var2.ROLE;
            var2 = var7 === var2;
            if(var2) { _fun0013_ip = 229; continue _fun0013 }
 191:
            var5 = var5.type;
            var7 = _closure1_slot0;
            var1 = _closure1_slot3;
            var1 = var1[var9];
            var1 = var7.bind(var8)(var1);
            var1 = var1.ApplicationCommandOptionType;
            var1 = var1.MENTIONABLE;
            var2 = var5 === var1;
 229:
            var1 = {};
            var5 = var4;
            if(var4) { _fun0013_ip = 240; continue _fun0013 }
 237:
            var5 = var2;
 240:
            var1['canMentionEveryone'] = var5;
            var1['canMentionHere'] = var4;
            var5 = var4;
            if(var4) { _fun0013_ip = 259; continue _fun0013 }
 256:
            var5 = var6;
 259:
            var1['canMentionChannels'] = var5;
            var5 = var4;
            if(var4) { _fun0013_ip = 273; continue _fun0013 }
 270:
            var5 = var3;
 273:
            var1['canMentionUsers'] = var5;
            if(var4) { _fun0013_ip = 284; continue _fun0013 }
 281:
            var4 = var2;
 284:
            var1['canMentionRoles'] = var4;
            var1['canMentionAnyGuildUser'] = var3;
            var1['canMentionNonMentionableRoles'] = var2;
            return var1;
        }
    };
    var3['getApplicationCommandOptionQueryOptions'] = var5;
    var5 = function allChannelsSentinel(arg1) {
        var2 = _closure1_slot1;
        var3 = _closure1_slot3;
        var1 = 11;
        var1 = var3[var1];
        var3 = undefined;
        var2 = var2.bind(var3)(var1);
        var1 = arg1;
        var3 = var2.bind(var3)(var1);
        var2 = var3.subtract;
        var1 = 1;
        var2 = var2.bind(var3)(var1);
        var1 = var2.toString;
        var1 = var1.bind(var2)();
        return var1;
    };
    var3['allChannelsSentinel'] = var5;
    var5 = function canUseApplicationCommands(arg1, arg2, arg3) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
            var7 = arg1;
            var5 = arg3;
            var1 = arg2;
            var1 = !var1;
            if(!var1) { _fun0014_ip = 242; continue _fun0014 }
 18:
            var2 = var5.isMultiUserDM;
            var2 = var2.bind(var5)();
            var3 = !var2;
            var2 = !var3;
            if(!var3) { _fun0014_ip = 239; continue _fun0014 }
 40:
            var3 = var5.isDM;
            var3 = var3.bind(var5)();
            if(var3) { _fun0014_ip = 223; continue _fun0014 }
 56:
            var3 = var5.isArchivedLockedThread;
            var3 = var3.bind(var5)();
            if(var3) { _fun0014_ip = 159; continue _fun0014 }
 72:
            var6 = _closure1_slot4;
            var3 = var5.type;
            var10 = undefined;
            var3 = var6.bind(var10)(var3);
            var6 = !var3;
            var3 = !var6;
            if(var6) { _fun0014_ip = 157; continue _fun0014 }
 97:
            var8 = var7.can;
            var9 = _closure1_slot2;
            var11 = _closure1_slot3;
            var6 = 8;
            var6 = var11[var6];
            var11 = var9.bind(var10)(var6);
            var10 = var11.combine;
            var6 = _closure1_slot10;
            var9 = var6.USE_APPLICATION_COMMANDS;
            var6 = var6.SEND_MESSAGES;
            var6 = var10.bind(var11)(var9, var6);
            var3 = var8.bind(var7)(var6, var5);
 157:
            _fun0014_ip = 221; continue _fun0014;
 159:
            var6 = var7.can;
            var10 = _closure1_slot2;
            var9 = _closure1_slot3;
            var8 = 8;
            var9 = var9[var8];
            var8 = undefined;
            var10 = var10.bind(var8)(var9);
            var9 = var10.combine;
            var4 = _closure1_slot10;
            var8 = var4.USE_APPLICATION_COMMANDS;
            var4 = var4.MANAGE_THREADS;
            var4 = var9.bind(var10)(var8, var4);
            var3 = var6.bind(var7)(var4, var5);
 221:
            _fun0014_ip = 236; continue _fun0014;
 223:
            var4 = var5.isSystemDM;
            var4 = var4.bind(var5)();
            var3 = !var4;
 236:
            var2 = var3;
 239:
            var1 = var2;
 242:
            return var1;
        }
    };
    var3['canUseApplicationCommands'] = var5;
    var3['DISABLED_BY_DEFAULT_PERMISSION_FLAG'] = var4;
    var4 = function hasAccess(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
            var1 = arg1;
            var8 = var1.PermissionStore;
            var7 = var1.guild;
            var11 = var1.selfMember;
            var9 = var1.applicationLevelPermissions;
            var10 = var1.commandLevelPermissions;
            var6 = var1.defaultMemberPermissions;
            var2 = var7.ownerId;
            var1 = var11.userId;
            if(!(var2 !== var1)) { _fun0015_ip = 235; continue _fun0015 }
 62:
            var2 = var8.can;
            var1 = _closure1_slot10;
            var1 = var1.ADMINISTRATOR;
            var1 = var2.bind(var8)(var1, var7);
            if(var1) { _fun0015_ip = 235; continue _fun0015 }
 93:
            var5 = var7.id;
            var3 = null;
            if(!(var3 != var10)) { _fun0015_ip = 128; continue _fun0015 }
 104:
            var2 = _closure1_slot17;
            var1 = undefined;
            var1 = var2.bind(var1)(var11, var5, var10);
            var10 = 'boolean';
            var2 = typeof var1;
            if(!(var10 !== var2)) { _fun0015_ip = 233; continue _fun0015 }
 128:
            var2 = _closure1_slot17;
            var10 = undefined;
            var2 = var2.bind(var10)(var11, var5, var9);
            var9 = 'boolean';
            var5 = typeof var2;
            var5 = var9 === var5;
            if(!var5) { _fun0015_ip = 158; continue _fun0015 }
 155:
            var5 = !var2;
 158:
            var2 = !var5;
            if(var5) { _fun0015_ip = 231; continue _fun0015 }
 164:
            var3 = var3 == var6;
            if(var3) { _fun0015_ip = 228; continue _fun0015 }
 171:
            var9 = _closure1_slot2;
            var11 = _closure1_slot3;
            var5 = 8;
            var5 = var11[var5];
            var9 = var9.bind(var10)(var5);
            var5 = var9.equals;
            var4 = _closure1_slot11;
            var4 = var5.bind(var9)(var6, var4);
            var4 = !var4;
            if(!var4) { _fun0015_ip = 225; continue _fun0015 }
 213:
            var5 = var8.can;
            var4 = var5.bind(var8)(var6, var7);
 225:
            var3 = var4;
 228:
            var2 = var3;
 231:
            return var2;
 233:
            return var1;
 235:
            var1 = true;
            return var1;
        }
    };
    var3['hasAccess'] = var4;
    var4 = function getCommandAttachmentDraftType(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
            var4 = arg1;
            var5 = _closure1_slot0;
            var2 = _closure1_slot3;
            var6 = 7;
            var3 = var2[var6];
            var2 = undefined;
            var3 = var5.bind(var2)(var3);
            var3 = var3.CommandOrigin;
            var3 = var3.CHAT;
            if(!(var3 !== var4)) { _fun0016_ip = 625; continue _fun0016 }
 47:
            var5 = _closure1_slot0;
            var3 = _closure1_slot3;
            var3 = var3[var6];
            var3 = var5.bind(var2)(var3);
            var3 = var3.CommandOrigin;
            var3 = var3.APPLICATION_LAUNCHER;
            if(!(var3 !== var4)) { _fun0016_ip = 613; continue _fun0016 }
 83:
            var5 = _closure1_slot0;
            var3 = _closure1_slot3;
            var3 = var3[var6];
            var3 = var5.bind(var2)(var3);
            var3 = var3.CommandOrigin;
            var3 = var3.APP_LAUNCHER_APPLICATION_VIEW;
            if(!(var3 !== var4)) { _fun0016_ip = 613; continue _fun0016 }
 119:
            var5 = _closure1_slot0;
            var3 = _closure1_slot3;
            var3 = var3[var6];
            var3 = var5.bind(var2)(var3);
            var3 = var3.CommandOrigin;
            var3 = var3.CONTEXT_MENU;
            if(!(var3 !== var4)) { _fun0016_ip = 613; continue _fun0016 }
 155:
            var5 = _closure1_slot0;
            var3 = _closure1_slot3;
            var3 = var3[var6];
            var3 = var5.bind(var2)(var3);
            var3 = var3.CommandOrigin;
            var3 = var3.VOICE_UI;
            if(!(var3 !== var4)) { _fun0016_ip = 613; continue _fun0016 }
 191:
            var5 = _closure1_slot0;
            var3 = _closure1_slot3;
            var3 = var3[var6];
            var3 = var5.bind(var2)(var3);
            var3 = var3.CommandOrigin;
            var3 = var3.VOICE_TILE_ACTIVITY_SUGGESTIONS;
            if(!(var3 !== var4)) { _fun0016_ip = 613; continue _fun0016 }
 227:
            var5 = _closure1_slot0;
            var3 = _closure1_slot3;
            var3 = var3[var6];
            var3 = var5.bind(var2)(var3);
            var3 = var3.CommandOrigin;
            var3 = var3.MINI_SHELF;
            if(!(var3 !== var4)) { _fun0016_ip = 613; continue _fun0016 }
 263:
            var5 = _closure1_slot0;
            var3 = _closure1_slot3;
            var3 = var3[var6];
            var3 = var5.bind(var2)(var3);
            var3 = var3.CommandOrigin;
            var3 = var3.USER_PROFILE;
            if(!(var3 !== var4)) { _fun0016_ip = 613; continue _fun0016 }
 299:
            var5 = _closure1_slot0;
            var3 = _closure1_slot3;
            var3 = var3[var6];
            var3 = var5.bind(var2)(var3);
            var3 = var3.CommandOrigin;
            var3 = var3.NOW_PLAYING;
            if(!(var3 !== var4)) { _fun0016_ip = 613; continue _fun0016 }
 335:
            var5 = _closure1_slot0;
            var3 = _closure1_slot3;
            var3 = var3[var6];
            var3 = var5.bind(var2)(var3);
            var3 = var3.CommandOrigin;
            var3 = var3.ACTIVITY_DETAILS;
            if(!(var3 !== var4)) { _fun0016_ip = 613; continue _fun0016 }
 371:
            var5 = _closure1_slot0;
            var3 = _closure1_slot3;
            var3 = var3[var6];
            var3 = var5.bind(var2)(var3);
            var3 = var3.CommandOrigin;
            var3 = var3.ACTIVITIES_HOME;
            if(!(var3 !== var4)) { _fun0016_ip = 613; continue _fun0016 }
 407:
            var5 = _closure1_slot0;
            var3 = _closure1_slot3;
            var3 = var3[var6];
            var3 = var5.bind(var2)(var3);
            var3 = var3.CommandOrigin;
            var3 = var3.ACTIVITY_INSTANCE_EMBED;
            if(!(var3 !== var4)) { _fun0016_ip = 613; continue _fun0016 }
 443:
            var5 = _closure1_slot0;
            var3 = _closure1_slot3;
            var3 = var3[var6];
            var3 = var5.bind(var2)(var3);
            var3 = var3.CommandOrigin;
            var3 = var3.ACTIVITY_BOOKMARK_EMBED;
            if(!(var3 !== var4)) { _fun0016_ip = 613; continue _fun0016 }
 479:
            var5 = _closure1_slot0;
            var3 = _closure1_slot3;
            var3 = var3[var6];
            var3 = var5.bind(var2)(var3);
            var3 = var3.CommandOrigin;
            var3 = var3.APP_MESSAGE_EMBED;
            if(!(var3 !== var4)) { _fun0016_ip = 613; continue _fun0016 }
 512:
            var5 = _closure1_slot0;
            var3 = _closure1_slot3;
            var3 = var3[var6];
            var3 = var5.bind(var2)(var3);
            var3 = var3.CommandOrigin;
            var3 = var3.APP_DMS_ENTRY_POINT_COMMAND_BUTTON;
            if(!(var3 !== var4)) { _fun0016_ip = 613; continue _fun0016 }
 545:
            var5 = _closure1_slot0;
            var3 = _closure1_slot3;
            var3 = var3[var6];
            var3 = var5.bind(var2)(var3);
            var3 = var3.CommandOrigin;
            var3 = var3.IMAGE_RECS_MENU;
            if(!(var3 !== var4)) { _fun0016_ip = 613; continue _fun0016 }
 578:
            var5 = _closure1_slot0;
            var3 = _closure1_slot3;
            var3 = var3[var6];
            var3 = var5.bind(var2)(var3);
            var3 = var3.CommandOrigin;
            var3 = var3.IMAGE_RECS_SUBMENU;
            if(!(var3 !== var4)) { _fun0016_ip = 613; continue _fun0016 }
 611:
            return var2;
 613:
            var2 = _closure1_slot5;
            var2 = var2.ApplicationLauncherCommand;
            return var2;
 625:
            var1 = _closure1_slot5;
            var1 = var1.SlashCommand;
            return var1;
        }
    };
    var3['getCommandAttachmentDraftType'] = var4;
    var4 = function getCommandTriggerSection(arg1) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
            var1 = arg1;
            var2 = null;
            if(!(var2 == var1)) { _fun0017_ip = 13; continue _fun0017 }
 9:
            var2 = undefined;
            return var2;
 13:
            var4 = var1.id;
            var3 = _closure1_slot6;
            var3 = var3.BUILT_IN;
            if(!(var4 !== var3)) { _fun0017_ip = 126; continue _fun0017 }
 35:
            var3 = var1.id;
            var1 = _closure1_slot6;
            var1 = var1.FRECENCY;
            if(!(var3 !== var1)) { _fun0017_ip = 90; continue _fun0017 }
 54:
            var4 = _closure1_slot0;
            var3 = _closure1_slot3;
            var1 = 7;
            var3 = var3[var1];
            var1 = undefined;
            var1 = var4.bind(var1)(var3);
            var1 = var1.ApplicationCommandTriggerSections;
            var1 = var1.APP;
            _fun0017_ip = 124; continue _fun0017;
 90:
            var5 = _closure1_slot0;
            var4 = _closure1_slot3;
            var3 = 7;
            var4 = var4[var3];
            var3 = undefined;
            var3 = var5.bind(var3)(var4);
            var3 = var3.ApplicationCommandTriggerSections;
            var1 = var3.FRECENCY;
 124:
            _fun0017_ip = 160; continue _fun0017;
 126:
            var4 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 7;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var2 = var2.ApplicationCommandTriggerSections;
            var1 = var2.BUILT_IN;
 160:
            return var1;
        }
    };
    var3['getCommandTriggerSection'] = var4;
    var4 = function getApplicationCommandSection(arg1, arg2) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
            var4 = arg1;
            var3 = arg2;
            var1 = {};
            var5 = _closure1_slot0;
            var6 = _closure1_slot3;
            var2 = 7;
            var2 = var6[var2];
            var8 = undefined;
            var2 = var5.bind(var8)(var2);
            var2 = var2.ApplicationCommandSectionType;
            var2 = var2.APPLICATION;
            var1['type'] = var2;
            var2 = var4.id;
            var1['id'] = var2;
            var2 = null;
            var6 = var2 == var4;
            var5 = undefined;
            if(var6) { _fun0018_ip = 89; continue _fun0018 }
 69:
            var6 = var4.bot;
            var7 = var2 == var6;
            var5 = undefined;
            if(var7) { _fun0018_ip = 89; continue _fun0018 }
 84:
            var5 = var6.username;
 89:
            if(!(var2 == var5)) { _fun0018_ip = 98; continue _fun0018 }
 93:
            var5 = var4.name;
 98:
            var1['name'] = var5;
            var5 = var4.icon;
            var1['icon'] = var5;
            var1['application'] = var4;
            var2 = var2 != var3;
            if(!var2) { _fun0018_ip = 125; continue _fun0018 }
 122:
            var2 = var3;
 125:
            var1['isUserApp'] = var2;
            return var1;
        }
    };
    var3['getApplicationCommandSection'] = var4;
    var4 = function extractInteractionDataProps(arg1) {
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
            var1 = arg1;
            var8 = var1.id;
            var2 = var1.options;
            var4 = null;
            var5 = var4 == var2;
            var6 = undefined;
            if(var5) { _fun0019_ip = 42; continue _fun0019 }
 26:
            var7 = var2.find;
            var5 = function(arg1) {
                var1 = arg1;
                var2 = var1.type;
                var4 = _closure1_slot0;
                var3 = _closure1_slot3;
                var1 = 6;
                var3 = var3[var1];
                var1 = undefined;
                var1 = var4.bind(var1)(var3);
                var1 = var1.ApplicationCommandOptionType;
                var1 = var1.SUB_COMMAND_GROUP;
                var1 = var2 === var1;
                return var1;
            };
            var6 = var7.bind(var2)(var5);
 42:
            var5 = var8;
            if(!(var4 != var6)) { _fun0019_ip = 93; continue _fun0019 }
 49:
            var11 = _closure1_slot7;
            var10 = var6.name;
            var7 = global;
            var7 = var7.HermesInternal;
            var9 = var7.concat;
            var7 = '';
            var7 = var9.bind(var7)(var11, var10);
            var5 = var8 + var7;
            var2 = var6.options;
 93:
            var6 = var4 == var2;
            var1 = undefined;
            if(var6) { _fun0019_ip = 118; continue _fun0019 }
 102:
            var6 = var2.find;
            var3 = function(arg1) {
                var1 = arg1;
                var2 = var1.type;
                var4 = _closure1_slot0;
                var3 = _closure1_slot3;
                var1 = 6;
                var3 = var3[var1];
                var1 = undefined;
                var1 = var4.bind(var1)(var3);
                var1 = var1.ApplicationCommandOptionType;
                var1 = var1.SUB_COMMAND;
                var1 = var2 === var1;
                return var1;
            };
            var1 = var6.bind(var2)(var3);
 118:
            var3 = var5;
            if(!(var4 != var1)) { _fun0019_ip = 169; continue _fun0019 }
 125:
            var8 = _closure1_slot7;
            var7 = var1.name;
            var4 = global;
            var4 = var4.HermesInternal;
            var6 = var4.concat;
            var4 = '';
            var4 = var6.bind(var4)(var8, var7);
            var3 = var5 + var4;
            var2 = var1.options;
 169:
            var1 = {};
            var1['commandKey'] = var3;
            var1['interactionOptions'] = var2;
            return var1;
        }
    };
    var3['extractInteractionDataProps'] = var4;
    var4 = function trackCommandSelected(arg1) {
        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
 0:
            var1 = arg1;
            var10 = var1.command;
            var13 = var1.location;
            var12 = var1.triggerSection;
            var11 = var1.queryLength;
            var9 = var1.sectionName;
            var8 = var1.query;
            var7 = var1.searchResultsPosition;
            var6 = var1.source;
            var4 = _closure1_slot0;
            var3 = _closure1_slot3;
            var1 = 12;
            var3 = var3[var1];
            var1 = undefined;
            var5 = var4.bind(var1)(var3);
            var4 = var5.trackWithMetadata;
            var2 = _closure1_slot8;
            var3 = var2.APPLICATION_COMMAND_SELECTED;
            var2 = {};
            var16 = var10.rootCommand;
            var15 = null;
            var17 = var15 == var16;
            var14 = undefined;
            if(var17) { _fun0020_ip = 113; continue _fun0020 }
 108:
            var14 = var16.id;
 113:
            if(!(var15 == var14)) { _fun0020_ip = 122; continue _fun0020 }
 117:
            var14 = var10.id;
 122:
            var2['command_id'] = var14;
            var14 = var10.applicationId;
            var2['application_id'] = var14;
            var2['location'] = var13;
            var2['section'] = var12;
            var2['query_length'] = var11;
            var10 = var10.displayName;
            var10 = var10.length;
            var2['command_text_length'] = var10;
            var2['section_name'] = var9;
            var2['query'] = var8;
            var2['search_results_position'] = var7;
            var2['source'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        }
    };
    var3['trackCommandSelected'] = var4;
    var4 = function getInitialInteractionMetadata(arg1) {
        _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
 0:
            var1 = arg1;
            var3 = var1.interactionMetadata;
            var1 = null;
            var2 = var1 == var3;
            if(var2) { _fun0021_ip = 45; continue _fun0021 }
 18:
            var2 = 'triggering_interaction_metadata';
            var4 = var2 in var3;
            var2 = var3;
            if(!var4) { _fun0021_ip = 42; continue _fun0021 }
 34:
            var2 = var3.triggering_interaction_metadata;
 42:
            var1 = var2;
 45:
            return var1;
        }
    };
    var3['getInitialInteractionMetadata'] = var4;
    var2 = function hasCommandIndexForApp(arg1, arg2) {
        _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
 0:
            var1 = arg2;
            var2 = var1.result;
            var1 = null;
            var4 = var1 == var2;
            var3 = undefined;
            if(var4) { _fun0022_ip = 26; continue _fun0022 }
 20:
            var3 = var2.sections;
 26:
            var1 = var1 != var3;
            if(!var1) { _fun0022_ip = 40; continue _fun0022 }
 33:
            var2 = arg1;
            var1 = var2 in var3;
 40:
            return var1;
        }
    };
    var3['hasCommandIndexForApp'] = var2;
    return var1;
})();