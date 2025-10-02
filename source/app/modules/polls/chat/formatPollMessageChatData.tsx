// app/modules/polls/chat/formatPollMessageChatData.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var9;
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
            var9 = _closure1_slot13;
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
            var7 = _closure1_slot13;
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
    var _closure1_slot12 = var1;
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
    var _closure1_slot13 = var1;
    var5 = function reactionForId(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var9 = arg2;
            var3 = _closure1_slot12;
            var1 = undefined;
            var2 = arg1;
            var8 = var3.bind(var1)(var2);
            var3 = var8.bind(var1)();
            var2 = var3.done;
            var7 = global;
            var6 = '';
            var5 = 'number';
            var4 = var3;
            if(var2) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var2 = var4.value;
            var3 = var2.emoji;
            var3 = var3.id;
            var3 = typeof var3;
            if(!(var5 !== var3)) { _fun0004_ip = 38; continue _fun0004 }
case 30:
            var3 = var2.emoji;
            var3 = var3.id;
            _fun0004_ip = 39; continue _fun0004;
case 38:
            var10 = var2.emoji;
            var11 = var10.id;
            var10 = var7.HermesInternal;
            var10 = var10.concat;
            var3 = var10.bind(var6)(var11);
case 39:
            if(!(var3 !== var9)) { _fun0004_ip = 40; continue _fun0004 }
case 41:
            var10 = var8.bind(var1)();
            var3 = var10.done;
            var4 = var10;
            if(var3) { _fun0004_ip = 36; continue _fun0004 }
case 42:
            _fun0004_ip = 37; continue _fun0004;
case 40:
            return var2;
case 36:
            return var1;
        }
    };
    var _closure1_slot14 = var5;
    var1 = function transformPollEmoji(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var4 = arg1;
            var1 = arguments[1];
            var7 = undefined;
            if(!(var1 === var7)) { _fun0005_ip = 32; continue _fun0005 }
case 43:
            var1 = {};
case 32:
            var2 = var1.animateEmoji;
            if(!(var2 === var7)) { _fun0005_ip = 44; continue _fun0005 }
case 45:
            var2 = false;
case 44:
            var8 = var1.size;
            if(!(var8 === var7)) { _fun0005_ip = 46; continue _fun0005 }
case 47:
            var8 = 48;
case 46:
            var5 = null;
            if(!(var5 == var4)) { _fun0005_ip = 2; continue _fun0005 }
case 48:
            return var7;
case 2:
            var6 = var4.animated;
            var1 = var6;
            if(!(var5 == var6)) { _fun0005_ip = 49; continue _fun0005 }
case 50:
            var3 = var4.id;
            var1 = var6;
            if(!(var5 != var3)) { _fun0005_ip = 49; continue _fun0005 }
case 51:
            var9 = _closure1_slot4;
            var6 = var9.getCustomEmojiById;
            var3 = var4.id;
            var3 = var6.bind(var9)(var3);
            var9 = var5 == var3;
            var6 = undefined;
            if(var9) { _fun0005_ip = 41; continue _fun0005 }
case 52:
            var6 = var3.animated;
case 41:
            var3 = var5 != var6;
            if(!var3) { _fun0005_ip = 53; continue _fun0005 }
case 54:
            var3 = var6;
case 53:
            var1 = var3;
case 49:
            if(!var2) { _fun0005_ip = 55; continue _fun0005 }
case 56:
            var2 = var5 != var1;
case 55:
            if(!var2) { _fun0005_ip = 57; continue _fun0005 }
case 58:
            var2 = var1;
case 57:
            var1 = {};
            var3 = var4.id;
            var6 = var5 == var3;
            var3 = null;
            if(var6) { _fun0005_ip = 59; continue _fun0005 }
case 60:
            var10 = var4.id;
            var6 = global;
            var6 = var6.HermesInternal;
            var9 = var6.concat;
            var6 = '';
            var3 = var9.bind(var6)(var10);
case 59:
            var1['id'] = var3;
            var3 = var4.name;
            var1['name'] = var3;
            var3 = var4.id;
            if(!(var5 != var3)) { _fun0005_ip = 61; continue _fun0005 }
case 62:
            var3 = var4.name;
            _fun0005_ip = 63; continue _fun0005;
case 61:
            var9 = _closure1_slot1;
            var10 = _closure1_slot2;
            var6 = 9;
            var6 = var10[var6];
            var10 = var9.bind(var7)(var6);
            var9 = var10.convertSurrogateToName;
            var6 = var4.name;
            var3 = var9.bind(var10)(var6);
case 63:
            var1['displayName'] = var3;
            var3 = var4.id;
            if(!(var5 != var3)) { _fun0005_ip = 64; continue _fun0005 }
case 65:
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 11;
            var3 = var6[var3];
            var6 = var5.bind(var7)(var3);
            var5 = var6.getEmojiURL;
            var3 = {};
            var9 = var4.id;
            var3['id'] = var9;
            var3['animated'] = var2;
            var3['size'] = var8;
            var3 = var5.bind(var6)(var3);
            _fun0005_ip = 66; continue _fun0005;
case 64:
            var6 = _closure1_slot1;
            var8 = _closure1_slot2;
            var5 = 10;
            var5 = var8[var5];
            var6 = var6.bind(var7)(var5);
            var5 = var6.getURL;
            var4 = var4.name;
            var3 = var5.bind(var6)(var4);
case 66:
            var1['src'] = var3;
            var1['animated'] = var2;
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var4 = function isPollMessageDirectlyInteractive(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var3 = arg1;
            var2 = var3.poll;
            var1 = null;
            var1 = var1 == var2;
            if(var1) { _fun0006_ip = 67; continue _fun0006 }
case 68:
            var6 = _closure1_slot7;
            var5 = var6.getMessage;
            var4 = var3.channel_id;
            var2 = var3.id;
            var2 = var5.bind(var6)(var4, var2);
            var1 = var2 === var3;
case 67:
            return var1;
        }
    };
    var _closure1_slot16 = var4;
    var2 = function computeBasicPollChatData(arg1, arg2) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var22 = arg1;
            var2 = arg2;
            var1 = arguments[2];
            var20 = undefined;
            if(!(var1 === var20)) { _fun0007_ip = 69; continue _fun0007 }
