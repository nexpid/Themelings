// app/modules/guild_sidebar/ChannelListState.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var17 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var18 = dependencyMap;
    var _closure1_slot0 = var17;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var18;
    var1 = function _superPropGet(arg1, arg2, arg3, arg4) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg1;
            var7 = arg3;
            var _closure2_slot0 = var7;
            var6 = _closure1_slot3;
            var4 = _closure1_slot5;
            var1 = 1;
            var3 = 3;
            var8 = var1 & var3;
            var1 = var5;
            if(!var8) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var5.prototype;
case 2:
            var5 = undefined;
            var4 = var4.bind(var5)(var1);
            var1 = arg2;
            var5 = var6.bind(var5)(var4, var1, var7);
            var _closure2_slot1 = var5;
            var1 = 2;
            var3 = var1 & var3;
            var1 = var5;
            if(!var3) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = 'function';
            var3 = typeof var5;
            var1 = var5;
            if(!(var4 === var3)) { _fun0001_ip = 4; continue _fun0001 }
case 6:
            var1 = function(arg1) {
                var4 = _closure2_slot1;
                var3 = var4.apply;
                var2 = _closure2_slot0;
                var1 = arg1;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
case 4:
            return var1;
        }
    };
    var _closure1_slot63 = var1;
    var1 = function _callSuper(arg1, arg2, arg3) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var4 = arg1;
            var6 = arg3;
            var2 = _closure1_slot5;
            var3 = undefined;
            var1 = arg2;
            var9 = var2.bind(var3)(var1);
            var2 = _closure1_slot4;
            var1 = _closure1_slot65;
            var1 = var1.bind(var3)();
            if(var1) { _fun0002_ip = 7; continue _fun0002 }
case 8:
            var1 = var9.apply;
            var1 = var1.bind(var9)(var4, var6);
            _fun0002_ip = 6; continue _fun0002;
case 7:
            var7 = global;
            var8 = var7.Reflect;
            var7 = var8.construct;
            if(var6) { _fun0002_ip = 9; continue _fun0002 }
case 10:
            var6 = new Array(0);
case 9:
            var5 = _closure1_slot5;
            var5 = var5.bind(var3)(var4);
            var5 = var5.constructor;
            var1 = var7.bind(var8)(var9, var6, var5);
case 6:
            var1 = var2.bind(var3)(var4, var1);
            return var1;
        }
    };
    var _closure1_slot64 = var1;
    var1 = function _isNativeReflectConstruct() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
case 11: // try_start_0
            var2 = global;
            var3 = var2.Boolean;
            var3 = var3.prototype;
            var4 = var3.valueOf;
            var3 = var4.call;
            var8 = var2.Reflect;
            var7 = var8.construct;
            var6 = var2.Boolean;
            var5 = new Array(0);
            var2 = function() {
                var1 = undefined;
                return var1;
            };
            var2 = var7.bind(var8)(var6, var5, var2);
            var2 = var3.bind(var4)(var2);
            var2 = !var2;
            var _closure2_slot0 = var2;
case 12: // try_end0
            _fun0003_ip = 13; continue _fun0003;
case 14: // catch_target0
            CatchBlockStart(arg_register=1);
case 13:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot65 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot65 = var1;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0004_ip = 15; continue _fun0004 }
case 16:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
case 15:
            if(var2) { _fun0004_ip = 17; continue _fun0004 }
case 18:
            var2 = var3.@@iterator;
case 17:
            if(var2) { _fun0004_ip = 19; continue _fun0004 }
case 20:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0004_ip = 21; continue _fun0004 }
case 22:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0004_ip = 23; continue _fun0004 }
case 24:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0004_ip = 25; continue _fun0004 }
case 26:
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
            if(!var7) { _fun0004_ip = 27; continue _fun0004 }
case 28:
            var7 = var3.constructor;
case 27:
            var10 = var9;
            if(!var7) { _fun0004_ip = 29; continue _fun0004 }
case 30:
            var7 = var3.constructor;
            var10 = var7.name;
case 29:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0004_ip = 31; continue _fun0004 }
case 32:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0004_ip = 31; continue _fun0004 }
case 33:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0004_ip = 34; continue _fun0004 }
case 35:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0004_ip = 36; continue _fun0004 }
case 34:
            var9 = _closure1_slot67;
            var7 = var9.bind(var8)(var3, var8);
case 36:
            _fun0004_ip = 37; continue _fun0004;
case 31:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
case 37:
            var6 = var7;
            _fun0004_ip = 23; continue _fun0004;
case 25:
            var7 = _closure1_slot67;
            var6 = var7.bind(var8)(var3, var8);
case 23:
            var4 = var6;
            if(var4) { _fun0004_ip = 21; continue _fun0004 }
case 38:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
case 21:
            if(!var4) { _fun0004_ip = 39; continue _fun0004 }
case 40:
            _closure2_slot0 = var4;
case 39:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0005_ip = 41; continue _fun0005 }
case 42:
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
                    _fun0005_ip = 10; continue _fun0005;
case 41:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
case 10:
                    return var1;
                }
            };
            return var1;
case 19:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot66 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0006_ip = 43; continue _fun0006 }
case 44:
            var2 = var4.length;
            var1 = var3 > var2;
case 43:
            var2 = undefined;
            if(!var1) { _fun0006_ip = 45; continue _fun0006 }
case 46:
            var2 = var4.length;
case 45:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0006_ip = 12; continue _fun0006 }
case 17:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0006_ip = 17; continue _fun0006 }
case 12:
            return var1;
        }
    };
    var _closure1_slot67 = var1;
    var4 = function _computeSubtitle(arg1, arg2, arg3) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var5 = arg1;
            var2 = var5.type;
            var1 = _closure1_slot36;
            var1 = var1.GUILD_VOICE;
            if(!(var1 !== var2)) { _fun0007_ip = 24; continue _fun0007 }
case 47:
            var1 = _closure1_slot36;
            var1 = var1.GUILD_STAGE_VOICE;
            if(!(var1 !== var2)) { _fun0007_ip = 48; continue _fun0007 }
case 3:
            var1 = null;
            return var1;
case 48:
            var3 = _closure1_slot13;
            var2 = var3.getActiveEventByChannel;
            var1 = var5.id;
            var3 = var2.bind(var3)(var1);
            var1 = null;
            var2 = var1 != var3;
            if(!var2) { _fun0007_ip = 49; continue _fun0007 }
case 14:
            var2 = {};
            var6 = 'event';
            var2['type'] = var6;
            var3 = var3.name;
            var2['name'] = var3;
            var1 = var2;
case 49:
            return var1;
case 24:
            var3 = _closure1_slot13;
            var2 = var3.getActiveEventByChannel;
            var1 = var5.id;
            var2 = var2.bind(var3)(var1);
            var1 = null;
            if(!(var1 == var2)) { _fun0007_ip = 50; continue _fun0007 }
case 51:
            var6 = _closure1_slot33;
            var3 = var6.getVoiceStatesForChannel;
            var7 = var3.bind(var6)(var5);
            var3 = arg3;
            if(!var3) { _fun0007_ip = 52; continue _fun0007 }
case 53:
            var3 = arg2;
            if(!var3) { _fun0007_ip = 52; continue _fun0007 }
case 54:
            var8 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 43;
            var6 = var6[var3];
            var3 = undefined;
            var6 = var8.bind(var3)(var6);
            var3 = var6.hasStream;
            var3 = var3.bind(var6)(var7);
            if(var3) { _fun0007_ip = 55; continue _fun0007 }
case 52:
            var6 = _closure1_slot11;
            var3 = var6.getChannelStatus;
            var3 = var3.bind(var6)(var5);
            if(!(var1 != var3)) { _fun0007_ip = 56; continue _fun0007 }
case 57:
            var7 = var3.length;
            var6 = 0;
            if(!(!(var7 > var6))) { _fun0007_ip = 58; continue _fun0007 }
case 56:
            var7 = _closure1_slot9;
            var6 = var7.getEmbeddedActivitiesForChannel;
            var5 = var5.id;
            var7 = var6.bind(var7)(var5);
            var6 = var7.map;
            var5 = function(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var3 = _closure1_slot10;
                    var2 = var3.getApplication;
                    var1 = arg1;
                    var1 = var1.applicationId;
                    var2 = var2.bind(var3)(var1);
                    var1 = null;
                    var3 = var1 == var2;
                    var1 = undefined;
                    if(var3) { _fun0008_ip = 59; continue _fun0008 }
case 60:
                    var1 = var2.name;
case 59:
                    return var1;
                }
            };
            var6 = var6.bind(var7)(var5);
            var5 = var6.filter;
            var8 = _closure1_slot0;
            var7 = _closure1_slot2;
            var4 = 41;
            var7 = var7[var4];
            var4 = undefined;
            var4 = var8.bind(var4)(var7);
            var4 = var4.isNotNullish;
            var7 = var5.bind(var6)(var4);
            var5 = var7.length;
            var4 = 0;
            var4 = var5 > var4;
            var1 = null;
            if(!var4) { _fun0007_ip = 61; continue _fun0007 }
case 62:
            var4 = {};
            var5 = 'embedded-activities';
            var4['type'] = var5;
            var6 = var7.join;
            var5 = ', ';
            var5 = var6.bind(var7)(var5);
            var4['name'] = var5;
            var1 = var4;
case 61:
            return var1;
case 58:
            var1 = {};
            var4 = 'voice';
            var1['type'] = var4;
            var1['text'] = var3;
            return var1;
case 55:
            var1 = {};
            var3 = 'go-live';
            var1['type'] = var3;
            return var1;
case 50:
            var1 = {};
            var3 = 'event';
            var1['type'] = var3;
            var2 = var2.name;
            var1['name'] = var2;
            return var1;
        }
    };
    var _closure1_slot68 = var4;
    var2 = function computeThreadIds(arg1, arg2, arg3, arg4, arg5) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var3 = arg1;
            var6 = arg2;
            var4 = arg3;
            var1 = null;
            var7 = var1 != var4;
            if(!var7) { _fun0009_ip = 63; continue _fun0009 }
case 42:
            var8 = var4.id;
            var2 = var3.id;
            var2 = var8 === var2;
            if(var2) { _fun0009_ip = 18; continue _fun0009 }
case 60:
            var9 = var3.id;
            var8 = arg4;
            var2 = var8 === var9;
case 18:
            var7 = var2;
case 63:
            var2 = var1 != var4;
            if(!var2) { _fun0009_ip = 64; continue _fun0009 }
case 65:
            var1 = var4.isThread;
            var2 = var1.bind(var4)();
case 64:
            if(!var2) { _fun0009_ip = 66; continue _fun0009 }
case 14:
            var8 = var4.parent_id;
            var1 = var3.id;
            var2 = var8 === var1;
case 66:
            var9 = _closure1_slot23;
            var8 = var9.has;
            var3 = var3.type;
            var3 = var8.bind(var9)(var3);
            if(var3) { _fun0009_ip = 67; continue _fun0009 }
case 68:
            var3 = new Array(0);
            return var3;
case 67:
            var8 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 33;
            var3 = var3[var1];
            var1 = undefined;
            var9 = var8.bind(var1)(var3);
            var8 = var9.sortBy;
            var1 = global;
            var3 = var1.Object;
            var1 = var3.values;
            var3 = var1.bind(var3)(var6);
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.joinTimestamp;
                var1 = -var1;
                return var1;
            };
            var8 = var8.bind(var9)(var3, var1);
            var3 = var8.map;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.channel;
                var1 = var1.id;
                return var1;
            };
            var3 = var3.bind(var8)(var1);
            var1 = var3;
            if(var7) { _fun0009_ip = 69; continue _fun0009 }
case 70:
            if(var2) { _fun0009_ip = 71; continue _fun0009 }
case 72:
            var7 = arg5;
            var2 = var3;
            if(!var7) { _fun0009_ip = 73; continue _fun0009 }
case 74:
            var7 = var3.filter;
            var5 = function(arg1) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var4 = arg1;
                    var3 = _closure1_slot19;
                    var1 = var3.isMuted;
                    var1 = var1.bind(var3)(var4);
                    var1 = !var1;
                    if(var1) { _fun0010_ip = 75; continue _fun0010 }
case 76:
                    var3 = _closure1_slot29;
                    var2 = var3.getMentionCount;
                    var3 = var2.bind(var3)(var4);
                    var2 = 0;
                    var1 = var3 > var2;
case 75:
                    return var1;
                }
            };
            var2 = var7.bind(var3)(var5);
case 73:
            _fun0009_ip = 77; continue _fun0009;
case 71:
            var5 = var4.id;
            var5 = var5 in var6;
            var2 = var3;
            if(var5) { _fun0009_ip = 77; continue _fun0009 }
case 78:
            var5 = var3.unshift;
            var4 = var4.id;
            var4 = var5.bind(var3)(var4);
            var2 = var3;
case 77:
            var1 = var2;
case 69:
            return var1;
        }
    };
    var _closure1_slot69 = var2;
    var1 = function shouldShowInFavorites(arg1, arg2) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var2 = arg1;
            var4 = var2.favoriteChannelIds;
            var3 = var4.has;
            var1 = arg2;
            var1 = var1.id;
            var1 = var3.bind(var4)(var1);
            if(!var1) { _fun0011_ip = 2; continue _fun0011 }
case 16:
            var2 = var2.optInEnabled;
            if(var2) { _fun0011_ip = 79; continue _fun0011 }
case 3:
            var2 = true;
case 79:
            var1 = var2;
case 2:
            return var1;
        }
    };
    var _closure1_slot70 = var1;
    var1 = function shouldAlwaysShowInRecents(arg1, arg2) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var2 = arg1;
            var1 = arg2;
            var3 = var1.selectedChannel;
            var5 = var1.activeJoinedRelevantThreads;
            var7 = _closure1_slot29;
            var6 = var7.getMentionCount;
            var4 = var2.id;
            var4 = var6.bind(var7)(var4);
            var10 = 0;
            if(!(!(var4 > var10))) { _fun0012_ip = 80; continue _fun0012 }
case 81:
            var4 = var2.id;
            var8 = var5[var4];
            for(var5 in var8)
case 10:
            {
case 82:
                var12 = var5;
                var11 = _closure1_slot29;
                var4 = var11.getMentionCount;
                var4 = var4.bind(var11)(var12);
                if(!(var4 > var10)) { _fun0012_ip = 10; continue _fun0012 }
case 83:
                var4 = true;
                return var4;
            }
case 84:
            var4 = null;
            if(!(var4 != var3)) { _fun0012_ip = 85; continue _fun0012 }
case 86:
            var5 = var3.id;
            var4 = var2.id;
            if(!(var5 !== var4)) { _fun0012_ip = 87; continue _fun0012 }
case 88:
            var4 = var3.isThread;
            var4 = var4.bind(var3)();
            if(!var4) { _fun0012_ip = 85; continue _fun0012 }
case 89:
            var4 = var3.parent_id;
            var3 = var2.id;
            if(!(var4 !== var3)) { _fun0012_ip = 90; continue _fun0012 }
case 85:
            var4 = _closure1_slot17;
            var3 = var4.getNewChannelIds;
            var1 = var2.category;
            var1 = var1.guild;
            var1 = var1.id;
            var4 = var3.bind(var4)(var1);
            var3 = var4.size;
            var1 = 2;
            var3 = var3 > var1;
            var1 = !var3;
            if(var3) { _fun0012_ip = 91; continue _fun0012 }
case 72:
            var3 = var4.has;
            var2 = var2.id;
            var2 = var3.bind(var4)(var2);
            var2 = !var2;
            var1 = !var2;
case 91:
            return var1;
case 90:
            var1 = false;
            return var1;
case 87:
            var1 = false;
            return var1;
case 80:
            var1 = true;
            return var1;
        }
    };
    var _closure1_slot71 = var1;
    var1 = function shouldShowInRecents(arg1, arg2, arg3) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var1 = arg1;
            var2 = arg2;
            var3 = arg3;
            var4 = var3.selectedChannel;
            var6 = var3.activeJoinedRelevantThreads;
            var5 = var2.type;
            var4 = _closure1_slot36;
            var4 = var4.GUILD_DIRECTORY;
            if(!(var5 !== var4)) { _fun0013_ip = 92; continue _fun0013 }
case 15:
            var4 = var1.optInEnabled;
            if(var4) { _fun0013_ip = 65; continue _fun0013 }
case 17:
            var4 = false;
            return var4;
case 65:
            var7 = var1.optedInChannels;
            var5 = var7.has;
            var4 = var2.id;
            var4 = var5.bind(var7)(var4);
            if(var4) { _fun0013_ip = 93; continue _fun0013 }
case 22:
            var4 = var2.isThread;
            var4 = var4.bind(var2)();
            if(var4) { _fun0013_ip = 94; continue _fun0013 }
case 84:
            var4 = var2.parent_id;
            var5 = null;
            if(!(var5 != var4)) { _fun0013_ip = 95; continue _fun0013 }
case 96:
            var8 = var1.optedInChannels;
            var7 = var8.has;
            var4 = var2.parent_id;
            var4 = var7.bind(var8)(var4);
            if(var4) { _fun0013_ip = 97; continue _fun0013 }
case 95:
            var4 = var1.hideResourceChannels;
            if(!var4) { _fun0013_ip = 98; continue _fun0013 }
case 99:
            var7 = var2.hasFlag;
            var4 = _closure1_slot38;
            var4 = var4.IS_GUILD_RESOURCE_CHANNEL;
            var4 = var7.bind(var2)(var4);
            if(var4) { _fun0013_ip = 100; continue _fun0013 }
case 98:
            var4 = var2.isGuildVocal;
            var4 = var4.bind(var2)();
            if(!var4) { _fun0013_ip = 101; continue _fun0013 }
case 102:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var4 = 34;
            var4 = var8[var4];
            var9 = undefined;
            var8 = var7.bind(var9)(var4);
            var7 = var8.getGuildSidebarVoiceStageInSuggestedExperimentEnabled;
            var4 = 'should_show_in_recents';
            var4 = var7.bind(var8)(var4);
            if(var4) { _fun0013_ip = 78; continue _fun0013 }
case 103:
            var4 = false;
            return var4;
case 78:
            var8 = _closure1_slot34;
            var7 = var8.isVoiceCategoryCollapsed;
            var4 = var1.id;
            var7 = var7.bind(var8)(var4);
            if(var7) { _fun0013_ip = 104; continue _fun0013 }
case 105:
            var4 = false;
            return var4;
case 104:
            var8 = _closure1_slot1;
            var10 = _closure1_slot2;
            var4 = 33;
            var4 = var10[var4];
            var9 = var8.bind(var9)(var4);
            var8 = var9.some;
            var11 = _closure1_slot32;
            var10 = var11.getVoiceStatesForChannel;
            var4 = var2.id;
            var4 = var10.bind(var11)(var4);
            var4 = var8.bind(var9)(var4);
            if(!var7) { _fun0013_ip = 101; continue _fun0013 }
case 106:
            if(var4) { _fun0013_ip = 107; continue _fun0013 }
case 101:
            var8 = _closure1_slot29;
            var7 = var8.getMentionCount;
            var4 = var2.id;
            var4 = var7.bind(var8)(var4);
            var11 = 0;
            if(!(!(var4 > var11))) { _fun0013_ip = 108; continue _fun0013 }
case 109:
            var4 = var2.id;
            var9 = var6[var4];
            for(var6 in var9)
case 110:
            {
case 50:
                var13 = var6;
                var12 = _closure1_slot29;
                var4 = var12.getMentionCount;
                var4 = var4.bind(var12)(var13);
                if(!(!(var4 > var11))) { _fun0013_ip = 111; continue _fun0013 }
case 112:
                var12 = _closure1_slot29;
                var4 = var12.hasUnread;
                var4 = var4.bind(var12)(var13);
                if(var4) { _fun0013_ip = 113; continue _fun0013 }
case 114:
                var12 = _closure1_slot29;
                var4 = var12.hasRecentlyVisitedAndRead;
                var4 = var4.bind(var12)(var13);
                if(!var4) { _fun0013_ip = 110; continue _fun0013 }
case 115:
                var4 = true;
                return var4;
case 113:
                var4 = true;
                return var4;
case 111:
                var4 = true;
                return var4;
            }
case 116:
            var7 = var1.mutedChannelIds;
            var6 = var7.has;
            var4 = var2.id;
            var4 = var6.bind(var7)(var4);
            if(var4) { _fun0013_ip = 117; continue _fun0013 }
case 118:
            var4 = var2.parent_id;
            if(!(var5 != var4)) { _fun0013_ip = 119; continue _fun0013 }
case 120:
            var6 = var1.mutedChannelIds;
            var5 = var6.has;
            var4 = var2.parent_id;
            var4 = var5.bind(var6)(var4);
            if(var4) { _fun0013_ip = 117; continue _fun0013 }
