// app/modules/guild_scheduled_events/GuildScheduledEventStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var10 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var11 = dependencyMap;
    var _closure1_slot0 = var12;
    var _closure1_slot1 = var11;
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
            _closure1_slot19 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot19 = var1;
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
            var9 = _closure1_slot21;
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
            var7 = _closure1_slot21;
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
    var _closure1_slot20 = var1;
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
    var _closure1_slot21 = var1;
    var6 = function scheduledEventSort(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var3 = arg1;
            var6 = var3.id;
            var4 = var3.scheduled_start_time;
            var2 = _closure1_slot29;
            var1 = undefined;
            var1 = var2.bind(var1)(var3);
            var5 = '\x01';
            if(!var1) { _fun0005_ip = 39; continue _fun0005 }
case 40:
            var5 = '\x00';
case 39:
            var1 = global;
            var2 = var1.Date;
            var3 = var2.prototype;
            var3 = Object.create(var3, {constructor: {value: var2}});
            var12 = var3;
            var11 = var4;
            var2 = new var12[var2](var11, var10);
            var3 = var2 instanceof Object ? var2 : var3;
            var2 = var3.getTime;
            var9 = var2.bind(var3)();
            var1 = var1.HermesInternal;
            var3 = var1.concat;
            var12 = '';
            var1 = '-';
            var11 = var5;
            var10 = var1;
            var8 = var1;
            var7 = var6;
            var1 = var12[var3](var11, var10, var9, var8, var7, var6);
            return var1;
        }
    };
    var1 = function saveEvent(arg1) {
        var5 = arg1;
        var4 = _closure1_slot13;
        var3 = var4.set;
        var1 = var5.id;
        var1 = var3.bind(var4)(var1, var5);
        var3 = _closure1_slot14;
        var1 = 1;
        var1 = var3 + var1;
        _closure1_slot14 = var1;
        var1 = undefined;
        return var1;
    };
    var _closure1_slot22 = var1;
    var1 = function deleteEvent(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var4 = arg1;
            var2 = arguments[1];
            var1 = undefined;
            if(!(var2 === var1)) { _fun0006_ip = 36; continue _fun0006 }
case 41:
            var2 = true;
case 36:
            var6 = _closure1_slot13;
            var5 = var6.delete;
            var5 = var5.bind(var6)(var4);
            var5 = _closure1_slot17;
            var5 = delete var5[var4];
            if(!var2) { _fun0006_ip = 42; continue _fun0006 }
case 43:
            var2 = _closure1_slot18;
            var2 = delete var2[var4];
case 42:
            var4 = _closure1_slot14;
            var2 = 1;
            var2 = var4 + var2;
            _closure1_slot14 = var2;
            return var1;
        }
    };
    var _closure1_slot23 = var1;
    var1 = function getEventRecurrenceId(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var1 = arg1;
            var2 = null;
            if(!(var2 == var1)) { _fun0007_ip = 44; continue _fun0007 }
case 45:
            var1 = _closure1_slot16;
case 44:
            return var1;
        }
    };
    var _closure1_slot24 = var1;
    var1 = function addGuildEventUser(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var5 = arg1;
            var4 = arguments[1];
            var2 = arguments[2];
            var1 = undefined;
            if(!(var4 === var1)) { _fun0008_ip = 46; continue _fun0008 }
case 47:
            var4 = true;
case 46:
            if(!(var2 === var1)) { _fun0008_ip = 35; continue _fun0008 }
case 48:
            var2 = true;
case 35:
            var9 = var5.guild_scheduled_event_id;
            var6 = _closure1_slot17;
            var7 = var6[var9];
            var6 = null;
            if(!(var6 == var7)) { _fun0008_ip = 32; continue _fun0008 }
case 6:
            var8 = _closure1_slot17;
            var7 = {};
            var8[var9] = var7;
case 32:
            var8 = _closure1_slot24;
            var7 = var5.guild_scheduled_event_exception_id;
            var8 = var8.bind(var1)(var7);
            var7 = _closure1_slot17;
            var7 = var7[var9];
            var7 = var7[var8];
            if(!(var6 == var7)) { _fun0008_ip = 49; continue _fun0008 }
case 50:
            var7 = _closure1_slot17;
            var10 = var7[var9];
            var7 = {};
            var10[var8] = var7;
case 49:
            var7 = _closure1_slot17;
            var7 = var7[var9];
            var8 = var7[var8];
            var7 = var5.user_id;
            var8[var7] = var5;
            if(!var4) { _fun0008_ip = 51; continue _fun0008 }
case 52:
            var7 = _closure1_slot24;
            var4 = var5.guild_scheduled_event_exception_id;
            var8 = var7.bind(var1)(var4);
            var7 = _closure1_slot18;
            var4 = var5.guild_scheduled_event_id;
            var7 = var7[var4];
            var9 = var6 == var7;
            var4 = undefined;
            if(var9) { _fun0008_ip = 53; continue _fun0008 }
case 54:
            var4 = var7[var8];
case 53:
            var7 = var6 != var4;
            var8 = 0;
            if(!var7) { _fun0008_ip = 55; continue _fun0008 }
case 56:
            var8 = var4;
case 55:
            var4 = var5.guild_scheduled_event_exception_id;
            if(!(var6 != var4)) { _fun0008_ip = 57; continue _fun0008 }
case 58:
            var7 = var5.response;
            var4 = _closure1_slot11;
            var4 = var4.UNINTERESTED;
            if(!(var7 !== var4)) { _fun0008_ip = 59; continue _fun0008 }
case 57:
            var4 = var5.guild_scheduled_event_exception_id;
            var6 = var6 == var4;
            var9 = -1;
            var4 = var9;
            if(!var6) { _fun0008_ip = 60; continue _fun0008 }
case 61:
            var7 = var5.response;
            var6 = _closure1_slot11;
            var6 = var6.INTERESTED;
            var4 = var9;
            if(!(var7 === var6)) { _fun0008_ip = 60; continue _fun0008 }
case 59:
            var4 = 1;
case 60:
            var7 = _closure1_slot27;
            var6 = var5.guild_scheduled_event_id;
            var5 = var5.guild_scheduled_event_exception_id;
            var4 = var8 + var4;
            var4 = var7.bind(var1)(var6, var5, var4);
case 51:
            if(!var2) { _fun0008_ip = 62; continue _fun0008 }
case 63:
            var4 = _closure1_slot14;
            var2 = 1;
            var2 = var4 + var2;
            _closure1_slot14 = var2;
case 62:
            return var1;
        }
    };
    var _closure1_slot25 = var1;
    var1 = function removeGuildEventUser(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var5 = arg1;
            var2 = arguments[1];
            var1 = undefined;
            if(!(var2 === var1)) { _fun0009_ip = 36; continue _fun0009 }
case 41:
            var2 = true;
case 36:
            var6 = _closure1_slot24;
            var4 = var5.guild_scheduled_event_exception_id;
            var9 = var6.bind(var1)(var4);
            var6 = _closure1_slot17;
            var4 = var5.guild_scheduled_event_id;
            var7 = var6[var4];
            var6 = null;
            var8 = var6 == var7;
            var4 = undefined;
            if(var8) { _fun0009_ip = 64; continue _fun0009 }
case 65:
            var8 = var7[var9];
            var7 = var6 == var8;
            var4 = undefined;
            if(var7) { _fun0009_ip = 64; continue _fun0009 }
case 3:
            var7 = var5.user_id;
            var4 = var8[var7];
case 64:
            var8 = var6 != var4;
            var7 = var5.user_id;
            var10 = _closure1_slot7;
            var4 = var10.getId;
            var4 = var4.bind(var10)();
            var7 = var7 === var4;
            var4 = !var8;
            if(var8) { _fun0009_ip = 66; continue _fun0009 }
case 67:
            var4 = var7;
case 66:
            if(var4) { _fun0009_ip = 68; continue _fun0009 }
case 69:
            var7 = _closure1_slot17;
            var4 = var5.guild_scheduled_event_id;
            var8 = var7[var4];
            var4 = var6 == var8;
            var7 = var8;
            if(var4) { _fun0009_ip = 19; continue _fun0009 }
case 70:
            var8 = var8[var9];
            var4 = var6 == var8;
            var7 = var8;
case 19:
            if(var4) { _fun0009_ip = 53; continue _fun0009 }
case 71:
            var4 = var5.user_id;
            var4 = delete var7[var4];
case 53:
            var7 = _closure1_slot24;
            var4 = var5.guild_scheduled_event_exception_id;
            var8 = var7.bind(var1)(var4);
            var7 = _closure1_slot18;
            var4 = var5.guild_scheduled_event_id;
            var7 = var7[var4];
            var9 = var6 == var7;
            var4 = undefined;
            if(var9) { _fun0009_ip = 57; continue _fun0009 }
case 72:
            var4 = var7[var8];
case 57:
            var7 = var6 != var4;
            var8 = 0;
            if(!var7) { _fun0009_ip = 73; continue _fun0009 }
case 74:
            var8 = var4;
case 73:
            var4 = var5.guild_scheduled_event_exception_id;
            if(!(var6 != var4)) { _fun0009_ip = 75; continue _fun0009 }
case 61:
            var7 = var5.response;
            var4 = _closure1_slot11;
            var4 = var4.UNINTERESTED;
            if(!(var7 !== var4)) { _fun0009_ip = 76; continue _fun0009 }
case 75:
            var4 = var5.guild_scheduled_event_exception_id;
            var6 = var6 == var4;
            var9 = 1;
            var4 = var9;
            if(!var6) { _fun0009_ip = 77; continue _fun0009 }
case 78:
            var7 = var5.response;
            var6 = _closure1_slot11;
            var6 = var6.INTERESTED;
            var4 = var9;
            if(!(var7 === var6)) { _fun0009_ip = 77; continue _fun0009 }
case 76:
            var4 = -1;
case 77:
            var7 = _closure1_slot27;
            var6 = var5.guild_scheduled_event_id;
            var5 = var5.guild_scheduled_event_exception_id;
            var4 = var8 + var4;
            var4 = var7.bind(var1)(var6, var5, var4);
            if(!var2) { _fun0009_ip = 68; continue _fun0009 }
case 79:
            var4 = _closure1_slot14;
            var2 = 1;
            var2 = var4 + var2;
            _closure1_slot14 = var2;
case 68:
            return var1;
        }
    };
    var _closure1_slot26 = var1;
    var1 = function setUserCount(arg1, arg2, arg3) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var3 = arg1;
            var5 = _closure1_slot24;
            var1 = undefined;
            var4 = arg2;
            var4 = var5.bind(var1)(var4);
            var5 = _closure1_slot18;
            var6 = var5[var3];
            var5 = null;
            if(!(var5 == var6)) { _fun0010_ip = 80; continue _fun0010 }