case 70:
            var1 = {};
case 69:
            var3 = var1.formattedExpirationLabel;
            var18 = var22.poll;
            var19 = null;
            if(!(var19 == var18)) { _fun0007_ip = 71; continue _fun0007 }
case 47:
            return var20;
case 71:
            var5 = var22.state;
            var4 = _closure1_slot10;
            var4 = var4.SENT;
            var7 = var5 === var4;
            var14 = '';
            if(!var7) { _fun0007_ip = 13; continue _fun0007 }
case 72:
            if(!(var19 == var3)) { _fun0007_ip = 73; continue _fun0007 }
case 35:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var4 = 12;
            var4 = var6[var4];
            var6 = var5.bind(var20)(var4);
            var5 = var6.formatExpirationLabel;
            var4 = var18.expiry;
            var3 = var5.bind(var6)(var4);
case 73:
            var14 = var3;
case 13:
            var9 = var19 == var14;
            if(!var9) { _fun0007_ip = 74; continue _fun0007 }
case 75:
            var9 = var7;
case 74:
            if(!(var19 == var2)) { _fun0007_ip = 76; continue _fun0007 }
case 42:
            var5 = _closure1_slot9;
            var3 = var22.getChannelId;
            var4 = var3.bind(var22)();
            var3 = var22.id;
            var2 = var5.bind(var20)(var4, var3);
case 76:
            if(!(var19 == var2)) { _fun0007_ip = 77; continue _fun0007 }
case 78:
            var2 = _closure1_slot11;
case 77:
            var5 = var2.selectedAnswerIds;
            var4 = var2.submitting;
            var10 = var2.editing;
            var2 = var2.showResults;
            var11 = var22.reactions;
            var3 = _closure1_slot16;
            var6 = var3.bind(var20)(var22);
            var3 = var11;
            var8 = true;
            if(var6) { _fun0007_ip = 79; continue _fun0007 }
case 80:
            var15 = _closure1_slot7;
            var13 = var15.getMessage;
            var12 = var22.channel_id;
            var6 = var22.id;
            var13 = var13.bind(var15)(var12, var6);
            var6 = var22.isSearchHit;
            var6 = !var6;
            if(!var6) { _fun0007_ip = 63; continue _fun0007 }
case 81:
            var6 = var19 != var13;
case 63:
            var15 = var19 == var13;
            var12 = undefined;
            if(var15) { _fun0007_ip = 82; continue _fun0007 }
case 83:
            var12 = var13.reactions;
case 82:
            if(!(var19 != var12)) { _fun0007_ip = 84; continue _fun0007 }
case 24:
            var11 = var12;
case 84:
            var3 = var11;
            var8 = var6;
case 79:
            var11 = var5.size;
            var6 = 0;
            var13 = var11 > var6;
            var11 = var3.some;
            var6 = function(arg1) {
                var1 = arg1;
                var2 = var1.me_vote;
                var1 = true;
                var1 = var1 === var2;
                return var1;
            };
            var11 = var11.bind(var3)(var6);
            var12 = !var10;
            var6 = var3;
            if(!var12) { _fun0007_ip = 64; continue _fun0007 }
case 85:
            var12 = var11;
case 64:
            var3 = var12;
            if(var12) { _fun0007_ip = 86; continue _fun0007 }
case 87:
            var3 = var9;
case 86:
            if(var3) { _fun0007_ip = 26; continue _fun0007 }
case 88:
            var3 = var2;
case 26:
            var15 = var7;
            if(!var7) { _fun0007_ip = 89; continue _fun0007 }
case 90:
            var15 = var8;
case 89:
            if(!var15) { _fun0007_ip = 91; continue _fun0007 }
case 92:
            var16 = !var11;
            if(var16) { _fun0007_ip = 93; continue _fun0007 }
case 94:
            var16 = var10;
case 93:
            if(var16) { _fun0007_ip = 95; continue _fun0007 }
case 66:
            var16 = var3;
case 95:
            var15 = var16;
case 91:
            var21 = _closure1_slot5;
            var17 = var21.getChannel;
            var16 = var22.getChannelId;
            var16 = var16.bind(var22)();
            var17 = var17.bind(var21)(var16);
            var16 = var19 == var17;
            var21 = undefined;
            if(var16) { _fun0007_ip = 96; continue _fun0007 }
