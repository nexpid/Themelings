// app/modules/guild_onboarding_home/GuildOnboardingHomeTypes.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var13 = require;
    var3 = exports;
    var14 = dependencyMap;
    var _closure1_slot0 = var13;
    var1 = metroImportAll;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var14;
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
            var2 = var3.@@iterator;
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
            var9 = _closure1_slot7;
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
            var7 = _closure1_slot7;
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
    var _closure1_slot6 = var1;
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
    var _closure1_slot7 = var1;
    var8 = function newMemberActionFromServer(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var3 = arg1;
            var1 = {};
            var2 = var3.channel_id;
            var1['channelId'] = var2;
            var2 = var3.action_type;
            var1['actionType'] = var2;
            var2 = var3.title;
            var1['title'] = var2;
            var2 = var3.description;
            var1['description'] = var2;
            var4 = var3.emoji;
            var2 = null;
            var5 = var2 == var4;
            var4 = null;
            if(var5) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var5 = {};
            var6 = var3.emoji;
            var6 = var6.id;
            var5['id'] = var6;
            var6 = var3.emoji;
            var6 = var6.name;
            var5['name'] = var6;
            var6 = var3.emoji;
            var6 = var6.animated;
            var5['animated'] = var6;
            var4 = var5;
case 36:
            var1['emoji'] = var4;
            var3 = var3.icon;
            var4 = var2 != var3;
            var2 = null;
            if(!var4) { _fun0004_ip = 38; continue _fun0004 }
case 39:
            var2 = var3;
case 38:
            var1['icon'] = var2;
            return var1;
        }
    };
    var _closure1_slot8 = var8;
    var7 = function resourceChannelFromServer(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var3 = arg1;
            var1 = {};
            var2 = var3.channel_id;
            var1['channelId'] = var2;
            var2 = var3.title;
            var1['title'] = var2;
            var5 = var3.description;
            var2 = null;
            var6 = var2 != var5;
            var4 = '';
            if(!var6) { _fun0005_ip = 40; continue _fun0005 }
case 41:
            var4 = var5;
case 40:
            var1['description'] = var4;
            var4 = var3.emoji;
            var5 = var2 == var4;
            var4 = null;
            if(var5) { _fun0005_ip = 42; continue _fun0005 }
case 43:
            var5 = {};
            var6 = var3.emoji;
            var6 = var6.id;
            var5['id'] = var6;
            var6 = var3.emoji;
            var6 = var6.name;
            var5['name'] = var6;
            var6 = var3.emoji;
            var6 = var6.animated;
            var5['animated'] = var6;
            var4 = var5;
case 42:
            var1['emoji'] = var4;
            var3 = var3.icon;
            var4 = var2 != var3;
            var2 = null;
            if(!var4) { _fun0005_ip = 44; continue _fun0005 }
case 38:
            var2 = var3;
case 44:
            var1['icon'] = var2;
            return var1;
        }
    };
    var _closure1_slot9 = var7;
    var6 = function isWelcomeMessageEmpty(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var4 = arg1;
            var5 = null;
            var1 = var5 == var4;
            if(var1) { _fun0006_ip = 45; continue _fun0006 }
case 46:
            var2 = var4.message;
            var3 = var5 != var2;
            if(!var3) { _fun0006_ip = 47; continue _fun0006 }
case 48:
            var2 = var4.message;
            var6 = var2.length;
            var2 = 0;
            var3 = var6 > var2;
case 47:
            var2 = !var3;
            if(var3) { _fun0006_ip = 49; continue _fun0006 }
case 2:
            var3 = var4.authorIds;
            var3 = var5 != var3;
            if(!var3) { _fun0006_ip = 50; continue _fun0006 }
case 37:
            var4 = var4.authorIds;
            var5 = var4.length;
            var4 = 0;
            var3 = var5 > var4;
case 50:
            var2 = !var3;
case 49:
            var1 = var2;
case 45:
            return var1;
        }
    };
    var _closure1_slot10 = var6;
    var5 = function isSettingsEmpty(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var5 = arg1;
            var6 = null;
            var1 = var6 == var5;
            if(var1) { _fun0007_ip = 51; continue _fun0007 }
case 46:
            var4 = _closure1_slot10;
            var3 = var5.welcomeMessage;
            var2 = undefined;
            var3 = var4.bind(var2)(var3);
            var2 = !var3;
            var2 = !var2;
            if(!var3) { _fun0007_ip = 52; continue _fun0007 }
case 41:
            var3 = var5.newMemberActions;
            var4 = var6 != var3;
            if(!var4) { _fun0007_ip = 53; continue _fun0007 }
case 54:
            var3 = var5.newMemberActions;
            var7 = var3.length;
            var3 = 0;
            var4 = var7 > var3;
case 53:
            var3 = !var4;
            if(var4) { _fun0007_ip = 13; continue _fun0007 }
case 55:
            var4 = var5.resourceChannels;
            var4 = var6 != var4;
            if(!var4) { _fun0007_ip = 56; continue _fun0007 }
case 57:
            var5 = var5.resourceChannels;
            var6 = var5.length;
            var5 = 0;
            var4 = var6 > var5;
case 56:
            var3 = !var4;
case 13:
            var2 = var3;
case 52:
            var1 = var2;
case 51:
            return var1;
        }
    };
    var _closure1_slot11 = var5;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var2);
    var12 = 0;
    var9 = var14[var12];
    var2 = metroImportDefault;
    var1 = undefined;
    var2 = var2.bind(var1)(var9);
    var _closure1_slot3 = var2;
    var11 = 1;
    var2 = var14[var11];
    var2 = var13.bind(var1)(var2);
    var9 = var2.ChannelTypes;
    var _closure1_slot4 = var9;
    var2 = var2.Permissions;
    var _closure1_slot5 = var2;
    var9 = {};
    var9['VIEW'] = var12;
    var2 = 'VIEW';
    var9[var12] = var2;
    var9['CHAT'] = var11;
    var2 = 'CHAT';
    var9[var11] = var2;
    var2 = {};
    var2['DEFAULT'] = var12;
    var10 = 'DEFAULT';
    var2[var12] = var10;
    var2['TODO'] = var11;
    var10 = 'TODO';
    var2[var11] = var10;
    var12 = 2;
    var2['RESOURCE'] = var12;
    var10 = 'RESOURCE';
    var2[var12] = var10;
    var12 = 3;
    var2['RULES'] = var12;
    var10 = 'RULES';
    var2[var12] = var10;
    var10 = 4;
    var2['UPDATES'] = var10;
    var15 = 'UPDATES';
    var2[var10] = var15;
    var10 = var14[var10];
    var14 = var13.bind(var1)(var10);
    var13 = var14.fileFinishedImporting;
    var10 = 'modules/guild_onboarding_home/GuildOnboardingHomeTypes.tsx';
    var10 = var13.bind(var14)(var10);
    var10 = 7;
    var3['WELCOME_MESSAGE_MIN_LENGTH'] = var10;
    var13 = 300;
    var3['WELCOME_MESSAGE_MAX_LENGTH'] = var13;
    var3['NEW_MEMBER_ACTION_TITLE_MIN_LENGTH'] = var10;
    var13 = 60;
    var3['NEW_MEMBER_ACTION_TITLE_MAX_LENGTH'] = var13;
    var3['NEW_MEMBER_ACTION_MIN'] = var12;
    var12 = 5;
    var3['NEW_MEMBER_ACTION_MAX'] = var12;
    var3['RESOURCE_CHANNEL_TITLE_MIN_LENGTH'] = var11;
    var11 = 30;
    var3['RESOURCE_CHANNEL_TITLE_MAX_LENGTH'] = var11;
    var11 = 200;
    var3['RESOURCE_CHANNEL_DESCRIPTION_MAX_LENGTH'] = var11;
    var3['RESOURCE_CHANNEL_MAX'] = var10;
    var10 = 'NEW_MEMBER_ACTION_COMPLETE_MODAL_KEY';
    var3['NEW_MEMBER_ACTION_COMPLETE_MODAL_KEY'] = var10;
    var10 = 46;
    var3['CHANNEL_ACTION_BANNER_HEIGHT'] = var10;
    var3['NewMemberActionTypes'] = var9;
    var3['newMemberActionFromServer'] = var8;
    var3['resourceChannelFromServer'] = var7;
    var7 = function settingsFromServer(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var2 = arg1;
            var1 = null;
            if(!(var1 != var2)) { _fun0008_ip = 58; continue _fun0008 }
case 32:
            var6 = var2.welcome_message;
            var8 = var2.new_member_actions;
            var7 = var2.resource_channels;
            var3 = var2.enabled;
            var2 = {};
            var4 = {};
            var9 = var6.author_ids;
            var4['authorIds'] = var9;
            var6 = var6.message;
            var4['message'] = var6;
            var2['welcomeMessage'] = var4;
            var6 = var8.filter;
            var4 = function(arg1) {
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 2;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var4.bind(var2)(var3);
                var2 = var3.isNotNullish;
                var5 = _closure1_slot3;
                var4 = var5.getChannel;
                var1 = arg1;
                var1 = var1.channel_id;
                var1 = var4.bind(var5)(var1);
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var9 = var6.bind(var8)(var4);
            var8 = var9.map;
            var6 = _closure1_slot8;
            var6 = var8.bind(var9)(var6);
            var2['newMemberActions'] = var6;
            var6 = var7.filter;
            var5 = function(arg1) {
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 2;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var4.bind(var2)(var3);
                var2 = var3.isNotNullish;
                var5 = _closure1_slot3;
                var4 = var5.getChannel;
                var1 = arg1;
                var1 = var1.channel_id;
                var1 = var4.bind(var5)(var1);
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var6 = var6.bind(var7)(var5);
            var5 = var6.map;
            var4 = _closure1_slot9;
            var4 = var5.bind(var6)(var4);
            var2['resourceChannels'] = var4;
            var2['enabled'] = var3;
            return var2;
case 58:
            return var1;
        }
    };
    var3['settingsFromServer'] = var7;
    var7 = function settingsToServer(arg1, arg2) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var2 = arg2;
            var1 = null;
            if(!(var1 != var2)) { _fun0009_ip = 59; continue _fun0009 }
case 32:
            var6 = var2.welcomeMessage;
            var8 = var2.newMemberActions;
            var7 = var2.resourceChannels;
            var3 = var2.enabled;
            var2 = {};
            var5 = arg1;
            var2['guild_id'] = var5;
            var5 = {};
            var11 = var1 == var6;
            var10 = undefined;
            if(var11) { _fun0009_ip = 60; continue _fun0009 }
case 61:
            var10 = var6.authorIds;
case 60:
            if(!(var1 == var10)) { _fun0009_ip = 53; continue _fun0009 }
case 30:
            var10 = new Array(0);
case 53:
            var5['author_ids'] = var10;
            var10 = var1 == var6;
            var9 = undefined;
            if(var10) { _fun0009_ip = 57; continue _fun0009 }
case 62:
            var9 = var6.message;
case 57:
            var10 = var1 != var9;
            var6 = '';
            if(!var10) { _fun0009_ip = 63; continue _fun0009 }
case 64:
            var6 = var9;
case 63:
            var5['message'] = var6;
            var2['welcome_message'] = var5;
            if(!(var1 == var8)) { _fun0009_ip = 65; continue _fun0009 }
case 66:
            var8 = new Array(0);
case 65:
            var6 = var8.filter;
            var5 = function(arg1) {
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 2;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var4.bind(var2)(var3);
                var2 = var3.isNotNullish;
                var5 = _closure1_slot3;
                var4 = var5.getChannel;
                var1 = arg1;
                var1 = var1.channelId;
                var1 = var4.bind(var5)(var1);
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var8 = var6.bind(var8)(var5);
            var6 = var8.map;
            var5 = function(arg1) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var3 = arg1;
                    var1 = {};
                    var2 = var3.channelId;
                    var1['channel_id'] = var2;
                    var2 = var3.actionType;
                    var1['action_type'] = var2;
                    var2 = var3.title;
                    var1['title'] = var2;
                    var2 = var3.description;
                    var1['description'] = var2;
                    var5 = {};
                    var6 = var3.emoji;
                    var4 = null;
                    var8 = var4 == var6;
                    var7 = undefined;
                    if(var8) { _fun0010_ip = 67; continue _fun0010 }
case 7:
                    var7 = var6.id;
case 67:
                    var8 = var4 != var7;
                    var6 = undefined;
                    if(!var8) { _fun0010_ip = 68; continue _fun0010 }
case 69:
                    var6 = var7;
case 68:
                    var5['id'] = var6;
                    var6 = var3.emoji;
                    var8 = var4 == var6;
                    var7 = undefined;
                    if(var8) { _fun0010_ip = 64; continue _fun0010 }
case 11:
                    var7 = var6.name;
case 64:
                    var8 = var4 != var7;
                    var6 = undefined;
                    if(!var8) { _fun0010_ip = 52; continue _fun0010 }
case 13:
                    var6 = var7;
case 52:
                    var5['name'] = var6;
                    var6 = var3.emoji;
                    var8 = var4 == var6;
                    var7 = undefined;
                    if(var8) { _fun0010_ip = 70; continue _fun0010 }
case 71:
                    var7 = var6.animated;
case 70:
                    var8 = var4 != var7;
                    var6 = undefined;
                    if(!var8) { _fun0010_ip = 72; continue _fun0010 }
case 73:
                    var6 = var7;
case 72:
                    var5['animated'] = var6;
                    var1['emoji'] = var5;
                    var3 = var3.icon;
                    var4 = var4 != var3;
                    var2 = undefined;
                    if(!var4) { _fun0010_ip = 74; continue _fun0010 }
case 75:
                    var2 = var3;
case 74:
                    var1['icon'] = var2;
                    return var1;
                }
            };
            var5 = var6.bind(var8)(var5);
            var2['new_member_actions'] = var5;
            if(!(var1 == var7)) { _fun0009_ip = 76; continue _fun0009 }
