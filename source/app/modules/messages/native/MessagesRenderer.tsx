// app/modules/messages/native/MessagesRenderer.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
            var9 = _closure1_slot21;
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
            var7 = _closure1_slot21;
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
    var _closure1_slot20 = var1;
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
    var _closure1_slot21 = var1;
    var1 = function recordTimings(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = arg2;
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 11;
            var3 = var3[var1];
            var1 = undefined;
            var7 = var4.bind(var1)(var3);
            var6 = var7.recordMessageRender;
            var4 = var2.map;
            var3 = function(arg1) {
                var1 = arg1;
                var1 = var1.id;
                return var1;
            };
            var5 = var4.bind(var2)(var3);
            var4 = var2.hasFetched;
            if(var4) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var3 = var2.ready;
            if(!var3) { _fun0004_ip = 38; continue _fun0004 }
case 39:
            var8 = var2.cached;
            var3 = !var8;
case 38:
            var4 = var3;
case 36:
            var9 = var2.hasMoreAfter;
            var12 = arg1;
            var13 = var7;
            var11 = var5;
            var10 = var4;
            var2 = var13[var6](var12, var11, var10, var9, var8);
            return var1;
        }
    };
    var _closure1_slot22 = var1;
    var1 = function handleTapShowAltText(arg1) {
        var1 = arg1;
        var1 = var1.nativeEvent;
        var4 = var1.description;
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 12;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = {};
        var2['description'] = var4;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var _closure1_slot23 = var1;
    var1 = function handleMediaPlayFinishedAnalytics(arg1) {
        var1 = arg1;
        var4 = var1.nativeEvent;
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 13;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.handleMediaPlayFinishedAnalytics;
        var2 = var2.bind(var3)(var4);
        return var1;
    };
    var _closure1_slot24 = var1;
    var1 = function isLoadingAtTop(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg2;
            if(var1) { _fun0005_ip = 40; continue _fun0005 }
case 41:
            var1 = false;
            return var1;
case 40:
            var2 = _closure1_slot20;
            var5 = undefined;
            var1 = arg1;
            var4 = var2.bind(var5)(var1);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = var2;
            if(var1) { _fun0005_ip = 42; continue _fun0005 }
case 43:
            var1 = var3.value;
            var7 = var1.changeType;
            var2 = _closure1_slot11;
            var2 = var2.INSERT;
            if(!(var7 !== var2)) { _fun0005_ip = 44; continue _fun0005 }
case 30:
            var7 = var4.bind(var5)();
            var2 = var7.done;
            var3 = var7;
            if(var2) { _fun0005_ip = 42; continue _fun0005 }
case 45:
            _fun0005_ip = 43; continue _fun0005;
case 44:
            var2 = var1.index;
            var1 = 1;
            var1 = var2 <= var1;
            return var1;
case 42:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot25 = var1;
    var1 = function computeForceReload(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var3 = arg1;
            var2 = arg2;
            var4 = var3.theme;
            var1 = var2.theme;
            var1 = var4 !== var1;
            if(var1) { _fun0006_ip = 46; continue _fun0006 }
case 47:
            var3 = var3.saturation;
            var2 = var2.saturation;
            var1 = var3 !== var2;
case 46:
            return var1;
        }
    };
    var _closure1_slot26 = var1;
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
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var8 = var6[var4];
    var4 = metroImportAll;
    var8 = var4.bind(var1)(var8);
    var _closure1_slot5 = var8;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.updateShouldShowJumpToPresentButton;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.getUserCommunicationDisabledVersion;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Changeset;
    var _closure1_slot11 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.ActivityActionTypes;
    var _closure1_slot12 = var7;
    var7 = var4.MAX_MESSAGES_PER_CHANNEL;
    var _closure1_slot13 = var7;
    var7 = var4.MessageFlags;
    var _closure1_slot14 = var7;
    var7 = var4.MessageTypes;
    var _closure1_slot15 = var7;
    var4 = var4.Permissions;
    var _closure1_slot16 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot17 = var7;
    var7 = var4.Fragment;
    var _closure1_slot18 = var7;
    var4 = var4.jsxs;
    var _closure1_slot19 = var4;
    var7 = var8.forwardRef;
    var4 = function(arg1, arg2) {
        var9 = arg1;
        var _closure2_slot0 = var9;
        var20 = function handleVisibleMessagesChange(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var1 = arg1;
                var10 = var1.firstVisibleMessageRowIndex;
                var7 = var1.firstVisibleMessagePercentVisible;
                var8 = var1.lastVisibleMessageRowIndex;
                var2 = var1.lastVisibleMessagePercentVisible;
                var9 = var1.source;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 13;
                var4 = var4[var1];
                var1 = undefined;
                var6 = var5.bind(var1)(var4);
                var5 = var6.getVisibleMessages;
                var4 = {};
                var4['firstVisibleMessageRowIndex'] = var10;
                var4['lastVisibleMessageRowIndex'] = var8;
                var4['firstVisibleMessagePercentVisible'] = var7;
                var4['lastVisibleMessagePercentVisible'] = var2;
                var7 = _closure2_slot1;
                var4['chatManager'] = var7;
                var7 = _closure2_slot0;
                var7 = var7.channelId;
                var4['channelId'] = var7;
                var7 = var5.bind(var6)(var4);
                var5 = var7.length;
                var4 = 0;
                if(!(!(var5 <= var4))) { _fun0007_ip = 48; continue _fun0007 }
case 49:
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var3 = 22;
                var3 = var5[var3];
                var8 = var4.bind(var1)(var3);
                var6 = var8.questsVisibleMobileMessagesChanged;
                var3 = {};
                var3['visibleMessages'] = var7;
                var3['source'] = var9;
                var3 = var6.bind(var8)(var3);
                var3 = 23;
                var6 = var5[var3];
                var11 = var4.bind(var1)(var6);
                var10 = var11.handleAnnouncementMessageViewTracking;
                var2 = _closure2_slot0;
                var14 = var2.shouldTrackAnnouncementMessageViews;
                var13 = var2.guildId;
                var12 = var2.channel;
                var16 = var11;
                var15 = var7;
                var6 = var16[var10](var15, var14, var13, var12, var11);
                var6 = var5[var3];
                var11 = var4.bind(var1)(var6);
                var10 = var11.handleOfficialMessageViewTracking;
                var14 = var2.shouldTrackOfficialMessageViews;
                var13 = var2.guildId;
                var12 = var2.channel;
                var16 = var11;
                var15 = var7;
                var6 = var16[var10](var15, var14, var13, var12, var11);
                var6 = var5[var3];
                var11 = var4.bind(var1)(var6);
                var10 = var11.handleRichPresenceInviteEmbedViewTracking;
                var14 = var2.shouldTrackRichPresenceInviteEmbedViews;
                var13 = var2.guildId;
                var12 = var2.channel;
                var16 = var11;
                var15 = var7;
                var6 = var16[var10](var15, var14, var13, var12, var11);
                var3 = var5[var3];
                var6 = var4.bind(var1)(var3);
                var5 = var6.handleVoiceInviteEmbedViewTracking;
                var14 = var2.shouldTrackVoiceInviteEmbedViews;
                var13 = var2.guildId;
                var12 = var2.channel;
                var16 = var6;
                var15 = var7;
                var2 = var16[var5](var15, var14, var13, var12, var11);
case 48:
                return var1;
            }
        };
        var _closure2_slot29 = var20;
        var16 = function findMessageIndex(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var4 = arg1;
                var1 = null;
                if(!(var1 == var4)) { _fun0008_ip = 50; continue _fun0008 }
case 51:
                var1 = undefined;
                return var1;
case 50:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 24;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.findMessageRowIndex;
                var5 = _closure2_slot1;
                var1 = var5.getPreviousRows;
                var1 = var1.bind(var5)();
                var1 = var2.bind(var3)(var1, var4);
                return var1;
            }
        };
        var _closure2_slot30 = var16;
        var1 = function _handleTapNavBar() {
            var4 = undefined;
            var1 = undefined;
            var3 = _closure1_slot3;
            var2 = function* () {
                var1 = function* anon_0_() {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0009_ip = 52; continue _fun0009 }
case 53:
                        var2 = undefined;
                        var _closure5_slot0 = var2;
                        var5 = _closure2_slot0;
                        var9 = var5.channel;
                        var11 = var5.useReducedMotion;
                        _closure5_slot0 = var11;
                        var5 = var9.isForumPost;
                        var5 = var5.bind(var9)();
                        if(!var5) { _fun0009_ip = 54; continue _fun0009 }
case 28:
                        var5 = _closure2_slot19;
                        var5 = var5.current;
                        if(var5) { _fun0009_ip = 54; continue _fun0009 }
case 39:
                        var6 = _closure2_slot13;
                        var8 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var12 = 20;
                        var5 = var5[var12];
                        var10 = var8.bind(var2)(var5);
                        var8 = var10.castChannelIdAsMessageId;
                        var5 = var9.id;
                        var5 = var8.bind(var10)(var5);
                        var5 = var6.bind(var2)(var5);
                        var6 = null;
                        if(!(var6 != var5)) { _fun0009_ip = 55; continue _fun0009 }
case 56:
                        var8 = _closure2_slot30;
                        var10 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var5 = var5[var12];
                        var12 = var10.bind(var2)(var5);
                        var10 = var12.castChannelIdAsMessageId;
                        var5 = var9.id;
                        var5 = var10.bind(var12)(var5);
                        var5 = var8.bind(var2)(var5);
                        if(!(var6 != var5)) { _fun0009_ip = 57; continue _fun0009 }
case 58:
                        var8 = _closure1_slot1;
                        var10 = _closure1_slot2;
                        var6 = 17;
                        var6 = var10[var6];
                        var10 = var8.bind(var2)(var6);
                        var8 = var10.scrollTo;
                        var3 = _closure2_slot11;
                        var6 = var3.current;
                        var3 = {};
                        var11 = !var11;
                        var3['animated'] = var11;
                        var3 = var8.bind(var10)(var6, var5, var3);
                        var3 = global;
                        var6 = var3.setTimeout;
                        var3 = 10;
                        var5 = var3 * var5;
                        var3 = function() {
                            var3 = _closure2_slot23;
                            var1 = _closure5_slot0;
                            var2 = !var1;
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
                            return var1;
                        };
                        var3 = var6.bind(var2)(var3, var5);
                        _fun0009_ip = 54; continue _fun0009;
case 57:
                        return var2;
case 55:
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var3 = 26;
                        var3 = var6[var3];
                        var6 = var5.bind(var2)(var3);
                        var5 = var6.fetchMessages;
                        var3 = {};
                        var8 = var9.id;
                        var3['channelId'] = var8;
                        var8 = {};
                        var9 = var9.id;
                        var8['messageId'] = var9;
                        var9 = false;
                        var8['flash'] = var9;
                        var3['jump'] = var8;
                        var7 = _closure1_slot13;
                        var3['limit'] = var7;
                        var3 = var5.bind(var6)(var3);
                        SaveGenerator(address=336);
case 59:
                        return var3;
case 60:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                        if(var5) { _fun0009_ip = 61; continue _fun0009 }
case 48:
                        var5 = global;
                        var6 = var5.setTimeout;
                        var5 = function() {
                            var3 = _closure2_slot23;
                            var1 = _closure5_slot0;
                            var2 = !var1;
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
                            return var1;
                        };
                        var4 = 50;
                        var4 = var6.bind(var2)(var5, var4);
                        _fun0009_ip = 54; continue _fun0009;
case 61:
                        return var3;
case 54:
                        return var2;
case 52:
                        return var1;
                    }
                };
                return var1;
            };
            var4 = var3.bind(var4)(var2);
            _closure2_slot31 = var4;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var _closure2_slot31 = var1;
        var1 = function scrollToBottom() {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var5 = arguments[0];
                var1 = undefined;
                if(!(var5 === var1)) { _fun0010_ip = 62; continue _fun0010 }
case 51:
                var5 = true;
case 62:
                var3 = _closure2_slot24;
                var2 = {};
                var4 = global;
                var7 = var4.Date;
                var4 = var7.now;
                var4 = var4.bind(var7)();
                var2['eventTimestamp'] = var4;
                var4 = true;
                var2['isAtBottom'] = var4;
                var2 = var3.bind(var1)(var2);
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 17;
                var2 = var4[var2];
                var4 = var3.bind(var1)(var2);
                var3 = var4.scrollToBottom;
                var2 = _closure2_slot11;
                var2 = var2.current;
                if(!var5) { _fun0010_ip = 63; continue _fun0010 }
case 64:
                var6 = _closure2_slot0;
                var6 = var6.useReducedMotion;
                var5 = !var6;
case 63:
                var2 = var3.bind(var4)(var2, var5);
                return var1;
            }
        };
        var _closure2_slot32 = var1;
        var1 = function jumpToPresent() {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var3 = _closure2_slot0;
                var2 = var3.messages;
                var5 = var3.channel;
                var7 = var2.jumpReturnTargetId;
                var3 = null;
                if(!(var3 != var7)) { _fun0011_ip = 65; continue _fun0011 }
case 3:
                var6 = _closure1_slot1;
                var4 = _closure1_slot2;
                var3 = 26;
                var4 = var4[var3];
                var3 = undefined;
                var6 = var6.bind(var3)(var4);
                var4 = var6.jumpToMessage;
                var3 = {};
                var8 = var5.id;
                var3['channelId'] = var8;
                var3['messageId'] = var7;
                var7 = true;
                var3['flash'] = var7;
                var3 = var4.bind(var6)(var3);
                _fun0011_ip = 66; continue _fun0011;
case 65:
                var3 = var2.loadingMore;
                if(var3) { _fun0011_ip = 66; continue _fun0011 }
case 67:
                var2 = var2.hasMoreAfter;
                if(var2) { _fun0011_ip = 68; continue _fun0011 }
case 63:
                var2 = _closure2_slot32;
                var1 = undefined;
                var1 = var2.bind(var1)();
                _fun0011_ip = 66; continue _fun0011;
case 68:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 26;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.fetchMessages;
                var1 = {};
                var5 = var5.id;
                var1['channelId'] = var5;
                var4 = _closure1_slot13;
                var1['limit'] = var4;
                var4 = {};
                var5 = true;
                var4['present'] = var5;
                var1['jump'] = var4;
                var1 = var2.bind(var3)(var1);
case 66:
                var1 = undefined;
                return var1;
            }
        };
        var _closure2_slot33 = var1;
        var1 = function scrollToNewMessages() {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var4 = _closure1_slot9;
                var3 = var4.ackMessageId;
                var7 = _closure2_slot0;
                var2 = var7.channel;
                var2 = var2.id;
                var5 = var3.bind(var4)(var2);
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 26;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.jumpToMessage;
                var2 = {};
                var7 = var7.channel;
                var7 = var7.id;
                var2['channelId'] = var7;
                var7 = null;
                if(!(var7 == var5)) { _fun0012_ip = 67; continue _fun0012 }
case 69:
                var6 = _closure2_slot0;
                var6 = var6.channel;
                var5 = var6.id;
case 67:
                var2['messageId'] = var5;
                var5 = 1;
                var2['offset'] = var5;
                var5 = 'Mark As Read';
                var2['context'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            }
        };
        var _closure2_slot34 = var1;
        var1 = function getChatRef() {
            var1 = _closure2_slot11;
            return var1;
        };
        var _closure2_slot35 = var1;
        var1 = function clearRowsState(arg1) {
            var11 = arg1;
            var1 = _closure2_slot6;
            var2 = false;
            var1['current'] = var2;
            var1 = _closure2_slot16;
            var1['current'] = var2;
            var1 = _closure2_slot18;
            var1['current'] = var2;
            var1 = _closure2_slot17;
            var1['current'] = var2;
            var1 = _closure2_slot19;
            var1['current'] = var2;
            var1 = _closure2_slot20;
            var1['current'] = var2;
            var1 = _closure2_slot21;
            var1['current'] = var2;
            var1 = _closure2_slot7;
            var1['current'] = var2;
            var3 = _closure2_slot8;
            var1 = new Array(0);
            var3['current'] = var1;
            var1 = _closure2_slot10;
            var1['current'] = var2;
            var2 = _closure2_slot9;
            var1 = null;
            var2['current'] = var1;
            var1 = _closure2_slot12;
            var1 = var1.queue;
            var8 = var1.length;
            var1 = _closure2_slot12;
            var1 = var1.blockers;
            var7 = var1.size;
            var2 = _closure2_slot1;
            var1 = var2.getPreviousRows;
            var1 = var1.bind(var2)();
            var6 = var1.length;
            var2 = _closure2_slot1;
            var1 = var2.clear;
            var1 = var1.bind(var2)();
            var2 = _closure2_slot12;
            var1 = var2.clear;
            var1 = var1.bind(var2)();
            var3 = _closure1_slot1;
            var12 = _closure1_slot2;
            var1 = 17;
            var2 = var12[var1];
            var1 = undefined;
            var5 = var3.bind(var1)(var2);
            var4 = var5.clearRows;
            var2 = _closure2_slot11;
            var2 = var2.current;
            var2 = var4.bind(var5)(var2);
            var2 = 30;
            var2 = var12[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.addBreadcrumb;
            var2 = {};
            var5 = 'chat.queue.clear';
            var2['category'] = var5;
            var5 = global;
            var5 = var5.HermesInternal;
            var16 = var5.concat;
            var24 = 'clearRows (';
            var22 = '): queue=';
            var20 = ' blockers=';
            var18 = ' jsRows=';
            var23 = var11;
            var21 = var8;
            var19 = var7;
            var17 = var6;
            var5 = var24[var16](var23, var22, var21, var20, var19, var18, var17, var16);
            var2['message'] = var5;
            var5 = {};
            var5['reason'] = var11;
            var11 = _closure1_slot0;
            var10 = 31;
            var10 = var12[var10];
            var11 = var11.bind(var1)(var10);
            var10 = var11.getChangesetIdForChat;
            var9 = _closure2_slot11;
            var9 = var9.current;
            var9 = var10.bind(var11)(var9);
            var5['changesetUpdateId'] = var9;
            var5['queueLength'] = var8;
            var5['blockers'] = var7;
            var5['chatManagerRows'] = var6;
            var2['data'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var _closure2_slot36 = var1;
        var1 = function clearRows() {
            var4 = _closure2_slot36;
            var1 = undefined;
            var3 = 'channel-change';
            var3 = var4.bind(var1)(var3);
            var5 = _closure1_slot6;
            var2 = _closure2_slot0;
            var4 = var2.channelId;
            var3 = var2.screenIndex;
            var2 = false;
            var2 = var5.bind(var1)(var4, var3, var2);
            return var1;
        };
        var _closure2_slot37 = var1;
        var3 = _closure1_slot5;
        var2 = var3.useState;
        var1 = function() {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 15;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var2 = var1.prototype;
            var2 = Object.create(var2, {constructor: {value: var1}});
            var5 = var2;
            var1 = new var5[var1](var4);
            var1 = var1 instanceof Object ? var1 : var2;
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        var28 = _closure1_slot4;
        var4 = undefined;
        var13 = 1;
        var1 = var28.bind(var4)(var1, var13);
        var2 = 0;
        var27 = var1[var2];
        var _closure2_slot1 = var27;
        var5 = var3.useState;
        var1 = function() {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 16;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var2 = var1.prototype;
            var2 = Object.create(var2, {constructor: {value: var1}});
            var5 = var2;
            var1 = new var5[var1](var4);
            var1 = var1 instanceof Object ? var1 : var2;
            return var1;
        };
        var1 = var5.bind(var3)(var1);
        var1 = var28.bind(var4)(var1, var13);
        var26 = var1[var2];
        var1 = var3.useState;
        var6 = false;
        var1 = var1.bind(var3)(var6);
        var5 = 2;
        var1 = var28.bind(var4)(var1, var5);
        var7 = var1[var2];
        var _closure2_slot2 = var7;
        var1 = var1[var13];
        var _closure2_slot3 = var1;
        var1 = var3.useState;
        var1 = var1.bind(var3)(var6);
        var1 = var28.bind(var4)(var1, var5);
        var5 = var1[var2];
        var _closure2_slot4 = var5;
        var1 = var1[var13];
        var _closure2_slot5 = var1;
        var1 = var3.useRef;
        var22 = var1.bind(var3)(var6);
        var _closure2_slot6 = var22;
        var1 = var3.useRef;
        var21 = var1.bind(var3)(var6);
        var _closure2_slot7 = var21;
        var7 = var3.useRef;
        var1 = new Array(0);
        var30 = var7.bind(var3)(var1);
        var _closure2_slot8 = var30;
        var1 = var3.useRef;
        var29 = null;
        var25 = var1.bind(var3)(var29);
        var _closure2_slot9 = var25;
        var1 = var3.useRef;
        var23 = var1.bind(var3)(var6);
        var _closure2_slot10 = var23;
        var1 = var3.useRef;
        var15 = var1.bind(var3)(var29);
        var _closure2_slot11 = var15;
        var7 = var3.useCallback;
        var6 = function(arg1) {
            var1 = arg1;
            var13 = var1.rows;
            var3 = var1.hasMoreMessagesAfter;
            var11 = var1.scrollData;
            var10 = var1.HACK_iOSForceAnimations;
            var9 = var1.forceReload;
            var8 = var1.isAnimated;
            var7 = _closure1_slot25;
            var6 = var1.rows;
            var1 = _closure2_slot7;
            var5 = var1.current;
            var1 = undefined;
            var12 = var7.bind(var1)(var6, var5);
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var4 = 17;
            var4 = var6[var4];
            var7 = var5.bind(var1)(var4);
            var6 = var7.updateRows;
            var4 = _closure2_slot11;
            var5 = var4.current;
            var4 = {};
            var4['rows'] = var13;
            var4['isLoadingAtTop'] = var12;
            var4['scrollData'] = var11;
            var4['HACK_iOSForceAnimations'] = var10;
            var4['forceReload'] = var9;
            var4['isAnimated'] = var8;
            var4 = var6.bind(var7)(var5, var4);
            var2 = _closure2_slot7;
            var2['current'] = var3;
            return var1;
        };
        var1 = new Array(0);
        var14 = var7.bind(var3)(var6, var1);
        var7 = _closure1_slot0;
        var10 = _closure1_slot2;
        var1 = 18;
        var1 = var10[var1];
        var6 = var7.bind(var4)(var1);
        var1 = var6.useChatUpdatesQueue;
        var18 = var1.bind(var6)(var15, var14);
        var _closure2_slot12 = var18;
        var8 = var3.useCallback;
        var1 = var9.canChat;
        var6 = new Array(2);
        var6[0] = var1;
        var1 = var9.channel;
        var6[1] = var1;
        var1 = function() {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                var1 = _closure2_slot0;
                var1 = var1.canChat;
                if(!var1) { _fun0013_ip = 70; continue _fun0013 }
case 71:
                var6 = _closure1_slot8;
                var5 = var6.can;
                var3 = _closure1_slot16;
                var4 = var3.ADD_REACTIONS;
                var3 = _closure2_slot0;
                var3 = var3.channel;
                var1 = var5.bind(var6)(var4, var3);
case 70:
                if(var1) { _fun0013_ip = 72; continue _fun0013 }
case 73:
                var2 = _closure2_slot0;
                var3 = var2.channel;
                var2 = var3.isPrivate;
                var1 = var2.bind(var3)();
case 72:
                return var1;
            }
        };
        var24 = var8.bind(var3)(var1, var6);
        var8 = var3.useCallback;
        var1 = var9.messages;
        var6 = new Array(1);
        var6[0] = var1;
        var1 = function(arg1) {
            var2 = arg1;
            var _closure3_slot0 = var2;
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 19;
            var3 = var3[var2];
            var2 = undefined;
            var4 = var4.bind(var2)(var3);
            var3 = var4.find;
            var2 = _closure2_slot0;
            var5 = var2.messages;
            var2 = var5.toArray;
            var2 = var2.bind(var5)();
            var1 = function(arg1) {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    var1 = arg1;
                    var4 = var1.id;
                    var3 = var1.nonce;
                    var1 = _closure3_slot0;
                    var1 = var4 === var1;
                    if(var1) { _fun0014_ip = 74; continue _fun0014 }
case 34:
                    var2 = _closure3_slot0;
                    var1 = var3 === var2;
case 74:
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var32 = var8.bind(var3)(var1, var6);
        var _closure2_slot13 = var32;
        var8 = var3.useCallback;
        var1 = var9.channel;
        var6 = new Array(3);
        var6[0] = var1;
        var1 = var9.channelId;
        var6[1] = var1;
        var1 = var9.messages;
        var1 = var1.jumpTargetId;
        var6[2] = var1;
        var1 = function(arg1) {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                var1 = _closure2_slot0;
                var3 = var1.channel;
                var1 = var3.isForumPost;
                var1 = var1.bind(var3)();
                if(!var1) { _fun0015_ip = 9; continue _fun0015 }
case 47:
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var3 = 20;
                var4 = var4[var3];
                var3 = undefined;
                var5 = var5.bind(var3)(var4);
                var4 = var5.castChannelIdAsMessageId;
                var2 = _closure2_slot0;
                var3 = var2.channelId;
                var3 = var4.bind(var5)(var3);
                var2 = var2.messages;
                var2 = var2.jumpTargetId;
                var1 = var3 === var2;
case 9:
                if(!var1) { _fun0015_ip = 64; continue _fun0015 }
case 75:
                var2 = arg1;
                var1 = !var2;
case 64:
                return var1;
            }
        };
        var17 = var8.bind(var3)(var1, var6);
        var _closure2_slot14 = var17;
        var6 = _closure1_slot1;
        var1 = 21;
        var1 = var10[var1];
        var8 = var6.bind(var4)(var1);
        var1 = {};
        var19 = var9.channelId;
        var1['channelId'] = var19;
        var19 = var9.messages;
        var19 = var19.jumpTargetId;
        var1['jumpTargetId'] = var19;
        var19 = var9.oldestUnreadMessageId;
        var1['oldestUnreadMessageId'] = var19;
        var1['shouldJumpToOriginalPost'] = var17;
        var1 = var8.bind(var4)(var1);
        var19 = var1.channelLatestMessageLoadingStatsManager;
        var1 = var1.startOrCancelLatestMessagesLoad;
        var _closure2_slot15 = var1;
        var1 = 25;
        var1 = var10[var1];
        var8 = var6.bind(var4)(var1);
        var1 = {};
        var1['chatRef'] = var15;
        var1['chatManager'] = var27;
        var1['chatUpdatesQueue'] = var18;
        var1['pendingUpdatesQueueRef'] = var30;
        var1['animatedRef'] = var22;
        var30 = function fetchMoreBefore() {
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                var1 = _closure2_slot0;
                var6 = var1.channelId;
                var7 = var1.messages;
                var1 = var7.hasMoreBefore;
                if(!var1) { _fun0016_ip = 74; continue _fun0016 }
case 76:
                var2 = var7.loadingMore;
                var1 = !var2;
case 74:
                if(!var1) { _fun0016_ip = 77; continue _fun0016 }
case 78:
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 26;
                var1 = var3[var1];
                var5 = undefined;
                var3 = var2.bind(var5)(var1);
                var2 = var3.fetchMessages;
                var1 = {};
                var1['channelId'] = var6;
                var6 = var7.first;
                var6 = var6.bind(var7)();
                var7 = null;
                var7 = var7 == var6;
                if(var7) { _fun0016_ip = 79; continue _fun0016 }
case 64:
                var5 = var6.id;
case 79:
                var1['before'] = var5;
                var4 = _closure1_slot13;
                var1['limit'] = var4;
                var1 = var2.bind(var3)(var1);
case 77:
                var1 = undefined;
                return var1;
            }
        };
        var1['fetchMoreBefore'] = var30;
        var30 = function fetchMoreAfter() {
            _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                var1 = _closure2_slot0;
                var6 = var1.channelId;
                var7 = var1.messages;
                var1 = var7.hasMoreAfter;
                if(!var1) { _fun0017_ip = 74; continue _fun0017 }
case 76:
                var2 = var7.loadingMore;
                var1 = !var2;
case 74:
                if(!var1) { _fun0017_ip = 77; continue _fun0017 }
case 78:
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 26;
                var1 = var3[var1];
                var5 = undefined;
                var3 = var2.bind(var5)(var1);
                var2 = var3.fetchMessages;
                var1 = {};
                var1['channelId'] = var6;
                var6 = var7.last;
                var6 = var6.bind(var7)();
                var7 = null;
                var7 = var7 == var6;
                if(var7) { _fun0017_ip = 79; continue _fun0017 }
case 64:
                var5 = var6.id;
case 79:
                var1['after'] = var5;
                var4 = _closure1_slot13;
                var1['limit'] = var4;
                var1 = var2.bind(var3)(var1);
case 77:
                var1 = undefined;
                return var1;
            }
        };
        var1['fetchMoreAfter'] = var30;
        var1['handleVisibleMessagesChange'] = var20;
        var1['applyNativeRowsUpdate'] = var14;
        var14 = var9.messages;
        var1['messages'] = var14;
        var14 = var9.channel;
        var1['channel'] = var14;
        var14 = var9.channelId;
        var1['channelId'] = var14;
        var14 = var9.screenIndex;
        var1['screenIndex'] = var14;
        var14 = var9.onScroll;
        var1['onScroll'] = var14;
        var14 = var9.useReducedMotion;
        var1['useReducedMotion'] = var14;
        var14 = var9.isStaff;
        var1['isStaff'] = var14;
        var14 = var9.visibleMessagesWindowHandler;
        var1['visibleMessagesWindowHandler'] = var14;
        var1 = var8.bind(var4)(var1);
        var8 = var1.hasHandledScrollRef;
        var _closure2_slot16 = var8;
        var8 = var1.isAtBottomRef;
        var _closure2_slot17 = var8;
        var8 = var1.isNearBottomRef;
        var _closure2_slot18 = var8;
        var8 = var1.isNearTopRef;
        var _closure2_slot19 = var8;
        var8 = var1.deceleratingRef;
        var _closure2_slot20 = var8;
        var8 = var1.draggingRef;
        var _closure2_slot21 = var8;
        var8 = var1.firstIgnoredScrollEventTimestampRef;
        var _closure2_slot22 = var8;
        var31 = var1.loadMoreBefore;
        var30 = var1.loadMoreAfter;
        var8 = var1.scrollToTop;
        var _closure2_slot23 = var8;
        var8 = var1.scrollToTopMessage;
        var20 = var1.updateNativeRows;
        var14 = var1.handleScrollCallbacks;
        var _closure2_slot24 = var14;
        var14 = var1.handleScrollPosition;
        var1 = var3.useRef;
        var29 = var1.bind(var3)(var29);
        var _closure2_slot25 = var29;
        var1 = {};
        var1['getMessage'] = var32;
        var32 = var9.chatInputRef;
        var1['chatInputRef'] = var32;
        var32 = var9.channelId;
        var1['selectedChannelId'] = var32;
        var32 = var9.messages;
        var32 = var32.revealedMessageId;
        var1['revealedMessageId'] = var32;
        var32 = var9.uploads;
        var1['uploads'] = var32;
        var32 = var9.paymentsBlocked;
        var1['paymentsBlocked'] = var32;
        var1['loadMoreBefore'] = var31;
        var1['loadMoreAfter'] = var30;
        var29['current'] = var1;
        var29 = var3.useState;
        var1 = function() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 27;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var3 = var1.MessagesHandlers;
            var1 = var3.prototype;
            var2 = Object.create(var1, {constructor: {value: var3}});
            var4 = function() {
                var1 = _closure2_slot25;
                var1 = var1.current;
                return var1;
            };
            var5 = var2;
            var1 = new var5[var3](var4, var3);
            var1 = var1 instanceof Object ? var1 : var2;
            return var1;
        };
        var1 = var29.bind(var3)(var1);
        var1 = var28.bind(var4)(var1, var13);
        var13 = var1[var2];
        var28 = var3.useImperativeHandle;
        var2 = arg2;
        var1 = function() {
            var1 = {};
            var3 = _closure2_slot32;
            var1['scrollToBottom'] = var3;
            var3 = _closure2_slot33;
            var1['jumpToPresent'] = var3;
            var3 = _closure2_slot34;
            var1['scrollToNewMessages'] = var3;
            var2 = _closure2_slot35;
            var1['getChatRef'] = var2;
            return var1;
        };
        var1 = var28.bind(var3)(var2, var1);
        var1 = 28;
        var1 = var10[var1];
        var2 = var6.bind(var4)(var1);
        var1 = {};
        var1['chatManager'] = var27;
        var1['rowGenerator'] = var26;
        var1['animatingStickerMessageIdRef'] = var25;
        var1['canAddNewReactions'] = var24;
        var24 = var9.channel;
        var1['channel'] = var24;
        var24 = var9.messages;
        var1['messages'] = var24;
        var24 = var9.isMessagesReady;
        var1['isMessagesReady'] = var24;
        var24 = var9.uploads;
        var1['uploads'] = var24;
        var24 = var9.roleStyle;
        var1['roleStyle'] = var24;
        var24 = var9.oldestUnreadMessageId;
        var1['oldestUnreadMessageId'] = var24;
        var24 = var9.replyingMessageId;
        var1['replyingMessageId'] = var24;
        var24 = var9.inlineAttachmentMedia;
        var1['inlineAttachmentMedia'] = var24;
        var24 = var9.inlineEmbedMedia;
        var1['inlineEmbedMedia'] = var24;
        var24 = var9.renderEmbeds;
        var1['renderEmbeds'] = var24;
        var24 = var9.renderReactions;
        var1['renderReactions'] = var24;
        var24 = var9.animateEmoji;
        var1['animateEmoji'] = var24;
        var24 = var9.gifAutoPlay;
        var1['gifAutoPlay'] = var24;
        var24 = var9.timestampHourCycle;
        var1['timestampHourCycle'] = var24;
        var24 = var9.currentUserId;
        var1['currentUserId'] = var24;
        var24 = var9.renderCommunicationDisabled;
        var1['renderCommunicationDisabled'] = var24;
        var24 = var9.selectedSummary;
        var1['selectedSummary'] = var24;
        var24 = var9.enableSwipeActions;
        var1['enableSwipeActions'] = var24;
        var24 = var9.isResourceChannel;
        var1['isResourceChannel'] = var24;
        var24 = var9.shouldObscureSpoiler;
        var1['shouldObscureSpoiler'] = var24;
        var24 = var9.shouldDisableInteractiveComponents;
        var1['shouldDisableInteractiveComponents'] = var24;
        var24 = var9.unloadableContentEntryMessageIds;
        var1['unloadableContentEntryMessageIds'] = var24;
        var24 = var9.containerWidth;
        var1['containerWidth'] = var24;
        var1['chatRef'] = var15;
        var1['loadedRef'] = var23;
        var1['animatedRef'] = var22;
        var1['hasMoreMessagesAfterForLastUpdateRef'] = var21;
        var1['updateNativeRows'] = var20;
        var20 = _closure1_slot25;
        var1['isLoadingAtTop'] = var20;
        var1['channelLatestMessageLoadingStatsManager'] = var19;
        var19 = var9.channelId;
        var1['channelId'] = var19;
        var19 = var9.isMessagesCached;
        var1['isMessagesCached'] = var19;
        var1['chatUpdatesQueue'] = var18;
        var1['shouldJumpToOriginalPost'] = var17;
        var1['findMessageIndex'] = var16;
        var1['scrollToTopMessage'] = var8;
        var8 = var9.useReducedMotion;
        var1['useReducedMotion'] = var8;
        var1 = var2.bind(var4)(var1);
        var2 = var1.updateRows;
        var _closure2_slot26 = var2;
        var1 = var1.scrollToMessageId;
        var _closure2_slot27 = var1;
        var8 = var3.useEffect;
        var2 = function() {
            var2 = function syncMessageDisplay() {
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                    var4 = _closure2_slot0;
                    var6 = var4.messages;
                    var _closure4_slot0 = var6;
                    var3 = var4.isMessagesReady;
                    var8 = var4.oldestUnreadMessageId;
                    var _closure4_slot1 = var8;
                    var9 = _closure2_slot26;
                    if(var3) { _fun0018_ip = 80; continue _fun0018 }
case 43:
                    var4 = {};
                    var3 = _closure2_slot2;
                    var4['hasJumpedToOriginalPost'] = var3;
                    var3 = undefined;
                    var3 = var9.bind(var3)(var4);
                    _fun0018_ip = 81; continue _fun0018;
case 80:
                    var3 = {};
                    var4 = var6.jumpTargetId;
                    var3['scrollToMessageId'] = var4;
                    var4 = var6.jumpTargetId;
                    var3['jumpTargetId'] = var4;
                    var11 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var7 = 29;
                    var10 = var4[var7];
                    var4 = undefined;
                    var10 = var11.bind(var4)(var10);
                    var10 = var10.JumpType;
                    var10 = var10.INSTANT;
                    var3['jumpType'] = var10;
                    var10 = var6.focusTargetId;
                    var3['focusTargetId'] = var10;
                    var10 = _closure2_slot2;
                    var3['hasJumpedToOriginalPost'] = var10;
                    var3 = var9.bind(var4)(var3);
                    var9 = var6.jumpTargetId;
                    var3 = null;
                    if(!(var3 == var9)) { _fun0018_ip = 82; continue _fun0018 }
case 83:
                    if(!(var3 != var8)) { _fun0018_ip = 81; continue _fun0018 }
case 84:
                    var3 = global;
                    var8 = var3.setTimeout;
                    var3 = function() {
                        var3 = _closure2_slot27;
                        var2 = {};
                        var5 = _closure4_slot1;
                        var2['scrollToMessageId'] = var5;
                        var1 = _closure4_slot0;
                        var1 = var1.jumpTargetId;
                        var2['jumpTargetId'] = var1;
                        var6 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var1 = 29;
                        var5 = var5[var1];
                        var1 = undefined;
                        var5 = var6.bind(var1)(var5);
                        var5 = var5.JumpType;
                        var5 = var5.INSTANT;
                        var2['jumpType'] = var5;
                        var4 = _closure2_slot2;
                        var2['hasJumpedToOriginalPost'] = var4;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var2 = 50;
                    var2 = var8.bind(var4)(var3, var2);
                    _fun0018_ip = 81; continue _fun0018;
case 82:
                    var3 = _closure2_slot27;
                    var2 = {};
                    var8 = var6.jumpTargetId;
                    var2['scrollToMessageId'] = var8;
                    var6 = var6.jumpTargetId;
                    var2['jumpTargetId'] = var6;
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var5 = var5[var7];
                    var5 = var6.bind(var4)(var5);
                    var5 = var5.JumpType;
                    var5 = var5.INSTANT;
                    var2['jumpType'] = var5;
                    var5 = _closure2_slot2;
                    var2['hasJumpedToOriginalPost'] = var5;
                    var2 = var3.bind(var4)(var2);
case 81:
                    var4 = _closure1_slot22;
                    var1 = _closure2_slot0;
                    var3 = var1.channelId;
                    var2 = var1.messages;
                    var1 = undefined;
                    var2 = var4.bind(var1)(var3, var2);
                    return var1;
                }
            };
            var5 = undefined;
            var2 = var2.bind(var5)();
            var4 = _closure1_slot22;
            var2 = _closure2_slot0;
            var3 = var2.channelId;
            var2 = var2.messages;
            var2 = var4.bind(var5)(var3, var2);
            var1 = function() {
                var3 = _closure2_slot36;
                var1 = undefined;
                var2 = 'unmount';
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            return var1;
        };
        var1 = new Array(0);
        var1 = var8.bind(var3)(var2, var1);
        var8 = var3.useEffect;
        var1 = var9.channelId;
        var2 = new Array(2);
        var2[0] = var1;
        var1 = var9.screenIndex;
        var2[1] = var1;
        var1 = function() {
            var1 = function() {
                var5 = _closure1_slot6;
                var1 = _closure2_slot0;
                var4 = var1.channelId;
                var3 = var1.screenIndex;
                var1 = undefined;
                var2 = false;
                var2 = var5.bind(var1)(var4, var3, var2);
                return var1;
            };
            return var1;
        };
        var1 = var8.bind(var3)(var1, var2);
        var2 = var3.useRef;
        var1 = {};
        var1['props'] = var9;
        var1['shouldForceRender'] = var5;
        var1 = var2.bind(var3)(var1);
        var _closure2_slot28 = var1;
        var2 = var3.useLayoutEffect;
        var1 = function() {
            _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                var4 = _closure2_slot28;
                var2 = var4.current;
                var20 = var2.props;
                var _closure3_slot0 = var20;
                var22 = var2.shouldForceRender;
                var3 = {};
                var2 = _closure2_slot0;
                var3['props'] = var2;
                var5 = _closure2_slot4;
                var3['shouldForceRender'] = var5;
                var4['current'] = var3;
                var2 = var2.currentUserId;
                var25 = null;
                if(!(var25 != var2)) { _fun0019_ip = 85; continue _fun0019 }
case 86:
                var2 = _closure2_slot0;
                var3 = var2.messages;
                var5 = var20.messages;
                var4 = var20.channelId;
                var2 = var2.channelId;
                var18 = var4 !== var2;
                if(!var18) { _fun0019_ip = 87; continue _fun0019 }
case 88:
                var6 = _closure2_slot3;
                var4 = undefined;
                var2 = false;
                var2 = var6.bind(var4)(var2);
case 87:
                var6 = !var18;
                if(var18) { _fun0019_ip = 89; continue _fun0019 }
case 90:
                var6 = _closure2_slot2;
case 89:
                var7 = var20.channelId;
                var2 = _closure2_slot0;
                var10 = var2.channelId;
                var4 = {};
                var8 = _closure2_slot37;
                var4['clearRows'] = var8;
                var8 = _closure2_slot15;
                var4['startOrCancelChannelLatestMessagesLoad'] = var8;
                var4['hasJumpedToOriginalPost'] = var6;
                var8 = _closure2_slot22;
                var4['firstIgnoredScrollEventTimestampRef'] = var8;
                if(!(var7 !== var10)) { _fun0019_ip = 91; continue _fun0019 }
case 92:
                var7 = var4.clearRows;
                var7 = var7.bind(var4)();
                var9 = _closure1_slot1;
                var8 = _closure1_slot2;
                var7 = 14;
                var8 = var8[var7];
                var7 = undefined;
                var9 = var9.bind(var7)(var8);
                var8 = var9.clearChannelDimensions;
                var8 = var8.bind(var9)(var10);
                var9 = var4.startOrCancelChannelLatestMessagesLoad;
                var8 = var4.hasJumpedToOriginalPost;
                var8 = var9.bind(var4)(var8);
                var4 = var4.firstIgnoredScrollEventTimestampRef;
                var4['current'] = var7;
case 91:
                var4 = var20.isMessagesAckable;
                var8 = var2.isMessagesAckable;
                var7 = _closure2_slot16;
                var4 = !var4;
                if(!var4) { _fun0019_ip = 93; continue _fun0019 }
case 81:
                var4 = var8;
case 93:
                if(!var4) { _fun0019_ip = 94; continue _fun0019 }
case 95:
                var4 = false;
                var7['current'] = var4;
case 94:
                var4 = {};
                var7 = _closure2_slot14;
                var4['shouldJumpToOriginalPost'] = var7;
                var4['hasJumpedToOriginalPost'] = var6;
                var7 = _closure2_slot23;
                var4['scrollToTop'] = var7;
                var4['prevMessages'] = var5;
                var4['currentMessages'] = var3;
                var7 = _closure2_slot3;
                var4['setHasJumpedToOriginalPost'] = var7;
                var12 = var4.shouldJumpToOriginalPost;
                var10 = var4.hasJumpedToOriginalPost;
                var11 = var4.scrollToTop;
                var9 = var4.prevMessages;
                var7 = var4.currentMessages;
                var8 = var4.setHasJumpedToOriginalPost;
                var4 = undefined;
                var10 = var12.bind(var4)(var10);
                if(!var10) { _fun0019_ip = 96; continue _fun0019 }
case 97:
                var10 = false;
                var10 = var11.bind(var4)(var10);
                var9 = var9.jumpSequenceId;
                var7 = var7.jumpSequenceId;
                if(!(var9 === var7)) { _fun0019_ip = 96; continue _fun0019 }
case 98:
                var7 = true;
                var7 = var8.bind(var4)(var7);
case 96:
                var10 = var2.isMessagesReady;
                if(!var10) { _fun0019_ip = 99; continue _fun0019 }
case 100:
                var2 = _closure2_slot0;
                var2 = var2.isMessagesCached;
                var10 = !var2;
case 99:
                if(!var10) { _fun0019_ip = 101; continue _fun0019 }
case 102:
                var10 = var20.isMessagesCached;
case 101:
                var16 = _closure1_slot1;
                var11 = _closure1_slot2;
                var7 = 32;
                var7 = var11[var7];
                var9 = var16.bind(var4)(var7);
                var7 = _closure2_slot0;
                var8 = {};
                var12 = _closure2_slot17;
                var12 = var12.current;
                var8['isAtBottom'] = var12;
                var13 = _closure2_slot1;
                var12 = var13.getPreviousMessages;
                var12 = var12.bind(var13)();
                var12 = var25 != var12;
                var8['hasPreviousMessages'] = var12;
                var9 = var9.bind(var4)(var7, var8, var20);
                var15 = var9.scrollToMessageId;
                var14 = var9.jumpTargetId;
                var13 = var9.jumpType;
                var8 = var9.minimizeScrolling;
                var12 = var9.focusTargetId;
                var9 = var9.shouldInitialScroll;
                var19 = _closure1_slot26;
                var17 = var19.bind(var4)(var20, var7);
                var23 = _closure2_slot4;
                var19 = var19.bind(var4)(var20, var7);
                if(var19) { _fun0019_ip = 103; continue _fun0019 }
case 104:
                var26 = var20.inlineAttachmentMedia;
                var24 = var7.inlineAttachmentMedia;
                var19 = var26 !== var24;
case 103:
                if(var19) { _fun0019_ip = 105; continue _fun0019 }
case 106:
                var26 = var20.inlineEmbedMedia;
                var24 = var7.inlineEmbedMedia;
                var19 = var26 !== var24;
case 105:
                if(var19) { _fun0019_ip = 107; continue _fun0019 }
case 108:
                var26 = var20.renderEmbeds;
                var24 = var7.renderEmbeds;
                var19 = var26 !== var24;
case 107:
                if(var19) { _fun0019_ip = 109; continue _fun0019 }
case 110:
                var26 = var20.renderReactions;
                var24 = var7.renderReactions;
                var19 = var26 !== var24;
case 109:
                if(var19) { _fun0019_ip = 111; continue _fun0019 }
case 112:
                var26 = var20.animateEmoji;
                var24 = var7.animateEmoji;
                var19 = var26 !== var24;
case 111:
                if(var19) { _fun0019_ip = 113; continue _fun0019 }
case 114:
                var26 = var20.animateStickers;
                var24 = var7.animateStickers;
                var19 = var26 !== var24;
case 113:
                if(var19) { _fun0019_ip = 115; continue _fun0019 }
case 116:
                var26 = var20.gifAutoPlay;
                var24 = var7.gifAutoPlay;
                var19 = var26 !== var24;
case 115:
                if(var19) { _fun0019_ip = 117; continue _fun0019 }
case 118:
                var26 = var20.timestampHourCycle;
                var24 = var7.timestampHourCycle;
                var19 = var26 !== var24;
case 117:
                if(var19) { _fun0019_ip = 119; continue _fun0019 }
case 120:
                var26 = var20.containerWidth;
                var24 = var7.containerWidth;
                var19 = var26 !== var24;
case 119:
                if(var19) { _fun0019_ip = 121; continue _fun0019 }
case 122:
                var26 = var20.guildSystemChannelFlags;
                var24 = var7.guildSystemChannelFlags;
                var19 = var26 !== var24;
case 121:
                if(var19) { _fun0019_ip = 123; continue _fun0019 }
case 124:
                var26 = var20.userSettingsLocale;
                var24 = var7.userSettingsLocale;
                var19 = var26 !== var24;
case 123:
                if(var19) { _fun0019_ip = 125; continue _fun0019 }
case 126:
                var26 = var20.roleStyle;
                var24 = var7.roleStyle;
                var19 = var26 !== var24;
case 125:
                if(var19) { _fun0019_ip = 127; continue _fun0019 }
case 128:
                var26 = var20.officialMessageStyle;
                var24 = var7.officialMessageStyle;
                var19 = var26 !== var24;
case 127:
                if(var19) { _fun0019_ip = 129; continue _fun0019 }
case 130:
                var26 = var20.canSendMessages;
                var24 = var7.canSendMessages;
                var19 = var26 !== var24;
case 129:
                if(var19) { _fun0019_ip = 131; continue _fun0019 }
case 132:
                var26 = var20.showPushFeedback;
                var24 = var7.showPushFeedback;
                var19 = var26 !== var24;
case 131:
                if(var19) { _fun0019_ip = 133; continue _fun0019 }
case 134:
                var26 = var20.selectedSummary;
                var24 = var7.selectedSummary;
                var19 = var26 !== var24;
case 133:
                if(var19) { _fun0019_ip = 135; continue _fun0019 }
case 136:
                var26 = var20.shouldObscureSpoiler;
                var24 = var7.shouldObscureSpoiler;
                var19 = var26 !== var24;
case 135:
                if(var19) { _fun0019_ip = 137; continue _fun0019 }
case 138:
                var26 = var20.explicitMediaFalsePositiveInfo;
                var24 = var7.explicitMediaFalsePositiveInfo;
                var19 = var26 !== var24;
case 137:
                if(var19) { _fun0019_ip = 139; continue _fun0019 }
case 140:
                var26 = var20.familyCenterPendingConnection;
                var24 = var7.familyCenterPendingConnection;
                var19 = var26 !== var24;
case 139:
                if(var19) { _fun0019_ip = 141; continue _fun0019 }
case 142:
                var26 = var20.isStaff;
                var24 = var7.isStaff;
                var19 = var26 !== var24;
case 141:
                if(var19) { _fun0019_ip = 143; continue _fun0019 }
case 144:
                var26 = var20.isAgeVerified;
                var24 = var7.isAgeVerified;
                var19 = var26 !== var24;
case 143:
                if(var19) { _fun0019_ip = 145; continue _fun0019 }
case 146:
                var22 = var22 !== var23;
                if(!var22) { _fun0019_ip = 147; continue _fun0019 }
case 148:
                var22 = var23;
case 147:
                var19 = var22;
case 145:
                if(var19) { _fun0019_ip = 149; continue _fun0019 }
case 150:
                var23 = var20.displayNameStylesEnabled;
                var22 = var7.displayNameStylesEnabled;
                var19 = var23 !== var22;
case 149:
                var23 = var20.resolvingGiftCodes;
                var22 = var7.resolvingGiftCodes;
                var51 = var23 !== var22;
                if(var51) { _fun0019_ip = 151; continue _fun0019 }
case 152:
                var23 = var20.resolvedGiftCodes;
                var22 = var7.resolvedGiftCodes;
                var51 = var23 !== var22;
case 151:
                if(var51) { _fun0019_ip = 153; continue _fun0019 }
case 154:
                var23 = var20.acceptingGiftCodes;
                var22 = var7.acceptingGiftCodes;
                var51 = var23 !== var22;
case 153:
                var _closure3_slot1 = var51;
                var50 = var20.uploads;
                var49 = var7.uploads;
                var52 = 33;
                var11 = var11[var52];
                var22 = var16.bind(var4)(var11);
                var16 = var20.interactionStates;
                var11 = var7.interactionStates;
                var11 = var22.bind(var4)(var16, var11);
                var40 = !var11;
                var _closure3_slot2 = var40;
                var16 = var20.channelPolls;
                var11 = var7.channelPolls;
                var37 = var16 !== var11;
                var _closure3_slot3 = var37;
                var16 = var20.messageReferencePolls;
                var11 = var7.messageReferencePolls;
                var36 = var16 !== var11;
                var _closure3_slot4 = var36;
                var16 = var20.interactionComponentStatesVersion;
                var11 = var7.interactionComponentStatesVersion;
                var39 = var16 !== var11;
                var _closure3_slot5 = var39;
                var16 = var20.shouldDisableInteractiveComponents;
                var11 = var7.shouldDisableInteractiveComponents;
                var11 = var16 !== var11;
                var _closure3_slot6 = var11;
                var16 = var20.communicationDisabledVersion;
                var11 = var7.communicationDisabledVersion;
                var46 = var16 !== var11;
                var _closure3_slot7 = var46;
                var16 = var20.messageAuthorMembers;
                var11 = var7.messageAuthorMembers;
                var45 = var16 !== var11;
                var _closure3_slot8 = var45;
                var16 = var20.failedMessagesVersion;
                var11 = var7.failedMessagesVersion;
                var44 = var16 !== var11;
                var _closure3_slot9 = var44;
                var16 = var20.renderCommunicationDisabled;
                var11 = var7.renderCommunicationDisabled;
                var41 = var16 !== var11;
                var _closure3_slot10 = var41;
                var43 = var20.forwardGuildsVersion;
                var42 = var7.forwardGuildsVersion;
                var11 = var7.channel;
                var7 = var11.isForumPost;
                var38 = var7.bind(var11)();
                if(!var38) { _fun0019_ip = 155; continue _fun0019 }
case 156:
                var11 = var20.isFollowingForumPost;
                var7 = _closure2_slot0;
                var7 = var7.isFollowingForumPost;
                var38 = var11 !== var7;
case 155:
                var _closure3_slot11 = var38;
                var16 = var20.showMediaPostSharePrompt;
                var11 = _closure2_slot0;
                var7 = var11.showMediaPostSharePrompt;
                var35 = var16 !== var7;
                var _closure3_slot12 = var35;
                var16 = var20.unloadedContentEntryMessageIds;
                var7 = var11.unloadedContentEntryMessageIds;
                var34 = var16 !== var7;
                var _closure3_slot13 = var34;
                var16 = var20.invalidApplicationIds;
                var7 = var11.invalidApplicationIds;
                var7 = var16 !== var7;
                var _closure3_slot14 = var7;
                var16 = var20.activityInstanceIds;
                var11 = var11.activityInstanceIds;
                var48 = var16 !== var11;
                if(var48) { _fun0019_ip = 157; continue _fun0019 }
case 158:
                var16 = var20.activityParticipants;
                var11 = _closure2_slot0;
                var11 = var11.activityParticipants;
                var48 = var16 !== var11;
case 157:
                if(var48) { _fun0019_ip = 159; continue _fun0019 }
case 160:
                var16 = var20.applicationAssetFetchingIds;
                var11 = _closure2_slot0;
                var11 = var11.applicationAssetFetchingIds;
                var48 = var16 !== var11;
case 159:
                if(var48) { _fun0019_ip = 161; continue _fun0019 }
case 162:
                var16 = var20.activityInstancePresenceDetails;
                var11 = _closure2_slot0;
                var11 = var11.activityInstancePresenceDetails;
                var48 = var16 !== var11;
case 161:
                if(var48) { _fun0019_ip = 163; continue _fun0019 }
case 164:
                var16 = var20.messagesWithActivitiesLaunching;
                var11 = _closure2_slot0;
                var11 = var11.messagesWithActivitiesLaunching;
                var48 = var16 !== var11;
case 163:
                if(var48) { _fun0019_ip = 165; continue _fun0019 }
case 166:
                var48 = var7;
case 165:
                var _closure3_slot15 = var48;
                var16 = _closure1_slot0;
                var11 = _closure1_slot2;
                var7 = var11[var52];
                var26 = var16.bind(var4)(var7);
                var24 = var26.areArraysShallowEqual;
                var23 = var20.activityInviteMessageIds;
                var7 = _closure2_slot0;
                var22 = var7.activityInviteMessageIds;
                var22 = var24.bind(var26)(var23, var22);
                var33 = !var22;
                var _closure3_slot16 = var33;
                var11 = var11[var52];
                var22 = var16.bind(var4)(var11);
                var16 = var22.areArraysShallowEqual;
                var11 = var20.resolvedReferralTrialOfferIds;
                var7 = var7.resolvedReferralTrialOfferIds;
                var7 = var16.bind(var22)(var11, var7);
                var32 = !var7;
                if(var32) { _fun0019_ip = 167; continue _fun0019 }
case 168:
                var11 = var20.referralTrialOfferId;
                var7 = _closure2_slot0;
                var7 = var7.referralTrialOfferId;
                var32 = var11 !== var7;
case 167:
                if(var32) { _fun0019_ip = 169; continue _fun0019 }
case 170:
                var11 = var20.isPremiumTier2User;
                var7 = _closure2_slot0;
                var7 = var7.isPremiumTier2User;
                var32 = var11 !== var7;
case 169:
                var _closure3_slot17 = var32;
                var16 = var20.guildInviteColorsFetched;
                var11 = _closure2_slot0;
                var7 = var11.guildInviteColorsFetched;
                var31 = var16 !== var7;
                var _closure3_slot18 = var31;
                var16 = var20.guildEmojis;
                var7 = var11.guildEmojis;
                var30 = var16 !== var7;
                var _closure3_slot19 = var30;
                var16 = var20.selfActivities;
                var7 = var11.selfActivities;
                var29 = var16 !== var7;
                var _closure3_slot20 = var29;
                var16 = var20.currentClientVoiceChannelId;
                var7 = var11.currentClientVoiceChannelId;
                var47 = var16 !== var7;
                var _closure3_slot21 = var47;
                var16 = var20.voiceStateChannelIdSummaryForGuild;
                var7 = var11.voiceStateChannelIdSummaryForGuild;
                var22 = var16 !== var7;
                var _closure3_slot22 = var22;
                var16 = var20.voiceStatePrivateChannelId;
                var7 = var11.voiceStatePrivateChannelId;
                var7 = var16 !== var7;
                var23 = var20.activityLaunchJoinStates;
                var16 = var11.activityLaunchJoinStates;
                var28 = var23 !== var16;
                var _closure3_slot23 = var28;
                var23 = var20.authorizedAppsTokens;
                var16 = var11.authorizedAppsTokens;
                var27 = var23 !== var16;
                var _closure3_slot24 = var27;
                var26 = var20.displayNameStylesEnabled;
                var24 = var11.displayNameStylesEnabled;
                var11 = var20.currentUserDisplayNameStyles;
                var23 = var25 == var11;
                var16 = undefined;
                if(var23) { _fun0019_ip = 171; continue _fun0019 }
case 172:
                var16 = var11.fontId;
case 171:
                var11 = _closure2_slot0;
                var23 = var11.currentUserDisplayNameStyles;
                var53 = var25 == var23;
                var11 = undefined;
                if(var53) { _fun0019_ip = 173; continue _fun0019 }
case 174:
                var11 = var23.fontId;
case 173:
                var23 = var16 !== var11;
                var _closure3_slot25 = var23;
                var16 = _closure1_slot0;
                var11 = _closure1_slot2;
                var11 = var11[var52];
                var54 = var16.bind(var4)(var11);
                var53 = var54.areArraysShallowEqual;
                var52 = var20.fetchingSkuIds;
                var16 = _closure2_slot0;
                var11 = var16.fetchingSkuIds;
                var11 = var53.bind(var54)(var52, var11);
                var11 = !var11;
                var _closure3_slot26 = var11;
                var52 = var20.voiceInviteDataByChannelId;
                var16 = var16.voiceInviteDataByChannelId;
                var16 = var52 !== var16;
                var _closure3_slot27 = var16;
                if(var19) { _fun0019_ip = 175; continue _fun0019 }
case 176:
                if(var51) { _fun0019_ip = 175; continue _fun0019 }
case 177:
                if(!(var50 === var49)) { _fun0019_ip = 175; continue _fun0019 }
case 178:
                if(var48) { _fun0019_ip = 175; continue _fun0019 }
case 179:
                var49 = var20.messages;
                var48 = _closure2_slot0;
                var48 = var48.messages;
                if(!(var49 === var48)) { _fun0019_ip = 175; continue _fun0019 }
case 180:
                var49 = var20.editingMessageId;
                var48 = _closure2_slot0;
                var48 = var48.editingMessageId;
                if(!(var49 === var48)) { _fun0019_ip = 175; continue _fun0019 }
case 181:
                var49 = var20.replyingMessageId;
                var48 = _closure2_slot0;
                var48 = var48.replyingMessageId;
                if(!(var49 === var48)) { _fun0019_ip = 175; continue _fun0019 }
case 182:
                if(var7) { _fun0019_ip = 175; continue _fun0019 }
case 183:
                var49 = var20.messageAuthorActivities;
                var48 = _closure2_slot0;
                var48 = var48.messageAuthorActivities;
                if(!(var49 === var48)) { _fun0019_ip = 175; continue _fun0019 }
case 184:
                var49 = var20.oldestUnreadMessageId;
                var48 = _closure2_slot0;
                var48 = var48.oldestUnreadMessageId;
                if(!(var49 === var48)) { _fun0019_ip = 175; continue _fun0019 }
case 185:
                var49 = var20.invites;
                var48 = _closure2_slot0;
                var48 = var48.invites;
                if(!(var49 === var48)) { _fun0019_ip = 175; continue _fun0019 }
case 186:
                var49 = var20.appDirectoryEmbedApplications;
                var48 = _closure2_slot0;
                var48 = var48.appDirectoryEmbedApplications;
                if(!(var49 === var48)) { _fun0019_ip = 175; continue _fun0019 }
case 187:
                var49 = var20.invalidAppDirectoryEmbedApplicationIds;
                var48 = _closure2_slot0;
                var48 = var48.invalidAppDirectoryEmbedApplicationIds;
                if(!(var49 === var48)) { _fun0019_ip = 175; continue _fun0019 }
case 188:
                var49 = var20.appDirectoryEmbedApplicationFetchStates;
                var48 = _closure2_slot0;
                var48 = var48.appDirectoryEmbedApplicationFetchStates;
                if(!(var49 === var48)) { _fun0019_ip = 175; continue _fun0019 }
case 189:
                var49 = var20.guildTemplates;
                var48 = _closure2_slot0;
                var48 = var48.guildTemplates;
                if(!(var49 === var48)) { _fun0019_ip = 175; continue _fun0019 }
case 190:
                var49 = var20.buildOverrides;
                var48 = _closure2_slot0;
                var48 = var48.buildOverrides;
                if(!(var49 === var48)) { _fun0019_ip = 175; continue _fun0019 }
case 191:
                var49 = var20.experimentEmbeds;
                var48 = _closure2_slot0;
                var48 = var48.experimentEmbeds;
                if(!(var49 === var48)) { _fun0019_ip = 175; continue _fun0019 }
case 192:
                var49 = var20.quests;
                var48 = _closure2_slot0;
                var48 = var48.quests;
                if(!(var49 === var48)) { _fun0019_ip = 175; continue _fun0019 }
case 193:
                var49 = var20.isFetchingCurrentQuests;
                var48 = _closure2_slot0;
                var48 = var48.isFetchingCurrentQuests;
                if(!(var49 === var48)) { _fun0019_ip = 175; continue _fun0019 }
case 194:
                var49 = var20.participantsLength;
                var48 = _closure2_slot0;
                var48 = var48.participantsLength;
                if(!(var49 === var48)) { _fun0019_ip = 175; continue _fun0019 }
case 195:
                var49 = var20.isMessagesReady;
                var48 = _closure2_slot0;
                var48 = var48.isMessagesReady;
                if(!(var49 === var48)) { _fun0019_ip = 175; continue _fun0019 }
case 196:
                var49 = var20.channelThreadsVersion;
                var48 = _closure2_slot0;
                var48 = var48.channelThreadsVersion;
                if(!(var49 === var48)) { _fun0019_ip = 175; continue _fun0019 }
case 197:
                var49 = var20.rsvpVersion;
                var48 = _closure2_slot0;
                var48 = var48.rsvpVersion;
                if(!(var49 === var48)) { _fun0019_ip = 175; continue _fun0019 }
case 198:
                var49 = var20.repliedIds;
                var48 = _closure2_slot0;
                var48 = var48.repliedIds;
                if(!(var49 === var48)) { _fun0019_ip = 175; continue _fun0019 }
case 199:
                var49 = var20.hasLoadedExperiments;
                var48 = _closure2_slot0;
                var48 = var48.hasLoadedExperiments;
                if(!(var49 === var48)) { _fun0019_ip = 175; continue _fun0019 }
case 200:
                var49 = var20.isMessageRequest;
                var48 = _closure2_slot0;
                var48 = var48.isMessageRequest;
                if(!(var49 === var48)) { _fun0019_ip = 175; continue _fun0019 }
case 201:
                var49 = var20.isSpamMessageRequest;
                var48 = _closure2_slot0;
                var48 = var48.isSpamMessageRequest;
                if(!(var49 === var48)) { _fun0019_ip = 175; continue _fun0019 }
case 202:
                var49 = var20.currentUserCommunicationDisabled;
                var48 = _closure2_slot0;
                var48 = var48.currentUserCommunicationDisabled;
                if(!(var49 === var48)) { _fun0019_ip = 175; continue _fun0019 }
case 203:
                var49 = var20.userSettingsLocale;
                var48 = _closure2_slot0;
                var48 = var48.userSettingsLocale;
                if(!(var49 === var48)) { _fun0019_ip = 175; continue _fun0019 }
case 204:
                var49 = var20.selectedSummary;
                var48 = _closure2_slot0;
                var48 = var48.selectedSummary;
                if(!(var49 === var48)) { _fun0019_ip = 175; continue _fun0019 }
case 205:
                var49 = var20.showPushFeedback;
                var48 = _closure2_slot0;
                var48 = var48.showPushFeedback;
                if(!(var49 === var48)) { _fun0019_ip = 175; continue _fun0019 }
case 206:
                var49 = var20.cacheStoreLoaded;
                var48 = _closure2_slot0;
                var48 = var48.cacheStoreLoaded;
                if(!(var49 === var48)) { _fun0019_ip = 175; continue _fun0019 }
case 207:
                if(var47) { _fun0019_ip = 175; continue _fun0019 }
case 208:
                if(var46) { _fun0019_ip = 175; continue _fun0019 }
case 209:
                if(var45) { _fun0019_ip = 175; continue _fun0019 }
case 210:
                if(var44) { _fun0019_ip = 175; continue _fun0019 }
case 211:
                if(!(var43 === var42)) { _fun0019_ip = 175; continue _fun0019 }
case 212:
                if(var41) { _fun0019_ip = 175; continue _fun0019 }
case 213:
                if(var40) { _fun0019_ip = 175; continue _fun0019 }
case 214:
                if(var39) { _fun0019_ip = 175; continue _fun0019 }
case 215:
                if(var38) { _fun0019_ip = 175; continue _fun0019 }
case 216:
                if(!(var25 == var14)) { _fun0019_ip = 175; continue _fun0019 }
case 217:
                if(!(var25 == var12)) { _fun0019_ip = 175; continue _fun0019 }
case 218:
                var39 = var20.androidKeyboardHeight;
                var38 = _closure2_slot0;
                var38 = var38.androidKeyboardHeight;
                if(!(var39 === var38)) { _fun0019_ip = 175; continue _fun0019 }
case 219:
                var39 = var20.mediaPostPreviewEmbeds;
                var38 = _closure2_slot0;
                var38 = var38.mediaPostPreviewEmbeds;
                if(!(var39 === var38)) { _fun0019_ip = 175; continue _fun0019 }
case 220:
                var39 = var20.shouldObscureSpoiler;
                var38 = _closure2_slot0;
                var38 = var38.shouldObscureSpoiler;
                if(!(var39 === var38)) { _fun0019_ip = 175; continue _fun0019 }
case 221:
                var39 = var20.shouldDisableInteractiveComponents;
                var38 = _closure2_slot0;
                var38 = var38.shouldDisableInteractiveComponents;
                if(!(var39 === var38)) { _fun0019_ip = 175; continue _fun0019 }
case 222:
                if(var37) { _fun0019_ip = 175; continue _fun0019 }
case 223:
                if(var36) { _fun0019_ip = 175; continue _fun0019 }
case 224:
                if(var35) { _fun0019_ip = 175; continue _fun0019 }
case 225:
                var36 = var20.threadStartingReferenceMessage;
                var35 = _closure2_slot0;
                var35 = var35.threadStartingReferenceMessage;
                if(!(var36 === var35)) { _fun0019_ip = 175; continue _fun0019 }
case 226:
                if(var34) { _fun0019_ip = 175; continue _fun0019 }
case 227:
                if(var33) { _fun0019_ip = 175; continue _fun0019 }
case 228:
                if(var32) { _fun0019_ip = 175; continue _fun0019 }
case 229:
                if(var31) { _fun0019_ip = 175; continue _fun0019 }
case 230:
                if(var30) { _fun0019_ip = 175; continue _fun0019 }
case 231:
                if(var29) { _fun0019_ip = 175; continue _fun0019 }
case 232:
                if(var28) { _fun0019_ip = 175; continue _fun0019 }
case 233:
                if(var27) { _fun0019_ip = 175; continue _fun0019 }
case 234:
                if(!(var26 === var24)) { _fun0019_ip = 175; continue _fun0019 }
case 235:
                if(var23) { _fun0019_ip = 175; continue _fun0019 }
case 236:
                if(var22) { _fun0019_ip = 175; continue _fun0019 }
case 237:
                if(var16) { _fun0019_ip = 175; continue _fun0019 }
case 238:
                if(var11) { _fun0019_ip = 175; continue _fun0019 }
case 239:
                var23 = _closure1_slot22;
                var11 = _closure2_slot0;
                var16 = var11.channelId;
                var11 = var11.messages;
                var11 = var23.bind(var4)(var16, var11);
                _fun0019_ip = 85; continue _fun0019;
case 175:
                var11 = global;
                var11 = var11.Set;
                var16 = var11.prototype;
                var16 = Object.create(var16, {constructor: {value: var11}});
                var58 = var16;
                var11 = new var58[var11](var57);
                var16 = var11 instanceof Object ? var11 : var16;
                var _closure3_slot28 = var16;
                var23 = var20.editingMessageId;
                var11 = _closure2_slot0;
                var11 = var11.editingMessageId;
                if(!(var23 !== var11)) { _fun0019_ip = 240; continue _fun0019 }
case 241:
                var11 = _closure2_slot0;
                var11 = var11.editingMessageId;
                if(!(var25 != var11)) { _fun0019_ip = 242; continue _fun0019 }
case 243:
                var23 = var16.add;
                var11 = _closure2_slot0;
                var11 = var11.editingMessageId;
                var11 = var23.bind(var16)(var11);
case 242:
                var11 = var20.editingMessageId;
                if(!(var25 != var11)) { _fun0019_ip = 240; continue _fun0019 }
case 244:
                var23 = var16.add;
                var11 = var20.editingMessageId;
                var11 = var23.bind(var16)(var11);
case 240:
                var23 = var20.replyingMessageId;
                var11 = _closure2_slot0;
                var11 = var11.replyingMessageId;
                if(!(var23 !== var11)) { _fun0019_ip = 245; continue _fun0019 }
case 246:
                var11 = _closure2_slot0;
                var11 = var11.replyingMessageId;
                if(!(var25 != var11)) { _fun0019_ip = 247; continue _fun0019 }
case 248:
                var23 = var16.add;
                var11 = _closure2_slot0;
                var11 = var11.replyingMessageId;
                var11 = var23.bind(var16)(var11);
case 247:
                var11 = var20.replyingMessageId;
                if(!(var25 != var11)) { _fun0019_ip = 245; continue _fun0019 }
case 249:
                var23 = var16.add;
                var11 = var20.replyingMessageId;
                var11 = var23.bind(var16)(var11);
case 245:
                var23 = var20.isMessagesReady;
                var11 = _closure2_slot0;
                var11 = var11.isMessagesReady;
                if(!(var23 === var11)) { _fun0019_ip = 250; continue _fun0019 }
case 251:
                var23 = var20.isCallActive;
                var11 = _closure2_slot0;
                var11 = var11.isCallActive;
                if(!(var23 === var11)) { _fun0019_ip = 250; continue _fun0019 }
case 252:
                if(var7) { _fun0019_ip = 250; continue _fun0019 }
case 253:
                var11 = var20.participantsLength;
                var7 = _closure2_slot0;
                var7 = var7.participantsLength;
                if(!(var11 !== var7)) { _fun0019_ip = 254; continue _fun0019 }
case 250:
                var11 = _closure1_slot1;
                var23 = _closure1_slot2;
                var7 = 19;
                var7 = var23[var7];
                var24 = var11.bind(var4)(var7);
                var23 = var24.find;
                var7 = _closure2_slot0;
                var11 = var7.messages;
                var7 = var11.toArray;
                var11 = var7.bind(var11)();
                var7 = var11.reverse;
                var11 = var7.bind(var11)();
                var7 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.type;
                    var1 = _closure1_slot15;
                    var1 = var1.CALL;
                    var1 = var2 === var1;
                    return var1;
                };
                var7 = var23.bind(var24)(var11, var7);
                if(!(var25 != var7)) { _fun0019_ip = 254; continue _fun0019 }
case 255:
                var11 = var16.add;
                var7 = var7.id;
                var7 = var11.bind(var16)(var7);
case 254:
                var23 = var20.channelThreadsVersion;
                var7 = _closure2_slot0;
                var11 = var7.channelThreadsVersion;
                var11 = var23 !== var11;
                var _closure3_slot29 = var11;
                var23 = var20.rsvpVersion;
                var11 = var7.rsvpVersion;
                var11 = var23 !== var11;
                var _closure3_slot30 = var11;
                var23 = var20.repliedIds;
                var11 = var7.repliedIds;
                var11 = var23 !== var11;
                var _closure3_slot31 = var11;
                var11 = var20.hasLoadedExperiments;
                var7 = var7.hasLoadedExperiments;
                var7 = var11 !== var7;
                var _closure3_slot32 = var7;
                var11 = var20.communicationDisabledVersion;
                var23 = var25 != var11;
                var7 = -1;
                if(!var23) { _fun0019_ip = 256; continue _fun0019 }
case 257:
                var7 = var11;
case 256:
                var _closure3_slot33 = var7;
                var7 = var20.cacheStoreLoaded;
                var11 = !var7;
                if(!var11) { _fun0019_ip = 258; continue _fun0019 }
case 259:
                var7 = _closure2_slot0;
                var11 = var7.cacheStoreLoaded;
case 258:
                var _closure3_slot34 = var11;
                var7 = null;
                if(!var22) { _fun0019_ip = 260; continue _fun0019 }
case 261:
                var23 = _closure1_slot0;
                var24 = _closure1_slot2;
                var22 = 13;
                var22 = var24[var22];
                var24 = var23.bind(var4)(var22);
                var23 = var24.getVoiceChannelIdChangedAuthorIds;
                var26 = var20.voiceStateChannelIdSummaryForGuild;
                var27 = var25 != var26;
                var22 = null;
                if(!var27) { _fun0019_ip = 262; continue _fun0019 }
case 263:
                var22 = var26;
case 262:
                var26 = _closure2_slot0;
                var26 = var26.voiceStateChannelIdSummaryForGuild;
                var27 = var25 != var26;
                var25 = null;
                if(!var27) { _fun0019_ip = 264; continue _fun0019 }
case 265:
                var25 = var26;
case 264:
                var7 = var23.bind(var24)(var22, var25);
case 260:
                var _closure3_slot35 = var7;
                var7 = _closure2_slot0;
                var23 = var7.messages;
                var22 = var23.forEach;
                var21 = function(arg1) {
                    _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                        var1 = arg1;
                        var3 = _closure3_slot22;
                        if(!var3) { _fun0020_ip = 266; continue _fun0020 }
case 50:
                        var3 = _closure3_slot35;
                        var4 = null;
                        if(!(var4 != var3)) { _fun0020_ip = 266; continue _fun0020 }
case 31:
                        var3 = var1.author;
                        if(!(var4 != var3)) { _fun0020_ip = 266; continue _fun0020 }
case 33:
                        var5 = _closure3_slot35;
                        var4 = var5.has;
                        var3 = var1.author;
                        var3 = var3.id;
                        var3 = var4.bind(var5)(var3);
                        if(var3) { _fun0020_ip = 230; continue _fun0020 }
case 266:
                        var3 = _closure3_slot21;
                        if(!var3) { _fun0020_ip = 267; continue _fun0020 }
case 39:
                        var3 = var1.activity;
                        var4 = null;
                        var5 = var4 == var3;
                        var4 = undefined;
                        if(var5) { _fun0020_ip = 268; continue _fun0020 }
case 269:
                        var4 = var3.type;
case 268:
                        var3 = _closure1_slot12;
                        var3 = var3.STREAM_REQUEST;
                        if(!(var4 !== var3)) { _fun0020_ip = 270; continue _fun0020 }
case 267:
                        var3 = _closure3_slot32;
                        if(!var3) { _fun0020_ip = 271; continue _fun0020 }
case 68:
                        var4 = var1.type;
                        var3 = _closure1_slot15;
                        var3 = var3.USER_JOIN;
                        if(!(var4 !== var3)) { _fun0020_ip = 272; continue _fun0020 }
case 271:
                        var3 = _closure3_slot31;
                        if(!var3) { _fun0020_ip = 273; continue _fun0020 }
case 274:
                        var4 = var1.type;
                        var3 = _closure1_slot15;
                        var3 = var3.REPLY;
                        if(!(var4 === var3)) { _fun0020_ip = 273; continue _fun0020 }
case 58:
                        var3 = var1.messageReference;
                        var4 = null;
                        if(!(var4 != var3)) { _fun0020_ip = 273; continue _fun0020 }
case 275:
                        var4 = _closure2_slot0;
                        var5 = var4.repliedIds;
                        var4 = var5.has;
                        var3 = var3.message_id;
                        var3 = var4.bind(var5)(var3);
                        if(var3) { _fun0020_ip = 276; continue _fun0020 }
case 273:
                        var3 = _closure3_slot29;
                        if(!var3) { _fun0020_ip = 277; continue _fun0020 }
case 278:
                        var4 = var1.hasFlag;
                        var3 = _closure1_slot14;
                        var3 = var3.HAS_THREAD;
                        var3 = var4.bind(var1)(var3);
                        if(var3) { _fun0020_ip = 279; continue _fun0020 }
case 277:
                        var3 = _closure3_slot30;
                        if(!var3) { _fun0020_ip = 280; continue _fun0020 }
case 24:
                        var3 = var1.codedLinks;
                        var4 = var3.length;
                        var3 = 0;
                        if(!(!(var4 > var3))) { _fun0020_ip = 281; continue _fun0020 }
case 280:
                        var3 = _closure3_slot27;
                        if(!var3) { _fun0020_ip = 282; continue _fun0020 }
case 283:
                        var3 = var1.codedLinks;
                        var4 = var3.length;
                        var3 = 0;
                        if(!(var4 > var3)) { _fun0020_ip = 282; continue _fun0020 }
case 284:
                        var4 = _closure1_slot20;
                        var3 = var1.codedLinks;
                        var11 = undefined;
                        var10 = var4.bind(var11)(var3);
                        var4 = var10.bind(var11)();
                        var3 = var4.done;
                        var8 = 35;
                        var7 = null;
                        var6 = 34;
                        var5 = var4;
                        var4 = undefined;
                        if(var3) { _fun0020_ip = 282; continue _fun0020 }
case 285:
                        var3 = var5.value;
                        var13 = var3.type;
                        var14 = var3.code;
                        var15 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var3 = var3[var6];
                        var3 = var15.bind(var11)(var3);
                        var3 = var3.CodedLinkType;
                        var3 = var3.INVITE;
                        if(!(var13 === var3)) { _fun0020_ip = 286; continue _fun0020 }
case 287:
                        var3 = _closure2_slot0;
                        var13 = var3.invites;
                        var3 = var13.get;
                        var14 = var3.bind(var13)(var14);
                        var4 = var14;
                        if(!(var7 != var14)) { _fun0020_ip = 286; continue _fun0020 }
case 288:
                        var3 = var14.channel;
                        var4 = var14;
                        if(!(var7 != var3)) { _fun0020_ip = 286; continue _fun0020 }
case 289:
                        var13 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var3 = var3[var8];
                        var13 = var13.bind(var11)(var3);
                        var3 = var13.isVoiceChannelInvite;
                        var3 = var3.bind(var13)(var14);
                        var4 = var14;
                        if(!var3) { _fun0020_ip = 286; continue _fun0020 }
case 290:
                        var3 = var14.channel;
                        var15 = var3.id;
                        var3 = _closure3_slot0;
                        var3 = var3.voiceInviteDataByChannelId;
                        var13 = var3[var15];
                        var3 = _closure2_slot0;
                        var3 = var3.voiceInviteDataByChannelId;
                        var3 = var3[var15];
                        var4 = var14;
                        if(!(var13 === var3)) { _fun0020_ip = 291; continue _fun0020 }
case 286:
                        var13 = var10.bind(var11)();
                        var3 = var13.done;
                        var5 = var13;
                        if(var3) { _fun0020_ip = 282; continue _fun0020 }
case 292:
                        _fun0020_ip = 285; continue _fun0020;
case 291:
                        var5 = _closure3_slot28;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        var3 = undefined;
                        return var3;
case 282:
                        var3 = _closure3_slot19;
                        if(!var3) { _fun0020_ip = 293; continue _fun0020 }
case 294:
                        var4 = var1.type;
                        var3 = _closure1_slot15;
                        var3 = var3.EMOJI_ADDED;
                        if(!(var4 !== var3)) { _fun0020_ip = 295; continue _fun0020 }
case 293:
                        var3 = _closure3_slot10;
                        if(var3) { _fun0020_ip = 296; continue _fun0020 }
case 297:
                        var3 = _closure3_slot7;
                        if(!var3) { _fun0020_ip = 298; continue _fun0020 }
case 299:
                        var4 = _closure2_slot0;
                        var5 = var4.guildId;
                        var4 = null;
                        if(!(var4 != var5)) { _fun0020_ip = 298; continue _fun0020 }
case 300:
                        var6 = _closure1_slot7;
                        var3 = _closure2_slot0;
                        var5 = var3.guildId;
                        var3 = var1.author;
                        var4 = var3.id;
                        var3 = undefined;
                        var4 = var6.bind(var3)(var5, var4);
                        var3 = _closure3_slot33;
                        if(!(!(var4 > var3))) { _fun0020_ip = 296; continue _fun0020 }
case 298:
                        var3 = _closure3_slot8;
                        if(!var3) { _fun0020_ip = 301; continue _fun0020 }
case 302:
                        var4 = _closure2_slot0;
                        var4 = var4.guildId;
                        var5 = null;
                        if(!(var5 != var4)) { _fun0020_ip = 301; continue _fun0020 }
case 303:
                        var6 = var1.author;
                        var7 = var5 == var6;
                        var4 = undefined;
                        if(var7) { _fun0020_ip = 304; continue _fun0020 }
case 305:
                        var4 = var6.id;
case 304:
                        if(!(var5 == var4)) { _fun0020_ip = 306; continue _fun0020 }
case 301:
                        var4 = _closure3_slot9;
                        if(!var4) { _fun0020_ip = 307; continue _fun0020 }
case 308:
                        var4 = var1.author;
                        var5 = var4.id;
                        var4 = _closure2_slot0;
                        var4 = var4.currentUserId;
                        if(!(var5 !== var4)) { _fun0020_ip = 309; continue _fun0020 }
case 307:
                        var4 = _closure3_slot2;
                        if(!var4) { _fun0020_ip = 310; continue _fun0020 }
case 311:
                        var4 = _closure3_slot0;
                        var5 = var4.interactionStates;
                        var4 = var1.id;
                        var5 = var5[var4];
                        var4 = _closure2_slot0;
                        var6 = var4.interactionStates;
                        var4 = var1.id;
                        var4 = var6[var4];
                        if(!(var5 === var4)) { _fun0020_ip = 312; continue _fun0020 }
case 310:
                        var4 = _closure3_slot5;
                        if(!var4) { _fun0020_ip = 313; continue _fun0020 }
case 314:
                        var4 = _closure3_slot0;
                        var6 = var4.interactionComponentStates;
                        var5 = var6.get;
                        var4 = var1.id;
                        var5 = var5.bind(var6)(var4);
                        var4 = _closure2_slot0;
                        var7 = var4.interactionComponentStates;
                        var6 = var7.get;
                        var4 = var1.id;
                        var4 = var6.bind(var7)(var4);
                        if(!(var5 === var4)) { _fun0020_ip = 315; continue _fun0020 }
case 313:
                        var4 = _closure3_slot6;
                        if(!var4) { _fun0020_ip = 316; continue _fun0020 }
case 317:
                        var4 = var1.components;
                        var5 = var4.length;
                        var4 = 0;
                        if(!(var4 === var5)) { _fun0020_ip = 318; continue _fun0020 }
case 316:
                        var4 = _closure3_slot3;
                        if(!var4) { _fun0020_ip = 147; continue _fun0020 }
case 142:
                        var4 = _closure3_slot0;
                        var5 = var4.channelPolls;
                        var4 = var1.id;
                        var5 = var5[var4];
                        var4 = _closure2_slot0;
                        var6 = var4.channelPolls;
                        var4 = var1.id;
                        var4 = var6[var4];
                        if(!(var5 === var4)) { _fun0020_ip = 319; continue _fun0020 }
case 147:
                        var4 = _closure3_slot4;
                        if(!var4) { _fun0020_ip = 320; continue _fun0020 }
case 321:
                        var5 = var1.messageReference;
                        var4 = null;
                        var7 = var4 == var5;
                        var6 = undefined;
                        if(var7) { _fun0020_ip = 322; continue _fun0020 }
case 323:
                        var6 = var5.message_id;
case 322:
                        if(!(var4 != var6)) { _fun0020_ip = 320; continue _fun0020 }
case 324:
                        var4 = _closure3_slot0;
                        var4 = var4.messageReferencePolls;
                        var5 = var4[var6];
                        var4 = _closure2_slot0;
                        var4 = var4.messageReferencePolls;
                        var4 = var4[var6];
                        if(!(var5 === var4)) { _fun0020_ip = 325; continue _fun0020 }
case 320:
                        var4 = _closure3_slot13;
                        if(!var4) { _fun0020_ip = 326; continue _fun0020 }
case 327:
                        var4 = _closure3_slot0;
                        var6 = var4.unloadedContentEntryMessageIds;
                        var5 = var6.has;
                        var4 = var1.id;
                        var5 = var5.bind(var6)(var4);
                        var4 = _closure2_slot0;
                        var7 = var4.unloadedContentEntryMessageIds;
                        var6 = var7.has;
                        var4 = var1.id;
                        var4 = var6.bind(var7)(var4);
                        if(!(var5 === var4)) { _fun0020_ip = 198; continue _fun0020 }
case 326:
                        var4 = _closure2_slot0;
                        var5 = var4.channel;
                        var4 = var5.isForumPost;
                        var4 = var4.bind(var5)();
                        if(!var4) { _fun0020_ip = 328; continue _fun0020 }
case 329:
                        var4 = _closure3_slot11;
                        if(var4) { _fun0020_ip = 330; continue _fun0020 }
case 331:
                        var4 = _closure3_slot12;
                        if(!var4) { _fun0020_ip = 328; continue _fun0020 }
case 330:
                        var5 = var1.id;
                        var8 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var4 = 20;
                        var6 = var6[var4];
                        var4 = undefined;
                        var8 = var8.bind(var4)(var6);
                        var6 = var8.castChannelIdAsMessageId;
                        var4 = _closure2_slot0;
                        var4 = var4.channelId;
                        var4 = var6.bind(var8)(var4);
                        if(!(var5 !== var4)) { _fun0020_ip = 332; continue _fun0020 }
case 328:
                        var4 = _closure3_slot15;
                        if(!var4) { _fun0020_ip = 333; continue _fun0020 }
case 334:
                        var5 = var1.activityInstance;
                        var4 = null;
                        if(!(var4 == var5)) { _fun0020_ip = 335; continue _fun0020 }
case 333:
                        var4 = _closure3_slot16;
                        if(!var4) { _fun0020_ip = 336; continue _fun0020 }
case 337:
                        var8 = var1.activity;
                        var6 = null;
                        var9 = var6 == var8;
                        var5 = undefined;
                        if(var9) { _fun0020_ip = 338; continue _fun0020 }
case 339:
                        var5 = var8.party_id;
case 338:
                        var4 = var6 != var5;
case 336:
                        if(!var4) { _fun0020_ip = 340; continue _fun0020 }
case 341:
                        var6 = _closure3_slot28;
                        var5 = var6.add;
                        var4 = var1.id;
                        var4 = var5.bind(var6)(var4);
case 340:
                        var4 = _closure3_slot24;
                        if(!var4) { _fun0020_ip = 342; continue _fun0020 }
case 343:
                        var5 = var1.application;
                        var4 = null;
                        if(!(var4 == var5)) { _fun0020_ip = 344; continue _fun0020 }
case 342:
                        var4 = _closure3_slot25;
                        if(!var4) { _fun0020_ip = 345; continue _fun0020 }
case 346:
                        var4 = var1.author;
                        var5 = null;
                        var6 = var5 == var4;
                        var5 = undefined;
                        if(var6) { _fun0020_ip = 347; continue _fun0020 }
case 348:
                        var5 = var4.id;
case 347:
                        var4 = _closure2_slot0;
                        var4 = var4.currentUserId;
                        if(!(var5 !== var4)) { _fun0020_ip = 349; continue _fun0020 }
case 345:
                        var4 = _closure3_slot26;
                        if(var4) { _fun0020_ip = 350; continue _fun0020 }
case 351:
                        var4 = _closure3_slot14;
                        if(!var4) { _fun0020_ip = 352; continue _fun0020 }
case 350:
                        var4 = var1.codedLinks;
                        var4 = var4.length;
                        var16 = 0;
                        if(!(var4 > var16)) { _fun0020_ip = 352; continue _fun0020 }
case 353:
                        var5 = _closure1_slot20;
                        var4 = var1.codedLinks;
                        var14 = undefined;
                        var13 = var5.bind(var14)(var4);
                        var5 = var13.bind(var14)();
                        var4 = var5.done;
                        var12 = null;
                        var11 = '-';
                        var10 = 1;
                        var9 = 34;
                        var8 = var5;
                        var6 = undefined;
                        var5 = undefined;
                        if(var4) { _fun0020_ip = 352; continue _fun0020 }
case 354:
                        var4 = var8.value;
                        var18 = var4.type;
                        var17 = var4.code;
                        var19 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var4 = var4[var9];
                        var4 = var19.bind(var14)(var4);
                        var4 = var4.CodedLinkType;
                        var4 = var4.SOCIAL_LAYER_STOREFRONT;
                        if(!(var18 !== var4)) { _fun0020_ip = 355; continue _fun0020 }
case 356:
                        var19 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var4 = var4[var9];
                        var4 = var19.bind(var14)(var4);
                        var4 = var4.CodedLinkType;
                        var4 = var4.SOCIAL_LAYER_STOREFRONT_APP;
                        if(!(var18 === var4)) { _fun0020_ip = 357; continue _fun0020 }
case 355:
                        var4 = var17.split;
                        var17 = var4.bind(var17)(var11);
                        var4 = _closure1_slot4;
                        var4 = var4.bind(var14)(var17, var10);
                        var18 = var4[var16];
                        var4 = _closure3_slot0;
                        var17 = var4.fetchingSkuIds;
                        var4 = var17.includes;
                        var4 = var4.bind(var17)(var18);
                        if(var4) { _fun0020_ip = 358; continue _fun0020 }
case 359:
                        var17 = _closure1_slot10;
                        var4 = var17.get;
                        var17 = var4.bind(var17)(var18);
                        var6 = var18;
                        var5 = var17;
                        if(!(var12 != var17)) { _fun0020_ip = 357; continue _fun0020 }
case 360:
                        var4 = _closure3_slot0;
                        var20 = var4.invalidApplicationIds;
                        var19 = var20.includes;
                        var4 = var17.applicationId;
                        var4 = var19.bind(var20)(var4);
                        var6 = var18;
                        var5 = var17;
                        if(var4) { _fun0020_ip = 361; continue _fun0020 }
case 357:
                        var17 = var13.bind(var14)();
                        var4 = var17.done;
                        var8 = var17;
                        if(var4) { _fun0020_ip = 352; continue _fun0020 }
case 362:
                        _fun0020_ip = 354; continue _fun0020;
case 361:
                        var6 = _closure3_slot28;
                        var5 = var6.add;
                        var4 = var1.id;
                        var4 = var5.bind(var6)(var4);
                        var4 = undefined;
                        return var4;
case 358:
                        var6 = _closure3_slot28;
                        var5 = var6.add;
                        var4 = var1.id;
                        var4 = var5.bind(var6)(var4);
                        var4 = undefined;
                        return var4;
case 352:
                        var4 = var1.author;
                        var5 = null;
                        if(!(var5 != var4)) { _fun0020_ip = 236; continue _fun0020 }
case 363:
                        var9 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var10 = 36;
                        var8 = var4[var10];
                        var4 = undefined;
                        var12 = var9.bind(var4)(var8);
                        var11 = var12.messageAuthorActivitiesChanged;
                        var9 = _closure3_slot0;
                        var8 = _closure2_slot0;
                        var8 = var11.bind(var12)(var1, var9, var8);
                        if(var8) { _fun0020_ip = 364; continue _fun0020 }
case 365:
                        var9 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var8 = var8[var10];
                        var12 = var9.bind(var4)(var8);
                        var11 = var12.codedLinksChanged;
                        var9 = _closure3_slot0;
                        var8 = _closure2_slot0;
                        var8 = var11.bind(var12)(var1, var9, var8);
                        if(var8) { _fun0020_ip = 364; continue _fun0020 }
case 366:
                        var8 = _closure3_slot1;
                        if(!var8) { _fun0020_ip = 367; continue _fun0020 }
case 368:
                        var9 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var8 = var8[var10];
                        var12 = var9.bind(var4)(var8);
                        var11 = var12.giftCodesChanged;
                        var9 = _closure3_slot0;
                        var8 = _closure2_slot0;
                        var8 = var11.bind(var12)(var1, var9, var8);
                        if(var8) { _fun0020_ip = 364; continue _fun0020 }
case 367:
                        var9 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var8 = var8[var10];
                        var11 = var9.bind(var4)(var8);
                        var10 = var11.mediaPostPreviewEmbedsChanged;
                        var9 = _closure3_slot0;
                        var8 = _closure2_slot0;
                        var8 = var10.bind(var11)(var1, var9, var8);
                        if(var8) { _fun0020_ip = 364; continue _fun0020 }
case 369:
                        var8 = _closure3_slot34;
                        if(!var8) { _fun0020_ip = 370; continue _fun0020 }
case 371:
                        var9 = var1.embeds;
                        var10 = var9.length;
                        var9 = 0;
                        var8 = var10 > var9;
case 370:
                        if(!var8) { _fun0020_ip = 372; continue _fun0020 }
case 373:
                        var10 = _closure3_slot28;
                        var9 = var10.add;
                        var8 = var1.id;
                        var8 = var9.bind(var10)(var8);
case 372:
                        var8 = var1.type;
                        var6 = _closure1_slot15;
                        var6 = var6.THREAD_STARTER_MESSAGE;
                        var6 = var8 === var6;
                        if(!var6) { _fun0020_ip = 374; continue _fun0020 }
case 375:
                        var8 = _closure3_slot0;
                        var9 = var8.threadStartingReferenceMessage;
                        var8 = _closure2_slot0;
                        var8 = var8.threadStartingReferenceMessage;
                        var6 = var9 !== var8;
case 374:
                        if(!var6) { _fun0020_ip = 376; continue _fun0020 }
case 377:
                        var9 = _closure3_slot28;
                        var8 = var9.add;
                        var6 = var1.id;
                        var6 = var8.bind(var9)(var6);
case 376:
                        var6 = _closure3_slot14;
                        if(!var6) { _fun0020_ip = 378; continue _fun0020 }
case 379:
                        var8 = var1.applicationId;
                        var6 = var5 != var8;
case 378:
                        if(!var6) { _fun0020_ip = 380; continue _fun0020 }
case 381:
                        var8 = _closure3_slot0;
                        var10 = var8.invalidApplicationIds;
                        var9 = var10.includes;
                        var8 = var1.applicationId;
                        var6 = var9.bind(var10)(var8);
case 380:
                        if(!var6) { _fun0020_ip = 382; continue _fun0020 }
case 383:
                        var9 = _closure3_slot28;
                        var8 = var9.add;
                        var6 = var1.id;
                        var6 = var8.bind(var9)(var6);
case 382:
                        var6 = _closure3_slot17;
                        if(!var6) { _fun0020_ip = 384; continue _fun0020 }
case 385:
                        var9 = var1.referralTrialOfferId;
                        var6 = var5 != var9;
                        if(!var6) { _fun0020_ip = 386; continue _fun0020 }
case 387:
                        var7 = _closure2_slot0;
                        var8 = var7.resolvedReferralTrialOfferIds;
                        var7 = var8.includes;
                        var6 = var7.bind(var8)(var9);
case 386:
                        if(!var6) { _fun0020_ip = 384; continue _fun0020 }
case 388:
                        var8 = _closure3_slot28;
                        var7 = var8.add;
                        var6 = var1.id;
                        var6 = var7.bind(var8)(var6);
case 384:
                        var6 = _closure3_slot18;
                        if(!var6) { _fun0020_ip = 389; continue _fun0020 }
case 390:
                        var7 = var1.codedLinks;
                        var8 = var7.length;
                        var7 = 0;
                        var6 = var8 > var7;
case 389:
                        if(!var6) { _fun0020_ip = 391; continue _fun0020 }
case 392:
                        var8 = _closure3_slot28;
                        var7 = var8.add;
                        var6 = var1.id;
                        var6 = var7.bind(var8)(var6);
case 391:
                        var6 = _closure3_slot20;
                        if(var6) { _fun0020_ip = 393; continue _fun0020 }
case 394:
                        var6 = _closure3_slot23;
                        if(!var6) { _fun0020_ip = 236; continue _fun0020 }
case 393:
                        var6 = var1.activity;
                        var7 = var5 == var6;
                        var4 = undefined;
                        if(var7) { _fun0020_ip = 395; continue _fun0020 }
case 396:
                        var4 = var6.party_id;
case 395:
                        if(!(var5 != var4)) { _fun0020_ip = 236; continue _fun0020 }
case 397:
                        var6 = _closure3_slot28;
                        var5 = var6.add;
                        var4 = var1.id;
                        var4 = var5.bind(var6)(var4);
                        _fun0020_ip = 236; continue _fun0020;
case 364:
                        var6 = _closure3_slot28;
                        var5 = var6.add;
                        var4 = var1.id;
                        var4 = var5.bind(var6)(var4);
                        _fun0020_ip = 236; continue _fun0020;
case 349:
                        var6 = _closure3_slot28;
                        var5 = var6.add;
                        var4 = var1.id;
                        var4 = var5.bind(var6)(var4);
                        _fun0020_ip = 236; continue _fun0020;
case 344:
                        var6 = _closure3_slot28;
                        var5 = var6.add;
                        var4 = var1.id;
                        var4 = var5.bind(var6)(var4);
                        _fun0020_ip = 236; continue _fun0020;
case 335:
                        var6 = _closure3_slot28;
                        var5 = var6.add;
                        var4 = var1.id;
                        var4 = var5.bind(var6)(var4);
                        _fun0020_ip = 236; continue _fun0020;
case 332:
                        var6 = _closure3_slot28;
                        var5 = var6.add;
                        var4 = var1.id;
                        var4 = var5.bind(var6)(var4);
                        _fun0020_ip = 236; continue _fun0020;
case 198:
                        var6 = _closure3_slot28;
                        var5 = var6.add;
                        var4 = var1.id;
                        var4 = var5.bind(var6)(var4);
                        _fun0020_ip = 236; continue _fun0020;
case 325:
                        var6 = _closure3_slot28;
                        var5 = var6.add;
                        var4 = var1.id;
                        var4 = var5.bind(var6)(var4);
                        var4 = undefined;
                        return var4;
case 319:
                        var6 = _closure3_slot28;
                        var5 = var6.add;
                        var4 = var1.id;
                        var4 = var5.bind(var6)(var4);
                        _fun0020_ip = 236; continue _fun0020;
case 318:
                        var6 = _closure3_slot28;
                        var5 = var6.add;
                        var4 = var1.id;
                        var4 = var5.bind(var6)(var4);
                        _fun0020_ip = 236; continue _fun0020;
case 315:
                        var6 = _closure3_slot28;
                        var5 = var6.add;
                        var4 = var1.id;
                        var4 = var5.bind(var6)(var4);
                        _fun0020_ip = 236; continue _fun0020;
case 312:
                        var6 = _closure3_slot28;
                        var5 = var6.add;
                        var4 = var1.id;
                        var4 = var5.bind(var6)(var4);
                        _fun0020_ip = 236; continue _fun0020;
case 309:
                        var6 = _closure3_slot28;
                        var5 = var6.add;
                        var4 = var1.id;
                        var4 = var5.bind(var6)(var4);
                        _fun0020_ip = 236; continue _fun0020;
case 306:
                        var3 = _closure2_slot0;
                        var4 = var3.messageAuthorMembers;
                        var3 = var1.author;
                        var3 = var3.id;
                        var4 = var4[var3];
                        var3 = _closure3_slot0;
                        var5 = var3.messageAuthorMembers;
                        var3 = var1.author;
                        var3 = var3.id;
                        var3 = var5[var3];
                        if(!(var4 !== var3)) { _fun0020_ip = 236; continue _fun0020 }
case 398:
                        var5 = _closure3_slot28;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0020_ip = 236; continue _fun0020;
case 296:
                        var5 = _closure3_slot28;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0020_ip = 236; continue _fun0020;
case 295:
                        var5 = _closure3_slot28;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0020_ip = 236; continue _fun0020;
case 281:
                        var5 = _closure3_slot28;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0020_ip = 236; continue _fun0020;
case 279:
                        var5 = _closure3_slot28;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0020_ip = 236; continue _fun0020;
case 276:
                        var5 = _closure3_slot28;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        var3 = undefined;
                        return var3;
case 272:
                        var5 = _closure3_slot28;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0020_ip = 236; continue _fun0020;
case 270:
                        var5 = _closure3_slot28;
                        var4 = var5.add;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        _fun0020_ip = 236; continue _fun0020;
case 230:
                        var3 = _closure3_slot28;
                        var2 = var3.add;
                        var1 = var1.id;
                        var1 = var2.bind(var3)(var1);
case 236:
                        var1 = undefined;
                        return var1;
                    }
                };
                var21 = var22.bind(var23)(var21);
                var20 = var20.channelId;
                var7 = var7.channelId;
                var7 = var20 !== var7;
                if(var7) { _fun0019_ip = 399; continue _fun0019 }
case 400:
                var5 = var5.suppressRowAnimationSequenceId;
                var3 = var3.suppressRowAnimationSequenceId;
                var7 = var5 === var3;
case 399:
                var5 = _closure2_slot26;
                var3 = {};
                var3['forceRender'] = var19;
                if(var17) { _fun0019_ip = 401; continue _fun0019 }
case 402:
                var17 = var18;
case 401:
                var3['forceReload'] = var17;
                var3['updateMessageIds'] = var16;
                var3['scrollToMessageId'] = var15;
                var3['jumpTargetId'] = var14;
                var3['jumpType'] = var13;
                var3['focusTargetId'] = var12;
                var3['ignoreEmbedDescriptionCache'] = var11;
                var3['messagesNewlyLoaded'] = var10;
                var3['shouldInitialScroll'] = var9;
                var3['minimizeScrolling'] = var8;
                var3['isAnimated'] = var7;
                var3['hasJumpedToOriginalPost'] = var6;
                var3 = var5.bind(var4)(var3);
                var5 = _closure2_slot5;
                var3 = false;
                var3 = var5.bind(var4)(var3);
                var3 = _closure1_slot22;
                var1 = _closure2_slot0;
                var2 = var1.channelId;
                var1 = var1.messages;
                var1 = var3.bind(var4)(var2, var1);
case 85:
                var1 = undefined;
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        var3 = _closure1_slot19;
        var2 = _closure1_slot18;
        var1 = {};
        var8 = _closure1_slot17;
        var5 = 37;
        var5 = var10[var5];
        var6 = var6.bind(var4)(var5);
        var5 = {};
        var5['ref'] = var15;
        var15 = var9.style;
        var5['style'] = var15;
        var15 = true;
        var5['inverted'] = var15;
        var15 = var9.channelId;
        var5['channelId'] = var15;
        var15 = var9.alwaysRespectKeyboard;
        var5['alwaysRespectKeyboard'] = var15;
        var5['onChatScrollPosition'] = var14;
        var14 = var13.handleTapImage;
        var5['onTapImage'] = var14;
        var14 = var13.handleTapChannel;
        var5['onTapChannel'] = var14;
        var14 = var13.handleLongPressChannel;
        var5['onLongPressChannel'] = var14;
        var14 = var13.handleTapAttachmentLink;
        var5['onTapAttachmentLink'] = var14;
        var14 = var13.handleLongPressAttachmentLink;
        var5['onLongPressAttachmentLink'] = var14;
        var14 = var13.handleTapCall;
        var5['onTapCall'] = var14;
        var14 = var13.handleTapMention;
        var5['onTapMention'] = var14;
        var14 = var13.handleTapCommandMention;
        var5['onTapCommandMention'] = var14;
        var14 = var13.handleLongPressCommandMention;
        var5['onLongPressCommandMention'] = var14;
        var14 = var13.handleTapGameMention;
        var5['onTapGameMention'] = var14;
        var14 = var13.handleTapLink;
        var5['onTapLink'] = var14;
        var14 = var13.handleLongPressLink;
        var5['onLongPressLink'] = var14;
        var14 = var13.handleTapReaction;
        var5['onTapReaction'] = var14;
        var14 = var13.handleLongPressReaction;
        var5['onLongPressReaction'] = var14;
        var14 = var13.handleTapAvatar;
        var5['onTapAvatar'] = var14;
        var14 = var13.handleTapUsername;
        var5['onTapUsername'] = var14;
        var14 = var13.handleLongPressUsername;
        var5['onLongPressUsername'] = var14;
        var14 = var13.handleOpenSticker;
        var5['onTapSticker'] = var14;
        var14 = function handleLongPressSticker(arg1) {
            _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 38;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.getNativeSyntheticEventData;
                var2 = arg1;
                var2 = var3.bind(var4)(var2);
                var6 = var2.messageId;
                var3 = _closure2_slot9;
                var7 = var3.current;
                var3 = global;
                var5 = var3.Set;
                var3 = new Array(1);
                var3[0] = var6;
                var4 = var5.prototype;
                var4 = Object.create(var4, {constructor: {value: var5}});
                var9 = var4;
                var8 = var3;
                var3 = new var9[var5](var8, var7);
                var4 = var3 instanceof Object ? var3 : var4;
                var5 = null;
                if(!(var5 != var7)) { _fun0021_ip = 403; continue _fun0021 }
case 404:
                var3 = var4.add;
                var3 = var3.bind(var4)(var7);
case 403:
                var3 = _closure2_slot9;
                var5 = null;
                if(!(var7 !== var6)) { _fun0021_ip = 405; continue _fun0021 }
case 90:
                var5 = var6;
case 405:
                var3['current'] = var5;
                var3 = _closure2_slot26;
                var2 = {};
                var5 = true;
                var2['forceRender'] = var5;
                var2['updateMessageIds'] = var4;
                var2 = var3.bind(var1)(var2);
                return var1;
            }
        };
        var5['onLongPressSticker'] = var14;
        var14 = var13.handleLongPressMessage;
        var5['onLongPressMessage'] = var14;
        var14 = var13.handleInitiateReply;
        var5['onInitiateReply'] = var14;
        var14 = var13.handleInitiateEdit;
        var5['onInitiateEdit'] = var14;
        var14 = var13.handleInitiateThread;
        var5['onInitiateThread'] = var14;
        var14 = var13.handleTapMessage;
        var5['onTapMessage'] = var14;
        var14 = var13.handleDoubleTapMessage;
        var5['onDoubleTapMessage'] = var14;
        var14 = var13.handleTapSeparator;
        var5['onTapSeparator'] = var14;
        var14 = var13.handleTapInviteEmbed;
        var5['onTapInviteEmbed'] = var14;
        var14 = var13.handleTapInviteEmbedAccept;
        var5['onTapInviteEmbedAccept'] = var14;
        var14 = var13.handleTapJoinActivity;
        var5['onTapJoinActivity'] = var14;
        var14 = var13.handleTapJoinRichPresence;
        var5['onTapJoinRichPresence'] = var14;
        var14 = var9.onPressKey;
        var5['onPressKey'] = var14;
        var14 = var9.animateEmoji;
        var5['animateEmoji'] = var14;
        var14 = var13.handleTapGiftCodeEmbed;
        var5['onTapGiftCodeEmbed'] = var14;
        var14 = var13.handleTapCancelUploadItem;
        var5['onTapCancelUploadItem'] = var14;
        var14 = var13.handleTapReply;
        var5['onTapMessageReply'] = var14;
        var14 = var13.handleTapSummary;
        var5['onTapSummary'] = var14;
        var14 = var13.handleTapSummaryJump;
        var5['onTapSummaryJump'] = var14;
        var14 = var13.handleTapGiftCodeAccept;
        var5['onTapGiftCodeAccept'] = var14;
        var14 = var13.handleTapReferralRedeem;
        var5['onTapReferralRedeem'] = var14;
        var14 = var13.handleGiftIntentCardViewed;
        var5['onGiftIntentCardViewed'] = var14;
        var14 = var13.handleTapGiftIntentPrimaryCta;
        var5['onTapGiftIntentPrimaryCta'] = var14;
        var14 = var13.handleTapGiftIntentSecondaryCta;
        var5['onTapGiftIntentSecondaryCta'] = var14;
        var14 = var13.handleTapThreadEmbed;
        var5['onTapThreadEmbed'] = var14;
        var14 = var13.handleTapEmoji;
        var5['onTapEmoji'] = var14;
        var14 = var13.handleTapTimestamp;
        var5['onTapTimestamp'] = var14;
        var14 = var13.handleTapInlineCode;
        var5['onTapInlineCode'] = var14;
        var14 = var13.handleTapRoleIcon;
        var5['onTapRoleIcon'] = var14;
        var14 = var13.handleTapVoiceChannelBadge;
        var5['onTapVoiceChannelBadge'] = var14;
        var14 = var13.handleTapGameIcon;
        var5['onTapGameIcon'] = var14;
        var14 = var13.handleTapSuppressNotificationsIcon;
        var5['onTapSuppressNotificationsIcon'] = var14;
        var14 = var13.handleTapConnectionsRoleTag;
        var5['onTapConnectionsRoleTag'] = var14;
        var14 = var13.handleTapTimeoutIcon;
        var5['onTapTimeoutIcon'] = var14;
        var14 = var13.handleTapButtonActionComponent;
        var5['onTapButtonActionComponent'] = var14;
        var14 = var13.handleTapSelectActionComponent;
        var5['onTapSelectActionComponent'] = var14;
        var14 = var13.handleTapWelcomeReply;
        var5['onTapWelcomeReply'] = var14;
        var14 = var13.handleTapInviteToSpeak;
        var5['onTapInviteToSpeak'] = var14;
        var14 = var13.handleTapAutoModerationActions;
        var5['onTapAutoModerationActions'] = var14;
        var14 = var13.handleTapAutoModerationFeedback;
        var5['onTapAutoModerationFeedback'] = var14;
        var14 = var13.handleTapFollowForumPost;
        var5['onTapFollowForumPost'] = var14;
        var14 = var13.handleTapShareForumPost;
        var5['onTapShareForumPost'] = var14;
        var14 = var13.handleTapReactionOverflow;
        var5['onTapReactionOverflow'] = var14;
        var14 = function handleTapNavBar() {
            var1 = undefined;
            var4 = _closure2_slot31;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var5['onTapNavBar'] = var14;
        var14 = var13.handleCopyText;
        var5['onTapCopyText'] = var14;
        var14 = var13.handleTapOpTag;
        var5['onTapOpTag'] = var14;
        var14 = var13.handleTapTag;
        var5['onTapTag'] = var14;
        var14 = var13.handleMediaAttachmentPlaybackEnded;
        var5['onMediaAttachmentPlaybackEnded'] = var14;
        var14 = var13.handleMediaAttachmentPlaybackStarted;
        var5['onMediaAttachmentPlaybackStarted'] = var14;
        var14 = var13.handleVoiceMessagePlaybackFailed;
        var5['onVoiceMessagePlaybackFailed'] = var14;
        var14 = _closure1_slot23;
        var5['onTapShowAltText'] = var14;
        var14 = var13.handleTapPostPreviewEmbed;
        var5['onTapPostPreviewEmbed'] = var14;
        var14 = var13.handleTapDismissMediaPostSharePrompt;
        var5['onTapDismissMediaPostSharePrompt'] = var14;
        var14 = var13.handleTapObscuredMediaLearnMore;
        var5['onTapObscuredMediaLearnMore'] = var14;
        var14 = var13.onTapObscuredMediaToggle;
        var5['onTapObscuredMediaToggle'] = var14;
        var14 = var13.handleTapSafetyPolicyNoticeEmbed;
        var5['onTapSafetyPolicyNoticeEmbed'] = var14;
        var14 = var13.handleTapSafetySystemNotificationCta;
        var5['onTapSafetySystemNotificationCta'] = var14;
        var14 = var13.handleTapPollAnswer;
        var5['onTapPollAnswer'] = var14;
        var14 = var13.handleTapPollSubmitVote;
        var5['onTapPollSubmitVote'] = var14;
        var14 = var13.handleTapPollAction;
        var5['onTapPollAction'] = var14;
        var14 = var13.handleLongPressPollImage;
        var5['onLongPressPollImage'] = var14;
        var14 = var13.handleTapCtaButton;
        var5['onTapCtaButton'] = var14;
        var14 = var13.handleMessageAccessibilityAction;
        var5['onMessageAccessibilityAction'] = var14;
        var14 = var13.handleTapForwardFooter;
        var5['onTapForwardFooter'] = var14;
        var14 = var13.handleTapInlineForward;
        var5['onTapInlineForward'] = var14;
        var14 = var13.handleTapClanTagChiplet;
        var5['onTapClanTagChiplet'] = var14;
        var14 = var13.handleTapContentInventoryEntryEmbed;
        var5['onTapContentInventoryEntryEmbed'] = var14;
        var14 = var13.handleTapCheckpointCard;
        var5['onTapCheckpointCard'] = var14;
        var14 = var13.handleTapSoundmoji;
        var5['onTapSoundmoji'] = var14;
        var14 = var13.handleTapAppMessageEmbed;
        var5['onTapAppMessageEmbed'] = var14;
        var14 = var13.handleTapPreviewSharedClientTheme;
        var5['onTapPreviewSharedClientTheme'] = var14;
        var13 = var13.handleSharedClientThemeViewed;
        var5['onSharedClientThemeViewed'] = var13;
        var13 = var9.children;
        var5['children'] = var13;
        var13 = var9.HACK_fixModalInteraction;
        var5['HACK_fixModalInteraction'] = var13;
        var13 = function handleTapTableView() {
            _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 39;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var2);
                var2 = var4.isIOS;
                var2 = var2.bind(var4)();
                if(!var2) { _fun0022_ip = 406; continue _fun0022 }
case 407:
                var4 = _closure2_slot0;
                var4 = var4.keyboardType;
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 40;
                var3 = var6[var3];
                var3 = var5.bind(var1)(var3);
                var3 = var3.KeyboardTypes;
                var3 = var3.SYSTEM;
                var2 = var4 !== var3;
case 406:
                if(!var2) { _fun0022_ip = 405; continue _fun0022 }
case 65:
                var2 = _closure2_slot0;
                var2 = var2.chatInputRef;
                var3 = var2.current;
                var2 = null;
                if(!(var2 != var3)) { _fun0022_ip = 405; continue _fun0022 }
case 408:
                var2 = var3.closeCustomKeyboard;
                var2 = var2.bind(var3)();
case 405:
                return var1;
            }
        };
        var5['onTapTableView'] = var13;
        var13 = function handleFirstLayout(arg1) {
            var1 = arg1;
            var1 = var1.nativeEvent;
            var6 = var1.firstVisibleMessageIndex;
            var5 = var1.lastVisibleMessageIndex;
            var4 = var1.firstVisibleMessagePercentVisible;
            var1 = var1.lastVisibleMessagePercentVisible;
            var3 = _closure2_slot29;
            var2 = {};
            var2['firstVisibleMessageRowIndex'] = var6;
            var2['lastVisibleMessageRowIndex'] = var5;
            var2['firstVisibleMessagePercentVisible'] = var4;
            var2['lastVisibleMessagePercentVisible'] = var1;
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 41;
            var4 = var4[var1];
            var1 = undefined;
            var4 = var5.bind(var1)(var4);
            var4 = var4.QuestsVisibleMessagesChangedSource;
            var4 = var4.FIRST_LAYOUT;
            var2['source'] = var4;
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var5['onFirstLayout'] = var13;
        var12 = _closure1_slot24;
        var5['onMediaPlayFinishedAnalytics'] = var12;
        var11 = function handleMessageVisibilityChanged(arg1) {
            var1 = arg1;
            var1 = var1.nativeEvent;
            var6 = var1.firstVisibleMessageIndex;
            var5 = var1.lastVisibleMessageIndex;
            var4 = var1.firstVisibleMessagePercentVisible;
            var1 = var1.lastVisibleMessagePercentVisible;
            var3 = _closure2_slot29;
            var2 = {};
            var2['firstVisibleMessageRowIndex'] = var6;
            var2['lastVisibleMessageRowIndex'] = var5;
            var2['firstVisibleMessagePercentVisible'] = var4;
            var2['lastVisibleMessagePercentVisible'] = var1;
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 41;
            var4 = var4[var1];
            var1 = undefined;
            var4 = var5.bind(var1)(var4);
            var4 = var4.QuestsVisibleMessagesChangedSource;
            var4 = var4.VISIBILITY_CHANGED;
            var2['source'] = var4;
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var5['onMessageVisibilityChanged'] = var11;
        var6 = var8.bind(var4)(var6, var5);
        var5 = new Array(2);
        var5[0] = var6;
        var6 = 42;
        var6 = var10[var6];
        var6 = var7.bind(var4)(var6);
        var7 = var6.ChatTTITracker;
        var6 = {};
        var9 = var9.messages;
        var6['messages'] = var9;
        var6 = var8.bind(var4)(var7, var6);
        var5[1] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var7 = var7.bind(var8)(var4);
    var4 = 'Messages';
    var7['displayName'] = var4;
    var4 = var8.memo;
    var2 = function(arg1, arg2) {
        _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
            var3 = arg1;
            var2 = arg2;
            var6 = _closure1_slot1;
            var1 = _closure1_slot2;
            var7 = 33;
            var1 = var1[var7];
            var5 = undefined;
            var8 = var6.bind(var5)(var1);
            var6 = {};
            var1 = false;
            var6['shouldWarnLargeObjects'] = var1;
            var10 = ['interactionStates'];
            var13 = undefined;
            var12 = var3;
            var11 = var2;
            var9 = var6;
            var1 = var13[var8](var12, var11, var10, var9, var8);
            var6 = !var1;
            var1 = !var6;
            if(var6) { _fun0023_ip = 87; continue _fun0023 }
case 409:
            var6 = _closure1_slot1;
            var4 = _closure1_slot2;
            var4 = var4[var7];
            var4 = var6.bind(var5)(var4);
            var3 = var3.interactionStates;
            var2 = var2.interactionStates;
            var2 = var4.bind(var5)(var3, var2);
            var2 = !var2;
            var1 = !var2;
case 87:
            return var1;
        }
    };
    var2 = var4.bind(var8)(var7, var2);
    var4 = 43;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/MessagesRenderer.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();