case 97:
            var16 = var17.getGuildId;
            var16 = var19 == var16;
            var21 = undefined;
            if(var16) { _fun0007_ip = 96; continue _fun0007 }
case 98:
            var16 = var17.getGuildId;
            var21 = var16.bind(var17)();
case 96:
            var16 = var19 != var21;
            var19 = null;
            if(!var16) { _fun0007_ip = 99; continue _fun0007 }
case 100:
            var17 = _closure1_slot6;
            var16 = var17.getSelfMember;
            var19 = var16.bind(var17)(var21);
case 99:
            var16 = _closure1_slot0;
            var21 = _closure1_slot2;
            var1 = 13;
            var1 = var21[var1];
            var17 = var16.bind(var20)(var1);
            var1 = var17.hasAutomodQuarantinedProfile;
            var17 = var1.bind(var17)(var19);
            var1 = 14;
            var1 = var21[var1];
            var16 = var16.bind(var20)(var1);
            var1 = var16.isMemberCommunicationDisabled;
            var16 = var1.bind(var16)(var19);
            var1 = {};
            var1['poll'] = var18;
            var1['canTapAnswers'] = var15;
            var15 = var12;
            if(!var15) { _fun0007_ip = 101; continue _fun0007 }
case 102:
            var15 = var7;
case 101:
            if(!var15) { _fun0007_ip = 103; continue _fun0007 }
case 104:
            var15 = !var9;
case 103:
            var1['canRemoveVote'] = var15;
            var1['canShowVoteCounts'] = var3;
            var15 = !var4;
            if(!var15) { _fun0007_ip = 105; continue _fun0007 }
case 106:
            var15 = var13;
case 105:
            if(!var15) { _fun0007_ip = 107; continue _fun0007 }
case 108:
            var15 = !var12;
case 107:
            if(!var15) { _fun0007_ip = 109; continue _fun0007 }
case 110:
            var15 = var7;
case 109:
            if(!var15) { _fun0007_ip = 111; continue _fun0007 }
case 112:
            var15 = !var17;
case 111:
            if(!var15) { _fun0007_ip = 113; continue _fun0007 }
case 114:
            var15 = !var16;
case 113:
            var1['canSubmitVote'] = var15;
            var1['expirationLabel'] = var14;
            var1['hasSelectedAnswer'] = var13;
            var1['hasVoted'] = var12;
            var1['hasVoteRecorded'] = var11;
            var1['isEditingVote'] = var10;
            var1['isExpired'] = var9;
            var1['isInteractive'] = var8;
            var1['isSent'] = var7;
            var1['reactions'] = var6;
            var1['selectedAnswerIds'] = var5;
            var1['submitting'] = var4;
            var1['tapShouldOpenVotersModal'] = var3;
            var1['showResults'] = var2;
            return var1;
        }
    };
    var _closure1_slot17 = var2;
    var10 = global;
    var13 = var10.Object;
    var12 = var13.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var12.bind(var13)(var3, var1, var7);
    var1 = 0;
    var7 = var9[var1];
    var1 = undefined;
    var7 = var11.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var7 = 1;
    var7 = var9[var7];
    var7 = var11.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var7 = 2;
    var7 = var9[var7];
    var7 = var11.bind(var1)(var7);
    var _closure1_slot5 = var7;
    var7 = 3;
    var7 = var9[var7];
    var7 = var11.bind(var1)(var7);
    var _closure1_slot6 = var7;
    var7 = 4;
    var7 = var9[var7];
    var7 = var11.bind(var1)(var7);
    var _closure1_slot7 = var7;
    var7 = 5;
    var7 = var9[var7];
    var7 = var11.bind(var1)(var7);
    var _closure1_slot8 = var7;
    var7 = 6;
    var7 = var9[var7];
    var7 = var8.bind(var1)(var7);
    var7 = var7.getPollState;
    var _closure1_slot9 = var7;
    var7 = 7;
    var7 = var9[var7];
    var7 = var8.bind(var1)(var7);
    var11 = var7.EMPTY_STRING_SNOWFLAKE_ID;
    var7 = var7.MessageStates;
    var _closure1_slot10 = var7;
    var7 = {'channelId': null, 'selectedAnswerIds': null, 'submitting': false, 'editing': false, 'showResults': false};
    var7['channelId'] = var11;
    var10 = var10.Set;
    var11 = var10.prototype;
    var11 = Object.create(var11, {constructor: {value: var10}});
    var17 = var11;
    var10 = new var17[var10](var16);
    var10 = var10 instanceof Object ? var10 : var11;
    var7['selectedAnswerIds'] = var10;
    var _closure1_slot11 = var7;
    var7 = 22;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/polls/chat/formatPollMessageChatData.tsx';
    var7 = var8.bind(var9)(var7);
    var6 = function formatPollMessageChatData(arg1, arg2) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var6 = arg1;
            var1 = arguments[2];
            var15 = undefined;
            if(!(var1 === var15)) { _fun0008_ip = 115; continue _fun0008 }
case 32:
            var1 = {};
case 115:
            var2 = var1.animateEmoji;
            if(!(var2 === var15)) { _fun0008_ip = 34; continue _fun0008 }
case 44:
            var2 = false;