case 77:
            var7 = new Array(0);
case 76:
            var6 = var7.filter;
            var5 = function(arg1) {
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 2;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var4.bind(var2)(var3);
                var2 = var3.isNotNullish;
                var5 = _closure1_slot3;
                var4 = var5.getChannel;
                var1 = arg1;
                var1 = var1.channelId;
                var1 = var4.bind(var5)(var1);
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var6 = var6.bind(var7)(var5);
            var5 = var6.map;
            var4 = function(arg1) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var3 = arg1;
                    var1 = {};
                    var2 = var3.channelId;
                    var1['channel_id'] = var2;
                    var2 = var3.title;
                    var1['title'] = var2;
                    var2 = var3.description;
                    var1['description'] = var2;
                    var5 = {};
                    var6 = var3.emoji;
                    var4 = null;
                    var8 = var4 == var6;
                    var7 = undefined;
                    if(var8) { _fun0011_ip = 4; continue _fun0011 }
case 78:
                    var7 = var6.id;
case 4:
                    var8 = var4 != var7;
                    var6 = undefined;
                    if(!var8) { _fun0011_ip = 30; continue _fun0011 }
case 79:
                    var6 = var7;
case 30:
                    var5['id'] = var6;
                    var6 = var3.emoji;
                    var8 = var4 == var6;
                    var7 = undefined;
                    if(var8) { _fun0011_ip = 57; continue _fun0011 }
case 62:
                    var7 = var6.name;
case 57:
                    var8 = var4 != var7;
                    var6 = undefined;
                    if(!var8) { _fun0011_ip = 80; continue _fun0011 }
case 81:
                    var6 = var7;
case 80:
                    var5['name'] = var6;
                    var6 = var3.emoji;
                    var8 = var4 == var6;
                    var7 = undefined;
                    if(var8) { _fun0011_ip = 39; continue _fun0011 }
case 82:
                    var7 = var6.animated;
case 39:
                    var8 = var4 != var7;
                    var6 = undefined;
                    if(!var8) { _fun0011_ip = 83; continue _fun0011 }
case 84:
                    var6 = var7;
case 83:
                    var5['animated'] = var6;
                    var1['emoji'] = var5;
                    var3 = var3.icon;
                    var4 = var4 != var3;
                    var2 = undefined;
                    if(!var4) { _fun0011_ip = 77; continue _fun0011 }
case 85:
                    var2 = var3;
case 77:
                    var1['icon'] = var2;
                    return var1;
                }
            };
            var4 = var5.bind(var6)(var4);
            var2['resource_channels'] = var4;
            var2['enabled'] = var3;
            return var2;