case 81:
            var6 = _closure1_slot18;
            var5 = {};
            var6[var3] = var5;
case 80:
            var2 = _closure1_slot18;
            var3 = var2[var3];
            var2 = arg3;
            var3[var4] = var2;
            return var1;
        }
    };
    var _closure1_slot27 = var1;
    var1 = function clearScheduledEventsForGuild(arg1, arg2) {
        var2 = arg2;
        var _closure2_slot0 = var2;
        var4 = _closure1_slot13;
        var3 = var4.values;
        var6 = _closure1_slot12;
        var5 = var6.GUILD_EVENT;
        var2 = arg1;
        var2 = var5.bind(var6)(var2);
        var3 = var3.bind(var4)(var2);
        var2 = var3.forEach;
        var1 = function(arg1) {
            var4 = _closure1_slot23;
            var1 = arg1;
            var3 = var1.id;
            var2 = _closure2_slot0;
            var1 = undefined;
            var2 = var4.bind(var1)(var3, var2);
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var _closure1_slot28 = var1;
    var14 = function handleGuildScheduledEventUpdateOrCreate(arg1) {
        var1 = arg1;
        var3 = var1.guildScheduledEvent;
        var2 = _closure1_slot22;
        var1 = undefined;
        var1 = var2.bind(var1)(var3);
        var1 = true;
        return var1;
    };
    var9 = function handleGuildScheduledEventExceptionCreateOrUpdate(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var1 = arg1;
            var5 = var1.eventException;
            var _closure2_slot0 = var5;
            var6 = _closure1_slot13;
            var4 = var6.get;
            var1 = var5.event_id;
            var1 = var4.bind(var6)(var1);
            var4 = null;
            if(!(var4 != var1)) { _fun0011_ip = 82; continue _fun0011 }
case 80:
            var6 = var1.guild_scheduled_event_exceptions;
            var4 = var6.findIndex;
            var3 = function(arg1) {
                var1 = arg1;
                var2 = var1.event_exception_id;
                var1 = _closure2_slot0;
                var1 = var1.event_exception_id;
                var1 = var2 === var1;
                return var1;
            };
            var3 = var4.bind(var6)(var3);
            var9 = var1.guild_scheduled_event_exceptions;
            var4 = new Array(0);
            var6 = 0;
            var10 = var4;
            var8 = 0;
            var7 = arraySpread(var10, var9, var8);
            if(!(!(var3 < var6))) { _fun0011_ip = 83; continue _fun0011 }
case 84:
            var4[var3] = var5;
            _fun0011_ip = 85; continue _fun0011;
case 83:
            var3 = var4.push;
            var3 = var3.bind(var4)(var5);
case 85:
            var3 = _closure1_slot22;
            var2 = {};
            var10 = var2;
            var9 = var1;
            var1 = copyDataProperties(var10, var9);
            var1 = 'guild_scheduled_event_exceptions';
            var2[var1] = var4;
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var1 = true;
            return var1;
case 82:
            var1 = false;
            return var1;
        }
    };
    var5 = function isGuildScheduledEventActive(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var2 = arg1;
            var3 = null;
            var1 = var3 != var2;
            if(!var1) { _fun0012_ip = 39; continue _fun0012 }
case 41:
            var4 = var3 == var2;
            var3 = undefined;
            if(var4) { _fun0012_ip = 86; continue _fun0012 }
case 48:
            var3 = var2.status;
case 86:
            var2 = _closure1_slot9;
            var2 = var2.ACTIVE;
            var1 = var3 === var2;
case 39:
            return var1;
        }
    };
    var _closure1_slot29 = var5;
    var4 = function isEventUpcoming(arg1) {
        var3 = _closure1_slot10;
        var2 = var3.has;
        var1 = arg1;
        var1 = var1.status;
        var1 = var2.bind(var3)(var1);
        var1 = !var1;
        return var1;
    };
    var _closure1_slot30 = var4;
    var1 = global;
    var13 = var1.Object;
    var8 = var13.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var13)(var3, var1, var7);
    var8 = 0;
    var7 = var11[var8];
    var1 = undefined;
    var7 = var12.bind(var1)(var7);
    var _closure1_slot2 = var7;
    var7 = 1;
    var7 = var11[var7];
    var7 = var12.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var7 = 2;
    var7 = var11[var7];
    var7 = var12.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var7 = 3;
    var7 = var11[var7];
    var7 = var12.bind(var1)(var7);
    var _closure1_slot5 = var7;
    var7 = 4;
    var7 = var11[var7];
    var7 = var12.bind(var1)(var7);
    var _closure1_slot6 = var7;
    var7 = 5;
    var7 = var11[var7];
    var7 = var12.bind(var1)(var7);
    var _closure1_slot7 = var7;
    var7 = 6;
    var7 = var11[var7];
    var7 = var12.bind(var1)(var7);
    var _closure1_slot8 = var7;
    var7 = 7;
    var7 = var11[var7];
    var7 = var10.bind(var1)(var7);
    var13 = var7.GuildScheduledEventStatus;
    var _closure1_slot9 = var13;
    var13 = var7.GuildScheduledEventStatusDone;
    var _closure1_slot10 = var13;
    var7 = var7.GuildScheduledEventUserResponses;
    var _closure1_slot11 = var7;
    var7 = {'EVENT': 'event', 'EVENT_ACTIVE': 'active', 'EVENT_UPCOMING': 'event-upcoming'};
    var13 = function GUILD_EVENT(arg1) {
        var1 = _closure1_slot12;
        var5 = var1.EVENT;
        var1 = global;
        var1 = var1.HermesInternal;
        var4 = var1.concat;
        var3 = '';
        var2 = arg1;
        var1 = '-';
        var1 = var4.bind(var3)(var2, var1, var5);
        return var1;
    };
    var7['GUILD_EVENT'] = var13;
    var13 = function GUILD_EVENT_ACTIVE(arg1) {
        var1 = _closure1_slot12;
        var5 = var1.EVENT_ACTIVE;
        var1 = global;
        var1 = var1.HermesInternal;
        var4 = var1.concat;
        var3 = '';
        var2 = arg1;
        var1 = '-';
        var1 = var4.bind(var3)(var2, var1, var5);
        return var1;
    };
    var7['GUILD_EVENT_ACTIVE'] = var13;
    var13 = function GUILD_EVENT_UPCOMING(arg1) {
        var1 = _closure1_slot12;
        var5 = var1.EVENT_UPCOMING;
        var1 = global;
        var1 = var1.HermesInternal;
        var4 = var1.concat;
        var3 = '';
        var2 = arg1;
        var1 = '-';
        var1 = var4.bind(var3)(var2, var1, var5);
        return var1;
    };
    var7['GUILD_EVENT_UPCOMING'] = var13;
    var13 = function CHANNEL_EVENT(arg1) {
        var1 = _closure1_slot12;
        var5 = var1.EVENT;
        var1 = global;
        var1 = var1.HermesInternal;
        var4 = var1.concat;
        var3 = '';
        var2 = arg1;
        var1 = '-';
        var1 = var4.bind(var3)(var2, var1, var5);
        return var1;
    };
    var7['CHANNEL_EVENT'] = var13;
    var13 = function CHANNEL_EVENT_ACTIVE(arg1) {
        var1 = _closure1_slot12;
        var5 = var1.EVENT_ACTIVE;
        var1 = global;
        var1 = var1.HermesInternal;
        var4 = var1.concat;
        var3 = '';
        var2 = arg1;
        var1 = '-';
        var1 = var4.bind(var3)(var2, var1, var5);
        return var1;
    };
    var7['CHANNEL_EVENT_ACTIVE'] = var13;
    var13 = function CHANNEL_EVENT_UPCOMING(arg1) {
        var1 = _closure1_slot12;
        var5 = var1.EVENT_UPCOMING;
        var1 = global;
        var1 = var1.HermesInternal;
        var4 = var1.concat;
        var3 = '';
        var2 = arg1;
        var1 = '-';
        var1 = var4.bind(var3)(var2, var1, var5);
        return var1;
    };
    var7['CHANNEL_EVENT_UPCOMING'] = var13;
    var _closure1_slot12 = var7;
    var13 = 8;
    var13 = var11[var13];
    var13 = var10.bind(var1)(var13);
    var16 = var13.SecondaryIndexMap;
    var13 = var16.prototype;
    var15 = Object.create(var13, {constructor: {value: var16}});
    var19 = function(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var7 = arg1;
            var8 = var7.guild_id;
            var4 = var7.entity_id;
            var5 = var7.channel_id;
            var1 = new Array(1);
            var1[0] = var8;
            var3 = null;
            if(!(var3 != var4)) { _fun0013_ip = 39; continue _fun0013 }
case 37:
            var2 = var1.push;
            var2 = var2.bind(var1)(var4);
case 39:
            var6 = var1.push;
            var9 = _closure1_slot12;
            var4 = var9.GUILD_EVENT;
            var4 = var4.bind(var9)(var8);
            var4 = var6.bind(var1)(var4);
            if(!(var3 != var5)) { _fun0013_ip = 87; continue _fun0013 }
case 88:
            var6 = var1.push;
            var9 = _closure1_slot12;
            var4 = var9.CHANNEL_EVENT;
            var4 = var4.bind(var9)(var5);
            var4 = var6.bind(var1)(var4);
case 87:
            var4 = _closure1_slot29;
            var6 = undefined;
            var4 = var4.bind(var6)(var7);
            if(!var4) { _fun0013_ip = 89; continue _fun0013 }
case 67:
            var9 = var1.push;
            var4 = _closure1_slot12;
            var4 = var4.EVENT_ACTIVE;
            var4 = var9.bind(var1)(var4);
            var9 = var1.push;
            var10 = _closure1_slot12;
            var4 = var10.GUILD_EVENT_ACTIVE;
            var4 = var4.bind(var10)(var8);
            var4 = var9.bind(var1)(var4);
            if(!(var3 != var5)) { _fun0013_ip = 89; continue _fun0013 }
case 18:
            var9 = var1.push;
            var10 = _closure1_slot12;
            var4 = var10.CHANNEL_EVENT_ACTIVE;
            var4 = var4.bind(var10)(var5);
            var4 = var9.bind(var1)(var4);
case 89:
            var4 = _closure1_slot30;
            var4 = var4.bind(var6)(var7);
            if(!var4) { _fun0013_ip = 78; continue _fun0013 }
case 90:
            var6 = var1.push;
            var4 = _closure1_slot12;
            var4 = var4.EVENT_UPCOMING;
            var4 = var6.bind(var1)(var4);
            var6 = var1.push;
            var7 = _closure1_slot12;
            var4 = var7.GUILD_EVENT_UPCOMING;
            var4 = var4.bind(var7)(var8);
            var4 = var6.bind(var1)(var4);
            if(!(var3 != var5)) { _fun0013_ip = 78; continue _fun0013 }
case 22:
            var3 = var1.push;
            var4 = _closure1_slot12;
            var2 = var4.CHANNEL_EVENT_UPCOMING;
            var2 = var2.bind(var4)(var5);
            var2 = var3.bind(var1)(var2);
case 78:
            return var1;
        }
    };
    var20 = var15;
    var18 = var6;
    var13 = new var20[var16](var19, var18, var17);
    var13 = var13 instanceof Object ? var13 : var15;
    var _closure1_slot13 = var13;
    var _closure1_slot14 = var8;
    var8 = new Array(0);
    var _closure1_slot15 = var8;
    var8 = 'SERIES';
    var _closure1_slot16 = var8;
    var8 = {};
    var _closure1_slot17 = var8;
    var8 = {};
    var _closure1_slot18 = var8;
    var8 = 11;
    var8 = var11[var8];
    var8 = var12.bind(var1)(var8);
    var13 = var8.Store;
    var8 = function(arg1) {
        var4 = function GuildScheduledEventStore() {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot2;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot5;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot4;
                var1 = _closure1_slot19;
                var1 = var1.bind(var3)();
                if(var1) { _fun0014_ip = 91; continue _fun0014 }
case 92:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0014_ip = 93; continue _fun0014;
case 91:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 93:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot6;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot3;
        var5 = {};
        var1 = 'getGuildScheduledEvent';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                var5 = arg1;
                var2 = null;
                var3 = var2 == var5;
                var1 = null;
                if(var3) { _fun0015_ip = 6; continue _fun0015 }
case 36:
                var4 = _closure1_slot13;
                var3 = var4.get;
                var3 = var3.bind(var4)(var5);
                var4 = var2 != var3;
                var2 = null;
                if(!var4) { _fun0015_ip = 39; continue _fun0015 }
case 94:
                var2 = var3;
case 39:
                var1 = var2;
case 6:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(12);
        var1[0] = var5;
        var5 = {};
        var7 = 'getGuildEventCountByIndex';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot13;
            var2 = var3.size;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getGuildScheduledEventsForGuild';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                var3 = arg1;
                var1 = null;
                if(!(var1 != var3)) { _fun0016_ip = 38; continue _fun0016 }
case 45:
                var2 = _closure1_slot13;
                var1 = var2.values;
                var1 = var1.bind(var2)(var3);
                _fun0016_ip = 95; continue _fun0016;
case 38:
                var1 = new Array(0);
case 95:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getGuildScheduledEventsByIndex';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot13;
            var2 = var3.values;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getRsvpVersion';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot14;
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getRsvp';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3) {
            _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                var3 = arg1;
                var1 = null;
                if(!(var1 != var3)) { _fun0017_ip = 96; continue _fun0017 }
case 45:
                var6 = _closure1_slot24;
                var5 = undefined;
                var4 = arg2;
                var4 = var6.bind(var5)(var4);
                var2 = _closure1_slot17;
                var3 = var2[var3];
                var6 = var1 == var3;
                var2 = undefined;
                if(var6) { _fun0017_ip = 97; continue _fun0017 }
case 39:
                var4 = var3[var4];
                var3 = var1 == var4;
                var2 = undefined;
                if(var3) { _fun0017_ip = 97; continue _fun0017 }
case 32:
                var3 = arg3;
                var2 = var4[var3];
case 97:
                return var2;
case 96:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'isInterestedInEventRecurrence';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                var8 = arg1;
                var7 = this;
                var2 = _closure1_slot7;
                var1 = var2.getId;
                var5 = var1.bind(var2)();
                var1 = var7.getRsvp;
                var6 = null;
                var1 = var1.bind(var7)(var8, var6, var5);
                var4 = var7.getRsvp;
                var2 = arg2;
                var5 = var4.bind(var7)(var8, var2, var5);
                var7 = var6 == var1;
                var2 = undefined;
                if(var7) { _fun0018_ip = 91; continue _fun0018 }
case 97:
                var2 = var1.response;
case 91:
                var1 = _closure1_slot11;
                var1 = var1.INTERESTED;
                var1 = var2 === var1;
                var2 = var6 == var5;
                var7 = undefined;
                if(var2) { _fun0018_ip = 98; continue _fun0018 }
case 99:
                var7 = var5.response;
case 98:
                var2 = _closure1_slot11;
                var2 = var2.INTERESTED;
                var2 = var7 === var2;
                var6 = var6 == var5;
                var4 = undefined;
                if(var6) { _fun0018_ip = 100; continue _fun0018 }
case 101:
                var4 = var5.response;
case 100:
                var3 = _closure1_slot11;
                var3 = var3.UNINTERESTED;
                if(!var1) { _fun0018_ip = 70; continue _fun0018 }
case 102:
                var3 = var4 === var3;
                var1 = !var3;
case 70:
                if(var1) { _fun0018_ip = 103; continue _fun0018 }
case 104:
                var1 = var2;
case 103:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'getUserCount';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                var8 = arg1;
                var7 = arg2;
                var5 = null;
                if(!(var5 != var8)) { _fun0019_ip = 98; continue _fun0019 }
case 41:
                var1 = _closure1_slot18;
                var3 = var1[var8];
                var2 = var5 == var3;
                var1 = undefined;
                if(var2) { _fun0019_ip = 94; continue _fun0019 }
case 95:
                var2 = _closure1_slot16;
                var1 = var3[var2];
case 94:
                var9 = var5 != var1;
                var2 = 0;
                if(!var9) { _fun0019_ip = 105; continue _fun0019 }
case 9:
                var2 = var1;
case 105:
                var1 = var2;
                if(!(var5 != var7)) { _fun0019_ip = 15; continue _fun0019 }
case 106:
                var6 = _closure1_slot18;
                var6 = var6[var8];
                var8 = var5 == var6;
                var4 = undefined;
                if(var8) { _fun0019_ip = 64; continue _fun0019 }
case 107:
                var4 = var6[var7];
case 64:
                var5 = var5 != var4;
                var3 = 0;
                if(!var5) { _fun0019_ip = 99; continue _fun0019 }
case 108:
                var3 = var4;
case 99:
                var1 = var2 - var3;
case 15:
                return var1;
case 98:
                var1 = 0;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'hasUserCount';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                var4 = _closure1_slot24;
                var1 = undefined;
                var3 = arg2;
                var4 = var4.bind(var1)(var3);
                var3 = _closure1_slot18;
                var2 = arg1;
                var3 = var3[var2];
                var2 = null;
                var5 = var2 == var3;
                if(var5) { _fun0020_ip = 109; continue _fun0020 }
case 40:
                var1 = var3[var4];
case 109:
                var1 = var2 != var1;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'isActive';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                var5 = arg1;
                var1 = null;
                var1 = var1 != var5;
                if(!var1) { _fun0021_ip = 94; continue _fun0021 }
case 41:
                var4 = _closure1_slot29;
                var3 = _closure1_slot13;
                var2 = var3.get;
                var3 = var2.bind(var3)(var5);
                var2 = undefined;
                var1 = var4.bind(var2)(var3);
case 94:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'getActiveEventByChannel';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                var5 = arg1;
                var3 = this;
                var1 = null;
                if(!(var1 == var5)) { _fun0022_ip = 44; continue _fun0022 }
case 41:
                var1 = undefined;
                return var1;
case 44:
                var2 = var3.getGuildScheduledEventsByIndex;
                var4 = _closure1_slot12;
                var1 = var4.CHANNEL_EVENT_ACTIVE;
                var1 = var1.bind(var4)(var5);
                var2 = var2.bind(var3)(var1);
                var1 = 0;
                var1 = var2[var1];
                return var1;
            }
        };
        var5['value'] = var7;
        var1[10] = var5;
        var5 = {};
        var7 = 'getUsersForGuildEvent';
        var5['key'] = var7;
        var6 = function value(arg1, arg2) {
            _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                var5 = arg1;
                var2 = null;
                if(!(var2 != var5)) { _fun0023_ip = 110; continue _fun0023 }
case 45:
                var6 = _closure1_slot24;
                var1 = undefined;
                var4 = arg2;
                var4 = var6.bind(var1)(var4);
                var3 = _closure1_slot17;
                var3 = var3[var5];
                var5 = var2 == var3;
                if(var5) { _fun0023_ip = 111; continue _fun0023 }
case 109:
                var1 = var3[var4];
case 111:
                if(!(var2 == var1)) { _fun0023_ip = 92; continue _fun0023 }
case 9:
                var1 = {};
case 92:
                return var1;
case 110:
                var1 = {};
                return var1;
            }
        };
        var5['value'] = var6;
        var1[11] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var13 = var8.bind(var1)(var13);
    var8 = 'GuildScheduledEventStore';
    var13['displayName'] = var8;
    var8 = 12;
    var8 = var11[var8];
    var19 = var12.bind(var1)(var8);
    var8 = {};
    var15 = function handleConnectionOpen(arg1) {
        var1 = arg1;
        var3 = var1.guilds;
        var4 = _closure1_slot13;
        var2 = var4.clear;
        var2 = var2.bind(var4)();
        var2 = 0;
        _closure1_slot14 = var2;
        var2 = {};
        _closure1_slot17 = var2;
        var2 = {};
        _closure1_slot18 = var2;
        var4 = _closure1_slot15;
        var2 = var4.forEach;
        var1 = _closure1_slot22;
        var1 = var2.bind(var4)(var1);
        var2 = var3.forEach;
        var1 = function(arg1) {
            var1 = arg1;
            var3 = var1.guild_scheduled_events;
            var2 = var3.forEach;
            var1 = function(arg1) {
                var3 = _closure1_slot22;
                var1 = undefined;
                var2 = arg1;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        var1 = true;
        return var1;
    };
    var8['CONNECTION_OPEN'] = var15;
    var15 = function handleGuildCreate(arg1) {
        var1 = arg1;
        var1 = var1.guild;
        var5 = _closure1_slot28;
        var4 = var1.id;
        var3 = undefined;
        var2 = false;
        var2 = var5.bind(var3)(var4, var2);
        var3 = var1.guild_scheduled_events;
        var2 = var3.forEach;
        var1 = function(arg1) {
            var3 = _closure1_slot22;
            var1 = undefined;
            var2 = arg1;
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        var1 = true;
        return var1;
    };
    var8['GUILD_CREATE'] = var15;
    var15 = function handleGuildDelete(arg1) {
        var1 = arg1;
        var1 = var1.guild;
        var4 = _closure1_slot28;
        var3 = var1.id;
        var2 = undefined;
        var1 = true;
        var2 = var4.bind(var2)(var3, var1);
        return var1;
    };
    var8['GUILD_DELETE'] = var15;
    var15 = function handleFetchGuildEvent(arg1) {
        var1 = arg1;
        var3 = var1.guildScheduledEvent;
        var2 = _closure1_slot22;
        var1 = undefined;
        var2 = var2.bind(var1)(var3);
        return var1;
    };
    var8['FETCH_GUILD_EVENT'] = var15;
    var15 = function handleFetchGuildEventsForGuild(arg1) {
        _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
            var1 = arg1;
            var8 = var1.guildId;
            var3 = var1.guildScheduledEvents;
            var7 = _closure1_slot13;
            var5 = var7.values;
            var4 = _closure1_slot12;
            var1 = var4.GUILD_EVENT;
            var4 = var1.bind(var4)(var8);
            var1 = true;
            var7 = var5.bind(var7)(var4, var1);
            var5 = var7.map;
            var4 = function(arg1) {
                var1 = arg1;
                var1 = var1.id;
                return var1;
            };
            var9 = var5.bind(var7)(var4);
            var5 = var3.map;
            var4 = function(arg1) {
                var1 = arg1;
                var1 = var1.id;
                return var1;
            };
            var8 = var5.bind(var3)(var4);
            var7 = _closure1_slot0;
            var5 = _closure1_slot1;
            var4 = 9;
            var4 = var5[var4];
            var5 = undefined;
            var7 = var7.bind(var5)(var4);
            var4 = var7.difference;
            var7 = var4.bind(var7)(var9, var8);
            var4 = var7.forEach;
            var2 = function(arg1) {
                var3 = _closure1_slot23;
                var1 = undefined;
                var2 = arg1;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var2 = var4.bind(var7)(var2);
            var2 = _closure1_slot20;
            var4 = var2.bind(var5)(var3);
            var3 = var4.bind(var5)();
            var2 = var3.done;
            if(var2) { _fun0024_ip = 56; continue _fun0024 }
case 112:
            var7 = _closure1_slot22;
            var2 = var3.value;
            var2 = var7.bind(var5)(var2);
            var7 = var4.bind(var5)();
            var2 = var7.done;
            var3 = var7;
            if(!var2) { _fun0024_ip = 112; continue _fun0024 }
case 56:
            return var1;
        }
    };
    var8['FETCH_GUILD_EVENTS_FOR_GUILD'] = var15;
    var8['GUILD_SCHEDULED_EVENT_CREATE'] = var14;
    var8['GUILD_SCHEDULED_EVENT_UPDATE'] = var14;
    var14 = function handleGuildScheduledEventDelete(arg1) {
        var1 = arg1;
        var1 = var1.guildScheduledEvent;
        var3 = _closure1_slot23;
        var2 = var1.id;
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var1 = true;
        return var1;
    };
    var8['GUILD_SCHEDULED_EVENT_DELETE'] = var14;
    var14 = function handleRsvpCreate(arg1) {
        _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
            var1 = arg1;
            var9 = var1.userId;
            var8 = var1.guildEventId;
            var10 = var1.guildId;
            var5 = var1.guildEventExceptionId;
            var4 = var1.response;
            var2 = _closure1_slot24;
            var3 = undefined;
            var7 = var2.bind(var3)(var5);
            var2 = _closure1_slot17;
            var2 = var2[var8];
            var6 = null;
            var12 = var6 == var2;
            var11 = undefined;
            if(var12) { _fun0025_ip = 113; continue _fun0025 }
case 114:
            var2 = var2[var7];
            var7 = var6 == var2;
            var11 = undefined;
            if(var7) { _fun0025_ip = 113; continue _fun0025 }
case 115:
            var11 = var2[var9];
case 113:
            if(!(var6 != var11)) { _fun0025_ip = 83; continue _fun0025 }
case 116:
            var7 = _closure1_slot26;
            var2 = false;
            var2 = var7.bind(var3)(var11, var2);
case 83:
            var7 = _closure1_slot8;
            var2 = var7.getMember;
            var7 = var2.bind(var7)(var10, var9);
            var2 = _closure1_slot25;
            var1 = {};
            var1['user_id'] = var9;
            var1['guild_scheduled_event_id'] = var8;
            var8 = var6 != var7;
            var6 = undefined;
            if(!var8) { _fun0025_ip = 117; continue _fun0025 }
case 118:
            var6 = var7;
case 117:
            var1['member'] = var6;
            var1['guild_scheduled_event_exception_id'] = var5;
            var1['response'] = var4;
            var1 = var2.bind(var3)(var1);
            var1 = true;
            return var1;
        }
    };
    var8['GUILD_SCHEDULED_EVENT_USER_ADD'] = var14;
    var14 = function handleRsvpDelete(arg1) {
        var1 = arg1;
        var6 = var1.userId;
        var5 = var1.guildEventId;
        var4 = var1.guildEventExceptionId;
        var1 = var1.response;
        var3 = _closure1_slot26;
        var2 = {};
        var2['user_id'] = var6;
        var2['guild_scheduled_event_id'] = var5;
        var2['guild_scheduled_event_exception_id'] = var4;
        var2['response'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var8['GUILD_SCHEDULED_EVENT_USER_REMOVE'] = var14;
    var14 = function handleFetchGuildEventsForUser(arg1) {
        var1 = arg1;
        var3 = var1.guildScheduledEventUsers;
        var2 = var3.forEach;
        var1 = function(arg1) {
            var4 = _closure1_slot25;
            var1 = undefined;
            var3 = arg1;
            var2 = false;
            var2 = var4.bind(var1)(var3, var2, var2);
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        var3 = _closure1_slot14;
        var1 = 1;
        var1 = var3 + var1;
        _closure1_slot14 = var1;
        var1 = true;
        return var1;
    };
    var8['GUILD_SCHEDULED_EVENT_RSVPS_FETCH_SUCESS'] = var14;
    var14 = function handleFetchUsersForGuildEventSuccess(arg1) {
        var1 = arg1;
        var3 = var1.guildScheduledEventUsers;
        var2 = var3.forEach;
        var1 = function(arg1) {
            var4 = _closure1_slot25;
            var1 = undefined;
            var3 = arg1;
            var2 = false;
            var2 = var4.bind(var1)(var3, var2, var2);
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        var3 = _closure1_slot14;
        var1 = 1;
        var1 = var3 + var1;
        _closure1_slot14 = var1;
        var1 = true;
        return var1;
    };
    var8['GUILD_SCHEDULED_EVENT_USERS_FETCH_SUCCESS'] = var14;
    var14 = function handleEventUserCountsFetchSuccess(arg1) {
        var1 = arg1;
        var8 = var1.eventId;
        var _closure2_slot0 = var8;
        var3 = var1.counts;
        var _closure2_slot1 = var3;
        var7 = _closure1_slot27;
        var6 = var3.eventCount;
        var1 = undefined;
        var5 = null;
        var5 = var7.bind(var1)(var8, var5, var6);
        var5 = _closure1_slot0;
        var6 = _closure1_slot1;
        var4 = 10;
        var4 = var6[var4];
        var5 = var5.bind(var1)(var4);
        var4 = var5.forEachKey;
        var3 = var3.recurrenceCounts;
        var2 = function(arg1) {
            var5 = arg1;
            var4 = _closure1_slot27;
            var3 = _closure2_slot0;
            var1 = _closure2_slot1;
            var2 = var1.eventCount;
            var1 = var1.recurrenceCounts;
            var1 = var1[var5];
            var2 = var2 - var1;
            var1 = undefined;
            var2 = var4.bind(var1)(var3, var5, var2);
            return var1;
        };
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var8['GUILD_SCHEDULED_EVENT_USER_COUNTS_FETCH_SUCCESS'] = var14;
    var14 = function handleInviteResolveSuccess(arg1) {
        _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
            var1 = arg1;
            var1 = var1.invite;
            var4 = var1.guild_scheduled_event;
            var1 = null;
            var1 = var1 != var4;
            if(!var1) { _fun0026_ip = 94; continue _fun0026 }
case 119:
            var3 = _closure1_slot22;
            var2 = undefined;
            var2 = var3.bind(var2)(var4);
            var1 = true;
case 94:
            return var1;
        }
    };
    var8['INVITE_RESOLVE_SUCCESS'] = var14;
    var8['GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE'] = var9;
    var8['GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE'] = var9;
    var9 = function handleGuildScheduledEventExceptionDelete(arg1) {
        _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
            var1 = arg1;
            var1 = var1.eventException;
            var _closure2_slot0 = var1;
            var5 = _closure1_slot13;
            var4 = var5.get;
            var1 = var1.event_id;
            var1 = var4.bind(var5)(var1);
            var4 = null;
            if(!(var4 != var1)) { _fun0027_ip = 49; continue _fun0027 }
case 80:
            var5 = var1.guild_scheduled_event_exceptions;
            var4 = var5.filter;
            var3 = function(arg1) {
                var1 = arg1;
                var2 = var1.event_exception_id;
                var1 = _closure2_slot0;
                var1 = var1.event_exception_id;
                var1 = var2 !== var1;
                return var1;
            };
            var4 = var4.bind(var5)(var3);
            var3 = _closure1_slot22;
            var2 = {};
            var7 = var2;
            var6 = var1;
            var1 = copyDataProperties(var7, var6);
            var1 = 'guild_scheduled_event_exceptions';
            var2[var1] = var4;
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var1 = true;
            return var1;
case 49:
            var1 = false;
            return var1;
        }
    };
    var8['GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE'] = var9;
    var9 = function handleGuildScheduledEventExceptionsDelete(arg1) {
        _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
case 0:
            var1 = arg1;
            var4 = var1.eventId;
            var2 = _closure1_slot13;
            var1 = var2.get;
            var2 = var1.bind(var2)(var4);
            var1 = null;
            var1 = var1 != var2;
            if(!var1) { _fun0028_ip = 120; continue _fun0028 }
case 121:
            var4 = _closure1_slot22;
            var3 = {};
            var7 = var3;
            var6 = var2;
            var2 = copyDataProperties(var7, var6);
            var5 = new Array(0);
            var2 = 'guild_scheduled_event_exceptions';
            var3[var2] = var5;
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var1 = true;
case 120:
            return var1;
        }
    };
    var8['GUILD_SCHEDULED_EVENT_EXCEPTIONS_DELETE'] = var9;
    var9 = function handleLogout() {
        var2 = _closure1_slot13;
        var1 = var2.clear;
        var1 = var1.bind(var2)();
        var1 = true;
        return var1;
    };
    var8['LOGOUT'] = var9;
    var9 = var13.prototype;
    var9 = Object.create(var9, {constructor: {value: var13}});
    var20 = var9;
    var18 = var8;
    var8 = new var20[var13](var19, var18, var17);
    var8 = var8 instanceof Object ? var8 : var9;
    var9 = 13;
    var9 = var11[var9];
    var11 = var10.bind(var1)(var9);
    var10 = var11.fileFinishedImporting;
    var9 = 'modules/guild_scheduled_events/GuildScheduledEventStore.tsx';
    var9 = var10.bind(var11)(var9);
    var3['default'] = var8;
    var3['StaticGuildEventIndexes'] = var7;
    var3['scheduledEventSort'] = var6;
    var3['isGuildScheduledEventActive'] = var5;
    var3['isEventUpcoming'] = var4;
    var4 = function eventScheduledToStartWithin(arg1, arg2) {
        var1 = global;
        var4 = var1.Date;
        var2 = arg1;
        var5 = var2.scheduled_start_time;
        var3 = var4.prototype;
        var3 = Object.create(var3, {constructor: {value: var4}});
        var6 = var3;
        var2 = new var6[var4](var5, var4);
        var3 = var2 instanceof Object ? var2 : var3;
        var2 = var3.getTime;
        var2 = var2.bind(var3)();
        var3 = var1.Date;
        var1 = var3.now;
        var3 = var1.bind(var3)();
        var4 = 1000;
        var1 = arg2;
        var1 = var4 * var1;
        var1 = var3 + var1;
        var1 = var2 < var1;
        return var1;
    };
    var3['eventScheduledToStartWithin'] = var4;
    var2 = function isGuildEventEnded(arg1) {
        _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
case 0:
            var2 = arg1;
            var1 = null;
            var1 = var1 != var2;
            if(!var1) { _fun0029_ip = 81; continue _fun0029 }
case 41:
            var4 = _closure1_slot10;
            var3 = var4.has;
            var2 = var2.status;
            var1 = var3.bind(var4)(var2);
case 81:
            return var1;
        }
    };
    var3['isGuildEventEnded'] = var2;
    return var1;
})();