case 34:
            var _closure2_slot0 = var2;
            var17 = var1.theme;
            if(!(var17 === var15)) { _fun0008_ip = 2; continue _fun0008 }
case 116:
            var17 = 'dark';
case 2:
            var1 = var1.formattedExpirationLabel;
            var _closure2_slot1 = var15;
            var _closure2_slot2 = var15;
            var _closure2_slot3 = var15;
            var _closure2_slot4 = var15;
            var _closure2_slot5 = var15;
            var _closure2_slot6 = var15;
            var _closure2_slot7 = var15;
            var _closure2_slot8 = var15;
            var _closure2_slot9 = var15;
            var _closure2_slot10 = var15;
            var _closure2_slot11 = var15;
            var _closure2_slot12 = var15;
            var _closure2_slot13 = var15;
            var _closure2_slot14 = var15;
            var _closure2_slot15 = var15;
            var27 = var6.poll;
            var2 = null;
            if(!(var2 != var27)) { _fun0008_ip = 117; continue _fun0008 }
case 118:
            var4 = _closure1_slot8;
            var3 = var4.getCurrentUser;
            var7 = var3.bind(var4)();
            if(!(var2 != var7)) { _fun0008_ip = 117; continue _fun0008 }
case 119:
            var3 = _closure1_slot3;
            var3 = var3.useReducedMotion;
            _closure2_slot1 = var3;
            var5 = _closure1_slot5;
            var4 = var5.getChannel;
            var3 = var6.getChannelId;
            var3 = var3.bind(var6)();
            var4 = var4.bind(var5)(var3);
            var3 = var2 == var4;
            var5 = undefined;
            if(var3) { _fun0008_ip = 120; continue _fun0008 }
case 121:
            var3 = var4.getGuildId;
            var3 = var2 == var3;
            var5 = undefined;
            if(var3) { _fun0008_ip = 120; continue _fun0008 }
case 122:
            var3 = var4.getGuildId;
            var5 = var3.bind(var4)();
case 120:
            var4 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 15;
            var3 = var8[var3];
            var4 = var4.bind(var15)(var3);
            var3 = var4.getAvatarUrl;
            var4 = var3.bind(var4)(var7, var5);
            var18 = var27.answers;
            var16 = var27.layout_type;
            _closure2_slot2 = var16;
            var5 = _closure1_slot17;
            var3 = {};
            var3['formattedExpirationLabel'] = var1;
            var1 = arg2;
            var1 = var5.bind(var15)(var6, var1, var3);
            if(!(var2 == var1)) { _fun0008_ip = 123; continue _fun0008 }
case 117:
            return var15;
case 123:
            var10 = var1.canTapAnswers;
            var20 = var1.canRemoveVote;
            var7 = var1.canShowVoteCounts;
            var22 = var1.canSubmitVote;
            _closure2_slot3 = var22;
            var2 = var1.expirationLabel;
            if(!(var15 === var2)) { _fun0008_ip = 124; continue _fun0008 }
case 125:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 16;
            var5 = var9[var3];
            var5 = var8.bind(var15)(var5);
            var6 = var5.intl;
            var5 = var6.string;
            var3 = var9[var3];
            var3 = var8.bind(var15)(var3);
            var3 = var3.t;
            var3 = var3.e+J3JS;
            var2 = var5.bind(var6)(var3);
case 124:
            _closure2_slot4 = var2;
            var8 = var1.hasSelectedAnswer;
            _closure2_slot5 = var8;
            var6 = var1.hasVoted;
            _closure2_slot6 = var6;
            var21 = var1.isEditingVote;
            var5 = var1.isExpired;
            _closure2_slot7 = var5;
            var11 = var1.isInteractive;
            var23 = var1.reactions;
            _closure2_slot8 = var23;
            var2 = var1.selectedAnswerIds;
            _closure2_slot9 = var2;
            var2 = var1.submitting;
            _closure2_slot10 = var2;
            var19 = var1.tapShouldOpenVotersModal;
            var1 = var1.showResults;
            _closure2_slot11 = var1;
            var3 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 17;
            var2 = var9[var2];
            var12 = var3.bind(var15)(var2);
            var2 = var12.getTotalVotes;
            var26 = var2.bind(var12)(var23);
            _closure2_slot12 = var26;
            var28 = 16;
            var2 = var9[var28];
            var2 = var3.bind(var15)(var2);
            var24 = var2.intl;
            var23 = var24.formatToPlainString;
            var2 = var9[var28];
            var2 = var3.bind(var15)(var2);
            var2 = var2.t;
            var12 = var2.XRkuoa;
            var2 = {};
            var25 = var26.toLocaleString;
            var25 = var25.bind(var26)();
            var2['count'] = var25;
            var2 = var23.bind(var24)(var12, var2);
            _closure2_slot13 = var2;
            var2 = global;
            var23 = var2.Math;
            var12 = var23.max;
            var24 = var18.map;
            var2 = function(arg1) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var3 = _closure1_slot14;
                    var2 = _closure2_slot8;
                    var1 = arg1;
                    var5 = var1.answer_id;
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var4 = var1.concat;
                    var1 = '';
                    var1 = var4.bind(var1)(var5);
                    var5 = undefined;
                    var3 = var3.bind(var5)(var2, var1);
                    var1 = null;
                    var4 = var1 == var3;
                    var2 = undefined;
                    if(var4) { _fun0009_ip = 126; continue _fun0009 }