case 59:
            return var1;
        }
    };
    var3['settingsToServer'] = var7;
    var7 = function(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var8 = arg1;
            var1 = null;
            if(!(var1 != var8)) { _fun0012_ip = 7; continue _fun0012 }
case 86:
            var2 = {};
            var6 = var8.channel_actions;
            for(var3 in var6)
case 87:
            {
case 88:
                var10 = var3;
                var9 = var8.channel_actions;
                var9 = var9[var10];
                var9 = var9.completed;
                var2[var10] = var9;
                _fun0012_ip = 87; continue _fun0012;
            }
case 37:
            return var2;
case 7:
            return var1;
        }
    };
    var3['actionsFromServer'] = var7;
    var3['isWelcomeMessageEmpty'] = var6;
    var3['isSettingsEmpty'] = var5;
    var5 = function isSettingsValid(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var1 = arg1;
            var7 = null;
            if(!(var7 != var1)) { _fun0013_ip = 89; continue _fun0013 }
case 46:
            var2 = _closure1_slot11;
            var5 = undefined;
            var2 = var2.bind(var5)(var1);
            if(var2) { _fun0013_ip = 90; continue _fun0013 }
case 91:
            var3 = var1.welcomeMessage;
            var4 = var7 == var3;
            var2 = undefined;
            if(var4) { _fun0013_ip = 92; continue _fun0013 }
case 93:
            var2 = var3.message;
case 92:
            if(!(var7 != var2)) { _fun0013_ip = 94; continue _fun0013 }
case 37:
            var2 = var1.welcomeMessage;
            var2 = var2.message;
            var3 = var2.length;
            var2 = 7;
            if(!(!(var3 < var2))) { _fun0013_ip = 94; continue _fun0013 }
case 62:
            var3 = var1.welcomeMessage;
            var4 = var7 == var3;
            var2 = undefined;
            if(var4) { _fun0013_ip = 95; continue _fun0013 }
case 96:
            var2 = var3.authorIds;
case 95:
            if(!(var7 != var2)) { _fun0013_ip = 97; continue _fun0013 }
case 52:
            var2 = var1.welcomeMessage;
            var2 = var2.authorIds;
            var3 = var2.length;
            var2 = 0;
            if(!(var2 !== var3)) { _fun0013_ip = 97; continue _fun0013 }
case 98:
            var2 = var1.newMemberActions;
            if(!(var7 != var2)) { _fun0013_ip = 99; continue _fun0013 }
case 100:
            var2 = var1.newMemberActions;
            var2 = var2.length;
            var4 = 3;
            if(!(!(var2 < var4))) { _fun0013_ip = 99; continue _fun0013 }
case 101:
            var2 = var1.newMemberActions;
            if(!(var7 != var2)) { _fun0013_ip = 102; continue _fun0013 }
case 103:
            var2 = _closure1_slot6;
            var1 = var1.newMemberActions;
            var3 = var2.bind(var5)(var1);
            var2 = var3.bind(var5)();
            var1 = var2.done;
            if(var1) { _fun0013_ip = 102; continue _fun0013 }
case 104:
            var1 = var2.value;
            var9 = _closure1_slot3;
            var8 = var9.getChannel;
            var1 = var1.channelId;
            var10 = var8.bind(var9)(var1);
            if(!(var7 != var10)) { _fun0013_ip = 105; continue _fun0013 }
case 106:
            var8 = _closure1_slot1;
            var1 = _closure1_slot2;
            var1 = var1[var4];
            var9 = var8.bind(var5)(var1);
            var8 = var9.canEveryoneRole;
            var1 = _closure1_slot5;
            var1 = var1.VIEW_CHANNEL;
            var1 = var8.bind(var9)(var1, var10);
            if(!var1) { _fun0013_ip = 105; continue _fun0013 }
case 107:
            var8 = var3.bind(var5)();
            var1 = var8.done;
            var2 = var8;
            if(var1) { _fun0013_ip = 102; continue _fun0013 }
case 108:
            _fun0013_ip = 104; continue _fun0013;
case 105:
            var1 = false;
            return var1;
case 102:
            var1 = true;
            return var1;
case 99:
            var1 = false;
            return var1;
case 97:
            var1 = false;
            return var1;
case 94:
            var1 = false;
            return var1;
case 90:
            var1 = true;
            return var1;
case 89:
            var1 = false;
            return var1;
        }
    };
    var3['isSettingsValid'] = var5;
    var5 = function isChannelValidForResourceChannel(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var5 = arg1;
            var3 = var5.type;
            var1 = _closure1_slot4;
            var1 = var1.GUILD_TEXT;
            var1 = var3 === var1;
            if(!var1) { _fun0014_ip = 69; continue _fun0014 }
case 34:
            var6 = _closure1_slot1;
            var4 = _closure1_slot2;
            var3 = 3;
            var4 = var4[var3];
            var3 = undefined;
            var6 = var6.bind(var3)(var4);
            var4 = var6.canEveryoneRole;
            var3 = _closure1_slot5;
            var3 = var3.SEND_MESSAGES;
            var3 = var4.bind(var6)(var3, var5);
            var1 = !var3;
case 69:
            if(!var1) { _fun0014_ip = 109; continue _fun0014 }
case 68:
            var6 = _closure1_slot1;
            var4 = _closure1_slot2;
            var3 = 3;
            var4 = var4[var3];
            var3 = undefined;
            var4 = var6.bind(var3)(var4);
            var3 = var4.canEveryoneRole;
            var2 = _closure1_slot5;
            var2 = var2.VIEW_CHANNEL;
            var1 = var3.bind(var4)(var2, var5);
case 109:
            return var1;
        }
    };
    var3['isChannelValidForResourceChannel'] = var5;
    var4 = function isChannelValidForNewMemberAction(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var4 = arg1;
            var3 = var4.type;
            var2 = _closure1_slot4;
            var2 = var2.GUILD_TEXT;
            if(!(var2 !== var3)) { _fun0015_ip = 53; continue _fun0015 }
case 87:
            var2 = _closure1_slot4;
            var2 = var2.GUILD_ANNOUNCEMENT;
            if(!(var2 !== var3)) { _fun0015_ip = 53; continue _fun0015 }
case 110:
            var2 = _closure1_slot4;
            var2 = var2.GUILD_FORUM;
            if(!(var2 !== var3)) { _fun0015_ip = 53; continue _fun0015 }
case 111:
            var2 = _closure1_slot4;
            var2 = var2.GUILD_MEDIA;
            if(!(var2 !== var3)) { _fun0015_ip = 53; continue _fun0015 }
case 30:
            var2 = false;
            return var2;
case 53:
            var5 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 3;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var5.bind(var2)(var3);
            var2 = var3.canEveryoneRole;
            var1 = _closure1_slot5;
            var1 = var1.VIEW_CHANNEL;
            var1 = var2.bind(var3)(var1, var4);
            return var1;
        }
    };
    var3['isChannelValidForNewMemberAction'] = var4;
    var3['ChannelEditBlockTypes'] = var2;
    return var1;
})();