case 119:
            var5 = _closure1_slot17;
            var4 = var5.getNewChannelIds;
            var1 = var1.id;
            var5 = var4.bind(var5)(var1);
            var1 = global;
            var4 = var1.Array;
            var1 = var4.from;
            var6 = var1.bind(var4)(var5);
            var4 = var6.sort;
            var1 = function(arg1, arg2) {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 42;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.compare;
                var2 = arg2;
                var1 = arg1;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var6 = var4.bind(var6)(var1);
            var4 = var5.has;
            var1 = var2.id;
            var1 = var4.bind(var5)(var1);
            if(!var1) { _fun0013_ip = 121; continue _fun0013 }
case 122:
            var5 = var6.indexOf;
            var4 = var2.id;
            var5 = var5.bind(var6)(var4);
            var4 = 2;
            var1 = var5 < var4;
case 121:
            var4 = !var1;
            var1 = !var4;
            if(!var4) { _fun0013_ip = 123; continue _fun0013 }
case 124:
            var4 = _closure1_slot29;
            var3 = var4.hasRecentlyVisitedAndRead;
            var2 = var2.id;
            var2 = var3.bind(var4)(var2);
            var2 = !var2;
            var1 = !var2;
case 123:
            return var1;
case 117:
            var1 = false;
            return var1;
case 108:
            var1 = true;
            return var1;
case 107:
            var1 = false;
            return var1;
case 100:
            var1 = false;
            return var1;
case 97:
            var1 = false;
            return var1;
case 94:
            var1 = false;
            return var1;
case 93:
            var1 = false;
            return var1;
case 92:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot72 = var1;
    var16 = global;
    var7 = var16.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var7)(var3, var1, var5);
    var11 = 0;
    var5 = var18[var11];
    var1 = undefined;
    var5 = var12.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var10 = 1;
    var5 = var18[var10];
    var5 = var12.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var14 = 2;
    var5 = var18[var14];
    var5 = var12.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var9 = 3;
    var5 = var18[var9];
    var5 = var12.bind(var1)(var5);
    var _closure1_slot6 = var5;
    var8 = 4;
    var5 = var18[var8];
    var5 = var12.bind(var1)(var5);
    var _closure1_slot7 = var5;
    var7 = 5;
    var5 = var18[var7];
    var5 = var12.bind(var1)(var5);
    var _closure1_slot8 = var5;
    var5 = 6;
    var5 = var18[var5];
    var5 = var12.bind(var1)(var5);
    var _closure1_slot9 = var5;
    var23 = 7;
    var5 = var18[var23];
    var5 = var12.bind(var1)(var5);
    var _closure1_slot10 = var5;
    var5 = 8;
    var5 = var18[var5];
    var5 = var12.bind(var1)(var5);
    var _closure1_slot11 = var5;
    var5 = 9;
    var5 = var18[var5];
    var5 = var12.bind(var1)(var5);
    var _closure1_slot12 = var5;
    var5 = 10;
    var6 = var18[var5];
    var6 = var12.bind(var1)(var6);
    var _closure1_slot13 = var6;
    var6 = 11;
    var6 = var18[var6];
    var6 = var12.bind(var1)(var6);
    var _closure1_slot14 = var6;
    var6 = 12;
    var6 = var18[var6];
    var6 = var12.bind(var1)(var6);
    var _closure1_slot15 = var6;
    var6 = 13;
    var6 = var18[var6];
    var6 = var12.bind(var1)(var6);
    var _closure1_slot16 = var6;
    var6 = 14;
    var6 = var18[var6];
    var6 = var12.bind(var1)(var6);
    var _closure1_slot17 = var6;
    var6 = 15;
    var6 = var18[var6];
    var6 = var12.bind(var1)(var6);
    var _closure1_slot18 = var6;
    var6 = 16;
    var6 = var18[var6];
    var6 = var12.bind(var1)(var6);
    var _closure1_slot19 = var6;
    var6 = 17;
    var6 = var18[var6];
    var6 = var17.bind(var1)(var6);
    var13 = var6.ChannelRecordBase;
    var _closure1_slot20 = var13;
    var13 = var6.isGuildReadableType;
    var _closure1_slot21 = var13;
    var13 = var6.isThread;
    var _closure1_slot22 = var13;
    var6 = var6.THREADED_CHANNEL_TYPES;
    var _closure1_slot23 = var6;
    var6 = 18;
    var6 = var18[var6];
    var6 = var12.bind(var1)(var6);
    var _closure1_slot24 = var6;
    var6 = 19;
    var6 = var18[var6];
    var6 = var12.bind(var1)(var6);
    var _closure1_slot25 = var6;
    var6 = 20;
    var6 = var18[var6];
    var6 = var12.bind(var1)(var6);
    var _closure1_slot26 = var6;
    var6 = 21;
    var6 = var18[var6];
    var6 = var12.bind(var1)(var6);
    var _closure1_slot27 = var6;
    var6 = 22;
    var6 = var18[var6];
    var6 = var12.bind(var1)(var6);
    var _closure1_slot28 = var6;
    var6 = 23;
    var6 = var18[var6];
    var6 = var12.bind(var1)(var6);
    var _closure1_slot29 = var6;
    var6 = 24;
    var6 = var18[var6];
    var6 = var12.bind(var1)(var6);
    var _closure1_slot30 = var6;
    var6 = 25;
    var6 = var18[var6];
    var6 = var12.bind(var1)(var6);
    var _closure1_slot31 = var6;
    var6 = 26;
    var6 = var18[var6];
    var6 = var12.bind(var1)(var6);
    var _closure1_slot32 = var6;
    var6 = 27;
    var6 = var18[var6];
    var6 = var12.bind(var1)(var6);
    var _closure1_slot33 = var6;
    var6 = 28;
    var6 = var18[var6];
    var6 = var12.bind(var1)(var6);
    var _closure1_slot34 = var6;
    var6 = 29;
    var6 = var18[var6];
    var6 = var17.bind(var1)(var6);
    var22 = var6.ChannelListGuildActionRow;
    var _closure1_slot35 = var22;
    var6 = 30;
    var6 = var18[var6];
    var6 = var17.bind(var1)(var6);
    var12 = var6.ChannelTypes;
    var _closure1_slot36 = var12;
    var6 = var6.GuildFeatures;
    var _closure1_slot37 = var6;
    var6 = 31;
    var6 = var18[var6];
    var6 = var17.bind(var1)(var6);
    var6 = var6.ChannelFlags;
    var _closure1_slot38 = var6;
    var6 = 32;
    var6 = var18[var6];
    var6 = var17.bind(var1)(var6);
    var6 = var6.Permissions;
    var _closure1_slot39 = var6;
    var6 = {};
    var6['CannotShow'] = var10;
    var12 = 'CannotShow';
    var6[var10] = var12;
    var6['DoNotShow'] = var14;
    var12 = 'DoNotShow';
    var6[var14] = var12;
    var6['WouldShowIfUncollapsed'] = var9;
    var12 = 'WouldShowIfUncollapsed';
    var6[var9] = var12;
    var6['Show'] = var8;
    var12 = 'Show';
    var6[var8] = var12;
    var _closure1_slot40 = var6;
    var13 = {};
    var13['CHANNEL_NOTICES'] = var11;
    var6 = 'CHANNEL_NOTICES';
    var13[var11] = var6;
    var13['GUILD_ACTIONS'] = var10;
    var6 = 'GUILD_ACTIONS';
    var13[var10] = var6;
    var13['FAVORITES'] = var14;
    var6 = 'FAVORITES';
    var13[var14] = var6;
    var13['RECENTS'] = var9;
    var6 = 'RECENTS';
    var13[var9] = var6;
    var13['UNCATEGORIZED_CHANNELS'] = var8;
    var6 = 'UNCATEGORIZED_CHANNELS';
    var13[var8] = var6;
    var13['FIRST_NAMED_CATEGORY'] = var7;
    var6 = 'FIRST_NAMED_CATEGORY';
    var13[var7] = var6;
    var12 = var13.CHANNEL_NOTICES;
    var _closure1_slot41 = var12;
    var11 = var13.GUILD_ACTIONS;
    var _closure1_slot42 = var11;
    var10 = var13.FAVORITES;
    var _closure1_slot43 = var10;
    var9 = var13.RECENTS;
    var _closure1_slot44 = var9;
    var8 = var13.UNCATEGORIZED_CHANNELS;
    var _closure1_slot45 = var8;
    var7 = var13.FIRST_NAMED_CATEGORY;
    var _closure1_slot46 = var7;
    var20 = var16.Set;
    var15 = var16.String;
    var6 = var22.GUILD_DIRECTORY;
    var15 = var15.bind(var1)(var6);
    var6 = new Array(1);
    var6[0] = var15;
    var15 = var20.prototype;
    var15 = Object.create(var15, {constructor: {value: var20}});
    var28 = var15;
    var27 = var6;
    var6 = new var28[var20](var27, var26);
    var6 = var6 instanceof Object ? var6 : var15;
    var _closure1_slot47 = var6;
    var6 = function() {
        var4 = _closure1_slot8;
        var3 = function ChannelListStates() {
            var3 = this;
            var4 = _closure1_slot7;
            var2 = _closure2_slot0;
            var1 = undefined;
            var2 = var4.bind(var1)(var3, var2);
            var2 = {};
            var3['guilds'] = var2;
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = '_areGuildActionRowsUpdated';
        var1['key'] = var2;
        var2 = function value(arg1, arg2) {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 33;
                var1 = var2[var1];
                var2 = undefined;
                var4 = var3.bind(var2)(var1);
                var3 = var4.isEqual;
                var1 = this;
                var5 = var1.guilds;
                var1 = arg1;
                var5 = var5[var1];
                var1 = null;
                var1 = var1 == var5;
                if(var1) { _fun0014_ip = 125; continue _fun0014 }
case 41:
                var1 = var5.getGuildActionSection;
                var5 = var1.bind(var5)();
                var1 = var5.getRows;
                var6 = var1.bind(var5)();
                var5 = var6.filter;
                var1 = function(arg1) {
                    var3 = _closure1_slot47;
                    var2 = var3.has;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    var1 = !var1;
                    return var1;
                };
                var2 = var5.bind(var6)(var1);
case 125:
                var1 = arg2;
                var1 = var3.bind(var4)(var2, var1);
                var1 = !var1;
                return var1;
            }
        };
        var1['value'] = var2;
        var2 = new Array(11);
        var2[0] = var1;
        var1 = {};
        var6 = '_areChannelNoticeRowsUpdated';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 33;
                var1 = var2[var1];
                var2 = undefined;
                var4 = var3.bind(var2)(var1);
                var3 = var4.isEqual;
                var1 = this;
                var5 = var1.guilds;
                var1 = arg1;
                var5 = var5[var1];
                var1 = null;
                var1 = var1 == var5;
                if(var1) { _fun0015_ip = 82; continue _fun0015 }
case 41:
                var1 = var5.getChannelNoticeSection;
                var5 = var1.bind(var5)();
                var1 = var5.getRows;
                var2 = var1.bind(var5)();
case 82:
                var1 = arg2;
                var1 = var3.bind(var4)(var2, var1);
                var1 = !var1;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = '_areGuildVocalChannelsInRecentsInNeedOfAppearingInActiveNow';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                var1 = this;
                var2 = var1.guilds;
                var1 = arg1;
                var3 = var2[var1];
                var13 = null;
                if(!(var13 != var3)) { _fun0016_ip = 126; continue _fun0016 }
case 47:
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 34;
                var1 = var4[var1];
                var11 = undefined;
                var4 = var2.bind(var11)(var1);
                var2 = var4.getGuildSidebarVoiceStageInSuggestedExperimentEnabled;
                var1 = 'recents_channels_active_now_check';
                var1 = var2.bind(var4)(var1);
                if(!var1) { _fun0016_ip = 126; continue _fun0016 }
case 127:
                var2 = var3.getCategoryFromSection;
                var1 = var3.voiceChannelsSectionNumber;
                var10 = var2.bind(var3)(var1);
                var2 = var3.getCategoryFromSection;
                var1 = var3.recentsSectionNumber;
                var9 = var2.bind(var3)(var1);
                var7 = var9.channels;
                var3 = 0;
                var2 = 33;
                for(var4 in var7)
case 128:
                {
case 129:
                    var14 = var4;
                    var1 = var9.channels;
                    var1 = var1[var14];
                    var15 = var1.renderLevel;
                    var14 = _closure1_slot40;
                    var14 = var14.DoNotShow;
                    if(var15 !== var14) { _fun0016_ip = 128; continue _fun0016 }
case 130:
                    var15 = var1.record;
                    var14 = var15.isGuildVocal;
                    var14 = var14.bind(var15)();
                    if(!var14) { _fun0016_ip = 128; continue _fun0016 }
case 131:
                    var15 = var10.channels;
                    var14 = var1.id;
                    var14 = var15[var14];
                    if(var13 != var14) { _fun0016_ip = 128; continue _fun0016 }
case 132:
                    var15 = _closure1_slot1;
                    var14 = _closure1_slot2;
                    var14 = var14[var2];
                    var16 = var15.bind(var11)(var14);
                    var15 = var16.some;
                    var18 = _closure1_slot32;
                    var17 = var18.getVoiceStatesForChannel;
                    var14 = var1.id;
                    var14 = var17.bind(var18)(var14);
                    var14 = var15.bind(var16)(var14);
                    if(!var14) { _fun0016_ip = 128; continue _fun0016 }
case 133:
                    var15 = _closure1_slot29;
                    var14 = var15.getMentionCount;
                    var1 = var1.id;
                    var1 = var14.bind(var15)(var1);
                    if(!(var1 > var3)) { _fun0016_ip = 128; continue _fun0016 }
case 134:
                    var1 = true;
                    return var1;
                }
case 135:
                var1 = false;
                return var1;
case 126:
                var1 = false;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[2] = var1;
        var1 = {};
        var6 = 'getGuild';
        var1['key'] = var6;
        var6 = function value(arg1, arg2, arg3) {
            _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                var2 = arg1;
                var7 = arg2;
                var6 = arg3;
                var1 = this;
                var3 = var1.guilds;
                var4 = var2 in var3;
                var3 = !var4;
                if(!var4) { _fun0017_ip = 59; continue _fun0017 }
case 46:
                var4 = var1._areGuildActionRowsUpdated;
                var3 = var4.bind(var1)(var2, var7);
case 59:
                if(var3) { _fun0017_ip = 65; continue _fun0017 }
case 136:
                var4 = var1._areChannelNoticeRowsUpdated;
                var3 = var4.bind(var1)(var2, var6);
case 65:
                if(var3) { _fun0017_ip = 137; continue _fun0017 }
case 138:
                var4 = var1._areGuildVocalChannelsInRecentsInNeedOfAppearingInActiveNow;
                var3 = var4.bind(var1)(var2);
case 137:
                if(!var3) { _fun0017_ip = 139; continue _fun0017 }
case 5:
                var4 = var1.guilds;
                var3 = _closure1_slot48;
                var5 = var3.prototype;
                var5 = Object.create(var5, {constructor: {value: var3}});
                var11 = var5;
                var10 = var2;
                var9 = var7;
                var8 = var6;
                var3 = new var11[var3](var10, var9, var8, var7);
                var3 = var3 instanceof Object ? var3 : var5;
                var4[var2] = var3;
case 139:
                var1 = var1.guilds;
                var1 = var1[var2];
                return var1;
            }
        };
        var1['value'] = var6;
        var2[3] = var1;
        var1 = {};
        var6 = 'getGuildChannelRowsOnly';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                var2 = arg1;
                var1 = this;
                var3 = var1.guilds;
                var3 = var2 in var3;
                if(var3) { _fun0018_ip = 10; continue _fun0018 }
case 140:
                var4 = var1.guilds;
                var7 = _closure1_slot48;
                var3 = var7.prototype;
                var5 = Object.create(var3, {constructor: {value: var7}});
                var9 = new Array(0);
                var8 = new Array(0);
                var11 = var5;
                var10 = var2;
                var3 = new var11[var7](var10, var9, var8, var7);
                var3 = var3 instanceof Object ? var3 : var5;
                var4[var2] = var3;