case 127:
                    var3 = var3.count_details;
                    var4 = var1 == var3;
                    var2 = undefined;
                    if(var4) { _fun0009_ip = 126; continue _fun0009 }
case 38:
                    var2 = var3.vote;
case 126:
                    var3 = var1 != var2;
                    var1 = 0;
                    if(!var3) { _fun0009_ip = 128; continue _fun0009 }
case 129:
                    var1 = var2;
case 128:
                    return var1;
                }
            };
            var31 = var24.bind(var18)(var2);
            var2 = new Array(0);
            var30 = 0;
            var32 = var2;
            var24 = arraySpread(var32, var31, var30);
            var32 = var12;
            var31 = var2;
            var30 = var23;
            var2 = apply(var32, var31, var30);
            _closure2_slot14 = var2;
            var12 = var18.map;
            var2 = function(arg1) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var14 = arg1;
                    var5 = var14.answer_id;
                    var4 = global;
                    var1 = var4.HermesInternal;
                    var3 = var1.concat;
                    var1 = '';
                    var13 = var3.bind(var1)(var5);
                    var5 = _closure1_slot14;
                    var1 = _closure2_slot8;
                    var7 = undefined;
                    var15 = var5.bind(var7)(var1, var13);
                    var8 = null;
                    var1 = var8 == var15;
                    var9 = undefined;
                    if(var1) { _fun0010_ip = 130; continue _fun0010 }
case 72:
                    var1 = var15.count_details;
                    var5 = var8 == var1;
                    var9 = undefined;
                    if(var5) { _fun0010_ip = 130; continue _fun0010 }
case 131:
                    var9 = var1.vote;
case 130:
                    var10 = var8 != var9;
                    var5 = 0;
                    var1 = 0;
                    if(!var10) { _fun0010_ip = 132; continue _fun0010 }
case 133:
                    var1 = var9;
case 132:
                    var _closure3_slot0 = var1;
                    var9 = _closure2_slot12;
                    var10 = 0;
                    if(!(var10 !== var9)) { _fun0010_ip = 134; continue _fun0010 }
case 135:
                    var9 = _closure2_slot12;
                    var10 = var1 / var9;
case 134:
                    var11 = _closure2_slot9;
                    var9 = var11.has;
                    var11 = var9.bind(var11)(var13);
                    var9 = _closure2_slot14;
                    var12 = var1 >= var9;
                    if(!var12) { _fun0010_ip = 136; continue _fun0010 }
case 137:
                    var12 = var5 !== var1;
case 136:
                    var9 = _closure2_slot6;
                    var1 = undefined;
                    if(!var9) { _fun0010_ip = 138; continue _fun0010 }
case 139:
                    var16 = var8 == var15;
                    var5 = undefined;
                    if(var16) { _fun0010_ip = 140; continue _fun0010 }
case 141:
                    var5 = var15.me_vote;
case 140:
                    var9 = var8 != var5;
                    var1 = var5;
case 138:
                    if(!var9) { _fun0010_ip = 142; continue _fun0010 }
case 143:
                    var9 = var1;
case 142:
                    var15 = {};
                    var15['didSelfVote'] = var9;
                    var1 = _closure2_slot6;
                    var15['hasVoted'] = var1;
                    var1 = _closure2_slot7;
                    var15['isExpired'] = var1;
                    var15['isSelected'] = var11;
                    var15['isLeader'] = var12;
                    var1 = _closure2_slot11;
                    var15['showResults'] = var1;
                    var8 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var5 = 8;
                    var1 = var1[var5];
                    var8 = var8.bind(var7)(var1);
                    var1 = var8.match;
                    var17 = var1.bind(var8)(var15);
                    var16 = var17.with;
                    var1 = true;
                    var15 = {'isExpired': true, 'isLeader': true, 'didSelfVote': true};
                    var8 = function() {
                        var1 = 'victorSelected';
                        return var1;
                    };
                    var17 = var16.bind(var17)(var15, var8);
                    var16 = var17.with;
                    var15 = {'isExpired': true, 'isLeader': true, 'didSelfVote': false};
                    var8 = function() {
                        var1 = 'victorNotSelected';
                        return var1;
                    };
                    var17 = var16.bind(var17)(var15, var8);
                    var16 = var17.with;
                    var15 = {'isExpired': true, 'didSelfVote': true};
                    var8 = function() {
                        var1 = 'loserSelected';
                        return var1;
                    };
                    var17 = var16.bind(var17)(var15, var8);
                    var16 = var17.with;
                    var15 = {};
                    var15['isExpired'] = var1;
                    var8 = function() {
                        var1 = 'notVoted';
                        return var1;
                    };
                    var17 = var16.bind(var17)(var15, var8);
                    var16 = var17.with;
                    var15 = {'didSelfVote': true, 'isExpired': false};
                    var8 = function() {
                        var1 = 'voted';
                        return var1;
                    };
                    var17 = var16.bind(var17)(var15, var8);
                    var16 = var17.with;
                    var15 = {'hasVoted': true, 'isExpired': false};
                    var8 = function() {
                        var1 = 'notVoted';
                        return var1;
                    };
                    var16 = var16.bind(var17)(var15, var8);
                    var15 = var16.with;
                    var8 = {};
                    var8['isSelected'] = var1;
                    var1 = function() {
                        var1 = 'selected';
                        return var1;
                    };
                    var16 = var15.bind(var16)(var8, var1);
                    var15 = var16.with;
                    var8 = {'isExpired': false, 'showResults': true};
                    var1 = function() {
                        var1 = 'notVoted';
                        return var1;
                    };
                    var15 = var15.bind(var16)(var8, var1);
                    var8 = var15.otherwise;
                    var1 = function() {
                        var1 = 'normalVote';
                        return var1;
                    };
                    var8 = var8.bind(var15)(var1);
                    var1 = {};
                    var1['answerId'] = var13;
                    var13 = {};
                    var15 = var14.poll_media;
                    var15 = var15.text;
                    var13['text'] = var15;
                    var17 = _closure1_slot15;
                    var15 = var14.poll_media;
                    var16 = var15.emoji;
                    var15 = {};
                    var18 = _closure2_slot0;
                    var15['animateEmoji'] = var18;
                    var15 = var17.bind(var7)(var16, var15);
                    var13['emoji'] = var15;
                    var15 = var14.poll_media;
                    var15 = var15.sticker_id;
                    var13['stickerId'] = var15;
                    var14 = var14.poll_media;
                    var14 = var14.attachment_ids;
                    var13['attachmentIds'] = var14;
                    var1['pollMedia'] = var13;
                    var1['isSelected'] = var11;
                    var11 = _closure2_slot7;
                    if(!var11) { _fun0010_ip = 144; continue _fun0010 }
