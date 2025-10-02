// app/stores/DraftStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
case 2: // try_start_0
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
case 3: // try_end0
            _fun0001_ip = 4; continue _fun0001;
case 5: // catch_target0
            CatchBlockStart(arg_register=1);
case 4:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot15 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
case 6:
            if(var2) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var2 = var3.@@iterator;
case 8:
            if(var2) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0002_ip = 16; continue _fun0002 }
case 17:
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
            if(!var7) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var7 = var3.constructor;
case 18:
            var10 = var9;
            if(!var7) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            var7 = var3.constructor;
            var10 = var7.name;
case 20:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0002_ip = 22; continue _fun0002 }
case 23:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0002_ip = 22; continue _fun0002 }
case 24:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0002_ip = 25; continue _fun0002 }
case 26:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0002_ip = 27; continue _fun0002 }
case 25:
            var9 = _closure1_slot17;
            var7 = var9.bind(var8)(var3, var8);
case 27:
            _fun0002_ip = 28; continue _fun0002;
case 22:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
case 28:
            var6 = var7;
            _fun0002_ip = 14; continue _fun0002;
case 16:
            var7 = _closure1_slot17;
            var6 = var7.bind(var8)(var3, var8);
case 14:
            var4 = var6;
            if(var4) { _fun0002_ip = 12; continue _fun0002 }
case 29:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
case 12:
            if(!var4) { _fun0002_ip = 30; continue _fun0002 }
case 31:
            _closure2_slot0 = var4;
case 30:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0003_ip = 32; continue _fun0003 }
case 33:
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
                    _fun0003_ip = 34; continue _fun0003;
case 32:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
case 34:
                    return var1;
                }
            };
            return var1;
case 10:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0004_ip = 35; continue _fun0004 }
case 36:
            var2 = var4.length;
            var1 = var3 > var2;
case 35:
            var2 = undefined;
            if(!var1) { _fun0004_ip = 37; continue _fun0004 }
case 38:
            var2 = var4.length;
case 37:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0004_ip = 3; continue _fun0004 }
case 8:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0004_ip = 8; continue _fun0004 }
case 3:
            return var1;
        }
    };
    var _closure1_slot17 = var1;
    var1 = function getUserDrafts(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var4 = arg1;
            var1 = _closure1_slot14;
            var1 = var1[var4];
            var3 = null;
            if(!(var3 == var1)) { _fun0005_ip = 37; continue _fun0005 }
case 33:
            var3 = _closure1_slot14;
            var2 = {};
            var3[var4] = var2;
            var1 = var2;
case 37:
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var10 = function handleChanged(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var1 = arg1;
            var2 = var1.type;
            var9 = var1.channelId;
            var10 = var1.draft;
            var4 = var1.draftType;
            var3 = _closure1_slot10;
            var1 = var3.getChannel;
            var5 = var1.bind(var3)(var9);
            var7 = null;
            var8 = var7 == var5;
            var1 = undefined;
            var3 = undefined;
            if(var8) { _fun0006_ip = 11; continue _fun0006 }
case 8:
            var3 = var5.template;
case 11:
            if(!(var10 === var3)) { _fun0006_ip = 39; continue _fun0006 }
case 40:
            var10 = '';
case 39:
            var5 = _closure1_slot9;
            var3 = var5.getId;
            var5 = var3.bind(var5)();
            if(!(var7 != var5)) { _fun0006_ip = 41; continue _fun0006 }
case 42:
            if(!(var7 != var10)) { _fun0006_ip = 41; continue _fun0006 }
case 43:
            var3 = '';
            if(!(var3 === var10)) { _fun0006_ip = 44; continue _fun0006 }
case 41:
            var3 = _closure1_slot19;
            var3 = var3.bind(var1)(var9, var4);
            _fun0006_ip = 45; continue _fun0006;
case 44:
            var3 = _closure1_slot18;
            var8 = var3.bind(var1)(var5);
            var3 = var8[var9];
            if(!(var7 == var3)) { _fun0006_ip = 46; continue _fun0006 }
case 47:
            var5 = {};
            var8[var9] = var5;
            var3 = var5;
case 46:
            var9 = var10.length;
            var8 = _closure1_slot12;
            var5 = var10;
            if(!(var9 > var8)) { _fun0006_ip = 48; continue _fun0006 }
case 49:
            var9 = var10.substr;
            var8 = _closure1_slot12;
            var6 = 0;
            var5 = var9.bind(var10)(var6, var8);
case 48:
            var6 = var3[var4];
            var7 = var7 == var6;
            var1 = undefined;
            if(var7) { _fun0006_ip = 50; continue _fun0006 }
case 51:
            var1 = var6.draft;
case 50:
            if(!(var5 !== var1)) { _fun0006_ip = 52; continue _fun0006 }
case 53:
            var1 = {};
            var6 = global;
            var7 = var6.Date;
            var6 = var7.now;
            var6 = var6.bind(var7)();
            var1['timestamp'] = var6;
            var1['draft'] = var5;
            var3[var4] = var1;
case 45:
            var1 = 'DRAFT_SAVE';
            var1 = var1 === var2;
            return var1;
case 52:
            var1 = false;
            return var1;
        }
    };
    var1 = function deleteDraft(arg1, arg2) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var3 = arg1;
            var6 = arguments[2];
            var1 = undefined;
            if(!(var6 === var1)) { _fun0007_ip = 54; continue _fun0007 }