case 10:
                var1 = var1.guilds;
                var1 = var1[var2];
                return var1;
            }
        };
        var1['value'] = var6;
        var2[4] = var1;
        var1 = {};
        var6 = 'clear';
        var1['key'] = var6;
        var6 = function value() {
            var2 = {};
            var1 = this;
            var1['guilds'] = var2;
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[5] = var1;
        var1 = {};
        var6 = 'clearGuildId';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                var3 = arg1;
                var2 = this;
                var1 = null;
                var1 = var1 != var3;
                if(!var1) { _fun0019_ip = 47; continue _fun0019 }
case 141:
                var4 = var2.guilds;
                var1 = var3 in var4;
case 47:
                if(!var1) { _fun0019_ip = 142; continue _fun0019 }
case 46:
                var2 = var2.guilds;
                var2 = delete var2[var3];
                var1 = true;
case 142:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[6] = var1;
        var1 = {};
        var6 = 'updateRecentsCategory';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                var4 = arg1;
                var3 = this;
                var2 = null;
                var1 = var2 != var4;
                if(!var1) { _fun0020_ip = 47; continue _fun0020 }
case 141:
                var5 = var3.guilds;
                var1 = var4 in var5;
case 47:
                if(!var1) { _fun0020_ip = 12; continue _fun0020 }
case 46:
                var3 = var3.guilds;
                var5 = var3[var4];
                var4 = var2 == var5;
                var3 = undefined;
                if(var4) { _fun0020_ip = 143; continue _fun0020 }
case 144:
                var4 = var5.updateRecentsCategory;
                var3 = var4.bind(var5)();
case 143:
                var2 = var2 != var3;
                if(!var2) { _fun0020_ip = 10; continue _fun0020 }
case 145:
                var2 = var3;
case 10:
                var1 = var2;
case 12:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[7] = var1;
        var1 = {};
        var6 = 'nonPositionalChannelIdUpdate';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                var10 = arg1;
                var7 = this;
                var2 = _closure1_slot25;
                var1 = var2.getBasicChannel;
                var6 = var1.bind(var2)(var10);
                var8 = null;
                var1 = var8 != var6;
                if(!var1) { _fun0021_ip = 88; continue _fun0021 }
case 45:
                var2 = var6.guild_id;
                var2 = var8 != var2;
                if(!var2) { _fun0021_ip = 146; continue _fun0021 }
case 136:
                var4 = var7.guilds;
                var3 = var6.guild_id;
                var3 = var4[var3];
                var3 = var8 != var3;
                if(!var3) { _fun0021_ip = 147; continue _fun0021 }
case 10:
                var4 = _closure1_slot20;
                var4 = var6 instanceof var4;
                if(var4) { _fun0021_ip = 148; continue _fun0021 }
case 5:
                var9 = _closure1_slot25;
                var5 = var9.getChannel;
                var5 = var5.bind(var9)(var10);
                var4 = var8 != var5;
                var6 = var5;
case 148:
                if(!var4) { _fun0021_ip = 149; continue _fun0021 }
case 84:
                var5 = var7.nonPositionalChannelUpdate;
                var4 = var5.bind(var7)(var6);
case 149:
                var3 = var4;
case 147:
                var2 = var3;
case 146:
                var1 = var2;
case 88:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[8] = var1;
        var1 = {};
        var6 = 'nonPositionalChannelUpdate';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                var4 = arg1;
                var6 = this;
                var2 = var4.guild_id;
                var1 = null;
                if(!(var1 != var2)) { _fun0022_ip = 150; continue _fun0022 }
case 151:
                var3 = var6.guilds;
                var2 = var4.guild_id;
                var3 = var3[var2];
                if(!(var1 != var3)) { _fun0022_ip = 66; continue _fun0022 }
case 152:
                var1 = var4.isThread;
                var1 = var1.bind(var4)();
                var2 = false;
                if(!var1) { _fun0022_ip = 153; continue _fun0022 }
case 7:
                var5 = var6.nonPositionalChannelIdUpdate;
                var1 = var4.parent_id;
                var2 = var5.bind(var6)(var1);
case 153:
                var1 = var3.nonPositionalChannelUpdate;
                var1 = var1.bind(var3)(var4);
                if(var1) { _fun0022_ip = 154; continue _fun0022 }
case 155:
                var1 = var2;
case 154:
                return var1;
case 66:
                var1 = false;
                return var1;
case 150:
                var1 = false;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[9] = var1;
        var1 = {};
        var6 = 'updateSubtitles';
        var1['key'] = var6;
        var5 = function value(arg1, arg2) {
            _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                var5 = arg1;
                var2 = this;
                var3 = arg2;
                var _closure3_slot0 = var3;
                var3 = null;
                if(!(var3 != var5)) { _fun0023_ip = 156; continue _fun0023 }
case 157:
                var3 = var2.guilds;
                var3 = var5 in var3;
                if(var3) { _fun0023_ip = 142; continue _fun0023 }
case 158:
                var3 = new Array(0);
                _fun0023_ip = 20; continue _fun0023;
case 142:
                var4 = var2.guilds;
                var5 = var4[var5];
                var4 = new Array(1);
                var4[0] = var5;
                var3 = var4;
case 20:
                _fun0023_ip = 66; continue _fun0023;
case 156:
                var4 = global;
                var5 = var4.Object;
                var4 = var5.values;
                var2 = var2.guilds;
                var3 = var4.bind(var5)(var2);
case 66:
                var2 = var3.forEach;
                var1 = function(arg1) {
                    var3 = arg1;
                    var2 = var3.updateSubtitles;
                    var1 = _closure3_slot0;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var5;
        var2[10] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var15 = var6.bind(var1)();
    var6 = function() {
        var4 = _closure1_slot8;
        var3 = function ChannelListImpl(arg1, arg2, arg3) {
            _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                var3 = this;
                var5 = _closure1_slot7;
                var4 = _closure2_slot0;
                var1 = undefined;
                var4 = var5.bind(var1)(var3, var4);
                var4 = arg1;
                var3['id'] = var4;
                var19 = null;
                var3['sortedNamedCategories'] = var19;
                var3['sections'] = var19;
                var3['rows'] = var19;
                var3['firstVoiceChannel'] = var1;
                var3['allChannelsById'] = var19;
                var5 = 0;
                var3['version'] = var5;
                var7 = _closure1_slot31;
                var6 = var7.isGuildCollapsed;
                var4 = var3.id;
                var4 = var6.bind(var7)(var4);
                var3['hideMutedChannels'] = var4;
                var6 = var7.getMutedChannels;
                var4 = var3.id;
                var4 = var6.bind(var7)(var4);
                var3['mutedChannelIds'] = var4;
                var6 = var7.getOptedInChannelsWithPendingUpdates;
                var4 = var3.id;
                var4 = var6.bind(var7)(var4);
                if(!(var19 == var4)) { _fun0024_ip = 159; continue _fun0024 }
case 160:
                var8 = _closure1_slot31;
                var7 = var8.getOptedInChannels;
                var6 = var3.id;
                var4 = var7.bind(var8)(var6);
case 159:
                var3['optedInChannels'] = var4;
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var4 = 35;
                var4 = var7[var4];
                var9 = var6.bind(var1)(var4);
                var8 = var9.isOptInEnabledForGuild;
                var4 = var3.id;
                var4 = var8.bind(var9)(var4);
                var3['optInEnabled'] = var4;
                var4 = 36;
                var4 = var7[var4];
                var7 = var6.bind(var1)(var4);
                var6 = var7.canSeeOnboardingHome;
                var4 = var3.id;
                var4 = var6.bind(var7)(var4);
                var3['hideResourceChannels'] = var4;
                var4 = global;
                var7 = var4.Set;
                var8 = _closure1_slot31;
                var6 = var8.getGuildFavorites;
                var4 = var3.id;
                var4 = var6.bind(var8)(var4);
                if(!(var19 == var4)) { _fun0024_ip = 161; continue _fun0024 }
case 162:
                var4 = new Array(0);
case 161:
                var6 = var7.prototype;
                var6 = Object.create(var6, {constructor: {value: var7}});
                var29 = var6;
                var28 = var4;
                var4 = new var29[var7](var28, var27);
                var4 = var4 instanceof Object ? var4 : var6;
                var3['favoriteChannelIds'] = var4;
                var7 = _closure1_slot15;
                var6 = var7.getSuggestedChannelId;
                var4 = var3.id;
                var4 = var6.bind(var7)(var4);
                var3['suggestedFavoriteChannelId'] = var4;
                var6 = _closure1_slot24;
                var4 = var6.getCollapsedCategories;
                var4 = var4.bind(var6)();
                var3['collapsedCategoryIds'] = var4;
                var7 = _closure1_slot25;
                var6 = var7.getMutableGuildChannelsForGuild;
                var4 = var3.id;
                var12 = var6.bind(var7)(var4);
                var7 = _closure1_slot27;
                var6 = var7.getGuild;
                var4 = var3.id;
                var18 = var6.bind(var7)(var4);
                var6 = var19 != var18;
                var4 = null;
                if(!var6) { _fun0024_ip = 163; continue _fun0024 }
case 164:
                var7 = _closure1_slot1;
                var8 = _closure1_slot2;
                var6 = 37;
                var6 = var8[var6];
                var6 = var7.bind(var1)(var6);
                var4 = var6.bind(var1)(var18);
case 163:
                var3['moderatorReportChannelId'] = var4;
                var4 = var19 != var18;
                if(!var4) { _fun0024_ip = 165; continue _fun0024 }
case 166:
                var7 = _closure1_slot1;
                var8 = _closure1_slot2;
                var6 = 38;
                var6 = var8[var6];
                var6 = var7.bind(var1)(var6);
                var4 = var6.bind(var1)(var18);
case 165:
                var3['moderatorReportChannelEnabled'] = var4;
                var10 = {};
                var13 = new Array(0);
                var17 = {};
                var8 = var12;
                for(var4 in var8)
case 167:
                {
case 168:
                    var11 = var4;
                    var11 = var12[var11];
                    var15 = var11.type;
                    var14 = _closure1_slot36;
                    var14 = var14.GUILD_CATEGORY;
                    if(var15 !== var14) { _fun0024_ip = 167; continue _fun0024 }
case 169:
                    var14 = var11.id;
                    var10[var14] = var11;
                    var14 = var11.id;
                    var11 = new Array(0);
                    var17[var14] = var11;
                    _fun0024_ip = 167; continue _fun0024;
                }
case 170:
                var11 = new Array(0);
                var9 = new Array(0);
                var4 = new Array(0);
                var8 = var3.initializationData;
                var15 = var12;
                for(var6 in var15)
case 171:
                {
case 172:
                    var20 = var6;
                    var22 = var12[var20];
                    var21 = var22.type;
                    var20 = _closure1_slot36;
                    var20 = var20.GUILD_CATEGORY;
                    if(var21 === var20) { _fun0024_ip = 171; continue _fun0024 }
case 173:
                    var21 = var22.type;
                    var20 = _closure1_slot36;
                    var20 = var20.GUILD_DIRECTORY;
                    if(!(var21 === var20)) { _fun0024_ip = 174; continue _fun0024 }
case 175:
                    var20 = var19 == var18;
                    if(var20) { _fun0024_ip = 176; continue _fun0024 }
case 177:
                    var24 = var18.features;
                    var23 = var24.has;
                    var21 = _closure1_slot37;
                    var21 = var21.HUB;
                    var20 = var23.bind(var24)(var21);
case 176:
                    if(var20) { _fun0024_ip = 171; continue _fun0024 }
case 178:
                    var20 = var4.push;
                    var20 = var20.bind(var4)(var22);
                    _fun0024_ip = 171; continue _fun0024;
case 174:
                    var20 = _closure1_slot72;
                    var20 = var20.bind(var1)(var3, var22, var8);
                    if(var20) { _fun0024_ip = 179; continue _fun0024 }
case 180:
                    var21 = var22.type;
                    var20 = _closure1_slot36;
                    var20 = var20.GUILD_VOICE;
                    var20 = var21 !== var20;
                    if(!var20) { _fun0024_ip = 181; continue _fun0024 }
case 182:
                    var23 = var22.type;
                    var21 = _closure1_slot36;
                    var21 = var21.GUILD_STAGE_VOICE;
                    var20 = var23 !== var21;
case 181:
                    if(var20) { _fun0024_ip = 183; continue _fun0024 }
case 184:
                    var20 = var22.parent_id;
                    var20 = var19 != var20;
                    if(!var20) { _fun0024_ip = 185; continue _fun0024 }
case 186:
                    var21 = var22.parent_id;
                    var21 = var10[var21];
                    var20 = var19 != var21;
case 185:
                    if(!var20) { _fun0024_ip = 187; continue _fun0024 }
case 188:
                    var21 = var9.push;
                    var20 = var22.parent_id;
                    var20 = var10[var20];
                    var20 = var21.bind(var9)(var20);
case 187:
                    var20 = var9.push;
                    var20 = var20.bind(var9)(var22);
                    _fun0024_ip = 183; continue _fun0024;
case 179:
                    var20 = var11.push;
                    var20 = var20.bind(var11)(var22);
case 183:
                    var20 = var22.parent_id;
                    if(!(var19 != var20)) { _fun0024_ip = 189; continue _fun0024 }
case 190:
                    var20 = var22.parent_id;
                    var20 = var20 in var17;
                    if(var20) { _fun0024_ip = 191; continue _fun0024 }
case 189:
                    var20 = var13.push;
                    var20 = var20.bind(var13)(var22);
                    _fun0024_ip = 171; continue _fun0024;
case 191:
                    var20 = var22.parent_id;
                    var21 = var17[var20];
                    var20 = var21.push;
                    var20 = var20.bind(var21)(var22);
                    _fun0024_ip = 171; continue _fun0024;
                }
case 192:
                var6 = {};
                var3['categories'] = var6;
                var15 = var17;
                for(var6 in var15)
case 193:
                {
case 194:
                    var20 = var6;
                    var19 = var3.categories;
                    var23 = _closure1_slot50;
                    var27 = var10[var20];
                    var26 = var17[var20];
                    var21 = var23.prototype;
                    var21 = Object.create(var21, {constructor: {value: var23}});
                    var29 = var21;
                    var28 = var3;
                    var25 = var8;
                    var18 = new var29[var23](var28, var27, var26, var25, var24);
                    var18 = var18 instanceof Object ? var18 : var21;
                    var19[var20] = var18;
                    _fun0024_ip = 193; continue _fun0024;
                }
case 195:
                var6 = _closure1_slot44;
                var3['recentsSectionNumber'] = var6;
                var6 = _closure1_slot43;
                var3['favoritesSectionNumber'] = var6;
                var6 = _closure1_slot49;
                var7 = var6.prototype;
                var7 = Object.create(var7, {constructor: {value: var6}});
                var29 = var7;
                var28 = var3;
                var27 = var13;
                var26 = var8;
                var6 = new var29[var6](var28, var27, var26, var25);
                var6 = var6 instanceof Object ? var6 : var7;
                var3['noParentCategory'] = var6;
                var6 = _closure1_slot51;
                var7 = var6.prototype;
                var7 = Object.create(var7, {constructor: {value: var6}});
                var29 = var7;
                var28 = var3;
                var27 = var8;
                var6 = new var29[var6](var28, var27, var26);
                var6 = var6 instanceof Object ? var6 : var7;
                var3['favoritesCategory'] = var6;
                var7 = _closure1_slot0;
                var13 = _closure1_slot2;
                var6 = 39;
                var6 = var13[var6];
                var7 = var7.bind(var1)(var6);
                var6 = var7.isRecentlyActiveChannelsEnabled;
                var6 = var6.bind(var7)();
                if(var6) { _fun0024_ip = 196; continue _fun0024 }
case 197:
                var6 = _closure1_slot53;
                var7 = var6.prototype;
                var7 = Object.create(var7, {constructor: {value: var6}});
                var29 = var7;
                var28 = var3;
                var27 = var11;
                var26 = var8;
                var6 = new var29[var6](var28, var27, var26, var25);
                var6 = var6 instanceof Object ? var6 : var7;
                _fun0024_ip = 198; continue _fun0024;
case 196:
                var7 = _closure1_slot52;
                var11 = var7.prototype;
                var11 = Object.create(var11, {constructor: {value: var7}});
                var29 = var11;
                var28 = var3;
                var27 = var12;
                var26 = var8;
                var7 = new var29[var7](var28, var27, var26, var25);
                var6 = var7 instanceof Object ? var7 : var11;
case 198:
                var3['recentsCategory'] = var6;
                var6 = _closure1_slot54;
                var7 = var6.prototype;
                var7 = Object.create(var7, {constructor: {value: var6}});
                var29 = var7;
                var28 = var3;
                var27 = var9;
                var26 = var10;
                var25 = var8;
                var6 = new var29[var6](var28, var27, var26, var25, var24);
                var6 = var6 instanceof Object ? var6 : var7;
                var3['voiceChannelsCategory'] = var6;
                var7 = _closure1_slot56;
                var4 = var4.length;
                var27 = var4 > var5;
                var4 = var7.prototype;
                var5 = Object.create(var4, {constructor: {value: var7}});
                var28 = arg2;
                var29 = var5;
                var4 = new var29[var7](var28, var27, var26);
                var4 = var4 instanceof Object ? var4 : var5;
                var3['guildActionSection'] = var4;
                var6 = _closure1_slot55;
                var4 = var6.prototype;
                var5 = Object.create(var4, {constructor: {value: var6}});
                var28 = arg3;
                var29 = var5;
                var4 = new var29[var6](var28, var27);
                var4 = var4 instanceof Object ? var4 : var5;
                var3['channelNoticeSection'] = var4;
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var4 = 40;
                var4 = var6[var4];
                var8 = var5.bind(var1)(var4);
                var7 = var3.categories;
                var4 = 'null';
                var4 = var4 in var7;
                var7 = !var4;
                var4 = 'somehow a null got into categories';
                var4 = var8.bind(var1)(var7, var4);
                var4 = _closure1_slot46;
                var2 = 33;
                var2 = var6[var2];
                var6 = var5.bind(var1)(var2);
                var5 = var6.size;
                var2 = var3.categories;
                var2 = var5.bind(var6)(var2);
                var2 = var4 + var2;
                var3['voiceChannelsSectionNumber'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'initializationData';
        var1['key'] = var2;
        var2 = function get() {
            var2 = this;
            var1 = {};
            var7 = _closure1_slot25;
            var6 = var7.getChannel;
            var5 = _closure1_slot30;
            var4 = var5.getChannelId;
            var4 = var4.bind(var5)();
            var4 = var6.bind(var7)(var4);
            var1['selectedChannel'] = var4;
            var4 = var5.getVoiceChannelId;
            var4 = var4.bind(var5)();
            var1['selectedVoiceChannelId'] = var4;
            var4 = _closure1_slot18;
            var5 = var4.getActiveJoinedRelevantThreadsForGuild;
            var3 = var2.id;
            var3 = var5.bind(var4)(var3);
            var1['activeJoinedRelevantThreads'] = var3;
            var3 = var4.getActiveJoinedUnreadThreadsForGuild;
            var2 = var2.id;
            var2 = var3.bind(var4)(var2);
            var1['activeJoinedUnreadThreads'] = var2;
            return var1;
        };
        var1['get'] = var2;
        var2 = new Array(24);
        var2[0] = var1;
        var1 = {};
        var6 = 'invalidate';
        var1['key'] = var6;
        var6 = function value() {
            var3 = this;
            var1 = null;
            var3['sections'] = var1;
            var3['rows'] = var1;
            var3['sortedNamedCategories'] = var1;
            var1 = undefined;
            var3['firstVoiceChannel'] = var1;
            var2 = var3.version;
            var2 = var2 + 1;
            var3['version'] = var2;
            return var1;
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'getSortedNamedCategories';
        var1['key'] = var6;
        var6 = function value() {
            _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
                var1 = this;
                var3 = var1.sortedNamedCategories;
                var2 = null;
                if(!(var2 == var3)) { _fun0025_ip = 47; continue _fun0025 }
case 141:
                var2 = var1.getRows;
                var2 = var2.bind(var1)();
case 47:
                var1 = var1.sortedNamedCategories;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[2] = var1;
        var1 = {};
        var6 = 'getSortedCategories';
        var1['key'] = var6;
        var6 = function value() {
            var2 = this;
            var3 = var2.favoritesCategory;
            var1 = new Array(4);
            var1[0] = var3;
            var3 = var2.recentsCategory;
            var1[1] = var3;
            var3 = var2.noParentCategory;
            var1[2] = var3;
            var3 = var2.getSortedNamedCategories;
            var6 = var3.bind(var2)();
            var5 = 3;
            var7 = var1;
            var3 = arraySpread(var7, var6, var5);
            var2 = var2.voiceChannelsCategory;
            var1[var3] = var2;
            var2 = 1;
            var2 = var3 + var2;
            return var1;
        };
        var1['value'] = var6;
        var2[3] = var1;
        var1 = {};
        var6 = 'getSections';
        var1['key'] = var6;
        var6 = function value() {
            _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
                var1 = arguments[0];
                var2 = this;
                var3 = undefined;
                if(!(var1 === var3)) { _fun0026_ip = 44; continue _fun0026 }
case 199:
                var1 = false;
case 44:
                var4 = var2.sections;
                var3 = null;
                if(!(var3 == var4)) { _fun0026_ip = 65; continue _fun0026 }
case 200:
                var3 = var2.getRows;
                var5 = var3.bind(var2)();
                var4 = var5.map;
                var3 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.length;
                    return var1;
                };
                var3 = var4.bind(var5)(var3);
                var2['sections'] = var3;
case 65:
                var4 = var2.sections;
                if(var1) { _fun0026_ip = 127; continue _fun0026 }
case 153:
                var1 = var4;
                _fun0026_ip = 6; continue _fun0026;
case 127:
                var2 = new Array(0);
                var6 = 0;
                var8 = var2;
                var7 = var4;
                var3 = arraySpread(var8, var7, var6);
                var1 = var2;
case 6:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[4] = var1;
        var1 = {};
        var6 = 'getRows';
        var1['key'] = var6;
        var6 = function value() {
            _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
                var1 = this;
                var4 = var1.rows;
                var3 = null;
                if(!(var3 == var4)) { _fun0027_ip = 201; continue _fun0027 }
case 42:
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var3 = 33;
                var3 = var5[var3];
                var6 = undefined;
                var8 = var4.bind(var6)(var3);
                var5 = var8.sortBy;
                var3 = global;
                var9 = var3.Object;
                var4 = var9.values;
                var3 = var1.categories;
                var4 = var4.bind(var9)(var3);
                var3 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.record;
                    var1 = var1.position;
                    return var1;
                };
                var3 = var5.bind(var8)(var4, var3);
                var1['sortedNamedCategories'] = var3;
                var3 = var1.channelNoticeSection;
                var5 = new Array(6);
                var5[0] = var3;
                var3 = var1.guildActionSection;
                var5[1] = var3;
                var3 = var1.favoritesCategory;
                var5[2] = var3;
                var3 = var1.recentsCategory;
                var5[3] = var3;
                var3 = var1.noParentCategory;
                var5[4] = var3;
                var15 = var1.sortedNamedCategories;
                var14 = 5;
                var16 = var5;
                var4 = arraySpread(var16, var15, var14);
                var3 = var1.voiceChannelsCategory;
                var5[var4] = var3;
                var3 = 1;
                var4 = var4 + var3;
                var4 = var5.map;
                var2 = function(arg1) {
                    var2 = arg1;
                    var1 = var2.getRows;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var2 = var4.bind(var5)(var2);
                var1['rows'] = var2;
                var2 = var1.noParentCategory;
                var5 = new Array(1);
                var5[0] = var2;
                var15 = var1.sortedNamedCategories;
                var16 = var5;
                var14 = var3;
                var2 = arraySpread(var16, var15, var14);
                var2 = var5.length;
                var3 = 0;
                var2 = var3 < var2;
                var4 = 0;
                if(!var2) { _fun0027_ip = 201; continue _fun0027 }
case 36:
                var11 = var5[var3];
                var12 = var4 + 1;
                var11['position'] = var12;
                var8 = _closure1_slot66;
                var2 = var11.getShownChannelIds;
                var2 = var2.bind(var11)();
                var10 = var8.bind(var6)(var2);
                var8 = var10.bind(var6)();
                var2 = var8.done;
                var9 = var12;
                var4 = var9;
                if(var2) { _fun0027_ip = 202; continue _fun0027 }
case 135:
                var12 = var8.value;
                var2 = var11.channels;
                var2 = var2[var12];
                var12 = var9 + 1;
                var2['position'] = var12;
                var13 = var10.bind(var6)();
                var2 = var13.done;
                var9 = var12;
                var8 = var13;
                var4 = var9;
                if(!var2) { _fun0027_ip = 135; continue _fun0027 }
case 202:
                var3 = var3 + 1;
                var2 = var5.length;
                if(var3 < var2) { _fun0027_ip = 36; continue _fun0027 }
case 201:
                var1 = var1.rows;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[5] = var1;
        var1 = {};
        var6 = 'getCategoryFromSection';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
case 0:
                var4 = arg1;
                var1 = this;
                var3 = _closure1_slot41;
                if(!(var3 !== var4)) { _fun0028_ip = 203; continue _fun0028 }
case 42:
                var3 = _closure1_slot42;
                if(!(var3 !== var4)) { _fun0028_ip = 204; continue _fun0028 }
case 46:
                var3 = _closure1_slot43;
                if(!(var3 !== var4)) { _fun0028_ip = 68; continue _fun0028 }
case 152:
                var3 = _closure1_slot45;
                if(!(var3 !== var4)) { _fun0028_ip = 205; continue _fun0028 }
case 2:
                var3 = var1.recentsSectionNumber;
                if(!(var3 !== var4)) { _fun0028_ip = 24; continue _fun0028 }
case 206:
                var3 = var1.voiceChannelsSectionNumber;
                if(!(var3 !== var4)) { _fun0028_ip = 207; continue _fun0028 }
case 145:
                var3 = var1.getSortedNamedCategories;
                var3 = var3.bind(var1)();
                var2 = _closure1_slot46;
                var2 = var4 - var2;
                var2 = var3[var2];
                return var2;
case 207:
                var2 = var1.voiceChannelsCategory;
                return var2;
case 24:
                var2 = var1.recentsCategory;
                return var2;
case 205:
                var2 = var1.noParentCategory;
                return var2;
case 68:
                var1 = var1.favoritesCategory;
                return var1;
case 204:
                var1 = global;
                var3 = var1.Error;
                var2 = undefined;
                var1 = 'Invalid section. Use getGuildActionSection instead';
                var1 = var3.bind(var2)(var1);
                throw var1;
case 203:
                var1 = global;
                var3 = var1.Error;
                var2 = undefined;
                var1 = 'Invalid section. Use getChannelNoticeSection instead';
                var1 = var3.bind(var2)(var1);
                throw var1;
            }
        };
        var1['value'] = var6;
        var2[6] = var1;
        var1 = {};
        var6 = 'getNamedCategoryFromSection';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
case 0:
                var3 = this;
                var4 = _closure1_slot46;
                var2 = arg1;
                var2 = var2 - var4;
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 40;
                var1 = var5[var1];
                var6 = undefined;
                var5 = var4.bind(var6)(var1);
                var1 = 0;
                var4 = var2 >= var1;
                if(!var4) { _fun0029_ip = 10; continue _fun0029 }
case 75:
                var1 = var3.getSortedNamedCategories;
                var1 = var1.bind(var3)();
                var1 = var1.length;
                var4 = var2 < var1;
case 10:
                var1 = global;
                var1 = var1.HermesInternal;
                var7 = var1.concat;
                var1 = 'invalid section index ';
                var1 = var7.bind(var1)(var2);
                var1 = var5.bind(var6)(var4, var1);
                var1 = var3.getSortedNamedCategories;
                var1 = var1.bind(var3)();
                var1 = var1[var2];
                return var1;
            }
        };
        var1['value'] = var6;
        var2[7] = var1;
        var1 = {};
        var6 = 'getGuildActionSection';
        var1['key'] = var6;
        var6 = function value() {
            var1 = this;
            var1 = var1.guildActionSection;
            return var1;
        };
        var1['value'] = var6;
        var2[8] = var1;
        var1 = {};
        var6 = 'getChannelNoticeSection';
        var1['key'] = var6;
        var6 = function value() {
            var1 = this;
            var1 = var1.channelNoticeSection;
            return var1;
        };
        var1['value'] = var6;
        var2[9] = var1;
        var1 = {};
        var6 = 'getChannelFromSectionRow';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
case 0:
                var3 = this;
                var2 = var3.getCategoryFromSection;
                var1 = arg1;
                var5 = var2.bind(var3)(var1);
                var1 = null;
                if(!(var1 != var5)) { _fun0030_ip = 137; continue _fun0030 }
case 43:
                var3 = var5.channels;
                var2 = var5.getShownChannelIds;
                var4 = var2.bind(var5)();
                var2 = arg2;
                var2 = var4[var2];
                var4 = var3[var2];
                var3 = var1 == var4;
                var2 = null;
                if(var3) { _fun0030_ip = 127; continue _fun0030 }
case 65:
                var3 = {};
                var3['category'] = var5;
                var3['channel'] = var4;
                var2 = var3;
case 127:
                return var2;
case 137:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[10] = var1;
        var1 = {};
        var6 = 'isPlaceholderRow';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
case 0:
                var3 = arg1;
                var4 = this;
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var2 = 40;
                var2 = var6[var2];
                var6 = undefined;
                var5 = var5.bind(var6)(var2);
                var1 = _closure1_slot42;
                var2 = var3 > var1;
                var1 = 'Invalid section';
                var1 = var5.bind(var6)(var2, var1);
                var1 = var4.recentsSectionNumber;
                var1 = var3 !== var1;
                if(!var1) { _fun0031_ip = 208; continue _fun0031 }
case 145:
                var2 = var4.getRows;
                var2 = var2.bind(var4)();
                var3 = var2[var3];
                var2 = arg2;
                var3 = var3[var2];
                var2 = 'placeholder-channel-id';
                var1 = var3 === var2;
case 208:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[11] = var1;
        var1 = {};
        var6 = 'getFirstVoiceChannel';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0032: for(var _fun0032_ip = 0; ; ) switch(_fun0032_ip) {
case 0:
                var4 = arg1;
                var1 = this;
                var2 = var1.firstVoiceChannel;
                var8 = undefined;
                if(!(var8 === var2)) { _fun0032_ip = 209; continue _fun0032 }
case 157:
                var3 = var1.favoritesCategory;
                var2 = var3.getFirstVoiceChannel;
                var2 = var2.bind(var3)(var4);
                var1['firstVoiceChannel'] = var2;
                var2 = var1.firstVoiceChannel;
                var7 = null;
                if(!(var7 == var2)) { _fun0032_ip = 72; continue _fun0032 }
case 65:
                var3 = var1.noParentCategory;
                var2 = var3.getFirstVoiceChannel;
                var2 = var2.bind(var3)(var4);
                var1['firstVoiceChannel'] = var2;
                var2 = var1.firstVoiceChannel;
                if(!(var7 == var2)) { _fun0032_ip = 52; continue _fun0032 }
case 6:
                var3 = _closure1_slot66;
                var2 = var1.getSortedNamedCategories;
                var2 = var2.bind(var1)();
                var6 = var3.bind(var8)(var2);
                var3 = var6.bind(var8)();
                var2 = var3.done;
                var5 = var3;
                if(var2) { _fun0032_ip = 209; continue _fun0032 }
case 128:
                var3 = var5.value;
                var2 = var3.getFirstVoiceChannel;
                var2 = var2.bind(var3)(var4);
                if(!(var7 == var2)) { _fun0032_ip = 210; continue _fun0032 }
case 211:
                var9 = var6.bind(var8)();
                var2 = var9.done;
                var5 = var9;
                if(var2) { _fun0032_ip = 209; continue _fun0032 }
case 159:
                _fun0032_ip = 128; continue _fun0032;
case 210:
                var2 = var3.getFirstVoiceChannel;
                var2 = var2.bind(var3)(var4);
                var1['firstVoiceChannel'] = var2;
case 209:
                var2 = var1.firstVoiceChannel;
                return var2;
case 52:
                var2 = var1.firstVoiceChannel;
                return var2;
case 72:
                var1 = var1.firstVoiceChannel;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[12] = var1;
        var1 = {};
        var6 = 'getSectionRowsFromChannel';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0033: for(var _fun0033_ip = 0; ; ) switch(_fun0033_ip) {
case 0:
                var13 = arg1;
                var3 = this;
                var6 = null;
                var1 = var6 == var13;
                var4 = null;
                if(var1) { _fun0033_ip = 212; continue _fun0033 }
case 140:
                var7 = _closure1_slot62;
                var2 = var7.has;
                var2 = var2.bind(var7)(var13);
                var4 = var13;
                if(var2) { _fun0033_ip = 212; continue _fun0033 }
case 59:
                var7 = _closure1_slot25;
                var2 = var7.getChannel;
                var7 = var2.bind(var7)(var13);
                var2 = var6 != var7;
                var4 = null;
                if(!var2) { _fun0033_ip = 212; continue _fun0033 }
case 213:
                var2 = var7.isDirectory;
                var2 = var2.bind(var7)();
                var4 = null;
                if(!var2) { _fun0033_ip = 212; continue _fun0033 }
case 214:
                var1 = _closure1_slot35;
                var4 = var1.GUILD_DIRECTORY;
case 212:
                if(!(var6 == var4)) { _fun0033_ip = 215; continue _fun0033 }
case 4:
                var1 = new Array(0);
                var8 = _closure1_slot25;
                var7 = var8.getChannel;
                var8 = var7.bind(var8)(var13);
                var _closure3_slot0 = var8;
                if(!(var6 != var8)) { _fun0033_ip = 216; continue _fun0033 }
case 128:
                if(!(var6 != var13)) { _fun0033_ip = 216; continue _fun0033 }
case 217:
                var7 = var8.isThread;
                var9 = var7.bind(var8)();
                var7 = var8;
                if(!var9) { _fun0033_ip = 29; continue _fun0033 }
case 54:
                var11 = _closure1_slot25;
                var10 = var11.getChannel;
                var8 = var8.parent_id;
                var8 = var10.bind(var11)(var8);
                _closure3_slot0 = var8;
                var7 = var8;
case 29:
                if(!(var6 != var7)) { _fun0033_ip = 218; continue _fun0033 }
case 219:
                var8 = var3.favoritesCategory;
                var6 = var8.getShownChannelIds;
                var10 = var6.bind(var8)();
                var8 = var10.indexOf;
                var6 = var7.id;
                var11 = var8.bind(var10)(var6);
                var6 = 0;
                if(!(var11 >= var6)) { _fun0033_ip = 31; continue _fun0033 }
case 56:
                var10 = var1.push;
                var8 = {};
                var12 = _closure1_slot43;
                var8['section'] = var12;
                var8['row'] = var11;
                var8 = var10.bind(var1)(var8);
case 31:
                var10 = var3.recentsCategory;
                var8 = var10.getShownChannelIds;
                var11 = var8.bind(var10)();
                var10 = var11.indexOf;
                var8 = var7.id;
                var11 = var10.bind(var11)(var8);
                if(!(var11 >= var6)) { _fun0033_ip = 220; continue _fun0033 }
case 221:
                var10 = var1.push;
                var8 = {};
                var12 = var3.recentsSectionNumber;
                var8['section'] = var12;
                var8['row'] = var11;
                var8 = var10.bind(var1)(var8);
case 220:
                var10 = var7.type;
                var8 = _closure1_slot36;
                var8 = var8.GUILD_CATEGORY;
                if(!(var10 !== var8)) { _fun0033_ip = 222; continue _fun0033 }
case 223:
                var8 = var3.getCategory;
                var8 = var8.bind(var3)(var7);
                var10 = _closure1_slot49;
                var10 = var8 instanceof var10;
                if(var10) { _fun0033_ip = 224; continue _fun0033 }
case 109:
                var10 = var3.getSortedNamedCategories;
                var11 = var10.bind(var3)();
                var10 = var11.indexOf;
                var11 = var10.bind(var11)(var8);
                var10 = _closure1_slot46;
                var12 = var11 + var10;
                _fun0033_ip = 225; continue _fun0033;
case 224:
                var12 = _closure1_slot45;
case 225:
                var10 = var8.getShownChannelIds;
                var14 = var10.bind(var8)();
                var11 = var14.indexOf;
                var10 = var7.id;
                var11 = var11.bind(var14)(var10);
                if(!(var12 >= var6)) { _fun0033_ip = 226; continue _fun0033 }
case 227:
                if(!(var11 >= var6)) { _fun0033_ip = 226; continue _fun0033 }
case 228:
                var10 = 0;
                if(!var9) { _fun0033_ip = 229; continue _fun0033 }
case 230:
                var9 = var8.channels;
                var8 = var7.id;
                var8 = var9[var8];
                var9 = var8.threadIds;
                var8 = var9.indexOf;
                var10 = var8.bind(var9)(var13);
case 229:
                var9 = var1.push;
                var8 = {};
                var8['section'] = var12;
                var8['row'] = var11;
                var8['threadOffset'] = var10;
                var8 = var9.bind(var1)(var8);
case 226:
                var9 = var3.voiceChannelsCategory;
                var8 = var9.getShownChannelIds;
                var9 = var8.bind(var9)();
                var8 = var9.indexOf;
                var7 = var7.id;
                var8 = var8.bind(var9)(var7);
                if(!(var8 >= var6)) { _fun0033_ip = 231; continue _fun0033 }
case 232:
                var7 = var1.push;
                var6 = {};
                var9 = var3.voiceChannelsSectionNumber;
                var6['section'] = var9;
                var6['row'] = var8;
                var6 = var7.bind(var1)(var6);
case 231:
                return var1;
case 222:
                var8 = _closure1_slot1;
                var7 = _closure1_slot2;
                var6 = 33;
                var7 = var7[var6];
                var6 = undefined;
                var8 = var8.bind(var6)(var7);
                var7 = var8.findIndex;
                var6 = var3.getSortedNamedCategories;
                var6 = var6.bind(var3)();
                var5 = function(arg1) {
                    _fun0034: for(var _fun0034_ip = 0; ; ) switch(_fun0034_ip) {
case 0:
                        var1 = arg1;
                        var2 = var1.id;
                        var3 = _closure3_slot0;
                        var1 = null;
                        var4 = var1 == var3;
                        var1 = undefined;
                        if(var4) { _fun0034_ip = 233; continue _fun0034 }
case 200:
                        var1 = var3.id;
case 233:
                        var1 = var2 === var1;
                        return var1;
                    }
                };
                var6 = var7.bind(var8)(var6, var5);
                var5 = {};
                var2 = _closure1_slot46;
                var2 = var6 + var2;
                var5['section'] = var2;
                var2 = new Array(1);
                var2[0] = var5;
                return var2;
case 218:
                return var1;
case 216:
                return var1;
case 215:
                var2 = {};
                var1 = var3.getGuildActionSection;
                var3 = var1.bind(var3)();
                var1 = var3.getRows;
                var3 = var1.bind(var3)();
                var1 = var3.indexOf;
                var1 = var1.bind(var3)(var4);
                var2['row'] = var1;
                var1 = _closure1_slot42;
                var2['section'] = var1;
                var1 = new Array(1);
                var1[0] = var2;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[13] = var1;
        var1 = {};
        var6 = 'getCategory';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0035: for(var _fun0035_ip = 0; ; ) switch(_fun0035_ip) {
case 0:
                var2 = arg1;
                var3 = this;
                var4 = var2.parent_id;
                var1 = null;
                if(!(var1 != var4)) { _fun0035_ip = 60; continue _fun0035 }
case 234:
                var4 = var2.parent_id;
                var1 = var3.categories;
                var1 = var4 in var1;
                if(var1) { _fun0035_ip = 136; continue _fun0035 }
case 60:
                var1 = var3.noParentCategory;
                _fun0035_ip = 20; continue _fun0035;
case 136:
                var3 = var3.categories;
                var2 = var2.parent_id;
                var1 = var3[var2];
case 20:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[14] = var1;
        var1 = {};
        var6 = 'updateRecentsCategory';
        var1['key'] = var6;
        var6 = function value() {
            _fun0036: for(var _fun0036_ip = 0; ; ) switch(_fun0036_ip) {
case 0:
                var3 = this;
                var4 = var3.recentsCategory;
                var2 = var4.updateAllChannels;
                var1 = var3.initializationData;
                var1 = var2.bind(var4)(var1);
                if(!var1) { _fun0036_ip = 79; continue _fun0036 }
case 233:
                var2 = var3.invalidate;
                var2 = var2.bind(var3)();
case 79:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[15] = var1;
        var1 = {};
        var6 = 'nonPositionalChannelUpdate';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0037: for(var _fun0037_ip = 0; ; ) switch(_fun0037_ip) {
case 0:
                var6 = arg1;
                var3 = this;
                var5 = var3.initializationData;
                var1 = var3.getCategory;
                var2 = var1.bind(var3)(var6);
                var1 = var2.updateChannel;
                var1 = var1.bind(var2)(var6, var5);
                var4 = var3.favoritesCategory;
                var2 = var4.updateChannel;
                var2 = var2.bind(var4)(var6, var5);
                if(!var2) { _fun0037_ip = 235; continue _fun0037 }
case 41:
                var1 = true;
case 235:
                var4 = var3.recentsCategory;
                var2 = var4.updateChannel;
                var2 = var2.bind(var4)(var6, var5);
                if(!var2) { _fun0037_ip = 236; continue _fun0037 }
case 237:
                var1 = true;
case 236:
                var4 = var3.voiceChannelsCategory;
                var2 = var4.updateChannel;
                var2 = var2.bind(var4)(var6, var5);
                if(!var2) { _fun0037_ip = 205; continue _fun0037 }
case 84:
                var1 = true;
case 205:
                if(!var1) { _fun0037_ip = 238; continue _fun0037 }
case 239:
                var2 = var3.invalidate;
                var2 = var2.bind(var3)();
case 238:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[16] = var1;
        var1 = {};
        var6 = 'getSlicedChannels';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0038: for(var _fun0038_ip = 0; ; ) switch(_fun0038_ip) {
case 0:
                var3 = arg1;
                var18 = arg2;
                var17 = this;
                var2 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 40;
                var1 = var4[var1];
                var15 = undefined;
                var5 = var2.bind(var15)(var1);
                var2 = var3.length;
                var1 = 0;
                var4 = var2 > var1;
                var2 = 'must have at least one channel in the slice';
                var2 = var5.bind(var15)(var4, var2);
                var14 = var3[var1];
                var2 = var3.length;
                var1 = 1;
                var1 = var2 - var1;
                var13 = var3[var1];
                var4 = new Array(0);
                var2 = new Array(0);
                var5 = _closure1_slot66;
                var1 = var17.getSortedCategories;
                var1 = var1.bind(var17)();
                var12 = var5.bind(var15)(var1);
                var5 = var12.bind(var15)();
                var1 = var5.done;
                var9 = null;
                var8 = var5;
                var7 = true;
                var6 = false;
                var5 = undefined;
                if(var1) { _fun0038_ip = 240; continue _fun0038 }
case 241:
                var24 = var8.value;
                var1 = var9 == var18;
                var23 = undefined;
                if(var1) { _fun0038_ip = 85; continue _fun0038 }
case 160:
                var23 = var18.ignoreRecents;
case 85:
                if(!var23) { _fun0038_ip = 27; continue _fun0038 }
case 242:
                var1 = var17.recentsCategory;
                var23 = var24 === var1;
case 27:
                var19 = _closure1_slot66;
                var1 = var24.getShownChannelIds;
                var1 = var1.bind(var24)();
                var22 = var19.bind(var15)(var1);
                var19 = var22.bind(var15)();
                var1 = var19.done;
                var21 = var7;
                var20 = var6;
                var7 = var21;
                var6 = var20;
                if(var1) { _fun0038_ip = 243; continue _fun0038 }
case 244:
                var25 = var19.value;
                var1 = var24.channels;
                var25 = var1[var25];
                var27 = var21;
                if(!var27) { _fun0038_ip = 245; continue _fun0038 }
case 80:
                var28 = var25.id;
                var26 = var14.id;
                var1 = false;
                if(!(var28 !== var26)) { _fun0038_ip = 37; continue _fun0038 }
case 246:
                var1 = var21;
                if(var23) { _fun0038_ip = 37; continue _fun0038 }
case 247:
                var26 = var4.push;
                var26 = var26.bind(var4)(var25);
                var1 = var21;
case 37:
                var27 = var1;
case 245:
                var1 = var20;
                if(!var20) { _fun0038_ip = 248; continue _fun0038 }
case 249:
                var1 = !var23;
case 248:
                if(!var1) { _fun0038_ip = 250; continue _fun0038 }
case 251:
                var1 = var2.push;
                var1 = var1.bind(var2)(var25);
case 250:
                var1 = var27;
                if(var27) { _fun0038_ip = 252; continue _fun0038 }
case 253:
                var1 = var20;
case 252:
                var26 = var20;
                if(var1) { _fun0038_ip = 254; continue _fun0038 }
case 255:
                var28 = var25.id;
                var1 = var13.id;
                if(!(var28 === var1)) { _fun0038_ip = 106; continue _fun0038 }
case 256:
                var20 = true;
case 106:
                var26 = var20;
case 254:
                var28 = var22.bind(var15)();
                var1 = var28.done;
                var20 = var26;
                var21 = var27;
                var19 = var28;
                var7 = var21;
                var6 = var20;
                var5 = var25;
                if(!var1) { _fun0038_ip = 244; continue _fun0038 }
case 243:
                var19 = var12.bind(var15)();
                var1 = var19.done;
                var8 = var19;
                if(!var1) { _fun0038_ip = 241; continue _fun0038 }
case 240:
                var1 = new Array(3);
                var1[0] = var4;
                var1[1] = var3;
                var1[2] = var2;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[17] = var1;
        var1 = {};
        var6 = '_initializeAllChannelsById';
        var1['key'] = var6;
        var6 = function value() {
            _fun0039: for(var _fun0039_ip = 0; ; ) switch(_fun0039_ip) {
case 0:
                var1 = this;
                var3 = var1.allChannelsById;
                var2 = null;
                if(!(var2 == var3)) { _fun0039_ip = 257; continue _fun0039 }
case 141:
                var2 = {};
                var1['allChannelsById'] = var2;
                var3 = _closure1_slot66;
                var2 = var1.getSortedCategories;
                var2 = var2.bind(var1)();
                var5 = undefined;
                var4 = var3.bind(var5)(var2);
                var3 = var4.bind(var5)();
                var2 = var3.done;
                if(var2) { _fun0039_ip = 257; continue _fun0039 }
case 65:
                var10 = var3.value;
                var8 = var10.channels;
                for(var2 in var8)
case 5:
                {
case 66:
                    var13 = var2;
                    var12 = var1.allChannelsById;
                    var11 = var10.channels;
                    var11 = var11[var13];
                    var12[var13] = var11;
                    _fun0039_ip = 5; continue _fun0039;
                }
case 68:
                var6 = var4.bind(var5)();
                var2 = var6.done;
                var3 = var6;
                if(!var2) { _fun0039_ip = 65; continue _fun0039 }
case 257:
                var1 = var1.allChannelsById;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[18] = var1;
        var1 = {};
        var6 = 'getChannels';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0040: for(var _fun0040_ip = 0; ; ) switch(_fun0040_ip) {
case 0:
                var3 = this;
                var1 = new Array(0);
                var2 = var3._initializeAllChannelsById;
                var7 = var2.bind(var3)();
                var3 = _closure1_slot66;
                var6 = undefined;
                var2 = arg1;
                var5 = var3.bind(var6)(var2);
                var3 = var5.bind(var6)();
                var2 = var3.done;
                var4 = null;
                if(var2) { _fun0040_ip = 212; continue _fun0040 }
case 75:
                var2 = var3.value;
                var8 = var7[var2];
                if(!(var4 != var8)) { _fun0040_ip = 137; continue _fun0040 }
case 20:
                var8 = var1.push;
                var2 = var7[var2];
                var2 = var8.bind(var1)(var2);
case 137:
                var8 = var5.bind(var6)();
                var2 = var8.done;
                var3 = var8;
                if(!var2) { _fun0040_ip = 75; continue _fun0040 }
case 212:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[19] = var1;
        var1 = {};
        var6 = 'getChannel';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0041: for(var _fun0041_ip = 0; ; ) switch(_fun0041_ip) {
case 0:
                var2 = this;
                var1 = var2._initializeAllChannelsById;
                var2 = var1.bind(var2)();
                var1 = arg1;
                var2 = var2[var1];
                var1 = null;
                var3 = var1 != var2;
                if(!var3) { _fun0041_ip = 258; continue _fun0041 }
case 259:
                var1 = var2;
case 258:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[20] = var1;
        var1 = {};
        var6 = 'updateSubtitles';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0042: for(var _fun0042_ip = 0; ; ) switch(_fun0042_ip) {
case 0:
                var6 = arg1;
                var3 = this;
                var8 = new Array(0);
                var10 = null;
                if(!(var10 == var6)) { _fun0042_ip = 4; continue _fun0042 }
case 234:
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 33;
                var2 = var5[var2];
                var5 = undefined;
                var4 = var4.bind(var5)(var2);
                var2 = var3.getSortedCategories;
                var2 = var2.bind(var3)();
                var5 = var4.bind(var5)(var2);
                var4 = var5.map;
                var2 = function(arg1) {
                    var1 = global;
                    var3 = var1.Object;
                    var2 = var3.values;
                    var1 = arg1;
                    var1 = var1.channels;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var4 = var4.bind(var5)(var2);
                var2 = var4.flatten;
                var4 = var2.bind(var4)();
                var2 = var4.value;
                var5 = var2.bind(var4)();
                _fun0042_ip = 252; continue _fun0042;
case 4:
                var4 = _closure1_slot25;
                var2 = var4.getChannel;
                var2 = var2.bind(var4)(var6);
                var5 = var8;
                if(!(var10 != var2)) { _fun0042_ip = 252; continue _fun0042 }
case 139:
                var7 = var2.id;
                var4 = var3.favoritesCategory;
                var4 = var4.channels;
                var4 = var7 in var4;
                if(var4) { _fun0042_ip = 104; continue _fun0042 }
case 260:
                var7 = var2.id;
                var4 = var3.recentsCategory;
                var4 = var4.channels;
                var4 = var7 in var4;
                if(var4) { _fun0042_ip = 261; continue _fun0042 }
case 262:
                var4 = var3.getCategory;
                var4 = var4.bind(var3)(var2);
                var7 = var10 != var4;
                if(!var7) { _fun0042_ip = 263; continue _fun0042 }
case 264:
                var9 = var4.channels;
                var9 = var9[var6];
                var7 = var10 != var9;
case 263:
                var5 = var8;
                if(!var7) { _fun0042_ip = 252; continue _fun0042 }
case 57:
                var4 = var4.channels;
                var6 = var4[var6];
                var4 = new Array(1);
                var4[0] = var6;
                var5 = var4;
                _fun0042_ip = 252; continue _fun0042;
case 261:
                var4 = var3.recentsCategory;
                var6 = var4.channels;
                var4 = var2.id;
                var6 = var6[var4];
                var4 = new Array(1);
                var4[0] = var6;
                var5 = var4;
                _fun0042_ip = 252; continue _fun0042;
case 104:
                var4 = var3.favoritesCategory;
                var4 = var4.channels;
                var2 = var2.id;
                var4 = var4[var2];
                var2 = new Array(1);
                var2[0] = var4;
                var5 = var2;
case 252:
                var2 = false;
                var _closure3_slot0 = var2;
                var4 = var5.forEach;
                var2 = function(arg1) {
                    _fun0043: for(var _fun0043_ip = 0; ; ) switch(_fun0043_ip) {
case 0:
                        var2 = arg1;
                        var1 = var2.updateSubtitle;
                        var1 = var1.bind(var2)();
                        if(!var1) { _fun0043_ip = 47; continue _fun0043 }
case 265:
                        var1 = true;
                        _closure3_slot0 = var1;
case 47:
                        var1 = undefined;
                        return var1;
                    }
                };
                var2 = var4.bind(var5)(var2);
                var2 = _closure3_slot0;
                if(!var2) { _fun0042_ip = 202; continue _fun0042 }
case 101:
                var2 = var3.version;
                var2 = var2 + 1;
                var3['version'] = var2;
case 202:
                var1 = _closure3_slot0;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[21] = var1;
        var1 = {};
        var6 = 'forEachShownChannel';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0044: for(var _fun0044_ip = 0; ; ) switch(_fun0044_ip) {
case 0:
                var14 = arg1;
                var13 = arg2;
                var12 = this;
                var3 = _closure1_slot66;
                var1 = var12.getSortedCategories;
                var2 = var1.bind(var12)();
                var1 = undefined;
                var10 = var3.bind(var1)(var2);
                var3 = var10.bind(var1)();
                var2 = var3.done;
                var9 = null;
                var8 = var3;
                var7 = undefined;
                var6 = undefined;
                var5 = undefined;
                var4 = undefined;
                var3 = undefined;
                if(var2) { _fun0044_ip = 40; continue _fun0044 }
case 156:
                var21 = var8.value;
                if(!(var9 != var13)) { _fun0044_ip = 266; continue _fun0044 }
case 14:
                var2 = var13.ignoreRecents;
                if(!var2) { _fun0044_ip = 266; continue _fun0044 }
case 236:
                var2 = var12.recentsCategory;
                var17 = var5;
                var16 = var4;
                var15 = var3;
                if(!(var21 !== var2)) { _fun0044_ip = 252; continue _fun0044 }
case 266:
                var18 = _closure1_slot66;
                var2 = var21.getShownChannelIds;
                var2 = var2.bind(var21)();
                var20 = var18.bind(var1)(var2);
                var22 = var20.bind(var1)();
                var2 = var22.done;
                var19 = var22;
                var18 = var3;
                var7 = var19;
                var6 = var20;
                var17 = var5;
                var16 = var4;
                var15 = var18;
                if(var2) { _fun0044_ip = 252; continue _fun0044 }
case 28:
                var22 = var19.value;
                var2 = var21.channels;
                var2 = var2[var22];
                var22 = var2.record;
                var22 = var14.bind(var1)(var22);
                var22 = _closure1_slot66;
                var2 = var2.threadIds;
                var23 = var22.bind(var1)(var2);
                var24 = var23.bind(var1)();
                var2 = var24.done;
                var22 = var24;
                var24 = var22;
                if(var2) { _fun0044_ip = 133; continue _fun0044 }
case 267:
                var26 = var22.value;
                var25 = _closure1_slot25;
                var2 = var25.getChannel;
                var25 = var2.bind(var25)(var26);
                if(!(var9 != var25)) { _fun0044_ip = 268; continue _fun0044 }
case 78:
                var2 = var14.bind(var1)(var25);
case 268:
                var26 = var23.bind(var1)();
                var2 = var26.done;
                var22 = var26;
                var24 = var22;
                var18 = var25;
                if(!var2) { _fun0044_ip = 267; continue _fun0044 }
case 133:
                var25 = var20.bind(var1)();
                var2 = var25.done;
                var17 = var24;
                var19 = var25;
                var7 = var19;
                var6 = var20;
                var16 = var23;
                var15 = var18;
                if(!var2) { _fun0044_ip = 28; continue _fun0044 }
case 252:
                var18 = var10.bind(var1)();
                var2 = var18.done;
                var5 = var17;
                var4 = var16;
                var3 = var15;
                var8 = var18;
                if(!var2) { _fun0044_ip = 156; continue _fun0044 }
case 40:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[22] = var1;
        var1 = {};
        var6 = 'forEachChannel';
        var1['key'] = var6;
        var5 = function value(arg1, arg2) {
            _fun0045: for(var _fun0045_ip = 0; ; ) switch(_fun0045_ip) {
case 0:
                var11 = arg1;
                var10 = arg2;
                var9 = this;
                var3 = _closure1_slot66;
                var1 = var9.getSortedCategories;
                var2 = var1.bind(var9)();
                var1 = undefined;
                var7 = var3.bind(var1)(var2);
                var3 = var7.bind(var1)();
                var2 = var3.done;
                var6 = null;
                var5 = var3;
                var4 = undefined;
                var3 = undefined;
                if(var2) { _fun0045_ip = 269; continue _fun0045 }
case 206:
                var13 = var5.value;
                if(!(var6 != var10)) { _fun0045_ip = 155; continue _fun0045 }
case 156:
                var2 = var10.ignoreRecents;
                if(!var2) { _fun0045_ip = 155; continue _fun0045 }
case 14:
                var2 = var9.recentsCategory;
                if(!(var13 !== var2)) { _fun0045_ip = 242; continue _fun0045 }
case 155:
                var12 = _closure1_slot66;
                var2 = var13.getChannelRecords;
                var2 = var2.bind(var13)();
                var13 = var12.bind(var1)(var2);
                var14 = var13.bind(var1)();
                var2 = var14.done;
                var12 = var14;
                var4 = var12;
                var3 = var13;
                if(var2) { _fun0045_ip = 242; continue _fun0045 }
case 88:
                var2 = var12.value;
                var2 = var11.bind(var1)(var2);
                var14 = var13.bind(var1)();
                var2 = var14.done;
                var12 = var14;
                var4 = var12;
                var3 = var13;
                if(!var2) { _fun0045_ip = 88; continue _fun0045 }
case 242:
                var12 = var7.bind(var1)();
                var2 = var12.done;
                var5 = var12;
                if(!var2) { _fun0045_ip = 206; continue _fun0045 }
case 269:
                return var1;
            }
        };
        var1['value'] = var5;
        var2[23] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var6 = var6.bind(var1)();
    var _closure1_slot48 = var6;
    var6 = function() {
        var4 = _closure1_slot8;
        var3 = function BaseChannelListCategory(arg1) {
            var3 = this;
            var4 = _closure1_slot7;
            var2 = _closure2_slot0;
            var1 = undefined;
            var2 = var4.bind(var1)(var3, var2);
            var2 = arg1;
            var3['guild'] = var2;
            var2 = false;
            var3['isMuted'] = var2;
            var3['isCollapsed'] = var2;
            var2 = -1;
            var3['position'] = var2;
            var2 = {};
            var3['channels'] = var2;
            var2 = null;
            var3['shownChannelIds'] = var2;
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'updateChannel';
        var1['key'] = var2;
        var2 = function value(arg1, arg2) {
            _fun0046: for(var _fun0046_ip = 0; ; ) switch(_fun0046_ip) {
case 0:
                var6 = arg1;
                var3 = this;
                var2 = var6.id;
                var1 = var3.channels;
                var1 = var2 in var1;
                var2 = !var1;
                if(!var1) { _fun0046_ip = 270; continue _fun0046 }
case 76:
                var4 = var3.channels;
                var1 = var6.id;
                var5 = var4[var1];
                var4 = var5.updateChannel;
                var1 = arg2;
                var1 = var4.bind(var5)(var6, var1);
                var2 = !var1;
case 270:
                var1 = !var2;
                if(var2) { _fun0046_ip = 5; continue _fun0046 }
case 271:
                var2 = var3.invalidate;
                var2 = var2.bind(var3)();
                var1 = true;
case 5:
                return var1;
            }
        };
        var1['value'] = var2;
        var2 = new Array(9);
        var2[0] = var1;
        var1 = {};
        var6 = 'invalidate';
        var1['key'] = var6;
        var6 = function value() {
            var2 = null;
            var1 = this;
            var1['shownChannelIds'] = var2;
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'getRows';
        var1['key'] = var6;
        var6 = function value() {
            _fun0047: for(var _fun0047_ip = 0; ; ) switch(_fun0047_ip) {
case 0:
                var4 = this;
                var1 = var4.getShownChannelIds;
                var3 = var1.bind(var4)();
                var5 = var3.length;
                var2 = 0;
                var1 = var3;
                if(!(var2 === var5)) { _fun0047_ip = 138; continue _fun0047 }
case 76:
                var2 = var4.shouldShowEmptyCategory;
                var2 = var2.bind(var4)();
                var1 = var3;
                if(!var2) { _fun0047_ip = 138; continue _fun0047 }
case 136:
                var2 = new Array(1);
                var3 = 'placeholder-channel-id';
                var2[0] = var3;
                var1 = var2;
case 138:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[2] = var1;
        var1 = {};
        var6 = 'shouldShowEmptyCategory';
        var1['key'] = var6;
        var6 = function value() {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 33;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.some;
            var1 = this;
            var2 = var1.channels;
            var1 = function(arg1) {
                var1 = arg1;
                var2 = var1.renderLevel;
                var1 = _closure1_slot40;
                var1 = var1.WouldShowIfUncollapsed;
                var1 = var2 >= var1;
                return var1;
            };
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var1['value'] = var6;
        var2[3] = var1;
        var1 = {};
        var6 = 'getShownChannelIds';
        var1['key'] = var6;
        var6 = function value() {
            _fun0048: for(var _fun0048_ip = 0; ; ) switch(_fun0048_ip) {
case 0:
                var1 = this;
                var4 = var1.shownChannelIds;
                var3 = null;
                if(!(var3 == var4)) { _fun0048_ip = 272; continue _fun0048 }
case 151:
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var3 = 33;
                var3 = var5[var3];
                var5 = undefined;
                var4 = var4.bind(var5)(var3);
                var3 = var1.channels;
                var4 = var4.bind(var5)(var3);
                var3 = var4.values;
                var5 = var3.bind(var4)();
                var4 = var5.filter;
                var3 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.renderLevel;
                    var1 = _closure1_slot40;
                    var1 = var1.Show;
                    var1 = var2 === var1;
                    return var1;
                };
                var5 = var4.bind(var5)(var3);
                var4 = var5.sortBy;
                var3 = function(arg1) {
                    _fun0049: for(var _fun0049_ip = 0; ; ) switch(_fun0049_ip) {
case 0:
                        var1 = arg1;
                        var2 = var1.record;
                        var1 = var2.isGuildVocal;
                        var1 = var1.bind(var2)();
                        var3 = var2.position;
                        if(var1) { _fun0049_ip = 258; continue _fun0049 }
case 76:
                        var1 = var3;
                        _fun0049_ip = 59; continue _fun0049;
case 258:
                        var2 = 10000;
                        var1 = var3 + var2;
case 59:
                        return var1;
                    }
                };
                var4 = var4.bind(var5)(var3);
                var3 = var4.map;
                var2 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.id;
                    return var1;
                };
                var3 = var3.bind(var4)(var2);
                var2 = var3.value;
                var2 = var2.bind(var3)();
                var1['shownChannelIds'] = var2;
case 272:
                var1 = var1.shownChannelIds;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[4] = var1;
        var1 = {};
        var6 = 'getShownChannelAndThreadIds';
        var1['key'] = var6;
        var6 = function value() {
            var2 = this;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 33;
            var1 = var4[var1];
            var4 = undefined;
            var3 = var3.bind(var4)(var1);
            var1 = var2.channels;
            var3 = var3.bind(var4)(var1);
            var1 = var3.values;
            var4 = var1.bind(var3)();
            var3 = var4.flatMap;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.threadIds;
                return var1;
            };
            var3 = var3.bind(var4)(var1);
            var1 = var3.value;
            var3 = var1.bind(var3)();
            var1 = var2.getShownChannelIds;
            var2 = var1.bind(var2)();
            var1 = var2.concat;
            var1 = var1.bind(var2)(var3);
            return var1;
        };
        var1['value'] = var6;
        var2[5] = var1;
        var1 = {};
        var6 = 'isEmpty';
        var1['key'] = var6;
        var6 = function value() {
            var2 = this;
            var1 = var2.getShownChannelIds;
            var1 = var1.bind(var2)();
            var2 = var1.length;
            var1 = 0;
            var1 = var1 === var2;
            return var1;
        };
        var1['value'] = var6;
        var2[6] = var1;
        var1 = {};
        var6 = 'getChannelRecords';
        var1['key'] = var6;
        var6 = function value() {
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 33;
            var2 = var4[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = this;
            var2 = var2.channels;
            var3 = var3.bind(var4)(var2);
            var2 = var3.values;
            var4 = var2.bind(var3)();
            var3 = var4.filter;
            var2 = function(arg1) {
                var1 = arg1;
                var2 = var1.renderLevel;
                var1 = _closure1_slot40;
                var1 = var1.CannotShow;
                var1 = var2 > var1;
                return var1;
            };
            var3 = var3.bind(var4)(var2);
            var2 = var3.map;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.record;
                return var1;
            };
            var2 = var2.bind(var3)(var1);
            var1 = var2.value;
            var1 = var1.bind(var2)();
            return var1;
        };
        var1['value'] = var6;
        var2[7] = var1;
        var1 = {};
        var6 = 'getFirstVoiceChannel';
        var1['key'] = var6;
        var5 = function value(arg1) {
            _fun0050: for(var _fun0050_ip = 0; ; ) switch(_fun0050_ip) {
case 0:
                var7 = arg1;
                var1 = this;
                var3 = _closure1_slot66;
                var2 = var1.getShownChannelIds;
                var2 = var2.bind(var1)();
                var6 = undefined;
                var5 = var3.bind(var6)(var2);
                var3 = var5.bind(var6)();
                var2 = var3.done;
                var4 = var3;
                if(var2) { _fun0050_ip = 273; continue _fun0050 }
case 136:
                var2 = var4.value;
                if(!var7) { _fun0050_ip = 155; continue _fun0050 }
case 274:
                var3 = var1.channels;
                var3 = var3[var2];
                var8 = var3.record;
                var3 = var8.isGuildStageVoice;
                var3 = var3.bind(var8)();
                if(var3) { _fun0050_ip = 203; continue _fun0050 }
case 155:
                if(var7) { _fun0050_ip = 275; continue _fun0050 }
case 154:
                var3 = var1.channels;
                var3 = var3[var2];
                var8 = var3.record;
                var3 = var8.isGuildVocal;
                var3 = var3.bind(var8)();
                if(!var3) { _fun0050_ip = 275; continue _fun0050 }
case 96:
                var3 = var1.channels;
                var3 = var3[var2];
                return var3;
case 275:
                var8 = var5.bind(var6)();
                var3 = var8.done;
                var4 = var8;
                if(var3) { _fun0050_ip = 273; continue _fun0050 }
case 129:
                _fun0050_ip = 136; continue _fun0050;
case 203:
                var1 = var1.channels;
                var1 = var1[var2];
                return var1;
case 273:
                var1 = null;
                return var1;
            }
        };
        var1['value'] = var5;
        var2[8] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var20 = var6.bind(var1)();
    var6 = function(arg1) {
        var3 = function ChannelListCategoryNoParent(arg1, arg2, arg3) {
            var7 = this;
            var1 = arg3;
            var _closure3_slot0 = var1;
            var1 = _closure1_slot7;
            var6 = _closure2_slot0;
            var5 = undefined;
            var1 = var1.bind(var5)(var7, var6);
            var4 = _closure1_slot64;
            var1 = new Array(1);
            var8 = arg1;
            var1[0] = var8;
            var1 = var4.bind(var5)(var7, var6, var1);
            var _closure3_slot1 = var1;
            var4 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 33;
            var3 = var6[var3];
            var4 = var4.bind(var5)(var3);
            var3 = arg2;
            var5 = var4.bind(var5)(var3);
            var4 = var5.map;
            var3 = function(arg1) {
                var5 = _closure1_slot57;
                var8 = _closure3_slot1;
                var6 = _closure3_slot0;
                var1 = var5.prototype;
                var2 = Object.create(var1, {constructor: {value: var5}});
                var7 = arg1;
                var9 = var2;
                var1 = new var9[var5](var8, var7, var6, var5);
                var1 = var1 instanceof Object ? var1 : var2;
                return var1;
            };
            var4 = var4.bind(var5)(var3);
            var3 = var4.keyBy;
            var2 = function(arg1) {
                var1 = arg1;
                var1 = var1.id;
                return var1;
            };
            var3 = var3.bind(var4)(var2);
            var2 = var3.value;
            var2 = var2.bind(var3)();
            var1['channels'] = var2;
            return var1;
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot6;
        var2 = undefined;
        var4 = arg1;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot8;
        var1 = var1.bind(var2)(var3);
        return var1;
    };
    var6 = var6.bind(var1)(var20);
    var _closure1_slot49 = var6;
    var6 = function(arg1) {
        var4 = function ChannelListCategoryWithParent(arg1, arg2, arg3, arg4) {
            _fun0051: for(var _fun0051_ip = 0; ; ) switch(_fun0051_ip) {
case 0:
                var3 = arg1;
                var2 = arg2;
                var7 = arg4;
                var9 = this;
                var1 = _closure1_slot7;
                var8 = _closure2_slot0;
                var5 = undefined;
                var1 = var1.bind(var5)(var9, var8);
                var4 = _closure1_slot64;
                var1 = new Array(1);
                var1[0] = var3;
                var1 = var4.bind(var5)(var9, var8, var1);
                var1['record'] = var2;
                var4 = var2.id;
                var1['id'] = var4;
                var8 = var3.collapsedCategoryIds;
                var4 = var2.id;
                var8 = var8[var4];
                var4 = true;
                var4 = var4 === var8;
                var1['isCollapsed'] = var4;
                var4 = var3.mutedChannelIds;
                var3 = var4.has;
                var2 = var2.id;
                var2 = var3.bind(var4)(var2);
                var1['isMuted'] = var2;
                var2 = {};
                var1['channels'] = var2;
                var3 = _closure1_slot66;
                var2 = arg3;
                var4 = var3.bind(var5)(var2);
                var3 = var4.bind(var5)();
                var2 = var3.done;
                if(var2) { _fun0051_ip = 56; continue _fun0051 }
case 276:
                var11 = var3.value;
                var9 = var1.channels;
                var8 = var11.id;
                var2 = _closure1_slot57;
                var10 = var2.prototype;
                var10 = Object.create(var10, {constructor: {value: var2}});
                var15 = var10;
                var14 = var1;
                var13 = var11;
                var12 = var7;
                var2 = new var15[var2](var14, var13, var12, var11);
                var2 = var2 instanceof Object ? var2 : var10;
                var9[var8] = var2;
                var8 = var4.bind(var5)();
                var2 = var8.done;
                var3 = var8;
                if(!var2) { _fun0051_ip = 276; continue _fun0051 }
case 56:
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var6 = _closure1_slot6;
        var3 = undefined;
        var5 = arg1;
        var5 = var6.bind(var3)(var4, var5);
        var2 = _closure1_slot8;
        var5 = {};
        var6 = 'shouldShowEmptyCategory';
        var5['key'] = var6;
        var1 = function value() {
            _fun0052: for(var _fun0052_ip = 0; ; ) switch(_fun0052_ip) {
case 0:
                var4 = this;
                var7 = _closure1_slot63;
                var13 = _closure2_slot0;
                var6 = undefined;
                var12 = 'shouldShowEmptyCategory';
                var10 = 3;
                var14 = undefined;
                var11 = var4;
                var2 = var14[var7](var13, var12, var11, var10, var9);
                var1 = new Array(0);
                var1 = var2.bind(var6)(var1);
                var2 = !var1;
                var1 = !var2;
                if(!var2) { _fun0052_ip = 91; continue _fun0052 }
case 235:
                var8 = _closure1_slot28;
                var7 = var8.can;
                var2 = _closure1_slot39;
                var5 = var2.MANAGE_CHANNELS;
                var2 = var4.record;
                var2 = var7.bind(var8)(var5, var2);
                if(!var2) { _fun0052_ip = 51; continue _fun0052 }
case 125:
                var9 = _closure1_slot28;
                var8 = var9.can;
                var5 = _closure1_slot39;
                var7 = var5.VIEW_CHANNEL;
                var5 = var4.record;
                var2 = var8.bind(var9)(var7, var5);
case 51:
                if(!var2) { _fun0052_ip = 277; continue _fun0052 }
case 278:
                var5 = _closure1_slot1;
                var7 = _closure1_slot2;
                var3 = 33;
                var3 = var7[var3];
                var6 = var5.bind(var6)(var3);
                var5 = var6.isEmpty;
                var3 = var4.channels;
                var2 = var5.bind(var6)(var3);
case 277:
                var2 = !var2;
                if(var2) { _fun0052_ip = 267; continue _fun0052 }
case 279:
                var3 = var4.guild;
                var3 = var3.optInEnabled;
                if(!var3) { _fun0052_ip = 280; continue _fun0052 }
case 281:
                var5 = var4.guild;
                var6 = var5.optedInChannels;
                var5 = var6.has;
                var4 = var4.id;
                var4 = var5.bind(var6)(var4);
                var3 = !var4;
case 280:
                var2 = var3;
case 267:
                var1 = !var2;
case 91:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(1);
        var1[0] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var6 = var6.bind(var1)(var20);
    var _closure1_slot50 = var6;
    var6 = function(arg1) {
        var4 = function ChannelListFavoritesCategory(arg1, arg2) {
            _fun0053: for(var _fun0053_ip = 0; ; ) switch(_fun0053_ip) {
case 0:
                var3 = arg1;
                var5 = arg2;
                var8 = this;
                var _closure3_slot0 = var5;
                var1 = _closure1_slot7;
                var7 = _closure2_slot0;
                var11 = undefined;
                var1 = var1.bind(var11)(var8, var7);
                var6 = _closure1_slot64;
                var1 = new Array(1);
                var1[0] = var3;
                var1 = var6.bind(var11)(var8, var7, var1);
                var _closure3_slot1 = var1;
                var6 = var3.optInEnabled;
                var7 = _closure1_slot1;
                var8 = _closure1_slot2;
                var6 = 33;
                var6 = var8[var6];
                var8 = var7.bind(var11)(var6);
                var9 = _closure1_slot31;
                var7 = var9.getGuildFavorites;
                var6 = var3.id;
                var7 = var7.bind(var9)(var6);
                var6 = null;
                if(!(var6 == var7)) { _fun0053_ip = 147; continue _fun0053 }
case 68:
                var7 = new Array(0);
case 147:
                var9 = var8.bind(var11)(var7);
                var8 = var9.map;
                var7 = function(arg1) {
                    var3 = _closure1_slot25;
                    var2 = var3.getChannel;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var9 = var8.bind(var9)(var7);
                var8 = var9.filter;
                var10 = _closure1_slot0;
                var12 = _closure1_slot2;
                var7 = 41;
                var7 = var12[var7];
                var7 = var10.bind(var11)(var7);
                var7 = var7.isNotNullish;
                var9 = var8.bind(var9)(var7);
                var8 = var9.map;
                var7 = function(arg1) {
                    var5 = _closure1_slot58;
                    var8 = _closure3_slot1;
                    var6 = _closure3_slot0;
                    var1 = var5.prototype;
                    var2 = Object.create(var1, {constructor: {value: var5}});
                    var7 = arg1;
                    var9 = var2;
                    var1 = new var9[var5](var8, var7, var6, var5);
                    var1 = var1 instanceof Object ? var1 : var2;
                    return var1;
                };
                var8 = var8.bind(var9)(var7);
                var7 = var8.keyBy;
                var4 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.id;
                    return var1;
                };
                var7 = var7.bind(var8)(var4);
                var4 = var7.value;
                var4 = var4.bind(var7)();
                var1['channels'] = var4;
                var7 = _closure1_slot15;
                var4 = var7.getSuggestedChannelId;
                var3 = var3.id;
                var4 = var4.bind(var7)(var3);
                var7 = _closure1_slot25;
                var3 = var7.getChannel;
                var7 = var3.bind(var7)(var4);
                var3 = var6 != var7;
                if(!var3) { _fun0053_ip = 105; continue _fun0053 }
case 77:
                var3 = var6 != var4;
case 105:
                if(!var3) { _fun0053_ip = 19; continue _fun0053 }
case 133:
                var3 = var1.channels;
                var6 = _closure1_slot58;
                var2 = {};
                var15 = var2;
                var14 = var5;
                var5 = copyDataProperties(var15, var14);
                var8 = {};
                var5 = 'activeJoinedRelevantThreads';
                var2[var5] = var8;
                var8 = {};
                var5 = 'activeJoinedUnreadThreads';
                var2[var5] = var8;
                var5 = var6.prototype;
                var5 = Object.create(var5, {constructor: {value: var6}});
                var16 = var5;
                var15 = var1;
                var14 = var7;
                var13 = var2;
                var2 = new var16[var6](var15, var14, var13, var12);
                var2 = var2 instanceof Object ? var2 : var5;
                var3[var4] = var2;
case 19:
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot6;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot8;
        var5 = {};
        var1 = 'updateChannel';
        var5['key'] = var1;
        var1 = function value(arg1, arg2) {
            _fun0054: for(var _fun0054_ip = 0; ; ) switch(_fun0054_ip) {
case 0:
                var2 = arg1;
                var5 = arg2;
                var3 = this;
                var4 = var2.id;
                var1 = var3.channels;
                var4 = var4 in var1;
                if(!var4) { _fun0054_ip = 41; continue _fun0054 }
case 76:
                var8 = _closure1_slot31;
                var7 = var8.isFavorite;
                var6 = var2.guild_id;
                var1 = var2.id;
                var4 = var7.bind(var8)(var6, var1);
case 41:
                var7 = _closure1_slot15;
                var6 = var7.getSuggestedChannelId;
                var1 = var2.guild_id;
                var6 = var6.bind(var7)(var1);
                var1 = var2.id;
                var1 = var1 === var6;
                if(!var1) { _fun0054_ip = 49; continue _fun0054 }
case 150:
                var1 = !var4;
case 49:
                var7 = var5;
                if(!var1) { _fun0054_ip = 282; continue _fun0054 }
case 283:
                var1 = {};
                var10 = var1;
                var9 = var5;
                var5 = copyDataProperties(var10, var9);
                var8 = {};
                var5 = 'activeJoinedRelevantThreads';
                var1[var5] = var8;
                var8 = {};
                var5 = 'activeJoinedUnreadThreads';
                var1[var5] = var8;
                var7 = var1;
case 282:
                var5 = var2.id;
                var1 = var3.channels;
                var1 = var5 in var1;
                if(!var1) { _fun0054_ip = 281; continue _fun0054 }
case 273:
                var5 = var3.channels;
                var1 = var2.id;
                var5 = var5[var1];
                var1 = var5.updateChannel;
                var1 = var1.bind(var5)(var2, var7);
                if(var1) { _fun0054_ip = 284; continue _fun0054 }
case 281:
                var5 = var2.id;
                var1 = var3.channels;
                var5 = var5 in var1;
                var1 = !var5;
                if(!var5) { _fun0054_ip = 285; continue _fun0054 }
case 286:
                var5 = var2.id;
                var1 = var5 === var6;
case 285:
                if(var1) { _fun0054_ip = 287; continue _fun0054 }
case 288:
                var1 = var4;
case 287:
                var1 = !var1;
                if(!var1) { _fun0054_ip = 289; continue _fun0054 }
case 290:
                var4 = var3.channels;
                var2 = var2.id;
                var2 = delete var4[var2];
                var2 = var3.invalidate;
                var2 = var2.bind(var3)();
                var1 = true;
case 289:
                _fun0054_ip = 245; continue _fun0054;
case 284:
                var2 = var3.invalidate;
                var2 = var2.bind(var3)();
                var1 = true;
case 245:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(2);
        var1[0] = var5;
        var5 = {};
        var7 = 'getFirstVoiceChannel';
        var5['key'] = var7;
        var6 = function value() {
            var1 = null;
            return var1;
        };
        var5['value'] = var6;
        var1[1] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var6 = var6.bind(var1)(var20);
    var _closure1_slot51 = var6;
    var21 = function(arg1) {
        var4 = function ChannelListRecentlyActiveCategory(arg1, arg2, arg3) {
            _fun0055: for(var _fun0055_ip = 0; ; ) switch(_fun0055_ip) {
case 0:
                var2 = arg1;
                var4 = arg2;
                var7 = arg3;
                var9 = this;
                var1 = _closure1_slot7;
                var3 = _closure2_slot0;
                var5 = undefined;
                var1 = var1.bind(var5)(var9, var3);
                var8 = _closure1_slot64;
                var1 = new Array(1);
                var1[0] = var2;
                var1 = var8.bind(var5)(var9, var3, var1);
                var8 = false;
                var1['enabled'] = var8;
                var9 = _closure1_slot16;
                var8 = var9.isCollapsed;
                var2 = var2.id;
                var2 = var8.bind(var9)(var2);
                var1['isCollapsed'] = var2;
                var2 = global;
                var9 = var2.Object;
                var8 = var9.keys;
                var8 = var8.bind(var9)(var4);
                var8 = var8.length;
                var3 = var3.MIN_READABLE_CHANNELS;
                var3 = var8 >= var3;
                var1['enabled'] = var3;
                var3 = var1.enabled;
                if(!var3) { _fun0055_ip = 245; continue _fun0055 }
case 282:
                var3 = var2.Object;
                var2 = var3.values;
                var4 = var2.bind(var3)(var4);
                var2 = var4.length;
                var3 = 0;
                var2 = var3 < var2;
                if(!var2) { _fun0055_ip = 245; continue _fun0055 }
case 291:
                var11 = var4[var3];
                var8 = _closure1_slot21;
                var2 = var11.type;
                var2 = var8.bind(var5)(var2);
                if(!var2) { _fun0055_ip = 35; continue _fun0055 }
case 292:
                var9 = _closure1_slot22;
                var8 = var11.type;
                var8 = var9.bind(var5)(var8);
                var2 = !var8;
case 35:
                if(!var2) { _fun0055_ip = 284; continue _fun0055 }
case 74:
                var9 = var1.channels;
                var8 = var11.id;
                var2 = _closure1_slot60;
                var10 = var2.prototype;
                var10 = Object.create(var10, {constructor: {value: var2}});
                var15 = var10;
                var14 = var1;
                var13 = var11;
                var12 = var7;
                var2 = new var15[var2](var14, var13, var12, var11);
                var2 = var2 instanceof Object ? var2 : var10;
                var9[var8] = var2;
case 284:
                var3 = var3 + 1;
                var2 = var4.length;
                if(var3 < var2) { _fun0055_ip = 291; continue _fun0055 }
case 245:
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot6;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot8;
        var5 = {};
        var1 = 'shouldShowEmptyCategory';
        var5['key'] = var1;
        var1 = function value() {
            _fun0056: for(var _fun0056_ip = 0; ; ) switch(_fun0056_ip) {
case 0:
                var7 = this;
                var1 = var7.enabled;
                if(!var1) { _fun0056_ip = 151; continue _fun0056 }
case 293:
                var1 = var7.isCollapsed;
case 151:
                if(!var1) { _fun0056_ip = 156; continue _fun0056 }
case 42:
                var6 = _closure1_slot63;
                var11 = _closure2_slot0;
                var4 = undefined;
                var10 = 'shouldShowEmptyCategory';
                var8 = 3;
                var12 = undefined;
                var9 = var7;
                var3 = var12[var6](var11, var10, var9, var8, var7);
                var2 = new Array(0);
                var1 = var3.bind(var4)(var2);
case 156:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(6);
        var1[0] = var5;
        var5 = {};
        var7 = 'updateAllChannels';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var2 = this;
            var _closure3_slot0 = var2;
            var3 = arg1;
            var _closure3_slot1 = var3;
            var3 = global;
            var4 = var3.Object;
            var3 = var4.values;
            var2 = var2.channels;
            var4 = var3.bind(var4)(var2);
            var3 = var4.reduce;
            var2 = function(arg1, arg2) {
                _fun0057: for(var _fun0057_ip = 0; ; ) switch(_fun0057_ip) {
case 0:
                    var2 = arg1;
                    var5 = _closure3_slot0;
                    var4 = var5.updateChannel;
                    var3 = arg2;
                    var3 = var3.record;
                    var1 = _closure3_slot1;
                    var1 = var4.bind(var5)(var3, var1);
                    if(var1) { _fun0057_ip = 79; continue _fun0057 }
case 8:
                    var1 = var2;
case 79:
                    return var1;
                }
            };
            var1 = false;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'updateChannel';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0058: for(var _fun0058_ip = 0; ; ) switch(_fun0058_ip) {
case 0:
                var1 = arg1;
                var6 = arg2;
                var4 = this;
                var2 = var4.enabled;
                if(var2) { _fun0058_ip = 157; continue _fun0058 }
case 151:
                var2 = false;
                return var2;
case 157:
                var5 = _closure1_slot22;
                var2 = var1.type;
                var7 = undefined;
                var2 = var5.bind(var7)(var2);
                if(var2) { _fun0058_ip = 294; continue _fun0058 }
case 15:
                var5 = _closure1_slot21;
                var2 = var1.type;
                var2 = var5.bind(var7)(var2);
                if(var2) { _fun0058_ip = 10; continue _fun0058 }
case 156:
                var2 = false;
                return var2;
case 10:
                var9 = _closure1_slot63;
                var13 = _closure2_slot0;
                var12 = 'updateChannel';
                var10 = 3;
                var14 = undefined;
                var11 = var4;
                var5 = var14[var9](var13, var12, var11, var10, var9);
                var2 = new Array(2);
                var2[0] = var1;
                var2[1] = var6;
                var5 = var5.bind(var7)(var2);
                var7 = var4.channels;
                var2 = var1.id;
                var7 = var7[var2];
                var2 = null;
                if(!(var2 != var7)) { _fun0058_ip = 99; continue _fun0058 }
case 295:
                var2 = var4.updateShownChannelIds;
                var2 = var2.bind(var4)(var7);
                if(var2) { _fun0058_ip = 211; continue _fun0058 }
case 53:
                var2 = var5;
case 211:
                _fun0058_ip = 296; continue _fun0058;
case 99:
                var3 = _closure1_slot60;
                var5 = var3.prototype;
                var5 = Object.create(var5, {constructor: {value: var3}});
                var14 = var5;
                var13 = var4;
                var12 = var1;
                var11 = var6;
                var3 = new var14[var3](var13, var12, var11, var10);
                var6 = var3 instanceof Object ? var3 : var5;
                var5 = var4.channels;
                var3 = var1.id;
                var5[var3] = var6;
                var3 = var4.invalidate;
                var3 = var3.bind(var4)();
                var2 = true;
case 296:
                return var2;
case 294:
                var2 = var4.channels;
                var1 = var1.parent_id;
                var3 = var2[var1];
                var1 = null;
                var1 = var1 != var3;
                if(!var1) { _fun0058_ip = 31; continue _fun0058 }
case 297:
                var2 = var4.updateShownChannelIds;
                var1 = var2.bind(var4)(var3);
case 31:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getFirstVoiceChannel';
        var5['key'] = var7;
        var7 = function value() {
            var1 = null;
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getShownChannelIds';
        var5['key'] = var7;
        var7 = function value() {
            _fun0059: for(var _fun0059_ip = 0; ; ) switch(_fun0059_ip) {
case 0:
                var1 = this;
                var4 = var1.shownChannelIds;
                var2 = null;
                if(!(var2 == var4)) { _fun0059_ip = 298; continue _fun0059 }
case 42:
                var2 = var1.isCollapsed;
                var5 = _closure1_slot40;
                if(var2) { _fun0059_ip = 2; continue _fun0059 }
case 152:
                var2 = var5.WouldShowIfUncollapsed;
                _fun0059_ip = 81; continue _fun0059;
case 2:
                var2 = var5.Show;
case 81:
                var _closure3_slot0 = var2;
                var2 = var1.enabled;
                if(var2) { _fun0059_ip = 9; continue _fun0059 }
case 138:
                var2 = new Array(0);
                _fun0059_ip = 299; continue _fun0059;
case 9:
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var4 = 33;
                var4 = var6[var4];
                var6 = undefined;
                var5 = var5.bind(var6)(var4);
                var4 = var1.channels;
                var6 = var5.bind(var6)(var4);
                var5 = var6.filter;
                var4 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.renderLevel;
                    var1 = _closure3_slot0;
                    var1 = var2 >= var1;
                    return var1;
                };
                var6 = var5.bind(var6)(var4);
                var5 = var6.map;
                var4 = function(arg1) {
                    var2 = arg1;
                    var3 = var2.id;
                    var1 = new Array(3);
                    var1[0] = var3;
                    var3 = var2.lastMessageTimestamp;
                    var1[1] = var3;
                    var2 = var2.renderLevel;
                    var1[2] = var2;
                    return var1;
                };
                var6 = var5.bind(var6)(var4);
                var5 = var6.filter;
                var4 = function(arg1) {
                    _fun0060: for(var _fun0060_ip = 0; ; ) switch(_fun0060_ip) {
case 0:
                        var7 = arg1;
                        var2 = var7[Symbol.iterator];
                        var7 = var2().next;
                        var9 = undefined;
                        var3 = undefined;
                        var4 = undefined;
                        var8 = var7().value;
                        var10 = var2;
                        var10 = var10 === var9;
                        var3 = var10;
                        if(var10) { _fun0060_ip = 258; continue _fun0060 }
case 259:
                        var4 = var8;
case 258:
                        var4 = undefined;
                        var8 = var3;
                        if(var8) { _fun0060_ip = 270; continue _fun0060 }
case 142:
                        var8 = var7().value;
                        var10 = var2;
                        var10 = var10 === var9;
                        var3 = var10;
                        if(var10) { _fun0060_ip = 270; continue _fun0060 }
case 143:
                        var4 = var8;
case 270:
                        var6 = var4;
                        var4 = undefined;
                        var8 = var3;
                        if(var8) { _fun0060_ip = 150; continue _fun0060 }
case 9:
                        var7 = var7().value;
                        var8 = var2;
                        var8 = var8 === var9;
                        var3 = var8;
                        if(var8) { _fun0060_ip = 150; continue _fun0060 }
case 207:
                        var4 = var7;
case 150:
                        var5 = var4;
                        var4 = var3;
                        if(var4) { _fun0060_ip = 266; continue _fun0060 }
case 283:
                        var2.return();
case 266:
                        var7 = var5;
                        var5 = _closure1_slot40;
                        var5 = var5.Show;
                        var5 = var7 === var5;
                        var4 = var5;
                        if(var5) { _fun0060_ip = 281; continue _fun0060 }
case 128:
                        var8 = var6;
                        var7 = 0;
                        var7 = var8 > var7;
                        var5 = var7;
                        if(!var7) { _fun0060_ip = 300; continue _fun0060 }
case 160:
                        var7 = global;
                        var8 = var7.Date;
                        var7 = var8.now;
                        var7 = var7.bind(var8)();
                        var7 = var7 - var6;
                        var6 = _closure2_slot0;
                        var6 = var6.MAX_TIMESTAMP_DELTA;
                        var5 = var7 < var6;
case 300:
                        var4 = var5;
case 281:
                        return var4;
case 32:
                        CatchBlockStart(arg_register=0);
                        if(var3) { _fun0060_ip = 33; continue _fun0060 }
case 301:
                        var2.return();
case 33:
                        throw var1;
                    }
                };
                var6 = var5.bind(var6)(var4);
                var5 = var6.sortBy;
                var4 = function(arg1) {
                    _fun0061: for(var _fun0061_ip = 0; ; ) switch(_fun0061_ip) {
case 0:
                        var7 = arg1;
                        var2 = var7[Symbol.iterator];
                        var7 = var2().next;
                        var8 = undefined;
                        var3 = undefined;
                        var6 = undefined;
                        var9 = var7().value;
                        var10 = var2;
                        var10 = var10 === var8;
                        var3 = var10;
                        if(var10) { _fun0061_ip = 258; continue _fun0061 }
case 259:
                        var6 = var9;
case 258:
                        var6 = undefined;
                        var9 = var3;
                        if(var9) { _fun0061_ip = 270; continue _fun0061 }
case 142:
                        var9 = var7().value;
                        var10 = var2;
                        var10 = var10 === var8;
                        var3 = var10;
                        if(var10) { _fun0061_ip = 270; continue _fun0061 }
case 143:
                        var6 = var9;
case 270:
                        var5 = var6;
                        var6 = undefined;
                        var9 = var3;
                        if(var9) { _fun0061_ip = 150; continue _fun0061 }
case 9:
                        var7 = var7().value;
                        var9 = var2;
                        var9 = var9 === var8;
                        var3 = var9;
                        if(var9) { _fun0061_ip = 150; continue _fun0061 }
case 207:
                        var6 = var7;
case 150:
                        var4 = var6;
                        var6 = var3;
                        if(var6) { _fun0061_ip = 266; continue _fun0061 }
case 283:
                        var2.return();
case 266:
                        var9 = var4;
                        var4 = _closure1_slot40;
                        var7 = var4.Show;
                        var4 = 0;
                        if(!(var9 !== var7)) { _fun0061_ip = 99; continue _fun0061 }
case 51:
                        var7 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var6 = 42;
                        var6 = var9[var6];
                        var6 = var7.bind(var8)(var6);
                        var4 = var6.DISCORD_EPOCH;
case 99:
                        var4 = var5 - var4;
                        var4 = -var4;
                        return var4;
case 302:
                        CatchBlockStart(arg_register=0);
                        if(var3) { _fun0061_ip = 269; continue _fun0061 }
case 277:
                        var2.return();
case 269:
                        throw var1;
                    }
                };
                var6 = var5.bind(var6)(var4);
                var5 = var6.take;
                var4 = _closure2_slot0;
                var4 = var4.MAX_RECENT_CHANNELS;
                var6 = var5.bind(var6)(var4);
                var5 = var6.sortBy;
                var4 = function(arg1) {
                    _fun0062: for(var _fun0062_ip = 0; ; ) switch(_fun0062_ip) {
case 0:
                        var6 = arg1;
                        var2 = var6[Symbol.iterator];
                        var6 = var2().next;
                        var8 = undefined;
                        var3 = undefined;
                        var5 = undefined;
                        var7 = var6().value;
                        var9 = var2;
                        var9 = var9 === var8;
                        var3 = var9;
                        if(var9) { _fun0062_ip = 258; continue _fun0062 }
case 259:
                        var5 = var7;
case 258:
                        var5 = undefined;
                        var7 = var3;
                        if(var7) { _fun0062_ip = 270; continue _fun0062 }
case 142:
                        var6 = var6().value;
                        var7 = var2;
                        var7 = var7 === var8;
                        var3 = var7;
                        if(var7) { _fun0062_ip = 270; continue _fun0062 }
case 143:
                        var5 = var6;
case 270:
                        var4 = var5;
                        var5 = var3;
                        if(var5) { _fun0062_ip = 14; continue _fun0062 }
case 64:
                        var2.return();
case 14:
                        var4 = -var4;
                        return var4;
case 303:
                        CatchBlockStart(arg_register=0);
                        if(var3) { _fun0062_ip = 154; continue _fun0062 }
case 155:
                        var2.return();
case 154:
                        throw var1;
                    }
                };
                var5 = var5.bind(var6)(var4);
                var4 = var5.map;
                var3 = function(arg1) {
                    _fun0063: for(var _fun0063_ip = 0; ; ) switch(_fun0063_ip) {
case 0:
                        var1 = arg1;
                        var2 = var1[Symbol.iterator];
                        var1 = var2().next;
                        var4 = var1().value;
                        var3 = var2;
                        var1 = undefined;
                        var3 = var3 === var1;
                        if(var3) { _fun0063_ip = 47; continue _fun0063 }
case 304:
                        var1 = var4;
case 47:
                        if(var3) { _fun0063_ip = 233; continue _fun0063 }
case 46:
                        var2.return();
case 233:
                        return var1;
                    }
                };
                var4 = var4.bind(var5)(var3);
                var3 = var4.value;
                var2 = var3.bind(var4)();
case 299:
                var1['shownChannelIds'] = var2;
case 298:
                var1 = var1.shownChannelIds;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'updateShownChannelIds';
        var5['key'] = var7;
        var6 = function value(arg1) {
            _fun0064: for(var _fun0064_ip = 0; ; ) switch(_fun0064_ip) {
case 0:
                var1 = arg1;
                var2 = this;
                var4 = var2.isCollapsed;
                var3 = _closure1_slot40;
                if(var4) { _fun0064_ip = 16; continue _fun0064 }
case 304:
                var5 = var3.WouldShowIfUncollapsed;
                _fun0064_ip = 152; continue _fun0064;
case 16:
                var5 = var3.Show;
case 152:
                var4 = var2.shownChannelIds;
                var3 = null;
                if(!(var3 != var4)) { _fun0064_ip = 305; continue _fun0064 }
case 7:
                var4 = var1.renderLevel;
                if(!(!(var4 < var5))) { _fun0064_ip = 305; continue _fun0064 }
case 145:
                var4 = var1.lastMessageTimestamp;
                var7 = var2.channels;
                var6 = var2.shownChannelIds;
                var5 = 0;
                var6 = var6[var5];
                var6 = var7[var6];
                var7 = var3 == var6;
                var3 = undefined;
                if(var7) { _fun0064_ip = 239; continue _fun0064 }
case 306:
                var3 = var6.lastMessageTimestamp;
case 239:
                if(!(!(var4 > var3))) { _fun0064_ip = 307; continue _fun0064 }
case 308:
                var3 = false;
                return var3;
case 307:
                var6 = var2.shownChannelIds;
                var4 = var6.indexOf;
                var3 = var1.id;
                var7 = var4.bind(var6)(var3);
                var3 = -1;
                if(!(var7 > var3)) { _fun0064_ip = 269; continue _fun0064 }
case 309:
                var6 = var2.shownChannelIds;
                var4 = var6.splice;
                var3 = 1;
                var3 = var4.bind(var6)(var7, var3);
case 269:
                var4 = var2.shownChannelIds;
                var3 = var4.splice;
                var1 = var1.id;
                var1 = var3.bind(var4)(var5, var5, var1);
                var1 = var2.shownChannelIds;
                var4 = var1.length;
                var3 = _closure2_slot0;
                var3 = var3.MAX_RECENT_CHANNELS;
                if(!(var4 > var3)) { _fun0064_ip = 310; continue _fun0064 }
case 91:
                var4 = var2.shownChannelIds;
                var3 = var4.slice;
                var1 = _closure2_slot0;
                var1 = var1.MAX_RECENT_CHANNELS;
                var1 = var3.bind(var4)(var5, var1);
                var2['shownChannelIds'] = var1;
case 310:
                var1 = true;
                return var1;
case 305:
                var1 = false;
                return var1;
            }
        };
        var5['value'] = var6;
        var1[5] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var21 = var21.bind(var1)(var20);
    var _closure1_slot52 = var21;
    var21['MIN_READABLE_CHANNELS'] = var23;
    var21['MAX_RECENT_CHANNELS'] = var5;
    var5 = 604800000;
    var21['MAX_TIMESTAMP_DELTA'] = var5;
    var5 = function(arg1) {
        var4 = function ChannelListRecentsCategory(arg1, arg2, arg3) {
            _fun0065: for(var _fun0065_ip = 0; ; ) switch(_fun0065_ip) {
case 0:
                var6 = arg1;
                var8 = this;
                var1 = arg3;
                var _closure3_slot0 = var1;
                var1 = _closure1_slot7;
                var7 = _closure2_slot0;
                var5 = undefined;
                var1 = var1.bind(var5)(var8, var7);
                var4 = _closure1_slot64;
                var1 = new Array(1);
                var1[0] = var6;
                var4 = var4.bind(var5)(var8, var7, var1);
                var _closure3_slot1 = var4;
                var1 = var6.optInEnabled;
                if(var1) { _fun0065_ip = 311; continue _fun0065 }
case 64:
                var1 = _closure1_slot4;
                var1 = var1.bind(var5)(var4);
                _fun0065_ip = 296; continue _fun0065;
case 311:
                var8 = _closure1_slot14;
                var7 = var8.isFullServerPreview;
                var6 = var6.id;
                var6 = var7.bind(var8)(var6);
                if(var6) { _fun0065_ip = 72; continue _fun0065 }
case 312:
                var6 = false;
                var4['isCollapsed'] = var6;
                var4['isMuted'] = var6;
                var7 = _closure1_slot1;
                var8 = _closure1_slot2;
                var6 = 33;
                var6 = var8[var6];
                var7 = var7.bind(var5)(var6);
                var6 = arg2;
                var8 = var7.bind(var5)(var6);
                var7 = var8.map;
                var6 = function(arg1) {
                    var5 = _closure1_slot59;
                    var8 = _closure3_slot1;
                    var6 = _closure3_slot0;
                    var1 = var5.prototype;
                    var2 = Object.create(var1, {constructor: {value: var5}});
                    var7 = arg1;
                    var9 = var2;
                    var1 = new var9[var5](var8, var7, var6, var5);
                    var1 = var1 instanceof Object ? var1 : var2;
                    return var1;
                };
                var7 = var7.bind(var8)(var6);
                var6 = var7.keyBy;
                var2 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.id;
                    return var1;
                };
                var6 = var6.bind(var7)(var2);
                var2 = var6.value;
                var2 = var2.bind(var6)();
                var4['channels'] = var2;
                var2 = var4;
                _fun0065_ip = 74; continue _fun0065;
case 72:
                var3 = _closure1_slot4;
                var2 = var3.bind(var5)(var4);
case 74:
                var1 = var2;
case 296:
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot6;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot8;
        var5 = {};
        var1 = 'updateAllChannels';
        var5['key'] = var1;
        var1 = function value(arg1) {
            var2 = this;
            var _closure3_slot0 = var2;
            var3 = arg1;
            var _closure3_slot1 = var3;
            var3 = false;
            var _closure3_slot2 = var3;
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var3 = 42;
            var4 = var4[var3];
            var3 = undefined;
            var4 = var5.bind(var3)(var4);
            var3 = var4.keys;
            var2 = var2.channels;
            var4 = var3.bind(var4)(var2);
            var3 = var4.forEach;
            var2 = function(arg1) {
                _fun0066: for(var _fun0066_ip = 0; ; ) switch(_fun0066_ip) {
case 0:
                    var5 = _closure3_slot0;
                    var4 = var5.updateChannel;
                    var3 = var5.channels;
                    var1 = arg1;
                    var1 = var3[var1];
                    var3 = var1.record;
                    var1 = _closure3_slot1;
                    var1 = var4.bind(var5)(var3, var1);
                    if(!var1) { _fun0066_ip = 7; continue _fun0066 }
case 136:
                    var1 = true;
                    _closure3_slot2 = var1;
case 7:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var2);
            var1 = _closure3_slot2;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(4);
        var1[0] = var5;
        var5 = {};
        var7 = 'updateChannel';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0067: for(var _fun0067_ip = 0; ; ) switch(_fun0067_ip) {
case 0:
                var7 = arg1;
                var6 = arg2;
                var2 = this;
                var8 = _closure1_slot63;
                var13 = _closure2_slot0;
                var9 = undefined;
                var12 = 'updateChannel';
                var10 = 3;
                var14 = undefined;
                var11 = var2;
                var4 = var14[var8](var13, var12, var11, var10, var9);
                var3 = new Array(2);
                var3[0] = var7;
                var3[1] = var6;
                var3 = var4.bind(var9)(var3);
                var4 = var2.guild;
                var4 = var4.optInEnabled;
                if(!var4) { _fun0067_ip = 68; continue _fun0067 }
case 14:
                var5 = var2.channels;
                var4 = var7.id;
                var5 = var5[var4];
                var8 = _closure1_slot72;
                var4 = var2.guild;
                var4 = var8.bind(var9)(var4, var7, var6);
                if(!var4) { _fun0067_ip = 68; continue _fun0067 }
case 312:
                var4 = null;
                if(!(var4 != var5)) { _fun0067_ip = 96; continue _fun0067 }
case 68:
                return var3;
case 96:
                var4 = var2.channels;
                var3 = var7.id;
                var1 = _closure1_slot59;
                var5 = var1.prototype;
                var5 = Object.create(var5, {constructor: {value: var1}});
                var14 = var5;
                var13 = var2;
                var12 = var7;
                var11 = var6;
                var1 = new var14[var1](var13, var12, var11, var10);
                var1 = var1 instanceof Object ? var1 : var5;
                var4[var3] = var1;
                var1 = var2.invalidate;
                var1 = var1.bind(var2)();
                var1 = true;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getFirstVoiceChannel';
        var5['key'] = var7;
        var7 = function value() {
            var1 = null;
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getShownChannelIds';
        var5['key'] = var7;
        var6 = function value() {
            _fun0068: for(var _fun0068_ip = 0; ; ) switch(_fun0068_ip) {
case 0:
                var1 = this;
                var4 = var1.shownChannelIds;
                var3 = null;
                if(!(var3 == var4)) { _fun0068_ip = 25; continue _fun0068 }
case 42:
                var4 = _closure1_slot1;
                var8 = _closure1_slot2;
                var3 = 33;
                var6 = var8[var3];
                var5 = undefined;
                var7 = var4.bind(var5)(var6);
                var6 = var1.channels;
                var7 = var7.bind(var5)(var6);
                var6 = var7.values;
                var9 = var6.bind(var7)();
                var7 = var9.filter;
                var6 = function(arg1) {
                    _fun0069: for(var _fun0069_ip = 0; ; ) switch(_fun0069_ip) {
case 0:
                        var3 = arg1;
                        var4 = var3.renderLevel;
                        var1 = _closure1_slot40;
                        var1 = var1.Show;
                        var1 = var4 === var1;
                        if(var1) { _fun0069_ip = 18; continue _fun0069 }
case 259:
                        var3 = var3.renderLevel;
                        var2 = _closure1_slot40;
                        var2 = var2.WouldShowIfUncollapsed;
                        var1 = var3 === var2;
case 18:
                        return var1;
                    }
                };
                var9 = var7.bind(var9)(var6);
                var7 = var9.sortBy;
                var6 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.record;
                    var1 = var1.position;
                    return var1;
                };
                var10 = var7.bind(var9)(var6);
                var7 = var10.take;
                var6 = 5;
                var7 = var7.bind(var10)(var6);
                var6 = var7.value;
                var11 = var6.bind(var7)();
                var7 = var9.filter;
                var6 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.renderLevel;
                    var1 = _closure1_slot40;
                    var1 = var1.Show;
                    var1 = var2 === var1;
                    return var1;
                };
                var7 = var7.bind(var9)(var6);
                var6 = var7.value;
                var13 = var6.bind(var7)();
                var6 = global;
                var10 = var6.Set;
                var6 = new Array(0);
                var14 = var6;
                var12 = 0;
                var12 = arraySpread(var14, var13, var12);
                var14 = var6;
                var13 = var11;
                var9 = arraySpread(var14, var13, var12);
                var9 = var10.prototype;
                var9 = Object.create(var9, {constructor: {value: var10}});
                var15 = var9;
                var14 = var6;
                var6 = new var15[var10](var14, var13);
                var13 = var6 instanceof Object ? var6 : var9;
                var3 = var8[var3];
                var4 = var4.bind(var5)(var3);
                var3 = new Array(0);
                var14 = var3;
                var12 = 0;
                var6 = arraySpread(var14, var13, var12);
                var5 = var4.bind(var5)(var3);
                var4 = var5.sortBy;
                var3 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.record;
                    var1 = var1.position;
                    return var1;
                };
                var4 = var4.bind(var5)(var3);
                var3 = var4.map;
                var2 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.id;
                    return var1;
                };
                var3 = var3.bind(var4)(var2);
                var2 = var3.value;
                var2 = var2.bind(var3)();
                var1['shownChannelIds'] = var2;
case 25:
                var1 = var1.shownChannelIds;
                return var1;
            }
        };
        var5['value'] = var6;
        var1[3] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var5 = var5.bind(var1)(var20);
    var _closure1_slot53 = var5;
    var5 = function(arg1) {
        var4 = function ChannelListVoiceChannelsCategory(arg1, arg2, arg3, arg4) {
            _fun0070: for(var _fun0070_ip = 0; ; ) switch(_fun0070_ip) {
case 0:
                var7 = arg1;
                var5 = arg3;
                var9 = this;
                var1 = arg4;
                var _closure3_slot0 = var1;
                var1 = _closure1_slot7;
                var8 = _closure2_slot0;
                var6 = undefined;
                var1 = var1.bind(var6)(var9, var8);
                var2 = _closure1_slot64;
                var1 = new Array(1);
                var1[0] = var7;
                var2 = var2.bind(var6)(var9, var8, var1);
                var _closure3_slot1 = var2;
                var2['categoriesById'] = var5;
                var1 = null;
                var2['hiddenChannelIds'] = var1;
                var1 = var7.optInEnabled;
                if(var1) { _fun0070_ip = 4; continue _fun0070 }
case 22:
                var1 = _closure1_slot4;
                var1 = var1.bind(var6)(var2);
                _fun0070_ip = 280; continue _fun0070;
case 4:
                var9 = _closure1_slot34;
                var8 = var9.isVoiceCategoryCollapsed;
                var7 = var7.id;
                var7 = var8.bind(var9)(var7);
                var2['isCollapsed'] = var7;
                var7 = false;
                var2['isMuted'] = var7;
                var2['categoriesById'] = var5;
                var5 = _closure1_slot1;
                var7 = _closure1_slot2;
                var4 = 33;
                var4 = var7[var4];
                var5 = var5.bind(var6)(var4);
                var4 = arg2;
                var6 = var5.bind(var6)(var4);
                var5 = var6.map;
                var4 = function(arg1) {
                    var5 = _closure1_slot61;
                    var8 = _closure3_slot1;
                    var6 = _closure3_slot0;
                    var1 = var5.prototype;
                    var2 = Object.create(var1, {constructor: {value: var5}});
                    var7 = arg1;
                    var9 = var2;
                    var1 = new var9[var5](var8, var7, var6, var5);
                    var1 = var1 instanceof Object ? var1 : var2;
                    return var1;
                };
                var5 = var5.bind(var6)(var4);
                var4 = var5.keyBy;
                var3 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.id;
                    return var1;
                };
                var4 = var4.bind(var5)(var3);
                var3 = var4.value;
                var3 = var3.bind(var4)();
                var2['channels'] = var3;
                var1 = var2;
case 280:
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot6;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot8;
        var5 = {};
        var1 = 'invalidate';
        var5['key'] = var1;
        var1 = function value() {
            var3 = this;
            var6 = _closure1_slot63;
            var10 = _closure2_slot0;
            var1 = undefined;
            var9 = 'invalidate';
            var7 = 3;
            var11 = undefined;
            var8 = var3;
            var4 = var11[var6](var10, var9, var8, var7, var6);
            var2 = new Array(0);
            var2 = var4.bind(var1)(var2);
            var2 = null;
            var3['hiddenChannelIds'] = var2;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(5);
        var1[0] = var5;
        var5 = {};
        var7 = 'getHiddenChannelIds';
        var5['key'] = var7;
        var7 = function value() {
            _fun0071: for(var _fun0071_ip = 0; ; ) switch(_fun0071_ip) {
case 0:
                var1 = this;
                var3 = var1.guild;
                var3 = var3.optInEnabled;
                if(var3) { _fun0071_ip = 47; continue _fun0071 }
case 140:
                var3 = new Array(0);
                return var3;
case 47:
                var4 = var1.hiddenChannelIds;
                var3 = null;
                if(!(var3 == var4)) { _fun0071_ip = 282; continue _fun0071 }
case 60:
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var3 = 33;
                var3 = var5[var3];
                var5 = undefined;
                var4 = var4.bind(var5)(var3);
                var3 = var1.channels;
                var5 = var4.bind(var5)(var3);
                var4 = var5.filter;
                var3 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.renderLevel;
                    var1 = _closure1_slot40;
                    var1 = var1.WouldShowIfUncollapsed;
                    var1 = var2 === var1;
                    return var1;
                };
                var4 = var4.bind(var5)(var3);
                var3 = var4.value;
                var4 = var3.bind(var4)();
                var5 = var4.every;
                var3 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.record;
                    var1 = var2.isCategory;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var3 = var5.bind(var4)(var3);
                if(var3) { _fun0071_ip = 313; continue _fun0071 }
case 147:
                var3 = var4.map;
                var2 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.id;
                    return var1;
                };
                var2 = var3.bind(var4)(var2);
                var1['hiddenChannelIds'] = var2;
case 282:
                var2 = var1.hiddenChannelIds;
                return var2;
case 313:
                var2 = new Array(0);
                var1['hiddenChannelIds'] = var2;
                var1 = var1.hiddenChannelIds;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getRows';
        var5['key'] = var7;
        var7 = function value() {
            _fun0072: for(var _fun0072_ip = 0; ; ) switch(_fun0072_ip) {
case 0:
                var5 = this;
                var1 = var5.guild;
                var1 = var1.optInEnabled;
                if(var1) { _fun0072_ip = 43; continue _fun0072 }
case 151:
                var1 = new Array(0);
                return var1;
case 43:
                var1 = var5.getShownChannelIds;
                var4 = var1.bind(var5)();
                var2 = var4.length;
                var3 = 0;
                var1 = var4;
                if(!(var3 === var2)) { _fun0072_ip = 22; continue _fun0072 }
case 144:
                var2 = var5.getHiddenChannelIds;
                var2 = var2.bind(var5)();
                var2 = var2.length;
                var1 = var4;
                if(!(var2 > var3)) { _fun0072_ip = 22; continue _fun0072 }
case 64:
                var2 = new Array(1);
                var3 = 'placeholder-channel-id';
                var2[0] = var3;
                var1 = var2;
case 22:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getShownChannelIds';
        var5['key'] = var7;
        var7 = function value() {
            _fun0073: for(var _fun0073_ip = 0; ; ) switch(_fun0073_ip) {
case 0:
                var1 = this;
                var _closure3_slot0 = var1;
                var3 = var1.guild;
                var3 = var3.optInEnabled;
                if(var3) { _fun0073_ip = 259; continue _fun0073 }
case 43:
                var3 = new Array(0);
                return var3;
case 259:
                var3 = var1.shownChannelIds;
                var9 = null;
                if(!(var9 == var3)) { _fun0073_ip = 109; continue _fun0073 }
case 2:
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var3 = 33;
                var3 = var5[var3];
                var7 = undefined;
                var4 = var4.bind(var7)(var3);
                var3 = var1.channels;
                var5 = var4.bind(var7)(var3);
                var4 = var5.filter;
                var3 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.renderLevel;
                    var1 = _closure1_slot40;
                    var1 = var1.Show;
                    var1 = var2 === var1;
                    return var1;
                };
                var5 = var4.bind(var5)(var3);
                var4 = var5.orderBy;
                var3 = new Array(2);
                var6 = function(arg1) {
                    _fun0074: for(var _fun0074_ip = 0; ; ) switch(_fun0074_ip) {
case 0:
                        var2 = arg1;
                        var1 = _closure3_slot0;
                        var6 = var1.categoriesById;
                        var1 = var2.record;
                        var3 = var1.type;
                        var1 = _closure1_slot36;
                        var1 = var1.GUILD_CATEGORY;
                        if(!(var3 !== var1)) { _fun0074_ip = 146; continue _fun0074 }
case 2:
                        var1 = var2.record;
                        var1 = var1.parent_id;
                        var4 = null;
                        var3 = var4 != var1;
                        var5 = -1;
                        var1 = var5;
                        if(!var3) { _fun0074_ip = 238; continue _fun0074 }
case 13:
                        var3 = var2.record;
                        var3 = var3.parent_id;
                        var6 = var6[var3];
                        var7 = var4 == var6;
                        var3 = undefined;
                        if(var7) { _fun0074_ip = 205; continue _fun0074 }
case 148:
                        var3 = var6.position;
case 205:
                        var4 = var4 != var3;
                        var1 = var5;
                        if(!var4) { _fun0074_ip = 238; continue _fun0074 }
case 96:
                        var1 = var3;
case 238:
                        _fun0074_ip = 241; continue _fun0074;
case 146:
                        var2 = var2.record;
                        var1 = var2.position;
case 241:
                        return var1;
                    }
                };
                var3[0] = var6;
                var2 = function(arg1) {
                    _fun0075: for(var _fun0075_ip = 0; ; ) switch(_fun0075_ip) {
case 0:
                        var2 = arg1;
                        var1 = var2.record;
                        var4 = var1.type;
                        var1 = _closure1_slot36;
                        var3 = var1.GUILD_CATEGORY;
                        var1 = -1;
                        if(!(var4 !== var3)) { _fun0075_ip = 75; continue _fun0075 }
case 60:
                        var2 = var2.record;
                        var1 = var2.position;
case 75:
                        return var1;
                    }
                };
                var3[1] = var2;
                var2 = ['asc', 'asc'];
                var3 = var4.bind(var5)(var3, var2);
                var2 = var3.value;
                var6 = var2.bind(var3)();
                var2 = new Array(0);
                var1['shownChannelIds'] = var2;
                var2 = var6.length;
                var5 = 0;
                var2 = var5 < var2;
                var4 = 1;
                var3 = undefined;
                if(!var2) { _fun0073_ip = 109; continue _fun0073 }
case 314:
                var2 = var6[var5];
                var10 = var6.length;
                var10 = var10 - var4;
                var10 = var5 < var10;
                if(!var10) { _fun0073_ip = 71; continue _fun0073 }
case 315:
                var11 = var2.record;
                var12 = var11.type;
                var11 = _closure1_slot36;
                var11 = var11.GUILD_CATEGORY;
                var10 = var12 === var11;
case 71:
                if(!var10) { _fun0073_ip = 316; continue _fun0073 }
case 317:
                var11 = var5 + var4;
                var11 = var6[var11];
                var12 = var9 == var11;
                var13 = undefined;
                if(var12) { _fun0073_ip = 284; continue _fun0073 }
case 268:
                var12 = var11.record;
                var13 = var12.type;
case 284:
                var12 = _closure1_slot36;
                var12 = var12.GUILD_CATEGORY;
                var10 = var13 === var12;
                var3 = var11;
case 316:
                if(var10) { _fun0073_ip = 318; continue _fun0073 }
case 319:
                var10 = var6.length;
                var10 = var10 - var4;
                var10 = var5 === var10;
                if(!var10) { _fun0073_ip = 320; continue _fun0073 }
case 321:
                var11 = var2.record;
                var12 = var11.type;
                var11 = _closure1_slot36;
                var11 = var11.GUILD_CATEGORY;
                var10 = var12 === var11;
case 320:
                if(var10) { _fun0073_ip = 318; continue _fun0073 }
case 322:
                var11 = var1.shownChannelIds;
                var10 = var11.push;
                var2 = var2.id;
                var2 = var10.bind(var11)(var2);
case 318:
                var5 = var5 + 1;
                var2 = var6.length;
                if(var5 < var2) { _fun0073_ip = 314; continue _fun0073 }
case 109:
                var1 = var1.shownChannelIds;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getFirstVoiceChannel';
        var5['key'] = var7;
        var6 = function value() {
            var1 = null;
            return var1;
        };
        var5['value'] = var6;
        var1[4] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var5 = var5.bind(var1)(var20);
    var _closure1_slot54 = var5;
    var20 = function() {
        var4 = _closure1_slot8;
        var3 = function ChannelListChannelNoticeSection(arg1) {
            var3 = this;
            var4 = _closure1_slot7;
            var2 = _closure2_slot0;
            var1 = undefined;
            var2 = var4.bind(var1)(var3, var2);
            var2 = arg1;
            var3['rows'] = var2;
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'isEmpty';
        var1['key'] = var2;
        var2 = function value() {
            var1 = this;
            var1 = var1.rows;
            var2 = var1.length;
            var1 = 0;
            var1 = var1 === var2;
            return var1;
        };
        var1['value'] = var2;
        var2 = new Array(3);
        var2[0] = var1;
        var1 = {};
        var6 = 'getRows';
        var1['key'] = var6;
        var6 = function value() {
            var1 = this;
            var1 = var1.rows;
            return var1;
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'getRow';
        var1['key'] = var6;
        var5 = function value(arg1) {
            var1 = this;
            var2 = var1.rows;
            var1 = arg1;
            var1 = var2[var1];
            return var1;
        };
        var1['value'] = var5;
        var2[2] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var20 = var20.bind(var1)();
    var _closure1_slot55 = var20;
    var20 = function() {
        var4 = _closure1_slot8;
        var3 = function ChannelListGuildActionSection(arg1, arg2) {
            _fun0076: for(var _fun0076_ip = 0; ; ) switch(_fun0076_ip) {
case 0:
                var7 = arg1;
                var3 = this;
                var5 = _closure1_slot7;
                var4 = _closure2_slot0;
                var1 = undefined;
                var4 = var5.bind(var1)(var3, var4);
                var6 = var7.map;
                var5 = global;
                var4 = var5.String;
                var4 = var6.bind(var7)(var4);
                var3['guildActionRows'] = var4;
                var4 = arg2;
                if(!var4) { _fun0076_ip = 208; continue _fun0076 }
case 235:
                var4 = var3.guildActionRows;
                var3 = var4.push;
                var5 = var5.String;
                var2 = _closure1_slot35;
                var2 = var2.GUILD_DIRECTORY;
                var2 = var5.bind(var1)(var2);
                var2 = var3.bind(var4)(var2);
case 208:
                return var1;
            }
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'isEmpty';
        var1['key'] = var2;
        var2 = function value() {
            var1 = this;
            var1 = var1.guildActionRows;
            var2 = var1.length;
            var1 = 0;
            var1 = var1 === var2;
            return var1;
        };
        var1['value'] = var2;
        var2 = new Array(3);
        var2[0] = var1;
        var1 = {};
        var6 = 'getRows';
        var1['key'] = var6;
        var6 = function value() {
            var1 = this;
            var1 = var1.guildActionRows;
            return var1;
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'getRow';
        var1['key'] = var6;
        var5 = function value(arg1) {
            var1 = this;
            var2 = var1.guildActionRows;
            var1 = arg1;
            var1 = var2[var1];
            return var1;
        };
        var1['value'] = var5;
        var2[2] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var20 = var20.bind(var1)();
    var _closure1_slot56 = var20;
    var20 = function() {
        var4 = _closure1_slot8;
        var3 = function BaseChannelListChannel(arg1, arg2, arg3) {
            _fun0077: for(var _fun0077_ip = 0; ; ) switch(_fun0077_ip) {
case 0:
                var4 = arg2;
                var3 = this;
                var5 = _closure1_slot7;
                var2 = _closure2_slot0;
                var1 = undefined;
                var2 = var5.bind(var1)(var3, var2);
                var2 = arg1;
                var3['category'] = var2;
                var3['record'] = var4;
                var2 = -1;
                var3['position'] = var2;
                var2 = new Array(0);
                var3['threadIds'] = var2;
                var2 = 0;
                var3['threadCount'] = var2;
                var2 = null;
                var3['subtitle'] = var2;
                var2 = _closure1_slot40;
                var5 = var2.CannotShow;
                var3['renderLevel'] = var5;
                var4 = var4.id;
                var3['id'] = var4;
                var5 = var3.computeState;
                var4 = arg3;
                var5 = var5.bind(var3)(var4);
                var4 = var5.renderLevel;
                var5 = var5.threadIds;
                var3['renderLevel'] = var4;
                var7 = _closure1_slot1;
                var8 = _closure1_slot2;
                var6 = 33;
                var6 = var8[var6];
                var7 = var7.bind(var1)(var6);
                var6 = var7.size;
                var6 = var6.bind(var7)(var5);
                var3['threadCount'] = var6;
                var3['threadIds'] = var5;
                var2 = var2.Show;
                if(!(var4 === var2)) { _fun0077_ip = 74; continue _fun0077 }
case 301:
                var2 = var3.computeSubtitle;
                var2 = var2.bind(var3)();
                var3['subtitle'] = var2;
case 74:
                return var1;
            }
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'isMuted';
        var1['key'] = var2;
        var2 = function get() {
            var1 = this;
            var2 = var1.category;
            var2 = var2.guild;
            var3 = var2.mutedChannelIds;
            var2 = var3.has;
            var1 = var1.id;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1['get'] = var2;
        var2 = new Array(7);
        var2[0] = var1;
        var1 = {};
        var6 = 'isCollapsed';
        var1['key'] = var6;
        var6 = function get() {
            var3 = _closure1_slot26;
            var2 = var3.isCollapsed;
            var1 = this;
            var1 = var1.id;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1['get'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'isFirstVoiceChannel';
        var1['key'] = var6;
        var6 = function get() {
            var2 = this;
            var3 = var2.category;
            var1 = var3.getFirstVoiceChannel;
            var1 = var1.bind(var3)();
            var1 = var1 === var2;
            return var1;
        };
        var1['get'] = var6;
        var2[2] = var1;
        var1 = {};
        var6 = 'lastMessageTimestamp';
        var1['key'] = var6;
        var6 = function get() {
            var5 = this;
            var1 = global;
            var3 = var1.Math;
            var2 = var3.max;
            var7 = _closure1_slot29;
            var6 = var7.lastMessageTimestamp;
            var1 = var5.id;
            var6 = var6.bind(var7)(var1);
            var1 = new Array(1);
            var1[0] = var6;
            var6 = var5.threadIds;
            var5 = var6.map;
            var4 = _closure1_slot29;
            var4 = var4.lastMessageTimestamp;
            var9 = var5.bind(var6)(var4);
            var8 = 1;
            var10 = var1;
            var4 = arraySpread(var10, var9, var8);
            var10 = var2;
            var9 = var1;
            var8 = var3;
            var1 = apply(var10, var9, var8);
            return var1;
        };
        var1['get'] = var6;
        var2[3] = var1;
        var1 = {};
        var6 = 'updateChannel';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0078: for(var _fun0078_ip = 0; ; ) switch(_fun0078_ip) {
case 0:
                var2 = arg1;
                var4 = this;
                var1 = null;
                var3 = var1 != var2;
                if(!var3) { _fun0078_ip = 47; continue _fun0078 }
case 141:
                var1 = var4.record;
                var3 = var2 !== var1;
case 47:
                var1 = false;
                if(!var3) { _fun0078_ip = 8; continue _fun0078 }
case 16:
                var4['record'] = var2;
                var1 = true;
case 8:
                var3 = var4.computeState;
                var2 = arg2;
                var2 = var3.bind(var4)(var2);
                var5 = var2.renderLevel;
                var3 = var4.renderLevel;
                var3 = var5 === var3;
                if(!var3) { _fun0078_ip = 204; continue _fun0078 }
case 9:
                var7 = _closure1_slot1;
                var6 = _closure1_slot2;
                var5 = 33;
                var6 = var6[var5];
                var5 = undefined;
                var8 = var7.bind(var5)(var6);
                var7 = var8.isEqual;
                var6 = var2.threadIds;
                var5 = var4.threadIds;
                var3 = var7.bind(var8)(var6, var5);
case 204:
                if(var3) { _fun0078_ip = 70; continue _fun0078 }
case 272:
                var3 = var2.renderLevel;
                var4['renderLevel'] = var3;
                var3 = var2.threadIds;
                var4['threadIds'] = var3;
                var6 = _closure1_slot1;
                var5 = _closure1_slot2;
                var3 = 33;
                var5 = var5[var3];
                var3 = undefined;
                var5 = var6.bind(var3)(var5);
                var3 = var5.size;
                var2 = var2.threadIds;
                var2 = var3.bind(var5)(var2);
                var4['threadCount'] = var2;
                var1 = true;
case 70:
                var3 = var4.renderLevel;
                var2 = _closure1_slot40;
                var2 = var2.Show;
                var2 = var3 === var2;
                if(!var2) { _fun0078_ip = 323; continue _fun0078 }
case 90:
                var3 = var4.updateSubtitle;
                var2 = var3.bind(var4)();
case 323:
                if(!var2) { _fun0078_ip = 324; continue _fun0078 }
case 298:
                var1 = true;
case 324:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[4] = var1;
        var1 = {};
        var6 = 'updateSubtitle';
        var1['key'] = var6;
        var6 = function value() {
            _fun0079: for(var _fun0079_ip = 0; ; ) switch(_fun0079_ip) {
case 0:
                var3 = this;
                var1 = var3.computeSubtitle;
                var2 = var1.bind(var3)();
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 33;
                var4 = var4[var1];
                var1 = undefined;
                var5 = var5.bind(var1)(var4);
                var4 = var5.isEqual;
                var1 = var3.subtitle;
                var1 = var4.bind(var5)(var1, var2);
                var1 = !var1;
                if(!var1) { _fun0079_ip = 12; continue _fun0079 }
case 138:
                var3['subtitle'] = var2;
                var1 = true;
case 12:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[5] = var1;
        var1 = {};
        var6 = 'computeSubtitle';
        var1['key'] = var6;
        var5 = function value() {
            _fun0080: for(var _fun0080_ip = 0; ; ) switch(_fun0080_ip) {
case 0:
                var1 = this;
                var5 = _closure1_slot68;
                var4 = var1.record;
                var3 = var1.isCollapsed;
                if(var3) { _fun0080_ip = 60; continue _fun0080 }
case 47:
                var2 = var1.category;
                var3 = var2.isCollapsed;
case 60:
                var1 = var1.category;
                var1 = var1.guild;
                var2 = var1.optInEnabled;
                var1 = undefined;
                var1 = var5.bind(var1)(var4, var3, var2);
                return var1;
            }
        };
        var1['value'] = var5;
        var2[6] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var23 = var20.bind(var1)();
    var20 = function(arg1) {
        var4 = function ChannelListChannelImpl() {
            var5 = this;
            var4 = undefined;
            var1 = undefined;
            var6 = _closure1_slot7;
            var3 = _closure2_slot0;
            var6 = var6.bind(var4)(var5, var3);
            var2 = _closure1_slot64;
            var1 = arguments;
            var1 = var2.bind(var4)(var5, var3, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var6 = _closure1_slot6;
        var3 = undefined;
        var5 = arg1;
        var5 = var6.bind(var3)(var4, var5);
        var2 = _closure1_slot8;
        var5 = {};
        var6 = 'computeState';
        var5['key'] = var6;
        var1 = function value(arg1) {
            _fun0081: for(var _fun0081_ip = 0; ; ) switch(_fun0081_ip) {
case 0:
                var2 = arg1;
                var1 = this;
                var14 = var2.selectedChannel;
                var13 = var2.selectedVoiceChannelId;
                var10 = var2.activeJoinedRelevantThreads;
                var11 = var2.activeJoinedUnreadThreads;
                var6 = _closure1_slot28;
                var5 = var6.can;
                var3 = _closure1_slot39;
                var4 = var3.VIEW_CHANNEL;
                var3 = var1.record;
                var3 = var5.bind(var6)(var4, var3);
                if(var3) { _fun0081_ip = 130; continue _fun0081 }
case 153:
                var3 = var1.id;
                if(!(var3 !== var13)) { _fun0081_ip = 53; continue _fun0081 }
case 303:
                var6 = _closure1_slot12;
                var5 = var6.isChannelGatedAndVisible;
                var3 = var1.record;
                var4 = var3.guild_id;
                var3 = var1.record;
                var3 = var3.id;
                var3 = var5.bind(var6)(var4, var3);
                if(var3) { _fun0081_ip = 130; continue _fun0081 }
case 67:
                var3 = {};
                var4 = _closure1_slot40;
                var4 = var4.CannotShow;
                var3['renderLevel'] = var4;
                var4 = new Array(0);
                var3['threadIds'] = var4;
                return var3;
case 53:
                var3 = {};
                var4 = _closure1_slot40;
                var4 = var4.Show;
                var3['renderLevel'] = var4;
                var4 = new Array(0);
                var3['threadIds'] = var4;
                return var3;
case 130:
                var3 = var1.record;
                var8 = var3.parent_id;
                var3 = var1.category;
                var5 = var3.guild;
                var4 = _closure1_slot70;
                var3 = var1.record;
                var7 = undefined;
                var3 = var4.bind(var7)(var5, var3);
                if(var3) { _fun0081_ip = 325; continue _fun0081 }
case 287:
                var6 = null;
                var3 = var6 == var14;
                var4 = undefined;
                if(var3) { _fun0081_ip = 324; continue _fun0081 }
case 323:
                var4 = var14.id;
case 324:
                var3 = var1.id;
                var4 = var4 === var3;
                if(var4) { _fun0081_ip = 326; continue _fun0081 }
case 31:
                var3 = var1.id;
                var4 = var13 === var3;
case 326:
                var9 = var6 != var14;
                if(!var9) { _fun0081_ip = 327; continue _fun0081 }
case 37:
                var3 = var14.isThread;
                var9 = var3.bind(var14)();
case 327:
                if(!var9) { _fun0081_ip = 134; continue _fun0081 }
case 162:
                var12 = var14.parent_id;
                var3 = var1.id;
                var9 = var12 === var3;
case 134:
                if(var4) { _fun0081_ip = 223; continue _fun0081 }
case 253:
                if(var9) { _fun0081_ip = 223; continue _fun0081 }
case 252:
                var3 = var1.category;
                var3 = var3.isCollapsed;
                if(var3) { _fun0081_ip = 21; continue _fun0081 }
case 328:
                var3 = var1.isMuted;
                if(!var3) { _fun0081_ip = 223; continue _fun0081 }
case 21:
                var3 = var1.id;
                var12 = var11[var3];
                _fun0081_ip = 19; continue _fun0081;
case 223:
                var3 = var1.id;
                var12 = var10[var3];
case 19:
                if(!(var6 == var12)) { _fun0081_ip = 329; continue _fun0081 }
case 330:
                var12 = {};
case 329:
                var11 = _closure1_slot69;
                var19 = var1.record;
                var15 = var5.hideMutedChannels;
                var20 = undefined;
                var18 = var12;
                var17 = var14;
                var16 = var13;
                var3 = var20[var11](var19, var18, var17, var16, var15, var14);
                var11 = var1.id;
                var10 = var5.moderatorReportChannelId;
                if(!(var11 !== var10)) { _fun0081_ip = 331; continue _fun0081 }
case 332:
                var10 = var5.optInEnabled;
                if(!var10) { _fun0081_ip = 333; continue _fun0081 }
case 164:
                var10 = var5.hideResourceChannels;
                if(!var10) { _fun0081_ip = 333; continue _fun0081 }
case 334:
                var12 = var1.record;
                var11 = var12.hasFlag;
                var10 = _closure1_slot38;
                var10 = var10.IS_GUILD_RESOURCE_CHANNEL;
                var10 = var11.bind(var12)(var10);
                if(var10) { _fun0081_ip = 335; continue _fun0081 }
case 333:
                var10 = var5.optInEnabled;
                if(!var10) { _fun0081_ip = 336; continue _fun0081 }
case 337:
                var12 = var5.optedInChannels;
                var11 = var12.has;
                var10 = var1.id;
                var10 = var11.bind(var12)(var10);
                if(var10) { _fun0081_ip = 336; continue _fun0081 }
case 338:
                if(!(var6 != var8)) { _fun0081_ip = 339; continue _fun0081 }
case 340:
                var11 = var5.optedInChannels;
                var10 = var11.has;
                var10 = var10.bind(var11)(var8);
                if(var10) { _fun0081_ip = 336; continue _fun0081 }
case 339:
                var10 = {};
                var11 = _closure1_slot40;
                var11 = var11.DoNotShow;
                var10['renderLevel'] = var11;
                var10['threadIds'] = var3;
                return var10;
case 336:
                if(var4) { _fun0081_ip = 341; continue _fun0081 }
case 342:
                if(var9) { _fun0081_ip = 341; continue _fun0081 }
case 343:
                var10 = _closure1_slot1;
                var11 = _closure1_slot2;
                var9 = 33;
                var9 = var11[var9];
                var10 = var10.bind(var7)(var9);
                var9 = var10.isEmpty;
                var9 = var9.bind(var10)(var3);
                if(!var9) { _fun0081_ip = 341; continue _fun0081 }
case 344:
                var11 = _closure1_slot29;
                var10 = var11.getMentionCount;
                var9 = var1.id;
                var10 = var10.bind(var11)(var9);
                var9 = 0;
                if(!(!(var10 > var9))) { _fun0081_ip = 341; continue _fun0081 }
case 345:
                var9 = var5.hideMutedChannels;
                if(!var9) { _fun0081_ip = 346; continue _fun0081 }
case 347:
                var11 = var5.mutedChannelIds;
                var10 = var11.has;
                var9 = var1.id;
                var9 = var10.bind(var11)(var9);
                if(var9) { _fun0081_ip = 348; continue _fun0081 }
case 346:
                var9 = var1.category;
                var9 = var9.isCollapsed;
                if(!var9) { _fun0081_ip = 349; continue _fun0081 }
case 350:
                var11 = var5.mutedChannelIds;
                var10 = var11.has;
                var9 = var1.id;
                var9 = var10.bind(var11)(var9);
                if(var9) { _fun0081_ip = 351; continue _fun0081 }
case 352:
                if(!(var6 != var8)) { _fun0081_ip = 353; continue _fun0081 }
case 354:
                var6 = var5.mutedChannelIds;
                var5 = var6.has;
                var5 = var5.bind(var6)(var8);
                if(var5) { _fun0081_ip = 351; continue _fun0081 }
case 353:
                var6 = var1.record;
                var5 = var6.isGuildVocal;
                var5 = var5.bind(var6)();
                if(var5) { _fun0081_ip = 191; continue _fun0081 }
case 355:
                var5 = var1.record;
                var6 = var5.type;
                var5 = _closure1_slot36;
                var5 = var5.GUILD_STORE;
                if(!(var6 !== var5)) { _fun0081_ip = 191; continue _fun0081 }
case 356:
                var6 = _closure1_slot21;
                var5 = var1.record;
                var5 = var5.type;
                var5 = var6.bind(var7)(var5);
                if(!var5) { _fun0081_ip = 349; continue _fun0081 }
case 357:
                var6 = _closure1_slot29;
                var5 = var6.hasUnread;
                var1 = var1.record;
                var1 = var1.id;
                var1 = var5.bind(var6)(var1);
                if(var1) { _fun0081_ip = 349; continue _fun0081 }
case 179:
                var1 = {};
                var5 = _closure1_slot40;
                var5 = var5.WouldShowIfUncollapsed;
                var1['renderLevel'] = var5;
                var1['threadIds'] = var3;
                return var1;
case 349:
                var1 = {};
                var5 = _closure1_slot40;
                var5 = var5.Show;
                var1['renderLevel'] = var5;
                var1['threadIds'] = var3;
                return var1;
case 191:
                var1 = {};
                var5 = _closure1_slot40;
                var5 = var5.WouldShowIfUncollapsed;
                var1['renderLevel'] = var5;
                var1['threadIds'] = var3;
                return var1;
case 351:
                var1 = {};
                var5 = _closure1_slot40;
                var5 = var5.WouldShowIfUncollapsed;
                var1['renderLevel'] = var5;
                var1['threadIds'] = var3;
                return var1;
case 348:
                var1 = {};
                var5 = _closure1_slot40;
                var5 = var5.DoNotShow;
                var1['renderLevel'] = var5;
                var1['threadIds'] = var3;
                return var1;
case 341:
                var1 = {};
                var5 = _closure1_slot40;
                var5 = var5.Show;
                var1['renderLevel'] = var5;
                var1['threadIds'] = var3;
                return var1;
case 335:
                var1 = {};
                var5 = _closure1_slot40;
                if(var4) { _fun0081_ip = 358; continue _fun0081 }
case 359:
                var4 = var5.CannotShow;
                _fun0081_ip = 360; continue _fun0081;
case 358:
                var4 = var5.Show;
case 360:
                var1['renderLevel'] = var4;
                var1['threadIds'] = var3;
                return var1;
case 331:
                var1 = {};
                var4 = _closure1_slot40;
                var4 = var4.DoNotShow;
                var1['renderLevel'] = var4;
                var1['threadIds'] = var3;
                return var1;
case 325:
                var1 = {};
                var2 = _closure1_slot40;
                var2 = var2.CannotShow;
                var1['renderLevel'] = var2;
                var2 = new Array(0);
                var1['threadIds'] = var2;
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(1);
        var1[0] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var21 = var20.bind(var1)(var23);
    var _closure1_slot57 = var21;
    var20 = function(arg1) {
        var4 = function FavoritesChannelListChannel() {
            var5 = this;
            var4 = undefined;
            var1 = undefined;
            var6 = _closure1_slot7;
            var3 = _closure2_slot0;
            var6 = var6.bind(var4)(var5, var3);
            var2 = _closure1_slot64;
            var1 = arguments;
            var1 = var2.bind(var4)(var5, var3, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var6 = _closure1_slot6;
        var3 = undefined;
        var5 = arg1;
        var5 = var6.bind(var3)(var4, var5);
        var2 = _closure1_slot8;
        var5 = {};
        var6 = 'computeState';
        var5['key'] = var6;
        var1 = function value(arg1) {
            _fun0082: for(var _fun0082_ip = 0; ; ) switch(_fun0082_ip) {
case 0:
                var1 = arg1;
                var3 = this;
                var9 = var1.selectedChannel;
                var8 = var1.selectedVoiceChannelId;
                var4 = var1.activeJoinedRelevantThreads;
                var7 = _closure1_slot28;
                var6 = var7.can;
                var1 = _closure1_slot39;
                var2 = var1.VIEW_CHANNEL;
                var1 = var3.record;
                var1 = var6.bind(var7)(var2, var1);
                var2 = {};
                var6 = _closure1_slot40;
                if(var1) { _fun0082_ip = 125; continue _fun0082 }
case 153:
                var1 = var6.CannotShow;
                var2['renderLevel'] = var1;
                var1 = new Array(0);
                var2['threadIds'] = var1;
                var1 = var2;
                _fun0082_ip = 361; continue _fun0082;
case 125:
                var6 = var6.Show;
                var2['renderLevel'] = var6;
                var7 = _closure1_slot69;
                var6 = var3.record;
                var3 = var3.id;
                var5 = var4[var3];
                var3 = null;
                if(!(var3 == var5)) { _fun0082_ip = 362; continue _fun0082 }
case 128:
                var5 = {};
case 362:
                var15 = undefined;
                var10 = false;
                var14 = var6;
                var13 = var5;
                var12 = var9;
                var11 = var8;
                var3 = var15[var7](var14, var13, var12, var11, var10, var9);
                var2['threadIds'] = var3;
                var1 = var2;
case 361:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(1);
        var1[0] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var20 = var20.bind(var1)(var23);
    var _closure1_slot58 = var20;
    var20 = function(arg1) {
        var4 = function RecentsChannelListChannel() {
            var5 = this;
            var4 = undefined;
            var1 = undefined;
            var6 = _closure1_slot7;
            var3 = _closure2_slot0;
            var6 = var6.bind(var4)(var5, var3);
            var2 = _closure1_slot64;
            var1 = arguments;
            var1 = var2.bind(var4)(var5, var3, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var6 = _closure1_slot6;
        var3 = undefined;
        var5 = arg1;
        var5 = var6.bind(var3)(var4, var5);
        var2 = _closure1_slot8;
        var5 = {};
        var6 = 'computeState';
        var5['key'] = var6;
        var1 = function value(arg1) {
            _fun0083: for(var _fun0083_ip = 0; ; ) switch(_fun0083_ip) {
case 0:
                var11 = arg1;
                var4 = this;
                var10 = var11.selectedChannel;
                var9 = var11.selectedVoiceChannelId;
                var5 = var11.activeJoinedRelevantThreads;
                var7 = _closure1_slot28;
                var3 = var7.can;
                var1 = _closure1_slot39;
                var2 = var1.VIEW_CHANNEL;
                var1 = var4.record;
                var1 = var3.bind(var7)(var2, var1);
                if(var1) { _fun0083_ip = 125; continue _fun0083 }
case 138:
                var1 = {};
                var2 = _closure1_slot40;
                var2 = var2.CannotShow;
                var1['renderLevel'] = var2;
                var2 = new Array(0);
                var1['threadIds'] = var2;
                _fun0083_ip = 363; continue _fun0083;
case 125:
                var7 = _closure1_slot72;
                var2 = var4.category;
                var3 = var2.guild;
                var2 = var4.record;
                var8 = undefined;
                var2 = var7.bind(var8)(var3, var2, var11);
                var3 = {};
                if(var2) { _fun0083_ip = 364; continue _fun0083 }
case 278:
                var2 = _closure1_slot40;
                var2 = var2.DoNotShow;
                var3['renderLevel'] = var2;
                var2 = new Array(0);
                var3['threadIds'] = var2;
                var2 = var3;
                _fun0083_ip = 365; continue _fun0083;
case 364:
                var7 = _closure1_slot71;
                var7 = var7.bind(var8)(var4, var11);
                var11 = _closure1_slot40;
                if(var7) { _fun0083_ip = 300; continue _fun0083 }
case 130:
                var7 = var11.WouldShowIfUncollapsed;
                _fun0083_ip = 292; continue _fun0083;
case 300:
                var7 = var11.Show;
case 292:
                var3['renderLevel'] = var7;
                var7 = _closure1_slot69;
                var6 = var4.record;
                var4 = var4.id;
                var5 = var5[var4];
                var4 = null;
                if(!(var4 == var5)) { _fun0083_ip = 91; continue _fun0083 }
case 288:
                var5 = {};
case 91:
                var13 = false;
                var18 = undefined;
                var17 = var6;
                var16 = var5;
                var15 = var10;
                var14 = var9;
                var4 = var18[var7](var17, var16, var15, var14, var13, var12);
                var3['threadIds'] = var4;
                var2 = var3;
case 365:
                var1 = var2;
case 363:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(1);
        var1[0] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var20 = var20.bind(var1)(var23);
    var _closure1_slot59 = var20;
    var20 = function(arg1) {
        var4 = function RecentlyActiveChannelListChannel() {
            var5 = this;
            var4 = undefined;
            var1 = undefined;
            var6 = _closure1_slot7;
            var3 = _closure2_slot0;
            var6 = var6.bind(var4)(var5, var3);
            var2 = _closure1_slot64;
            var1 = arguments;
            var1 = var2.bind(var4)(var5, var3, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var6 = _closure1_slot6;
        var3 = undefined;
        var5 = arg1;
        var5 = var6.bind(var3)(var4, var5);
        var2 = _closure1_slot8;
        var5 = {};
        var6 = 'computeState';
        var5['key'] = var6;
        var1 = function value(arg1) {
            _fun0084: for(var _fun0084_ip = 0; ; ) switch(_fun0084_ip) {
case 0:
                var10 = arg1;
                var9 = this;
                var5 = _closure1_slot63;
                var17 = _closure2_slot0;
                var6 = undefined;
                var16 = 'computeState';
                var14 = 3;
                var18 = undefined;
                var15 = var9;
                var3 = var18[var5](var17, var16, var15, var14, var13);
                var2 = new Array(1);
                var2[0] = var10;
                var2 = var3.bind(var6)(var2);
                var4 = var2.renderLevel;
                var7 = var2.threadIds;
                var2 = _closure1_slot40;
                var5 = var2.CannotShow;
                var2 = var7;
                var3 = var4;
                if(!(var3 > var5)) { _fun0084_ip = 39; continue _fun0084 }
case 22:
                var5 = var9.record;
                var11 = var5.parent_id;
                var5 = var9.category;
                var5 = var5.guild;
                var13 = var5.mutedChannelIds;
                var12 = var13.has;
                var8 = var9.id;
                var8 = var12.bind(var13)(var8);
                if(var8) { _fun0084_ip = 297; continue _fun0084 }
case 366:
                var8 = null;
                if(!(var8 != var11)) { _fun0084_ip = 28; continue _fun0084 }
case 367:
                var8 = var5.mutedChannelIds;
                var5 = var8.has;
                var5 = var5.bind(var8)(var11);
                if(var5) { _fun0084_ip = 297; continue _fun0084 }
case 28:
                var5 = _closure1_slot40;
                var5 = var5.Show;
                var5 = var4 === var5;
                if(var5) { _fun0084_ip = 73; continue _fun0084 }
case 368:
                var8 = _closure1_slot40;
                var8 = var8.DoNotShow;
                var8 = var4 === var8;
                if(!var8) { _fun0084_ip = 91; continue _fun0084 }
case 301:
                var13 = _closure1_slot72;
                var11 = var9.category;
                var12 = var11.guild;
                var11 = var9.record;
                var8 = var13.bind(var6)(var12, var11, var10);
case 91:
                var5 = var8;
case 73:
                if(!var5) { _fun0084_ip = 365; continue _fun0084 }
case 87:
                var5 = _closure1_slot40;
                var4 = var5.WouldShowIfUncollapsed;
                _fun0084_ip = 365; continue _fun0084;
case 297:
                var5 = _closure1_slot40;
                var4 = var5.DoNotShow;
case 365:
                var5 = _closure1_slot40;
                var5 = var5.WouldShowIfUncollapsed;
                var5 = var4 === var5;
                if(!var5) { _fun0084_ip = 327; continue _fun0084 }
case 37:
                var8 = _closure1_slot71;
                var5 = var8.bind(var6)(var9, var10);
case 327:
                if(!var5) { _fun0084_ip = 369; continue _fun0084 }
case 162:
                var5 = _closure1_slot40;
                var4 = var5.Show;
case 369:
                var5 = _closure1_slot1;
                var8 = _closure1_slot2;
                var1 = 33;
                var1 = var8[var1];
                var6 = var5.bind(var6)(var1);
                var5 = var6.sortBy;
                var1 = function(arg1) {
                    var3 = _closure1_slot29;
                    var2 = var3.lastMessageTimestamp;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    var1 = -var1;
                    return var1;
                };
                var2 = var5.bind(var6)(var7, var1);
                var3 = var4;
case 39:
                var1 = {};
                var1['renderLevel'] = var3;
                var1['threadIds'] = var2;
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(1);
        var1[0] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var20 = var20.bind(var1)(var21);
    var _closure1_slot60 = var20;
    var20 = function(arg1) {
        var4 = function VoiceChannelListChannel() {
            var5 = this;
            var4 = undefined;
            var1 = undefined;
            var6 = _closure1_slot7;
            var3 = _closure2_slot0;
            var6 = var6.bind(var4)(var5, var3);
            var2 = _closure1_slot64;
            var1 = arguments;
            var1 = var2.bind(var4)(var5, var3, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot6;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot8;
        var5 = {};
        var1 = 'getRenderLevel';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0085: for(var _fun0085_ip = 0; ; ) switch(_fun0085_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = var4.category;
                var6 = var1.guild;
                var8 = _closure1_slot28;
                var7 = var8.can;
                var1 = _closure1_slot39;
                var2 = var1.VIEW_CHANNEL;
                var1 = var4.record;
                var1 = var7.bind(var8)(var2, var1);
                var2 = _closure1_slot40;
                if(var1) { _fun0085_ip = 12; continue _fun0085 }
case 65:
                var1 = var2.CannotShow;
                _fun0085_ip = 370; continue _fun0085;
case 12:
                var2 = var2.Show;
                if(!(var5 !== var2)) { _fun0085_ip = 371; continue _fun0085 }
case 311:
                var2 = _closure1_slot40;
                var2 = var2.WouldShowIfUncollapsed;
                if(!(var5 !== var2)) { _fun0085_ip = 371; continue _fun0085 }
case 283:
                var5 = _closure1_slot70;
                var2 = var4.record;
                var7 = undefined;
                var2 = var5.bind(var7)(var6, var2);
                if(var2) { _fun0085_ip = 371; continue _fun0085 }
case 372:
                var2 = var4.category;
                var2 = var2.isCollapsed;
                if(var2) { _fun0085_ip = 260; continue _fun0085 }
case 217:
                var2 = _closure1_slot40;
                var2 = var2.Show;
                _fun0085_ip = 299; continue _fun0085;
case 260:
                var6 = _closure1_slot1;
                var8 = _closure1_slot2;
                var5 = 33;
                var5 = var8[var5];
                var6 = var6.bind(var7)(var5);
                var5 = var6.some;
                var8 = _closure1_slot32;
                var7 = var8.getVoiceStatesForChannel;
                var4 = var4.record;
                var4 = var4.id;
                var4 = var7.bind(var8)(var4);
                var4 = var5.bind(var6)(var4);
                var5 = _closure1_slot40;
                if(var4) { _fun0085_ip = 91; continue _fun0085 }
case 132:
                var4 = var5.WouldShowIfUncollapsed;
                _fun0085_ip = 87; continue _fun0085;
case 91:
                var4 = var5.Show;
case 87:
                var2 = var4;
case 299:
                _fun0085_ip = 373; continue _fun0085;
case 371:
                var3 = _closure1_slot40;
                var2 = var3.CannotShow;
case 373:
                var1 = var2;
case 370:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(2);
        var1[0] = var5;
        var5 = {};
        var7 = 'computeState';
        var5['key'] = var7;
        var6 = function value(arg1) {
            _fun0086: for(var _fun0086_ip = 0; ; ) switch(_fun0086_ip) {
case 0:
                var3 = this;
                var6 = _closure1_slot63;
                var11 = _closure2_slot0;
                var7 = undefined;
                var10 = 'computeState';
                var8 = 3;
                var12 = undefined;
                var9 = var3;
                var4 = var12[var6](var11, var10, var9, var8, var7);
                var2 = new Array(1);
                var5 = arg1;
                var2[0] = var5;
                var2 = var4.bind(var7)(var2);
                var4 = var3.getRenderLevel;
                var2 = var2.renderLevel;
                var2 = var4.bind(var3)(var2);
                var4 = _closure1_slot40;
                var4 = var4.Show;
                if(!(var2 === var4)) { _fun0086_ip = 313; continue _fun0086 }
case 374:
                var6 = _closure1_slot68;
                var5 = var3.record;
                var4 = var3.isCollapsed;
                if(var4) { _fun0086_ip = 307; continue _fun0086 }
case 266:
                var1 = var3.category;
                var4 = var1.isCollapsed;
case 307:
                var1 = var3.category;
                var1 = var1.guild;
                var1 = var1.optInEnabled;
                var1 = var6.bind(var7)(var5, var4, var1);
                var3['subtitle'] = var1;
case 313:
                var1 = {};
                var3 = new Array(0);
                var1['threadIds'] = var3;
                var1['renderLevel'] = var2;
                return var1;
            }
        };
        var5['value'] = var6;
        var1[1] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var20 = var20.bind(var1)(var21);
    var _closure1_slot61 = var20;
    var21 = var16.Set;
    var20 = var16.Object;
    var16 = var20.values;
    var27 = var16.bind(var20)(var22);
    var20 = var21.prototype;
    var20 = Object.create(var20, {constructor: {value: var21}});
    var28 = var20;
    var16 = new var28[var21](var27, var26);
    var16 = var16 instanceof Object ? var16 : var20;
    var _closure1_slot62 = var16;
    var16 = 44;
    var16 = var18[var16];
    var18 = var17.bind(var1)(var16);
    var17 = var18.fileFinishedImporting;
    var16 = 'modules/guild_sidebar/ChannelListState.tsx';
    var16 = var17.bind(var18)(var16);
    var3['default'] = var15;
    var3['MAX_NEW_CHANNELS_TO_SHOW'] = var14;
    var3['ChannelListSections'] = var13;
    var3['SECTION_INDEX_CHANNEL_NOTICES'] = var12;
    var3['SECTION_INDEX_GUILD_ACTIONS'] = var11;
    var3['SECTION_INDEX_FAVORITES'] = var10;
    var3['SECTION_INDEX_RECENTS'] = var9;
    var3['SECTION_INDEX_UNCATEGORIZED_CHANNELS'] = var8;
    var3['SECTION_INDEX_FIRST_NAMED_CATEGORY'] = var7;
    var3['ChannelListFavoritesCategory'] = var6;
    var3['ChannelListVoiceChannelsCategory'] = var5;
    var3['computeSubtitle'] = var4;
    var3['computeThreadIds'] = var2;
    return var1;
})();