case 145:
                    var11 = var12;
case 144:
                    var1['isVictor'] = var11;
                    var1['didSelfVote'] = var9;
                    var1['style'] = var8;
                    var8 = _closure2_slot10;
                    if(!var8) { _fun0010_ip = 146; continue _fun0010 }
case 147:
                    var9 = _closure2_slot1;
                    var8 = !var9;
case 146:
                    var1['shouldAnimateTransition'] = var8;
                    var9 = var4.Math;
                    var8 = var9.round;
                    var4 = 100;
                    var4 = var4 * var10;
                    var4 = var8.bind(var9)(var4);
                    var1['votesPercentage'] = var4;
                    var4 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var5 = var8[var5];
                    var6 = var4.bind(var7)(var5);
                    var5 = var6.match;
                    var3 = _closure2_slot2;
                    var6 = var5.bind(var6)(var3);
                    var5 = var6.with;
                    var3 = 18;
                    var3 = var8[var3];
                    var3 = var4.bind(var7)(var3);
                    var3 = var3.PollLayoutTypes;
                    var4 = var3.IMAGE_ONLY_ANSWERS;
                    var3 = function() {
                        var2 = _closure3_slot0;
                        var1 = var2.toLocaleString;
                        var4 = var1.bind(var2)();
                        var1 = global;
                        var1 = var1.HermesInternal;
                        var3 = var1.concat;
                        var2 = '(';
                        var1 = ')';
                        var1 = var3.bind(var2)(var4, var1);
                        return var1;
                    };
                    var4 = var5.bind(var6)(var4, var3);
                    var3 = var4.otherwise;
                    var2 = function() {
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var1 = 16;
                        var3 = var6[var1];
                        var2 = undefined;
                        var3 = var5.bind(var2)(var3);
                        var4 = var3.intl;
                        var3 = var4.formatToPlainString;
                        var1 = var6[var1];
                        var1 = var5.bind(var2)(var1);
                        var1 = var1.t;
                        var2 = var1.XRkuoa;
                        var1 = {};
                        var6 = _closure3_slot0;
                        var5 = var6.toLocaleString;
                        var5 = var5.bind(var6)();
                        var1['count'] = var5;
                        var1 = var3.bind(var4)(var2, var1);
                        return var1;
                    };
                    var2 = var3.bind(var4)(var2);
                    var1['votes'] = var2;
                    return var1;
                }
            };
            var25 = var12.bind(var18)(var2);
            var24 = 8;
            var2 = var9[var24];
            var18 = var3.bind(var15)(var2);
            var12 = var18.match;
            var2 = {};
            var2['isExpired'] = var5;
            var2['canSubmitVote'] = var22;
            var2['hasVoted'] = var6;
            var2['isEditingVote'] = var21;
            var2['canRemoveVote'] = var20;
            var2['isInteractive'] = var11;
            var2['showResults'] = var1;
            var22 = var12.bind(var18)(var2);
            var18 = var22.with;
            var12 = {};
            var20 = false;
            var12['isInteractive'] = var20;
            var2 = function() {
                var1 = undefined;
                return var1;
            };
            var22 = var18.bind(var22)(var12, var2);
            var18 = var22.with;
            var12 = {};
            var23 = true;
            var12['isExpired'] = var23;
            var2 = function() {
                var1 = undefined;
                return var1;
            };
            var22 = var18.bind(var22)(var12, var2);
            var18 = var22.with;
            var12 = {};
            var12['isEditingVote'] = var23;
            var2 = function() {
                var1 = {};
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 16;
                var3 = var7[var2];
                var5 = undefined;
                var3 = var6.bind(var5)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var2 = var7[var2];
                var2 = var6.bind(var5)(var2);
                var2 = var2.t;
                var2 = var2.JwkNU1;
                var2 = var3.bind(var4)(var2);
                var1['label'] = var2;
                var2 = 'button';
                var1['presentation'] = var2;
                var2 = _closure2_slot5;
                var1['enabled'] = var2;
                var2 = 'submit';
                var1['type'] = var2;
                return var1;
            };
            var22 = var18.bind(var22)(var12, var2);
            var18 = var22.with;
            var12 = {};
            var12['canRemoveVote'] = var23;
            var2 = function() {
                var1 = {'label': null, 'presentation': 'secondaryButton', 'enabled': true, 'type': 'remove'};
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 16;
                var3 = var7[var2];
                var5 = undefined;
                var3 = var6.bind(var5)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var2 = var7[var2];
                var2 = var6.bind(var5)(var2);
                var2 = var2.t;
                var2 = var2.XhQEh4;
                var2 = var3.bind(var4)(var2);
                var1['label'] = var2;
                return var1;
            };
            var22 = var18.bind(var22)(var12, var2);
            var18 = var22.with;
            var12 = {'hasVoted': false, 'showResults': true};
            var2 = function() {
                var1 = {'label': null, 'presentation': 'secondaryButton', 'enabled': true, 'type': 'showVotes'};
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 16;
                var3 = var7[var2];
                var5 = undefined;
                var3 = var6.bind(var5)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var2 = var7[var2];
                var2 = var6.bind(var5)(var2);
                var2 = var2.t;
                var2 = var2.gNj6Ii;
                var2 = var3.bind(var4)(var2);
                var1['label'] = var2;
                return var1;
            };
            var18 = var18.bind(var22)(var12, var2);
            var12 = var18.otherwise;
            var2 = function() {
                var1 = {};
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 16;
                var3 = var7[var2];
                var5 = undefined;
                var3 = var6.bind(var5)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var2 = var7[var2];
                var2 = var6.bind(var5)(var2);
                var2 = var2.t;
                var2 = var2.JwkNU1;
                var2 = var3.bind(var4)(var2);
                var1['label'] = var2;
                var2 = 'button';
                var1['presentation'] = var2;
                var2 = _closure2_slot3;
                var1['enabled'] = var2;
                var2 = 'submit';
                var1['type'] = var2;
                return var1;
            };
            var12 = var12.bind(var18)(var2);
            var2 = 19;
            var2 = var9[var2];
            var3 = var3.bind(var15)(var2);
            var2 = var3.isIOS;
            var18 = var2.bind(var3)();
            var22 = _closure1_slot0;
            var2 = _closure1_slot2;
            var3 = var2[var28];
            var3 = var22.bind(var15)(var3);
            var9 = var3.intl;
            var3 = var9.string;
            var2 = var2[var28];
            var2 = var22.bind(var15)(var2);
            var2 = var2.t;
            if(var18) { _fun0008_ip = 148; continue _fun0008 }