case 55:
            var4 = _closure1_slot9;
            var2 = var4.getId;
            var6 = var2.bind(var4)();
case 54:
            var5 = null;
            if(!(var5 != var6)) { _fun0007_ip = 56; continue _fun0007 }
case 57:
            var2 = _closure1_slot18;
            var2 = var2.bind(var1)(var6);
            var6 = var2[var3];
            if(!(var5 != var6)) { _fun0007_ip = 58; continue _fun0007 }
case 8:
            var5 = arg2;
            var5 = delete var6[var5];
            var5 = _closure1_slot1;
            var7 = _closure1_slot2;
            var4 = 10;
            var4 = var7[var4];
            var5 = var5.bind(var1)(var4);
            var4 = var5.isEmpty;
            var4 = var4.bind(var5)(var6);
            if(!var4) { _fun0007_ip = 59; continue _fun0007 }
case 15:
            var2 = delete var2[var3];
case 59:
            return var1;
case 58:
            var1 = false;
            return var1;
case 56:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var1 = function pruneNonexistentChannels() {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var2 = _closure1_slot9;
            var1 = var2.getId;
            var3 = var1.bind(var2)();
            var7 = null;
            if(!(var7 != var3)) { _fun0008_ip = 60; continue _fun0008 }
case 35:
            var1 = _closure1_slot11;
            var2 = var1.totalUnavailableGuilds;
            var1 = 0;
            if(!(!(var2 > var1))) { _fun0008_ip = 60; continue _fun0008 }
case 61:
            var2 = _closure1_slot18;
            var1 = undefined;
            var6 = var2.bind(var1)(var3);
            var4 = var6;
            for(var1 in var4)
case 11:
            {
case 3:
                var9 = var1;
                var11 = _closure1_slot10;
                var10 = var11.getChannel;
                var10 = var10.bind(var11)(var9);
                if(var7 != var10) { _fun0008_ip = 11; continue _fun0008 }
case 43:
                var9 = delete var6[var9];
                _fun0008_ip = 11; continue _fun0008;
            }
case 60:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot20 = var1;
    var11 = function handleChannelDelete(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var1 = arg1;
            var1 = var1.channel;
            var2 = var1.id;
            var4 = _closure1_slot9;
            var3 = var4.getId;
            var4 = var3.bind(var4)();
            var3 = null;
            if(!(var3 != var4)) { _fun0009_ip = 62; continue _fun0009 }
case 63:
            var3 = _closure1_slot18;
            var1 = undefined;
            var1 = var3.bind(var1)(var4);
            var1 = delete var1[var2];
case 62:
            var1 = false;
            return var1;
        }
    };
    var1 = global;
    var9 = var1.Object;
    var4 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var9)(var3, var1, var2);
    var18 = 0;
    var2 = var7[var18];
    var1 = undefined;
    var2 = var8.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var17 = 1;
    var2 = var7[var17];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var16 = 2;
    var2 = var7[var16];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var15 = 3;
    var2 = var7[var15];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var14 = 4;
    var2 = var7[var14];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var13 = 5;
    var2 = var7[var13];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var12 = 6;
    var2 = var7[var12];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot9 = var2;
    var9 = 7;
    var2 = var7[var9];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot10 = var2;
    var2 = 8;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot11 = var2;
    var2 = 9;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var4 = var2.MAX_MESSAGE_LENGTH_PREMIUM;
    var2 = 500;
    var2 = var4 + var2;
    var _closure1_slot12 = var2;
    var2 = {};
    var2['ChannelMessage'] = var18;
    var4 = 'ChannelMessage';
    var2[var18] = var4;
    var2['ThreadSettings'] = var17;
    var4 = 'ThreadSettings';
    var2[var17] = var4;
    var2['FirstThreadMessage'] = var16;
    var4 = 'FirstThreadMessage';
    var2[var16] = var4;
    var2['ApplicationLauncherCommand'] = var15;
    var4 = 'ApplicationLauncherCommand';
    var2[var15] = var4;
    var2['Poll'] = var14;
    var4 = 'Poll';
    var2[var14] = var4;
    var2['SlashCommand'] = var13;
    var4 = 'SlashCommand';
    var2[var13] = var4;
    var2['ForwardContextMessage'] = var12;
    var4 = 'ForwardContextMessage';
    var2[var12] = var4;
    var2['InteractionModal'] = var9;
    var4 = 'InteractionModal';
    var2[var9] = var4;
    var _closure1_slot13 = var2;
    var4 = {};
    var _closure1_slot14 = var4;
    var4 = 13;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var9 = var4.PersistedStore;
    var4 = function(arg1) {
        var4 = function DraftStore() {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot3;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot6;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot5;
                var1 = _closure1_slot15;
                var1 = var1.bind(var3)();
                if(var1) { _fun0010_ip = 39; continue _fun0010 }
case 62:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0010_ip = 64; continue _fun0010;
case 39:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 64:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var1 = arg1;
                var6 = this;
                var14 = null;
                if(!(var14 == var1)) { _fun0011_ip = 36; continue _fun0011 }
case 55:
                var1 = {};
case 36:
                _closure1_slot14 = var1;
                var4 = _closure1_slot16;
                var5 = _closure1_slot1;
                var1 = _closure1_slot2;
                var13 = 11;
                var3 = var1[var13];
                var1 = undefined;
                var7 = var5.bind(var1)(var3);
                var5 = var7.entries;
                var3 = _closure1_slot14;
                var3 = var5.bind(var7)(var3);
                var12 = var4.bind(var1)(var3);
                var4 = var12.bind(var1)();
                var3 = var4.done;
                var11 = 2;
                var10 = 0;
                var9 = 1;
                var8 = '';
                var7 = var4;
                var5 = undefined;
                var4 = undefined;
                if(var3) { _fun0011_ip = 65; continue _fun0011 }
case 66:
                var15 = var7.value;
                var3 = _closure1_slot8;
                var3 = var3.bind(var1)(var15, var11);
                var17 = var3[var10];
                var18 = var3[var9];
                var15 = _closure1_slot16;
                var16 = _closure1_slot1;
                var3 = _closure1_slot2;
                var3 = var3[var13];
                var16 = var16.bind(var1)(var3);
                var3 = var16.entries;
                var3 = var3.bind(var16)(var18);
                var16 = var15.bind(var1)(var3);
                var15 = var16.bind(var1)();
                var3 = var15.done;
                if(var3) { _fun0011_ip = 67; continue _fun0011 }
case 68:
                var18 = var15.value;
                var3 = _closure1_slot8;
                var3 = var3.bind(var1)(var18, var11);
                var19 = var3[var10];
                var18 = var3[var9];
                var3 = _closure1_slot13;
                var3 = var3.ChannelMessage;
                var18 = var18[var3];
                if(!(var14 != var18)) { _fun0011_ip = 69; continue _fun0011 }
case 70:
                var3 = var18.draft;
                var3 = var8 !== var3;
                if(!var3) { _fun0011_ip = 27; continue _fun0011 }
case 45:
                var21 = var18.draft;
                var20 = var21.trim;
                var20 = var20.bind(var21)();
                var3 = var8 !== var20;
case 27:
                if(var3) { _fun0011_ip = 69; continue _fun0011 }
case 71:
                var20 = _closure1_slot19;
                var3 = _closure1_slot13;
                var3 = var3.ChannelMessage;
                var3 = var20.bind(var1)(var19, var3, var17);
case 69:
                var20 = var16.bind(var1)();
                var3 = var20.done;
                var15 = var20;
                var5 = var19;
                var4 = var18;
                if(!var3) { _fun0011_ip = 68; continue _fun0011 }
case 67:
                var15 = var12.bind(var1)();
                var3 = var15.done;
                var7 = var15;
                if(!var3) { _fun0011_ip = 66; continue _fun0011 }
case 65:
                var5 = var6.waitFor;
                var4 = _closure1_slot9;
                var3 = _closure1_slot10;
                var2 = _closure1_slot11;
                var2 = var5.bind(var6)(var4, var3, var2);
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(6);
        var1[0] = var5;
        var5 = {};
        var7 = 'getState';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot14;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getThreadDraftWithParentMessageId';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var4 = this;
                var _closure3_slot0 = var4;
                var1 = arg1;
                var _closure3_slot1 = var1;
                var2 = _closure1_slot9;
                var1 = var2.getId;
                var7 = var1.bind(var2)();
                var2 = null;
                if(!(var2 == var7)) { _fun0012_ip = 72; continue _fun0012 }
case 61:
                var1 = undefined;
                return var1;
case 72:
                var6 = _closure1_slot18;
                var1 = undefined;
                var7 = var6.bind(var1)(var7);
                var6 = _closure1_slot1;
                var8 = _closure1_slot2;
                var5 = 11;
                var5 = var8[var5];
                var6 = var6.bind(var1)(var5);
                var5 = var6.keys;
                var6 = var5.bind(var6)(var7);
                var5 = var6.find;
                var3 = function(arg1) {
                    _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                        var4 = _closure3_slot0;
                        var3 = var4.getThreadSettings;
                        var2 = arg1;
                        var3 = var3.bind(var4)(var2);
                        var2 = null;
                        var4 = var2 == var3;
                        var2 = undefined;
                        if(var4) { _fun0013_ip = 73; continue _fun0013 }
case 74:
                        var2 = var3.parentMessageId;
case 73:
                        var1 = _closure3_slot1;
                        var1 = var2 === var1;
                        return var1;
                    }
                };
                var3 = var5.bind(var6)(var3);
                var2 = var2 != var3;
                if(!var2) { _fun0012_ip = 75; continue _fun0012 }
case 76:
                var2 = var4.getThreadSettings;
                var1 = var2.bind(var4)(var3);
case 75:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getRecentlyEditedDrafts';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                var2 = arg1;
                var _closure3_slot0 = var2;
                var4 = _closure1_slot9;
                var3 = var4.getId;
                var4 = var3.bind(var4)();
                var3 = null;
                if(!(var3 != var4)) { _fun0014_ip = 77; continue _fun0014 }
case 57:
                var3 = _closure1_slot18;
                var6 = undefined;
                var4 = var3.bind(var6)(var4);
                var5 = _closure1_slot1;
                var7 = _closure1_slot2;
                var3 = 10;
                var3 = var7[var3];
                var3 = var5.bind(var6)(var3);
                var5 = var3.bind(var6)(var4);
                var4 = var5.mapValues;
                var3 = function(arg1) {
                    _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                        var3 = arg1;
                        var1 = null;
                        var2 = var1 == var3;
                        var1 = undefined;
                        if(var2) { _fun0015_ip = 78; continue _fun0015 }
case 36:
                        var2 = _closure3_slot0;
                        var1 = var3[var2];
case 78:
                        return var1;
                    }
                };
                var4 = var4.bind(var5)(var3);
                var3 = var4.pickBy;
                var5 = _closure1_slot0;
                var2 = 12;
                var2 = var7[var2];
                var2 = var5.bind(var6)(var2);
                var2 = var2.isNotNullish;
                var3 = var3.bind(var4)(var2);
                var2 = var3.toPairs;
                var4 = var2.bind(var3)();
                var3 = var4.map;
                var2 = function(arg1) {
                    _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                        var8 = arg1;
                        var2 = var8[Symbol.iterator];
                        var8 = var2().next;
                        var10 = undefined;
                        var3 = undefined;
                        var4 = undefined;
                        var9 = var8().value;
                        var11 = var2;
                        var11 = var11 === var10;
                        var3 = var11;
                        if(var11) { _fun0016_ip = 74; continue _fun0016 }
case 54:
                        var4 = var9;
case 74:
                        var7 = var4;
                        var4 = undefined;
                        var9 = var3;
                        if(var9) { _fun0016_ip = 79; continue _fun0016 }
case 72:
                        var8 = var8().value;
                        var9 = var2;
                        var9 = var9 === var10;
                        var3 = var9;
                        if(var9) { _fun0016_ip = 79; continue _fun0016 }
case 80:
                        var4 = var8;
case 79: // try_start_0
                        var6 = var4.timestamp;
                        var5 = var4.draft;
case 81: // try_end0
                        var4 = var3;
                        if(var4) { _fun0016_ip = 82; continue _fun0016 }
case 83:
                        var2.return();
case 82:
                        var4 = {};
                        var4['channelId'] = var7;
                        var4['timestamp'] = var6;
                        var4['draft'] = var5;
                        return var4;
case 58: // catch_target0
                        CatchBlockStart(arg_register=0);
                        _fun0016_ip = 84; continue _fun0016;
case 56:
                        CatchBlockStart(arg_register=0);
case 84:
                        if(var3) { _fun0016_ip = 85; continue _fun0016 }
case 44:
                        var2.return();
case 85:
                        throw var1;
                    }
                };
                var3 = var3.bind(var4)(var2);
                var2 = var3.sortBy;
                var1 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.timestamp;
                    var1 = -var1;
                    return var1;
                };
                var2 = var2.bind(var3)(var1);
                var1 = var2.value;
                var1 = var1.bind(var2)();
                return var1;
