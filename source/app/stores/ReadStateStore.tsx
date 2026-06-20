// app/stores/ReadStateStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var7 = require;
        var10 = metroImportDefault;
        var3 = exports;
        var8 = dependencyMap;
        var _closure1_slot0 = var7;
        var _closure1_slot1 = var10;
        var _closure1_slot2 = var8;
        var1 = function _isNativeReflectConstruct() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
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
                _fun0002_ip = 4; continue _fun0002;
case 5: // catch_target0
                CatchBlockStart(arg_register=1);
case 4:
                var2 = function _isNativeReflectConstruct() {
                    var1 = _closure2_slot0;
                    var1 = !var1;
                    var1 = !var1;
                    return var1;
                };
                _closure1_slot82 = var2;
                var1 = undefined;
                var1 = var2.bind(var1)();
                return var1;
            }
        };
        var _closure1_slot82 = var1;
        var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var3 = arg1;
                var _closure2_slot0 = var3;
                var5 = global;
                var2 = var5.Symbol;
                var4 = 'undefined';
                var2 = typeof var2;
                var2 = var4 !== var2;
                if(!var2) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                var4 = var5.Symbol;
                var4 = var4.iterator;
                var2 = var3[var4];
case 6:
                if(var2) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                var2 = var3["@@iterator"];
case 8:
                if(var2) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                var6 = var5.Array;
                var4 = var6.isArray;
                var6 = var4.bind(var6)(var3);
                var4 = var2;
                if(var6) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                var8 = undefined;
                var6 = undefined;
                if(!var3) { _fun0003_ip = 14; continue _fun0003 }
case 15:
                var9 = 'string';
                var7 = typeof var3;
                if(!(var9 !== var7)) { _fun0003_ip = 16; continue _fun0003 }
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
                if(!var7) { _fun0003_ip = 18; continue _fun0003 }
case 19:
                var7 = var3.constructor;
case 18:
                var10 = var9;
                if(!var7) { _fun0003_ip = 20; continue _fun0003 }
case 21:
                var7 = var3.constructor;
                var10 = var7.name;
case 20:
                var7 = 'Map';
                if(!(var7 !== var10)) { _fun0003_ip = 22; continue _fun0003 }
case 23:
                var7 = 'Set';
                if(!(var7 !== var10)) { _fun0003_ip = 22; continue _fun0003 }
case 24:
                var7 = 'Arguments';
                if(!(var7 !== var10)) { _fun0003_ip = 25; continue _fun0003 }
case 26:
                var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var7 = var9.test;
                var9 = var7.bind(var9)(var10);
                var7 = undefined;
                if(!var9) { _fun0003_ip = 27; continue _fun0003 }
case 25:
                var9 = _closure1_slot84;
                var7 = var9.bind(var8)(var3, var8);
case 27:
                _fun0003_ip = 28; continue _fun0003;
case 22:
                var10 = var5.Array;
                var9 = var10.from;
                var7 = var9.bind(var10)(var3);
case 28:
                var6 = var7;
                _fun0003_ip = 14; continue _fun0003;
case 16:
                var7 = _closure1_slot84;
                var6 = var7.bind(var8)(var3, var8);
case 14:
                var4 = var6;
                if(var4) { _fun0003_ip = 12; continue _fun0003 }
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
                if(!var4) { _fun0003_ip = 30; continue _fun0003 }
case 31:
                _closure2_slot0 = var4;
case 30:
                var4 = 0;
                var _closure2_slot1 = var4;
                var1 = function() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        var2 = _closure2_slot1;
                        var1 = _closure2_slot0;
                        var1 = var1.length;
                        if(!(!(var2 >= var1))) { _fun0004_ip = 32; continue _fun0004 }
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
                        _fun0004_ip = 34; continue _fun0004;
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
        var _closure1_slot83 = var1;
        var1 = function _arrayLikeToArray(arg1, arg2) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var4 = arg1;
                var1 = null;
                var3 = undefined;
                var1 = var1 == var3;
                if(var1) { _fun0005_ip = 35; continue _fun0005 }
case 36:
                var2 = var4.length;
                var1 = var3 > var2;
case 35:
                var2 = undefined;
                if(!var1) { _fun0005_ip = 37; continue _fun0005 }
case 38:
                var2 = var4.length;
case 37:
                var1 = global;
                var1 = var1.Array;
                var1 = var1.bind(var3)(var2);
                var3 = 0;
                var5 = var3 < var2;
                if(!var5) { _fun0005_ip = 3; continue _fun0005 }
case 8:
                var5 = var4[var3];
                var1[var3] = var5;
                var3 = var3 + 1;
                if(var3 < var2) { _fun0005_ip = 8; continue _fun0005 }
case 3:
                return var1;
            }
        };
        var _closure1_slot84 = var1;
        var1 = function generateOldThreadCutoff() {
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 42;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var4.bind(var2)(var3);
            var2 = var3.fromTimestamp;
            var4 = global;
            var5 = var4.Date;
            var4 = var5.now;
            var4 = var4.bind(var5)();
            var1 = _closure1_slot74;
            var1 = var4 - var1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var _closure1_slot85 = var1;
        var9 = function setDecayedReadStateTimer() {
            var5 = global;
            var2 = var5.Date;
            var1 = var2.now;
            var8 = var1.bind(var2)();
            var4 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 43;
            var7 = var6[var2];
            var1 = undefined;
            var7 = var4.bind(var1)(var7);
            var7 = var7.Millis;
            var9 = var7.DAY;
            var7 = 7;
            var7 = var7 * var9;
            var7 = var8 - var7;
            _closure1_slot75 = var7;
            var8 = var5.Date;
            var7 = var8.now;
            var8 = var7.bind(var8)();
            var7 = var6[var2];
            var7 = var4.bind(var1)(var7);
            var7 = var7.Millis;
            var9 = var7.DAY;
            var7 = 3;
            var7 = var7 * var9;
            var7 = var8 - var7;
            _closure1_slot76 = var7;
            var8 = var5.clearTimeout;
            var7 = _closure1_slot77;
            var7 = var8.bind(var1)(var7);
            var5 = var5.setTimeout;
            var2 = var6[var2];
            var2 = var4.bind(var1)(var2);
            var2 = var2.Millis;
            var4 = var2.HOUR;
            var2 = 1;
            var4 = var2 * var4;
            var2 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 44;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.dispatch;
                var2 = {};
                var5 = 'DECAY_READ_STATES';
                var2['type'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var2 = var5.bind(var1)(var2, var4);
            _closure1_slot77 = var2;
            return var1;
        };
        var _closure1_slot86 = var9;
        var1 = function parseTimestamp(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var4 = arg1;
                var1 = null;
                if(!(var1 != var4)) { _fun0006_ip = 39; continue _fun0006 }
case 40:
                var1 = global;
                var3 = var1.Date;
                var2 = var3.parse;
                var2 = var2.bind(var3)(var4);
                var3 = var1.isNaN;
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var1 = 0;
                if(var3) { _fun0006_ip = 9; continue _fun0006 }
case 6:
                var1 = var2;
case 9:
                return var1;
case 39:
                var1 = 0;
                return var1;
            }
        };
        var _closure1_slot87 = var1;
        var4 = function shouldBadgeMessage(arg1, arg2) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var8 = arg1;
                var3 = _closure1_slot29;
                var2 = var3.getChannel;
                var1 = var8.channel_id;
                var6 = var2.bind(var3)(var1);
                var1 = null;
                var1 = var1 != var6;
                if(!var1) { _fun0007_ip = 41; continue _fun0007 }
case 42:
                var3 = _closure1_slot36;
                var2 = var3.isBlockedOrIgnoredForMessage;
                var2 = var2.bind(var3)(var8);
                var2 = !var2;
                if(!var2) { _fun0007_ip = 43; continue _fun0007 }
case 11:
                var7 = _closure1_slot1;
                var5 = _closure1_slot2;
                var3 = 45;
                var3 = var5[var3];
                var5 = undefined;
                var7 = var7.bind(var5)(var3);
                var3 = {};
                var3['message'] = var8;
                var8 = arg2;
                var8 = var8.id;
                var3['userId'] = var8;
                var10 = _closure1_slot38;
                var9 = var10.isSuppressEveryoneEnabled;
                var8 = var6.guild_id;
                var8 = var9.bind(var10)(var8);
                var3['suppressEveryone'] = var8;
                var10 = _closure1_slot38;
                var9 = var10.isSuppressRolesEnabled;
                var8 = var6.guild_id;
                var8 = var9.bind(var10)(var8);
                var3['suppressRoles'] = var8;
                var3 = var7.bind(var5)(var3);
                var7 = !var3;
                var3 = !var7;
                if(!var7) { _fun0007_ip = 44; continue _fun0007 }
case 45:
                var4 = _closure1_slot89;
                var4 = var4.bind(var5)(var6);
                var4 = !var4;
                var3 = !var4;
case 44:
                var2 = var3;
case 43:
                var1 = var2;
case 41:
                return var1;
            }
        };
        var _closure1_slot88 = var4;
        var1 = function isNonMutedPrivateMessage(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var2 = arg1;
                var1 = null;
                var1 = var1 != var2;
                if(!var1) { _fun0008_ip = 46; continue _fun0008 }
case 47:
                var3 = var2.isPrivate;
                var1 = var3.bind(var2)();
case 46:
                if(!var1) { _fun0008_ip = 48; continue _fun0008 }
case 49:
                var5 = _closure1_slot38;
                var4 = var5.isGuildOrCategoryOrChannelMuted;
                var3 = var2.guild_id;
                var2 = var2.id;
                var2 = var4.bind(var5)(var3, var2);
                var1 = !var2;
case 48:
                return var1;
            }
        };
        var _closure1_slot89 = var1;
        var1 = function processBulkAckQueue() {
            var1 = undefined;
            var4 = _closure1_slot91;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var _closure1_slot90 = var1;
        var1 = function _processBulkAckQueue() {
            var5 = undefined;
            var1 = undefined;
            var4 = _closure1_slot6;
            var3 = function* (arg1) {
                var1 = function* anon_0_(arg1) {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                        if(var4) { _fun0009_ip = 50; continue _fun0009 }
case 47:
                        var3 = arg1;
                        var4 = undefined;
                        var _closure4_slot0 = var4;
                        var6 = _closure1_slot70;
                        var7 = var6.length;
                        var6 = 0;
                        if(!(var6 !== var7)) { _fun0009_ip = 51; continue _fun0009 }
case 52:
                        var7 = true;
                        _closure1_slot71 = var7;
                        var9 = _closure1_slot70;
                        var8 = var9.splice;
                        var7 = 100;
                        var7 = var8.bind(var9)(var6, var7);
                        _closure4_slot0 = var7;
case 53: // try_start_0
                        var8 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var7 = 46;
                        var7 = var9[var7];
                        var7 = var8.bind(var4)(var7);
                        var2 = function() {
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 47;
                            var2 = var2[var1];
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
                            var3 = var1.HTTP;
                            var2 = var3.post;
                            var1 = {};
                            var4 = _closure1_slot44;
                            var4 = var4.BULK_ACK;
                            var1['url'] = var4;
                            var4 = {};
                            var5 = _closure4_slot0;
                            var4['read_states'] = var5;
                            var1['body'] = var4;
                            var4 = true;
                            var1['oldFormErrors'] = var4;
                            var4 = false;
                            var1['rejectWithError'] = var4;
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        };
                        var2 = var7.bind(var4)(var2);
                        SaveGenerator(address=105);
case 54:
                        return var2;
case 55:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=6);
                        if(var7) { _fun0009_ip = 56; continue _fun0009 }
case 57: // try_end0
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var7 = 48;
                        var7 = var9[var7];
                        var9 = var8.bind(var4)(var7);
                        var8 = var9.timeoutPromise;
                        var7 = 1000;
                        var7 = var8.bind(var9)(var7);
                        SaveGenerator(address=152);
case 58:
                        return var7;
case 59:
                        ResumeGenerator(result_out_reg=6, return_bool_out_reg=7);
                        if(var8) { _fun0009_ip = 60; continue _fun0009 }
case 19:
                        var9 = _closure1_slot90;
                        var8 = var3;
                        var8 = var9.bind(var4)(var8);
                        return var4;
case 60:
                        return var7;
case 56:
                        return var2;
case 20: // catch_target0
                        CatchBlockStart(arg_register=1);
                        var2 = _closure1_slot70;
                        var2['length'] = var6;
                        var2 = false;
                        _closure1_slot71 = var2;
                        return var4;
case 51:
                        var2 = false;
                        _closure1_slot71 = var2;
                        var5 = var3;
                        var2 = null;
                        var2 = var2 == var5;
                        if(var2) { _fun0009_ip = 61; continue _fun0009 }
case 62:
                        var2 = var3.bind(var4)();
case 61:
                        var2 = undefined;
                        return var2;
case 50:
                        return var1;
                    }
                };
                return var1;
            };
            var4 = var4.bind(var5)(var3);
            _closure1_slot91 = var4;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var _closure1_slot91 = var1;
        var1 = function isOverlayAckable(arg1, arg2) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var4 = arg2;
                var1 = null;
                var1 = var1 != var4;
                if(!var1) { _fun0010_ip = 63; continue _fun0010 }
case 47:
                var3 = _closure1_slot64;
                var2 = undefined;
                var1 = var3.bind(var2)(var4);
case 63:
                return var1;
            }
        };
        var _closure1_slot92 = var1;
        var1 = function staffLog(arg1, arg2) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var3 = _closure1_slot39;
                var2 = var3.getCurrentUser;
                var4 = var2.bind(var3)();
                var2 = null;
                var2 = var2 != var4;
                if(!var2) { _fun0011_ip = 64; continue _fun0011 }
case 49:
                var3 = var4.hasAnyStaffLevel;
                var2 = var3.bind(var4)();
case 64:
                if(!var2) { _fun0011_ip = 5; continue _fun0011 }
case 65:
                var5 = _closure1_slot63;
                var4 = var5.log;
                var1 = arg1;
                var3 = var1.channelId;
                var2 = 'STAFF-ACK-LOG:';
                var1 = arg2;
                var1 = var4.bind(var5)(var2, var1, var3);
case 5:
                var1 = undefined;
                return var1;
            }
        };
        var _closure1_slot93 = var1;
        var1 = function shouldAutomaticallyAck(arg1, arg2) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var4 = arg1;
                var5 = _closure1_slot93;
                var3 = undefined;
                var2 = 'shouldAutomaticallyAck called';
                var2 = var5.bind(var3)(var4, var2);
                var5 = var4.type;
                var2 = _closure1_slot61;
                var2 = var2.CHANNEL;
                if(!(var5 === var2)) { _fun0012_ip = 66; continue _fun0012 }
case 6:
                var6 = _closure1_slot29;
                var5 = var6.getChannel;
                var2 = var4.channelId;
                var9 = var5.bind(var6)(var2);
                var6 = null;
                var2 = var6 != var9;
                if(!var2) { _fun0012_ip = 67; continue _fun0012 }
case 4:
                var5 = var9.isForumPost;
                var2 = var5.bind(var9)();
case 67:
                var7 = _closure1_slot10;
                var5 = var7.getConnectedActivityLocation;
                var5 = var5.bind(var7)();
                if(!(var6 != var5)) { _fun0012_ip = 18; continue _fun0012 }
case 68:
                var7 = _closure1_slot10;
                var5 = var7.getActivityPanelMode;
                var7 = var5.bind(var7)();
                var5 = _closure1_slot56;
                var5 = var5.PANEL;
                if(!(var7 === var5)) { _fun0012_ip = 18; continue _fun0012 }
case 69:
                var7 = _closure1_slot10;
                var5 = var7.getFocusedLayout;
                var7 = var5.bind(var7)();
                var5 = _closure1_slot57;
                var5 = var5.NO_CHAT;
                if(!(var7 !== var5)) { _fun0012_ip = 70; continue _fun0012 }
case 18:
                var7 = _closure1_slot33;
                var5 = var7.isIdle;
                var5 = var5.bind(var7)();
                if(var5) { _fun0012_ip = 71; continue _fun0012 }
case 43:
                var5 = var4.canTrackUnreads;
                var5 = var5.bind(var4)();
                if(var5) { _fun0012_ip = 72; continue _fun0012 }
case 73:
                var7 = _closure1_slot93;
                var5 = 'Cannot track unreads';
                var5 = var7.bind(var3)(var4, var5);
                var5 = false;
                return var5;
case 72:
                var5 = var6 == var9;
                var7 = undefined;
                if(var5) { _fun0012_ip = 74; continue _fun0012 }
case 75:
                var5 = var9.isForumLikeChannel;
                var7 = var5.bind(var9)();
case 74:
                var5 = true;
                if(!(var5 !== var7)) { _fun0012_ip = 76; continue _fun0012 }
case 77:
                var8 = _closure1_slot1;
                var10 = _closure1_slot2;
                var7 = 49;
                var7 = var10[var7];
                var8 = var8.bind(var3)(var7);
                var7 = var8.getState;
                var8 = var7.bind(var8)();
                var7 = _closure1_slot55;
                var7 = var7.ACTIVE;
                if(!(var8 === var7)) { _fun0012_ip = 78; continue _fun0012 }
case 76:
                if(!var2) { _fun0012_ip = 79; continue _fun0012 }
case 80:
                var7 = var4._persisted;
                if(var7) { _fun0012_ip = 79; continue _fun0012 }
case 81:
                var8 = _closure1_slot93;
                var7 = 'unpersisted forum post';
                var7 = var8.bind(var3)(var4, var7);
                return var5;
case 79:
                var7 = var4.hasUnreadOrMentions;
                var7 = var7.bind(var4)();
                if(var7) { _fun0012_ip = 82; continue _fun0012 }
case 83:
                var8 = _closure1_slot93;
                var7 = 'No unread or mentions';
                var7 = var8.bind(var3)(var4, var7);
                var7 = false;
                return var7;
case 82:
                var8 = var6 == var9;
                var7 = undefined;
                if(var8) { _fun0012_ip = 84; continue _fun0012 }
case 85:
                var8 = var9.isForumLikeChannel;
                var7 = var8.bind(var9)();
case 84:
                if(!(var5 !== var7)) { _fun0012_ip = 86; continue _fun0012 }
case 87:
                if(!var2) { _fun0012_ip = 88; continue _fun0012 }
case 89:
                var2 = var4._isJoinedThread;
                if(!var2) { _fun0012_ip = 90; continue _fun0012 }
case 88:
                var8 = _closure1_slot30;
                var7 = var8.isAtBottom;
                var2 = var4.channelId;
                var2 = var7.bind(var8)(var2);
                if(var2) { _fun0012_ip = 90; continue _fun0012 }
case 91:
                var7 = _closure1_slot93;
                var2 = 'Not at bottom';
                var2 = var7.bind(var3)(var4, var2);
                var2 = false;
                return var2;
case 90:
                var8 = _closure1_slot11;
                var7 = var8.getLayout;
                var2 = var4.channelId;
                var7 = var7.bind(var8)(var2);
                var9 = _closure1_slot11;
                var8 = var9.getChatOpen;
                var2 = var4.channelId;
                var2 = var8.bind(var9)(var2);
                if(var2) { _fun0012_ip = 92; continue _fun0012 }
case 93:
                var2 = _closure1_slot45;
                var2 = var2.NO_CHAT;
                if(!(var7 !== var2)) { _fun0012_ip = 94; continue _fun0012 }
case 95:
                var2 = _closure1_slot45;
                var2 = var2.FULL_SCREEN;
                if(!(var7 === var2)) { _fun0012_ip = 92; continue _fun0012 }
case 94:
                var7 = _closure1_slot93;
                var2 = 'Fullscreen video';
                var2 = var7.bind(var3)(var4, var2);
                var2 = false;
                return var2;
case 92:
                var8 = _closure1_slot34;
                var7 = var8.getMessages;
                var2 = var4.channelId;
                var2 = var7.bind(var8)(var2);
                if(!(var6 != var2)) { _fun0012_ip = 96; continue _fun0012 }
case 97:
                var6 = var2.ready;
                if(!var6) { _fun0012_ip = 96; continue _fun0012 }
case 98:
                var2 = var2.loadingMore;
                if(var2) { _fun0012_ip = 96; continue _fun0012 }
case 99:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 50;
                var2 = var7[var2];
                var8 = var6.bind(var3)(var2);
                var7 = var8.isChannelFocusedForReadStateAck;
                var6 = var4.channelId;
                var2 = arg2;
                var2 = var7.bind(var8)(var6, var2);
                var7 = _closure1_slot93;
                if(var2) { _fun0012_ip = 100; continue _fun0012 }
case 101:
                var2 = 'Chat not focused';
                var2 = var7.bind(var3)(var4, var2);
                var2 = false;
                _fun0012_ip = 102; continue _fun0012;
case 100:
                var6 = 'Acked';
                var6 = var7.bind(var3)(var4, var6);
                var2 = true;
case 102:
                _fun0012_ip = 103; continue _fun0012;
case 96:
                var6 = _closure1_slot93;
                var5 = 'Still loading messages';
                var5 = var6.bind(var3)(var4, var5);
                var2 = false;
case 103:
                return var2;
case 86:
                var5 = _closure1_slot93;
                var2 = 'Forum-like channel';
                var2 = var5.bind(var3)(var4, var2);
                var2 = false;
                return var2;
case 78:
                var5 = _closure1_slot93;
                var2 = 'App not active';
                var2 = var5.bind(var3)(var4, var2);
                var2 = false;
                return var2;
case 71:
                var5 = _closure1_slot93;
                var2 = 'Is idle';
                var2 = var5.bind(var3)(var4, var2);
                var2 = false;
                return var2;
case 70:
                var5 = _closure1_slot93;
                var2 = 'In activity';
                var2 = var5.bind(var3)(var4, var2);
                var2 = false;
                return var2;
case 66:
                var2 = _closure1_slot93;
                var1 = 'not channel read state';
                var1 = var2.bind(var3)(var4, var1);
                var1 = false;
                return var1;
            }
        };
        var _closure1_slot94 = var1;
        var1 = function mergeChannels(arg1) {
            var3 = arg1;
            var2 = var3.forEach;
            var1 = function(arg1) {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    var2 = arg1;
                    var5 = _closure1_slot22;
                    var3 = var2.type;
                    var1 = undefined;
                    var3 = var5.bind(var1)(var3);
                    if(!var3) { _fun0013_ip = 58; continue _fun0013 }
case 38:
                    var6 = _closure1_slot79;
                    var5 = var6.get;
                    var3 = var2.id;
                    var3 = var5.bind(var6)(var3);
                    var5 = var2.guild_id;
                    var3['_guildId'] = var5;
                    var5 = var2.lastMessageId;
                    var3['lastMessageId'] = var5;
                    var6 = _closure1_slot87;
                    var5 = var2.lastPinTimestamp;
                    var5 = var6.bind(var1)(var5);
                    var3['lastPinTimestamp'] = var5;
                    var6 = var2.hasFlag;
                    var5 = _closure1_slot58;
                    var5 = var5.IS_GUILD_RESOURCE_CHANNEL;
                    var5 = var6.bind(var2)(var5);
                    var3['_isResourceChannel'] = var5;
                    var5 = _closure1_slot26;
                    var4 = var5.has;
                    var2 = var2.type;
                    var2 = var4.bind(var5)(var2);
                    if(!var2) { _fun0013_ip = 58; continue _fun0013 }
case 104:
                    var2 = var3.syncThreadSettings;
                    var2 = var2.bind(var3)();
case 58:
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var _closure1_slot95 = var1;
        var1 = function mergeServerChannels(arg1) {
            var3 = arg1;
            var2 = var3.forEach;
            var1 = function(arg1) {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    var2 = arg1;
                    var5 = _closure1_slot22;
                    var3 = var2.type;
                    var1 = undefined;
                    var3 = var5.bind(var1)(var3);
                    if(!var3) { _fun0014_ip = 20; continue _fun0014 }
case 38:
                    var6 = _closure1_slot79;
                    var5 = var6.get;
                    var3 = var2.id;
                    var3 = var5.bind(var6)(var3);
                    var5 = var2.last_message_id;
                    var3['lastMessageId'] = var5;
                    var6 = _closure1_slot87;
                    var5 = var2.last_pin_timestamp;
                    var5 = var6.bind(var1)(var5);
                    var3['lastPinTimestamp'] = var5;
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var5 = 57;
                    var5 = var7[var5];
                    var8 = var6.bind(var1)(var5);
                    var7 = var8.hasFlag;
                    var5 = var2.flags;
                    var6 = null;
                    var9 = var6 != var5;
                    var6 = 0;
                    if(!var9) { _fun0014_ip = 105; continue _fun0014 }
case 106:
                    var6 = var5;
case 105:
                    var5 = _closure1_slot58;
                    var5 = var5.IS_GUILD_RESOURCE_CHANNEL;
                    var5 = var7.bind(var8)(var6, var5);
                    var3['_isResourceChannel'] = var5;
                    var5 = _closure1_slot26;
                    var4 = var5.has;
                    var2 = var2.type;
                    var2 = var4.bind(var5)(var2);
                    if(!var2) { _fun0014_ip = 20; continue _fun0014 }
case 21:
                    var2 = var3.syncThreadSettings;
                    var2 = var2.bind(var3)();
case 20:
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var _closure1_slot96 = var1;
        var1 = function mergeForGuild(arg1) {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                var3 = arg1;
                var4 = function mergeActiveJoinedThreads(arg1) {
                    _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                        var2 = arg1;
                        var _closure3_slot0 = var2;
                        var3 = var2.threads;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0016_ip = 107; continue _fun0016 }
case 108:
                        var2 = var3.forEach;
                        var1 = function(arg1) {
                            _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                                var1 = arg1;
                                var5 = _closure1_slot25;
                                var4 = var5.has;
                                var2 = var1.type;
                                var2 = var4.bind(var5)(var2);
                                if(!var2) { _fun0017_ip = 25; continue _fun0017 }
case 109:
                                var5 = _closure1_slot79;
                                var4 = var5.get;
                                var2 = var1.id;
                                var2 = var4.bind(var5)(var2);
                                var4 = var1.lastMessageId;
                                var2['lastMessageId'] = var4;
                                var6 = _closure1_slot87;
                                var4 = var1.lastPinTimestamp;
                                var5 = undefined;
                                var4 = var6.bind(var5)(var4);
                                var2['lastPinTimestamp'] = var4;
                                var4 = true;
                                var2['_isThread'] = var4;
                                var2['_isActiveThread'] = var4;
                                var4 = var1.member;
                                var6 = null;
                                var4 = var6 != var4;
                                var2['_isJoinedThread'] = var4;
                                var4 = var2.ackMessageId;
                                if(!(var6 == var4)) { _fun0017_ip = 110; continue _fun0017 }
case 111:
                                var7 = _closure1_slot1;
                                var8 = _closure1_slot2;
                                var4 = 42;
                                var4 = var8[var4];
                                var8 = var7.bind(var5)(var4);
                                var7 = var8.fromTimestamp;
                                var10 = _closure1_slot99;
                                var4 = _closure3_slot0;
                                var9 = var4.id;
                                var4 = var1.id;
                                var4 = var10.bind(var5)(var9, var4);
                                var4 = var7.bind(var8)(var4);
                                var2['ackMessageId'] = var4;
case 110:
                                var4 = var2.ackPinTimestamp;
                                if(!(var6 == var4)) { _fun0017_ip = 25; continue _fun0017 }
case 112:
                                var4 = _closure1_slot99;
                                var3 = _closure3_slot0;
                                var3 = var3.id;
                                var1 = var1.id;
                                var1 = var4.bind(var5)(var3, var1);
                                var2['ackPinTimestamp'] = var1;
case 25:
                                var1 = undefined;
                                return var1;
                            }
                        };
                        var1 = var2.bind(var3)(var1);
case 107:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var2 = function mergeGuildEvents(arg1) {
                    _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                        var4 = arg1;
                        var5 = var4.guild_scheduled_events;
                        var7 = null;
                        var6 = var7 == var5;
                        var1 = undefined;
                        var3 = undefined;
                        if(var6) { _fun0018_ip = 113; continue _fun0018 }
case 114:
                        var3 = var5.length;
case 113:
                        var5 = 0;
                        if(!(var5 === var3)) { _fun0018_ip = 115; continue _fun0018 }
case 64:
                        var9 = _closure1_slot79;
                        var8 = var9.getIfExists;
                        var6 = var4.id;
                        var3 = _closure1_slot61;
                        var3 = var3.GUILD_EVENT;
                        var3 = var8.bind(var9)(var6, var3);
                        if(!(var7 != var3)) { _fun0018_ip = 116; continue _fun0018 }
case 115:
                        var10 = _closure1_slot79;
                        var9 = var10.get;
                        var8 = var4.id;
                        var3 = _closure1_slot61;
                        var3 = var3.GUILD_EVENT;
                        var3 = var9.bind(var10)(var8, var3);
                        var8 = var4.id;
                        var3['_guildId'] = var8;
                        var _closure3_slot0 = var5;
                        var _closure3_slot1 = var7;
                        var5 = var3._ackMessageId;
                        if(!(var7 == var5)) { _fun0018_ip = 20; continue _fun0018 }
case 117:
                        var7 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var6 = 42;
                        var6 = var8[var6];
                        var8 = var7.bind(var1)(var6);
                        var7 = var8.fromTimestamp;
                        var6 = var3.getAckTimestamp;
                        var6 = var6.bind(var3)();
                        var5 = var7.bind(var8)(var6);
case 20:
                        var _closure3_slot2 = var5;
                        var6 = var4.guild_scheduled_events;
                        var5 = var6.forEach;
                        var4 = function(arg1) {
                            _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                                var2 = arg1;
                                var4 = _closure1_slot1;
                                var1 = _closure1_slot2;
                                var7 = 42;
                                var3 = var1[var7];
                                var1 = undefined;
                                var9 = var4.bind(var1)(var3);
                                var8 = var9.compare;
                                var6 = var2.id;
                                var4 = _closure3_slot1;
                                var6 = var8.bind(var9)(var6, var4);
                                var4 = 0;
                                if(!(var6 > var4)) { _fun0019_ip = 34; continue _fun0019 }
case 118:
                                var6 = var2.id;
                                _closure3_slot1 = var6;
case 34:
                                var6 = _closure1_slot1;
                                var5 = _closure1_slot2;
                                var5 = var5[var7];
                                var7 = var6.bind(var1)(var5);
                                var6 = var7.compare;
                                var5 = var2.id;
                                var2 = _closure3_slot2;
                                var2 = var6.bind(var7)(var5, var2);
                                if(!(var2 > var4)) { _fun0019_ip = 119; continue _fun0019 }
case 120:
                                var2 = _closure3_slot0;
                                var2 = var2 + 1;
                                _closure3_slot0 = var2;
case 119:
                                return var1;
                            }
                        };
                        var4 = var5.bind(var6)(var4);
                        var4 = _closure3_slot1;
                        var3['lastMessageId'] = var4;
                        var2 = _closure3_slot0;
                        var3['mentionCount'] = var2;
                        return var1;
case 116:
                        return var1;
                    }
                };
                var2 = var2.bind(var1)(var3);
                var7 = _closure1_slot79;
                var6 = var7.get;
                var5 = var3.id;
                var4 = _closure1_slot61;
                var4 = var4.GUILD_HOME;
                var5 = var6.bind(var7)(var5, var4);
                var8 = _closure1_slot1;
                var9 = _closure1_slot2;
                var4 = 42;
                var4 = var9[var4];
                var7 = var8.bind(var1)(var4);
                var6 = var7.fromTimestamp;
                var4 = 58;
                var4 = var9[var4];
                var8 = var8.bind(var1)(var4);
                var4 = global;
                var9 = var4.Date;
                var4 = var9.now;
                var4 = var4.bind(var9)();
                var10 = var8.bind(var1)(var4);
                var9 = var10.subtract;
                var8 = 24;
                var4 = 'h';
                var8 = var9.bind(var10)(var8, var4);
                var4 = var8.valueOf;
                var4 = var4.bind(var8)();
                var4 = var6.bind(var7)(var4);
                var5['lastMessageId'] = var4;
                var5 = _closure1_slot32;
                var4 = var5.getGuild;
                var3 = var3.id;
                var4 = var4.bind(var5)(var3);
                var5 = null;
                if(!(var5 != var4)) { _fun0015_ip = 121; continue _fun0015 }
case 122:
                var6 = var5 == var4;
                var3 = undefined;
                if(var6) { _fun0015_ip = 51; continue _fun0015 }
case 123:
                var3 = var4.latestOnboardingQuestionId;
case 51:
                if(!(var5 != var3)) { _fun0015_ip = 121; continue _fun0015 }
case 124:
                var7 = _closure1_slot79;
                var6 = var7.get;
                var5 = var4.id;
                var2 = _closure1_slot61;
                var2 = var2.GUILD_ONBOARDING_QUESTION;
                var2 = var6.bind(var7)(var5, var2);
                var4 = var4.id;
                var2['_guildId'] = var4;
                var2['lastMessageId'] = var3;
case 121:
                return var1;
            }
        };
        var _closure1_slot97 = var1;
        var1 = function mergeRelationships(arg1) {
            var3 = function mergeNotificationCenter(arg1) {
                _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                    var3 = arg1;
                    var5 = _closure1_slot39;
                    var4 = var5.getCurrentUser;
                    var4 = var4.bind(var5)();
                    var5 = null;
                    if(!(var5 != var4)) { _fun0020_ip = 125; continue _fun0020 }
case 126:
                    var6 = _closure1_slot79;
                    var5 = var6.get;
                    var4 = var4.id;
                    var2 = _closure1_slot61;
                    var2 = var2.NOTIFICATION_CENTER;
                    var2 = var5.bind(var6)(var4, var2);
                    var _closure3_slot0 = var2;
                    var2 = var3.forEach;
                    var1 = function(arg1) {
                        _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                            var2 = arg1;
                            var1 = var2.since;
                            var5 = null;
                            if(!(var5 != var1)) { _fun0021_ip = 62; continue _fun0021 }
case 127:
                            var4 = var2.type;
                            var3 = _closure1_slot51;
                            var3 = var3.PENDING_INCOMING;
                            if(!(var4 === var3)) { _fun0021_ip = 62; continue _fun0021 }
case 128:
                            var3 = global;
                            var4 = var3.Date;
                            var8 = var2.since;
                            var3 = var4.prototype;
                            var3 = Object.create(var3, {constructor: {value: var4}});
                            var9 = var3;
                            var2 = new var9[var4](var8, var7);
                            var3 = var2 instanceof Object ? var2 : var3;
                            var2 = var3.getTime;
                            var4 = var2.bind(var3)();
                            var3 = _closure3_slot0;
                            var3 = var3.ackMessageId;
                            var5 = var5 != var3;
                            var3 = 0;
                            if(!var5) { _fun0021_ip = 59; continue _fun0021 }
case 120:
                            var7 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var5 = 42;
                            var6 = var6[var5];
                            var5 = undefined;
                            var7 = var7.bind(var5)(var6);
                            var6 = var7.extractTimestamp;
                            var5 = _closure3_slot0;
                            var5 = var5.ackMessageId;
                            var3 = var6.bind(var7)(var5);
case 59:
                            if(!(var3 < var4)) { _fun0021_ip = 62; continue _fun0021 }
case 129:
                            var5 = _closure3_slot0;
                            var3 = var5.mentionCount;
                            var3 = var3 + 1;
                            var5['mentionCount'] = var3;
                            var2 = _closure3_slot0;
                            var5 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var1 = 42;
                            var3 = var3[var1];
                            var1 = undefined;
                            var3 = var5.bind(var1)(var3);
                            var1 = var3.fromTimestamp;
                            var1 = var1.bind(var3)(var4);
                            var2['lastMessageId'] = var1;
case 62:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
case 125:
                    var1 = false;
                    return var1;
                }
            };
            var1 = undefined;
            var2 = arg1;
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var _closure1_slot98 = var1;
        var1 = function getThreadAckMessageTimestamp(arg1, arg2) {
            _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                var3 = arg1;
                var8 = arg2;
                var2 = _closure1_slot29;
                var1 = var2.getChannel;
                var7 = var1.bind(var2)(var8);
                var2 = _closure1_slot32;
                var1 = var2.getGuild;
                var4 = null;
                if(!(var4 == var3)) { _fun0022_ip = 32; continue _fun0022 }
case 130:
                var9 = var4 == var7;
                var5 = undefined;
                if(var9) { _fun0022_ip = 131; continue _fun0022 }
case 132:
                var5 = var7.guild_id;
case 131:
                var3 = var5;
case 32:
                var3 = var1.bind(var2)(var3);
                if(!(var4 != var7)) { _fun0022_ip = 125; continue _fun0022 }
case 133:
                var1 = var7.isForumPost;
                var1 = var1.bind(var7)();
                var5 = 0;
                if(var1) { _fun0022_ip = 134; continue _fun0022 }
case 125:
                var2 = _closure1_slot100;
                var1 = undefined;
                var5 = var2.bind(var1)(var3);
case 134:
                var2 = _closure1_slot20;
                var1 = var2.joinTimestamp;
                var9 = var1.bind(var2)(var8);
                var1 = var4 == var9;
                var3 = undefined;
                var2 = undefined;
                if(var1) { _fun0022_ip = 111; continue _fun0022 }
case 135:
                var1 = var9.getTime;
                var2 = var1.bind(var9)();
case 111:
                var10 = var4 != var2;
                var1 = 0;
                var9 = 0;
                if(!var10) { _fun0022_ip = 136; continue _fun0022 }
case 117:
                var9 = var2;
case 136:
                var2 = 5000;
                var10 = var9 - var2;
                var2 = global;
                var9 = var2.isNaN;
                var9 = var9.bind(var3)(var10);
                if(!var9) { _fun0022_ip = 60; continue _fun0022 }
case 137:
                var10 = -5000;
case 60:
                var9 = var4 == var7;
                var11 = undefined;
                if(var9) { _fun0022_ip = 138; continue _fun0022 }
case 139:
                var7 = var7.threadMetadata;
                var9 = var4 == var7;
                var11 = undefined;
                if(var9) { _fun0022_ip = 138; continue _fun0022 }
case 140:
                var11 = var7.archiveTimestamp;
case 138:
                var4 = var4 != var11;
                var7 = 0;
                if(!var4) { _fun0022_ip = 141; continue _fun0022 }
case 142:
                var4 = var2.Date;
                var9 = var4.prototype;
                var9 = Object.create(var9, {constructor: {value: var4}});
                var14 = var9;
                var13 = var11;
                var4 = new var14[var4](var13, var12);
                var9 = var4 instanceof Object ? var4 : var9;
                var4 = var9.getTime;
                var9 = var4.bind(var9)();
                var4 = 1;
                var7 = var9 - var4;
case 141:
                var4 = var2.isNaN;
                var4 = var4.bind(var3)(var7);
                var9 = var7;
                if(!var4) { _fun0022_ip = 143; continue _fun0022 }
case 144:
                var9 = 0;
case 143:
                var7 = var2.Math;
                var4 = var7.max;
                var4 = var4.bind(var7)(var10, var9);
                if(!(var4 <= var1)) { _fun0022_ip = 145; continue _fun0022 }
case 146:
                var7 = _closure1_slot1;
                var9 = _closure1_slot2;
                var6 = 42;
                var6 = var9[var6];
                var7 = var7.bind(var3)(var6);
                var6 = var7.extractTimestamp;
                var7 = var6.bind(var7)(var8);
                var6 = 1;
                var4 = var7 - var6;
case 145:
                var6 = var2.isNaN;
                var6 = var6.bind(var3)(var4);
                if(var6) { _fun0022_ip = 147; continue _fun0022 }
case 148:
                var6 = var4 <= var1;
case 147:
                if(!var6) { _fun0022_ip = 149; continue _fun0022 }
case 150:
                var4 = 0;
case 149:
                var1 = var2.isNaN;
                var3 = var1.bind(var3)(var5);
                var1 = var4;
                if(var3) { _fun0022_ip = 151; continue _fun0022 }
case 152:
                var3 = var2.Math;
                var2 = var3.max;
                var1 = var2.bind(var3)(var5, var4);
case 151:
                return var1;
            }
        };
        var _closure1_slot99 = var1;
        var1 = function getGuildJoinedAtTime(arg1) {
            _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                var1 = arg1;
                var3 = null;
                if(!(var3 != var1)) { _fun0023_ip = 153; continue _fun0023 }
case 47:
                var2 = var1.joinedAt;
                if(!(var3 != var2)) { _fun0023_ip = 153; continue _fun0023 }
case 49:
                var4 = var1.joinedAt;
                var2 = global;
                var3 = var2.Date;
                var4 = var4 instanceof var3;
                var3 = var1.joinedAt;
                if(var4) { _fun0023_ip = 154; continue _fun0023 }
case 155:
                var5 = 'string';
                var4 = typeof var3;
                if(!(var5 !== var4)) { _fun0023_ip = 17; continue _fun0023 }
case 156:
                var4 = var1.joinedAt;
                var5 = 'number';
                var4 = typeof var4;
                if(!(var5 === var4)) { _fun0023_ip = 153; continue _fun0023 }
case 125:
                var6 = var2.isNaN;
                var5 = var1.joinedAt;
                var4 = undefined;
                var4 = var6.bind(var4)(var5);
                if(var4) { _fun0023_ip = 153; continue _fun0023 }
case 68:
                var4 = var1.joinedAt;
                return var4;
case 17:
                var5 = var2.Date;
                var7 = var1.joinedAt;
                var4 = var5.prototype;
                var4 = Object.create(var4, {constructor: {value: var5}});
                var8 = var4;
                var1 = new var8[var5](var7, var6);
                var4 = var1 instanceof Object ? var1 : var4;
                var1 = var4.getTime;
                var1 = var1.bind(var4)();
                var5 = var2.isNaN;
                var4 = undefined;
                var4 = var5.bind(var4)(var1);
                if(var4) { _fun0023_ip = 153; continue _fun0023 }
case 157:
                return var1;
case 154:
                var1 = var3.getTime;
                var1 = var1.bind(var3)();
                var3 = var2.isNaN;
                var2 = undefined;
                var2 = var3.bind(var2)(var1);
                if(var2) { _fun0023_ip = 153; continue _fun0023 }
case 73:
                return var1;
case 153:
                var1 = global;
                var2 = var1.Date;
                var1 = var2.now;
                var1 = var1.bind(var2)();
                return var1;
            }
        };
        var _closure1_slot100 = var1;
        var1 = function isOldReadState(arg1, arg2) {
            _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                var5 = arg1;
                var9 = arg2;
                var1 = var5.mentionCount;
                var6 = 0;
                var1 = var1 > var6;
                if(var1) { _fun0024_ip = 140; continue _fun0024 }
case 114:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var11 = 42;
                var2 = var2[var11];
                var10 = undefined;
                var4 = var3.bind(var10)(var2);
                var3 = var4.compare;
                var2 = var5.channelId;
                var2 = var3.bind(var4)(var2, var9);
                var3 = var2 > var6;
                var2 = !var3;
                if(var3) { _fun0024_ip = 123; continue _fun0024 }
case 115:
                var3 = var5._ackMessageId;
                var8 = null;
                var4 = var8 != var3;
                if(!var4) { _fun0024_ip = 69; continue _fun0024 }
case 134:
                var12 = _closure1_slot1;
                var3 = _closure1_slot2;
                var3 = var3[var11];
                var13 = var12.bind(var10)(var3);
                var12 = var13.compare;
                var3 = var5._ackMessageId;
                var3 = var12.bind(var13)(var3, var9);
                var4 = var3 > var6;
case 69:
                var3 = !var4;
                if(var4) { _fun0024_ip = 110; continue _fun0024 }
case 158:
                var4 = var5._lastMessageId;
                var4 = var8 != var4;
                if(!var4) { _fun0024_ip = 159; continue _fun0024 }
case 160:
                var8 = _closure1_slot1;
                var7 = _closure1_slot2;
                var7 = var7[var11];
                var8 = var8.bind(var10)(var7);
                var7 = var8.compare;
                var5 = var5._lastMessageId;
                var5 = var7.bind(var8)(var5, var9);
                var4 = var5 > var6;
case 159:
                var3 = !var4;
case 110:
                var2 = var3;
case 123:
                var1 = var2;
case 140:
                return var1;
            }
        };
        var _closure1_slot101 = var1;
        var1 = function tryAck(arg1, arg2, arg3) {
            _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
                var4 = arg2;
                var1 = null;
                if(!(var1 != var4)) { _fun0025_ip = 161; continue _fun0025 }
case 40:
                var3 = _closure1_slot79;
                var2 = var3.get;
                var4 = var2.bind(var3)(var4);
                var3 = _closure1_slot94;
                var2 = undefined;
                var1 = arg3;
                var2 = var3.bind(var2)(var4, var1);
                var1 = !var2;
                var1 = !var1;
                if(!var2) { _fun0025_ip = 162; continue _fun0025 }
case 163:
                var3 = var4.ack;
                var2 = {};
                var5 = true;
                var2['trackAnalytics'] = var5;
                var5 = arg1;
                var2['location'] = var5;
                var1 = var3.bind(var4)(var2);
case 162:
                return var1;
case 161:
                var1 = false;
                return var1;
            }
        };
        var _closure1_slot102 = var1;
        var1 = function tryAckParentForumChannel(arg1) {
            _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
                var6 = arg1;
                var3 = null;
                if(!(var3 != var6)) { _fun0026_ip = 146; continue _fun0026 }
case 36:
                var4 = _closure1_slot79;
                var1 = var4.get;
                var1 = var1.bind(var4)(var6);
                var6 = var1.type;
                var4 = _closure1_slot61;
                var4 = var4.CHANNEL;
                if(!(var6 === var4)) { _fun0026_ip = 146; continue _fun0026 }
case 131:
                var6 = _closure1_slot29;
                var4 = var6.getChannel;
                var1 = var1.channelId;
                var4 = var4.bind(var6)(var1);
                if(!(var3 != var4)) { _fun0026_ip = 146; continue _fun0026 }
case 161:
                var1 = var4.isForumPost;
                var1 = var1.bind(var4)();
                if(!var1) { _fun0026_ip = 146; continue _fun0026 }
case 164:
                var1 = var4.parent_id;
                if(!(var3 != var1)) { _fun0026_ip = 146; continue _fun0026 }
case 165:
                var10 = var4.parent_id;
                var3 = _closure1_slot79;
                var1 = var3.get;
                var3 = var1.bind(var3)(var10);
                var _closure2_slot0 = var3;
                var7 = _closure1_slot19;
                var6 = var7.hasLoaded;
                var1 = var4.guild_id;
                var1 = var6.bind(var7)(var1);
                if(!var1) { _fun0026_ip = 166; continue _fun0026 }
case 167:
                var8 = _closure1_slot1;
                var7 = _closure1_slot2;
                var6 = 42;
                var7 = var7[var6];
                var6 = undefined;
                var7 = var8.bind(var6)(var7);
                var6 = var7.keys;
                var9 = _closure1_slot19;
                var8 = var9.getThreadsForParent;
                var4 = var4.guild_id;
                var4 = var8.bind(var9)(var4, var10);
                var6 = var6.bind(var7)(var4);
                var4 = var6.every;
                var2 = function(arg1) {
                    _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
                        var5 = arg1;
                        var3 = _closure1_slot81;
                        var1 = var3.hasOpenedThread;
                        var1 = var1.bind(var3)(var5);
                        if(var1) { _fun0027_ip = 162; continue _fun0027 }
case 114:
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var2 = 42;
                        var3 = var3[var2];
                        var2 = undefined;
                        var4 = var4.bind(var2)(var3);
                        var3 = var4.compare;
                        var2 = _closure2_slot0;
                        var2 = var2.ackMessageId;
                        var3 = var3.bind(var4)(var5, var2);
                        var2 = 0;
                        var1 = var3 < var2;
case 162:
                        return var1;
                    }
                };
                var1 = var4.bind(var6)(var2);