case 149:
            var18 = var2.cHfFqq;
            var18 = var3.bind(var9)(var18);
            _fun0008_ip = 150; continue _fun0008;
case 148:
            var2 = var2.PVATMz;
            var18 = var3.bind(var9)(var2);
case 150:
            _closure2_slot15 = var18;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var24];
            var9 = var3.bind(var15)(var2);
            var3 = var9.match;
            var2 = {};
            var2['isExpired'] = var5;
            var2['isInteractive'] = var11;
            var2['isEditingVote'] = var21;
            var21 = var3.bind(var9)(var2);
            var9 = var21.with;
            var3 = {'isInteractive': false, 'isExpired': false};
            var2 = function() {
                var1 = {'label': null, 'presentation': 'text', 'enabled': false};
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 16;
                var3 = var7[var2];
                var5 = undefined;
                var3 = var6.bind(var5)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var2 = var7[var2];
                var2 = var6.bind(var5)(var2);
                var2 = var2.t;
                var2 = var2.trrip6;
                var2 = var3.bind(var4)(var2);
                var1['label'] = var2;
                return var1;
            };
            var21 = var9.bind(var21)(var3, var2);
            var9 = var21.with;
            var3 = {};
            var3['isEditingVote'] = var23;
            var2 = function() {
                var1 = {'label': null, 'presentation': 'textButton', 'enabled': true, 'type': 'cancel'};
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 16;
                var3 = var7[var2];
                var5 = undefined;
                var3 = var6.bind(var5)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var2 = var7[var2];
                var2 = var6.bind(var5)(var2);
                var2 = var2.t;
                var2 = var2.ETE/oK;
                var2 = var3.bind(var4)(var2);
                var1['label'] = var2;
                return var1;
            };
            var9 = var9.bind(var21)(var3, var2);
            var3 = var9.otherwise;
            var2 = function() {
                var1 = {'label': null, 'secondaryLabel': null, 'accessibilityHint': null, 'presentation': 'text', 'enabled': true, 'type': 'showVoterDetails'};
                var3 = _closure2_slot13;
                var1['label'] = var3;
                var3 = _closure2_slot4;
                var1['secondaryLabel'] = var3;
                var2 = _closure2_slot15;
                var1['accessibilityHint'] = var2;
                return var1;
            };
            var3 = var3.bind(var9)(var2);
            var2 = undefined;
            if(!var11) { _fun0008_ip = 151; continue _fun0008 }