case 77:
                var1 = new Array(0);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getDraft';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                var3 = _closure1_slot9;
                var2 = var3.getId;
                var4 = var2.bind(var3)();
                var2 = null;
                if(!(var2 != var4)) { _fun0017_ip = 3; continue _fun0017 }
case 35:
                var3 = _closure1_slot18;
                var1 = undefined;
                var3 = var3.bind(var1)(var4);
                var1 = arg1;
                var3 = var3[var1];
                if(!(var2 != var3)) { _fun0017_ip = 32; continue _fun0017 }
case 86:
                var1 = arg2;
                var1 = var3[var1];
                if(!(var2 == var1)) { _fun0017_ip = 87; continue _fun0017 }
case 32:
                var2 = '';
                return var2;
case 87:
                var1 = var1.draft;
                return var1;
case 3:
                var1 = '';
                return var1;
            }
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getThreadSettings';
        var5['key'] = var7;
        var6 = function value(arg1) {
            _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                var2 = _closure1_slot9;
                var1 = var2.getId;
                var5 = var1.bind(var2)();
                var1 = null;
                if(!(var1 != var5)) { _fun0018_ip = 88; continue _fun0018 }
case 35:
                var4 = _closure1_slot18;
                var2 = undefined;
                var4 = var4.bind(var2)(var5);
                var2 = arg1;
                var4 = var4[var2];
                var5 = var1 == var4;
                var2 = null;
                if(var5) { _fun0018_ip = 89; continue _fun0018 }
case 90:
                var3 = _closure1_slot13;
                var3 = var3.ThreadSettings;
                var2 = var4[var3];
case 89:
                return var2;
case 88:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[5] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var9 = var4.bind(var1)(var9);
    var4 = 'DraftStore';
    var9['displayName'] = var4;
    var9['persistKey'] = var4;
    var4 = new Array(2);
    var12 = function(arg1) {
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
            var1 = arg1;
            var2 = null;
            if(!(var2 != var1)) { _fun0019_ip = 91; continue _fun0019 }
case 92:
            var7 = var1;
            var2 = 'timestamp';
            for(var4 in var7)
case 93:
            {
case 63:
                var10 = var4;
                var9 = var1[var10];
                var9 = var2 in var9;
                if(!var9) { _fun0019_ip = 93; continue _fun0019 }
case 90:
                var9 = {};
                var11 = _closure1_slot13;
                var12 = var11.ChannelMessage;
                var11 = var1[var10];
                var9[var12] = var11;
                var1[var10] = var9;
                _fun0019_ip = 93; continue _fun0019;
            }
case 94:
            return var1;
case 91:
            var1 = {};
            return var1;
        }
    };
    var4[0] = var12;
    var12 = function(arg1) {
        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
            var8 = arg1;
            var2 = _closure1_slot9;
            var1 = var2.getId;
            var2 = var1.bind(var2)();
            var1 = null;
            if(!(var1 != var8)) { _fun0020_ip = 95; continue _fun0020 }
case 96:
            if(!(var1 != var2)) { _fun0020_ip = 95; continue _fun0020 }
case 7:
            var1 = {};
            var7 = {};
            var1[var2] = var7;
            var5 = var8;
            for(var2 in var5)
case 9:
            {
case 97:
                var10 = var2;
                var9 = var8[var10];
                var7[var10] = var9;
                _fun0020_ip = 9; continue _fun0020;
            }
case 98:
            return var1;
case 95:
            var1 = {};
            return var1;
        }
    };
    var4[1] = var12;
    var9['migrations'] = var4;
    var4 = 14;
    var4 = var7[var4];
    var21 = var8.bind(var1)(var4);
    var4 = {};
    var12 = function handleConnectionOpen() {
        _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
            var3 = _closure1_slot9;
            var2 = var3.getId;
            var4 = var2.bind(var3)();
            var2 = _closure1_slot14;
            var2 = var4 in var2;
            if(var2) { _fun0021_ip = 73; continue _fun0021 }
case 38:
            var3 = _closure1_slot14;
            var2 = {};
            var3[var4] = var2;
case 73:
            var2 = _closure1_slot20;
            var1 = undefined;
            var1 = var2.bind(var1)();
            var1 = false;
            return var1;
        }
    };
    var4['CONNECTION_OPEN'] = var12;
    var12 = function handleLogout(arg1) {
        _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
            var1 = arg1;
            var1 = var1.isSwitchingAccount;
            if(var1) { _fun0022_ip = 99; continue _fun0022 }
case 55:
            var1 = {};
            _closure1_slot14 = var1;
case 99:
            var1 = undefined;
            return var1;
        }
    };
    var4['LOGOUT'] = var12;
    var12 = function handleMultiAccountRemove(arg1) {
        _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
            var1 = arg1;
            var4 = var1.userId;
            var3 = _closure1_slot14;
            var3 = var4 in var3;
            if(!var3) { _fun0023_ip = 57; continue _fun0023 }
case 100:
            var2 = _closure1_slot14;
            var1 = var1.userId;
            var1 = delete var2[var1];
case 57:
            var1 = undefined;
            return var1;
        }
    };
    var4['MULTI_ACCOUNT_REMOVE_ACCOUNT'] = var12;
    var12 = function handleGuildDelete() {
        var2 = _closure1_slot20;
        var1 = undefined;
        var1 = var2.bind(var1)();
        var1 = false;
        return var1;
    };
    var4['GUILD_DELETE'] = var12;
    var4['CHANNEL_DELETE'] = var11;
    var4['THREAD_DELETE'] = var11;
    var11 = function handleThreadCreate(arg1) {
        _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
            var1 = arg1;
            var3 = var1.channel;
            var4 = _closure1_slot9;
            var1 = var4.getId;
            var6 = var1.bind(var4)();
            var4 = null;
            if(!(var4 != var6)) { _fun0024_ip = 101; continue _fun0024 }
case 102:
            var1 = var3.ownerId;
            if(!(var1 !== var6)) { _fun0024_ip = 101; continue _fun0024 }
case 103:
            var5 = _closure1_slot18;
            var1 = undefined;
            var6 = var5.bind(var1)(var6);
            var5 = var3.parent_id;
            var7 = var6[var5];
            if(!(var4 != var7)) { _fun0024_ip = 104; continue _fun0024 }
case 81:
            var5 = _closure1_slot13;
            var5 = var5.ThreadSettings;
            var5 = var7[var5];
            if(!(var4 != var5)) { _fun0024_ip = 105; continue _fun0024 }
case 15:
            var7 = var5.parentMessageId;
            var8 = _closure1_slot1;
            var9 = _closure1_slot2;
            var5 = 11;
            var5 = var9[var5];
            var9 = var8.bind(var1)(var5);
            var8 = var9.castChannelIdAsMessageId;
            var5 = var3.id;
            var5 = var8.bind(var9)(var5);
            if(!(var7 === var5)) { _fun0024_ip = 106; continue _fun0024 }
case 107:
            var5 = var3.parent_id;
            var7 = var6[var5];
            if(!(var4 != var7)) { _fun0024_ip = 108; continue _fun0024 }
case 109:
            var5 = _closure1_slot13;
            var5 = var5.FirstThreadMessage;
            var7 = var7[var5];
            var8 = var4 == var7;
            var5 = undefined;
            if(var8) { _fun0024_ip = 110; continue _fun0024 }
case 111:
            var5 = var7.draft;
case 110:
            var7 = var4 != var5;
            var4 = '';
            var9 = var4;
            if(!var7) { _fun0024_ip = 112; continue _fun0024 }
case 26:
            var9 = var5;
case 112:
            if(!(var4 !== var9)) { _fun0024_ip = 113; continue _fun0024 }
case 114:
            var5 = var3.id;
            var4 = {};
            var7 = _closure1_slot13;
            var8 = var7.ChannelMessage;
            var7 = {};
            var10 = global;
            var11 = var10.Date;
            var10 = var11.now;
            var10 = var10.bind(var11)();
            var7['timestamp'] = var10;
            var7['draft'] = var9;
            var4[var8] = var7;
            var6[var5] = var4;
case 113:
            var4 = _closure1_slot19;
            var6 = var3.parent_id;
            var2 = _closure1_slot13;
            var5 = var2.ThreadSettings;
            var5 = var4.bind(var1)(var6, var5);
            var3 = var3.parent_id;
            var2 = var2.FirstThreadMessage;
            var2 = var4.bind(var1)(var3, var2);
            return var1;
case 108:
            var1 = false;
            return var1;
case 106:
            var1 = false;
            return var1;
case 105:
            var1 = false;
            return var1;
case 104:
            var1 = false;
            return var1;
case 101:
            var1 = false;
            return var1;
        }
    };
    var4['THREAD_CREATE'] = var11;
    var4['DRAFT_SAVE'] = var10;
    var4['DRAFT_CHANGE'] = var10;
    var10 = function handleDraftClear(arg1) {
        var1 = arg1;
        var4 = var1.channelId;
        var3 = var1.draftType;
        var2 = _closure1_slot19;
        var1 = undefined;
        var1 = var2.bind(var1)(var4, var3);
        return var1;
    };
    var4['DRAFT_CLEAR'] = var10;
    var5 = function handleThreadSettingsDraftChanged(arg1) {
        _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
            var1 = arg1;
            var5 = var1.channelId;
            var4 = var1.draft;
            var3 = _closure1_slot9;
            var2 = var3.getId;
            var7 = var2.bind(var3)();
            var2 = null;
            if(!(var2 != var7)) { _fun0025_ip = 115; continue _fun0025 }
case 116:
            var6 = _closure1_slot18;
            var3 = undefined;
            var6 = var6.bind(var3)(var7);
            var3 = var6[var5];
            if(!(var2 == var3)) { _fun0025_ip = 40; continue _fun0025 }
case 32:
            var2 = {};
            var6[var5] = var2;
            var3 = var2;
case 40:
            var6 = _closure1_slot13;
            var2 = var6.ThreadSettings;
            var1 = {};
            var7 = global;
            var8 = var7.Date;
            var7 = var8.now;
            var7 = var7.bind(var8)();
            var1['timestamp'] = var7;
            var6 = var6.ThreadSettings;
            var9 = var3[var6];
            var10 = var1;
            var6 = copyDataProperties(var10, var9);
            var10 = var1;
            var9 = var4;
            var4 = copyDataProperties(var10, var9);
            var4 = 'parentChannelId';
            var1[var4] = var5;
            var3[var2] = var1;
case 115:
            var1 = undefined;
            return var1;
        }
    };
    var4['THREAD_SETTINGS_DRAFT_CHANGE'] = var5;
    var5 = var9.prototype;
    var5 = Object.create(var5, {constructor: {value: var9}});
    var22 = var5;
    var20 = var4;
    var4 = new var22[var9](var21, var20, var19);
    var4 = var4 instanceof Object ? var4 : var5;
    var5 = 15;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'stores/DraftStore.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['DraftType'] = var2;
    return var1;
})();