case 166:
                if(!var1) { _fun0026_ip = 146; continue _fun0026 }
case 50:
                var2 = var3.ack;
                var1 = {};
                var4 = true;
                var1['trackAnalytics'] = var4;
                var4 = {};
                var6 = _closure1_slot43;
                var6 = var6.CHANNEL;
                var4['section'] = var6;
                var6 = _closure1_slot42;
                var6 = var6.ACK_FORUM_CHANNEL_NO_UNREAD_POSTS;
                var4['object'] = var6;
                var5 = _closure1_slot41;
                var5 = var5.ACK_AUTOMATIC;
                var4['objectType'] = var5;
                var1['location'] = var4;
                var1 = var2.bind(var3)(var1);
case 146:
                var1 = undefined;
                return var1;
            }
        };
        var _closure1_slot103 = var1;
        var18 = function clearDeleteOldReadStatesTimer() {
            _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
case 0:
                var3 = _closure1_slot72;
                var2 = null;
                if(!(var2 != var3)) { _fun0028_ip = 168; continue _fun0028 }
case 169:
                var2 = global;
                var3 = var2.clearTimeout;
                var2 = _closure1_slot72;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
case 168:
                var1 = undefined;
                return var1;
            }
        };
        var _closure1_slot104 = var18;
        var1 = function mergeChannelTimestampUpdates(arg1) {
            _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
case 0:
                var3 = _closure1_slot83;
                var1 = undefined;
                var2 = arg1;
                var5 = var3.bind(var1)(var2);
                var3 = var5.bind(var1)();
                var2 = var3.done;
                var4 = null;
                if(var2) { _fun0029_ip = 170; continue _fun0029 }
case 109:
                var2 = var3.value;
                var9 = _closure1_slot79;
                var8 = var9.get;
                var7 = var2.id;
                var7 = var8.bind(var9)(var7);
                var8 = var2.last_message_id;
                if(!(var4 != var8)) { _fun0029_ip = 162; continue _fun0029 }
case 133:
                var8 = var2.last_message_id;
                var7['lastMessageId'] = var8;
case 162:
                var8 = var2.last_pin_timestamp;
                if(!(var4 != var8)) { _fun0029_ip = 165; continue _fun0029 }
case 171:
                var8 = _closure1_slot87;
                var2 = var2.last_pin_timestamp;
                var2 = var8.bind(var1)(var2);
                var7['lastPinTimestamp'] = var2;
case 165:
                var7 = var5.bind(var1)();
                var2 = var7.done;
                var3 = var7;
                if(!var2) { _fun0029_ip = 109; continue _fun0029 }
case 170:
                return var1;
            }
        };
        var _closure1_slot105 = var1;
        var17 = function handleMessageDelete(arg1) {
            var1 = arg1;
            var3 = var1.channelId;
            var2 = _closure1_slot79;
            var1 = var2.get;
            var2 = var1.bind(var2)(var3);
            var1 = var2.rebuildChannelState;
            var1 = var1.bind(var2)();
            var1 = undefined;
            return var1;
        };
        var15 = function handleLoadArchivedThreadsSuccess(arg1) {
            var1 = arg1;
            var3 = var1.threads;
            var2 = _closure1_slot96;
            var1 = undefined;
            var2 = var2.bind(var1)(var3);
            return var1;
        };
        var14 = function handleSearchMessagesSuccess(arg1) {
            var1 = arg1;
            var3 = var1.data;
            var2 = var3.forEach;
            var1 = function(arg1) {
                var1 = arg1;
                var4 = var1.messages;
                var3 = var1.threads;
                var2 = var4.forEach;
                var1 = function(arg1) {
                    var5 = arg1;
                    var3 = _closure1_slot96;
                    var4 = var5.map;
                    var2 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.thread;
                        return var1;
                    };
                    var5 = var4.bind(var5)(var2);
                    var4 = var5.filter;
                    var6 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 60;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var6.bind(var1)(var2);
                    var2 = var2.isNotNullish;
                    var2 = var4.bind(var5)(var2);
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var1 = var2.bind(var4)(var1);
                var2 = _closure1_slot96;
                var1 = undefined;
                var2 = var2.bind(var1)(var3);
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var1 = function currentUserIsEventCreator(arg1) {
            _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
case 0:
                var3 = arg1;
                var2 = _closure1_slot39;
                var1 = var2.getCurrentUser;
                var2 = var1.bind(var2)();
                var1 = var3.creator_id;
                var4 = null;
                var1 = var4 != var1;
                if(!var1) { _fun0030_ip = 65; continue _fun0030 }
case 172:
                var1 = var4 != var2;
case 65:
                if(!var1) { _fun0030_ip = 32; continue _fun0030 }
case 173:
                var3 = var3.creator_id;
                var2 = var2.id;
                var1 = var3 === var2;
case 32:
                return var1;
            }
        };
        var _closure1_slot106 = var1;
        var13 = function handleChannelDelete(arg1) {
            var1 = arg1;
            var1 = var1.channel;
            var3 = _closure1_slot79;
            var2 = var3.clear;
            var1 = var1.id;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1 = function handleChannelSectionStoreUpdate() {
            _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
case 0:
                var3 = _closure1_slot28;
                var2 = var3.getCurrentSidebarChannelId;
                var1 = _closure1_slot66;
                var3 = var2.bind(var3)(var1);
                var1 = _closure1_slot67;
                if(!(var1 === var3)) { _fun0031_ip = 15; continue _fun0031 }
case 7:
                var5 = _closure1_slot102;
                var2 = {};
                var1 = _closure1_slot43;
                var1 = var1.CHANNEL;
                var2['section'] = var1;
                var1 = _closure1_slot42;
                var1 = var1.ACK_CHANNEL_SECTION_STORE_UPDATE;
                var2['object'] = var1;
                var1 = _closure1_slot41;
                var1 = var1.ACK_AUTOMATIC;
                var2['objectType'] = var1;
                var1 = undefined;
                var1 = var5.bind(var1)(var2, var3);
                if(var1) { _fun0031_ip = 174; continue _fun0031 }
case 175:
                var1 = false;
case 174:
                _fun0031_ip = 176; continue _fun0031;
case 15:
                var6 = _closure1_slot109;
                var5 = _closure1_slot67;
                var2 = undefined;
                var1 = var6.bind(var2)(var5);
                _closure1_slot67 = var3;
case 176:
                return var1;
            }
        };
        var _closure1_slot107 = var1;
        var1 = function clearManualAck(arg1) {
            _fun0032: for(var _fun0032_ip = 0; ; ) switch(_fun0032_ip) {
case 0:
                var3 = arg1;
                var1 = null;
                if(!(var1 != var3)) { _fun0032_ip = 172; continue _fun0032 }
case 40:
                var2 = _closure1_slot79;
                var1 = var2.get;
                var2 = var1.bind(var2)(var3);
                var1 = false;
                var2['isManualAck'] = var1;
case 172:
                var1 = undefined;
                return var1;
            }
        };
        var _closure1_slot108 = var1;
        var1 = function clearOldestUnreadMessageId(arg1) {
            _fun0033: for(var _fun0033_ip = 0; ; ) switch(_fun0033_ip) {
case 0:
                var4 = arg1;
                var3 = null;
                if(!(var3 != var4)) { _fun0033_ip = 155; continue _fun0033 }
case 40:
                var2 = _closure1_slot79;
                var1 = var2.get;
                var2 = var1.bind(var2)(var4);
                var1 = var2.hasUnread;
                var1 = var1.bind(var2)();
                var1 = !var1;
                if(!var1) { _fun0033_ip = 163; continue _fun0033 }
case 52:
                var2['oldestUnreadMessageId'] = var3;
                var1 = true;
case 163:
                return var1;
case 155:
                var1 = false;
                return var1;
            }
        };
        var _closure1_slot109 = var1;
        var16 = function handleMessageAck(arg1) {
            _fun0034: for(var _fun0034_ip = 0; ; ) switch(_fun0034_ip) {
case 0:
                var2 = arg1;
                var4 = var2.channelId;
                var6 = var2.messageId;
                var1 = var2.manual;
                var5 = var2.newMentionCount;
                var3 = _closure1_slot79;
                var2 = var3.get;
                var4 = var2.bind(var3)(var4);
                if(var1) { _fun0034_ip = 134; continue _fun0034 }
case 177:
                var1 = var4._ackMessageId;
                var1 = var6 !== var1;
                if(!var1) { _fun0034_ip = 178; continue _fun0034 }
case 118:
                var3 = var4.ack;
                var2 = {'messageId': null, 'local': true, 'trackAnalytics': false};
                var2['messageId'] = var6;
                var1 = var3.bind(var4)(var2);
case 178:
                _fun0034_ip = 179; continue _fun0034;
case 134:
                var3 = var4.rebuildChannelState;
                var2 = true;
                var3 = var3.bind(var4)(var6, var2, var5);
                var3 = var4.clearOutgoingAck;
                var3 = var3.bind(var4)();
                var1 = true;
case 179:
                return var1;
            }
        };
        var _closure1_slot110 = var16;
        var12 = function handleGuildFeatureAck(arg1) {
            var1 = arg1;
            var10 = var1.id;
            var9 = var1.ackType;
            var8 = var1.ackedId;
            var7 = var1.local;
            var2 = _closure1_slot112;
            var11 = undefined;
            var1 = var11[var2](var10, var9, var8, var7, var6);
            return var1;
        };
        var _closure1_slot111 = var12;
        var1 = function handleNonChannelAck(arg1, arg2, arg3, arg4) {
            _fun0035: for(var _fun0035_ip = 0; ; ) switch(_fun0035_ip) {
case 0:
                var8 = arg3;
                var7 = arg4;
                var5 = _closure1_slot79;
                var4 = var5.get;
                var2 = arg1;
                var1 = arg2;
                var5 = var4.bind(var5)(var2, var1);
                var1 = var5.ackMessageId;
                var1 = var8 !== var1;
                if(!var1) { _fun0035_ip = 180; continue _fun0035 }
case 128:
                var4 = var5.lastMessageId;
                var2 = var5.ackMessageId;
                var1 = var4 !== var2;
case 180:
                if(!var1) { _fun0035_ip = 123; continue _fun0035 }
case 133:
                var2 = var5.lastMessageId;
                var6 = null;
                var2 = var6 != var2;
                if(var2) { _fun0035_ip = 175; continue _fun0035 }
case 125:
                var9 = var5.mentionCount;
                var4 = 0;
                var2 = var4 !== var9;
case 175:
                if(!var2) { _fun0035_ip = 110; continue _fun0035 }
case 164:
                if(!(var6 == var8)) { _fun0035_ip = 55; continue _fun0035 }
case 181:
                var8 = var5.lastMessageId;
case 55:
                if(!(var6 == var8)) { _fun0035_ip = 59; continue _fun0035 }
case 120:
                var9 = _closure1_slot1;
                var4 = _closure1_slot2;
                var3 = 42;
                var4 = var4[var3];
                var3 = undefined;
                var9 = var9.bind(var3)(var4);
                var4 = var9.fromTimestamp;
                var3 = var5.getAckTimestamp;
                var3 = var3.bind(var5)();
                var8 = var4.bind(var9)(var3);
case 59:
                var4 = var5.ack;
                var3 = {};
                var3['messageId'] = var8;
                var6 = var6 == var7;
                if(var6) { _fun0035_ip = 182; continue _fun0035 }
case 183:
                var6 = var7;
case 182:
                var3['local'] = var6;
                var6 = false;
                var3['trackAnalytics'] = var6;
                var2 = var4.bind(var5)(var3);
case 110:
                var1 = var2;
case 123:
                return var1;
            }
        };
        var _closure1_slot112 = var1;
        var11 = global;
        var19 = var11.Object;
        var5 = var19.defineProperty;
        var2 = {};
        var1 = true;
        var2['value'] = var1;
        var1 = '__esModule';
        var1 = var5.bind(var19)(var3, var1, var2);
        var19 = 0;
        var2 = var8[var19];
        var1 = undefined;
        var2 = var10.bind(var1)(var2);
        var _closure1_slot3 = var2;
        var22 = 1;
        var2 = var8[var22];
        var2 = var10.bind(var1)(var2);
        var _closure1_slot4 = var2;
        var21 = 2;
        var2 = var8[var21];
        var2 = var10.bind(var1)(var2);
        var _closure1_slot5 = var2;
        var2 = 3;
        var2 = var8[var2];
        var2 = var10.bind(var1)(var2);
        var _closure1_slot6 = var2;
        var20 = 4;
        var2 = var8[var20];
        var2 = var10.bind(var1)(var2);
        var _closure1_slot7 = var2;
        var2 = 5;
        var2 = var8[var2];
        var2 = var10.bind(var1)(var2);
        var _closure1_slot8 = var2;
        var2 = 6;
        var2 = var8[var2];
        var2 = var10.bind(var1)(var2);
        var _closure1_slot9 = var2;
        var2 = 7;
        var2 = var8[var2];
        var2 = var10.bind(var1)(var2);
        var _closure1_slot10 = var2;
        var2 = 8;
        var2 = var8[var2];
        var2 = var10.bind(var1)(var2);
        var _closure1_slot11 = var2;
        var2 = 9;
        var2 = var8[var2];
        var2 = var10.bind(var1)(var2);
        var _closure1_slot12 = var2;
        var2 = 10;
        var2 = var8[var2];
        var2 = var10.bind(var1)(var2);
        var _closure1_slot13 = var2;
        var2 = 11;
        var5 = var8[var2];
        var5 = var10.bind(var1)(var5);
        var _closure1_slot14 = var5;
        var2 = var8[var2];
        var2 = var7.bind(var1)(var2);
        var2 = var2.isEventUpcoming;
        var _closure1_slot15 = var2;
        var2 = 12;
        var2 = var8[var2];
        var2 = var10.bind(var1)(var2);
        var _closure1_slot16 = var2;
        var2 = 13;
        var2 = var8[var2];
        var2 = var10.bind(var1)(var2);
        var _closure1_slot17 = var2;
        var2 = 14;
        var2 = var8[var2];
        var2 = var10.bind(var1)(var2);
        var _closure1_slot18 = var2;
        var2 = 15;
        var2 = var8[var2];
        var2 = var10.bind(var1)(var2);
        var _closure1_slot19 = var2;
        var2 = 16;
        var2 = var8[var2];
        var2 = var10.bind(var1)(var2);
        var _closure1_slot20 = var2;
        var2 = 17;
        var2 = var8[var2];
        var2 = var10.bind(var1)(var2);
        var _closure1_slot21 = var2;
        var2 = 18;
        var2 = var8[var2];
        var2 = var7.bind(var1)(var2);
        var5 = var2.isReadableType;
        var _closure1_slot22 = var5;
        var5 = var2.isThread;
        var _closure1_slot23 = var5;
        var5 = var2.isPrivate;
        var _closure1_slot24 = var5;
        var5 = var2.ALL_CHANNEL_TYPES;
        var _closure1_slot25 = var5;
        var2 = var2.THREAD_CHANNEL_TYPES;
        var _closure1_slot26 = var2;
        var2 = 19;
        var2 = var8[var2];
        var2 = var10.bind(var1)(var2);
        var _closure1_slot27 = var2;
        var2 = 20;
        var2 = var8[var2];
        var2 = var10.bind(var1)(var2);
        var _closure1_slot28 = var2;
        var2 = 21;
        var2 = var8[var2];
        var2 = var10.bind(var1)(var2);
        var _closure1_slot29 = var2;
        var2 = 22;
        var2 = var8[var2];
        var2 = var10.bind(var1)(var2);
        var _closure1_slot30 = var2;
        var2 = 23;
        var2 = var8[var2];
        var2 = var10.bind(var1)(var2);
        var _closure1_slot31 = var2;
        var2 = 24;
        var2 = var8[var2];
        var2 = var10.bind(var1)(var2);
        var _closure1_slot32 = var2;
        var2 = 25;
        var2 = var8[var2];
        var2 = var10.bind(var1)(var2);
        var _closure1_slot33 = var2;
        var2 = 26;
        var2 = var8[var2];
        var2 = var10.bind(var1)(var2);
        var _closure1_slot34 = var2;
        var2 = 27;
        var2 = var8[var2];
        var2 = var10.bind(var1)(var2);
        var _closure1_slot35 = var2;
        var2 = 28;
        var2 = var8[var2];
        var2 = var10.bind(var1)(var2);
        var _closure1_slot36 = var2;
        var2 = 29;
        var2 = var8[var2];
        var23 = var10.bind(var1)(var2);
        var _closure1_slot37 = var23;
        var24 = 30;
        var2 = var8[var24];
        var2 = var10.bind(var1)(var2);
        var _closure1_slot38 = var2;
        var2 = 31;
        var2 = var8[var2];
        var2 = var10.bind(var1)(var2);
        var _closure1_slot39 = var2;
        var2 = 32;
        var2 = var8[var2];
        var2 = var10.bind(var1)(var2);
        var _closure1_slot40 = var2;
        var2 = 33;
        var2 = var8[var2];
        var5 = var7.bind(var1)(var2);
        var2 = var5.AnalyticsObjectTypes;
        var _closure1_slot41 = var2;
        var2 = var5.AnalyticsObjects;
        var _closure1_slot42 = var2;
        var2 = var5.AnalyticsSections;
        var _closure1_slot43 = var2;
        var2 = var5.Endpoints;
        var _closure1_slot44 = var2;
        var2 = var5.ChannelLayouts;
        var _closure1_slot45 = var2;
        var2 = var5.OverlayWidgets;
        var2 = var5.CURRENT_APP_CONTEXT;
        var _closure1_slot46 = var2;
        var2 = var5.ChannelTypes;
        var _closure1_slot47 = var2;
        var2 = var5.BasicPermissions;
        var _closure1_slot48 = var2;
        var25 = var5.Permissions;
        var _closure1_slot49 = var25;
        var25 = var5.MessageTypes;
        var _closure1_slot50 = var25;
        var25 = var5.RelationshipTypes;
        var _closure1_slot51 = var25;
        var25 = var5.ChannelTypesSets;
        var _closure1_slot52 = var25;
        var25 = var5.UserNotificationSettings;
        var _closure1_slot53 = var25;
        var25 = var5.MessageTypesSets;
        var _closure1_slot54 = var25;
        var5 = var5.AppStates;
        var _closure1_slot55 = var5;
        var5 = 34;
        var5 = var8[var5];
        var5 = var7.bind(var1)(var5);
        var25 = var5.ActivityPanelModes;
        var _closure1_slot56 = var25;
        var5 = var5.FocusedActivityLayouts;
        var _closure1_slot57 = var5;
        var5 = 35;
        var5 = var8[var5];
        var5 = var7.bind(var1)(var5);
        var25 = var5.ChannelFlags;
        var _closure1_slot58 = var25;
        var5 = var5.isStaticChannelRoute;
        var _closure1_slot59 = var5;
        var5 = 36;
        var5 = var8[var5];
        var5 = var7.bind(var1)(var5);
        var5 = var5.GuildScheduledEventStatus;
        var _closure1_slot60 = var5;
        var5 = 37;
        var5 = var8[var5];
        var5 = var7.bind(var1)(var5);
        var5 = var5.ReadStateTypes;
        var _closure1_slot61 = var5;
        var5 = 38;
        var5 = var8[var5];
        var5 = var7.bind(var1)(var5);
        var5 = var5.ThreadMemberFlags;
        var _closure1_slot62 = var5;
        var5 = 39;
        var5 = var8[var5];
        var25 = var10.bind(var1)(var5);
        var5 = var25.prototype;
        var26 = Object.create(var5, {constructor: {value: var25}});
        var5 = 'ReadStateStore';
        var30 = var26;
        var29 = var5;
        var25 = new var30[var25](var29, var28);
        var25 = var25 instanceof Object ? var25 : var26;
        var _closure1_slot63 = var25;
        var25 = function isOverlayChannelVisible() {
            var1 = false;
            return var1;
        };
        var _closure1_slot64 = var25;
        var25 = 40;
        var25 = var8[var25];
        var25 = var7.bind(var1)(var25);
        var25 = var25.OVERLAY_SUPPORTED;
        if(!var25) { _fun0001_ip = 184; continue _fun0001 }
case 185:
        var25 = 41;
        var25 = var8[var25];
        var25 = var7.bind(var1)(var25);
        var25 = var25.isOverlayChannelVisible;
        _closure1_slot64 = var25;
case 184:
        var25 = var2.VIEW_CHANNEL;
        var2 = var2.READ_MESSAGE_HISTORY;
        var2 = var25 | var2;
        var _closure1_slot65 = var2;
        var2 = var23.getChannelId;
        var2 = var2.bind(var23)();
        var _closure1_slot66 = var2;
        var2 = null;
        var _closure1_slot67 = var2;
        var _closure1_slot68 = var2;
        var23 = false;
        var _closure1_slot69 = var23;
        var25 = new Array(0);
        var _closure1_slot70 = var25;
        var _closure1_slot71 = var23;
        var _closure1_slot72 = var2;
        var23 = function() {
            var4 = _closure1_slot9;
            var3 = function AutoAckableChannelTracker() {
                var3 = this;
                var4 = _closure1_slot8;
                var2 = _closure2_slot0;
                var1 = undefined;
                var2 = var4.bind(var1)(var3, var2);
                var2 = {};
                var3['channelWindowIds'] = var2;
                return var1;
            };
            var _closure2_slot0 = var3;
            var1 = {};
            var2 = 'addWindowId';
            var1['key'] = var2;
            var2 = function value(arg1, arg2) {
                _fun0036: for(var _fun0036_ip = 0; ; ) switch(_fun0036_ip) {
case 0:
                    var2 = arg1;
                    var1 = this;
                    var3 = var1.channelWindowIds;
                    var4 = var3[var2];
                    var3 = null;
                    if(!(var3 == var4)) { _fun0036_ip = 186; continue _fun0036 }
case 46:
                    var4 = var1.channelWindowIds;
                    var3 = global;
                    var3 = var3.Set;
                    var5 = var3.prototype;
                    var5 = Object.create(var5, {constructor: {value: var3}});
                    var7 = var5;
                    var3 = new var7[var3](var6);
                    var3 = var3 instanceof Object ? var3 : var5;
                    var4[var2] = var3;
case 186:
                    var1 = var1.channelWindowIds;
                    var3 = var1[var2];
                    var2 = var3.add;
                    var1 = arg2;
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                }
            };
            var1['value'] = var2;
            var2 = new Array(8);
            var2[0] = var1;
            var1 = {};
            var6 = 'hasWindowId';
            var1['key'] = var6;
            var6 = function value(arg1, arg2) {
                _fun0037: for(var _fun0037_ip = 0; ; ) switch(_fun0037_ip) {
case 0:
                    var3 = arg1;
                    var2 = this;
                    var1 = var2.channelWindowIds;
                    var4 = var1[var3];
                    var1 = null;
                    var1 = var1 != var4;
                    if(!var1) { _fun0037_ip = 132; continue _fun0037 }
case 49:
                    var2 = var2.channelWindowIds;
                    var4 = var2[var3];
                    var3 = var4.has;
                    var2 = arg2;
                    var1 = var3.bind(var4)(var2);
case 132:
                    return var1;
                }
            };
            var1['value'] = var6;
            var2[1] = var1;
            var1 = {};
            var6 = 'isChannelAckable';
            var1['key'] = var6;
            var6 = function value(arg1) {
                _fun0038: for(var _fun0038_ip = 0; ; ) switch(_fun0038_ip) {
case 0:
                    var3 = arg1;
                    var2 = this;
                    var1 = var2.channelWindowIds;
                    var4 = var1[var3];
                    var1 = null;
                    var1 = var1 != var4;
                    if(!var1) { _fun0038_ip = 6; continue _fun0038 }
case 49:
                    var2 = var2.channelWindowIds;
                    var2 = var2[var3];
                    var3 = var2.size;
                    var2 = 0;
                    var1 = var3 > var2;
case 6:
                    return var1;
                }
            };
            var1['value'] = var6;
            var2[2] = var1;
            var1 = {};
            var6 = 'getAllWindowIds';
            var1['key'] = var6;
            var6 = function value(arg1) {
                _fun0039: for(var _fun0039_ip = 0; ; ) switch(_fun0039_ip) {
case 0:
                    var4 = arg1;
                    var1 = this;
                    var2 = var1.channelWindowIds;
                    var3 = var2[var4];
                    var2 = null;
                    if(!(var2 != var3)) { _fun0039_ip = 155; continue _fun0039 }
case 46:
                    var2 = global;
                    var3 = var2.Array;
                    var2 = var3.from;
                    var1 = var1.channelWindowIds;
                    var1 = var1[var4];
                    var1 = var2.bind(var3)(var1);
                    _fun0039_ip = 32; continue _fun0039;
case 155:
                    var1 = new Array(0);
case 32:
                    return var1;
                }
            };
            var1['value'] = var6;
            var2[3] = var1;
            var1 = {};
            var6 = 'getAllChannelIdsForWindowId';
            var1['key'] = var6;
            var6 = function value(arg1) {
                _fun0040: for(var _fun0040_ip = 0; ; ) switch(_fun0040_ip) {
case 0:
                    var11 = arg1;
                    var1 = global;
                    var2 = var1.Set;
                    var3 = var2.prototype;
                    var3 = Object.create(var3, {constructor: {value: var2}});
                    var16 = var3;
                    var2 = new var16[var2](var15);
                    var3 = var2 instanceof Object ? var2 : var3;
                    var4 = _closure1_slot83;
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var2 = 42;
                    var2 = var6[var2];
                    var9 = undefined;
                    var6 = var5.bind(var9)(var2);
                    var5 = var6.entries;
                    var2 = this;
                    var2 = var2.channelWindowIds;
                    var2 = var5.bind(var6)(var2);
                    var8 = var4.bind(var9)(var2);
                    var4 = var8.bind(var9)();
                    var2 = var4.done;
                    var7 = 2;
                    var6 = 0;
                    var5 = 1;
                    if(var2) { _fun0040_ip = 187; continue _fun0040 }
case 55:
                    var12 = var4.value;
                    var2 = _closure1_slot7;
                    var2 = var2.bind(var9)(var12, var7);
                    var12 = var2[var6];
                    var13 = var2[var5];
                    var2 = var13.has;
                    var2 = var2.bind(var13)(var11);
                    if(!var2) { _fun0040_ip = 188; continue _fun0040 }
case 136:
                    var2 = var3.add;
                    var2 = var2.bind(var3)(var12);
case 188:
                    var12 = var8.bind(var9)();
                    var2 = var12.done;
                    var4 = var12;
                    if(!var2) { _fun0040_ip = 55; continue _fun0040 }
case 187:
                    var2 = var1.Array;
                    var1 = var2.from;
                    var1 = var1.bind(var2)(var3);
                    return var1;
                }
            };
            var1['value'] = var6;
            var2[4] = var1;
            var1 = {};
            var6 = 'isAnyWindowFocused';
            var1['key'] = var6;
            var6 = function value(arg1) {
                _fun0041: for(var _fun0041_ip = 0; ; ) switch(_fun0041_ip) {
case 0:
                    var1 = this;
                    var2 = var1.channelWindowIds;
                    var1 = arg1;
                    var2 = var2[var1];
                    var1 = null;
                    if(!(var1 != var2)) { _fun0041_ip = 15; continue _fun0041 }
case 46:
                    var1 = _closure1_slot83;
                    var4 = undefined;
                    var3 = var1.bind(var4)(var2);
                    var2 = var3.bind(var4)();
                    var1 = var2.done;
                    if(var1) { _fun0041_ip = 175; continue _fun0041 }
case 132:
                    var7 = var2.value;
                    var6 = _closure1_slot40;
                    var1 = var6.isFocused;
                    var1 = var1.bind(var6)(var7);
                    if(var1) { _fun0041_ip = 189; continue _fun0041 }
case 53:
                    var6 = var3.bind(var4)();
                    var1 = var6.done;
                    var2 = var6;
                    if(var1) { _fun0041_ip = 175; continue _fun0041 }
case 13:
                    _fun0041_ip = 132; continue _fun0041;
case 189:
                    var1 = true;
                    return var1;
case 175:
                    var1 = false;
                    return var1;
case 15:
                    var1 = false;
                    return var1;
                }
            };
            var1['value'] = var6;
            var2[5] = var1;
            var1 = {};
            var6 = 'removeWindowId';
            var1['key'] = var6;
            var6 = function value(arg1, arg2) {
                _fun0042: for(var _fun0042_ip = 0; ; ) switch(_fun0042_ip) {
case 0:
                    var2 = arg1;
                    var1 = this;
                    var3 = var1.channelWindowIds;
                    var4 = var3[var2];
                    var3 = null;
                    if(!(var3 != var4)) { _fun0042_ip = 115; continue _fun0042 }
case 46:
                    var3 = var1.channelWindowIds;
                    var5 = var3[var2];
                    var4 = var5.delete;
                    var3 = arg2;
                    var3 = var4.bind(var5)(var3);
                    var3 = var1.channelWindowIds;
                    var3 = var3[var2];
                    var4 = var3.size;
                    var3 = 0;
                    if(!(var3 === var4)) { _fun0042_ip = 115; continue _fun0042 }
case 190:
                    var1 = var1.channelWindowIds;
                    var1 = delete var1[var2];
case 115:
                    var1 = undefined;
                    return var1;
                }
            };
            var1['value'] = var6;
            var2[6] = var1;
            var1 = {};
            var6 = 'forEachChannel';
            var1['key'] = var6;
            var5 = function value(arg1) {
                _fun0043: for(var _fun0043_ip = 0; ; ) switch(_fun0043_ip) {
case 0:
                    var9 = arg1;
                    var3 = _closure1_slot83;
                    var4 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 42;
                    var2 = var2[var1];
                    var1 = undefined;
                    var5 = var4.bind(var1)(var2);
                    var4 = var5.entries;
                    var2 = this;
                    var2 = var2.channelWindowIds;
                    var2 = var4.bind(var5)(var2);
                    var7 = var3.bind(var1)(var2);
                    var3 = var7.bind(var1)();
                    var2 = var3.done;
                    var6 = 2;
                    var5 = 0;
                    var4 = 1;
                    if(var2) { _fun0043_ip = 191; continue _fun0043 }
case 162:
                    var10 = var3.value;
                    var2 = _closure1_slot7;
                    var2 = var2.bind(var1)(var10, var6);
                    var10 = var2[var5];
                    var2 = var2[var4];
                    var2 = var9.bind(var1)(var10, var2);
                    var10 = var7.bind(var1)();
                    var2 = var10.done;
                    var3 = var10;
                    if(!var2) { _fun0043_ip = 162; continue _fun0043 }
case 191:
                    return var1;
                }
            };
            var1['value'] = var5;
            var2[7] = var1;
            var1 = undefined;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
        };
        var23 = var23.bind(var1)();
        var25 = var23.prototype;
        var25 = Object.create(var25, {constructor: {value: var23}});
        var30 = var25;
        var23 = new var30[var23](var29);
        var23 = var23 instanceof Object ? var23 : var25;
        var _closure1_slot73 = var23;
        var23 = 43;
        var23 = var8[var23];
        var23 = var10.bind(var1)(var23);
        var23 = var23.Millis;
        var23 = var23.DAY;
        var23 = var24 * var23;
        var _closure1_slot74 = var23;
        var _closure1_slot75 = var19;
        var _closure1_slot76 = var19;
        var _closure1_slot77 = var2;
        var2 = {};
        var2['IS_GUILD_CHANNEL'] = var22;
        var19 = 'IS_GUILD_CHANNEL';
        var2[var22] = var19;
        var2['IS_THREAD'] = var21;
        var19 = 'IS_THREAD';
        var2[var21] = var19;
        var2['IS_MENTION_LOW_IMPORTANCE'] = var20;
        var19 = 'IS_MENTION_LOW_IMPORTANCE';
        var2[var20] = var19;
        var _closure1_slot78 = var2;
        var2 = function() {
            var5 = function ReadState(arg1) {
                _fun0044: for(var _fun0044_ip = 0; ; ) switch(_fun0044_ip) {
case 0:
                    var4 = arguments[1];
                    var3 = this;
                    var1 = undefined;
                    if(!(var4 === var1)) { _fun0044_ip = 49; continue _fun0044 }
case 47:
                    var2 = _closure1_slot61;
                    var4 = var2.CHANNEL;
case 49:
                    var6 = _closure1_slot8;
                    var5 = _closure2_slot0;
                    var5 = var6.bind(var1)(var3, var5);
                    var2 = _closure1_slot61;
                    var2 = var2.CHANNEL;
                    var3['type'] = var2;
                    var2 = null;
                    var3['outgoingAckTimer'] = var2;
                    var3['ackMessageIdAtChannelSelect'] = var2;
                    var3['ackedWhileCached'] = var1;
                    var5 = arg1;
                    var3['channelId'] = var5;
                    var3['type'] = var4;
                    var3['_guildId'] = var2;
                    var5 = false;
                    var3['_isThread'] = var5;
                    var3['_isActiveThread'] = var5;
                    var3['_isJoinedThread'] = var5;
                    var3['_isResourceChannel'] = var5;
                    var3['_persisted'] = var5;
                    var3['loadedMessages'] = var5;
                    var3['_lastMessageId'] = var2;
                    var4 = 0;
                    var3['_lastMessageTimestamp'] = var4;
                    var3['_ackMessageId'] = var2;
                    var3['_ackMessageTimestamp'] = var4;
                    var3['isManualAck'] = var5;
                    var3['ackPinTimestamp'] = var4;
                    var3['lastPinTimestamp'] = var4;
                    var3['_oldestUnreadMessageId'] = var2;
                    var3['oldestUnreadMessageIdStale'] = var5;
                    var3['estimated'] = var5;
                    var3['_unreadCount'] = var4;
                    var3['_mentionCount'] = var4;
                    var3['outgoingAck'] = var2;
                    return var1;
                }
            };
            var _closure2_slot0 = var5;
            var4 = _closure1_slot9;
            var1 = {};
            var2 = 'serialize';
            var1['key'] = var2;
            var2 = function value(arg1) {
                _fun0045: for(var _fun0045_ip = 0; ; ) switch(_fun0045_ip) {
case 0:
                    var1 = this;
                    var22 = var1.channelId;
                    var21 = var1.type;
                    var20 = var1._guildId;
                    var19 = var1._isThread;
                    var18 = var1._isActiveThread;
                    var17 = var1._isJoinedThread;
                    var16 = var1._persisted;
                    var15 = var1.loadedMessages;
                    var14 = var1._lastMessageId;
                    var13 = var1._lastMessageTimestamp;
                    var12 = var1._ackMessageId;
                    var11 = var1._ackMessageTimestamp;
                    var10 = var1.ackPinTimestamp;
                    var9 = var1.isManualAck;
                    var8 = var1.lastPinTimestamp;
                    var7 = var1._oldestUnreadMessageId;
                    var6 = var1.oldestUnreadMessageIdStale;
                    var5 = var1.estimated;
                    var4 = var1._mentionCount;
                    var3 = var1.flags;
                    var2 = var1.lastViewed;
                    var1 = arg1;
                    if(var1) { _fun0045_ip = 192; continue _fun0045 }
case 193:
                    var1 = {};
                    var1['channelId'] = var22;
                    var1['type'] = var21;
                    var1['_guildId'] = var20;
                    var1['_persisted'] = var16;
                    var1['_lastMessageId'] = var14;
                    var1['_lastMessageTimestamp'] = var13;
                    var1['_ackMessageId'] = var12;
                    var1['_ackMessageTimestamp'] = var11;
                    var1['ackPinTimestamp'] = var10;
                    var1['lastPinTimestamp'] = var8;
                    var1['_mentionCount'] = var4;
                    var1['flags'] = var3;
                    var23 = null;
                    var23 = var23 != var2;
                    if(!var23) { _fun0045_ip = 194; continue _fun0045 }
case 51:
                    var24 = 0;
                    var23 = var2 > var24;
case 194:
                    if(!var23) { _fun0045_ip = 195; continue _fun0045 }
case 196:
                    var1['lastViewed'] = var2;
case 195:
                    if(!var19) { _fun0045_ip = 197; continue _fun0045 }
case 62:
                    var1['_isThread'] = var19;
                    var1['_isActiveThread'] = var18;
                    var1['_isJoinedThread'] = var17;
case 197:
                    return var1;
case 192:
                    var1 = {};
                    var1['channelId'] = var22;
                    var1['type'] = var21;
                    var1['_guildId'] = var20;
                    var1['_isThread'] = var19;
                    var1['_isActiveThread'] = var18;
                    var1['_isJoinedThread'] = var17;
                    var1['_persisted'] = var16;
                    var1['loadedMessages'] = var15;
                    var1['_lastMessageId'] = var14;
                    var1['_lastMessageTimestamp'] = var13;
                    var1['_ackMessageId'] = var12;
                    var1['_ackMessageTimestamp'] = var11;
                    var1['ackPinTimestamp'] = var10;
                    var1['isManualAck'] = var9;
                    var1['lastPinTimestamp'] = var8;
                    var1['_oldestUnreadMessageId'] = var7;
                    var1['oldestUnreadMessageIdStale'] = var6;
                    var1['estimated'] = var5;
                    var1['_mentionCount'] = var4;
                    var1['flags'] = var3;
                    var1['lastViewed'] = var2;
                    return var1;
                }
            };
            var1['value'] = var2;
            var3 = new Array(39);
            var3[0] = var1;
            var1 = {};
            var2 = 'deserializeForOverlay';
            var1['key'] = var2;
            var2 = function value(arg1) {
                _fun0046: for(var _fun0046_ip = 0; ; ) switch(_fun0046_ip) {
case 0:
                    var2 = arg1;
                    var1 = this;
                    var4 = var2.channelId;
                    var24 = var2.type;
                    var20 = var2._guildId;
                    var23 = var2._isThread;
                    var17 = var2._isActiveJoinedThread;
                    var22 = var2._isActiveThread;
                    var21 = var2._isJoinedThread;
                    var19 = var2._persisted;
                    var18 = var2.loadedMessages;
                    var16 = var2._lastMessageId;
                    var15 = var2._lastMessageTimestamp;
                    var14 = var2._ackMessageId;
                    var13 = var2._ackMessageTimestamp;
                    var11 = var2.ackPinTimestamp;
                    var12 = var2.isManualAck;
                    var10 = var2.lastPinTimestamp;
                    var6 = var2._oldestUnreadMessageId;
                    var9 = var2.oldestUnreadMessageIdStale;
                    var8 = var2.estimated;
                    var7 = var2._unreadCount;
                    var5 = var2._mentionCount;
                    var3 = var2.flags;
                    var2 = var2.lastViewed;
                    var1['channelId'] = var4;
                    var4 = null;
                    if(!(var4 == var24)) { _fun0046_ip = 157; continue _fun0046 }
case 167:
                    var25 = _closure1_slot61;
                    var24 = var25.CHANNEL;
case 157:
                    var1['type'] = var24;
                    var1['_guildId'] = var20;
                    var20 = var4 != var23;
                    if(!var20) { _fun0046_ip = 198; continue _fun0046 }
case 23:
                    var20 = var23;
case 198:
                    var1['_isThread'] = var20;
                    if(!(var4 == var17)) { _fun0046_ip = 25; continue _fun0046 }
case 51:
                    var20 = var4 != var22;
                    if(!var20) { _fun0046_ip = 199; continue _fun0046 }
case 200:
                    var20 = var22;
case 199:
                    var1['_isActiveThread'] = var20;
                    var20 = var4 != var21;
                    if(!var20) { _fun0046_ip = 116; continue _fun0046 }
case 201:
                    var20 = var21;
case 116:
                    var1['_isJoinedThread'] = var20;
                    _fun0046_ip = 202; continue _fun0046;
case 25:
                    var1['_isActiveThread'] = var17;
                    var1['_isJoinedThread'] = var17;
case 202:
                    var17 = false;
                    var17 = var17 !== var19;
                    var1['_persisted'] = var17;
                    var17 = var4 != var18;
                    if(!var17) { _fun0046_ip = 203; continue _fun0046 }
case 28:
                    var17 = var18;
case 203:
                    var1['loadedMessages'] = var17;
                    var1['_lastMessageId'] = var16;
                    var1['_lastMessageTimestamp'] = var15;
                    var1['_ackMessageId'] = var14;
                    var1['_ackMessageTimestamp'] = var13;
                    var1['ackPinTimestamp'] = var11;
                    var11 = var4 != var12;
                    if(!var11) { _fun0046_ip = 204; continue _fun0046 }
case 205:
                    var11 = var12;
case 204:
                    var1['isManualAck'] = var11;
                    var1['lastPinTimestamp'] = var10;
                    var1['_oldestUnreadMessageId'] = var6;
                    var6 = var4 != var9;
                    if(!var6) { _fun0046_ip = 206; continue _fun0046 }
case 207:
                    var6 = var9;
case 206:
                    var1['oldestUnreadMessageIdStale'] = var6;
                    var6 = var4 != var8;
                    if(!var6) { _fun0046_ip = 208; continue _fun0046 }
case 209:
                    var6 = var8;
case 208:
                    var1['estimated'] = var6;
                    var8 = var4 != var7;
                    var4 = 0;
                    var6 = 0;
                    if(!var8) { _fun0046_ip = 210; continue _fun0046 }
case 211:
                    var6 = var7;
case 210:
                    var1['_unreadCount'] = var6;
                    var1['_mentionCount'] = var5;
                    var1['flags'] = var3;
                    var1['lastViewed'] = var2;
                    var3 = _closure2_slot0;
                    var6 = var3._mentionChannels;
                    var5 = var6.delete;
                    var3 = var1.channelId;
                    var3 = var5.bind(var6)(var3);
                    var3 = var1._mentionCount;
                    var3 = var3 > var4;
                    if(!var3) { _fun0046_ip = 212; continue _fun0046 }
case 213:
                    var4 = var1.canHaveMentions;
                    var3 = var4.bind(var1)();
case 212:
                    if(!var3) { _fun0046_ip = 214; continue _fun0046 }
case 215:
                    var2 = _closure2_slot0;
                    var3 = var2._mentionChannels;
                    var2 = var3.add;
                    var1 = var1.channelId;
                    var1 = var2.bind(var3)(var1);
case 214:
                    var1 = undefined;
                    return var1;
                }
            };
            var1['value'] = var2;
            var3[1] = var1;
            var1 = {};
            var2 = 'incrementGuildUnreadsSentinel';
            var1['key'] = var2;
            var2 = function value() {
                _fun0047: for(var _fun0047_ip = 0; ; ) switch(_fun0047_ip) {
case 0:
                    var1 = this;
                    var3 = var1._guildId;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0047_ip = 216; continue _fun0047 }
case 217:
                    var3 = _closure2_slot0;
                    var2 = var3.getGuildSentinels;
                    var1 = var1._guildId;
                    var2 = var2.bind(var3)(var1);
                    var1 = var2.unreadsSentinel;
                    var1 = var1 + 1;
                    var2['unreadsSentinel'] = var1;
case 216:
                    var1 = undefined;
                    return var1;
                }
            };
            var1['value'] = var2;
            var3[2] = var1;
            var1 = {};
            var2 = 'oldestUnreadMessageId';
            var1['key'] = var2;
            var2 = function get() {
                var1 = this;
                var1 = var1._oldestUnreadMessageId;
                return var1;
            };
            var1['get'] = var2;
            var2 = function set(arg1) {
                var2 = this;
                var1 = arg1;
                var2['_oldestUnreadMessageId'] = var1;
                var1 = false;
                var2['oldestUnreadMessageIdStale'] = var1;
                var1 = undefined;
                return var1;
            };
            var1['set'] = var2;
            var3[3] = var1;
            var1 = {};
            var2 = 'lastMessageId';
            var1['key'] = var2;
            var2 = function get() {
                var1 = this;
                var1 = var1._lastMessageId;
                return var1;
            };
            var1['get'] = var2;
            var2 = function set(arg1) {
                _fun0048: for(var _fun0048_ip = 0; ; ) switch(_fun0048_ip) {
case 0:
                    var5 = arg1;
                    var2 = this;
                    var2['_lastMessageId'] = var5;
                    var1 = null;
                    var3 = var1 != var5;
                    var1 = 0;
                    if(!var3) { _fun0048_ip = 180; continue _fun0048 }
case 35:
                    var6 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var3 = 42;
                    var4 = var4[var3];
                    var3 = undefined;
                    var4 = var6.bind(var3)(var4);
                    var3 = var4.extractTimestamp;
                    var1 = var3.bind(var4)(var5);
case 180:
                    var2['_lastMessageTimestamp'] = var1;
                    var1 = undefined;
                    return var1;
                }
            };
            var1['set'] = var2;
            var3[4] = var1;
            var1 = {};
            var2 = 'lastMessageTimestamp';
            var1['key'] = var2;
            var2 = function get() {
                var1 = this;
                var1 = var1._lastMessageTimestamp;
                return var1;
            };
            var1['get'] = var2;
            var3[5] = var1;
            var1 = {};
            var2 = 'ackMessageId';
            var1['key'] = var2;
            var2 = function get() {
                var1 = this;
                var1 = var1._ackMessageId;
                return var1;
            };
            var1['get'] = var2;
            var2 = function set(arg1) {
                _fun0049: for(var _fun0049_ip = 0; ; ) switch(_fun0049_ip) {
case 0:
                    var5 = arg1;
                    var2 = this;
                    var2['_ackMessageId'] = var5;
                    var1 = null;
                    var3 = var1 != var5;
                    var1 = 0;
                    if(!var3) { _fun0049_ip = 180; continue _fun0049 }
case 35:
                    var6 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var3 = 42;
                    var4 = var4[var3];
                    var3 = undefined;
                    var4 = var6.bind(var3)(var4);
                    var3 = var4.extractTimestamp;
                    var1 = var3.bind(var4)(var5);
case 180:
                    var2['_ackMessageTimestamp'] = var1;
                    var1 = undefined;
                    return var1;
                }
            };
            var1['set'] = var2;
            var3[6] = var1;
            var1 = {};
            var2 = 'unreadCount';
            var1['key'] = var2;
            var2 = function get() {
                _fun0050: for(var _fun0050_ip = 0; ; ) switch(_fun0050_ip) {
case 0:
                    var1 = this;
                    var2 = var1._unreadCount;
                    var1 = null;
                    var3 = var1 != var2;
                    var1 = 0;
                    if(!var3) { _fun0050_ip = 35; continue _fun0050 }
case 33:
                    var1 = var2;
case 35:
                    return var1;
                }
            };
            var1['get'] = var2;
            var2 = function set(arg1) {
                _fun0051: for(var _fun0051_ip = 0; ; ) switch(_fun0051_ip) {
case 0:
                    var3 = arg1;
                    var2 = this;
                    var4 = var2._unreadCount;
                    var1 = undefined;
                    var4 = var1 !== var4;
                    if(!var4) { _fun0051_ip = 37; continue _fun0051 }
case 108:
                    var6 = var2._unreadCount;
                    var5 = 0;
                    var4 = var5 !== var6;
case 37:
                    if(!var4) { _fun0051_ip = 52; continue _fun0051 }
case 107:
                    var5 = 0;
                    var4 = var5 !== var3;
case 52:
                    if(var4) { _fun0051_ip = 8; continue _fun0051 }
case 177:
                    var4 = var2.incrementGuildUnreadsSentinel;
                    var4 = var4.bind(var2)();
case 8:
                    var2['_unreadCount'] = var3;
                    return var1;
                }
            };
            var1['set'] = var2;
            var3[7] = var1;
            var1 = {};
            var2 = 'mentionCount';
            var1['key'] = var2;
            var2 = function get() {
                var1 = this;
                var1 = var1._mentionCount;
                return var1;
            };
            var1['get'] = var2;
            var2 = function set(arg1) {
                _fun0052: for(var _fun0052_ip = 0; ; ) switch(_fun0052_ip) {
case 0:
                    var2 = arg1;
                    var1 = this;
                    var3 = var1._mentionCount;
                    var4 = 0;
                    var3 = var4 !== var3;
                    if(!var3) { _fun0052_ip = 49; continue _fun0052 }
case 108:
                    var3 = var4 !== var2;
case 49:
                    if(var3) { _fun0052_ip = 65; continue _fun0052 }
case 38:
                    var5 = var1._mentionCount;
                    var3 = var5 === var2;
case 65:
                    if(var3) { _fun0052_ip = 39; continue _fun0052 }
case 173:
                    var3 = var1.incrementGuildUnreadsSentinel;
                    var3 = var3.bind(var1)();
case 39:
                    var1['_mentionCount'] = var2;
                    var3 = _closure2_slot0;
                    var6 = var3._mentionChannels;
                    var5 = var6.delete;
                    var3 = var1.channelId;
                    var3 = var5.bind(var6)(var3);
                    var3 = var1._mentionCount;
                    var3 = var3 > var4;
                    if(!var3) { _fun0052_ip = 165; continue _fun0052 }
case 218:
                    var4 = var1.canHaveMentions;
                    var3 = var4.bind(var1)();
case 165:
                    if(!var3) { _fun0052_ip = 158; continue _fun0052 }
case 57:
                    var2 = _closure2_slot0;
                    var3 = var2._mentionChannels;
                    var2 = var3.add;
                    var1 = var1.channelId;
                    var1 = var2.bind(var3)(var1);
case 158:
                    var1 = undefined;
                    return var1;
                }
            };
            var1['set'] = var2;
            var3[8] = var1;
            var1 = {};
            var2 = 'isMentionLowImportance';
            var1['key'] = var2;
            var2 = function get() {
                _fun0053: for(var _fun0053_ip = 0; ; ) switch(_fun0053_ip) {
case 0:
                    var2 = this;
                    var3 = var2.flags;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0053_ip = 131; continue _fun0053 }
case 219:
                    var4 = var2.flags;
                    var3 = _closure1_slot78;
                    var3 = var3.IS_MENTION_LOW_IMPORTANCE;
                    var3 = var4 & var3;
                    var2 = _closure1_slot78;
                    var2 = var2.IS_MENTION_LOW_IMPORTANCE;
                    var1 = var3 === var2;
case 131:
                    return var1;
                }
            };
            var1['get'] = var2;
            var2 = function set(arg1) {
                _fun0054: for(var _fun0054_ip = 0; ; ) switch(_fun0054_ip) {
case 0:
                    var2 = this;
                    var1 = arg1;
                    if(var1) { _fun0054_ip = 3; continue _fun0054 }
case 40:
                    var3 = var2.flags;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0054_ip = 172; continue _fun0054 }
case 35:
                    var4 = var2.flags;
                    var3 = 0;
                    var1 = var3 !== var4;
case 172:
                    if(!var1) { _fun0054_ip = 220; continue _fun0054 }
case 42:
                    var3 = var2.flags;
                    var1 = _closure1_slot78;
                    var1 = var1.IS_MENTION_LOW_IMPORTANCE;
                    var1 = ~var1;
                    var1 = var3 & var1;
                    var2['flags'] = var1;
                    _fun0054_ip = 220; continue _fun0054;
case 3:
                    var1 = var2._mentionCount;
                    var3 = 0;
                    if(!(var3 === var1)) { _fun0054_ip = 220; continue _fun0054 }
case 221:
                    var1 = var2.flags;
                    var4 = null;
                    var4 = var4 != var1;
                    var3 = 0;
                    if(!var4) { _fun0054_ip = 222; continue _fun0054 }
case 218:
                    var3 = var1;
case 222:
                    var1 = _closure1_slot78;
                    var1 = var1.IS_MENTION_LOW_IMPORTANCE;
                    var1 = var3 | var1;
                    var2['flags'] = var1;
case 220:
                    var1 = undefined;
                    return var1;
                }
            };
            var1['set'] = var2;
            var3[9] = var1;
            var1 = {};
            var2 = 'guessAckMessageId';
            var1['key'] = var2;
            var2 = function value() {
                _fun0055: for(var _fun0055_ip = 0; ; ) switch(_fun0055_ip) {
case 0:
                    var1 = this;
                    var6 = _closure1_slot34;
                    var5 = var6.getMessages;
                    var4 = var1.channelId;
                    var6 = var5.bind(var6)(var4);
                    var5 = var1.ackMessageId;
                    var4 = null;
                    if(!(var4 == var5)) { _fun0055_ip = 223; continue _fun0055 }
case 224:
                    var5 = var1.isPrivate;
                    var5 = var5.bind(var1)();
                    if(!var5) { _fun0055_ip = 223; continue _fun0055 }
case 131:
                    var5 = var6.hasMoreAfter;
                    if(var5) { _fun0055_ip = 223; continue _fun0055 }
case 225:
                    var5 = var1.hasMentions;
                    var5 = var5.bind(var1)();
                    if(var5) { _fun0055_ip = 226; continue _fun0055 }
case 227:
                    var5 = var1.lastMessageId;
                    return var5;
case 226:
                    var _closure3_slot0 = var4;
                    var4 = var1.mentionCount;
                    var _closure3_slot1 = var4;
                    var4 = _closure1_slot39;
                    var3 = var4.getCurrentUser;
                    var3 = var3.bind(var4)();
                    var _closure3_slot2 = var3;
                    var5 = var6.forEach;
                    var4 = function(arg1) {
                        _fun0056: for(var _fun0056_ip = 0; ; ) switch(_fun0056_ip) {
case 0:
                            var1 = arg1;
                            var3 = _closure3_slot1;
                            var4 = 0;
                            if(!(var3 > var4)) { _fun0056_ip = 8; continue _fun0056 }
case 228:
                            var3 = var1.author;
                            var5 = var3.id;
                            var6 = _closure3_slot2;
                            var3 = null;
                            var6 = var3 == var6;
                            var3 = undefined;
                            if(var6) { _fun0056_ip = 39; continue _fun0056 }
case 52:
                            var6 = _closure3_slot2;
                            var3 = var6.id;
case 39:
                            if(!(var5 === var3)) { _fun0056_ip = 115; continue _fun0056 }
case 8:
                            var3 = _closure3_slot1;
                            if(!(var4 === var3)) { _fun0056_ip = 171; continue _fun0056 }
case 156:
                            var1 = var1.id;
                            _closure3_slot0 = var1;
                            var1 = false;
                            return var1;
case 115:
                            var1 = _closure3_slot1;
                            var1 = var1 - 1;
                            _closure3_slot1 = var1;
case 171:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var3 = true;
                    var3 = var5.bind(var6)(var4, var1, var3);
                    var2 = _closure3_slot0;
                    return var2;
case 223:
                    var1 = var1.ackMessageId;
                    return var1;
                }
            };
            var1['value'] = var2;
            var3[10] = var1;
            var1 = {};
            var2 = 'guildId';
            var1['key'] = var2;
            var2 = function get() {
                _fun0057: for(var _fun0057_ip = 0; ; ) switch(_fun0057_ip) {
case 0:
                    var1 = this;
                    var3 = var1._guildId;
                    var2 = null;
                    if(!(var2 == var3)) { _fun0057_ip = 229; continue _fun0057 }
case 217:
                    var5 = _closure1_slot29;
                    var4 = var5.getChannel;
                    var3 = var1.channelId;
                    var4 = var4.bind(var5)(var3);
                    var3 = var2 != var4;
                    var2 = null;
                    if(!var3) { _fun0057_ip = 32; continue _fun0057 }
case 6:
                    var3 = var4.getGuildId;
                    var2 = var3.bind(var4)();
case 32:
                    var1['_guildId'] = var2;
                    return var2;
case 229:
                    var1 = var1._guildId;
                    return var1;
                }
            };
            var1['get'] = var2;
            var3[11] = var1;
            var1 = {};
            var2 = 'isPrivate';
            var1['key'] = var2;
            var2 = function value() {
                _fun0058: for(var _fun0058_ip = 0; ; ) switch(_fun0058_ip) {
case 0:
                    var1 = this;
                    var4 = var1.type;
                    var3 = _closure1_slot61;
                    var3 = var3.CHANNEL;
                    if(!(var4 === var3)) { _fun0058_ip = 133; continue _fun0058 }
case 49:
                    var3 = _closure1_slot29;
                    var2 = var3.getChannel;
                    var1 = var1.channelId;
                    var3 = var2.bind(var3)(var1);
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0058_ip = 156; continue _fun0058 }
case 131:
                    var2 = var3.isPrivate;
                    var1 = var2.bind(var3)();
case 156:
                    return var1;
case 133:
                    var1 = false;
                    return var1;
                }
            };
            var1['value'] = var2;
            var3[12] = var1;
            var1 = {};
            var2 = 'rebuildChannelState';
            var1['key'] = var2;
            var2 = function value(arg1) {
                _fun0059: for(var _fun0059_ip = 0; ; ) switch(_fun0059_ip) {
case 0:
                    var5 = arg1;
                    var8 = arguments[1];
                    var3 = arguments[2];
                    var2 = this;
                    var _closure3_slot0 = var2;
                    var1 = undefined;
                    if(!(var8 === var1)) { _fun0059_ip = 63; continue _fun0059 }
case 114:
                    var8 = false;
case 63:
                    var _closure3_slot1 = var8;
                    var _closure3_slot2 = var1;
                    var _closure3_slot3 = var1;
                    var _closure3_slot4 = var1;
                    var _closure3_slot5 = var1;
                    var _closure3_slot6 = var1;
                    var4 = null;
                    var7 = var5;
                    if(!(var4 == var7)) { _fun0059_ip = 133; continue _fun0059 }
case 180:
                    var7 = var2._ackMessageId;
case 133:
                    if(!(var4 == var7)) { _fun0059_ip = 230; continue _fun0059 }
case 231:
                    var9 = var2.guessAckMessageId;
                    var7 = var9.bind(var2)();
case 230:
                    var2['ackMessageId'] = var7;
                    var5 = var4 != var5;
                    var2['isManualAck'] = var5;
                    var2['oldestUnreadMessageId'] = var4;
                    var7 = false;
                    var2['estimated'] = var7;
                    var5 = 0;
                    var2['unreadCount'] = var5;
                    if(!var8) { _fun0059_ip = 232; continue _fun0059 }
case 106:
                    var2['mentionCount'] = var5;
case 232:
                    var5 = var2.hasUnread;
                    var5 = var5.bind(var2)();
                    if(!var5) { _fun0059_ip = 233; continue _fun0059 }
case 234:
                    var9 = _closure1_slot39;
                    var8 = var9.getCurrentUser;
                    var8 = var8.bind(var9)();
                    _closure3_slot2 = var8;
                    var8 = var2.getAckTimestamp;
                    var8 = var8.bind(var2)();
                    _closure3_slot3 = var8;
                    _closure3_slot4 = var7;
                    _closure3_slot5 = var7;
                    _closure3_slot6 = var4;
                    var8 = _closure1_slot34;
                    var7 = var8.getMessages;
                    var5 = var2.channelId;
                    var8 = var7.bind(var8)(var5);
                    var7 = var8.forAll;
                    var5 = function(arg1) {
                        _fun0060: for(var _fun0060_ip = 0; ; ) switch(_fun0060_ip) {
case 0:
                            var2 = arg1;
                            var1 = _closure3_slot4;
                            if(var1) { _fun0060_ip = 65; continue _fun0060 }
case 169:
                            var4 = var2.id;
                            var1 = _closure3_slot0;
                            var1 = var1._ackMessageId;
                            var1 = var4 === var1;
                            _closure3_slot4 = var1;
                            _fun0060_ip = 133; continue _fun0060;
case 65:
                            var4 = _closure3_slot0;
                            var1 = var4._oldestUnreadMessageId;
                            var5 = null;
                            if(!(var5 == var1)) { _fun0060_ip = 180; continue _fun0060 }
case 216:
                            var1 = var2.id;
case 180:
                            var4['oldestUnreadMessageId'] = var1;
case 133:
                            var6 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var1 = 42;
                            var4 = var4[var1];
                            var1 = undefined;
                            var7 = var6.bind(var1)(var4);
                            var6 = var7.extractTimestamp;
                            var4 = var2.id;
                            var6 = var6.bind(var7)(var4);
                            var4 = _closure3_slot3;
                            if(!(!(var6 > var4))) { _fun0060_ip = 106; continue _fun0060 }
case 235:
                            var4 = true;
                            _closure3_slot5 = var4;
                            _fun0060_ip = 196; continue _fun0060;
case 106:
                            var6 = _closure3_slot0;
                            var4 = var6.unreadCount;
                            var4 = var4 + 1;
                            var6['unreadCount'] = var4;
                            var4 = _closure3_slot1;
                            if(!var4) { _fun0060_ip = 236; continue _fun0060 }
case 237:
                            var6 = _closure1_slot88;
                            var5 = _closure3_slot2;
                            var4 = var6.bind(var1)(var2, var5);
case 236:
                            if(!var4) { _fun0060_ip = 238; continue _fun0060 }
case 45:
                            var5 = _closure3_slot0;
                            var4 = var5.mentionCount;
                            var4 = var4 + 1;
                            var5['mentionCount'] = var4;
case 238:
                            var5 = _closure3_slot6;
                            var4 = null;
                            if(!(var4 == var5)) { _fun0060_ip = 112; continue _fun0060 }
case 123:
                            var2 = var2.id;
                            _fun0060_ip = 26; continue _fun0060;
case 112:
                            var2 = _closure3_slot6;
case 26:
                            _closure3_slot6 = var2;
case 196:
                            return var1;
                        }
                    };
                    var5 = var7.bind(var8)(var5);
                    var5 = var8.hasPresent;
                    var5 = var5.bind(var8)();
                    var5 = !var5;
                    if(var5) { _fun0059_ip = 143; continue _fun0059 }
case 239:
                    var9 = _closure3_slot4;
                    if(var9) { _fun0059_ip = 240; continue _fun0059 }
case 22:
                    var9 = _closure3_slot5;
case 240:
                    var7 = !var9;
                    if(var9) { _fun0059_ip = 241; continue _fun0059 }
case 242:
                    var9 = var8.length;
                    var8 = var2.unreadCount;
                    var7 = var9 === var8;
case 241:
                    var5 = var7;
case 143:
                    var2['estimated'] = var5;
                    var5 = var2._oldestUnreadMessageId;
                    if(!(var4 == var5)) { _fun0059_ip = 243; continue _fun0059 }
case 244:
                    var5 = _closure3_slot6;
case 243:
                    var2['oldestUnreadMessageId'] = var5;
case 233:
                    if(!(var4 != var3)) { _fun0059_ip = 245; continue _fun0059 }
case 246:
                    var2['mentionCount'] = var3;
case 245:
                    return var1;
                }
            };
            var1['value'] = var2;
            var3[13] = var1;
            var1 = {};
            var2 = 'handleGuildEventRemoval';
            var1['key'] = var2;
            var2 = function value(arg1, arg2) {
                _fun0061: for(var _fun0061_ip = 0; ; ) switch(_fun0061_ip) {
case 0:
                    var3 = this;
                    var5 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var11 = 42;
                    var4 = var1[var11];
                    var1 = undefined;
                    var7 = var5.bind(var1)(var4);
                    var6 = var7.compare;
                    var5 = var3.ackMessageId;
                    var4 = arg2;
                    var5 = var6.bind(var7)(var5, var4);
                    var4 = 0;
                    if(!(!(var5 >= var4))) { _fun0061_ip = 110; continue _fun0061 }
case 186:
                    var7 = _closure1_slot14;
                    var6 = var7.getGuildScheduledEventsForGuild;
                    var5 = arg1;
                    var6 = var6.bind(var7)(var5);
                    var5 = var3.getAckTimestamp;
                    var10 = var5.bind(var3)();
                    var5 = global;
                    var5 = var5.isNaN;
                    var5 = var5.bind(var1)(var10);
                    if(var5) { _fun0061_ip = 110; continue _fun0061 }
case 247:
                    var7 = var3._ackMessageId;
                    var5 = null;
                    if(!(var5 == var7)) { _fun0061_ip = 234; continue _fun0061 }
case 248:
                    var9 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var8 = var8[var11];
                    var9 = var9.bind(var1)(var8);
                    var8 = var9.fromTimestamp;
                    var7 = var8.bind(var9)(var10);
case 234:
                    var _closure3_slot0 = var7;
                    var _closure3_slot1 = var5;
                    var _closure3_slot2 = var4;
                    var5 = var6.forEach;
                    var4 = function(arg1) {
                        _fun0062: for(var _fun0062_ip = 0; ; ) switch(_fun0062_ip) {
case 0:
                            var2 = arg1;
                            var3 = _closure1_slot15;
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            if(!var3) { _fun0062_ip = 193; continue _fun0062 }
case 33:
                            var4 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var7 = 42;
                            var3 = var3[var7];
                            var9 = var4.bind(var1)(var3);
                            var8 = var9.compare;
                            var6 = var2.id;
                            var4 = _closure3_slot1;
                            var6 = var8.bind(var9)(var6, var4);
                            var4 = 0;
                            if(!(var6 > var4)) { _fun0062_ip = 161; continue _fun0062 }
case 3:
                            var6 = var2.id;
                            _closure3_slot1 = var6;
case 161:
                            var6 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var5 = var5[var7];
                            var7 = var6.bind(var1)(var5);
                            var6 = var7.compare;
                            var5 = var2.id;
                            var2 = _closure3_slot0;
                            var2 = var6.bind(var7)(var5, var2);
                            if(!(var2 > var4)) { _fun0062_ip = 193; continue _fun0062 }
case 191:
                            var2 = _closure3_slot2;
                            var2 = var2 + 1;
                            _closure3_slot2 = var2;
case 193:
                            return var1;
                        }
                    };
                    var4 = var5.bind(var6)(var4);
                    var4 = _closure3_slot1;
                    var3['lastMessageId'] = var4;
                    var2 = _closure3_slot2;
                    var3['mentionCount'] = var2;
case 110:
                    return var1;
                }
            };
            var1['value'] = var2;
            var3[14] = var1;
            var1 = {};
            var2 = 'canTrackUnreads';
            var1['key'] = var2;
            var2 = function value() {
                _fun0063: for(var _fun0063_ip = 0; ; ) switch(_fun0063_ip) {
case 0:
                    var2 = this;
                    var4 = var2.type;
                    var1 = _closure1_slot61;
                    var1 = var1.CHANNEL;
                    if(!(var4 === var1)) { _fun0063_ip = 201; continue _fun0063 }
case 38:
                    var1 = var2._isThread;
                    if(!var1) { _fun0063_ip = 163; continue _fun0063 }
case 42:
                    var1 = var2._isActiveThread;
                    if(var1) { _fun0063_ip = 163; continue _fun0063 }
case 6:
                    var1 = false;
                    return var1;
case 163:
                    var1 = var2._isResourceChannel;
                    if(var1) { _fun0063_ip = 249; continue _fun0063 }
case 225:
                    var5 = _closure1_slot29;
                    var4 = var5.getBasicChannel;
                    var1 = var2.channelId;
                    var4 = var4.bind(var5)(var1);
                    var1 = null;
                    var1 = var1 != var4;
                    if(!var1) { _fun0063_ip = 250; continue _fun0063 }
case 174:
                    var5 = 'basicPermissions';
                    var5 = var5 in var4;
                    if(var5) { _fun0063_ip = 45; continue _fun0063 }
case 55:
                    var7 = _closure1_slot12;
                    var6 = var7.isChannelGated;
                    var5 = var2.guildId;
                    var2 = var2.channelId;
                    var2 = var6.bind(var7)(var5, var2);
                    var2 = !var2;
                    if(var2) { _fun0063_ip = 18; continue _fun0063 }
case 251:
                    var7 = _closure1_slot35;
                    var6 = var7.can;
                    var5 = _closure1_slot49;
                    var5 = var5.VIEW_CHANNEL;
                    var2 = var6.bind(var7)(var5, var4);
case 18:
                    _fun0063_ip = 252; continue _fun0063;
case 45:
                    var7 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var5 = 51;
                    var6 = var6[var5];
                    var5 = undefined;
                    var6 = var7.bind(var5)(var6);
                    var5 = var6.has;
                    var4 = var4.basicPermissions;
                    var3 = _closure1_slot48;
                    var3 = var3.VIEW_CHANNEL;
                    var2 = var5.bind(var6)(var4, var3);
case 252:
                    var1 = var2;
case 250:
                    return var1;
case 249:
                    var1 = false;
                    return var1;
case 201:
                    var1 = true;
                    return var1;
                }
            };
            var1['value'] = var2;
            var3[15] = var1;
            var1 = {};
            var2 = 'canBeUnread';
            var1['key'] = var2;
            var2 = function value() {
                _fun0064: for(var _fun0064_ip = 0; ; ) switch(_fun0064_ip) {
case 0:
                    var2 = this;
                    var1 = var2._isThread;
                    if(!var1) { _fun0064_ip = 49; continue _fun0064 }
case 47:
                    var1 = var2._isJoinedThread;
                    if(var1) { _fun0064_ip = 49; continue _fun0064 }
case 108:
                    var1 = false;
                    return var1;
case 49:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 52;
                    var3 = var5[var3];
                    var5 = undefined;
                    var7 = var4.bind(var5)(var3);
                    var6 = var7.isMessageRequestOrSpamRequest;
                    var4 = var2.channelId;
                    var8 = _closure1_slot16;
                    var3 = new Array(2);
                    var3[0] = var8;
                    var8 = _closure1_slot17;
                    var3[1] = var8;
                    var3 = var6.bind(var7)(var4, var3);
                    if(var3) { _fun0064_ip = 253; continue _fun0064 }
case 254:
                    var3 = var2._isThread;
                    if(var3) { _fun0064_ip = 255; continue _fun0064 }
case 68:
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 53;
                    var3 = var6[var3];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.isOptInEnabledForGuild;
                    var3 = var2._guildId;
                    var3 = var4.bind(var5)(var3);
                    if(!var3) { _fun0064_ip = 255; continue _fun0064 }
case 256:
                    var4 = var2._lastMessageTimestamp;
                    var3 = _closure1_slot75;
                    if(!(!(var4 < var3))) { _fun0064_ip = 72; continue _fun0064 }
case 129:
                    var5 = _closure1_slot38;
                    var4 = var5.isChannelOrParentOptedIn;
                    var3 = var2._guildId;
                    var1 = var2.channelId;
                    var1 = var4.bind(var5)(var3, var1);
                    if(var1) { _fun0064_ip = 255; continue _fun0064 }
case 41:
                    var1 = var2.hasRecentlyVisitedAndRead;
                    var1 = var1.bind(var2)();
                    if(var1) { _fun0064_ip = 255; continue _fun0064 }
case 257:
                    var1 = var2.hasMentions;
                    var1 = var1.bind(var2)();
                    if(var1) { _fun0064_ip = 255; continue _fun0064 }
case 142:
                    var1 = false;
                    return var1;
case 72:
                    var1 = false;
                    return var1;
case 255:
                    var1 = var2.canTrackUnreads;
                    var1 = var1.bind(var2)();
                    return var1;
case 253:
                    var1 = false;
                    return var1;
                }
            };
            var1['value'] = var2;
            var3[16] = var1;
            var1 = {};
            var2 = 'canHaveMentions';
            var1['key'] = var2;
            var2 = function value() {
                _fun0065: for(var _fun0065_ip = 0; ; ) switch(_fun0065_ip) {
case 0:
                    var6 = this;
                    var2 = var6.mentionCount;
                    var1 = 0;
                    var1 = var1 !== var2;
                    if(!var1) { _fun0065_ip = 24; continue _fun0065 }
case 108:
                    var2 = var6._isThread;
                    if(!var2) { _fun0065_ip = 130; continue _fun0065 }
case 7:
                    var3 = var6._isJoinedThread;
                    var2 = !var3;
case 130:
                    var2 = !var2;
                    if(!var2) { _fun0065_ip = 258; continue _fun0065 }
case 132:
                    var4 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var3 = 52;
                    var3 = var7[var3];
                    var8 = undefined;
                    var9 = var4.bind(var8)(var3);
                    var7 = var9.isMessageRequestOrSpamRequest;
                    var4 = var6.channelId;
                    var10 = _closure1_slot16;
                    var3 = new Array(2);
                    var3[0] = var10;
                    var10 = _closure1_slot17;
                    var3[1] = var10;
                    var3 = var7.bind(var9)(var4, var3);
                    var3 = !var3;
                    if(!var3) { _fun0065_ip = 259; continue _fun0065 }
case 248:
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var4 = 53;
                    var4 = var9[var4];
                    var8 = var7.bind(var8)(var4);
                    var7 = var8.isOptInEnabledForGuild;
                    var4 = var6._guildId;
                    var4 = var7.bind(var8)(var4);
                    if(!var4) { _fun0065_ip = 154; continue _fun0065 }
case 129:
                    var7 = var6._lastMessageTimestamp;
                    var5 = _closure1_slot75;
                    var4 = var7 < var5;
case 154:
                    var4 = !var4;
                    if(!var4) { _fun0065_ip = 41; continue _fun0065 }
case 56:
                    var5 = var6.canTrackUnreads;
                    var4 = var5.bind(var6)();
case 41:
                    var3 = var4;
case 259:
                    var2 = var3;
case 258:
                    var1 = var2;
case 24:
                    return var1;
                }
            };
            var1['value'] = var2;
            var3[17] = var1;
            var1 = {};
            var2 = 'getGuildChannelUnreadState';
            var1['key'] = var2;
            var2 = function value(arg1, arg2, arg3, arg4, arg5) {
                _fun0066: for(var _fun0066_ip = 0; ; ) switch(_fun0066_ip) {
case 0:
                    var2 = arg1;
                    var3 = this;
                    var1 = arg2;
                    if(!var1) { _fun0066_ip = 134; continue _fun0066 }
case 47:
                    var5 = var3._lastMessageTimestamp;
                    var4 = _closure1_slot75;
                    if(!(!(var5 < var4))) { _fun0066_ip = 260; continue _fun0066 }
case 168:
                    var4 = _closure1_slot38;
                    var1 = var4.isChannelRecordOrParentOptedIn;
                    var1 = var1.bind(var4)(var2);
                    if(var1) { _fun0066_ip = 134; continue _fun0066 }
case 163:
                    var1 = var3.hasRecentlyVisitedAndRead;
                    var1 = var1.bind(var3)();
                    if(var1) { _fun0066_ip = 134; continue _fun0066 }
case 156:
                    var4 = var3.mentionCount;
                    var1 = 0;
                    if(!(var4 <= var1)) { _fun0066_ip = 134; continue _fun0066 }
case 227:
                    var1 = {'mentionCount': 0, 'unread': false, 'isMentionLowImportance': false};
                    return var1;
case 134:
                    var1 = 'basicPermissions';
                    var4 = var1 in var2;
                    if(var4) { _fun0066_ip = 20; continue _fun0066 }
case 55:
                    var7 = _closure1_slot12;
                    var6 = var7.isChannelGated;
                    var5 = var3.guildId;
                    var4 = var3.channelId;
                    var4 = var6.bind(var7)(var5, var4);
                    if(!var4) { _fun0066_ip = 27; continue _fun0066 }
case 261:
                    var6 = _closure1_slot35;
                    var5 = var6.can;
                    var4 = _closure1_slot49;
                    var4 = var4.VIEW_CHANNEL;
                    var4 = var5.bind(var6)(var4, var2);
                    if(var4) { _fun0066_ip = 27; continue _fun0066 }
case 18:
                    var4 = {'mentionCount': 0, 'unread': false, 'isMentionLowImportance': false};
                    return var4;
case 20:
                    var6 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var4 = 51;
                    var5 = var5[var4];
                    var4 = undefined;
                    var5 = var6.bind(var4)(var5);
                    var4 = var5.has;
                    var2 = var2.basicPermissions;
                    var1 = _closure1_slot48;
                    var1 = var1.VIEW_CHANNEL;
                    var1 = var4.bind(var5)(var2, var1);
                    if(var1) { _fun0066_ip = 27; continue _fun0066 }
case 262:
                    var1 = {'mentionCount': 0, 'unread': false, 'isMentionLowImportance': false};
                    return var1;
case 27:
                    var1 = arg4;
                    if(var1) { _fun0066_ip = 263; continue _fun0066 }
case 240:
                    var1 = arg5;
                    if(var1) { _fun0066_ip = 263; continue _fun0066 }
case 242:
                    var1 = {};
                    var2 = var3.mentionCount;
                    var1['mentionCount'] = var2;
                    var2 = var3.getAckTimestamp;
                    var4 = var2.bind(var3)();
                    var2 = var3._lastMessageTimestamp;
                    var2 = var4 < var2;
                    var1['unread'] = var2;
                    var2 = var3.isMentionLowImportance;
                    var1['isMentionLowImportance'] = var2;
                    _fun0066_ip = 264; continue _fun0066;
case 263:
                    var2 = {};
                    var4 = var3.mentionCount;
                    var2['mentionCount'] = var4;
                    var4 = false;
                    var2['unread'] = var4;
                    var3 = var3.isMentionLowImportance;
                    var2['isMentionLowImportance'] = var3;
                    var1 = var2;
case 264:
                    return var1;
case 260:
                    var1 = {'mentionCount': 0, 'unread': false, 'isMentionLowImportance': false};
                    return var1;
                }
            };
            var1['value'] = var2;
            var3[18] = var1;
            var1 = {};
            var2 = 'hasUnread';
            var1['key'] = var2;
            var2 = function value() {
                var1 = this;
                var2 = var1.getAckTimestamp;
                var2 = var2.bind(var1)();
                var1 = var1._lastMessageTimestamp;
                var1 = var2 < var1;
                return var1;
            };
            var1['value'] = var2;
            var3[19] = var1;
            var1 = {};
            var2 = 'hasRecentlyVisitedAndRead';
            var1['key'] = var2;
            var2 = function value() {
                _fun0067: for(var _fun0067_ip = 0; ; ) switch(_fun0067_ip) {
case 0:
                    var4 = this;
                    var2 = var4._lastMessageTimestamp;
                    var1 = 0;
                    var1 = var2 > var1;
                    if(!var1) { _fun0067_ip = 7; continue _fun0067 }
case 127:
                    var3 = var4._ackMessageId;
                    var2 = null;
                    var1 = var2 != var3;
case 7:
                    if(!var1) { _fun0067_ip = 216; continue _fun0067 }
case 37:
                    var2 = var4.getAckTimestamp;
                    var3 = var2.bind(var4)();
                    var2 = _closure1_slot76;
                    var1 = var3 > var2;
case 216:
                    if(!var1) { _fun0067_ip = 164; continue _fun0067 }
case 48:
                    var5 = _closure1_slot21;
                    var3 = var5.getGuildRecentsDismissedAt;
                    var2 = var4._guildId;
                    var3 = var3.bind(var5)(var2);
                    var2 = var4.getAckTimestamp;
                    var2 = var2.bind(var4)();
                    var1 = var3 < var2;
case 164:
                    return var1;
                }
            };
            var1['value'] = var2;
            var3[20] = var1;
            var1 = {};
            var2 = 'isForumPostUnread';
            var1['key'] = var2;
            var2 = function value() {
                _fun0068: for(var _fun0068_ip = 0; ; ) switch(_fun0068_ip) {
case 0:
                    var3 = this;
                    var1 = var3._isActiveThread;
                    var2 = !var1;
                    var1 = !var2;
                    if(var2) { _fun0068_ip = 38; continue _fun0068 }
case 127:
                    var2 = var3.hasUnread;
                    var1 = var2.bind(var3)();
case 38:
                    return var1;
                }
            };
            var1['value'] = var2;
            var3[21] = var1;
            var1 = {};
            var2 = 'hasMentions';
            var1['key'] = var2;
            var2 = function value() {
                var2 = this;
                var1 = var2.getMentionCount;
                var2 = var1.bind(var2)();
                var1 = 0;
                var1 = var2 > var1;
                return var1;
            };
            var1['value'] = var2;
            var3[22] = var1;
            var1 = {};
            var2 = 'getMentionCount';
            var1['key'] = var2;
            var2 = function value() {
                var1 = this;
                var1 = var1.mentionCount;
                return var1;
            };
            var1['value'] = var2;
            var3[23] = var1;
            var1 = {};
            var2 = 'hasUnreadOrMentions';
            var1['key'] = var2;
            var2 = function value() {
                _fun0069: for(var _fun0069_ip = 0; ; ) switch(_fun0069_ip) {
case 0:
                    var3 = this;
                    var1 = var3.hasMentions;
                    var1 = var1.bind(var3)();
                    if(var1) { _fun0069_ip = 63; continue _fun0069 }
case 228:
                    var2 = var3.hasUnread;
                    var1 = var2.bind(var3)();
case 63:
                    return var1;
                }
            };
            var1['value'] = var2;
            var3[24] = var1;
            var1 = {};
            var2 = 'ackPins';
            var1['key'] = var2;
            var2 = function value() {
                _fun0070: for(var _fun0070_ip = 0; ; ) switch(_fun0070_ip) {
case 0:
                    var4 = arguments[0];
                    var2 = this;
                    var _closure3_slot0 = var2;
                    var3 = undefined;
                    if(!(var4 === var3)) { _fun0070_ip = 33; continue _fun0070 }
case 127:
                    var4 = null;
case 33:
                    var7 = var2.type;
                    var6 = _closure1_slot61;
                    var6 = var6.CHANNEL;
                    if(!(var7 === var6)) { _fun0070_ip = 265; continue _fun0070 }
case 52:
                    var6 = var2.canTrackUnreads;
                    var6 = var6.bind(var2)();
                    if(var6) { _fun0070_ip = 180; continue _fun0070 }
case 8:
                    var6 = false;
                    return var6;
case 180:
                    var6 = null;
                    if(!(var6 == var4)) { _fun0070_ip = 266; continue _fun0070 }
case 133:
                    var7 = var2.lastPinTimestamp;
                    var6 = var2.ackPinTimestamp;
                    if(!(var7 !== var6)) { _fun0070_ip = 58; continue _fun0070 }
case 230:
                    var6 = true;
                    var2['_persisted'] = var6;
                    var7 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var6 = 46;
                    var6 = var8[var6];
                    var6 = var7.bind(var3)(var6);
                    var5 = function() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 47;
                        var2 = var2[var1];
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        var3 = var1.HTTP;
                        var2 = var3.post;
                        var1 = {'url': null, 'oldFormErrors': true, 'rejectWithError': true};
                        var6 = _closure1_slot44;
                        var5 = var6.PINS_ACK;
                        var4 = _closure3_slot0;
                        var4 = var4.channelId;
                        var4 = var5.bind(var6)(var4);
                        var1['url'] = var4;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var5 = var6.bind(var3)(var5);
case 266:
                    var1 = _closure1_slot87;
                    var1 = var1.bind(var3)(var4);
                    var3 = 0;
                    if(!(var3 === var1)) { _fun0070_ip = 104; continue _fun0070 }
case 261:
                    var1 = var2.lastPinTimestamp;
case 104:
                    var2['ackPinTimestamp'] = var1;
                    var1 = true;
                    return var1;
case 58:
                    var1 = false;
                    return var1;
case 265:
                    var1 = false;
                    return var1;
                }
            };
            var1['value'] = var2;
            var3[25] = var1;
            var1 = {};
            var2 = 'ack';
            var1['key'] = var2;
            var2 = function value(arg1) {
                _fun0071: for(var _fun0071_ip = 0; ; ) switch(_fun0071_ip) {
case 0:
                    var2 = arg1;
                    var4 = this;
                    var _closure3_slot0 = var4;
                    var5 = var2.messageId;
                    var1 = var2.location;
                    var _closure3_slot1 = var1;
                    var1 = var2.trackAnalytics;
                    var _closure3_slot2 = var1;
                    var8 = var2.local;
                    var9 = undefined;
                    if(!(var8 === var9)) { _fun0071_ip = 163; continue _fun0071 }
case 132:
                    var8 = false;
case 163:
                    var11 = var2.immediate;
                    if(!(var11 === var9)) { _fun0071_ip = 225; continue _fun0071 }
case 186:
                    var11 = false;
case 225:
                    var1 = var2.force;
                    if(!(var1 === var9)) { _fun0071_ip = 4; continue _fun0071 }
case 5:
                    var1 = false;
case 4:
                    var3 = var2.isExplicitUserAction;
                    if(!(var3 === var9)) { _fun0071_ip = 13; continue _fun0071 }
case 67:
                    var3 = false;
case 13:
                    var2 = var4._shouldAck;
                    var2 = var2.bind(var4)(var1, var8, var3);
                    if(var2) { _fun0071_ip = 165; continue _fun0071 }
case 247:
                    var2 = false;
                    return var2;
case 165:
                    if(var1) { _fun0071_ip = 232; continue _fun0071 }
case 57:
                    var1 = var4.canTrackUnreads;
                    var1 = var1.bind(var4)();
                    if(var1) { _fun0071_ip = 232; continue _fun0071 }
case 220:
                    var1 = false;
                    return var1;
case 232:
                    var1 = var4.hasMentions;
                    var7 = var1.bind(var4)();
                    var2 = false;
                    var4['estimated'] = var2;
                    var1 = var4.takeSnapshot;
                    var1 = var1.bind(var4)();
                    var4['snapshot'] = var1;
                    var10 = 0;
                    var4['unreadCount'] = var10;
                    var4['mentionCount'] = var10;
                    var4['isMentionLowImportance'] = var2;
                    var3 = null;
                    var1 = var3 != var5;
                    if(var1) { _fun0071_ip = 124; continue _fun0071 }
case 110:
                    var12 = var4.lastMessageId;
                    var1 = var3 != var12;
                    var5 = var12;
case 124:
                    if(!var1) { _fun0071_ip = 267; continue _fun0071 }
case 200:
                    var4['ackMessageId'] = var5;
                    var4['isManualAck'] = var2;
                    var2 = true;
                    var4['_persisted'] = var2;
                    var13 = _closure1_slot69;
                    if(!var13) { _fun0071_ip = 268; continue _fun0071 }
case 269:
                    var4['ackedWhileCached'] = var2;
case 268:
                    var13 = _closure1_slot103;
                    var12 = var4.channelId;
                    var12 = var13.bind(var9)(var12);
                    if(var8) { _fun0071_ip = 270; continue _fun0071 }
case 271:
                    var8 = var4.outgoingAck;
                    if(!(var3 == var8)) { _fun0071_ip = 272; continue _fun0071 }
case 16:
                    var8 = global;
                    var8 = var8.setTimeout;
                    if(var7) { _fun0071_ip = 273; continue _fun0071 }
case 274:
                    var7 = 3000;
                    if(!var11) { _fun0071_ip = 275; continue _fun0071 }
case 273:
                    var7 = 0;
case 275:
                    var6 = function() {
                        _fun0072: for(var _fun0072_ip = 0; ; ) switch(_fun0072_ip) {
case 0:
                            var2 = _closure3_slot0;
                            var3 = var2.type;
                            var2 = _closure1_slot61;
                            var2 = var2.CHANNEL;
                            if(!(var3 !== var2)) { _fun0072_ip = 276; continue _fun0072 }
case 113:
                            var3 = _closure3_slot0;
                            var2 = var3._nonChannelAck;
                            var2 = var2.bind(var3)();
                            _fun0072_ip = 277; continue _fun0072;
case 276:
                            var5 = _closure3_slot0;
                            var4 = var5._ack;
                            var3 = _closure3_slot1;
                            var2 = _closure3_slot2;
                            var2 = var4.bind(var5)(var3, var2);
case 277:
                            var2 = _closure3_slot0;
                            var1 = null;
                            var2['outgoingAck'] = var1;
                            var2['outgoingAckTimer'] = var1;
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var6 = var8.bind(var9)(var6, var7);
                    var4['outgoingAckTimer'] = var6;
case 272:
                    var4['outgoingAck'] = var5;
                    var1 = true;
                    _fun0071_ip = 267; continue _fun0071;
case 270:
                    var4['oldestUnreadMessageId'] = var3;
                    var1 = true;
case 267:
                    return var1;
                }
            };
            var1['value'] = var2;
            var3[26] = var1;
            var1 = {};
            var2 = 'takeSnapshot';
            var1['key'] = var2;
            var2 = function value() {
                _fun0073: for(var _fun0073_ip = 0; ; ) switch(_fun0073_ip) {
case 0:
                    var2 = this;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 54;
                    var3 = var3[var1];
                    var1 = undefined;
                    var1 = var4.bind(var1)(var3);
                    var5 = var1.default;
                    var4 = var2.guildId;
                    var1 = {};
                    var3 = var2.hasUnread;
                    var3 = var3.bind(var2)();
                    var1['unread'] = var3;
                    var2 = var2.mentionCount;
                    var1['mentionCount'] = var2;
                    var2 = null;
                    var6 = var2 == var4;
                    var3 = null;
                    if(var6) { _fun0073_ip = 189; continue _fun0073 }
case 162:
                    var6 = var5.hasUnread;
                    var3 = var6.bind(var5)(var4);
case 189:
                    var1['guildUnread'] = var3;
                    var3 = var2 == var4;
                    var2 = null;
                    if(var3) { _fun0073_ip = 278; continue _fun0073 }
case 68:
                    var3 = var5.getMentionCount;
                    var2 = var3.bind(var5)(var4);
case 278:
                    var1['guildMentionCount'] = var2;
                    var2 = global;
                    var3 = var2.Date;
                    var2 = var3.now;
                    var2 = var2.bind(var3)();
                    var1['takenAt'] = var2;
                    return var1;
                }
            };
            var1['value'] = var2;
            var3[27] = var1;
            var1 = {};
            var2 = 'clearOutgoingAck';
            var1['key'] = var2;
            var2 = function value() {
                _fun0074: for(var _fun0074_ip = 0; ; ) switch(_fun0074_ip) {
case 0:
                    var2 = this;
                    var1 = null;
                    var2['outgoingAck'] = var1;
                    var3 = var2.outgoingAckTimer;
                    if(!(var1 != var3)) { _fun0074_ip = 132; continue _fun0074 }
case 108:
                    var3 = global;
                    var5 = var3.clearTimeout;
                    var4 = var2.outgoingAckTimer;
                    var3 = undefined;
                    var3 = var5.bind(var3)(var4);
                    var2['outgoingAckTimer'] = var1;
case 132:
                    var1 = undefined;
                    return var1;
                }
            };
            var1['value'] = var2;
            var3[28] = var1;
            var1 = {};
            var2 = '_shouldAck';
            var1['key'] = var2;
            var2 = function value(arg1, arg2, arg3) {
                _fun0075: for(var _fun0075_ip = 0; ; ) switch(_fun0075_ip) {
case 0:
                    var6 = this;
                    var1 = arg1;
                    var2 = !var1;
                    var1 = !var2;
                    if(!var2) { _fun0075_ip = 234; continue _fun0075 }
case 127:
                    var2 = arg3;
                    var3 = !var2;
                    var2 = !var3;
                    if(!var3) { _fun0075_ip = 136; continue _fun0075 }
case 7:
                    var3 = arg2;
                    var4 = !var3;
                    var3 = !var4;
                    if(!var4) { _fun0075_ip = 117; continue _fun0075 }
case 52:
                    var4 = var6.isManualAck;
                    var4 = !var4;
                    if(!var4) { _fun0075_ip = 279; continue _fun0075 }
case 216:
                    var8 = var6.type;
                    var5 = _closure1_slot61;
                    var5 = var5.CHANNEL;
                    var5 = var8 !== var5;
                    if(var5) { _fun0075_ip = 280; continue _fun0075 }
case 161:
                    var5 = var6.loadedMessages;
case 280:
                    if(var5) { _fun0075_ip = 281; continue _fun0075 }
case 189:
                    var8 = _closure1_slot29;
                    var7 = var8.getChannel;
                    var6 = var6.channelId;
                    var8 = var7.bind(var8)(var6);
                    var6 = null;
                    var6 = var6 != var8;
                    if(!var6) { _fun0075_ip = 282; continue _fun0075 }
case 248:
                    var7 = var8.isForumLikeChannel;
                    var6 = var7.bind(var8)();
case 282:
                    var5 = var6;
case 281:
                    var5 = !var5;
                    var4 = !var5;
case 279:
                    var3 = var4;
case 117:
                    var2 = var3;
case 136:
                    var1 = var2;
case 234:
                    return var1;
                }
            };
            var1['value'] = var2;
            var3[29] = var1;
            var1 = {};
            var2 = '_ack';
            var1['key'] = var2;
            var2 = function value(arg1, arg2) {
                _fun0076: for(var _fun0076_ip = 0; ; ) switch(_fun0076_ip) {
case 0:
                    var3 = this;
                    var _closure3_slot0 = var3;
                    var2 = arg1;
                    var _closure3_slot1 = var2;
                    var2 = arg2;
                    var _closure3_slot2 = var2;
                    var4 = var3.outgoingAck;
                    var _closure3_slot3 = var4;
                    var2 = null;
                    if(!(var2 != var4)) { _fun0076_ip = 283; continue _fun0076 }
case 130:
                    var5 = _closure1_slot27;
                    var4 = var5.getId;
                    var4 = var4.bind(var5)();
                    var _closure3_slot4 = var4;
                    var4 = _closure1_slot68;
                    var _closure3_slot5 = var4;
                    var4 = true;
                    var3['_persisted'] = var4;
                    var4 = var3.recalculateFlags;
                    var5 = var4.bind(var3)();
                    var6 = var3.flags;
                    var4 = undefined;
                    var3 = undefined;
                    if(!(var5 !== var6)) { _fun0076_ip = 247; continue _fun0076 }
case 222:
                    var3 = var5;
case 247:
                    var _closure3_slot6 = var3;
                    var3 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var2 = 46;
                    var2 = var5[var2];
                    var3 = var3.bind(var4)(var2);
                    var2 = function() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 47;
                        var2 = var2[var1];
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        var3 = var1.HTTP;
                        var2 = var3.post;
                        var1 = {};
                        var10 = _closure1_slot44;
                        var9 = var10.MESSAGE_ACK;
                        var6 = _closure3_slot0;
                        var8 = var6.channelId;
                        var4 = _closure3_slot3;
                        var4 = var9.bind(var10)(var8, var4);
                        var1['url'] = var4;
                        var4 = {};
                        var7 = _closure1_slot68;
                        var4['token'] = var7;
                        var6 = var6.lastViewed;
                        var4['last_viewed'] = var6;
                        var5 = _closure3_slot6;
                        var4['flags'] = var5;
                        var1['body'] = var4;
                        var4 = true;
                        var1['oldFormErrors'] = var4;
                        var1['rejectWithError'] = var4;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.then;
                    var1 = function(arg1) {
                        _fun0077: for(var _fun0077_ip = 0; ; ) switch(_fun0077_ip) {
case 0:
                            var3 = arg1;
                            var1 = null;
                            if(!(var1 != var3)) { _fun0077_ip = 20; continue _fun0077 }
case 47:
                            var5 = _closure1_slot68;
                            var4 = _closure3_slot5;
                            var4 = var5 === var4;
                            if(!var4) { _fun0077_ip = 8; continue _fun0077 }
case 37:
                            var6 = _closure3_slot4;
                            var7 = _closure1_slot27;
                            var5 = var7.getId;
                            var5 = var5.bind(var7)();
                            var4 = var6 === var5;
case 8:
                            if(!var4) { _fun0077_ip = 277; continue _fun0077 }
case 118:
                            var3 = var3.body;
                            var3 = var3.token;
                            _closure1_slot68 = var3;
case 277:
                            var5 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var3 = 44;
                            var3 = var4[var3];
                            var4 = undefined;
                            var6 = var5.bind(var4)(var3);
                            var5 = var6.dispatch;
                            var3 = {};
                            var7 = 'MESSAGE_ACKED';
                            var3['type'] = var7;
                            var3 = var5.bind(var6)(var3);
                            var2 = _closure3_slot2;
                            if(!var2) { _fun0077_ip = 20; continue _fun0077 }
case 220:
                            var3 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var2 = 56;
                            var2 = var1[var2];
                            var3 = var3.bind(var4)(var2);
                            var2 = 55;
                            var2 = var1[var2];
                            var1 = var1.paths;
                            var3 = var3.bind(var4)(var2, var1);
                            var2 = var3.then;
                            var1 = function(arg1) {
                                _fun0078: for(var _fun0078_ip = 0; ; ) switch(_fun0078_ip) {
case 0:
                                    var1 = arg1;
                                    var4 = var1.default;
                                    var2 = _closure3_slot0;
                                    var3 = var2.channelId;
                                    var5 = _closure3_slot1;
                                    var2 = null;
                                    if(!(var2 == var5)) { _fun0078_ip = 172; continue _fun0078 }
case 7:
                                    var2 = {};
                                    _fun0078_ip = 65; continue _fun0078;
case 172:
                                    var2 = _closure3_slot1;
case 65:
                                    var1 = undefined;
                                    var2 = var4.bind(var1)(var3, var2);
                                    return var1;
                                }
                            };
                            var1 = var2.bind(var3)(var1);
case 20:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var1 = var2.bind(var3)(var1);
case 283:
                    var1 = undefined;
                    return var1;
                }
            };
            var1['value'] = var2;
            var3[30] = var1;
            var1 = {};
            var2 = 'recalculateFlags';
            var1['key'] = var2;
            var2 = function value() {
                _fun0079: for(var _fun0079_ip = 0; ; ) switch(_fun0079_ip) {
case 0:
                    var1 = this;
                    var4 = var1.type;
                    var3 = _closure1_slot61;
                    var3 = var3.CHANNEL;
                    if(!(var4 === var3)) { _fun0079_ip = 163; continue _fun0079 }
case 49:
                    var4 = _closure1_slot29;
                    var3 = var4.getChannel;
                    var1 = var1.channelId;
                    var1 = var3.bind(var4)(var1);
                    var3 = null;
                    if(!(var3 == var1)) { _fun0079_ip = 216; continue _fun0079 }
case 163:
                    var4 = undefined;
                    return var4;
case 216:
                    var4 = var1.isThread;
                    var4 = var4.bind(var1)();
                    if(var4) { _fun0079_ip = 254; continue _fun0079 }
case 34:
                    var1 = var1.guild_id;
                    var3 = var3 != var1;
                    var1 = 0;
                    if(!var3) { _fun0079_ip = 134; continue _fun0079 }
case 230:
                    var3 = _closure1_slot78;
                    var1 = var3.IS_GUILD_CHANNEL;
case 134:
                    _fun0079_ip = 54; continue _fun0079;
case 254:
                    var2 = _closure1_slot78;
                    var1 = var2.IS_THREAD;
case 54:
                    return var1;
                }
            };
            var1['value'] = var2;
            var3[31] = var1;
            var1 = {};
            var2 = '_nonChannelAck';
            var1['key'] = var2;
            var2 = function value() {
                _fun0080: for(var _fun0080_ip = 0; ; ) switch(_fun0080_ip) {
case 0:
                    var4 = this;
                    var8 = var4.outgoingAck;
                    var7 = var4.channelId;
                    var6 = var4.type;
                    var2 = null;
                    if(!(var2 != var8)) { _fun0080_ip = 198; continue _fun0080 }
case 7:
                    var3 = _closure1_slot61;
                    var3 = var3.GUILD_HOME;
                    if(!(var3 !== var6)) { _fun0080_ip = 281; continue _fun0080 }
case 276:
                    var3 = _closure1_slot61;
                    var3 = var3.GUILD_EVENT;
                    if(!(var3 !== var6)) { _fun0080_ip = 281; continue _fun0080 }
case 11:
                    var3 = _closure1_slot61;
                    var3 = var3.GUILD_ONBOARDING_QUESTION;
                    if(!(var3 !== var6)) { _fun0080_ip = 281; continue _fun0080 }
case 227:
                    var3 = _closure1_slot61;
                    var3 = var3.NOTIFICATION_CENTER;
                    if(!(var3 !== var6)) { _fun0080_ip = 284; continue _fun0080 }
case 178:
                    var3 = _closure1_slot61;
                    var3 = var3.MESSAGE_REQUESTS;
                    if(!(var3 !== var6)) { _fun0080_ip = 284; continue _fun0080 }
case 54:
                    var3 = undefined;
                    return var3;
case 284:
                    var5 = _closure1_slot44;
                    var3 = var5.USER_NON_CHANNEL_ACK;
                    var3 = var3.bind(var5)(var8, var6);
                    var _closure3_slot0 = var3;
                    _fun0080_ip = 58; continue _fun0080;
case 281:
                    var5 = _closure1_slot44;
                    var3 = var5.GUILD_FEATURE_ACK;
                    var3 = var3.bind(var5)(var7, var8, var6);
                    _closure3_slot0 = var3;
case 58:
                    var3 = true;
                    var4['_persisted'] = var3;
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 46;
                    var2 = var3[var2];
                    var3 = undefined;
                    var2 = var4.bind(var3)(var2);
                    var1 = function() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 47;
                        var2 = var2[var1];
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        var3 = var1.HTTP;
                        var2 = var3.post;
                        var1 = {};
                        var4 = _closure3_slot0;
                        var1['url'] = var4;
                        var4 = {};
                        var1['body'] = var4;
                        var4 = true;
                        var1['oldFormErrors'] = var4;
                        var1['rejectWithError'] = var4;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1 = var2.bind(var3)(var1);
case 198:
                    var1 = undefined;
                    return var1;
                }
            };
            var1['value'] = var2;
            var3[32] = var1;
            var1 = {};
            var2 = 'delete';
            var1['key'] = var2;
            var2 = function value() {
                _fun0081: for(var _fun0081_ip = 0; ; ) switch(_fun0081_ip) {
case 0:
                    var3 = arguments[0];
                    var2 = this;
                    var1 = undefined;
                    if(!(var3 === var1)) { _fun0081_ip = 36; continue _fun0081 }
case 47:
                    var3 = true;
case 36:
                    var6 = _closure1_slot29;
                    var5 = var6.getBasicChannel;
                    var4 = var2.channelId;
                    var12 = var5.bind(var6)(var4);
                    var11 = _closure1_slot63;
                    var10 = var11.log;
                    var9 = var2.channelId;
                    var8 = var2.type;
                    var6 = {};
                    var6['remote'] = var3;
                    var4 = var2._persisted;
                    var6['persisted'] = var4;
                    var4 = null;
                    var5 = var4 == var12;
                    var6['channelMissing'] = var5;
                    var13 = _closure1_slot101;
                    var5 = _closure1_slot85;
                    var5 = var5.bind(var1)();
                    var5 = var13.bind(var1)(var2, var5);
                    var6['isOld'] = var5;
                    var5 = var4 != var12;
                    if(!var5) { _fun0081_ip = 223; continue _fun0081 }
case 119:
                    var15 = _closure1_slot25;
                    var14 = var15.has;
                    var13 = var12.type;
                    var5 = var14.bind(var15)(var13);
case 223:
                    var6['validType'] = var5;
                    var5 = var4 != var12;
                    if(!var5) { _fun0081_ip = 137; continue _fun0081 }
case 283:
                    var13 = _closure1_slot22;
                    var12 = var12.type;
                    var5 = var13.bind(var1)(var12);
case 137:
                    var6['readableType'] = var5;
                    var5 = _closure1_slot85;
                    var5 = var5.bind(var1)();
                    var6['oldThreadCutoff'] = var5;
                    var5 = var2.mentionCount;
                    var6['mentionCount'] = var5;
                    var5 = var2.channelId;
                    var6['channelId'] = var5;
                    var5 = var2._ackMessageId;
                    var6['ackMessageId'] = var5;
                    var5 = var2._lastMessageId;
                    var6['lastMessageId'] = var5;
                    var19 = 'Deleting ReadState';
                    var20 = var11;
                    var18 = var9;
                    var17 = var8;
                    var16 = var6;
                    var5 = var20[var10](var19, var18, var17, var16, var15);
                    if(!var3) { _fun0081_ip = 285; continue _fun0081 }
case 286:
                    var3 = var2._persisted;
case 285:
                    if(!var3) { _fun0081_ip = 287; continue _fun0081 }
case 28:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 47;
                    var3 = var6[var3];
                    var3 = var5.bind(var1)(var3);
                    var6 = var3.HTTP;
                    var5 = var6.del;
                    var3 = {};
                    var9 = _closure1_slot44;
                    var8 = var9.CHANNEL_ACK;
                    var7 = var2.channelId;
                    var7 = var8.bind(var9)(var7);
                    var3['url'] = var7;
                    var7 = {};
                    var8 = 2;
                    var7['version'] = var8;
                    var8 = var2.type;
                    var7['read_state_type'] = var8;
                    var3['body'] = var7;
                    var7 = true;
                    var3['oldFormErrors'] = var7;
                    var3['rejectWithError'] = var7;
                    var3 = var5.bind(var6)(var3);
case 287:
                    var5 = _closure2_slot0;
                    var7 = var5._readStates;
                    var6 = var7.get;
                    var5 = var2.type;
                    var6 = var6.bind(var7)(var5);
                    if(!(var4 != var6)) { _fun0081_ip = 288; continue _fun0081 }
case 289:
                    var5 = var6.delete;
                    var4 = var2.channelId;
                    var4 = var5.bind(var6)(var4);
case 288:
                    var3 = _closure2_slot0;
                    var4 = var3._mentionChannels;
                    var3 = var4.delete;
                    var2 = var2.channelId;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var1['value'] = var2;
            var3[33] = var1;
            var1 = {};
            var2 = 'shouldDeleteReadState';
            var1['key'] = var2;
            var2 = function value(arg1) {
                _fun0082: for(var _fun0082_ip = 0; ; ) switch(_fun0082_ip) {
case 0:
                    var7 = arg1;
                    var2 = this;
                    var1 = _closure1_slot31;
                    var1 = var1.totalUnavailableGuilds;
                    var10 = 0;
                    if(!(var10 === var1)) { _fun0082_ip = 290; continue _fun0082 }
case 38:
                    var1 = var2.type;
                    var3 = null;
                    if(!(var3 != var1)) { _fun0082_ip = 11; continue _fun0082 }
case 130:
                    var5 = var2.type;
                    var1 = _closure1_slot61;
                    var1 = var1.CHANNEL;
                    if(!(var5 === var1)) { _fun0082_ip = 267; continue _fun0082 }
case 11:
                    var6 = _closure1_slot29;
                    var5 = var6.getBasicChannel;
                    var1 = var2.channelId;
                    var13 = var5.bind(var6)(var1);
                    if(!(var3 != var13)) { _fun0082_ip = 246; continue _fun0082 }
case 189:
                    var6 = _closure1_slot25;
                    var5 = var6.has;
                    var1 = var13.type;
                    var1 = var5.bind(var6)(var1);
                    var5 = !var1;
                    var1 = !var5;
                    if(var5) { _fun0082_ip = 291; continue _fun0082 }
case 266:
                    var6 = _closure1_slot22;
                    var5 = var13.type;
                    var12 = undefined;
                    var5 = var6.bind(var12)(var5);
                    var5 = !var5;
                    if(var5) { _fun0082_ip = 292; continue _fun0082 }
case 234:
                    var8 = _closure1_slot24;
                    var6 = var13.type;
                    var6 = var8.bind(var12)(var6);
                    var6 = !var6;
                    if(!var6) { _fun0082_ip = 293; continue _fun0082 }
case 137:
                    var11 = _closure1_slot26;
                    var9 = var11.has;
                    var8 = var13.type;
                    var8 = var9.bind(var11)(var8);
                    var9 = !var8;
                    if(var9) { _fun0082_ip = 121; continue _fun0082 }
case 258:
                    var17 = var2.guildId;
                    var8 = var3 != var17;
                    if(!var8) { _fun0082_ip = 253; continue _fun0082 }
case 124:
                    var16 = _closure1_slot19;
                    var15 = var16.isActive;
                    var14 = var13.parent_id;
                    var11 = var2.channelId;
                    var8 = var15.bind(var16)(var17, var14, var11);
case 253:
                    var8 = !var8;
                    if(!var8) { _fun0082_ip = 294; continue _fun0082 }
case 192:
                    var11 = _closure1_slot101;
                    var8 = var11.bind(var12)(var2, var7);
case 294:
                    var9 = !var8;
case 121:
                    var8 = !var9;
                    if(!var9) { _fun0082_ip = 295; continue _fun0082 }
case 296:
                    var9 = var2.mentionCount;
                    var9 = var9 > var10;
                    if(!var9) { _fun0082_ip = 244; continue _fun0082 }
case 16:
                    var12 = _closure1_slot35;
                    var11 = var12.canBasicChannel;
                    var10 = _closure1_slot65;
                    var10 = var11.bind(var12)(var10, var13);
                    var9 = !var10;
case 244:
                    var8 = var9;
case 295:
                    var6 = var8;
case 293:
                    var5 = var6;
case 292:
                    var1 = var5;
case 291:
                    _fun0082_ip = 297; continue _fun0082;
case 246:
                    var6 = _closure1_slot101;
                    var5 = undefined;
                    var5 = var6.bind(var5)(var2, var7);
                    var5 = !var5;
                    var1 = !var5;
case 297:
                    return var1;
case 267:
                    var6 = var2.type;
                    var1 = _closure1_slot61;
                    var1 = var1.GUILD_HOME;
                    if(!(var1 !== var6)) { _fun0082_ip = 298; continue _fun0082 }
case 260:
                    var1 = _closure1_slot61;
                    var1 = var1.GUILD_EVENT;
                    if(!(var1 !== var6)) { _fun0082_ip = 298; continue _fun0082 }
case 85:
                    var1 = _closure1_slot61;
                    var1 = var1.GUILD_ONBOARDING_QUESTION;
                    if(!(var1 !== var6)) { _fun0082_ip = 298; continue _fun0082 }
case 299:
                    var1 = _closure1_slot61;
                    var5 = var1.NOTIFICATION_CENTER;
                    var1 = true;
                    if(!(var5 === var6)) { _fun0082_ip = 300; continue _fun0082 }
case 301:
                    var7 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var5 = 42;
                    var6 = var6[var5];
                    var5 = undefined;
                    var7 = var7.bind(var5)(var6);
                    var6 = var7.cast;
                    var9 = _closure1_slot39;
                    var8 = var9.getCurrentUser;
                    var8 = var8.bind(var9)();
                    var9 = var3 == var8;
                    if(var9) { _fun0082_ip = 213; continue _fun0082 }
case 302:
                    var5 = var8.id;
case 213:
                    var6 = var6.bind(var7)(var5);
                    var5 = var2.channelId;
                    var1 = var6 === var5;
                    _fun0082_ip = 300; continue _fun0082;
case 298:
                    var5 = _closure1_slot32;
                    var4 = var5.getGuild;
                    var2 = var2.channelId;
                    var2 = var4.bind(var5)(var2);
                    var1 = var3 != var2;
case 300:
                    var1 = !var1;
                    return var1;
case 290:
                    var1 = false;
                    return var1;
                }
            };
            var1['value'] = var2;
            var3[34] = var1;
            var1 = {};
            var2 = 'getAckTimestamp';
            var1['key'] = var2;
            var2 = function value() {
                _fun0083: for(var _fun0083_ip = 0; ; ) switch(_fun0083_ip) {
case 0:
                    var1 = this;
                    var3 = var1._ackMessageTimestamp;
                    var2 = 0;
                    if(!(var2 !== var3)) { _fun0083_ip = 276; continue _fun0083 }
case 217:
                    var2 = global;
                    var4 = var2.isNaN;
                    var3 = var1._ackMessageTimestamp;
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    if(var2) { _fun0083_ip = 276; continue _fun0083 }
case 130:
                    var2 = var1._ackMessageTimestamp;
                    return var2;
case 276:
                    var3 = var1._isThread;
                    if(var3) { _fun0083_ip = 303; continue _fun0083 }
case 225:
                    var4 = var1.type;
                    var3 = _closure1_slot61;
                    var3 = var3.GUILD_EVENT;
                    if(!(var4 !== var3)) { _fun0083_ip = 153; continue _fun0083 }
case 230:
                    var4 = var1.type;
                    var3 = _closure1_slot61;
                    var3 = var3.GUILD_ONBOARDING_QUESTION;
                    if(!(var4 !== var3)) { _fun0083_ip = 153; continue _fun0083 }
case 304:
                    var4 = _closure1_slot59;
                    var3 = var1.channelId;
                    var5 = undefined;
                    var3 = var4.bind(var5)(var3);
                    if(var3) { _fun0083_ip = 56; continue _fun0083 }
case 266:
                    var6 = _closure1_slot29;
                    var4 = var6.getChannel;
                    var3 = var1.channelId;
                    var4 = var4.bind(var6)(var3);
                    var3 = null;
                    var3 = var3 != var4;
                    var5 = undefined;
                    if(!var3) { _fun0083_ip = 62; continue _fun0083 }
case 160:
                    var3 = var4.getGuildId;
                    var6 = var3.bind(var4)();
                    var4 = _closure1_slot32;
                    var3 = var4.getGuild;
                    var5 = var3.bind(var4)(var6);
                    _fun0083_ip = 62; continue _fun0083;
case 56:
                    var6 = _closure1_slot32;
                    var4 = var6.getGuild;
                    var3 = var1.guildId;
                    var5 = var4.bind(var6)(var3);
                    _fun0083_ip = 62; continue _fun0083;
case 153:
                    var6 = _closure1_slot32;
                    var4 = var6.getGuild;
                    var3 = var1.channelId;
                    var5 = var4.bind(var6)(var3);
case 62:
                    var3 = null;
                    if(!(var3 == var5)) { _fun0083_ip = 305; continue _fun0083 }
case 166:
                    var6 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var3 = 42;
                    var4 = var4[var3];
                    var3 = undefined;
                    var6 = var6.bind(var3)(var4);
                    var4 = var6.extractTimestamp;
                    var3 = var1.channelId;
                    var3 = var4.bind(var6)(var3);
                    _fun0083_ip = 30; continue _fun0083;
case 305:
                    var4 = _closure1_slot100;
                    var6 = undefined;
                    var5 = var4.bind(var6)(var5);
                    var4 = global;
                    var4 = var4.isNaN;
                    var4 = var4.bind(var6)(var5);
                    var3 = var5;
                    if(!var4) { _fun0083_ip = 30; continue _fun0083 }
case 306:
                    var5 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var4 = 42;
                    var4 = var7[var4];
                    var6 = var5.bind(var6)(var4);
                    var5 = var6.extractTimestamp;
                    var4 = var1.channelId;
                    var3 = var5.bind(var6)(var4);
case 30:
                    var1['_ackMessageTimestamp'] = var3;
                    return var3;
case 303:
                    var6 = _closure1_slot99;
                    var5 = var1.guildId;
                    var3 = var1.channelId;
                    var4 = undefined;
                    var3 = var6.bind(var4)(var5, var3);
                    var1['_ackMessageTimestamp'] = var3;
                    var3 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var2 = 42;
                    var2 = var5[var2];
                    var4 = var3.bind(var4)(var2);
                    var3 = var4.fromTimestamp;
                    var2 = var1._ackMessageTimestamp;
                    var2 = var3.bind(var4)(var2);
                    var1['_ackMessageId'] = var2;
                    var1 = var1._ackMessageTimestamp;
                    return var1;
                }
            };
            var1['value'] = var2;
            var3[35] = var1;
            var1 = {};
            var2 = 'oldestUnreadTimestamp';
            var1['key'] = var2;
            var2 = function get() {
                _fun0084: for(var _fun0084_ip = 0; ; ) switch(_fun0084_ip) {
case 0:
                    var2 = this;
                    var3 = var2.oldestUnreadMessageId;
                    var1 = null;
                    var3 = var1 != var3;
                    var1 = 0;
                    if(!var3) { _fun0084_ip = 225; continue _fun0084 }
case 33:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var3 = 42;
                    var4 = var4[var3];
                    var3 = undefined;
                    var4 = var5.bind(var3)(var4);
                    var3 = var4.extractTimestamp;
                    var2 = var2.oldestUnreadMessageId;
                    var1 = var3.bind(var4)(var2);
case 225:
                    return var1;
                }
            };
            var1['get'] = var2;
            var3[36] = var1;
            var1 = {};
            var2 = 'syncThreadSettings';
            var1['key'] = var2;
            var2 = function value() {
                _fun0085: for(var _fun0085_ip = 0; ; ) switch(_fun0085_ip) {
case 0:
                    var1 = this;
                    var4 = true;
                    var1['_isThread'] = var4;
                    var6 = _closure1_slot29;
                    var5 = var6.getChannel;
                    var3 = var1.channelId;
                    var3 = var5.bind(var6)(var3);
                    var5 = null;
                    if(!(var5 != var3)) { _fun0085_ip = 136; continue _fun0085 }
case 130:
                    var9 = var1.guildId;
                    var6 = var5 != var9;
                    if(!var6) { _fun0085_ip = 161; continue _fun0085 }
case 39:
                    var8 = _closure1_slot19;
                    var7 = var8.isActive;
                    var5 = var3.parent_id;
                    var3 = var1.channelId;
                    var6 = var7.bind(var8)(var9, var5, var3);
case 161:
                    var7 = _closure1_slot20;
                    var5 = var7.hasJoined;
                    var3 = var1.channelId;
                    var5 = var5.bind(var7)(var3);
                    var3 = var1._isActiveThread;
                    var3 = var3 !== var6;
                    if(var3) { _fun0085_ip = 106; continue _fun0085 }
case 307:
                    var7 = var1._isJoinedThread;
                    var3 = var7 !== var5;
case 106:
                    if(!var3) { _fun0085_ip = 223; continue _fun0085 }
case 105:
                    var1['_isActiveThread'] = var6;
                    var1['_isJoinedThread'] = var5;
                    var3 = true;
case 223:
                    return var3;
case 136:
                    var3 = _closure1_slot63;
                    var2 = var3.warn;
                    var5 = var1.channelId;
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var4 = var1.concat;
                    var1 = 'syncThreadSettings called with channel not in memory ';
                    var1 = var4.bind(var1)(var5);
                    var1 = var2.bind(var3)(var1);
                    var1 = false;
                    return var1;
                }
            };
            var1['value'] = var2;
            var3[37] = var1;
            var1 = {};
            var2 = 'recordLastViewedTime';
            var1['key'] = var2;
            var2 = function value() {
                _fun0086: for(var _fun0086_ip = 0; ; ) switch(_fun0086_ip) {
case 0:
                    var4 = this;
                    var1 = global;
                    var5 = var1.Math;
                    var3 = var5.ceil;
                    var2 = var1.Date;
                    var1 = var2.now;
                    var7 = var1.bind(var2)();
                    var9 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var1 = 42;
                    var6 = var8[var1];
                    var1 = undefined;
                    var6 = var9.bind(var1)(var6);
                    var6 = var6.DISCORD_EPOCH;
                    var6 = var7 - var6;
                    var7 = _closure1_slot1;
                    var2 = 43;
                    var2 = var8[var2];
                    var2 = var7.bind(var1)(var2);
                    var2 = var2.Millis;
                    var2 = var2.DAY;
                    var2 = var6 / var2;
                    var2 = var3.bind(var5)(var2);
                    var3 = var4.lastViewed;
                    if(!(var2 !== var3)) { _fun0086_ip = 182; continue _fun0086 }
case 235:
                    var4['lastViewed'] = var2;
                    var2 = var4.canTrackUnreads;
                    var2 = var2.bind(var4)();
                    if(!var2) { _fun0086_ip = 308; continue _fun0086 }
case 309:
                    var3 = var4.hasUnread;
                    var3 = var3.bind(var4)();
                    var2 = !var3;
case 308:
                    if(!var2) { _fun0086_ip = 182; continue _fun0086 }
case 160:
                    var3 = var4.ack;
                    var2 = {'force': true, 'trackAnalytics': false};
                    var2 = var3.bind(var4)(var2);
case 182:
                    return var1;
                }
            };
            var1['value'] = var2;
            var3[38] = var1;
            var1 = {};
            var2 = 'forEach';
            var1['key'] = var2;
            var2 = function value(arg1) {
                _fun0087: for(var _fun0087_ip = 0; ; ) switch(_fun0087_ip) {
case 0:
                    var7 = arg1;
                    var3 = _closure1_slot83;
                    var1 = _closure2_slot0;
                    var2 = var1._readStates;
                    var1 = var2.values;
                    var2 = var1.bind(var2)();
                    var1 = undefined;
                    var5 = var3.bind(var1)(var2);
                    var3 = var5.bind(var1)();
                    var2 = var3.done;
                    var4 = false;
                    if(var2) { _fun0087_ip = 193; continue _fun0087 }
case 131:
                    var8 = _closure1_slot83;
                    var9 = var3.value;
                    var2 = var9.values;
                    var2 = var2.bind(var9)();
                    var9 = var8.bind(var1)(var2);
                    var8 = var9.bind(var1)();
                    var2 = var8.done;
                    if(var2) { _fun0087_ip = 135; continue _fun0087 }
case 189:
                    var2 = var8.value;
                    var2 = var7.bind(var1)(var2);
                    if(!(var4 !== var2)) { _fun0087_ip = 135; continue _fun0087 }
case 68:
                    var10 = var9.bind(var1)();
                    var2 = var10.done;
                    var8 = var10;
                    if(!var2) { _fun0087_ip = 189; continue _fun0087 }
case 135:
                    var8 = var5.bind(var1)();
                    var2 = var8.done;
                    var3 = var8;
                    if(!var2) { _fun0087_ip = 131; continue _fun0087 }
case 193:
                    return var1;
                }
            };
            var1['value'] = var2;
            var2 = new Array(9);
            var2[0] = var1;
            var1 = {};
            var7 = 'get';
            var1['key'] = var7;
            var7 = function value(arg1) {
                _fun0088: for(var _fun0088_ip = 0; ; ) switch(_fun0088_ip) {
case 0:
                    var7 = arg1;
                    var6 = arguments[1];
                    var1 = undefined;
                    if(!(var6 === var1)) { _fun0088_ip = 49; continue _fun0088 }
case 47:
                    var2 = _closure1_slot61;
                    var6 = var2.CHANNEL;
case 49:
                    var2 = _closure2_slot0;
                    var4 = var2._readStates;
                    var2 = var4.get;
                    var5 = var2.bind(var4)(var6);
                    var4 = null;
                    var2 = var4 == var5;
                    var1 = undefined;
                    if(var2) { _fun0088_ip = 231; continue _fun0088 }
case 180:
                    var2 = var5.get;
                    var1 = var2.bind(var5)(var7);
case 231:
                    if(!(var4 == var1)) { _fun0088_ip = 195; continue _fun0088 }
case 115:
                    var5 = _closure2_slot0;
                    var2 = var5.prototype;
                    var8 = Object.create(var2, {constructor: {value: var5}});
                    var11 = var8;
                    var10 = var7;
                    var9 = var6;
                    var2 = new var11[var5](var10, var9, var8);
                    var2 = var2 instanceof Object ? var2 : var8;
                    var8 = var5._readStates;
                    var5 = var8.get;
                    var5 = var5.bind(var8)(var6);
                    if(!(var4 == var5)) { _fun0088_ip = 265; continue _fun0088 }
case 282:
                    var4 = global;
                    var4 = var4.Map;
                    var8 = var4.prototype;
                    var8 = Object.create(var8, {constructor: {value: var4}});
                    var11 = var8;
                    var4 = new var11[var4](var10);
                    var5 = var4 instanceof Object ? var4 : var8;
case 265:
                    var4 = var5.set;
                    var4 = var4.bind(var5)(var7, var2);
                    var4 = _closure2_slot0;
                    var7 = var4._readStates;
                    var4 = var7.has;
                    var4 = var4.bind(var7)(var6);
                    var1 = var2;
                    if(var4) { _fun0088_ip = 195; continue _fun0088 }
case 110:
                    var3 = _closure2_slot0;
                    var4 = var3._readStates;
                    var3 = var4.set;
                    var3 = var3.bind(var4)(var6, var5);
                    var1 = var2;
case 195:
                    return var1;
                }
            };
            var1['value'] = var7;
            var2[1] = var1;
            var1 = {};
            var7 = 'getGuildSentinels';
            var1['key'] = var7;
            var7 = function value(arg1) {
                _fun0089: for(var _fun0089_ip = 0; ; ) switch(_fun0089_ip) {
case 0:
                    var2 = arg1;
                    var1 = this;
                    var3 = var1._guildReadStateSentinels;
                    var4 = var3[var2];
                    var3 = null;
                    if(!(var3 == var4)) { _fun0089_ip = 173; continue _fun0089 }
case 46:
                    var4 = var1._guildReadStateSentinels;
                    var3 = {};
                    var5 = 0;
                    var3['unreadsSentinel'] = var5;
                    var4[var2] = var3;
case 173:
                    var1 = var1._guildReadStateSentinels;
                    var1 = var1[var2];
                    return var1;
                }
            };
            var1['value'] = var7;
            var2[2] = var1;
            var1 = {};
            var7 = 'resetGuildSentinels';
            var1['key'] = var7;
            var7 = function value() {
                var2 = {};
                var1 = this;
                var1['_guildReadStateSentinels'] = var2;
                var1 = undefined;
                return var1;
            };
            var1['value'] = var7;
            var2[3] = var1;
            var1 = {};
            var7 = 'getIfExists';
            var1['key'] = var7;
            var7 = function value(arg1) {
                _fun0090: for(var _fun0090_ip = 0; ; ) switch(_fun0090_ip) {
case 0:
                    var4 = arguments[1];
                    var1 = undefined;
                    if(!(var4 === var1)) { _fun0090_ip = 46; continue _fun0090 }
case 40:
                    var2 = _closure1_slot61;
                    var4 = var2.CHANNEL;
case 46:
                    var2 = _closure2_slot0;
                    var3 = var2._readStates;
                    var2 = var3.get;
                    var4 = var2.bind(var3)(var4);
                    var2 = null;
                    var2 = var2 == var4;
                    var1 = undefined;
                    if(var2) { _fun0090_ip = 231; continue _fun0090 }
case 32:
                    var3 = var4.get;
                    var2 = arg1;
                    var1 = var3.bind(var4)(var2);
case 231:
                    return var1;
                }
            };
            var1['value'] = var7;
            var2[4] = var1;
            var1 = {};
            var7 = 'getMentionChannelIds';
            var1['key'] = var7;
            var7 = function value() {
                _fun0091: for(var _fun0091_ip = 0; ; ) switch(_fun0091_ip) {
case 0:
                    var1 = new Array(0);
                    var3 = _closure1_slot83;
                    var2 = _closure2_slot0;
                    var2 = var2._mentionChannels;
                    var6 = undefined;
                    var5 = var3.bind(var6)(var2);
                    var3 = var5.bind(var6)();
                    var2 = var3.done;
                    var4 = null;
                    if(var2) { _fun0091_ip = 281; continue _fun0091 }
case 177:
                    var8 = var3.value;
                    var9 = _closure2_slot0;
                    var2 = var9.getIfExists;
                    var9 = var2.bind(var9)(var8);
                    if(!(var4 != var9)) { _fun0091_ip = 221; continue _fun0091 }
case 231:
                    var2 = var9.canHaveMentions;
                    var2 = var2.bind(var9)();
                    if(var2) { _fun0091_ip = 247; continue _fun0091 }
case 221:
                    var2 = _closure2_slot0;
                    var9 = var2._mentionChannels;
                    var2 = var9.delete;
                    var2 = var2.bind(var9)(var8);
                    _fun0091_ip = 235; continue _fun0091;
case 247:
                    var2 = var1.push;
                    var2 = var2.bind(var1)(var8);
case 235:
                    var8 = var5.bind(var6)();
                    var2 = var8.done;
                    var3 = var8;
                    if(!var2) { _fun0091_ip = 177; continue _fun0091 }
case 281:
                    return var1;
                }
            };
            var1['value'] = var7;
            var2[5] = var1;
            var1 = {};
            var7 = 'getValue';
            var1['key'] = var7;
            var7 = function value(arg1) {
                _fun0092: for(var _fun0092_ip = 0; ; ) switch(_fun0092_ip) {
case 0:
                    var6 = arguments[1];
                    var1 = arguments[3];
                    var5 = this;
                    var4 = undefined;
                    if(!(var6 === var4)) { _fun0092_ip = 38; continue _fun0092 }
case 217:
                    var2 = _closure1_slot61;
                    var6 = var2.CHANNEL;
case 38:
                    var3 = var5.getIfExists;
                    var2 = arg1;
                    var3 = var3.bind(var5)(var2, var6);
                    var2 = null;
                    if(!(var2 != var3)) { _fun0092_ip = 48; continue _fun0092 }
case 9:
                    var2 = arguments[2];
                    var1 = var2.bind(var4)(var3);
case 48:
                    return var1;
                }
            };
            var1['value'] = var7;
            var2[6] = var1;
            var1 = {};
            var7 = 'clear';
            var1['key'] = var7;
            var7 = function value(arg1) {
                _fun0093: for(var _fun0093_ip = 0; ; ) switch(_fun0093_ip) {
case 0:
                    var4 = arg1;
                    var5 = arguments[1];
                    var1 = undefined;
                    if(!(var5 === var1)) { _fun0093_ip = 49; continue _fun0093 }
case 47:
                    var1 = _closure1_slot61;
                    var5 = var1.CHANNEL;
case 49:
                    var1 = _closure2_slot0;
                    var3 = var1._readStates;
                    var1 = var3.get;
                    var3 = var1.bind(var3)(var5);
                    var1 = null;
                    if(!(var1 != var3)) { _fun0093_ip = 178; continue _fun0093 }
case 216:
                    var1 = var3.delete;
                    var1 = var1.bind(var3)(var4);
                    if(!var1) { _fun0093_ip = 171; continue _fun0093 }
case 34:
                    var2 = _closure2_slot0;
                    var3 = var2._mentionChannels;
                    var2 = var3.delete;
                    var2 = var2.bind(var3)(var4);
case 171:
                    return var1;
case 178:
                    var1 = false;
                    return var1;
                }
            };
            var1['value'] = var7;
            var2[7] = var1;
            var1 = {};
            var7 = 'clearAll';
            var1['key'] = var7;
            var6 = function value() {
                var1 = _closure2_slot0;
                var3 = var1._readStates;
                var2 = var3.clear;
                var2 = var2.bind(var3)();
                var2 = var1._mentionChannels;
                var1 = var2.clear;
                var1 = var1.bind(var2)();
                var1 = undefined;
                return var1;
            };
            var1['value'] = var6;
            var2[8] = var1;
            var1 = undefined;
            var1 = var4.bind(var1)(var5, var3, var2);
            return var1;
        };
        var2 = var2.bind(var1)();
        var _closure1_slot79 = var2;
        var19 = {};
        var2['_guildReadStateSentinels'] = var19;
        var19 = var11.Map;
        var20 = var19.prototype;
        var20 = Object.create(var20, {constructor: {value: var19}});
        var30 = var20;
        var19 = new var30[var19](var29);
        var19 = var19 instanceof Object ? var19 : var20;
        var2['_readStates'] = var19;
        var11 = var11.Set;
        var19 = var11.prototype;
        var19 = Object.create(var19, {constructor: {value: var11}});
        var30 = var19;
        var11 = new var30[var11](var29);
        var11 = var11 instanceof Object ? var11 : var19;
        var2['_mentionChannels'] = var11;
        var11 = 59;
        var11 = var8[var11];
        var21 = var7.bind(var1)(var11);
        var20 = var21.throttle;
        var19 = function(arg1) {
            var2 = arg1;
            var1 = var2.delete;
            var1 = var1.bind(var2)();
            var1 = undefined;
            return var1;
        };
        var11 = 100;
        var11 = var20.bind(var21)(var19, var11);
        var _closure1_slot80 = var11;
        var11 = 68;
        var11 = var8[var11];
        var11 = var10.bind(var1)(var11);
        var19 = var11.Store;
        var11 = function(arg1) {
            var4 = function ReadStateStoreClass() {
                _fun0094: for(var _fun0094_ip = 0; ; ) switch(_fun0094_ip) {
case 0:
                    var4 = this;
                    var3 = undefined;
                    var5 = undefined;
                    var1 = _closure1_slot8;
                    var2 = _closure2_slot0;
                    var1 = var1.bind(var3)(var4, var2);
                    var1 = _closure1_slot4;
                    var9 = var1.bind(var3)(var2);
                    var2 = _closure1_slot3;
                    var1 = _closure1_slot82;
                    var1 = var1.bind(var3)();
                    if(var1) { _fun0094_ip = 231; continue _fun0094 }
case 39:
                    var7 = var9.apply;
                    var5 = arguments;
                    var1 = var5;
                    var1 = var7.bind(var9)(var4, var1);
                    _fun0094_ip = 55; continue _fun0094;
case 231:
                    var7 = global;
                    var8 = var7.Reflect;
                    var7 = var8.construct;
                    var6 = _closure1_slot4;
                    var6 = var6.bind(var3)(var4);
                    var6 = var6.constructor;
                    var5 = arguments;
                    var1 = var7.bind(var8)(var9, var5, var6);
case 55:
                    var1 = var2.bind(var3)(var4, var1);
                    return var1;
                }
            };
            var _closure2_slot0 = var4;
            var5 = _closure1_slot5;
            var3 = undefined;
            var2 = arg1;
            var2 = var5.bind(var3)(var4, var2);
            var2 = _closure1_slot9;
            var5 = {};
            var1 = 'initialize';
            var5['key'] = var1;
            var1 = function value() {
                var5 = this;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 66;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var6 = var3.default;
                var3 = _closure1_slot30;
                var4 = new Array(21);
                var4[0] = var3;
                var3 = _closure1_slot39;
                var4[1] = var3;
                var3 = _closure1_slot32;
                var4[2] = var3;
                var26 = _closure1_slot31;
                var4[3] = var26;
                var3 = _closure1_slot29;
                var4[4] = var3;
                var25 = _closure1_slot37;
                var4[5] = var25;
                var3 = _closure1_slot34;
                var4[6] = var3;
                var24 = _closure1_slot35;
                var4[7] = var24;
                var3 = _closure1_slot11;
                var4[8] = var3;
                var3 = _closure1_slot19;
                var4[9] = var3;
                var3 = _closure1_slot20;
                var4[10] = var3;
                var3 = _closure1_slot28;
                var4[11] = var3;
                var23 = _closure1_slot14;
                var4[12] = var23;
                var3 = _closure1_slot13;
                var4[13] = var3;
                var22 = _closure1_slot12;
                var4[14] = var22;
                var3 = _closure1_slot38;
                var4[15] = var3;
                var21 = _closure1_slot40;
                var4[16] = var21;
                var20 = _closure1_slot18;
                var4[17] = var20;
                var3 = _closure1_slot16;
                var4[18] = var3;
                var19 = _closure1_slot21;
                var4[19] = var19;
                var3 = _closure1_slot17;
                var4[20] = var3;
                var3 = var4.push;
                var3 = var3.bind(var4)(var6);
                var18 = var5.waitFor;
                var48 = _closure1_slot19;
                var47 = _closure1_slot27;
                var46 = _closure1_slot11;
                var45 = _closure1_slot28;
                var44 = _closure1_slot29;
                var43 = _closure1_slot30;
                var42 = _closure1_slot10;
                var38 = _closure1_slot32;
                var37 = _closure1_slot33;
                var36 = _closure1_slot20;
                var35 = _closure1_slot34;
                var32 = _closure1_slot36;
                var30 = _closure1_slot38;
                var28 = _closure1_slot39;
                var49 = var5;
                var41 = var22;
                var40 = var26;
                var39 = var23;
                var34 = var20;
                var33 = var24;
                var31 = var25;
                var29 = var19;
                var27 = var21;
                var3 = var49[var18](var48, var47, var46, var45, var44, var43, var42, var41, var40, var39, var38, var37, var36, var35, var34, var33, var32, var31, var30, var29, var28, var27, var26);
                var4 = var5.syncWith;
                var6 = _closure1_slot28;
                var3 = new Array(1);
                var3[0] = var6;
                var2 = _closure1_slot107;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var5['value'] = var1;
            var1 = new Array(30);
            var1[0] = var5;
            var5 = {};
            var7 = 'getReadStatesByChannel';
            var5['key'] = var7;
            var7 = function value() {
                _fun0095: for(var _fun0095_ip = 0; ; ) switch(_fun0095_ip) {
case 0:
                    var2 = _closure1_slot79;
                    var3 = var2._readStates;
                    var2 = var3.get;
                    var1 = _closure1_slot61;
                    var1 = var1.CHANNEL;
                    var1 = var2.bind(var3)(var1);
                    var2 = null;
                    if(!(var2 == var1)) { _fun0095_ip = 34; continue _fun0095 }
case 130:
                    var2 = global;
                    var2 = var2.Map;
                    var3 = var2.prototype;
                    var3 = Object.create(var3, {constructor: {value: var2}});
                    var5 = var3;
                    var2 = new var5[var2](var4);
                    var1 = var2 instanceof Object ? var2 : var3;
case 34:
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[1] = var5;
            var5 = {};
            var7 = 'getForDebugging';
            var5['key'] = var7;
            var7 = function value(arg1) {
                _fun0096: for(var _fun0096_ip = 0; ; ) switch(_fun0096_ip) {
case 0:
                    var4 = arguments[1];
                    var1 = undefined;
                    if(!(var4 === var1)) { _fun0096_ip = 46; continue _fun0096 }
case 40:
                    var1 = _closure1_slot61;
                    var4 = var1.CHANNEL;
case 46:
                    var3 = _closure1_slot79;
                    var2 = var3.getIfExists;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1, var4);
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[2] = var5;
            var5 = {};
            var7 = 'getNotifCenterReadState';
            var5['key'] = var7;
            var7 = function value(arg1) {
                var4 = _closure1_slot79;
                var3 = var4.getIfExists;
                var1 = _closure1_slot61;
                var2 = var1.NOTIFICATION_CENTER;
                var1 = arg1;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var5['value'] = var7;
            var1[3] = var5;
            var5 = {};
            var7 = 'hasUnread';
            var5['key'] = var7;
            var7 = function value(arg1) {
                _fun0097: for(var _fun0097_ip = 0; ; ) switch(_fun0097_ip) {
case 0:
                    var6 = arguments[1];
                    var1 = undefined;
                    if(!(var6 === var1)) { _fun0097_ip = 46; continue _fun0097 }
case 40:
                    var1 = _closure1_slot61;
                    var6 = var1.CHANNEL;
case 46:
                    var5 = _closure1_slot79;
                    var4 = var5.getValue;
                    var10 = arg1;
                    var8 = function(arg1) {
                        _fun0098: for(var _fun0098_ip = 0; ; ) switch(_fun0098_ip) {
case 0:
                            var3 = arg1;
                            var1 = var3.canBeUnread;
                            var1 = var1.bind(var3)();
                            if(!var1) { _fun0098_ip = 63; continue _fun0098 }
case 228:
                            var2 = var3.hasUnread;
                            var1 = var2.bind(var3)();
case 63:
                            return var1;
                        }
                    };
                    var7 = false;
                    var11 = var5;
                    var9 = var6;
                    var1 = var11[var4](var10, var9, var8, var7, var6);
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[4] = var5;
            var5 = {};
            var7 = 'hasUnreadOrMentions';
            var5['key'] = var7;
            var7 = function value(arg1) {
                _fun0099: for(var _fun0099_ip = 0; ; ) switch(_fun0099_ip) {
case 0:
                    var6 = arguments[1];
                    var1 = undefined;
                    if(!(var6 === var1)) { _fun0099_ip = 46; continue _fun0099 }
case 40:
                    var1 = _closure1_slot61;
                    var6 = var1.CHANNEL;
case 46:
                    var5 = _closure1_slot79;
                    var4 = var5.getValue;
                    var10 = arg1;
                    var8 = function(arg1) {
                        _fun0100: for(var _fun0100_ip = 0; ; ) switch(_fun0100_ip) {
case 0:
                            var3 = arg1;
                            var1 = var3.canBeUnread;
                            var1 = var1.bind(var3)();
                            if(!var1) { _fun0100_ip = 63; continue _fun0100 }
case 228:
                            var2 = var3.hasUnreadOrMentions;
                            var1 = var2.bind(var3)();
case 63:
                            return var1;
                        }
                    };
                    var7 = false;
                    var11 = var5;
                    var9 = var6;
                    var1 = var11[var4](var10, var9, var8, var7, var6);
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[5] = var5;
            var5 = {};
            var7 = 'hasTrackedUnread';
            var5['key'] = var7;
            var7 = function value(arg1) {
                _fun0101: for(var _fun0101_ip = 0; ; ) switch(_fun0101_ip) {
case 0:
                    var6 = arguments[1];
                    var1 = undefined;
                    if(!(var6 === var1)) { _fun0101_ip = 46; continue _fun0101 }
case 40:
                    var1 = _closure1_slot61;
                    var6 = var1.CHANNEL;
case 46:
                    var5 = _closure1_slot79;
                    var4 = var5.getValue;
                    var10 = arg1;
                    var8 = function(arg1) {
                        _fun0102: for(var _fun0102_ip = 0; ; ) switch(_fun0102_ip) {
case 0:
                            var3 = arg1;
                            var1 = var3.canTrackUnreads;
                            var1 = var1.bind(var3)();
                            if(!var1) { _fun0102_ip = 63; continue _fun0102 }
case 228:
                            var2 = var3.hasUnread;
                            var1 = var2.bind(var3)();
case 63:
                            return var1;
                        }
                    };
                    var7 = false;
                    var11 = var5;
                    var9 = var6;
                    var1 = var11[var4](var10, var9, var8, var7, var6);
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[6] = var5;
            var5 = {};
            var7 = 'isForumPostUnread';
            var5['key'] = var7;
            var7 = function value(arg1) {
                _fun0103: for(var _fun0103_ip = 0; ; ) switch(_fun0103_ip) {
case 0:
                    var6 = arguments[1];
                    var1 = undefined;
                    if(!(var6 === var1)) { _fun0103_ip = 46; continue _fun0103 }
case 40:
                    var1 = _closure1_slot61;
                    var6 = var1.CHANNEL;
case 46:
                    var5 = _closure1_slot79;
                    var4 = var5.getValue;
                    var10 = arg1;
                    var8 = function(arg1) {
                        var2 = arg1;
                        var1 = var2.isForumPostUnread;
                        var1 = var1.bind(var2)();
                        return var1;
                    };
                    var7 = false;
                    var11 = var5;
                    var9 = var6;
                    var1 = var11[var4](var10, var9, var8, var7, var6);
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[7] = var5;
            var5 = {};
            var7 = 'getUnreadCount';
            var5['key'] = var7;
            var7 = function value(arg1) {
                _fun0104: for(var _fun0104_ip = 0; ; ) switch(_fun0104_ip) {
case 0:
                    var6 = arguments[1];
                    var1 = undefined;
                    if(!(var6 === var1)) { _fun0104_ip = 46; continue _fun0104 }
case 40:
                    var1 = _closure1_slot61;
                    var6 = var1.CHANNEL;
case 46:
                    var5 = _closure1_slot79;
                    var4 = var5.getValue;
                    var10 = arg1;
                    var8 = function(arg1) {
                        _fun0105: for(var _fun0105_ip = 0; ; ) switch(_fun0105_ip) {
case 0:
                            var2 = arg1;
                            var1 = var2.canBeUnread;
                            var3 = var1.bind(var2)();
                            var1 = 0;
                            if(!var3) { _fun0105_ip = 114; continue _fun0105 }
case 127:
                            var1 = var2.unreadCount;
case 114:
                            return var1;
                        }
                    };
                    var7 = 0;
                    var11 = var5;
                    var9 = var6;
                    var1 = var11[var4](var10, var9, var8, var7, var6);
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[8] = var5;
            var5 = {};
            var7 = 'getMentionCount';
            var5['key'] = var7;
            var7 = function value(arg1) {
                _fun0106: for(var _fun0106_ip = 0; ; ) switch(_fun0106_ip) {
case 0:
                    var5 = arg1;
                    var8 = arguments[1];
                    var4 = undefined;
                    if(!(var8 === var4)) { _fun0106_ip = 49; continue _fun0106 }
case 47:
                    var1 = _closure1_slot61;
                    var8 = var1.CHANNEL;
case 49:
                    var7 = _closure1_slot79;
                    var6 = var7.getValue;
                    var10 = function(arg1) {
                        _fun0107: for(var _fun0107_ip = 0; ; ) switch(_fun0107_ip) {
case 0:
                            var3 = arg1;
                            var1 = var3.canHaveMentions;
                            var2 = var1.bind(var3)();
                            var1 = 0;
                            if(!var2) { _fun0107_ip = 38; continue _fun0107 }
case 127:
                            var2 = var3.getMentionCount;
                            var1 = var2.bind(var3)();
case 38:
                            return var1;
                        }
                    };
                    var1 = 0;
                    var13 = var7;
                    var12 = var5;
                    var11 = var8;
                    var9 = 0;
                    var2 = var13[var6](var12, var11, var10, var9, var8);
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var3 = 67;
                    var3 = var7[var3];
                    var3 = var6.bind(var4)(var3);
                    var3 = var3.bind(var4)(var5);
                    if(!var3) { _fun0106_ip = 304; continue _fun0106 }
case 310:
                    var3 = var2 > var1;
                    var1 = 1;
                    if(var3) { _fun0106_ip = 54; continue _fun0106 }
case 304:
                    var1 = var2;
case 54:
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[9] = var5;
            var5 = {};
            var7 = 'getIsMentionLowImportance';
            var5['key'] = var7;
            var7 = function value(arg1) {
                _fun0108: for(var _fun0108_ip = 0; ; ) switch(_fun0108_ip) {
case 0:
                    var7 = arguments[1];
                    var1 = undefined;
                    if(!(var7 === var1)) { _fun0108_ip = 46; continue _fun0108 }
case 40:
                    var1 = _closure1_slot61;
                    var7 = var1.CHANNEL;
case 46:
                    var1 = _closure1_slot61;
                    var1 = var1.CHANNEL;
                    var1 = var7 === var1;
                    if(!var1) { _fun0108_ip = 4; continue _fun0108 }
case 52:
                    var6 = _closure1_slot79;
                    var5 = var6.getValue;
                    var11 = arg1;
                    var9 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.isMentionLowImportance;
                        return var1;
                    };
                    var8 = false;
                    var12 = var6;
                    var10 = var7;
                    var1 = var12[var5](var11, var10, var9, var8, var7);
case 4:
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[10] = var5;
            var5 = {};
            var7 = 'getGuildChannelUnreadState';
            var5['key'] = var7;
            var7 = function value(arg1, arg2, arg3, arg4, arg5) {
                var3 = arg1;
                var _closure3_slot0 = var3;
                var2 = arg2;
                var _closure3_slot1 = var2;
                var2 = arg3;
                var _closure3_slot2 = var2;
                var2 = arg4;
                var _closure3_slot3 = var2;
                var2 = arg5;
                var _closure3_slot4 = var2;
                var6 = _closure1_slot79;
                var5 = var6.getValue;
                var10 = var3.id;
                var2 = _closure1_slot61;
                var9 = var2.CHANNEL;
                var8 = function(arg1) {
                    var7 = arg1;
                    var6 = var7.getGuildChannelUnreadState;
                    var12 = _closure3_slot0;
                    var11 = _closure3_slot1;
                    var10 = _closure3_slot2;
                    var9 = _closure3_slot3;
                    var8 = _closure3_slot4;
                    var13 = var7;
                    var1 = var13[var6](var12, var11, var10, var9, var8, var7);
                    return var1;
                };
                var7 = {'mentionCount': 0, 'unread': false, 'isMentionLowImportance': false};
                var11 = var6;
                var1 = var11[var5](var10, var9, var8, var7, var6);
                return var1;
            };
            var5['value'] = var7;
            var1[11] = var5;
            var5 = {};
            var7 = 'hasRecentlyVisitedAndRead';
            var5['key'] = var7;
            var7 = function value(arg1) {
                _fun0109: for(var _fun0109_ip = 0; ; ) switch(_fun0109_ip) {
case 0:
                    var6 = arguments[1];
                    var1 = undefined;
                    if(!(var6 === var1)) { _fun0109_ip = 46; continue _fun0109 }
case 40:
                    var1 = _closure1_slot61;
                    var6 = var1.CHANNEL;
case 46:
                    var5 = _closure1_slot79;
                    var4 = var5.getValue;
                    var10 = arg1;
                    var8 = function(arg1) {
                        var2 = arg1;
                        var1 = var2.hasRecentlyVisitedAndRead;
                        var1 = var1.bind(var2)();
                        return var1;
                    };
                    var7 = false;
                    var11 = var5;
                    var9 = var6;
                    var1 = var11[var4](var10, var9, var8, var7, var6);
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[12] = var5;
            var5 = {};
            var7 = 'ackMessageId';
            var5['key'] = var7;
            var7 = function value(arg1) {
                _fun0110: for(var _fun0110_ip = 0; ; ) switch(_fun0110_ip) {
case 0:
                    var6 = arguments[1];
                    var1 = undefined;
                    if(!(var6 === var1)) { _fun0110_ip = 46; continue _fun0110 }
case 40:
                    var1 = _closure1_slot61;
                    var6 = var1.CHANNEL;
case 46:
                    var5 = _closure1_slot79;
                    var4 = var5.getValue;
                    var10 = arg1;
                    var8 = function(arg1) {
                        _fun0111: for(var _fun0111_ip = 0; ; ) switch(_fun0111_ip) {
case 0:
                            var2 = arg1;
                            var1 = var2.canBeUnread;
                            var3 = var1.bind(var2)();
                            var1 = null;
                            if(!var3) { _fun0111_ip = 114; continue _fun0111 }
case 127:
                            var1 = var2.ackMessageId;
case 114:
                            return var1;
                        }
                    };
                    var7 = null;
                    var11 = var5;
                    var9 = var6;
                    var1 = var11[var4](var10, var9, var8, var7, var6);
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[13] = var5;
            var5 = {};
            var7 = 'getTrackedAckMessageId';
            var5['key'] = var7;
            var7 = function value(arg1) {
                _fun0112: for(var _fun0112_ip = 0; ; ) switch(_fun0112_ip) {
case 0:
                    var6 = arguments[1];
                    var1 = undefined;
                    if(!(var6 === var1)) { _fun0112_ip = 46; continue _fun0112 }
case 40:
                    var1 = _closure1_slot61;
                    var6 = var1.CHANNEL;
case 46:
                    var5 = _closure1_slot79;
                    var4 = var5.getValue;
                    var10 = arg1;
                    var8 = function(arg1) {
                        _fun0113: for(var _fun0113_ip = 0; ; ) switch(_fun0113_ip) {
case 0:
                            var2 = arg1;
                            var1 = var2.canTrackUnreads;
                            var3 = var1.bind(var2)();
                            var1 = null;
                            if(!var3) { _fun0113_ip = 114; continue _fun0113 }
case 127:
                            var1 = var2._ackMessageId;
case 114:
                            return var1;
                        }
                    };
                    var7 = null;
                    var11 = var5;
                    var9 = var6;
                    var1 = var11[var4](var10, var9, var8, var7, var6);
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[14] = var5;
            var5 = {};
            var7 = 'lastMessageId';
            var5['key'] = var7;
            var7 = function value(arg1) {
                _fun0114: for(var _fun0114_ip = 0; ; ) switch(_fun0114_ip) {
case 0:
                    var6 = arguments[1];
                    var1 = undefined;
                    if(!(var6 === var1)) { _fun0114_ip = 46; continue _fun0114 }
case 40:
                    var1 = _closure1_slot61;
                    var6 = var1.CHANNEL;
case 46:
                    var5 = _closure1_slot79;
                    var4 = var5.getValue;
                    var10 = arg1;
                    var8 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.lastMessageId;
                        return var1;
                    };
                    var7 = null;
                    var11 = var5;
                    var9 = var6;
                    var1 = var11[var4](var10, var9, var8, var7, var6);
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[15] = var5;
            var5 = {};
            var7 = 'lastMessageTimestamp';
            var5['key'] = var7;
            var7 = function value(arg1) {
                _fun0115: for(var _fun0115_ip = 0; ; ) switch(_fun0115_ip) {
case 0:
                    var6 = arguments[1];
                    var1 = undefined;
                    if(!(var6 === var1)) { _fun0115_ip = 46; continue _fun0115 }
case 40:
                    var1 = _closure1_slot61;
                    var6 = var1.CHANNEL;
case 46:
                    var5 = _closure1_slot79;
                    var4 = var5.getValue;
                    var10 = arg1;
                    var8 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.lastMessageTimestamp;
                        return var1;
                    };
                    var7 = 0;
                    var11 = var5;
                    var9 = var6;
                    var1 = var11[var4](var10, var9, var8, var7, var6);
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[16] = var5;
            var5 = {};
            var7 = 'lastPinTimestamp';
            var5['key'] = var7;
            var7 = function value(arg1) {
                var6 = _closure1_slot79;
                var5 = var6.getValue;
                var1 = _closure1_slot61;
                var9 = var1.CHANNEL;
                var10 = arg1;
                var8 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.lastPinTimestamp;
                    return var1;
                };
                var7 = null;
                var11 = var6;
                var1 = var11[var5](var10, var9, var8, var7, var6);
                return var1;
            };
            var5['value'] = var7;
            var1[17] = var5;
            var5 = {};
            var7 = 'getOldestUnreadMessageId';
            var5['key'] = var7;
            var7 = function value(arg1) {
                _fun0116: for(var _fun0116_ip = 0; ; ) switch(_fun0116_ip) {
case 0:
                    var6 = arguments[1];
                    var1 = undefined;
                    if(!(var6 === var1)) { _fun0116_ip = 46; continue _fun0116 }
case 40:
                    var1 = _closure1_slot61;
                    var6 = var1.CHANNEL;
case 46:
                    var5 = _closure1_slot79;
                    var4 = var5.getValue;
                    var10 = arg1;
                    var8 = function(arg1) {
                        _fun0117: for(var _fun0117_ip = 0; ; ) switch(_fun0117_ip) {
case 0:
                            var2 = arg1;
                            var1 = var2.canTrackUnreads;
                            var3 = var1.bind(var2)();
                            var1 = null;
                            if(!var3) { _fun0117_ip = 114; continue _fun0117 }
case 127:
                            var1 = var2.oldestUnreadMessageId;
case 114:
                            return var1;
                        }
                    };
                    var7 = null;
                    var11 = var5;
                    var9 = var6;
                    var1 = var11[var4](var10, var9, var8, var7, var6);
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[18] = var5;
            var5 = {};
            var7 = 'getOldestUnreadTimestamp';
            var5['key'] = var7;
            var7 = function value(arg1) {
                _fun0118: for(var _fun0118_ip = 0; ; ) switch(_fun0118_ip) {
case 0:
                    var6 = arguments[1];
                    var1 = undefined;
                    if(!(var6 === var1)) { _fun0118_ip = 46; continue _fun0118 }
case 40:
                    var1 = _closure1_slot61;
                    var6 = var1.CHANNEL;
case 46:
                    var5 = _closure1_slot79;
                    var4 = var5.getValue;
                    var10 = arg1;
                    var8 = function(arg1) {
                        _fun0119: for(var _fun0119_ip = 0; ; ) switch(_fun0119_ip) {
case 0:
                            var2 = arg1;
                            var1 = var2.canTrackUnreads;
                            var3 = var1.bind(var2)();
                            var1 = 0;
                            if(!var3) { _fun0119_ip = 114; continue _fun0119 }
case 127:
                            var1 = var2.oldestUnreadTimestamp;
case 114:
                            return var1;
                        }
                    };
                    var7 = 0;
                    var11 = var5;
                    var9 = var6;
                    var1 = var11[var4](var10, var9, var8, var7, var6);
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[19] = var5;
            var5 = {};
            var7 = 'isEstimated';
            var5['key'] = var7;
            var7 = function value(arg1) {
                _fun0120: for(var _fun0120_ip = 0; ; ) switch(_fun0120_ip) {
case 0:
                    var6 = arguments[1];
                    var1 = undefined;
                    if(!(var6 === var1)) { _fun0120_ip = 46; continue _fun0120 }
case 40:
                    var1 = _closure1_slot61;
                    var6 = var1.CHANNEL;
case 46:
                    var5 = _closure1_slot79;
                    var4 = var5.getValue;
                    var10 = arg1;
                    var8 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.estimated;
                        return var1;
                    };
                    var7 = false;
                    var11 = var5;
                    var9 = var6;
                    var1 = var11[var4](var10, var9, var8, var7, var6);
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[20] = var5;
            var5 = {};
            var7 = 'hasOpenedThread';
            var5['key'] = var7;
            var7 = function value(arg1) {
                _fun0121: for(var _fun0121_ip = 0; ; ) switch(_fun0121_ip) {
case 0:
                    var6 = arguments[1];
                    var1 = undefined;
                    if(!(var6 === var1)) { _fun0121_ip = 46; continue _fun0121 }
case 40:
                    var1 = _closure1_slot61;
                    var6 = var1.CHANNEL;
case 46:
                    var5 = _closure1_slot79;
                    var4 = var5.getValue;
                    var10 = arg1;
                    var8 = function(arg1) {
                        var1 = arg1;
                        var1 = var1._persisted;
                        return var1;
                    };
                    var7 = false;
                    var11 = var5;
                    var9 = var6;
                    var1 = var11[var4](var10, var9, var8, var7, var6);
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[21] = var5;
            var5 = {};
            var7 = 'hasUnreadPins';
            var5['key'] = var7;
            var7 = function value(arg1) {
                var6 = _closure1_slot79;
                var5 = var6.getValue;
                var1 = _closure1_slot61;
                var9 = var1.CHANNEL;
                var10 = arg1;
                var8 = function(arg1) {
                    _fun0122: for(var _fun0122_ip = 0; ; ) switch(_fun0122_ip) {
case 0:
                        var2 = arg1;
                        var1 = var2.canBeUnread;
                        var1 = var1.bind(var2)();
                        if(!var1) { _fun0122_ip = 168; continue _fun0122 }
case 228:
                        var3 = var2.lastPinTimestamp;
                        var2 = var2.ackPinTimestamp;
                        var1 = var3 > var2;
case 168:
                        return var1;
                    }
                };
                var7 = false;
                var11 = var6;
                var1 = var11[var5](var10, var9, var8, var7, var6);
                return var1;
            };
            var5['value'] = var7;
            var1[22] = var5;
            var5 = {};
            var7 = 'isNewForumThread';
            var5['key'] = var7;
            var7 = function value(arg1, arg2, arg3) {
                _fun0123: for(var _fun0123_ip = 0; ; ) switch(_fun0123_ip) {
case 0:
                    var4 = arg1;
                    var5 = _closure1_slot79;
                    var3 = var5.get;
                    var2 = arg2;
                    var2 = var3.bind(var5)(var2);
                    var5 = _closure1_slot79;
                    var3 = var5.get;
                    var3 = var3.bind(var5)(var4);
                    var5 = var3._persisted;
                    var3 = true;
                    if(!(var3 !== var5)) { _fun0123_ip = 283; continue _fun0123 }
case 9:
                    var5 = var2.ackMessageIdAtChannelSelect;
                    var3 = null;
                    if(!(var3 != var5)) { _fun0123_ip = 283; continue _fun0123 }
case 11:
                    var7 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var6 = 42;
                    var3 = var3[var6];
                    var5 = undefined;
                    var7 = var7.bind(var5)(var3);
                    var3 = var7.compare;
                    var2 = var2.ackMessageIdAtChannelSelect;
                    var3 = var3.bind(var7)(var4, var2);
                    var2 = 0;
                    if(!(!(var3 <= var2))) { _fun0123_ip = 283; continue _fun0123 }
case 284:
                    var3 = _closure1_slot100;
                    var2 = arg3;
                    var2 = var3.bind(var5)(var2);
                    var3 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var1 = var1[var6];
                    var3 = var3.bind(var5)(var1);
                    var1 = var3.extractTimestamp;
                    var1 = var1.bind(var3)(var4);
                    var1 = var1 > var2;
                    return var1;
case 283:
                    var1 = false;
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[23] = var5;
            var5 = {};
            var7 = 'getAllReadStates';
            var5['key'] = var7;
            var7 = function value(arg1) {
                var1 = arg1;
                var _closure3_slot0 = var1;
                var1 = new Array(0);
                var _closure3_slot1 = var1;
                var4 = _closure1_slot79;
                var3 = var4.forEach;
                var2 = function(arg1) {
                    _fun0124: for(var _fun0124_ip = 0; ; ) switch(_fun0124_ip) {
case 0:
                        var5 = arg1;
                        var3 = var5.type;
                        var2 = _closure1_slot61;
                        var2 = var2.GUILD_HOME;
                        if(!(var2 !== var3)) { _fun0124_ip = 311; continue _fun0124 }
case 38:
                        var2 = _closure1_slot61;
                        var2 = var2.GUILD_EVENT;
                        if(!(var2 !== var3)) { _fun0124_ip = 311; continue _fun0124 }
case 177:
                        var2 = _closure1_slot61;
                        var2 = var2.GUILD_ONBOARDING_QUESTION;
                        if(!(var2 !== var3)) { _fun0124_ip = 311; continue _fun0124 }
case 225:
                        var2 = _closure1_slot61;
                        var2 = var2.NOTIFICATION_CENTER;
                        if(!(var2 !== var3)) { _fun0124_ip = 111; continue _fun0124 }
case 115:
                        var2 = _closure1_slot61;
                        var2 = var2.MESSAGE_REQUESTS;
                        if(!(var2 !== var3)) { _fun0124_ip = 111; continue _fun0124 }
case 310:
                        var4 = _closure3_slot1;
                        var3 = var4.push;
                        var6 = var5.serialize;
                        var2 = _closure3_slot0;
                        var2 = var6.bind(var5)(var2);
                        var2 = var3.bind(var4)(var2);
                        _fun0124_ip = 76; continue _fun0124;
case 111:
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var2 = 42;
                        var3 = var3[var2];
                        var2 = undefined;
                        var4 = var4.bind(var2)(var3);
                        var3 = var4.cast;
                        var7 = _closure1_slot39;
                        var6 = var7.getCurrentUser;
                        var6 = var6.bind(var7)();
                        var7 = null;
                        var7 = var7 == var6;
                        if(var7) { _fun0124_ip = 139; continue _fun0124 }
case 312:
                        var2 = var6.id;
case 139:
                        var3 = var3.bind(var4)(var2);
                        var2 = var5.channelId;
                        if(!(var3 === var2)) { _fun0124_ip = 76; continue _fun0124 }
case 73:
                        var4 = _closure3_slot1;
                        var3 = var4.push;
                        var6 = var5.serialize;
                        var2 = _closure3_slot0;
                        var2 = var6.bind(var5)(var2);
                        var2 = var3.bind(var4)(var2);
                        _fun0124_ip = 76; continue _fun0124;
case 311:
                        var3 = _closure1_slot32;
                        var2 = var3.getGuild;
                        var1 = var5.channelId;
                        var2 = var2.bind(var3)(var1);
                        var1 = null;
                        if(!(var1 != var2)) { _fun0124_ip = 76; continue _fun0124 }
case 286:
                        var3 = _closure3_slot1;
                        var2 = var3.push;
                        var4 = var5.serialize;
                        var1 = _closure3_slot0;
                        var1 = var4.bind(var5)(var1);
                        var1 = var2.bind(var3)(var1);
case 76:
                        var1 = undefined;
                        return var1;
                    }
                };
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var5['value'] = var7;
            var1[24] = var5;
            var5 = {};
            var7 = 'getGuildUnreadsSentinel';
            var5['key'] = var7;
            var7 = function value(arg1) {
                var3 = _closure1_slot79;
                var2 = var3.getGuildSentinels;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                var1 = var1.unreadsSentinel;
                return var1;
            };
            var5['value'] = var7;
            var1[25] = var5;
            var5 = {};
            var7 = 'getMentionChannelIds';
            var5['key'] = var7;
            var7 = function value() {
                var2 = _closure1_slot79;
                var1 = var2.getMentionChannelIds;
                var1 = var1.bind(var2)();
                return var1;
            };
            var5['value'] = var7;
            var1[26] = var5;
            var5 = {};
            var7 = 'getNonChannelAckId';
            var5['key'] = var7;
            var7 = function value(arg1) {
                _fun0125: for(var _fun0125_ip = 0; ; ) switch(_fun0125_ip) {
case 0:
                    var3 = _closure1_slot39;
                    var1 = var3.getCurrentUser;
                    var3 = var1.bind(var3)();
                    var1 = null;
                    var4 = var1 == var3;
                    var5 = undefined;
                    if(var4) { _fun0125_ip = 168; continue _fun0125 }
case 126:
                    var5 = var3.id;
case 168:
                    var3 = var1 == var5;
                    var1 = null;
                    if(var3) { _fun0125_ip = 133; continue _fun0125 }
case 173:
                    var4 = _closure1_slot79;
                    var3 = var4.get;
                    var2 = arg1;
                    var2 = var3.bind(var4)(var5, var2);
                    var1 = var2.ackMessageId;
case 133:
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[27] = var5;
            var5 = {};
            var7 = 'getSnapshot';
            var5['key'] = var7;
            var7 = function value(arg1, arg2) {
                _fun0126: for(var _fun0126_ip = 0; ; ) switch(_fun0126_ip) {
case 0:
                    var3 = _closure1_slot79;
                    var2 = var3.get;
                    var1 = arg1;
                    var3 = var2.bind(var3)(var1);
                    var2 = var3.snapshot;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0126_ip = 125; continue _fun0126 }
case 168:
                    var1 = global;
                    var2 = var1.Date;
                    var1 = var2.now;
                    var2 = var1.bind(var2)();
                    var1 = var3.snapshot;
                    var1 = var1.takenAt;
                    var2 = var2 - var1;
                    var1 = arg2;
                    if(!(!(var2 > var1))) { _fun0126_ip = 125; continue _fun0126 }
case 5:
                    var1 = var3.snapshot;
                    _fun0126_ip = 310; continue _fun0126;
case 125:
                    var2 = var3.takeSnapshot;
                    var1 = var2.bind(var3)();
case 310:
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[28] = var5;
            var5 = {};
            var7 = 'getChannelIdsForWindowId';
            var5['key'] = var7;
            var6 = function value(arg1) {
                var3 = _closure1_slot73;
                var2 = var3.getAllChannelIdsForWindowId;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var5['value'] = var6;
            var1[29] = var5;
            var1 = var2.bind(var3)(var4, var1);
            return var1;
        };
        var11 = var11.bind(var1)(var19);
        var11['displayName'] = var5;
        var5 = 44;
        var5 = var8[var5];
        var29 = var10.bind(var1)(var5);
        var5 = {};
        var19 = function handleBackgroundSync(arg1) {
            _fun0127: for(var _fun0127_ip = 0; ; ) switch(_fun0127_ip) {
case 0:
                var1 = arg1;
                var24 = var1.changesByChannelId;
                var22 = var24;
                var1 = undefined;
                var17 = 60;
                var16 = 42;
                var15 = 1;
                var14 = null;
                var13 = 0;
                var12 = undefined;
                var11 = undefined;
                var10 = undefined;
                var9 = undefined;
                var8 = undefined;
                for(var19 in var22)
case 39:
                {
case 156:
                    var5 = var19;
                    var2 = var24[var5];
                    var4 = _closure1_slot79;
                    var3 = var4.getIfExists;
                    var7 = var3.bind(var4)(var5);
                    if(var14 == var7) { _fun0127_ip = 39; continue _fun0127 }
case 178:
                    var3 = _closure1_slot83;
                    var6 = var2.new_messages;
                    var5 = var14 == var6;
                    var4 = undefined;
                    if(var5) { _fun0127_ip = 307; continue _fun0127 }
case 165:
                    var4 = var6[var13];
case 307:
                    var25 = new Array(1);
                    var25[0] = var4;
                    var4 = var25.concat;
                    var5 = var2.modified_messages;
                    var2 = var5;
                    if(!(var14 == var2)) { _fun0127_ip = 256; continue _fun0127 }
case 117:
                    var2 = new Array(0);
case 256:
                    var25 = var4.bind(var25)(var2);
                    var4 = var25.filter;
                    var26 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var17];
                    var2 = var26.bind(var1)(var2);
                    var2 = var2.isNotNullish;
                    var2 = var4.bind(var25)(var2);
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.bind(var1)();
                    var2 = var3.done;
                    var12 = var6;
                    var11 = var5;
                    var10 = var3;
                    var9 = var4;
                    var3 = var10;
                    if(var2) { _fun0127_ip = 39; continue _fun0127 }
case 195:
                    var8 = var3.value;
                    var25 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var2 = var2[var16];
                    var27 = var25.bind(var1)(var2);
                    var26 = var27.compare;
                    var25 = var8.id;
                    var2 = var7.lastMessageId;
                    var2 = var26.bind(var27)(var25, var2);
                    if(!(var15 === var2)) { _fun0127_ip = 144; continue _fun0127 }
case 305:
                    var2 = var8.id;
                    var7['lastMessageId'] = var2;
case 144:
                    var25 = var4.bind(var1)();
                    var2 = var25.done;
                    var12 = var6;
                    var11 = var5;
                    var10 = var25;
                    var9 = var4;
                    var3 = var10;
                    if(var2) { _fun0127_ip = 39; continue _fun0127 }
case 291:
                    _fun0127_ip = 195; continue _fun0127;
                }
case 246:
                return var1;
            }
        };
        var5['BACKGROUND_SYNC_CHANNEL_MESSAGES'] = var19;
        var19 = function handleConnectionOpen(arg1) {
            _fun0128: for(var _fun0128_ip = 0; ; ) switch(_fun0128_ip) {
case 0:
                var1 = arg1;
                var5 = var1.guilds;
                var7 = var1.relationships;
                var6 = var1.initialPrivateChannels;
                var4 = var1.readState;
                var _closure2_slot0 = var4;
                var8 = _closure1_slot86;
                var1 = undefined;
                var8 = var8.bind(var1)();
                var8 = null;
                _closure1_slot68 = var8;
                var9 = _closure1_slot69;
                if(var9) { _fun0128_ip = 133; continue _fun0128 }
case 180:
                var9 = var4.partial;
case 133:
                if(var9) { _fun0128_ip = 221; continue _fun0128 }
case 313:
                var10 = _closure1_slot79;
                var9 = var10.clearAll;
                var9 = var9.bind(var10)();
case 221:
                var9 = false;
                _closure1_slot69 = var9;
                var10 = var4.entries;
                var9 = var10.forEach;
                var4 = function(arg1) {
                    _fun0129: for(var _fun0129_ip = 0; ; ) switch(_fun0129_ip) {
case 0:
                        var2 = arg1;
                        var6 = var2.read_state_type;
                        var7 = null;
                        if(!(var7 == var6)) { _fun0129_ip = 38; continue _fun0129 }
case 217:
                        var1 = _closure1_slot61;
                        var6 = var1.CHANNEL;
case 38:
                        var1 = _closure1_slot61;
                        var1 = var1.CHANNEL;
                        var4 = var2;
                        if(!(var6 !== var1)) { _fun0129_ip = 181; continue _fun0129 }
case 132:
                        var1 = {};
                        var5 = var2.id;
                        var1['id'] = var5;
                        var5 = var2.read_state_type;
                        var1['read_state_type'] = var5;
                        var5 = var2.badge_count;
                        var1['mention_count'] = var5;
                        var2 = var2.last_acked_id;
                        var1['last_message_id'] = var2;
                        var4 = var1;
case 181:
                        var5 = _closure1_slot79;
                        var2 = var5.get;
                        var1 = var4.id;
                        var2 = var2.bind(var5)(var1, var6);
                        var1 = true;
                        var2['_persisted'] = var1;
                        var6 = var4.mention_count;
                        var8 = var7 != var6;
                        var5 = 0;
                        var1 = 0;
                        if(!var8) { _fun0129_ip = 314; continue _fun0129 }
case 234:
                        var1 = var6;
case 314:
                        var2['_mentionCount'] = var1;
                        var1 = var4.flags;
                        var2['flags'] = var1;
                        var1 = var4.last_viewed;
                        var2['lastViewed'] = var1;
                        var8 = _closure1_slot29;
                        var6 = var8.getBasicChannel;
                        var1 = var4.id;
                        var1 = var6.bind(var8)(var1);
                        if(!(var7 != var1)) { _fun0129_ip = 146; continue _fun0129 }
case 51:
                        var8 = _closure1_slot23;
                        var6 = var1.type;
                        var10 = undefined;
                        var6 = var8.bind(var10)(var6);
                        if(!var6) { _fun0129_ip = 146; continue _fun0129 }
case 249:
                        var6 = var4.last_message_id;
                        if(!(var7 != var6)) { _fun0129_ip = 315; continue _fun0129 }
case 316:
                        var6 = var4.last_message_id;
                        if(!(var5 === var6)) { _fun0129_ip = 146; continue _fun0129 }
case 315:
                        var7 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var6 = 42;
                        var6 = var8[var6];
                        var7 = var7.bind(var10)(var6);
                        var6 = var7.fromTimestamp;
                        var9 = _closure1_slot99;
                        var8 = var1.guild_id;
                        var1 = var1.id;
                        var1 = var9.bind(var10)(var8, var1);
                        var1 = var6.bind(var7)(var1);
                        var2['ackMessageId'] = var1;
                        _fun0129_ip = 88; continue _fun0129;
case 146:
                        var1 = var2.ackedWhileCached;
                        if(var1) { _fun0129_ip = 317; continue _fun0129 }
case 246:
                        var1 = var4.last_message_id;
                        var2['ackMessageId'] = var1;
                        _fun0129_ip = 88; continue _fun0129;
case 317:
                        var7 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var1 = 42;
                        var6 = var6[var1];
                        var1 = undefined;
                        var8 = var7.bind(var1)(var6);
                        var7 = var8.compare;
                        var6 = var2.ackMessageId;
                        var1 = var4.last_message_id;
                        var6 = var7.bind(var8)(var6, var1);
                        var1 = -1;
                        if(!(var1 === var6)) { _fun0129_ip = 88; continue _fun0129 }
case 87:
                        var1 = var4.last_message_id;
                        var2['ackMessageId'] = var1;
case 88:
                        var1 = undefined;
                        var2['ackedWhileCached'] = var1;
                        var6 = _closure1_slot87;
                        var4 = var4.last_pin_timestamp;
                        var4 = var6.bind(var1)(var4);
                        var2['ackPinTimestamp'] = var4;
                        var4 = _closure1_slot79;
                        var7 = var4._mentionChannels;
                        var6 = var7.delete;
                        var4 = var2.channelId;
                        var4 = var6.bind(var7)(var4);
                        var4 = var2._mentionCount;
                        var4 = var4 > var5;
                        if(!var4) { _fun0129_ip = 318; continue _fun0129 }
case 215:
                        var5 = var2.canHaveMentions;
                        var4 = var5.bind(var2)();
case 318:
                        if(!var4) { _fun0129_ip = 319; continue _fun0129 }
case 320:
                        var3 = _closure1_slot79;
                        var4 = var3._mentionChannels;
                        var3 = var4.add;
                        var2 = var2.channelId;
                        var2 = var3.bind(var4)(var2);
case 319:
                        return var1;
                    }
                };
                var4 = var9.bind(var10)(var4);
                var9 = _closure1_slot79;
                var4 = var9.resetGuildSentinels;
                var4 = var4.bind(var9)();
                var9 = _closure1_slot39;
                var4 = var9.getCurrentUser;
                var4 = var4.bind(var9)();
                var9 = var8 == var4;
                var11 = undefined;
                if(var9) { _fun0128_ip = 59; continue _fun0128 }
case 314:
                var11 = var4.id;
case 59:
                if(!(var8 != var11)) { _fun0128_ip = 74; continue _fun0128 }
case 129:
                var10 = _closure1_slot79;
                var9 = var10.get;
                var4 = _closure1_slot61;
                var4 = var4.NOTIFICATION_CENTER;
                var9 = var9.bind(var10)(var11, var4);
                var10 = _closure1_slot1;
                var11 = _closure1_slot2;
                var4 = 42;
                var4 = var11[var4];
                var11 = var10.bind(var1)(var4);
                var10 = var11.fromTimestamp;
                var4 = global;
                var12 = var4.Date;
                var4 = var12.now;
                var4 = var4.bind(var12)();
                var4 = var10.bind(var11)(var4);
                var9['lastMessageId'] = var4;
case 74:
                var4 = _closure1_slot98;
                var4 = var4.bind(var1)(var7);
                var4 = _closure1_slot95;
                var4 = var4.bind(var1)(var6);
                var4 = _closure1_slot83;
                var7 = var4.bind(var1)(var5);
                var5 = var7.bind(var1)();
                var4 = var5.done;
                var6 = 'full_sync';
                if(var4) { _fun0128_ip = 321; continue _fun0128 }
case 322:
                var9 = var5.value;
                var10 = _closure1_slot95;
                var4 = var9.channels;
                var4 = var4.op;
                if(!(var6 !== var4)) { _fun0128_ip = 79; continue _fun0128 }
case 323:
                var4 = var9.channels;
                var4 = var4.writes;
                _fun0128_ip = 30; continue _fun0128;
case 79:
                var11 = var9.channels;
                var4 = var11.items;
case 30:
                var4 = var10.bind(var1)(var4);
                var4 = var9.channelTimestampUpdates;
                if(!(var8 != var4)) { _fun0128_ip = 85; continue _fun0128 }
case 324:
                var10 = _closure1_slot105;
                var4 = var9.channelTimestampUpdates;
                var4 = var10.bind(var1)(var4);
case 85:
                var4 = _closure1_slot97;
                var4 = var4.bind(var1)(var9);
                var9 = var7.bind(var1)();
                var4 = var9.done;
                var5 = var9;
                if(!var4) { _fun0128_ip = 322; continue _fun0128 }
case 321:
                var4 = _closure1_slot104;
                var4 = var4.bind(var1)();
                var4 = global;
                var5 = var4.setTimeout;
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var4 = 43;
                var4 = var7[var4];
                var4 = var6.bind(var1)(var4);
                var4 = var4.Millis;
                var6 = var4.SECOND;
                var4 = 10;
                var4 = var4 * var6;
                var2 = function() {
                    _fun0130: for(var _fun0130_ip = 0; ; ) switch(_fun0130_ip) {
case 0:
                        var1 = _closure2_slot0;
                        var3 = var1.entries;
                        var2 = _closure1_slot85;
                        var1 = undefined;
                        var6 = var2.bind(var1)();
                        var2 = _closure1_slot83;
                        var5 = var2.bind(var1)(var3);
                        var3 = var5.bind(var1)();
                        var2 = var3.done;
                        var4 = null;
                        if(var2) { _fun0130_ip = 193; continue _fun0130 }
case 9:
                        var2 = var3.value;
                        var10 = var2.read_state_type;
                        if(!(var4 == var10)) { _fun0130_ip = 4; continue _fun0130 }
case 229:
                        var8 = _closure1_slot61;
                        var10 = var8.CHANNEL;
case 4:
                        var9 = _closure1_slot79;
                        var8 = var9.get;
                        var2 = var2.id;
                        var8 = var8.bind(var9)(var2, var10);
                        var2 = var8.shouldDeleteReadState;
                        var2 = var2.bind(var8)(var6);
                        if(!var2) { _fun0130_ip = 135; continue _fun0130 }
case 165:
                        var2 = _closure1_slot80;
                        var2 = var2.bind(var1)(var8);
case 135:
                        var8 = var5.bind(var1)();
                        var2 = var8.done;
                        var3 = var8;
                        if(!var2) { _fun0130_ip = 9; continue _fun0130 }
case 193:
                        return var1;
                    }
                };
                var2 = var5.bind(var1)(var2, var4);
                _closure1_slot72 = var2;
                return var1;
            }
        };
        var5['CONNECTION_OPEN'] = var19;
        var19 = function handleConnectionOpenSupplemental(arg1) {
            var1 = arg1;
            var3 = var1.lazyPrivateChannels;
            var2 = _closure1_slot95;
            var1 = undefined;
            var2 = var2.bind(var1)(var3);
            return var1;
        };
        var5['CONNECTION_OPEN_SUPPLEMENTAL'] = var19;
        var5['LOGOUT'] = var18;
        var18 = function handleOverlayInitialize(arg1) {
            var1 = arg1;
            var4 = var1.readStates;
            var3 = var1.selectedChannelId;
            var5 = _closure1_slot86;
            var1 = undefined;
            var5 = var5.bind(var1)();
            var5 = null;
            _closure1_slot68 = var5;
            _closure1_slot66 = var3;
            var6 = _closure1_slot28;
            var5 = var6.getCurrentSidebarChannelId;
            var3 = _closure1_slot66;
            var3 = var5.bind(var6)(var3);
            _closure1_slot67 = var3;
            var3 = _closure1_slot79;
            var2 = var3.clearAll;
            var2 = var2.bind(var3)();
            var3 = var4.forEach;
            var2 = function(arg1) {
                _fun0131: for(var _fun0131_ip = 0; ; ) switch(_fun0131_ip) {
case 0:
                    var4 = arg1;
                    var5 = _closure1_slot79;
                    var3 = var5.get;
                    var2 = var4.channelId;
                    var2 = var3.bind(var5)(var2);
                    var3 = var2.deserializeForOverlay;
                    var3 = var3.bind(var2)(var4);
                    var3 = var2.type;
                    var1 = _closure1_slot61;
                    var1 = var1.CHANNEL;
                    if(!(var3 === var1)) { _fun0131_ip = 34; continue _fun0131 }
case 48:
                    var1 = var2.rebuildChannelState;
                    var1 = var1.bind(var2)();
case 34:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var5['OVERLAY_INITIALIZE'] = var18;
        var18 = function handleCacheLoaded(arg1) {
            var1 = arg1;
            var4 = var1.readStates;
            var2 = true;
            _closure1_slot69 = var2;
            var2 = _closure1_slot86;
            var1 = undefined;
            var2 = var2.bind(var1)();
            var3 = var4.forEach;
            var2 = function(arg1) {
                _fun0132: for(var _fun0132_ip = 0; ; ) switch(_fun0132_ip) {
case 0:
                    var10 = arg1;
                    var4 = var10.type;
                    var1 = null;
                    if(!(var1 == var4)) { _fun0132_ip = 126; continue _fun0132 }
case 36:
                    var2 = _closure1_slot61;
                    var4 = var2.CHANNEL;
case 126:
                    var10['type'] = var4;
                    var3 = _closure1_slot79;
                    var5 = var3._readStates;
                    var3 = var5.get;
                    var3 = var3.bind(var5)(var4);
                    var5 = var4;
                    var4 = var3;
                    if(!(var1 == var4)) { _fun0132_ip = 174; continue _fun0132 }
case 190:
                    var1 = global;
                    var1 = var1.Map;
                    var3 = var1.prototype;
                    var3 = Object.create(var3, {constructor: {value: var1}});
                    var13 = var3;
                    var1 = new var13[var1](var12);
                    var4 = var1 instanceof Object ? var1 : var3;
case 174:
                    var7 = var4.set;
                    var6 = var10.channelId;
                    var8 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 65;
                    var3 = var3[var1];
                    var1 = undefined;
                    var9 = var8.bind(var1)(var3);
                    var8 = var9.dangerouslyCast;
                    var3 = _closure1_slot79;
                    var3 = var8.bind(var9)(var10, var3);
                    var3 = var7.bind(var4)(var6, var3);
                    var3 = _closure1_slot79;
                    var6 = var3._readStates;
                    var3 = var6.has;
                    var3 = var3.bind(var6)(var5);
                    if(var3) { _fun0132_ip = 258; continue _fun0132 }
case 183:
                    var2 = _closure1_slot79;
                    var3 = var2._readStates;
                    var2 = var3.set;
                    var2 = var2.bind(var3)(var5, var4);
case 258:
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var5['CACHE_LOADED'] = var18;
        var18 = function handleGuildCreate(arg1) {
            _fun0133: for(var _fun0133_ip = 0; ; ) switch(_fun0133_ip) {
case 0:
                var1 = arg1;
                var3 = var1.guild;
                var _closure2_slot0 = var3;
                var5 = _closure1_slot85;
                var1 = undefined;
                var5 = var5.bind(var1)();
                var _closure2_slot1 = var5;
                var6 = _closure1_slot79;
                var5 = var6.forEach;
                var4 = function(arg1) {
                    _fun0134: for(var _fun0134_ip = 0; ; ) switch(_fun0134_ip) {
case 0:
                        var3 = arg1;
                        var4 = var3.guildId;
                        var1 = _closure2_slot0;
                        var1 = var1.id;
                        var1 = var4 === var1;
                        if(!var1) { _fun0134_ip = 52; continue _fun0134 }
case 126:
                        var4 = var3.shouldDeleteReadState;
                        var2 = _closure2_slot1;
                        var1 = var4.bind(var3)(var2);
case 52:
                        if(!var1) { _fun0134_ip = 48; continue _fun0134 }
case 177:
                        var2 = var3.delete;
                        var1 = false;
                        var1 = var2.bind(var3)(var1);
case 48:
                        var1 = undefined;
                        return var1;
                    }
                };
                var4 = var5.bind(var6)(var4);
                var5 = _closure1_slot95;
                var4 = var3.channels;
                var6 = var4.op;
                var4 = 'full_sync';
                if(!(var4 !== var6)) { _fun0133_ip = 178; continue _fun0133 }
case 227:
                var4 = var3.channels;
                var4 = var4.writes;
                _fun0133_ip = 222; continue _fun0133;
case 178:
                var6 = var3.channels;
                var4 = var6.items;
case 222:
                var4 = var5.bind(var1)(var4);
                var5 = var3.channelTimestampUpdates;
                var4 = null;
                if(!(var4 != var5)) { _fun0133_ip = 309; continue _fun0133 }
case 179:
                var5 = _closure1_slot105;
                var4 = var3.channelTimestampUpdates;
                var4 = var5.bind(var1)(var4);
case 309:
                var2 = _closure1_slot97;
                var2 = var2.bind(var1)(var3);
                return var1;
            }
        };
        var5['GUILD_CREATE'] = var18;
        var18 = function handleLoadMessages(arg1) {
            _fun0135: for(var _fun0135_ip = 0; ; ) switch(_fun0135_ip) {
case 0:
                var1 = arg1;
                var8 = var1.channelId;
                var2 = var1.isAfter;
                var5 = var1.messages;
                var4 = _closure1_slot79;
                var3 = var4.get;
                var3 = var3.bind(var4)(var8);
                var9 = true;
                var3['loadedMessages'] = var9;
                var6 = var3.lastMessageId;
                var4 = null;
                var6 = var4 == var6;
                if(!var6) { _fun0135_ip = 53; continue _fun0135 }
case 186:
                var10 = var5.length;
                var7 = 0;
                var6 = var10 > var7;
case 53:
                if(!var6) { _fun0135_ip = 134; continue _fun0135 }
case 4:
                var6 = 0;
                var6 = var5[var6];
                var6 = var6.id;
                var3['lastMessageId'] = var6;
case 134:
                var7 = _closure1_slot34;
                var6 = var7.getMessages;
                var8 = var6.bind(var7)(var8);
                if(!(var4 != var8)) { _fun0135_ip = 325; continue _fun0135 }
case 278:
                var6 = var5.length;
                var7 = 0;
                if(!(var6 > var7)) { _fun0135_ip = 198; continue _fun0135 }
case 220:
                var11 = _closure1_slot1;
                var10 = _closure1_slot2;
                var6 = 42;
                var10 = var10[var6];
                var6 = undefined;
                var12 = var11.bind(var6)(var10);
                var11 = var12.compare;
                var6 = var5[var7];
                var10 = var6.id;
                var6 = var3.ackMessageId;
                var10 = var11.bind(var12)(var10, var6);
                var6 = 1;
                if(!(var6 === var10)) { _fun0135_ip = 198; continue _fun0135 }
case 44:
                var6 = var3.unreadCount;
                if(!(var7 !== var6)) { _fun0135_ip = 146; continue _fun0135 }
case 198:
                var6 = var8.hasPresent;
                var6 = var6.bind(var8)();
                if(var6) { _fun0135_ip = 146; continue _fun0135 }
case 138:
                var7 = var8.jumpTargetId;
                var6 = var3.ackMessageId;
                if(!(var7 !== var6)) { _fun0135_ip = 146; continue _fun0135 }
case 249:
                if(!var2) { _fun0135_ip = 253; continue _fun0135 }
case 61:
                var6 = var3.ackMessageId;
                var2 = var4 != var6;
case 253:
                if(!var2) { _fun0135_ip = 326; continue _fun0135 }
case 74:
                var7 = var8.has;
                var6 = var3.ackMessageId;
                var2 = var7.bind(var8)(var6, var9);
case 326:
                if(!var2) { _fun0135_ip = 325; continue _fun0135 }
case 327:
                var6 = var3.unreadCount;
                var2 = var5.length;
                var2 = var6 + var2;
                var3['unreadCount'] = var2;
                var2 = var3.oldestUnreadMessageId;
                if(!(var4 == var2)) { _fun0135_ip = 325; continue _fun0135 }
case 328:
                var2 = var3.rebuildChannelState;
                var2 = var2.bind(var3)();
                _fun0135_ip = 325; continue _fun0135;
case 146:
                var2 = var3.rebuildChannelState;
                var2 = var2.bind(var3)();
case 325:
                var3 = _closure1_slot96;
                var4 = var5.map;
                var2 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.thread;
                    return var1;
                };
                var5 = var4.bind(var5)(var2);
                var4 = var5.filter;
                var6 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 60;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var6.bind(var1)(var2);
                var2 = var2.isNotNullish;
                var2 = var4.bind(var5)(var2);
                var2 = var3.bind(var1)(var2);
                return var1;
            }
        };
        var5['LOAD_MESSAGES_SUCCESS'] = var18;
        var18 = function handleLocalMessagesLoaded(arg1) {
            _fun0136: for(var _fun0136_ip = 0; ; ) switch(_fun0136_ip) {
case 0:
                var1 = arg1;
                var7 = var1.channelId;
                var2 = var1.messages;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 61;
                var3 = var3[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = var4.isIOSPushNotificationRawPayloadFixExperimentEnabled;
                var3 = var3.bind(var4)();
                if(var3) { _fun0136_ip = 32; continue _fun0136 }
case 155:
                var3 = false;
                return var3;
case 32:
                var3 = var2.length;
                var6 = 0;
                if(!(var6 !== var3)) { _fun0136_ip = 157; continue _fun0136 }
case 34:
                var4 = _closure1_slot79;
                var3 = var4.get;
                var3 = var3.bind(var4)(var7);
                var2 = var2[var6];
                var2 = var2.id;
                var7 = var3.lastMessageId;
                var4 = null;
                var4 = var4 == var7;
                if(var4) { _fun0136_ip = 314; continue _fun0136 }
case 55:
                var7 = _closure1_slot1;
                var8 = _closure1_slot2;
                var5 = 42;
                var5 = var8[var5];
                var8 = var7.bind(var1)(var5);
                var7 = var8.compare;
                var5 = var3.lastMessageId;
                var5 = var7.bind(var8)(var2, var5);
                var4 = var5 > var6;
case 314:
                if(!var4) { _fun0136_ip = 187; continue _fun0136 }
case 58:
                var3['lastMessageId'] = var2;
                var2 = var3.rebuildChannelState;
                var2 = var2.bind(var3)();
case 187:
                return var1;
case 157:
                var1 = false;
                return var1;
            }
        };
        var5['LOCAL_MESSAGES_LOADED'] = var18;
        var18 = function handleIncomingMessage(arg1) {
            _fun0137: for(var _fun0137_ip = 0; ; ) switch(_fun0137_ip) {
case 0:
                var1 = arg1;
                var12 = var1.channelId;
                var6 = var1.message;
                var11 = var1.isPushNotification;
                var2 = _closure1_slot79;
                var1 = var2.get;
                var3 = var1.bind(var2)(var12);
                var1 = var3.hasUnread;
                var10 = var1.bind(var3)();
                var1 = var3.lastMessageId;
                var7 = null;
                var9 = var7 != var1;
                if(!var9) { _fun0137_ip = 115; continue _fun0137 }
case 11:
                var2 = var3.lastMessageId;
                var1 = var6.id;
                var9 = var2 >= var1;
case 115:
                var1 = var6.id;
                var3['lastMessageId'] = var1;
                var2 = _closure1_slot39;
                var1 = var2.getCurrentUser;
                var2 = var1.bind(var2)();
                var4 = _closure1_slot29;
                var1 = var4.getBasicChannel;
                var8 = var1.bind(var4)(var12);
                var1 = var6.author;
                if(!(var7 != var1)) { _fun0137_ip = 253; continue _fun0137 }
case 105:
                if(!(var7 != var2)) { _fun0137_ip = 253; continue _fun0137 }
case 281:
                var1 = var6.author;
                var4 = var1.id;
                var1 = var2.id;
                if(!(var4 === var1)) { _fun0137_ip = 253; continue _fun0137 }
case 160:
                var1 = _closure1_slot54;
                var13 = var1.SELF_MENTIONABLE_SYSTEM;
                var4 = var13.has;
                var1 = var6.type;
                var1 = var4.bind(var13)(var1);
                if(var1) { _fun0137_ip = 253; continue _fun0137 }
case 312:
                var1 = var3.outgoingAck;
                if(!(var7 != var1)) { _fun0137_ip = 140; continue _fun0137 }
case 23:
                var1 = var3.clearOutgoingAck;
                var1 = var1.bind(var3)();
case 140:
                var13 = _closure1_slot110;
                var4 = {};
                var4['channelId'] = var12;
                var1 = var6.id;
                var4['messageId'] = var1;
                var1 = false;
                var4['manual'] = var1;
                var1 = undefined;
                var1 = var13.bind(var1)(var4);
                return var1;
case 253:
                var13 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 62;
                var4 = var4[var1];
                var1 = undefined;
                var13 = var13.bind(var1)(var4);
                var4 = var13.getRootNavigationRef;
                var16 = var4.bind(var13)();
                var4 = var7 == var16;
                var13 = undefined;
                if(var4) { _fun0137_ip = 14; continue _fun0137 }
case 329:
                var4 = var16.isReady;
                var13 = var4.bind(var16)();
case 14:
                var4 = true;
                if(!(var4 !== var13)) { _fun0137_ip = 330; continue _fun0137 }
case 29:
                var15 = var7 == var16;
                var13 = undefined;
                var14 = undefined;
                if(!var15) { _fun0137_ip = 331; continue _fun0137 }
case 233:
                var17 = _closure1_slot37;
                var15 = var17.getChannelId;
                var17 = var15.bind(var17)();
                var18 = _closure1_slot28;
                var15 = var18.getCurrentSidebarChannelId;
                var14 = var15.bind(var18)(var17);
                var13 = var17;
                _fun0137_ip = 331; continue _fun0137;
case 330:
                var15 = var16.getCurrentRoute;
                var15 = var15.bind(var16)();
                var18 = _closure1_slot11;
                var17 = var18.getChatOpen;
                var16 = var3.channelId;
                var16 = var17.bind(var18)(var16);
                if(var16) { _fun0137_ip = 332; continue _fun0137 }
case 333:
                var16 = var7 == var15;
                var17 = undefined;
                if(var16) { _fun0137_ip = 334; continue _fun0137 }
case 335:
                var17 = var15.name;
case 334:
                var16 = 'channel';
                if(!(var16 !== var17)) { _fun0137_ip = 336; continue _fun0137 }
case 337:
                var16 = var7 == var15;
                var17 = undefined;
                if(var16) { _fun0137_ip = 288; continue _fun0137 }
case 338:
                var17 = var15.name;
case 288:
                var16 = 'guilds';
                var13 = undefined;
                var14 = undefined;
                if(!(var16 === var17)) { _fun0137_ip = 331; continue _fun0137 }
case 339:
                var17 = var15.params;
                var18 = var7 == var17;
                var16 = undefined;
                if(var18) { _fun0137_ip = 340; continue _fun0137 }
case 341:
                var16 = var17.channelId;
case 340:
                var13 = var16;
                var14 = undefined;
                _fun0137_ip = 331; continue _fun0137;
case 336:
                var15 = var15.params;
                var13 = var15.channelId;
                var14 = undefined;
                _fun0137_ip = 331; continue _fun0137;
case 332:
                var13 = var3.channelId;
                var14 = undefined;
case 331:
                var13 = var13 === var12;
                if(var13) { _fun0137_ip = 214; continue _fun0137 }
case 342:
                var13 = var14 === var12;
case 214:
                if(!var13) { _fun0137_ip = 343; continue _fun0137 }
case 344:
                var13 = _closure1_slot94;
                var13 = var13.bind(var1)(var3);
                if(!var13) { _fun0137_ip = 343; continue _fun0137 }
case 345:
                if(var11) { _fun0137_ip = 343; continue _fun0137 }
case 346:
                var13 = _closure1_slot92;
                var11 = var3.channelId;
                var13 = var13.bind(var1)(var1, var11);
                var11 = _closure1_slot43;
                if(var13) { _fun0137_ip = 347; continue _fun0137 }
case 348:
                var15 = var11.CHANNEL;
                _fun0137_ip = 349; continue _fun0137;
case 347:
                var15 = var11.OVERLAY;
case 349:
                var13 = var3.ack;
                var11 = {};
                var14 = var6.id;
                var11['messageId'] = var14;
                var11['trackAnalytics'] = var4;
                var14 = {};
                var14['section'] = var15;
                var15 = _closure1_slot42;
                var15 = var15.ACK_INCOMING_MESSAGE;
                var14['object'] = var15;
                var15 = _closure1_slot41;
                var15 = var15.ACK_AUTOMATIC;
                var14['objectType'] = var15;
                var11['location'] = var14;
                var11 = var13.bind(var3)(var11);
                return var11;
case 343:
                var11 = _closure1_slot92;
                var11 = var11.bind(var1)(var1, var12);
                if(var11) { _fun0137_ip = 350; continue _fun0137 }
case 351:
                var11 = var3.oldestUnreadMessageId;
                if(!(var7 != var11)) { _fun0137_ip = 352; continue _fun0137 }
case 353:
                var11 = var3.oldestUnreadMessageIdStale;
                if(var11) { _fun0137_ip = 352; continue _fun0137 }
case 354:
                if(var10) { _fun0137_ip = 355; continue _fun0137 }
case 356:
                var13 = _closure1_slot0;
                var14 = _closure1_slot2;
                var11 = 50;
                var11 = var14[var11];
                var13 = var13.bind(var1)(var11);
                var11 = var13.getFocusedChannelId;
                var11 = var11.bind(var13)();
                var10 = var11 === var12;
case 355:
                if(var10) { _fun0137_ip = 71; continue _fun0137 }
case 357:
                var10 = var6.id;
                var3['oldestUnreadMessageId'] = var10;
                _fun0137_ip = 71; continue _fun0137;
case 352:
                var10 = var6.id;
                var3['oldestUnreadMessageId'] = var10;
case 71:
                if(var9) { _fun0137_ip = 358; continue _fun0137 }
case 359:
                var9 = var3.unreadCount;
                var9 = var9 + 1;
                var3['unreadCount'] = var9;
case 358:
                var10 = _closure1_slot36;
                var9 = var10.isBlockedOrIgnoredForMessage;
                var9 = var9.bind(var10)(var6);
                if(var9) { _fun0137_ip = 360; continue _fun0137 }
case 361:
                var10 = var6.type;
                var9 = _closure1_slot50;
                var9 = var9.RECIPIENT_REMOVE;
                if(!(var10 === var9)) { _fun0137_ip = 362; continue _fun0137 }
case 363:
                var10 = var7 == var8;
                var9 = undefined;
                if(var10) { _fun0137_ip = 364; continue _fun0137 }
case 365:
                var9 = var8.type;
case 364:
                var8 = _closure1_slot47;
                var8 = var8.GROUP_DM;
                if(!(var9 !== var8)) { _fun0137_ip = 360; continue _fun0137 }
case 362:
                if(!(var7 != var2)) { _fun0137_ip = 366; continue _fun0137 }
case 367:
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var8 = 45;
                var8 = var10[var8];
                var10 = var9.bind(var1)(var8);
                var9 = var10.isRawMessageMentioned;
                var8 = {};
                var8['rawMessage'] = var6;
                var11 = var2.id;
                var8['userId'] = var11;
                var13 = _closure1_slot38;
                var12 = var13.isSuppressEveryoneEnabled;
                var11 = var3.guildId;
                var11 = var12.bind(var13)(var11);
                var8['suppressEveryone'] = var11;
                var13 = _closure1_slot38;
                var12 = var13.isSuppressRolesEnabled;
                var11 = var3.guildId;
                var11 = var12.bind(var13)(var11);
                var8['suppressRoles'] = var11;
                var8 = var9.bind(var10)(var8);
                if(var8) { _fun0137_ip = 368; continue _fun0137 }
case 366:
                var10 = _closure1_slot29;
                var9 = var10.getChannel;
                var8 = var6.channel_id;
                var11 = var9.bind(var10)(var8);
                var8 = _closure1_slot89;
                var8 = var8.bind(var1)(var11);
                if(var8) { _fun0137_ip = 369; continue _fun0137 }
case 370:
                var8 = _closure1_slot38;
                var8 = var8.mentionOnAllMessages;
                if(!var8) { _fun0137_ip = 371; continue _fun0137 }
case 372:
                if(!(var7 != var11)) { _fun0137_ip = 371; continue _fun0137 }
case 373:
                var8 = var11.isThread;
                var8 = var8.bind(var11)();
                if(var8) { _fun0137_ip = 374; continue _fun0137 }
case 375:
                var8 = var11.isVocal;
                var8 = var8.bind(var11)();
                if(var8) { _fun0137_ip = 371; continue _fun0137 }
case 376:
                var12 = _closure1_slot38;
                var10 = var12.isChannelMuted;
                var9 = var11.guild_id;
                var8 = var11.id;
                var8 = var10.bind(var12)(var9, var8);
                if(var8) { _fun0137_ip = 371; continue _fun0137 }
case 377:
                var9 = _closure1_slot38;
                var8 = var9.resolvedMessageNotifications;
                var9 = var8.bind(var9)(var11);
                var8 = _closure1_slot53;
                var8 = var8.ALL_MESSAGES;
                if(!(var9 === var8)) { _fun0137_ip = 371; continue _fun0137 }
case 378:
                var8 = {'shouldMention': true, 'isMentionLowImportance': true};
                _fun0137_ip = 379; continue _fun0137;
case 374:
                var10 = _closure1_slot0;
                var12 = _closure1_slot2;
                var9 = 63;
                var9 = var12[var9];
                var10 = var10.bind(var1)(var9);
                var9 = var10.computeThreadNotificationSetting;
                var10 = var9.bind(var10)(var11);
                var9 = _closure1_slot62;
                var9 = var9.ALL_MESSAGES;
                if(!(var10 !== var9)) { _fun0137_ip = 380; continue _fun0137 }
case 371:
                var8 = {'shouldMention': false, 'isMentionLowImportance': false};
                _fun0137_ip = 379; continue _fun0137;
case 380:
                var8 = {'shouldMention': true, 'isMentionLowImportance': true};
                _fun0137_ip = 379; continue _fun0137;
case 369:
                var8 = {'shouldMention': true, 'isMentionLowImportance': false};
                _fun0137_ip = 379; continue _fun0137;
case 368:
                var8 = {'shouldMention': true, 'isMentionLowImportance': false};
case 379:
                var9 = var8.shouldMention;
                var8 = var8.isMentionLowImportance;
                if(!var9) { _fun0137_ip = 360; continue _fun0137 }
case 381:
                var3['isMentionLowImportance'] = var8;
                var8 = var3.mentionCount;
                var8 = var8 + 1;
                var3['mentionCount'] = var8;
                if(!(var7 != var2)) { _fun0137_ip = 360; continue _fun0137 }
case 382:
                var10 = _closure1_slot79;
                var9 = var10.get;
                var8 = var2.id;
                var7 = _closure1_slot61;
                var7 = var7.NOTIFICATION_CENTER;
                var8 = var9.bind(var10)(var8, var7);
                var7 = var6.id;
                var8['lastMessageId'] = var7;
                var7 = _closure1_slot18;
                var7 = var7.tabFocused;
                if(!var7) { _fun0137_ip = 360; continue _fun0137 }
case 383:
                var9 = _closure1_slot112;
                var22 = var2.id;
                var2 = _closure1_slot61;
                var21 = var2.NOTIFICATION_CENTER;
                var19 = false;
                var23 = undefined;
                var20 = undefined;
                var2 = var23[var9](var22, var21, var20, var19, var18);
case 360:
                return var1;
case 350:
                var2 = var3.ack;
                var1 = {};
                var6 = var6.id;
                var1['messageId'] = var6;
                var1['trackAnalytics'] = var4;
                var4 = {};
                var6 = _closure1_slot43;
                var6 = var6.OVERLAY;
                var4['section'] = var6;
                var6 = _closure1_slot42;
                var6 = var6.ACK_INCOMING_MESSAGE;
                var4['object'] = var6;
                var5 = _closure1_slot41;
                var5 = var5.ACK_AUTOMATIC;
                var4['objectType'] = var5;
                var1['location'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            }
        };
        var5['MESSAGE_CREATE'] = var18;
        var5['MESSAGE_DELETE'] = var17;
        var5['MESSAGE_DELETE_BULK'] = var17;
        var5['MESSAGE_ACK'] = var16;
        var16 = function handleChannelAck(arg1) {
            _fun0138: for(var _fun0138_ip = 0; ; ) switch(_fun0138_ip) {
case 0:
                var1 = arg1;
                var4 = var1.channelId;
                var5 = var1.messageId;
                var7 = var1.immediate;
                var3 = undefined;
                if(!(var7 === var3)) { _fun0138_ip = 126; continue _fun0138 }
case 49:
                var7 = false;
case 126:
                var2 = var1.force;
                if(!(var2 === var3)) { _fun0138_ip = 130; continue _fun0138 }
case 42:
                var2 = false;
case 130:
                var9 = var1.context;
                var6 = var1.location;
                var3 = _closure1_slot79;
                var1 = var3.get;
                var4 = var1.bind(var3)(var4);
                var3 = var4.ack;
                var1 = {};
                var1['messageId'] = var5;
                var8 = _closure1_slot46;
                var8 = var9 !== var8;
                var1['local'] = var8;
                var1['immediate'] = var7;
                var1['force'] = var2;
                var2 = true;
                var1['isExplicitUserAction'] = var2;
                var1['location'] = var6;
                var1['trackAnalytics'] = var2;
                var1 = var3.bind(var4)(var1);
                var3 = null;
                if(!(var3 != var5)) { _fun0138_ip = 104; continue _fun0138 }
case 232:
                var3 = var4.rebuildChannelState;
                var3 = var3.bind(var4)();
                var1 = true;
case 104:
                return var1;
            }
        };
        var5['CHANNEL_ACK'] = var16;
        var16 = function handleChannelLocalAck(arg1) {
            var1 = arg1;
            var3 = var1.channelId;
            var2 = _closure1_slot79;
            var1 = var2.get;
            var3 = var1.bind(var2)(var3);
            var2 = var3.ack;
            var1 = {'messageId': null, 'local': true, 'immediate': null, 'force': null, 'isExplicitUserAction': true, 'trackAnalytics': false};
            var4 = undefined;
            var1['messageId'] = var4;
            var1['immediate'] = var4;
            var1['force'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['CHANNEL_LOCAL_ACK'] = var16;
        var16 = function handleChannelPinsAck(arg1) {
            var1 = arg1;
            var4 = var1.channelId;
            var3 = var1.timestamp;
            var2 = _closure1_slot79;
            var1 = var2.get;
            var2 = var1.bind(var2)(var4);
            var1 = var2.ackPins;
            var1 = var1.bind(var2)(var3);
            return var1;
        };
        var5['CHANNEL_PINS_ACK'] = var16;
        var16 = function handleChannelPinsUpdate(arg1) {
            _fun0139: for(var _fun0139_ip = 0; ; ) switch(_fun0139_ip) {
case 0:
                var1 = arg1;
                var5 = var1.channelId;
                var4 = var1.lastPinTimestamp;
                var3 = _closure1_slot79;
                var2 = var3.get;
                var3 = var2.bind(var3)(var5);
                var2 = _closure1_slot87;
                var1 = undefined;
                var2 = var2.bind(var1)(var4);
                var1 = var3.lastPinTimestamp;
                var1 = var1 !== var2;
                if(!var1) { _fun0139_ip = 156; continue _fun0139 }
case 8:
                var3['lastPinTimestamp'] = var2;
                var1 = true;
case 156:
                return var1;
            }
        };
        var5['CHANNEL_PINS_UPDATE'] = var16;
        var16 = function handleChannelSelect(arg1) {
            _fun0140: for(var _fun0140_ip = 0; ; ) switch(_fun0140_ip) {
case 0:
                var1 = arg1;
                var4 = var1.channelId;
                var2 = _closure1_slot28;
                var1 = var2.getCurrentSidebarChannelId;
                var2 = var1.bind(var2)(var4);
                var5 = _closure1_slot29;
                var1 = var5.getChannel;
                var7 = var1.bind(var5)(var4);
                var9 = null;
                if(!(var9 != var7)) { _fun0140_ip = 261; continue _fun0140 }
case 6:
                var6 = _closure1_slot79;
                var5 = var6.get;
                var1 = var7.id;
                var5 = var5.bind(var6)(var1);
                var1 = var5.ackMessageId;
                if(!(var9 == var1)) { _fun0140_ip = 179; continue _fun0140 }
case 227:
                var10 = _closure1_slot1;
                var8 = _closure1_slot2;
                var6 = 42;
                var8 = var8[var6];
                var6 = undefined;
                var10 = var10.bind(var6)(var8);
                var8 = var10.fromTimestamp;
                var6 = var5.getAckTimestamp;
                var6 = var6.bind(var5)();
                var1 = var8.bind(var10)(var6);
case 179:
                var5['ackMessageIdAtChannelSelect'] = var1;
                var1 = var5.recordLastViewedTime;
                var1 = var1.bind(var5)();
case 261:
                var5 = _closure1_slot108;
                var1 = _closure1_slot66;
                var8 = undefined;
                var1 = var5.bind(var8)(var1);
                var1 = _closure1_slot67;
                var1 = var5.bind(var8)(var1);
                var6 = _closure1_slot66;
                var5 = false;
                if(!(var6 !== var4)) { _fun0140_ip = 384; continue _fun0140 }
case 157:
                var10 = _closure1_slot109;
                var6 = _closure1_slot66;
                var6 = var10.bind(var8)(var6);
                if(var6) { _fun0140_ip = 41; continue _fun0140 }
case 238:
                var6 = false;
case 41:
                var10 = _closure1_slot109;
                var1 = _closure1_slot67;
                var1 = var10.bind(var8)(var1);
                if(var1) { _fun0140_ip = 26; continue _fun0140 }
case 385:
                var1 = var6;
case 26:
                var5 = var1;
case 384:
                var1 = _closure1_slot66;
                var1 = var1 === var4;
                if(var1) { _fun0140_ip = 203; continue _fun0140 }
case 249:
                var10 = var9 == var7;
                var6 = undefined;
                if(var10) { _fun0140_ip = 386; continue _fun0140 }
case 387:
                var6 = var7.type;
case 386:
                var6 = var9 != var6;
                if(!var6) { _fun0140_ip = 28; continue _fun0140 }
case 388:
                var9 = _closure1_slot52;
                var10 = var9.GUILD_THREADS_ONLY;
                var9 = var10.has;
                var7 = var7.type;
                var6 = var9.bind(var10)(var7);
case 28:
                var1 = var6;
case 203:
                var6 = var5;
                if(!var1) { _fun0140_ip = 330; continue _fun0140 }
case 241:
                var7 = _closure1_slot102;
                var1 = {};
                var9 = _closure1_slot43;
                var9 = var9.CHANNEL;
                var1['section'] = var9;
                var9 = _closure1_slot42;
                var9 = var9.ACK_CHANNEL_SELECT_SAME_CHANNEL;
                var1['object'] = var9;
                var9 = _closure1_slot41;
                var9 = var9.ACK_AUTOMATIC;
                var1['objectType'] = var9;
                var1 = var7.bind(var8)(var1, var4);
                if(var1) { _fun0140_ip = 389; continue _fun0140 }
case 390:
                var1 = var5;
case 389:
                var6 = var1;
case 330:
                var5 = _closure1_slot66;
                var1 = var6;
                if(!(var5 === var4)) { _fun0140_ip = 391; continue _fun0140 }
case 82:
                var7 = _closure1_slot102;
                var5 = {};
                var9 = _closure1_slot43;
                var9 = var9.CHANNEL;
                var5['section'] = var9;
                var9 = _closure1_slot42;
                var9 = var9.ACK_CHANNEL_SELECT_SAME_CHANNEL_SIDEBAR;
                var5['object'] = var9;
                var9 = _closure1_slot41;
                var9 = var9.ACK_AUTOMATIC;
                var5['objectType'] = var9;
                var5 = var7.bind(var8)(var5, var2);
                if(var5) { _fun0140_ip = 392; continue _fun0140 }
case 393:
                var5 = var6;
case 392:
                var1 = var5;
case 391:
                _closure1_slot66 = var4;
                _closure1_slot67 = var2;
                return var1;
            }
        };
        var5['CHANNEL_SELECT'] = var16;
        var16 = function handleOverlayTextChatAckChannel(arg1) {
            _fun0141: for(var _fun0141_ip = 0; ; ) switch(_fun0141_ip) {
case 0:
                var1 = arg1;
                var4 = var1.channelId;
                var1 = _closure1_slot42;
                var6 = var1.ACK_CHANNEL_SELECT_SAME_CHANNEL_DISPATCH;
                var2 = _closure1_slot79;
                var1 = var2.get;
                var2 = var1.bind(var2)(var4);
                var1 = var2.ackMessageId;
                var3 = null;
                if(!(var3 == var1)) { _fun0141_ip = 310; continue _fun0141 }
case 276:
                var8 = _closure1_slot1;
                var7 = _closure1_slot2;
                var3 = 42;
                var7 = var7[var3];
                var3 = undefined;
                var8 = var8.bind(var3)(var7);
                var7 = var8.fromTimestamp;
                var3 = var2.getAckTimestamp;
                var3 = var3.bind(var2)();
                var1 = var7.bind(var8)(var3);
case 310:
                var2['ackMessageIdAtChannelSelect'] = var1;
                var1 = var2.recordLastViewedTime;
                var1 = var1.bind(var2)();
                var1 = _closure1_slot109;
                var3 = undefined;
                var1 = var1.bind(var3)(var4);
                var2 = _closure1_slot102;
                var1 = {};
                var7 = _closure1_slot43;
                var7 = var7.OVERLAY;
                var1['section'] = var7;
                var1['object'] = var6;
                var5 = _closure1_slot41;
                var5 = var5.ACK_AUTOMATIC;
                var1['objectType'] = var5;
                var1 = var2.bind(var3)(var1, var4);
                var1 = true;
                return var1;
            }
        };
        var5['OVERLAY_TEXT_CHAT_ACK_CHANNEL'] = var16;
        var16 = function handleVoiceChannelSelect(arg1) {
            _fun0142: for(var _fun0142_ip = 0; ; ) switch(_fun0142_ip) {
case 0:
                var1 = arg1;
                var4 = var1.channelId;
                var1 = null;
                if(!(var1 != var4)) { _fun0142_ip = 232; continue _fun0142 }
case 36:
                var3 = _closure1_slot79;
                var2 = var3.get;
                var3 = var2.bind(var3)(var4);
                var2 = var3.hasMentions;
                var2 = var2.bind(var3)();
                if(var2) { _fun0142_ip = 232; continue _fun0142 }
case 394:
                var3['oldestUnreadMessageId'] = var1;
                var2 = var3.ack;
                var1 = {'isExplicitUserAction': true, 'trackAnalytics': true};
                var4 = {};
                var6 = _closure1_slot43;
                var6 = var6.CHANNEL;
                var4['section'] = var6;
                var6 = _closure1_slot42;
                var6 = var6.ACK_VOICE_CHANNEL_SELECT;
                var4['object'] = var6;
                var5 = _closure1_slot41;
                var5 = var5.ACK_SEMI_AUTOMATIC;
                var4['objectType'] = var5;
                var1['location'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
case 232:
                var1 = undefined;
                return var1;
            }
        };
        var5['VOICE_CHANNEL_SELECT'] = var16;
        var16 = function handleChannelCreate(arg1) {
            _fun0143: for(var _fun0143_ip = 0; ; ) switch(_fun0143_ip) {
case 0:
                var1 = arg1;
                var2 = var1.channel;
                var5 = _closure1_slot22;
                var3 = var2.type;
                var1 = undefined;
                var3 = var5.bind(var1)(var3);
                if(var3) { _fun0143_ip = 172; continue _fun0143 }
case 7:
                var3 = false;
                return var3;
case 172:
                var6 = _closure1_slot79;
                var5 = var6.get;
                var3 = var2.id;
                var3 = var5.bind(var6)(var3);
                var5 = var2.lastMessageId;
                var3['lastMessageId'] = var5;
                var4 = _closure1_slot87;
                var2 = var2.lastPinTimestamp;
                var2 = var4.bind(var1)(var2);
                var3['lastPinTimestamp'] = var2;
                return var1;
            }
        };
        var5['CHANNEL_CREATE'] = var16;
        var16 = function handleThreadCreate(arg1) {
            _fun0144: for(var _fun0144_ip = 0; ; ) switch(_fun0144_ip) {
case 0:
                var1 = arg1;
                var4 = var1.channel;
                var5 = _closure1_slot25;
                var3 = var5.has;
                var1 = var4.type;
                var1 = var3.bind(var5)(var1);
                if(!var1) { _fun0144_ip = 281; continue _fun0144 }
case 37:
                var5 = _closure1_slot79;
                var3 = var5.get;
                var1 = var4.id;
                var3 = var3.bind(var5)(var1);
                var1 = var4.lastMessageId;
                var3['lastMessageId'] = var1;
                var6 = _closure1_slot87;
                var5 = var4.lastPinTimestamp;
                var1 = undefined;
                var1 = var6.bind(var1)(var5);
                var3['lastPinTimestamp'] = var1;
                var1 = var3.syncThreadSettings;
                var1 = var1.bind(var3)();
                var5 = var4.ownerId;
                var6 = _closure1_slot27;
                var1 = var6.getId;
                var1 = var1.bind(var6)();
                if(!(var5 === var1)) { _fun0144_ip = 281; continue _fun0144 }
case 191:
                var1 = true;
                var3['loadedMessages'] = var1;
case 281:
                var5 = var4.parent_id;
                var3 = _closure1_slot79;
                var1 = var3.get;
                var3 = var1.bind(var3)(var5);
                var1 = var4.id;
                var3['lastMessageId'] = var1;
                var3 = _closure1_slot39;
                var1 = var3.getCurrentUser;
                var7 = var1.bind(var3)();
                var6 = var4.ownerId;
                var1 = null;
                var8 = var1 == var7;
                var1 = undefined;
                var3 = undefined;
                if(var8) { _fun0144_ip = 140; continue _fun0144 }
case 258:
                var3 = var7.id;
case 140:
                if(!(var6 === var3)) { _fun0144_ip = 242; continue _fun0144 }
case 112:
                var7 = _closure1_slot79;
                var6 = var7.get;
                var3 = var4.id;
                var6 = var6.bind(var7)(var3);
                var3 = true;
                var6['_persisted'] = var3;
                var3 = _closure1_slot110;
                var2 = {};
                var2['channelId'] = var5;
                var4 = var4.id;
                var2['messageId'] = var4;
                var4 = false;
                var2['manual'] = var4;
                var2 = var3.bind(var1)(var2);
case 242:
                return var1;
            }
        };
        var5['THREAD_CREATE'] = var16;
        var16 = function handleThreadUpdate(arg1) {
            _fun0145: for(var _fun0145_ip = 0; ; ) switch(_fun0145_ip) {
case 0:
                var1 = arg1;
                var2 = var1.channel;
                var5 = _closure1_slot25;
                var4 = var5.has;
                var1 = var2.type;
                var1 = var4.bind(var5)(var1);
                var4 = !var1;
                var1 = !var4;
                if(var4) { _fun0145_ip = 313; continue _fun0145 }
case 130:
                var4 = _closure1_slot79;
                var3 = var4.get;
                var2 = var2.id;
                var3 = var3.bind(var4)(var2);
                var2 = var3.syncThreadSettings;
                var1 = var2.bind(var3)();
case 313:
                return var1;
            }
        };
        var5['THREAD_UPDATE'] = var16;
        var16 = function handleThreadListSync(arg1) {
            var1 = arg1;
            var3 = var1.threads;
            var2 = var3.forEach;
            var1 = function(arg1) {
                _fun0146: for(var _fun0146_ip = 0; ; ) switch(_fun0146_ip) {
case 0:
                    var1 = arg1;
                    var5 = _closure1_slot25;
                    var4 = var5.has;
                    var2 = var1.type;
                    var2 = var4.bind(var5)(var2);
                    if(!var2) { _fun0146_ip = 62; continue _fun0146 }
case 109:
                    var5 = _closure1_slot79;
                    var4 = var5.get;
                    var2 = var1.id;
                    var4 = var4.bind(var5)(var2);
                    var2 = var1.lastMessageId;
                    var4['lastMessageId'] = var2;
                    var6 = _closure1_slot87;
                    var2 = var1.lastPinTimestamp;
                    var5 = undefined;
                    var2 = var6.bind(var5)(var2);
                    var4['lastPinTimestamp'] = var2;
                    var2 = true;
                    var4['_isThread'] = var2;
                    var4['_isActiveThread'] = var2;
                    var7 = _closure1_slot20;
                    var6 = var7.hasJoined;
                    var2 = var1.id;
                    var2 = var6.bind(var7)(var2);
                    var4['_isJoinedThread'] = var2;
                    var2 = var1.isForumPost;
                    var2 = var2.bind(var1)();
                    if(!var2) { _fun0146_ip = 62; continue _fun0146 }
case 117:
                    var6 = _closure1_slot79;
                    var4 = var6.get;
                    var2 = var1.parent_id;
                    var2 = var4.bind(var6)(var2);
                    var4 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var3 = 42;
                    var3 = var6[var3];
                    var6 = var4.bind(var5)(var3);
                    var5 = var6.compare;
                    var4 = var2.lastMessageId;
                    var3 = var1.id;
                    var4 = var5.bind(var6)(var4, var3);
                    var3 = 0;
                    if(!(var4 < var3)) { _fun0146_ip = 62; continue _fun0146 }
case 200:
                    var1 = var1.id;
                    var2['lastMessageId'] = var1;
case 62:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var5['THREAD_LIST_SYNC'] = var16;
        var5['LOAD_THREADS_SUCCESS'] = var15;
        var5['LOAD_ARCHIVED_THREADS_SUCCESS'] = var15;
        var5['SEARCH_MESSAGES_SUCCESS'] = var14;
        var5['MOD_VIEW_SEARCH_MESSAGES_SUCCESS'] = var14;
        var14 = function handleThreadMemberUpdate(arg1) {
            var1 = arg1;
            var3 = var1.id;
            var2 = _closure1_slot79;
            var1 = var2.get;
            var2 = var1.bind(var2)(var3);
            var1 = var2.syncThreadSettings;
            var1 = var1.bind(var2)();
            return var1;
        };
        var5['THREAD_MEMBER_UPDATE'] = var14;
        var14 = function handleThreadMembersUpdate(arg1) {
            _fun0147: for(var _fun0147_ip = 0; ; ) switch(_fun0147_ip) {
case 0:
                var2 = arg1;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 64;
                var4 = var4[var1];
                var1 = undefined;
                var4 = var5.bind(var1)(var4);
                var1 = var4.doesThreadMembersActionAffectMe;
                var1 = var1.bind(var4)(var2);
                if(!var1) { _fun0147_ip = 53; continue _fun0147 }
case 52:
                var4 = _closure1_slot79;
                var3 = var4.get;
                var2 = var2.id;
                var3 = var3.bind(var4)(var2);
                var2 = var3.syncThreadSettings;
                var1 = var2.bind(var3)();
case 53:
                return var1;
            }
        };
        var5['THREAD_MEMBERS_UPDATE'] = var14;
        var5['CHANNEL_DELETE'] = var13;
        var5['THREAD_DELETE'] = var13;
        var13 = function handleWindowFocus(arg1) {
            var2 = arg1;
            var _closure2_slot0 = var2;
            var2 = false;
            var _closure2_slot1 = var2;
            var4 = _closure1_slot73;
            var3 = var4.forEachChannel;
            var2 = function(arg1, arg2) {
                _fun0148: for(var _fun0148_ip = 0; ; ) switch(_fun0148_ip) {
case 0:
                    var6 = arg1;
                    var4 = arg2;
                    var3 = var4.has;
                    var1 = _closure2_slot0;
                    var1 = var1.windowId;
                    var1 = var3.bind(var4)(var1);
                    if(!var1) { _fun0148_ip = 137; continue _fun0148 }
case 64:
                    var1 = _closure2_slot0;
                    var4 = var1.focused;
                    var1 = null;
                    var3 = var1 == var6;
                    var1 = false;
                    if(var3) { _fun0148_ip = 129; continue _fun0148 }
case 32:
                    var7 = _closure1_slot79;
                    var5 = var7.get;
                    var5 = var5.bind(var7)(var6);
                    if(var4) { _fun0148_ip = 13; continue _fun0148 }
case 115:
                    var7 = var5.hasUnread;
                    var4 = var7.bind(var5)();
case 13:
                    if(var4) { _fun0148_ip = 395; continue _fun0148 }
case 178:
                    var4 = true;
                    var5['oldestUnreadMessageIdStale'] = var4;
case 395:
                    var5 = _closure1_slot102;
                    var4 = {};
                    var7 = _closure1_slot43;
                    var7 = var7.CHANNEL;
                    var4['section'] = var7;
                    var7 = _closure1_slot42;
                    var7 = var7.ACK_WINDOW_FOCUS;
                    var4['object'] = var7;
                    var3 = _closure1_slot41;
                    var3 = var3.ACK_AUTOMATIC;
                    var4['objectType'] = var3;
                    var3 = undefined;
                    var1 = var5.bind(var3)(var4, var6);
case 129:
                    if(var1) { _fun0148_ip = 18; continue _fun0148 }
case 396:
                    var1 = _closure2_slot1;
case 18:
                    _closure2_slot1 = var1;
case 137:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var2);
            var1 = _closure2_slot1;
            return var1;
        };
        var5['WINDOW_FOCUS'] = var13;
        var13 = function handleScroll(arg1) {
            var1 = arg1;
            var5 = var1.channelId;
            var4 = var1.timestamp;
            var3 = _closure1_slot102;
            var2 = {};
            var6 = _closure1_slot43;
            var6 = var6.CHANNEL;
            var2['section'] = var6;
            var6 = _closure1_slot42;
            var6 = var6.ACK_CHANNEL_SCROLL;
            var2['object'] = var6;
            var1 = _closure1_slot41;
            var1 = var1.ACK_AUTOMATIC;
            var2['objectType'] = var1;
            var1 = undefined;
            var1 = var3.bind(var1)(var2, var5, var4);
            return var1;
        };
        var5['UPDATE_CHANNEL_DIMENSIONS'] = var13;
        var13 = function handleCurrentUserUpdate() {
            var1 = null;
            _closure1_slot68 = var1;
            var1 = undefined;
            return var1;
        };
        var5['CURRENT_USER_UPDATE'] = var13;
        var13 = function handleBulkAck(arg1) {
            var2 = arg1;
            var6 = var2.channels;
            var5 = var2.context;
            var4 = var2.onFinished;
            var3 = var6.filter;
            var2 = function(arg1) {
                _fun0149: for(var _fun0149_ip = 0; ; ) switch(_fun0149_ip) {
case 0:
                    var2 = arg1;
                    var3 = var2.messageId;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0149_ip = 276; continue _fun0149 }
case 219:
                    var5 = _closure1_slot81;
                    var4 = var5.hasUnreadOrMentions;
                    var3 = var2.channelId;
                    var2 = var2.readStateType;
                    var1 = var4.bind(var5)(var3, var2);
case 276:
                    return var1;
                }
            };
            var3 = var3.bind(var6)(var2);
            var2 = function _handleBulkAck(arg1, arg2, arg3) {
                _fun0150: for(var _fun0150_ip = 0; ; ) switch(_fun0150_ip) {
case 0:
                    var6 = arg1;
                    var3 = var6.forEach;
                    var1 = function(arg1) {
                        var2 = arg1;
                        var5 = var2.channelId;
                        var1 = var2.messageId;
                        var4 = var2.readStateType;
                        var3 = _closure1_slot79;
                        var2 = var3.get;
                        var4 = var2.bind(var3)(var5, var4);
                        var3 = var4.ack;
                        var2 = {'messageId': null, 'local': true, 'immediate': null, 'force': null, 'isExplicitUserAction': true, 'trackAnalytics': false};
                        var2['messageId'] = var1;
                        var1 = undefined;
                        var2['immediate'] = var1;
                        var2['force'] = var1;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var1 = var3.bind(var6)(var1);
                    var4 = _closure1_slot46;
                    var3 = arg2;
                    if(!(var3 === var4)) { _fun0150_ip = 55; continue _fun0150 }
case 172:
                    var4 = _closure1_slot70;
                    var3 = var4.push;
                    var5 = var6.map;
                    var2 = function(arg1) {
                        var2 = arg1;
                        var1 = {};
                        var3 = var2.channelId;
                        var1['channel_id'] = var3;
                        var3 = var2.messageId;
                        var1['message_id'] = var3;
                        var2 = var2.readStateType;
                        var1['read_state_type'] = var2;
                        return var1;
                    };
                    var8 = var5.bind(var6)(var2);
                    var2 = new Array(0);
                    var7 = 0;
                    var9 = var2;
                    var5 = arraySpread(var9, var8, var7);
                    var9 = var3;
                    var8 = var2;
                    var7 = var4;
                    var2 = apply(var9, var8, var7);
                    var2 = _closure1_slot71;
                    if(var2) { _fun0150_ip = 55; continue _fun0150 }
case 134:
                    var3 = _closure1_slot90;
                    var2 = undefined;
                    var1 = arg3;
                    var1 = var3.bind(var2)(var1);
case 55:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = undefined;
            var2 = var2.bind(var1)(var3, var5, var4);
            return var1;
        };
        var5['BULK_ACK'] = var13;
        var13 = function handleEnableAutomaticAck(arg1) {
            var1 = arg1;
            var2 = var1.channelId;
            var1 = var1.windowId;
            var1 = false;
            return var1;
        };
        var5['ENABLE_AUTOMATIC_ACK'] = var13;
        var13 = function handleDisableAutomaticAck(arg1) {
            var1 = arg1;
            var2 = var1.channelId;
            var1 = var1.windowId;
            var1 = false;
            return var1;
        };
        var5['DISABLE_AUTOMATIC_ACK'] = var13;
        var5['GUILD_FEATURE_ACK'] = var12;
        var12 = function handleGuildScheduledEventCreate(arg1) {
            _fun0151: for(var _fun0151_ip = 0; ; ) switch(_fun0151_ip) {
case 0:
                var1 = arg1;
                var4 = var1.guildScheduledEvent;
                var6 = var4.guild_id;
                var7 = _closure1_slot79;
                var3 = var7.get;
                var2 = var4.guild_id;
                var1 = _closure1_slot61;
                var1 = var1.GUILD_EVENT;
                var3 = var3.bind(var7)(var2, var1);
                var1 = var4.id;
                var3['lastMessageId'] = var1;
                var2 = _closure1_slot106;
                var1 = undefined;
                var2 = var2.bind(var1)(var4);
                if(var2) { _fun0151_ip = 284; continue _fun0151 }
case 5:
                var7 = _closure1_slot38;
                var2 = var7.isMuteScheduledEventsEnabled;
                var2 = var2.bind(var7)(var6);
                if(var2) { _fun0151_ip = 236; continue _fun0151 }
case 310:
                var2 = var3.mentionCount;
                var2 = var2 + 1;
                var3['mentionCount'] = var2;
                _fun0151_ip = 236; continue _fun0151;
case 284:
                var3 = _closure1_slot111;
                var2 = {};
                var7 = 'GUILD_FEATURE_ACK';
                var2['type'] = var7;
                var2['id'] = var6;
                var5 = _closure1_slot61;
                var5 = var5.GUILD_EVENT;
                var2['ackType'] = var5;
                var4 = var4.id;
                var2['ackedId'] = var4;
                var4 = false;
                var2['local'] = var4;
                var2 = var3.bind(var1)(var2);
case 236:
                return var1;
            }
        };
        var5['GUILD_SCHEDULED_EVENT_CREATE'] = var12;
        var12 = function handleGuildScheduledEventUpdate(arg1) {
            _fun0152: for(var _fun0152_ip = 0; ; ) switch(_fun0152_ip) {
case 0:
                var1 = arg1;
                var3 = var1.guildScheduledEvent;
                var6 = var3.guild_id;
                var2 = _closure1_slot106;
                var1 = undefined;
                var2 = var2.bind(var1)(var3);
                var1 = !var2;
                if(var2) { _fun0152_ip = 309; continue _fun0152 }
case 172:
                var2 = _closure1_slot60;
                var5 = var2.CANCELED;
                var7 = new Array(2);
                var7[0] = var5;
                var2 = var2.COMPLETED;
                var7[1] = var2;
                var5 = var7.includes;
                var2 = var3.status;
                var2 = var5.bind(var7)(var2);
                var5 = !var2;
                var2 = !var5;
                if(var5) { _fun0152_ip = 69; continue _fun0152 }
case 13:
                var7 = _closure1_slot79;
                var5 = var7.get;
                var4 = _closure1_slot61;
                var4 = var4.GUILD_EVENT;
                var5 = var5.bind(var7)(var6, var4);
                var4 = var5.handleGuildEventRemoval;
                var3 = var3.id;
                var3 = var4.bind(var5)(var6, var3);
                var2 = undefined;
case 69:
                var1 = var2;
case 309:
                return var1;
            }
        };
        var5['GUILD_SCHEDULED_EVENT_UPDATE'] = var12;
        var12 = function handleGuildScheduledEventDelete(arg1) {
            _fun0153: for(var _fun0153_ip = 0; ; ) switch(_fun0153_ip) {
case 0:
                var1 = arg1;
                var2 = var1.guildScheduledEvent;
                var5 = var2.guild_id;
                var4 = _closure1_slot106;
                var1 = undefined;
                var4 = var4.bind(var1)(var2);
                if(var4) { _fun0153_ip = 125; continue _fun0153 }
case 109:
                var7 = _closure1_slot79;
                var6 = var7.get;
                var4 = var2.guild_id;
                var3 = _closure1_slot61;
                var3 = var3.GUILD_EVENT;
                var4 = var6.bind(var7)(var4, var3);
                var3 = var4.handleGuildEventRemoval;
                var2 = var2.id;
                var2 = var3.bind(var4)(var5, var2);
                return var1;
case 125:
                var1 = false;
                return var1;
            }
        };
        var5['GUILD_SCHEDULED_EVENT_DELETE'] = var12;
        var12 = function handleGuildDelete(arg1) {
            var1 = arg1;
            var2 = var1.guild;
            var4 = _closure1_slot79;
            var3 = var4.clear;
            var2 = var2.id;
            var1 = _closure1_slot61;
            var1 = var1.GUILD_EVENT;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var5['GUILD_DELETE'] = var12;
        var12 = function handleGuildUpdate(arg1) {
            _fun0154: for(var _fun0154_ip = 0; ; ) switch(_fun0154_ip) {
case 0:
                var1 = arg1;
                var3 = var1.guild;
                var2 = var3.latest_onboarding_question_id;
                var1 = null;
                if(!(var1 != var2)) { _fun0154_ip = 3; continue _fun0154 }
case 33:
                var6 = _closure1_slot79;
                var5 = var6.get;
                var4 = var3.id;
                var1 = _closure1_slot61;
                var1 = var1.GUILD_ONBOARDING_QUESTION;
                var1 = var5.bind(var6)(var4, var1);
                var3 = var3.id;
                var1['_guildId'] = var3;
                var1['lastMessageId'] = var2;
case 3:
                var1 = undefined;
                return var1;
            }
        };
        var5['GUILD_UPDATE'] = var12;
        var12 = function handleResortThreads(arg1) {
            var1 = arg1;
            var4 = var1.channelId;
            var3 = _closure1_slot102;
            var2 = {};
            var5 = _closure1_slot43;
            var5 = var5.CHANNEL;
            var2['section'] = var5;
            var5 = _closure1_slot42;
            var5 = var5.ACK_RESORT_THREADS;
            var2['object'] = var5;
            var1 = _closure1_slot41;
            var1 = var1.ACK_AUTOMATIC;
            var2['objectType'] = var1;
            var1 = undefined;
            var1 = var3.bind(var1)(var2, var4);
            return var1;
        };
        var5['RESORT_THREADS'] = var12;
        var12 = function handleUpdateChatOpen(arg1) {
            _fun0155: for(var _fun0155_ip = 0; ; ) switch(_fun0155_ip) {
case 0:
                var1 = arg1;
                var4 = var1.channelId;
                var1 = var1.chatOpen;
                if(var1) { _fun0155_ip = 108; continue _fun0155 }
case 219:
                var1 = undefined;
                return var1;
case 108:
                var3 = _closure1_slot102;
                var2 = {};
                var5 = _closure1_slot43;
                var5 = var5.CHANNEL;
                var2['section'] = var5;
                var5 = _closure1_slot42;
                var5 = var5.ACK_CHANNEL_RTC_UPDATE_CHAT_OPEN;
                var2['object'] = var5;
                var1 = _closure1_slot41;
                var1 = var1.ACK_AUTOMATIC;
                var2['objectType'] = var1;
                var1 = undefined;
                var1 = var3.bind(var1)(var2, var4);
                return var1;
            }
        };
        var5['CHANNEL_RTC_UPDATE_CHAT_OPEN'] = var12;
        var5['DECAY_READ_STATES'] = var9;
        var9 = function handleNotificationCenterItemCreate(arg1) {
            _fun0156: for(var _fun0156_ip = 0; ; ) switch(_fun0156_ip) {
case 0:
                var1 = arg1;
                var2 = var1.item;
                var4 = _closure1_slot39;
                var1 = var4.getCurrentUser;
                var5 = var1.bind(var4)();
                var4 = null;
                var7 = var4 == var5;
                var1 = undefined;
                var6 = undefined;
                if(var7) { _fun0156_ip = 52; continue _fun0156 }
case 42:
                var6 = var5.id;
case 52:
                if(!(var4 != var6)) { _fun0156_ip = 234; continue _fun0156 }
case 6:
                var7 = _closure1_slot79;
                var5 = var7.get;
                var4 = _closure1_slot61;
                var4 = var4.NOTIFICATION_CENTER;
                var5 = var5.bind(var7)(var6, var4);
                var4 = var2.id;
                var5['lastMessageId'] = var4;
                var4 = _closure1_slot18;
                var4 = var4.tabFocused;
                if(var4) { _fun0156_ip = 307; continue _fun0156 }
case 164:
                var4 = var5.mentionCount;
                var4 = var4 + 1;
                var5['mentionCount'] = var4;
                _fun0156_ip = 256; continue _fun0156;
case 307:
                var5 = _closure1_slot112;
                var3 = _closure1_slot61;
                var10 = var3.NOTIFICATION_CENTER;
                var9 = var2.id;
                var8 = false;
                var12 = undefined;
                var11 = var6;
                var2 = var12[var5](var11, var10, var9, var8, var7);
case 256:
                return var1;
case 234:
                var1 = false;
                return var1;
            }
        };
        var5['NOTIFICATION_CENTER_ITEM_CREATE'] = var9;
        var9 = function handleRelationshipAdd(arg1) {
            _fun0157: for(var _fun0157_ip = 0; ; ) switch(_fun0157_ip) {
case 0:
                var7 = arg1;
                var3 = _closure1_slot39;
                var2 = var3.getCurrentUser;
                var2 = var2.bind(var3)();
                var5 = null;
                if(!(var5 != var2)) { _fun0157_ip = 397; continue _fun0157 }
case 38:
                var3 = var7.relationship;
                var3 = var3.since;
                if(!(var5 != var3)) { _fun0157_ip = 398; continue _fun0157 }
case 276:
                var3 = var7.relationship;
                var4 = var3.type;
                var3 = _closure1_slot51;
                var3 = var3.PENDING_INCOMING;
                if(!(var4 !== var3)) { _fun0157_ip = 304; continue _fun0157 }
case 5:
                var3 = var7.relationship;
                var4 = var3.type;
                var3 = _closure1_slot51;
                var3 = var3.FRIEND;
                if(!(var4 === var3)) { _fun0157_ip = 399; continue _fun0157 }
case 304:
                var8 = _closure1_slot79;
                var6 = var8.get;
                var4 = var2.id;
                var3 = _closure1_slot61;
                var3 = var3.NOTIFICATION_CENTER;
                var4 = var6.bind(var8)(var4, var3);
                var3 = var7.relationship;
                var6 = var3.type;
                var3 = _closure1_slot51;
                var3 = var3.FRIEND;
                var6 = var6 === var3;
                var3 = global;
                var9 = var3.Date;
                if(var6) { _fun0157_ip = 199; continue _fun0157 }
case 187:
                var7 = var7.relationship;
                var13 = var7.since;
                var8 = var9.prototype;
                var8 = Object.create(var8, {constructor: {value: var9}});
                var14 = var8;
                var7 = new var14[var9](var13, var12);
                var8 = var7 instanceof Object ? var7 : var8;
                var7 = var8.getTime;
                var8 = var7.bind(var8)();
                _fun0157_ip = 327; continue _fun0157;
case 199:
                var7 = var3.Date;
                var3 = var7.now;
                var13 = var3.bind(var7)();
                var7 = var9.prototype;
                var7 = Object.create(var7, {constructor: {value: var9}});
                var14 = var7;
                var3 = new var14[var9](var13, var12);
                var7 = var3 instanceof Object ? var3 : var7;
                var3 = var7.getTime;
                var8 = var3.bind(var7)();
case 327:
                var3 = var4.ackMessageId;
                var5 = var5 != var3;
                var3 = 0;
                if(!var5) { _fun0157_ip = 272; continue _fun0157 }
case 16:
                var9 = _closure1_slot1;
                var7 = _closure1_slot2;
                var5 = 42;
                var7 = var7[var5];
                var5 = undefined;
                var9 = var9.bind(var5)(var7);
                var7 = var9.extractTimestamp;
                var5 = var4.ackMessageId;
                var3 = var7.bind(var9)(var5);
case 272:
                if(!(var3 < var8)) { _fun0157_ip = 400; continue _fun0157 }
case 245:
                var7 = _closure1_slot1;
                var5 = _closure1_slot2;
                var3 = 42;
                var3 = var5[var3];
                var5 = undefined;
                var7 = var7.bind(var5)(var3);
                var3 = var7.fromTimestamp;
                var3 = var3.bind(var7)(var8);
                var4['lastMessageId'] = var3;
                var3 = _closure1_slot18;
                var3 = var3.tabFocused;
                if(var3) { _fun0157_ip = 401; continue _fun0157 }
case 402:
                var3 = var4.mentionCount;
                if(var6) { _fun0157_ip = 403; continue _fun0157 }
case 299:
                var6 = var3 + 1;
                var4['mentionCount'] = var6;
                _fun0157_ip = 400; continue _fun0157;
case 403:
                var3 = var3 - 1;
                var4['mentionCount'] = var3;
                _fun0157_ip = 400; continue _fun0157;
case 401:
                var4 = _closure1_slot112;
                var13 = var2.id;
                var1 = _closure1_slot61;
                var12 = var1.NOTIFICATION_CENTER;
                var10 = false;
                var14 = undefined;
                var11 = undefined;
                var1 = var14[var4](var13, var12, var11, var10, var9);
case 400:
                var1 = undefined;
                return var1;
case 399:
                var1 = false;
                return var1;
case 398:
                var1 = false;
                return var1;
case 397:
                var1 = false;
                return var1;
            }
        };
        var5['RELATIONSHIP_ADD'] = var9;
        var9 = function handleRelationshipRemove(arg1) {
            _fun0158: for(var _fun0158_ip = 0; ; ) switch(_fun0158_ip) {
case 0:
                var3 = arg1;
                var2 = _closure1_slot39;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                var5 = null;
                if(!(var5 != var1)) { _fun0158_ip = 404; continue _fun0158 }
case 38:
                var2 = var3.relationship;
                var2 = var2.since;
                if(!(var5 != var2)) { _fun0158_ip = 242; continue _fun0158 }
case 276:
                var2 = var3.relationship;
                var4 = var2.type;
                var2 = _closure1_slot51;
                var2 = var2.PENDING_INCOMING;
                if(!(var4 === var2)) { _fun0158_ip = 327; continue _fun0158 }
case 227:
                var7 = _closure1_slot79;
                var4 = var7.get;
                var2 = var1.id;
                var1 = _closure1_slot61;
                var1 = var1.NOTIFICATION_CENTER;
                var2 = var4.bind(var7)(var2, var1);
                var1 = global;
                var7 = var1.Date;
                var3 = var3.relationship;
                var10 = var3.since;
                var4 = var7.prototype;
                var4 = Object.create(var4, {constructor: {value: var7}});
                var11 = var4;
                var3 = new var11[var7](var10, var9);
                var4 = var3 instanceof Object ? var3 : var4;
                var3 = var4.getTime;
                var4 = var3.bind(var4)();
                var3 = var2.ackMessageId;
                var7 = var5 != var3;
                var5 = 0;
                var3 = 0;
                if(!var7) { _fun0158_ip = 405; continue _fun0158 }
case 406:
                var8 = _closure1_slot1;
                var7 = _closure1_slot2;
                var6 = 42;
                var7 = var7[var6];
                var6 = undefined;
                var8 = var8.bind(var6)(var7);
                var7 = var8.extractTimestamp;
                var6 = var2.ackMessageId;
                var3 = var7.bind(var8)(var6);
case 405:
                if(!(var3 <= var4)) { _fun0158_ip = 121; continue _fun0158 }
case 195:
                var4 = var1.Math;
                var3 = var4.max;
                var6 = var2.mentionCount;
                var1 = 1;
                var1 = var6 - var1;
                var1 = var3.bind(var4)(var5, var1);
                var2['mentionCount'] = var1;
case 121:
                var1 = undefined;
                return var1;
case 327:
                var1 = false;
                return var1;
case 242:
                var1 = false;
                return var1;
case 404:
                var1 = false;
                return var1;
            }
        };
        var5['RELATIONSHIP_REMOVE'] = var9;
        var9 = function handleNotificationCenterItemAck(arg1) {
            _fun0159: for(var _fun0159_ip = 0; ; ) switch(_fun0159_ip) {
case 0:
                var1 = arg1;
                var4 = var1.ids;
                var3 = var1.optimistic;
                var1 = undefined;
                var _closure2_slot0 = var1;
                if(var3) { _fun0159_ip = 105; continue _fun0159 }
case 63:
                var5 = _closure1_slot18;
                var5 = var5.active;
                if(var5) { _fun0159_ip = 105; continue _fun0159 }
case 52:
                var6 = _closure1_slot39;
                var5 = var6.getCurrentUser;
                var6 = var5.bind(var6)();
                var5 = null;
                var8 = var5 == var6;
                var7 = undefined;
                if(var8) { _fun0159_ip = 53; continue _fun0159 }
case 190:
                var7 = var6.id;
case 53:
                if(!(var5 != var7)) { _fun0159_ip = 191; continue _fun0159 }
case 227:
                var6 = _closure1_slot79;
                var5 = var6.get;
                var3 = _closure1_slot61;
                var3 = var3.NOTIFICATION_CENTER;
                var3 = var5.bind(var6)(var7, var3);
                _closure2_slot0 = var3;
                var3 = var4.forEach;
                var2 = function(arg1) {
                    _fun0160: for(var _fun0160_ip = 0; ; ) switch(_fun0160_ip) {
case 0:
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 42;
                        var2 = var2[var1];
                        var1 = undefined;
                        var6 = var3.bind(var1)(var2);
                        var5 = var6.compare;
                        var3 = _closure2_slot0;
                        var4 = var3.ackMessageId;
                        var3 = arg1;
                        var3 = var5.bind(var6)(var4, var3);
                        var6 = 0;
                        if(!(var3 < var6)) { _fun0160_ip = 55; continue _fun0160 }
case 180:
                        var3 = _closure2_slot0;
                        var4 = global;
                        var5 = var4.Math;
                        var4 = var5.max;
                        var2 = _closure2_slot0;
                        var7 = var2.mentionCount;
                        var2 = 1;
                        var2 = var7 - var2;
                        var2 = var4.bind(var5)(var2, var6);
                        var3['mentionCount'] = var2;
case 55:
                        return var1;
                    }
                };
                var2 = var3.bind(var4)(var2);
                return var1;
case 191:
                var1 = false;
                return var1;
case 105:
                var1 = false;
                return var1;
            }
        };
        var5['NOTIFICATION_CENTER_ITEMS_ACK'] = var9;
        var9 = function handleUserNonChannelAck(arg1) {
            _fun0161: for(var _fun0161_ip = 0; ; ) switch(_fun0161_ip) {
case 0:
                var1 = arg1;
                var7 = var1.ackType;
                var6 = var1.ackedId;
                var5 = var1.local;
                var3 = _closure1_slot39;
                var1 = var3.getCurrentUser;
                var8 = var1.bind(var3)();
                var1 = null;
                var9 = var1 == var8;
                var3 = undefined;
                if(var9) { _fun0161_ip = 131; continue _fun0161 }
case 132:
                var3 = var8.id;
case 131:
                var1 = var1 != var3;
                if(!var1) { _fun0161_ip = 221; continue _fun0161 }
case 186:
                var2 = _closure1_slot112;
                var14 = undefined;
                var13 = var3;
                var12 = var7;
                var11 = var6;
                var10 = var5;
                var1 = var14[var2](var13, var12, var11, var10, var9);
case 221:
                return var1;
            }
        };
        var5['USER_NON_CHANNEL_ACK'] = var9;
        var9 = function handlePassiveUpdateV2(arg1) {
            _fun0162: for(var _fun0162_ip = 0; ; ) switch(_fun0162_ip) {
case 0:
                var2 = _closure1_slot83;
                var1 = arg1;
                var1 = var1.channels;
                var7 = undefined;
                var6 = var2.bind(var7)(var1);
                var3 = var6.bind(var7)();
                var2 = var3.done;
                var4 = var3;
                var3 = false;
                var1 = false;
                if(var2) { _fun0162_ip = 188; continue _fun0162 }
case 52:
                var10 = var4.value;
                var11 = _closure1_slot79;
                var9 = var11.get;
                var2 = var10.id;
                var9 = var9.bind(var11)(var2);
                var11 = _closure1_slot87;
                var2 = var10.lastPinTimestamp;
                var2 = var11.bind(var7)(var2);
                var12 = var9.lastMessageId;
                var11 = var10.lastMessageId;
                var11 = var12 === var11;
                if(!var11) { _fun0162_ip = 17; continue _fun0162 }
case 304:
                var12 = var9.lastPinTimestamp;
                var11 = var12 === var2;
case 17:
                if(var11) { _fun0162_ip = 309; continue _fun0162 }
case 278:
                var10 = var10.lastMessageId;
                var9['lastMessageId'] = var10;
                var9['lastPinTimestamp'] = var2;
                var3 = true;
case 309:
                var10 = var6.bind(var7)();
                var2 = var10.done;
                var4 = var10;
                var1 = var3;
                if(!var2) { _fun0162_ip = 52; continue _fun0162 }
case 188:
                return var1;
            }
        };
        var5['PASSIVE_UPDATE_V2'] = var9;
        var9 = function handleClearOldestUnreadMessage(arg1) {
            var1 = arg1;
            var3 = var1.channelId;
            var2 = _closure1_slot109;
            var1 = undefined;
            var1 = var2.bind(var1)(var3);
            return var1;
        };
        var5['CLEAR_OLDEST_UNREAD_MESSAGE'] = var9;
        var9 = function handleTryAck(arg1) {
            var1 = arg1;
            var4 = var1.channelId;
            var3 = var1.location;
            var2 = _closure1_slot102;
            var1 = undefined;
            var1 = var2.bind(var1)(var3, var4);
            return var1;
        };
        var5['TRY_ACK'] = var9;
        var9 = function handleMessageRequestAck(arg1) {
            _fun0163: for(var _fun0163_ip = 0; ; ) switch(_fun0163_ip) {
case 0:
                var1 = arg1;
                var5 = var1.ackedId;
                var3 = _closure1_slot39;
                var1 = var3.getCurrentUser;
                var4 = var1.bind(var3)();
                var3 = null;
                var7 = var3 == var4;
                var1 = undefined;
                var6 = undefined;
                if(var7) { _fun0163_ip = 128; continue _fun0163 }
case 65:
                var6 = var4.id;
case 128:
                if(!(var3 != var6)) { _fun0163_ip = 105; continue _fun0163 }
case 276:
                var4 = _closure1_slot79;
                var3 = var4.get;
                var2 = _closure1_slot61;
                var2 = var2.MESSAGE_REQUESTS;
                var4 = var3.bind(var4)(var6, var2);
                var2 = var4.ackMessageId;
                if(!(var5 !== var2)) { _fun0163_ip = 191; continue _fun0163 }
case 221:
                var4['ackMessageId'] = var5;
                var3 = var4.ack;
                var2 = {'messageId': null, 'isExplicitUserAction': true, 'trackAnalytics': false};
                var2['messageId'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
case 191:
                var1 = false;
                return var1;
case 105:
                var1 = false;
                return var1;
            }
        };
        var5['MESSAGE_REQUEST_ACK'] = var9;
        var9 = function handleMessageRequestClearAck() {
            _fun0164: for(var _fun0164_ip = 0; ; ) switch(_fun0164_ip) {
case 0:
                var3 = _closure1_slot39;
                var1 = var3.getCurrentUser;
                var3 = var1.bind(var3)();
                var4 = null;
                var5 = var4 == var3;
                var1 = undefined;
                var6 = undefined;
                if(var5) { _fun0164_ip = 172; continue _fun0164 }
case 113:
                var6 = var3.id;
case 172:
                if(!(var4 != var6)) { _fun0164_ip = 280; continue _fun0164 }
case 65:
                var5 = _closure1_slot79;
                var3 = var5.get;
                var2 = _closure1_slot61;
                var2 = var2.MESSAGE_REQUESTS;
                var2 = var3.bind(var5)(var6, var2);
                var3 = var2.ackMessageId;
                if(!(var4 != var3)) { _fun0164_ip = 230; continue _fun0164 }
case 277:
                var2['ackMessageId'] = var1;
                return var1;
case 230:
                var1 = false;
                return var1;
case 280:
                var1 = false;
                return var1;
            }
        };
        var5['MESSAGE_REQUEST_CLEAR_ACK'] = var9;
        var9 = function handleAppStateUpdate(arg1) {
            _fun0165: for(var _fun0165_ip = 0; ; ) switch(_fun0165_ip) {
case 0:
                var1 = arg1;
                var3 = var1.state;
                var1 = _closure1_slot55;
                var1 = var1.ACTIVE;
                var1 = var3 === var1;
                if(!var1) { _fun0165_ip = 222; continue _fun0165 }
case 38:
                var5 = _closure1_slot102;
                var4 = {};
                var3 = _closure1_slot43;
                var3 = var3.CHANNEL;
                var4['section'] = var3;
                var3 = _closure1_slot42;
                var3 = var3.ACK_APP_FOREGROUND;
                var4['object'] = var3;
                var3 = _closure1_slot41;
                var3 = var3.ACK_AUTOMATIC;
                var4['objectType'] = var3;
                var3 = _closure1_slot37;
                var2 = var3.getChannelId;
                var3 = var2.bind(var3)();
                var2 = undefined;
                var1 = var5.bind(var2)(var4, var3);
case 222:
                return var1;
            }
        };
        var5['APP_STATE_UPDATE'] = var9;
        var9 = var11.prototype;
        var9 = Object.create(var9, {constructor: {value: var11}});
        var30 = var9;
        var28 = var5;
        var5 = new var30[var11](var29, var28, var27);
        var5 = var5 instanceof Object ? var5 : var9;
        var _closure1_slot81 = var5;
        var6 = 69;
        var6 = var8[var6];
        var8 = var7.bind(var1)(var6);
        var7 = var8.fileFinishedImporting;
        var6 = 'stores/ReadStateStore.tsx';
        var6 = var7.bind(var8)(var6);
        var3['default'] = var5;
        var3['shouldBadgeMessage'] = var4;
        var3['ReadState'] = var2;
        return var1;
    }
})();