case 152:
            var2 = undefined;
            if(var5) { _fun0008_ip = 151; continue _fun0008 }
case 153:
            var2 = undefined;
            if(var6) { _fun0008_ip = 151; continue _fun0008 }
case 154:
            var2 = undefined;
            if(var1) { _fun0008_ip = 151; continue _fun0008 }
case 155:
            var1 = {'label': null, 'presentation': 'textButton', 'enabled': true, 'type': 'showVotes'};
            var26 = _closure1_slot0;
            var9 = _closure1_slot2;
            var21 = var9[var28];
            var21 = var26.bind(var15)(var21);
            var22 = var21.intl;
            var21 = var22.string;
            var9 = var9[var28];
            var9 = var26.bind(var15)(var9);
            var9 = var9.t;
            var9 = var9./KHAUF;
            var9 = var21.bind(var22)(var9);
            var1['label'] = var9;
            var2 = var1;
case 151:
            var9 = var27.allow_multiselect;
            var22 = _closure1_slot0;
            var21 = _closure1_slot2;
            var1 = var21[var24];
            var28 = var22.bind(var15)(var1);
            var26 = var28.match;
            var1 = {};
            var1['isInteractive'] = var11;
            var1['isExpired'] = var5;
            var1['canSelectMultipleAnswers'] = var9;
            var29 = var26.bind(var28)(var1);
            var28 = var29.with;
            var26 = {};
            var26['isInteractive'] = var20;
            var1 = function() {
                var1 = undefined;
                return var1;
            };
            var29 = var28.bind(var29)(var26, var1);
            var28 = var29.with;
            var26 = {};
            var26['isExpired'] = var23;
            var1 = function() {
                var1 = undefined;
                return var1;
            };
            var29 = var28.bind(var29)(var26, var1);
            var28 = var29.with;
            var26 = {};
            var26['canSelectMultipleAnswers'] = var23;
            var1 = function() {
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 16;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.yCXvxc;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var28 = var28.bind(var29)(var26, var1);
            var26 = var28.otherwise;
            var1 = function() {
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 16;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.9Y2wKC;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var26 = var26.bind(var28)(var1);
            var1 = {};
            var27 = var27.question;
            var1['question'] = var27;
            var1['promptLabel'] = var26;
            var1['answers'] = var25;
            var21 = var21[var24];
            var24 = var22.bind(var15)(var21);
            var22 = var24.match;
            var21 = {};
            var21['tapShouldOpenVotersModal'] = var19;
            var21['canTapAnswers'] = var10;
            var21['canSelectMultipleAnswers'] = var9;
            var25 = var22.bind(var24)(var21);
            var24 = var25.with;
            var22 = {};
            var22['tapShouldOpenVotersModal'] = var23;
            var21 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 20;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.PollChatAnswerInteractionType;
                var1 = var1.LIST;
                return var1;
            };
            var25 = var24.bind(var25)(var22, var21);
            var24 = var25.with;
            var22 = {};
            var22['canTapAnswers'] = var20;
            var21 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 20;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.PollChatAnswerInteractionType;
                var1 = var1.LIST;
                return var1;
            };
            var24 = var24.bind(var25)(var22, var21);
            var22 = var24.with;
            var21 = {};
            var21['canSelectMultipleAnswers'] = var20;
            var20 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 20;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.PollChatAnswerInteractionType;
                var1 = var1.RADIO_BUTTONS;
                return var1;
            };
            var22 = var22.bind(var24)(var21, var20);
            var21 = var22.with;
            var20 = {};
            var20['canSelectMultipleAnswers'] = var23;
            var14 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 20;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.PollChatAnswerInteractionType;
                var1 = var1.CHECKBOXES;
                return var1;
            };
            var20 = var21.bind(var22)(var20, var14);
            var14 = var20.exhaustive;
            var14 = var14.bind(var20)();
            var1['answersInteraction'] = var14;
            var14 = undefined;
            if(!var19) { _fun0008_ip = 156; continue _fun0008 }
case 157:
            var14 = var18;
case 156:
            var1['answerTapAccessibilityLabel'] = var14;
            var1['layoutType'] = var16;
            var14 = _closure1_slot1;
            var18 = _closure1_slot2;
            var13 = 21;
            var13 = var18[var13];
            var14 = var14.bind(var15)(var13);
            var13 = {};
            var13['theme'] = var17;
            var13['layoutType'] = var16;
            var13 = var14.bind(var15)(var13);
            var1['resources'] = var13;
            var13 = 'normal';
            var1['containerStyle'] = var13;
            var1['primaryAction'] = var12;
            var1['isInteractive'] = var11;
            var1['canTapAnswers'] = var10;
            var1['canSelectMultipleAnswers'] = var9;
            var1['hasSelectedAnswer'] = var8;
            var1['canShowVoteCounts'] = var7;
            var1['hasVoted'] = var6;
            var1['isExpired'] = var5;
            var1['myAvatarUrl'] = var4;
            var1['secondaryAction'] = var3;
            var1['tertiaryAction'] = var2;
            return var1;
        }
    };
    var3['default'] = var6;
    var3['reactionForId'] = var5;
    var3['isPollMessageDirectlyInteractive'] = var4;
    var3['computeBasicPollChatData'] = var2;
    return var1;
})();